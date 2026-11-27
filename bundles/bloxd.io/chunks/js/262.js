export const id = 262;
export const ids = [262, 267];
export const modules = {
  53863: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(53798),
      tR = GR(41514);
    let uR = !1;

    function ZR() {
      uR || (uR = !0, tR.c.prototype._sphericalPolynomialTargetSize = 0, tR.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(tR.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = yR.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((RR => {
              this._texture._sphericalPolynomial = RR, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(RR) {
          this._texture && (this._texture._sphericalPolynomial = RR)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38329: (RR, JR, GR) => {
    GR.d(JR, {
      Color3: () => yR.d,
      e: () => yR.e
    });
    var yR = GR(38331);
    (0, yR.g)()
  },
  38928: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(38933);
    class tR {
      static GetPlanes(RR) {
        const JR = [];
        for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
        return tR.GetPlanesToRef(RR, JR), JR
      }
      static GetNearPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
      }
      static GetFarPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[2], JR.normal.y = GR[7] - GR[6], JR.normal.z = GR[11] - GR[10], JR.d = GR[15] - GR[14], JR.normalize()
      }
      static GetLeftPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[0], JR.normal.y = GR[7] + GR[4], JR.normal.z = GR[11] + GR[8], JR.d = GR[15] + GR[12], JR.normalize()
      }
      static GetRightPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[0], JR.normal.y = GR[7] - GR[4], JR.normal.z = GR[11] - GR[8], JR.d = GR[15] - GR[12], JR.normalize()
      }
      static GetTopPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[1], JR.normal.y = GR[7] - GR[5], JR.normal.z = GR[11] - GR[9], JR.d = GR[15] - GR[13], JR.normalize()
      }
      static GetBottomPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[1], JR.normal.y = GR[7] + GR[5], JR.normal.z = GR[11] + GR[9], JR.d = GR[15] + GR[13], JR.normalize()
      }
      static GetPlanesToRef(RR, JR) {
        tR.GetNearPlaneToRef(RR, JR[0]), tR.GetFarPlaneToRef(RR, JR[1]), tR.GetLeftPlaneToRef(RR, JR[2]), tR.GetRightPlaneToRef(RR, JR[3]), tR.GetTopPlaneToRef(RR, JR[4]), tR.GetBottomPlaneToRef(RR, JR[5])
      }
      static IsPointInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; GR++)
          if (JR[GR].dotCoordinate(RR) < 0) return !1;
        return !0
      }
    }
  },
  38933: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR, tR) {
        this.normal = new yR.r(RR, JR, GR), this.d = tR
      }
      QtR() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let RR = this.normal.getHashCode();
        return RR = 397 * RR ^ this.d, RR
      }
      normalize() {
        const RR = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let JR = 0;
        return 0 !== RR && (JR = 1 / RR), this.normal.x *= JR, this.normal.y *= JR, this.normal.z *= JR, this.d *= JR, this
      }
      transform(RR) {
        const JR = tR._TmpMatrix;
        RR.invertToRef(JR);
        const GR = JR.m,
          yR = this.normal.x,
          uR = this.normal.y,
          ZR = this.normal.z,
          qR = this.d,
          iR = yR * GR[0] + uR * GR[1] + ZR * GR[2] + qR * GR[3],
          fR = yR * GR[4] + uR * GR[5] + ZR * GR[6] + qR * GR[7],
          VR = yR * GR[8] + uR * GR[9] + ZR * GR[10] + qR * GR[11],
          KR = yR * GR[12] + uR * GR[13] + ZR * GR[14] + qR * GR[15];
        return new tR(iR, fR, VR, KR)
      }
      dotCoordinate(RR) {
        return this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z + this.d
      }
      copyFromPoints(RR, JR, GR) {
        const yR = JR.x - RR.x,
          tR = JR.y - RR.y,
          uR = JR.z - RR.z,
          ZR = GR.x - RR.x,
          qR = GR.y - RR.y,
          iR = GR.z - RR.z,
          fR = tR * iR - uR * qR,
          VR = uR * ZR - yR * iR,
          KR = yR * qR - tR * ZR,
          wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
        let rR;
        return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
      }
      isFrontFacingTo(RR, JR) {
        return yR.r.Dot(this.normal, RR) <= JR
      }
      signedDistanceTo(RR) {
        return yR.r.Dot(RR, this.normal) + this.d
      }
      static FromArray(RR) {
        return new tR(RR[0], RR[1], RR[2], RR[3])
      }
      static FromPoints(RR, JR, GR) {
        const yR = new tR(0, 0, 0, 0);
        return yR.copyFromPoints(RR, JR, GR), yR
      }
      static FromPositionAndNormal(RR, JR) {
        const GR = new tR(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(RR, JR, GR)
      }
      static FromPositionAndNormalToRef(RR, JR, GR) {
        return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
      }
      static SignedDistanceToPlaneFromPositionAndNormal(RR, JR, GR) {
        const tR = -(JR.x * RR.x + JR.y * RR.y + JR.z * RR.z);
        return yR.r.Dot(GR, JR) + tR
      }
    }
    tR._TmpMatrix = yR.e.Identity()
  },
  38195: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Matrix: () => yR.e,
      Quaternion: () => yR.i,
      RegisterMathVector: () => yR.j,
      TmpVectors: () => yR.l,
      Vector2: () => yR.n,
      Fe: () => yR.r,
      Vector4: () => yR.s
    });
    var yR = GR(38204);
    (0, yR.j)()
  },
  39248: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR, JR, GR, yR) {
        this.x = RR, this.y = JR, this.width = GR, this.height = yR
      }
      toGlobal(RR, JR) {
        return new yR(this.x * RR, this.y * JR, this.width * RR, this.height * JR)
      }
      toGlobalToRef(RR, JR, GR) {
        return GR.x = this.x * RR, GR.y = this.y * JR, GR.width = this.width * RR, GR.height = this.height * JR, this
      }
      clone() {
        return new yR(this.x, this.y, this.width, this.height)
      }
    }
  },
  53798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(41509),
      ZR = GR(38213),
      qR = GR(38331);
    class iR {
      constructor(RR, JR, GR, yR) {
        this.name = RR, this.worldAxisForNormal = JR, this.worldAxisForFileX = GR, this.worldAxisForFileY = yR
      }
    }
    class fR {
      static _NearestPow2Floor(RR) {
        return RR <= 1 ? 1 : 1 << Math.floor(Math.log2(RR))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(RR) {
        if (!RR.isCube) return null;
        RR.jH()?.ke().flushFramebuffer();
        const JR = RR.getSize().width,
          GR = RR._sphericalPolynomialTargetSize,
          yR = GR > 0 ? this._NearestPow2Floor(GR) : 0,
          tR = !RR.noMipmap && !0 === RR._texture?.generateMipMaps,
          uR = yR > 0 && yR < JR && tR,
          ZR = uR ? Math.max(0, Math.round(Math.log2(JR / yR))) : 0,
          qR = uR ? Math.max(1, Math.floor(JR / Math.pow(2, ZR))) : JR,
          iR = RR.readPixels(0, ZR, void 0, !1),
          fR = RR.readPixels(1, ZR, void 0, !1);
        let VR, KR;
        RR.isRenderTarget ? (VR = RR.readPixels(3, ZR, void 0, !1), KR = RR.readPixels(2, ZR, void 0, !1)) : (VR = RR.readPixels(2, ZR, void 0, !1), KR = RR.readPixels(3, ZR, void 0, !1));
        const wR = RR.readPixels(4, ZR, void 0, !1),
          rR = RR.readPixels(5, ZR, void 0, !1),
          eR = RR.gammaSpace,
          aR = yR > 0 && yR < JR && !uR;
        return new Promise((RR => {
          Promise.all([fR, iR, VR, KR, wR, rR]).then((GR => {
            let [tR, uR, ZR, iR, fR, VR] = GR, KR = qR;
            if (aR) {
              const RR = 4;
              tR = this._DownsampleFace(tR, JR, yR, RR), uR = this._DownsampleFace(uR, JR, yR, RR), ZR = this._DownsampleFace(ZR, JR, yR, RR), iR = this._DownsampleFace(iR, JR, yR, RR), fR = this._DownsampleFace(fR, JR, yR, RR), VR = this._DownsampleFace(VR, JR, yR, RR), KR = yR
            }
            const wR = {
              size: KR,
              right: uR,
              left: tR,
              up: ZR,
              down: iR,
              front: fR,
              back: VR,
              format: 5,
              type: tR instanceof Float32Array ? 1 : 0,
              gammaSpace: eR
            };
            RR(this.ConvertCubeMapToSphericalPolynomial(wR))
          }))
        }))
      }
      static _AreaElement(RR, JR) {
        return Math.atan2(RR * JR, Math.sqrt(RR * RR + JR * JR + 1))
      }
      static _DownsampleFace(RR, JR, GR, yR) {
        const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
          uR = GR * GR * yR,
          ZR = new Float32Array(uR),
          qR = JR / GR,
          iR = 1 / (qR * qR);
        for (let VR = 0; VR < GR; VR++) {
          const RR = Math.floor(VR * qR),
            uR = Math.floor((VR + 1) * qR);
          for (let fR = 0; fR < GR; fR++) {
            const KR = Math.floor(fR * qR),
              wR = Math.floor((fR + 1) * qR),
              rR = (VR * GR + fR) * yR;
            for (let GR = 0; GR < yR; GR++) {
              let qR = 0;
              for (let ZR = RR; ZR < uR; ZR++)
                for (let RR = KR; RR < wR; RR++) qR += tR[(ZR * JR + RR) * yR + GR];
              ZR[rR + GR] = qR * iR
            }
          }
        }
        if (RR instanceof Float32Array) return ZR;
        const fR = new(0, RR.constructor)(uR);
        for (let VR = 0; VR < uR; VR++) fR[VR] = ZR[VR] + .5 | 0;
        return fR
      }
      static ConvertCubeMapToSphericalPolynomial(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = JR > 0 ? this._NearestPow2Floor(JR) : 0;
        if (GR > 0 && RR.size > GR) {
          const JR = 5 === RR.format ? 4 : 3,
            yR = ["right", "left", "up", "down", "front", "back"],
            tR = {};
          for (const uR of yR) tR[uR] = this._DownsampleFace(RR[uR], RR.size, GR, JR);
          RR = {
            ...RR,
            ...tR,
            size: GR
          }
        }
        const yR = new uR.c;
        let iR = 0;
        const fR = 2 / RR.size,
          VR = fR,
          KR = .5 * fR,
          wR = KR - 1;
        for (let uR = 0; uR < 6; uR++) {
          const JR = this._FileFaces[uR],
            GR = RR[JR.name];
          let rR = wR;
          const eR = 5 === RR.format ? 4 : 3;
          for (let uR = 0; uR < RR.size; uR++) {
            let aR = wR;
            for (let VR = 0; VR < RR.size; VR++) {
              const wR = JR.worldAxisForFileX.scale(aR).add(JR.worldAxisForFileY.scale(rR)).add(JR.worldAxisForNormal);
              wR.normalize();
              const LR = this._AreaElement(aR - KR, rR - KR) - this._AreaElement(aR - KR, rR + KR) - this._AreaElement(aR + KR, rR - KR) + this._AreaElement(aR + KR, rR + KR);
              let nR = GR[uR * RR.size * eR + VR * eR + 0],
                UR = GR[uR * RR.size * eR + VR * eR + 1],
                WR = GR[uR * RR.size * eR + VR * eR + 2];
              isNaN(nR) && (nR = 0), isNaN(UR) && (UR = 0), isNaN(WR) && (WR = 0), 0 === RR.type && (nR /= 255, UR /= 255, WR /= 255), RR.gammaSpace && (nR = Math.pow((0, tR.Clamp)(nR), ZR.i), UR = Math.pow((0, tR.Clamp)(UR), ZR.i), WR = Math.pow((0, tR.Clamp)(WR), ZR.i));
              const AR = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const RR = Math.max(nR, UR, WR);
                if (RR > AR) {
                  const JR = AR / RR;
                  nR *= JR, UR *= JR, WR *= JR
                }
              } else nR = (0, tR.Clamp)(nR, 0, AR), UR = (0, tR.Clamp)(UR, 0, AR), WR = (0, tR.Clamp)(WR, 0, AR);
              const CR = new qR.d(nR, UR, WR);
              yR.addLight(wR, CR, LR), iR += LR, aR += fR
            }
            rR += VR
          }
        }
        const rR = 6 * (4 * Math.PI) / 6 / iR;
        return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
      }
    }
    fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, -1)), new iR("front", new yR.r(0, 0, 1), new yR.r(1, 0, 0), new yR.r(0, -1, 0)), new iR("back", new yR.r(0, 0, -1), new yR.r(-1, 0, 0), new yR.r(0, -1, 0))], fR.MAX_HDRI_VALUE = 4096, fR.PRESERVE_CLAMPED_COLORS = !1
  },
  53632: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.h,
      h: () => yR.q
    });
    var yR = GR(41564);
    (0, yR.u)()
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  53831: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(53823),
      tR = GR(53836);
    class uR {
      static ExpandRGBDTexture(RR) {
        const JR = RR._texture;
        if (!JR || !RR.isRGBD) return;
        const tR = JR.ke(),
          uR = tR.getCaps(),
          ZR = JR.isReady;
        let qR = !1;
        uR.textureHalfFloatRender && uR.textureHalfFloatLinearFiltering ? (qR = !0, JR.type = 2) : uR.textureFloatRender && uR.textureFloatLinearFiltering && (qR = !0, JR.type = 1), qR && (JR.isReady = !1, JR._isRGBD = !1, JR.invertY = !1);
        const iR = async () => {
          const uR = tR.isWebGPU,
            ZR = uR ? 1 : 0;
          JR.isReady = !1, uR ? await GR.e(660).then((() => GR(64253))) : await GR.e(642).then((() => GR(64257)));
          const qR = new yR.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tR, !1, void 0, JR.type, void 0, null, !1, void 0, ZR);
          qR.externalTextureSamplerBinding = !0;
          const iR = tR.createRenderTargetTexture(JR.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: JR.samplingMode,
            type: JR.type,
            format: 5
          });
          qR.onEffectCreatedObservable.addOnce((GR => {
            GR.executeWhenCompiled((() => {
              qR.onApply = RR => {
                RR._bindTexture("textureSampler", JR), RR.setFloat2("scale", 1, 1)
              }, RR.jH()?.postProcessManager.directRender([qR], iR, !0), tR.restoreDefaultFramebuffer(), tR._releaseTexture(JR), qR && qR.dispose(), iR._swapAndDie(JR), JR.isReady = !0
            }))
          }))
        };
        qR && (ZR ? iR() : RR.onLoadObservable.addOnce(iR))
      }
      static async EncodeTextureToRGBD(RR, JR) {
        let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return JR.ke().isWebGPU ? await GR.e(661).then((() => GR(64281))) : await GR.e(643).then((() => GR(64274))), await (0, tR.e)("rgbdEncode", RR, JR, yR, 1, 5)
      }
    }
  },
  64132: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AsyncLoop: () => yR.c,
      RegisterTools: () => yR.e,
      Tools: () => yR.h,
      className: () => yR.k
    });
    var yR = GR(41616);
    (0, yR.e)()
  },
  53887: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    class yR {
      constructor(RR) {
        this._pendingActions = new Array, this._workerInfos = RR.map((RR => ({
          workerPromise: Promise.resolve(RR),
          idle: !0
        })))
      }
      dispose() {
        for (const RR of this._workerInfos) RR.workerPromise.then((RR => {
          RR.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(RR) {
        this._executeOnIdleWorker(RR) || this._pendingActions.push(RR)
      }
      _executeOnIdleWorker(RR) {
        for (const JR of this._workerInfos)
          if (JR.idle) return this._execute(JR, RR), !0;
        return !1
      }
      _execute(RR, JR) {
        RR.idle = !1, RR.workerPromise.then((GR => {
          JR(GR, (() => {
            const JR = this._pendingActions.shift();
            JR ? this._execute(RR, JR) : RR.idle = !0
          }))
        }))
      }
    }
    class tR extends yR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.DefaultOptions;
        super([]), this._maxWorkers = RR, this._createWorkerAsync = JR, this._options = GR
      }
      push(RR) {
        if (!this._executeOnIdleWorker(RR))
          if (this._workerInfos.length < this._maxWorkers) {
            const JR = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(JR), this._execute(JR, RR)
          } else this._pendingActions.push(RR)
      }
      _execute(RR, JR) {
        RR.timeoutId && (clearTimeout(RR.timeoutId), delete RR.timeoutId), super._execute(RR, ((GR, yR) => {
          JR(GR, (() => {
            yR(), RR.idle && (RR.timeoutId = setTimeout((() => {
              RR.workerPromise.then((RR => {
                RR.terminate()
              }));
              const JR = this._workerInfos.indexOf(RR); - 1 !== JR && this._workerInfos.splice(JR, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    tR.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64157: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AbstractThreeMfSerializer: () => Yq,
      BVHExporter: () => pZ,
      ContentTypeFileName: () => eq,
      DefaultXmlSerializerFormatOptions: () => SZ,
      DefaultXmlSerializerNumberOptions: () => zZ,
      EXT_lights_area: () => nt,
      EXT_mesh_gpu_instancing: () => Py,
      EXT_texture_avif: () => uZ,
      EXT_texture_webp: () => JZ,
      GLTF2Export: () => Hy,
      GLTFData: () => fR,
      GetXmlFieldMeta: () => oZ,
      GetXmlName: () => cZ,
      IsQualifiedName: () => gZ,
      KHR_draco_mesh_compression: () => Ty,
      KHR_interactivity: () => ft,
      KHR_lights_punctual: () => ut,
      KHR_materials_anisotropy: () => Ct,
      KHR_materials_clearcoat: () => pt,
      KHR_materials_coat: () => Nt,
      KHR_materials_diffuse_roughness: () => cu,
      KHR_materials_diffuse_transmission: () => It,
      KHR_materials_dispersion: () => jt,
      KHR_materials_emissive_strength: () => kt,
      KHR_materials_fuzz: () => Ku,
      KHR_materials_ior: () => st,
      KHR_materials_iridescence: () => Gu,
      KHR_materials_openpbr: () => zu,
      KHR_materials_sheen: () => Zu,
      KHR_materials_specular: () => au,
      KHR_materials_transmission: () => Wu,
      KHR_materials_unlit: () => Bu,
      KHR_materials_volume: () => bu,
      KHR_materials_volume_scatter: () => Nu,
      KHR_texture_basisu: () => Tu,
      KHR_texture_transform: () => Eu,
      Known3mfRelationshipTypes: () => aq,
      KnownI3mfContentType: () => fq,
      Matrix3d: () => Cq,
      MatrixFormatter: () => Xq,
      ModelFileName: () => wq,
      NumberFormatter: () => EZ,
      OBJExport: () => ZR,
      Object3dDirName: () => Kq,
      OpenXmlContentTypesNamespace: () => qq,
      OpenXmlRelationshipsNamespace: () => iq,
      RegisterEXT_lights_area: () => Wt,
      RegisterEXT_mesh_gpu_instancing: () => my,
      RegisterEXT_texture_avif: () => qZ,
      RegisterEXT_texture_webp: () => yZ,
      RegisterKHR_draco_mesh_compression: () => hy,
      RegisterKHR_interactivity: () => Kt,
      RegisterKHR_lights_punctual: () => qt,
      RegisterKHR_materials_anisotropy: () => Mt,
      RegisterKHR_materials_clearcoat: () => bt,
      RegisterKHR_materials_coat: () => Ht,
      RegisterKHR_materials_diffuse_roughness: () => Iu,
      RegisterKHR_materials_diffuse_transmission: () => zt,
      RegisterKHR_materials_dispersion: () => Et,
      RegisterKHR_materials_emissive_strength: () => Ft,
      RegisterKHR_materials_fuzz: () => ru,
      RegisterKHR_materials_ior: () => Ru,
      RegisterKHR_materials_iridescence: () => tu,
      RegisterKHR_materials_openpbr: () => ju,
      RegisterKHR_materials_sheen: () => iu,
      RegisterKHR_materials_specular: () => nu,
      RegisterKHR_materials_transmission: () => Cu,
      RegisterKHR_materials_unlit: () => pu,
      RegisterKHR_materials_volume: () => Ou,
      RegisterKHR_materials_volume_scatter: () => Hu,
      RegisterKHR_texture_basisu: () => hu,
      RegisterKHR_texture_transform: () => ku,
      RelationshipDirName: () => Vq,
      RelationshipFileName: () => rq,
      ResolveFormatOptions: () => dZ,
      ResolveNumberOptions: () => jZ,
      STLExport: () => iZ,
      ST_ObjectType: () => Zq,
      ST_Unit: () => uq,
      StringXmlWriter: () => Jq,
      ThreeDimModelNamespace: () => yq,
      ThreeMf: () => kq,
      ThreeMfBase: () => cq,
      ThreeMfBaseMaterials: () => oq,
      ThreeMfBuild: () => Pq,
      ThreeMfComponent: () => Hq,
      ThreeMfComponents: () => Dq,
      ThreeMfComponentsBuilder: () => zq,
      ThreeMfContentType: () => nq,
      ThreeMfContentTypes: () => Lq,
      ThreeMfDocument: () => Aq,
      ThreeMfDocumentBuilder: () => Eq,
      ThreeMfItem: () => Iq,
      ThreeMfMaterialBuilder: () => jq,
      ThreeMfMesh: () => bq,
      ThreeMfMeshBuilder: () => Sq,
      ThreeMfMeta: () => Bq,
      ThreeMfMetadataGroup: () => lq,
      ThreeMfModel: () => Mq,
      ThreeMfModelBuilder: () => dq,
      ThreeMfObject: () => gq,
      ThreeMfObjectBuilder: () => mq,
      ThreeMfRelationship: () => Wq,
      ThreeMfRelationships: () => Uq,
      ThreeMfResources: () => pq,
      ThreeMfSerializer: () => Tq,
      ThreeMfSerializerGlobalConfiguration: () => Qq,
      ThreeMfTriangle: () => Nq,
      ThreeMfTriangles: () => xq,
      ThreeMfVertex: () => Oq,
      ThreeMfVertices: () => vq,
      ToQualifiedString: () => mZ,
      TokenType: () => hZ,
      TriangleSetsNamespace: () => tq,
      USDZExportAsync: () => BZ,
      Utf8XmlWriterToBytes: () => Gq,
      XmlAttr: () => DZ,
      XmlBuilder: () => Rq,
      XmlElem: () => HZ,
      XmlIgnore: () => NZ,
      XmlName: () => xZ,
      XmlNameToParts: () => IZ,
      XmlSerializer: () => TZ,
      _ConvertToGLTFPBRMetallicRoughness: () => lG,
      _SolveMetallic: () => BG,
      __IGLTFExporterExtension: () => qR
    });
    var yR = GR(38195),
      tR = GR(64132),
      uR = GR(41810);
    class ZR {
      static OBJ(RR, JR, GR, ZR) {
        const qR = [];
        let iR = 1,
          fR = 1;
        JR && (GR || (GR = "mat"), qR.push("mtllib " + GR + ".mtl"));
        for (let VR = 0; VR < RR.length; VR++) {
          const GR = RR[VR],
            KR = GR.name || `mesh${VR}}`;
          qR.push(`o ${KR}`);
          let wR = null;
          if (ZR) {
            const RR = GR.computeWorldMatrix(!0);
            wR = new yR.Matrix, RR.invertToRef(wR), GR.bakeTransformIntoVertices(RR)
          }
          if (JR) {
            const RR = GR.material;
            RR && qR.push("usemtl " + RR.id)
          }
          const rR = GR.geometry;
          if (!rR) {
            tR.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const eR = rR.getVerticesData("position"),
            aR = rR.getVerticesData("normal"),
            LR = rR.getVerticesData("uv"),
            nR = rR.NuR();
          let UR = 0,
            WR = 0;
          if (!eR || !nR) {
            tR.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const AR = RR[0].jH().useRightHandedSystem ? 1 : -1;
          for (let RR = 0; RR < eR.length; RR += 3) qR.push("v " + eR[RR] * AR + " " + eR[RR + 1] + " " + eR[RR + 2]), UR++;
          if (null != aR)
            for (let RR = 0; RR < aR.length; RR += 3) qR.push("vn " + aR[RR] * AR + " " + aR[RR + 1] + " " + aR[RR + 2]);
          if (null != LR)
            for (let RR = 0; RR < LR.length; RR += 2) qR.push("vt " + LR[RR] + " " + LR[RR + 1]), WR++;
          const CR = ["", "", ""],
            XR = (GR.material || GR.jH().defaultMaterial)._getEffectiveOrientation(GR),
            [MR, BR] = XR === uR.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let RR = 0; RR < nR.length; RR += 3) {
            const JR = [String(nR[RR] + iR), String(nR[RR + MR] + iR), String(nR[RR + BR] + iR)],
              GR = [String(nR[RR] + fR), String(nR[RR + MR] + fR), String(nR[RR + BR] + fR)],
              yR = JR,
              tR = null != LR ? GR : CR,
              uR = null != aR ? JR : CR;
            qR.push("f " + yR[0] + "/" + tR[0] + "/" + uR[0] + " " + yR[1] + "/" + tR[1] + "/" + uR[1] + " " + yR[2] + "/" + tR[2] + "/" + uR[2])
          }
          ZR && wR && GR.bakeTransformIntoVertices(wR), iR += UR, fR += WR
        }
        return qR.join("\n")
      }
      static MTL(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const GR = [],
          yR = RR.material;
        GR.push("newmtl " + JR), GR.push("  Ns " + yR.specularPower.toFixed(4)), GR.push("  Ni 1.5000"), GR.push("  d " + yR.alpha.toFixed(4)), GR.push("  Tr 0.0000"), GR.push("  Tf 1.0000 1.0000 1.0000"), GR.push("  illum 2"), GR.push("  Ka " + yR.ambientColor.r.toFixed(4) + " " + yR.ambientColor.g.toFixed(4) + " " + yR.ambientColor.b.toFixed(4)), GR.push("  Kd " + yR.diffuseColor.r.toFixed(4) + " " + yR.diffuseColor.g.toFixed(4) + " " + yR.diffuseColor.b.toFixed(4)), GR.push("  Ks " + yR.specularColor.r.toFixed(4) + " " + yR.specularColor.g.toFixed(4) + " " + yR.specularColor.b.toFixed(4)), GR.push("  Ke " + yR.emissiveColor.r.toFixed(4) + " " + yR.emissiveColor.g.toFixed(4) + " " + yR.emissiveColor.b.toFixed(4));
        yR.ambientTexture && GR.push("  map_Ka " + yR.ambientTexture.name), yR.diffuseTexture && GR.push("  map_Kd " + yR.diffuseTexture.name), yR.specularTexture && GR.push("  map_Ks " + yR.specularTexture.name), yR.bumpTexture && GR.push("  map_bump -imfchan z " + yR.bumpTexture.name), yR.opacityTexture && GR.push("  map_d " + yR.opacityTexture.name);
        return GR.join("\n")
      }
    }
    var qR = 0,
      iR = GR(53632);
    class fR {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const RR in this.files) {
          const JR = this.files[RR],
            GR = new Blob([JR], {
              type: (0, iR.d)(RR)
            });
          tR.Tools.Download(GR, RR)
        }
      }
    }
    var VR = GR(42711),
      KR = GR(42644),
      wR = GR(53615),
      rR = GR(42657),
      eR = GR(41352),
      aR = GR(38224),
      LR = GR(38329),
      nR = GR(38239);
    const UR = nR.HighestCommonFactor,
      WR = {
        ...nR,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: UR
      };
    var AR = GR(53836),
      CR = GR(42685),
      XR = GR(53579),
      MR = GR(53584),
      BR = GR(53856);
    (0, BR.RegisterDumpTools)();
    var lR = GR(41520),
      pR = GR(41524),
      gR = GR(39914),
      bR = GR(41626),
      vR = GR(42011),
      OR = GR(53831);
    let xR = 0;
    const NR = (RR, JR, GR, yR) => {
        if (!RR[GR]) {
          const tR = RR.useDelayedTextureLoading;
          RR.useDelayedTextureLoading = !1;
          const uR = RR._blockEntityCollection;
          RR._blockEntityCollection = !1;
          const ZR = vR.f.CreateFromBase64String(JR, yR + xR++, RR, !0, !1, vR.f.BILINEAR_SAMPLINGMODE);
          RR._blockEntityCollection = uR;
          const qR = RR.ke().getLoadedTexturesCache(),
            iR = qR.indexOf(ZR.getInternalTexture()); - 1 !== iR && qR.splice(iR, 1), ZR.isRGBD = !0, ZR.wrapU = vR.f.CLAMP_ADDRESSMODE, ZR.wrapV = vR.f.CLAMP_ADDRESSMODE, RR[GR] = ZR, RR.useDelayedTextureLoading = tR, OR.e.ExpandRGBDTexture(ZR);
          const fR = RR.ke().Ye.add((() => {
            ZR.isRGBD = !0;
            const JR = RR.onBeforeRenderObservable.add((() => {
              ZR.isReady() && (RR.onBeforeRenderObservable.remove(JR), OR.e.ExpandRGBDTexture(ZR))
            }))
          }));
          RR.YH.add((() => {
            RR.ke().Ye.remove(fR)
          }))
        }
        return RR[GR]
      },
      DR = RR => NR(RR, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      HR = RR => NR(RR, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      oR = RR => NR(RR, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var cR = GR(41612),
      PR = GR(38204),
      IR = GR(41663),
      mR = GR(41803),
      zR = GR(41890);
    class SR extends mR.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let jR = (() => {
      var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR;
      let VR, KR, wR, rR, eR, aR, LR, nR, UR, WR = zR.b,
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [];
      return RR = class extends WR {
        get useEnergyConservation() {
          return (0, lR.e)(this, JR, "f")
        }
        set useEnergyConservation(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, lR.e)(this, GR, "f")
        }
        set useSmithVisibilityHeightCorrelated(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get useSphericalHarmonics() {
          return (0, lR.e)(this, yR, "f")
        }
        set useSphericalHarmonics(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, lR.e)(this, tR, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(RR) {
          (0, lR.i)(this, tR, RR, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, lR.e)(this, uR, "f")
        }
        set mixIblRadianceWithIrradiance(RR) {
          (0, lR.i)(this, uR, RR, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, lR.e)(this, ZR, "f")
        }
        set useLegacySpecularEnergyConservation(RR) {
          (0, lR.i)(this, ZR, RR, "f")
        }
        get baseDiffuseModel() {
          return (0, lR.e)(this, qR, "f")
        }
        set baseDiffuseModel(RR) {
          (0, lR.i)(this, qR, RR, "f")
        }
        get dielectricSpecularModel() {
          return (0, lR.e)(this, iR, "f")
        }
        set dielectricSpecularModel(RR) {
          (0, lR.i)(this, iR, RR, "f")
        }
        get conductorSpecularModel() {
          return (0, lR.e)(this, fR, "f")
        }
        set conductorSpecularModel(RR) {
          (0, lR.i)(this, fR, RR, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VR) {
          let KR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VR, "PBRBRDF", 90, new SR, KR), this._useEnergyConservation = RR.DEFAULT_USE_ENERGY_CONSERVATION, JR.set(this, (0, lR.m)(this, AR, RR.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, lR.m)(this, CR), RR.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), GR.set(this, (0, lR.m)(this, XR, RR.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, lR.m)(this, MR), RR.DEFAULT_USE_SPHERICAL_HARMONICS), yR.set(this, (0, lR.m)(this, BR, RR.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, lR.m)(this, gR), RR.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), tR.set(this, (0, lR.m)(this, bR, RR.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, lR.m)(this, vR), RR.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), uR.set(this, (0, lR.m)(this, OR, RR.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, lR.m)(this, xR), RR.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), ZR.set(this, (0, lR.m)(this, NR, RR.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, lR.m)(this, DR), RR.DEFAULT_DIFFUSE_MODEL), qR.set(this, (0, lR.m)(this, HR, RR.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, lR.m)(this, oR), RR.DEFAULT_DIELECTRIC_SPECULAR_MODEL), iR.set(this, (0, lR.m)(this, cR, RR.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, lR.m)(this, PR), RR.DEFAULT_CONDUCTOR_SPECULAR_MODEL), fR.set(this, (0, lR.m)(this, IR, RR.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, lR.m)(this, mR), this._internalMarkAllSubMeshesAsMiscDirty = VR._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(RR) {
          RR.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, RR.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, RR.SPHERICAL_HARMONICS = this._useSphericalHarmonics, RR.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, RR.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, RR.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, RR.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, RR.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, RR.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, tR = new WeakMap, uR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, iR = new WeakMap, fR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(WR[Symbol.metadata] ?? null) : void 0;
        VR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], KR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], wR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], rR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], eR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], aR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], LR = [(0, pR.H)("baseDiffuseModel"), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], nR = [(0, pR.H)("dielectricSpecularModel"), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], UR = [(0, pR.H)("conductorSpecularModel"), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], (0, lR.l)(RR, null, VR, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: RR => "useEnergyConservation" in RR,
            get: RR => RR.useEnergyConservation,
            set: (RR, JR) => {
              RR.useEnergyConservation = JR
            }
          },
          metadata: JR
        }, AR, CR), (0, lR.l)(RR, null, KR, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: RR => "useSmithVisibilityHeightCorrelated" in RR,
            get: RR => RR.useSmithVisibilityHeightCorrelated,
            set: (RR, JR) => {
              RR.useSmithVisibilityHeightCorrelated = JR
            }
          },
          metadata: JR
        }, XR, MR), (0, lR.l)(RR, null, wR, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: RR => "useSphericalHarmonics" in RR,
            get: RR => RR.useSphericalHarmonics,
            set: (RR, JR) => {
              RR.useSphericalHarmonics = JR
            }
          },
          metadata: JR
        }, BR, gR), (0, lR.l)(RR, null, rR, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: RR => "useSpecularGlossinessInputEnergyConservation" in RR,
            get: RR => RR.useSpecularGlossinessInputEnergyConservation,
            set: (RR, JR) => {
              RR.useSpecularGlossinessInputEnergyConservation = JR
            }
          },
          metadata: JR
        }, bR, vR), (0, lR.l)(RR, null, eR, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: RR => "mixIblRadianceWithIrradiance" in RR,
            get: RR => RR.mixIblRadianceWithIrradiance,
            set: (RR, JR) => {
              RR.mixIblRadianceWithIrradiance = JR
            }
          },
          metadata: JR
        }, OR, xR), (0, lR.l)(RR, null, aR, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: RR => "useLegacySpecularEnergyConservation" in RR,
            get: RR => RR.useLegacySpecularEnergyConservation,
            set: (RR, JR) => {
              RR.useLegacySpecularEnergyConservation = JR
            }
          },
          metadata: JR
        }, NR, DR), (0, lR.l)(RR, null, LR, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: RR => "baseDiffuseModel" in RR,
            get: RR => RR.baseDiffuseModel,
            set: (RR, JR) => {
              RR.baseDiffuseModel = JR
            }
          },
          metadata: JR
        }, HR, oR), (0, lR.l)(RR, null, nR, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: RR => "dielectricSpecularModel" in RR,
            get: RR => RR.dielectricSpecularModel,
            set: (RR, JR) => {
              RR.dielectricSpecularModel = JR
            }
          },
          metadata: JR
        }, cR, PR), (0, lR.l)(RR, null, UR, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: RR => "conductorSpecularModel" in RR,
            get: RR => RR.conductorSpecularModel,
            set: (RR, JR) => {
              RR.conductorSpecularModel = JR
            }
          },
          metadata: JR
        }, IR, mR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR.DEFAULT_USE_ENERGY_CONSERVATION = !0, RR.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, RR.DEFAULT_USE_SPHERICAL_HARMONICS = !0, RR.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, RR.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, RR.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, RR.DEFAULT_DIFFUSE_MODEL = 0, RR.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, RR.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, RR
    })();
    var dR = GR(41789),
      ER = GR(38331),
      YR = GR(41797),
      kR = GR(41634),
      QR = GR(41869),
      FR = GR(41860),
      TR = GR(41873),
      sR = GR(41852);
    class hR extends mR.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let RJ = (() => {
      var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR;
      let VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR = zR.b,
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        SR = [],
        jR = [],
        dR = [],
        YR = [],
        kR = [],
        QR = [],
        TR = [],
        RJ = [],
        JJ = [],
        GJ = [],
        yJ = [],
        tJ = [],
        uJ = [],
        ZJ = [],
        qJ = [];
      return RR = class extends BR {
        get isEnabled() {
          return (0, lR.e)(this, JR, "f")
        }
        set isEnabled(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get indexOfRefraction() {
          return (0, lR.e)(this, GR, "f")
        }
        set indexOfRefraction(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get texture() {
          return (0, lR.e)(this, yR, "f")
        }
        set texture(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, lR.e)(this, tR, "f")
        }
        set useRoughnessFromMainTexture(RR) {
          (0, lR.i)(this, tR, RR, "f")
        }
        get textureRoughness() {
          return (0, lR.e)(this, uR, "f")
        }
        set textureRoughness(RR) {
          (0, lR.i)(this, uR, RR, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, lR.e)(this, ZR, "f")
        }
        set remapF0OnInterfaceChange(RR) {
          (0, lR.i)(this, ZR, RR, "f")
        }
        get bumpTexture() {
          return (0, lR.e)(this, qR, "f")
        }
        set bumpTexture(RR) {
          (0, lR.i)(this, qR, RR, "f")
        }
        get isTintEnabled() {
          return (0, lR.e)(this, iR, "f")
        }
        set isTintEnabled(RR) {
          (0, lR.i)(this, iR, RR, "f")
        }
        get tintTexture() {
          return (0, lR.e)(this, fR, "f")
        }
        set tintTexture(RR) {
          (0, lR.i)(this, fR, RR, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VR) {
          let KR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VR, "PBRClearCoat", 100, new hR, KR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, gR, !1)), this.intensity = ((0, lR.m)(this, bR), (0, lR.m)(this, vR, 1)), this.roughness = ((0, lR.m)(this, OR), (0, lR.m)(this, xR, 0)), this._indexOfRefraction = ((0, lR.m)(this, NR), RR._DefaultIndexOfRefraction), GR.set(this, (0, lR.m)(this, DR, RR._DefaultIndexOfRefraction)), this._texture = ((0, lR.m)(this, HR), null), yR.set(this, (0, lR.m)(this, oR, null)), this._useRoughnessFromMainTexture = ((0, lR.m)(this, cR), !0), tR.set(this, (0, lR.m)(this, PR, !0)), this._textureRoughness = ((0, lR.m)(this, IR), null), uR.set(this, (0, lR.m)(this, mR, null)), this._remapF0OnInterfaceChange = ((0, lR.m)(this, SR), !0), ZR.set(this, (0, lR.m)(this, jR, !0)), this._bumpTexture = ((0, lR.m)(this, dR), null), qR.set(this, (0, lR.m)(this, YR, null)), this._isTintEnabled = ((0, lR.m)(this, kR), !1), iR.set(this, (0, lR.m)(this, QR, !1)), this.tintColor = ((0, lR.m)(this, TR), (0, lR.m)(this, RJ, ER.d.White())), this.tintColorAtDistance = ((0, lR.m)(this, JJ), (0, lR.m)(this, GJ, 1)), this.tintThickness = ((0, lR.m)(this, yJ), (0, lR.m)(this, tJ, 1)), this._tintTexture = ((0, lR.m)(this, uJ), null), fR.set(this, (0, lR.m)(this, ZJ, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, lR.m)(this, qJ), this._internalMarkAllSubMeshesAsTexturesDirty = VR._dirtyCallbacks[1]
        }
        isReadyForSubMesh(RR, JR, GR) {
          if (!this._isEnabled) return !0;
          const yR = this._material._disableBumpMap;
          if (RR._areTexturesDirty && JR.texturesEnabled) {
            if (this._texture && FR.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && FR.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (GR.getCaps().standardDerivatives && this._bumpTexture && FR.b.ClearCoatBumpTextureEnabled && !yR && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && FR.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(JR, GR) {
          this._isEnabled ? (JR.CLEARCOAT = !0, JR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, JR.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, JR._areTexturesDirty && GR.texturesEnabled && (this._texture && FR.b.ClearCoatTextureEnabled ? (0, sR.db)(this._texture, JR, "CLEARCOAT_TEXTURE") : JR.CLEARCOAT_TEXTURE = !1, this._textureRoughness && FR.b.ClearCoatTextureEnabled ? (0, sR.db)(this._textureRoughness, JR, "CLEARCOAT_TEXTURE_ROUGHNESS") : JR.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && FR.b.ClearCoatBumpTextureEnabled ? (0, sR.db)(this._bumpTexture, JR, "CLEARCOAT_BUMP") : JR.CLEARCOAT_BUMP = !1, JR.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === RR._DefaultIndexOfRefraction, this._isTintEnabled ? (JR.CLEARCOAT_TINT = !0, this._tintTexture && FR.b.ClearCoatTintTextureEnabled ? ((0, sR.db)(this._tintTexture, JR, "CLEARCOAT_TINT_TEXTURE"), JR.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : JR.CLEARCOAT_TINT_TEXTURE = !1) : (JR.CLEARCOAT_TINT = !1, JR.CLEARCOAT_TINT_TEXTURE = !1))) : (JR.CLEARCOAT = !1, JR.CLEARCOAT_TEXTURE = !1, JR.CLEARCOAT_TEXTURE_ROUGHNESS = !1, JR.CLEARCOAT_BUMP = !1, JR.CLEARCOAT_TINT = !1, JR.CLEARCOAT_TINT_TEXTURE = !1, JR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, JR.CLEARCOAT_DEFAULTIOR = !1, JR.CLEARCOAT_TEXTUREDIRECTUV = 0, JR.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, JR.CLEARCOAT_BUMPDIRECTUV = 0, JR.CLEARCOAT_REMAP_F0 = !1, JR.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, JR.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(RR, JR, GR, yR) {
          if (!this._isEnabled) return;
          const tR = yR.materialDefines,
            uR = this._material.isFrozen,
            ZR = this._material._disableBumpMap,
            qR = this._material._invertNormalMapX,
            iR = this._material._invertNormalMapY;
          if (!RR.useUbo || !uR || !RR.isSync) {
            (this._texture || this._textureRoughness) && FR.b.ClearCoatTextureEnabled && (RR.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, sR.B)(this._texture, RR, "clearCoat"), this._textureRoughness && !tR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, sR.B)(this._textureRoughness, RR, "clearCoatRoughness")), this._bumpTexture && GR.getCaps().standardDerivatives && FR.b.ClearCoatTextureEnabled && !ZR && (RR.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, sR.B)(this._bumpTexture, RR, "clearCoatBump"), JR._mirroredCameraPosition ? RR.updateFloat2("vClearCoatTangentSpaceParams", qR ? 1 : -1, iR ? 1 : -1) : RR.updateFloat2("vClearCoatTangentSpaceParams", qR ? -1 : 1, iR ? -1 : 1)), this._tintTexture && FR.b.ClearCoatTintTextureEnabled && (RR.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, sR.B)(this._tintTexture, RR, "clearCoatTint")), RR.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const yR = 1 - this._indexOfRefraction,
              uR = 1 + this._indexOfRefraction,
              fR = Math.pow(-yR / uR, 2),
              VR = 1 / this._indexOfRefraction;
            RR.updateFloat4("vClearCoatRefractionParams", fR, VR, yR, uR), this._isTintEnabled && (RR.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), RR.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          JR.texturesEnabled && (this._texture && FR.b.ClearCoatTextureEnabled && RR.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !tR.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && FR.b.ClearCoatTextureEnabled && RR.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && GR.getCaps().standardDerivatives && FR.b.ClearCoatBumpTextureEnabled && !ZR && RR.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && FR.b.ClearCoatTintTextureEnabled && RR.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(RR) {
          return this._texture === RR || (this._textureRoughness === RR || (this._bumpTexture === RR || this._tintTexture === RR))
        }
        getActiveTextures(RR) {
          this._texture && RR.push(this._texture), this._textureRoughness && RR.push(this._textureRoughness), this._bumpTexture && RR.push(this._bumpTexture), this._tintTexture && RR.push(this._tintTexture)
        }
        getAnimatables(RR) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && RR.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && RR.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && RR.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && RR.push(this._tintTexture)
        }
        dispose(RR) {
          RR && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(RR, JR, GR) {
          return RR.CLEARCOAT_BUMP && JR.addFallback(GR++, "CLEARCOAT_BUMP"), RR.CLEARCOAT_TINT && JR.addFallback(GR++, "CLEARCOAT_TINT"), RR.CLEARCOAT && JR.addFallback(GR++, "CLEARCOAT"), GR
        }
        getSamplers(RR) {
          RR.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, tR = new WeakMap, uR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, iR = new WeakMap, fR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(BR[Symbol.metadata] ?? null) : void 0;
        VR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], KR = [(0, pR.H)()], wR = [(0, pR.H)()], rR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], eR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], WR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], AR = [(0, pR.k)()], CR = [(0, pR.H)()], XR = [(0, pR.H)()], MR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], (0, lR.l)(RR, null, VR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: JR
        }, gR, bR), (0, lR.l)(RR, null, rR, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: RR => "indexOfRefraction" in RR,
            get: RR => RR.indexOfRefraction,
            set: (RR, JR) => {
              RR.indexOfRefraction = JR
            }
          },
          metadata: JR
        }, DR, HR), (0, lR.l)(RR, null, eR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: RR => "texture" in RR,
            get: RR => RR.texture,
            set: (RR, JR) => {
              RR.texture = JR
            }
          },
          metadata: JR
        }, oR, cR), (0, lR.l)(RR, null, aR, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRoughnessFromMainTexture" in RR,
            get: RR => RR.useRoughnessFromMainTexture,
            set: (RR, JR) => {
              RR.useRoughnessFromMainTexture = JR
            }
          },
          metadata: JR
        }, PR, IR), (0, lR.l)(RR, null, LR, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "textureRoughness" in RR,
            get: RR => RR.textureRoughness,
            set: (RR, JR) => {
              RR.textureRoughness = JR
            }
          },
          metadata: JR
        }, mR, SR), (0, lR.l)(RR, null, nR, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: RR => "remapF0OnInterfaceChange" in RR,
            get: RR => RR.remapF0OnInterfaceChange,
            set: (RR, JR) => {
              RR.remapF0OnInterfaceChange = JR
            }
          },
          metadata: JR
        }, jR, dR), (0, lR.l)(RR, null, UR, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "bumpTexture" in RR,
            get: RR => RR.bumpTexture,
            set: (RR, JR) => {
              RR.bumpTexture = JR
            }
          },
          metadata: JR
        }, YR, kR), (0, lR.l)(RR, null, WR, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isTintEnabled" in RR,
            get: RR => RR.isTintEnabled,
            set: (RR, JR) => {
              RR.isTintEnabled = JR
            }
          },
          metadata: JR
        }, QR, TR), (0, lR.l)(RR, null, MR, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintTexture" in RR,
            get: RR => RR.tintTexture,
            set: (RR, JR) => {
              RR.tintTexture = JR
            }
          },
          metadata: JR
        }, ZJ, qJ), (0, lR.l)(null, null, KR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensity" in RR,
            get: RR => RR.intensity,
            set: (RR, JR) => {
              RR.intensity = JR
            }
          },
          metadata: JR
        }, vR, OR), (0, lR.l)(null, null, wR, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "roughness" in RR,
            get: RR => RR.roughness,
            set: (RR, JR) => {
              RR.roughness = JR
            }
          },
          metadata: JR
        }, xR, NR), (0, lR.l)(null, null, AR, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintColor" in RR,
            get: RR => RR.tintColor,
            set: (RR, JR) => {
              RR.tintColor = JR
            }
          },
          metadata: JR
        }, RJ, JJ), (0, lR.l)(null, null, CR, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintColorAtDistance" in RR,
            get: RR => RR.tintColorAtDistance,
            set: (RR, JR) => {
              RR.tintColorAtDistance = JR
            }
          },
          metadata: JR
        }, GJ, yJ), (0, lR.l)(null, null, XR, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintThickness" in RR,
            get: RR => RR.tintThickness,
            set: (RR, JR) => {
              RR.tintThickness = JR
            }
          },
          metadata: JR
        }, tJ, uJ), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR._DefaultIndexOfRefraction = 1.5, RR
    })();
    class JJ extends mR.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let GJ = (() => {
      var RR, JR, GR, yR;
      let tR, uR, ZR, qR, iR, fR, VR, KR = zR.b,
        wR = [],
        rR = [],
        eR = [],
        aR = [],
        LR = [],
        nR = [],
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        gR = [];
      return RR = class extends KR {
        get isEnabled() {
          return (0, lR.e)(this, JR, "f")
        }
        set isEnabled(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get texture() {
          return (0, lR.e)(this, GR, "f")
        }
        set texture(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get thicknessTexture() {
          return (0, lR.e)(this, yR, "f")
        }
        set thicknessTexture(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tR) {
          let uR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tR, "PBRIridescence", 110, new JJ, uR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, wR, !1)), this.intensity = ((0, lR.m)(this, rR), (0, lR.m)(this, eR, 1)), this.minimumThickness = ((0, lR.m)(this, aR), (0, lR.m)(this, LR, RR._DefaultMinimumThickness)), this.maximumThickness = ((0, lR.m)(this, nR), (0, lR.m)(this, UR, RR._DefaultMaximumThickness)), this.indexOfRefraction = ((0, lR.m)(this, WR), (0, lR.m)(this, AR, RR._DefaultIndexOfRefraction)), this._texture = ((0, lR.m)(this, CR), null), GR.set(this, (0, lR.m)(this, XR, null)), this._thicknessTexture = ((0, lR.m)(this, MR), null), yR.set(this, (0, lR.m)(this, BR, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, lR.m)(this, gR), this._internalMarkAllSubMeshesAsTexturesDirty = tR._dirtyCallbacks[1]
        }
        isReadyForSubMesh(RR, JR) {
          if (!this._isEnabled) return !0;
          if (RR._areTexturesDirty && JR.texturesEnabled) {
            if (this._texture && FR.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && FR.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(RR, JR) {
          this._isEnabled ? (RR.IRIDESCENCE = !0, RR._areTexturesDirty && JR.texturesEnabled && (this._texture && FR.b.IridescenceTextureEnabled ? (0, sR.db)(this._texture, RR, "IRIDESCENCE_TEXTURE") : RR.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && FR.b.IridescenceTextureEnabled ? (0, sR.db)(this._thicknessTexture, RR, "IRIDESCENCE_THICKNESS_TEXTURE") : RR.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (RR.IRIDESCENCE = !1, RR.IRIDESCENCE_TEXTURE = !1, RR.IRIDESCENCE_THICKNESS_TEXTURE = !1, RR.IRIDESCENCE_TEXTUREDIRECTUV = 0, RR.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(RR, JR) {
          if (!this._isEnabled) return;
          const GR = this._material.isFrozen;
          RR.useUbo && GR && RR.isSync || ((this._texture || this._thicknessTexture) && FR.b.IridescenceTextureEnabled && (RR.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, sR.B)(this._texture, RR, "iridescence"), this._thicknessTexture && (0, sR.B)(this._thicknessTexture, RR, "iridescenceThickness")), RR.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), JR.texturesEnabled && (this._texture && FR.b.IridescenceTextureEnabled && RR.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && FR.b.IridescenceTextureEnabled && RR.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(RR) {
          return this._texture === RR || this._thicknessTexture === RR
        }
        getActiveTextures(RR) {
          this._texture && RR.push(this._texture), this._thicknessTexture && RR.push(this._thicknessTexture)
        }
        getAnimatables(RR) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && RR.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && RR.push(this._thicknessTexture)
        }
        dispose(RR) {
          RR && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(RR, JR, GR) {
          return RR.IRIDESCENCE && JR.addFallback(GR++, "IRIDESCENCE"), GR
        }
        getSamplers(RR) {
          RR.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(KR[Symbol.metadata] ?? null) : void 0;
        tR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, pR.H)()], ZR = [(0, pR.H)()], qR = [(0, pR.H)()], iR = [(0, pR.H)()], fR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], (0, lR.l)(RR, null, tR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: JR
        }, wR, rR), (0, lR.l)(RR, null, fR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: RR => "texture" in RR,
            get: RR => RR.texture,
            set: (RR, JR) => {
              RR.texture = JR
            }
          },
          metadata: JR
        }, XR, MR), (0, lR.l)(RR, null, VR, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "thicknessTexture" in RR,
            get: RR => RR.thicknessTexture,
            set: (RR, JR) => {
              RR.thicknessTexture = JR
            }
          },
          metadata: JR
        }, BR, gR), (0, lR.l)(null, null, uR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensity" in RR,
            get: RR => RR.intensity,
            set: (RR, JR) => {
              RR.intensity = JR
            }
          },
          metadata: JR
        }, eR, aR), (0, lR.l)(null, null, ZR, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: RR => "minimumThickness" in RR,
            get: RR => RR.minimumThickness,
            set: (RR, JR) => {
              RR.minimumThickness = JR
            }
          },
          metadata: JR
        }, LR, nR), (0, lR.l)(null, null, qR, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: RR => "maximumThickness" in RR,
            get: RR => RR.maximumThickness,
            set: (RR, JR) => {
              RR.maximumThickness = JR
            }
          },
          metadata: JR
        }, UR, WR), (0, lR.l)(null, null, iR, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: RR => "indexOfRefraction" in RR,
            get: RR => RR.indexOfRefraction,
            set: (RR, JR) => {
              RR.indexOfRefraction = JR
            }
          },
          metadata: JR
        }, AR, CR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR._DefaultMinimumThickness = 100, RR._DefaultMaximumThickness = 400, RR._DefaultIndexOfRefraction = 1.3, RR
    })();
    class yJ extends mR.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let tJ = (() => {
      var RR, JR, GR, yR;
      let tR, uR, ZR, qR, iR, fR = zR.b,
        VR = [],
        KR = [],
        wR = [],
        rR = [],
        eR = [],
        aR = [],
        LR = [],
        nR = [],
        UR = [],
        WR = [];
      return RR = class extends fR {
        get isEnabled() {
          return (0, lR.e)(this, JR, "f")
        }
        set isEnabled(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        set angle(RR) {
          this.direction.x = Math.cos(RR), this.direction.y = Math.sin(RR)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, lR.e)(this, GR, "f")
        }
        set texture(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get legacy() {
          return (0, lR.e)(this, yR, "f")
        }
        set legacy(RR) {
          (0, lR.i)(this, yR, RR, "f")
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
        constructor(RR) {
          let tR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RR, "PBRAnisotropic", 110, new yJ, tR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, VR, !1)), this.intensity = ((0, lR.m)(this, KR), (0, lR.m)(this, wR, 1)), this.direction = ((0, lR.m)(this, rR), (0, lR.m)(this, eR, new PR.n(1, 0))), this._texture = ((0, lR.m)(this, aR), null), GR.set(this, (0, lR.m)(this, LR, null)), this._legacy = ((0, lR.m)(this, nR), !1), yR.set(this, (0, lR.m)(this, UR, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, lR.m)(this, WR), this._internalMarkAllSubMeshesAsTexturesDirty = RR._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = RR._dirtyCallbacks[16]
        }
        isReadyForSubMesh(RR, JR) {
          return !this._isEnabled || !(RR._areTexturesDirty && JR.texturesEnabled && this._texture && FR.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(RR, JR, GR) {
          this._isEnabled ? (RR.ANISOTROPIC = this._isEnabled, this._isEnabled && !GR.isVerticesDataPresent(IR.l.TangentKind) && (RR._needUVs = !0, RR.MAINUV1 = !0), RR._areTexturesDirty && JR.texturesEnabled && (this._texture && FR.b.AnisotropicTextureEnabled ? (0, sR.db)(this._texture, RR, "ANISOTROPIC_TEXTURE") : RR.ANISOTROPIC_TEXTURE = !1), RR._areMiscDirty && (RR.ANISOTROPIC_LEGACY = this._legacy)) : (RR.ANISOTROPIC = !1, RR.ANISOTROPIC_TEXTURE = !1, RR.ANISOTROPIC_TEXTUREDIRECTUV = 0, RR.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(RR, JR) {
          if (!this._isEnabled) return;
          const GR = this._material.isFrozen;
          RR.useUbo && GR && RR.isSync || (this._texture && FR.b.AnisotropicTextureEnabled && (RR.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, sR.B)(this._texture, RR, "anisotropy")), RR.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), JR.texturesEnabled && this._texture && FR.b.AnisotropicTextureEnabled && RR.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(RR) {
          return this._texture === RR
        }
        getActiveTextures(RR) {
          this._texture && RR.push(this._texture)
        }
        getAnimatables(RR) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && RR.push(this._texture)
        }
        dispose(RR) {
          RR && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(RR, JR, GR) {
          return RR.ANISOTROPIC && JR.addFallback(GR++, "ANISOTROPIC"), GR
        }
        getSamplers(RR) {
          RR.push("anisotropySampler")
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
        parse(RR, JR, GR) {
          super.parse(RR, JR, GR), void 0 === RR.legacy && (this.legacy = !0)
        }
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(fR[Symbol.metadata] ?? null) : void 0;
        tR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, pR.H)()], ZR = [(0, pR.F)()], qR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], (0, lR.l)(RR, null, tR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: JR
        }, VR, KR), (0, lR.l)(RR, null, qR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: RR => "texture" in RR,
            get: RR => RR.texture,
            set: (RR, JR) => {
              RR.texture = JR
            }
          },
          metadata: JR
        }, LR, nR), (0, lR.l)(RR, null, iR, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: RR => "legacy" in RR,
            get: RR => RR.legacy,
            set: (RR, JR) => {
              RR.legacy = JR
            }
          },
          metadata: JR
        }, UR, WR), (0, lR.l)(null, null, uR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensity" in RR,
            get: RR => RR.intensity,
            set: (RR, JR) => {
              RR.intensity = JR
            }
          },
          metadata: JR
        }, wR, rR), (0, lR.l)(null, null, ZR, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: RR => "direction" in RR,
            get: RR => RR.direction,
            set: (RR, JR) => {
              RR.direction = JR
            }
          },
          metadata: JR
        }, eR, aR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR
    })();
    class uJ extends mR.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let ZJ = (() => {
      var RR, JR, GR, yR, tR, uR, ZR, qR;
      let iR, fR, VR, KR, wR, rR, eR, aR, LR, nR = zR.b,
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [];
      return RR = class extends nR {
        get isEnabled() {
          return (0, lR.e)(this, JR, "f")
        }
        set isEnabled(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, lR.e)(this, GR, "f")
        }
        set linkSheenWithAlbedo(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get texture() {
          return (0, lR.e)(this, yR, "f")
        }
        set texture(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, lR.e)(this, tR, "f")
        }
        set useRoughnessFromMainTexture(RR) {
          (0, lR.i)(this, tR, RR, "f")
        }
        get roughness() {
          return (0, lR.e)(this, uR, "f")
        }
        set roughness(RR) {
          (0, lR.i)(this, uR, RR, "f")
        }
        get textureRoughness() {
          return (0, lR.e)(this, ZR, "f")
        }
        set textureRoughness(RR) {
          (0, lR.i)(this, ZR, RR, "f")
        }
        get albedoScaling() {
          return (0, lR.e)(this, qR, "f")
        }
        set albedoScaling(RR) {
          (0, lR.i)(this, qR, RR, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RR) {
          let iR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RR, "Sheen", 120, new uJ, iR), this._isEnabled = !1, JR.set(this, (0, lR.m)(this, UR, !1)), this._linkSheenWithAlbedo = ((0, lR.m)(this, WR), !1), GR.set(this, (0, lR.m)(this, AR, !1)), this.intensity = ((0, lR.m)(this, CR), (0, lR.m)(this, XR, 1)), this.color = ((0, lR.m)(this, MR), (0, lR.m)(this, BR, ER.d.White())), this._texture = ((0, lR.m)(this, gR), null), yR.set(this, (0, lR.m)(this, bR, null)), this._useRoughnessFromMainTexture = ((0, lR.m)(this, vR), !0), tR.set(this, (0, lR.m)(this, OR, !0)), this._roughness = ((0, lR.m)(this, xR), null), uR.set(this, (0, lR.m)(this, NR, null)), this._textureRoughness = ((0, lR.m)(this, DR), null), ZR.set(this, (0, lR.m)(this, HR, null)), this._albedoScaling = ((0, lR.m)(this, oR), !1), qR.set(this, (0, lR.m)(this, cR, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, lR.m)(this, PR), this._internalMarkAllSubMeshesAsTexturesDirty = RR._dirtyCallbacks[1]
        }
        isReadyForSubMesh(RR, JR) {
          if (!this._isEnabled) return !0;
          if (RR._areTexturesDirty && JR.texturesEnabled) {
            if (this._texture && FR.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && FR.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(RR, JR) {
          this._isEnabled ? (RR.SHEEN = !0, RR.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, RR.SHEEN_ROUGHNESS = null !== this._roughness, RR.SHEEN_ALBEDOSCALING = this._albedoScaling, RR.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, RR._areTexturesDirty && JR.texturesEnabled && (this._texture && FR.b.SheenTextureEnabled ? ((0, sR.db)(this._texture, RR, "SHEEN_TEXTURE"), RR.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : RR.SHEEN_TEXTURE = !1, this._textureRoughness && FR.b.SheenTextureEnabled ? (0, sR.db)(this._textureRoughness, RR, "SHEEN_TEXTURE_ROUGHNESS") : RR.SHEEN_TEXTURE_ROUGHNESS = !1)) : (RR.SHEEN = !1, RR.SHEEN_TEXTURE = !1, RR.SHEEN_TEXTURE_ROUGHNESS = !1, RR.SHEEN_LINKWITHALBEDO = !1, RR.SHEEN_ROUGHNESS = !1, RR.SHEEN_ALBEDOSCALING = !1, RR.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, RR.SHEEN_GAMMATEXTURE = !1, RR.SHEEN_TEXTUREDIRECTUV = 0, RR.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(RR, JR, GR, yR) {
          if (!this._isEnabled) return;
          const tR = yR.materialDefines,
            uR = this._material.isFrozen;
          RR.useUbo && uR && RR.isSync || ((this._texture || this._textureRoughness) && FR.b.SheenTextureEnabled && (RR.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, sR.B)(this._texture, RR, "sheen"), this._textureRoughness && !tR.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, sR.B)(this._textureRoughness, RR, "sheenRoughness")), RR.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && RR.updateFloat("vSheenRoughness", this._roughness)), JR.texturesEnabled && (this._texture && FR.b.SheenTextureEnabled && RR.setTexture("sheenSampler", this._texture), this._textureRoughness && !tR.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && FR.b.SheenTextureEnabled && RR.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(RR) {
          return this._texture === RR || this._textureRoughness === RR
        }
        getActiveTextures(RR) {
          this._texture && RR.push(this._texture), this._textureRoughness && RR.push(this._textureRoughness)
        }
        getAnimatables(RR) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && RR.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && RR.push(this._textureRoughness)
        }
        dispose(RR) {
          RR && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(RR, JR, GR) {
          return RR.SHEEN && JR.addFallback(GR++, "SHEEN"), GR
        }
        getSamplers(RR) {
          RR.push("sheenSampler", "sheenRoughnessSampler")
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
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, tR = new WeakMap, uR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(nR[Symbol.metadata] ?? null) : void 0;
        iR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], fR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, pR.H)()], KR = [(0, pR.k)()], wR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], rR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], eR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], (0, lR.l)(RR, null, iR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: JR
        }, UR, WR), (0, lR.l)(RR, null, fR, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: RR => "linkSheenWithAlbedo" in RR,
            get: RR => RR.linkSheenWithAlbedo,
            set: (RR, JR) => {
              RR.linkSheenWithAlbedo = JR
            }
          },
          metadata: JR
        }, AR, CR), (0, lR.l)(RR, null, wR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: RR => "texture" in RR,
            get: RR => RR.texture,
            set: (RR, JR) => {
              RR.texture = JR
            }
          },
          metadata: JR
        }, bR, vR), (0, lR.l)(RR, null, rR, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRoughnessFromMainTexture" in RR,
            get: RR => RR.useRoughnessFromMainTexture,
            set: (RR, JR) => {
              RR.useRoughnessFromMainTexture = JR
            }
          },
          metadata: JR
        }, OR, xR), (0, lR.l)(RR, null, eR, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "roughness" in RR,
            get: RR => RR.roughness,
            set: (RR, JR) => {
              RR.roughness = JR
            }
          },
          metadata: JR
        }, NR, DR), (0, lR.l)(RR, null, aR, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "textureRoughness" in RR,
            get: RR => RR.textureRoughness,
            set: (RR, JR) => {
              RR.textureRoughness = JR
            }
          },
          metadata: JR
        }, HR, oR), (0, lR.l)(RR, null, LR, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: RR => "albedoScaling" in RR,
            get: RR => RR.albedoScaling,
            set: (RR, JR) => {
              RR.albedoScaling = JR
            }
          },
          metadata: JR
        }, cR, PR), (0, lR.l)(null, null, VR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "intensity" in RR,
            get: RR => RR.intensity,
            set: (RR, JR) => {
              RR.intensity = JR
            }
          },
          metadata: JR
        }, XR, MR), (0, lR.l)(null, null, KR, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: RR => "color" in RR,
            get: RR => RR.color,
            set: (RR, JR) => {
              RR.color = JR
            }
          },
          metadata: JR
        }, BR, gR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR
    })();
    class qJ extends mR.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let iJ = (() => {
      var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR;
      let nR, UR, WR, AR, CR, XR, MR, BR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, IR, mR, SR, jR, dR, YR, kR, QR, TR, hR, RJ, JJ, GJ = zR.b,
        yJ = [],
        tJ = [],
        uJ = [],
        ZJ = [],
        iJ = [],
        fJ = [],
        VJ = [],
        KJ = [],
        wJ = [],
        rJ = [],
        eJ = [],
        aJ = [],
        LJ = [],
        nJ = [],
        UJ = [],
        WJ = [],
        AJ = [],
        CJ = [],
        XJ = [],
        MJ = [],
        BJ = [],
        lJ = [],
        pJ = [],
        gJ = [],
        bJ = [],
        vJ = [],
        OJ = [],
        xJ = [],
        NJ = [],
        DJ = [],
        HJ = [],
        oJ = [],
        cJ = [],
        PJ = [],
        IJ = [],
        mJ = [],
        zJ = [],
        SJ = [],
        jJ = [],
        dJ = [],
        EJ = [],
        YJ = [],
        kJ = [],
        QJ = [],
        FJ = [],
        TJ = [],
        sJ = [],
        hJ = [],
        RG = [],
        JG = [],
        GG = [],
        yG = [],
        tG = [],
        uG = [],
        ZG = [],
        qG = [],
        iG = [],
        fG = [],
        VG = [],
        KG = [];
      return RR = class extends GJ {
        get isRefractionEnabled() {
          return (0, lR.e)(this, JR, "f")
        }
        set isRefractionEnabled(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get isTranslucencyEnabled() {
          return (0, lR.e)(this, GR, "f")
        }
        set isTranslucencyEnabled(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get isDispersionEnabled() {
          return (0, lR.e)(this, yR, "f")
        }
        set isDispersionEnabled(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        get isScatteringEnabled() {
          return (0, lR.e)(this, tR, "f")
        }
        set isScatteringEnabled(RR) {
          (0, lR.i)(this, tR, RR, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(RR) {
          this._scene.enableSubSurfaceForPrePass() && RR && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(RR))
        }
        get useAlbedoToTintRefraction() {
          return (0, lR.e)(this, uR, "f")
        }
        set useAlbedoToTintRefraction(RR) {
          (0, lR.i)(this, uR, RR, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, lR.e)(this, ZR, "f")
        }
        set useAlbedoToTintTranslucency(RR) {
          (0, lR.i)(this, ZR, RR, "f")
        }
        get thicknessTexture() {
          return (0, lR.e)(this, qR, "f")
        }
        set thicknessTexture(RR) {
          (0, lR.i)(this, qR, RR, "f")
        }
        get refractionTexture() {
          return (0, lR.e)(this, iR, "f")
        }
        set refractionTexture(RR) {
          (0, lR.i)(this, iR, RR, "f")
        }
        get indexOfRefraction() {
          return (0, lR.e)(this, fR, "f")
        }
        set indexOfRefraction(RR) {
          (0, lR.i)(this, fR, RR, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(RR) {
          const JR = RR >= 1 ? RR : -1;
          this._volumeIndexOfRefraction !== JR && (this._volumeIndexOfRefraction = JR, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, lR.e)(this, VR, "f")
        }
        set invertRefractionY(RR) {
          (0, lR.i)(this, VR, RR, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, lR.e)(this, KR, "f")
        }
        set linkRefractionWithTransparency(RR) {
          (0, lR.i)(this, KR, RR, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, lR.e)(this, wR, "f")
        }
        set useMaskFromThicknessTexture(RR) {
          (0, lR.i)(this, wR, RR, "f")
        }
        get refractionIntensityTexture() {
          return (0, lR.e)(this, rR, "f")
        }
        set refractionIntensityTexture(RR) {
          (0, lR.i)(this, rR, RR, "f")
        }
        get translucencyIntensityTexture() {
          return (0, lR.e)(this, eR, "f")
        }
        set translucencyIntensityTexture(RR) {
          (0, lR.i)(this, eR, RR, "f")
        }
        get translucencyColorTexture() {
          return (0, lR.e)(this, aR, "f")
        }
        set translucencyColorTexture(RR) {
          (0, lR.i)(this, aR, RR, "f")
        }
        get useGltfStyleTextures() {
          return (0, lR.e)(this, LR, "f")
        }
        set useGltfStyleTextures(RR) {
          (0, lR.i)(this, LR, RR, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(RR) {
          this.legacyTranslucency = RR
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
        constructor(nR) {
          let UR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(nR, "PBRSubSurface", 130, new qJ, UR), this._isRefractionEnabled = !1, JR.set(this, (0, lR.m)(this, yJ, !1)), this._isTranslucencyEnabled = ((0, lR.m)(this, tJ), !1), GR.set(this, (0, lR.m)(this, uJ, !1)), this._isDispersionEnabled = ((0, lR.m)(this, ZJ), !1), yR.set(this, (0, lR.m)(this, iJ, !1)), this._isScatteringEnabled = ((0, lR.m)(this, fJ), !1), tR.set(this, (0, lR.m)(this, VJ, !1)), this._scatteringDiffusionProfileIndex = ((0, lR.m)(this, KJ), (0, lR.m)(this, wJ, 0)), this.refractionIntensity = ((0, lR.m)(this, rJ), (0, lR.m)(this, eJ, 1)), this.translucencyIntensity = ((0, lR.m)(this, aJ), (0, lR.m)(this, LJ, 1)), this._useAlbedoToTintRefraction = ((0, lR.m)(this, nJ), !1), uR.set(this, (0, lR.m)(this, UJ, !1)), this._useAlbedoToTintTranslucency = ((0, lR.m)(this, WJ), !1), ZR.set(this, (0, lR.m)(this, AJ, !1)), this._thicknessTexture = ((0, lR.m)(this, CJ), null), qR.set(this, (0, lR.m)(this, XJ, null)), this._refractionTexture = ((0, lR.m)(this, MJ), null), iR.set(this, (0, lR.m)(this, BJ, null)), this._indexOfRefraction = ((0, lR.m)(this, lJ), 1.5), fR.set(this, (0, lR.m)(this, pJ, 1.5)), this._volumeIndexOfRefraction = ((0, lR.m)(this, gJ), (0, lR.m)(this, bJ, -1)), this._invertRefractionY = ((0, lR.m)(this, vJ), !1), VR.set(this, (0, lR.m)(this, OJ, !1)), this._linkRefractionWithTransparency = ((0, lR.m)(this, xJ), !1), KR.set(this, (0, lR.m)(this, NJ, !1)), this.minimumThickness = ((0, lR.m)(this, DJ), (0, lR.m)(this, HJ, 0)), this.maximumThickness = ((0, lR.m)(this, oJ), (0, lR.m)(this, cJ, 1)), this.useThicknessAsDepth = ((0, lR.m)(this, PJ), (0, lR.m)(this, IJ, !1)), this.tintColor = ((0, lR.m)(this, mJ), (0, lR.m)(this, zJ, ER.d.White())), this.tintColorAtDistance = ((0, lR.m)(this, SJ), (0, lR.m)(this, jJ, 1)), this.dispersion = ((0, lR.m)(this, dJ), (0, lR.m)(this, EJ, 0)), this.diffusionDistance = ((0, lR.m)(this, YJ), (0, lR.m)(this, kJ, ER.d.White())), this._useMaskFromThicknessTexture = ((0, lR.m)(this, QJ), !1), wR.set(this, (0, lR.m)(this, FJ, !1)), this._refractionIntensityTexture = ((0, lR.m)(this, TJ), null), rR.set(this, (0, lR.m)(this, sJ, null)), this._translucencyIntensityTexture = ((0, lR.m)(this, hJ), null), eR.set(this, (0, lR.m)(this, RG, null)), this.translucencyColor = ((0, lR.m)(this, JG), (0, lR.m)(this, GG, null)), this._translucencyColorTexture = ((0, lR.m)(this, yG), null), aR.set(this, (0, lR.m)(this, tG, null)), this._useGltfStyleTextures = ((0, lR.m)(this, uG), !0), LR.set(this, (0, lR.m)(this, ZG, !0)), this.applyAlbedoAfterSubSurface = ((0, lR.m)(this, qG), (0, lR.m)(this, iG, RR.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, lR.m)(this, fG), (0, lR.m)(this, VG, RR.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, lR.m)(this, KG), this._scene = nR.jH(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = nR._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = nR._dirtyCallbacks[32]
        }
        isReadyForSubMesh(RR, JR) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (RR._areTexturesDirty && JR.texturesEnabled) {
            if (this._thicknessTexture && FR.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && FR.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && FR.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && FR.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const RR = this._getRefractionTexture(JR);
            if (RR && FR.b.RefractionTextureEnabled && !RR.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(RR, JR) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return RR.SUBSURFACE = !1, RR.SS_DISPERSION = !1, RR.SS_TRANSLUCENCY = !1, RR.SS_SCATTERING = !1, RR.SS_REFRACTION = !1, RR.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, RR.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, RR.SS_THICKNESSANDMASK_TEXTURE = !1, RR.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, RR.SS_HAS_THICKNESS = !1, RR.SS_REFRACTIONINTENSITY_TEXTURE = !1, RR.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, RR.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, RR.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, RR.SS_REFRACTIONMAP_3D = !1, RR.SS_REFRACTIONMAP_OPPOSITEZ = !1, RR.SS_LODINREFRACTIONALPHA = !1, RR.SS_GAMMAREFRACTION = !1, RR.SS_RGBDREFRACTION = !1, RR.SS_LINEARSPECULARREFRACTION = !1, RR.SS_LINKREFRACTIONTOTRANSPARENCY = !1, RR.SS_ALBEDOFORREFRACTIONTINT = !1, RR.SS_ALBEDOFORTRANSLUCENCYTINT = !1, RR.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, RR.SS_USE_THICKNESS_AS_DEPTH = !1, RR.SS_USE_GLTF_TEXTURES = !1, RR.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, RR.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, RR.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(RR.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (RR._areTexturesDirty) {
            if (RR.SUBSURFACE = !0, RR.SS_DISPERSION = this._isDispersionEnabled, RR.SS_TRANSLUCENCY = this._isTranslucencyEnabled, RR.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, RR.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, RR.SS_SCATTERING = this._isScatteringEnabled, RR.SS_THICKNESSANDMASK_TEXTURE = !1, RR.SS_REFRACTIONINTENSITY_TEXTURE = !1, RR.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, RR.SS_HAS_THICKNESS = !1, RR.SS_USE_GLTF_TEXTURES = !1, RR.SS_REFRACTION = !1, RR.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, RR.SS_REFRACTIONMAP_3D = !1, RR.SS_GAMMAREFRACTION = !1, RR.SS_RGBDREFRACTION = !1, RR.SS_LINEARSPECULARREFRACTION = !1, RR.SS_REFRACTIONMAP_OPPOSITEZ = !1, RR.SS_LODINREFRACTIONALPHA = !1, RR.SS_LINKREFRACTIONTOTRANSPARENCY = !1, RR.SS_ALBEDOFORREFRACTIONTINT = !1, RR.SS_ALBEDOFORTRANSLUCENCYTINT = !1, RR.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, RR.SS_USE_THICKNESS_AS_DEPTH = !1, RR.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, RR.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, RR._areTexturesDirty && JR.texturesEnabled && (this._thicknessTexture && FR.b.ThicknessTextureEnabled && (0, sR.db)(this._thicknessTexture, RR, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && FR.b.RefractionIntensityTextureEnabled && (0, sR.db)(this._refractionIntensityTexture, RR, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && FR.b.TranslucencyIntensityTextureEnabled && (0, sR.db)(this._translucencyIntensityTexture, RR, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && FR.b.TranslucencyColorTextureEnabled && ((0, sR.db)(this._translucencyColorTexture, RR, "SS_TRANSLUCENCYCOLOR_TEXTURE"), RR.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), RR.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, RR.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, RR.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, RR.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && JR.texturesEnabled) {
              const GR = this._getRefractionTexture(JR);
              GR && FR.b.RefractionTextureEnabled && (RR.SS_REFRACTION = !0, RR.SS_REFRACTIONMAP_3D = GR.isCube, RR.SS_GAMMAREFRACTION = GR.gammaSpace, RR.SS_RGBDREFRACTION = GR.isRGBD, RR.SS_LINEARSPECULARREFRACTION = GR.linearSpecularLOD, RR.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && GR.isCube ? !GR.invertZ : GR.invertZ, RR.SS_LODINREFRACTIONALPHA = GR.lodLevelInAlpha, RR.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, RR.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, RR.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = GR.isCube && GR.boundingBoxSize, RR.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (RR.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(RR, JR, GR, yR) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) RR.updateFloat2("vThicknessParam", 0, 0);
            else {
              yR.getRenderingMesh().getWorldMatrix().decompose(PR.l.Fe[0]);
              const JR = Math.max(Math.abs(PR.l.Fe[0].x), Math.abs(PR.l.Fe[0].y), Math.abs(PR.l.Fe[0].z));
              RR.updateFloat2("vThicknessParam", this.minimumThickness * JR, (this.maximumThickness - this.minimumThickness) * JR)
            }
        }
        bindForSubMesh(RR, JR, GR, yR) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const tR = yR.materialDefines,
            uR = this._material.isFrozen,
            ZR = this._material.realTimeFiltering,
            qR = tR.LODBASEDMICROSFURACE,
            iR = this._getRefractionTexture(JR);
          if (!RR.useUbo || !uR || !RR.isSync) {
            if (this._thicknessTexture && FR.b.ThicknessTextureEnabled && (RR.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, sR.B)(this._thicknessTexture, RR, "thickness")), this._refractionIntensityTexture && FR.b.RefractionIntensityTextureEnabled && tR.SS_REFRACTIONINTENSITY_TEXTURE && (RR.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, sR.B)(this._refractionIntensityTexture, RR, "refractionIntensity")), this._translucencyColorTexture && FR.b.TranslucencyColorTextureEnabled && tR.SS_TRANSLUCENCYCOLOR_TEXTURE && (RR.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, sR.B)(this._translucencyColorTexture, RR, "translucencyColor")), this._translucencyIntensityTexture && FR.b.TranslucencyIntensityTextureEnabled && tR.SS_TRANSLUCENCYINTENSITY_TEXTURE && (RR.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, sR.B)(this._translucencyIntensityTexture, RR, "translucencyIntensity")), iR && FR.b.RefractionTextureEnabled) {
              RR.FRR("refractionMatrix", iR.getRefractionTextureMatrix());
              let JR = 1;
              iR.isCube || iR.depth && (JR = iR.depth);
              const GR = iR.getSize().width,
                yR = this.volumeIndexOfRefraction;
              if (RR.updateFloat4("vRefractionInfos", iR.level, 1 / yR, JR, this._invertRefractionY ? -1 : 1), RR.updateFloat4("vRefractionMicrosurfaceInfos", GR, iR.lodGenerationScale, iR.lodGenerationOffset, 1 / this.indexOfRefraction), ZR && RR.updateFloat2("vRefractionFilteringInfo", GR, Math.log2(GR)), iR.boundingBoxSize) {
                const JR = iR;
                RR.updateVector3("vRefractionPosition", JR.boundingBoxPosition), RR.updateVector3("vRefractionSize", JR.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && RR.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), RR.updateColor3("vDiffusionDistance", this.diffusionDistance), RR.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), RR.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), RR.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), RR.updateFloat("dispersion", this.dispersion)
          }
          JR.texturesEnabled && (this._thicknessTexture && FR.b.ThicknessTextureEnabled && RR.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && FR.b.RefractionIntensityTextureEnabled && tR.SS_REFRACTIONINTENSITY_TEXTURE && RR.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && FR.b.TranslucencyIntensityTextureEnabled && tR.SS_TRANSLUCENCYINTENSITY_TEXTURE && RR.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && FR.b.TranslucencyColorTextureEnabled && tR.SS_TRANSLUCENCYCOLOR_TEXTURE && RR.setTexture("translucencyColorSampler", this._translucencyColorTexture), iR && FR.b.RefractionTextureEnabled && (qR ? RR.setTexture("refractionSampler", iR) : (RR.setTexture("refractionSampler", iR._lodTextureMid || iR), RR.setTexture("refractionSamplerLow", iR._lodTextureLow || iR), RR.setTexture("refractionSamplerHigh", iR._lodTextureHigh || iR))))
        }
        _getRefractionTexture(RR) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? RR.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(RR) {
          FR.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && RR.push(this._refractionTexture)
        }
        hasTexture(RR) {
          return this._thicknessTexture === RR || (this._refractionTexture === RR || (this._refractionIntensityTexture === RR || (this._translucencyIntensityTexture === RR || this._translucencyColorTexture === RR)))
        }
        hasRenderTargetTextures() {
          return !!(FR.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(RR) {
          this._thicknessTexture && RR.push(this._thicknessTexture), this._refractionTexture && RR.push(this._refractionTexture), this._refractionIntensityTexture && RR.push(this._refractionIntensityTexture), this._translucencyColorTexture && RR.push(this._translucencyColorTexture), this._translucencyIntensityTexture && RR.push(this._translucencyIntensityTexture)
        }
        getAnimatables(RR) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && RR.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && RR.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && RR.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && RR.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && RR.push(this._translucencyIntensityTexture)
        }
        dispose(RR) {
          RR && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(RR, JR, GR) {
          return RR.SS_SCATTERING && JR.addFallback(GR++, "SS_SCATTERING"), RR.SS_TRANSLUCENCY && JR.addFallback(GR++, "SS_TRANSLUCENCY"), GR
        }
        getSamplers(RR) {
          RR.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, tR = new WeakMap, uR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, iR = new WeakMap, fR = new WeakMap, VR = new WeakMap, KR = new WeakMap, wR = new WeakMap, rR = new WeakMap, eR = new WeakMap, aR = new WeakMap, LR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(GJ[Symbol.metadata] ?? null) : void 0;
        nR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], WR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], AR = [(0, pR.H)(), (0, pR.d)("_markScenePrePassDirty")], CR = [(0, pR.H)()], XR = [(0, pR.H)()], MR = [(0, pR.H)()], BR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], bR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], vR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], xR = [(0, pR.H)()], NR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], DR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], HR = [(0, pR.H)()], oR = [(0, pR.H)()], cR = [(0, pR.H)()], IR = [(0, pR.k)()], mR = [(0, pR.H)()], SR = [(0, pR.H)()], jR = [(0, pR.k)()], dR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], QR = [(0, pR.k)()], TR = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], hR = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], RJ = [(0, pR.H)()], JJ = [(0, pR.H)()], (0, lR.l)(RR, null, nR, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isRefractionEnabled" in RR,
            get: RR => RR.isRefractionEnabled,
            set: (RR, JR) => {
              RR.isRefractionEnabled = JR
            }
          },
          metadata: JR
        }, yJ, tJ), (0, lR.l)(RR, null, UR, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isTranslucencyEnabled" in RR,
            get: RR => RR.isTranslucencyEnabled,
            set: (RR, JR) => {
              RR.isTranslucencyEnabled = JR
            }
          },
          metadata: JR
        }, uJ, ZJ), (0, lR.l)(RR, null, WR, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isDispersionEnabled" in RR,
            get: RR => RR.isDispersionEnabled,
            set: (RR, JR) => {
              RR.isDispersionEnabled = JR
            }
          },
          metadata: JR
        }, iJ, fJ), (0, lR.l)(RR, null, AR, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isScatteringEnabled" in RR,
            get: RR => RR.isScatteringEnabled,
            set: (RR, JR) => {
              RR.isScatteringEnabled = JR
            }
          },
          metadata: JR
        }, VJ, KJ), (0, lR.l)(RR, null, BR, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAlbedoToTintRefraction" in RR,
            get: RR => RR.useAlbedoToTintRefraction,
            set: (RR, JR) => {
              RR.useAlbedoToTintRefraction = JR
            }
          },
          metadata: JR
        }, UJ, WJ), (0, lR.l)(RR, null, gR, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAlbedoToTintTranslucency" in RR,
            get: RR => RR.useAlbedoToTintTranslucency,
            set: (RR, JR) => {
              RR.useAlbedoToTintTranslucency = JR
            }
          },
          metadata: JR
        }, AJ, CJ), (0, lR.l)(RR, null, bR, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "thicknessTexture" in RR,
            get: RR => RR.thicknessTexture,
            set: (RR, JR) => {
              RR.thicknessTexture = JR
            }
          },
          metadata: JR
        }, XJ, MJ), (0, lR.l)(RR, null, vR, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "refractionTexture" in RR,
            get: RR => RR.refractionTexture,
            set: (RR, JR) => {
              RR.refractionTexture = JR
            }
          },
          metadata: JR
        }, BJ, lJ), (0, lR.l)(RR, null, OR, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: RR => "indexOfRefraction" in RR,
            get: RR => RR.indexOfRefraction,
            set: (RR, JR) => {
              RR.indexOfRefraction = JR
            }
          },
          metadata: JR
        }, pJ, gJ), (0, lR.l)(RR, null, NR, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: RR => "invertRefractionY" in RR,
            get: RR => RR.invertRefractionY,
            set: (RR, JR) => {
              RR.invertRefractionY = JR
            }
          },
          metadata: JR
        }, OJ, xJ), (0, lR.l)(RR, null, DR, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: RR => "linkRefractionWithTransparency" in RR,
            get: RR => RR.linkRefractionWithTransparency,
            set: (RR, JR) => {
              RR.linkRefractionWithTransparency = JR
            }
          },
          metadata: JR
        }, NJ, DJ), (0, lR.l)(RR, null, dR, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "useMaskFromThicknessTexture" in RR,
            get: RR => RR.useMaskFromThicknessTexture,
            set: (RR, JR) => {
              RR.useMaskFromThicknessTexture = JR
            }
          },
          metadata: JR
        }, FJ, TJ), (0, lR.l)(RR, null, YR, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "refractionIntensityTexture" in RR,
            get: RR => RR.refractionIntensityTexture,
            set: (RR, JR) => {
              RR.refractionIntensityTexture = JR
            }
          },
          metadata: JR
        }, sJ, hJ), (0, lR.l)(RR, null, kR, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "translucencyIntensityTexture" in RR,
            get: RR => RR.translucencyIntensityTexture,
            set: (RR, JR) => {
              RR.translucencyIntensityTexture = JR
            }
          },
          metadata: JR
        }, RG, JG), (0, lR.l)(RR, null, TR, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "translucencyColorTexture" in RR,
            get: RR => RR.translucencyColorTexture,
            set: (RR, JR) => {
              RR.translucencyColorTexture = JR
            }
          },
          metadata: JR
        }, tG, uG), (0, lR.l)(RR, null, hR, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: RR => "useGltfStyleTextures" in RR,
            get: RR => RR.useGltfStyleTextures,
            set: (RR, JR) => {
              RR.useGltfStyleTextures = JR
            }
          },
          metadata: JR
        }, ZG, qG), (0, lR.l)(null, null, CR, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: RR => "_scatteringDiffusionProfileIndex" in RR,
            get: RR => RR._scatteringDiffusionProfileIndex,
            set: (RR, JR) => {
              RR._scatteringDiffusionProfileIndex = JR
            }
          },
          metadata: JR
        }, wJ, rJ), (0, lR.l)(null, null, XR, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "refractionIntensity" in RR,
            get: RR => RR.refractionIntensity,
            set: (RR, JR) => {
              RR.refractionIntensity = JR
            }
          },
          metadata: JR
        }, eJ, aJ), (0, lR.l)(null, null, MR, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "translucencyIntensity" in RR,
            get: RR => RR.translucencyIntensity,
            set: (RR, JR) => {
              RR.translucencyIntensity = JR
            }
          },
          metadata: JR
        }, LJ, nJ), (0, lR.l)(null, null, xR, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: RR => "_volumeIndexOfRefraction" in RR,
            get: RR => RR._volumeIndexOfRefraction,
            set: (RR, JR) => {
              RR._volumeIndexOfRefraction = JR
            }
          },
          metadata: JR
        }, bJ, vJ), (0, lR.l)(null, null, HR, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: RR => "minimumThickness" in RR,
            get: RR => RR.minimumThickness,
            set: (RR, JR) => {
              RR.minimumThickness = JR
            }
          },
          metadata: JR
        }, HJ, oJ), (0, lR.l)(null, null, oR, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: RR => "maximumThickness" in RR,
            get: RR => RR.maximumThickness,
            set: (RR, JR) => {
              RR.maximumThickness = JR
            }
          },
          metadata: JR
        }, cJ, PJ), (0, lR.l)(null, null, cR, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: RR => "useThicknessAsDepth" in RR,
            get: RR => RR.useThicknessAsDepth,
            set: (RR, JR) => {
              RR.useThicknessAsDepth = JR
            }
          },
          metadata: JR
        }, IJ, mJ), (0, lR.l)(null, null, IR, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintColor" in RR,
            get: RR => RR.tintColor,
            set: (RR, JR) => {
              RR.tintColor = JR
            }
          },
          metadata: JR
        }, zJ, SJ), (0, lR.l)(null, null, mR, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: RR => "tintColorAtDistance" in RR,
            get: RR => RR.tintColorAtDistance,
            set: (RR, JR) => {
              RR.tintColorAtDistance = JR
            }
          },
          metadata: JR
        }, jJ, dJ), (0, lR.l)(null, null, SR, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: RR => "dispersion" in RR,
            get: RR => RR.dispersion,
            set: (RR, JR) => {
              RR.dispersion = JR
            }
          },
          metadata: JR
        }, EJ, YJ), (0, lR.l)(null, null, jR, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: RR => "diffusionDistance" in RR,
            get: RR => RR.diffusionDistance,
            set: (RR, JR) => {
              RR.diffusionDistance = JR
            }
          },
          metadata: JR
        }, kJ, QJ), (0, lR.l)(null, null, QR, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "translucencyColor" in RR,
            get: RR => RR.translucencyColor,
            set: (RR, JR) => {
              RR.translucencyColor = JR
            }
          },
          metadata: JR
        }, GG, yG), (0, lR.l)(null, null, RJ, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: RR => "applyAlbedoAfterSubSurface" in RR,
            get: RR => RR.applyAlbedoAfterSubSurface,
            set: (RR, JR) => {
              RR.applyAlbedoAfterSubSurface = JR
            }
          },
          metadata: JR
        }, iG, fG), (0, lR.l)(null, null, JJ, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: RR => "legacyTranslucency" in RR,
            get: RR => RR.legacyTranslucency,
            set: (RR, JR) => {
              RR.legacyTranslucency = JR
            }
          },
          metadata: JR
        }, VG, KG), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, RR.DEFAULT_LEGACY_TRANSLUCENCY = !1, RR
    })();
    var fJ = GR(41881),
      VJ = GR(41855),
      KJ = GR(41897),
      wJ = GR(41900),
      rJ = GR(41906),
      eJ = GR(41915),
      aJ = GR(41920),
      LJ = GR(41925),
      nJ = GR(41407);
    const UJ = {
      effect: null,
      subMesh: null
    };
    class WJ extends((0, aJ.b)((0, eJ.c)(mR.b))) {}
    class AJ extends((0, YR.f)(WJ)) {
      constructor(RR) {
        super(RR), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class CJ extends((0, LJ.e)(QR.d)) {}
    let XJ = (() => {
      var RR, JR;
      let yR, tR = CJ,
        ZR = [],
        qR = [];
      return RR = class extends tR {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(RR) {
          this._realTimeFiltering = RR, this.hGR(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(RR) {
          this._realTimeFilteringQuality = RR, this.hGR(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, lR.e)(this, JR, "f")
        }
        set debugMode(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        constructor(GR, yR) {
          super(GR, yR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || RR.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new PR.s(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = RR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ER.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ER.d(0, 0, 0), this._albedoColor = new ER.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ER.d(1, 1, 1), this._reflectionColor = new ER.d(1, 1, 1), this._emissiveColor = new ER.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = RR.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bR.f(16), this._globalAmbientColor = new ER.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, JR.set(this, (0, lR.m)(this, ZR, 0)), this.debugLimit = ((0, lR.m)(this, qR), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new jR(this), this.clearCoat = new RJ(this), this.iridescence = new GJ(this), this.anisotropy = new tJ(this), this.sheen = new ZJ(this), this.subSurface = new iJ(this), this.detailMap = new fJ.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), FR.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = DR(this.jH()), this.prePassConfiguration = new dR.d
        }
        get hasRenderTargetTextures() {
          return !!(FR.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === RR.PBRMATERIAL_OPAQUE || this._transparencyMode === RR.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === RR.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== RR.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(RR, JR, GR) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const yR = JR._drawWrapper;
          if (yR.effect && this.isFrozen && yR._wasPreviouslyReady && yR._wasPreviouslyUsingInstances === GR) return !0;
          JR.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), JR.materialDefines = new AJ(this._eventInfo.defineNames));
          const tR = JR.materialDefines;
          if (this._isReadyForSubMesh(JR)) return !0;
          const uR = this.jH(),
            ZR = uR.ke();
          if (tR._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, uR.texturesEnabled)) {
            if (this._albedoTexture && FR.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && FR.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && FR.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && FR.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && FR.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const RR = this._getReflectionTexture();
            if (RR && FR.b.ReflectionTextureEnabled) {
              if (!RR.isReadyOrNotBlocking()) return !1;
              if (RR.irradianceTexture) {
                if (!RR.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!RR.sphericalPolynomial && RR.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && FR.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && FR.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (FR.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (ZR.getCaps().standardDerivatives && this._bumpTexture && FR.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && FR.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = tR, this._eventInfo.subMesh = JR, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (tR._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (tR.AREALIGHTUSED || tR.CLUSTLIGHT_BATCH)
            for (let KR = 0; KR < RR.lightSources.length; KR++)
              if (!RR.lightSources[KR]._isReady()) return !1;
          if (ZR.getCaps().standardDerivatives || RR.isVerticesDataPresent(IR.l.NormalKind) || (RR.createNormals(!0), gR.c.Warn("PBRMaterial: Normals have been created for the mesh: " + RR.name)), !(0, sR.e)(uR, RR, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const qR = JR.effect,
            iR = tR._areLightsDisposed,
            fR = this._prepareEffect(RR, JR.getRenderingMesh(), tR, this.onCompiled, this.onError, GR, null);
          let VR = !1;
          if (fR)
            if (this._onEffectCreatedObservable && (UJ.effect = fR, UJ.subMesh = JR, this._onEffectCreatedObservable.notifyObservers(UJ)), this.allowShaderHotSwapping && qR && !fR.isReady()) {
              if (tR.markAsUnprocessed(), VR = this.isFrozen, iR) return tR._areLightsDisposed = !0, !1
            } else uR.resetCachedMaterial(), JR.setEffect(fR, tR, this._materialContext);
          return !(!JR.effect || !JR.effect.isReady()) && (tR._renderId = uR.getRenderId(), yR._wasPreviouslyReady = !VR, yR._wasPreviouslyUsingInstances = !!GR, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(JR, GR, yR) {
          let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(JR, GR, yR, ZR, qR), !yR.isDirty) return null;
          yR.markAsProcessed();
          const iR = this.jH().ke(),
            fR = new TR.c;
          let VR = 0;
          yR.USESPHERICALINVERTEX && fR.addFallback(VR++, "USESPHERICALINVERTEX"), yR.FOG && fR.addFallback(VR, "FOG"), yR.SPECULARAA && fR.addFallback(VR, "SPECULARAA"), yR.POINTSIZE && fR.addFallback(VR, "POINTSIZE"), yR.LOGARITHMICDEPTH && fR.addFallback(VR, "LOGARITHMICDEPTH"), yR.PARALLAX && fR.addFallback(VR, "PARALLAX"), yR.PARALLAX_RHS && fR.addFallback(VR, "PARALLAX_RHS"), yR.PARALLAXOCCLUSION && fR.addFallback(VR++, "PARALLAXOCCLUSION"), yR.ENVIRONMENTBRDF && fR.addFallback(VR++, "ENVIRONMENTBRDF"), yR.TANGENT && fR.addFallback(VR++, "TANGENT"), yR.BUMP && fR.addFallback(VR++, "BUMP"), VR = (0, sR.F)(yR, fR, this._maxSimultaneousLights, VR), yR.SPECULARTERM && fR.addFallback(VR++, "SPECULARTERM"), yR.USESPHERICALFROMREFLECTIONMAP && fR.addFallback(VR++, "USESPHERICALFROMREFLECTIONMAP"), yR.USEIRRADIANCEMAP && fR.addFallback(VR++, "USEIRRADIANCEMAP"), yR.LIGHTMAP && fR.addFallback(VR++, "LIGHTMAP"), yR.NORMAL && fR.addFallback(VR++, "NORMAL"), yR.AMBIENT && fR.addFallback(VR++, "AMBIENT"), yR.EMISSIVE && fR.addFallback(VR++, "EMISSIVE"), yR.VERTEXCOLOR && fR.addFallback(VR++, "VERTEXCOLOR"), yR.MORPHTARGETS && fR.addFallback(VR++, "MORPHTARGETS"), yR.MULTIVIEW && fR.addFallback(0, "MULTIVIEW");
          const KR = [IR.l.PositionKind];
          yR.NORMAL && KR.push(IR.l.NormalKind), yR.TANGENT && KR.push(IR.l.TangentKind);
          for (let RR = 1; RR <= 6; ++RR) yR["UV" + RR] && KR.push(`uv${1===RR?"":RR}`);
          yR.VERTEXCOLOR && KR.push(IR.l.ColorKind), (0, sR.M)(KR, JR, yR, fR), (0, sR.N)(KR, yR), (0, sR.R)(KR, JR, yR), (0, sR.I)(KR, JR, yR);
          let wR = "pbr";
          const rR = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            eR = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, sR.rb)(rR, eR, !0);
          const aR = ["Material", "Scene", "Mesh"],
            LR = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: yR.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = fR, this._eventInfo.fallbackRank = VR, this._eventInfo.defines = yR, this._eventInfo.uniforms = rR, this._eventInfo.attributes = KR, this._eventInfo.samplers = eR, this._eventInfo.uniformBuffersNames = aR, this._eventInfo.customCode = void 0, this._eventInfo.mesh = JR, this._eventInfo.indexParameters = LR, this._callbackPluginEventGeneric(128, this._eventInfo), rJ.c.AddUniformsAndSamplers(rR, eR), dR.d.AddUniforms(rR), dR.d.AddSamplers(eR), (0, VJ.b)(rR), this._useVertexPulling) {
            const RR = GR?.geometry;
            RR && (this._vertexPullingMetadata = (0, KJ.h)(RR), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((RR, JR) => {
              rR.push(`vp_${JR}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          kR.b && (kR.b.PrepareUniforms(rR, yR), kR.b.PrepareSamplers(eR, yR)), (0, sR.sb)({
            uniformsNames: rR,
            uniformBuffersNames: aR,
            samplers: eR,
            defines: yR,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const nR = {};
          this.customShaderNameResolve && (wR = this.customShaderNameResolve(wR, rR, aR, eR, yR, KR, nR));
          const UR = yR.toString(),
            WR = iR.createEffect(wR, {
              attributes: KR,
              uniformsNames: rR,
              uniformBuffersNames: aR,
              samplers: eR,
              defines: UR,
              fallbacks: fR,
              onCompiled: tR,
              onError: uR,
              indexParameters: LR,
              processFinalCode: nR.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: yR.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: RR._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, iR);
          return this._eventInfo.customCode = void 0, WR
        }
        _prepareDefines(JR, GR, yR) {
          let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const ZR = GR.hasThinInstances,
            qR = this.jH(),
            iR = qR.ke();
          (0, sR.bb)(qR, JR, yR, !0, this._maxSimultaneousLights, this._disableLighting), yR._needNormals = !0, (0, sR.fb)(qR, yR);
          const fR = this.needAlphaBlendingForMesh(JR) && this.jH().useOrderIndependentTransparency;
          if ((0, sR.jb)(qR, yR, this.canRenderToMRT && !fR), (0, sR.ib)(qR, yR, fR), rJ.c.PrepareDefines(iR.currentRenderPassId, JR, yR), yR.METALLICWORKFLOW = this.isMetallicWorkflow(), yR._areTexturesDirty) {
            yR._needUVs = !1;
            for (let RR = 1; RR <= 6; ++RR) yR["MAINUV" + RR] = !1;
            if (qR.texturesEnabled) {
              yR.ALBEDODIRECTUV = 0, yR.BASE_WEIGHTDIRECTUV = 0, yR.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, yR.AMBIENTDIRECTUV = 0, yR.OPACITYDIRECTUV = 0, yR.EMISSIVEDIRECTUV = 0, yR.REFLECTIVITYDIRECTUV = 0, yR.MICROSURFACEMAPDIRECTUV = 0, yR.METALLIC_REFLECTANCEDIRECTUV = 0, yR.REFLECTANCEDIRECTUV = 0, yR.BUMPDIRECTUV = 0, yR.LIGHTMAPDIRECTUV = 0, iR.getCaps().textureLOD && (yR.LODBASEDMICROSFURACE = !0), this._albedoTexture && FR.b.DiffuseTextureEnabled ? ((0, sR.db)(this._albedoTexture, yR, "ALBEDO"), yR.GAMMAALBEDO = this._albedoTexture.gammaSpace) : yR.ALBEDO = !1, this._baseWeightTexture && FR.b.BaseWeightTextureEnabled ? (0, sR.db)(this._baseWeightTexture, yR, "BASE_WEIGHT") : yR.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && FR.b.BaseDiffuseRoughnessTextureEnabled ? (0, sR.db)(this._baseDiffuseRoughnessTexture, yR, "BASE_DIFFUSE_ROUGHNESS") : yR.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && FR.b.AmbientTextureEnabled ? ((0, sR.db)(this._ambientTexture, yR, "AMBIENT"), yR.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : yR.AMBIENT = !1, this._opacityTexture && FR.b.OpacityTextureEnabled ? ((0, sR.db)(this._opacityTexture, yR, "OPACITY"), yR.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : yR.OPACITY = !1;
              const RR = this._getReflectionTexture(),
                JR = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || iR.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, sR.Z)(qR, RR, yR, this.realTimeFiltering, this.realTimeFilteringQuality, !JR), this._lightmapTexture && FR.b.LightmapTextureEnabled ? ((0, sR.db)(this._lightmapTexture, yR, "LIGHTMAP"), yR.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, yR.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, yR.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : yR.LIGHTMAP = !1, this._emissiveTexture && FR.b.EmissiveTextureEnabled ? ((0, sR.db)(this._emissiveTexture, yR, "EMISSIVE"), yR.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : yR.EMISSIVE = !1, FR.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, sR.db)(this._metallicTexture, yR, "REFLECTIVITY"), yR.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, yR.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, yR.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, yR.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, yR.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, sR.db)(this._reflectivityTexture, yR, "REFLECTIVITY"), yR.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, yR.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, yR.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : yR.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (yR.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, sR.db)(this._metallicReflectanceTexture, yR, "METALLIC_REFLECTANCE"), yR.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : yR.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, sR.db)(this._reflectanceTexture, yR, "REFLECTANCE"), yR.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : yR.REFLECTANCE = !1) : (yR.METALLIC_REFLECTANCE = !1, yR.REFLECTANCE = !1), this._microSurfaceTexture ? (0, sR.db)(this._microSurfaceTexture, yR, "MICROSURFACEMAP") : yR.MICROSURFACEMAP = !1) : (yR.REFLECTIVITY = !1, yR.MICROSURFACEMAP = !1), iR.getCaps().standardDerivatives && this._bumpTexture && FR.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, sR.db)(this._bumpTexture, yR, "BUMP"), this._useParallax && this._albedoTexture && FR.b.DiffuseTextureEnabled ? (yR.PARALLAX = !0, yR.PARALLAX_RHS = qR.useRightHandedSystem, yR.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : yR.PARALLAX = !1, yR.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (yR.BUMP = !1, yR.PARALLAX = !1, yR.PARALLAX_RHS = !1, yR.PARALLAXOCCLUSION = !1, yR.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && FR.b.ReflectionTextureEnabled ? (yR.ENVIRONMENTBRDF = !0, yR.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (yR.ENVIRONMENTBRDF = !1, yR.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? yR.ALPHAFROMALBEDO = !0 : yR.ALPHAFROMALBEDO = !1
            }
            yR.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === RR.LIGHTFALLOFF_STANDARD ? (yR.USEPHYSICALLIGHTFALLOFF = !1, yR.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === RR.LIGHTFALLOFF_GLTF ? (yR.USEPHYSICALLIGHTFALLOFF = !1, yR.USEGLTFLIGHTFALLOFF = !0) : (yR.USEPHYSICALLIGHTFALLOFF = !0, yR.USEGLTFLIGHTFALLOFF = !1), yR.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? yR.TWOSIDEDLIGHTING = !0 : yR.TWOSIDEDLIGHTING = !1, yR.MIRRORED = !!qR._mirroredCameraPosition, yR.SPECULARAA = iR.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(yR._areTexturesDirty || yR._areMiscDirty) && (yR.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, yR.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, yR.ALPHABLEND = this.needAlphaBlendingForMesh(JR), yR.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, yR.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), yR._areTexturesDirty && (yR.TEXTURE_REPETITION_MODE = iR.version > 1 || iR.isWebGPU ? this.textureRepetitionMode : 0), yR._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(yR), yR.FORCENORMALFORWARD = this._forceNormalForward, yR.RADIANCEOCCLUSION = this._useRadianceOcclusion, yR.HORIZONOCCLUSION = this._useHorizonOcclusion, yR._areMiscDirty && ((0, sR.eb)(JR, qR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(JR), yR, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GR, this._isVertexOutputInvariant), yR.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !JR.isVerticesDataPresent(IR.l.NormalKind), yR.DEBUGMODE = this._debugMode), (0, sR.Y)(qR, iR, this, yR, !!tR, uR, ZR), this._eventInfo.defines = yR, this._eventInfo.mesh = JR, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, sR.X)(JR, yR, !0, !0, !0, this._transparencyMode !== RR.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(RR, JR, GR) {
          const yR = {
            clipPlane: !1,
            useInstances: !1,
            ...GR
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const GR = new AJ(this._eventInfo.defineNames),
              tR = this._prepareEffect(RR, RR, GR, void 0, void 0, yR.useInstances, yR.clipPlane);
            this._onEffectCreatedObservable && (UJ.effect = tR, UJ.subMesh = null, this._onEffectCreatedObservable.notifyObservers(UJ)), tR.isReady() ? JR && JR(this) : tR.onCompileObservable.add((() => {
              JR && JR(this)
            }))
          })()
        }
        buildUniformLayout() {
          const RR = this._uniformBuffer;
          RR.addUniform("vAlbedoInfos", 2), RR.addUniform("vBaseWeightInfos", 2), RR.addUniform("vBaseDiffuseRoughnessInfos", 2), RR.addUniform("vAmbientInfos", 4), RR.addUniform("vOpacityInfos", 2), RR.addUniform("vEmissiveInfos", 2), RR.addUniform("vLightmapInfos", 2), RR.addUniform("vReflectivityInfos", 3), RR.addUniform("vMicroSurfaceSamplerInfos", 2), RR.addUniform("vBumpInfos", 3), RR.addUniform("albedoMatrix", 16), RR.addUniform("baseWeightMatrix", 16), RR.addUniform("baseDiffuseRoughnessMatrix", 16), RR.addUniform("ambientMatrix", 16), RR.addUniform("opacityMatrix", 16), RR.addUniform("emissiveMatrix", 16), RR.addUniform("lightmapMatrix", 16), RR.addUniform("reflectivityMatrix", 16), RR.addUniform("microSurfaceSamplerMatrix", 16), RR.addUniform("bumpMatrix", 16), RR.addUniform("vTangentSpaceParams", 2), RR.addUniform("vAlbedoColor", 4), RR.addUniform("baseWeight", 1), RR.addUniform("baseDiffuseRoughness", 1), RR.addUniform("vLightingIntensity", 4), RR.addUniform("pointSize", 1), RR.addUniform("vReflectivityColor", 4), RR.addUniform("vEmissiveColor", 3), RR.addUniform("vAmbientColor", 3), RR.addUniform("vDebugMode", 2), RR.addUniform("vMetallicReflectanceFactors", 4), RR.addUniform("vMetallicReflectanceInfos", 2), RR.addUniform("metallicReflectanceMatrix", 16), RR.addUniform("vReflectanceInfos", 2), RR.addUniform("reflectanceMatrix", 16), RR.addUniform("cameraInfo", 4), RR.addUniform("vTextureRepetitionHexTilingParams", 4), (0, sR.nb)(RR, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(RR, JR, GR) {
          const yR = this.jH(),
            tR = GR.materialDefines;
          if (!tR) return;
          const uR = GR.effect;
          if (!uR) return;
          this._activeEffect = uR, JR.getMeshUniformBuffer().bindToEffect(uR, "Mesh"), JR.transferToEffect(RR);
          const ZR = yR.ke();
          this._uniformBuffer.bindToEffect(uR, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, yR, JR, RR, this.isFrozen), rJ.c.Bind(ZR.currentRenderPassId, this._activeEffect, JR, RR, this);
          const qR = yR.activeCamera;
          qR ? this._uniformBuffer.updateFloat4("cameraInfo", qR.minZ, qR.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const iR = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", iR[0], iR[1], iR[2], iR[3]), this._eventInfo.subMesh = GR, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), tR.OBJECTSPACE_NORMALMAP && (RR.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const fR = this._mustRebind(yR, uR, GR, JR.visibility),
            VR = ZR._features.needToAlwaysBindUniformBuffers;
          (0, sR.h)(JR, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, KJ.d)(this._activeEffect, this._vertexPullingMetadata);
          let KR = null;
          const wR = this._uniformBuffer;
          if (fR) {
            if (this.bindViewProjection(uR), KR = this._getReflectionTexture(), !wR.useUbo || !this.isFrozen || !wR.isSync || GR._drawWrapper._forceRebindOnNextCall) {
              if (yR.texturesEnabled && (this._albedoTexture && FR.b.DiffuseTextureEnabled && (wR.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, sR.B)(this._albedoTexture, wR, "albedo")), this._baseWeightTexture && FR.b.BaseWeightTextureEnabled && (wR.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, sR.B)(this._baseWeightTexture, wR, "baseWeight")), this._baseDiffuseRoughnessTexture && FR.b.BaseDiffuseRoughnessTextureEnabled && (wR.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, sR.B)(this._baseDiffuseRoughnessTexture, wR, "baseDiffuseRoughness")), this._ambientTexture && FR.b.AmbientTextureEnabled && (wR.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, sR.B)(this._ambientTexture, wR, "ambient")), this._opacityTexture && FR.b.OpacityTextureEnabled && (wR.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, sR.B)(this._opacityTexture, wR, "opacity")), this._emissiveTexture && FR.b.EmissiveTextureEnabled && (wR.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, sR.B)(this._emissiveTexture, wR, "emissive")), this._lightmapTexture && FR.b.LightmapTextureEnabled && (wR.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, sR.B)(this._lightmapTexture, wR, "lightmap")), FR.b.SpecularTextureEnabled && (this._metallicTexture ? (wR.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, sR.B)(this._metallicTexture, wR, "reflectivity")) : this._reflectivityTexture && (wR.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, sR.B)(this._reflectivityTexture, wR, "reflectivity")), this._metallicReflectanceTexture && (wR.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, sR.B)(this._metallicReflectanceTexture, wR, "metallicReflectance")), this._reflectanceTexture && tR.REFLECTANCE && (wR.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, sR.B)(this._reflectanceTexture, wR, "reflectance")), this._microSurfaceTexture && (wR.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, sR.B)(this._microSurfaceTexture, wR, "microSurfaceSampler"))), this._bumpTexture && ZR.getCaps().standardDerivatives && FR.b.BumpTextureEnabled && !this._disableBumpMap && (wR.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, sR.B)(this._bumpTexture, wR, "bump"), yR._mirroredCameraPosition ? wR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : wR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, sR.l)(yR, tR, wR, this._reflectionColor, KR, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && wR.updateFloat("pointSize", this.pointSize), tR.METALLICWORKFLOW) {
                ER.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ER.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const RR = this.subSurface?._indexOfRefraction ?? 1.5,
                  JR = 1;
                ER.j.Color4[0].b = RR;
                const GR = Math.pow((RR - JR) / (RR + JR), 2);
                ER.j.Color4[0].a = GR, wR.updateDirectColor4("vReflectivityColor", ER.j.Color4[0]), wR.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else wR.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              wR.updateColor3("vEmissiveColor", FR.b.EmissiveTextureEnabled ? this._emissiveColor : ER.d.BlackReadOnly), !tR.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? wR.updateColor4("vAlbedoColor", this._albedoColor, 1) : wR.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), wR.updateFloat("baseWeight", this._baseWeight), wR.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * yR.environmentIntensity, this._lightingInfos.w = this._specularIntensity, wR.updateVector4("vLightingIntensity", this._lightingInfos), yR.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), wR.updateColor3("vAmbientColor", this._globalAmbientColor), wR.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            yR.texturesEnabled && (this._albedoTexture && FR.b.DiffuseTextureEnabled && wR.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && FR.b.BaseWeightTextureEnabled && wR.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && FR.b.BaseDiffuseRoughnessTextureEnabled && wR.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && FR.b.AmbientTextureEnabled && wR.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && FR.b.OpacityTextureEnabled && wR.setTexture("opacitySampler", this._opacityTexture), (0, sR.n)(yR, tR, wR, KR, this.realTimeFiltering), tR.ENVIRONMENTBRDF && wR.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && FR.b.EmissiveTextureEnabled && wR.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && FR.b.LightmapTextureEnabled && wR.setTexture("lightmapSampler", this._lightmapTexture), FR.b.SpecularTextureEnabled && (this._metallicTexture ? wR.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && wR.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && wR.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && tR.REFLECTANCE && wR.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && wR.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && ZR.getCaps().standardDerivatives && FR.b.BumpTextureEnabled && !this._disableBumpMap && wR.setTexture("bumpSampler", this._bumpTexture)), this.jH().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(JR) && this.jH().depthPeelingRenderer.bind(uR), this._eventInfo.subMesh = GR, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VJ.c)(this._activeEffect, this, yR), this.bindEyePosition(uR)
          } else VR && (this._needToBindSceneUbo = !0);
          !fR && this.isFrozen && !VR || !yR.lightsEnabled || this._disableLighting || (0, sR.q)(yR, JR, this._activeEffect, tR, this._maxSimultaneousLights), !fR && this.isFrozen || ((yR.fogEnabled && JR.applyFog && yR.fogMode !== cR.g.FOGMODE_NONE || KR || this.subSurface.refractionTexture || JR.receiveShadows || tR.PREPASS || tR.CLUSTLIGHT_BATCH) && this.bindView(uR), (0, sR.k)(yR, JR, this._activeEffect, !0), tR.NUM_MORPH_INFLUENCERS && (0, sR.w)(JR, this._activeEffect), tR.BAKED_VERTEX_ANIMATION_TEXTURE && JR.bakedVertexAnimationManager?.bind(uR, tR.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, sR.u)(tR, this._activeEffect, yR)), this._afterBind(JR, this._activeEffect, GR), wR.update()
        }
        getAnimatables() {
          const RR = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && RR.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && RR.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && RR.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && RR.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && RR.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && RR.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && RR.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? RR.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && RR.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && RR.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && RR.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && RR.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && RR.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && RR.push(this._microSurfaceTexture), RR
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.jH().environmentTexture
        }
        getActiveTextures() {
          const RR = super.getActiveTextures();
          return this._albedoTexture && RR.push(this._albedoTexture), this._baseWeightTexture && RR.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && RR.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && RR.push(this._ambientTexture), this._opacityTexture && RR.push(this._opacityTexture), this._reflectionTexture && RR.push(this._reflectionTexture), this._emissiveTexture && RR.push(this._emissiveTexture), this._reflectivityTexture && RR.push(this._reflectivityTexture), this._metallicTexture && RR.push(this._metallicTexture), this._metallicReflectanceTexture && RR.push(this._metallicReflectanceTexture), this._reflectanceTexture && RR.push(this._reflectanceTexture), this._microSurfaceTexture && RR.push(this._microSurfaceTexture), this._bumpTexture && RR.push(this._bumpTexture), this._lightmapTexture && RR.push(this._lightmapTexture), RR
        }
        hasTexture(RR) {
          return !!super.hasTexture(RR) || (this._albedoTexture === RR || (this._baseWeightTexture === RR || (this._baseDiffuseRoughnessTexture === RR || (this._ambientTexture === RR || (this._opacityTexture === RR || (this._reflectionTexture === RR || (this._emissiveTexture === RR || (this._reflectivityTexture === RR || (this._metallicTexture === RR || (this._metallicReflectanceTexture === RR || (this._reflectanceTexture === RR || (this._microSurfaceTexture === RR || (this._bumpTexture === RR || this._lightmapTexture === RR)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const RR = this.jH().enableSubSurfaceForPrePass();
          return RR && (RR.enabled = !0), !0
        }
        dispose(RR, JR) {
          this._breakShaderLoadedCheck = !0, JR && (this._environmentBRDFTexture && this.jH().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(RR, JR)
        }
      }, JR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(tR[Symbol.metadata] ?? null) : void 0;
        yR = [(0, pR.d)("_markAllSubMeshesAsMiscDirty")], (0, lR.l)(RR, null, yR, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "debugMode" in RR,
            get: RR => RR.debugMode,
            set: (RR, JR) => {
              RR.debugMode = JR
            }
          },
          metadata: JR
        }, ZR, qR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR.PBRMATERIAL_OPAQUE = uR.d.MATERIAL_OPAQUE, RR.PBRMATERIAL_ALPHATEST = uR.d.MATERIAL_ALPHATEST, RR.PBRMATERIAL_ALPHABLEND = uR.d.MATERIAL_ALPHABLEND, RR.PBRMATERIAL_ALPHATESTANDBLEND = uR.d.MATERIAL_ALPHATESTANDBLEND, RR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, RR.LIGHTFALLOFF_PHYSICAL = 0, RR.LIGHTFALLOFF_GLTF = 1, RR.LIGHTFALLOFF_STANDARD = 2, RR.ForceGLSL = !1, RR._ShaderLoader = new wJ.d((() => [Promise.all([GR.e(635), GR.e(646)]).then((() => GR(64401))), Promise.all([GR.e(640), GR.e(636), GR.e(697), GR.e(649), GR.e(696)]).then((() => GR(64423)))]), (() => [Promise.all([GR.e(654), GR.e(656), GR.e(663)]).then((() => GR(64506))), Promise.all([GR.e(654), GR.e(657), GR.e(700), GR.e(667), GR.e(699)]).then((() => GR(64532)))])), RR
    })();
    Object.getOwnPropertyDescriptor(XJ.prototype, "decalMap") || Object.defineProperty(XJ.prototype, "decalMap", (0, nJ.e)("PBRBaseMaterial", "decalMap")), (0, GR(53863).d)();
    var MJ = GR(41542);
    var BJ = GR(41616),
      lJ = GR(53843),
      pJ = GR(41364),
      gJ = GR(41375),
      bJ = GR(41466);
    let vJ = !1;
    const OJ = new ER.e,
      xJ = new ER.e;
    class NJ extends lJ.b {
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
      set wrapU(RR) {
        if (this._textures)
          for (let JR = 0; JR < this._textures.length; JR++) this._textures[JR].wrapU = RR
      }
      set wrapV(RR) {
        if (this._textures)
          for (let JR = 0; JR < this._textures.length; JR++) this._textures[JR].wrapV = RR
      }
      constructor(RR, JR, GR, yR, tR, uR) {
        const ZR = !(!tR || !tR.generateMipMaps) && tR.generateMipMaps,
          qR = !(!tR || !tR.generateDepthTexture) && tR.generateDepthTexture,
          iR = tR && tR.depthTextureFormat ? tR.depthTextureFormat : 15,
          fR = !tR || void 0 === tR.doNotChangeAspectRatio || tR.doNotChangeAspectRatio,
          VR = !(!tR || !tR.drawOnlyOnFirstAttachmentByDefault) && tR.drawOnlyOnFirstAttachmentByDefault;
        if (super(RR, JR, yR, ZR, fR, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), vJ || (vJ = !0, gJ.ThinEngine.prototype.restoreSingleAttachment = function() {
            const RR = this._gl;
            this.bindAttachments([RR.BACK])
          }, gJ.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const RR = this._gl;
            this.bindAttachments([RR.COLOR_ATTACHMENT0])
          }, gJ.ThinEngine.prototype.buildTextureLayout = function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const GR = this._gl,
              yR = [];
            if (JR) yR.push(GR.BACK);
            else
              for (let tR = 0; tR < RR.length; tR++) RR[tR] ? yR.push(GR["COLOR_ATTACHMENT" + tR]) : yR.push(GR.NONE);
            return yR
          }, gJ.ThinEngine.prototype.bindAttachments = function(RR) {
            const JR = this._gl,
              GR = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, GR)
              for (let yR = 0; yR < RR.length; yR++) RR[yR] !== JR.NONE && GR[yR] && (0, bJ.k)(GR[yR].format) && (this._integerMRTAttachmentsMask |= 1 << yR);
            JR.drawBuffers(RR)
          }, gJ.ThinEngine.prototype.clearAttachments = function(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const ZR = this._currentRenderTarget?.textures;
            let qR = !1;
            if (GR && RR && ZR)
              for (let iR = 0; iR < JR.length; iR++) {
                const RR = ZR[iR];
                if (JR[iR] !== this._gl.NONE && RR && (0, bJ.k)(RR.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  qR = !0;
                  break
                }
              }
            if (!qR || !RR || !ZR) return this.bindAttachments(JR), void this.clear(RR, GR, yR, tR, uR);
            this.bindAttachments(JR), this._applyColorWriteState();
            for (let iR = 0; iR < JR.length; iR++) {
              const GR = ZR[iR];
              if (JR[iR] !== this._gl.NONE && GR) {
                let JR = RR;
                if ((0, bJ.k)(GR.format)) {
                  const yR = (0, bJ.n)(GR.type);
                  JR = yR ? OJ : xJ;
                  const tR = yR ? 255 : 1;
                  JR.r = Math.round(RR.r * tR), JR.g = Math.round(RR.g * tR), JR.b = Math.round(RR.b * tR), JR.a = Math.round(RR.a * tR)
                }
                this._clearColorAttachment(iR, JR, GR.format, GR.type)
              }
            }
            if (yR || tR) {
              const RR = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, yR, tR, uR)
              } finally {
                this._integerMRTAttachmentsMask = RR
              }
            }
          }, gJ.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, RR.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(RR), JR || this.generateMipMapsMultiFramebuffer(RR), GR && (RR._MSAAFramebuffer && this._bindUnboundFramebuffer(RR._framebuffer), GR()), this._bindUnboundFramebuffer(null)
          }, gJ.ThinEngine.prototype.createMultipleRenderTarget = function(RR, JR) {
            let GR, yR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              tR = !1,
              uR = !0,
              ZR = !1,
              qR = !1,
              iR = 1,
              fR = 1,
              VR = [],
              KR = [],
              wR = [],
              rR = [],
              eR = [],
              aR = [],
              LR = [],
              nR = [],
              UR = [],
              WR = !1;
            const AR = this._createHardwareRenderTargetWrapper(!0, !1, RR);
            void 0 !== JR && (tR = void 0 !== JR.generateMipMaps && JR.generateMipMaps, uR = void 0 === JR.generateDepthBuffer || JR.generateDepthBuffer, ZR = void 0 !== JR.generateStencilBuffer && JR.generateStencilBuffer, qR = void 0 !== JR.generateDepthTexture && JR.generateDepthTexture, iR = JR.hqR ?? 1, fR = JR.samples ?? fR, VR = JR.types || VR, KR = JR.samplingModes || KR, wR = JR.useSRGBBuffers || wR, rR = JR.formats || rR, eR = JR.targetTypes || eR, aR = JR.faceIndex || aR, LR = JR.layerIndex || LR, nR = JR.layerCounts || nR, UR = JR.labels || UR, WR = JR.dontCreateTextures ?? !1, this.Ma > 1 && (13 === JR.depthTextureFormat || 17 === JR.depthTextureFormat || 16 === JR.depthTextureFormat || 14 === JR.depthTextureFormat || 18 === JR.depthTextureFormat) && (GR = JR.depthTextureFormat)), void 0 === GR && (GR = ZR ? 13 : 14);
            const CR = this._gl,
              XR = this._currentFramebuffer,
              MR = CR.createFramebuffer();
            this._bindUnboundFramebuffer(MR);
            const BR = RR.width ?? RR,
              lR = RR.height ?? RR,
              pR = [],
              bR = [],
              vR = this.Ma > 1 && (13 === GR || 17 === GR || 18 === GR);
            AR.label = JR?.label ?? "MultiRenderTargetWrapper", AR._framebuffer = MR, AR._generateDepthBuffer = qR || uR, AR._generateStencilBuffer = qR ? vR : ZR, AR._depthStencilBuffer = this._setupFramebufferDepthAttachments(AR._generateStencilBuffer, AR._generateDepthBuffer, BR, lR, 1, GR), AR._attachments = bR;
            for (let OR = 0; OR < iR; OR++) {
              let RR = KR[OR] || 3,
                JR = VR[OR] || 0,
                GR = wR[OR] || !1;
              const yR = rR[OR] || 5,
                uR = eR[OR] || 3553,
                ZR = nR[OR] ?? 1;
              (1 !== JR || this._caps.textureFloatLinearFiltering) && (2 !== JR || this._caps.textureHalfFloatLinearFiltering) || (RR = 1);
              const qR = this._getSamplingParameters(RR, tR);
              1 !== JR || this._caps.textureFloat || (JR = 0, gR.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), GR = GR && this._caps.supportSRGBBuffers && (this.Ma > 1 || this.isWebGPU);
              const iR = this.Ma > 1,
                fR = CR[iR ? "COLOR_ATTACHMENT" + OR : "COLOR_ATTACHMENT" + OR + "_WEBGL"];
              if (bR.push(fR), -1 === uR || WR) continue;
              const aR = new pJ.b(this, 6);
              pR[OR] = aR, CR.activeTexture(CR["TEXTURE" + OR]), CR.bindTexture(uR, aR._hardwareTexture.underlyingResource), CR.texParameteri(uR, CR.TEXTURE_MAG_FILTER, qR.mag), CR.texParameteri(uR, CR.TEXTURE_MIN_FILTER, qR.min), CR.texParameteri(uR, CR.TEXTURE_WRAP_S, CR.CLAMP_TO_EDGE), CR.texParameteri(uR, CR.TEXTURE_WRAP_T, CR.CLAMP_TO_EDGE);
              const LR = this._getRGBABufferInternalSizedFormat(JR, yR, GR),
                XR = this._getInternalFormat(yR),
                MR = this._getWebGLTextureType(JR);
              if (!iR || 35866 !== uR && 32879 !== uR)
                if (34067 === uR) {
                  for (let RR = 0; RR < 6; RR++) CR.texImage2D(CR.TEXTURE_CUBE_MAP_POSITIVE_X + RR, 0, LR, BR, lR, 0, XR, MR, null);
                  aR.isCube = !0
                } else CR.texImage2D(CR.TEXTURE_2D, 0, LR, BR, lR, 0, XR, MR, null);
              else 35866 === uR ? aR.is2DArray = !0 : aR.is3D = !0, aR.baseDepth = aR.depth = ZR, CR.texImage3D(uR, 0, LR, BR, lR, ZR, 0, XR, MR, null);
              tR && CR.generateMipmap(uR), this._bindTextureDirectly(uR, null), aR.baseWidth = BR, aR.baseHeight = lR, aR.width = BR, aR.height = lR, aR.isReady = !0, aR.samples = 1, aR.generateMipMaps = tR, aR.samplingMode = RR, aR.type = JR, aR._useSRGBBuffer = GR, aR.format = yR, aR.label = UR[OR] ?? AR.label + "-Texture" + OR, this._internalTexturesCache.push(aR)
            }
            if (qR && this._caps.depthTextureExtension && !WR) {
              const RR = new pJ.b(this, 14);
              let JR = 5,
                yR = CR.DEPTH_COMPONENT16,
                uR = CR.DEPTH_COMPONENT,
                ZR = CR.UNSIGNED_SHORT,
                qR = CR.DEPTH_ATTACHMENT;
              this.Ma < 2 ? yR = CR.DEPTH_COMPONENT : 14 === GR ? (JR = 1, ZR = CR.FLOAT, yR = CR.DEPTH_COMPONENT32F) : 18 === GR ? (JR = 0, ZR = CR.FLOAT_32_UNSIGNED_INT_24_8_REV, yR = CR.DEPTH32F_STENCIL8, uR = CR.DEPTH_STENCIL, qR = CR.DEPTH_STENCIL_ATTACHMENT) : 16 === GR ? (JR = 0, ZR = CR.UNSIGNED_INT, yR = CR.DEPTH_COMPONENT24, qR = CR.DEPTH_ATTACHMENT) : 13 !== GR && 17 !== GR || (JR = 12, ZR = CR.UNSIGNED_INT_24_8, yR = CR.DEPTH24_STENCIL8, uR = CR.DEPTH_STENCIL, qR = CR.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(CR.TEXTURE_2D, RR, !0), CR.texParameteri(CR.TEXTURE_2D, CR.TEXTURE_MAG_FILTER, CR.NEAREST), CR.texParameteri(CR.TEXTURE_2D, CR.TEXTURE_MIN_FILTER, CR.NEAREST), CR.texParameteri(CR.TEXTURE_2D, CR.TEXTURE_WRAP_S, CR.CLAMP_TO_EDGE), CR.texParameteri(CR.TEXTURE_2D, CR.TEXTURE_WRAP_T, CR.CLAMP_TO_EDGE), CR.texImage2D(CR.TEXTURE_2D, 0, yR, BR, lR, 0, uR, ZR, null), CR.framebufferTexture2D(CR.FRAMEBUFFER, qR, CR.TEXTURE_2D, RR._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(CR.TEXTURE_2D, null), AR._depthStencilTexture = RR, AR._depthStencilTextureWithStencil = vR, RR.baseWidth = BR, RR.baseHeight = lR, RR.width = BR, RR.height = lR, RR.isReady = !0, RR.samples = 1, RR.generateMipMaps = tR, RR.samplingMode = 1, RR.format = GR, RR.type = JR, RR.label = AR.label + "-DepthStencil", pR[iR] = RR, this._internalTexturesCache.push(RR)
            }
            if (AR.setTextures(pR), yR && CR.drawBuffers(bR), this._bindUnboundFramebuffer(XR), AR.setLayerAndFaceIndices(LR, aR), this.resetTextureCache(), WR) {
              if (fR > 1) {
                const RR = CR.createFramebuffer();
                if (!RR) throw new Error("Unable to create multi sampled framebuffer");
                AR._samples = fR, AR._MSAAFramebuffer = RR, iR > 0 && yR && (this._bindUnboundFramebuffer(RR), CR.drawBuffers(bR), this._bindUnboundFramebuffer(XR))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(AR, fR, yR);
            return AR
          }, gJ.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(RR, JR) {
            let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Ma < 2 || !RR) return 1;
            if (RR.samples === JR) return JR;
            const yR = this._gl;
            JR = Math.min(JR, this.getCaps().maxMSAASamples), RR._depthStencilBuffer && (yR.deleteRenderbuffer(RR._depthStencilBuffer), RR._depthStencilBuffer = null), RR._MSAAFramebuffer && (yR.deleteFramebuffer(RR._MSAAFramebuffer), RR._MSAAFramebuffer = null);
            const tR = RR._attachments.length;
            for (let ZR = 0; ZR < tR; ZR++) {
              const JR = RR.textures[ZR]._hardwareTexture;
              JR?.releaseMSAARenderBuffers()
            }
            if (JR > 1 && "function" === typeof yR.renderbufferStorageMultisample) {
              const uR = yR.createFramebuffer();
              if (!uR) throw new Error("Unable to create multi sampled framebuffer");
              RR._MSAAFramebuffer = uR, this._bindUnboundFramebuffer(uR);
              const ZR = [];
              for (let GR = 0; GR < tR; GR++) {
                const tR = RR.textures[GR],
                  uR = tR._hardwareTexture,
                  qR = yR[this.Ma > 1 ? "COLOR_ATTACHMENT" + GR : "COLOR_ATTACHMENT" + GR + "_WEBGL"],
                  iR = this._createRenderBuffer(tR.width, tR.height, JR, -1, this._getRGBABufferInternalSizedFormat(tR.type, tR.format, tR._useSRGBBuffer), qR);
                if (!iR) throw new Error("Unable to create multi sampled framebuffer");
                uR.addMSAARenderBuffer(iR), tR.samples = JR, ZR.push(qR)
              }
              GR && yR.drawBuffers(ZR)
            } else this._bindUnboundFramebuffer(RR._framebuffer);
            const uR = RR._depthStencilTexture ? RR._depthStencilTexture.format : void 0;
            return RR._depthStencilBuffer = this._setupFramebufferDepthAttachments(RR._generateStencilBuffer, RR._generateDepthBuffer, RR.width, RR.height, JR, uR), this._bindUnboundFramebuffer(null), RR._samples = JR, JR
          }, gJ.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(RR) {
            const JR = RR,
              GR = this._gl;
            if (JR.isMulti)
              for (let yR = 0; yR < JR._attachments.length; yR++) {
                const RR = JR.textures[yR];
                !RR?.generateMipMaps || RR?.isCube || RR?.is3D || (this._bindTextureDirectly(GR.TEXTURE_2D, RR, !0), GR.generateMipmap(GR.TEXTURE_2D), this._bindTextureDirectly(GR.TEXTURE_2D, null))
              }
          }, gJ.ThinEngine.prototype.resolveMultiFramebuffer = function(RR) {
            const JR = RR,
              GR = this._gl;
            if (!JR._MSAAFramebuffer || !JR.isMulti) return;
            let yR = JR.resolveMSAAColors ? GR.COLOR_BUFFER_BIT : 0;
            yR |= JR._generateDepthBuffer && JR.resolveMSAADepth ? GR.DEPTH_BUFFER_BIT : 0, yR |= JR._generateStencilBuffer && JR.resolveMSAAStencil ? GR.STENCIL_BUFFER_BIT : 0;
            const tR = JR._attachments,
              uR = tR.length;
            GR.bindFramebuffer(GR.READ_FRAMEBUFFER, JR._MSAAFramebuffer), GR.bindFramebuffer(GR.DRAW_FRAMEBUFFER, JR._framebuffer);
            for (let ZR = 0; ZR < uR; ZR++) {
              const RR = JR.textures[ZR];
              for (let JR = 0; JR < uR; JR++) tR[JR] = GR.NONE;
              tR[ZR] = GR[this.Ma > 1 ? "COLOR_ATTACHMENT" + ZR : "COLOR_ATTACHMENT" + ZR + "_WEBGL"], GR.readBuffer(tR[ZR]), GR.drawBuffers(tR), GR.blitFramebuffer(0, 0, RR.width, RR.height, 0, 0, RR.width, RR.height, yR, GR.NEAREST)
            }
            for (let ZR = 0; ZR < uR; ZR++) tR[ZR] = GR[this.Ma > 1 ? "COLOR_ATTACHMENT" + ZR : "COLOR_ATTACHMENT" + ZR + "_WEBGL"];
            GR.drawBuffers(tR), GR.bindFramebuffer(this._gl.FRAMEBUFFER, JR._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = uR;
        const KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [],
          nR = [],
          UR = [];
        this._initTypes(GR, KR, wR, rR, eR, aR, LR, nR, UR, tR);
        const WR = !tR || void 0 === tR.generateDepthBuffer || tR.generateDepthBuffer,
          AR = !(!tR || void 0 === tR.generateStencilBuffer) && tR.generateStencilBuffer,
          CR = tR && tR.samples ? tR.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: wR,
          generateMipMaps: ZR,
          generateDepthBuffer: WR,
          generateStencilBuffer: AR,
          generateDepthTexture: qR,
          depthTextureFormat: iR,
          types: KR,
          hqR: GR,
          useSRGBBuffers: rR,
          samples: CR,
          formats: eR,
          targetTypes: aR,
          faceIndex: LR,
          layerIndex: nR,
          layerCounts: UR,
          labels: uR,
          label: RR
        }, this._count = GR, this._drawOnlyOnFirstAttachmentByDefault = VR, GR > 0 && (this._createInternalTextures(), this._createTextures(uR))
      }
      _initTypes(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        for (let VR = 0; VR < RR; VR++) fR && fR.types && void 0 !== fR.types[VR] ? JR.push(fR.types[VR]) : JR.push(fR && fR.defaultType ? fR.defaultType : 0), fR && fR.samplingModes && void 0 !== fR.samplingModes[VR] ? GR.push(fR.samplingModes[VR]) : GR.push(vR.f.BILINEAR_SAMPLINGMODE), fR && fR.useSRGBBuffers && void 0 !== fR.useSRGBBuffers[VR] ? yR.push(fR.useSRGBBuffers[VR]) : yR.push(!1), fR && fR.formats && void 0 !== fR.formats[VR] ? tR.push(fR.formats[VR]) : tR.push(5), fR && fR.targetTypes && void 0 !== fR.targetTypes[VR] ? uR.push(fR.targetTypes[VR]) : uR.push(3553), fR && fR.faceIndex && void 0 !== fR.faceIndex[VR] ? ZR.push(fR.faceIndex[VR]) : ZR.push(0), fR && fR.layerIndex && void 0 !== fR.layerIndex[VR] ? qR.push(fR.layerIndex[VR]) : qR.push(0), fR && fR.layerCounts && void 0 !== fR.layerCounts[VR] ? iR.push(fR.layerCounts[VR]) : iR.push(1)
      }
      _createInternaTextureIndexMapping() {
        const RR = {},
          JR = [];
        if (!this._renderTarget) return JR;
        const GR = this._renderTarget.textures;
        for (let yR = 0; yR < GR.length; yR++) {
          const tR = GR[yR];
          if (!tR) continue;
          const uR = RR[tR.uniqueId];
          void 0 !== uR ? JR[yR] = uR : RR[tR.uniqueId] = yR
        }
        return JR
      }
      _rebuild() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || RR) return;
        const yR = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), JR && (this._releaseTextures(), this._createTextures(GR));
        const tR = this._renderTarget.textures;
        for (let uR = 0; uR < tR.length; uR++) {
          const RR = this._textures[uR];
          void 0 !== yR[uR] && this._renderTarget.setTexture(tR[yR[uR]], uR), RR._texture = tR[uR], RR._texture && (RR._noMipmap = !RR._texture.useMipMaps, RR._useSRGBBuffer = RR._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let RR = 0; RR < this._textures.length; RR++) this._textures[RR]._texture = null, this._textures[RR].dispose()
      }
      _createTextures(RR) {
        const JR = this._renderTarget.textures;
        this._textures = [];
        for (let GR = 0; GR < JR.length; GR++) {
          const yR = new vR.f(null, this.jH());
          RR?.[GR] && (yR.name = RR[GR]), yR._texture = JR[GR], yR._texture && (yR._noMipmap = !yR._texture.useMipMaps, yR._useSRGBBuffer = yR._texture._useSRGBBuffer), this._textures.push(yR)
        }
      }
      setInternalTexture(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === JR && (this._texture = RR), this.renderTarget.setTexture(RR, JR, GR), this.textures[JR] || (this.textures[JR] = new vR.f(null, this.jH()), this.textures[JR].name = this._textureNames?.[JR] ?? this.textures[JR].name), this.textures[JR]._texture = RR, this.textures[JR]._noMipmap = !RR.useMipMaps, this.textures[JR]._useSRGBBuffer = RR._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[JR] = RR.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[JR] = RR.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[JR] = RR._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[JR])) {
          let GR;
          GR = RR.is2DArray ? 35866 : RR.isCube ? 34067 : RR.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[JR] = GR
        }
      }
      setLayerAndFaceIndex(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[RR] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[RR] = JR), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[RR] = GR), this.renderTarget.setLayerAndFaceIndex(RR, JR, GR))
      }
      setLayerAndFaceIndices(RR, JR) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = RR, this._multiRenderTargetOptions.faceIndex = JR, this.renderTarget.setLayerAndFaceIndices(RR, JR))
      }
      get samples() {
        return this._samples
      }
      set samples(RR) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(RR) : this._samples = RR
      }
      resize(RR) {
        this._processSizeParameter(RR), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(RR, JR, GR) {
        this._multiRenderTargetOptions.hqR = RR, this._count = RR;
        const yR = [],
          tR = [],
          uR = [],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [];
        this._textureNames = GR, this._initTypes(RR, yR, tR, uR, ZR, qR, iR, fR, VR, JR), this._multiRenderTargetOptions.types = yR, this._multiRenderTargetOptions.samplingModes = tR, this._multiRenderTargetOptions.useSRGBBuffers = uR, this._multiRenderTargetOptions.formats = ZR, this._multiRenderTargetOptions.targetTypes = qR, this._multiRenderTargetOptions.faceIndex = iR, this._multiRenderTargetOptions.layerIndex = fR, this._multiRenderTargetOptions.layerCounts = VR, this._multiRenderTargetOptions.labels = GR, this._rebuild(!1, !0, GR)
      }
      _unbindFrameBuffer(RR, JR) {
        this._renderTarget && RR.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(JR)
        }))
      }
      dispose() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), RR ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const RR = this._renderTarget?.textures;
        if (RR) {
          for (let JR = RR.length - 1; JR >= 0; JR--) this._textures[JR]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var DJ = GR(41693);
    class HJ {
      constructor(RR) {
        this.name = DJ.d.NAME_GEOMETRYBUFFERRENDERER, this.tL = RR
      }
      register() {
        this.tL._gatherRenderTargetsStage.registerStep(DJ.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(RR) {
        this.tL._geometryBufferRenderer && RR.push(this.tL._geometryBufferRenderer.getGBuffer())
      }
    }
    let oJ = !1;
    var cJ;
    ! function(RR) {
      RR[RR.Small = 0] = "Small", RR[RR.Medium = 1] = "Medium", RR[RR.Large = 2] = "Large", RR[RR.ExtraLarge = 3] = "ExtraLarge"
    }(cJ || (cJ = {}));
    const PJ = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      IJ = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class mJ {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(RR) {
        if (RR && this._enableMeshBlendTag && !this._scene.ke().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = RR
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(RR) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = RR, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(RR, JR) {
        RR === mJ.POSITION_TEXTURE_TYPE ? (this._positionIndex = JR, this._enablePosition = !0) : RR === mJ.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = JR, this._enableVelocity = !0) : RR === mJ.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = JR, this._enableVelocityLinear = !0) : RR === mJ.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = JR, this._enableReflectivity = !0) : RR === mJ.DEPTH_TEXTURE_TYPE ? (this._depthIndex = JR, this._enableDepth = !0) : RR === mJ.NORMAL_TEXTURE_TYPE ? (this._normalIndex = JR, this._enableNormal = !0) : RR === mJ.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = JR, this._enableScreenspaceDepth = !0) : RR === mJ.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = JR, this._enableIrradiance = !0) : RR === mJ.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = JR, this._enableObjectId = !0) : RR === mJ.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = JR, this._enableMeshBlendTag = !0)
      }
      _setAttachments(RR) {
        this._attachmentsFromPrePass = RR
      }
      _linkInternalTexture(RR) {
        this._multiRenderTarget.setInternalTexture(RR, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(RR) {
        this._multiRenderTarget.renderList = RR
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(RR) {
        switch (RR) {
          case mJ.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case mJ.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case mJ.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case mJ.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case mJ.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case mJ.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case mJ.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case mJ.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case mJ.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case mJ.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(RR) {
        this._enableDepth = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(RR) {
        this._enableNormal = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(RR) {
        this._enablePosition = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(RR) {
        this._enableVelocity = RR, RR || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = RR
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(RR) {
        this._enableVelocityLinear = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(RR) {
        this._enableReflectivity = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(RR) {
        this._enableScreenspaceDepth = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(RR) {
        this._enableIrradiance = RR, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(RR) {
        if (RR && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (RR && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (RR && !this._enableObjectId && !this._linkedWithPrePass) {
          const RR = this._scene.ke(),
            JR = Math.min(RR.getCaps().maxDrawBuffers ?? 1, 8),
            GR = this._assignRenderTargetIndices()[0] + 1;
          if (RR.getCaps().drawBuffersExtension && GR > JR) throw new Error(`GeometryBufferRenderer: ${GR} color attachments were requested, but this engine supports at most ${JR}`)
        }
        this._enableObjectId = RR, RR || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(RR) {
        if (this._enableMeshBlendTag !== RR) {
          if (RR) {
            const RR = this._scene.ke();
            if (! function(RR) {
                return "NATIVE" !== RR.shaderPlatformName && (RR.isWebGPU || 2 === RR.Ma)
              }(RR)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !RR.isWebGPU && !RR.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const JR = Math.min(RR.getCaps().maxDrawBuffers ?? 1, 8),
                GR = this._assignRenderTargetIndices()[0] + 1;
              if (RR.getCaps().drawBuffersExtension && GR > JR) throw new Error(`GeometryBufferRenderer: ${GR} color attachments were requested, but this engine supports at most ${JR}`)
            }
          }
          this._enableMeshBlendTag = RR, RR || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get tL() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        var tR;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ER.e(0, 0, 0, 0), this._clearDepthColor = new ER.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = RR, this._ratioOrDimensions = JR, this._useUbo = RR.ke().supportsUniformBuffers, this._depthFormat = GR, this._textureTypesAndFormats = yR || {}, this._initShaderSourceAsync(), tR = mJ, oJ || (oJ = !0, Object.defineProperty(cR.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(RR) {
            RR && RR.isSupported && (this._geometryBufferRenderer = RR)
          },
          enumerable: !0,
          configurable: !0
        }), cR.g.prototype.enableGeometryBufferRenderer = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            GR = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new tR(this, RR, JR, GR), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, cR.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, tR._SceneComponentInitialization = RR => {
          let JR = RR._getComponent(DJ.d.NAME_GEOMETRYBUFFERRENDERER);
          JR || (JR = new HJ(RR), RR.qtR(JR))
        }), mJ._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.ke().isWebGPU && !mJ.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([GR.e(655).then((() => GR(64708))), Promise.all([GR.e(654), GR.e(666)]).then((() => GR(64715)))])) : await Promise.all([GR.e(638).then((() => GR(64724))), GR.e(637).then((() => GR(64727)))]), this._shadersLoaded = !0
      }
      isReady(RR, JR) {
        if (!this._shadersLoaded) return !1;
        const GR = RR.he();
        if (GR && GR.disableDepthWrite) return !1;
        if (function(RR) {
            return RR._isGaussianSplatting || "GaussianSplattingMesh" === (JR = RR.getClassName()) || "GaussianSplattingStream" === JR;
            var JR
          }(RR.getMesh())) return !1;
        const yR = [],
          tR = [IR.l.PositionKind],
          uR = RR.getMesh();
        uR.isVerticesDataPresent(IR.l.NormalKind) && (yR.push("#define HAS_NORMAL_ATTRIBUTE"), tR.push(IR.l.NormalKind));
        let ZR = !1,
          qR = !1;
        if (GR) {
          let RR = !1;
          if (GR.needAlphaTestingForMesh(uR) && GR.getAlphaTestTexture() && (yR.push("#define ALPHATEST"), yR.push(`#define ALPHATEST_UV${GR.getAlphaTestTexture().coordinatesIndex+1}`), RR = !0), (GR.bumpTexture || GR.normalTexture || GR.geometryNormalTexture) && FR.b.BumpTextureEnabled) {
            const JR = GR.bumpTexture || GR.normalTexture || GR.geometryNormalTexture;
            yR.push("#define BUMP"), yR.push(`#define BUMP_UV${JR.coordinatesIndex+1}`), RR = !0
          }
          if (this._enableReflectivity) {
            let JR = !1;
            if ("PBRMetallicRoughnessMaterial" === GR.getClassName()) GR.metallicRoughnessTexture && (yR.push("#define ORMTEXTURE"), yR.push(`#define REFLECTIVITY_UV${GR.metallicRoughnessTexture.coordinatesIndex+1}`), yR.push("#define METALLICWORKFLOW"), RR = !0, JR = !0), null != GR.metallic && (yR.push("#define METALLIC"), yR.push("#define METALLICWORKFLOW"), JR = !0), null != GR.roughness && (yR.push("#define ROUGHNESS"), yR.push("#define METALLICWORKFLOW"), JR = !0), JR && (GR.baseTexture && (yR.push("#define ALBEDOTEXTURE"), yR.push(`#define ALBEDO_UV${GR.baseTexture.coordinatesIndex+1}`), GR.baseTexture.gammaSpace && yR.push("#define GAMMAALBEDO"), RR = !0), GR.baseColor && yR.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === GR.getClassName()) GR.specularGlossinessTexture ? (yR.push("#define SPECULARGLOSSINESSTEXTURE"), yR.push(`#define REFLECTIVITY_UV${GR.specularGlossinessTexture.coordinatesIndex+1}`), RR = !0, GR.specularGlossinessTexture.gammaSpace && yR.push("#define GAMMAREFLECTIVITYTEXTURE")) : GR.specularColor && yR.push("#define REFLECTIVITYCOLOR"), null != GR.glossiness && yR.push("#define GLOSSINESS");
            else if ("PBRMaterial" === GR.getClassName()) GR.metallicTexture && (yR.push("#define ORMTEXTURE"), yR.push(`#define REFLECTIVITY_UV${GR.metallicTexture.coordinatesIndex+1}`), yR.push("#define METALLICWORKFLOW"), RR = !0, JR = !0), null != GR.metallic && (yR.push("#define METALLIC"), yR.push("#define METALLICWORKFLOW"), JR = !0), null != GR.roughness && (yR.push("#define ROUGHNESS"), yR.push("#define METALLICWORKFLOW"), JR = !0), JR ? (GR.albedoTexture && (yR.push("#define ALBEDOTEXTURE"), yR.push(`#define ALBEDO_UV${GR.albedoTexture.coordinatesIndex+1}`), GR.albedoTexture.gammaSpace && yR.push("#define GAMMAALBEDO"), RR = !0), GR.albedoColor && yR.push("#define ALBEDOCOLOR")) : (GR.reflectivityTexture ? (yR.push("#define SPECULARGLOSSINESSTEXTURE"), yR.push(`#define REFLECTIVITY_UV${GR.reflectivityTexture.coordinatesIndex+1}`), GR.reflectivityTexture.gammaSpace && yR.push("#define GAMMAREFLECTIVITYTEXTURE"), RR = !0) : GR.reflectivityColor && yR.push("#define REFLECTIVITYCOLOR"), null != GR.microSurface && yR.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === GR.getClassName()) GR.specularTexture && (yR.push("#define REFLECTIVITYTEXTURE"), yR.push(`#define REFLECTIVITY_UV${GR.specularTexture.coordinatesIndex+1}`), GR.specularTexture.gammaSpace && yR.push("#define GAMMAREFLECTIVITYTEXTURE"), RR = !0), GR.specularColor && yR.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === GR.getClassName()) {
              const JR = GR;
              yR.push("#define METALLIC"), yR.push("#define ROUGHNESS"), JR._useRoughnessFromMetallicTextureGreen && JR.baseMetalnessTexture ? (yR.push("#define ORMTEXTURE"), yR.push(`#define REFLECTIVITY_UV${JR.baseMetalnessTexture.coordinatesIndex+1}`), RR = !0) : JR.baseMetalnessTexture ? (yR.push("#define METALLIC_TEXTURE"), yR.push(`#define METALLIC_UV${JR.baseMetalnessTexture.coordinatesIndex+1}`), RR = !0) : JR.specularRoughnessTexture && (yR.push("#define ROUGHNESS_TEXTURE"), yR.push(`#define ROUGHNESS_UV${JR.specularRoughnessTexture.coordinatesIndex+1}`), RR = !0), JR.baseColorTexture && (yR.push("#define ALBEDOTEXTURE"), yR.push(`#define ALBEDO_UV${JR.baseColorTexture.coordinatesIndex+1}`), JR.baseColorTexture.gammaSpace && yR.push("#define GAMMAALBEDO"), RR = !0), JR.baseColor && yR.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (yR.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === GR.getClassName())) {
            const JR = GR;
            JR.subsurfaceWeight > 0 && JR.subsurfaceWeightTexture && (yR.push("#define SUBSURFACE_WEIGHT"), yR.push(`#define SUBSURFACEWEIGHT_UV${JR.subsurfaceWeightTexture.coordinatesIndex+1}`), RR = !0), JR.transmissionWeight > 0 && JR.transmissionWeightTexture && (yR.push("#define TRANSMISSION_WEIGHT"), yR.push(`#define TRANSMISSIONWEIGHT_UV${JR.transmissionWeightTexture.coordinatesIndex+1}`), RR = !0)
          }
          RR && (yR.push("#define NEED_UV"), uR.isVerticesDataPresent(IR.l.UVKind) && (tR.push(IR.l.UVKind), yR.push("#define UV1"), ZR = !0), uR.isVerticesDataPresent(IR.l.UV2Kind) && (tR.push(IR.l.UV2Kind), yR.push("#define UV2"), qR = !0))
        }
        if (this._enableDepth && (yR.push("#define DEPTH"), yR.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (yR.push("#define NORMAL"), yR.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (yR.push("#define POSITION"), yR.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (yR.push("#define VELOCITY"), yR.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(uR) && yR.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (yR.push("#define VELOCITY_LINEAR"), yR.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(uR) && yR.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (yR.push("#define REFLECTIVITY"), yR.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (yR.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), yR.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          yR.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), yR.push("#define IRRADIANCE");
          const RR = this._scene;
          if (RR.environmentTexture) {
            const JR = {};
            let tR = !1,
              uR = 0;
            "OpenPBRMaterial" !== GR.getClassName() && "StandardMaterial" !== GR.getClassName() && "PBRMetallicRoughnessMaterial" !== GR.getClassName() && "PBRSpecularGlossinessMaterial" !== GR.getClassName() && "PBRMaterial" !== GR.getClassName() || (tR = !!GR.realtimeFiltering, uR = GR.realtimeFilteringQuality || 0), (0, sR.Z)(RR, RR.environmentTexture, JR, tR, uR, !0);
            for (const RR in JR) JR[RR] && yR.push("#define " + RR);
            JR.USEIRRADIANCEMAP || yR.push("#define SPHERICAL_HARMONICS");
            const ZR = RR.postProcessRenderPipelineManager.supportedPipelines.find((RR => "IBLShadowsRenderPipeline" === RR.getClassName()));
            if (ZR) {
              const RR = ZR;
              RR._getAccumulatedTexture() && (yR.push("#define IBL_SHADOW_TEXTURE"), RR.coloredShadows && yR.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (yR.push("#define OBJECT_ID"), yR.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (yR.push("#define MESH_BLEND_TAG"), yR.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && yR.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && yR.push("#define ENCODE_NORMAL"), uR.useBones && uR.computeBonesUsingShaders && uR.skeleton ? (tR.push(IR.l.MatricesIndicesKind), tR.push(IR.l.MatricesWeightsKind), uR.numBoneInfluencers > 4 && (tR.push(IR.l.MatricesIndicesExtraKind), tR.push(IR.l.MatricesWeightsExtraKind)), yR.push("#define NUM_BONE_INFLUENCERS " + uR.numBoneInfluencers), yR.push("#define BONETEXTURE " + uR.skeleton.isUsingTextureForMatrices), yR.push("#define BonesPerMesh " + (uR.skeleton.bones.length + 1))) : (yR.push("#define NUM_BONE_INFLUENCERS 0"), yR.push("#define BONETEXTURE false"), yR.push("#define BonesPerMesh 0"));
        const iR = uR.morphTargetManager ? (0, sR.T)(uR.morphTargetManager, yR, tR, uR, !0, !0, !1, ZR, qR, !1) : 0;
        JR && (yR.push("#define INSTANCES"), (0, sR.ub)(tR, this._enableVelocity || this._enableVelocityLinear), RR.getRenderingMesh().hasThinInstances && yR.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? yR.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : yR.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, VJ.j)(GR, this._scene, yR);
        const fR = this._scene.ke(),
          VR = RR._getDrawWrapper(void 0, !0),
          KR = VR.defines,
          wR = yR.join("\n");
        return KR !== wR && VR.setEffect(fR.createEffect("geometry", {
          attributes: tR,
          uniformsNames: IJ,
          samplers: PJ,
          defines: wR,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: iR
          },
          shaderLanguage: this.shaderLanguage
        }, fR), wR), VR.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(RR) {
        if (this._enableObjectId && 1 !== RR) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== RR) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = RR
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.ke().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.tL.ke()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.tL.ke().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const RR = [],
          JR = [];
        let GR = 0;
        return this._enableDepth && (this._depthIndex = GR, GR++, RR.push("gBuffer_Depth"), JR.push(this._textureTypesAndFormats[mJ.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = GR, GR++, RR.push("gBuffer_Normal"), JR.push(this._textureTypesAndFormats[mJ.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = GR, GR++, RR.push("gBuffer_Position"), JR.push(this._textureTypesAndFormats[mJ.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = GR, GR++, RR.push("gBuffer_Velocity"), JR.push(this._textureTypesAndFormats[mJ.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = GR, GR++, RR.push("gBuffer_VelocityLinear"), JR.push(this._textureTypesAndFormats[mJ.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = GR, GR++, RR.push("gBuffer_Reflectivity"), JR.push(this._textureTypesAndFormats[mJ.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = GR, GR++, RR.push("gBuffer_ScreenspaceDepth"), JR.push(this._textureTypesAndFormats[mJ.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = GR, GR++, RR.push("gBuffer_Irradiance"), JR.push(this._textureTypesAndFormats[mJ.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = GR, GR++, RR.push("gBuffer_ObjectId"), JR.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = GR, GR++, RR.push("gBuffer_MeshBlendTag"), JR.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [GR, RR, JR]
      }
      _createRenderTargets() {
        const RR = this._scene.ke(),
          [JR, GR, yR] = this._assignRenderTargetIndices(),
          tR = Math.min(RR.getCaps().maxDrawBuffers ?? 1, 8);
        if (RR.getCaps().drawBuffersExtension && JR > tR) throw new Error(`GeometryBufferRenderer: ${JR} color attachments were requested, but this engine supports at most ${tR}`);
        let ZR = 0;
        RR._caps.textureFloat && RR._caps.textureFloatLinearFiltering ? ZR = 1 : RR._caps.textureHalfFloat && RR._caps.textureHalfFloatLinearFiltering && (ZR = 2);
        const qR = this._getRenderTargetDimensions(),
          iR = [],
          fR = [],
          VR = [];
        for (const uR of yR) uR ? (iR.push(uR.textureType), fR.push(uR.textureFormat), VR.push(uR.samplingMode ?? 2)) : (iR.push(ZR), fR.push(5), VR.push(2));
        if (this._normalsAreUnsigned = 11 === iR[mJ.NORMAL_TEXTURE_TYPE] || 13 === iR[mJ.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new NJ("gBuffer", qR, JR, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: iR,
            formats: fR,
            samplingModes: VR,
            depthTextureFormat: this._depthFormat
          }, GR.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = vR.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = vR.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const KR = [!0],
          wR = [!1],
          rR = [!0];
        for (let uR = 1; uR < JR; ++uR) KR.push(!0), rR.push(!1), wR.push(!0);
        const eR = RR.buildTextureLayout(KR),
          aR = RR.buildTextureLayout(wR),
          LR = RR.buildTextureLayout(rR);
        this._multiRenderTarget.onClearObservable.add((RR => {
          const JR = this.useSpecificClearForDepthTexture ? aR : eR;
          RR.clearAttachments(this._clearColor, JR, !0, !0, !0), this.useSpecificClearForDepthTexture && RR.clearAttachments(this._clearDepthColor, LR, !0, !1, !1), RR.bindAttachments(eR)
        })), this._resizeObserver = RR.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const nR = RR => {
          const JR = RR.getRenderingMesh(),
            GR = RR.getEffectiveMesh(),
            yR = this._scene,
            tR = yR.ke(),
            ZR = RR.he();
          if (!ZR) return;
          if (GR._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[GR.uniqueId] && (this._previousTransformationMatrices[GR.uniqueId] = {
              NK: PR.e.Identity(),
              viewProjection: yR.getTransformMatrix()
            }, JR.skeleton)) {
            const RR = JR.skeleton.getTransformMatrices(JR);
            this._previousBonesTransformationMatrices[JR.uniqueId] = this._copyBonesTransformationMatrices(RR, new Float32Array(RR.length))
          }
          const qR = JR._getInstancesRenderList(RR._id, !!RR.getReplacementMesh());
          if (qR.mustReturn) return;
          const iR = tR.getCaps().instancedArrays && (null !== qR.visibleInstances[RR._id] || JR.hasThinInstances),
            fR = GR.getWorldMatrix();
          if (this.isReady(RR, iR)) {
            const VR = RR._getDrawWrapper();
            if (!VR) return;
            const KR = VR.effect;
            let wR;
            tR.enableEffect(VR), iR || JR._bind(RR, KR, ZR.fillMode), this._useUbo ? ((0, sR.z)(KR, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (KR.setMatrix("viewProjection", yR.getTransformMatrix()), KR.setMatrix("view", yR.getViewMatrix()), this._scene.bindEyePosition(KR, "vEyePosition"));
            if (JR._instanceDataStorage.isFrozen || !ZR.backFaceCulling && null === ZR.sideOrientation) wR = JR._effectiveSideOrientation;
            else {
              const RR = GR._getWorldMatrixDeterminant();
              wR = ZR._getEffectiveOrientation(JR), RR < 0 && (wR = wR === uR.d.ClockWiseSideOrientation ? uR.d.CounterClockWiseSideOrientation : uR.d.ClockWiseSideOrientation)
            }
            if (ZR._preBind(VR, wR), ZR.needAlphaTestingForMesh(GR)) {
              const RR = ZR.getAlphaTestTexture();
              RR && (KR.setTexture("diffuseSampler", RR), KR.setMatrix("diffuseMatrix", RR.getTextureMatrix()), KR.setFloat("alphaCutOff", ZR.alphaCutOff ?? .4))
            }
            if ((ZR.bumpTexture || ZR.normalTexture || ZR.geometryNormalTexture) && yR.ke().getCaps().standardDerivatives && FR.b.BumpTextureEnabled) {
              const RR = ZR.bumpTexture || ZR.normalTexture || ZR.geometryNormalTexture;
              KR.setFloat3("vBumpInfos", RR.coordinatesIndex, 1 / RR.level, ZR.parallaxScaleBias), KR.setMatrix("bumpMatrix", RR.getTextureMatrix()), KR.setTexture("bumpSampler", RR), KR.setFloat2("vTangentSpaceParams", ZR.invertNormalMapX ? -1 : 1, ZR.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === ZR.getClassName()) null !== ZR.metallicRoughnessTexture && (KR.setTexture("reflectivitySampler", ZR.metallicRoughnessTexture), KR.setMatrix("reflectivityMatrix", ZR.metallicRoughnessTexture.getTextureMatrix())), null !== ZR.metallic && KR.setFloat("metallic", ZR.metallic), null !== ZR.roughness && KR.setFloat("glossiness", 1 - ZR.roughness), null !== ZR.baseTexture && (KR.setTexture("albedoSampler", ZR.baseTexture), KR.setMatrix("albedoMatrix", ZR.baseTexture.getTextureMatrix())), null !== ZR.baseColor && KR.setColor3("albedoColor", ZR.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === ZR.getClassName()) null !== ZR.specularGlossinessTexture ? (KR.setTexture("reflectivitySampler", ZR.specularGlossinessTexture), KR.setMatrix("reflectivityMatrix", ZR.specularGlossinessTexture.getTextureMatrix())) : null !== ZR.specularColor && KR.setColor3("reflectivityColor", ZR.specularColor), null !== ZR.glossiness && KR.setFloat("glossiness", ZR.glossiness);
            else if ("PBRMaterial" === ZR.getClassName()) null !== ZR.metallicTexture && (KR.setTexture("reflectivitySampler", ZR.metallicTexture), KR.setMatrix("reflectivityMatrix", ZR.metallicTexture.getTextureMatrix())), null !== ZR.metallic && KR.setFloat("metallic", ZR.metallic), null !== ZR.roughness && KR.setFloat("glossiness", 1 - ZR.roughness), null !== ZR.roughness || null !== ZR.metallic || null !== ZR.metallicTexture ? (null !== ZR.albedoTexture && (KR.setTexture("albedoSampler", ZR.albedoTexture), KR.setMatrix("albedoMatrix", ZR.albedoTexture.getTextureMatrix())), null !== ZR.albedoColor && KR.setColor3("albedoColor", ZR.albedoColor)) : (null !== ZR.reflectivityTexture ? (KR.setTexture("reflectivitySampler", ZR.reflectivityTexture), KR.setMatrix("reflectivityMatrix", ZR.reflectivityTexture.getTextureMatrix())) : null !== ZR.reflectivityColor && KR.setColor3("reflectivityColor", ZR.reflectivityColor), null !== ZR.microSurface && KR.setFloat("glossiness", ZR.microSurface));
            else if ("StandardMaterial" === ZR.getClassName()) null !== ZR.specularTexture && (KR.setTexture("reflectivitySampler", ZR.specularTexture), KR.setMatrix("reflectivityMatrix", ZR.specularTexture.getTextureMatrix())), null !== ZR.specularColor && KR.setColor3("reflectivityColor", ZR.specularColor);
            else if ("OpenPBRMaterial" === ZR.getClassName()) {
              const RR = ZR;
              RR._useRoughnessFromMetallicTextureGreen && RR.baseMetalnessTexture ? (KR.setTexture("reflectivitySampler", RR.baseMetalnessTexture), KR.setMatrix("reflectivityMatrix", RR.baseMetalnessTexture.getTextureMatrix())) : RR.baseMetalnessTexture ? (KR.setTexture("metallicSampler", RR.baseMetalnessTexture), KR.setMatrix("metallicMatrix", RR.baseMetalnessTexture.getTextureMatrix())) : RR.specularRoughnessTexture && (KR.setTexture("roughnessSampler", RR.specularRoughnessTexture), KR.setMatrix("roughnessMatrix", RR.specularRoughnessTexture.getTextureMatrix())), KR.setFloat("metallic", RR.baseMetalness), KR.setFloat("glossiness", 1 - RR.specularRoughness), null !== RR.baseColorTexture && (KR.setTexture("albedoSampler", RR.baseColorTexture), KR.setMatrix("albedoMatrix", RR.baseColorTexture.getTextureMatrix())), null !== RR.baseColor && KR.setColor3("albedoColor", RR.baseColor)
            }
            if (this._enableIrradiance && yR.environmentTexture) {
              const RR = yR.environmentTexture,
                JR = yR.postProcessRenderPipelineManager.supportedPipelines.find((RR => "IBLShadowsRenderPipeline" === RR.getClassName()));
              if (JR) {
                const RR = JR._getAccumulatedTexture();
                RR && (KR.setTexture("iblShadowSampler", RR), KR.setFloat2("shadowTextureSize", RR.getSize().width, RR.getSize().height))
              }
              if (KR.setMatrix("reflectionMatrix", RR.getReflectionTextureMatrix()), KR.setFloat2("vReflectionInfos", RR.level * yR.iblIntensity, 0), KR.setTexture("reflectionSampler", RR), RR.irradianceTexture && (KR.setTexture("irradianceSampler", RR.irradianceTexture), RR.irradianceTexture._dominantDirection && KR.setVector3("vReflectionDominantDirection", RR.irradianceTexture._dominantDirection)), RR.sphericalPolynomial) {
                const JR = RR.sphericalPolynomial;
                if (JR.preScaledHarmonics) {
                  const RR = JR.preScaledHarmonics;
                  KR.setVector3("vSphericalL00", RR.l00), KR.setVector3("vSphericalL1_1", RR.l1_1), KR.setVector3("vSphericalL10", RR.l10), KR.setVector3("vSphericalL11", RR.l11), KR.setVector3("vSphericalL2_2", RR.l2_2), KR.setVector3("vSphericalL2_1", RR.l2_1), KR.setVector3("vSphericalL20", RR.l20), KR.setVector3("vSphericalL21", RR.l21), KR.setVector3("vSphericalL22", RR.l22)
                } else KR.setFloat3("vSphericalX", JR.x.x, JR.x.y, JR.x.z), KR.setFloat3("vSphericalY", JR.y.x, JR.y.y, JR.y.z), KR.setFloat3("vSphericalZ", JR.z.x, JR.z.y, JR.z.z), KR.setFloat3("vSphericalXX_ZZ", JR.xx.x - JR.zz.x, JR.xx.y - JR.zz.y, JR.xx.z - JR.zz.z), KR.setFloat3("vSphericalYY_ZZ", JR.yy.x - JR.zz.x, JR.yy.y - JR.zz.y, JR.yy.z - JR.zz.z), KR.setFloat3("vSphericalZZ", JR.zz.x, JR.zz.y, JR.zz.z), KR.setFloat3("vSphericalXY", JR.xy.x, JR.xy.y, JR.xy.z), KR.setFloat3("vSphericalYZ", JR.yz.x, JR.yz.y, JR.yz.z), KR.setFloat3("vSphericalZX", JR.zx.x, JR.zx.y, JR.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === ZR.getClassName()) {
                const RR = ZR;
                KR.setFloat("vSubsurfaceWeight", RR.subsurfaceWeight), RR.subsurfaceWeightTexture && (KR.setTexture("subsurfaceWeightSampler", RR.subsurfaceWeightTexture), KR.setMatrix("subsurfaceWeightMatrix", RR.subsurfaceWeightTexture.getTextureMatrix())), KR.setFloat("vTransmissionWeight", RR.transmissionWeight), RR.transmissionWeightTexture && (KR.setTexture("transmissionWeightSampler", RR.transmissionWeightTexture), KR.setMatrix("transmissionWeightMatrix", RR.transmissionWeightTexture.getTextureMatrix())), KR.setFloat("vTransmissionScatterAnisotropy", RR.transmissionScatterAnisotropy), KR.setFloat("vSubsurfaceScatterAnisotropy", RR.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, VJ.c)(KR, ZR, this._scene), JR.useBones && JR.computeBonesUsingShaders && JR.skeleton) {
              const RR = JR.skeleton;
              if (RR.isUsingTextureForMatrices && KR.getUniformIndex("boneTextureInfo") > -1) {
                const GR = RR.getTransformMatrixTexture(JR);
                KR.setTexture("boneSampler", GR), KR.setFloat2("boneTextureInfo", RR._textureWidth, RR._textureHeight)
              } else KR.setMatrices("mBones", JR.skeleton.getTransformMatrices(JR));
              (this._enableVelocity || this._enableVelocityLinear) && KR.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[JR.uniqueId])
            }
            if ((0, sR.w)(JR, KR), JR.morphTargetManager && JR.morphTargetManager.isUsingTextureForTargets && JR.morphTargetManager._bind(KR), (this._enableVelocity || this._enableVelocityLinear) && (KR.setMatrix("previousWorld", this._previousTransformationMatrices[GR.uniqueId].NK), KR.setMatrix("previousViewProjection", this._previousTransformationMatrices[GR.uniqueId].viewProjection)), this._enableObjectId) {
              let RR = JR.uniqueId;
              if (this.objectIdProvider) RR = (0, rJ.g)(JR, this.objectIdProvider);
              else if (RR > 16777215) throw new Error(`Invalid geometry object ID ${RR} for mesh "${JR.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              KR.setFloat("objectId", RR)
            }
            if (this._enableMeshBlendTag) {
              const RR = this.meshBlendTagProvider ? (0, rJ.d)(JR, this.meshBlendTagProvider) : JR.meshBlendingTag;
              KR.setInt("meshBlendTag", RR)
            }
            iR && JR.hasThinInstances && KR.setMatrix("world", fR), JR._processRendering(GR, RR, KR, ZR.fillMode, qR, iR, ((RR, JR) => {
              RR || KR.setMatrix("world", JR)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[GR.uniqueId].NK = fR.clone(), this._previousTransformationMatrices[GR.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), JR.skeleton && this._copyBonesTransformationMatrices(JR.skeleton.getTransformMatrices(JR), this._previousBonesTransformationMatrices[GR.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (JR, GR, yR) => {
          if ((yR || 0 === GR) && JR.XM)
            for (let tR = 0; tR < JR.XM.length; ++tR) {
              const GR = JR.XM[tR],
                yR = GR.he(),
                uR = GR.getRenderingMesh();
              if (!yR) continue;
              const ZR = uR._getInstancesRenderList(GR._id, !!GR.getReplacementMesh()),
                qR = RR.getCaps().instancedArrays && (null !== ZR.visibleInstances[GR._id] || uR.hasThinInstances);
              if (!this.isReady(GR, qR)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (JR, GR, yR, tR) => {
          let uR;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.ke().bindAttachments(this._attachmentsFromPrePass)
          }
          if (tR.length) {
            for (RR.setColorWrite(!1), uR = 0; uR < tR.length; uR++) nR(tR.data[uR]);
            RR.setColorWrite(!0)
          }
          for (uR = 0; uR < JR.length; uR++) nR(JR.data[uR]);
          for (RR.setDepthWrite(!1), uR = 0; uR < GR.length; uR++) nR(GR.data[uR]);
          if (this.renderTransparentMeshes)
            for (uR = 0; uR < yR.length; uR++) nR(yR.data[uR]);
          RR.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const RR = this._scene.ke();
        return {
          width: Math.max(1, Math.floor(RR.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(RR.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(RR, JR) {
        for (let GR = 0; GR < RR.length; GR++) JR[GR] = RR[GR];
        return JR
      }
    }
    mJ.ForceGLSL = !1, mJ.DEPTH_TEXTURE_TYPE = 0, mJ.NORMAL_TEXTURE_TYPE = 1, mJ.POSITION_TEXTURE_TYPE = 2, mJ.VELOCITY_TEXTURE_TYPE = 3, mJ.REFLECTIVITY_TEXTURE_TYPE = 4, mJ.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, mJ.VELOCITY_LINEAR_TEXTURE_TYPE = 6, mJ.IRRADIANCE_TEXTURE_TYPE = 7, mJ.OBJECT_ID_TEXTURE_TYPE = 8, mJ.MESH_BLEND_TAG_TEXTURE_TYPE = 9, mJ._SceneComponentInitialization = RR => {
      throw (0, nJ.j)("GeometryBufferRendererSceneComponent")
    };
    var zJ = GR(38253);
    const SJ = {
      effect: null,
      subMesh: null
    };

    function jJ(RR) {
      if ("number" === typeof RR) return 1;
      if (RR instanceof PR.n) return 2;
      if (RR instanceof PR.r || RR instanceof ER.d) return 3;
      if (RR instanceof PR.s || RR instanceof ER.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class dJ {
      populateVectorFromLinkedProperties(RR) {
        const JR = jJ(RR);
        for (const GR in this.linkedProperties) {
          const RR = this.linkedProperties[GR],
            yR = RR.numComponents;
          if (JR < yR || RR.targetUniformComponentOffset > JR - yR) return void(1 == yR ? gR.c.Error(`Float property ${RR.name} has an offset that is too large.`) : gR.c.Error(`Vector${yR} property ${RR.name} won't fit in Vector${JR} or has an offset that is too large.`));
          "number" === typeof RR.value ? dJ._tmpArray[RR.targetUniformComponentOffset] = RR.value : RR.value.toArray(dJ._tmpArray, RR.targetUniformComponentOffset)
        }
        RR.yK(dJ._tmpArray)
      }
      constructor(RR, JR) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = RR, this.numComponents = JR
      }
    }
    dJ._tmpArray = [0, 0, 0, 0];
    class EJ {
      constructor(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = RR, this.targetUniformName = GR, this.defaultValue = JR, this.value = JR, this.targetUniformComponentNum = yR, this.targetUniformComponentOffset = tR, this.requiredDefine = uR
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : jJ(this.defaultValue)
      }
    }
    class YJ {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(RR, JR, GR) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = RR, this.samplerPrefix = JR, this.textureDefine = GR
      }
    }
    class kJ extends((0, aJ.b)((0, eJ.c)(mR.b))) {}
    class QJ extends(function(RR) {
      return class extends RR {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(kJ)) {}
    class FJ extends((0, YR.f)(QJ)) {
      constructor(RR) {
        super(RR), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class TJ extends((0, LJ.e)(QR.d)) {}
    let sJ = (() => {
        var RR, JR, yR, tR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, OR, xR, NR, DR, cR, mR, zR, SR, jR, YR, QR, hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, eJ, aJ, LJ, nJ, UJ, WJ, AJ, CJ, XJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, zJ, jJ, kJ, QJ, sJ, hJ, RG, JG, GG, yG, tG, uG, ZG, qG, iG, fG, VG, KG, wG, rG, eG, aG, LG, nG, UG, WG, AG, CG, XG, MG, BG, lG, pG, gG, bG;
        let vG, OG, xG, NG, DG, HG, oG, cG, PG, IG, mG, zG, SG, jG, dG, EG, YG, kG, QG, FG, TG, sG, hG, Ry, Jy, Gy, yy, ty, uy, Zy, qy, iy, fy, Vy, Ky, wy, ry, ey, ay, Ly, ny, Uy, Wy, Ay, Cy, Xy, My, By, ly, py, gy, by, vy, Oy, xy, Ny, Dy, Hy, oy, cy, Py, Iy, my, zy, Sy, jy, dy, Ey, Yy, ky, Qy, Fy, Ty, sy, hy, Rt, Jt, Gt, yt, tt, ut, Zt, qt, it, ft, Vt, Kt, wt, rt, et, Lt, nt, Ut, Wt, At, Ct, Xt, Mt, Bt, lt, pt, gt, bt, vt, Ot, xt = TJ,
          Nt = [],
          Dt = [],
          Ht = [],
          ot = [],
          ct = [],
          Pt = [],
          It = [],
          mt = [],
          zt = [],
          St = [],
          jt = [],
          dt = [],
          Et = [],
          Yt = [],
          kt = [],
          Qt = [],
          Ft = [],
          Tt = [],
          st = [],
          ht = [],
          Ru = [],
          Ju = [],
          Gu = [],
          yu = [],
          tu = [],
          uu = [],
          Zu = [],
          qu = [],
          iu = [],
          fu = [],
          Vu = [],
          Ku = [],
          wu = [],
          ru = [],
          eu = [],
          au = [],
          Lu = [],
          nu = [],
          Uu = [],
          Wu = [],
          Au = [],
          Cu = [],
          Xu = [],
          Mu = [],
          Bu = [],
          lu = [],
          pu = [],
          gu = [],
          bu = [],
          vu = [],
          Ou = [],
          xu = [],
          Nu = [],
          Du = [],
          Hu = [],
          ou = [],
          cu = [],
          Pu = [],
          Iu = [],
          mu = [],
          zu = [],
          Su = [],
          ju = [],
          du = [],
          Eu = [],
          Yu = [],
          ku = [],
          Qu = [],
          Fu = [],
          Tu = [],
          su = [],
          hu = [],
          RZ = [],
          JZ = [],
          GZ = [],
          yZ = [],
          tZ = [],
          uZ = [],
          ZZ = [],
          qZ = [],
          iZ = [],
          fZ = [],
          VZ = [],
          KZ = [],
          wZ = [],
          rZ = [],
          eZ = [],
          aZ = [],
          LZ = [],
          nZ = [],
          UZ = [],
          WZ = [],
          AZ = [],
          CZ = [],
          XZ = [],
          MZ = [],
          BZ = [],
          lZ = [],
          pZ = [],
          gZ = [],
          bZ = [],
          vZ = [],
          OZ = [],
          xZ = [],
          NZ = [],
          DZ = [],
          HZ = [],
          oZ = [],
          cZ = [],
          PZ = [],
          IZ = [],
          mZ = [],
          zZ = [],
          SZ = [],
          jZ = [],
          dZ = [],
          EZ = [],
          YZ = [],
          kZ = [],
          QZ = [],
          FZ = [],
          TZ = [],
          sZ = [],
          hZ = [],
          Rq = [],
          Jq = [],
          Gq = [],
          yq = [],
          tq = [],
          uq = [],
          Zq = [],
          qq = [],
          iq = [],
          fq = [],
          Vq = [],
          Kq = [],
          wq = [],
          rq = [],
          eq = [],
          aq = [],
          Lq = [],
          nq = [],
          Uq = [],
          Wq = [],
          Aq = [],
          Cq = [],
          Xq = [],
          Mq = [],
          Bq = [],
          lq = [],
          pq = [],
          gq = [],
          bq = [],
          vq = [],
          Oq = [],
          xq = [],
          Nq = [],
          Dq = [],
          Hq = [],
          oq = [],
          cq = [],
          Pq = [],
          Iq = [],
          mq = [],
          zq = [],
          Sq = [],
          jq = [],
          dq = [],
          Eq = [],
          Yq = [],
          kq = [],
          Qq = [],
          Fq = [],
          Tq = [],
          sq = [],
          hq = [],
          Ri = [],
          Ji = [],
          Gi = [],
          yi = [],
          ti = [],
          ui = [],
          Zi = [],
          qi = [],
          ii = [],
          fi = [],
          Vi = [],
          Ki = [],
          wi = [],
          ri = [],
          ei = [],
          ai = [],
          Li = [],
          ni = [],
          Ui = [],
          Wi = [],
          Ai = [],
          Ci = [],
          Xi = [],
          Mi = [],
          Bi = [],
          li = [],
          gi = [],
          bi = [],
          vi = [];
        return RR = class extends xt {
          get baseWeight() {
            return (0, lR.e)(this, JR, "f")
          }
          set baseWeight(RR) {
            (0, lR.i)(this, JR, RR, "f")
          }
          get baseWeightTexture() {
            return (0, lR.e)(this, yR, "f")
          }
          set baseWeightTexture(RR) {
            (0, lR.i)(this, yR, RR, "f")
          }
          get baseColor() {
            return (0, lR.e)(this, tR, "f")
          }
          set baseColor(RR) {
            (0, lR.i)(this, tR, RR, "f")
          }
          get baseColorTexture() {
            return (0, lR.e)(this, ZR, "f")
          }
          set baseColorTexture(RR) {
            (0, lR.i)(this, ZR, RR, "f")
          }
          get baseDiffuseRoughness() {
            return (0, lR.e)(this, qR, "f")
          }
          set baseDiffuseRoughness(RR) {
            (0, lR.i)(this, qR, RR, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, lR.e)(this, iR, "f")
          }
          set baseDiffuseRoughnessTexture(RR) {
            (0, lR.i)(this, iR, RR, "f")
          }
          get baseMetalness() {
            return (0, lR.e)(this, fR, "f")
          }
          set baseMetalness(RR) {
            (0, lR.i)(this, fR, RR, "f")
          }
          get baseMetalnessTexture() {
            return (0, lR.e)(this, VR, "f")
          }
          set baseMetalnessTexture(RR) {
            (0, lR.i)(this, VR, RR, "f")
          }
          get specularWeight() {
            return (0, lR.e)(this, KR, "f")
          }
          set specularWeight(RR) {
            (0, lR.i)(this, KR, RR, "f")
          }
          get specularWeightTexture() {
            return (0, lR.e)(this, wR, "f")
          }
          set specularWeightTexture(RR) {
            (0, lR.i)(this, wR, RR, "f")
          }
          get specularColor() {
            return (0, lR.e)(this, rR, "f")
          }
          set specularColor(RR) {
            (0, lR.i)(this, rR, RR, "f")
          }
          get specularColorTexture() {
            return (0, lR.e)(this, eR, "f")
          }
          set specularColorTexture(RR) {
            (0, lR.i)(this, eR, RR, "f")
          }
          get specularRoughness() {
            return (0, lR.e)(this, aR, "f")
          }
          set specularRoughness(RR) {
            (0, lR.i)(this, aR, RR, "f")
          }
          get specularRoughnessTexture() {
            return (0, lR.e)(this, LR, "f")
          }
          set specularRoughnessTexture(RR) {
            (0, lR.i)(this, LR, RR, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, lR.e)(this, nR, "f")
          }
          set specularRoughnessAnisotropy(RR) {
            (0, lR.i)(this, nR, RR, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, lR.e)(this, UR, "f")
          }
          set specularRoughnessAnisotropyTexture(RR) {
            (0, lR.i)(this, UR, RR, "f")
          }
          get specularIor() {
            return (0, lR.e)(this, WR, "f")
          }
          set specularIor(RR) {
            (0, lR.i)(this, WR, RR, "f")
          }
          get transmissionWeight() {
            return (0, lR.e)(this, AR, "f")
          }
          set transmissionWeight(RR) {
            (0, lR.i)(this, AR, RR, "f")
          }
          get transmissionWeightTexture() {
            return (0, lR.e)(this, CR, "f")
          }
          set transmissionWeightTexture(RR) {
            (0, lR.i)(this, CR, RR, "f")
          }
          get transmissionColor() {
            return (0, lR.e)(this, XR, "f")
          }
          set transmissionColor(RR) {
            (0, lR.i)(this, XR, RR, "f")
          }
          get transmissionColorTexture() {
            return (0, lR.e)(this, MR, "f")
          }
          set transmissionColorTexture(RR) {
            (0, lR.i)(this, MR, RR, "f")
          }
          get transmissionDepth() {
            return (0, lR.e)(this, BR, "f")
          }
          set transmissionDepth(RR) {
            (0, lR.i)(this, BR, RR, "f")
          }
          get transmissionDepthTexture() {
            return (0, lR.e)(this, OR, "f")
          }
          set transmissionDepthTexture(RR) {
            (0, lR.i)(this, OR, RR, "f")
          }
          get transmissionScatter() {
            return (0, lR.e)(this, xR, "f")
          }
          set transmissionScatter(RR) {
            (0, lR.i)(this, xR, RR, "f")
          }
          get transmissionScatterTexture() {
            return (0, lR.e)(this, NR, "f")
          }
          set transmissionScatterTexture(RR) {
            (0, lR.i)(this, NR, RR, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, lR.e)(this, DR, "f")
          }
          set transmissionScatterAnisotropy(RR) {
            (0, lR.i)(this, DR, RR, "f")
          }
          get transmissionDispersionScale() {
            return (0, lR.e)(this, cR, "f")
          }
          set transmissionDispersionScale(RR) {
            (0, lR.i)(this, cR, RR, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, lR.e)(this, mR, "f")
          }
          set transmissionDispersionScaleTexture(RR) {
            (0, lR.i)(this, mR, RR, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, lR.e)(this, zR, "f")
          }
          set transmissionDispersionAbbeNumber(RR) {
            (0, lR.i)(this, zR, RR, "f")
          }
          get subsurfaceWeight() {
            return (0, lR.e)(this, SR, "f")
          }
          set subsurfaceWeight(RR) {
            (0, lR.i)(this, SR, RR, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, lR.e)(this, jR, "f")
          }
          set subsurfaceWeightTexture(RR) {
            (0, lR.i)(this, jR, RR, "f")
          }
          get subsurfaceColor() {
            return (0, lR.e)(this, YR, "f")
          }
          set subsurfaceColor(RR) {
            (0, lR.i)(this, YR, RR, "f")
          }
          get subsurfaceColorTexture() {
            return (0, lR.e)(this, QR, "f")
          }
          set subsurfaceColorTexture(RR) {
            (0, lR.i)(this, QR, RR, "f")
          }
          get subsurfaceRadius() {
            return (0, lR.e)(this, hR, "f")
          }
          set subsurfaceRadius(RR) {
            (0, lR.i)(this, hR, RR, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, lR.e)(this, RJ, "f")
          }
          set subsurfaceRadiusScale(RR) {
            (0, lR.i)(this, RJ, RR, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, lR.e)(this, JJ, "f")
          }
          set subsurfaceRadiusScaleTexture(RR) {
            (0, lR.i)(this, JJ, RR, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, lR.e)(this, GJ, "f")
          }
          set subsurfaceScatterAnisotropy(RR) {
            (0, lR.i)(this, GJ, RR, "f")
          }
          get coatWeight() {
            return (0, lR.e)(this, yJ, "f")
          }
          set coatWeight(RR) {
            (0, lR.i)(this, yJ, RR, "f")
          }
          get coatWeightTexture() {
            return (0, lR.e)(this, tJ, "f")
          }
          set coatWeightTexture(RR) {
            (0, lR.i)(this, tJ, RR, "f")
          }
          get coatColor() {
            return (0, lR.e)(this, uJ, "f")
          }
          set coatColor(RR) {
            (0, lR.i)(this, uJ, RR, "f")
          }
          get coatColorTexture() {
            return (0, lR.e)(this, ZJ, "f")
          }
          set coatColorTexture(RR) {
            (0, lR.i)(this, ZJ, RR, "f")
          }
          get coatRoughness() {
            return (0, lR.e)(this, qJ, "f")
          }
          set coatRoughness(RR) {
            (0, lR.i)(this, qJ, RR, "f")
          }
          get coatRoughnessTexture() {
            return (0, lR.e)(this, iJ, "f")
          }
          set coatRoughnessTexture(RR) {
            (0, lR.i)(this, iJ, RR, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, lR.e)(this, fJ, "f")
          }
          set coatRoughnessAnisotropy(RR) {
            (0, lR.i)(this, fJ, RR, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, lR.e)(this, eJ, "f")
          }
          set coatRoughnessAnisotropyTexture(RR) {
            (0, lR.i)(this, eJ, RR, "f")
          }
          get coatIor() {
            return (0, lR.e)(this, aJ, "f")
          }
          set coatIor(RR) {
            (0, lR.i)(this, aJ, RR, "f")
          }
          get coatDarkening() {
            return (0, lR.e)(this, LJ, "f")
          }
          set coatDarkening(RR) {
            (0, lR.i)(this, LJ, RR, "f")
          }
          get coatDarkeningTexture() {
            return (0, lR.e)(this, nJ, "f")
          }
          set coatDarkeningTexture(RR) {
            (0, lR.i)(this, nJ, RR, "f")
          }
          get fuzzWeight() {
            return (0, lR.e)(this, UJ, "f")
          }
          set fuzzWeight(RR) {
            (0, lR.i)(this, UJ, RR, "f")
          }
          get fuzzWeightTexture() {
            return (0, lR.e)(this, WJ, "f")
          }
          set fuzzWeightTexture(RR) {
            (0, lR.i)(this, WJ, RR, "f")
          }
          get fuzzColor() {
            return (0, lR.e)(this, AJ, "f")
          }
          set fuzzColor(RR) {
            (0, lR.i)(this, AJ, RR, "f")
          }
          get fuzzColorTexture() {
            return (0, lR.e)(this, CJ, "f")
          }
          set fuzzColorTexture(RR) {
            (0, lR.i)(this, CJ, RR, "f")
          }
          get fuzzRoughness() {
            return (0, lR.e)(this, XJ, "f")
          }
          set fuzzRoughness(RR) {
            (0, lR.i)(this, XJ, RR, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, lR.e)(this, lJ, "f")
          }
          set fuzzRoughnessTexture(RR) {
            (0, lR.i)(this, lJ, RR, "f")
          }
          get geometryThinWalled() {
            return (0, lR.e)(this, pJ, "f")
          }
          set geometryThinWalled(RR) {
            (0, lR.i)(this, pJ, RR, "f")
          }
          get geometryNormalTexture() {
            return (0, lR.e)(this, gJ, "f")
          }
          set geometryNormalTexture(RR) {
            (0, lR.i)(this, gJ, RR, "f")
          }
          get geometryTangent() {
            return (0, lR.e)(this, bJ, "f")
          }
          set geometryTangent(RR) {
            (0, lR.i)(this, bJ, RR, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(RR) {
            this.geometryTangent = new PR.n(Math.cos(RR), Math.sin(RR))
          }
          get geometryTangentTexture() {
            return (0, lR.e)(this, vJ, "f")
          }
          set geometryTangentTexture(RR) {
            (0, lR.i)(this, vJ, RR, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, lR.e)(this, OJ, "f")
          }
          set geometryCoatNormalTexture(RR) {
            (0, lR.i)(this, OJ, RR, "f")
          }
          get geometryCoatTangent() {
            return (0, lR.e)(this, xJ, "f")
          }
          set geometryCoatTangent(RR) {
            (0, lR.i)(this, xJ, RR, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(RR) {
            this.geometryCoatTangent = new PR.n(Math.cos(RR), Math.sin(RR))
          }
          get geometryCoatTangentTexture() {
            return (0, lR.e)(this, NJ, "f")
          }
          set geometryCoatTangentTexture(RR) {
            (0, lR.i)(this, NJ, RR, "f")
          }
          get geometryOpacity() {
            return (0, lR.e)(this, DJ, "f")
          }
          set geometryOpacity(RR) {
            (0, lR.i)(this, DJ, RR, "f")
          }
          get geometryOpacityTexture() {
            return (0, lR.e)(this, HJ, "f")
          }
          set geometryOpacityTexture(RR) {
            (0, lR.i)(this, HJ, RR, "f")
          }
          get geometryThickness() {
            return (0, lR.e)(this, oJ, "f")
          }
          set geometryThickness(RR) {
            (0, lR.i)(this, oJ, RR, "f")
          }
          get geometryThicknessTexture() {
            return (0, lR.e)(this, cJ, "f")
          }
          set geometryThicknessTexture(RR) {
            (0, lR.i)(this, cJ, RR, "f")
          }
          get emissionLuminance() {
            return (0, lR.e)(this, PJ, "f")
          }
          set emissionLuminance(RR) {
            (0, lR.i)(this, PJ, RR, "f")
          }
          get emissionColor() {
            return (0, lR.e)(this, IJ, "f")
          }
          set emissionColor(RR) {
            (0, lR.i)(this, IJ, RR, "f")
          }
          get emissionColorTexture() {
            return (0, lR.e)(this, zJ, "f")
          }
          set emissionColorTexture(RR) {
            (0, lR.i)(this, zJ, RR, "f")
          }
          get thinFilmWeight() {
            return (0, lR.e)(this, jJ, "f")
          }
          set thinFilmWeight(RR) {
            (0, lR.i)(this, jJ, RR, "f")
          }
          get thinFilmWeightTexture() {
            return (0, lR.e)(this, kJ, "f")
          }
          set thinFilmWeightTexture(RR) {
            (0, lR.i)(this, kJ, RR, "f")
          }
          get thinFilmThickness() {
            return (0, lR.e)(this, QJ, "f")
          }
          set thinFilmThickness(RR) {
            (0, lR.i)(this, QJ, RR, "f")
          }
          get thinFilmThicknessMin() {
            return (0, lR.e)(this, sJ, "f")
          }
          set thinFilmThicknessMin(RR) {
            (0, lR.i)(this, sJ, RR, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, lR.e)(this, hJ, "f")
          }
          set thinFilmThicknessTexture(RR) {
            (0, lR.i)(this, hJ, RR, "f")
          }
          get thinFilmIor() {
            return (0, lR.e)(this, RG, "f")
          }
          set thinFilmIor(RR) {
            (0, lR.i)(this, RG, RR, "f")
          }
          get ambientOcclusionTexture() {
            return (0, lR.e)(this, JG, "f")
          }
          set ambientOcclusionTexture(RR) {
            (0, lR.i)(this, JG, RR, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(RR) {
            this._sssQuality !== RR && (this._sssQuality = RR, this.hGR(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(RR) {
            this._sssIrradianceTexture !== RR && (this._sssIrradianceTexture = RR, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(RR) {
            this._sssDepthTexture !== RR && (this._sssDepthTexture = RR, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, lR.e)(this, GG, "f")
          }
          set directIntensity(RR) {
            (0, lR.i)(this, GG, RR, "f")
          }
          get environmentIntensity() {
            return (0, lR.e)(this, yG, "f")
          }
          set environmentIntensity(RR) {
            (0, lR.i)(this, yG, RR, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, lR.e)(this, tG, "f")
          }
          set useSpecularWeightFromTextureAlpha(RR) {
            (0, lR.i)(this, tG, RR, "f")
          }
          get forceAlphaTest() {
            return (0, lR.e)(this, uG, "f")
          }
          set forceAlphaTest(RR) {
            (0, lR.i)(this, uG, RR, "f")
          }
          get alphaCutOff() {
            return (0, lR.e)(this, ZG, "f")
          }
          set alphaCutOff(RR) {
            (0, lR.i)(this, ZG, RR, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, lR.e)(this, qG, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(RR) {
            (0, lR.i)(this, qG, RR, "f")
          }
          get useAmbientInGrayScale() {
            return (0, lR.e)(this, iG, "f")
          }
          set useAmbientInGrayScale(RR) {
            (0, lR.i)(this, iG, RR, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ER.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === uR.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(RR) {
            RR !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = RR ? uR.d.LIGHTFALLOFF_PHYSICAL : uR.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === uR.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(RR) {
            RR !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = RR ? uR.d.LIGHTFALLOFF_GLTF : uR.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, lR.e)(this, fG, "f")
          }
          set useObjectSpaceNormalMap(RR) {
            (0, lR.i)(this, fG, RR, "f")
          }
          get useParallax() {
            return (0, lR.e)(this, VG, "f")
          }
          set useParallax(RR) {
            (0, lR.i)(this, VG, RR, "f")
          }
          get useParallaxOcclusion() {
            return (0, lR.e)(this, KG, "f")
          }
          set useParallaxOcclusion(RR) {
            (0, lR.i)(this, KG, RR, "f")
          }
          get parallaxScaleBias() {
            return (0, lR.e)(this, wG, "f")
          }
          set parallaxScaleBias(RR) {
            (0, lR.i)(this, wG, RR, "f")
          }
          get disableLighting() {
            return (0, lR.e)(this, rG, "f")
          }
          set disableLighting(RR) {
            (0, lR.i)(this, rG, RR, "f")
          }
          get forceIrradianceInFragment() {
            return (0, lR.e)(this, eG, "f")
          }
          set forceIrradianceInFragment(RR) {
            (0, lR.i)(this, eG, RR, "f")
          }
          get maxSimultaneousLights() {
            return (0, lR.e)(this, aG, "f")
          }
          set maxSimultaneousLights(RR) {
            (0, lR.i)(this, aG, RR, "f")
          }
          get invertNormalMapX() {
            return (0, lR.e)(this, LG, "f")
          }
          set invertNormalMapX(RR) {
            (0, lR.i)(this, LG, RR, "f")
          }
          get invertNormalMapY() {
            return (0, lR.e)(this, nG, "f")
          }
          set invertNormalMapY(RR) {
            (0, lR.i)(this, nG, RR, "f")
          }
          get twoSidedLighting() {
            return (0, lR.e)(this, UG, "f")
          }
          set twoSidedLighting(RR) {
            (0, lR.i)(this, UG, RR, "f")
          }
          get useAlphaFresnel() {
            return (0, lR.e)(this, WG, "f")
          }
          set useAlphaFresnel(RR) {
            (0, lR.i)(this, WG, RR, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, lR.e)(this, AG, "f")
          }
          set useLinearAlphaFresnel(RR) {
            (0, lR.i)(this, AG, RR, "f")
          }
          get environmentBRDFTexture() {
            return (0, lR.e)(this, CG, "f")
          }
          set environmentBRDFTexture(RR) {
            (0, lR.i)(this, CG, RR, "f")
          }
          get forceNormalForward() {
            return (0, lR.e)(this, XG, "f")
          }
          set forceNormalForward(RR) {
            (0, lR.i)(this, XG, RR, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, lR.e)(this, MG, "f")
          }
          set enableSpecularAntiAliasing(RR) {
            (0, lR.i)(this, MG, RR, "f")
          }
          get useHorizonOcclusion() {
            return (0, lR.e)(this, BG, "f")
          }
          set useHorizonOcclusion(RR) {
            (0, lR.i)(this, BG, RR, "f")
          }
          get useRadianceOcclusion() {
            return (0, lR.e)(this, lG, "f")
          }
          set useRadianceOcclusion(RR) {
            (0, lR.i)(this, lG, RR, "f")
          }
          get unlit() {
            return (0, lR.e)(this, pG, "f")
          }
          set unlit(RR) {
            (0, lR.i)(this, pG, RR, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, lR.e)(this, gG, "f")
          }
          set applyDecalMapAfterDetailMap(RR) {
            (0, lR.i)(this, gG, RR, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(RR) {
            this._backgroundRefractionTexture = RR, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(RR) {
            this._refractionHighQualityBlur !== RR && (this._refractionHighQualityBlur = RR, this.hGR(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(RR) {
            this._realTimeFiltering = RR, this.hGR(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(RR) {
            this._realTimeFilteringQuality = RR, this.hGR(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(RR) {
            this._fuzzSampleNumber = RR, this.hGR(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, lR.e)(this, bG, "f")
          }
          set debugMode(RR) {
            (0, lR.i)(this, bG, RR, "f")
          }
          constructor(GR, pR) {
            super(GR, pR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || RR.ForceGLSL), JR.set(this, ((0, lR.m)(this, Nt), (0, lR.m)(this, Dt, void 0))), this._baseWeight = ((0, lR.m)(this, Ht), new EJ("base_weight", 1, "vBaseWeight", 1)), yR.set(this, (0, lR.m)(this, ot, void 0)), this._baseWeightTexture = ((0, lR.m)(this, ct), new YJ("base_weight", "baseWeight", "BASE_WEIGHT")), tR.set(this, (0, lR.m)(this, Pt, void 0)), this._baseColor = ((0, lR.m)(this, It), new EJ("base_color", ER.d.White(), "vBaseColor", 4)), ZR.set(this, (0, lR.m)(this, mt, void 0)), this._baseColorTexture = ((0, lR.m)(this, zt), new YJ("base_color", "baseColor", "BASE_COLOR")), qR.set(this, (0, lR.m)(this, St, void 0)), this._baseDiffuseRoughness = ((0, lR.m)(this, jt), new EJ("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), iR.set(this, (0, lR.m)(this, dt, void 0)), this._baseDiffuseRoughnessTexture = ((0, lR.m)(this, Et), new YJ("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), fR.set(this, (0, lR.m)(this, Yt, void 0)), this._baseMetalness = ((0, lR.m)(this, kt), new EJ("base_metalness", 0, "vReflectanceInfo", 4, 0)), VR.set(this, (0, lR.m)(this, Qt, void 0)), this._baseMetalnessTexture = ((0, lR.m)(this, Ft), new YJ("base_metalness", "baseMetalness", "BASE_METALNESS")), KR.set(this, (0, lR.m)(this, Tt, void 0)), this._specularWeight = ((0, lR.m)(this, st), new EJ("specular_weight", 1, "vReflectanceInfo", 4, 3)), wR.set(this, (0, lR.m)(this, ht, void 0)), this._specularWeightTexture = ((0, lR.m)(this, Ru), new YJ("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), rR.set(this, (0, lR.m)(this, Ju, void 0)), this._specularColor = ((0, lR.m)(this, Gu), new EJ("specular_color", ER.d.White(), "vSpecularColor", 4)), eR.set(this, (0, lR.m)(this, yu, void 0)), this._specularColorTexture = ((0, lR.m)(this, tu), new YJ("specular_color", "specularColor", "SPECULAR_COLOR")), aR.set(this, (0, lR.m)(this, uu, void 0)), this._specularRoughness = ((0, lR.m)(this, Zu), new EJ("specular_roughness", .3, "vReflectanceInfo", 4, 1)), LR.set(this, (0, lR.m)(this, qu, void 0)), this._specularRoughnessTexture = ((0, lR.m)(this, iu), new YJ("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), nR.set(this, (0, lR.m)(this, fu, void 0)), this._specularRoughnessAnisotropy = ((0, lR.m)(this, Vu), new EJ("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), UR.set(this, (0, lR.m)(this, Ku, void 0)), this._specularRoughnessAnisotropyTexture = ((0, lR.m)(this, wu), new YJ("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), WR.set(this, (0, lR.m)(this, ru, void 0)), this._specularIor = ((0, lR.m)(this, eu), new EJ("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), AR.set(this, (0, lR.m)(this, au, void 0)), this._transmissionWeight = ((0, lR.m)(this, Lu), new EJ("transmission_weight", 0, "vTransmissionWeight", 1)), CR.set(this, (0, lR.m)(this, nu, void 0)), this._transmissionWeightTexture = ((0, lR.m)(this, Uu), new YJ("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), XR.set(this, (0, lR.m)(this, Wu, void 0)), this._transmissionColor = ((0, lR.m)(this, Au), new EJ("transmission_color", ER.d.White(), "vTransmissionColor", 3, 0)), MR.set(this, (0, lR.m)(this, Cu, void 0)), this._transmissionColorTexture = ((0, lR.m)(this, Xu), new YJ("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), BR.set(this, (0, lR.m)(this, Mu, void 0)), this._transmissionDepth = ((0, lR.m)(this, Bu), new EJ("transmission_depth", 0, "vTransmissionDepth", 1, 0)), OR.set(this, (0, lR.m)(this, lu, void 0)), this._transmissionDepthTexture = ((0, lR.m)(this, pu), new YJ("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), xR.set(this, (0, lR.m)(this, gu, void 0)), this._transmissionScatter = ((0, lR.m)(this, bu), new EJ("transmission_scatter", ER.d.Black(), "vTransmissionScatter", 3, 0)), NR.set(this, (0, lR.m)(this, vu, void 0)), this._transmissionScatterTexture = ((0, lR.m)(this, Ou), new YJ("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), DR.set(this, (0, lR.m)(this, xu, void 0)), this._transmissionScatterAnisotropy = ((0, lR.m)(this, Nu), new EJ("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), cR.set(this, (0, lR.m)(this, Du, void 0)), this._transmissionDispersionScale = ((0, lR.m)(this, Hu), new EJ("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), mR.set(this, (0, lR.m)(this, ou, void 0)), this._transmissionDispersionScaleTexture = ((0, lR.m)(this, cu), new YJ("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), zR.set(this, (0, lR.m)(this, Pu, void 0)), this._transmissionDispersionAbbeNumber = ((0, lR.m)(this, Iu), new EJ("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), SR.set(this, (0, lR.m)(this, mu, void 0)), this._subsurfaceWeight = ((0, lR.m)(this, zu), new EJ("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), jR.set(this, (0, lR.m)(this, Su, void 0)), this._subsurfaceWeightTexture = ((0, lR.m)(this, ju), new YJ("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), YR.set(this, (0, lR.m)(this, du, void 0)), this._subsurfaceColor = ((0, lR.m)(this, Eu), new EJ("subsurface_color", new ER.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), QR.set(this, (0, lR.m)(this, Yu, void 0)), this._subsurfaceColorTexture = ((0, lR.m)(this, ku), new YJ("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), hR.set(this, (0, lR.m)(this, Qu, void 0)), this._subsurfaceRadius = ((0, lR.m)(this, Fu), new EJ("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), RJ.set(this, (0, lR.m)(this, Tu, void 0)), this._subsurfaceRadiusScale = ((0, lR.m)(this, su), new EJ("subsurface_radius_scale", new ER.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), JJ.set(this, (0, lR.m)(this, hu, void 0)), this._subsurfaceRadiusScaleTexture = ((0, lR.m)(this, RZ), new YJ("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), GJ.set(this, (0, lR.m)(this, JZ, void 0)), this._subsurfaceScatterAnisotropy = ((0, lR.m)(this, GZ), new EJ("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), yJ.set(this, (0, lR.m)(this, yZ, void 0)), this._coatWeight = ((0, lR.m)(this, tZ), new EJ("coat_weight", 0, "vCoatWeight", 1, 0)), tJ.set(this, (0, lR.m)(this, uZ, void 0)), this._coatWeightTexture = ((0, lR.m)(this, ZZ), new YJ("coat_weight", "coatWeight", "COAT_WEIGHT")), uJ.set(this, (0, lR.m)(this, qZ, void 0)), this._coatColor = ((0, lR.m)(this, iZ), new EJ("coat_color", ER.d.White(), "vCoatColor", 3, 0)), ZJ.set(this, (0, lR.m)(this, fZ, void 0)), this._coatColorTexture = ((0, lR.m)(this, VZ), new YJ("coat_color", "coatColor", "COAT_COLOR")), qJ.set(this, (0, lR.m)(this, KZ, void 0)), this._coatRoughness = ((0, lR.m)(this, wZ), new EJ("coat_roughness", 0, "vCoatRoughness", 1, 0)), iJ.set(this, (0, lR.m)(this, rZ, void 0)), this._coatRoughnessTexture = ((0, lR.m)(this, eZ), new YJ("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), fJ.set(this, (0, lR.m)(this, aZ, void 0)), this._coatRoughnessAnisotropy = ((0, lR.m)(this, LZ), new EJ("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), eJ.set(this, (0, lR.m)(this, nZ, void 0)), this._coatRoughnessAnisotropyTexture = ((0, lR.m)(this, UZ), new YJ("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), aJ.set(this, (0, lR.m)(this, WZ, void 0)), this._coatIor = ((0, lR.m)(this, AZ), new EJ("coat_ior", 1.5, "vCoatIor", 1, 0)), LJ.set(this, (0, lR.m)(this, CZ, void 0)), this._coatDarkening = ((0, lR.m)(this, XZ), new EJ("coat_darkening", 1, "vCoatDarkening", 1, 0)), nJ.set(this, (0, lR.m)(this, MZ, void 0)), this._coatDarkeningTexture = ((0, lR.m)(this, BZ), new YJ("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, UJ.set(this, (0, lR.m)(this, lZ, void 0)), this._fuzzWeight = ((0, lR.m)(this, pZ), new EJ("fuzz_weight", 0, "vFuzzWeight", 1, 0)), WJ.set(this, (0, lR.m)(this, gZ, void 0)), this._fuzzWeightTexture = ((0, lR.m)(this, bZ), new YJ("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), AJ.set(this, (0, lR.m)(this, vZ, void 0)), this._fuzzColor = ((0, lR.m)(this, OZ), new EJ("fuzz_color", ER.d.White(), "vFuzzColor", 3, 0)), CJ.set(this, (0, lR.m)(this, xZ, void 0)), this._fuzzColorTexture = ((0, lR.m)(this, NZ), new YJ("fuzz_color", "fuzzColor", "FUZZ_COLOR")), XJ.set(this, (0, lR.m)(this, DZ, void 0)), this._fuzzRoughness = ((0, lR.m)(this, HZ), new EJ("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), lJ.set(this, (0, lR.m)(this, oZ, void 0)), this._fuzzRoughnessTexture = ((0, lR.m)(this, cZ), new YJ("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), pJ.set(this, (0, lR.m)(this, PZ, void 0)), this._geometryThinWalled = ((0, lR.m)(this, IZ), new EJ("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), gJ.set(this, (0, lR.m)(this, mZ, void 0)), this._geometryNormalTexture = ((0, lR.m)(this, zZ), new YJ("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), bJ.set(this, (0, lR.m)(this, SZ, void 0)), this._geometryTangent = ((0, lR.m)(this, jZ), new EJ("geometry_tangent", new PR.n(1, 0), "vSpecularAnisotropy", 3, 0)), vJ.set(this, (0, lR.m)(this, dZ, void 0)), this._geometryTangentTexture = ((0, lR.m)(this, EZ), new YJ("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), OJ.set(this, (0, lR.m)(this, YZ, void 0)), this._geometryCoatNormalTexture = ((0, lR.m)(this, kZ), new YJ("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), xJ.set(this, (0, lR.m)(this, QZ, void 0)), this._geometryCoatTangent = ((0, lR.m)(this, FZ), new EJ("geometry_coat_tangent", new PR.n(1, 0), "vGeometryCoatTangent", 2, 0)), NJ.set(this, (0, lR.m)(this, TZ, void 0)), this._geometryCoatTangentTexture = ((0, lR.m)(this, sZ), new YJ("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), DJ.set(this, (0, lR.m)(this, hZ, void 0)), this._geometryOpacity = ((0, lR.m)(this, Rq), new EJ("geometry_opacity", 1, "vBaseColor", 4, 3)), HJ.set(this, (0, lR.m)(this, Jq, void 0)), this._geometryOpacityTexture = ((0, lR.m)(this, Gq), new YJ("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), oJ.set(this, (0, lR.m)(this, yq, void 0)), this._geometryThickness = ((0, lR.m)(this, tq), new EJ("geometry_thickness", 0, "vGeometryThickness", 1, 0)), cJ.set(this, (0, lR.m)(this, uq, void 0)), this._geometryThicknessTexture = ((0, lR.m)(this, Zq), new YJ("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), PJ.set(this, (0, lR.m)(this, qq, void 0)), this._emissionLuminance = ((0, lR.m)(this, iq), new EJ("emission_luminance", 1, "vLightingIntensity", 4, 1)), IJ.set(this, (0, lR.m)(this, fq, void 0)), this._emissionColor = ((0, lR.m)(this, Vq), new EJ("emission_color", ER.d.Black(), "vEmissionColor", 3)), zJ.set(this, (0, lR.m)(this, Kq, void 0)), this._emissionColorTexture = ((0, lR.m)(this, wq), new YJ("emission_color", "emissionColor", "EMISSION_COLOR")), jJ.set(this, (0, lR.m)(this, rq, void 0)), this._thinFilmWeight = ((0, lR.m)(this, eq), new EJ("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), kJ.set(this, (0, lR.m)(this, aq, void 0)), this._thinFilmWeightTexture = ((0, lR.m)(this, Lq), new YJ("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), QJ.set(this, (0, lR.m)(this, nq, void 0)), this._thinFilmThickness = ((0, lR.m)(this, Uq), new EJ("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), sJ.set(this, (0, lR.m)(this, Wq, void 0)), this._thinFilmThicknessMin = ((0, lR.m)(this, Aq), new EJ("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), hJ.set(this, (0, lR.m)(this, Cq, void 0)), this._thinFilmThicknessTexture = ((0, lR.m)(this, Xq), new YJ("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), RG.set(this, (0, lR.m)(this, Mq, void 0)), this._thinFilmIor = ((0, lR.m)(this, Bq), new EJ("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), JG.set(this, (0, lR.m)(this, lq, void 0)), this._ambientOcclusionTexture = ((0, lR.m)(this, pq), new YJ("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = RR.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, GG.set(this, (0, lR.m)(this, gq, 1)), yG.set(this, ((0, lR.m)(this, bq), (0, lR.m)(this, vq, 1))), tG.set(this, ((0, lR.m)(this, Oq), (0, lR.m)(this, xq, !1))), uG.set(this, ((0, lR.m)(this, Nq), (0, lR.m)(this, Dq, !1))), ZG.set(this, ((0, lR.m)(this, Hq), (0, lR.m)(this, oq, .4))), qG.set(this, ((0, lR.m)(this, cq), (0, lR.m)(this, Pq, !1))), iG.set(this, ((0, lR.m)(this, Iq), (0, lR.m)(this, mq, !1))), fG.set(this, ((0, lR.m)(this, zq), (0, lR.m)(this, Sq, !1))), VG.set(this, ((0, lR.m)(this, jq), (0, lR.m)(this, dq, !1))), KG.set(this, ((0, lR.m)(this, Eq), (0, lR.m)(this, Yq, !1))), wG.set(this, ((0, lR.m)(this, kq), (0, lR.m)(this, Qq, .05))), rG.set(this, ((0, lR.m)(this, Fq), (0, lR.m)(this, Tq, !1))), eG.set(this, ((0, lR.m)(this, sq), (0, lR.m)(this, hq, !1))), aG.set(this, ((0, lR.m)(this, Ri), (0, lR.m)(this, Ji, 4))), LG.set(this, ((0, lR.m)(this, Gi), (0, lR.m)(this, yi, !1))), nG.set(this, ((0, lR.m)(this, ti), (0, lR.m)(this, ui, !1))), UG.set(this, ((0, lR.m)(this, Zi), (0, lR.m)(this, qi, !1))), WG.set(this, ((0, lR.m)(this, ii), (0, lR.m)(this, fi, !1))), AG.set(this, ((0, lR.m)(this, Vi), (0, lR.m)(this, Ki, !1))), CG.set(this, ((0, lR.m)(this, wi), (0, lR.m)(this, ri, null))), XG.set(this, ((0, lR.m)(this, ei), (0, lR.m)(this, ai, !1))), MG.set(this, ((0, lR.m)(this, Li), (0, lR.m)(this, ni, !1))), BG.set(this, ((0, lR.m)(this, Ui), (0, lR.m)(this, Wi, !0))), lG.set(this, ((0, lR.m)(this, Ai), (0, lR.m)(this, Ci, !0))), pG.set(this, ((0, lR.m)(this, Xi), (0, lR.m)(this, Mi, !1))), gG.set(this, ((0, lR.m)(this, Bi), (0, lR.m)(this, li, !1))), this._lightingInfos = ((0, lR.m)(this, gi), new PR.s(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = uR.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bR.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, bG.set(this, (0, lR.m)(this, bi, 0)), this.debugLimit = ((0, lR.m)(this, vi), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = uR.d.MATERIAL_OPAQUE, this.jH() && !this.jH()?.ke().isWebGPU && this.jH().ke().Ma < 2 && gR.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), RR._noiseTextures[this.jH().uniqueId] || (RR._noiseTextures[this.jH().uniqueId] = new vR.f(BJ.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.jH(), !1, !0, 1), this.jH().YH.addOnce((() => {
              RR._noiseTextures[this.jH().uniqueId]?.dispose(), delete RR._noiseTextures[this.jH().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), FR.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), FR.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = oR(this.jH()), this._environmentFuzzBRDFTexture = HR(this.jH()), this.prePassConfiguration = new dR.d, this._propertyList = {};
            for (const RR of Object.getOwnPropertyNames(this)) {
              const JR = this[RR];
              JR instanceof EJ && (this._propertyList[RR] = JR)
            }
            Object.keys(this._propertyList).forEach((RR => {
              const JR = this._propertyList[RR];
              let GR = this._uniformsList[JR.targetUniformName];
              GR ? GR.numComponents !== JR.targetUniformComponentNum ? gR.c.Error(`Uniform ${JR.targetUniformName} already exists of size ${GR.numComponents}, but trying to set it to ${JR.targetUniformComponentNum}.`) : GR.requiredDefine !== JR.requiredDefine && (GR.requiredDefine = void 0) : (GR = new dJ(JR.targetUniformName, JR.targetUniformComponentNum), GR.requiredDefine = JR.requiredDefine, this._uniformsList[JR.targetUniformName] = GR), "" === GR.firstLinkedKey && (GR.firstLinkedKey = JR.name), GR.linkedProperties[JR.name] = JR
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const RR of Object.getOwnPropertyNames(this)) {
              const JR = this[RR];
              JR instanceof YJ && (this._samplersList[RR] = JR)
            }
            for (const RR in this._samplersList) {
              const JR = this._samplersList[RR].textureDefine;
              this._samplerDefines[JR] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[JR + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[JR + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(FR.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(FR.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(RR) {
            this._transparencyMode !== RR && (this._transparencyMode = RR, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== uR.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(RR) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(RR)
          }
          clone(JR) {
            let GR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const tR = MJ.c.Clone((() => new RR(JR, this.jH())), this, {
              cloneTexturesOnlyOnce: GR
            });
            return tR.id = JR, tR.name = JR, this.stencil.copyTo(tR.stencil), this._clonePlugins(tR, yR), tR
          }
          serialize() {
            const RR = super.serialize();
            return RR.customType = "BABYLON.OpenPBRMaterial", RR
          }
          static Parse(JR, GR, yR) {
            const tR = MJ.c.Parse((() => new RR(JR.name, GR)), JR, GR, yR);
            return JR.stencil && tR.stencil.parse(JR.stencil, GR, yR), uR.d._ParsePlugins(JR, tR, GR, yR), tR
          }
          forceCompilation(RR, JR, GR) {
            const yR = {
              clipPlane: !1,
              useInstances: !1,
              ...GR
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const GR = new FJ({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                tR = this._prepareEffect(RR, RR, GR, void 0, void 0, yR.useInstances, yR.clipPlane);
              this._onEffectCreatedObservable && (SJ.effect = tR, SJ.subMesh = null, this._onEffectCreatedObservable.notifyObservers(SJ)), tR.isReady() ? JR && JR(this) : tR.onCompileObservable.add((() => {
                JR && JR(this)
              }))
            })()
          }
          isReadyForSubMesh(JR, GR, yR) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const tR = GR._drawWrapper;
            if (tR.effect && this.isFrozen && tR._wasPreviouslyReady && tR._wasPreviouslyUsingInstances === yR) return !0;
            GR.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), GR.materialDefines = new FJ({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const uR = GR.materialDefines;
            if (this._isReadyForSubMesh(GR)) return !0;
            const ZR = this.jH(),
              qR = ZR.ke();
            if (uR._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ZR.texturesEnabled)) {
              for (const RR in this._samplersList) {
                const JR = this._samplersList[RR];
                if (JR.value && !JR.value.isReadyOrNotBlocking()) return !1
              }
              const JR = this._getRadianceTexture();
              if (JR && FR.b.ReflectionTextureEnabled) {
                if (!JR.isReadyOrNotBlocking()) return !1;
                if (JR.irradianceTexture) {
                  if (!JR.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!JR.sphericalPolynomial && JR.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && FR.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && FR.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && FR.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (RR._noiseTextures[ZR.uniqueId] && !RR._noiseTextures[ZR.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = uR, this._eventInfo.subMesh = GR, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (uR._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (uR.AREALIGHTUSED)
              for (let RR = 0; RR < JR.lightSources.length; RR++)
                if (!JR.lightSources[RR]._isReady()) return !1;
            if (qR.getCaps().standardDerivatives || JR.isVerticesDataPresent(IR.l.NormalKind) || (JR.createNormals(!0), gR.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + JR.name)), !(0, sR.e)(ZR, JR, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const iR = GR.effect,
              fR = uR._areLightsDisposed,
              VR = this._prepareEffect(JR, GR.getRenderingMesh(), uR, this.onCompiled, this.onError, yR, null);
            let KR = !1;
            if (VR)
              if (this._onEffectCreatedObservable && (SJ.effect = VR, SJ.subMesh = GR, this._onEffectCreatedObservable.notifyObservers(SJ)), this.allowShaderHotSwapping && iR && !VR.isReady()) {
                if (uR.markAsUnprocessed(), KR = this.isFrozen, fR) return uR._areLightsDisposed = !0, !1
              } else ZR.resetCachedMaterial(), GR.setEffect(VR, uR, this._materialContext);
            return !(!GR.effect || !GR.effect.isReady()) && (uR._renderId = ZR.getRenderId(), tR._wasPreviouslyReady = !KR, tR._wasPreviouslyUsingInstances = !!yR, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const RR = this._uniformBuffer;
            RR.addUniform("vTangentSpaceParams", 2), RR.addUniform("vLightingIntensity", 4), RR.addUniform("pointSize", 1), RR.addUniform("vDebugMode", 2), RR.addUniform("renderTargetSize", 2), RR.addUniform("cameraInfo", 4), RR.addUniform("vTextureRepetitionHexTilingParams", 4), RR.addUniform("backgroundRefractionMatrix", 16), RR.addUniform("vBackgroundRefractionInfos", 3), (0, sR.nb)(RR, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((JR => {
              RR.addUniform(JR.name, JR.numComponents)
            })), Object.values(this._samplersList).forEach((JR => {
              RR.addUniform(JR.samplerInfoName, 2), RR.addUniform(JR.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(RR, JR, GR, yR) {
            if (0 === this.geometryThickness) RR.updateFloat("vGeometryThickness", 0);
            else {
              yR.getRenderingMesh().getWorldMatrix().decompose(PR.l.Fe[0]);
              const JR = Math.max(Math.abs(PR.l.Fe[0].x), Math.abs(PR.l.Fe[0].y), Math.abs(PR.l.Fe[0].z));
              RR.updateFloat("vGeometryThickness", this.geometryThickness * JR)
            }
          }
          bindForSubMesh(JR, GR, yR) {
            const tR = this.jH(),
              uR = yR.materialDefines;
            if (!uR) return;
            const ZR = yR.effect;
            if (!ZR) return;
            this._activeEffect = ZR, GR.getMeshUniformBuffer().bindToEffect(ZR, "Mesh"), GR.transferToEffect(JR);
            const qR = tR.ke();
            this._uniformBuffer.bindToEffect(ZR, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tR, GR, JR, this.isFrozen), rJ.c.Bind(qR.currentRenderPassId, this._activeEffect, GR, JR, this);
            const iR = tR.activeCamera;
            iR ? this._uniformBuffer.updateFloat4("cameraInfo", iR.minZ, iR.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const fR = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", fR[0], fR[1], fR[2], fR[3]), this._eventInfo.subMesh = yR, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), uR.OBJECTSPACE_NORMALMAP && (JR.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const VR = this._mustRebind(tR, ZR, yR, GR.visibility),
              KR = qR._features.needToAlwaysBindUniformBuffers;
            (0, sR.h)(GR, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, KJ.d)(this._activeEffect, this._vertexPullingMetadata);
            const wR = this._uniformBuffer;
            if (VR) {
              this.bindViewProjection(ZR);
              const JR = this._getRadianceTexture();
              if (!wR.useUbo || !this.isFrozen || !wR.isSync || yR._drawWrapper._forceRebindOnNextCall) {
                if (tR.texturesEnabled) {
                  for (const RR in this._samplersList) {
                    const JR = this._samplersList[RR];
                    JR.value && (wR.updateFloat2(JR.samplerInfoName, JR.value.coordinatesIndex, JR.value.level), (0, sR.B)(JR.value, wR, JR.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (tR._mirroredCameraPosition ? wR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : wR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, sR.l)(tR, uR, wR, ER.d.White(), JR, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && wR.updateFloat("pointSize", this.pointSize);
                const RR = this._uniformsArray;
                for (let JR = 0, GR = RR.length; JR < GR; JR++) {
                  const GR = RR[JR];
                  (void 0 === GR.requiredDefine || uR[GR.requiredDefine]) && (4 === GR.numComponents ? (GR.populateVectorFromLinkedProperties(PR.l.Vector4[0]), wR.updateVector4(GR.name, PR.l.Vector4[0])) : 3 === GR.numComponents ? (GR.populateVectorFromLinkedProperties(PR.l.Fe[0]), wR.updateVector3(GR.name, PR.l.Fe[0])) : 2 === GR.numComponents ? (GR.populateVectorFromLinkedProperties(PR.l.Vector2[0]), wR.updateFloat2(GR.name, PR.l.Vector2[0].x, PR.l.Vector2[0].y)) : 1 === GR.numComponents && wR.updateFloat(GR.name, GR.linkedProperties[GR.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * tR.environmentIntensity, this._lightingInfos.w = 1, wR.updateVector4("vLightingIntensity", this._lightingInfos), wR.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (tR.texturesEnabled) {
                for (const RR in this._samplersList) {
                  const JR = this._samplersList[RR];
                  JR.value && wR.setTexture(JR.samplerName, JR.value)
                }
                if ((0, sR.n)(tR, uR, wR, JR, this.realTimeFiltering), uR.ENVIRONMENTBRDF && wR.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), uR.FUZZENVIRONMENTBRDF && wR.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), uR.REFRACTED_BACKGROUND && (wR.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), wR.FRR("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), PR.l.Fe[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), wR.updateVector3("vBackgroundRefractionInfos", PR.l.Fe[1])), (uR.ANISOTROPIC || uR.FUZZ || uR.REFRACTED_BACKGROUND || uR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && wR.setTexture("blueNoiseSampler", RR._noiseTextures[this.jH().uniqueId]), uR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const RR = this.sssIrradianceTexture.getSize().width,
                    JR = this.sssIrradianceTexture.getSize().height;
                  wR.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), wR.setTexture("sceneDepthSampler", this.sssDepthTexture), wR.updateFloat2("renderTargetSize", RR, JR)
                }
              }
              this.jH().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(GR) && this.jH().depthPeelingRenderer.bind(ZR), this._eventInfo.subMesh = yR, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VJ.c)(this._activeEffect, this, tR), this.bindEyePosition(ZR)
            } else KR && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, tR, tR.ke(), yR), !VR && this.isFrozen && !KR || !tR.lightsEnabled || this._disableLighting || (0, sR.q)(tR, GR, this._activeEffect, uR, this._maxSimultaneousLights), !VR && this.isFrozen || (this.bindView(ZR), (0, sR.k)(tR, GR, this._activeEffect, !0), uR.NUM_MORPH_INFLUENCERS && (0, sR.w)(GR, this._activeEffect), uR.BAKED_VERTEX_ANIMATION_TEXTURE && GR.bakedVertexAnimationManager?.bind(ZR, uR.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, sR.u)(uR, this._activeEffect, tR)), this._afterBind(GR, this._activeEffect, yR), wR.update()
          }
          getAnimatables() {
            const RR = super.getAnimatables();
            for (const JR in this._samplersList) {
              const GR = this._samplersList[JR];
              GR.value && GR.value.animations && GR.value.animations.length > 0 && RR.push(GR.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && RR.push(this._radianceTexture), RR
          }
          getActiveTextures() {
            const RR = super.getActiveTextures();
            for (const JR in this._samplersList) {
              const GR = this._samplersList[JR];
              GR.value && RR.push(GR.value)
            }
            return this._radianceTexture && RR.push(this._radianceTexture), RR
          }
          hasTexture(RR) {
            if (super.hasTexture(RR)) return !0;
            for (const JR in this._samplersList) {
              if (this._samplersList[JR].value === RR) return !0
            }
            return this._radianceTexture === RR
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(RR, JR) {
            if (this._breakShaderLoadedCheck = !0, JR) {
              this._environmentBRDFTexture && this.jH().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.jH().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const RR in this._samplersList) {
                const JR = this._samplersList[RR];
                JR.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(RR, JR)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.jH().environmentTexture
          }
          _prepareEffect(JR, GR, yR) {
            let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(JR, GR, yR, ZR, qR), !yR.isDirty) return null;
            yR.markAsProcessed();
            const iR = this.jH().ke(),
              fR = new TR.c;
            let VR = 0;
            yR.USESPHERICALINVERTEX && fR.addFallback(VR++, "USESPHERICALINVERTEX"), yR.FOG && fR.addFallback(VR, "FOG"), yR.SPECULARAA && fR.addFallback(VR, "SPECULARAA"), yR.POINTSIZE && fR.addFallback(VR, "POINTSIZE"), yR.LOGARITHMICDEPTH && fR.addFallback(VR, "LOGARITHMICDEPTH"), yR.PARALLAX && fR.addFallback(VR, "PARALLAX"), yR.PARALLAX_RHS && fR.addFallback(VR, "PARALLAX_RHS"), yR.PARALLAXOCCLUSION && fR.addFallback(VR++, "PARALLAXOCCLUSION"), yR.ENVIRONMENTBRDF && fR.addFallback(VR++, "ENVIRONMENTBRDF"), yR.TANGENT && fR.addFallback(VR++, "TANGENT"), VR = (0, sR.F)(yR, fR, this._maxSimultaneousLights, VR), yR.SPECULARTERM && fR.addFallback(VR++, "SPECULARTERM"), yR.USESPHERICALFROMREFLECTIONMAP && fR.addFallback(VR++, "USESPHERICALFROMREFLECTIONMAP"), yR.USEIRRADIANCEMAP && fR.addFallback(VR++, "USEIRRADIANCEMAP"), yR.NORMAL && fR.addFallback(VR++, "NORMAL"), yR.VERTEXCOLOR && fR.addFallback(VR++, "VERTEXCOLOR"), yR.MORPHTARGETS && fR.addFallback(VR++, "MORPHTARGETS"), yR.MULTIVIEW && fR.addFallback(0, "MULTIVIEW");
            const KR = [IR.l.PositionKind];
            yR.NORMAL && KR.push(IR.l.NormalKind), yR.TANGENT && KR.push(IR.l.TangentKind);
            for (let RR = 1; RR <= 6; ++RR) yR["UV" + RR] && KR.push(`uv${1===RR?"":RR}`);
            yR.VERTEXCOLOR && KR.push(IR.l.ColorKind), (0, sR.M)(KR, JR, yR, fR), (0, sR.N)(KR, yR), (0, sR.R)(KR, JR, yR), (0, sR.I)(KR, JR, yR);
            let wR = "openpbr";
            const rR = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const RR in this._uniformsList) rR.push(RR);
            const eR = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            yR.FUZZENVIRONMENTBRDF && eR.push("environmentFuzzBrdfSampler"), yR.REFRACTED_BACKGROUND && eR.push("backgroundRefractionSampler"), (yR.ANISOTROPIC || yR.FUZZ || yR.REFRACTED_BACKGROUND || yR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && eR.push("blueNoiseSampler"), yR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (eR.push("sceneIrradianceSampler"), eR.push("sceneDepthSampler"));
            for (const RR in this._samplersList) {
              const JR = this._samplersList[RR];
              eR.push(JR.samplerName), rR.push(JR.samplerInfoName), rR.push(JR.samplerMatrixName)
            }(0, sR.rb)(rR, eR, !0);
            const aR = ["Material", "Scene", "Mesh"],
              LR = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: yR.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = fR, this._eventInfo.fallbackRank = VR, this._eventInfo.defines = yR, this._eventInfo.uniforms = rR, this._eventInfo.attributes = KR, this._eventInfo.samplers = eR, this._eventInfo.uniformBuffersNames = aR, this._eventInfo.customCode = void 0, this._eventInfo.mesh = JR, this._eventInfo.indexParameters = LR, this._callbackPluginEventGeneric(128, this._eventInfo), rJ.c.AddUniformsAndSamplers(rR, eR), dR.d.AddUniforms(rR), dR.d.AddSamplers(eR), (0, VJ.b)(rR), this._useVertexPulling) {
              const RR = GR?.geometry;
              RR && (this._vertexPullingMetadata = (0, KJ.h)(RR), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((RR, JR) => {
                rR.push(`vp_${JR}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            kR.b && (kR.b.PrepareUniforms(rR, yR), kR.b.PrepareSamplers(eR, yR)), (0, sR.sb)({
              uniformsNames: rR,
              uniformBuffersNames: aR,
              samplers: eR,
              defines: yR,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const nR = {};
            this.customShaderNameResolve && (wR = this.customShaderNameResolve(wR, rR, aR, eR, yR, KR, nR));
            const UR = yR.toString(),
              WR = iR.createEffect(wR, {
                attributes: KR,
                uniformsNames: rR,
                uniformBuffersNames: aR,
                samplers: eR,
                defines: UR,
                fallbacks: fR,
                onCompiled: tR,
                onError: uR,
                indexParameters: LR,
                processFinalCode: nR.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: yR.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: RR._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, iR);
            return this._eventInfo.customCode = void 0, WR
          }
          _prepareDefines(JR, GR, yR) {
            let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ZR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const qR = GR.hasThinInstances,
              iR = this.jH(),
              fR = iR.ke();
            (0, sR.bb)(iR, JR, yR, !0, this._maxSimultaneousLights, this._disableLighting), yR._needNormals = !0, (0, sR.fb)(iR, yR);
            const VR = this.needAlphaBlendingForMesh(JR) && this.jH().useOrderIndependentTransparency;
            if ((0, sR.jb)(iR, yR, this.canRenderToMRT && !VR), (0, sR.ib)(iR, yR, VR), rJ.c.PrepareDefines(fR.currentRenderPassId, JR, yR), yR._areTexturesDirty) {
              yR._needUVs = !1;
              for (let RR = 1; RR <= 6; ++RR) yR["MAINUV" + RR] = !1;
              if (iR.texturesEnabled) {
                for (const GR in this._samplersList) {
                  const RR = this._samplersList[GR];
                  RR.value ? ((0, sR.db)(RR.value, yR, RR.textureDefine), yR[RR.textureDefine + "_GAMMA"] = RR.value.gammaSpace) : yR[RR.textureDefine] = !1
                }
                const RR = this._getRadianceTexture(),
                  JR = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || fR.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, sR.Z)(iR, RR, yR, this.realTimeFiltering, this.realTimeFilteringQuality, !JR), this._baseMetalnessTexture && (yR.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), yR.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, yR.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, yR.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, yR.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, yR.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, yR.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, yR.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, yR.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, yR.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, yR.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, yR.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && FR.b.DiffuseTextureEnabled ? (yR.PARALLAX = !0, yR.PARALLAX_RHS = iR.useRightHandedSystem, yR.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : yR.PARALLAX = !1, yR.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (yR.PARALLAX = !1, yR.PARALLAX_RHS = !1, yR.PARALLAXOCCLUSION = !1, yR.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && FR.b.ReflectionTextureEnabled ? (yR.ENVIRONMENTBRDF = !0, yR.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (yR.ENVIRONMENTBRDF = !1, yR.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? yR.FUZZENVIRONMENTBRDF = !0 : yR.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  yR.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && FR.b.RefractionTextureEnabled, yR.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, yR.REFRACTED_LIGHTS = !0;
                  const RR = this._getRadianceTexture();
                  RR ? (yR.REFRACTED_ENVIRONMENT = FR.b.RefractionTextureEnabled, yR.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.jH().useRightHandedSystem ? !RR.invertZ : RR.invertZ, yR.REFRACTED_ENVIRONMENT_LOCAL_CUBE = RR.isCube && RR.boundingBoxSize) : yR.REFRACTED_ENVIRONMENT = !1
                } else yR.REFRACTED_BACKGROUND = !1, yR.REFRACTED_LIGHTS = !1, yR.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? yR.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : yR.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === uR.d.LIGHTFALLOFF_STANDARD ? (yR.USEPHYSICALLIGHTFALLOFF = !1, yR.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === uR.d.LIGHTFALLOFF_GLTF ? (yR.USEPHYSICALLIGHTFALLOFF = !1, yR.USEGLTFLIGHTFALLOFF = !0) : (yR.USEPHYSICALLIGHTFALLOFF = !0, yR.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? yR.TWOSIDEDLIGHTING = !0 : yR.TWOSIDEDLIGHTING = !1, yR.MIRRORED = !!iR._mirroredCameraPosition, yR.SPECULARAA = fR.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(yR._areTexturesDirty || yR._areMiscDirty) && (yR.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, yR.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, yR.ALPHABLEND = this.needAlphaBlendingForMesh(JR)), yR._areTexturesDirty && (yR.TEXTURE_REPETITION_MODE = fR.version > 1 || fR.isWebGPU ? this.textureRepetitionMode : 0), yR._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(yR), yR.FORCENORMALFORWARD = this._forceNormalForward, yR.RADIANCEOCCLUSION = this._useRadianceOcclusion, yR.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && RR._noiseTextures[iR.uniqueId] && FR.b.ReflectionTextureEnabled ? (yR.ANISOTROPIC = !0, JR.isVerticesDataPresent(IR.l.TangentKind) || (yR._needUVs = !0, yR.MAINUV1 = !0), this._useGltfStyleAnisotropy && (yR.USE_GLTF_STYLE_ANISOTROPY = !0), yR.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, yR.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (yR.ANISOTROPIC = !1, yR.USE_GLTF_STYLE_ANISOTROPY = !1, yR.ANISOTROPIC_BASE = !1, yR.ANISOTROPIC_COAT = !1), yR.THIN_FILM = this.thinFilmWeight > 0, yR.IRIDESCENCE = this.thinFilmWeight > 0, yR.DISPERSION = this.transmissionDispersionScale > 0, yR.SCATTERING = this.hasScattering;
            if (yR.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, yR.TRANSMISSION_SLAB = this.transmissionWeight > 0, yR.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, yR.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !yR.PREPASS && (yR.SUBSURFACE_SLAB || yR.TRANSMISSION_SLAB_VOLUME)) {
              let RR = !1;
              if (!this.sssIrradianceTexture && iR.geometryBufferRenderer) {
                const JR = iR.geometryBufferRenderer.getTextureIndex(mJ.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = iR.geometryBufferRenderer.getGBuffer().textures[JR], RR = !0
              }
              if (!this.sssDepthTexture && iR.geometryBufferRenderer) {
                const JR = iR.geometryBufferRenderer.getTextureIndex(mJ.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = iR.geometryBufferRenderer.getGBuffer().textures[JR], RR = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (yR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, RR && (yR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            yR.FUZZ = this.fuzzWeight > 0 && FR.b.ReflectionTextureEnabled, yR.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, yR.FUZZ ? (JR.isVerticesDataPresent(IR.l.TangentKind) || (yR._needUVs = !0, yR.MAINUV1 = !0), this._environmentFuzzBRDFTexture = HR(this.jH()), yR.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, yR.FUZZENVIRONMENTBRDF = !1, yR.FUZZ_IBL_SAMPLES = 0), yR._areMiscDirty && ((0, sR.eb)(JR, iR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(JR), yR, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GR, this._isVertexOutputInvariant), yR.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !JR.isVerticesDataPresent(IR.l.NormalKind), yR.DEBUGMODE = this._debugMode), (0, sR.Y)(iR, fR, this, yR, !!tR, ZR, qR), this._eventInfo.defines = yR, this._eventInfo.mesh = JR, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, sR.X)(JR, yR, !0, !0, !0, this._transparencyMode !== uR.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, JR = new WeakMap, yR = new WeakMap, tR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, iR = new WeakMap, fR = new WeakMap, VR = new WeakMap, KR = new WeakMap, wR = new WeakMap, rR = new WeakMap, eR = new WeakMap, aR = new WeakMap, LR = new WeakMap, nR = new WeakMap, UR = new WeakMap, WR = new WeakMap, AR = new WeakMap, CR = new WeakMap, XR = new WeakMap, MR = new WeakMap, BR = new WeakMap, OR = new WeakMap, xR = new WeakMap, NR = new WeakMap, DR = new WeakMap, cR = new WeakMap, mR = new WeakMap, zR = new WeakMap, SR = new WeakMap, jR = new WeakMap, YR = new WeakMap, QR = new WeakMap, hR = new WeakMap, RJ = new WeakMap, JJ = new WeakMap, GJ = new WeakMap, yJ = new WeakMap, tJ = new WeakMap, uJ = new WeakMap, ZJ = new WeakMap, qJ = new WeakMap, iJ = new WeakMap, fJ = new WeakMap, eJ = new WeakMap, aJ = new WeakMap, LJ = new WeakMap, nJ = new WeakMap, UJ = new WeakMap, WJ = new WeakMap, AJ = new WeakMap, CJ = new WeakMap, XJ = new WeakMap, lJ = new WeakMap, pJ = new WeakMap, gJ = new WeakMap, bJ = new WeakMap, vJ = new WeakMap, OJ = new WeakMap, xJ = new WeakMap, NJ = new WeakMap, DJ = new WeakMap, HJ = new WeakMap, oJ = new WeakMap, cJ = new WeakMap, PJ = new WeakMap, IJ = new WeakMap, zJ = new WeakMap, jJ = new WeakMap, kJ = new WeakMap, QJ = new WeakMap, sJ = new WeakMap, hJ = new WeakMap, RG = new WeakMap, JG = new WeakMap, GG = new WeakMap, yG = new WeakMap, tG = new WeakMap, uG = new WeakMap, ZG = new WeakMap, qG = new WeakMap, iG = new WeakMap, fG = new WeakMap, VG = new WeakMap, KG = new WeakMap, wG = new WeakMap, rG = new WeakMap, eG = new WeakMap, aG = new WeakMap, LG = new WeakMap, nG = new WeakMap, UG = new WeakMap, WG = new WeakMap, AG = new WeakMap, CG = new WeakMap, XG = new WeakMap, MG = new WeakMap, BG = new WeakMap, lG = new WeakMap, pG = new WeakMap, gG = new WeakMap, bG = new WeakMap, (() => {
          const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(xt[Symbol.metadata] ?? null) : void 0;
          vG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], OG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], xG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], NG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], DG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], HG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], oG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], cG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], PG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], IG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], mG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], zG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], SG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], jG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], dG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], EG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], YG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], kG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], QG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], FG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], TG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], sG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], hG = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ry = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Jy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Gy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], yy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ty = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], uy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Zy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], qy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], iy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Vy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ky = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], wy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ry = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ey = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ay = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ly = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ny = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Uy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Wy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ay = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Cy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Xy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], My = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], By = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ly = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], py = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], gy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], by = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], vy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Oy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], xy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ny = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Dy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Hy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], oy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], cy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Py = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Iy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], my = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], zy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Sy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], jy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Qy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Fy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], hy = [(0, pR.c)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Gt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], tt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], ut = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Zt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], qt = [(0, pR.H)()], it = [(0, pR.H)()], ft = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Vt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Kt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], rt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsLightsDirty")], et = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsLightsDirty")], nt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Ut = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Wt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], At = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Ct = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Xt = [(0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], Bt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], pt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], gt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], bt = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], vt = [(0, pR.d)("_markAllSubMeshesAsMiscDirty")], Ot = [(0, pR.H)()], (0, lR.l)(RR, null, vG, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseWeight" in RR,
              get: RR => RR.baseWeight,
              set: (RR, JR) => {
                RR.baseWeight = JR
              }
            },
            metadata: JR
          }, Dt, Ht), (0, lR.l)(RR, null, OG, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseWeightTexture" in RR,
              get: RR => RR.baseWeightTexture,
              set: (RR, JR) => {
                RR.baseWeightTexture = JR
              }
            },
            metadata: JR
          }, ot, ct), (0, lR.l)(RR, null, xG, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseColor" in RR,
              get: RR => RR.baseColor,
              set: (RR, JR) => {
                RR.baseColor = JR
              }
            },
            metadata: JR
          }, Pt, It), (0, lR.l)(RR, null, NG, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseColorTexture" in RR,
              get: RR => RR.baseColorTexture,
              set: (RR, JR) => {
                RR.baseColorTexture = JR
              }
            },
            metadata: JR
          }, mt, zt), (0, lR.l)(RR, null, DG, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseDiffuseRoughness" in RR,
              get: RR => RR.baseDiffuseRoughness,
              set: (RR, JR) => {
                RR.baseDiffuseRoughness = JR
              }
            },
            metadata: JR
          }, St, jt), (0, lR.l)(RR, null, HG, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseDiffuseRoughnessTexture" in RR,
              get: RR => RR.baseDiffuseRoughnessTexture,
              set: (RR, JR) => {
                RR.baseDiffuseRoughnessTexture = JR
              }
            },
            metadata: JR
          }, dt, Et), (0, lR.l)(RR, null, oG, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseMetalness" in RR,
              get: RR => RR.baseMetalness,
              set: (RR, JR) => {
                RR.baseMetalness = JR
              }
            },
            metadata: JR
          }, Yt, kt), (0, lR.l)(RR, null, cG, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "baseMetalnessTexture" in RR,
              get: RR => RR.baseMetalnessTexture,
              set: (RR, JR) => {
                RR.baseMetalnessTexture = JR
              }
            },
            metadata: JR
          }, Qt, Ft), (0, lR.l)(RR, null, PG, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularWeight" in RR,
              get: RR => RR.specularWeight,
              set: (RR, JR) => {
                RR.specularWeight = JR
              }
            },
            metadata: JR
          }, Tt, st), (0, lR.l)(RR, null, IG, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularWeightTexture" in RR,
              get: RR => RR.specularWeightTexture,
              set: (RR, JR) => {
                RR.specularWeightTexture = JR
              }
            },
            metadata: JR
          }, ht, Ru), (0, lR.l)(RR, null, mG, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularColor" in RR,
              get: RR => RR.specularColor,
              set: (RR, JR) => {
                RR.specularColor = JR
              }
            },
            metadata: JR
          }, Ju, Gu), (0, lR.l)(RR, null, zG, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularColorTexture" in RR,
              get: RR => RR.specularColorTexture,
              set: (RR, JR) => {
                RR.specularColorTexture = JR
              }
            },
            metadata: JR
          }, yu, tu), (0, lR.l)(RR, null, SG, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularRoughness" in RR,
              get: RR => RR.specularRoughness,
              set: (RR, JR) => {
                RR.specularRoughness = JR
              }
            },
            metadata: JR
          }, uu, Zu), (0, lR.l)(RR, null, jG, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularRoughnessTexture" in RR,
              get: RR => RR.specularRoughnessTexture,
              set: (RR, JR) => {
                RR.specularRoughnessTexture = JR
              }
            },
            metadata: JR
          }, qu, iu), (0, lR.l)(RR, null, dG, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularRoughnessAnisotropy" in RR,
              get: RR => RR.specularRoughnessAnisotropy,
              set: (RR, JR) => {
                RR.specularRoughnessAnisotropy = JR
              }
            },
            metadata: JR
          }, fu, Vu), (0, lR.l)(RR, null, EG, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularRoughnessAnisotropyTexture" in RR,
              get: RR => RR.specularRoughnessAnisotropyTexture,
              set: (RR, JR) => {
                RR.specularRoughnessAnisotropyTexture = JR
              }
            },
            metadata: JR
          }, Ku, wu), (0, lR.l)(RR, null, YG, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularIor" in RR,
              get: RR => RR.specularIor,
              set: (RR, JR) => {
                RR.specularIor = JR
              }
            },
            metadata: JR
          }, ru, eu), (0, lR.l)(RR, null, kG, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionWeight" in RR,
              get: RR => RR.transmissionWeight,
              set: (RR, JR) => {
                RR.transmissionWeight = JR
              }
            },
            metadata: JR
          }, au, Lu), (0, lR.l)(RR, null, QG, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionWeightTexture" in RR,
              get: RR => RR.transmissionWeightTexture,
              set: (RR, JR) => {
                RR.transmissionWeightTexture = JR
              }
            },
            metadata: JR
          }, nu, Uu), (0, lR.l)(RR, null, FG, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionColor" in RR,
              get: RR => RR.transmissionColor,
              set: (RR, JR) => {
                RR.transmissionColor = JR
              }
            },
            metadata: JR
          }, Wu, Au), (0, lR.l)(RR, null, TG, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionColorTexture" in RR,
              get: RR => RR.transmissionColorTexture,
              set: (RR, JR) => {
                RR.transmissionColorTexture = JR
              }
            },
            metadata: JR
          }, Cu, Xu), (0, lR.l)(RR, null, sG, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionDepth" in RR,
              get: RR => RR.transmissionDepth,
              set: (RR, JR) => {
                RR.transmissionDepth = JR
              }
            },
            metadata: JR
          }, Mu, Bu), (0, lR.l)(RR, null, hG, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionDepthTexture" in RR,
              get: RR => RR.transmissionDepthTexture,
              set: (RR, JR) => {
                RR.transmissionDepthTexture = JR
              }
            },
            metadata: JR
          }, lu, pu), (0, lR.l)(RR, null, Ry, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionScatter" in RR,
              get: RR => RR.transmissionScatter,
              set: (RR, JR) => {
                RR.transmissionScatter = JR
              }
            },
            metadata: JR
          }, gu, bu), (0, lR.l)(RR, null, Jy, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionScatterTexture" in RR,
              get: RR => RR.transmissionScatterTexture,
              set: (RR, JR) => {
                RR.transmissionScatterTexture = JR
              }
            },
            metadata: JR
          }, vu, Ou), (0, lR.l)(RR, null, Gy, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionScatterAnisotropy" in RR,
              get: RR => RR.transmissionScatterAnisotropy,
              set: (RR, JR) => {
                RR.transmissionScatterAnisotropy = JR
              }
            },
            metadata: JR
          }, xu, Nu), (0, lR.l)(RR, null, yy, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionDispersionScale" in RR,
              get: RR => RR.transmissionDispersionScale,
              set: (RR, JR) => {
                RR.transmissionDispersionScale = JR
              }
            },
            metadata: JR
          }, Du, Hu), (0, lR.l)(RR, null, ty, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionDispersionScaleTexture" in RR,
              get: RR => RR.transmissionDispersionScaleTexture,
              set: (RR, JR) => {
                RR.transmissionDispersionScaleTexture = JR
              }
            },
            metadata: JR
          }, ou, cu), (0, lR.l)(RR, null, uy, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: RR => "transmissionDispersionAbbeNumber" in RR,
              get: RR => RR.transmissionDispersionAbbeNumber,
              set: (RR, JR) => {
                RR.transmissionDispersionAbbeNumber = JR
              }
            },
            metadata: JR
          }, Pu, Iu), (0, lR.l)(RR, null, Zy, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceWeight" in RR,
              get: RR => RR.subsurfaceWeight,
              set: (RR, JR) => {
                RR.subsurfaceWeight = JR
              }
            },
            metadata: JR
          }, mu, zu), (0, lR.l)(RR, null, qy, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceWeightTexture" in RR,
              get: RR => RR.subsurfaceWeightTexture,
              set: (RR, JR) => {
                RR.subsurfaceWeightTexture = JR
              }
            },
            metadata: JR
          }, Su, ju), (0, lR.l)(RR, null, iy, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceColor" in RR,
              get: RR => RR.subsurfaceColor,
              set: (RR, JR) => {
                RR.subsurfaceColor = JR
              }
            },
            metadata: JR
          }, du, Eu), (0, lR.l)(RR, null, fy, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceColorTexture" in RR,
              get: RR => RR.subsurfaceColorTexture,
              set: (RR, JR) => {
                RR.subsurfaceColorTexture = JR
              }
            },
            metadata: JR
          }, Yu, ku), (0, lR.l)(RR, null, Vy, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceRadius" in RR,
              get: RR => RR.subsurfaceRadius,
              set: (RR, JR) => {
                RR.subsurfaceRadius = JR
              }
            },
            metadata: JR
          }, Qu, Fu), (0, lR.l)(RR, null, Ky, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceRadiusScale" in RR,
              get: RR => RR.subsurfaceRadiusScale,
              set: (RR, JR) => {
                RR.subsurfaceRadiusScale = JR
              }
            },
            metadata: JR
          }, Tu, su), (0, lR.l)(RR, null, wy, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceRadiusScaleTexture" in RR,
              get: RR => RR.subsurfaceRadiusScaleTexture,
              set: (RR, JR) => {
                RR.subsurfaceRadiusScaleTexture = JR
              }
            },
            metadata: JR
          }, hu, RZ), (0, lR.l)(RR, null, ry, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: RR => "subsurfaceScatterAnisotropy" in RR,
              get: RR => RR.subsurfaceScatterAnisotropy,
              set: (RR, JR) => {
                RR.subsurfaceScatterAnisotropy = JR
              }
            },
            metadata: JR
          }, JZ, GZ), (0, lR.l)(RR, null, ey, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatWeight" in RR,
              get: RR => RR.coatWeight,
              set: (RR, JR) => {
                RR.coatWeight = JR
              }
            },
            metadata: JR
          }, yZ, tZ), (0, lR.l)(RR, null, ay, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatWeightTexture" in RR,
              get: RR => RR.coatWeightTexture,
              set: (RR, JR) => {
                RR.coatWeightTexture = JR
              }
            },
            metadata: JR
          }, uZ, ZZ), (0, lR.l)(RR, null, Ly, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatColor" in RR,
              get: RR => RR.coatColor,
              set: (RR, JR) => {
                RR.coatColor = JR
              }
            },
            metadata: JR
          }, qZ, iZ), (0, lR.l)(RR, null, ny, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatColorTexture" in RR,
              get: RR => RR.coatColorTexture,
              set: (RR, JR) => {
                RR.coatColorTexture = JR
              }
            },
            metadata: JR
          }, fZ, VZ), (0, lR.l)(RR, null, Uy, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatRoughness" in RR,
              get: RR => RR.coatRoughness,
              set: (RR, JR) => {
                RR.coatRoughness = JR
              }
            },
            metadata: JR
          }, KZ, wZ), (0, lR.l)(RR, null, Wy, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatRoughnessTexture" in RR,
              get: RR => RR.coatRoughnessTexture,
              set: (RR, JR) => {
                RR.coatRoughnessTexture = JR
              }
            },
            metadata: JR
          }, rZ, eZ), (0, lR.l)(RR, null, Ay, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatRoughnessAnisotropy" in RR,
              get: RR => RR.coatRoughnessAnisotropy,
              set: (RR, JR) => {
                RR.coatRoughnessAnisotropy = JR
              }
            },
            metadata: JR
          }, aZ, LZ), (0, lR.l)(RR, null, Cy, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatRoughnessAnisotropyTexture" in RR,
              get: RR => RR.coatRoughnessAnisotropyTexture,
              set: (RR, JR) => {
                RR.coatRoughnessAnisotropyTexture = JR
              }
            },
            metadata: JR
          }, nZ, UZ), (0, lR.l)(RR, null, Xy, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatIor" in RR,
              get: RR => RR.coatIor,
              set: (RR, JR) => {
                RR.coatIor = JR
              }
            },
            metadata: JR
          }, WZ, AZ), (0, lR.l)(RR, null, My, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatDarkening" in RR,
              get: RR => RR.coatDarkening,
              set: (RR, JR) => {
                RR.coatDarkening = JR
              }
            },
            metadata: JR
          }, CZ, XZ), (0, lR.l)(RR, null, By, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "coatDarkeningTexture" in RR,
              get: RR => RR.coatDarkeningTexture,
              set: (RR, JR) => {
                RR.coatDarkeningTexture = JR
              }
            },
            metadata: JR
          }, MZ, BZ), (0, lR.l)(RR, null, ly, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzWeight" in RR,
              get: RR => RR.fuzzWeight,
              set: (RR, JR) => {
                RR.fuzzWeight = JR
              }
            },
            metadata: JR
          }, lZ, pZ), (0, lR.l)(RR, null, py, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzWeightTexture" in RR,
              get: RR => RR.fuzzWeightTexture,
              set: (RR, JR) => {
                RR.fuzzWeightTexture = JR
              }
            },
            metadata: JR
          }, gZ, bZ), (0, lR.l)(RR, null, gy, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzColor" in RR,
              get: RR => RR.fuzzColor,
              set: (RR, JR) => {
                RR.fuzzColor = JR
              }
            },
            metadata: JR
          }, vZ, OZ), (0, lR.l)(RR, null, by, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzColorTexture" in RR,
              get: RR => RR.fuzzColorTexture,
              set: (RR, JR) => {
                RR.fuzzColorTexture = JR
              }
            },
            metadata: JR
          }, xZ, NZ), (0, lR.l)(RR, null, vy, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzRoughness" in RR,
              get: RR => RR.fuzzRoughness,
              set: (RR, JR) => {
                RR.fuzzRoughness = JR
              }
            },
            metadata: JR
          }, DZ, HZ), (0, lR.l)(RR, null, Oy, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "fuzzRoughnessTexture" in RR,
              get: RR => RR.fuzzRoughnessTexture,
              set: (RR, JR) => {
                RR.fuzzRoughnessTexture = JR
              }
            },
            metadata: JR
          }, oZ, cZ), (0, lR.l)(RR, null, xy, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryThinWalled" in RR,
              get: RR => RR.geometryThinWalled,
              set: (RR, JR) => {
                RR.geometryThinWalled = JR
              }
            },
            metadata: JR
          }, PZ, IZ), (0, lR.l)(RR, null, Ny, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryNormalTexture" in RR,
              get: RR => RR.geometryNormalTexture,
              set: (RR, JR) => {
                RR.geometryNormalTexture = JR
              }
            },
            metadata: JR
          }, mZ, zZ), (0, lR.l)(RR, null, Dy, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryTangent" in RR,
              get: RR => RR.geometryTangent,
              set: (RR, JR) => {
                RR.geometryTangent = JR
              }
            },
            metadata: JR
          }, SZ, jZ), (0, lR.l)(RR, null, Hy, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryTangentTexture" in RR,
              get: RR => RR.geometryTangentTexture,
              set: (RR, JR) => {
                RR.geometryTangentTexture = JR
              }
            },
            metadata: JR
          }, dZ, EZ), (0, lR.l)(RR, null, oy, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryCoatNormalTexture" in RR,
              get: RR => RR.geometryCoatNormalTexture,
              set: (RR, JR) => {
                RR.geometryCoatNormalTexture = JR
              }
            },
            metadata: JR
          }, YZ, kZ), (0, lR.l)(RR, null, cy, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryCoatTangent" in RR,
              get: RR => RR.geometryCoatTangent,
              set: (RR, JR) => {
                RR.geometryCoatTangent = JR
              }
            },
            metadata: JR
          }, QZ, FZ), (0, lR.l)(RR, null, Py, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryCoatTangentTexture" in RR,
              get: RR => RR.geometryCoatTangentTexture,
              set: (RR, JR) => {
                RR.geometryCoatTangentTexture = JR
              }
            },
            metadata: JR
          }, TZ, sZ), (0, lR.l)(RR, null, Iy, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryOpacity" in RR,
              get: RR => RR.geometryOpacity,
              set: (RR, JR) => {
                RR.geometryOpacity = JR
              }
            },
            metadata: JR
          }, hZ, Rq), (0, lR.l)(RR, null, my, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryOpacityTexture" in RR,
              get: RR => RR.geometryOpacityTexture,
              set: (RR, JR) => {
                RR.geometryOpacityTexture = JR
              }
            },
            metadata: JR
          }, Jq, Gq), (0, lR.l)(RR, null, zy, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryThickness" in RR,
              get: RR => RR.geometryThickness,
              set: (RR, JR) => {
                RR.geometryThickness = JR
              }
            },
            metadata: JR
          }, yq, tq), (0, lR.l)(RR, null, Sy, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "geometryThicknessTexture" in RR,
              get: RR => RR.geometryThicknessTexture,
              set: (RR, JR) => {
                RR.geometryThicknessTexture = JR
              }
            },
            metadata: JR
          }, uq, Zq), (0, lR.l)(RR, null, jy, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissionLuminance" in RR,
              get: RR => RR.emissionLuminance,
              set: (RR, JR) => {
                RR.emissionLuminance = JR
              }
            },
            metadata: JR
          }, qq, iq), (0, lR.l)(RR, null, dy, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissionColor" in RR,
              get: RR => RR.emissionColor,
              set: (RR, JR) => {
                RR.emissionColor = JR
              }
            },
            metadata: JR
          }, fq, Vq), (0, lR.l)(RR, null, Ey, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissionColorTexture" in RR,
              get: RR => RR.emissionColorTexture,
              set: (RR, JR) => {
                RR.emissionColorTexture = JR
              }
            },
            metadata: JR
          }, Kq, wq), (0, lR.l)(RR, null, Yy, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmWeight" in RR,
              get: RR => RR.thinFilmWeight,
              set: (RR, JR) => {
                RR.thinFilmWeight = JR
              }
            },
            metadata: JR
          }, rq, eq), (0, lR.l)(RR, null, ky, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmWeightTexture" in RR,
              get: RR => RR.thinFilmWeightTexture,
              set: (RR, JR) => {
                RR.thinFilmWeightTexture = JR
              }
            },
            metadata: JR
          }, aq, Lq), (0, lR.l)(RR, null, Qy, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmThickness" in RR,
              get: RR => RR.thinFilmThickness,
              set: (RR, JR) => {
                RR.thinFilmThickness = JR
              }
            },
            metadata: JR
          }, nq, Uq), (0, lR.l)(RR, null, Fy, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmThicknessMin" in RR,
              get: RR => RR.thinFilmThicknessMin,
              set: (RR, JR) => {
                RR.thinFilmThicknessMin = JR
              }
            },
            metadata: JR
          }, Wq, Aq), (0, lR.l)(RR, null, Ty, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmThicknessTexture" in RR,
              get: RR => RR.thinFilmThicknessTexture,
              set: (RR, JR) => {
                RR.thinFilmThicknessTexture = JR
              }
            },
            metadata: JR
          }, Cq, Xq), (0, lR.l)(RR, null, sy, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: RR => "thinFilmIor" in RR,
              get: RR => RR.thinFilmIor,
              set: (RR, JR) => {
                RR.thinFilmIor = JR
              }
            },
            metadata: JR
          }, Mq, Bq), (0, lR.l)(RR, null, hy, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "ambientOcclusionTexture" in RR,
              get: RR => RR.ambientOcclusionTexture,
              set: (RR, JR) => {
                RR.ambientOcclusionTexture = JR
              }
            },
            metadata: JR
          }, lq, pq), (0, lR.l)(RR, null, Rt, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: RR => "directIntensity" in RR,
              get: RR => RR.directIntensity,
              set: (RR, JR) => {
                RR.directIntensity = JR
              }
            },
            metadata: JR
          }, gq, bq), (0, lR.l)(RR, null, Jt, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: RR => "environmentIntensity" in RR,
              get: RR => RR.environmentIntensity,
              set: (RR, JR) => {
                RR.environmentIntensity = JR
              }
            },
            metadata: JR
          }, vq, Oq), (0, lR.l)(RR, null, Gt, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "useSpecularWeightFromTextureAlpha" in RR,
              get: RR => RR.useSpecularWeightFromTextureAlpha,
              set: (RR, JR) => {
                RR.useSpecularWeightFromTextureAlpha = JR
              }
            },
            metadata: JR
          }, xq, Nq), (0, lR.l)(RR, null, yt, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: RR => "forceAlphaTest" in RR,
              get: RR => RR.forceAlphaTest,
              set: (RR, JR) => {
                RR.forceAlphaTest = JR
              }
            },
            metadata: JR
          }, Dq, Hq), (0, lR.l)(RR, null, tt, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: RR => "alphaCutOff" in RR,
              get: RR => RR.alphaCutOff,
              set: (RR, JR) => {
                RR.alphaCutOff = JR
              }
            },
            metadata: JR
          }, oq, cq), (0, lR.l)(RR, null, ut, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: RR => "useAmbientOcclusionFromMetallicTextureRed" in RR,
              get: RR => RR.useAmbientOcclusionFromMetallicTextureRed,
              set: (RR, JR) => {
                RR.useAmbientOcclusionFromMetallicTextureRed = JR
              }
            },
            metadata: JR
          }, Pq, Iq), (0, lR.l)(RR, null, Zt, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "useAmbientInGrayScale" in RR,
              get: RR => RR.useAmbientInGrayScale,
              set: (RR, JR) => {
                RR.useAmbientInGrayScale = JR
              }
            },
            metadata: JR
          }, mq, zq), (0, lR.l)(RR, null, qt, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: RR => "usePhysicalLightFalloff" in RR,
              get: RR => RR.usePhysicalLightFalloff
            },
            metadata: JR
          }, null, Nt), (0, lR.l)(RR, null, it, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: RR => "useGLTFLightFalloff" in RR,
              get: RR => RR.useGLTFLightFalloff
            },
            metadata: JR
          }, null, Nt), (0, lR.l)(RR, null, ft, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "useObjectSpaceNormalMap" in RR,
              get: RR => RR.useObjectSpaceNormalMap,
              set: (RR, JR) => {
                RR.useObjectSpaceNormalMap = JR
              }
            },
            metadata: JR
          }, Sq, jq), (0, lR.l)(RR, null, Vt, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: RR => "useParallax" in RR,
              get: RR => RR.useParallax,
              set: (RR, JR) => {
                RR.useParallax = JR
              }
            },
            metadata: JR
          }, dq, Eq), (0, lR.l)(RR, null, Kt, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: RR => "useParallaxOcclusion" in RR,
              get: RR => RR.useParallaxOcclusion,
              set: (RR, JR) => {
                RR.useParallaxOcclusion = JR
              }
            },
            metadata: JR
          }, Yq, kq), (0, lR.l)(RR, null, wt, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: RR => "parallaxScaleBias" in RR,
              get: RR => RR.parallaxScaleBias,
              set: (RR, JR) => {
                RR.parallaxScaleBias = JR
              }
            },
            metadata: JR
          }, Qq, Fq), (0, lR.l)(RR, null, rt, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "disableLighting" in RR,
              get: RR => RR.disableLighting,
              set: (RR, JR) => {
                RR.disableLighting = JR
              }
            },
            metadata: JR
          }, Tq, sq), (0, lR.l)(RR, null, et, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: RR => "forceIrradianceInFragment" in RR,
              get: RR => RR.forceIrradianceInFragment,
              set: (RR, JR) => {
                RR.forceIrradianceInFragment = JR
              }
            },
            metadata: JR
          }, hq, Ri), (0, lR.l)(RR, null, Lt, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: RR => "maxSimultaneousLights" in RR,
              get: RR => RR.maxSimultaneousLights,
              set: (RR, JR) => {
                RR.maxSimultaneousLights = JR
              }
            },
            metadata: JR
          }, Ji, Gi), (0, lR.l)(RR, null, nt, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: RR => "invertNormalMapX" in RR,
              get: RR => RR.invertNormalMapX,
              set: (RR, JR) => {
                RR.invertNormalMapX = JR
              }
            },
            metadata: JR
          }, yi, ti), (0, lR.l)(RR, null, Ut, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: RR => "invertNormalMapY" in RR,
              get: RR => RR.invertNormalMapY,
              set: (RR, JR) => {
                RR.invertNormalMapY = JR
              }
            },
            metadata: JR
          }, ui, Zi), (0, lR.l)(RR, null, Wt, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "twoSidedLighting" in RR,
              get: RR => RR.twoSidedLighting,
              set: (RR, JR) => {
                RR.twoSidedLighting = JR
              }
            },
            metadata: JR
          }, qi, ii), (0, lR.l)(RR, null, At, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: RR => "useAlphaFresnel" in RR,
              get: RR => RR.useAlphaFresnel,
              set: (RR, JR) => {
                RR.useAlphaFresnel = JR
              }
            },
            metadata: JR
          }, fi, Vi), (0, lR.l)(RR, null, Ct, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: RR => "useLinearAlphaFresnel" in RR,
              get: RR => RR.useLinearAlphaFresnel,
              set: (RR, JR) => {
                RR.useLinearAlphaFresnel = JR
              }
            },
            metadata: JR
          }, Ki, wi), (0, lR.l)(RR, null, Xt, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "environmentBRDFTexture" in RR,
              get: RR => RR.environmentBRDFTexture,
              set: (RR, JR) => {
                RR.environmentBRDFTexture = JR
              }
            },
            metadata: JR
          }, ri, ei), (0, lR.l)(RR, null, Mt, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: RR => "forceNormalForward" in RR,
              get: RR => RR.forceNormalForward,
              set: (RR, JR) => {
                RR.forceNormalForward = JR
              }
            },
            metadata: JR
          }, ai, Li), (0, lR.l)(RR, null, Bt, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: RR => "enableSpecularAntiAliasing" in RR,
              get: RR => RR.enableSpecularAntiAliasing,
              set: (RR, JR) => {
                RR.enableSpecularAntiAliasing = JR
              }
            },
            metadata: JR
          }, ni, Ui), (0, lR.l)(RR, null, lt, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: RR => "useHorizonOcclusion" in RR,
              get: RR => RR.useHorizonOcclusion,
              set: (RR, JR) => {
                RR.useHorizonOcclusion = JR
              }
            },
            metadata: JR
          }, Wi, Ai), (0, lR.l)(RR, null, pt, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: RR => "useRadianceOcclusion" in RR,
              get: RR => RR.useRadianceOcclusion,
              set: (RR, JR) => {
                RR.useRadianceOcclusion = JR
              }
            },
            metadata: JR
          }, Ci, Xi), (0, lR.l)(RR, null, gt, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: RR => "unlit" in RR,
              get: RR => RR.unlit,
              set: (RR, JR) => {
                RR.unlit = JR
              }
            },
            metadata: JR
          }, Mi, Bi), (0, lR.l)(RR, null, bt, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "applyDecalMapAfterDetailMap" in RR,
              get: RR => RR.applyDecalMapAfterDetailMap,
              set: (RR, JR) => {
                RR.applyDecalMapAfterDetailMap = JR
              }
            },
            metadata: JR
          }, li, gi), (0, lR.l)(RR, null, vt, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "debugMode" in RR,
              get: RR => RR.debugMode,
              set: (RR, JR) => {
                RR.debugMode = JR
              }
            },
            metadata: JR
          }, bi, vi), (0, lR.l)(RR, null, Ot, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "transparencyMode" in RR,
              get: RR => RR.transparencyMode
            },
            metadata: JR
          }, null, Nt), JR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JR
          })
        })(), RR.SSS_QUALITY_LOW = 0, RR.SSS_QUALITY_MEDIUM = 1, RR.SSS_QUALITY_HIGH = 2, RR._noiseTextures = {}, RR.ForceGLSL = !1, RR._ShaderLoader = new wJ.d((() => [Promise.all([GR.e(635), GR.e(698)]).then((() => GR(64614))), Promise.all([GR.e(640), GR.e(636), GR.e(697), GR.e(702)]).then((() => GR(64627)))]), (() => [Promise.all([GR.e(654), GR.e(656), GR.e(701)]).then((() => GR(64671))), Promise.all([GR.e(654), GR.e(657), GR.e(700), GR.e(703)]).then((() => GR(64679)))])), RR
      })(),
      hJ = !1;
    hJ || (hJ = !0, (0, kR.d)(), (0, zJ.f)("BABYLON.OpenPBRMaterial", sJ));
    var RG = GR(38233);
    class JG {
      constructor(RR) {
        this.name = DJ.d.NAME_PROCEDURALTEXTURE, this.tL = RR
      }
      register() {
        this.tL._beforeClearStage.registerStep(DJ.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.tL.proceduralTexturesEnabled) {
          BJ.h.StartPerformanceCounter("Procedural textures", this.tL.proceduralTextures.length > 0);
          for (let RR = 0; RR < this.tL.proceduralTextures.length; RR++) {
            const JR = this.tL.proceduralTextures[RR];
            JR._shouldRender() && JR.render()
          }
          BJ.h.EndPerformanceCounter("Procedural textures", this.tL.proceduralTextures.length > 0)
        }
      }
    }
    var GG = GR(41844);
    let yG = (() => {
      var RR;
      let JR, yR, tR, ZR, qR, iR = vR.f,
        fR = [],
        VR = [],
        KR = [],
        wR = [],
        rR = [],
        eR = [],
        LR = [],
        nR = [],
        UR = [];
      return RR = class extends iR {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(RR, JR, GR, yR) {
          let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, yR, !uR), this.isEnabled = ((0, lR.m)(this, fR), (0, lR.m)(this, VR, !0)), this.autoClear = ((0, lR.m)(this, KR), (0, lR.m)(this, wR, !0)), this.onGenerated = (0, lR.m)(this, rR), this.onGeneratedObservable = new RG.b, this.onBeforeGenerationObservable = new RG.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, lR.m)(this, eR, void 0), this._drawWrapper = (0, lR.m)(this, LR), this._textures = {}, this._size = (0, lR.m)(this, nR, void 0), this._textureType = (0, lR.m)(this, UR), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === tR || tR instanceof vR.f ? (this._options = {}, this._fallbackTexture = tR) : (this._options = tR, this._fallbackTexture = tR.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let iR = (yR = this.jH() || aR.c.LastCreatedScene)._getComponent(DJ.d.NAME_PROCEDURALTEXTURE);
          iR || (iR = new JG(yR), yR.qtR(iR)), this._options.skipSceneRegistration || yR.proceduralTextures.push(this), this._fullEngine = yR.ke(), this.name = RR, this.isRenderTarget = !0, this._size = JR, this._textureType = qR, this._generateMipMaps = uR, this._drawWrapper = new GG.c(this._fullEngine), this.setFragment(GR);
          const WR = this._createRtWrapper(ZR, JR, uR, qR);
          this._texture = WR.texture;
          const AR = [];
          AR.push(1, 1), AR.push(-1, 1), AR.push(-1, -1), AR.push(1, -1), this._vertexBuffers[IR.l.PositionKind] = new IR.l(this._fullEngine, AR, IR.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(RR, JR, GR, yR) {
          return RR ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(JR, {
            generateMipMaps: GR,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: yR,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(JR, {
            generateMipMaps: GR,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: yR,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(RR) {
          this._drawWrapper.effect = RR
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((RR => {
            this._contentData = this.readPixels(0, 0, RR), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const RR = this._fullEngine,
            JR = [];
          JR.push(0), JR.push(1), JR.push(2), JR.push(0), JR.push(2), JR.push(3), this._indexBuffer = RR.createIndexBuffer(JR)
        }
        _rebuild() {
          const RR = this._vertexBuffers[IR.l.PositionKind];
          RR && RR._rebuild(), this._createIndexBuffer(), this.refreshRate === lJ.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = lJ.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(RR) {
          if (this.isReady()) return void RR(this);
          const JR = this.getEffect();
          JR && JR.executeWhenCompiled((() => {
            RR(this)
          }))
        }
        isReady() {
          const RR = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const JR = this._getDefines();
          if (this._drawWrapper.effect && JR === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const yR = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== JR && (this._cachedDefines = JR, this._drawWrapper.effect = RR.createEffect(yR, [IR.l.PositionKind], this._uniforms, this._samplers, JR, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([GR.e(706).then((() => GR(64749))), this._options.extraInitializationsAsync()]) : await Promise.all([GR.e(707).then((() => GR(64752))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await GR.e(706).then((() => GR(64749))) : await GR.e(707).then((() => GR(64752)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(RR) {
          this._fragment = RR
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(RR) {
          this._refreshRate = RR, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(RR, JR) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const GR = this._texture.isCube;
          this._rtWrapper.dispose();
          const yR = this._createRtWrapper(GR, RR, JR, this._textureType);
          this._texture = yR.texture, this._size = RR, this._generateMipMaps = JR
        }
        _checkUniform(RR) {
          -1 === this._uniforms.indexOf(RR) && this._uniforms.push(RR)
        }
        setTexture(RR, JR) {
          return -1 === this._samplers.indexOf(RR) && this._samplers.push(RR), this._textures[RR] = JR, this
        }
        setFloat(RR, JR) {
          return this._checkUniform(RR), this._floats[RR] = JR, this
        }
        setInt(RR, JR) {
          return this._checkUniform(RR), this._ints[RR] = JR, this
        }
        setFloats(RR, JR) {
          return this._checkUniform(RR), this._floatsArrays[RR] = JR, this
        }
        setColor3(RR, JR) {
          return this._checkUniform(RR), this._colors3[RR] = JR, this
        }
        setColor4(RR, JR) {
          return this._checkUniform(RR), this._colors4[RR] = JR, this
        }
        setVector2(RR, JR) {
          return this._checkUniform(RR), this._vectors2[RR] = JR, this
        }
        setVector3(RR, JR) {
          return this._checkUniform(RR), this._vectors3[RR] = JR, this
        }
        setVector4(RR, JR) {
          return this._checkUniform(RR), this._vectors4[RR] = JR, this
        }
        setMatrix(RR, JR) {
          return this._checkUniform(RR), this._matrices[RR] = JR, this
        }
        render(RR) {
          const JR = this.jH();
          if (!JR) return;
          const GR = this._fullEngine;
          if (GR.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), GR.setState(!1), !this.nodeMaterialSource) {
            for (const RR in this._textures) this._drawWrapper.effect.setTexture(RR, this._textures[RR]);
            for (const RR in this._ints) this._drawWrapper.effect.setInt(RR, this._ints[RR]);
            for (const RR in this._floats) this._drawWrapper.effect.setFloat(RR, this._floats[RR]);
            for (const RR in this._floatsArrays) this._drawWrapper.effect.setArray(RR, this._floatsArrays[RR]);
            for (const RR in this._colors3) this._drawWrapper.effect.setColor3(RR, this._colors3[RR]);
            for (const RR in this._colors4) {
              const JR = this._colors4[RR];
              this._drawWrapper.effect.setFloat4(RR, JR.r, JR.g, JR.b, JR.a)
            }
            for (const RR in this._vectors2) this._drawWrapper.effect.setVector2(RR, this._vectors2[RR]);
            for (const RR in this._vectors3) this._drawWrapper.effect.setVector3(RR, this._vectors3[RR]);
            for (const RR in this._vectors4) this._drawWrapper.effect.setVector4(RR, this._vectors4[RR]);
            for (const RR in this._matrices) this._drawWrapper.effect.setMatrix(RR, this._matrices[RR])
          }
          if (!this._texture || !this._rtWrapper) return;
          GR._enableGPUDebugMarkers && GR._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const yR = GR.currentViewport;
          if (this.isCube)
            for (let tR = 0; tR < 6; tR++) GR.bindFramebuffer(this._rtWrapper, tR, void 0, void 0, !0), GR.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", tR), this.autoClear && GR.clear(JR.clearColor, !0, !1, !1), GR.drawElementsType(uR.d.TriangleFillMode, 0, 6), GR.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let RR = 1;
            this._rtWrapper.is3D ? RR = this._rtWrapper.depth : this._rtWrapper.is2DArray && (RR = this._rtWrapper.layers);
            for (let yR = 0; yR < RR; yR++) {
              if (GR.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, yR), GR.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== RR ? yR / (RR - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", yR);
                for (const RR in this._textures) this._drawWrapper.effect.setTexture(RR, this._textures[RR])
              }
              this.autoClear && GR.clear(JR.clearColor, !0, !1, !1), GR.drawElementsType(uR.d.TriangleFillMode, 0, 6), GR.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          yR && GR.setViewport(yR), this.isCube && GR.generateMipMapsForCubemap(this._texture, !0), GR._enableGPUDebugMarkers && GR._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const JR = this.getSize(),
            GR = new RR(this.name, JR.width, this._fragment, this.jH(), this._fallbackTexture, this._generateMipMaps);
          return GR.hasAlpha = this.hasAlpha, GR.level = this.level, GR.coordinatesMode = this.coordinatesMode, GR
        }
        dispose() {
          const RR = this.jH();
          if (!RR) return;
          const JR = RR.proceduralTextures.indexOf(this);
          JR >= 0 && RR.proceduralTextures.splice(JR, 1);
          const GR = this._vertexBuffers[IR.l.PositionKind];
          GR && (GR.dispose(), this._vertexBuffers[IR.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const GR = "function" === typeof Symbol && Symbol.metadata ? Object.create(iR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, pR.H)()], yR = [(0, pR.H)()], tR = [(0, pR.H)()], ZR = [(0, pR.H)()], qR = [(0, pR.H)()], (0, lR.l)(RR, null, qR, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: RR => "refreshRate" in RR,
            get: RR => RR.refreshRate
          },
          metadata: GR
        }, null, fR), (0, lR.l)(null, null, JR, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: GR
        }, VR, KR), (0, lR.l)(null, null, yR, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: RR => "autoClear" in RR,
            get: RR => RR.autoClear,
            set: (RR, JR) => {
              RR.autoClear = JR
            }
          },
          metadata: GR
        }, wR, rR), (0, lR.l)(null, null, tR, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: RR => "_generateMipMaps" in RR,
            get: RR => RR._generateMipMaps,
            set: (RR, JR) => {
              RR._generateMipMaps = JR
            }
          },
          metadata: GR
        }, eR, LR), (0, lR.l)(null, null, ZR, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: RR => "_size" in RR,
            get: RR => RR._size,
            set: (RR, JR) => {
              RR._size = JR
            }
          },
          metadata: GR
        }, nR, UR), GR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GR
        })
      })(), RR
    })();

    function tG(RR) {
      return "texture" in RR
    }

    function uG(RR) {
      return "value" in RR
    }
    async function ZG(RR, JR, yR) {
      const tR = [JR.red, JR.green, JR.blue, JR.alpha],
        uR = [],
        ZR = [];
      for (let GR = 0; GR < 4; GR++) {
        const RR = tR[GR];
        if (RR)
          if (tG(RR)) {
            if (RR.sourceChannel < 0 || RR.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let JR = uR.indexOf(RR.texture); - 1 === JR && (JR = uR.length, uR.push(RR.texture)), ZR[GR] = JR
          } else {
            if (!uG(RR)) throw new Error("Invalid channel input configuration");
            if (RR.value < 0 || RR.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            ZR[GR] = -1
          }
        else ZR[GR] = -1
      }
      let qR = JR.outputSize;
      if (!qR && uR.length > 0) {
        let RR = 0;
        for (const JR of uR) {
          const GR = JR.getSize(),
            yR = Math.max(GR.width, GR.height);
          yR > RR && (RR = yR, qR = GR.width === GR.height ? RR : GR)
        }
      }
      qR = qR || 512;
      const iR = [],
        fR = new Set;
      for (let GR = 0; GR < 4; GR++) {
        const RR = tR[GR],
          JR = ["RED", "GREEN", "BLUE", "ALPHA"][GR];
        if (RR && tG(RR)) {
          iR.push(`${JR}_FROM_TEXTURE`);
          const RR = ZR[GR];
          fR.add(RR)
        }
      }
      fR.forEach((RR => {
        iR.push(`USE_TEXTURE${RR}`)
      }));
      const VR = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: yR.ke().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            yR.ke().isWebGPU ? await Promise.all([GR.e(704).then((() => GR(64736)))]) : await Promise.all([GR.e(705).then((() => GR(64741)))])
          },
          skipSceneRegistration: !0
        },
        KR = new yG(RR, qR, "textureMerger", yR, VR);
      KR.refreshRate = -1, KR.defines = iR.length > 0 ? "#define " + iR.join("\n#define ") + "\n" : "";
      for (let GR = 0; GR < uR.length; GR++) wR = uR[GR], (rR = KR).uOffset = wR.uOffset, rR.vOffset = wR.vOffset, rR.uScale = wR.uScale, rR.vScale = wR.vScale, rR.uAng = wR.uAng, rR.vAng = wR.vAng, rR.wAng = wR.wAng, rR.uRotationCenter = wR.uRotationCenter, rR.vRotationCenter = wR.vRotationCenter, KR.setTexture(`inputTexture${GR}`, uR[GR]);
      var wR, rR;
      for (let GR = 0; GR < 4; GR++) {
        const RR = tR[GR],
          JR = ["red", "green", "blue", "alpha"][GR];
        if (RR && tG(RR)) {
          const yR = ZR[GR];
          KR.setInt(`${JR}TextureIndex`, yR), KR.setInt(`${JR}SourceChannel`, RR.sourceChannel)
        } else {
          let yR;
          yR = RR && uG(RR) ? RR.value : 3 === GR ? 1 : 0, KR.setFloat(`${JR}ConstantValue`, yR)
        }
      }
      return await new Promise(((RR, JR) => {
        KR.executeWhenReady((() => {
          try {
            KR.render(), RR(KR)
          } catch (GR) {
            JR(GR instanceof Error ? GR : new Error(String(GR)))
          }
        }))
      }))
    }

    function qG(RR, JR) {
      return {
        texture: RR,
        sourceChannel: JR
      }
    }

    function iG(RR) {
      return {
        value: RR
      }
    }

    function fG(RR, JR, GR, yR) {
      return {
        red: RR,
        green: JR,
        blue: GR,
        alpha: yR
      }
    }
    var VG = GR(41355),
      KG = GR(41444),
      wG = GR(38219),
      rG = GR(41501),
      eG = GR(41436);
    class aG {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class LG extends VG.d {
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
        return !!this._options?.enableMultiview || this.Ma > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new aG;
        super(null), void 0 === RR.deterministicLockstep && (RR.deterministicLockstep = !1), void 0 !== RR.timeStep && (this._timeStep = RR.timeStep), void 0 === RR.lockstepMaxSteps && (RR.lockstepMaxSteps = 4), this._options = RR, wG.c.SetMatrixPrecision(!!RR.useHighPrecisionMatrix), this._caps = {
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
        }, RR.enableMultiview && (this._caps.multiview = {
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
        }, RR.renderingCanvas && (this._renderingCanvas = RR.renderingCanvas), gR.c.Log(`Babylon.js v${VG.d.Version} - Null engine`);
        const JR = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (JR.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (JR.Blob = function() {})
      }
      createVertexBuffer(RR) {
        const JR = new KG.b;
        return JR.references = 1, JR
      }
      createIndexBuffer(RR) {
        const JR = new KG.b;
        return JR.references = 1, JR
      }
      clear(RR, JR, GR) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(RR, JR, GR) {
        this._cachedViewport = RR
      }
      createUniformBuffer(RR) {
        const JR = new KG.b;
        return JR.references = 1, JR.hK = RR instanceof Array ? RR.length * Float32Array.BYTES_PER_ELEMENT : RR.byteLength, JR
      }
      createDynamicUniformBuffer(RR) {
        return this.createUniformBuffer(RR)
      }
      updateUniformBuffer(RR, JR, GR, yR) {}
      bindUniformBufferBase(RR, JR, GR) {}
      bindUniformBlock(RR, JR, GR) {}
      createShaderProgram(RR, JR, GR, yR, tR) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(RR, JR) {
        return []
      }
      getAttributes(RR, JR) {
        return []
      }
      bindSamplers(RR) {
        this._currentEffect = null
      }
      enableEffect(RR) {
        RR = null !== RR && (0, eG.d)(RR) ? RR.effect : RR, this._currentEffect = RR, RR && (RR.onBind && RR.onBind(RR), RR._onBindObservable && RR._onBindObservable.notifyObservers(RR))
      }
      setStateCullFaceType(RR, JR) {}
      setState(RR) {}
      setIntArray(RR, JR) {
        return !0
      }
      setIntArray2(RR, JR) {
        return !0
      }
      setIntArray3(RR, JR) {
        return !0
      }
      setIntArray4(RR, JR) {
        return !0
      }
      setFloatArray(RR, JR) {
        return !0
      }
      setFloatArray2(RR, JR) {
        return !0
      }
      setFloatArray3(RR, JR) {
        return !0
      }
      setFloatArray4(RR, JR) {
        return !0
      }
      setArray(RR, JR) {
        return !0
      }
      setArray2(RR, JR) {
        return !0
      }
      setArray3(RR, JR) {
        return !0
      }
      setArray4(RR, JR) {
        return !0
      }
      setMatrices(RR, JR) {
        return !0
      }
      setMatrix3x3(RR, JR) {
        return !0
      }
      setMatrix2x2(RR, JR) {
        return !0
      }
      setFloat(RR, JR) {
        return !0
      }
      setFloat2(RR, JR, GR) {
        return !0
      }
      setFloat3(RR, JR, GR, yR) {
        return !0
      }
      setBool(RR, JR) {
        return !0
      }
      setFloat4(RR, JR, GR, yR, tR) {
        return !0
      }
      setAlphaMode(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[GR] !== RR && (this.alphaState.setAlphaBlend(0 !== RR, 0), JR || this.setDepthWrite(0 === RR), this._alphaMode[GR] = RR)
      }
      bindBuffers(RR, JR, GR) {}
      wipeCaches(RR) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, RR && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(RR, JR, GR, yR) {}
      drawElementsType(RR, JR, GR, yR) {}
      drawArraysType(RR, JR, GR, yR) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(RR) {}
      createTexture(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          ZR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const iR = new pJ.b(this, 1),
          fR = String(RR);
        return iR.url = fR, iR.generateMipMaps = !JR, iR.samplingMode = tR, iR.invertY = GR, iR.baseWidth = this._options.textureSize, iR.baseHeight = this._options.textureSize, iR.width = this._options.textureSize, iR.height = this._options.textureSize, qR && (iR.format = qR), ZR && (iR._buffer = ZR), iR.isReady = !0, uR && setTimeout((() => {
          uR(iR)
        })), this._internalTexturesCache.push(iR), iR
      }
      _createHardwareRenderTargetWrapper(RR, JR, GR) {
        const yR = new rG.d(RR, JR, GR, this);
        return this._renderTargetWrapperCache.push(yR), yR
      }
      createRenderTargetTexture(RR, JR) {
        const GR = this._createHardwareRenderTargetWrapper(!1, !1, RR),
          yR = {};
        void 0 !== JR && "object" === typeof JR ? (yR.generateMipMaps = JR.generateMipMaps, yR.generateDepthBuffer = void 0 === JR.generateDepthBuffer || JR.generateDepthBuffer, yR.generateStencilBuffer = yR.generateDepthBuffer && JR.generateStencilBuffer, yR.type = void 0 === JR.type ? 0 : JR.type, yR.samplingMode = void 0 === JR.samplingMode ? 3 : JR.samplingMode) : (yR.generateMipMaps = JR, yR.generateDepthBuffer = !0, yR.generateStencilBuffer = !1, yR.type = 0, yR.samplingMode = 3);
        const tR = new pJ.b(this, 5);
        GR.setTexture(tR);
        const uR = RR.width || RR,
          ZR = RR.height || RR;
        return GR._generateDepthBuffer = yR.generateDepthBuffer, GR._generateStencilBuffer = !!yR.generateStencilBuffer, tR.baseWidth = uR, tR.baseHeight = ZR, tR.width = uR, tR.height = ZR, tR.isReady = !0, tR.samples = 1, tR.generateMipMaps = !!yR.generateMipMaps, tR.samplingMode = yR.samplingMode, tR.type = yR.type, this._internalTexturesCache.push(tR), GR
      }
      createMultiviewRenderTargetTexture(RR, JR) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const GR = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: RR,
            height: JR
          }),
          yR = new pJ.b(this, 5, !0);
        return yR.baseWidth = RR, yR.baseHeight = JR, yR.width = RR, yR.height = JR, yR.isMultiview = !0, yR.isReady = !0, yR.format = 5, yR.samples = 1, GR.setTextures(yR), GR
      }
      bindMultiviewFramebuffer(RR) {
        this.bindFramebuffer(RR, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(RR, JR) {
        const GR = this._createHardwareRenderTargetWrapper(!1, !0, RR),
          yR = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...JR
          };
        yR.generateStencilBuffer = yR.generateDepthBuffer && yR.generateStencilBuffer, (1 !== yR.type || this._caps.textureFloatLinearFiltering) && (2 !== yR.type || this._caps.textureHalfFloatLinearFiltering) || (yR.samplingMode = 1), GR._generateDepthBuffer = yR.generateDepthBuffer, GR._generateStencilBuffer = !!yR.generateStencilBuffer;
        const tR = new pJ.b(this, 5);
        return tR.baseWidth = RR, tR.baseHeight = RR, tR.width = RR, tR.height = RR, tR.isReady = !0, tR.isCube = !0, tR.samples = 1, tR.generateMipMaps = !!yR.generateMipMaps, tR.samplingMode = yR.samplingMode, tR.type = yR.type, this._internalTexturesCache.push(tR), GR
      }
      updateTextureSamplingMode(RR, JR) {
        JR.samplingMode = RR
      }
      createRawTexture(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          fR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const VR = new pJ.b(this, 3);
        return VR.baseWidth = JR, VR.baseHeight = GR, VR.width = JR, VR.height = GR, VR.format = yR, VR.generateMipMaps = tR, VR.samplingMode = ZR, VR.invertY = uR, VR._compression = qR, VR.type = iR, VR._useSRGBBuffer = fR, this._doNotHandleContextLost || (VR._bufferView = RR), VR
      }
      updateRawTexture(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        RR && (RR._bufferView = JR, RR.format = GR, RR.invertY = yR, RR._compression = tR, RR.type = uR, RR._useSRGBBuffer = ZR)
      }
      bindFramebuffer(RR, JR, GR, yR, tR) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = RR, this._currentFramebuffer = null, this._cachedViewport && !tR && this.setViewport(this._cachedViewport, GR, yR)
      }
      unBindFramebuffer(RR) {
        let JR = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, JR && JR(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(RR) {
        const JR = new KG.b;
        return JR.references = 1, JR.hK = 1, JR
      }
      updateDynamicTexture(RR, JR, GR) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(RR) {}
      updateDynamicIndexBuffer(RR, JR) {}
      updateDynamicVertexBuffer(RR, JR, GR, yR) {}
      _bindTextureDirectly(RR, JR) {
        return this._boundTexturesCache[this._activeChannel] !== JR && (this._boundTexturesCache[this._activeChannel] = JR, !0)
      }
      _bindTexture(RR, JR) {
        RR < 0 || this._bindTextureDirectly(0, JR)
      }
      _deleteBuffer(RR) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(RR) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(RR, JR, GR, yR, tR) {}
      _uploadDataToTextureDirectly(RR, JR) {}
      _uploadArrayBufferViewToTexture(RR, JR) {}
      _uploadImageToTexture(RR, JR) {}
    }
    GR(41560), GR(41600), GR(41555);
    async function nG(RR) {
      const JR = RR.getInternalTexture();
      if (!JR || 1 !== JR.source) return null;
      if (JR.invertY) {
        const JR = RR.jH()?.ke();
        if (!(JR instanceof LG)) return null
      }
      const GR = JR._buffer;
      let yR, uR = RR.mimeType;
      try {
        GR ? ArrayBuffer.isView(GR) ? yR = GR.buffer.slice(GR.byteOffset, GR.byteOffset + GR.byteLength) : GR instanceof ArrayBuffer ? yR = GR : GR instanceof Blob ? (yR = await GR.arrayBuffer(), uR = GR.type || uR) : "string" === typeof GR ? (yR = await tR.Tools.LoadFileAsync(GR), uR = (0, iR.d)(GR) || uR) : "undefined" !== typeof HTMLImageElement && GR instanceof HTMLImageElement && (yR = await tR.Tools.LoadFileAsync(GR.src), uR = (0, iR.d)(GR.src) || uR) : (yR = await tR.Tools.LoadFileAsync(JR.url), uR = (0, iR.d)(JR.url) || uR)
      } catch {
        return null
      }
      if (yR && !uR && JR.url) {
        const RR = JR.url.match(/^data:([^;,]+)/);
        uR = RR ? RR[1] : (0, iR.d)(JR.url)
      }
      return yR && uR ? {
        data: yR,
        mimeType: uR
      } : null
    }
    const UG = 1e-6,
      WG = new LR.Color3(.04, .04, .04),
      AG = 1024,
      CG = LR.Color3.White(),
      XG = LR.Color3.BlackReadOnly;

    function MG(RR) {
      switch (RR) {
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

    function BG(RR, JR, GR) {
      if (JR < WG.r) return 0;
      const yR = WG.r,
        tR = RR * GR / (1 - WG.r) + JR - 2 * WG.r,
        uR = tR * tR - 4 * yR * (WG.r - JR);
      return WR.Clamp((-tR + Math.sqrt(uR)) / (2 * yR), 0, 1)
    }

    function lG(RR) {
      const JR = RR.diffuseColor.toLinearSpace(RR.jH().ke().useExactSrgbConversions).scale(.5),
        GR = RR.alpha,
        yR = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new PR.n(0, 1),
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new PR.n(0, .1),
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PR.n(0, .1),
            tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new PR.n(1300, .1);
          return function(RR, JR, GR, yR, tR) {
            return (1 - RR) * (1 - RR) * (1 - RR) * JR + 3 * (1 - RR) * (1 - RR) * RR * GR + 3 * (1 - RR) * RR * RR * yR + RR * RR * RR * tR
          }(Math.pow(RR / tR.x, .333333), JR.y, GR.y, yR.y, tR.y)
        }(WR.Clamp(RR.specularPower, 0, AG));
      return {
        baseColorFactor: [JR.r, JR.g, JR.b, GR],
        metallicFactor: 0,
        roughnessFactor: yR
      }
    }

    function pG(RR, JR) {
      JR.needAlphaBlending() ? RR.alphaMode = "BLEND" : JR.needAlphaTesting() && (RR.alphaMode = "MASK", RR.alphaCutoff = JR.alphaCutOff)
    }

    function gG(RR, JR, GR) {
      const yR = new Uint8Array(RR * JR * 4);
      for (let tR = 0; tR < yR.length; tR += 4) yR[tR] = yR[tR + 1] = yR[tR + 2] = yR[tR + 3] = 255;
      return XR.b.CreateRGBATexture(yR, RR, JR, GR)
    }

    function bG(RR) {
      if (RR instanceof Uint8Array) {
        const JR = RR.length,
          GR = new Float32Array(RR.length);
        for (let yR = 0; yR < JR; ++yR) GR[yR] = RR[yR] / 255;
        return GR
      }
      if (RR instanceof Float32Array) return RR;
      throw new Error("Unsupported pixel format!")
    }
    class vG {
      constructor(RR) {
        this._exporter = RR, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(RR) {
        return RR ? this._textureMap.get(RR.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(RR, JR) {
        const GR = lG(RR),
          yR = {
            name: RR.name
          };
        if (null == RR.backFaceCulling || RR.backFaceCulling || (RR.twoSidedLighting || tR.Tools.Warn(RR.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), yR.doubleSided = !0), JR) {
          const JR = [],
            tR = RR.diffuseTexture;
          tR && JR.push(this.exportTextureAsync(tR).then((RR => {
            RR && (GR.baseColorTexture = RR)
          })));
          const uR = RR.bumpTexture;
          uR && JR.push(this.exportTextureAsync(uR).then((RR => {
            RR && (yR.normalTexture = RR, 1 !== uR.level && (yR.normalTexture.scale = uR.level))
          })));
          const ZR = RR.emissiveTexture;
          ZR && (yR.emissiveFactor = [1, 1, 1], JR.push(this.exportTextureAsync(ZR).then((RR => {
            RR && (yR.emissiveTexture = RR)
          }))));
          const qR = RR.ambientTexture;
          qR && JR.push(this.exportTextureAsync(qR).then((RR => {
            if (RR) {
              const JR = {
                index: RR.index
              };
              yR.occlusionTexture = JR
            }
          }))), JR.length > 0 && (this._exporter._materialNeedsUVsSet.add(RR), await Promise.all(JR))
        }(RR.alpha < 1 || RR.opacityTexture) && (RR.alphaMode === MR.c.ALPHA_COMBINE ? yR.alphaMode = "BLEND" : tR.Tools.Warn(RR.name + ": glTF 2.0 does not support alpha mode: " + RR.alphaMode.toString())), RR.emissiveColor && !RR.emissiveColor.equalsWithEpsilon(XG, UG) && (yR.emissiveFactor = RR.emissiveColor.QtR()), yR.pbrMetallicRoughness = GR, pG(yR, RR), await this._finishMaterialAsync(yR, RR);
        const uR = this._exporter._materials;
        return uR.push(yR), uR.length - 1
      }
      async _finishMaterialAsync(RR, JR) {
        const GR = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", RR, JR),
          yR = [];
        for (const tR of GR) yR.push(this.exportTextureAsync(tR));
        await Promise.all(yR), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", RR, JR)
      }
      _resizeTexturesToSameDimensions(RR, JR, GR) {
        const yR = RR ? RR.getSize() : {
            width: 0,
            height: 0
          },
          tR = JR ? JR.getSize() : {
            width: 0,
            height: 0
          };
        let uR, ZR;
        return yR.width < tR.width ? (uR = RR && RR instanceof CR.c ? AR.i.CreateResizedCopy(RR, tR.width, tR.height, !0) : gG(tR.width, tR.height, GR), ZR = JR) : yR.width > tR.width ? (ZR = JR && JR instanceof CR.c ? AR.i.CreateResizedCopy(JR, yR.width, yR.height, !0) : gG(yR.width, yR.height, GR), uR = RR) : (uR = RR, ZR = JR), {
          texture1: uR,
          texture2: ZR
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(RR, JR, GR) {
        const yR = new Array;
        if (!RR && !JR) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const tR = RR ? RR.jH() : JR ? JR.jH() : null;
        if (tR) {
          const uR = this._resizeTexturesToSameDimensions(RR, JR, tR),
            ZR = uR.texture1?.getSize();
          let qR, iR;
          const fR = ZR.width,
            VR = ZR.height,
            KR = await uR.texture1.readPixels(),
            wR = await uR.texture2.readPixels();
          if (!KR) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (qR = bG(KR), !wR) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          iR = bG(wR);
          const rR = iR.byteLength,
            eR = new Uint8Array(rR),
            aR = new Uint8Array(rR),
            nR = 4,
            UR = new LR.Color3(0, 0, 0);
          let WR = 0,
            AR = 0;
          for (let RR = 0; RR < VR; ++RR)
            for (let JR = 0; JR < fR; ++JR) {
              const yR = (fR * RR + JR) * nR,
                ZR = {
                  diffuseColor: new LR.Color3(qR[yR], qR[yR + 1], qR[yR + 2]).toLinearSpace(tR.ke().useExactSrgbConversions).multiply(GR.diffuseColor),
                  specularColor: new LR.Color3(iR[yR], iR[yR + 1], iR[yR + 2]).toLinearSpace(tR.ke().useExactSrgbConversions).multiply(GR.specularColor),
                  glossiness: iR[yR + 3] * GR.glossiness
                },
                VR = this._convertSpecularGlossinessToMetallicRoughness(ZR);
              UR.r = Math.max(UR.r, VR.baseColor.r), UR.g = Math.max(UR.g, VR.baseColor.g), UR.b = Math.max(UR.b, VR.baseColor.b), WR = Math.max(WR, VR.metallic), AR = Math.max(AR, VR.roughness), aR[yR] = 255 * VR.baseColor.r, aR[yR + 1] = 255 * VR.baseColor.g, aR[yR + 2] = 255 * VR.baseColor.b, aR[yR + 3] = uR.texture1.hasAlpha ? 255 * qR[yR + 3] : 255, eR[yR] = 0, eR[yR + 1] = 255 * VR.roughness, eR[yR + 2] = 255 * VR.metallic, eR[yR + 3] = 255
            }
          const CR = {
            baseColor: UR,
            metallic: WR,
            roughness: AR
          };
          let XR = !1,
            MR = !1;
          for (let RR = 0; RR < VR; ++RR)
            for (let JR = 0; JR < fR; ++JR) {
              const GR = (fR * RR + JR) * nR;
              aR[GR] /= CR.baseColor.r > UG ? CR.baseColor.r : 1, aR[GR + 1] /= CR.baseColor.g > UG ? CR.baseColor.g : 1, aR[GR + 2] /= CR.baseColor.b > UG ? CR.baseColor.b : 1;
              const yR = LR.Color3.FromInts(aR[GR], aR[GR + 1], aR[GR + 2]).toGammaSpace(tR.ke().useExactSrgbConversions);
              aR[GR] = 255 * yR.r, aR[GR + 1] = 255 * yR.g, aR[GR + 2] = 255 * yR.b, yR.equalsWithEpsilon(CG, UG) || (MR = !0), eR[GR + 1] /= CR.roughness > UG ? CR.roughness : 1, eR[GR + 2] /= CR.metallic > UG ? CR.metallic : 1;
              LR.Color3.FromInts(255, eR[GR + 1], eR[GR + 2]).equalsWithEpsilon(CG, UG) || (XR = !0)
            }
          return XR && yR.push((0, BR.EncodeImageAsync)(eR, fR, VR).then((RR => {
            CR.metallicRoughnessTextureData = RR
          }))), MR && yR.push((0, BR.EncodeImageAsync)(aR, fR, VR).then((RR => {
            CR.baseColorTextureData = RR
          }))), await Promise.all(yR).then((() => CR))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(RR) {
        const JR = this._getPerceivedBrightness(RR.diffuseColor),
          GR = this._getPerceivedBrightness(RR.specularColor),
          yR = 1 - this._getMaxComponent(RR.specularColor),
          tR = BG(JR, GR, yR),
          uR = RR.diffuseColor.scale(yR / (1 - WG.r) / Math.max(1 - tR, UG)),
          ZR = RR.specularColor.subtract(WG.scale(1 - tR)).scale(1 / Math.max(tR, UG));
        let qR = LR.Color3.Lerp(uR, ZR, tR * tR);
        qR = qR.clampToRef(0, 1, qR);
        return {
          baseColor: qR,
          metallic: tR,
          roughness: 1 - RR.glossiness
        }
      }
      _getPerceivedBrightness(RR) {
        return Math.sqrt(.299 * RR.r * RR.r + .587 * RR.g * RR.g + .114 * RR.b * RR.b)
      }
      _getMaxComponent(RR) {
        return Math.max(RR.r, Math.max(RR.g, RR.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        const fR = [],
          VR = {
            baseColor: RR,
            metallic: JR,
            roughness: GR
          };
        if (iR)
          if (ZR instanceof sJ) {
            if (ZR.geometryOpacityTexture) {
              const RR = yR && yR.getInternalTexture() ? yR.getInternalTexture().uniqueId : 0,
                JR = ZR.geometryOpacityTexture && ZR.geometryOpacityTexture.getInternalTexture() ? ZR.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                GR = Number(`${RR}${JR}`),
                tR = this._textureMap.get(GR);
              tR ? qR.baseColorTexture = tR : fR.push(ZG("baseColorOpacityTexture", fG(yR ? qG(yR, 0) : iG(1), yR ? qG(yR, 1) : iG(1), yR ? qG(yR, 2) : iG(1), qG(ZR.geometryOpacityTexture, 0)), ZR.jH()).then((async RR => {
                const JR = await this.exportTextureAsync(RR, GR);
                JR && (qR.baseColorTexture = JR)
              })))
            } else yR && fR.push(this.exportTextureAsync(yR).then((RR => {
              RR && (qR.baseColorTexture = RR)
            })));
            if (ZR._useMetallicFromMetallicTextureBlue && tR) fR.push(this.exportTextureAsync(tR).then((RR => {
              RR && (qR.metallicRoughnessTexture = RR)
            })));
            else if (uR || tR) {
              const RR = tR && tR.getInternalTexture() ? tR.getInternalTexture().uniqueId : 0,
                JR = uR && uR.getInternalTexture() ? uR.getInternalTexture().uniqueId : 0,
                GR = Number(`${RR}${JR}`),
                yR = this._textureMap.get(GR);
              yR ? qR.metallicRoughnessTexture = yR : fR.push(ZG("MetalRoughTexture", fG(ZR.ambientOcclusionTexture ? qG(ZR.ambientOcclusionTexture, 0) : iG(1), uR ? qG(uR, 0) : iG(1), tR ? qG(tR, 0) : iG(1)), ZR.jH()).then((async RR => {
                const JR = await this.exportTextureAsync(RR, GR);
                JR && (qR.metallicRoughnessTexture = JR)
              })))
            }
          } else yR && fR.push(this.exportTextureAsync(yR).then((RR => {
            RR && (qR.baseColorTexture = RR)
          }))), tR && fR.push(this.exportTextureAsync(tR).then((RR => {
            RR && (qR.metallicRoughnessTexture = RR)
          })));
        return fR.length > 0 && (this._exporter._materialNeedsUVsSet.add(ZR), await Promise.all(fR)), VR
      }
      _getTextureSampler(RR) {
        const JR = {};
        if (!RR || !(RR instanceof CR.c)) return JR;
        const GR = this._getGLTFTextureWrapMode(RR.wrapU);
        10497 !== GR && (JR.wrapS = GR);
        const yR = this._getGLTFTextureWrapMode(RR.wrapV);
        switch (10497 !== yR && (JR.wrapT = yR), RR.samplingMode) {
          case CR.c.LINEAR_LINEAR:
            JR.magFilter = 9729, JR.minFilter = 9729;
            break;
          case CR.c.LINEAR_NEAREST:
            JR.magFilter = 9729, JR.minFilter = 9728;
            break;
          case CR.c.NEAREST_LINEAR:
            JR.magFilter = 9728, JR.minFilter = 9729;
            break;
          case CR.c.NEAREST_LINEAR_MIPLINEAR:
            JR.magFilter = 9728, JR.minFilter = 9987;
            break;
          case CR.c.NEAREST_NEAREST:
            JR.magFilter = 9728, JR.minFilter = 9728;
            break;
          case CR.c.NEAREST_LINEAR_MIPNEAREST:
            JR.magFilter = 9728, JR.minFilter = 9985;
            break;
          case CR.c.LINEAR_NEAREST_MIPNEAREST:
            JR.magFilter = 9729, JR.minFilter = 9984;
            break;
          case CR.c.LINEAR_NEAREST_MIPLINEAR:
            JR.magFilter = 9729, JR.minFilter = 9986;
            break;
          case CR.c.NEAREST_NEAREST_MIPLINEAR:
            JR.magFilter = 9728, JR.minFilter = 9986;
            break;
          case CR.c.LINEAR_LINEAR_MIPLINEAR:
            JR.magFilter = 9729, JR.minFilter = 9987;
            break;
          case CR.c.LINEAR_LINEAR_MIPNEAREST:
            JR.magFilter = 9729, JR.minFilter = 9985;
            break;
          case CR.c.NEAREST_NEAREST_MIPNEAREST:
            JR.magFilter = 9728, JR.minFilter = 9984
        }
        return JR
      }
      _getGLTFTextureWrapMode(RR) {
        switch (RR) {
          case CR.c.WRAP_ADDRESSMODE:
            return 10497;
          case CR.c.CLAMP_ADDRESSMODE:
            return 33071;
          case CR.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return tR.Tools.Error(`Unsupported Texture Wrap Mode ${RR}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(RR, JR, GR) {
        const yR = {
            diffuseColor: RR._albedoColor,
            specularColor: RR._reflectivityColor,
            glossiness: RR._microSurface
          },
          tR = RR._albedoTexture,
          uR = RR._reflectivityTexture,
          ZR = RR._useMicroSurfaceFromReflectivityMapAlpha;
        if (uR && !ZR) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((tR || uR) && GR) {
          this._exporter._materialNeedsUVsSet.add(RR);
          const GR = this._exportTextureSampler(tR || uR),
            ZR = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(tR, uR, yR),
            qR = this._exporter._textures;
          if (ZR.baseColorTextureData) {
            const RR = await this._exportImageAsync(`baseColor${qR.length}`, ZR.baseColorTextureData);
            JR.baseColorTexture = this._exportTextureInfo(RR, GR, tR?.coordinatesIndex)
          }
          if (ZR.metallicRoughnessTextureData) {
            const RR = await this._exportImageAsync(`metallicRoughness${qR.length}`, ZR.metallicRoughnessTextureData);
            JR.metallicRoughnessTexture = this._exportTextureInfo(RR, GR, uR?.coordinatesIndex)
          }
          return ZR
        }
        return this._convertSpecularGlossinessToMetallicRoughness(yR)
      }
      async exportPBRMaterialAsync(RR, JR) {
        const GR = {},
          yR = {
            name: RR.name
          },
          tR = RR.isMetallicWorkflow();
        if (tR) {
          const JR = RR._albedoColor,
            yR = RR.alpha;
          JR && (GR.baseColorFactor = [JR.r, JR.g, JR.b, yR])
        }
        const uR = tR ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(RR._albedoColor, RR._metallic, RR._roughness, RR._albedoTexture, RR._metallicTexture, RR._metallicTexture, RR, GR, JR) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(RR, GR, JR);
        await this._setMetallicRoughnessPbrMaterialAsync(uR, RR, yR, GR, JR), await this._finishMaterialAsync(yR, RR);
        const ZR = this._exporter._materials;
        return ZR.push(yR), ZR.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(RR, JR, GR, yR, uR) {
        if (pG(GR, JR), RR.baseColor.equalsWithEpsilon(CG, UG) && WR.WithinEpsilon(JR.alpha, 1, UG) || (yR.baseColorFactor = [RR.baseColor.r, RR.baseColor.g, RR.baseColor.b, JR.alpha]), null != RR.metallic && 1 !== RR.metallic && (yR.metallicFactor = RR.metallic), null != RR.roughness && 1 !== RR.roughness && (yR.roughnessFactor = RR.roughness), null == JR.backFaceCulling || JR.backFaceCulling || (JR._twoSidedLighting || tR.Tools.Warn(JR.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), GR.doubleSided = !0), uR) {
          const RR = [],
            tR = JR instanceof XJ ? JR._bumpTexture : JR.geometryNormalTexture;
          tR && RR.push(this.exportTextureAsync(tR).then((RR => {
            RR && (GR.normalTexture = RR, 1 !== tR.level && (GR.normalTexture.scale = tR.level))
          })));
          const uR = JR instanceof XJ ? JR._ambientTexture : JR.ambientOcclusionTexture;
          uR && RR.push(new Promise((async RR => {
            if (JR instanceof sJ && yR.metallicRoughnessTexture) {
              const JR = this._exportTextureSampler(uR),
                GR = this._exporter._textures[yR.metallicRoughnessTexture.index].source,
                tR = this._exportTextureInfo(GR, JR, uR.coordinatesIndex);
              return this._textureMap.set(uR.uniqueId, tR), this._exporter._extensionsPostExportTextures("exporter", tR, uR), RR(tR)
            }
            return RR(await this.exportTextureAsync(uR))
          })).then((async RR => {
            if (RR) {
              const yR = {
                index: RR.index,
                texCoord: RR.texCoord,
                extensions: RR.extensions
              };
              GR.occlusionTexture = yR, yR.strength = JR instanceof XJ ? JR._ambientTextureStrength : JR.ambientOcclusionTexture.level
            }
          })));
          const ZR = JR instanceof XJ ? JR._emissiveTexture : JR.emissionColorTexture;
          ZR && RR.push(this.exportTextureAsync(ZR).then((RR => {
            RR && (GR.emissiveTexture = RR)
          }))), RR.length > 0 && (this._exporter._materialNeedsUVsSet.add(JR), await Promise.all(RR))
        }
        const ZR = JR instanceof XJ ? JR._emissiveColor : JR.emissionColor;
        ZR.equalsWithEpsilon(XG, UG) || (GR.emissiveFactor = ZR.QtR()), GR.pbrMetallicRoughness = yR
      }
      async exportOpenPBRMaterialAsync(RR, JR) {
        const GR = {},
          yR = {
            name: RR.name
          },
          tR = RR.baseColor,
          uR = RR.geometryOpacity;
        tR && (GR.baseColorFactor = [tR.r, tR.g, tR.b, uR]);
        const ZR = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(RR.baseColor, RR.baseMetalness, RR.specularRoughness, RR.baseColorTexture, RR.baseMetalnessTexture, RR.specularRoughnessTexture, RR, GR, JR);
        await this._setMetallicRoughnessPbrMaterialAsync(ZR, RR, yR, GR, JR), await this._finishMaterialAsync(yR, RR);
        const qR = this._exporter._materials;
        return qR.push(yR), qR.length - 1
      }
      async exportTextureAsync(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = this._textureMap.get(JR ?? RR.uniqueId);
        if (GR) return GR;
        const yR = this._exportTextureSampler(RR),
          tR = await this._exportTextureImageAsync(RR);
        return GR = this._exportTextureInfo(tR, yR, RR.coordinatesIndex), this._textureMap.set(JR ?? RR.uniqueId, GR), this._exporter._extensionsPostExportTextures("exporter", GR, RR), GR
      }
      async _exportTextureImageAsync(RR) {
        const JR = RR.mimeType ?? "none",
          GR = this._internalTextureToImage,
          yR = RR.getInternalTexture().uniqueId;
        GR[yR] = GR[yR] || {};
        let uR = GR[yR][JR];
        return void 0 === uR && (uR = (async () => {
          const GR = await nG(RR);
          if (GR && MG(GR.mimeType) && ("none" === JR || GR.mimeType === JR)) return await this._exportImageAsync(RR.name, new Blob([GR.data], {
            type: GR.mimeType
          }));
          let yR = "image/png";
          "none" !== JR && (MG(JR) ? yR = JR : (yR = "image/png", tR.Tools.Warn(`Unsupported media type: ${JR}. Exporting texture as PNG.`)));
          const uR = RR.getSize(),
            ZR = await (0, AR.g)(RR),
            qR = await (0, BR.EncodeImageAsync)(ZR, uR.width, uR.height, yR);
          return await this._exportImageAsync(RR.name, qR)
        })(), GR[yR][JR] = uR), await uR
      }
      async _exportImageAsync(RR, JR) {
        const GR = this._exporter._images;
        let yR;
        if (this._exporter._shouldUseGlb) {
          yR = {
            name: RR,
            mimeType: JR.type,
            bufferView: void 0
          };
          const GR = await JR.arrayBuffer(),
            tR = this._exporter._bufferManager.createBufferView(new Uint8Array(GR));
          this._exporter._bufferManager.setBufferView(yR, tR)
        } else {
          const uR = RR.replace(/\.\/|\/|\.\\|\\/g, "_"),
            ZR = function(RR) {
              switch (RR) {
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
            }(JR.type);
          let qR = uR + ZR;
          GR.some((RR => RR.uri === qR)) && (qR = `${uR}_${tR.Tools.RandomId()}${ZR}`), yR = {
            name: RR,
            uri: qR
          }, this._exporter._imageData[qR] = JR
        }
        return GR.push(yR), GR.length - 1
      }
      _exportTextureInfo(RR, JR, GR) {
        const yR = this._exporter._textures;
        let tR = yR.findIndex((GR => GR.sampler == JR && GR.source === RR)); - 1 === tR && (tR = yR.length, yR.push({
          source: RR,
          sampler: JR
        }));
        const uR = {
          index: tR
        };
        return GR && (uR.texCoord = GR), uR
      }
      _exportTextureSampler(RR) {
        const JR = this._getTextureSampler(RR),
          GR = this._exporter._samplers,
          yR = GR.findIndex((RR => RR.minFilter === JR.minFilter && RR.magFilter === JR.magFilter && RR.wrapS === JR.wrapS && RR.wrapT === JR.wrapT));
        return -1 !== yR ? yR : (GR.push(JR), GR.length - 1)
      }
    }
    var OG = GR(41586),
      xG = GR(41723);
    (0, xG.d)();
    var NG = GR(38213);
    const DG = yR.Matrix.Compose(new yR.Fe(-1, 1, 1), yR.Quaternion.Identity(), yR.Fe.Zero());

    function HG(RR, JR) {
      if (!(RR instanceof KR.c)) return !1;
      if (JR) {
        if (!RR.getWorldMatrix().equalsWithEpsilon(yR.Matrix.IdentityReadOnly, NG.c)) return !1
      } else {
        if (!RR.getWorldMatrix().multiplyToRef(DG, yR.TmpVectors.Matrix[0]).equalsWithEpsilon(yR.Matrix.IdentityReadOnly, NG.c)) return !1
      }
      return !(RR instanceof wR.d && RR.geometry)
    }
    const oG = yR.Fe.ZeroReadOnly,
      cG = yR.Quaternion.Identity(),
      PG = yR.Fe.OneReadOnly,
      IG = new yR.Fe(-1, 1, 1);

    function mG(RR, JR) {
      const {
        byteOffset: GR,
        byteStride: yR,
        type: tR,
        normalized: uR
      } = RR, ZR = RR.getSize(), qR = JR.reduce(((RR, JR) => JR.getTotalVertices() > RR ? JR.getTotalVertices() : RR), -Number.MAX_VALUE);
      return {
        byteOffset: GR,
        byteStride: yR,
        componentCount: ZR,
        type: tR,
        count: qR * ZR,
        normalized: uR,
        totalVertices: qR,
        kind: RR.getKind()
      }
    }

    function zG(RR) {
      switch (RR) {
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

    function SG(RR) {
      switch (RR) {
        case VR.c.PositionKind:
        case VR.c.NormalKind:
        case VR.c.TangentKind:
        case VR.c.ColorKind:
        case VR.c.MatricesIndicesKind:
        case VR.c.MatricesIndicesExtraKind:
        case VR.c.MatricesWeightsKind:
        case VR.c.MatricesWeightsExtraKind:
        case VR.c.UVKind:
        case VR.c.UV2Kind:
        case VR.c.UV3Kind:
        case VR.c.UV4Kind:
        case VR.c.UV5Kind:
        case VR.c.UV6Kind:
          return !0
      }
      return !1
    }

    function jG(RR) {
      const JR = Math.sqrt(RR.x * RR.x + RR.y * RR.y + RR.z * RR.z);
      JR > 0 && (RR.x /= JR, RR.y /= JR, RR.z /= JR)
    }

    function dG(RR) {
      return RR.x *= -1, RR
    }

    function EG(RR) {
      if (RR.x * RR.x + RR.y * RR.y > .5) {
        const JR = Math.abs(RR.x),
          GR = Math.abs(RR.y);
        if (JR > GR) {
          const GR = Math.sign(RR.x);
          RR.x = JR, RR.y *= -GR, RR.z *= -GR, RR.w *= GR
        } else {
          const JR = Math.sign(RR.y);
          RR.x *= -JR, RR.y = GR, RR.z *= JR, RR.w *= -JR
        }
      } else {
        const JR = Math.abs(RR.z),
          GR = Math.abs(RR.w);
        if (JR > GR) {
          const GR = Math.sign(RR.z);
          RR.x *= -GR, RR.y *= GR, RR.z = JR, RR.w *= -GR
        } else {
          const JR = Math.sign(RR.w);
          RR.x *= JR, RR.y *= -JR, RR.z *= -JR, RR.w = GR
        }
      }
      return RR
    }

    function YG(RR) {
      RR.VJR(-RR.z, RR.w, RR.x, -RR.y)
    }

    function kG(RR, JR) {
      const GR = yR.Fe.FromArrayToRef(JR.translation || [0, 0, 0], 0, yR.TmpVectors.Fe[0]),
        tR = yR.Quaternion.FromArrayToRef(JR.rotation || [0, 0, 0, 1], 0, yR.TmpVectors.Quaternion[0]),
        uR = yR.Matrix.ComposeToRef(PG, tR, GR, yR.TmpVectors.Matrix[0]),
        ZR = yR.Fe.FromArrayToRef(RR.translation || [0, 0, 0], 0, yR.TmpVectors.Fe[2]),
        qR = yR.Quaternion.FromArrayToRef(RR.rotation || [0, 0, 0, 1], 0, yR.TmpVectors.Quaternion[1]),
        iR = yR.Matrix.ComposeToRef(PG, qR, ZR, yR.TmpVectors.Matrix[1]);
      uR.multiplyToRef(iR, iR), iR.decompose(void 0, tR, GR), GR.equalsWithEpsilon(oG, NG.c) ? delete JR.translation : JR.translation = GR.QtR(), tR.equalsWithEpsilon(cG, NG.c) ? delete JR.rotation : JR.rotation = tR.QtR(), JR.scale && delete JR.scale
    }

    function QG(RR, JR) {
      if (!(JR instanceof KR.c)) return !1;
      if (!(1 === JR.getChildren().length && 0 === RR.getChildren().length && RR.parent === JR)) return !1;
      const GR = RR.jH(),
        yR = RR instanceof xG.f && !GR.useRightHandedSystem ? IG : PG;
      return !!JR.MK.equalsWithEpsilon(yR, NG.c) || (gR.c.Warn(`Cannot collapse node ${RR.name} into parent node ${JR.name} with modified scaling.`), !1)
    }

    function FG(RR) {
      if (RR instanceof Array) {
        const JR = new Float32Array(RR);
        return new Uint8Array(JR.buffer, JR.byteOffset, JR.byteLength)
      }
      return ArrayBuffer.isView(RR) ? new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength) : new Uint8Array(RR)
    }

    function TG(RR, JR) {
      for (const [GR, yR] of Object.entries(RR)) {
        const tR = JR[GR];
        (Array.isArray(yR) && Array.isArray(tR) && sG(yR, tR) || yR === tR) && delete RR[GR]
      }
      return RR
    }

    function sG(RR, JR) {
      return RR.length === JR.length && RR.every(((RR, GR) => RR === JR[GR]))
    }
    const hG = new Map([
      [Int8Array, (RR, JR, GR) => RR.setInt8(JR, GR)],
      [Uint8Array, (RR, JR, GR) => RR.setUint8(JR, GR)],
      [Uint8ClampedArray, (RR, JR, GR) => RR.setUint8(JR, GR)],
      [Int16Array, (RR, JR, GR) => RR.setInt16(JR, GR, !0)],
      [Uint16Array, (RR, JR, GR) => RR.setUint16(JR, GR, !0)],
      [Int32Array, (RR, JR, GR) => RR.setInt32(JR, GR, !0)],
      [Uint32Array, (RR, JR, GR) => RR.setUint32(JR, GR, !0)],
      [Float32Array, (RR, JR, GR) => RR.setFloat32(JR, GR, !0)],
      [Float64Array, (RR, JR, GR) => RR.setFloat64(JR, GR, !0)]
    ]);
    class Ry {
      writeTypedArray(RR) {
        this._checkGrowBuffer(RR.byteLength);
        const JR = hG.get(RR.constructor);
        for (let GR = 0; GR < RR.length; GR++) JR(this._dataView, this._byteOffset, RR[GR]), this._byteOffset += RR.BYTES_PER_ELEMENT
      }
      constructor(RR) {
        this._data = new Uint8Array(RR), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(RR) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, RR), this._byteOffset++
      }
      writeInt8(RR) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, RR), this._byteOffset++
      }
      writeInt16(RR) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, RR, !0), this._byteOffset += 2
      }
      writeUInt16(RR) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, RR, !0), this._byteOffset += 2
      }
      writeInt32(RR) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, RR, !0), this._byteOffset += 4
      }
      writeUInt32(RR) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, RR, !0), this._byteOffset += 4
      }
      writeFloat32(RR) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, RR, !0), this._byteOffset += 4
      }
      writeFloat64(RR) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, RR, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(RR) {
        const JR = this.byteOffset + RR;
        if (JR > this._data.byteLength) {
          const RR = new Uint8Array(2 * JR);
          RR.set(this._data), this._data = RR, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Jy(RR) {
      return RR % 4 === 0 ? 4 : RR % 2 === 0 ? 2 : 1
    }
    class Gy {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(RR) {
        let JR = 0;
        this._bufferViewToData.forEach((RR => {
          JR += RR.byteLength
        }));
        const GR = new Ry(JR),
          yR = Array.from(this._bufferViewToData.keys()).sort(((RR, JR) => Jy(JR.byteLength) - Jy(RR.byteLength)));
        for (const tR of yR) {
          tR.byteOffset = GR.byteOffset, RR.push(tR);
          const JR = RR.length - 1,
            yR = this.getPropertiesWithBufferView(tR);
          for (const RR of yR) RR.bufferView = JR;
          GR.writeTypedArray(this._bufferViewToData.get(tR)), this._bufferViewToData.delete(tR)
        }
        return GR.getOutputData()
      }
      createBufferView(RR, JR) {
        const GR = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: RR.byteLength,
          byteStride: JR
        };
        return this._bufferViewToData.set(GR, RR), GR
      }
      createAccessor(RR, JR, GR, yR, tR, uR, ZR) {
        this._verifyBufferView(RR);
        const qR = {
          bufferView: void 0,
          componentType: GR,
          count: yR,
          type: JR,
          min: uR?.min,
          max: uR?.max,
          normalized: ZR,
          byteOffset: tR
        };
        return this.setBufferView(qR, RR), this._accessorToBufferView.set(qR, RR), qR
      }
      setBufferView(RR, JR) {
        this._verifyBufferView(JR);
        this.getPropertiesWithBufferView(JR).push(RR)
      }
      removeBufferView(RR) {
        const JR = this.getPropertiesWithBufferView(RR);
        for (const GR of JR) void 0 !== GR.bufferView && delete GR.bufferView;
        this._bufferViewToData.delete(RR), this._bufferViewToProperties.delete(RR), this._accessorToBufferView.forEach(((JR, GR) => {
          JR === RR && (void 0 !== GR.byteOffset && delete GR.byteOffset, this._accessorToBufferView.delete(GR))
        }))
      }
      getBufferView(RR) {
        const JR = this._accessorToBufferView.get(RR);
        return this._verifyBufferView(JR), JR
      }
      getPropertiesWithBufferView(RR) {
        return this._verifyBufferView(RR), this._bufferViewToProperties.set(RR, this._bufferViewToProperties.get(RR) ?? []), this._bufferViewToProperties.get(RR)
      }
      getData(RR) {
        return this._verifyBufferView(RR), this._bufferViewToData.get(RR)
      }
      _verifyBufferView(RR) {
        if (void 0 === RR || !this._bufferViewToData.has(RR)) throw new Error(`BufferView ${RR} not found in BufferManager.`)
      }
    }
    var yy = GR(41732);
    (0, yy.d)();
    var ty = GR(41982);
    (0, ty.g)();
    var uy = GR(41781),
      Zy = GR(42635);
    (0, Zy.f)();
    let qy = (() => {
      var RR;
      let JR, GR, yR = [],
        tR = [],
        uR = [],
        ZR = [];
      return RR = class {
        get influence() {
          return this._influence
        }
        set influence(RR) {
          if (this._influence === RR) return;
          const JR = this._influence;
          this._influence = RR, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === JR || 0 === RR)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(RR) {
          this._animationPropertiesOverride = RR
        }
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = RR, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new RG.b, this._onDataLayoutChanged = new RG.b, this.id = (0, lR.m)(this, yR, void 0), this.morphTargetManager = ((0, lR.m)(this, tR), (0, lR.m)(this, uR, null)), this._animationPropertiesOverride = ((0, lR.m)(this, ZR), null), this.id = RR, this.morphTargetManager = qR, this._scene = GR || aR.c.LastCreatedScene, this.influence = JR, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        RiR(RR) {
          const JR = this.hasPositions;
          this._positions = RR, JR !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(RR) {
          const JR = this.hasNormals;
          this._normals = RR, JR !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(RR) {
          const JR = this.hasTangents;
          this._tangents = RR, JR !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(RR) {
          const JR = this.hasUVs;
          this._uvs = RR, JR !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(RR) {
          const JR = this.hasUV2s;
          this._uv2s = RR, JR !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(RR) {
          const JR = this.hasColors;
          this._colors = RR, JR !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const JR = MJ.c.Clone((() => new RR(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return JR._positions = this._positions, JR._normals = this._normals, JR._tangents = this._tangents, JR._uvs = this._uvs, JR._uv2s = this._uv2s, JR._colors = this._colors, JR
        }
        serialize() {
          const RR = {};
          return RR.name = this.name, RR.influence = this.influence, null != this.id && (RR.id = this.id), RR.uniqueId = this.uniqueId, RR.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (RR.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (RR.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (RR.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (RR.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (RR.colors = Array.prototype.slice.call(this.getColors())), MJ.c.AppendSerializedAnimations(this, RR), RR
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(JR, GR) {
          let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const tR = new RR(JR.name, JR.influence, GR, yR);
          if (tR.RiR(JR.positions), null != JR.id && (tR.id = JR.id), JR.normals && tR.setNormals(JR.normals), JR.tangents && tR.setTangents(JR.tangents), JR.uvs && tR.setUVs(JR.uvs), JR.uv2s && tR.setUV2s(JR.uv2s), JR.colors && tR.setColors(JR.colors), JR.animations) {
            for (let RR = 0; RR < JR.animations.length; RR++) {
              const GR = JR.animations[RR],
                yR = (0, zJ.e)("BABYLON.Animation");
              yR && tR.animations.push(yR.Parse(GR))
            }
            JR.autoAnimate && GR && GR.beginAnimation(tR, JR.autoAnimateFrom, JR.autoAnimateTo, JR.autoAnimateLoop, JR.autoAnimateSpeed || 1)
          }
          return tR
        }
        static FromMesh(JR, GR, yR) {
          GR || (GR = JR.name);
          const tR = new RR(GR, yR, JR.jH(), JR.morphTargetManager);
          return tR.RiR(JR.getVerticesData(IR.l.PositionKind)), JR.isVerticesDataPresent(IR.l.NormalKind) && tR.setNormals(JR.getVerticesData(IR.l.NormalKind)), JR.isVerticesDataPresent(IR.l.TangentKind) && tR.setTangents(JR.getVerticesData(IR.l.TangentKind)), JR.isVerticesDataPresent(IR.l.UVKind) && tR.setUVs(JR.getVerticesData(IR.l.UVKind)), JR.isVerticesDataPresent(IR.l.UV2Kind) && tR.setUV2s(JR.getVerticesData(IR.l.UV2Kind)), JR.isVerticesDataPresent(IR.l.ColorKind) && tR.setColors(JR.getVerticesData(IR.l.ColorKind)), tR
        }
      }, (() => {
        const qR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, pR.H)()], GR = [(0, pR.H)()], (0, lR.l)(null, null, JR, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: RR => "id" in RR,
            get: RR => RR.id,
            set: (RR, JR) => {
              RR.id = JR
            }
          },
          metadata: qR
        }, yR, tR), (0, lR.l)(null, null, GR, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: RR => "morphTargetManager" in RR,
            get: RR => RR.morphTargetManager,
            set: (RR, JR) => {
              RR.morphTargetManager = JR
            }
          },
          metadata: qR
        }, uR, ZR), qR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qR
        })
      })(), RR
    })();
    var iy, fy = GR(42714),
      Vy = GR(41777);
    ! function(RR) {
      RR[RR.INTANGENT = 0] = "INTANGENT", RR[RR.OUTTANGENT = 1] = "OUTTANGENT"
    }(iy || (iy = {}));
    class Ky {
      static _IsTransformable(RR) {
        return RR && (RR instanceof KR.c || RR instanceof yy.b || RR instanceof Vy.c)
      }
      static _CreateNodeAnimation(RR, JR, GR, yR, uR) {
        if (this._IsTransformable(RR)) {
          const ZR = [],
            qR = [],
            iR = JR.getKeys(),
            fR = Ky._CalculateMinMaxKeyFrames(iR),
            VR = Ky._DeduceInterpolation(iR, GR, yR),
            KR = VR.interpolationType,
            wR = VR.shouldBakeAnimation;
          if (wR ? Ky._CreateBakedAnimation(RR, JR, GR, fR.min, fR.max, JR.framePerSecond, uR, ZR, qR, fR, yR) : "LINEAR" === KR || "STEP" === KR ? Ky._CreateLinearOrStepAnimation(RR, JR, GR, ZR, qR, yR) : "CUBICSPLINE" === KR ? Ky._CreateCubicSplineAnimation(RR, JR, GR, ZR, qR, yR) : Ky._CreateBakedAnimation(RR, JR, GR, fR.min, fR.max, JR.framePerSecond, uR, ZR, qR, fR, yR), ZR.length && qR.length) {
            return {
              inputs: ZR,
              outputs: qR,
              samplerInterpolation: KR,
              inputsMin: wR ? fR.min : tR.Tools.FloatRound(fR.min / JR.framePerSecond),
              inputsMax: wR ? fR.max : tR.Tools.FloatRound(fR.max / JR.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(RR) {
        let JR = null,
          GR = "VEC3",
          yR = !1;
        const uR = RR.targetProperty.split(".");
        switch (uR[0]) {
          case "MK":
            JR = "scale";
            break;
          case "position":
            JR = "translation";
            break;
          case "rotation":
            GR = "VEC4", JR = "rotation";
            break;
          case "rotationQuaternion":
            GR = "VEC4", yR = !0, JR = "rotation";
            break;
          case "influence":
            GR = "SCALAR", JR = "weights";
            break;
          default:
            tR.Tools.Error(`Unsupported animatable property ${uR[0]}`)
        }
        return JR ? {
          animationChannelTargetPath: JR,
          dataAccessorType: GR,
          useQuaternion: yR
        } : (tR.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        let KR;
        if (Ky._IsTransformable(RR) && RR.animations)
          for (const wR of RR.animations) {
            if (VR && !VR(wR)) continue;
            const tR = Ky._DeduceAnimationInfo(wR);
            tR && (KR = {
              name: wR.name,
              samplers: [],
              channels: []
            }, Ky._AddAnimation(`${wR.name}`, wR.hasRunningRuntimeAnimations ? JR : KR, RR, wR, tR.dataAccessorType, tR.animationChannelTargetPath, yR, uR, ZR, qR, tR.useQuaternion, iR, fR), KR.samplers.length && KR.channels.length && GR.push(KR))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        let KR;
        if (RR instanceof fy.b) {
          const tR = RR.morphTargetManager;
          if (tR)
            for (let wR = 0; wR < tR.numTargets; ++wR) {
              const rR = tR.getTarget(wR);
              for (const eR of rR.animations) {
                if (VR && !VR(eR)) continue;
                const rR = new Zy.d(`${eR.name}`, "influence", eR.framePerSecond, eR.dataType, eR.nG, eR.enableBlending),
                  aR = [],
                  LR = eR.getKeys();
                for (let RR = 0; RR < LR.length; ++RR) {
                  const JR = LR[RR];
                  for (let RR = 0; RR < tR.numTargets; ++RR) RR == wR ? aR.push(JR) : aR.push({
                    frame: JR.frame,
                    value: 0
                  })
                }
                rR.setKeys(aR, !0);
                const nR = Ky._DeduceAnimationInfo(rR);
                nR && (KR = {
                  name: rR.name,
                  samplers: [],
                  channels: []
                }, Ky._AddAnimation(eR.name, eR.hasRunningRuntimeAnimations ? JR : KR, RR, rR, nR.dataAccessorType, nR.animationChannelTargetPath, yR, uR, ZR, qR, nR.useQuaternion, iR, fR, tR.numTargets), KR.samplers.length && KR.channels.length && GR.push(KR))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        let VR;
        if (RR.animationGroups) {
          const KR = RR.animationGroups;
          for (const wR of KR) {
            const KR = new Map,
              rR = new Map,
              eR = new Set,
              aR = wR.to - wR.from;
            VR = {
              name: wR.name,
              channels: [],
              samplers: []
            };
            for (let JR = 0; JR < wR.targetedAnimations.length; ++JR) {
              const fR = wR.targetedAnimations[JR],
                aR = fR.target,
                LR = fR.animation;
              if (iR && !iR(LR)) continue;
              const nR = qR.has(aR);
              if (this._IsTransformable(aR) || 1 === aR.length && this._IsTransformable(aR[0])) {
                const RR = Ky._DeduceAnimationInfo(fR.animation);
                if (RR) {
                  const JR = this._IsTransformable(aR) ? aR : this._IsTransformable(aR[0]) ? aR[0] : null;
                  JR && Ky._AddAnimation(`${LR.name}`, VR, JR, LR, RR.dataAccessorType, RR.animationChannelTargetPath, GR, yR, tR, uR, RR.useQuaternion, ZR, nR)
                }
              } else if (aR instanceof qy || 1 === aR.length && aR[0] instanceof qy) {
                if (Ky._DeduceAnimationInfo(fR.animation)) {
                  const JR = aR instanceof qy ? aR : aR[0];
                  if (JR) {
                    const GR = RR.morphTargetManagers.find((RR => {
                      for (let GR = 0; GR < RR.numTargets; ++GR)
                        if (RR.getTarget(GR) === JR) return !0;
                      return !1
                    }));
                    if (GR) {
                      const yR = RR.meshes.find((RR => RR.morphTargetManager === GR));
                      yR && (KR.has(yR) || KR.set(yR, new Map), KR.get(yR)?.set(JR, LR), eR.add(yR), rR.set(yR, LR))
                    }
                  }
                }
              }
            }
            eR.forEach((RR => {
              const JR = RR.morphTargetManager;
              let qR = null;
              const iR = [],
                fR = rR.get(RR).getKeys(),
                eR = fR.length;
              for (let GR = 0; GR < eR; ++GR)
                for (let yR = 0; yR < JR.numTargets; ++yR) {
                  const tR = JR.getTarget(yR),
                    uR = KR.get(RR);
                  if (uR) {
                    const JR = uR.get(tR);
                    JR ? (qR || (qR = new Zy.d(`${wR.name}_${RR.name}_MorphWeightAnimation`, "influence", JR.framePerSecond, Zy.d.ANIMATIONTYPE_FLOAT, JR.nG, JR.enableBlending)), iR.push(JR.getKeys()[GR])) : iR.push({
                      frame: wR.from + aR / eR * GR,
                      value: tR.influence,
                      inTangent: fR[0].inTangent ? 0 : void 0,
                      outTangent: fR[0].outTangent ? 0 : void 0
                    })
                  }
                }
              qR.setKeys(iR, !0);
              const LR = Ky._DeduceAnimationInfo(qR);
              LR && Ky._AddAnimation(`${wR.name}_${RR.name}_MorphWeightAnimation`, VR, RR, qR, LR.dataAccessorType, LR.animationChannelTargetPath, GR, yR, tR, uR, LR.useQuaternion, ZR, !1, JR?.numTargets)
            })), VR.channels.length && VR.samplers.length && (fR?.set(wR, JR.length), JR.push(VR))
          }
        }
      }
      static _AddAnimation(RR, JR, GR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR) {
        const aR = Ky._CreateNodeAnimation(GR, tR, ZR, KR, wR);
        let LR, nR, UR, WR, AR, CR;
        if (aR) {
          if (eR) {
            let RR, JR = 0;
            const GR = [];
            for (; aR.inputs.length > 0;) RR = aR.inputs.shift(), JR % eR == 0 && GR.push(RR), JR++;
            aR.inputs = GR
          }
          const RR = qR.get(GR),
            tR = new Float32Array(aR.inputs);
          LR = iR.createBufferView(tR), nR = iR.createAccessor(LR, "SCALAR", 5126, aR.inputs.length, void 0, {
            min: [aR.inputsMin],
            max: [aR.inputsMax]
          }), VR.push(nR), UR = VR.length - 1;
          const fR = new yR.Quaternion,
            KR = new yR.Fe,
            wR = new yR.Fe,
            XR = GR instanceof yy.b,
            MR = zG(uR),
            BR = new Float32Array(aR.outputs.length * MR);
          aR.outputs.forEach((function(RR, JR) {
            let GR = RR;
            switch (ZR) {
              case "translation":
                rR && (yR.Fe.FromArrayToRef(RR, 0, wR), dG(wR), wR.toArray(GR));
                break;
              case "rotation":
                4 === RR.length ? yR.Quaternion.FromArrayToRef(RR, 0, fR) : (GR = new Array(4), yR.Fe.FromArrayToRef(RR, 0, KR), yR.Quaternion.FromEulerVectorToRef(KR, fR)), rR && (EG(fR), XR && YG(fR)), fR.toArray(GR)
            }
            BR.set(GR, JR * MR)
          })), LR = iR.createBufferView(BR), nR = iR.createAccessor(LR, uR, 5126, aR.outputs.length), VR.push(nR), WR = VR.length - 1, AR = {
            interpolation: aR.samplerInterpolation,
            input: UR,
            output: WR
          }, JR.samplers.push(AR), CR = {
            sampler: JR.samplers.length - 1,
            target: {
              node: RR,
              path: ZR
            }
          }, JR.channels.push(CR)
        }
      }
      static _CreateBakedAnimation(RR, JR, GR, uR, ZR, qR, iR, fR, VR, KR, wR) {
        let rR;
        const eR = yR.Quaternion.Identity();
        let aR, LR, nR, UR, WR, AR = null,
          CR = null;
        KR.min = tR.Tools.FloatRound(uR / qR);
        const XR = JR.getKeys();
        for (let yR = 0, MR = XR.length; yR < MR; ++yR) {
          if (LR = XR[yR], yR + 1 < MR)
            if (nR = XR[yR + 1], LR.value.equals && LR.value.equals(nR.value) || LR.value === nR.value) {
              if (0 !== yR) continue;
              WR = LR.frame
            } else WR = nR.frame;
          else {
            if (UR = XR[yR - 1], LR.value.equals && LR.value.equals(UR.value) || LR.value === UR.value) continue;
            WR = ZR
          }
          if (WR)
            for (let yR = LR.frame; yR <= WR; yR += iR) {
              if (aR = tR.Tools.FloatRound(yR / qR), aR === AR) continue;
              AR = aR, CR = aR;
              const uR = {
                key: 0,
                repeatCount: 0,
                nG: JR.nG
              };
              rR = JR._interpolate(yR, uR), Ky._SetInterpolatedValue(RR, rR, aR, JR, GR, eR, fR, VR, wR)
            }
        }
        CR && (KR.max = CR)
      }
      static _ConvertFactorToVector3OrQuaternion(RR, JR, GR, uR, ZR) {
        const qR = Ky._GetBasePositionRotationOrScale(JR, uR, ZR),
          iR = GR.targetProperty.split("."),
          fR = iR ? iR[1] : "",
          VR = ZR ? yR.Quaternion.FromArray(qR).normalize() : yR.Fe.FromArray(qR);
        switch (fR) {
          case "x":
          case "y":
          case "z":
            VR[fR] = RR;
            break;
          case "w":
            VR.w = RR;
            break;
          default:
            tR.Tools.Error(`glTFAnimation: Unsupported component name "${fR}"!`)
        }
        return VR
      }
      static _SetInterpolatedValue(RR, JR, GR, tR, uR, ZR, qR, iR, fR) {
        let VR;
        qR.push(GR), "weights" !== uR ? (tR.dataType === Zy.d.ANIMATIONTYPE_FLOAT && (JR = this._ConvertFactorToVector3OrQuaternion(JR, RR, tR, uR, fR)), "rotation" === uR ? (fR ? ZR = JR : (VR = JR, yR.Quaternion.RotationYawPitchRollToRef(VR.y, VR.x, VR.z, ZR)), iR.push(ZR.QtR())) : (VR = JR, iR.push(VR.QtR()))) : iR.push([JR])
      }
      static _CreateLinearOrStepAnimation(RR, JR, GR, yR, tR, uR) {
        for (const ZR of JR.getKeys()) yR.push(ZR.frame / JR.framePerSecond), Ky._AddKeyframeValue(ZR, JR, tR, GR, RR, uR)
      }
      static _CreateCubicSplineAnimation(RR, JR, GR, yR, tR, uR) {
        JR.getKeys().forEach((function(ZR) {
          yR.push(ZR.frame / JR.framePerSecond), Ky._AddSplineTangent(iy.INTANGENT, tR, GR, "CUBICSPLINE", ZR, uR), Ky._AddKeyframeValue(ZR, JR, tR, GR, RR, uR), Ky._AddSplineTangent(iy.OUTTANGENT, tR, GR, "CUBICSPLINE", ZR, uR)
        }))
      }
      static _GetBasePositionRotationOrScale(RR, JR, GR) {
        let tR;
        if ("rotation" === JR)
          if (GR) {
            tR = (RR.rotationQuaternion ?? yR.Quaternion.Identity()).QtR()
          } else {
            tR = (RR.rotation ?? yR.Fe.Zero()).QtR()
          }
        else if ("translation" === JR) {
          tR = (RR.position ?? yR.Fe.Zero()).QtR()
        } else {
          tR = (RR.MK ?? yR.Fe.One()).QtR()
        }
        return tR
      }
      static _AddKeyframeValue(RR, JR, GR, uR, ZR, qR) {
        let iR;
        const fR = JR.dataType;
        if (fR === Zy.d.ANIMATIONTYPE_VECTOR3) {
          let JR = RR.value.QtR();
          if ("rotation" === uR) {
            const RR = yR.Fe.FromArray(JR);
            JR = yR.Quaternion.RotationYawPitchRoll(RR.y, RR.x, RR.z).QtR()
          }
          GR.push(JR)
        } else if (fR === Zy.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === uR) GR.push([RR.value]);
          else if (iR = this._ConvertFactorToVector3OrQuaternion(RR.value, ZR, JR, uR, qR), iR) {
            if ("rotation" === uR) {
              const RR = qR ? iR : yR.Quaternion.RotationYawPitchRoll(iR.y, iR.x, iR.z).normalize();
              GR.push(RR.QtR())
            }
            GR.push(iR.QtR())
          }
        } else fR === Zy.d.ANIMATIONTYPE_QUATERNION ? GR.push(RR.value.normalize().QtR()) : tR.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(RR, JR, GR) {
        let yR, tR, uR = !1;
        if ("rotation" === JR && !GR) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let ZR = 0, qR = RR.length; ZR < qR; ++ZR)
          if (tR = RR[ZR], tR.inTangent || tR.outTangent)
            if (yR) {
              if ("CUBICSPLINE" !== yR) {
                yR = "LINEAR", uR = !0;
                break
              }
            } else yR = "CUBICSPLINE";
        else if (yR) {
          if ("CUBICSPLINE" === yR || tR.interpolation && 1 === tR.interpolation && "STEP" !== yR) {
            yR = "LINEAR", uR = !0;
            break
          }
        } else yR = tR.interpolation && 1 === tR.interpolation ? "STEP" : "LINEAR";
        return yR || (yR = "LINEAR"), {
          interpolationType: yR,
          shouldBakeAnimation: uR
        }
      }
      static _AddSplineTangent(RR, JR, GR, tR, uR, ZR) {
        let qR;
        const iR = RR === iy.INTANGENT ? uR.inTangent : uR.outTangent;
        if ("CUBICSPLINE" === tR) {
          if ("rotation" === GR)
            if (iR)
              if (ZR) qR = iR.QtR();
              else {
                const RR = iR;
                qR = yR.Quaternion.RotationYawPitchRoll(RR.y, RR.x, RR.z).QtR()
              }
          else qR = [0, 0, 0, 0];
          else qR = "weights" === GR ? iR ? [iR] : [0] : iR ? iR.QtR() : [0, 0, 0];
          JR.push(qR)
        }
      }
      static _CalculateMinMaxKeyFrames(RR) {
        let JR = 1 / 0,
          GR = -1 / 0;
        return RR.forEach((function(RR) {
          JR = Math.min(JR, RR.frame), GR = Math.max(GR, RR.frame)
        })), {
          min: JR,
          max: GR
        }
      }
    }

    function wy(RR, JR, GR, uR, ZR, qR) {
      const iR = {
          attributes: {},
          influence: RR.influence,
          name: RR.name
        },
        fR = JR.geometry;
      if (!fR) return tR.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), iR;
      const KR = qR ? -1 : 1,
        wR = yR.Fe.Zero();
      let rR, eR;
      if (RR.hasPositions) {
        const uR = RR.getPositions(),
          qR = fR.getVerticesData(VR.c.PositionKind);
        if (qR) {
          const RR = new Float32Array(qR.length),
            JR = [1 / 0, 1 / 0, 1 / 0],
            tR = [-1 / 0, -1 / 0, -1 / 0];
          eR = qR.length / 3, rR = 0;
          for (let GR = rR; GR < eR; ++GR) {
            const ZR = yR.Fe.FromArray(qR, 3 * GR);
            yR.Fe.FromArray(uR, 3 * GR).subtractToRef(ZR, wR), wR.x *= KR, JR[0] = Math.min(JR[0], wR.x), tR[0] = Math.max(tR[0], wR.x), JR[1] = Math.min(JR[1], wR.y), tR[1] = Math.max(tR[1], wR.y), JR[2] = Math.min(JR[2], wR.z), tR[2] = Math.max(tR[2], wR.z), RR[3 * GR] = wR.x, RR[3 * GR + 1] = wR.y, RR[3 * GR + 2] = wR.z
          }
          const fR = GR.createBufferView(RR, 12),
            VR = GR.createAccessor(fR, "VEC3", 5126, uR.length / 3, 0, {
              min: JR,
              max: tR
            });
          ZR.push(VR), iR.attributes.POSITION = ZR.length - 1
        } else tR.Tools.Warn(`Morph target positions for mesh ${JR.name} were not exported. Mesh does not have position vertex data`)
      }
      if (RR.hasNormals) {
        const uR = RR.getNormals(),
          qR = fR.getVerticesData(VR.c.NormalKind);
        if (qR) {
          const RR = new Float32Array(qR.length);
          eR = qR.length / 3, rR = 0;
          for (let GR = rR; GR < eR; ++GR) {
            const JR = yR.Fe.FromArray(qR, 3 * GR).normalize();
            yR.Fe.FromArray(uR, 3 * GR).normalize().subtractToRef(JR, wR), RR[3 * GR] = wR.x * KR, RR[3 * GR + 1] = wR.y, RR[3 * GR + 2] = wR.z
          }
          const JR = GR.createBufferView(RR, 12),
            tR = GR.createAccessor(JR, "VEC3", 5126, uR.length / 3, 0);
          ZR.push(tR), iR.attributes.NORMAL = ZR.length - 1
        } else tR.Tools.Warn(`Morph target normals for mesh ${JR.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (RR.hasTangents) {
        const uR = RR.getTangents(),
          qR = fR.getVerticesData(VR.c.TangentKind);
        if (qR) {
          eR = qR.length / 4;
          const RR = new Float32Array(3 * eR);
          rR = 0;
          for (let GR = rR; GR < eR; ++GR) {
            const JR = yR.Fe.FromArray(qR, 4 * GR);
            jG(JR);
            const tR = yR.Fe.FromArray(uR, 3 * GR);
            jG(tR), tR.subtractToRef(JR, wR), RR[3 * GR] = wR.x * KR, RR[3 * GR + 1] = wR.y, RR[3 * GR + 2] = wR.z
          }
          const JR = GR.createBufferView(RR, 12),
            tR = GR.createAccessor(JR, "VEC3", 5126, eR, 0);
          ZR.push(tR), iR.attributes.TANGENT = ZR.length - 1
        } else tR.Tools.Warn(`Morph target tangents for mesh ${JR.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (RR.hasColors) {
        const uR = RR.getColors(),
          qR = fR.getVerticesData(VR.c.ColorKind),
          KR = fR.getVertexBuffer(VR.c.ColorKind);
        if (qR && KR) {
          const RR = KR.getSize();
          eR = qR.length / RR;
          const JR = new Float32Array(eR * RR);
          rR = 0;
          for (let GR = rR; GR < eR; ++GR)
            if (3 === RR) {
              const tR = yR.Fe.FromArray(qR, GR * RR);
              yR.Fe.FromArray(uR, GR * RR).subtractToRef(tR, wR), JR[3 * GR] = wR.x, JR[3 * GR + 1] = wR.y, JR[3 * GR + 2] = wR.z
            } else if (4 === RR) {
            const tR = new yR.Vector4,
              ZR = yR.Vector4.FromArray(qR, GR * RR);
            yR.Vector4.FromArray(uR, GR * RR).subtractToRef(ZR, tR), JR[4 * GR] = tR.x, JR[4 * GR + 1] = tR.y, JR[4 * GR + 2] = tR.z, JR[4 * GR + 3] = tR.w
          } else tR.Tools.Warn(`Unsupported number of components for color attribute: ${RR}`);
          const fR = GR.createBufferView(JR, 4 * RR),
            VR = GR.createAccessor(fR, 3 === RR ? "VEC3" : "VEC4", 5126, eR, 0);
          ZR.push(VR), iR.attributes.COLOR_0 = ZR.length - 1
        } else tR.Tools.Warn(`Morph target colors for mesh ${JR.name} were not exported. Mesh does not have colors vertex data`)
      }
      return iR
    }
    var ry = GR(53568);
    class ey {}
    ey.DEFAULT_COLOR = ER.d.White(), ey.DEFAULT_WIDTH_ATTENUATED = 1, ey.DEFAULT_WIDTH = .1;
    var ay = GR(42629);
    class Ly {
      constructor(RR) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = RR
      }
      moveTo(RR, JR) {
        this._currentPath = new ay.j(RR, JR), this._tempPaths.push(this._currentPath)
      }
      lineTo(RR, JR) {
        this._currentPath.addLineTo(RR, JR)
      }
      quadraticCurveTo(RR, JR, GR, yR) {
        this._currentPath.addQuadraticCurveTo(RR, JR, GR, yR, this._resolution)
      }
      bezierCurveTo(RR, JR, GR, yR, tR, uR) {
        this._currentPath.addBezierCurveTo(RR, JR, GR, yR, tR, uR, this._resolution)
      }
      extractHoles() {
        for (const RR of this._tempPaths) RR.area() > 0 ? this._holes.push(RR) : this._paths.push(RR);
        if (!this._paths.length && this._holes.length) {
          const RR = this._holes;
          this._holes = this._paths, this._paths = RR
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

    function ny(RR, JR, GR, yR, tR, uR) {
      const ZR = uR.glyphs[RR] || uR.glyphs["?"];
      if (!ZR) return null;
      const qR = new Ly(tR);
      if (ZR.o) {
        const RR = ZR.o.split(" ");
        for (let tR = 0, uR = RR.length; tR < uR;) {
          switch (RR[tR++]) {
            case "m": {
              const uR = parseInt(RR[tR++]) * JR + GR,
                ZR = parseInt(RR[tR++]) * JR + yR;
              qR.moveTo(uR, ZR);
              break
            }
            case "l": {
              const uR = parseInt(RR[tR++]) * JR + GR,
                ZR = parseInt(RR[tR++]) * JR + yR;
              qR.lineTo(uR, ZR);
              break
            }
            case "q": {
              const uR = parseInt(RR[tR++]) * JR + GR,
                ZR = parseInt(RR[tR++]) * JR + yR,
                iR = parseInt(RR[tR++]) * JR + GR,
                fR = parseInt(RR[tR++]) * JR + yR;
              qR.quadraticCurveTo(iR, fR, uR, ZR);
              break
            }
            case "b": {
              const uR = parseInt(RR[tR++]) * JR + GR,
                ZR = parseInt(RR[tR++]) * JR + yR,
                iR = parseInt(RR[tR++]) * JR + GR,
                fR = parseInt(RR[tR++]) * JR + yR,
                VR = parseInt(RR[tR++]) * JR + GR,
                KR = parseInt(RR[tR++]) * JR + yR;
              qR.bezierCurveTo(iR, fR, VR, KR, uR, ZR);
              break
            }
          }
        }
      }
      return qR.extractHoles(), {
        offsetX: ZR.ha * JR,
        shapePath: qR
      }
    }

    function Uy(RR, JR, GR, yR) {
      const tR = Array.from(RR),
        uR = JR / yR.resolution,
        ZR = (yR.boundingBox.yMax - yR.boundingBox.yMin + yR.underlineThickness) * uR,
        qR = [];
      let iR = 0,
        fR = 0;
      for (let VR = 0; VR < tR.length; VR++) {
        const RR = tR[VR];
        if ("\n" === RR) iR = 0, fR -= ZR;
        else {
          const JR = ny(RR, uR, iR, fR, GR, yR);
          JR && (iR += JR.offsetX, qR.push(JR.shapePath))
        }
      }
      return qR
    }
    class Wy {
      static ConvertPoints(RR, JR) {
        if (RR.length && Array.isArray(RR) && "number" === typeof RR[0]) return [RR];
        if (RR.length && Array.isArray(RR[0]) && "number" === typeof RR[0][0]) return RR;
        if (RR.length && !Array.isArray(RR[0]) && RR[0] instanceof PR.r) {
          const JR = [];
          for (let GR = 0; GR < RR.length; GR++) {
            const yR = RR[GR];
            JR.push(yR.x, yR.y, yR.z)
          }
          return [JR]
        }
        if (RR.length > 0 && Array.isArray(RR[0]) && RR[0].length > 0 && RR[0][0] instanceof PR.r) {
          const JR = [],
            GR = RR;
          for (const RR of GR) JR.push(RR.flatMap((RR => [RR.x, RR.y, RR.z])));
          return JR
        }
        if (RR instanceof Float32Array) {
          if (JR?.floatArrayStride) {
            const GR = [],
              yR = 3 * JR.floatArrayStride;
            for (let JR = 0; JR < RR.length; JR += yR) {
              const tR = new Array(yR);
              for (let GR = 0; GR < yR; GR++) tR[GR] = RR[JR + GR];
              GR.push(tR)
            }
            return GR
          }
          return [Array.from(RR)]
        }
        if (RR.length && RR[0] instanceof Float32Array) {
          const JR = [];
          for (const GR of RR) JR.push(Array.from(GR));
          return JR
        }
        return []
      }
      static OmitZeroLengthPredicate(RR, JR, GR) {
        const yR = [];
        return JR.subtract(RR).lengthSquared() > 0 && yR.push([RR, JR]), GR.subtract(JR).lengthSquared() > 0 && yR.push([JR, GR]), RR.subtract(GR).lengthSquared() > 0 && yR.push([GR, RR]), 0 === yR.length ? null : yR
      }
      static OmitDuplicatesPredicate(RR, JR, GR, yR) {
        const tR = [];
        return Wy._SearchInPoints(RR, JR, yR) || tR.push([RR, JR]), Wy._SearchInPoints(JR, GR, yR) || tR.push([JR, GR]), Wy._SearchInPoints(GR, RR, yR) || tR.push([GR, RR]), 0 === tR.length ? null : tR
      }
      static _SearchInPoints(RR, JR, GR) {
        for (const yR of GR)
          for (let GR = 0; GR < yR.length; GR++)
            if (yR[GR]?.equals(RR) && (yR[GR + 1]?.equals(JR) || yR[GR - 1]?.equals(JR))) return !0;
        return !1
      }
      static MeshesToLines(RR, JR) {
        const GR = [];
        for (let yR = 0; yR < RR.length; yR++) {
          const tR = RR[yR],
            uR = tR.getVerticesData(IR.l.PositionKind),
            ZR = tR.NuR();
          if (uR && ZR)
            for (let RR = 0, qR = 0; RR < ZR.length; RR++) {
              const iR = 3 * ZR[qR++],
                fR = 3 * ZR[qR++],
                VR = 3 * ZR[qR++],
                KR = new PR.r(uR[iR], uR[iR + 1], uR[iR + 2]),
                wR = new PR.r(uR[fR], uR[fR + 1], uR[fR + 2]),
                rR = new PR.r(uR[VR], uR[VR + 1], uR[VR + 2]);
              if (JR) {
                const qR = JR(KR, wR, rR, GR, RR, iR, tR, yR, uR, ZR);
                if (qR)
                  for (const RR of qR) GR.push(RR)
              } else GR.push([KR, wR], [wR, rR], [rR, KR])
            }
        }
        return GR
      }
      static ToVector3Array(RR) {
        if (Array.isArray(RR[0])) {
          const JR = [],
            GR = RR;
          for (const RR of GR) {
            const GR = [];
            for (let JR = 0; JR < RR.length; JR += 3) GR.push(new PR.r(RR[JR], RR[JR + 1], RR[JR + 2]));
            JR.push(GR)
          }
          return JR
        }
        const JR = RR,
          GR = [];
        for (let yR = 0; yR < JR.length; yR += 3) GR.push(new PR.r(JR[yR], JR[yR + 1], JR[yR + 2]));
        return GR
      }
      static ToNumberArray(RR) {
        return RR.flatMap((RR => [RR.x, RR.y, RR.z]))
      }
      static GetPointsCountInfo(RR) {
        const JR = new Array(RR.length);
        let GR = 0;
        for (let yR = RR.length; yR--;) JR[yR] = RR[yR].length / 3, GR += JR[yR];
        return {
          total: GR,
          counts: JR
        }
      }
      static GetLineLength(RR) {
        if (0 === RR.length) return 0;
        let JR;
        JR = "number" === typeof RR[0] ? Wy.ToVector3Array(RR) : RR;
        const GR = PR.l.Fe[0];
        let yR = 0;
        for (let tR = 0; tR < JR.length - 1; tR++) {
          const RR = JR[tR];
          yR += JR[tR + 1].subtractToRef(RR, GR).length()
        }
        return yR
      }
      static GetLineLengthArray(RR, JR) {
        const GR = JR ? new Float32Array(JR, 0, RR.length / 3) : new Float32Array(RR.length / 3);
        let yR = 0;
        for (let tR = 0, uR = RR.length / 3 - 1; tR < uR; tR++) {
          let JR = RR[3 * tR + 0],
            uR = RR[3 * tR + 1],
            ZR = RR[3 * tR + 2];
          JR -= RR[3 * tR + 3], uR -= RR[3 * tR + 4], ZR -= RR[3 * tR + 5];
          yR += Math.sqrt(JR * JR + uR * uR + ZR * ZR), GR[tR + 1] = yR
        }
        return GR
      }
      static SegmentizeSegmentByCount(RR, JR, GR) {
        const yR = [],
          tR = JR.subtract(RR),
          uR = PR.l.Fe[0];
        uR.NRR(GR);
        const ZR = PR.l.Fe[1];
        tR.divideToRef(uR, ZR);
        let qR = RR.clone();
        yR.push(qR);
        for (let iR = 0; iR < GR; iR++) qR = qR.clone(), yR.push(qR.addInPlace(ZR));
        return yR
      }
      static SegmentizeLineBySegmentLength(RR, JR) {
        const GR = RR[0] instanceof PR.r ? Wy.GetLineSegments(RR) : "number" === typeof RR[0] ? Wy.GetLineSegments(Wy.ToVector3Array(RR)) : RR,
          yR = [];
        for (const tR of GR)
          if (tR.length > JR) {
            const RR = Wy.SegmentizeSegmentByCount(tR.point1, tR.point2, Math.ceil(tR.length / JR));
            for (const JR of RR) yR.push(JR)
          } else yR.push(tR.point1), yR.push(tR.point2);
        return yR
      }
      static SegmentizeLineBySegmentCount(RR, JR) {
        const GR = "number" === typeof RR[0] ? Wy.ToVector3Array(RR) : RR,
          yR = Wy.GetLineLength(GR) / JR;
        return Wy.SegmentizeLineBySegmentLength(GR, yR)
      }
      static GetLineSegments(RR) {
        const JR = [];
        for (let GR = 0; GR < RR.length - 1; GR++) {
          const yR = RR[GR],
            tR = RR[GR + 1],
            uR = tR.subtract(yR).length();
          JR.push({
            point1: yR,
            point2: tR,
            length: uR
          })
        }
        return JR
      }
      static GetMinMaxSegmentLength(RR) {
        const JR = Wy.GetLineSegments(RR).sort((RR => RR.length));
        return {
          min: JR[0].length,
          max: JR[JR.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tR = JR * GR;
        let uR = 0,
          ZR = 0;
        const qR = RR.length;
        for (let fR = 0; fR < qR; fR++) {
          if (tR <= uR + RR[fR].length) {
            ZR = fR;
            break
          }
          uR += RR[fR].length
        }
        const iR = (tR - uR) / RR[ZR].length;
        return RR[ZR].point2.subtractToRef(RR[ZR].point1, PR.l.Fe[0]), PR.l.Fe[0].scaleToRef(iR, PR.l.Fe[1]), yR || PR.l.Fe[1].addInPlace(RR[ZR].point1), PR.l.Fe[1].clone()
      }
      static GetCircleLinePoints(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / JR;
        const uR = [];
        for (let ZR = 0; ZR <= JR; ZR++) uR.push(new PR.r(Math.cos(ZR * tR) * RR, Math.sin(ZR * tR) * yR, GR));
        return uR
      }
      static GetBezierLinePoints(RR, JR, GR, yR) {
        return ay.f.CreateQuadraticBezier(RR, JR, GR, yR).getPoints().flatMap((RR => [RR.x, RR.y, RR.z]))
      }
      static GetArrowCap(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [RR.clone(), RR.add(JR.multiplyByFloats(GR, GR, GR))],
          widths: [yR, tR, uR, ZR]
        }
      }
      static GetPointsFromText(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const ZR = [],
          qR = Uy(RR, JR, GR, yR);
        for (const iR of qR) {
          for (const RR of iR.paths) {
            const JR = [],
              GR = RR.getPoints();
            for (const RR of GR) JR.push(RR.x, RR.y, tR);
            ZR.push(JR)
          }
          if (uR)
            for (const RR of iR.holes) {
              const JR = [],
                GR = RR.getPoints();
              for (const RR of GR) JR.push(RR.x, RR.y, tR);
              ZR.push(JR)
            }
        }
        return ZR
      }
      static Color3toRGBAUint8(RR) {
        const JR = new Uint8Array(4 * RR.length);
        for (let GR = 0, yR = 0; GR < RR.length; GR++) JR[yR++] = 255 * RR[GR].r, JR[yR++] = 255 * RR[GR].g, JR[yR++] = 255 * RR[GR].b, JR[yR++] = 255;
        return JR
      }
      static CreateColorsTexture(RR, JR, GR, yR) {
        const tR = yR.ke().getCaps().maxTextureSize ?? 1,
          uR = JR.length > tR ? tR : JR.length,
          ZR = Math.ceil(JR.length / tR);
        ZR > 1 && (JR = [...JR, ...Array(uR * ZR - JR.length).fill(JR[0])]);
        const qR = Wy.Color3toRGBAUint8(JR),
          iR = new XR.b(qR, uR, ZR, VG.d.TEXTUREFORMAT_RGBA, yR, !1, !0, GR);
        return iR.name = RR, iR
      }
      static PrepareEmptyColorsTexture(RR) {
        if (!ey.EmptyColorsTexture) {
          const JR = new Uint8Array(4);
          ey.EmptyColorsTexture = new XR.b(JR, 1, 1, VG.d.TEXTUREFORMAT_RGBA, RR, !1, !1, XR.b.NEAREST_NEAREST), ey.EmptyColorsTexture.name = "grlEmptyColorsTexture", ey.EmptyColorsTexture.YH.addOnce((() => {
            ey.EmptyColorsTexture = null
          }))
        }
        return ey.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        ey.EmptyColorsTexture?.dispose(), ey.EmptyColorsTexture = null
      }
      static BooleanToNumber(RR) {
        return RR ? 1 : 0
      }
    }
    class Ay extends mR.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Cy extends zR.b {
      isCompatible(RR) {
        return !0
      }
      constructor(RR, JR, GR) {
        GR = GR || {
          color: ey.DEFAULT_COLOR
        };
        const yR = new Ay;
        yR.GREASED_LINE_HAS_COLOR = !!GR.color && !GR.useColors, yR.GREASED_LINE_SIZE_ATTENUATION = GR.sizeAttenuation ?? !1, yR.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === GR.colorDistributionType, yR.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (JR ?? RR.jH()).useRightHandedSystem, yR.GREASED_LINE_CAMERA_FACING = GR.cameraFacing ?? !0, super(RR, Cy.GREASED_LINE_MATERIAL_NAME, 200, yR, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = GR?.forceGLSL || Cy.ForceGLSL, this._scene = JR ?? RR.jH(), this._engine = this._scene.ke(), this._cameraFacing = GR.cameraFacing ?? !0, this.visibility = GR.visibility ?? 1, this.useDash = GR.useDash ?? !1, this.dashRatio = GR.dashRatio ?? .5, this.dashOffset = GR.dashOffset ?? 0, this.width = GR.width ? GR.width : GR.sizeAttenuation ? ey.DEFAULT_WIDTH_ATTENUATED : ey.DEFAULT_WIDTH, this._sizeAttenuation = GR.sizeAttenuation ?? !1, this.colorMode = GR.colorMode ?? 0, this._color = GR.color ?? null, this.useColors = GR.useColors ?? !1, this._colorsDistributionType = GR.colorDistributionType ?? 0, this.colorsSampling = GR.colorsSampling ?? XR.b.NEAREST_NEAREST, this._colors = GR.colors ?? null, this.dashCount = GR.dashCount ?? 1, this.resolution = GR.resolution ?? new PR.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), GR.colorsTexture ? this.colorsTexture = GR.colorsTexture : this._colors ? this.colorsTexture = Wy.CreateColorsTexture(`${RR.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? ey.DEFAULT_COLOR, Wy.PrepareEmptyColorsTexture(this._scene)), this._engine.YH.add((() => {
          Wy.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(RR) {
        RR.push("grl_offsets"), RR.push("grl_widths"), RR.push("grl_colorPointers"), RR.push("grl_counters"), this._cameraFacing ? (RR.push("grl_previousAndSide"), RR.push("grl_nextAndCounters")) : RR.push("grl_slopes")
      }
      getSamplers(RR) {
        RR.push("grl_colors")
      }
      getActiveTextures(RR) {
        this.colorsTexture && RR.push(this.colorsTexture)
      }
      getUniforms() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const JR = [{
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
        return this._cameraFacing && JR.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === RR && JR.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: JR,
          vertex: this._cameraFacing && this._isGLSL(RR) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(RR) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(RR) {
        if (this._cameraFacing) {
          RR.FRR("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || RR.FRR("viewProjection", this._scene.getTransformMatrix());
          const JR = PR.l.Vector4[0];
          JR.x = this._aspect, JR.y = this._resolution.x, JR.z = this._resolution.y, JR.w = this.width, RR.updateVector4("grl_aspect_resolution_lineWidth", JR)
        }
        const JR = PR.l.Vector4[0];
        JR.x = Wy.BooleanToNumber(this.useDash), JR.y = this._dashArray, JR.z = this.dashOffset, JR.w = this.dashRatio, RR.updateVector4("grl_dashOptions", JR);
        const GR = PR.l.Vector4[1];
        GR.x = this.colorMode, GR.y = this.visibility, GR.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, GR.w = Wy.BooleanToNumber(this.useColors), RR.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", GR), this._color && RR.updateColor3("grl_singleColor", this._color);
        const yR = this.colorsTexture ?? ey.EmptyColorsTexture;
        RR.setTexture("grl_colors", yR), RR.updateFloat2("grl_textureSize", yR?.getSize().width ?? 1, yR?.getSize().height ?? 1)
      }
      prepareDefines(RR, JR, GR) {
        RR.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, RR.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, RR.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, RR.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = JR.useRightHandedSystem, RR.GREASED_LINE_CAMERA_FACING = this._cameraFacing, RR.GREASED_LINE_USE_OFFSETS = !!GR.offsets
      }
      getClassName() {
        return Cy.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(JR) ? function(RR, JR) {
          if ("vertex" === RR) {
            const RR = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return JR && (RR["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), RR
          }
          return "fragment" === RR ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(RR, this._cameraFacing) : function(RR, JR) {
          if ("vertex" === RR) {
            const RR = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return JR && (RR["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), RR
          }
          return "fragment" === RR ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(RR, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(RR) {
        this.setColors(RR)
      }
      setColors(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this._colors?.length ?? 0;
        if (this._colors = RR, null !== RR && 0 !== RR.length) {
          if (!JR || GR)
            if (this.colorsTexture && yR === RR.length && !GR) {
              const JR = Wy.Color3toRGBAUint8(RR);
              this.colorsTexture.update(JR)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Wy.CreateColorsTexture(`${this._material.name}-colors-texture`, RR, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(RR) {
        this._dashCount = RR, this._dashArray = 1 / RR
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(RR) {
        this._sizeAttenuation = RR, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(RR) {
        this.setColor(RR)
      }
      setColor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== RR || null !== this._color && null === RR ? (this._color = RR, JR || this.markAllDefinesAsDirty()) : this._color = RR
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(RR) {
        this._colorsDistributionType = RR, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(RR) {
        this._aspect = RR.x / RR.y, this._resolution = RR
      }
      serialize() {
        const RR = super.serialize(),
          JR = {
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
        return this._colors && (JR.colors = this._colors), this._color && (JR.color = this._color), RR.greasedLineMaterialOptions = JR, RR
      }
      parse(RR, JR, GR) {
        super.parse(RR, JR, GR);
        const yR = RR.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), yR.color && this.setColor(yR.color, !0), yR.colorDistributionType && (this.colorsDistributionType = yR.colorDistributionType), yR.colors && (this.colors = yR.colors), yR.colorsSampling && (this.colorsSampling = yR.colorsSampling), yR.colorMode && (this.colorMode = yR.colorMode), yR.useColors && (this.useColors = yR.useColors), yR.visibility && (this.visibility = yR.visibility), yR.useDash && (this.useDash = yR.useDash), yR.dashCount && (this.dashCount = yR.dashCount), yR.dashRatio && (this.dashRatio = yR.dashRatio), yR.dashOffset && (this.dashOffset = yR.dashOffset), yR.width && (this.width = yR.width), yR.sizeAttenuation && (this.sizeAttenuation = yR.sizeAttenuation), yR.resolution && (this.resolution = yR.resolution), this.colors ? this.colorsTexture = Wy.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, JR) : Wy.PrepareEmptyColorsTexture(JR), this.markAllDefinesAsDirty()
      }
      copyTo(RR) {
        const JR = RR;
        JR.colorsTexture?.dispose(), this._colors && (JR.colorsTexture = Wy.CreateColorsTexture(`${JR._material.name}-colors-texture`, this._colors, JR.colorsSampling, this._scene)), JR.setColor(this.color, !0), JR.colorsDistributionType = this.colorsDistributionType, JR.colorsSampling = this.colorsSampling, JR.colorMode = this.colorMode, JR.useColors = this.useColors, JR.visibility = this.visibility, JR.useDash = this.useDash, JR.dashCount = this.dashCount, JR.dashRatio = this.dashRatio, JR.dashOffset = this.dashOffset, JR.width = this.width, JR.sizeAttenuation = this.sizeAttenuation, JR.resolution = this.resolution, JR.markAllDefinesAsDirty()
      }
      _isGLSL(RR) {
        return 0 === RR || this._forceGLSL
      }
    }
    Cy.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Cy.ForceGLSL = !1;
    var Xy = GR(41941),
      My = GR(41951),
      By = GR(39912),
      ly = GR(42005),
      py = GR(41370);
    class gy extends ly.q {
      constructor(RR, JR, yR) {
        const tR = JR.ke(),
          uR = tR.isWebGPU && !(yR.forceGLSL || gy.ForceGLSL),
          ZR = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        JR.useRightHandedSystem && ZR.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const qR = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        yR.cameraFacing ? (ZR.push("GREASED_LINE_CAMERA_FACING"), qR.push("grl_previousAndSide", "grl_nextAndCounters")) : (qR.push("grl_slopes"), qR.push("grl_counters"));
        const iR = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (uR || iR.push("world", "viewProjection", "view", "projection"), super(RR, JR, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: uR ? ["Scene", "Mesh"] : void 0,
            attributes: qR,
            uniforms: iR,
            samplers: uR ? [] : ["grlColors"],
            defines: ZR,
            extraInitializationsAsync: async () => {
              uR ? await Promise.all([GR.e(652).then((() => GR(64761))), GR.e(708).then((() => GR(64769)))]) : await Promise.all([GR.e(645).then((() => GR(64776))), GR.e(709).then((() => GR(64784)))])
            },
            shaderLanguage: uR ? 1 : 0
          }), this._color = ER.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, yR = yR || {
            color: ey.DEFAULT_COLOR
          }, this.visibility = yR.visibility ?? 1, this.useDash = yR.useDash ?? !1, this.dashRatio = yR.dashRatio ?? .5, this.dashOffset = yR.dashOffset ?? 0, this.dashCount = yR.dashCount ?? 1, this.width = yR.width ? yR.width : yR.sizeAttenuation && yR.cameraFacing ? ey.DEFAULT_WIDTH_ATTENUATED : ey.DEFAULT_WIDTH, this.sizeAttenuation = yR.sizeAttenuation ?? !1, this.color = yR.color ?? ER.d.White(), this.useColors = yR.useColors ?? !1, this.colorsDistributionType = yR.colorDistributionType ?? 0, this.colorsSampling = yR.colorsSampling ?? XR.b.NEAREST_NEAREST, this.colorMode = yR.colorMode ?? 0, this._colors = yR.colors ?? null, this._cameraFacing = yR.cameraFacing ?? !0, this.resolution = yR.resolution ?? new PR.n(tR.getRenderWidth(), tR.getRenderHeight()), yR.colorsTexture ? this.colorsTexture = yR.colorsTexture : this._colors ? this.colorsTexture = Wy.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, JR) : (this._color = this._color ?? ey.DEFAULT_COLOR, this.colorsTexture = Wy.PrepareEmptyColorsTexture(JR)), uR) {
          const RR = new py.e;
          RR.setParameters(), RR.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", RR)
        }
        tR.YH.add((() => {
          Wy.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== ey.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new PR.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(RR) {
        this.setColors(RR)
      }
      setColors(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this._colors?.length ?? 0;
        if (this._colors = RR, null !== RR && 0 !== RR.length) {
          if (!JR || GR)
            if (this._colorsTexture && yR === RR.length && !GR) {
              const JR = Wy.Color3toRGBAUint8(RR);
              this._colorsTexture.update(JR)
            } else this._colorsTexture && this._colorsTexture !== ey.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Wy.CreateColorsTexture(`${this.name}-colors-texture`, RR, this.colorsSampling, this.jH())
        } else {
          this._colorsTexture && this._colorsTexture !== ey.EmptyColorsTexture && this._colorsTexture.dispose();
          const RR = this.jH();
          RR && (this.colorsTexture = Wy.PrepareEmptyColorsTexture(RR))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(RR) {
        this._colorsTexture = RR, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(RR) {
        this._width = RR, this.setFloat("grlWidth", RR)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(RR) {
        this._useColors = RR, this.setFloat("grlUseColors", Wy.BooleanToNumber(RR))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(RR) {
        this._colorsSampling = RR
      }
      get visibility() {
        return this._visibility
      }
      set visibility(RR) {
        this._visibility = RR, this.setFloat("grlVisibility", RR)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(RR) {
        this._useDash = RR, this.setFloat("grlUseDash", Wy.BooleanToNumber(RR))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(RR) {
        this._dashOffset = RR, this.setFloat("grlDashOffset", RR)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(RR) {
        this._dashRatio = RR, this.setFloat("grlDashRatio", RR)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(RR) {
        this._dashCount = RR, this._dashArray = 1 / RR, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(RR) {
        this._sizeAttenuation = RR, this.setFloat("grlSizeAttenuation", Wy.BooleanToNumber(RR))
      }
      get color() {
        return this._color
      }
      set color(RR) {
        this.setColor(RR)
      }
      setColor(RR) {
        RR = RR ?? ey.DEFAULT_COLOR, this._color = RR, this.setColor3("grlColor", RR)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(RR) {
        this._colorsDistributionType = RR, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(RR) {
        this._colorMode = RR, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(RR) {
        this._resolution = RR, this.setVector2("grlResolution", RR), this.setFloat("grlAspect", RR.x / RR.y)
      }
      serialize() {
        const RR = super.serialize(),
          JR = {
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
        return this._colors && (JR.colors = this._colors), RR.greasedLineMaterialOptions = JR, RR
      }
      parse(RR, JR, GR) {
        const yR = RR.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), yR.color && (this.color = yR.color), yR.colorDistributionType && (this.colorsDistributionType = yR.colorDistributionType), yR.colorsSampling && (this.colorsSampling = yR.colorsSampling), yR.colorMode && (this.colorMode = yR.colorMode), yR.useColors && (this.useColors = yR.useColors), yR.visibility && (this.visibility = yR.visibility), yR.useDash && (this.useDash = yR.useDash), yR.dashCount && (this.dashCount = yR.dashCount), yR.dashRatio && (this.dashRatio = yR.dashRatio), yR.dashOffset && (this.dashOffset = yR.dashOffset), yR.width && (this.width = yR.width), yR.sizeAttenuation && (this.sizeAttenuation = yR.sizeAttenuation), yR.resolution && (this.resolution = yR.resolution), yR.colors ? this.colorsTexture = Wy.CreateColorsTexture(`${this.name}-colors-texture`, yR.colors, this.colorsSampling, this.jH()) : this.colorsTexture = Wy.PrepareEmptyColorsTexture(JR), this._cameraFacing = yR.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var by, vy, Oy;
    gy.ForceGLSL = !1,
      function(RR) {
        RR[RR.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", RR[RR.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(by || (by = {})),
      function(RR) {
        RR[RR.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", RR[RR.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", RR[RR.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(vy || (vy = {})),
      function(RR) {
        RR[RR.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", RR[RR.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", RR[RR.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", RR[RR.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", RR[RR.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Oy || (Oy = {}));
    class xy extends Xy.e {
      constructor(RR, JR, GR) {
        super(RR, JR, null, null, !1, !1), this.name = RR, this._options = GR, this._lazy = !1, this._updatable = !1, this._engine = JR.ke(), this._lazy = GR.lazy ?? !1, this._updatable = GR.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = GR.colorPointers ?? [], this._widths = GR.widths ?? new Array(GR.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(RR) {
        let JR = 0;
        for (const yR of this._points) JR += yR.length;
        const GR = JR / 3 * 2 - this._widths.length;
        for (let yR = 0; yR < GR; yR++) this._widths.push(RR)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.se && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(RR, JR) {
        for (const GR of RR) this._points.push(GR);
        this._lazy || this.setPoints(this._points, JR)
      }
      dispose(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(RR, JR)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(RR) {
        this._uvs = RR instanceof Float32Array ? RR : new Float32Array(RR), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(RR) {
        this.material instanceof gy && this.material.setDefine("GREASED_LINE_USE_OFFSETS", RR?.length > 0), this._offsets = RR, this._offsetsBuffer ? this._offsetsBuffer.update(RR) : this._createOffsetsBuffer(RR)
      }
      get widths() {
        return this._widths
      }
      set widths(RR) {
        this._widths = RR, this._lazy || this._widthsBuffer && this._widthsBuffer.update(RR)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(RR) {
        this._colorPointers = RR, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(RR)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof gy) return this.material;
        const RR = this.material?.pluginManager?.getPlugin(Cy.GREASED_LINE_MATERIAL_NAME);
        return RR || void 0
      }
      get points() {
        const RR = [];
        return By.b.DeepCopy(this._points, RR), RR
      }
      setPoints(RR, JR) {
        this._points = Wy.ConvertPoints(RR, JR?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), JR?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, JR)
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
      serialize(RR) {
        super.serialize(RR), RR.type = this.getClassName(), RR.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new My.c;
        return JR.positions = this._vertexPositions, JR.indices = this._indices, JR.uvs = this._uvs, RR && (JR.normals = [], My.c.ComputeNormals(this._vertexPositions, this._indices, JR.normals)), JR.applyToMesh(this, this._options.updatable), JR
      }
      _createOffsetsBuffer(RR) {
        const JR = this._scene.ke(),
          GR = new IR.d(JR, RR, this._updatable, 3);
        this.setVerticesBuffer(GR.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = GR
      }
    }
    class Ny {
      constructor(RR, JR) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = RR, this.wasAddedByNoopNode = JR
      }
      getIndicesAccessor(RR, JR, GR, yR, tR) {
        return this._indicesAccessorMap.get(RR)?.get(JR)?.get(GR)?.get(yR)?.get(tR)
      }
      setIndicesAccessor(RR, JR, GR, yR, tR, uR) {
        let ZR = this._indicesAccessorMap.get(RR);
        ZR || (ZR = new Map, this._indicesAccessorMap.set(RR, ZR));
        let qR = ZR.get(JR);
        qR || (qR = new Map, ZR.set(JR, qR));
        let iR = qR.get(GR);
        iR || (iR = new Map, qR.set(GR, iR));
        let fR = iR.get(yR);
        fR || (fR = new Map, iR.set(yR, fR)), fR.set(tR, uR)
      }
      pushExportedNode(RR) {
        this._exportedNodes.has(RR) || this._exportedNodes.add(RR)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(RR) {
        return this._vertexBufferViewMap.get(RR)
      }
      setVertexBufferView(RR, JR) {
        this._vertexBufferViewMap.set(RR, JR)
      }
      setRemappedBufferView(RR, JR, GR) {
        this._remappedBufferView.set(RR, new Map), this._remappedBufferView.get(RR).set(JR, GR)
      }
      getRemappedBufferView(RR, JR) {
        return this._remappedBufferView.get(RR)?.get(JR)
      }
      getVertexAccessor(RR, JR, GR) {
        return this._vertexAccessorMap.get(RR)?.get(JR)?.get(GR)
      }
      setVertexAccessor(RR, JR, GR, yR) {
        let tR = this._vertexAccessorMap.get(RR);
        tR || (tR = new Map, this._vertexAccessorMap.set(RR, tR));
        let uR = tR.get(JR);
        uR || (uR = new Map, tR.set(JR, uR)), uR.set(GR, yR)
      }
      hasVertexColorAlpha(RR) {
        return this._vertexMapColorAlpha.get(RR) || !1
      }
      setHasVertexColorAlpha(RR, JR) {
        return this._vertexMapColorAlpha.set(RR, JR)
      }
      getMesh(RR) {
        return this._meshMap.get(RR)
      }
      setMesh(RR, JR) {
        this._meshMap.set(RR, JR)
      }
      bindMorphDataToMesh(RR, JR) {
        const GR = this._meshMorphTargetMap.get(RR) || [];
        this._meshMorphTargetMap.set(RR, GR), -1 === GR.indexOf(JR) && GR.push(JR)
      }
      getMorphTargetsFromMesh(RR) {
        return this._meshMorphTargetMap.get(RR)
      }
    }
    class Dy {
      _ApplyExtension(RR, JR, GR, yR) {
        if (GR >= JR.length) return Promise.resolve(RR);
        const tR = yR(JR[GR], RR);
        return tR ? tR.then((async RR => RR ? await this._ApplyExtension(RR, JR, GR + 1, yR) : null)) : this._ApplyExtension(RR, JR, GR + 1, yR)
      }
      _ApplyExtensions(RR, JR) {
        const GR = [];
        for (const yR of Dy._ExtensionNames) GR.push(this._extensions[yR]);
        return this._ApplyExtension(RR, GR, 0, JR)
      }
      _extensionsPostExportNodeAsync(RR, JR, GR, yR, tR) {
        return this._ApplyExtensions(JR, ((JR, uR) => JR.postExportNodeAsync && JR.postExportNodeAsync(RR, uR, GR, yR, tR, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(RR, JR, GR) {
        return this._ApplyExtensions(JR, ((JR, yR) => JR.postExportMaterialAsync && JR.postExportMaterialAsync(RR, yR, GR)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        return await Promise.all(Dy._ExtensionNames.map((async tR => {
          const uR = this._extensions[tR];
          if (uR.postExportMaterialAdditionalTexturesAsync) {
            const tR = await uR.postExportMaterialAdditionalTexturesAsync(RR, JR, GR);
            yR.push(...tR)
          }
        }))), yR
      }
      _extensionsPostExportTextures(RR, JR, GR) {
        for (const yR of Dy._ExtensionNames) {
          const tR = this._extensions[yR];
          tR.postExportTexture && tR.postExportTexture(RR, JR, GR)
        }
      }
      _extensionsPostExportMeshPrimitive(RR) {
        for (const JR of Dy._ExtensionNames) {
          const GR = this._extensions[JR];
          GR.postExportMeshPrimitive && GR.postExportMeshPrimitive(RR, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const RR of Dy._ExtensionNames) {
          const JR = this._extensions[RR];
          JR.preGenerateBinaryAsync && await JR.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(RR) {
        for (const JR of Dy._ExtensionNames) {
          const GR = this._extensions[JR];
          GR.enabled && RR(GR)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((RR => {
          var JR, GR, yR;
          RR.wasUsed && ((JR = this._glTF).extensionsUsed || (JR.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(RR.name) && this._glTF.extensionsUsed.push(RR.name), RR.required && ((GR = this._glTF).extensionsRequired || (GR.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(RR.name) && this._glTF.extensionsRequired.push(RR.name)), (yR = this._glTF).extensions || (yR.extensions = {}), RR.onExporting && RR.onExporting())
        }))
      }
      _loadExtensions() {
        for (const RR of Dy._ExtensionNames) {
          const JR = Dy._ExtensionFactories[RR](this);
          this._extensions[RR] = JR
        }
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aR.c.LastCreatedScene,
          JR = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${eR.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new vG(this), this._extensions = {}, this._bufferManager = new Gy, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !RR) throw new Error("No scene available to export");
        this._babylonScene = RR, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: RR => RR?.dD?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...JR
        }, this._loadExtensions()
      }
      dispose() {
        for (const RR in this._extensions) {
          this._extensions[RR].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Dy.UnregisterExtension(RR) && tR.Tools.Warn(`Extension with the name ${RR} already exists`), Dy._ExtensionFactories[RR] = JR;
        const yR = GR ?? 0;
        Dy._ExtensionOrders[RR] = yR;
        let uR = Dy._ExtensionNames.length;
        for (let tR = 0; tR < Dy._ExtensionNames.length; tR++) {
          const RR = Dy._ExtensionNames[tR];
          if (yR < Dy._ExtensionOrders[RR]) {
            uR = tR;
            break
          }
        }
        Dy._ExtensionNames.splice(uR, 0, RR)
      }
      static UnregisterExtension(RR) {
        if (!Dy._ExtensionFactories[RR]) return !1;
        delete Dy._ExtensionFactories[RR], delete Dy._ExtensionOrders[RR];
        const JR = Dy._ExtensionNames.indexOf(RR);
        return -1 !== JR && Dy._ExtensionNames.splice(JR, 1), !0
      }
      _generateJSON(RR, JR, GR) {
        const yR = {
          byteLength: RR
        };
        return yR.byteLength && (this._glTF.buffers = [yR]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.tL = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (yR.uri = JR + ".bin"), GR ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(RR) {
        const JR = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const GR = this._generateJSON(JR.byteLength, RR, !0),
          yR = new Blob([JR], {
            type: "application/octet-stream"
          }),
          tR = RR + ".gltf",
          uR = RR + ".bin",
          ZR = new fR;
        if (ZR.files[tR] = GR, ZR.files[uR] = yR, this._imageData)
          for (const qR in this._imageData) ZR.files[qR] = this._imageData[qR];
        return ZR
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(RR) {
        const JR = RR % 4;
        return 0 === JR ? JR : 4 - JR
      }
      async generateGLBAsync(RR) {
        this._shouldUseGlb = !0;
        const JR = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const GR = this._generateJSON(JR.byteLength),
          yR = RR + ".glb";
        let tR, uR = GR.length;
        if ("undefined" !== typeof TextEncoder) {
          tR = (new TextEncoder).encode(GR), uR = tR.length
        }
        const ZR = this._getPadding(uR),
          qR = this._getPadding(JR.byteLength),
          iR = 28 + uR + ZR + JR.byteLength + qR,
          VR = new Ry(iR);
        if (VR.writeUInt32(1179937895), VR.writeUInt32(2), VR.writeUInt32(iR), VR.writeUInt32(uR + ZR), VR.writeUInt32(1313821514), tR) VR.writeTypedArray(tR);
        else {
          const RR = "_".charCodeAt(0);
          for (let JR = 0; JR < uR; ++JR) {
            const yR = GR.charCodeAt(JR);
            yR != GR.codePointAt(JR) ? VR.writeUInt8(RR) : VR.writeUInt8(yR)
          }
        }
        for (let fR = 0; fR < ZR; ++fR) VR.writeUInt8(32);
        VR.writeUInt32(JR.byteLength + qR), VR.writeUInt32(5130562), VR.writeTypedArray(JR);
        for (let fR = 0; fR < qR; ++fR) VR.writeUInt8(0);
        const KR = new fR;
        return KR.files[yR] = new Blob([VR.getOutputData()], {
          type: "application/octet-stream"
        }), KR
      }
      _setNodeTransformation(RR, JR, GR) {
        if (JR.getPivotPoint().equalsWithEpsilon(oG, NG.c) || tR.Tools.Warn("Pivot points are not supported in the glTF serializer"), !JR.position.equalsWithEpsilon(oG, NG.c)) {
          const tR = yR.TmpVectors.Fe[0].vN(JR.position);
          GR && dG(tR), RR.translation = tR.QtR()
        }
        JR.MK.equalsWithEpsilon(PG, NG.c) || (RR.scale = JR.MK.QtR());
        const uR = JR.rotationQuaternion?.clone() || yR.Quaternion.FromEulerAngles(JR.rotation.x, JR.rotation.y, JR.rotation.z);
        uR.equalsWithEpsilon(cG, NG.c) || (GR && EG(uR), RR.rotation = uR.normalize().QtR())
      }
      _setCameraTransformation(RR, JR, GR) {
        const tR = yR.TmpVectors.Fe[0],
          uR = yR.TmpVectors.Quaternion[0],
          ZR = JR.getWorldMatrix();
        if (JR.parent) {
          const RR = JR.parent.getWorldMatrix().invertToRef(yR.TmpVectors.Matrix[0]);
          ZR.multiplyToRef(RR, yR.TmpVectors.Matrix[1]).decompose(void 0, uR, tR)
        } else ZR.decompose(void 0, uR, tR);
        tR.equalsWithEpsilon(oG, NG.c) || (GR && dG(tR), RR.translation = tR.QtR()), GR && EG(uR), this._babylonScene.useRightHandedSystem || YG(uR), uR.equalsWithEpsilon(cG, NG.c) || (RR.rotation = uR.QtR())
      }
      _listAvailableCameras() {
        for (const RR of this._babylonScene.cameras) {
          const JR = {
            type: RR.mode === yy.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (RR.name && (JR.name = RR.name), "perspective" === JR.type) JR.perspective = {
            aspectRatio: RR.ke().getAspectRatio(RR),
            yfov: RR.fovMode === yy.b.FOVMODE_VERTICAL_FIXED ? RR.fov : RR.fov * RR.ke().getAspectRatio(RR),
            znear: RR.minZ,
            zfar: RR.maxZ
          };
          else if ("orthographic" === JR.type) {
            const GR = RR.orthoLeft && RR.orthoRight ? .5 * (RR.orthoRight - RR.orthoLeft) : .5 * RR.ke().getRenderWidth(),
              yR = RR.orthoBottom && RR.orthoTop ? .5 * (RR.orthoTop - RR.orthoBottom) : .5 * RR.ke().getRenderHeight();
            JR.orthographic = {
              xmag: GR,
              ymag: yR,
              znear: RR.minZ,
              zfar: RR.maxZ
            }
          }
          this._camerasMap.set(RR, JR)
        }
      }
      _exportAndAssignCameras() {
        const RR = Array.from(this._camerasMap.values());
        for (const JR of RR) {
          const RR = this._nodesCameraMap.get(JR);
          if (void 0 !== RR) {
            this._cameras.push(JR);
            for (const JR of RR) JR.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const RR of this._babylonScene.skeletons) {
          if (RR.bones.length <= 0) continue;
          const JR = {
            joints: []
          };
          this._skinMap.set(RR, JR)
        }
      }
      _exportAndAssignSkeletons(RR) {
        for (const GR of this._babylonScene.skeletons) {
          if (GR.bones.length <= 0) continue;
          const uR = this._skinMap.get(GR);
          if (void 0 == uR) continue;
          const ZR = {};
          let qR = -1;
          for (let RR = 0; RR < GR.bones.length; ++RR) {
            const JR = GR.bones[RR],
              yR = JR.getIndex() ?? RR; - 1 !== yR && (ZR[yR] = JR, yR > qR && (qR = yR))
          }
          const iR = [];
          for (let GR = 0; GR <= qR; ++GR) {
            const qR = ZR[GR],
              fR = qR.getTransformNode(),
              VR = fR ? this._nodeMap.get(fR) : void 0;
            if (void 0 === VR) {
              tR.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            uR.joints.push(VR);
            const KR = qR.getAbsoluteInverseBindMatrix().clone();
            RR.has(fR) && (JR = KR, DG.invertToRef(yR.TmpVectors.Matrix[0]).multiplyToRef(JR, JR).multiplyToRef(DG, JR)), iR.push(KR)
          }
          const fR = this._nodesSkinMap.get(uR);
          if (uR.joints.length > 0 && void 0 !== fR) {
            const RR = new Float32Array(16 * iR.length);
            iR.forEach(((JR, GR) => {
              RR.set(JR.m, 16 * GR)
            }));
            const JR = this._bufferManager.createBufferView(RR);
            this._accessors.push(this._bufferManager.createAccessor(JR, "MAT4", 5126, iR.length)), uR.inverseBindMatrices = this._accessors.length - 1, this._skins.push(uR);
            const GR = this._skins.length - 1;
            for (const yR of fR) yR.skin = GR
          }
        }
        var JR
      }
      async _exportSceneAsync() {
        const RR = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const JR = this._options.metadataSelector(this._babylonScene.metadata);
          JR && (RR.extras = JR)
        }
        const JR = new Array,
          GR = new Array,
          yR = new Array,
          tR = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let uR;
        if (tR && !this._options.includeCoordinateSystemConversionNodes)
          for (const fR of this._babylonScene.animationGroups)
            for (const RR of fR.targetedAnimations) {
              const JR = RR.target;
              JR instanceof KR.c && !JR.parent && (uR ?? (uR = new Set)).add(JR)
            }
        for (const fR of this._babylonScene.rootNodes) {
          const RR = fR.animations,
            ZR = !!RR && RR.length > 0 || uR?.has(fR);
          tR && !this._options.includeCoordinateSystemConversionNodes && HG(fR, this._babylonScene.useRightHandedSystem) && !ZR ? yR.push(...fR.getChildren()) : this._babylonScene.useRightHandedSystem ? JR.push(fR) : GR.push(fR)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const ZR = new Ny(!0, !1);
        RR.nodes.push(...await this._exportNodesAsync(GR, ZR));
        const qR = new Ny(!1, !1);
        RR.nodes.push(...await this._exportNodesAsync(JR, qR));
        const iR = new Ny(!1, !0);
        RR.nodes.push(...await this._exportNodesAsync(yR, iR)), RR.nodes.length && this._scenes.push(RR), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(ZR.getNodesSet()), this._babylonScene.animationGroups.length && Ky._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZR.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(RR) {
        return this._nodeMap.get(RR)
      }
      _getAnimationIndex(RR) {
        return this._animationGroupMap.get(RR)
      }
      _getCameraIndex(RR) {
        const JR = this._camerasMap.get(RR);
        if (!JR) return;
        const GR = this._cameras.indexOf(JR);
        return GR >= 0 ? GR : void 0
      }
      _getMaterialIndex(RR) {
        return this._materialMap.get(RR)
      }
      _getRootIndex(RR, JR) {
        switch (RR) {
          case "nodes":
            return this._getNodeIndex(JR);
          case "animations":
            return this._getAnimationIndex(JR);
          case "cameras":
            return this._getCameraIndex(JR);
          case "materials":
            return this._getMaterialIndex(JR);
          case "meshes": {
            const RR = this._getNodeIndex(JR);
            return void 0 === RR ? void 0 : this._nodes[RR]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(JR)?.index;
          case "images": {
            const RR = this._materialExporter.getTextureInfo(JR)?.index;
            if (void 0 === RR) return;
            const GR = this._textures[RR];
            for (const JR of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const RR = GR?.extensions?.[JR]?.source;
              if ("number" === typeof RR) return RR
            }
            return GR?.source
          }
          case "samplers": {
            const RR = this._materialExporter.getTextureInfo(JR)?.index;
            return void 0 === RR ? void 0 : this._textures[RR]?.sampler
          }
          case "skins": {
            const RR = this._skinMap.get(JR),
              GR = RR ? this._skins.indexOf(RR) : -1;
            return GR >= 0 ? GR : void 0
          }
          case "scenes":
            return JR === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(RR, JR, GR) {
        const yR = this._nodes[RR];
        if (!yR) throw new Error(`Cannot write ${JR}: glTF node ${RR} does not exist.`);
        yR.extensions || (yR.extensions = {}), yR.extensions[JR] = GR
      }
      _shouldExportNode(RR) {
        let JR = this._shouldExportNodeMap.get(RR);
        return void 0 === JR && (JR = this._options.shouldExportNode(RR), this._shouldExportNodeMap.set(RR, JR)), JR
      }
      async _exportNodesAsync(RR, JR) {
        const GR = new Array;
        this._exportBuffers(RR, JR);
        for (const yR of RR) await this._exportNodeAsync(yR, GR, JR);
        return GR
      }
      _collectBuffers(RR, JR, GR, yR, tR) {
        if (this._shouldExportNode(RR) && RR instanceof wR.d && RR.geometry) {
          const uR = RR.geometry.getVertexBuffers();
          if (uR)
            for (const yR in uR) {
              if (!SG(yR)) continue;
              const ZR = uR[yR];
              tR.setHasVertexColorAlpha(ZR, RR.hasVertexAlpha);
              const qR = ZR._buffer,
                iR = JR.get(qR) || [];
              JR.set(qR, iR), -1 === iR.indexOf(ZR) && iR.push(ZR);
              const fR = GR.get(ZR) || [];
              GR.set(ZR, fR), -1 === fR.indexOf(RR) && fR.push(RR)
            }
          const ZR = RR.morphTargetManager;
          if (ZR)
            for (let JR = 0; JR < ZR.numTargets; JR++) {
              const GR = ZR.getTarget(JR),
                tR = yR.get(GR) || [];
              yR.set(GR, tR), -1 === tR.indexOf(RR) && tR.push(RR)
            }
        }
        for (const uR of RR.getChildren()) this._collectBuffers(uR, JR, GR, yR, tR)
      }
      _exportBuffers(RR, JR) {
        const GR = new Map,
          yR = new Map,
          tR = new Map;
        for (const qR of RR) this._collectBuffers(qR, GR, yR, tR, JR);
        const uR = Array.from(GR.keys());
        for (const qR of uR) {
          const RR = qR.getData();
          if (!RR) throw new Error("Buffer data is not available");
          const tR = GR.get(qR);
          if (!tR) continue;
          const uR = tR[0].byteStride;
          if (tR.some((RR => RR.byteStride !== uR))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const ZR = FG(RR).slice();
          for (const JR of tR) {
            const RR = yR.get(JR),
              {
                byteOffset: GR,
                byteStride: tR,
                componentCount: uR,
                type: qR,
                count: iR,
                normalized: fR,
                kind: KR
              } = mG(JR, RR);
            switch (KR) {
              case VR.c.NormalKind:
              case VR.c.TangentKind:
                (0, OG.e)(ZR, GR, tR, uR, qR, iR, fR, (RR => {
                  const JR = Math.sqrt(RR[0] * RR[0] + RR[1] * RR[1] + RR[2] * RR[2]);
                  if (JR > 0) {
                    const GR = 1 / JR;
                    RR[0] *= GR, RR[1] *= GR, RR[2] *= GR
                  }
                }));
                break;
              case VR.c.ColorKind: {
                const JR = RR.filter((RR => RR.material instanceof uy.StandardMaterial || null == RR.material)).length;
                if (0 == JR) break;
                if (JR != RR.length) {
                  gR.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                qR == VR.c.UNSIGNED_BYTE && gR.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const yR = new LR.Color3,
                  KR = new LR.e,
                  wR = this._babylonScene.ke().useExactSrgbConversions;
                (0, OG.e)(ZR, GR, tR, uR, qR, iR, fR, (RR => {
                  3 === RR.length ? (yR.yK(RR, 0), yR.toLinearSpaceToRef(yR, wR), yR.toArray(RR, 0)) : (KR.yK(RR, 0), KR.toLinearSpaceToRef(KR, wR), KR.toArray(RR, 0))
                }))
              }
            }
          }
          if (JR.convertToRightHanded) {
            for (const RR of tR) {
              const JR = yR.get(RR),
                {
                  byteOffset: GR,
                  byteStride: tR,
                  componentCount: uR,
                  type: qR,
                  count: iR,
                  normalized: fR,
                  kind: KR
                } = mG(RR, JR);
              switch (KR) {
                case VR.c.PositionKind:
                case VR.c.NormalKind:
                case VR.c.TangentKind:
                  (0, OG.e)(ZR, GR, tR, uR, qR, iR, fR, (RR => {
                    RR[0] = -RR[0]
                  }))
              }
            }
            JR.convertedToRightHandedBuffers.set(qR, ZR)
          }
          const iR = this._bufferManager.createBufferView(ZR, uR);
          JR.setVertexBufferView(qR, iR);
          const fR = new Map;
          for (const JR of tR) {
            const RR = yR.get(JR),
              {
                kind: GR,
                totalVertices: tR
              } = mG(JR, RR);
            switch (GR) {
              case VR.c.MatricesIndicesKind:
              case VR.c.MatricesIndicesExtraKind:
                if (JR.type == VR.c.FLOAT) {
                  const RR = JR.getFloatData(tR);
                  null !== RR && fR.set(JR, RR)
                }
            }
          }
          0 !== fR.size && gR.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const KR = Array.from(fR.keys());
          for (const GR of KR) {
            const RR = fR.get(GR);
            if (!RR) continue;
            const yR = RR.some((RR => RR >= 256)),
              tR = new(yR ? Uint16Array : Uint8Array)(RR.length);
            for (let JR = 0; JR < RR.length; JR++) tR[JR] = RR[JR];
            const uR = this._bufferManager.createBufferView(tR, 4 * (yR ? 2 : 1));
            JR.setRemappedBufferView(qR, GR, uR)
          }
        }
        const ZR = Array.from(tR.keys());
        for (const qR of ZR) {
          const RR = tR.get(qR);
          if (!RR) continue;
          const GR = wy(qR, RR[0], this._bufferManager, this._bufferViews, this._accessors, JR.convertToRightHanded);
          for (const yR of RR) JR.bindMorphDataToMesh(yR, GR)
        }
      }
      async _exportNodeAsync(RR, JR, GR) {
        let yR = this._nodeMap.get(RR);
        if (void 0 !== yR) return void(JR.includes(yR) || JR.push(yR));
        const tR = await this._createNodeAsync(RR, GR);
        if (tR) {
          yR = this._nodes.length, this._nodes.push(tR), this._nodeMap.set(RR, yR), GR.pushExportedNode(RR), JR.push(yR);
          const uR = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            ZR = [];
          this._babylonScene.animationGroups.length || (Ky._CreateMorphTargetAnimationFromMorphTargetAnimations(RR, uR, ZR, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, GR.convertToRightHanded, this._options.shouldExportAnimation), RR.animations.length && Ky._CreateNodeAnimationFromNodeAnimations(RR, uR, ZR, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, GR.convertToRightHanded, this._options.shouldExportAnimation)), uR.channels.length && uR.samplers.length && this._animations.push(uR), ZR.forEach((RR => {
            RR.channels.length && RR.samplers.length && this._animations.push(RR)
          }))
        }
        const uR = tR ? [] : JR;
        for (const ZR of RR.getChildren()) await this._exportNodeAsync(ZR, uR, GR);
        tR && uR.length && (tR.children = uR)
      }
      async _createNodeAsync(RR, JR) {
        if (!this._shouldExportNode(RR)) return null;
        const GR = {};
        if (RR.name && (GR.name = RR.name), RR.metadata) {
          const JR = this._options.metadataSelector(RR.metadata);
          JR && (GR.extras = JR)
        }
        if (RR instanceof KR.c && (this._setNodeTransformation(GR, RR, JR.convertToRightHanded), RR instanceof wR.d)) {
          const yR = RR instanceof rR.e ? RR.IuR : RR;
          if (yR.XM && yR.XM.length > 0 && (GR.mesh = await this._exportMeshAsync(yR, JR)), RR.skeleton) {
            const JR = this._skinMap.get(RR.skeleton);
            void 0 !== JR && (void 0 === this._nodesSkinMap.get(JR) && this._nodesSkinMap.set(JR, []), this._nodesSkinMap.get(JR)?.push(GR))
          }
        }
        if (RR instanceof xG.f) {
          const yR = this._camerasMap.get(RR);
          if (yR) {
            void 0 === this._nodesCameraMap.get(yR) && this._nodesCameraMap.set(yR, []), this._setCameraTransformation(GR, RR, JR.convertToRightHanded);
            const tR = RR.parent;
            if (null !== tR && QG(RR, tR)) {
              const RR = this._nodeMap.get(tR);
              if (void 0 !== RR) {
                const JR = this._nodes[RR];
                return kG(GR, JR), this._nodesCameraMap.get(yR)?.push(JR), null
              }
            }
            this._nodesCameraMap.get(yR)?.push(GR)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", GR, RR, this._nodeMap, JR.convertToRightHanded) ? GR : (gR.c.Warn(`Not exporting node ${RR.name}`), null)
      }
      _exportIndices(RR, JR, GR, yR, tR, ZR, qR, iR, fR) {
        let VR = null;
        fR.mode = function(RR) {
          switch (RR) {
            case uR.d.TriangleFillMode:
              return 4;
            case uR.d.TriangleStripDrawMode:
              return 5;
            case uR.d.TriangleFanDrawMode:
              return 6;
            case uR.d.PointListDrawMode:
            case uR.d.PointFillMode:
              return 0;
            case uR.d.LineLoopDrawMode:
              return 2;
            case uR.d.LineListDrawMode:
              return 1;
            case uR.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${RR}`)
        }(ZR);
        const KR = qR !== uR.d.CounterClockWiseSideOrientation && function(RR) {
          switch (RR) {
            case uR.d.TriangleFillMode:
            case uR.d.TriangleStripDrawMode:
            case uR.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(ZR);
        if (KR) {
          if (ZR === uR.d.TriangleStripDrawMode || ZR === uR.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const qR = JR ? new Uint32Array(yR) : new Uint16Array(yR);
          if (RR)
            for (let JR = 0; JR + 2 < yR; JR += 3) qR[JR] = RR[GR + JR] + tR, qR[JR + 1] = RR[GR + JR + 2] + tR, qR[JR + 2] = RR[GR + JR + 1] + tR;
          else
            for (let RR = 0; RR + 2 < yR; RR += 3) qR[RR] = RR, qR[RR + 1] = RR + 2, qR[RR + 2] = RR + 1;
          VR = qR
        } else if (RR && 0 !== tR) {
          const uR = JR ? new Uint32Array(yR) : new Uint16Array(yR);
          for (let JR = 0; JR < yR; JR++) uR[JR] = RR[GR + JR] + tR;
          VR = uR
        } else RR && (VR = function(RR, JR, GR, yR) {
          let tR = RR;
          return 0 === JR && GR === RR.length || (tR = Array.isArray(RR) ? RR.slice(JR, JR + GR) : RR.subarray(JR, JR + GR)), tR instanceof Int32Array ? new Uint32Array(tR.buffer, tR.byteOffset, tR.length) : Array.isArray(tR) ? yR ? new Uint32Array(tR) : new Uint16Array(tR) : tR
        }(RR, GR, yR, JR));
        if (VR) {
          let uR = iR.getIndicesAccessor(RR, GR, yR, tR, KR);
          if (void 0 === uR) {
            const ZR = this._bufferManager.createBufferView(VR),
              qR = JR ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(ZR, "SCALAR", qR, yR, 0)), uR = this._accessors.length - 1, iR.setIndicesAccessor(RR, GR, yR, tR, KR, uR)
          }
          fR.indices = uR
        }
      }
      _exportVertexBuffer(RR, JR, GR, yR, tR, uR) {
        const ZR = RR.getKind();
        if (!SG(ZR)) return;
        if (ZR.startsWith("uv") && !this._options.exportUnusedUVs && (!JR || !this._materialNeedsUVsSet.has(JR))) return;
        let qR = tR.getVertexAccessor(RR, GR, yR);
        if (void 0 === qR) {
          const JR = tR.convertedToRightHandedBuffers.get(RR._buffer) || RR._buffer.getData(),
            uR = ZR === VR.c.PositionKind ? function(RR, JR, GR, yR) {
              const {
                byteOffset: tR,
                byteStride: uR,
                type: ZR,
                normalized: qR
              } = JR, iR = JR.getSize(), fR = new Array(iR).fill(1 / 0), VR = new Array(iR).fill(-1 / 0);
              return (0, OG.e)(RR, tR + GR * uR, uR, iR, ZR, yR * iR, qR, (RR => {
                for (let JR = 0; JR < iR; JR++) fR[JR] = Math.min(fR[JR], RR[JR]), VR[JR] = Math.max(VR[JR], RR[JR])
              })), {
                min: fR,
                max: VR
              }
            }(JR, RR, GR, yR) : void 0,
            iR = (ZR === VR.c.MatricesIndicesKind || ZR === VR.c.MatricesIndicesExtraKind) && RR.type === VR.c.FLOAT,
            fR = iR ? VR.c.UNSIGNED_BYTE : RR.type,
            KR = iR ? void 0 : RR.normalized,
            wR = iR ? tR.getRemappedBufferView(RR._buffer, RR) : tR.getVertexBufferView(RR._buffer),
            rR = RR.byteOffset + GR * RR.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(wR, function(RR, JR) {
            if (RR == VR.c.ColorKind) return JR ? "VEC4" : "VEC3";
            switch (RR) {
              case VR.c.PositionKind:
              case VR.c.NormalKind:
                return "VEC3";
              case VR.c.TangentKind:
              case VR.c.MatricesIndicesKind:
              case VR.c.MatricesIndicesExtraKind:
              case VR.c.MatricesWeightsKind:
              case VR.c.MatricesWeightsExtraKind:
                return "VEC4";
              case VR.c.UVKind:
              case VR.c.UV2Kind:
              case VR.c.UV3Kind:
              case VR.c.UV4Kind:
              case VR.c.UV5Kind:
              case VR.c.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${RR}`)
          }(ZR, tR.hasVertexColorAlpha(RR)), fR, yR, rR, uR, KR)), qR = this._accessors.length - 1, tR.setVertexAccessor(RR, GR, yR, qR)
        }
        uR.attributes[function(RR) {
          switch (RR) {
            case VR.c.PositionKind:
              return "POSITION";
            case VR.c.NormalKind:
              return "NORMAL";
            case VR.c.TangentKind:
              return "TANGENT";
            case VR.c.ColorKind:
              return "COLOR_0";
            case VR.c.UVKind:
              return "TEXCOORD_0";
            case VR.c.UV2Kind:
              return "TEXCOORD_1";
            case VR.c.UV3Kind:
              return "TEXCOORD_2";
            case VR.c.UV4Kind:
              return "TEXCOORD_3";
            case VR.c.UV5Kind:
              return "TEXCOORD_4";
            case VR.c.UV6Kind:
              return "TEXCOORD_5";
            case VR.c.MatricesIndicesKind:
              return "JOINTS_0";
            case VR.c.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case VR.c.MatricesWeightsKind:
              return "WEIGHTS_0";
            case VR.c.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${RR}`)
        }(ZR)] = qR
      }
      async _exportMaterialAsync(RR, JR, GR, yR) {
        let tR = this._materialMap.get(RR);
        if (void 0 === tR) {
          const yR = JR && Object.keys(JR).some((RR => RR.startsWith("uv")));
          if ((RR = RR instanceof ty.d ? RR.ZJR[GR.materialIndex] : RR) instanceof XJ) tR = await this._materialExporter.exportPBRMaterialAsync(RR, yR);
          else if (RR instanceof uy.StandardMaterial) tR = await this._materialExporter.exportStandardMaterialAsync(RR, yR);
          else {
            if (!(RR instanceof sJ)) return void gR.c.Warn(`Unsupported material '${RR.name}' with type ${RR.getClassName()}`);
            tR = await this._materialExporter.exportOpenPBRMaterialAsync(RR, yR)
          }
          this._materialMap.set(RR, tR)
        }
        yR.material = tR
      }
      async _exportMeshAsync(RR, JR) {
        let GR = JR.getMesh(RR);
        if (void 0 !== GR) return GR;
        const yR = {
          primitives: []
        };
        GR = this._meshes.length, this._meshes.push(yR), JR.setMesh(RR, GR);
        const tR = RR.isUnIndexed ? null : RR.NuR(),
          ZR = RR.geometry?.getVertexBuffers(),
          qR = JR.getMorphTargetsFromMesh(RR),
          iR = RR instanceof ry.d,
          fR = RR instanceof xy,
          VR = RR.XM;
        if (ZR && VR && VR.length > 0)
          for (const KR of VR) {
            const GR = {
                attributes: {}
              },
              VR = KR.he() || this._babylonScene.defaultMaterial;
            if (fR) {
              const JR = {
                  name: VR.name
                },
                yR = RR,
                tR = LR.Color3.White(),
                uR = yR.material?.alpha ?? 1,
                ZR = yR.greasedLineMaterial?.color ?? tR;
              (!ZR.equalsWithEpsilon(tR, NG.c) || uR < 1) && (JR.pbrMetallicRoughness = {
                baseColorFactor: [...ZR.QtR(), uR]
              }), this._materials.push(JR), GR.material = this._materials.length - 1
            } else if (iR) {
              const JR = {
                  name: VR.name
                },
                yR = RR;
              (!yR.color.equalsWithEpsilon(LR.Color3.White(), NG.c) || yR.alpha < 1) && (JR.pbrMetallicRoughness = {
                baseColorFactor: [...yR.color.QtR(), yR.alpha]
              }), this._materials.push(JR), GR.material = this._materials.length - 1
            } else await this._exportMaterialAsync(VR, ZR, KR, GR);
            const wR = iR || fR ? uR.d.LineListDrawMode : RR.overrideRenderingFillMode ?? VR.fillMode;
            let rR = VR._getEffectiveOrientation(RR);
            JR.wasAddedByNoopNode && !RR.jH().useRightHandedSystem && (rR = rR === uR.d.ClockWiseSideOrientation ? uR.d.CounterClockWiseSideOrientation : uR.d.ClockWiseSideOrientation), this._exportIndices(tR, tR ? (0, OG.b)(tR, KR.indexCount, KR.indexStart, KR.verticesStart) : KR.verticesCount > 65535, tR ? KR.indexStart : KR.verticesStart, tR ? KR.indexCount : KR.verticesCount, -KR.verticesStart, wR, rR, JR, GR);
            for (const RR of Object.values(ZR)) this._exportVertexBuffer(RR, VR, KR.verticesStart, KR.verticesCount, JR, GR);
            if (qR) {
              GR.targets = [];
              for (const RR of qR) GR.targets.push(RR.attributes)
            }
            yR.primitives.push(GR), this._extensionsPostExportMeshPrimitive(GR)
          }
        if (qR) {
          yR.weights = [], yR.extras || (yR.extras = {}), yR.extras.targetNames = [];
          for (const RR of qR) yR.weights.push(RR.influence), yR.extras.targetNames.push(RR.name)
        }
        return GR
      }
    }
    Dy._ExtensionNames = new Array, Dy._ExtensionFactories = {}, Dy._ExtensionOrders = {};
    class Hy {
      static async GLTFAsync(RR, JR, GR) {
        GR && GR.exportWithoutWaitingForScene || await RR.whenReadyAsync();
        const yR = new Dy(RR, GR),
          tR = await yR.generateGLTFAsync(JR.replace(/\.[^/.]+$/, ""));
        return yR.dispose(), tR
      }
      static async GLBAsync(RR, JR, GR) {
        GR && GR.exportWithoutWaitingForScene || await RR.whenReadyAsync();
        const yR = new Dy(RR, GR),
          tR = await yR.generateGLBAsync(JR.replace(/\.[^/.]+$/, ""));
        return yR.dispose(), tR
      }
    }
    const oy = "EXT_mesh_gpu_instancing";

    function cy(RR, JR) {
      const GR = new Float32Array(3 * JR);
      for (let yR = 0; yR < JR; yR++) GR[3 * yR + 0] = RR[4 * yR + 0], GR[3 * yR + 1] = RR[4 * yR + 1], GR[3 * yR + 2] = RR[4 * yR + 2];
      return GR
    }
    class Py {
      constructor(RR) {
        this.name = oy, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(RR, JR, GR, yR, tR, uR) {
        return await new Promise((RR => {
          if (JR && GR instanceof Xy.e && GR.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const RR = PR.r.Zero(),
              yR = PR.i.Identity(),
              ZR = PR.r.One(),
              qR = GR.thinInstanceGetWorldMatrices(),
              iR = PR.l.Fe[2],
              fR = PR.l.Quaternion[1],
              VR = PR.l.Fe[3];
            let KR = !1,
              wR = !1,
              rR = !1;
            const eR = new Float32Array(3 * GR.zRR),
              aR = new Float32Array(4 * GR.zRR),
              LR = new Float32Array(3 * GR.zRR);
            let nR = 0;
            for (const JR of qR) JR.decompose(VR, fR, iR), tR && (dG(iR), EG(fR)), eR.set(iR.QtR(), 3 * nR), aR.set(fR.normalize().QtR(), 4 * nR), LR.set(VR.QtR(), 3 * nR), KR = KR || !iR.equalsWithEpsilon(RR), wR = wR || !fR.equalsWithEpsilon(yR), rR = rR || !VR.equalsWithEpsilon(ZR), nR++;
            const UR = {
              attributes: {}
            };
            KR && (UR.attributes.TRANSLATION = this._buildAccessor(eR, "VEC3", GR.zRR, uR)), wR && (UR.attributes.ROTATION = this._buildAccessor(aR, "VEC4", GR.zRR, uR)), rR && (UR.attributes.SCALE = this._buildAccessor(LR, "VEC3", GR.zRR, uR));
            let WR = GR._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (WR) {
              const RR = GR.zRR,
                JR = "VEC3";
              GR.hasVertexAlpha && WR.length === 4 * RR ? (this._instanceColorWarned || (gR.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), WR = cy(WR, RR)) : WR.length === 4 * RR && (WR = cy(WR, RR)), WR.length === 3 * RR && (UR.attributes._COLOR_0 = this._buildAccessor(WR, JR, RR, uR))
            }
            JR.extensions = JR.extensions || {}, JR.extensions[oy] = UR
          }
          RR(JR)
        }))
      }
      _buildAccessor(RR, JR, GR, yR) {
        const tR = yR.createBufferView(RR),
          uR = yR.createAccessor(tR, JR, 5126, GR);
        return this._exporter._accessors.push(uR), this._exporter._accessors.length - 1
      }
    }
    let Iy = !1;

    function my() {
      Iy || (Iy = !0, Dy.RegisterExtension(oy, (RR => new Py(RR))))
    }
    GR(42014);
    my();
    var zy = GR(53887);

    function Sy(RR, JR, GR, yR) {
      const tR = RR;
      let uR = null,
        ZR = null,
        qR = null,
        iR = null;
      const fR = {},
        VR = JR.find((RR => "POSITION" === RR.dracoName));
      if (!VR) throw new Error("Draco: Missing position attribute for encoding.");
      if (!GR) {
        const RR = VR.data.length / VR.size;
        GR = new(RR > 65535 ? Uint32Array : Uint16Array)(RR);
        for (let JR = 0; JR < RR; JR++) GR[JR] = JR
      }
      try {
        uR = new tR.Encoder, ZR = new tR.MeshBuilder, qR = new tR.Mesh, ZR.AddFacesToMesh(qR, GR.length / 3, GR);
        const RR = new Map([
          [Float32Array, (RR, JR, GR, yR, tR, uR) => RR.AddFloatAttribute(JR, GR, yR, tR, uR)],
          [Uint32Array, (RR, JR, GR, yR, tR, uR) => RR.AddUInt32Attribute(JR, GR, yR, tR, uR)],
          [Uint16Array, (RR, JR, GR, yR, tR, uR) => RR.AddUInt16Attribute(JR, GR, yR, tR, uR)],
          [Uint8Array, (RR, JR, GR, yR, tR, uR) => RR.AddUInt8Attribute(JR, GR, yR, tR, uR)],
          [Int32Array, (RR, JR, GR, yR, tR, uR) => RR.AddInt32Attribute(JR, GR, yR, tR, uR)],
          [Int16Array, (RR, JR, GR, yR, tR, uR) => RR.AddInt16Attribute(JR, GR, yR, tR, uR)],
          [Int8Array, (RR, JR, GR, yR, tR, uR) => RR.AddInt8Attribute(JR, GR, yR, tR, uR)]
        ]);
        for (const GR of JR) {
          GR.data instanceof Uint8ClampedArray && (GR.data = new Uint8Array(GR.data));
          const JR = RR.get(GR.data.constructor),
            iR = GR.data.length / GR.size;
          fR[GR.kind] = JR(ZR, qR, tR[GR.dracoName], iR, GR.size, GR.data), yR.quantizationBits && yR.quantizationBits[GR.dracoName] && uR.SetAttributeQuantization(tR[GR.dracoName], yR.quantizationBits[GR.dracoName])
        }
        yR.method && uR.SetEncodingMethod(tR[yR.method]), void 0 !== yR.encodeSpeed && void 0 !== yR.decodeSpeed && uR.SetSpeedOptions(yR.encodeSpeed, yR.decodeSpeed), iR = new tR.DracoInt8Array;
        const VR = uR.EncodeMeshToDracoBuffer(qR, iR);
        if (VR <= 0) throw new Error("Draco: Failed to encode.");
        const KR = new Int8Array(VR);
        for (let JR = 0; JR < VR; JR++) KR[JR] = iR.GetValue(JR);
        return {
          data: KR,
          attributeIds: fR
        }
      } finally {
        qR && tR.destroy(qR), ZR && tR.destroy(ZR), uR && tR.destroy(uR), iR && tR.destroy(iR)
      }
    }

    function jy() {
      let RR;
      onmessage = JR => {
        const GR = JR.data;
        switch (GR.id) {
          case "init": {
            GR.url && importScripts(GR.url);
            const JR = GR.wasmBinary ? {
              wasmBinary: GR.wasmBinary
            } : {};
            RR = DracoEncoderModule(JR), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!RR) throw new Error("Draco: Encoder module is not available.");
            RR.then((RR => {
              const JR = Sy(RR, GR.attributes, GR.indices, GR.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: JR
              }, JR ? [JR.data.buffer] : void 0)
            })).catch((RR => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: RR.message
              })
            }))
        }
      }
    }
    class dy {
      constructor(RR) {
        if (RR.workerPool) return void(this._workerPoolPromise = Promise.resolve(RR.workerPool));
        const JR = RR.wasmBinary,
          GR = RR.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          yR = GR && "function" === typeof Worker && "function" === typeof URL,
          tR = yR || !RR.jsModule,
          uR = RR.wasmUrl && RR.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: tR ? BJ.h.GetBabylonScriptURL(RR.wasmUrl, !0) : "",
            wasmBinaryPromise: JR ? Promise.resolve(JR) : BJ.h.LoadFileAsync(BJ.h.GetBabylonScriptURL(RR.wasmBinaryUrl, !0))
          } : {
            url: tR ? BJ.h.GetBabylonScriptURL(RR.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        yR ? this._workerPoolPromise = uR.wasmBinaryPromise.then((RR => {
          const JR = this._getWorkerContent(),
            yR = URL.createObjectURL(new Blob([JR], {
              type: "application/javascript"
            }));
          return new zy.e(GR, (() => async function(RR, JR, GR) {
            return await new Promise(((yR, tR) => {
              const uR = JR => {
                  RR.removeEventListener("error", uR), RR.removeEventListener("message", ZR), tR(JR)
                },
                ZR = JR => {
                  "initDone" === JR.data.id && (RR.removeEventListener("error", uR), RR.removeEventListener("message", ZR), yR(RR))
                };
              if (RR.addEventListener("error", uR), RR.addEventListener("message", ZR), JR) {
                const yR = JR.slice(0);
                RR.postMessage({
                  id: "init",
                  url: GR,
                  wasmBinary: yR
                }, [yR])
              } else RR.postMessage({
                id: "init",
                url: GR
              })
            }))
          }(new Worker(yR), RR, uR.url)))
        })) : this._modulePromise = uR.wasmBinaryPromise.then((async JR => {
          if (!this._isModuleAvailable() && !RR.jsModule) {
            if (!uR.url) throw new Error("Draco codec module is not available");
            await BJ.h.LoadBabylonScriptAsync(uR.url)
          }
          return await this._createModuleAsync(JR, RR.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((RR => {
          RR.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Ey() {
      const RR = RR => !!RR && "object" === typeof RR;
      for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
      return GR.reduce(((JR, GR) => {
        const yR = Object.keys(GR);
        for (const tR of yR) {
          const yR = JR[tR],
            uR = GR[tR];
          Array.isArray(yR) && Array.isArray(uR) ? JR[tR] = yR.concat(uR) : RR(yR) && RR(uR) ? JR[tR] = Ey(yR, uR) : JR[tR] = uR
        }
        return JR
      }), {})
    }

    function Yy(RR) {
      return RR === IR.l.PositionKind ? "POSITION" : RR === IR.l.NormalKind ? "NORMAL" : RR === IR.l.ColorKind ? "COLOR" : RR.startsWith(IR.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const ky = {
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
    class Qy extends dy {
      static get DefaultAvailable() {
        return !!((RR = Qy.DefaultConfiguration).wasmUrl && (RR.wasmBinary || RR.wasmBinaryUrl) && "object" === typeof WebAssembly || RR.fallbackUrl);
        var RR
      }
      static get Default() {
        return Qy._Default ?? (Qy._Default = new Qy), Qy._Default
      }
      static ResetDefault(RR) {
        Qy._Default && (RR || Qy._Default.dispose(), Qy._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(RR, JR) {
        return {
          module: await (JR || DracoEncoderModule)({
            wasmBinary: RR
          })
        }
      }
      _getWorkerContent() {
        return `${Sy}(${jy})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qy.DefaultConfiguration)
      }
      async _encodeAsync(RR, JR, GR) {
        const yR = GR ? Ey(ky, GR) : ky;
        if (this._workerPoolPromise) {
          const GR = await this._workerPoolPromise;
          return await new Promise(((tR, uR) => {
            GR.push(((GR, ZR) => {
              const qR = RR => {
                  GR.removeEventListener("error", qR), GR.removeEventListener("message", iR), uR(RR), ZR()
                },
                iR = RR => {
                  "encodeMeshSuccess" === RR.data.id ? (GR.removeEventListener("error", qR), GR.removeEventListener("message", iR), tR(RR.data.encodedMeshData), ZR()) : "encodeMeshError" === RR.data.id && (GR.removeEventListener("error", qR), GR.removeEventListener("message", iR), uR(new Error(RR.data.errorMessage)), ZR())
                };
              GR.addEventListener("error", qR), GR.addEventListener("message", iR);
              const fR = [];
              for (const JR of RR) fR.push(JR.data.buffer);
              JR && fR.push(JR.buffer), GR.postMessage({
                id: "encodeMesh",
                attributes: RR,
                indices: JR,
                options: yR
              }, fR)
            }))
          }))
        }
        if (this._modulePromise) {
          return Sy((await this._modulePromise).module, RR, JR, yR)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(RR, JR) {
        if (0 == RR.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        RR instanceof Xy.e && RR.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === JR?.method && (gR.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), JR.method = "MESH_SEQUENTIAL_ENCODING");
        const GR = function(RR) {
            let JR = RR.NuR(void 0, !0);
            return !JR || JR instanceof Uint32Array || JR instanceof Uint16Array || (JR = ((0, OG.b)(JR, JR.length) ? Uint32Array : Uint16Array).from(JR)), JR
          }(RR),
          yR = function(RR, JR) {
            const GR = [];
            for (const yR of RR.getVerticesDataKinds()) {
              if (JR?.includes(yR)) {
                if (yR === IR.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const tR = RR.getVertexBuffer(yR),
                uR = tR.getSize(),
                ZR = (0, OG.l)(tR.getData(), uR, tR.type, tR.byteOffset, tR.byteStride, RR.getTotalVertices(), !0);
              GR.push({
                kind: yR,
                dracoName: Yy(yR),
                size: uR,
                data: ZR
              })
            }
            return GR
          }(RR, JR?.excludedAttributes);
        return await this._encodeAsync(yR, GR, JR)
      }
    }
    Qy.DefaultConfiguration = {
      wasmUrl: `${BJ.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${BJ.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${BJ.h._DefaultCdnUrl}/draco_encoder.js`
    }, Qy._Default = null;
    const Fy = "KHR_draco_mesh_compression";
    class Ty {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(RR) {
        this.name = Fy, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === RR.options.meshCompressionMethod && Qy.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(RR, JR, GR) {
        if (!this.enabled) return;
        if (4 !== RR.mode && 5 !== RR.mode) return void gR.c.Warn("Cannot compress primitive with mode " + RR.mode + ".");
        const yR = [],
          tR = [];
        let uR = null;
        if (void 0 !== RR.indices) {
          const ZR = GR[RR.indices],
            qR = JR.getBufferView(ZR);
          uR = JR.getData(qR).slice(), yR.push(qR), tR.push(ZR)
        }
        const ZR = [];
        for (const [VR, KR] of Object.entries(RR.attributes)) {
          const RR = GR[KR],
            uR = JR.getBufferView(RR),
            iR = zG(RR.type),
            fR = (0, OG.l)(JR.getData(uR), iR, RR.componentType, RR.byteOffset || 0, uR.byteStride || (0, OG.k)(RR.componentType) * iR, RR.count, !0);
          ZR.push({
            kind: VR,
            dracoName: (qR = VR, "POSITION" === qR ? "POSITION" : "NORMAL" === qR ? "NORMAL" : qR.startsWith("COLOR") ? "COLOR" : qR.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: zG(RR.type),
            data: fR
          }), yR.push(uR), tR.push(RR)
        }
        var qR;
        const iR = {
            method: RR.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          fR = Qy.Default._encodeAsync(ZR, uR, iR).then((GR => {
            const uR = {
                bufferView: -1,
                attributes: GR.attributeIds
              },
              ZR = JR.createBufferView(GR.data);
            JR.setBufferView(uR, ZR);
            for (const RR of yR) this._bufferViewsUsed.add(RR);
            for (const RR of tR) this._accessorsUsed.add(RR);
            RR.extensions || (RR.extensions = {}), RR.extensions[Fy] = uR
          })).catch((RR => {
            gR.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + RR.message)
          }));
        this._encodePromises.push(fR), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(RR) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((JR => {
          RR.getPropertiesWithBufferView(JR).every((RR => this._accessorsUsed.has(RR))) && RR.removeBufferView(JR)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let sy = !1;

    function hy() {
      sy || (sy = !0, Dy.RegisterExtension(Fy, (RR => new Ty(RR))))
    }
    hy();
    var Rt = GR(53562);
    const Jt = "KHR_lights_punctual",
      Gt = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      yt = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      tt = PR.r.Backward();
    class ut {
      constructor(RR) {
        this.name = Jt, this.enabled = !0, this.required = !1, this._exporter = RR
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Jt] = this._lights
      }
      async postExportNodeAsync(RR, JR, GR, yR, tR) {
        return await new Promise((uR => {
          if (!(GR instanceof Vy.c)) return void uR(JR);
          const ZR = GR.getTypeID() == Vy.c.LIGHTTYPEID_POINTLIGHT ? "point" : GR.getTypeID() == Vy.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : GR.getTypeID() == Vy.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!ZR || !(GR instanceof Rt.d)) return gR.c.Warn(`${RR}: Light ${GR.name} is not supported in ${Jt}`), void uR(JR);
          if (GR.falloffType !== Vy.c.FALLOFF_GLTF && gR.c.Warn(`${RR}: Light falloff for ${GR.name} does not match the ${Jt} specification!`), !GR.position.JiR(0, 0, 0)) {
            const RR = PR.l.Fe[0].vN(GR.position);
            tR && dG(RR), JR.translation = RR.QtR()
          }
          if ("point" !== ZR) {
            const RR = GR.direction.normalizeToRef(PR.l.Fe[0]);
            tR && dG(RR);
            const yR = PR.i.FromUnitVectorsToRef(tt, RR, PR.l.Quaternion[0]);
            PR.i.IsIdentity(yR) || (JR.rotation = yR.QtR())
          }
          const qR = {
            type: ZR,
            name: GR.name,
            color: GR.diffuse.QtR(),
            intensity: GR.intensity,
            range: GR.range
          };
          if (TG(qR, Gt), "spot" === ZR) {
            const RR = GR;
            qR.spot = {
              innerConeAngle: RR.innerAngle / 2,
              outerConeAngle: RR.angle / 2
            }, TG(qR.spot, yt)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(qR);
          const iR = {
              light: this._lights.lights.length - 1
            },
            fR = GR.parent;
          if (fR && QG(GR, fR)) {
            const RR = yR.get(fR);
            if (RR) {
              const GR = this._exporter._nodes[RR];
              return kG(JR, GR), GR.extensions || (GR.extensions = {}), GR.extensions[Jt] = iR, void uR(null)
            }
          }
          JR.extensions || (JR.extensions = {}), JR.extensions[Jt] = iR, uR(JR)
        }))
      }
    }
    let Zt = !1;

    function qt() {
      Zt || (Zt = !0, Dy.RegisterExtension(Jt, (RR => new ut(RR))))
    }
    qt();
    const it = "KHR_interactivity";
    class ft {
      constructor(RR) {
        this._exporter = RR, this.name = it, this.enabled = !!RR.options.khrInteractivity, this.required = RR.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var RR, JR, GR;
        const yR = this._exporter.options.khrInteractivity;
        if (!yR) return;
        const tR = yR.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: RR => this._exporter._getNodeIndex(RR),
          getAnimationIndex: RR => this._exporter._getAnimationIndex(RR),
          getCameraIndex: RR => this._exporter._getCameraIndex(RR),
          getMaterialIndex: RR => this._exporter._getMaterialIndex(RR),
          getRootIndex: (RR, JR) => this._exporter._getRootIndex(RR, JR),
          setNodeExtension: (RR, JR, GR) => this._exporter._setNodeExtension(RR, JR, GR)
        });
        this._exporter._glTF.extensions[it] = tR;
        for (const uR of yR.additionalExtensionsUsed)(RR = this._exporter._glTF).extensionsUsed || (RR.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(uR) && this._exporter._glTF.extensionsUsed.push(uR);
        for (const uR of yR.additionalExtensionsRequired)(JR = this._exporter._glTF).extensionsUsed || (JR.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(uR) && this._exporter._glTF.extensionsUsed.push(uR), (GR = this._exporter._glTF).extensionsRequired || (GR.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(uR) && this._exporter._glTF.extensionsRequired.push(uR)
      }
    }
    let Vt = !1;

    function Kt() {
      Vt || (Vt = !0, Dy.RegisterExtension(it, (RR => new ft(RR)), 200))
    }
    Kt();
    const wt = "EXT_lights_area",
      rt = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      et = {
        aspect: 1
      },
      Lt = PR.r.Backward();
    class nt {
      constructor(RR) {
        this.name = wt, this.enabled = !0, this.required = !1, this._exporter = RR
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[wt] = this._lights
      }
      async postExportNodeAsync(RR, JR, GR, yR, tR) {
        return await new Promise((uR => {
          if (!(GR instanceof Vy.c)) return void uR(JR);
          const ZR = GR.getTypeID() == Vy.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!ZR) return gR.c.Warn(`${RR}: Light ${GR.name} is not supported in ${wt}`), void uR(JR);
          const qR = GR;
          if (qR.falloffType !== Vy.c.FALLOFF_GLTF && gR.c.Warn(`${RR}: Light falloff for ${GR.name} does not match the ${wt} specification!`), !qR.position.JiR(0, 0, 0)) {
            const RR = PR.l.Fe[0].vN(qR.position);
            tR && dG(RR), JR.translation = RR.QtR()
          }
          const iR = PR.r.Forward();
          tR && dG(iR);
          const fR = PR.i.FromUnitVectorsToRef(Lt, iR, PR.l.Quaternion[0]);
          PR.i.IsIdentity(fR) || (JR.rotation = fR.QtR());
          const VR = {
            type: ZR,
            name: qR.name,
            color: qR.diffuse.QtR(),
            intensity: qR.intensity,
            size: qR.height,
            rect: {
              aspect: qR.width / qR.height
            }
          };
          TG(VR, rt), VR.rect && TG(VR.rect, et), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(VR);
          const KR = {
              light: this._lights.lights.length - 1
            },
            wR = GR.parent;
          if (wR && QG(qR, wR)) {
            const RR = yR.get(wR);
            if (RR) {
              const GR = this._exporter._nodes[RR];
              return kG(JR, GR), GR.extensions || (GR.extensions = {}), GR.extensions[wt] = KR, void uR(null)
            }
          }
          JR.extensions || (JR.extensions = {}), JR.extensions[wt] = KR, uR(JR)
        }))
      }
    }
    let Ut = !1;

    function Wt() {
      Ut || (Ut = !0, Dy.RegisterExtension(wt, (RR => new nt(RR))))
    }
    Wt();
    const At = "KHR_materials_anisotropy";
    class Ct {
      constructor(RR) {
        this.name = At, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof XJ) {
          if (GR.anisotropy.isEnabled && !GR.anisotropy.legacy) return GR.anisotropy.texture && yR.push(GR.anisotropy.texture), yR
        } else if (GR instanceof sJ && GR.specularRoughnessAnisotropy > 0) {
          const RR = function(RR) {
            const JR = RR.specularRoughnessAnisotropyTexture,
              GR = RR.geometryTangentTexture;
            return `${JR&&JR.getInternalTexture()?JR.getInternalTexture().uniqueId:"NoStrength"}_${GR&&GR.getInternalTexture()?GR.getInternalTexture().uniqueId:"NoTangent"}`
          }(GR);
          if (this._anisoTexturesMap[RR]) yR.push(this._anisoTexturesMap[RR]);
          else {
            const JR = await async function(RR) {
              const JR = RR.jH(),
                GR = RR.specularRoughnessAnisotropyTexture,
                yR = RR.geometryTangentTexture;
              return GR || yR ? await ZG("AnisotropyTexture", fG(yR ? qG(yR, 0) : iG(1), yR ? qG(yR, 1) : iG(0), GR ? qG(GR, 0) : iG(1)), JR) : null
            }(GR);
            JR && (yR.push(JR), this._anisoTexturesMap[RR] = JR)
          }
          return yR
        }
        return []
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          var yR;
          if (GR instanceof XJ) {
            if (!GR.anisotropy.isEnabled || GR.anisotropy.legacy) return void RR(JR);
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const yR = this._exporter._materialExporter.getTextureInfo(GR.anisotropy.texture),
              tR = {
                anisotropyStrength: GR.anisotropy.intensity,
                anisotropyRotation: GR.anisotropy.angle,
                anisotropyTexture: yR ?? void 0
              };
            null !== tR.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[At] = tR
          } else if (GR instanceof sJ && GR.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            let tR = GR.specularRoughnessTexture;
            GR._useRoughnessFromMetallicTextureGreen && (tR = GR.baseMetalnessTexture);
            const uR = this._anisoTexturesMap[GR.id];
            if (!tR && !uR) {
              let yR = GR.specularRoughness,
                tR = GR.specularRoughnessAnisotropy;
              if (!GR._useGltfStyleAnisotropy) {
                const RR = function(RR, JR) {
                  const GR = RR * RR,
                    yR = GR * Math.sqrt(2 / (1 + (1 - JR) * (1 - JR))),
                    tR = (1 - JR) * yR;
                  return {
                    newBaseRoughness: Math.sqrt(tR),
                    newAnisotropyStrength: Math.min(Math.sqrt((yR - GR) / Math.max(1 - GR, 1e-4)), 1)
                  }
                }(GR.specularRoughness, GR.specularRoughnessAnisotropy);
                yR = RR.newBaseRoughness, tR = RR.newAnisotropyStrength
              }
              JR.pbrMetallicRoughness && (JR.pbrMetallicRoughness.roughnessFactor = yR);
              const uR = {
                anisotropyStrength: tR,
                anisotropyRotation: GR.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return JR.extensions[At] = uR, RR(JR)
            }
            const ZR = uR ? this._exporter._materialExporter.getTextureInfo(uR) : null,
              qR = {
                anisotropyStrength: GR.specularRoughnessAnisotropy,
                anisotropyRotation: GR.geometryTangentAngle,
                anisotropyTexture: ZR || void 0,
                extensions: {}
              };
            GR._useGltfStyleAnisotropy || (JR.extensions.KHR_materials_openpbr = {}, (yR = this._exporter._glTF).extensionsUsed || (yR.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[At] = qR
          }
          RR(JR)
        }))
      }
    }
    let Xt = !1;

    function Mt() {
      Xt || (Xt = !0, Dy.RegisterExtension(At, (RR => new Ct(RR))))
    }
    Mt();
    const Bt = "KHR_materials_clearcoat";

    function lt(RR, JR) {
      const GR = new vR.f(JR.name, JR.jH());
      return GR._texture = RR, GR.coordinatesIndex = JR.coordinatesIndex, JR instanceof vR.f && (GR.uOffset = JR.uOffset, GR.vOffset = JR.vOffset, GR.uScale = JR.uScale, GR.vScale = JR.vScale, GR.wAng = JR.wAng), GR.wrapU = JR.wrapU, GR.wrapV = JR.wrapV, GR
    }
    class pt {
      constructor(RR) {
        this.name = Bt, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = RR
      }
      dispose() {
        for (const RR of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[RR].dispose()
        }
        this._mergedTexturesMap = {};
        for (const RR of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[RR].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof XJ) {
          if (GR.clearCoat.isEnabled) return GR.clearCoat.texture && yR.push(GR.clearCoat.texture), !GR.clearCoat.useRoughnessFromMainTexture && GR.clearCoat.textureRoughness && yR.push(GR.clearCoat.textureRoughness), GR.clearCoat.bumpTexture && yR.push(GR.clearCoat.bumpTexture), yR
        } else if (GR instanceof sJ && GR.coatWeight > 0) {
          let RR = !1;
          if (GR.coatWeightTexture ? GR.coatRoughnessTexture ? GR._useCoatRoughnessFromGreenChannel && GR.coatWeightTexture.getInternalTexture() === GR.coatRoughnessTexture.getInternalTexture() ? (yR.push(GR.coatWeightTexture), yR.push(GR.coatRoughnessTexture)) : RR = !0 : yR.push(GR.coatWeightTexture) : GR.coatRoughnessTexture && (GR._useCoatRoughnessFromGreenChannel ? yR.push(GR.coatRoughnessTexture) : RR = !0), RR) {
            const RR = function(RR) {
              const JR = RR.coatWeightTexture,
                GR = JR && JR.getInternalTexture() ? JR.getInternalTexture().uniqueId : "NoCoat",
                yR = RR.coatRoughnessTexture;
              return `${GR}_${yR&&yR.getInternalTexture()?yR.getInternalTexture().uniqueId:"NoRoughness"}`
            }(GR);
            if (!this._cachedInternalTexturesMap[RR]) {
              const JR = await async function(RR) {
                const JR = RR.jH(),
                  GR = RR.coatWeightTexture,
                  yR = RR.coatRoughnessTexture;
                return GR || yR ? (await ZG("CoatTexture", fG(GR ? qG(GR, 0) : iG(1), yR ? qG(yR, RR._useCoatRoughnessFromGreenChannel ? 1 : 0) : iG(1)), JR)).getInternalTexture() : null
              }(GR);
              JR && (this._cachedInternalTexturesMap[RR] = JR)
            }
            this._cachedInternalTexturesMap[RR] && (GR.coatWeightTexture && (this._mergedTexturesMap[GR.coatWeightTexture.uniqueId] = lt(this._cachedInternalTexturesMap[RR], GR.coatWeightTexture), yR.push(this._mergedTexturesMap[GR.coatWeightTexture.uniqueId])), GR.coatRoughnessTexture && (this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId] = lt(this._cachedInternalTexturesMap[RR], GR.coatRoughnessTexture), yR.push(this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId])))
          }
          return GR.geometryCoatNormalTexture && yR.push(GR.geometryCoatNormalTexture), yR
        }
        return []
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof XJ) {
            if (!GR.clearCoat.isEnabled) return void RR(JR);
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const yR = this._exporter._materialExporter.getTextureInfo(GR.clearCoat.texture);
            let tR;
            tR = GR.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(GR.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(GR.clearCoat.textureRoughness), GR.clearCoat.isTintEnabled && BJ.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${GR.name}`), GR.clearCoat.remapF0OnInterfaceChange && BJ.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${GR.name}`);
            const uR = this._exporter._materialExporter.getTextureInfo(GR.clearCoat.bumpTexture),
              ZR = {
                clearcoatFactor: GR.clearCoat.intensity,
                clearcoatTexture: yR ?? void 0,
                clearcoatRoughnessFactor: GR.clearCoat.roughness,
                clearcoatRoughnessTexture: tR ?? void 0,
                clearcoatNormalTexture: uR ?? void 0
              };
            null === ZR.clearcoatTexture && null === ZR.clearcoatRoughnessTexture && null === ZR.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[Bt] = ZR
          } else if (GR instanceof sJ) {
            if (0 == GR.coatWeight) return void RR(JR);
            let yR, tR, uR, ZR;
            this._wasUsed = !0, JR.extensions = JR.extensions || {}, GR.coatWeightTexture && (yR = this._mergedTexturesMap[GR.coatWeightTexture.uniqueId], tR = this._exporter._materialExporter.getTextureInfo(yR)), GR.coatRoughnessTexture && (uR = this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId], ZR = this._exporter._materialExporter.getTextureInfo(uR)), GR.coatColorTexture && BJ.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${GR.name}`);
            const qR = this._exporter._materialExporter.getTextureInfo(GR.geometryCoatNormalTexture),
              iR = {
                clearcoatFactor: GR.coatWeight,
                clearcoatTexture: tR ?? void 0,
                clearcoatRoughnessFactor: GR.coatRoughness,
                clearcoatRoughnessTexture: ZR ?? void 0,
                clearcoatNormalTexture: qR ?? void 0
              };
            null === iR.clearcoatTexture && null === iR.clearcoatRoughnessTexture && null === iR.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[Bt] = iR
          }
          RR(JR)
        }))
      }
    }
    let gt = !1;

    function bt() {
      gt || (gt = !0, Dy.RegisterExtension(Bt, (RR => new pt(RR))))
    }
    bt();
    const vt = "KHR_materials_coat";

    function Ot(RR) {
      const JR = RR.coatRoughnessAnisotropyTexture,
        GR = RR.geometryCoatTangentTexture;
      return `${JR&&JR.getInternalTexture()?JR.getInternalTexture().uniqueId:"NoStrength"}_${GR&&GR.getInternalTexture()?GR.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function xt(RR, JR) {
      const GR = new vR.f(JR.name, JR.jH());
      return GR._texture = RR, GR.coordinatesIndex = JR.coordinatesIndex, JR instanceof vR.f && (GR.uOffset = JR.uOffset, GR.vOffset = JR.vOffset, GR.uScale = JR.uScale, GR.vScale = JR.vScale, GR.wAng = JR.wAng), GR.wrapU = JR.wrapU, GR.wrapV = JR.wrapV, GR
    }
    class Nt {
      constructor(RR) {
        this.name = vt, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = RR
      }
      dispose() {
        for (const RR of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[RR].dispose()
        }
        this._mergedTexturesMap = {};
        for (const RR of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[RR].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof XJ) {
          if (GR.clearCoat.isEnabled) return GR.clearCoat.texture && yR.push(GR.clearCoat.texture), !GR.clearCoat.useRoughnessFromMainTexture && GR.clearCoat.textureRoughness && yR.push(GR.clearCoat.textureRoughness), GR.clearCoat.bumpTexture && yR.push(GR.clearCoat.bumpTexture), GR.clearCoat.tintTexture && yR.push(GR.clearCoat.tintTexture), yR
        } else if (GR instanceof sJ && GR.coatWeight > 0) {
          let RR = !1;
          if (GR.coatWeightTexture ? GR.coatRoughnessTexture ? GR._useCoatRoughnessFromGreenChannel && GR.coatWeightTexture.getInternalTexture() === GR.coatRoughnessTexture.getInternalTexture() ? (yR.push(GR.coatWeightTexture), yR.push(GR.coatRoughnessTexture)) : RR = !0 : yR.push(GR.coatWeightTexture) : GR.coatRoughnessTexture && (GR._useCoatRoughnessFromGreenChannel ? yR.push(GR.coatRoughnessTexture) : RR = !0), RR) {
            const RR = function(RR) {
              const JR = RR.coatWeightTexture,
                GR = JR && JR.getInternalTexture() ? JR.getInternalTexture().uniqueId : "NoCoat",
                yR = RR.coatRoughnessTexture;
              return `${GR}_${yR&&yR.getInternalTexture()?yR.getInternalTexture().uniqueId:"NoRoughness"}`
            }(GR);
            if (!this._cachedInternalTexturesMap[RR]) {
              const JR = await async function(RR) {
                const JR = RR.jH(),
                  GR = RR.coatWeightTexture,
                  yR = RR.coatRoughnessTexture;
                return GR || yR ? (await ZG("CoatTexture", fG(GR ? qG(GR, 0) : iG(1), yR ? qG(yR, RR._useCoatRoughnessFromGreenChannel ? 1 : 0) : iG(1)), JR)).getInternalTexture() : null
              }(GR);
              JR && (this._cachedInternalTexturesMap[RR] = JR)
            }
            this._cachedInternalTexturesMap[RR] && (GR.coatWeightTexture && (this._mergedTexturesMap[GR.coatWeightTexture.uniqueId] = xt(this._cachedInternalTexturesMap[RR], GR.coatWeightTexture), yR.push(this._mergedTexturesMap[GR.coatWeightTexture.uniqueId])), GR.coatRoughnessTexture && (this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId] = xt(this._cachedInternalTexturesMap[RR], GR.coatRoughnessTexture), yR.push(this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId])))
          }
          if (GR.geometryCoatNormalTexture && yR.push(GR.geometryCoatNormalTexture), GR.coatColorTexture && yR.push(GR.coatColorTexture), GR.coatRoughnessAnisotropy > 0) {
            const RR = Ot(GR);
            if (this._mergedTexturesMap[RR]) yR.push(this._mergedTexturesMap[RR]);
            else {
              const JR = await async function(RR) {
                const JR = RR.jH(),
                  GR = RR.coatRoughnessAnisotropyTexture,
                  yR = RR.geometryCoatTangentTexture;
                return GR || yR ? await ZG("AnisotropyTexture", fG(yR ? qG(yR, 0) : iG(1), yR ? qG(yR, 1) : iG(0), GR ? qG(GR, 0) : iG(1)), JR) : null
              }(GR);
              JR && (yR.push(JR), this._mergedTexturesMap[RR] = JR)
            }
            return yR
          }
          return yR
        }
        return []
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          var yR;
          if (GR instanceof XJ) {
            if (!GR.clearCoat.isEnabled) return void RR(JR);
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const yR = this._exporter._materialExporter.getTextureInfo(GR.clearCoat.texture);
            let tR, uR;
            tR = GR.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(GR.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(GR.clearCoat.textureRoughness), GR.clearCoat.isTintEnabled && (uR = this._exporter._materialExporter.getTextureInfo(GR.clearCoat.tintTexture));
            const ZR = this._exporter._materialExporter.getTextureInfo(GR.clearCoat.bumpTexture),
              qR = GR.clearCoat.indexOfRefraction,
              iR = {
                coatFactor: GR.clearCoat.intensity,
                coatTexture: yR ?? void 0,
                coatRoughnessFactor: GR.clearCoat.roughness,
                coatRoughnessTexture: tR ?? void 0,
                coatNormalTexture: ZR ?? void 0,
                coatColorFactor: GR.clearCoat.tintColor.QtR(),
                coatColorTexture: uR ?? void 0,
                coatIor: 1.5 !== qR ? qR : void 0
              };
            null === iR.coatTexture && null === iR.coatRoughnessTexture && null === iR.coatRoughnessTexture && null === iR.coatColorTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[vt] = iR
          } else if (GR instanceof sJ) {
            if (0 == GR.coatWeight) return void RR(JR);
            let tR, uR, ZR, qR;
            this._wasUsed = !0, JR.extensions = JR.extensions || {}, GR.coatWeightTexture && (tR = this._mergedTexturesMap[GR.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[GR.coatWeightTexture.uniqueId] : GR.coatWeightTexture, uR = this._exporter._materialExporter.getTextureInfo(tR)), GR.coatRoughnessTexture && (ZR = this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[GR.coatRoughnessTexture.uniqueId] : GR.coatRoughnessTexture, qR = this._exporter._materialExporter.getTextureInfo(ZR));
            const iR = this._exporter._materialExporter.getTextureInfo(GR.geometryCoatNormalTexture),
              fR = this._exporter._materialExporter.getTextureInfo(GR.coatColorTexture),
              VR = GR.coatIor,
              KR = GR.coatDarkening,
              wR = GR.coatRoughnessTexture,
              rR = Ot(GR),
              eR = this._mergedTexturesMap[rR];
            let aR, LR = 0,
              nR = 0;
            if (GR.coatRoughnessAnisotropy > 0) {
              if (wR || eR) {
                const RR = eR ? this._exporter._materialExporter.getTextureInfo(eR) : null;
                LR = GR.coatRoughnessAnisotropy, nR = GR.geometryCoatTangentAngle, aR = RR || void 0
              } else {
                let RR = GR.coatRoughness,
                  yR = GR.coatRoughnessAnisotropy;
                if (!GR._useGltfStyleAnisotropy) {
                  const JR = function(RR, JR) {
                    const GR = RR * RR,
                      yR = GR * Math.sqrt(2 / (1 + (1 - JR) * (1 - JR))),
                      tR = (1 - JR) * yR;
                    return {
                      newBaseRoughness: Math.sqrt(tR),
                      newAnisotropyStrength: Math.min(Math.sqrt((yR - GR) / Math.max(1 - GR, 1e-4)), 1)
                    }
                  }(GR.coatRoughness, GR.coatRoughnessAnisotropy);
                  RR = JR.newBaseRoughness, yR = JR.newAnisotropyStrength
                }
                JR.pbrMetallicRoughness && (JR.pbrMetallicRoughness.roughnessFactor = RR), LR = yR, nR = GR.geometryCoatTangentAngle + .5 * Math.PI, aR = void 0
              }
              GR._useGltfStyleAnisotropy || (JR.extensions.KHR_materials_openpbr = {}, (yR = this._exporter._glTF).extensionsUsed || (yR.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const UR = {
              coatFactor: GR.coatWeight,
              coatTexture: uR ?? void 0,
              coatRoughnessFactor: GR.coatRoughness,
              coatRoughnessTexture: qR ?? void 0,
              coatNormalTexture: iR ?? void 0,
              coatColorFactor: GR.coatColor.QtR(),
              coatColorTexture: fR ?? void 0,
              coatIor: 1.5 !== VR ? VR : void 0,
              coatDarkeningFactor: 1 !== KR ? KR : void 0,
              coatAnisotropyRotation: nR,
              coatAnisotropyStrength: LR,
              coatAnisotropyTexture: aR
            };
            null === UR.coatTexture && null === UR.coatRoughnessTexture && null === UR.coatRoughnessTexture && null === UR.coatAnisotropyTexture && null === UR.coatColorTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[vt] = UR
          }
          RR(JR)
        }))
      }
    }
    let Dt = !1;

    function Ht() {
      Dt || (Dt = !0, Dy.RegisterExtension(vt, (RR => new Nt(RR))))
    }
    Ht();
    let ot = (() => {
      var RR, JR, GR, yR, tR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, gR, bR, vR, OR, xR, NR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, YR, kR, QR, FR, TR, sR, hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, VJ, KJ, wJ, rJ, eJ, aJ, LJ, nJ, UJ, WJ;
      let AJ, CJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ, hJ, RG, JG, GG, yG, tG, uG, ZG, qG, iG, fG, VG, KG, wG, rG, eG, aG, LG, nG, UG, WG, AG, CG, XG, MG, BG, lG, pG, gG, bG, vG, OG, xG, NG, DG, HG, oG, cG, PG, IG = XJ,
        mG = [],
        zG = [],
        SG = [],
        jG = [],
        dG = [],
        EG = [],
        YG = [],
        kG = [],
        QG = [],
        FG = [],
        TG = [],
        sG = [],
        hG = [],
        Ry = [],
        Jy = [],
        Gy = [],
        yy = [],
        ty = [],
        uy = [],
        Zy = [],
        qy = [],
        iy = [],
        fy = [],
        Vy = [],
        Ky = [],
        wy = [],
        ry = [],
        ey = [],
        ay = [],
        Ly = [],
        ny = [],
        Uy = [],
        Wy = [],
        Ay = [],
        Cy = [],
        Xy = [],
        My = [],
        By = [],
        ly = [],
        py = [],
        gy = [],
        by = [],
        vy = [],
        Oy = [],
        xy = [],
        Ny = [],
        Dy = [],
        Hy = [],
        oy = [],
        cy = [],
        Py = [],
        Iy = [],
        my = [],
        zy = [],
        Sy = [],
        jy = [],
        dy = [],
        Ey = [],
        Yy = [],
        ky = [],
        Qy = [],
        Fy = [],
        Ty = [],
        sy = [],
        hy = [],
        Rt = [],
        Jt = [],
        Gt = [],
        yt = [],
        tt = [],
        ut = [],
        Zt = [],
        qt = [],
        it = [],
        ft = [],
        Vt = [],
        Kt = [],
        wt = [],
        rt = [],
        et = [],
        Lt = [],
        nt = [],
        Ut = [],
        Wt = [],
        At = [],
        Ct = [],
        Xt = [],
        Mt = [],
        Bt = [],
        lt = [],
        pt = [],
        gt = [],
        bt = [],
        vt = [],
        Ot = [],
        xt = [],
        Nt = [],
        Dt = [],
        Ht = [],
        ot = [],
        ct = [],
        Pt = [],
        It = [],
        mt = [],
        zt = [],
        St = [],
        jt = [],
        dt = [],
        Et = [],
        Yt = [],
        kt = [],
        Qt = [],
        Ft = [],
        Tt = [],
        st = [],
        ht = [],
        Ru = [],
        Ju = [],
        Gu = [],
        yu = [],
        tu = [],
        uu = [],
        Zu = [],
        qu = [],
        iu = [],
        fu = [],
        Vu = [],
        Ku = [],
        wu = [],
        ru = [],
        eu = [],
        au = [],
        Lu = [];
      return RR = class extends IG {
        get directIntensity() {
          return (0, lR.e)(this, JR, "f")
        }
        set directIntensity(RR) {
          (0, lR.i)(this, JR, RR, "f")
        }
        get emissiveIntensity() {
          return (0, lR.e)(this, GR, "f")
        }
        set emissiveIntensity(RR) {
          (0, lR.i)(this, GR, RR, "f")
        }
        get environmentIntensity() {
          return (0, lR.e)(this, yR, "f")
        }
        set environmentIntensity(RR) {
          (0, lR.i)(this, yR, RR, "f")
        }
        get specularIntensity() {
          return (0, lR.e)(this, tR, "f")
        }
        set specularIntensity(RR) {
          (0, lR.i)(this, tR, RR, "f")
        }
        get disableBumpMap() {
          return (0, lR.e)(this, ZR, "f")
        }
        set disableBumpMap(RR) {
          (0, lR.i)(this, ZR, RR, "f")
        }
        get albedoTexture() {
          return (0, lR.e)(this, qR, "f")
        }
        set albedoTexture(RR) {
          (0, lR.i)(this, qR, RR, "f")
        }
        get baseWeightTexture() {
          return (0, lR.e)(this, iR, "f")
        }
        set baseWeightTexture(RR) {
          (0, lR.i)(this, iR, RR, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, lR.e)(this, fR, "f")
        }
        set baseDiffuseRoughnessTexture(RR) {
          (0, lR.i)(this, fR, RR, "f")
        }
        get ambientTexture() {
          return (0, lR.e)(this, VR, "f")
        }
        set ambientTexture(RR) {
          (0, lR.i)(this, VR, RR, "f")
        }
        get ambientTextureStrength() {
          return (0, lR.e)(this, KR, "f")
        }
        set ambientTextureStrength(RR) {
          (0, lR.i)(this, KR, RR, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, lR.e)(this, wR, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(RR) {
          (0, lR.i)(this, wR, RR, "f")
        }
        get opacityTexture() {
          return (0, lR.e)(this, rR, "f")
        }
        set opacityTexture(RR) {
          (0, lR.i)(this, rR, RR, "f")
        }
        get reflectionTexture() {
          return (0, lR.e)(this, eR, "f")
        }
        set reflectionTexture(RR) {
          (0, lR.i)(this, eR, RR, "f")
        }
        get emissiveTexture() {
          return (0, lR.e)(this, aR, "f")
        }
        set emissiveTexture(RR) {
          (0, lR.i)(this, aR, RR, "f")
        }
        get reflectivityTexture() {
          return (0, lR.e)(this, LR, "f")
        }
        set reflectivityTexture(RR) {
          (0, lR.i)(this, LR, RR, "f")
        }
        get metallicTexture() {
          return (0, lR.e)(this, nR, "f")
        }
        set metallicTexture(RR) {
          (0, lR.i)(this, nR, RR, "f")
        }
        get metallic() {
          return (0, lR.e)(this, UR, "f")
        }
        set metallic(RR) {
          (0, lR.i)(this, UR, RR, "f")
        }
        get roughness() {
          return (0, lR.e)(this, WR, "f")
        }
        set roughness(RR) {
          (0, lR.i)(this, WR, RR, "f")
        }
        get metallicF0Factor() {
          return (0, lR.e)(this, AR, "f")
        }
        set metallicF0Factor(RR) {
          (0, lR.i)(this, AR, RR, "f")
        }
        get metallicReflectanceColor() {
          return (0, lR.e)(this, CR, "f")
        }
        set metallicReflectanceColor(RR) {
          (0, lR.i)(this, CR, RR, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, lR.e)(this, XR, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(RR) {
          (0, lR.i)(this, XR, RR, "f")
        }
        get metallicReflectanceTexture() {
          return (0, lR.e)(this, MR, "f")
        }
        set metallicReflectanceTexture(RR) {
          (0, lR.i)(this, MR, RR, "f")
        }
        get reflectanceTexture() {
          return (0, lR.e)(this, BR, "f")
        }
        set reflectanceTexture(RR) {
          (0, lR.i)(this, BR, RR, "f")
        }
        get microSurfaceTexture() {
          return (0, lR.e)(this, gR, "f")
        }
        set microSurfaceTexture(RR) {
          (0, lR.i)(this, gR, RR, "f")
        }
        get bumpTexture() {
          return (0, lR.e)(this, bR, "f")
        }
        set bumpTexture(RR) {
          (0, lR.i)(this, bR, RR, "f")
        }
        get lightmapTexture() {
          return (0, lR.e)(this, vR, "f")
        }
        set lightmapTexture(RR) {
          (0, lR.i)(this, vR, RR, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(RR) {
          this.subSurface.refractionTexture = RR, RR ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, lR.e)(this, OR, "f")
        }
        set ambientColor(RR) {
          (0, lR.i)(this, OR, RR, "f")
        }
        get albedoColor() {
          return (0, lR.e)(this, xR, "f")
        }
        set albedoColor(RR) {
          (0, lR.i)(this, xR, RR, "f")
        }
        get baseWeight() {
          return (0, lR.e)(this, NR, "f")
        }
        set baseWeight(RR) {
          (0, lR.i)(this, NR, RR, "f")
        }
        get baseDiffuseRoughness() {
          return (0, lR.e)(this, HR, "f")
        }
        set baseDiffuseRoughness(RR) {
          (0, lR.i)(this, HR, RR, "f")
        }
        get reflectivityColor() {
          return (0, lR.e)(this, oR, "f")
        }
        set reflectivityColor(RR) {
          (0, lR.i)(this, oR, RR, "f")
        }
        get reflectionColor() {
          return (0, lR.e)(this, cR, "f")
        }
        set reflectionColor(RR) {
          (0, lR.i)(this, cR, RR, "f")
        }
        get emissiveColor() {
          return (0, lR.e)(this, PR, "f")
        }
        set emissiveColor(RR) {
          (0, lR.i)(this, PR, RR, "f")
        }
        get microSurface() {
          return (0, lR.e)(this, IR, "f")
        }
        set microSurface(RR) {
          (0, lR.i)(this, IR, RR, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(RR) {
          this.subSurface.indexOfRefraction = RR
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(RR) {
          this.subSurface.invertRefractionY = RR
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(RR) {
          this.subSurface.linkRefractionWithTransparency = RR, RR && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, lR.e)(this, mR, "f")
        }
        set useLightmapAsShadowmap(RR) {
          (0, lR.i)(this, mR, RR, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, lR.e)(this, zR, "f")
        }
        set useAlphaFromAlbedoTexture(RR) {
          (0, lR.i)(this, zR, RR, "f")
        }
        get forceAlphaTest() {
          return (0, lR.e)(this, SR, "f")
        }
        set forceAlphaTest(RR) {
          (0, lR.i)(this, SR, RR, "f")
        }
        get alphaCutOff() {
          return (0, lR.e)(this, jR, "f")
        }
        set alphaCutOff(RR) {
          (0, lR.i)(this, jR, RR, "f")
        }
        get useSpecularOverAlpha() {
          return (0, lR.e)(this, dR, "f")
        }
        set useSpecularOverAlpha(RR) {
          (0, lR.i)(this, dR, RR, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, lR.e)(this, YR, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(RR) {
          (0, lR.i)(this, YR, RR, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, lR.e)(this, kR, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(RR) {
          (0, lR.i)(this, kR, RR, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, lR.e)(this, QR, "f")
        }
        set useRoughnessFromMetallicTextureGreen(RR) {
          (0, lR.i)(this, QR, RR, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, lR.e)(this, FR, "f")
        }
        set useMetallnessFromMetallicTextureBlue(RR) {
          (0, lR.i)(this, FR, RR, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, lR.e)(this, TR, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(RR) {
          (0, lR.i)(this, TR, RR, "f")
        }
        get useAmbientInGrayScale() {
          return (0, lR.e)(this, sR, "f")
        }
        set useAmbientInGrayScale(RR) {
          (0, lR.i)(this, sR, RR, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, lR.e)(this, hR, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(RR) {
          (0, lR.i)(this, hR, RR, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === XJ.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(RR) {
          RR !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = RR ? XJ.LIGHTFALLOFF_PHYSICAL : XJ.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === XJ.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(RR) {
          RR !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = RR ? XJ.LIGHTFALLOFF_GLTF : XJ.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, lR.e)(this, RJ, "f")
        }
        set useRadianceOverAlpha(RR) {
          (0, lR.i)(this, RJ, RR, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, lR.e)(this, JJ, "f")
        }
        set useObjectSpaceNormalMap(RR) {
          (0, lR.i)(this, JJ, RR, "f")
        }
        get useParallax() {
          return (0, lR.e)(this, GJ, "f")
        }
        set useParallax(RR) {
          (0, lR.i)(this, GJ, RR, "f")
        }
        get useParallaxOcclusion() {
          return (0, lR.e)(this, yJ, "f")
        }
        set useParallaxOcclusion(RR) {
          (0, lR.i)(this, yJ, RR, "f")
        }
        get parallaxScaleBias() {
          return (0, lR.e)(this, tJ, "f")
        }
        set parallaxScaleBias(RR) {
          (0, lR.i)(this, tJ, RR, "f")
        }
        get disableLighting() {
          return (0, lR.e)(this, uJ, "f")
        }
        set disableLighting(RR) {
          (0, lR.i)(this, uJ, RR, "f")
        }
        get forceIrradianceInFragment() {
          return (0, lR.e)(this, ZJ, "f")
        }
        set forceIrradianceInFragment(RR) {
          (0, lR.i)(this, ZJ, RR, "f")
        }
        get maxSimultaneousLights() {
          return (0, lR.e)(this, qJ, "f")
        }
        set maxSimultaneousLights(RR) {
          (0, lR.i)(this, qJ, RR, "f")
        }
        get invertNormalMapX() {
          return (0, lR.e)(this, iJ, "f")
        }
        set invertNormalMapX(RR) {
          (0, lR.i)(this, iJ, RR, "f")
        }
        get invertNormalMapY() {
          return (0, lR.e)(this, fJ, "f")
        }
        set invertNormalMapY(RR) {
          (0, lR.i)(this, fJ, RR, "f")
        }
        get twoSidedLighting() {
          return (0, lR.e)(this, VJ, "f")
        }
        set twoSidedLighting(RR) {
          (0, lR.i)(this, VJ, RR, "f")
        }
        get useAlphaFresnel() {
          return (0, lR.e)(this, KJ, "f")
        }
        set useAlphaFresnel(RR) {
          (0, lR.i)(this, KJ, RR, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, lR.e)(this, wJ, "f")
        }
        set useLinearAlphaFresnel(RR) {
          (0, lR.i)(this, wJ, RR, "f")
        }
        get environmentBRDFTexture() {
          return (0, lR.e)(this, rJ, "f")
        }
        set environmentBRDFTexture(RR) {
          (0, lR.i)(this, rJ, RR, "f")
        }
        get forceNormalForward() {
          return (0, lR.e)(this, eJ, "f")
        }
        set forceNormalForward(RR) {
          (0, lR.i)(this, eJ, RR, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, lR.e)(this, aJ, "f")
        }
        set enableSpecularAntiAliasing(RR) {
          (0, lR.i)(this, aJ, RR, "f")
        }
        get useHorizonOcclusion() {
          return (0, lR.e)(this, LJ, "f")
        }
        set useHorizonOcclusion(RR) {
          (0, lR.i)(this, LJ, RR, "f")
        }
        get useRadianceOcclusion() {
          return (0, lR.e)(this, nJ, "f")
        }
        set useRadianceOcclusion(RR) {
          (0, lR.i)(this, nJ, RR, "f")
        }
        get unlit() {
          return (0, lR.e)(this, UJ, "f")
        }
        set unlit(RR) {
          (0, lR.i)(this, UJ, RR, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, lR.e)(this, WJ, "f")
        }
        set applyDecalMapAfterDetailMap(RR) {
          (0, lR.i)(this, WJ, RR, "f")
        }
        constructor(uR, pR) {
          super(uR, pR, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), JR.set(this, ((0, lR.m)(this, mG), (0, lR.m)(this, zG, 1))), GR.set(this, ((0, lR.m)(this, SG), (0, lR.m)(this, jG, 1))), yR.set(this, ((0, lR.m)(this, dG), (0, lR.m)(this, EG, 1))), tR.set(this, ((0, lR.m)(this, YG), (0, lR.m)(this, kG, 1))), ZR.set(this, ((0, lR.m)(this, QG), (0, lR.m)(this, FG, !1))), qR.set(this, ((0, lR.m)(this, TG), (0, lR.m)(this, sG, void 0))), iR.set(this, ((0, lR.m)(this, hG), (0, lR.m)(this, Ry, void 0))), fR.set(this, ((0, lR.m)(this, Jy), (0, lR.m)(this, Gy, void 0))), VR.set(this, ((0, lR.m)(this, yy), (0, lR.m)(this, ty, void 0))), KR.set(this, ((0, lR.m)(this, uy), (0, lR.m)(this, Zy, 1))), wR.set(this, ((0, lR.m)(this, qy), (0, lR.m)(this, iy, RR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), rR.set(this, ((0, lR.m)(this, fy), (0, lR.m)(this, Vy, void 0))), eR.set(this, ((0, lR.m)(this, Ky), (0, lR.m)(this, wy, void 0))), aR.set(this, ((0, lR.m)(this, ry), (0, lR.m)(this, ey, void 0))), LR.set(this, ((0, lR.m)(this, ay), (0, lR.m)(this, Ly, void 0))), nR.set(this, ((0, lR.m)(this, ny), (0, lR.m)(this, Uy, void 0))), UR.set(this, ((0, lR.m)(this, Wy), (0, lR.m)(this, Ay, void 0))), WR.set(this, ((0, lR.m)(this, Cy), (0, lR.m)(this, Xy, void 0))), AR.set(this, ((0, lR.m)(this, My), (0, lR.m)(this, By, 1))), CR.set(this, ((0, lR.m)(this, ly), (0, lR.m)(this, py, ER.d.White()))), XR.set(this, ((0, lR.m)(this, gy), (0, lR.m)(this, by, !1))), MR.set(this, ((0, lR.m)(this, vy), (0, lR.m)(this, Oy, void 0))), BR.set(this, ((0, lR.m)(this, xy), (0, lR.m)(this, Ny, void 0))), gR.set(this, ((0, lR.m)(this, Dy), (0, lR.m)(this, Hy, void 0))), bR.set(this, ((0, lR.m)(this, oy), (0, lR.m)(this, cy, void 0))), vR.set(this, ((0, lR.m)(this, Py), (0, lR.m)(this, Iy, void 0))), OR.set(this, ((0, lR.m)(this, my), (0, lR.m)(this, zy, new ER.d(0, 0, 0)))), xR.set(this, ((0, lR.m)(this, Sy), (0, lR.m)(this, jy, new ER.d(1, 1, 1)))), NR.set(this, ((0, lR.m)(this, dy), (0, lR.m)(this, Ey, 1))), HR.set(this, ((0, lR.m)(this, Yy), (0, lR.m)(this, ky, void 0))), oR.set(this, ((0, lR.m)(this, Qy), (0, lR.m)(this, Fy, new ER.d(1, 1, 1)))), cR.set(this, ((0, lR.m)(this, Ty), (0, lR.m)(this, sy, new ER.d(1, 1, 1)))), PR.set(this, ((0, lR.m)(this, hy), (0, lR.m)(this, Rt, new ER.d(0, 0, 0)))), IR.set(this, ((0, lR.m)(this, Jt), (0, lR.m)(this, Gt, 1))), mR.set(this, ((0, lR.m)(this, yt), (0, lR.m)(this, tt, !1))), zR.set(this, ((0, lR.m)(this, ut), (0, lR.m)(this, Zt, !1))), SR.set(this, ((0, lR.m)(this, qt), (0, lR.m)(this, it, !1))), jR.set(this, ((0, lR.m)(this, ft), (0, lR.m)(this, Vt, .4))), dR.set(this, ((0, lR.m)(this, Kt), (0, lR.m)(this, wt, !0))), YR.set(this, ((0, lR.m)(this, rt), (0, lR.m)(this, et, !1))), kR.set(this, ((0, lR.m)(this, Lt), (0, lR.m)(this, nt, !0))), QR.set(this, ((0, lR.m)(this, Ut), (0, lR.m)(this, Wt, !1))), FR.set(this, ((0, lR.m)(this, At), (0, lR.m)(this, Ct, !1))), TR.set(this, ((0, lR.m)(this, Xt), (0, lR.m)(this, Mt, !1))), sR.set(this, ((0, lR.m)(this, Bt), (0, lR.m)(this, lt, !1))), hR.set(this, ((0, lR.m)(this, pt), (0, lR.m)(this, gt, !1))), RJ.set(this, ((0, lR.m)(this, bt), (0, lR.m)(this, vt, !0))), JJ.set(this, ((0, lR.m)(this, Ot), (0, lR.m)(this, xt, !1))), GJ.set(this, ((0, lR.m)(this, Nt), (0, lR.m)(this, Dt, !1))), yJ.set(this, ((0, lR.m)(this, Ht), (0, lR.m)(this, ot, !1))), tJ.set(this, ((0, lR.m)(this, ct), (0, lR.m)(this, Pt, .05))), uJ.set(this, ((0, lR.m)(this, It), (0, lR.m)(this, mt, !1))), ZJ.set(this, ((0, lR.m)(this, zt), (0, lR.m)(this, St, !1))), qJ.set(this, ((0, lR.m)(this, jt), (0, lR.m)(this, dt, 4))), iJ.set(this, ((0, lR.m)(this, Et), (0, lR.m)(this, Yt, !1))), fJ.set(this, ((0, lR.m)(this, kt), (0, lR.m)(this, Qt, !1))), VJ.set(this, ((0, lR.m)(this, Ft), (0, lR.m)(this, Tt, !1))), KJ.set(this, ((0, lR.m)(this, st), (0, lR.m)(this, ht, !1))), wJ.set(this, ((0, lR.m)(this, Ru), (0, lR.m)(this, Ju, !1))), rJ.set(this, ((0, lR.m)(this, Gu), (0, lR.m)(this, yu, null))), eJ.set(this, ((0, lR.m)(this, tu), (0, lR.m)(this, uu, !1))), aJ.set(this, ((0, lR.m)(this, Zu), (0, lR.m)(this, qu, !1))), LJ.set(this, ((0, lR.m)(this, iu), (0, lR.m)(this, fu, !0))), nJ.set(this, ((0, lR.m)(this, Vu), (0, lR.m)(this, Ku, !0))), UJ.set(this, ((0, lR.m)(this, wu), (0, lR.m)(this, ru, !1))), WJ.set(this, ((0, lR.m)(this, eu), (0, lR.m)(this, au, !1))), (0, lR.m)(this, Lu), this._environmentBRDFTexture = DR(this.jH())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(JR) {
          let GR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tR = MJ.c.Clone((() => new RR(JR, this.jH())), this, {
            cloneTexturesOnlyOnce: GR
          });
          return tR.id = JR, tR.name = JR, this.stencil.copyTo(tR.stencil), this._clonePlugins(tR, yR), tR
        }
        serialize() {
          const RR = super.serialize();
          return RR.customType = "BABYLON.PBRMaterial", RR
        }
        static Parse(JR, GR, yR) {
          const tR = MJ.c.Parse((() => new RR(JR.name, GR)), JR, GR, yR);
          return JR.stencil && tR.stencil.parse(JR.stencil, GR, yR), uR.d._ParsePlugins(JR, tR, GR, yR), JR.clearCoat && tR.clearCoat.parse(JR.clearCoat, GR, yR), JR.anisotropy && tR.anisotropy.parse(JR.anisotropy, GR, yR), JR.brdf && tR.brdf.parse(JR.brdf, GR, yR), JR.sheen && tR.sheen.parse(JR.sheen, GR, yR), JR.subSurface && tR.subSurface.parse(JR.subSurface, GR, yR), JR.iridescence && tR.iridescence.parse(JR.iridescence, GR, yR), tR
        }
      }, JR = new WeakMap, GR = new WeakMap, yR = new WeakMap, tR = new WeakMap, ZR = new WeakMap, qR = new WeakMap, iR = new WeakMap, fR = new WeakMap, VR = new WeakMap, KR = new WeakMap, wR = new WeakMap, rR = new WeakMap, eR = new WeakMap, aR = new WeakMap, LR = new WeakMap, nR = new WeakMap, UR = new WeakMap, WR = new WeakMap, AR = new WeakMap, CR = new WeakMap, XR = new WeakMap, MR = new WeakMap, BR = new WeakMap, gR = new WeakMap, bR = new WeakMap, vR = new WeakMap, OR = new WeakMap, xR = new WeakMap, NR = new WeakMap, HR = new WeakMap, oR = new WeakMap, cR = new WeakMap, PR = new WeakMap, IR = new WeakMap, mR = new WeakMap, zR = new WeakMap, SR = new WeakMap, jR = new WeakMap, dR = new WeakMap, YR = new WeakMap, kR = new WeakMap, QR = new WeakMap, FR = new WeakMap, TR = new WeakMap, sR = new WeakMap, hR = new WeakMap, RJ = new WeakMap, JJ = new WeakMap, GJ = new WeakMap, yJ = new WeakMap, tJ = new WeakMap, uJ = new WeakMap, ZJ = new WeakMap, qJ = new WeakMap, iJ = new WeakMap, fJ = new WeakMap, VJ = new WeakMap, KJ = new WeakMap, wJ = new WeakMap, rJ = new WeakMap, eJ = new WeakMap, aJ = new WeakMap, LJ = new WeakMap, nJ = new WeakMap, UJ = new WeakMap, WJ = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(IG[Symbol.metadata] ?? null) : void 0;
        AJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], CJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], BJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], lJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], pJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], gJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], bJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], vJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], OJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], xJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], NJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], DJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], HJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], oJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], cJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], PJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], IJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], mJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], zJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], SJ = [(0, pR.k)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], jJ = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], dJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], EJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], kJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], QJ = [(0, pR.C)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty", null)], FJ = [(0, pR.k)("ambient"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], TJ = [(0, pR.k)("albedo"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], sJ = [(0, pR.H)("baseWeight"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], hJ = [(0, pR.H)("baseDiffuseRoughness"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], RG = [(0, pR.k)("reflectivity"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], JG = [(0, pR.k)("reflection"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], GG = [(0, pR.k)("emissive"), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], yG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], tG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], uG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], ZG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], qG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], iG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], fG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], VG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], KG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], wG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], rG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], eG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], aG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], LG = [(0, pR.H)()], nG = [(0, pR.H)()], UG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], WG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], AG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], CG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], XG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], MG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsLightsDirty")], BG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], lG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsLightsDirty")], pG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], gG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], bG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], vG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], OG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], xG = [(0, pR.d)("_markAllSubMeshesAsTexturesDirty")], NG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], DG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], HG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], oG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsTexturesDirty")], cG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], PG = [(0, pR.H)(), (0, pR.d)("_markAllSubMeshesAsMiscDirty")], (0, lR.l)(RR, null, AJ, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "directIntensity" in RR,
            get: RR => RR.directIntensity,
            set: (RR, JR) => {
              RR.directIntensity = JR
            }
          },
          metadata: JR
        }, zG, SG), (0, lR.l)(RR, null, CJ, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "emissiveIntensity" in RR,
            get: RR => RR.emissiveIntensity,
            set: (RR, JR) => {
              RR.emissiveIntensity = JR
            }
          },
          metadata: JR
        }, jG, dG), (0, lR.l)(RR, null, BJ, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "environmentIntensity" in RR,
            get: RR => RR.environmentIntensity,
            set: (RR, JR) => {
              RR.environmentIntensity = JR
            }
          },
          metadata: JR
        }, EG, YG), (0, lR.l)(RR, null, lJ, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "specularIntensity" in RR,
            get: RR => RR.specularIntensity,
            set: (RR, JR) => {
              RR.specularIntensity = JR
            }
          },
          metadata: JR
        }, kG, QG), (0, lR.l)(RR, null, pJ, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: RR => "disableBumpMap" in RR,
            get: RR => RR.disableBumpMap,
            set: (RR, JR) => {
              RR.disableBumpMap = JR
            }
          },
          metadata: JR
        }, FG, TG), (0, lR.l)(RR, null, gJ, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "albedoTexture" in RR,
            get: RR => RR.albedoTexture,
            set: (RR, JR) => {
              RR.albedoTexture = JR
            }
          },
          metadata: JR
        }, sG, hG), (0, lR.l)(RR, null, bJ, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "baseWeightTexture" in RR,
            get: RR => RR.baseWeightTexture,
            set: (RR, JR) => {
              RR.baseWeightTexture = JR
            }
          },
          metadata: JR
        }, Ry, Jy), (0, lR.l)(RR, null, vJ, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "baseDiffuseRoughnessTexture" in RR,
            get: RR => RR.baseDiffuseRoughnessTexture,
            set: (RR, JR) => {
              RR.baseDiffuseRoughnessTexture = JR
            }
          },
          metadata: JR
        }, Gy, yy), (0, lR.l)(RR, null, OJ, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "ambientTexture" in RR,
            get: RR => RR.ambientTexture,
            set: (RR, JR) => {
              RR.ambientTexture = JR
            }
          },
          metadata: JR
        }, ty, uy), (0, lR.l)(RR, null, xJ, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: RR => "ambientTextureStrength" in RR,
            get: RR => RR.ambientTextureStrength,
            set: (RR, JR) => {
              RR.ambientTextureStrength = JR
            }
          },
          metadata: JR
        }, Zy, qy), (0, lR.l)(RR, null, NJ, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: RR => "ambientTextureImpactOnAnalyticalLights" in RR,
            get: RR => RR.ambientTextureImpactOnAnalyticalLights,
            set: (RR, JR) => {
              RR.ambientTextureImpactOnAnalyticalLights = JR
            }
          },
          metadata: JR
        }, iy, fy), (0, lR.l)(RR, null, DJ, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "opacityTexture" in RR,
            get: RR => RR.opacityTexture,
            set: (RR, JR) => {
              RR.opacityTexture = JR
            }
          },
          metadata: JR
        }, Vy, Ky), (0, lR.l)(RR, null, HJ, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "reflectionTexture" in RR,
            get: RR => RR.reflectionTexture,
            set: (RR, JR) => {
              RR.reflectionTexture = JR
            }
          },
          metadata: JR
        }, wy, ry), (0, lR.l)(RR, null, oJ, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "emissiveTexture" in RR,
            get: RR => RR.emissiveTexture,
            set: (RR, JR) => {
              RR.emissiveTexture = JR
            }
          },
          metadata: JR
        }, ey, ay), (0, lR.l)(RR, null, cJ, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "reflectivityTexture" in RR,
            get: RR => RR.reflectivityTexture,
            set: (RR, JR) => {
              RR.reflectivityTexture = JR
            }
          },
          metadata: JR
        }, Ly, ny), (0, lR.l)(RR, null, PJ, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "metallicTexture" in RR,
            get: RR => RR.metallicTexture,
            set: (RR, JR) => {
              RR.metallicTexture = JR
            }
          },
          metadata: JR
        }, Uy, Wy), (0, lR.l)(RR, null, IJ, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: RR => "metallic" in RR,
            get: RR => RR.metallic,
            set: (RR, JR) => {
              RR.metallic = JR
            }
          },
          metadata: JR
        }, Ay, Cy), (0, lR.l)(RR, null, mJ, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "roughness" in RR,
            get: RR => RR.roughness,
            set: (RR, JR) => {
              RR.roughness = JR
            }
          },
          metadata: JR
        }, Xy, My), (0, lR.l)(RR, null, zJ, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: RR => "metallicF0Factor" in RR,
            get: RR => RR.metallicF0Factor,
            set: (RR, JR) => {
              RR.metallicF0Factor = JR
            }
          },
          metadata: JR
        }, By, ly), (0, lR.l)(RR, null, SJ, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "metallicReflectanceColor" in RR,
            get: RR => RR.metallicReflectanceColor,
            set: (RR, JR) => {
              RR.metallicReflectanceColor = JR
            }
          },
          metadata: JR
        }, py, gy), (0, lR.l)(RR, null, jJ, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "useOnlyMetallicFromMetallicReflectanceTexture" in RR,
            get: RR => RR.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (RR, JR) => {
              RR.useOnlyMetallicFromMetallicReflectanceTexture = JR
            }
          },
          metadata: JR
        }, by, vy), (0, lR.l)(RR, null, dJ, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "metallicReflectanceTexture" in RR,
            get: RR => RR.metallicReflectanceTexture,
            set: (RR, JR) => {
              RR.metallicReflectanceTexture = JR
            }
          },
          metadata: JR
        }, Oy, xy), (0, lR.l)(RR, null, EJ, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "reflectanceTexture" in RR,
            get: RR => RR.reflectanceTexture,
            set: (RR, JR) => {
              RR.reflectanceTexture = JR
            }
          },
          metadata: JR
        }, Ny, Dy), (0, lR.l)(RR, null, YJ, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "microSurfaceTexture" in RR,
            get: RR => RR.microSurfaceTexture,
            set: (RR, JR) => {
              RR.microSurfaceTexture = JR
            }
          },
          metadata: JR
        }, Hy, oy), (0, lR.l)(RR, null, kJ, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "bumpTexture" in RR,
            get: RR => RR.bumpTexture,
            set: (RR, JR) => {
              RR.bumpTexture = JR
            }
          },
          metadata: JR
        }, cy, Py), (0, lR.l)(RR, null, QJ, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "lightmapTexture" in RR,
            get: RR => RR.lightmapTexture,
            set: (RR, JR) => {
              RR.lightmapTexture = JR
            }
          },
          metadata: JR
        }, Iy, my), (0, lR.l)(RR, null, FJ, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "ambientColor" in RR,
            get: RR => RR.ambientColor,
            set: (RR, JR) => {
              RR.ambientColor = JR
            }
          },
          metadata: JR
        }, zy, Sy), (0, lR.l)(RR, null, TJ, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "albedoColor" in RR,
            get: RR => RR.albedoColor,
            set: (RR, JR) => {
              RR.albedoColor = JR
            }
          },
          metadata: JR
        }, jy, dy), (0, lR.l)(RR, null, sJ, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: RR => "baseWeight" in RR,
            get: RR => RR.baseWeight,
            set: (RR, JR) => {
              RR.baseWeight = JR
            }
          },
          metadata: JR
        }, Ey, Yy), (0, lR.l)(RR, null, hJ, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: RR => "baseDiffuseRoughness" in RR,
            get: RR => RR.baseDiffuseRoughness,
            set: (RR, JR) => {
              RR.baseDiffuseRoughness = JR
            }
          },
          metadata: JR
        }, ky, Qy), (0, lR.l)(RR, null, RG, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "reflectivityColor" in RR,
            get: RR => RR.reflectivityColor,
            set: (RR, JR) => {
              RR.reflectivityColor = JR
            }
          },
          metadata: JR
        }, Fy, Ty), (0, lR.l)(RR, null, JG, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "reflectionColor" in RR,
            get: RR => RR.reflectionColor,
            set: (RR, JR) => {
              RR.reflectionColor = JR
            }
          },
          metadata: JR
        }, sy, hy), (0, lR.l)(RR, null, GG, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: RR => "emissiveColor" in RR,
            get: RR => RR.emissiveColor,
            set: (RR, JR) => {
              RR.emissiveColor = JR
            }
          },
          metadata: JR
        }, Rt, Jt), (0, lR.l)(RR, null, yG, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: RR => "microSurface" in RR,
            get: RR => RR.microSurface,
            set: (RR, JR) => {
              RR.microSurface = JR
            }
          },
          metadata: JR
        }, Gt, yt), (0, lR.l)(RR, null, tG, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: RR => "useLightmapAsShadowmap" in RR,
            get: RR => RR.useLightmapAsShadowmap,
            set: (RR, JR) => {
              RR.useLightmapAsShadowmap = JR
            }
          },
          metadata: JR
        }, tt, ut), (0, lR.l)(RR, null, uG, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAlphaFromAlbedoTexture" in RR,
            get: RR => RR.useAlphaFromAlbedoTexture,
            set: (RR, JR) => {
              RR.useAlphaFromAlbedoTexture = JR
            }
          },
          metadata: JR
        }, Zt, qt), (0, lR.l)(RR, null, ZG, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: RR => "forceAlphaTest" in RR,
            get: RR => RR.forceAlphaTest,
            set: (RR, JR) => {
              RR.forceAlphaTest = JR
            }
          },
          metadata: JR
        }, it, ft), (0, lR.l)(RR, null, qG, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: RR => "alphaCutOff" in RR,
            get: RR => RR.alphaCutOff,
            set: (RR, JR) => {
              RR.alphaCutOff = JR
            }
          },
          metadata: JR
        }, Vt, Kt), (0, lR.l)(RR, null, iG, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "useSpecularOverAlpha" in RR,
            get: RR => RR.useSpecularOverAlpha,
            set: (RR, JR) => {
              RR.useSpecularOverAlpha = JR
            }
          },
          metadata: JR
        }, wt, rt), (0, lR.l)(RR, null, fG, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "useMicroSurfaceFromReflectivityMapAlpha" in RR,
            get: RR => RR.useMicroSurfaceFromReflectivityMapAlpha,
            set: (RR, JR) => {
              RR.useMicroSurfaceFromReflectivityMapAlpha = JR
            }
          },
          metadata: JR
        }, et, Lt), (0, lR.l)(RR, null, VG, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRoughnessFromMetallicTextureAlpha" in RR,
            get: RR => RR.useRoughnessFromMetallicTextureAlpha,
            set: (RR, JR) => {
              RR.useRoughnessFromMetallicTextureAlpha = JR
            }
          },
          metadata: JR
        }, nt, Ut), (0, lR.l)(RR, null, KG, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRoughnessFromMetallicTextureGreen" in RR,
            get: RR => RR.useRoughnessFromMetallicTextureGreen,
            set: (RR, JR) => {
              RR.useRoughnessFromMetallicTextureGreen = JR
            }
          },
          metadata: JR
        }, Wt, At), (0, lR.l)(RR, null, wG, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: RR => "useMetallnessFromMetallicTextureBlue" in RR,
            get: RR => RR.useMetallnessFromMetallicTextureBlue,
            set: (RR, JR) => {
              RR.useMetallnessFromMetallicTextureBlue = JR
            }
          },
          metadata: JR
        }, Ct, Xt), (0, lR.l)(RR, null, rG, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAmbientOcclusionFromMetallicTextureRed" in RR,
            get: RR => RR.useAmbientOcclusionFromMetallicTextureRed,
            set: (RR, JR) => {
              RR.useAmbientOcclusionFromMetallicTextureRed = JR
            }
          },
          metadata: JR
        }, Mt, Bt), (0, lR.l)(RR, null, eG, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAmbientInGrayScale" in RR,
            get: RR => RR.useAmbientInGrayScale,
            set: (RR, JR) => {
              RR.useAmbientInGrayScale = JR
            }
          },
          metadata: JR
        }, lt, pt), (0, lR.l)(RR, null, aG, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAutoMicroSurfaceFromReflectivityMap" in RR,
            get: RR => RR.useAutoMicroSurfaceFromReflectivityMap,
            set: (RR, JR) => {
              RR.useAutoMicroSurfaceFromReflectivityMap = JR
            }
          },
          metadata: JR
        }, gt, bt), (0, lR.l)(RR, null, LG, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: RR => "usePhysicalLightFalloff" in RR,
            get: RR => RR.usePhysicalLightFalloff
          },
          metadata: JR
        }, null, mG), (0, lR.l)(RR, null, nG, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: RR => "useGLTFLightFalloff" in RR,
            get: RR => RR.useGLTFLightFalloff
          },
          metadata: JR
        }, null, mG), (0, lR.l)(RR, null, UG, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRadianceOverAlpha" in RR,
            get: RR => RR.useRadianceOverAlpha,
            set: (RR, JR) => {
              RR.useRadianceOverAlpha = JR
            }
          },
          metadata: JR
        }, vt, Ot), (0, lR.l)(RR, null, WG, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: RR => "useObjectSpaceNormalMap" in RR,
            get: RR => RR.useObjectSpaceNormalMap,
            set: (RR, JR) => {
              RR.useObjectSpaceNormalMap = JR
            }
          },
          metadata: JR
        }, xt, Nt), (0, lR.l)(RR, null, AG, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: RR => "useParallax" in RR,
            get: RR => RR.useParallax,
            set: (RR, JR) => {
              RR.useParallax = JR
            }
          },
          metadata: JR
        }, Dt, Ht), (0, lR.l)(RR, null, CG, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: RR => "useParallaxOcclusion" in RR,
            get: RR => RR.useParallaxOcclusion,
            set: (RR, JR) => {
              RR.useParallaxOcclusion = JR
            }
          },
          metadata: JR
        }, ot, ct), (0, lR.l)(RR, null, XG, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: RR => "parallaxScaleBias" in RR,
            get: RR => RR.parallaxScaleBias,
            set: (RR, JR) => {
              RR.parallaxScaleBias = JR
            }
          },
          metadata: JR
        }, Pt, It), (0, lR.l)(RR, null, MG, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: RR => "disableLighting" in RR,
            get: RR => RR.disableLighting,
            set: (RR, JR) => {
              RR.disableLighting = JR
            }
          },
          metadata: JR
        }, mt, zt), (0, lR.l)(RR, null, BG, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: RR => "forceIrradianceInFragment" in RR,
            get: RR => RR.forceIrradianceInFragment,
            set: (RR, JR) => {
              RR.forceIrradianceInFragment = JR
            }
          },
          metadata: JR
        }, St, jt), (0, lR.l)(RR, null, lG, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: RR => "maxSimultaneousLights" in RR,
            get: RR => RR.maxSimultaneousLights,
            set: (RR, JR) => {
              RR.maxSimultaneousLights = JR
            }
          },
          metadata: JR
        }, dt, Et), (0, lR.l)(RR, null, pG, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: RR => "invertNormalMapX" in RR,
            get: RR => RR.invertNormalMapX,
            set: (RR, JR) => {
              RR.invertNormalMapX = JR
            }
          },
          metadata: JR
        }, Yt, kt), (0, lR.l)(RR, null, gG, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: RR => "invertNormalMapY" in RR,
            get: RR => RR.invertNormalMapY,
            set: (RR, JR) => {
              RR.invertNormalMapY = JR
            }
          },
          metadata: JR
        }, Qt, Ft), (0, lR.l)(RR, null, bG, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: RR => "twoSidedLighting" in RR,
            get: RR => RR.twoSidedLighting,
            set: (RR, JR) => {
              RR.twoSidedLighting = JR
            }
          },
          metadata: JR
        }, Tt, st), (0, lR.l)(RR, null, vG, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: RR => "useAlphaFresnel" in RR,
            get: RR => RR.useAlphaFresnel,
            set: (RR, JR) => {
              RR.useAlphaFresnel = JR
            }
          },
          metadata: JR
        }, ht, Ru), (0, lR.l)(RR, null, OG, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: RR => "useLinearAlphaFresnel" in RR,
            get: RR => RR.useLinearAlphaFresnel,
            set: (RR, JR) => {
              RR.useLinearAlphaFresnel = JR
            }
          },
          metadata: JR
        }, Ju, Gu), (0, lR.l)(RR, null, xG, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: RR => "environmentBRDFTexture" in RR,
            get: RR => RR.environmentBRDFTexture,
            set: (RR, JR) => {
              RR.environmentBRDFTexture = JR
            }
          },
          metadata: JR
        }, yu, tu), (0, lR.l)(RR, null, NG, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: RR => "forceNormalForward" in RR,
            get: RR => RR.forceNormalForward,
            set: (RR, JR) => {
              RR.forceNormalForward = JR
            }
          },
          metadata: JR
        }, uu, Zu), (0, lR.l)(RR, null, DG, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: RR => "enableSpecularAntiAliasing" in RR,
            get: RR => RR.enableSpecularAntiAliasing,
            set: (RR, JR) => {
              RR.enableSpecularAntiAliasing = JR
            }
          },
          metadata: JR
        }, qu, iu), (0, lR.l)(RR, null, HG, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: RR => "useHorizonOcclusion" in RR,
            get: RR => RR.useHorizonOcclusion,
            set: (RR, JR) => {
              RR.useHorizonOcclusion = JR
            }
          },
          metadata: JR
        }, fu, Vu), (0, lR.l)(RR, null, oG, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: RR => "useRadianceOcclusion" in RR,
            get: RR => RR.useRadianceOcclusion,
            set: (RR, JR) => {
              RR.useRadianceOcclusion = JR
            }
          },
          metadata: JR
        }, Ku, wu), (0, lR.l)(RR, null, cG, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: RR => "unlit" in RR,
            get: RR => RR.unlit,
            set: (RR, JR) => {
              RR.unlit = JR
            }
          },
          metadata: JR
        }, ru, eu), (0, lR.l)(RR, null, PG, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: RR => "applyDecalMapAfterDetailMap" in RR,
            get: RR => RR.applyDecalMapAfterDetailMap,
            set: (RR, JR) => {
              RR.applyDecalMapAfterDetailMap = JR
            }
          },
          metadata: JR
        }, au, Lu), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR.PBRMATERIAL_OPAQUE = XJ.PBRMATERIAL_OPAQUE, RR.PBRMATERIAL_ALPHATEST = XJ.PBRMATERIAL_ALPHATEST, RR.PBRMATERIAL_ALPHABLEND = XJ.PBRMATERIAL_ALPHABLEND, RR.PBRMATERIAL_ALPHATESTANDBLEND = XJ.PBRMATERIAL_ALPHATESTANDBLEND, RR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = XJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, RR
    })();
    const ct = "KHR_materials_diffuse_transmission";

    function Pt(RR, JR) {
      const GR = JR.subSurface;
      let yR = null;
      return GR.translucencyIntensityTexture ? yR = GR.translucencyIntensityTexture : GR.thicknessTexture && GR.useMaskFromThicknessTexture && (yR = GR.thicknessTexture), yR && !GR.useGltfStyleTextures ? (gR.c.Warn(`${RR}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${JR.name}`, 1), null) : yR
    }
    class It {
      constructor(RR) {
        this.name = ct, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof ot && this._isExtensionEnabled(GR)) {
          const JR = Pt(RR, GR);
          return JR && yR.push(JR), GR.subSurface.translucencyColorTexture && yR.push(GR.subSurface.translucencyColorTexture), yR
        }
        return yR
      }
      _isExtensionEnabled(RR) {
        if (RR.unlit) return !1;
        const JR = RR.subSurface;
        return !!JR.isTranslucencyEnabled && (!RR.unlit && !JR.useAlbedoToTintTranslucency && JR.useGltfStyleTextures && 1 === JR.volumeIndexOfRefraction && 0 === JR.minimumThickness && 0 === JR.maximumThickness)
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((yR => {
          if (GR instanceof ot && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            const yR = GR.subSurface,
              tR = Pt(RR, GR),
              uR = 0 == yR.translucencyIntensity ? void 0 : yR.translucencyIntensity,
              ZR = this._exporter._materialExporter.getTextureInfo(tR) ?? void 0,
              qR = !yR.translucencyColor || yR.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : yR.translucencyColor.QtR(),
              iR = this._exporter._materialExporter.getTextureInfo(yR.translucencyColorTexture) ?? void 0,
              fR = {
                diffuseTransmissionFactor: uR,
                diffuseTransmissionTexture: ZR,
                diffuseTransmissionColorFactor: qR,
                diffuseTransmissionColorTexture: iR
              };
            (ZR || iR) && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions = JR.extensions || {}, JR.extensions[ct] = fR
          }
          yR(JR)
        }))
      }
    }
    let mt = !1;

    function zt() {
      mt || (mt = !0, Dy.RegisterExtension(ct, (RR => new It(RR))))
    }
    zt();
    const St = "KHR_materials_dispersion";
    class jt {
      constructor() {
        this.name = St, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(RR) {
        if (RR.unlit) return !1;
        const JR = RR.subSurface;
        return !(!JR.isRefractionEnabled && !JR.isDispersionEnabled)
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof ot && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            const RR = {
              dispersion: GR.subSurface.dispersion
            };
            JR.extensions = JR.extensions || {}, JR.extensions[St] = RR
          }
          RR(JR)
        }))
      }
    }
    let dt = !1;

    function Et() {
      dt || (dt = !0, Dy.RegisterExtension(St, (() => new jt)))
    }
    Et();
    const Yt = "KHR_materials_emissive_strength";
    class kt {
      constructor() {
        this.name = Yt, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(RR, JR, GR) {
        return await new Promise((RR => {
          if (!(GR instanceof ot)) return RR(JR);
          const yR = GR.emissiveColor.scale(GR.emissiveIntensity),
            tR = Math.max(...yR.QtR());
          if (tR > 1) {
            JR.emissiveFactor = yR.scale(1 / tR).QtR(), this._wasUsed = !0;
            const RR = {
              emissiveStrength: tR
            };
            JR.extensions || (JR.extensions = {}), JR.extensions[Yt] = RR
          } else JR.emissiveFactor = yR.QtR();
          return RR(JR)
        }))
      }
    }
    let Qt = !1;

    function Ft() {
      Qt || (Qt = !0, Dy.RegisterExtension(Yt, (() => new kt)))
    }
    Ft();
    const Tt = "KHR_materials_ior";
    class st {
      constructor() {
        this.name = Tt, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(RR) {
        return !RR.unlit && (RR instanceof sJ ? 1.5 != RR.specularIor : RR instanceof ot && (void 0 != RR.indexOfRefraction && 1.5 != RR.indexOfRefraction))
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof ot && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            const RR = {
              ior: GR.indexOfRefraction
            };
            JR.extensions = JR.extensions || {}, JR.extensions[Tt] = RR
          } else if (GR instanceof sJ && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            const RR = {
              ior: GR.specularIor
            };
            JR.extensions = JR.extensions || {}, JR.extensions[Tt] = RR
          }
          RR(JR)
        }))
      }
    }
    let ht = !1;

    function Ru() {
      ht || (ht = !0, Dy.RegisterExtension(Tt, (() => new st)))
    }
    Ru();
    const Ju = "KHR_materials_iridescence";
    class Gu {
      constructor(RR) {
        this.name = Ju, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof XJ) {
          if (GR.iridescence.isEnabled) return GR.iridescence.texture && yR.push(GR.iridescence.texture), GR.iridescence.thicknessTexture && GR.iridescence.thicknessTexture !== GR.iridescence.texture && yR.push(GR.iridescence.thicknessTexture), yR
        } else if (GR instanceof sJ && GR.thinFilmWeight > 0) return GR.thinFilmWeightTexture && yR.push(GR.thinFilmWeightTexture), GR.thinFilmThicknessTexture && GR.thinFilmThicknessTexture !== GR.thinFilmWeightTexture && yR.push(GR.thinFilmThicknessTexture), yR;
        return []
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof XJ) {
            if (!GR.iridescence.isEnabled) return void RR(JR);
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const yR = this._exporter._materialExporter.getTextureInfo(GR.iridescence.texture),
              tR = this._exporter._materialExporter.getTextureInfo(GR.iridescence.thicknessTexture),
              uR = {
                iridescenceFactor: GR.iridescence.intensity,
                iridescenceIor: GR.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: GR.iridescence.minimumThickness,
                iridescenceThicknessMaximum: GR.iridescence.maximumThickness,
                iridescenceTexture: yR ?? void 0,
                iridescenceThicknessTexture: tR ?? void 0
              };
            null === uR.iridescenceTexture && null === uR.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[Ju] = uR
          } else if (GR instanceof sJ) {
            if (GR.thinFilmWeight <= 0) return void RR(JR);
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const yR = this._exporter._materialExporter.getTextureInfo(GR.thinFilmWeightTexture),
              tR = this._exporter._materialExporter.getTextureInfo(GR.thinFilmThicknessTexture),
              uR = {
                iridescenceFactor: GR.thinFilmWeight,
                iridescenceIor: GR.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * GR.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * GR.thinFilmThickness,
                iridescenceTexture: yR ?? void 0,
                iridescenceThicknessTexture: tR ?? void 0
              };
            null === uR.iridescenceTexture && null === uR.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[Ju] = uR
          }
          RR(JR)
        }))
      }
    }
    let yu = !1;

    function tu() {
      yu || (yu = !0, Dy.RegisterExtension(Ju, (RR => new Gu(RR))))
    }
    tu();
    const uu = "KHR_materials_sheen";
    class Zu {
      constructor(RR) {
        this.name = uu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        return GR instanceof ot && GR.sheen.isEnabled && GR.sheen.texture ? [GR.sheen.texture] : []
      }
      async postExportMaterialAsync(RR, JR, GR) {
        return await new Promise((RR => {
          if (GR instanceof ot) {
            if (!GR.sheen.isEnabled) return void RR(JR);
            this._wasUsed = !0, null == JR.extensions && (JR.extensions = {});
            const yR = {
              sheenColorFactor: GR.sheen.color.QtR(),
              sheenRoughnessFactor: GR.sheen.roughness ?? 0
            };
            null === yR.sheenColorTexture && null === yR.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GR), GR.sheen.texture && (yR.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(GR.sheen.texture) ?? void 0), GR.sheen.textureRoughness && !GR.sheen.useRoughnessFromMainTexture ? yR.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(GR.sheen.textureRoughness) ?? void 0 : GR.sheen.texture && GR.sheen.useRoughnessFromMainTexture && (yR.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(GR.sheen.texture) ?? void 0), JR.extensions[uu] = yR
          }
          RR(JR)
        }))
      }
    }
    let qu = !1;

    function iu() {
      qu || (qu = !0, Dy.RegisterExtension(uu, (RR => new Zu(RR))))
    }
    iu();
    const fu = "KHR_materials_fuzz";

    function Vu(RR, JR) {
      const GR = new vR.f(JR.name, JR.jH());
      return GR._texture = RR, GR.coordinatesIndex = JR.coordinatesIndex, JR instanceof vR.f && (GR.uOffset = JR.uOffset, GR.vOffset = JR.vOffset, GR.uScale = JR.uScale, GR.vScale = JR.vScale, GR.wAng = JR.wAng), GR.wrapU = JR.wrapU, GR.wrapV = JR.wrapV, GR
    }
    class Ku {
      constructor(RR) {
        this.name = fu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = RR
      }
      dispose() {
        for (const RR of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[RR].dispose()
        }
        this._mergedTexturesMap = {};
        for (const RR of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[RR].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        if (GR instanceof sJ) {
          const RR = [];
          if (GR.fuzzWeight > 0) {
            GR.fuzzWeightTexture && RR.push(GR.fuzzWeightTexture);
            let JR = !1;
            if (GR.fuzzRoughnessTexture && (GR._useFuzzRoughnessFromTextureAlpha ? RR.push(GR.fuzzRoughnessTexture) : JR = !0), GR.fuzzColorTexture && !JR && RR.push(GR.fuzzColorTexture), JR) {
              const JR = function(RR) {
                const JR = RR.fuzzColorTexture,
                  GR = JR && JR.getInternalTexture() ? JR.getInternalTexture().uniqueId : "NoFuzzColor",
                  yR = RR.fuzzRoughnessTexture;
                return `FuzzColor_${GR}_FuzzRoughness_${yR&&yR.getInternalTexture()?yR.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(GR);
              if (!this._cachedInternalTexturesMap[JR]) {
                const RR = await async function(RR) {
                  const JR = RR.jH(),
                    GR = RR.fuzzColorTexture,
                    yR = RR.fuzzRoughnessTexture;
                  return GR || yR ? (await ZG("FuzzTexture", fG(GR ? qG(GR, 0) : iG(1), GR ? qG(GR, 1) : iG(1), GR ? qG(GR, 2) : iG(1), yR ? qG(yR, RR._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : iG(1)), JR)).getInternalTexture() : null
                }(GR);
                RR && (this._cachedInternalTexturesMap[JR] = RR)
              }
              this._cachedInternalTexturesMap[JR] && (GR.fuzzColorTexture && (this._mergedTexturesMap[GR.fuzzColorTexture.uniqueId] = Vu(this._cachedInternalTexturesMap[JR], GR.fuzzColorTexture), RR.push(this._mergedTexturesMap[GR.fuzzColorTexture.uniqueId])), GR.fuzzRoughnessTexture && (this._mergedTexturesMap[GR.fuzzRoughnessTexture.uniqueId] = Vu(this._cachedInternalTexturesMap[JR], GR.fuzzRoughnessTexture), RR.push(this._mergedTexturesMap[GR.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return RR
        }
        return []
      }
      async postExportMaterialAsync(RR, JR, GR) {
        return await new Promise((RR => {
          if (GR instanceof sJ) {
            if (0 == GR.fuzzWeight) return void RR(JR);
            this._wasUsed = !0, null == JR.extensions && (JR.extensions = {});
            const yR = {
              fuzzFactor: GR.fuzzWeight,
              fuzzColorFactor: GR.fuzzColor.QtR(),
              fuzzRoughnessFactor: GR.fuzzRoughness
            };
            let tR, uR;
            GR.fuzzWeightTexture && (yR.fuzzTexture = this._exporter._materialExporter.getTextureInfo(GR.fuzzWeightTexture) ?? void 0), GR.fuzzColorTexture && (tR = this._mergedTexturesMap[GR.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[GR.fuzzColorTexture.uniqueId] : GR.fuzzColorTexture, yR.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(tR) ?? void 0), GR.fuzzRoughnessTexture && (uR = this._mergedTexturesMap[GR.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[GR.fuzzRoughnessTexture.uniqueId] : GR.fuzzRoughnessTexture, yR.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(uR) ?? void 0), null === yR.fuzzColorTexture && null === yR.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[fu] = yR
          }
          RR(JR)
        }))
      }
    }
    let wu = !1;

    function ru() {
      wu || (wu = !0, Dy.RegisterExtension(fu, (RR => new Ku(RR))))
    }
    ru();
    const eu = "KHR_materials_specular";
    class au {
      constructor(RR) {
        this.name = eu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        return GR instanceof ot && this._isExtensionEnabled(GR) ? (GR.metallicReflectanceTexture && yR.push(GR.metallicReflectanceTexture), GR.reflectanceTexture && yR.push(GR.reflectanceTexture), yR) : yR
      }
      _isExtensionEnabled(RR) {
        return !RR.unlit && (void 0 != RR.metallicF0Factor && 1 != RR.metallicF0Factor || void 0 != RR.metallicReflectanceColor && !RR.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(RR))
      }
      _hasTexturesExtension(RR) {
        return null != RR.metallicReflectanceTexture || null != RR.reflectanceTexture
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          var yR;
          if (GR instanceof ot && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0, JR.extensions = JR.extensions || {};
            const RR = this._exporter._materialExporter.getTextureInfo(GR.metallicReflectanceTexture) ?? void 0,
              yR = this._exporter._materialExporter.getTextureInfo(GR.reflectanceTexture) ?? void 0,
              tR = {
                specularFactor: 1 == GR.metallicF0Factor ? void 0 : GR.metallicF0Factor,
                specularTexture: RR,
                specularColorFactor: GR.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : GR.metallicReflectanceColor.QtR(),
                specularColorTexture: yR
              };
            this._hasTexturesExtension(GR) && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[eu] = tR
          } else if (GR instanceof sJ) {
            JR.extensions = JR.extensions || {};
            const tR = this._exporter._materialExporter.getTextureInfo(GR.specularWeightTexture) ?? void 0,
              uR = this._exporter._materialExporter.getTextureInfo(GR.specularColorTexture) ?? void 0,
              ZR = 1 == GR.specularWeight ? void 0 : GR.specularWeight,
              qR = GR.specularColor.equalsFloats(1, 1, 1) ? void 0 : GR.specularColor.QtR();
            if (!uR && !tR && void 0 === ZR && void 0 === qR) return RR(JR);
            this._wasUsed = !0;
            const iR = {
                specularEdgeColorEnabled: !0
              },
              fR = {
                specularFactor: ZR,
                specularTexture: tR,
                specularColorFactor: qR,
                specularColorTexture: uR,
                extensions: {}
              };
            fR.extensions.EXT_materials_specular_edge_color = iR, (yR = this._exporter._glTF).extensionsUsed || (yR.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (tR || uR) && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[eu] = fR
          }
          RR(JR)
        }))
      }
    }
    let Lu = !1;

    function nu() {
      Lu || (Lu = !0, Dy.RegisterExtension(eu, (RR => new au(RR))))
    }
    nu();
    const Uu = "KHR_materials_transmission";
    class Wu {
      constructor(RR) {
        this.name = Uu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof ot) {
          if (this._isExtensionEnabled(GR)) return GR.subSurface.refractionIntensityTexture && GR.subSurface.useGltfStyleTextures && yR.push(GR.subSurface.refractionIntensityTexture), yR
        } else GR instanceof sJ && (GR.transmissionWeight > 0 && GR.transmissionWeightTexture && (yR.push(GR.transmissionWeightTexture), GR.transmissionColorTexture && yR.push(GR.transmissionColorTexture)), GR.subsurfaceWeight > 0 && GR.subsurfaceWeightTexture && yR.push(GR.subsurfaceWeightTexture));
        return yR
      }
      _isExtensionEnabled(RR) {
        if (RR instanceof sJ && !RR.unlit) return RR.transmissionWeight > 0 || RR.subsurfaceWeight > 0;
        if (RR instanceof ot && !RR.unlit) {
          const JR = RR.subSurface;
          return JR.isRefractionEnabled && void 0 != JR.refractionIntensity && 0 != JR.refractionIntensity || null != JR.refractionIntensityTexture && JR.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(RR, JR, GR) {
        if (!this._isExtensionEnabled(GR)) return JR;
        if (GR instanceof ot) {
          this._wasUsed = !0;
          const yR = GR.subSurface,
            tR = {
              transmissionFactor: 0 === yR.refractionIntensity ? void 0 : yR.refractionIntensity
            };
          if (yR.refractionIntensityTexture)
            if (yR.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(GR);
              const RR = this._exporter._materialExporter.getTextureInfo(yR.refractionIntensityTexture);
              RR && (tR.transmissionTexture = RR)
            } else gR.c.Warn(`${RR}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          JR.extensions || (JR.extensions = {}), JR.extensions[Uu] = tR
        } else if (GR instanceof sJ) {
          this._wasUsed = !0;
          const RR = {
            transmissionFactor: (1 - GR.transmissionWeight) * GR.subsurfaceWeight + GR.transmissionWeight
          };
          if (GR.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(GR);
            const JR = this._exporter._materialExporter.getTextureInfo(GR.transmissionWeightTexture);
            JR && (RR.transmissionTexture = JR)
          } else if (GR.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(GR);
            const JR = this._exporter._materialExporter.getTextureInfo(GR.subsurfaceWeightTexture);
            JR && (RR.transmissionTexture = JR)
          }
          if (0 == GR.transmissionDepth && (!GR.transmissionColor.equals(ER.d.White()) || GR.transmissionColorTexture) && JR.pbrMetallicRoughness && (JR.pbrMetallicRoughness.baseColorFactor || (JR.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), JR.pbrMetallicRoughness.baseColorFactor[0] *= GR.transmissionColor.r, JR.pbrMetallicRoughness.baseColorFactor[1] *= GR.transmissionColor.g, JR.pbrMetallicRoughness.baseColorFactor[2] *= GR.transmissionColor.b, GR.transmissionColorTexture && !JR.pbrMetallicRoughness.baseColorTexture)) {
            const RR = this._exporter._materialExporter.getTextureInfo(GR.transmissionColorTexture);
            RR && (JR.pbrMetallicRoughness.baseColorTexture = RR, this._exporter._materialNeedsUVsSet.add(GR))
          }
          JR.extensions || (JR.extensions = {}), JR.extensions[Uu] = RR
        }
        return JR
      }
    }
    let Au = !1;

    function Cu() {
      Au || (Au = !0, Dy.RegisterExtension(Uu, (RR => new Wu(RR))))
    }
    Cu();
    var Xu = GR(41787);
    const Mu = "KHR_materials_unlit";
    class Bu {
      constructor() {
        this.name = Mu, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          let yR = !1;
          GR instanceof ot ? yR = GR.unlit : GR instanceof Xu.e && (yR = GR.disableLighting), yR && (this._wasUsed = !0, null == JR.extensions && (JR.extensions = {}), JR.extensions[Mu] = {}), RR(JR)
        }))
      }
    }
    let lu = !1;

    function pu() {
      lu || (lu = !0, Dy.RegisterExtension(Mu, (() => new Bu)))
    }
    pu();
    const gu = "KHR_materials_volume";
    class bu {
      constructor(RR) {
        this.name = gu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof ot) {
          if (this._isExtensionEnabled(GR)) return GR.subSurface.thicknessTexture && yR.push(GR.subSurface.thicknessTexture), yR
        } else GR instanceof sJ && (GR.transmissionWeight > 0 || GR.subsurfaceWeight > 0) && GR.geometryThicknessTexture && yR.push(GR.geometryThicknessTexture);
        return yR
      }
      _isExtensionEnabled(RR) {
        if (RR.unlit) return !1;
        const JR = RR.subSurface;
        return !(!JR.isRefractionEnabled && !JR.isTranslucencyEnabled) && (void 0 != JR.maximumThickness && 0 != JR.maximumThickness || void 0 != JR.tintColorAtDistance && JR.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != JR.tintColor && JR.tintColor != ER.d.White() || this._hasTexturesExtension(RR))
      }
      _hasTexturesExtension(RR) {
        return null != RR.subSurface.thicknessTexture
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof ot && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            const RR = GR.subSurface,
              yR = {
                thicknessFactor: 0 == RR.maximumThickness ? void 0 : RR.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(RR.thicknessTexture) ?? void 0,
                attenuationDistance: RR.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : RR.tintColorAtDistance,
                attenuationColor: RR.tintColor.equalsFloats(1, 1, 1) ? void 0 : RR.tintColor.QtR()
              };
            this._hasTexturesExtension(GR) && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions = JR.extensions || {}, JR.extensions[gu] = yR
          } else if (GR instanceof sJ) {
            const RR = GR.transmissionWeight > 0 && !GR.geometryThinWalled,
              yR = GR.subsurfaceWeight > 0 && !GR.geometryThinWalled;
            if (RR || yR) {
              this._wasUsed = !0;
              const tR = GR.geometryThickness,
                uR = this._exporter._materialExporter.getTextureInfo(GR.geometryThicknessTexture) ?? void 0;
              let ZR;
              uR && this._exporter._materialNeedsUVsSet.add(GR);
              const qR = ER.d.White().QtR();
              if (RR && GR.transmissionDepth > 0) {
                const RR = 1 / GR.transmissionDepth;
                let JR = new PR.r(-Math.log(GR.transmissionColor.r) * RR, -Math.log(GR.transmissionColor.g) * RR, -Math.log(GR.transmissionColor.b) * RR);
                const yR = new PR.r(GR.transmissionScatter.r * RR, GR.transmissionScatter.g * RR, GR.transmissionScatter.b * RR),
                  tR = JR.subtract(yR),
                  uR = Math.min(tR.x, tR.y, tR.z);
                uR < 0 && (tR.x = tR.x - uR, tR.y = tR.y - uR, tR.z = tR.z - uR), JR = tR.add(yR);
                ZR = 1 / Math.max(JR.x, JR.y, JR.z), qR[0] = Math.exp(-JR.x * ZR), qR[1] = Math.exp(-JR.y * ZR), qR[2] = Math.exp(-JR.z * ZR)
              } else ZR = Number.MAX_VALUE, qR[0] = 1, qR[1] = 1, qR[2] = 1;
              let iR = 1;
              const fR = ER.d.White().QtR();
              if (yR) {
                const RR = GR.subsurfaceRadius,
                  JR = GR.subsurfaceRadiusScale,
                  yR = new PR.r(JR.r, JR.g, JR.b).multiplyByFloats(RR, RR, RR),
                  tR = new PR.r(1 / Math.max(yR.x, 1e-6), 1 / Math.max(yR.y, 1e-6), 1 / Math.max(yR.z, 1e-6));
                iR = 1 / Math.max(tR.x, tR.y, tR.z), fR[0] = Math.exp(-tR.x * iR), fR[1] = Math.exp(-tR.y * iR), fR[2] = Math.exp(-tR.z * iR)
              }
              const VR = (1 - GR.transmissionWeight) * GR.subsurfaceWeight,
                KR = VR + GR.transmissionWeight,
                wR = 1 / Math.max(KR, 1e-6),
                rR = GR.transmissionWeight * wR,
                eR = VR * wR,
                aR = qR.map(((RR, JR) => RR * rR + fR[JR] * eR)),
                LR = {
                  thicknessFactor: tR,
                  thicknessTexture: uR,
                  attenuationDistance: ZR * rR + iR * eR,
                  attenuationColor: aR
                };
              JR.extensions = JR.extensions || {}, JR.extensions[gu] = LR
            }
          }
          RR(JR)
        }))
      }
    }
    let vu = !1;

    function Ou() {
      vu || (vu = !0, Dy.RegisterExtension(gu, (RR => new bu(RR))))
    }
    Ou();
    const xu = "KHR_materials_volume_scatter";
    class Nu {
      constructor(RR) {
        this.name = xu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        return GR instanceof sJ && (GR.transmissionWeight > 0 && GR.transmissionScatterTexture && yR.push(GR.transmissionScatterTexture), GR.subsurfaceWeight > 0 && GR.subsurfaceColorTexture && yR.push(GR.subsurfaceColorTexture)), yR
      }
      _isExtensionEnabled(RR) {
        if (RR.unlit) return !1;
        const JR = RR.transmissionWeight > 0 && !RR.geometryThinWalled && RR.transmissionDepth > 0 && !RR.transmissionScatter.equals(ER.d.Black()),
          GR = RR.subsurfaceWeight > 0 && !RR.geometryThinWalled;
        return !(!JR && !GR)
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          if (GR instanceof sJ && this._isExtensionEnabled(GR)) {
            this._wasUsed = !0;
            let RR = PR.r.Zero(),
              yR = 0;
            if (GR.transmissionWeight > 0) {
              RR = function(RR) {
                const JR = new PR.r(Math.sqrt(1 - RR.x), Math.sqrt(1 - RR.y), Math.sqrt(1 - RR.z)),
                  GR = new PR.r(1, 1, 1),
                  yR = GR.subtract(JR),
                  tR = GR.subtract(new PR.r(.139, .139, .139).multiplyInPlace(JR)),
                  uR = GR.add(new PR.r(1.17, 1.17, 1.17).multiplyInPlace(JR));
                return yR.multiplyInPlace(tR).divideInPlace(uR)
              }(new PR.r(GR.transmissionScatter.r, GR.transmissionScatter.g, GR.transmissionScatter.b)), yR = GR.transmissionScatterAnisotropy
            }
            const tR = PR.r.Zero();
            let uR = 0;
            GR.subsurfaceWeight > 0 && (tR.set(GR.subsurfaceColor.r, GR.subsurfaceColor.g, GR.subsurfaceColor.b), uR = GR.subsurfaceScatterAnisotropy);
            const ZR = (1 - GR.transmissionWeight) * GR.subsurfaceWeight,
              qR = ZR + GR.transmissionWeight,
              iR = 1 / Math.max(qR, 1e-6),
              fR = GR.transmissionWeight * iR,
              VR = ZR * iR,
              KR = {
                multiscatterColorFactor: RR.multiplyByFloats(fR, fR, fR).addInPlace(tR.multiplyByFloats(VR, VR, VR)).QtR(),
                scatterAnisotropy: yR * fR + uR * VR
              };
            if (GR.subsurfaceWeight > 0 && GR.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(GR);
              const RR = this._exporter._materialExporter.getTextureInfo(GR.subsurfaceColorTexture);
              RR && (KR.multiscatterColorTexture = RR)
            } else if (GR.transmissionWeight > 0 && GR.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(GR);
              const RR = this._exporter._materialExporter.getTextureInfo(GR.transmissionScatterTexture);
              RR && (KR.multiscatterColorTexture = RR)
            }
            JR.extensions = JR.extensions || {}, JR.extensions[xu] = KR
          }
          RR(JR)
        }))
      }
    }
    let Du = !1;

    function Hu() {
      Du || (Du = !0, Dy.RegisterExtension(xu, (RR => new Nu(RR)), 101))
    }
    Hu();
    const ou = "KHR_materials_diffuse_roughness";
    class cu {
      constructor(RR) {
        this.name = ou, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(RR, JR, GR) {
        const yR = [];
        if (GR instanceof XJ) {
          if (GR._baseDiffuseRoughness) return GR._baseDiffuseRoughnessTexture && yR.push(GR._baseDiffuseRoughnessTexture), yR
        } else if (GR instanceof sJ && GR.baseDiffuseRoughness) return GR.baseDiffuseRoughnessTexture && yR.push(GR.baseDiffuseRoughnessTexture), yR;
        return []
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          let yR = null,
            tR = null;
          if (GR instanceof XJ ? (yR = GR._baseDiffuseRoughness, tR = GR._baseDiffuseRoughnessTexture) : GR instanceof sJ && (yR = GR.baseDiffuseRoughness, tR = GR.baseDiffuseRoughnessTexture), !yR) return void RR(JR);
          this._wasUsed = !0, JR.extensions = JR.extensions || {};
          const uR = {
            diffuseRoughnessFactor: yR,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(tR) ?? void 0
          };
          null !== uR.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(GR), JR.extensions[ou] = uR, RR(JR)
        }))
      }
    }
    let Pu = !1;

    function Iu() {
      Pu || (Pu = !0, Dy.RegisterExtension(ou, (RR => new cu(RR))))
    }
    Iu();
    const mu = "KHR_materials_openpbr";
    class zu {
      constructor() {
        this.name = mu, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(RR, JR, GR) {
        return new Promise((RR => {
          GR instanceof sJ && (this._wasUsed = !0, JR.extensions = JR.extensions || {}, JR.extensions[mu] = {}), RR(JR)
        }))
      }
    }
    let Su = !1;

    function ju() {
      Su || (Su = !0, Dy.RegisterExtension(mu, (() => new zu)))
    }
    ju();
    const du = "KHR_texture_transform";
    class Eu {
      constructor() {
        this.name = du, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(RR, JR, GR) {
        if (GR.jH() || BJ.h.Warn(`${RR}: "scene" is not defined for Babylon texture ${GR.name}!`), (0 !== GR.uAng || 0 !== GR.vAng) && (BJ.h.Warn(`${RR}: Texture ${GR.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== GR.uRotationCenter || 0 !== GR.vRotationCenter)) return;
        const yR = {};
        let tR = !1;
        if (0 === GR.uOffset && 0 === GR.vOffset || (yR.offset = [GR.uOffset, GR.vOffset], tR = !0), 1 === GR.uScale && 1 === GR.vScale || (yR.scale = [GR.uScale, GR.vScale], tR = !0), 0 !== GR.wAng) {
          if (0 !== GR.uRotationCenter || 0 !== GR.vRotationCenter) {
            if (GR.homogeneousRotationInUVTransform && GR.uScale !== GR.vScale) return void BJ.h.Warn(`${RR}: Texture ${GR.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${du}.`);
            BJ.h.Warn(`${RR}: Texture ${GR.name} with non-origin rotation center will be exported using an adjusted offset with ${du}.`), yR.offset = function(RR) {
              const {
                uOffset: JR,
                vOffset: GR,
                uRotationCenter: yR,
                vRotationCenter: tR,
                uScale: uR,
                vScale: ZR,
                wAng: qR
              } = RR, iR = Math.cos(qR), fR = Math.sin(qR), VR = yR * uR, KR = tR * ZR;
              return [JR + (VR * (1 - iR) + KR * fR), GR + (KR * (1 - iR) - VR * fR)]
            }(GR)
          }
          yR.rotation = -GR.wAng, tR = !0
        }
        0 !== GR.coordinatesIndex && (yR.texCoord = GR.coordinatesIndex, tR = !0), tR && (this._wasUsed = !0, JR.extensions || (JR.extensions = {}), JR.extensions[du] = yR)
      }
    }
    let Yu = !1;

    function ku() {
      Yu || (Yu = !0, Dy.RegisterExtension(du, (() => new Eu)))
    }
    ku();
    var Qu = GR(41564);
    const Fu = "KHR_texture_basisu";
    class Tu {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(RR) {
        this.name = Fu, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      postExportTexture(RR, JR) {
        const GR = this._exporter._textures[JR.index],
          yR = GR.source;
        if (void 0 === yR) return;
        const tR = this._exporter._images[yR];
        "image/ktx2" === (tR.mimeType || (0, Qu.h)(tR.uri)) && (GR.source = void 0, GR.extensions || (GR.extensions = {}), GR.extensions[Fu] = {
          source: yR
        }, this._wasUsed = !0)
      }
    }
    let su = !1;

    function hu() {
      su || (su = !0, Dy.RegisterExtension(Fu, (RR => new Tu(RR))))
    }
    hu();
    const RZ = "EXT_texture_webp";
    class JZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(RR) {
        this.name = RZ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      postExportTexture(RR, JR) {
        const GR = this._exporter._textures[JR.index],
          yR = GR.source;
        if (void 0 === yR) return;
        const tR = this._exporter._images[yR];
        "image/webp" === (tR.mimeType || (0, Qu.h)(tR.uri)) && (GR.source = void 0, GR.extensions || (GR.extensions = {}), GR.extensions[RZ] = {
          source: yR
        }, this._wasUsed = !0)
      }
    }
    let GZ = !1;

    function yZ() {
      GZ || (GZ = !0, Dy.RegisterExtension(RZ, (RR => new JZ(RR))))
    }
    yZ();
    const tZ = "EXT_texture_avif";
    class uZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(RR) {
        this.name = tZ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = RR
      }
      dispose() {}
      postExportTexture(RR, JR) {
        const GR = this._exporter._textures[JR.index],
          yR = GR.source;
        if (void 0 === yR) return;
        const tR = this._exporter._images[yR];
        "image/avif" === (tR.mimeType || (0, Qu.h)(tR.uri)) && (GR.source = void 0, GR.extensions || (GR.extensions = {}), GR.extensions[tZ] = {
          source: yR
        }, this._wasUsed = !0)
      }
    }
    let ZZ = !1;

    function qZ() {
      ZZ || (ZZ = !0, Dy.RegisterExtension(tZ, (RR => new uZ(RR))))
    }
    qZ();
    class iZ {
      static CreateSTL(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const fR = function(RR, JR, GR) {
            const tR = [3 * RR[GR], 3 * RR[GR + 1], 3 * RR[GR + 2]],
              uR = [new yR.Fe(JR[tR[0]], JR[tR[0] + 2], JR[tR[0] + 1]), new yR.Fe(JR[tR[1]], JR[tR[1] + 2], JR[tR[1] + 1]), new yR.Fe(JR[tR[2]], JR[tR[2] + 2], JR[tR[2] + 1])],
              ZR = uR[0].subtract(uR[1]),
              qR = uR[2].subtract(uR[1]);
            return {
              v: uR,
              n: yR.Fe.Cross(qR, ZR).normalize()
            }
          },
          KR = function(RR, JR, GR, yR) {
            return JR = wR(RR, JR, GR.x, yR), JR = wR(RR, JR, GR.y, yR), wR(RR, JR, GR.z, yR)
          },
          wR = function(RR, JR, GR, yR) {
            return RR.setFloat32(JR, GR, yR), JR + 4
          },
          eR = function(RR) {
            if (qR) {
              let JR = RR;
              RR instanceof rR.e && (JR = RR.IuR);
              const GR = JR.getVerticesData(VR.c.PositionKind, !0, !0);
              if (!GR) return [];
              const tR = yR.Fe.Zero();
              let uR;
              for (uR = 0; uR < GR.length; uR += 3) yR.Fe.TransformCoordinatesFromFloatsToRef(GR[uR], GR[uR + 1], GR[uR + 2], RR.computeWorldMatrix(!0), tR).toArray(GR, uR);
              return GR
            }
            return RR.getVerticesData(VR.c.PositionKind) || []
          };
        qR && (ZR = !0);
        let aR = "",
          LR = 0,
          nR = 0;
        if (tR) {
          for (let GR = 0; GR < RR.length; GR++) {
            const JR = RR[GR].NuR();
            LR += JR ? JR.length / 3 : 0
          }
          const JR = new ArrayBuffer(84 + 50 * LR);
          aR = new DataView(JR), nR += 80, aR.setUint32(nR, LR, uR), nR += 4
        } else iR || (aR = "solid stlmesh\r\n");
        for (let yR = 0; yR < RR.length; yR++) {
          const JR = RR[yR];
          !tR && iR && (aR += "solid " + JR.name + "\r\n"), !ZR && JR instanceof fy.b && JR.bakeCurrentTransformIntoVertices();
          const GR = eR(JR),
            qR = JR.NuR() || [];
          for (let RR = 0; RR < qR.length; RR += 3) {
            const JR = fR(qR, GR, RR);
            tR ? (nR = KR(aR, nR, JR.n, uR), nR = KR(aR, nR, JR.v[0], uR), nR = KR(aR, nR, JR.v[1], uR), nR = KR(aR, nR, JR.v[2], uR), nR += 2) : (aR += "\tfacet normal " + JR.n.x + " " + JR.n.y + " " + JR.n.z + "\r\n", aR += "\t\touter loop\r\n", aR += "\t\t\tvertex " + JR.v[0].x + " " + JR.v[0].y + " " + JR.v[0].z + "\r\n", aR += "\t\t\tvertex " + JR.v[1].x + " " + JR.v[1].y + " " + JR.v[1].z + "\r\n", aR += "\t\t\tvertex " + JR.v[2].x + " " + JR.v[2].y + " " + JR.v[2].z + "\r\n", aR += "\t\tendloop\r\n", aR += "\tendfacet\r\n")
          }!tR && iR && (aR += "endsolid " + name + "\r\n")
        }
        if (tR || iR || (aR += "endsolid stlmesh"), JR) {
          const RR = document.createElement("a"),
            JR = new Blob([aR], {
              type: "application/octet-stream"
            });
          RR.href = window.URL.createObjectURL(JR), RR.download = GR + ".stl", RR.click()
        }
        return aR
      }
    }

    function fZ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tR = [];
      for (let uR = 0; uR < RR.length / GR; uR++) {
        const ZR = RR[uR * GR] * (yR ? -1 : 1),
          qR = RR[uR * GR + 1],
          iR = RR[uR * GR + 2];
        tR.push(`(${ZR.toPrecision(JR.precision)}, ${qR.toPrecision(JR.precision)}, ${iR.toPrecision(JR.precision)})`)
      }
      return tR.join(", ")
    }

    function VZ(RR, JR) {
      const GR = [];
      for (let yR = 0; yR < RR.length / 2; yR++) {
        const tR = RR[2 * yR],
          uR = RR[2 * yR + 1];
        GR.push(`(${tR.toPrecision(JR.precision)}, ${(1-uR).toPrecision(JR.precision)})`)
      }
      return GR.join(", ")
    }

    function KZ(RR, JR, GR, yR) {
      const tR = RR.getVerticesData(VR.c.PositionKind),
        uR = RR.getVerticesData(VR.c.NormalKind);
      if (tR && uR) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${GR}"\n\t\tint[] faceVertexCounts = [${function(RR){const JR=RR.NuR()?.length?RR.getTotalIndices():RR.getTotalVertices();return Array(JR/3).fill(3).join(", ")}(RR)}]\n\t\tint[] faceVertexIndices = [${function(RR){const JR=RR.NuR(),GR=JR?.length??RR.getTotalVertices(),yR=[];if(null!==JR)for(let tR=0;tR<GR;tR++)yR.push(JR[tR]);else for(let tR=0;tR<GR;tR++)yR.push(tR);return yR.join(", ")}(RR)}]\n\t\tnormal3f[] normals = [${fZ(uR,JR,void 0,yR)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${fZ(tR,JR,void 0,yR)}]\n        ${function(RR,JR){let GR="";for(let tR=0;tR<4;tR++){const yR=tR>0?tR:"",uR=RR.getVerticesData(VR.c.UVKind+(yR?yR+1:""));uR&&(GR+=`\n\t\ttexCoord2f[] primvars:st${yR} = [${VZ(uR,JR)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const yR=RR.getVerticesData(VR.c.ColorKind);return yR&&(GR+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        fZ(yR, JR, yR.length / RR.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),GR}(RR,JR)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function wZ(RR, JR, GR, yR) {
      return `\n        def "Geometry"\n        {\n        ${KZ(RR,JR,GR,yR)}\n        }\n        `
    }

    function rZ(RR) {
      let JR = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return JR += RR, fflate.strToU8(JR)
    }

    function eZ(RR) {
      const JR = RR.m;
      return `( ${aZ(JR,0)}, ${aZ(JR,4)}, ${aZ(JR,8)}, ${aZ(JR,12)} )`
    }

    function aZ(RR, JR) {
      return `(${RR[JR+0]}, ${RR[JR+1]}, ${RR[JR+2]}, ${RR[JR+3]})`
    }

    function LZ(RR, JR) {
      const GR = "Object_" + RR.uniqueId,
        yR = eZ(JR);
      return `def Xform "${GR}" (\n\tprepend references = @./geometries/Geometry_${RR.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${yR}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${RR.material.uniqueId}>\n}\n\n`
    }

    function nZ(RR) {
      switch (RR) {
        case MR.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case MR.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case MR.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function UZ(RR) {
      return `(${RR.x}, ${RR.y})`
    }

    function WZ(RR) {
      return `(${RR.r}, ${RR.g}, ${RR.b})`
    }

    function AZ(RR) {
      return "image/jpeg" === RR || "image/png" === RR
    }

    function CZ(RR, JR, GR, tR, uR, ZR) {
      const qR = RR.getInternalTexture().uniqueId + "_" + RR.invertY,
        fR = RR.mimeType || (0, iR.d)(RR.getInternalTexture()?.url ?? ""),
        VR = AZ(fR) ? fR : "image/png",
        KR = "image/jpeg" === VR ? "jpg" : "png";
      uR[qR] = {
        texture: RR,
        mimeType: VR,
        ext: KR
      };
      const wR = RR.coordinatesIndex > 0 ? "st" + RR.coordinatesIndex : "st",
        rR = new yR.Vector2(RR.uScale, RR.vScale),
        eR = new yR.Vector2(RR.uOffset, RR.vOffset),
        aR = RR.wAng,
        LR = Math.sin(aR),
        nR = Math.cos(aR);
      return eR.y = 1 - eR.y - rR.y, eR.x += LR * rR.x, eR.y += (1 - nR) * rR.y, `\n    def Shader "PrimvarReader_${GR}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${wR}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${GR}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${JR.uniqueId}/PrimvarReader_${GR}.outputs:result>\n        float inputs:rotation = ${(aR*(180/Math.PI)).toFixed(ZR.precision)}\n        float2 inputs:scale = ${UZ(rR)}\n        float2 inputs:translation = ${UZ(eR)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${RR.uniqueId}_${GR}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${qR}.${KR}@\n        float2 inputs:st.connect = </Root/Materials/Material_${JR.uniqueId}/Transform2d_${GR}.outputs:result>\n        ${tR?"float4 inputs:scale = "+function(RR){return`(${RR.r}, ${RR.g}, ${RR.b}, 1.0)`}(tR):""}\n        token inputs:sourceColorSpace = "${RR.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${nZ(RR.wrapU)}"\n        token inputs:wrapT = "${nZ(RR.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${JR.needAlphaBlending()||JR.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function XZ(RR, JR, GR) {
      const yR = "\t\t\t",
        tR = [],
        uR = [],
        {
          diffuseMap: ZR,
          diffuse: qR,
          alphaCutOff: iR,
          emissiveMap: fR,
          emissive: VR,
          normalMap: KR,
          roughnessMap: wR,
          roughnessChannel: rR,
          roughness: eR,
          metalnessMap: aR,
          metalnessChannel: nR,
          metalness: UR,
          aoMap: WR,
          aoMapChannel: AR,
          aoMapIntensity: CR,
          alphaMap: XR,
          ior: MR,
          clearCoatEnabled: BR,
          clearCoat: lR,
          clearCoatMap: pR,
          clearCoatRoughness: gR,
          clearCoatRoughnessMap: bR
        } = function(RR) {
          const JR = {
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
          return RR instanceof uy.StandardMaterial ? {
            ...JR,
            diffuseMap: RR.diffuseTexture,
            diffuse: RR.diffuseColor,
            alphaCutOff: RR.alphaCutOff,
            emissiveMap: RR.emissiveTexture,
            emissive: RR.emissiveColor,
            roughness: 1,
            alphaMap: RR.opacityTexture
          } : RR instanceof XJ ? {
            ...JR,
            diffuseMap: RR._albedoTexture,
            diffuse: RR._albedoColor,
            alphaCutOff: RR._alphaCutOff,
            emissiveMap: RR._emissiveTexture,
            emissive: RR._emissiveColor,
            normalMap: RR._bumpTexture,
            roughnessMap: RR._metallicTexture,
            roughnessChannel: RR._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: RR._roughness ?? 1,
            metalnessMap: RR._metallicTexture,
            metalnessChannel: RR._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: RR._metallic ?? 0,
            aoMap: RR._ambientTexture,
            aoMapChannel: RR._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: RR._ambientTextureStrength,
            alphaMap: RR._opacityTexture,
            ior: RR.subSurface.indexOfRefraction,
            clearCoatEnabled: RR.clearCoat.isEnabled,
            clearCoat: RR.clearCoat.intensity,
            clearCoatMap: RR.clearCoat.texture,
            clearCoatRoughness: RR.clearCoat.roughness,
            clearCoatRoughnessMap: RR.clearCoat.useRoughnessFromMainTexture ? RR.clearCoat.texture : RR.clearCoat.textureRoughness
          } : JR
        }(RR);
      return null !== ZR ? (tR.push(`${yR}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${ZR.uniqueId}_diffuse.outputs:rgb>`), RR.needAlphaBlending() ? tR.push(`${yR}float inputs:opacity.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${ZR.uniqueId}_diffuse.outputs:a>`) : RR.needAlphaTesting() && (tR.push(`${yR}float inputs:opacity.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${ZR.uniqueId}_diffuse.outputs:a>`), tR.push(`${yR}float inputs:opacityThreshold = ${iR}`)), uR.push(CZ(ZR, RR, "diffuse", qR, JR, GR))) : tR.push(`${yR}color3f inputs:diffuseColor = ${WZ(qR||LR.Color3.White())}`), null !== fR ? (tR.push(`${yR}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${fR.uniqueId}_emissive.outputs:rgb>`), uR.push(CZ(fR, RR, "emissive", VR, JR, GR))) : VR && VR.toLuminance() > 0 && tR.push(`${yR}color3f inputs:emissiveColor = ${WZ(VR)}`), null !== KR && (tR.push(`${yR}normal3f inputs:normal.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${KR.uniqueId}_normal.outputs:rgb>`), uR.push(CZ(KR, RR, "normal", null, JR, GR))), null !== WR && (tR.push(`${yR}float inputs:occlusion.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${WR.uniqueId}_occlusion.outputs:${AR}>`), uR.push(CZ(WR, RR, "occlusion", new LR.Color3(CR, CR, CR), JR, GR))), null !== wR ? (tR.push(`${yR}float inputs:roughness.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${wR.uniqueId}_roughness.outputs:${rR}>`), uR.push(CZ(wR, RR, "roughness", new LR.Color3(eR, eR, eR), JR, GR))) : tR.push(`${yR}float inputs:roughness = ${eR}`), null !== aR ? (tR.push(`${yR}float inputs:metallic.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${aR.uniqueId}_metallic.outputs:${nR}>`), uR.push(CZ(aR, RR, "metallic", new LR.Color3(UR, UR, UR), JR, GR))) : tR.push(`${yR}float inputs:metallic = ${UR}`), null !== XR ? (tR.push(`${yR}float inputs:opacity.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${XR.uniqueId}_opacity.outputs:r>`), tR.push(`${yR}float inputs:opacityThreshold = 0.0001`), uR.push(CZ(XR, RR, "opacity", null, JR, GR))) : tR.push(`${yR}float inputs:opacity = ${RR.alpha}`), BR && (null !== pR ? (tR.push(`${yR}float inputs:clearcoat.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${pR.uniqueId}_clearcoat.outputs:r>`), uR.push(CZ(pR, RR, "clearcoat", new LR.Color3(lR, lR, lR), JR, GR))) : tR.push(`${yR}float inputs:clearcoat = ${lR}`), null !== bR ? (tR.push(`${yR}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${RR.uniqueId}/Texture_${bR.uniqueId}_clearcoatRoughness.outputs:g>`), uR.push(CZ(bR, RR, "clearcoatRoughness", new LR.Color3(gR, gR, gR), JR, GR))) : tR.push(`${yR}float inputs:clearcoatRoughness = ${gR}`)), tR.push(`${yR}float inputs:ior = ${MR}`), `\n\tdef Material "Material_${RR.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${tR.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${RR.uniqueId}/PreviewSurface.outputs:surface>\n\n${uR.join("\n")}\n\n\t}\n`
    }

    function MZ(RR) {
      RR.computeWorldMatrix(!0);
      const JR = RR.getWorldMatrix().clone(),
        GR = RR.jH().useRightHandedSystem;
      let yR = RR.material?._getEffectiveOrientation(RR) ?? RR.sideOrientation,
        ZR = !GR,
        qR = RR.parent;
      for (; qR;) {
        if (HG(qR, GR) && null === qR.parent) {
          GR || (JR.multiplyToRef(qR.getWorldMatrix().invert(), JR), yR = yR === uR.d.ClockWiseSideOrientation ? uR.d.CounterClockWiseSideOrientation : uR.d.ClockWiseSideOrientation), ZR = !1;
          break
        }
        qR = qR.parent
      }
      return JR.determinant() < 0 && tR.Tools.Warn(`Mesh ${RR.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: JR,
        windingOrder: yR === uR.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: ZR
      }
    }
    async function BZ(RR, JR, GR) {
      const uR = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...JR
      };
      "undefined" === typeof fflate && await tR.Tools.LoadScriptAsync(uR.fflateUrl);
      const ZR = {};
      ZR[uR.modelFileName] = null;
      let qR = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      qR += function(RR) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===RR.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${RR.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${RR.planeAnchoringAlignment}"`:""}\n            `
      }(uR);
      const iR = {};
      for (const yR of RR.meshes) {
        if (0 === yR.getTotalVertices()) continue;
        const RR = yR,
          JR = RR.geometry,
          fR = RR.material;
        if (!fR || !JR || GR && !GR(RR)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(fR.getClassName())) {
          const GR = "geometries/Geometry_" + JR.uniqueId + ".usda",
            {
              matrix: yR,
              windingOrder: tR,
              convertToRightHanded: VR
            } = MZ(RR);
          if (!(GR in ZR)) {
            const RR = wZ(JR, uR, tR, VR);
            ZR[GR] = rZ(RR)
          }
          fR.uniqueId in iR || (iR[fR.uniqueId] = fR), qR += LZ(RR, yR)
        } else tR.Tools.Warn("USDZExportAsync does not support this material type: " + fR.getClassName())
      }
      RR.activeCamera && uR.exportCamera && (qR += function(RR, JR) {
        const GR = "Camera_" + RR.uniqueId,
          tR = eZ(yR.Matrix.RotationY(Math.PI).multiply(RR.getWorldMatrix()));
        if (RR.mode === MR.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${GR}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${tR}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${RR.minZ.toPrecision(JR.precision)}, ${RR.maxZ.toPrecision(JR.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(RR.orthoLeft||1)+Math.abs(RR.orthoRight||1))).toPrecision(JR.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(RR.orthoTop||1)+Math.abs(RR.orthoBottom||1))).toPrecision(JR.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const yR = RR.ke().getAspectRatio(RR),
            uR = JR.cameraSensorWidth || 35;
          return `def Camera "${GR}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${tR}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${RR.minZ.toPrecision(JR.precision)}, ${RR.maxZ.toPrecision(JR.precision)})\n\t\t\tfloat focalLength = ${(uR/(2*Math.tan(.5*RR.fov))).toPrecision(JR.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(uR*yR).toPrecision(JR.precision)}\n\t\t\tfloat verticalAperture = ${(uR/yR).toPrecision(JR.precision)}            \n\t\t}\n\t\n\t`
        }
      }(RR.activeCamera, uR)), qR += "\n            }\n        }";
      const fR = {};
      qR += function(RR, JR, GR) {
        const yR = [];
        for (const tR in RR) {
          const uR = RR[tR];
          yR.push(XZ(uR, JR, GR))
        }
        return `\n    def "Materials"\n{\n${yR.join("")}\n}\n\n`
      }(iR, fR, uR), qR += "\n    }", ZR[uR.modelFileName] = fflate.strToU8(qR);
      for (const yR in fR) {
        const {
          texture: RR,
          ext: JR,
          mimeType: GR
        } = fR[yR], tR = await nG(RR);
        if (tR && AZ(tR.mimeType) && tR.mimeType === GR) ZR[`textures/Texture_${yR}.${JR}`] = new Uint8Array(tR.data);
        else {
          const tR = RR.getSize(),
            uR = await (0, AR.g)(RR),
            qR = await BR.DumpTools.DumpDataAsync(tR.width, tR.height, uR, GR, void 0, !1, !0);
          ZR[`textures/Texture_${yR}.${JR}`] = new Uint8Array(qR).slice()
        }
      }
      let VR = 0;
      for (const yR in ZR) {
        const RR = ZR[yR];
        if (!RR) continue;
        VR += 34 + yR.length;
        const JR = 63 & VR;
        if (4 !== JR) {
          const GR = new Uint8Array(64 - JR);
          ZR[yR] = [RR, {
            extra: {
              12345: GR
            }
          }]
        }
        VR = RR.length
      }
      return fflate.zipSync(ZR, {
        level: 0
      })
    }
    var lZ = GR(42641);
    class pZ {
      static Export(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (!RR || 0 === RR.bones.length) throw new Error("Invalid or empty skeleton provided");
        let yR = JR;
        JR && 0 !== JR.length || (yR = RR.animations.map((RR => RR.name)));
        let tR = null;
        for (const fR of yR) {
          const JR = RR.getAnimationRange(fR);
          JR && (tR = tR ? new lZ.b("animation-range", Math.min(tR.from, JR.from), Math.max(tR.to, JR.to)) : JR)
        }
        if (!tR && (RR.animations.length > 0 && (tR = RR.getAnimationRange(RR.animations[0].name)), !tR)) throw new Error("No animation range found in skeleton");
        const uR = GR || 1 / (RR.animations[0]?.framePerSecond || 30),
          ZR = this._BuildBoneHierarchy(RR, yR);
        let qR = 0;
        for (const fR of ZR) fR.positionKeys.length > 0 && (qR = Math.max(qR, fR.positionKeys.length)), fR.rotationKeys.length > 0 && (qR = Math.max(qR, fR.rotationKeys.length));
        0 === qR && (qR = Math.floor((tR.to - tR.from) / uR) + 1);
        let iR = "";
        return iR += "HIERARCHY\n", iR += this._ExportHierarchy(ZR, 0), iR += "MOTION\n", iR += `Frames: ${qR}\n`, iR += `Frame Time: ${uR.toFixed(6)}\n`, iR += this._ExportMotionData(ZR, qR, 0, yR), iR
      }
      static _BuildBoneHierarchy(RR, JR) {
        const GR = new Map,
          yR = [];
        for (const tR of RR.bones) {
          const RR = {
            bone: tR,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          GR.set(tR, RR)
        }
        for (const tR of RR.bones) {
          const RR = GR.get(tR);
          if (tR.animations.length > 0)
            for (const GR of tR.animations) JR.includes(GR.name) && ("position" === GR.targetProperty ? (RR.hasPositionChannels = !0, RR.positionKeys.push(...GR.getKeys())) : "rotationQuaternion" === GR.targetProperty && (RR.hasRotationChannels = !0, RR.rotationKeys.push(...GR.getKeys())));
          if (tR.getParent()) {
            const JR = GR.get(tR.getParent());
            JR && JR.children.push(RR)
          } else yR.push(RR)
        }
        return yR
      }
      static _ExportHierarchy(RR, JR) {
        let GR = "";
        const yR = "    ".repeat(JR);
        for (const tR of RR) {
          const RR = tR.bone;
          if (this._IsEndSite(tR)) {
            GR += `${yR}End Site\n`, GR += `${yR}{\n`;
            const JR = this._GetBoneOffset(RR);
            GR += `${yR}    OFFSET ${JR.x.toFixed(6)} ${JR.y.toFixed(6)} ${JR.z.toFixed(6)}\n`, GR += `${yR}}\n`
          } else {
            GR += `${0===JR?"ROOT":`${yR}JOINT`} ${RR.name}\n`, GR += `${yR}{\n`;
            const uR = this._GetBoneOffset(RR);
            GR += `${yR}    OFFSET ${uR.x.toFixed(6)} ${uR.y.toFixed(6)} ${uR.z.toFixed(6)}\n`;
            const ZR = [];
            tR.hasPositionChannels && ZR.push("Xposition", "Yposition", "Zposition"), tR.hasRotationChannels && ZR.push("Zrotation", "Xrotation", "Yrotation"), ZR.length > 0 && (GR += `${yR}    CHANNELS ${ZR.length} ${ZR.join(" ")}\n`), tR.children.length > 0 && (GR += this._ExportHierarchy(tR.children, JR + 1)), GR += `${yR}}\n`
          }
        }
        return GR
      }
      static _IsEndSite(RR) {
        return 0 === RR.children.length
      }
      static _GetBoneOffset(RR) {
        try {
          if (!RR.getParent()) return RR.getRestMatrix().getTranslation();
          return RR.getLocalMatrix().getTranslation()
        } catch (JR) {
          return yR.Fe.Zero()
        }
      }
      static _ExportMotionData(RR, JR, GR, yR) {
        let tR = "";
        for (let uR = 0; uR < JR; uR++) {
          const JR = [];
          this._CollectFrameValues(RR, uR + GR, JR, yR), tR += JR.map((RR => RR.toFixed(6))).join(" ") + "\n"
        }
        return tR
      }
      static _CollectFrameValues(RR, JR, GR, yR) {
        for (const tR of RR)
          if (!this._IsEndSite(tR)) {
            if (tR.hasPositionChannels) {
              const RR = this._GetPositionAtFrameIndex(tR.positionKeys, JR);
              GR.push(RR.x, RR.y, RR.z)
            }
            if (tR.hasRotationChannels) {
              const RR = this._GetRotationAtFrameIndex(tR.rotationKeys, JR),
                yR = this._QuaternionToEuler(RR);
              GR.push(yR.z, yR.x, yR.y)
            }
            tR.children.length > 0 && this._CollectFrameValues(tR.children, JR, GR, yR)
          }
      }
      static _GetPositionAtFrameIndex(RR, JR) {
        if (0 === RR.length) return yR.Fe.Zero();
        return RR[Math.max(0, Math.min(JR, RR.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(RR, JR) {
        if (0 === RR.length) return yR.Quaternion.Identity();
        return RR[Math.max(0, Math.min(JR, RR.length - 1))].value.clone()
      }
      static _QuaternionToEuler(RR) {
        const JR = new yR.Matrix;
        RR.toRotationMatrix(JR);
        const GR = JR.m;
        let uR, ZR, qR;
        const iR = Math.sqrt(GR[0] * GR[0] + GR[1] * GR[1]);
        return iR > NG.c ? (uR = Math.atan2(GR[6], GR[10]), ZR = Math.atan2(-GR[2], iR), qR = Math.atan2(GR[1], GR[0])) : (uR = Math.atan2(-GR[9], GR[5]), ZR = Math.atan2(-GR[2], iR), qR = 0), new yR.Fe(tR.Tools.ToDegrees(uR), tR.Tools.ToDegrees(ZR), tR.Tools.ToDegrees(qR))
      }
    }

    function gZ(RR) {
      return "string" === typeof RR?.name
    }
    const bZ = Symbol("__xml:meta$__"),
      vZ = Symbol("__xml:name$__");

    function OZ(RR, JR) {
      Object.prototype.hasOwnProperty.call(RR.metadata, bZ) || (RR.metadata[bZ] = []), RR.metadata[bZ].push(JR)
    }

    function xZ(RR) {
      return (JR, GR) => {
        JR[vZ] = RR
      }
    }

    function NZ() {
      return (RR, JR) => OZ(JR, {
        kind: "none",
        prop: String(JR.name),
        ignore: !0
      })
    }

    function DZ(RR) {
      return (JR, GR) => OZ(GR, {
        kind: "attr",
        prop: String(GR.name),
        ...RR
      })
    }

    function HZ(RR) {
      return (JR, GR) => OZ(GR, {
        kind: "elem",
        prop: String(GR.name),
        ...RR
      })
    }

    function oZ(RR) {
      const JR = "function" === typeof RR ? RR : RR?.constructor,
        GR = JR?.[Symbol.metadata];
      if (!GR) return [];
      const yR = [];
      let tR = GR;
      for (; tR;) Object.prototype.hasOwnProperty.call(tR, bZ) && yR.push(...tR[bZ]), tR = Object.getPrototypeOf(tR);
      return yR
    }

    function cZ(RR) {
      const JR = RR?.constructor?.[vZ];
      return JR || void 0
    }

    function PZ(RR) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(RR)
    }

    function IZ(RR) {
      if (gZ(RR)) return RR;
      const JR = (RR ?? "").trim();
      if (!JR) return {
        name: ""
      };
      const GR = JR.indexOf(":");
      if (-1 === GR) return {
        name: JR
      };
      if (-1 !== JR.indexOf(":", GR + 1)) return {
        name: JR
      };
      const yR = JR.slice(0, GR),
        tR = JR.slice(GR + 1);
      return PZ(yR) && PZ(tR) ? {
        ns: yR,
        name: tR
      } : {
        name: JR
      }
    }

    function mZ(RR, JR) {
      return JR ? `${JR}:${RR}` : RR
    }
    const zZ = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      SZ = Object.freeze({
        number: zZ
      });

    function jZ(RR) {
      const JR = RR?.eps ?? zZ.eps;
      return {
        eps: JR,
        maxDecimalsCap: RR?.maxDecimalsCap ?? zZ.maxDecimalsCap,
        trimTrailingZeros: RR?.trimTrailingZeros ?? zZ.trimTrailingZeros,
        fixedDecimals: RR?.fixedDecimals,
        allowScientific: RR?.allowScientific ?? zZ.allowScientific,
        snapNearZero: RR?.snapNearZero ?? zZ.snapNearZero,
        zeroThreshold: RR?.zeroThreshold ?? JR,
        perAttributeEps: RR?.perAttributeEps
      }
    }

    function dZ(RR) {
      return {
        number: jZ(RR?.number)
      }
    }
    class EZ {
      constructor(RR) {
        if (this.o = RR, this._o = RR.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(RR) {
        if (!Number.isFinite(RR)) throw new Error(`Cannot format non-finite number: ${RR}`);
        const JR = this._o,
          GR = this._clampInt(JR.maxDecimalsCap ?? 15, 0, 20),
          yR = JR.trimTrailingZeros ?? !0,
          tR = JR.snapNearZero ?? !0,
          uR = JR.zeroThreshold ?? JR.eps,
          ZR = 1 / JR.eps;
        let qR, iR = Math.round(RR * ZR) / ZR;
        if (Object.is(iR, -0) && (iR = 0), tR && Math.abs(iR) <= uR && (iR = 0), qR = void 0 !== JR.fixedDecimals ? this._clampInt(JR.fixedDecimals, 0, GR) : this._clampInt(Math.ceil(-Math.log10(JR.eps)), 0, GR), JR.allowScientific, 0 === qR) return String(Math.trunc(iR));
        let fR = iR.toFixed(qR);
        if (yR && void 0 === JR.fixedDecimals && (fR = fR.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(fR)) throw new Error(`Scientific notation not allowed in XML output: ${fR}`);
        return fR
      }
      _clampInt(RR, JR, GR) {
        return Number.isFinite(RR) ? (RR = Math.trunc(RR), Math.max(JR, Math.min(GR, RR))) : JR
      }
    }

    function YZ(RR) {
      return RR instanceof Date
    }

    function kZ(RR) {
      return "string" === typeof RR
    }

    function QZ(RR) {
      return "string" === typeof RR || "number" === typeof RR || "boolean" === typeof RR || "bigint" === typeof RR || YZ(RR)
    }

    function FZ(RR) {
      return "number" === typeof RR || "boolean" === typeof RR || "bigint" === typeof RR || YZ(RR)
    }
    class TZ {
      constructor(RR, JR) {
        this._ns = new Map, this._prefixCount = 0, this._builder = RR, this._format = dZ(JR), this._nFmt = new EZ(this._format)
      }
      withNamespace() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        for (const yR of JR) this._assignNamespace(yR);
        return this
      }
      serialize(RR, JR) {
        if (!(JR = JR ?? cZ(RR))) throw new Error("can not find name for given object");
        const GR = IZ(JR);
        GR.ns && this._assignNamespace(GR.ns, "xmlns"), this._gatherNamespaces(RR, new WeakSet);
        const yR = this._builder.ele(null, GR.name);
        for (const [tR, uR] of Array.from(this._ns.entries())) yR.att("xmlns", uR, tR);
        this._writeObjectContent(yR, RR, (new WeakSet).add(RR)), this._builder.end()
      }
      _writeObject(RR, JR, GR) {
        if (GR.has(JR)) return;
        if (GR.add(JR), Array.isArray(JR)) {
          for (const yR of JR) FZ(yR) || (kZ(yR) ? this._builder.text(yR) : this._writeObject(RR, yR, GR));
          return
        }
        const yR = cZ(JR);
        if (!yR) return;
        const tR = IZ(yR),
          uR = this._getPrefix(tR),
          ZR = mZ(tR.name, uR);
        RR.ele(null, ZR), this._writeObjectContent(RR, JR, GR), this._builder.end()
      }
      _getPrefix(RR) {
        if (RR.ns) {
          const JR = this._ns.get(RR.ns.toLowerCase());
          if ("xmlns" !== JR) return JR
        }
      }
      _writeObjectContent(RR, JR, GR) {
        const yR = oZ(JR) ?? [],
          tR = new Map;
        for (const ZR of yR) {
          const RR = tR.get(ZR.prop) ?? [];
          RR.push(ZR), tR.set(ZR.prop, RR)
        }
        const uR = Object.keys(JR).sort(((RR, JR) => {
          const GR = (tR.get(RR) ?? []).some((RR => "attr" === RR.kind));
          return GR === (tR.get(JR) ?? []).some((RR => "attr" === RR.kind)) ? 0 : GR ? -1 : 1
        }));
        for (const ZR of uR) {
          const yR = JR[ZR];
          if (null === yR || void 0 === yR) continue;
          const uR = tR.get(ZR);
          if (uR) {
            if (uR.some((RR => !0 === RR.ignore || "none" === RR.kind))) continue;
            for (const JR of uR) {
              const GR = JR.name ?? JR.prop.toLowerCase();
              if (GR) switch (JR.kind) {
                case "attr": {
                  let tR = null;
                  if ("number" === typeof yR && this._nFmt && (tR = this._nFmt.toString(yR)), JR.formatter) {
                    tR = new JR.formatter(this._format).toString(yR)
                  }
                  if (tR = tR ?? yR.toString(), tR) {
                    const JR = IZ(GR),
                      yR = this._getPrefix(JR),
                      uR = mZ(JR.name, yR);
                    RR.att(null, uR, tR)
                  }
                  break
                }
              }
            }
          } else FZ(yR) || (kZ(yR) ? this._builder.text(yR) : this._writeObject(RR, yR, GR))
        }
      }
      _gatherNamespaces(RR, JR) {
        if (JR.has(RR)) return;
        if (JR.add(RR), Array.isArray(RR)) {
          for (const GR of RR) QZ(GR) || this._gatherNamespaces(GR, JR);
          return
        }
        const GR = cZ(RR);
        GR && this._assignNamespace(GR);
        const yR = oZ(RR) ?? [],
          tR = new Map;
        for (const ZR of yR) {
          const RR = tR.get(ZR.prop) ?? [];
          RR.push(ZR), tR.set(ZR.prop, RR)
        }
        const uR = [];
        for (const ZR of Object.keys(RR)) {
          const JR = RR[ZR];
          if (null === JR || void 0 === JR) continue;
          const GR = tR.get(ZR);
          if (GR) {
            if (GR.some((RR => !0 === RR.ignore || "none" === RR.kind))) continue;
            for (const RR of GR) RR.name && this._assignNamespace(RR.name)
          }
          uR.push(JR)
        }
        for (const ZR of uR) QZ(ZR) || this._gatherNamespaces(ZR, JR)
      }
      _assignNamespace(RR, JR) {
        const GR = IZ(RR);
        if (GR?.ns) {
          const RR = GR.ns.toLowerCase();
          this._ns.get(RR) || this._ns.set(RR, JR ?? this._buildNsPrefix(RR))
        } else if ("xmlns" === JR) {
          const RR = GR.name.toLowerCase();
          this._ns.get(RR) || this._ns.set(RR, JR ?? this._buildNsPrefix(RR))
        }
      }
      _buildNsPrefix(RR) {
        let JR, GR = !1;
        do {
          JR = "ns" + this._prefixCount++;
          for (const RR of Array.from(this._ns.values()))
            if (RR === JR) {
              GR = !0;
              break
            }
        } while (GR);
        return JR
      }
    }
    class sZ {}
    var hZ;
    sZ.OpenTag = "<", sZ.CloseTag = ">", sZ.Slash = "/", sZ.Question = "?", sZ.Quote = '"', sZ.Equal = "=", sZ.Space = " ", sZ.Semicolon = ":", sZ.Dec = "<?xml", sZ.Xml = "xml", sZ.Xmlns = "xmlns", sZ.Xsi = "xsi", sZ.VersionKeyword = "version", sZ.EncodingKeyword = "encoding", sZ.StandaloneKeyword = "standalone",
      function(RR) {
        RR[RR.Declaration = 0] = "Declaration", RR[RR.Tag = 1] = "Tag", RR[RR.Attribute = 2] = "Attribute", RR[RR.Text = 3] = "Text"
      }(hZ || (hZ = {}));
    class Rq {
      constructor(RR) {
        this._ctxStack = [], this._d = 0, this._w = RR
      }
      dec(RR, JR, GR) {
        return this._w.write(sZ.Dec), this._writeAttStr(sZ.VersionKeyword, RR), JR && this._writeAttStr(sZ.EncodingKeyword, JR), void 0 !== GR && this._writeAttStr(sZ.StandaloneKeyword, GR ? "yes" : "no"), this._w.write(sZ.Question, sZ.CloseTag), this
      }
      att(RR, JR, GR) {
        const yR = this._peekContext();
        if (!yR) throw new Error("att() without open element");
        if (yR.closed) throw new Error(`att() after start tag closed for <${yR.name}>`);
        if (this._isXmlnsDecl(RR, JR)) {
          if (JR === sZ.Xmlns) yR.defaultNs = GR, this._registerNamespace(yR, "", GR), this._writeAttStr(sZ.Xmlns, GR);
          else if (RR) this._registerNamespace(yR, JR, GR), this._writeAttStr(`${RR}:${JR}`, GR);
          else {
            const RR = JR.slice(6);
            this._registerNamespace(yR, RR, GR), this._writeAttStr(JR, GR)
          }
          return yR.lastToken = hZ.Attribute, this
        }
        let tR = JR;
        if (RR) {
          tR = `${this._ensurePrefixDeclared(yR,RR)}:${JR}`
        }
        return yR.lastToken = hZ.Attribute, this._writeAttStr(tR, GR), this
      }
      ele(RR, JR) {
        const GR = this._peekContext();
        GR && this._closeOpenTagIfNeeded(GR);
        let yR = JR;
        if (RR) {
          yR = `${this._lookupPrefix(RR)??RR}:${JR}`
        }
        return this._pushContext(yR, ++this._d), this._w.write(sZ.OpenTag, yR), this
      }
      text(RR) {
        const JR = this._peekContext();
        if (!JR) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(JR), JR.lastToken = hZ.Text, this._w.write(this._escText(RR)), this
      }
      end() {
        const RR = this._popContext();
        return RR && (this._d--, RR.closed ? this._w.write(sZ.OpenTag, sZ.Slash, RR.name, sZ.CloseTag) : this._w.write(sZ.Slash, sZ.CloseTag)), this
      }
      _pushContext(RR, JR) {
        const GR = new Rq.Context(RR, JR);
        return this._ctxStack.push(GR), GR
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
      _writeAttStr(RR, JR) {
        this._w.write(sZ.Space, RR, sZ.Equal, sZ.Quote, this._escAttr(JR), sZ.Quote)
      }
      _lookupPrefix(RR) {
        let JR = this._ctxStack.length - 1;
        if (JR >= 0)
          do {
            const GR = this._ctxStack[JR--],
              yR = GR.ns2prefix?.get(RR);
            if (yR) return yR
          } while (JR >= 0)
      }
      _escText(RR) {
        return RR.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(RR) {
        return this._escText(RR).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(RR, JR) {
        if (RR) return RR === sZ.Xmlns;
        const GR = JR.length,
          yR = sZ.Xmlns.length;
        return GR >= yR && (JR.startsWith(sZ.Xmlns) && (JR.length == yR || JR[yR] == sZ.Semicolon))
      }
      _registerNamespace(RR, JR, GR) {
        if (JR === sZ.Xml || JR === sZ.Xmlns) throw new Error(`reserved prefix '${JR}'`);
        const yR = RR.prefix2ns.get(JR);
        if (yR && yR !== GR) throw new Error(`prefix '${JR}' already bound to a different namespace`);
        RR.ns2prefix.get(GR) || RR.ns2prefix.set(GR, JR), RR.prefix2ns.set(JR, GR)
      }
      _allocPrefix(RR) {
        let JR = 1;
        for (;;) {
          const GR = "ns" + JR++;
          if (!RR.prefix2ns.has(GR)) return GR
        }
      }
      _ensurePrefixDeclared(RR, JR) {
        const GR = this._lookupPrefix(JR);
        if (GR) return GR;
        if (RR.closed) throw new Error(`can not declare namespace after start tag closed for <${RR.name}>`);
        const yR = this._allocPrefix(RR);
        return this._writeAttStr(`${sZ.Xmlns}:${yR}`, JR), this._registerNamespace(RR, yR, JR), yR
      }
      _closeOpenTagIfNeeded(RR) {
        RR.closed || (this._w.write(sZ.CloseTag), RR.closed = !0)
      }
    }
    Rq.Context = class {
      constructor(RR, JR) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = RR, this.depth = JR
      }
    };
    class Jq {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        if (0 === JR.length) return this;
        const yR = JR.join("");
        return this._chunks.push(yR), this.count += yR.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Gq {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = RR, this._opts = JR, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        if (0 === JR.length) return this;
        const yR = JR.join("");
        if (0 === yR.length) return this;
        this._pending += yR, this._pendingChars += yR.length;
        const tR = this._opts.flushChars ?? 65536;
        return this._pendingChars >= tR && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const RR = this._encoder.encode(this._pending);
        return this._sink.push(RR), this.count += RR.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const yq = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      tq = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var uq, Zq;
    ! function(RR) {
      RR.micron = "micron", RR.millimeter = "millimeter", RR.centimeter = "centimeter", RR.inch = "inch", RR.foot = "foot", RR.meter = "meter"
    }(uq || (uq = {})),
    function(RR) {
      RR.model = "model", RR.solidsupport = "solidsupport", RR.support = "support", RR.surface = "surface", RR.other = "other"
    }(Zq || (Zq = {}));
    const qq = "http://schemas.openxmlformats.org/package/2006/content-types",
      iq = "http://schemas.openxmlformats.org/package/2006/relationships";
    var fq;
    ! function(RR) {
      RR.Relationships = "application/vnd.openxmlformats-package.relationships+xml", RR.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", RR.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", RR.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", RR.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", RR.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", RR.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", RR.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", RR.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", RR.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", RR.Png = "image/png", RR.Jpeg = "image/jpeg", RR.Tiff = "image/tiff", RR.Xml = "application/xml"
    }(fq || (fq = {}));
    const Vq = "_rels/",
      Kq = "3D/",
      wq = "3dmodel.model",
      rq = ".rels",
      eq = "[Content_Types].xml";
    class aq {
      static IsKnown(RR) {
        return aq.Known.has(RR)
      }
      static IsThreeDimModel(RR) {
        return RR === aq.ThreeDimModel
      }
    }
    aq.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", aq.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", aq.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", aq.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", aq.Known = new Set([aq.ThreeDimModel, aq.Thumbnail, aq.PrintTicket, aq.MustPreserve]);
    let Lq = (() => {
        let RR, JR, GR = [xZ({
            ns: qq,
            name: "Types"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.items = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfContentTypes"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      nq = (() => {
        let RR, JR, GR, yR, tR = [xZ({
            ns: qq,
            name: "Default"
          })],
          uR = [],
          ZR = [],
          qR = [],
          iR = [],
          fR = [];
        JR = class {
          constructor(RR, JR) {
            this.ext = (0, lR.m)(this, ZR, void 0), this.ct = ((0, lR.m)(this, qR), (0, lR.m)(this, iR, void 0)), (0, lR.m)(this, fR), this.ext = RR, this.ct = JR
          }
        };
        return (0, lR.n)(JR, "ThreeMfContentType"), (() => {
          const VR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: {
              ns: qq,
              name: "Extension"
            }
          })], yR = [DZ({
            name: {
              ns: qq,
              name: "ContentType"
            }
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: RR => "ext" in RR,
              get: RR => RR.ext,
              set: (RR, JR) => {
                RR.ext = JR
              }
            },
            metadata: VR
          }, ZR, qR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: RR => "ct" in RR,
              get: RR => RR.ct,
              set: (RR, JR) => {
                RR.ct = JR
              }
            },
            metadata: VR
          }, iR, fR), (0, lR.l)(null, RR = {
            value: JR
          }, tR, {
            kind: "class",
            name: JR.name,
            metadata: VR
          }, null, uR), JR = RR.value, VR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VR
          }), (0, lR.m)(JR, uR)
        })(), JR
      })(),
      Uq = (() => {
        let RR, JR, GR = [xZ({
            ns: iq,
            name: "Relationships"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.items = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfRelationships"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      Wq = (() => {
        let RR, JR, GR, yR, tR, uR = [xZ({
            ns: iq,
            name: "Relationship"
          })],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        JR = class {
          constructor(RR, JR, GR) {
            this.id = (0, lR.m)(this, qR, void 0), this.type = ((0, lR.m)(this, iR), (0, lR.m)(this, fR, void 0)), this.target = ((0, lR.m)(this, VR), (0, lR.m)(this, KR, void 0)), (0, lR.m)(this, wR), this.id = RR, this.type = JR, this.target = GR
          }
        };
        return (0, lR.n)(JR, "ThreeMfRelationship"), (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "Id"
          })], yR = [DZ({
            name: "Type"
          })], tR = [DZ({
            name: "Target"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: RR => "id" in RR,
              get: RR => RR.id,
              set: (RR, JR) => {
                RR.id = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: RR => "type" in RR,
              get: RR => RR.type,
              set: (RR, JR) => {
                RR.type = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: RR => "target" in RR,
              get: RR => RR.target,
              set: (RR, JR) => {
                RR.target = JR
              }
            },
            metadata: rR
          }, KR, wR), (0, lR.l)(null, RR = {
            value: JR
          }, uR, {
            kind: "class",
            name: JR.name,
            metadata: rR
          }, null, ZR), JR = RR.value, rR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          }), (0, lR.m)(JR, ZR)
        })(), JR
      })();
    class Aq {
      constructor(RR, JR, GR) {
        this.contentTypes = RR, this.relationships = JR, this.model = GR
      }
    }
    class Cq {
      static Zero() {
        return new Cq([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(RR) {
        this.values = RR
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Xq {
      constructor(RR) {
        this.o = RR, this._f = new EZ(RR)
      }
      toString(RR) {
        return RR.values.map((RR => this._f.toString(RR))).join(" ")
      }
    }
    let Mq = (() => {
        let RR, JR, GR, yR, tR, uR = [xZ({
            ns: yq,
            name: "model"
          })],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        JR = class {
          constructor() {
            this.unit = (0, lR.m)(this, qR, uq.millimeter), this.requiredextensions = ((0, lR.m)(this, iR), (0, lR.m)(this, fR, void 0)), this.recommendedextensions = ((0, lR.m)(this, VR), (0, lR.m)(this, KR, void 0)), this.metadata = (0, lR.m)(this, wR)
          }
        };
        return (0, lR.n)(JR, "ThreeMfModel"), (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "unit"
          })], yR = [DZ({
            name: "requiredextensions"
          })], tR = [DZ({
            name: "recommendedextensions"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: RR => "unit" in RR,
              get: RR => RR.unit,
              set: (RR, JR) => {
                RR.unit = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: RR => "requiredextensions" in RR,
              get: RR => RR.requiredextensions,
              set: (RR, JR) => {
                RR.requiredextensions = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: RR => "recommendedextensions" in RR,
              get: RR => RR.recommendedextensions,
              set: (RR, JR) => {
                RR.recommendedextensions = JR
              }
            },
            metadata: rR
          }, KR, wR), (0, lR.l)(null, RR = {
            value: JR
          }, uR, {
            kind: "class",
            name: JR.name,
            metadata: rR
          }, null, ZR), JR = RR.value, rR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          })
        })(), JR.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, lR.m)(JR, ZR), JR
      })(),
      Bq = (() => {
        let RR, JR, GR, yR, tR, uR = [xZ({
            ns: yq,
            name: "meta"
          })],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        JR = class {
          constructor(RR, JR, GR, yR) {
            this.name = (0, lR.m)(this, qR, void 0), this.preserve = ((0, lR.m)(this, iR), (0, lR.m)(this, fR, void 0)), this.type = ((0, lR.m)(this, VR), (0, lR.m)(this, KR, void 0)), this.value = (0, lR.m)(this, wR), this.name = RR, this.value = JR, this.preserve = GR, this.type = yR
          }
        };
        return (0, lR.n)(JR, "ThreeMfMeta"), (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "name"
          })], yR = [DZ({
            name: "preserve"
          })], tR = [DZ({
            name: "type"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: RR => "name" in RR,
              get: RR => RR.name,
              set: (RR, JR) => {
                RR.name = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: RR => "preserve" in RR,
              get: RR => RR.preserve,
              set: (RR, JR) => {
                RR.preserve = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: RR => "type" in RR,
              get: RR => RR.type,
              set: (RR, JR) => {
                RR.type = JR
              }
            },
            metadata: rR
          }, KR, wR), (0, lR.l)(null, RR = {
            value: JR
          }, uR, {
            kind: "class",
            name: JR.name,
            metadata: rR
          }, null, ZR), JR = RR.value, rR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          }), (0, lR.m)(JR, ZR)
        })(), JR
      })(),
      lq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "metadatagroup"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfMetadataGroup"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      pq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "resources"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.object = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfResources"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      gq = (() => {
        let RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR = [xZ({
            ns: yq,
            name: "object"
          })],
          VR = [],
          KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [],
          nR = [],
          UR = [],
          WR = [],
          AR = [],
          CR = [],
          XR = [],
          MR = [],
          BR = [];
        JR = class {
          constructor(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zq.model;
            this.id = (0, lR.m)(this, KR, void 0), this.type = ((0, lR.m)(this, wR), (0, lR.m)(this, rR, void 0)), this.thumbnail = ((0, lR.m)(this, eR), (0, lR.m)(this, aR, void 0)), this.partnumber = ((0, lR.m)(this, LR), (0, lR.m)(this, nR, void 0)), this.name = ((0, lR.m)(this, UR), (0, lR.m)(this, WR, void 0)), this.pid = ((0, lR.m)(this, AR), (0, lR.m)(this, CR, void 0)), this.pindex = ((0, lR.m)(this, XR), (0, lR.m)(this, MR, void 0)), this.metadatagroup = (0, lR.m)(this, BR), this.id = RR, this.type = JR
          }
        };
        return (0, lR.n)(JR, "ThreeMfObject"), (() => {
          const pR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "id"
          })], yR = [DZ({
            name: "type"
          })], tR = [DZ({
            name: "thumbnail"
          })], uR = [DZ({
            name: "partnumber"
          })], ZR = [DZ({
            name: "name"
          })], qR = [DZ({
            name: "pid"
          })], iR = [DZ({
            name: "pindex"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: RR => "id" in RR,
              get: RR => RR.id,
              set: (RR, JR) => {
                RR.id = JR
              }
            },
            metadata: pR
          }, KR, wR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: RR => "type" in RR,
              get: RR => RR.type,
              set: (RR, JR) => {
                RR.type = JR
              }
            },
            metadata: pR
          }, rR, eR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: RR => "thumbnail" in RR,
              get: RR => RR.thumbnail,
              set: (RR, JR) => {
                RR.thumbnail = JR
              }
            },
            metadata: pR
          }, aR, LR), (0, lR.l)(null, null, uR, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: RR => "partnumber" in RR,
              get: RR => RR.partnumber,
              set: (RR, JR) => {
                RR.partnumber = JR
              }
            },
            metadata: pR
          }, nR, UR), (0, lR.l)(null, null, ZR, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: RR => "name" in RR,
              get: RR => RR.name,
              set: (RR, JR) => {
                RR.name = JR
              }
            },
            metadata: pR
          }, WR, AR), (0, lR.l)(null, null, qR, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: RR => "pid" in RR,
              get: RR => RR.pid,
              set: (RR, JR) => {
                RR.pid = JR
              }
            },
            metadata: pR
          }, CR, XR), (0, lR.l)(null, null, iR, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: RR => "pindex" in RR,
              get: RR => RR.pindex,
              set: (RR, JR) => {
                RR.pindex = JR
              }
            },
            metadata: pR
          }, MR, BR), (0, lR.l)(null, RR = {
            value: JR
          }, fR, {
            kind: "class",
            name: JR.name,
            metadata: pR
          }, null, VR), JR = RR.value, pR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pR
          }), (0, lR.m)(JR, VR)
        })(), JR
      })(),
      bq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "mesh"
          })],
          yR = [];
        JR = class {
          constructor(RR, JR) {
            this.vertices = RR ?? new vq, this.triangles = JR ?? new xq
          }
        };
        return (0, lR.n)(JR, "ThreeMfMesh"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      vq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "vertices"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfVertices"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      Oq = (() => {
        let RR, JR, GR, yR, tR, uR = [xZ({
            ns: yq,
            name: "vertex"
          })],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        JR = class {
          constructor() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, lR.m)(this, qR, void 0), this.y = ((0, lR.m)(this, iR), (0, lR.m)(this, fR, void 0)), this.z = ((0, lR.m)(this, VR), (0, lR.m)(this, KR, void 0)), (0, lR.m)(this, wR), this.x = RR, this.y = JR, this.z = GR
          }
        };
        return (0, lR.n)(JR, "ThreeMfVertex"), (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "x"
          })], yR = [DZ({
            name: "y"
          })], tR = [DZ({
            name: "z"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: RR => "x" in RR,
              get: RR => RR.x,
              set: (RR, JR) => {
                RR.x = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: RR => "y" in RR,
              get: RR => RR.y,
              set: (RR, JR) => {
                RR.y = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: RR => "z" in RR,
              get: RR => RR.z,
              set: (RR, JR) => {
                RR.z = JR
              }
            },
            metadata: rR
          }, KR, wR), (0, lR.l)(null, RR = {
            value: JR
          }, uR, {
            kind: "class",
            name: JR.name,
            metadata: rR
          }, null, ZR), JR = RR.value, rR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          }), (0, lR.m)(JR, ZR)
        })(), JR
      })(),
      xq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "triangles"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfTriangles"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      Nq = (() => {
        let RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR = [xZ({
            ns: yq,
            name: "triangle"
          })],
          VR = [],
          KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [],
          nR = [],
          UR = [],
          WR = [],
          AR = [],
          CR = [],
          XR = [],
          MR = [],
          BR = [];
        JR = class {
          constructor(RR, JR, GR) {
            this.v1 = (0, lR.m)(this, KR, void 0), this.v2 = ((0, lR.m)(this, wR), (0, lR.m)(this, rR, void 0)), this.v3 = ((0, lR.m)(this, eR), (0, lR.m)(this, aR, void 0)), this.p1 = ((0, lR.m)(this, LR), (0, lR.m)(this, nR, void 0)), this.p2 = ((0, lR.m)(this, UR), (0, lR.m)(this, WR, void 0)), this.p3 = ((0, lR.m)(this, AR), (0, lR.m)(this, CR, void 0)), this.pid = ((0, lR.m)(this, XR), (0, lR.m)(this, MR, void 0)), (0, lR.m)(this, BR), this.v1 = RR, this.v2 = JR, this.v3 = GR
          }
        };
        return (0, lR.n)(JR, "ThreeMfTriangle"), (() => {
          const pR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "v1"
          })], yR = [DZ({
            name: "v2"
          })], tR = [DZ({
            name: "v3"
          })], uR = [DZ({
            name: "p1"
          })], ZR = [DZ({
            name: "p2"
          })], qR = [DZ({
            name: "p3"
          })], iR = [DZ({
            name: "pid"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: RR => "v1" in RR,
              get: RR => RR.v1,
              set: (RR, JR) => {
                RR.v1 = JR
              }
            },
            metadata: pR
          }, KR, wR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: RR => "v2" in RR,
              get: RR => RR.v2,
              set: (RR, JR) => {
                RR.v2 = JR
              }
            },
            metadata: pR
          }, rR, eR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: RR => "v3" in RR,
              get: RR => RR.v3,
              set: (RR, JR) => {
                RR.v3 = JR
              }
            },
            metadata: pR
          }, aR, LR), (0, lR.l)(null, null, uR, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: RR => "p1" in RR,
              get: RR => RR.p1,
              set: (RR, JR) => {
                RR.p1 = JR
              }
            },
            metadata: pR
          }, nR, UR), (0, lR.l)(null, null, ZR, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: RR => "p2" in RR,
              get: RR => RR.p2,
              set: (RR, JR) => {
                RR.p2 = JR
              }
            },
            metadata: pR
          }, WR, AR), (0, lR.l)(null, null, qR, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: RR => "p3" in RR,
              get: RR => RR.p3,
              set: (RR, JR) => {
                RR.p3 = JR
              }
            },
            metadata: pR
          }, CR, XR), (0, lR.l)(null, null, iR, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: RR => "pid" in RR,
              get: RR => RR.pid,
              set: (RR, JR) => {
                RR.pid = JR
              }
            },
            metadata: pR
          }, MR, BR), (0, lR.l)(null, RR = {
            value: JR
          }, fR, {
            kind: "class",
            name: JR.name,
            metadata: pR
          }, null, VR), JR = RR.value, pR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pR
          }), (0, lR.m)(JR, VR)
        })(), JR
      })(),
      Dq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "components"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.component = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfComponents"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      Hq = (() => {
        let RR, JR, GR, yR, tR = [xZ({
            ns: yq,
            name: "component"
          })],
          uR = [],
          ZR = [],
          qR = [],
          iR = [],
          fR = [];
        JR = class {
          constructor(RR, JR) {
            this.objectid = (0, lR.m)(this, ZR, void 0), this.transform = ((0, lR.m)(this, qR), (0, lR.m)(this, iR, void 0)), (0, lR.m)(this, fR), this.objectid = RR, this.transform = JR
          }
        };
        return (0, lR.n)(JR, "ThreeMfComponent"), (() => {
          const VR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "objectid"
          })], yR = [DZ({
            name: "transform",
            formatter: Xq
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: RR => "objectid" in RR,
              get: RR => RR.objectid,
              set: (RR, JR) => {
                RR.objectid = JR
              }
            },
            metadata: VR
          }, ZR, qR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: RR => "transform" in RR,
              get: RR => RR.transform,
              set: (RR, JR) => {
                RR.transform = JR
              }
            },
            metadata: VR
          }, iR, fR), (0, lR.l)(null, RR = {
            value: JR
          }, tR, {
            kind: "class",
            name: JR.name,
            metadata: VR
          }, null, uR), JR = RR.value, VR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VR
          }), (0, lR.m)(JR, uR)
        })(), JR
      })(),
      oq = (() => {
        let RR, JR, GR, yR = [xZ({
            ns: yq,
            name: "basematerials"
          })],
          tR = [],
          uR = [],
          ZR = [];
        JR = class {
          constructor(RR) {
            this.id = (0, lR.m)(this, uR, void 0), this.base = ((0, lR.m)(this, ZR), []), this.id = RR
          }
        };
        return (0, lR.n)(JR, "ThreeMfBaseMaterials"), (() => {
          const qR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "id"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: RR => "id" in RR,
              get: RR => RR.id,
              set: (RR, JR) => {
                RR.id = JR
              }
            },
            metadata: qR
          }, uR, ZR), (0, lR.l)(null, RR = {
            value: JR
          }, yR, {
            kind: "class",
            name: JR.name,
            metadata: qR
          }, null, tR), JR = RR.value, qR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qR
          }), (0, lR.m)(JR, tR)
        })(), JR
      })(),
      cq = (() => {
        let RR, JR, GR, yR, tR = [xZ({
            ns: yq,
            name: "base"
          })],
          uR = [],
          ZR = [],
          qR = [],
          iR = [],
          fR = [];
        JR = class {
          constructor(RR, JR) {
            this.name = (0, lR.m)(this, ZR, void 0), this.displaycolor = ((0, lR.m)(this, qR), (0, lR.m)(this, iR, void 0)), (0, lR.m)(this, fR), this.name = RR, this.displaycolor = JR
          }
        };
        return (0, lR.n)(JR, "ThreeMfBase"), (() => {
          const VR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "name"
          })], yR = [DZ({
            name: "displaycolor"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: RR => "name" in RR,
              get: RR => RR.name,
              set: (RR, JR) => {
                RR.name = JR
              }
            },
            metadata: VR
          }, ZR, qR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: RR => "displaycolor" in RR,
              get: RR => RR.displaycolor,
              set: (RR, JR) => {
                RR.displaycolor = JR
              }
            },
            metadata: VR
          }, iR, fR), (0, lR.l)(null, RR = {
            value: JR
          }, tR, {
            kind: "class",
            name: JR.name,
            metadata: VR
          }, null, uR), JR = RR.value, VR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VR
          }), (0, lR.m)(JR, uR)
        })(), JR
      })(),
      Pq = (() => {
        let RR, JR, GR = [xZ({
            ns: yq,
            name: "build"
          })],
          yR = [];
        JR = class {
          constructor() {
            this.item = []
          }
        };
        return (0, lR.n)(JR, "ThreeMfBuild"), (() => {
          const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, lR.l)(null, RR = {
            value: JR
          }, GR, {
            kind: "class",
            name: JR.name,
            metadata: tR
          }, null, yR), JR = RR.value, tR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tR
          }), (0, lR.m)(JR, yR)
        })(), JR
      })(),
      Iq = (() => {
        let RR, JR, GR, yR, tR, uR = [xZ({
            ns: yq,
            name: "item"
          })],
          ZR = [],
          qR = [],
          iR = [],
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        JR = class {
          constructor(RR, JR, GR) {
            this.objectid = (0, lR.m)(this, qR, void 0), this.transform = ((0, lR.m)(this, iR), (0, lR.m)(this, fR, void 0)), this.partnumber = ((0, lR.m)(this, VR), (0, lR.m)(this, KR, void 0)), this.metadatagroup = (0, lR.m)(this, wR), this.objectid = RR, this.transform = JR, this.partnumber = GR
          }
        };
        return (0, lR.n)(JR, "ThreeMfItem"), (() => {
          const rR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          GR = [DZ({
            name: "objectid"
          })], yR = [DZ({
            name: "transform",
            formatter: Xq
          })], tR = [DZ({
            name: "partnumber"
          })], (0, lR.l)(null, null, GR, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: RR => "objectid" in RR,
              get: RR => RR.objectid,
              set: (RR, JR) => {
                RR.objectid = JR
              }
            },
            metadata: rR
          }, qR, iR), (0, lR.l)(null, null, yR, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: RR => "transform" in RR,
              get: RR => RR.transform,
              set: (RR, JR) => {
                RR.transform = JR
              }
            },
            metadata: rR
          }, fR, VR), (0, lR.l)(null, null, tR, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: RR => "partnumber" in RR,
              get: RR => RR.partnumber,
              set: (RR, JR) => {
                RR.partnumber = JR
              }
            },
            metadata: rR
          }, KR, wR), (0, lR.l)(null, RR = {
            value: JR
          }, uR, {
            kind: "class",
            name: JR.name,
            metadata: rR
          }, null, ZR), JR = RR.value, rR && Object.defineProperty(JR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rR
          }), (0, lR.m)(JR, ZR)
        })(), JR
      })();
    class mq {
      constructor(RR, JR) {
        this._object = new gq(RR, JR)
      }
      withName(RR) {
        return this._object.name = RR, this
      }
      withThumbnail(RR) {
        return this._object.thumbnail = RR, this
      }
      withProperty(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = RR, this._object.id = JR, this
      }
      build() {
        return this._object
      }
      reset(RR, JR) {
        this._object = new gq(RR, JR)
      }
    }
    class zq extends mq {
      constructor(RR) {
        super(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zq.model), this._object.content = new Dq
      }
      withComponent(RR, JR) {
        return this._object.content.component.push(new Hq(RR, JR)), this
      }
    }
    class Sq extends mq {
      constructor(RR) {
        super(RR, Zq.model)
      }
      withPostProcessHandlers(RR, JR) {
        return this._vh = RR, this._th = JR, this
      }
      withData(RR) {
        return this._object.content = this._buildMesh(RR), this
      }
      withMaterial(RR, JR) {
        return this._object.pid = RR, this._object.pindex = JR, this
      }
      _buildMesh(RR) {
        const JR = this._buildVertices(RR.positions),
          GR = this._buildTriangle(RR.indices);
        return new bq(JR, GR)
      }
      _buildVertices(RR) {
        const JR = new vq;
        if (RR)
          for (let GR = 0; GR < RR.length;) {
            const yR = RR[GR++],
              tR = RR[GR++],
              uR = RR[GR++];
            let ZR = new Oq(yR, tR, uR);
            this._vh && (ZR = this._vh(ZR)), JR.vertex.push(ZR)
          }
        return JR
      }
      _buildTriangle(RR) {
        const JR = new xq;
        if (RR)
          for (let GR = 0; GR < RR.length;) {
            const yR = RR[GR++],
              tR = RR[GR++],
              uR = RR[GR++];
            let ZR = new Nq(yR, tR, uR);
            this._th && (ZR = this._th(ZR)), JR.triangle.push(ZR)
          }
        return JR
      }
    }
    class jq {
      constructor(RR) {
        this._m = new oq(RR)
      }
      withColor(RR, JR) {
        this._m.base = this._m.base ?? [];
        let GR = this._m.base.find((JR => JR.name.toLowerCase() === RR.toLowerCase()));
        return GR ? (GR.displaycolor = this._rgbaToHex(JR), this) : (GR = new cq(RR, this._rgbaToHex(JR)), this._m.base.push(GR), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(RR) {
        const JR = RR => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(RR, 1 / 2.2)))),
          GR = JR(RR.r).toString(16).padStart(2, "0").toUpperCase(),
          yR = JR(RR.g).toString(16).padStart(2, "0").toUpperCase(),
          tR = JR(RR.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof RR.a) {
          return `#${GR}${yR}${tR}${Math.round(Math.min(255,Math.max(0,255*RR.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${GR}${yR}${tR}`
      }
    }
    class dq {
      constructor() {
        this._model = new Mq, this._objects = new Map
      }
      withMetaData(RR, JR, GR, yR) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Bq(RR, JR, GR, yR)), this
      }
      withMaterial(RR) {
        return RR instanceof jq && (RR = RR.build()), RR && (this._model.resources = this._model.resources ?? new pq, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(RR)), this
      }
      withMesh(RR) {
        return RR instanceof Sq && (RR = RR.build()), this._model.resources = this._model.resources ?? new pq, this._model.resources.object.push(RR), this
      }
      withComponents(RR) {
        return RR instanceof zq && (RR = RR.build()), this._model.resources = this._model.resources ?? new pq, this._model.resources.object.push(RR), this
      }
      withBuild(RR, JR, GR) {
        return this._model.build = this._model.build ?? new Pq, this._model.build.item?.push(new Iq(RR, JR, GR)), this
      }
      withUnit(RR) {
        return this._model.unit = RR, this
      }
      reset() {
        return this._model = new Mq, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    dq.KnownMetaSet = new Set(Mq.KnownMeta.map((RR => RR.toLowerCase())));
    class Eq {
      withContentType(RR) {
        this._cts || (this._cts = new Lq);
        const JR = this._cts.items;
        return JR.some((JR => JR.ext === RR.ext && JR.ct === RR.ct)) || JR.push(RR), this
      }
      withRelationship(RR) {
        this._rs || (this._rs = new Uq);
        const JR = this._rs.items;
        return JR.some((JR => JR.id === RR.id)) || JR.push(RR), this.withContentType(new nq("rels", fq.Relationships)), this
      }
      withModel(RR) {
        return RR instanceof dq && (RR = RR.build()), this._m = RR, this.withContentType(new nq("model", fq.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const RR = `${Kq}${wq}`;
        if (!this._rs) {
          const JR = `/${RR}`;
          this.withRelationship(new Wq("rel0", aq.ThreeDimModel, JR))
        }
        return new Aq(this._cts, this._rs, this._m)
      }
    }
    class Yq {
      constructor(RR) {
        this._o = RR
      }
      get options() {
        return this._o
      }
      async serializeAsync(RR) {
        const JR = await this.ensureZipLibReadyAsync();
        if (!JR) return;
        const GR = JR.Zip,
          yR = JR.ZipDeflate;
        if (!GR || !yR) throw new Error("fflate Zip / ZipDeflate not available");
        const tR = function(RR, JR, GR) {
          const tR = new yR(JR, {
            level: 6
          });
          RR.add(tR);
          const uR = function(RR) {
              return {
                push: (JR, GR) => RR.push(JR, GR)
              }
            }(tR),
            ZR = new Gq(uR),
            qR = new Rq(ZR).dec("1.0", "UTF-8");
          new TZ(qR).serialize(GR), ZR.finish()
        };
        for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
        const iR = this.toDocument(...ZR);
        if (!iR) return;
        const fR = new GR(RR);
        tR(fR, eq, iR.contentTypes), tR(fR, `${Vq}${rq}`, iR.relationships), tR(fR, `${Kq}${wq}`, iR.model), fR.end()
      }
      toDocument() {
        const RR = (new dq).withUnit(this._o?.unit ?? uq.millimeter);
        if (this.options.metadata)
          for (const tR in this.options.metadata) RR.withMetaData(tR, this.options.metadata[tR]);
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return (new Eq).withModel(this.toModel(RR, ...GR)).build()
      }
    }
    class kq {
      static async SerializeToMemoryAsync(RR) {
        const JR = new Array;
        let GR = 0;
        for (var yR = arguments.length, tR = new Array(yR > 1 ? yR - 1 : 0), uR = 1; uR < yR; uR++) tR[uR - 1] = arguments[uR];
        if (await RR.serializeAsync((function(RR, yR, tR) {
            JR.push(yR), GR += yR.length
          }), ...tR), !GR) return;
        const ZR = new Uint8Array(GR);
        let qR = 0;
        for (const iR of JR) ZR.set(iR, qR), qR += iR.length;
        return ZR
      }
    }
    class Qq {}
    Qq.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Fq {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = RR, this._to = JR, this._step = GR, this._i = RR
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const RR = this._i;
        return this._i += this._step, RR
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Tq extends Yq {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Tq.DefaultOptions,
          ...RR
        })
      }
      toModel(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        GR = GR.filter((RR => RR instanceof fy.b || RR instanceof rR.e));
        const tR = new Fq,
          uR = RR,
          ZR = new Map,
          qR = this.options.exportInstances ? [] : null;
        for (let iR = 0; iR < GR.length; iR++) {
          const RR = GR[iR];
          if (RR instanceof rR.e) {
            qR?.push(RR);
            continue
          }
          const JR = RR.name || `mesh${iR}`,
            yR = RR.getWorldMatrix(),
            fR = this._handleBabylonTo3mfMatrixTransformToRef(yR, Cq.Zero()),
            VR = RR.XM;
          if (void 0 === VR) continue;
          const KR = 1 == VR.length;
          for (let GR = 0; GR < VR.length; GR++) {
            const yR = VR[GR],
              qR = this._extractSubMesh(RR, yR);
            if (qR) {
              const RR = KR ? `${JR}` : `${JR}_${GR}`,
                iR = new Sq(tR.next()).withData(qR).withName(RR).build();
              uR.withMesh(iR), uR.withBuild(iR.id, fR), ZR.set(yR, iR)
            }
          }
        }
        if (qR && qR.length) {
          const RR = this._groupBy(qR, (RR => RR.IuR));
          for (const [JR, GR] of Array.from(RR.entries()))
            if (GR && GR.length)
              for (let RR = 0; RR < GR.length; RR++) {
                const yR = GR[RR].getWorldMatrix(),
                  tR = JR.XM;
                for (let RR = 0; RR < tR.length; RR++) {
                  const JR = tR[RR],
                    GR = ZR.get(JR);
                  GR && uR.withBuild(GR.id, this._handleBabylonTo3mfMatrixTransformToRef(yR, Cq.Zero()))
                }
              }
        }
        return uR.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const RR = globalThis;
          return RR.fflate || await tR.Tools.LoadScriptAsync(Qq.FFLATEUrl), RR.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(RR, JR) {
        const GR = RR.NuR();
        if (!GR) return;
        const yR = RR.getVerticesData(Tq._PositionKind);
        if (!yR) return;
        if (0 == JR.indexStart && JR.indexCount == GR.length) return {
          positions: yR,
          indices: GR
        };
        const tR = JR.indexStart,
          uR = new Map,
          ZR = [],
          qR = new Uint32Array(JR.indexCount);
        for (let iR = 0; iR < JR.indexCount; iR++) {
          const RR = GR[tR + iR];
          let JR = uR.get(RR);
          if (void 0 === JR) {
            JR = uR.size, uR.set(RR, JR);
            const GR = 3 * RR;
            ZR.push(yR[GR], yR[GR + 1], yR[GR + 2])
          }
          qR[iR] = JR
        }
        return {
          positions: new Float32Array(ZR),
          indices: qR
        }
      }
      _groupBy(RR, JR) {
        const GR = new Map;
        for (const yR of RR) {
          const RR = JR(yR),
            tR = GR.get(RR);
          tR ? tR.push(yR) : GR.set(RR, [yR])
        }
        return GR
      }
      _handleBabylonTo3mfMatrixTransformToRef(RR, JR) {
        const GR = RR.multiplyToRef(Tq._R_BJS_TO_3MF, PR.e.Zero()).m;
        return JR.values = [GR[0], GR[1], GR[2], GR[4], GR[5], GR[6], GR[8], GR[9], GR[10], GR[12], GR[13], GR[14]], JR
      }
    }
    Tq.DefaultOptions = {
      unit: uq.meter,
      exportInstances: !1
    }, Tq._PositionKind = "position", Tq._R_BJS_TO_3MF = PR.e.RotationX(Math.PI / 2).multiply(PR.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);