export const id = 225;
export const ids = [225, 230];
export const modules = {
  41284: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(41221),
      Ob = hb(39459);
    let Gb = !1;

    function Ub() {
      Gb || (Gb = !0, Ob.d.prototype._sphericalPolynomialTargetSize = 0, Ob.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ob.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Bb.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
              this._texture._sphericalPolynomial = bb, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(bb) {
          this._texture && (this._texture._sphericalPolynomial = bb)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36889: (bb, ub, hb) => {
    hb.d(ub, {
      Color3: () => Bb.b,
      b: () => Bb.c
    });
    var Bb = hb(36893);
    (0, Bb.g)()
  },
  37390: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(37399);
    class Ob {
      static GetPlanes(bb) {
        const ub = [];
        for (let hb = 0; hb < 6; hb++) ub.push(new Bb.d(0, 0, 0, 0));
        return Ob.GetPlanesToRef(bb, ub), ub
      }
      static GetNearPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[2], ub.normal.y = hb[7] + hb[6], ub.normal.z = hb[11] + hb[10], ub.d = hb[15] + hb[14], ub.normalize()
      }
      static GetFarPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[2], ub.normal.y = hb[7] - hb[6], ub.normal.z = hb[11] - hb[10], ub.d = hb[15] - hb[14], ub.normalize()
      }
      static GetLeftPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[0], ub.normal.y = hb[7] + hb[4], ub.normal.z = hb[11] + hb[8], ub.d = hb[15] + hb[12], ub.normalize()
      }
      static GetRightPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[0], ub.normal.y = hb[7] - hb[4], ub.normal.z = hb[11] - hb[8], ub.d = hb[15] - hb[12], ub.normalize()
      }
      static GetTopPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[1], ub.normal.y = hb[7] - hb[5], ub.normal.z = hb[11] - hb[9], ub.d = hb[15] - hb[13], ub.normalize()
      }
      static GetBottomPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[1], ub.normal.y = hb[7] + hb[5], ub.normal.z = hb[11] + hb[9], ub.d = hb[15] + hb[13], ub.normalize()
      }
      static GetPlanesToRef(bb, ub) {
        Ob.GetNearPlaneToRef(bb, ub[0]), Ob.GetFarPlaneToRef(bb, ub[1]), Ob.GetLeftPlaneToRef(bb, ub[2]), Ob.GetRightPlaneToRef(bb, ub[3]), Ob.GetTopPlaneToRef(bb, ub[4]), Ob.GetBottomPlaneToRef(bb, ub[5])
      }
      static IsPointInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; hb++)
          if (ub[hb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37399: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb, Ob) {
        this.normal = new Bb.q(bb, ub, hb), this.d = Ob
      }
      ZBb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ob(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ub = 0;
        return 0 !== bb && (ub = 1 / bb), this.normal.x *= ub, this.normal.y *= ub, this.normal.z *= ub, this.d *= ub, this
      }
      transform(bb) {
        const ub = Ob._TmpMatrix;
        bb.invertToRef(ub);
        const hb = ub.m,
          Bb = this.normal.x,
          Gb = this.normal.y,
          Ub = this.normal.z,
          Lb = this.d,
          Yb = Bb * hb[0] + Gb * hb[1] + Ub * hb[2] + Lb * hb[3],
          Sb = Bb * hb[4] + Gb * hb[5] + Ub * hb[6] + Lb * hb[7],
          ab = Bb * hb[8] + Gb * hb[9] + Ub * hb[10] + Lb * hb[11],
          Hb = Bb * hb[12] + Gb * hb[13] + Ub * hb[14] + Lb * hb[15];
        return new Ob(Yb, Sb, ab, Hb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ub, hb) {
        const Bb = ub.x - bb.x,
          Ob = ub.y - bb.y,
          Gb = ub.z - bb.z,
          Ub = hb.x - bb.x,
          Lb = hb.y - bb.y,
          Yb = hb.z - bb.z,
          Sb = Ob * Yb - Gb * Lb,
          ab = Gb * Ub - Bb * Yb,
          Hb = Bb * Lb - Ob * Ub,
          wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
        let Zb;
        return Zb = 0 !== wb ? 1 / wb : 0, this.normal.x = Sb * Zb, this.normal.y = ab * Zb, this.normal.z = Hb * Zb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ub) {
        return Bb.q.Dot(this.normal, bb) <= ub
      }
      signedDistanceTo(bb) {
        return Bb.q.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Ob(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ub, hb) {
        const Bb = new Ob(0, 0, 0, 0);
        return Bb.copyFromPoints(bb, ub, hb), Bb
      }
      static FromPositionAndNormal(bb, ub) {
        const hb = new Ob(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ub, hb)
      }
      static FromPositionAndNormalToRef(bb, ub, hb) {
        return hb.normal.mD(ub), hb.normal.normalize(), hb.d = -bb.dot(hb.normal), hb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ub, hb) {
        const Ob = -(ub.x * bb.x + ub.y * bb.y + ub.z * bb.z);
        return Bb.q.Dot(hb, ub) + Ob
      }
    }
    Ob._TmpMatrix = Bb.d.Identity()
  },
  36720: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Matrix: () => Bb.d,
      Quaternion: () => Bb.f,
      RegisterMathVector: () => Bb.h,
      TmpVectors: () => Bb.i,
      Vector2: () => Bb.m,
      YX: () => Bb.q,
      Vector4: () => Bb.r
    });
    var Bb = hb(36727);
    (0, Bb.h)()
  },
  37699: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb, Bb) {
        this.x = bb, this.y = ub, this.width = hb, this.height = Bb
      }
      toGlobal(bb, ub) {
        return new Bb(this.x * bb, this.y * ub, this.width * bb, this.height * ub)
      }
      toGlobalToRef(bb, ub, hb) {
        return hb.x = this.x * bb, hb.y = this.y * ub, hb.width = this.width * bb, hb.height = this.height * ub, this
      }
      clone() {
        return new Bb(this.x, this.y, this.width, this.height)
      }
    }
  },
  41221: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb
    });
    var Bb = hb(36727),
      Ob = hb(36757),
      Gb = hb(39456),
      Ub = hb(36734),
      Lb = hb(36893);
    class Yb {
      constructor(bb, ub, hb, Bb) {
        this.name = bb, this.worldAxisForNormal = ub, this.worldAxisForFileX = hb, this.worldAxisForFileY = Bb
      }
    }
    class Sb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.ZN()?.UX().flushFramebuffer();
        const ub = bb.getSize().width,
          hb = bb._sphericalPolynomialTargetSize,
          Bb = hb > 0 ? this._NearestPow2Floor(hb) : 0,
          Ob = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Gb = Bb > 0 && Bb < ub && Ob,
          Ub = Gb ? Math.max(0, Math.round(Math.log2(ub / Bb))) : 0,
          Lb = Gb ? Math.max(1, Math.floor(ub / Math.pow(2, Ub))) : ub,
          Yb = bb.readPixels(0, Ub, void 0, !1),
          Sb = bb.readPixels(1, Ub, void 0, !1);
        let ab, Hb;
        bb.isRenderTarget ? (ab = bb.readPixels(3, Ub, void 0, !1), Hb = bb.readPixels(2, Ub, void 0, !1)) : (ab = bb.readPixels(2, Ub, void 0, !1), Hb = bb.readPixels(3, Ub, void 0, !1));
        const wb = bb.readPixels(4, Ub, void 0, !1),
          Zb = bb.readPixels(5, Ub, void 0, !1),
          Xb = bb.gammaSpace,
          pb = Bb > 0 && Bb < ub && !Gb;
        return new Promise((bb => {
          Promise.all([Sb, Yb, ab, Hb, wb, Zb]).then((hb => {
            let [Ob, Gb, Ub, Yb, Sb, ab] = hb, Hb = Lb;
            if (pb) {
              const bb = 4;
              Ob = this._DownsampleFace(Ob, ub, Bb, bb), Gb = this._DownsampleFace(Gb, ub, Bb, bb), Ub = this._DownsampleFace(Ub, ub, Bb, bb), Yb = this._DownsampleFace(Yb, ub, Bb, bb), Sb = this._DownsampleFace(Sb, ub, Bb, bb), ab = this._DownsampleFace(ab, ub, Bb, bb), Hb = Bb
            }
            const wb = {
              size: Hb,
              right: Gb,
              left: Ob,
              up: Ub,
              down: Yb,
              front: Sb,
              back: ab,
              format: 5,
              type: Ob instanceof Float32Array ? 1 : 0,
              gammaSpace: Xb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(wb))
          }))
        }))
      }
      static _AreaElement(bb, ub) {
        return Math.atan2(bb * ub, Math.sqrt(bb * bb + ub * ub + 1))
      }
      static _DownsampleFace(bb, ub, hb, Bb) {
        const Ob = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Gb = hb * hb * Bb,
          Ub = new Float32Array(Gb),
          Lb = ub / hb,
          Yb = 1 / (Lb * Lb);
        for (let ab = 0; ab < hb; ab++) {
          const bb = Math.floor(ab * Lb),
            Gb = Math.floor((ab + 1) * Lb);
          for (let Sb = 0; Sb < hb; Sb++) {
            const Hb = Math.floor(Sb * Lb),
              wb = Math.floor((Sb + 1) * Lb),
              Zb = (ab * hb + Sb) * Bb;
            for (let hb = 0; hb < Bb; hb++) {
              let Lb = 0;
              for (let Ub = bb; Ub < Gb; Ub++)
                for (let bb = Hb; bb < wb; bb++) Lb += Ob[(Ub * ub + bb) * Bb + hb];
              Ub[Zb + hb] = Lb * Yb
            }
          }
        }
        if (bb instanceof Float32Array) return Ub;
        const Sb = new(0, bb.constructor)(Gb);
        for (let ab = 0; ab < Gb; ab++) Sb[ab] = Ub[ab] + .5 | 0;
        return Sb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = ub > 0 ? this._NearestPow2Floor(ub) : 0;
        if (hb > 0 && bb.size > hb) {
          const ub = 5 === bb.format ? 4 : 3,
            Bb = ["right", "left", "up", "down", "front", "back"],
            Ob = {};
          for (const Gb of Bb) Ob[Gb] = this._DownsampleFace(bb[Gb], bb.size, hb, ub);
          bb = {
            ...bb,
            ...Ob,
            size: hb
          }
        }
        const Bb = new Gb.d;
        let Yb = 0;
        const Sb = 2 / bb.size,
          ab = Sb,
          Hb = .5 * Sb,
          wb = Hb - 1;
        for (let Gb = 0; Gb < 6; Gb++) {
          const ub = this._FileFaces[Gb],
            hb = bb[ub.name];
          let Zb = wb;
          const Xb = 5 === bb.format ? 4 : 3;
          for (let Gb = 0; Gb < bb.size; Gb++) {
            let pb = wb;
            for (let ab = 0; ab < bb.size; ab++) {
              const wb = ub.worldAxisForFileX.scale(pb).add(ub.worldAxisForFileY.scale(Zb)).add(ub.worldAxisForNormal);
              wb.normalize();
              const ob = this._AreaElement(pb - Hb, Zb - Hb) - this._AreaElement(pb - Hb, Zb + Hb) - this._AreaElement(pb + Hb, Zb - Hb) + this._AreaElement(pb + Hb, Zb + Hb);
              let Ab = hb[Gb * bb.size * Xb + ab * Xb + 0],
                lb = hb[Gb * bb.size * Xb + ab * Xb + 1],
                Kb = hb[Gb * bb.size * Xb + ab * Xb + 2];
              isNaN(Ab) && (Ab = 0), isNaN(lb) && (lb = 0), isNaN(Kb) && (Kb = 0), 0 === bb.type && (Ab /= 255, lb /= 255, Kb /= 255), bb.gammaSpace && (Ab = Math.pow((0, Ob.Clamp)(Ab), Ub.h), lb = Math.pow((0, Ob.Clamp)(lb), Ub.h), Kb = Math.pow((0, Ob.Clamp)(Kb), Ub.h));
              const Wb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Ab, lb, Kb);
                if (bb > Wb) {
                  const ub = Wb / bb;
                  Ab *= ub, lb *= ub, Kb *= ub
                }
              } else Ab = (0, Ob.Clamp)(Ab, 0, Wb), lb = (0, Ob.Clamp)(lb, 0, Wb), Kb = (0, Ob.Clamp)(Kb, 0, Wb);
              const Cb = new Lb.b(Ab, lb, Kb);
              Bb.addLight(wb, Cb, ob), Yb += ob, pb += Sb
            }
            Zb += ab
          }
        }
        const Zb = 6 * (4 * Math.PI) / 6 / Yb;
        return Bb.scaleInPlace(Zb), Bb.convertIncidentRadianceToIrradiance(), Bb.convertIrradianceToLambertianRadiance(), Gb.g.FromHarmonics(Bb)
      }
    }
    Sb._FileFaces = [new Yb("right", new Bb.q(1, 0, 0), new Bb.q(0, 0, -1), new Bb.q(0, -1, 0)), new Yb("left", new Bb.q(-1, 0, 0), new Bb.q(0, 0, 1), new Bb.q(0, -1, 0)), new Yb("up", new Bb.q(0, 1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, 1)), new Yb("down", new Bb.q(0, -1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, -1)), new Yb("front", new Bb.q(0, 0, 1), new Bb.q(1, 0, 0), new Bb.q(0, -1, 0)), new Yb("back", new Bb.q(0, 0, -1), new Bb.q(-1, 0, 0), new Bb.q(0, -1, 0))], Sb.MAX_HDRI_VALUE = 4096, Sb.PRESERVE_CLAMPED_COLORS = !1
  },
  40993: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.h,
      e: () => Bb.o
    });
    var Bb = hb(39511);
    (0, Bb.s)()
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  41258: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(41248),
      Ob = hb(41260);
    class Gb {
      static ExpandRGBDTexture(bb) {
        const ub = bb._texture;
        if (!ub || !bb.isRGBD) return;
        const Ob = ub.UX(),
          Gb = Ob.getCaps(),
          Ub = ub.isReady;
        let Lb = !1;
        Gb.textureHalfFloatRender && Gb.textureHalfFloatLinearFiltering ? (Lb = !0, ub.type = 2) : Gb.textureFloatRender && Gb.textureFloatLinearFiltering && (Lb = !0, ub.type = 1), Lb && (ub.isReady = !1, ub._isRGBD = !1, ub.invertY = !1);
        const Yb = async () => {
          const Gb = Ob.isWebGPU,
            Ub = Gb ? 1 : 0;
          ub.isReady = !1, Gb ? await hb.e(333).then((() => hb(60826))) : await hb.e(315).then((() => hb(60834)));
          const Lb = new Bb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ob, !1, void 0, ub.type, void 0, null, !1, void 0, Ub);
          Lb.externalTextureSamplerBinding = !0;
          const Yb = Ob.createRenderTargetTexture(ub.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ub.samplingMode,
            type: ub.type,
            format: 5
          });
          Lb.onEffectCreatedObservable.addOnce((hb => {
            hb.executeWhenCompiled((() => {
              Lb.onApply = bb => {
                bb._bindTexture("textureSampler", ub), bb.setFloat2("scale", 1, 1)
              }, bb.ZN()?.postProcessManager.directRender([Lb], Yb, !0), Ob.restoreDefaultFramebuffer(), Ob._releaseTexture(ub), Lb && Lb.dispose(), Yb._swapAndDie(ub), ub.isReady = !0
            }))
          }))
        };
        Lb && (Ub ? Yb() : bb.onLoadObservable.addOnce(Yb))
      }
      static async EncodeTextureToRGBD(bb, ub) {
        let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ub.UX().isWebGPU ? await hb.e(334).then((() => hb(60849))) : await hb.e(316).then((() => hb(60840))), await (0, Ob.b)("rgbdEncode", bb, ub, Bb, 1, 5)
      }
    }
  },
  60578: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AsyncLoop: () => Bb.d,
      RegisterTools: () => Bb.h,
      Tools: () => Bb.k,
      className: () => Bb.o
    });
    var Bb = hb(39559);
    (0, Bb.h)()
  },
  41291: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    class Bb {
      constructor(bb) {
        this._pendingActions = new Array, this._workerInfos = bb.map((bb => ({
          workerPromise: Promise.resolve(bb),
          idle: !0
        })))
      }
      dispose() {
        for (const bb of this._workerInfos) bb.workerPromise.then((bb => {
          bb.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(bb) {
        this._executeOnIdleWorker(bb) || this._pendingActions.push(bb)
      }
      _executeOnIdleWorker(bb) {
        for (const ub of this._workerInfos)
          if (ub.idle) return this._execute(ub, bb), !0;
        return !1
      }
      _execute(bb, ub) {
        bb.idle = !1, bb.workerPromise.then((hb => {
          ub(hb, (() => {
            const ub = this._pendingActions.shift();
            ub ? this._execute(bb, ub) : bb.idle = !0
          }))
        }))
      }
    }
    class Ob extends Bb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = ub, this._options = hb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const ub = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ub), this._execute(ub, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, ub) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((hb, Bb) => {
          ub(hb, (() => {
            Bb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const ub = this._workerInfos.indexOf(bb); - 1 !== ub && this._workerInfos.splice(ub, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ob.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60612: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AbstractThreeMfSerializer: () => VL,
      BVHExporter: () => nU,
      ContentTypeFileName: () => ZL,
      DefaultXmlSerializerFormatOptions: () => PU,
      DefaultXmlSerializerNumberOptions: () => IU,
      EXT_lights_area: () => oO,
      EXT_mesh_gpu_instancing: () => MB,
      EXT_texture_avif: () => OU,
      EXT_texture_webp: () => bU,
      GLTF2Export: () => eB,
      GLTFData: () => Sb,
      GetXmlFieldMeta: () => eU,
      GetXmlName: () => NU,
      IsQualifiedName: () => DU,
      KHR_draco_mesh_compression: () => cB,
      KHR_interactivity: () => SO,
      KHR_lights_punctual: () => GO,
      KHR_materials_anisotropy: () => WO,
      KHR_materials_clearcoat: () => nO,
      KHR_materials_coat: () => vO,
      KHR_materials_diffuse_roughness: () => NG,
      KHR_materials_diffuse_transmission: () => MO,
      KHR_materials_dispersion: () => qO,
      KHR_materials_emissive_strength: () => FO,
      KHR_materials_fuzz: () => aG,
      KHR_materials_ior: () => cO,
      KHR_materials_iridescence: () => uG,
      KHR_materials_openpbr: () => IG,
      KHR_materials_sheen: () => GG,
      KHR_materials_specular: () => XG,
      KHR_materials_transmission: () => lG,
      KHR_materials_unlit: () => rG,
      KHR_materials_volume: () => xG,
      KHR_materials_volume_scatter: () => vG,
      KHR_texture_basisu: () => TG,
      KHR_texture_transform: () => yG,
      Known3mfRelationshipTypes: () => XL,
      KnownI3mfContentType: () => YL,
      Matrix3d: () => WL,
      MatrixFormatter: () => CL,
      ModelFileName: () => HL,
      NumberFormatter: () => yU,
      OBJExport: () => Ub,
      Object3dDirName: () => aL,
      OpenXmlContentTypesNamespace: () => UL,
      OpenXmlRelationshipsNamespace: () => LL,
      RegisterEXT_lights_area: () => lO,
      RegisterEXT_mesh_gpu_instancing: () => IB,
      RegisterEXT_texture_avif: () => UU,
      RegisterEXT_texture_webp: () => hU,
      RegisterKHR_draco_mesh_compression: () => RB,
      RegisterKHR_interactivity: () => HO,
      RegisterKHR_lights_punctual: () => LO,
      RegisterKHR_materials_anisotropy: () => dO,
      RegisterKHR_materials_clearcoat: () => xO,
      RegisterKHR_materials_coat: () => JO,
      RegisterKHR_materials_diffuse_roughness: () => MG,
      RegisterKHR_materials_diffuse_transmission: () => IO,
      RegisterKHR_materials_dispersion: () => yO,
      RegisterKHR_materials_emissive_strength: () => kO,
      RegisterKHR_materials_fuzz: () => wG,
      RegisterKHR_materials_ior: () => RO,
      RegisterKHR_materials_iridescence: () => BG,
      RegisterKHR_materials_openpbr: () => qG,
      RegisterKHR_materials_sheen: () => LG,
      RegisterKHR_materials_specular: () => oG,
      RegisterKHR_materials_transmission: () => WG,
      RegisterKHR_materials_unlit: () => nG,
      RegisterKHR_materials_volume: () => gG,
      RegisterKHR_materials_volume_scatter: () => JG,
      RegisterKHR_texture_basisu: () => QG,
      RegisterKHR_texture_transform: () => FG,
      RelationshipDirName: () => SL,
      RelationshipFileName: () => wL,
      ResolveFormatOptions: () => EU,
      ResolveNumberOptions: () => qU,
      STLExport: () => LU,
      ST_ObjectType: () => GL,
      ST_Unit: () => OL,
      StringXmlWriter: () => bL,
      ThreeDimModelNamespace: () => hL,
      ThreeMf: () => FL,
      ThreeMfBase: () => NL,
      ThreeMfBaseMaterials: () => eL,
      ThreeMfBuild: () => sL,
      ThreeMfComponent: () => JL,
      ThreeMfComponents: () => tL,
      ThreeMfComponentsBuilder: () => IL,
      ThreeMfContentType: () => oL,
      ThreeMfContentTypes: () => pL,
      ThreeMfDocument: () => KL,
      ThreeMfDocumentBuilder: () => yL,
      ThreeMfItem: () => ML,
      ThreeMfMaterialBuilder: () => qL,
      ThreeMfMesh: () => xL,
      ThreeMfMeshBuilder: () => PL,
      ThreeMfMeta: () => rL,
      ThreeMfMetadataGroup: () => jL,
      ThreeMfModel: () => dL,
      ThreeMfModelBuilder: () => EL,
      ThreeMfObject: () => DL,
      ThreeMfObjectBuilder: () => mL,
      ThreeMfRelationship: () => lL,
      ThreeMfRelationships: () => AL,
      ThreeMfResources: () => nL,
      ThreeMfSerializer: () => TL,
      ThreeMfSerializerGlobalConfiguration: () => fL,
      ThreeMfTriangle: () => vL,
      ThreeMfTriangles: () => iL,
      ThreeMfVertex: () => gL,
      ThreeMfVertices: () => zL,
      ToQualifiedString: () => mU,
      TokenType: () => QU,
      TriangleSetsNamespace: () => BL,
      USDZExportAsync: () => rU,
      Utf8XmlWriterToBytes: () => uL,
      XmlAttr: () => tU,
      XmlBuilder: () => RU,
      XmlElem: () => JU,
      XmlIgnore: () => vU,
      XmlName: () => iU,
      XmlNameToParts: () => MU,
      XmlSerializer: () => TU,
      _ConvertToGLTFPBRMetallicRoughness: () => nh,
      _SolveMetallic: () => jh,
      __IGLTFExporterExtension: () => Lb
    });
    var Bb = hb(36720),
      Ob = hb(60578),
      Gb = hb(39728);
    class Ub {
      static OBJ(bb, ub, hb, Ub) {
        const Lb = [];
        let Yb = 1,
          Sb = 1;
        ub && (hb || (hb = "mat"), Lb.push("mtllib " + hb + ".mtl"));
        for (let ab = 0; ab < bb.length; ab++) {
          const hb = bb[ab],
            Hb = hb.name || `mesh${ab}}`;
          Lb.push(`o ${Hb}`);
          let wb = null;
          if (Ub) {
            const bb = hb.computeWorldMatrix(!0);
            wb = new Bb.Matrix, bb.invertToRef(wb), hb.bakeTransformIntoVertices(bb)
          }
          if (ub) {
            const bb = hb.material;
            bb && Lb.push("usemtl " + bb.id)
          }
          const Zb = hb.geometry;
          if (!Zb) {
            Ob.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Xb = Zb.getVerticesData("position"),
            pb = Zb.getVerticesData("normal"),
            ob = Zb.getVerticesData("uv"),
            Ab = Zb.XBb();
          let lb = 0,
            Kb = 0;
          if (!Xb || !Ab) {
            Ob.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Wb = bb[0].ZN().useRightHandedSystem ? 1 : -1;
          for (let bb = 0; bb < Xb.length; bb += 3) Lb.push("v " + Xb[bb] * Wb + " " + Xb[bb + 1] + " " + Xb[bb + 2]), lb++;
          if (null != pb)
            for (let bb = 0; bb < pb.length; bb += 3) Lb.push("vn " + pb[bb] * Wb + " " + pb[bb + 1] + " " + pb[bb + 2]);
          if (null != ob)
            for (let bb = 0; bb < ob.length; bb += 2) Lb.push("vt " + ob[bb] + " " + ob[bb + 1]), Kb++;
          const Cb = ["", "", ""],
            db = (hb.material || hb.ZN().defaultMaterial)._getEffectiveOrientation(hb),
            [rb, jb] = db === Gb.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let bb = 0; bb < Ab.length; bb += 3) {
            const ub = [String(Ab[bb] + Yb), String(Ab[bb + rb] + Yb), String(Ab[bb + jb] + Yb)],
              hb = [String(Ab[bb] + Sb), String(Ab[bb + rb] + Sb), String(Ab[bb + jb] + Sb)],
              Bb = ub,
              Ob = null != ob ? hb : Cb,
              Gb = null != pb ? ub : Cb;
            Lb.push("f " + Bb[0] + "/" + Ob[0] + "/" + Gb[0] + " " + Bb[1] + "/" + Ob[1] + "/" + Gb[1] + " " + Bb[2] + "/" + Ob[2] + "/" + Gb[2])
          }
          Ub && wb && hb.bakeTransformIntoVertices(wb), Yb += lb, Sb += Kb
        }
        return Lb.join("\n")
      }
      static MTL(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const hb = [],
          Bb = bb.material;
        hb.push("newmtl " + ub), hb.push("  Ns " + Bb.specularPower.toFixed(4)), hb.push("  Ni 1.5000"), hb.push("  d " + Bb.alpha.toFixed(4)), hb.push("  Tr 0.0000"), hb.push("  Tf 1.0000 1.0000 1.0000"), hb.push("  illum 2"), hb.push("  Ka " + Bb.ambientColor.r.toFixed(4) + " " + Bb.ambientColor.g.toFixed(4) + " " + Bb.ambientColor.b.toFixed(4)), hb.push("  Kd " + Bb.diffuseColor.r.toFixed(4) + " " + Bb.diffuseColor.g.toFixed(4) + " " + Bb.diffuseColor.b.toFixed(4)), hb.push("  Ks " + Bb.specularColor.r.toFixed(4) + " " + Bb.specularColor.g.toFixed(4) + " " + Bb.specularColor.b.toFixed(4)), hb.push("  Ke " + Bb.emissiveColor.r.toFixed(4) + " " + Bb.emissiveColor.g.toFixed(4) + " " + Bb.emissiveColor.b.toFixed(4));
        Bb.ambientTexture && hb.push("  map_Ka " + Bb.ambientTexture.name), Bb.diffuseTexture && hb.push("  map_Kd " + Bb.diffuseTexture.name), Bb.specularTexture && hb.push("  map_Ks " + Bb.specularTexture.name), Bb.bumpTexture && hb.push("  map_bump -imfchan z " + Bb.bumpTexture.name), Bb.opacityTexture && hb.push("  map_d " + Bb.opacityTexture.name);
        return hb.join("\n")
      }
    }
    var Lb = 0,
      Yb = hb(40993);
    class Sb {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const bb in this.files) {
          const ub = this.files[bb],
            hb = new Blob([ub], {
              type: (0, Yb.c)(bb)
            });
          Ob.Tools.Download(hb, bb)
        }
      }
    }
    var ab = hb(40598),
      Hb = hb(40551),
      wb = hb(41097),
      Zb = hb(40558),
      Xb = hb(39277),
      pb = hb(36748),
      ob = hb(36889),
      Ab = hb(36757);
    const lb = Ab.HighestCommonFactor,
      Kb = {
        ...Ab,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: lb
      };
    var Wb = hb(41260),
      Cb = hb(40586),
      db = hb(41051),
      rb = hb(41056),
      jb = hb(41277);
    (0, jb.RegisterDumpTools)();
    var nb = hb(39463),
      Db = hb(39467),
      xb = hb(38302),
      zb = hb(39573),
      gb = hb(39932),
      ib = hb(41258);
    let vb = 0;
    const tb = (bb, ub, hb, Bb) => {
        if (!bb[hb]) {
          const Ob = bb.useDelayedTextureLoading;
          bb.useDelayedTextureLoading = !1;
          const Gb = bb._blockEntityCollection;
          bb._blockEntityCollection = !1;
          const Ub = gb.f.CreateFromBase64String(ub, Bb + vb++, bb, !0, !1, gb.f.BILINEAR_SAMPLINGMODE);
          bb._blockEntityCollection = Gb;
          const Lb = bb.UX().getLoadedTexturesCache(),
            Yb = Lb.indexOf(Ub.getInternalTexture()); - 1 !== Yb && Lb.splice(Yb, 1), Ub.isRGBD = !0, Ub.wrapU = gb.f.CLAMP_ADDRESSMODE, Ub.wrapV = gb.f.CLAMP_ADDRESSMODE, bb[hb] = Ub, bb.useDelayedTextureLoading = Ob, ib.c.ExpandRGBDTexture(Ub);
          const Sb = bb.UX().onContextRestoredObservable.add((() => {
            Ub.isRGBD = !0;
            const ub = bb.onBeforeRenderObservable.add((() => {
              Ub.isReady() && (bb.onBeforeRenderObservable.remove(ub), ib.c.ExpandRGBDTexture(Ub))
            }))
          }));
          bb.XN.add((() => {
            bb.UX().onContextRestoredObservable.remove(Sb)
          }))
        }
        return bb[hb]
      },
      Jb = bb => tb(bb, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      eb = bb => tb(bb, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Nb = bb => tb(bb, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var sb = hb(39551),
      Mb = hb(36727),
      mb = hb(39609),
      Ib = hb(39724),
      Pb = hb(39805);
    class qb extends Ib.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Eb = (() => {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
      let ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb = Pb.c,
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
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
        Ib = [];
      return bb = class extends Kb {
        get useEnergyConservation() {
          return (0, nb.b)(this, ub, "f")
        }
        set useEnergyConservation(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, nb.b)(this, hb, "f")
        }
        set useSmithVisibilityHeightCorrelated(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get useSphericalHarmonics() {
          return (0, nb.b)(this, Bb, "f")
        }
        set useSphericalHarmonics(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, nb.b)(this, Ob, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(bb) {
          (0, nb.f)(this, Ob, bb, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, nb.b)(this, Gb, "f")
        }
        set mixIblRadianceWithIrradiance(bb) {
          (0, nb.f)(this, Gb, bb, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, nb.b)(this, Ub, "f")
        }
        set useLegacySpecularEnergyConservation(bb) {
          (0, nb.f)(this, Ub, bb, "f")
        }
        get baseDiffuseModel() {
          return (0, nb.b)(this, Lb, "f")
        }
        set baseDiffuseModel(bb) {
          (0, nb.f)(this, Lb, bb, "f")
        }
        get dielectricSpecularModel() {
          return (0, nb.b)(this, Yb, "f")
        }
        set dielectricSpecularModel(bb) {
          (0, nb.f)(this, Yb, bb, "f")
        }
        get conductorSpecularModel() {
          return (0, nb.b)(this, Sb, "f")
        }
        set conductorSpecularModel(bb) {
          (0, nb.f)(this, Sb, bb, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ab) {
          let Hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ab, "PBRBRDF", 90, new qb, Hb), this._useEnergyConservation = bb.DEFAULT_USE_ENERGY_CONSERVATION, ub.set(this, (0, nb.k)(this, Wb, bb.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, nb.k)(this, Cb), bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), hb.set(this, (0, nb.k)(this, db, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, nb.k)(this, rb), bb.DEFAULT_USE_SPHERICAL_HARMONICS), Bb.set(this, (0, nb.k)(this, jb, bb.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, nb.k)(this, xb), bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Ob.set(this, (0, nb.k)(this, zb, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, nb.k)(this, gb), bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Gb.set(this, (0, nb.k)(this, ib, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, nb.k)(this, vb), bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Ub.set(this, (0, nb.k)(this, tb, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, nb.k)(this, Jb), bb.DEFAULT_DIFFUSE_MODEL), Lb.set(this, (0, nb.k)(this, eb, bb.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, nb.k)(this, Nb), bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Yb.set(this, (0, nb.k)(this, sb, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, nb.k)(this, Mb), bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Sb.set(this, (0, nb.k)(this, mb, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, nb.k)(this, Ib), this._internalMarkAllSubMeshesAsMiscDirty = ab._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(bb) {
          bb.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, bb.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, bb.SPHERICAL_HARMONICS = this._useSphericalHarmonics, bb.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, bb.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, bb.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, bb.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, bb.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, bb.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, Yb = new WeakMap, Sb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], Hb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], wb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], Zb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], Xb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], pb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], ob = [(0, Db.K)("baseDiffuseModel"), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], Ab = [(0, Db.K)("dielectricSpecularModel"), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], lb = [(0, Db.K)("conductorSpecularModel"), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], (0, nb.h)(bb, null, ab, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useEnergyConservation" in bb,
            get: bb => bb.useEnergyConservation,
            set: (bb, ub) => {
              bb.useEnergyConservation = ub
            }
          },
          metadata: ub
        }, Wb, Cb), (0, nb.h)(bb, null, Hb, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSmithVisibilityHeightCorrelated" in bb,
            get: bb => bb.useSmithVisibilityHeightCorrelated,
            set: (bb, ub) => {
              bb.useSmithVisibilityHeightCorrelated = ub
            }
          },
          metadata: ub
        }, db, rb), (0, nb.h)(bb, null, wb, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSphericalHarmonics" in bb,
            get: bb => bb.useSphericalHarmonics,
            set: (bb, ub) => {
              bb.useSphericalHarmonics = ub
            }
          },
          metadata: ub
        }, jb, xb), (0, nb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularGlossinessInputEnergyConservation" in bb,
            get: bb => bb.useSpecularGlossinessInputEnergyConservation,
            set: (bb, ub) => {
              bb.useSpecularGlossinessInputEnergyConservation = ub
            }
          },
          metadata: ub
        }, zb, gb), (0, nb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: bb => "mixIblRadianceWithIrradiance" in bb,
            get: bb => bb.mixIblRadianceWithIrradiance,
            set: (bb, ub) => {
              bb.mixIblRadianceWithIrradiance = ub
            }
          },
          metadata: ub
        }, ib, vb), (0, nb.h)(bb, null, pb, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLegacySpecularEnergyConservation" in bb,
            get: bb => bb.useLegacySpecularEnergyConservation,
            set: (bb, ub) => {
              bb.useLegacySpecularEnergyConservation = ub
            }
          },
          metadata: ub
        }, tb, Jb), (0, nb.h)(bb, null, ob, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseModel" in bb,
            get: bb => bb.baseDiffuseModel,
            set: (bb, ub) => {
              bb.baseDiffuseModel = ub
            }
          },
          metadata: ub
        }, eb, Nb), (0, nb.h)(bb, null, Ab, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "dielectricSpecularModel" in bb,
            get: bb => bb.dielectricSpecularModel,
            set: (bb, ub) => {
              bb.dielectricSpecularModel = ub
            }
          },
          metadata: ub
        }, sb, Mb), (0, nb.h)(bb, null, lb, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "conductorSpecularModel" in bb,
            get: bb => bb.conductorSpecularModel,
            set: (bb, ub) => {
              bb.conductorSpecularModel = ub
            }
          },
          metadata: ub
        }, mb, Ib), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb.DEFAULT_USE_ENERGY_CONSERVATION = !0, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, bb.DEFAULT_USE_SPHERICAL_HARMONICS = !0, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, bb.DEFAULT_DIFFUSE_MODEL = 0, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, bb
    })();
    var yb = hb(39717),
      Vb = hb(36893),
      Fb = hb(39719),
      fb = hb(39580),
      kb = hb(39795),
      Tb = hb(39788),
      cb = hb(39797),
      Qb = hb(39773);
    class Rb extends Ib.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let bu = (() => {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
      let ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb = Pb.c,
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
        qb = [],
        Eb = [],
        yb = [],
        Fb = [],
        fb = [],
        kb = [],
        cb = [],
        bu = [],
        uu = [],
        hu = [],
        Bu = [],
        Ou = [],
        Gu = [],
        Uu = [],
        Lu = [];
      return bb = class extends jb {
        get isEnabled() {
          return (0, nb.b)(this, ub, "f")
        }
        set isEnabled(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get indexOfRefraction() {
          return (0, nb.b)(this, hb, "f")
        }
        set indexOfRefraction(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get texture() {
          return (0, nb.b)(this, Bb, "f")
        }
        set texture(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nb.b)(this, Ob, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, nb.f)(this, Ob, bb, "f")
        }
        get textureRoughness() {
          return (0, nb.b)(this, Gb, "f")
        }
        set textureRoughness(bb) {
          (0, nb.f)(this, Gb, bb, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, nb.b)(this, Ub, "f")
        }
        set remapF0OnInterfaceChange(bb) {
          (0, nb.f)(this, Ub, bb, "f")
        }
        get bumpTexture() {
          return (0, nb.b)(this, Lb, "f")
        }
        set bumpTexture(bb) {
          (0, nb.f)(this, Lb, bb, "f")
        }
        get isTintEnabled() {
          return (0, nb.b)(this, Yb, "f")
        }
        set isTintEnabled(bb) {
          (0, nb.f)(this, Yb, bb, "f")
        }
        get tintTexture() {
          return (0, nb.b)(this, Sb, "f")
        }
        set tintTexture(bb) {
          (0, nb.f)(this, Sb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ab) {
          let Hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ab, "PBRClearCoat", 100, new Rb, Hb), this._isEnabled = !1, ub.set(this, (0, nb.k)(this, xb, !1)), this.intensity = ((0, nb.k)(this, zb), (0, nb.k)(this, gb, 1)), this.roughness = ((0, nb.k)(this, ib), (0, nb.k)(this, vb, 0)), this._indexOfRefraction = ((0, nb.k)(this, tb), bb._DefaultIndexOfRefraction), hb.set(this, (0, nb.k)(this, Jb, bb._DefaultIndexOfRefraction)), this._texture = ((0, nb.k)(this, eb), null), Bb.set(this, (0, nb.k)(this, Nb, null)), this._useRoughnessFromMainTexture = ((0, nb.k)(this, sb), !0), Ob.set(this, (0, nb.k)(this, Mb, !0)), this._textureRoughness = ((0, nb.k)(this, mb), null), Gb.set(this, (0, nb.k)(this, Ib, null)), this._remapF0OnInterfaceChange = ((0, nb.k)(this, qb), !0), Ub.set(this, (0, nb.k)(this, Eb, !0)), this._bumpTexture = ((0, nb.k)(this, yb), null), Lb.set(this, (0, nb.k)(this, Fb, null)), this._isTintEnabled = ((0, nb.k)(this, fb), !1), Yb.set(this, (0, nb.k)(this, kb, !1)), this.tintColor = ((0, nb.k)(this, cb), (0, nb.k)(this, bu, Vb.b.White())), this.tintColorAtDistance = ((0, nb.k)(this, uu), (0, nb.k)(this, hu, 1)), this.tintThickness = ((0, nb.k)(this, Bu), (0, nb.k)(this, Ou, 1)), this._tintTexture = ((0, nb.k)(this, Gu), null), Sb.set(this, (0, nb.k)(this, Uu, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nb.k)(this, Lu), this._internalMarkAllSubMeshesAsTexturesDirty = ab._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ub, hb) {
          if (!this._isEnabled) return !0;
          const Bb = this._material._disableBumpMap;
          if (bb._areTexturesDirty && ub.texturesEnabled) {
            if (this._texture && Tb.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Tb.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (hb.getCaps().standardDerivatives && this._bumpTexture && Tb.e.ClearCoatBumpTextureEnabled && !Bb && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Tb.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ub, hb) {
          this._isEnabled ? (ub.CLEARCOAT = !0, ub.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ub.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, ub._areTexturesDirty && hb.texturesEnabled && (this._texture && Tb.e.ClearCoatTextureEnabled ? (0, Qb.R)(this._texture, ub, "CLEARCOAT_TEXTURE") : ub.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Tb.e.ClearCoatTextureEnabled ? (0, Qb.R)(this._textureRoughness, ub, "CLEARCOAT_TEXTURE_ROUGHNESS") : ub.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Tb.e.ClearCoatBumpTextureEnabled ? (0, Qb.R)(this._bumpTexture, ub, "CLEARCOAT_BUMP") : ub.CLEARCOAT_BUMP = !1, ub.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === bb._DefaultIndexOfRefraction, this._isTintEnabled ? (ub.CLEARCOAT_TINT = !0, this._tintTexture && Tb.e.ClearCoatTintTextureEnabled ? ((0, Qb.R)(this._tintTexture, ub, "CLEARCOAT_TINT_TEXTURE"), ub.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : ub.CLEARCOAT_TINT_TEXTURE = !1) : (ub.CLEARCOAT_TINT = !1, ub.CLEARCOAT_TINT_TEXTURE = !1))) : (ub.CLEARCOAT = !1, ub.CLEARCOAT_TEXTURE = !1, ub.CLEARCOAT_TEXTURE_ROUGHNESS = !1, ub.CLEARCOAT_BUMP = !1, ub.CLEARCOAT_TINT = !1, ub.CLEARCOAT_TINT_TEXTURE = !1, ub.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ub.CLEARCOAT_DEFAULTIOR = !1, ub.CLEARCOAT_TEXTUREDIRECTUV = 0, ub.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, ub.CLEARCOAT_BUMPDIRECTUV = 0, ub.CLEARCOAT_REMAP_F0 = !1, ub.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, ub.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(bb, ub, hb, Bb) {
          if (!this._isEnabled) return;
          const Ob = Bb.materialDefines,
            Gb = this._material.isFrozen,
            Ub = this._material._disableBumpMap,
            Lb = this._material._invertNormalMapX,
            Yb = this._material._invertNormalMapY;
          if (!bb.useUbo || !Gb || !bb.isSync) {
            (this._texture || this._textureRoughness) && Tb.e.ClearCoatTextureEnabled && (bb.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Qb.u)(this._texture, bb, "clearCoat"), this._textureRoughness && !Ob.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Qb.u)(this._textureRoughness, bb, "clearCoatRoughness")), this._bumpTexture && hb.getCaps().standardDerivatives && Tb.e.ClearCoatTextureEnabled && !Ub && (bb.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Qb.u)(this._bumpTexture, bb, "clearCoatBump"), ub._mirroredCameraPosition ? bb.updateFloat2("vClearCoatTangentSpaceParams", Lb ? 1 : -1, Yb ? 1 : -1) : bb.updateFloat2("vClearCoatTangentSpaceParams", Lb ? -1 : 1, Yb ? -1 : 1)), this._tintTexture && Tb.e.ClearCoatTintTextureEnabled && (bb.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Qb.u)(this._tintTexture, bb, "clearCoatTint")), bb.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Bb = 1 - this._indexOfRefraction,
              Gb = 1 + this._indexOfRefraction,
              Sb = Math.pow(-Bb / Gb, 2),
              ab = 1 / this._indexOfRefraction;
            bb.updateFloat4("vClearCoatRefractionParams", Sb, ab, Bb, Gb), this._isTintEnabled && (bb.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), bb.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          ub.texturesEnabled && (this._texture && Tb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Ob.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Tb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && hb.getCaps().standardDerivatives && Tb.e.ClearCoatBumpTextureEnabled && !Ub && bb.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Tb.e.ClearCoatTintTextureEnabled && bb.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(bb) {
          return this._texture === bb || (this._textureRoughness === bb || (this._bumpTexture === bb || this._tintTexture === bb))
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._textureRoughness && bb.push(this._textureRoughness), this._bumpTexture && bb.push(this._bumpTexture), this._tintTexture && bb.push(this._tintTexture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && bb.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && bb.push(this._tintTexture)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(bb, ub, hb) {
          return bb.CLEARCOAT_BUMP && ub.addFallback(hb++, "CLEARCOAT_BUMP"), bb.CLEARCOAT_TINT && ub.addFallback(hb++, "CLEARCOAT_TINT"), bb.CLEARCOAT && ub.addFallback(hb++, "CLEARCOAT"), hb
        }
        getSamplers(bb) {
          bb.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, Yb = new WeakMap, Sb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(jb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, Db.K)()], wb = [(0, Db.K)()], Zb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ob = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Kb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, Db.p)()], Cb = [(0, Db.K)()], db = [(0, Db.K)()], rb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], (0, nb.h)(bb, null, ab, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: ub
        }, xb, zb), (0, nb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ub) => {
              bb.indexOfRefraction = ub
            }
          },
          metadata: ub
        }, Jb, eb), (0, nb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ub) => {
              bb.texture = ub
            }
          },
          metadata: ub
        }, Nb, sb), (0, nb.h)(bb, null, pb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, ub) => {
              bb.useRoughnessFromMainTexture = ub
            }
          },
          metadata: ub
        }, Mb, mb), (0, nb.h)(bb, null, ob, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, ub) => {
              bb.textureRoughness = ub
            }
          },
          metadata: ub
        }, Ib, qb), (0, nb.h)(bb, null, Ab, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: bb => "remapF0OnInterfaceChange" in bb,
            get: bb => bb.remapF0OnInterfaceChange,
            set: (bb, ub) => {
              bb.remapF0OnInterfaceChange = ub
            }
          },
          metadata: ub
        }, Eb, yb), (0, nb.h)(bb, null, lb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, ub) => {
              bb.bumpTexture = ub
            }
          },
          metadata: ub
        }, Fb, fb), (0, nb.h)(bb, null, Kb, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTintEnabled" in bb,
            get: bb => bb.isTintEnabled,
            set: (bb, ub) => {
              bb.isTintEnabled = ub
            }
          },
          metadata: ub
        }, kb, cb), (0, nb.h)(bb, null, rb, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintTexture" in bb,
            get: bb => bb.tintTexture,
            set: (bb, ub) => {
              bb.tintTexture = ub
            }
          },
          metadata: ub
        }, Uu, Lu), (0, nb.h)(null, null, Hb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ub) => {
              bb.intensity = ub
            }
          },
          metadata: ub
        }, gb, ib), (0, nb.h)(null, null, wb, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ub) => {
              bb.roughness = ub
            }
          },
          metadata: ub
        }, vb, tb), (0, nb.h)(null, null, Wb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, ub) => {
              bb.tintColor = ub
            }
          },
          metadata: ub
        }, bu, uu), (0, nb.h)(null, null, Cb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, ub) => {
              bb.tintColorAtDistance = ub
            }
          },
          metadata: ub
        }, hu, Bu), (0, nb.h)(null, null, db, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintThickness" in bb,
            get: bb => bb.tintThickness,
            set: (bb, ub) => {
              bb.tintThickness = ub
            }
          },
          metadata: ub
        }, Ou, Gu), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb._DefaultIndexOfRefraction = 1.5, bb
    })();
    class uu extends Ib.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let hu = (() => {
      var bb, ub, hb, Bb;
      let Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb = Pb.c,
        wb = [],
        Zb = [],
        Xb = [],
        pb = [],
        ob = [],
        Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
        xb = [];
      return bb = class extends Hb {
        get isEnabled() {
          return (0, nb.b)(this, ub, "f")
        }
        set isEnabled(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get texture() {
          return (0, nb.b)(this, hb, "f")
        }
        set texture(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get thicknessTexture() {
          return (0, nb.b)(this, Bb, "f")
        }
        set thicknessTexture(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Ob) {
          let Gb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ob, "PBRIridescence", 110, new uu, Gb), this._isEnabled = !1, ub.set(this, (0, nb.k)(this, wb, !1)), this.intensity = ((0, nb.k)(this, Zb), (0, nb.k)(this, Xb, 1)), this.minimumThickness = ((0, nb.k)(this, pb), (0, nb.k)(this, ob, bb._DefaultMinimumThickness)), this.maximumThickness = ((0, nb.k)(this, Ab), (0, nb.k)(this, lb, bb._DefaultMaximumThickness)), this.indexOfRefraction = ((0, nb.k)(this, Kb), (0, nb.k)(this, Wb, bb._DefaultIndexOfRefraction)), this._texture = ((0, nb.k)(this, Cb), null), hb.set(this, (0, nb.k)(this, db, null)), this._thicknessTexture = ((0, nb.k)(this, rb), null), Bb.set(this, (0, nb.k)(this, jb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nb.k)(this, xb), this._internalMarkAllSubMeshesAsTexturesDirty = Ob._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ub) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && ub.texturesEnabled) {
            if (this._texture && Tb.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Tb.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ub) {
          this._isEnabled ? (bb.IRIDESCENCE = !0, bb._areTexturesDirty && ub.texturesEnabled && (this._texture && Tb.e.IridescenceTextureEnabled ? (0, Qb.R)(this._texture, bb, "IRIDESCENCE_TEXTURE") : bb.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Tb.e.IridescenceTextureEnabled ? (0, Qb.R)(this._thicknessTexture, bb, "IRIDESCENCE_THICKNESS_TEXTURE") : bb.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (bb.IRIDESCENCE = !1, bb.IRIDESCENCE_TEXTURE = !1, bb.IRIDESCENCE_THICKNESS_TEXTURE = !1, bb.IRIDESCENCE_TEXTUREDIRECTUV = 0, bb.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(bb, ub) {
          if (!this._isEnabled) return;
          const hb = this._material.isFrozen;
          bb.useUbo && hb && bb.isSync || ((this._texture || this._thicknessTexture) && Tb.e.IridescenceTextureEnabled && (bb.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Qb.u)(this._texture, bb, "iridescence"), this._thicknessTexture && (0, Qb.u)(this._thicknessTexture, bb, "iridescenceThickness")), bb.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), ub.texturesEnabled && (this._texture && Tb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Tb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(bb) {
          return this._texture === bb || this._thicknessTexture === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._thicknessTexture && bb.push(this._thicknessTexture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && bb.push(this._thicknessTexture)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(bb, ub, hb) {
          return bb.IRIDESCENCE && ub.addFallback(hb++, "IRIDESCENCE"), hb
        }
        getSamplers(bb) {
          bb.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hb[Symbol.metadata] ?? null) : void 0;
        Ob = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Db.K)()], Ub = [(0, Db.K)()], Lb = [(0, Db.K)()], Yb = [(0, Db.K)()], Sb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], (0, nb.h)(bb, null, Ob, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: ub
        }, wb, Zb), (0, nb.h)(bb, null, Sb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ub) => {
              bb.texture = ub
            }
          },
          metadata: ub
        }, db, rb), (0, nb.h)(bb, null, ab, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, ub) => {
              bb.thicknessTexture = ub
            }
          },
          metadata: ub
        }, jb, xb), (0, nb.h)(null, null, Gb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ub) => {
              bb.intensity = ub
            }
          },
          metadata: ub
        }, Xb, pb), (0, nb.h)(null, null, Ub, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, ub) => {
              bb.minimumThickness = ub
            }
          },
          metadata: ub
        }, ob, Ab), (0, nb.h)(null, null, Lb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, ub) => {
              bb.maximumThickness = ub
            }
          },
          metadata: ub
        }, lb, Kb), (0, nb.h)(null, null, Yb, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ub) => {
              bb.indexOfRefraction = ub
            }
          },
          metadata: ub
        }, Wb, Cb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb._DefaultMinimumThickness = 100, bb._DefaultMaximumThickness = 400, bb._DefaultIndexOfRefraction = 1.3, bb
    })();
    class Bu extends Ib.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Ou = (() => {
      var bb, ub, hb, Bb;
      let Ob, Gb, Ub, Lb, Yb, Sb = Pb.c,
        ab = [],
        Hb = [],
        wb = [],
        Zb = [],
        Xb = [],
        pb = [],
        ob = [],
        Ab = [],
        lb = [],
        Kb = [];
      return bb = class extends Sb {
        get isEnabled() {
          return (0, nb.b)(this, ub, "f")
        }
        set isEnabled(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        set angle(bb) {
          this.direction.x = Math.cos(bb), this.direction.y = Math.sin(bb)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, nb.b)(this, hb, "f")
        }
        set texture(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get legacy() {
          return (0, nb.b)(this, Bb, "f")
        }
        set legacy(bb) {
          (0, nb.f)(this, Bb, bb, "f")
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
        constructor(bb) {
          let Ob = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "PBRAnisotropic", 110, new Bu, Ob), this._isEnabled = !1, ub.set(this, (0, nb.k)(this, ab, !1)), this.intensity = ((0, nb.k)(this, Hb), (0, nb.k)(this, wb, 1)), this.direction = ((0, nb.k)(this, Zb), (0, nb.k)(this, Xb, new Mb.m(1, 0))), this._texture = ((0, nb.k)(this, pb), null), hb.set(this, (0, nb.k)(this, ob, null)), this._legacy = ((0, nb.k)(this, Ab), !1), Bb.set(this, (0, nb.k)(this, lb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nb.k)(this, Kb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = bb._dirtyCallbacks[16]
        }
        isReadyForSubMesh(bb, ub) {
          return !this._isEnabled || !(bb._areTexturesDirty && ub.texturesEnabled && this._texture && Tb.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(bb, ub, hb) {
          this._isEnabled ? (bb.ANISOTROPIC = this._isEnabled, this._isEnabled && !hb.isVerticesDataPresent(mb.i.TangentKind) && (bb._needUVs = !0, bb.MAINUV1 = !0), bb._areTexturesDirty && ub.texturesEnabled && (this._texture && Tb.e.AnisotropicTextureEnabled ? (0, Qb.R)(this._texture, bb, "ANISOTROPIC_TEXTURE") : bb.ANISOTROPIC_TEXTURE = !1), bb._areMiscDirty && (bb.ANISOTROPIC_LEGACY = this._legacy)) : (bb.ANISOTROPIC = !1, bb.ANISOTROPIC_TEXTURE = !1, bb.ANISOTROPIC_TEXTUREDIRECTUV = 0, bb.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(bb, ub) {
          if (!this._isEnabled) return;
          const hb = this._material.isFrozen;
          bb.useUbo && hb && bb.isSync || (this._texture && Tb.e.AnisotropicTextureEnabled && (bb.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Qb.u)(this._texture, bb, "anisotropy")), bb.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), ub.texturesEnabled && this._texture && Tb.e.AnisotropicTextureEnabled && bb.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(bb) {
          return this._texture === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture)
        }
        dispose(bb) {
          bb && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(bb, ub, hb) {
          return bb.ANISOTROPIC && ub.addFallback(hb++, "ANISOTROPIC"), hb
        }
        getSamplers(bb) {
          bb.push("anisotropySampler")
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
        parse(bb, ub, hb) {
          super.parse(bb, ub, hb), void 0 === bb.legacy && (this.legacy = !0)
        }
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sb[Symbol.metadata] ?? null) : void 0;
        Ob = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Db.K)()], Ub = [(0, Db.F)()], Lb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Yb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], (0, nb.h)(bb, null, Ob, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: ub
        }, ab, Hb), (0, nb.h)(bb, null, Lb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ub) => {
              bb.texture = ub
            }
          },
          metadata: ub
        }, ob, Ab), (0, nb.h)(bb, null, Yb, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacy" in bb,
            get: bb => bb.legacy,
            set: (bb, ub) => {
              bb.legacy = ub
            }
          },
          metadata: ub
        }, lb, Kb), (0, nb.h)(null, null, Gb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ub) => {
              bb.intensity = ub
            }
          },
          metadata: ub
        }, wb, Zb), (0, nb.h)(null, null, Ub, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction,
            set: (bb, ub) => {
              bb.direction = ub
            }
          },
          metadata: ub
        }, Xb, pb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb
    })();
    class Gu extends Ib.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Uu = (() => {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb;
      let Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab = Pb.c,
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
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
        Mb = [];
      return bb = class extends Ab {
        get isEnabled() {
          return (0, nb.b)(this, ub, "f")
        }
        set isEnabled(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, nb.b)(this, hb, "f")
        }
        set linkSheenWithAlbedo(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get texture() {
          return (0, nb.b)(this, Bb, "f")
        }
        set texture(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nb.b)(this, Ob, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, nb.f)(this, Ob, bb, "f")
        }
        get roughness() {
          return (0, nb.b)(this, Gb, "f")
        }
        set roughness(bb) {
          (0, nb.f)(this, Gb, bb, "f")
        }
        get textureRoughness() {
          return (0, nb.b)(this, Ub, "f")
        }
        set textureRoughness(bb) {
          (0, nb.f)(this, Ub, bb, "f")
        }
        get albedoScaling() {
          return (0, nb.b)(this, Lb, "f")
        }
        set albedoScaling(bb) {
          (0, nb.f)(this, Lb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let Yb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "Sheen", 120, new Gu, Yb), this._isEnabled = !1, ub.set(this, (0, nb.k)(this, lb, !1)), this._linkSheenWithAlbedo = ((0, nb.k)(this, Kb), !1), hb.set(this, (0, nb.k)(this, Wb, !1)), this.intensity = ((0, nb.k)(this, Cb), (0, nb.k)(this, db, 1)), this.color = ((0, nb.k)(this, rb), (0, nb.k)(this, jb, Vb.b.White())), this._texture = ((0, nb.k)(this, xb), null), Bb.set(this, (0, nb.k)(this, zb, null)), this._useRoughnessFromMainTexture = ((0, nb.k)(this, gb), !0), Ob.set(this, (0, nb.k)(this, ib, !0)), this._roughness = ((0, nb.k)(this, vb), null), Gb.set(this, (0, nb.k)(this, tb, null)), this._textureRoughness = ((0, nb.k)(this, Jb), null), Ub.set(this, (0, nb.k)(this, eb, null)), this._albedoScaling = ((0, nb.k)(this, Nb), !1), Lb.set(this, (0, nb.k)(this, sb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nb.k)(this, Mb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ub) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && ub.texturesEnabled) {
            if (this._texture && Tb.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Tb.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ub) {
          this._isEnabled ? (bb.SHEEN = !0, bb.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, bb.SHEEN_ROUGHNESS = null !== this._roughness, bb.SHEEN_ALBEDOSCALING = this._albedoScaling, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bb._areTexturesDirty && ub.texturesEnabled && (this._texture && Tb.e.SheenTextureEnabled ? ((0, Qb.R)(this._texture, bb, "SHEEN_TEXTURE"), bb.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : bb.SHEEN_TEXTURE = !1, this._textureRoughness && Tb.e.SheenTextureEnabled ? (0, Qb.R)(this._textureRoughness, bb, "SHEEN_TEXTURE_ROUGHNESS") : bb.SHEEN_TEXTURE_ROUGHNESS = !1)) : (bb.SHEEN = !1, bb.SHEEN_TEXTURE = !1, bb.SHEEN_TEXTURE_ROUGHNESS = !1, bb.SHEEN_LINKWITHALBEDO = !1, bb.SHEEN_ROUGHNESS = !1, bb.SHEEN_ALBEDOSCALING = !1, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bb.SHEEN_GAMMATEXTURE = !1, bb.SHEEN_TEXTUREDIRECTUV = 0, bb.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(bb, ub, hb, Bb) {
          if (!this._isEnabled) return;
          const Ob = Bb.materialDefines,
            Gb = this._material.isFrozen;
          bb.useUbo && Gb && bb.isSync || ((this._texture || this._textureRoughness) && Tb.e.SheenTextureEnabled && (bb.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Qb.u)(this._texture, bb, "sheen"), this._textureRoughness && !Ob.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Qb.u)(this._textureRoughness, bb, "sheenRoughness")), bb.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && bb.updateFloat("vSheenRoughness", this._roughness)), ub.texturesEnabled && (this._texture && Tb.e.SheenTextureEnabled && bb.setTexture("sheenSampler", this._texture), this._textureRoughness && !Ob.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Tb.e.SheenTextureEnabled && bb.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(bb) {
          return this._texture === bb || this._textureRoughness === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._textureRoughness && bb.push(this._textureRoughness)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && bb.push(this._textureRoughness)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(bb, ub, hb) {
          return bb.SHEEN && ub.addFallback(hb++, "SHEEN"), hb
        }
        getSamplers(bb) {
          bb.push("sheenSampler", "sheenRoughnessSampler")
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
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ab[Symbol.metadata] ?? null) : void 0;
        Yb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Sb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, Db.K)()], Hb = [(0, Db.p)()], wb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ob = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], (0, nb.h)(bb, null, Yb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: ub
        }, lb, Kb), (0, nb.h)(bb, null, Sb, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkSheenWithAlbedo" in bb,
            get: bb => bb.linkSheenWithAlbedo,
            set: (bb, ub) => {
              bb.linkSheenWithAlbedo = ub
            }
          },
          metadata: ub
        }, Wb, Cb), (0, nb.h)(bb, null, wb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ub) => {
              bb.texture = ub
            }
          },
          metadata: ub
        }, zb, gb), (0, nb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, ub) => {
              bb.useRoughnessFromMainTexture = ub
            }
          },
          metadata: ub
        }, ib, vb), (0, nb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ub) => {
              bb.roughness = ub
            }
          },
          metadata: ub
        }, tb, Jb), (0, nb.h)(bb, null, pb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, ub) => {
              bb.textureRoughness = ub
            }
          },
          metadata: ub
        }, eb, Nb), (0, nb.h)(bb, null, ob, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoScaling" in bb,
            get: bb => bb.albedoScaling,
            set: (bb, ub) => {
              bb.albedoScaling = ub
            }
          },
          metadata: ub
        }, sb, Mb), (0, nb.h)(null, null, ab, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ub) => {
              bb.intensity = ub
            }
          },
          metadata: ub
        }, db, rb), (0, nb.h)(null, null, Hb, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: bb => "color" in bb,
            get: bb => bb.color,
            set: (bb, ub) => {
              bb.color = ub
            }
          },
          metadata: ub
        }, jb, xb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb
    })();
    class Lu extends Ib.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Yu = (() => {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob;
      let Ab, lb, Kb, Wb, Cb, db, rb, jb, xb, zb, gb, ib, vb, tb, Jb, eb, Nb, sb, mb, Ib, qb, Eb, yb, Fb, fb, kb, cb, Rb, bu, uu, hu = Pb.c,
        Bu = [],
        Ou = [],
        Gu = [],
        Uu = [],
        Yu = [],
        Su = [],
        au = [],
        Hu = [],
        wu = [],
        Zu = [],
        Xu = [],
        pu = [],
        ou = [],
        Au = [],
        lu = [],
        Ku = [],
        Wu = [],
        Cu = [],
        du = [],
        ru = [],
        ju = [],
        nu = [],
        Du = [],
        xu = [],
        zu = [],
        gu = [],
        iu = [],
        vu = [],
        tu = [],
        Ju = [],
        eu = [],
        Nu = [],
        su = [],
        Mu = [],
        mu = [],
        Iu = [],
        Pu = [],
        qu = [],
        Eu = [],
        yu = [],
        Vu = [],
        Fu = [],
        fu = [],
        ku = [],
        Tu = [],
        cu = [],
        Qu = [],
        Ru = [],
        bh = [],
        uh = [],
        hh = [],
        Bh = [],
        Oh = [],
        Gh = [],
        Uh = [],
        Lh = [],
        Yh = [],
        Sh = [],
        ah = [],
        Hh = [];
      return bb = class extends hu {
        get isRefractionEnabled() {
          return (0, nb.b)(this, ub, "f")
        }
        set isRefractionEnabled(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get isTranslucencyEnabled() {
          return (0, nb.b)(this, hb, "f")
        }
        set isTranslucencyEnabled(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get isDispersionEnabled() {
          return (0, nb.b)(this, Bb, "f")
        }
        set isDispersionEnabled(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        get isScatteringEnabled() {
          return (0, nb.b)(this, Ob, "f")
        }
        set isScatteringEnabled(bb) {
          (0, nb.f)(this, Ob, bb, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(bb) {
          this._scene.enableSubSurfaceForPrePass() && bb && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(bb))
        }
        get useAlbedoToTintRefraction() {
          return (0, nb.b)(this, Gb, "f")
        }
        set useAlbedoToTintRefraction(bb) {
          (0, nb.f)(this, Gb, bb, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, nb.b)(this, Ub, "f")
        }
        set useAlbedoToTintTranslucency(bb) {
          (0, nb.f)(this, Ub, bb, "f")
        }
        get thicknessTexture() {
          return (0, nb.b)(this, Lb, "f")
        }
        set thicknessTexture(bb) {
          (0, nb.f)(this, Lb, bb, "f")
        }
        get refractionTexture() {
          return (0, nb.b)(this, Yb, "f")
        }
        set refractionTexture(bb) {
          (0, nb.f)(this, Yb, bb, "f")
        }
        get indexOfRefraction() {
          return (0, nb.b)(this, Sb, "f")
        }
        set indexOfRefraction(bb) {
          (0, nb.f)(this, Sb, bb, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(bb) {
          const ub = bb >= 1 ? bb : -1;
          this._volumeIndexOfRefraction !== ub && (this._volumeIndexOfRefraction = ub, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, nb.b)(this, ab, "f")
        }
        set invertRefractionY(bb) {
          (0, nb.f)(this, ab, bb, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, nb.b)(this, Hb, "f")
        }
        set linkRefractionWithTransparency(bb) {
          (0, nb.f)(this, Hb, bb, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, nb.b)(this, wb, "f")
        }
        set useMaskFromThicknessTexture(bb) {
          (0, nb.f)(this, wb, bb, "f")
        }
        get refractionIntensityTexture() {
          return (0, nb.b)(this, Zb, "f")
        }
        set refractionIntensityTexture(bb) {
          (0, nb.f)(this, Zb, bb, "f")
        }
        get translucencyIntensityTexture() {
          return (0, nb.b)(this, Xb, "f")
        }
        set translucencyIntensityTexture(bb) {
          (0, nb.f)(this, Xb, bb, "f")
        }
        get translucencyColorTexture() {
          return (0, nb.b)(this, pb, "f")
        }
        set translucencyColorTexture(bb) {
          (0, nb.f)(this, pb, bb, "f")
        }
        get useGltfStyleTextures() {
          return (0, nb.b)(this, ob, "f")
        }
        set useGltfStyleTextures(bb) {
          (0, nb.f)(this, ob, bb, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(bb) {
          this.legacyTranslucency = bb
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
        constructor(Ab) {
          let lb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ab, "PBRSubSurface", 130, new Lu, lb), this._isRefractionEnabled = !1, ub.set(this, (0, nb.k)(this, Bu, !1)), this._isTranslucencyEnabled = ((0, nb.k)(this, Ou), !1), hb.set(this, (0, nb.k)(this, Gu, !1)), this._isDispersionEnabled = ((0, nb.k)(this, Uu), !1), Bb.set(this, (0, nb.k)(this, Yu, !1)), this._isScatteringEnabled = ((0, nb.k)(this, Su), !1), Ob.set(this, (0, nb.k)(this, au, !1)), this._scatteringDiffusionProfileIndex = ((0, nb.k)(this, Hu), (0, nb.k)(this, wu, 0)), this.refractionIntensity = ((0, nb.k)(this, Zu), (0, nb.k)(this, Xu, 1)), this.translucencyIntensity = ((0, nb.k)(this, pu), (0, nb.k)(this, ou, 1)), this._useAlbedoToTintRefraction = ((0, nb.k)(this, Au), !1), Gb.set(this, (0, nb.k)(this, lu, !1)), this._useAlbedoToTintTranslucency = ((0, nb.k)(this, Ku), !1), Ub.set(this, (0, nb.k)(this, Wu, !1)), this._thicknessTexture = ((0, nb.k)(this, Cu), null), Lb.set(this, (0, nb.k)(this, du, null)), this._refractionTexture = ((0, nb.k)(this, ru), null), Yb.set(this, (0, nb.k)(this, ju, null)), this._indexOfRefraction = ((0, nb.k)(this, nu), 1.5), Sb.set(this, (0, nb.k)(this, Du, 1.5)), this._volumeIndexOfRefraction = ((0, nb.k)(this, xu), (0, nb.k)(this, zu, -1)), this._invertRefractionY = ((0, nb.k)(this, gu), !1), ab.set(this, (0, nb.k)(this, iu, !1)), this._linkRefractionWithTransparency = ((0, nb.k)(this, vu), !1), Hb.set(this, (0, nb.k)(this, tu, !1)), this.minimumThickness = ((0, nb.k)(this, Ju), (0, nb.k)(this, eu, 0)), this.maximumThickness = ((0, nb.k)(this, Nu), (0, nb.k)(this, su, 1)), this.useThicknessAsDepth = ((0, nb.k)(this, Mu), (0, nb.k)(this, mu, !1)), this.tintColor = ((0, nb.k)(this, Iu), (0, nb.k)(this, Pu, Vb.b.White())), this.tintColorAtDistance = ((0, nb.k)(this, qu), (0, nb.k)(this, Eu, 1)), this.dispersion = ((0, nb.k)(this, yu), (0, nb.k)(this, Vu, 0)), this.diffusionDistance = ((0, nb.k)(this, Fu), (0, nb.k)(this, fu, Vb.b.White())), this._useMaskFromThicknessTexture = ((0, nb.k)(this, ku), !1), wb.set(this, (0, nb.k)(this, Tu, !1)), this._refractionIntensityTexture = ((0, nb.k)(this, cu), null), Zb.set(this, (0, nb.k)(this, Qu, null)), this._translucencyIntensityTexture = ((0, nb.k)(this, Ru), null), Xb.set(this, (0, nb.k)(this, bh, null)), this.translucencyColor = ((0, nb.k)(this, uh), (0, nb.k)(this, hh, null)), this._translucencyColorTexture = ((0, nb.k)(this, Bh), null), pb.set(this, (0, nb.k)(this, Oh, null)), this._useGltfStyleTextures = ((0, nb.k)(this, Gh), !0), ob.set(this, (0, nb.k)(this, Uh, !0)), this.applyAlbedoAfterSubSurface = ((0, nb.k)(this, Lh), (0, nb.k)(this, Yh, bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, nb.k)(this, Sh), (0, nb.k)(this, ah, bb.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, nb.k)(this, Hh), this._scene = Ab.ZN(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Ab._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Ab._dirtyCallbacks[32]
        }
        isReadyForSubMesh(bb, ub) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (bb._areTexturesDirty && ub.texturesEnabled) {
            if (this._thicknessTexture && Tb.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Tb.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Tb.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Tb.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getRefractionTexture(ub);
            if (bb && Tb.e.RefractionTextureEnabled && !bb.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ub) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return bb.SUBSURFACE = !1, bb.SS_DISPERSION = !1, bb.SS_TRANSLUCENCY = !1, bb.SS_SCATTERING = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, bb.SS_HAS_THICKNESS = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (bb._areTexturesDirty) {
            if (bb.SUBSURFACE = !0, bb.SS_DISPERSION = this._isDispersionEnabled, bb.SS_TRANSLUCENCY = this._isTranslucencyEnabled, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, bb.SS_SCATTERING = this._isScatteringEnabled, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_HAS_THICKNESS = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, bb._areTexturesDirty && ub.texturesEnabled && (this._thicknessTexture && Tb.e.ThicknessTextureEnabled && (0, Qb.R)(this._thicknessTexture, bb, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Tb.e.RefractionIntensityTextureEnabled && (0, Qb.R)(this._refractionIntensityTexture, bb, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Tb.e.TranslucencyIntensityTextureEnabled && (0, Qb.R)(this._translucencyIntensityTexture, bb, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Tb.e.TranslucencyColorTextureEnabled && ((0, Qb.R)(this._translucencyColorTexture, bb, "SS_TRANSLUCENCYCOLOR_TEXTURE"), bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), bb.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, bb.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && ub.texturesEnabled) {
              const hb = this._getRefractionTexture(ub);
              hb && Tb.e.RefractionTextureEnabled && (bb.SS_REFRACTION = !0, bb.SS_REFRACTIONMAP_3D = hb.isCube, bb.SS_GAMMAREFRACTION = hb.gammaSpace, bb.SS_RGBDREFRACTION = hb.isRGBD, bb.SS_LINEARSPECULARREFRACTION = hb.linearSpecularLOD, bb.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && hb.isCube ? !hb.invertZ : hb.invertZ, bb.SS_LODINREFRACTIONALPHA = hb.lodLevelInAlpha, bb.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, bb.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = hb.isCube && hb.boundingBoxSize, bb.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (bb.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(bb, ub, hb, Bb) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) bb.updateFloat2("vThicknessParam", 0, 0);
            else {
              Bb.getRenderingMesh().getWorldMatrix().decompose(Mb.i.YX[0]);
              const ub = Math.max(Math.abs(Mb.i.YX[0].x), Math.abs(Mb.i.YX[0].y), Math.abs(Mb.i.YX[0].z));
              bb.updateFloat2("vThicknessParam", this.minimumThickness * ub, (this.maximumThickness - this.minimumThickness) * ub)
            }
        }
        bindForSubMesh(bb, ub, hb, Bb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Ob = Bb.materialDefines,
            Gb = this._material.isFrozen,
            Ub = this._material.realTimeFiltering,
            Lb = Ob.LODBASEDMICROSFURACE,
            Yb = this._getRefractionTexture(ub);
          if (!bb.useUbo || !Gb || !bb.isSync) {
            if (this._thicknessTexture && Tb.e.ThicknessTextureEnabled && (bb.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Qb.u)(this._thicknessTexture, bb, "thickness")), this._refractionIntensityTexture && Tb.e.RefractionIntensityTextureEnabled && Ob.SS_REFRACTIONINTENSITY_TEXTURE && (bb.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Qb.u)(this._refractionIntensityTexture, bb, "refractionIntensity")), this._translucencyColorTexture && Tb.e.TranslucencyColorTextureEnabled && Ob.SS_TRANSLUCENCYCOLOR_TEXTURE && (bb.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Qb.u)(this._translucencyColorTexture, bb, "translucencyColor")), this._translucencyIntensityTexture && Tb.e.TranslucencyIntensityTextureEnabled && Ob.SS_TRANSLUCENCYINTENSITY_TEXTURE && (bb.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Qb.u)(this._translucencyIntensityTexture, bb, "translucencyIntensity")), Yb && Tb.e.RefractionTextureEnabled) {
              bb.S_("refractionMatrix", Yb.getRefractionTextureMatrix());
              let ub = 1;
              Yb.isCube || Yb.depth && (ub = Yb.depth);
              const hb = Yb.getSize().width,
                Bb = this.volumeIndexOfRefraction;
              if (bb.updateFloat4("vRefractionInfos", Yb.level, 1 / Bb, ub, this._invertRefractionY ? -1 : 1), bb.updateFloat4("vRefractionMicrosurfaceInfos", hb, Yb.lodGenerationScale, Yb.lodGenerationOffset, 1 / this.indexOfRefraction), Ub && bb.updateFloat2("vRefractionFilteringInfo", hb, Math.log2(hb)), Yb.boundingBoxSize) {
                const ub = Yb;
                bb.updateVector3("vRefractionPosition", ub.boundingBoxPosition), bb.updateVector3("vRefractionSize", ub.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && bb.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), bb.updateColor3("vDiffusionDistance", this.diffusionDistance), bb.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), bb.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), bb.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), bb.updateFloat("dispersion", this.dispersion)
          }
          ub.texturesEnabled && (this._thicknessTexture && Tb.e.ThicknessTextureEnabled && bb.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Tb.e.RefractionIntensityTextureEnabled && Ob.SS_REFRACTIONINTENSITY_TEXTURE && bb.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Tb.e.TranslucencyIntensityTextureEnabled && Ob.SS_TRANSLUCENCYINTENSITY_TEXTURE && bb.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Tb.e.TranslucencyColorTextureEnabled && Ob.SS_TRANSLUCENCYCOLOR_TEXTURE && bb.setTexture("translucencyColorSampler", this._translucencyColorTexture), Yb && Tb.e.RefractionTextureEnabled && (Lb ? bb.setTexture("refractionSampler", Yb) : (bb.setTexture("refractionSampler", Yb._lodTextureMid || Yb), bb.setTexture("refractionSamplerLow", Yb._lodTextureLow || Yb), bb.setTexture("refractionSamplerHigh", Yb._lodTextureHigh || Yb))))
        }
        _getRefractionTexture(bb) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? bb.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(bb) {
          Tb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && bb.push(this._refractionTexture)
        }
        hasTexture(bb) {
          return this._thicknessTexture === bb || (this._refractionTexture === bb || (this._refractionIntensityTexture === bb || (this._translucencyIntensityTexture === bb || this._translucencyColorTexture === bb)))
        }
        hasRenderTargetTextures() {
          return !!(Tb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(bb) {
          this._thicknessTexture && bb.push(this._thicknessTexture), this._refractionTexture && bb.push(this._refractionTexture), this._refractionIntensityTexture && bb.push(this._refractionIntensityTexture), this._translucencyColorTexture && bb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && bb.push(this._translucencyIntensityTexture)
        }
        getAnimatables(bb) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && bb.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && bb.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && bb.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && bb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && bb.push(this._translucencyIntensityTexture)
        }
        dispose(bb) {
          bb && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(bb, ub, hb) {
          return bb.SS_SCATTERING && ub.addFallback(hb++, "SS_SCATTERING"), bb.SS_TRANSLUCENCY && ub.addFallback(hb++, "SS_TRANSLUCENCY"), hb
        }
        getSamplers(bb) {
          bb.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, Yb = new WeakMap, Sb = new WeakMap, ab = new WeakMap, Hb = new WeakMap, wb = new WeakMap, Zb = new WeakMap, Xb = new WeakMap, pb = new WeakMap, ob = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(hu[Symbol.metadata] ?? null) : void 0;
        Ab = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Kb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, Db.K)(), (0, Db.i)("_markScenePrePassDirty")], Cb = [(0, Db.K)()], db = [(0, Db.K)()], rb = [(0, Db.K)()], jb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], xb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], zb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, Db.K)()], tb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Jb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, Db.K)()], Nb = [(0, Db.K)()], sb = [(0, Db.K)()], mb = [(0, Db.p)()], Ib = [(0, Db.K)()], qb = [(0, Db.K)()], Eb = [(0, Db.p)()], yb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Db.p)()], cb = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], bu = [(0, Db.K)()], uu = [(0, Db.K)()], (0, nb.h)(bb, null, Ab, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRefractionEnabled" in bb,
            get: bb => bb.isRefractionEnabled,
            set: (bb, ub) => {
              bb.isRefractionEnabled = ub
            }
          },
          metadata: ub
        }, Bu, Ou), (0, nb.h)(bb, null, lb, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTranslucencyEnabled" in bb,
            get: bb => bb.isTranslucencyEnabled,
            set: (bb, ub) => {
              bb.isTranslucencyEnabled = ub
            }
          },
          metadata: ub
        }, Gu, Uu), (0, nb.h)(bb, null, Kb, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isDispersionEnabled" in bb,
            get: bb => bb.isDispersionEnabled,
            set: (bb, ub) => {
              bb.isDispersionEnabled = ub
            }
          },
          metadata: ub
        }, Yu, Su), (0, nb.h)(bb, null, Wb, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isScatteringEnabled" in bb,
            get: bb => bb.isScatteringEnabled,
            set: (bb, ub) => {
              bb.isScatteringEnabled = ub
            }
          },
          metadata: ub
        }, au, Hu), (0, nb.h)(bb, null, jb, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintRefraction" in bb,
            get: bb => bb.useAlbedoToTintRefraction,
            set: (bb, ub) => {
              bb.useAlbedoToTintRefraction = ub
            }
          },
          metadata: ub
        }, lu, Ku), (0, nb.h)(bb, null, xb, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintTranslucency" in bb,
            get: bb => bb.useAlbedoToTintTranslucency,
            set: (bb, ub) => {
              bb.useAlbedoToTintTranslucency = ub
            }
          },
          metadata: ub
        }, Wu, Cu), (0, nb.h)(bb, null, zb, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, ub) => {
              bb.thicknessTexture = ub
            }
          },
          metadata: ub
        }, du, ru), (0, nb.h)(bb, null, gb, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionTexture" in bb,
            get: bb => bb.refractionTexture,
            set: (bb, ub) => {
              bb.refractionTexture = ub
            }
          },
          metadata: ub
        }, ju, nu), (0, nb.h)(bb, null, ib, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ub) => {
              bb.indexOfRefraction = ub
            }
          },
          metadata: ub
        }, Du, xu), (0, nb.h)(bb, null, tb, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertRefractionY" in bb,
            get: bb => bb.invertRefractionY,
            set: (bb, ub) => {
              bb.invertRefractionY = ub
            }
          },
          metadata: ub
        }, iu, vu), (0, nb.h)(bb, null, Jb, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkRefractionWithTransparency" in bb,
            get: bb => bb.linkRefractionWithTransparency,
            set: (bb, ub) => {
              bb.linkRefractionWithTransparency = ub
            }
          },
          metadata: ub
        }, tu, Ju), (0, nb.h)(bb, null, yb, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMaskFromThicknessTexture" in bb,
            get: bb => bb.useMaskFromThicknessTexture,
            set: (bb, ub) => {
              bb.useMaskFromThicknessTexture = ub
            }
          },
          metadata: ub
        }, Tu, cu), (0, nb.h)(bb, null, Fb, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensityTexture" in bb,
            get: bb => bb.refractionIntensityTexture,
            set: (bb, ub) => {
              bb.refractionIntensityTexture = ub
            }
          },
          metadata: ub
        }, Qu, Ru), (0, nb.h)(bb, null, fb, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensityTexture" in bb,
            get: bb => bb.translucencyIntensityTexture,
            set: (bb, ub) => {
              bb.translucencyIntensityTexture = ub
            }
          },
          metadata: ub
        }, bh, uh), (0, nb.h)(bb, null, cb, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColorTexture" in bb,
            get: bb => bb.translucencyColorTexture,
            set: (bb, ub) => {
              bb.translucencyColorTexture = ub
            }
          },
          metadata: ub
        }, Oh, Gh), (0, nb.h)(bb, null, Rb, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGltfStyleTextures" in bb,
            get: bb => bb.useGltfStyleTextures,
            set: (bb, ub) => {
              bb.useGltfStyleTextures = ub
            }
          },
          metadata: ub
        }, Uh, Lh), (0, nb.h)(null, null, Cb, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scatteringDiffusionProfileIndex" in bb,
            get: bb => bb._scatteringDiffusionProfileIndex,
            set: (bb, ub) => {
              bb._scatteringDiffusionProfileIndex = ub
            }
          },
          metadata: ub
        }, wu, Zu), (0, nb.h)(null, null, db, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensity" in bb,
            get: bb => bb.refractionIntensity,
            set: (bb, ub) => {
              bb.refractionIntensity = ub
            }
          },
          metadata: ub
        }, Xu, pu), (0, nb.h)(null, null, rb, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensity" in bb,
            get: bb => bb.translucencyIntensity,
            set: (bb, ub) => {
              bb.translucencyIntensity = ub
            }
          },
          metadata: ub
        }, ou, Au), (0, nb.h)(null, null, vb, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "_volumeIndexOfRefraction" in bb,
            get: bb => bb._volumeIndexOfRefraction,
            set: (bb, ub) => {
              bb._volumeIndexOfRefraction = ub
            }
          },
          metadata: ub
        }, zu, gu), (0, nb.h)(null, null, eb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, ub) => {
              bb.minimumThickness = ub
            }
          },
          metadata: ub
        }, eu, Nu), (0, nb.h)(null, null, Nb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, ub) => {
              bb.maximumThickness = ub
            }
          },
          metadata: ub
        }, su, Mu), (0, nb.h)(null, null, sb, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useThicknessAsDepth" in bb,
            get: bb => bb.useThicknessAsDepth,
            set: (bb, ub) => {
              bb.useThicknessAsDepth = ub
            }
          },
          metadata: ub
        }, mu, Iu), (0, nb.h)(null, null, mb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, ub) => {
              bb.tintColor = ub
            }
          },
          metadata: ub
        }, Pu, qu), (0, nb.h)(null, null, Ib, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, ub) => {
              bb.tintColorAtDistance = ub
            }
          },
          metadata: ub
        }, Eu, yu), (0, nb.h)(null, null, qb, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: bb => "dispersion" in bb,
            get: bb => bb.dispersion,
            set: (bb, ub) => {
              bb.dispersion = ub
            }
          },
          metadata: ub
        }, Vu, Fu), (0, nb.h)(null, null, Eb, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffusionDistance" in bb,
            get: bb => bb.diffusionDistance,
            set: (bb, ub) => {
              bb.diffusionDistance = ub
            }
          },
          metadata: ub
        }, fu, ku), (0, nb.h)(null, null, kb, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColor" in bb,
            get: bb => bb.translucencyColor,
            set: (bb, ub) => {
              bb.translucencyColor = ub
            }
          },
          metadata: ub
        }, hh, Bh), (0, nb.h)(null, null, bu, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyAlbedoAfterSubSurface" in bb,
            get: bb => bb.applyAlbedoAfterSubSurface,
            set: (bb, ub) => {
              bb.applyAlbedoAfterSubSurface = ub
            }
          },
          metadata: ub
        }, Yh, Sh), (0, nb.h)(null, null, uu, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacyTranslucency" in bb,
            get: bb => bb.legacyTranslucency,
            set: (bb, ub) => {
              bb.legacyTranslucency = ub
            }
          },
          metadata: ub
        }, ah, Hh), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, bb.DEFAULT_LEGACY_TRANSLUCENCY = !1, bb
    })();
    var Su = hb(39803),
      au = hb(39782),
      Hu = hb(39809),
      wu = hb(39818),
      Zu = hb(39824),
      Xu = hb(39829),
      pu = hb(39836),
      ou = hb(39843),
      Au = hb(39333);
    const lu = {
      effect: null,
      subMesh: null
    };
    class Ku extends((0, pu.d)((0, Xu.b)(Ib.d))) {}
    class Wu extends((0, Fb.c)(Ku)) {
      constructor(bb) {
        super(bb), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Cu extends((0, ou.e)(kb.b)) {}
    let du = (() => {
      var bb, ub;
      let Bb, Ob = Cu,
        Ub = [],
        Lb = [];
      return bb = class extends Ob {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(bb) {
          this._realTimeFiltering = bb, this.yub(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(bb) {
          this._realTimeFilteringQuality = bb, this.yub(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, nb.b)(this, ub, "f")
        }
        set debugMode(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        constructor(hb, Bb) {
          super(hb, Bb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Mb.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Vb.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Vb.b(0, 0, 0), this._albedoColor = new Vb.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Vb.b(1, 1, 1), this._reflectionColor = new Vb.b(1, 1, 1), this._emissiveColor = new Vb.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = bb.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zb.h(16), this._globalAmbientColor = new Vb.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ub.set(this, (0, nb.k)(this, Ub, 0)), this.debugLimit = ((0, nb.k)(this, Lb), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Eb(this), this.clearCoat = new bu(this), this.iridescence = new hu(this), this.anisotropy = new Ou(this), this.sheen = new Uu(this), this.subSurface = new Yu(this), this.detailMap = new Su.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Tb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Jb(this.ZN()), this.prePassConfiguration = new yb.d
        }
        get hasRenderTargetTextures() {
          return !!(Tb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === bb.PBRMATERIAL_OPAQUE || this._transparencyMode === bb.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === bb.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== bb.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(bb, ub, hb) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Bb = ub._drawWrapper;
          if (Bb.effect && this.isFrozen && Bb._wasPreviouslyReady && Bb._wasPreviouslyUsingInstances === hb) return !0;
          ub.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ub.materialDefines = new Wu(this._eventInfo.defineNames));
          const Ob = ub.materialDefines;
          if (this._isReadyForSubMesh(ub)) return !0;
          const Gb = this.ZN(),
            Ub = Gb.UX();
          if (Ob._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Gb.texturesEnabled)) {
            if (this._albedoTexture && Tb.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Tb.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Tb.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Tb.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Tb.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getReflectionTexture();
            if (bb && Tb.e.ReflectionTextureEnabled) {
              if (!bb.isReadyOrNotBlocking()) return !1;
              if (bb.irradianceTexture) {
                if (!bb.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!bb.sphericalPolynomial && bb.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Tb.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Tb.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Tb.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Ub.getCaps().standardDerivatives && this._bumpTexture && Tb.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Tb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ob, this._eventInfo.subMesh = ub, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Ob._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Ob.AREALIGHTUSED || Ob.CLUSTLIGHT_BATCH)
            for (let Hb = 0; Hb < bb.lightSources.length; Hb++)
              if (!bb.lightSources[Hb]._isReady()) return !1;
          if (Ub.getCaps().standardDerivatives || bb.isVerticesDataPresent(mb.i.NormalKind) || (bb.createNormals(!0), xb.b.Warn("PBRMaterial: Normals have been created for the mesh: " + bb.name)), !(0, Qb.d)(Gb, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Lb = ub.effect,
            Yb = Ob._areLightsDisposed,
            Sb = this._prepareEffect(bb, ub.getRenderingMesh(), Ob, this.onCompiled, this.onError, hb, null);
          let ab = !1;
          if (Sb)
            if (this._onEffectCreatedObservable && (lu.effect = Sb, lu.subMesh = ub, this._onEffectCreatedObservable.notifyObservers(lu)), this.allowShaderHotSwapping && Lb && !Sb.isReady()) {
              if (Ob.markAsUnprocessed(), ab = this.isFrozen, Yb) return Ob._areLightsDisposed = !0, !1
            } else Gb.resetCachedMaterial(), ub.setEffect(Sb, Ob, this._materialContext);
          return !(!ub.effect || !ub.effect.isReady()) && (Ob._renderId = Gb.getRenderId(), Bb._wasPreviouslyReady = !ab, Bb._wasPreviouslyUsingInstances = !!hb, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(ub, hb, Bb) {
          let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(ub, hb, Bb, Ub, Lb), !Bb.isDirty) return null;
          Bb.markAsProcessed();
          const Yb = this.ZN().UX(),
            Sb = new cb.c;
          let ab = 0;
          Bb.USESPHERICALINVERTEX && Sb.addFallback(ab++, "USESPHERICALINVERTEX"), Bb.FOG && Sb.addFallback(ab, "FOG"), Bb.SPECULARAA && Sb.addFallback(ab, "SPECULARAA"), Bb.POINTSIZE && Sb.addFallback(ab, "POINTSIZE"), Bb.LOGARITHMICDEPTH && Sb.addFallback(ab, "LOGARITHMICDEPTH"), Bb.PARALLAX && Sb.addFallback(ab, "PARALLAX"), Bb.PARALLAX_RHS && Sb.addFallback(ab, "PARALLAX_RHS"), Bb.PARALLAXOCCLUSION && Sb.addFallback(ab++, "PARALLAXOCCLUSION"), Bb.ENVIRONMENTBRDF && Sb.addFallback(ab++, "ENVIRONMENTBRDF"), Bb.TANGENT && Sb.addFallback(ab++, "TANGENT"), Bb.BUMP && Sb.addFallback(ab++, "BUMP"), ab = (0, Qb.x)(Bb, Sb, this._maxSimultaneousLights, ab), Bb.SPECULARTERM && Sb.addFallback(ab++, "SPECULARTERM"), Bb.USESPHERICALFROMREFLECTIONMAP && Sb.addFallback(ab++, "USESPHERICALFROMREFLECTIONMAP"), Bb.USEIRRADIANCEMAP && Sb.addFallback(ab++, "USEIRRADIANCEMAP"), Bb.LIGHTMAP && Sb.addFallback(ab++, "LIGHTMAP"), Bb.NORMAL && Sb.addFallback(ab++, "NORMAL"), Bb.AMBIENT && Sb.addFallback(ab++, "AMBIENT"), Bb.EMISSIVE && Sb.addFallback(ab++, "EMISSIVE"), Bb.VERTEXCOLOR && Sb.addFallback(ab++, "VERTEXCOLOR"), Bb.MORPHTARGETS && Sb.addFallback(ab++, "MORPHTARGETS"), Bb.MULTIVIEW && Sb.addFallback(0, "MULTIVIEW");
          const Hb = [mb.i.PositionKind];
          Bb.NORMAL && Hb.push(mb.i.NormalKind), Bb.TANGENT && Hb.push(mb.i.TangentKind);
          for (let bb = 1; bb <= 6; ++bb) Bb["UV" + bb] && Hb.push(`uv${1===bb?"":bb}`);
          Bb.VERTEXCOLOR && Hb.push(mb.i.ColorKind), (0, Qb.A)(Hb, ub, Bb, Sb), (0, Qb.E)(Hb, Bb), (0, Qb.F)(Hb, ub, Bb), (0, Qb.y)(Hb, ub, Bb);
          let wb = "pbr";
          const Zb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Xb = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Qb.Z)(Zb, Xb, !0);
          const pb = ["Material", "Scene", "Mesh"],
            ob = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Bb.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Sb, this._eventInfo.fallbackRank = ab, this._eventInfo.defines = Bb, this._eventInfo.uniforms = Zb, this._eventInfo.attributes = Hb, this._eventInfo.samplers = Xb, this._eventInfo.uniformBuffersNames = pb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ub, this._eventInfo.indexParameters = ob, this._callbackPluginEventGeneric(128, this._eventInfo), Zu.d.AddUniformsAndSamplers(Zb, Xb), yb.d.AddUniforms(Zb), yb.d.AddSamplers(Xb), (0, au.d)(Zb), this._useVertexPulling) {
            const bb = hb?.geometry;
            bb && (this._vertexPullingMetadata = (0, Hu.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ub) => {
              Zb.push(`vp_${ub}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          fb.b && (fb.b.PrepareUniforms(Zb, Bb), fb.b.PrepareSamplers(Xb, Bb)), (0, Qb.bb)({
            uniformsNames: Zb,
            uniformBuffersNames: pb,
            samplers: Xb,
            defines: Bb,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Ab = {};
          this.customShaderNameResolve && (wb = this.customShaderNameResolve(wb, Zb, pb, Xb, Bb, Hb, Ab));
          const lb = Bb.toString(),
            Kb = Yb.createEffect(wb, {
              attributes: Hb,
              uniformsNames: Zb,
              uniformBuffersNames: pb,
              samplers: Xb,
              defines: lb,
              fallbacks: Sb,
              onCompiled: Ob,
              onError: Gb,
              indexParameters: ob,
              processFinalCode: Ab.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Bb.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Yb);
          return this._eventInfo.customCode = void 0, Kb
        }
        _prepareDefines(ub, hb, Bb) {
          let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Ub = hb.hasThinInstances,
            Lb = this.ZN(),
            Yb = Lb.UX();
          (0, Qb.Q)(Lb, ub, Bb, !0, this._maxSimultaneousLights, this._disableLighting), Bb._needNormals = !0, (0, Qb.U)(Lb, Bb);
          const Sb = this.needAlphaBlendingForMesh(ub) && this.ZN().useOrderIndependentTransparency;
          if ((0, Qb.X)(Lb, Bb, this.canRenderToMRT && !Sb), (0, Qb.W)(Lb, Bb, Sb), Zu.d.PrepareDefines(Yb.currentRenderPassId, ub, Bb), Bb.METALLICWORKFLOW = this.isMetallicWorkflow(), Bb._areTexturesDirty) {
            Bb._needUVs = !1;
            for (let bb = 1; bb <= 6; ++bb) Bb["MAINUV" + bb] = !1;
            if (Lb.texturesEnabled) {
              Bb.ALBEDODIRECTUV = 0, Bb.BASE_WEIGHTDIRECTUV = 0, Bb.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Bb.AMBIENTDIRECTUV = 0, Bb.OPACITYDIRECTUV = 0, Bb.EMISSIVEDIRECTUV = 0, Bb.REFLECTIVITYDIRECTUV = 0, Bb.MICROSURFACEMAPDIRECTUV = 0, Bb.METALLIC_REFLECTANCEDIRECTUV = 0, Bb.REFLECTANCEDIRECTUV = 0, Bb.BUMPDIRECTUV = 0, Bb.LIGHTMAPDIRECTUV = 0, Yb.getCaps().textureLOD && (Bb.LODBASEDMICROSFURACE = !0), this._albedoTexture && Tb.e.DiffuseTextureEnabled ? ((0, Qb.R)(this._albedoTexture, Bb, "ALBEDO"), Bb.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Bb.ALBEDO = !1, this._baseWeightTexture && Tb.e.BaseWeightTextureEnabled ? (0, Qb.R)(this._baseWeightTexture, Bb, "BASE_WEIGHT") : Bb.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Tb.e.BaseDiffuseRoughnessTextureEnabled ? (0, Qb.R)(this._baseDiffuseRoughnessTexture, Bb, "BASE_DIFFUSE_ROUGHNESS") : Bb.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Tb.e.AmbientTextureEnabled ? ((0, Qb.R)(this._ambientTexture, Bb, "AMBIENT"), Bb.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Bb.AMBIENT = !1, this._opacityTexture && Tb.e.OpacityTextureEnabled ? ((0, Qb.R)(this._opacityTexture, Bb, "OPACITY"), Bb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Bb.OPACITY = !1;
              const bb = this._getReflectionTexture(),
                ub = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Yb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Qb.O)(Lb, bb, Bb, this.realTimeFiltering, this.realTimeFilteringQuality, !ub), this._lightmapTexture && Tb.e.LightmapTextureEnabled ? ((0, Qb.R)(this._lightmapTexture, Bb, "LIGHTMAP"), Bb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Bb.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Bb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Bb.LIGHTMAP = !1, this._emissiveTexture && Tb.e.EmissiveTextureEnabled ? ((0, Qb.R)(this._emissiveTexture, Bb, "EMISSIVE"), Bb.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Bb.EMISSIVE = !1, Tb.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Qb.R)(this._metallicTexture, Bb, "REFLECTIVITY"), Bb.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Bb.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Bb.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Bb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Bb.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Qb.R)(this._reflectivityTexture, Bb, "REFLECTIVITY"), Bb.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Bb.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Bb.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Bb.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Bb.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Qb.R)(this._metallicReflectanceTexture, Bb, "METALLIC_REFLECTANCE"), Bb.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Bb.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Qb.R)(this._reflectanceTexture, Bb, "REFLECTANCE"), Bb.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Bb.REFLECTANCE = !1) : (Bb.METALLIC_REFLECTANCE = !1, Bb.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Qb.R)(this._microSurfaceTexture, Bb, "MICROSURFACEMAP") : Bb.MICROSURFACEMAP = !1) : (Bb.REFLECTIVITY = !1, Bb.MICROSURFACEMAP = !1), Yb.getCaps().standardDerivatives && this._bumpTexture && Tb.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, Qb.R)(this._bumpTexture, Bb, "BUMP"), this._useParallax && this._albedoTexture && Tb.e.DiffuseTextureEnabled ? (Bb.PARALLAX = !0, Bb.PARALLAX_RHS = Lb.useRightHandedSystem, Bb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Bb.PARALLAX = !1, Bb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Bb.BUMP = !1, Bb.PARALLAX = !1, Bb.PARALLAX_RHS = !1, Bb.PARALLAXOCCLUSION = !1, Bb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Tb.e.ReflectionTextureEnabled ? (Bb.ENVIRONMENTBRDF = !0, Bb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Bb.ENVIRONMENTBRDF = !1, Bb.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Bb.ALPHAFROMALBEDO = !0 : Bb.ALPHAFROMALBEDO = !1
            }
            Bb.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === bb.LIGHTFALLOFF_STANDARD ? (Bb.USEPHYSICALLIGHTFALLOFF = !1, Bb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === bb.LIGHTFALLOFF_GLTF ? (Bb.USEPHYSICALLIGHTFALLOFF = !1, Bb.USEGLTFLIGHTFALLOFF = !0) : (Bb.USEPHYSICALLIGHTFALLOFF = !0, Bb.USEGLTFLIGHTFALLOFF = !1), Bb.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Bb.TWOSIDEDLIGHTING = !0 : Bb.TWOSIDEDLIGHTING = !1, Bb.MIRRORED = !!Lb._mirroredCameraPosition, Bb.SPECULARAA = Yb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Bb._areTexturesDirty || Bb._areMiscDirty) && (Bb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Bb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Bb.ALPHABLEND = this.needAlphaBlendingForMesh(ub), Bb.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Bb.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Bb._areTexturesDirty && (Bb.TEXTURE_REPETITION_MODE = Yb.version > 1 || Yb.isWebGPU ? this.textureRepetitionMode : 0), Bb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Bb), Bb.FORCENORMALFORWARD = this._forceNormalForward, Bb.RADIANCEOCCLUSION = this._useRadianceOcclusion, Bb.HORIZONOCCLUSION = this._useHorizonOcclusion, Bb._areMiscDirty && ((0, Qb.S)(ub, Lb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ub), Bb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, hb, this._isVertexOutputInvariant), Bb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ub.isVerticesDataPresent(mb.i.NormalKind), Bb.DEBUGMODE = this._debugMode), (0, Qb.K)(Lb, Yb, this, Bb, !!Ob, Gb, Ub), this._eventInfo.defines = Bb, this._eventInfo.mesh = ub, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Qb.I)(ub, Bb, !0, !0, !0, this._transparencyMode !== bb.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(bb, ub, hb) {
          const Bb = {
            clipPlane: !1,
            useInstances: !1,
            ...hb
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const hb = new Wu(this._eventInfo.defineNames),
              Ob = this._prepareEffect(bb, bb, hb, void 0, void 0, Bb.useInstances, Bb.clipPlane);
            this._onEffectCreatedObservable && (lu.effect = Ob, lu.subMesh = null, this._onEffectCreatedObservable.notifyObservers(lu)), Ob.isReady() ? ub && ub(this) : Ob.onCompileObservable.add((() => {
              ub && ub(this)
            }))
          })()
        }
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          bb.addUniform("vAlbedoInfos", 2), bb.addUniform("vBaseWeightInfos", 2), bb.addUniform("vBaseDiffuseRoughnessInfos", 2), bb.addUniform("vAmbientInfos", 4), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vReflectivityInfos", 3), bb.addUniform("vMicroSurfaceSamplerInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("albedoMatrix", 16), bb.addUniform("baseWeightMatrix", 16), bb.addUniform("baseDiffuseRoughnessMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("reflectivityMatrix", 16), bb.addUniform("microSurfaceSamplerMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vAlbedoColor", 4), bb.addUniform("baseWeight", 1), bb.addUniform("baseDiffuseRoughness", 1), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vReflectivityColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vAmbientColor", 3), bb.addUniform("vDebugMode", 2), bb.addUniform("vMetallicReflectanceFactors", 4), bb.addUniform("vMetallicReflectanceInfos", 2), bb.addUniform("metallicReflectanceMatrix", 16), bb.addUniform("vReflectanceInfos", 2), bb.addUniform("reflectanceMatrix", 16), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Qb.Y)(bb, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(bb, ub, hb) {
          const Bb = this.ZN(),
            Ob = hb.materialDefines;
          if (!Ob) return;
          const Gb = hb.effect;
          if (!Gb) return;
          this._activeEffect = Gb, ub.getMeshUniformBuffer().bindToEffect(Gb, "Mesh"), ub.transferToEffect(bb);
          const Ub = Bb.UX();
          this._uniformBuffer.bindToEffect(Gb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Bb, ub, bb, this.isFrozen), Zu.d.Bind(Ub.currentRenderPassId, this._activeEffect, ub, bb, this);
          const Lb = Bb.activeCamera;
          Lb ? this._uniformBuffer.updateFloat4("cameraInfo", Lb.minZ, Lb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Yb = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Yb[0], Yb[1], Yb[2], Yb[3]), this._eventInfo.subMesh = hb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Ob.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Sb = this._mustRebind(Bb, Gb, hb, ub.visibility),
            ab = Ub._features.needToAlwaysBindUniformBuffers;
          (0, Qb.e)(ub, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Hu.d)(this._activeEffect, this._vertexPullingMetadata);
          let Hb = null;
          const wb = this._uniformBuffer;
          if (Sb) {
            if (this.bindViewProjection(Gb), Hb = this._getReflectionTexture(), !wb.useUbo || !this.isFrozen || !wb.isSync || hb._drawWrapper._forceRebindOnNextCall) {
              if (Bb.texturesEnabled && (this._albedoTexture && Tb.e.DiffuseTextureEnabled && (wb.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Qb.u)(this._albedoTexture, wb, "albedo")), this._baseWeightTexture && Tb.e.BaseWeightTextureEnabled && (wb.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Qb.u)(this._baseWeightTexture, wb, "baseWeight")), this._baseDiffuseRoughnessTexture && Tb.e.BaseDiffuseRoughnessTextureEnabled && (wb.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Qb.u)(this._baseDiffuseRoughnessTexture, wb, "baseDiffuseRoughness")), this._ambientTexture && Tb.e.AmbientTextureEnabled && (wb.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Qb.u)(this._ambientTexture, wb, "ambient")), this._opacityTexture && Tb.e.OpacityTextureEnabled && (wb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Qb.u)(this._opacityTexture, wb, "opacity")), this._emissiveTexture && Tb.e.EmissiveTextureEnabled && (wb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Qb.u)(this._emissiveTexture, wb, "emissive")), this._lightmapTexture && Tb.e.LightmapTextureEnabled && (wb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Qb.u)(this._lightmapTexture, wb, "lightmap")), Tb.e.SpecularTextureEnabled && (this._metallicTexture ? (wb.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Qb.u)(this._metallicTexture, wb, "reflectivity")) : this._reflectivityTexture && (wb.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Qb.u)(this._reflectivityTexture, wb, "reflectivity")), this._metallicReflectanceTexture && (wb.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Qb.u)(this._metallicReflectanceTexture, wb, "metallicReflectance")), this._reflectanceTexture && Ob.REFLECTANCE && (wb.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Qb.u)(this._reflectanceTexture, wb, "reflectance")), this._microSurfaceTexture && (wb.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Qb.u)(this._microSurfaceTexture, wb, "microSurfaceSampler"))), this._bumpTexture && Ub.getCaps().standardDerivatives && Tb.e.BumpTextureEnabled && !this._disableBumpMap && (wb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Qb.u)(this._bumpTexture, wb, "bump"), Bb._mirroredCameraPosition ? wb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : wb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Qb.h)(Bb, Ob, wb, this._reflectionColor, Hb, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && wb.updateFloat("pointSize", this.pointSize), Ob.METALLICWORKFLOW) {
                Vb.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Vb.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const bb = this.subSurface?._indexOfRefraction ?? 1.5,
                  ub = 1;
                Vb.k.Color4[0].b = bb;
                const hb = Math.pow((bb - ub) / (bb + ub), 2);
                Vb.k.Color4[0].a = hb, wb.updateDirectColor4("vReflectivityColor", Vb.k.Color4[0]), wb.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else wb.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              wb.updateColor3("vEmissiveColor", Tb.e.EmissiveTextureEnabled ? this._emissiveColor : Vb.b.BlackReadOnly), !Ob.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? wb.updateColor4("vAlbedoColor", this._albedoColor, 1) : wb.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), wb.updateFloat("baseWeight", this._baseWeight), wb.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Bb.environmentIntensity, this._lightingInfos.w = this._specularIntensity, wb.updateVector4("vLightingIntensity", this._lightingInfos), Bb.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), wb.updateColor3("vAmbientColor", this._globalAmbientColor), wb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Bb.texturesEnabled && (this._albedoTexture && Tb.e.DiffuseTextureEnabled && wb.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Tb.e.BaseWeightTextureEnabled && wb.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Tb.e.BaseDiffuseRoughnessTextureEnabled && wb.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Tb.e.AmbientTextureEnabled && wb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Tb.e.OpacityTextureEnabled && wb.setTexture("opacitySampler", this._opacityTexture), (0, Qb.i)(Bb, Ob, wb, Hb, this.realTimeFiltering), Ob.ENVIRONMENTBRDF && wb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Tb.e.EmissiveTextureEnabled && wb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Tb.e.LightmapTextureEnabled && wb.setTexture("lightmapSampler", this._lightmapTexture), Tb.e.SpecularTextureEnabled && (this._metallicTexture ? wb.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && wb.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && wb.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Ob.REFLECTANCE && wb.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && wb.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Ub.getCaps().standardDerivatives && Tb.e.BumpTextureEnabled && !this._disableBumpMap && wb.setTexture("bumpSampler", this._bumpTexture)), this.ZN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ub) && this.ZN().depthPeelingRenderer.bind(Gb), this._eventInfo.subMesh = hb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, au.g)(this._activeEffect, this, Bb), this.bindEyePosition(Gb)
          } else ab && (this._needToBindSceneUbo = !0);
          !Sb && this.isFrozen && !ab || !Bb.lightsEnabled || this._disableLighting || (0, Qb.j)(Bb, ub, this._activeEffect, Ob, this._maxSimultaneousLights), !Sb && this.isFrozen || ((Bb.fogEnabled && ub.applyFog && Bb.fogMode !== sb.f.FOGMODE_NONE || Hb || this.subSurface.refractionTexture || ub.receiveShadows || Ob.PREPASS || Ob.CLUSTLIGHT_BATCH) && this.bindView(Gb), (0, Qb.f)(Bb, ub, this._activeEffect, !0), Ob.NUM_MORPH_INFLUENCERS && (0, Qb.p)(ub, this._activeEffect), Ob.BAKED_VERTEX_ANIMATION_TEXTURE && ub.bakedVertexAnimationManager?.bind(Gb, Ob.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Qb.l)(Ob, this._activeEffect, Bb)), this._afterBind(ub, this._activeEffect, hb), wb.update()
        }
        getAnimatables() {
          const bb = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && bb.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && bb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && bb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && bb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && bb.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? bb.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && bb.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && bb.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && bb.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && bb.push(this._microSurfaceTexture), bb
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.ZN().environmentTexture
        }
        getActiveTextures() {
          const bb = super.getActiveTextures();
          return this._albedoTexture && bb.push(this._albedoTexture), this._baseWeightTexture && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && bb.push(this._ambientTexture), this._opacityTexture && bb.push(this._opacityTexture), this._reflectionTexture && bb.push(this._reflectionTexture), this._emissiveTexture && bb.push(this._emissiveTexture), this._reflectivityTexture && bb.push(this._reflectivityTexture), this._metallicTexture && bb.push(this._metallicTexture), this._metallicReflectanceTexture && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && bb.push(this._reflectanceTexture), this._microSurfaceTexture && bb.push(this._microSurfaceTexture), this._bumpTexture && bb.push(this._bumpTexture), this._lightmapTexture && bb.push(this._lightmapTexture), bb
        }
        hasTexture(bb) {
          return !!super.hasTexture(bb) || (this._albedoTexture === bb || (this._baseWeightTexture === bb || (this._baseDiffuseRoughnessTexture === bb || (this._ambientTexture === bb || (this._opacityTexture === bb || (this._reflectionTexture === bb || (this._emissiveTexture === bb || (this._reflectivityTexture === bb || (this._metallicTexture === bb || (this._metallicReflectanceTexture === bb || (this._reflectanceTexture === bb || (this._microSurfaceTexture === bb || (this._bumpTexture === bb || this._lightmapTexture === bb)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const bb = this.ZN().enableSubSurfaceForPrePass();
          return bb && (bb.enabled = !0), !0
        }
        dispose(bb, ub) {
          this._breakShaderLoadedCheck = !0, ub && (this._environmentBRDFTexture && this.ZN().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ub)
        }
      }, ub = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ob[Symbol.metadata] ?? null) : void 0;
        Bb = [(0, Db.i)("_markAllSubMeshesAsMiscDirty")], (0, nb.h)(bb, null, Bb, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "debugMode" in bb,
            get: bb => bb.debugMode,
            set: (bb, ub) => {
              bb.debugMode = ub
            }
          },
          metadata: ub
        }, Ub, Lb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb.PBRMATERIAL_OPAQUE = Gb.e.MATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = Gb.e.MATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = Gb.e.MATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = Gb.e.MATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.ForceGLSL = !1, bb._ShaderLoader = new wu.d((() => [Promise.all([hb.e(308), hb.e(319)]).then((() => hb(60959))), Promise.all([hb.e(313), hb.e(309), hb.e(373), hb.e(322), hb.e(372)]).then((() => hb(60976)))]), (() => [Promise.all([hb.e(327), hb.e(329), hb.e(336)]).then((() => hb(61043))), Promise.all([hb.e(327), hb.e(330), hb.e(376), hb.e(340), hb.e(375)]).then((() => hb(61065)))])), bb
    })();
    Object.getOwnPropertyDescriptor(du.prototype, "decalMap") || Object.defineProperty(du.prototype, "decalMap", (0, Au.f)("PBRBaseMaterial", "decalMap")), (0, hb(41284).b)();
    var ru = hb(39488);
    var ju = hb(39559),
      nu = hb(41267),
      Du = hb(39287),
      xu = hb(39296),
      zu = hb(39402);
    let gu = !1;
    const iu = new Vb.c,
      vu = new Vb.c;
    class tu extends nu.d {
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
      set wrapU(bb) {
        if (this._textures)
          for (let ub = 0; ub < this._textures.length; ub++) this._textures[ub].wrapU = bb
      }
      set wrapV(bb) {
        if (this._textures)
          for (let ub = 0; ub < this._textures.length; ub++) this._textures[ub].wrapV = bb
      }
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = !(!Ob || !Ob.generateMipMaps) && Ob.generateMipMaps,
          Lb = !(!Ob || !Ob.generateDepthTexture) && Ob.generateDepthTexture,
          Yb = Ob && Ob.depthTextureFormat ? Ob.depthTextureFormat : 15,
          Sb = !Ob || void 0 === Ob.doNotChangeAspectRatio || Ob.doNotChangeAspectRatio,
          ab = !(!Ob || !Ob.drawOnlyOnFirstAttachmentByDefault) && Ob.drawOnlyOnFirstAttachmentByDefault;
        if (super(bb, ub, Bb, Ub, Sb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), gu || (gu = !0, xu.ThinEngine.prototype.restoreSingleAttachment = function() {
            const bb = this._gl;
            this.bindAttachments([bb.BACK])
          }, xu.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const bb = this._gl;
            this.bindAttachments([bb.COLOR_ATTACHMENT0])
          }, xu.ThinEngine.prototype.buildTextureLayout = function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const hb = this._gl,
              Bb = [];
            if (ub) Bb.push(hb.BACK);
            else
              for (let Ob = 0; Ob < bb.length; Ob++) bb[Ob] ? Bb.push(hb["COLOR_ATTACHMENT" + Ob]) : Bb.push(hb.NONE);
            return Bb
          }, xu.ThinEngine.prototype.bindAttachments = function(bb) {
            const ub = this._gl,
              hb = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, hb)
              for (let Bb = 0; Bb < bb.length; Bb++) bb[Bb] !== ub.NONE && hb[Bb] && (0, zu.f)(hb[Bb].format) && (this._integerMRTAttachmentsMask |= 1 << Bb);
            ub.drawBuffers(bb)
          }, xu.ThinEngine.prototype.clearAttachments = function(bb, ub, hb, Bb) {
            let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Ub = this._currentRenderTarget?.textures;
            let Lb = !1;
            if (hb && bb && Ub)
              for (let Yb = 0; Yb < ub.length; Yb++) {
                const bb = Ub[Yb];
                if (ub[Yb] !== this._gl.NONE && bb && (0, zu.f)(bb.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Lb = !0;
                  break
                }
              }
            if (!Lb || !bb || !Ub) return this.bindAttachments(ub), void this.clear(bb, hb, Bb, Ob, Gb);
            this.bindAttachments(ub), this._applyColorWriteState();
            for (let Yb = 0; Yb < ub.length; Yb++) {
              const hb = Ub[Yb];
              if (ub[Yb] !== this._gl.NONE && hb) {
                let ub = bb;
                if ((0, zu.f)(hb.format)) {
                  const Bb = (0, zu.i)(hb.type);
                  ub = Bb ? iu : vu;
                  const Ob = Bb ? 255 : 1;
                  ub.r = Math.round(bb.r * Ob), ub.g = Math.round(bb.g * Ob), ub.b = Math.round(bb.b * Ob), ub.a = Math.round(bb.a * Ob)
                }
                this._clearColorAttachment(Yb, ub, hb.format, hb.type)
              }
            }
            if (Bb || Ob) {
              const bb = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Bb, Ob, Gb)
              } finally {
                this._integerMRTAttachmentsMask = bb
              }
            }
          }, xu.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              hb = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, bb.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(bb), ub || this.generateMipMapsMultiFramebuffer(bb), hb && (bb._MSAAFramebuffer && this._bindUnboundFramebuffer(bb._framebuffer), hb()), this._bindUnboundFramebuffer(null)
          }, xu.ThinEngine.prototype.createMultipleRenderTarget = function(bb, ub) {
            let hb, Bb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ob = !1,
              Gb = !0,
              Ub = !1,
              Lb = !1,
              Yb = 1,
              Sb = 1,
              ab = [],
              Hb = [],
              wb = [],
              Zb = [],
              Xb = [],
              pb = [],
              ob = [],
              Ab = [],
              lb = [],
              Kb = !1;
            const Wb = this._createHardwareRenderTargetWrapper(!0, !1, bb);
            void 0 !== ub && (Ob = void 0 !== ub.generateMipMaps && ub.generateMipMaps, Gb = void 0 === ub.generateDepthBuffer || ub.generateDepthBuffer, Ub = void 0 !== ub.generateStencilBuffer && ub.generateStencilBuffer, Lb = void 0 !== ub.generateDepthTexture && ub.generateDepthTexture, Yb = ub.eUb ?? 1, Sb = ub.samples ?? Sb, ab = ub.types || ab, Hb = ub.samplingModes || Hb, wb = ub.useSRGBBuffers || wb, Zb = ub.formats || Zb, Xb = ub.targetTypes || Xb, pb = ub.faceIndex || pb, ob = ub.layerIndex || ob, Ab = ub.layerCounts || Ab, lb = ub.labels || lb, Kb = ub.dontCreateTextures ?? !1, this.NX > 1 && (13 === ub.depthTextureFormat || 17 === ub.depthTextureFormat || 16 === ub.depthTextureFormat || 14 === ub.depthTextureFormat || 18 === ub.depthTextureFormat) && (hb = ub.depthTextureFormat)), void 0 === hb && (hb = Ub ? 13 : 14);
            const Cb = this._gl,
              db = this._currentFramebuffer,
              rb = Cb.createFramebuffer();
            this._bindUnboundFramebuffer(rb);
            const jb = bb.width ?? bb,
              nb = bb.height ?? bb,
              Db = [],
              zb = [],
              gb = this.NX > 1 && (13 === hb || 17 === hb || 18 === hb);
            Wb.label = ub?.label ?? "MultiRenderTargetWrapper", Wb._framebuffer = rb, Wb._generateDepthBuffer = Lb || Gb, Wb._generateStencilBuffer = Lb ? gb : Ub, Wb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Wb._generateStencilBuffer, Wb._generateDepthBuffer, jb, nb, 1, hb), Wb._attachments = zb;
            for (let ib = 0; ib < Yb; ib++) {
              let bb = Hb[ib] || 3,
                ub = ab[ib] || 0,
                hb = wb[ib] || !1;
              const Bb = Zb[ib] || 5,
                Gb = Xb[ib] || 3553,
                Ub = Ab[ib] ?? 1;
              (1 !== ub || this._caps.textureFloatLinearFiltering) && (2 !== ub || this._caps.textureHalfFloatLinearFiltering) || (bb = 1);
              const Lb = this._getSamplingParameters(bb, Ob);
              1 !== ub || this._caps.textureFloat || (ub = 0, xb.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), hb = hb && this._caps.supportSRGBBuffers && (this.NX > 1 || this.isWebGPU);
              const Yb = this.NX > 1,
                Sb = Cb[Yb ? "COLOR_ATTACHMENT" + ib : "COLOR_ATTACHMENT" + ib + "_WEBGL"];
              if (zb.push(Sb), -1 === Gb || Kb) continue;
              const pb = new Du.b(this, 6);
              Db[ib] = pb, Cb.activeTexture(Cb["TEXTURE" + ib]), Cb.bindTexture(Gb, pb._hardwareTexture.underlyingResource), Cb.texParameteri(Gb, Cb.TEXTURE_MAG_FILTER, Lb.mag), Cb.texParameteri(Gb, Cb.TEXTURE_MIN_FILTER, Lb.min), Cb.texParameteri(Gb, Cb.TEXTURE_WRAP_S, Cb.CLAMP_TO_EDGE), Cb.texParameteri(Gb, Cb.TEXTURE_WRAP_T, Cb.CLAMP_TO_EDGE);
              const ob = this._getRGBABufferInternalSizedFormat(ub, Bb, hb),
                db = this._getInternalFormat(Bb),
                rb = this._getWebGLTextureType(ub);
              if (!Yb || 35866 !== Gb && 32879 !== Gb)
                if (34067 === Gb) {
                  for (let bb = 0; bb < 6; bb++) Cb.texImage2D(Cb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, ob, jb, nb, 0, db, rb, null);
                  pb.isCube = !0
                } else Cb.texImage2D(Cb.TEXTURE_2D, 0, ob, jb, nb, 0, db, rb, null);
              else 35866 === Gb ? pb.is2DArray = !0 : pb.is3D = !0, pb.baseDepth = pb.depth = Ub, Cb.texImage3D(Gb, 0, ob, jb, nb, Ub, 0, db, rb, null);
              Ob && Cb.generateMipmap(Gb), this._bindTextureDirectly(Gb, null), pb.baseWidth = jb, pb.baseHeight = nb, pb.width = jb, pb.height = nb, pb.isReady = !0, pb.samples = 1, pb.generateMipMaps = Ob, pb.samplingMode = bb, pb.type = ub, pb._useSRGBBuffer = hb, pb.format = Bb, pb.label = lb[ib] ?? Wb.label + "-Texture" + ib, this._internalTexturesCache.push(pb)
            }
            if (Lb && this._caps.depthTextureExtension && !Kb) {
              const bb = new Du.b(this, 14);
              let ub = 5,
                Bb = Cb.DEPTH_COMPONENT16,
                Gb = Cb.DEPTH_COMPONENT,
                Ub = Cb.UNSIGNED_SHORT,
                Lb = Cb.DEPTH_ATTACHMENT;
              this.NX < 2 ? Bb = Cb.DEPTH_COMPONENT : 14 === hb ? (ub = 1, Ub = Cb.FLOAT, Bb = Cb.DEPTH_COMPONENT32F) : 18 === hb ? (ub = 0, Ub = Cb.FLOAT_32_UNSIGNED_INT_24_8_REV, Bb = Cb.DEPTH32F_STENCIL8, Gb = Cb.DEPTH_STENCIL, Lb = Cb.DEPTH_STENCIL_ATTACHMENT) : 16 === hb ? (ub = 0, Ub = Cb.UNSIGNED_INT, Bb = Cb.DEPTH_COMPONENT24, Lb = Cb.DEPTH_ATTACHMENT) : 13 !== hb && 17 !== hb || (ub = 12, Ub = Cb.UNSIGNED_INT_24_8, Bb = Cb.DEPTH24_STENCIL8, Gb = Cb.DEPTH_STENCIL, Lb = Cb.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Cb.TEXTURE_2D, bb, !0), Cb.texParameteri(Cb.TEXTURE_2D, Cb.TEXTURE_MAG_FILTER, Cb.NEAREST), Cb.texParameteri(Cb.TEXTURE_2D, Cb.TEXTURE_MIN_FILTER, Cb.NEAREST), Cb.texParameteri(Cb.TEXTURE_2D, Cb.TEXTURE_WRAP_S, Cb.CLAMP_TO_EDGE), Cb.texParameteri(Cb.TEXTURE_2D, Cb.TEXTURE_WRAP_T, Cb.CLAMP_TO_EDGE), Cb.texImage2D(Cb.TEXTURE_2D, 0, Bb, jb, nb, 0, Gb, Ub, null), Cb.framebufferTexture2D(Cb.FRAMEBUFFER, Lb, Cb.TEXTURE_2D, bb._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Cb.TEXTURE_2D, null), Wb._depthStencilTexture = bb, Wb._depthStencilTextureWithStencil = gb, bb.baseWidth = jb, bb.baseHeight = nb, bb.width = jb, bb.height = nb, bb.isReady = !0, bb.samples = 1, bb.generateMipMaps = Ob, bb.samplingMode = 1, bb.format = hb, bb.type = ub, bb.label = Wb.label + "-DepthStencil", Db[Yb] = bb, this._internalTexturesCache.push(bb)
            }
            if (Wb.setTextures(Db), Bb && Cb.drawBuffers(zb), this._bindUnboundFramebuffer(db), Wb.setLayerAndFaceIndices(ob, pb), this.resetTextureCache(), Kb) {
              if (Sb > 1) {
                const bb = Cb.createFramebuffer();
                if (!bb) throw new Error("Unable to create multi sampled framebuffer");
                Wb._samples = Sb, Wb._MSAAFramebuffer = bb, Yb > 0 && Bb && (this._bindUnboundFramebuffer(bb), Cb.drawBuffers(zb), this._bindUnboundFramebuffer(db))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Wb, Sb, Bb);
            return Wb
          }, xu.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(bb, ub) {
            let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.NX < 2 || !bb) return 1;
            if (bb.samples === ub) return ub;
            const Bb = this._gl;
            ub = Math.min(ub, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (Bb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (Bb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
            const Ob = bb._attachments.length;
            for (let Ub = 0; Ub < Ob; Ub++) {
              const ub = bb.textures[Ub]._hardwareTexture;
              ub?.releaseMSAARenderBuffers()
            }
            if (ub > 1 && "function" === typeof Bb.renderbufferStorageMultisample) {
              const Gb = Bb.createFramebuffer();
              if (!Gb) throw new Error("Unable to create multi sampled framebuffer");
              bb._MSAAFramebuffer = Gb, this._bindUnboundFramebuffer(Gb);
              const Ub = [];
              for (let hb = 0; hb < Ob; hb++) {
                const Ob = bb.textures[hb],
                  Gb = Ob._hardwareTexture,
                  Lb = Bb[this.NX > 1 ? "COLOR_ATTACHMENT" + hb : "COLOR_ATTACHMENT" + hb + "_WEBGL"],
                  Yb = this._createRenderBuffer(Ob.width, Ob.height, ub, -1, this._getRGBABufferInternalSizedFormat(Ob.type, Ob.format, Ob._useSRGBBuffer), Lb);
                if (!Yb) throw new Error("Unable to create multi sampled framebuffer");
                Gb.addMSAARenderBuffer(Yb), Ob.samples = ub, Ub.push(Lb)
              }
              hb && Bb.drawBuffers(Ub)
            } else this._bindUnboundFramebuffer(bb._framebuffer);
            const Gb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
            return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, ub, Gb), this._bindUnboundFramebuffer(null), bb._samples = ub, ub
          }, xu.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(bb) {
            const ub = bb,
              hb = this._gl;
            if (ub.isMulti)
              for (let Bb = 0; Bb < ub._attachments.length; Bb++) {
                const bb = ub.textures[Bb];
                !bb?.generateMipMaps || bb?.isCube || bb?.is3D || (this._bindTextureDirectly(hb.TEXTURE_2D, bb, !0), hb.generateMipmap(hb.TEXTURE_2D), this._bindTextureDirectly(hb.TEXTURE_2D, null))
              }
          }, xu.ThinEngine.prototype.resolveMultiFramebuffer = function(bb) {
            const ub = bb,
              hb = this._gl;
            if (!ub._MSAAFramebuffer || !ub.isMulti) return;
            let Bb = ub.resolveMSAAColors ? hb.COLOR_BUFFER_BIT : 0;
            Bb |= ub._generateDepthBuffer && ub.resolveMSAADepth ? hb.DEPTH_BUFFER_BIT : 0, Bb |= ub._generateStencilBuffer && ub.resolveMSAAStencil ? hb.STENCIL_BUFFER_BIT : 0;
            const Ob = ub._attachments,
              Gb = Ob.length;
            hb.bindFramebuffer(hb.READ_FRAMEBUFFER, ub._MSAAFramebuffer), hb.bindFramebuffer(hb.DRAW_FRAMEBUFFER, ub._framebuffer);
            for (let Ub = 0; Ub < Gb; Ub++) {
              const bb = ub.textures[Ub];
              for (let ub = 0; ub < Gb; ub++) Ob[ub] = hb.NONE;
              Ob[Ub] = hb[this.NX > 1 ? "COLOR_ATTACHMENT" + Ub : "COLOR_ATTACHMENT" + Ub + "_WEBGL"], hb.readBuffer(Ob[Ub]), hb.drawBuffers(Ob), hb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, Bb, hb.NEAREST)
            }
            for (let Ub = 0; Ub < Gb; Ub++) Ob[Ub] = hb[this.NX > 1 ? "COLOR_ATTACHMENT" + Ub : "COLOR_ATTACHMENT" + Ub + "_WEBGL"];
            hb.drawBuffers(Ob), hb.bindFramebuffer(this._gl.FRAMEBUFFER, ub._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Gb;
        const Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [],
          Ab = [],
          lb = [];
        this._initTypes(hb, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Ob);
        const Kb = !Ob || void 0 === Ob.generateDepthBuffer || Ob.generateDepthBuffer,
          Wb = !(!Ob || void 0 === Ob.generateStencilBuffer) && Ob.generateStencilBuffer,
          Cb = Ob && Ob.samples ? Ob.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: wb,
          generateMipMaps: Ub,
          generateDepthBuffer: Kb,
          generateStencilBuffer: Wb,
          generateDepthTexture: Lb,
          depthTextureFormat: Yb,
          types: Hb,
          eUb: hb,
          useSRGBBuffers: Zb,
          samples: Cb,
          formats: Xb,
          targetTypes: pb,
          faceIndex: ob,
          layerIndex: Ab,
          layerCounts: lb,
          labels: Gb,
          label: bb
        }, this._count = hb, this._drawOnlyOnFirstAttachmentByDefault = ab, hb > 0 && (this._createInternalTextures(), this._createTextures(Gb))
      }
      _initTypes(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        for (let ab = 0; ab < bb; ab++) Sb && Sb.types && void 0 !== Sb.types[ab] ? ub.push(Sb.types[ab]) : ub.push(Sb && Sb.defaultType ? Sb.defaultType : 0), Sb && Sb.samplingModes && void 0 !== Sb.samplingModes[ab] ? hb.push(Sb.samplingModes[ab]) : hb.push(gb.f.BILINEAR_SAMPLINGMODE), Sb && Sb.useSRGBBuffers && void 0 !== Sb.useSRGBBuffers[ab] ? Bb.push(Sb.useSRGBBuffers[ab]) : Bb.push(!1), Sb && Sb.formats && void 0 !== Sb.formats[ab] ? Ob.push(Sb.formats[ab]) : Ob.push(5), Sb && Sb.targetTypes && void 0 !== Sb.targetTypes[ab] ? Gb.push(Sb.targetTypes[ab]) : Gb.push(3553), Sb && Sb.faceIndex && void 0 !== Sb.faceIndex[ab] ? Ub.push(Sb.faceIndex[ab]) : Ub.push(0), Sb && Sb.layerIndex && void 0 !== Sb.layerIndex[ab] ? Lb.push(Sb.layerIndex[ab]) : Lb.push(0), Sb && Sb.layerCounts && void 0 !== Sb.layerCounts[ab] ? Yb.push(Sb.layerCounts[ab]) : Yb.push(1)
      }
      _createInternaTextureIndexMapping() {
        const bb = {},
          ub = [];
        if (!this._renderTarget) return ub;
        const hb = this._renderTarget.textures;
        for (let Bb = 0; Bb < hb.length; Bb++) {
          const Ob = hb[Bb];
          if (!Ob) continue;
          const Gb = bb[Ob.uniqueId];
          void 0 !== Gb ? ub[Bb] = Gb : bb[Ob.uniqueId] = Bb
        }
        return ub
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || bb) return;
        const Bb = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), ub && (this._releaseTextures(), this._createTextures(hb));
        const Ob = this._renderTarget.textures;
        for (let Gb = 0; Gb < Ob.length; Gb++) {
          const bb = this._textures[Gb];
          void 0 !== Bb[Gb] && this._renderTarget.setTexture(Ob[Bb[Gb]], Gb), bb._texture = Ob[Gb], bb._texture && (bb._noMipmap = !bb._texture.useMipMaps, bb._useSRGBBuffer = bb._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let bb = 0; bb < this._textures.length; bb++) this._textures[bb]._texture = null, this._textures[bb].dispose()
      }
      _createTextures(bb) {
        const ub = this._renderTarget.textures;
        this._textures = [];
        for (let hb = 0; hb < ub.length; hb++) {
          const Bb = new gb.f(null, this.ZN());
          bb?.[hb] && (Bb.name = bb[hb]), Bb._texture = ub[hb], Bb._texture && (Bb._noMipmap = !Bb._texture.useMipMaps, Bb._useSRGBBuffer = Bb._texture._useSRGBBuffer), this._textures.push(Bb)
        }
      }
      setInternalTexture(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === ub && (this._texture = bb), this.renderTarget.setTexture(bb, ub, hb), this.textures[ub] || (this.textures[ub] = new gb.f(null, this.ZN()), this.textures[ub].name = this._textureNames?.[ub] ?? this.textures[ub].name), this.textures[ub]._texture = bb, this.textures[ub]._noMipmap = !bb.useMipMaps, this.textures[ub]._useSRGBBuffer = bb._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[ub] = bb.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[ub] = bb.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[ub] = bb._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[ub])) {
          let hb;
          hb = bb.is2DArray ? 35866 : bb.isCube ? 34067 : bb.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[ub] = hb
        }
      }
      setLayerAndFaceIndex(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[bb] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[bb] = ub), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[bb] = hb), this.renderTarget.setLayerAndFaceIndex(bb, ub, hb))
      }
      setLayerAndFaceIndices(bb, ub) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = bb, this._multiRenderTargetOptions.faceIndex = ub, this.renderTarget.setLayerAndFaceIndices(bb, ub))
      }
      get samples() {
        return this._samples
      }
      set samples(bb) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(bb) : this._samples = bb
      }
      resize(bb) {
        this._processSizeParameter(bb), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(bb, ub, hb) {
        this._multiRenderTargetOptions.eUb = bb, this._count = bb;
        const Bb = [],
          Ob = [],
          Gb = [],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [];
        this._textureNames = hb, this._initTypes(bb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, ub), this._multiRenderTargetOptions.types = Bb, this._multiRenderTargetOptions.samplingModes = Ob, this._multiRenderTargetOptions.useSRGBBuffers = Gb, this._multiRenderTargetOptions.formats = Ub, this._multiRenderTargetOptions.targetTypes = Lb, this._multiRenderTargetOptions.faceIndex = Yb, this._multiRenderTargetOptions.layerIndex = Sb, this._multiRenderTargetOptions.layerCounts = ab, this._multiRenderTargetOptions.labels = hb, this._rebuild(!1, !0, hb)
      }
      _unbindFrameBuffer(bb, ub) {
        this._renderTarget && bb.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ub)
        }))
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), bb ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const bb = this._renderTarget?.textures;
        if (bb) {
          for (let ub = bb.length - 1; ub >= 0; ub--) this._textures[ub]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Ju = hb(39632);
    class eu {
      constructor(bb) {
        this.name = Ju.d.NAME_GEOMETRYBUFFERRENDERER, this.Xp = bb
      }
      register() {
        this.Xp._gatherRenderTargetsStage.registerStep(Ju.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(bb) {
        this.Xp._geometryBufferRenderer && bb.push(this.Xp._geometryBufferRenderer.getGBuffer())
      }
    }
    let Nu = !1;
    var su;
    ! function(bb) {
      bb[bb.Small = 0] = "Small", bb[bb.Medium = 1] = "Medium", bb[bb.Large = 2] = "Large", bb[bb.ExtraLarge = 3] = "ExtraLarge"
    }(su || (su = {}));
    const Mu = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      mu = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Iu {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(bb) {
        if (bb && this._enableMeshBlendTag && !this._scene.UX().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = bb
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(bb) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = bb, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(bb, ub) {
        bb === Iu.POSITION_TEXTURE_TYPE ? (this._positionIndex = ub, this._enablePosition = !0) : bb === Iu.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = ub, this._enableVelocity = !0) : bb === Iu.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = ub, this._enableVelocityLinear = !0) : bb === Iu.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = ub, this._enableReflectivity = !0) : bb === Iu.DEPTH_TEXTURE_TYPE ? (this._depthIndex = ub, this._enableDepth = !0) : bb === Iu.NORMAL_TEXTURE_TYPE ? (this._normalIndex = ub, this._enableNormal = !0) : bb === Iu.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = ub, this._enableScreenspaceDepth = !0) : bb === Iu.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = ub, this._enableIrradiance = !0) : bb === Iu.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = ub, this._enableObjectId = !0) : bb === Iu.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = ub, this._enableMeshBlendTag = !0)
      }
      _setAttachments(bb) {
        this._attachmentsFromPrePass = bb
      }
      _linkInternalTexture(bb) {
        this._multiRenderTarget.setInternalTexture(bb, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(bb) {
        this._multiRenderTarget.renderList = bb
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(bb) {
        switch (bb) {
          case Iu.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Iu.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Iu.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Iu.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Iu.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Iu.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Iu.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Iu.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Iu.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Iu.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(bb) {
        this._enableDepth = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(bb) {
        this._enableNormal = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(bb) {
        this._enablePosition = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(bb) {
        this._enableVelocity = bb, bb || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = bb
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(bb) {
        this._enableVelocityLinear = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(bb) {
        this._enableReflectivity = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(bb) {
        this._enableScreenspaceDepth = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(bb) {
        this._enableIrradiance = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(bb) {
        if (bb && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (bb && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (bb && !this._enableObjectId && !this._linkedWithPrePass) {
          const bb = this._scene.UX(),
            ub = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
            hb = this._assignRenderTargetIndices()[0] + 1;
          if (bb.getCaps().drawBuffersExtension && hb > ub) throw new Error(`GeometryBufferRenderer: ${hb} color attachments were requested, but this engine supports at most ${ub}`)
        }
        this._enableObjectId = bb, bb || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(bb) {
        if (this._enableMeshBlendTag !== bb) {
          if (bb) {
            const bb = this._scene.UX();
            if (! function(bb) {
                return "NATIVE" !== bb.shaderPlatformName && (bb.isWebGPU || 2 === bb.NX)
              }(bb)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !bb.isWebGPU && !bb.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const ub = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
                hb = this._assignRenderTargetIndices()[0] + 1;
              if (bb.getCaps().drawBuffersExtension && hb > ub) throw new Error(`GeometryBufferRenderer: ${hb} color attachments were requested, but this engine supports at most ${ub}`)
            }
          }
          this._enableMeshBlendTag = bb, bb || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Xp() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        var Ob;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Vb.c(0, 0, 0, 0), this._clearDepthColor = new Vb.c(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = bb, this._ratioOrDimensions = ub, this._useUbo = bb.UX().supportsUniformBuffers, this._depthFormat = hb, this._textureTypesAndFormats = Bb || {}, this._initShaderSourceAsync(), Ob = Iu, Nu || (Nu = !0, Object.defineProperty(sb.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(bb) {
            bb && bb.isSupported && (this._geometryBufferRenderer = bb)
          },
          enumerable: !0,
          configurable: !0
        }), sb.f.prototype.enableGeometryBufferRenderer = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            hb = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Ob(this, bb, ub, hb), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, sb.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Ob._SceneComponentInitialization = bb => {
          let ub = bb._getComponent(Ju.d.NAME_GEOMETRYBUFFERRENDERER);
          ub || (ub = new eu(bb), bb.bBb(ub))
        }), Iu._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.UX().isWebGPU && !Iu.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([hb.e(328).then((() => hb(61253))), Promise.all([hb.e(327), hb.e(339)]).then((() => hb(61260)))])) : await Promise.all([hb.e(311).then((() => hb(61263))), hb.e(310).then((() => hb(61270)))]), this._shadersLoaded = !0
      }
      isReady(bb, ub) {
        if (!this._shadersLoaded) return !1;
        const hb = bb.HX();
        if (hb && hb.disableDepthWrite) return !1;
        if (function(bb) {
            return bb._isGaussianSplatting || "GaussianSplattingMesh" === (ub = bb.getClassName()) || "GaussianSplattingStream" === ub;
            var ub
          }(bb.getMesh())) return !1;
        const Bb = [],
          Ob = [mb.i.PositionKind],
          Gb = bb.getMesh();
        Gb.isVerticesDataPresent(mb.i.NormalKind) && (Bb.push("#define HAS_NORMAL_ATTRIBUTE"), Ob.push(mb.i.NormalKind));
        let Ub = !1,
          Lb = !1;
        if (hb) {
          let bb = !1;
          if (hb.needAlphaTestingForMesh(Gb) && hb.getAlphaTestTexture() && (Bb.push("#define ALPHATEST"), Bb.push(`#define ALPHATEST_UV${hb.getAlphaTestTexture().coordinatesIndex+1}`), bb = !0), (hb.bumpTexture || hb.normalTexture || hb.geometryNormalTexture) && Tb.e.BumpTextureEnabled) {
            const ub = hb.bumpTexture || hb.normalTexture || hb.geometryNormalTexture;
            Bb.push("#define BUMP"), Bb.push(`#define BUMP_UV${ub.coordinatesIndex+1}`), bb = !0
          }
          if (this._enableReflectivity) {
            let ub = !1;
            if ("PBRMetallicRoughnessMaterial" === hb.getClassName()) hb.metallicRoughnessTexture && (Bb.push("#define ORMTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${hb.metallicRoughnessTexture.coordinatesIndex+1}`), Bb.push("#define METALLICWORKFLOW"), bb = !0, ub = !0), null != hb.metallic && (Bb.push("#define METALLIC"), Bb.push("#define METALLICWORKFLOW"), ub = !0), null != hb.roughness && (Bb.push("#define ROUGHNESS"), Bb.push("#define METALLICWORKFLOW"), ub = !0), ub && (hb.baseTexture && (Bb.push("#define ALBEDOTEXTURE"), Bb.push(`#define ALBEDO_UV${hb.baseTexture.coordinatesIndex+1}`), hb.baseTexture.gammaSpace && Bb.push("#define GAMMAALBEDO"), bb = !0), hb.baseColor && Bb.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === hb.getClassName()) hb.specularGlossinessTexture ? (Bb.push("#define SPECULARGLOSSINESSTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${hb.specularGlossinessTexture.coordinatesIndex+1}`), bb = !0, hb.specularGlossinessTexture.gammaSpace && Bb.push("#define GAMMAREFLECTIVITYTEXTURE")) : hb.specularColor && Bb.push("#define REFLECTIVITYCOLOR"), null != hb.glossiness && Bb.push("#define GLOSSINESS");
            else if ("PBRMaterial" === hb.getClassName()) hb.metallicTexture && (Bb.push("#define ORMTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${hb.metallicTexture.coordinatesIndex+1}`), Bb.push("#define METALLICWORKFLOW"), bb = !0, ub = !0), null != hb.metallic && (Bb.push("#define METALLIC"), Bb.push("#define METALLICWORKFLOW"), ub = !0), null != hb.roughness && (Bb.push("#define ROUGHNESS"), Bb.push("#define METALLICWORKFLOW"), ub = !0), ub ? (hb.albedoTexture && (Bb.push("#define ALBEDOTEXTURE"), Bb.push(`#define ALBEDO_UV${hb.albedoTexture.coordinatesIndex+1}`), hb.albedoTexture.gammaSpace && Bb.push("#define GAMMAALBEDO"), bb = !0), hb.albedoColor && Bb.push("#define ALBEDOCOLOR")) : (hb.reflectivityTexture ? (Bb.push("#define SPECULARGLOSSINESSTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${hb.reflectivityTexture.coordinatesIndex+1}`), hb.reflectivityTexture.gammaSpace && Bb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0) : hb.reflectivityColor && Bb.push("#define REFLECTIVITYCOLOR"), null != hb.microSurface && Bb.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === hb.getClassName()) hb.specularTexture && (Bb.push("#define REFLECTIVITYTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${hb.specularTexture.coordinatesIndex+1}`), hb.specularTexture.gammaSpace && Bb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0), hb.specularColor && Bb.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === hb.getClassName()) {
              const ub = hb;
              Bb.push("#define METALLIC"), Bb.push("#define ROUGHNESS"), ub._useRoughnessFromMetallicTextureGreen && ub.baseMetalnessTexture ? (Bb.push("#define ORMTEXTURE"), Bb.push(`#define REFLECTIVITY_UV${ub.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : ub.baseMetalnessTexture ? (Bb.push("#define METALLIC_TEXTURE"), Bb.push(`#define METALLIC_UV${ub.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : ub.specularRoughnessTexture && (Bb.push("#define ROUGHNESS_TEXTURE"), Bb.push(`#define ROUGHNESS_UV${ub.specularRoughnessTexture.coordinatesIndex+1}`), bb = !0), ub.baseColorTexture && (Bb.push("#define ALBEDOTEXTURE"), Bb.push(`#define ALBEDO_UV${ub.baseColorTexture.coordinatesIndex+1}`), ub.baseColorTexture.gammaSpace && Bb.push("#define GAMMAALBEDO"), bb = !0), ub.baseColor && Bb.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Bb.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === hb.getClassName())) {
            const ub = hb;
            ub.subsurfaceWeight > 0 && ub.subsurfaceWeightTexture && (Bb.push("#define SUBSURFACE_WEIGHT"), Bb.push(`#define SUBSURFACEWEIGHT_UV${ub.subsurfaceWeightTexture.coordinatesIndex+1}`), bb = !0), ub.transmissionWeight > 0 && ub.transmissionWeightTexture && (Bb.push("#define TRANSMISSION_WEIGHT"), Bb.push(`#define TRANSMISSIONWEIGHT_UV${ub.transmissionWeightTexture.coordinatesIndex+1}`), bb = !0)
          }
          bb && (Bb.push("#define NEED_UV"), Gb.isVerticesDataPresent(mb.i.UVKind) && (Ob.push(mb.i.UVKind), Bb.push("#define UV1"), Ub = !0), Gb.isVerticesDataPresent(mb.i.UV2Kind) && (Ob.push(mb.i.UV2Kind), Bb.push("#define UV2"), Lb = !0))
        }
        if (this._enableDepth && (Bb.push("#define DEPTH"), Bb.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Bb.push("#define NORMAL"), Bb.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Bb.push("#define POSITION"), Bb.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Bb.push("#define VELOCITY"), Bb.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Gb) && Bb.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Bb.push("#define VELOCITY_LINEAR"), Bb.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Gb) && Bb.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Bb.push("#define REFLECTIVITY"), Bb.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Bb.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Bb.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Bb.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Bb.push("#define IRRADIANCE");
          const bb = this._scene;
          if (bb.environmentTexture) {
            const ub = {};
            let Ob = !1,
              Gb = 0;
            "OpenPBRMaterial" !== hb.getClassName() && "StandardMaterial" !== hb.getClassName() && "PBRMetallicRoughnessMaterial" !== hb.getClassName() && "PBRSpecularGlossinessMaterial" !== hb.getClassName() && "PBRMaterial" !== hb.getClassName() || (Ob = !!hb.realtimeFiltering, Gb = hb.realtimeFilteringQuality || 0), (0, Qb.O)(bb, bb.environmentTexture, ub, Ob, Gb, !0);
            for (const bb in ub) ub[bb] && Bb.push("#define " + bb);
            ub.USEIRRADIANCEMAP || Bb.push("#define SPHERICAL_HARMONICS");
            const Ub = bb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
            if (Ub) {
              const bb = Ub;
              bb._getAccumulatedTexture() && (Bb.push("#define IBL_SHADOW_TEXTURE"), bb.coloredShadows && Bb.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Bb.push("#define OBJECT_ID"), Bb.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Bb.push("#define MESH_BLEND_TAG"), Bb.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Bb.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Bb.push("#define ENCODE_NORMAL"), Gb.useBones && Gb.computeBonesUsingShaders && Gb.skeleton ? (Ob.push(mb.i.MatricesIndicesKind), Ob.push(mb.i.MatricesWeightsKind), Gb.numBoneInfluencers > 4 && (Ob.push(mb.i.MatricesIndicesExtraKind), Ob.push(mb.i.MatricesWeightsExtraKind)), Bb.push("#define NUM_BONE_INFLUENCERS " + Gb.numBoneInfluencers), Bb.push("#define BONETEXTURE " + Gb.skeleton.isUsingTextureForMatrices), Bb.push("#define BonesPerMesh " + (Gb.skeleton.bones.length + 1))) : (Bb.push("#define NUM_BONE_INFLUENCERS 0"), Bb.push("#define BONETEXTURE false"), Bb.push("#define BonesPerMesh 0"));
        const Yb = Gb.morphTargetManager ? (0, Qb.H)(Gb.morphTargetManager, Bb, Ob, Gb, !0, !0, !1, Ub, Lb, !1) : 0;
        ub && (Bb.push("#define INSTANCES"), (0, Qb.fb)(Ob, this._enableVelocity || this._enableVelocityLinear), bb.getRenderingMesh().hasThinInstances && Bb.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Bb.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Bb.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, au.k)(hb, this._scene, Bb);
        const Sb = this._scene.UX(),
          ab = bb._getDrawWrapper(void 0, !0),
          Hb = ab.defines,
          wb = Bb.join("\n");
        return Hb !== wb && ab.setEffect(Sb.createEffect("geometry", {
          attributes: Ob,
          uniformsNames: mu,
          samplers: Mu,
          defines: wb,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Yb
          },
          shaderLanguage: this.shaderLanguage
        }, Sb), wb), ab.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(bb) {
        if (this._enableObjectId && 1 !== bb) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== bb) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = bb
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.UX().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Xp.UX()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Xp.UX().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const bb = [],
          ub = [];
        let hb = 0;
        return this._enableDepth && (this._depthIndex = hb, hb++, bb.push("gBuffer_Depth"), ub.push(this._textureTypesAndFormats[Iu.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = hb, hb++, bb.push("gBuffer_Normal"), ub.push(this._textureTypesAndFormats[Iu.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = hb, hb++, bb.push("gBuffer_Position"), ub.push(this._textureTypesAndFormats[Iu.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = hb, hb++, bb.push("gBuffer_Velocity"), ub.push(this._textureTypesAndFormats[Iu.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = hb, hb++, bb.push("gBuffer_VelocityLinear"), ub.push(this._textureTypesAndFormats[Iu.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = hb, hb++, bb.push("gBuffer_Reflectivity"), ub.push(this._textureTypesAndFormats[Iu.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = hb, hb++, bb.push("gBuffer_ScreenspaceDepth"), ub.push(this._textureTypesAndFormats[Iu.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = hb, hb++, bb.push("gBuffer_Irradiance"), ub.push(this._textureTypesAndFormats[Iu.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = hb, hb++, bb.push("gBuffer_ObjectId"), ub.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = hb, hb++, bb.push("gBuffer_MeshBlendTag"), ub.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [hb, bb, ub]
      }
      _createRenderTargets() {
        const bb = this._scene.UX(),
          [ub, hb, Bb] = this._assignRenderTargetIndices(),
          Ob = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8);
        if (bb.getCaps().drawBuffersExtension && ub > Ob) throw new Error(`GeometryBufferRenderer: ${ub} color attachments were requested, but this engine supports at most ${Ob}`);
        let Ub = 0;
        bb._caps.textureFloat && bb._caps.textureFloatLinearFiltering ? Ub = 1 : bb._caps.textureHalfFloat && bb._caps.textureHalfFloatLinearFiltering && (Ub = 2);
        const Lb = this._getRenderTargetDimensions(),
          Yb = [],
          Sb = [],
          ab = [];
        for (const Gb of Bb) Gb ? (Yb.push(Gb.textureType), Sb.push(Gb.textureFormat), ab.push(Gb.samplingMode ?? 2)) : (Yb.push(Ub), Sb.push(5), ab.push(2));
        if (this._normalsAreUnsigned = 11 === Yb[Iu.NORMAL_TEXTURE_TYPE] || 13 === Yb[Iu.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new tu("gBuffer", Lb, ub, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Yb,
            formats: Sb,
            samplingModes: ab,
            depthTextureFormat: this._depthFormat
          }, hb.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = gb.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = gb.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Hb = [!0],
          wb = [!1],
          Zb = [!0];
        for (let Gb = 1; Gb < ub; ++Gb) Hb.push(!0), Zb.push(!1), wb.push(!0);
        const Xb = bb.buildTextureLayout(Hb),
          pb = bb.buildTextureLayout(wb),
          ob = bb.buildTextureLayout(Zb);
        this._multiRenderTarget.onClearObservable.add((bb => {
          const ub = this.useSpecificClearForDepthTexture ? pb : Xb;
          bb.clearAttachments(this._clearColor, ub, !0, !0, !0), this.useSpecificClearForDepthTexture && bb.clearAttachments(this._clearDepthColor, ob, !0, !1, !1), bb.bindAttachments(Xb)
        })), this._resizeObserver = bb.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Ab = bb => {
          const ub = bb.getRenderingMesh(),
            hb = bb.getEffectiveMesh(),
            Bb = this._scene,
            Ob = Bb.UX(),
            Ub = bb.HX();
          if (!Ub) return;
          if (hb._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[hb.uniqueId] && (this._previousTransformationMatrices[hb.uniqueId] = {
              eH: Mb.d.Identity(),
              viewProjection: Bb.getTransformMatrix()
            }, ub.skeleton)) {
            const bb = ub.skeleton.getTransformMatrices(ub);
            this._previousBonesTransformationMatrices[ub.uniqueId] = this._copyBonesTransformationMatrices(bb, new Float32Array(bb.length))
          }
          const Lb = ub._getInstancesRenderList(bb._id, !!bb.getReplacementMesh());
          if (Lb.mustReturn) return;
          const Yb = Ob.getCaps().instancedArrays && (null !== Lb.visibleInstances[bb._id] || ub.hasThinInstances),
            Sb = hb.getWorldMatrix();
          if (this.isReady(bb, Yb)) {
            const ab = bb._getDrawWrapper();
            if (!ab) return;
            const Hb = ab.effect;
            let wb;
            Ob.enableEffect(ab), Yb || ub._bind(bb, Hb, Ub.fillMode), this._useUbo ? ((0, Qb.s)(Hb, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Hb.setMatrix("viewProjection", Bb.getTransformMatrix()), Hb.setMatrix("view", Bb.getViewMatrix()), this._scene.bindEyePosition(Hb, "vEyePosition"));
            if (ub._instanceDataStorage.isFrozen || !Ub.backFaceCulling && null === Ub.sideOrientation) wb = ub._effectiveSideOrientation;
            else {
              const bb = hb._getWorldMatrixDeterminant();
              wb = Ub._getEffectiveOrientation(ub), bb < 0 && (wb = wb === Gb.e.ClockWiseSideOrientation ? Gb.e.CounterClockWiseSideOrientation : Gb.e.ClockWiseSideOrientation)
            }
            if (Ub._preBind(ab, wb), Ub.needAlphaTestingForMesh(hb)) {
              const bb = Ub.getAlphaTestTexture();
              bb && (Hb.setTexture("diffuseSampler", bb), Hb.setMatrix("diffuseMatrix", bb.getTextureMatrix()), Hb.setFloat("alphaCutOff", Ub.alphaCutOff ?? .4))
            }
            if ((Ub.bumpTexture || Ub.normalTexture || Ub.geometryNormalTexture) && Bb.UX().getCaps().standardDerivatives && Tb.e.BumpTextureEnabled) {
              const bb = Ub.bumpTexture || Ub.normalTexture || Ub.geometryNormalTexture;
              Hb.setFloat3("vBumpInfos", bb.coordinatesIndex, 1 / bb.level, Ub.parallaxScaleBias), Hb.setMatrix("bumpMatrix", bb.getTextureMatrix()), Hb.setTexture("bumpSampler", bb), Hb.setFloat2("vTangentSpaceParams", Ub.invertNormalMapX ? -1 : 1, Ub.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Ub.getClassName()) null !== Ub.metallicRoughnessTexture && (Hb.setTexture("reflectivitySampler", Ub.metallicRoughnessTexture), Hb.setMatrix("reflectivityMatrix", Ub.metallicRoughnessTexture.getTextureMatrix())), null !== Ub.metallic && Hb.setFloat("metallic", Ub.metallic), null !== Ub.roughness && Hb.setFloat("glossiness", 1 - Ub.roughness), null !== Ub.baseTexture && (Hb.setTexture("albedoSampler", Ub.baseTexture), Hb.setMatrix("albedoMatrix", Ub.baseTexture.getTextureMatrix())), null !== Ub.baseColor && Hb.setColor3("albedoColor", Ub.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Ub.getClassName()) null !== Ub.specularGlossinessTexture ? (Hb.setTexture("reflectivitySampler", Ub.specularGlossinessTexture), Hb.setMatrix("reflectivityMatrix", Ub.specularGlossinessTexture.getTextureMatrix())) : null !== Ub.specularColor && Hb.setColor3("reflectivityColor", Ub.specularColor), null !== Ub.glossiness && Hb.setFloat("glossiness", Ub.glossiness);
            else if ("PBRMaterial" === Ub.getClassName()) null !== Ub.metallicTexture && (Hb.setTexture("reflectivitySampler", Ub.metallicTexture), Hb.setMatrix("reflectivityMatrix", Ub.metallicTexture.getTextureMatrix())), null !== Ub.metallic && Hb.setFloat("metallic", Ub.metallic), null !== Ub.roughness && Hb.setFloat("glossiness", 1 - Ub.roughness), null !== Ub.roughness || null !== Ub.metallic || null !== Ub.metallicTexture ? (null !== Ub.albedoTexture && (Hb.setTexture("albedoSampler", Ub.albedoTexture), Hb.setMatrix("albedoMatrix", Ub.albedoTexture.getTextureMatrix())), null !== Ub.albedoColor && Hb.setColor3("albedoColor", Ub.albedoColor)) : (null !== Ub.reflectivityTexture ? (Hb.setTexture("reflectivitySampler", Ub.reflectivityTexture), Hb.setMatrix("reflectivityMatrix", Ub.reflectivityTexture.getTextureMatrix())) : null !== Ub.reflectivityColor && Hb.setColor3("reflectivityColor", Ub.reflectivityColor), null !== Ub.microSurface && Hb.setFloat("glossiness", Ub.microSurface));
            else if ("StandardMaterial" === Ub.getClassName()) null !== Ub.specularTexture && (Hb.setTexture("reflectivitySampler", Ub.specularTexture), Hb.setMatrix("reflectivityMatrix", Ub.specularTexture.getTextureMatrix())), null !== Ub.specularColor && Hb.setColor3("reflectivityColor", Ub.specularColor);
            else if ("OpenPBRMaterial" === Ub.getClassName()) {
              const bb = Ub;
              bb._useRoughnessFromMetallicTextureGreen && bb.baseMetalnessTexture ? (Hb.setTexture("reflectivitySampler", bb.baseMetalnessTexture), Hb.setMatrix("reflectivityMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.baseMetalnessTexture ? (Hb.setTexture("metallicSampler", bb.baseMetalnessTexture), Hb.setMatrix("metallicMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.specularRoughnessTexture && (Hb.setTexture("roughnessSampler", bb.specularRoughnessTexture), Hb.setMatrix("roughnessMatrix", bb.specularRoughnessTexture.getTextureMatrix())), Hb.setFloat("metallic", bb.baseMetalness), Hb.setFloat("glossiness", 1 - bb.specularRoughness), null !== bb.baseColorTexture && (Hb.setTexture("albedoSampler", bb.baseColorTexture), Hb.setMatrix("albedoMatrix", bb.baseColorTexture.getTextureMatrix())), null !== bb.baseColor && Hb.setColor3("albedoColor", bb.baseColor)
            }
            if (this._enableIrradiance && Bb.environmentTexture) {
              const bb = Bb.environmentTexture,
                ub = Bb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
              if (ub) {
                const bb = ub._getAccumulatedTexture();
                bb && (Hb.setTexture("iblShadowSampler", bb), Hb.setFloat2("shadowTextureSize", bb.getSize().width, bb.getSize().height))
              }
              if (Hb.setMatrix("reflectionMatrix", bb.getReflectionTextureMatrix()), Hb.setFloat2("vReflectionInfos", bb.level * Bb.iblIntensity, 0), Hb.setTexture("reflectionSampler", bb), bb.irradianceTexture && (Hb.setTexture("irradianceSampler", bb.irradianceTexture), bb.irradianceTexture._dominantDirection && Hb.setVector3("vReflectionDominantDirection", bb.irradianceTexture._dominantDirection)), bb.sphericalPolynomial) {
                const ub = bb.sphericalPolynomial;
                if (ub.preScaledHarmonics) {
                  const bb = ub.preScaledHarmonics;
                  Hb.setVector3("vSphericalL00", bb.l00), Hb.setVector3("vSphericalL1_1", bb.l1_1), Hb.setVector3("vSphericalL10", bb.l10), Hb.setVector3("vSphericalL11", bb.l11), Hb.setVector3("vSphericalL2_2", bb.l2_2), Hb.setVector3("vSphericalL2_1", bb.l2_1), Hb.setVector3("vSphericalL20", bb.l20), Hb.setVector3("vSphericalL21", bb.l21), Hb.setVector3("vSphericalL22", bb.l22)
                } else Hb.setFloat3("vSphericalX", ub.x.x, ub.x.y, ub.x.z), Hb.setFloat3("vSphericalY", ub.y.x, ub.y.y, ub.y.z), Hb.setFloat3("vSphericalZ", ub.z.x, ub.z.y, ub.z.z), Hb.setFloat3("vSphericalXX_ZZ", ub.xx.x - ub.zz.x, ub.xx.y - ub.zz.y, ub.xx.z - ub.zz.z), Hb.setFloat3("vSphericalYY_ZZ", ub.yy.x - ub.zz.x, ub.yy.y - ub.zz.y, ub.yy.z - ub.zz.z), Hb.setFloat3("vSphericalZZ", ub.zz.x, ub.zz.y, ub.zz.z), Hb.setFloat3("vSphericalXY", ub.xy.x, ub.xy.y, ub.xy.z), Hb.setFloat3("vSphericalYZ", ub.yz.x, ub.yz.y, ub.yz.z), Hb.setFloat3("vSphericalZX", ub.zx.x, ub.zx.y, ub.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Ub.getClassName()) {
                const bb = Ub;
                Hb.setFloat("vSubsurfaceWeight", bb.subsurfaceWeight), bb.subsurfaceWeightTexture && (Hb.setTexture("subsurfaceWeightSampler", bb.subsurfaceWeightTexture), Hb.setMatrix("subsurfaceWeightMatrix", bb.subsurfaceWeightTexture.getTextureMatrix())), Hb.setFloat("vTransmissionWeight", bb.transmissionWeight), bb.transmissionWeightTexture && (Hb.setTexture("transmissionWeightSampler", bb.transmissionWeightTexture), Hb.setMatrix("transmissionWeightMatrix", bb.transmissionWeightTexture.getTextureMatrix())), Hb.setFloat("vTransmissionScatterAnisotropy", bb.transmissionScatterAnisotropy), Hb.setFloat("vSubsurfaceScatterAnisotropy", bb.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, au.g)(Hb, Ub, this._scene), ub.useBones && ub.computeBonesUsingShaders && ub.skeleton) {
              const bb = ub.skeleton;
              if (bb.isUsingTextureForMatrices && Hb.getUniformIndex("boneTextureInfo") > -1) {
                const hb = bb.getTransformMatrixTexture(ub);
                Hb.setTexture("boneSampler", hb), Hb.setFloat2("boneTextureInfo", bb._textureWidth, bb._textureHeight)
              } else Hb.setMatrices("mBones", ub.skeleton.getTransformMatrices(ub));
              (this._enableVelocity || this._enableVelocityLinear) && Hb.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[ub.uniqueId])
            }
            if ((0, Qb.p)(ub, Hb), ub.morphTargetManager && ub.morphTargetManager.isUsingTextureForTargets && ub.morphTargetManager._bind(Hb), (this._enableVelocity || this._enableVelocityLinear) && (Hb.setMatrix("previousWorld", this._previousTransformationMatrices[hb.uniqueId].eH), Hb.setMatrix("previousViewProjection", this._previousTransformationMatrices[hb.uniqueId].viewProjection)), this._enableObjectId) {
              let bb = ub.uniqueId;
              if (this.objectIdProvider) bb = (0, Zu.i)(ub, this.objectIdProvider);
              else if (bb > 16777215) throw new Error(`Invalid geometry object ID ${bb} for mesh "${ub.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Hb.setFloat("objectId", bb)
            }
            if (this._enableMeshBlendTag) {
              const bb = this.meshBlendTagProvider ? (0, Zu.g)(ub, this.meshBlendTagProvider) : ub.meshBlendingTag;
              Hb.setInt("meshBlendTag", bb)
            }
            Yb && ub.hasThinInstances && Hb.setMatrix("world", Sb), ub._processRendering(hb, bb, Hb, Ub.fillMode, Lb, Yb, ((bb, ub) => {
              bb || Hb.setMatrix("world", ub)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[hb.uniqueId].eH = Sb.clone(), this._previousTransformationMatrices[hb.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), ub.skeleton && this._copyBonesTransformationMatrices(ub.skeleton.getTransformMatrices(ub), this._previousBonesTransformationMatrices[hb.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (ub, hb, Bb) => {
          if ((Bb || 0 === hb) && ub.FW)
            for (let Ob = 0; Ob < ub.FW.length; ++Ob) {
              const hb = ub.FW[Ob],
                Bb = hb.HX(),
                Gb = hb.getRenderingMesh();
              if (!Bb) continue;
              const Ub = Gb._getInstancesRenderList(hb._id, !!hb.getReplacementMesh()),
                Lb = bb.getCaps().instancedArrays && (null !== Ub.visibleInstances[hb._id] || Gb.hasThinInstances);
              if (!this.isReady(hb, Lb)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (ub, hb, Bb, Ob) => {
          let Gb;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.UX().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Ob.length) {
            for (bb.setColorWrite(!1), Gb = 0; Gb < Ob.length; Gb++) Ab(Ob.data[Gb]);
            bb.setColorWrite(!0)
          }
          for (Gb = 0; Gb < ub.length; Gb++) Ab(ub.data[Gb]);
          for (bb.setDepthWrite(!1), Gb = 0; Gb < hb.length; Gb++) Ab(hb.data[Gb]);
          if (this.renderTransparentMeshes)
            for (Gb = 0; Gb < Bb.length; Gb++) Ab(Bb.data[Gb]);
          bb.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const bb = this._scene.UX();
        return {
          width: Math.max(1, Math.floor(bb.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(bb.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(bb, ub) {
        for (let hb = 0; hb < bb.length; hb++) ub[hb] = bb[hb];
        return ub
      }
    }
    Iu.ForceGLSL = !1, Iu.DEPTH_TEXTURE_TYPE = 0, Iu.NORMAL_TEXTURE_TYPE = 1, Iu.POSITION_TEXTURE_TYPE = 2, Iu.VELOCITY_TEXTURE_TYPE = 3, Iu.REFLECTIVITY_TEXTURE_TYPE = 4, Iu.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Iu.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Iu.IRRADIANCE_TEXTURE_TYPE = 7, Iu.OBJECT_ID_TEXTURE_TYPE = 8, Iu.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Iu._SceneComponentInitialization = bb => {
      throw (0, Au.m)("GeometryBufferRendererSceneComponent")
    };
    var Pu = hb(36762);
    const qu = {
      effect: null,
      subMesh: null
    };

    function Eu(bb) {
      if ("number" === typeof bb) return 1;
      if (bb instanceof Mb.m) return 2;
      if (bb instanceof Mb.q || bb instanceof Vb.b) return 3;
      if (bb instanceof Mb.r || bb instanceof Vb.c) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class yu {
      populateVectorFromLinkedProperties(bb) {
        const ub = Eu(bb);
        for (const hb in this.linkedProperties) {
          const bb = this.linkedProperties[hb],
            Bb = bb.numComponents;
          if (ub < Bb || bb.targetUniformComponentOffset > ub - Bb) return void(1 == Bb ? xb.b.Error(`Float property ${bb.name} has an offset that is too large.`) : xb.b.Error(`Vector${Bb} property ${bb.name} won't fit in Vector${ub} or has an offset that is too large.`));
          "number" === typeof bb.value ? yu._tmpArray[bb.targetUniformComponentOffset] = bb.value : bb.value.toArray(yu._tmpArray, bb.targetUniformComponentOffset)
        }
        bb.Ohb(yu._tmpArray)
      }
      constructor(bb, ub) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = bb, this.numComponents = ub
      }
    }
    yu._tmpArray = [0, 0, 0, 0];
    class Vu {
      constructor(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = bb, this.targetUniformName = hb, this.defaultValue = ub, this.value = ub, this.targetUniformComponentNum = Bb, this.targetUniformComponentOffset = Ob, this.requiredDefine = Gb
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Eu(this.defaultValue)
      }
    }
    class Fu {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(bb, ub, hb) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = bb, this.samplerPrefix = ub, this.textureDefine = hb
      }
    }
    class fu extends((0, pu.d)((0, Xu.b)(Ib.d))) {}
    class ku extends(function(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(fu)) {}
    class Tu extends((0, Fb.c)(ku)) {
      constructor(bb) {
        super(bb), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class cu extends((0, ou.e)(kb.b)) {}
    let Qu = (() => {
        var bb, ub, Bb, Ob, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, ib, vb, tb, Jb, sb, Ib, Pb, qb, Eb, Fb, kb, Rb, bu, uu, hu, Bu, Ou, Gu, Uu, Lu, Yu, Su, Xu, pu, ou, Au, lu, Ku, Wu, Cu, du, nu, Du, xu, zu, gu, iu, vu, tu, Ju, eu, Nu, su, Mu, mu, Pu, Eu, fu, ku, Qu, Ru, bh, uh, hh, Bh, Oh, Gh, Uh, Lh, Yh, Sh, ah, Hh, wh, Zh, Xh, ph, oh, Ah, lh, Kh, Wh, Ch, dh, rh, jh, nh, Dh, xh, zh;
        let gh, ih, vh, th, Jh, eh, Nh, sh, Mh, mh, Ih, Ph, qh, Eh, yh, Vh, Fh, fh, kh, Th, ch, Qh, Rh, bB, uB, hB, BB, OB, GB, UB, LB, YB, SB, aB, HB, wB, ZB, XB, pB, oB, AB, lB, KB, WB, CB, dB, rB, jB, nB, DB, xB, zB, gB, iB, vB, tB, JB, eB, NB, sB, MB, mB, IB, PB, qB, EB, yB, VB, FB, fB, kB, TB, cB, QB, RB, bO, uO, hO, BO, OO, GO, UO, LO, YO, SO, aO, HO, wO, ZO, XO, pO, oO, AO, lO, KO, WO, CO, dO, rO, jO, nO, DO, xO, zO, gO, iO = cu,
          vO = [],
          tO = [],
          JO = [],
          eO = [],
          NO = [],
          sO = [],
          MO = [],
          mO = [],
          IO = [],
          PO = [],
          qO = [],
          EO = [],
          yO = [],
          VO = [],
          FO = [],
          fO = [],
          kO = [],
          TO = [],
          cO = [],
          QO = [],
          RO = [],
          bG = [],
          uG = [],
          hG = [],
          BG = [],
          OG = [],
          GG = [],
          UG = [],
          LG = [],
          YG = [],
          SG = [],
          aG = [],
          HG = [],
          wG = [],
          ZG = [],
          XG = [],
          pG = [],
          oG = [],
          AG = [],
          lG = [],
          KG = [],
          WG = [],
          CG = [],
          dG = [],
          rG = [],
          jG = [],
          nG = [],
          DG = [],
          xG = [],
          zG = [],
          gG = [],
          iG = [],
          vG = [],
          tG = [],
          JG = [],
          eG = [],
          NG = [],
          sG = [],
          MG = [],
          mG = [],
          IG = [],
          PG = [],
          qG = [],
          EG = [],
          yG = [],
          VG = [],
          FG = [],
          fG = [],
          kG = [],
          TG = [],
          cG = [],
          QG = [],
          RG = [],
          bU = [],
          uU = [],
          hU = [],
          BU = [],
          OU = [],
          GU = [],
          UU = [],
          LU = [],
          YU = [],
          SU = [],
          aU = [],
          HU = [],
          wU = [],
          ZU = [],
          XU = [],
          pU = [],
          oU = [],
          AU = [],
          lU = [],
          KU = [],
          WU = [],
          CU = [],
          dU = [],
          rU = [],
          jU = [],
          nU = [],
          DU = [],
          xU = [],
          zU = [],
          gU = [],
          iU = [],
          vU = [],
          tU = [],
          JU = [],
          eU = [],
          NU = [],
          sU = [],
          MU = [],
          mU = [],
          IU = [],
          PU = [],
          qU = [],
          EU = [],
          yU = [],
          VU = [],
          FU = [],
          fU = [],
          kU = [],
          TU = [],
          cU = [],
          QU = [],
          RU = [],
          bL = [],
          uL = [],
          hL = [],
          BL = [],
          OL = [],
          GL = [],
          UL = [],
          LL = [],
          YL = [],
          SL = [],
          aL = [],
          HL = [],
          wL = [],
          ZL = [],
          XL = [],
          pL = [],
          oL = [],
          AL = [],
          lL = [],
          KL = [],
          WL = [],
          CL = [],
          dL = [],
          rL = [],
          jL = [],
          nL = [],
          DL = [],
          xL = [],
          zL = [],
          gL = [],
          iL = [],
          vL = [],
          tL = [],
          JL = [],
          eL = [],
          NL = [],
          sL = [],
          ML = [],
          mL = [],
          IL = [],
          PL = [],
          qL = [],
          EL = [],
          yL = [],
          VL = [],
          FL = [],
          fL = [],
          kL = [],
          TL = [],
          cL = [],
          QL = [],
          RL = [],
          bY = [],
          uY = [],
          hY = [],
          BY = [],
          OY = [],
          GY = [],
          UY = [],
          LY = [],
          YY = [],
          SY = [],
          aY = [],
          HY = [],
          wY = [],
          ZY = [],
          XY = [],
          pY = [],
          oY = [],
          AY = [],
          lY = [],
          KY = [],
          WY = [],
          CY = [],
          dY = [],
          rY = [],
          jY = [],
          nY = [],
          DY = [],
          xY = [];
        return bb = class extends iO {
          get baseWeight() {
            return (0, nb.b)(this, ub, "f")
          }
          set baseWeight(bb) {
            (0, nb.f)(this, ub, bb, "f")
          }
          get baseWeightTexture() {
            return (0, nb.b)(this, Bb, "f")
          }
          set baseWeightTexture(bb) {
            (0, nb.f)(this, Bb, bb, "f")
          }
          get baseColor() {
            return (0, nb.b)(this, Ob, "f")
          }
          set baseColor(bb) {
            (0, nb.f)(this, Ob, bb, "f")
          }
          get baseColorTexture() {
            return (0, nb.b)(this, Ub, "f")
          }
          set baseColorTexture(bb) {
            (0, nb.f)(this, Ub, bb, "f")
          }
          get baseDiffuseRoughness() {
            return (0, nb.b)(this, Lb, "f")
          }
          set baseDiffuseRoughness(bb) {
            (0, nb.f)(this, Lb, bb, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, nb.b)(this, Yb, "f")
          }
          set baseDiffuseRoughnessTexture(bb) {
            (0, nb.f)(this, Yb, bb, "f")
          }
          get baseMetalness() {
            return (0, nb.b)(this, Sb, "f")
          }
          set baseMetalness(bb) {
            (0, nb.f)(this, Sb, bb, "f")
          }
          get baseMetalnessTexture() {
            return (0, nb.b)(this, ab, "f")
          }
          set baseMetalnessTexture(bb) {
            (0, nb.f)(this, ab, bb, "f")
          }
          get specularWeight() {
            return (0, nb.b)(this, Hb, "f")
          }
          set specularWeight(bb) {
            (0, nb.f)(this, Hb, bb, "f")
          }
          get specularWeightTexture() {
            return (0, nb.b)(this, wb, "f")
          }
          set specularWeightTexture(bb) {
            (0, nb.f)(this, wb, bb, "f")
          }
          get specularColor() {
            return (0, nb.b)(this, Zb, "f")
          }
          set specularColor(bb) {
            (0, nb.f)(this, Zb, bb, "f")
          }
          get specularColorTexture() {
            return (0, nb.b)(this, Xb, "f")
          }
          set specularColorTexture(bb) {
            (0, nb.f)(this, Xb, bb, "f")
          }
          get specularRoughness() {
            return (0, nb.b)(this, pb, "f")
          }
          set specularRoughness(bb) {
            (0, nb.f)(this, pb, bb, "f")
          }
          get specularRoughnessTexture() {
            return (0, nb.b)(this, ob, "f")
          }
          set specularRoughnessTexture(bb) {
            (0, nb.f)(this, ob, bb, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, nb.b)(this, Ab, "f")
          }
          set specularRoughnessAnisotropy(bb) {
            (0, nb.f)(this, Ab, bb, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, nb.b)(this, lb, "f")
          }
          set specularRoughnessAnisotropyTexture(bb) {
            (0, nb.f)(this, lb, bb, "f")
          }
          get specularIor() {
            return (0, nb.b)(this, Kb, "f")
          }
          set specularIor(bb) {
            (0, nb.f)(this, Kb, bb, "f")
          }
          get transmissionWeight() {
            return (0, nb.b)(this, Wb, "f")
          }
          set transmissionWeight(bb) {
            (0, nb.f)(this, Wb, bb, "f")
          }
          get transmissionWeightTexture() {
            return (0, nb.b)(this, Cb, "f")
          }
          set transmissionWeightTexture(bb) {
            (0, nb.f)(this, Cb, bb, "f")
          }
          get transmissionColor() {
            return (0, nb.b)(this, db, "f")
          }
          set transmissionColor(bb) {
            (0, nb.f)(this, db, bb, "f")
          }
          get transmissionColorTexture() {
            return (0, nb.b)(this, rb, "f")
          }
          set transmissionColorTexture(bb) {
            (0, nb.f)(this, rb, bb, "f")
          }
          get transmissionDepth() {
            return (0, nb.b)(this, jb, "f")
          }
          set transmissionDepth(bb) {
            (0, nb.f)(this, jb, bb, "f")
          }
          get transmissionDepthTexture() {
            return (0, nb.b)(this, ib, "f")
          }
          set transmissionDepthTexture(bb) {
            (0, nb.f)(this, ib, bb, "f")
          }
          get transmissionScatter() {
            return (0, nb.b)(this, vb, "f")
          }
          set transmissionScatter(bb) {
            (0, nb.f)(this, vb, bb, "f")
          }
          get transmissionScatterTexture() {
            return (0, nb.b)(this, tb, "f")
          }
          set transmissionScatterTexture(bb) {
            (0, nb.f)(this, tb, bb, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, nb.b)(this, Jb, "f")
          }
          set transmissionScatterAnisotropy(bb) {
            (0, nb.f)(this, Jb, bb, "f")
          }
          get transmissionDispersionScale() {
            return (0, nb.b)(this, sb, "f")
          }
          set transmissionDispersionScale(bb) {
            (0, nb.f)(this, sb, bb, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, nb.b)(this, Ib, "f")
          }
          set transmissionDispersionScaleTexture(bb) {
            (0, nb.f)(this, Ib, bb, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, nb.b)(this, Pb, "f")
          }
          set transmissionDispersionAbbeNumber(bb) {
            (0, nb.f)(this, Pb, bb, "f")
          }
          get subsurfaceWeight() {
            return (0, nb.b)(this, qb, "f")
          }
          set subsurfaceWeight(bb) {
            (0, nb.f)(this, qb, bb, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, nb.b)(this, Eb, "f")
          }
          set subsurfaceWeightTexture(bb) {
            (0, nb.f)(this, Eb, bb, "f")
          }
          get subsurfaceColor() {
            return (0, nb.b)(this, Fb, "f")
          }
          set subsurfaceColor(bb) {
            (0, nb.f)(this, Fb, bb, "f")
          }
          get subsurfaceColorTexture() {
            return (0, nb.b)(this, kb, "f")
          }
          set subsurfaceColorTexture(bb) {
            (0, nb.f)(this, kb, bb, "f")
          }
          get subsurfaceRadius() {
            return (0, nb.b)(this, Rb, "f")
          }
          set subsurfaceRadius(bb) {
            (0, nb.f)(this, Rb, bb, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, nb.b)(this, bu, "f")
          }
          set subsurfaceRadiusScale(bb) {
            (0, nb.f)(this, bu, bb, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, nb.b)(this, uu, "f")
          }
          set subsurfaceRadiusScaleTexture(bb) {
            (0, nb.f)(this, uu, bb, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, nb.b)(this, hu, "f")
          }
          set subsurfaceScatterAnisotropy(bb) {
            (0, nb.f)(this, hu, bb, "f")
          }
          get coatWeight() {
            return (0, nb.b)(this, Bu, "f")
          }
          set coatWeight(bb) {
            (0, nb.f)(this, Bu, bb, "f")
          }
          get coatWeightTexture() {
            return (0, nb.b)(this, Ou, "f")
          }
          set coatWeightTexture(bb) {
            (0, nb.f)(this, Ou, bb, "f")
          }
          get coatColor() {
            return (0, nb.b)(this, Gu, "f")
          }
          set coatColor(bb) {
            (0, nb.f)(this, Gu, bb, "f")
          }
          get coatColorTexture() {
            return (0, nb.b)(this, Uu, "f")
          }
          set coatColorTexture(bb) {
            (0, nb.f)(this, Uu, bb, "f")
          }
          get coatRoughness() {
            return (0, nb.b)(this, Lu, "f")
          }
          set coatRoughness(bb) {
            (0, nb.f)(this, Lu, bb, "f")
          }
          get coatRoughnessTexture() {
            return (0, nb.b)(this, Yu, "f")
          }
          set coatRoughnessTexture(bb) {
            (0, nb.f)(this, Yu, bb, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, nb.b)(this, Su, "f")
          }
          set coatRoughnessAnisotropy(bb) {
            (0, nb.f)(this, Su, bb, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, nb.b)(this, Xu, "f")
          }
          set coatRoughnessAnisotropyTexture(bb) {
            (0, nb.f)(this, Xu, bb, "f")
          }
          get coatIor() {
            return (0, nb.b)(this, pu, "f")
          }
          set coatIor(bb) {
            (0, nb.f)(this, pu, bb, "f")
          }
          get coatDarkening() {
            return (0, nb.b)(this, ou, "f")
          }
          set coatDarkening(bb) {
            (0, nb.f)(this, ou, bb, "f")
          }
          get coatDarkeningTexture() {
            return (0, nb.b)(this, Au, "f")
          }
          set coatDarkeningTexture(bb) {
            (0, nb.f)(this, Au, bb, "f")
          }
          get fuzzWeight() {
            return (0, nb.b)(this, lu, "f")
          }
          set fuzzWeight(bb) {
            (0, nb.f)(this, lu, bb, "f")
          }
          get fuzzWeightTexture() {
            return (0, nb.b)(this, Ku, "f")
          }
          set fuzzWeightTexture(bb) {
            (0, nb.f)(this, Ku, bb, "f")
          }
          get fuzzColor() {
            return (0, nb.b)(this, Wu, "f")
          }
          set fuzzColor(bb) {
            (0, nb.f)(this, Wu, bb, "f")
          }
          get fuzzColorTexture() {
            return (0, nb.b)(this, Cu, "f")
          }
          set fuzzColorTexture(bb) {
            (0, nb.f)(this, Cu, bb, "f")
          }
          get fuzzRoughness() {
            return (0, nb.b)(this, du, "f")
          }
          set fuzzRoughness(bb) {
            (0, nb.f)(this, du, bb, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, nb.b)(this, nu, "f")
          }
          set fuzzRoughnessTexture(bb) {
            (0, nb.f)(this, nu, bb, "f")
          }
          get geometryThinWalled() {
            return (0, nb.b)(this, Du, "f")
          }
          set geometryThinWalled(bb) {
            (0, nb.f)(this, Du, bb, "f")
          }
          get geometryNormalTexture() {
            return (0, nb.b)(this, xu, "f")
          }
          set geometryNormalTexture(bb) {
            (0, nb.f)(this, xu, bb, "f")
          }
          get geometryTangent() {
            return (0, nb.b)(this, zu, "f")
          }
          set geometryTangent(bb) {
            (0, nb.f)(this, zu, bb, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(bb) {
            this.geometryTangent = new Mb.m(Math.cos(bb), Math.sin(bb))
          }
          get geometryTangentTexture() {
            return (0, nb.b)(this, gu, "f")
          }
          set geometryTangentTexture(bb) {
            (0, nb.f)(this, gu, bb, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, nb.b)(this, iu, "f")
          }
          set geometryCoatNormalTexture(bb) {
            (0, nb.f)(this, iu, bb, "f")
          }
          get geometryCoatTangent() {
            return (0, nb.b)(this, vu, "f")
          }
          set geometryCoatTangent(bb) {
            (0, nb.f)(this, vu, bb, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(bb) {
            this.geometryCoatTangent = new Mb.m(Math.cos(bb), Math.sin(bb))
          }
          get geometryCoatTangentTexture() {
            return (0, nb.b)(this, tu, "f")
          }
          set geometryCoatTangentTexture(bb) {
            (0, nb.f)(this, tu, bb, "f")
          }
          get geometryOpacity() {
            return (0, nb.b)(this, Ju, "f")
          }
          set geometryOpacity(bb) {
            (0, nb.f)(this, Ju, bb, "f")
          }
          get geometryOpacityTexture() {
            return (0, nb.b)(this, eu, "f")
          }
          set geometryOpacityTexture(bb) {
            (0, nb.f)(this, eu, bb, "f")
          }
          get geometryThickness() {
            return (0, nb.b)(this, Nu, "f")
          }
          set geometryThickness(bb) {
            (0, nb.f)(this, Nu, bb, "f")
          }
          get geometryThicknessTexture() {
            return (0, nb.b)(this, su, "f")
          }
          set geometryThicknessTexture(bb) {
            (0, nb.f)(this, su, bb, "f")
          }
          get emissionLuminance() {
            return (0, nb.b)(this, Mu, "f")
          }
          set emissionLuminance(bb) {
            (0, nb.f)(this, Mu, bb, "f")
          }
          get emissionColor() {
            return (0, nb.b)(this, mu, "f")
          }
          set emissionColor(bb) {
            (0, nb.f)(this, mu, bb, "f")
          }
          get emissionColorTexture() {
            return (0, nb.b)(this, Pu, "f")
          }
          set emissionColorTexture(bb) {
            (0, nb.f)(this, Pu, bb, "f")
          }
          get thinFilmWeight() {
            return (0, nb.b)(this, Eu, "f")
          }
          set thinFilmWeight(bb) {
            (0, nb.f)(this, Eu, bb, "f")
          }
          get thinFilmWeightTexture() {
            return (0, nb.b)(this, fu, "f")
          }
          set thinFilmWeightTexture(bb) {
            (0, nb.f)(this, fu, bb, "f")
          }
          get thinFilmThickness() {
            return (0, nb.b)(this, ku, "f")
          }
          set thinFilmThickness(bb) {
            (0, nb.f)(this, ku, bb, "f")
          }
          get thinFilmThicknessMin() {
            return (0, nb.b)(this, Qu, "f")
          }
          set thinFilmThicknessMin(bb) {
            (0, nb.f)(this, Qu, bb, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, nb.b)(this, Ru, "f")
          }
          set thinFilmThicknessTexture(bb) {
            (0, nb.f)(this, Ru, bb, "f")
          }
          get thinFilmIor() {
            return (0, nb.b)(this, bh, "f")
          }
          set thinFilmIor(bb) {
            (0, nb.f)(this, bh, bb, "f")
          }
          get ambientOcclusionTexture() {
            return (0, nb.b)(this, uh, "f")
          }
          set ambientOcclusionTexture(bb) {
            (0, nb.f)(this, uh, bb, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(bb) {
            this._sssQuality !== bb && (this._sssQuality = bb, this.yub(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(bb) {
            this._sssIrradianceTexture !== bb && (this._sssIrradianceTexture = bb, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(bb) {
            this._sssDepthTexture !== bb && (this._sssDepthTexture = bb, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, nb.b)(this, hh, "f")
          }
          set directIntensity(bb) {
            (0, nb.f)(this, hh, bb, "f")
          }
          get environmentIntensity() {
            return (0, nb.b)(this, Bh, "f")
          }
          set environmentIntensity(bb) {
            (0, nb.f)(this, Bh, bb, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, nb.b)(this, Oh, "f")
          }
          set useSpecularWeightFromTextureAlpha(bb) {
            (0, nb.f)(this, Oh, bb, "f")
          }
          get forceAlphaTest() {
            return (0, nb.b)(this, Gh, "f")
          }
          set forceAlphaTest(bb) {
            (0, nb.f)(this, Gh, bb, "f")
          }
          get alphaCutOff() {
            return (0, nb.b)(this, Uh, "f")
          }
          set alphaCutOff(bb) {
            (0, nb.f)(this, Uh, bb, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, nb.b)(this, Lh, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(bb) {
            (0, nb.f)(this, Lh, bb, "f")
          }
          get useAmbientInGrayScale() {
            return (0, nb.b)(this, Yh, "f")
          }
          set useAmbientInGrayScale(bb) {
            (0, nb.f)(this, Yh, bb, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Vb.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Gb.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(bb) {
            bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Gb.e.LIGHTFALLOFF_PHYSICAL : Gb.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Gb.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(bb) {
            bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Gb.e.LIGHTFALLOFF_GLTF : Gb.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, nb.b)(this, Sh, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, nb.f)(this, Sh, bb, "f")
          }
          get useParallax() {
            return (0, nb.b)(this, ah, "f")
          }
          set useParallax(bb) {
            (0, nb.f)(this, ah, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, nb.b)(this, Hh, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, nb.f)(this, Hh, bb, "f")
          }
          get parallaxScaleBias() {
            return (0, nb.b)(this, wh, "f")
          }
          set parallaxScaleBias(bb) {
            (0, nb.f)(this, wh, bb, "f")
          }
          get disableLighting() {
            return (0, nb.b)(this, Zh, "f")
          }
          set disableLighting(bb) {
            (0, nb.f)(this, Zh, bb, "f")
          }
          get forceIrradianceInFragment() {
            return (0, nb.b)(this, Xh, "f")
          }
          set forceIrradianceInFragment(bb) {
            (0, nb.f)(this, Xh, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, nb.b)(this, ph, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, nb.f)(this, ph, bb, "f")
          }
          get invertNormalMapX() {
            return (0, nb.b)(this, oh, "f")
          }
          set invertNormalMapX(bb) {
            (0, nb.f)(this, oh, bb, "f")
          }
          get invertNormalMapY() {
            return (0, nb.b)(this, Ah, "f")
          }
          set invertNormalMapY(bb) {
            (0, nb.f)(this, Ah, bb, "f")
          }
          get twoSidedLighting() {
            return (0, nb.b)(this, lh, "f")
          }
          set twoSidedLighting(bb) {
            (0, nb.f)(this, lh, bb, "f")
          }
          get useAlphaFresnel() {
            return (0, nb.b)(this, Kh, "f")
          }
          set useAlphaFresnel(bb) {
            (0, nb.f)(this, Kh, bb, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, nb.b)(this, Wh, "f")
          }
          set useLinearAlphaFresnel(bb) {
            (0, nb.f)(this, Wh, bb, "f")
          }
          get environmentBRDFTexture() {
            return (0, nb.b)(this, Ch, "f")
          }
          set environmentBRDFTexture(bb) {
            (0, nb.f)(this, Ch, bb, "f")
          }
          get forceNormalForward() {
            return (0, nb.b)(this, dh, "f")
          }
          set forceNormalForward(bb) {
            (0, nb.f)(this, dh, bb, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, nb.b)(this, rh, "f")
          }
          set enableSpecularAntiAliasing(bb) {
            (0, nb.f)(this, rh, bb, "f")
          }
          get useHorizonOcclusion() {
            return (0, nb.b)(this, jh, "f")
          }
          set useHorizonOcclusion(bb) {
            (0, nb.f)(this, jh, bb, "f")
          }
          get useRadianceOcclusion() {
            return (0, nb.b)(this, nh, "f")
          }
          set useRadianceOcclusion(bb) {
            (0, nb.f)(this, nh, bb, "f")
          }
          get unlit() {
            return (0, nb.b)(this, Dh, "f")
          }
          set unlit(bb) {
            (0, nb.f)(this, Dh, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, nb.b)(this, xh, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, nb.f)(this, xh, bb, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(bb) {
            this._backgroundRefractionTexture = bb, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(bb) {
            this._refractionHighQualityBlur !== bb && (this._refractionHighQualityBlur = bb, this.yub(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(bb) {
            this._realTimeFiltering = bb, this.yub(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(bb) {
            this._realTimeFilteringQuality = bb, this.yub(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(bb) {
            this._fuzzSampleNumber = bb, this.yub(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, nb.b)(this, zh, "f")
          }
          set debugMode(bb) {
            (0, nb.f)(this, zh, bb, "f")
          }
          constructor(hb, Db) {
            super(hb, Db, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), ub.set(this, ((0, nb.k)(this, vO), (0, nb.k)(this, tO, void 0))), this._baseWeight = ((0, nb.k)(this, JO), new Vu("base_weight", 1, "vBaseWeight", 1)), Bb.set(this, (0, nb.k)(this, eO, void 0)), this._baseWeightTexture = ((0, nb.k)(this, NO), new Fu("base_weight", "baseWeight", "BASE_WEIGHT")), Ob.set(this, (0, nb.k)(this, sO, void 0)), this._baseColor = ((0, nb.k)(this, MO), new Vu("base_color", Vb.b.White(), "vBaseColor", 4)), Ub.set(this, (0, nb.k)(this, mO, void 0)), this._baseColorTexture = ((0, nb.k)(this, IO), new Fu("base_color", "baseColor", "BASE_COLOR")), Lb.set(this, (0, nb.k)(this, PO, void 0)), this._baseDiffuseRoughness = ((0, nb.k)(this, qO), new Vu("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Yb.set(this, (0, nb.k)(this, EO, void 0)), this._baseDiffuseRoughnessTexture = ((0, nb.k)(this, yO), new Fu("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Sb.set(this, (0, nb.k)(this, VO, void 0)), this._baseMetalness = ((0, nb.k)(this, FO), new Vu("base_metalness", 0, "vReflectanceInfo", 4, 0)), ab.set(this, (0, nb.k)(this, fO, void 0)), this._baseMetalnessTexture = ((0, nb.k)(this, kO), new Fu("base_metalness", "baseMetalness", "BASE_METALNESS")), Hb.set(this, (0, nb.k)(this, TO, void 0)), this._specularWeight = ((0, nb.k)(this, cO), new Vu("specular_weight", 1, "vReflectanceInfo", 4, 3)), wb.set(this, (0, nb.k)(this, QO, void 0)), this._specularWeightTexture = ((0, nb.k)(this, RO), new Fu("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Zb.set(this, (0, nb.k)(this, bG, void 0)), this._specularColor = ((0, nb.k)(this, uG), new Vu("specular_color", Vb.b.White(), "vSpecularColor", 4)), Xb.set(this, (0, nb.k)(this, hG, void 0)), this._specularColorTexture = ((0, nb.k)(this, BG), new Fu("specular_color", "specularColor", "SPECULAR_COLOR")), pb.set(this, (0, nb.k)(this, OG, void 0)), this._specularRoughness = ((0, nb.k)(this, GG), new Vu("specular_roughness", .3, "vReflectanceInfo", 4, 1)), ob.set(this, (0, nb.k)(this, UG, void 0)), this._specularRoughnessTexture = ((0, nb.k)(this, LG), new Fu("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Ab.set(this, (0, nb.k)(this, YG, void 0)), this._specularRoughnessAnisotropy = ((0, nb.k)(this, SG), new Vu("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), lb.set(this, (0, nb.k)(this, aG, void 0)), this._specularRoughnessAnisotropyTexture = ((0, nb.k)(this, HG), new Fu("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Kb.set(this, (0, nb.k)(this, wG, void 0)), this._specularIor = ((0, nb.k)(this, ZG), new Vu("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Wb.set(this, (0, nb.k)(this, XG, void 0)), this._transmissionWeight = ((0, nb.k)(this, pG), new Vu("transmission_weight", 0, "vTransmissionWeight", 1)), Cb.set(this, (0, nb.k)(this, oG, void 0)), this._transmissionWeightTexture = ((0, nb.k)(this, AG), new Fu("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), db.set(this, (0, nb.k)(this, lG, void 0)), this._transmissionColor = ((0, nb.k)(this, KG), new Vu("transmission_color", Vb.b.White(), "vTransmissionColor", 3, 0)), rb.set(this, (0, nb.k)(this, WG, void 0)), this._transmissionColorTexture = ((0, nb.k)(this, CG), new Fu("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), jb.set(this, (0, nb.k)(this, dG, void 0)), this._transmissionDepth = ((0, nb.k)(this, rG), new Vu("transmission_depth", 0, "vTransmissionDepth", 1, 0)), ib.set(this, (0, nb.k)(this, jG, void 0)), this._transmissionDepthTexture = ((0, nb.k)(this, nG), new Fu("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), vb.set(this, (0, nb.k)(this, DG, void 0)), this._transmissionScatter = ((0, nb.k)(this, xG), new Vu("transmission_scatter", Vb.b.Black(), "vTransmissionScatter", 3, 0)), tb.set(this, (0, nb.k)(this, zG, void 0)), this._transmissionScatterTexture = ((0, nb.k)(this, gG), new Fu("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Jb.set(this, (0, nb.k)(this, iG, void 0)), this._transmissionScatterAnisotropy = ((0, nb.k)(this, vG), new Vu("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), sb.set(this, (0, nb.k)(this, tG, void 0)), this._transmissionDispersionScale = ((0, nb.k)(this, JG), new Vu("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Ib.set(this, (0, nb.k)(this, eG, void 0)), this._transmissionDispersionScaleTexture = ((0, nb.k)(this, NG), new Fu("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Pb.set(this, (0, nb.k)(this, sG, void 0)), this._transmissionDispersionAbbeNumber = ((0, nb.k)(this, MG), new Vu("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), qb.set(this, (0, nb.k)(this, mG, void 0)), this._subsurfaceWeight = ((0, nb.k)(this, IG), new Vu("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Eb.set(this, (0, nb.k)(this, PG, void 0)), this._subsurfaceWeightTexture = ((0, nb.k)(this, qG), new Fu("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Fb.set(this, (0, nb.k)(this, EG, void 0)), this._subsurfaceColor = ((0, nb.k)(this, yG), new Vu("subsurface_color", new Vb.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), kb.set(this, (0, nb.k)(this, VG, void 0)), this._subsurfaceColorTexture = ((0, nb.k)(this, FG), new Fu("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Rb.set(this, (0, nb.k)(this, fG, void 0)), this._subsurfaceRadius = ((0, nb.k)(this, kG), new Vu("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), bu.set(this, (0, nb.k)(this, TG, void 0)), this._subsurfaceRadiusScale = ((0, nb.k)(this, cG), new Vu("subsurface_radius_scale", new Vb.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), uu.set(this, (0, nb.k)(this, QG, void 0)), this._subsurfaceRadiusScaleTexture = ((0, nb.k)(this, RG), new Fu("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), hu.set(this, (0, nb.k)(this, bU, void 0)), this._subsurfaceScatterAnisotropy = ((0, nb.k)(this, uU), new Vu("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Bu.set(this, (0, nb.k)(this, hU, void 0)), this._coatWeight = ((0, nb.k)(this, BU), new Vu("coat_weight", 0, "vCoatWeight", 1, 0)), Ou.set(this, (0, nb.k)(this, OU, void 0)), this._coatWeightTexture = ((0, nb.k)(this, GU), new Fu("coat_weight", "coatWeight", "COAT_WEIGHT")), Gu.set(this, (0, nb.k)(this, UU, void 0)), this._coatColor = ((0, nb.k)(this, LU), new Vu("coat_color", Vb.b.White(), "vCoatColor", 3, 0)), Uu.set(this, (0, nb.k)(this, YU, void 0)), this._coatColorTexture = ((0, nb.k)(this, SU), new Fu("coat_color", "coatColor", "COAT_COLOR")), Lu.set(this, (0, nb.k)(this, aU, void 0)), this._coatRoughness = ((0, nb.k)(this, HU), new Vu("coat_roughness", 0, "vCoatRoughness", 1, 0)), Yu.set(this, (0, nb.k)(this, wU, void 0)), this._coatRoughnessTexture = ((0, nb.k)(this, ZU), new Fu("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Su.set(this, (0, nb.k)(this, XU, void 0)), this._coatRoughnessAnisotropy = ((0, nb.k)(this, pU), new Vu("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Xu.set(this, (0, nb.k)(this, oU, void 0)), this._coatRoughnessAnisotropyTexture = ((0, nb.k)(this, AU), new Fu("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), pu.set(this, (0, nb.k)(this, lU, void 0)), this._coatIor = ((0, nb.k)(this, KU), new Vu("coat_ior", 1.5, "vCoatIor", 1, 0)), ou.set(this, (0, nb.k)(this, WU, void 0)), this._coatDarkening = ((0, nb.k)(this, CU), new Vu("coat_darkening", 1, "vCoatDarkening", 1, 0)), Au.set(this, (0, nb.k)(this, dU, void 0)), this._coatDarkeningTexture = ((0, nb.k)(this, rU), new Fu("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, lu.set(this, (0, nb.k)(this, jU, void 0)), this._fuzzWeight = ((0, nb.k)(this, nU), new Vu("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Ku.set(this, (0, nb.k)(this, DU, void 0)), this._fuzzWeightTexture = ((0, nb.k)(this, xU), new Fu("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Wu.set(this, (0, nb.k)(this, zU, void 0)), this._fuzzColor = ((0, nb.k)(this, gU), new Vu("fuzz_color", Vb.b.White(), "vFuzzColor", 3, 0)), Cu.set(this, (0, nb.k)(this, iU, void 0)), this._fuzzColorTexture = ((0, nb.k)(this, vU), new Fu("fuzz_color", "fuzzColor", "FUZZ_COLOR")), du.set(this, (0, nb.k)(this, tU, void 0)), this._fuzzRoughness = ((0, nb.k)(this, JU), new Vu("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), nu.set(this, (0, nb.k)(this, eU, void 0)), this._fuzzRoughnessTexture = ((0, nb.k)(this, NU), new Fu("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Du.set(this, (0, nb.k)(this, sU, void 0)), this._geometryThinWalled = ((0, nb.k)(this, MU), new Vu("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), xu.set(this, (0, nb.k)(this, mU, void 0)), this._geometryNormalTexture = ((0, nb.k)(this, IU), new Fu("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), zu.set(this, (0, nb.k)(this, PU, void 0)), this._geometryTangent = ((0, nb.k)(this, qU), new Vu("geometry_tangent", new Mb.m(1, 0), "vSpecularAnisotropy", 3, 0)), gu.set(this, (0, nb.k)(this, EU, void 0)), this._geometryTangentTexture = ((0, nb.k)(this, yU), new Fu("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), iu.set(this, (0, nb.k)(this, VU, void 0)), this._geometryCoatNormalTexture = ((0, nb.k)(this, FU), new Fu("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), vu.set(this, (0, nb.k)(this, fU, void 0)), this._geometryCoatTangent = ((0, nb.k)(this, kU), new Vu("geometry_coat_tangent", new Mb.m(1, 0), "vGeometryCoatTangent", 2, 0)), tu.set(this, (0, nb.k)(this, TU, void 0)), this._geometryCoatTangentTexture = ((0, nb.k)(this, cU), new Fu("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Ju.set(this, (0, nb.k)(this, QU, void 0)), this._geometryOpacity = ((0, nb.k)(this, RU), new Vu("geometry_opacity", 1, "vBaseColor", 4, 3)), eu.set(this, (0, nb.k)(this, bL, void 0)), this._geometryOpacityTexture = ((0, nb.k)(this, uL), new Fu("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Nu.set(this, (0, nb.k)(this, hL, void 0)), this._geometryThickness = ((0, nb.k)(this, BL), new Vu("geometry_thickness", 0, "vGeometryThickness", 1, 0)), su.set(this, (0, nb.k)(this, OL, void 0)), this._geometryThicknessTexture = ((0, nb.k)(this, GL), new Fu("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Mu.set(this, (0, nb.k)(this, UL, void 0)), this._emissionLuminance = ((0, nb.k)(this, LL), new Vu("emission_luminance", 1, "vLightingIntensity", 4, 1)), mu.set(this, (0, nb.k)(this, YL, void 0)), this._emissionColor = ((0, nb.k)(this, SL), new Vu("emission_color", Vb.b.Black(), "vEmissionColor", 3)), Pu.set(this, (0, nb.k)(this, aL, void 0)), this._emissionColorTexture = ((0, nb.k)(this, HL), new Fu("emission_color", "emissionColor", "EMISSION_COLOR")), Eu.set(this, (0, nb.k)(this, wL, void 0)), this._thinFilmWeight = ((0, nb.k)(this, ZL), new Vu("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), fu.set(this, (0, nb.k)(this, XL, void 0)), this._thinFilmWeightTexture = ((0, nb.k)(this, pL), new Fu("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), ku.set(this, (0, nb.k)(this, oL, void 0)), this._thinFilmThickness = ((0, nb.k)(this, AL), new Vu("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Qu.set(this, (0, nb.k)(this, lL, void 0)), this._thinFilmThicknessMin = ((0, nb.k)(this, KL), new Vu("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Ru.set(this, (0, nb.k)(this, WL, void 0)), this._thinFilmThicknessTexture = ((0, nb.k)(this, CL), new Fu("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), bh.set(this, (0, nb.k)(this, dL, void 0)), this._thinFilmIor = ((0, nb.k)(this, rL), new Vu("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), uh.set(this, (0, nb.k)(this, jL, void 0)), this._ambientOcclusionTexture = ((0, nb.k)(this, nL), new Fu("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = bb.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, hh.set(this, (0, nb.k)(this, DL, 1)), Bh.set(this, ((0, nb.k)(this, xL), (0, nb.k)(this, zL, 1))), Oh.set(this, ((0, nb.k)(this, gL), (0, nb.k)(this, iL, !1))), Gh.set(this, ((0, nb.k)(this, vL), (0, nb.k)(this, tL, !1))), Uh.set(this, ((0, nb.k)(this, JL), (0, nb.k)(this, eL, .4))), Lh.set(this, ((0, nb.k)(this, NL), (0, nb.k)(this, sL, !1))), Yh.set(this, ((0, nb.k)(this, ML), (0, nb.k)(this, mL, !1))), Sh.set(this, ((0, nb.k)(this, IL), (0, nb.k)(this, PL, !1))), ah.set(this, ((0, nb.k)(this, qL), (0, nb.k)(this, EL, !1))), Hh.set(this, ((0, nb.k)(this, yL), (0, nb.k)(this, VL, !1))), wh.set(this, ((0, nb.k)(this, FL), (0, nb.k)(this, fL, .05))), Zh.set(this, ((0, nb.k)(this, kL), (0, nb.k)(this, TL, !1))), Xh.set(this, ((0, nb.k)(this, cL), (0, nb.k)(this, QL, !1))), ph.set(this, ((0, nb.k)(this, RL), (0, nb.k)(this, bY, 4))), oh.set(this, ((0, nb.k)(this, uY), (0, nb.k)(this, hY, !1))), Ah.set(this, ((0, nb.k)(this, BY), (0, nb.k)(this, OY, !1))), lh.set(this, ((0, nb.k)(this, GY), (0, nb.k)(this, UY, !1))), Kh.set(this, ((0, nb.k)(this, LY), (0, nb.k)(this, YY, !1))), Wh.set(this, ((0, nb.k)(this, SY), (0, nb.k)(this, aY, !1))), Ch.set(this, ((0, nb.k)(this, HY), (0, nb.k)(this, wY, null))), dh.set(this, ((0, nb.k)(this, ZY), (0, nb.k)(this, XY, !1))), rh.set(this, ((0, nb.k)(this, pY), (0, nb.k)(this, oY, !1))), jh.set(this, ((0, nb.k)(this, AY), (0, nb.k)(this, lY, !0))), nh.set(this, ((0, nb.k)(this, KY), (0, nb.k)(this, WY, !0))), Dh.set(this, ((0, nb.k)(this, CY), (0, nb.k)(this, dY, !1))), xh.set(this, ((0, nb.k)(this, rY), (0, nb.k)(this, jY, !1))), this._lightingInfos = ((0, nb.k)(this, nY), new Mb.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Gb.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zb.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, zh.set(this, (0, nb.k)(this, DY, 0)), this.debugLimit = ((0, nb.k)(this, xY), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Gb.e.MATERIAL_OPAQUE, this.ZN() && !this.ZN()?.UX().isWebGPU && this.ZN().UX().NX < 2 && xb.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), bb._noiseTextures[this.ZN().uniqueId] || (bb._noiseTextures[this.ZN().uniqueId] = new gb.f(ju.k.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.ZN(), !1, !0, 1), this.ZN().XN.addOnce((() => {
              bb._noiseTextures[this.ZN().uniqueId]?.dispose(), delete bb._noiseTextures[this.ZN().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Tb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Tb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Nb(this.ZN()), this._environmentFuzzBRDFTexture = eb(this.ZN()), this.prePassConfiguration = new yb.d, this._propertyList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const ub = this[bb];
              ub instanceof Vu && (this._propertyList[bb] = ub)
            }
            Object.keys(this._propertyList).forEach((bb => {
              const ub = this._propertyList[bb];
              let hb = this._uniformsList[ub.targetUniformName];
              hb ? hb.numComponents !== ub.targetUniformComponentNum ? xb.b.Error(`Uniform ${ub.targetUniformName} already exists of size ${hb.numComponents}, but trying to set it to ${ub.targetUniformComponentNum}.`) : hb.requiredDefine !== ub.requiredDefine && (hb.requiredDefine = void 0) : (hb = new yu(ub.targetUniformName, ub.targetUniformComponentNum), hb.requiredDefine = ub.requiredDefine, this._uniformsList[ub.targetUniformName] = hb), "" === hb.firstLinkedKey && (hb.firstLinkedKey = ub.name), hb.linkedProperties[ub.name] = ub
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const ub = this[bb];
              ub instanceof Fu && (this._samplersList[bb] = ub)
            }
            for (const bb in this._samplersList) {
              const ub = this._samplersList[bb].textureDefine;
              this._samplerDefines[ub] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[ub + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[ub + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Tb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Tb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(bb) {
            this._transparencyMode !== bb && (this._transparencyMode = bb, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Gb.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(bb) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(bb)
          }
          clone(ub) {
            let hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ob = ru.c.Clone((() => new bb(ub, this.ZN())), this, {
              cloneTexturesOnlyOnce: hb
            });
            return Ob.id = ub, Ob.name = ub, this.stencil.copyTo(Ob.stencil), this._clonePlugins(Ob, Bb), Ob
          }
          serialize() {
            const bb = super.serialize();
            return bb.customType = "BABYLON.OpenPBRMaterial", bb
          }
          static Parse(ub, hb, Bb) {
            const Ob = ru.c.Parse((() => new bb(ub.name, hb)), ub, hb, Bb);
            return ub.stencil && Ob.stencil.parse(ub.stencil, hb, Bb), Gb.e._ParsePlugins(ub, Ob, hb, Bb), Ob
          }
          forceCompilation(bb, ub, hb) {
            const Bb = {
              clipPlane: !1,
              useInstances: !1,
              ...hb
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const hb = new Tu({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Ob = this._prepareEffect(bb, bb, hb, void 0, void 0, Bb.useInstances, Bb.clipPlane);
              this._onEffectCreatedObservable && (qu.effect = Ob, qu.subMesh = null, this._onEffectCreatedObservable.notifyObservers(qu)), Ob.isReady() ? ub && ub(this) : Ob.onCompileObservable.add((() => {
                ub && ub(this)
              }))
            })()
          }
          isReadyForSubMesh(ub, hb, Bb) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ob = hb._drawWrapper;
            if (Ob.effect && this.isFrozen && Ob._wasPreviouslyReady && Ob._wasPreviouslyUsingInstances === Bb) return !0;
            hb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), hb.materialDefines = new Tu({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Gb = hb.materialDefines;
            if (this._isReadyForSubMesh(hb)) return !0;
            const Ub = this.ZN(),
              Lb = Ub.UX();
            if (Gb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Ub.texturesEnabled)) {
              for (const bb in this._samplersList) {
                const ub = this._samplersList[bb];
                if (ub.value && !ub.value.isReadyOrNotBlocking()) return !1
              }
              const ub = this._getRadianceTexture();
              if (ub && Tb.e.ReflectionTextureEnabled) {
                if (!ub.isReadyOrNotBlocking()) return !1;
                if (ub.irradianceTexture) {
                  if (!ub.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!ub.sphericalPolynomial && ub.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Tb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Tb.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Tb.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (bb._noiseTextures[Ub.uniqueId] && !bb._noiseTextures[Ub.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Gb, this._eventInfo.subMesh = hb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Gb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Gb.AREALIGHTUSED)
              for (let bb = 0; bb < ub.lightSources.length; bb++)
                if (!ub.lightSources[bb]._isReady()) return !1;
            if (Lb.getCaps().standardDerivatives || ub.isVerticesDataPresent(mb.i.NormalKind) || (ub.createNormals(!0), xb.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + ub.name)), !(0, Qb.d)(Ub, ub, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Yb = hb.effect,
              Sb = Gb._areLightsDisposed,
              ab = this._prepareEffect(ub, hb.getRenderingMesh(), Gb, this.onCompiled, this.onError, Bb, null);
            let Hb = !1;
            if (ab)
              if (this._onEffectCreatedObservable && (qu.effect = ab, qu.subMesh = hb, this._onEffectCreatedObservable.notifyObservers(qu)), this.allowShaderHotSwapping && Yb && !ab.isReady()) {
                if (Gb.markAsUnprocessed(), Hb = this.isFrozen, Sb) return Gb._areLightsDisposed = !0, !1
              } else Ub.resetCachedMaterial(), hb.setEffect(ab, Gb, this._materialContext);
            return !(!hb.effect || !hb.effect.isReady()) && (Gb._renderId = Ub.getRenderId(), Ob._wasPreviouslyReady = !Hb, Ob._wasPreviouslyUsingInstances = !!Bb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vDebugMode", 2), bb.addUniform("renderTargetSize", 2), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), bb.addUniform("backgroundRefractionMatrix", 16), bb.addUniform("vBackgroundRefractionInfos", 3), (0, Qb.Y)(bb, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((ub => {
              bb.addUniform(ub.name, ub.numComponents)
            })), Object.values(this._samplersList).forEach((ub => {
              bb.addUniform(ub.samplerInfoName, 2), bb.addUniform(ub.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(bb, ub, hb, Bb) {
            if (0 === this.geometryThickness) bb.updateFloat("vGeometryThickness", 0);
            else {
              Bb.getRenderingMesh().getWorldMatrix().decompose(Mb.i.YX[0]);
              const ub = Math.max(Math.abs(Mb.i.YX[0].x), Math.abs(Mb.i.YX[0].y), Math.abs(Mb.i.YX[0].z));
              bb.updateFloat("vGeometryThickness", this.geometryThickness * ub)
            }
          }
          bindForSubMesh(ub, hb, Bb) {
            const Ob = this.ZN(),
              Gb = Bb.materialDefines;
            if (!Gb) return;
            const Ub = Bb.effect;
            if (!Ub) return;
            this._activeEffect = Ub, hb.getMeshUniformBuffer().bindToEffect(Ub, "Mesh"), hb.transferToEffect(ub);
            const Lb = Ob.UX();
            this._uniformBuffer.bindToEffect(Ub, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ob, hb, ub, this.isFrozen), Zu.d.Bind(Lb.currentRenderPassId, this._activeEffect, hb, ub, this);
            const Yb = Ob.activeCamera;
            Yb ? this._uniformBuffer.updateFloat4("cameraInfo", Yb.minZ, Yb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Sb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Sb[0], Sb[1], Sb[2], Sb[3]), this._eventInfo.subMesh = Bb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Gb.OBJECTSPACE_NORMALMAP && (ub.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const ab = this._mustRebind(Ob, Ub, Bb, hb.visibility),
              Hb = Lb._features.needToAlwaysBindUniformBuffers;
            (0, Qb.e)(hb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Hu.d)(this._activeEffect, this._vertexPullingMetadata);
            const wb = this._uniformBuffer;
            if (ab) {
              this.bindViewProjection(Ub);
              const ub = this._getRadianceTexture();
              if (!wb.useUbo || !this.isFrozen || !wb.isSync || Bb._drawWrapper._forceRebindOnNextCall) {
                if (Ob.texturesEnabled) {
                  for (const bb in this._samplersList) {
                    const ub = this._samplersList[bb];
                    ub.value && (wb.updateFloat2(ub.samplerInfoName, ub.value.coordinatesIndex, ub.value.level), (0, Qb.u)(ub.value, wb, ub.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Ob._mirroredCameraPosition ? wb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : wb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Qb.h)(Ob, Gb, wb, Vb.b.White(), ub, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && wb.updateFloat("pointSize", this.pointSize);
                const bb = this._uniformsArray;
                for (let ub = 0, hb = bb.length; ub < hb; ub++) {
                  const hb = bb[ub];
                  (void 0 === hb.requiredDefine || Gb[hb.requiredDefine]) && (4 === hb.numComponents ? (hb.populateVectorFromLinkedProperties(Mb.i.Vector4[0]), wb.updateVector4(hb.name, Mb.i.Vector4[0])) : 3 === hb.numComponents ? (hb.populateVectorFromLinkedProperties(Mb.i.YX[0]), wb.updateVector3(hb.name, Mb.i.YX[0])) : 2 === hb.numComponents ? (hb.populateVectorFromLinkedProperties(Mb.i.Vector2[0]), wb.updateFloat2(hb.name, Mb.i.Vector2[0].x, Mb.i.Vector2[0].y)) : 1 === hb.numComponents && wb.updateFloat(hb.name, hb.linkedProperties[hb.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Ob.environmentIntensity, this._lightingInfos.w = 1, wb.updateVector4("vLightingIntensity", this._lightingInfos), wb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Ob.texturesEnabled) {
                for (const bb in this._samplersList) {
                  const ub = this._samplersList[bb];
                  ub.value && wb.setTexture(ub.samplerName, ub.value)
                }
                if ((0, Qb.i)(Ob, Gb, wb, ub, this.realTimeFiltering), Gb.ENVIRONMENTBRDF && wb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Gb.FUZZENVIRONMENTBRDF && wb.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Gb.REFRACTED_BACKGROUND && (wb.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), wb.S_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Mb.i.YX[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), wb.updateVector3("vBackgroundRefractionInfos", Mb.i.YX[1])), (Gb.ANISOTROPIC || Gb.FUZZ || Gb.REFRACTED_BACKGROUND || Gb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && wb.setTexture("blueNoiseSampler", bb._noiseTextures[this.ZN().uniqueId]), Gb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const bb = this.sssIrradianceTexture.getSize().width,
                    ub = this.sssIrradianceTexture.getSize().height;
                  wb.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), wb.setTexture("sceneDepthSampler", this.sssDepthTexture), wb.updateFloat2("renderTargetSize", bb, ub)
                }
              }
              this.ZN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(hb) && this.ZN().depthPeelingRenderer.bind(Ub), this._eventInfo.subMesh = Bb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, au.g)(this._activeEffect, this, Ob), this.bindEyePosition(Ub)
            } else Hb && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Ob, Ob.UX(), Bb), !ab && this.isFrozen && !Hb || !Ob.lightsEnabled || this._disableLighting || (0, Qb.j)(Ob, hb, this._activeEffect, Gb, this._maxSimultaneousLights), !ab && this.isFrozen || (this.bindView(Ub), (0, Qb.f)(Ob, hb, this._activeEffect, !0), Gb.NUM_MORPH_INFLUENCERS && (0, Qb.p)(hb, this._activeEffect), Gb.BAKED_VERTEX_ANIMATION_TEXTURE && hb.bakedVertexAnimationManager?.bind(Ub, Gb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Qb.l)(Gb, this._activeEffect, Ob)), this._afterBind(hb, this._activeEffect, Bb), wb.update()
          }
          getAnimatables() {
            const bb = super.getAnimatables();
            for (const ub in this._samplersList) {
              const hb = this._samplersList[ub];
              hb.value && hb.value.animations && hb.value.animations.length > 0 && bb.push(hb.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && bb.push(this._radianceTexture), bb
          }
          getActiveTextures() {
            const bb = super.getActiveTextures();
            for (const ub in this._samplersList) {
              const hb = this._samplersList[ub];
              hb.value && bb.push(hb.value)
            }
            return this._radianceTexture && bb.push(this._radianceTexture), bb
          }
          hasTexture(bb) {
            if (super.hasTexture(bb)) return !0;
            for (const ub in this._samplersList) {
              if (this._samplersList[ub].value === bb) return !0
            }
            return this._radianceTexture === bb
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(bb, ub) {
            if (this._breakShaderLoadedCheck = !0, ub) {
              this._environmentBRDFTexture && this.ZN().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.ZN().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const bb in this._samplersList) {
                const ub = this._samplersList[bb];
                ub.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ub)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.ZN().environmentTexture
          }
          _prepareEffect(ub, hb, Bb) {
            let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(ub, hb, Bb, Ub, Lb), !Bb.isDirty) return null;
            Bb.markAsProcessed();
            const Yb = this.ZN().UX(),
              Sb = new cb.c;
            let ab = 0;
            Bb.USESPHERICALINVERTEX && Sb.addFallback(ab++, "USESPHERICALINVERTEX"), Bb.FOG && Sb.addFallback(ab, "FOG"), Bb.SPECULARAA && Sb.addFallback(ab, "SPECULARAA"), Bb.POINTSIZE && Sb.addFallback(ab, "POINTSIZE"), Bb.LOGARITHMICDEPTH && Sb.addFallback(ab, "LOGARITHMICDEPTH"), Bb.PARALLAX && Sb.addFallback(ab, "PARALLAX"), Bb.PARALLAX_RHS && Sb.addFallback(ab, "PARALLAX_RHS"), Bb.PARALLAXOCCLUSION && Sb.addFallback(ab++, "PARALLAXOCCLUSION"), Bb.ENVIRONMENTBRDF && Sb.addFallback(ab++, "ENVIRONMENTBRDF"), Bb.TANGENT && Sb.addFallback(ab++, "TANGENT"), ab = (0, Qb.x)(Bb, Sb, this._maxSimultaneousLights, ab), Bb.SPECULARTERM && Sb.addFallback(ab++, "SPECULARTERM"), Bb.USESPHERICALFROMREFLECTIONMAP && Sb.addFallback(ab++, "USESPHERICALFROMREFLECTIONMAP"), Bb.USEIRRADIANCEMAP && Sb.addFallback(ab++, "USEIRRADIANCEMAP"), Bb.NORMAL && Sb.addFallback(ab++, "NORMAL"), Bb.VERTEXCOLOR && Sb.addFallback(ab++, "VERTEXCOLOR"), Bb.MORPHTARGETS && Sb.addFallback(ab++, "MORPHTARGETS"), Bb.MULTIVIEW && Sb.addFallback(0, "MULTIVIEW");
            const Hb = [mb.i.PositionKind];
            Bb.NORMAL && Hb.push(mb.i.NormalKind), Bb.TANGENT && Hb.push(mb.i.TangentKind);
            for (let bb = 1; bb <= 6; ++bb) Bb["UV" + bb] && Hb.push(`uv${1===bb?"":bb}`);
            Bb.VERTEXCOLOR && Hb.push(mb.i.ColorKind), (0, Qb.A)(Hb, ub, Bb, Sb), (0, Qb.E)(Hb, Bb), (0, Qb.F)(Hb, ub, Bb), (0, Qb.y)(Hb, ub, Bb);
            let wb = "openpbr";
            const Zb = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const bb in this._uniformsList) Zb.push(bb);
            const Xb = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Bb.FUZZENVIRONMENTBRDF && Xb.push("environmentFuzzBrdfSampler"), Bb.REFRACTED_BACKGROUND && Xb.push("backgroundRefractionSampler"), (Bb.ANISOTROPIC || Bb.FUZZ || Bb.REFRACTED_BACKGROUND || Bb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Xb.push("blueNoiseSampler"), Bb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Xb.push("sceneIrradianceSampler"), Xb.push("sceneDepthSampler"));
            for (const bb in this._samplersList) {
              const ub = this._samplersList[bb];
              Xb.push(ub.samplerName), Zb.push(ub.samplerInfoName), Zb.push(ub.samplerMatrixName)
            }(0, Qb.Z)(Zb, Xb, !0);
            const pb = ["Material", "Scene", "Mesh"],
              ob = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Bb.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Sb, this._eventInfo.fallbackRank = ab, this._eventInfo.defines = Bb, this._eventInfo.uniforms = Zb, this._eventInfo.attributes = Hb, this._eventInfo.samplers = Xb, this._eventInfo.uniformBuffersNames = pb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ub, this._eventInfo.indexParameters = ob, this._callbackPluginEventGeneric(128, this._eventInfo), Zu.d.AddUniformsAndSamplers(Zb, Xb), yb.d.AddUniforms(Zb), yb.d.AddSamplers(Xb), (0, au.d)(Zb), this._useVertexPulling) {
              const bb = hb?.geometry;
              bb && (this._vertexPullingMetadata = (0, Hu.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ub) => {
                Zb.push(`vp_${ub}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            fb.b && (fb.b.PrepareUniforms(Zb, Bb), fb.b.PrepareSamplers(Xb, Bb)), (0, Qb.bb)({
              uniformsNames: Zb,
              uniformBuffersNames: pb,
              samplers: Xb,
              defines: Bb,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Ab = {};
            this.customShaderNameResolve && (wb = this.customShaderNameResolve(wb, Zb, pb, Xb, Bb, Hb, Ab));
            const lb = Bb.toString(),
              Kb = Yb.createEffect(wb, {
                attributes: Hb,
                uniformsNames: Zb,
                uniformBuffersNames: pb,
                samplers: Xb,
                defines: lb,
                fallbacks: Sb,
                onCompiled: Ob,
                onError: Gb,
                indexParameters: ob,
                processFinalCode: Ab.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Bb.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Yb);
            return this._eventInfo.customCode = void 0, Kb
          }
          _prepareDefines(ub, hb, Bb) {
            let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Lb = hb.hasThinInstances,
              Yb = this.ZN(),
              Sb = Yb.UX();
            (0, Qb.Q)(Yb, ub, Bb, !0, this._maxSimultaneousLights, this._disableLighting), Bb._needNormals = !0, (0, Qb.U)(Yb, Bb);
            const ab = this.needAlphaBlendingForMesh(ub) && this.ZN().useOrderIndependentTransparency;
            if ((0, Qb.X)(Yb, Bb, this.canRenderToMRT && !ab), (0, Qb.W)(Yb, Bb, ab), Zu.d.PrepareDefines(Sb.currentRenderPassId, ub, Bb), Bb._areTexturesDirty) {
              Bb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Bb["MAINUV" + bb] = !1;
              if (Yb.texturesEnabled) {
                for (const hb in this._samplersList) {
                  const bb = this._samplersList[hb];
                  bb.value ? ((0, Qb.R)(bb.value, Bb, bb.textureDefine), Bb[bb.textureDefine + "_GAMMA"] = bb.value.gammaSpace) : Bb[bb.textureDefine] = !1
                }
                const bb = this._getRadianceTexture(),
                  ub = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Sb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Qb.O)(Yb, bb, Bb, this.realTimeFiltering, this.realTimeFilteringQuality, !ub), this._baseMetalnessTexture && (Bb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Bb.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Bb.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Bb.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Bb.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Bb.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Bb.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Bb.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Bb.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Bb.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Bb.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Bb.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Tb.e.DiffuseTextureEnabled ? (Bb.PARALLAX = !0, Bb.PARALLAX_RHS = Yb.useRightHandedSystem, Bb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Bb.PARALLAX = !1, Bb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Bb.PARALLAX = !1, Bb.PARALLAX_RHS = !1, Bb.PARALLAXOCCLUSION = !1, Bb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Tb.e.ReflectionTextureEnabled ? (Bb.ENVIRONMENTBRDF = !0, Bb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Bb.ENVIRONMENTBRDF = !1, Bb.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Bb.FUZZENVIRONMENTBRDF = !0 : Bb.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Bb.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Tb.e.RefractionTextureEnabled, Bb.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Bb.REFRACTED_LIGHTS = !0;
                  const bb = this._getRadianceTexture();
                  bb ? (Bb.REFRACTED_ENVIRONMENT = Tb.e.RefractionTextureEnabled, Bb.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.ZN().useRightHandedSystem ? !bb.invertZ : bb.invertZ, Bb.REFRACTED_ENVIRONMENT_LOCAL_CUBE = bb.isCube && bb.boundingBoxSize) : Bb.REFRACTED_ENVIRONMENT = !1
                } else Bb.REFRACTED_BACKGROUND = !1, Bb.REFRACTED_LIGHTS = !1, Bb.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Bb.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Bb.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Gb.e.LIGHTFALLOFF_STANDARD ? (Bb.USEPHYSICALLIGHTFALLOFF = !1, Bb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Gb.e.LIGHTFALLOFF_GLTF ? (Bb.USEPHYSICALLIGHTFALLOFF = !1, Bb.USEGLTFLIGHTFALLOFF = !0) : (Bb.USEPHYSICALLIGHTFALLOFF = !0, Bb.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Bb.TWOSIDEDLIGHTING = !0 : Bb.TWOSIDEDLIGHTING = !1, Bb.MIRRORED = !!Yb._mirroredCameraPosition, Bb.SPECULARAA = Sb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Bb._areTexturesDirty || Bb._areMiscDirty) && (Bb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Bb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Bb.ALPHABLEND = this.needAlphaBlendingForMesh(ub)), Bb._areTexturesDirty && (Bb.TEXTURE_REPETITION_MODE = Sb.version > 1 || Sb.isWebGPU ? this.textureRepetitionMode : 0), Bb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Bb), Bb.FORCENORMALFORWARD = this._forceNormalForward, Bb.RADIANCEOCCLUSION = this._useRadianceOcclusion, Bb.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && bb._noiseTextures[Yb.uniqueId] && Tb.e.ReflectionTextureEnabled ? (Bb.ANISOTROPIC = !0, ub.isVerticesDataPresent(mb.i.TangentKind) || (Bb._needUVs = !0, Bb.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Bb.USE_GLTF_STYLE_ANISOTROPY = !0), Bb.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Bb.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Bb.ANISOTROPIC = !1, Bb.USE_GLTF_STYLE_ANISOTROPY = !1, Bb.ANISOTROPIC_BASE = !1, Bb.ANISOTROPIC_COAT = !1), Bb.THIN_FILM = this.thinFilmWeight > 0, Bb.IRIDESCENCE = this.thinFilmWeight > 0, Bb.DISPERSION = this.transmissionDispersionScale > 0, Bb.SCATTERING = this.hasScattering;
            if (Bb.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Bb.TRANSMISSION_SLAB = this.transmissionWeight > 0, Bb.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Bb.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Bb.PREPASS && (Bb.SUBSURFACE_SLAB || Bb.TRANSMISSION_SLAB_VOLUME)) {
              let bb = !1;
              if (!this.sssIrradianceTexture && Yb.geometryBufferRenderer) {
                const ub = Yb.geometryBufferRenderer.getTextureIndex(Iu.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Yb.geometryBufferRenderer.getGBuffer().textures[ub], bb = !0
              }
              if (!this.sssDepthTexture && Yb.geometryBufferRenderer) {
                const ub = Yb.geometryBufferRenderer.getTextureIndex(Iu.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Yb.geometryBufferRenderer.getGBuffer().textures[ub], bb = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Bb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, bb && (Bb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Bb.FUZZ = this.fuzzWeight > 0 && Tb.e.ReflectionTextureEnabled, Bb.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Bb.FUZZ ? (ub.isVerticesDataPresent(mb.i.TangentKind) || (Bb._needUVs = !0, Bb.MAINUV1 = !0), this._environmentFuzzBRDFTexture = eb(this.ZN()), Bb.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Bb.FUZZENVIRONMENTBRDF = !1, Bb.FUZZ_IBL_SAMPLES = 0), Bb._areMiscDirty && ((0, Qb.S)(ub, Yb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ub), Bb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, hb, this._isVertexOutputInvariant), Bb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ub.isVerticesDataPresent(mb.i.NormalKind), Bb.DEBUGMODE = this._debugMode), (0, Qb.K)(Yb, Sb, this, Bb, !!Ob, Ub, Lb), this._eventInfo.defines = Bb, this._eventInfo.mesh = ub, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Qb.I)(ub, Bb, !0, !0, !0, this._transparencyMode !== Gb.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, ub = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, Yb = new WeakMap, Sb = new WeakMap, ab = new WeakMap, Hb = new WeakMap, wb = new WeakMap, Zb = new WeakMap, Xb = new WeakMap, pb = new WeakMap, ob = new WeakMap, Ab = new WeakMap, lb = new WeakMap, Kb = new WeakMap, Wb = new WeakMap, Cb = new WeakMap, db = new WeakMap, rb = new WeakMap, jb = new WeakMap, ib = new WeakMap, vb = new WeakMap, tb = new WeakMap, Jb = new WeakMap, sb = new WeakMap, Ib = new WeakMap, Pb = new WeakMap, qb = new WeakMap, Eb = new WeakMap, Fb = new WeakMap, kb = new WeakMap, Rb = new WeakMap, bu = new WeakMap, uu = new WeakMap, hu = new WeakMap, Bu = new WeakMap, Ou = new WeakMap, Gu = new WeakMap, Uu = new WeakMap, Lu = new WeakMap, Yu = new WeakMap, Su = new WeakMap, Xu = new WeakMap, pu = new WeakMap, ou = new WeakMap, Au = new WeakMap, lu = new WeakMap, Ku = new WeakMap, Wu = new WeakMap, Cu = new WeakMap, du = new WeakMap, nu = new WeakMap, Du = new WeakMap, xu = new WeakMap, zu = new WeakMap, gu = new WeakMap, iu = new WeakMap, vu = new WeakMap, tu = new WeakMap, Ju = new WeakMap, eu = new WeakMap, Nu = new WeakMap, su = new WeakMap, Mu = new WeakMap, mu = new WeakMap, Pu = new WeakMap, Eu = new WeakMap, fu = new WeakMap, ku = new WeakMap, Qu = new WeakMap, Ru = new WeakMap, bh = new WeakMap, uh = new WeakMap, hh = new WeakMap, Bh = new WeakMap, Oh = new WeakMap, Gh = new WeakMap, Uh = new WeakMap, Lh = new WeakMap, Yh = new WeakMap, Sh = new WeakMap, ah = new WeakMap, Hh = new WeakMap, wh = new WeakMap, Zh = new WeakMap, Xh = new WeakMap, ph = new WeakMap, oh = new WeakMap, Ah = new WeakMap, lh = new WeakMap, Kh = new WeakMap, Wh = new WeakMap, Ch = new WeakMap, dh = new WeakMap, rh = new WeakMap, jh = new WeakMap, nh = new WeakMap, Dh = new WeakMap, xh = new WeakMap, zh = new WeakMap, (() => {
          const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(iO[Symbol.metadata] ?? null) : void 0;
          gh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], ih = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], vh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], th = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Jh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], eh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Nh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], sh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Mh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], mh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Ih = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Ph = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], qh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Eh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], yh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Vh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Fh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], fh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], kh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Th = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], ch = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Qh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], Rh = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], hB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], BB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], YB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], SB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], wB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], XB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], AB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], jB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], nB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], xB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], vB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], eB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], sB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], IB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], PB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], EB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], VB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], fB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], QB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, Db.e)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], OO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], GO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, Db.K)()], YO = [(0, Db.K)()], SO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], HO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsLightsDirty")], XO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsLightsDirty")], oO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], WO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, Db.i)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], xO = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], zO = [(0, Db.i)("_markAllSubMeshesAsMiscDirty")], gO = [(0, Db.K)()], (0, nb.h)(bb, null, gh, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeight" in bb,
              get: bb => bb.baseWeight,
              set: (bb, ub) => {
                bb.baseWeight = ub
              }
            },
            metadata: ub
          }, tO, JO), (0, nb.h)(bb, null, ih, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeightTexture" in bb,
              get: bb => bb.baseWeightTexture,
              set: (bb, ub) => {
                bb.baseWeightTexture = ub
              }
            },
            metadata: ub
          }, eO, NO), (0, nb.h)(bb, null, vh, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColor" in bb,
              get: bb => bb.baseColor,
              set: (bb, ub) => {
                bb.baseColor = ub
              }
            },
            metadata: ub
          }, sO, MO), (0, nb.h)(bb, null, th, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColorTexture" in bb,
              get: bb => bb.baseColorTexture,
              set: (bb, ub) => {
                bb.baseColorTexture = ub
              }
            },
            metadata: ub
          }, mO, IO), (0, nb.h)(bb, null, Jh, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughness" in bb,
              get: bb => bb.baseDiffuseRoughness,
              set: (bb, ub) => {
                bb.baseDiffuseRoughness = ub
              }
            },
            metadata: ub
          }, PO, qO), (0, nb.h)(bb, null, eh, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughnessTexture" in bb,
              get: bb => bb.baseDiffuseRoughnessTexture,
              set: (bb, ub) => {
                bb.baseDiffuseRoughnessTexture = ub
              }
            },
            metadata: ub
          }, EO, yO), (0, nb.h)(bb, null, Nh, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalness" in bb,
              get: bb => bb.baseMetalness,
              set: (bb, ub) => {
                bb.baseMetalness = ub
              }
            },
            metadata: ub
          }, VO, FO), (0, nb.h)(bb, null, sh, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalnessTexture" in bb,
              get: bb => bb.baseMetalnessTexture,
              set: (bb, ub) => {
                bb.baseMetalnessTexture = ub
              }
            },
            metadata: ub
          }, fO, kO), (0, nb.h)(bb, null, Mh, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeight" in bb,
              get: bb => bb.specularWeight,
              set: (bb, ub) => {
                bb.specularWeight = ub
              }
            },
            metadata: ub
          }, TO, cO), (0, nb.h)(bb, null, mh, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeightTexture" in bb,
              get: bb => bb.specularWeightTexture,
              set: (bb, ub) => {
                bb.specularWeightTexture = ub
              }
            },
            metadata: ub
          }, QO, RO), (0, nb.h)(bb, null, Ih, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, ub) => {
                bb.specularColor = ub
              }
            },
            metadata: ub
          }, bG, uG), (0, nb.h)(bb, null, Ph, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColorTexture" in bb,
              get: bb => bb.specularColorTexture,
              set: (bb, ub) => {
                bb.specularColorTexture = ub
              }
            },
            metadata: ub
          }, hG, BG), (0, nb.h)(bb, null, qh, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughness" in bb,
              get: bb => bb.specularRoughness,
              set: (bb, ub) => {
                bb.specularRoughness = ub
              }
            },
            metadata: ub
          }, OG, GG), (0, nb.h)(bb, null, Eh, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessTexture" in bb,
              get: bb => bb.specularRoughnessTexture,
              set: (bb, ub) => {
                bb.specularRoughnessTexture = ub
              }
            },
            metadata: ub
          }, UG, LG), (0, nb.h)(bb, null, yh, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropy" in bb,
              get: bb => bb.specularRoughnessAnisotropy,
              set: (bb, ub) => {
                bb.specularRoughnessAnisotropy = ub
              }
            },
            metadata: ub
          }, YG, SG), (0, nb.h)(bb, null, Vh, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropyTexture" in bb,
              get: bb => bb.specularRoughnessAnisotropyTexture,
              set: (bb, ub) => {
                bb.specularRoughnessAnisotropyTexture = ub
              }
            },
            metadata: ub
          }, aG, HG), (0, nb.h)(bb, null, Fh, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularIor" in bb,
              get: bb => bb.specularIor,
              set: (bb, ub) => {
                bb.specularIor = ub
              }
            },
            metadata: ub
          }, wG, ZG), (0, nb.h)(bb, null, fh, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeight" in bb,
              get: bb => bb.transmissionWeight,
              set: (bb, ub) => {
                bb.transmissionWeight = ub
              }
            },
            metadata: ub
          }, XG, pG), (0, nb.h)(bb, null, kh, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeightTexture" in bb,
              get: bb => bb.transmissionWeightTexture,
              set: (bb, ub) => {
                bb.transmissionWeightTexture = ub
              }
            },
            metadata: ub
          }, oG, AG), (0, nb.h)(bb, null, Th, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColor" in bb,
              get: bb => bb.transmissionColor,
              set: (bb, ub) => {
                bb.transmissionColor = ub
              }
            },
            metadata: ub
          }, lG, KG), (0, nb.h)(bb, null, ch, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColorTexture" in bb,
              get: bb => bb.transmissionColorTexture,
              set: (bb, ub) => {
                bb.transmissionColorTexture = ub
              }
            },
            metadata: ub
          }, WG, CG), (0, nb.h)(bb, null, Qh, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepth" in bb,
              get: bb => bb.transmissionDepth,
              set: (bb, ub) => {
                bb.transmissionDepth = ub
              }
            },
            metadata: ub
          }, dG, rG), (0, nb.h)(bb, null, Rh, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepthTexture" in bb,
              get: bb => bb.transmissionDepthTexture,
              set: (bb, ub) => {
                bb.transmissionDepthTexture = ub
              }
            },
            metadata: ub
          }, jG, nG), (0, nb.h)(bb, null, bB, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatter" in bb,
              get: bb => bb.transmissionScatter,
              set: (bb, ub) => {
                bb.transmissionScatter = ub
              }
            },
            metadata: ub
          }, DG, xG), (0, nb.h)(bb, null, uB, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterTexture" in bb,
              get: bb => bb.transmissionScatterTexture,
              set: (bb, ub) => {
                bb.transmissionScatterTexture = ub
              }
            },
            metadata: ub
          }, zG, gG), (0, nb.h)(bb, null, hB, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterAnisotropy" in bb,
              get: bb => bb.transmissionScatterAnisotropy,
              set: (bb, ub) => {
                bb.transmissionScatterAnisotropy = ub
              }
            },
            metadata: ub
          }, iG, vG), (0, nb.h)(bb, null, BB, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScale" in bb,
              get: bb => bb.transmissionDispersionScale,
              set: (bb, ub) => {
                bb.transmissionDispersionScale = ub
              }
            },
            metadata: ub
          }, tG, JG), (0, nb.h)(bb, null, OB, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScaleTexture" in bb,
              get: bb => bb.transmissionDispersionScaleTexture,
              set: (bb, ub) => {
                bb.transmissionDispersionScaleTexture = ub
              }
            },
            metadata: ub
          }, eG, NG), (0, nb.h)(bb, null, GB, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionAbbeNumber" in bb,
              get: bb => bb.transmissionDispersionAbbeNumber,
              set: (bb, ub) => {
                bb.transmissionDispersionAbbeNumber = ub
              }
            },
            metadata: ub
          }, sG, MG), (0, nb.h)(bb, null, UB, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeight" in bb,
              get: bb => bb.subsurfaceWeight,
              set: (bb, ub) => {
                bb.subsurfaceWeight = ub
              }
            },
            metadata: ub
          }, mG, IG), (0, nb.h)(bb, null, LB, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeightTexture" in bb,
              get: bb => bb.subsurfaceWeightTexture,
              set: (bb, ub) => {
                bb.subsurfaceWeightTexture = ub
              }
            },
            metadata: ub
          }, PG, qG), (0, nb.h)(bb, null, YB, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColor" in bb,
              get: bb => bb.subsurfaceColor,
              set: (bb, ub) => {
                bb.subsurfaceColor = ub
              }
            },
            metadata: ub
          }, EG, yG), (0, nb.h)(bb, null, SB, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColorTexture" in bb,
              get: bb => bb.subsurfaceColorTexture,
              set: (bb, ub) => {
                bb.subsurfaceColorTexture = ub
              }
            },
            metadata: ub
          }, VG, FG), (0, nb.h)(bb, null, aB, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadius" in bb,
              get: bb => bb.subsurfaceRadius,
              set: (bb, ub) => {
                bb.subsurfaceRadius = ub
              }
            },
            metadata: ub
          }, fG, kG), (0, nb.h)(bb, null, HB, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScale" in bb,
              get: bb => bb.subsurfaceRadiusScale,
              set: (bb, ub) => {
                bb.subsurfaceRadiusScale = ub
              }
            },
            metadata: ub
          }, TG, cG), (0, nb.h)(bb, null, wB, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScaleTexture" in bb,
              get: bb => bb.subsurfaceRadiusScaleTexture,
              set: (bb, ub) => {
                bb.subsurfaceRadiusScaleTexture = ub
              }
            },
            metadata: ub
          }, QG, RG), (0, nb.h)(bb, null, ZB, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceScatterAnisotropy" in bb,
              get: bb => bb.subsurfaceScatterAnisotropy,
              set: (bb, ub) => {
                bb.subsurfaceScatterAnisotropy = ub
              }
            },
            metadata: ub
          }, bU, uU), (0, nb.h)(bb, null, XB, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeight" in bb,
              get: bb => bb.coatWeight,
              set: (bb, ub) => {
                bb.coatWeight = ub
              }
            },
            metadata: ub
          }, hU, BU), (0, nb.h)(bb, null, pB, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeightTexture" in bb,
              get: bb => bb.coatWeightTexture,
              set: (bb, ub) => {
                bb.coatWeightTexture = ub
              }
            },
            metadata: ub
          }, OU, GU), (0, nb.h)(bb, null, oB, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColor" in bb,
              get: bb => bb.coatColor,
              set: (bb, ub) => {
                bb.coatColor = ub
              }
            },
            metadata: ub
          }, UU, LU), (0, nb.h)(bb, null, AB, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColorTexture" in bb,
              get: bb => bb.coatColorTexture,
              set: (bb, ub) => {
                bb.coatColorTexture = ub
              }
            },
            metadata: ub
          }, YU, SU), (0, nb.h)(bb, null, lB, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughness" in bb,
              get: bb => bb.coatRoughness,
              set: (bb, ub) => {
                bb.coatRoughness = ub
              }
            },
            metadata: ub
          }, aU, HU), (0, nb.h)(bb, null, KB, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessTexture" in bb,
              get: bb => bb.coatRoughnessTexture,
              set: (bb, ub) => {
                bb.coatRoughnessTexture = ub
              }
            },
            metadata: ub
          }, wU, ZU), (0, nb.h)(bb, null, WB, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropy" in bb,
              get: bb => bb.coatRoughnessAnisotropy,
              set: (bb, ub) => {
                bb.coatRoughnessAnisotropy = ub
              }
            },
            metadata: ub
          }, XU, pU), (0, nb.h)(bb, null, CB, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropyTexture" in bb,
              get: bb => bb.coatRoughnessAnisotropyTexture,
              set: (bb, ub) => {
                bb.coatRoughnessAnisotropyTexture = ub
              }
            },
            metadata: ub
          }, oU, AU), (0, nb.h)(bb, null, dB, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatIor" in bb,
              get: bb => bb.coatIor,
              set: (bb, ub) => {
                bb.coatIor = ub
              }
            },
            metadata: ub
          }, lU, KU), (0, nb.h)(bb, null, rB, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkening" in bb,
              get: bb => bb.coatDarkening,
              set: (bb, ub) => {
                bb.coatDarkening = ub
              }
            },
            metadata: ub
          }, WU, CU), (0, nb.h)(bb, null, jB, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkeningTexture" in bb,
              get: bb => bb.coatDarkeningTexture,
              set: (bb, ub) => {
                bb.coatDarkeningTexture = ub
              }
            },
            metadata: ub
          }, dU, rU), (0, nb.h)(bb, null, nB, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeight" in bb,
              get: bb => bb.fuzzWeight,
              set: (bb, ub) => {
                bb.fuzzWeight = ub
              }
            },
            metadata: ub
          }, jU, nU), (0, nb.h)(bb, null, DB, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeightTexture" in bb,
              get: bb => bb.fuzzWeightTexture,
              set: (bb, ub) => {
                bb.fuzzWeightTexture = ub
              }
            },
            metadata: ub
          }, DU, xU), (0, nb.h)(bb, null, xB, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColor" in bb,
              get: bb => bb.fuzzColor,
              set: (bb, ub) => {
                bb.fuzzColor = ub
              }
            },
            metadata: ub
          }, zU, gU), (0, nb.h)(bb, null, zB, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColorTexture" in bb,
              get: bb => bb.fuzzColorTexture,
              set: (bb, ub) => {
                bb.fuzzColorTexture = ub
              }
            },
            metadata: ub
          }, iU, vU), (0, nb.h)(bb, null, gB, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughness" in bb,
              get: bb => bb.fuzzRoughness,
              set: (bb, ub) => {
                bb.fuzzRoughness = ub
              }
            },
            metadata: ub
          }, tU, JU), (0, nb.h)(bb, null, iB, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughnessTexture" in bb,
              get: bb => bb.fuzzRoughnessTexture,
              set: (bb, ub) => {
                bb.fuzzRoughnessTexture = ub
              }
            },
            metadata: ub
          }, eU, NU), (0, nb.h)(bb, null, vB, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThinWalled" in bb,
              get: bb => bb.geometryThinWalled,
              set: (bb, ub) => {
                bb.geometryThinWalled = ub
              }
            },
            metadata: ub
          }, sU, MU), (0, nb.h)(bb, null, tB, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryNormalTexture" in bb,
              get: bb => bb.geometryNormalTexture,
              set: (bb, ub) => {
                bb.geometryNormalTexture = ub
              }
            },
            metadata: ub
          }, mU, IU), (0, nb.h)(bb, null, JB, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangent" in bb,
              get: bb => bb.geometryTangent,
              set: (bb, ub) => {
                bb.geometryTangent = ub
              }
            },
            metadata: ub
          }, PU, qU), (0, nb.h)(bb, null, eB, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangentTexture" in bb,
              get: bb => bb.geometryTangentTexture,
              set: (bb, ub) => {
                bb.geometryTangentTexture = ub
              }
            },
            metadata: ub
          }, EU, yU), (0, nb.h)(bb, null, NB, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatNormalTexture" in bb,
              get: bb => bb.geometryCoatNormalTexture,
              set: (bb, ub) => {
                bb.geometryCoatNormalTexture = ub
              }
            },
            metadata: ub
          }, VU, FU), (0, nb.h)(bb, null, sB, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangent" in bb,
              get: bb => bb.geometryCoatTangent,
              set: (bb, ub) => {
                bb.geometryCoatTangent = ub
              }
            },
            metadata: ub
          }, fU, kU), (0, nb.h)(bb, null, MB, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangentTexture" in bb,
              get: bb => bb.geometryCoatTangentTexture,
              set: (bb, ub) => {
                bb.geometryCoatTangentTexture = ub
              }
            },
            metadata: ub
          }, TU, cU), (0, nb.h)(bb, null, mB, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacity" in bb,
              get: bb => bb.geometryOpacity,
              set: (bb, ub) => {
                bb.geometryOpacity = ub
              }
            },
            metadata: ub
          }, QU, RU), (0, nb.h)(bb, null, IB, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacityTexture" in bb,
              get: bb => bb.geometryOpacityTexture,
              set: (bb, ub) => {
                bb.geometryOpacityTexture = ub
              }
            },
            metadata: ub
          }, bL, uL), (0, nb.h)(bb, null, PB, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThickness" in bb,
              get: bb => bb.geometryThickness,
              set: (bb, ub) => {
                bb.geometryThickness = ub
              }
            },
            metadata: ub
          }, hL, BL), (0, nb.h)(bb, null, qB, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThicknessTexture" in bb,
              get: bb => bb.geometryThicknessTexture,
              set: (bb, ub) => {
                bb.geometryThicknessTexture = ub
              }
            },
            metadata: ub
          }, OL, GL), (0, nb.h)(bb, null, EB, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionLuminance" in bb,
              get: bb => bb.emissionLuminance,
              set: (bb, ub) => {
                bb.emissionLuminance = ub
              }
            },
            metadata: ub
          }, UL, LL), (0, nb.h)(bb, null, yB, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColor" in bb,
              get: bb => bb.emissionColor,
              set: (bb, ub) => {
                bb.emissionColor = ub
              }
            },
            metadata: ub
          }, YL, SL), (0, nb.h)(bb, null, VB, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColorTexture" in bb,
              get: bb => bb.emissionColorTexture,
              set: (bb, ub) => {
                bb.emissionColorTexture = ub
              }
            },
            metadata: ub
          }, aL, HL), (0, nb.h)(bb, null, FB, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeight" in bb,
              get: bb => bb.thinFilmWeight,
              set: (bb, ub) => {
                bb.thinFilmWeight = ub
              }
            },
            metadata: ub
          }, wL, ZL), (0, nb.h)(bb, null, fB, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeightTexture" in bb,
              get: bb => bb.thinFilmWeightTexture,
              set: (bb, ub) => {
                bb.thinFilmWeightTexture = ub
              }
            },
            metadata: ub
          }, XL, pL), (0, nb.h)(bb, null, kB, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThickness" in bb,
              get: bb => bb.thinFilmThickness,
              set: (bb, ub) => {
                bb.thinFilmThickness = ub
              }
            },
            metadata: ub
          }, oL, AL), (0, nb.h)(bb, null, TB, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessMin" in bb,
              get: bb => bb.thinFilmThicknessMin,
              set: (bb, ub) => {
                bb.thinFilmThicknessMin = ub
              }
            },
            metadata: ub
          }, lL, KL), (0, nb.h)(bb, null, cB, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessTexture" in bb,
              get: bb => bb.thinFilmThicknessTexture,
              set: (bb, ub) => {
                bb.thinFilmThicknessTexture = ub
              }
            },
            metadata: ub
          }, WL, CL), (0, nb.h)(bb, null, QB, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmIor" in bb,
              get: bb => bb.thinFilmIor,
              set: (bb, ub) => {
                bb.thinFilmIor = ub
              }
            },
            metadata: ub
          }, dL, rL), (0, nb.h)(bb, null, RB, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientOcclusionTexture" in bb,
              get: bb => bb.ambientOcclusionTexture,
              set: (bb, ub) => {
                bb.ambientOcclusionTexture = ub
              }
            },
            metadata: ub
          }, jL, nL), (0, nb.h)(bb, null, bO, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "directIntensity" in bb,
              get: bb => bb.directIntensity,
              set: (bb, ub) => {
                bb.directIntensity = ub
              }
            },
            metadata: ub
          }, DL, xL), (0, nb.h)(bb, null, uO, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentIntensity" in bb,
              get: bb => bb.environmentIntensity,
              set: (bb, ub) => {
                bb.environmentIntensity = ub
              }
            },
            metadata: ub
          }, zL, gL), (0, nb.h)(bb, null, hO, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularWeightFromTextureAlpha" in bb,
              get: bb => bb.useSpecularWeightFromTextureAlpha,
              set: (bb, ub) => {
                bb.useSpecularWeightFromTextureAlpha = ub
              }
            },
            metadata: ub
          }, iL, vL), (0, nb.h)(bb, null, BO, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAlphaTest" in bb,
              get: bb => bb.forceAlphaTest,
              set: (bb, ub) => {
                bb.forceAlphaTest = ub
              }
            },
            metadata: ub
          }, tL, JL), (0, nb.h)(bb, null, OO, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, ub) => {
                bb.alphaCutOff = ub
              }
            },
            metadata: ub
          }, eL, NL), (0, nb.h)(bb, null, GO, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
              get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
              set: (bb, ub) => {
                bb.useAmbientOcclusionFromMetallicTextureRed = ub
              }
            },
            metadata: ub
          }, sL, ML), (0, nb.h)(bb, null, UO, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientInGrayScale" in bb,
              get: bb => bb.useAmbientInGrayScale,
              set: (bb, ub) => {
                bb.useAmbientInGrayScale = ub
              }
            },
            metadata: ub
          }, mL, IL), (0, nb.h)(bb, null, LO, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "usePhysicalLightFalloff" in bb,
              get: bb => bb.usePhysicalLightFalloff
            },
            metadata: ub
          }, null, vO), (0, nb.h)(bb, null, YO, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGLTFLightFalloff" in bb,
              get: bb => bb.useGLTFLightFalloff
            },
            metadata: ub
          }, null, vO), (0, nb.h)(bb, null, SO, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, ub) => {
                bb.useObjectSpaceNormalMap = ub
              }
            },
            metadata: ub
          }, PL, qL), (0, nb.h)(bb, null, aO, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, ub) => {
                bb.useParallax = ub
              }
            },
            metadata: ub
          }, EL, yL), (0, nb.h)(bb, null, HO, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, ub) => {
                bb.useParallaxOcclusion = ub
              }
            },
            metadata: ub
          }, VL, FL), (0, nb.h)(bb, null, wO, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, ub) => {
                bb.parallaxScaleBias = ub
              }
            },
            metadata: ub
          }, fL, kL), (0, nb.h)(bb, null, ZO, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, ub) => {
                bb.disableLighting = ub
              }
            },
            metadata: ub
          }, TL, cL), (0, nb.h)(bb, null, XO, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceIrradianceInFragment" in bb,
              get: bb => bb.forceIrradianceInFragment,
              set: (bb, ub) => {
                bb.forceIrradianceInFragment = ub
              }
            },
            metadata: ub
          }, QL, RL), (0, nb.h)(bb, null, pO, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, ub) => {
                bb.maxSimultaneousLights = ub
              }
            },
            metadata: ub
          }, bY, uY), (0, nb.h)(bb, null, oO, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, ub) => {
                bb.invertNormalMapX = ub
              }
            },
            metadata: ub
          }, hY, BY), (0, nb.h)(bb, null, AO, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, ub) => {
                bb.invertNormalMapY = ub
              }
            },
            metadata: ub
          }, OY, GY), (0, nb.h)(bb, null, lO, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, ub) => {
                bb.twoSidedLighting = ub
              }
            },
            metadata: ub
          }, UY, LY), (0, nb.h)(bb, null, KO, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFresnel" in bb,
              get: bb => bb.useAlphaFresnel,
              set: (bb, ub) => {
                bb.useAlphaFresnel = ub
              }
            },
            metadata: ub
          }, YY, SY), (0, nb.h)(bb, null, WO, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLinearAlphaFresnel" in bb,
              get: bb => bb.useLinearAlphaFresnel,
              set: (bb, ub) => {
                bb.useLinearAlphaFresnel = ub
              }
            },
            metadata: ub
          }, aY, HY), (0, nb.h)(bb, null, CO, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentBRDFTexture" in bb,
              get: bb => bb.environmentBRDFTexture,
              set: (bb, ub) => {
                bb.environmentBRDFTexture = ub
              }
            },
            metadata: ub
          }, wY, ZY), (0, nb.h)(bb, null, dO, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceNormalForward" in bb,
              get: bb => bb.forceNormalForward,
              set: (bb, ub) => {
                bb.forceNormalForward = ub
              }
            },
            metadata: ub
          }, XY, pY), (0, nb.h)(bb, null, rO, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: bb => "enableSpecularAntiAliasing" in bb,
              get: bb => bb.enableSpecularAntiAliasing,
              set: (bb, ub) => {
                bb.enableSpecularAntiAliasing = ub
              }
            },
            metadata: ub
          }, oY, AY), (0, nb.h)(bb, null, jO, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useHorizonOcclusion" in bb,
              get: bb => bb.useHorizonOcclusion,
              set: (bb, ub) => {
                bb.useHorizonOcclusion = ub
              }
            },
            metadata: ub
          }, lY, KY), (0, nb.h)(bb, null, nO, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useRadianceOcclusion" in bb,
              get: bb => bb.useRadianceOcclusion,
              set: (bb, ub) => {
                bb.useRadianceOcclusion = ub
              }
            },
            metadata: ub
          }, WY, CY), (0, nb.h)(bb, null, DO, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unlit" in bb,
              get: bb => bb.unlit,
              set: (bb, ub) => {
                bb.unlit = ub
              }
            },
            metadata: ub
          }, dY, rY), (0, nb.h)(bb, null, xO, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, ub) => {
                bb.applyDecalMapAfterDetailMap = ub
              }
            },
            metadata: ub
          }, jY, nY), (0, nb.h)(bb, null, zO, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "debugMode" in bb,
              get: bb => bb.debugMode,
              set: (bb, ub) => {
                bb.debugMode = ub
              }
            },
            metadata: ub
          }, DY, xY), (0, nb.h)(bb, null, gO, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "transparencyMode" in bb,
              get: bb => bb.transparencyMode
            },
            metadata: ub
          }, null, vO), ub && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ub
          })
        })(), bb.SSS_QUALITY_LOW = 0, bb.SSS_QUALITY_MEDIUM = 1, bb.SSS_QUALITY_HIGH = 2, bb._noiseTextures = {}, bb.ForceGLSL = !1, bb._ShaderLoader = new wu.d((() => [Promise.all([hb.e(308), hb.e(374)]).then((() => hb(61153))), Promise.all([hb.e(313), hb.e(309), hb.e(373), hb.e(378)]).then((() => hb(61162)))]), (() => [Promise.all([hb.e(327), hb.e(329), hb.e(377)]).then((() => hb(61197))), Promise.all([hb.e(327), hb.e(330), hb.e(376), hb.e(379)]).then((() => hb(61211)))])), bb
      })(),
      Ru = !1;
    Ru || (Ru = !0, (0, fb.c)(), (0, Pu.f)("BABYLON.OpenPBRMaterial", Qu));
    var bh = hb(36753);
    class uh {
      constructor(bb) {
        this.name = Ju.d.NAME_PROCEDURALTEXTURE, this.Xp = bb
      }
      register() {
        this.Xp._beforeClearStage.registerStep(Ju.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Xp.proceduralTexturesEnabled) {
          ju.k.StartPerformanceCounter("Procedural textures", this.Xp.proceduralTextures.length > 0);
          for (let bb = 0; bb < this.Xp.proceduralTextures.length; bb++) {
            const ub = this.Xp.proceduralTextures[bb];
            ub._shouldRender() && ub.render()
          }
          ju.k.EndPerformanceCounter("Procedural textures", this.Xp.proceduralTextures.length > 0)
        }
      }
    }
    var hh = hb(39765);
    let Bh = (() => {
      var bb;
      let ub, Bb, Ob, Ub, Lb, Yb = gb.f,
        Sb = [],
        ab = [],
        Hb = [],
        wb = [],
        Zb = [],
        Xb = [],
        ob = [],
        Ab = [],
        lb = [];
      return bb = class extends Yb {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(bb, ub, hb, Bb) {
          let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Bb, !Gb), this.isEnabled = ((0, nb.k)(this, Sb), (0, nb.k)(this, ab, !0)), this.autoClear = ((0, nb.k)(this, Hb), (0, nb.k)(this, wb, !0)), this.onGenerated = (0, nb.k)(this, Zb), this.onGeneratedObservable = new bh.e, this.onBeforeGenerationObservable = new bh.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, nb.k)(this, Xb, void 0), this._drawWrapper = (0, nb.k)(this, ob), this._textures = {}, this._size = (0, nb.k)(this, Ab, void 0), this._textureType = (0, nb.k)(this, lb), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Ob || Ob instanceof gb.f ? (this._options = {}, this._fallbackTexture = Ob) : (this._options = Ob, this._fallbackTexture = Ob.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Yb = (Bb = this.ZN() || pb.b.LastCreatedScene)._getComponent(Ju.d.NAME_PROCEDURALTEXTURE);
          Yb || (Yb = new uh(Bb), Bb.bBb(Yb)), this._options.skipSceneRegistration || Bb.proceduralTextures.push(this), this._fullEngine = Bb.UX(), this.name = bb, this.isRenderTarget = !0, this._size = ub, this._textureType = Lb, this._generateMipMaps = Gb, this._drawWrapper = new hh.d(this._fullEngine), this.setFragment(hb);
          const Kb = this._createRtWrapper(Ub, ub, Gb, Lb);
          this._texture = Kb.texture;
          const Wb = [];
          Wb.push(1, 1), Wb.push(-1, 1), Wb.push(-1, -1), Wb.push(1, -1), this._vertexBuffers[mb.i.PositionKind] = new mb.i(this._fullEngine, Wb, mb.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(bb, ub, hb, Bb) {
          return bb ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(ub, {
            generateMipMaps: hb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Bb,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(ub, {
            generateMipMaps: hb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Bb,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(bb) {
          this._drawWrapper.effect = bb
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((bb => {
            this._contentData = this.readPixels(0, 0, bb), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const bb = this._fullEngine,
            ub = [];
          ub.push(0), ub.push(1), ub.push(2), ub.push(0), ub.push(2), ub.push(3), this._indexBuffer = bb.createIndexBuffer(ub)
        }
        _rebuild() {
          const bb = this._vertexBuffers[mb.i.PositionKind];
          bb && bb._rebuild(), this._createIndexBuffer(), this.refreshRate === nu.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = nu.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(bb) {
          if (this.isReady()) return void bb(this);
          const ub = this.getEffect();
          ub && ub.executeWhenCompiled((() => {
            bb(this)
          }))
        }
        isReady() {
          const bb = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const ub = this._getDefines();
          if (this._drawWrapper.effect && ub === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Bb = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== ub && (this._cachedDefines = ub, this._drawWrapper.effect = bb.createEffect(Bb, [mb.i.PositionKind], this._uniforms, this._samplers, ub, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([hb.e(382).then((() => hb(61284))), this._options.extraInitializationsAsync()]) : await Promise.all([hb.e(383).then((() => hb(61293))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await hb.e(382).then((() => hb(61284))) : await hb.e(383).then((() => hb(61293)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(bb) {
          this._fragment = bb
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(bb) {
          this._refreshRate = bb, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(bb, ub) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const hb = this._texture.isCube;
          this._rtWrapper.dispose();
          const Bb = this._createRtWrapper(hb, bb, ub, this._textureType);
          this._texture = Bb.texture, this._size = bb, this._generateMipMaps = ub
        }
        _checkUniform(bb) {
          -1 === this._uniforms.indexOf(bb) && this._uniforms.push(bb)
        }
        setTexture(bb, ub) {
          return -1 === this._samplers.indexOf(bb) && this._samplers.push(bb), this._textures[bb] = ub, this
        }
        setFloat(bb, ub) {
          return this._checkUniform(bb), this._floats[bb] = ub, this
        }
        setInt(bb, ub) {
          return this._checkUniform(bb), this._ints[bb] = ub, this
        }
        setFloats(bb, ub) {
          return this._checkUniform(bb), this._floatsArrays[bb] = ub, this
        }
        setColor3(bb, ub) {
          return this._checkUniform(bb), this._colors3[bb] = ub, this
        }
        setColor4(bb, ub) {
          return this._checkUniform(bb), this._colors4[bb] = ub, this
        }
        setVector2(bb, ub) {
          return this._checkUniform(bb), this._vectors2[bb] = ub, this
        }
        setVector3(bb, ub) {
          return this._checkUniform(bb), this._vectors3[bb] = ub, this
        }
        setVector4(bb, ub) {
          return this._checkUniform(bb), this._vectors4[bb] = ub, this
        }
        setMatrix(bb, ub) {
          return this._checkUniform(bb), this._matrices[bb] = ub, this
        }
        render(bb) {
          const ub = this.ZN();
          if (!ub) return;
          const hb = this._fullEngine;
          if (hb.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), hb.setState(!1), !this.nodeMaterialSource) {
            for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb]);
            for (const bb in this._ints) this._drawWrapper.effect.setInt(bb, this._ints[bb]);
            for (const bb in this._floats) this._drawWrapper.effect.setFloat(bb, this._floats[bb]);
            for (const bb in this._floatsArrays) this._drawWrapper.effect.setArray(bb, this._floatsArrays[bb]);
            for (const bb in this._colors3) this._drawWrapper.effect.setColor3(bb, this._colors3[bb]);
            for (const bb in this._colors4) {
              const ub = this._colors4[bb];
              this._drawWrapper.effect.setFloat4(bb, ub.r, ub.g, ub.b, ub.a)
            }
            for (const bb in this._vectors2) this._drawWrapper.effect.setVector2(bb, this._vectors2[bb]);
            for (const bb in this._vectors3) this._drawWrapper.effect.setVector3(bb, this._vectors3[bb]);
            for (const bb in this._vectors4) this._drawWrapper.effect.setVector4(bb, this._vectors4[bb]);
            for (const bb in this._matrices) this._drawWrapper.effect.setMatrix(bb, this._matrices[bb])
          }
          if (!this._texture || !this._rtWrapper) return;
          hb._enableGPUDebugMarkers && hb._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Bb = hb.currentViewport;
          if (this.isCube)
            for (let Ob = 0; Ob < 6; Ob++) hb.bindFramebuffer(this._rtWrapper, Ob, void 0, void 0, !0), hb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Ob), this.autoClear && hb.clear(ub.clearColor, !0, !1, !1), hb.drawElementsType(Gb.e.TriangleFillMode, 0, 6), hb.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let bb = 1;
            this._rtWrapper.is3D ? bb = this._rtWrapper.depth : this._rtWrapper.is2DArray && (bb = this._rtWrapper.layers);
            for (let Bb = 0; Bb < bb; Bb++) {
              if (hb.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Bb), hb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== bb ? Bb / (bb - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Bb);
                for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb])
              }
              this.autoClear && hb.clear(ub.clearColor, !0, !1, !1), hb.drawElementsType(Gb.e.TriangleFillMode, 0, 6), hb.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Bb && hb.setViewport(Bb), this.isCube && hb.generateMipMapsForCubemap(this._texture, !0), hb._enableGPUDebugMarkers && hb._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const ub = this.getSize(),
            hb = new bb(this.name, ub.width, this._fragment, this.ZN(), this._fallbackTexture, this._generateMipMaps);
          return hb.hasAlpha = this.hasAlpha, hb.level = this.level, hb.coordinatesMode = this.coordinatesMode, hb
        }
        dispose() {
          const bb = this.ZN();
          if (!bb) return;
          const ub = bb.proceduralTextures.indexOf(this);
          ub >= 0 && bb.proceduralTextures.splice(ub, 1);
          const hb = this._vertexBuffers[mb.i.PositionKind];
          hb && (hb.dispose(), this._vertexBuffers[mb.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yb[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Db.K)()], Bb = [(0, Db.K)()], Ob = [(0, Db.K)()], Ub = [(0, Db.K)()], Lb = [(0, Db.K)()], (0, nb.h)(bb, null, Lb, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: bb => "refreshRate" in bb,
            get: bb => bb.refreshRate
          },
          metadata: hb
        }, null, Sb), (0, nb.h)(null, null, ub, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: hb
        }, ab, Hb), (0, nb.h)(null, null, Bb, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: bb => "autoClear" in bb,
            get: bb => bb.autoClear,
            set: (bb, ub) => {
              bb.autoClear = ub
            }
          },
          metadata: hb
        }, wb, Zb), (0, nb.h)(null, null, Ob, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: bb => "_generateMipMaps" in bb,
            get: bb => bb._generateMipMaps,
            set: (bb, ub) => {
              bb._generateMipMaps = ub
            }
          },
          metadata: hb
        }, Xb, ob), (0, nb.h)(null, null, Ub, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: bb => "_size" in bb,
            get: bb => bb._size,
            set: (bb, ub) => {
              bb._size = ub
            }
          },
          metadata: hb
        }, Ab, lb), hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hb
        })
      })(), bb
    })();

    function Oh(bb) {
      return "texture" in bb
    }

    function Gh(bb) {
      return "value" in bb
    }
    async function Uh(bb, ub, Bb) {
      const Ob = [ub.red, ub.green, ub.blue, ub.alpha],
        Gb = [],
        Ub = [];
      for (let hb = 0; hb < 4; hb++) {
        const bb = Ob[hb];
        if (bb)
          if (Oh(bb)) {
            if (bb.sourceChannel < 0 || bb.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let ub = Gb.indexOf(bb.texture); - 1 === ub && (ub = Gb.length, Gb.push(bb.texture)), Ub[hb] = ub
          } else {
            if (!Gh(bb)) throw new Error("Invalid channel input configuration");
            if (bb.value < 0 || bb.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Ub[hb] = -1
          }
        else Ub[hb] = -1
      }
      let Lb = ub.outputSize;
      if (!Lb && Gb.length > 0) {
        let bb = 0;
        for (const ub of Gb) {
          const hb = ub.getSize(),
            Bb = Math.max(hb.width, hb.height);
          Bb > bb && (bb = Bb, Lb = hb.width === hb.height ? bb : hb)
        }
      }
      Lb = Lb || 512;
      const Yb = [],
        Sb = new Set;
      for (let hb = 0; hb < 4; hb++) {
        const bb = Ob[hb],
          ub = ["RED", "GREEN", "BLUE", "ALPHA"][hb];
        if (bb && Oh(bb)) {
          Yb.push(`${ub}_FROM_TEXTURE`);
          const bb = Ub[hb];
          Sb.add(bb)
        }
      }
      Sb.forEach((bb => {
        Yb.push(`USE_TEXTURE${bb}`)
      }));
      const ab = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Bb.UX().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Bb.UX().isWebGPU ? await Promise.all([hb.e(380).then((() => hb(61272)))]) : await Promise.all([hb.e(381).then((() => hb(61278)))])
          },
          skipSceneRegistration: !0
        },
        Hb = new Bh(bb, Lb, "textureMerger", Bb, ab);
      Hb.refreshRate = -1, Hb.defines = Yb.length > 0 ? "#define " + Yb.join("\n#define ") + "\n" : "";
      for (let hb = 0; hb < Gb.length; hb++) wb = Gb[hb], (Zb = Hb).uOffset = wb.uOffset, Zb.vOffset = wb.vOffset, Zb.uScale = wb.uScale, Zb.vScale = wb.vScale, Zb.uAng = wb.uAng, Zb.vAng = wb.vAng, Zb.wAng = wb.wAng, Zb.uRotationCenter = wb.uRotationCenter, Zb.vRotationCenter = wb.vRotationCenter, Hb.setTexture(`inputTexture${hb}`, Gb[hb]);
      var wb, Zb;
      for (let hb = 0; hb < 4; hb++) {
        const bb = Ob[hb],
          ub = ["red", "green", "blue", "alpha"][hb];
        if (bb && Oh(bb)) {
          const Bb = Ub[hb];
          Hb.setInt(`${ub}TextureIndex`, Bb), Hb.setInt(`${ub}SourceChannel`, bb.sourceChannel)
        } else {
          let Bb;
          Bb = bb && Gh(bb) ? bb.value : 3 === hb ? 1 : 0, Hb.setFloat(`${ub}ConstantValue`, Bb)
        }
      }
      return await new Promise(((bb, ub) => {
        Hb.executeWhenReady((() => {
          try {
            Hb.render(), bb(Hb)
          } catch (hb) {
            ub(hb instanceof Error ? hb : new Error(String(hb)))
          }
        }))
      }))
    }

    function Lh(bb, ub) {
      return {
        texture: bb,
        sourceChannel: ub
      }
    }

    function Yh(bb) {
      return {
        value: bb
      }
    }

    function Sh(bb, ub, hb, Bb) {
      return {
        red: bb,
        green: ub,
        blue: hb,
        alpha: Bb
      }
    }
    var ah = hb(39280),
      Hh = hb(39382),
      wh = hb(36739),
      Zh = hb(39450),
      Xh = hb(39366);
    class ph {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class oh extends ah.d {
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
        return !!this._options?.enableMultiview || this.NX > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ph;
        super(null), void 0 === bb.deterministicLockstep && (bb.deterministicLockstep = !1), void 0 !== bb.timeStep && (this._timeStep = bb.timeStep), void 0 === bb.lockstepMaxSteps && (bb.lockstepMaxSteps = 4), this._options = bb, wh.d.SetMatrixPrecision(!!bb.useHighPrecisionMatrix), this._caps = {
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
        }, bb.enableMultiview && (this._caps.multiview = {
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
        }, bb.renderingCanvas && (this._renderingCanvas = bb.renderingCanvas), xb.b.Log(`Babylon.js v${ah.d.Version} - Null engine`);
        const ub = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (ub.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (ub.Blob = function() {})
      }
      createVertexBuffer(bb) {
        const ub = new Hh.e;
        return ub.references = 1, ub
      }
      createIndexBuffer(bb) {
        const ub = new Hh.e;
        return ub.references = 1, ub
      }
      clear(bb, ub, hb) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(bb, ub, hb) {
        this._cachedViewport = bb
      }
      createUniformBuffer(bb) {
        const ub = new Hh.e;
        return ub.references = 1, ub.LH = bb instanceof Array ? bb.length * Float32Array.BYTES_PER_ELEMENT : bb.byteLength, ub
      }
      createDynamicUniformBuffer(bb) {
        return this.createUniformBuffer(bb)
      }
      updateUniformBuffer(bb, ub, hb, Bb) {}
      bindUniformBufferBase(bb, ub, hb) {}
      bindUniformBlock(bb, ub, hb) {}
      createShaderProgram(bb, ub, hb, Bb, Ob) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(bb, ub) {
        return []
      }
      getAttributes(bb, ub) {
        return []
      }
      bindSamplers(bb) {
        this._currentEffect = null
      }
      enableEffect(bb) {
        bb = null !== bb && (0, Xh.b)(bb) ? bb.effect : bb, this._currentEffect = bb, bb && (bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setStateCullFaceType(bb, ub) {}
      setState(bb) {}
      setIntArray(bb, ub) {
        return !0
      }
      setIntArray2(bb, ub) {
        return !0
      }
      setIntArray3(bb, ub) {
        return !0
      }
      setIntArray4(bb, ub) {
        return !0
      }
      setFloatArray(bb, ub) {
        return !0
      }
      setFloatArray2(bb, ub) {
        return !0
      }
      setFloatArray3(bb, ub) {
        return !0
      }
      setFloatArray4(bb, ub) {
        return !0
      }
      setArray(bb, ub) {
        return !0
      }
      setArray2(bb, ub) {
        return !0
      }
      setArray3(bb, ub) {
        return !0
      }
      setArray4(bb, ub) {
        return !0
      }
      setMatrices(bb, ub) {
        return !0
      }
      setMatrix3x3(bb, ub) {
        return !0
      }
      setMatrix2x2(bb, ub) {
        return !0
      }
      setFloat(bb, ub) {
        return !0
      }
      setFloat2(bb, ub, hb) {
        return !0
      }
      setFloat3(bb, ub, hb, Bb) {
        return !0
      }
      setBool(bb, ub) {
        return !0
      }
      setFloat4(bb, ub, hb, Bb, Ob) {
        return !0
      }
      setAlphaMode(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[hb] !== bb && (this.alphaState.setAlphaBlend(0 !== bb, 0), ub || this.setDepthWrite(0 === bb), this._alphaMode[hb] = bb)
      }
      bindBuffers(bb, ub, hb) {}
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, bb && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(bb, ub, hb, Bb) {}
      drawElementsType(bb, ub, hb, Bb) {}
      drawArraysType(bb, ub, hb, Bb) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(bb) {}
      createTexture(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Lb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Yb = new Du.b(this, 1),
          Sb = String(bb);
        return Yb.url = Sb, Yb.generateMipMaps = !ub, Yb.samplingMode = Ob, Yb.invertY = hb, Yb.baseWidth = this._options.textureSize, Yb.baseHeight = this._options.textureSize, Yb.width = this._options.textureSize, Yb.height = this._options.textureSize, Lb && (Yb.format = Lb), Ub && (Yb._buffer = Ub), Yb.isReady = !0, Gb && setTimeout((() => {
          Gb(Yb)
        })), this._internalTexturesCache.push(Yb), Yb
      }
      _createHardwareRenderTargetWrapper(bb, ub, hb) {
        const Bb = new Zh.d(bb, ub, hb, this);
        return this._renderTargetWrapperCache.push(Bb), Bb
      }
      createRenderTargetTexture(bb, ub) {
        const hb = this._createHardwareRenderTargetWrapper(!1, !1, bb),
          Bb = {};
        void 0 !== ub && "object" === typeof ub ? (Bb.generateMipMaps = ub.generateMipMaps, Bb.generateDepthBuffer = void 0 === ub.generateDepthBuffer || ub.generateDepthBuffer, Bb.generateStencilBuffer = Bb.generateDepthBuffer && ub.generateStencilBuffer, Bb.type = void 0 === ub.type ? 0 : ub.type, Bb.samplingMode = void 0 === ub.samplingMode ? 3 : ub.samplingMode) : (Bb.generateMipMaps = ub, Bb.generateDepthBuffer = !0, Bb.generateStencilBuffer = !1, Bb.type = 0, Bb.samplingMode = 3);
        const Ob = new Du.b(this, 5);
        hb.setTexture(Ob);
        const Gb = bb.width || bb,
          Ub = bb.height || bb;
        return hb._generateDepthBuffer = Bb.generateDepthBuffer, hb._generateStencilBuffer = !!Bb.generateStencilBuffer, Ob.baseWidth = Gb, Ob.baseHeight = Ub, Ob.width = Gb, Ob.height = Ub, Ob.isReady = !0, Ob.samples = 1, Ob.generateMipMaps = !!Bb.generateMipMaps, Ob.samplingMode = Bb.samplingMode, Ob.type = Bb.type, this._internalTexturesCache.push(Ob), hb
      }
      createMultiviewRenderTargetTexture(bb, ub) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const hb = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: bb,
            height: ub
          }),
          Bb = new Du.b(this, 5, !0);
        return Bb.baseWidth = bb, Bb.baseHeight = ub, Bb.width = bb, Bb.height = ub, Bb.isMultiview = !0, Bb.isReady = !0, Bb.format = 5, Bb.samples = 1, hb.setTextures(Bb), hb
      }
      bindMultiviewFramebuffer(bb) {
        this.bindFramebuffer(bb, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(bb, ub) {
        const hb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
          Bb = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...ub
          };
        Bb.generateStencilBuffer = Bb.generateDepthBuffer && Bb.generateStencilBuffer, (1 !== Bb.type || this._caps.textureFloatLinearFiltering) && (2 !== Bb.type || this._caps.textureHalfFloatLinearFiltering) || (Bb.samplingMode = 1), hb._generateDepthBuffer = Bb.generateDepthBuffer, hb._generateStencilBuffer = !!Bb.generateStencilBuffer;
        const Ob = new Du.b(this, 5);
        return Ob.baseWidth = bb, Ob.baseHeight = bb, Ob.width = bb, Ob.height = bb, Ob.isReady = !0, Ob.isCube = !0, Ob.samples = 1, Ob.generateMipMaps = !!Bb.generateMipMaps, Ob.samplingMode = Bb.samplingMode, Ob.type = Bb.type, this._internalTexturesCache.push(Ob), hb
      }
      updateTextureSamplingMode(bb, ub) {
        ub.samplingMode = bb
      }
      createRawTexture(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Sb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ab = new Du.b(this, 3);
        return ab.baseWidth = ub, ab.baseHeight = hb, ab.width = ub, ab.height = hb, ab.format = Bb, ab.generateMipMaps = Ob, ab.samplingMode = Ub, ab.invertY = Gb, ab._compression = Lb, ab.type = Yb, ab._useSRGBBuffer = Sb, this._doNotHandleContextLost || (ab._bufferView = bb), ab
      }
      updateRawTexture(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bb && (bb._bufferView = ub, bb.format = hb, bb.invertY = Bb, bb._compression = Ob, bb.type = Gb, bb._useSRGBBuffer = Ub)
      }
      bindFramebuffer(bb, ub, hb, Bb, Ob) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._currentFramebuffer = null, this._cachedViewport && !Ob && this.setViewport(this._cachedViewport, hb, Bb)
      }
      unBindFramebuffer(bb) {
        let ub = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, ub && ub(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(bb) {
        const ub = new Hh.e;
        return ub.references = 1, ub.LH = 1, ub
      }
      updateDynamicTexture(bb, ub, hb) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(bb) {}
      updateDynamicIndexBuffer(bb, ub) {}
      updateDynamicVertexBuffer(bb, ub, hb, Bb) {}
      _bindTextureDirectly(bb, ub) {
        return this._boundTexturesCache[this._activeChannel] !== ub && (this._boundTexturesCache[this._activeChannel] = ub, !0)
      }
      _bindTexture(bb, ub) {
        bb < 0 || this._bindTextureDirectly(0, ub)
      }
      _deleteBuffer(bb) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(bb) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(bb, ub, hb, Bb, Ob) {}
      _uploadDataToTextureDirectly(bb, ub) {}
      _uploadArrayBufferViewToTexture(bb, ub) {}
      _uploadImageToTexture(bb, ub) {}
    }
    hb(39508), hb(39538), hb(39499);
    async function Ah(bb) {
      const ub = bb.getInternalTexture();
      if (!ub || 1 !== ub.source) return null;
      if (ub.invertY) {
        const ub = bb.ZN()?.UX();
        if (!(ub instanceof oh)) return null
      }
      const hb = ub._buffer;
      let Bb, Gb = bb.mimeType;
      try {
        hb ? ArrayBuffer.isView(hb) ? Bb = hb.buffer.slice(hb.byteOffset, hb.byteOffset + hb.byteLength) : hb instanceof ArrayBuffer ? Bb = hb : hb instanceof Blob ? (Bb = await hb.arrayBuffer(), Gb = hb.type || Gb) : "string" === typeof hb ? (Bb = await Ob.Tools.LoadFileAsync(hb), Gb = (0, Yb.c)(hb) || Gb) : "undefined" !== typeof HTMLImageElement && hb instanceof HTMLImageElement && (Bb = await Ob.Tools.LoadFileAsync(hb.src), Gb = (0, Yb.c)(hb.src) || Gb) : (Bb = await Ob.Tools.LoadFileAsync(ub.url), Gb = (0, Yb.c)(ub.url) || Gb)
      } catch {
        return null
      }
      if (Bb && !Gb && ub.url) {
        const bb = ub.url.match(/^data:([^;,]+)/);
        Gb = bb ? bb[1] : (0, Yb.c)(ub.url)
      }
      return Bb && Gb ? {
        data: Bb,
        mimeType: Gb
      } : null
    }
    const lh = 1e-6,
      Kh = new ob.Color3(.04, .04, .04),
      Wh = 1024,
      Ch = ob.Color3.White(),
      dh = ob.Color3.BlackReadOnly;

    function rh(bb) {
      switch (bb) {
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

    function jh(bb, ub, hb) {
      if (ub < Kh.r) return 0;
      const Bb = Kh.r,
        Ob = bb * hb / (1 - Kh.r) + ub - 2 * Kh.r,
        Gb = Ob * Ob - 4 * Bb * (Kh.r - ub);
      return Kb.Clamp((-Ob + Math.sqrt(Gb)) / (2 * Bb), 0, 1)
    }

    function nh(bb) {
      const ub = bb.diffuseColor.toLinearSpace(bb.ZN().UX().useExactSrgbConversions).scale(.5),
        hb = bb.alpha,
        Bb = function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Mb.m(0, 1),
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Mb.m(0, .1),
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Mb.m(0, .1),
            Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Mb.m(1300, .1);
          return function(bb, ub, hb, Bb, Ob) {
            return (1 - bb) * (1 - bb) * (1 - bb) * ub + 3 * (1 - bb) * (1 - bb) * bb * hb + 3 * (1 - bb) * bb * bb * Bb + bb * bb * bb * Ob
          }(Math.pow(bb / Ob.x, .333333), ub.y, hb.y, Bb.y, Ob.y)
        }(Kb.Clamp(bb.specularPower, 0, Wh));
      return {
        baseColorFactor: [ub.r, ub.g, ub.b, hb],
        metallicFactor: 0,
        roughnessFactor: Bb
      }
    }

    function Dh(bb, ub) {
      ub.needAlphaBlending() ? bb.alphaMode = "BLEND" : ub.needAlphaTesting() && (bb.alphaMode = "MASK", bb.alphaCutoff = ub.alphaCutOff)
    }

    function xh(bb, ub, hb) {
      const Bb = new Uint8Array(bb * ub * 4);
      for (let Ob = 0; Ob < Bb.length; Ob += 4) Bb[Ob] = Bb[Ob + 1] = Bb[Ob + 2] = Bb[Ob + 3] = 255;
      return db.b.CreateRGBATexture(Bb, bb, ub, hb)
    }

    function zh(bb) {
      if (bb instanceof Uint8Array) {
        const ub = bb.length,
          hb = new Float32Array(bb.length);
        for (let Bb = 0; Bb < ub; ++Bb) hb[Bb] = bb[Bb] / 255;
        return hb
      }
      if (bb instanceof Float32Array) return bb;
      throw new Error("Unsupported pixel format!")
    }
    class gh {
      constructor(bb) {
        this._exporter = bb, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(bb) {
        return bb ? this._textureMap.get(bb.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(bb, ub) {
        const hb = nh(bb),
          Bb = {
            name: bb.name
          };
        if (null == bb.backFaceCulling || bb.backFaceCulling || (bb.twoSidedLighting || Ob.Tools.Warn(bb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Bb.doubleSided = !0), ub) {
          const ub = [],
            Ob = bb.diffuseTexture;
          Ob && ub.push(this.exportTextureAsync(Ob).then((bb => {
            bb && (hb.baseColorTexture = bb)
          })));
          const Gb = bb.bumpTexture;
          Gb && ub.push(this.exportTextureAsync(Gb).then((bb => {
            bb && (Bb.normalTexture = bb, 1 !== Gb.level && (Bb.normalTexture.scale = Gb.level))
          })));
          const Ub = bb.emissiveTexture;
          Ub && (Bb.emissiveFactor = [1, 1, 1], ub.push(this.exportTextureAsync(Ub).then((bb => {
            bb && (Bb.emissiveTexture = bb)
          }))));
          const Lb = bb.ambientTexture;
          Lb && ub.push(this.exportTextureAsync(Lb).then((bb => {
            if (bb) {
              const ub = {
                index: bb.index
              };
              Bb.occlusionTexture = ub
            }
          }))), ub.length > 0 && (this._exporter._materialNeedsUVsSet.add(bb), await Promise.all(ub))
        }(bb.alpha < 1 || bb.opacityTexture) && (bb.alphaMode === rb.e.ALPHA_COMBINE ? Bb.alphaMode = "BLEND" : Ob.Tools.Warn(bb.name + ": glTF 2.0 does not support alpha mode: " + bb.alphaMode.toString())), bb.emissiveColor && !bb.emissiveColor.equalsWithEpsilon(dh, lh) && (Bb.emissiveFactor = bb.emissiveColor.ZBb()), Bb.pbrMetallicRoughness = hb, Dh(Bb, bb), await this._finishMaterialAsync(Bb, bb);
        const Gb = this._exporter._materials;
        return Gb.push(Bb), Gb.length - 1
      }
      async _finishMaterialAsync(bb, ub) {
        const hb = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", bb, ub),
          Bb = [];
        for (const Ob of hb) Bb.push(this.exportTextureAsync(Ob));
        await Promise.all(Bb), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", bb, ub)
      }
      _resizeTexturesToSameDimensions(bb, ub, hb) {
        const Bb = bb ? bb.getSize() : {
            width: 0,
            height: 0
          },
          Ob = ub ? ub.getSize() : {
            width: 0,
            height: 0
          };
        let Gb, Ub;
        return Bb.width < Ob.width ? (Gb = bb && bb instanceof Cb.c ? Wb.g.CreateResizedCopy(bb, Ob.width, Ob.height, !0) : xh(Ob.width, Ob.height, hb), Ub = ub) : Bb.width > Ob.width ? (Ub = ub && ub instanceof Cb.c ? Wb.g.CreateResizedCopy(ub, Bb.width, Bb.height, !0) : xh(Bb.width, Bb.height, hb), Gb = bb) : (Gb = bb, Ub = ub), {
          texture1: Gb,
          texture2: Ub
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(bb, ub, hb) {
        const Bb = new Array;
        if (!bb && !ub) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Ob = bb ? bb.ZN() : ub ? ub.ZN() : null;
        if (Ob) {
          const Gb = this._resizeTexturesToSameDimensions(bb, ub, Ob),
            Ub = Gb.texture1?.getSize();
          let Lb, Yb;
          const Sb = Ub.width,
            ab = Ub.height,
            Hb = await Gb.texture1.readPixels(),
            wb = await Gb.texture2.readPixels();
          if (!Hb) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Lb = zh(Hb), !wb) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Yb = zh(wb);
          const Zb = Yb.byteLength,
            Xb = new Uint8Array(Zb),
            pb = new Uint8Array(Zb),
            Ab = 4,
            lb = new ob.Color3(0, 0, 0);
          let Kb = 0,
            Wb = 0;
          for (let bb = 0; bb < ab; ++bb)
            for (let ub = 0; ub < Sb; ++ub) {
              const Bb = (Sb * bb + ub) * Ab,
                Ub = {
                  diffuseColor: new ob.Color3(Lb[Bb], Lb[Bb + 1], Lb[Bb + 2]).toLinearSpace(Ob.UX().useExactSrgbConversions).multiply(hb.diffuseColor),
                  specularColor: new ob.Color3(Yb[Bb], Yb[Bb + 1], Yb[Bb + 2]).toLinearSpace(Ob.UX().useExactSrgbConversions).multiply(hb.specularColor),
                  glossiness: Yb[Bb + 3] * hb.glossiness
                },
                ab = this._convertSpecularGlossinessToMetallicRoughness(Ub);
              lb.r = Math.max(lb.r, ab.baseColor.r), lb.g = Math.max(lb.g, ab.baseColor.g), lb.b = Math.max(lb.b, ab.baseColor.b), Kb = Math.max(Kb, ab.metallic), Wb = Math.max(Wb, ab.roughness), pb[Bb] = 255 * ab.baseColor.r, pb[Bb + 1] = 255 * ab.baseColor.g, pb[Bb + 2] = 255 * ab.baseColor.b, pb[Bb + 3] = Gb.texture1.hasAlpha ? 255 * Lb[Bb + 3] : 255, Xb[Bb] = 0, Xb[Bb + 1] = 255 * ab.roughness, Xb[Bb + 2] = 255 * ab.metallic, Xb[Bb + 3] = 255
            }
          const Cb = {
            baseColor: lb,
            metallic: Kb,
            roughness: Wb
          };
          let db = !1,
            rb = !1;
          for (let bb = 0; bb < ab; ++bb)
            for (let ub = 0; ub < Sb; ++ub) {
              const hb = (Sb * bb + ub) * Ab;
              pb[hb] /= Cb.baseColor.r > lh ? Cb.baseColor.r : 1, pb[hb + 1] /= Cb.baseColor.g > lh ? Cb.baseColor.g : 1, pb[hb + 2] /= Cb.baseColor.b > lh ? Cb.baseColor.b : 1;
              const Bb = ob.Color3.FromInts(pb[hb], pb[hb + 1], pb[hb + 2]).toGammaSpace(Ob.UX().useExactSrgbConversions);
              pb[hb] = 255 * Bb.r, pb[hb + 1] = 255 * Bb.g, pb[hb + 2] = 255 * Bb.b, Bb.equalsWithEpsilon(Ch, lh) || (rb = !0), Xb[hb + 1] /= Cb.roughness > lh ? Cb.roughness : 1, Xb[hb + 2] /= Cb.metallic > lh ? Cb.metallic : 1;
              ob.Color3.FromInts(255, Xb[hb + 1], Xb[hb + 2]).equalsWithEpsilon(Ch, lh) || (db = !0)
            }
          return db && Bb.push((0, jb.EncodeImageAsync)(Xb, Sb, ab).then((bb => {
            Cb.metallicRoughnessTextureData = bb
          }))), rb && Bb.push((0, jb.EncodeImageAsync)(pb, Sb, ab).then((bb => {
            Cb.baseColorTextureData = bb
          }))), await Promise.all(Bb).then((() => Cb))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(bb) {
        const ub = this._getPerceivedBrightness(bb.diffuseColor),
          hb = this._getPerceivedBrightness(bb.specularColor),
          Bb = 1 - this._getMaxComponent(bb.specularColor),
          Ob = jh(ub, hb, Bb),
          Gb = bb.diffuseColor.scale(Bb / (1 - Kh.r) / Math.max(1 - Ob, lh)),
          Ub = bb.specularColor.subtract(Kh.scale(1 - Ob)).scale(1 / Math.max(Ob, lh));
        let Lb = ob.Color3.Lerp(Gb, Ub, Ob * Ob);
        Lb = Lb.clampToRef(0, 1, Lb);
        return {
          baseColor: Lb,
          metallic: Ob,
          roughness: 1 - bb.glossiness
        }
      }
      _getPerceivedBrightness(bb) {
        return Math.sqrt(.299 * bb.r * bb.r + .587 * bb.g * bb.g + .114 * bb.b * bb.b)
      }
      _getMaxComponent(bb) {
        return Math.max(bb.r, Math.max(bb.g, bb.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        const Sb = [],
          ab = {
            baseColor: bb,
            metallic: ub,
            roughness: hb
          };
        if (Yb)
          if (Ub instanceof Qu) {
            if (Ub.geometryOpacityTexture) {
              const bb = Bb && Bb.getInternalTexture() ? Bb.getInternalTexture().uniqueId : 0,
                ub = Ub.geometryOpacityTexture && Ub.geometryOpacityTexture.getInternalTexture() ? Ub.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                hb = Number(`${bb}${ub}`),
                Ob = this._textureMap.get(hb);
              Ob ? Lb.baseColorTexture = Ob : Sb.push(Uh("baseColorOpacityTexture", Sh(Bb ? Lh(Bb, 0) : Yh(1), Bb ? Lh(Bb, 1) : Yh(1), Bb ? Lh(Bb, 2) : Yh(1), Lh(Ub.geometryOpacityTexture, 0)), Ub.ZN()).then((async bb => {
                const ub = await this.exportTextureAsync(bb, hb);
                ub && (Lb.baseColorTexture = ub)
              })))
            } else Bb && Sb.push(this.exportTextureAsync(Bb).then((bb => {
              bb && (Lb.baseColorTexture = bb)
            })));
            if (Ub._useMetallicFromMetallicTextureBlue && Ob) Sb.push(this.exportTextureAsync(Ob).then((bb => {
              bb && (Lb.metallicRoughnessTexture = bb)
            })));
            else if (Gb || Ob) {
              const bb = Ob && Ob.getInternalTexture() ? Ob.getInternalTexture().uniqueId : 0,
                ub = Gb && Gb.getInternalTexture() ? Gb.getInternalTexture().uniqueId : 0,
                hb = Number(`${bb}${ub}`),
                Bb = this._textureMap.get(hb);
              Bb ? Lb.metallicRoughnessTexture = Bb : Sb.push(Uh("MetalRoughTexture", Sh(Ub.ambientOcclusionTexture ? Lh(Ub.ambientOcclusionTexture, 0) : Yh(1), Gb ? Lh(Gb, 0) : Yh(1), Ob ? Lh(Ob, 0) : Yh(1)), Ub.ZN()).then((async bb => {
                const ub = await this.exportTextureAsync(bb, hb);
                ub && (Lb.metallicRoughnessTexture = ub)
              })))
            }
          } else Bb && Sb.push(this.exportTextureAsync(Bb).then((bb => {
            bb && (Lb.baseColorTexture = bb)
          }))), Ob && Sb.push(this.exportTextureAsync(Ob).then((bb => {
            bb && (Lb.metallicRoughnessTexture = bb)
          })));
        return Sb.length > 0 && (this._exporter._materialNeedsUVsSet.add(Ub), await Promise.all(Sb)), ab
      }
      _getTextureSampler(bb) {
        const ub = {};
        if (!bb || !(bb instanceof Cb.c)) return ub;
        const hb = this._getGLTFTextureWrapMode(bb.wrapU);
        10497 !== hb && (ub.wrapS = hb);
        const Bb = this._getGLTFTextureWrapMode(bb.wrapV);
        switch (10497 !== Bb && (ub.wrapT = Bb), bb.samplingMode) {
          case Cb.c.LINEAR_LINEAR:
            ub.magFilter = 9729, ub.minFilter = 9729;
            break;
          case Cb.c.LINEAR_NEAREST:
            ub.magFilter = 9729, ub.minFilter = 9728;
            break;
          case Cb.c.NEAREST_LINEAR:
            ub.magFilter = 9728, ub.minFilter = 9729;
            break;
          case Cb.c.NEAREST_LINEAR_MIPLINEAR:
            ub.magFilter = 9728, ub.minFilter = 9987;
            break;
          case Cb.c.NEAREST_NEAREST:
            ub.magFilter = 9728, ub.minFilter = 9728;
            break;
          case Cb.c.NEAREST_LINEAR_MIPNEAREST:
            ub.magFilter = 9728, ub.minFilter = 9985;
            break;
          case Cb.c.LINEAR_NEAREST_MIPNEAREST:
            ub.magFilter = 9729, ub.minFilter = 9984;
            break;
          case Cb.c.LINEAR_NEAREST_MIPLINEAR:
            ub.magFilter = 9729, ub.minFilter = 9986;
            break;
          case Cb.c.NEAREST_NEAREST_MIPLINEAR:
            ub.magFilter = 9728, ub.minFilter = 9986;
            break;
          case Cb.c.LINEAR_LINEAR_MIPLINEAR:
            ub.magFilter = 9729, ub.minFilter = 9987;
            break;
          case Cb.c.LINEAR_LINEAR_MIPNEAREST:
            ub.magFilter = 9729, ub.minFilter = 9985;
            break;
          case Cb.c.NEAREST_NEAREST_MIPNEAREST:
            ub.magFilter = 9728, ub.minFilter = 9984
        }
        return ub
      }
      _getGLTFTextureWrapMode(bb) {
        switch (bb) {
          case Cb.c.WRAP_ADDRESSMODE:
            return 10497;
          case Cb.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Cb.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Ob.Tools.Error(`Unsupported Texture Wrap Mode ${bb}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(bb, ub, hb) {
        const Bb = {
            diffuseColor: bb._albedoColor,
            specularColor: bb._reflectivityColor,
            glossiness: bb._microSurface
          },
          Ob = bb._albedoTexture,
          Gb = bb._reflectivityTexture,
          Ub = bb._useMicroSurfaceFromReflectivityMapAlpha;
        if (Gb && !Ub) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Ob || Gb) && hb) {
          this._exporter._materialNeedsUVsSet.add(bb);
          const hb = this._exportTextureSampler(Ob || Gb),
            Ub = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Ob, Gb, Bb),
            Lb = this._exporter._textures;
          if (Ub.baseColorTextureData) {
            const bb = await this._exportImageAsync(`baseColor${Lb.length}`, Ub.baseColorTextureData);
            ub.baseColorTexture = this._exportTextureInfo(bb, hb, Ob?.coordinatesIndex)
          }
          if (Ub.metallicRoughnessTextureData) {
            const bb = await this._exportImageAsync(`metallicRoughness${Lb.length}`, Ub.metallicRoughnessTextureData);
            ub.metallicRoughnessTexture = this._exportTextureInfo(bb, hb, Gb?.coordinatesIndex)
          }
          return Ub
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Bb)
      }
      async exportPBRMaterialAsync(bb, ub) {
        const hb = {},
          Bb = {
            name: bb.name
          },
          Ob = bb.isMetallicWorkflow();
        if (Ob) {
          const ub = bb._albedoColor,
            Bb = bb.alpha;
          ub && (hb.baseColorFactor = [ub.r, ub.g, ub.b, Bb])
        }
        const Gb = Ob ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb._albedoColor, bb._metallic, bb._roughness, bb._albedoTexture, bb._metallicTexture, bb._metallicTexture, bb, hb, ub) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(bb, hb, ub);
        await this._setMetallicRoughnessPbrMaterialAsync(Gb, bb, Bb, hb, ub), await this._finishMaterialAsync(Bb, bb);
        const Ub = this._exporter._materials;
        return Ub.push(Bb), Ub.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(bb, ub, hb, Bb, Gb) {
        if (Dh(hb, ub), bb.baseColor.equalsWithEpsilon(Ch, lh) && Kb.WithinEpsilon(ub.alpha, 1, lh) || (Bb.baseColorFactor = [bb.baseColor.r, bb.baseColor.g, bb.baseColor.b, ub.alpha]), null != bb.metallic && 1 !== bb.metallic && (Bb.metallicFactor = bb.metallic), null != bb.roughness && 1 !== bb.roughness && (Bb.roughnessFactor = bb.roughness), null == ub.backFaceCulling || ub.backFaceCulling || (ub._twoSidedLighting || Ob.Tools.Warn(ub.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), hb.doubleSided = !0), Gb) {
          const bb = [],
            Ob = ub instanceof du ? ub._bumpTexture : ub.geometryNormalTexture;
          Ob && bb.push(this.exportTextureAsync(Ob).then((bb => {
            bb && (hb.normalTexture = bb, 1 !== Ob.level && (hb.normalTexture.scale = Ob.level))
          })));
          const Gb = ub instanceof du ? ub._ambientTexture : ub.ambientOcclusionTexture;
          Gb && bb.push(new Promise((async bb => {
            if (ub instanceof Qu && Bb.metallicRoughnessTexture) {
              const ub = this._exportTextureSampler(Gb),
                hb = this._exporter._textures[Bb.metallicRoughnessTexture.index].source,
                Ob = this._exportTextureInfo(hb, ub, Gb.coordinatesIndex);
              return this._textureMap.set(Gb.uniqueId, Ob), this._exporter._extensionsPostExportTextures("exporter", Ob, Gb), bb(Ob)
            }
            return bb(await this.exportTextureAsync(Gb))
          })).then((async bb => {
            if (bb) {
              const Bb = {
                index: bb.index,
                texCoord: bb.texCoord,
                extensions: bb.extensions
              };
              hb.occlusionTexture = Bb, Bb.strength = ub instanceof du ? ub._ambientTextureStrength : ub.ambientOcclusionTexture.level
            }
          })));
          const Ub = ub instanceof du ? ub._emissiveTexture : ub.emissionColorTexture;
          Ub && bb.push(this.exportTextureAsync(Ub).then((bb => {
            bb && (hb.emissiveTexture = bb)
          }))), bb.length > 0 && (this._exporter._materialNeedsUVsSet.add(ub), await Promise.all(bb))
        }
        const Ub = ub instanceof du ? ub._emissiveColor : ub.emissionColor;
        Ub.equalsWithEpsilon(dh, lh) || (hb.emissiveFactor = Ub.ZBb()), hb.pbrMetallicRoughness = Bb
      }
      async exportOpenPBRMaterialAsync(bb, ub) {
        const hb = {},
          Bb = {
            name: bb.name
          },
          Ob = bb.baseColor,
          Gb = bb.geometryOpacity;
        Ob && (hb.baseColorFactor = [Ob.r, Ob.g, Ob.b, Gb]);
        const Ub = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb.baseColor, bb.baseMetalness, bb.specularRoughness, bb.baseColorTexture, bb.baseMetalnessTexture, bb.specularRoughnessTexture, bb, hb, ub);
        await this._setMetallicRoughnessPbrMaterialAsync(Ub, bb, Bb, hb, ub), await this._finishMaterialAsync(Bb, bb);
        const Lb = this._exporter._materials;
        return Lb.push(Bb), Lb.length - 1
      }
      async exportTextureAsync(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = this._textureMap.get(ub ?? bb.uniqueId);
        if (hb) return hb;
        const Bb = this._exportTextureSampler(bb),
          Ob = await this._exportTextureImageAsync(bb);
        return hb = this._exportTextureInfo(Ob, Bb, bb.coordinatesIndex), this._textureMap.set(ub ?? bb.uniqueId, hb), this._exporter._extensionsPostExportTextures("exporter", hb, bb), hb
      }
      async _exportTextureImageAsync(bb) {
        const ub = bb.mimeType ?? "none",
          hb = this._internalTextureToImage,
          Bb = bb.getInternalTexture().uniqueId;
        hb[Bb] = hb[Bb] || {};
        let Gb = hb[Bb][ub];
        return void 0 === Gb && (Gb = (async () => {
          const hb = await Ah(bb);
          if (hb && rh(hb.mimeType) && ("none" === ub || hb.mimeType === ub)) return await this._exportImageAsync(bb.name, new Blob([hb.data], {
            type: hb.mimeType
          }));
          let Bb = "image/png";
          "none" !== ub && (rh(ub) ? Bb = ub : (Bb = "image/png", Ob.Tools.Warn(`Unsupported media type: ${ub}. Exporting texture as PNG.`)));
          const Gb = bb.getSize(),
            Ub = await (0, Wb.e)(bb),
            Lb = await (0, jb.EncodeImageAsync)(Ub, Gb.width, Gb.height, Bb);
          return await this._exportImageAsync(bb.name, Lb)
        })(), hb[Bb][ub] = Gb), await Gb
      }
      async _exportImageAsync(bb, ub) {
        const hb = this._exporter._images;
        let Bb;
        if (this._exporter._shouldUseGlb) {
          Bb = {
            name: bb,
            mimeType: ub.type,
            bufferView: void 0
          };
          const hb = await ub.arrayBuffer(),
            Ob = this._exporter._bufferManager.createBufferView(new Uint8Array(hb));
          this._exporter._bufferManager.setBufferView(Bb, Ob)
        } else {
          const Gb = bb.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Ub = function(bb) {
              switch (bb) {
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
            }(ub.type);
          let Lb = Gb + Ub;
          hb.some((bb => bb.uri === Lb)) && (Lb = `${Gb}_${Ob.Tools.RandomId()}${Ub}`), Bb = {
            name: bb,
            uri: Lb
          }, this._exporter._imageData[Lb] = ub
        }
        return hb.push(Bb), hb.length - 1
      }
      _exportTextureInfo(bb, ub, hb) {
        const Bb = this._exporter._textures;
        let Ob = Bb.findIndex((hb => hb.sampler == ub && hb.source === bb)); - 1 === Ob && (Ob = Bb.length, Bb.push({
          source: bb,
          sampler: ub
        }));
        const Gb = {
          index: Ob
        };
        return hb && (Gb.texCoord = hb), Gb
      }
      _exportTextureSampler(bb) {
        const ub = this._getTextureSampler(bb),
          hb = this._exporter._samplers,
          Bb = hb.findIndex((bb => bb.minFilter === ub.minFilter && bb.magFilter === ub.magFilter && bb.wrapS === ub.wrapS && bb.wrapT === ub.wrapT));
        return -1 !== Bb ? Bb : (hb.push(ub), hb.length - 1)
      }
    }
    var ih = hb(39533),
      vh = hb(39663);
    (0, vh.c)();
    var th = hb(36734);
    const Jh = Bb.Matrix.Compose(new Bb.YX(-1, 1, 1), Bb.Quaternion.Identity(), Bb.YX.Zero());

    function eh(bb, ub) {
      if (!(bb instanceof Hb.d)) return !1;
      if (ub) {
        if (!bb.getWorldMatrix().equalsWithEpsilon(Bb.Matrix.IdentityReadOnly, th.b)) return !1
      } else {
        if (!bb.getWorldMatrix().multiplyToRef(Jh, Bb.TmpVectors.Matrix[0]).equalsWithEpsilon(Bb.Matrix.IdentityReadOnly, th.b)) return !1
      }
      return !(bb instanceof wb.b && bb.geometry)
    }
    const Nh = Bb.YX.ZeroReadOnly,
      sh = Bb.Quaternion.Identity(),
      Mh = Bb.YX.OneReadOnly,
      mh = new Bb.YX(-1, 1, 1);

    function Ih(bb, ub) {
      const {
        byteOffset: hb,
        byteStride: Bb,
        type: Ob,
        normalized: Gb
      } = bb, Ub = bb.getSize(), Lb = ub.reduce(((bb, ub) => ub.getTotalVertices() > bb ? ub.getTotalVertices() : bb), -Number.MAX_VALUE);
      return {
        byteOffset: hb,
        byteStride: Bb,
        componentCount: Ub,
        type: Ob,
        count: Lb * Ub,
        normalized: Gb,
        totalVertices: Lb,
        kind: bb.getKind()
      }
    }

    function Ph(bb) {
      switch (bb) {
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

    function qh(bb) {
      switch (bb) {
        case ab.e.PositionKind:
        case ab.e.NormalKind:
        case ab.e.TangentKind:
        case ab.e.ColorKind:
        case ab.e.MatricesIndicesKind:
        case ab.e.MatricesIndicesExtraKind:
        case ab.e.MatricesWeightsKind:
        case ab.e.MatricesWeightsExtraKind:
        case ab.e.UVKind:
        case ab.e.UV2Kind:
        case ab.e.UV3Kind:
        case ab.e.UV4Kind:
        case ab.e.UV5Kind:
        case ab.e.UV6Kind:
          return !0
      }
      return !1
    }

    function Eh(bb) {
      const ub = Math.sqrt(bb.x * bb.x + bb.y * bb.y + bb.z * bb.z);
      ub > 0 && (bb.x /= ub, bb.y /= ub, bb.z /= ub)
    }

    function yh(bb) {
      return bb.x *= -1, bb
    }

    function Vh(bb) {
      if (bb.x * bb.x + bb.y * bb.y > .5) {
        const ub = Math.abs(bb.x),
          hb = Math.abs(bb.y);
        if (ub > hb) {
          const hb = Math.sign(bb.x);
          bb.x = ub, bb.y *= -hb, bb.z *= -hb, bb.w *= hb
        } else {
          const ub = Math.sign(bb.y);
          bb.x *= -ub, bb.y = hb, bb.z *= ub, bb.w *= -ub
        }
      } else {
        const ub = Math.abs(bb.z),
          hb = Math.abs(bb.w);
        if (ub > hb) {
          const hb = Math.sign(bb.z);
          bb.x *= -hb, bb.y *= hb, bb.z = ub, bb.w *= -hb
        } else {
          const ub = Math.sign(bb.w);
          bb.x *= ub, bb.y *= -ub, bb.z *= -ub, bb.w = hb
        }
      }
      return bb
    }

    function Fh(bb) {
      bb.M_(-bb.z, bb.w, bb.x, -bb.y)
    }

    function fh(bb, ub) {
      const hb = Bb.YX.FromArrayToRef(ub.translation || [0, 0, 0], 0, Bb.TmpVectors.YX[0]),
        Ob = Bb.Quaternion.FromArrayToRef(ub.rotation || [0, 0, 0, 1], 0, Bb.TmpVectors.Quaternion[0]),
        Gb = Bb.Matrix.ComposeToRef(Mh, Ob, hb, Bb.TmpVectors.Matrix[0]),
        Ub = Bb.YX.FromArrayToRef(bb.translation || [0, 0, 0], 0, Bb.TmpVectors.YX[2]),
        Lb = Bb.Quaternion.FromArrayToRef(bb.rotation || [0, 0, 0, 1], 0, Bb.TmpVectors.Quaternion[1]),
        Yb = Bb.Matrix.ComposeToRef(Mh, Lb, Ub, Bb.TmpVectors.Matrix[1]);
      Gb.multiplyToRef(Yb, Yb), Yb.decompose(void 0, Ob, hb), hb.equalsWithEpsilon(Nh, th.b) ? delete ub.translation : ub.translation = hb.ZBb(), Ob.equalsWithEpsilon(sh, th.b) ? delete ub.rotation : ub.rotation = Ob.ZBb(), ub.scale && delete ub.scale
    }

    function kh(bb, ub) {
      if (!(ub instanceof Hb.d)) return !1;
      if (!(1 === ub.getChildren().length && 0 === bb.getChildren().length && bb.parent === ub)) return !1;
      const hb = bb.ZN(),
        Bb = bb instanceof vh.d && !hb.useRightHandedSystem ? mh : Mh;
      return !!ub.pa.equalsWithEpsilon(Bb, th.b) || (xb.b.Warn(`Cannot collapse node ${bb.name} into parent node ${ub.name} with modified scaling.`), !1)
    }

    function Th(bb) {
      if (bb instanceof Array) {
        const ub = new Float32Array(bb);
        return new Uint8Array(ub.buffer, ub.byteOffset, ub.byteLength)
      }
      return ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb)
    }

    function ch(bb, ub) {
      for (const [hb, Bb] of Object.entries(bb)) {
        const Ob = ub[hb];
        (Array.isArray(Bb) && Array.isArray(Ob) && Qh(Bb, Ob) || Bb === Ob) && delete bb[hb]
      }
      return bb
    }

    function Qh(bb, ub) {
      return bb.length === ub.length && bb.every(((bb, hb) => bb === ub[hb]))
    }
    const Rh = new Map([
      [Int8Array, (bb, ub, hb) => bb.setInt8(ub, hb)],
      [Uint8Array, (bb, ub, hb) => bb.setUint8(ub, hb)],
      [Uint8ClampedArray, (bb, ub, hb) => bb.setUint8(ub, hb)],
      [Int16Array, (bb, ub, hb) => bb.setInt16(ub, hb, !0)],
      [Uint16Array, (bb, ub, hb) => bb.setUint16(ub, hb, !0)],
      [Int32Array, (bb, ub, hb) => bb.setInt32(ub, hb, !0)],
      [Uint32Array, (bb, ub, hb) => bb.setUint32(ub, hb, !0)],
      [Float32Array, (bb, ub, hb) => bb.setFloat32(ub, hb, !0)],
      [Float64Array, (bb, ub, hb) => bb.setFloat64(ub, hb, !0)]
    ]);
    class bB {
      writeTypedArray(bb) {
        this._checkGrowBuffer(bb.byteLength);
        const ub = Rh.get(bb.constructor);
        for (let hb = 0; hb < bb.length; hb++) ub(this._dataView, this._byteOffset, bb[hb]), this._byteOffset += bb.BYTES_PER_ELEMENT
      }
      constructor(bb) {
        this._data = new Uint8Array(bb), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(bb) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, bb), this._byteOffset++
      }
      writeInt8(bb) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, bb), this._byteOffset++
      }
      writeInt16(bb) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, bb, !0), this._byteOffset += 2
      }
      writeUInt16(bb) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, bb, !0), this._byteOffset += 2
      }
      writeInt32(bb) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeUInt32(bb) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeFloat32(bb) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeFloat64(bb) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, bb, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(bb) {
        const ub = this.byteOffset + bb;
        if (ub > this._data.byteLength) {
          const bb = new Uint8Array(2 * ub);
          bb.set(this._data), this._data = bb, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function uB(bb) {
      return bb % 4 === 0 ? 4 : bb % 2 === 0 ? 2 : 1
    }
    class hB {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(bb) {
        let ub = 0;
        this._bufferViewToData.forEach((bb => {
          ub += bb.byteLength
        }));
        const hb = new bB(ub),
          Bb = Array.from(this._bufferViewToData.keys()).sort(((bb, ub) => uB(ub.byteLength) - uB(bb.byteLength)));
        for (const Ob of Bb) {
          Ob.byteOffset = hb.byteOffset, bb.push(Ob);
          const ub = bb.length - 1,
            Bb = this.getPropertiesWithBufferView(Ob);
          for (const bb of Bb) bb.bufferView = ub;
          hb.writeTypedArray(this._bufferViewToData.get(Ob)), this._bufferViewToData.delete(Ob)
        }
        return hb.getOutputData()
      }
      createBufferView(bb, ub) {
        const hb = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: bb.byteLength,
          byteStride: ub
        };
        return this._bufferViewToData.set(hb, bb), hb
      }
      createAccessor(bb, ub, hb, Bb, Ob, Gb, Ub) {
        this._verifyBufferView(bb);
        const Lb = {
          bufferView: void 0,
          componentType: hb,
          count: Bb,
          type: ub,
          min: Gb?.min,
          max: Gb?.max,
          normalized: Ub,
          byteOffset: Ob
        };
        return this.setBufferView(Lb, bb), this._accessorToBufferView.set(Lb, bb), Lb
      }
      setBufferView(bb, ub) {
        this._verifyBufferView(ub);
        this.getPropertiesWithBufferView(ub).push(bb)
      }
      removeBufferView(bb) {
        const ub = this.getPropertiesWithBufferView(bb);
        for (const hb of ub) void 0 !== hb.bufferView && delete hb.bufferView;
        this._bufferViewToData.delete(bb), this._bufferViewToProperties.delete(bb), this._accessorToBufferView.forEach(((ub, hb) => {
          ub === bb && (void 0 !== hb.byteOffset && delete hb.byteOffset, this._accessorToBufferView.delete(hb))
        }))
      }
      getBufferView(bb) {
        const ub = this._accessorToBufferView.get(bb);
        return this._verifyBufferView(ub), ub
      }
      getPropertiesWithBufferView(bb) {
        return this._verifyBufferView(bb), this._bufferViewToProperties.set(bb, this._bufferViewToProperties.get(bb) ?? []), this._bufferViewToProperties.get(bb)
      }
      getData(bb) {
        return this._verifyBufferView(bb), this._bufferViewToData.get(bb)
      }
      _verifyBufferView(bb) {
        if (void 0 === bb || !this._bufferViewToData.has(bb)) throw new Error(`BufferView ${bb} not found in BufferManager.`)
      }
    }
    var BB = hb(39666);
    (0, BB.e)();
    var OB = hb(39900);
    (0, OB.f)();
    var GB = hb(39705),
      UB = hb(40538);
    (0, UB.f)();
    let LB = (() => {
      var bb;
      let ub, hb, Bb = [],
        Ob = [],
        Gb = [],
        Ub = [];
      return bb = class {
        get influence() {
          return this._influence
        }
        set influence(bb) {
          if (this._influence === bb) return;
          const ub = this._influence;
          this._influence = bb, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === ub || 0 === bb)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(bb) {
          this._animationPropertiesOverride = bb
        }
        constructor(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = bb, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new bh.e, this._onDataLayoutChanged = new bh.e, this.id = (0, nb.k)(this, Bb, void 0), this.morphTargetManager = ((0, nb.k)(this, Ob), (0, nb.k)(this, Gb, null)), this._animationPropertiesOverride = ((0, nb.k)(this, Ub), null), this.id = bb, this.morphTargetManager = Lb, this._scene = hb || pb.b.LastCreatedScene, this.influence = ub, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        NUb(bb) {
          const ub = this.hasPositions;
          this._positions = bb, ub !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(bb) {
          const ub = this.hasNormals;
          this._normals = bb, ub !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(bb) {
          const ub = this.hasTangents;
          this._tangents = bb, ub !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(bb) {
          const ub = this.hasUVs;
          this._uvs = bb, ub !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(bb) {
          const ub = this.hasUV2s;
          this._uv2s = bb, ub !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(bb) {
          const ub = this.hasColors;
          this._colors = bb, ub !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const ub = ru.c.Clone((() => new bb(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return ub._positions = this._positions, ub._normals = this._normals, ub._tangents = this._tangents, ub._uvs = this._uvs, ub._uv2s = this._uv2s, ub._colors = this._colors, ub
        }
        serialize() {
          const bb = {};
          return bb.name = this.name, bb.influence = this.influence, null != this.id && (bb.id = this.id), bb.uniqueId = this.uniqueId, bb.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (bb.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (bb.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (bb.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (bb.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (bb.colors = Array.prototype.slice.call(this.getColors())), ru.c.AppendSerializedAnimations(this, bb), bb
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(ub, hb) {
          let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Ob = new bb(ub.name, ub.influence, hb, Bb);
          if (Ob.NUb(ub.positions), null != ub.id && (Ob.id = ub.id), ub.normals && Ob.setNormals(ub.normals), ub.tangents && Ob.setTangents(ub.tangents), ub.uvs && Ob.setUVs(ub.uvs), ub.uv2s && Ob.setUV2s(ub.uv2s), ub.colors && Ob.setColors(ub.colors), ub.animations) {
            for (let bb = 0; bb < ub.animations.length; bb++) {
              const hb = ub.animations[bb],
                Bb = (0, Pu.d)("BABYLON.Animation");
              Bb && Ob.animations.push(Bb.Parse(hb))
            }
            ub.autoAnimate && hb && hb.beginAnimation(Ob, ub.autoAnimateFrom, ub.autoAnimateTo, ub.autoAnimateLoop, ub.autoAnimateSpeed || 1)
          }
          return Ob
        }
        static FromMesh(ub, hb, Bb) {
          hb || (hb = ub.name);
          const Ob = new bb(hb, Bb, ub.ZN(), ub.morphTargetManager);
          return Ob.NUb(ub.getVerticesData(mb.i.PositionKind)), ub.isVerticesDataPresent(mb.i.NormalKind) && Ob.setNormals(ub.getVerticesData(mb.i.NormalKind)), ub.isVerticesDataPresent(mb.i.TangentKind) && Ob.setTangents(ub.getVerticesData(mb.i.TangentKind)), ub.isVerticesDataPresent(mb.i.UVKind) && Ob.setUVs(ub.getVerticesData(mb.i.UVKind)), ub.isVerticesDataPresent(mb.i.UV2Kind) && Ob.setUV2s(ub.getVerticesData(mb.i.UV2Kind)), ub.isVerticesDataPresent(mb.i.ColorKind) && Ob.setColors(ub.getVerticesData(mb.i.ColorKind)), Ob
        }
      }, (() => {
        const Lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Db.K)()], hb = [(0, Db.K)()], (0, nb.h)(null, null, ub, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ub) => {
              bb.id = ub
            }
          },
          metadata: Lb
        }, Bb, Ob), (0, nb.h)(null, null, hb, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: bb => "morphTargetManager" in bb,
            get: bb => bb.morphTargetManager,
            set: (bb, ub) => {
              bb.morphTargetManager = ub
            }
          },
          metadata: Lb
        }, Gb, Ub), Lb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Lb
        })
      })(), bb
    })();
    var YB, SB = hb(40604),
      aB = hb(39700);
    ! function(bb) {
      bb[bb.INTANGENT = 0] = "INTANGENT", bb[bb.OUTTANGENT = 1] = "OUTTANGENT"
    }(YB || (YB = {}));
    class HB {
      static _IsTransformable(bb) {
        return bb && (bb instanceof Hb.d || bb instanceof BB.d || bb instanceof aB.b)
      }
      static _CreateNodeAnimation(bb, ub, hb, Bb, Gb) {
        if (this._IsTransformable(bb)) {
          const Ub = [],
            Lb = [],
            Yb = ub.getKeys(),
            Sb = HB._CalculateMinMaxKeyFrames(Yb),
            ab = HB._DeduceInterpolation(Yb, hb, Bb),
            Hb = ab.interpolationType,
            wb = ab.shouldBakeAnimation;
          if (wb ? HB._CreateBakedAnimation(bb, ub, hb, Sb.min, Sb.max, ub.framePerSecond, Gb, Ub, Lb, Sb, Bb) : "LINEAR" === Hb || "STEP" === Hb ? HB._CreateLinearOrStepAnimation(bb, ub, hb, Ub, Lb, Bb) : "CUBICSPLINE" === Hb ? HB._CreateCubicSplineAnimation(bb, ub, hb, Ub, Lb, Bb) : HB._CreateBakedAnimation(bb, ub, hb, Sb.min, Sb.max, ub.framePerSecond, Gb, Ub, Lb, Sb, Bb), Ub.length && Lb.length) {
            return {
              inputs: Ub,
              outputs: Lb,
              samplerInterpolation: Hb,
              inputsMin: wb ? Sb.min : Ob.Tools.FloatRound(Sb.min / ub.framePerSecond),
              inputsMax: wb ? Sb.max : Ob.Tools.FloatRound(Sb.max / ub.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(bb) {
        let ub = null,
          hb = "VEC3",
          Bb = !1;
        const Gb = bb.targetProperty.split(".");
        switch (Gb[0]) {
          case "pa":
            ub = "scale";
            break;
          case "position":
            ub = "translation";
            break;
          case "rotation":
            hb = "VEC4", ub = "rotation";
            break;
          case "rotationQuaternion":
            hb = "VEC4", Bb = !0, ub = "rotation";
            break;
          case "influence":
            hb = "SCALAR", ub = "weights";
            break;
          default:
            Ob.Tools.Error(`Unsupported animatable property ${Gb[0]}`)
        }
        return ub ? {
          animationChannelTargetPath: ub,
          dataAccessorType: hb,
          useQuaternion: Bb
        } : (Ob.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        let Hb;
        if (HB._IsTransformable(bb) && bb.animations)
          for (const wb of bb.animations) {
            if (ab && !ab(wb)) continue;
            const Ob = HB._DeduceAnimationInfo(wb);
            Ob && (Hb = {
              name: wb.name,
              samplers: [],
              channels: []
            }, HB._AddAnimation(`${wb.name}`, wb.hasRunningRuntimeAnimations ? ub : Hb, bb, wb, Ob.dataAccessorType, Ob.animationChannelTargetPath, Bb, Gb, Ub, Lb, Ob.useQuaternion, Yb, Sb), Hb.samplers.length && Hb.channels.length && hb.push(Hb))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        let Hb;
        if (bb instanceof SB.b) {
          const Ob = bb.morphTargetManager;
          if (Ob)
            for (let wb = 0; wb < Ob.numTargets; ++wb) {
              const Zb = Ob.getTarget(wb);
              for (const Xb of Zb.animations) {
                if (ab && !ab(Xb)) continue;
                const Zb = new UB.d(`${Xb.name}`, "influence", Xb.framePerSecond, Xb.dataType, Xb.pb, Xb.enableBlending),
                  pb = [],
                  ob = Xb.getKeys();
                for (let bb = 0; bb < ob.length; ++bb) {
                  const ub = ob[bb];
                  for (let bb = 0; bb < Ob.numTargets; ++bb) bb == wb ? pb.push(ub) : pb.push({
                    frame: ub.frame,
                    value: 0
                  })
                }
                Zb.setKeys(pb, !0);
                const Ab = HB._DeduceAnimationInfo(Zb);
                Ab && (Hb = {
                  name: Zb.name,
                  samplers: [],
                  channels: []
                }, HB._AddAnimation(Xb.name, Xb.hasRunningRuntimeAnimations ? ub : Hb, bb, Zb, Ab.dataAccessorType, Ab.animationChannelTargetPath, Bb, Gb, Ub, Lb, Ab.useQuaternion, Yb, Sb, Ob.numTargets), Hb.samplers.length && Hb.channels.length && hb.push(Hb))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        let ab;
        if (bb.animationGroups) {
          const Hb = bb.animationGroups;
          for (const wb of Hb) {
            const Hb = new Map,
              Zb = new Map,
              Xb = new Set,
              pb = wb.to - wb.from;
            ab = {
              name: wb.name,
              channels: [],
              samplers: []
            };
            for (let ub = 0; ub < wb.targetedAnimations.length; ++ub) {
              const Sb = wb.targetedAnimations[ub],
                pb = Sb.target,
                ob = Sb.animation;
              if (Yb && !Yb(ob)) continue;
              const Ab = Lb.has(pb);
              if (this._IsTransformable(pb) || 1 === pb.length && this._IsTransformable(pb[0])) {
                const bb = HB._DeduceAnimationInfo(Sb.animation);
                if (bb) {
                  const ub = this._IsTransformable(pb) ? pb : this._IsTransformable(pb[0]) ? pb[0] : null;
                  ub && HB._AddAnimation(`${ob.name}`, ab, ub, ob, bb.dataAccessorType, bb.animationChannelTargetPath, hb, Bb, Ob, Gb, bb.useQuaternion, Ub, Ab)
                }
              } else if (pb instanceof LB || 1 === pb.length && pb[0] instanceof LB) {
                if (HB._DeduceAnimationInfo(Sb.animation)) {
                  const ub = pb instanceof LB ? pb : pb[0];
                  if (ub) {
                    const hb = bb.morphTargetManagers.find((bb => {
                      for (let hb = 0; hb < bb.numTargets; ++hb)
                        if (bb.getTarget(hb) === ub) return !0;
                      return !1
                    }));
                    if (hb) {
                      const Bb = bb.meshes.find((bb => bb.morphTargetManager === hb));
                      Bb && (Hb.has(Bb) || Hb.set(Bb, new Map), Hb.get(Bb)?.set(ub, ob), Xb.add(Bb), Zb.set(Bb, ob))
                    }
                  }
                }
              }
            }
            Xb.forEach((bb => {
              const ub = bb.morphTargetManager;
              let Lb = null;
              const Yb = [],
                Sb = Zb.get(bb).getKeys(),
                Xb = Sb.length;
              for (let hb = 0; hb < Xb; ++hb)
                for (let Bb = 0; Bb < ub.numTargets; ++Bb) {
                  const Ob = ub.getTarget(Bb),
                    Gb = Hb.get(bb);
                  if (Gb) {
                    const ub = Gb.get(Ob);
                    ub ? (Lb || (Lb = new UB.d(`${wb.name}_${bb.name}_MorphWeightAnimation`, "influence", ub.framePerSecond, UB.d.ANIMATIONTYPE_FLOAT, ub.pb, ub.enableBlending)), Yb.push(ub.getKeys()[hb])) : Yb.push({
                      frame: wb.from + pb / Xb * hb,
                      value: Ob.influence,
                      inTangent: Sb[0].inTangent ? 0 : void 0,
                      outTangent: Sb[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Lb.setKeys(Yb, !0);
              const ob = HB._DeduceAnimationInfo(Lb);
              ob && HB._AddAnimation(`${wb.name}_${bb.name}_MorphWeightAnimation`, ab, bb, Lb, ob.dataAccessorType, ob.animationChannelTargetPath, hb, Bb, Ob, Gb, ob.useQuaternion, Ub, !1, ub?.numTargets)
            })), ab.channels.length && ab.samplers.length && (Sb?.set(wb, ub.length), ub.push(ab))
          }
        }
      }
      static _AddAnimation(bb, ub, hb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb) {
        const pb = HB._CreateNodeAnimation(hb, Ob, Ub, Hb, wb);
        let ob, Ab, lb, Kb, Wb, Cb;
        if (pb) {
          if (Xb) {
            let bb, ub = 0;
            const hb = [];
            for (; pb.inputs.length > 0;) bb = pb.inputs.shift(), ub % Xb == 0 && hb.push(bb), ub++;
            pb.inputs = hb
          }
          const bb = Lb.get(hb),
            Ob = new Float32Array(pb.inputs);
          ob = Yb.createBufferView(Ob), Ab = Yb.createAccessor(ob, "SCALAR", 5126, pb.inputs.length, void 0, {
            min: [pb.inputsMin],
            max: [pb.inputsMax]
          }), ab.push(Ab), lb = ab.length - 1;
          const Sb = new Bb.Quaternion,
            Hb = new Bb.YX,
            wb = new Bb.YX,
            db = hb instanceof BB.d,
            rb = Ph(Gb),
            jb = new Float32Array(pb.outputs.length * rb);
          pb.outputs.forEach((function(bb, ub) {
            let hb = bb;
            switch (Ub) {
              case "translation":
                Zb && (Bb.YX.FromArrayToRef(bb, 0, wb), yh(wb), wb.toArray(hb));
                break;
              case "rotation":
                4 === bb.length ? Bb.Quaternion.FromArrayToRef(bb, 0, Sb) : (hb = new Array(4), Bb.YX.FromArrayToRef(bb, 0, Hb), Bb.Quaternion.FromEulerVectorToRef(Hb, Sb)), Zb && (Vh(Sb), db && Fh(Sb)), Sb.toArray(hb)
            }
            jb.set(hb, ub * rb)
          })), ob = Yb.createBufferView(jb), Ab = Yb.createAccessor(ob, Gb, 5126, pb.outputs.length), ab.push(Ab), Kb = ab.length - 1, Wb = {
            interpolation: pb.samplerInterpolation,
            input: lb,
            output: Kb
          }, ub.samplers.push(Wb), Cb = {
            sampler: ub.samplers.length - 1,
            target: {
              node: bb,
              path: Ub
            }
          }, ub.channels.push(Cb)
        }
      }
      static _CreateBakedAnimation(bb, ub, hb, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb) {
        let Zb;
        const Xb = Bb.Quaternion.Identity();
        let pb, ob, Ab, lb, Kb, Wb = null,
          Cb = null;
        Hb.min = Ob.Tools.FloatRound(Gb / Lb);
        const db = ub.getKeys();
        for (let Bb = 0, rb = db.length; Bb < rb; ++Bb) {
          if (ob = db[Bb], Bb + 1 < rb)
            if (Ab = db[Bb + 1], ob.value.equals && ob.value.equals(Ab.value) || ob.value === Ab.value) {
              if (0 !== Bb) continue;
              Kb = ob.frame
            } else Kb = Ab.frame;
          else {
            if (lb = db[Bb - 1], ob.value.equals && ob.value.equals(lb.value) || ob.value === lb.value) continue;
            Kb = Ub
          }
          if (Kb)
            for (let Bb = ob.frame; Bb <= Kb; Bb += Yb) {
              if (pb = Ob.Tools.FloatRound(Bb / Lb), pb === Wb) continue;
              Wb = pb, Cb = pb;
              const Gb = {
                key: 0,
                repeatCount: 0,
                pb: ub.pb
              };
              Zb = ub._interpolate(Bb, Gb), HB._SetInterpolatedValue(bb, Zb, pb, ub, hb, Xb, Sb, ab, wb)
            }
        }
        Cb && (Hb.max = Cb)
      }
      static _ConvertFactorToVector3OrQuaternion(bb, ub, hb, Gb, Ub) {
        const Lb = HB._GetBasePositionRotationOrScale(ub, Gb, Ub),
          Yb = hb.targetProperty.split("."),
          Sb = Yb ? Yb[1] : "",
          ab = Ub ? Bb.Quaternion.FromArray(Lb).normalize() : Bb.YX.FromArray(Lb);
        switch (Sb) {
          case "x":
          case "y":
          case "z":
            ab[Sb] = bb;
            break;
          case "w":
            ab.w = bb;
            break;
          default:
            Ob.Tools.Error(`glTFAnimation: Unsupported component name "${Sb}"!`)
        }
        return ab
      }
      static _SetInterpolatedValue(bb, ub, hb, Ob, Gb, Ub, Lb, Yb, Sb) {
        let ab;
        Lb.push(hb), "weights" !== Gb ? (Ob.dataType === UB.d.ANIMATIONTYPE_FLOAT && (ub = this._ConvertFactorToVector3OrQuaternion(ub, bb, Ob, Gb, Sb)), "rotation" === Gb ? (Sb ? Ub = ub : (ab = ub, Bb.Quaternion.RotationYawPitchRollToRef(ab.y, ab.x, ab.z, Ub)), Yb.push(Ub.ZBb())) : (ab = ub, Yb.push(ab.ZBb()))) : Yb.push([ub])
      }
      static _CreateLinearOrStepAnimation(bb, ub, hb, Bb, Ob, Gb) {
        for (const Ub of ub.getKeys()) Bb.push(Ub.frame / ub.framePerSecond), HB._AddKeyframeValue(Ub, ub, Ob, hb, bb, Gb)
      }
      static _CreateCubicSplineAnimation(bb, ub, hb, Bb, Ob, Gb) {
        ub.getKeys().forEach((function(Ub) {
          Bb.push(Ub.frame / ub.framePerSecond), HB._AddSplineTangent(YB.INTANGENT, Ob, hb, "CUBICSPLINE", Ub, Gb), HB._AddKeyframeValue(Ub, ub, Ob, hb, bb, Gb), HB._AddSplineTangent(YB.OUTTANGENT, Ob, hb, "CUBICSPLINE", Ub, Gb)
        }))
      }
      static _GetBasePositionRotationOrScale(bb, ub, hb) {
        let Ob;
        if ("rotation" === ub)
          if (hb) {
            Ob = (bb.rotationQuaternion ?? Bb.Quaternion.Identity()).ZBb()
          } else {
            Ob = (bb.rotation ?? Bb.YX.Zero()).ZBb()
          }
        else if ("translation" === ub) {
          Ob = (bb.position ?? Bb.YX.Zero()).ZBb()
        } else {
          Ob = (bb.pa ?? Bb.YX.One()).ZBb()
        }
        return Ob
      }
      static _AddKeyframeValue(bb, ub, hb, Gb, Ub, Lb) {
        let Yb;
        const Sb = ub.dataType;
        if (Sb === UB.d.ANIMATIONTYPE_VECTOR3) {
          let ub = bb.value.ZBb();
          if ("rotation" === Gb) {
            const bb = Bb.YX.FromArray(ub);
            ub = Bb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).ZBb()
          }
          hb.push(ub)
        } else if (Sb === UB.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Gb) hb.push([bb.value]);
          else if (Yb = this._ConvertFactorToVector3OrQuaternion(bb.value, Ub, ub, Gb, Lb), Yb) {
            if ("rotation" === Gb) {
              const bb = Lb ? Yb : Bb.Quaternion.RotationYawPitchRoll(Yb.y, Yb.x, Yb.z).normalize();
              hb.push(bb.ZBb())
            }
            hb.push(Yb.ZBb())
          }
        } else Sb === UB.d.ANIMATIONTYPE_QUATERNION ? hb.push(bb.value.normalize().ZBb()) : Ob.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(bb, ub, hb) {
        let Bb, Ob, Gb = !1;
        if ("rotation" === ub && !hb) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Ub = 0, Lb = bb.length; Ub < Lb; ++Ub)
          if (Ob = bb[Ub], Ob.inTangent || Ob.outTangent)
            if (Bb) {
              if ("CUBICSPLINE" !== Bb) {
                Bb = "LINEAR", Gb = !0;
                break
              }
            } else Bb = "CUBICSPLINE";
        else if (Bb) {
          if ("CUBICSPLINE" === Bb || Ob.interpolation && 1 === Ob.interpolation && "STEP" !== Bb) {
            Bb = "LINEAR", Gb = !0;
            break
          }
        } else Bb = Ob.interpolation && 1 === Ob.interpolation ? "STEP" : "LINEAR";
        return Bb || (Bb = "LINEAR"), {
          interpolationType: Bb,
          shouldBakeAnimation: Gb
        }
      }
      static _AddSplineTangent(bb, ub, hb, Ob, Gb, Ub) {
        let Lb;
        const Yb = bb === YB.INTANGENT ? Gb.inTangent : Gb.outTangent;
        if ("CUBICSPLINE" === Ob) {
          if ("rotation" === hb)
            if (Yb)
              if (Ub) Lb = Yb.ZBb();
              else {
                const bb = Yb;
                Lb = Bb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).ZBb()
              }
          else Lb = [0, 0, 0, 0];
          else Lb = "weights" === hb ? Yb ? [Yb] : [0] : Yb ? Yb.ZBb() : [0, 0, 0];
          ub.push(Lb)
        }
      }
      static _CalculateMinMaxKeyFrames(bb) {
        let ub = 1 / 0,
          hb = -1 / 0;
        return bb.forEach((function(bb) {
          ub = Math.min(ub, bb.frame), hb = Math.max(hb, bb.frame)
        })), {
          min: ub,
          max: hb
        }
      }
    }

    function wB(bb, ub, hb, Gb, Ub, Lb) {
      const Yb = {
          attributes: {},
          influence: bb.influence,
          name: bb.name
        },
        Sb = ub.geometry;
      if (!Sb) return Ob.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Yb;
      const Hb = Lb ? -1 : 1,
        wb = Bb.YX.Zero();
      let Zb, Xb;
      if (bb.hasPositions) {
        const Gb = bb.getPositions(),
          Lb = Sb.getVerticesData(ab.e.PositionKind);
        if (Lb) {
          const bb = new Float32Array(Lb.length),
            ub = [1 / 0, 1 / 0, 1 / 0],
            Ob = [-1 / 0, -1 / 0, -1 / 0];
          Xb = Lb.length / 3, Zb = 0;
          for (let hb = Zb; hb < Xb; ++hb) {
            const Ub = Bb.YX.FromArray(Lb, 3 * hb);
            Bb.YX.FromArray(Gb, 3 * hb).subtractToRef(Ub, wb), wb.x *= Hb, ub[0] = Math.min(ub[0], wb.x), Ob[0] = Math.max(Ob[0], wb.x), ub[1] = Math.min(ub[1], wb.y), Ob[1] = Math.max(Ob[1], wb.y), ub[2] = Math.min(ub[2], wb.z), Ob[2] = Math.max(Ob[2], wb.z), bb[3 * hb] = wb.x, bb[3 * hb + 1] = wb.y, bb[3 * hb + 2] = wb.z
          }
          const Sb = hb.createBufferView(bb, 12),
            ab = hb.createAccessor(Sb, "VEC3", 5126, Gb.length / 3, 0, {
              min: ub,
              max: Ob
            });
          Ub.push(ab), Yb.attributes.POSITION = Ub.length - 1
        } else Ob.Tools.Warn(`Morph target positions for mesh ${ub.name} were not exported. Mesh does not have position vertex data`)
      }
      if (bb.hasNormals) {
        const Gb = bb.getNormals(),
          Lb = Sb.getVerticesData(ab.e.NormalKind);
        if (Lb) {
          const bb = new Float32Array(Lb.length);
          Xb = Lb.length / 3, Zb = 0;
          for (let hb = Zb; hb < Xb; ++hb) {
            const ub = Bb.YX.FromArray(Lb, 3 * hb).normalize();
            Bb.YX.FromArray(Gb, 3 * hb).normalize().subtractToRef(ub, wb), bb[3 * hb] = wb.x * Hb, bb[3 * hb + 1] = wb.y, bb[3 * hb + 2] = wb.z
          }
          const ub = hb.createBufferView(bb, 12),
            Ob = hb.createAccessor(ub, "VEC3", 5126, Gb.length / 3, 0);
          Ub.push(Ob), Yb.attributes.NORMAL = Ub.length - 1
        } else Ob.Tools.Warn(`Morph target normals for mesh ${ub.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (bb.hasTangents) {
        const Gb = bb.getTangents(),
          Lb = Sb.getVerticesData(ab.e.TangentKind);
        if (Lb) {
          Xb = Lb.length / 4;
          const bb = new Float32Array(3 * Xb);
          Zb = 0;
          for (let hb = Zb; hb < Xb; ++hb) {
            const ub = Bb.YX.FromArray(Lb, 4 * hb);
            Eh(ub);
            const Ob = Bb.YX.FromArray(Gb, 3 * hb);
            Eh(Ob), Ob.subtractToRef(ub, wb), bb[3 * hb] = wb.x * Hb, bb[3 * hb + 1] = wb.y, bb[3 * hb + 2] = wb.z
          }
          const ub = hb.createBufferView(bb, 12),
            Ob = hb.createAccessor(ub, "VEC3", 5126, Xb, 0);
          Ub.push(Ob), Yb.attributes.TANGENT = Ub.length - 1
        } else Ob.Tools.Warn(`Morph target tangents for mesh ${ub.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (bb.hasColors) {
        const Gb = bb.getColors(),
          Lb = Sb.getVerticesData(ab.e.ColorKind),
          Hb = Sb.getVertexBuffer(ab.e.ColorKind);
        if (Lb && Hb) {
          const bb = Hb.getSize();
          Xb = Lb.length / bb;
          const ub = new Float32Array(Xb * bb);
          Zb = 0;
          for (let hb = Zb; hb < Xb; ++hb)
            if (3 === bb) {
              const Ob = Bb.YX.FromArray(Lb, hb * bb);
              Bb.YX.FromArray(Gb, hb * bb).subtractToRef(Ob, wb), ub[3 * hb] = wb.x, ub[3 * hb + 1] = wb.y, ub[3 * hb + 2] = wb.z
            } else if (4 === bb) {
            const Ob = new Bb.Vector4,
              Ub = Bb.Vector4.FromArray(Lb, hb * bb);
            Bb.Vector4.FromArray(Gb, hb * bb).subtractToRef(Ub, Ob), ub[4 * hb] = Ob.x, ub[4 * hb + 1] = Ob.y, ub[4 * hb + 2] = Ob.z, ub[4 * hb + 3] = Ob.w
          } else Ob.Tools.Warn(`Unsupported number of components for color attribute: ${bb}`);
          const Sb = hb.createBufferView(ub, 4 * bb),
            ab = hb.createAccessor(Sb, 3 === bb ? "VEC3" : "VEC4", 5126, Xb, 0);
          Ub.push(ab), Yb.attributes.COLOR_0 = Ub.length - 1
        } else Ob.Tools.Warn(`Morph target colors for mesh ${ub.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Yb
    }
    var ZB = hb(41037);
    class XB {}
    XB.DEFAULT_COLOR = Vb.b.White(), XB.DEFAULT_WIDTH_ATTENUATED = 1, XB.DEFAULT_WIDTH = .1;
    var pB = hb(40532);
    class oB {
      constructor(bb) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = bb
      }
      moveTo(bb, ub) {
        this._currentPath = new pB.i(bb, ub), this._tempPaths.push(this._currentPath)
      }
      lineTo(bb, ub) {
        this._currentPath.addLineTo(bb, ub)
      }
      quadraticCurveTo(bb, ub, hb, Bb) {
        this._currentPath.addQuadraticCurveTo(bb, ub, hb, Bb, this._resolution)
      }
      bezierCurveTo(bb, ub, hb, Bb, Ob, Gb) {
        this._currentPath.addBezierCurveTo(bb, ub, hb, Bb, Ob, Gb, this._resolution)
      }
      extractHoles() {
        for (const bb of this._tempPaths) bb.area() > 0 ? this._holes.push(bb) : this._paths.push(bb);
        if (!this._paths.length && this._holes.length) {
          const bb = this._holes;
          this._holes = this._paths, this._paths = bb
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

    function AB(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = Gb.glyphs[bb] || Gb.glyphs["?"];
      if (!Ub) return null;
      const Lb = new oB(Ob);
      if (Ub.o) {
        const bb = Ub.o.split(" ");
        for (let Ob = 0, Gb = bb.length; Ob < Gb;) {
          switch (bb[Ob++]) {
            case "m": {
              const Gb = parseInt(bb[Ob++]) * ub + hb,
                Ub = parseInt(bb[Ob++]) * ub + Bb;
              Lb.moveTo(Gb, Ub);
              break
            }
            case "l": {
              const Gb = parseInt(bb[Ob++]) * ub + hb,
                Ub = parseInt(bb[Ob++]) * ub + Bb;
              Lb.lineTo(Gb, Ub);
              break
            }
            case "q": {
              const Gb = parseInt(bb[Ob++]) * ub + hb,
                Ub = parseInt(bb[Ob++]) * ub + Bb,
                Yb = parseInt(bb[Ob++]) * ub + hb,
                Sb = parseInt(bb[Ob++]) * ub + Bb;
              Lb.quadraticCurveTo(Yb, Sb, Gb, Ub);
              break
            }
            case "b": {
              const Gb = parseInt(bb[Ob++]) * ub + hb,
                Ub = parseInt(bb[Ob++]) * ub + Bb,
                Yb = parseInt(bb[Ob++]) * ub + hb,
                Sb = parseInt(bb[Ob++]) * ub + Bb,
                ab = parseInt(bb[Ob++]) * ub + hb,
                Hb = parseInt(bb[Ob++]) * ub + Bb;
              Lb.bezierCurveTo(Yb, Sb, ab, Hb, Gb, Ub);
              break
            }
          }
        }
      }
      return Lb.extractHoles(), {
        offsetX: Ub.ha * ub,
        shapePath: Lb
      }
    }

    function lB(bb, ub, hb, Bb) {
      const Ob = Array.from(bb),
        Gb = ub / Bb.resolution,
        Ub = (Bb.boundingBox.yMax - Bb.boundingBox.yMin + Bb.underlineThickness) * Gb,
        Lb = [];
      let Yb = 0,
        Sb = 0;
      for (let ab = 0; ab < Ob.length; ab++) {
        const bb = Ob[ab];
        if ("\n" === bb) Yb = 0, Sb -= Ub;
        else {
          const ub = AB(bb, Gb, Yb, Sb, hb, Bb);
          ub && (Yb += ub.offsetX, Lb.push(ub.shapePath))
        }
      }
      return Lb
    }
    class KB {
      static ConvertPoints(bb, ub) {
        if (bb.length && Array.isArray(bb) && "number" === typeof bb[0]) return [bb];
        if (bb.length && Array.isArray(bb[0]) && "number" === typeof bb[0][0]) return bb;
        if (bb.length && !Array.isArray(bb[0]) && bb[0] instanceof Mb.q) {
          const ub = [];
          for (let hb = 0; hb < bb.length; hb++) {
            const Bb = bb[hb];
            ub.push(Bb.x, Bb.y, Bb.z)
          }
          return [ub]
        }
        if (bb.length > 0 && Array.isArray(bb[0]) && bb[0].length > 0 && bb[0][0] instanceof Mb.q) {
          const ub = [],
            hb = bb;
          for (const bb of hb) ub.push(bb.flatMap((bb => [bb.x, bb.y, bb.z])));
          return ub
        }
        if (bb instanceof Float32Array) {
          if (ub?.floatArrayStride) {
            const hb = [],
              Bb = 3 * ub.floatArrayStride;
            for (let ub = 0; ub < bb.length; ub += Bb) {
              const Ob = new Array(Bb);
              for (let hb = 0; hb < Bb; hb++) Ob[hb] = bb[ub + hb];
              hb.push(Ob)
            }
            return hb
          }
          return [Array.from(bb)]
        }
        if (bb.length && bb[0] instanceof Float32Array) {
          const ub = [];
          for (const hb of bb) ub.push(Array.from(hb));
          return ub
        }
        return []
      }
      static OmitZeroLengthPredicate(bb, ub, hb) {
        const Bb = [];
        return ub.subtract(bb).lengthSquared() > 0 && Bb.push([bb, ub]), hb.subtract(ub).lengthSquared() > 0 && Bb.push([ub, hb]), bb.subtract(hb).lengthSquared() > 0 && Bb.push([hb, bb]), 0 === Bb.length ? null : Bb
      }
      static OmitDuplicatesPredicate(bb, ub, hb, Bb) {
        const Ob = [];
        return KB._SearchInPoints(bb, ub, Bb) || Ob.push([bb, ub]), KB._SearchInPoints(ub, hb, Bb) || Ob.push([ub, hb]), KB._SearchInPoints(hb, bb, Bb) || Ob.push([hb, bb]), 0 === Ob.length ? null : Ob
      }
      static _SearchInPoints(bb, ub, hb) {
        for (const Bb of hb)
          for (let hb = 0; hb < Bb.length; hb++)
            if (Bb[hb]?.equals(bb) && (Bb[hb + 1]?.equals(ub) || Bb[hb - 1]?.equals(ub))) return !0;
        return !1
      }
      static MeshesToLines(bb, ub) {
        const hb = [];
        for (let Bb = 0; Bb < bb.length; Bb++) {
          const Ob = bb[Bb],
            Gb = Ob.getVerticesData(mb.i.PositionKind),
            Ub = Ob.XBb();
          if (Gb && Ub)
            for (let bb = 0, Lb = 0; bb < Ub.length; bb++) {
              const Yb = 3 * Ub[Lb++],
                Sb = 3 * Ub[Lb++],
                ab = 3 * Ub[Lb++],
                Hb = new Mb.q(Gb[Yb], Gb[Yb + 1], Gb[Yb + 2]),
                wb = new Mb.q(Gb[Sb], Gb[Sb + 1], Gb[Sb + 2]),
                Zb = new Mb.q(Gb[ab], Gb[ab + 1], Gb[ab + 2]);
              if (ub) {
                const Lb = ub(Hb, wb, Zb, hb, bb, Yb, Ob, Bb, Gb, Ub);
                if (Lb)
                  for (const bb of Lb) hb.push(bb)
              } else hb.push([Hb, wb], [wb, Zb], [Zb, Hb])
            }
        }
        return hb
      }
      static ToVector3Array(bb) {
        if (Array.isArray(bb[0])) {
          const ub = [],
            hb = bb;
          for (const bb of hb) {
            const hb = [];
            for (let ub = 0; ub < bb.length; ub += 3) hb.push(new Mb.q(bb[ub], bb[ub + 1], bb[ub + 2]));
            ub.push(hb)
          }
          return ub
        }
        const ub = bb,
          hb = [];
        for (let Bb = 0; Bb < ub.length; Bb += 3) hb.push(new Mb.q(ub[Bb], ub[Bb + 1], ub[Bb + 2]));
        return hb
      }
      static ToNumberArray(bb) {
        return bb.flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetPointsCountInfo(bb) {
        const ub = new Array(bb.length);
        let hb = 0;
        for (let Bb = bb.length; Bb--;) ub[Bb] = bb[Bb].length / 3, hb += ub[Bb];
        return {
          total: hb,
          counts: ub
        }
      }
      static GetLineLength(bb) {
        if (0 === bb.length) return 0;
        let ub;
        ub = "number" === typeof bb[0] ? KB.ToVector3Array(bb) : bb;
        const hb = Mb.i.YX[0];
        let Bb = 0;
        for (let Ob = 0; Ob < ub.length - 1; Ob++) {
          const bb = ub[Ob];
          Bb += ub[Ob + 1].subtractToRef(bb, hb).length()
        }
        return Bb
      }
      static GetLineLengthArray(bb, ub) {
        const hb = ub ? new Float32Array(ub, 0, bb.length / 3) : new Float32Array(bb.length / 3);
        let Bb = 0;
        for (let Ob = 0, Gb = bb.length / 3 - 1; Ob < Gb; Ob++) {
          let ub = bb[3 * Ob + 0],
            Gb = bb[3 * Ob + 1],
            Ub = bb[3 * Ob + 2];
          ub -= bb[3 * Ob + 3], Gb -= bb[3 * Ob + 4], Ub -= bb[3 * Ob + 5];
          Bb += Math.sqrt(ub * ub + Gb * Gb + Ub * Ub), hb[Ob + 1] = Bb
        }
        return hb
      }
      static SegmentizeSegmentByCount(bb, ub, hb) {
        const Bb = [],
          Ob = ub.subtract(bb),
          Gb = Mb.i.YX[0];
        Gb.N9(hb);
        const Ub = Mb.i.YX[1];
        Ob.divideToRef(Gb, Ub);
        let Lb = bb.clone();
        Bb.push(Lb);
        for (let Yb = 0; Yb < hb; Yb++) Lb = Lb.clone(), Bb.push(Lb.addInPlace(Ub));
        return Bb
      }
      static SegmentizeLineBySegmentLength(bb, ub) {
        const hb = bb[0] instanceof Mb.q ? KB.GetLineSegments(bb) : "number" === typeof bb[0] ? KB.GetLineSegments(KB.ToVector3Array(bb)) : bb,
          Bb = [];
        for (const Ob of hb)
          if (Ob.length > ub) {
            const bb = KB.SegmentizeSegmentByCount(Ob.point1, Ob.point2, Math.ceil(Ob.length / ub));
            for (const ub of bb) Bb.push(ub)
          } else Bb.push(Ob.point1), Bb.push(Ob.point2);
        return Bb
      }
      static SegmentizeLineBySegmentCount(bb, ub) {
        const hb = "number" === typeof bb[0] ? KB.ToVector3Array(bb) : bb,
          Bb = KB.GetLineLength(hb) / ub;
        return KB.SegmentizeLineBySegmentLength(hb, Bb)
      }
      static GetLineSegments(bb) {
        const ub = [];
        for (let hb = 0; hb < bb.length - 1; hb++) {
          const Bb = bb[hb],
            Ob = bb[hb + 1],
            Gb = Ob.subtract(Bb).length();
          ub.push({
            point1: Bb,
            point2: Ob,
            length: Gb
          })
        }
        return ub
      }
      static GetMinMaxSegmentLength(bb) {
        const ub = KB.GetLineSegments(bb).sort((bb => bb.length));
        return {
          min: ub[0].length,
          max: ub[ub.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ob = ub * hb;
        let Gb = 0,
          Ub = 0;
        const Lb = bb.length;
        for (let Sb = 0; Sb < Lb; Sb++) {
          if (Ob <= Gb + bb[Sb].length) {
            Ub = Sb;
            break
          }
          Gb += bb[Sb].length
        }
        const Yb = (Ob - Gb) / bb[Ub].length;
        return bb[Ub].point2.subtractToRef(bb[Ub].point1, Mb.i.YX[0]), Mb.i.YX[0].scaleToRef(Yb, Mb.i.YX[1]), Bb || Mb.i.YX[1].addInPlace(bb[Ub].point1), Mb.i.YX[1].clone()
      }
      static GetCircleLinePoints(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / ub;
        const Gb = [];
        for (let Ub = 0; Ub <= ub; Ub++) Gb.push(new Mb.q(Math.cos(Ub * Ob) * bb, Math.sin(Ub * Ob) * Bb, hb));
        return Gb
      }
      static GetBezierLinePoints(bb, ub, hb, Bb) {
        return pB.g.CreateQuadraticBezier(bb, ub, hb, Bb).getPoints().flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetArrowCap(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [bb.clone(), bb.add(ub.multiplyByFloats(hb, hb, hb))],
          widths: [Bb, Ob, Gb, Ub]
        }
      }
      static GetPointsFromText(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Ub = [],
          Lb = lB(bb, ub, hb, Bb);
        for (const Yb of Lb) {
          for (const bb of Yb.paths) {
            const ub = [],
              hb = bb.getPoints();
            for (const bb of hb) ub.push(bb.x, bb.y, Ob);
            Ub.push(ub)
          }
          if (Gb)
            for (const bb of Yb.holes) {
              const ub = [],
                hb = bb.getPoints();
              for (const bb of hb) ub.push(bb.x, bb.y, Ob);
              Ub.push(ub)
            }
        }
        return Ub
      }
      static Color3toRGBAUint8(bb) {
        const ub = new Uint8Array(4 * bb.length);
        for (let hb = 0, Bb = 0; hb < bb.length; hb++) ub[Bb++] = 255 * bb[hb].r, ub[Bb++] = 255 * bb[hb].g, ub[Bb++] = 255 * bb[hb].b, ub[Bb++] = 255;
        return ub
      }
      static CreateColorsTexture(bb, ub, hb, Bb) {
        const Ob = Bb.UX().getCaps().maxTextureSize ?? 1,
          Gb = ub.length > Ob ? Ob : ub.length,
          Ub = Math.ceil(ub.length / Ob);
        Ub > 1 && (ub = [...ub, ...Array(Gb * Ub - ub.length).fill(ub[0])]);
        const Lb = KB.Color3toRGBAUint8(ub),
          Yb = new db.b(Lb, Gb, Ub, ah.d.TEXTUREFORMAT_RGBA, Bb, !1, !0, hb);
        return Yb.name = bb, Yb
      }
      static PrepareEmptyColorsTexture(bb) {
        if (!XB.EmptyColorsTexture) {
          const ub = new Uint8Array(4);
          XB.EmptyColorsTexture = new db.b(ub, 1, 1, ah.d.TEXTUREFORMAT_RGBA, bb, !1, !1, db.b.NEAREST_NEAREST), XB.EmptyColorsTexture.name = "grlEmptyColorsTexture", XB.EmptyColorsTexture.XN.addOnce((() => {
            XB.EmptyColorsTexture = null
          }))
        }
        return XB.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        XB.EmptyColorsTexture?.dispose(), XB.EmptyColorsTexture = null
      }
      static BooleanToNumber(bb) {
        return bb ? 1 : 0
      }
    }
    class WB extends Ib.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class CB extends Pb.c {
      isCompatible(bb) {
        return !0
      }
      constructor(bb, ub, hb) {
        hb = hb || {
          color: XB.DEFAULT_COLOR
        };
        const Bb = new WB;
        Bb.GREASED_LINE_HAS_COLOR = !!hb.color && !hb.useColors, Bb.GREASED_LINE_SIZE_ATTENUATION = hb.sizeAttenuation ?? !1, Bb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === hb.colorDistributionType, Bb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (ub ?? bb.ZN()).useRightHandedSystem, Bb.GREASED_LINE_CAMERA_FACING = hb.cameraFacing ?? !0, super(bb, CB.GREASED_LINE_MATERIAL_NAME, 200, Bb, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = hb?.forceGLSL || CB.ForceGLSL, this._scene = ub ?? bb.ZN(), this._engine = this._scene.UX(), this._cameraFacing = hb.cameraFacing ?? !0, this.visibility = hb.visibility ?? 1, this.useDash = hb.useDash ?? !1, this.dashRatio = hb.dashRatio ?? .5, this.dashOffset = hb.dashOffset ?? 0, this.width = hb.width ? hb.width : hb.sizeAttenuation ? XB.DEFAULT_WIDTH_ATTENUATED : XB.DEFAULT_WIDTH, this._sizeAttenuation = hb.sizeAttenuation ?? !1, this.colorMode = hb.colorMode ?? 0, this._color = hb.color ?? null, this.useColors = hb.useColors ?? !1, this._colorsDistributionType = hb.colorDistributionType ?? 0, this.colorsSampling = hb.colorsSampling ?? db.b.NEAREST_NEAREST, this._colors = hb.colors ?? null, this.dashCount = hb.dashCount ?? 1, this.resolution = hb.resolution ?? new Mb.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), hb.colorsTexture ? this.colorsTexture = hb.colorsTexture : this._colors ? this.colorsTexture = KB.CreateColorsTexture(`${bb.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? XB.DEFAULT_COLOR, KB.PrepareEmptyColorsTexture(this._scene)), this._engine.XN.add((() => {
          KB.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(bb) {
        bb.push("grl_offsets"), bb.push("grl_widths"), bb.push("grl_colorPointers"), bb.push("grl_counters"), this._cameraFacing ? (bb.push("grl_previousAndSide"), bb.push("grl_nextAndCounters")) : bb.push("grl_slopes")
      }
      getSamplers(bb) {
        bb.push("grl_colors")
      }
      getActiveTextures(bb) {
        this.colorsTexture && bb.push(this.colorsTexture)
      }
      getUniforms() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ub = [{
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
        return this._cameraFacing && ub.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === bb && ub.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: ub,
          vertex: this._cameraFacing && this._isGLSL(bb) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(bb) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(bb) {
        if (this._cameraFacing) {
          bb.S_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || bb.S_("viewProjection", this._scene.getTransformMatrix());
          const ub = Mb.i.Vector4[0];
          ub.x = this._aspect, ub.y = this._resolution.x, ub.z = this._resolution.y, ub.w = this.width, bb.updateVector4("grl_aspect_resolution_lineWidth", ub)
        }
        const ub = Mb.i.Vector4[0];
        ub.x = KB.BooleanToNumber(this.useDash), ub.y = this._dashArray, ub.z = this.dashOffset, ub.w = this.dashRatio, bb.updateVector4("grl_dashOptions", ub);
        const hb = Mb.i.Vector4[1];
        hb.x = this.colorMode, hb.y = this.visibility, hb.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, hb.w = KB.BooleanToNumber(this.useColors), bb.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", hb), this._color && bb.updateColor3("grl_singleColor", this._color);
        const Bb = this.colorsTexture ?? XB.EmptyColorsTexture;
        bb.setTexture("grl_colors", Bb), bb.updateFloat2("grl_textureSize", Bb?.getSize().width ?? 1, Bb?.getSize().height ?? 1)
      }
      prepareDefines(bb, ub, hb) {
        bb.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, bb.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, bb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, bb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = ub.useRightHandedSystem, bb.GREASED_LINE_CAMERA_FACING = this._cameraFacing, bb.GREASED_LINE_USE_OFFSETS = !!hb.offsets
      }
      getClassName() {
        return CB.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(ub) ? function(bb, ub) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return ub && (bb["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(bb, this._cameraFacing) : function(bb, ub) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return ub && (bb["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(bb, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(bb) {
        this.setColors(bb)
      }
      setColors(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!ub || hb)
            if (this.colorsTexture && Bb === bb.length && !hb) {
              const ub = KB.Color3toRGBAUint8(bb);
              this.colorsTexture.update(ub)
            } else this.colorsTexture?.dispose(), this.colorsTexture = KB.CreateColorsTexture(`${this._material.name}-colors-texture`, bb, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(bb) {
        this._dashCount = bb, this._dashArray = 1 / bb
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(bb) {
        this._sizeAttenuation = bb, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== bb || null !== this._color && null === bb ? (this._color = bb, ub || this.markAllDefinesAsDirty()) : this._color = bb
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(bb) {
        this._colorsDistributionType = bb, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(bb) {
        this._aspect = bb.x / bb.y, this._resolution = bb
      }
      serialize() {
        const bb = super.serialize(),
          ub = {
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
        return this._colors && (ub.colors = this._colors), this._color && (ub.color = this._color), bb.greasedLineMaterialOptions = ub, bb
      }
      parse(bb, ub, hb) {
        super.parse(bb, ub, hb);
        const Bb = bb.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Bb.color && this.setColor(Bb.color, !0), Bb.colorDistributionType && (this.colorsDistributionType = Bb.colorDistributionType), Bb.colors && (this.colors = Bb.colors), Bb.colorsSampling && (this.colorsSampling = Bb.colorsSampling), Bb.colorMode && (this.colorMode = Bb.colorMode), Bb.useColors && (this.useColors = Bb.useColors), Bb.visibility && (this.visibility = Bb.visibility), Bb.useDash && (this.useDash = Bb.useDash), Bb.dashCount && (this.dashCount = Bb.dashCount), Bb.dashRatio && (this.dashRatio = Bb.dashRatio), Bb.dashOffset && (this.dashOffset = Bb.dashOffset), Bb.width && (this.width = Bb.width), Bb.sizeAttenuation && (this.sizeAttenuation = Bb.sizeAttenuation), Bb.resolution && (this.resolution = Bb.resolution), this.colors ? this.colorsTexture = KB.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, ub) : KB.PrepareEmptyColorsTexture(ub), this.markAllDefinesAsDirty()
      }
      copyTo(bb) {
        const ub = bb;
        ub.colorsTexture?.dispose(), this._colors && (ub.colorsTexture = KB.CreateColorsTexture(`${ub._material.name}-colors-texture`, this._colors, ub.colorsSampling, this._scene)), ub.setColor(this.color, !0), ub.colorsDistributionType = this.colorsDistributionType, ub.colorsSampling = this.colorsSampling, ub.colorMode = this.colorMode, ub.useColors = this.useColors, ub.visibility = this.visibility, ub.useDash = this.useDash, ub.dashCount = this.dashCount, ub.dashRatio = this.dashRatio, ub.dashOffset = this.dashOffset, ub.width = this.width, ub.sizeAttenuation = this.sizeAttenuation, ub.resolution = this.resolution, ub.markAllDefinesAsDirty()
      }
      _isGLSL(bb) {
        return 0 === bb || this._forceGLSL
      }
    }
    CB.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", CB.ForceGLSL = !1;
    var dB = hb(39854),
      rB = hb(39862),
      jB = hb(38296),
      nB = hb(39928),
      DB = hb(39291);
    class xB extends nB.p {
      constructor(bb, ub, Bb) {
        const Ob = ub.UX(),
          Gb = Ob.isWebGPU && !(Bb.forceGLSL || xB.ForceGLSL),
          Ub = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        ub.useRightHandedSystem && Ub.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Lb = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Bb.cameraFacing ? (Ub.push("GREASED_LINE_CAMERA_FACING"), Lb.push("grl_previousAndSide", "grl_nextAndCounters")) : (Lb.push("grl_slopes"), Lb.push("grl_counters"));
        const Yb = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Gb || Yb.push("world", "viewProjection", "view", "projection"), super(bb, ub, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Gb ? ["Scene", "Mesh"] : void 0,
            attributes: Lb,
            uniforms: Yb,
            samplers: Gb ? [] : ["grlColors"],
            defines: Ub,
            extraInitializationsAsync: async () => {
              Gb ? await Promise.all([hb.e(325).then((() => hb(61296))), hb.e(384).then((() => hb(61298)))]) : await Promise.all([hb.e(318).then((() => hb(61300))), hb.e(385).then((() => hb(61303)))])
            },
            shaderLanguage: Gb ? 1 : 0
          }), this._color = Vb.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Bb = Bb || {
            color: XB.DEFAULT_COLOR
          }, this.visibility = Bb.visibility ?? 1, this.useDash = Bb.useDash ?? !1, this.dashRatio = Bb.dashRatio ?? .5, this.dashOffset = Bb.dashOffset ?? 0, this.dashCount = Bb.dashCount ?? 1, this.width = Bb.width ? Bb.width : Bb.sizeAttenuation && Bb.cameraFacing ? XB.DEFAULT_WIDTH_ATTENUATED : XB.DEFAULT_WIDTH, this.sizeAttenuation = Bb.sizeAttenuation ?? !1, this.color = Bb.color ?? Vb.b.White(), this.useColors = Bb.useColors ?? !1, this.colorsDistributionType = Bb.colorDistributionType ?? 0, this.colorsSampling = Bb.colorsSampling ?? db.b.NEAREST_NEAREST, this.colorMode = Bb.colorMode ?? 0, this._colors = Bb.colors ?? null, this._cameraFacing = Bb.cameraFacing ?? !0, this.resolution = Bb.resolution ?? new Mb.m(Ob.getRenderWidth(), Ob.getRenderHeight()), Bb.colorsTexture ? this.colorsTexture = Bb.colorsTexture : this._colors ? this.colorsTexture = KB.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, ub) : (this._color = this._color ?? XB.DEFAULT_COLOR, this.colorsTexture = KB.PrepareEmptyColorsTexture(ub)), Gb) {
          const bb = new DB.b;
          bb.setParameters(), bb.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", bb)
        }
        Ob.XN.add((() => {
          KB.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== XB.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Mb.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(bb) {
        this.setColors(bb)
      }
      setColors(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!ub || hb)
            if (this._colorsTexture && Bb === bb.length && !hb) {
              const ub = KB.Color3toRGBAUint8(bb);
              this._colorsTexture.update(ub)
            } else this._colorsTexture && this._colorsTexture !== XB.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = KB.CreateColorsTexture(`${this.name}-colors-texture`, bb, this.colorsSampling, this.ZN())
        } else {
          this._colorsTexture && this._colorsTexture !== XB.EmptyColorsTexture && this._colorsTexture.dispose();
          const bb = this.ZN();
          bb && (this.colorsTexture = KB.PrepareEmptyColorsTexture(bb))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(bb) {
        this._colorsTexture = bb, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(bb) {
        this._width = bb, this.setFloat("grlWidth", bb)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(bb) {
        this._useColors = bb, this.setFloat("grlUseColors", KB.BooleanToNumber(bb))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(bb) {
        this._colorsSampling = bb
      }
      get visibility() {
        return this._visibility
      }
      set visibility(bb) {
        this._visibility = bb, this.setFloat("grlVisibility", bb)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(bb) {
        this._useDash = bb, this.setFloat("grlUseDash", KB.BooleanToNumber(bb))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(bb) {
        this._dashOffset = bb, this.setFloat("grlDashOffset", bb)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(bb) {
        this._dashRatio = bb, this.setFloat("grlDashRatio", bb)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(bb) {
        this._dashCount = bb, this._dashArray = 1 / bb, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(bb) {
        this._sizeAttenuation = bb, this.setFloat("grlSizeAttenuation", KB.BooleanToNumber(bb))
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        bb = bb ?? XB.DEFAULT_COLOR, this._color = bb, this.setColor3("grlColor", bb)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(bb) {
        this._colorsDistributionType = bb, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(bb) {
        this._colorMode = bb, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(bb) {
        this._resolution = bb, this.setVector2("grlResolution", bb), this.setFloat("grlAspect", bb.x / bb.y)
      }
      serialize() {
        const bb = super.serialize(),
          ub = {
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
        return this._colors && (ub.colors = this._colors), bb.greasedLineMaterialOptions = ub, bb
      }
      parse(bb, ub, hb) {
        const Bb = bb.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Bb.color && (this.color = Bb.color), Bb.colorDistributionType && (this.colorsDistributionType = Bb.colorDistributionType), Bb.colorsSampling && (this.colorsSampling = Bb.colorsSampling), Bb.colorMode && (this.colorMode = Bb.colorMode), Bb.useColors && (this.useColors = Bb.useColors), Bb.visibility && (this.visibility = Bb.visibility), Bb.useDash && (this.useDash = Bb.useDash), Bb.dashCount && (this.dashCount = Bb.dashCount), Bb.dashRatio && (this.dashRatio = Bb.dashRatio), Bb.dashOffset && (this.dashOffset = Bb.dashOffset), Bb.width && (this.width = Bb.width), Bb.sizeAttenuation && (this.sizeAttenuation = Bb.sizeAttenuation), Bb.resolution && (this.resolution = Bb.resolution), Bb.colors ? this.colorsTexture = KB.CreateColorsTexture(`${this.name}-colors-texture`, Bb.colors, this.colorsSampling, this.ZN()) : this.colorsTexture = KB.PrepareEmptyColorsTexture(ub), this._cameraFacing = Bb.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var zB, gB, iB;
    xB.ForceGLSL = !1,
      function(bb) {
        bb[bb.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", bb[bb.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(zB || (zB = {})),
      function(bb) {
        bb[bb.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", bb[bb.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", bb[bb.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(gB || (gB = {})),
      function(bb) {
        bb[bb.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", bb[bb.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", bb[bb.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", bb[bb.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", bb[bb.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(iB || (iB = {}));
    class vB extends dB.c {
      constructor(bb, ub, hb) {
        super(bb, ub, null, null, !1, !1), this.name = bb, this._options = hb, this._lazy = !1, this._updatable = !1, this._engine = ub.UX(), this._lazy = hb.lazy ?? !1, this._updatable = hb.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = hb.colorPointers ?? [], this._widths = hb.widths ?? new Array(hb.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(bb) {
        let ub = 0;
        for (const Bb of this._points) ub += Bb.length;
        const hb = ub / 3 * 2 - this._widths.length;
        for (let Bb = 0; Bb < hb; Bb++) this._widths.push(bb)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.aX && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(bb, ub) {
        for (const hb of bb) this._points.push(hb);
        this._lazy || this.setPoints(this._points, ub)
      }
      dispose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(bb, ub)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(bb) {
        this._uvs = bb instanceof Float32Array ? bb : new Float32Array(bb), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(bb) {
        this.material instanceof xB && this.material.setDefine("GREASED_LINE_USE_OFFSETS", bb?.length > 0), this._offsets = bb, this._offsetsBuffer ? this._offsetsBuffer.update(bb) : this._createOffsetsBuffer(bb)
      }
      get widths() {
        return this._widths
      }
      set widths(bb) {
        this._widths = bb, this._lazy || this._widthsBuffer && this._widthsBuffer.update(bb)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(bb) {
        this._colorPointers = bb, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(bb)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof xB) return this.material;
        const bb = this.material?.pluginManager?.getPlugin(CB.GREASED_LINE_MATERIAL_NAME);
        return bb || void 0
      }
      get points() {
        const bb = [];
        return jB.b.DeepCopy(this._points, bb), bb
      }
      setPoints(bb, ub) {
        this._points = KB.ConvertPoints(bb, ub?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), ub?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, ub)
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
      serialize(bb) {
        super.serialize(bb), bb.type = this.getClassName(), bb.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new rB.c;
        return ub.positions = this._vertexPositions, ub.indices = this._indices, ub.uvs = this._uvs, bb && (ub.normals = [], rB.c.ComputeNormals(this._vertexPositions, this._indices, ub.normals)), ub.applyToMesh(this, this._options.updatable), ub
      }
      _createOffsetsBuffer(bb) {
        const ub = this._scene.UX(),
          hb = new mb.b(ub, bb, this._updatable, 3);
        this.setVerticesBuffer(hb.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = hb
      }
    }
    class tB {
      constructor(bb, ub) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = bb, this.wasAddedByNoopNode = ub
      }
      getIndicesAccessor(bb, ub, hb, Bb, Ob) {
        return this._indicesAccessorMap.get(bb)?.get(ub)?.get(hb)?.get(Bb)?.get(Ob)
      }
      setIndicesAccessor(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = this._indicesAccessorMap.get(bb);
        Ub || (Ub = new Map, this._indicesAccessorMap.set(bb, Ub));
        let Lb = Ub.get(ub);
        Lb || (Lb = new Map, Ub.set(ub, Lb));
        let Yb = Lb.get(hb);
        Yb || (Yb = new Map, Lb.set(hb, Yb));
        let Sb = Yb.get(Bb);
        Sb || (Sb = new Map, Yb.set(Bb, Sb)), Sb.set(Ob, Gb)
      }
      pushExportedNode(bb) {
        this._exportedNodes.has(bb) || this._exportedNodes.add(bb)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(bb) {
        return this._vertexBufferViewMap.get(bb)
      }
      setVertexBufferView(bb, ub) {
        this._vertexBufferViewMap.set(bb, ub)
      }
      setRemappedBufferView(bb, ub, hb) {
        this._remappedBufferView.set(bb, new Map), this._remappedBufferView.get(bb).set(ub, hb)
      }
      getRemappedBufferView(bb, ub) {
        return this._remappedBufferView.get(bb)?.get(ub)
      }
      getVertexAccessor(bb, ub, hb) {
        return this._vertexAccessorMap.get(bb)?.get(ub)?.get(hb)
      }
      setVertexAccessor(bb, ub, hb, Bb) {
        let Ob = this._vertexAccessorMap.get(bb);
        Ob || (Ob = new Map, this._vertexAccessorMap.set(bb, Ob));
        let Gb = Ob.get(ub);
        Gb || (Gb = new Map, Ob.set(ub, Gb)), Gb.set(hb, Bb)
      }
      hasVertexColorAlpha(bb) {
        return this._vertexMapColorAlpha.get(bb) || !1
      }
      setHasVertexColorAlpha(bb, ub) {
        return this._vertexMapColorAlpha.set(bb, ub)
      }
      getMesh(bb) {
        return this._meshMap.get(bb)
      }
      setMesh(bb, ub) {
        this._meshMap.set(bb, ub)
      }
      bindMorphDataToMesh(bb, ub) {
        const hb = this._meshMorphTargetMap.get(bb) || [];
        this._meshMorphTargetMap.set(bb, hb), -1 === hb.indexOf(ub) && hb.push(ub)
      }
      getMorphTargetsFromMesh(bb) {
        return this._meshMorphTargetMap.get(bb)
      }
    }
    class JB {
      _ApplyExtension(bb, ub, hb, Bb) {
        if (hb >= ub.length) return Promise.resolve(bb);
        const Ob = Bb(ub[hb], bb);
        return Ob ? Ob.then((async bb => bb ? await this._ApplyExtension(bb, ub, hb + 1, Bb) : null)) : this._ApplyExtension(bb, ub, hb + 1, Bb)
      }
      _ApplyExtensions(bb, ub) {
        const hb = [];
        for (const Bb of JB._ExtensionNames) hb.push(this._extensions[Bb]);
        return this._ApplyExtension(bb, hb, 0, ub)
      }
      _extensionsPostExportNodeAsync(bb, ub, hb, Bb, Ob) {
        return this._ApplyExtensions(ub, ((ub, Gb) => ub.postExportNodeAsync && ub.postExportNodeAsync(bb, Gb, hb, Bb, Ob, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(bb, ub, hb) {
        return this._ApplyExtensions(ub, ((ub, Bb) => ub.postExportMaterialAsync && ub.postExportMaterialAsync(bb, Bb, hb)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        return await Promise.all(JB._ExtensionNames.map((async Ob => {
          const Gb = this._extensions[Ob];
          if (Gb.postExportMaterialAdditionalTexturesAsync) {
            const Ob = await Gb.postExportMaterialAdditionalTexturesAsync(bb, ub, hb);
            Bb.push(...Ob)
          }
        }))), Bb
      }
      _extensionsPostExportTextures(bb, ub, hb) {
        for (const Bb of JB._ExtensionNames) {
          const Ob = this._extensions[Bb];
          Ob.postExportTexture && Ob.postExportTexture(bb, ub, hb)
        }
      }
      _extensionsPostExportMeshPrimitive(bb) {
        for (const ub of JB._ExtensionNames) {
          const hb = this._extensions[ub];
          hb.postExportMeshPrimitive && hb.postExportMeshPrimitive(bb, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const bb of JB._ExtensionNames) {
          const ub = this._extensions[bb];
          ub.preGenerateBinaryAsync && await ub.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(bb) {
        for (const ub of JB._ExtensionNames) {
          const hb = this._extensions[ub];
          hb.enabled && bb(hb)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((bb => {
          var ub, hb, Bb;
          bb.wasUsed && ((ub = this._glTF).extensionsUsed || (ub.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(bb.name) && this._glTF.extensionsUsed.push(bb.name), bb.required && ((hb = this._glTF).extensionsRequired || (hb.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(bb.name) && this._glTF.extensionsRequired.push(bb.name)), (Bb = this._glTF).extensions || (Bb.extensions = {}), bb.onExporting && bb.onExporting())
        }))
      }
      _loadExtensions() {
        for (const bb of JB._ExtensionNames) {
          const ub = JB._ExtensionFactories[bb](this);
          this._extensions[bb] = ub
        }
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pb.b.LastCreatedScene,
          ub = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Xb.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new gh(this), this._extensions = {}, this._bufferManager = new hB, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !bb) throw new Error("No scene available to export");
        this._babylonScene = bb, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: bb => bb?.yJ?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...ub
        }, this._loadExtensions()
      }
      dispose() {
        for (const bb in this._extensions) {
          this._extensions[bb].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        JB.UnregisterExtension(bb) && Ob.Tools.Warn(`Extension with the name ${bb} already exists`), JB._ExtensionFactories[bb] = ub;
        const Bb = hb ?? 0;
        JB._ExtensionOrders[bb] = Bb;
        let Gb = JB._ExtensionNames.length;
        for (let Ob = 0; Ob < JB._ExtensionNames.length; Ob++) {
          const bb = JB._ExtensionNames[Ob];
          if (Bb < JB._ExtensionOrders[bb]) {
            Gb = Ob;
            break
          }
        }
        JB._ExtensionNames.splice(Gb, 0, bb)
      }
      static UnregisterExtension(bb) {
        if (!JB._ExtensionFactories[bb]) return !1;
        delete JB._ExtensionFactories[bb], delete JB._ExtensionOrders[bb];
        const ub = JB._ExtensionNames.indexOf(bb);
        return -1 !== ub && JB._ExtensionNames.splice(ub, 1), !0
      }
      _generateJSON(bb, ub, hb) {
        const Bb = {
          byteLength: bb
        };
        return Bb.byteLength && (this._glTF.buffers = [Bb]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Xp = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Bb.uri = ub + ".bin"), hb ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(bb) {
        const ub = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const hb = this._generateJSON(ub.byteLength, bb, !0),
          Bb = new Blob([ub], {
            type: "application/octet-stream"
          }),
          Ob = bb + ".gltf",
          Gb = bb + ".bin",
          Ub = new Sb;
        if (Ub.files[Ob] = hb, Ub.files[Gb] = Bb, this._imageData)
          for (const Lb in this._imageData) Ub.files[Lb] = this._imageData[Lb];
        return Ub
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(bb) {
        const ub = bb % 4;
        return 0 === ub ? ub : 4 - ub
      }
      async generateGLBAsync(bb) {
        this._shouldUseGlb = !0;
        const ub = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const hb = this._generateJSON(ub.byteLength),
          Bb = bb + ".glb";
        let Ob, Gb = hb.length;
        if ("undefined" !== typeof TextEncoder) {
          Ob = (new TextEncoder).encode(hb), Gb = Ob.length
        }
        const Ub = this._getPadding(Gb),
          Lb = this._getPadding(ub.byteLength),
          Yb = 28 + Gb + Ub + ub.byteLength + Lb,
          ab = new bB(Yb);
        if (ab.writeUInt32(1179937895), ab.writeUInt32(2), ab.writeUInt32(Yb), ab.writeUInt32(Gb + Ub), ab.writeUInt32(1313821514), Ob) ab.writeTypedArray(Ob);
        else {
          const bb = "_".charCodeAt(0);
          for (let ub = 0; ub < Gb; ++ub) {
            const Bb = hb.charCodeAt(ub);
            Bb != hb.codePointAt(ub) ? ab.writeUInt8(bb) : ab.writeUInt8(Bb)
          }
        }
        for (let Sb = 0; Sb < Ub; ++Sb) ab.writeUInt8(32);
        ab.writeUInt32(ub.byteLength + Lb), ab.writeUInt32(5130562), ab.writeTypedArray(ub);
        for (let Sb = 0; Sb < Lb; ++Sb) ab.writeUInt8(0);
        const Hb = new Sb;
        return Hb.files[Bb] = new Blob([ab.getOutputData()], {
          type: "application/octet-stream"
        }), Hb
      }
      _setNodeTransformation(bb, ub, hb) {
        if (ub.getPivotPoint().equalsWithEpsilon(Nh, th.b) || Ob.Tools.Warn("Pivot points are not supported in the glTF serializer"), !ub.position.equalsWithEpsilon(Nh, th.b)) {
          const Ob = Bb.TmpVectors.YX[0].mD(ub.position);
          hb && yh(Ob), bb.translation = Ob.ZBb()
        }
        ub.pa.equalsWithEpsilon(Mh, th.b) || (bb.scale = ub.pa.ZBb());
        const Gb = ub.rotationQuaternion?.clone() || Bb.Quaternion.FromEulerAngles(ub.rotation.x, ub.rotation.y, ub.rotation.z);
        Gb.equalsWithEpsilon(sh, th.b) || (hb && Vh(Gb), bb.rotation = Gb.normalize().ZBb())
      }
      _setCameraTransformation(bb, ub, hb) {
        const Ob = Bb.TmpVectors.YX[0],
          Gb = Bb.TmpVectors.Quaternion[0],
          Ub = ub.getWorldMatrix();
        if (ub.parent) {
          const bb = ub.parent.getWorldMatrix().invertToRef(Bb.TmpVectors.Matrix[0]);
          Ub.multiplyToRef(bb, Bb.TmpVectors.Matrix[1]).decompose(void 0, Gb, Ob)
        } else Ub.decompose(void 0, Gb, Ob);
        Ob.equalsWithEpsilon(Nh, th.b) || (hb && yh(Ob), bb.translation = Ob.ZBb()), hb && Vh(Gb), this._babylonScene.useRightHandedSystem || Fh(Gb), Gb.equalsWithEpsilon(sh, th.b) || (bb.rotation = Gb.ZBb())
      }
      _listAvailableCameras() {
        for (const bb of this._babylonScene.cameras) {
          const ub = {
            type: bb.mode === BB.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (bb.name && (ub.name = bb.name), "perspective" === ub.type) ub.perspective = {
            aspectRatio: bb.UX().getAspectRatio(bb),
            yfov: bb.fovMode === BB.d.FOVMODE_VERTICAL_FIXED ? bb.fov : bb.fov * bb.UX().getAspectRatio(bb),
            znear: bb.minZ,
            zfar: bb.maxZ
          };
          else if ("orthographic" === ub.type) {
            const hb = bb.orthoLeft && bb.orthoRight ? .5 * (bb.orthoRight - bb.orthoLeft) : .5 * bb.UX().getRenderWidth(),
              Bb = bb.orthoBottom && bb.orthoTop ? .5 * (bb.orthoTop - bb.orthoBottom) : .5 * bb.UX().getRenderHeight();
            ub.orthographic = {
              xmag: hb,
              ymag: Bb,
              znear: bb.minZ,
              zfar: bb.maxZ
            }
          }
          this._camerasMap.set(bb, ub)
        }
      }
      _exportAndAssignCameras() {
        const bb = Array.from(this._camerasMap.values());
        for (const ub of bb) {
          const bb = this._nodesCameraMap.get(ub);
          if (void 0 !== bb) {
            this._cameras.push(ub);
            for (const ub of bb) ub.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const bb of this._babylonScene.skeletons) {
          if (bb.bones.length <= 0) continue;
          const ub = {
            joints: []
          };
          this._skinMap.set(bb, ub)
        }
      }
      _exportAndAssignSkeletons(bb) {
        for (const hb of this._babylonScene.skeletons) {
          if (hb.bones.length <= 0) continue;
          const Gb = this._skinMap.get(hb);
          if (void 0 == Gb) continue;
          const Ub = {};
          let Lb = -1;
          for (let bb = 0; bb < hb.bones.length; ++bb) {
            const ub = hb.bones[bb],
              Bb = ub.getIndex() ?? bb; - 1 !== Bb && (Ub[Bb] = ub, Bb > Lb && (Lb = Bb))
          }
          const Yb = [];
          for (let hb = 0; hb <= Lb; ++hb) {
            const Lb = Ub[hb],
              Sb = Lb.getTransformNode(),
              ab = Sb ? this._nodeMap.get(Sb) : void 0;
            if (void 0 === ab) {
              Ob.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Gb.joints.push(ab);
            const Hb = Lb.getAbsoluteInverseBindMatrix().clone();
            bb.has(Sb) && (ub = Hb, Jh.invertToRef(Bb.TmpVectors.Matrix[0]).multiplyToRef(ub, ub).multiplyToRef(Jh, ub)), Yb.push(Hb)
          }
          const Sb = this._nodesSkinMap.get(Gb);
          if (Gb.joints.length > 0 && void 0 !== Sb) {
            const bb = new Float32Array(16 * Yb.length);
            Yb.forEach(((ub, hb) => {
              bb.set(ub.m, 16 * hb)
            }));
            const ub = this._bufferManager.createBufferView(bb);
            this._accessors.push(this._bufferManager.createAccessor(ub, "MAT4", 5126, Yb.length)), Gb.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Gb);
            const hb = this._skins.length - 1;
            for (const Bb of Sb) Bb.skin = hb
          }
        }
        var ub
      }
      async _exportSceneAsync() {
        const bb = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const ub = this._options.metadataSelector(this._babylonScene.metadata);
          ub && (bb.extras = ub)
        }
        const ub = new Array,
          hb = new Array,
          Bb = new Array,
          Ob = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Gb;
        if (Ob && !this._options.includeCoordinateSystemConversionNodes)
          for (const Sb of this._babylonScene.animationGroups)
            for (const bb of Sb.targetedAnimations) {
              const ub = bb.target;
              ub instanceof Hb.d && !ub.parent && (Gb ?? (Gb = new Set)).add(ub)
            }
        for (const Sb of this._babylonScene.rootNodes) {
          const bb = Sb.animations,
            Ub = !!bb && bb.length > 0 || Gb?.has(Sb);
          Ob && !this._options.includeCoordinateSystemConversionNodes && eh(Sb, this._babylonScene.useRightHandedSystem) && !Ub ? Bb.push(...Sb.getChildren()) : this._babylonScene.useRightHandedSystem ? ub.push(Sb) : hb.push(Sb)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Ub = new tB(!0, !1);
        bb.nodes.push(...await this._exportNodesAsync(hb, Ub));
        const Lb = new tB(!1, !1);
        bb.nodes.push(...await this._exportNodesAsync(ub, Lb));
        const Yb = new tB(!1, !0);
        bb.nodes.push(...await this._exportNodesAsync(Bb, Yb)), bb.nodes.length && this._scenes.push(bb), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Ub.getNodesSet()), this._babylonScene.animationGroups.length && HB._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ub.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(bb) {
        return this._nodeMap.get(bb)
      }
      _getAnimationIndex(bb) {
        return this._animationGroupMap.get(bb)
      }
      _getCameraIndex(bb) {
        const ub = this._camerasMap.get(bb);
        if (!ub) return;
        const hb = this._cameras.indexOf(ub);
        return hb >= 0 ? hb : void 0
      }
      _getMaterialIndex(bb) {
        return this._materialMap.get(bb)
      }
      _getRootIndex(bb, ub) {
        switch (bb) {
          case "nodes":
            return this._getNodeIndex(ub);
          case "animations":
            return this._getAnimationIndex(ub);
          case "cameras":
            return this._getCameraIndex(ub);
          case "materials":
            return this._getMaterialIndex(ub);
          case "meshes": {
            const bb = this._getNodeIndex(ub);
            return void 0 === bb ? void 0 : this._nodes[bb]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(ub)?.index;
          case "images": {
            const bb = this._materialExporter.getTextureInfo(ub)?.index;
            if (void 0 === bb) return;
            const hb = this._textures[bb];
            for (const ub of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const bb = hb?.extensions?.[ub]?.source;
              if ("number" === typeof bb) return bb
            }
            return hb?.source
          }
          case "samplers": {
            const bb = this._materialExporter.getTextureInfo(ub)?.index;
            return void 0 === bb ? void 0 : this._textures[bb]?.sampler
          }
          case "skins": {
            const bb = this._skinMap.get(ub),
              hb = bb ? this._skins.indexOf(bb) : -1;
            return hb >= 0 ? hb : void 0
          }
          case "scenes":
            return ub === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(bb, ub, hb) {
        const Bb = this._nodes[bb];
        if (!Bb) throw new Error(`Cannot write ${ub}: glTF node ${bb} does not exist.`);
        Bb.extensions || (Bb.extensions = {}), Bb.extensions[ub] = hb
      }
      _shouldExportNode(bb) {
        let ub = this._shouldExportNodeMap.get(bb);
        return void 0 === ub && (ub = this._options.shouldExportNode(bb), this._shouldExportNodeMap.set(bb, ub)), ub
      }
      async _exportNodesAsync(bb, ub) {
        const hb = new Array;
        this._exportBuffers(bb, ub);
        for (const Bb of bb) await this._exportNodeAsync(Bb, hb, ub);
        return hb
      }
      _collectBuffers(bb, ub, hb, Bb, Ob) {
        if (this._shouldExportNode(bb) && bb instanceof wb.b && bb.geometry) {
          const Gb = bb.geometry.getVertexBuffers();
          if (Gb)
            for (const Bb in Gb) {
              if (!qh(Bb)) continue;
              const Ub = Gb[Bb];
              Ob.setHasVertexColorAlpha(Ub, bb.hasVertexAlpha);
              const Lb = Ub._buffer,
                Yb = ub.get(Lb) || [];
              ub.set(Lb, Yb), -1 === Yb.indexOf(Ub) && Yb.push(Ub);
              const Sb = hb.get(Ub) || [];
              hb.set(Ub, Sb), -1 === Sb.indexOf(bb) && Sb.push(bb)
            }
          const Ub = bb.morphTargetManager;
          if (Ub)
            for (let ub = 0; ub < Ub.numTargets; ub++) {
              const hb = Ub.getTarget(ub),
                Ob = Bb.get(hb) || [];
              Bb.set(hb, Ob), -1 === Ob.indexOf(bb) && Ob.push(bb)
            }
        }
        for (const Gb of bb.getChildren()) this._collectBuffers(Gb, ub, hb, Bb, Ob)
      }
      _exportBuffers(bb, ub) {
        const hb = new Map,
          Bb = new Map,
          Ob = new Map;
        for (const Lb of bb) this._collectBuffers(Lb, hb, Bb, Ob, ub);
        const Gb = Array.from(hb.keys());
        for (const Lb of Gb) {
          const bb = Lb.getData();
          if (!bb) throw new Error("Buffer data is not available");
          const Ob = hb.get(Lb);
          if (!Ob) continue;
          const Gb = Ob[0].byteStride;
          if (Ob.some((bb => bb.byteStride !== Gb))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Ub = Th(bb).slice();
          for (const ub of Ob) {
            const bb = Bb.get(ub),
              {
                byteOffset: hb,
                byteStride: Ob,
                componentCount: Gb,
                type: Lb,
                count: Yb,
                normalized: Sb,
                kind: Hb
              } = Ih(ub, bb);
            switch (Hb) {
              case ab.e.NormalKind:
              case ab.e.TangentKind:
                (0, ih.j)(Ub, hb, Ob, Gb, Lb, Yb, Sb, (bb => {
                  const ub = Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2]);
                  if (ub > 0) {
                    const hb = 1 / ub;
                    bb[0] *= hb, bb[1] *= hb, bb[2] *= hb
                  }
                }));
                break;
              case ab.e.ColorKind: {
                const ub = bb.filter((bb => bb.material instanceof GB.StandardMaterial || null == bb.material)).length;
                if (0 == ub) break;
                if (ub != bb.length) {
                  xb.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Lb == ab.e.UNSIGNED_BYTE && xb.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Bb = new ob.Color3,
                  Hb = new ob.b,
                  wb = this._babylonScene.UX().useExactSrgbConversions;
                (0, ih.j)(Ub, hb, Ob, Gb, Lb, Yb, Sb, (bb => {
                  3 === bb.length ? (Bb.Ohb(bb, 0), Bb.toLinearSpaceToRef(Bb, wb), Bb.toArray(bb, 0)) : (Hb.Ohb(bb, 0), Hb.toLinearSpaceToRef(Hb, wb), Hb.toArray(bb, 0))
                }))
              }
            }
          }
          if (ub.convertToRightHanded) {
            for (const bb of Ob) {
              const ub = Bb.get(bb),
                {
                  byteOffset: hb,
                  byteStride: Ob,
                  componentCount: Gb,
                  type: Lb,
                  count: Yb,
                  normalized: Sb,
                  kind: Hb
                } = Ih(bb, ub);
              switch (Hb) {
                case ab.e.PositionKind:
                case ab.e.NormalKind:
                case ab.e.TangentKind:
                  (0, ih.j)(Ub, hb, Ob, Gb, Lb, Yb, Sb, (bb => {
                    bb[0] = -bb[0]
                  }))
              }
            }
            ub.convertedToRightHandedBuffers.set(Lb, Ub)
          }
          const Yb = this._bufferManager.createBufferView(Ub, Gb);
          ub.setVertexBufferView(Lb, Yb);
          const Sb = new Map;
          for (const ub of Ob) {
            const bb = Bb.get(ub),
              {
                kind: hb,
                totalVertices: Ob
              } = Ih(ub, bb);
            switch (hb) {
              case ab.e.MatricesIndicesKind:
              case ab.e.MatricesIndicesExtraKind:
                if (ub.type == ab.e.FLOAT) {
                  const bb = ub.getFloatData(Ob);
                  null !== bb && Sb.set(ub, bb)
                }
            }
          }
          0 !== Sb.size && xb.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Hb = Array.from(Sb.keys());
          for (const hb of Hb) {
            const bb = Sb.get(hb);
            if (!bb) continue;
            const Bb = bb.some((bb => bb >= 256)),
              Ob = new(Bb ? Uint16Array : Uint8Array)(bb.length);
            for (let ub = 0; ub < bb.length; ub++) Ob[ub] = bb[ub];
            const Gb = this._bufferManager.createBufferView(Ob, 4 * (Bb ? 2 : 1));
            ub.setRemappedBufferView(Lb, hb, Gb)
          }
        }
        const Ub = Array.from(Ob.keys());
        for (const Lb of Ub) {
          const bb = Ob.get(Lb);
          if (!bb) continue;
          const hb = wB(Lb, bb[0], this._bufferManager, this._bufferViews, this._accessors, ub.convertToRightHanded);
          for (const Bb of bb) ub.bindMorphDataToMesh(Bb, hb)
        }
      }
      async _exportNodeAsync(bb, ub, hb) {
        let Bb = this._nodeMap.get(bb);
        if (void 0 !== Bb) return void(ub.includes(Bb) || ub.push(Bb));
        const Ob = await this._createNodeAsync(bb, hb);
        if (Ob) {
          Bb = this._nodes.length, this._nodes.push(Ob), this._nodeMap.set(bb, Bb), hb.pushExportedNode(bb), ub.push(Bb);
          const Gb = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Ub = [];
          this._babylonScene.animationGroups.length || (HB._CreateMorphTargetAnimationFromMorphTargetAnimations(bb, Gb, Ub, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, hb.convertToRightHanded, this._options.shouldExportAnimation), bb.animations.length && HB._CreateNodeAnimationFromNodeAnimations(bb, Gb, Ub, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, hb.convertToRightHanded, this._options.shouldExportAnimation)), Gb.channels.length && Gb.samplers.length && this._animations.push(Gb), Ub.forEach((bb => {
            bb.channels.length && bb.samplers.length && this._animations.push(bb)
          }))
        }
        const Gb = Ob ? [] : ub;
        for (const Ub of bb.getChildren()) await this._exportNodeAsync(Ub, Gb, hb);
        Ob && Gb.length && (Ob.children = Gb)
      }
      async _createNodeAsync(bb, ub) {
        if (!this._shouldExportNode(bb)) return null;
        const hb = {};
        if (bb.name && (hb.name = bb.name), bb.metadata) {
          const ub = this._options.metadataSelector(bb.metadata);
          ub && (hb.extras = ub)
        }
        if (bb instanceof Hb.d && (this._setNodeTransformation(hb, bb, ub.convertToRightHanded), bb instanceof wb.b)) {
          const Bb = bb instanceof Zb.d ? bb.LOb : bb;
          if (Bb.FW && Bb.FW.length > 0 && (hb.mesh = await this._exportMeshAsync(Bb, ub)), bb.skeleton) {
            const ub = this._skinMap.get(bb.skeleton);
            void 0 !== ub && (void 0 === this._nodesSkinMap.get(ub) && this._nodesSkinMap.set(ub, []), this._nodesSkinMap.get(ub)?.push(hb))
          }
        }
        if (bb instanceof vh.d) {
          const Bb = this._camerasMap.get(bb);
          if (Bb) {
            void 0 === this._nodesCameraMap.get(Bb) && this._nodesCameraMap.set(Bb, []), this._setCameraTransformation(hb, bb, ub.convertToRightHanded);
            const Ob = bb.parent;
            if (null !== Ob && kh(bb, Ob)) {
              const bb = this._nodeMap.get(Ob);
              if (void 0 !== bb) {
                const ub = this._nodes[bb];
                return fh(hb, ub), this._nodesCameraMap.get(Bb)?.push(ub), null
              }
            }
            this._nodesCameraMap.get(Bb)?.push(hb)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", hb, bb, this._nodeMap, ub.convertToRightHanded) ? hb : (xb.b.Warn(`Not exporting node ${bb.name}`), null)
      }
      _exportIndices(bb, ub, hb, Bb, Ob, Ub, Lb, Yb, Sb) {
        let ab = null;
        Sb.mode = function(bb) {
          switch (bb) {
            case Gb.e.TriangleFillMode:
              return 4;
            case Gb.e.TriangleStripDrawMode:
              return 5;
            case Gb.e.TriangleFanDrawMode:
              return 6;
            case Gb.e.PointListDrawMode:
            case Gb.e.PointFillMode:
              return 0;
            case Gb.e.LineLoopDrawMode:
              return 2;
            case Gb.e.LineListDrawMode:
              return 1;
            case Gb.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${bb}`)
        }(Ub);
        const Hb = Lb !== Gb.e.CounterClockWiseSideOrientation && function(bb) {
          switch (bb) {
            case Gb.e.TriangleFillMode:
            case Gb.e.TriangleStripDrawMode:
            case Gb.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Ub);
        if (Hb) {
          if (Ub === Gb.e.TriangleStripDrawMode || Ub === Gb.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Lb = ub ? new Uint32Array(Bb) : new Uint16Array(Bb);
          if (bb)
            for (let ub = 0; ub + 2 < Bb; ub += 3) Lb[ub] = bb[hb + ub] + Ob, Lb[ub + 1] = bb[hb + ub + 2] + Ob, Lb[ub + 2] = bb[hb + ub + 1] + Ob;
          else
            for (let bb = 0; bb + 2 < Bb; bb += 3) Lb[bb] = bb, Lb[bb + 1] = bb + 2, Lb[bb + 2] = bb + 1;
          ab = Lb
        } else if (bb && 0 !== Ob) {
          const Gb = ub ? new Uint32Array(Bb) : new Uint16Array(Bb);
          for (let ub = 0; ub < Bb; ub++) Gb[ub] = bb[hb + ub] + Ob;
          ab = Gb
        } else bb && (ab = function(bb, ub, hb, Bb) {
          let Ob = bb;
          return 0 === ub && hb === bb.length || (Ob = Array.isArray(bb) ? bb.slice(ub, ub + hb) : bb.subarray(ub, ub + hb)), Ob instanceof Int32Array ? new Uint32Array(Ob.buffer, Ob.byteOffset, Ob.length) : Array.isArray(Ob) ? Bb ? new Uint32Array(Ob) : new Uint16Array(Ob) : Ob
        }(bb, hb, Bb, ub));
        if (ab) {
          let Gb = Yb.getIndicesAccessor(bb, hb, Bb, Ob, Hb);
          if (void 0 === Gb) {
            const Ub = this._bufferManager.createBufferView(ab),
              Lb = ub ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Ub, "SCALAR", Lb, Bb, 0)), Gb = this._accessors.length - 1, Yb.setIndicesAccessor(bb, hb, Bb, Ob, Hb, Gb)
          }
          Sb.indices = Gb
        }
      }
      _exportVertexBuffer(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = bb.getKind();
        if (!qh(Ub)) return;
        if (Ub.startsWith("uv") && !this._options.exportUnusedUVs && (!ub || !this._materialNeedsUVsSet.has(ub))) return;
        let Lb = Ob.getVertexAccessor(bb, hb, Bb);
        if (void 0 === Lb) {
          const ub = Ob.convertedToRightHandedBuffers.get(bb._buffer) || bb._buffer.getData(),
            Gb = Ub === ab.e.PositionKind ? function(bb, ub, hb, Bb) {
              const {
                byteOffset: Ob,
                byteStride: Gb,
                type: Ub,
                normalized: Lb
              } = ub, Yb = ub.getSize(), Sb = new Array(Yb).fill(1 / 0), ab = new Array(Yb).fill(-1 / 0);
              return (0, ih.j)(bb, Ob + hb * Gb, Gb, Yb, Ub, Bb * Yb, Lb, (bb => {
                for (let ub = 0; ub < Yb; ub++) Sb[ub] = Math.min(Sb[ub], bb[ub]), ab[ub] = Math.max(ab[ub], bb[ub])
              })), {
                min: Sb,
                max: ab
              }
            }(ub, bb, hb, Bb) : void 0,
            Yb = (Ub === ab.e.MatricesIndicesKind || Ub === ab.e.MatricesIndicesExtraKind) && bb.type === ab.e.FLOAT,
            Sb = Yb ? ab.e.UNSIGNED_BYTE : bb.type,
            Hb = Yb ? void 0 : bb.normalized,
            wb = Yb ? Ob.getRemappedBufferView(bb._buffer, bb) : Ob.getVertexBufferView(bb._buffer),
            Zb = bb.byteOffset + hb * bb.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(wb, function(bb, ub) {
            if (bb == ab.e.ColorKind) return ub ? "VEC4" : "VEC3";
            switch (bb) {
              case ab.e.PositionKind:
              case ab.e.NormalKind:
                return "VEC3";
              case ab.e.TangentKind:
              case ab.e.MatricesIndicesKind:
              case ab.e.MatricesIndicesExtraKind:
              case ab.e.MatricesWeightsKind:
              case ab.e.MatricesWeightsExtraKind:
                return "VEC4";
              case ab.e.UVKind:
              case ab.e.UV2Kind:
              case ab.e.UV3Kind:
              case ab.e.UV4Kind:
              case ab.e.UV5Kind:
              case ab.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${bb}`)
          }(Ub, Ob.hasVertexColorAlpha(bb)), Sb, Bb, Zb, Gb, Hb)), Lb = this._accessors.length - 1, Ob.setVertexAccessor(bb, hb, Bb, Lb)
        }
        Gb.attributes[function(bb) {
          switch (bb) {
            case ab.e.PositionKind:
              return "POSITION";
            case ab.e.NormalKind:
              return "NORMAL";
            case ab.e.TangentKind:
              return "TANGENT";
            case ab.e.ColorKind:
              return "COLOR_0";
            case ab.e.UVKind:
              return "TEXCOORD_0";
            case ab.e.UV2Kind:
              return "TEXCOORD_1";
            case ab.e.UV3Kind:
              return "TEXCOORD_2";
            case ab.e.UV4Kind:
              return "TEXCOORD_3";
            case ab.e.UV5Kind:
              return "TEXCOORD_4";
            case ab.e.UV6Kind:
              return "TEXCOORD_5";
            case ab.e.MatricesIndicesKind:
              return "JOINTS_0";
            case ab.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case ab.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case ab.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${bb}`)
        }(Ub)] = Lb
      }
      async _exportMaterialAsync(bb, ub, hb, Bb) {
        let Ob = this._materialMap.get(bb);
        if (void 0 === Ob) {
          const Bb = ub && Object.keys(ub).some((bb => bb.startsWith("uv")));
          if ((bb = bb instanceof OB.c ? bb.v_[hb.materialIndex] : bb) instanceof du) Ob = await this._materialExporter.exportPBRMaterialAsync(bb, Bb);
          else if (bb instanceof GB.StandardMaterial) Ob = await this._materialExporter.exportStandardMaterialAsync(bb, Bb);
          else {
            if (!(bb instanceof Qu)) return void xb.b.Warn(`Unsupported material '${bb.name}' with type ${bb.getClassName()}`);
            Ob = await this._materialExporter.exportOpenPBRMaterialAsync(bb, Bb)
          }
          this._materialMap.set(bb, Ob)
        }
        Bb.material = Ob
      }
      async _exportMeshAsync(bb, ub) {
        let hb = ub.getMesh(bb);
        if (void 0 !== hb) return hb;
        const Bb = {
          primitives: []
        };
        hb = this._meshes.length, this._meshes.push(Bb), ub.setMesh(bb, hb);
        const Ob = bb.isUnIndexed ? null : bb.XBb(),
          Ub = bb.geometry?.getVertexBuffers(),
          Lb = ub.getMorphTargetsFromMesh(bb),
          Yb = bb instanceof ZB.b,
          Sb = bb instanceof vB,
          ab = bb.FW;
        if (Ub && ab && ab.length > 0)
          for (const Hb of ab) {
            const hb = {
                attributes: {}
              },
              ab = Hb.HX() || this._babylonScene.defaultMaterial;
            if (Sb) {
              const ub = {
                  name: ab.name
                },
                Bb = bb,
                Ob = ob.Color3.White(),
                Gb = Bb.material?.alpha ?? 1,
                Ub = Bb.greasedLineMaterial?.color ?? Ob;
              (!Ub.equalsWithEpsilon(Ob, th.b) || Gb < 1) && (ub.pbrMetallicRoughness = {
                baseColorFactor: [...Ub.ZBb(), Gb]
              }), this._materials.push(ub), hb.material = this._materials.length - 1
            } else if (Yb) {
              const ub = {
                  name: ab.name
                },
                Bb = bb;
              (!Bb.color.equalsWithEpsilon(ob.Color3.White(), th.b) || Bb.alpha < 1) && (ub.pbrMetallicRoughness = {
                baseColorFactor: [...Bb.color.ZBb(), Bb.alpha]
              }), this._materials.push(ub), hb.material = this._materials.length - 1
            } else await this._exportMaterialAsync(ab, Ub, Hb, hb);
            const wb = Yb || Sb ? Gb.e.LineListDrawMode : bb.overrideRenderingFillMode ?? ab.fillMode;
            let Zb = ab._getEffectiveOrientation(bb);
            ub.wasAddedByNoopNode && !bb.ZN().useRightHandedSystem && (Zb = Zb === Gb.e.ClockWiseSideOrientation ? Gb.e.CounterClockWiseSideOrientation : Gb.e.ClockWiseSideOrientation), this._exportIndices(Ob, Ob ? (0, ih.b)(Ob, Hb.indexCount, Hb.indexStart, Hb.verticesStart) : Hb.verticesCount > 65535, Ob ? Hb.indexStart : Hb.verticesStart, Ob ? Hb.indexCount : Hb.verticesCount, -Hb.verticesStart, wb, Zb, ub, hb);
            for (const bb of Object.values(Ub)) this._exportVertexBuffer(bb, ab, Hb.verticesStart, Hb.verticesCount, ub, hb);
            if (Lb) {
              hb.targets = [];
              for (const bb of Lb) hb.targets.push(bb.attributes)
            }
            Bb.primitives.push(hb), this._extensionsPostExportMeshPrimitive(hb)
          }
        if (Lb) {
          Bb.weights = [], Bb.extras || (Bb.extras = {}), Bb.extras.targetNames = [];
          for (const bb of Lb) Bb.weights.push(bb.influence), Bb.extras.targetNames.push(bb.name)
        }
        return hb
      }
    }
    JB._ExtensionNames = new Array, JB._ExtensionFactories = {}, JB._ExtensionOrders = {};
    class eB {
      static async GLTFAsync(bb, ub, hb) {
        hb && hb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const Bb = new JB(bb, hb),
          Ob = await Bb.generateGLTFAsync(ub.replace(/\.[^/.]+$/, ""));
        return Bb.dispose(), Ob
      }
      static async GLBAsync(bb, ub, hb) {
        hb && hb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const Bb = new JB(bb, hb),
          Ob = await Bb.generateGLBAsync(ub.replace(/\.[^/.]+$/, ""));
        return Bb.dispose(), Ob
      }
    }
    const NB = "EXT_mesh_gpu_instancing";

    function sB(bb, ub) {
      const hb = new Float32Array(3 * ub);
      for (let Bb = 0; Bb < ub; Bb++) hb[3 * Bb + 0] = bb[4 * Bb + 0], hb[3 * Bb + 1] = bb[4 * Bb + 1], hb[3 * Bb + 2] = bb[4 * Bb + 2];
      return hb
    }
    class MB {
      constructor(bb) {
        this.name = NB, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(bb, ub, hb, Bb, Ob, Gb) {
        return await new Promise((bb => {
          if (ub && hb instanceof dB.c && hb.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const bb = Mb.q.Zero(),
              Bb = Mb.f.Identity(),
              Ub = Mb.q.One(),
              Lb = hb.thinInstanceGetWorldMatrices(),
              Yb = Mb.i.YX[2],
              Sb = Mb.i.Quaternion[1],
              ab = Mb.i.YX[3];
            let Hb = !1,
              wb = !1,
              Zb = !1;
            const Xb = new Float32Array(3 * hb.W4),
              pb = new Float32Array(4 * hb.W4),
              ob = new Float32Array(3 * hb.W4);
            let Ab = 0;
            for (const ub of Lb) ub.decompose(ab, Sb, Yb), Ob && (yh(Yb), Vh(Sb)), Xb.set(Yb.ZBb(), 3 * Ab), pb.set(Sb.normalize().ZBb(), 4 * Ab), ob.set(ab.ZBb(), 3 * Ab), Hb = Hb || !Yb.equalsWithEpsilon(bb), wb = wb || !Sb.equalsWithEpsilon(Bb), Zb = Zb || !ab.equalsWithEpsilon(Ub), Ab++;
            const lb = {
              attributes: {}
            };
            Hb && (lb.attributes.TRANSLATION = this._buildAccessor(Xb, "VEC3", hb.W4, Gb)), wb && (lb.attributes.ROTATION = this._buildAccessor(pb, "VEC4", hb.W4, Gb)), Zb && (lb.attributes.SCALE = this._buildAccessor(ob, "VEC3", hb.W4, Gb));
            let Kb = hb._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Kb) {
              const bb = hb.W4,
                ub = "VEC3";
              hb.hasVertexAlpha && Kb.length === 4 * bb ? (this._instanceColorWarned || (xb.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Kb = sB(Kb, bb)) : Kb.length === 4 * bb && (Kb = sB(Kb, bb)), Kb.length === 3 * bb && (lb.attributes._COLOR_0 = this._buildAccessor(Kb, ub, bb, Gb))
            }
            ub.extensions = ub.extensions || {}, ub.extensions[NB] = lb
          }
          bb(ub)
        }))
      }
      _buildAccessor(bb, ub, hb, Bb) {
        const Ob = Bb.createBufferView(bb),
          Gb = Bb.createAccessor(Ob, ub, 5126, hb);
        return this._exporter._accessors.push(Gb), this._exporter._accessors.length - 1
      }
    }
    let mB = !1;

    function IB() {
      mB || (mB = !0, JB.RegisterExtension(NB, (bb => new MB(bb))))
    }
    hb(39940);
    IB();
    var PB = hb(41291);

    function qB(bb, ub, hb, Bb) {
      const Ob = bb;
      let Gb = null,
        Ub = null,
        Lb = null,
        Yb = null;
      const Sb = {},
        ab = ub.find((bb => "POSITION" === bb.dracoName));
      if (!ab) throw new Error("Draco: Missing position attribute for encoding.");
      if (!hb) {
        const bb = ab.data.length / ab.size;
        hb = new(bb > 65535 ? Uint32Array : Uint16Array)(bb);
        for (let ub = 0; ub < bb; ub++) hb[ub] = ub
      }
      try {
        Gb = new Ob.Encoder, Ub = new Ob.MeshBuilder, Lb = new Ob.Mesh, Ub.AddFacesToMesh(Lb, hb.length / 3, hb);
        const bb = new Map([
          [Float32Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddFloatAttribute(ub, hb, Bb, Ob, Gb)],
          [Uint32Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddUInt32Attribute(ub, hb, Bb, Ob, Gb)],
          [Uint16Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddUInt16Attribute(ub, hb, Bb, Ob, Gb)],
          [Uint8Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddUInt8Attribute(ub, hb, Bb, Ob, Gb)],
          [Int32Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddInt32Attribute(ub, hb, Bb, Ob, Gb)],
          [Int16Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddInt16Attribute(ub, hb, Bb, Ob, Gb)],
          [Int8Array, (bb, ub, hb, Bb, Ob, Gb) => bb.AddInt8Attribute(ub, hb, Bb, Ob, Gb)]
        ]);
        for (const hb of ub) {
          hb.data instanceof Uint8ClampedArray && (hb.data = new Uint8Array(hb.data));
          const ub = bb.get(hb.data.constructor),
            Yb = hb.data.length / hb.size;
          Sb[hb.kind] = ub(Ub, Lb, Ob[hb.dracoName], Yb, hb.size, hb.data), Bb.quantizationBits && Bb.quantizationBits[hb.dracoName] && Gb.SetAttributeQuantization(Ob[hb.dracoName], Bb.quantizationBits[hb.dracoName])
        }
        Bb.method && Gb.SetEncodingMethod(Ob[Bb.method]), void 0 !== Bb.encodeSpeed && void 0 !== Bb.decodeSpeed && Gb.SetSpeedOptions(Bb.encodeSpeed, Bb.decodeSpeed), Yb = new Ob.DracoInt8Array;
        const ab = Gb.EncodeMeshToDracoBuffer(Lb, Yb);
        if (ab <= 0) throw new Error("Draco: Failed to encode.");
        const Hb = new Int8Array(ab);
        for (let ub = 0; ub < ab; ub++) Hb[ub] = Yb.GetValue(ub);
        return {
          data: Hb,
          attributeIds: Sb
        }
      } finally {
        Lb && Ob.destroy(Lb), Ub && Ob.destroy(Ub), Gb && Ob.destroy(Gb), Yb && Ob.destroy(Yb)
      }
    }

    function EB() {
      let bb;
      onmessage = ub => {
        const hb = ub.data;
        switch (hb.id) {
          case "init": {
            hb.url && importScripts(hb.url);
            const ub = hb.wasmBinary ? {
              wasmBinary: hb.wasmBinary
            } : {};
            bb = DracoEncoderModule(ub), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!bb) throw new Error("Draco: Encoder module is not available.");
            bb.then((bb => {
              const ub = qB(bb, hb.attributes, hb.indices, hb.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: ub
              }, ub ? [ub.data.buffer] : void 0)
            })).catch((bb => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: bb.message
              })
            }))
        }
      }
    }
    class yB {
      constructor(bb) {
        if (bb.workerPool) return void(this._workerPoolPromise = Promise.resolve(bb.workerPool));
        const ub = bb.wasmBinary,
          hb = bb.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Bb = hb && "function" === typeof Worker && "function" === typeof URL,
          Ob = Bb || !bb.jsModule,
          Gb = bb.wasmUrl && bb.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Ob ? ju.k.GetBabylonScriptURL(bb.wasmUrl, !0) : "",
            wasmBinaryPromise: ub ? Promise.resolve(ub) : ju.k.LoadFileAsync(ju.k.GetBabylonScriptURL(bb.wasmBinaryUrl, !0))
          } : {
            url: Ob ? ju.k.GetBabylonScriptURL(bb.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Bb ? this._workerPoolPromise = Gb.wasmBinaryPromise.then((bb => {
          const ub = this._getWorkerContent(),
            Bb = URL.createObjectURL(new Blob([ub], {
              type: "application/javascript"
            }));
          return new PB.e(hb, (() => async function(bb, ub, hb) {
            return await new Promise(((Bb, Ob) => {
              const Gb = ub => {
                  bb.removeEventListener("error", Gb), bb.removeEventListener("message", Ub), Ob(ub)
                },
                Ub = ub => {
                  "initDone" === ub.data.id && (bb.removeEventListener("error", Gb), bb.removeEventListener("message", Ub), Bb(bb))
                };
              if (bb.addEventListener("error", Gb), bb.addEventListener("message", Ub), ub) {
                const Bb = ub.slice(0);
                bb.postMessage({
                  id: "init",
                  url: hb,
                  wasmBinary: Bb
                }, [Bb])
              } else bb.postMessage({
                id: "init",
                url: hb
              })
            }))
          }(new Worker(Bb), bb, Gb.url)))
        })) : this._modulePromise = Gb.wasmBinaryPromise.then((async ub => {
          if (!this._isModuleAvailable() && !bb.jsModule) {
            if (!Gb.url) throw new Error("Draco codec module is not available");
            await ju.k.LoadBabylonScriptAsync(Gb.url)
          }
          return await this._createModuleAsync(ub, bb.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((bb => {
          bb.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function VB() {
      const bb = bb => !!bb && "object" === typeof bb;
      for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
      return hb.reduce(((ub, hb) => {
        const Bb = Object.keys(hb);
        for (const Ob of Bb) {
          const Bb = ub[Ob],
            Gb = hb[Ob];
          Array.isArray(Bb) && Array.isArray(Gb) ? ub[Ob] = Bb.concat(Gb) : bb(Bb) && bb(Gb) ? ub[Ob] = VB(Bb, Gb) : ub[Ob] = Gb
        }
        return ub
      }), {})
    }

    function FB(bb) {
      return bb === mb.i.PositionKind ? "POSITION" : bb === mb.i.NormalKind ? "NORMAL" : bb === mb.i.ColorKind ? "COLOR" : bb.startsWith(mb.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const fB = {
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
    class kB extends yB {
      static get DefaultAvailable() {
        return !!((bb = kB.DefaultConfiguration).wasmUrl && (bb.wasmBinary || bb.wasmBinaryUrl) && "object" === typeof WebAssembly || bb.fallbackUrl);
        var bb
      }
      static get Default() {
        return kB._Default ?? (kB._Default = new kB), kB._Default
      }
      static ResetDefault(bb) {
        kB._Default && (bb || kB._Default.dispose(), kB._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(bb, ub) {
        return {
          module: await (ub || DracoEncoderModule)({
            wasmBinary: bb
          })
        }
      }
      _getWorkerContent() {
        return `${qB}(${EB})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kB.DefaultConfiguration)
      }
      async _encodeAsync(bb, ub, hb) {
        const Bb = hb ? VB(fB, hb) : fB;
        if (this._workerPoolPromise) {
          const hb = await this._workerPoolPromise;
          return await new Promise(((Ob, Gb) => {
            hb.push(((hb, Ub) => {
              const Lb = bb => {
                  hb.removeEventListener("error", Lb), hb.removeEventListener("message", Yb), Gb(bb), Ub()
                },
                Yb = bb => {
                  "encodeMeshSuccess" === bb.data.id ? (hb.removeEventListener("error", Lb), hb.removeEventListener("message", Yb), Ob(bb.data.encodedMeshData), Ub()) : "encodeMeshError" === bb.data.id && (hb.removeEventListener("error", Lb), hb.removeEventListener("message", Yb), Gb(new Error(bb.data.errorMessage)), Ub())
                };
              hb.addEventListener("error", Lb), hb.addEventListener("message", Yb);
              const Sb = [];
              for (const ub of bb) Sb.push(ub.data.buffer);
              ub && Sb.push(ub.buffer), hb.postMessage({
                id: "encodeMesh",
                attributes: bb,
                indices: ub,
                options: Bb
              }, Sb)
            }))
          }))
        }
        if (this._modulePromise) {
          return qB((await this._modulePromise).module, bb, ub, Bb)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(bb, ub) {
        if (0 == bb.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        bb instanceof dB.c && bb.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === ub?.method && (xb.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), ub.method = "MESH_SEQUENTIAL_ENCODING");
        const hb = function(bb) {
            let ub = bb.XBb(void 0, !0);
            return !ub || ub instanceof Uint32Array || ub instanceof Uint16Array || (ub = ((0, ih.b)(ub, ub.length) ? Uint32Array : Uint16Array).from(ub)), ub
          }(bb),
          Bb = function(bb, ub) {
            const hb = [];
            for (const Bb of bb.getVerticesDataKinds()) {
              if (ub?.includes(Bb)) {
                if (Bb === mb.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Ob = bb.getVertexBuffer(Bb),
                Gb = Ob.getSize(),
                Ub = (0, ih.s)(Ob.getData(), Gb, Ob.type, Ob.byteOffset, Ob.byteStride, bb.getTotalVertices(), !0);
              hb.push({
                kind: Bb,
                dracoName: FB(Bb),
                size: Gb,
                data: Ub
              })
            }
            return hb
          }(bb, ub?.excludedAttributes);
        return await this._encodeAsync(Bb, hb, ub)
      }
    }
    kB.DefaultConfiguration = {
      wasmUrl: `${ju.k._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${ju.k._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${ju.k._DefaultCdnUrl}/draco_encoder.js`
    }, kB._Default = null;
    const TB = "KHR_draco_mesh_compression";
    class cB {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = TB, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === bb.options.meshCompressionMethod && kB.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(bb, ub, hb) {
        if (!this.enabled) return;
        if (4 !== bb.mode && 5 !== bb.mode) return void xb.b.Warn("Cannot compress primitive with mode " + bb.mode + ".");
        const Bb = [],
          Ob = [];
        let Gb = null;
        if (void 0 !== bb.indices) {
          const Ub = hb[bb.indices],
            Lb = ub.getBufferView(Ub);
          Gb = ub.getData(Lb).slice(), Bb.push(Lb), Ob.push(Ub)
        }
        const Ub = [];
        for (const [ab, Hb] of Object.entries(bb.attributes)) {
          const bb = hb[Hb],
            Gb = ub.getBufferView(bb),
            Yb = Ph(bb.type),
            Sb = (0, ih.s)(ub.getData(Gb), Yb, bb.componentType, bb.byteOffset || 0, Gb.byteStride || (0, ih.r)(bb.componentType) * Yb, bb.count, !0);
          Ub.push({
            kind: ab,
            dracoName: (Lb = ab, "POSITION" === Lb ? "POSITION" : "NORMAL" === Lb ? "NORMAL" : Lb.startsWith("COLOR") ? "COLOR" : Lb.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Ph(bb.type),
            data: Sb
          }), Bb.push(Gb), Ob.push(bb)
        }
        var Lb;
        const Yb = {
            method: bb.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Sb = kB.Default._encodeAsync(Ub, Gb, Yb).then((hb => {
            const Gb = {
                bufferView: -1,
                attributes: hb.attributeIds
              },
              Ub = ub.createBufferView(hb.data);
            ub.setBufferView(Gb, Ub);
            for (const bb of Bb) this._bufferViewsUsed.add(bb);
            for (const bb of Ob) this._accessorsUsed.add(bb);
            bb.extensions || (bb.extensions = {}), bb.extensions[TB] = Gb
          })).catch((bb => {
            xb.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + bb.message)
          }));
        this._encodePromises.push(Sb), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(bb) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((ub => {
          bb.getPropertiesWithBufferView(ub).every((bb => this._accessorsUsed.has(bb))) && bb.removeBufferView(ub)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let QB = !1;

    function RB() {
      QB || (QB = !0, JB.RegisterExtension(TB, (bb => new cB(bb))))
    }
    RB();
    var bO = hb(41030);
    const uO = "KHR_lights_punctual",
      hO = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      BO = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      OO = Mb.q.Backward();
    class GO {
      constructor(bb) {
        this.name = uO, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[uO] = this._lights
      }
      async postExportNodeAsync(bb, ub, hb, Bb, Ob) {
        return await new Promise((Gb => {
          if (!(hb instanceof aB.b)) return void Gb(ub);
          const Ub = hb.getTypeID() == aB.b.LIGHTTYPEID_POINTLIGHT ? "point" : hb.getTypeID() == aB.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : hb.getTypeID() == aB.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Ub || !(hb instanceof bO.d)) return xb.b.Warn(`${bb}: Light ${hb.name} is not supported in ${uO}`), void Gb(ub);
          if (hb.falloffType !== aB.b.FALLOFF_GLTF && xb.b.Warn(`${bb}: Light falloff for ${hb.name} does not match the ${uO} specification!`), !hb.position.sUb(0, 0, 0)) {
            const bb = Mb.i.YX[0].mD(hb.position);
            Ob && yh(bb), ub.translation = bb.ZBb()
          }
          if ("point" !== Ub) {
            const bb = hb.direction.normalizeToRef(Mb.i.YX[0]);
            Ob && yh(bb);
            const Bb = Mb.f.FromUnitVectorsToRef(OO, bb, Mb.i.Quaternion[0]);
            Mb.f.IsIdentity(Bb) || (ub.rotation = Bb.ZBb())
          }
          const Lb = {
            type: Ub,
            name: hb.name,
            color: hb.diffuse.ZBb(),
            intensity: hb.intensity,
            range: hb.range
          };
          if (ch(Lb, hO), "spot" === Ub) {
            const bb = hb;
            Lb.spot = {
              innerConeAngle: bb.innerAngle / 2,
              outerConeAngle: bb.angle / 2
            }, ch(Lb.spot, BO)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Lb);
          const Yb = {
              light: this._lights.lights.length - 1
            },
            Sb = hb.parent;
          if (Sb && kh(hb, Sb)) {
            const bb = Bb.get(Sb);
            if (bb) {
              const hb = this._exporter._nodes[bb];
              return fh(ub, hb), hb.extensions || (hb.extensions = {}), hb.extensions[uO] = Yb, void Gb(null)
            }
          }
          ub.extensions || (ub.extensions = {}), ub.extensions[uO] = Yb, Gb(ub)
        }))
      }
    }
    let UO = !1;

    function LO() {
      UO || (UO = !0, JB.RegisterExtension(uO, (bb => new GO(bb))))
    }
    LO();
    const YO = "KHR_interactivity";
    class SO {
      constructor(bb) {
        this._exporter = bb, this.name = YO, this.enabled = !!bb.options.khrInteractivity, this.required = bb.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var bb, ub, hb;
        const Bb = this._exporter.options.khrInteractivity;
        if (!Bb) return;
        const Ob = Bb.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: bb => this._exporter._getNodeIndex(bb),
          getAnimationIndex: bb => this._exporter._getAnimationIndex(bb),
          getCameraIndex: bb => this._exporter._getCameraIndex(bb),
          getMaterialIndex: bb => this._exporter._getMaterialIndex(bb),
          getRootIndex: (bb, ub) => this._exporter._getRootIndex(bb, ub),
          setNodeExtension: (bb, ub, hb) => this._exporter._setNodeExtension(bb, ub, hb)
        });
        this._exporter._glTF.extensions[YO] = Ob;
        for (const Gb of Bb.additionalExtensionsUsed)(bb = this._exporter._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Gb) && this._exporter._glTF.extensionsUsed.push(Gb);
        for (const Gb of Bb.additionalExtensionsRequired)(ub = this._exporter._glTF).extensionsUsed || (ub.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Gb) && this._exporter._glTF.extensionsUsed.push(Gb), (hb = this._exporter._glTF).extensionsRequired || (hb.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Gb) && this._exporter._glTF.extensionsRequired.push(Gb)
      }
    }
    let aO = !1;

    function HO() {
      aO || (aO = !0, JB.RegisterExtension(YO, (bb => new SO(bb)), 200))
    }
    HO();
    const wO = "EXT_lights_area",
      ZO = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      XO = {
        aspect: 1
      },
      pO = Mb.q.Backward();
    class oO {
      constructor(bb) {
        this.name = wO, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[wO] = this._lights
      }
      async postExportNodeAsync(bb, ub, hb, Bb, Ob) {
        return await new Promise((Gb => {
          if (!(hb instanceof aB.b)) return void Gb(ub);
          const Ub = hb.getTypeID() == aB.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Ub) return xb.b.Warn(`${bb}: Light ${hb.name} is not supported in ${wO}`), void Gb(ub);
          const Lb = hb;
          if (Lb.falloffType !== aB.b.FALLOFF_GLTF && xb.b.Warn(`${bb}: Light falloff for ${hb.name} does not match the ${wO} specification!`), !Lb.position.sUb(0, 0, 0)) {
            const bb = Mb.i.YX[0].mD(Lb.position);
            Ob && yh(bb), ub.translation = bb.ZBb()
          }
          const Yb = Mb.q.Forward();
          Ob && yh(Yb);
          const Sb = Mb.f.FromUnitVectorsToRef(pO, Yb, Mb.i.Quaternion[0]);
          Mb.f.IsIdentity(Sb) || (ub.rotation = Sb.ZBb());
          const ab = {
            type: Ub,
            name: Lb.name,
            color: Lb.diffuse.ZBb(),
            intensity: Lb.intensity,
            size: Lb.height,
            rect: {
              aspect: Lb.width / Lb.height
            }
          };
          ch(ab, ZO), ab.rect && ch(ab.rect, XO), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(ab);
          const Hb = {
              light: this._lights.lights.length - 1
            },
            wb = hb.parent;
          if (wb && kh(Lb, wb)) {
            const bb = Bb.get(wb);
            if (bb) {
              const hb = this._exporter._nodes[bb];
              return fh(ub, hb), hb.extensions || (hb.extensions = {}), hb.extensions[wO] = Hb, void Gb(null)
            }
          }
          ub.extensions || (ub.extensions = {}), ub.extensions[wO] = Hb, Gb(ub)
        }))
      }
    }
    let AO = !1;

    function lO() {
      AO || (AO = !0, JB.RegisterExtension(wO, (bb => new oO(bb))))
    }
    lO();
    const KO = "KHR_materials_anisotropy";
    class WO {
      constructor(bb) {
        this.name = KO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof du) {
          if (hb.anisotropy.isEnabled && !hb.anisotropy.legacy) return hb.anisotropy.texture && Bb.push(hb.anisotropy.texture), Bb
        } else if (hb instanceof Qu && hb.specularRoughnessAnisotropy > 0) {
          const bb = function(bb) {
            const ub = bb.specularRoughnessAnisotropyTexture,
              hb = bb.geometryTangentTexture;
            return `${ub&&ub.getInternalTexture()?ub.getInternalTexture().uniqueId:"NoStrength"}_${hb&&hb.getInternalTexture()?hb.getInternalTexture().uniqueId:"NoTangent"}`
          }(hb);
          if (this._anisoTexturesMap[bb]) Bb.push(this._anisoTexturesMap[bb]);
          else {
            const ub = await async function(bb) {
              const ub = bb.ZN(),
                hb = bb.specularRoughnessAnisotropyTexture,
                Bb = bb.geometryTangentTexture;
              return hb || Bb ? await Uh("AnisotropyTexture", Sh(Bb ? Lh(Bb, 0) : Yh(1), Bb ? Lh(Bb, 1) : Yh(0), hb ? Lh(hb, 0) : Yh(1)), ub) : null
            }(hb);
            ub && (Bb.push(ub), this._anisoTexturesMap[bb] = ub)
          }
          return Bb
        }
        return []
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          var Bb;
          if (hb instanceof du) {
            if (!hb.anisotropy.isEnabled || hb.anisotropy.legacy) return void bb(ub);
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const Bb = this._exporter._materialExporter.getTextureInfo(hb.anisotropy.texture),
              Ob = {
                anisotropyStrength: hb.anisotropy.intensity,
                anisotropyRotation: hb.anisotropy.angle,
                anisotropyTexture: Bb ?? void 0
              };
            null !== Ob.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[KO] = Ob
          } else if (hb instanceof Qu && hb.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            let Ob = hb.specularRoughnessTexture;
            hb._useRoughnessFromMetallicTextureGreen && (Ob = hb.baseMetalnessTexture);
            const Gb = this._anisoTexturesMap[hb.id];
            if (!Ob && !Gb) {
              let Bb = hb.specularRoughness,
                Ob = hb.specularRoughnessAnisotropy;
              if (!hb._useGltfStyleAnisotropy) {
                const bb = function(bb, ub) {
                  const hb = bb * bb,
                    Bb = hb * Math.sqrt(2 / (1 + (1 - ub) * (1 - ub))),
                    Ob = (1 - ub) * Bb;
                  return {
                    newBaseRoughness: Math.sqrt(Ob),
                    newAnisotropyStrength: Math.min(Math.sqrt((Bb - hb) / Math.max(1 - hb, 1e-4)), 1)
                  }
                }(hb.specularRoughness, hb.specularRoughnessAnisotropy);
                Bb = bb.newBaseRoughness, Ob = bb.newAnisotropyStrength
              }
              ub.pbrMetallicRoughness && (ub.pbrMetallicRoughness.roughnessFactor = Bb);
              const Gb = {
                anisotropyStrength: Ob,
                anisotropyRotation: hb.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return ub.extensions[KO] = Gb, bb(ub)
            }
            const Ub = Gb ? this._exporter._materialExporter.getTextureInfo(Gb) : null,
              Lb = {
                anisotropyStrength: hb.specularRoughnessAnisotropy,
                anisotropyRotation: hb.geometryTangentAngle,
                anisotropyTexture: Ub || void 0,
                extensions: {}
              };
            hb._useGltfStyleAnisotropy || (ub.extensions.KHR_materials_openpbr = {}, (Bb = this._exporter._glTF).extensionsUsed || (Bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[KO] = Lb
          }
          bb(ub)
        }))
      }
    }
    let CO = !1;

    function dO() {
      CO || (CO = !0, JB.RegisterExtension(KO, (bb => new WO(bb))))
    }
    dO();
    const rO = "KHR_materials_clearcoat";

    function jO(bb, ub) {
      const hb = new gb.f(ub.name, ub.ZN());
      return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
    }
    class nO {
      constructor(bb) {
        this.name = rO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof du) {
          if (hb.clearCoat.isEnabled) return hb.clearCoat.texture && Bb.push(hb.clearCoat.texture), !hb.clearCoat.useRoughnessFromMainTexture && hb.clearCoat.textureRoughness && Bb.push(hb.clearCoat.textureRoughness), hb.clearCoat.bumpTexture && Bb.push(hb.clearCoat.bumpTexture), Bb
        } else if (hb instanceof Qu && hb.coatWeight > 0) {
          let bb = !1;
          if (hb.coatWeightTexture ? hb.coatRoughnessTexture ? hb._useCoatRoughnessFromGreenChannel && hb.coatWeightTexture.getInternalTexture() === hb.coatRoughnessTexture.getInternalTexture() ? (Bb.push(hb.coatWeightTexture), Bb.push(hb.coatRoughnessTexture)) : bb = !0 : Bb.push(hb.coatWeightTexture) : hb.coatRoughnessTexture && (hb._useCoatRoughnessFromGreenChannel ? Bb.push(hb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const ub = bb.coatWeightTexture,
                hb = ub && ub.getInternalTexture() ? ub.getInternalTexture().uniqueId : "NoCoat",
                Bb = bb.coatRoughnessTexture;
              return `${hb}_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(hb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const ub = await async function(bb) {
                const ub = bb.ZN(),
                  hb = bb.coatWeightTexture,
                  Bb = bb.coatRoughnessTexture;
                return hb || Bb ? (await Uh("CoatTexture", Sh(hb ? Lh(hb, 0) : Yh(1), Bb ? Lh(Bb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : Yh(1)), ub)).getInternalTexture() : null
              }(hb);
              ub && (this._cachedInternalTexturesMap[bb] = ub)
            }
            this._cachedInternalTexturesMap[bb] && (hb.coatWeightTexture && (this._mergedTexturesMap[hb.coatWeightTexture.uniqueId] = jO(this._cachedInternalTexturesMap[bb], hb.coatWeightTexture), Bb.push(this._mergedTexturesMap[hb.coatWeightTexture.uniqueId])), hb.coatRoughnessTexture && (this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId] = jO(this._cachedInternalTexturesMap[bb], hb.coatRoughnessTexture), Bb.push(this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId])))
          }
          return hb.geometryCoatNormalTexture && Bb.push(hb.geometryCoatNormalTexture), Bb
        }
        return []
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof du) {
            if (!hb.clearCoat.isEnabled) return void bb(ub);
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const Bb = this._exporter._materialExporter.getTextureInfo(hb.clearCoat.texture);
            let Ob;
            Ob = hb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(hb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(hb.clearCoat.textureRoughness), hb.clearCoat.isTintEnabled && ju.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${hb.name}`), hb.clearCoat.remapF0OnInterfaceChange && ju.k.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${hb.name}`);
            const Gb = this._exporter._materialExporter.getTextureInfo(hb.clearCoat.bumpTexture),
              Ub = {
                clearcoatFactor: hb.clearCoat.intensity,
                clearcoatTexture: Bb ?? void 0,
                clearcoatRoughnessFactor: hb.clearCoat.roughness,
                clearcoatRoughnessTexture: Ob ?? void 0,
                clearcoatNormalTexture: Gb ?? void 0
              };
            null === Ub.clearcoatTexture && null === Ub.clearcoatRoughnessTexture && null === Ub.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[rO] = Ub
          } else if (hb instanceof Qu) {
            if (0 == hb.coatWeight) return void bb(ub);
            let Bb, Ob, Gb, Ub;
            this._wasUsed = !0, ub.extensions = ub.extensions || {}, hb.coatWeightTexture && (Bb = this._mergedTexturesMap[hb.coatWeightTexture.uniqueId], Ob = this._exporter._materialExporter.getTextureInfo(Bb)), hb.coatRoughnessTexture && (Gb = this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId], Ub = this._exporter._materialExporter.getTextureInfo(Gb)), hb.coatColorTexture && ju.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${hb.name}`);
            const Lb = this._exporter._materialExporter.getTextureInfo(hb.geometryCoatNormalTexture),
              Yb = {
                clearcoatFactor: hb.coatWeight,
                clearcoatTexture: Ob ?? void 0,
                clearcoatRoughnessFactor: hb.coatRoughness,
                clearcoatRoughnessTexture: Ub ?? void 0,
                clearcoatNormalTexture: Lb ?? void 0
              };
            null === Yb.clearcoatTexture && null === Yb.clearcoatRoughnessTexture && null === Yb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[rO] = Yb
          }
          bb(ub)
        }))
      }
    }
    let DO = !1;

    function xO() {
      DO || (DO = !0, JB.RegisterExtension(rO, (bb => new nO(bb))))
    }
    xO();
    const zO = "KHR_materials_coat";

    function gO(bb) {
      const ub = bb.coatRoughnessAnisotropyTexture,
        hb = bb.geometryCoatTangentTexture;
      return `${ub&&ub.getInternalTexture()?ub.getInternalTexture().uniqueId:"NoStrength"}_${hb&&hb.getInternalTexture()?hb.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function iO(bb, ub) {
      const hb = new gb.f(ub.name, ub.ZN());
      return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
    }
    class vO {
      constructor(bb) {
        this.name = zO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof du) {
          if (hb.clearCoat.isEnabled) return hb.clearCoat.texture && Bb.push(hb.clearCoat.texture), !hb.clearCoat.useRoughnessFromMainTexture && hb.clearCoat.textureRoughness && Bb.push(hb.clearCoat.textureRoughness), hb.clearCoat.bumpTexture && Bb.push(hb.clearCoat.bumpTexture), hb.clearCoat.tintTexture && Bb.push(hb.clearCoat.tintTexture), Bb
        } else if (hb instanceof Qu && hb.coatWeight > 0) {
          let bb = !1;
          if (hb.coatWeightTexture ? hb.coatRoughnessTexture ? hb._useCoatRoughnessFromGreenChannel && hb.coatWeightTexture.getInternalTexture() === hb.coatRoughnessTexture.getInternalTexture() ? (Bb.push(hb.coatWeightTexture), Bb.push(hb.coatRoughnessTexture)) : bb = !0 : Bb.push(hb.coatWeightTexture) : hb.coatRoughnessTexture && (hb._useCoatRoughnessFromGreenChannel ? Bb.push(hb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const ub = bb.coatWeightTexture,
                hb = ub && ub.getInternalTexture() ? ub.getInternalTexture().uniqueId : "NoCoat",
                Bb = bb.coatRoughnessTexture;
              return `${hb}_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(hb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const ub = await async function(bb) {
                const ub = bb.ZN(),
                  hb = bb.coatWeightTexture,
                  Bb = bb.coatRoughnessTexture;
                return hb || Bb ? (await Uh("CoatTexture", Sh(hb ? Lh(hb, 0) : Yh(1), Bb ? Lh(Bb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : Yh(1)), ub)).getInternalTexture() : null
              }(hb);
              ub && (this._cachedInternalTexturesMap[bb] = ub)
            }
            this._cachedInternalTexturesMap[bb] && (hb.coatWeightTexture && (this._mergedTexturesMap[hb.coatWeightTexture.uniqueId] = iO(this._cachedInternalTexturesMap[bb], hb.coatWeightTexture), Bb.push(this._mergedTexturesMap[hb.coatWeightTexture.uniqueId])), hb.coatRoughnessTexture && (this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId] = iO(this._cachedInternalTexturesMap[bb], hb.coatRoughnessTexture), Bb.push(this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId])))
          }
          if (hb.geometryCoatNormalTexture && Bb.push(hb.geometryCoatNormalTexture), hb.coatColorTexture && Bb.push(hb.coatColorTexture), hb.coatRoughnessAnisotropy > 0) {
            const bb = gO(hb);
            if (this._mergedTexturesMap[bb]) Bb.push(this._mergedTexturesMap[bb]);
            else {
              const ub = await async function(bb) {
                const ub = bb.ZN(),
                  hb = bb.coatRoughnessAnisotropyTexture,
                  Bb = bb.geometryCoatTangentTexture;
                return hb || Bb ? await Uh("AnisotropyTexture", Sh(Bb ? Lh(Bb, 0) : Yh(1), Bb ? Lh(Bb, 1) : Yh(0), hb ? Lh(hb, 0) : Yh(1)), ub) : null
              }(hb);
              ub && (Bb.push(ub), this._mergedTexturesMap[bb] = ub)
            }
            return Bb
          }
          return Bb
        }
        return []
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          var Bb;
          if (hb instanceof du) {
            if (!hb.clearCoat.isEnabled) return void bb(ub);
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const Bb = this._exporter._materialExporter.getTextureInfo(hb.clearCoat.texture);
            let Ob, Gb;
            Ob = hb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(hb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(hb.clearCoat.textureRoughness), hb.clearCoat.isTintEnabled && (Gb = this._exporter._materialExporter.getTextureInfo(hb.clearCoat.tintTexture));
            const Ub = this._exporter._materialExporter.getTextureInfo(hb.clearCoat.bumpTexture),
              Lb = hb.clearCoat.indexOfRefraction,
              Yb = {
                coatFactor: hb.clearCoat.intensity,
                coatTexture: Bb ?? void 0,
                coatRoughnessFactor: hb.clearCoat.roughness,
                coatRoughnessTexture: Ob ?? void 0,
                coatNormalTexture: Ub ?? void 0,
                coatColorFactor: hb.clearCoat.tintColor.ZBb(),
                coatColorTexture: Gb ?? void 0,
                coatIor: 1.5 !== Lb ? Lb : void 0
              };
            null === Yb.coatTexture && null === Yb.coatRoughnessTexture && null === Yb.coatRoughnessTexture && null === Yb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[zO] = Yb
          } else if (hb instanceof Qu) {
            if (0 == hb.coatWeight) return void bb(ub);
            let Ob, Gb, Ub, Lb;
            this._wasUsed = !0, ub.extensions = ub.extensions || {}, hb.coatWeightTexture && (Ob = this._mergedTexturesMap[hb.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[hb.coatWeightTexture.uniqueId] : hb.coatWeightTexture, Gb = this._exporter._materialExporter.getTextureInfo(Ob)), hb.coatRoughnessTexture && (Ub = this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[hb.coatRoughnessTexture.uniqueId] : hb.coatRoughnessTexture, Lb = this._exporter._materialExporter.getTextureInfo(Ub));
            const Yb = this._exporter._materialExporter.getTextureInfo(hb.geometryCoatNormalTexture),
              Sb = this._exporter._materialExporter.getTextureInfo(hb.coatColorTexture),
              ab = hb.coatIor,
              Hb = hb.coatDarkening,
              wb = hb.coatRoughnessTexture,
              Zb = gO(hb),
              Xb = this._mergedTexturesMap[Zb];
            let pb, ob = 0,
              Ab = 0;
            if (hb.coatRoughnessAnisotropy > 0) {
              if (wb || Xb) {
                const bb = Xb ? this._exporter._materialExporter.getTextureInfo(Xb) : null;
                ob = hb.coatRoughnessAnisotropy, Ab = hb.geometryCoatTangentAngle, pb = bb || void 0
              } else {
                let bb = hb.coatRoughness,
                  Bb = hb.coatRoughnessAnisotropy;
                if (!hb._useGltfStyleAnisotropy) {
                  const ub = function(bb, ub) {
                    const hb = bb * bb,
                      Bb = hb * Math.sqrt(2 / (1 + (1 - ub) * (1 - ub))),
                      Ob = (1 - ub) * Bb;
                    return {
                      newBaseRoughness: Math.sqrt(Ob),
                      newAnisotropyStrength: Math.min(Math.sqrt((Bb - hb) / Math.max(1 - hb, 1e-4)), 1)
                    }
                  }(hb.coatRoughness, hb.coatRoughnessAnisotropy);
                  bb = ub.newBaseRoughness, Bb = ub.newAnisotropyStrength
                }
                ub.pbrMetallicRoughness && (ub.pbrMetallicRoughness.roughnessFactor = bb), ob = Bb, Ab = hb.geometryCoatTangentAngle + .5 * Math.PI, pb = void 0
              }
              hb._useGltfStyleAnisotropy || (ub.extensions.KHR_materials_openpbr = {}, (Bb = this._exporter._glTF).extensionsUsed || (Bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const lb = {
              coatFactor: hb.coatWeight,
              coatTexture: Gb ?? void 0,
              coatRoughnessFactor: hb.coatRoughness,
              coatRoughnessTexture: Lb ?? void 0,
              coatNormalTexture: Yb ?? void 0,
              coatColorFactor: hb.coatColor.ZBb(),
              coatColorTexture: Sb ?? void 0,
              coatIor: 1.5 !== ab ? ab : void 0,
              coatDarkeningFactor: 1 !== Hb ? Hb : void 0,
              coatAnisotropyRotation: Ab,
              coatAnisotropyStrength: ob,
              coatAnisotropyTexture: pb
            };
            null === lb.coatTexture && null === lb.coatRoughnessTexture && null === lb.coatRoughnessTexture && null === lb.coatAnisotropyTexture && null === lb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[zO] = lb
          }
          bb(ub)
        }))
      }
    }
    let tO = !1;

    function JO() {
      tO || (tO = !0, JB.RegisterExtension(zO, (bb => new vO(bb))))
    }
    JO();
    let eO = (() => {
      var bb, ub, hb, Bb, Ob, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, xb, zb, gb, ib, vb, tb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Fb, fb, kb, Tb, cb, Qb, Rb, bu, uu, hu, Bu, Ou, Gu, Uu, Lu, Yu, Su, au, Hu, wu, Zu, Xu, pu, ou, Au, lu, Ku;
      let Wu, Cu, ju, nu, Du, xu, zu, gu, iu, vu, tu, Ju, eu, Nu, su, Mu, mu, Iu, Pu, qu, Eu, yu, Vu, Fu, fu, ku, Tu, cu, Qu, Ru, bh, uh, hh, Bh, Oh, Gh, Uh, Lh, Yh, Sh, ah, Hh, wh, Zh, Xh, ph, oh, Ah, lh, Kh, Wh, Ch, dh, rh, jh, nh, Dh, xh, zh, gh, ih, vh, th, Jh, eh, Nh, sh, Mh, mh = du,
        Ih = [],
        Ph = [],
        qh = [],
        Eh = [],
        yh = [],
        Vh = [],
        Fh = [],
        fh = [],
        kh = [],
        Th = [],
        ch = [],
        Qh = [],
        Rh = [],
        bB = [],
        uB = [],
        hB = [],
        BB = [],
        OB = [],
        GB = [],
        UB = [],
        LB = [],
        YB = [],
        SB = [],
        aB = [],
        HB = [],
        wB = [],
        ZB = [],
        XB = [],
        pB = [],
        oB = [],
        AB = [],
        lB = [],
        KB = [],
        WB = [],
        CB = [],
        dB = [],
        rB = [],
        jB = [],
        nB = [],
        DB = [],
        xB = [],
        zB = [],
        gB = [],
        iB = [],
        vB = [],
        tB = [],
        JB = [],
        eB = [],
        NB = [],
        sB = [],
        MB = [],
        mB = [],
        IB = [],
        PB = [],
        qB = [],
        EB = [],
        yB = [],
        VB = [],
        FB = [],
        fB = [],
        kB = [],
        TB = [],
        cB = [],
        QB = [],
        RB = [],
        bO = [],
        uO = [],
        hO = [],
        BO = [],
        OO = [],
        GO = [],
        UO = [],
        LO = [],
        YO = [],
        SO = [],
        aO = [],
        HO = [],
        wO = [],
        ZO = [],
        XO = [],
        pO = [],
        oO = [],
        AO = [],
        lO = [],
        KO = [],
        WO = [],
        CO = [],
        dO = [],
        rO = [],
        jO = [],
        nO = [],
        DO = [],
        xO = [],
        zO = [],
        gO = [],
        iO = [],
        vO = [],
        tO = [],
        JO = [],
        eO = [],
        NO = [],
        sO = [],
        MO = [],
        mO = [],
        IO = [],
        PO = [],
        qO = [],
        EO = [],
        yO = [],
        VO = [],
        FO = [],
        fO = [],
        kO = [],
        TO = [],
        cO = [],
        QO = [],
        RO = [],
        bG = [],
        uG = [],
        hG = [],
        BG = [],
        OG = [],
        GG = [],
        UG = [],
        LG = [],
        YG = [],
        SG = [],
        aG = [],
        HG = [],
        wG = [],
        ZG = [],
        XG = [],
        pG = [];
      return bb = class extends mh {
        get directIntensity() {
          return (0, nb.b)(this, ub, "f")
        }
        set directIntensity(bb) {
          (0, nb.f)(this, ub, bb, "f")
        }
        get emissiveIntensity() {
          return (0, nb.b)(this, hb, "f")
        }
        set emissiveIntensity(bb) {
          (0, nb.f)(this, hb, bb, "f")
        }
        get environmentIntensity() {
          return (0, nb.b)(this, Bb, "f")
        }
        set environmentIntensity(bb) {
          (0, nb.f)(this, Bb, bb, "f")
        }
        get specularIntensity() {
          return (0, nb.b)(this, Ob, "f")
        }
        set specularIntensity(bb) {
          (0, nb.f)(this, Ob, bb, "f")
        }
        get disableBumpMap() {
          return (0, nb.b)(this, Ub, "f")
        }
        set disableBumpMap(bb) {
          (0, nb.f)(this, Ub, bb, "f")
        }
        get albedoTexture() {
          return (0, nb.b)(this, Lb, "f")
        }
        set albedoTexture(bb) {
          (0, nb.f)(this, Lb, bb, "f")
        }
        get baseWeightTexture() {
          return (0, nb.b)(this, Yb, "f")
        }
        set baseWeightTexture(bb) {
          (0, nb.f)(this, Yb, bb, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, nb.b)(this, Sb, "f")
        }
        set baseDiffuseRoughnessTexture(bb) {
          (0, nb.f)(this, Sb, bb, "f")
        }
        get ambientTexture() {
          return (0, nb.b)(this, ab, "f")
        }
        set ambientTexture(bb) {
          (0, nb.f)(this, ab, bb, "f")
        }
        get ambientTextureStrength() {
          return (0, nb.b)(this, Hb, "f")
        }
        set ambientTextureStrength(bb) {
          (0, nb.f)(this, Hb, bb, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, nb.b)(this, wb, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(bb) {
          (0, nb.f)(this, wb, bb, "f")
        }
        get opacityTexture() {
          return (0, nb.b)(this, Zb, "f")
        }
        set opacityTexture(bb) {
          (0, nb.f)(this, Zb, bb, "f")
        }
        get reflectionTexture() {
          return (0, nb.b)(this, Xb, "f")
        }
        set reflectionTexture(bb) {
          (0, nb.f)(this, Xb, bb, "f")
        }
        get emissiveTexture() {
          return (0, nb.b)(this, pb, "f")
        }
        set emissiveTexture(bb) {
          (0, nb.f)(this, pb, bb, "f")
        }
        get reflectivityTexture() {
          return (0, nb.b)(this, ob, "f")
        }
        set reflectivityTexture(bb) {
          (0, nb.f)(this, ob, bb, "f")
        }
        get metallicTexture() {
          return (0, nb.b)(this, Ab, "f")
        }
        set metallicTexture(bb) {
          (0, nb.f)(this, Ab, bb, "f")
        }
        get metallic() {
          return (0, nb.b)(this, lb, "f")
        }
        set metallic(bb) {
          (0, nb.f)(this, lb, bb, "f")
        }
        get roughness() {
          return (0, nb.b)(this, Kb, "f")
        }
        set roughness(bb) {
          (0, nb.f)(this, Kb, bb, "f")
        }
        get metallicF0Factor() {
          return (0, nb.b)(this, Wb, "f")
        }
        set metallicF0Factor(bb) {
          (0, nb.f)(this, Wb, bb, "f")
        }
        get metallicReflectanceColor() {
          return (0, nb.b)(this, Cb, "f")
        }
        set metallicReflectanceColor(bb) {
          (0, nb.f)(this, Cb, bb, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, nb.b)(this, db, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(bb) {
          (0, nb.f)(this, db, bb, "f")
        }
        get metallicReflectanceTexture() {
          return (0, nb.b)(this, rb, "f")
        }
        set metallicReflectanceTexture(bb) {
          (0, nb.f)(this, rb, bb, "f")
        }
        get reflectanceTexture() {
          return (0, nb.b)(this, jb, "f")
        }
        set reflectanceTexture(bb) {
          (0, nb.f)(this, jb, bb, "f")
        }
        get microSurfaceTexture() {
          return (0, nb.b)(this, xb, "f")
        }
        set microSurfaceTexture(bb) {
          (0, nb.f)(this, xb, bb, "f")
        }
        get bumpTexture() {
          return (0, nb.b)(this, zb, "f")
        }
        set bumpTexture(bb) {
          (0, nb.f)(this, zb, bb, "f")
        }
        get lightmapTexture() {
          return (0, nb.b)(this, gb, "f")
        }
        set lightmapTexture(bb) {
          (0, nb.f)(this, gb, bb, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(bb) {
          this.subSurface.refractionTexture = bb, bb ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, nb.b)(this, ib, "f")
        }
        set ambientColor(bb) {
          (0, nb.f)(this, ib, bb, "f")
        }
        get albedoColor() {
          return (0, nb.b)(this, vb, "f")
        }
        set albedoColor(bb) {
          (0, nb.f)(this, vb, bb, "f")
        }
        get baseWeight() {
          return (0, nb.b)(this, tb, "f")
        }
        set baseWeight(bb) {
          (0, nb.f)(this, tb, bb, "f")
        }
        get baseDiffuseRoughness() {
          return (0, nb.b)(this, eb, "f")
        }
        set baseDiffuseRoughness(bb) {
          (0, nb.f)(this, eb, bb, "f")
        }
        get reflectivityColor() {
          return (0, nb.b)(this, Nb, "f")
        }
        set reflectivityColor(bb) {
          (0, nb.f)(this, Nb, bb, "f")
        }
        get reflectionColor() {
          return (0, nb.b)(this, sb, "f")
        }
        set reflectionColor(bb) {
          (0, nb.f)(this, sb, bb, "f")
        }
        get emissiveColor() {
          return (0, nb.b)(this, Mb, "f")
        }
        set emissiveColor(bb) {
          (0, nb.f)(this, Mb, bb, "f")
        }
        get microSurface() {
          return (0, nb.b)(this, mb, "f")
        }
        set microSurface(bb) {
          (0, nb.f)(this, mb, bb, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(bb) {
          this.subSurface.indexOfRefraction = bb
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(bb) {
          this.subSurface.invertRefractionY = bb
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(bb) {
          this.subSurface.linkRefractionWithTransparency = bb, bb && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, nb.b)(this, Ib, "f")
        }
        set useLightmapAsShadowmap(bb) {
          (0, nb.f)(this, Ib, bb, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, nb.b)(this, Pb, "f")
        }
        set useAlphaFromAlbedoTexture(bb) {
          (0, nb.f)(this, Pb, bb, "f")
        }
        get forceAlphaTest() {
          return (0, nb.b)(this, qb, "f")
        }
        set forceAlphaTest(bb) {
          (0, nb.f)(this, qb, bb, "f")
        }
        get alphaCutOff() {
          return (0, nb.b)(this, Eb, "f")
        }
        set alphaCutOff(bb) {
          (0, nb.f)(this, Eb, bb, "f")
        }
        get useSpecularOverAlpha() {
          return (0, nb.b)(this, yb, "f")
        }
        set useSpecularOverAlpha(bb) {
          (0, nb.f)(this, yb, bb, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, nb.b)(this, Fb, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(bb) {
          (0, nb.f)(this, Fb, bb, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, nb.b)(this, fb, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(bb) {
          (0, nb.f)(this, fb, bb, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, nb.b)(this, kb, "f")
        }
        set useRoughnessFromMetallicTextureGreen(bb) {
          (0, nb.f)(this, kb, bb, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, nb.b)(this, Tb, "f")
        }
        set useMetallnessFromMetallicTextureBlue(bb) {
          (0, nb.f)(this, Tb, bb, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, nb.b)(this, cb, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(bb) {
          (0, nb.f)(this, cb, bb, "f")
        }
        get useAmbientInGrayScale() {
          return (0, nb.b)(this, Qb, "f")
        }
        set useAmbientInGrayScale(bb) {
          (0, nb.f)(this, Qb, bb, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, nb.b)(this, Rb, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(bb) {
          (0, nb.f)(this, Rb, bb, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === du.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(bb) {
          bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? du.LIGHTFALLOFF_PHYSICAL : du.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === du.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(bb) {
          bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? du.LIGHTFALLOFF_GLTF : du.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, nb.b)(this, bu, "f")
        }
        set useRadianceOverAlpha(bb) {
          (0, nb.f)(this, bu, bb, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, nb.b)(this, uu, "f")
        }
        set useObjectSpaceNormalMap(bb) {
          (0, nb.f)(this, uu, bb, "f")
        }
        get useParallax() {
          return (0, nb.b)(this, hu, "f")
        }
        set useParallax(bb) {
          (0, nb.f)(this, hu, bb, "f")
        }
        get useParallaxOcclusion() {
          return (0, nb.b)(this, Bu, "f")
        }
        set useParallaxOcclusion(bb) {
          (0, nb.f)(this, Bu, bb, "f")
        }
        get parallaxScaleBias() {
          return (0, nb.b)(this, Ou, "f")
        }
        set parallaxScaleBias(bb) {
          (0, nb.f)(this, Ou, bb, "f")
        }
        get disableLighting() {
          return (0, nb.b)(this, Gu, "f")
        }
        set disableLighting(bb) {
          (0, nb.f)(this, Gu, bb, "f")
        }
        get forceIrradianceInFragment() {
          return (0, nb.b)(this, Uu, "f")
        }
        set forceIrradianceInFragment(bb) {
          (0, nb.f)(this, Uu, bb, "f")
        }
        get maxSimultaneousLights() {
          return (0, nb.b)(this, Lu, "f")
        }
        set maxSimultaneousLights(bb) {
          (0, nb.f)(this, Lu, bb, "f")
        }
        get invertNormalMapX() {
          return (0, nb.b)(this, Yu, "f")
        }
        set invertNormalMapX(bb) {
          (0, nb.f)(this, Yu, bb, "f")
        }
        get invertNormalMapY() {
          return (0, nb.b)(this, Su, "f")
        }
        set invertNormalMapY(bb) {
          (0, nb.f)(this, Su, bb, "f")
        }
        get twoSidedLighting() {
          return (0, nb.b)(this, au, "f")
        }
        set twoSidedLighting(bb) {
          (0, nb.f)(this, au, bb, "f")
        }
        get useAlphaFresnel() {
          return (0, nb.b)(this, Hu, "f")
        }
        set useAlphaFresnel(bb) {
          (0, nb.f)(this, Hu, bb, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, nb.b)(this, wu, "f")
        }
        set useLinearAlphaFresnel(bb) {
          (0, nb.f)(this, wu, bb, "f")
        }
        get environmentBRDFTexture() {
          return (0, nb.b)(this, Zu, "f")
        }
        set environmentBRDFTexture(bb) {
          (0, nb.f)(this, Zu, bb, "f")
        }
        get forceNormalForward() {
          return (0, nb.b)(this, Xu, "f")
        }
        set forceNormalForward(bb) {
          (0, nb.f)(this, Xu, bb, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, nb.b)(this, pu, "f")
        }
        set enableSpecularAntiAliasing(bb) {
          (0, nb.f)(this, pu, bb, "f")
        }
        get useHorizonOcclusion() {
          return (0, nb.b)(this, ou, "f")
        }
        set useHorizonOcclusion(bb) {
          (0, nb.f)(this, ou, bb, "f")
        }
        get useRadianceOcclusion() {
          return (0, nb.b)(this, Au, "f")
        }
        set useRadianceOcclusion(bb) {
          (0, nb.f)(this, Au, bb, "f")
        }
        get unlit() {
          return (0, nb.b)(this, lu, "f")
        }
        set unlit(bb) {
          (0, nb.f)(this, lu, bb, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, nb.b)(this, Ku, "f")
        }
        set applyDecalMapAfterDetailMap(bb) {
          (0, nb.f)(this, Ku, bb, "f")
        }
        constructor(Gb, Db) {
          super(Gb, Db, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ub.set(this, ((0, nb.k)(this, Ih), (0, nb.k)(this, Ph, 1))), hb.set(this, ((0, nb.k)(this, qh), (0, nb.k)(this, Eh, 1))), Bb.set(this, ((0, nb.k)(this, yh), (0, nb.k)(this, Vh, 1))), Ob.set(this, ((0, nb.k)(this, Fh), (0, nb.k)(this, fh, 1))), Ub.set(this, ((0, nb.k)(this, kh), (0, nb.k)(this, Th, !1))), Lb.set(this, ((0, nb.k)(this, ch), (0, nb.k)(this, Qh, void 0))), Yb.set(this, ((0, nb.k)(this, Rh), (0, nb.k)(this, bB, void 0))), Sb.set(this, ((0, nb.k)(this, uB), (0, nb.k)(this, hB, void 0))), ab.set(this, ((0, nb.k)(this, BB), (0, nb.k)(this, OB, void 0))), Hb.set(this, ((0, nb.k)(this, GB), (0, nb.k)(this, UB, 1))), wb.set(this, ((0, nb.k)(this, LB), (0, nb.k)(this, YB, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Zb.set(this, ((0, nb.k)(this, SB), (0, nb.k)(this, aB, void 0))), Xb.set(this, ((0, nb.k)(this, HB), (0, nb.k)(this, wB, void 0))), pb.set(this, ((0, nb.k)(this, ZB), (0, nb.k)(this, XB, void 0))), ob.set(this, ((0, nb.k)(this, pB), (0, nb.k)(this, oB, void 0))), Ab.set(this, ((0, nb.k)(this, AB), (0, nb.k)(this, lB, void 0))), lb.set(this, ((0, nb.k)(this, KB), (0, nb.k)(this, WB, void 0))), Kb.set(this, ((0, nb.k)(this, CB), (0, nb.k)(this, dB, void 0))), Wb.set(this, ((0, nb.k)(this, rB), (0, nb.k)(this, jB, 1))), Cb.set(this, ((0, nb.k)(this, nB), (0, nb.k)(this, DB, Vb.b.White()))), db.set(this, ((0, nb.k)(this, xB), (0, nb.k)(this, zB, !1))), rb.set(this, ((0, nb.k)(this, gB), (0, nb.k)(this, iB, void 0))), jb.set(this, ((0, nb.k)(this, vB), (0, nb.k)(this, tB, void 0))), xb.set(this, ((0, nb.k)(this, JB), (0, nb.k)(this, eB, void 0))), zb.set(this, ((0, nb.k)(this, NB), (0, nb.k)(this, sB, void 0))), gb.set(this, ((0, nb.k)(this, MB), (0, nb.k)(this, mB, void 0))), ib.set(this, ((0, nb.k)(this, IB), (0, nb.k)(this, PB, new Vb.b(0, 0, 0)))), vb.set(this, ((0, nb.k)(this, qB), (0, nb.k)(this, EB, new Vb.b(1, 1, 1)))), tb.set(this, ((0, nb.k)(this, yB), (0, nb.k)(this, VB, 1))), eb.set(this, ((0, nb.k)(this, FB), (0, nb.k)(this, fB, void 0))), Nb.set(this, ((0, nb.k)(this, kB), (0, nb.k)(this, TB, new Vb.b(1, 1, 1)))), sb.set(this, ((0, nb.k)(this, cB), (0, nb.k)(this, QB, new Vb.b(1, 1, 1)))), Mb.set(this, ((0, nb.k)(this, RB), (0, nb.k)(this, bO, new Vb.b(0, 0, 0)))), mb.set(this, ((0, nb.k)(this, uO), (0, nb.k)(this, hO, 1))), Ib.set(this, ((0, nb.k)(this, BO), (0, nb.k)(this, OO, !1))), Pb.set(this, ((0, nb.k)(this, GO), (0, nb.k)(this, UO, !1))), qb.set(this, ((0, nb.k)(this, LO), (0, nb.k)(this, YO, !1))), Eb.set(this, ((0, nb.k)(this, SO), (0, nb.k)(this, aO, .4))), yb.set(this, ((0, nb.k)(this, HO), (0, nb.k)(this, wO, !0))), Fb.set(this, ((0, nb.k)(this, ZO), (0, nb.k)(this, XO, !1))), fb.set(this, ((0, nb.k)(this, pO), (0, nb.k)(this, oO, !0))), kb.set(this, ((0, nb.k)(this, AO), (0, nb.k)(this, lO, !1))), Tb.set(this, ((0, nb.k)(this, KO), (0, nb.k)(this, WO, !1))), cb.set(this, ((0, nb.k)(this, CO), (0, nb.k)(this, dO, !1))), Qb.set(this, ((0, nb.k)(this, rO), (0, nb.k)(this, jO, !1))), Rb.set(this, ((0, nb.k)(this, nO), (0, nb.k)(this, DO, !1))), bu.set(this, ((0, nb.k)(this, xO), (0, nb.k)(this, zO, !0))), uu.set(this, ((0, nb.k)(this, gO), (0, nb.k)(this, iO, !1))), hu.set(this, ((0, nb.k)(this, vO), (0, nb.k)(this, tO, !1))), Bu.set(this, ((0, nb.k)(this, JO), (0, nb.k)(this, eO, !1))), Ou.set(this, ((0, nb.k)(this, NO), (0, nb.k)(this, sO, .05))), Gu.set(this, ((0, nb.k)(this, MO), (0, nb.k)(this, mO, !1))), Uu.set(this, ((0, nb.k)(this, IO), (0, nb.k)(this, PO, !1))), Lu.set(this, ((0, nb.k)(this, qO), (0, nb.k)(this, EO, 4))), Yu.set(this, ((0, nb.k)(this, yO), (0, nb.k)(this, VO, !1))), Su.set(this, ((0, nb.k)(this, FO), (0, nb.k)(this, fO, !1))), au.set(this, ((0, nb.k)(this, kO), (0, nb.k)(this, TO, !1))), Hu.set(this, ((0, nb.k)(this, cO), (0, nb.k)(this, QO, !1))), wu.set(this, ((0, nb.k)(this, RO), (0, nb.k)(this, bG, !1))), Zu.set(this, ((0, nb.k)(this, uG), (0, nb.k)(this, hG, null))), Xu.set(this, ((0, nb.k)(this, BG), (0, nb.k)(this, OG, !1))), pu.set(this, ((0, nb.k)(this, GG), (0, nb.k)(this, UG, !1))), ou.set(this, ((0, nb.k)(this, LG), (0, nb.k)(this, YG, !0))), Au.set(this, ((0, nb.k)(this, SG), (0, nb.k)(this, aG, !0))), lu.set(this, ((0, nb.k)(this, HG), (0, nb.k)(this, wG, !1))), Ku.set(this, ((0, nb.k)(this, ZG), (0, nb.k)(this, XG, !1))), (0, nb.k)(this, pG), this._environmentBRDFTexture = Jb(this.ZN())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(ub) {
          let hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ob = ru.c.Clone((() => new bb(ub, this.ZN())), this, {
            cloneTexturesOnlyOnce: hb
          });
          return Ob.id = ub, Ob.name = ub, this.stencil.copyTo(Ob.stencil), this._clonePlugins(Ob, Bb), Ob
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.PBRMaterial", bb
        }
        static Parse(ub, hb, Bb) {
          const Ob = ru.c.Parse((() => new bb(ub.name, hb)), ub, hb, Bb);
          return ub.stencil && Ob.stencil.parse(ub.stencil, hb, Bb), Gb.e._ParsePlugins(ub, Ob, hb, Bb), ub.clearCoat && Ob.clearCoat.parse(ub.clearCoat, hb, Bb), ub.anisotropy && Ob.anisotropy.parse(ub.anisotropy, hb, Bb), ub.brdf && Ob.brdf.parse(ub.brdf, hb, Bb), ub.sheen && Ob.sheen.parse(ub.sheen, hb, Bb), ub.subSurface && Ob.subSurface.parse(ub.subSurface, hb, Bb), ub.iridescence && Ob.iridescence.parse(ub.iridescence, hb, Bb), Ob
        }
      }, ub = new WeakMap, hb = new WeakMap, Bb = new WeakMap, Ob = new WeakMap, Ub = new WeakMap, Lb = new WeakMap, Yb = new WeakMap, Sb = new WeakMap, ab = new WeakMap, Hb = new WeakMap, wb = new WeakMap, Zb = new WeakMap, Xb = new WeakMap, pb = new WeakMap, ob = new WeakMap, Ab = new WeakMap, lb = new WeakMap, Kb = new WeakMap, Wb = new WeakMap, Cb = new WeakMap, db = new WeakMap, rb = new WeakMap, jb = new WeakMap, xb = new WeakMap, zb = new WeakMap, gb = new WeakMap, ib = new WeakMap, vb = new WeakMap, tb = new WeakMap, eb = new WeakMap, Nb = new WeakMap, sb = new WeakMap, Mb = new WeakMap, mb = new WeakMap, Ib = new WeakMap, Pb = new WeakMap, qb = new WeakMap, Eb = new WeakMap, yb = new WeakMap, Fb = new WeakMap, fb = new WeakMap, kb = new WeakMap, Tb = new WeakMap, cb = new WeakMap, Qb = new WeakMap, Rb = new WeakMap, bu = new WeakMap, uu = new WeakMap, hu = new WeakMap, Bu = new WeakMap, Ou = new WeakMap, Gu = new WeakMap, Uu = new WeakMap, Lu = new WeakMap, Yu = new WeakMap, Su = new WeakMap, au = new WeakMap, Hu = new WeakMap, wu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, pu = new WeakMap, ou = new WeakMap, Au = new WeakMap, lu = new WeakMap, Ku = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(mh[Symbol.metadata] ?? null) : void 0;
        Wu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Cu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ju = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], nu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Du = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], xu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], zu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], gu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], iu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], vu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], tu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Ju = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], eu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Nu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], su = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Mu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], mu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Iu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Pu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, Db.p)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Eu = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], yu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Fu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], fu = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ku = [(0, Db.D)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty", null)], Tu = [(0, Db.p)("ambient"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], cu = [(0, Db.p)("albedo"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Qu = [(0, Db.K)("baseWeight"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Ru = [(0, Db.K)("baseDiffuseRoughness"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], bh = [(0, Db.p)("reflectivity"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], uh = [(0, Db.p)("reflection"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], hh = [(0, Db.p)("emissive"), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Bh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Oh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Gh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Uh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Lh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Yh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Sh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ah = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Hh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], wh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Zh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Xh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ph = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], oh = [(0, Db.K)()], Ah = [(0, Db.K)()], lh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Kh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Wh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Ch = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], dh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], rh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsLightsDirty")], jh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], nh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsLightsDirty")], Dh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], xh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], zh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], gh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], ih = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], vh = [(0, Db.i)("_markAllSubMeshesAsTexturesDirty")], th = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Jh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], eh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], Nh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsTexturesDirty")], sh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], Mh = [(0, Db.K)(), (0, Db.i)("_markAllSubMeshesAsMiscDirty")], (0, nb.h)(bb, null, Wu, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "directIntensity" in bb,
            get: bb => bb.directIntensity,
            set: (bb, ub) => {
              bb.directIntensity = ub
            }
          },
          metadata: ub
        }, Ph, qh), (0, nb.h)(bb, null, Cu, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveIntensity" in bb,
            get: bb => bb.emissiveIntensity,
            set: (bb, ub) => {
              bb.emissiveIntensity = ub
            }
          },
          metadata: ub
        }, Eh, yh), (0, nb.h)(bb, null, ju, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentIntensity" in bb,
            get: bb => bb.environmentIntensity,
            set: (bb, ub) => {
              bb.environmentIntensity = ub
            }
          },
          metadata: ub
        }, Vh, Fh), (0, nb.h)(bb, null, nu, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "specularIntensity" in bb,
            get: bb => bb.specularIntensity,
            set: (bb, ub) => {
              bb.specularIntensity = ub
            }
          },
          metadata: ub
        }, fh, kh), (0, nb.h)(bb, null, Du, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableBumpMap" in bb,
            get: bb => bb.disableBumpMap,
            set: (bb, ub) => {
              bb.disableBumpMap = ub
            }
          },
          metadata: ub
        }, Th, ch), (0, nb.h)(bb, null, xu, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoTexture" in bb,
            get: bb => bb.albedoTexture,
            set: (bb, ub) => {
              bb.albedoTexture = ub
            }
          },
          metadata: ub
        }, Qh, Rh), (0, nb.h)(bb, null, zu, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeightTexture" in bb,
            get: bb => bb.baseWeightTexture,
            set: (bb, ub) => {
              bb.baseWeightTexture = ub
            }
          },
          metadata: ub
        }, bB, uB), (0, nb.h)(bb, null, gu, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughnessTexture" in bb,
            get: bb => bb.baseDiffuseRoughnessTexture,
            set: (bb, ub) => {
              bb.baseDiffuseRoughnessTexture = ub
            }
          },
          metadata: ub
        }, hB, BB), (0, nb.h)(bb, null, iu, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTexture" in bb,
            get: bb => bb.ambientTexture,
            set: (bb, ub) => {
              bb.ambientTexture = ub
            }
          },
          metadata: ub
        }, OB, GB), (0, nb.h)(bb, null, vu, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureStrength" in bb,
            get: bb => bb.ambientTextureStrength,
            set: (bb, ub) => {
              bb.ambientTextureStrength = ub
            }
          },
          metadata: ub
        }, UB, LB), (0, nb.h)(bb, null, tu, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureImpactOnAnalyticalLights" in bb,
            get: bb => bb.ambientTextureImpactOnAnalyticalLights,
            set: (bb, ub) => {
              bb.ambientTextureImpactOnAnalyticalLights = ub
            }
          },
          metadata: ub
        }, YB, SB), (0, nb.h)(bb, null, Ju, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "opacityTexture" in bb,
            get: bb => bb.opacityTexture,
            set: (bb, ub) => {
              bb.opacityTexture = ub
            }
          },
          metadata: ub
        }, aB, HB), (0, nb.h)(bb, null, eu, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionTexture" in bb,
            get: bb => bb.reflectionTexture,
            set: (bb, ub) => {
              bb.reflectionTexture = ub
            }
          },
          metadata: ub
        }, wB, ZB), (0, nb.h)(bb, null, Nu, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveTexture" in bb,
            get: bb => bb.emissiveTexture,
            set: (bb, ub) => {
              bb.emissiveTexture = ub
            }
          },
          metadata: ub
        }, XB, pB), (0, nb.h)(bb, null, su, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityTexture" in bb,
            get: bb => bb.reflectivityTexture,
            set: (bb, ub) => {
              bb.reflectivityTexture = ub
            }
          },
          metadata: ub
        }, oB, AB), (0, nb.h)(bb, null, Mu, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicTexture" in bb,
            get: bb => bb.metallicTexture,
            set: (bb, ub) => {
              bb.metallicTexture = ub
            }
          },
          metadata: ub
        }, lB, KB), (0, nb.h)(bb, null, mu, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallic" in bb,
            get: bb => bb.metallic,
            set: (bb, ub) => {
              bb.metallic = ub
            }
          },
          metadata: ub
        }, WB, CB), (0, nb.h)(bb, null, Iu, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ub) => {
              bb.roughness = ub
            }
          },
          metadata: ub
        }, dB, rB), (0, nb.h)(bb, null, Pu, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicF0Factor" in bb,
            get: bb => bb.metallicF0Factor,
            set: (bb, ub) => {
              bb.metallicF0Factor = ub
            }
          },
          metadata: ub
        }, jB, nB), (0, nb.h)(bb, null, qu, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceColor" in bb,
            get: bb => bb.metallicReflectanceColor,
            set: (bb, ub) => {
              bb.metallicReflectanceColor = ub
            }
          },
          metadata: ub
        }, DB, xB), (0, nb.h)(bb, null, Eu, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useOnlyMetallicFromMetallicReflectanceTexture" in bb,
            get: bb => bb.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (bb, ub) => {
              bb.useOnlyMetallicFromMetallicReflectanceTexture = ub
            }
          },
          metadata: ub
        }, zB, gB), (0, nb.h)(bb, null, yu, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceTexture" in bb,
            get: bb => bb.metallicReflectanceTexture,
            set: (bb, ub) => {
              bb.metallicReflectanceTexture = ub
            }
          },
          metadata: ub
        }, iB, vB), (0, nb.h)(bb, null, Vu, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectanceTexture" in bb,
            get: bb => bb.reflectanceTexture,
            set: (bb, ub) => {
              bb.reflectanceTexture = ub
            }
          },
          metadata: ub
        }, tB, JB), (0, nb.h)(bb, null, Fu, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurfaceTexture" in bb,
            get: bb => bb.microSurfaceTexture,
            set: (bb, ub) => {
              bb.microSurfaceTexture = ub
            }
          },
          metadata: ub
        }, eB, NB), (0, nb.h)(bb, null, fu, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, ub) => {
              bb.bumpTexture = ub
            }
          },
          metadata: ub
        }, sB, MB), (0, nb.h)(bb, null, ku, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "lightmapTexture" in bb,
            get: bb => bb.lightmapTexture,
            set: (bb, ub) => {
              bb.lightmapTexture = ub
            }
          },
          metadata: ub
        }, mB, IB), (0, nb.h)(bb, null, Tu, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientColor" in bb,
            get: bb => bb.ambientColor,
            set: (bb, ub) => {
              bb.ambientColor = ub
            }
          },
          metadata: ub
        }, PB, qB), (0, nb.h)(bb, null, cu, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoColor" in bb,
            get: bb => bb.albedoColor,
            set: (bb, ub) => {
              bb.albedoColor = ub
            }
          },
          metadata: ub
        }, EB, yB), (0, nb.h)(bb, null, Qu, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeight" in bb,
            get: bb => bb.baseWeight,
            set: (bb, ub) => {
              bb.baseWeight = ub
            }
          },
          metadata: ub
        }, VB, FB), (0, nb.h)(bb, null, Ru, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughness" in bb,
            get: bb => bb.baseDiffuseRoughness,
            set: (bb, ub) => {
              bb.baseDiffuseRoughness = ub
            }
          },
          metadata: ub
        }, fB, kB), (0, nb.h)(bb, null, bh, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityColor" in bb,
            get: bb => bb.reflectivityColor,
            set: (bb, ub) => {
              bb.reflectivityColor = ub
            }
          },
          metadata: ub
        }, TB, cB), (0, nb.h)(bb, null, uh, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionColor" in bb,
            get: bb => bb.reflectionColor,
            set: (bb, ub) => {
              bb.reflectionColor = ub
            }
          },
          metadata: ub
        }, QB, RB), (0, nb.h)(bb, null, hh, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveColor" in bb,
            get: bb => bb.emissiveColor,
            set: (bb, ub) => {
              bb.emissiveColor = ub
            }
          },
          metadata: ub
        }, bO, uO), (0, nb.h)(bb, null, Bh, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurface" in bb,
            get: bb => bb.microSurface,
            set: (bb, ub) => {
              bb.microSurface = ub
            }
          },
          metadata: ub
        }, hO, BO), (0, nb.h)(bb, null, Oh, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLightmapAsShadowmap" in bb,
            get: bb => bb.useLightmapAsShadowmap,
            set: (bb, ub) => {
              bb.useLightmapAsShadowmap = ub
            }
          },
          metadata: ub
        }, OO, GO), (0, nb.h)(bb, null, Gh, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFromAlbedoTexture" in bb,
            get: bb => bb.useAlphaFromAlbedoTexture,
            set: (bb, ub) => {
              bb.useAlphaFromAlbedoTexture = ub
            }
          },
          metadata: ub
        }, UO, LO), (0, nb.h)(bb, null, Uh, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceAlphaTest" in bb,
            get: bb => bb.forceAlphaTest,
            set: (bb, ub) => {
              bb.forceAlphaTest = ub
            }
          },
          metadata: ub
        }, YO, SO), (0, nb.h)(bb, null, Lh, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: bb => "alphaCutOff" in bb,
            get: bb => bb.alphaCutOff,
            set: (bb, ub) => {
              bb.alphaCutOff = ub
            }
          },
          metadata: ub
        }, aO, HO), (0, nb.h)(bb, null, Yh, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularOverAlpha" in bb,
            get: bb => bb.useSpecularOverAlpha,
            set: (bb, ub) => {
              bb.useSpecularOverAlpha = ub
            }
          },
          metadata: ub
        }, wO, ZO), (0, nb.h)(bb, null, Sh, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMicroSurfaceFromReflectivityMapAlpha" in bb,
            get: bb => bb.useMicroSurfaceFromReflectivityMapAlpha,
            set: (bb, ub) => {
              bb.useMicroSurfaceFromReflectivityMapAlpha = ub
            }
          },
          metadata: ub
        }, XO, pO), (0, nb.h)(bb, null, ah, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureAlpha" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureAlpha,
            set: (bb, ub) => {
              bb.useRoughnessFromMetallicTextureAlpha = ub
            }
          },
          metadata: ub
        }, oO, AO), (0, nb.h)(bb, null, Hh, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureGreen" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureGreen,
            set: (bb, ub) => {
              bb.useRoughnessFromMetallicTextureGreen = ub
            }
          },
          metadata: ub
        }, lO, KO), (0, nb.h)(bb, null, wh, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMetallnessFromMetallicTextureBlue" in bb,
            get: bb => bb.useMetallnessFromMetallicTextureBlue,
            set: (bb, ub) => {
              bb.useMetallnessFromMetallicTextureBlue = ub
            }
          },
          metadata: ub
        }, WO, CO), (0, nb.h)(bb, null, Zh, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
            get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
            set: (bb, ub) => {
              bb.useAmbientOcclusionFromMetallicTextureRed = ub
            }
          },
          metadata: ub
        }, dO, rO), (0, nb.h)(bb, null, Xh, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientInGrayScale" in bb,
            get: bb => bb.useAmbientInGrayScale,
            set: (bb, ub) => {
              bb.useAmbientInGrayScale = ub
            }
          },
          metadata: ub
        }, jO, nO), (0, nb.h)(bb, null, ph, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAutoMicroSurfaceFromReflectivityMap" in bb,
            get: bb => bb.useAutoMicroSurfaceFromReflectivityMap,
            set: (bb, ub) => {
              bb.useAutoMicroSurfaceFromReflectivityMap = ub
            }
          },
          metadata: ub
        }, DO, xO), (0, nb.h)(bb, null, oh, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "usePhysicalLightFalloff" in bb,
            get: bb => bb.usePhysicalLightFalloff
          },
          metadata: ub
        }, null, Ih), (0, nb.h)(bb, null, Ah, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGLTFLightFalloff" in bb,
            get: bb => bb.useGLTFLightFalloff
          },
          metadata: ub
        }, null, Ih), (0, nb.h)(bb, null, lh, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOverAlpha" in bb,
            get: bb => bb.useRadianceOverAlpha,
            set: (bb, ub) => {
              bb.useRadianceOverAlpha = ub
            }
          },
          metadata: ub
        }, zO, gO), (0, nb.h)(bb, null, Kh, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useObjectSpaceNormalMap" in bb,
            get: bb => bb.useObjectSpaceNormalMap,
            set: (bb, ub) => {
              bb.useObjectSpaceNormalMap = ub
            }
          },
          metadata: ub
        }, iO, vO), (0, nb.h)(bb, null, Wh, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallax" in bb,
            get: bb => bb.useParallax,
            set: (bb, ub) => {
              bb.useParallax = ub
            }
          },
          metadata: ub
        }, tO, JO), (0, nb.h)(bb, null, Ch, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallaxOcclusion" in bb,
            get: bb => bb.useParallaxOcclusion,
            set: (bb, ub) => {
              bb.useParallaxOcclusion = ub
            }
          },
          metadata: ub
        }, eO, NO), (0, nb.h)(bb, null, dh, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: bb => "parallaxScaleBias" in bb,
            get: bb => bb.parallaxScaleBias,
            set: (bb, ub) => {
              bb.parallaxScaleBias = ub
            }
          },
          metadata: ub
        }, sO, MO), (0, nb.h)(bb, null, rh, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableLighting" in bb,
            get: bb => bb.disableLighting,
            set: (bb, ub) => {
              bb.disableLighting = ub
            }
          },
          metadata: ub
        }, mO, IO), (0, nb.h)(bb, null, jh, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceIrradianceInFragment" in bb,
            get: bb => bb.forceIrradianceInFragment,
            set: (bb, ub) => {
              bb.forceIrradianceInFragment = ub
            }
          },
          metadata: ub
        }, PO, qO), (0, nb.h)(bb, null, nh, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxSimultaneousLights" in bb,
            get: bb => bb.maxSimultaneousLights,
            set: (bb, ub) => {
              bb.maxSimultaneousLights = ub
            }
          },
          metadata: ub
        }, EO, yO), (0, nb.h)(bb, null, Dh, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapX" in bb,
            get: bb => bb.invertNormalMapX,
            set: (bb, ub) => {
              bb.invertNormalMapX = ub
            }
          },
          metadata: ub
        }, VO, FO), (0, nb.h)(bb, null, xh, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapY" in bb,
            get: bb => bb.invertNormalMapY,
            set: (bb, ub) => {
              bb.invertNormalMapY = ub
            }
          },
          metadata: ub
        }, fO, kO), (0, nb.h)(bb, null, zh, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "twoSidedLighting" in bb,
            get: bb => bb.twoSidedLighting,
            set: (bb, ub) => {
              bb.twoSidedLighting = ub
            }
          },
          metadata: ub
        }, TO, cO), (0, nb.h)(bb, null, gh, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFresnel" in bb,
            get: bb => bb.useAlphaFresnel,
            set: (bb, ub) => {
              bb.useAlphaFresnel = ub
            }
          },
          metadata: ub
        }, QO, RO), (0, nb.h)(bb, null, ih, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLinearAlphaFresnel" in bb,
            get: bb => bb.useLinearAlphaFresnel,
            set: (bb, ub) => {
              bb.useLinearAlphaFresnel = ub
            }
          },
          metadata: ub
        }, bG, uG), (0, nb.h)(bb, null, vh, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentBRDFTexture" in bb,
            get: bb => bb.environmentBRDFTexture,
            set: (bb, ub) => {
              bb.environmentBRDFTexture = ub
            }
          },
          metadata: ub
        }, hG, BG), (0, nb.h)(bb, null, th, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceNormalForward" in bb,
            get: bb => bb.forceNormalForward,
            set: (bb, ub) => {
              bb.forceNormalForward = ub
            }
          },
          metadata: ub
        }, OG, GG), (0, nb.h)(bb, null, Jh, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: bb => "enableSpecularAntiAliasing" in bb,
            get: bb => bb.enableSpecularAntiAliasing,
            set: (bb, ub) => {
              bb.enableSpecularAntiAliasing = ub
            }
          },
          metadata: ub
        }, UG, LG), (0, nb.h)(bb, null, eh, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useHorizonOcclusion" in bb,
            get: bb => bb.useHorizonOcclusion,
            set: (bb, ub) => {
              bb.useHorizonOcclusion = ub
            }
          },
          metadata: ub
        }, YG, SG), (0, nb.h)(bb, null, Nh, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOcclusion" in bb,
            get: bb => bb.useRadianceOcclusion,
            set: (bb, ub) => {
              bb.useRadianceOcclusion = ub
            }
          },
          metadata: ub
        }, aG, HG), (0, nb.h)(bb, null, sh, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: bb => "unlit" in bb,
            get: bb => bb.unlit,
            set: (bb, ub) => {
              bb.unlit = ub
            }
          },
          metadata: ub
        }, wG, ZG), (0, nb.h)(bb, null, Mh, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyDecalMapAfterDetailMap" in bb,
            get: bb => bb.applyDecalMapAfterDetailMap,
            set: (bb, ub) => {
              bb.applyDecalMapAfterDetailMap = ub
            }
          },
          metadata: ub
        }, XG, pG), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb.PBRMATERIAL_OPAQUE = du.PBRMATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = du.PBRMATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = du.PBRMATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = du.PBRMATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = du.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, bb
    })();
    const NO = "KHR_materials_diffuse_transmission";

    function sO(bb, ub) {
      const hb = ub.subSurface;
      let Bb = null;
      return hb.translucencyIntensityTexture ? Bb = hb.translucencyIntensityTexture : hb.thicknessTexture && hb.useMaskFromThicknessTexture && (Bb = hb.thicknessTexture), Bb && !hb.useGltfStyleTextures ? (xb.b.Warn(`${bb}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${ub.name}`, 1), null) : Bb
    }
    class MO {
      constructor(bb) {
        this.name = NO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof eO && this._isExtensionEnabled(hb)) {
          const ub = sO(bb, hb);
          return ub && Bb.push(ub), hb.subSurface.translucencyColorTexture && Bb.push(hb.subSurface.translucencyColorTexture), Bb
        }
        return Bb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ub = bb.subSurface;
        return !!ub.isTranslucencyEnabled && (!bb.unlit && !ub.useAlbedoToTintTranslucency && ub.useGltfStyleTextures && 1 === ub.volumeIndexOfRefraction && 0 === ub.minimumThickness && 0 === ub.maximumThickness)
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((Bb => {
          if (hb instanceof eO && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            const Bb = hb.subSurface,
              Ob = sO(bb, hb),
              Gb = 0 == Bb.translucencyIntensity ? void 0 : Bb.translucencyIntensity,
              Ub = this._exporter._materialExporter.getTextureInfo(Ob) ?? void 0,
              Lb = !Bb.translucencyColor || Bb.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Bb.translucencyColor.ZBb(),
              Yb = this._exporter._materialExporter.getTextureInfo(Bb.translucencyColorTexture) ?? void 0,
              Sb = {
                diffuseTransmissionFactor: Gb,
                diffuseTransmissionTexture: Ub,
                diffuseTransmissionColorFactor: Lb,
                diffuseTransmissionColorTexture: Yb
              };
            (Ub || Yb) && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions = ub.extensions || {}, ub.extensions[NO] = Sb
          }
          Bb(ub)
        }))
      }
    }
    let mO = !1;

    function IO() {
      mO || (mO = !0, JB.RegisterExtension(NO, (bb => new MO(bb))))
    }
    IO();
    const PO = "KHR_materials_dispersion";
    class qO {
      constructor() {
        this.name = PO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ub = bb.subSurface;
        return !(!ub.isRefractionEnabled && !ub.isDispersionEnabled)
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof eO && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            const bb = {
              dispersion: hb.subSurface.dispersion
            };
            ub.extensions = ub.extensions || {}, ub.extensions[PO] = bb
          }
          bb(ub)
        }))
      }
    }
    let EO = !1;

    function yO() {
      EO || (EO = !0, JB.RegisterExtension(PO, (() => new qO)))
    }
    yO();
    const VO = "KHR_materials_emissive_strength";
    class FO {
      constructor() {
        this.name = VO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(bb, ub, hb) {
        return await new Promise((bb => {
          if (!(hb instanceof eO)) return bb(ub);
          const Bb = hb.emissiveColor.scale(hb.emissiveIntensity),
            Ob = Math.max(...Bb.ZBb());
          if (Ob > 1) {
            ub.emissiveFactor = Bb.scale(1 / Ob).ZBb(), this._wasUsed = !0;
            const bb = {
              emissiveStrength: Ob
            };
            ub.extensions || (ub.extensions = {}), ub.extensions[VO] = bb
          } else ub.emissiveFactor = Bb.ZBb();
          return bb(ub)
        }))
      }
    }
    let fO = !1;

    function kO() {
      fO || (fO = !0, JB.RegisterExtension(VO, (() => new FO)))
    }
    kO();
    const TO = "KHR_materials_ior";
    class cO {
      constructor() {
        this.name = TO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (bb instanceof Qu ? 1.5 != bb.specularIor : bb instanceof eO && (void 0 != bb.indexOfRefraction && 1.5 != bb.indexOfRefraction))
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof eO && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            const bb = {
              ior: hb.indexOfRefraction
            };
            ub.extensions = ub.extensions || {}, ub.extensions[TO] = bb
          } else if (hb instanceof Qu && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            const bb = {
              ior: hb.specularIor
            };
            ub.extensions = ub.extensions || {}, ub.extensions[TO] = bb
          }
          bb(ub)
        }))
      }
    }
    let QO = !1;

    function RO() {
      QO || (QO = !0, JB.RegisterExtension(TO, (() => new cO)))
    }
    RO();
    const bG = "KHR_materials_iridescence";
    class uG {
      constructor(bb) {
        this.name = bG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof du) {
          if (hb.iridescence.isEnabled) return hb.iridescence.texture && Bb.push(hb.iridescence.texture), hb.iridescence.thicknessTexture && hb.iridescence.thicknessTexture !== hb.iridescence.texture && Bb.push(hb.iridescence.thicknessTexture), Bb
        } else if (hb instanceof Qu && hb.thinFilmWeight > 0) return hb.thinFilmWeightTexture && Bb.push(hb.thinFilmWeightTexture), hb.thinFilmThicknessTexture && hb.thinFilmThicknessTexture !== hb.thinFilmWeightTexture && Bb.push(hb.thinFilmThicknessTexture), Bb;
        return []
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof du) {
            if (!hb.iridescence.isEnabled) return void bb(ub);
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const Bb = this._exporter._materialExporter.getTextureInfo(hb.iridescence.texture),
              Ob = this._exporter._materialExporter.getTextureInfo(hb.iridescence.thicknessTexture),
              Gb = {
                iridescenceFactor: hb.iridescence.intensity,
                iridescenceIor: hb.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: hb.iridescence.minimumThickness,
                iridescenceThicknessMaximum: hb.iridescence.maximumThickness,
                iridescenceTexture: Bb ?? void 0,
                iridescenceThicknessTexture: Ob ?? void 0
              };
            null === Gb.iridescenceTexture && null === Gb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[bG] = Gb
          } else if (hb instanceof Qu) {
            if (hb.thinFilmWeight <= 0) return void bb(ub);
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const Bb = this._exporter._materialExporter.getTextureInfo(hb.thinFilmWeightTexture),
              Ob = this._exporter._materialExporter.getTextureInfo(hb.thinFilmThicknessTexture),
              Gb = {
                iridescenceFactor: hb.thinFilmWeight,
                iridescenceIor: hb.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * hb.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * hb.thinFilmThickness,
                iridescenceTexture: Bb ?? void 0,
                iridescenceThicknessTexture: Ob ?? void 0
              };
            null === Gb.iridescenceTexture && null === Gb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[bG] = Gb
          }
          bb(ub)
        }))
      }
    }
    let hG = !1;

    function BG() {
      hG || (hG = !0, JB.RegisterExtension(bG, (bb => new uG(bb))))
    }
    BG();
    const OG = "KHR_materials_sheen";
    class GG {
      constructor(bb) {
        this.name = OG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        return hb instanceof eO && hb.sheen.isEnabled && hb.sheen.texture ? [hb.sheen.texture] : []
      }
      async postExportMaterialAsync(bb, ub, hb) {
        return await new Promise((bb => {
          if (hb instanceof eO) {
            if (!hb.sheen.isEnabled) return void bb(ub);
            this._wasUsed = !0, null == ub.extensions && (ub.extensions = {});
            const Bb = {
              sheenColorFactor: hb.sheen.color.ZBb(),
              sheenRoughnessFactor: hb.sheen.roughness ?? 0
            };
            null === Bb.sheenColorTexture && null === Bb.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(hb), hb.sheen.texture && (Bb.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(hb.sheen.texture) ?? void 0), hb.sheen.textureRoughness && !hb.sheen.useRoughnessFromMainTexture ? Bb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(hb.sheen.textureRoughness) ?? void 0 : hb.sheen.texture && hb.sheen.useRoughnessFromMainTexture && (Bb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(hb.sheen.texture) ?? void 0), ub.extensions[OG] = Bb
          }
          bb(ub)
        }))
      }
    }
    let UG = !1;

    function LG() {
      UG || (UG = !0, JB.RegisterExtension(OG, (bb => new GG(bb))))
    }
    LG();
    const YG = "KHR_materials_fuzz";

    function SG(bb, ub) {
      const hb = new gb.f(ub.name, ub.ZN());
      return hb._texture = bb, hb.coordinatesIndex = ub.coordinatesIndex, ub instanceof gb.f && (hb.uOffset = ub.uOffset, hb.vOffset = ub.vOffset, hb.uScale = ub.uScale, hb.vScale = ub.vScale, hb.wAng = ub.wAng), hb.wrapU = ub.wrapU, hb.wrapV = ub.wrapV, hb
    }
    class aG {
      constructor(bb) {
        this.name = YG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        if (hb instanceof Qu) {
          const bb = [];
          if (hb.fuzzWeight > 0) {
            hb.fuzzWeightTexture && bb.push(hb.fuzzWeightTexture);
            let ub = !1;
            if (hb.fuzzRoughnessTexture && (hb._useFuzzRoughnessFromTextureAlpha ? bb.push(hb.fuzzRoughnessTexture) : ub = !0), hb.fuzzColorTexture && !ub && bb.push(hb.fuzzColorTexture), ub) {
              const ub = function(bb) {
                const ub = bb.fuzzColorTexture,
                  hb = ub && ub.getInternalTexture() ? ub.getInternalTexture().uniqueId : "NoFuzzColor",
                  Bb = bb.fuzzRoughnessTexture;
                return `FuzzColor_${hb}_FuzzRoughness_${Bb&&Bb.getInternalTexture()?Bb.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(hb);
              if (!this._cachedInternalTexturesMap[ub]) {
                const bb = await async function(bb) {
                  const ub = bb.ZN(),
                    hb = bb.fuzzColorTexture,
                    Bb = bb.fuzzRoughnessTexture;
                  return hb || Bb ? (await Uh("FuzzTexture", Sh(hb ? Lh(hb, 0) : Yh(1), hb ? Lh(hb, 1) : Yh(1), hb ? Lh(hb, 2) : Yh(1), Bb ? Lh(Bb, bb._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Yh(1)), ub)).getInternalTexture() : null
                }(hb);
                bb && (this._cachedInternalTexturesMap[ub] = bb)
              }
              this._cachedInternalTexturesMap[ub] && (hb.fuzzColorTexture && (this._mergedTexturesMap[hb.fuzzColorTexture.uniqueId] = SG(this._cachedInternalTexturesMap[ub], hb.fuzzColorTexture), bb.push(this._mergedTexturesMap[hb.fuzzColorTexture.uniqueId])), hb.fuzzRoughnessTexture && (this._mergedTexturesMap[hb.fuzzRoughnessTexture.uniqueId] = SG(this._cachedInternalTexturesMap[ub], hb.fuzzRoughnessTexture), bb.push(this._mergedTexturesMap[hb.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return bb
        }
        return []
      }
      async postExportMaterialAsync(bb, ub, hb) {
        return await new Promise((bb => {
          if (hb instanceof Qu) {
            if (0 == hb.fuzzWeight) return void bb(ub);
            this._wasUsed = !0, null == ub.extensions && (ub.extensions = {});
            const Bb = {
              fuzzFactor: hb.fuzzWeight,
              fuzzColorFactor: hb.fuzzColor.ZBb(),
              fuzzRoughnessFactor: hb.fuzzRoughness
            };
            let Ob, Gb;
            hb.fuzzWeightTexture && (Bb.fuzzTexture = this._exporter._materialExporter.getTextureInfo(hb.fuzzWeightTexture) ?? void 0), hb.fuzzColorTexture && (Ob = this._mergedTexturesMap[hb.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[hb.fuzzColorTexture.uniqueId] : hb.fuzzColorTexture, Bb.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Ob) ?? void 0), hb.fuzzRoughnessTexture && (Gb = this._mergedTexturesMap[hb.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[hb.fuzzRoughnessTexture.uniqueId] : hb.fuzzRoughnessTexture, Bb.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Gb) ?? void 0), null === Bb.fuzzColorTexture && null === Bb.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[YG] = Bb
          }
          bb(ub)
        }))
      }
    }
    let HG = !1;

    function wG() {
      HG || (HG = !0, JB.RegisterExtension(YG, (bb => new aG(bb))))
    }
    wG();
    const ZG = "KHR_materials_specular";
    class XG {
      constructor(bb) {
        this.name = ZG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        return hb instanceof eO && this._isExtensionEnabled(hb) ? (hb.metallicReflectanceTexture && Bb.push(hb.metallicReflectanceTexture), hb.reflectanceTexture && Bb.push(hb.reflectanceTexture), Bb) : Bb
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (void 0 != bb.metallicF0Factor && 1 != bb.metallicF0Factor || void 0 != bb.metallicReflectanceColor && !bb.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.metallicReflectanceTexture || null != bb.reflectanceTexture
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          var Bb;
          if (hb instanceof eO && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0, ub.extensions = ub.extensions || {};
            const bb = this._exporter._materialExporter.getTextureInfo(hb.metallicReflectanceTexture) ?? void 0,
              Bb = this._exporter._materialExporter.getTextureInfo(hb.reflectanceTexture) ?? void 0,
              Ob = {
                specularFactor: 1 == hb.metallicF0Factor ? void 0 : hb.metallicF0Factor,
                specularTexture: bb,
                specularColorFactor: hb.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : hb.metallicReflectanceColor.ZBb(),
                specularColorTexture: Bb
              };
            this._hasTexturesExtension(hb) && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[ZG] = Ob
          } else if (hb instanceof Qu) {
            ub.extensions = ub.extensions || {};
            const Ob = this._exporter._materialExporter.getTextureInfo(hb.specularWeightTexture) ?? void 0,
              Gb = this._exporter._materialExporter.getTextureInfo(hb.specularColorTexture) ?? void 0,
              Ub = 1 == hb.specularWeight ? void 0 : hb.specularWeight,
              Lb = hb.specularColor.equalsFloats(1, 1, 1) ? void 0 : hb.specularColor.ZBb();
            if (!Gb && !Ob && void 0 === Ub && void 0 === Lb) return bb(ub);
            this._wasUsed = !0;
            const Yb = {
                specularEdgeColorEnabled: !0
              },
              Sb = {
                specularFactor: Ub,
                specularTexture: Ob,
                specularColorFactor: Lb,
                specularColorTexture: Gb,
                extensions: {}
              };
            Sb.extensions.EXT_materials_specular_edge_color = Yb, (Bb = this._exporter._glTF).extensionsUsed || (Bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Ob || Gb) && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[ZG] = Sb
          }
          bb(ub)
        }))
      }
    }
    let pG = !1;

    function oG() {
      pG || (pG = !0, JB.RegisterExtension(ZG, (bb => new XG(bb))))
    }
    oG();
    const AG = "KHR_materials_transmission";
    class lG {
      constructor(bb) {
        this.name = AG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof eO) {
          if (this._isExtensionEnabled(hb)) return hb.subSurface.refractionIntensityTexture && hb.subSurface.useGltfStyleTextures && Bb.push(hb.subSurface.refractionIntensityTexture), Bb
        } else hb instanceof Qu && (hb.transmissionWeight > 0 && hb.transmissionWeightTexture && (Bb.push(hb.transmissionWeightTexture), hb.transmissionColorTexture && Bb.push(hb.transmissionColorTexture)), hb.subsurfaceWeight > 0 && hb.subsurfaceWeightTexture && Bb.push(hb.subsurfaceWeightTexture));
        return Bb
      }
      _isExtensionEnabled(bb) {
        if (bb instanceof Qu && !bb.unlit) return bb.transmissionWeight > 0 || bb.subsurfaceWeight > 0;
        if (bb instanceof eO && !bb.unlit) {
          const ub = bb.subSurface;
          return ub.isRefractionEnabled && void 0 != ub.refractionIntensity && 0 != ub.refractionIntensity || null != ub.refractionIntensityTexture && ub.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(bb, ub, hb) {
        if (!this._isExtensionEnabled(hb)) return ub;
        if (hb instanceof eO) {
          this._wasUsed = !0;
          const Bb = hb.subSurface,
            Ob = {
              transmissionFactor: 0 === Bb.refractionIntensity ? void 0 : Bb.refractionIntensity
            };
          if (Bb.refractionIntensityTexture)
            if (Bb.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(hb);
              const bb = this._exporter._materialExporter.getTextureInfo(Bb.refractionIntensityTexture);
              bb && (Ob.transmissionTexture = bb)
            } else xb.b.Warn(`${bb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          ub.extensions || (ub.extensions = {}), ub.extensions[AG] = Ob
        } else if (hb instanceof Qu) {
          this._wasUsed = !0;
          const bb = {
            transmissionFactor: (1 - hb.transmissionWeight) * hb.subsurfaceWeight + hb.transmissionWeight
          };
          if (hb.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(hb);
            const ub = this._exporter._materialExporter.getTextureInfo(hb.transmissionWeightTexture);
            ub && (bb.transmissionTexture = ub)
          } else if (hb.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(hb);
            const ub = this._exporter._materialExporter.getTextureInfo(hb.subsurfaceWeightTexture);
            ub && (bb.transmissionTexture = ub)
          }
          if (0 == hb.transmissionDepth && (!hb.transmissionColor.equals(Vb.b.White()) || hb.transmissionColorTexture) && ub.pbrMetallicRoughness && (ub.pbrMetallicRoughness.baseColorFactor || (ub.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ub.pbrMetallicRoughness.baseColorFactor[0] *= hb.transmissionColor.r, ub.pbrMetallicRoughness.baseColorFactor[1] *= hb.transmissionColor.g, ub.pbrMetallicRoughness.baseColorFactor[2] *= hb.transmissionColor.b, hb.transmissionColorTexture && !ub.pbrMetallicRoughness.baseColorTexture)) {
            const bb = this._exporter._materialExporter.getTextureInfo(hb.transmissionColorTexture);
            bb && (ub.pbrMetallicRoughness.baseColorTexture = bb, this._exporter._materialNeedsUVsSet.add(hb))
          }
          ub.extensions || (ub.extensions = {}), ub.extensions[AG] = bb
        }
        return ub
      }
    }
    let KG = !1;

    function WG() {
      KG || (KG = !0, JB.RegisterExtension(AG, (bb => new lG(bb))))
    }
    WG();
    var CG = hb(39711);
    const dG = "KHR_materials_unlit";
    class rG {
      constructor() {
        this.name = dG, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          let Bb = !1;
          hb instanceof eO ? Bb = hb.unlit : hb instanceof CG.f && (Bb = hb.disableLighting), Bb && (this._wasUsed = !0, null == ub.extensions && (ub.extensions = {}), ub.extensions[dG] = {}), bb(ub)
        }))
      }
    }
    let jG = !1;

    function nG() {
      jG || (jG = !0, JB.RegisterExtension(dG, (() => new rG)))
    }
    nG();
    const DG = "KHR_materials_volume";
    class xG {
      constructor(bb) {
        this.name = DG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof eO) {
          if (this._isExtensionEnabled(hb)) return hb.subSurface.thicknessTexture && Bb.push(hb.subSurface.thicknessTexture), Bb
        } else hb instanceof Qu && (hb.transmissionWeight > 0 || hb.subsurfaceWeight > 0) && hb.geometryThicknessTexture && Bb.push(hb.geometryThicknessTexture);
        return Bb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ub = bb.subSurface;
        return !(!ub.isRefractionEnabled && !ub.isTranslucencyEnabled) && (void 0 != ub.maximumThickness && 0 != ub.maximumThickness || void 0 != ub.tintColorAtDistance && ub.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ub.tintColor && ub.tintColor != Vb.b.White() || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.subSurface.thicknessTexture
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof eO && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            const bb = hb.subSurface,
              Bb = {
                thicknessFactor: 0 == bb.maximumThickness ? void 0 : bb.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(bb.thicknessTexture) ?? void 0,
                attenuationDistance: bb.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : bb.tintColorAtDistance,
                attenuationColor: bb.tintColor.equalsFloats(1, 1, 1) ? void 0 : bb.tintColor.ZBb()
              };
            this._hasTexturesExtension(hb) && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions = ub.extensions || {}, ub.extensions[DG] = Bb
          } else if (hb instanceof Qu) {
            const bb = hb.transmissionWeight > 0 && !hb.geometryThinWalled,
              Bb = hb.subsurfaceWeight > 0 && !hb.geometryThinWalled;
            if (bb || Bb) {
              this._wasUsed = !0;
              const Ob = hb.geometryThickness,
                Gb = this._exporter._materialExporter.getTextureInfo(hb.geometryThicknessTexture) ?? void 0;
              let Ub;
              Gb && this._exporter._materialNeedsUVsSet.add(hb);
              const Lb = Vb.b.White().ZBb();
              if (bb && hb.transmissionDepth > 0) {
                const bb = 1 / hb.transmissionDepth;
                let ub = new Mb.q(-Math.log(hb.transmissionColor.r) * bb, -Math.log(hb.transmissionColor.g) * bb, -Math.log(hb.transmissionColor.b) * bb);
                const Bb = new Mb.q(hb.transmissionScatter.r * bb, hb.transmissionScatter.g * bb, hb.transmissionScatter.b * bb),
                  Ob = ub.subtract(Bb),
                  Gb = Math.min(Ob.x, Ob.y, Ob.z);
                Gb < 0 && (Ob.x = Ob.x - Gb, Ob.y = Ob.y - Gb, Ob.z = Ob.z - Gb), ub = Ob.add(Bb);
                Ub = 1 / Math.max(ub.x, ub.y, ub.z), Lb[0] = Math.exp(-ub.x * Ub), Lb[1] = Math.exp(-ub.y * Ub), Lb[2] = Math.exp(-ub.z * Ub)
              } else Ub = Number.MAX_VALUE, Lb[0] = 1, Lb[1] = 1, Lb[2] = 1;
              let Yb = 1;
              const Sb = Vb.b.White().ZBb();
              if (Bb) {
                const bb = hb.subsurfaceRadius,
                  ub = hb.subsurfaceRadiusScale,
                  Bb = new Mb.q(ub.r, ub.g, ub.b).multiplyByFloats(bb, bb, bb),
                  Ob = new Mb.q(1 / Math.max(Bb.x, 1e-6), 1 / Math.max(Bb.y, 1e-6), 1 / Math.max(Bb.z, 1e-6));
                Yb = 1 / Math.max(Ob.x, Ob.y, Ob.z), Sb[0] = Math.exp(-Ob.x * Yb), Sb[1] = Math.exp(-Ob.y * Yb), Sb[2] = Math.exp(-Ob.z * Yb)
              }
              const ab = (1 - hb.transmissionWeight) * hb.subsurfaceWeight,
                Hb = ab + hb.transmissionWeight,
                wb = 1 / Math.max(Hb, 1e-6),
                Zb = hb.transmissionWeight * wb,
                Xb = ab * wb,
                pb = Lb.map(((bb, ub) => bb * Zb + Sb[ub] * Xb)),
                ob = {
                  thicknessFactor: Ob,
                  thicknessTexture: Gb,
                  attenuationDistance: Ub * Zb + Yb * Xb,
                  attenuationColor: pb
                };
              ub.extensions = ub.extensions || {}, ub.extensions[DG] = ob
            }
          }
          bb(ub)
        }))
      }
    }
    let zG = !1;

    function gG() {
      zG || (zG = !0, JB.RegisterExtension(DG, (bb => new xG(bb))))
    }
    gG();
    const iG = "KHR_materials_volume_scatter";
    class vG {
      constructor(bb) {
        this.name = iG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        return hb instanceof Qu && (hb.transmissionWeight > 0 && hb.transmissionScatterTexture && Bb.push(hb.transmissionScatterTexture), hb.subsurfaceWeight > 0 && hb.subsurfaceColorTexture && Bb.push(hb.subsurfaceColorTexture)), Bb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ub = bb.transmissionWeight > 0 && !bb.geometryThinWalled && bb.transmissionDepth > 0 && !bb.transmissionScatter.equals(Vb.b.Black()),
          hb = bb.subsurfaceWeight > 0 && !bb.geometryThinWalled;
        return !(!ub && !hb)
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          if (hb instanceof Qu && this._isExtensionEnabled(hb)) {
            this._wasUsed = !0;
            let bb = Mb.q.Zero(),
              Bb = 0;
            if (hb.transmissionWeight > 0) {
              bb = function(bb) {
                const ub = new Mb.q(Math.sqrt(1 - bb.x), Math.sqrt(1 - bb.y), Math.sqrt(1 - bb.z)),
                  hb = new Mb.q(1, 1, 1),
                  Bb = hb.subtract(ub),
                  Ob = hb.subtract(new Mb.q(.139, .139, .139).multiplyInPlace(ub)),
                  Gb = hb.add(new Mb.q(1.17, 1.17, 1.17).multiplyInPlace(ub));
                return Bb.multiplyInPlace(Ob).divideInPlace(Gb)
              }(new Mb.q(hb.transmissionScatter.r, hb.transmissionScatter.g, hb.transmissionScatter.b)), Bb = hb.transmissionScatterAnisotropy
            }
            const Ob = Mb.q.Zero();
            let Gb = 0;
            hb.subsurfaceWeight > 0 && (Ob.set(hb.subsurfaceColor.r, hb.subsurfaceColor.g, hb.subsurfaceColor.b), Gb = hb.subsurfaceScatterAnisotropy);
            const Ub = (1 - hb.transmissionWeight) * hb.subsurfaceWeight,
              Lb = Ub + hb.transmissionWeight,
              Yb = 1 / Math.max(Lb, 1e-6),
              Sb = hb.transmissionWeight * Yb,
              ab = Ub * Yb,
              Hb = {
                multiscatterColorFactor: bb.multiplyByFloats(Sb, Sb, Sb).addInPlace(Ob.multiplyByFloats(ab, ab, ab)).ZBb(),
                scatterAnisotropy: Bb * Sb + Gb * ab
              };
            if (hb.subsurfaceWeight > 0 && hb.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(hb);
              const bb = this._exporter._materialExporter.getTextureInfo(hb.subsurfaceColorTexture);
              bb && (Hb.multiscatterColorTexture = bb)
            } else if (hb.transmissionWeight > 0 && hb.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(hb);
              const bb = this._exporter._materialExporter.getTextureInfo(hb.transmissionScatterTexture);
              bb && (Hb.multiscatterColorTexture = bb)
            }
            ub.extensions = ub.extensions || {}, ub.extensions[iG] = Hb
          }
          bb(ub)
        }))
      }
    }
    let tG = !1;

    function JG() {
      tG || (tG = !0, JB.RegisterExtension(iG, (bb => new vG(bb)), 101))
    }
    JG();
    const eG = "KHR_materials_diffuse_roughness";
    class NG {
      constructor(bb) {
        this.name = eG, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ub, hb) {
        const Bb = [];
        if (hb instanceof du) {
          if (hb._baseDiffuseRoughness) return hb._baseDiffuseRoughnessTexture && Bb.push(hb._baseDiffuseRoughnessTexture), Bb
        } else if (hb instanceof Qu && hb.baseDiffuseRoughness) return hb.baseDiffuseRoughnessTexture && Bb.push(hb.baseDiffuseRoughnessTexture), Bb;
        return []
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          let Bb = null,
            Ob = null;
          if (hb instanceof du ? (Bb = hb._baseDiffuseRoughness, Ob = hb._baseDiffuseRoughnessTexture) : hb instanceof Qu && (Bb = hb.baseDiffuseRoughness, Ob = hb.baseDiffuseRoughnessTexture), !Bb) return void bb(ub);
          this._wasUsed = !0, ub.extensions = ub.extensions || {};
          const Gb = {
            diffuseRoughnessFactor: Bb,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Ob) ?? void 0
          };
          null !== Gb.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(hb), ub.extensions[eG] = Gb, bb(ub)
        }))
      }
    }
    let sG = !1;

    function MG() {
      sG || (sG = !0, JB.RegisterExtension(eG, (bb => new NG(bb))))
    }
    MG();
    const mG = "KHR_materials_openpbr";
    class IG {
      constructor() {
        this.name = mG, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(bb, ub, hb) {
        return new Promise((bb => {
          hb instanceof Qu && (this._wasUsed = !0, ub.extensions = ub.extensions || {}, ub.extensions[mG] = {}), bb(ub)
        }))
      }
    }
    let PG = !1;

    function qG() {
      PG || (PG = !0, JB.RegisterExtension(mG, (() => new IG)))
    }
    qG();
    const EG = "KHR_texture_transform";
    class yG {
      constructor() {
        this.name = EG, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(bb, ub, hb) {
        if (hb.ZN() || ju.k.Warn(`${bb}: "scene" is not defined for Babylon texture ${hb.name}!`), (0 !== hb.uAng || 0 !== hb.vAng) && (ju.k.Warn(`${bb}: Texture ${hb.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== hb.uRotationCenter || 0 !== hb.vRotationCenter)) return;
        const Bb = {};
        let Ob = !1;
        if (0 === hb.uOffset && 0 === hb.vOffset || (Bb.offset = [hb.uOffset, hb.vOffset], Ob = !0), 1 === hb.uScale && 1 === hb.vScale || (Bb.scale = [hb.uScale, hb.vScale], Ob = !0), 0 !== hb.wAng) {
          if (0 !== hb.uRotationCenter || 0 !== hb.vRotationCenter) {
            if (hb.homogeneousRotationInUVTransform && hb.uScale !== hb.vScale) return void ju.k.Warn(`${bb}: Texture ${hb.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${EG}.`);
            ju.k.Warn(`${bb}: Texture ${hb.name} with non-origin rotation center will be exported using an adjusted offset with ${EG}.`), Bb.offset = function(bb) {
              const {
                uOffset: ub,
                vOffset: hb,
                uRotationCenter: Bb,
                vRotationCenter: Ob,
                uScale: Gb,
                vScale: Ub,
                wAng: Lb
              } = bb, Yb = Math.cos(Lb), Sb = Math.sin(Lb), ab = Bb * Gb, Hb = Ob * Ub;
              return [ub + (ab * (1 - Yb) + Hb * Sb), hb + (Hb * (1 - Yb) - ab * Sb)]
            }(hb)
          }
          Bb.rotation = -hb.wAng, Ob = !0
        }
        0 !== hb.coordinatesIndex && (Bb.texCoord = hb.coordinatesIndex, Ob = !0), Ob && (this._wasUsed = !0, ub.extensions || (ub.extensions = {}), ub.extensions[EG] = Bb)
      }
    }
    let VG = !1;

    function FG() {
      VG || (VG = !0, JB.RegisterExtension(EG, (() => new yG)))
    }
    FG();
    var fG = hb(39511);
    const kG = "KHR_texture_basisu";
    class TG {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = kG, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ub) {
        const hb = this._exporter._textures[ub.index],
          Bb = hb.source;
        if (void 0 === Bb) return;
        const Ob = this._exporter._images[Bb];
        "image/ktx2" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[kG] = {
          source: Bb
        }, this._wasUsed = !0)
      }
    }
    let cG = !1;

    function QG() {
      cG || (cG = !0, JB.RegisterExtension(kG, (bb => new TG(bb))))
    }
    QG();
    const RG = "EXT_texture_webp";
    class bU {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = RG, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ub) {
        const hb = this._exporter._textures[ub.index],
          Bb = hb.source;
        if (void 0 === Bb) return;
        const Ob = this._exporter._images[Bb];
        "image/webp" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[RG] = {
          source: Bb
        }, this._wasUsed = !0)
      }
    }
    let uU = !1;

    function hU() {
      uU || (uU = !0, JB.RegisterExtension(RG, (bb => new bU(bb))))
    }
    hU();
    const BU = "EXT_texture_avif";
    class OU {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = BU, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ub) {
        const hb = this._exporter._textures[ub.index],
          Bb = hb.source;
        if (void 0 === Bb) return;
        const Ob = this._exporter._images[Bb];
        "image/avif" === (Ob.mimeType || (0, fG.h)(Ob.uri)) && (hb.source = void 0, hb.extensions || (hb.extensions = {}), hb.extensions[BU] = {
          source: Bb
        }, this._wasUsed = !0)
      }
    }
    let GU = !1;

    function UU() {
      GU || (GU = !0, JB.RegisterExtension(BU, (bb => new OU(bb))))
    }
    UU();
    class LU {
      static CreateSTL(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Gb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Sb = function(bb, ub, hb) {
            const Ob = [3 * bb[hb], 3 * bb[hb + 1], 3 * bb[hb + 2]],
              Gb = [new Bb.YX(ub[Ob[0]], ub[Ob[0] + 2], ub[Ob[0] + 1]), new Bb.YX(ub[Ob[1]], ub[Ob[1] + 2], ub[Ob[1] + 1]), new Bb.YX(ub[Ob[2]], ub[Ob[2] + 2], ub[Ob[2] + 1])],
              Ub = Gb[0].subtract(Gb[1]),
              Lb = Gb[2].subtract(Gb[1]);
            return {
              v: Gb,
              n: Bb.YX.Cross(Lb, Ub).normalize()
            }
          },
          Hb = function(bb, ub, hb, Bb) {
            return ub = wb(bb, ub, hb.x, Bb), ub = wb(bb, ub, hb.y, Bb), wb(bb, ub, hb.z, Bb)
          },
          wb = function(bb, ub, hb, Bb) {
            return bb.setFloat32(ub, hb, Bb), ub + 4
          },
          Xb = function(bb) {
            if (Lb) {
              let ub = bb;
              bb instanceof Zb.d && (ub = bb.LOb);
              const hb = ub.getVerticesData(ab.e.PositionKind, !0, !0);
              if (!hb) return [];
              const Ob = Bb.YX.Zero();
              let Gb;
              for (Gb = 0; Gb < hb.length; Gb += 3) Bb.YX.TransformCoordinatesFromFloatsToRef(hb[Gb], hb[Gb + 1], hb[Gb + 2], bb.computeWorldMatrix(!0), Ob).toArray(hb, Gb);
              return hb
            }
            return bb.getVerticesData(ab.e.PositionKind) || []
          };
        Lb && (Ub = !0);
        let pb = "",
          ob = 0,
          Ab = 0;
        if (Ob) {
          for (let hb = 0; hb < bb.length; hb++) {
            const ub = bb[hb].XBb();
            ob += ub ? ub.length / 3 : 0
          }
          const ub = new ArrayBuffer(84 + 50 * ob);
          pb = new DataView(ub), Ab += 80, pb.setUint32(Ab, ob, Gb), Ab += 4
        } else Yb || (pb = "solid stlmesh\r\n");
        for (let Bb = 0; Bb < bb.length; Bb++) {
          const ub = bb[Bb];
          !Ob && Yb && (pb += "solid " + ub.name + "\r\n"), !Ub && ub instanceof SB.b && ub.bakeCurrentTransformIntoVertices();
          const hb = Xb(ub),
            Lb = ub.XBb() || [];
          for (let bb = 0; bb < Lb.length; bb += 3) {
            const ub = Sb(Lb, hb, bb);
            Ob ? (Ab = Hb(pb, Ab, ub.n, Gb), Ab = Hb(pb, Ab, ub.v[0], Gb), Ab = Hb(pb, Ab, ub.v[1], Gb), Ab = Hb(pb, Ab, ub.v[2], Gb), Ab += 2) : (pb += "\tfacet normal " + ub.n.x + " " + ub.n.y + " " + ub.n.z + "\r\n", pb += "\t\touter loop\r\n", pb += "\t\t\tvertex " + ub.v[0].x + " " + ub.v[0].y + " " + ub.v[0].z + "\r\n", pb += "\t\t\tvertex " + ub.v[1].x + " " + ub.v[1].y + " " + ub.v[1].z + "\r\n", pb += "\t\t\tvertex " + ub.v[2].x + " " + ub.v[2].y + " " + ub.v[2].z + "\r\n", pb += "\t\tendloop\r\n", pb += "\tendfacet\r\n")
          }!Ob && Yb && (pb += "endsolid " + name + "\r\n")
        }
        if (Ob || Yb || (pb += "endsolid stlmesh"), ub) {
          const bb = document.createElement("a"),
            ub = new Blob([pb], {
              type: "application/octet-stream"
            });
          bb.href = window.URL.createObjectURL(ub), bb.download = hb + ".stl", bb.click()
        }
        return pb
      }
    }

    function YU(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ob = [];
      for (let Gb = 0; Gb < bb.length / hb; Gb++) {
        const Ub = bb[Gb * hb] * (Bb ? -1 : 1),
          Lb = bb[Gb * hb + 1],
          Yb = bb[Gb * hb + 2];
        Ob.push(`(${Ub.toPrecision(ub.precision)}, ${Lb.toPrecision(ub.precision)}, ${Yb.toPrecision(ub.precision)})`)
      }
      return Ob.join(", ")
    }

    function SU(bb, ub) {
      const hb = [];
      for (let Bb = 0; Bb < bb.length / 2; Bb++) {
        const Ob = bb[2 * Bb],
          Gb = bb[2 * Bb + 1];
        hb.push(`(${Ob.toPrecision(ub.precision)}, ${(1-Gb).toPrecision(ub.precision)})`)
      }
      return hb.join(", ")
    }

    function aU(bb, ub, hb, Bb) {
      const Ob = bb.getVerticesData(ab.e.PositionKind),
        Gb = bb.getVerticesData(ab.e.NormalKind);
      if (Ob && Gb) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${hb}"\n\t\tint[] faceVertexCounts = [${function(bb){const ub=bb.XBb()?.length?bb.getTotalIndices():bb.getTotalVertices();return Array(ub/3).fill(3).join(", ")}(bb)}]\n\t\tint[] faceVertexIndices = [${function(bb){const ub=bb.XBb(),hb=ub?.length??bb.getTotalVertices(),Bb=[];if(null!==ub)for(let Ob=0;Ob<hb;Ob++)Bb.push(ub[Ob]);else for(let Ob=0;Ob<hb;Ob++)Bb.push(Ob);return Bb.join(", ")}(bb)}]\n\t\tnormal3f[] normals = [${YU(Gb,ub,void 0,Bb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${YU(Ob,ub,void 0,Bb)}]\n        ${function(bb,ub){let hb="";for(let Ob=0;Ob<4;Ob++){const Bb=Ob>0?Ob:"",Gb=bb.getVerticesData(ab.e.UVKind+(Bb?Bb+1:""));Gb&&(hb+=`\n\t\ttexCoord2f[] primvars:st${Bb} = [${SU(Gb,ub)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Bb=bb.getVerticesData(ab.e.ColorKind);return Bb&&(hb+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        YU(Bb, ub, Bb.length / bb.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),hb}(bb,ub)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function HU(bb, ub, hb, Bb) {
      return `\n        def "Geometry"\n        {\n        ${aU(bb,ub,hb,Bb)}\n        }\n        `
    }

    function wU(bb) {
      let ub = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return ub += bb, fflate.strToU8(ub)
    }

    function ZU(bb) {
      const ub = bb.m;
      return `( ${XU(ub,0)}, ${XU(ub,4)}, ${XU(ub,8)}, ${XU(ub,12)} )`
    }

    function XU(bb, ub) {
      return `(${bb[ub+0]}, ${bb[ub+1]}, ${bb[ub+2]}, ${bb[ub+3]})`
    }

    function pU(bb, ub) {
      const hb = "Object_" + bb.uniqueId,
        Bb = ZU(ub);
      return `def Xform "${hb}" (\n\tprepend references = @./geometries/Geometry_${bb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Bb}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${bb.material.uniqueId}>\n}\n\n`
    }

    function oU(bb) {
      switch (bb) {
        case rb.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case rb.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case rb.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function AU(bb) {
      return `(${bb.x}, ${bb.y})`
    }

    function lU(bb) {
      return `(${bb.r}, ${bb.g}, ${bb.b})`
    }

    function KU(bb) {
      return "image/jpeg" === bb || "image/png" === bb
    }

    function WU(bb, ub, hb, Ob, Gb, Ub) {
      const Lb = bb.getInternalTexture().uniqueId + "_" + bb.invertY,
        Sb = bb.mimeType || (0, Yb.c)(bb.getInternalTexture()?.url ?? ""),
        ab = KU(Sb) ? Sb : "image/png",
        Hb = "image/jpeg" === ab ? "jpg" : "png";
      Gb[Lb] = {
        texture: bb,
        mimeType: ab,
        ext: Hb
      };
      const wb = bb.coordinatesIndex > 0 ? "st" + bb.coordinatesIndex : "st",
        Zb = new Bb.Vector2(bb.uScale, bb.vScale),
        Xb = new Bb.Vector2(bb.uOffset, bb.vOffset),
        pb = bb.wAng,
        ob = Math.sin(pb),
        Ab = Math.cos(pb);
      return Xb.y = 1 - Xb.y - Zb.y, Xb.x += ob * Zb.x, Xb.y += (1 - Ab) * Zb.y, `\n    def Shader "PrimvarReader_${hb}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${wb}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${hb}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${ub.uniqueId}/PrimvarReader_${hb}.outputs:result>\n        float inputs:rotation = ${(pb*(180/Math.PI)).toFixed(Ub.precision)}\n        float2 inputs:scale = ${AU(Zb)}\n        float2 inputs:translation = ${AU(Xb)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${bb.uniqueId}_${hb}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Lb}.${Hb}@\n        float2 inputs:st.connect = </Root/Materials/Material_${ub.uniqueId}/Transform2d_${hb}.outputs:result>\n        ${Ob?"float4 inputs:scale = "+function(bb){return`(${bb.r}, ${bb.g}, ${bb.b}, 1.0)`}(Ob):""}\n        token inputs:sourceColorSpace = "${bb.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${oU(bb.wrapU)}"\n        token inputs:wrapT = "${oU(bb.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${ub.needAlphaBlending()||ub.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function CU(bb, ub, hb) {
      const Bb = "\t\t\t",
        Ob = [],
        Gb = [],
        {
          diffuseMap: Ub,
          diffuse: Lb,
          alphaCutOff: Yb,
          emissiveMap: Sb,
          emissive: ab,
          normalMap: Hb,
          roughnessMap: wb,
          roughnessChannel: Zb,
          roughness: Xb,
          metalnessMap: pb,
          metalnessChannel: Ab,
          metalness: lb,
          aoMap: Kb,
          aoMapChannel: Wb,
          aoMapIntensity: Cb,
          alphaMap: db,
          ior: rb,
          clearCoatEnabled: jb,
          clearCoat: nb,
          clearCoatMap: Db,
          clearCoatRoughness: xb,
          clearCoatRoughnessMap: zb
        } = function(bb) {
          const ub = {
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
          return bb instanceof GB.StandardMaterial ? {
            ...ub,
            diffuseMap: bb.diffuseTexture,
            diffuse: bb.diffuseColor,
            alphaCutOff: bb.alphaCutOff,
            emissiveMap: bb.emissiveTexture,
            emissive: bb.emissiveColor,
            roughness: 1,
            alphaMap: bb.opacityTexture
          } : bb instanceof du ? {
            ...ub,
            diffuseMap: bb._albedoTexture,
            diffuse: bb._albedoColor,
            alphaCutOff: bb._alphaCutOff,
            emissiveMap: bb._emissiveTexture,
            emissive: bb._emissiveColor,
            normalMap: bb._bumpTexture,
            roughnessMap: bb._metallicTexture,
            roughnessChannel: bb._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: bb._roughness ?? 1,
            metalnessMap: bb._metallicTexture,
            metalnessChannel: bb._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: bb._metallic ?? 0,
            aoMap: bb._ambientTexture,
            aoMapChannel: bb._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: bb._ambientTextureStrength,
            alphaMap: bb._opacityTexture,
            ior: bb.subSurface.indexOfRefraction,
            clearCoatEnabled: bb.clearCoat.isEnabled,
            clearCoat: bb.clearCoat.intensity,
            clearCoatMap: bb.clearCoat.texture,
            clearCoatRoughness: bb.clearCoat.roughness,
            clearCoatRoughnessMap: bb.clearCoat.useRoughnessFromMainTexture ? bb.clearCoat.texture : bb.clearCoat.textureRoughness
          } : ub
        }(bb);
      return null !== Ub ? (Ob.push(`${Bb}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ub.uniqueId}_diffuse.outputs:rgb>`), bb.needAlphaBlending() ? Ob.push(`${Bb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ub.uniqueId}_diffuse.outputs:a>`) : bb.needAlphaTesting() && (Ob.push(`${Bb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ub.uniqueId}_diffuse.outputs:a>`), Ob.push(`${Bb}float inputs:opacityThreshold = ${Yb}`)), Gb.push(WU(Ub, bb, "diffuse", Lb, ub, hb))) : Ob.push(`${Bb}color3f inputs:diffuseColor = ${lU(Lb||ob.Color3.White())}`), null !== Sb ? (Ob.push(`${Bb}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Sb.uniqueId}_emissive.outputs:rgb>`), Gb.push(WU(Sb, bb, "emissive", ab, ub, hb))) : ab && ab.toLuminance() > 0 && Ob.push(`${Bb}color3f inputs:emissiveColor = ${lU(ab)}`), null !== Hb && (Ob.push(`${Bb}normal3f inputs:normal.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Hb.uniqueId}_normal.outputs:rgb>`), Gb.push(WU(Hb, bb, "normal", null, ub, hb))), null !== Kb && (Ob.push(`${Bb}float inputs:occlusion.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Kb.uniqueId}_occlusion.outputs:${Wb}>`), Gb.push(WU(Kb, bb, "occlusion", new ob.Color3(Cb, Cb, Cb), ub, hb))), null !== wb ? (Ob.push(`${Bb}float inputs:roughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${wb.uniqueId}_roughness.outputs:${Zb}>`), Gb.push(WU(wb, bb, "roughness", new ob.Color3(Xb, Xb, Xb), ub, hb))) : Ob.push(`${Bb}float inputs:roughness = ${Xb}`), null !== pb ? (Ob.push(`${Bb}float inputs:metallic.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${pb.uniqueId}_metallic.outputs:${Ab}>`), Gb.push(WU(pb, bb, "metallic", new ob.Color3(lb, lb, lb), ub, hb))) : Ob.push(`${Bb}float inputs:metallic = ${lb}`), null !== db ? (Ob.push(`${Bb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${db.uniqueId}_opacity.outputs:r>`), Ob.push(`${Bb}float inputs:opacityThreshold = 0.0001`), Gb.push(WU(db, bb, "opacity", null, ub, hb))) : Ob.push(`${Bb}float inputs:opacity = ${bb.alpha}`), jb && (null !== Db ? (Ob.push(`${Bb}float inputs:clearcoat.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Db.uniqueId}_clearcoat.outputs:r>`), Gb.push(WU(Db, bb, "clearcoat", new ob.Color3(nb, nb, nb), ub, hb))) : Ob.push(`${Bb}float inputs:clearcoat = ${nb}`), null !== zb ? (Ob.push(`${Bb}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${zb.uniqueId}_clearcoatRoughness.outputs:g>`), Gb.push(WU(zb, bb, "clearcoatRoughness", new ob.Color3(xb, xb, xb), ub, hb))) : Ob.push(`${Bb}float inputs:clearcoatRoughness = ${xb}`)), Ob.push(`${Bb}float inputs:ior = ${rb}`), `\n\tdef Material "Material_${bb.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Ob.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${bb.uniqueId}/PreviewSurface.outputs:surface>\n\n${Gb.join("\n")}\n\n\t}\n`
    }

    function dU(bb) {
      bb.computeWorldMatrix(!0);
      const ub = bb.getWorldMatrix().clone(),
        hb = bb.ZN().useRightHandedSystem;
      let Bb = bb.material?._getEffectiveOrientation(bb) ?? bb.sideOrientation,
        Ub = !hb,
        Lb = bb.parent;
      for (; Lb;) {
        if (eh(Lb, hb) && null === Lb.parent) {
          hb || (ub.multiplyToRef(Lb.getWorldMatrix().invert(), ub), Bb = Bb === Gb.e.ClockWiseSideOrientation ? Gb.e.CounterClockWiseSideOrientation : Gb.e.ClockWiseSideOrientation), Ub = !1;
          break
        }
        Lb = Lb.parent
      }
      return ub.determinant() < 0 && Ob.Tools.Warn(`Mesh ${bb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: ub,
        windingOrder: Bb === Gb.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Ub
      }
    }
    async function rU(bb, ub, hb) {
      const Gb = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...ub
      };
      "undefined" === typeof fflate && await Ob.Tools.LoadScriptAsync(Gb.fflateUrl);
      const Ub = {};
      Ub[Gb.modelFileName] = null;
      let Lb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Lb += function(bb) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===bb.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${bb.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${bb.planeAnchoringAlignment}"`:""}\n            `
      }(Gb);
      const Yb = {};
      for (const Bb of bb.meshes) {
        if (0 === Bb.getTotalVertices()) continue;
        const bb = Bb,
          ub = bb.geometry,
          Sb = bb.material;
        if (!Sb || !ub || hb && !hb(bb)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Sb.getClassName())) {
          const hb = "geometries/Geometry_" + ub.uniqueId + ".usda",
            {
              matrix: Bb,
              windingOrder: Ob,
              convertToRightHanded: ab
            } = dU(bb);
          if (!(hb in Ub)) {
            const bb = HU(ub, Gb, Ob, ab);
            Ub[hb] = wU(bb)
          }
          Sb.uniqueId in Yb || (Yb[Sb.uniqueId] = Sb), Lb += pU(bb, Bb)
        } else Ob.Tools.Warn("USDZExportAsync does not support this material type: " + Sb.getClassName())
      }
      bb.activeCamera && Gb.exportCamera && (Lb += function(bb, ub) {
        const hb = "Camera_" + bb.uniqueId,
          Ob = ZU(Bb.Matrix.RotationY(Math.PI).multiply(bb.getWorldMatrix()));
        if (bb.mode === rb.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${hb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ob}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ub.precision)}, ${bb.maxZ.toPrecision(ub.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(bb.orthoLeft||1)+Math.abs(bb.orthoRight||1))).toPrecision(ub.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(bb.orthoTop||1)+Math.abs(bb.orthoBottom||1))).toPrecision(ub.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Bb = bb.UX().getAspectRatio(bb),
            Gb = ub.cameraSensorWidth || 35;
          return `def Camera "${hb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ob}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ub.precision)}, ${bb.maxZ.toPrecision(ub.precision)})\n\t\t\tfloat focalLength = ${(Gb/(2*Math.tan(.5*bb.fov))).toPrecision(ub.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Gb*Bb).toPrecision(ub.precision)}\n\t\t\tfloat verticalAperture = ${(Gb/Bb).toPrecision(ub.precision)}            \n\t\t}\n\t\n\t`
        }
      }(bb.activeCamera, Gb)), Lb += "\n            }\n        }";
      const Sb = {};
      Lb += function(bb, ub, hb) {
        const Bb = [];
        for (const Ob in bb) {
          const Gb = bb[Ob];
          Bb.push(CU(Gb, ub, hb))
        }
        return `\n    def "Materials"\n{\n${Bb.join("")}\n}\n\n`
      }(Yb, Sb, Gb), Lb += "\n    }", Ub[Gb.modelFileName] = fflate.strToU8(Lb);
      for (const Bb in Sb) {
        const {
          texture: bb,
          ext: ub,
          mimeType: hb
        } = Sb[Bb], Ob = await Ah(bb);
        if (Ob && KU(Ob.mimeType) && Ob.mimeType === hb) Ub[`textures/Texture_${Bb}.${ub}`] = new Uint8Array(Ob.data);
        else {
          const Ob = bb.getSize(),
            Gb = await (0, Wb.e)(bb),
            Lb = await jb.DumpTools.DumpDataAsync(Ob.width, Ob.height, Gb, hb, void 0, !1, !0);
          Ub[`textures/Texture_${Bb}.${ub}`] = new Uint8Array(Lb).slice()
        }
      }
      let ab = 0;
      for (const Bb in Ub) {
        const bb = Ub[Bb];
        if (!bb) continue;
        ab += 34 + Bb.length;
        const ub = 63 & ab;
        if (4 !== ub) {
          const hb = new Uint8Array(64 - ub);
          Ub[Bb] = [bb, {
            extra: {
              12345: hb
            }
          }]
        }
        ab = bb.length
      }
      return fflate.zipSync(Ub, {
        level: 0
      })
    }
    var jU = hb(40547);
    class nU {
      static Export(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || 0 === bb.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Bb = ub;
        ub && 0 !== ub.length || (Bb = bb.animations.map((bb => bb.name)));
        let Ob = null;
        for (const Sb of Bb) {
          const ub = bb.getAnimationRange(Sb);
          ub && (Ob = Ob ? new jU.d("animation-range", Math.min(Ob.from, ub.from), Math.max(Ob.to, ub.to)) : ub)
        }
        if (!Ob && (bb.animations.length > 0 && (Ob = bb.getAnimationRange(bb.animations[0].name)), !Ob)) throw new Error("No animation range found in skeleton");
        const Gb = hb || 1 / (bb.animations[0]?.framePerSecond || 30),
          Ub = this._BuildBoneHierarchy(bb, Bb);
        let Lb = 0;
        for (const Sb of Ub) Sb.positionKeys.length > 0 && (Lb = Math.max(Lb, Sb.positionKeys.length)), Sb.rotationKeys.length > 0 && (Lb = Math.max(Lb, Sb.rotationKeys.length));
        0 === Lb && (Lb = Math.floor((Ob.to - Ob.from) / Gb) + 1);
        let Yb = "";
        return Yb += "HIERARCHY\n", Yb += this._ExportHierarchy(Ub, 0), Yb += "MOTION\n", Yb += `Frames: ${Lb}\n`, Yb += `Frame Time: ${Gb.toFixed(6)}\n`, Yb += this._ExportMotionData(Ub, Lb, 0, Bb), Yb
      }
      static _BuildBoneHierarchy(bb, ub) {
        const hb = new Map,
          Bb = [];
        for (const Ob of bb.bones) {
          const bb = {
            bone: Ob,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          hb.set(Ob, bb)
        }
        for (const Ob of bb.bones) {
          const bb = hb.get(Ob);
          if (Ob.animations.length > 0)
            for (const hb of Ob.animations) ub.includes(hb.name) && ("position" === hb.targetProperty ? (bb.hasPositionChannels = !0, bb.positionKeys.push(...hb.getKeys())) : "rotationQuaternion" === hb.targetProperty && (bb.hasRotationChannels = !0, bb.rotationKeys.push(...hb.getKeys())));
          if (Ob.getParent()) {
            const ub = hb.get(Ob.getParent());
            ub && ub.children.push(bb)
          } else Bb.push(bb)
        }
        return Bb
      }
      static _ExportHierarchy(bb, ub) {
        let hb = "";
        const Bb = "    ".repeat(ub);
        for (const Ob of bb) {
          const bb = Ob.bone;
          if (this._IsEndSite(Ob)) {
            hb += `${Bb}End Site\n`, hb += `${Bb}{\n`;
            const ub = this._GetBoneOffset(bb);
            hb += `${Bb}    OFFSET ${ub.x.toFixed(6)} ${ub.y.toFixed(6)} ${ub.z.toFixed(6)}\n`, hb += `${Bb}}\n`
          } else {
            hb += `${0===ub?"ROOT":`${Bb}JOINT`} ${bb.name}\n`, hb += `${Bb}{\n`;
            const Gb = this._GetBoneOffset(bb);
            hb += `${Bb}    OFFSET ${Gb.x.toFixed(6)} ${Gb.y.toFixed(6)} ${Gb.z.toFixed(6)}\n`;
            const Ub = [];
            Ob.hasPositionChannels && Ub.push("Xposition", "Yposition", "Zposition"), Ob.hasRotationChannels && Ub.push("Zrotation", "Xrotation", "Yrotation"), Ub.length > 0 && (hb += `${Bb}    CHANNELS ${Ub.length} ${Ub.join(" ")}\n`), Ob.children.length > 0 && (hb += this._ExportHierarchy(Ob.children, ub + 1)), hb += `${Bb}}\n`
          }
        }
        return hb
      }
      static _IsEndSite(bb) {
        return 0 === bb.children.length
      }
      static _GetBoneOffset(bb) {
        try {
          if (!bb.getParent()) return bb.getRestMatrix().getTranslation();
          return bb.getLocalMatrix().getTranslation()
        } catch (ub) {
          return Bb.YX.Zero()
        }
      }
      static _ExportMotionData(bb, ub, hb, Bb) {
        let Ob = "";
        for (let Gb = 0; Gb < ub; Gb++) {
          const ub = [];
          this._CollectFrameValues(bb, Gb + hb, ub, Bb), Ob += ub.map((bb => bb.toFixed(6))).join(" ") + "\n"
        }
        return Ob
      }
      static _CollectFrameValues(bb, ub, hb, Bb) {
        for (const Ob of bb)
          if (!this._IsEndSite(Ob)) {
            if (Ob.hasPositionChannels) {
              const bb = this._GetPositionAtFrameIndex(Ob.positionKeys, ub);
              hb.push(bb.x, bb.y, bb.z)
            }
            if (Ob.hasRotationChannels) {
              const bb = this._GetRotationAtFrameIndex(Ob.rotationKeys, ub),
                Bb = this._QuaternionToEuler(bb);
              hb.push(Bb.z, Bb.x, Bb.y)
            }
            Ob.children.length > 0 && this._CollectFrameValues(Ob.children, ub, hb, Bb)
          }
      }
      static _GetPositionAtFrameIndex(bb, ub) {
        if (0 === bb.length) return Bb.YX.Zero();
        return bb[Math.max(0, Math.min(ub, bb.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(bb, ub) {
        if (0 === bb.length) return Bb.Quaternion.Identity();
        return bb[Math.max(0, Math.min(ub, bb.length - 1))].value.clone()
      }
      static _QuaternionToEuler(bb) {
        const ub = new Bb.Matrix;
        bb.toRotationMatrix(ub);
        const hb = ub.m;
        let Gb, Ub, Lb;
        const Yb = Math.sqrt(hb[0] * hb[0] + hb[1] * hb[1]);
        return Yb > th.b ? (Gb = Math.atan2(hb[6], hb[10]), Ub = Math.atan2(-hb[2], Yb), Lb = Math.atan2(hb[1], hb[0])) : (Gb = Math.atan2(-hb[9], hb[5]), Ub = Math.atan2(-hb[2], Yb), Lb = 0), new Bb.YX(Ob.Tools.ToDegrees(Gb), Ob.Tools.ToDegrees(Ub), Ob.Tools.ToDegrees(Lb))
      }
    }

    function DU(bb) {
      return "string" === typeof bb?.name
    }
    const xU = Symbol("__xml:meta$__"),
      zU = Symbol("__xml:name$__");

    function gU(bb, ub) {
      Object.prototype.hasOwnProperty.call(bb.metadata, xU) || (bb.metadata[xU] = []), bb.metadata[xU].push(ub)
    }

    function iU(bb) {
      return (ub, hb) => {
        ub[zU] = bb
      }
    }

    function vU() {
      return (bb, ub) => gU(ub, {
        kind: "none",
        prop: String(ub.name),
        ignore: !0
      })
    }

    function tU(bb) {
      return (ub, hb) => gU(hb, {
        kind: "attr",
        prop: String(hb.name),
        ...bb
      })
    }

    function JU(bb) {
      return (ub, hb) => gU(hb, {
        kind: "elem",
        prop: String(hb.name),
        ...bb
      })
    }

    function eU(bb) {
      const ub = "function" === typeof bb ? bb : bb?.constructor,
        hb = ub?.[Symbol.metadata];
      if (!hb) return [];
      const Bb = [];
      let Ob = hb;
      for (; Ob;) Object.prototype.hasOwnProperty.call(Ob, xU) && Bb.push(...Ob[xU]), Ob = Object.getPrototypeOf(Ob);
      return Bb
    }

    function NU(bb) {
      const ub = bb?.constructor?.[zU];
      return ub || void 0
    }

    function sU(bb) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(bb)
    }

    function MU(bb) {
      if (DU(bb)) return bb;
      const ub = (bb ?? "").trim();
      if (!ub) return {
        name: ""
      };
      const hb = ub.indexOf(":");
      if (-1 === hb) return {
        name: ub
      };
      if (-1 !== ub.indexOf(":", hb + 1)) return {
        name: ub
      };
      const Bb = ub.slice(0, hb),
        Ob = ub.slice(hb + 1);
      return sU(Bb) && sU(Ob) ? {
        ns: Bb,
        name: Ob
      } : {
        name: ub
      }
    }

    function mU(bb, ub) {
      return ub ? `${ub}:${bb}` : bb
    }
    const IU = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      PU = Object.freeze({
        number: IU
      });

    function qU(bb) {
      const ub = bb?.eps ?? IU.eps;
      return {
        eps: ub,
        maxDecimalsCap: bb?.maxDecimalsCap ?? IU.maxDecimalsCap,
        trimTrailingZeros: bb?.trimTrailingZeros ?? IU.trimTrailingZeros,
        fixedDecimals: bb?.fixedDecimals,
        allowScientific: bb?.allowScientific ?? IU.allowScientific,
        snapNearZero: bb?.snapNearZero ?? IU.snapNearZero,
        zeroThreshold: bb?.zeroThreshold ?? ub,
        perAttributeEps: bb?.perAttributeEps
      }
    }

    function EU(bb) {
      return {
        number: qU(bb?.number)
      }
    }
    class yU {
      constructor(bb) {
        if (this.o = bb, this._o = bb.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(bb) {
        if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
        const ub = this._o,
          hb = this._clampInt(ub.maxDecimalsCap ?? 15, 0, 20),
          Bb = ub.trimTrailingZeros ?? !0,
          Ob = ub.snapNearZero ?? !0,
          Gb = ub.zeroThreshold ?? ub.eps,
          Ub = 1 / ub.eps;
        let Lb, Yb = Math.round(bb * Ub) / Ub;
        if (Object.is(Yb, -0) && (Yb = 0), Ob && Math.abs(Yb) <= Gb && (Yb = 0), Lb = void 0 !== ub.fixedDecimals ? this._clampInt(ub.fixedDecimals, 0, hb) : this._clampInt(Math.ceil(-Math.log10(ub.eps)), 0, hb), ub.allowScientific, 0 === Lb) return String(Math.trunc(Yb));
        let Sb = Yb.toFixed(Lb);
        if (Bb && void 0 === ub.fixedDecimals && (Sb = Sb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Sb)) throw new Error(`Scientific notation not allowed in XML output: ${Sb}`);
        return Sb
      }
      _clampInt(bb, ub, hb) {
        return Number.isFinite(bb) ? (bb = Math.trunc(bb), Math.max(ub, Math.min(hb, bb))) : ub
      }
    }

    function VU(bb) {
      return bb instanceof Date
    }

    function FU(bb) {
      return "string" === typeof bb
    }

    function fU(bb) {
      return "string" === typeof bb || "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || VU(bb)
    }

    function kU(bb) {
      return "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || VU(bb)
    }
    class TU {
      constructor(bb, ub) {
        this._ns = new Map, this._prefixCount = 0, this._builder = bb, this._format = EU(ub), this._nFmt = new yU(this._format)
      }
      withNamespace() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        for (const Bb of ub) this._assignNamespace(Bb);
        return this
      }
      serialize(bb, ub) {
        if (!(ub = ub ?? NU(bb))) throw new Error("can not find name for given object");
        const hb = MU(ub);
        hb.ns && this._assignNamespace(hb.ns, "xmlns"), this._gatherNamespaces(bb, new WeakSet);
        const Bb = this._builder.ele(null, hb.name);
        for (const [Ob, Gb] of Array.from(this._ns.entries())) Bb.att("xmlns", Gb, Ob);
        this._writeObjectContent(Bb, bb, (new WeakSet).add(bb)), this._builder.end()
      }
      _writeObject(bb, ub, hb) {
        if (hb.has(ub)) return;
        if (hb.add(ub), Array.isArray(ub)) {
          for (const Bb of ub) kU(Bb) || (FU(Bb) ? this._builder.text(Bb) : this._writeObject(bb, Bb, hb));
          return
        }
        const Bb = NU(ub);
        if (!Bb) return;
        const Ob = MU(Bb),
          Gb = this._getPrefix(Ob),
          Ub = mU(Ob.name, Gb);
        bb.ele(null, Ub), this._writeObjectContent(bb, ub, hb), this._builder.end()
      }
      _getPrefix(bb) {
        if (bb.ns) {
          const ub = this._ns.get(bb.ns.toLowerCase());
          if ("xmlns" !== ub) return ub
        }
      }
      _writeObjectContent(bb, ub, hb) {
        const Bb = eU(ub) ?? [],
          Ob = new Map;
        for (const Ub of Bb) {
          const bb = Ob.get(Ub.prop) ?? [];
          bb.push(Ub), Ob.set(Ub.prop, bb)
        }
        const Gb = Object.keys(ub).sort(((bb, ub) => {
          const hb = (Ob.get(bb) ?? []).some((bb => "attr" === bb.kind));
          return hb === (Ob.get(ub) ?? []).some((bb => "attr" === bb.kind)) ? 0 : hb ? -1 : 1
        }));
        for (const Ub of Gb) {
          const Bb = ub[Ub];
          if (null === Bb || void 0 === Bb) continue;
          const Gb = Ob.get(Ub);
          if (Gb) {
            if (Gb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const ub of Gb) {
              const hb = ub.name ?? ub.prop.toLowerCase();
              if (hb) switch (ub.kind) {
                case "attr": {
                  let Ob = null;
                  if ("number" === typeof Bb && this._nFmt && (Ob = this._nFmt.toString(Bb)), ub.formatter) {
                    Ob = new ub.formatter(this._format).toString(Bb)
                  }
                  if (Ob = Ob ?? Bb.toString(), Ob) {
                    const ub = MU(hb),
                      Bb = this._getPrefix(ub),
                      Gb = mU(ub.name, Bb);
                    bb.att(null, Gb, Ob)
                  }
                  break
                }
              }
            }
          } else kU(Bb) || (FU(Bb) ? this._builder.text(Bb) : this._writeObject(bb, Bb, hb))
        }
      }
      _gatherNamespaces(bb, ub) {
        if (ub.has(bb)) return;
        if (ub.add(bb), Array.isArray(bb)) {
          for (const hb of bb) fU(hb) || this._gatherNamespaces(hb, ub);
          return
        }
        const hb = NU(bb);
        hb && this._assignNamespace(hb);
        const Bb = eU(bb) ?? [],
          Ob = new Map;
        for (const Ub of Bb) {
          const bb = Ob.get(Ub.prop) ?? [];
          bb.push(Ub), Ob.set(Ub.prop, bb)
        }
        const Gb = [];
        for (const Ub of Object.keys(bb)) {
          const ub = bb[Ub];
          if (null === ub || void 0 === ub) continue;
          const hb = Ob.get(Ub);
          if (hb) {
            if (hb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const bb of hb) bb.name && this._assignNamespace(bb.name)
          }
          Gb.push(ub)
        }
        for (const Ub of Gb) fU(Ub) || this._gatherNamespaces(Ub, ub)
      }
      _assignNamespace(bb, ub) {
        const hb = MU(bb);
        if (hb?.ns) {
          const bb = hb.ns.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, ub ?? this._buildNsPrefix(bb))
        } else if ("xmlns" === ub) {
          const bb = hb.name.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, ub ?? this._buildNsPrefix(bb))
        }
      }
      _buildNsPrefix(bb) {
        let ub, hb = !1;
        do {
          ub = "ns" + this._prefixCount++;
          for (const bb of Array.from(this._ns.values()))
            if (bb === ub) {
              hb = !0;
              break
            }
        } while (hb);
        return ub
      }
    }
    class cU {}
    var QU;
    cU.OpenTag = "<", cU.CloseTag = ">", cU.Slash = "/", cU.Question = "?", cU.Quote = '"', cU.Equal = "=", cU.Space = " ", cU.Semicolon = ":", cU.Dec = "<?xml", cU.Xml = "xml", cU.Xmlns = "xmlns", cU.Xsi = "xsi", cU.VersionKeyword = "version", cU.EncodingKeyword = "encoding", cU.StandaloneKeyword = "standalone",
      function(bb) {
        bb[bb.Declaration = 0] = "Declaration", bb[bb.Tag = 1] = "Tag", bb[bb.Attribute = 2] = "Attribute", bb[bb.Text = 3] = "Text"
      }(QU || (QU = {}));
    class RU {
      constructor(bb) {
        this._ctxStack = [], this._d = 0, this._w = bb
      }
      dec(bb, ub, hb) {
        return this._w.write(cU.Dec), this._writeAttStr(cU.VersionKeyword, bb), ub && this._writeAttStr(cU.EncodingKeyword, ub), void 0 !== hb && this._writeAttStr(cU.StandaloneKeyword, hb ? "yes" : "no"), this._w.write(cU.Question, cU.CloseTag), this
      }
      att(bb, ub, hb) {
        const Bb = this._peekContext();
        if (!Bb) throw new Error("att() without open element");
        if (Bb.closed) throw new Error(`att() after start tag closed for <${Bb.name}>`);
        if (this._isXmlnsDecl(bb, ub)) {
          if (ub === cU.Xmlns) Bb.defaultNs = hb, this._registerNamespace(Bb, "", hb), this._writeAttStr(cU.Xmlns, hb);
          else if (bb) this._registerNamespace(Bb, ub, hb), this._writeAttStr(`${bb}:${ub}`, hb);
          else {
            const bb = ub.slice(6);
            this._registerNamespace(Bb, bb, hb), this._writeAttStr(ub, hb)
          }
          return Bb.lastToken = QU.Attribute, this
        }
        let Ob = ub;
        if (bb) {
          Ob = `${this._ensurePrefixDeclared(Bb,bb)}:${ub}`
        }
        return Bb.lastToken = QU.Attribute, this._writeAttStr(Ob, hb), this
      }
      ele(bb, ub) {
        const hb = this._peekContext();
        hb && this._closeOpenTagIfNeeded(hb);
        let Bb = ub;
        if (bb) {
          Bb = `${this._lookupPrefix(bb)??bb}:${ub}`
        }
        return this._pushContext(Bb, ++this._d), this._w.write(cU.OpenTag, Bb), this
      }
      text(bb) {
        const ub = this._peekContext();
        if (!ub) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(ub), ub.lastToken = QU.Text, this._w.write(this._escText(bb)), this
      }
      end() {
        const bb = this._popContext();
        return bb && (this._d--, bb.closed ? this._w.write(cU.OpenTag, cU.Slash, bb.name, cU.CloseTag) : this._w.write(cU.Slash, cU.CloseTag)), this
      }
      _pushContext(bb, ub) {
        const hb = new RU.Context(bb, ub);
        return this._ctxStack.push(hb), hb
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
      _writeAttStr(bb, ub) {
        this._w.write(cU.Space, bb, cU.Equal, cU.Quote, this._escAttr(ub), cU.Quote)
      }
      _lookupPrefix(bb) {
        let ub = this._ctxStack.length - 1;
        if (ub >= 0)
          do {
            const hb = this._ctxStack[ub--],
              Bb = hb.ns2prefix?.get(bb);
            if (Bb) return Bb
          } while (ub >= 0)
      }
      _escText(bb) {
        return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(bb) {
        return this._escText(bb).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(bb, ub) {
        if (bb) return bb === cU.Xmlns;
        const hb = ub.length,
          Bb = cU.Xmlns.length;
        return hb >= Bb && (ub.startsWith(cU.Xmlns) && (ub.length == Bb || ub[Bb] == cU.Semicolon))
      }
      _registerNamespace(bb, ub, hb) {
        if (ub === cU.Xml || ub === cU.Xmlns) throw new Error(`reserved prefix '${ub}'`);
        const Bb = bb.prefix2ns.get(ub);
        if (Bb && Bb !== hb) throw new Error(`prefix '${ub}' already bound to a different namespace`);
        bb.ns2prefix.get(hb) || bb.ns2prefix.set(hb, ub), bb.prefix2ns.set(ub, hb)
      }
      _allocPrefix(bb) {
        let ub = 1;
        for (;;) {
          const hb = "ns" + ub++;
          if (!bb.prefix2ns.has(hb)) return hb
        }
      }
      _ensurePrefixDeclared(bb, ub) {
        const hb = this._lookupPrefix(ub);
        if (hb) return hb;
        if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
        const Bb = this._allocPrefix(bb);
        return this._writeAttStr(`${cU.Xmlns}:${Bb}`, ub), this._registerNamespace(bb, Bb, ub), Bb
      }
      _closeOpenTagIfNeeded(bb) {
        bb.closed || (this._w.write(cU.CloseTag), bb.closed = !0)
      }
    }
    RU.Context = class {
      constructor(bb, ub) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = bb, this.depth = ub
      }
    };
    class bL {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        if (0 === ub.length) return this;
        const Bb = ub.join("");
        return this._chunks.push(Bb), this.count += Bb.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class uL {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = bb, this._opts = ub, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        if (0 === ub.length) return this;
        const Bb = ub.join("");
        if (0 === Bb.length) return this;
        this._pending += Bb, this._pendingChars += Bb.length;
        const Ob = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Ob && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const bb = this._encoder.encode(this._pending);
        return this._sink.push(bb), this.count += bb.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const hL = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      BL = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var OL, GL;
    ! function(bb) {
      bb.micron = "micron", bb.millimeter = "millimeter", bb.centimeter = "centimeter", bb.inch = "inch", bb.foot = "foot", bb.meter = "meter"
    }(OL || (OL = {})),
    function(bb) {
      bb.model = "model", bb.solidsupport = "solidsupport", bb.support = "support", bb.surface = "surface", bb.other = "other"
    }(GL || (GL = {}));
    const UL = "http://schemas.openxmlformats.org/package/2006/content-types",
      LL = "http://schemas.openxmlformats.org/package/2006/relationships";
    var YL;
    ! function(bb) {
      bb.Relationships = "application/vnd.openxmlformats-package.relationships+xml", bb.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", bb.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", bb.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", bb.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", bb.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", bb.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", bb.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", bb.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", bb.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", bb.Png = "image/png", bb.Jpeg = "image/jpeg", bb.Tiff = "image/tiff", bb.Xml = "application/xml"
    }(YL || (YL = {}));
    const SL = "_rels/",
      aL = "3D/",
      HL = "3dmodel.model",
      wL = ".rels",
      ZL = "[Content_Types].xml";
    class XL {
      static IsKnown(bb) {
        return XL.Known.has(bb)
      }
      static IsThreeDimModel(bb) {
        return bb === XL.ThreeDimModel
      }
    }
    XL.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", XL.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", XL.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", XL.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", XL.Known = new Set([XL.ThreeDimModel, XL.Thumbnail, XL.PrintTicket, XL.MustPreserve]);
    let pL = (() => {
        let bb, ub, hb = [iU({
            ns: UL,
            name: "Types"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfContentTypes"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      oL = (() => {
        let bb, ub, hb, Bb, Ob = [iU({
            ns: UL,
            name: "Default"
          })],
          Gb = [],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [];
        ub = class {
          constructor(bb, ub) {
            this.ext = (0, nb.k)(this, Ub, void 0), this.ct = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.ext = bb, this.ct = ub
          }
        };
        return (0, nb.n)(ub, "ThreeMfContentType"), (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: {
              ns: UL,
              name: "Extension"
            }
          })], Bb = [tU({
            name: {
              ns: UL,
              name: "ContentType"
            }
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: bb => "ext" in bb,
              get: bb => bb.ext,
              set: (bb, ub) => {
                bb.ext = ub
              }
            },
            metadata: ab
          }, Ub, Lb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: bb => "ct" in bb,
              get: bb => bb.ct,
              set: (bb, ub) => {
                bb.ct = ub
              }
            },
            metadata: ab
          }, Yb, Sb), (0, nb.h)(null, bb = {
            value: ub
          }, Ob, {
            kind: "class",
            name: ub.name,
            metadata: ab
          }, null, Gb), ub = bb.value, ab && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          }), (0, nb.k)(ub, Gb)
        })(), ub
      })(),
      AL = (() => {
        let bb, ub, hb = [iU({
            ns: LL,
            name: "Relationships"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfRelationships"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      lL = (() => {
        let bb, ub, hb, Bb, Ob, Gb = [iU({
            ns: LL,
            name: "Relationship"
          })],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        ub = class {
          constructor(bb, ub, hb) {
            this.id = (0, nb.k)(this, Lb, void 0), this.type = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.target = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), (0, nb.k)(this, wb), this.id = bb, this.type = ub, this.target = hb
          }
        };
        return (0, nb.n)(ub, "ThreeMfRelationship"), (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "Id"
          })], Bb = [tU({
            name: "Type"
          })], Ob = [tU({
            name: "Target"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ub) => {
                bb.id = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ub) => {
                bb.type = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: bb => "target" in bb,
              get: bb => bb.target,
              set: (bb, ub) => {
                bb.target = ub
              }
            },
            metadata: Zb
          }, Hb, wb), (0, nb.h)(null, bb = {
            value: ub
          }, Gb, {
            kind: "class",
            name: ub.name,
            metadata: Zb
          }, null, Ub), ub = bb.value, Zb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          }), (0, nb.k)(ub, Ub)
        })(), ub
      })();
    class KL {
      constructor(bb, ub, hb) {
        this.contentTypes = bb, this.relationships = ub, this.model = hb
      }
    }
    class WL {
      static Zero() {
        return new WL([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(bb) {
        this.values = bb
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class CL {
      constructor(bb) {
        this.o = bb, this._f = new yU(bb)
      }
      toString(bb) {
        return bb.values.map((bb => this._f.toString(bb))).join(" ")
      }
    }
    let dL = (() => {
        let bb, ub, hb, Bb, Ob, Gb = [iU({
            ns: hL,
            name: "model"
          })],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        ub = class {
          constructor() {
            this.unit = (0, nb.k)(this, Lb, OL.millimeter), this.requiredextensions = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.recommendedextensions = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.metadata = (0, nb.k)(this, wb)
          }
        };
        return (0, nb.n)(ub, "ThreeMfModel"), (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "unit"
          })], Bb = [tU({
            name: "requiredextensions"
          })], Ob = [tU({
            name: "recommendedextensions"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unit" in bb,
              get: bb => bb.unit,
              set: (bb, ub) => {
                bb.unit = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "requiredextensions" in bb,
              get: bb => bb.requiredextensions,
              set: (bb, ub) => {
                bb.requiredextensions = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "recommendedextensions" in bb,
              get: bb => bb.recommendedextensions,
              set: (bb, ub) => {
                bb.recommendedextensions = ub
              }
            },
            metadata: Zb
          }, Hb, wb), (0, nb.h)(null, bb = {
            value: ub
          }, Gb, {
            kind: "class",
            name: ub.name,
            metadata: Zb
          }, null, Ub), ub = bb.value, Zb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          })
        })(), ub.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, nb.k)(ub, Ub), ub
      })(),
      rL = (() => {
        let bb, ub, hb, Bb, Ob, Gb = [iU({
            ns: hL,
            name: "meta"
          })],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        ub = class {
          constructor(bb, ub, hb, Bb) {
            this.name = (0, nb.k)(this, Lb, void 0), this.preserve = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.type = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.value = (0, nb.k)(this, wb), this.name = bb, this.value = ub, this.preserve = hb, this.type = Bb
          }
        };
        return (0, nb.n)(ub, "ThreeMfMeta"), (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "name"
          })], Bb = [tU({
            name: "preserve"
          })], Ob = [tU({
            name: "type"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ub) => {
                bb.name = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: bb => "preserve" in bb,
              get: bb => bb.preserve,
              set: (bb, ub) => {
                bb.preserve = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ub) => {
                bb.type = ub
              }
            },
            metadata: Zb
          }, Hb, wb), (0, nb.h)(null, bb = {
            value: ub
          }, Gb, {
            kind: "class",
            name: ub.name,
            metadata: Zb
          }, null, Ub), ub = bb.value, Zb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          }), (0, nb.k)(ub, Ub)
        })(), ub
      })(),
      jL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "metadatagroup"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfMetadataGroup"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      nL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "resources"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.object = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfResources"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      DL = (() => {
        let bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb = [iU({
            ns: hL,
            name: "object"
          })],
          ab = [],
          Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [],
          Ab = [],
          lb = [],
          Kb = [],
          Wb = [],
          Cb = [],
          db = [],
          rb = [],
          jb = [];
        ub = class {
          constructor(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GL.model;
            this.id = (0, nb.k)(this, Hb, void 0), this.type = ((0, nb.k)(this, wb), (0, nb.k)(this, Zb, void 0)), this.thumbnail = ((0, nb.k)(this, Xb), (0, nb.k)(this, pb, void 0)), this.partnumber = ((0, nb.k)(this, ob), (0, nb.k)(this, Ab, void 0)), this.name = ((0, nb.k)(this, lb), (0, nb.k)(this, Kb, void 0)), this.pid = ((0, nb.k)(this, Wb), (0, nb.k)(this, Cb, void 0)), this.pindex = ((0, nb.k)(this, db), (0, nb.k)(this, rb, void 0)), this.metadatagroup = (0, nb.k)(this, jb), this.id = bb, this.type = ub
          }
        };
        return (0, nb.n)(ub, "ThreeMfObject"), (() => {
          const Db = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "id"
          })], Bb = [tU({
            name: "type"
          })], Ob = [tU({
            name: "thumbnail"
          })], Gb = [tU({
            name: "partnumber"
          })], Ub = [tU({
            name: "name"
          })], Lb = [tU({
            name: "pid"
          })], Yb = [tU({
            name: "pindex"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ub) => {
                bb.id = ub
              }
            },
            metadata: Db
          }, Hb, wb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ub) => {
                bb.type = ub
              }
            },
            metadata: Db
          }, Zb, Xb), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: bb => "thumbnail" in bb,
              get: bb => bb.thumbnail,
              set: (bb, ub) => {
                bb.thumbnail = ub
              }
            },
            metadata: Db
          }, pb, ob), (0, nb.h)(null, null, Gb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, ub) => {
                bb.partnumber = ub
              }
            },
            metadata: Db
          }, Ab, lb), (0, nb.h)(null, null, Ub, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ub) => {
                bb.name = ub
              }
            },
            metadata: Db
          }, Kb, Wb), (0, nb.h)(null, null, Lb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, ub) => {
                bb.pid = ub
              }
            },
            metadata: Db
          }, Cb, db), (0, nb.h)(null, null, Yb, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: bb => "pindex" in bb,
              get: bb => bb.pindex,
              set: (bb, ub) => {
                bb.pindex = ub
              }
            },
            metadata: Db
          }, rb, jb), (0, nb.h)(null, bb = {
            value: ub
          }, Sb, {
            kind: "class",
            name: ub.name,
            metadata: Db
          }, null, ab), ub = bb.value, Db && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Db
          }), (0, nb.k)(ub, ab)
        })(), ub
      })(),
      xL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "mesh"
          })],
          Bb = [];
        ub = class {
          constructor(bb, ub) {
            this.vertices = bb ?? new zL, this.triangles = ub ?? new iL
          }
        };
        return (0, nb.n)(ub, "ThreeMfMesh"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      zL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "vertices"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfVertices"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      gL = (() => {
        let bb, ub, hb, Bb, Ob, Gb = [iU({
            ns: hL,
            name: "vertex"
          })],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        ub = class {
          constructor() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, nb.k)(this, Lb, void 0), this.y = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.z = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), (0, nb.k)(this, wb), this.x = bb, this.y = ub, this.z = hb
          }
        };
        return (0, nb.n)(ub, "ThreeMfVertex"), (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "x"
          })], Bb = [tU({
            name: "y"
          })], Ob = [tU({
            name: "z"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: bb => "x" in bb,
              get: bb => bb.x,
              set: (bb, ub) => {
                bb.x = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: bb => "y" in bb,
              get: bb => bb.y,
              set: (bb, ub) => {
                bb.y = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: bb => "z" in bb,
              get: bb => bb.z,
              set: (bb, ub) => {
                bb.z = ub
              }
            },
            metadata: Zb
          }, Hb, wb), (0, nb.h)(null, bb = {
            value: ub
          }, Gb, {
            kind: "class",
            name: ub.name,
            metadata: Zb
          }, null, Ub), ub = bb.value, Zb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          }), (0, nb.k)(ub, Ub)
        })(), ub
      })(),
      iL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "triangles"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfTriangles"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      vL = (() => {
        let bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb = [iU({
            ns: hL,
            name: "triangle"
          })],
          ab = [],
          Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [],
          Ab = [],
          lb = [],
          Kb = [],
          Wb = [],
          Cb = [],
          db = [],
          rb = [],
          jb = [];
        ub = class {
          constructor(bb, ub, hb) {
            this.v1 = (0, nb.k)(this, Hb, void 0), this.v2 = ((0, nb.k)(this, wb), (0, nb.k)(this, Zb, void 0)), this.v3 = ((0, nb.k)(this, Xb), (0, nb.k)(this, pb, void 0)), this.p1 = ((0, nb.k)(this, ob), (0, nb.k)(this, Ab, void 0)), this.p2 = ((0, nb.k)(this, lb), (0, nb.k)(this, Kb, void 0)), this.p3 = ((0, nb.k)(this, Wb), (0, nb.k)(this, Cb, void 0)), this.pid = ((0, nb.k)(this, db), (0, nb.k)(this, rb, void 0)), (0, nb.k)(this, jb), this.v1 = bb, this.v2 = ub, this.v3 = hb
          }
        };
        return (0, nb.n)(ub, "ThreeMfTriangle"), (() => {
          const Db = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "v1"
          })], Bb = [tU({
            name: "v2"
          })], Ob = [tU({
            name: "v3"
          })], Gb = [tU({
            name: "p1"
          })], Ub = [tU({
            name: "p2"
          })], Lb = [tU({
            name: "p3"
          })], Yb = [tU({
            name: "pid"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: bb => "v1" in bb,
              get: bb => bb.v1,
              set: (bb, ub) => {
                bb.v1 = ub
              }
            },
            metadata: Db
          }, Hb, wb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: bb => "v2" in bb,
              get: bb => bb.v2,
              set: (bb, ub) => {
                bb.v2 = ub
              }
            },
            metadata: Db
          }, Zb, Xb), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: bb => "v3" in bb,
              get: bb => bb.v3,
              set: (bb, ub) => {
                bb.v3 = ub
              }
            },
            metadata: Db
          }, pb, ob), (0, nb.h)(null, null, Gb, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: bb => "p1" in bb,
              get: bb => bb.p1,
              set: (bb, ub) => {
                bb.p1 = ub
              }
            },
            metadata: Db
          }, Ab, lb), (0, nb.h)(null, null, Ub, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: bb => "p2" in bb,
              get: bb => bb.p2,
              set: (bb, ub) => {
                bb.p2 = ub
              }
            },
            metadata: Db
          }, Kb, Wb), (0, nb.h)(null, null, Lb, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: bb => "p3" in bb,
              get: bb => bb.p3,
              set: (bb, ub) => {
                bb.p3 = ub
              }
            },
            metadata: Db
          }, Cb, db), (0, nb.h)(null, null, Yb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, ub) => {
                bb.pid = ub
              }
            },
            metadata: Db
          }, rb, jb), (0, nb.h)(null, bb = {
            value: ub
          }, Sb, {
            kind: "class",
            name: ub.name,
            metadata: Db
          }, null, ab), ub = bb.value, Db && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Db
          }), (0, nb.k)(ub, ab)
        })(), ub
      })(),
      tL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "components"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.component = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfComponents"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      JL = (() => {
        let bb, ub, hb, Bb, Ob = [iU({
            ns: hL,
            name: "component"
          })],
          Gb = [],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [];
        ub = class {
          constructor(bb, ub) {
            this.objectid = (0, nb.k)(this, Ub, void 0), this.transform = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.objectid = bb, this.transform = ub
          }
        };
        return (0, nb.n)(ub, "ThreeMfComponent"), (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "objectid"
          })], Bb = [tU({
            name: "transform",
            formatter: CL
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, ub) => {
                bb.objectid = ub
              }
            },
            metadata: ab
          }, Ub, Lb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, ub) => {
                bb.transform = ub
              }
            },
            metadata: ab
          }, Yb, Sb), (0, nb.h)(null, bb = {
            value: ub
          }, Ob, {
            kind: "class",
            name: ub.name,
            metadata: ab
          }, null, Gb), ub = bb.value, ab && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          }), (0, nb.k)(ub, Gb)
        })(), ub
      })(),
      eL = (() => {
        let bb, ub, hb, Bb = [iU({
            ns: hL,
            name: "basematerials"
          })],
          Ob = [],
          Gb = [],
          Ub = [];
        ub = class {
          constructor(bb) {
            this.id = (0, nb.k)(this, Gb, void 0), this.base = ((0, nb.k)(this, Ub), []), this.id = bb
          }
        };
        return (0, nb.n)(ub, "ThreeMfBaseMaterials"), (() => {
          const Lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "id"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ub) => {
                bb.id = ub
              }
            },
            metadata: Lb
          }, Gb, Ub), (0, nb.h)(null, bb = {
            value: ub
          }, Bb, {
            kind: "class",
            name: ub.name,
            metadata: Lb
          }, null, Ob), ub = bb.value, Lb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Lb
          }), (0, nb.k)(ub, Ob)
        })(), ub
      })(),
      NL = (() => {
        let bb, ub, hb, Bb, Ob = [iU({
            ns: hL,
            name: "base"
          })],
          Gb = [],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [];
        ub = class {
          constructor(bb, ub) {
            this.name = (0, nb.k)(this, Ub, void 0), this.displaycolor = ((0, nb.k)(this, Lb), (0, nb.k)(this, Yb, void 0)), (0, nb.k)(this, Sb), this.name = bb, this.displaycolor = ub
          }
        };
        return (0, nb.n)(ub, "ThreeMfBase"), (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "name"
          })], Bb = [tU({
            name: "displaycolor"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ub) => {
                bb.name = ub
              }
            },
            metadata: ab
          }, Ub, Lb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: bb => "displaycolor" in bb,
              get: bb => bb.displaycolor,
              set: (bb, ub) => {
                bb.displaycolor = ub
              }
            },
            metadata: ab
          }, Yb, Sb), (0, nb.h)(null, bb = {
            value: ub
          }, Ob, {
            kind: "class",
            name: ub.name,
            metadata: ab
          }, null, Gb), ub = bb.value, ab && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          }), (0, nb.k)(ub, Gb)
        })(), ub
      })(),
      sL = (() => {
        let bb, ub, hb = [iU({
            ns: hL,
            name: "build"
          })],
          Bb = [];
        ub = class {
          constructor() {
            this.item = []
          }
        };
        return (0, nb.n)(ub, "ThreeMfBuild"), (() => {
          const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nb.h)(null, bb = {
            value: ub
          }, hb, {
            kind: "class",
            name: ub.name,
            metadata: Ob
          }, null, Bb), ub = bb.value, Ob && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ob
          }), (0, nb.k)(ub, Bb)
        })(), ub
      })(),
      ML = (() => {
        let bb, ub, hb, Bb, Ob, Gb = [iU({
            ns: hL,
            name: "item"
          })],
          Ub = [],
          Lb = [],
          Yb = [],
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        ub = class {
          constructor(bb, ub, hb) {
            this.objectid = (0, nb.k)(this, Lb, void 0), this.transform = ((0, nb.k)(this, Yb), (0, nb.k)(this, Sb, void 0)), this.partnumber = ((0, nb.k)(this, ab), (0, nb.k)(this, Hb, void 0)), this.metadatagroup = (0, nb.k)(this, wb), this.objectid = bb, this.transform = ub, this.partnumber = hb
          }
        };
        return (0, nb.n)(ub, "ThreeMfItem"), (() => {
          const Zb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          hb = [tU({
            name: "objectid"
          })], Bb = [tU({
            name: "transform",
            formatter: CL
          })], Ob = [tU({
            name: "partnumber"
          })], (0, nb.h)(null, null, hb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, ub) => {
                bb.objectid = ub
              }
            },
            metadata: Zb
          }, Lb, Yb), (0, nb.h)(null, null, Bb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, ub) => {
                bb.transform = ub
              }
            },
            metadata: Zb
          }, Sb, ab), (0, nb.h)(null, null, Ob, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, ub) => {
                bb.partnumber = ub
              }
            },
            metadata: Zb
          }, Hb, wb), (0, nb.h)(null, bb = {
            value: ub
          }, Gb, {
            kind: "class",
            name: ub.name,
            metadata: Zb
          }, null, Ub), ub = bb.value, Zb && Object.defineProperty(ub, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zb
          }), (0, nb.k)(ub, Ub)
        })(), ub
      })();
    class mL {
      constructor(bb, ub) {
        this._object = new DL(bb, ub)
      }
      withName(bb) {
        return this._object.name = bb, this
      }
      withThumbnail(bb) {
        return this._object.thumbnail = bb, this
      }
      withProperty(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = bb, this._object.id = ub, this
      }
      build() {
        return this._object
      }
      reset(bb, ub) {
        this._object = new DL(bb, ub)
      }
    }
    class IL extends mL {
      constructor(bb) {
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GL.model), this._object.content = new tL
      }
      withComponent(bb, ub) {
        return this._object.content.component.push(new JL(bb, ub)), this
      }
    }
    class PL extends mL {
      constructor(bb) {
        super(bb, GL.model)
      }
      withPostProcessHandlers(bb, ub) {
        return this._vh = bb, this._th = ub, this
      }
      withData(bb) {
        return this._object.content = this._buildMesh(bb), this
      }
      withMaterial(bb, ub) {
        return this._object.pid = bb, this._object.pindex = ub, this
      }
      _buildMesh(bb) {
        const ub = this._buildVertices(bb.positions),
          hb = this._buildTriangle(bb.indices);
        return new xL(ub, hb)
      }
      _buildVertices(bb) {
        const ub = new zL;
        if (bb)
          for (let hb = 0; hb < bb.length;) {
            const Bb = bb[hb++],
              Ob = bb[hb++],
              Gb = bb[hb++];
            let Ub = new gL(Bb, Ob, Gb);
            this._vh && (Ub = this._vh(Ub)), ub.vertex.push(Ub)
          }
        return ub
      }
      _buildTriangle(bb) {
        const ub = new iL;
        if (bb)
          for (let hb = 0; hb < bb.length;) {
            const Bb = bb[hb++],
              Ob = bb[hb++],
              Gb = bb[hb++];
            let Ub = new vL(Bb, Ob, Gb);
            this._th && (Ub = this._th(Ub)), ub.triangle.push(Ub)
          }
        return ub
      }
    }
    class qL {
      constructor(bb) {
        this._m = new eL(bb)
      }
      withColor(bb, ub) {
        this._m.base = this._m.base ?? [];
        let hb = this._m.base.find((ub => ub.name.toLowerCase() === bb.toLowerCase()));
        return hb ? (hb.displaycolor = this._rgbaToHex(ub), this) : (hb = new NL(bb, this._rgbaToHex(ub)), this._m.base.push(hb), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(bb) {
        const ub = bb => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(bb, 1 / 2.2)))),
          hb = ub(bb.r).toString(16).padStart(2, "0").toUpperCase(),
          Bb = ub(bb.g).toString(16).padStart(2, "0").toUpperCase(),
          Ob = ub(bb.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof bb.a) {
          return `#${hb}${Bb}${Ob}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${hb}${Bb}${Ob}`
      }
    }
    class EL {
      constructor() {
        this._model = new dL, this._objects = new Map
      }
      withMetaData(bb, ub, hb, Bb) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new rL(bb, ub, hb, Bb)), this
      }
      withMaterial(bb) {
        return bb instanceof qL && (bb = bb.build()), bb && (this._model.resources = this._model.resources ?? new nL, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(bb)), this
      }
      withMesh(bb) {
        return bb instanceof PL && (bb = bb.build()), this._model.resources = this._model.resources ?? new nL, this._model.resources.object.push(bb), this
      }
      withComponents(bb) {
        return bb instanceof IL && (bb = bb.build()), this._model.resources = this._model.resources ?? new nL, this._model.resources.object.push(bb), this
      }
      withBuild(bb, ub, hb) {
        return this._model.build = this._model.build ?? new sL, this._model.build.item?.push(new ML(bb, ub, hb)), this
      }
      withUnit(bb) {
        return this._model.unit = bb, this
      }
      reset() {
        return this._model = new dL, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    EL.KnownMetaSet = new Set(dL.KnownMeta.map((bb => bb.toLowerCase())));
    class yL {
      withContentType(bb) {
        this._cts || (this._cts = new pL);
        const ub = this._cts.items;
        return ub.some((ub => ub.ext === bb.ext && ub.ct === bb.ct)) || ub.push(bb), this
      }
      withRelationship(bb) {
        this._rs || (this._rs = new AL);
        const ub = this._rs.items;
        return ub.some((ub => ub.id === bb.id)) || ub.push(bb), this.withContentType(new oL("rels", YL.Relationships)), this
      }
      withModel(bb) {
        return bb instanceof EL && (bb = bb.build()), this._m = bb, this.withContentType(new oL("model", YL.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const bb = `${aL}${HL}`;
        if (!this._rs) {
          const ub = `/${bb}`;
          this.withRelationship(new lL("rel0", XL.ThreeDimModel, ub))
        }
        return new KL(this._cts, this._rs, this._m)
      }
    }
    class VL {
      constructor(bb) {
        this._o = bb
      }
      get options() {
        return this._o
      }
      async serializeAsync(bb) {
        const ub = await this.ensureZipLibReadyAsync();
        if (!ub) return;
        const hb = ub.Zip,
          Bb = ub.ZipDeflate;
        if (!hb || !Bb) throw new Error("fflate Zip / ZipDeflate not available");
        const Ob = function(bb, ub, hb) {
          const Ob = new Bb(ub, {
            level: 6
          });
          bb.add(Ob);
          const Gb = function(bb) {
              return {
                push: (ub, hb) => bb.push(ub, hb)
              }
            }(Ob),
            Ub = new uL(Gb),
            Lb = new RU(Ub).dec("1.0", "UTF-8");
          new TU(Lb).serialize(hb), Ub.finish()
        };
        for (var Gb = arguments.length, Ub = new Array(Gb > 1 ? Gb - 1 : 0), Lb = 1; Lb < Gb; Lb++) Ub[Lb - 1] = arguments[Lb];
        const Yb = this.toDocument(...Ub);
        if (!Yb) return;
        const Sb = new hb(bb);
        Ob(Sb, ZL, Yb.contentTypes), Ob(Sb, `${SL}${wL}`, Yb.relationships), Ob(Sb, `${aL}${HL}`, Yb.model), Sb.end()
      }
      toDocument() {
        const bb = (new EL).withUnit(this._o?.unit ?? OL.millimeter);
        if (this.options.metadata)
          for (const Ob in this.options.metadata) bb.withMetaData(Ob, this.options.metadata[Ob]);
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return (new yL).withModel(this.toModel(bb, ...hb)).build()
      }
    }
    class FL {
      static async SerializeToMemoryAsync(bb) {
        const ub = new Array;
        let hb = 0;
        for (var Bb = arguments.length, Ob = new Array(Bb > 1 ? Bb - 1 : 0), Gb = 1; Gb < Bb; Gb++) Ob[Gb - 1] = arguments[Gb];
        if (await bb.serializeAsync((function(bb, Bb, Ob) {
            ub.push(Bb), hb += Bb.length
          }), ...Ob), !hb) return;
        const Ub = new Uint8Array(hb);
        let Lb = 0;
        for (const Yb of ub) Ub.set(Yb, Lb), Lb += Yb.length;
        return Ub
      }
    }
    class fL {}
    fL.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class kL {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = bb, this._to = ub, this._step = hb, this._i = bb
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const bb = this._i;
        return this._i += this._step, bb
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class TL extends VL {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...TL.DefaultOptions,
          ...bb
        })
      }
      toModel(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        hb = hb.filter((bb => bb instanceof SB.b || bb instanceof Zb.d));
        const Ob = new kL,
          Gb = bb,
          Ub = new Map,
          Lb = this.options.exportInstances ? [] : null;
        for (let Yb = 0; Yb < hb.length; Yb++) {
          const bb = hb[Yb];
          if (bb instanceof Zb.d) {
            Lb?.push(bb);
            continue
          }
          const ub = bb.name || `mesh${Yb}`,
            Bb = bb.getWorldMatrix(),
            Sb = this._handleBabylonTo3mfMatrixTransformToRef(Bb, WL.Zero()),
            ab = bb.FW;
          if (void 0 === ab) continue;
          const Hb = 1 == ab.length;
          for (let hb = 0; hb < ab.length; hb++) {
            const Bb = ab[hb],
              Lb = this._extractSubMesh(bb, Bb);
            if (Lb) {
              const bb = Hb ? `${ub}` : `${ub}_${hb}`,
                Yb = new PL(Ob.next()).withData(Lb).withName(bb).build();
              Gb.withMesh(Yb), Gb.withBuild(Yb.id, Sb), Ub.set(Bb, Yb)
            }
          }
        }
        if (Lb && Lb.length) {
          const bb = this._groupBy(Lb, (bb => bb.LOb));
          for (const [ub, hb] of Array.from(bb.entries()))
            if (hb && hb.length)
              for (let bb = 0; bb < hb.length; bb++) {
                const Bb = hb[bb].getWorldMatrix(),
                  Ob = ub.FW;
                for (let bb = 0; bb < Ob.length; bb++) {
                  const ub = Ob[bb],
                    hb = Ub.get(ub);
                  hb && Gb.withBuild(hb.id, this._handleBabylonTo3mfMatrixTransformToRef(Bb, WL.Zero()))
                }
              }
        }
        return Gb.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const bb = globalThis;
          return bb.fflate || await Ob.Tools.LoadScriptAsync(fL.FFLATEUrl), bb.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(bb, ub) {
        const hb = bb.XBb();
        if (!hb) return;
        const Bb = bb.getVerticesData(TL._PositionKind);
        if (!Bb) return;
        if (0 == ub.indexStart && ub.indexCount == hb.length) return {
          positions: Bb,
          indices: hb
        };
        const Ob = ub.indexStart,
          Gb = new Map,
          Ub = [],
          Lb = new Uint32Array(ub.indexCount);
        for (let Yb = 0; Yb < ub.indexCount; Yb++) {
          const bb = hb[Ob + Yb];
          let ub = Gb.get(bb);
          if (void 0 === ub) {
            ub = Gb.size, Gb.set(bb, ub);
            const hb = 3 * bb;
            Ub.push(Bb[hb], Bb[hb + 1], Bb[hb + 2])
          }
          Lb[Yb] = ub
        }
        return {
          positions: new Float32Array(Ub),
          indices: Lb
        }
      }
      _groupBy(bb, ub) {
        const hb = new Map;
        for (const Bb of bb) {
          const bb = ub(Bb),
            Ob = hb.get(bb);
          Ob ? Ob.push(Bb) : hb.set(bb, [Bb])
        }
        return hb
      }
      _handleBabylonTo3mfMatrixTransformToRef(bb, ub) {
        const hb = bb.multiplyToRef(TL._R_BJS_TO_3MF, Mb.d.Zero()).m;
        return ub.values = [hb[0], hb[1], hb[2], hb[4], hb[5], hb[6], hb[8], hb[9], hb[10], hb[12], hb[13], hb[14]], ub
      }
    }
    TL.DefaultOptions = {
      unit: OL.meter,
      exportInstances: !1
    }, TL._PositionKind = "position", TL._R_BJS_TO_3MF = Mb.d.RotationX(Math.PI / 2).multiply(Mb.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);