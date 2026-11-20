export const id = 225;
export const ids = [225, 230];
export const modules = {
  41585: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(41519),
      lq = gq(39748);
    let Oq = !1;

    function mq() {
      Oq || (Oq = !0, lq.d.prototype._sphericalPolynomialTargetSize = 0, lq.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(lq.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Yq.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((qq => {
              this._texture._sphericalPolynomial = qq, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(qq) {
          this._texture && (this._texture._sphericalPolynomial = qq)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37286: (qq, Eq, gq) => {
    gq.d(Eq, {
      Color3: () => Yq.d,
      e: () => Yq.g
    });
    var Yq = gq(37289);
    (0, Yq.h)()
  },
  37758: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(37767);
    class lq {
      static GetPlanes(qq) {
        const Eq = [];
        for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
        return lq.GetPlanesToRef(qq, Eq), Eq
      }
      static GetNearPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
      }
      static GetFarPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
      }
      static GetLeftPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
      }
      static GetRightPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
      }
      static GetTopPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
      }
      static GetBottomPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
      }
      static GetPlanesToRef(qq, Eq) {
        lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
      }
      static IsPointInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; gq++)
          if (Eq[gq].dotCoordinate(qq) < 0) return !1;
        return !0
      }
    }
  },
  37767: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq, lq) {
        this.normal = new Yq.q(qq, Eq, gq), this.d = lq
      }
      bYq() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let qq = this.normal.getHashCode();
        return qq = 397 * qq ^ this.d, qq
      }
      normalize() {
        const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eq = 0;
        return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
      }
      transform(qq) {
        const Eq = lq._TmpMatrix;
        qq.invertToRef(Eq);
        const gq = Eq.m,
          Yq = this.normal.x,
          Oq = this.normal.y,
          mq = this.normal.z,
          xq = this.d,
          Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
          cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
          uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
          Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
        return new lq(Aq, cq, uq, Bq)
      }
      dotCoordinate(qq) {
        return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
      }
      copyFromPoints(qq, Eq, gq) {
        const Yq = Eq.x - qq.x,
          lq = Eq.y - qq.y,
          Oq = Eq.z - qq.z,
          mq = gq.x - qq.x,
          xq = gq.y - qq.y,
          Aq = gq.z - qq.z,
          cq = lq * Aq - Oq * xq,
          uq = Oq * mq - Yq * Aq,
          Bq = Yq * xq - lq * mq,
          Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
        let Nq;
        return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
      }
      isFrontFacingTo(qq, Eq) {
        return Yq.q.Dot(this.normal, qq) <= Eq
      }
      signedDistanceTo(qq) {
        return Yq.q.Dot(qq, this.normal) + this.d
      }
      static FromArray(qq) {
        return new lq(qq[0], qq[1], qq[2], qq[3])
      }
      static FromPoints(qq, Eq, gq) {
        const Yq = new lq(0, 0, 0, 0);
        return Yq.copyFromPoints(qq, Eq, gq), Yq
      }
      static FromPositionAndNormal(qq, Eq) {
        const gq = new lq(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(qq, Eq, gq)
      }
      static FromPositionAndNormalToRef(qq, Eq, gq) {
        return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
      }
      static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
        const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
        return Yq.q.Dot(gq, Eq) + lq
      }
    }
    lq._TmpMatrix = Yq.e.Identity()
  },
  37131: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Matrix: () => Yq.e,
      Quaternion: () => Yq.h,
      RegisterMathVector: () => Yq.l,
      TmpVectors: () => Yq.o,
      Vector2: () => Yq.p,
      Na: () => Yq.q,
      Vector4: () => Yq.r
    });
    var Yq = gq(37139);
    (0, Yq.l)()
  },
  38065: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq, Yq) {
        this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
      }
      toGlobal(qq, Eq) {
        return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
      }
      toGlobalToRef(qq, Eq, gq) {
        return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
      }
      clone() {
        return new Yq(this.x, this.y, this.width, this.height)
      }
    }
  },
  41519: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq
    });
    var Yq = gq(37139),
      lq = gq(37158),
      Oq = gq(39741),
      mq = gq(37145),
      xq = gq(37289);
    class Aq {
      constructor(qq, Eq, gq, Yq) {
        this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
      }
    }
    class cq {
      static _NearestPow2Floor(qq) {
        return qq <= 1 ? 1 : 1 << Math.floor(Math.log2(qq))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(qq) {
        if (!qq.isCube) return null;
        qq.ZJ()?.Ba().flushFramebuffer();
        const Eq = qq.getSize().width,
          gq = qq._sphericalPolynomialTargetSize,
          Yq = gq > 0 ? this._NearestPow2Floor(gq) : 0,
          lq = !qq.noMipmap && !0 === qq._texture?.generateMipMaps,
          Oq = Yq > 0 && Yq < Eq && lq,
          mq = Oq ? Math.max(0, Math.round(Math.log2(Eq / Yq))) : 0,
          xq = Oq ? Math.max(1, Math.floor(Eq / Math.pow(2, mq))) : Eq,
          Aq = qq.readPixels(0, mq, void 0, !1),
          cq = qq.readPixels(1, mq, void 0, !1);
        let uq, Bq;
        qq.isRenderTarget ? (uq = qq.readPixels(3, mq, void 0, !1), Bq = qq.readPixels(2, mq, void 0, !1)) : (uq = qq.readPixels(2, mq, void 0, !1), Bq = qq.readPixels(3, mq, void 0, !1));
        const Wq = qq.readPixels(4, mq, void 0, !1),
          Nq = qq.readPixels(5, mq, void 0, !1),
          aq = qq.gammaSpace,
          Vq = Yq > 0 && Yq < Eq && !Oq;
        return new Promise((qq => {
          Promise.all([cq, Aq, uq, Bq, Wq, Nq]).then((gq => {
            let [lq, Oq, mq, Aq, cq, uq] = gq, Bq = xq;
            if (Vq) {
              const qq = 4;
              lq = this._DownsampleFace(lq, Eq, Yq, qq), Oq = this._DownsampleFace(Oq, Eq, Yq, qq), mq = this._DownsampleFace(mq, Eq, Yq, qq), Aq = this._DownsampleFace(Aq, Eq, Yq, qq), cq = this._DownsampleFace(cq, Eq, Yq, qq), uq = this._DownsampleFace(uq, Eq, Yq, qq), Bq = Yq
            }
            const Wq = {
              size: Bq,
              right: Oq,
              left: lq,
              up: mq,
              down: Aq,
              front: cq,
              back: uq,
              format: 5,
              type: lq instanceof Float32Array ? 1 : 0,
              gammaSpace: aq
            };
            qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
          }))
        }))
      }
      static _AreaElement(qq, Eq) {
        return Math.atan2(qq * Eq, Math.sqrt(qq * qq + Eq * Eq + 1))
      }
      static _DownsampleFace(qq, Eq, gq, Yq) {
        const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
          Oq = gq * gq * Yq,
          mq = new Float32Array(Oq),
          xq = Eq / gq,
          Aq = 1 / (xq * xq);
        for (let uq = 0; uq < gq; uq++) {
          const qq = Math.floor(uq * xq),
            Oq = Math.floor((uq + 1) * xq);
          for (let cq = 0; cq < gq; cq++) {
            const Bq = Math.floor(cq * xq),
              Wq = Math.floor((cq + 1) * xq),
              Nq = (uq * gq + cq) * Yq;
            for (let gq = 0; gq < Yq; gq++) {
              let xq = 0;
              for (let mq = qq; mq < Oq; mq++)
                for (let qq = Bq; qq < Wq; qq++) xq += lq[(mq * Eq + qq) * Yq + gq];
              mq[Nq + gq] = xq * Aq
            }
          }
        }
        if (qq instanceof Float32Array) return mq;
        const cq = new(0, qq.constructor)(Oq);
        for (let uq = 0; uq < Oq; uq++) cq[uq] = mq[uq] + .5 | 0;
        return cq
      }
      static ConvertCubeMapToSphericalPolynomial(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
        if (gq > 0 && qq.size > gq) {
          const Eq = 5 === qq.format ? 4 : 3,
            Yq = ["right", "left", "up", "down", "front", "back"],
            lq = {};
          for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
          qq = {
            ...qq,
            ...lq,
            size: gq
          }
        }
        const Yq = new Oq.c;
        let Aq = 0;
        const cq = 2 / qq.size,
          uq = cq,
          Bq = .5 * cq,
          Wq = Bq - 1;
        for (let Oq = 0; Oq < 6; Oq++) {
          const Eq = this._FileFaces[Oq],
            gq = qq[Eq.name];
          let Nq = Wq;
          const aq = 5 === qq.format ? 4 : 3;
          for (let Oq = 0; Oq < qq.size; Oq++) {
            let Vq = Wq;
            for (let uq = 0; uq < qq.size; uq++) {
              const Wq = Eq.worldAxisForFileX.scale(Vq).add(Eq.worldAxisForFileY.scale(Nq)).add(Eq.worldAxisForNormal);
              Wq.normalize();
              const dq = this._AreaElement(Vq - Bq, Nq - Bq) - this._AreaElement(Vq - Bq, Nq + Bq) - this._AreaElement(Vq + Bq, Nq - Bq) + this._AreaElement(Vq + Bq, Nq + Bq);
              let jq = gq[Oq * qq.size * aq + uq * aq + 0],
                Hq = gq[Oq * qq.size * aq + uq * aq + 1],
                oq = gq[Oq * qq.size * aq + uq * aq + 2];
              isNaN(jq) && (jq = 0), isNaN(Hq) && (Hq = 0), isNaN(oq) && (oq = 0), 0 === qq.type && (jq /= 255, Hq /= 255, oq /= 255), qq.gammaSpace && (jq = Math.pow((0, lq.Clamp)(jq), mq.h), Hq = Math.pow((0, lq.Clamp)(Hq), mq.h), oq = Math.pow((0, lq.Clamp)(oq), mq.h));
              const Pq = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const qq = Math.max(jq, Hq, oq);
                if (qq > Pq) {
                  const Eq = Pq / qq;
                  jq *= Eq, Hq *= Eq, oq *= Eq
                }
              } else jq = (0, lq.Clamp)(jq, 0, Pq), Hq = (0, lq.Clamp)(Hq, 0, Pq), oq = (0, lq.Clamp)(oq, 0, Pq);
              const Qq = new xq.d(jq, Hq, oq);
              Yq.addLight(Wq, Qq, dq), Aq += dq, Vq += cq
            }
            Nq += uq
          }
        }
        const Nq = 6 * (4 * Math.PI) / 6 / Aq;
        return Yq.scaleInPlace(Nq), Yq.convertIncidentRadianceToIrradiance(), Yq.convertIrradianceToLambertianRadiance(), Oq.d.FromHarmonics(Yq)
      }
    }
    cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, -1)), new Aq("front", new Yq.q(0, 0, 1), new Yq.q(1, 0, 0), new Yq.q(0, -1, 0)), new Aq("back", new Yq.q(0, 0, -1), new Yq.q(-1, 0, 0), new Yq.q(0, -1, 0))], cq.MAX_HDRI_VALUE = 4096, cq.PRESERVE_CLAMPED_COLORS = !1
  },
  41299: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.m,
      f: () => Yq.x
    });
    var Yq = gq(39799);
    (0, Yq.D)()
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  41557: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(41551),
      lq = gq(41561);
    class Oq {
      static ExpandRGBDTexture(qq) {
        const Eq = qq._texture;
        if (!Eq || !qq.isRGBD) return;
        const lq = Eq.Ba(),
          Oq = lq.getCaps(),
          mq = Eq.isReady;
        let xq = !1;
        Oq.textureHalfFloatRender && Oq.textureHalfFloatLinearFiltering ? (xq = !0, Eq.type = 2) : Oq.textureFloatRender && Oq.textureFloatLinearFiltering && (xq = !0, Eq.type = 1), xq && (Eq.isReady = !1, Eq._isRGBD = !1, Eq.invertY = !1);
        const Aq = async () => {
          const Oq = lq.isWebGPU,
            mq = Oq ? 1 : 0;
          Eq.isReady = !1, Oq ? await gq.e(333).then((() => gq(61357))) : await gq.e(315).then((() => gq(61365)));
          const xq = new Yq.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lq, !1, void 0, Eq.type, void 0, null, !1, void 0, mq);
          xq.externalTextureSamplerBinding = !0;
          const Aq = lq.createRenderTargetTexture(Eq.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Eq.samplingMode,
            type: Eq.type,
            format: 5
          });
          xq.onEffectCreatedObservable.addOnce((gq => {
            gq.executeWhenCompiled((() => {
              xq.onApply = qq => {
                qq._bindTexture("textureSampler", Eq), qq.setFloat2("scale", 1, 1)
              }, qq.ZJ()?.postProcessManager.directRender([xq], Aq, !0), lq.restoreDefaultFramebuffer(), lq._releaseTexture(Eq), xq && xq.dispose(), Aq._swapAndDie(Eq), Eq.isReady = !0
            }))
          }))
        };
        xq && (mq ? Aq() : qq.onLoadObservable.addOnce(Aq))
      }
      static async EncodeTextureToRGBD(qq, Eq) {
        let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Eq.Ba().isWebGPU ? await gq.e(334).then((() => gq(61384))) : await gq.e(316).then((() => gq(61377))), await (0, lq.c)("rgbdEncode", qq, Eq, Yq, 1, 5)
      }
    }
  },
  61112: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AsyncLoop: () => Yq.b,
      RegisterTools: () => Yq.e,
      Tools: () => Yq.f,
      className: () => Yq.h
    });
    var Yq = gq(39845);
    (0, Yq.e)()
  },
  41607: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    class Yq {
      constructor(qq) {
        this._pendingActions = new Array, this._workerInfos = qq.map((qq => ({
          workerPromise: Promise.resolve(qq),
          idle: !0
        })))
      }
      dispose() {
        for (const qq of this._workerInfos) qq.workerPromise.then((qq => {
          qq.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(qq) {
        this._executeOnIdleWorker(qq) || this._pendingActions.push(qq)
      }
      _executeOnIdleWorker(qq) {
        for (const Eq of this._workerInfos)
          if (Eq.idle) return this._execute(Eq, qq), !0;
        return !1
      }
      _execute(qq, Eq) {
        qq.idle = !1, qq.workerPromise.then((gq => {
          Eq(gq, (() => {
            const Eq = this._pendingActions.shift();
            Eq ? this._execute(qq, Eq) : qq.idle = !0
          }))
        }))
      }
    }
    class lq extends Yq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.DefaultOptions;
        super([]), this._maxWorkers = qq, this._createWorkerAsync = Eq, this._options = gq
      }
      push(qq) {
        if (!this._executeOnIdleWorker(qq))
          if (this._workerInfos.length < this._maxWorkers) {
            const Eq = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Eq), this._execute(Eq, qq)
          } else this._pendingActions.push(qq)
      }
      _execute(qq, Eq) {
        qq.timeoutId && (clearTimeout(qq.timeoutId), delete qq.timeoutId), super._execute(qq, ((gq, Yq) => {
          Eq(gq, (() => {
            Yq(), qq.idle && (qq.timeoutId = setTimeout((() => {
              qq.workerPromise.then((qq => {
                qq.terminate()
              }));
              const Eq = this._workerInfos.indexOf(qq); - 1 !== Eq && this._workerInfos.splice(Eq, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    lq.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61146: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AbstractThreeMfSerializer: () => Xx,
      BVHExporter: () => hm,
      ContentTypeFileName: () => ax,
      DefaultXmlSerializerFormatOptions: () => Rm,
      DefaultXmlSerializerNumberOptions: () => km,
      EXT_lights_area: () => dl,
      EXT_mesh_gpu_instancing: () => GY,
      EXT_texture_avif: () => lm,
      EXT_texture_webp: () => qm,
      GLTF2Export: () => zY,
      GLTFData: () => cq,
      GetXmlFieldMeta: () => Sm,
      GetXmlName: () => pm,
      IsQualifiedName: () => nm,
      KHR_draco_mesh_compression: () => IY,
      KHR_interactivity: () => cl,
      KHR_lights_punctual: () => Ol,
      KHR_materials_anisotropy: () => Pl,
      KHR_materials_clearcoat: () => vl,
      KHR_materials_coat: () => fl,
      KHR_materials_diffuse_roughness: () => SO,
      KHR_materials_diffuse_transmission: () => Gl,
      KHR_materials_dispersion: () => Rl,
      KHR_materials_emissive_strength: () => Xl,
      KHR_materials_fuzz: () => uO,
      KHR_materials_ior: () => Il,
      KHR_materials_iridescence: () => EO,
      KHR_materials_openpbr: () => JO,
      KHR_materials_sheen: () => OO,
      KHR_materials_specular: () => aO,
      KHR_materials_transmission: () => HO,
      KHR_materials_unlit: () => tO,
      KHR_materials_volume: () => nO,
      KHR_materials_volume_scatter: () => fO,
      KHR_texture_basisu: () => CO,
      KHR_texture_transform: () => FO,
      Known3mfRelationshipTypes: () => Vx,
      KnownI3mfContentType: () => cx,
      Matrix3d: () => Qx,
      MatrixFormatter: () => yx,
      ModelFileName: () => Wx,
      NumberFormatter: () => sm,
      OBJExport: () => mq,
      Object3dDirName: () => Bx,
      OpenXmlContentTypesNamespace: () => xx,
      OpenXmlRelationshipsNamespace: () => Ax,
      RegisterEXT_lights_area: () => Hl,
      RegisterEXT_mesh_gpu_instancing: () => JY,
      RegisterEXT_texture_avif: () => mm,
      RegisterEXT_texture_webp: () => gm,
      RegisterKHR_draco_mesh_compression: () => DY,
      RegisterKHR_interactivity: () => Bl,
      RegisterKHR_lights_punctual: () => xl,
      RegisterKHR_materials_anisotropy: () => yl,
      RegisterKHR_materials_clearcoat: () => nl,
      RegisterKHR_materials_coat: () => Tl,
      RegisterKHR_materials_diffuse_roughness: () => GO,
      RegisterKHR_materials_diffuse_transmission: () => Jl,
      RegisterKHR_materials_dispersion: () => Fl,
      RegisterKHR_materials_emissive_strength: () => Kl,
      RegisterKHR_materials_fuzz: () => WO,
      RegisterKHR_materials_ior: () => Dl,
      RegisterKHR_materials_iridescence: () => YO,
      RegisterKHR_materials_openpbr: () => RO,
      RegisterKHR_materials_sheen: () => xO,
      RegisterKHR_materials_specular: () => dO,
      RegisterKHR_materials_transmission: () => PO,
      RegisterKHR_materials_unlit: () => vO,
      RegisterKHR_materials_volume: () => iO,
      RegisterKHR_materials_volume_scatter: () => TO,
      RegisterKHR_texture_basisu: () => eO,
      RegisterKHR_texture_transform: () => XO,
      RelationshipDirName: () => ux,
      RelationshipFileName: () => Nx,
      ResolveFormatOptions: () => Fm,
      ResolveNumberOptions: () => Um,
      STLExport: () => xm,
      ST_ObjectType: () => mx,
      ST_Unit: () => Ox,
      StringXmlWriter: () => Ex,
      ThreeDimModelNamespace: () => Yx,
      ThreeMf: () => wx,
      ThreeMfBase: () => px,
      ThreeMfBaseMaterials: () => Sx,
      ThreeMfBuild: () => Gx,
      ThreeMfComponent: () => zx,
      ThreeMfComponents: () => Tx,
      ThreeMfComponentsBuilder: () => kx,
      ThreeMfContentType: () => jx,
      ThreeMfContentTypes: () => dx,
      ThreeMfDocument: () => Px,
      ThreeMfDocumentBuilder: () => sx,
      ThreeMfItem: () => Lx,
      ThreeMfMaterialBuilder: () => Ux,
      ThreeMfMesh: () => bx,
      ThreeMfMeshBuilder: () => Rx,
      ThreeMfMeta: () => rx,
      ThreeMfMetadataGroup: () => vx,
      ThreeMfModel: () => tx,
      ThreeMfModelBuilder: () => Fx,
      ThreeMfObject: () => nx,
      ThreeMfObjectBuilder: () => Jx,
      ThreeMfRelationship: () => ox,
      ThreeMfRelationships: () => Hx,
      ThreeMfResources: () => hx,
      ThreeMfSerializer: () => Ix,
      ThreeMfSerializerGlobalConfiguration: () => Kx,
      ThreeMfTriangle: () => Mx,
      ThreeMfTriangles: () => fx,
      ThreeMfVertex: () => Zx,
      ThreeMfVertices: () => ix,
      ToQualifiedString: () => Jm,
      TokenType: () => Dm,
      TriangleSetsNamespace: () => lx,
      USDZExportAsync: () => tm,
      Utf8XmlWriterToBytes: () => gx,
      XmlAttr: () => Tm,
      XmlBuilder: () => qx,
      XmlElem: () => zm,
      XmlIgnore: () => Mm,
      XmlName: () => fm,
      XmlNameToParts: () => Lm,
      XmlSerializer: () => Im,
      _ConvertToGLTFPBRMetallicRoughness: () => vg,
      _SolveMetallic: () => rg,
      __IGLTFExporterExtension: () => xq
    });
    var Yq = gq(37131),
      lq = gq(61112),
      Oq = gq(40037);
    class mq {
      static OBJ(qq, Eq, gq, mq) {
        const xq = [];
        let Aq = 1,
          cq = 1;
        Eq && (gq || (gq = "mat"), xq.push("mtllib " + gq + ".mtl"));
        for (let uq = 0; uq < qq.length; uq++) {
          const gq = qq[uq],
            Bq = gq.name || `mesh${uq}}`;
          xq.push(`o ${Bq}`);
          let Wq = null;
          if (mq) {
            const qq = gq.computeWorldMatrix(!0);
            Wq = new Yq.Matrix, qq.invertToRef(Wq), gq.bakeTransformIntoVertices(qq)
          }
          if (Eq) {
            const qq = gq.material;
            qq && xq.push("usemtl " + qq.id)
          }
          const Nq = gq.geometry;
          if (!Nq) {
            lq.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const aq = Nq.getVerticesData("position"),
            Vq = Nq.getVerticesData("normal"),
            dq = Nq.getVerticesData("uv"),
            jq = Nq.iYq();
          let Hq = 0,
            oq = 0;
          if (!aq || !jq) {
            lq.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Pq = qq[0].ZJ().useRightHandedSystem ? 1 : -1;
          for (let qq = 0; qq < aq.length; qq += 3) xq.push("v " + aq[qq] * Pq + " " + aq[qq + 1] + " " + aq[qq + 2]), Hq++;
          if (null != Vq)
            for (let qq = 0; qq < Vq.length; qq += 3) xq.push("vn " + Vq[qq] * Pq + " " + Vq[qq + 1] + " " + Vq[qq + 2]);
          if (null != dq)
            for (let qq = 0; qq < dq.length; qq += 2) xq.push("vt " + dq[qq] + " " + dq[qq + 1]), oq++;
          const Qq = ["", "", ""],
            yq = (gq.material || gq.ZJ().defaultMaterial)._getEffectiveOrientation(gq),
            [tq, rq] = yq === Oq.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let qq = 0; qq < jq.length; qq += 3) {
            const Eq = [String(jq[qq] + Aq), String(jq[qq + tq] + Aq), String(jq[qq + rq] + Aq)],
              gq = [String(jq[qq] + cq), String(jq[qq + tq] + cq), String(jq[qq + rq] + cq)],
              Yq = Eq,
              lq = null != dq ? gq : Qq,
              Oq = null != Vq ? Eq : Qq;
            xq.push("f " + Yq[0] + "/" + lq[0] + "/" + Oq[0] + " " + Yq[1] + "/" + lq[1] + "/" + Oq[1] + " " + Yq[2] + "/" + lq[2] + "/" + Oq[2])
          }
          mq && Wq && gq.bakeTransformIntoVertices(Wq), Aq += Hq, cq += oq
        }
        return xq.join("\n")
      }
      static MTL(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const gq = [],
          Yq = qq.material;
        gq.push("newmtl " + Eq), gq.push("  Ns " + Yq.specularPower.toFixed(4)), gq.push("  Ni 1.5000"), gq.push("  d " + Yq.alpha.toFixed(4)), gq.push("  Tr 0.0000"), gq.push("  Tf 1.0000 1.0000 1.0000"), gq.push("  illum 2"), gq.push("  Ka " + Yq.ambientColor.r.toFixed(4) + " " + Yq.ambientColor.g.toFixed(4) + " " + Yq.ambientColor.b.toFixed(4)), gq.push("  Kd " + Yq.diffuseColor.r.toFixed(4) + " " + Yq.diffuseColor.g.toFixed(4) + " " + Yq.diffuseColor.b.toFixed(4)), gq.push("  Ks " + Yq.specularColor.r.toFixed(4) + " " + Yq.specularColor.g.toFixed(4) + " " + Yq.specularColor.b.toFixed(4)), gq.push("  Ke " + Yq.emissiveColor.r.toFixed(4) + " " + Yq.emissiveColor.g.toFixed(4) + " " + Yq.emissiveColor.b.toFixed(4));
        Yq.ambientTexture && gq.push("  map_Ka " + Yq.ambientTexture.name), Yq.diffuseTexture && gq.push("  map_Kd " + Yq.diffuseTexture.name), Yq.specularTexture && gq.push("  map_Ks " + Yq.specularTexture.name), Yq.bumpTexture && gq.push("  map_bump -imfchan z " + Yq.bumpTexture.name), Yq.opacityTexture && gq.push("  map_d " + Yq.opacityTexture.name);
        return gq.join("\n")
      }
    }
    var xq = 0,
      Aq = gq(41299);
    class cq {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const qq in this.files) {
          const Eq = this.files[qq],
            gq = new Blob([Eq], {
              type: (0, Aq.d)(qq)
            });
          lq.Tools.Download(gq, qq)
        }
      }
    }
    var uq = gq(40901),
      Bq = gq(40857),
      Wq = gq(41377),
      Nq = gq(40860),
      aq = gq(39585),
      Vq = gq(37153),
      dq = gq(37286),
      jq = gq(37158);
    const Hq = jq.HighestCommonFactor,
      oq = {
        ...jq,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Hq
      };
    var Pq = gq(41561),
      Qq = gq(40883),
      yq = gq(41340),
      tq = gq(41347),
      rq = gq(41581);
    (0, rq.RegisterDumpTools)();
    var vq = gq(39757),
      hq = gq(39759),
      nq = gq(38653),
      bq = gq(39858),
      iq = gq(40233),
      Zq = gq(41557);
    let fq = 0;
    const Mq = (qq, Eq, gq, Yq) => {
        if (!qq[gq]) {
          const lq = qq.useDelayedTextureLoading;
          qq.useDelayedTextureLoading = !1;
          const Oq = qq._blockEntityCollection;
          qq._blockEntityCollection = !1;
          const mq = iq.d.CreateFromBase64String(Eq, Yq + fq++, qq, !0, !1, iq.d.BILINEAR_SAMPLINGMODE);
          qq._blockEntityCollection = Oq;
          const xq = qq.Ba().getLoadedTexturesCache(),
            Aq = xq.indexOf(mq.getInternalTexture()); - 1 !== Aq && xq.splice(Aq, 1), mq.isRGBD = !0, mq.wrapU = iq.d.CLAMP_ADDRESSMODE, mq.wrapV = iq.d.CLAMP_ADDRESSMODE, qq[gq] = mq, qq.useDelayedTextureLoading = lq, Zq.d.ExpandRGBDTexture(mq);
          const cq = qq.Ba().onContextRestoredObservable.add((() => {
            mq.isRGBD = !0;
            const Eq = qq.onBeforeRenderObservable.add((() => {
              mq.isReady() && (qq.onBeforeRenderObservable.remove(Eq), Zq.d.ExpandRGBDTexture(mq))
            }))
          }));
          qq.MJ.add((() => {
            qq.Ba().onContextRestoredObservable.remove(cq)
          }))
        }
        return qq[gq]
      },
      Tq = qq => Mq(qq, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      zq = qq => Mq(qq, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Sq = qq => Mq(qq, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var pq = gq(39838),
      Gq = gq(37139),
      Lq = gq(39879),
      Jq = gq(40033),
      kq = gq(40113);
    class Rq extends Jq.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Uq = (() => {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
      let uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq = kq.c,
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [];
      return qq = class extends oq {
        get useEnergyConservation() {
          return (0, vq.b)(this, Eq, "f")
        }
        set useEnergyConservation(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, vq.b)(this, gq, "f")
        }
        set useSmithVisibilityHeightCorrelated(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get useSphericalHarmonics() {
          return (0, vq.b)(this, Yq, "f")
        }
        set useSphericalHarmonics(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, vq.b)(this, lq, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(qq) {
          (0, vq.e)(this, lq, qq, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, vq.b)(this, Oq, "f")
        }
        set mixIblRadianceWithIrradiance(qq) {
          (0, vq.e)(this, Oq, qq, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, vq.b)(this, mq, "f")
        }
        set useLegacySpecularEnergyConservation(qq) {
          (0, vq.e)(this, mq, qq, "f")
        }
        get baseDiffuseModel() {
          return (0, vq.b)(this, xq, "f")
        }
        set baseDiffuseModel(qq) {
          (0, vq.e)(this, xq, qq, "f")
        }
        get dielectricSpecularModel() {
          return (0, vq.b)(this, Aq, "f")
        }
        set dielectricSpecularModel(qq) {
          (0, vq.e)(this, Aq, qq, "f")
        }
        get conductorSpecularModel() {
          return (0, vq.b)(this, cq, "f")
        }
        set conductorSpecularModel(qq) {
          (0, vq.e)(this, cq, qq, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uq) {
          let Bq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uq, "PBRBRDF", 90, new Rq, Bq), this._useEnergyConservation = qq.DEFAULT_USE_ENERGY_CONSERVATION, Eq.set(this, (0, vq.i)(this, Pq, qq.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, vq.i)(this, Qq), qq.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), gq.set(this, (0, vq.i)(this, yq, qq.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, vq.i)(this, tq), qq.DEFAULT_USE_SPHERICAL_HARMONICS), Yq.set(this, (0, vq.i)(this, rq, qq.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, vq.i)(this, nq), qq.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), lq.set(this, (0, vq.i)(this, bq, qq.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, vq.i)(this, iq), qq.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Oq.set(this, (0, vq.i)(this, Zq, qq.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, vq.i)(this, fq), qq.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), mq.set(this, (0, vq.i)(this, Mq, qq.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, vq.i)(this, Tq), qq.DEFAULT_DIFFUSE_MODEL), xq.set(this, (0, vq.i)(this, zq, qq.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, vq.i)(this, Sq), qq.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Aq.set(this, (0, vq.i)(this, pq, qq.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, vq.i)(this, Gq), qq.DEFAULT_CONDUCTOR_SPECULAR_MODEL), cq.set(this, (0, vq.i)(this, Lq, qq.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, vq.i)(this, Jq), this._internalMarkAllSubMeshesAsMiscDirty = uq._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(qq) {
          qq.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, qq.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, qq.SPHERICAL_HARMONICS = this._useSphericalHarmonics, qq.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, qq.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, qq.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, qq.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, qq.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, qq.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, Oq = new WeakMap, mq = new WeakMap, xq = new WeakMap, Aq = new WeakMap, cq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(oq[Symbol.metadata] ?? null) : void 0;
        uq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Bq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Wq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Nq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], aq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Vq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], dq = [(0, hq.M)("baseDiffuseModel"), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], jq = [(0, hq.M)("dielectricSpecularModel"), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Hq = [(0, hq.M)("conductorSpecularModel"), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], (0, vq.f)(qq, null, uq, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: qq => "useEnergyConservation" in qq,
            get: qq => qq.useEnergyConservation,
            set: (qq, Eq) => {
              qq.useEnergyConservation = Eq
            }
          },
          metadata: Eq
        }, Pq, Qq), (0, vq.f)(qq, null, Bq, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: qq => "useSmithVisibilityHeightCorrelated" in qq,
            get: qq => qq.useSmithVisibilityHeightCorrelated,
            set: (qq, Eq) => {
              qq.useSmithVisibilityHeightCorrelated = Eq
            }
          },
          metadata: Eq
        }, yq, tq), (0, vq.f)(qq, null, Wq, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: qq => "useSphericalHarmonics" in qq,
            get: qq => qq.useSphericalHarmonics,
            set: (qq, Eq) => {
              qq.useSphericalHarmonics = Eq
            }
          },
          metadata: Eq
        }, rq, nq), (0, vq.f)(qq, null, Nq, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: qq => "useSpecularGlossinessInputEnergyConservation" in qq,
            get: qq => qq.useSpecularGlossinessInputEnergyConservation,
            set: (qq, Eq) => {
              qq.useSpecularGlossinessInputEnergyConservation = Eq
            }
          },
          metadata: Eq
        }, bq, iq), (0, vq.f)(qq, null, aq, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: qq => "mixIblRadianceWithIrradiance" in qq,
            get: qq => qq.mixIblRadianceWithIrradiance,
            set: (qq, Eq) => {
              qq.mixIblRadianceWithIrradiance = Eq
            }
          },
          metadata: Eq
        }, Zq, fq), (0, vq.f)(qq, null, Vq, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: qq => "useLegacySpecularEnergyConservation" in qq,
            get: qq => qq.useLegacySpecularEnergyConservation,
            set: (qq, Eq) => {
              qq.useLegacySpecularEnergyConservation = Eq
            }
          },
          metadata: Eq
        }, Mq, Tq), (0, vq.f)(qq, null, dq, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: qq => "baseDiffuseModel" in qq,
            get: qq => qq.baseDiffuseModel,
            set: (qq, Eq) => {
              qq.baseDiffuseModel = Eq
            }
          },
          metadata: Eq
        }, zq, Sq), (0, vq.f)(qq, null, jq, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: qq => "dielectricSpecularModel" in qq,
            get: qq => qq.dielectricSpecularModel,
            set: (qq, Eq) => {
              qq.dielectricSpecularModel = Eq
            }
          },
          metadata: Eq
        }, pq, Gq), (0, vq.f)(qq, null, Hq, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: qq => "conductorSpecularModel" in qq,
            get: qq => qq.conductorSpecularModel,
            set: (qq, Eq) => {
              qq.conductorSpecularModel = Eq
            }
          },
          metadata: Eq
        }, Lq, Jq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq.DEFAULT_USE_ENERGY_CONSERVATION = !0, qq.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, qq.DEFAULT_USE_SPHERICAL_HARMONICS = !0, qq.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, qq.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, qq.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, qq.DEFAULT_DIFFUSE_MODEL = 0, qq.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, qq.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, qq
    })();
    var Fq = gq(40019),
      sq = gq(37289),
      Xq = gq(40028),
      wq = gq(39860),
      Kq = gq(40096),
      Cq = gq(40092),
      Iq = gq(40104),
      eq = gq(40079);
    class Dq extends Jq.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let qE = (() => {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
      let uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq = kq.c,
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [],
        Rq = [],
        Uq = [],
        Fq = [],
        Xq = [],
        wq = [],
        Kq = [],
        Iq = [],
        qE = [],
        EE = [],
        gE = [],
        YE = [],
        lE = [],
        OE = [],
        mE = [],
        xE = [];
      return qq = class extends rq {
        get isEnabled() {
          return (0, vq.b)(this, Eq, "f")
        }
        set isEnabled(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get indexOfRefraction() {
          return (0, vq.b)(this, gq, "f")
        }
        set indexOfRefraction(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get texture() {
          return (0, vq.b)(this, Yq, "f")
        }
        set texture(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vq.b)(this, lq, "f")
        }
        set useRoughnessFromMainTexture(qq) {
          (0, vq.e)(this, lq, qq, "f")
        }
        get textureRoughness() {
          return (0, vq.b)(this, Oq, "f")
        }
        set textureRoughness(qq) {
          (0, vq.e)(this, Oq, qq, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, vq.b)(this, mq, "f")
        }
        set remapF0OnInterfaceChange(qq) {
          (0, vq.e)(this, mq, qq, "f")
        }
        get bumpTexture() {
          return (0, vq.b)(this, xq, "f")
        }
        set bumpTexture(qq) {
          (0, vq.e)(this, xq, qq, "f")
        }
        get isTintEnabled() {
          return (0, vq.b)(this, Aq, "f")
        }
        set isTintEnabled(qq) {
          (0, vq.e)(this, Aq, qq, "f")
        }
        get tintTexture() {
          return (0, vq.b)(this, cq, "f")
        }
        set tintTexture(qq) {
          (0, vq.e)(this, cq, qq, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uq) {
          let Bq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uq, "PBRClearCoat", 100, new Dq, Bq), this._isEnabled = !1, Eq.set(this, (0, vq.i)(this, nq, !1)), this.intensity = ((0, vq.i)(this, bq), (0, vq.i)(this, iq, 1)), this.roughness = ((0, vq.i)(this, Zq), (0, vq.i)(this, fq, 0)), this._indexOfRefraction = ((0, vq.i)(this, Mq), qq._DefaultIndexOfRefraction), gq.set(this, (0, vq.i)(this, Tq, qq._DefaultIndexOfRefraction)), this._texture = ((0, vq.i)(this, zq), null), Yq.set(this, (0, vq.i)(this, Sq, null)), this._useRoughnessFromMainTexture = ((0, vq.i)(this, pq), !0), lq.set(this, (0, vq.i)(this, Gq, !0)), this._textureRoughness = ((0, vq.i)(this, Lq), null), Oq.set(this, (0, vq.i)(this, Jq, null)), this._remapF0OnInterfaceChange = ((0, vq.i)(this, Rq), !0), mq.set(this, (0, vq.i)(this, Uq, !0)), this._bumpTexture = ((0, vq.i)(this, Fq), null), xq.set(this, (0, vq.i)(this, Xq, null)), this._isTintEnabled = ((0, vq.i)(this, wq), !1), Aq.set(this, (0, vq.i)(this, Kq, !1)), this.tintColor = ((0, vq.i)(this, Iq), (0, vq.i)(this, qE, sq.d.White())), this.tintColorAtDistance = ((0, vq.i)(this, EE), (0, vq.i)(this, gE, 1)), this.tintThickness = ((0, vq.i)(this, YE), (0, vq.i)(this, lE, 1)), this._tintTexture = ((0, vq.i)(this, OE), null), cq.set(this, (0, vq.i)(this, mE, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vq.i)(this, xE), this._internalMarkAllSubMeshesAsTexturesDirty = uq._dirtyCallbacks[1]
        }
        isReadyForSubMesh(qq, Eq, gq) {
          if (!this._isEnabled) return !0;
          const Yq = this._material._disableBumpMap;
          if (qq._areTexturesDirty && Eq.texturesEnabled) {
            if (this._texture && Cq.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Cq.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (gq.getCaps().standardDerivatives && this._bumpTexture && Cq.c.ClearCoatBumpTextureEnabled && !Yq && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Cq.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Eq, gq) {
          this._isEnabled ? (Eq.CLEARCOAT = !0, Eq.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Eq.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Eq._areTexturesDirty && gq.texturesEnabled && (this._texture && Cq.c.ClearCoatTextureEnabled ? (0, eq.bb)(this._texture, Eq, "CLEARCOAT_TEXTURE") : Eq.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Cq.c.ClearCoatTextureEnabled ? (0, eq.bb)(this._textureRoughness, Eq, "CLEARCOAT_TEXTURE_ROUGHNESS") : Eq.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Cq.c.ClearCoatBumpTextureEnabled ? (0, eq.bb)(this._bumpTexture, Eq, "CLEARCOAT_BUMP") : Eq.CLEARCOAT_BUMP = !1, Eq.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === qq._DefaultIndexOfRefraction, this._isTintEnabled ? (Eq.CLEARCOAT_TINT = !0, this._tintTexture && Cq.c.ClearCoatTintTextureEnabled ? ((0, eq.bb)(this._tintTexture, Eq, "CLEARCOAT_TINT_TEXTURE"), Eq.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Eq.CLEARCOAT_TINT_TEXTURE = !1) : (Eq.CLEARCOAT_TINT = !1, Eq.CLEARCOAT_TINT_TEXTURE = !1))) : (Eq.CLEARCOAT = !1, Eq.CLEARCOAT_TEXTURE = !1, Eq.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Eq.CLEARCOAT_BUMP = !1, Eq.CLEARCOAT_TINT = !1, Eq.CLEARCOAT_TINT_TEXTURE = !1, Eq.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Eq.CLEARCOAT_DEFAULTIOR = !1, Eq.CLEARCOAT_TEXTUREDIRECTUV = 0, Eq.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Eq.CLEARCOAT_BUMPDIRECTUV = 0, Eq.CLEARCOAT_REMAP_F0 = !1, Eq.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Eq.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(qq, Eq, gq, Yq) {
          if (!this._isEnabled) return;
          const lq = Yq.materialDefines,
            Oq = this._material.isFrozen,
            mq = this._material._disableBumpMap,
            xq = this._material._invertNormalMapX,
            Aq = this._material._invertNormalMapY;
          if (!qq.useUbo || !Oq || !qq.isSync) {
            (this._texture || this._textureRoughness) && Cq.c.ClearCoatTextureEnabled && (qq.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, eq.w)(this._texture, qq, "clearCoat"), this._textureRoughness && !lq.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, eq.w)(this._textureRoughness, qq, "clearCoatRoughness")), this._bumpTexture && gq.getCaps().standardDerivatives && Cq.c.ClearCoatTextureEnabled && !mq && (qq.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, eq.w)(this._bumpTexture, qq, "clearCoatBump"), Eq._mirroredCameraPosition ? qq.updateFloat2("vClearCoatTangentSpaceParams", xq ? 1 : -1, Aq ? 1 : -1) : qq.updateFloat2("vClearCoatTangentSpaceParams", xq ? -1 : 1, Aq ? -1 : 1)), this._tintTexture && Cq.c.ClearCoatTintTextureEnabled && (qq.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, eq.w)(this._tintTexture, qq, "clearCoatTint")), qq.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Yq = 1 - this._indexOfRefraction,
              Oq = 1 + this._indexOfRefraction,
              cq = Math.pow(-Yq / Oq, 2),
              uq = 1 / this._indexOfRefraction;
            qq.updateFloat4("vClearCoatRefractionParams", cq, uq, Yq, Oq), this._isTintEnabled && (qq.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), qq.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Eq.texturesEnabled && (this._texture && Cq.c.ClearCoatTextureEnabled && qq.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !lq.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Cq.c.ClearCoatTextureEnabled && qq.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && gq.getCaps().standardDerivatives && Cq.c.ClearCoatBumpTextureEnabled && !mq && qq.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Cq.c.ClearCoatTintTextureEnabled && qq.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(qq) {
          return this._texture === qq || (this._textureRoughness === qq || (this._bumpTexture === qq || this._tintTexture === qq))
        }
        getActiveTextures(qq) {
          this._texture && qq.push(this._texture), this._textureRoughness && qq.push(this._textureRoughness), this._bumpTexture && qq.push(this._bumpTexture), this._tintTexture && qq.push(this._tintTexture)
        }
        getAnimatables(qq) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && qq.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && qq.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && qq.push(this._tintTexture)
        }
        dispose(qq) {
          qq && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(qq, Eq, gq) {
          return qq.CLEARCOAT_BUMP && Eq.addFallback(gq++, "CLEARCOAT_BUMP"), qq.CLEARCOAT_TINT && Eq.addFallback(gq++, "CLEARCOAT_TINT"), qq.CLEARCOAT && Eq.addFallback(gq++, "CLEARCOAT"), gq
        }
        getSamplers(qq) {
          qq.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, Oq = new WeakMap, mq = new WeakMap, xq = new WeakMap, Aq = new WeakMap, cq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(rq[Symbol.metadata] ?? null) : void 0;
        uq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Bq = [(0, hq.M)()], Wq = [(0, hq.M)()], Nq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], aq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Vq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], jq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Hq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], oq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Pq = [(0, hq.o)()], Qq = [(0, hq.M)()], yq = [(0, hq.M)()], tq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], (0, vq.f)(qq, null, uq, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: Eq
        }, nq, bq), (0, vq.f)(qq, null, Nq, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: qq => "indexOfRefraction" in qq,
            get: qq => qq.indexOfRefraction,
            set: (qq, Eq) => {
              qq.indexOfRefraction = Eq
            }
          },
          metadata: Eq
        }, Tq, zq), (0, vq.f)(qq, null, aq, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: qq => "texture" in qq,
            get: qq => qq.texture,
            set: (qq, Eq) => {
              qq.texture = Eq
            }
          },
          metadata: Eq
        }, Sq, pq), (0, vq.f)(qq, null, Vq, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRoughnessFromMainTexture" in qq,
            get: qq => qq.useRoughnessFromMainTexture,
            set: (qq, Eq) => {
              qq.useRoughnessFromMainTexture = Eq
            }
          },
          metadata: Eq
        }, Gq, Lq), (0, vq.f)(qq, null, dq, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "textureRoughness" in qq,
            get: qq => qq.textureRoughness,
            set: (qq, Eq) => {
              qq.textureRoughness = Eq
            }
          },
          metadata: Eq
        }, Jq, Rq), (0, vq.f)(qq, null, jq, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: qq => "remapF0OnInterfaceChange" in qq,
            get: qq => qq.remapF0OnInterfaceChange,
            set: (qq, Eq) => {
              qq.remapF0OnInterfaceChange = Eq
            }
          },
          metadata: Eq
        }, Uq, Fq), (0, vq.f)(qq, null, Hq, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "bumpTexture" in qq,
            get: qq => qq.bumpTexture,
            set: (qq, Eq) => {
              qq.bumpTexture = Eq
            }
          },
          metadata: Eq
        }, Xq, wq), (0, vq.f)(qq, null, oq, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isTintEnabled" in qq,
            get: qq => qq.isTintEnabled,
            set: (qq, Eq) => {
              qq.isTintEnabled = Eq
            }
          },
          metadata: Eq
        }, Kq, Iq), (0, vq.f)(qq, null, tq, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintTexture" in qq,
            get: qq => qq.tintTexture,
            set: (qq, Eq) => {
              qq.tintTexture = Eq
            }
          },
          metadata: Eq
        }, mE, xE), (0, vq.f)(null, null, Bq, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensity" in qq,
            get: qq => qq.intensity,
            set: (qq, Eq) => {
              qq.intensity = Eq
            }
          },
          metadata: Eq
        }, iq, Zq), (0, vq.f)(null, null, Wq, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "roughness" in qq,
            get: qq => qq.roughness,
            set: (qq, Eq) => {
              qq.roughness = Eq
            }
          },
          metadata: Eq
        }, fq, Mq), (0, vq.f)(null, null, Pq, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintColor" in qq,
            get: qq => qq.tintColor,
            set: (qq, Eq) => {
              qq.tintColor = Eq
            }
          },
          metadata: Eq
        }, qE, EE), (0, vq.f)(null, null, Qq, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintColorAtDistance" in qq,
            get: qq => qq.tintColorAtDistance,
            set: (qq, Eq) => {
              qq.tintColorAtDistance = Eq
            }
          },
          metadata: Eq
        }, gE, YE), (0, vq.f)(null, null, yq, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintThickness" in qq,
            get: qq => qq.tintThickness,
            set: (qq, Eq) => {
              qq.tintThickness = Eq
            }
          },
          metadata: Eq
        }, lE, OE), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq._DefaultIndexOfRefraction = 1.5, qq
    })();
    class EE extends Jq.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let gE = (() => {
      var qq, Eq, gq, Yq;
      let lq, Oq, mq, xq, Aq, cq, uq, Bq = kq.c,
        Wq = [],
        Nq = [],
        aq = [],
        Vq = [],
        dq = [],
        jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        nq = [];
      return qq = class extends Bq {
        get isEnabled() {
          return (0, vq.b)(this, Eq, "f")
        }
        set isEnabled(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get texture() {
          return (0, vq.b)(this, gq, "f")
        }
        set texture(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get thicknessTexture() {
          return (0, vq.b)(this, Yq, "f")
        }
        set thicknessTexture(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(lq) {
          let Oq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(lq, "PBRIridescence", 110, new EE, Oq), this._isEnabled = !1, Eq.set(this, (0, vq.i)(this, Wq, !1)), this.intensity = ((0, vq.i)(this, Nq), (0, vq.i)(this, aq, 1)), this.minimumThickness = ((0, vq.i)(this, Vq), (0, vq.i)(this, dq, qq._DefaultMinimumThickness)), this.maximumThickness = ((0, vq.i)(this, jq), (0, vq.i)(this, Hq, qq._DefaultMaximumThickness)), this.indexOfRefraction = ((0, vq.i)(this, oq), (0, vq.i)(this, Pq, qq._DefaultIndexOfRefraction)), this._texture = ((0, vq.i)(this, Qq), null), gq.set(this, (0, vq.i)(this, yq, null)), this._thicknessTexture = ((0, vq.i)(this, tq), null), Yq.set(this, (0, vq.i)(this, rq, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vq.i)(this, nq), this._internalMarkAllSubMeshesAsTexturesDirty = lq._dirtyCallbacks[1]
        }
        isReadyForSubMesh(qq, Eq) {
          if (!this._isEnabled) return !0;
          if (qq._areTexturesDirty && Eq.texturesEnabled) {
            if (this._texture && Cq.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Cq.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(qq, Eq) {
          this._isEnabled ? (qq.IRIDESCENCE = !0, qq._areTexturesDirty && Eq.texturesEnabled && (this._texture && Cq.c.IridescenceTextureEnabled ? (0, eq.bb)(this._texture, qq, "IRIDESCENCE_TEXTURE") : qq.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Cq.c.IridescenceTextureEnabled ? (0, eq.bb)(this._thicknessTexture, qq, "IRIDESCENCE_THICKNESS_TEXTURE") : qq.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (qq.IRIDESCENCE = !1, qq.IRIDESCENCE_TEXTURE = !1, qq.IRIDESCENCE_THICKNESS_TEXTURE = !1, qq.IRIDESCENCE_TEXTUREDIRECTUV = 0, qq.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(qq, Eq) {
          if (!this._isEnabled) return;
          const gq = this._material.isFrozen;
          qq.useUbo && gq && qq.isSync || ((this._texture || this._thicknessTexture) && Cq.c.IridescenceTextureEnabled && (qq.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, eq.w)(this._texture, qq, "iridescence"), this._thicknessTexture && (0, eq.w)(this._thicknessTexture, qq, "iridescenceThickness")), qq.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Eq.texturesEnabled && (this._texture && Cq.c.IridescenceTextureEnabled && qq.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Cq.c.IridescenceTextureEnabled && qq.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(qq) {
          return this._texture === qq || this._thicknessTexture === qq
        }
        getActiveTextures(qq) {
          this._texture && qq.push(this._texture), this._thicknessTexture && qq.push(this._thicknessTexture)
        }
        getAnimatables(qq) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && qq.push(this._thicknessTexture)
        }
        dispose(qq) {
          qq && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(qq, Eq, gq) {
          return qq.IRIDESCENCE && Eq.addFallback(gq++, "IRIDESCENCE"), gq
        }
        getSamplers(qq) {
          qq.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bq[Symbol.metadata] ?? null) : void 0;
        lq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Oq = [(0, hq.M)()], mq = [(0, hq.M)()], xq = [(0, hq.M)()], Aq = [(0, hq.M)()], cq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], uq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], (0, vq.f)(qq, null, lq, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: Eq
        }, Wq, Nq), (0, vq.f)(qq, null, cq, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: qq => "texture" in qq,
            get: qq => qq.texture,
            set: (qq, Eq) => {
              qq.texture = Eq
            }
          },
          metadata: Eq
        }, yq, tq), (0, vq.f)(qq, null, uq, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "thicknessTexture" in qq,
            get: qq => qq.thicknessTexture,
            set: (qq, Eq) => {
              qq.thicknessTexture = Eq
            }
          },
          metadata: Eq
        }, rq, nq), (0, vq.f)(null, null, Oq, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensity" in qq,
            get: qq => qq.intensity,
            set: (qq, Eq) => {
              qq.intensity = Eq
            }
          },
          metadata: Eq
        }, aq, Vq), (0, vq.f)(null, null, mq, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: qq => "minimumThickness" in qq,
            get: qq => qq.minimumThickness,
            set: (qq, Eq) => {
              qq.minimumThickness = Eq
            }
          },
          metadata: Eq
        }, dq, jq), (0, vq.f)(null, null, xq, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: qq => "maximumThickness" in qq,
            get: qq => qq.maximumThickness,
            set: (qq, Eq) => {
              qq.maximumThickness = Eq
            }
          },
          metadata: Eq
        }, Hq, oq), (0, vq.f)(null, null, Aq, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: qq => "indexOfRefraction" in qq,
            get: qq => qq.indexOfRefraction,
            set: (qq, Eq) => {
              qq.indexOfRefraction = Eq
            }
          },
          metadata: Eq
        }, Pq, Qq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq._DefaultMinimumThickness = 100, qq._DefaultMaximumThickness = 400, qq._DefaultIndexOfRefraction = 1.3, qq
    })();
    class YE extends Jq.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let lE = (() => {
      var qq, Eq, gq, Yq;
      let lq, Oq, mq, xq, Aq, cq = kq.c,
        uq = [],
        Bq = [],
        Wq = [],
        Nq = [],
        aq = [],
        Vq = [],
        dq = [],
        jq = [],
        Hq = [],
        oq = [];
      return qq = class extends cq {
        get isEnabled() {
          return (0, vq.b)(this, Eq, "f")
        }
        set isEnabled(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        set angle(qq) {
          this.direction.x = Math.cos(qq), this.direction.y = Math.sin(qq)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, vq.b)(this, gq, "f")
        }
        set texture(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get legacy() {
          return (0, vq.b)(this, Yq, "f")
        }
        set legacy(qq) {
          (0, vq.e)(this, Yq, qq, "f")
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
        constructor(qq) {
          let lq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qq, "PBRAnisotropic", 110, new YE, lq), this._isEnabled = !1, Eq.set(this, (0, vq.i)(this, uq, !1)), this.intensity = ((0, vq.i)(this, Bq), (0, vq.i)(this, Wq, 1)), this.direction = ((0, vq.i)(this, Nq), (0, vq.i)(this, aq, new Gq.p(1, 0))), this._texture = ((0, vq.i)(this, Vq), null), gq.set(this, (0, vq.i)(this, dq, null)), this._legacy = ((0, vq.i)(this, jq), !1), Yq.set(this, (0, vq.i)(this, Hq, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vq.i)(this, oq), this._internalMarkAllSubMeshesAsTexturesDirty = qq._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = qq._dirtyCallbacks[16]
        }
        isReadyForSubMesh(qq, Eq) {
          return !this._isEnabled || !(qq._areTexturesDirty && Eq.texturesEnabled && this._texture && Cq.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(qq, Eq, gq) {
          this._isEnabled ? (qq.ANISOTROPIC = this._isEnabled, this._isEnabled && !gq.isVerticesDataPresent(Lq.g.TangentKind) && (qq._needUVs = !0, qq.MAINUV1 = !0), qq._areTexturesDirty && Eq.texturesEnabled && (this._texture && Cq.c.AnisotropicTextureEnabled ? (0, eq.bb)(this._texture, qq, "ANISOTROPIC_TEXTURE") : qq.ANISOTROPIC_TEXTURE = !1), qq._areMiscDirty && (qq.ANISOTROPIC_LEGACY = this._legacy)) : (qq.ANISOTROPIC = !1, qq.ANISOTROPIC_TEXTURE = !1, qq.ANISOTROPIC_TEXTUREDIRECTUV = 0, qq.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(qq, Eq) {
          if (!this._isEnabled) return;
          const gq = this._material.isFrozen;
          qq.useUbo && gq && qq.isSync || (this._texture && Cq.c.AnisotropicTextureEnabled && (qq.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, eq.w)(this._texture, qq, "anisotropy")), qq.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Eq.texturesEnabled && this._texture && Cq.c.AnisotropicTextureEnabled && qq.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(qq) {
          return this._texture === qq
        }
        getActiveTextures(qq) {
          this._texture && qq.push(this._texture)
        }
        getAnimatables(qq) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture)
        }
        dispose(qq) {
          qq && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(qq, Eq, gq) {
          return qq.ANISOTROPIC && Eq.addFallback(gq++, "ANISOTROPIC"), gq
        }
        getSamplers(qq) {
          qq.push("anisotropySampler")
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
        parse(qq, Eq, gq) {
          super.parse(qq, Eq, gq), void 0 === qq.legacy && (this.legacy = !0)
        }
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(cq[Symbol.metadata] ?? null) : void 0;
        lq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Oq = [(0, hq.M)()], mq = [(0, hq.F)()], xq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Aq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], (0, vq.f)(qq, null, lq, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: Eq
        }, uq, Bq), (0, vq.f)(qq, null, xq, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: qq => "texture" in qq,
            get: qq => qq.texture,
            set: (qq, Eq) => {
              qq.texture = Eq
            }
          },
          metadata: Eq
        }, dq, jq), (0, vq.f)(qq, null, Aq, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: qq => "legacy" in qq,
            get: qq => qq.legacy,
            set: (qq, Eq) => {
              qq.legacy = Eq
            }
          },
          metadata: Eq
        }, Hq, oq), (0, vq.f)(null, null, Oq, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensity" in qq,
            get: qq => qq.intensity,
            set: (qq, Eq) => {
              qq.intensity = Eq
            }
          },
          metadata: Eq
        }, Wq, Nq), (0, vq.f)(null, null, mq, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: qq => "direction" in qq,
            get: qq => qq.direction,
            set: (qq, Eq) => {
              qq.direction = Eq
            }
          },
          metadata: Eq
        }, aq, Vq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq
    })();
    class OE extends Jq.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let mE = (() => {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq;
      let Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq = kq.c,
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [];
      return qq = class extends jq {
        get isEnabled() {
          return (0, vq.b)(this, Eq, "f")
        }
        set isEnabled(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, vq.b)(this, gq, "f")
        }
        set linkSheenWithAlbedo(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get texture() {
          return (0, vq.b)(this, Yq, "f")
        }
        set texture(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vq.b)(this, lq, "f")
        }
        set useRoughnessFromMainTexture(qq) {
          (0, vq.e)(this, lq, qq, "f")
        }
        get roughness() {
          return (0, vq.b)(this, Oq, "f")
        }
        set roughness(qq) {
          (0, vq.e)(this, Oq, qq, "f")
        }
        get textureRoughness() {
          return (0, vq.b)(this, mq, "f")
        }
        set textureRoughness(qq) {
          (0, vq.e)(this, mq, qq, "f")
        }
        get albedoScaling() {
          return (0, vq.b)(this, xq, "f")
        }
        set albedoScaling(qq) {
          (0, vq.e)(this, xq, qq, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qq) {
          let Aq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qq, "Sheen", 120, new OE, Aq), this._isEnabled = !1, Eq.set(this, (0, vq.i)(this, Hq, !1)), this._linkSheenWithAlbedo = ((0, vq.i)(this, oq), !1), gq.set(this, (0, vq.i)(this, Pq, !1)), this.intensity = ((0, vq.i)(this, Qq), (0, vq.i)(this, yq, 1)), this.color = ((0, vq.i)(this, tq), (0, vq.i)(this, rq, sq.d.White())), this._texture = ((0, vq.i)(this, nq), null), Yq.set(this, (0, vq.i)(this, bq, null)), this._useRoughnessFromMainTexture = ((0, vq.i)(this, iq), !0), lq.set(this, (0, vq.i)(this, Zq, !0)), this._roughness = ((0, vq.i)(this, fq), null), Oq.set(this, (0, vq.i)(this, Mq, null)), this._textureRoughness = ((0, vq.i)(this, Tq), null), mq.set(this, (0, vq.i)(this, zq, null)), this._albedoScaling = ((0, vq.i)(this, Sq), !1), xq.set(this, (0, vq.i)(this, pq, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vq.i)(this, Gq), this._internalMarkAllSubMeshesAsTexturesDirty = qq._dirtyCallbacks[1]
        }
        isReadyForSubMesh(qq, Eq) {
          if (!this._isEnabled) return !0;
          if (qq._areTexturesDirty && Eq.texturesEnabled) {
            if (this._texture && Cq.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Cq.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(qq, Eq) {
          this._isEnabled ? (qq.SHEEN = !0, qq.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, qq.SHEEN_ROUGHNESS = null !== this._roughness, qq.SHEEN_ALBEDOSCALING = this._albedoScaling, qq.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, qq._areTexturesDirty && Eq.texturesEnabled && (this._texture && Cq.c.SheenTextureEnabled ? ((0, eq.bb)(this._texture, qq, "SHEEN_TEXTURE"), qq.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : qq.SHEEN_TEXTURE = !1, this._textureRoughness && Cq.c.SheenTextureEnabled ? (0, eq.bb)(this._textureRoughness, qq, "SHEEN_TEXTURE_ROUGHNESS") : qq.SHEEN_TEXTURE_ROUGHNESS = !1)) : (qq.SHEEN = !1, qq.SHEEN_TEXTURE = !1, qq.SHEEN_TEXTURE_ROUGHNESS = !1, qq.SHEEN_LINKWITHALBEDO = !1, qq.SHEEN_ROUGHNESS = !1, qq.SHEEN_ALBEDOSCALING = !1, qq.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, qq.SHEEN_GAMMATEXTURE = !1, qq.SHEEN_TEXTUREDIRECTUV = 0, qq.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(qq, Eq, gq, Yq) {
          if (!this._isEnabled) return;
          const lq = Yq.materialDefines,
            Oq = this._material.isFrozen;
          qq.useUbo && Oq && qq.isSync || ((this._texture || this._textureRoughness) && Cq.c.SheenTextureEnabled && (qq.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, eq.w)(this._texture, qq, "sheen"), this._textureRoughness && !lq.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, eq.w)(this._textureRoughness, qq, "sheenRoughness")), qq.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && qq.updateFloat("vSheenRoughness", this._roughness)), Eq.texturesEnabled && (this._texture && Cq.c.SheenTextureEnabled && qq.setTexture("sheenSampler", this._texture), this._textureRoughness && !lq.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Cq.c.SheenTextureEnabled && qq.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(qq) {
          return this._texture === qq || this._textureRoughness === qq
        }
        getActiveTextures(qq) {
          this._texture && qq.push(this._texture), this._textureRoughness && qq.push(this._textureRoughness)
        }
        getAnimatables(qq) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && qq.push(this._textureRoughness)
        }
        dispose(qq) {
          qq && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(qq, Eq, gq) {
          return qq.SHEEN && Eq.addFallback(gq++, "SHEEN"), gq
        }
        getSamplers(qq) {
          qq.push("sheenSampler", "sheenRoughnessSampler")
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
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, Oq = new WeakMap, mq = new WeakMap, xq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(jq[Symbol.metadata] ?? null) : void 0;
        Aq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], cq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], uq = [(0, hq.M)()], Bq = [(0, hq.o)()], Wq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Nq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], aq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Vq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], (0, vq.f)(qq, null, Aq, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: Eq
        }, Hq, oq), (0, vq.f)(qq, null, cq, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: qq => "linkSheenWithAlbedo" in qq,
            get: qq => qq.linkSheenWithAlbedo,
            set: (qq, Eq) => {
              qq.linkSheenWithAlbedo = Eq
            }
          },
          metadata: Eq
        }, Pq, Qq), (0, vq.f)(qq, null, Wq, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: qq => "texture" in qq,
            get: qq => qq.texture,
            set: (qq, Eq) => {
              qq.texture = Eq
            }
          },
          metadata: Eq
        }, bq, iq), (0, vq.f)(qq, null, Nq, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRoughnessFromMainTexture" in qq,
            get: qq => qq.useRoughnessFromMainTexture,
            set: (qq, Eq) => {
              qq.useRoughnessFromMainTexture = Eq
            }
          },
          metadata: Eq
        }, Zq, fq), (0, vq.f)(qq, null, aq, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "roughness" in qq,
            get: qq => qq.roughness,
            set: (qq, Eq) => {
              qq.roughness = Eq
            }
          },
          metadata: Eq
        }, Mq, Tq), (0, vq.f)(qq, null, Vq, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "textureRoughness" in qq,
            get: qq => qq.textureRoughness,
            set: (qq, Eq) => {
              qq.textureRoughness = Eq
            }
          },
          metadata: Eq
        }, zq, Sq), (0, vq.f)(qq, null, dq, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: qq => "albedoScaling" in qq,
            get: qq => qq.albedoScaling,
            set: (qq, Eq) => {
              qq.albedoScaling = Eq
            }
          },
          metadata: Eq
        }, pq, Gq), (0, vq.f)(null, null, uq, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensity" in qq,
            get: qq => qq.intensity,
            set: (qq, Eq) => {
              qq.intensity = Eq
            }
          },
          metadata: Eq
        }, yq, tq), (0, vq.f)(null, null, Bq, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: qq => "color" in qq,
            get: qq => qq.color,
            set: (qq, Eq) => {
              qq.color = Eq
            }
          },
          metadata: Eq
        }, rq, nq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq
    })();
    class xE extends Jq.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let AE = (() => {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq;
      let jq, Hq, oq, Pq, Qq, yq, tq, rq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Lq, Jq, Rq, Uq, Fq, Xq, wq, Kq, Iq, Dq, qE, EE, gE = kq.c,
        YE = [],
        lE = [],
        OE = [],
        mE = [],
        AE = [],
        cE = [],
        uE = [],
        BE = [],
        WE = [],
        NE = [],
        aE = [],
        VE = [],
        dE = [],
        jE = [],
        HE = [],
        oE = [],
        PE = [],
        QE = [],
        yE = [],
        tE = [],
        rE = [],
        vE = [],
        hE = [],
        nE = [],
        bE = [],
        iE = [],
        ZE = [],
        fE = [],
        ME = [],
        TE = [],
        zE = [],
        SE = [],
        pE = [],
        GE = [],
        LE = [],
        JE = [],
        kE = [],
        RE = [],
        UE = [],
        FE = [],
        sE = [],
        XE = [],
        wE = [],
        KE = [],
        CE = [],
        IE = [],
        eE = [],
        DE = [],
        qg = [],
        Eg = [],
        gg = [],
        Yg = [],
        lg = [],
        Og = [],
        mg = [],
        xg = [],
        Ag = [],
        cg = [],
        ug = [],
        Bg = [];
      return qq = class extends gE {
        get isRefractionEnabled() {
          return (0, vq.b)(this, Eq, "f")
        }
        set isRefractionEnabled(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get isTranslucencyEnabled() {
          return (0, vq.b)(this, gq, "f")
        }
        set isTranslucencyEnabled(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get isDispersionEnabled() {
          return (0, vq.b)(this, Yq, "f")
        }
        set isDispersionEnabled(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        get isScatteringEnabled() {
          return (0, vq.b)(this, lq, "f")
        }
        set isScatteringEnabled(qq) {
          (0, vq.e)(this, lq, qq, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(qq) {
          this._scene.enableSubSurfaceForPrePass() && qq && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(qq))
        }
        get useAlbedoToTintRefraction() {
          return (0, vq.b)(this, Oq, "f")
        }
        set useAlbedoToTintRefraction(qq) {
          (0, vq.e)(this, Oq, qq, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, vq.b)(this, mq, "f")
        }
        set useAlbedoToTintTranslucency(qq) {
          (0, vq.e)(this, mq, qq, "f")
        }
        get thicknessTexture() {
          return (0, vq.b)(this, xq, "f")
        }
        set thicknessTexture(qq) {
          (0, vq.e)(this, xq, qq, "f")
        }
        get refractionTexture() {
          return (0, vq.b)(this, Aq, "f")
        }
        set refractionTexture(qq) {
          (0, vq.e)(this, Aq, qq, "f")
        }
        get indexOfRefraction() {
          return (0, vq.b)(this, cq, "f")
        }
        set indexOfRefraction(qq) {
          (0, vq.e)(this, cq, qq, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(qq) {
          const Eq = qq >= 1 ? qq : -1;
          this._volumeIndexOfRefraction !== Eq && (this._volumeIndexOfRefraction = Eq, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, vq.b)(this, uq, "f")
        }
        set invertRefractionY(qq) {
          (0, vq.e)(this, uq, qq, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, vq.b)(this, Bq, "f")
        }
        set linkRefractionWithTransparency(qq) {
          (0, vq.e)(this, Bq, qq, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, vq.b)(this, Wq, "f")
        }
        set useMaskFromThicknessTexture(qq) {
          (0, vq.e)(this, Wq, qq, "f")
        }
        get refractionIntensityTexture() {
          return (0, vq.b)(this, Nq, "f")
        }
        set refractionIntensityTexture(qq) {
          (0, vq.e)(this, Nq, qq, "f")
        }
        get translucencyIntensityTexture() {
          return (0, vq.b)(this, aq, "f")
        }
        set translucencyIntensityTexture(qq) {
          (0, vq.e)(this, aq, qq, "f")
        }
        get translucencyColorTexture() {
          return (0, vq.b)(this, Vq, "f")
        }
        set translucencyColorTexture(qq) {
          (0, vq.e)(this, Vq, qq, "f")
        }
        get useGltfStyleTextures() {
          return (0, vq.b)(this, dq, "f")
        }
        set useGltfStyleTextures(qq) {
          (0, vq.e)(this, dq, qq, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(qq) {
          this.legacyTranslucency = qq
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
        constructor(jq) {
          let Hq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(jq, "PBRSubSurface", 130, new xE, Hq), this._isRefractionEnabled = !1, Eq.set(this, (0, vq.i)(this, YE, !1)), this._isTranslucencyEnabled = ((0, vq.i)(this, lE), !1), gq.set(this, (0, vq.i)(this, OE, !1)), this._isDispersionEnabled = ((0, vq.i)(this, mE), !1), Yq.set(this, (0, vq.i)(this, AE, !1)), this._isScatteringEnabled = ((0, vq.i)(this, cE), !1), lq.set(this, (0, vq.i)(this, uE, !1)), this._scatteringDiffusionProfileIndex = ((0, vq.i)(this, BE), (0, vq.i)(this, WE, 0)), this.refractionIntensity = ((0, vq.i)(this, NE), (0, vq.i)(this, aE, 1)), this.translucencyIntensity = ((0, vq.i)(this, VE), (0, vq.i)(this, dE, 1)), this._useAlbedoToTintRefraction = ((0, vq.i)(this, jE), !1), Oq.set(this, (0, vq.i)(this, HE, !1)), this._useAlbedoToTintTranslucency = ((0, vq.i)(this, oE), !1), mq.set(this, (0, vq.i)(this, PE, !1)), this._thicknessTexture = ((0, vq.i)(this, QE), null), xq.set(this, (0, vq.i)(this, yE, null)), this._refractionTexture = ((0, vq.i)(this, tE), null), Aq.set(this, (0, vq.i)(this, rE, null)), this._indexOfRefraction = ((0, vq.i)(this, vE), 1.5), cq.set(this, (0, vq.i)(this, hE, 1.5)), this._volumeIndexOfRefraction = ((0, vq.i)(this, nE), (0, vq.i)(this, bE, -1)), this._invertRefractionY = ((0, vq.i)(this, iE), !1), uq.set(this, (0, vq.i)(this, ZE, !1)), this._linkRefractionWithTransparency = ((0, vq.i)(this, fE), !1), Bq.set(this, (0, vq.i)(this, ME, !1)), this.minimumThickness = ((0, vq.i)(this, TE), (0, vq.i)(this, zE, 0)), this.maximumThickness = ((0, vq.i)(this, SE), (0, vq.i)(this, pE, 1)), this.useThicknessAsDepth = ((0, vq.i)(this, GE), (0, vq.i)(this, LE, !1)), this.tintColor = ((0, vq.i)(this, JE), (0, vq.i)(this, kE, sq.d.White())), this.tintColorAtDistance = ((0, vq.i)(this, RE), (0, vq.i)(this, UE, 1)), this.dispersion = ((0, vq.i)(this, FE), (0, vq.i)(this, sE, 0)), this.diffusionDistance = ((0, vq.i)(this, XE), (0, vq.i)(this, wE, sq.d.White())), this._useMaskFromThicknessTexture = ((0, vq.i)(this, KE), !1), Wq.set(this, (0, vq.i)(this, CE, !1)), this._refractionIntensityTexture = ((0, vq.i)(this, IE), null), Nq.set(this, (0, vq.i)(this, eE, null)), this._translucencyIntensityTexture = ((0, vq.i)(this, DE), null), aq.set(this, (0, vq.i)(this, qg, null)), this.translucencyColor = ((0, vq.i)(this, Eg), (0, vq.i)(this, gg, null)), this._translucencyColorTexture = ((0, vq.i)(this, Yg), null), Vq.set(this, (0, vq.i)(this, lg, null)), this._useGltfStyleTextures = ((0, vq.i)(this, Og), !0), dq.set(this, (0, vq.i)(this, mg, !0)), this.applyAlbedoAfterSubSurface = ((0, vq.i)(this, xg), (0, vq.i)(this, Ag, qq.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, vq.i)(this, cg), (0, vq.i)(this, ug, qq.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, vq.i)(this, Bg), this._scene = jq.ZJ(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = jq._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = jq._dirtyCallbacks[32]
        }
        isReadyForSubMesh(qq, Eq) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (qq._areTexturesDirty && Eq.texturesEnabled) {
            if (this._thicknessTexture && Cq.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Cq.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Cq.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Cq.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const qq = this._getRefractionTexture(Eq);
            if (qq && Cq.c.RefractionTextureEnabled && !qq.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(qq, Eq) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return qq.SUBSURFACE = !1, qq.SS_DISPERSION = !1, qq.SS_TRANSLUCENCY = !1, qq.SS_SCATTERING = !1, qq.SS_REFRACTION = !1, qq.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, qq.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, qq.SS_THICKNESSANDMASK_TEXTURE = !1, qq.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, qq.SS_HAS_THICKNESS = !1, qq.SS_REFRACTIONINTENSITY_TEXTURE = !1, qq.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, qq.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, qq.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, qq.SS_REFRACTIONMAP_3D = !1, qq.SS_REFRACTIONMAP_OPPOSITEZ = !1, qq.SS_LODINREFRACTIONALPHA = !1, qq.SS_GAMMAREFRACTION = !1, qq.SS_RGBDREFRACTION = !1, qq.SS_LINEARSPECULARREFRACTION = !1, qq.SS_LINKREFRACTIONTOTRANSPARENCY = !1, qq.SS_ALBEDOFORREFRACTIONTINT = !1, qq.SS_ALBEDOFORTRANSLUCENCYTINT = !1, qq.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, qq.SS_USE_THICKNESS_AS_DEPTH = !1, qq.SS_USE_GLTF_TEXTURES = !1, qq.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, qq.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, qq.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(qq.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (qq._areTexturesDirty) {
            if (qq.SUBSURFACE = !0, qq.SS_DISPERSION = this._isDispersionEnabled, qq.SS_TRANSLUCENCY = this._isTranslucencyEnabled, qq.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, qq.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, qq.SS_SCATTERING = this._isScatteringEnabled, qq.SS_THICKNESSANDMASK_TEXTURE = !1, qq.SS_REFRACTIONINTENSITY_TEXTURE = !1, qq.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, qq.SS_HAS_THICKNESS = !1, qq.SS_USE_GLTF_TEXTURES = !1, qq.SS_REFRACTION = !1, qq.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, qq.SS_REFRACTIONMAP_3D = !1, qq.SS_GAMMAREFRACTION = !1, qq.SS_RGBDREFRACTION = !1, qq.SS_LINEARSPECULARREFRACTION = !1, qq.SS_REFRACTIONMAP_OPPOSITEZ = !1, qq.SS_LODINREFRACTIONALPHA = !1, qq.SS_LINKREFRACTIONTOTRANSPARENCY = !1, qq.SS_ALBEDOFORREFRACTIONTINT = !1, qq.SS_ALBEDOFORTRANSLUCENCYTINT = !1, qq.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, qq.SS_USE_THICKNESS_AS_DEPTH = !1, qq.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, qq.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, qq._areTexturesDirty && Eq.texturesEnabled && (this._thicknessTexture && Cq.c.ThicknessTextureEnabled && (0, eq.bb)(this._thicknessTexture, qq, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Cq.c.RefractionIntensityTextureEnabled && (0, eq.bb)(this._refractionIntensityTexture, qq, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Cq.c.TranslucencyIntensityTextureEnabled && (0, eq.bb)(this._translucencyIntensityTexture, qq, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Cq.c.TranslucencyColorTextureEnabled && ((0, eq.bb)(this._translucencyColorTexture, qq, "SS_TRANSLUCENCYCOLOR_TEXTURE"), qq.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), qq.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, qq.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, qq.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, qq.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Eq.texturesEnabled) {
              const gq = this._getRefractionTexture(Eq);
              gq && Cq.c.RefractionTextureEnabled && (qq.SS_REFRACTION = !0, qq.SS_REFRACTIONMAP_3D = gq.isCube, qq.SS_GAMMAREFRACTION = gq.gammaSpace, qq.SS_RGBDREFRACTION = gq.isRGBD, qq.SS_LINEARSPECULARREFRACTION = gq.linearSpecularLOD, qq.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && gq.isCube ? !gq.invertZ : gq.invertZ, qq.SS_LODINREFRACTIONALPHA = gq.lodLevelInAlpha, qq.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, qq.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, qq.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = gq.isCube && gq.boundingBoxSize, qq.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (qq.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(qq, Eq, gq, Yq) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) qq.updateFloat2("vThicknessParam", 0, 0);
            else {
              Yq.getRenderingMesh().getWorldMatrix().decompose(Gq.o.Na[0]);
              const Eq = Math.max(Math.abs(Gq.o.Na[0].x), Math.abs(Gq.o.Na[0].y), Math.abs(Gq.o.Na[0].z));
              qq.updateFloat2("vThicknessParam", this.minimumThickness * Eq, (this.maximumThickness - this.minimumThickness) * Eq)
            }
        }
        bindForSubMesh(qq, Eq, gq, Yq) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const lq = Yq.materialDefines,
            Oq = this._material.isFrozen,
            mq = this._material.realTimeFiltering,
            xq = lq.LODBASEDMICROSFURACE,
            Aq = this._getRefractionTexture(Eq);
          if (!qq.useUbo || !Oq || !qq.isSync) {
            if (this._thicknessTexture && Cq.c.ThicknessTextureEnabled && (qq.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, eq.w)(this._thicknessTexture, qq, "thickness")), this._refractionIntensityTexture && Cq.c.RefractionIntensityTextureEnabled && lq.SS_REFRACTIONINTENSITY_TEXTURE && (qq.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, eq.w)(this._refractionIntensityTexture, qq, "refractionIntensity")), this._translucencyColorTexture && Cq.c.TranslucencyColorTextureEnabled && lq.SS_TRANSLUCENCYCOLOR_TEXTURE && (qq.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, eq.w)(this._translucencyColorTexture, qq, "translucencyColor")), this._translucencyIntensityTexture && Cq.c.TranslucencyIntensityTextureEnabled && lq.SS_TRANSLUCENCYINTENSITY_TEXTURE && (qq.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, eq.w)(this._translucencyIntensityTexture, qq, "translucencyIntensity")), Aq && Cq.c.RefractionTextureEnabled) {
              qq.Eqq("refractionMatrix", Aq.getRefractionTextureMatrix());
              let Eq = 1;
              Aq.isCube || Aq.depth && (Eq = Aq.depth);
              const gq = Aq.getSize().width,
                Yq = this.volumeIndexOfRefraction;
              if (qq.updateFloat4("vRefractionInfos", Aq.level, 1 / Yq, Eq, this._invertRefractionY ? -1 : 1), qq.updateFloat4("vRefractionMicrosurfaceInfos", gq, Aq.lodGenerationScale, Aq.lodGenerationOffset, 1 / this.indexOfRefraction), mq && qq.updateFloat2("vRefractionFilteringInfo", gq, Math.log2(gq)), Aq.boundingBoxSize) {
                const Eq = Aq;
                qq.updateVector3("vRefractionPosition", Eq.boundingBoxPosition), qq.updateVector3("vRefractionSize", Eq.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && qq.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), qq.updateColor3("vDiffusionDistance", this.diffusionDistance), qq.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), qq.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), qq.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), qq.updateFloat("dispersion", this.dispersion)
          }
          Eq.texturesEnabled && (this._thicknessTexture && Cq.c.ThicknessTextureEnabled && qq.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Cq.c.RefractionIntensityTextureEnabled && lq.SS_REFRACTIONINTENSITY_TEXTURE && qq.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Cq.c.TranslucencyIntensityTextureEnabled && lq.SS_TRANSLUCENCYINTENSITY_TEXTURE && qq.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Cq.c.TranslucencyColorTextureEnabled && lq.SS_TRANSLUCENCYCOLOR_TEXTURE && qq.setTexture("translucencyColorSampler", this._translucencyColorTexture), Aq && Cq.c.RefractionTextureEnabled && (xq ? qq.setTexture("refractionSampler", Aq) : (qq.setTexture("refractionSampler", Aq._lodTextureMid || Aq), qq.setTexture("refractionSamplerLow", Aq._lodTextureLow || Aq), qq.setTexture("refractionSamplerHigh", Aq._lodTextureHigh || Aq))))
        }
        _getRefractionTexture(qq) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? qq.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(qq) {
          Cq.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && qq.push(this._refractionTexture)
        }
        hasTexture(qq) {
          return this._thicknessTexture === qq || (this._refractionTexture === qq || (this._refractionIntensityTexture === qq || (this._translucencyIntensityTexture === qq || this._translucencyColorTexture === qq)))
        }
        hasRenderTargetTextures() {
          return !!(Cq.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(qq) {
          this._thicknessTexture && qq.push(this._thicknessTexture), this._refractionTexture && qq.push(this._refractionTexture), this._refractionIntensityTexture && qq.push(this._refractionIntensityTexture), this._translucencyColorTexture && qq.push(this._translucencyColorTexture), this._translucencyIntensityTexture && qq.push(this._translucencyIntensityTexture)
        }
        getAnimatables(qq) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && qq.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && qq.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && qq.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && qq.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && qq.push(this._translucencyIntensityTexture)
        }
        dispose(qq) {
          qq && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(qq, Eq, gq) {
          return qq.SS_SCATTERING && Eq.addFallback(gq++, "SS_SCATTERING"), qq.SS_TRANSLUCENCY && Eq.addFallback(gq++, "SS_TRANSLUCENCY"), gq
        }
        getSamplers(qq) {
          qq.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, Oq = new WeakMap, mq = new WeakMap, xq = new WeakMap, Aq = new WeakMap, cq = new WeakMap, uq = new WeakMap, Bq = new WeakMap, Wq = new WeakMap, Nq = new WeakMap, aq = new WeakMap, Vq = new WeakMap, dq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(gE[Symbol.metadata] ?? null) : void 0;
        jq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Hq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], oq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Pq = [(0, hq.M)(), (0, hq.f)("_markScenePrePassDirty")], Qq = [(0, hq.M)()], yq = [(0, hq.M)()], tq = [(0, hq.M)()], rq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], nq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], bq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], iq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Zq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], fq = [(0, hq.M)()], Mq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Tq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], zq = [(0, hq.M)()], Sq = [(0, hq.M)()], pq = [(0, hq.M)()], Lq = [(0, hq.o)()], Jq = [(0, hq.M)()], Rq = [(0, hq.M)()], Uq = [(0, hq.o)()], Fq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Xq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], wq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Kq = [(0, hq.o)()], Iq = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Dq = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, hq.M)()], EE = [(0, hq.M)()], (0, vq.f)(qq, null, jq, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isRefractionEnabled" in qq,
            get: qq => qq.isRefractionEnabled,
            set: (qq, Eq) => {
              qq.isRefractionEnabled = Eq
            }
          },
          metadata: Eq
        }, YE, lE), (0, vq.f)(qq, null, Hq, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isTranslucencyEnabled" in qq,
            get: qq => qq.isTranslucencyEnabled,
            set: (qq, Eq) => {
              qq.isTranslucencyEnabled = Eq
            }
          },
          metadata: Eq
        }, OE, mE), (0, vq.f)(qq, null, oq, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isDispersionEnabled" in qq,
            get: qq => qq.isDispersionEnabled,
            set: (qq, Eq) => {
              qq.isDispersionEnabled = Eq
            }
          },
          metadata: Eq
        }, AE, cE), (0, vq.f)(qq, null, Pq, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isScatteringEnabled" in qq,
            get: qq => qq.isScatteringEnabled,
            set: (qq, Eq) => {
              qq.isScatteringEnabled = Eq
            }
          },
          metadata: Eq
        }, uE, BE), (0, vq.f)(qq, null, rq, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAlbedoToTintRefraction" in qq,
            get: qq => qq.useAlbedoToTintRefraction,
            set: (qq, Eq) => {
              qq.useAlbedoToTintRefraction = Eq
            }
          },
          metadata: Eq
        }, HE, oE), (0, vq.f)(qq, null, nq, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAlbedoToTintTranslucency" in qq,
            get: qq => qq.useAlbedoToTintTranslucency,
            set: (qq, Eq) => {
              qq.useAlbedoToTintTranslucency = Eq
            }
          },
          metadata: Eq
        }, PE, QE), (0, vq.f)(qq, null, bq, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "thicknessTexture" in qq,
            get: qq => qq.thicknessTexture,
            set: (qq, Eq) => {
              qq.thicknessTexture = Eq
            }
          },
          metadata: Eq
        }, yE, tE), (0, vq.f)(qq, null, iq, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "refractionTexture" in qq,
            get: qq => qq.refractionTexture,
            set: (qq, Eq) => {
              qq.refractionTexture = Eq
            }
          },
          metadata: Eq
        }, rE, vE), (0, vq.f)(qq, null, Zq, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: qq => "indexOfRefraction" in qq,
            get: qq => qq.indexOfRefraction,
            set: (qq, Eq) => {
              qq.indexOfRefraction = Eq
            }
          },
          metadata: Eq
        }, hE, nE), (0, vq.f)(qq, null, Mq, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: qq => "invertRefractionY" in qq,
            get: qq => qq.invertRefractionY,
            set: (qq, Eq) => {
              qq.invertRefractionY = Eq
            }
          },
          metadata: Eq
        }, ZE, fE), (0, vq.f)(qq, null, Tq, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: qq => "linkRefractionWithTransparency" in qq,
            get: qq => qq.linkRefractionWithTransparency,
            set: (qq, Eq) => {
              qq.linkRefractionWithTransparency = Eq
            }
          },
          metadata: Eq
        }, ME, TE), (0, vq.f)(qq, null, Fq, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "useMaskFromThicknessTexture" in qq,
            get: qq => qq.useMaskFromThicknessTexture,
            set: (qq, Eq) => {
              qq.useMaskFromThicknessTexture = Eq
            }
          },
          metadata: Eq
        }, CE, IE), (0, vq.f)(qq, null, Xq, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "refractionIntensityTexture" in qq,
            get: qq => qq.refractionIntensityTexture,
            set: (qq, Eq) => {
              qq.refractionIntensityTexture = Eq
            }
          },
          metadata: Eq
        }, eE, DE), (0, vq.f)(qq, null, wq, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "translucencyIntensityTexture" in qq,
            get: qq => qq.translucencyIntensityTexture,
            set: (qq, Eq) => {
              qq.translucencyIntensityTexture = Eq
            }
          },
          metadata: Eq
        }, qg, Eg), (0, vq.f)(qq, null, Iq, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "translucencyColorTexture" in qq,
            get: qq => qq.translucencyColorTexture,
            set: (qq, Eq) => {
              qq.translucencyColorTexture = Eq
            }
          },
          metadata: Eq
        }, lg, Og), (0, vq.f)(qq, null, Dq, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: qq => "useGltfStyleTextures" in qq,
            get: qq => qq.useGltfStyleTextures,
            set: (qq, Eq) => {
              qq.useGltfStyleTextures = Eq
            }
          },
          metadata: Eq
        }, mg, xg), (0, vq.f)(null, null, Qq, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: qq => "_scatteringDiffusionProfileIndex" in qq,
            get: qq => qq._scatteringDiffusionProfileIndex,
            set: (qq, Eq) => {
              qq._scatteringDiffusionProfileIndex = Eq
            }
          },
          metadata: Eq
        }, WE, NE), (0, vq.f)(null, null, yq, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "refractionIntensity" in qq,
            get: qq => qq.refractionIntensity,
            set: (qq, Eq) => {
              qq.refractionIntensity = Eq
            }
          },
          metadata: Eq
        }, aE, VE), (0, vq.f)(null, null, tq, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "translucencyIntensity" in qq,
            get: qq => qq.translucencyIntensity,
            set: (qq, Eq) => {
              qq.translucencyIntensity = Eq
            }
          },
          metadata: Eq
        }, dE, jE), (0, vq.f)(null, null, fq, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: qq => "_volumeIndexOfRefraction" in qq,
            get: qq => qq._volumeIndexOfRefraction,
            set: (qq, Eq) => {
              qq._volumeIndexOfRefraction = Eq
            }
          },
          metadata: Eq
        }, bE, iE), (0, vq.f)(null, null, zq, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: qq => "minimumThickness" in qq,
            get: qq => qq.minimumThickness,
            set: (qq, Eq) => {
              qq.minimumThickness = Eq
            }
          },
          metadata: Eq
        }, zE, SE), (0, vq.f)(null, null, Sq, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: qq => "maximumThickness" in qq,
            get: qq => qq.maximumThickness,
            set: (qq, Eq) => {
              qq.maximumThickness = Eq
            }
          },
          metadata: Eq
        }, pE, GE), (0, vq.f)(null, null, pq, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: qq => "useThicknessAsDepth" in qq,
            get: qq => qq.useThicknessAsDepth,
            set: (qq, Eq) => {
              qq.useThicknessAsDepth = Eq
            }
          },
          metadata: Eq
        }, LE, JE), (0, vq.f)(null, null, Lq, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintColor" in qq,
            get: qq => qq.tintColor,
            set: (qq, Eq) => {
              qq.tintColor = Eq
            }
          },
          metadata: Eq
        }, kE, RE), (0, vq.f)(null, null, Jq, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: qq => "tintColorAtDistance" in qq,
            get: qq => qq.tintColorAtDistance,
            set: (qq, Eq) => {
              qq.tintColorAtDistance = Eq
            }
          },
          metadata: Eq
        }, UE, FE), (0, vq.f)(null, null, Rq, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: qq => "dispersion" in qq,
            get: qq => qq.dispersion,
            set: (qq, Eq) => {
              qq.dispersion = Eq
            }
          },
          metadata: Eq
        }, sE, XE), (0, vq.f)(null, null, Uq, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: qq => "diffusionDistance" in qq,
            get: qq => qq.diffusionDistance,
            set: (qq, Eq) => {
              qq.diffusionDistance = Eq
            }
          },
          metadata: Eq
        }, wE, KE), (0, vq.f)(null, null, Kq, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "translucencyColor" in qq,
            get: qq => qq.translucencyColor,
            set: (qq, Eq) => {
              qq.translucencyColor = Eq
            }
          },
          metadata: Eq
        }, gg, Yg), (0, vq.f)(null, null, qE, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: qq => "applyAlbedoAfterSubSurface" in qq,
            get: qq => qq.applyAlbedoAfterSubSurface,
            set: (qq, Eq) => {
              qq.applyAlbedoAfterSubSurface = Eq
            }
          },
          metadata: Eq
        }, Ag, cg), (0, vq.f)(null, null, EE, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: qq => "legacyTranslucency" in qq,
            get: qq => qq.legacyTranslucency,
            set: (qq, Eq) => {
              qq.legacyTranslucency = Eq
            }
          },
          metadata: Eq
        }, ug, Bg), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, qq.DEFAULT_LEGACY_TRANSLUCENCY = !1, qq
    })();
    var cE = gq(40111),
      uE = gq(40083),
      BE = gq(40115),
      WE = gq(40123),
      NE = gq(40127),
      aE = gq(40136),
      VE = gq(40145),
      dE = gq(40150),
      jE = gq(39636);
    const HE = {
      effect: null,
      subMesh: null
    };
    class oE extends((0, VE.d)((0, aE.b)(Jq.c))) {}
    class PE extends((0, Xq.e)(oE)) {
      constructor(qq) {
        super(qq), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class QE extends((0, dE.c)(Kq.b)) {}
    let yE = (() => {
      var qq, Eq;
      let Yq, lq = QE,
        mq = [],
        xq = [];
      return qq = class extends lq {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(qq) {
          this._realTimeFiltering = qq, this.xgq(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(qq) {
          this._realTimeFilteringQuality = qq, this.xgq(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, vq.b)(this, Eq, "f")
        }
        set debugMode(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        constructor(gq, Yq) {
          super(gq, Yq, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || qq.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Gq.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = qq.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = sq.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new sq.d(0, 0, 0), this._albedoColor = new sq.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new sq.d(1, 1, 1), this._reflectionColor = new sq.d(1, 1, 1), this._emissiveColor = new sq.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = qq.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bq.c(16), this._globalAmbientColor = new sq.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Eq.set(this, (0, vq.i)(this, mq, 0)), this.debugLimit = ((0, vq.i)(this, xq), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Uq(this), this.clearCoat = new qE(this), this.iridescence = new gE(this), this.anisotropy = new lE(this), this.sheen = new mE(this), this.subSurface = new AE(this), this.detailMap = new cE.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Cq.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Tq(this.ZJ()), this.prePassConfiguration = new Fq.e
        }
        get hasRenderTargetTextures() {
          return !!(Cq.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === qq.PBRMATERIAL_OPAQUE || this._transparencyMode === qq.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === qq.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== qq.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(qq, Eq, gq) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Yq = Eq._drawWrapper;
          if (Yq.effect && this.isFrozen && Yq._wasPreviouslyReady && Yq._wasPreviouslyUsingInstances === gq) return !0;
          Eq.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Eq.materialDefines = new PE(this._eventInfo.defineNames));
          const lq = Eq.materialDefines;
          if (this._isReadyForSubMesh(Eq)) return !0;
          const Oq = this.ZJ(),
            mq = Oq.Ba();
          if (lq._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Oq.texturesEnabled)) {
            if (this._albedoTexture && Cq.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Cq.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Cq.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Cq.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Cq.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const qq = this._getReflectionTexture();
            if (qq && Cq.c.ReflectionTextureEnabled) {
              if (!qq.isReadyOrNotBlocking()) return !1;
              if (qq.irradianceTexture) {
                if (!qq.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!qq.sphericalPolynomial && qq.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Cq.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Cq.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Cq.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (mq.getCaps().standardDerivatives && this._bumpTexture && Cq.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Cq.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = lq, this._eventInfo.subMesh = Eq, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (lq._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (lq.AREALIGHTUSED || lq.CLUSTLIGHT_BATCH)
            for (let Bq = 0; Bq < qq.lightSources.length; Bq++)
              if (!qq.lightSources[Bq]._isReady()) return !1;
          if (mq.getCaps().standardDerivatives || qq.isVerticesDataPresent(Lq.g.NormalKind) || (qq.createNormals(!0), nq.b.Warn("PBRMaterial: Normals have been created for the mesh: " + qq.name)), !(0, eq.b)(Oq, qq, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const xq = Eq.effect,
            Aq = lq._areLightsDisposed,
            cq = this._prepareEffect(qq, Eq.getRenderingMesh(), lq, this.onCompiled, this.onError, gq, null);
          let uq = !1;
          if (cq)
            if (this._onEffectCreatedObservable && (HE.effect = cq, HE.subMesh = Eq, this._onEffectCreatedObservable.notifyObservers(HE)), this.allowShaderHotSwapping && xq && !cq.isReady()) {
              if (lq.markAsUnprocessed(), uq = this.isFrozen, Aq) return lq._areLightsDisposed = !0, !1
            } else Oq.resetCachedMaterial(), Eq.setEffect(cq, lq, this._materialContext);
          return !(!Eq.effect || !Eq.effect.isReady()) && (lq._renderId = Oq.getRenderId(), Yq._wasPreviouslyReady = !uq, Yq._wasPreviouslyUsingInstances = !!gq, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Eq, gq, Yq) {
          let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Eq, gq, Yq, mq, xq), !Yq.isDirty) return null;
          Yq.markAsProcessed();
          const Aq = this.ZJ().Ba(),
            cq = new Iq.c;
          let uq = 0;
          Yq.USESPHERICALINVERTEX && cq.addFallback(uq++, "USESPHERICALINVERTEX"), Yq.FOG && cq.addFallback(uq, "FOG"), Yq.SPECULARAA && cq.addFallback(uq, "SPECULARAA"), Yq.POINTSIZE && cq.addFallback(uq, "POINTSIZE"), Yq.LOGARITHMICDEPTH && cq.addFallback(uq, "LOGARITHMICDEPTH"), Yq.PARALLAX && cq.addFallback(uq, "PARALLAX"), Yq.PARALLAX_RHS && cq.addFallback(uq, "PARALLAX_RHS"), Yq.PARALLAXOCCLUSION && cq.addFallback(uq++, "PARALLAXOCCLUSION"), Yq.ENVIRONMENTBRDF && cq.addFallback(uq++, "ENVIRONMENTBRDF"), Yq.TANGENT && cq.addFallback(uq++, "TANGENT"), Yq.BUMP && cq.addFallback(uq++, "BUMP"), uq = (0, eq.z)(Yq, cq, this._maxSimultaneousLights, uq), Yq.SPECULARTERM && cq.addFallback(uq++, "SPECULARTERM"), Yq.USESPHERICALFROMREFLECTIONMAP && cq.addFallback(uq++, "USESPHERICALFROMREFLECTIONMAP"), Yq.USEIRRADIANCEMAP && cq.addFallback(uq++, "USEIRRADIANCEMAP"), Yq.LIGHTMAP && cq.addFallback(uq++, "LIGHTMAP"), Yq.NORMAL && cq.addFallback(uq++, "NORMAL"), Yq.AMBIENT && cq.addFallback(uq++, "AMBIENT"), Yq.EMISSIVE && cq.addFallback(uq++, "EMISSIVE"), Yq.VERTEXCOLOR && cq.addFallback(uq++, "VERTEXCOLOR"), Yq.MORPHTARGETS && cq.addFallback(uq++, "MORPHTARGETS"), Yq.MULTIVIEW && cq.addFallback(0, "MULTIVIEW");
          const Bq = [Lq.g.PositionKind];
          Yq.NORMAL && Bq.push(Lq.g.NormalKind), Yq.TANGENT && Bq.push(Lq.g.TangentKind);
          for (let qq = 1; qq <= 6; ++qq) Yq["UV" + qq] && Bq.push(`uv${1===qq?"":qq}`);
          Yq.VERTEXCOLOR && Bq.push(Lq.g.ColorKind), (0, eq.G)(Bq, Eq, Yq, cq), (0, eq.J)(Bq, Yq), (0, eq.M)(Bq, Eq, Yq), (0, eq.D)(Bq, Eq, Yq);
          let Wq = "pbr";
          const Nq = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            aq = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, eq.rb)(Nq, aq, !0);
          const Vq = ["Material", "Scene", "Mesh"],
            dq = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Yq.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = cq, this._eventInfo.fallbackRank = uq, this._eventInfo.defines = Yq, this._eventInfo.uniforms = Nq, this._eventInfo.attributes = Bq, this._eventInfo.samplers = aq, this._eventInfo.uniformBuffersNames = Vq, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eq, this._eventInfo.indexParameters = dq, this._callbackPluginEventGeneric(128, this._eventInfo), NE.e.AddUniformsAndSamplers(Nq, aq), Fq.e.AddUniforms(Nq), Fq.e.AddSamplers(aq), (0, uE.e)(Nq), this._useVertexPulling) {
            const qq = gq?.geometry;
            qq && (this._vertexPullingMetadata = (0, BE.f)(qq), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((qq, Eq) => {
              Nq.push(`vp_${Eq}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          wq.e && (wq.e.PrepareUniforms(Nq, Yq), wq.e.PrepareSamplers(aq, Yq)), (0, eq.vb)({
            uniformsNames: Nq,
            uniformBuffersNames: Vq,
            samplers: aq,
            defines: Yq,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const jq = {};
          this.customShaderNameResolve && (Wq = this.customShaderNameResolve(Wq, Nq, Vq, aq, Yq, Bq, jq));
          const Hq = Yq.toString(),
            oq = Aq.createEffect(Wq, {
              attributes: Bq,
              uniformsNames: Nq,
              uniformBuffersNames: Vq,
              samplers: aq,
              defines: Hq,
              fallbacks: cq,
              onCompiled: lq,
              onError: Oq,
              indexParameters: dq,
              processFinalCode: jq.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Yq.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: qq._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Aq);
          return this._eventInfo.customCode = void 0, oq
        }
        _prepareDefines(Eq, gq, Yq) {
          let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const mq = gq.hasThinInstances,
            xq = this.ZJ(),
            Aq = xq.Ba();
          (0, eq._)(xq, Eq, Yq, !0, this._maxSimultaneousLights, this._disableLighting), Yq._needNormals = !0, (0, eq.hb)(xq, Yq);
          const cq = this.needAlphaBlendingForMesh(Eq) && this.ZJ().useOrderIndependentTransparency;
          if ((0, eq.nb)(xq, Yq, this.canRenderToMRT && !cq), (0, eq.jb)(xq, Yq, cq), NE.e.PrepareDefines(Aq.currentRenderPassId, Eq, Yq), Yq.METALLICWORKFLOW = this.isMetallicWorkflow(), Yq._areTexturesDirty) {
            Yq._needUVs = !1;
            for (let qq = 1; qq <= 6; ++qq) Yq["MAINUV" + qq] = !1;
            if (xq.texturesEnabled) {
              Yq.ALBEDODIRECTUV = 0, Yq.BASE_WEIGHTDIRECTUV = 0, Yq.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Yq.AMBIENTDIRECTUV = 0, Yq.OPACITYDIRECTUV = 0, Yq.EMISSIVEDIRECTUV = 0, Yq.REFLECTIVITYDIRECTUV = 0, Yq.MICROSURFACEMAPDIRECTUV = 0, Yq.METALLIC_REFLECTANCEDIRECTUV = 0, Yq.REFLECTANCEDIRECTUV = 0, Yq.BUMPDIRECTUV = 0, Yq.LIGHTMAPDIRECTUV = 0, Aq.getCaps().textureLOD && (Yq.LODBASEDMICROSFURACE = !0), this._albedoTexture && Cq.c.DiffuseTextureEnabled ? ((0, eq.bb)(this._albedoTexture, Yq, "ALBEDO"), Yq.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Yq.ALBEDO = !1, this._baseWeightTexture && Cq.c.BaseWeightTextureEnabled ? (0, eq.bb)(this._baseWeightTexture, Yq, "BASE_WEIGHT") : Yq.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Cq.c.BaseDiffuseRoughnessTextureEnabled ? (0, eq.bb)(this._baseDiffuseRoughnessTexture, Yq, "BASE_DIFFUSE_ROUGHNESS") : Yq.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Cq.c.AmbientTextureEnabled ? ((0, eq.bb)(this._ambientTexture, Yq, "AMBIENT"), Yq.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Yq.AMBIENT = !1, this._opacityTexture && Cq.c.OpacityTextureEnabled ? ((0, eq.bb)(this._opacityTexture, Yq, "OPACITY"), Yq.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Yq.OPACITY = !1;
              const qq = this._getReflectionTexture(),
                Eq = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Aq.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, eq.W)(xq, qq, Yq, this.realTimeFiltering, this.realTimeFilteringQuality, !Eq), this._lightmapTexture && Cq.c.LightmapTextureEnabled ? ((0, eq.bb)(this._lightmapTexture, Yq, "LIGHTMAP"), Yq.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Yq.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Yq.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Yq.LIGHTMAP = !1, this._emissiveTexture && Cq.c.EmissiveTextureEnabled ? ((0, eq.bb)(this._emissiveTexture, Yq, "EMISSIVE"), Yq.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Yq.EMISSIVE = !1, Cq.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, eq.bb)(this._metallicTexture, Yq, "REFLECTIVITY"), Yq.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Yq.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Yq.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Yq.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Yq.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, eq.bb)(this._reflectivityTexture, Yq, "REFLECTIVITY"), Yq.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Yq.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Yq.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Yq.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Yq.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, eq.bb)(this._metallicReflectanceTexture, Yq, "METALLIC_REFLECTANCE"), Yq.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Yq.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, eq.bb)(this._reflectanceTexture, Yq, "REFLECTANCE"), Yq.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Yq.REFLECTANCE = !1) : (Yq.METALLIC_REFLECTANCE = !1, Yq.REFLECTANCE = !1), this._microSurfaceTexture ? (0, eq.bb)(this._microSurfaceTexture, Yq, "MICROSURFACEMAP") : Yq.MICROSURFACEMAP = !1) : (Yq.REFLECTIVITY = !1, Yq.MICROSURFACEMAP = !1), Aq.getCaps().standardDerivatives && this._bumpTexture && Cq.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, eq.bb)(this._bumpTexture, Yq, "BUMP"), this._useParallax && this._albedoTexture && Cq.c.DiffuseTextureEnabled ? (Yq.PARALLAX = !0, Yq.PARALLAX_RHS = xq.useRightHandedSystem, Yq.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Yq.PARALLAX = !1, Yq.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Yq.BUMP = !1, Yq.PARALLAX = !1, Yq.PARALLAX_RHS = !1, Yq.PARALLAXOCCLUSION = !1, Yq.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Cq.c.ReflectionTextureEnabled ? (Yq.ENVIRONMENTBRDF = !0, Yq.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Yq.ENVIRONMENTBRDF = !1, Yq.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Yq.ALPHAFROMALBEDO = !0 : Yq.ALPHAFROMALBEDO = !1
            }
            Yq.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === qq.LIGHTFALLOFF_STANDARD ? (Yq.USEPHYSICALLIGHTFALLOFF = !1, Yq.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === qq.LIGHTFALLOFF_GLTF ? (Yq.USEPHYSICALLIGHTFALLOFF = !1, Yq.USEGLTFLIGHTFALLOFF = !0) : (Yq.USEPHYSICALLIGHTFALLOFF = !0, Yq.USEGLTFLIGHTFALLOFF = !1), Yq.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Yq.TWOSIDEDLIGHTING = !0 : Yq.TWOSIDEDLIGHTING = !1, Yq.MIRRORED = !!xq._mirroredCameraPosition, Yq.SPECULARAA = Aq.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Yq._areTexturesDirty || Yq._areMiscDirty) && (Yq.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Yq.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Yq.ALPHABLEND = this.needAlphaBlendingForMesh(Eq), Yq.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Yq.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Yq._areTexturesDirty && (Yq.TEXTURE_REPETITION_MODE = Aq.version > 1 || Aq.isWebGPU ? this.textureRepetitionMode : 0), Yq._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Yq), Yq.FORCENORMALFORWARD = this._forceNormalForward, Yq.RADIANCEOCCLUSION = this._useRadianceOcclusion, Yq.HORIZONOCCLUSION = this._useHorizonOcclusion, Yq._areMiscDirty && ((0, eq.fb)(Eq, xq, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eq), Yq, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gq, this._isVertexOutputInvariant), Yq.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Eq.isVerticesDataPresent(Lq.g.NormalKind), Yq.DEBUGMODE = this._debugMode), (0, eq.V)(xq, Aq, this, Yq, !!lq, Oq, mq), this._eventInfo.defines = Yq, this._eventInfo.mesh = Eq, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, eq.R)(Eq, Yq, !0, !0, !0, this._transparencyMode !== qq.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(qq, Eq, gq) {
          const Yq = {
            clipPlane: !1,
            useInstances: !1,
            ...gq
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const gq = new PE(this._eventInfo.defineNames),
              lq = this._prepareEffect(qq, qq, gq, void 0, void 0, Yq.useInstances, Yq.clipPlane);
            this._onEffectCreatedObservable && (HE.effect = lq, HE.subMesh = null, this._onEffectCreatedObservable.notifyObservers(HE)), lq.isReady() ? Eq && Eq(this) : lq.onCompileObservable.add((() => {
              Eq && Eq(this)
            }))
          })()
        }
        buildUniformLayout() {
          const qq = this._uniformBuffer;
          qq.addUniform("vAlbedoInfos", 2), qq.addUniform("vBaseWeightInfos", 2), qq.addUniform("vBaseDiffuseRoughnessInfos", 2), qq.addUniform("vAmbientInfos", 4), qq.addUniform("vOpacityInfos", 2), qq.addUniform("vEmissiveInfos", 2), qq.addUniform("vLightmapInfos", 2), qq.addUniform("vReflectivityInfos", 3), qq.addUniform("vMicroSurfaceSamplerInfos", 2), qq.addUniform("vBumpInfos", 3), qq.addUniform("albedoMatrix", 16), qq.addUniform("baseWeightMatrix", 16), qq.addUniform("baseDiffuseRoughnessMatrix", 16), qq.addUniform("ambientMatrix", 16), qq.addUniform("opacityMatrix", 16), qq.addUniform("emissiveMatrix", 16), qq.addUniform("lightmapMatrix", 16), qq.addUniform("reflectivityMatrix", 16), qq.addUniform("microSurfaceSamplerMatrix", 16), qq.addUniform("bumpMatrix", 16), qq.addUniform("vTangentSpaceParams", 2), qq.addUniform("vAlbedoColor", 4), qq.addUniform("baseWeight", 1), qq.addUniform("baseDiffuseRoughness", 1), qq.addUniform("vLightingIntensity", 4), qq.addUniform("pointSize", 1), qq.addUniform("vReflectivityColor", 4), qq.addUniform("vEmissiveColor", 3), qq.addUniform("vAmbientColor", 3), qq.addUniform("vDebugMode", 2), qq.addUniform("vMetallicReflectanceFactors", 4), qq.addUniform("vMetallicReflectanceInfos", 2), qq.addUniform("metallicReflectanceMatrix", 16), qq.addUniform("vReflectanceInfos", 2), qq.addUniform("reflectanceMatrix", 16), qq.addUniform("cameraInfo", 4), qq.addUniform("vTextureRepetitionHexTilingParams", 4), (0, eq.pb)(qq, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(qq, Eq, gq) {
          const Yq = this.ZJ(),
            lq = gq.materialDefines;
          if (!lq) return;
          const Oq = gq.effect;
          if (!Oq) return;
          this._activeEffect = Oq, Eq.getMeshUniformBuffer().bindToEffect(Oq, "Mesh"), Eq.transferToEffect(qq);
          const mq = Yq.Ba();
          this._uniformBuffer.bindToEffect(Oq, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Yq, Eq, qq, this.isFrozen), NE.e.Bind(mq.currentRenderPassId, this._activeEffect, Eq, qq, this);
          const xq = Yq.activeCamera;
          xq ? this._uniformBuffer.updateFloat4("cameraInfo", xq.minZ, xq.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Aq = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Aq[0], Aq[1], Aq[2], Aq[3]), this._eventInfo.subMesh = gq, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), lq.OBJECTSPACE_NORMALMAP && (qq.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const cq = this._mustRebind(Yq, Oq, gq, Eq.visibility),
            uq = mq._features.needToAlwaysBindUniformBuffers;
          (0, eq.c)(Eq, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BE.e)(this._activeEffect, this._vertexPullingMetadata);
          let Bq = null;
          const Wq = this._uniformBuffer;
          if (cq) {
            if (this.bindViewProjection(Oq), Bq = this._getReflectionTexture(), !Wq.useUbo || !this.isFrozen || !Wq.isSync || gq._drawWrapper._forceRebindOnNextCall) {
              if (Yq.texturesEnabled && (this._albedoTexture && Cq.c.DiffuseTextureEnabled && (Wq.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, eq.w)(this._albedoTexture, Wq, "albedo")), this._baseWeightTexture && Cq.c.BaseWeightTextureEnabled && (Wq.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, eq.w)(this._baseWeightTexture, Wq, "baseWeight")), this._baseDiffuseRoughnessTexture && Cq.c.BaseDiffuseRoughnessTextureEnabled && (Wq.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, eq.w)(this._baseDiffuseRoughnessTexture, Wq, "baseDiffuseRoughness")), this._ambientTexture && Cq.c.AmbientTextureEnabled && (Wq.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, eq.w)(this._ambientTexture, Wq, "ambient")), this._opacityTexture && Cq.c.OpacityTextureEnabled && (Wq.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, eq.w)(this._opacityTexture, Wq, "opacity")), this._emissiveTexture && Cq.c.EmissiveTextureEnabled && (Wq.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, eq.w)(this._emissiveTexture, Wq, "emissive")), this._lightmapTexture && Cq.c.LightmapTextureEnabled && (Wq.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, eq.w)(this._lightmapTexture, Wq, "lightmap")), Cq.c.SpecularTextureEnabled && (this._metallicTexture ? (Wq.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, eq.w)(this._metallicTexture, Wq, "reflectivity")) : this._reflectivityTexture && (Wq.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, eq.w)(this._reflectivityTexture, Wq, "reflectivity")), this._metallicReflectanceTexture && (Wq.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, eq.w)(this._metallicReflectanceTexture, Wq, "metallicReflectance")), this._reflectanceTexture && lq.REFLECTANCE && (Wq.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, eq.w)(this._reflectanceTexture, Wq, "reflectance")), this._microSurfaceTexture && (Wq.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, eq.w)(this._microSurfaceTexture, Wq, "microSurfaceSampler"))), this._bumpTexture && mq.getCaps().standardDerivatives && Cq.c.BumpTextureEnabled && !this._disableBumpMap && (Wq.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, eq.w)(this._bumpTexture, Wq, "bump"), Yq._mirroredCameraPosition ? Wq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, eq.i)(Yq, lq, Wq, this._reflectionColor, Bq, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Wq.updateFloat("pointSize", this.pointSize), lq.METALLICWORKFLOW) {
                sq.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, sq.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const qq = this.subSurface?._indexOfRefraction ?? 1.5,
                  Eq = 1;
                sq.k.Color4[0].b = qq;
                const gq = Math.pow((qq - Eq) / (qq + Eq), 2);
                sq.k.Color4[0].a = gq, Wq.updateDirectColor4("vReflectivityColor", sq.k.Color4[0]), Wq.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Wq.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Wq.updateColor3("vEmissiveColor", Cq.c.EmissiveTextureEnabled ? this._emissiveColor : sq.d.BlackReadOnly), !lq.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Wq.updateColor4("vAlbedoColor", this._albedoColor, 1) : Wq.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Wq.updateFloat("baseWeight", this._baseWeight), Wq.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Yq.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Wq.updateVector4("vLightingIntensity", this._lightingInfos), Yq.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Wq.updateColor3("vAmbientColor", this._globalAmbientColor), Wq.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Yq.texturesEnabled && (this._albedoTexture && Cq.c.DiffuseTextureEnabled && Wq.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Cq.c.BaseWeightTextureEnabled && Wq.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Cq.c.BaseDiffuseRoughnessTextureEnabled && Wq.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Cq.c.AmbientTextureEnabled && Wq.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Cq.c.OpacityTextureEnabled && Wq.setTexture("opacitySampler", this._opacityTexture), (0, eq.l)(Yq, lq, Wq, Bq, this.realTimeFiltering), lq.ENVIRONMENTBRDF && Wq.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Cq.c.EmissiveTextureEnabled && Wq.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Cq.c.LightmapTextureEnabled && Wq.setTexture("lightmapSampler", this._lightmapTexture), Cq.c.SpecularTextureEnabled && (this._metallicTexture ? Wq.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Wq.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Wq.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && lq.REFLECTANCE && Wq.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Wq.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && mq.getCaps().standardDerivatives && Cq.c.BumpTextureEnabled && !this._disableBumpMap && Wq.setTexture("bumpSampler", this._bumpTexture)), this.ZJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Eq) && this.ZJ().depthPeelingRenderer.bind(Oq), this._eventInfo.subMesh = gq, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, uE.i)(this._activeEffect, this, Yq), this.bindEyePosition(Oq)
          } else uq && (this._needToBindSceneUbo = !0);
          !cq && this.isFrozen && !uq || !Yq.lightsEnabled || this._disableLighting || (0, eq.n)(Yq, Eq, this._activeEffect, lq, this._maxSimultaneousLights), !cq && this.isFrozen || ((Yq.fogEnabled && Eq.applyFog && Yq.fogMode !== pq.i.FOGMODE_NONE || Bq || this.subSurface.refractionTexture || Eq.receiveShadows || lq.PREPASS || lq.CLUSTLIGHT_BATCH) && this.bindView(Oq), (0, eq.f)(Yq, Eq, this._activeEffect, !0), lq.NUM_MORPH_INFLUENCERS && (0, eq.p)(Eq, this._activeEffect), lq.BAKED_VERTEX_ANIMATION_TEXTURE && Eq.bakedVertexAnimationManager?.bind(Oq, lq.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, eq.o)(lq, this._activeEffect, Yq)), this._afterBind(Eq, this._activeEffect, gq), Wq.update()
        }
        getAnimatables() {
          const qq = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && qq.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && qq.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && qq.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && qq.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && qq.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && qq.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && qq.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? qq.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && qq.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && qq.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && qq.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && qq.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && qq.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && qq.push(this._microSurfaceTexture), qq
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.ZJ().environmentTexture
        }
        getActiveTextures() {
          const qq = super.getActiveTextures();
          return this._albedoTexture && qq.push(this._albedoTexture), this._baseWeightTexture && qq.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && qq.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && qq.push(this._ambientTexture), this._opacityTexture && qq.push(this._opacityTexture), this._reflectionTexture && qq.push(this._reflectionTexture), this._emissiveTexture && qq.push(this._emissiveTexture), this._reflectivityTexture && qq.push(this._reflectivityTexture), this._metallicTexture && qq.push(this._metallicTexture), this._metallicReflectanceTexture && qq.push(this._metallicReflectanceTexture), this._reflectanceTexture && qq.push(this._reflectanceTexture), this._microSurfaceTexture && qq.push(this._microSurfaceTexture), this._bumpTexture && qq.push(this._bumpTexture), this._lightmapTexture && qq.push(this._lightmapTexture), qq
        }
        hasTexture(qq) {
          return !!super.hasTexture(qq) || (this._albedoTexture === qq || (this._baseWeightTexture === qq || (this._baseDiffuseRoughnessTexture === qq || (this._ambientTexture === qq || (this._opacityTexture === qq || (this._reflectionTexture === qq || (this._emissiveTexture === qq || (this._reflectivityTexture === qq || (this._metallicTexture === qq || (this._metallicReflectanceTexture === qq || (this._reflectanceTexture === qq || (this._microSurfaceTexture === qq || (this._bumpTexture === qq || this._lightmapTexture === qq)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const qq = this.ZJ().enableSubSurfaceForPrePass();
          return qq && (qq.enabled = !0), !0
        }
        dispose(qq, Eq) {
          this._breakShaderLoadedCheck = !0, Eq && (this._environmentBRDFTexture && this.ZJ().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(qq, Eq)
        }
      }, Eq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(lq[Symbol.metadata] ?? null) : void 0;
        Yq = [(0, hq.f)("_markAllSubMeshesAsMiscDirty")], (0, vq.f)(qq, null, Yq, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "debugMode" in qq,
            get: qq => qq.debugMode,
            set: (qq, Eq) => {
              qq.debugMode = Eq
            }
          },
          metadata: Eq
        }, mq, xq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq.PBRMATERIAL_OPAQUE = Oq.e.MATERIAL_OPAQUE, qq.PBRMATERIAL_ALPHATEST = Oq.e.MATERIAL_ALPHATEST, qq.PBRMATERIAL_ALPHABLEND = Oq.e.MATERIAL_ALPHABLEND, qq.PBRMATERIAL_ALPHATESTANDBLEND = Oq.e.MATERIAL_ALPHATESTANDBLEND, qq.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, qq.LIGHTFALLOFF_PHYSICAL = 0, qq.LIGHTFALLOFF_GLTF = 1, qq.LIGHTFALLOFF_STANDARD = 2, qq.ForceGLSL = !1, qq._ShaderLoader = new WE.c((() => [Promise.all([gq.e(308), gq.e(319)]).then((() => gq(61497))), Promise.all([gq.e(313), gq.e(309), gq.e(373), gq.e(322), gq.e(372)]).then((() => gq(61523)))]), (() => [Promise.all([gq.e(327), gq.e(329), gq.e(336)]).then((() => gq(61591))), Promise.all([gq.e(327), gq.e(330), gq.e(376), gq.e(340), gq.e(375)]).then((() => gq(61610)))])), qq
    })();
    Object.getOwnPropertyDescriptor(yE.prototype, "decalMap") || Object.defineProperty(yE.prototype, "decalMap", (0, jE.e)("PBRBaseMaterial", "decalMap")), (0, gq(41585).e)();
    var tE = gq(39779);
    var rE = gq(39845),
      vE = gq(41568),
      hE = gq(39593),
      nE = gq(39608),
      bE = gq(39703);
    let iE = !1;
    const ZE = new sq.g,
      fE = new sq.g;
    class ME extends vE.c {
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
      set wrapU(qq) {
        if (this._textures)
          for (let Eq = 0; Eq < this._textures.length; Eq++) this._textures[Eq].wrapU = qq
      }
      set wrapV(qq) {
        if (this._textures)
          for (let Eq = 0; Eq < this._textures.length; Eq++) this._textures[Eq].wrapV = qq
      }
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        const mq = !(!lq || !lq.generateMipMaps) && lq.generateMipMaps,
          xq = !(!lq || !lq.generateDepthTexture) && lq.generateDepthTexture,
          Aq = lq && lq.depthTextureFormat ? lq.depthTextureFormat : 15,
          cq = !lq || void 0 === lq.doNotChangeAspectRatio || lq.doNotChangeAspectRatio,
          uq = !(!lq || !lq.drawOnlyOnFirstAttachmentByDefault) && lq.drawOnlyOnFirstAttachmentByDefault;
        if (super(qq, Eq, Yq, mq, cq, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), iE || (iE = !0, nE.ThinEngine.prototype.restoreSingleAttachment = function() {
            const qq = this._gl;
            this.bindAttachments([qq.BACK])
          }, nE.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const qq = this._gl;
            this.bindAttachments([qq.COLOR_ATTACHMENT0])
          }, nE.ThinEngine.prototype.buildTextureLayout = function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const gq = this._gl,
              Yq = [];
            if (Eq) Yq.push(gq.BACK);
            else
              for (let lq = 0; lq < qq.length; lq++) qq[lq] ? Yq.push(gq["COLOR_ATTACHMENT" + lq]) : Yq.push(gq.NONE);
            return Yq
          }, nE.ThinEngine.prototype.bindAttachments = function(qq) {
            const Eq = this._gl,
              gq = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, gq)
              for (let Yq = 0; Yq < qq.length; Yq++) qq[Yq] !== Eq.NONE && gq[Yq] && (0, bE.m)(gq[Yq].format) && (this._integerMRTAttachmentsMask |= 1 << Yq);
            Eq.drawBuffers(qq)
          }, nE.ThinEngine.prototype.clearAttachments = function(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const mq = this._currentRenderTarget?.textures;
            let xq = !1;
            if (gq && qq && mq)
              for (let Aq = 0; Aq < Eq.length; Aq++) {
                const qq = mq[Aq];
                if (Eq[Aq] !== this._gl.NONE && qq && (0, bE.m)(qq.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  xq = !0;
                  break
                }
              }
            if (!xq || !qq || !mq) return this.bindAttachments(Eq), void this.clear(qq, gq, Yq, lq, Oq);
            this.bindAttachments(Eq), this._applyColorWriteState();
            for (let Aq = 0; Aq < Eq.length; Aq++) {
              const gq = mq[Aq];
              if (Eq[Aq] !== this._gl.NONE && gq) {
                let Eq = qq;
                if ((0, bE.m)(gq.format)) {
                  const Yq = (0, bE.o)(gq.type);
                  Eq = Yq ? ZE : fE;
                  const lq = Yq ? 255 : 1;
                  Eq.r = Math.round(qq.r * lq), Eq.g = Math.round(qq.g * lq), Eq.b = Math.round(qq.b * lq), Eq.a = Math.round(qq.a * lq)
                }
                this._clearColorAttachment(Aq, Eq, gq.format, gq.type)
              }
            }
            if (Yq || lq) {
              const qq = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Yq, lq, Oq)
              } finally {
                this._integerMRTAttachmentsMask = qq
              }
            }
          }, nE.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gq = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, qq.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(qq), Eq || this.generateMipMapsMultiFramebuffer(qq), gq && (qq._MSAAFramebuffer && this._bindUnboundFramebuffer(qq._framebuffer), gq()), this._bindUnboundFramebuffer(null)
          }, nE.ThinEngine.prototype.createMultipleRenderTarget = function(qq, Eq) {
            let gq, Yq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              lq = !1,
              Oq = !0,
              mq = !1,
              xq = !1,
              Aq = 1,
              cq = 1,
              uq = [],
              Bq = [],
              Wq = [],
              Nq = [],
              aq = [],
              Vq = [],
              dq = [],
              jq = [],
              Hq = [],
              oq = !1;
            const Pq = this._createHardwareRenderTargetWrapper(!0, !1, qq);
            void 0 !== Eq && (lq = void 0 !== Eq.generateMipMaps && Eq.generateMipMaps, Oq = void 0 === Eq.generateDepthBuffer || Eq.generateDepthBuffer, mq = void 0 !== Eq.generateStencilBuffer && Eq.generateStencilBuffer, xq = void 0 !== Eq.generateDepthTexture && Eq.generateDepthTexture, Aq = Eq.wmq ?? 1, cq = Eq.samples ?? cq, uq = Eq.types || uq, Bq = Eq.samplingModes || Bq, Wq = Eq.useSRGBBuffers || Wq, Nq = Eq.formats || Nq, aq = Eq.targetTypes || aq, Vq = Eq.faceIndex || Vq, dq = Eq.layerIndex || dq, jq = Eq.layerCounts || jq, Hq = Eq.labels || Hq, oq = Eq.dontCreateTextures ?? !1, this.Ra > 1 && (13 === Eq.depthTextureFormat || 17 === Eq.depthTextureFormat || 16 === Eq.depthTextureFormat || 14 === Eq.depthTextureFormat || 18 === Eq.depthTextureFormat) && (gq = Eq.depthTextureFormat)), void 0 === gq && (gq = mq ? 13 : 14);
            const Qq = this._gl,
              yq = this._currentFramebuffer,
              tq = Qq.createFramebuffer();
            this._bindUnboundFramebuffer(tq);
            const rq = qq.width ?? qq,
              vq = qq.height ?? qq,
              hq = [],
              bq = [],
              iq = this.Ra > 1 && (13 === gq || 17 === gq || 18 === gq);
            Pq.label = Eq?.label ?? "MultiRenderTargetWrapper", Pq._framebuffer = tq, Pq._generateDepthBuffer = xq || Oq, Pq._generateStencilBuffer = xq ? iq : mq, Pq._depthStencilBuffer = this._setupFramebufferDepthAttachments(Pq._generateStencilBuffer, Pq._generateDepthBuffer, rq, vq, 1, gq), Pq._attachments = bq;
            for (let Zq = 0; Zq < Aq; Zq++) {
              let qq = Bq[Zq] || 3,
                Eq = uq[Zq] || 0,
                gq = Wq[Zq] || !1;
              const Yq = Nq[Zq] || 5,
                Oq = aq[Zq] || 3553,
                mq = jq[Zq] ?? 1;
              (1 !== Eq || this._caps.textureFloatLinearFiltering) && (2 !== Eq || this._caps.textureHalfFloatLinearFiltering) || (qq = 1);
              const xq = this._getSamplingParameters(qq, lq);
              1 !== Eq || this._caps.textureFloat || (Eq = 0, nq.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), gq = gq && this._caps.supportSRGBBuffers && (this.Ra > 1 || this.isWebGPU);
              const Aq = this.Ra > 1,
                cq = Qq[Aq ? "COLOR_ATTACHMENT" + Zq : "COLOR_ATTACHMENT" + Zq + "_WEBGL"];
              if (bq.push(cq), -1 === Oq || oq) continue;
              const Vq = new hE.c(this, 6);
              hq[Zq] = Vq, Qq.activeTexture(Qq["TEXTURE" + Zq]), Qq.bindTexture(Oq, Vq._hardwareTexture.underlyingResource), Qq.texParameteri(Oq, Qq.TEXTURE_MAG_FILTER, xq.mag), Qq.texParameteri(Oq, Qq.TEXTURE_MIN_FILTER, xq.min), Qq.texParameteri(Oq, Qq.TEXTURE_WRAP_S, Qq.CLAMP_TO_EDGE), Qq.texParameteri(Oq, Qq.TEXTURE_WRAP_T, Qq.CLAMP_TO_EDGE);
              const dq = this._getRGBABufferInternalSizedFormat(Eq, Yq, gq),
                yq = this._getInternalFormat(Yq),
                tq = this._getWebGLTextureType(Eq);
              if (!Aq || 35866 !== Oq && 32879 !== Oq)
                if (34067 === Oq) {
                  for (let qq = 0; qq < 6; qq++) Qq.texImage2D(Qq.TEXTURE_CUBE_MAP_POSITIVE_X + qq, 0, dq, rq, vq, 0, yq, tq, null);
                  Vq.isCube = !0
                } else Qq.texImage2D(Qq.TEXTURE_2D, 0, dq, rq, vq, 0, yq, tq, null);
              else 35866 === Oq ? Vq.is2DArray = !0 : Vq.is3D = !0, Vq.baseDepth = Vq.depth = mq, Qq.texImage3D(Oq, 0, dq, rq, vq, mq, 0, yq, tq, null);
              lq && Qq.generateMipmap(Oq), this._bindTextureDirectly(Oq, null), Vq.baseWidth = rq, Vq.baseHeight = vq, Vq.width = rq, Vq.height = vq, Vq.isReady = !0, Vq.samples = 1, Vq.generateMipMaps = lq, Vq.samplingMode = qq, Vq.type = Eq, Vq._useSRGBBuffer = gq, Vq.format = Yq, Vq.label = Hq[Zq] ?? Pq.label + "-Texture" + Zq, this._internalTexturesCache.push(Vq)
            }
            if (xq && this._caps.depthTextureExtension && !oq) {
              const qq = new hE.c(this, 14);
              let Eq = 5,
                Yq = Qq.DEPTH_COMPONENT16,
                Oq = Qq.DEPTH_COMPONENT,
                mq = Qq.UNSIGNED_SHORT,
                xq = Qq.DEPTH_ATTACHMENT;
              this.Ra < 2 ? Yq = Qq.DEPTH_COMPONENT : 14 === gq ? (Eq = 1, mq = Qq.FLOAT, Yq = Qq.DEPTH_COMPONENT32F) : 18 === gq ? (Eq = 0, mq = Qq.FLOAT_32_UNSIGNED_INT_24_8_REV, Yq = Qq.DEPTH32F_STENCIL8, Oq = Qq.DEPTH_STENCIL, xq = Qq.DEPTH_STENCIL_ATTACHMENT) : 16 === gq ? (Eq = 0, mq = Qq.UNSIGNED_INT, Yq = Qq.DEPTH_COMPONENT24, xq = Qq.DEPTH_ATTACHMENT) : 13 !== gq && 17 !== gq || (Eq = 12, mq = Qq.UNSIGNED_INT_24_8, Yq = Qq.DEPTH24_STENCIL8, Oq = Qq.DEPTH_STENCIL, xq = Qq.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Qq.TEXTURE_2D, qq, !0), Qq.texParameteri(Qq.TEXTURE_2D, Qq.TEXTURE_MAG_FILTER, Qq.NEAREST), Qq.texParameteri(Qq.TEXTURE_2D, Qq.TEXTURE_MIN_FILTER, Qq.NEAREST), Qq.texParameteri(Qq.TEXTURE_2D, Qq.TEXTURE_WRAP_S, Qq.CLAMP_TO_EDGE), Qq.texParameteri(Qq.TEXTURE_2D, Qq.TEXTURE_WRAP_T, Qq.CLAMP_TO_EDGE), Qq.texImage2D(Qq.TEXTURE_2D, 0, Yq, rq, vq, 0, Oq, mq, null), Qq.framebufferTexture2D(Qq.FRAMEBUFFER, xq, Qq.TEXTURE_2D, qq._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Qq.TEXTURE_2D, null), Pq._depthStencilTexture = qq, Pq._depthStencilTextureWithStencil = iq, qq.baseWidth = rq, qq.baseHeight = vq, qq.width = rq, qq.height = vq, qq.isReady = !0, qq.samples = 1, qq.generateMipMaps = lq, qq.samplingMode = 1, qq.format = gq, qq.type = Eq, qq.label = Pq.label + "-DepthStencil", hq[Aq] = qq, this._internalTexturesCache.push(qq)
            }
            if (Pq.setTextures(hq), Yq && Qq.drawBuffers(bq), this._bindUnboundFramebuffer(yq), Pq.setLayerAndFaceIndices(dq, Vq), this.resetTextureCache(), oq) {
              if (cq > 1) {
                const qq = Qq.createFramebuffer();
                if (!qq) throw new Error("Unable to create multi sampled framebuffer");
                Pq._samples = cq, Pq._MSAAFramebuffer = qq, Aq > 0 && Yq && (this._bindUnboundFramebuffer(qq), Qq.drawBuffers(bq), this._bindUnboundFramebuffer(yq))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Pq, cq, Yq);
            return Pq
          }, nE.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(qq, Eq) {
            let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Ra < 2 || !qq) return 1;
            if (qq.samples === Eq) return Eq;
            const Yq = this._gl;
            Eq = Math.min(Eq, this.getCaps().maxMSAASamples), qq._depthStencilBuffer && (Yq.deleteRenderbuffer(qq._depthStencilBuffer), qq._depthStencilBuffer = null), qq._MSAAFramebuffer && (Yq.deleteFramebuffer(qq._MSAAFramebuffer), qq._MSAAFramebuffer = null);
            const lq = qq._attachments.length;
            for (let mq = 0; mq < lq; mq++) {
              const Eq = qq.textures[mq]._hardwareTexture;
              Eq?.releaseMSAARenderBuffers()
            }
            if (Eq > 1 && "function" === typeof Yq.renderbufferStorageMultisample) {
              const Oq = Yq.createFramebuffer();
              if (!Oq) throw new Error("Unable to create multi sampled framebuffer");
              qq._MSAAFramebuffer = Oq, this._bindUnboundFramebuffer(Oq);
              const mq = [];
              for (let gq = 0; gq < lq; gq++) {
                const lq = qq.textures[gq],
                  Oq = lq._hardwareTexture,
                  xq = Yq[this.Ra > 1 ? "COLOR_ATTACHMENT" + gq : "COLOR_ATTACHMENT" + gq + "_WEBGL"],
                  Aq = this._createRenderBuffer(lq.width, lq.height, Eq, -1, this._getRGBABufferInternalSizedFormat(lq.type, lq.format, lq._useSRGBBuffer), xq);
                if (!Aq) throw new Error("Unable to create multi sampled framebuffer");
                Oq.addMSAARenderBuffer(Aq), lq.samples = Eq, mq.push(xq)
              }
              gq && Yq.drawBuffers(mq)
            } else this._bindUnboundFramebuffer(qq._framebuffer);
            const Oq = qq._depthStencilTexture ? qq._depthStencilTexture.format : void 0;
            return qq._depthStencilBuffer = this._setupFramebufferDepthAttachments(qq._generateStencilBuffer, qq._generateDepthBuffer, qq.width, qq.height, Eq, Oq), this._bindUnboundFramebuffer(null), qq._samples = Eq, Eq
          }, nE.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(qq) {
            const Eq = qq,
              gq = this._gl;
            if (Eq.isMulti)
              for (let Yq = 0; Yq < Eq._attachments.length; Yq++) {
                const qq = Eq.textures[Yq];
                !qq?.generateMipMaps || qq?.isCube || qq?.is3D || (this._bindTextureDirectly(gq.TEXTURE_2D, qq, !0), gq.generateMipmap(gq.TEXTURE_2D), this._bindTextureDirectly(gq.TEXTURE_2D, null))
              }
          }, nE.ThinEngine.prototype.resolveMultiFramebuffer = function(qq) {
            const Eq = qq,
              gq = this._gl;
            if (!Eq._MSAAFramebuffer || !Eq.isMulti) return;
            let Yq = Eq.resolveMSAAColors ? gq.COLOR_BUFFER_BIT : 0;
            Yq |= Eq._generateDepthBuffer && Eq.resolveMSAADepth ? gq.DEPTH_BUFFER_BIT : 0, Yq |= Eq._generateStencilBuffer && Eq.resolveMSAAStencil ? gq.STENCIL_BUFFER_BIT : 0;
            const lq = Eq._attachments,
              Oq = lq.length;
            gq.bindFramebuffer(gq.READ_FRAMEBUFFER, Eq._MSAAFramebuffer), gq.bindFramebuffer(gq.DRAW_FRAMEBUFFER, Eq._framebuffer);
            for (let mq = 0; mq < Oq; mq++) {
              const qq = Eq.textures[mq];
              for (let Eq = 0; Eq < Oq; Eq++) lq[Eq] = gq.NONE;
              lq[mq] = gq[this.Ra > 1 ? "COLOR_ATTACHMENT" + mq : "COLOR_ATTACHMENT" + mq + "_WEBGL"], gq.readBuffer(lq[mq]), gq.drawBuffers(lq), gq.blitFramebuffer(0, 0, qq.width, qq.height, 0, 0, qq.width, qq.height, Yq, gq.NEAREST)
            }
            for (let mq = 0; mq < Oq; mq++) lq[mq] = gq[this.Ra > 1 ? "COLOR_ATTACHMENT" + mq : "COLOR_ATTACHMENT" + mq + "_WEBGL"];
            gq.drawBuffers(lq), gq.bindFramebuffer(this._gl.FRAMEBUFFER, Eq._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Oq;
        const Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [],
          jq = [],
          Hq = [];
        this._initTypes(gq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, lq);
        const oq = !lq || void 0 === lq.generateDepthBuffer || lq.generateDepthBuffer,
          Pq = !(!lq || void 0 === lq.generateStencilBuffer) && lq.generateStencilBuffer,
          Qq = lq && lq.samples ? lq.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Wq,
          generateMipMaps: mq,
          generateDepthBuffer: oq,
          generateStencilBuffer: Pq,
          generateDepthTexture: xq,
          depthTextureFormat: Aq,
          types: Bq,
          wmq: gq,
          useSRGBBuffers: Nq,
          samples: Qq,
          formats: aq,
          targetTypes: Vq,
          faceIndex: dq,
          layerIndex: jq,
          layerCounts: Hq,
          labels: Oq,
          label: qq
        }, this._count = gq, this._drawOnlyOnFirstAttachmentByDefault = uq, gq > 0 && (this._createInternalTextures(), this._createTextures(Oq))
      }
      _initTypes(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        for (let uq = 0; uq < qq; uq++) cq && cq.types && void 0 !== cq.types[uq] ? Eq.push(cq.types[uq]) : Eq.push(cq && cq.defaultType ? cq.defaultType : 0), cq && cq.samplingModes && void 0 !== cq.samplingModes[uq] ? gq.push(cq.samplingModes[uq]) : gq.push(iq.d.BILINEAR_SAMPLINGMODE), cq && cq.useSRGBBuffers && void 0 !== cq.useSRGBBuffers[uq] ? Yq.push(cq.useSRGBBuffers[uq]) : Yq.push(!1), cq && cq.formats && void 0 !== cq.formats[uq] ? lq.push(cq.formats[uq]) : lq.push(5), cq && cq.targetTypes && void 0 !== cq.targetTypes[uq] ? Oq.push(cq.targetTypes[uq]) : Oq.push(3553), cq && cq.faceIndex && void 0 !== cq.faceIndex[uq] ? mq.push(cq.faceIndex[uq]) : mq.push(0), cq && cq.layerIndex && void 0 !== cq.layerIndex[uq] ? xq.push(cq.layerIndex[uq]) : xq.push(0), cq && cq.layerCounts && void 0 !== cq.layerCounts[uq] ? Aq.push(cq.layerCounts[uq]) : Aq.push(1)
      }
      _createInternaTextureIndexMapping() {
        const qq = {},
          Eq = [];
        if (!this._renderTarget) return Eq;
        const gq = this._renderTarget.textures;
        for (let Yq = 0; Yq < gq.length; Yq++) {
          const lq = gq[Yq];
          if (!lq) continue;
          const Oq = qq[lq.uniqueId];
          void 0 !== Oq ? Eq[Yq] = Oq : qq[lq.uniqueId] = Yq
        }
        return Eq
      }
      _rebuild() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || qq) return;
        const Yq = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Eq && (this._releaseTextures(), this._createTextures(gq));
        const lq = this._renderTarget.textures;
        for (let Oq = 0; Oq < lq.length; Oq++) {
          const qq = this._textures[Oq];
          void 0 !== Yq[Oq] && this._renderTarget.setTexture(lq[Yq[Oq]], Oq), qq._texture = lq[Oq], qq._texture && (qq._noMipmap = !qq._texture.useMipMaps, qq._useSRGBBuffer = qq._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let qq = 0; qq < this._textures.length; qq++) this._textures[qq]._texture = null, this._textures[qq].dispose()
      }
      _createTextures(qq) {
        const Eq = this._renderTarget.textures;
        this._textures = [];
        for (let gq = 0; gq < Eq.length; gq++) {
          const Yq = new iq.d(null, this.ZJ());
          qq?.[gq] && (Yq.name = qq[gq]), Yq._texture = Eq[gq], Yq._texture && (Yq._noMipmap = !Yq._texture.useMipMaps, Yq._useSRGBBuffer = Yq._texture._useSRGBBuffer), this._textures.push(Yq)
        }
      }
      setInternalTexture(qq, Eq) {
        let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Eq && (this._texture = qq), this.renderTarget.setTexture(qq, Eq, gq), this.textures[Eq] || (this.textures[Eq] = new iq.d(null, this.ZJ()), this.textures[Eq].name = this._textureNames?.[Eq] ?? this.textures[Eq].name), this.textures[Eq]._texture = qq, this.textures[Eq]._noMipmap = !qq.useMipMaps, this.textures[Eq]._useSRGBBuffer = qq._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Eq] = qq.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Eq] = qq.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Eq] = qq._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Eq])) {
          let gq;
          gq = qq.is2DArray ? 35866 : qq.isCube ? 34067 : qq.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Eq] = gq
        }
      }
      setLayerAndFaceIndex(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[qq] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[qq] = Eq), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[qq] = gq), this.renderTarget.setLayerAndFaceIndex(qq, Eq, gq))
      }
      setLayerAndFaceIndices(qq, Eq) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = qq, this._multiRenderTargetOptions.faceIndex = Eq, this.renderTarget.setLayerAndFaceIndices(qq, Eq))
      }
      get samples() {
        return this._samples
      }
      set samples(qq) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(qq) : this._samples = qq
      }
      resize(qq) {
        this._processSizeParameter(qq), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(qq, Eq, gq) {
        this._multiRenderTargetOptions.wmq = qq, this._count = qq;
        const Yq = [],
          lq = [],
          Oq = [],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [];
        this._textureNames = gq, this._initTypes(qq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Eq), this._multiRenderTargetOptions.types = Yq, this._multiRenderTargetOptions.samplingModes = lq, this._multiRenderTargetOptions.useSRGBBuffers = Oq, this._multiRenderTargetOptions.formats = mq, this._multiRenderTargetOptions.targetTypes = xq, this._multiRenderTargetOptions.faceIndex = Aq, this._multiRenderTargetOptions.layerIndex = cq, this._multiRenderTargetOptions.layerCounts = uq, this._multiRenderTargetOptions.labels = gq, this._rebuild(!1, !0, gq)
      }
      _unbindFrameBuffer(qq, Eq) {
        this._renderTarget && qq.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Eq)
        }))
      }
      dispose() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), qq ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const qq = this._renderTarget?.textures;
        if (qq) {
          for (let Eq = qq.length - 1; Eq >= 0; Eq--) this._textures[Eq]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var TE = gq(39911);
    class zE {
      constructor(qq) {
        this.name = TE.e.NAME_GEOMETRYBUFFERRENDERER, this.PV = qq
      }
      register() {
        this.PV._gatherRenderTargetsStage.registerStep(TE.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(qq) {
        this.PV._geometryBufferRenderer && qq.push(this.PV._geometryBufferRenderer.getGBuffer())
      }
    }
    let SE = !1;
    var pE;
    ! function(qq) {
      qq[qq.Small = 0] = "Small", qq[qq.Medium = 1] = "Medium", qq[qq.Large = 2] = "Large", qq[qq.ExtraLarge = 3] = "ExtraLarge"
    }(pE || (pE = {}));
    const GE = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      LE = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class JE {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(qq) {
        if (qq && this._enableMeshBlendTag && !this._scene.Ba().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = qq
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(qq) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = qq, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(qq, Eq) {
        qq === JE.POSITION_TEXTURE_TYPE ? (this._positionIndex = Eq, this._enablePosition = !0) : qq === JE.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Eq, this._enableVelocity = !0) : qq === JE.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Eq, this._enableVelocityLinear = !0) : qq === JE.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Eq, this._enableReflectivity = !0) : qq === JE.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Eq, this._enableDepth = !0) : qq === JE.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Eq, this._enableNormal = !0) : qq === JE.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Eq, this._enableScreenspaceDepth = !0) : qq === JE.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Eq, this._enableIrradiance = !0) : qq === JE.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Eq, this._enableObjectId = !0) : qq === JE.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Eq, this._enableMeshBlendTag = !0)
      }
      _setAttachments(qq) {
        this._attachmentsFromPrePass = qq
      }
      _linkInternalTexture(qq) {
        this._multiRenderTarget.setInternalTexture(qq, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(qq) {
        this._multiRenderTarget.renderList = qq
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(qq) {
        switch (qq) {
          case JE.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case JE.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case JE.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case JE.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case JE.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case JE.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case JE.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case JE.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case JE.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case JE.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(qq) {
        this._enableDepth = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(qq) {
        this._enableNormal = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(qq) {
        this._enablePosition = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(qq) {
        this._enableVelocity = qq, qq || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = qq
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(qq) {
        this._enableVelocityLinear = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(qq) {
        this._enableReflectivity = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(qq) {
        this._enableScreenspaceDepth = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(qq) {
        this._enableIrradiance = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(qq) {
        if (qq && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (qq && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (qq && !this._enableObjectId && !this._linkedWithPrePass) {
          const qq = this._scene.Ba(),
            Eq = Math.min(qq.getCaps().maxDrawBuffers ?? 1, 8),
            gq = this._assignRenderTargetIndices()[0] + 1;
          if (qq.getCaps().drawBuffersExtension && gq > Eq) throw new Error(`GeometryBufferRenderer: ${gq} color attachments were requested, but this engine supports at most ${Eq}`)
        }
        this._enableObjectId = qq, qq || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(qq) {
        if (this._enableMeshBlendTag !== qq) {
          if (qq) {
            const qq = this._scene.Ba();
            if (! function(qq) {
                return "NATIVE" !== qq.shaderPlatformName && (qq.isWebGPU || 2 === qq.Ra)
              }(qq)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !qq.isWebGPU && !qq.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Eq = Math.min(qq.getCaps().maxDrawBuffers ?? 1, 8),
                gq = this._assignRenderTargetIndices()[0] + 1;
              if (qq.getCaps().drawBuffersExtension && gq > Eq) throw new Error(`GeometryBufferRenderer: ${gq} color attachments were requested, but this engine supports at most ${Eq}`)
            }
          }
          this._enableMeshBlendTag = qq, qq || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get PV() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        var lq;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new sq.g(0, 0, 0, 0), this._clearDepthColor = new sq.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = qq, this._ratioOrDimensions = Eq, this._useUbo = qq.Ba().supportsUniformBuffers, this._depthFormat = gq, this._textureTypesAndFormats = Yq || {}, this._initShaderSourceAsync(), lq = JE, SE || (SE = !0, Object.defineProperty(pq.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(qq) {
            qq && qq.isSupported && (this._geometryBufferRenderer = qq)
          },
          enumerable: !0,
          configurable: !0
        }), pq.i.prototype.enableGeometryBufferRenderer = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            gq = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new lq(this, qq, Eq, gq), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, pq.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, lq._SceneComponentInitialization = qq => {
          let Eq = qq._getComponent(TE.e.NAME_GEOMETRYBUFFERRENDERER);
          Eq || (Eq = new zE(qq), qq.VYq(Eq))
        }), JE._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Ba().isWebGPU && !JE.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gq.e(328).then((() => gq(61783))), Promise.all([gq.e(327), gq.e(339)]).then((() => gq(61787)))])) : await Promise.all([gq.e(311).then((() => gq(61793))), gq.e(310).then((() => gq(61799)))]), this._shadersLoaded = !0
      }
      isReady(qq, Eq) {
        if (!this._shadersLoaded) return !1;
        const gq = qq.da();
        if (gq && gq.disableDepthWrite) return !1;
        if (function(qq) {
            return qq._isGaussianSplatting || "GaussianSplattingMesh" === (Eq = qq.getClassName()) || "GaussianSplattingStream" === Eq;
            var Eq
          }(qq.getMesh())) return !1;
        const Yq = [],
          lq = [Lq.g.PositionKind],
          Oq = qq.getMesh();
        Oq.isVerticesDataPresent(Lq.g.NormalKind) && (Yq.push("#define HAS_NORMAL_ATTRIBUTE"), lq.push(Lq.g.NormalKind));
        let mq = !1,
          xq = !1;
        if (gq) {
          let qq = !1;
          if (gq.needAlphaTestingForMesh(Oq) && gq.getAlphaTestTexture() && (Yq.push("#define ALPHATEST"), Yq.push(`#define ALPHATEST_UV${gq.getAlphaTestTexture().coordinatesIndex+1}`), qq = !0), (gq.bumpTexture || gq.normalTexture || gq.geometryNormalTexture) && Cq.c.BumpTextureEnabled) {
            const Eq = gq.bumpTexture || gq.normalTexture || gq.geometryNormalTexture;
            Yq.push("#define BUMP"), Yq.push(`#define BUMP_UV${Eq.coordinatesIndex+1}`), qq = !0
          }
          if (this._enableReflectivity) {
            let Eq = !1;
            if ("PBRMetallicRoughnessMaterial" === gq.getClassName()) gq.metallicRoughnessTexture && (Yq.push("#define ORMTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${gq.metallicRoughnessTexture.coordinatesIndex+1}`), Yq.push("#define METALLICWORKFLOW"), qq = !0, Eq = !0), null != gq.metallic && (Yq.push("#define METALLIC"), Yq.push("#define METALLICWORKFLOW"), Eq = !0), null != gq.roughness && (Yq.push("#define ROUGHNESS"), Yq.push("#define METALLICWORKFLOW"), Eq = !0), Eq && (gq.baseTexture && (Yq.push("#define ALBEDOTEXTURE"), Yq.push(`#define ALBEDO_UV${gq.baseTexture.coordinatesIndex+1}`), gq.baseTexture.gammaSpace && Yq.push("#define GAMMAALBEDO"), qq = !0), gq.baseColor && Yq.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === gq.getClassName()) gq.specularGlossinessTexture ? (Yq.push("#define SPECULARGLOSSINESSTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${gq.specularGlossinessTexture.coordinatesIndex+1}`), qq = !0, gq.specularGlossinessTexture.gammaSpace && Yq.push("#define GAMMAREFLECTIVITYTEXTURE")) : gq.specularColor && Yq.push("#define REFLECTIVITYCOLOR"), null != gq.glossiness && Yq.push("#define GLOSSINESS");
            else if ("PBRMaterial" === gq.getClassName()) gq.metallicTexture && (Yq.push("#define ORMTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${gq.metallicTexture.coordinatesIndex+1}`), Yq.push("#define METALLICWORKFLOW"), qq = !0, Eq = !0), null != gq.metallic && (Yq.push("#define METALLIC"), Yq.push("#define METALLICWORKFLOW"), Eq = !0), null != gq.roughness && (Yq.push("#define ROUGHNESS"), Yq.push("#define METALLICWORKFLOW"), Eq = !0), Eq ? (gq.albedoTexture && (Yq.push("#define ALBEDOTEXTURE"), Yq.push(`#define ALBEDO_UV${gq.albedoTexture.coordinatesIndex+1}`), gq.albedoTexture.gammaSpace && Yq.push("#define GAMMAALBEDO"), qq = !0), gq.albedoColor && Yq.push("#define ALBEDOCOLOR")) : (gq.reflectivityTexture ? (Yq.push("#define SPECULARGLOSSINESSTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${gq.reflectivityTexture.coordinatesIndex+1}`), gq.reflectivityTexture.gammaSpace && Yq.push("#define GAMMAREFLECTIVITYTEXTURE"), qq = !0) : gq.reflectivityColor && Yq.push("#define REFLECTIVITYCOLOR"), null != gq.microSurface && Yq.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === gq.getClassName()) gq.specularTexture && (Yq.push("#define REFLECTIVITYTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${gq.specularTexture.coordinatesIndex+1}`), gq.specularTexture.gammaSpace && Yq.push("#define GAMMAREFLECTIVITYTEXTURE"), qq = !0), gq.specularColor && Yq.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === gq.getClassName()) {
              const Eq = gq;
              Yq.push("#define METALLIC"), Yq.push("#define ROUGHNESS"), Eq._useRoughnessFromMetallicTextureGreen && Eq.baseMetalnessTexture ? (Yq.push("#define ORMTEXTURE"), Yq.push(`#define REFLECTIVITY_UV${Eq.baseMetalnessTexture.coordinatesIndex+1}`), qq = !0) : Eq.baseMetalnessTexture ? (Yq.push("#define METALLIC_TEXTURE"), Yq.push(`#define METALLIC_UV${Eq.baseMetalnessTexture.coordinatesIndex+1}`), qq = !0) : Eq.specularRoughnessTexture && (Yq.push("#define ROUGHNESS_TEXTURE"), Yq.push(`#define ROUGHNESS_UV${Eq.specularRoughnessTexture.coordinatesIndex+1}`), qq = !0), Eq.baseColorTexture && (Yq.push("#define ALBEDOTEXTURE"), Yq.push(`#define ALBEDO_UV${Eq.baseColorTexture.coordinatesIndex+1}`), Eq.baseColorTexture.gammaSpace && Yq.push("#define GAMMAALBEDO"), qq = !0), Eq.baseColor && Yq.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Yq.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === gq.getClassName())) {
            const Eq = gq;
            Eq.subsurfaceWeight > 0 && Eq.subsurfaceWeightTexture && (Yq.push("#define SUBSURFACE_WEIGHT"), Yq.push(`#define SUBSURFACEWEIGHT_UV${Eq.subsurfaceWeightTexture.coordinatesIndex+1}`), qq = !0), Eq.transmissionWeight > 0 && Eq.transmissionWeightTexture && (Yq.push("#define TRANSMISSION_WEIGHT"), Yq.push(`#define TRANSMISSIONWEIGHT_UV${Eq.transmissionWeightTexture.coordinatesIndex+1}`), qq = !0)
          }
          qq && (Yq.push("#define NEED_UV"), Oq.isVerticesDataPresent(Lq.g.UVKind) && (lq.push(Lq.g.UVKind), Yq.push("#define UV1"), mq = !0), Oq.isVerticesDataPresent(Lq.g.UV2Kind) && (lq.push(Lq.g.UV2Kind), Yq.push("#define UV2"), xq = !0))
        }
        if (this._enableDepth && (Yq.push("#define DEPTH"), Yq.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Yq.push("#define NORMAL"), Yq.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Yq.push("#define POSITION"), Yq.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Yq.push("#define VELOCITY"), Yq.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Oq) && Yq.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Yq.push("#define VELOCITY_LINEAR"), Yq.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Oq) && Yq.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Yq.push("#define REFLECTIVITY"), Yq.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Yq.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Yq.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Yq.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Yq.push("#define IRRADIANCE");
          const qq = this._scene;
          if (qq.environmentTexture) {
            const Eq = {};
            let lq = !1,
              Oq = 0;
            "OpenPBRMaterial" !== gq.getClassName() && "StandardMaterial" !== gq.getClassName() && "PBRMetallicRoughnessMaterial" !== gq.getClassName() && "PBRSpecularGlossinessMaterial" !== gq.getClassName() && "PBRMaterial" !== gq.getClassName() || (lq = !!gq.realtimeFiltering, Oq = gq.realtimeFilteringQuality || 0), (0, eq.W)(qq, qq.environmentTexture, Eq, lq, Oq, !0);
            for (const qq in Eq) Eq[qq] && Yq.push("#define " + qq);
            Eq.USEIRRADIANCEMAP || Yq.push("#define SPHERICAL_HARMONICS");
            const mq = qq.postProcessRenderPipelineManager.supportedPipelines.find((qq => "IBLShadowsRenderPipeline" === qq.getClassName()));
            if (mq) {
              const qq = mq;
              qq._getAccumulatedTexture() && (Yq.push("#define IBL_SHADOW_TEXTURE"), qq.coloredShadows && Yq.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Yq.push("#define OBJECT_ID"), Yq.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Yq.push("#define MESH_BLEND_TAG"), Yq.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Yq.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Yq.push("#define ENCODE_NORMAL"), Oq.useBones && Oq.computeBonesUsingShaders && Oq.skeleton ? (lq.push(Lq.g.MatricesIndicesKind), lq.push(Lq.g.MatricesWeightsKind), Oq.numBoneInfluencers > 4 && (lq.push(Lq.g.MatricesIndicesExtraKind), lq.push(Lq.g.MatricesWeightsExtraKind)), Yq.push("#define NUM_BONE_INFLUENCERS " + Oq.numBoneInfluencers), Yq.push("#define BONETEXTURE " + Oq.skeleton.isUsingTextureForMatrices), Yq.push("#define BonesPerMesh " + (Oq.skeleton.bones.length + 1))) : (Yq.push("#define NUM_BONE_INFLUENCERS 0"), Yq.push("#define BONETEXTURE false"), Yq.push("#define BonesPerMesh 0"));
        const Aq = Oq.morphTargetManager ? (0, eq.Q)(Oq.morphTargetManager, Yq, lq, Oq, !0, !0, !1, mq, xq, !1) : 0;
        Eq && (Yq.push("#define INSTANCES"), (0, eq.xb)(lq, this._enableVelocity || this._enableVelocityLinear), qq.getRenderingMesh().hasThinInstances && Yq.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Yq.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Yq.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, uE.m)(gq, this._scene, Yq);
        const cq = this._scene.Ba(),
          uq = qq._getDrawWrapper(void 0, !0),
          Bq = uq.defines,
          Wq = Yq.join("\n");
        return Bq !== Wq && uq.setEffect(cq.createEffect("geometry", {
          attributes: lq,
          uniformsNames: LE,
          samplers: GE,
          defines: Wq,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Aq
          },
          shaderLanguage: this.shaderLanguage
        }, cq), Wq), uq.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(qq) {
        if (this._enableObjectId && 1 !== qq) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== qq) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = qq
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Ba().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.PV.Ba()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.PV.Ba().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const qq = [],
          Eq = [];
        let gq = 0;
        return this._enableDepth && (this._depthIndex = gq, gq++, qq.push("gBuffer_Depth"), Eq.push(this._textureTypesAndFormats[JE.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = gq, gq++, qq.push("gBuffer_Normal"), Eq.push(this._textureTypesAndFormats[JE.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = gq, gq++, qq.push("gBuffer_Position"), Eq.push(this._textureTypesAndFormats[JE.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = gq, gq++, qq.push("gBuffer_Velocity"), Eq.push(this._textureTypesAndFormats[JE.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = gq, gq++, qq.push("gBuffer_VelocityLinear"), Eq.push(this._textureTypesAndFormats[JE.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = gq, gq++, qq.push("gBuffer_Reflectivity"), Eq.push(this._textureTypesAndFormats[JE.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = gq, gq++, qq.push("gBuffer_ScreenspaceDepth"), Eq.push(this._textureTypesAndFormats[JE.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = gq, gq++, qq.push("gBuffer_Irradiance"), Eq.push(this._textureTypesAndFormats[JE.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = gq, gq++, qq.push("gBuffer_ObjectId"), Eq.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = gq, gq++, qq.push("gBuffer_MeshBlendTag"), Eq.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [gq, qq, Eq]
      }
      _createRenderTargets() {
        const qq = this._scene.Ba(),
          [Eq, gq, Yq] = this._assignRenderTargetIndices(),
          lq = Math.min(qq.getCaps().maxDrawBuffers ?? 1, 8);
        if (qq.getCaps().drawBuffersExtension && Eq > lq) throw new Error(`GeometryBufferRenderer: ${Eq} color attachments were requested, but this engine supports at most ${lq}`);
        let mq = 0;
        qq._caps.textureFloat && qq._caps.textureFloatLinearFiltering ? mq = 1 : qq._caps.textureHalfFloat && qq._caps.textureHalfFloatLinearFiltering && (mq = 2);
        const xq = this._getRenderTargetDimensions(),
          Aq = [],
          cq = [],
          uq = [];
        for (const Oq of Yq) Oq ? (Aq.push(Oq.textureType), cq.push(Oq.textureFormat), uq.push(Oq.samplingMode ?? 2)) : (Aq.push(mq), cq.push(5), uq.push(2));
        if (this._normalsAreUnsigned = 11 === Aq[JE.NORMAL_TEXTURE_TYPE] || 13 === Aq[JE.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new ME("gBuffer", xq, Eq, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Aq,
            formats: cq,
            samplingModes: uq,
            depthTextureFormat: this._depthFormat
          }, gq.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = iq.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = iq.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Bq = [!0],
          Wq = [!1],
          Nq = [!0];
        for (let Oq = 1; Oq < Eq; ++Oq) Bq.push(!0), Nq.push(!1), Wq.push(!0);
        const aq = qq.buildTextureLayout(Bq),
          Vq = qq.buildTextureLayout(Wq),
          dq = qq.buildTextureLayout(Nq);
        this._multiRenderTarget.onClearObservable.add((qq => {
          const Eq = this.useSpecificClearForDepthTexture ? Vq : aq;
          qq.clearAttachments(this._clearColor, Eq, !0, !0, !0), this.useSpecificClearForDepthTexture && qq.clearAttachments(this._clearDepthColor, dq, !0, !1, !1), qq.bindAttachments(aq)
        })), this._resizeObserver = qq.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const jq = qq => {
          const Eq = qq.getRenderingMesh(),
            gq = qq.getEffectiveMesh(),
            Yq = this._scene,
            lq = Yq.Ba(),
            mq = qq.da();
          if (!mq) return;
          if (gq._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[gq.uniqueId] && (this._previousTransformationMatrices[gq.uniqueId] = {
              kB: Gq.e.Identity(),
              viewProjection: Yq.getTransformMatrix()
            }, Eq.skeleton)) {
            const qq = Eq.skeleton.getTransformMatrices(Eq);
            this._previousBonesTransformationMatrices[Eq.uniqueId] = this._copyBonesTransformationMatrices(qq, new Float32Array(qq.length))
          }
          const xq = Eq._getInstancesRenderList(qq._id, !!qq.getReplacementMesh());
          if (xq.mustReturn) return;
          const Aq = lq.getCaps().instancedArrays && (null !== xq.visibleInstances[qq._id] || Eq.hasThinInstances),
            cq = gq.getWorldMatrix();
          if (this.isReady(qq, Aq)) {
            const uq = qq._getDrawWrapper();
            if (!uq) return;
            const Bq = uq.effect;
            let Wq;
            lq.enableEffect(uq), Aq || Eq._bind(qq, Bq, mq.fillMode), this._useUbo ? ((0, eq.s)(Bq, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Bq.setMatrix("viewProjection", Yq.getTransformMatrix()), Bq.setMatrix("view", Yq.getViewMatrix()), this._scene.bindEyePosition(Bq, "vEyePosition"));
            if (Eq._instanceDataStorage.isFrozen || !mq.backFaceCulling && null === mq.sideOrientation) Wq = Eq._effectiveSideOrientation;
            else {
              const qq = gq._getWorldMatrixDeterminant();
              Wq = mq._getEffectiveOrientation(Eq), qq < 0 && (Wq = Wq === Oq.e.ClockWiseSideOrientation ? Oq.e.CounterClockWiseSideOrientation : Oq.e.ClockWiseSideOrientation)
            }
            if (mq._preBind(uq, Wq), mq.needAlphaTestingForMesh(gq)) {
              const qq = mq.getAlphaTestTexture();
              qq && (Bq.setTexture("diffuseSampler", qq), Bq.setMatrix("diffuseMatrix", qq.getTextureMatrix()), Bq.setFloat("alphaCutOff", mq.alphaCutOff ?? .4))
            }
            if ((mq.bumpTexture || mq.normalTexture || mq.geometryNormalTexture) && Yq.Ba().getCaps().standardDerivatives && Cq.c.BumpTextureEnabled) {
              const qq = mq.bumpTexture || mq.normalTexture || mq.geometryNormalTexture;
              Bq.setFloat3("vBumpInfos", qq.coordinatesIndex, 1 / qq.level, mq.parallaxScaleBias), Bq.setMatrix("bumpMatrix", qq.getTextureMatrix()), Bq.setTexture("bumpSampler", qq), Bq.setFloat2("vTangentSpaceParams", mq.invertNormalMapX ? -1 : 1, mq.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === mq.getClassName()) null !== mq.metallicRoughnessTexture && (Bq.setTexture("reflectivitySampler", mq.metallicRoughnessTexture), Bq.setMatrix("reflectivityMatrix", mq.metallicRoughnessTexture.getTextureMatrix())), null !== mq.metallic && Bq.setFloat("metallic", mq.metallic), null !== mq.roughness && Bq.setFloat("glossiness", 1 - mq.roughness), null !== mq.baseTexture && (Bq.setTexture("albedoSampler", mq.baseTexture), Bq.setMatrix("albedoMatrix", mq.baseTexture.getTextureMatrix())), null !== mq.baseColor && Bq.setColor3("albedoColor", mq.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === mq.getClassName()) null !== mq.specularGlossinessTexture ? (Bq.setTexture("reflectivitySampler", mq.specularGlossinessTexture), Bq.setMatrix("reflectivityMatrix", mq.specularGlossinessTexture.getTextureMatrix())) : null !== mq.specularColor && Bq.setColor3("reflectivityColor", mq.specularColor), null !== mq.glossiness && Bq.setFloat("glossiness", mq.glossiness);
            else if ("PBRMaterial" === mq.getClassName()) null !== mq.metallicTexture && (Bq.setTexture("reflectivitySampler", mq.metallicTexture), Bq.setMatrix("reflectivityMatrix", mq.metallicTexture.getTextureMatrix())), null !== mq.metallic && Bq.setFloat("metallic", mq.metallic), null !== mq.roughness && Bq.setFloat("glossiness", 1 - mq.roughness), null !== mq.roughness || null !== mq.metallic || null !== mq.metallicTexture ? (null !== mq.albedoTexture && (Bq.setTexture("albedoSampler", mq.albedoTexture), Bq.setMatrix("albedoMatrix", mq.albedoTexture.getTextureMatrix())), null !== mq.albedoColor && Bq.setColor3("albedoColor", mq.albedoColor)) : (null !== mq.reflectivityTexture ? (Bq.setTexture("reflectivitySampler", mq.reflectivityTexture), Bq.setMatrix("reflectivityMatrix", mq.reflectivityTexture.getTextureMatrix())) : null !== mq.reflectivityColor && Bq.setColor3("reflectivityColor", mq.reflectivityColor), null !== mq.microSurface && Bq.setFloat("glossiness", mq.microSurface));
            else if ("StandardMaterial" === mq.getClassName()) null !== mq.specularTexture && (Bq.setTexture("reflectivitySampler", mq.specularTexture), Bq.setMatrix("reflectivityMatrix", mq.specularTexture.getTextureMatrix())), null !== mq.specularColor && Bq.setColor3("reflectivityColor", mq.specularColor);
            else if ("OpenPBRMaterial" === mq.getClassName()) {
              const qq = mq;
              qq._useRoughnessFromMetallicTextureGreen && qq.baseMetalnessTexture ? (Bq.setTexture("reflectivitySampler", qq.baseMetalnessTexture), Bq.setMatrix("reflectivityMatrix", qq.baseMetalnessTexture.getTextureMatrix())) : qq.baseMetalnessTexture ? (Bq.setTexture("metallicSampler", qq.baseMetalnessTexture), Bq.setMatrix("metallicMatrix", qq.baseMetalnessTexture.getTextureMatrix())) : qq.specularRoughnessTexture && (Bq.setTexture("roughnessSampler", qq.specularRoughnessTexture), Bq.setMatrix("roughnessMatrix", qq.specularRoughnessTexture.getTextureMatrix())), Bq.setFloat("metallic", qq.baseMetalness), Bq.setFloat("glossiness", 1 - qq.specularRoughness), null !== qq.baseColorTexture && (Bq.setTexture("albedoSampler", qq.baseColorTexture), Bq.setMatrix("albedoMatrix", qq.baseColorTexture.getTextureMatrix())), null !== qq.baseColor && Bq.setColor3("albedoColor", qq.baseColor)
            }
            if (this._enableIrradiance && Yq.environmentTexture) {
              const qq = Yq.environmentTexture,
                Eq = Yq.postProcessRenderPipelineManager.supportedPipelines.find((qq => "IBLShadowsRenderPipeline" === qq.getClassName()));
              if (Eq) {
                const qq = Eq._getAccumulatedTexture();
                qq && (Bq.setTexture("iblShadowSampler", qq), Bq.setFloat2("shadowTextureSize", qq.getSize().width, qq.getSize().height))
              }
              if (Bq.setMatrix("reflectionMatrix", qq.getReflectionTextureMatrix()), Bq.setFloat2("vReflectionInfos", qq.level * Yq.iblIntensity, 0), Bq.setTexture("reflectionSampler", qq), qq.irradianceTexture && (Bq.setTexture("irradianceSampler", qq.irradianceTexture), qq.irradianceTexture._dominantDirection && Bq.setVector3("vReflectionDominantDirection", qq.irradianceTexture._dominantDirection)), qq.sphericalPolynomial) {
                const Eq = qq.sphericalPolynomial;
                if (Eq.preScaledHarmonics) {
                  const qq = Eq.preScaledHarmonics;
                  Bq.setVector3("vSphericalL00", qq.l00), Bq.setVector3("vSphericalL1_1", qq.l1_1), Bq.setVector3("vSphericalL10", qq.l10), Bq.setVector3("vSphericalL11", qq.l11), Bq.setVector3("vSphericalL2_2", qq.l2_2), Bq.setVector3("vSphericalL2_1", qq.l2_1), Bq.setVector3("vSphericalL20", qq.l20), Bq.setVector3("vSphericalL21", qq.l21), Bq.setVector3("vSphericalL22", qq.l22)
                } else Bq.setFloat3("vSphericalX", Eq.x.x, Eq.x.y, Eq.x.z), Bq.setFloat3("vSphericalY", Eq.y.x, Eq.y.y, Eq.y.z), Bq.setFloat3("vSphericalZ", Eq.z.x, Eq.z.y, Eq.z.z), Bq.setFloat3("vSphericalXX_ZZ", Eq.xx.x - Eq.zz.x, Eq.xx.y - Eq.zz.y, Eq.xx.z - Eq.zz.z), Bq.setFloat3("vSphericalYY_ZZ", Eq.yy.x - Eq.zz.x, Eq.yy.y - Eq.zz.y, Eq.yy.z - Eq.zz.z), Bq.setFloat3("vSphericalZZ", Eq.zz.x, Eq.zz.y, Eq.zz.z), Bq.setFloat3("vSphericalXY", Eq.xy.x, Eq.xy.y, Eq.xy.z), Bq.setFloat3("vSphericalYZ", Eq.yz.x, Eq.yz.y, Eq.yz.z), Bq.setFloat3("vSphericalZX", Eq.zx.x, Eq.zx.y, Eq.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === mq.getClassName()) {
                const qq = mq;
                Bq.setFloat("vSubsurfaceWeight", qq.subsurfaceWeight), qq.subsurfaceWeightTexture && (Bq.setTexture("subsurfaceWeightSampler", qq.subsurfaceWeightTexture), Bq.setMatrix("subsurfaceWeightMatrix", qq.subsurfaceWeightTexture.getTextureMatrix())), Bq.setFloat("vTransmissionWeight", qq.transmissionWeight), qq.transmissionWeightTexture && (Bq.setTexture("transmissionWeightSampler", qq.transmissionWeightTexture), Bq.setMatrix("transmissionWeightMatrix", qq.transmissionWeightTexture.getTextureMatrix())), Bq.setFloat("vTransmissionScatterAnisotropy", qq.transmissionScatterAnisotropy), Bq.setFloat("vSubsurfaceScatterAnisotropy", qq.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, uE.i)(Bq, mq, this._scene), Eq.useBones && Eq.computeBonesUsingShaders && Eq.skeleton) {
              const qq = Eq.skeleton;
              if (qq.isUsingTextureForMatrices && Bq.getUniformIndex("boneTextureInfo") > -1) {
                const gq = qq.getTransformMatrixTexture(Eq);
                Bq.setTexture("boneSampler", gq), Bq.setFloat2("boneTextureInfo", qq._textureWidth, qq._textureHeight)
              } else Bq.setMatrices("mBones", Eq.skeleton.getTransformMatrices(Eq));
              (this._enableVelocity || this._enableVelocityLinear) && Bq.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Eq.uniqueId])
            }
            if ((0, eq.p)(Eq, Bq), Eq.morphTargetManager && Eq.morphTargetManager.isUsingTextureForTargets && Eq.morphTargetManager._bind(Bq), (this._enableVelocity || this._enableVelocityLinear) && (Bq.setMatrix("previousWorld", this._previousTransformationMatrices[gq.uniqueId].kB), Bq.setMatrix("previousViewProjection", this._previousTransformationMatrices[gq.uniqueId].viewProjection)), this._enableObjectId) {
              let qq = Eq.uniqueId;
              if (this.objectIdProvider) qq = (0, NE.i)(Eq, this.objectIdProvider);
              else if (qq > 16777215) throw new Error(`Invalid geometry object ID ${qq} for mesh "${Eq.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Bq.setFloat("objectId", qq)
            }
            if (this._enableMeshBlendTag) {
              const qq = this.meshBlendTagProvider ? (0, NE.f)(Eq, this.meshBlendTagProvider) : Eq.meshBlendingTag;
              Bq.setInt("meshBlendTag", qq)
            }
            Aq && Eq.hasThinInstances && Bq.setMatrix("world", cq), Eq._processRendering(gq, qq, Bq, mq.fillMode, xq, Aq, ((qq, Eq) => {
              qq || Bq.setMatrix("world", Eq)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[gq.uniqueId].kB = cq.clone(), this._previousTransformationMatrices[gq.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Eq.skeleton && this._copyBonesTransformationMatrices(Eq.skeleton.getTransformMatrices(Eq), this._previousBonesTransformationMatrices[gq.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Eq, gq, Yq) => {
          if ((Yq || 0 === gq) && Eq.fn)
            for (let lq = 0; lq < Eq.fn.length; ++lq) {
              const gq = Eq.fn[lq],
                Yq = gq.da(),
                Oq = gq.getRenderingMesh();
              if (!Yq) continue;
              const mq = Oq._getInstancesRenderList(gq._id, !!gq.getReplacementMesh()),
                xq = qq.getCaps().instancedArrays && (null !== mq.visibleInstances[gq._id] || Oq.hasThinInstances);
              if (!this.isReady(gq, xq)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Eq, gq, Yq, lq) => {
          let Oq;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Ba().bindAttachments(this._attachmentsFromPrePass)
          }
          if (lq.length) {
            for (qq.setColorWrite(!1), Oq = 0; Oq < lq.length; Oq++) jq(lq.data[Oq]);
            qq.setColorWrite(!0)
          }
          for (Oq = 0; Oq < Eq.length; Oq++) jq(Eq.data[Oq]);
          for (qq.setDepthWrite(!1), Oq = 0; Oq < gq.length; Oq++) jq(gq.data[Oq]);
          if (this.renderTransparentMeshes)
            for (Oq = 0; Oq < Yq.length; Oq++) jq(Yq.data[Oq]);
          qq.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const qq = this._scene.Ba();
        return {
          width: Math.max(1, Math.floor(qq.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(qq.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(qq, Eq) {
        for (let gq = 0; gq < qq.length; gq++) Eq[gq] = qq[gq];
        return Eq
      }
    }
    JE.ForceGLSL = !1, JE.DEPTH_TEXTURE_TYPE = 0, JE.NORMAL_TEXTURE_TYPE = 1, JE.POSITION_TEXTURE_TYPE = 2, JE.VELOCITY_TEXTURE_TYPE = 3, JE.REFLECTIVITY_TEXTURE_TYPE = 4, JE.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, JE.VELOCITY_LINEAR_TEXTURE_TYPE = 6, JE.IRRADIANCE_TEXTURE_TYPE = 7, JE.OBJECT_ID_TEXTURE_TYPE = 8, JE.MESH_BLEND_TAG_TEXTURE_TYPE = 9, JE._SceneComponentInitialization = qq => {
      throw (0, jE.m)("GeometryBufferRendererSceneComponent")
    };
    var kE = gq(37171);
    const RE = {
      effect: null,
      subMesh: null
    };

    function UE(qq) {
      if ("number" === typeof qq) return 1;
      if (qq instanceof Gq.p) return 2;
      if (qq instanceof Gq.q || qq instanceof sq.d) return 3;
      if (qq instanceof Gq.r || qq instanceof sq.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class FE {
      populateVectorFromLinkedProperties(qq) {
        const Eq = UE(qq);
        for (const gq in this.linkedProperties) {
          const qq = this.linkedProperties[gq],
            Yq = qq.numComponents;
          if (Eq < Yq || qq.targetUniformComponentOffset > Eq - Yq) return void(1 == Yq ? nq.b.Error(`Float property ${qq.name} has an offset that is too large.`) : nq.b.Error(`Vector${Yq} property ${qq.name} won't fit in Vector${Eq} or has an offset that is too large.`));
          "number" === typeof qq.value ? FE._tmpArray[qq.targetUniformComponentOffset] = qq.value : qq.value.toArray(FE._tmpArray, qq.targetUniformComponentOffset)
        }
        qq.ogq(FE._tmpArray)
      }
      constructor(qq, Eq) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = qq, this.numComponents = Eq
      }
    }
    FE._tmpArray = [0, 0, 0, 0];
    class sE {
      constructor(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = qq, this.targetUniformName = gq, this.defaultValue = Eq, this.value = Eq, this.targetUniformComponentNum = Yq, this.targetUniformComponentOffset = lq, this.requiredDefine = Oq
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : UE(this.defaultValue)
      }
    }
    class XE {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(qq, Eq, gq) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = qq, this.samplerPrefix = Eq, this.textureDefine = gq
      }
    }
    class wE extends((0, VE.d)((0, aE.b)(Jq.c))) {}
    class KE extends(function(qq) {
      return class extends qq {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(wE)) {}
    class CE extends((0, Xq.e)(KE)) {
      constructor(qq) {
        super(qq), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class IE extends((0, dE.c)(Kq.b)) {}
    let eE = (() => {
        var qq, Eq, Yq, lq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, Zq, fq, Mq, Tq, pq, Jq, kq, Rq, Uq, Xq, Kq, Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, aE, VE, dE, jE, HE, oE, PE, QE, yE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, kE, UE, wE, KE, eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag, cg, ug, Bg, Wg, Ng, ag, Vg, dg, jg, Hg, og, Pg, Qg, yg, tg, rg, vg, hg, ng, bg;
        let ig, Zg, fg, Mg, Tg, zg, Sg, pg, Gg, Lg, Jg, kg, Rg, Ug, Fg, sg, Xg, wg, Kg, Cg, Ig, eg, Dg, qY, EY, gY, YY, lY, OY, mY, xY, AY, cY, uY, BY, WY, NY, aY, VY, dY, jY, HY, oY, PY, QY, yY, tY, rY, vY, hY, nY, bY, iY, ZY, fY, MY, TY, zY, SY, pY, GY, LY, JY, kY, RY, UY, FY, sY, XY, wY, KY, CY, IY, eY, DY, ql, El, gl, Yl, ll, Ol, ml, xl, Al, cl, ul, Bl, Wl, Nl, al, Vl, dl, jl, Hl, ol, Pl, Ql, yl, tl, rl, vl, hl, nl, bl, il, Zl = IE,
          fl = [],
          Ml = [],
          Tl = [],
          zl = [],
          Sl = [],
          pl = [],
          Gl = [],
          Ll = [],
          Jl = [],
          kl = [],
          Rl = [],
          Ul = [],
          Fl = [],
          sl = [],
          Xl = [],
          wl = [],
          Kl = [],
          Cl = [],
          Il = [],
          el = [],
          Dl = [],
          qO = [],
          EO = [],
          gO = [],
          YO = [],
          lO = [],
          OO = [],
          mO = [],
          xO = [],
          AO = [],
          cO = [],
          uO = [],
          BO = [],
          WO = [],
          NO = [],
          aO = [],
          VO = [],
          dO = [],
          jO = [],
          HO = [],
          oO = [],
          PO = [],
          QO = [],
          yO = [],
          tO = [],
          rO = [],
          vO = [],
          hO = [],
          nO = [],
          bO = [],
          iO = [],
          ZO = [],
          fO = [],
          MO = [],
          TO = [],
          zO = [],
          SO = [],
          pO = [],
          GO = [],
          LO = [],
          JO = [],
          kO = [],
          RO = [],
          UO = [],
          FO = [],
          sO = [],
          XO = [],
          wO = [],
          KO = [],
          CO = [],
          IO = [],
          eO = [],
          DO = [],
          qm = [],
          Em = [],
          gm = [],
          Ym = [],
          lm = [],
          Om = [],
          mm = [],
          xm = [],
          Am = [],
          cm = [],
          um = [],
          Bm = [],
          Wm = [],
          Nm = [],
          am = [],
          Vm = [],
          dm = [],
          jm = [],
          Hm = [],
          om = [],
          Pm = [],
          Qm = [],
          ym = [],
          tm = [],
          rm = [],
          hm = [],
          nm = [],
          bm = [],
          im = [],
          Zm = [],
          fm = [],
          Mm = [],
          Tm = [],
          zm = [],
          Sm = [],
          pm = [],
          Gm = [],
          Lm = [],
          Jm = [],
          km = [],
          Rm = [],
          Um = [],
          Fm = [],
          sm = [],
          Xm = [],
          wm = [],
          Km = [],
          Cm = [],
          Im = [],
          em = [],
          Dm = [],
          qx = [],
          Ex = [],
          gx = [],
          Yx = [],
          lx = [],
          Ox = [],
          mx = [],
          xx = [],
          Ax = [],
          cx = [],
          ux = [],
          Bx = [],
          Wx = [],
          Nx = [],
          ax = [],
          Vx = [],
          dx = [],
          jx = [],
          Hx = [],
          ox = [],
          Px = [],
          Qx = [],
          yx = [],
          tx = [],
          rx = [],
          vx = [],
          hx = [],
          nx = [],
          bx = [],
          ix = [],
          Zx = [],
          fx = [],
          Mx = [],
          Tx = [],
          zx = [],
          Sx = [],
          px = [],
          Gx = [],
          Lx = [],
          Jx = [],
          kx = [],
          Rx = [],
          Ux = [],
          Fx = [],
          sx = [],
          Xx = [],
          wx = [],
          Kx = [],
          Cx = [],
          Ix = [],
          ex = [],
          Dx = [],
          qA = [],
          EA = [],
          gA = [],
          YA = [],
          lA = [],
          OA = [],
          mA = [],
          xA = [],
          AA = [],
          cA = [],
          uA = [],
          BA = [],
          WA = [],
          NA = [],
          aA = [],
          VA = [],
          dA = [],
          jA = [],
          HA = [],
          oA = [],
          PA = [],
          QA = [],
          yA = [],
          tA = [],
          rA = [],
          vA = [],
          hA = [],
          nA = [],
          bA = [];
        return qq = class extends Zl {
          get baseWeight() {
            return (0, vq.b)(this, Eq, "f")
          }
          set baseWeight(qq) {
            (0, vq.e)(this, Eq, qq, "f")
          }
          get baseWeightTexture() {
            return (0, vq.b)(this, Yq, "f")
          }
          set baseWeightTexture(qq) {
            (0, vq.e)(this, Yq, qq, "f")
          }
          get baseColor() {
            return (0, vq.b)(this, lq, "f")
          }
          set baseColor(qq) {
            (0, vq.e)(this, lq, qq, "f")
          }
          get baseColorTexture() {
            return (0, vq.b)(this, mq, "f")
          }
          set baseColorTexture(qq) {
            (0, vq.e)(this, mq, qq, "f")
          }
          get baseDiffuseRoughness() {
            return (0, vq.b)(this, xq, "f")
          }
          set baseDiffuseRoughness(qq) {
            (0, vq.e)(this, xq, qq, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, vq.b)(this, Aq, "f")
          }
          set baseDiffuseRoughnessTexture(qq) {
            (0, vq.e)(this, Aq, qq, "f")
          }
          get baseMetalness() {
            return (0, vq.b)(this, cq, "f")
          }
          set baseMetalness(qq) {
            (0, vq.e)(this, cq, qq, "f")
          }
          get baseMetalnessTexture() {
            return (0, vq.b)(this, uq, "f")
          }
          set baseMetalnessTexture(qq) {
            (0, vq.e)(this, uq, qq, "f")
          }
          get specularWeight() {
            return (0, vq.b)(this, Bq, "f")
          }
          set specularWeight(qq) {
            (0, vq.e)(this, Bq, qq, "f")
          }
          get specularWeightTexture() {
            return (0, vq.b)(this, Wq, "f")
          }
          set specularWeightTexture(qq) {
            (0, vq.e)(this, Wq, qq, "f")
          }
          get specularColor() {
            return (0, vq.b)(this, Nq, "f")
          }
          set specularColor(qq) {
            (0, vq.e)(this, Nq, qq, "f")
          }
          get specularColorTexture() {
            return (0, vq.b)(this, aq, "f")
          }
          set specularColorTexture(qq) {
            (0, vq.e)(this, aq, qq, "f")
          }
          get specularRoughness() {
            return (0, vq.b)(this, Vq, "f")
          }
          set specularRoughness(qq) {
            (0, vq.e)(this, Vq, qq, "f")
          }
          get specularRoughnessTexture() {
            return (0, vq.b)(this, dq, "f")
          }
          set specularRoughnessTexture(qq) {
            (0, vq.e)(this, dq, qq, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, vq.b)(this, jq, "f")
          }
          set specularRoughnessAnisotropy(qq) {
            (0, vq.e)(this, jq, qq, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, vq.b)(this, Hq, "f")
          }
          set specularRoughnessAnisotropyTexture(qq) {
            (0, vq.e)(this, Hq, qq, "f")
          }
          get specularIor() {
            return (0, vq.b)(this, oq, "f")
          }
          set specularIor(qq) {
            (0, vq.e)(this, oq, qq, "f")
          }
          get transmissionWeight() {
            return (0, vq.b)(this, Pq, "f")
          }
          set transmissionWeight(qq) {
            (0, vq.e)(this, Pq, qq, "f")
          }
          get transmissionWeightTexture() {
            return (0, vq.b)(this, Qq, "f")
          }
          set transmissionWeightTexture(qq) {
            (0, vq.e)(this, Qq, qq, "f")
          }
          get transmissionColor() {
            return (0, vq.b)(this, yq, "f")
          }
          set transmissionColor(qq) {
            (0, vq.e)(this, yq, qq, "f")
          }
          get transmissionColorTexture() {
            return (0, vq.b)(this, tq, "f")
          }
          set transmissionColorTexture(qq) {
            (0, vq.e)(this, tq, qq, "f")
          }
          get transmissionDepth() {
            return (0, vq.b)(this, rq, "f")
          }
          set transmissionDepth(qq) {
            (0, vq.e)(this, rq, qq, "f")
          }
          get transmissionDepthTexture() {
            return (0, vq.b)(this, Zq, "f")
          }
          set transmissionDepthTexture(qq) {
            (0, vq.e)(this, Zq, qq, "f")
          }
          get transmissionScatter() {
            return (0, vq.b)(this, fq, "f")
          }
          set transmissionScatter(qq) {
            (0, vq.e)(this, fq, qq, "f")
          }
          get transmissionScatterTexture() {
            return (0, vq.b)(this, Mq, "f")
          }
          set transmissionScatterTexture(qq) {
            (0, vq.e)(this, Mq, qq, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, vq.b)(this, Tq, "f")
          }
          set transmissionScatterAnisotropy(qq) {
            (0, vq.e)(this, Tq, qq, "f")
          }
          get transmissionDispersionScale() {
            return (0, vq.b)(this, pq, "f")
          }
          set transmissionDispersionScale(qq) {
            (0, vq.e)(this, pq, qq, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, vq.b)(this, Jq, "f")
          }
          set transmissionDispersionScaleTexture(qq) {
            (0, vq.e)(this, Jq, qq, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, vq.b)(this, kq, "f")
          }
          set transmissionDispersionAbbeNumber(qq) {
            (0, vq.e)(this, kq, qq, "f")
          }
          get subsurfaceWeight() {
            return (0, vq.b)(this, Rq, "f")
          }
          set subsurfaceWeight(qq) {
            (0, vq.e)(this, Rq, qq, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, vq.b)(this, Uq, "f")
          }
          set subsurfaceWeightTexture(qq) {
            (0, vq.e)(this, Uq, qq, "f")
          }
          get subsurfaceColor() {
            return (0, vq.b)(this, Xq, "f")
          }
          set subsurfaceColor(qq) {
            (0, vq.e)(this, Xq, qq, "f")
          }
          get subsurfaceColorTexture() {
            return (0, vq.b)(this, Kq, "f")
          }
          set subsurfaceColorTexture(qq) {
            (0, vq.e)(this, Kq, qq, "f")
          }
          get subsurfaceRadius() {
            return (0, vq.b)(this, Dq, "f")
          }
          set subsurfaceRadius(qq) {
            (0, vq.e)(this, Dq, qq, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, vq.b)(this, qE, "f")
          }
          set subsurfaceRadiusScale(qq) {
            (0, vq.e)(this, qE, qq, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, vq.b)(this, EE, "f")
          }
          set subsurfaceRadiusScaleTexture(qq) {
            (0, vq.e)(this, EE, qq, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, vq.b)(this, gE, "f")
          }
          set subsurfaceScatterAnisotropy(qq) {
            (0, vq.e)(this, gE, qq, "f")
          }
          get coatWeight() {
            return (0, vq.b)(this, YE, "f")
          }
          set coatWeight(qq) {
            (0, vq.e)(this, YE, qq, "f")
          }
          get coatWeightTexture() {
            return (0, vq.b)(this, lE, "f")
          }
          set coatWeightTexture(qq) {
            (0, vq.e)(this, lE, qq, "f")
          }
          get coatColor() {
            return (0, vq.b)(this, OE, "f")
          }
          set coatColor(qq) {
            (0, vq.e)(this, OE, qq, "f")
          }
          get coatColorTexture() {
            return (0, vq.b)(this, mE, "f")
          }
          set coatColorTexture(qq) {
            (0, vq.e)(this, mE, qq, "f")
          }
          get coatRoughness() {
            return (0, vq.b)(this, xE, "f")
          }
          set coatRoughness(qq) {
            (0, vq.e)(this, xE, qq, "f")
          }
          get coatRoughnessTexture() {
            return (0, vq.b)(this, AE, "f")
          }
          set coatRoughnessTexture(qq) {
            (0, vq.e)(this, AE, qq, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, vq.b)(this, cE, "f")
          }
          set coatRoughnessAnisotropy(qq) {
            (0, vq.e)(this, cE, qq, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, vq.b)(this, aE, "f")
          }
          set coatRoughnessAnisotropyTexture(qq) {
            (0, vq.e)(this, aE, qq, "f")
          }
          get coatIor() {
            return (0, vq.b)(this, VE, "f")
          }
          set coatIor(qq) {
            (0, vq.e)(this, VE, qq, "f")
          }
          get coatDarkening() {
            return (0, vq.b)(this, dE, "f")
          }
          set coatDarkening(qq) {
            (0, vq.e)(this, dE, qq, "f")
          }
          get coatDarkeningTexture() {
            return (0, vq.b)(this, jE, "f")
          }
          set coatDarkeningTexture(qq) {
            (0, vq.e)(this, jE, qq, "f")
          }
          get fuzzWeight() {
            return (0, vq.b)(this, HE, "f")
          }
          set fuzzWeight(qq) {
            (0, vq.e)(this, HE, qq, "f")
          }
          get fuzzWeightTexture() {
            return (0, vq.b)(this, oE, "f")
          }
          set fuzzWeightTexture(qq) {
            (0, vq.e)(this, oE, qq, "f")
          }
          get fuzzColor() {
            return (0, vq.b)(this, PE, "f")
          }
          set fuzzColor(qq) {
            (0, vq.e)(this, PE, qq, "f")
          }
          get fuzzColorTexture() {
            return (0, vq.b)(this, QE, "f")
          }
          set fuzzColorTexture(qq) {
            (0, vq.e)(this, QE, qq, "f")
          }
          get fuzzRoughness() {
            return (0, vq.b)(this, yE, "f")
          }
          set fuzzRoughness(qq) {
            (0, vq.e)(this, yE, qq, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, vq.b)(this, vE, "f")
          }
          set fuzzRoughnessTexture(qq) {
            (0, vq.e)(this, vE, qq, "f")
          }
          get geometryThinWalled() {
            return (0, vq.b)(this, hE, "f")
          }
          set geometryThinWalled(qq) {
            (0, vq.e)(this, hE, qq, "f")
          }
          get geometryNormalTexture() {
            return (0, vq.b)(this, nE, "f")
          }
          set geometryNormalTexture(qq) {
            (0, vq.e)(this, nE, qq, "f")
          }
          get geometryTangent() {
            return (0, vq.b)(this, bE, "f")
          }
          set geometryTangent(qq) {
            (0, vq.e)(this, bE, qq, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(qq) {
            this.geometryTangent = new Gq.p(Math.cos(qq), Math.sin(qq))
          }
          get geometryTangentTexture() {
            return (0, vq.b)(this, iE, "f")
          }
          set geometryTangentTexture(qq) {
            (0, vq.e)(this, iE, qq, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, vq.b)(this, ZE, "f")
          }
          set geometryCoatNormalTexture(qq) {
            (0, vq.e)(this, ZE, qq, "f")
          }
          get geometryCoatTangent() {
            return (0, vq.b)(this, fE, "f")
          }
          set geometryCoatTangent(qq) {
            (0, vq.e)(this, fE, qq, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(qq) {
            this.geometryCoatTangent = new Gq.p(Math.cos(qq), Math.sin(qq))
          }
          get geometryCoatTangentTexture() {
            return (0, vq.b)(this, ME, "f")
          }
          set geometryCoatTangentTexture(qq) {
            (0, vq.e)(this, ME, qq, "f")
          }
          get geometryOpacity() {
            return (0, vq.b)(this, TE, "f")
          }
          set geometryOpacity(qq) {
            (0, vq.e)(this, TE, qq, "f")
          }
          get geometryOpacityTexture() {
            return (0, vq.b)(this, zE, "f")
          }
          set geometryOpacityTexture(qq) {
            (0, vq.e)(this, zE, qq, "f")
          }
          get geometryThickness() {
            return (0, vq.b)(this, SE, "f")
          }
          set geometryThickness(qq) {
            (0, vq.e)(this, SE, qq, "f")
          }
          get geometryThicknessTexture() {
            return (0, vq.b)(this, pE, "f")
          }
          set geometryThicknessTexture(qq) {
            (0, vq.e)(this, pE, qq, "f")
          }
          get emissionLuminance() {
            return (0, vq.b)(this, GE, "f")
          }
          set emissionLuminance(qq) {
            (0, vq.e)(this, GE, qq, "f")
          }
          get emissionColor() {
            return (0, vq.b)(this, LE, "f")
          }
          set emissionColor(qq) {
            (0, vq.e)(this, LE, qq, "f")
          }
          get emissionColorTexture() {
            return (0, vq.b)(this, kE, "f")
          }
          set emissionColorTexture(qq) {
            (0, vq.e)(this, kE, qq, "f")
          }
          get thinFilmWeight() {
            return (0, vq.b)(this, UE, "f")
          }
          set thinFilmWeight(qq) {
            (0, vq.e)(this, UE, qq, "f")
          }
          get thinFilmWeightTexture() {
            return (0, vq.b)(this, wE, "f")
          }
          set thinFilmWeightTexture(qq) {
            (0, vq.e)(this, wE, qq, "f")
          }
          get thinFilmThickness() {
            return (0, vq.b)(this, KE, "f")
          }
          set thinFilmThickness(qq) {
            (0, vq.e)(this, KE, qq, "f")
          }
          get thinFilmThicknessMin() {
            return (0, vq.b)(this, eE, "f")
          }
          set thinFilmThicknessMin(qq) {
            (0, vq.e)(this, eE, qq, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, vq.b)(this, DE, "f")
          }
          set thinFilmThicknessTexture(qq) {
            (0, vq.e)(this, DE, qq, "f")
          }
          get thinFilmIor() {
            return (0, vq.b)(this, qg, "f")
          }
          set thinFilmIor(qq) {
            (0, vq.e)(this, qg, qq, "f")
          }
          get ambientOcclusionTexture() {
            return (0, vq.b)(this, Eg, "f")
          }
          set ambientOcclusionTexture(qq) {
            (0, vq.e)(this, Eg, qq, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(qq) {
            this._sssQuality !== qq && (this._sssQuality = qq, this.xgq(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(qq) {
            this._sssIrradianceTexture !== qq && (this._sssIrradianceTexture = qq, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(qq) {
            this._sssDepthTexture !== qq && (this._sssDepthTexture = qq, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, vq.b)(this, gg, "f")
          }
          set directIntensity(qq) {
            (0, vq.e)(this, gg, qq, "f")
          }
          get environmentIntensity() {
            return (0, vq.b)(this, Yg, "f")
          }
          set environmentIntensity(qq) {
            (0, vq.e)(this, Yg, qq, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, vq.b)(this, lg, "f")
          }
          set useSpecularWeightFromTextureAlpha(qq) {
            (0, vq.e)(this, lg, qq, "f")
          }
          get forceAlphaTest() {
            return (0, vq.b)(this, Og, "f")
          }
          set forceAlphaTest(qq) {
            (0, vq.e)(this, Og, qq, "f")
          }
          get alphaCutOff() {
            return (0, vq.b)(this, mg, "f")
          }
          set alphaCutOff(qq) {
            (0, vq.e)(this, mg, qq, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, vq.b)(this, xg, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(qq) {
            (0, vq.e)(this, xg, qq, "f")
          }
          get useAmbientInGrayScale() {
            return (0, vq.b)(this, Ag, "f")
          }
          set useAmbientInGrayScale(qq) {
            (0, vq.e)(this, Ag, qq, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(sq.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Oq.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(qq) {
            qq !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = qq ? Oq.e.LIGHTFALLOFF_PHYSICAL : Oq.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Oq.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(qq) {
            qq !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = qq ? Oq.e.LIGHTFALLOFF_GLTF : Oq.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, vq.b)(this, cg, "f")
          }
          set useObjectSpaceNormalMap(qq) {
            (0, vq.e)(this, cg, qq, "f")
          }
          get useParallax() {
            return (0, vq.b)(this, ug, "f")
          }
          set useParallax(qq) {
            (0, vq.e)(this, ug, qq, "f")
          }
          get useParallaxOcclusion() {
            return (0, vq.b)(this, Bg, "f")
          }
          set useParallaxOcclusion(qq) {
            (0, vq.e)(this, Bg, qq, "f")
          }
          get parallaxScaleBias() {
            return (0, vq.b)(this, Wg, "f")
          }
          set parallaxScaleBias(qq) {
            (0, vq.e)(this, Wg, qq, "f")
          }
          get disableLighting() {
            return (0, vq.b)(this, Ng, "f")
          }
          set disableLighting(qq) {
            (0, vq.e)(this, Ng, qq, "f")
          }
          get forceIrradianceInFragment() {
            return (0, vq.b)(this, ag, "f")
          }
          set forceIrradianceInFragment(qq) {
            (0, vq.e)(this, ag, qq, "f")
          }
          get maxSimultaneousLights() {
            return (0, vq.b)(this, Vg, "f")
          }
          set maxSimultaneousLights(qq) {
            (0, vq.e)(this, Vg, qq, "f")
          }
          get invertNormalMapX() {
            return (0, vq.b)(this, dg, "f")
          }
          set invertNormalMapX(qq) {
            (0, vq.e)(this, dg, qq, "f")
          }
          get invertNormalMapY() {
            return (0, vq.b)(this, jg, "f")
          }
          set invertNormalMapY(qq) {
            (0, vq.e)(this, jg, qq, "f")
          }
          get twoSidedLighting() {
            return (0, vq.b)(this, Hg, "f")
          }
          set twoSidedLighting(qq) {
            (0, vq.e)(this, Hg, qq, "f")
          }
          get useAlphaFresnel() {
            return (0, vq.b)(this, og, "f")
          }
          set useAlphaFresnel(qq) {
            (0, vq.e)(this, og, qq, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, vq.b)(this, Pg, "f")
          }
          set useLinearAlphaFresnel(qq) {
            (0, vq.e)(this, Pg, qq, "f")
          }
          get environmentBRDFTexture() {
            return (0, vq.b)(this, Qg, "f")
          }
          set environmentBRDFTexture(qq) {
            (0, vq.e)(this, Qg, qq, "f")
          }
          get forceNormalForward() {
            return (0, vq.b)(this, yg, "f")
          }
          set forceNormalForward(qq) {
            (0, vq.e)(this, yg, qq, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, vq.b)(this, tg, "f")
          }
          set enableSpecularAntiAliasing(qq) {
            (0, vq.e)(this, tg, qq, "f")
          }
          get useHorizonOcclusion() {
            return (0, vq.b)(this, rg, "f")
          }
          set useHorizonOcclusion(qq) {
            (0, vq.e)(this, rg, qq, "f")
          }
          get useRadianceOcclusion() {
            return (0, vq.b)(this, vg, "f")
          }
          set useRadianceOcclusion(qq) {
            (0, vq.e)(this, vg, qq, "f")
          }
          get unlit() {
            return (0, vq.b)(this, hg, "f")
          }
          set unlit(qq) {
            (0, vq.e)(this, hg, qq, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, vq.b)(this, ng, "f")
          }
          set applyDecalMapAfterDetailMap(qq) {
            (0, vq.e)(this, ng, qq, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(qq) {
            this._backgroundRefractionTexture = qq, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(qq) {
            this._refractionHighQualityBlur !== qq && (this._refractionHighQualityBlur = qq, this.xgq(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(qq) {
            this._realTimeFiltering = qq, this.xgq(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(qq) {
            this._realTimeFilteringQuality = qq, this.xgq(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(qq) {
            this._fuzzSampleNumber = qq, this.xgq(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, vq.b)(this, bg, "f")
          }
          set debugMode(qq) {
            (0, vq.e)(this, bg, qq, "f")
          }
          constructor(gq, hq) {
            super(gq, hq, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || qq.ForceGLSL), Eq.set(this, ((0, vq.i)(this, fl), (0, vq.i)(this, Ml, void 0))), this._baseWeight = ((0, vq.i)(this, Tl), new sE("base_weight", 1, "vBaseWeight", 1)), Yq.set(this, (0, vq.i)(this, zl, void 0)), this._baseWeightTexture = ((0, vq.i)(this, Sl), new XE("base_weight", "baseWeight", "BASE_WEIGHT")), lq.set(this, (0, vq.i)(this, pl, void 0)), this._baseColor = ((0, vq.i)(this, Gl), new sE("base_color", sq.d.White(), "vBaseColor", 4)), mq.set(this, (0, vq.i)(this, Ll, void 0)), this._baseColorTexture = ((0, vq.i)(this, Jl), new XE("base_color", "baseColor", "BASE_COLOR")), xq.set(this, (0, vq.i)(this, kl, void 0)), this._baseDiffuseRoughness = ((0, vq.i)(this, Rl), new sE("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Aq.set(this, (0, vq.i)(this, Ul, void 0)), this._baseDiffuseRoughnessTexture = ((0, vq.i)(this, Fl), new XE("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), cq.set(this, (0, vq.i)(this, sl, void 0)), this._baseMetalness = ((0, vq.i)(this, Xl), new sE("base_metalness", 0, "vReflectanceInfo", 4, 0)), uq.set(this, (0, vq.i)(this, wl, void 0)), this._baseMetalnessTexture = ((0, vq.i)(this, Kl), new XE("base_metalness", "baseMetalness", "BASE_METALNESS")), Bq.set(this, (0, vq.i)(this, Cl, void 0)), this._specularWeight = ((0, vq.i)(this, Il), new sE("specular_weight", 1, "vReflectanceInfo", 4, 3)), Wq.set(this, (0, vq.i)(this, el, void 0)), this._specularWeightTexture = ((0, vq.i)(this, Dl), new XE("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Nq.set(this, (0, vq.i)(this, qO, void 0)), this._specularColor = ((0, vq.i)(this, EO), new sE("specular_color", sq.d.White(), "vSpecularColor", 4)), aq.set(this, (0, vq.i)(this, gO, void 0)), this._specularColorTexture = ((0, vq.i)(this, YO), new XE("specular_color", "specularColor", "SPECULAR_COLOR")), Vq.set(this, (0, vq.i)(this, lO, void 0)), this._specularRoughness = ((0, vq.i)(this, OO), new sE("specular_roughness", .3, "vReflectanceInfo", 4, 1)), dq.set(this, (0, vq.i)(this, mO, void 0)), this._specularRoughnessTexture = ((0, vq.i)(this, xO), new XE("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), jq.set(this, (0, vq.i)(this, AO, void 0)), this._specularRoughnessAnisotropy = ((0, vq.i)(this, cO), new sE("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Hq.set(this, (0, vq.i)(this, uO, void 0)), this._specularRoughnessAnisotropyTexture = ((0, vq.i)(this, BO), new XE("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), oq.set(this, (0, vq.i)(this, WO, void 0)), this._specularIor = ((0, vq.i)(this, NO), new sE("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Pq.set(this, (0, vq.i)(this, aO, void 0)), this._transmissionWeight = ((0, vq.i)(this, VO), new sE("transmission_weight", 0, "vTransmissionWeight", 1)), Qq.set(this, (0, vq.i)(this, dO, void 0)), this._transmissionWeightTexture = ((0, vq.i)(this, jO), new XE("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), yq.set(this, (0, vq.i)(this, HO, void 0)), this._transmissionColor = ((0, vq.i)(this, oO), new sE("transmission_color", sq.d.White(), "vTransmissionColor", 3, 0)), tq.set(this, (0, vq.i)(this, PO, void 0)), this._transmissionColorTexture = ((0, vq.i)(this, QO), new XE("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), rq.set(this, (0, vq.i)(this, yO, void 0)), this._transmissionDepth = ((0, vq.i)(this, tO), new sE("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Zq.set(this, (0, vq.i)(this, rO, void 0)), this._transmissionDepthTexture = ((0, vq.i)(this, vO), new XE("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), fq.set(this, (0, vq.i)(this, hO, void 0)), this._transmissionScatter = ((0, vq.i)(this, nO), new sE("transmission_scatter", sq.d.Black(), "vTransmissionScatter", 3, 0)), Mq.set(this, (0, vq.i)(this, bO, void 0)), this._transmissionScatterTexture = ((0, vq.i)(this, iO), new XE("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Tq.set(this, (0, vq.i)(this, ZO, void 0)), this._transmissionScatterAnisotropy = ((0, vq.i)(this, fO), new sE("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), pq.set(this, (0, vq.i)(this, MO, void 0)), this._transmissionDispersionScale = ((0, vq.i)(this, TO), new sE("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Jq.set(this, (0, vq.i)(this, zO, void 0)), this._transmissionDispersionScaleTexture = ((0, vq.i)(this, SO), new XE("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), kq.set(this, (0, vq.i)(this, pO, void 0)), this._transmissionDispersionAbbeNumber = ((0, vq.i)(this, GO), new sE("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Rq.set(this, (0, vq.i)(this, LO, void 0)), this._subsurfaceWeight = ((0, vq.i)(this, JO), new sE("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Uq.set(this, (0, vq.i)(this, kO, void 0)), this._subsurfaceWeightTexture = ((0, vq.i)(this, RO), new XE("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Xq.set(this, (0, vq.i)(this, UO, void 0)), this._subsurfaceColor = ((0, vq.i)(this, FO), new sE("subsurface_color", new sq.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Kq.set(this, (0, vq.i)(this, sO, void 0)), this._subsurfaceColorTexture = ((0, vq.i)(this, XO), new XE("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Dq.set(this, (0, vq.i)(this, wO, void 0)), this._subsurfaceRadius = ((0, vq.i)(this, KO), new sE("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), qE.set(this, (0, vq.i)(this, CO, void 0)), this._subsurfaceRadiusScale = ((0, vq.i)(this, IO), new sE("subsurface_radius_scale", new sq.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), EE.set(this, (0, vq.i)(this, eO, void 0)), this._subsurfaceRadiusScaleTexture = ((0, vq.i)(this, DO), new XE("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), gE.set(this, (0, vq.i)(this, qm, void 0)), this._subsurfaceScatterAnisotropy = ((0, vq.i)(this, Em), new sE("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), YE.set(this, (0, vq.i)(this, gm, void 0)), this._coatWeight = ((0, vq.i)(this, Ym), new sE("coat_weight", 0, "vCoatWeight", 1, 0)), lE.set(this, (0, vq.i)(this, lm, void 0)), this._coatWeightTexture = ((0, vq.i)(this, Om), new XE("coat_weight", "coatWeight", "COAT_WEIGHT")), OE.set(this, (0, vq.i)(this, mm, void 0)), this._coatColor = ((0, vq.i)(this, xm), new sE("coat_color", sq.d.White(), "vCoatColor", 3, 0)), mE.set(this, (0, vq.i)(this, Am, void 0)), this._coatColorTexture = ((0, vq.i)(this, cm), new XE("coat_color", "coatColor", "COAT_COLOR")), xE.set(this, (0, vq.i)(this, um, void 0)), this._coatRoughness = ((0, vq.i)(this, Bm), new sE("coat_roughness", 0, "vCoatRoughness", 1, 0)), AE.set(this, (0, vq.i)(this, Wm, void 0)), this._coatRoughnessTexture = ((0, vq.i)(this, Nm), new XE("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), cE.set(this, (0, vq.i)(this, am, void 0)), this._coatRoughnessAnisotropy = ((0, vq.i)(this, Vm), new sE("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), aE.set(this, (0, vq.i)(this, dm, void 0)), this._coatRoughnessAnisotropyTexture = ((0, vq.i)(this, jm), new XE("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), VE.set(this, (0, vq.i)(this, Hm, void 0)), this._coatIor = ((0, vq.i)(this, om), new sE("coat_ior", 1.5, "vCoatIor", 1, 0)), dE.set(this, (0, vq.i)(this, Pm, void 0)), this._coatDarkening = ((0, vq.i)(this, Qm), new sE("coat_darkening", 1, "vCoatDarkening", 1, 0)), jE.set(this, (0, vq.i)(this, ym, void 0)), this._coatDarkeningTexture = ((0, vq.i)(this, tm), new XE("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, HE.set(this, (0, vq.i)(this, rm, void 0)), this._fuzzWeight = ((0, vq.i)(this, hm), new sE("fuzz_weight", 0, "vFuzzWeight", 1, 0)), oE.set(this, (0, vq.i)(this, nm, void 0)), this._fuzzWeightTexture = ((0, vq.i)(this, bm), new XE("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), PE.set(this, (0, vq.i)(this, im, void 0)), this._fuzzColor = ((0, vq.i)(this, Zm), new sE("fuzz_color", sq.d.White(), "vFuzzColor", 3, 0)), QE.set(this, (0, vq.i)(this, fm, void 0)), this._fuzzColorTexture = ((0, vq.i)(this, Mm), new XE("fuzz_color", "fuzzColor", "FUZZ_COLOR")), yE.set(this, (0, vq.i)(this, Tm, void 0)), this._fuzzRoughness = ((0, vq.i)(this, zm), new sE("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), vE.set(this, (0, vq.i)(this, Sm, void 0)), this._fuzzRoughnessTexture = ((0, vq.i)(this, pm), new XE("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), hE.set(this, (0, vq.i)(this, Gm, void 0)), this._geometryThinWalled = ((0, vq.i)(this, Lm), new sE("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), nE.set(this, (0, vq.i)(this, Jm, void 0)), this._geometryNormalTexture = ((0, vq.i)(this, km), new XE("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), bE.set(this, (0, vq.i)(this, Rm, void 0)), this._geometryTangent = ((0, vq.i)(this, Um), new sE("geometry_tangent", new Gq.p(1, 0), "vSpecularAnisotropy", 3, 0)), iE.set(this, (0, vq.i)(this, Fm, void 0)), this._geometryTangentTexture = ((0, vq.i)(this, sm), new XE("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), ZE.set(this, (0, vq.i)(this, Xm, void 0)), this._geometryCoatNormalTexture = ((0, vq.i)(this, wm), new XE("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), fE.set(this, (0, vq.i)(this, Km, void 0)), this._geometryCoatTangent = ((0, vq.i)(this, Cm), new sE("geometry_coat_tangent", new Gq.p(1, 0), "vGeometryCoatTangent", 2, 0)), ME.set(this, (0, vq.i)(this, Im, void 0)), this._geometryCoatTangentTexture = ((0, vq.i)(this, em), new XE("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), TE.set(this, (0, vq.i)(this, Dm, void 0)), this._geometryOpacity = ((0, vq.i)(this, qx), new sE("geometry_opacity", 1, "vBaseColor", 4, 3)), zE.set(this, (0, vq.i)(this, Ex, void 0)), this._geometryOpacityTexture = ((0, vq.i)(this, gx), new XE("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), SE.set(this, (0, vq.i)(this, Yx, void 0)), this._geometryThickness = ((0, vq.i)(this, lx), new sE("geometry_thickness", 0, "vGeometryThickness", 1, 0)), pE.set(this, (0, vq.i)(this, Ox, void 0)), this._geometryThicknessTexture = ((0, vq.i)(this, mx), new XE("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), GE.set(this, (0, vq.i)(this, xx, void 0)), this._emissionLuminance = ((0, vq.i)(this, Ax), new sE("emission_luminance", 1, "vLightingIntensity", 4, 1)), LE.set(this, (0, vq.i)(this, cx, void 0)), this._emissionColor = ((0, vq.i)(this, ux), new sE("emission_color", sq.d.Black(), "vEmissionColor", 3)), kE.set(this, (0, vq.i)(this, Bx, void 0)), this._emissionColorTexture = ((0, vq.i)(this, Wx), new XE("emission_color", "emissionColor", "EMISSION_COLOR")), UE.set(this, (0, vq.i)(this, Nx, void 0)), this._thinFilmWeight = ((0, vq.i)(this, ax), new sE("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), wE.set(this, (0, vq.i)(this, Vx, void 0)), this._thinFilmWeightTexture = ((0, vq.i)(this, dx), new XE("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), KE.set(this, (0, vq.i)(this, jx, void 0)), this._thinFilmThickness = ((0, vq.i)(this, Hx), new sE("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), eE.set(this, (0, vq.i)(this, ox, void 0)), this._thinFilmThicknessMin = ((0, vq.i)(this, Px), new sE("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), DE.set(this, (0, vq.i)(this, Qx, void 0)), this._thinFilmThicknessTexture = ((0, vq.i)(this, yx), new XE("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), qg.set(this, (0, vq.i)(this, tx, void 0)), this._thinFilmIor = ((0, vq.i)(this, rx), new sE("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Eg.set(this, (0, vq.i)(this, vx, void 0)), this._ambientOcclusionTexture = ((0, vq.i)(this, hx), new XE("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = qq.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, gg.set(this, (0, vq.i)(this, nx, 1)), Yg.set(this, ((0, vq.i)(this, bx), (0, vq.i)(this, ix, 1))), lg.set(this, ((0, vq.i)(this, Zx), (0, vq.i)(this, fx, !1))), Og.set(this, ((0, vq.i)(this, Mx), (0, vq.i)(this, Tx, !1))), mg.set(this, ((0, vq.i)(this, zx), (0, vq.i)(this, Sx, .4))), xg.set(this, ((0, vq.i)(this, px), (0, vq.i)(this, Gx, !1))), Ag.set(this, ((0, vq.i)(this, Lx), (0, vq.i)(this, Jx, !1))), cg.set(this, ((0, vq.i)(this, kx), (0, vq.i)(this, Rx, !1))), ug.set(this, ((0, vq.i)(this, Ux), (0, vq.i)(this, Fx, !1))), Bg.set(this, ((0, vq.i)(this, sx), (0, vq.i)(this, Xx, !1))), Wg.set(this, ((0, vq.i)(this, wx), (0, vq.i)(this, Kx, .05))), Ng.set(this, ((0, vq.i)(this, Cx), (0, vq.i)(this, Ix, !1))), ag.set(this, ((0, vq.i)(this, ex), (0, vq.i)(this, Dx, !1))), Vg.set(this, ((0, vq.i)(this, qA), (0, vq.i)(this, EA, 4))), dg.set(this, ((0, vq.i)(this, gA), (0, vq.i)(this, YA, !1))), jg.set(this, ((0, vq.i)(this, lA), (0, vq.i)(this, OA, !1))), Hg.set(this, ((0, vq.i)(this, mA), (0, vq.i)(this, xA, !1))), og.set(this, ((0, vq.i)(this, AA), (0, vq.i)(this, cA, !1))), Pg.set(this, ((0, vq.i)(this, uA), (0, vq.i)(this, BA, !1))), Qg.set(this, ((0, vq.i)(this, WA), (0, vq.i)(this, NA, null))), yg.set(this, ((0, vq.i)(this, aA), (0, vq.i)(this, VA, !1))), tg.set(this, ((0, vq.i)(this, dA), (0, vq.i)(this, jA, !1))), rg.set(this, ((0, vq.i)(this, HA), (0, vq.i)(this, oA, !0))), vg.set(this, ((0, vq.i)(this, PA), (0, vq.i)(this, QA, !0))), hg.set(this, ((0, vq.i)(this, yA), (0, vq.i)(this, tA, !1))), ng.set(this, ((0, vq.i)(this, rA), (0, vq.i)(this, vA, !1))), this._lightingInfos = ((0, vq.i)(this, hA), new Gq.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Oq.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bq.c(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, bg.set(this, (0, vq.i)(this, nA, 0)), this.debugLimit = ((0, vq.i)(this, bA), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Oq.e.MATERIAL_OPAQUE, this.ZJ() && !this.ZJ()?.Ba().isWebGPU && this.ZJ().Ba().Ra < 2 && nq.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), qq._noiseTextures[this.ZJ().uniqueId] || (qq._noiseTextures[this.ZJ().uniqueId] = new iq.d(rE.f.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.ZJ(), !1, !0, 1), this.ZJ().MJ.addOnce((() => {
              qq._noiseTextures[this.ZJ().uniqueId]?.dispose(), delete qq._noiseTextures[this.ZJ().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Cq.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Cq.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Sq(this.ZJ()), this._environmentFuzzBRDFTexture = zq(this.ZJ()), this.prePassConfiguration = new Fq.e, this._propertyList = {};
            for (const qq of Object.getOwnPropertyNames(this)) {
              const Eq = this[qq];
              Eq instanceof sE && (this._propertyList[qq] = Eq)
            }
            Object.keys(this._propertyList).forEach((qq => {
              const Eq = this._propertyList[qq];
              let gq = this._uniformsList[Eq.targetUniformName];
              gq ? gq.numComponents !== Eq.targetUniformComponentNum ? nq.b.Error(`Uniform ${Eq.targetUniformName} already exists of size ${gq.numComponents}, but trying to set it to ${Eq.targetUniformComponentNum}.`) : gq.requiredDefine !== Eq.requiredDefine && (gq.requiredDefine = void 0) : (gq = new FE(Eq.targetUniformName, Eq.targetUniformComponentNum), gq.requiredDefine = Eq.requiredDefine, this._uniformsList[Eq.targetUniformName] = gq), "" === gq.firstLinkedKey && (gq.firstLinkedKey = Eq.name), gq.linkedProperties[Eq.name] = Eq
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const qq of Object.getOwnPropertyNames(this)) {
              const Eq = this[qq];
              Eq instanceof XE && (this._samplersList[qq] = Eq)
            }
            for (const qq in this._samplersList) {
              const Eq = this._samplersList[qq].textureDefine;
              this._samplerDefines[Eq] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Eq + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Eq + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Cq.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Cq.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(qq) {
            this._transparencyMode !== qq && (this._transparencyMode = qq, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Oq.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(qq) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(qq)
          }
          clone(Eq) {
            let gq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const lq = tE.d.Clone((() => new qq(Eq, this.ZJ())), this, {
              cloneTexturesOnlyOnce: gq
            });
            return lq.id = Eq, lq.name = Eq, this.stencil.copyTo(lq.stencil), this._clonePlugins(lq, Yq), lq
          }
          serialize() {
            const qq = super.serialize();
            return qq.customType = "BABYLON.OpenPBRMaterial", qq
          }
          static Parse(Eq, gq, Yq) {
            const lq = tE.d.Parse((() => new qq(Eq.name, gq)), Eq, gq, Yq);
            return Eq.stencil && lq.stencil.parse(Eq.stencil, gq, Yq), Oq.e._ParsePlugins(Eq, lq, gq, Yq), lq
          }
          forceCompilation(qq, Eq, gq) {
            const Yq = {
              clipPlane: !1,
              useInstances: !1,
              ...gq
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const gq = new CE({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                lq = this._prepareEffect(qq, qq, gq, void 0, void 0, Yq.useInstances, Yq.clipPlane);
              this._onEffectCreatedObservable && (RE.effect = lq, RE.subMesh = null, this._onEffectCreatedObservable.notifyObservers(RE)), lq.isReady() ? Eq && Eq(this) : lq.onCompileObservable.add((() => {
                Eq && Eq(this)
              }))
            })()
          }
          isReadyForSubMesh(Eq, gq, Yq) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const lq = gq._drawWrapper;
            if (lq.effect && this.isFrozen && lq._wasPreviouslyReady && lq._wasPreviouslyUsingInstances === Yq) return !0;
            gq.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gq.materialDefines = new CE({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Oq = gq.materialDefines;
            if (this._isReadyForSubMesh(gq)) return !0;
            const mq = this.ZJ(),
              xq = mq.Ba();
            if (Oq._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mq.texturesEnabled)) {
              for (const qq in this._samplersList) {
                const Eq = this._samplersList[qq];
                if (Eq.value && !Eq.value.isReadyOrNotBlocking()) return !1
              }
              const Eq = this._getRadianceTexture();
              if (Eq && Cq.c.ReflectionTextureEnabled) {
                if (!Eq.isReadyOrNotBlocking()) return !1;
                if (Eq.irradianceTexture) {
                  if (!Eq.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Eq.sphericalPolynomial && Eq.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Cq.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Cq.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Cq.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (qq._noiseTextures[mq.uniqueId] && !qq._noiseTextures[mq.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Oq, this._eventInfo.subMesh = gq, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Oq._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Oq.AREALIGHTUSED)
              for (let qq = 0; qq < Eq.lightSources.length; qq++)
                if (!Eq.lightSources[qq]._isReady()) return !1;
            if (xq.getCaps().standardDerivatives || Eq.isVerticesDataPresent(Lq.g.NormalKind) || (Eq.createNormals(!0), nq.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Eq.name)), !(0, eq.b)(mq, Eq, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Aq = gq.effect,
              cq = Oq._areLightsDisposed,
              uq = this._prepareEffect(Eq, gq.getRenderingMesh(), Oq, this.onCompiled, this.onError, Yq, null);
            let Bq = !1;
            if (uq)
              if (this._onEffectCreatedObservable && (RE.effect = uq, RE.subMesh = gq, this._onEffectCreatedObservable.notifyObservers(RE)), this.allowShaderHotSwapping && Aq && !uq.isReady()) {
                if (Oq.markAsUnprocessed(), Bq = this.isFrozen, cq) return Oq._areLightsDisposed = !0, !1
              } else mq.resetCachedMaterial(), gq.setEffect(uq, Oq, this._materialContext);
            return !(!gq.effect || !gq.effect.isReady()) && (Oq._renderId = mq.getRenderId(), lq._wasPreviouslyReady = !Bq, lq._wasPreviouslyUsingInstances = !!Yq, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const qq = this._uniformBuffer;
            qq.addUniform("vTangentSpaceParams", 2), qq.addUniform("vLightingIntensity", 4), qq.addUniform("pointSize", 1), qq.addUniform("vDebugMode", 2), qq.addUniform("renderTargetSize", 2), qq.addUniform("cameraInfo", 4), qq.addUniform("vTextureRepetitionHexTilingParams", 4), qq.addUniform("backgroundRefractionMatrix", 16), qq.addUniform("vBackgroundRefractionInfos", 3), (0, eq.pb)(qq, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Eq => {
              qq.addUniform(Eq.name, Eq.numComponents)
            })), Object.values(this._samplersList).forEach((Eq => {
              qq.addUniform(Eq.samplerInfoName, 2), qq.addUniform(Eq.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(qq, Eq, gq, Yq) {
            if (0 === this.geometryThickness) qq.updateFloat("vGeometryThickness", 0);
            else {
              Yq.getRenderingMesh().getWorldMatrix().decompose(Gq.o.Na[0]);
              const Eq = Math.max(Math.abs(Gq.o.Na[0].x), Math.abs(Gq.o.Na[0].y), Math.abs(Gq.o.Na[0].z));
              qq.updateFloat("vGeometryThickness", this.geometryThickness * Eq)
            }
          }
          bindForSubMesh(Eq, gq, Yq) {
            const lq = this.ZJ(),
              Oq = Yq.materialDefines;
            if (!Oq) return;
            const mq = Yq.effect;
            if (!mq) return;
            this._activeEffect = mq, gq.getMeshUniformBuffer().bindToEffect(mq, "Mesh"), gq.transferToEffect(Eq);
            const xq = lq.Ba();
            this._uniformBuffer.bindToEffect(mq, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, lq, gq, Eq, this.isFrozen), NE.e.Bind(xq.currentRenderPassId, this._activeEffect, gq, Eq, this);
            const Aq = lq.activeCamera;
            Aq ? this._uniformBuffer.updateFloat4("cameraInfo", Aq.minZ, Aq.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const cq = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", cq[0], cq[1], cq[2], cq[3]), this._eventInfo.subMesh = Yq, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Oq.OBJECTSPACE_NORMALMAP && (Eq.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const uq = this._mustRebind(lq, mq, Yq, gq.visibility),
              Bq = xq._features.needToAlwaysBindUniformBuffers;
            (0, eq.c)(gq, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BE.e)(this._activeEffect, this._vertexPullingMetadata);
            const Wq = this._uniformBuffer;
            if (uq) {
              this.bindViewProjection(mq);
              const Eq = this._getRadianceTexture();
              if (!Wq.useUbo || !this.isFrozen || !Wq.isSync || Yq._drawWrapper._forceRebindOnNextCall) {
                if (lq.texturesEnabled) {
                  for (const qq in this._samplersList) {
                    const Eq = this._samplersList[qq];
                    Eq.value && (Wq.updateFloat2(Eq.samplerInfoName, Eq.value.coordinatesIndex, Eq.value.level), (0, eq.w)(Eq.value, Wq, Eq.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (lq._mirroredCameraPosition ? Wq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, eq.i)(lq, Oq, Wq, sq.d.White(), Eq, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Wq.updateFloat("pointSize", this.pointSize);
                const qq = this._uniformsArray;
                for (let Eq = 0, gq = qq.length; Eq < gq; Eq++) {
                  const gq = qq[Eq];
                  (void 0 === gq.requiredDefine || Oq[gq.requiredDefine]) && (4 === gq.numComponents ? (gq.populateVectorFromLinkedProperties(Gq.o.Vector4[0]), Wq.updateVector4(gq.name, Gq.o.Vector4[0])) : 3 === gq.numComponents ? (gq.populateVectorFromLinkedProperties(Gq.o.Na[0]), Wq.updateVector3(gq.name, Gq.o.Na[0])) : 2 === gq.numComponents ? (gq.populateVectorFromLinkedProperties(Gq.o.Vector2[0]), Wq.updateFloat2(gq.name, Gq.o.Vector2[0].x, Gq.o.Vector2[0].y)) : 1 === gq.numComponents && Wq.updateFloat(gq.name, gq.linkedProperties[gq.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * lq.environmentIntensity, this._lightingInfos.w = 1, Wq.updateVector4("vLightingIntensity", this._lightingInfos), Wq.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (lq.texturesEnabled) {
                for (const qq in this._samplersList) {
                  const Eq = this._samplersList[qq];
                  Eq.value && Wq.setTexture(Eq.samplerName, Eq.value)
                }
                if ((0, eq.l)(lq, Oq, Wq, Eq, this.realTimeFiltering), Oq.ENVIRONMENTBRDF && Wq.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Oq.FUZZENVIRONMENTBRDF && Wq.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Oq.REFRACTED_BACKGROUND && (Wq.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Wq.Eqq("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Gq.o.Na[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Wq.updateVector3("vBackgroundRefractionInfos", Gq.o.Na[1])), (Oq.ANISOTROPIC || Oq.FUZZ || Oq.REFRACTED_BACKGROUND || Oq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Wq.setTexture("blueNoiseSampler", qq._noiseTextures[this.ZJ().uniqueId]), Oq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const qq = this.sssIrradianceTexture.getSize().width,
                    Eq = this.sssIrradianceTexture.getSize().height;
                  Wq.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Wq.setTexture("sceneDepthSampler", this.sssDepthTexture), Wq.updateFloat2("renderTargetSize", qq, Eq)
                }
              }
              this.ZJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gq) && this.ZJ().depthPeelingRenderer.bind(mq), this._eventInfo.subMesh = Yq, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, uE.i)(this._activeEffect, this, lq), this.bindEyePosition(mq)
            } else Bq && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, lq, lq.Ba(), Yq), !uq && this.isFrozen && !Bq || !lq.lightsEnabled || this._disableLighting || (0, eq.n)(lq, gq, this._activeEffect, Oq, this._maxSimultaneousLights), !uq && this.isFrozen || (this.bindView(mq), (0, eq.f)(lq, gq, this._activeEffect, !0), Oq.NUM_MORPH_INFLUENCERS && (0, eq.p)(gq, this._activeEffect), Oq.BAKED_VERTEX_ANIMATION_TEXTURE && gq.bakedVertexAnimationManager?.bind(mq, Oq.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, eq.o)(Oq, this._activeEffect, lq)), this._afterBind(gq, this._activeEffect, Yq), Wq.update()
          }
          getAnimatables() {
            const qq = super.getAnimatables();
            for (const Eq in this._samplersList) {
              const gq = this._samplersList[Eq];
              gq.value && gq.value.animations && gq.value.animations.length > 0 && qq.push(gq.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && qq.push(this._radianceTexture), qq
          }
          getActiveTextures() {
            const qq = super.getActiveTextures();
            for (const Eq in this._samplersList) {
              const gq = this._samplersList[Eq];
              gq.value && qq.push(gq.value)
            }
            return this._radianceTexture && qq.push(this._radianceTexture), qq
          }
          hasTexture(qq) {
            if (super.hasTexture(qq)) return !0;
            for (const Eq in this._samplersList) {
              if (this._samplersList[Eq].value === qq) return !0
            }
            return this._radianceTexture === qq
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(qq, Eq) {
            if (this._breakShaderLoadedCheck = !0, Eq) {
              this._environmentBRDFTexture && this.ZJ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.ZJ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const qq in this._samplersList) {
                const Eq = this._samplersList[qq];
                Eq.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(qq, Eq)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.ZJ().environmentTexture
          }
          _prepareEffect(Eq, gq, Yq) {
            let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Eq, gq, Yq, mq, xq), !Yq.isDirty) return null;
            Yq.markAsProcessed();
            const Aq = this.ZJ().Ba(),
              cq = new Iq.c;
            let uq = 0;
            Yq.USESPHERICALINVERTEX && cq.addFallback(uq++, "USESPHERICALINVERTEX"), Yq.FOG && cq.addFallback(uq, "FOG"), Yq.SPECULARAA && cq.addFallback(uq, "SPECULARAA"), Yq.POINTSIZE && cq.addFallback(uq, "POINTSIZE"), Yq.LOGARITHMICDEPTH && cq.addFallback(uq, "LOGARITHMICDEPTH"), Yq.PARALLAX && cq.addFallback(uq, "PARALLAX"), Yq.PARALLAX_RHS && cq.addFallback(uq, "PARALLAX_RHS"), Yq.PARALLAXOCCLUSION && cq.addFallback(uq++, "PARALLAXOCCLUSION"), Yq.ENVIRONMENTBRDF && cq.addFallback(uq++, "ENVIRONMENTBRDF"), Yq.TANGENT && cq.addFallback(uq++, "TANGENT"), uq = (0, eq.z)(Yq, cq, this._maxSimultaneousLights, uq), Yq.SPECULARTERM && cq.addFallback(uq++, "SPECULARTERM"), Yq.USESPHERICALFROMREFLECTIONMAP && cq.addFallback(uq++, "USESPHERICALFROMREFLECTIONMAP"), Yq.USEIRRADIANCEMAP && cq.addFallback(uq++, "USEIRRADIANCEMAP"), Yq.NORMAL && cq.addFallback(uq++, "NORMAL"), Yq.VERTEXCOLOR && cq.addFallback(uq++, "VERTEXCOLOR"), Yq.MORPHTARGETS && cq.addFallback(uq++, "MORPHTARGETS"), Yq.MULTIVIEW && cq.addFallback(0, "MULTIVIEW");
            const Bq = [Lq.g.PositionKind];
            Yq.NORMAL && Bq.push(Lq.g.NormalKind), Yq.TANGENT && Bq.push(Lq.g.TangentKind);
            for (let qq = 1; qq <= 6; ++qq) Yq["UV" + qq] && Bq.push(`uv${1===qq?"":qq}`);
            Yq.VERTEXCOLOR && Bq.push(Lq.g.ColorKind), (0, eq.G)(Bq, Eq, Yq, cq), (0, eq.J)(Bq, Yq), (0, eq.M)(Bq, Eq, Yq), (0, eq.D)(Bq, Eq, Yq);
            let Wq = "openpbr";
            const Nq = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const qq in this._uniformsList) Nq.push(qq);
            const aq = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Yq.FUZZENVIRONMENTBRDF && aq.push("environmentFuzzBrdfSampler"), Yq.REFRACTED_BACKGROUND && aq.push("backgroundRefractionSampler"), (Yq.ANISOTROPIC || Yq.FUZZ || Yq.REFRACTED_BACKGROUND || Yq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && aq.push("blueNoiseSampler"), Yq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (aq.push("sceneIrradianceSampler"), aq.push("sceneDepthSampler"));
            for (const qq in this._samplersList) {
              const Eq = this._samplersList[qq];
              aq.push(Eq.samplerName), Nq.push(Eq.samplerInfoName), Nq.push(Eq.samplerMatrixName)
            }(0, eq.rb)(Nq, aq, !0);
            const Vq = ["Material", "Scene", "Mesh"],
              dq = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Yq.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = cq, this._eventInfo.fallbackRank = uq, this._eventInfo.defines = Yq, this._eventInfo.uniforms = Nq, this._eventInfo.attributes = Bq, this._eventInfo.samplers = aq, this._eventInfo.uniformBuffersNames = Vq, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eq, this._eventInfo.indexParameters = dq, this._callbackPluginEventGeneric(128, this._eventInfo), NE.e.AddUniformsAndSamplers(Nq, aq), Fq.e.AddUniforms(Nq), Fq.e.AddSamplers(aq), (0, uE.e)(Nq), this._useVertexPulling) {
              const qq = gq?.geometry;
              qq && (this._vertexPullingMetadata = (0, BE.f)(qq), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((qq, Eq) => {
                Nq.push(`vp_${Eq}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            wq.e && (wq.e.PrepareUniforms(Nq, Yq), wq.e.PrepareSamplers(aq, Yq)), (0, eq.vb)({
              uniformsNames: Nq,
              uniformBuffersNames: Vq,
              samplers: aq,
              defines: Yq,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const jq = {};
            this.customShaderNameResolve && (Wq = this.customShaderNameResolve(Wq, Nq, Vq, aq, Yq, Bq, jq));
            const Hq = Yq.toString(),
              oq = Aq.createEffect(Wq, {
                attributes: Bq,
                uniformsNames: Nq,
                uniformBuffersNames: Vq,
                samplers: aq,
                defines: Hq,
                fallbacks: cq,
                onCompiled: lq,
                onError: Oq,
                indexParameters: dq,
                processFinalCode: jq.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Yq.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: qq._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Aq);
            return this._eventInfo.customCode = void 0, oq
          }
          _prepareDefines(Eq, gq, Yq) {
            let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              mq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const xq = gq.hasThinInstances,
              Aq = this.ZJ(),
              cq = Aq.Ba();
            (0, eq._)(Aq, Eq, Yq, !0, this._maxSimultaneousLights, this._disableLighting), Yq._needNormals = !0, (0, eq.hb)(Aq, Yq);
            const uq = this.needAlphaBlendingForMesh(Eq) && this.ZJ().useOrderIndependentTransparency;
            if ((0, eq.nb)(Aq, Yq, this.canRenderToMRT && !uq), (0, eq.jb)(Aq, Yq, uq), NE.e.PrepareDefines(cq.currentRenderPassId, Eq, Yq), Yq._areTexturesDirty) {
              Yq._needUVs = !1;
              for (let qq = 1; qq <= 6; ++qq) Yq["MAINUV" + qq] = !1;
              if (Aq.texturesEnabled) {
                for (const gq in this._samplersList) {
                  const qq = this._samplersList[gq];
                  qq.value ? ((0, eq.bb)(qq.value, Yq, qq.textureDefine), Yq[qq.textureDefine + "_GAMMA"] = qq.value.gammaSpace) : Yq[qq.textureDefine] = !1
                }
                const qq = this._getRadianceTexture(),
                  Eq = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || cq.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, eq.W)(Aq, qq, Yq, this.realTimeFiltering, this.realTimeFilteringQuality, !Eq), this._baseMetalnessTexture && (Yq.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Yq.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Yq.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Yq.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Yq.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Yq.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Yq.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Yq.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Yq.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Yq.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Yq.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Yq.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Cq.c.DiffuseTextureEnabled ? (Yq.PARALLAX = !0, Yq.PARALLAX_RHS = Aq.useRightHandedSystem, Yq.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Yq.PARALLAX = !1, Yq.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Yq.PARALLAX = !1, Yq.PARALLAX_RHS = !1, Yq.PARALLAXOCCLUSION = !1, Yq.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Cq.c.ReflectionTextureEnabled ? (Yq.ENVIRONMENTBRDF = !0, Yq.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Yq.ENVIRONMENTBRDF = !1, Yq.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Yq.FUZZENVIRONMENTBRDF = !0 : Yq.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Yq.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Cq.c.RefractionTextureEnabled, Yq.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Yq.REFRACTED_LIGHTS = !0;
                  const qq = this._getRadianceTexture();
                  qq ? (Yq.REFRACTED_ENVIRONMENT = Cq.c.RefractionTextureEnabled, Yq.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.ZJ().useRightHandedSystem ? !qq.invertZ : qq.invertZ, Yq.REFRACTED_ENVIRONMENT_LOCAL_CUBE = qq.isCube && qq.boundingBoxSize) : Yq.REFRACTED_ENVIRONMENT = !1
                } else Yq.REFRACTED_BACKGROUND = !1, Yq.REFRACTED_LIGHTS = !1, Yq.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Yq.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Yq.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Oq.e.LIGHTFALLOFF_STANDARD ? (Yq.USEPHYSICALLIGHTFALLOFF = !1, Yq.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Oq.e.LIGHTFALLOFF_GLTF ? (Yq.USEPHYSICALLIGHTFALLOFF = !1, Yq.USEGLTFLIGHTFALLOFF = !0) : (Yq.USEPHYSICALLIGHTFALLOFF = !0, Yq.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Yq.TWOSIDEDLIGHTING = !0 : Yq.TWOSIDEDLIGHTING = !1, Yq.MIRRORED = !!Aq._mirroredCameraPosition, Yq.SPECULARAA = cq.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Yq._areTexturesDirty || Yq._areMiscDirty) && (Yq.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Yq.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Yq.ALPHABLEND = this.needAlphaBlendingForMesh(Eq)), Yq._areTexturesDirty && (Yq.TEXTURE_REPETITION_MODE = cq.version > 1 || cq.isWebGPU ? this.textureRepetitionMode : 0), Yq._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Yq), Yq.FORCENORMALFORWARD = this._forceNormalForward, Yq.RADIANCEOCCLUSION = this._useRadianceOcclusion, Yq.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && qq._noiseTextures[Aq.uniqueId] && Cq.c.ReflectionTextureEnabled ? (Yq.ANISOTROPIC = !0, Eq.isVerticesDataPresent(Lq.g.TangentKind) || (Yq._needUVs = !0, Yq.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Yq.USE_GLTF_STYLE_ANISOTROPY = !0), Yq.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Yq.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Yq.ANISOTROPIC = !1, Yq.USE_GLTF_STYLE_ANISOTROPY = !1, Yq.ANISOTROPIC_BASE = !1, Yq.ANISOTROPIC_COAT = !1), Yq.THIN_FILM = this.thinFilmWeight > 0, Yq.IRIDESCENCE = this.thinFilmWeight > 0, Yq.DISPERSION = this.transmissionDispersionScale > 0, Yq.SCATTERING = this.hasScattering;
            if (Yq.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Yq.TRANSMISSION_SLAB = this.transmissionWeight > 0, Yq.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Yq.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Yq.PREPASS && (Yq.SUBSURFACE_SLAB || Yq.TRANSMISSION_SLAB_VOLUME)) {
              let qq = !1;
              if (!this.sssIrradianceTexture && Aq.geometryBufferRenderer) {
                const Eq = Aq.geometryBufferRenderer.getTextureIndex(JE.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Aq.geometryBufferRenderer.getGBuffer().textures[Eq], qq = !0
              }
              if (!this.sssDepthTexture && Aq.geometryBufferRenderer) {
                const Eq = Aq.geometryBufferRenderer.getTextureIndex(JE.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Aq.geometryBufferRenderer.getGBuffer().textures[Eq], qq = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Yq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, qq && (Yq.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Yq.FUZZ = this.fuzzWeight > 0 && Cq.c.ReflectionTextureEnabled, Yq.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Yq.FUZZ ? (Eq.isVerticesDataPresent(Lq.g.TangentKind) || (Yq._needUVs = !0, Yq.MAINUV1 = !0), this._environmentFuzzBRDFTexture = zq(this.ZJ()), Yq.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Yq.FUZZENVIRONMENTBRDF = !1, Yq.FUZZ_IBL_SAMPLES = 0), Yq._areMiscDirty && ((0, eq.fb)(Eq, Aq, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eq), Yq, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gq, this._isVertexOutputInvariant), Yq.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Eq.isVerticesDataPresent(Lq.g.NormalKind), Yq.DEBUGMODE = this._debugMode), (0, eq.V)(Aq, cq, this, Yq, !!lq, mq, xq), this._eventInfo.defines = Yq, this._eventInfo.mesh = Eq, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, eq.R)(Eq, Yq, !0, !0, !0, this._transparencyMode !== Oq.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Eq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, mq = new WeakMap, xq = new WeakMap, Aq = new WeakMap, cq = new WeakMap, uq = new WeakMap, Bq = new WeakMap, Wq = new WeakMap, Nq = new WeakMap, aq = new WeakMap, Vq = new WeakMap, dq = new WeakMap, jq = new WeakMap, Hq = new WeakMap, oq = new WeakMap, Pq = new WeakMap, Qq = new WeakMap, yq = new WeakMap, tq = new WeakMap, rq = new WeakMap, Zq = new WeakMap, fq = new WeakMap, Mq = new WeakMap, Tq = new WeakMap, pq = new WeakMap, Jq = new WeakMap, kq = new WeakMap, Rq = new WeakMap, Uq = new WeakMap, Xq = new WeakMap, Kq = new WeakMap, Dq = new WeakMap, qE = new WeakMap, EE = new WeakMap, gE = new WeakMap, YE = new WeakMap, lE = new WeakMap, OE = new WeakMap, mE = new WeakMap, xE = new WeakMap, AE = new WeakMap, cE = new WeakMap, aE = new WeakMap, VE = new WeakMap, dE = new WeakMap, jE = new WeakMap, HE = new WeakMap, oE = new WeakMap, PE = new WeakMap, QE = new WeakMap, yE = new WeakMap, vE = new WeakMap, hE = new WeakMap, nE = new WeakMap, bE = new WeakMap, iE = new WeakMap, ZE = new WeakMap, fE = new WeakMap, ME = new WeakMap, TE = new WeakMap, zE = new WeakMap, SE = new WeakMap, pE = new WeakMap, GE = new WeakMap, LE = new WeakMap, kE = new WeakMap, UE = new WeakMap, wE = new WeakMap, KE = new WeakMap, eE = new WeakMap, DE = new WeakMap, qg = new WeakMap, Eg = new WeakMap, gg = new WeakMap, Yg = new WeakMap, lg = new WeakMap, Og = new WeakMap, mg = new WeakMap, xg = new WeakMap, Ag = new WeakMap, cg = new WeakMap, ug = new WeakMap, Bg = new WeakMap, Wg = new WeakMap, Ng = new WeakMap, ag = new WeakMap, Vg = new WeakMap, dg = new WeakMap, jg = new WeakMap, Hg = new WeakMap, og = new WeakMap, Pg = new WeakMap, Qg = new WeakMap, yg = new WeakMap, tg = new WeakMap, rg = new WeakMap, vg = new WeakMap, hg = new WeakMap, ng = new WeakMap, bg = new WeakMap, (() => {
          const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zl[Symbol.metadata] ?? null) : void 0;
          ig = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Zg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], fg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Mg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Tg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], zg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Sg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], pg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Gg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Lg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Jg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], kg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Rg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Ug = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Fg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], sg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Xg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], wg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Kg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Cg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Ig = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], eg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], Dg = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], qY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], EY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], gY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], YY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], lY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], OY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], mY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], xY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], AY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], cY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], uY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], BY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], WY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], NY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], aY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], VY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], dY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], jY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], HY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], oY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], PY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], QY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], yY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], tY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], rY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], vY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], hY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], nY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], bY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], iY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], ZY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], fY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], MY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], TY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], zY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], SY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], pY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], GY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], LY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], JY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], kY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], RY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], UY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], FY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], sY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], XY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], wY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], KY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], CY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], IY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], eY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], DY = [(0, hq.d)("_markAllSubMeshesAsTexturesDirty")], ql = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], El = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], gl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Yl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], ll = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ol = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ml = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], xl = [(0, hq.M)()], Al = [(0, hq.M)()], cl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ul = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Bl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Wl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Nl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsLightsDirty")], al = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Vl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsLightsDirty")], dl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], jl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Hl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ol = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Pl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Ql = [(0, hq.f)("_markAllSubMeshesAsTexturesDirty")], yl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], tl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], rl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], vl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], hl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], nl = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], bl = [(0, hq.f)("_markAllSubMeshesAsMiscDirty")], il = [(0, hq.M)()], (0, vq.f)(qq, null, ig, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseWeight" in qq,
              get: qq => qq.baseWeight,
              set: (qq, Eq) => {
                qq.baseWeight = Eq
              }
            },
            metadata: Eq
          }, Ml, Tl), (0, vq.f)(qq, null, Zg, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseWeightTexture" in qq,
              get: qq => qq.baseWeightTexture,
              set: (qq, Eq) => {
                qq.baseWeightTexture = Eq
              }
            },
            metadata: Eq
          }, zl, Sl), (0, vq.f)(qq, null, fg, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseColor" in qq,
              get: qq => qq.baseColor,
              set: (qq, Eq) => {
                qq.baseColor = Eq
              }
            },
            metadata: Eq
          }, pl, Gl), (0, vq.f)(qq, null, Mg, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseColorTexture" in qq,
              get: qq => qq.baseColorTexture,
              set: (qq, Eq) => {
                qq.baseColorTexture = Eq
              }
            },
            metadata: Eq
          }, Ll, Jl), (0, vq.f)(qq, null, Tg, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseDiffuseRoughness" in qq,
              get: qq => qq.baseDiffuseRoughness,
              set: (qq, Eq) => {
                qq.baseDiffuseRoughness = Eq
              }
            },
            metadata: Eq
          }, kl, Rl), (0, vq.f)(qq, null, zg, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseDiffuseRoughnessTexture" in qq,
              get: qq => qq.baseDiffuseRoughnessTexture,
              set: (qq, Eq) => {
                qq.baseDiffuseRoughnessTexture = Eq
              }
            },
            metadata: Eq
          }, Ul, Fl), (0, vq.f)(qq, null, Sg, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseMetalness" in qq,
              get: qq => qq.baseMetalness,
              set: (qq, Eq) => {
                qq.baseMetalness = Eq
              }
            },
            metadata: Eq
          }, sl, Xl), (0, vq.f)(qq, null, pg, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "baseMetalnessTexture" in qq,
              get: qq => qq.baseMetalnessTexture,
              set: (qq, Eq) => {
                qq.baseMetalnessTexture = Eq
              }
            },
            metadata: Eq
          }, wl, Kl), (0, vq.f)(qq, null, Gg, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularWeight" in qq,
              get: qq => qq.specularWeight,
              set: (qq, Eq) => {
                qq.specularWeight = Eq
              }
            },
            metadata: Eq
          }, Cl, Il), (0, vq.f)(qq, null, Lg, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularWeightTexture" in qq,
              get: qq => qq.specularWeightTexture,
              set: (qq, Eq) => {
                qq.specularWeightTexture = Eq
              }
            },
            metadata: Eq
          }, el, Dl), (0, vq.f)(qq, null, Jg, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularColor" in qq,
              get: qq => qq.specularColor,
              set: (qq, Eq) => {
                qq.specularColor = Eq
              }
            },
            metadata: Eq
          }, qO, EO), (0, vq.f)(qq, null, kg, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularColorTexture" in qq,
              get: qq => qq.specularColorTexture,
              set: (qq, Eq) => {
                qq.specularColorTexture = Eq
              }
            },
            metadata: Eq
          }, gO, YO), (0, vq.f)(qq, null, Rg, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularRoughness" in qq,
              get: qq => qq.specularRoughness,
              set: (qq, Eq) => {
                qq.specularRoughness = Eq
              }
            },
            metadata: Eq
          }, lO, OO), (0, vq.f)(qq, null, Ug, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularRoughnessTexture" in qq,
              get: qq => qq.specularRoughnessTexture,
              set: (qq, Eq) => {
                qq.specularRoughnessTexture = Eq
              }
            },
            metadata: Eq
          }, mO, xO), (0, vq.f)(qq, null, Fg, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularRoughnessAnisotropy" in qq,
              get: qq => qq.specularRoughnessAnisotropy,
              set: (qq, Eq) => {
                qq.specularRoughnessAnisotropy = Eq
              }
            },
            metadata: Eq
          }, AO, cO), (0, vq.f)(qq, null, sg, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularRoughnessAnisotropyTexture" in qq,
              get: qq => qq.specularRoughnessAnisotropyTexture,
              set: (qq, Eq) => {
                qq.specularRoughnessAnisotropyTexture = Eq
              }
            },
            metadata: Eq
          }, uO, BO), (0, vq.f)(qq, null, Xg, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularIor" in qq,
              get: qq => qq.specularIor,
              set: (qq, Eq) => {
                qq.specularIor = Eq
              }
            },
            metadata: Eq
          }, WO, NO), (0, vq.f)(qq, null, wg, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionWeight" in qq,
              get: qq => qq.transmissionWeight,
              set: (qq, Eq) => {
                qq.transmissionWeight = Eq
              }
            },
            metadata: Eq
          }, aO, VO), (0, vq.f)(qq, null, Kg, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionWeightTexture" in qq,
              get: qq => qq.transmissionWeightTexture,
              set: (qq, Eq) => {
                qq.transmissionWeightTexture = Eq
              }
            },
            metadata: Eq
          }, dO, jO), (0, vq.f)(qq, null, Cg, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionColor" in qq,
              get: qq => qq.transmissionColor,
              set: (qq, Eq) => {
                qq.transmissionColor = Eq
              }
            },
            metadata: Eq
          }, HO, oO), (0, vq.f)(qq, null, Ig, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionColorTexture" in qq,
              get: qq => qq.transmissionColorTexture,
              set: (qq, Eq) => {
                qq.transmissionColorTexture = Eq
              }
            },
            metadata: Eq
          }, PO, QO), (0, vq.f)(qq, null, eg, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionDepth" in qq,
              get: qq => qq.transmissionDepth,
              set: (qq, Eq) => {
                qq.transmissionDepth = Eq
              }
            },
            metadata: Eq
          }, yO, tO), (0, vq.f)(qq, null, Dg, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionDepthTexture" in qq,
              get: qq => qq.transmissionDepthTexture,
              set: (qq, Eq) => {
                qq.transmissionDepthTexture = Eq
              }
            },
            metadata: Eq
          }, rO, vO), (0, vq.f)(qq, null, qY, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionScatter" in qq,
              get: qq => qq.transmissionScatter,
              set: (qq, Eq) => {
                qq.transmissionScatter = Eq
              }
            },
            metadata: Eq
          }, hO, nO), (0, vq.f)(qq, null, EY, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionScatterTexture" in qq,
              get: qq => qq.transmissionScatterTexture,
              set: (qq, Eq) => {
                qq.transmissionScatterTexture = Eq
              }
            },
            metadata: Eq
          }, bO, iO), (0, vq.f)(qq, null, gY, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionScatterAnisotropy" in qq,
              get: qq => qq.transmissionScatterAnisotropy,
              set: (qq, Eq) => {
                qq.transmissionScatterAnisotropy = Eq
              }
            },
            metadata: Eq
          }, ZO, fO), (0, vq.f)(qq, null, YY, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionDispersionScale" in qq,
              get: qq => qq.transmissionDispersionScale,
              set: (qq, Eq) => {
                qq.transmissionDispersionScale = Eq
              }
            },
            metadata: Eq
          }, MO, TO), (0, vq.f)(qq, null, lY, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionDispersionScaleTexture" in qq,
              get: qq => qq.transmissionDispersionScaleTexture,
              set: (qq, Eq) => {
                qq.transmissionDispersionScaleTexture = Eq
              }
            },
            metadata: Eq
          }, zO, SO), (0, vq.f)(qq, null, OY, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: qq => "transmissionDispersionAbbeNumber" in qq,
              get: qq => qq.transmissionDispersionAbbeNumber,
              set: (qq, Eq) => {
                qq.transmissionDispersionAbbeNumber = Eq
              }
            },
            metadata: Eq
          }, pO, GO), (0, vq.f)(qq, null, mY, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceWeight" in qq,
              get: qq => qq.subsurfaceWeight,
              set: (qq, Eq) => {
                qq.subsurfaceWeight = Eq
              }
            },
            metadata: Eq
          }, LO, JO), (0, vq.f)(qq, null, xY, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceWeightTexture" in qq,
              get: qq => qq.subsurfaceWeightTexture,
              set: (qq, Eq) => {
                qq.subsurfaceWeightTexture = Eq
              }
            },
            metadata: Eq
          }, kO, RO), (0, vq.f)(qq, null, AY, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceColor" in qq,
              get: qq => qq.subsurfaceColor,
              set: (qq, Eq) => {
                qq.subsurfaceColor = Eq
              }
            },
            metadata: Eq
          }, UO, FO), (0, vq.f)(qq, null, cY, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceColorTexture" in qq,
              get: qq => qq.subsurfaceColorTexture,
              set: (qq, Eq) => {
                qq.subsurfaceColorTexture = Eq
              }
            },
            metadata: Eq
          }, sO, XO), (0, vq.f)(qq, null, uY, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceRadius" in qq,
              get: qq => qq.subsurfaceRadius,
              set: (qq, Eq) => {
                qq.subsurfaceRadius = Eq
              }
            },
            metadata: Eq
          }, wO, KO), (0, vq.f)(qq, null, BY, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceRadiusScale" in qq,
              get: qq => qq.subsurfaceRadiusScale,
              set: (qq, Eq) => {
                qq.subsurfaceRadiusScale = Eq
              }
            },
            metadata: Eq
          }, CO, IO), (0, vq.f)(qq, null, WY, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceRadiusScaleTexture" in qq,
              get: qq => qq.subsurfaceRadiusScaleTexture,
              set: (qq, Eq) => {
                qq.subsurfaceRadiusScaleTexture = Eq
              }
            },
            metadata: Eq
          }, eO, DO), (0, vq.f)(qq, null, NY, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: qq => "subsurfaceScatterAnisotropy" in qq,
              get: qq => qq.subsurfaceScatterAnisotropy,
              set: (qq, Eq) => {
                qq.subsurfaceScatterAnisotropy = Eq
              }
            },
            metadata: Eq
          }, qm, Em), (0, vq.f)(qq, null, aY, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatWeight" in qq,
              get: qq => qq.coatWeight,
              set: (qq, Eq) => {
                qq.coatWeight = Eq
              }
            },
            metadata: Eq
          }, gm, Ym), (0, vq.f)(qq, null, VY, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatWeightTexture" in qq,
              get: qq => qq.coatWeightTexture,
              set: (qq, Eq) => {
                qq.coatWeightTexture = Eq
              }
            },
            metadata: Eq
          }, lm, Om), (0, vq.f)(qq, null, dY, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatColor" in qq,
              get: qq => qq.coatColor,
              set: (qq, Eq) => {
                qq.coatColor = Eq
              }
            },
            metadata: Eq
          }, mm, xm), (0, vq.f)(qq, null, jY, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatColorTexture" in qq,
              get: qq => qq.coatColorTexture,
              set: (qq, Eq) => {
                qq.coatColorTexture = Eq
              }
            },
            metadata: Eq
          }, Am, cm), (0, vq.f)(qq, null, HY, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatRoughness" in qq,
              get: qq => qq.coatRoughness,
              set: (qq, Eq) => {
                qq.coatRoughness = Eq
              }
            },
            metadata: Eq
          }, um, Bm), (0, vq.f)(qq, null, oY, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatRoughnessTexture" in qq,
              get: qq => qq.coatRoughnessTexture,
              set: (qq, Eq) => {
                qq.coatRoughnessTexture = Eq
              }
            },
            metadata: Eq
          }, Wm, Nm), (0, vq.f)(qq, null, PY, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatRoughnessAnisotropy" in qq,
              get: qq => qq.coatRoughnessAnisotropy,
              set: (qq, Eq) => {
                qq.coatRoughnessAnisotropy = Eq
              }
            },
            metadata: Eq
          }, am, Vm), (0, vq.f)(qq, null, QY, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatRoughnessAnisotropyTexture" in qq,
              get: qq => qq.coatRoughnessAnisotropyTexture,
              set: (qq, Eq) => {
                qq.coatRoughnessAnisotropyTexture = Eq
              }
            },
            metadata: Eq
          }, dm, jm), (0, vq.f)(qq, null, yY, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatIor" in qq,
              get: qq => qq.coatIor,
              set: (qq, Eq) => {
                qq.coatIor = Eq
              }
            },
            metadata: Eq
          }, Hm, om), (0, vq.f)(qq, null, tY, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatDarkening" in qq,
              get: qq => qq.coatDarkening,
              set: (qq, Eq) => {
                qq.coatDarkening = Eq
              }
            },
            metadata: Eq
          }, Pm, Qm), (0, vq.f)(qq, null, rY, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "coatDarkeningTexture" in qq,
              get: qq => qq.coatDarkeningTexture,
              set: (qq, Eq) => {
                qq.coatDarkeningTexture = Eq
              }
            },
            metadata: Eq
          }, ym, tm), (0, vq.f)(qq, null, vY, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzWeight" in qq,
              get: qq => qq.fuzzWeight,
              set: (qq, Eq) => {
                qq.fuzzWeight = Eq
              }
            },
            metadata: Eq
          }, rm, hm), (0, vq.f)(qq, null, hY, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzWeightTexture" in qq,
              get: qq => qq.fuzzWeightTexture,
              set: (qq, Eq) => {
                qq.fuzzWeightTexture = Eq
              }
            },
            metadata: Eq
          }, nm, bm), (0, vq.f)(qq, null, nY, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzColor" in qq,
              get: qq => qq.fuzzColor,
              set: (qq, Eq) => {
                qq.fuzzColor = Eq
              }
            },
            metadata: Eq
          }, im, Zm), (0, vq.f)(qq, null, bY, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzColorTexture" in qq,
              get: qq => qq.fuzzColorTexture,
              set: (qq, Eq) => {
                qq.fuzzColorTexture = Eq
              }
            },
            metadata: Eq
          }, fm, Mm), (0, vq.f)(qq, null, iY, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzRoughness" in qq,
              get: qq => qq.fuzzRoughness,
              set: (qq, Eq) => {
                qq.fuzzRoughness = Eq
              }
            },
            metadata: Eq
          }, Tm, zm), (0, vq.f)(qq, null, ZY, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "fuzzRoughnessTexture" in qq,
              get: qq => qq.fuzzRoughnessTexture,
              set: (qq, Eq) => {
                qq.fuzzRoughnessTexture = Eq
              }
            },
            metadata: Eq
          }, Sm, pm), (0, vq.f)(qq, null, fY, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryThinWalled" in qq,
              get: qq => qq.geometryThinWalled,
              set: (qq, Eq) => {
                qq.geometryThinWalled = Eq
              }
            },
            metadata: Eq
          }, Gm, Lm), (0, vq.f)(qq, null, MY, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryNormalTexture" in qq,
              get: qq => qq.geometryNormalTexture,
              set: (qq, Eq) => {
                qq.geometryNormalTexture = Eq
              }
            },
            metadata: Eq
          }, Jm, km), (0, vq.f)(qq, null, TY, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryTangent" in qq,
              get: qq => qq.geometryTangent,
              set: (qq, Eq) => {
                qq.geometryTangent = Eq
              }
            },
            metadata: Eq
          }, Rm, Um), (0, vq.f)(qq, null, zY, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryTangentTexture" in qq,
              get: qq => qq.geometryTangentTexture,
              set: (qq, Eq) => {
                qq.geometryTangentTexture = Eq
              }
            },
            metadata: Eq
          }, Fm, sm), (0, vq.f)(qq, null, SY, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryCoatNormalTexture" in qq,
              get: qq => qq.geometryCoatNormalTexture,
              set: (qq, Eq) => {
                qq.geometryCoatNormalTexture = Eq
              }
            },
            metadata: Eq
          }, Xm, wm), (0, vq.f)(qq, null, pY, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryCoatTangent" in qq,
              get: qq => qq.geometryCoatTangent,
              set: (qq, Eq) => {
                qq.geometryCoatTangent = Eq
              }
            },
            metadata: Eq
          }, Km, Cm), (0, vq.f)(qq, null, GY, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryCoatTangentTexture" in qq,
              get: qq => qq.geometryCoatTangentTexture,
              set: (qq, Eq) => {
                qq.geometryCoatTangentTexture = Eq
              }
            },
            metadata: Eq
          }, Im, em), (0, vq.f)(qq, null, LY, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryOpacity" in qq,
              get: qq => qq.geometryOpacity,
              set: (qq, Eq) => {
                qq.geometryOpacity = Eq
              }
            },
            metadata: Eq
          }, Dm, qx), (0, vq.f)(qq, null, JY, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryOpacityTexture" in qq,
              get: qq => qq.geometryOpacityTexture,
              set: (qq, Eq) => {
                qq.geometryOpacityTexture = Eq
              }
            },
            metadata: Eq
          }, Ex, gx), (0, vq.f)(qq, null, kY, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryThickness" in qq,
              get: qq => qq.geometryThickness,
              set: (qq, Eq) => {
                qq.geometryThickness = Eq
              }
            },
            metadata: Eq
          }, Yx, lx), (0, vq.f)(qq, null, RY, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "geometryThicknessTexture" in qq,
              get: qq => qq.geometryThicknessTexture,
              set: (qq, Eq) => {
                qq.geometryThicknessTexture = Eq
              }
            },
            metadata: Eq
          }, Ox, mx), (0, vq.f)(qq, null, UY, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissionLuminance" in qq,
              get: qq => qq.emissionLuminance,
              set: (qq, Eq) => {
                qq.emissionLuminance = Eq
              }
            },
            metadata: Eq
          }, xx, Ax), (0, vq.f)(qq, null, FY, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissionColor" in qq,
              get: qq => qq.emissionColor,
              set: (qq, Eq) => {
                qq.emissionColor = Eq
              }
            },
            metadata: Eq
          }, cx, ux), (0, vq.f)(qq, null, sY, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissionColorTexture" in qq,
              get: qq => qq.emissionColorTexture,
              set: (qq, Eq) => {
                qq.emissionColorTexture = Eq
              }
            },
            metadata: Eq
          }, Bx, Wx), (0, vq.f)(qq, null, XY, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmWeight" in qq,
              get: qq => qq.thinFilmWeight,
              set: (qq, Eq) => {
                qq.thinFilmWeight = Eq
              }
            },
            metadata: Eq
          }, Nx, ax), (0, vq.f)(qq, null, wY, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmWeightTexture" in qq,
              get: qq => qq.thinFilmWeightTexture,
              set: (qq, Eq) => {
                qq.thinFilmWeightTexture = Eq
              }
            },
            metadata: Eq
          }, Vx, dx), (0, vq.f)(qq, null, KY, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmThickness" in qq,
              get: qq => qq.thinFilmThickness,
              set: (qq, Eq) => {
                qq.thinFilmThickness = Eq
              }
            },
            metadata: Eq
          }, jx, Hx), (0, vq.f)(qq, null, CY, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmThicknessMin" in qq,
              get: qq => qq.thinFilmThicknessMin,
              set: (qq, Eq) => {
                qq.thinFilmThicknessMin = Eq
              }
            },
            metadata: Eq
          }, ox, Px), (0, vq.f)(qq, null, IY, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmThicknessTexture" in qq,
              get: qq => qq.thinFilmThicknessTexture,
              set: (qq, Eq) => {
                qq.thinFilmThicknessTexture = Eq
              }
            },
            metadata: Eq
          }, Qx, yx), (0, vq.f)(qq, null, eY, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: qq => "thinFilmIor" in qq,
              get: qq => qq.thinFilmIor,
              set: (qq, Eq) => {
                qq.thinFilmIor = Eq
              }
            },
            metadata: Eq
          }, tx, rx), (0, vq.f)(qq, null, DY, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "ambientOcclusionTexture" in qq,
              get: qq => qq.ambientOcclusionTexture,
              set: (qq, Eq) => {
                qq.ambientOcclusionTexture = Eq
              }
            },
            metadata: Eq
          }, vx, hx), (0, vq.f)(qq, null, ql, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: qq => "directIntensity" in qq,
              get: qq => qq.directIntensity,
              set: (qq, Eq) => {
                qq.directIntensity = Eq
              }
            },
            metadata: Eq
          }, nx, bx), (0, vq.f)(qq, null, El, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: qq => "environmentIntensity" in qq,
              get: qq => qq.environmentIntensity,
              set: (qq, Eq) => {
                qq.environmentIntensity = Eq
              }
            },
            metadata: Eq
          }, ix, Zx), (0, vq.f)(qq, null, gl, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "useSpecularWeightFromTextureAlpha" in qq,
              get: qq => qq.useSpecularWeightFromTextureAlpha,
              set: (qq, Eq) => {
                qq.useSpecularWeightFromTextureAlpha = Eq
              }
            },
            metadata: Eq
          }, fx, Mx), (0, vq.f)(qq, null, Yl, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: qq => "forceAlphaTest" in qq,
              get: qq => qq.forceAlphaTest,
              set: (qq, Eq) => {
                qq.forceAlphaTest = Eq
              }
            },
            metadata: Eq
          }, Tx, zx), (0, vq.f)(qq, null, ll, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: qq => "alphaCutOff" in qq,
              get: qq => qq.alphaCutOff,
              set: (qq, Eq) => {
                qq.alphaCutOff = Eq
              }
            },
            metadata: Eq
          }, Sx, px), (0, vq.f)(qq, null, Ol, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: qq => "useAmbientOcclusionFromMetallicTextureRed" in qq,
              get: qq => qq.useAmbientOcclusionFromMetallicTextureRed,
              set: (qq, Eq) => {
                qq.useAmbientOcclusionFromMetallicTextureRed = Eq
              }
            },
            metadata: Eq
          }, Gx, Lx), (0, vq.f)(qq, null, ml, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: qq => "useAmbientInGrayScale" in qq,
              get: qq => qq.useAmbientInGrayScale,
              set: (qq, Eq) => {
                qq.useAmbientInGrayScale = Eq
              }
            },
            metadata: Eq
          }, Jx, kx), (0, vq.f)(qq, null, xl, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: qq => "usePhysicalLightFalloff" in qq,
              get: qq => qq.usePhysicalLightFalloff
            },
            metadata: Eq
          }, null, fl), (0, vq.f)(qq, null, Al, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: qq => "useGLTFLightFalloff" in qq,
              get: qq => qq.useGLTFLightFalloff
            },
            metadata: Eq
          }, null, fl), (0, vq.f)(qq, null, cl, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "useObjectSpaceNormalMap" in qq,
              get: qq => qq.useObjectSpaceNormalMap,
              set: (qq, Eq) => {
                qq.useObjectSpaceNormalMap = Eq
              }
            },
            metadata: Eq
          }, Rx, Ux), (0, vq.f)(qq, null, ul, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: qq => "useParallax" in qq,
              get: qq => qq.useParallax,
              set: (qq, Eq) => {
                qq.useParallax = Eq
              }
            },
            metadata: Eq
          }, Fx, sx), (0, vq.f)(qq, null, Bl, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: qq => "useParallaxOcclusion" in qq,
              get: qq => qq.useParallaxOcclusion,
              set: (qq, Eq) => {
                qq.useParallaxOcclusion = Eq
              }
            },
            metadata: Eq
          }, Xx, wx), (0, vq.f)(qq, null, Wl, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: qq => "parallaxScaleBias" in qq,
              get: qq => qq.parallaxScaleBias,
              set: (qq, Eq) => {
                qq.parallaxScaleBias = Eq
              }
            },
            metadata: Eq
          }, Kx, Cx), (0, vq.f)(qq, null, Nl, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "disableLighting" in qq,
              get: qq => qq.disableLighting,
              set: (qq, Eq) => {
                qq.disableLighting = Eq
              }
            },
            metadata: Eq
          }, Ix, ex), (0, vq.f)(qq, null, al, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: qq => "forceIrradianceInFragment" in qq,
              get: qq => qq.forceIrradianceInFragment,
              set: (qq, Eq) => {
                qq.forceIrradianceInFragment = Eq
              }
            },
            metadata: Eq
          }, Dx, qA), (0, vq.f)(qq, null, Vl, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: qq => "maxSimultaneousLights" in qq,
              get: qq => qq.maxSimultaneousLights,
              set: (qq, Eq) => {
                qq.maxSimultaneousLights = Eq
              }
            },
            metadata: Eq
          }, EA, gA), (0, vq.f)(qq, null, dl, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: qq => "invertNormalMapX" in qq,
              get: qq => qq.invertNormalMapX,
              set: (qq, Eq) => {
                qq.invertNormalMapX = Eq
              }
            },
            metadata: Eq
          }, YA, lA), (0, vq.f)(qq, null, jl, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: qq => "invertNormalMapY" in qq,
              get: qq => qq.invertNormalMapY,
              set: (qq, Eq) => {
                qq.invertNormalMapY = Eq
              }
            },
            metadata: Eq
          }, OA, mA), (0, vq.f)(qq, null, Hl, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "twoSidedLighting" in qq,
              get: qq => qq.twoSidedLighting,
              set: (qq, Eq) => {
                qq.twoSidedLighting = Eq
              }
            },
            metadata: Eq
          }, xA, AA), (0, vq.f)(qq, null, ol, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: qq => "useAlphaFresnel" in qq,
              get: qq => qq.useAlphaFresnel,
              set: (qq, Eq) => {
                qq.useAlphaFresnel = Eq
              }
            },
            metadata: Eq
          }, cA, uA), (0, vq.f)(qq, null, Pl, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: qq => "useLinearAlphaFresnel" in qq,
              get: qq => qq.useLinearAlphaFresnel,
              set: (qq, Eq) => {
                qq.useLinearAlphaFresnel = Eq
              }
            },
            metadata: Eq
          }, BA, WA), (0, vq.f)(qq, null, Ql, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "environmentBRDFTexture" in qq,
              get: qq => qq.environmentBRDFTexture,
              set: (qq, Eq) => {
                qq.environmentBRDFTexture = Eq
              }
            },
            metadata: Eq
          }, NA, aA), (0, vq.f)(qq, null, yl, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: qq => "forceNormalForward" in qq,
              get: qq => qq.forceNormalForward,
              set: (qq, Eq) => {
                qq.forceNormalForward = Eq
              }
            },
            metadata: Eq
          }, VA, dA), (0, vq.f)(qq, null, tl, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: qq => "enableSpecularAntiAliasing" in qq,
              get: qq => qq.enableSpecularAntiAliasing,
              set: (qq, Eq) => {
                qq.enableSpecularAntiAliasing = Eq
              }
            },
            metadata: Eq
          }, jA, HA), (0, vq.f)(qq, null, rl, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: qq => "useHorizonOcclusion" in qq,
              get: qq => qq.useHorizonOcclusion,
              set: (qq, Eq) => {
                qq.useHorizonOcclusion = Eq
              }
            },
            metadata: Eq
          }, oA, PA), (0, vq.f)(qq, null, vl, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: qq => "useRadianceOcclusion" in qq,
              get: qq => qq.useRadianceOcclusion,
              set: (qq, Eq) => {
                qq.useRadianceOcclusion = Eq
              }
            },
            metadata: Eq
          }, QA, yA), (0, vq.f)(qq, null, hl, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: qq => "unlit" in qq,
              get: qq => qq.unlit,
              set: (qq, Eq) => {
                qq.unlit = Eq
              }
            },
            metadata: Eq
          }, tA, rA), (0, vq.f)(qq, null, nl, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "applyDecalMapAfterDetailMap" in qq,
              get: qq => qq.applyDecalMapAfterDetailMap,
              set: (qq, Eq) => {
                qq.applyDecalMapAfterDetailMap = Eq
              }
            },
            metadata: Eq
          }, vA, hA), (0, vq.f)(qq, null, bl, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "debugMode" in qq,
              get: qq => qq.debugMode,
              set: (qq, Eq) => {
                qq.debugMode = Eq
              }
            },
            metadata: Eq
          }, nA, bA), (0, vq.f)(qq, null, il, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: qq => "transparencyMode" in qq,
              get: qq => qq.transparencyMode
            },
            metadata: Eq
          }, null, fl), Eq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Eq
          })
        })(), qq.SSS_QUALITY_LOW = 0, qq.SSS_QUALITY_MEDIUM = 1, qq.SSS_QUALITY_HIGH = 2, qq._noiseTextures = {}, qq.ForceGLSL = !1, qq._ShaderLoader = new WE.c((() => [Promise.all([gq.e(308), gq.e(374)]).then((() => gq(61691))), Promise.all([gq.e(313), gq.e(309), gq.e(373), gq.e(378)]).then((() => gq(61705)))]), (() => [Promise.all([gq.e(327), gq.e(329), gq.e(377)]).then((() => gq(61741))), Promise.all([gq.e(327), gq.e(330), gq.e(376), gq.e(379)]).then((() => gq(61753)))])), qq
      })(),
      DE = !1;
    DE || (DE = !0, (0, wq.f)(), (0, kE.g)("BABYLON.OpenPBRMaterial", eE));
    var qg = gq(37156);
    class Eg {
      constructor(qq) {
        this.name = TE.e.NAME_PROCEDURALTEXTURE, this.PV = qq
      }
      register() {
        this.PV._beforeClearStage.registerStep(TE.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.PV.proceduralTexturesEnabled) {
          rE.f.StartPerformanceCounter("Procedural textures", this.PV.proceduralTextures.length > 0);
          for (let qq = 0; qq < this.PV.proceduralTextures.length; qq++) {
            const Eq = this.PV.proceduralTextures[qq];
            Eq._shouldRender() && Eq.render()
          }
          rE.f.EndPerformanceCounter("Procedural textures", this.PV.proceduralTextures.length > 0)
        }
      }
    }
    var gg = gq(40074);
    let Yg = (() => {
      var qq;
      let Eq, Yq, lq, mq, xq, Aq = iq.d,
        cq = [],
        uq = [],
        Bq = [],
        Wq = [],
        Nq = [],
        aq = [],
        dq = [],
        jq = [],
        Hq = [];
      return qq = class extends Aq {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(qq, Eq, gq, Yq) {
          let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Yq, !Oq), this.isEnabled = ((0, vq.i)(this, cq), (0, vq.i)(this, uq, !0)), this.autoClear = ((0, vq.i)(this, Bq), (0, vq.i)(this, Wq, !0)), this.onGenerated = (0, vq.i)(this, Nq), this.onGeneratedObservable = new qg.d, this.onBeforeGenerationObservable = new qg.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, vq.i)(this, aq, void 0), this._drawWrapper = (0, vq.i)(this, dq), this._textures = {}, this._size = (0, vq.i)(this, jq, void 0), this._textureType = (0, vq.i)(this, Hq), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === lq || lq instanceof iq.d ? (this._options = {}, this._fallbackTexture = lq) : (this._options = lq, this._fallbackTexture = lq.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Aq = (Yq = this.ZJ() || Vq.b.LastCreatedScene)._getComponent(TE.e.NAME_PROCEDURALTEXTURE);
          Aq || (Aq = new Eg(Yq), Yq.VYq(Aq)), this._options.skipSceneRegistration || Yq.proceduralTextures.push(this), this._fullEngine = Yq.Ba(), this.name = qq, this.isRenderTarget = !0, this._size = Eq, this._textureType = xq, this._generateMipMaps = Oq, this._drawWrapper = new gg.b(this._fullEngine), this.setFragment(gq);
          const oq = this._createRtWrapper(mq, Eq, Oq, xq);
          this._texture = oq.texture;
          const Pq = [];
          Pq.push(1, 1), Pq.push(-1, 1), Pq.push(-1, -1), Pq.push(1, -1), this._vertexBuffers[Lq.g.PositionKind] = new Lq.g(this._fullEngine, Pq, Lq.g.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(qq, Eq, gq, Yq) {
          return qq ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Eq, {
            generateMipMaps: gq,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Yq,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Eq, {
            generateMipMaps: gq,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Yq,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(qq) {
          this._drawWrapper.effect = qq
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((qq => {
            this._contentData = this.readPixels(0, 0, qq), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const qq = this._fullEngine,
            Eq = [];
          Eq.push(0), Eq.push(1), Eq.push(2), Eq.push(0), Eq.push(2), Eq.push(3), this._indexBuffer = qq.createIndexBuffer(Eq)
        }
        _rebuild() {
          const qq = this._vertexBuffers[Lq.g.PositionKind];
          qq && qq._rebuild(), this._createIndexBuffer(), this.refreshRate === vE.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = vE.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(qq) {
          if (this.isReady()) return void qq(this);
          const Eq = this.getEffect();
          Eq && Eq.executeWhenCompiled((() => {
            qq(this)
          }))
        }
        isReady() {
          const qq = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Eq = this._getDefines();
          if (this._drawWrapper.effect && Eq === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Yq = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Eq && (this._cachedDefines = Eq, this._drawWrapper.effect = qq.createEffect(Yq, [Lq.g.PositionKind], this._uniforms, this._samplers, Eq, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([gq.e(382).then((() => gq(61820))), this._options.extraInitializationsAsync()]) : await Promise.all([gq.e(383).then((() => gq(61827))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await gq.e(382).then((() => gq(61820))) : await gq.e(383).then((() => gq(61827)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(qq) {
          this._fragment = qq
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(qq) {
          this._refreshRate = qq, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(qq, Eq) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const gq = this._texture.isCube;
          this._rtWrapper.dispose();
          const Yq = this._createRtWrapper(gq, qq, Eq, this._textureType);
          this._texture = Yq.texture, this._size = qq, this._generateMipMaps = Eq
        }
        _checkUniform(qq) {
          -1 === this._uniforms.indexOf(qq) && this._uniforms.push(qq)
        }
        setTexture(qq, Eq) {
          return -1 === this._samplers.indexOf(qq) && this._samplers.push(qq), this._textures[qq] = Eq, this
        }
        setFloat(qq, Eq) {
          return this._checkUniform(qq), this._floats[qq] = Eq, this
        }
        setInt(qq, Eq) {
          return this._checkUniform(qq), this._ints[qq] = Eq, this
        }
        setFloats(qq, Eq) {
          return this._checkUniform(qq), this._floatsArrays[qq] = Eq, this
        }
        setColor3(qq, Eq) {
          return this._checkUniform(qq), this._colors3[qq] = Eq, this
        }
        setColor4(qq, Eq) {
          return this._checkUniform(qq), this._colors4[qq] = Eq, this
        }
        setVector2(qq, Eq) {
          return this._checkUniform(qq), this._vectors2[qq] = Eq, this
        }
        setVector3(qq, Eq) {
          return this._checkUniform(qq), this._vectors3[qq] = Eq, this
        }
        setVector4(qq, Eq) {
          return this._checkUniform(qq), this._vectors4[qq] = Eq, this
        }
        setMatrix(qq, Eq) {
          return this._checkUniform(qq), this._matrices[qq] = Eq, this
        }
        render(qq) {
          const Eq = this.ZJ();
          if (!Eq) return;
          const gq = this._fullEngine;
          if (gq.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), gq.setState(!1), !this.nodeMaterialSource) {
            for (const qq in this._textures) this._drawWrapper.effect.setTexture(qq, this._textures[qq]);
            for (const qq in this._ints) this._drawWrapper.effect.setInt(qq, this._ints[qq]);
            for (const qq in this._floats) this._drawWrapper.effect.setFloat(qq, this._floats[qq]);
            for (const qq in this._floatsArrays) this._drawWrapper.effect.setArray(qq, this._floatsArrays[qq]);
            for (const qq in this._colors3) this._drawWrapper.effect.setColor3(qq, this._colors3[qq]);
            for (const qq in this._colors4) {
              const Eq = this._colors4[qq];
              this._drawWrapper.effect.setFloat4(qq, Eq.r, Eq.g, Eq.b, Eq.a)
            }
            for (const qq in this._vectors2) this._drawWrapper.effect.setVector2(qq, this._vectors2[qq]);
            for (const qq in this._vectors3) this._drawWrapper.effect.setVector3(qq, this._vectors3[qq]);
            for (const qq in this._vectors4) this._drawWrapper.effect.setVector4(qq, this._vectors4[qq]);
            for (const qq in this._matrices) this._drawWrapper.effect.setMatrix(qq, this._matrices[qq])
          }
          if (!this._texture || !this._rtWrapper) return;
          gq._enableGPUDebugMarkers && gq._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Yq = gq.currentViewport;
          if (this.isCube)
            for (let lq = 0; lq < 6; lq++) gq.bindFramebuffer(this._rtWrapper, lq, void 0, void 0, !0), gq.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", lq), this.autoClear && gq.clear(Eq.clearColor, !0, !1, !1), gq.drawElementsType(Oq.e.TriangleFillMode, 0, 6), gq.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let qq = 1;
            this._rtWrapper.is3D ? qq = this._rtWrapper.depth : this._rtWrapper.is2DArray && (qq = this._rtWrapper.layers);
            for (let Yq = 0; Yq < qq; Yq++) {
              if (gq.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Yq), gq.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== qq ? Yq / (qq - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Yq);
                for (const qq in this._textures) this._drawWrapper.effect.setTexture(qq, this._textures[qq])
              }
              this.autoClear && gq.clear(Eq.clearColor, !0, !1, !1), gq.drawElementsType(Oq.e.TriangleFillMode, 0, 6), gq.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Yq && gq.setViewport(Yq), this.isCube && gq.generateMipMapsForCubemap(this._texture, !0), gq._enableGPUDebugMarkers && gq._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Eq = this.getSize(),
            gq = new qq(this.name, Eq.width, this._fragment, this.ZJ(), this._fallbackTexture, this._generateMipMaps);
          return gq.hasAlpha = this.hasAlpha, gq.level = this.level, gq.coordinatesMode = this.coordinatesMode, gq
        }
        dispose() {
          const qq = this.ZJ();
          if (!qq) return;
          const Eq = qq.proceduralTextures.indexOf(this);
          Eq >= 0 && qq.proceduralTextures.splice(Eq, 1);
          const gq = this._vertexBuffers[Lq.g.PositionKind];
          gq && (gq.dispose(), this._vertexBuffers[Lq.g.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const gq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
        Eq = [(0, hq.M)()], Yq = [(0, hq.M)()], lq = [(0, hq.M)()], mq = [(0, hq.M)()], xq = [(0, hq.M)()], (0, vq.f)(qq, null, xq, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: qq => "refreshRate" in qq,
            get: qq => qq.refreshRate
          },
          metadata: gq
        }, null, cq), (0, vq.f)(null, null, Eq, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: gq
        }, uq, Bq), (0, vq.f)(null, null, Yq, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: qq => "autoClear" in qq,
            get: qq => qq.autoClear,
            set: (qq, Eq) => {
              qq.autoClear = Eq
            }
          },
          metadata: gq
        }, Wq, Nq), (0, vq.f)(null, null, lq, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: qq => "_generateMipMaps" in qq,
            get: qq => qq._generateMipMaps,
            set: (qq, Eq) => {
              qq._generateMipMaps = Eq
            }
          },
          metadata: gq
        }, aq, dq), (0, vq.f)(null, null, mq, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: qq => "_size" in qq,
            get: qq => qq._size,
            set: (qq, Eq) => {
              qq._size = Eq
            }
          },
          metadata: gq
        }, jq, Hq), gq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gq
        })
      })(), qq
    })();

    function lg(qq) {
      return "texture" in qq
    }

    function Og(qq) {
      return "value" in qq
    }
    async function mg(qq, Eq, Yq) {
      const lq = [Eq.red, Eq.green, Eq.blue, Eq.alpha],
        Oq = [],
        mq = [];
      for (let gq = 0; gq < 4; gq++) {
        const qq = lq[gq];
        if (qq)
          if (lg(qq)) {
            if (qq.sourceChannel < 0 || qq.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Eq = Oq.indexOf(qq.texture); - 1 === Eq && (Eq = Oq.length, Oq.push(qq.texture)), mq[gq] = Eq
          } else {
            if (!Og(qq)) throw new Error("Invalid channel input configuration");
            if (qq.value < 0 || qq.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            mq[gq] = -1
          }
        else mq[gq] = -1
      }
      let xq = Eq.outputSize;
      if (!xq && Oq.length > 0) {
        let qq = 0;
        for (const Eq of Oq) {
          const gq = Eq.getSize(),
            Yq = Math.max(gq.width, gq.height);
          Yq > qq && (qq = Yq, xq = gq.width === gq.height ? qq : gq)
        }
      }
      xq = xq || 512;
      const Aq = [],
        cq = new Set;
      for (let gq = 0; gq < 4; gq++) {
        const qq = lq[gq],
          Eq = ["RED", "GREEN", "BLUE", "ALPHA"][gq];
        if (qq && lg(qq)) {
          Aq.push(`${Eq}_FROM_TEXTURE`);
          const qq = mq[gq];
          cq.add(qq)
        }
      }
      cq.forEach((qq => {
        Aq.push(`USE_TEXTURE${qq}`)
      }));
      const uq = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Yq.Ba().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Yq.Ba().isWebGPU ? await Promise.all([gq.e(380).then((() => gq(61805)))]) : await Promise.all([gq.e(381).then((() => gq(61812)))])
          },
          skipSceneRegistration: !0
        },
        Bq = new Yg(qq, xq, "textureMerger", Yq, uq);
      Bq.refreshRate = -1, Bq.defines = Aq.length > 0 ? "#define " + Aq.join("\n#define ") + "\n" : "";
      for (let gq = 0; gq < Oq.length; gq++) Wq = Oq[gq], (Nq = Bq).uOffset = Wq.uOffset, Nq.vOffset = Wq.vOffset, Nq.uScale = Wq.uScale, Nq.vScale = Wq.vScale, Nq.uAng = Wq.uAng, Nq.vAng = Wq.vAng, Nq.wAng = Wq.wAng, Nq.uRotationCenter = Wq.uRotationCenter, Nq.vRotationCenter = Wq.vRotationCenter, Bq.setTexture(`inputTexture${gq}`, Oq[gq]);
      var Wq, Nq;
      for (let gq = 0; gq < 4; gq++) {
        const qq = lq[gq],
          Eq = ["red", "green", "blue", "alpha"][gq];
        if (qq && lg(qq)) {
          const Yq = mq[gq];
          Bq.setInt(`${Eq}TextureIndex`, Yq), Bq.setInt(`${Eq}SourceChannel`, qq.sourceChannel)
        } else {
          let Yq;
          Yq = qq && Og(qq) ? qq.value : 3 === gq ? 1 : 0, Bq.setFloat(`${Eq}ConstantValue`, Yq)
        }
      }
      return await new Promise(((qq, Eq) => {
        Bq.executeWhenReady((() => {
          try {
            Bq.render(), qq(Bq)
          } catch (gq) {
            Eq(gq instanceof Error ? gq : new Error(String(gq)))
          }
        }))
      }))
    }

    function xg(qq, Eq) {
      return {
        texture: qq,
        sourceChannel: Eq
      }
    }

    function Ag(qq) {
      return {
        value: qq
      }
    }

    function cg(qq, Eq, gq, Yq) {
      return {
        red: qq,
        green: Eq,
        blue: gq,
        alpha: Yq
      }
    }
    var ug = gq(39587),
      Bg = gq(39689),
      Wg = gq(37151),
      Ng = gq(39736),
      ag = gq(39676);
    class Vg {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class dg extends ug.d {
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
        return !!this._options?.enableMultiview || this.Ra > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Vg;
        super(null), void 0 === qq.deterministicLockstep && (qq.deterministicLockstep = !1), void 0 !== qq.timeStep && (this._timeStep = qq.timeStep), void 0 === qq.lockstepMaxSteps && (qq.lockstepMaxSteps = 4), this._options = qq, Wg.b.SetMatrixPrecision(!!qq.useHighPrecisionMatrix), this._caps = {
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
        }, qq.enableMultiview && (this._caps.multiview = {
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
        }, qq.renderingCanvas && (this._renderingCanvas = qq.renderingCanvas), nq.b.Log(`Babylon.js v${ug.d.Version} - Null engine`);
        const Eq = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Eq.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Eq.Blob = function() {})
      }
      createVertexBuffer(qq) {
        const Eq = new Bg.b;
        return Eq.references = 1, Eq
      }
      createIndexBuffer(qq) {
        const Eq = new Bg.b;
        return Eq.references = 1, Eq
      }
      clear(qq, Eq, gq) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(qq, Eq, gq) {
        this._cachedViewport = qq
      }
      createUniformBuffer(qq) {
        const Eq = new Bg.b;
        return Eq.references = 1, Eq.WB = qq instanceof Array ? qq.length * Float32Array.BYTES_PER_ELEMENT : qq.byteLength, Eq
      }
      createDynamicUniformBuffer(qq) {
        return this.createUniformBuffer(qq)
      }
      updateUniformBuffer(qq, Eq, gq, Yq) {}
      bindUniformBufferBase(qq, Eq, gq) {}
      bindUniformBlock(qq, Eq, gq) {}
      createShaderProgram(qq, Eq, gq, Yq, lq) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(qq, Eq) {
        return []
      }
      getAttributes(qq, Eq) {
        return []
      }
      bindSamplers(qq) {
        this._currentEffect = null
      }
      enableEffect(qq) {
        qq = null !== qq && (0, ag.c)(qq) ? qq.effect : qq, this._currentEffect = qq, qq && (qq.onBind && qq.onBind(qq), qq._onBindObservable && qq._onBindObservable.notifyObservers(qq))
      }
      setStateCullFaceType(qq, Eq) {}
      setState(qq) {}
      setIntArray(qq, Eq) {
        return !0
      }
      setIntArray2(qq, Eq) {
        return !0
      }
      setIntArray3(qq, Eq) {
        return !0
      }
      setIntArray4(qq, Eq) {
        return !0
      }
      setFloatArray(qq, Eq) {
        return !0
      }
      setFloatArray2(qq, Eq) {
        return !0
      }
      setFloatArray3(qq, Eq) {
        return !0
      }
      setFloatArray4(qq, Eq) {
        return !0
      }
      setArray(qq, Eq) {
        return !0
      }
      setArray2(qq, Eq) {
        return !0
      }
      setArray3(qq, Eq) {
        return !0
      }
      setArray4(qq, Eq) {
        return !0
      }
      setMatrices(qq, Eq) {
        return !0
      }
      setMatrix3x3(qq, Eq) {
        return !0
      }
      setMatrix2x2(qq, Eq) {
        return !0
      }
      setFloat(qq, Eq) {
        return !0
      }
      setFloat2(qq, Eq, gq) {
        return !0
      }
      setFloat3(qq, Eq, gq, Yq) {
        return !0
      }
      setBool(qq, Eq) {
        return !0
      }
      setFloat4(qq, Eq, gq, Yq, lq) {
        return !0
      }
      setAlphaMode(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[gq] !== qq && (this.alphaState.setAlphaBlend(0 !== qq, 0), Eq || this.setDepthWrite(0 === qq), this._alphaMode[gq] = qq)
      }
      bindBuffers(qq, Eq, gq) {}
      wipeCaches(qq) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, qq && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(qq, Eq, gq, Yq) {}
      drawElementsType(qq, Eq, gq, Yq) {}
      drawArraysType(qq, Eq, gq, Yq) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(qq) {}
      createTexture(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          mq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          xq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Aq = new hE.c(this, 1),
          cq = String(qq);
        return Aq.url = cq, Aq.generateMipMaps = !Eq, Aq.samplingMode = lq, Aq.invertY = gq, Aq.baseWidth = this._options.textureSize, Aq.baseHeight = this._options.textureSize, Aq.width = this._options.textureSize, Aq.height = this._options.textureSize, xq && (Aq.format = xq), mq && (Aq._buffer = mq), Aq.isReady = !0, Oq && setTimeout((() => {
          Oq(Aq)
        })), this._internalTexturesCache.push(Aq), Aq
      }
      _createHardwareRenderTargetWrapper(qq, Eq, gq) {
        const Yq = new Ng.e(qq, Eq, gq, this);
        return this._renderTargetWrapperCache.push(Yq), Yq
      }
      createRenderTargetTexture(qq, Eq) {
        const gq = this._createHardwareRenderTargetWrapper(!1, !1, qq),
          Yq = {};
        void 0 !== Eq && "object" === typeof Eq ? (Yq.generateMipMaps = Eq.generateMipMaps, Yq.generateDepthBuffer = void 0 === Eq.generateDepthBuffer || Eq.generateDepthBuffer, Yq.generateStencilBuffer = Yq.generateDepthBuffer && Eq.generateStencilBuffer, Yq.type = void 0 === Eq.type ? 0 : Eq.type, Yq.samplingMode = void 0 === Eq.samplingMode ? 3 : Eq.samplingMode) : (Yq.generateMipMaps = Eq, Yq.generateDepthBuffer = !0, Yq.generateStencilBuffer = !1, Yq.type = 0, Yq.samplingMode = 3);
        const lq = new hE.c(this, 5);
        gq.setTexture(lq);
        const Oq = qq.width || qq,
          mq = qq.height || qq;
        return gq._generateDepthBuffer = Yq.generateDepthBuffer, gq._generateStencilBuffer = !!Yq.generateStencilBuffer, lq.baseWidth = Oq, lq.baseHeight = mq, lq.width = Oq, lq.height = mq, lq.isReady = !0, lq.samples = 1, lq.generateMipMaps = !!Yq.generateMipMaps, lq.samplingMode = Yq.samplingMode, lq.type = Yq.type, this._internalTexturesCache.push(lq), gq
      }
      createMultiviewRenderTargetTexture(qq, Eq) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const gq = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: qq,
            height: Eq
          }),
          Yq = new hE.c(this, 5, !0);
        return Yq.baseWidth = qq, Yq.baseHeight = Eq, Yq.width = qq, Yq.height = Eq, Yq.isMultiview = !0, Yq.isReady = !0, Yq.format = 5, Yq.samples = 1, gq.setTextures(Yq), gq
      }
      bindMultiviewFramebuffer(qq) {
        this.bindFramebuffer(qq, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(qq, Eq) {
        const gq = this._createHardwareRenderTargetWrapper(!1, !0, qq),
          Yq = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Eq
          };
        Yq.generateStencilBuffer = Yq.generateDepthBuffer && Yq.generateStencilBuffer, (1 !== Yq.type || this._caps.textureFloatLinearFiltering) && (2 !== Yq.type || this._caps.textureHalfFloatLinearFiltering) || (Yq.samplingMode = 1), gq._generateDepthBuffer = Yq.generateDepthBuffer, gq._generateStencilBuffer = !!Yq.generateStencilBuffer;
        const lq = new hE.c(this, 5);
        return lq.baseWidth = qq, lq.baseHeight = qq, lq.width = qq, lq.height = qq, lq.isReady = !0, lq.isCube = !0, lq.samples = 1, lq.generateMipMaps = !!Yq.generateMipMaps, lq.samplingMode = Yq.samplingMode, lq.type = Yq.type, this._internalTexturesCache.push(lq), gq
      }
      updateTextureSamplingMode(qq, Eq) {
        Eq.samplingMode = qq
      }
      createRawTexture(qq, Eq, gq, Yq, lq, Oq, mq) {
        let xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          cq = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uq = new hE.c(this, 3);
        return uq.baseWidth = Eq, uq.baseHeight = gq, uq.width = Eq, uq.height = gq, uq.format = Yq, uq.generateMipMaps = lq, uq.samplingMode = mq, uq.invertY = Oq, uq._compression = xq, uq.type = Aq, uq._useSRGBBuffer = cq, this._doNotHandleContextLost || (uq._bufferView = qq), uq
      }
      updateRawTexture(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        qq && (qq._bufferView = Eq, qq.format = gq, qq.invertY = Yq, qq._compression = lq, qq.type = Oq, qq._useSRGBBuffer = mq)
      }
      bindFramebuffer(qq, Eq, gq, Yq, lq) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = qq, this._currentFramebuffer = null, this._cachedViewport && !lq && this.setViewport(this._cachedViewport, gq, Yq)
      }
      unBindFramebuffer(qq) {
        let Eq = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Eq && Eq(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(qq) {
        const Eq = new Bg.b;
        return Eq.references = 1, Eq.WB = 1, Eq
      }
      updateDynamicTexture(qq, Eq, gq) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(qq) {}
      updateDynamicIndexBuffer(qq, Eq) {}
      updateDynamicVertexBuffer(qq, Eq, gq, Yq) {}
      _bindTextureDirectly(qq, Eq) {
        return this._boundTexturesCache[this._activeChannel] !== Eq && (this._boundTexturesCache[this._activeChannel] = Eq, !0)
      }
      _bindTexture(qq, Eq) {
        qq < 0 || this._bindTextureDirectly(0, Eq)
      }
      _deleteBuffer(qq) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(qq) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(qq, Eq, gq, Yq, lq) {}
      _uploadDataToTextureDirectly(qq, Eq) {}
      _uploadArrayBufferViewToTexture(qq, Eq) {}
      _uploadImageToTexture(qq, Eq) {}
    }
    gq(39794), gq(39827), gq(39789);
    async function jg(qq) {
      const Eq = qq.getInternalTexture();
      if (!Eq || 1 !== Eq.source) return null;
      if (Eq.invertY) {
        const Eq = qq.ZJ()?.Ba();
        if (!(Eq instanceof dg)) return null
      }
      const gq = Eq._buffer;
      let Yq, Oq = qq.mimeType;
      try {
        gq ? ArrayBuffer.isView(gq) ? Yq = gq.buffer.slice(gq.byteOffset, gq.byteOffset + gq.byteLength) : gq instanceof ArrayBuffer ? Yq = gq : gq instanceof Blob ? (Yq = await gq.arrayBuffer(), Oq = gq.type || Oq) : "string" === typeof gq ? (Yq = await lq.Tools.LoadFileAsync(gq), Oq = (0, Aq.d)(gq) || Oq) : "undefined" !== typeof HTMLImageElement && gq instanceof HTMLImageElement && (Yq = await lq.Tools.LoadFileAsync(gq.src), Oq = (0, Aq.d)(gq.src) || Oq) : (Yq = await lq.Tools.LoadFileAsync(Eq.url), Oq = (0, Aq.d)(Eq.url) || Oq)
      } catch {
        return null
      }
      if (Yq && !Oq && Eq.url) {
        const qq = Eq.url.match(/^data:([^;,]+)/);
        Oq = qq ? qq[1] : (0, Aq.d)(Eq.url)
      }
      return Yq && Oq ? {
        data: Yq,
        mimeType: Oq
      } : null
    }
    const Hg = 1e-6,
      og = new dq.Color3(.04, .04, .04),
      Pg = 1024,
      Qg = dq.Color3.White(),
      yg = dq.Color3.BlackReadOnly;

    function tg(qq) {
      switch (qq) {
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

    function rg(qq, Eq, gq) {
      if (Eq < og.r) return 0;
      const Yq = og.r,
        lq = qq * gq / (1 - og.r) + Eq - 2 * og.r,
        Oq = lq * lq - 4 * Yq * (og.r - Eq);
      return oq.Clamp((-lq + Math.sqrt(Oq)) / (2 * Yq), 0, 1)
    }

    function vg(qq) {
      const Eq = qq.diffuseColor.toLinearSpace(qq.ZJ().Ba().useExactSrgbConversions).scale(.5),
        gq = qq.alpha,
        Yq = function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Gq.p(0, 1),
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gq.p(0, .1),
            Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gq.p(0, .1),
            lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Gq.p(1300, .1);
          return function(qq, Eq, gq, Yq, lq) {
            return (1 - qq) * (1 - qq) * (1 - qq) * Eq + 3 * (1 - qq) * (1 - qq) * qq * gq + 3 * (1 - qq) * qq * qq * Yq + qq * qq * qq * lq
          }(Math.pow(qq / lq.x, .333333), Eq.y, gq.y, Yq.y, lq.y)
        }(oq.Clamp(qq.specularPower, 0, Pg));
      return {
        baseColorFactor: [Eq.r, Eq.g, Eq.b, gq],
        metallicFactor: 0,
        roughnessFactor: Yq
      }
    }

    function hg(qq, Eq) {
      Eq.needAlphaBlending() ? qq.alphaMode = "BLEND" : Eq.needAlphaTesting() && (qq.alphaMode = "MASK", qq.alphaCutoff = Eq.alphaCutOff)
    }

    function ng(qq, Eq, gq) {
      const Yq = new Uint8Array(qq * Eq * 4);
      for (let lq = 0; lq < Yq.length; lq += 4) Yq[lq] = Yq[lq + 1] = Yq[lq + 2] = Yq[lq + 3] = 255;
      return yq.d.CreateRGBATexture(Yq, qq, Eq, gq)
    }

    function bg(qq) {
      if (qq instanceof Uint8Array) {
        const Eq = qq.length,
          gq = new Float32Array(qq.length);
        for (let Yq = 0; Yq < Eq; ++Yq) gq[Yq] = qq[Yq] / 255;
        return gq
      }
      if (qq instanceof Float32Array) return qq;
      throw new Error("Unsupported pixel format!")
    }
    class ig {
      constructor(qq) {
        this._exporter = qq, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(qq) {
        return qq ? this._textureMap.get(qq.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(qq, Eq) {
        const gq = vg(qq),
          Yq = {
            name: qq.name
          };
        if (null == qq.backFaceCulling || qq.backFaceCulling || (qq.twoSidedLighting || lq.Tools.Warn(qq.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Yq.doubleSided = !0), Eq) {
          const Eq = [],
            lq = qq.diffuseTexture;
          lq && Eq.push(this.exportTextureAsync(lq).then((qq => {
            qq && (gq.baseColorTexture = qq)
          })));
          const Oq = qq.bumpTexture;
          Oq && Eq.push(this.exportTextureAsync(Oq).then((qq => {
            qq && (Yq.normalTexture = qq, 1 !== Oq.level && (Yq.normalTexture.scale = Oq.level))
          })));
          const mq = qq.emissiveTexture;
          mq && (Yq.emissiveFactor = [1, 1, 1], Eq.push(this.exportTextureAsync(mq).then((qq => {
            qq && (Yq.emissiveTexture = qq)
          }))));
          const xq = qq.ambientTexture;
          xq && Eq.push(this.exportTextureAsync(xq).then((qq => {
            if (qq) {
              const Eq = {
                index: qq.index
              };
              Yq.occlusionTexture = Eq
            }
          }))), Eq.length > 0 && (this._exporter._materialNeedsUVsSet.add(qq), await Promise.all(Eq))
        }(qq.alpha < 1 || qq.opacityTexture) && (qq.alphaMode === tq.c.ALPHA_COMBINE ? Yq.alphaMode = "BLEND" : lq.Tools.Warn(qq.name + ": glTF 2.0 does not support alpha mode: " + qq.alphaMode.toString())), qq.emissiveColor && !qq.emissiveColor.equalsWithEpsilon(yg, Hg) && (Yq.emissiveFactor = qq.emissiveColor.bYq()), Yq.pbrMetallicRoughness = gq, hg(Yq, qq), await this._finishMaterialAsync(Yq, qq);
        const Oq = this._exporter._materials;
        return Oq.push(Yq), Oq.length - 1
      }
      async _finishMaterialAsync(qq, Eq) {
        const gq = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", qq, Eq),
          Yq = [];
        for (const lq of gq) Yq.push(this.exportTextureAsync(lq));
        await Promise.all(Yq), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", qq, Eq)
      }
      _resizeTexturesToSameDimensions(qq, Eq, gq) {
        const Yq = qq ? qq.getSize() : {
            width: 0,
            height: 0
          },
          lq = Eq ? Eq.getSize() : {
            width: 0,
            height: 0
          };
        let Oq, mq;
        return Yq.width < lq.width ? (Oq = qq && qq instanceof Qq.d ? Pq.h.CreateResizedCopy(qq, lq.width, lq.height, !0) : ng(lq.width, lq.height, gq), mq = Eq) : Yq.width > lq.width ? (mq = Eq && Eq instanceof Qq.d ? Pq.h.CreateResizedCopy(Eq, Yq.width, Yq.height, !0) : ng(Yq.width, Yq.height, gq), Oq = qq) : (Oq = qq, mq = Eq), {
          texture1: Oq,
          texture2: mq
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(qq, Eq, gq) {
        const Yq = new Array;
        if (!qq && !Eq) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const lq = qq ? qq.ZJ() : Eq ? Eq.ZJ() : null;
        if (lq) {
          const Oq = this._resizeTexturesToSameDimensions(qq, Eq, lq),
            mq = Oq.texture1?.getSize();
          let xq, Aq;
          const cq = mq.width,
            uq = mq.height,
            Bq = await Oq.texture1.readPixels(),
            Wq = await Oq.texture2.readPixels();
          if (!Bq) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (xq = bg(Bq), !Wq) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Aq = bg(Wq);
          const Nq = Aq.byteLength,
            aq = new Uint8Array(Nq),
            Vq = new Uint8Array(Nq),
            jq = 4,
            Hq = new dq.Color3(0, 0, 0);
          let oq = 0,
            Pq = 0;
          for (let qq = 0; qq < uq; ++qq)
            for (let Eq = 0; Eq < cq; ++Eq) {
              const Yq = (cq * qq + Eq) * jq,
                mq = {
                  diffuseColor: new dq.Color3(xq[Yq], xq[Yq + 1], xq[Yq + 2]).toLinearSpace(lq.Ba().useExactSrgbConversions).multiply(gq.diffuseColor),
                  specularColor: new dq.Color3(Aq[Yq], Aq[Yq + 1], Aq[Yq + 2]).toLinearSpace(lq.Ba().useExactSrgbConversions).multiply(gq.specularColor),
                  glossiness: Aq[Yq + 3] * gq.glossiness
                },
                uq = this._convertSpecularGlossinessToMetallicRoughness(mq);
              Hq.r = Math.max(Hq.r, uq.baseColor.r), Hq.g = Math.max(Hq.g, uq.baseColor.g), Hq.b = Math.max(Hq.b, uq.baseColor.b), oq = Math.max(oq, uq.metallic), Pq = Math.max(Pq, uq.roughness), Vq[Yq] = 255 * uq.baseColor.r, Vq[Yq + 1] = 255 * uq.baseColor.g, Vq[Yq + 2] = 255 * uq.baseColor.b, Vq[Yq + 3] = Oq.texture1.hasAlpha ? 255 * xq[Yq + 3] : 255, aq[Yq] = 0, aq[Yq + 1] = 255 * uq.roughness, aq[Yq + 2] = 255 * uq.metallic, aq[Yq + 3] = 255
            }
          const Qq = {
            baseColor: Hq,
            metallic: oq,
            roughness: Pq
          };
          let yq = !1,
            tq = !1;
          for (let qq = 0; qq < uq; ++qq)
            for (let Eq = 0; Eq < cq; ++Eq) {
              const gq = (cq * qq + Eq) * jq;
              Vq[gq] /= Qq.baseColor.r > Hg ? Qq.baseColor.r : 1, Vq[gq + 1] /= Qq.baseColor.g > Hg ? Qq.baseColor.g : 1, Vq[gq + 2] /= Qq.baseColor.b > Hg ? Qq.baseColor.b : 1;
              const Yq = dq.Color3.FromInts(Vq[gq], Vq[gq + 1], Vq[gq + 2]).toGammaSpace(lq.Ba().useExactSrgbConversions);
              Vq[gq] = 255 * Yq.r, Vq[gq + 1] = 255 * Yq.g, Vq[gq + 2] = 255 * Yq.b, Yq.equalsWithEpsilon(Qg, Hg) || (tq = !0), aq[gq + 1] /= Qq.roughness > Hg ? Qq.roughness : 1, aq[gq + 2] /= Qq.metallic > Hg ? Qq.metallic : 1;
              dq.Color3.FromInts(255, aq[gq + 1], aq[gq + 2]).equalsWithEpsilon(Qg, Hg) || (yq = !0)
            }
          return yq && Yq.push((0, rq.EncodeImageAsync)(aq, cq, uq).then((qq => {
            Qq.metallicRoughnessTextureData = qq
          }))), tq && Yq.push((0, rq.EncodeImageAsync)(Vq, cq, uq).then((qq => {
            Qq.baseColorTextureData = qq
          }))), await Promise.all(Yq).then((() => Qq))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(qq) {
        const Eq = this._getPerceivedBrightness(qq.diffuseColor),
          gq = this._getPerceivedBrightness(qq.specularColor),
          Yq = 1 - this._getMaxComponent(qq.specularColor),
          lq = rg(Eq, gq, Yq),
          Oq = qq.diffuseColor.scale(Yq / (1 - og.r) / Math.max(1 - lq, Hg)),
          mq = qq.specularColor.subtract(og.scale(1 - lq)).scale(1 / Math.max(lq, Hg));
        let xq = dq.Color3.Lerp(Oq, mq, lq * lq);
        xq = xq.clampToRef(0, 1, xq);
        return {
          baseColor: xq,
          metallic: lq,
          roughness: 1 - qq.glossiness
        }
      }
      _getPerceivedBrightness(qq) {
        return Math.sqrt(.299 * qq.r * qq.r + .587 * qq.g * qq.g + .114 * qq.b * qq.b)
      }
      _getMaxComponent(qq) {
        return Math.max(qq.r, Math.max(qq.g, qq.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
        const cq = [],
          uq = {
            baseColor: qq,
            metallic: Eq,
            roughness: gq
          };
        if (Aq)
          if (mq instanceof eE) {
            if (mq.geometryOpacityTexture) {
              const qq = Yq && Yq.getInternalTexture() ? Yq.getInternalTexture().uniqueId : 0,
                Eq = mq.geometryOpacityTexture && mq.geometryOpacityTexture.getInternalTexture() ? mq.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                gq = Number(`${qq}${Eq}`),
                lq = this._textureMap.get(gq);
              lq ? xq.baseColorTexture = lq : cq.push(mg("baseColorOpacityTexture", cg(Yq ? xg(Yq, 0) : Ag(1), Yq ? xg(Yq, 1) : Ag(1), Yq ? xg(Yq, 2) : Ag(1), xg(mq.geometryOpacityTexture, 0)), mq.ZJ()).then((async qq => {
                const Eq = await this.exportTextureAsync(qq, gq);
                Eq && (xq.baseColorTexture = Eq)
              })))
            } else Yq && cq.push(this.exportTextureAsync(Yq).then((qq => {
              qq && (xq.baseColorTexture = qq)
            })));
            if (mq._useMetallicFromMetallicTextureBlue && lq) cq.push(this.exportTextureAsync(lq).then((qq => {
              qq && (xq.metallicRoughnessTexture = qq)
            })));
            else if (Oq || lq) {
              const qq = lq && lq.getInternalTexture() ? lq.getInternalTexture().uniqueId : 0,
                Eq = Oq && Oq.getInternalTexture() ? Oq.getInternalTexture().uniqueId : 0,
                gq = Number(`${qq}${Eq}`),
                Yq = this._textureMap.get(gq);
              Yq ? xq.metallicRoughnessTexture = Yq : cq.push(mg("MetalRoughTexture", cg(mq.ambientOcclusionTexture ? xg(mq.ambientOcclusionTexture, 0) : Ag(1), Oq ? xg(Oq, 0) : Ag(1), lq ? xg(lq, 0) : Ag(1)), mq.ZJ()).then((async qq => {
                const Eq = await this.exportTextureAsync(qq, gq);
                Eq && (xq.metallicRoughnessTexture = Eq)
              })))
            }
          } else Yq && cq.push(this.exportTextureAsync(Yq).then((qq => {
            qq && (xq.baseColorTexture = qq)
          }))), lq && cq.push(this.exportTextureAsync(lq).then((qq => {
            qq && (xq.metallicRoughnessTexture = qq)
          })));
        return cq.length > 0 && (this._exporter._materialNeedsUVsSet.add(mq), await Promise.all(cq)), uq
      }
      _getTextureSampler(qq) {
        const Eq = {};
        if (!qq || !(qq instanceof Qq.d)) return Eq;
        const gq = this._getGLTFTextureWrapMode(qq.wrapU);
        10497 !== gq && (Eq.wrapS = gq);
        const Yq = this._getGLTFTextureWrapMode(qq.wrapV);
        switch (10497 !== Yq && (Eq.wrapT = Yq), qq.samplingMode) {
          case Qq.d.LINEAR_LINEAR:
            Eq.magFilter = 9729, Eq.minFilter = 9729;
            break;
          case Qq.d.LINEAR_NEAREST:
            Eq.magFilter = 9729, Eq.minFilter = 9728;
            break;
          case Qq.d.NEAREST_LINEAR:
            Eq.magFilter = 9728, Eq.minFilter = 9729;
            break;
          case Qq.d.NEAREST_LINEAR_MIPLINEAR:
            Eq.magFilter = 9728, Eq.minFilter = 9987;
            break;
          case Qq.d.NEAREST_NEAREST:
            Eq.magFilter = 9728, Eq.minFilter = 9728;
            break;
          case Qq.d.NEAREST_LINEAR_MIPNEAREST:
            Eq.magFilter = 9728, Eq.minFilter = 9985;
            break;
          case Qq.d.LINEAR_NEAREST_MIPNEAREST:
            Eq.magFilter = 9729, Eq.minFilter = 9984;
            break;
          case Qq.d.LINEAR_NEAREST_MIPLINEAR:
            Eq.magFilter = 9729, Eq.minFilter = 9986;
            break;
          case Qq.d.NEAREST_NEAREST_MIPLINEAR:
            Eq.magFilter = 9728, Eq.minFilter = 9986;
            break;
          case Qq.d.LINEAR_LINEAR_MIPLINEAR:
            Eq.magFilter = 9729, Eq.minFilter = 9987;
            break;
          case Qq.d.LINEAR_LINEAR_MIPNEAREST:
            Eq.magFilter = 9729, Eq.minFilter = 9985;
            break;
          case Qq.d.NEAREST_NEAREST_MIPNEAREST:
            Eq.magFilter = 9728, Eq.minFilter = 9984
        }
        return Eq
      }
      _getGLTFTextureWrapMode(qq) {
        switch (qq) {
          case Qq.d.WRAP_ADDRESSMODE:
            return 10497;
          case Qq.d.CLAMP_ADDRESSMODE:
            return 33071;
          case Qq.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return lq.Tools.Error(`Unsupported Texture Wrap Mode ${qq}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(qq, Eq, gq) {
        const Yq = {
            diffuseColor: qq._albedoColor,
            specularColor: qq._reflectivityColor,
            glossiness: qq._microSurface
          },
          lq = qq._albedoTexture,
          Oq = qq._reflectivityTexture,
          mq = qq._useMicroSurfaceFromReflectivityMapAlpha;
        if (Oq && !mq) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((lq || Oq) && gq) {
          this._exporter._materialNeedsUVsSet.add(qq);
          const gq = this._exportTextureSampler(lq || Oq),
            mq = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(lq, Oq, Yq),
            xq = this._exporter._textures;
          if (mq.baseColorTextureData) {
            const qq = await this._exportImageAsync(`baseColor${xq.length}`, mq.baseColorTextureData);
            Eq.baseColorTexture = this._exportTextureInfo(qq, gq, lq?.coordinatesIndex)
          }
          if (mq.metallicRoughnessTextureData) {
            const qq = await this._exportImageAsync(`metallicRoughness${xq.length}`, mq.metallicRoughnessTextureData);
            Eq.metallicRoughnessTexture = this._exportTextureInfo(qq, gq, Oq?.coordinatesIndex)
          }
          return mq
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Yq)
      }
      async exportPBRMaterialAsync(qq, Eq) {
        const gq = {},
          Yq = {
            name: qq.name
          },
          lq = qq.isMetallicWorkflow();
        if (lq) {
          const Eq = qq._albedoColor,
            Yq = qq.alpha;
          Eq && (gq.baseColorFactor = [Eq.r, Eq.g, Eq.b, Yq])
        }
        const Oq = lq ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(qq._albedoColor, qq._metallic, qq._roughness, qq._albedoTexture, qq._metallicTexture, qq._metallicTexture, qq, gq, Eq) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(qq, gq, Eq);
        await this._setMetallicRoughnessPbrMaterialAsync(Oq, qq, Yq, gq, Eq), await this._finishMaterialAsync(Yq, qq);
        const mq = this._exporter._materials;
        return mq.push(Yq), mq.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(qq, Eq, gq, Yq, Oq) {
        if (hg(gq, Eq), qq.baseColor.equalsWithEpsilon(Qg, Hg) && oq.WithinEpsilon(Eq.alpha, 1, Hg) || (Yq.baseColorFactor = [qq.baseColor.r, qq.baseColor.g, qq.baseColor.b, Eq.alpha]), null != qq.metallic && 1 !== qq.metallic && (Yq.metallicFactor = qq.metallic), null != qq.roughness && 1 !== qq.roughness && (Yq.roughnessFactor = qq.roughness), null == Eq.backFaceCulling || Eq.backFaceCulling || (Eq._twoSidedLighting || lq.Tools.Warn(Eq.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), gq.doubleSided = !0), Oq) {
          const qq = [],
            lq = Eq instanceof yE ? Eq._bumpTexture : Eq.geometryNormalTexture;
          lq && qq.push(this.exportTextureAsync(lq).then((qq => {
            qq && (gq.normalTexture = qq, 1 !== lq.level && (gq.normalTexture.scale = lq.level))
          })));
          const Oq = Eq instanceof yE ? Eq._ambientTexture : Eq.ambientOcclusionTexture;
          Oq && qq.push(new Promise((async qq => {
            if (Eq instanceof eE && Yq.metallicRoughnessTexture) {
              const Eq = this._exportTextureSampler(Oq),
                gq = this._exporter._textures[Yq.metallicRoughnessTexture.index].source,
                lq = this._exportTextureInfo(gq, Eq, Oq.coordinatesIndex);
              return this._textureMap.set(Oq.uniqueId, lq), this._exporter._extensionsPostExportTextures("exporter", lq, Oq), qq(lq)
            }
            return qq(await this.exportTextureAsync(Oq))
          })).then((async qq => {
            if (qq) {
              const Yq = {
                index: qq.index,
                texCoord: qq.texCoord,
                extensions: qq.extensions
              };
              gq.occlusionTexture = Yq, Yq.strength = Eq instanceof yE ? Eq._ambientTextureStrength : Eq.ambientOcclusionTexture.level
            }
          })));
          const mq = Eq instanceof yE ? Eq._emissiveTexture : Eq.emissionColorTexture;
          mq && qq.push(this.exportTextureAsync(mq).then((qq => {
            qq && (gq.emissiveTexture = qq)
          }))), qq.length > 0 && (this._exporter._materialNeedsUVsSet.add(Eq), await Promise.all(qq))
        }
        const mq = Eq instanceof yE ? Eq._emissiveColor : Eq.emissionColor;
        mq.equalsWithEpsilon(yg, Hg) || (gq.emissiveFactor = mq.bYq()), gq.pbrMetallicRoughness = Yq
      }
      async exportOpenPBRMaterialAsync(qq, Eq) {
        const gq = {},
          Yq = {
            name: qq.name
          },
          lq = qq.baseColor,
          Oq = qq.geometryOpacity;
        lq && (gq.baseColorFactor = [lq.r, lq.g, lq.b, Oq]);
        const mq = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(qq.baseColor, qq.baseMetalness, qq.specularRoughness, qq.baseColorTexture, qq.baseMetalnessTexture, qq.specularRoughnessTexture, qq, gq, Eq);
        await this._setMetallicRoughnessPbrMaterialAsync(mq, qq, Yq, gq, Eq), await this._finishMaterialAsync(Yq, qq);
        const xq = this._exporter._materials;
        return xq.push(Yq), xq.length - 1
      }
      async exportTextureAsync(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gq = this._textureMap.get(Eq ?? qq.uniqueId);
        if (gq) return gq;
        const Yq = this._exportTextureSampler(qq),
          lq = await this._exportTextureImageAsync(qq);
        return gq = this._exportTextureInfo(lq, Yq, qq.coordinatesIndex), this._textureMap.set(Eq ?? qq.uniqueId, gq), this._exporter._extensionsPostExportTextures("exporter", gq, qq), gq
      }
      async _exportTextureImageAsync(qq) {
        const Eq = qq.mimeType ?? "none",
          gq = this._internalTextureToImage,
          Yq = qq.getInternalTexture().uniqueId;
        gq[Yq] = gq[Yq] || {};
        let Oq = gq[Yq][Eq];
        return void 0 === Oq && (Oq = (async () => {
          const gq = await jg(qq);
          if (gq && tg(gq.mimeType) && ("none" === Eq || gq.mimeType === Eq)) return await this._exportImageAsync(qq.name, new Blob([gq.data], {
            type: gq.mimeType
          }));
          let Yq = "image/png";
          "none" !== Eq && (tg(Eq) ? Yq = Eq : (Yq = "image/png", lq.Tools.Warn(`Unsupported media type: ${Eq}. Exporting texture as PNG.`)));
          const Oq = qq.getSize(),
            mq = await (0, Pq.g)(qq),
            xq = await (0, rq.EncodeImageAsync)(mq, Oq.width, Oq.height, Yq);
          return await this._exportImageAsync(qq.name, xq)
        })(), gq[Yq][Eq] = Oq), await Oq
      }
      async _exportImageAsync(qq, Eq) {
        const gq = this._exporter._images;
        let Yq;
        if (this._exporter._shouldUseGlb) {
          Yq = {
            name: qq,
            mimeType: Eq.type,
            bufferView: void 0
          };
          const gq = await Eq.arrayBuffer(),
            lq = this._exporter._bufferManager.createBufferView(new Uint8Array(gq));
          this._exporter._bufferManager.setBufferView(Yq, lq)
        } else {
          const Oq = qq.replace(/\.\/|\/|\.\\|\\/g, "_"),
            mq = function(qq) {
              switch (qq) {
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
            }(Eq.type);
          let xq = Oq + mq;
          gq.some((qq => qq.uri === xq)) && (xq = `${Oq}_${lq.Tools.RandomId()}${mq}`), Yq = {
            name: qq,
            uri: xq
          }, this._exporter._imageData[xq] = Eq
        }
        return gq.push(Yq), gq.length - 1
      }
      _exportTextureInfo(qq, Eq, gq) {
        const Yq = this._exporter._textures;
        let lq = Yq.findIndex((gq => gq.sampler == Eq && gq.source === qq)); - 1 === lq && (lq = Yq.length, Yq.push({
          source: qq,
          sampler: Eq
        }));
        const Oq = {
          index: lq
        };
        return gq && (Oq.texCoord = gq), Oq
      }
      _exportTextureSampler(qq) {
        const Eq = this._getTextureSampler(qq),
          gq = this._exporter._samplers,
          Yq = gq.findIndex((qq => qq.minFilter === Eq.minFilter && qq.magFilter === Eq.magFilter && qq.wrapS === Eq.wrapS && qq.wrapT === Eq.wrapT));
        return -1 !== Yq ? Yq : (gq.push(Eq), gq.length - 1)
      }
    }
    var Zg = gq(39817),
      fg = gq(39943);
    (0, fg.e)();
    var Mg = gq(37145);
    const Tg = Yq.Matrix.Compose(new Yq.Na(-1, 1, 1), Yq.Quaternion.Identity(), Yq.Na.Zero());

    function zg(qq, Eq) {
      if (!(qq instanceof Bq.e)) return !1;
      if (Eq) {
        if (!qq.getWorldMatrix().equalsWithEpsilon(Yq.Matrix.IdentityReadOnly, Mg.c)) return !1
      } else {
        if (!qq.getWorldMatrix().multiplyToRef(Tg, Yq.TmpVectors.Matrix[0]).equalsWithEpsilon(Yq.Matrix.IdentityReadOnly, Mg.c)) return !1
      }
      return !(qq instanceof Wq.d && qq.geometry)
    }
    const Sg = Yq.Na.ZeroReadOnly,
      pg = Yq.Quaternion.Identity(),
      Gg = Yq.Na.OneReadOnly,
      Lg = new Yq.Na(-1, 1, 1);

    function Jg(qq, Eq) {
      const {
        byteOffset: gq,
        byteStride: Yq,
        type: lq,
        normalized: Oq
      } = qq, mq = qq.getSize(), xq = Eq.reduce(((qq, Eq) => Eq.getTotalVertices() > qq ? Eq.getTotalVertices() : qq), -Number.MAX_VALUE);
      return {
        byteOffset: gq,
        byteStride: Yq,
        componentCount: mq,
        type: lq,
        count: xq * mq,
        normalized: Oq,
        totalVertices: xq,
        kind: qq.getKind()
      }
    }

    function kg(qq) {
      switch (qq) {
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

    function Rg(qq) {
      switch (qq) {
        case uq.f.PositionKind:
        case uq.f.NormalKind:
        case uq.f.TangentKind:
        case uq.f.ColorKind:
        case uq.f.MatricesIndicesKind:
        case uq.f.MatricesIndicesExtraKind:
        case uq.f.MatricesWeightsKind:
        case uq.f.MatricesWeightsExtraKind:
        case uq.f.UVKind:
        case uq.f.UV2Kind:
        case uq.f.UV3Kind:
        case uq.f.UV4Kind:
        case uq.f.UV5Kind:
        case uq.f.UV6Kind:
          return !0
      }
      return !1
    }

    function Ug(qq) {
      const Eq = Math.sqrt(qq.x * qq.x + qq.y * qq.y + qq.z * qq.z);
      Eq > 0 && (qq.x /= Eq, qq.y /= Eq, qq.z /= Eq)
    }

    function Fg(qq) {
      return qq.x *= -1, qq
    }

    function sg(qq) {
      if (qq.x * qq.x + qq.y * qq.y > .5) {
        const Eq = Math.abs(qq.x),
          gq = Math.abs(qq.y);
        if (Eq > gq) {
          const gq = Math.sign(qq.x);
          qq.x = Eq, qq.y *= -gq, qq.z *= -gq, qq.w *= gq
        } else {
          const Eq = Math.sign(qq.y);
          qq.x *= -Eq, qq.y = gq, qq.z *= Eq, qq.w *= -Eq
        }
      } else {
        const Eq = Math.abs(qq.z),
          gq = Math.abs(qq.w);
        if (Eq > gq) {
          const gq = Math.sign(qq.z);
          qq.x *= -gq, qq.y *= gq, qq.z = Eq, qq.w *= -gq
        } else {
          const Eq = Math.sign(qq.w);
          qq.x *= Eq, qq.y *= -Eq, qq.z *= -Eq, qq.w = gq
        }
      }
      return qq
    }

    function Xg(qq) {
      qq.Vqq(-qq.z, qq.w, qq.x, -qq.y)
    }

    function wg(qq, Eq) {
      const gq = Yq.Na.FromArrayToRef(Eq.translation || [0, 0, 0], 0, Yq.TmpVectors.Na[0]),
        lq = Yq.Quaternion.FromArrayToRef(Eq.rotation || [0, 0, 0, 1], 0, Yq.TmpVectors.Quaternion[0]),
        Oq = Yq.Matrix.ComposeToRef(Gg, lq, gq, Yq.TmpVectors.Matrix[0]),
        mq = Yq.Na.FromArrayToRef(qq.translation || [0, 0, 0], 0, Yq.TmpVectors.Na[2]),
        xq = Yq.Quaternion.FromArrayToRef(qq.rotation || [0, 0, 0, 1], 0, Yq.TmpVectors.Quaternion[1]),
        Aq = Yq.Matrix.ComposeToRef(Gg, xq, mq, Yq.TmpVectors.Matrix[1]);
      Oq.multiplyToRef(Aq, Aq), Aq.decompose(void 0, lq, gq), gq.equalsWithEpsilon(Sg, Mg.c) ? delete Eq.translation : Eq.translation = gq.bYq(), lq.equalsWithEpsilon(pg, Mg.c) ? delete Eq.rotation : Eq.rotation = lq.bYq(), Eq.scale && delete Eq.scale
    }

    function Kg(qq, Eq) {
      if (!(Eq instanceof Bq.e)) return !1;
      if (!(1 === Eq.getChildren().length && 0 === qq.getChildren().length && qq.parent === Eq)) return !1;
      const gq = qq.ZJ(),
        Yq = qq instanceof fg.h && !gq.useRightHandedSystem ? Lg : Gg;
      return !!Eq.rc.equalsWithEpsilon(Yq, Mg.c) || (nq.b.Warn(`Cannot collapse node ${qq.name} into parent node ${Eq.name} with modified scaling.`), !1)
    }

    function Cg(qq) {
      if (qq instanceof Array) {
        const Eq = new Float32Array(qq);
        return new Uint8Array(Eq.buffer, Eq.byteOffset, Eq.byteLength)
      }
      return ArrayBuffer.isView(qq) ? new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength) : new Uint8Array(qq)
    }

    function Ig(qq, Eq) {
      for (const [gq, Yq] of Object.entries(qq)) {
        const lq = Eq[gq];
        (Array.isArray(Yq) && Array.isArray(lq) && eg(Yq, lq) || Yq === lq) && delete qq[gq]
      }
      return qq
    }

    function eg(qq, Eq) {
      return qq.length === Eq.length && qq.every(((qq, gq) => qq === Eq[gq]))
    }
    const Dg = new Map([
      [Int8Array, (qq, Eq, gq) => qq.setInt8(Eq, gq)],
      [Uint8Array, (qq, Eq, gq) => qq.setUint8(Eq, gq)],
      [Uint8ClampedArray, (qq, Eq, gq) => qq.setUint8(Eq, gq)],
      [Int16Array, (qq, Eq, gq) => qq.setInt16(Eq, gq, !0)],
      [Uint16Array, (qq, Eq, gq) => qq.setUint16(Eq, gq, !0)],
      [Int32Array, (qq, Eq, gq) => qq.setInt32(Eq, gq, !0)],
      [Uint32Array, (qq, Eq, gq) => qq.setUint32(Eq, gq, !0)],
      [Float32Array, (qq, Eq, gq) => qq.setFloat32(Eq, gq, !0)],
      [Float64Array, (qq, Eq, gq) => qq.setFloat64(Eq, gq, !0)]
    ]);
    class qY {
      writeTypedArray(qq) {
        this._checkGrowBuffer(qq.byteLength);
        const Eq = Dg.get(qq.constructor);
        for (let gq = 0; gq < qq.length; gq++) Eq(this._dataView, this._byteOffset, qq[gq]), this._byteOffset += qq.BYTES_PER_ELEMENT
      }
      constructor(qq) {
        this._data = new Uint8Array(qq), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(qq) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, qq), this._byteOffset++
      }
      writeInt8(qq) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, qq), this._byteOffset++
      }
      writeInt16(qq) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, qq, !0), this._byteOffset += 2
      }
      writeUInt16(qq) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, qq, !0), this._byteOffset += 2
      }
      writeInt32(qq) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, qq, !0), this._byteOffset += 4
      }
      writeUInt32(qq) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, qq, !0), this._byteOffset += 4
      }
      writeFloat32(qq) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, qq, !0), this._byteOffset += 4
      }
      writeFloat64(qq) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, qq, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(qq) {
        const Eq = this.byteOffset + qq;
        if (Eq > this._data.byteLength) {
          const qq = new Uint8Array(2 * Eq);
          qq.set(this._data), this._data = qq, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function EY(qq) {
      return qq % 4 === 0 ? 4 : qq % 2 === 0 ? 2 : 1
    }
    class gY {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(qq) {
        let Eq = 0;
        this._bufferViewToData.forEach((qq => {
          Eq += qq.byteLength
        }));
        const gq = new qY(Eq),
          Yq = Array.from(this._bufferViewToData.keys()).sort(((qq, Eq) => EY(Eq.byteLength) - EY(qq.byteLength)));
        for (const lq of Yq) {
          lq.byteOffset = gq.byteOffset, qq.push(lq);
          const Eq = qq.length - 1,
            Yq = this.getPropertiesWithBufferView(lq);
          for (const qq of Yq) qq.bufferView = Eq;
          gq.writeTypedArray(this._bufferViewToData.get(lq)), this._bufferViewToData.delete(lq)
        }
        return gq.getOutputData()
      }
      createBufferView(qq, Eq) {
        const gq = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: qq.byteLength,
          byteStride: Eq
        };
        return this._bufferViewToData.set(gq, qq), gq
      }
      createAccessor(qq, Eq, gq, Yq, lq, Oq, mq) {
        this._verifyBufferView(qq);
        const xq = {
          bufferView: void 0,
          componentType: gq,
          count: Yq,
          type: Eq,
          min: Oq?.min,
          max: Oq?.max,
          normalized: mq,
          byteOffset: lq
        };
        return this.setBufferView(xq, qq), this._accessorToBufferView.set(xq, qq), xq
      }
      setBufferView(qq, Eq) {
        this._verifyBufferView(Eq);
        this.getPropertiesWithBufferView(Eq).push(qq)
      }
      removeBufferView(qq) {
        const Eq = this.getPropertiesWithBufferView(qq);
        for (const gq of Eq) void 0 !== gq.bufferView && delete gq.bufferView;
        this._bufferViewToData.delete(qq), this._bufferViewToProperties.delete(qq), this._accessorToBufferView.forEach(((Eq, gq) => {
          Eq === qq && (void 0 !== gq.byteOffset && delete gq.byteOffset, this._accessorToBufferView.delete(gq))
        }))
      }
      getBufferView(qq) {
        const Eq = this._accessorToBufferView.get(qq);
        return this._verifyBufferView(Eq), Eq
      }
      getPropertiesWithBufferView(qq) {
        return this._verifyBufferView(qq), this._bufferViewToProperties.set(qq, this._bufferViewToProperties.get(qq) ?? []), this._bufferViewToProperties.get(qq)
      }
      getData(qq) {
        return this._verifyBufferView(qq), this._bufferViewToData.get(qq)
      }
      _verifyBufferView(qq) {
        if (void 0 === qq || !this._bufferViewToData.has(qq)) throw new Error(`BufferView ${qq} not found in BufferManager.`)
      }
    }
    var YY = gq(39951);
    (0, YY.i)();
    var lY = gq(40202);
    (0, lY.f)();
    var OY = gq(40003),
      mY = gq(40844);
    (0, mY.e)();
    let xY = (() => {
      var qq;
      let Eq, gq, Yq = [],
        lq = [],
        Oq = [],
        mq = [];
      return qq = class {
        get influence() {
          return this._influence
        }
        set influence(qq) {
          if (this._influence === qq) return;
          const Eq = this._influence;
          this._influence = qq, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Eq || 0 === qq)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(qq) {
          this._animationPropertiesOverride = qq
        }
        constructor(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            xq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = qq, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new qg.d, this._onDataLayoutChanged = new qg.d, this.id = (0, vq.i)(this, Yq, void 0), this.morphTargetManager = ((0, vq.i)(this, lq), (0, vq.i)(this, Oq, null)), this._animationPropertiesOverride = ((0, vq.i)(this, mq), null), this.id = qq, this.morphTargetManager = xq, this._scene = gq || Vq.b.LastCreatedScene, this.influence = Eq, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Kmq(qq) {
          const Eq = this.hasPositions;
          this._positions = qq, Eq !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(qq) {
          const Eq = this.hasNormals;
          this._normals = qq, Eq !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(qq) {
          const Eq = this.hasTangents;
          this._tangents = qq, Eq !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(qq) {
          const Eq = this.hasUVs;
          this._uvs = qq, Eq !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(qq) {
          const Eq = this.hasUV2s;
          this._uv2s = qq, Eq !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(qq) {
          const Eq = this.hasColors;
          this._colors = qq, Eq !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Eq = tE.d.Clone((() => new qq(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Eq._positions = this._positions, Eq._normals = this._normals, Eq._tangents = this._tangents, Eq._uvs = this._uvs, Eq._uv2s = this._uv2s, Eq._colors = this._colors, Eq
        }
        serialize() {
          const qq = {};
          return qq.name = this.name, qq.influence = this.influence, null != this.id && (qq.id = this.id), qq.uniqueId = this.uniqueId, qq.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (qq.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (qq.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (qq.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (qq.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (qq.colors = Array.prototype.slice.call(this.getColors())), tE.d.AppendSerializedAnimations(this, qq), qq
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Eq, gq) {
          let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const lq = new qq(Eq.name, Eq.influence, gq, Yq);
          if (lq.Kmq(Eq.positions), null != Eq.id && (lq.id = Eq.id), Eq.normals && lq.setNormals(Eq.normals), Eq.tangents && lq.setTangents(Eq.tangents), Eq.uvs && lq.setUVs(Eq.uvs), Eq.uv2s && lq.setUV2s(Eq.uv2s), Eq.colors && lq.setColors(Eq.colors), Eq.animations) {
            for (let qq = 0; qq < Eq.animations.length; qq++) {
              const gq = Eq.animations[qq],
                Yq = (0, kE.e)("BABYLON.Animation");
              Yq && lq.animations.push(Yq.Parse(gq))
            }
            Eq.autoAnimate && gq && gq.beginAnimation(lq, Eq.autoAnimateFrom, Eq.autoAnimateTo, Eq.autoAnimateLoop, Eq.autoAnimateSpeed || 1)
          }
          return lq
        }
        static FromMesh(Eq, gq, Yq) {
          gq || (gq = Eq.name);
          const lq = new qq(gq, Yq, Eq.ZJ(), Eq.morphTargetManager);
          return lq.Kmq(Eq.getVerticesData(Lq.g.PositionKind)), Eq.isVerticesDataPresent(Lq.g.NormalKind) && lq.setNormals(Eq.getVerticesData(Lq.g.NormalKind)), Eq.isVerticesDataPresent(Lq.g.TangentKind) && lq.setTangents(Eq.getVerticesData(Lq.g.TangentKind)), Eq.isVerticesDataPresent(Lq.g.UVKind) && lq.setUVs(Eq.getVerticesData(Lq.g.UVKind)), Eq.isVerticesDataPresent(Lq.g.UV2Kind) && lq.setUV2s(Eq.getVerticesData(Lq.g.UV2Kind)), Eq.isVerticesDataPresent(Lq.g.ColorKind) && lq.setColors(Eq.getVerticesData(Lq.g.ColorKind)), lq
        }
      }, (() => {
        const xq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, hq.M)()], gq = [(0, hq.M)()], (0, vq.f)(null, null, Eq, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: qq => "id" in qq,
            get: qq => qq.id,
            set: (qq, Eq) => {
              qq.id = Eq
            }
          },
          metadata: xq
        }, Yq, lq), (0, vq.f)(null, null, gq, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: qq => "morphTargetManager" in qq,
            get: qq => qq.morphTargetManager,
            set: (qq, Eq) => {
              qq.morphTargetManager = Eq
            }
          },
          metadata: xq
        }, Oq, mq), xq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xq
        })
      })(), qq
    })();
    var AY, cY = gq(40905),
      uY = gq(39995);
    ! function(qq) {
      qq[qq.INTANGENT = 0] = "INTANGENT", qq[qq.OUTTANGENT = 1] = "OUTTANGENT"
    }(AY || (AY = {}));
    class BY {
      static _IsTransformable(qq) {
        return qq && (qq instanceof Bq.e || qq instanceof YY.e || qq instanceof uY.c)
      }
      static _CreateNodeAnimation(qq, Eq, gq, Yq, Oq) {
        if (this._IsTransformable(qq)) {
          const mq = [],
            xq = [],
            Aq = Eq.getKeys(),
            cq = BY._CalculateMinMaxKeyFrames(Aq),
            uq = BY._DeduceInterpolation(Aq, gq, Yq),
            Bq = uq.interpolationType,
            Wq = uq.shouldBakeAnimation;
          if (Wq ? BY._CreateBakedAnimation(qq, Eq, gq, cq.min, cq.max, Eq.framePerSecond, Oq, mq, xq, cq, Yq) : "LINEAR" === Bq || "STEP" === Bq ? BY._CreateLinearOrStepAnimation(qq, Eq, gq, mq, xq, Yq) : "CUBICSPLINE" === Bq ? BY._CreateCubicSplineAnimation(qq, Eq, gq, mq, xq, Yq) : BY._CreateBakedAnimation(qq, Eq, gq, cq.min, cq.max, Eq.framePerSecond, Oq, mq, xq, cq, Yq), mq.length && xq.length) {
            return {
              inputs: mq,
              outputs: xq,
              samplerInterpolation: Bq,
              inputsMin: Wq ? cq.min : lq.Tools.FloatRound(cq.min / Eq.framePerSecond),
              inputsMax: Wq ? cq.max : lq.Tools.FloatRound(cq.max / Eq.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(qq) {
        let Eq = null,
          gq = "VEC3",
          Yq = !1;
        const Oq = qq.targetProperty.split(".");
        switch (Oq[0]) {
          case "rc":
            Eq = "scale";
            break;
          case "position":
            Eq = "translation";
            break;
          case "rotation":
            gq = "VEC4", Eq = "rotation";
            break;
          case "rotationQuaternion":
            gq = "VEC4", Yq = !0, Eq = "rotation";
            break;
          case "influence":
            gq = "SCALAR", Eq = "weights";
            break;
          default:
            lq.Tools.Error(`Unsupported animatable property ${Oq[0]}`)
        }
        return Eq ? {
          animationChannelTargetPath: Eq,
          dataAccessorType: gq,
          useQuaternion: Yq
        } : (lq.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        let Bq;
        if (BY._IsTransformable(qq) && qq.animations)
          for (const Wq of qq.animations) {
            if (uq && !uq(Wq)) continue;
            const lq = BY._DeduceAnimationInfo(Wq);
            lq && (Bq = {
              name: Wq.name,
              samplers: [],
              channels: []
            }, BY._AddAnimation(`${Wq.name}`, Wq.hasRunningRuntimeAnimations ? Eq : Bq, qq, Wq, lq.dataAccessorType, lq.animationChannelTargetPath, Yq, Oq, mq, xq, lq.useQuaternion, Aq, cq), Bq.samplers.length && Bq.channels.length && gq.push(Bq))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        let Bq;
        if (qq instanceof cY.c) {
          const lq = qq.morphTargetManager;
          if (lq)
            for (let Wq = 0; Wq < lq.numTargets; ++Wq) {
              const Nq = lq.getTarget(Wq);
              for (const aq of Nq.animations) {
                if (uq && !uq(aq)) continue;
                const Nq = new mY.d(`${aq.name}`, "influence", aq.framePerSecond, aq.dataType, aq.Vq, aq.enableBlending),
                  Vq = [],
                  dq = aq.getKeys();
                for (let qq = 0; qq < dq.length; ++qq) {
                  const Eq = dq[qq];
                  for (let qq = 0; qq < lq.numTargets; ++qq) qq == Wq ? Vq.push(Eq) : Vq.push({
                    frame: Eq.frame,
                    value: 0
                  })
                }
                Nq.setKeys(Vq, !0);
                const jq = BY._DeduceAnimationInfo(Nq);
                jq && (Bq = {
                  name: Nq.name,
                  samplers: [],
                  channels: []
                }, BY._AddAnimation(aq.name, aq.hasRunningRuntimeAnimations ? Eq : Bq, qq, Nq, jq.dataAccessorType, jq.animationChannelTargetPath, Yq, Oq, mq, xq, jq.useQuaternion, Aq, cq, lq.numTargets), Bq.samplers.length && Bq.channels.length && gq.push(Bq))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
        let uq;
        if (qq.animationGroups) {
          const Bq = qq.animationGroups;
          for (const Wq of Bq) {
            const Bq = new Map,
              Nq = new Map,
              aq = new Set,
              Vq = Wq.to - Wq.from;
            uq = {
              name: Wq.name,
              channels: [],
              samplers: []
            };
            for (let Eq = 0; Eq < Wq.targetedAnimations.length; ++Eq) {
              const cq = Wq.targetedAnimations[Eq],
                Vq = cq.target,
                dq = cq.animation;
              if (Aq && !Aq(dq)) continue;
              const jq = xq.has(Vq);
              if (this._IsTransformable(Vq) || 1 === Vq.length && this._IsTransformable(Vq[0])) {
                const qq = BY._DeduceAnimationInfo(cq.animation);
                if (qq) {
                  const Eq = this._IsTransformable(Vq) ? Vq : this._IsTransformable(Vq[0]) ? Vq[0] : null;
                  Eq && BY._AddAnimation(`${dq.name}`, uq, Eq, dq, qq.dataAccessorType, qq.animationChannelTargetPath, gq, Yq, lq, Oq, qq.useQuaternion, mq, jq)
                }
              } else if (Vq instanceof xY || 1 === Vq.length && Vq[0] instanceof xY) {
                if (BY._DeduceAnimationInfo(cq.animation)) {
                  const Eq = Vq instanceof xY ? Vq : Vq[0];
                  if (Eq) {
                    const gq = qq.morphTargetManagers.find((qq => {
                      for (let gq = 0; gq < qq.numTargets; ++gq)
                        if (qq.getTarget(gq) === Eq) return !0;
                      return !1
                    }));
                    if (gq) {
                      const Yq = qq.meshes.find((qq => qq.morphTargetManager === gq));
                      Yq && (Bq.has(Yq) || Bq.set(Yq, new Map), Bq.get(Yq)?.set(Eq, dq), aq.add(Yq), Nq.set(Yq, dq))
                    }
                  }
                }
              }
            }
            aq.forEach((qq => {
              const Eq = qq.morphTargetManager;
              let xq = null;
              const Aq = [],
                cq = Nq.get(qq).getKeys(),
                aq = cq.length;
              for (let gq = 0; gq < aq; ++gq)
                for (let Yq = 0; Yq < Eq.numTargets; ++Yq) {
                  const lq = Eq.getTarget(Yq),
                    Oq = Bq.get(qq);
                  if (Oq) {
                    const Eq = Oq.get(lq);
                    Eq ? (xq || (xq = new mY.d(`${Wq.name}_${qq.name}_MorphWeightAnimation`, "influence", Eq.framePerSecond, mY.d.ANIMATIONTYPE_FLOAT, Eq.Vq, Eq.enableBlending)), Aq.push(Eq.getKeys()[gq])) : Aq.push({
                      frame: Wq.from + Vq / aq * gq,
                      value: lq.influence,
                      inTangent: cq[0].inTangent ? 0 : void 0,
                      outTangent: cq[0].outTangent ? 0 : void 0
                    })
                  }
                }
              xq.setKeys(Aq, !0);
              const dq = BY._DeduceAnimationInfo(xq);
              dq && BY._AddAnimation(`${Wq.name}_${qq.name}_MorphWeightAnimation`, uq, qq, xq, dq.dataAccessorType, dq.animationChannelTargetPath, gq, Yq, lq, Oq, dq.useQuaternion, mq, !1, Eq?.numTargets)
            })), uq.channels.length && uq.samplers.length && (cq?.set(Wq, Eq.length), Eq.push(uq))
          }
        }
      }
      static _AddAnimation(qq, Eq, gq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq) {
        const Vq = BY._CreateNodeAnimation(gq, lq, mq, Bq, Wq);
        let dq, jq, Hq, oq, Pq, Qq;
        if (Vq) {
          if (aq) {
            let qq, Eq = 0;
            const gq = [];
            for (; Vq.inputs.length > 0;) qq = Vq.inputs.shift(), Eq % aq == 0 && gq.push(qq), Eq++;
            Vq.inputs = gq
          }
          const qq = xq.get(gq),
            lq = new Float32Array(Vq.inputs);
          dq = Aq.createBufferView(lq), jq = Aq.createAccessor(dq, "SCALAR", 5126, Vq.inputs.length, void 0, {
            min: [Vq.inputsMin],
            max: [Vq.inputsMax]
          }), uq.push(jq), Hq = uq.length - 1;
          const cq = new Yq.Quaternion,
            Bq = new Yq.Na,
            Wq = new Yq.Na,
            yq = gq instanceof YY.e,
            tq = kg(Oq),
            rq = new Float32Array(Vq.outputs.length * tq);
          Vq.outputs.forEach((function(qq, Eq) {
            let gq = qq;
            switch (mq) {
              case "translation":
                Nq && (Yq.Na.FromArrayToRef(qq, 0, Wq), Fg(Wq), Wq.toArray(gq));
                break;
              case "rotation":
                4 === qq.length ? Yq.Quaternion.FromArrayToRef(qq, 0, cq) : (gq = new Array(4), Yq.Na.FromArrayToRef(qq, 0, Bq), Yq.Quaternion.FromEulerVectorToRef(Bq, cq)), Nq && (sg(cq), yq && Xg(cq)), cq.toArray(gq)
            }
            rq.set(gq, Eq * tq)
          })), dq = Aq.createBufferView(rq), jq = Aq.createAccessor(dq, Oq, 5126, Vq.outputs.length), uq.push(jq), oq = uq.length - 1, Pq = {
            interpolation: Vq.samplerInterpolation,
            input: Hq,
            output: oq
          }, Eq.samplers.push(Pq), Qq = {
            sampler: Eq.samplers.length - 1,
            target: {
              node: qq,
              path: mq
            }
          }, Eq.channels.push(Qq)
        }
      }
      static _CreateBakedAnimation(qq, Eq, gq, Oq, mq, xq, Aq, cq, uq, Bq, Wq) {
        let Nq;
        const aq = Yq.Quaternion.Identity();
        let Vq, dq, jq, Hq, oq, Pq = null,
          Qq = null;
        Bq.min = lq.Tools.FloatRound(Oq / xq);
        const yq = Eq.getKeys();
        for (let Yq = 0, tq = yq.length; Yq < tq; ++Yq) {
          if (dq = yq[Yq], Yq + 1 < tq)
            if (jq = yq[Yq + 1], dq.value.equals && dq.value.equals(jq.value) || dq.value === jq.value) {
              if (0 !== Yq) continue;
              oq = dq.frame
            } else oq = jq.frame;
          else {
            if (Hq = yq[Yq - 1], dq.value.equals && dq.value.equals(Hq.value) || dq.value === Hq.value) continue;
            oq = mq
          }
          if (oq)
            for (let Yq = dq.frame; Yq <= oq; Yq += Aq) {
              if (Vq = lq.Tools.FloatRound(Yq / xq), Vq === Pq) continue;
              Pq = Vq, Qq = Vq;
              const Oq = {
                key: 0,
                repeatCount: 0,
                Vq: Eq.Vq
              };
              Nq = Eq._interpolate(Yq, Oq), BY._SetInterpolatedValue(qq, Nq, Vq, Eq, gq, aq, cq, uq, Wq)
            }
        }
        Qq && (Bq.max = Qq)
      }
      static _ConvertFactorToVector3OrQuaternion(qq, Eq, gq, Oq, mq) {
        const xq = BY._GetBasePositionRotationOrScale(Eq, Oq, mq),
          Aq = gq.targetProperty.split("."),
          cq = Aq ? Aq[1] : "",
          uq = mq ? Yq.Quaternion.FromArray(xq).normalize() : Yq.Na.FromArray(xq);
        switch (cq) {
          case "x":
          case "y":
          case "z":
            uq[cq] = qq;
            break;
          case "w":
            uq.w = qq;
            break;
          default:
            lq.Tools.Error(`glTFAnimation: Unsupported component name "${cq}"!`)
        }
        return uq
      }
      static _SetInterpolatedValue(qq, Eq, gq, lq, Oq, mq, xq, Aq, cq) {
        let uq;
        xq.push(gq), "weights" !== Oq ? (lq.dataType === mY.d.ANIMATIONTYPE_FLOAT && (Eq = this._ConvertFactorToVector3OrQuaternion(Eq, qq, lq, Oq, cq)), "rotation" === Oq ? (cq ? mq = Eq : (uq = Eq, Yq.Quaternion.RotationYawPitchRollToRef(uq.y, uq.x, uq.z, mq)), Aq.push(mq.bYq())) : (uq = Eq, Aq.push(uq.bYq()))) : Aq.push([Eq])
      }
      static _CreateLinearOrStepAnimation(qq, Eq, gq, Yq, lq, Oq) {
        for (const mq of Eq.getKeys()) Yq.push(mq.frame / Eq.framePerSecond), BY._AddKeyframeValue(mq, Eq, lq, gq, qq, Oq)
      }
      static _CreateCubicSplineAnimation(qq, Eq, gq, Yq, lq, Oq) {
        Eq.getKeys().forEach((function(mq) {
          Yq.push(mq.frame / Eq.framePerSecond), BY._AddSplineTangent(AY.INTANGENT, lq, gq, "CUBICSPLINE", mq, Oq), BY._AddKeyframeValue(mq, Eq, lq, gq, qq, Oq), BY._AddSplineTangent(AY.OUTTANGENT, lq, gq, "CUBICSPLINE", mq, Oq)
        }))
      }
      static _GetBasePositionRotationOrScale(qq, Eq, gq) {
        let lq;
        if ("rotation" === Eq)
          if (gq) {
            lq = (qq.rotationQuaternion ?? Yq.Quaternion.Identity()).bYq()
          } else {
            lq = (qq.rotation ?? Yq.Na.Zero()).bYq()
          }
        else if ("translation" === Eq) {
          lq = (qq.position ?? Yq.Na.Zero()).bYq()
        } else {
          lq = (qq.rc ?? Yq.Na.One()).bYq()
        }
        return lq
      }
      static _AddKeyframeValue(qq, Eq, gq, Oq, mq, xq) {
        let Aq;
        const cq = Eq.dataType;
        if (cq === mY.d.ANIMATIONTYPE_VECTOR3) {
          let Eq = qq.value.bYq();
          if ("rotation" === Oq) {
            const qq = Yq.Na.FromArray(Eq);
            Eq = Yq.Quaternion.RotationYawPitchRoll(qq.y, qq.x, qq.z).bYq()
          }
          gq.push(Eq)
        } else if (cq === mY.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Oq) gq.push([qq.value]);
          else if (Aq = this._ConvertFactorToVector3OrQuaternion(qq.value, mq, Eq, Oq, xq), Aq) {
            if ("rotation" === Oq) {
              const qq = xq ? Aq : Yq.Quaternion.RotationYawPitchRoll(Aq.y, Aq.x, Aq.z).normalize();
              gq.push(qq.bYq())
            }
            gq.push(Aq.bYq())
          }
        } else cq === mY.d.ANIMATIONTYPE_QUATERNION ? gq.push(qq.value.normalize().bYq()) : lq.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(qq, Eq, gq) {
        let Yq, lq, Oq = !1;
        if ("rotation" === Eq && !gq) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let mq = 0, xq = qq.length; mq < xq; ++mq)
          if (lq = qq[mq], lq.inTangent || lq.outTangent)
            if (Yq) {
              if ("CUBICSPLINE" !== Yq) {
                Yq = "LINEAR", Oq = !0;
                break
              }
            } else Yq = "CUBICSPLINE";
        else if (Yq) {
          if ("CUBICSPLINE" === Yq || lq.interpolation && 1 === lq.interpolation && "STEP" !== Yq) {
            Yq = "LINEAR", Oq = !0;
            break
          }
        } else Yq = lq.interpolation && 1 === lq.interpolation ? "STEP" : "LINEAR";
        return Yq || (Yq = "LINEAR"), {
          interpolationType: Yq,
          shouldBakeAnimation: Oq
        }
      }
      static _AddSplineTangent(qq, Eq, gq, lq, Oq, mq) {
        let xq;
        const Aq = qq === AY.INTANGENT ? Oq.inTangent : Oq.outTangent;
        if ("CUBICSPLINE" === lq) {
          if ("rotation" === gq)
            if (Aq)
              if (mq) xq = Aq.bYq();
              else {
                const qq = Aq;
                xq = Yq.Quaternion.RotationYawPitchRoll(qq.y, qq.x, qq.z).bYq()
              }
          else xq = [0, 0, 0, 0];
          else xq = "weights" === gq ? Aq ? [Aq] : [0] : Aq ? Aq.bYq() : [0, 0, 0];
          Eq.push(xq)
        }
      }
      static _CalculateMinMaxKeyFrames(qq) {
        let Eq = 1 / 0,
          gq = -1 / 0;
        return qq.forEach((function(qq) {
          Eq = Math.min(Eq, qq.frame), gq = Math.max(gq, qq.frame)
        })), {
          min: Eq,
          max: gq
        }
      }
    }

    function WY(qq, Eq, gq, Oq, mq, xq) {
      const Aq = {
          attributes: {},
          influence: qq.influence,
          name: qq.name
        },
        cq = Eq.geometry;
      if (!cq) return lq.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Aq;
      const Bq = xq ? -1 : 1,
        Wq = Yq.Na.Zero();
      let Nq, aq;
      if (qq.hasPositions) {
        const Oq = qq.getPositions(),
          xq = cq.getVerticesData(uq.f.PositionKind);
        if (xq) {
          const qq = new Float32Array(xq.length),
            Eq = [1 / 0, 1 / 0, 1 / 0],
            lq = [-1 / 0, -1 / 0, -1 / 0];
          aq = xq.length / 3, Nq = 0;
          for (let gq = Nq; gq < aq; ++gq) {
            const mq = Yq.Na.FromArray(xq, 3 * gq);
            Yq.Na.FromArray(Oq, 3 * gq).subtractToRef(mq, Wq), Wq.x *= Bq, Eq[0] = Math.min(Eq[0], Wq.x), lq[0] = Math.max(lq[0], Wq.x), Eq[1] = Math.min(Eq[1], Wq.y), lq[1] = Math.max(lq[1], Wq.y), Eq[2] = Math.min(Eq[2], Wq.z), lq[2] = Math.max(lq[2], Wq.z), qq[3 * gq] = Wq.x, qq[3 * gq + 1] = Wq.y, qq[3 * gq + 2] = Wq.z
          }
          const cq = gq.createBufferView(qq, 12),
            uq = gq.createAccessor(cq, "VEC3", 5126, Oq.length / 3, 0, {
              min: Eq,
              max: lq
            });
          mq.push(uq), Aq.attributes.POSITION = mq.length - 1
        } else lq.Tools.Warn(`Morph target positions for mesh ${Eq.name} were not exported. Mesh does not have position vertex data`)
      }
      if (qq.hasNormals) {
        const Oq = qq.getNormals(),
          xq = cq.getVerticesData(uq.f.NormalKind);
        if (xq) {
          const qq = new Float32Array(xq.length);
          aq = xq.length / 3, Nq = 0;
          for (let gq = Nq; gq < aq; ++gq) {
            const Eq = Yq.Na.FromArray(xq, 3 * gq).normalize();
            Yq.Na.FromArray(Oq, 3 * gq).normalize().subtractToRef(Eq, Wq), qq[3 * gq] = Wq.x * Bq, qq[3 * gq + 1] = Wq.y, qq[3 * gq + 2] = Wq.z
          }
          const Eq = gq.createBufferView(qq, 12),
            lq = gq.createAccessor(Eq, "VEC3", 5126, Oq.length / 3, 0);
          mq.push(lq), Aq.attributes.NORMAL = mq.length - 1
        } else lq.Tools.Warn(`Morph target normals for mesh ${Eq.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (qq.hasTangents) {
        const Oq = qq.getTangents(),
          xq = cq.getVerticesData(uq.f.TangentKind);
        if (xq) {
          aq = xq.length / 4;
          const qq = new Float32Array(3 * aq);
          Nq = 0;
          for (let gq = Nq; gq < aq; ++gq) {
            const Eq = Yq.Na.FromArray(xq, 4 * gq);
            Ug(Eq);
            const lq = Yq.Na.FromArray(Oq, 3 * gq);
            Ug(lq), lq.subtractToRef(Eq, Wq), qq[3 * gq] = Wq.x * Bq, qq[3 * gq + 1] = Wq.y, qq[3 * gq + 2] = Wq.z
          }
          const Eq = gq.createBufferView(qq, 12),
            lq = gq.createAccessor(Eq, "VEC3", 5126, aq, 0);
          mq.push(lq), Aq.attributes.TANGENT = mq.length - 1
        } else lq.Tools.Warn(`Morph target tangents for mesh ${Eq.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (qq.hasColors) {
        const Oq = qq.getColors(),
          xq = cq.getVerticesData(uq.f.ColorKind),
          Bq = cq.getVertexBuffer(uq.f.ColorKind);
        if (xq && Bq) {
          const qq = Bq.getSize();
          aq = xq.length / qq;
          const Eq = new Float32Array(aq * qq);
          Nq = 0;
          for (let gq = Nq; gq < aq; ++gq)
            if (3 === qq) {
              const lq = Yq.Na.FromArray(xq, gq * qq);
              Yq.Na.FromArray(Oq, gq * qq).subtractToRef(lq, Wq), Eq[3 * gq] = Wq.x, Eq[3 * gq + 1] = Wq.y, Eq[3 * gq + 2] = Wq.z
            } else if (4 === qq) {
            const lq = new Yq.Vector4,
              mq = Yq.Vector4.FromArray(xq, gq * qq);
            Yq.Vector4.FromArray(Oq, gq * qq).subtractToRef(mq, lq), Eq[4 * gq] = lq.x, Eq[4 * gq + 1] = lq.y, Eq[4 * gq + 2] = lq.z, Eq[4 * gq + 3] = lq.w
          } else lq.Tools.Warn(`Unsupported number of components for color attribute: ${qq}`);
          const cq = gq.createBufferView(Eq, 4 * qq),
            uq = gq.createAccessor(cq, 3 === qq ? "VEC3" : "VEC4", 5126, aq, 0);
          mq.push(uq), Aq.attributes.COLOR_0 = mq.length - 1
        } else lq.Tools.Warn(`Morph target colors for mesh ${Eq.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Aq
    }
    var NY = gq(41334);
    class aY {}
    aY.DEFAULT_COLOR = sq.d.White(), aY.DEFAULT_WIDTH_ATTENUATED = 1, aY.DEFAULT_WIDTH = .1;
    var VY = gq(40835);
    class dY {
      constructor(qq) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = qq
      }
      moveTo(qq, Eq) {
        this._currentPath = new VY.h(qq, Eq), this._tempPaths.push(this._currentPath)
      }
      lineTo(qq, Eq) {
        this._currentPath.addLineTo(qq, Eq)
      }
      quadraticCurveTo(qq, Eq, gq, Yq) {
        this._currentPath.addQuadraticCurveTo(qq, Eq, gq, Yq, this._resolution)
      }
      bezierCurveTo(qq, Eq, gq, Yq, lq, Oq) {
        this._currentPath.addBezierCurveTo(qq, Eq, gq, Yq, lq, Oq, this._resolution)
      }
      extractHoles() {
        for (const qq of this._tempPaths) qq.area() > 0 ? this._holes.push(qq) : this._paths.push(qq);
        if (!this._paths.length && this._holes.length) {
          const qq = this._holes;
          this._holes = this._paths, this._paths = qq
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

    function jY(qq, Eq, gq, Yq, lq, Oq) {
      const mq = Oq.glyphs[qq] || Oq.glyphs["?"];
      if (!mq) return null;
      const xq = new dY(lq);
      if (mq.o) {
        const qq = mq.o.split(" ");
        for (let lq = 0, Oq = qq.length; lq < Oq;) {
          switch (qq[lq++]) {
            case "m": {
              const Oq = parseInt(qq[lq++]) * Eq + gq,
                mq = parseInt(qq[lq++]) * Eq + Yq;
              xq.moveTo(Oq, mq);
              break
            }
            case "l": {
              const Oq = parseInt(qq[lq++]) * Eq + gq,
                mq = parseInt(qq[lq++]) * Eq + Yq;
              xq.lineTo(Oq, mq);
              break
            }
            case "q": {
              const Oq = parseInt(qq[lq++]) * Eq + gq,
                mq = parseInt(qq[lq++]) * Eq + Yq,
                Aq = parseInt(qq[lq++]) * Eq + gq,
                cq = parseInt(qq[lq++]) * Eq + Yq;
              xq.quadraticCurveTo(Aq, cq, Oq, mq);
              break
            }
            case "b": {
              const Oq = parseInt(qq[lq++]) * Eq + gq,
                mq = parseInt(qq[lq++]) * Eq + Yq,
                Aq = parseInt(qq[lq++]) * Eq + gq,
                cq = parseInt(qq[lq++]) * Eq + Yq,
                uq = parseInt(qq[lq++]) * Eq + gq,
                Bq = parseInt(qq[lq++]) * Eq + Yq;
              xq.bezierCurveTo(Aq, cq, uq, Bq, Oq, mq);
              break
            }
          }
        }
      }
      return xq.extractHoles(), {
        offsetX: mq.ha * Eq,
        shapePath: xq
      }
    }

    function HY(qq, Eq, gq, Yq) {
      const lq = Array.from(qq),
        Oq = Eq / Yq.resolution,
        mq = (Yq.boundingBox.yMax - Yq.boundingBox.yMin + Yq.underlineThickness) * Oq,
        xq = [];
      let Aq = 0,
        cq = 0;
      for (let uq = 0; uq < lq.length; uq++) {
        const qq = lq[uq];
        if ("\n" === qq) Aq = 0, cq -= mq;
        else {
          const Eq = jY(qq, Oq, Aq, cq, gq, Yq);
          Eq && (Aq += Eq.offsetX, xq.push(Eq.shapePath))
        }
      }
      return xq
    }
    class oY {
      static ConvertPoints(qq, Eq) {
        if (qq.length && Array.isArray(qq) && "number" === typeof qq[0]) return [qq];
        if (qq.length && Array.isArray(qq[0]) && "number" === typeof qq[0][0]) return qq;
        if (qq.length && !Array.isArray(qq[0]) && qq[0] instanceof Gq.q) {
          const Eq = [];
          for (let gq = 0; gq < qq.length; gq++) {
            const Yq = qq[gq];
            Eq.push(Yq.x, Yq.y, Yq.z)
          }
          return [Eq]
        }
        if (qq.length > 0 && Array.isArray(qq[0]) && qq[0].length > 0 && qq[0][0] instanceof Gq.q) {
          const Eq = [],
            gq = qq;
          for (const qq of gq) Eq.push(qq.flatMap((qq => [qq.x, qq.y, qq.z])));
          return Eq
        }
        if (qq instanceof Float32Array) {
          if (Eq?.floatArrayStride) {
            const gq = [],
              Yq = 3 * Eq.floatArrayStride;
            for (let Eq = 0; Eq < qq.length; Eq += Yq) {
              const lq = new Array(Yq);
              for (let gq = 0; gq < Yq; gq++) lq[gq] = qq[Eq + gq];
              gq.push(lq)
            }
            return gq
          }
          return [Array.from(qq)]
        }
        if (qq.length && qq[0] instanceof Float32Array) {
          const Eq = [];
          for (const gq of qq) Eq.push(Array.from(gq));
          return Eq
        }
        return []
      }
      static OmitZeroLengthPredicate(qq, Eq, gq) {
        const Yq = [];
        return Eq.subtract(qq).lengthSquared() > 0 && Yq.push([qq, Eq]), gq.subtract(Eq).lengthSquared() > 0 && Yq.push([Eq, gq]), qq.subtract(gq).lengthSquared() > 0 && Yq.push([gq, qq]), 0 === Yq.length ? null : Yq
      }
      static OmitDuplicatesPredicate(qq, Eq, gq, Yq) {
        const lq = [];
        return oY._SearchInPoints(qq, Eq, Yq) || lq.push([qq, Eq]), oY._SearchInPoints(Eq, gq, Yq) || lq.push([Eq, gq]), oY._SearchInPoints(gq, qq, Yq) || lq.push([gq, qq]), 0 === lq.length ? null : lq
      }
      static _SearchInPoints(qq, Eq, gq) {
        for (const Yq of gq)
          for (let gq = 0; gq < Yq.length; gq++)
            if (Yq[gq]?.equals(qq) && (Yq[gq + 1]?.equals(Eq) || Yq[gq - 1]?.equals(Eq))) return !0;
        return !1
      }
      static MeshesToLines(qq, Eq) {
        const gq = [];
        for (let Yq = 0; Yq < qq.length; Yq++) {
          const lq = qq[Yq],
            Oq = lq.getVerticesData(Lq.g.PositionKind),
            mq = lq.iYq();
          if (Oq && mq)
            for (let qq = 0, xq = 0; qq < mq.length; qq++) {
              const Aq = 3 * mq[xq++],
                cq = 3 * mq[xq++],
                uq = 3 * mq[xq++],
                Bq = new Gq.q(Oq[Aq], Oq[Aq + 1], Oq[Aq + 2]),
                Wq = new Gq.q(Oq[cq], Oq[cq + 1], Oq[cq + 2]),
                Nq = new Gq.q(Oq[uq], Oq[uq + 1], Oq[uq + 2]);
              if (Eq) {
                const xq = Eq(Bq, Wq, Nq, gq, qq, Aq, lq, Yq, Oq, mq);
                if (xq)
                  for (const qq of xq) gq.push(qq)
              } else gq.push([Bq, Wq], [Wq, Nq], [Nq, Bq])
            }
        }
        return gq
      }
      static ToVector3Array(qq) {
        if (Array.isArray(qq[0])) {
          const Eq = [],
            gq = qq;
          for (const qq of gq) {
            const gq = [];
            for (let Eq = 0; Eq < qq.length; Eq += 3) gq.push(new Gq.q(qq[Eq], qq[Eq + 1], qq[Eq + 2]));
            Eq.push(gq)
          }
          return Eq
        }
        const Eq = qq,
          gq = [];
        for (let Yq = 0; Yq < Eq.length; Yq += 3) gq.push(new Gq.q(Eq[Yq], Eq[Yq + 1], Eq[Yq + 2]));
        return gq
      }
      static ToNumberArray(qq) {
        return qq.flatMap((qq => [qq.x, qq.y, qq.z]))
      }
      static GetPointsCountInfo(qq) {
        const Eq = new Array(qq.length);
        let gq = 0;
        for (let Yq = qq.length; Yq--;) Eq[Yq] = qq[Yq].length / 3, gq += Eq[Yq];
        return {
          total: gq,
          counts: Eq
        }
      }
      static GetLineLength(qq) {
        if (0 === qq.length) return 0;
        let Eq;
        Eq = "number" === typeof qq[0] ? oY.ToVector3Array(qq) : qq;
        const gq = Gq.o.Na[0];
        let Yq = 0;
        for (let lq = 0; lq < Eq.length - 1; lq++) {
          const qq = Eq[lq];
          Yq += Eq[lq + 1].subtractToRef(qq, gq).length()
        }
        return Yq
      }
      static GetLineLengthArray(qq, Eq) {
        const gq = Eq ? new Float32Array(Eq, 0, qq.length / 3) : new Float32Array(qq.length / 3);
        let Yq = 0;
        for (let lq = 0, Oq = qq.length / 3 - 1; lq < Oq; lq++) {
          let Eq = qq[3 * lq + 0],
            Oq = qq[3 * lq + 1],
            mq = qq[3 * lq + 2];
          Eq -= qq[3 * lq + 3], Oq -= qq[3 * lq + 4], mq -= qq[3 * lq + 5];
          Yq += Math.sqrt(Eq * Eq + Oq * Oq + mq * mq), gq[lq + 1] = Yq
        }
        return gq
      }
      static SegmentizeSegmentByCount(qq, Eq, gq) {
        const Yq = [],
          lq = Eq.subtract(qq),
          Oq = Gq.o.Na[0];
        Oq.A4(gq);
        const mq = Gq.o.Na[1];
        lq.divideToRef(Oq, mq);
        let xq = qq.clone();
        Yq.push(xq);
        for (let Aq = 0; Aq < gq; Aq++) xq = xq.clone(), Yq.push(xq.addInPlace(mq));
        return Yq
      }
      static SegmentizeLineBySegmentLength(qq, Eq) {
        const gq = qq[0] instanceof Gq.q ? oY.GetLineSegments(qq) : "number" === typeof qq[0] ? oY.GetLineSegments(oY.ToVector3Array(qq)) : qq,
          Yq = [];
        for (const lq of gq)
          if (lq.length > Eq) {
            const qq = oY.SegmentizeSegmentByCount(lq.point1, lq.point2, Math.ceil(lq.length / Eq));
            for (const Eq of qq) Yq.push(Eq)
          } else Yq.push(lq.point1), Yq.push(lq.point2);
        return Yq
      }
      static SegmentizeLineBySegmentCount(qq, Eq) {
        const gq = "number" === typeof qq[0] ? oY.ToVector3Array(qq) : qq,
          Yq = oY.GetLineLength(gq) / Eq;
        return oY.SegmentizeLineBySegmentLength(gq, Yq)
      }
      static GetLineSegments(qq) {
        const Eq = [];
        for (let gq = 0; gq < qq.length - 1; gq++) {
          const Yq = qq[gq],
            lq = qq[gq + 1],
            Oq = lq.subtract(Yq).length();
          Eq.push({
            point1: Yq,
            point2: lq,
            length: Oq
          })
        }
        return Eq
      }
      static GetMinMaxSegmentLength(qq) {
        const Eq = oY.GetLineSegments(qq).sort((qq => qq.length));
        return {
          min: Eq[0].length,
          max: Eq[Eq.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const lq = Eq * gq;
        let Oq = 0,
          mq = 0;
        const xq = qq.length;
        for (let cq = 0; cq < xq; cq++) {
          if (lq <= Oq + qq[cq].length) {
            mq = cq;
            break
          }
          Oq += qq[cq].length
        }
        const Aq = (lq - Oq) / qq[mq].length;
        return qq[mq].point2.subtractToRef(qq[mq].point1, Gq.o.Na[0]), Gq.o.Na[0].scaleToRef(Aq, Gq.o.Na[1]), Yq || Gq.o.Na[1].addInPlace(qq[mq].point1), Gq.o.Na[1].clone()
      }
      static GetCircleLinePoints(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq,
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Eq;
        const Oq = [];
        for (let mq = 0; mq <= Eq; mq++) Oq.push(new Gq.q(Math.cos(mq * lq) * qq, Math.sin(mq * lq) * Yq, gq));
        return Oq
      }
      static GetBezierLinePoints(qq, Eq, gq, Yq) {
        return VY.e.CreateQuadraticBezier(qq, Eq, gq, Yq).getPoints().flatMap((qq => [qq.x, qq.y, qq.z]))
      }
      static GetArrowCap(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [qq.clone(), qq.add(Eq.multiplyByFloats(gq, gq, gq))],
          widths: [Yq, lq, Oq, mq]
        }
      }
      static GetPointsFromText(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const mq = [],
          xq = HY(qq, Eq, gq, Yq);
        for (const Aq of xq) {
          for (const qq of Aq.paths) {
            const Eq = [],
              gq = qq.getPoints();
            for (const qq of gq) Eq.push(qq.x, qq.y, lq);
            mq.push(Eq)
          }
          if (Oq)
            for (const qq of Aq.holes) {
              const Eq = [],
                gq = qq.getPoints();
              for (const qq of gq) Eq.push(qq.x, qq.y, lq);
              mq.push(Eq)
            }
        }
        return mq
      }
      static Color3toRGBAUint8(qq) {
        const Eq = new Uint8Array(4 * qq.length);
        for (let gq = 0, Yq = 0; gq < qq.length; gq++) Eq[Yq++] = 255 * qq[gq].r, Eq[Yq++] = 255 * qq[gq].g, Eq[Yq++] = 255 * qq[gq].b, Eq[Yq++] = 255;
        return Eq
      }
      static CreateColorsTexture(qq, Eq, gq, Yq) {
        const lq = Yq.Ba().getCaps().maxTextureSize ?? 1,
          Oq = Eq.length > lq ? lq : Eq.length,
          mq = Math.ceil(Eq.length / lq);
        mq > 1 && (Eq = [...Eq, ...Array(Oq * mq - Eq.length).fill(Eq[0])]);
        const xq = oY.Color3toRGBAUint8(Eq),
          Aq = new yq.d(xq, Oq, mq, ug.d.TEXTUREFORMAT_RGBA, Yq, !1, !0, gq);
        return Aq.name = qq, Aq
      }
      static PrepareEmptyColorsTexture(qq) {
        if (!aY.EmptyColorsTexture) {
          const Eq = new Uint8Array(4);
          aY.EmptyColorsTexture = new yq.d(Eq, 1, 1, ug.d.TEXTUREFORMAT_RGBA, qq, !1, !1, yq.d.NEAREST_NEAREST), aY.EmptyColorsTexture.name = "grlEmptyColorsTexture", aY.EmptyColorsTexture.MJ.addOnce((() => {
            aY.EmptyColorsTexture = null
          }))
        }
        return aY.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        aY.EmptyColorsTexture?.dispose(), aY.EmptyColorsTexture = null
      }
      static BooleanToNumber(qq) {
        return qq ? 1 : 0
      }
    }
    class PY extends Jq.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class QY extends kq.c {
      isCompatible(qq) {
        return !0
      }
      constructor(qq, Eq, gq) {
        gq = gq || {
          color: aY.DEFAULT_COLOR
        };
        const Yq = new PY;
        Yq.GREASED_LINE_HAS_COLOR = !!gq.color && !gq.useColors, Yq.GREASED_LINE_SIZE_ATTENUATION = gq.sizeAttenuation ?? !1, Yq.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === gq.colorDistributionType, Yq.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Eq ?? qq.ZJ()).useRightHandedSystem, Yq.GREASED_LINE_CAMERA_FACING = gq.cameraFacing ?? !0, super(qq, QY.GREASED_LINE_MATERIAL_NAME, 200, Yq, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = gq?.forceGLSL || QY.ForceGLSL, this._scene = Eq ?? qq.ZJ(), this._engine = this._scene.Ba(), this._cameraFacing = gq.cameraFacing ?? !0, this.visibility = gq.visibility ?? 1, this.useDash = gq.useDash ?? !1, this.dashRatio = gq.dashRatio ?? .5, this.dashOffset = gq.dashOffset ?? 0, this.width = gq.width ? gq.width : gq.sizeAttenuation ? aY.DEFAULT_WIDTH_ATTENUATED : aY.DEFAULT_WIDTH, this._sizeAttenuation = gq.sizeAttenuation ?? !1, this.colorMode = gq.colorMode ?? 0, this._color = gq.color ?? null, this.useColors = gq.useColors ?? !1, this._colorsDistributionType = gq.colorDistributionType ?? 0, this.colorsSampling = gq.colorsSampling ?? yq.d.NEAREST_NEAREST, this._colors = gq.colors ?? null, this.dashCount = gq.dashCount ?? 1, this.resolution = gq.resolution ?? new Gq.p(this._engine.getRenderWidth(), this._engine.getRenderHeight()), gq.colorsTexture ? this.colorsTexture = gq.colorsTexture : this._colors ? this.colorsTexture = oY.CreateColorsTexture(`${qq.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? aY.DEFAULT_COLOR, oY.PrepareEmptyColorsTexture(this._scene)), this._engine.MJ.add((() => {
          oY.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(qq) {
        qq.push("grl_offsets"), qq.push("grl_widths"), qq.push("grl_colorPointers"), qq.push("grl_counters"), this._cameraFacing ? (qq.push("grl_previousAndSide"), qq.push("grl_nextAndCounters")) : qq.push("grl_slopes")
      }
      getSamplers(qq) {
        qq.push("grl_colors")
      }
      getActiveTextures(qq) {
        this.colorsTexture && qq.push(this.colorsTexture)
      }
      getUniforms() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Eq = [{
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
        return this._cameraFacing && Eq.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === qq && Eq.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Eq,
          vertex: this._cameraFacing && this._isGLSL(qq) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(qq) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(qq) {
        if (this._cameraFacing) {
          qq.Eqq("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || qq.Eqq("viewProjection", this._scene.getTransformMatrix());
          const Eq = Gq.o.Vector4[0];
          Eq.x = this._aspect, Eq.y = this._resolution.x, Eq.z = this._resolution.y, Eq.w = this.width, qq.updateVector4("grl_aspect_resolution_lineWidth", Eq)
        }
        const Eq = Gq.o.Vector4[0];
        Eq.x = oY.BooleanToNumber(this.useDash), Eq.y = this._dashArray, Eq.z = this.dashOffset, Eq.w = this.dashRatio, qq.updateVector4("grl_dashOptions", Eq);
        const gq = Gq.o.Vector4[1];
        gq.x = this.colorMode, gq.y = this.visibility, gq.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, gq.w = oY.BooleanToNumber(this.useColors), qq.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", gq), this._color && qq.updateColor3("grl_singleColor", this._color);
        const Yq = this.colorsTexture ?? aY.EmptyColorsTexture;
        qq.setTexture("grl_colors", Yq), qq.updateFloat2("grl_textureSize", Yq?.getSize().width ?? 1, Yq?.getSize().height ?? 1)
      }
      prepareDefines(qq, Eq, gq) {
        qq.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, qq.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, qq.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, qq.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Eq.useRightHandedSystem, qq.GREASED_LINE_CAMERA_FACING = this._cameraFacing, qq.GREASED_LINE_USE_OFFSETS = !!gq.offsets
      }
      getClassName() {
        return QY.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Eq) ? function(qq, Eq) {
          if ("vertex" === qq) {
            const qq = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Eq && (qq["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), qq
          }
          return "fragment" === qq ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(qq, this._cameraFacing) : function(qq, Eq) {
          if ("vertex" === qq) {
            const qq = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Eq && (qq["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), qq
          }
          return "fragment" === qq ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(qq, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(qq) {
        this.setColors(qq)
      }
      setColors(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this._colors?.length ?? 0;
        if (this._colors = qq, null !== qq && 0 !== qq.length) {
          if (!Eq || gq)
            if (this.colorsTexture && Yq === qq.length && !gq) {
              const Eq = oY.Color3toRGBAUint8(qq);
              this.colorsTexture.update(Eq)
            } else this.colorsTexture?.dispose(), this.colorsTexture = oY.CreateColorsTexture(`${this._material.name}-colors-texture`, qq, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(qq) {
        this._dashCount = qq, this._dashArray = 1 / qq
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(qq) {
        this._sizeAttenuation = qq, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(qq) {
        this.setColor(qq)
      }
      setColor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== qq || null !== this._color && null === qq ? (this._color = qq, Eq || this.markAllDefinesAsDirty()) : this._color = qq
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(qq) {
        this._colorsDistributionType = qq, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(qq) {
        this._aspect = qq.x / qq.y, this._resolution = qq
      }
      serialize() {
        const qq = super.serialize(),
          Eq = {
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
        return this._colors && (Eq.colors = this._colors), this._color && (Eq.color = this._color), qq.greasedLineMaterialOptions = Eq, qq
      }
      parse(qq, Eq, gq) {
        super.parse(qq, Eq, gq);
        const Yq = qq.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Yq.color && this.setColor(Yq.color, !0), Yq.colorDistributionType && (this.colorsDistributionType = Yq.colorDistributionType), Yq.colors && (this.colors = Yq.colors), Yq.colorsSampling && (this.colorsSampling = Yq.colorsSampling), Yq.colorMode && (this.colorMode = Yq.colorMode), Yq.useColors && (this.useColors = Yq.useColors), Yq.visibility && (this.visibility = Yq.visibility), Yq.useDash && (this.useDash = Yq.useDash), Yq.dashCount && (this.dashCount = Yq.dashCount), Yq.dashRatio && (this.dashRatio = Yq.dashRatio), Yq.dashOffset && (this.dashOffset = Yq.dashOffset), Yq.width && (this.width = Yq.width), Yq.sizeAttenuation && (this.sizeAttenuation = Yq.sizeAttenuation), Yq.resolution && (this.resolution = Yq.resolution), this.colors ? this.colorsTexture = oY.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Eq) : oY.PrepareEmptyColorsTexture(Eq), this.markAllDefinesAsDirty()
      }
      copyTo(qq) {
        const Eq = qq;
        Eq.colorsTexture?.dispose(), this._colors && (Eq.colorsTexture = oY.CreateColorsTexture(`${Eq._material.name}-colors-texture`, this._colors, Eq.colorsSampling, this._scene)), Eq.setColor(this.color, !0), Eq.colorsDistributionType = this.colorsDistributionType, Eq.colorsSampling = this.colorsSampling, Eq.colorMode = this.colorMode, Eq.useColors = this.useColors, Eq.visibility = this.visibility, Eq.useDash = this.useDash, Eq.dashCount = this.dashCount, Eq.dashRatio = this.dashRatio, Eq.dashOffset = this.dashOffset, Eq.width = this.width, Eq.sizeAttenuation = this.sizeAttenuation, Eq.resolution = this.resolution, Eq.markAllDefinesAsDirty()
      }
      _isGLSL(qq) {
        return 0 === qq || this._forceGLSL
      }
    }
    QY.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", QY.ForceGLSL = !1;
    var yY = gq(40163),
      tY = gq(40176),
      rY = gq(38649),
      vY = gq(40225),
      hY = gq(39602);
    class nY extends vY.s {
      constructor(qq, Eq, Yq) {
        const lq = Eq.Ba(),
          Oq = lq.isWebGPU && !(Yq.forceGLSL || nY.ForceGLSL),
          mq = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Eq.useRightHandedSystem && mq.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const xq = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Yq.cameraFacing ? (mq.push("GREASED_LINE_CAMERA_FACING"), xq.push("grl_previousAndSide", "grl_nextAndCounters")) : (xq.push("grl_slopes"), xq.push("grl_counters"));
        const Aq = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Oq || Aq.push("world", "viewProjection", "view", "projection"), super(qq, Eq, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Oq ? ["Scene", "Mesh"] : void 0,
            attributes: xq,
            uniforms: Aq,
            samplers: Oq ? [] : ["grlColors"],
            defines: mq,
            extraInitializationsAsync: async () => {
              Oq ? await Promise.all([gq.e(325).then((() => gq(61834))), gq.e(384).then((() => gq(61838)))]) : await Promise.all([gq.e(318).then((() => gq(61844))), gq.e(385).then((() => gq(61848)))])
            },
            shaderLanguage: Oq ? 1 : 0
          }), this._color = sq.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Yq = Yq || {
            color: aY.DEFAULT_COLOR
          }, this.visibility = Yq.visibility ?? 1, this.useDash = Yq.useDash ?? !1, this.dashRatio = Yq.dashRatio ?? .5, this.dashOffset = Yq.dashOffset ?? 0, this.dashCount = Yq.dashCount ?? 1, this.width = Yq.width ? Yq.width : Yq.sizeAttenuation && Yq.cameraFacing ? aY.DEFAULT_WIDTH_ATTENUATED : aY.DEFAULT_WIDTH, this.sizeAttenuation = Yq.sizeAttenuation ?? !1, this.color = Yq.color ?? sq.d.White(), this.useColors = Yq.useColors ?? !1, this.colorsDistributionType = Yq.colorDistributionType ?? 0, this.colorsSampling = Yq.colorsSampling ?? yq.d.NEAREST_NEAREST, this.colorMode = Yq.colorMode ?? 0, this._colors = Yq.colors ?? null, this._cameraFacing = Yq.cameraFacing ?? !0, this.resolution = Yq.resolution ?? new Gq.p(lq.getRenderWidth(), lq.getRenderHeight()), Yq.colorsTexture ? this.colorsTexture = Yq.colorsTexture : this._colors ? this.colorsTexture = oY.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Eq) : (this._color = this._color ?? aY.DEFAULT_COLOR, this.colorsTexture = oY.PrepareEmptyColorsTexture(Eq)), Oq) {
          const qq = new hY.e;
          qq.setParameters(), qq.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", qq)
        }
        lq.MJ.add((() => {
          oY.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== aY.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Gq.p(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(qq) {
        this.setColors(qq)
      }
      setColors(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Yq = this._colors?.length ?? 0;
        if (this._colors = qq, null !== qq && 0 !== qq.length) {
          if (!Eq || gq)
            if (this._colorsTexture && Yq === qq.length && !gq) {
              const Eq = oY.Color3toRGBAUint8(qq);
              this._colorsTexture.update(Eq)
            } else this._colorsTexture && this._colorsTexture !== aY.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = oY.CreateColorsTexture(`${this.name}-colors-texture`, qq, this.colorsSampling, this.ZJ())
        } else {
          this._colorsTexture && this._colorsTexture !== aY.EmptyColorsTexture && this._colorsTexture.dispose();
          const qq = this.ZJ();
          qq && (this.colorsTexture = oY.PrepareEmptyColorsTexture(qq))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(qq) {
        this._colorsTexture = qq, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(qq) {
        this._width = qq, this.setFloat("grlWidth", qq)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(qq) {
        this._useColors = qq, this.setFloat("grlUseColors", oY.BooleanToNumber(qq))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(qq) {
        this._colorsSampling = qq
      }
      get visibility() {
        return this._visibility
      }
      set visibility(qq) {
        this._visibility = qq, this.setFloat("grlVisibility", qq)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(qq) {
        this._useDash = qq, this.setFloat("grlUseDash", oY.BooleanToNumber(qq))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(qq) {
        this._dashOffset = qq, this.setFloat("grlDashOffset", qq)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(qq) {
        this._dashRatio = qq, this.setFloat("grlDashRatio", qq)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(qq) {
        this._dashCount = qq, this._dashArray = 1 / qq, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(qq) {
        this._sizeAttenuation = qq, this.setFloat("grlSizeAttenuation", oY.BooleanToNumber(qq))
      }
      get color() {
        return this._color
      }
      set color(qq) {
        this.setColor(qq)
      }
      setColor(qq) {
        qq = qq ?? aY.DEFAULT_COLOR, this._color = qq, this.setColor3("grlColor", qq)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(qq) {
        this._colorsDistributionType = qq, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(qq) {
        this._colorMode = qq, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(qq) {
        this._resolution = qq, this.setVector2("grlResolution", qq), this.setFloat("grlAspect", qq.x / qq.y)
      }
      serialize() {
        const qq = super.serialize(),
          Eq = {
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
        return this._colors && (Eq.colors = this._colors), qq.greasedLineMaterialOptions = Eq, qq
      }
      parse(qq, Eq, gq) {
        const Yq = qq.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Yq.color && (this.color = Yq.color), Yq.colorDistributionType && (this.colorsDistributionType = Yq.colorDistributionType), Yq.colorsSampling && (this.colorsSampling = Yq.colorsSampling), Yq.colorMode && (this.colorMode = Yq.colorMode), Yq.useColors && (this.useColors = Yq.useColors), Yq.visibility && (this.visibility = Yq.visibility), Yq.useDash && (this.useDash = Yq.useDash), Yq.dashCount && (this.dashCount = Yq.dashCount), Yq.dashRatio && (this.dashRatio = Yq.dashRatio), Yq.dashOffset && (this.dashOffset = Yq.dashOffset), Yq.width && (this.width = Yq.width), Yq.sizeAttenuation && (this.sizeAttenuation = Yq.sizeAttenuation), Yq.resolution && (this.resolution = Yq.resolution), Yq.colors ? this.colorsTexture = oY.CreateColorsTexture(`${this.name}-colors-texture`, Yq.colors, this.colorsSampling, this.ZJ()) : this.colorsTexture = oY.PrepareEmptyColorsTexture(Eq), this._cameraFacing = Yq.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var bY, iY, ZY;
    nY.ForceGLSL = !1,
      function(qq) {
        qq[qq.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", qq[qq.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(bY || (bY = {})),
      function(qq) {
        qq[qq.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", qq[qq.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", qq[qq.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(iY || (iY = {})),
      function(qq) {
        qq[qq.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", qq[qq.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", qq[qq.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", qq[qq.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", qq[qq.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(ZY || (ZY = {}));
    class fY extends yY.e {
      constructor(qq, Eq, gq) {
        super(qq, Eq, null, null, !1, !1), this.name = qq, this._options = gq, this._lazy = !1, this._updatable = !1, this._engine = Eq.Ba(), this._lazy = gq.lazy ?? !1, this._updatable = gq.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = gq.colorPointers ?? [], this._widths = gq.widths ?? new Array(gq.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(qq) {
        let Eq = 0;
        for (const Yq of this._points) Eq += Yq.length;
        const gq = Eq / 3 * 2 - this._widths.length;
        for (let Yq = 0; Yq < gq; Yq++) this._widths.push(qq)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Va && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(qq, Eq) {
        for (const gq of qq) this._points.push(gq);
        this._lazy || this.setPoints(this._points, Eq)
      }
      dispose(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(qq, Eq)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(qq) {
        this._uvs = qq instanceof Float32Array ? qq : new Float32Array(qq), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(qq) {
        this.material instanceof nY && this.material.setDefine("GREASED_LINE_USE_OFFSETS", qq?.length > 0), this._offsets = qq, this._offsetsBuffer ? this._offsetsBuffer.update(qq) : this._createOffsetsBuffer(qq)
      }
      get widths() {
        return this._widths
      }
      set widths(qq) {
        this._widths = qq, this._lazy || this._widthsBuffer && this._widthsBuffer.update(qq)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(qq) {
        this._colorPointers = qq, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(qq)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof nY) return this.material;
        const qq = this.material?.pluginManager?.getPlugin(QY.GREASED_LINE_MATERIAL_NAME);
        return qq || void 0
      }
      get points() {
        const qq = [];
        return rY.b.DeepCopy(this._points, qq), qq
      }
      setPoints(qq, Eq) {
        this._points = oY.ConvertPoints(qq, Eq?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Eq?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Eq)
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
      serialize(qq) {
        super.serialize(qq), qq.type = this.getClassName(), qq.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new tY.d;
        return Eq.positions = this._vertexPositions, Eq.indices = this._indices, Eq.uvs = this._uvs, qq && (Eq.normals = [], tY.d.ComputeNormals(this._vertexPositions, this._indices, Eq.normals)), Eq.applyToMesh(this, this._options.updatable), Eq
      }
      _createOffsetsBuffer(qq) {
        const Eq = this._scene.Ba(),
          gq = new Lq.b(Eq, qq, this._updatable, 3);
        this.setVerticesBuffer(gq.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = gq
      }
    }
    class MY {
      constructor(qq, Eq) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = qq, this.wasAddedByNoopNode = Eq
      }
      getIndicesAccessor(qq, Eq, gq, Yq, lq) {
        return this._indicesAccessorMap.get(qq)?.get(Eq)?.get(gq)?.get(Yq)?.get(lq)
      }
      setIndicesAccessor(qq, Eq, gq, Yq, lq, Oq) {
        let mq = this._indicesAccessorMap.get(qq);
        mq || (mq = new Map, this._indicesAccessorMap.set(qq, mq));
        let xq = mq.get(Eq);
        xq || (xq = new Map, mq.set(Eq, xq));
        let Aq = xq.get(gq);
        Aq || (Aq = new Map, xq.set(gq, Aq));
        let cq = Aq.get(Yq);
        cq || (cq = new Map, Aq.set(Yq, cq)), cq.set(lq, Oq)
      }
      pushExportedNode(qq) {
        this._exportedNodes.has(qq) || this._exportedNodes.add(qq)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(qq) {
        return this._vertexBufferViewMap.get(qq)
      }
      setVertexBufferView(qq, Eq) {
        this._vertexBufferViewMap.set(qq, Eq)
      }
      setRemappedBufferView(qq, Eq, gq) {
        this._remappedBufferView.set(qq, new Map), this._remappedBufferView.get(qq).set(Eq, gq)
      }
      getRemappedBufferView(qq, Eq) {
        return this._remappedBufferView.get(qq)?.get(Eq)
      }
      getVertexAccessor(qq, Eq, gq) {
        return this._vertexAccessorMap.get(qq)?.get(Eq)?.get(gq)
      }
      setVertexAccessor(qq, Eq, gq, Yq) {
        let lq = this._vertexAccessorMap.get(qq);
        lq || (lq = new Map, this._vertexAccessorMap.set(qq, lq));
        let Oq = lq.get(Eq);
        Oq || (Oq = new Map, lq.set(Eq, Oq)), Oq.set(gq, Yq)
      }
      hasVertexColorAlpha(qq) {
        return this._vertexMapColorAlpha.get(qq) || !1
      }
      setHasVertexColorAlpha(qq, Eq) {
        return this._vertexMapColorAlpha.set(qq, Eq)
      }
      getMesh(qq) {
        return this._meshMap.get(qq)
      }
      setMesh(qq, Eq) {
        this._meshMap.set(qq, Eq)
      }
      bindMorphDataToMesh(qq, Eq) {
        const gq = this._meshMorphTargetMap.get(qq) || [];
        this._meshMorphTargetMap.set(qq, gq), -1 === gq.indexOf(Eq) && gq.push(Eq)
      }
      getMorphTargetsFromMesh(qq) {
        return this._meshMorphTargetMap.get(qq)
      }
    }
    class TY {
      _ApplyExtension(qq, Eq, gq, Yq) {
        if (gq >= Eq.length) return Promise.resolve(qq);
        const lq = Yq(Eq[gq], qq);
        return lq ? lq.then((async qq => qq ? await this._ApplyExtension(qq, Eq, gq + 1, Yq) : null)) : this._ApplyExtension(qq, Eq, gq + 1, Yq)
      }
      _ApplyExtensions(qq, Eq) {
        const gq = [];
        for (const Yq of TY._ExtensionNames) gq.push(this._extensions[Yq]);
        return this._ApplyExtension(qq, gq, 0, Eq)
      }
      _extensionsPostExportNodeAsync(qq, Eq, gq, Yq, lq) {
        return this._ApplyExtensions(Eq, ((Eq, Oq) => Eq.postExportNodeAsync && Eq.postExportNodeAsync(qq, Oq, gq, Yq, lq, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(qq, Eq, gq) {
        return this._ApplyExtensions(Eq, ((Eq, Yq) => Eq.postExportMaterialAsync && Eq.postExportMaterialAsync(qq, Yq, gq)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        return await Promise.all(TY._ExtensionNames.map((async lq => {
          const Oq = this._extensions[lq];
          if (Oq.postExportMaterialAdditionalTexturesAsync) {
            const lq = await Oq.postExportMaterialAdditionalTexturesAsync(qq, Eq, gq);
            Yq.push(...lq)
          }
        }))), Yq
      }
      _extensionsPostExportTextures(qq, Eq, gq) {
        for (const Yq of TY._ExtensionNames) {
          const lq = this._extensions[Yq];
          lq.postExportTexture && lq.postExportTexture(qq, Eq, gq)
        }
      }
      _extensionsPostExportMeshPrimitive(qq) {
        for (const Eq of TY._ExtensionNames) {
          const gq = this._extensions[Eq];
          gq.postExportMeshPrimitive && gq.postExportMeshPrimitive(qq, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const qq of TY._ExtensionNames) {
          const Eq = this._extensions[qq];
          Eq.preGenerateBinaryAsync && await Eq.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(qq) {
        for (const Eq of TY._ExtensionNames) {
          const gq = this._extensions[Eq];
          gq.enabled && qq(gq)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((qq => {
          var Eq, gq, Yq;
          qq.wasUsed && ((Eq = this._glTF).extensionsUsed || (Eq.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(qq.name) && this._glTF.extensionsUsed.push(qq.name), qq.required && ((gq = this._glTF).extensionsRequired || (gq.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(qq.name) && this._glTF.extensionsRequired.push(qq.name)), (Yq = this._glTF).extensions || (Yq.extensions = {}), qq.onExporting && qq.onExporting())
        }))
      }
      _loadExtensions() {
        for (const qq of TY._ExtensionNames) {
          const Eq = TY._ExtensionFactories[qq](this);
          this._extensions[qq] = Eq
        }
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vq.b.LastCreatedScene,
          Eq = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${aq.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new ig(this), this._extensions = {}, this._bufferManager = new gY, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !qq) throw new Error("No scene available to export");
        this._babylonScene = qq, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: qq => qq?.QJ?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Eq
        }, this._loadExtensions()
      }
      dispose() {
        for (const qq in this._extensions) {
          this._extensions[qq].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        TY.UnregisterExtension(qq) && lq.Tools.Warn(`Extension with the name ${qq} already exists`), TY._ExtensionFactories[qq] = Eq;
        const Yq = gq ?? 0;
        TY._ExtensionOrders[qq] = Yq;
        let Oq = TY._ExtensionNames.length;
        for (let lq = 0; lq < TY._ExtensionNames.length; lq++) {
          const qq = TY._ExtensionNames[lq];
          if (Yq < TY._ExtensionOrders[qq]) {
            Oq = lq;
            break
          }
        }
        TY._ExtensionNames.splice(Oq, 0, qq)
      }
      static UnregisterExtension(qq) {
        if (!TY._ExtensionFactories[qq]) return !1;
        delete TY._ExtensionFactories[qq], delete TY._ExtensionOrders[qq];
        const Eq = TY._ExtensionNames.indexOf(qq);
        return -1 !== Eq && TY._ExtensionNames.splice(Eq, 1), !0
      }
      _generateJSON(qq, Eq, gq) {
        const Yq = {
          byteLength: qq
        };
        return Yq.byteLength && (this._glTF.buffers = [Yq]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.PV = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Yq.uri = Eq + ".bin"), gq ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(qq) {
        const Eq = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gq = this._generateJSON(Eq.byteLength, qq, !0),
          Yq = new Blob([Eq], {
            type: "application/octet-stream"
          }),
          lq = qq + ".gltf",
          Oq = qq + ".bin",
          mq = new cq;
        if (mq.files[lq] = gq, mq.files[Oq] = Yq, this._imageData)
          for (const xq in this._imageData) mq.files[xq] = this._imageData[xq];
        return mq
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(qq) {
        const Eq = qq % 4;
        return 0 === Eq ? Eq : 4 - Eq
      }
      async generateGLBAsync(qq) {
        this._shouldUseGlb = !0;
        const Eq = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gq = this._generateJSON(Eq.byteLength),
          Yq = qq + ".glb";
        let lq, Oq = gq.length;
        if ("undefined" !== typeof TextEncoder) {
          lq = (new TextEncoder).encode(gq), Oq = lq.length
        }
        const mq = this._getPadding(Oq),
          xq = this._getPadding(Eq.byteLength),
          Aq = 28 + Oq + mq + Eq.byteLength + xq,
          uq = new qY(Aq);
        if (uq.writeUInt32(1179937895), uq.writeUInt32(2), uq.writeUInt32(Aq), uq.writeUInt32(Oq + mq), uq.writeUInt32(1313821514), lq) uq.writeTypedArray(lq);
        else {
          const qq = "_".charCodeAt(0);
          for (let Eq = 0; Eq < Oq; ++Eq) {
            const Yq = gq.charCodeAt(Eq);
            Yq != gq.codePointAt(Eq) ? uq.writeUInt8(qq) : uq.writeUInt8(Yq)
          }
        }
        for (let cq = 0; cq < mq; ++cq) uq.writeUInt8(32);
        uq.writeUInt32(Eq.byteLength + xq), uq.writeUInt32(5130562), uq.writeTypedArray(Eq);
        for (let cq = 0; cq < xq; ++cq) uq.writeUInt8(0);
        const Bq = new cq;
        return Bq.files[Yq] = new Blob([uq.getOutputData()], {
          type: "application/octet-stream"
        }), Bq
      }
      _setNodeTransformation(qq, Eq, gq) {
        if (Eq.getPivotPoint().equalsWithEpsilon(Sg, Mg.c) || lq.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Eq.position.equalsWithEpsilon(Sg, Mg.c)) {
          const lq = Yq.TmpVectors.Na[0].WG(Eq.position);
          gq && Fg(lq), qq.translation = lq.bYq()
        }
        Eq.rc.equalsWithEpsilon(Gg, Mg.c) || (qq.scale = Eq.rc.bYq());
        const Oq = Eq.rotationQuaternion?.clone() || Yq.Quaternion.FromEulerAngles(Eq.rotation.x, Eq.rotation.y, Eq.rotation.z);
        Oq.equalsWithEpsilon(pg, Mg.c) || (gq && sg(Oq), qq.rotation = Oq.normalize().bYq())
      }
      _setCameraTransformation(qq, Eq, gq) {
        const lq = Yq.TmpVectors.Na[0],
          Oq = Yq.TmpVectors.Quaternion[0],
          mq = Eq.getWorldMatrix();
        if (Eq.parent) {
          const qq = Eq.parent.getWorldMatrix().invertToRef(Yq.TmpVectors.Matrix[0]);
          mq.multiplyToRef(qq, Yq.TmpVectors.Matrix[1]).decompose(void 0, Oq, lq)
        } else mq.decompose(void 0, Oq, lq);
        lq.equalsWithEpsilon(Sg, Mg.c) || (gq && Fg(lq), qq.translation = lq.bYq()), gq && sg(Oq), this._babylonScene.useRightHandedSystem || Xg(Oq), Oq.equalsWithEpsilon(pg, Mg.c) || (qq.rotation = Oq.bYq())
      }
      _listAvailableCameras() {
        for (const qq of this._babylonScene.cameras) {
          const Eq = {
            type: qq.mode === YY.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (qq.name && (Eq.name = qq.name), "perspective" === Eq.type) Eq.perspective = {
            aspectRatio: qq.Ba().getAspectRatio(qq),
            yfov: qq.fovMode === YY.e.FOVMODE_VERTICAL_FIXED ? qq.fov : qq.fov * qq.Ba().getAspectRatio(qq),
            znear: qq.minZ,
            zfar: qq.maxZ
          };
          else if ("orthographic" === Eq.type) {
            const gq = qq.orthoLeft && qq.orthoRight ? .5 * (qq.orthoRight - qq.orthoLeft) : .5 * qq.Ba().getRenderWidth(),
              Yq = qq.orthoBottom && qq.orthoTop ? .5 * (qq.orthoTop - qq.orthoBottom) : .5 * qq.Ba().getRenderHeight();
            Eq.orthographic = {
              xmag: gq,
              ymag: Yq,
              znear: qq.minZ,
              zfar: qq.maxZ
            }
          }
          this._camerasMap.set(qq, Eq)
        }
      }
      _exportAndAssignCameras() {
        const qq = Array.from(this._camerasMap.values());
        for (const Eq of qq) {
          const qq = this._nodesCameraMap.get(Eq);
          if (void 0 !== qq) {
            this._cameras.push(Eq);
            for (const Eq of qq) Eq.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const qq of this._babylonScene.skeletons) {
          if (qq.bones.length <= 0) continue;
          const Eq = {
            joints: []
          };
          this._skinMap.set(qq, Eq)
        }
      }
      _exportAndAssignSkeletons(qq) {
        for (const gq of this._babylonScene.skeletons) {
          if (gq.bones.length <= 0) continue;
          const Oq = this._skinMap.get(gq);
          if (void 0 == Oq) continue;
          const mq = {};
          let xq = -1;
          for (let qq = 0; qq < gq.bones.length; ++qq) {
            const Eq = gq.bones[qq],
              Yq = Eq.getIndex() ?? qq; - 1 !== Yq && (mq[Yq] = Eq, Yq > xq && (xq = Yq))
          }
          const Aq = [];
          for (let gq = 0; gq <= xq; ++gq) {
            const xq = mq[gq],
              cq = xq.getTransformNode(),
              uq = cq ? this._nodeMap.get(cq) : void 0;
            if (void 0 === uq) {
              lq.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Oq.joints.push(uq);
            const Bq = xq.getAbsoluteInverseBindMatrix().clone();
            qq.has(cq) && (Eq = Bq, Tg.invertToRef(Yq.TmpVectors.Matrix[0]).multiplyToRef(Eq, Eq).multiplyToRef(Tg, Eq)), Aq.push(Bq)
          }
          const cq = this._nodesSkinMap.get(Oq);
          if (Oq.joints.length > 0 && void 0 !== cq) {
            const qq = new Float32Array(16 * Aq.length);
            Aq.forEach(((Eq, gq) => {
              qq.set(Eq.m, 16 * gq)
            }));
            const Eq = this._bufferManager.createBufferView(qq);
            this._accessors.push(this._bufferManager.createAccessor(Eq, "MAT4", 5126, Aq.length)), Oq.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Oq);
            const gq = this._skins.length - 1;
            for (const Yq of cq) Yq.skin = gq
          }
        }
        var Eq
      }
      async _exportSceneAsync() {
        const qq = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Eq = this._options.metadataSelector(this._babylonScene.metadata);
          Eq && (qq.extras = Eq)
        }
        const Eq = new Array,
          gq = new Array,
          Yq = new Array,
          lq = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Oq;
        if (lq && !this._options.includeCoordinateSystemConversionNodes)
          for (const cq of this._babylonScene.animationGroups)
            for (const qq of cq.targetedAnimations) {
              const Eq = qq.target;
              Eq instanceof Bq.e && !Eq.parent && (Oq ?? (Oq = new Set)).add(Eq)
            }
        for (const cq of this._babylonScene.rootNodes) {
          const qq = cq.animations,
            mq = !!qq && qq.length > 0 || Oq?.has(cq);
          lq && !this._options.includeCoordinateSystemConversionNodes && zg(cq, this._babylonScene.useRightHandedSystem) && !mq ? Yq.push(...cq.getChildren()) : this._babylonScene.useRightHandedSystem ? Eq.push(cq) : gq.push(cq)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const mq = new MY(!0, !1);
        qq.nodes.push(...await this._exportNodesAsync(gq, mq));
        const xq = new MY(!1, !1);
        qq.nodes.push(...await this._exportNodesAsync(Eq, xq));
        const Aq = new MY(!1, !0);
        qq.nodes.push(...await this._exportNodesAsync(Yq, Aq)), qq.nodes.length && this._scenes.push(qq), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(mq.getNodesSet()), this._babylonScene.animationGroups.length && BY._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, mq.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(qq) {
        return this._nodeMap.get(qq)
      }
      _getAnimationIndex(qq) {
        return this._animationGroupMap.get(qq)
      }
      _getCameraIndex(qq) {
        const Eq = this._camerasMap.get(qq);
        if (!Eq) return;
        const gq = this._cameras.indexOf(Eq);
        return gq >= 0 ? gq : void 0
      }
      _getMaterialIndex(qq) {
        return this._materialMap.get(qq)
      }
      _getRootIndex(qq, Eq) {
        switch (qq) {
          case "nodes":
            return this._getNodeIndex(Eq);
          case "animations":
            return this._getAnimationIndex(Eq);
          case "cameras":
            return this._getCameraIndex(Eq);
          case "materials":
            return this._getMaterialIndex(Eq);
          case "meshes": {
            const qq = this._getNodeIndex(Eq);
            return void 0 === qq ? void 0 : this._nodes[qq]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Eq)?.index;
          case "images": {
            const qq = this._materialExporter.getTextureInfo(Eq)?.index;
            if (void 0 === qq) return;
            const gq = this._textures[qq];
            for (const Eq of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const qq = gq?.extensions?.[Eq]?.source;
              if ("number" === typeof qq) return qq
            }
            return gq?.source
          }
          case "samplers": {
            const qq = this._materialExporter.getTextureInfo(Eq)?.index;
            return void 0 === qq ? void 0 : this._textures[qq]?.sampler
          }
          case "skins": {
            const qq = this._skinMap.get(Eq),
              gq = qq ? this._skins.indexOf(qq) : -1;
            return gq >= 0 ? gq : void 0
          }
          case "scenes":
            return Eq === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(qq, Eq, gq) {
        const Yq = this._nodes[qq];
        if (!Yq) throw new Error(`Cannot write ${Eq}: glTF node ${qq} does not exist.`);
        Yq.extensions || (Yq.extensions = {}), Yq.extensions[Eq] = gq
      }
      _shouldExportNode(qq) {
        let Eq = this._shouldExportNodeMap.get(qq);
        return void 0 === Eq && (Eq = this._options.shouldExportNode(qq), this._shouldExportNodeMap.set(qq, Eq)), Eq
      }
      async _exportNodesAsync(qq, Eq) {
        const gq = new Array;
        this._exportBuffers(qq, Eq);
        for (const Yq of qq) await this._exportNodeAsync(Yq, gq, Eq);
        return gq
      }
      _collectBuffers(qq, Eq, gq, Yq, lq) {
        if (this._shouldExportNode(qq) && qq instanceof Wq.d && qq.geometry) {
          const Oq = qq.geometry.getVertexBuffers();
          if (Oq)
            for (const Yq in Oq) {
              if (!Rg(Yq)) continue;
              const mq = Oq[Yq];
              lq.setHasVertexColorAlpha(mq, qq.hasVertexAlpha);
              const xq = mq._buffer,
                Aq = Eq.get(xq) || [];
              Eq.set(xq, Aq), -1 === Aq.indexOf(mq) && Aq.push(mq);
              const cq = gq.get(mq) || [];
              gq.set(mq, cq), -1 === cq.indexOf(qq) && cq.push(qq)
            }
          const mq = qq.morphTargetManager;
          if (mq)
            for (let Eq = 0; Eq < mq.numTargets; Eq++) {
              const gq = mq.getTarget(Eq),
                lq = Yq.get(gq) || [];
              Yq.set(gq, lq), -1 === lq.indexOf(qq) && lq.push(qq)
            }
        }
        for (const Oq of qq.getChildren()) this._collectBuffers(Oq, Eq, gq, Yq, lq)
      }
      _exportBuffers(qq, Eq) {
        const gq = new Map,
          Yq = new Map,
          lq = new Map;
        for (const xq of qq) this._collectBuffers(xq, gq, Yq, lq, Eq);
        const Oq = Array.from(gq.keys());
        for (const xq of Oq) {
          const qq = xq.getData();
          if (!qq) throw new Error("Buffer data is not available");
          const lq = gq.get(xq);
          if (!lq) continue;
          const Oq = lq[0].byteStride;
          if (lq.some((qq => qq.byteStride !== Oq))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const mq = Cg(qq).slice();
          for (const Eq of lq) {
            const qq = Yq.get(Eq),
              {
                byteOffset: gq,
                byteStride: lq,
                componentCount: Oq,
                type: xq,
                count: Aq,
                normalized: cq,
                kind: Bq
              } = Jg(Eq, qq);
            switch (Bq) {
              case uq.f.NormalKind:
              case uq.f.TangentKind:
                (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
                  const Eq = Math.sqrt(qq[0] * qq[0] + qq[1] * qq[1] + qq[2] * qq[2]);
                  if (Eq > 0) {
                    const gq = 1 / Eq;
                    qq[0] *= gq, qq[1] *= gq, qq[2] *= gq
                  }
                }));
                break;
              case uq.f.ColorKind: {
                const Eq = qq.filter((qq => qq.material instanceof OY.StandardMaterial || null == qq.material)).length;
                if (0 == Eq) break;
                if (Eq != qq.length) {
                  nq.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                xq == uq.f.UNSIGNED_BYTE && nq.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Yq = new dq.Color3,
                  Bq = new dq.e,
                  Wq = this._babylonScene.Ba().useExactSrgbConversions;
                (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
                  3 === qq.length ? (Yq.ogq(qq, 0), Yq.toLinearSpaceToRef(Yq, Wq), Yq.toArray(qq, 0)) : (Bq.ogq(qq, 0), Bq.toLinearSpaceToRef(Bq, Wq), Bq.toArray(qq, 0))
                }))
              }
            }
          }
          if (Eq.convertToRightHanded) {
            for (const qq of lq) {
              const Eq = Yq.get(qq),
                {
                  byteOffset: gq,
                  byteStride: lq,
                  componentCount: Oq,
                  type: xq,
                  count: Aq,
                  normalized: cq,
                  kind: Bq
                } = Jg(qq, Eq);
              switch (Bq) {
                case uq.f.PositionKind:
                case uq.f.NormalKind:
                case uq.f.TangentKind:
                  (0, Zg.h)(mq, gq, lq, Oq, xq, Aq, cq, (qq => {
                    qq[0] = -qq[0]
                  }))
              }
            }
            Eq.convertedToRightHandedBuffers.set(xq, mq)
          }
          const Aq = this._bufferManager.createBufferView(mq, Oq);
          Eq.setVertexBufferView(xq, Aq);
          const cq = new Map;
          for (const Eq of lq) {
            const qq = Yq.get(Eq),
              {
                kind: gq,
                totalVertices: lq
              } = Jg(Eq, qq);
            switch (gq) {
              case uq.f.MatricesIndicesKind:
              case uq.f.MatricesIndicesExtraKind:
                if (Eq.type == uq.f.FLOAT) {
                  const qq = Eq.getFloatData(lq);
                  null !== qq && cq.set(Eq, qq)
                }
            }
          }
          0 !== cq.size && nq.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Bq = Array.from(cq.keys());
          for (const gq of Bq) {
            const qq = cq.get(gq);
            if (!qq) continue;
            const Yq = qq.some((qq => qq >= 256)),
              lq = new(Yq ? Uint16Array : Uint8Array)(qq.length);
            for (let Eq = 0; Eq < qq.length; Eq++) lq[Eq] = qq[Eq];
            const Oq = this._bufferManager.createBufferView(lq, 4 * (Yq ? 2 : 1));
            Eq.setRemappedBufferView(xq, gq, Oq)
          }
        }
        const mq = Array.from(lq.keys());
        for (const xq of mq) {
          const qq = lq.get(xq);
          if (!qq) continue;
          const gq = WY(xq, qq[0], this._bufferManager, this._bufferViews, this._accessors, Eq.convertToRightHanded);
          for (const Yq of qq) Eq.bindMorphDataToMesh(Yq, gq)
        }
      }
      async _exportNodeAsync(qq, Eq, gq) {
        let Yq = this._nodeMap.get(qq);
        if (void 0 !== Yq) return void(Eq.includes(Yq) || Eq.push(Yq));
        const lq = await this._createNodeAsync(qq, gq);
        if (lq) {
          Yq = this._nodes.length, this._nodes.push(lq), this._nodeMap.set(qq, Yq), gq.pushExportedNode(qq), Eq.push(Yq);
          const Oq = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            mq = [];
          this._babylonScene.animationGroups.length || (BY._CreateMorphTargetAnimationFromMorphTargetAnimations(qq, Oq, mq, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gq.convertToRightHanded, this._options.shouldExportAnimation), qq.animations.length && BY._CreateNodeAnimationFromNodeAnimations(qq, Oq, mq, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gq.convertToRightHanded, this._options.shouldExportAnimation)), Oq.channels.length && Oq.samplers.length && this._animations.push(Oq), mq.forEach((qq => {
            qq.channels.length && qq.samplers.length && this._animations.push(qq)
          }))
        }
        const Oq = lq ? [] : Eq;
        for (const mq of qq.getChildren()) await this._exportNodeAsync(mq, Oq, gq);
        lq && Oq.length && (lq.children = Oq)
      }
      async _createNodeAsync(qq, Eq) {
        if (!this._shouldExportNode(qq)) return null;
        const gq = {};
        if (qq.name && (gq.name = qq.name), qq.metadata) {
          const Eq = this._options.metadataSelector(qq.metadata);
          Eq && (gq.extras = Eq)
        }
        if (qq instanceof Bq.e && (this._setNodeTransformation(gq, qq, Eq.convertToRightHanded), qq instanceof Wq.d)) {
          const Yq = qq instanceof Nq.c ? qq.Plq : qq;
          if (Yq.fn && Yq.fn.length > 0 && (gq.mesh = await this._exportMeshAsync(Yq, Eq)), qq.skeleton) {
            const Eq = this._skinMap.get(qq.skeleton);
            void 0 !== Eq && (void 0 === this._nodesSkinMap.get(Eq) && this._nodesSkinMap.set(Eq, []), this._nodesSkinMap.get(Eq)?.push(gq))
          }
        }
        if (qq instanceof fg.h) {
          const Yq = this._camerasMap.get(qq);
          if (Yq) {
            void 0 === this._nodesCameraMap.get(Yq) && this._nodesCameraMap.set(Yq, []), this._setCameraTransformation(gq, qq, Eq.convertToRightHanded);
            const lq = qq.parent;
            if (null !== lq && Kg(qq, lq)) {
              const qq = this._nodeMap.get(lq);
              if (void 0 !== qq) {
                const Eq = this._nodes[qq];
                return wg(gq, Eq), this._nodesCameraMap.get(Yq)?.push(Eq), null
              }
            }
            this._nodesCameraMap.get(Yq)?.push(gq)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", gq, qq, this._nodeMap, Eq.convertToRightHanded) ? gq : (nq.b.Warn(`Not exporting node ${qq.name}`), null)
      }
      _exportIndices(qq, Eq, gq, Yq, lq, mq, xq, Aq, cq) {
        let uq = null;
        cq.mode = function(qq) {
          switch (qq) {
            case Oq.e.TriangleFillMode:
              return 4;
            case Oq.e.TriangleStripDrawMode:
              return 5;
            case Oq.e.TriangleFanDrawMode:
              return 6;
            case Oq.e.PointListDrawMode:
            case Oq.e.PointFillMode:
              return 0;
            case Oq.e.LineLoopDrawMode:
              return 2;
            case Oq.e.LineListDrawMode:
              return 1;
            case Oq.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${qq}`)
        }(mq);
        const Bq = xq !== Oq.e.CounterClockWiseSideOrientation && function(qq) {
          switch (qq) {
            case Oq.e.TriangleFillMode:
            case Oq.e.TriangleStripDrawMode:
            case Oq.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(mq);
        if (Bq) {
          if (mq === Oq.e.TriangleStripDrawMode || mq === Oq.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const xq = Eq ? new Uint32Array(Yq) : new Uint16Array(Yq);
          if (qq)
            for (let Eq = 0; Eq + 2 < Yq; Eq += 3) xq[Eq] = qq[gq + Eq] + lq, xq[Eq + 1] = qq[gq + Eq + 2] + lq, xq[Eq + 2] = qq[gq + Eq + 1] + lq;
          else
            for (let qq = 0; qq + 2 < Yq; qq += 3) xq[qq] = qq, xq[qq + 1] = qq + 2, xq[qq + 2] = qq + 1;
          uq = xq
        } else if (qq && 0 !== lq) {
          const Oq = Eq ? new Uint32Array(Yq) : new Uint16Array(Yq);
          for (let Eq = 0; Eq < Yq; Eq++) Oq[Eq] = qq[gq + Eq] + lq;
          uq = Oq
        } else qq && (uq = function(qq, Eq, gq, Yq) {
          let lq = qq;
          return 0 === Eq && gq === qq.length || (lq = Array.isArray(qq) ? qq.slice(Eq, Eq + gq) : qq.subarray(Eq, Eq + gq)), lq instanceof Int32Array ? new Uint32Array(lq.buffer, lq.byteOffset, lq.length) : Array.isArray(lq) ? Yq ? new Uint32Array(lq) : new Uint16Array(lq) : lq
        }(qq, gq, Yq, Eq));
        if (uq) {
          let Oq = Aq.getIndicesAccessor(qq, gq, Yq, lq, Bq);
          if (void 0 === Oq) {
            const mq = this._bufferManager.createBufferView(uq),
              xq = Eq ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(mq, "SCALAR", xq, Yq, 0)), Oq = this._accessors.length - 1, Aq.setIndicesAccessor(qq, gq, Yq, lq, Bq, Oq)
          }
          cq.indices = Oq
        }
      }
      _exportVertexBuffer(qq, Eq, gq, Yq, lq, Oq) {
        const mq = qq.getKind();
        if (!Rg(mq)) return;
        if (mq.startsWith("uv") && !this._options.exportUnusedUVs && (!Eq || !this._materialNeedsUVsSet.has(Eq))) return;
        let xq = lq.getVertexAccessor(qq, gq, Yq);
        if (void 0 === xq) {
          const Eq = lq.convertedToRightHandedBuffers.get(qq._buffer) || qq._buffer.getData(),
            Oq = mq === uq.f.PositionKind ? function(qq, Eq, gq, Yq) {
              const {
                byteOffset: lq,
                byteStride: Oq,
                type: mq,
                normalized: xq
              } = Eq, Aq = Eq.getSize(), cq = new Array(Aq).fill(1 / 0), uq = new Array(Aq).fill(-1 / 0);
              return (0, Zg.h)(qq, lq + gq * Oq, Oq, Aq, mq, Yq * Aq, xq, (qq => {
                for (let Eq = 0; Eq < Aq; Eq++) cq[Eq] = Math.min(cq[Eq], qq[Eq]), uq[Eq] = Math.max(uq[Eq], qq[Eq])
              })), {
                min: cq,
                max: uq
              }
            }(Eq, qq, gq, Yq) : void 0,
            Aq = (mq === uq.f.MatricesIndicesKind || mq === uq.f.MatricesIndicesExtraKind) && qq.type === uq.f.FLOAT,
            cq = Aq ? uq.f.UNSIGNED_BYTE : qq.type,
            Bq = Aq ? void 0 : qq.normalized,
            Wq = Aq ? lq.getRemappedBufferView(qq._buffer, qq) : lq.getVertexBufferView(qq._buffer),
            Nq = qq.byteOffset + gq * qq.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Wq, function(qq, Eq) {
            if (qq == uq.f.ColorKind) return Eq ? "VEC4" : "VEC3";
            switch (qq) {
              case uq.f.PositionKind:
              case uq.f.NormalKind:
                return "VEC3";
              case uq.f.TangentKind:
              case uq.f.MatricesIndicesKind:
              case uq.f.MatricesIndicesExtraKind:
              case uq.f.MatricesWeightsKind:
              case uq.f.MatricesWeightsExtraKind:
                return "VEC4";
              case uq.f.UVKind:
              case uq.f.UV2Kind:
              case uq.f.UV3Kind:
              case uq.f.UV4Kind:
              case uq.f.UV5Kind:
              case uq.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${qq}`)
          }(mq, lq.hasVertexColorAlpha(qq)), cq, Yq, Nq, Oq, Bq)), xq = this._accessors.length - 1, lq.setVertexAccessor(qq, gq, Yq, xq)
        }
        Oq.attributes[function(qq) {
          switch (qq) {
            case uq.f.PositionKind:
              return "POSITION";
            case uq.f.NormalKind:
              return "NORMAL";
            case uq.f.TangentKind:
              return "TANGENT";
            case uq.f.ColorKind:
              return "COLOR_0";
            case uq.f.UVKind:
              return "TEXCOORD_0";
            case uq.f.UV2Kind:
              return "TEXCOORD_1";
            case uq.f.UV3Kind:
              return "TEXCOORD_2";
            case uq.f.UV4Kind:
              return "TEXCOORD_3";
            case uq.f.UV5Kind:
              return "TEXCOORD_4";
            case uq.f.UV6Kind:
              return "TEXCOORD_5";
            case uq.f.MatricesIndicesKind:
              return "JOINTS_0";
            case uq.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case uq.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case uq.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${qq}`)
        }(mq)] = xq
      }
      async _exportMaterialAsync(qq, Eq, gq, Yq) {
        let lq = this._materialMap.get(qq);
        if (void 0 === lq) {
          const Yq = Eq && Object.keys(Eq).some((qq => qq.startsWith("uv")));
          if ((qq = qq instanceof lY.b ? qq.Bqq[gq.materialIndex] : qq) instanceof yE) lq = await this._materialExporter.exportPBRMaterialAsync(qq, Yq);
          else if (qq instanceof OY.StandardMaterial) lq = await this._materialExporter.exportStandardMaterialAsync(qq, Yq);
          else {
            if (!(qq instanceof eE)) return void nq.b.Warn(`Unsupported material '${qq.name}' with type ${qq.getClassName()}`);
            lq = await this._materialExporter.exportOpenPBRMaterialAsync(qq, Yq)
          }
          this._materialMap.set(qq, lq)
        }
        Yq.material = lq
      }
      async _exportMeshAsync(qq, Eq) {
        let gq = Eq.getMesh(qq);
        if (void 0 !== gq) return gq;
        const Yq = {
          primitives: []
        };
        gq = this._meshes.length, this._meshes.push(Yq), Eq.setMesh(qq, gq);
        const lq = qq.isUnIndexed ? null : qq.iYq(),
          mq = qq.geometry?.getVertexBuffers(),
          xq = Eq.getMorphTargetsFromMesh(qq),
          Aq = qq instanceof NY.b,
          cq = qq instanceof fY,
          uq = qq.fn;
        if (mq && uq && uq.length > 0)
          for (const Bq of uq) {
            const gq = {
                attributes: {}
              },
              uq = Bq.da() || this._babylonScene.defaultMaterial;
            if (cq) {
              const Eq = {
                  name: uq.name
                },
                Yq = qq,
                lq = dq.Color3.White(),
                Oq = Yq.material?.alpha ?? 1,
                mq = Yq.greasedLineMaterial?.color ?? lq;
              (!mq.equalsWithEpsilon(lq, Mg.c) || Oq < 1) && (Eq.pbrMetallicRoughness = {
                baseColorFactor: [...mq.bYq(), Oq]
              }), this._materials.push(Eq), gq.material = this._materials.length - 1
            } else if (Aq) {
              const Eq = {
                  name: uq.name
                },
                Yq = qq;
              (!Yq.color.equalsWithEpsilon(dq.Color3.White(), Mg.c) || Yq.alpha < 1) && (Eq.pbrMetallicRoughness = {
                baseColorFactor: [...Yq.color.bYq(), Yq.alpha]
              }), this._materials.push(Eq), gq.material = this._materials.length - 1
            } else await this._exportMaterialAsync(uq, mq, Bq, gq);
            const Wq = Aq || cq ? Oq.e.LineListDrawMode : qq.overrideRenderingFillMode ?? uq.fillMode;
            let Nq = uq._getEffectiveOrientation(qq);
            Eq.wasAddedByNoopNode && !qq.ZJ().useRightHandedSystem && (Nq = Nq === Oq.e.ClockWiseSideOrientation ? Oq.e.CounterClockWiseSideOrientation : Oq.e.ClockWiseSideOrientation), this._exportIndices(lq, lq ? (0, Zg.c)(lq, Bq.indexCount, Bq.indexStart, Bq.verticesStart) : Bq.verticesCount > 65535, lq ? Bq.indexStart : Bq.verticesStart, lq ? Bq.indexCount : Bq.verticesCount, -Bq.verticesStart, Wq, Nq, Eq, gq);
            for (const qq of Object.values(mq)) this._exportVertexBuffer(qq, uq, Bq.verticesStart, Bq.verticesCount, Eq, gq);
            if (xq) {
              gq.targets = [];
              for (const qq of xq) gq.targets.push(qq.attributes)
            }
            Yq.primitives.push(gq), this._extensionsPostExportMeshPrimitive(gq)
          }
        if (xq) {
          Yq.weights = [], Yq.extras || (Yq.extras = {}), Yq.extras.targetNames = [];
          for (const qq of xq) Yq.weights.push(qq.influence), Yq.extras.targetNames.push(qq.name)
        }
        return gq
      }
    }
    TY._ExtensionNames = new Array, TY._ExtensionFactories = {}, TY._ExtensionOrders = {};
    class zY {
      static async GLTFAsync(qq, Eq, gq) {
        gq && gq.exportWithoutWaitingForScene || await qq.whenReadyAsync();
        const Yq = new TY(qq, gq),
          lq = await Yq.generateGLTFAsync(Eq.replace(/\.[^/.]+$/, ""));
        return Yq.dispose(), lq
      }
      static async GLBAsync(qq, Eq, gq) {
        gq && gq.exportWithoutWaitingForScene || await qq.whenReadyAsync();
        const Yq = new TY(qq, gq),
          lq = await Yq.generateGLBAsync(Eq.replace(/\.[^/.]+$/, ""));
        return Yq.dispose(), lq
      }
    }
    const SY = "EXT_mesh_gpu_instancing";

    function pY(qq, Eq) {
      const gq = new Float32Array(3 * Eq);
      for (let Yq = 0; Yq < Eq; Yq++) gq[3 * Yq + 0] = qq[4 * Yq + 0], gq[3 * Yq + 1] = qq[4 * Yq + 1], gq[3 * Yq + 2] = qq[4 * Yq + 2];
      return gq
    }
    class GY {
      constructor(qq) {
        this.name = SY, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(qq, Eq, gq, Yq, lq, Oq) {
        return await new Promise((qq => {
          if (Eq && gq instanceof yY.e && gq.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const qq = Gq.q.Zero(),
              Yq = Gq.h.Identity(),
              mq = Gq.q.One(),
              xq = gq.thinInstanceGetWorldMatrices(),
              Aq = Gq.o.Na[2],
              cq = Gq.o.Quaternion[1],
              uq = Gq.o.Na[3];
            let Bq = !1,
              Wq = !1,
              Nq = !1;
            const aq = new Float32Array(3 * gq.o5),
              Vq = new Float32Array(4 * gq.o5),
              dq = new Float32Array(3 * gq.o5);
            let jq = 0;
            for (const Eq of xq) Eq.decompose(uq, cq, Aq), lq && (Fg(Aq), sg(cq)), aq.set(Aq.bYq(), 3 * jq), Vq.set(cq.normalize().bYq(), 4 * jq), dq.set(uq.bYq(), 3 * jq), Bq = Bq || !Aq.equalsWithEpsilon(qq), Wq = Wq || !cq.equalsWithEpsilon(Yq), Nq = Nq || !uq.equalsWithEpsilon(mq), jq++;
            const Hq = {
              attributes: {}
            };
            Bq && (Hq.attributes.TRANSLATION = this._buildAccessor(aq, "VEC3", gq.o5, Oq)), Wq && (Hq.attributes.ROTATION = this._buildAccessor(Vq, "VEC4", gq.o5, Oq)), Nq && (Hq.attributes.SCALE = this._buildAccessor(dq, "VEC3", gq.o5, Oq));
            let oq = gq._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (oq) {
              const qq = gq.o5,
                Eq = "VEC3";
              gq.hasVertexAlpha && oq.length === 4 * qq ? (this._instanceColorWarned || (nq.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), oq = pY(oq, qq)) : oq.length === 4 * qq && (oq = pY(oq, qq)), oq.length === 3 * qq && (Hq.attributes._COLOR_0 = this._buildAccessor(oq, Eq, qq, Oq))
            }
            Eq.extensions = Eq.extensions || {}, Eq.extensions[SY] = Hq
          }
          qq(Eq)
        }))
      }
      _buildAccessor(qq, Eq, gq, Yq) {
        const lq = Yq.createBufferView(qq),
          Oq = Yq.createAccessor(lq, Eq, 5126, gq);
        return this._exporter._accessors.push(Oq), this._exporter._accessors.length - 1
      }
    }
    let LY = !1;

    function JY() {
      LY || (LY = !0, TY.RegisterExtension(SY, (qq => new GY(qq))))
    }
    gq(40236);
    JY();
    var kY = gq(41607);

    function RY(qq, Eq, gq, Yq) {
      const lq = qq;
      let Oq = null,
        mq = null,
        xq = null,
        Aq = null;
      const cq = {},
        uq = Eq.find((qq => "POSITION" === qq.dracoName));
      if (!uq) throw new Error("Draco: Missing position attribute for encoding.");
      if (!gq) {
        const qq = uq.data.length / uq.size;
        gq = new(qq > 65535 ? Uint32Array : Uint16Array)(qq);
        for (let Eq = 0; Eq < qq; Eq++) gq[Eq] = Eq
      }
      try {
        Oq = new lq.Encoder, mq = new lq.MeshBuilder, xq = new lq.Mesh, mq.AddFacesToMesh(xq, gq.length / 3, gq);
        const qq = new Map([
          [Float32Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddFloatAttribute(Eq, gq, Yq, lq, Oq)],
          [Uint32Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddUInt32Attribute(Eq, gq, Yq, lq, Oq)],
          [Uint16Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddUInt16Attribute(Eq, gq, Yq, lq, Oq)],
          [Uint8Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddUInt8Attribute(Eq, gq, Yq, lq, Oq)],
          [Int32Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddInt32Attribute(Eq, gq, Yq, lq, Oq)],
          [Int16Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddInt16Attribute(Eq, gq, Yq, lq, Oq)],
          [Int8Array, (qq, Eq, gq, Yq, lq, Oq) => qq.AddInt8Attribute(Eq, gq, Yq, lq, Oq)]
        ]);
        for (const gq of Eq) {
          gq.data instanceof Uint8ClampedArray && (gq.data = new Uint8Array(gq.data));
          const Eq = qq.get(gq.data.constructor),
            Aq = gq.data.length / gq.size;
          cq[gq.kind] = Eq(mq, xq, lq[gq.dracoName], Aq, gq.size, gq.data), Yq.quantizationBits && Yq.quantizationBits[gq.dracoName] && Oq.SetAttributeQuantization(lq[gq.dracoName], Yq.quantizationBits[gq.dracoName])
        }
        Yq.method && Oq.SetEncodingMethod(lq[Yq.method]), void 0 !== Yq.encodeSpeed && void 0 !== Yq.decodeSpeed && Oq.SetSpeedOptions(Yq.encodeSpeed, Yq.decodeSpeed), Aq = new lq.DracoInt8Array;
        const uq = Oq.EncodeMeshToDracoBuffer(xq, Aq);
        if (uq <= 0) throw new Error("Draco: Failed to encode.");
        const Bq = new Int8Array(uq);
        for (let Eq = 0; Eq < uq; Eq++) Bq[Eq] = Aq.GetValue(Eq);
        return {
          data: Bq,
          attributeIds: cq
        }
      } finally {
        xq && lq.destroy(xq), mq && lq.destroy(mq), Oq && lq.destroy(Oq), Aq && lq.destroy(Aq)
      }
    }

    function UY() {
      let qq;
      onmessage = Eq => {
        const gq = Eq.data;
        switch (gq.id) {
          case "init": {
            gq.url && importScripts(gq.url);
            const Eq = gq.wasmBinary ? {
              wasmBinary: gq.wasmBinary
            } : {};
            qq = DracoEncoderModule(Eq), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!qq) throw new Error("Draco: Encoder module is not available.");
            qq.then((qq => {
              const Eq = RY(qq, gq.attributes, gq.indices, gq.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Eq
              }, Eq ? [Eq.data.buffer] : void 0)
            })).catch((qq => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: qq.message
              })
            }))
        }
      }
    }
    class FY {
      constructor(qq) {
        if (qq.workerPool) return void(this._workerPoolPromise = Promise.resolve(qq.workerPool));
        const Eq = qq.wasmBinary,
          gq = qq.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Yq = gq && "function" === typeof Worker && "function" === typeof URL,
          lq = Yq || !qq.jsModule,
          Oq = qq.wasmUrl && qq.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: lq ? rE.f.GetBabylonScriptURL(qq.wasmUrl, !0) : "",
            wasmBinaryPromise: Eq ? Promise.resolve(Eq) : rE.f.LoadFileAsync(rE.f.GetBabylonScriptURL(qq.wasmBinaryUrl, !0))
          } : {
            url: lq ? rE.f.GetBabylonScriptURL(qq.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Yq ? this._workerPoolPromise = Oq.wasmBinaryPromise.then((qq => {
          const Eq = this._getWorkerContent(),
            Yq = URL.createObjectURL(new Blob([Eq], {
              type: "application/javascript"
            }));
          return new kY.b(gq, (() => async function(qq, Eq, gq) {
            return await new Promise(((Yq, lq) => {
              const Oq = Eq => {
                  qq.removeEventListener("error", Oq), qq.removeEventListener("message", mq), lq(Eq)
                },
                mq = Eq => {
                  "initDone" === Eq.data.id && (qq.removeEventListener("error", Oq), qq.removeEventListener("message", mq), Yq(qq))
                };
              if (qq.addEventListener("error", Oq), qq.addEventListener("message", mq), Eq) {
                const Yq = Eq.slice(0);
                qq.postMessage({
                  id: "init",
                  url: gq,
                  wasmBinary: Yq
                }, [Yq])
              } else qq.postMessage({
                id: "init",
                url: gq
              })
            }))
          }(new Worker(Yq), qq, Oq.url)))
        })) : this._modulePromise = Oq.wasmBinaryPromise.then((async Eq => {
          if (!this._isModuleAvailable() && !qq.jsModule) {
            if (!Oq.url) throw new Error("Draco codec module is not available");
            await rE.f.LoadBabylonScriptAsync(Oq.url)
          }
          return await this._createModuleAsync(Eq, qq.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((qq => {
          qq.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function sY() {
      const qq = qq => !!qq && "object" === typeof qq;
      for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
      return gq.reduce(((Eq, gq) => {
        const Yq = Object.keys(gq);
        for (const lq of Yq) {
          const Yq = Eq[lq],
            Oq = gq[lq];
          Array.isArray(Yq) && Array.isArray(Oq) ? Eq[lq] = Yq.concat(Oq) : qq(Yq) && qq(Oq) ? Eq[lq] = sY(Yq, Oq) : Eq[lq] = Oq
        }
        return Eq
      }), {})
    }

    function XY(qq) {
      return qq === Lq.g.PositionKind ? "POSITION" : qq === Lq.g.NormalKind ? "NORMAL" : qq === Lq.g.ColorKind ? "COLOR" : qq.startsWith(Lq.g.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const wY = {
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
    class KY extends FY {
      static get DefaultAvailable() {
        return !!((qq = KY.DefaultConfiguration).wasmUrl && (qq.wasmBinary || qq.wasmBinaryUrl) && "object" === typeof WebAssembly || qq.fallbackUrl);
        var qq
      }
      static get Default() {
        return KY._Default ?? (KY._Default = new KY), KY._Default
      }
      static ResetDefault(qq) {
        KY._Default && (qq || KY._Default.dispose(), KY._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(qq, Eq) {
        return {
          module: await (Eq || DracoEncoderModule)({
            wasmBinary: qq
          })
        }
      }
      _getWorkerContent() {
        return `${RY}(${UY})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KY.DefaultConfiguration)
      }
      async _encodeAsync(qq, Eq, gq) {
        const Yq = gq ? sY(wY, gq) : wY;
        if (this._workerPoolPromise) {
          const gq = await this._workerPoolPromise;
          return await new Promise(((lq, Oq) => {
            gq.push(((gq, mq) => {
              const xq = qq => {
                  gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), Oq(qq), mq()
                },
                Aq = qq => {
                  "encodeMeshSuccess" === qq.data.id ? (gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), lq(qq.data.encodedMeshData), mq()) : "encodeMeshError" === qq.data.id && (gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), Oq(new Error(qq.data.errorMessage)), mq())
                };
              gq.addEventListener("error", xq), gq.addEventListener("message", Aq);
              const cq = [];
              for (const Eq of qq) cq.push(Eq.data.buffer);
              Eq && cq.push(Eq.buffer), gq.postMessage({
                id: "encodeMesh",
                attributes: qq,
                indices: Eq,
                options: Yq
              }, cq)
            }))
          }))
        }
        if (this._modulePromise) {
          return RY((await this._modulePromise).module, qq, Eq, Yq)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(qq, Eq) {
        if (0 == qq.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        qq instanceof yY.e && qq.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Eq?.method && (nq.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Eq.method = "MESH_SEQUENTIAL_ENCODING");
        const gq = function(qq) {
            let Eq = qq.iYq(void 0, !0);
            return !Eq || Eq instanceof Uint32Array || Eq instanceof Uint16Array || (Eq = ((0, Zg.c)(Eq, Eq.length) ? Uint32Array : Uint16Array).from(Eq)), Eq
          }(qq),
          Yq = function(qq, Eq) {
            const gq = [];
            for (const Yq of qq.getVerticesDataKinds()) {
              if (Eq?.includes(Yq)) {
                if (Yq === Lq.g.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const lq = qq.getVertexBuffer(Yq),
                Oq = lq.getSize(),
                mq = (0, Zg.r)(lq.getData(), Oq, lq.type, lq.byteOffset, lq.byteStride, qq.getTotalVertices(), !0);
              gq.push({
                kind: Yq,
                dracoName: XY(Yq),
                size: Oq,
                data: mq
              })
            }
            return gq
          }(qq, Eq?.excludedAttributes);
        return await this._encodeAsync(Yq, gq, Eq)
      }
    }
    KY.DefaultConfiguration = {
      wasmUrl: `${rE.f._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${rE.f._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${rE.f._DefaultCdnUrl}/draco_encoder.js`
    }, KY._Default = null;
    const CY = "KHR_draco_mesh_compression";
    class IY {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(qq) {
        this.name = CY, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === qq.options.meshCompressionMethod && KY.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(qq, Eq, gq) {
        if (!this.enabled) return;
        if (4 !== qq.mode && 5 !== qq.mode) return void nq.b.Warn("Cannot compress primitive with mode " + qq.mode + ".");
        const Yq = [],
          lq = [];
        let Oq = null;
        if (void 0 !== qq.indices) {
          const mq = gq[qq.indices],
            xq = Eq.getBufferView(mq);
          Oq = Eq.getData(xq).slice(), Yq.push(xq), lq.push(mq)
        }
        const mq = [];
        for (const [uq, Bq] of Object.entries(qq.attributes)) {
          const qq = gq[Bq],
            Oq = Eq.getBufferView(qq),
            Aq = kg(qq.type),
            cq = (0, Zg.r)(Eq.getData(Oq), Aq, qq.componentType, qq.byteOffset || 0, Oq.byteStride || (0, Zg.q)(qq.componentType) * Aq, qq.count, !0);
          mq.push({
            kind: uq,
            dracoName: (xq = uq, "POSITION" === xq ? "POSITION" : "NORMAL" === xq ? "NORMAL" : xq.startsWith("COLOR") ? "COLOR" : xq.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: kg(qq.type),
            data: cq
          }), Yq.push(Oq), lq.push(qq)
        }
        var xq;
        const Aq = {
            method: qq.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          cq = KY.Default._encodeAsync(mq, Oq, Aq).then((gq => {
            const Oq = {
                bufferView: -1,
                attributes: gq.attributeIds
              },
              mq = Eq.createBufferView(gq.data);
            Eq.setBufferView(Oq, mq);
            for (const qq of Yq) this._bufferViewsUsed.add(qq);
            for (const qq of lq) this._accessorsUsed.add(qq);
            qq.extensions || (qq.extensions = {}), qq.extensions[CY] = Oq
          })).catch((qq => {
            nq.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + qq.message)
          }));
        this._encodePromises.push(cq), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(qq) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Eq => {
          qq.getPropertiesWithBufferView(Eq).every((qq => this._accessorsUsed.has(qq))) && qq.removeBufferView(Eq)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let eY = !1;

    function DY() {
      eY || (eY = !0, TY.RegisterExtension(CY, (qq => new IY(qq))))
    }
    DY();
    var ql = gq(41329);
    const El = "KHR_lights_punctual",
      gl = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Yl = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      ll = Gq.q.Backward();
    class Ol {
      constructor(qq) {
        this.name = El, this.enabled = !0, this.required = !1, this._exporter = qq
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[El] = this._lights
      }
      async postExportNodeAsync(qq, Eq, gq, Yq, lq) {
        return await new Promise((Oq => {
          if (!(gq instanceof uY.c)) return void Oq(Eq);
          const mq = gq.getTypeID() == uY.c.LIGHTTYPEID_POINTLIGHT ? "point" : gq.getTypeID() == uY.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : gq.getTypeID() == uY.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!mq || !(gq instanceof ql.e)) return nq.b.Warn(`${qq}: Light ${gq.name} is not supported in ${El}`), void Oq(Eq);
          if (gq.falloffType !== uY.c.FALLOFF_GLTF && nq.b.Warn(`${qq}: Light falloff for ${gq.name} does not match the ${El} specification!`), !gq.position.Cmq(0, 0, 0)) {
            const qq = Gq.o.Na[0].WG(gq.position);
            lq && Fg(qq), Eq.translation = qq.bYq()
          }
          if ("point" !== mq) {
            const qq = gq.direction.normalizeToRef(Gq.o.Na[0]);
            lq && Fg(qq);
            const Yq = Gq.h.FromUnitVectorsToRef(ll, qq, Gq.o.Quaternion[0]);
            Gq.h.IsIdentity(Yq) || (Eq.rotation = Yq.bYq())
          }
          const xq = {
            type: mq,
            name: gq.name,
            color: gq.diffuse.bYq(),
            intensity: gq.intensity,
            range: gq.range
          };
          if (Ig(xq, gl), "spot" === mq) {
            const qq = gq;
            xq.spot = {
              innerConeAngle: qq.innerAngle / 2,
              outerConeAngle: qq.angle / 2
            }, Ig(xq.spot, Yl)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(xq);
          const Aq = {
              light: this._lights.lights.length - 1
            },
            cq = gq.parent;
          if (cq && Kg(gq, cq)) {
            const qq = Yq.get(cq);
            if (qq) {
              const gq = this._exporter._nodes[qq];
              return wg(Eq, gq), gq.extensions || (gq.extensions = {}), gq.extensions[El] = Aq, void Oq(null)
            }
          }
          Eq.extensions || (Eq.extensions = {}), Eq.extensions[El] = Aq, Oq(Eq)
        }))
      }
    }
    let ml = !1;

    function xl() {
      ml || (ml = !0, TY.RegisterExtension(El, (qq => new Ol(qq))))
    }
    xl();
    const Al = "KHR_interactivity";
    class cl {
      constructor(qq) {
        this._exporter = qq, this.name = Al, this.enabled = !!qq.options.khrInteractivity, this.required = qq.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var qq, Eq, gq;
        const Yq = this._exporter.options.khrInteractivity;
        if (!Yq) return;
        const lq = Yq.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: qq => this._exporter._getNodeIndex(qq),
          getAnimationIndex: qq => this._exporter._getAnimationIndex(qq),
          getCameraIndex: qq => this._exporter._getCameraIndex(qq),
          getMaterialIndex: qq => this._exporter._getMaterialIndex(qq),
          getRootIndex: (qq, Eq) => this._exporter._getRootIndex(qq, Eq),
          setNodeExtension: (qq, Eq, gq) => this._exporter._setNodeExtension(qq, Eq, gq)
        });
        this._exporter._glTF.extensions[Al] = lq;
        for (const Oq of Yq.additionalExtensionsUsed)(qq = this._exporter._glTF).extensionsUsed || (qq.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Oq) && this._exporter._glTF.extensionsUsed.push(Oq);
        for (const Oq of Yq.additionalExtensionsRequired)(Eq = this._exporter._glTF).extensionsUsed || (Eq.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Oq) && this._exporter._glTF.extensionsUsed.push(Oq), (gq = this._exporter._glTF).extensionsRequired || (gq.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Oq) && this._exporter._glTF.extensionsRequired.push(Oq)
      }
    }
    let ul = !1;

    function Bl() {
      ul || (ul = !0, TY.RegisterExtension(Al, (qq => new cl(qq)), 200))
    }
    Bl();
    const Wl = "EXT_lights_area",
      Nl = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      al = {
        aspect: 1
      },
      Vl = Gq.q.Backward();
    class dl {
      constructor(qq) {
        this.name = Wl, this.enabled = !0, this.required = !1, this._exporter = qq
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Wl] = this._lights
      }
      async postExportNodeAsync(qq, Eq, gq, Yq, lq) {
        return await new Promise((Oq => {
          if (!(gq instanceof uY.c)) return void Oq(Eq);
          const mq = gq.getTypeID() == uY.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!mq) return nq.b.Warn(`${qq}: Light ${gq.name} is not supported in ${Wl}`), void Oq(Eq);
          const xq = gq;
          if (xq.falloffType !== uY.c.FALLOFF_GLTF && nq.b.Warn(`${qq}: Light falloff for ${gq.name} does not match the ${Wl} specification!`), !xq.position.Cmq(0, 0, 0)) {
            const qq = Gq.o.Na[0].WG(xq.position);
            lq && Fg(qq), Eq.translation = qq.bYq()
          }
          const Aq = Gq.q.Forward();
          lq && Fg(Aq);
          const cq = Gq.h.FromUnitVectorsToRef(Vl, Aq, Gq.o.Quaternion[0]);
          Gq.h.IsIdentity(cq) || (Eq.rotation = cq.bYq());
          const uq = {
            type: mq,
            name: xq.name,
            color: xq.diffuse.bYq(),
            intensity: xq.intensity,
            size: xq.height,
            rect: {
              aspect: xq.width / xq.height
            }
          };
          Ig(uq, Nl), uq.rect && Ig(uq.rect, al), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(uq);
          const Bq = {
              light: this._lights.lights.length - 1
            },
            Wq = gq.parent;
          if (Wq && Kg(xq, Wq)) {
            const qq = Yq.get(Wq);
            if (qq) {
              const gq = this._exporter._nodes[qq];
              return wg(Eq, gq), gq.extensions || (gq.extensions = {}), gq.extensions[Wl] = Bq, void Oq(null)
            }
          }
          Eq.extensions || (Eq.extensions = {}), Eq.extensions[Wl] = Bq, Oq(Eq)
        }))
      }
    }
    let jl = !1;

    function Hl() {
      jl || (jl = !0, TY.RegisterExtension(Wl, (qq => new dl(qq))))
    }
    Hl();
    const ol = "KHR_materials_anisotropy";
    class Pl {
      constructor(qq) {
        this.name = ol, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof yE) {
          if (gq.anisotropy.isEnabled && !gq.anisotropy.legacy) return gq.anisotropy.texture && Yq.push(gq.anisotropy.texture), Yq
        } else if (gq instanceof eE && gq.specularRoughnessAnisotropy > 0) {
          const qq = function(qq) {
            const Eq = qq.specularRoughnessAnisotropyTexture,
              gq = qq.geometryTangentTexture;
            return `${Eq&&Eq.getInternalTexture()?Eq.getInternalTexture().uniqueId:"NoStrength"}_${gq&&gq.getInternalTexture()?gq.getInternalTexture().uniqueId:"NoTangent"}`
          }(gq);
          if (this._anisoTexturesMap[qq]) Yq.push(this._anisoTexturesMap[qq]);
          else {
            const Eq = await async function(qq) {
              const Eq = qq.ZJ(),
                gq = qq.specularRoughnessAnisotropyTexture,
                Yq = qq.geometryTangentTexture;
              return gq || Yq ? await mg("AnisotropyTexture", cg(Yq ? xg(Yq, 0) : Ag(1), Yq ? xg(Yq, 1) : Ag(0), gq ? xg(gq, 0) : Ag(1)), Eq) : null
            }(gq);
            Eq && (Yq.push(Eq), this._anisoTexturesMap[qq] = Eq)
          }
          return Yq
        }
        return []
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          var Yq;
          if (gq instanceof yE) {
            if (!gq.anisotropy.isEnabled || gq.anisotropy.legacy) return void qq(Eq);
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const Yq = this._exporter._materialExporter.getTextureInfo(gq.anisotropy.texture),
              lq = {
                anisotropyStrength: gq.anisotropy.intensity,
                anisotropyRotation: gq.anisotropy.angle,
                anisotropyTexture: Yq ?? void 0
              };
            null !== lq.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[ol] = lq
          } else if (gq instanceof eE && gq.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            let lq = gq.specularRoughnessTexture;
            gq._useRoughnessFromMetallicTextureGreen && (lq = gq.baseMetalnessTexture);
            const Oq = this._anisoTexturesMap[gq.id];
            if (!lq && !Oq) {
              let Yq = gq.specularRoughness,
                lq = gq.specularRoughnessAnisotropy;
              if (!gq._useGltfStyleAnisotropy) {
                const qq = function(qq, Eq) {
                  const gq = qq * qq,
                    Yq = gq * Math.sqrt(2 / (1 + (1 - Eq) * (1 - Eq))),
                    lq = (1 - Eq) * Yq;
                  return {
                    newBaseRoughness: Math.sqrt(lq),
                    newAnisotropyStrength: Math.min(Math.sqrt((Yq - gq) / Math.max(1 - gq, 1e-4)), 1)
                  }
                }(gq.specularRoughness, gq.specularRoughnessAnisotropy);
                Yq = qq.newBaseRoughness, lq = qq.newAnisotropyStrength
              }
              Eq.pbrMetallicRoughness && (Eq.pbrMetallicRoughness.roughnessFactor = Yq);
              const Oq = {
                anisotropyStrength: lq,
                anisotropyRotation: gq.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Eq.extensions[ol] = Oq, qq(Eq)
            }
            const mq = Oq ? this._exporter._materialExporter.getTextureInfo(Oq) : null,
              xq = {
                anisotropyStrength: gq.specularRoughnessAnisotropy,
                anisotropyRotation: gq.geometryTangentAngle,
                anisotropyTexture: mq || void 0,
                extensions: {}
              };
            gq._useGltfStyleAnisotropy || (Eq.extensions.KHR_materials_openpbr = {}, (Yq = this._exporter._glTF).extensionsUsed || (Yq.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[ol] = xq
          }
          qq(Eq)
        }))
      }
    }
    let Ql = !1;

    function yl() {
      Ql || (Ql = !0, TY.RegisterExtension(ol, (qq => new Pl(qq))))
    }
    yl();
    const tl = "KHR_materials_clearcoat";

    function rl(qq, Eq) {
      const gq = new iq.d(Eq.name, Eq.ZJ());
      return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
    }
    class vl {
      constructor(qq) {
        this.name = tl, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = qq
      }
      dispose() {
        for (const qq of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[qq].dispose()
        }
        this._mergedTexturesMap = {};
        for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[qq].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof yE) {
          if (gq.clearCoat.isEnabled) return gq.clearCoat.texture && Yq.push(gq.clearCoat.texture), !gq.clearCoat.useRoughnessFromMainTexture && gq.clearCoat.textureRoughness && Yq.push(gq.clearCoat.textureRoughness), gq.clearCoat.bumpTexture && Yq.push(gq.clearCoat.bumpTexture), Yq
        } else if (gq instanceof eE && gq.coatWeight > 0) {
          let qq = !1;
          if (gq.coatWeightTexture ? gq.coatRoughnessTexture ? gq._useCoatRoughnessFromGreenChannel && gq.coatWeightTexture.getInternalTexture() === gq.coatRoughnessTexture.getInternalTexture() ? (Yq.push(gq.coatWeightTexture), Yq.push(gq.coatRoughnessTexture)) : qq = !0 : Yq.push(gq.coatWeightTexture) : gq.coatRoughnessTexture && (gq._useCoatRoughnessFromGreenChannel ? Yq.push(gq.coatRoughnessTexture) : qq = !0), qq) {
            const qq = function(qq) {
              const Eq = qq.coatWeightTexture,
                gq = Eq && Eq.getInternalTexture() ? Eq.getInternalTexture().uniqueId : "NoCoat",
                Yq = qq.coatRoughnessTexture;
              return `${gq}_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gq);
            if (!this._cachedInternalTexturesMap[qq]) {
              const Eq = await async function(qq) {
                const Eq = qq.ZJ(),
                  gq = qq.coatWeightTexture,
                  Yq = qq.coatRoughnessTexture;
                return gq || Yq ? (await mg("CoatTexture", cg(gq ? xg(gq, 0) : Ag(1), Yq ? xg(Yq, qq._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ag(1)), Eq)).getInternalTexture() : null
              }(gq);
              Eq && (this._cachedInternalTexturesMap[qq] = Eq)
            }
            this._cachedInternalTexturesMap[qq] && (gq.coatWeightTexture && (this._mergedTexturesMap[gq.coatWeightTexture.uniqueId] = rl(this._cachedInternalTexturesMap[qq], gq.coatWeightTexture), Yq.push(this._mergedTexturesMap[gq.coatWeightTexture.uniqueId])), gq.coatRoughnessTexture && (this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId] = rl(this._cachedInternalTexturesMap[qq], gq.coatRoughnessTexture), Yq.push(this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId])))
          }
          return gq.geometryCoatNormalTexture && Yq.push(gq.geometryCoatNormalTexture), Yq
        }
        return []
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof yE) {
            if (!gq.clearCoat.isEnabled) return void qq(Eq);
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const Yq = this._exporter._materialExporter.getTextureInfo(gq.clearCoat.texture);
            let lq;
            lq = gq.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gq.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gq.clearCoat.textureRoughness), gq.clearCoat.isTintEnabled && rE.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gq.name}`), gq.clearCoat.remapF0OnInterfaceChange && rE.f.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${gq.name}`);
            const Oq = this._exporter._materialExporter.getTextureInfo(gq.clearCoat.bumpTexture),
              mq = {
                clearcoatFactor: gq.clearCoat.intensity,
                clearcoatTexture: Yq ?? void 0,
                clearcoatRoughnessFactor: gq.clearCoat.roughness,
                clearcoatRoughnessTexture: lq ?? void 0,
                clearcoatNormalTexture: Oq ?? void 0
              };
            null === mq.clearcoatTexture && null === mq.clearcoatRoughnessTexture && null === mq.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[tl] = mq
          } else if (gq instanceof eE) {
            if (0 == gq.coatWeight) return void qq(Eq);
            let Yq, lq, Oq, mq;
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {}, gq.coatWeightTexture && (Yq = this._mergedTexturesMap[gq.coatWeightTexture.uniqueId], lq = this._exporter._materialExporter.getTextureInfo(Yq)), gq.coatRoughnessTexture && (Oq = this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId], mq = this._exporter._materialExporter.getTextureInfo(Oq)), gq.coatColorTexture && rE.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gq.name}`);
            const xq = this._exporter._materialExporter.getTextureInfo(gq.geometryCoatNormalTexture),
              Aq = {
                clearcoatFactor: gq.coatWeight,
                clearcoatTexture: lq ?? void 0,
                clearcoatRoughnessFactor: gq.coatRoughness,
                clearcoatRoughnessTexture: mq ?? void 0,
                clearcoatNormalTexture: xq ?? void 0
              };
            null === Aq.clearcoatTexture && null === Aq.clearcoatRoughnessTexture && null === Aq.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[tl] = Aq
          }
          qq(Eq)
        }))
      }
    }
    let hl = !1;

    function nl() {
      hl || (hl = !0, TY.RegisterExtension(tl, (qq => new vl(qq))))
    }
    nl();
    const bl = "KHR_materials_coat";

    function il(qq) {
      const Eq = qq.coatRoughnessAnisotropyTexture,
        gq = qq.geometryCoatTangentTexture;
      return `${Eq&&Eq.getInternalTexture()?Eq.getInternalTexture().uniqueId:"NoStrength"}_${gq&&gq.getInternalTexture()?gq.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Zl(qq, Eq) {
      const gq = new iq.d(Eq.name, Eq.ZJ());
      return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
    }
    class fl {
      constructor(qq) {
        this.name = bl, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = qq
      }
      dispose() {
        for (const qq of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[qq].dispose()
        }
        this._mergedTexturesMap = {};
        for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[qq].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof yE) {
          if (gq.clearCoat.isEnabled) return gq.clearCoat.texture && Yq.push(gq.clearCoat.texture), !gq.clearCoat.useRoughnessFromMainTexture && gq.clearCoat.textureRoughness && Yq.push(gq.clearCoat.textureRoughness), gq.clearCoat.bumpTexture && Yq.push(gq.clearCoat.bumpTexture), gq.clearCoat.tintTexture && Yq.push(gq.clearCoat.tintTexture), Yq
        } else if (gq instanceof eE && gq.coatWeight > 0) {
          let qq = !1;
          if (gq.coatWeightTexture ? gq.coatRoughnessTexture ? gq._useCoatRoughnessFromGreenChannel && gq.coatWeightTexture.getInternalTexture() === gq.coatRoughnessTexture.getInternalTexture() ? (Yq.push(gq.coatWeightTexture), Yq.push(gq.coatRoughnessTexture)) : qq = !0 : Yq.push(gq.coatWeightTexture) : gq.coatRoughnessTexture && (gq._useCoatRoughnessFromGreenChannel ? Yq.push(gq.coatRoughnessTexture) : qq = !0), qq) {
            const qq = function(qq) {
              const Eq = qq.coatWeightTexture,
                gq = Eq && Eq.getInternalTexture() ? Eq.getInternalTexture().uniqueId : "NoCoat",
                Yq = qq.coatRoughnessTexture;
              return `${gq}_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gq);
            if (!this._cachedInternalTexturesMap[qq]) {
              const Eq = await async function(qq) {
                const Eq = qq.ZJ(),
                  gq = qq.coatWeightTexture,
                  Yq = qq.coatRoughnessTexture;
                return gq || Yq ? (await mg("CoatTexture", cg(gq ? xg(gq, 0) : Ag(1), Yq ? xg(Yq, qq._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ag(1)), Eq)).getInternalTexture() : null
              }(gq);
              Eq && (this._cachedInternalTexturesMap[qq] = Eq)
            }
            this._cachedInternalTexturesMap[qq] && (gq.coatWeightTexture && (this._mergedTexturesMap[gq.coatWeightTexture.uniqueId] = Zl(this._cachedInternalTexturesMap[qq], gq.coatWeightTexture), Yq.push(this._mergedTexturesMap[gq.coatWeightTexture.uniqueId])), gq.coatRoughnessTexture && (this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId] = Zl(this._cachedInternalTexturesMap[qq], gq.coatRoughnessTexture), Yq.push(this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId])))
          }
          if (gq.geometryCoatNormalTexture && Yq.push(gq.geometryCoatNormalTexture), gq.coatColorTexture && Yq.push(gq.coatColorTexture), gq.coatRoughnessAnisotropy > 0) {
            const qq = il(gq);
            if (this._mergedTexturesMap[qq]) Yq.push(this._mergedTexturesMap[qq]);
            else {
              const Eq = await async function(qq) {
                const Eq = qq.ZJ(),
                  gq = qq.coatRoughnessAnisotropyTexture,
                  Yq = qq.geometryCoatTangentTexture;
                return gq || Yq ? await mg("AnisotropyTexture", cg(Yq ? xg(Yq, 0) : Ag(1), Yq ? xg(Yq, 1) : Ag(0), gq ? xg(gq, 0) : Ag(1)), Eq) : null
              }(gq);
              Eq && (Yq.push(Eq), this._mergedTexturesMap[qq] = Eq)
            }
            return Yq
          }
          return Yq
        }
        return []
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          var Yq;
          if (gq instanceof yE) {
            if (!gq.clearCoat.isEnabled) return void qq(Eq);
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const Yq = this._exporter._materialExporter.getTextureInfo(gq.clearCoat.texture);
            let lq, Oq;
            lq = gq.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gq.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gq.clearCoat.textureRoughness), gq.clearCoat.isTintEnabled && (Oq = this._exporter._materialExporter.getTextureInfo(gq.clearCoat.tintTexture));
            const mq = this._exporter._materialExporter.getTextureInfo(gq.clearCoat.bumpTexture),
              xq = gq.clearCoat.indexOfRefraction,
              Aq = {
                coatFactor: gq.clearCoat.intensity,
                coatTexture: Yq ?? void 0,
                coatRoughnessFactor: gq.clearCoat.roughness,
                coatRoughnessTexture: lq ?? void 0,
                coatNormalTexture: mq ?? void 0,
                coatColorFactor: gq.clearCoat.tintColor.bYq(),
                coatColorTexture: Oq ?? void 0,
                coatIor: 1.5 !== xq ? xq : void 0
              };
            null === Aq.coatTexture && null === Aq.coatRoughnessTexture && null === Aq.coatRoughnessTexture && null === Aq.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[bl] = Aq
          } else if (gq instanceof eE) {
            if (0 == gq.coatWeight) return void qq(Eq);
            let lq, Oq, mq, xq;
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {}, gq.coatWeightTexture && (lq = this._mergedTexturesMap[gq.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[gq.coatWeightTexture.uniqueId] : gq.coatWeightTexture, Oq = this._exporter._materialExporter.getTextureInfo(lq)), gq.coatRoughnessTexture && (mq = this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gq.coatRoughnessTexture.uniqueId] : gq.coatRoughnessTexture, xq = this._exporter._materialExporter.getTextureInfo(mq));
            const Aq = this._exporter._materialExporter.getTextureInfo(gq.geometryCoatNormalTexture),
              cq = this._exporter._materialExporter.getTextureInfo(gq.coatColorTexture),
              uq = gq.coatIor,
              Bq = gq.coatDarkening,
              Wq = gq.coatRoughnessTexture,
              Nq = il(gq),
              aq = this._mergedTexturesMap[Nq];
            let Vq, dq = 0,
              jq = 0;
            if (gq.coatRoughnessAnisotropy > 0) {
              if (Wq || aq) {
                const qq = aq ? this._exporter._materialExporter.getTextureInfo(aq) : null;
                dq = gq.coatRoughnessAnisotropy, jq = gq.geometryCoatTangentAngle, Vq = qq || void 0
              } else {
                let qq = gq.coatRoughness,
                  Yq = gq.coatRoughnessAnisotropy;
                if (!gq._useGltfStyleAnisotropy) {
                  const Eq = function(qq, Eq) {
                    const gq = qq * qq,
                      Yq = gq * Math.sqrt(2 / (1 + (1 - Eq) * (1 - Eq))),
                      lq = (1 - Eq) * Yq;
                    return {
                      newBaseRoughness: Math.sqrt(lq),
                      newAnisotropyStrength: Math.min(Math.sqrt((Yq - gq) / Math.max(1 - gq, 1e-4)), 1)
                    }
                  }(gq.coatRoughness, gq.coatRoughnessAnisotropy);
                  qq = Eq.newBaseRoughness, Yq = Eq.newAnisotropyStrength
                }
                Eq.pbrMetallicRoughness && (Eq.pbrMetallicRoughness.roughnessFactor = qq), dq = Yq, jq = gq.geometryCoatTangentAngle + .5 * Math.PI, Vq = void 0
              }
              gq._useGltfStyleAnisotropy || (Eq.extensions.KHR_materials_openpbr = {}, (Yq = this._exporter._glTF).extensionsUsed || (Yq.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Hq = {
              coatFactor: gq.coatWeight,
              coatTexture: Oq ?? void 0,
              coatRoughnessFactor: gq.coatRoughness,
              coatRoughnessTexture: xq ?? void 0,
              coatNormalTexture: Aq ?? void 0,
              coatColorFactor: gq.coatColor.bYq(),
              coatColorTexture: cq ?? void 0,
              coatIor: 1.5 !== uq ? uq : void 0,
              coatDarkeningFactor: 1 !== Bq ? Bq : void 0,
              coatAnisotropyRotation: jq,
              coatAnisotropyStrength: dq,
              coatAnisotropyTexture: Vq
            };
            null === Hq.coatTexture && null === Hq.coatRoughnessTexture && null === Hq.coatRoughnessTexture && null === Hq.coatAnisotropyTexture && null === Hq.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[bl] = Hq
          }
          qq(Eq)
        }))
      }
    }
    let Ml = !1;

    function Tl() {
      Ml || (Ml = !0, TY.RegisterExtension(bl, (qq => new fl(qq))))
    }
    Tl();
    let zl = (() => {
      var qq, Eq, gq, Yq, lq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, nq, bq, iq, Zq, fq, Mq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, Xq, wq, Kq, Cq, Iq, eq, Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE;
      let PE, QE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag, cg, ug, Bg, Wg, Ng, ag, Vg, dg, jg, Hg, og, Pg, Qg, yg, tg, rg, vg, hg, ng, bg, ig, Zg, fg, Mg, Tg, zg, Sg, pg, Gg, Lg = yE,
        Jg = [],
        kg = [],
        Rg = [],
        Ug = [],
        Fg = [],
        sg = [],
        Xg = [],
        wg = [],
        Kg = [],
        Cg = [],
        Ig = [],
        eg = [],
        Dg = [],
        qY = [],
        EY = [],
        gY = [],
        YY = [],
        lY = [],
        OY = [],
        mY = [],
        xY = [],
        AY = [],
        cY = [],
        uY = [],
        BY = [],
        WY = [],
        NY = [],
        aY = [],
        VY = [],
        dY = [],
        jY = [],
        HY = [],
        oY = [],
        PY = [],
        QY = [],
        yY = [],
        tY = [],
        rY = [],
        vY = [],
        hY = [],
        nY = [],
        bY = [],
        iY = [],
        ZY = [],
        fY = [],
        MY = [],
        TY = [],
        zY = [],
        SY = [],
        pY = [],
        GY = [],
        LY = [],
        JY = [],
        kY = [],
        RY = [],
        UY = [],
        FY = [],
        sY = [],
        XY = [],
        wY = [],
        KY = [],
        CY = [],
        IY = [],
        eY = [],
        DY = [],
        ql = [],
        El = [],
        gl = [],
        Yl = [],
        ll = [],
        Ol = [],
        ml = [],
        xl = [],
        Al = [],
        cl = [],
        ul = [],
        Bl = [],
        Wl = [],
        Nl = [],
        al = [],
        Vl = [],
        dl = [],
        jl = [],
        Hl = [],
        ol = [],
        Pl = [],
        Ql = [],
        yl = [],
        tl = [],
        rl = [],
        vl = [],
        hl = [],
        nl = [],
        bl = [],
        il = [],
        Zl = [],
        fl = [],
        Ml = [],
        Tl = [],
        zl = [],
        Sl = [],
        pl = [],
        Gl = [],
        Ll = [],
        Jl = [],
        kl = [],
        Rl = [],
        Ul = [],
        Fl = [],
        sl = [],
        Xl = [],
        wl = [],
        Kl = [],
        Cl = [],
        Il = [],
        el = [],
        Dl = [],
        qO = [],
        EO = [],
        gO = [],
        YO = [],
        lO = [],
        OO = [],
        mO = [],
        xO = [],
        AO = [],
        cO = [],
        uO = [],
        BO = [],
        WO = [],
        NO = [],
        aO = [],
        VO = [];
      return qq = class extends Lg {
        get directIntensity() {
          return (0, vq.b)(this, Eq, "f")
        }
        set directIntensity(qq) {
          (0, vq.e)(this, Eq, qq, "f")
        }
        get emissiveIntensity() {
          return (0, vq.b)(this, gq, "f")
        }
        set emissiveIntensity(qq) {
          (0, vq.e)(this, gq, qq, "f")
        }
        get environmentIntensity() {
          return (0, vq.b)(this, Yq, "f")
        }
        set environmentIntensity(qq) {
          (0, vq.e)(this, Yq, qq, "f")
        }
        get specularIntensity() {
          return (0, vq.b)(this, lq, "f")
        }
        set specularIntensity(qq) {
          (0, vq.e)(this, lq, qq, "f")
        }
        get disableBumpMap() {
          return (0, vq.b)(this, mq, "f")
        }
        set disableBumpMap(qq) {
          (0, vq.e)(this, mq, qq, "f")
        }
        get albedoTexture() {
          return (0, vq.b)(this, xq, "f")
        }
        set albedoTexture(qq) {
          (0, vq.e)(this, xq, qq, "f")
        }
        get baseWeightTexture() {
          return (0, vq.b)(this, Aq, "f")
        }
        set baseWeightTexture(qq) {
          (0, vq.e)(this, Aq, qq, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, vq.b)(this, cq, "f")
        }
        set baseDiffuseRoughnessTexture(qq) {
          (0, vq.e)(this, cq, qq, "f")
        }
        get ambientTexture() {
          return (0, vq.b)(this, uq, "f")
        }
        set ambientTexture(qq) {
          (0, vq.e)(this, uq, qq, "f")
        }
        get ambientTextureStrength() {
          return (0, vq.b)(this, Bq, "f")
        }
        set ambientTextureStrength(qq) {
          (0, vq.e)(this, Bq, qq, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, vq.b)(this, Wq, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(qq) {
          (0, vq.e)(this, Wq, qq, "f")
        }
        get opacityTexture() {
          return (0, vq.b)(this, Nq, "f")
        }
        set opacityTexture(qq) {
          (0, vq.e)(this, Nq, qq, "f")
        }
        get reflectionTexture() {
          return (0, vq.b)(this, aq, "f")
        }
        set reflectionTexture(qq) {
          (0, vq.e)(this, aq, qq, "f")
        }
        get emissiveTexture() {
          return (0, vq.b)(this, Vq, "f")
        }
        set emissiveTexture(qq) {
          (0, vq.e)(this, Vq, qq, "f")
        }
        get reflectivityTexture() {
          return (0, vq.b)(this, dq, "f")
        }
        set reflectivityTexture(qq) {
          (0, vq.e)(this, dq, qq, "f")
        }
        get metallicTexture() {
          return (0, vq.b)(this, jq, "f")
        }
        set metallicTexture(qq) {
          (0, vq.e)(this, jq, qq, "f")
        }
        get metallic() {
          return (0, vq.b)(this, Hq, "f")
        }
        set metallic(qq) {
          (0, vq.e)(this, Hq, qq, "f")
        }
        get roughness() {
          return (0, vq.b)(this, oq, "f")
        }
        set roughness(qq) {
          (0, vq.e)(this, oq, qq, "f")
        }
        get metallicF0Factor() {
          return (0, vq.b)(this, Pq, "f")
        }
        set metallicF0Factor(qq) {
          (0, vq.e)(this, Pq, qq, "f")
        }
        get metallicReflectanceColor() {
          return (0, vq.b)(this, Qq, "f")
        }
        set metallicReflectanceColor(qq) {
          (0, vq.e)(this, Qq, qq, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, vq.b)(this, yq, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(qq) {
          (0, vq.e)(this, yq, qq, "f")
        }
        get metallicReflectanceTexture() {
          return (0, vq.b)(this, tq, "f")
        }
        set metallicReflectanceTexture(qq) {
          (0, vq.e)(this, tq, qq, "f")
        }
        get reflectanceTexture() {
          return (0, vq.b)(this, rq, "f")
        }
        set reflectanceTexture(qq) {
          (0, vq.e)(this, rq, qq, "f")
        }
        get microSurfaceTexture() {
          return (0, vq.b)(this, nq, "f")
        }
        set microSurfaceTexture(qq) {
          (0, vq.e)(this, nq, qq, "f")
        }
        get bumpTexture() {
          return (0, vq.b)(this, bq, "f")
        }
        set bumpTexture(qq) {
          (0, vq.e)(this, bq, qq, "f")
        }
        get lightmapTexture() {
          return (0, vq.b)(this, iq, "f")
        }
        set lightmapTexture(qq) {
          (0, vq.e)(this, iq, qq, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(qq) {
          this.subSurface.refractionTexture = qq, qq ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, vq.b)(this, Zq, "f")
        }
        set ambientColor(qq) {
          (0, vq.e)(this, Zq, qq, "f")
        }
        get albedoColor() {
          return (0, vq.b)(this, fq, "f")
        }
        set albedoColor(qq) {
          (0, vq.e)(this, fq, qq, "f")
        }
        get baseWeight() {
          return (0, vq.b)(this, Mq, "f")
        }
        set baseWeight(qq) {
          (0, vq.e)(this, Mq, qq, "f")
        }
        get baseDiffuseRoughness() {
          return (0, vq.b)(this, zq, "f")
        }
        set baseDiffuseRoughness(qq) {
          (0, vq.e)(this, zq, qq, "f")
        }
        get reflectivityColor() {
          return (0, vq.b)(this, Sq, "f")
        }
        set reflectivityColor(qq) {
          (0, vq.e)(this, Sq, qq, "f")
        }
        get reflectionColor() {
          return (0, vq.b)(this, pq, "f")
        }
        set reflectionColor(qq) {
          (0, vq.e)(this, pq, qq, "f")
        }
        get emissiveColor() {
          return (0, vq.b)(this, Gq, "f")
        }
        set emissiveColor(qq) {
          (0, vq.e)(this, Gq, qq, "f")
        }
        get microSurface() {
          return (0, vq.b)(this, Lq, "f")
        }
        set microSurface(qq) {
          (0, vq.e)(this, Lq, qq, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(qq) {
          this.subSurface.indexOfRefraction = qq
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(qq) {
          this.subSurface.invertRefractionY = qq
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(qq) {
          this.subSurface.linkRefractionWithTransparency = qq, qq && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, vq.b)(this, Jq, "f")
        }
        set useLightmapAsShadowmap(qq) {
          (0, vq.e)(this, Jq, qq, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, vq.b)(this, kq, "f")
        }
        set useAlphaFromAlbedoTexture(qq) {
          (0, vq.e)(this, kq, qq, "f")
        }
        get forceAlphaTest() {
          return (0, vq.b)(this, Rq, "f")
        }
        set forceAlphaTest(qq) {
          (0, vq.e)(this, Rq, qq, "f")
        }
        get alphaCutOff() {
          return (0, vq.b)(this, Uq, "f")
        }
        set alphaCutOff(qq) {
          (0, vq.e)(this, Uq, qq, "f")
        }
        get useSpecularOverAlpha() {
          return (0, vq.b)(this, Fq, "f")
        }
        set useSpecularOverAlpha(qq) {
          (0, vq.e)(this, Fq, qq, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, vq.b)(this, Xq, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(qq) {
          (0, vq.e)(this, Xq, qq, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, vq.b)(this, wq, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(qq) {
          (0, vq.e)(this, wq, qq, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, vq.b)(this, Kq, "f")
        }
        set useRoughnessFromMetallicTextureGreen(qq) {
          (0, vq.e)(this, Kq, qq, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, vq.b)(this, Cq, "f")
        }
        set useMetallnessFromMetallicTextureBlue(qq) {
          (0, vq.e)(this, Cq, qq, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, vq.b)(this, Iq, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(qq) {
          (0, vq.e)(this, Iq, qq, "f")
        }
        get useAmbientInGrayScale() {
          return (0, vq.b)(this, eq, "f")
        }
        set useAmbientInGrayScale(qq) {
          (0, vq.e)(this, eq, qq, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, vq.b)(this, Dq, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(qq) {
          (0, vq.e)(this, Dq, qq, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === yE.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(qq) {
          qq !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = qq ? yE.LIGHTFALLOFF_PHYSICAL : yE.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === yE.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(qq) {
          qq !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = qq ? yE.LIGHTFALLOFF_GLTF : yE.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, vq.b)(this, qE, "f")
        }
        set useRadianceOverAlpha(qq) {
          (0, vq.e)(this, qE, qq, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, vq.b)(this, EE, "f")
        }
        set useObjectSpaceNormalMap(qq) {
          (0, vq.e)(this, EE, qq, "f")
        }
        get useParallax() {
          return (0, vq.b)(this, gE, "f")
        }
        set useParallax(qq) {
          (0, vq.e)(this, gE, qq, "f")
        }
        get useParallaxOcclusion() {
          return (0, vq.b)(this, YE, "f")
        }
        set useParallaxOcclusion(qq) {
          (0, vq.e)(this, YE, qq, "f")
        }
        get parallaxScaleBias() {
          return (0, vq.b)(this, lE, "f")
        }
        set parallaxScaleBias(qq) {
          (0, vq.e)(this, lE, qq, "f")
        }
        get disableLighting() {
          return (0, vq.b)(this, OE, "f")
        }
        set disableLighting(qq) {
          (0, vq.e)(this, OE, qq, "f")
        }
        get forceIrradianceInFragment() {
          return (0, vq.b)(this, mE, "f")
        }
        set forceIrradianceInFragment(qq) {
          (0, vq.e)(this, mE, qq, "f")
        }
        get maxSimultaneousLights() {
          return (0, vq.b)(this, xE, "f")
        }
        set maxSimultaneousLights(qq) {
          (0, vq.e)(this, xE, qq, "f")
        }
        get invertNormalMapX() {
          return (0, vq.b)(this, AE, "f")
        }
        set invertNormalMapX(qq) {
          (0, vq.e)(this, AE, qq, "f")
        }
        get invertNormalMapY() {
          return (0, vq.b)(this, cE, "f")
        }
        set invertNormalMapY(qq) {
          (0, vq.e)(this, cE, qq, "f")
        }
        get twoSidedLighting() {
          return (0, vq.b)(this, uE, "f")
        }
        set twoSidedLighting(qq) {
          (0, vq.e)(this, uE, qq, "f")
        }
        get useAlphaFresnel() {
          return (0, vq.b)(this, BE, "f")
        }
        set useAlphaFresnel(qq) {
          (0, vq.e)(this, BE, qq, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, vq.b)(this, WE, "f")
        }
        set useLinearAlphaFresnel(qq) {
          (0, vq.e)(this, WE, qq, "f")
        }
        get environmentBRDFTexture() {
          return (0, vq.b)(this, NE, "f")
        }
        set environmentBRDFTexture(qq) {
          (0, vq.e)(this, NE, qq, "f")
        }
        get forceNormalForward() {
          return (0, vq.b)(this, aE, "f")
        }
        set forceNormalForward(qq) {
          (0, vq.e)(this, aE, qq, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, vq.b)(this, VE, "f")
        }
        set enableSpecularAntiAliasing(qq) {
          (0, vq.e)(this, VE, qq, "f")
        }
        get useHorizonOcclusion() {
          return (0, vq.b)(this, dE, "f")
        }
        set useHorizonOcclusion(qq) {
          (0, vq.e)(this, dE, qq, "f")
        }
        get useRadianceOcclusion() {
          return (0, vq.b)(this, jE, "f")
        }
        set useRadianceOcclusion(qq) {
          (0, vq.e)(this, jE, qq, "f")
        }
        get unlit() {
          return (0, vq.b)(this, HE, "f")
        }
        set unlit(qq) {
          (0, vq.e)(this, HE, qq, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, vq.b)(this, oE, "f")
        }
        set applyDecalMapAfterDetailMap(qq) {
          (0, vq.e)(this, oE, qq, "f")
        }
        constructor(Oq, hq) {
          super(Oq, hq, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Eq.set(this, ((0, vq.i)(this, Jg), (0, vq.i)(this, kg, 1))), gq.set(this, ((0, vq.i)(this, Rg), (0, vq.i)(this, Ug, 1))), Yq.set(this, ((0, vq.i)(this, Fg), (0, vq.i)(this, sg, 1))), lq.set(this, ((0, vq.i)(this, Xg), (0, vq.i)(this, wg, 1))), mq.set(this, ((0, vq.i)(this, Kg), (0, vq.i)(this, Cg, !1))), xq.set(this, ((0, vq.i)(this, Ig), (0, vq.i)(this, eg, void 0))), Aq.set(this, ((0, vq.i)(this, Dg), (0, vq.i)(this, qY, void 0))), cq.set(this, ((0, vq.i)(this, EY), (0, vq.i)(this, gY, void 0))), uq.set(this, ((0, vq.i)(this, YY), (0, vq.i)(this, lY, void 0))), Bq.set(this, ((0, vq.i)(this, OY), (0, vq.i)(this, mY, 1))), Wq.set(this, ((0, vq.i)(this, xY), (0, vq.i)(this, AY, qq.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Nq.set(this, ((0, vq.i)(this, cY), (0, vq.i)(this, uY, void 0))), aq.set(this, ((0, vq.i)(this, BY), (0, vq.i)(this, WY, void 0))), Vq.set(this, ((0, vq.i)(this, NY), (0, vq.i)(this, aY, void 0))), dq.set(this, ((0, vq.i)(this, VY), (0, vq.i)(this, dY, void 0))), jq.set(this, ((0, vq.i)(this, jY), (0, vq.i)(this, HY, void 0))), Hq.set(this, ((0, vq.i)(this, oY), (0, vq.i)(this, PY, void 0))), oq.set(this, ((0, vq.i)(this, QY), (0, vq.i)(this, yY, void 0))), Pq.set(this, ((0, vq.i)(this, tY), (0, vq.i)(this, rY, 1))), Qq.set(this, ((0, vq.i)(this, vY), (0, vq.i)(this, hY, sq.d.White()))), yq.set(this, ((0, vq.i)(this, nY), (0, vq.i)(this, bY, !1))), tq.set(this, ((0, vq.i)(this, iY), (0, vq.i)(this, ZY, void 0))), rq.set(this, ((0, vq.i)(this, fY), (0, vq.i)(this, MY, void 0))), nq.set(this, ((0, vq.i)(this, TY), (0, vq.i)(this, zY, void 0))), bq.set(this, ((0, vq.i)(this, SY), (0, vq.i)(this, pY, void 0))), iq.set(this, ((0, vq.i)(this, GY), (0, vq.i)(this, LY, void 0))), Zq.set(this, ((0, vq.i)(this, JY), (0, vq.i)(this, kY, new sq.d(0, 0, 0)))), fq.set(this, ((0, vq.i)(this, RY), (0, vq.i)(this, UY, new sq.d(1, 1, 1)))), Mq.set(this, ((0, vq.i)(this, FY), (0, vq.i)(this, sY, 1))), zq.set(this, ((0, vq.i)(this, XY), (0, vq.i)(this, wY, void 0))), Sq.set(this, ((0, vq.i)(this, KY), (0, vq.i)(this, CY, new sq.d(1, 1, 1)))), pq.set(this, ((0, vq.i)(this, IY), (0, vq.i)(this, eY, new sq.d(1, 1, 1)))), Gq.set(this, ((0, vq.i)(this, DY), (0, vq.i)(this, ql, new sq.d(0, 0, 0)))), Lq.set(this, ((0, vq.i)(this, El), (0, vq.i)(this, gl, 1))), Jq.set(this, ((0, vq.i)(this, Yl), (0, vq.i)(this, ll, !1))), kq.set(this, ((0, vq.i)(this, Ol), (0, vq.i)(this, ml, !1))), Rq.set(this, ((0, vq.i)(this, xl), (0, vq.i)(this, Al, !1))), Uq.set(this, ((0, vq.i)(this, cl), (0, vq.i)(this, ul, .4))), Fq.set(this, ((0, vq.i)(this, Bl), (0, vq.i)(this, Wl, !0))), Xq.set(this, ((0, vq.i)(this, Nl), (0, vq.i)(this, al, !1))), wq.set(this, ((0, vq.i)(this, Vl), (0, vq.i)(this, dl, !0))), Kq.set(this, ((0, vq.i)(this, jl), (0, vq.i)(this, Hl, !1))), Cq.set(this, ((0, vq.i)(this, ol), (0, vq.i)(this, Pl, !1))), Iq.set(this, ((0, vq.i)(this, Ql), (0, vq.i)(this, yl, !1))), eq.set(this, ((0, vq.i)(this, tl), (0, vq.i)(this, rl, !1))), Dq.set(this, ((0, vq.i)(this, vl), (0, vq.i)(this, hl, !1))), qE.set(this, ((0, vq.i)(this, nl), (0, vq.i)(this, bl, !0))), EE.set(this, ((0, vq.i)(this, il), (0, vq.i)(this, Zl, !1))), gE.set(this, ((0, vq.i)(this, fl), (0, vq.i)(this, Ml, !1))), YE.set(this, ((0, vq.i)(this, Tl), (0, vq.i)(this, zl, !1))), lE.set(this, ((0, vq.i)(this, Sl), (0, vq.i)(this, pl, .05))), OE.set(this, ((0, vq.i)(this, Gl), (0, vq.i)(this, Ll, !1))), mE.set(this, ((0, vq.i)(this, Jl), (0, vq.i)(this, kl, !1))), xE.set(this, ((0, vq.i)(this, Rl), (0, vq.i)(this, Ul, 4))), AE.set(this, ((0, vq.i)(this, Fl), (0, vq.i)(this, sl, !1))), cE.set(this, ((0, vq.i)(this, Xl), (0, vq.i)(this, wl, !1))), uE.set(this, ((0, vq.i)(this, Kl), (0, vq.i)(this, Cl, !1))), BE.set(this, ((0, vq.i)(this, Il), (0, vq.i)(this, el, !1))), WE.set(this, ((0, vq.i)(this, Dl), (0, vq.i)(this, qO, !1))), NE.set(this, ((0, vq.i)(this, EO), (0, vq.i)(this, gO, null))), aE.set(this, ((0, vq.i)(this, YO), (0, vq.i)(this, lO, !1))), VE.set(this, ((0, vq.i)(this, OO), (0, vq.i)(this, mO, !1))), dE.set(this, ((0, vq.i)(this, xO), (0, vq.i)(this, AO, !0))), jE.set(this, ((0, vq.i)(this, cO), (0, vq.i)(this, uO, !0))), HE.set(this, ((0, vq.i)(this, BO), (0, vq.i)(this, WO, !1))), oE.set(this, ((0, vq.i)(this, NO), (0, vq.i)(this, aO, !1))), (0, vq.i)(this, VO), this._environmentBRDFTexture = Tq(this.ZJ())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Eq) {
          let gq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const lq = tE.d.Clone((() => new qq(Eq, this.ZJ())), this, {
            cloneTexturesOnlyOnce: gq
          });
          return lq.id = Eq, lq.name = Eq, this.stencil.copyTo(lq.stencil), this._clonePlugins(lq, Yq), lq
        }
        serialize() {
          const qq = super.serialize();
          return qq.customType = "BABYLON.PBRMaterial", qq
        }
        static Parse(Eq, gq, Yq) {
          const lq = tE.d.Parse((() => new qq(Eq.name, gq)), Eq, gq, Yq);
          return Eq.stencil && lq.stencil.parse(Eq.stencil, gq, Yq), Oq.e._ParsePlugins(Eq, lq, gq, Yq), Eq.clearCoat && lq.clearCoat.parse(Eq.clearCoat, gq, Yq), Eq.anisotropy && lq.anisotropy.parse(Eq.anisotropy, gq, Yq), Eq.brdf && lq.brdf.parse(Eq.brdf, gq, Yq), Eq.sheen && lq.sheen.parse(Eq.sheen, gq, Yq), Eq.subSurface && lq.subSurface.parse(Eq.subSurface, gq, Yq), Eq.iridescence && lq.iridescence.parse(Eq.iridescence, gq, Yq), lq
        }
      }, Eq = new WeakMap, gq = new WeakMap, Yq = new WeakMap, lq = new WeakMap, mq = new WeakMap, xq = new WeakMap, Aq = new WeakMap, cq = new WeakMap, uq = new WeakMap, Bq = new WeakMap, Wq = new WeakMap, Nq = new WeakMap, aq = new WeakMap, Vq = new WeakMap, dq = new WeakMap, jq = new WeakMap, Hq = new WeakMap, oq = new WeakMap, Pq = new WeakMap, Qq = new WeakMap, yq = new WeakMap, tq = new WeakMap, rq = new WeakMap, nq = new WeakMap, bq = new WeakMap, iq = new WeakMap, Zq = new WeakMap, fq = new WeakMap, Mq = new WeakMap, zq = new WeakMap, Sq = new WeakMap, pq = new WeakMap, Gq = new WeakMap, Lq = new WeakMap, Jq = new WeakMap, kq = new WeakMap, Rq = new WeakMap, Uq = new WeakMap, Fq = new WeakMap, Xq = new WeakMap, wq = new WeakMap, Kq = new WeakMap, Cq = new WeakMap, Iq = new WeakMap, eq = new WeakMap, Dq = new WeakMap, qE = new WeakMap, EE = new WeakMap, gE = new WeakMap, YE = new WeakMap, lE = new WeakMap, OE = new WeakMap, mE = new WeakMap, xE = new WeakMap, AE = new WeakMap, cE = new WeakMap, uE = new WeakMap, BE = new WeakMap, WE = new WeakMap, NE = new WeakMap, aE = new WeakMap, VE = new WeakMap, dE = new WeakMap, jE = new WeakMap, HE = new WeakMap, oE = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lg[Symbol.metadata] ?? null) : void 0;
        PE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], rE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], nE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], bE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], iE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ZE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], fE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ME = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], zE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], pE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], GE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], LE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, hq.o)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], UE = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], sE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], XE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], wE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], KE = [(0, hq.E)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty", null)], CE = [(0, hq.o)("ambient"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], IE = [(0, hq.o)("albedo"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], eE = [(0, hq.M)("baseWeight"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], DE = [(0, hq.M)("baseDiffuseRoughness"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], qg = [(0, hq.o)("reflectivity"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Eg = [(0, hq.o)("reflection"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], gg = [(0, hq.o)("emissive"), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Yg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], lg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Og = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], mg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], xg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ag = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], cg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ug = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Bg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Wg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Ng = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ag = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], dg = [(0, hq.M)()], jg = [(0, hq.M)()], Hg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], og = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Pg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Qg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], yg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], tg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsLightsDirty")], rg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], vg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsLightsDirty")], hg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ng = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], bg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], ig = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Zg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], fg = [(0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Mg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Tg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], zg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], Sg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsTexturesDirty")], pg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], Gg = [(0, hq.M)(), (0, hq.f)("_markAllSubMeshesAsMiscDirty")], (0, vq.f)(qq, null, PE, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "directIntensity" in qq,
            get: qq => qq.directIntensity,
            set: (qq, Eq) => {
              qq.directIntensity = Eq
            }
          },
          metadata: Eq
        }, kg, Rg), (0, vq.f)(qq, null, QE, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "emissiveIntensity" in qq,
            get: qq => qq.emissiveIntensity,
            set: (qq, Eq) => {
              qq.emissiveIntensity = Eq
            }
          },
          metadata: Eq
        }, Ug, Fg), (0, vq.f)(qq, null, rE, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "environmentIntensity" in qq,
            get: qq => qq.environmentIntensity,
            set: (qq, Eq) => {
              qq.environmentIntensity = Eq
            }
          },
          metadata: Eq
        }, sg, Xg), (0, vq.f)(qq, null, vE, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "specularIntensity" in qq,
            get: qq => qq.specularIntensity,
            set: (qq, Eq) => {
              qq.specularIntensity = Eq
            }
          },
          metadata: Eq
        }, wg, Kg), (0, vq.f)(qq, null, hE, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: qq => "disableBumpMap" in qq,
            get: qq => qq.disableBumpMap,
            set: (qq, Eq) => {
              qq.disableBumpMap = Eq
            }
          },
          metadata: Eq
        }, Cg, Ig), (0, vq.f)(qq, null, nE, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "albedoTexture" in qq,
            get: qq => qq.albedoTexture,
            set: (qq, Eq) => {
              qq.albedoTexture = Eq
            }
          },
          metadata: Eq
        }, eg, Dg), (0, vq.f)(qq, null, bE, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "baseWeightTexture" in qq,
            get: qq => qq.baseWeightTexture,
            set: (qq, Eq) => {
              qq.baseWeightTexture = Eq
            }
          },
          metadata: Eq
        }, qY, EY), (0, vq.f)(qq, null, iE, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "baseDiffuseRoughnessTexture" in qq,
            get: qq => qq.baseDiffuseRoughnessTexture,
            set: (qq, Eq) => {
              qq.baseDiffuseRoughnessTexture = Eq
            }
          },
          metadata: Eq
        }, gY, YY), (0, vq.f)(qq, null, ZE, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "ambientTexture" in qq,
            get: qq => qq.ambientTexture,
            set: (qq, Eq) => {
              qq.ambientTexture = Eq
            }
          },
          metadata: Eq
        }, lY, OY), (0, vq.f)(qq, null, fE, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: qq => "ambientTextureStrength" in qq,
            get: qq => qq.ambientTextureStrength,
            set: (qq, Eq) => {
              qq.ambientTextureStrength = Eq
            }
          },
          metadata: Eq
        }, mY, xY), (0, vq.f)(qq, null, ME, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: qq => "ambientTextureImpactOnAnalyticalLights" in qq,
            get: qq => qq.ambientTextureImpactOnAnalyticalLights,
            set: (qq, Eq) => {
              qq.ambientTextureImpactOnAnalyticalLights = Eq
            }
          },
          metadata: Eq
        }, AY, cY), (0, vq.f)(qq, null, TE, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "opacityTexture" in qq,
            get: qq => qq.opacityTexture,
            set: (qq, Eq) => {
              qq.opacityTexture = Eq
            }
          },
          metadata: Eq
        }, uY, BY), (0, vq.f)(qq, null, zE, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "reflectionTexture" in qq,
            get: qq => qq.reflectionTexture,
            set: (qq, Eq) => {
              qq.reflectionTexture = Eq
            }
          },
          metadata: Eq
        }, WY, NY), (0, vq.f)(qq, null, SE, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "emissiveTexture" in qq,
            get: qq => qq.emissiveTexture,
            set: (qq, Eq) => {
              qq.emissiveTexture = Eq
            }
          },
          metadata: Eq
        }, aY, VY), (0, vq.f)(qq, null, pE, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "reflectivityTexture" in qq,
            get: qq => qq.reflectivityTexture,
            set: (qq, Eq) => {
              qq.reflectivityTexture = Eq
            }
          },
          metadata: Eq
        }, dY, jY), (0, vq.f)(qq, null, GE, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "metallicTexture" in qq,
            get: qq => qq.metallicTexture,
            set: (qq, Eq) => {
              qq.metallicTexture = Eq
            }
          },
          metadata: Eq
        }, HY, oY), (0, vq.f)(qq, null, LE, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: qq => "metallic" in qq,
            get: qq => qq.metallic,
            set: (qq, Eq) => {
              qq.metallic = Eq
            }
          },
          metadata: Eq
        }, PY, QY), (0, vq.f)(qq, null, JE, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "roughness" in qq,
            get: qq => qq.roughness,
            set: (qq, Eq) => {
              qq.roughness = Eq
            }
          },
          metadata: Eq
        }, yY, tY), (0, vq.f)(qq, null, kE, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: qq => "metallicF0Factor" in qq,
            get: qq => qq.metallicF0Factor,
            set: (qq, Eq) => {
              qq.metallicF0Factor = Eq
            }
          },
          metadata: Eq
        }, rY, vY), (0, vq.f)(qq, null, RE, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "metallicReflectanceColor" in qq,
            get: qq => qq.metallicReflectanceColor,
            set: (qq, Eq) => {
              qq.metallicReflectanceColor = Eq
            }
          },
          metadata: Eq
        }, hY, nY), (0, vq.f)(qq, null, UE, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "useOnlyMetallicFromMetallicReflectanceTexture" in qq,
            get: qq => qq.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (qq, Eq) => {
              qq.useOnlyMetallicFromMetallicReflectanceTexture = Eq
            }
          },
          metadata: Eq
        }, bY, iY), (0, vq.f)(qq, null, FE, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "metallicReflectanceTexture" in qq,
            get: qq => qq.metallicReflectanceTexture,
            set: (qq, Eq) => {
              qq.metallicReflectanceTexture = Eq
            }
          },
          metadata: Eq
        }, ZY, fY), (0, vq.f)(qq, null, sE, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "reflectanceTexture" in qq,
            get: qq => qq.reflectanceTexture,
            set: (qq, Eq) => {
              qq.reflectanceTexture = Eq
            }
          },
          metadata: Eq
        }, MY, TY), (0, vq.f)(qq, null, XE, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "microSurfaceTexture" in qq,
            get: qq => qq.microSurfaceTexture,
            set: (qq, Eq) => {
              qq.microSurfaceTexture = Eq
            }
          },
          metadata: Eq
        }, zY, SY), (0, vq.f)(qq, null, wE, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "bumpTexture" in qq,
            get: qq => qq.bumpTexture,
            set: (qq, Eq) => {
              qq.bumpTexture = Eq
            }
          },
          metadata: Eq
        }, pY, GY), (0, vq.f)(qq, null, KE, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "lightmapTexture" in qq,
            get: qq => qq.lightmapTexture,
            set: (qq, Eq) => {
              qq.lightmapTexture = Eq
            }
          },
          metadata: Eq
        }, LY, JY), (0, vq.f)(qq, null, CE, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "ambientColor" in qq,
            get: qq => qq.ambientColor,
            set: (qq, Eq) => {
              qq.ambientColor = Eq
            }
          },
          metadata: Eq
        }, kY, RY), (0, vq.f)(qq, null, IE, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "albedoColor" in qq,
            get: qq => qq.albedoColor,
            set: (qq, Eq) => {
              qq.albedoColor = Eq
            }
          },
          metadata: Eq
        }, UY, FY), (0, vq.f)(qq, null, eE, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: qq => "baseWeight" in qq,
            get: qq => qq.baseWeight,
            set: (qq, Eq) => {
              qq.baseWeight = Eq
            }
          },
          metadata: Eq
        }, sY, XY), (0, vq.f)(qq, null, DE, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: qq => "baseDiffuseRoughness" in qq,
            get: qq => qq.baseDiffuseRoughness,
            set: (qq, Eq) => {
              qq.baseDiffuseRoughness = Eq
            }
          },
          metadata: Eq
        }, wY, KY), (0, vq.f)(qq, null, qg, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "reflectivityColor" in qq,
            get: qq => qq.reflectivityColor,
            set: (qq, Eq) => {
              qq.reflectivityColor = Eq
            }
          },
          metadata: Eq
        }, CY, IY), (0, vq.f)(qq, null, Eg, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "reflectionColor" in qq,
            get: qq => qq.reflectionColor,
            set: (qq, Eq) => {
              qq.reflectionColor = Eq
            }
          },
          metadata: Eq
        }, eY, DY), (0, vq.f)(qq, null, gg, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: qq => "emissiveColor" in qq,
            get: qq => qq.emissiveColor,
            set: (qq, Eq) => {
              qq.emissiveColor = Eq
            }
          },
          metadata: Eq
        }, ql, El), (0, vq.f)(qq, null, Yg, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: qq => "microSurface" in qq,
            get: qq => qq.microSurface,
            set: (qq, Eq) => {
              qq.microSurface = Eq
            }
          },
          metadata: Eq
        }, gl, Yl), (0, vq.f)(qq, null, lg, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: qq => "useLightmapAsShadowmap" in qq,
            get: qq => qq.useLightmapAsShadowmap,
            set: (qq, Eq) => {
              qq.useLightmapAsShadowmap = Eq
            }
          },
          metadata: Eq
        }, ll, Ol), (0, vq.f)(qq, null, Og, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAlphaFromAlbedoTexture" in qq,
            get: qq => qq.useAlphaFromAlbedoTexture,
            set: (qq, Eq) => {
              qq.useAlphaFromAlbedoTexture = Eq
            }
          },
          metadata: Eq
        }, ml, xl), (0, vq.f)(qq, null, mg, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: qq => "forceAlphaTest" in qq,
            get: qq => qq.forceAlphaTest,
            set: (qq, Eq) => {
              qq.forceAlphaTest = Eq
            }
          },
          metadata: Eq
        }, Al, cl), (0, vq.f)(qq, null, xg, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: qq => "alphaCutOff" in qq,
            get: qq => qq.alphaCutOff,
            set: (qq, Eq) => {
              qq.alphaCutOff = Eq
            }
          },
          metadata: Eq
        }, ul, Bl), (0, vq.f)(qq, null, Ag, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "useSpecularOverAlpha" in qq,
            get: qq => qq.useSpecularOverAlpha,
            set: (qq, Eq) => {
              qq.useSpecularOverAlpha = Eq
            }
          },
          metadata: Eq
        }, Wl, Nl), (0, vq.f)(qq, null, cg, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "useMicroSurfaceFromReflectivityMapAlpha" in qq,
            get: qq => qq.useMicroSurfaceFromReflectivityMapAlpha,
            set: (qq, Eq) => {
              qq.useMicroSurfaceFromReflectivityMapAlpha = Eq
            }
          },
          metadata: Eq
        }, al, Vl), (0, vq.f)(qq, null, ug, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRoughnessFromMetallicTextureAlpha" in qq,
            get: qq => qq.useRoughnessFromMetallicTextureAlpha,
            set: (qq, Eq) => {
              qq.useRoughnessFromMetallicTextureAlpha = Eq
            }
          },
          metadata: Eq
        }, dl, jl), (0, vq.f)(qq, null, Bg, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRoughnessFromMetallicTextureGreen" in qq,
            get: qq => qq.useRoughnessFromMetallicTextureGreen,
            set: (qq, Eq) => {
              qq.useRoughnessFromMetallicTextureGreen = Eq
            }
          },
          metadata: Eq
        }, Hl, ol), (0, vq.f)(qq, null, Wg, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: qq => "useMetallnessFromMetallicTextureBlue" in qq,
            get: qq => qq.useMetallnessFromMetallicTextureBlue,
            set: (qq, Eq) => {
              qq.useMetallnessFromMetallicTextureBlue = Eq
            }
          },
          metadata: Eq
        }, Pl, Ql), (0, vq.f)(qq, null, Ng, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAmbientOcclusionFromMetallicTextureRed" in qq,
            get: qq => qq.useAmbientOcclusionFromMetallicTextureRed,
            set: (qq, Eq) => {
              qq.useAmbientOcclusionFromMetallicTextureRed = Eq
            }
          },
          metadata: Eq
        }, yl, tl), (0, vq.f)(qq, null, ag, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAmbientInGrayScale" in qq,
            get: qq => qq.useAmbientInGrayScale,
            set: (qq, Eq) => {
              qq.useAmbientInGrayScale = Eq
            }
          },
          metadata: Eq
        }, rl, vl), (0, vq.f)(qq, null, Vg, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAutoMicroSurfaceFromReflectivityMap" in qq,
            get: qq => qq.useAutoMicroSurfaceFromReflectivityMap,
            set: (qq, Eq) => {
              qq.useAutoMicroSurfaceFromReflectivityMap = Eq
            }
          },
          metadata: Eq
        }, hl, nl), (0, vq.f)(qq, null, dg, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: qq => "usePhysicalLightFalloff" in qq,
            get: qq => qq.usePhysicalLightFalloff
          },
          metadata: Eq
        }, null, Jg), (0, vq.f)(qq, null, jg, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: qq => "useGLTFLightFalloff" in qq,
            get: qq => qq.useGLTFLightFalloff
          },
          metadata: Eq
        }, null, Jg), (0, vq.f)(qq, null, Hg, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRadianceOverAlpha" in qq,
            get: qq => qq.useRadianceOverAlpha,
            set: (qq, Eq) => {
              qq.useRadianceOverAlpha = Eq
            }
          },
          metadata: Eq
        }, bl, il), (0, vq.f)(qq, null, og, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: qq => "useObjectSpaceNormalMap" in qq,
            get: qq => qq.useObjectSpaceNormalMap,
            set: (qq, Eq) => {
              qq.useObjectSpaceNormalMap = Eq
            }
          },
          metadata: Eq
        }, Zl, fl), (0, vq.f)(qq, null, Pg, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: qq => "useParallax" in qq,
            get: qq => qq.useParallax,
            set: (qq, Eq) => {
              qq.useParallax = Eq
            }
          },
          metadata: Eq
        }, Ml, Tl), (0, vq.f)(qq, null, Qg, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: qq => "useParallaxOcclusion" in qq,
            get: qq => qq.useParallaxOcclusion,
            set: (qq, Eq) => {
              qq.useParallaxOcclusion = Eq
            }
          },
          metadata: Eq
        }, zl, Sl), (0, vq.f)(qq, null, yg, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: qq => "parallaxScaleBias" in qq,
            get: qq => qq.parallaxScaleBias,
            set: (qq, Eq) => {
              qq.parallaxScaleBias = Eq
            }
          },
          metadata: Eq
        }, pl, Gl), (0, vq.f)(qq, null, tg, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: qq => "disableLighting" in qq,
            get: qq => qq.disableLighting,
            set: (qq, Eq) => {
              qq.disableLighting = Eq
            }
          },
          metadata: Eq
        }, Ll, Jl), (0, vq.f)(qq, null, rg, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: qq => "forceIrradianceInFragment" in qq,
            get: qq => qq.forceIrradianceInFragment,
            set: (qq, Eq) => {
              qq.forceIrradianceInFragment = Eq
            }
          },
          metadata: Eq
        }, kl, Rl), (0, vq.f)(qq, null, vg, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: qq => "maxSimultaneousLights" in qq,
            get: qq => qq.maxSimultaneousLights,
            set: (qq, Eq) => {
              qq.maxSimultaneousLights = Eq
            }
          },
          metadata: Eq
        }, Ul, Fl), (0, vq.f)(qq, null, hg, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: qq => "invertNormalMapX" in qq,
            get: qq => qq.invertNormalMapX,
            set: (qq, Eq) => {
              qq.invertNormalMapX = Eq
            }
          },
          metadata: Eq
        }, sl, Xl), (0, vq.f)(qq, null, ng, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: qq => "invertNormalMapY" in qq,
            get: qq => qq.invertNormalMapY,
            set: (qq, Eq) => {
              qq.invertNormalMapY = Eq
            }
          },
          metadata: Eq
        }, wl, Kl), (0, vq.f)(qq, null, bg, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: qq => "twoSidedLighting" in qq,
            get: qq => qq.twoSidedLighting,
            set: (qq, Eq) => {
              qq.twoSidedLighting = Eq
            }
          },
          metadata: Eq
        }, Cl, Il), (0, vq.f)(qq, null, ig, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: qq => "useAlphaFresnel" in qq,
            get: qq => qq.useAlphaFresnel,
            set: (qq, Eq) => {
              qq.useAlphaFresnel = Eq
            }
          },
          metadata: Eq
        }, el, Dl), (0, vq.f)(qq, null, Zg, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: qq => "useLinearAlphaFresnel" in qq,
            get: qq => qq.useLinearAlphaFresnel,
            set: (qq, Eq) => {
              qq.useLinearAlphaFresnel = Eq
            }
          },
          metadata: Eq
        }, qO, EO), (0, vq.f)(qq, null, fg, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: qq => "environmentBRDFTexture" in qq,
            get: qq => qq.environmentBRDFTexture,
            set: (qq, Eq) => {
              qq.environmentBRDFTexture = Eq
            }
          },
          metadata: Eq
        }, gO, YO), (0, vq.f)(qq, null, Mg, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: qq => "forceNormalForward" in qq,
            get: qq => qq.forceNormalForward,
            set: (qq, Eq) => {
              qq.forceNormalForward = Eq
            }
          },
          metadata: Eq
        }, lO, OO), (0, vq.f)(qq, null, Tg, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: qq => "enableSpecularAntiAliasing" in qq,
            get: qq => qq.enableSpecularAntiAliasing,
            set: (qq, Eq) => {
              qq.enableSpecularAntiAliasing = Eq
            }
          },
          metadata: Eq
        }, mO, xO), (0, vq.f)(qq, null, zg, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: qq => "useHorizonOcclusion" in qq,
            get: qq => qq.useHorizonOcclusion,
            set: (qq, Eq) => {
              qq.useHorizonOcclusion = Eq
            }
          },
          metadata: Eq
        }, AO, cO), (0, vq.f)(qq, null, Sg, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: qq => "useRadianceOcclusion" in qq,
            get: qq => qq.useRadianceOcclusion,
            set: (qq, Eq) => {
              qq.useRadianceOcclusion = Eq
            }
          },
          metadata: Eq
        }, uO, BO), (0, vq.f)(qq, null, pg, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: qq => "unlit" in qq,
            get: qq => qq.unlit,
            set: (qq, Eq) => {
              qq.unlit = Eq
            }
          },
          metadata: Eq
        }, WO, NO), (0, vq.f)(qq, null, Gg, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: qq => "applyDecalMapAfterDetailMap" in qq,
            get: qq => qq.applyDecalMapAfterDetailMap,
            set: (qq, Eq) => {
              qq.applyDecalMapAfterDetailMap = Eq
            }
          },
          metadata: Eq
        }, aO, VO), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq.PBRMATERIAL_OPAQUE = yE.PBRMATERIAL_OPAQUE, qq.PBRMATERIAL_ALPHATEST = yE.PBRMATERIAL_ALPHATEST, qq.PBRMATERIAL_ALPHABLEND = yE.PBRMATERIAL_ALPHABLEND, qq.PBRMATERIAL_ALPHATESTANDBLEND = yE.PBRMATERIAL_ALPHATESTANDBLEND, qq.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = yE.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, qq
    })();
    const Sl = "KHR_materials_diffuse_transmission";

    function pl(qq, Eq) {
      const gq = Eq.subSurface;
      let Yq = null;
      return gq.translucencyIntensityTexture ? Yq = gq.translucencyIntensityTexture : gq.thicknessTexture && gq.useMaskFromThicknessTexture && (Yq = gq.thicknessTexture), Yq && !gq.useGltfStyleTextures ? (nq.b.Warn(`${qq}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Eq.name}`, 1), null) : Yq
    }
    class Gl {
      constructor(qq) {
        this.name = Sl, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof zl && this._isExtensionEnabled(gq)) {
          const Eq = pl(qq, gq);
          return Eq && Yq.push(Eq), gq.subSurface.translucencyColorTexture && Yq.push(gq.subSurface.translucencyColorTexture), Yq
        }
        return Yq
      }
      _isExtensionEnabled(qq) {
        if (qq.unlit) return !1;
        const Eq = qq.subSurface;
        return !!Eq.isTranslucencyEnabled && (!qq.unlit && !Eq.useAlbedoToTintTranslucency && Eq.useGltfStyleTextures && 1 === Eq.volumeIndexOfRefraction && 0 === Eq.minimumThickness && 0 === Eq.maximumThickness)
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((Yq => {
          if (gq instanceof zl && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            const Yq = gq.subSurface,
              lq = pl(qq, gq),
              Oq = 0 == Yq.translucencyIntensity ? void 0 : Yq.translucencyIntensity,
              mq = this._exporter._materialExporter.getTextureInfo(lq) ?? void 0,
              xq = !Yq.translucencyColor || Yq.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Yq.translucencyColor.bYq(),
              Aq = this._exporter._materialExporter.getTextureInfo(Yq.translucencyColorTexture) ?? void 0,
              cq = {
                diffuseTransmissionFactor: Oq,
                diffuseTransmissionTexture: mq,
                diffuseTransmissionColorFactor: xq,
                diffuseTransmissionColorTexture: Aq
              };
            (mq || Aq) && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions = Eq.extensions || {}, Eq.extensions[Sl] = cq
          }
          Yq(Eq)
        }))
      }
    }
    let Ll = !1;

    function Jl() {
      Ll || (Ll = !0, TY.RegisterExtension(Sl, (qq => new Gl(qq))))
    }
    Jl();
    const kl = "KHR_materials_dispersion";
    class Rl {
      constructor() {
        this.name = kl, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(qq) {
        if (qq.unlit) return !1;
        const Eq = qq.subSurface;
        return !(!Eq.isRefractionEnabled && !Eq.isDispersionEnabled)
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof zl && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            const qq = {
              dispersion: gq.subSurface.dispersion
            };
            Eq.extensions = Eq.extensions || {}, Eq.extensions[kl] = qq
          }
          qq(Eq)
        }))
      }
    }
    let Ul = !1;

    function Fl() {
      Ul || (Ul = !0, TY.RegisterExtension(kl, (() => new Rl)))
    }
    Fl();
    const sl = "KHR_materials_emissive_strength";
    class Xl {
      constructor() {
        this.name = sl, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(qq, Eq, gq) {
        return await new Promise((qq => {
          if (!(gq instanceof zl)) return qq(Eq);
          const Yq = gq.emissiveColor.scale(gq.emissiveIntensity),
            lq = Math.max(...Yq.bYq());
          if (lq > 1) {
            Eq.emissiveFactor = Yq.scale(1 / lq).bYq(), this._wasUsed = !0;
            const qq = {
              emissiveStrength: lq
            };
            Eq.extensions || (Eq.extensions = {}), Eq.extensions[sl] = qq
          } else Eq.emissiveFactor = Yq.bYq();
          return qq(Eq)
        }))
      }
    }
    let wl = !1;

    function Kl() {
      wl || (wl = !0, TY.RegisterExtension(sl, (() => new Xl)))
    }
    Kl();
    const Cl = "KHR_materials_ior";
    class Il {
      constructor() {
        this.name = Cl, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(qq) {
        return !qq.unlit && (qq instanceof eE ? 1.5 != qq.specularIor : qq instanceof zl && (void 0 != qq.indexOfRefraction && 1.5 != qq.indexOfRefraction))
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof zl && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            const qq = {
              ior: gq.indexOfRefraction
            };
            Eq.extensions = Eq.extensions || {}, Eq.extensions[Cl] = qq
          } else if (gq instanceof eE && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            const qq = {
              ior: gq.specularIor
            };
            Eq.extensions = Eq.extensions || {}, Eq.extensions[Cl] = qq
          }
          qq(Eq)
        }))
      }
    }
    let el = !1;

    function Dl() {
      el || (el = !0, TY.RegisterExtension(Cl, (() => new Il)))
    }
    Dl();
    const qO = "KHR_materials_iridescence";
    class EO {
      constructor(qq) {
        this.name = qO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof yE) {
          if (gq.iridescence.isEnabled) return gq.iridescence.texture && Yq.push(gq.iridescence.texture), gq.iridescence.thicknessTexture && gq.iridescence.thicknessTexture !== gq.iridescence.texture && Yq.push(gq.iridescence.thicknessTexture), Yq
        } else if (gq instanceof eE && gq.thinFilmWeight > 0) return gq.thinFilmWeightTexture && Yq.push(gq.thinFilmWeightTexture), gq.thinFilmThicknessTexture && gq.thinFilmThicknessTexture !== gq.thinFilmWeightTexture && Yq.push(gq.thinFilmThicknessTexture), Yq;
        return []
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof yE) {
            if (!gq.iridescence.isEnabled) return void qq(Eq);
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const Yq = this._exporter._materialExporter.getTextureInfo(gq.iridescence.texture),
              lq = this._exporter._materialExporter.getTextureInfo(gq.iridescence.thicknessTexture),
              Oq = {
                iridescenceFactor: gq.iridescence.intensity,
                iridescenceIor: gq.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: gq.iridescence.minimumThickness,
                iridescenceThicknessMaximum: gq.iridescence.maximumThickness,
                iridescenceTexture: Yq ?? void 0,
                iridescenceThicknessTexture: lq ?? void 0
              };
            null === Oq.iridescenceTexture && null === Oq.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[qO] = Oq
          } else if (gq instanceof eE) {
            if (gq.thinFilmWeight <= 0) return void qq(Eq);
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const Yq = this._exporter._materialExporter.getTextureInfo(gq.thinFilmWeightTexture),
              lq = this._exporter._materialExporter.getTextureInfo(gq.thinFilmThicknessTexture),
              Oq = {
                iridescenceFactor: gq.thinFilmWeight,
                iridescenceIor: gq.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * gq.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * gq.thinFilmThickness,
                iridescenceTexture: Yq ?? void 0,
                iridescenceThicknessTexture: lq ?? void 0
              };
            null === Oq.iridescenceTexture && null === Oq.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[qO] = Oq
          }
          qq(Eq)
        }))
      }
    }
    let gO = !1;

    function YO() {
      gO || (gO = !0, TY.RegisterExtension(qO, (qq => new EO(qq))))
    }
    YO();
    const lO = "KHR_materials_sheen";
    class OO {
      constructor(qq) {
        this.name = lO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        return gq instanceof zl && gq.sheen.isEnabled && gq.sheen.texture ? [gq.sheen.texture] : []
      }
      async postExportMaterialAsync(qq, Eq, gq) {
        return await new Promise((qq => {
          if (gq instanceof zl) {
            if (!gq.sheen.isEnabled) return void qq(Eq);
            this._wasUsed = !0, null == Eq.extensions && (Eq.extensions = {});
            const Yq = {
              sheenColorFactor: gq.sheen.color.bYq(),
              sheenRoughnessFactor: gq.sheen.roughness ?? 0
            };
            null === Yq.sheenColorTexture && null === Yq.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gq), gq.sheen.texture && (Yq.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(gq.sheen.texture) ?? void 0), gq.sheen.textureRoughness && !gq.sheen.useRoughnessFromMainTexture ? Yq.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gq.sheen.textureRoughness) ?? void 0 : gq.sheen.texture && gq.sheen.useRoughnessFromMainTexture && (Yq.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gq.sheen.texture) ?? void 0), Eq.extensions[lO] = Yq
          }
          qq(Eq)
        }))
      }
    }
    let mO = !1;

    function xO() {
      mO || (mO = !0, TY.RegisterExtension(lO, (qq => new OO(qq))))
    }
    xO();
    const AO = "KHR_materials_fuzz";

    function cO(qq, Eq) {
      const gq = new iq.d(Eq.name, Eq.ZJ());
      return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
    }
    class uO {
      constructor(qq) {
        this.name = AO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = qq
      }
      dispose() {
        for (const qq of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[qq].dispose()
        }
        this._mergedTexturesMap = {};
        for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[qq].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        if (gq instanceof eE) {
          const qq = [];
          if (gq.fuzzWeight > 0) {
            gq.fuzzWeightTexture && qq.push(gq.fuzzWeightTexture);
            let Eq = !1;
            if (gq.fuzzRoughnessTexture && (gq._useFuzzRoughnessFromTextureAlpha ? qq.push(gq.fuzzRoughnessTexture) : Eq = !0), gq.fuzzColorTexture && !Eq && qq.push(gq.fuzzColorTexture), Eq) {
              const Eq = function(qq) {
                const Eq = qq.fuzzColorTexture,
                  gq = Eq && Eq.getInternalTexture() ? Eq.getInternalTexture().uniqueId : "NoFuzzColor",
                  Yq = qq.fuzzRoughnessTexture;
                return `FuzzColor_${gq}_FuzzRoughness_${Yq&&Yq.getInternalTexture()?Yq.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(gq);
              if (!this._cachedInternalTexturesMap[Eq]) {
                const qq = await async function(qq) {
                  const Eq = qq.ZJ(),
                    gq = qq.fuzzColorTexture,
                    Yq = qq.fuzzRoughnessTexture;
                  return gq || Yq ? (await mg("FuzzTexture", cg(gq ? xg(gq, 0) : Ag(1), gq ? xg(gq, 1) : Ag(1), gq ? xg(gq, 2) : Ag(1), Yq ? xg(Yq, qq._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Ag(1)), Eq)).getInternalTexture() : null
                }(gq);
                qq && (this._cachedInternalTexturesMap[Eq] = qq)
              }
              this._cachedInternalTexturesMap[Eq] && (gq.fuzzColorTexture && (this._mergedTexturesMap[gq.fuzzColorTexture.uniqueId] = cO(this._cachedInternalTexturesMap[Eq], gq.fuzzColorTexture), qq.push(this._mergedTexturesMap[gq.fuzzColorTexture.uniqueId])), gq.fuzzRoughnessTexture && (this._mergedTexturesMap[gq.fuzzRoughnessTexture.uniqueId] = cO(this._cachedInternalTexturesMap[Eq], gq.fuzzRoughnessTexture), qq.push(this._mergedTexturesMap[gq.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return qq
        }
        return []
      }
      async postExportMaterialAsync(qq, Eq, gq) {
        return await new Promise((qq => {
          if (gq instanceof eE) {
            if (0 == gq.fuzzWeight) return void qq(Eq);
            this._wasUsed = !0, null == Eq.extensions && (Eq.extensions = {});
            const Yq = {
              fuzzFactor: gq.fuzzWeight,
              fuzzColorFactor: gq.fuzzColor.bYq(),
              fuzzRoughnessFactor: gq.fuzzRoughness
            };
            let lq, Oq;
            gq.fuzzWeightTexture && (Yq.fuzzTexture = this._exporter._materialExporter.getTextureInfo(gq.fuzzWeightTexture) ?? void 0), gq.fuzzColorTexture && (lq = this._mergedTexturesMap[gq.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[gq.fuzzColorTexture.uniqueId] : gq.fuzzColorTexture, Yq.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(lq) ?? void 0), gq.fuzzRoughnessTexture && (Oq = this._mergedTexturesMap[gq.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gq.fuzzRoughnessTexture.uniqueId] : gq.fuzzRoughnessTexture, Yq.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Oq) ?? void 0), null === Yq.fuzzColorTexture && null === Yq.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[AO] = Yq
          }
          qq(Eq)
        }))
      }
    }
    let BO = !1;

    function WO() {
      BO || (BO = !0, TY.RegisterExtension(AO, (qq => new uO(qq))))
    }
    WO();
    const NO = "KHR_materials_specular";
    class aO {
      constructor(qq) {
        this.name = NO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        return gq instanceof zl && this._isExtensionEnabled(gq) ? (gq.metallicReflectanceTexture && Yq.push(gq.metallicReflectanceTexture), gq.reflectanceTexture && Yq.push(gq.reflectanceTexture), Yq) : Yq
      }
      _isExtensionEnabled(qq) {
        return !qq.unlit && (void 0 != qq.metallicF0Factor && 1 != qq.metallicF0Factor || void 0 != qq.metallicReflectanceColor && !qq.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(qq))
      }
      _hasTexturesExtension(qq) {
        return null != qq.metallicReflectanceTexture || null != qq.reflectanceTexture
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          var Yq;
          if (gq instanceof zl && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
            const qq = this._exporter._materialExporter.getTextureInfo(gq.metallicReflectanceTexture) ?? void 0,
              Yq = this._exporter._materialExporter.getTextureInfo(gq.reflectanceTexture) ?? void 0,
              lq = {
                specularFactor: 1 == gq.metallicF0Factor ? void 0 : gq.metallicF0Factor,
                specularTexture: qq,
                specularColorFactor: gq.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : gq.metallicReflectanceColor.bYq(),
                specularColorTexture: Yq
              };
            this._hasTexturesExtension(gq) && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[NO] = lq
          } else if (gq instanceof eE) {
            Eq.extensions = Eq.extensions || {};
            const lq = this._exporter._materialExporter.getTextureInfo(gq.specularWeightTexture) ?? void 0,
              Oq = this._exporter._materialExporter.getTextureInfo(gq.specularColorTexture) ?? void 0,
              mq = 1 == gq.specularWeight ? void 0 : gq.specularWeight,
              xq = gq.specularColor.equalsFloats(1, 1, 1) ? void 0 : gq.specularColor.bYq();
            if (!Oq && !lq && void 0 === mq && void 0 === xq) return qq(Eq);
            this._wasUsed = !0;
            const Aq = {
                specularEdgeColorEnabled: !0
              },
              cq = {
                specularFactor: mq,
                specularTexture: lq,
                specularColorFactor: xq,
                specularColorTexture: Oq,
                extensions: {}
              };
            cq.extensions.EXT_materials_specular_edge_color = Aq, (Yq = this._exporter._glTF).extensionsUsed || (Yq.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (lq || Oq) && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[NO] = cq
          }
          qq(Eq)
        }))
      }
    }
    let VO = !1;

    function dO() {
      VO || (VO = !0, TY.RegisterExtension(NO, (qq => new aO(qq))))
    }
    dO();
    const jO = "KHR_materials_transmission";
    class HO {
      constructor(qq) {
        this.name = jO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof zl) {
          if (this._isExtensionEnabled(gq)) return gq.subSurface.refractionIntensityTexture && gq.subSurface.useGltfStyleTextures && Yq.push(gq.subSurface.refractionIntensityTexture), Yq
        } else gq instanceof eE && (gq.transmissionWeight > 0 && gq.transmissionWeightTexture && (Yq.push(gq.transmissionWeightTexture), gq.transmissionColorTexture && Yq.push(gq.transmissionColorTexture)), gq.subsurfaceWeight > 0 && gq.subsurfaceWeightTexture && Yq.push(gq.subsurfaceWeightTexture));
        return Yq
      }
      _isExtensionEnabled(qq) {
        if (qq instanceof eE && !qq.unlit) return qq.transmissionWeight > 0 || qq.subsurfaceWeight > 0;
        if (qq instanceof zl && !qq.unlit) {
          const Eq = qq.subSurface;
          return Eq.isRefractionEnabled && void 0 != Eq.refractionIntensity && 0 != Eq.refractionIntensity || null != Eq.refractionIntensityTexture && Eq.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(qq, Eq, gq) {
        if (!this._isExtensionEnabled(gq)) return Eq;
        if (gq instanceof zl) {
          this._wasUsed = !0;
          const Yq = gq.subSurface,
            lq = {
              transmissionFactor: 0 === Yq.refractionIntensity ? void 0 : Yq.refractionIntensity
            };
          if (Yq.refractionIntensityTexture)
            if (Yq.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(gq);
              const qq = this._exporter._materialExporter.getTextureInfo(Yq.refractionIntensityTexture);
              qq && (lq.transmissionTexture = qq)
            } else nq.b.Warn(`${qq}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Eq.extensions || (Eq.extensions = {}), Eq.extensions[jO] = lq
        } else if (gq instanceof eE) {
          this._wasUsed = !0;
          const qq = {
            transmissionFactor: (1 - gq.transmissionWeight) * gq.subsurfaceWeight + gq.transmissionWeight
          };
          if (gq.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gq);
            const Eq = this._exporter._materialExporter.getTextureInfo(gq.transmissionWeightTexture);
            Eq && (qq.transmissionTexture = Eq)
          } else if (gq.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gq);
            const Eq = this._exporter._materialExporter.getTextureInfo(gq.subsurfaceWeightTexture);
            Eq && (qq.transmissionTexture = Eq)
          }
          if (0 == gq.transmissionDepth && (!gq.transmissionColor.equals(sq.d.White()) || gq.transmissionColorTexture) && Eq.pbrMetallicRoughness && (Eq.pbrMetallicRoughness.baseColorFactor || (Eq.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Eq.pbrMetallicRoughness.baseColorFactor[0] *= gq.transmissionColor.r, Eq.pbrMetallicRoughness.baseColorFactor[1] *= gq.transmissionColor.g, Eq.pbrMetallicRoughness.baseColorFactor[2] *= gq.transmissionColor.b, gq.transmissionColorTexture && !Eq.pbrMetallicRoughness.baseColorTexture)) {
            const qq = this._exporter._materialExporter.getTextureInfo(gq.transmissionColorTexture);
            qq && (Eq.pbrMetallicRoughness.baseColorTexture = qq, this._exporter._materialNeedsUVsSet.add(gq))
          }
          Eq.extensions || (Eq.extensions = {}), Eq.extensions[jO] = qq
        }
        return Eq
      }
    }
    let oO = !1;

    function PO() {
      oO || (oO = !0, TY.RegisterExtension(jO, (qq => new HO(qq))))
    }
    PO();
    var QO = gq(40010);
    const yO = "KHR_materials_unlit";
    class tO {
      constructor() {
        this.name = yO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          let Yq = !1;
          gq instanceof zl ? Yq = gq.unlit : gq instanceof QO.g && (Yq = gq.disableLighting), Yq && (this._wasUsed = !0, null == Eq.extensions && (Eq.extensions = {}), Eq.extensions[yO] = {}), qq(Eq)
        }))
      }
    }
    let rO = !1;

    function vO() {
      rO || (rO = !0, TY.RegisterExtension(yO, (() => new tO)))
    }
    vO();
    const hO = "KHR_materials_volume";
    class nO {
      constructor(qq) {
        this.name = hO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof zl) {
          if (this._isExtensionEnabled(gq)) return gq.subSurface.thicknessTexture && Yq.push(gq.subSurface.thicknessTexture), Yq
        } else gq instanceof eE && (gq.transmissionWeight > 0 || gq.subsurfaceWeight > 0) && gq.geometryThicknessTexture && Yq.push(gq.geometryThicknessTexture);
        return Yq
      }
      _isExtensionEnabled(qq) {
        if (qq.unlit) return !1;
        const Eq = qq.subSurface;
        return !(!Eq.isRefractionEnabled && !Eq.isTranslucencyEnabled) && (void 0 != Eq.maximumThickness && 0 != Eq.maximumThickness || void 0 != Eq.tintColorAtDistance && Eq.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Eq.tintColor && Eq.tintColor != sq.d.White() || this._hasTexturesExtension(qq))
      }
      _hasTexturesExtension(qq) {
        return null != qq.subSurface.thicknessTexture
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof zl && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            const qq = gq.subSurface,
              Yq = {
                thicknessFactor: 0 == qq.maximumThickness ? void 0 : qq.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(qq.thicknessTexture) ?? void 0,
                attenuationDistance: qq.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : qq.tintColorAtDistance,
                attenuationColor: qq.tintColor.equalsFloats(1, 1, 1) ? void 0 : qq.tintColor.bYq()
              };
            this._hasTexturesExtension(gq) && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions = Eq.extensions || {}, Eq.extensions[hO] = Yq
          } else if (gq instanceof eE) {
            const qq = gq.transmissionWeight > 0 && !gq.geometryThinWalled,
              Yq = gq.subsurfaceWeight > 0 && !gq.geometryThinWalled;
            if (qq || Yq) {
              this._wasUsed = !0;
              const lq = gq.geometryThickness,
                Oq = this._exporter._materialExporter.getTextureInfo(gq.geometryThicknessTexture) ?? void 0;
              let mq;
              Oq && this._exporter._materialNeedsUVsSet.add(gq);
              const xq = sq.d.White().bYq();
              if (qq && gq.transmissionDepth > 0) {
                const qq = 1 / gq.transmissionDepth;
                let Eq = new Gq.q(-Math.log(gq.transmissionColor.r) * qq, -Math.log(gq.transmissionColor.g) * qq, -Math.log(gq.transmissionColor.b) * qq);
                const Yq = new Gq.q(gq.transmissionScatter.r * qq, gq.transmissionScatter.g * qq, gq.transmissionScatter.b * qq),
                  lq = Eq.subtract(Yq),
                  Oq = Math.min(lq.x, lq.y, lq.z);
                Oq < 0 && (lq.x = lq.x - Oq, lq.y = lq.y - Oq, lq.z = lq.z - Oq), Eq = lq.add(Yq);
                mq = 1 / Math.max(Eq.x, Eq.y, Eq.z), xq[0] = Math.exp(-Eq.x * mq), xq[1] = Math.exp(-Eq.y * mq), xq[2] = Math.exp(-Eq.z * mq)
              } else mq = Number.MAX_VALUE, xq[0] = 1, xq[1] = 1, xq[2] = 1;
              let Aq = 1;
              const cq = sq.d.White().bYq();
              if (Yq) {
                const qq = gq.subsurfaceRadius,
                  Eq = gq.subsurfaceRadiusScale,
                  Yq = new Gq.q(Eq.r, Eq.g, Eq.b).multiplyByFloats(qq, qq, qq),
                  lq = new Gq.q(1 / Math.max(Yq.x, 1e-6), 1 / Math.max(Yq.y, 1e-6), 1 / Math.max(Yq.z, 1e-6));
                Aq = 1 / Math.max(lq.x, lq.y, lq.z), cq[0] = Math.exp(-lq.x * Aq), cq[1] = Math.exp(-lq.y * Aq), cq[2] = Math.exp(-lq.z * Aq)
              }
              const uq = (1 - gq.transmissionWeight) * gq.subsurfaceWeight,
                Bq = uq + gq.transmissionWeight,
                Wq = 1 / Math.max(Bq, 1e-6),
                Nq = gq.transmissionWeight * Wq,
                aq = uq * Wq,
                Vq = xq.map(((qq, Eq) => qq * Nq + cq[Eq] * aq)),
                dq = {
                  thicknessFactor: lq,
                  thicknessTexture: Oq,
                  attenuationDistance: mq * Nq + Aq * aq,
                  attenuationColor: Vq
                };
              Eq.extensions = Eq.extensions || {}, Eq.extensions[hO] = dq
            }
          }
          qq(Eq)
        }))
      }
    }
    let bO = !1;

    function iO() {
      bO || (bO = !0, TY.RegisterExtension(hO, (qq => new nO(qq))))
    }
    iO();
    const ZO = "KHR_materials_volume_scatter";
    class fO {
      constructor(qq) {
        this.name = ZO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        return gq instanceof eE && (gq.transmissionWeight > 0 && gq.transmissionScatterTexture && Yq.push(gq.transmissionScatterTexture), gq.subsurfaceWeight > 0 && gq.subsurfaceColorTexture && Yq.push(gq.subsurfaceColorTexture)), Yq
      }
      _isExtensionEnabled(qq) {
        if (qq.unlit) return !1;
        const Eq = qq.transmissionWeight > 0 && !qq.geometryThinWalled && qq.transmissionDepth > 0 && !qq.transmissionScatter.equals(sq.d.Black()),
          gq = qq.subsurfaceWeight > 0 && !qq.geometryThinWalled;
        return !(!Eq && !gq)
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          if (gq instanceof eE && this._isExtensionEnabled(gq)) {
            this._wasUsed = !0;
            let qq = Gq.q.Zero(),
              Yq = 0;
            if (gq.transmissionWeight > 0) {
              qq = function(qq) {
                const Eq = new Gq.q(Math.sqrt(1 - qq.x), Math.sqrt(1 - qq.y), Math.sqrt(1 - qq.z)),
                  gq = new Gq.q(1, 1, 1),
                  Yq = gq.subtract(Eq),
                  lq = gq.subtract(new Gq.q(.139, .139, .139).multiplyInPlace(Eq)),
                  Oq = gq.add(new Gq.q(1.17, 1.17, 1.17).multiplyInPlace(Eq));
                return Yq.multiplyInPlace(lq).divideInPlace(Oq)
              }(new Gq.q(gq.transmissionScatter.r, gq.transmissionScatter.g, gq.transmissionScatter.b)), Yq = gq.transmissionScatterAnisotropy
            }
            const lq = Gq.q.Zero();
            let Oq = 0;
            gq.subsurfaceWeight > 0 && (lq.set(gq.subsurfaceColor.r, gq.subsurfaceColor.g, gq.subsurfaceColor.b), Oq = gq.subsurfaceScatterAnisotropy);
            const mq = (1 - gq.transmissionWeight) * gq.subsurfaceWeight,
              xq = mq + gq.transmissionWeight,
              Aq = 1 / Math.max(xq, 1e-6),
              cq = gq.transmissionWeight * Aq,
              uq = mq * Aq,
              Bq = {
                multiscatterColorFactor: qq.multiplyByFloats(cq, cq, cq).addInPlace(lq.multiplyByFloats(uq, uq, uq)).bYq(),
                scatterAnisotropy: Yq * cq + Oq * uq
              };
            if (gq.subsurfaceWeight > 0 && gq.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(gq);
              const qq = this._exporter._materialExporter.getTextureInfo(gq.subsurfaceColorTexture);
              qq && (Bq.multiscatterColorTexture = qq)
            } else if (gq.transmissionWeight > 0 && gq.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(gq);
              const qq = this._exporter._materialExporter.getTextureInfo(gq.transmissionScatterTexture);
              qq && (Bq.multiscatterColorTexture = qq)
            }
            Eq.extensions = Eq.extensions || {}, Eq.extensions[ZO] = Bq
          }
          qq(Eq)
        }))
      }
    }
    let MO = !1;

    function TO() {
      MO || (MO = !0, TY.RegisterExtension(ZO, (qq => new fO(qq)), 101))
    }
    TO();
    const zO = "KHR_materials_diffuse_roughness";
    class SO {
      constructor(qq) {
        this.name = zO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
        const Yq = [];
        if (gq instanceof yE) {
          if (gq._baseDiffuseRoughness) return gq._baseDiffuseRoughnessTexture && Yq.push(gq._baseDiffuseRoughnessTexture), Yq
        } else if (gq instanceof eE && gq.baseDiffuseRoughness) return gq.baseDiffuseRoughnessTexture && Yq.push(gq.baseDiffuseRoughnessTexture), Yq;
        return []
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          let Yq = null,
            lq = null;
          if (gq instanceof yE ? (Yq = gq._baseDiffuseRoughness, lq = gq._baseDiffuseRoughnessTexture) : gq instanceof eE && (Yq = gq.baseDiffuseRoughness, lq = gq.baseDiffuseRoughnessTexture), !Yq) return void qq(Eq);
          this._wasUsed = !0, Eq.extensions = Eq.extensions || {};
          const Oq = {
            diffuseRoughnessFactor: Yq,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(lq) ?? void 0
          };
          null !== Oq.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(gq), Eq.extensions[zO] = Oq, qq(Eq)
        }))
      }
    }
    let pO = !1;

    function GO() {
      pO || (pO = !0, TY.RegisterExtension(zO, (qq => new SO(qq))))
    }
    GO();
    const LO = "KHR_materials_openpbr";
    class JO {
      constructor() {
        this.name = LO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(qq, Eq, gq) {
        return new Promise((qq => {
          gq instanceof eE && (this._wasUsed = !0, Eq.extensions = Eq.extensions || {}, Eq.extensions[LO] = {}), qq(Eq)
        }))
      }
    }
    let kO = !1;

    function RO() {
      kO || (kO = !0, TY.RegisterExtension(LO, (() => new JO)))
    }
    RO();
    const UO = "KHR_texture_transform";
    class FO {
      constructor() {
        this.name = UO, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(qq, Eq, gq) {
        if (gq.ZJ() || rE.f.Warn(`${qq}: "scene" is not defined for Babylon texture ${gq.name}!`), (0 !== gq.uAng || 0 !== gq.vAng) && (rE.f.Warn(`${qq}: Texture ${gq.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== gq.uRotationCenter || 0 !== gq.vRotationCenter)) return;
        const Yq = {};
        let lq = !1;
        if (0 === gq.uOffset && 0 === gq.vOffset || (Yq.offset = [gq.uOffset, gq.vOffset], lq = !0), 1 === gq.uScale && 1 === gq.vScale || (Yq.scale = [gq.uScale, gq.vScale], lq = !0), 0 !== gq.wAng) {
          if (0 !== gq.uRotationCenter || 0 !== gq.vRotationCenter) {
            if (gq.homogeneousRotationInUVTransform && gq.uScale !== gq.vScale) return void rE.f.Warn(`${qq}: Texture ${gq.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${UO}.`);
            rE.f.Warn(`${qq}: Texture ${gq.name} with non-origin rotation center will be exported using an adjusted offset with ${UO}.`), Yq.offset = function(qq) {
              const {
                uOffset: Eq,
                vOffset: gq,
                uRotationCenter: Yq,
                vRotationCenter: lq,
                uScale: Oq,
                vScale: mq,
                wAng: xq
              } = qq, Aq = Math.cos(xq), cq = Math.sin(xq), uq = Yq * Oq, Bq = lq * mq;
              return [Eq + (uq * (1 - Aq) + Bq * cq), gq + (Bq * (1 - Aq) - uq * cq)]
            }(gq)
          }
          Yq.rotation = -gq.wAng, lq = !0
        }
        0 !== gq.coordinatesIndex && (Yq.texCoord = gq.coordinatesIndex, lq = !0), lq && (this._wasUsed = !0, Eq.extensions || (Eq.extensions = {}), Eq.extensions[UO] = Yq)
      }
    }
    let sO = !1;

    function XO() {
      sO || (sO = !0, TY.RegisterExtension(UO, (() => new FO)))
    }
    XO();
    var wO = gq(39799);
    const KO = "KHR_texture_basisu";
    class CO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(qq) {
        this.name = KO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      postExportTexture(qq, Eq) {
        const gq = this._exporter._textures[Eq.index],
          Yq = gq.source;
        if (void 0 === Yq) return;
        const lq = this._exporter._images[Yq];
        "image/ktx2" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[KO] = {
          source: Yq
        }, this._wasUsed = !0)
      }
    }
    let IO = !1;

    function eO() {
      IO || (IO = !0, TY.RegisterExtension(KO, (qq => new CO(qq))))
    }
    eO();
    const DO = "EXT_texture_webp";
    class qm {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(qq) {
        this.name = DO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      postExportTexture(qq, Eq) {
        const gq = this._exporter._textures[Eq.index],
          Yq = gq.source;
        if (void 0 === Yq) return;
        const lq = this._exporter._images[Yq];
        "image/webp" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[DO] = {
          source: Yq
        }, this._wasUsed = !0)
      }
    }
    let Em = !1;

    function gm() {
      Em || (Em = !0, TY.RegisterExtension(DO, (qq => new qm(qq))))
    }
    gm();
    const Ym = "EXT_texture_avif";
    class lm {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(qq) {
        this.name = Ym, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
      }
      dispose() {}
      postExportTexture(qq, Eq) {
        const gq = this._exporter._textures[Eq.index],
          Yq = gq.source;
        if (void 0 === Yq) return;
        const lq = this._exporter._images[Yq];
        "image/avif" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[Ym] = {
          source: Yq
        }, this._wasUsed = !0)
      }
    }
    let Om = !1;

    function mm() {
      Om || (Om = !0, TY.RegisterExtension(Ym, (qq => new lm(qq))))
    }
    mm();
    class xm {
      static CreateSTL(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const cq = function(qq, Eq, gq) {
            const lq = [3 * qq[gq], 3 * qq[gq + 1], 3 * qq[gq + 2]],
              Oq = [new Yq.Na(Eq[lq[0]], Eq[lq[0] + 2], Eq[lq[0] + 1]), new Yq.Na(Eq[lq[1]], Eq[lq[1] + 2], Eq[lq[1] + 1]), new Yq.Na(Eq[lq[2]], Eq[lq[2] + 2], Eq[lq[2] + 1])],
              mq = Oq[0].subtract(Oq[1]),
              xq = Oq[2].subtract(Oq[1]);
            return {
              v: Oq,
              n: Yq.Na.Cross(xq, mq).normalize()
            }
          },
          Bq = function(qq, Eq, gq, Yq) {
            return Eq = Wq(qq, Eq, gq.x, Yq), Eq = Wq(qq, Eq, gq.y, Yq), Wq(qq, Eq, gq.z, Yq)
          },
          Wq = function(qq, Eq, gq, Yq) {
            return qq.setFloat32(Eq, gq, Yq), Eq + 4
          },
          aq = function(qq) {
            if (xq) {
              let Eq = qq;
              qq instanceof Nq.c && (Eq = qq.Plq);
              const gq = Eq.getVerticesData(uq.f.PositionKind, !0, !0);
              if (!gq) return [];
              const lq = Yq.Na.Zero();
              let Oq;
              for (Oq = 0; Oq < gq.length; Oq += 3) Yq.Na.TransformCoordinatesFromFloatsToRef(gq[Oq], gq[Oq + 1], gq[Oq + 2], qq.computeWorldMatrix(!0), lq).toArray(gq, Oq);
              return gq
            }
            return qq.getVerticesData(uq.f.PositionKind) || []
          };
        xq && (mq = !0);
        let Vq = "",
          dq = 0,
          jq = 0;
        if (lq) {
          for (let gq = 0; gq < qq.length; gq++) {
            const Eq = qq[gq].iYq();
            dq += Eq ? Eq.length / 3 : 0
          }
          const Eq = new ArrayBuffer(84 + 50 * dq);
          Vq = new DataView(Eq), jq += 80, Vq.setUint32(jq, dq, Oq), jq += 4
        } else Aq || (Vq = "solid stlmesh\r\n");
        for (let Yq = 0; Yq < qq.length; Yq++) {
          const Eq = qq[Yq];
          !lq && Aq && (Vq += "solid " + Eq.name + "\r\n"), !mq && Eq instanceof cY.c && Eq.bakeCurrentTransformIntoVertices();
          const gq = aq(Eq),
            xq = Eq.iYq() || [];
          for (let qq = 0; qq < xq.length; qq += 3) {
            const Eq = cq(xq, gq, qq);
            lq ? (jq = Bq(Vq, jq, Eq.n, Oq), jq = Bq(Vq, jq, Eq.v[0], Oq), jq = Bq(Vq, jq, Eq.v[1], Oq), jq = Bq(Vq, jq, Eq.v[2], Oq), jq += 2) : (Vq += "\tfacet normal " + Eq.n.x + " " + Eq.n.y + " " + Eq.n.z + "\r\n", Vq += "\t\touter loop\r\n", Vq += "\t\t\tvertex " + Eq.v[0].x + " " + Eq.v[0].y + " " + Eq.v[0].z + "\r\n", Vq += "\t\t\tvertex " + Eq.v[1].x + " " + Eq.v[1].y + " " + Eq.v[1].z + "\r\n", Vq += "\t\t\tvertex " + Eq.v[2].x + " " + Eq.v[2].y + " " + Eq.v[2].z + "\r\n", Vq += "\t\tendloop\r\n", Vq += "\tendfacet\r\n")
          }!lq && Aq && (Vq += "endsolid " + name + "\r\n")
        }
        if (lq || Aq || (Vq += "endsolid stlmesh"), Eq) {
          const qq = document.createElement("a"),
            Eq = new Blob([Vq], {
              type: "application/octet-stream"
            });
          qq.href = window.URL.createObjectURL(Eq), qq.download = gq + ".stl", qq.click()
        }
        return Vq
      }
    }

    function Am(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const lq = [];
      for (let Oq = 0; Oq < qq.length / gq; Oq++) {
        const mq = qq[Oq * gq] * (Yq ? -1 : 1),
          xq = qq[Oq * gq + 1],
          Aq = qq[Oq * gq + 2];
        lq.push(`(${mq.toPrecision(Eq.precision)}, ${xq.toPrecision(Eq.precision)}, ${Aq.toPrecision(Eq.precision)})`)
      }
      return lq.join(", ")
    }

    function cm(qq, Eq) {
      const gq = [];
      for (let Yq = 0; Yq < qq.length / 2; Yq++) {
        const lq = qq[2 * Yq],
          Oq = qq[2 * Yq + 1];
        gq.push(`(${lq.toPrecision(Eq.precision)}, ${(1-Oq).toPrecision(Eq.precision)})`)
      }
      return gq.join(", ")
    }

    function um(qq, Eq, gq, Yq) {
      const lq = qq.getVerticesData(uq.f.PositionKind),
        Oq = qq.getVerticesData(uq.f.NormalKind);
      if (lq && Oq) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${gq}"\n\t\tint[] faceVertexCounts = [${function(qq){const Eq=qq.iYq()?.length?qq.getTotalIndices():qq.getTotalVertices();return Array(Eq/3).fill(3).join(", ")}(qq)}]\n\t\tint[] faceVertexIndices = [${function(qq){const Eq=qq.iYq(),gq=Eq?.length??qq.getTotalVertices(),Yq=[];if(null!==Eq)for(let lq=0;lq<gq;lq++)Yq.push(Eq[lq]);else for(let lq=0;lq<gq;lq++)Yq.push(lq);return Yq.join(", ")}(qq)}]\n\t\tnormal3f[] normals = [${Am(Oq,Eq,void 0,Yq)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Am(lq,Eq,void 0,Yq)}]\n        ${function(qq,Eq){let gq="";for(let lq=0;lq<4;lq++){const Yq=lq>0?lq:"",Oq=qq.getVerticesData(uq.f.UVKind+(Yq?Yq+1:""));Oq&&(gq+=`\n\t\ttexCoord2f[] primvars:st${Yq} = [${cm(Oq,Eq)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Yq=qq.getVerticesData(uq.f.ColorKind);return Yq&&(gq+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Am(Yq, Eq, Yq.length / qq.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),gq}(qq,Eq)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Bm(qq, Eq, gq, Yq) {
      return `\n        def "Geometry"\n        {\n        ${um(qq,Eq,gq,Yq)}\n        }\n        `
    }

    function Wm(qq) {
      let Eq = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Eq += qq, fflate.strToU8(Eq)
    }

    function Nm(qq) {
      const Eq = qq.m;
      return `( ${am(Eq,0)}, ${am(Eq,4)}, ${am(Eq,8)}, ${am(Eq,12)} )`
    }

    function am(qq, Eq) {
      return `(${qq[Eq+0]}, ${qq[Eq+1]}, ${qq[Eq+2]}, ${qq[Eq+3]})`
    }

    function Vm(qq, Eq) {
      const gq = "Object_" + qq.uniqueId,
        Yq = Nm(Eq);
      return `def Xform "${gq}" (\n\tprepend references = @./geometries/Geometry_${qq.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Yq}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${qq.material.uniqueId}>\n}\n\n`
    }

    function dm(qq) {
      switch (qq) {
        case tq.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case tq.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case tq.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function jm(qq) {
      return `(${qq.x}, ${qq.y})`
    }

    function Hm(qq) {
      return `(${qq.r}, ${qq.g}, ${qq.b})`
    }

    function om(qq) {
      return "image/jpeg" === qq || "image/png" === qq
    }

    function Pm(qq, Eq, gq, lq, Oq, mq) {
      const xq = qq.getInternalTexture().uniqueId + "_" + qq.invertY,
        cq = qq.mimeType || (0, Aq.d)(qq.getInternalTexture()?.url ?? ""),
        uq = om(cq) ? cq : "image/png",
        Bq = "image/jpeg" === uq ? "jpg" : "png";
      Oq[xq] = {
        texture: qq,
        mimeType: uq,
        ext: Bq
      };
      const Wq = qq.coordinatesIndex > 0 ? "st" + qq.coordinatesIndex : "st",
        Nq = new Yq.Vector2(qq.uScale, qq.vScale),
        aq = new Yq.Vector2(qq.uOffset, qq.vOffset),
        Vq = qq.wAng,
        dq = Math.sin(Vq),
        jq = Math.cos(Vq);
      return aq.y = 1 - aq.y - Nq.y, aq.x += dq * Nq.x, aq.y += (1 - jq) * Nq.y, `\n    def Shader "PrimvarReader_${gq}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Wq}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${gq}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Eq.uniqueId}/PrimvarReader_${gq}.outputs:result>\n        float inputs:rotation = ${(Vq*(180/Math.PI)).toFixed(mq.precision)}\n        float2 inputs:scale = ${jm(Nq)}\n        float2 inputs:translation = ${jm(aq)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${qq.uniqueId}_${gq}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${xq}.${Bq}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Eq.uniqueId}/Transform2d_${gq}.outputs:result>\n        ${lq?"float4 inputs:scale = "+function(qq){return`(${qq.r}, ${qq.g}, ${qq.b}, 1.0)`}(lq):""}\n        token inputs:sourceColorSpace = "${qq.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${dm(qq.wrapU)}"\n        token inputs:wrapT = "${dm(qq.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Eq.needAlphaBlending()||Eq.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Qm(qq, Eq, gq) {
      const Yq = "\t\t\t",
        lq = [],
        Oq = [],
        {
          diffuseMap: mq,
          diffuse: xq,
          alphaCutOff: Aq,
          emissiveMap: cq,
          emissive: uq,
          normalMap: Bq,
          roughnessMap: Wq,
          roughnessChannel: Nq,
          roughness: aq,
          metalnessMap: Vq,
          metalnessChannel: jq,
          metalness: Hq,
          aoMap: oq,
          aoMapChannel: Pq,
          aoMapIntensity: Qq,
          alphaMap: yq,
          ior: tq,
          clearCoatEnabled: rq,
          clearCoat: vq,
          clearCoatMap: hq,
          clearCoatRoughness: nq,
          clearCoatRoughnessMap: bq
        } = function(qq) {
          const Eq = {
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
          return qq instanceof OY.StandardMaterial ? {
            ...Eq,
            diffuseMap: qq.diffuseTexture,
            diffuse: qq.diffuseColor,
            alphaCutOff: qq.alphaCutOff,
            emissiveMap: qq.emissiveTexture,
            emissive: qq.emissiveColor,
            roughness: 1,
            alphaMap: qq.opacityTexture
          } : qq instanceof yE ? {
            ...Eq,
            diffuseMap: qq._albedoTexture,
            diffuse: qq._albedoColor,
            alphaCutOff: qq._alphaCutOff,
            emissiveMap: qq._emissiveTexture,
            emissive: qq._emissiveColor,
            normalMap: qq._bumpTexture,
            roughnessMap: qq._metallicTexture,
            roughnessChannel: qq._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: qq._roughness ?? 1,
            metalnessMap: qq._metallicTexture,
            metalnessChannel: qq._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: qq._metallic ?? 0,
            aoMap: qq._ambientTexture,
            aoMapChannel: qq._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: qq._ambientTextureStrength,
            alphaMap: qq._opacityTexture,
            ior: qq.subSurface.indexOfRefraction,
            clearCoatEnabled: qq.clearCoat.isEnabled,
            clearCoat: qq.clearCoat.intensity,
            clearCoatMap: qq.clearCoat.texture,
            clearCoatRoughness: qq.clearCoat.roughness,
            clearCoatRoughnessMap: qq.clearCoat.useRoughnessFromMainTexture ? qq.clearCoat.texture : qq.clearCoat.textureRoughness
          } : Eq
        }(qq);
      return null !== mq ? (lq.push(`${Yq}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${mq.uniqueId}_diffuse.outputs:rgb>`), qq.needAlphaBlending() ? lq.push(`${Yq}float inputs:opacity.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${mq.uniqueId}_diffuse.outputs:a>`) : qq.needAlphaTesting() && (lq.push(`${Yq}float inputs:opacity.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${mq.uniqueId}_diffuse.outputs:a>`), lq.push(`${Yq}float inputs:opacityThreshold = ${Aq}`)), Oq.push(Pm(mq, qq, "diffuse", xq, Eq, gq))) : lq.push(`${Yq}color3f inputs:diffuseColor = ${Hm(xq||dq.Color3.White())}`), null !== cq ? (lq.push(`${Yq}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${cq.uniqueId}_emissive.outputs:rgb>`), Oq.push(Pm(cq, qq, "emissive", uq, Eq, gq))) : uq && uq.toLuminance() > 0 && lq.push(`${Yq}color3f inputs:emissiveColor = ${Hm(uq)}`), null !== Bq && (lq.push(`${Yq}normal3f inputs:normal.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${Bq.uniqueId}_normal.outputs:rgb>`), Oq.push(Pm(Bq, qq, "normal", null, Eq, gq))), null !== oq && (lq.push(`${Yq}float inputs:occlusion.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${oq.uniqueId}_occlusion.outputs:${Pq}>`), Oq.push(Pm(oq, qq, "occlusion", new dq.Color3(Qq, Qq, Qq), Eq, gq))), null !== Wq ? (lq.push(`${Yq}float inputs:roughness.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${Wq.uniqueId}_roughness.outputs:${Nq}>`), Oq.push(Pm(Wq, qq, "roughness", new dq.Color3(aq, aq, aq), Eq, gq))) : lq.push(`${Yq}float inputs:roughness = ${aq}`), null !== Vq ? (lq.push(`${Yq}float inputs:metallic.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${Vq.uniqueId}_metallic.outputs:${jq}>`), Oq.push(Pm(Vq, qq, "metallic", new dq.Color3(Hq, Hq, Hq), Eq, gq))) : lq.push(`${Yq}float inputs:metallic = ${Hq}`), null !== yq ? (lq.push(`${Yq}float inputs:opacity.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${yq.uniqueId}_opacity.outputs:r>`), lq.push(`${Yq}float inputs:opacityThreshold = 0.0001`), Oq.push(Pm(yq, qq, "opacity", null, Eq, gq))) : lq.push(`${Yq}float inputs:opacity = ${qq.alpha}`), rq && (null !== hq ? (lq.push(`${Yq}float inputs:clearcoat.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${hq.uniqueId}_clearcoat.outputs:r>`), Oq.push(Pm(hq, qq, "clearcoat", new dq.Color3(vq, vq, vq), Eq, gq))) : lq.push(`${Yq}float inputs:clearcoat = ${vq}`), null !== bq ? (lq.push(`${Yq}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${qq.uniqueId}/Texture_${bq.uniqueId}_clearcoatRoughness.outputs:g>`), Oq.push(Pm(bq, qq, "clearcoatRoughness", new dq.Color3(nq, nq, nq), Eq, gq))) : lq.push(`${Yq}float inputs:clearcoatRoughness = ${nq}`)), lq.push(`${Yq}float inputs:ior = ${tq}`), `\n\tdef Material "Material_${qq.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${lq.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${qq.uniqueId}/PreviewSurface.outputs:surface>\n\n${Oq.join("\n")}\n\n\t}\n`
    }

    function ym(qq) {
      qq.computeWorldMatrix(!0);
      const Eq = qq.getWorldMatrix().clone(),
        gq = qq.ZJ().useRightHandedSystem;
      let Yq = qq.material?._getEffectiveOrientation(qq) ?? qq.sideOrientation,
        mq = !gq,
        xq = qq.parent;
      for (; xq;) {
        if (zg(xq, gq) && null === xq.parent) {
          gq || (Eq.multiplyToRef(xq.getWorldMatrix().invert(), Eq), Yq = Yq === Oq.e.ClockWiseSideOrientation ? Oq.e.CounterClockWiseSideOrientation : Oq.e.ClockWiseSideOrientation), mq = !1;
          break
        }
        xq = xq.parent
      }
      return Eq.determinant() < 0 && lq.Tools.Warn(`Mesh ${qq.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Eq,
        windingOrder: Yq === Oq.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: mq
      }
    }
    async function tm(qq, Eq, gq) {
      const Oq = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Eq
      };
      "undefined" === typeof fflate && await lq.Tools.LoadScriptAsync(Oq.fflateUrl);
      const mq = {};
      mq[Oq.modelFileName] = null;
      let xq = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      xq += function(qq) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===qq.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${qq.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${qq.planeAnchoringAlignment}"`:""}\n            `
      }(Oq);
      const Aq = {};
      for (const Yq of qq.meshes) {
        if (0 === Yq.getTotalVertices()) continue;
        const qq = Yq,
          Eq = qq.geometry,
          cq = qq.material;
        if (!cq || !Eq || gq && !gq(qq)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(cq.getClassName())) {
          const gq = "geometries/Geometry_" + Eq.uniqueId + ".usda",
            {
              matrix: Yq,
              windingOrder: lq,
              convertToRightHanded: uq
            } = ym(qq);
          if (!(gq in mq)) {
            const qq = Bm(Eq, Oq, lq, uq);
            mq[gq] = Wm(qq)
          }
          cq.uniqueId in Aq || (Aq[cq.uniqueId] = cq), xq += Vm(qq, Yq)
        } else lq.Tools.Warn("USDZExportAsync does not support this material type: " + cq.getClassName())
      }
      qq.activeCamera && Oq.exportCamera && (xq += function(qq, Eq) {
        const gq = "Camera_" + qq.uniqueId,
          lq = Nm(Yq.Matrix.RotationY(Math.PI).multiply(qq.getWorldMatrix()));
        if (qq.mode === tq.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${gq}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${lq}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${qq.minZ.toPrecision(Eq.precision)}, ${qq.maxZ.toPrecision(Eq.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(qq.orthoLeft||1)+Math.abs(qq.orthoRight||1))).toPrecision(Eq.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(qq.orthoTop||1)+Math.abs(qq.orthoBottom||1))).toPrecision(Eq.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Yq = qq.Ba().getAspectRatio(qq),
            Oq = Eq.cameraSensorWidth || 35;
          return `def Camera "${gq}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${lq}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${qq.minZ.toPrecision(Eq.precision)}, ${qq.maxZ.toPrecision(Eq.precision)})\n\t\t\tfloat focalLength = ${(Oq/(2*Math.tan(.5*qq.fov))).toPrecision(Eq.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Oq*Yq).toPrecision(Eq.precision)}\n\t\t\tfloat verticalAperture = ${(Oq/Yq).toPrecision(Eq.precision)}            \n\t\t}\n\t\n\t`
        }
      }(qq.activeCamera, Oq)), xq += "\n            }\n        }";
      const cq = {};
      xq += function(qq, Eq, gq) {
        const Yq = [];
        for (const lq in qq) {
          const Oq = qq[lq];
          Yq.push(Qm(Oq, Eq, gq))
        }
        return `\n    def "Materials"\n{\n${Yq.join("")}\n}\n\n`
      }(Aq, cq, Oq), xq += "\n    }", mq[Oq.modelFileName] = fflate.strToU8(xq);
      for (const Yq in cq) {
        const {
          texture: qq,
          ext: Eq,
          mimeType: gq
        } = cq[Yq], lq = await jg(qq);
        if (lq && om(lq.mimeType) && lq.mimeType === gq) mq[`textures/Texture_${Yq}.${Eq}`] = new Uint8Array(lq.data);
        else {
          const lq = qq.getSize(),
            Oq = await (0, Pq.g)(qq),
            xq = await rq.DumpTools.DumpDataAsync(lq.width, lq.height, Oq, gq, void 0, !1, !0);
          mq[`textures/Texture_${Yq}.${Eq}`] = new Uint8Array(xq).slice()
        }
      }
      let uq = 0;
      for (const Yq in mq) {
        const qq = mq[Yq];
        if (!qq) continue;
        uq += 34 + Yq.length;
        const Eq = 63 & uq;
        if (4 !== Eq) {
          const gq = new Uint8Array(64 - Eq);
          mq[Yq] = [qq, {
            extra: {
              12345: gq
            }
          }]
        }
        uq = qq.length
      }
      return fflate.zipSync(mq, {
        level: 0
      })
    }
    var rm = gq(40851);
    class hm {
      static Export(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (!qq || 0 === qq.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Yq = Eq;
        Eq && 0 !== Eq.length || (Yq = qq.animations.map((qq => qq.name)));
        let lq = null;
        for (const cq of Yq) {
          const Eq = qq.getAnimationRange(cq);
          Eq && (lq = lq ? new rm.d("animation-range", Math.min(lq.from, Eq.from), Math.max(lq.to, Eq.to)) : Eq)
        }
        if (!lq && (qq.animations.length > 0 && (lq = qq.getAnimationRange(qq.animations[0].name)), !lq)) throw new Error("No animation range found in skeleton");
        const Oq = gq || 1 / (qq.animations[0]?.framePerSecond || 30),
          mq = this._BuildBoneHierarchy(qq, Yq);
        let xq = 0;
        for (const cq of mq) cq.positionKeys.length > 0 && (xq = Math.max(xq, cq.positionKeys.length)), cq.rotationKeys.length > 0 && (xq = Math.max(xq, cq.rotationKeys.length));
        0 === xq && (xq = Math.floor((lq.to - lq.from) / Oq) + 1);
        let Aq = "";
        return Aq += "HIERARCHY\n", Aq += this._ExportHierarchy(mq, 0), Aq += "MOTION\n", Aq += `Frames: ${xq}\n`, Aq += `Frame Time: ${Oq.toFixed(6)}\n`, Aq += this._ExportMotionData(mq, xq, 0, Yq), Aq
      }
      static _BuildBoneHierarchy(qq, Eq) {
        const gq = new Map,
          Yq = [];
        for (const lq of qq.bones) {
          const qq = {
            bone: lq,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          gq.set(lq, qq)
        }
        for (const lq of qq.bones) {
          const qq = gq.get(lq);
          if (lq.animations.length > 0)
            for (const gq of lq.animations) Eq.includes(gq.name) && ("position" === gq.targetProperty ? (qq.hasPositionChannels = !0, qq.positionKeys.push(...gq.getKeys())) : "rotationQuaternion" === gq.targetProperty && (qq.hasRotationChannels = !0, qq.rotationKeys.push(...gq.getKeys())));
          if (lq.getParent()) {
            const Eq = gq.get(lq.getParent());
            Eq && Eq.children.push(qq)
          } else Yq.push(qq)
        }
        return Yq
      }
      static _ExportHierarchy(qq, Eq) {
        let gq = "";
        const Yq = "    ".repeat(Eq);
        for (const lq of qq) {
          const qq = lq.bone;
          if (this._IsEndSite(lq)) {
            gq += `${Yq}End Site\n`, gq += `${Yq}{\n`;
            const Eq = this._GetBoneOffset(qq);
            gq += `${Yq}    OFFSET ${Eq.x.toFixed(6)} ${Eq.y.toFixed(6)} ${Eq.z.toFixed(6)}\n`, gq += `${Yq}}\n`
          } else {
            gq += `${0===Eq?"ROOT":`${Yq}JOINT`} ${qq.name}\n`, gq += `${Yq}{\n`;
            const Oq = this._GetBoneOffset(qq);
            gq += `${Yq}    OFFSET ${Oq.x.toFixed(6)} ${Oq.y.toFixed(6)} ${Oq.z.toFixed(6)}\n`;
            const mq = [];
            lq.hasPositionChannels && mq.push("Xposition", "Yposition", "Zposition"), lq.hasRotationChannels && mq.push("Zrotation", "Xrotation", "Yrotation"), mq.length > 0 && (gq += `${Yq}    CHANNELS ${mq.length} ${mq.join(" ")}\n`), lq.children.length > 0 && (gq += this._ExportHierarchy(lq.children, Eq + 1)), gq += `${Yq}}\n`
          }
        }
        return gq
      }
      static _IsEndSite(qq) {
        return 0 === qq.children.length
      }
      static _GetBoneOffset(qq) {
        try {
          if (!qq.getParent()) return qq.getRestMatrix().getTranslation();
          return qq.getLocalMatrix().getTranslation()
        } catch (Eq) {
          return Yq.Na.Zero()
        }
      }
      static _ExportMotionData(qq, Eq, gq, Yq) {
        let lq = "";
        for (let Oq = 0; Oq < Eq; Oq++) {
          const Eq = [];
          this._CollectFrameValues(qq, Oq + gq, Eq, Yq), lq += Eq.map((qq => qq.toFixed(6))).join(" ") + "\n"
        }
        return lq
      }
      static _CollectFrameValues(qq, Eq, gq, Yq) {
        for (const lq of qq)
          if (!this._IsEndSite(lq)) {
            if (lq.hasPositionChannels) {
              const qq = this._GetPositionAtFrameIndex(lq.positionKeys, Eq);
              gq.push(qq.x, qq.y, qq.z)
            }
            if (lq.hasRotationChannels) {
              const qq = this._GetRotationAtFrameIndex(lq.rotationKeys, Eq),
                Yq = this._QuaternionToEuler(qq);
              gq.push(Yq.z, Yq.x, Yq.y)
            }
            lq.children.length > 0 && this._CollectFrameValues(lq.children, Eq, gq, Yq)
          }
      }
      static _GetPositionAtFrameIndex(qq, Eq) {
        if (0 === qq.length) return Yq.Na.Zero();
        return qq[Math.max(0, Math.min(Eq, qq.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(qq, Eq) {
        if (0 === qq.length) return Yq.Quaternion.Identity();
        return qq[Math.max(0, Math.min(Eq, qq.length - 1))].value.clone()
      }
      static _QuaternionToEuler(qq) {
        const Eq = new Yq.Matrix;
        qq.toRotationMatrix(Eq);
        const gq = Eq.m;
        let Oq, mq, xq;
        const Aq = Math.sqrt(gq[0] * gq[0] + gq[1] * gq[1]);
        return Aq > Mg.c ? (Oq = Math.atan2(gq[6], gq[10]), mq = Math.atan2(-gq[2], Aq), xq = Math.atan2(gq[1], gq[0])) : (Oq = Math.atan2(-gq[9], gq[5]), mq = Math.atan2(-gq[2], Aq), xq = 0), new Yq.Na(lq.Tools.ToDegrees(Oq), lq.Tools.ToDegrees(mq), lq.Tools.ToDegrees(xq))
      }
    }

    function nm(qq) {
      return "string" === typeof qq?.name
    }
    const bm = Symbol("__xml:meta$__"),
      im = Symbol("__xml:name$__");

    function Zm(qq, Eq) {
      Object.prototype.hasOwnProperty.call(qq.metadata, bm) || (qq.metadata[bm] = []), qq.metadata[bm].push(Eq)
    }

    function fm(qq) {
      return (Eq, gq) => {
        Eq[im] = qq
      }
    }

    function Mm() {
      return (qq, Eq) => Zm(Eq, {
        kind: "none",
        prop: String(Eq.name),
        ignore: !0
      })
    }

    function Tm(qq) {
      return (Eq, gq) => Zm(gq, {
        kind: "attr",
        prop: String(gq.name),
        ...qq
      })
    }

    function zm(qq) {
      return (Eq, gq) => Zm(gq, {
        kind: "elem",
        prop: String(gq.name),
        ...qq
      })
    }

    function Sm(qq) {
      const Eq = "function" === typeof qq ? qq : qq?.constructor,
        gq = Eq?.[Symbol.metadata];
      if (!gq) return [];
      const Yq = [];
      let lq = gq;
      for (; lq;) Object.prototype.hasOwnProperty.call(lq, bm) && Yq.push(...lq[bm]), lq = Object.getPrototypeOf(lq);
      return Yq
    }

    function pm(qq) {
      const Eq = qq?.constructor?.[im];
      return Eq || void 0
    }

    function Gm(qq) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(qq)
    }

    function Lm(qq) {
      if (nm(qq)) return qq;
      const Eq = (qq ?? "").trim();
      if (!Eq) return {
        name: ""
      };
      const gq = Eq.indexOf(":");
      if (-1 === gq) return {
        name: Eq
      };
      if (-1 !== Eq.indexOf(":", gq + 1)) return {
        name: Eq
      };
      const Yq = Eq.slice(0, gq),
        lq = Eq.slice(gq + 1);
      return Gm(Yq) && Gm(lq) ? {
        ns: Yq,
        name: lq
      } : {
        name: Eq
      }
    }

    function Jm(qq, Eq) {
      return Eq ? `${Eq}:${qq}` : qq
    }
    const km = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Rm = Object.freeze({
        number: km
      });

    function Um(qq) {
      const Eq = qq?.eps ?? km.eps;
      return {
        eps: Eq,
        maxDecimalsCap: qq?.maxDecimalsCap ?? km.maxDecimalsCap,
        trimTrailingZeros: qq?.trimTrailingZeros ?? km.trimTrailingZeros,
        fixedDecimals: qq?.fixedDecimals,
        allowScientific: qq?.allowScientific ?? km.allowScientific,
        snapNearZero: qq?.snapNearZero ?? km.snapNearZero,
        zeroThreshold: qq?.zeroThreshold ?? Eq,
        perAttributeEps: qq?.perAttributeEps
      }
    }

    function Fm(qq) {
      return {
        number: Um(qq?.number)
      }
    }
    class sm {
      constructor(qq) {
        if (this.o = qq, this._o = qq.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(qq) {
        if (!Number.isFinite(qq)) throw new Error(`Cannot format non-finite number: ${qq}`);
        const Eq = this._o,
          gq = this._clampInt(Eq.maxDecimalsCap ?? 15, 0, 20),
          Yq = Eq.trimTrailingZeros ?? !0,
          lq = Eq.snapNearZero ?? !0,
          Oq = Eq.zeroThreshold ?? Eq.eps,
          mq = 1 / Eq.eps;
        let xq, Aq = Math.round(qq * mq) / mq;
        if (Object.is(Aq, -0) && (Aq = 0), lq && Math.abs(Aq) <= Oq && (Aq = 0), xq = void 0 !== Eq.fixedDecimals ? this._clampInt(Eq.fixedDecimals, 0, gq) : this._clampInt(Math.ceil(-Math.log10(Eq.eps)), 0, gq), Eq.allowScientific, 0 === xq) return String(Math.trunc(Aq));
        let cq = Aq.toFixed(xq);
        if (Yq && void 0 === Eq.fixedDecimals && (cq = cq.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(cq)) throw new Error(`Scientific notation not allowed in XML output: ${cq}`);
        return cq
      }
      _clampInt(qq, Eq, gq) {
        return Number.isFinite(qq) ? (qq = Math.trunc(qq), Math.max(Eq, Math.min(gq, qq))) : Eq
      }
    }

    function Xm(qq) {
      return qq instanceof Date
    }

    function wm(qq) {
      return "string" === typeof qq
    }

    function Km(qq) {
      return "string" === typeof qq || "number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq || Xm(qq)
    }

    function Cm(qq) {
      return "number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq || Xm(qq)
    }
    class Im {
      constructor(qq, Eq) {
        this._ns = new Map, this._prefixCount = 0, this._builder = qq, this._format = Fm(Eq), this._nFmt = new sm(this._format)
      }
      withNamespace() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        for (const Yq of Eq) this._assignNamespace(Yq);
        return this
      }
      serialize(qq, Eq) {
        if (!(Eq = Eq ?? pm(qq))) throw new Error("can not find name for given object");
        const gq = Lm(Eq);
        gq.ns && this._assignNamespace(gq.ns, "xmlns"), this._gatherNamespaces(qq, new WeakSet);
        const Yq = this._builder.ele(null, gq.name);
        for (const [lq, Oq] of Array.from(this._ns.entries())) Yq.att("xmlns", Oq, lq);
        this._writeObjectContent(Yq, qq, (new WeakSet).add(qq)), this._builder.end()
      }
      _writeObject(qq, Eq, gq) {
        if (gq.has(Eq)) return;
        if (gq.add(Eq), Array.isArray(Eq)) {
          for (const Yq of Eq) Cm(Yq) || (wm(Yq) ? this._builder.text(Yq) : this._writeObject(qq, Yq, gq));
          return
        }
        const Yq = pm(Eq);
        if (!Yq) return;
        const lq = Lm(Yq),
          Oq = this._getPrefix(lq),
          mq = Jm(lq.name, Oq);
        qq.ele(null, mq), this._writeObjectContent(qq, Eq, gq), this._builder.end()
      }
      _getPrefix(qq) {
        if (qq.ns) {
          const Eq = this._ns.get(qq.ns.toLowerCase());
          if ("xmlns" !== Eq) return Eq
        }
      }
      _writeObjectContent(qq, Eq, gq) {
        const Yq = Sm(Eq) ?? [],
          lq = new Map;
        for (const mq of Yq) {
          const qq = lq.get(mq.prop) ?? [];
          qq.push(mq), lq.set(mq.prop, qq)
        }
        const Oq = Object.keys(Eq).sort(((qq, Eq) => {
          const gq = (lq.get(qq) ?? []).some((qq => "attr" === qq.kind));
          return gq === (lq.get(Eq) ?? []).some((qq => "attr" === qq.kind)) ? 0 : gq ? -1 : 1
        }));
        for (const mq of Oq) {
          const Yq = Eq[mq];
          if (null === Yq || void 0 === Yq) continue;
          const Oq = lq.get(mq);
          if (Oq) {
            if (Oq.some((qq => !0 === qq.ignore || "none" === qq.kind))) continue;
            for (const Eq of Oq) {
              const gq = Eq.name ?? Eq.prop.toLowerCase();
              if (gq) switch (Eq.kind) {
                case "attr": {
                  let lq = null;
                  if ("number" === typeof Yq && this._nFmt && (lq = this._nFmt.toString(Yq)), Eq.formatter) {
                    lq = new Eq.formatter(this._format).toString(Yq)
                  }
                  if (lq = lq ?? Yq.toString(), lq) {
                    const Eq = Lm(gq),
                      Yq = this._getPrefix(Eq),
                      Oq = Jm(Eq.name, Yq);
                    qq.att(null, Oq, lq)
                  }
                  break
                }
              }
            }
          } else Cm(Yq) || (wm(Yq) ? this._builder.text(Yq) : this._writeObject(qq, Yq, gq))
        }
      }
      _gatherNamespaces(qq, Eq) {
        if (Eq.has(qq)) return;
        if (Eq.add(qq), Array.isArray(qq)) {
          for (const gq of qq) Km(gq) || this._gatherNamespaces(gq, Eq);
          return
        }
        const gq = pm(qq);
        gq && this._assignNamespace(gq);
        const Yq = Sm(qq) ?? [],
          lq = new Map;
        for (const mq of Yq) {
          const qq = lq.get(mq.prop) ?? [];
          qq.push(mq), lq.set(mq.prop, qq)
        }
        const Oq = [];
        for (const mq of Object.keys(qq)) {
          const Eq = qq[mq];
          if (null === Eq || void 0 === Eq) continue;
          const gq = lq.get(mq);
          if (gq) {
            if (gq.some((qq => !0 === qq.ignore || "none" === qq.kind))) continue;
            for (const qq of gq) qq.name && this._assignNamespace(qq.name)
          }
          Oq.push(Eq)
        }
        for (const mq of Oq) Km(mq) || this._gatherNamespaces(mq, Eq)
      }
      _assignNamespace(qq, Eq) {
        const gq = Lm(qq);
        if (gq?.ns) {
          const qq = gq.ns.toLowerCase();
          this._ns.get(qq) || this._ns.set(qq, Eq ?? this._buildNsPrefix(qq))
        } else if ("xmlns" === Eq) {
          const qq = gq.name.toLowerCase();
          this._ns.get(qq) || this._ns.set(qq, Eq ?? this._buildNsPrefix(qq))
        }
      }
      _buildNsPrefix(qq) {
        let Eq, gq = !1;
        do {
          Eq = "ns" + this._prefixCount++;
          for (const qq of Array.from(this._ns.values()))
            if (qq === Eq) {
              gq = !0;
              break
            }
        } while (gq);
        return Eq
      }
    }
    class em {}
    var Dm;
    em.OpenTag = "<", em.CloseTag = ">", em.Slash = "/", em.Question = "?", em.Quote = '"', em.Equal = "=", em.Space = " ", em.Semicolon = ":", em.Dec = "<?xml", em.Xml = "xml", em.Xmlns = "xmlns", em.Xsi = "xsi", em.VersionKeyword = "version", em.EncodingKeyword = "encoding", em.StandaloneKeyword = "standalone",
      function(qq) {
        qq[qq.Declaration = 0] = "Declaration", qq[qq.Tag = 1] = "Tag", qq[qq.Attribute = 2] = "Attribute", qq[qq.Text = 3] = "Text"
      }(Dm || (Dm = {}));
    class qx {
      constructor(qq) {
        this._ctxStack = [], this._d = 0, this._w = qq
      }
      dec(qq, Eq, gq) {
        return this._w.write(em.Dec), this._writeAttStr(em.VersionKeyword, qq), Eq && this._writeAttStr(em.EncodingKeyword, Eq), void 0 !== gq && this._writeAttStr(em.StandaloneKeyword, gq ? "yes" : "no"), this._w.write(em.Question, em.CloseTag), this
      }
      att(qq, Eq, gq) {
        const Yq = this._peekContext();
        if (!Yq) throw new Error("att() without open element");
        if (Yq.closed) throw new Error(`att() after start tag closed for <${Yq.name}>`);
        if (this._isXmlnsDecl(qq, Eq)) {
          if (Eq === em.Xmlns) Yq.defaultNs = gq, this._registerNamespace(Yq, "", gq), this._writeAttStr(em.Xmlns, gq);
          else if (qq) this._registerNamespace(Yq, Eq, gq), this._writeAttStr(`${qq}:${Eq}`, gq);
          else {
            const qq = Eq.slice(6);
            this._registerNamespace(Yq, qq, gq), this._writeAttStr(Eq, gq)
          }
          return Yq.lastToken = Dm.Attribute, this
        }
        let lq = Eq;
        if (qq) {
          lq = `${this._ensurePrefixDeclared(Yq,qq)}:${Eq}`
        }
        return Yq.lastToken = Dm.Attribute, this._writeAttStr(lq, gq), this
      }
      ele(qq, Eq) {
        const gq = this._peekContext();
        gq && this._closeOpenTagIfNeeded(gq);
        let Yq = Eq;
        if (qq) {
          Yq = `${this._lookupPrefix(qq)??qq}:${Eq}`
        }
        return this._pushContext(Yq, ++this._d), this._w.write(em.OpenTag, Yq), this
      }
      text(qq) {
        const Eq = this._peekContext();
        if (!Eq) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Eq), Eq.lastToken = Dm.Text, this._w.write(this._escText(qq)), this
      }
      end() {
        const qq = this._popContext();
        return qq && (this._d--, qq.closed ? this._w.write(em.OpenTag, em.Slash, qq.name, em.CloseTag) : this._w.write(em.Slash, em.CloseTag)), this
      }
      _pushContext(qq, Eq) {
        const gq = new qx.Context(qq, Eq);
        return this._ctxStack.push(gq), gq
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
      _writeAttStr(qq, Eq) {
        this._w.write(em.Space, qq, em.Equal, em.Quote, this._escAttr(Eq), em.Quote)
      }
      _lookupPrefix(qq) {
        let Eq = this._ctxStack.length - 1;
        if (Eq >= 0)
          do {
            const gq = this._ctxStack[Eq--],
              Yq = gq.ns2prefix?.get(qq);
            if (Yq) return Yq
          } while (Eq >= 0)
      }
      _escText(qq) {
        return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(qq) {
        return this._escText(qq).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(qq, Eq) {
        if (qq) return qq === em.Xmlns;
        const gq = Eq.length,
          Yq = em.Xmlns.length;
        return gq >= Yq && (Eq.startsWith(em.Xmlns) && (Eq.length == Yq || Eq[Yq] == em.Semicolon))
      }
      _registerNamespace(qq, Eq, gq) {
        if (Eq === em.Xml || Eq === em.Xmlns) throw new Error(`reserved prefix '${Eq}'`);
        const Yq = qq.prefix2ns.get(Eq);
        if (Yq && Yq !== gq) throw new Error(`prefix '${Eq}' already bound to a different namespace`);
        qq.ns2prefix.get(gq) || qq.ns2prefix.set(gq, Eq), qq.prefix2ns.set(Eq, gq)
      }
      _allocPrefix(qq) {
        let Eq = 1;
        for (;;) {
          const gq = "ns" + Eq++;
          if (!qq.prefix2ns.has(gq)) return gq
        }
      }
      _ensurePrefixDeclared(qq, Eq) {
        const gq = this._lookupPrefix(Eq);
        if (gq) return gq;
        if (qq.closed) throw new Error(`can not declare namespace after start tag closed for <${qq.name}>`);
        const Yq = this._allocPrefix(qq);
        return this._writeAttStr(`${em.Xmlns}:${Yq}`, Eq), this._registerNamespace(qq, Yq, Eq), Yq
      }
      _closeOpenTagIfNeeded(qq) {
        qq.closed || (this._w.write(em.CloseTag), qq.closed = !0)
      }
    }
    qx.Context = class {
      constructor(qq, Eq) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = qq, this.depth = Eq
      }
    };
    class Ex {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        if (0 === Eq.length) return this;
        const Yq = Eq.join("");
        return this._chunks.push(Yq), this.count += Yq.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class gx {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = qq, this._opts = Eq, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        if (0 === Eq.length) return this;
        const Yq = Eq.join("");
        if (0 === Yq.length) return this;
        this._pending += Yq, this._pendingChars += Yq.length;
        const lq = this._opts.flushChars ?? 65536;
        return this._pendingChars >= lq && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const qq = this._encoder.encode(this._pending);
        return this._sink.push(qq), this.count += qq.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Yx = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      lx = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Ox, mx;
    ! function(qq) {
      qq.micron = "micron", qq.millimeter = "millimeter", qq.centimeter = "centimeter", qq.inch = "inch", qq.foot = "foot", qq.meter = "meter"
    }(Ox || (Ox = {})),
    function(qq) {
      qq.model = "model", qq.solidsupport = "solidsupport", qq.support = "support", qq.surface = "surface", qq.other = "other"
    }(mx || (mx = {}));
    const xx = "http://schemas.openxmlformats.org/package/2006/content-types",
      Ax = "http://schemas.openxmlformats.org/package/2006/relationships";
    var cx;
    ! function(qq) {
      qq.Relationships = "application/vnd.openxmlformats-package.relationships+xml", qq.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", qq.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", qq.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", qq.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", qq.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", qq.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", qq.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", qq.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", qq.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", qq.Png = "image/png", qq.Jpeg = "image/jpeg", qq.Tiff = "image/tiff", qq.Xml = "application/xml"
    }(cx || (cx = {}));
    const ux = "_rels/",
      Bx = "3D/",
      Wx = "3dmodel.model",
      Nx = ".rels",
      ax = "[Content_Types].xml";
    class Vx {
      static IsKnown(qq) {
        return Vx.Known.has(qq)
      }
      static IsThreeDimModel(qq) {
        return qq === Vx.ThreeDimModel
      }
    }
    Vx.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Vx.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Vx.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Vx.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Vx.Known = new Set([Vx.ThreeDimModel, Vx.Thumbnail, Vx.PrintTicket, Vx.MustPreserve]);
    let dx = (() => {
        let qq, Eq, gq = [fm({
            ns: xx,
            name: "Types"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfContentTypes"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      jx = (() => {
        let qq, Eq, gq, Yq, lq = [fm({
            ns: xx,
            name: "Default"
          })],
          Oq = [],
          mq = [],
          xq = [],
          Aq = [],
          cq = [];
        Eq = class {
          constructor(qq, Eq) {
            this.ext = (0, vq.i)(this, mq, void 0), this.ct = ((0, vq.i)(this, xq), (0, vq.i)(this, Aq, void 0)), (0, vq.i)(this, cq), this.ext = qq, this.ct = Eq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfContentType"), (() => {
          const uq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: {
              ns: xx,
              name: "Extension"
            }
          })], Yq = [Tm({
            name: {
              ns: xx,
              name: "ContentType"
            }
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: qq => "ext" in qq,
              get: qq => qq.ext,
              set: (qq, Eq) => {
                qq.ext = Eq
              }
            },
            metadata: uq
          }, mq, xq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: qq => "ct" in qq,
              get: qq => qq.ct,
              set: (qq, Eq) => {
                qq.ct = Eq
              }
            },
            metadata: uq
          }, Aq, cq), (0, vq.f)(null, qq = {
            value: Eq
          }, lq, {
            kind: "class",
            name: Eq.name,
            metadata: uq
          }, null, Oq), Eq = qq.value, uq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uq
          }), (0, vq.i)(Eq, Oq)
        })(), Eq
      })(),
      Hx = (() => {
        let qq, Eq, gq = [fm({
            ns: Ax,
            name: "Relationships"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfRelationships"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      ox = (() => {
        let qq, Eq, gq, Yq, lq, Oq = [fm({
            ns: Ax,
            name: "Relationship"
          })],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        Eq = class {
          constructor(qq, Eq, gq) {
            this.id = (0, vq.i)(this, xq, void 0), this.type = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.target = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), (0, vq.i)(this, Wq), this.id = qq, this.type = Eq, this.target = gq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfRelationship"), (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "Id"
          })], Yq = [Tm({
            name: "Type"
          })], lq = [Tm({
            name: "Target"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: qq => "id" in qq,
              get: qq => qq.id,
              set: (qq, Eq) => {
                qq.id = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: qq => "type" in qq,
              get: qq => qq.type,
              set: (qq, Eq) => {
                qq.type = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: qq => "target" in qq,
              get: qq => qq.target,
              set: (qq, Eq) => {
                qq.target = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), (0, vq.f)(null, qq = {
            value: Eq
          }, Oq, {
            kind: "class",
            name: Eq.name,
            metadata: Nq
          }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          }), (0, vq.i)(Eq, mq)
        })(), Eq
      })();
    class Px {
      constructor(qq, Eq, gq) {
        this.contentTypes = qq, this.relationships = Eq, this.model = gq
      }
    }
    class Qx {
      static Zero() {
        return new Qx([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(qq) {
        this.values = qq
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class yx {
      constructor(qq) {
        this.o = qq, this._f = new sm(qq)
      }
      toString(qq) {
        return qq.values.map((qq => this._f.toString(qq))).join(" ")
      }
    }
    let tx = (() => {
        let qq, Eq, gq, Yq, lq, Oq = [fm({
            ns: Yx,
            name: "model"
          })],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        Eq = class {
          constructor() {
            this.unit = (0, vq.i)(this, xq, Ox.millimeter), this.requiredextensions = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.recommendedextensions = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.metadata = (0, vq.i)(this, Wq)
          }
        };
        return (0, vq.j)(Eq, "ThreeMfModel"), (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "unit"
          })], Yq = [Tm({
            name: "requiredextensions"
          })], lq = [Tm({
            name: "recommendedextensions"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: qq => "unit" in qq,
              get: qq => qq.unit,
              set: (qq, Eq) => {
                qq.unit = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: qq => "requiredextensions" in qq,
              get: qq => qq.requiredextensions,
              set: (qq, Eq) => {
                qq.requiredextensions = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: qq => "recommendedextensions" in qq,
              get: qq => qq.recommendedextensions,
              set: (qq, Eq) => {
                qq.recommendedextensions = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), (0, vq.f)(null, qq = {
            value: Eq
          }, Oq, {
            kind: "class",
            name: Eq.name,
            metadata: Nq
          }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          })
        })(), Eq.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, vq.i)(Eq, mq), Eq
      })(),
      rx = (() => {
        let qq, Eq, gq, Yq, lq, Oq = [fm({
            ns: Yx,
            name: "meta"
          })],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        Eq = class {
          constructor(qq, Eq, gq, Yq) {
            this.name = (0, vq.i)(this, xq, void 0), this.preserve = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.type = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.value = (0, vq.i)(this, Wq), this.name = qq, this.value = Eq, this.preserve = gq, this.type = Yq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfMeta"), (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "name"
          })], Yq = [Tm({
            name: "preserve"
          })], lq = [Tm({
            name: "type"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: qq => "name" in qq,
              get: qq => qq.name,
              set: (qq, Eq) => {
                qq.name = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: qq => "preserve" in qq,
              get: qq => qq.preserve,
              set: (qq, Eq) => {
                qq.preserve = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: qq => "type" in qq,
              get: qq => qq.type,
              set: (qq, Eq) => {
                qq.type = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), (0, vq.f)(null, qq = {
            value: Eq
          }, Oq, {
            kind: "class",
            name: Eq.name,
            metadata: Nq
          }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          }), (0, vq.i)(Eq, mq)
        })(), Eq
      })(),
      vx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "metadatagroup"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfMetadataGroup"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      hx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "resources"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.object = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfResources"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      nx = (() => {
        let qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq = [fm({
            ns: Yx,
            name: "object"
          })],
          uq = [],
          Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [],
          jq = [],
          Hq = [],
          oq = [],
          Pq = [],
          Qq = [],
          yq = [],
          tq = [],
          rq = [];
        Eq = class {
          constructor(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mx.model;
            this.id = (0, vq.i)(this, Bq, void 0), this.type = ((0, vq.i)(this, Wq), (0, vq.i)(this, Nq, void 0)), this.thumbnail = ((0, vq.i)(this, aq), (0, vq.i)(this, Vq, void 0)), this.partnumber = ((0, vq.i)(this, dq), (0, vq.i)(this, jq, void 0)), this.name = ((0, vq.i)(this, Hq), (0, vq.i)(this, oq, void 0)), this.pid = ((0, vq.i)(this, Pq), (0, vq.i)(this, Qq, void 0)), this.pindex = ((0, vq.i)(this, yq), (0, vq.i)(this, tq, void 0)), this.metadatagroup = (0, vq.i)(this, rq), this.id = qq, this.type = Eq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfObject"), (() => {
          const hq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "id"
          })], Yq = [Tm({
            name: "type"
          })], lq = [Tm({
            name: "thumbnail"
          })], Oq = [Tm({
            name: "partnumber"
          })], mq = [Tm({
            name: "name"
          })], xq = [Tm({
            name: "pid"
          })], Aq = [Tm({
            name: "pindex"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: qq => "id" in qq,
              get: qq => qq.id,
              set: (qq, Eq) => {
                qq.id = Eq
              }
            },
            metadata: hq
          }, Bq, Wq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: qq => "type" in qq,
              get: qq => qq.type,
              set: (qq, Eq) => {
                qq.type = Eq
              }
            },
            metadata: hq
          }, Nq, aq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: qq => "thumbnail" in qq,
              get: qq => qq.thumbnail,
              set: (qq, Eq) => {
                qq.thumbnail = Eq
              }
            },
            metadata: hq
          }, Vq, dq), (0, vq.f)(null, null, Oq, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: qq => "partnumber" in qq,
              get: qq => qq.partnumber,
              set: (qq, Eq) => {
                qq.partnumber = Eq
              }
            },
            metadata: hq
          }, jq, Hq), (0, vq.f)(null, null, mq, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: qq => "name" in qq,
              get: qq => qq.name,
              set: (qq, Eq) => {
                qq.name = Eq
              }
            },
            metadata: hq
          }, oq, Pq), (0, vq.f)(null, null, xq, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: qq => "pid" in qq,
              get: qq => qq.pid,
              set: (qq, Eq) => {
                qq.pid = Eq
              }
            },
            metadata: hq
          }, Qq, yq), (0, vq.f)(null, null, Aq, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: qq => "pindex" in qq,
              get: qq => qq.pindex,
              set: (qq, Eq) => {
                qq.pindex = Eq
              }
            },
            metadata: hq
          }, tq, rq), (0, vq.f)(null, qq = {
            value: Eq
          }, cq, {
            kind: "class",
            name: Eq.name,
            metadata: hq
          }, null, uq), Eq = qq.value, hq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hq
          }), (0, vq.i)(Eq, uq)
        })(), Eq
      })(),
      bx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "mesh"
          })],
          Yq = [];
        Eq = class {
          constructor(qq, Eq) {
            this.vertices = qq ?? new ix, this.triangles = Eq ?? new fx
          }
        };
        return (0, vq.j)(Eq, "ThreeMfMesh"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      ix = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "vertices"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfVertices"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      Zx = (() => {
        let qq, Eq, gq, Yq, lq, Oq = [fm({
            ns: Yx,
            name: "vertex"
          })],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        Eq = class {
          constructor() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, vq.i)(this, xq, void 0), this.y = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.z = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), (0, vq.i)(this, Wq), this.x = qq, this.y = Eq, this.z = gq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfVertex"), (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "x"
          })], Yq = [Tm({
            name: "y"
          })], lq = [Tm({
            name: "z"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: qq => "x" in qq,
              get: qq => qq.x,
              set: (qq, Eq) => {
                qq.x = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: qq => "y" in qq,
              get: qq => qq.y,
              set: (qq, Eq) => {
                qq.y = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: qq => "z" in qq,
              get: qq => qq.z,
              set: (qq, Eq) => {
                qq.z = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), (0, vq.f)(null, qq = {
            value: Eq
          }, Oq, {
            kind: "class",
            name: Eq.name,
            metadata: Nq
          }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          }), (0, vq.i)(Eq, mq)
        })(), Eq
      })(),
      fx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "triangles"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfTriangles"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      Mx = (() => {
        let qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq = [fm({
            ns: Yx,
            name: "triangle"
          })],
          uq = [],
          Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [],
          jq = [],
          Hq = [],
          oq = [],
          Pq = [],
          Qq = [],
          yq = [],
          tq = [],
          rq = [];
        Eq = class {
          constructor(qq, Eq, gq) {
            this.v1 = (0, vq.i)(this, Bq, void 0), this.v2 = ((0, vq.i)(this, Wq), (0, vq.i)(this, Nq, void 0)), this.v3 = ((0, vq.i)(this, aq), (0, vq.i)(this, Vq, void 0)), this.p1 = ((0, vq.i)(this, dq), (0, vq.i)(this, jq, void 0)), this.p2 = ((0, vq.i)(this, Hq), (0, vq.i)(this, oq, void 0)), this.p3 = ((0, vq.i)(this, Pq), (0, vq.i)(this, Qq, void 0)), this.pid = ((0, vq.i)(this, yq), (0, vq.i)(this, tq, void 0)), (0, vq.i)(this, rq), this.v1 = qq, this.v2 = Eq, this.v3 = gq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfTriangle"), (() => {
          const hq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "v1"
          })], Yq = [Tm({
            name: "v2"
          })], lq = [Tm({
            name: "v3"
          })], Oq = [Tm({
            name: "p1"
          })], mq = [Tm({
            name: "p2"
          })], xq = [Tm({
            name: "p3"
          })], Aq = [Tm({
            name: "pid"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: qq => "v1" in qq,
              get: qq => qq.v1,
              set: (qq, Eq) => {
                qq.v1 = Eq
              }
            },
            metadata: hq
          }, Bq, Wq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: qq => "v2" in qq,
              get: qq => qq.v2,
              set: (qq, Eq) => {
                qq.v2 = Eq
              }
            },
            metadata: hq
          }, Nq, aq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: qq => "v3" in qq,
              get: qq => qq.v3,
              set: (qq, Eq) => {
                qq.v3 = Eq
              }
            },
            metadata: hq
          }, Vq, dq), (0, vq.f)(null, null, Oq, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: qq => "p1" in qq,
              get: qq => qq.p1,
              set: (qq, Eq) => {
                qq.p1 = Eq
              }
            },
            metadata: hq
          }, jq, Hq), (0, vq.f)(null, null, mq, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: qq => "p2" in qq,
              get: qq => qq.p2,
              set: (qq, Eq) => {
                qq.p2 = Eq
              }
            },
            metadata: hq
          }, oq, Pq), (0, vq.f)(null, null, xq, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: qq => "p3" in qq,
              get: qq => qq.p3,
              set: (qq, Eq) => {
                qq.p3 = Eq
              }
            },
            metadata: hq
          }, Qq, yq), (0, vq.f)(null, null, Aq, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: qq => "pid" in qq,
              get: qq => qq.pid,
              set: (qq, Eq) => {
                qq.pid = Eq
              }
            },
            metadata: hq
          }, tq, rq), (0, vq.f)(null, qq = {
            value: Eq
          }, cq, {
            kind: "class",
            name: Eq.name,
            metadata: hq
          }, null, uq), Eq = qq.value, hq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hq
          }), (0, vq.i)(Eq, uq)
        })(), Eq
      })(),
      Tx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "components"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.component = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfComponents"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      zx = (() => {
        let qq, Eq, gq, Yq, lq = [fm({
            ns: Yx,
            name: "component"
          })],
          Oq = [],
          mq = [],
          xq = [],
          Aq = [],
          cq = [];
        Eq = class {
          constructor(qq, Eq) {
            this.objectid = (0, vq.i)(this, mq, void 0), this.transform = ((0, vq.i)(this, xq), (0, vq.i)(this, Aq, void 0)), (0, vq.i)(this, cq), this.objectid = qq, this.transform = Eq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfComponent"), (() => {
          const uq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "objectid"
          })], Yq = [Tm({
            name: "transform",
            formatter: yx
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: qq => "objectid" in qq,
              get: qq => qq.objectid,
              set: (qq, Eq) => {
                qq.objectid = Eq
              }
            },
            metadata: uq
          }, mq, xq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: qq => "transform" in qq,
              get: qq => qq.transform,
              set: (qq, Eq) => {
                qq.transform = Eq
              }
            },
            metadata: uq
          }, Aq, cq), (0, vq.f)(null, qq = {
            value: Eq
          }, lq, {
            kind: "class",
            name: Eq.name,
            metadata: uq
          }, null, Oq), Eq = qq.value, uq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uq
          }), (0, vq.i)(Eq, Oq)
        })(), Eq
      })(),
      Sx = (() => {
        let qq, Eq, gq, Yq = [fm({
            ns: Yx,
            name: "basematerials"
          })],
          lq = [],
          Oq = [],
          mq = [];
        Eq = class {
          constructor(qq) {
            this.id = (0, vq.i)(this, Oq, void 0), this.base = ((0, vq.i)(this, mq), []), this.id = qq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfBaseMaterials"), (() => {
          const xq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "id"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: qq => "id" in qq,
              get: qq => qq.id,
              set: (qq, Eq) => {
                qq.id = Eq
              }
            },
            metadata: xq
          }, Oq, mq), (0, vq.f)(null, qq = {
            value: Eq
          }, Yq, {
            kind: "class",
            name: Eq.name,
            metadata: xq
          }, null, lq), Eq = qq.value, xq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xq
          }), (0, vq.i)(Eq, lq)
        })(), Eq
      })(),
      px = (() => {
        let qq, Eq, gq, Yq, lq = [fm({
            ns: Yx,
            name: "base"
          })],
          Oq = [],
          mq = [],
          xq = [],
          Aq = [],
          cq = [];
        Eq = class {
          constructor(qq, Eq) {
            this.name = (0, vq.i)(this, mq, void 0), this.displaycolor = ((0, vq.i)(this, xq), (0, vq.i)(this, Aq, void 0)), (0, vq.i)(this, cq), this.name = qq, this.displaycolor = Eq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfBase"), (() => {
          const uq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "name"
          })], Yq = [Tm({
            name: "displaycolor"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: qq => "name" in qq,
              get: qq => qq.name,
              set: (qq, Eq) => {
                qq.name = Eq
              }
            },
            metadata: uq
          }, mq, xq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: qq => "displaycolor" in qq,
              get: qq => qq.displaycolor,
              set: (qq, Eq) => {
                qq.displaycolor = Eq
              }
            },
            metadata: uq
          }, Aq, cq), (0, vq.f)(null, qq = {
            value: Eq
          }, lq, {
            kind: "class",
            name: Eq.name,
            metadata: uq
          }, null, Oq), Eq = qq.value, uq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uq
          }), (0, vq.i)(Eq, Oq)
        })(), Eq
      })(),
      Gx = (() => {
        let qq, Eq, gq = [fm({
            ns: Yx,
            name: "build"
          })],
          Yq = [];
        Eq = class {
          constructor() {
            this.item = []
          }
        };
        return (0, vq.j)(Eq, "ThreeMfBuild"), (() => {
          const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vq.f)(null, qq = {
            value: Eq
          }, gq, {
            kind: "class",
            name: Eq.name,
            metadata: lq
          }, null, Yq), Eq = qq.value, lq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lq
          }), (0, vq.i)(Eq, Yq)
        })(), Eq
      })(),
      Lx = (() => {
        let qq, Eq, gq, Yq, lq, Oq = [fm({
            ns: Yx,
            name: "item"
          })],
          mq = [],
          xq = [],
          Aq = [],
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        Eq = class {
          constructor(qq, Eq, gq) {
            this.objectid = (0, vq.i)(this, xq, void 0), this.transform = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.partnumber = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.metadatagroup = (0, vq.i)(this, Wq), this.objectid = qq, this.transform = Eq, this.partnumber = gq
          }
        };
        return (0, vq.j)(Eq, "ThreeMfItem"), (() => {
          const Nq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gq = [Tm({
            name: "objectid"
          })], Yq = [Tm({
            name: "transform",
            formatter: yx
          })], lq = [Tm({
            name: "partnumber"
          })], (0, vq.f)(null, null, gq, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: qq => "objectid" in qq,
              get: qq => qq.objectid,
              set: (qq, Eq) => {
                qq.objectid = Eq
              }
            },
            metadata: Nq
          }, xq, Aq), (0, vq.f)(null, null, Yq, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: qq => "transform" in qq,
              get: qq => qq.transform,
              set: (qq, Eq) => {
                qq.transform = Eq
              }
            },
            metadata: Nq
          }, cq, uq), (0, vq.f)(null, null, lq, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: qq => "partnumber" in qq,
              get: qq => qq.partnumber,
              set: (qq, Eq) => {
                qq.partnumber = Eq
              }
            },
            metadata: Nq
          }, Bq, Wq), (0, vq.f)(null, qq = {
            value: Eq
          }, Oq, {
            kind: "class",
            name: Eq.name,
            metadata: Nq
          }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nq
          }), (0, vq.i)(Eq, mq)
        })(), Eq
      })();
    class Jx {
      constructor(qq, Eq) {
        this._object = new nx(qq, Eq)
      }
      withName(qq) {
        return this._object.name = qq, this
      }
      withThumbnail(qq) {
        return this._object.thumbnail = qq, this
      }
      withProperty(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = qq, this._object.id = Eq, this
      }
      build() {
        return this._object
      }
      reset(qq, Eq) {
        this._object = new nx(qq, Eq)
      }
    }
    class kx extends Jx {
      constructor(qq) {
        super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mx.model), this._object.content = new Tx
      }
      withComponent(qq, Eq) {
        return this._object.content.component.push(new zx(qq, Eq)), this
      }
    }
    class Rx extends Jx {
      constructor(qq) {
        super(qq, mx.model)
      }
      withPostProcessHandlers(qq, Eq) {
        return this._vh = qq, this._th = Eq, this
      }
      withData(qq) {
        return this._object.content = this._buildMesh(qq), this
      }
      withMaterial(qq, Eq) {
        return this._object.pid = qq, this._object.pindex = Eq, this
      }
      _buildMesh(qq) {
        const Eq = this._buildVertices(qq.positions),
          gq = this._buildTriangle(qq.indices);
        return new bx(Eq, gq)
      }
      _buildVertices(qq) {
        const Eq = new ix;
        if (qq)
          for (let gq = 0; gq < qq.length;) {
            const Yq = qq[gq++],
              lq = qq[gq++],
              Oq = qq[gq++];
            let mq = new Zx(Yq, lq, Oq);
            this._vh && (mq = this._vh(mq)), Eq.vertex.push(mq)
          }
        return Eq
      }
      _buildTriangle(qq) {
        const Eq = new fx;
        if (qq)
          for (let gq = 0; gq < qq.length;) {
            const Yq = qq[gq++],
              lq = qq[gq++],
              Oq = qq[gq++];
            let mq = new Mx(Yq, lq, Oq);
            this._th && (mq = this._th(mq)), Eq.triangle.push(mq)
          }
        return Eq
      }
    }
    class Ux {
      constructor(qq) {
        this._m = new Sx(qq)
      }
      withColor(qq, Eq) {
        this._m.base = this._m.base ?? [];
        let gq = this._m.base.find((Eq => Eq.name.toLowerCase() === qq.toLowerCase()));
        return gq ? (gq.displaycolor = this._rgbaToHex(Eq), this) : (gq = new px(qq, this._rgbaToHex(Eq)), this._m.base.push(gq), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(qq) {
        const Eq = qq => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(qq, 1 / 2.2)))),
          gq = Eq(qq.r).toString(16).padStart(2, "0").toUpperCase(),
          Yq = Eq(qq.g).toString(16).padStart(2, "0").toUpperCase(),
          lq = Eq(qq.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof qq.a) {
          return `#${gq}${Yq}${lq}${Math.round(Math.min(255,Math.max(0,255*qq.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${gq}${Yq}${lq}`
      }
    }
    class Fx {
      constructor() {
        this._model = new tx, this._objects = new Map
      }
      withMetaData(qq, Eq, gq, Yq) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new rx(qq, Eq, gq, Yq)), this
      }
      withMaterial(qq) {
        return qq instanceof Ux && (qq = qq.build()), qq && (this._model.resources = this._model.resources ?? new hx, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(qq)), this
      }
      withMesh(qq) {
        return qq instanceof Rx && (qq = qq.build()), this._model.resources = this._model.resources ?? new hx, this._model.resources.object.push(qq), this
      }
      withComponents(qq) {
        return qq instanceof kx && (qq = qq.build()), this._model.resources = this._model.resources ?? new hx, this._model.resources.object.push(qq), this
      }
      withBuild(qq, Eq, gq) {
        return this._model.build = this._model.build ?? new Gx, this._model.build.item?.push(new Lx(qq, Eq, gq)), this
      }
      withUnit(qq) {
        return this._model.unit = qq, this
      }
      reset() {
        return this._model = new tx, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Fx.KnownMetaSet = new Set(tx.KnownMeta.map((qq => qq.toLowerCase())));
    class sx {
      withContentType(qq) {
        this._cts || (this._cts = new dx);
        const Eq = this._cts.items;
        return Eq.some((Eq => Eq.ext === qq.ext && Eq.ct === qq.ct)) || Eq.push(qq), this
      }
      withRelationship(qq) {
        this._rs || (this._rs = new Hx);
        const Eq = this._rs.items;
        return Eq.some((Eq => Eq.id === qq.id)) || Eq.push(qq), this.withContentType(new jx("rels", cx.Relationships)), this
      }
      withModel(qq) {
        return qq instanceof Fx && (qq = qq.build()), this._m = qq, this.withContentType(new jx("model", cx.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const qq = `${Bx}${Wx}`;
        if (!this._rs) {
          const Eq = `/${qq}`;
          this.withRelationship(new ox("rel0", Vx.ThreeDimModel, Eq))
        }
        return new Px(this._cts, this._rs, this._m)
      }
    }
    class Xx {
      constructor(qq) {
        this._o = qq
      }
      get options() {
        return this._o
      }
      async serializeAsync(qq) {
        const Eq = await this.ensureZipLibReadyAsync();
        if (!Eq) return;
        const gq = Eq.Zip,
          Yq = Eq.ZipDeflate;
        if (!gq || !Yq) throw new Error("fflate Zip / ZipDeflate not available");
        const lq = function(qq, Eq, gq) {
          const lq = new Yq(Eq, {
            level: 6
          });
          qq.add(lq);
          const Oq = function(qq) {
              return {
                push: (Eq, gq) => qq.push(Eq, gq)
              }
            }(lq),
            mq = new gx(Oq),
            xq = new qx(mq).dec("1.0", "UTF-8");
          new Im(xq).serialize(gq), mq.finish()
        };
        for (var Oq = arguments.length, mq = new Array(Oq > 1 ? Oq - 1 : 0), xq = 1; xq < Oq; xq++) mq[xq - 1] = arguments[xq];
        const Aq = this.toDocument(...mq);
        if (!Aq) return;
        const cq = new gq(qq);
        lq(cq, ax, Aq.contentTypes), lq(cq, `${ux}${Nx}`, Aq.relationships), lq(cq, `${Bx}${Wx}`, Aq.model), cq.end()
      }
      toDocument() {
        const qq = (new Fx).withUnit(this._o?.unit ?? Ox.millimeter);
        if (this.options.metadata)
          for (const lq in this.options.metadata) qq.withMetaData(lq, this.options.metadata[lq]);
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return (new sx).withModel(this.toModel(qq, ...gq)).build()
      }
    }
    class wx {
      static async SerializeToMemoryAsync(qq) {
        const Eq = new Array;
        let gq = 0;
        for (var Yq = arguments.length, lq = new Array(Yq > 1 ? Yq - 1 : 0), Oq = 1; Oq < Yq; Oq++) lq[Oq - 1] = arguments[Oq];
        if (await qq.serializeAsync((function(qq, Yq, lq) {
            Eq.push(Yq), gq += Yq.length
          }), ...lq), !gq) return;
        const mq = new Uint8Array(gq);
        let xq = 0;
        for (const Aq of Eq) mq.set(Aq, xq), xq += Aq.length;
        return mq
      }
    }
    class Kx {}
    Kx.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Cx {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = qq, this._to = Eq, this._step = gq, this._i = qq
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const qq = this._i;
        return this._i += this._step, qq
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Ix extends Xx {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Ix.DefaultOptions,
          ...qq
        })
      }
      toModel(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        gq = gq.filter((qq => qq instanceof cY.c || qq instanceof Nq.c));
        const lq = new Cx,
          Oq = qq,
          mq = new Map,
          xq = this.options.exportInstances ? [] : null;
        for (let Aq = 0; Aq < gq.length; Aq++) {
          const qq = gq[Aq];
          if (qq instanceof Nq.c) {
            xq?.push(qq);
            continue
          }
          const Eq = qq.name || `mesh${Aq}`,
            Yq = qq.getWorldMatrix(),
            cq = this._handleBabylonTo3mfMatrixTransformToRef(Yq, Qx.Zero()),
            uq = qq.fn;
          if (void 0 === uq) continue;
          const Bq = 1 == uq.length;
          for (let gq = 0; gq < uq.length; gq++) {
            const Yq = uq[gq],
              xq = this._extractSubMesh(qq, Yq);
            if (xq) {
              const qq = Bq ? `${Eq}` : `${Eq}_${gq}`,
                Aq = new Rx(lq.next()).withData(xq).withName(qq).build();
              Oq.withMesh(Aq), Oq.withBuild(Aq.id, cq), mq.set(Yq, Aq)
            }
          }
        }
        if (xq && xq.length) {
          const qq = this._groupBy(xq, (qq => qq.Plq));
          for (const [Eq, gq] of Array.from(qq.entries()))
            if (gq && gq.length)
              for (let qq = 0; qq < gq.length; qq++) {
                const Yq = gq[qq].getWorldMatrix(),
                  lq = Eq.fn;
                for (let qq = 0; qq < lq.length; qq++) {
                  const Eq = lq[qq],
                    gq = mq.get(Eq);
                  gq && Oq.withBuild(gq.id, this._handleBabylonTo3mfMatrixTransformToRef(Yq, Qx.Zero()))
                }
              }
        }
        return Oq.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const qq = globalThis;
          return qq.fflate || await lq.Tools.LoadScriptAsync(Kx.FFLATEUrl), qq.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(qq, Eq) {
        const gq = qq.iYq();
        if (!gq) return;
        const Yq = qq.getVerticesData(Ix._PositionKind);
        if (!Yq) return;
        if (0 == Eq.indexStart && Eq.indexCount == gq.length) return {
          positions: Yq,
          indices: gq
        };
        const lq = Eq.indexStart,
          Oq = new Map,
          mq = [],
          xq = new Uint32Array(Eq.indexCount);
        for (let Aq = 0; Aq < Eq.indexCount; Aq++) {
          const qq = gq[lq + Aq];
          let Eq = Oq.get(qq);
          if (void 0 === Eq) {
            Eq = Oq.size, Oq.set(qq, Eq);
            const gq = 3 * qq;
            mq.push(Yq[gq], Yq[gq + 1], Yq[gq + 2])
          }
          xq[Aq] = Eq
        }
        return {
          positions: new Float32Array(mq),
          indices: xq
        }
      }
      _groupBy(qq, Eq) {
        const gq = new Map;
        for (const Yq of qq) {
          const qq = Eq(Yq),
            lq = gq.get(qq);
          lq ? lq.push(Yq) : gq.set(qq, [Yq])
        }
        return gq
      }
      _handleBabylonTo3mfMatrixTransformToRef(qq, Eq) {
        const gq = qq.multiplyToRef(Ix._R_BJS_TO_3MF, Gq.e.Zero()).m;
        return Eq.values = [gq[0], gq[1], gq[2], gq[4], gq[5], gq[6], gq[8], gq[9], gq[10], gq[12], gq[13], gq[14]], Eq
      }
    }
    Ix.DefaultOptions = {
      unit: Ox.meter,
      exportInstances: !1
    }, Ix._PositionKind = "position", Ix._R_BJS_TO_3MF = Gq.e.RotationX(Math.PI / 2).multiply(Gq.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);