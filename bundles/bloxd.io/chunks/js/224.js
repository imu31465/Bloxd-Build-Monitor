export const id = 224;
export const ids = [224, 229];
export const modules = {
  41184: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(41114),
      pU = gU(39373);
    let EU = !1;

    function PU() {
      EU || (EU = !0, pU.b.prototype._sphericalPolynomialTargetSize = 0, pU.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(pU.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = tU.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((UU => {
              this._texture._sphericalPolynomial = UU, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(UU) {
          this._texture && (this._texture._sphericalPolynomial = UU)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36754: (UU, RU, gU) => {
    gU.d(RU, {
      Color3: () => tU.e,
      c: () => tU.g
    });
    var tU = gU(36761);
    (0, tU.k)()
  },
  37301: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(37308);
    class pU {
      static GetPlanes(UU) {
        const RU = [];
        for (let gU = 0; gU < 6; gU++) RU.push(new tU.e(0, 0, 0, 0));
        return pU.GetPlanesToRef(UU, RU), RU
      }
      static GetNearPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[2], RU.normal.y = gU[7] + gU[6], RU.normal.z = gU[11] + gU[10], RU.d = gU[15] + gU[14], RU.normalize()
      }
      static GetFarPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[2], RU.normal.y = gU[7] - gU[6], RU.normal.z = gU[11] - gU[10], RU.d = gU[15] - gU[14], RU.normalize()
      }
      static GetLeftPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[0], RU.normal.y = gU[7] + gU[4], RU.normal.z = gU[11] + gU[8], RU.d = gU[15] + gU[12], RU.normalize()
      }
      static GetRightPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[0], RU.normal.y = gU[7] - gU[4], RU.normal.z = gU[11] - gU[8], RU.d = gU[15] - gU[12], RU.normalize()
      }
      static GetTopPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[1], RU.normal.y = gU[7] - gU[5], RU.normal.z = gU[11] - gU[9], RU.d = gU[15] - gU[13], RU.normalize()
      }
      static GetBottomPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[1], RU.normal.y = gU[7] + gU[5], RU.normal.z = gU[11] + gU[9], RU.d = gU[15] + gU[13], RU.normalize()
      }
      static GetPlanesToRef(UU, RU) {
        pU.GetNearPlaneToRef(UU, RU[0]), pU.GetFarPlaneToRef(UU, RU[1]), pU.GetLeftPlaneToRef(UU, RU[2]), pU.GetRightPlaneToRef(UU, RU[3]), pU.GetTopPlaneToRef(UU, RU[4]), pU.GetBottomPlaneToRef(UU, RU[5])
      }
      static IsPointInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; gU++)
          if (RU[gU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  37308: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU, pU) {
        this.normal = new tU.n(UU, RU, gU), this.d = pU
      }
      vgU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RU = 0;
        return 0 !== UU && (RU = 1 / UU), this.normal.x *= RU, this.normal.y *= RU, this.normal.z *= RU, this.d *= RU, this
      }
      transform(UU) {
        const RU = pU._TmpMatrix;
        UU.invertToRef(RU);
        const gU = RU.m,
          tU = this.normal.x,
          EU = this.normal.y,
          PU = this.normal.z,
          TU = this.d,
          qU = tU * gU[0] + EU * gU[1] + PU * gU[2] + TU * gU[3],
          KU = tU * gU[4] + EU * gU[5] + PU * gU[6] + TU * gU[7],
          cU = tU * gU[8] + EU * gU[9] + PU * gU[10] + TU * gU[11],
          GU = tU * gU[12] + EU * gU[13] + PU * gU[14] + TU * gU[15];
        return new pU(qU, KU, cU, GU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, RU, gU) {
        const tU = RU.x - UU.x,
          pU = RU.y - UU.y,
          EU = RU.z - UU.z,
          PU = gU.x - UU.x,
          TU = gU.y - UU.y,
          qU = gU.z - UU.z,
          KU = pU * qU - EU * TU,
          cU = EU * PU - tU * qU,
          GU = tU * TU - pU * PU,
          jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
        let uU;
        return uU = 0 !== jU ? 1 / jU : 0, this.normal.x = KU * uU, this.normal.y = cU * uU, this.normal.z = GU * uU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, RU) {
        return tU.n.Dot(this.normal, UU) <= RU
      }
      signedDistanceTo(UU) {
        return tU.n.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new pU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, RU, gU) {
        const tU = new pU(0, 0, 0, 0);
        return tU.copyFromPoints(UU, RU, gU), tU
      }
      static FromPositionAndNormal(UU, RU) {
        const gU = new pU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, RU, gU)
      }
      static FromPositionAndNormalToRef(UU, RU, gU) {
        return gU.normal.PgU(RU), gU.normal.normalize(), gU.d = -UU.dot(gU.normal), gU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, RU, gU) {
        const pU = -(RU.x * UU.x + RU.y * UU.y + RU.z * UU.z);
        return tU.n.Dot(gU, RU) + pU
      }
    }
    pU._TmpMatrix = tU.c.Identity()
  },
  36593: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Matrix: () => tU.c,
      Quaternion: () => tU.d,
      RegisterMathVector: () => tU.g,
      TmpVectors: () => tU.h,
      Vector2: () => tU.l,
      xC: () => tU.n,
      Vector4: () => tU.q
    });
    var tU = gU(36600);
    (0, tU.g)()
  },
  37641: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU, gU, tU) {
        this.x = UU, this.y = RU, this.width = gU, this.height = tU
      }
      toGlobal(UU, RU) {
        return new tU(this.x * UU, this.y * RU, this.width * UU, this.height * RU)
      }
      toGlobalToRef(UU, RU, gU) {
        return gU.x = this.x * UU, gU.y = this.y * RU, gU.width = this.width * UU, gU.height = this.height * RU, this
      }
      clone() {
        return new tU(this.x, this.y, this.width, this.height)
      }
    }
  },
  41114: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU
    });
    var tU = gU(36600),
      pU = gU(36626),
      EU = gU(39364),
      PU = gU(36602),
      TU = gU(36761);
    class qU {
      constructor(UU, RU, gU, tU) {
        this.name = UU, this.worldAxisForNormal = RU, this.worldAxisForFileX = gU, this.worldAxisForFileY = tU
      }
    }
    class KU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.aZ()?.WC().flushFramebuffer();
        const RU = UU.getSize().width,
          gU = UU._sphericalPolynomialTargetSize,
          tU = gU > 0 ? this._NearestPow2Floor(gU) : 0,
          pU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          EU = tU > 0 && tU < RU && pU,
          PU = EU ? Math.max(0, Math.round(Math.log2(RU / tU))) : 0,
          TU = EU ? Math.max(1, Math.floor(RU / Math.pow(2, PU))) : RU,
          qU = UU.readPixels(0, PU, void 0, !1),
          KU = UU.readPixels(1, PU, void 0, !1);
        let cU, GU;
        UU.isRenderTarget ? (cU = UU.readPixels(3, PU, void 0, !1), GU = UU.readPixels(2, PU, void 0, !1)) : (cU = UU.readPixels(2, PU, void 0, !1), GU = UU.readPixels(3, PU, void 0, !1));
        const jU = UU.readPixels(4, PU, void 0, !1),
          uU = UU.readPixels(5, PU, void 0, !1),
          CU = UU.gammaSpace,
          hU = tU > 0 && tU < RU && !EU;
        return new Promise((UU => {
          Promise.all([KU, qU, cU, GU, jU, uU]).then((gU => {
            let [pU, EU, PU, qU, KU, cU] = gU, GU = TU;
            if (hU) {
              const UU = 4;
              pU = this._DownsampleFace(pU, RU, tU, UU), EU = this._DownsampleFace(EU, RU, tU, UU), PU = this._DownsampleFace(PU, RU, tU, UU), qU = this._DownsampleFace(qU, RU, tU, UU), KU = this._DownsampleFace(KU, RU, tU, UU), cU = this._DownsampleFace(cU, RU, tU, UU), GU = tU
            }
            const jU = {
              size: GU,
              right: EU,
              left: pU,
              up: PU,
              down: qU,
              front: KU,
              back: cU,
              format: 5,
              type: pU instanceof Float32Array ? 1 : 0,
              gammaSpace: CU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(jU))
          }))
        }))
      }
      static _AreaElement(UU, RU) {
        return Math.atan2(UU * RU, Math.sqrt(UU * UU + RU * RU + 1))
      }
      static _DownsampleFace(UU, RU, gU, tU) {
        const pU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          EU = gU * gU * tU,
          PU = new Float32Array(EU),
          TU = RU / gU,
          qU = 1 / (TU * TU);
        for (let cU = 0; cU < gU; cU++) {
          const UU = Math.floor(cU * TU),
            EU = Math.floor((cU + 1) * TU);
          for (let KU = 0; KU < gU; KU++) {
            const GU = Math.floor(KU * TU),
              jU = Math.floor((KU + 1) * TU),
              uU = (cU * gU + KU) * tU;
            for (let gU = 0; gU < tU; gU++) {
              let TU = 0;
              for (let PU = UU; PU < EU; PU++)
                for (let UU = GU; UU < jU; UU++) TU += pU[(PU * RU + UU) * tU + gU];
              PU[uU + gU] = TU * qU
            }
          }
        }
        if (UU instanceof Float32Array) return PU;
        const KU = new(0, UU.constructor)(EU);
        for (let cU = 0; cU < EU; cU++) KU[cU] = PU[cU] + .5 | 0;
        return KU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = RU > 0 ? this._NearestPow2Floor(RU) : 0;
        if (gU > 0 && UU.size > gU) {
          const RU = 5 === UU.format ? 4 : 3,
            tU = ["right", "left", "up", "down", "front", "back"],
            pU = {};
          for (const EU of tU) pU[EU] = this._DownsampleFace(UU[EU], UU.size, gU, RU);
          UU = {
            ...UU,
            ...pU,
            size: gU
          }
        }
        const tU = new EU.b;
        let qU = 0;
        const KU = 2 / UU.size,
          cU = KU,
          GU = .5 * KU,
          jU = GU - 1;
        for (let EU = 0; EU < 6; EU++) {
          const RU = this._FileFaces[EU],
            gU = UU[RU.name];
          let uU = jU;
          const CU = 5 === UU.format ? 4 : 3;
          for (let EU = 0; EU < UU.size; EU++) {
            let hU = jU;
            for (let cU = 0; cU < UU.size; cU++) {
              const jU = RU.worldAxisForFileX.scale(hU).add(RU.worldAxisForFileY.scale(uU)).add(RU.worldAxisForNormal);
              jU.normalize();
              const QU = this._AreaElement(hU - GU, uU - GU) - this._AreaElement(hU - GU, uU + GU) - this._AreaElement(hU + GU, uU - GU) + this._AreaElement(hU + GU, uU + GU);
              let eU = gU[EU * UU.size * CU + cU * CU + 0],
                WU = gU[EU * UU.size * CU + cU * CU + 1],
                fU = gU[EU * UU.size * CU + cU * CU + 2];
              isNaN(eU) && (eU = 0), isNaN(WU) && (WU = 0), isNaN(fU) && (fU = 0), 0 === UU.type && (eU /= 255, WU /= 255, fU /= 255), UU.gammaSpace && (eU = Math.pow((0, pU.Clamp)(eU), PU.k), WU = Math.pow((0, pU.Clamp)(WU), PU.k), fU = Math.pow((0, pU.Clamp)(fU), PU.k));
              const xU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(eU, WU, fU);
                if (UU > xU) {
                  const RU = xU / UU;
                  eU *= RU, WU *= RU, fU *= RU
                }
              } else eU = (0, pU.Clamp)(eU, 0, xU), WU = (0, pU.Clamp)(WU, 0, xU), fU = (0, pU.Clamp)(fU, 0, xU);
              const mU = new TU.e(eU, WU, fU);
              tU.addLight(jU, mU, QU), qU += QU, hU += KU
            }
            uU += cU
          }
        }
        const uU = 6 * (4 * Math.PI) / 6 / qU;
        return tU.scaleInPlace(uU), tU.convertIncidentRadianceToIrradiance(), tU.convertIrradianceToLambertianRadiance(), EU.c.FromHarmonics(tU)
      }
    }
    KU._FileFaces = [new qU("right", new tU.n(1, 0, 0), new tU.n(0, 0, -1), new tU.n(0, -1, 0)), new qU("left", new tU.n(-1, 0, 0), new tU.n(0, 0, 1), new tU.n(0, -1, 0)), new qU("up", new tU.n(0, 1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, 1)), new qU("down", new tU.n(0, -1, 0), new tU.n(1, 0, 0), new tU.n(0, 0, -1)), new qU("front", new tU.n(0, 0, 1), new tU.n(1, 0, 0), new tU.n(0, -1, 0)), new qU("back", new tU.n(0, 0, -1), new tU.n(-1, 0, 0), new tU.n(0, -1, 0))], KU.MAX_HDRI_VALUE = 4096, KU.PRESERVE_CLAMPED_COLORS = !1
  },
  40929: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU.h,
      g: () => tU.p
    });
    var tU = gU(39424);
    (0, tU.t)()
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  41161: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(41147),
      pU = gU(41165);
    class EU {
      static ExpandRGBDTexture(UU) {
        const RU = UU._texture;
        if (!RU || !UU.isRGBD) return;
        const pU = RU.WC(),
          EU = pU.getCaps(),
          PU = RU.isReady;
        let TU = !1;
        EU.textureHalfFloatRender && EU.textureHalfFloatLinearFiltering ? (TU = !0, RU.type = 2) : EU.textureFloatRender && EU.textureFloatLinearFiltering && (TU = !0, RU.type = 1), TU && (RU.isReady = !1, RU._isRGBD = !1, RU.invertY = !1);
        const qU = async () => {
          const EU = pU.isWebGPU,
            PU = EU ? 1 : 0;
          RU.isReady = !1, EU ? await gU.e(332).then((() => gU(60758))) : await gU.e(314).then((() => gU(60762)));
          const TU = new tU.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, pU, !1, void 0, RU.type, void 0, null, !1, void 0, PU);
          TU.externalTextureSamplerBinding = !0;
          const qU = pU.createRenderTargetTexture(RU.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: RU.samplingMode,
            type: RU.type,
            format: 5
          });
          TU.onEffectCreatedObservable.addOnce((gU => {
            gU.executeWhenCompiled((() => {
              TU.onApply = UU => {
                UU._bindTexture("textureSampler", RU), UU.setFloat2("scale", 1, 1)
              }, UU.aZ()?.postProcessManager.directRender([TU], qU, !0), pU.restoreDefaultFramebuffer(), pU._releaseTexture(RU), TU && TU.dispose(), qU._swapAndDie(RU), RU.isReady = !0
            }))
          }))
        };
        TU && (PU ? qU() : UU.onLoadObservable.addOnce(qU))
      }
      static async EncodeTextureToRGBD(UU, RU) {
        let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return RU.WC().isWebGPU ? await gU.e(333).then((() => gU(60776))) : await gU.e(315).then((() => gU(60773))), await (0, pU.c)("rgbdEncode", UU, RU, tU, 1, 5)
      }
    }
  },
  60528: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AsyncLoop: () => tU.c,
      RegisterTools: () => tU.e,
      Tools: () => tU.g,
      className: () => tU.j
    });
    var tU = gU(39473);
    (0, tU.e)()
  },
  41199: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    class tU {
      constructor(UU) {
        this._pendingActions = new Array, this._workerInfos = UU.map((UU => ({
          workerPromise: Promise.resolve(UU),
          idle: !0
        })))
      }
      dispose() {
        for (const UU of this._workerInfos) UU.workerPromise.then((UU => {
          UU.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(UU) {
        this._executeOnIdleWorker(UU) || this._pendingActions.push(UU)
      }
      _executeOnIdleWorker(UU) {
        for (const RU of this._workerInfos)
          if (RU.idle) return this._execute(RU, UU), !0;
        return !1
      }
      _execute(UU, RU) {
        UU.idle = !1, UU.workerPromise.then((gU => {
          RU(gU, (() => {
            const RU = this._pendingActions.shift();
            RU ? this._execute(UU, RU) : UU.idle = !0
          }))
        }))
      }
    }
    class pU extends tU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.DefaultOptions;
        super([]), this._maxWorkers = UU, this._createWorkerAsync = RU, this._options = gU
      }
      push(UU) {
        if (!this._executeOnIdleWorker(UU))
          if (this._workerInfos.length < this._maxWorkers) {
            const RU = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(RU), this._execute(RU, UU)
          } else this._pendingActions.push(UU)
      }
      _execute(UU, RU) {
        UU.timeoutId && (clearTimeout(UU.timeoutId), delete UU.timeoutId), super._execute(UU, ((gU, tU) => {
          RU(gU, (() => {
            tU(), UU.idle && (UU.timeoutId = setTimeout((() => {
              UU.workerPromise.then((UU => {
                UU.terminate()
              }));
              const RU = this._workerInfos.indexOf(UU); - 1 !== RU && this._workerInfos.splice(RU, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    pU.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60548: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AbstractThreeMfSerializer: () => MT,
      BVHExporter: () => oP,
      ContentTypeFileName: () => hT,
      DefaultXmlSerializerFormatOptions: () => FP,
      DefaultXmlSerializerNumberOptions: () => kP,
      EXT_lights_area: () => Wp,
      EXT_mesh_gpu_instancing: () => St,
      EXT_texture_avif: () => PP,
      EXT_texture_webp: () => gP,
      GLTF2Export: () => vt,
      GLTFData: () => KU,
      GetXmlFieldMeta: () => dP,
      GetXmlName: () => HP,
      IsQualifiedName: () => ZP,
      KHR_draco_mesh_compression: () => lt,
      KHR_interactivity: () => cp,
      KHR_lights_punctual: () => Pp,
      KHR_materials_anisotropy: () => Ip,
      KHR_materials_clearcoat: () => op,
      KHR_materials_coat: () => rp,
      KHR_materials_diffuse_roughness: () => HE,
      KHR_materials_diffuse_transmission: () => sp,
      KHR_materials_dispersion: () => ip,
      KHR_materials_emissive_strength: () => Dp,
      KHR_materials_fuzz: () => jE,
      KHR_materials_ior: () => Op,
      KHR_materials_iridescence: () => tE,
      KHR_materials_openpbr: () => kE,
      KHR_materials_sheen: () => TE,
      KHR_materials_specular: () => QE,
      KHR_materials_transmission: () => xE,
      KHR_materials_unlit: () => nE,
      KHR_materials_volume: () => aE,
      KHR_materials_volume_scatter: () => rE,
      KHR_texture_basisu: () => lE,
      KHR_texture_transform: () => zE,
      Known3mfRelationshipTypes: () => QT,
      KnownI3mfContentType: () => cT,
      Matrix3d: () => IT,
      MatrixFormatter: () => JT,
      ModelFileName: () => uT,
      NumberFormatter: () => zP,
      OBJExport: () => PU,
      Object3dDirName: () => jT,
      OpenXmlContentTypesNamespace: () => qT,
      OpenXmlRelationshipsNamespace: () => KT,
      RegisterEXT_lights_area: () => xp,
      RegisterEXT_mesh_gpu_instancing: () => yt,
      RegisterEXT_texture_avif: () => qP,
      RegisterEXT_texture_webp: () => pP,
      RegisterKHR_draco_mesh_compression: () => Up,
      RegisterKHR_interactivity: () => jp,
      RegisterKHR_lights_punctual: () => qp,
      RegisterKHR_materials_anisotropy: () => wp,
      RegisterKHR_materials_clearcoat: () => ap,
      RegisterKHR_materials_coat: () => vp,
      RegisterKHR_materials_diffuse_roughness: () => sE,
      RegisterKHR_materials_diffuse_transmission: () => kp,
      RegisterKHR_materials_dispersion: () => zp,
      RegisterKHR_materials_emissive_strength: () => Np,
      RegisterKHR_materials_fuzz: () => CE,
      RegisterKHR_materials_ior: () => RE,
      RegisterKHR_materials_iridescence: () => EE,
      RegisterKHR_materials_openpbr: () => iE,
      RegisterKHR_materials_sheen: () => KE,
      RegisterKHR_materials_specular: () => WE,
      RegisterKHR_materials_transmission: () => IE,
      RegisterKHR_materials_unlit: () => oE,
      RegisterKHR_materials_volume: () => BE,
      RegisterKHR_materials_volume_scatter: () => vE,
      RegisterKHR_texture_basisu: () => UP,
      RegisterKHR_texture_transform: () => DE,
      RelationshipDirName: () => GT,
      RelationshipFileName: () => CT,
      ResolveFormatOptions: () => AP,
      ResolveNumberOptions: () => iP,
      STLExport: () => KP,
      ST_ObjectType: () => TT,
      ST_Unit: () => PT,
      StringXmlWriter: () => gT,
      ThreeDimModelNamespace: () => pT,
      ThreeMf: () => DT,
      ThreeMfBase: () => HT,
      ThreeMfBaseMaterials: () => dT,
      ThreeMfBuild: () => ST,
      ThreeMfComponent: () => vT,
      ThreeMfComponents: () => XT,
      ThreeMfComponentsBuilder: () => kT,
      ThreeMfContentType: () => WT,
      ThreeMfContentTypes: () => eT,
      ThreeMfDocument: () => mT,
      ThreeMfDocumentBuilder: () => zT,
      ThreeMfItem: () => sT,
      ThreeMfMaterialBuilder: () => iT,
      ThreeMfMesh: () => aT,
      ThreeMfMeshBuilder: () => FT,
      ThreeMfMeta: () => nT,
      ThreeMfMetadataGroup: () => bT,
      ThreeMfModel: () => wT,
      ThreeMfModelBuilder: () => AT,
      ThreeMfObject: () => ZT,
      ThreeMfObjectBuilder: () => yT,
      ThreeMfRelationship: () => xT,
      ThreeMfRelationships: () => fT,
      ThreeMfResources: () => oT,
      ThreeMfSerializer: () => lT,
      ThreeMfSerializerGlobalConfiguration: () => LT,
      ThreeMfTriangle: () => rT,
      ThreeMfTriangles: () => VT,
      ThreeMfVertex: () => BT,
      ThreeMfVertices: () => YT,
      ToQualifiedString: () => yP,
      TokenType: () => UT,
      TriangleSetsNamespace: () => ET,
      USDZExportAsync: () => nP,
      Utf8XmlWriterToBytes: () => tT,
      XmlAttr: () => XP,
      XmlBuilder: () => RT,
      XmlElem: () => vP,
      XmlIgnore: () => rP,
      XmlName: () => VP,
      XmlNameToParts: () => sP,
      XmlSerializer: () => lP,
      _ConvertToGLTFPBRMetallicRoughness: () => ng,
      _SolveMetallic: () => wg,
      __IGLTFExporterExtension: () => TU
    });
    var tU = gU(36593),
      pU = gU(60528),
      EU = gU(39676);
    class PU {
      static OBJ(UU, RU, gU, PU) {
        const TU = [];
        let qU = 1,
          KU = 1;
        RU && (gU || (gU = "mat"), TU.push("mtllib " + gU + ".mtl"));
        for (let cU = 0; cU < UU.length; cU++) {
          const gU = UU[cU],
            GU = gU.name || `mesh${cU}}`;
          TU.push(`o ${GU}`);
          let jU = null;
          if (PU) {
            const UU = gU.computeWorldMatrix(!0);
            jU = new tU.Matrix, UU.invertToRef(jU), gU.bakeTransformIntoVertices(UU)
          }
          if (RU) {
            const UU = gU.material;
            UU && TU.push("usemtl " + UU.id)
          }
          const uU = gU.geometry;
          if (!uU) {
            pU.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const CU = uU.getVerticesData("position"),
            hU = uU.getVerticesData("normal"),
            QU = uU.getVerticesData("uv"),
            eU = uU.dgU();
          let WU = 0,
            fU = 0;
          if (!CU || !eU) {
            pU.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const xU = UU[0].aZ().useRightHandedSystem ? 1 : -1;
          for (let UU = 0; UU < CU.length; UU += 3) TU.push("v " + CU[UU] * xU + " " + CU[UU + 1] + " " + CU[UU + 2]), WU++;
          if (null != hU)
            for (let UU = 0; UU < hU.length; UU += 3) TU.push("vn " + hU[UU] * xU + " " + hU[UU + 1] + " " + hU[UU + 2]);
          if (null != QU)
            for (let UU = 0; UU < QU.length; UU += 2) TU.push("vt " + QU[UU] + " " + QU[UU + 1]), fU++;
          const mU = ["", "", ""],
            IU = (gU.material || gU.aZ().defaultMaterial)._getEffectiveOrientation(gU),
            [JU, wU] = IU === EU.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let UU = 0; UU < eU.length; UU += 3) {
            const RU = [String(eU[UU] + qU), String(eU[UU + JU] + qU), String(eU[UU + wU] + qU)],
              gU = [String(eU[UU] + KU), String(eU[UU + JU] + KU), String(eU[UU + wU] + KU)],
              tU = RU,
              pU = null != QU ? gU : mU,
              EU = null != hU ? RU : mU;
            TU.push("f " + tU[0] + "/" + pU[0] + "/" + EU[0] + " " + tU[1] + "/" + pU[1] + "/" + EU[1] + " " + tU[2] + "/" + pU[2] + "/" + EU[2])
          }
          PU && jU && gU.bakeTransformIntoVertices(jU), qU += WU, KU += fU
        }
        return TU.join("\n")
      }
      static MTL(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const gU = [],
          tU = UU.material;
        gU.push("newmtl " + RU), gU.push("  Ns " + tU.specularPower.toFixed(4)), gU.push("  Ni 1.5000"), gU.push("  d " + tU.alpha.toFixed(4)), gU.push("  Tr 0.0000"), gU.push("  Tf 1.0000 1.0000 1.0000"), gU.push("  illum 2"), gU.push("  Ka " + tU.ambientColor.r.toFixed(4) + " " + tU.ambientColor.g.toFixed(4) + " " + tU.ambientColor.b.toFixed(4)), gU.push("  Kd " + tU.diffuseColor.r.toFixed(4) + " " + tU.diffuseColor.g.toFixed(4) + " " + tU.diffuseColor.b.toFixed(4)), gU.push("  Ks " + tU.specularColor.r.toFixed(4) + " " + tU.specularColor.g.toFixed(4) + " " + tU.specularColor.b.toFixed(4)), gU.push("  Ke " + tU.emissiveColor.r.toFixed(4) + " " + tU.emissiveColor.g.toFixed(4) + " " + tU.emissiveColor.b.toFixed(4));
        tU.ambientTexture && gU.push("  map_Ka " + tU.ambientTexture.name), tU.diffuseTexture && gU.push("  map_Kd " + tU.diffuseTexture.name), tU.specularTexture && gU.push("  map_Ks " + tU.specularTexture.name), tU.bumpTexture && gU.push("  map_bump -imfchan z " + tU.bumpTexture.name), tU.opacityTexture && gU.push("  map_d " + tU.opacityTexture.name);
        return gU.join("\n")
      }
    }
    var TU = 0,
      qU = gU(40929);
    class KU {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const UU in this.files) {
          const RU = this.files[UU],
            gU = new Blob([RU], {
              type: (0, qU.d)(UU)
            });
          pU.Tools.Download(gU, UU)
        }
      }
    }
    var cU = gU(40533),
      GU = gU(40488),
      jU = gU(41007),
      uU = gU(40494),
      CU = gU(39196),
      hU = gU(36622),
      QU = gU(36754),
      eU = gU(36626);
    const WU = eU.HighestCommonFactor,
      fU = {
        ...eU,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: WU
      };
    var xU = gU(41165),
      mU = gU(40520),
      IU = gU(40966),
      JU = gU(40975),
      wU = gU(41181);
    (0, wU.RegisterDumpTools)();
    var nU = gU(39377),
      bU = gU(39380),
      oU = gU(38236),
      ZU = gU(39480),
      aU = gU(39855),
      YU = gU(41161);
    let BU = 0;
    const VU = (UU, RU, gU, tU) => {
        if (!UU[gU]) {
          const pU = UU.useDelayedTextureLoading;
          UU.useDelayedTextureLoading = !1;
          const EU = UU._blockEntityCollection;
          UU._blockEntityCollection = !1;
          const PU = aU.e.CreateFromBase64String(RU, tU + BU++, UU, !0, !1, aU.e.BILINEAR_SAMPLINGMODE);
          UU._blockEntityCollection = EU;
          const TU = UU.WC().getLoadedTexturesCache(),
            qU = TU.indexOf(PU.getInternalTexture()); - 1 !== qU && TU.splice(qU, 1), PU.isRGBD = !0, PU.wrapU = aU.e.CLAMP_ADDRESSMODE, PU.wrapV = aU.e.CLAMP_ADDRESSMODE, UU[gU] = PU, UU.useDelayedTextureLoading = pU, YU.d.ExpandRGBDTexture(PU);
          const KU = UU.WC().onContextRestoredObservable.add((() => {
            PU.isRGBD = !0;
            const RU = UU.onBeforeRenderObservable.add((() => {
              PU.isReady() && (UU.onBeforeRenderObservable.remove(RU), YU.d.ExpandRGBDTexture(PU))
            }))
          }));
          UU.HZ.add((() => {
            UU.WC().onContextRestoredObservable.remove(KU)
          }))
        }
        return UU[gU]
      },
      rU = UU => VU(UU, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      XU = UU => VU(UU, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      vU = UU => VU(UU, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o065KW65Jl7+q/zyF3/nWTpJx+gQ/7H94pPd/Oe38yduEZds4E9dK/Wykj95GX/OYvkq8/kz58h7mcmfP41/hMnyTCbIIxkn9/nv5raMlOsyTK7IELkgg6RKBshp6ScnpI8ckd5yQHrJHvmd/3578I/QjX+E32SNdOEfobMskV9lAf+vmiOdZIZ0lKnSQSZKe/7kSv7kdjKchkoFf2q59Ke+UsafWCY9pZQ/rZQ/rUS6Umcp5k8q5k8p5k8p4k8p4k8o4u928Hc7+Dsd/F1mpWLn7zArVhWpHOlsRvYC/Yf++t8A/j8fQCxrADvTA/j6vwH8/zGAaOzX/w3g/+cBaJEuEkqMMQbg/t8A2jiA8n/+AHzB7qLFx8K2zBhAA5Q16QE8+98A/q8PwOXvLYHYePEllsO666cGcPR/A/jnDaDRN0C80Ynija8QV2K3GsBlywDe5h3AVYAvAv0X4IUH4P7fAP7bB9DgGyau0BRx6yvFGd8j9YlTUp24LF+g/gDKGwbwAqwnwD1o5QD2/VcPYMT/BmD9q94/Thq0GeKMrpbG2B6pi5+S78kBJAoNoDFrAFU/PICP/+UD6PL/xwDqAlOlNjBH6sMQ6XulJnZavsWvyGcG8D7BABJvsgZwxxiAK2sAZ9ID8P/gAF78QwbQ/v/eAGqDc6Tav1BqtA1SE90v1fpp+Rq7Ip/id+UdA3jNAJ4nPsnjRGYAN0C9whe8C+kB+BmAP2sAu/jPNx1AjRrAlzwDeNqKARz/3wD+7r+qtSXy1QdLcJN8Dx+Qb9Ez8kW/Ih9id+Vt/Jm8sgzgfqL5ARwxBuBjAN70ADbznSE5gDWMJzWARekBvGsygLFy738D+Hf+9T20Sj77VsuXwFb5oh2SL5Gz8lG/Ku8ZwJvYM3kZfyPP4h/lUeIbA6iV24lGuZ5IDcALjQ8aP4+zOYCD/Pt70wNwqQE0WAbwLWcAr/MM4FbOAP78Bw+g6L97AN/CG+Sjb6N89O+Qj9oR+Rg+J++jV+Wtfk9eMYAXsTfyhAE8jH+TuwzgVqLBGMDlhFvOJ7zyZyI5AB8D8EHjyxrAtjYN4EnWAEYYA7j8XzCAXwoMoOJvHsB/aARfwtvkvS/ZHnkfOCbvtCp5G74mb6L35KX+TJ4xgMexj/IgOYB4rdyMN8i1hFMuGQPwyDlGcJoRHE+YAzgA/l7jn1VwqwE0WgZQLUuNAXxmAB+MAcyQVxClBvCQAdxtxQD25x1A1x8ewB9tGEAljO3+7wzgU2SPvPPvlje+A/LGf0LeBP+S16Fr8jJyT55Hn8kT/Y080j/K/dhXuROvYQD1cjWeHIBL/lIDOEXH6TAdoD0JcwBbGcAmBrCeL4Br+AWQO4DZ/MQ0B/C8mQGczxnA4YIDaM0LUNmqAfz2LxmA/b9xAB8iB+VN4IC88h2Rl/5T8jJwXl5o1+V56L48jTyTx9HX8kD/IHf1r3IrViPXY/VyJd4oF+IuqYq75SzYJ0E/ZgzAI/tpD6/DDgaylZdiE9efHMBqYwDfGcBXBvBJ5uUMYJIxgAeWAVyzDODcv2gAA35oAEV5BpAZwT9sAO+iR+VV4Ii88B2X576z8tx/QZ4Fb8gT7b48Dj+Vh5HXcj/6Qe7oX+SmXi3XYnVyOdbAAJwMwCVnGMHJuEeOAn/IGICbAbiMAWzhC+NGvjOs49fD6kSNrFADWGgM4L0awEs1gMeWAdxUA7jUxgGs+Le8AP+nBvAmelJeBE/IM99peeqrkif+S/I4cFMeMYAHoadyP/xK7kTey63oF7muf5creq1c4hU4H2uUczGXnGYEJxjBETpE+4DfbQzAqQZQzwBqZVWiWlbwS2JJ4ossTHxUA3ijBvDMGMB4YwB3ZFTeAZz6FwzA+gL0+jcN4L/sl8BL/Yw8004Df04e+87LI98Veei/JQ+CD+Se9lTuhF7JrfB7uRH5JNei3+SyXiMX9Hqp0hvkbMwppxjBcTrCEA7SXtrF67Ad/C1c/wauf60awHJjAJ8ZwAeZm3gnsxJvZHrihUxNpAZwvxUDOKQGsJsBbP+bB/A7df/JAfzD/mcBz3WuXvtTHvmr5IHvotz3XZN7DOBu4IHcCT6VW9oruRF6J9fCn+RK5KtcjFbL+Wid/MkITuuNcpIRHKPDjGA/8HtoJ98RtvFrYTNfGDeAv5bnf2XiOwP4KosTn2SBMYC3DOCVMYApiacyKfFIxifuy5hEcgA3YLrKAC7KYPlLBjKA/nKSARzLM4DNagCr/4UD6PRvGsB/YARPda5eOy8PAhfknu+y3PVdlzu+O3LL/0BuBp7Kde2lXNPeyZXQR7kU/irnI9+lKlojZxnBKV6B44zgCB3iI2E/7aEd4G8Ff1O8Tjbw03FNvFpW8jNyGc//Yp7/BYn3lgE8ZwBPZKIxgHsM4LaMSlyXEYkrMjTBABJVDOCsMYC+lgH0VAPo/hMDqGhxAJ1bOYCyf+4AHuuX+Ky/yMVfAv6q3PLdlJsM4Ib/oVxnANeCL+WK9lYuaR/kQuiLVIW/yblItZyO1spJRnCMl+AwQzhAe2kXXxB38B1hC18WN4K/HvzV8e8M4KssjX+WRfGPMp/nfw7P/8zES5mWHsADGZe4ywBuGQMYbgzggjmAxBnpn2AAiaPSJ5EcwD4GsAuubWoA6/83gB/964F+Re6Grsjt4FW56b8uN3y35LrvrlzzPZQr/qdyOfBSLgbfyHntvVRpn+Rc6KucCX+Xk5EaOR6plSOM4FC0XvYzhD20U6+TbeBvidXKBn42rot9l1Vc/4r4FwbwiQF8kHnxtzI7/lpmxl8wgGcyOfE4awAjE9cYwGXLAE4zgBMM4AgDOCi9E3ulZ4IBJBhAYpN0S6QGsByyxX/bAEqyBtDxJwbwX/xL4J5+TW6Hr8nN4HW57r8B/G254rsnl32P5BIDuOB/IecDb6Qq+F7OaR/ljPZFToW+yXFGcJQRHGYEB3gN9tJufiHsoK18UdzET8YN4K+JfZOVsa+yPPZJlsQ+yML4OwbwhgG8khnx5zI1/lQmxx/JhPh9BnBHRiduqgFcYgDnGcCfWQP4Iz2AndkDSKySLgkGkGAAifnyS2K2GsCUv2UAxQUH8A//HwbdiV2Xm2HwtRtyNXAL/DtyyXdfLjCA876n8hcDqAq8lnOBd3Im+EFO8QqcYATHGMFhRnAwXC37GcIe2sl3g+18SdwC/kZ+Mq7Xv8lq/SsD+CzLYh9lcey9LIi9lbmx1zIr/lKmx58xgCcyKf6QAdyTsfHbMjp+Q0bGrxoDGMIABiXOqQEcVwM4wAD2qAFsVQNYl38ACQaQYAAJBpBgAIm2DKDrDwzg7/gp+G8ewc3YTbkevilXtZs897flov8u+PfBfyRVDOCc74Wc9b+S04G3cpJX4ETwoxzTPssR7ascYgT7+U6whyHs4svhDtoa/S6b+Lm4Afi1+hdZpX+WFfpHWap/kEWxdzI/9kbmxF7JzNgLmR57KlPijxnAAxkfv8sAbjEAvgDGr8iw+EUZEv9LBsX5CZjgJ6AxgMMMgF8AxgB2SA9jABuNAXRt7QASDCDBABIMIMEAEgwgwQAShQbQ+n9VUNP/WcA/4HvA9RhXH7nFl7xbciFwR84zgCrfA/mTAZzzPZEzvudy2v9STvrfyHFegaO8AkcYwSFGsJ+XYC/fCXbTDoawLfJNtvBTcSOtj36RNdFPshL85eAv0d/JQv2tzNNfyWzwZ8aeybTYE5kceyQTY/dlfOyOjInflFHxawzgMgO4wACqGMBZGRDnJ2D8mPSNH8oZwBY1gLUMYCUDWMYAFlkGML1tA0gwgAQDSDCARKEBFP7nA/6RA7jCAC5FbssFDfwg+P57wD8A/pGcZgAnGcAJ30s57n8tR/1v5XDgvRxiBPsZwV4+DvYwhJ38OthOW8JfZBNtiHyWtZFPsir6UVZEP8jS6DtZBP4C/bXM1V/KLP25zNCfylT9MQN4IBNid2Vc7LaMid2QUTGe/xif/3E+/+N/MoDTagD8AkgOIM4A4rulZ5wBxJMD2JBnAPPyDGAs+KPyDKBf4QEkGECCASQYQIIBJP5d/7OAf+MILvH/8Rcid+Sv0B35kwGcC9zn4h/IKQZwkgEc9z2TY3wMHPG9kkO8AgcZwX5GsJcR7GEEO/liuJ0hbAl9ks20IfxR1tHqyAdZGXkvyyPvZEn0rSyMvpZ50ZcyR+f69WcyHfwp+kOZpN+XCfodGcsQR/N9ZGTsCgO4KENjf8ngGJ//DKB//DgD4BdAnC+A8X0MgF8A8e3mAOIb5Lf4GukaTw5gqWUAsywDmNDGAXQrPIAEA0gwgAQDSDCABANIMIBEqZE9UaIqVhVZcqSzJf5LBnCep7cqeoefd3flrHaPz/r7PPcPuPpH4D+RowzgMK/AIV6BA3wX2M8I9vJ9YDcfBzv5TrCdIWzVPshm2hj6IOtpTei9rAy/kxW0NPJWFkVeywLw50ZfyOzoM5kRfSLT9EcyWX8gE/W7Ml6/LWP1GzKaXyQjYjz/sQsMoIoBnJWBsZPSP8bnf+wwA+ALYHwvA+ALYHwbA9icPYA4A4gvlF/jc+WXeGoAk/+GAfzSigGUtXEAagS5/bsHUMUAzkXv8tv+Lt/w78lJBnCcARxlAEd8j4F/KgcZwH5egX2MYA8j2M0IdjCC7bQ1+E4200btnayntbQq9FZW0rLwG1kSfiULIy9lXuSFzIk8k1ngT48+lqnRBzI5es+4/nH6TRmjX5dR+hUZoV+SYfp5GRLj+Y/x/BsD4PM/xvMf2y+9Y3z+x3YwgK0MgF8AcX4CxlczgBUMYEn2AOLTpGOcAcStAxje4gBK/5MDSGfL9K/86xwDOM0ATjGAEwzgePC+HAk8kMP+R+A/lgO8Avt5BfYygj2MYBcj2MEItvOdYEvgjWymjcE3sp7Wam9kNa2k5aFXsoQWhV/K/PBzmRt+JrMjT2RG5LFMizyUKdH7Mol/3PHRWzI2al7/SP2yDNe5fr1KhujnZJDOAHSe/9gRywB2mwOI8fzH+AIY4ydgfBUDWK4GsEANYGb2AOIMIM4A4gwgzgDihb4E9rAMoMvfMIDiHxxAzghy+7v+Os0ATgJxnAEcYwBHGMAhBnDQ/xD4R1z9Y+CfyG5GsJMR7GAE22gLvww2M4SNgVeyntYGX8lqWqm9kuXaS1lKi7UXsiD0XOaFnsmc8BOZGX4s08MPZWrkvkyO3JWJfPkcF+X6o9dkVJTrj15kAOcZwJ8yWD8jA/WT5gB0nn/9gPyh8/zHdjGA7WoAfAGMrZXfYiula4wBxBYbA/glPqd1A4gzgDgDiDOAOAOIM4A4A4gzgDgDiDOAeGoAnZoZQL7vAcXNvgI/PYC21NxfJ+N35Difw0cZwJHQPb7h35cDDGA/HwN7eQX2MIBdDGAHbWcEW2kLQ9jECDb4X8h6Wht4IatpZfCFLKelwefgP5eF2jOZrz2VOaHHMiv0SGaEHsi08H2Zwj/WJPAnRG7KuMh1GRO5ygAuMYALMizK9UfN6x+on5D++lHpqx9iAFy/vkd66Tulp87nf2yzGsAaYwBdYvwCiPEFMMZPwNgc6RSbwQCmMoBJDGA8AxhjGcCQtg0gzgDiDCDOAOK5A/iZL4L/xhEU6hgDOMIADnORB/kiuF+7L/sYwR5GsJtXYCevwA5GsI22MILNfCfYxAg20Hpa638uq2ll4LksDzyTpbQ4+EwWBp+A/0Tmao9ltvZIZoI/PQQ+/xiTwuCHwQ9fl7Hgj45clpGRCzI8wvVHuf7oGRkU5fqjxxkAz79+kOvfxwB2MwCef53Pf32TdNfXSzedz39jAEvVAPgFEJttDKBjjAHEGECMAcSSAxj59wwgzgDiDCBeYfZPHsARBnCIL2IHGcB+cPbyMbCHAeziy+AOXoHtvgdc/SPwH4H/WDbSBoawjtbQKlrpfyLLaWngiSymhYHHMj/4WOYGH4H/QGYyqun8uVO1uzI5dFsmhm7K+BD44WsyOnxFRoUvygjwh0W4/shZGRzh+qMnGMBR6Rfl+qP7jee/t87zr/P861sYAJ//Op//Op//Ol8AdT7/db4A6skB8AUwxi+AGD8BYxNpnDmA2EhpFxtGDCDGAGL9pTzGAGIMINaaAXTMGUBqBAwgXqZiAPF/0AAOxW/LAQawL3JH9jCA3SDtDN7jW/592ea/L1sZwRZGsMn3EPhHXP0jWUtrGMIqWknLaan/sSzmI2MhzQ88lLm8ILMZ0kyaEbwr07Q7MkW7JZO0mzJBuy7jQtdkTAj80CUZGT4vw8NVMjR8jgGclkERrj/C9Ue4/uhBcwBRnv/oDukZ3coAeP51nn+dz3+dz3+dz3+dz3+dL4A6XwB1BqAzAJ0B6AxAZwD6aKnUrQMY2HQAMQYQYwCx/AMoNgaQ7xXIMwCjYktFmbIG4PjPDmA/A9jH7/A9DGBX+I7sAGo7I9gWuMu3/Ht80bvP1d8H/z5X/wD8B7KaVjKIFbSMlvLvL6aFjGU+zeXvmc3fO4s/Y0bwjkwL3pYpwQz+eO2qjNWuyOgkfuiCjAhVybAQ+OEzMjh8UgaGjzOAI9Ivckj6RsCPcP2RXQyA649y/dGN0j3K8x9drQawjAEsYgDzGQBfAHW+AOp8AdT5AqjzBTA9gBHSTmcA+mCp0AeC38wAYgwgxgBi/BSMtXUApc0PIO5IZzOym/0nRrAnfkv26LdkV/S27OCzeXvojmxlBFuA2wTgBv9dvujdBf8eV3+fq78vK733ZQUt499eQotoIc3nv2Yu/7WzaZb/jswI3JZpgVsyJXBTJgevy8TgNRkfTOJfljHaRRmlga/9JcNDf8rQ0BkZEjolg0I8/eGj0j98WPqFuf7wPgawhwFw/ZFt8ntkMwPYwADWMgCe/yjPf5TP/yjPf5TnPzqb+AKo8/mvT1IDGEujmg5AZwA6A9AZgJ4aQPecAfxqDiDGAGIMIMYAYgwg1poBlLRtAAWzFe5nB7ArflN2MoAd/B7fFr4lW/iM3qzd5rf9HdkQuAP+Hb7o3eHq73L1Zsu9d2UpLaFF/PsLaL7vjsyl2b7b4N+SGTTNfxP8GzI5AH4giX9FxgUvyZhgEv+8jNSqZLj2pwzTzsoQ7bQMDnH9oWMyIMT1h7j+8H4GAH6Y6w9vZwBbGABf/iJcf4Rv/xGuP8LzH+H5j/L8R3n+ozz/0enEAKIMIDo+ZwBDCw9AZwA6A9AZgN6KAcQYQIwBxMpVDCBWavT3DqCFEfzMQHYwgO36TdnK7/EtDGBT6JZs4LN6A0/2Oq53DVe8yn8b+Ns8+be5+js8+Xdksfe2LKQFNM93C/xb4N+Smb6bMoOm+a/LFJrsvyYT/VdkQuCyjAuAH7ggo4PgB6tkRPCcgT80ia+dlEEaT792RPqD3y8Efmiv/BHazQC4/jCf/WGuP8z1h9dJtzDPf2QFA1jKAHj+Izz/EZ7/yExjAB2jU2iiOYAoXwCjDCA63DIAfgHo/ahP4QHoDEBnADoD0Ns4gFiJqlhVZCl3AI5/3QBaalv8hmzRb8jm6A3ZyO/yDXxDX89n9VpaHbwpq3i+V3LNy2kZwEtoMS303pT5NI/m0GzvDfCvy3Sa5rsmU2iy74qJ778k4/wXZWwSPwB+APzAORkePCNDg6dlSNDEH5jE18DXDkhfbZ/00bj+0E7pFeL6Q1x/aKP0CK1nAFx/mOsPc/3hJbRQOofnMQCe/wjPf4TP/wif/5EJDIDP/yif/9GR5gCifAGM8gsgah1A79YNQGcAOgPQGYDOAHQGoLd2AHlGoLIZ2bP7dw1gS/y6bNKvy4YoRa7LOn6br9FuyGpaGbwhK3jCl/tv8C3/BvA3ePJv8OTfAP+6zKU5NItmeq/JdJrmuwr+FfAvy0TfJZnguwj+BRnrPy+j/VUyyv+niR8AP3BKhgROyOAg+MEjMiB4iAFk8P/QdklvbYf00rh+jevXuP4Q1x/i+kMMIMSXvxDPf5jnP8zzH55FPP9hnv/IJHMAEZ7/CAOIjGAAw7IHEGUAUQYQZQDRnj8+AL1cxQD0UiO7/pMDyJvN7O8cwMb4NdmgX5P10WuyNnJN1vDbfBW/0VfybX0FX9yW8fm9hBbznC/kqhfQPJpLswGf5b0qM7xXwL8iU2mK95JMoonAj/ddkHG+8zLW95eM9iXxz8kI/1kZ7j8tw/wnTfzAMRkUAD8AfvCg9Avul75B8IMZ/J4a169x/RrXr62RbtpK+U1bzgC4/hDXH+L6Qzz/YZ7/8DTi+Q/z/Id5/iNjaJQxgHYRBhBhABF+Akb6Nx1AlAFEGUCUAUQZQJQBRFszgArLAMoyAzAqtlRklncAjtYPoFA/MoAN8auyLnZV1uhXZXXkqqwMX5UVoauynJ9qS/nGvoQWBa7yE+8qP/Gugn9F5tBsmgn4DO9lmQb4VJrivQj+BZlI473nZZz3L/CrwP9TRvnA952R4T6F7z8ug/3g+4/IwCR+4ID0C4Af2CN9ArsYAPjBbdIzCH4Q/CDXr/HNX1sFPp/9Gp/9Gtevcf2hucTzH+L5D3H9ockMgOsP8/yH+fwP8/yHef7DfP5HBmcGEOlLfP5HGECEAUR6GAMoif6WPYAoA4gygCgDiLZ1ACVNB2DkSGfT/6YBtKXUANbGr8ia2BVZpV+RlZErsiJ8RZaFrshSfqcvpkV8c18QuAL+ZX7iXQb/ksyimTQd9GmgTwV8Mk0CfQKN91aBXyVjvH/KaO85GeU9A/5p8E/KMN8JGeoD33fUxPcfkgF+8P3g+8H3gx/YIb0D26RXYIv0DGyS3wMbGMBa6R5cLd2CyetfxgC4fo3r17h+jevXZhLPf4jrD/H8h8YTz39otGUAQ4jnP8zzH2YAYQYQTg6gV2YAEQYQYQARBhApMIAoA4gygCgDiFaYNRlAaQsDyDMC3d60f+UIkq2OX5KVMdIvyfLoJVkaviRLQpdkkXZJFtJ8frbN49v7XJrNF7lZPO0zeNqn0zTQpwA+mSZy7RNAHw/6ONDH0GjgR3lPywjvKRnuBd97HPxj4B+RQb7DMtAHvu+A9Pftk74+he8H3w++H3y/wg+sk+4B8APgB3n6g1x/kG/+wQUMgOvXuH6N69f48qdx/RrPv8bzr/H8h3j+Q3z+h3j+Qzz/IQYQSg6A5z/M858cQJgBhHn+wwwg3M0ygM5SHGEAEQYQYQARBhApMIAoA4iWqcCP/k0DaJItu58dwMr4RVkRuyjL9IuyNHpRFkcuyqLQRVmgXZD5NDd4Qebw7X02zeSL3Ayaxuf6VD7Xp4A+CfSJNAH48aCP9Z4F/wz4p2Uk8COAH+49YeJ7j8pgL/jeQzLQe1AGePcb+P3A7+sD3we+D3wf+D7w/eD7wfevMfEDK2ipdA0sli4B8INcf5DrD3L9Qa5f4/o1rl/j+dd4/rXRxPVrXL/G86/x/Id4/kNcf4gBhBhAiOc/xC8A6wDCDCDchRhAOM8AIgwgwgAiDCDSzACiJapiS3/zAFpboQEsj1+QZbELskS/IIujF2Rh5IIsCJ+XeaHzMlc7L7P5zT6LZgb+kun+v/h9XwV+Fd/y/5RJNBH0JPw44MeCPoZGeU7JSM9JGeE5IcM9x2WY55gM8RwB/7DCP2Die/dKPy/43l3Sx7tD/vBuk97eLQxgEwPYIL/71ksP3xoGsEq6+cH38/T7efoDPP2B+TRHfg3wzT/A9QenEtcf5PqDPP9Bnn+N69e4fo3r14aYA9AYgMYANJ7/0B9qADz/IQYQ4gtgiAGEcgYQZgBhBhBmAOE8AzBiAJEyVakaQYEBpHOks/07RpCvpfHzsjh2Xhbp52VB9LzMj/wl88J/yZzQXzJbq5KZNCNYJdP57T6Vn3BT+CY/mS90k2iC7yz4Z8A/beCP5tpHAT8S+BHADwd+GPBDPIdlsOeQDPIclIGe/TLAs0/6e/ZIP89u6evZKX08Fnwv+F7wvQrfB76P6/cpfP8iAt/P0++fbeD/EuCbf4DrD0wirj/I9Qd5/oMMIMgAguYAKjSef43nX+tnDkBjABrPv8YAtB6WAfD8hxhAiAGEGEAoZwBhBhBmAGEGEC4wALJHSlTFZs0NIJ29af/KASyOV8nCWJUs0KtkXrRK5kaqZE64SmaF/gT/T5mhnZNpwXMyld/uUwJnZZL/DD/xzoB/mp95SfhTXP1J8E+Afxz84+Cb8EMN/EPgHwT/gMLfq/B3gb8D/O3yh2er9PaA7wHfo/C94HvB9ybxl9MS6eoD38fT75tn4P/q5+n38/T7uX4/1+/n+gPjCPwA+AGe/wDPf5DnP8j1B7n+INcfTA6A51/rrQbwuzkAjQFoXL/GALScAYQ6SVGIAYQYQChnAEYMIFymKjAAoyJLjjwjsLciW3Y/M4CF8T9lfuxPmaefkznRczI7ck5mhc/JjNA5ma6dlWk0JXhGJgdOyySayG/48f5T/L4/yU+8k+CfAP84X/aOAX+Uqz+i8A8p/AMyyL1fBrr3yQD3Hunv3i393Dulrxt8N/hu8N0WfM866eEB32Pid/OC7+Vz3wu+18Tv7OPp9/H0+7h+H9fvM/E7+nn6/Tz9fj77/Ul8rj/A9Qd4/gNcf2CAGgDXH2QAQQYQtA6A67cOQGMAGvga15/GVwMIMYAQAwhVmOUOgOzhElWxWZMBqBGobEb27FozgNZUaADz4udkbuyszNHPyqzoWZkZOSMzwmdkeui0TNVOyxSaHDwlEwOnZELgJPgnZZz/BPjHZYzPhB/Jl7sRfLkbzlM/DHQT/4AMBn4Q8AOBN/F3gb9D4W8Dfwv4m6WXe6P0dIPvBt9t4nf3gO8B3wO+hy99ngUMAHwv+F7wveB7k/g8/T6efh9Pv4/r93H9fq7fD76f6/dz/X6uPzDQGEB5gOsPMIDAH2oAPP9BBhDk+oMMIJgaQBL/18wANAagga+1V+UMIMQAQmWqUqMmAzAqyslhlh5AnhHkzWYW/cnmxk/L7NhpmaWflpnR0zI9clqmhU/J1NAp8E/KJJoYPCkTgidkfOA4+MD7j8lofseP4ufcSOBH8OVuOOjDeOqHAj+Ep34w8IPcexX+bvB3Sj8X+K7t0se1Vf5wge/aJL1cG8BfD/5aA7+HG3w3+G7w3SZ+V89CBsDnvofPfQ9Pv4en38vT7+Xp93L9Xp5+L9fv4/p9XL+P6/cNJ67fz/X7uX4/A/Bz/f4kPtcfAD/A9QcYQKCHZQDgB7n+IAMIMoBgMwPQGIBWoWIAWs4AQiWqYksFBkC2dPbsmhtAS7U0gNnxUzIzdkpm6KdkevSkTIuclCnhkzI5dEIm0UTtuIwPAh88JmMDx8A/KqP9R0x8fseP4Fv9MK8F3pMfvh/wfV3bwN8C/mbwN5r4LvBd4LtW00rp7loB/jLw+cx3g+8G3w2+ey4pfM90At8DvoenP4nvHUtcv5fr944w8X1cv4/r94Hv4/n39zMH4Of6/QzA35N+NwcQYAABrj/AAAI5AwgygCADCDKAYAq/wACMSo3sWolZ1giKcnKks4UKDCBvNrPITzYzflJmxIDXT8jU6AmZEjkuk8PHZSJNCB2T8doxGacdlbHBIzImALz/sIz0Aw/+cN9B8A/w+34/+PvA38uXvT3g7wZ/F/g71NVvM67exN9kwV8H/ppsfBf4riW0SLq6ePZdFnw3+G7w3eC7JzMAnn4PT7+Hp98DvmcUA+D6vVy/F3wv1+8dpAbA9fsYgK8PMQBfL2MApckB+MH3c/1+BuBXAwgwgAADCDCAAAMIWAYQrFQxgGCFWXMDMCpWFWWXOwAje/7yDaClWhrA9PhxmRY7LlN14PVjMil6TCZGjsqE8FEZHzoiYzXgtcMyOnhIRgUOgX9QRvgPgL9fhtFQ7z4Zwu/5wcAP4mfdQOAHAG/ibwN/a/rq/wC+N/C9uPqeXL2Jv0rhL8+DP4/Ad4Hvmkngu5L4Uwh89wQC383T7+Hp94Dv4fo9XL8HfA/X7wXfy/V7wfdy/d4kfm9zAD7wfVy/jwH4UgMA3w++H3w/+H4T3xhAgAEEGEAA/EA7I3MA5aoyVamRPZhvALkjcKSzpbMXHkE6W3bhH2xq/JhMiR0F/6hM0o/IxOgRGR85IuPCh2Vs6BD4h2Q0jQoelJGBA+Dvl+H+JP4+GerbA/4eGezdDf4ufubtUPjbwd8K/hbwN6ur36Dw10lPJ/hOrt650qi7M4m/FPjFOfhzmuK7wHeB7wLfNd7A7+AG3831u8F3D6OhBn47D9fvAd/D9XuS+H3MAXjB9/L8exmAt4eBX+oD38f1+xiAjwH4LAPwg+/voMoZQIABBMpVZWbWAaQrttSKARSquRE0V6EBTIkfkUkx4MGfoB+W8dFDMi5ySMaGwQ8dBP+AjNT2y4gg8IF9Msy/V4b6gQd/sA94r4I38LeDv5Vv+lsU/qb01fd2rpdewPd0rgF/lcJfAf4y6eYE3wm+c6F0dYLvBN8JvhN8Zwb/l1x8F/gunn4X+C7wXcNNfDfX7wbfzfW7+zOAfuYAPOB7uH4PA/AofC/X7+X6vQzAywC8DMCrBuBjAD4G4GMAPvB97c0B+BmAH3wjBuAvN0sNIFBqZA+UWMoZQDpHOluwFQPIyta0UBubFD8kE2OHwD8k42ls9KCMiRyQ0eH9Miq038TX9snw4F4ZFthj4vt3g79TBvl2yEBvEh94zzYD3sTfDP5G8JNXn4RfR2vAXw3+SoW/XOHz5DsXKfz5FvxZJr4TfCf4TvCd4Dsn5sEfaeK7ePpd4Lu4flcSf4AxgHI3+G6u380A3En8nuYAPAzAwwA84HvA9yh8L/he8L2dVJYB+CpV4PsqzFID8JepwDcqMUsNIF2RJUfTERjZm9aaAbQm6wAmxA/K+NhBGacfkLH6fhkT3S+jI+CH98nI0F7w98hwGhbcLUMDu8DfKYP9OxT+dhng3QY+8NSX3/R9+U3fB3gTf526+tW0SuGbV9+dq+/WyNU3gt+4QLo2gt84l8BvBL9xBmXjd0riO8F3gu8E3wm+cyQDMPErXUMVPtfvAt/F9bu4fhf4riR+b3MAbvDd4LvBd3P9bssAPAzAwwA8DMCj8I0YgJcBeCtVDMCrBuArV5WpwPdZBmBUbKnILDUAS7Z0drNgc9my+5ExjI/vl3Gx/Sa+vk9GR/fKqAjwYeBDwGvAa8AHd8qQwA4T379dBvq2gb9F+nuT+En4TdLHvUHhrwd/bfrqewL/u+XquzcuUfgLFf48hT87G78R/EbwG8FvBL9xPPGlr3EMAxht4jt5+p3gO8F3gu9M4g+04PdVAwDfBb6L63cxABcDcCUHAL4bfDf47s5GxW4G4FYD8IDv6aBiAB7wPe0yAzAqV5Wp1AB8Jari7FIDMHJkZUuVGkCz2ZqOoLnyDWBcfJ+Mie2V0Trw+h4ZGd0jIyK7ZXh4twwL7QIfeA34IPAB4P1bZYB/iwzwJfE3Sz/vJunr2Wjg/+FeD/468NfwZS9z9b9z9T0M+KUKf5HCn6/w5yj8mQp/msKfrPAnZOM3gt8IfiP4jeA3JvGHGPjtnOA7uX4n+E7wneA7uX5nHnwX1+9iAC4G4GIALvBdCt/dScUA3OC726vMATiMwPeUq8pUpeYAjEpUxZl8RTk5skoPwG8vnHUALdXSKMbE98jo2B4TX98tI6K7ZHhkpwwL75ChoR3gb5fB2jYZFNwqAwNbDPz+/s3S37cJ/I3gc/Ue4N3rjKvvDXwvftr1VPC/c/U9LFffTV29ic/VN4DfMEs6N4DfMJ3AbwC/AfwG8BvAbwC/gWe/AfwGK/5wE78R/EauvxH8RvAbuf5G8BtT+L3NATgZgJMBOMF38s3facW3DMDFAFzguzoaFbkYgEvhG4HvrlCVqywDILtRicoyAG9RTg6z1ADS2ZuWdxC2pgXa0Oj4bhkV2wX+Lhmh75Th0R0yLAJ+eLsMCW0Df6sM0rbIwCD4AeD9wPuA922Qvt714K+TPzzAu9cY8L34Td/Tlbn6Hs7k1S82rr6b5eq7NiTxZyv8GRb8KQp/Yn78BvAbwG8Av2Eogd8AfgP4DeA3JPG5fmMAfxD4jeA3gt8IfiPX32gOoCQ5ACcDcILvBN8JvvMXMzWANL5RpYoBuCpU5WbJARiVGtndJZmSA0hXlJMjMwKypbNn8jWXLZO/DaUGMDK+U0bEdshwHXgaGgU+Anx4qwwObTHxtc0yILhJ+gc2Sj//BgO/j2+d9PGuBX8N+Fy9e6XC5+pdyw34HnzD7+40r76b5eq7GlefxJ9pwZ+ajV8Pfj349eDXg18Pfj349SMYQC7+oAx+A/gN4Ddw/Q3gN4DfAH6DBb+R628EvxH8RvAbOxsVN6YGAL6zo1GRkwE426vAd7bLPwBXmarUyO6yDMBdbKkou+QALNnS2c28LWXLHkFL5Q5hRBz82Hbwt8lQGhIFPgJ8GPjQZvA3yQBto/QPbpB+AfD9wPuA966h1dLbs8rAT8L3BP531zKFvxj8RQp/PvjzFL559Sa+efW/1oNfD349T359Cn+cBX9UBr8e/Hrw68GvB7+ez/168OvBrwe/Hvx68Ot5+uutAwDfiAE0cP0NDKCBATQwgAaF3/iLigE0gt/YQQV+Y6UZA3AYge8sV5VlDcCeGkC6YktFZukROLKypbNnRtBcyQG0pkKDGB7fJsNiW8HfIkNocBT8CPBh4EPAaxtM/OB66RtYK338wPtWg78KfK6eerqXg78MfOBdSwz47vyu7+Y0r/63JDxf9LpannwDvz6Jn4SfbMEf3zJ+Hfh14Ncl8Qem8Sss+OVJ/Hrw68Gv5/rrwa8Hv57rrwe/Hvx6E98YQAMDaAC/AfyGjkZFDeA3tDczBtDOyNFYoSo3Sw7AqNTIblSSKd8A0jmysqVKDqCljBHYWq65YQyLb5GhsST+ZhlMg6KbZGBkowwIAx8CXlsP/joTPwC8H3jfSuntTeKvMPB/dy8Ffwn4XL0rib8AfPPqM/iz0k++iT/Vgm9evYFfB34d+HWjCfw68OvAr+Pbfl0Ofh34deDXgV8Hfh34deDXgV8Hfh34deDXgV8Hfp0VXw2gHvx68Ot/UTGAevDrO5gZA6hUtTNyNFSo1AAay1SlRnajkkzOYktFORUYgMvefOkh2JqvpXEMjW+WIbFN4G+SQfpGGRjdIAMi4IeBDwGvrZW+wTXgrwIfeOrlWyG9vFy9Z5nCXww+8K6FGXznXPCB5+ediW/Cd1ZP/q/qyU/j14034DvWjcnBH94Uvxb8WvBrwa8Fvxb8WvBrwa8FvzaDX2bFp5I6BlAHfh34dVx/HfhG4NeBX9fRqKguOYD2qkoV+PUVqnJzAA1llkqN7A0lmRqLcyrKLjkAS7Z09kzNjsFWOHcrGhLfKINjG8HfIANpQHS99I+sk35h4EPAa6ulTxD8QBIfeN9yWiY9vcB7uHp3Eh94F/Cu+eDPU/jANwLPb/sMvgn/q3ryDfy6JP64PPhcfS34teDXgl8Lfm0r8WvBrwW/FnwjBlDLAGrBrwW/FvzazkbFteDXgl/bySyFbwR+XaWqnZGjzjIAozJVqZHdqMTMGEFxTkXZNTrS2bKyZ3I2l83M9YMNjm+QQbEk/noZoK+T/tG14K8BH3htFa2UP4LgB8D3A+9bCv4S8IH3LGIAKfx5BLxzDqXwZ4BvXn02/kQyrz4bf5R0qOXqa5viV6bwa/jCVwN+Dfg14NeAXwN+TW8Cv6aniqe/Bvwa8GvArwG/BvyaLioGUAN+zS9mxgA6GhXVgl/bXlWpAr9WDcCoXFWmKjWyG5WYGUMotlTUtAZHOltW9kyNzWUzc7ay3AEMiq+XgbF14K+V/voa6RdZLX3DwIeAT+JrK6R3kKsPgO8H37dYfvcC71kI/gLw51vwgXfOAn9mDr4J/6u6+mz8McTV1xbArwG/Bvyaga3A79UCftcc/NQAOqnAr+mgAr+mUtXOyFFboSpXlVkqNbIblWRGUFdsqahp9Y50tqzsmRqay2bW2MpyBzEwvlYGxNaAv1r6RVdJ38hK6RMGPrQC/OXSW1smvYLAB5YwAPB94HsXMID50t1twndzcfUuhe8EvnE6mVffFN+E76SuvmNtHvyaYWn4yppB2fjV4Ff3JfCrwa/ubVRWDX41+NU8/dXgV4NfDX71b0Yl1eBXg1/d2ai4Gvxq8Ks7qbj+auCN2qsqzZL4RhWqclWZqtTIblRilhxBbXFORU2rc6SzZWXPVN9ctkwNrcw6iAHx1dI/tkr66SulbxT8CPDh5QxgGfhLpZcGfHAxA1gkv/u5eh9X7wXfA77bhP/NlYSfmQcf+IZJ4JtX3zy+Cd++ZmhT/Grwq1vA/w7+d/C/g/8d/O/dVOB/B/87+N87q8D//osK/O8djYq+d1BZ8KvbGTmqK1TllspUpUZ2o5LMCGqKcyrKCfjaTLas7NnVFcqWXX0rS42hfxz8GPgMoE8U/AhXHwY/lMH/PbAQfK7eB7x3HvhzTXy3wnfNAB945zTwgW/k6hX+L03wzSe/o4LvYLn6LPxq8KtN/HZW/O/gfwf/e2+jsu/N4H8D/xv437qowP8G/rdfVJ1UOfhGlSrwjSpU5aoyS6VG9u8lZtWpii0V5clhjkBlS2dvWm2hbE2ra2XJIfSLgx9bIX10rj4KfGQpA1givUJcvcbVB8EPgO8H3we+d4508wDvngX+TBPfZeJ3dqbwufoG4BsUfL159Xnxa3Lwq/Pgfwf/ewH8b+B/A/8b+N/A/9ZNVQj/1yb4xd+AN2qvqlS1M3J8q1CVWypTlRrZjUrMjCEU51SUJ4c5ApUtnT1/+YZRY8tfbSvrG18ufWLL5A8d+OgSBrBYeoUXSc8Q8NoCBjBfegSA989lAOB7wfeA755pwHd1cfVJeOcU8Ln6xjz49T+I/z0P/jfwvyXh8+HTV/C/gv+1qwr8r+B/Bd4I/K+dVB2Nir52UIH/tVLVzsjxtcJSuarMUqmR3agkM4JvxTkV5clhxhBsWdmbL2sYtsLVtKI+cfBj4OvgR8GPgB8GPwS+Bn4Q/MAcBjBbuvmA985kAFy9W+G7FL5T4Tcq/AYFX6/g+YnXUcF3sDz57S3wlQY8fc/B/wb+tzz4X8H/Cv7X7ioTvzSF/wX8L51V4H/5RQX+l45GRV86qNqrKlXtjBxfKlTllspUpUZ2oxJzAOmKcyrKyZGV7Zs1e8ulB2FrueZG8kcc+NhiBrBIekUXSs8I8OH5DGCe9NC4+iD4AfD9VnwTvosLeNdk8E34XxuT8OPz49e1Al/Bp/G/5cH/miwP/hfwv4D/JQnfEr4awGfgjdqrKlXtjByfKyyVq8oslRrZjUrMERgV51SUJ0dWtmRfU9lb3zdb68s3jj/i4MfA18GPgh8BP6zwNfCDs8AH3jeDAXD1HvDdOfhOhd+Yg1//I/hJ+Bz8r+Cn4RX+F/C/dFdZ8D8nA/9zZxX4n4H/lKyTqqNR0SfwP7VXVaraGTmMKlTlqjJLpUZ2o5KcinMqyu5zMkdWNmtf7G3IZva1jaVG0Tu+UHrFFkhPHfjoPAYwV3qEgddmE/gB8P3g+8D3gu8B353En0TAOycQ8I3jwAe+YQz4wNeb8B3rTPgOtcNaid83g/81g1+ewv9i4pel8D+D/xn8JPynZOB/6qwC36gA/sdk7VWVqnZGjo8VqnJLZZZKjexGJZaK81TUtE+OrGzp7K3rcypb0760oV5x8GPzGQD4UfAj4IcUfhD8wHQGME26+oD3TgGfq3crfJcFv7EAfp3CrzXh2xs/8fLgW66+Cf6XJHwO/meF/wn8T3nwPwJvBP7HTqqORia8Bf9DpaqdkeNDhaVyVZmlUiO7UUlOxTkV5cmR6SPoWdnbGIiffrDkWHrGwY+Br4MfBT4yiwHMlG4aVx8EPwC+H3wf+J48+E4LfoPCr28O34QviG/A5+L/bvYZ/CT8p2Q5+B+7qEz8kjS+GsCHjirgjdqrcvDfJ6tQlVsqs1RqZDcqyak4p6I8ObKypfqQzN7GbE372IZ6xufK77E50kMHPwp+GPwQ+Br4QfAD4PvB94LvmcgAgHeNJ+CdY8EHvnE0+MA3jGwVfuonXrP4Xyz4nxX+pxz8j0n4HPwPvxoVf/hFlYP/Pll7VaWldkZp/HfllsoslRrZjUpyKs6pqECOrGxZ2TO9b022lvvQTL/HwY/NZgDgR8EPgx8CXwM/OIUBTOb6uXov+B7w3QrfBb5T4Tem8EcQ8HXDaKiJX6vwa3Lx++XB750f/1MKv5vZxxz8D8ny4L/vpAL/fQ7+u2SVqnZGjncVlhT+2zJLpensRiWWivNUlCdHVrYm2Qv3Ll+2Hys1jh5x8GPg6+BHpzOAaQxgqnTVwA+C7wffB743D77Tgt+Qiw987eBm8NWXva8W/C8WfAM+B/9jBr/0Q1cFb8F/D/77X1QW/Hd87r/roLLgv03WzsjxtsJSuSXg36QqNbIbleRUnFNRgRxZ2bKy/0A2s7c/WI/4TOkemyHddPAj4IfBD4GvgR8A3w++D3wP+G6F77LgN1rw63PxB6XxK1vE75WD3yOD/9GC/yEH/31nAz4L/10nVUcV8G+TtVdl4xe9YQBvKlTllpriO16Db1Riqbhpr4oK5MjKlpW9cK8LZWu5N83UPT6DAYCvgx8BPwx+CHxtEgMA3w++F3wP8O4x4APvGsUARmbwGyz4dQq/NolvwjfF75Mf/3MO/kcL/gcL/vsuKgv+u19UCv9tR5UF/02ySlW7dAb861TlZq/Kcio1shuV5FSc3ctkRXlyZGVrkr2N2bJ79QN1j4MfA1+fygDADyv8IPgB4P3jGAD4HvDdFnwn8I3DwR9m4tfnwa9J4vc3/gkdA/975vO+IufLnoH/KQ/+Bwv++xz8d78apfHfdlJZ8N90UPAK/3WqdkaOVxWWyi0p+JfJSo3sRiU5FWf3IllRgRxZ2bKy/0C2H8s6mm5x8GPg6+BHwA+Dr02QzsHxDAB8H/heC77Lgt8IfMPQDH5dK/C/tYD/sRX473Lw31rw33RUWfBftzfRX6VqZ5SGf5ms3FKZJfBfmNmNSnIqzu55sqI8OZpky8r+A9l+vm5x8GPg65MZAPgh8DXwg+AHxjIA8L2jGYCJ38kFvtOKD3z94Ax+rcKvSeL3y4Pfuxn87k3x31vw31nw3/6q4BX+mxz81x1M+FftLfD0sp2RiW7Bf5GqzJIF/3mykpyKm/asqECOrGxNsv9Atp/vtzj4MfCjE6VLBPwQ+Br4QfD94PvA94DvVvgu8J3gN4LfkMIfZNQEv7pvC/i/N8VPX70FPw3f2YA3U/hvLPivkwH/qoOCV72sVJn4RS8YwIsKlQX/eVlOpUYG/rOSPBVn97SoQKA/yc6Wlf0Hs/18v8XB17n86AQGAH4IfA38IPh+8L3ge8B358FvAL/egl+bB//7D+C/z4P/Ngf/jQU/Cf8qmQX/ZSqF/6JdujT+82TllkB/lqo0nf2ZGsBTa4A/ya0of48dWdmaZG97j5LZfr6u8UkMAPwo+JFxDAB8DfwA+H7wveB7FL4LfCf4jUMYgMKvB77Ogl+Twu+Tg9+rbfjvCuC/seC/7qTgTfzilx0s8PSiUqXwn7dT6Kpn5ZYs+E9L09mfJCvJSYE/tlaUv0eOJtmaZM/fw+aytb0Heeoa5+nXwY+CHwE/NIYBgB8A3w++F3y3wneB7wS/EfyGHPxaC361Bf/bT+C/teC/seAb8Bb8lxb8F6kU/vN26Uz0VBb8p2VmT5KVpjPwH5fkSaE/slaUv4eOrGzJHlizt637qWx/T13iE9QAwA+DHwJfG8UAwPeNYADgu4cxgBz8BuDrga+z4NdY8L9b8L/+BP4bC/7rXxS8wn9pwX9hwX9eqVL4z9pZ4OlpudmTcoVu6XFpOvtjNYBH1izoD1MVmT3IzdEk2/3c7M13r1C27O7+YF3i4OtcfxT8MPgh8IPgB8D3ge8B3w2+C3wn+I0mfvsUfh34tRb86gx+hRX/S/Zv/Dbhv87Bf2nBf5HEVwN4bsF/VmnAmyXR6UmFQrfgP7YG/CMzu5FCf5gK7Ae5WcDv5+bI7h7gWQF5t43dSWX7e+oSB1/n+o0BgK+BHwTfD74PfI/Cd4HvBL8R/IYB6vot+DU5+N9y8D9n45dZ8d8p/LcK/00O/qs8+C8s+M8t+M8s+E+TpeAV/mNrCv5RWRrewH9YaoI/yA3w+7lZwO9Zuutoks3aHYcFs4Vu58tmdusn6xwHXwc/yvUbAwA/CL4ffC/4HhO/gwt8J/iNwBsD6M8AwK818c3rB/+7Bf+riV+ehd8tD34XKW0J/6XCf2HBf67wn7XPwD+tNOGfJFPwj1Mp+EflCl0FuNED4I0U+H1rFvR7qZLQBQI4N1uq26ksoLda2c1kth/vRk6d4+Dr4EfBD3P9xgDA9w9lAOC7W8Cv7aOu34L/LQ/+pzz47wvgv6ZXzeA/z4P/VPWkXboMfIVCt+A/VD0oM+CN7oNvZIG/V2Ji381XEjpfgN+2dAvsJllBW9ENawrv+k90TfVrfDQDAD8Kfhh8jetXA+igBtBeDaDSGAD49eDX5eBXg/89B//LT+K/VPgv8uA/U/hpeAv+Ywv+Iwv+w3ILuup+aToD/55Cv5vKAn7HmsK+rbplzZHpJth5y0Wl663omj2D15quttCvcfD1kQwA/PBwBgB+AHwf+F7w3eC7uH4n+I3gN4BfD35dH2MAFTU5+N/A/6rwP1vwP7YevyQf/nMTv/hZDv4TC/5jhf+oItNDBf+g3IKeSuHfA/5uqQWd7qSyoN9W3Spq2s1UjuxugJ3qeqpCsM10NZUF70obulwgcwDgR8APga/x9AfA9/H0exS+C3yniV+ZD7+6lxpAHvxP/wL8p+0t8JVp+KJHyVLwFRb48hz4MgPdcdcsjX8npzR4blZw1Y0iA9voeiabtWupCuGqrjRXHsRLbehiTr/ER6YH0DEEvgZ+AHwf+B4LfiP4DX0t1w9+TR78rz3Mf+Wugd89g/8h81Ov9F0L+C8U/vOOaXgD/2kO/uNKC7zCT8I/qMjA3y+3oKvuZvAdd0ot4KpbJdngN61Zwem6NQV/LVMa/WqqFoAvW7qUr2YwL7Sh86pf4uDrXH9kmGUAgxgA+J4BDAB8Zz9jAO2MAYBfB34t+DW9jAGUfwf/2++W6+9uefpbif8yH37HbPwn7S3wOfhp+AoLvMpAT2Wip7LfLrWgW/Bv5nSjOA84XUtlgb9qZruSpxaBVRctXbDWDGZz/ZWnKmMA4OvgR8APgR/k+v1cv5cBuLl+NYB2jbn4vbPxv6Wuv7vl6c/+Z/XMp/9n8Ntn8NPw9MCCnwVfboEvy4J3JOFvlWbQb1pLgdP1VLngqqsqcHOzXVZdStVaZEvnrbWAWtWK/sypkzEA8CNDGAD4QfD94HvBd4Pv4vqd4DeAXw9+XW/L9YP/PQf/cw7+hxz8t23Af9rBAq/wHxXAv1+RA2/Bv6O6bcI7blnwrfA3SnLQ6VqqXHBrgF9WXTKzWbuYqjXIlv6yVGVvPeq5FjprqVN8WHoAHYwBgO/n6feC7wbfBX4j+A1/WAYAfg346QGA/7W7un6F/zEXv0vr8J+1At+AV/j3LaXhyzPoBnyZgZ7KfrM0B52ul+RBVzUBp8uqS47sLlrAL1hrBXRVgf5M1QbYZGdyOp2nTnHwda4/An6I61cDqPRYrl8NoKI+P37m+rsZA8jCf9/F8rmf/YWvJI3fqQl+cSvwi9LwFRl4K74Bb8G/aZaGv24pC1x1pbgp+iVrJrjRhUwG+HlrhS66APS5fP0AbqpTOZ20ZA4A/Ahf/DTwg1y/D3yPun4n+I3J6we/rpcxgHJjAOB/72G5/m6W6++qBtCl6Ze+tuI/UvgPKxU83W9n4hvwFvw75TnwZVnwjhvgJ8uCT2VFV13Og35RdaEoC91+3iyN/pelghddAPus6oyl1uCebKYTOR1XdYwPSQ+gfXIAAfB94HvAd4HvBL+ht3n9xgDAr8mDb1x/U/yCn/vN4T9uI/4dVRZ8WRa843oSvjQHna6WZMNfVl0qLoBuwT9v6S8zW1VOzWGfzYN9Ok+tQc6Hm69jOXWMg69z/WHwtQF5B1BhDAD8OoWvrr/sW3fL9Vs+9z90UQNoBf7zVuLfV6XhKzLwufg3y7Lg0/i58FdKsuEvWcqHfj5VNrq9yswEV51L1VZs1UlrbUC24h7N6UiesgcAfgB8H/hu8F1cfyP4DeDX98xcfzXX/727GkDy+n+zXH8e/Dd5vvQ1we/QFP9BK/Bv061yC3xZFryBf63Ucu0p+JKca0/BFxdAp79UVY7sssBVZx0/iK06oTpubz3ykQIdtnQop45x8HXwwwMyA/BmBlCRGkDy+mvBr+lhuX7wv/xmDCD99BsDsPwrePN97reE/7AZ/DsVGfi8+GUZ/GtmTeFLsuEvpuCLm0FPZYIbncuURj+j+mHsnFoL3RxyqoOWDqg6pAfQnwGAH+jLAMB3c/1O8BvN6y+v+90cQPr6u6UHkPzf0W96/Zl/Tj/7S19T/OKW8IEvysW/pcqCL8uCd1wtbQp/qSTn2i2dL86Gr7L0Z1ETdPtZswy6pULgzWKrjqqO2NsOnQ852f4CdYgPZAADjAFUJgfg5/q94LvAd4Lf2DMzgOT1V4OfGoBx/V3VALpYrj/zr+BN47/M81v/ieVzPx/+vVbgp+HLMvAp/CbwqrzwxXmuXcGfS5VBtwNuP52LrmoNeF7snA7b2wZdCHmfpb2W9qgBtI9y/WHwNa7f3yd7AA3g1yevv4cxgLLq1PX/Zrn+LvmffuP6O2U//Xnx27eMf7vCAt8MPvCOK0n80jzwJU3RDfjiZtDpbFEWujUTPKd86C2BH1YdspaD3dJFF0LO125Vh/gAYwCVagDt/OB7wHeB7+T6G35Xz39yAMnr75YeQPL/KldmAJ0LX39z3/gftbd84au04LdrHf61six4A/9yDr4BX1IAvrh5+DNFTeFBt2eBq447mqK3CZwOqg7YC2Pnu+jmkJPtsrTTUodYcgDgh7n+YJ/sAfD8lxsDAL+2u3n9xgCS19/V+L/MVfDpV9ef/fRn8ItbgV+UDz/r6pviO5L4TeBLCsAXq8/23GtX8KeLmqCnykZXNXflrQKn/al+EDsf9I4Cbaf2sf7mAEJqAL7eDAB8F9ffCH59D3MAyeuvBv/7b5br75K+fuN/T/+d+b+2ZV5/HvxnzXzps+LfycG/mcIvz8a/WpYF77hU2hTeip8Fr2py7Sl4OlXUBN7eBF111NE69ILgqn2qtmDvbAF7u6Vtqq2qzADAD/5hDKDCbQ6gPDWA5PXXdDMHkLz+r10tA8jz9L9Ofe7n/LN7hb70tQX/Whvwz6vywhdnw5/OgT9ZlIVuP54pG52OOLLRm7vyguCqPfafu+xcaCv2ljy1j4Ef7WsZAPhurt8JfmOP7AEkr/+bwv+s8Ft7/blP/8NWPPst4St4Az8vfEkB+OIW4IvywtuboKsKoee78rzglnbb8193a7C3toC9WbXJUmYA4Ae5fusAGpLPP/i13SzPf3IAXTLX/yEH/3Whpz/P5376d34ufkUG/3oO/pV8+KUt46fhi5uHP1GUDX9M1QRddcjxc+i7VbtUhcCbe8Zbi71RtcFS+xj4Ua4/OYAAA/AmBwC+s0fOANT1pwfQ2RhA9vV3Utdv+RdzNvnWn/Ol767l6W8rPvCOC6V54EsKwNPp4mbg6XhRBv6o6ohZNrqqNeh7WkKnHal+4Lpbi51qvaXKrAGA7+X6XakBgF8Hfs1vlgF0ST//qf/TbCXvLNf/Kv/T3+LnfnP4V/9m/ILwRRn4I5aaoKvaim4Fz0JXWdHbct2twV5naa1qjU3+HwuefjlXE4+yAAAAAElFTkSuQmCC", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var dU = gU(39468),
      HU = gU(36600),
      SU = gU(39517),
      sU = gU(39669),
      yU = gU(39752);
    class kU extends sU.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let FU = (() => {
      var UU, RU, gU, tU, pU, EU, PU, TU, qU, KU;
      let cU, GU, jU, uU, CU, hU, QU, eU, WU, fU = yU.b,
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [];
      return UU = class extends fU {
        get useEnergyConservation() {
          return (0, nU.c)(this, RU, "f")
        }
        set useEnergyConservation(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, nU.c)(this, gU, "f")
        }
        set useSmithVisibilityHeightCorrelated(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get useSphericalHarmonics() {
          return (0, nU.c)(this, tU, "f")
        }
        set useSphericalHarmonics(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, nU.c)(this, pU, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(UU) {
          (0, nU.e)(this, pU, UU, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, nU.c)(this, EU, "f")
        }
        set mixIblRadianceWithIrradiance(UU) {
          (0, nU.e)(this, EU, UU, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, nU.c)(this, PU, "f")
        }
        set useLegacySpecularEnergyConservation(UU) {
          (0, nU.e)(this, PU, UU, "f")
        }
        get baseDiffuseModel() {
          return (0, nU.c)(this, TU, "f")
        }
        set baseDiffuseModel(UU) {
          (0, nU.e)(this, TU, UU, "f")
        }
        get dielectricSpecularModel() {
          return (0, nU.c)(this, qU, "f")
        }
        set dielectricSpecularModel(UU) {
          (0, nU.e)(this, qU, UU, "f")
        }
        get conductorSpecularModel() {
          return (0, nU.c)(this, KU, "f")
        }
        set conductorSpecularModel(UU) {
          (0, nU.e)(this, KU, UU, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(cU) {
          let GU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(cU, "PBRBRDF", 90, new kU, GU), this._useEnergyConservation = UU.DEFAULT_USE_ENERGY_CONSERVATION, RU.set(this, (0, nU.j)(this, xU, UU.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, nU.j)(this, mU), UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), gU.set(this, (0, nU.j)(this, IU, UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, nU.j)(this, JU), UU.DEFAULT_USE_SPHERICAL_HARMONICS), tU.set(this, (0, nU.j)(this, wU, UU.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, nU.j)(this, oU), UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), pU.set(this, (0, nU.j)(this, ZU, UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, nU.j)(this, aU), UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), EU.set(this, (0, nU.j)(this, YU, UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, nU.j)(this, BU), UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), PU.set(this, (0, nU.j)(this, VU, UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, nU.j)(this, rU), UU.DEFAULT_DIFFUSE_MODEL), TU.set(this, (0, nU.j)(this, XU, UU.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, nU.j)(this, vU), UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL), qU.set(this, (0, nU.j)(this, dU, UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, nU.j)(this, HU), UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL), KU.set(this, (0, nU.j)(this, SU, UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, nU.j)(this, sU), this._internalMarkAllSubMeshesAsMiscDirty = cU._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(UU) {
          UU.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, UU.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, UU.SPHERICAL_HARMONICS = this._useSphericalHarmonics, UU.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, UU.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, UU.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, UU.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, UU.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, UU.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, pU = new WeakMap, EU = new WeakMap, PU = new WeakMap, TU = new WeakMap, qU = new WeakMap, KU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(fU[Symbol.metadata] ?? null) : void 0;
        cU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], GU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], jU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], uU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], CU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], hU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], QU = [(0, bU.K)("baseDiffuseModel"), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], eU = [(0, bU.K)("dielectricSpecularModel"), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], WU = [(0, bU.K)("conductorSpecularModel"), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], (0, nU.i)(UU, null, cU, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useEnergyConservation" in UU,
            get: UU => UU.useEnergyConservation,
            set: (UU, RU) => {
              UU.useEnergyConservation = RU
            }
          },
          metadata: RU
        }, xU, mU), (0, nU.i)(UU, null, GU, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSmithVisibilityHeightCorrelated" in UU,
            get: UU => UU.useSmithVisibilityHeightCorrelated,
            set: (UU, RU) => {
              UU.useSmithVisibilityHeightCorrelated = RU
            }
          },
          metadata: RU
        }, IU, JU), (0, nU.i)(UU, null, jU, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSphericalHarmonics" in UU,
            get: UU => UU.useSphericalHarmonics,
            set: (UU, RU) => {
              UU.useSphericalHarmonics = RU
            }
          },
          metadata: RU
        }, wU, oU), (0, nU.i)(UU, null, uU, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSpecularGlossinessInputEnergyConservation" in UU,
            get: UU => UU.useSpecularGlossinessInputEnergyConservation,
            set: (UU, RU) => {
              UU.useSpecularGlossinessInputEnergyConservation = RU
            }
          },
          metadata: RU
        }, ZU, aU), (0, nU.i)(UU, null, CU, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: UU => "mixIblRadianceWithIrradiance" in UU,
            get: UU => UU.mixIblRadianceWithIrradiance,
            set: (UU, RU) => {
              UU.mixIblRadianceWithIrradiance = RU
            }
          },
          metadata: RU
        }, YU, BU), (0, nU.i)(UU, null, hU, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLegacySpecularEnergyConservation" in UU,
            get: UU => UU.useLegacySpecularEnergyConservation,
            set: (UU, RU) => {
              UU.useLegacySpecularEnergyConservation = RU
            }
          },
          metadata: RU
        }, VU, rU), (0, nU.i)(UU, null, QU, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseModel" in UU,
            get: UU => UU.baseDiffuseModel,
            set: (UU, RU) => {
              UU.baseDiffuseModel = RU
            }
          },
          metadata: RU
        }, XU, vU), (0, nU.i)(UU, null, eU, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "dielectricSpecularModel" in UU,
            get: UU => UU.dielectricSpecularModel,
            set: (UU, RU) => {
              UU.dielectricSpecularModel = RU
            }
          },
          metadata: RU
        }, dU, HU), (0, nU.i)(UU, null, WU, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "conductorSpecularModel" in UU,
            get: UU => UU.conductorSpecularModel,
            set: (UU, RU) => {
              UU.conductorSpecularModel = RU
            }
          },
          metadata: RU
        }, SU, sU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU.DEFAULT_USE_ENERGY_CONSERVATION = !0, UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, UU.DEFAULT_USE_SPHERICAL_HARMONICS = !0, UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, UU.DEFAULT_DIFFUSE_MODEL = 0, UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, UU
    })();
    var iU = gU(39658),
      AU = gU(36761),
      zU = gU(39665),
      MU = gU(39483),
      DU = gU(39732),
      LU = gU(39729),
      NU = gU(39740),
      lU = gU(39716);
    class OU extends sU.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let UR = (() => {
      var UU, RU, gU, tU, pU, EU, PU, TU, qU, KU;
      let cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU = yU.b,
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        kU = [],
        FU = [],
        iU = [],
        zU = [],
        MU = [],
        DU = [],
        NU = [],
        UR = [],
        RR = [],
        gR = [],
        tR = [],
        pR = [],
        ER = [],
        PR = [],
        TR = [];
      return UU = class extends wU {
        get isEnabled() {
          return (0, nU.c)(this, RU, "f")
        }
        set isEnabled(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get indexOfRefraction() {
          return (0, nU.c)(this, gU, "f")
        }
        set indexOfRefraction(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get texture() {
          return (0, nU.c)(this, tU, "f")
        }
        set texture(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nU.c)(this, pU, "f")
        }
        set useRoughnessFromMainTexture(UU) {
          (0, nU.e)(this, pU, UU, "f")
        }
        get textureRoughness() {
          return (0, nU.c)(this, EU, "f")
        }
        set textureRoughness(UU) {
          (0, nU.e)(this, EU, UU, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, nU.c)(this, PU, "f")
        }
        set remapF0OnInterfaceChange(UU) {
          (0, nU.e)(this, PU, UU, "f")
        }
        get bumpTexture() {
          return (0, nU.c)(this, TU, "f")
        }
        set bumpTexture(UU) {
          (0, nU.e)(this, TU, UU, "f")
        }
        get isTintEnabled() {
          return (0, nU.c)(this, qU, "f")
        }
        set isTintEnabled(UU) {
          (0, nU.e)(this, qU, UU, "f")
        }
        get tintTexture() {
          return (0, nU.c)(this, KU, "f")
        }
        set tintTexture(UU) {
          (0, nU.e)(this, KU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(cU) {
          let GU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(cU, "PBRClearCoat", 100, new OU, GU), this._isEnabled = !1, RU.set(this, (0, nU.j)(this, oU, !1)), this.intensity = ((0, nU.j)(this, ZU), (0, nU.j)(this, aU, 1)), this.roughness = ((0, nU.j)(this, YU), (0, nU.j)(this, BU, 0)), this._indexOfRefraction = ((0, nU.j)(this, VU), UU._DefaultIndexOfRefraction), gU.set(this, (0, nU.j)(this, rU, UU._DefaultIndexOfRefraction)), this._texture = ((0, nU.j)(this, XU), null), tU.set(this, (0, nU.j)(this, vU, null)), this._useRoughnessFromMainTexture = ((0, nU.j)(this, dU), !0), pU.set(this, (0, nU.j)(this, HU, !0)), this._textureRoughness = ((0, nU.j)(this, SU), null), EU.set(this, (0, nU.j)(this, sU, null)), this._remapF0OnInterfaceChange = ((0, nU.j)(this, kU), !0), PU.set(this, (0, nU.j)(this, FU, !0)), this._bumpTexture = ((0, nU.j)(this, iU), null), TU.set(this, (0, nU.j)(this, zU, null)), this._isTintEnabled = ((0, nU.j)(this, MU), !1), qU.set(this, (0, nU.j)(this, DU, !1)), this.tintColor = ((0, nU.j)(this, NU), (0, nU.j)(this, UR, AU.e.White())), this.tintColorAtDistance = ((0, nU.j)(this, RR), (0, nU.j)(this, gR, 1)), this.tintThickness = ((0, nU.j)(this, tR), (0, nU.j)(this, pR, 1)), this._tintTexture = ((0, nU.j)(this, ER), null), KU.set(this, (0, nU.j)(this, PR, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nU.j)(this, TR), this._internalMarkAllSubMeshesAsTexturesDirty = cU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, RU, gU) {
          if (!this._isEnabled) return !0;
          const tU = this._material._disableBumpMap;
          if (UU._areTexturesDirty && RU.texturesEnabled) {
            if (this._texture && LU.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && LU.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (gU.getCaps().standardDerivatives && this._bumpTexture && LU.b.ClearCoatBumpTextureEnabled && !tU && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && LU.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(RU, gU) {
          this._isEnabled ? (RU.CLEARCOAT = !0, RU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, RU.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, RU._areTexturesDirty && gU.texturesEnabled && (this._texture && LU.b.ClearCoatTextureEnabled ? (0, lU.T)(this._texture, RU, "CLEARCOAT_TEXTURE") : RU.CLEARCOAT_TEXTURE = !1, this._textureRoughness && LU.b.ClearCoatTextureEnabled ? (0, lU.T)(this._textureRoughness, RU, "CLEARCOAT_TEXTURE_ROUGHNESS") : RU.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && LU.b.ClearCoatBumpTextureEnabled ? (0, lU.T)(this._bumpTexture, RU, "CLEARCOAT_BUMP") : RU.CLEARCOAT_BUMP = !1, RU.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === UU._DefaultIndexOfRefraction, this._isTintEnabled ? (RU.CLEARCOAT_TINT = !0, this._tintTexture && LU.b.ClearCoatTintTextureEnabled ? ((0, lU.T)(this._tintTexture, RU, "CLEARCOAT_TINT_TEXTURE"), RU.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : RU.CLEARCOAT_TINT_TEXTURE = !1) : (RU.CLEARCOAT_TINT = !1, RU.CLEARCOAT_TINT_TEXTURE = !1))) : (RU.CLEARCOAT = !1, RU.CLEARCOAT_TEXTURE = !1, RU.CLEARCOAT_TEXTURE_ROUGHNESS = !1, RU.CLEARCOAT_BUMP = !1, RU.CLEARCOAT_TINT = !1, RU.CLEARCOAT_TINT_TEXTURE = !1, RU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, RU.CLEARCOAT_DEFAULTIOR = !1, RU.CLEARCOAT_TEXTUREDIRECTUV = 0, RU.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, RU.CLEARCOAT_BUMPDIRECTUV = 0, RU.CLEARCOAT_REMAP_F0 = !1, RU.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, RU.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(UU, RU, gU, tU) {
          if (!this._isEnabled) return;
          const pU = tU.materialDefines,
            EU = this._material.isFrozen,
            PU = this._material._disableBumpMap,
            TU = this._material._invertNormalMapX,
            qU = this._material._invertNormalMapY;
          if (!UU.useUbo || !EU || !UU.isSync) {
            (this._texture || this._textureRoughness) && LU.b.ClearCoatTextureEnabled && (UU.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, lU.x)(this._texture, UU, "clearCoat"), this._textureRoughness && !pU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, lU.x)(this._textureRoughness, UU, "clearCoatRoughness")), this._bumpTexture && gU.getCaps().standardDerivatives && LU.b.ClearCoatTextureEnabled && !PU && (UU.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, lU.x)(this._bumpTexture, UU, "clearCoatBump"), RU._mirroredCameraPosition ? UU.updateFloat2("vClearCoatTangentSpaceParams", TU ? 1 : -1, qU ? 1 : -1) : UU.updateFloat2("vClearCoatTangentSpaceParams", TU ? -1 : 1, qU ? -1 : 1)), this._tintTexture && LU.b.ClearCoatTintTextureEnabled && (UU.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, lU.x)(this._tintTexture, UU, "clearCoatTint")), UU.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const tU = 1 - this._indexOfRefraction,
              EU = 1 + this._indexOfRefraction,
              KU = Math.pow(-tU / EU, 2),
              cU = 1 / this._indexOfRefraction;
            UU.updateFloat4("vClearCoatRefractionParams", KU, cU, tU, EU), this._isTintEnabled && (UU.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), UU.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          RU.texturesEnabled && (this._texture && LU.b.ClearCoatTextureEnabled && UU.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !pU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && LU.b.ClearCoatTextureEnabled && UU.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && gU.getCaps().standardDerivatives && LU.b.ClearCoatBumpTextureEnabled && !PU && UU.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && LU.b.ClearCoatTintTextureEnabled && UU.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(UU) {
          return this._texture === UU || (this._textureRoughness === UU || (this._bumpTexture === UU || this._tintTexture === UU))
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._textureRoughness && UU.push(this._textureRoughness), this._bumpTexture && UU.push(this._bumpTexture), this._tintTexture && UU.push(this._tintTexture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && UU.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && UU.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && UU.push(this._tintTexture)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(UU, RU, gU) {
          return UU.CLEARCOAT_BUMP && RU.addFallback(gU++, "CLEARCOAT_BUMP"), UU.CLEARCOAT_TINT && RU.addFallback(gU++, "CLEARCOAT_TINT"), UU.CLEARCOAT && RU.addFallback(gU++, "CLEARCOAT"), gU
        }
        getSamplers(UU) {
          UU.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, pU = new WeakMap, EU = new WeakMap, PU = new WeakMap, TU = new WeakMap, qU = new WeakMap, KU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(wU[Symbol.metadata] ?? null) : void 0;
        cU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, bU.K)()], jU = [(0, bU.K)()], uU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], eU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], WU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, bU.l)()], mU = [(0, bU.K)()], IU = [(0, bU.K)()], JU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], (0, nU.i)(UU, null, cU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: RU
        }, oU, ZU), (0, nU.i)(UU, null, uU, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, RU) => {
              UU.indexOfRefraction = RU
            }
          },
          metadata: RU
        }, rU, XU), (0, nU.i)(UU, null, CU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, RU) => {
              UU.texture = RU
            }
          },
          metadata: RU
        }, vU, dU), (0, nU.i)(UU, null, hU, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMainTexture" in UU,
            get: UU => UU.useRoughnessFromMainTexture,
            set: (UU, RU) => {
              UU.useRoughnessFromMainTexture = RU
            }
          },
          metadata: RU
        }, HU, SU), (0, nU.i)(UU, null, QU, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRoughness" in UU,
            get: UU => UU.textureRoughness,
            set: (UU, RU) => {
              UU.textureRoughness = RU
            }
          },
          metadata: RU
        }, sU, kU), (0, nU.i)(UU, null, eU, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: UU => "remapF0OnInterfaceChange" in UU,
            get: UU => UU.remapF0OnInterfaceChange,
            set: (UU, RU) => {
              UU.remapF0OnInterfaceChange = RU
            }
          },
          metadata: RU
        }, FU, iU), (0, nU.i)(UU, null, WU, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpTexture" in UU,
            get: UU => UU.bumpTexture,
            set: (UU, RU) => {
              UU.bumpTexture = RU
            }
          },
          metadata: RU
        }, zU, MU), (0, nU.i)(UU, null, fU, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isTintEnabled" in UU,
            get: UU => UU.isTintEnabled,
            set: (UU, RU) => {
              UU.isTintEnabled = RU
            }
          },
          metadata: RU
        }, DU, NU), (0, nU.i)(UU, null, JU, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintTexture" in UU,
            get: UU => UU.tintTexture,
            set: (UU, RU) => {
              UU.tintTexture = RU
            }
          },
          metadata: RU
        }, PR, TR), (0, nU.i)(null, null, GU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, RU) => {
              UU.intensity = RU
            }
          },
          metadata: RU
        }, aU, YU), (0, nU.i)(null, null, jU, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, RU) => {
              UU.roughness = RU
            }
          },
          metadata: RU
        }, BU, VU), (0, nU.i)(null, null, xU, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColor" in UU,
            get: UU => UU.tintColor,
            set: (UU, RU) => {
              UU.tintColor = RU
            }
          },
          metadata: RU
        }, UR, RR), (0, nU.i)(null, null, mU, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColorAtDistance" in UU,
            get: UU => UU.tintColorAtDistance,
            set: (UU, RU) => {
              UU.tintColorAtDistance = RU
            }
          },
          metadata: RU
        }, gR, tR), (0, nU.i)(null, null, IU, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintThickness" in UU,
            get: UU => UU.tintThickness,
            set: (UU, RU) => {
              UU.tintThickness = RU
            }
          },
          metadata: RU
        }, pR, ER), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU._DefaultIndexOfRefraction = 1.5, UU
    })();
    class RR extends sU.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let gR = (() => {
      var UU, RU, gU, tU;
      let pU, EU, PU, TU, qU, KU, cU, GU = yU.b,
        jU = [],
        uU = [],
        CU = [],
        hU = [],
        QU = [],
        eU = [],
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        oU = [];
      return UU = class extends GU {
        get isEnabled() {
          return (0, nU.c)(this, RU, "f")
        }
        set isEnabled(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get texture() {
          return (0, nU.c)(this, gU, "f")
        }
        set texture(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get thicknessTexture() {
          return (0, nU.c)(this, tU, "f")
        }
        set thicknessTexture(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pU) {
          let EU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pU, "PBRIridescence", 110, new RR, EU), this._isEnabled = !1, RU.set(this, (0, nU.j)(this, jU, !1)), this.intensity = ((0, nU.j)(this, uU), (0, nU.j)(this, CU, 1)), this.minimumThickness = ((0, nU.j)(this, hU), (0, nU.j)(this, QU, UU._DefaultMinimumThickness)), this.maximumThickness = ((0, nU.j)(this, eU), (0, nU.j)(this, WU, UU._DefaultMaximumThickness)), this.indexOfRefraction = ((0, nU.j)(this, fU), (0, nU.j)(this, xU, UU._DefaultIndexOfRefraction)), this._texture = ((0, nU.j)(this, mU), null), gU.set(this, (0, nU.j)(this, IU, null)), this._thicknessTexture = ((0, nU.j)(this, JU), null), tU.set(this, (0, nU.j)(this, wU, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nU.j)(this, oU), this._internalMarkAllSubMeshesAsTexturesDirty = pU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, RU) {
          if (!this._isEnabled) return !0;
          if (UU._areTexturesDirty && RU.texturesEnabled) {
            if (this._texture && LU.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && LU.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, RU) {
          this._isEnabled ? (UU.IRIDESCENCE = !0, UU._areTexturesDirty && RU.texturesEnabled && (this._texture && LU.b.IridescenceTextureEnabled ? (0, lU.T)(this._texture, UU, "IRIDESCENCE_TEXTURE") : UU.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && LU.b.IridescenceTextureEnabled ? (0, lU.T)(this._thicknessTexture, UU, "IRIDESCENCE_THICKNESS_TEXTURE") : UU.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (UU.IRIDESCENCE = !1, UU.IRIDESCENCE_TEXTURE = !1, UU.IRIDESCENCE_THICKNESS_TEXTURE = !1, UU.IRIDESCENCE_TEXTUREDIRECTUV = 0, UU.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(UU, RU) {
          if (!this._isEnabled) return;
          const gU = this._material.isFrozen;
          UU.useUbo && gU && UU.isSync || ((this._texture || this._thicknessTexture) && LU.b.IridescenceTextureEnabled && (UU.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, lU.x)(this._texture, UU, "iridescence"), this._thicknessTexture && (0, lU.x)(this._thicknessTexture, UU, "iridescenceThickness")), UU.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), RU.texturesEnabled && (this._texture && LU.b.IridescenceTextureEnabled && UU.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && LU.b.IridescenceTextureEnabled && UU.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(UU) {
          return this._texture === UU || this._thicknessTexture === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._thicknessTexture && UU.push(this._thicknessTexture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && UU.push(this._thicknessTexture)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(UU, RU, gU) {
          return UU.IRIDESCENCE && RU.addFallback(gU++, "IRIDESCENCE"), gU
        }
        getSamplers(UU) {
          UU.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(GU[Symbol.metadata] ?? null) : void 0;
        pU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, bU.K)()], PU = [(0, bU.K)()], TU = [(0, bU.K)()], qU = [(0, bU.K)()], KU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], (0, nU.i)(UU, null, pU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: RU
        }, jU, uU), (0, nU.i)(UU, null, KU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, RU) => {
              UU.texture = RU
            }
          },
          metadata: RU
        }, IU, JU), (0, nU.i)(UU, null, cU, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "thicknessTexture" in UU,
            get: UU => UU.thicknessTexture,
            set: (UU, RU) => {
              UU.thicknessTexture = RU
            }
          },
          metadata: RU
        }, wU, oU), (0, nU.i)(null, null, EU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, RU) => {
              UU.intensity = RU
            }
          },
          metadata: RU
        }, CU, hU), (0, nU.i)(null, null, PU, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "minimumThickness" in UU,
            get: UU => UU.minimumThickness,
            set: (UU, RU) => {
              UU.minimumThickness = RU
            }
          },
          metadata: RU
        }, QU, eU), (0, nU.i)(null, null, TU, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "maximumThickness" in UU,
            get: UU => UU.maximumThickness,
            set: (UU, RU) => {
              UU.maximumThickness = RU
            }
          },
          metadata: RU
        }, WU, fU), (0, nU.i)(null, null, qU, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, RU) => {
              UU.indexOfRefraction = RU
            }
          },
          metadata: RU
        }, xU, mU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU._DefaultMinimumThickness = 100, UU._DefaultMaximumThickness = 400, UU._DefaultIndexOfRefraction = 1.3, UU
    })();
    class tR extends sU.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let pR = (() => {
      var UU, RU, gU, tU;
      let pU, EU, PU, TU, qU, KU = yU.b,
        cU = [],
        GU = [],
        jU = [],
        uU = [],
        CU = [],
        hU = [],
        QU = [],
        eU = [],
        WU = [],
        fU = [];
      return UU = class extends KU {
        get isEnabled() {
          return (0, nU.c)(this, RU, "f")
        }
        set isEnabled(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        set angle(UU) {
          this.direction.x = Math.cos(UU), this.direction.y = Math.sin(UU)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, nU.c)(this, gU, "f")
        }
        set texture(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get legacy() {
          return (0, nU.c)(this, tU, "f")
        }
        set legacy(UU) {
          (0, nU.e)(this, tU, UU, "f")
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
        constructor(UU) {
          let pU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "PBRAnisotropic", 110, new tR, pU), this._isEnabled = !1, RU.set(this, (0, nU.j)(this, cU, !1)), this.intensity = ((0, nU.j)(this, GU), (0, nU.j)(this, jU, 1)), this.direction = ((0, nU.j)(this, uU), (0, nU.j)(this, CU, new HU.l(1, 0))), this._texture = ((0, nU.j)(this, hU), null), gU.set(this, (0, nU.j)(this, QU, null)), this._legacy = ((0, nU.j)(this, eU), !1), tU.set(this, (0, nU.j)(this, WU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nU.j)(this, fU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = UU._dirtyCallbacks[16]
        }
        isReadyForSubMesh(UU, RU) {
          return !this._isEnabled || !(UU._areTexturesDirty && RU.texturesEnabled && this._texture && LU.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(UU, RU, gU) {
          this._isEnabled ? (UU.ANISOTROPIC = this._isEnabled, this._isEnabled && !gU.isVerticesDataPresent(SU.l.TangentKind) && (UU._needUVs = !0, UU.MAINUV1 = !0), UU._areTexturesDirty && RU.texturesEnabled && (this._texture && LU.b.AnisotropicTextureEnabled ? (0, lU.T)(this._texture, UU, "ANISOTROPIC_TEXTURE") : UU.ANISOTROPIC_TEXTURE = !1), UU._areMiscDirty && (UU.ANISOTROPIC_LEGACY = this._legacy)) : (UU.ANISOTROPIC = !1, UU.ANISOTROPIC_TEXTURE = !1, UU.ANISOTROPIC_TEXTUREDIRECTUV = 0, UU.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(UU, RU) {
          if (!this._isEnabled) return;
          const gU = this._material.isFrozen;
          UU.useUbo && gU && UU.isSync || (this._texture && LU.b.AnisotropicTextureEnabled && (UU.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, lU.x)(this._texture, UU, "anisotropy")), UU.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), RU.texturesEnabled && this._texture && LU.b.AnisotropicTextureEnabled && UU.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(UU) {
          return this._texture === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture)
        }
        dispose(UU) {
          UU && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(UU, RU, gU) {
          return UU.ANISOTROPIC && RU.addFallback(gU++, "ANISOTROPIC"), gU
        }
        getSamplers(UU) {
          UU.push("anisotropySampler")
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
        parse(UU, RU, gU) {
          super.parse(UU, RU, gU), void 0 === UU.legacy && (this.legacy = !0)
        }
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(KU[Symbol.metadata] ?? null) : void 0;
        pU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, bU.K)()], PU = [(0, bU.E)()], TU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], (0, nU.i)(UU, null, pU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: RU
        }, cU, GU), (0, nU.i)(UU, null, TU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, RU) => {
              UU.texture = RU
            }
          },
          metadata: RU
        }, QU, eU), (0, nU.i)(UU, null, qU, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: UU => "legacy" in UU,
            get: UU => UU.legacy,
            set: (UU, RU) => {
              UU.legacy = RU
            }
          },
          metadata: RU
        }, WU, fU), (0, nU.i)(null, null, EU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, RU) => {
              UU.intensity = RU
            }
          },
          metadata: RU
        }, jU, uU), (0, nU.i)(null, null, PU, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: UU => "direction" in UU,
            get: UU => UU.direction,
            set: (UU, RU) => {
              UU.direction = RU
            }
          },
          metadata: RU
        }, CU, hU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU
    })();
    class ER extends sU.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let PR = (() => {
      var UU, RU, gU, tU, pU, EU, PU, TU;
      let qU, KU, cU, GU, jU, uU, CU, hU, QU, eU = yU.b,
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [];
      return UU = class extends eU {
        get isEnabled() {
          return (0, nU.c)(this, RU, "f")
        }
        set isEnabled(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, nU.c)(this, gU, "f")
        }
        set linkSheenWithAlbedo(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get texture() {
          return (0, nU.c)(this, tU, "f")
        }
        set texture(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, nU.c)(this, pU, "f")
        }
        set useRoughnessFromMainTexture(UU) {
          (0, nU.e)(this, pU, UU, "f")
        }
        get roughness() {
          return (0, nU.c)(this, EU, "f")
        }
        set roughness(UU) {
          (0, nU.e)(this, EU, UU, "f")
        }
        get textureRoughness() {
          return (0, nU.c)(this, PU, "f")
        }
        set textureRoughness(UU) {
          (0, nU.e)(this, PU, UU, "f")
        }
        get albedoScaling() {
          return (0, nU.c)(this, TU, "f")
        }
        set albedoScaling(UU) {
          (0, nU.e)(this, TU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(UU) {
          let qU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "Sheen", 120, new ER, qU), this._isEnabled = !1, RU.set(this, (0, nU.j)(this, WU, !1)), this._linkSheenWithAlbedo = ((0, nU.j)(this, fU), !1), gU.set(this, (0, nU.j)(this, xU, !1)), this.intensity = ((0, nU.j)(this, mU), (0, nU.j)(this, IU, 1)), this.color = ((0, nU.j)(this, JU), (0, nU.j)(this, wU, AU.e.White())), this._texture = ((0, nU.j)(this, oU), null), tU.set(this, (0, nU.j)(this, ZU, null)), this._useRoughnessFromMainTexture = ((0, nU.j)(this, aU), !0), pU.set(this, (0, nU.j)(this, YU, !0)), this._roughness = ((0, nU.j)(this, BU), null), EU.set(this, (0, nU.j)(this, VU, null)), this._textureRoughness = ((0, nU.j)(this, rU), null), PU.set(this, (0, nU.j)(this, XU, null)), this._albedoScaling = ((0, nU.j)(this, vU), !1), TU.set(this, (0, nU.j)(this, dU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, nU.j)(this, HU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, RU) {
          if (!this._isEnabled) return !0;
          if (UU._areTexturesDirty && RU.texturesEnabled) {
            if (this._texture && LU.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && LU.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, RU) {
          this._isEnabled ? (UU.SHEEN = !0, UU.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, UU.SHEEN_ROUGHNESS = null !== this._roughness, UU.SHEEN_ALBEDOSCALING = this._albedoScaling, UU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, UU._areTexturesDirty && RU.texturesEnabled && (this._texture && LU.b.SheenTextureEnabled ? ((0, lU.T)(this._texture, UU, "SHEEN_TEXTURE"), UU.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : UU.SHEEN_TEXTURE = !1, this._textureRoughness && LU.b.SheenTextureEnabled ? (0, lU.T)(this._textureRoughness, UU, "SHEEN_TEXTURE_ROUGHNESS") : UU.SHEEN_TEXTURE_ROUGHNESS = !1)) : (UU.SHEEN = !1, UU.SHEEN_TEXTURE = !1, UU.SHEEN_TEXTURE_ROUGHNESS = !1, UU.SHEEN_LINKWITHALBEDO = !1, UU.SHEEN_ROUGHNESS = !1, UU.SHEEN_ALBEDOSCALING = !1, UU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, UU.SHEEN_GAMMATEXTURE = !1, UU.SHEEN_TEXTUREDIRECTUV = 0, UU.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(UU, RU, gU, tU) {
          if (!this._isEnabled) return;
          const pU = tU.materialDefines,
            EU = this._material.isFrozen;
          UU.useUbo && EU && UU.isSync || ((this._texture || this._textureRoughness) && LU.b.SheenTextureEnabled && (UU.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, lU.x)(this._texture, UU, "sheen"), this._textureRoughness && !pU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, lU.x)(this._textureRoughness, UU, "sheenRoughness")), UU.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && UU.updateFloat("vSheenRoughness", this._roughness)), RU.texturesEnabled && (this._texture && LU.b.SheenTextureEnabled && UU.setTexture("sheenSampler", this._texture), this._textureRoughness && !pU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && LU.b.SheenTextureEnabled && UU.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(UU) {
          return this._texture === UU || this._textureRoughness === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._textureRoughness && UU.push(this._textureRoughness)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && UU.push(this._textureRoughness)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(UU, RU, gU) {
          return UU.SHEEN && RU.addFallback(gU++, "SHEEN"), gU
        }
        getSamplers(UU) {
          UU.push("sheenSampler", "sheenRoughnessSampler")
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
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, pU = new WeakMap, EU = new WeakMap, PU = new WeakMap, TU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(eU[Symbol.metadata] ?? null) : void 0;
        qU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], KU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, bU.K)()], GU = [(0, bU.l)()], jU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], (0, nU.i)(UU, null, qU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: RU
        }, WU, fU), (0, nU.i)(UU, null, KU, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: UU => "linkSheenWithAlbedo" in UU,
            get: UU => UU.linkSheenWithAlbedo,
            set: (UU, RU) => {
              UU.linkSheenWithAlbedo = RU
            }
          },
          metadata: RU
        }, xU, mU), (0, nU.i)(UU, null, jU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, RU) => {
              UU.texture = RU
            }
          },
          metadata: RU
        }, ZU, aU), (0, nU.i)(UU, null, uU, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMainTexture" in UU,
            get: UU => UU.useRoughnessFromMainTexture,
            set: (UU, RU) => {
              UU.useRoughnessFromMainTexture = RU
            }
          },
          metadata: RU
        }, YU, BU), (0, nU.i)(UU, null, CU, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, RU) => {
              UU.roughness = RU
            }
          },
          metadata: RU
        }, VU, rU), (0, nU.i)(UU, null, hU, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRoughness" in UU,
            get: UU => UU.textureRoughness,
            set: (UU, RU) => {
              UU.textureRoughness = RU
            }
          },
          metadata: RU
        }, XU, vU), (0, nU.i)(UU, null, QU, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoScaling" in UU,
            get: UU => UU.albedoScaling,
            set: (UU, RU) => {
              UU.albedoScaling = RU
            }
          },
          metadata: RU
        }, dU, HU), (0, nU.i)(null, null, cU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, RU) => {
              UU.intensity = RU
            }
          },
          metadata: RU
        }, IU, JU), (0, nU.i)(null, null, GU, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: UU => "color" in UU,
            get: UU => UU.color,
            set: (UU, RU) => {
              UU.color = RU
            }
          },
          metadata: RU
        }, wU, oU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU
    })();
    class TR extends sU.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let qR = (() => {
      var UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU;
      let eU, WU, fU, xU, mU, IU, JU, wU, oU, ZU, aU, YU, BU, VU, rU, XU, vU, dU, SU, sU, kU, FU, iU, zU, MU, DU, NU, OU, UR, RR, gR = yU.b,
        tR = [],
        pR = [],
        ER = [],
        PR = [],
        qR = [],
        KR = [],
        cR = [],
        GR = [],
        jR = [],
        uR = [],
        CR = [],
        hR = [],
        QR = [],
        eR = [],
        WR = [],
        fR = [],
        xR = [],
        mR = [],
        IR = [],
        JR = [],
        wR = [],
        nR = [],
        bR = [],
        oR = [],
        ZR = [],
        aR = [],
        YR = [],
        BR = [],
        VR = [],
        rR = [],
        XR = [],
        vR = [],
        dR = [],
        HR = [],
        SR = [],
        sR = [],
        yR = [],
        kR = [],
        FR = [],
        iR = [],
        AR = [],
        zR = [],
        MR = [],
        DR = [],
        LR = [],
        NR = [],
        lR = [],
        OR = [],
        Ug = [],
        Rg = [],
        gg = [],
        tg = [],
        pg = [],
        Eg = [],
        Pg = [],
        Tg = [],
        qg = [],
        Kg = [],
        cg = [],
        Gg = [];
      return UU = class extends gR {
        get isRefractionEnabled() {
          return (0, nU.c)(this, RU, "f")
        }
        set isRefractionEnabled(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get isTranslucencyEnabled() {
          return (0, nU.c)(this, gU, "f")
        }
        set isTranslucencyEnabled(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get isDispersionEnabled() {
          return (0, nU.c)(this, tU, "f")
        }
        set isDispersionEnabled(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        get isScatteringEnabled() {
          return (0, nU.c)(this, pU, "f")
        }
        set isScatteringEnabled(UU) {
          (0, nU.e)(this, pU, UU, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(UU) {
          this._scene.enableSubSurfaceForPrePass() && UU && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(UU))
        }
        get useAlbedoToTintRefraction() {
          return (0, nU.c)(this, EU, "f")
        }
        set useAlbedoToTintRefraction(UU) {
          (0, nU.e)(this, EU, UU, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, nU.c)(this, PU, "f")
        }
        set useAlbedoToTintTranslucency(UU) {
          (0, nU.e)(this, PU, UU, "f")
        }
        get thicknessTexture() {
          return (0, nU.c)(this, TU, "f")
        }
        set thicknessTexture(UU) {
          (0, nU.e)(this, TU, UU, "f")
        }
        get refractionTexture() {
          return (0, nU.c)(this, qU, "f")
        }
        set refractionTexture(UU) {
          (0, nU.e)(this, qU, UU, "f")
        }
        get indexOfRefraction() {
          return (0, nU.c)(this, KU, "f")
        }
        set indexOfRefraction(UU) {
          (0, nU.e)(this, KU, UU, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(UU) {
          const RU = UU >= 1 ? UU : -1;
          this._volumeIndexOfRefraction !== RU && (this._volumeIndexOfRefraction = RU, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, nU.c)(this, cU, "f")
        }
        set invertRefractionY(UU) {
          (0, nU.e)(this, cU, UU, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, nU.c)(this, GU, "f")
        }
        set linkRefractionWithTransparency(UU) {
          (0, nU.e)(this, GU, UU, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, nU.c)(this, jU, "f")
        }
        set useMaskFromThicknessTexture(UU) {
          (0, nU.e)(this, jU, UU, "f")
        }
        get refractionIntensityTexture() {
          return (0, nU.c)(this, uU, "f")
        }
        set refractionIntensityTexture(UU) {
          (0, nU.e)(this, uU, UU, "f")
        }
        get translucencyIntensityTexture() {
          return (0, nU.c)(this, CU, "f")
        }
        set translucencyIntensityTexture(UU) {
          (0, nU.e)(this, CU, UU, "f")
        }
        get translucencyColorTexture() {
          return (0, nU.c)(this, hU, "f")
        }
        set translucencyColorTexture(UU) {
          (0, nU.e)(this, hU, UU, "f")
        }
        get useGltfStyleTextures() {
          return (0, nU.c)(this, QU, "f")
        }
        set useGltfStyleTextures(UU) {
          (0, nU.e)(this, QU, UU, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(UU) {
          this.legacyTranslucency = UU
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
        constructor(eU) {
          let WU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(eU, "PBRSubSurface", 130, new TR, WU), this._isRefractionEnabled = !1, RU.set(this, (0, nU.j)(this, tR, !1)), this._isTranslucencyEnabled = ((0, nU.j)(this, pR), !1), gU.set(this, (0, nU.j)(this, ER, !1)), this._isDispersionEnabled = ((0, nU.j)(this, PR), !1), tU.set(this, (0, nU.j)(this, qR, !1)), this._isScatteringEnabled = ((0, nU.j)(this, KR), !1), pU.set(this, (0, nU.j)(this, cR, !1)), this._scatteringDiffusionProfileIndex = ((0, nU.j)(this, GR), (0, nU.j)(this, jR, 0)), this.refractionIntensity = ((0, nU.j)(this, uR), (0, nU.j)(this, CR, 1)), this.translucencyIntensity = ((0, nU.j)(this, hR), (0, nU.j)(this, QR, 1)), this._useAlbedoToTintRefraction = ((0, nU.j)(this, eR), !1), EU.set(this, (0, nU.j)(this, WR, !1)), this._useAlbedoToTintTranslucency = ((0, nU.j)(this, fR), !1), PU.set(this, (0, nU.j)(this, xR, !1)), this._thicknessTexture = ((0, nU.j)(this, mR), null), TU.set(this, (0, nU.j)(this, IR, null)), this._refractionTexture = ((0, nU.j)(this, JR), null), qU.set(this, (0, nU.j)(this, wR, null)), this._indexOfRefraction = ((0, nU.j)(this, nR), 1.5), KU.set(this, (0, nU.j)(this, bR, 1.5)), this._volumeIndexOfRefraction = ((0, nU.j)(this, oR), (0, nU.j)(this, ZR, -1)), this._invertRefractionY = ((0, nU.j)(this, aR), !1), cU.set(this, (0, nU.j)(this, YR, !1)), this._linkRefractionWithTransparency = ((0, nU.j)(this, BR), !1), GU.set(this, (0, nU.j)(this, VR, !1)), this.minimumThickness = ((0, nU.j)(this, rR), (0, nU.j)(this, XR, 0)), this.maximumThickness = ((0, nU.j)(this, vR), (0, nU.j)(this, dR, 1)), this.useThicknessAsDepth = ((0, nU.j)(this, HR), (0, nU.j)(this, SR, !1)), this.tintColor = ((0, nU.j)(this, sR), (0, nU.j)(this, yR, AU.e.White())), this.tintColorAtDistance = ((0, nU.j)(this, kR), (0, nU.j)(this, FR, 1)), this.dispersion = ((0, nU.j)(this, iR), (0, nU.j)(this, AR, 0)), this.diffusionDistance = ((0, nU.j)(this, zR), (0, nU.j)(this, MR, AU.e.White())), this._useMaskFromThicknessTexture = ((0, nU.j)(this, DR), !1), jU.set(this, (0, nU.j)(this, LR, !1)), this._refractionIntensityTexture = ((0, nU.j)(this, NR), null), uU.set(this, (0, nU.j)(this, lR, null)), this._translucencyIntensityTexture = ((0, nU.j)(this, OR), null), CU.set(this, (0, nU.j)(this, Ug, null)), this.translucencyColor = ((0, nU.j)(this, Rg), (0, nU.j)(this, gg, null)), this._translucencyColorTexture = ((0, nU.j)(this, tg), null), hU.set(this, (0, nU.j)(this, pg, null)), this._useGltfStyleTextures = ((0, nU.j)(this, Eg), !0), QU.set(this, (0, nU.j)(this, Pg, !0)), this.applyAlbedoAfterSubSurface = ((0, nU.j)(this, Tg), (0, nU.j)(this, qg, UU.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, nU.j)(this, Kg), (0, nU.j)(this, cg, UU.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, nU.j)(this, Gg), this._scene = eU.aZ(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = eU._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = eU._dirtyCallbacks[32]
        }
        isReadyForSubMesh(UU, RU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (UU._areTexturesDirty && RU.texturesEnabled) {
            if (this._thicknessTexture && LU.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && LU.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && LU.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && LU.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const UU = this._getRefractionTexture(RU);
            if (UU && LU.b.RefractionTextureEnabled && !UU.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, RU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return UU.SUBSURFACE = !1, UU.SS_DISPERSION = !1, UU.SS_TRANSLUCENCY = !1, UU.SS_SCATTERING = !1, UU.SS_REFRACTION = !1, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_THICKNESSANDMASK_TEXTURE = !1, UU.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, UU.SS_HAS_THICKNESS = !1, UU.SS_REFRACTIONINTENSITY_TEXTURE = !1, UU.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, UU.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, UU.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, UU.SS_REFRACTIONMAP_3D = !1, UU.SS_REFRACTIONMAP_OPPOSITEZ = !1, UU.SS_LODINREFRACTIONALPHA = !1, UU.SS_GAMMAREFRACTION = !1, UU.SS_RGBDREFRACTION = !1, UU.SS_LINEARSPECULARREFRACTION = !1, UU.SS_LINKREFRACTIONTOTRANSPARENCY = !1, UU.SS_ALBEDOFORREFRACTIONTINT = !1, UU.SS_ALBEDOFORTRANSLUCENCYTINT = !1, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, UU.SS_USE_THICKNESS_AS_DEPTH = !1, UU.SS_USE_GLTF_TEXTURES = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, UU.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(UU.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (UU._areTexturesDirty) {
            if (UU.SUBSURFACE = !0, UU.SS_DISPERSION = this._isDispersionEnabled, UU.SS_TRANSLUCENCY = this._isTranslucencyEnabled, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, UU.SS_SCATTERING = this._isScatteringEnabled, UU.SS_THICKNESSANDMASK_TEXTURE = !1, UU.SS_REFRACTIONINTENSITY_TEXTURE = !1, UU.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, UU.SS_HAS_THICKNESS = !1, UU.SS_USE_GLTF_TEXTURES = !1, UU.SS_REFRACTION = !1, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_REFRACTIONMAP_3D = !1, UU.SS_GAMMAREFRACTION = !1, UU.SS_RGBDREFRACTION = !1, UU.SS_LINEARSPECULARREFRACTION = !1, UU.SS_REFRACTIONMAP_OPPOSITEZ = !1, UU.SS_LODINREFRACTIONALPHA = !1, UU.SS_LINKREFRACTIONTOTRANSPARENCY = !1, UU.SS_ALBEDOFORREFRACTIONTINT = !1, UU.SS_ALBEDOFORTRANSLUCENCYTINT = !1, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, UU.SS_USE_THICKNESS_AS_DEPTH = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, UU.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, UU._areTexturesDirty && RU.texturesEnabled && (this._thicknessTexture && LU.b.ThicknessTextureEnabled && (0, lU.T)(this._thicknessTexture, UU, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && LU.b.RefractionIntensityTextureEnabled && (0, lU.T)(this._refractionIntensityTexture, UU, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && LU.b.TranslucencyIntensityTextureEnabled && (0, lU.T)(this._translucencyIntensityTexture, UU, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && LU.b.TranslucencyColorTextureEnabled && ((0, lU.T)(this._translucencyColorTexture, UU, "SS_TRANSLUCENCYCOLOR_TEXTURE"), UU.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), UU.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, UU.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && RU.texturesEnabled) {
              const gU = this._getRefractionTexture(RU);
              gU && LU.b.RefractionTextureEnabled && (UU.SS_REFRACTION = !0, UU.SS_REFRACTIONMAP_3D = gU.isCube, UU.SS_GAMMAREFRACTION = gU.gammaSpace, UU.SS_RGBDREFRACTION = gU.isRGBD, UU.SS_LINEARSPECULARREFRACTION = gU.linearSpecularLOD, UU.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && gU.isCube ? !gU.invertZ : gU.invertZ, UU.SS_LODINREFRACTIONALPHA = gU.lodLevelInAlpha, UU.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, UU.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = gU.isCube && gU.boundingBoxSize, UU.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (UU.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(UU, RU, gU, tU) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) UU.updateFloat2("vThicknessParam", 0, 0);
            else {
              tU.getRenderingMesh().getWorldMatrix().decompose(HU.h.xC[0]);
              const RU = Math.max(Math.abs(HU.h.xC[0].x), Math.abs(HU.h.xC[0].y), Math.abs(HU.h.xC[0].z));
              UU.updateFloat2("vThicknessParam", this.minimumThickness * RU, (this.maximumThickness - this.minimumThickness) * RU)
            }
        }
        bindForSubMesh(UU, RU, gU, tU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const pU = tU.materialDefines,
            EU = this._material.isFrozen,
            PU = this._material.realTimeFiltering,
            TU = pU.LODBASEDMICROSFURACE,
            qU = this._getRefractionTexture(RU);
          if (!UU.useUbo || !EU || !UU.isSync) {
            if (this._thicknessTexture && LU.b.ThicknessTextureEnabled && (UU.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, lU.x)(this._thicknessTexture, UU, "thickness")), this._refractionIntensityTexture && LU.b.RefractionIntensityTextureEnabled && pU.SS_REFRACTIONINTENSITY_TEXTURE && (UU.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, lU.x)(this._refractionIntensityTexture, UU, "refractionIntensity")), this._translucencyColorTexture && LU.b.TranslucencyColorTextureEnabled && pU.SS_TRANSLUCENCYCOLOR_TEXTURE && (UU.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, lU.x)(this._translucencyColorTexture, UU, "translucencyColor")), this._translucencyIntensityTexture && LU.b.TranslucencyIntensityTextureEnabled && pU.SS_TRANSLUCENCYINTENSITY_TEXTURE && (UU.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, lU.x)(this._translucencyIntensityTexture, UU, "translucencyIntensity")), qU && LU.b.RefractionTextureEnabled) {
              UU.p_("refractionMatrix", qU.getRefractionTextureMatrix());
              let RU = 1;
              qU.isCube || qU.depth && (RU = qU.depth);
              const gU = qU.getSize().width,
                tU = this.volumeIndexOfRefraction;
              if (UU.updateFloat4("vRefractionInfos", qU.level, 1 / tU, RU, this._invertRefractionY ? -1 : 1), UU.updateFloat4("vRefractionMicrosurfaceInfos", gU, qU.lodGenerationScale, qU.lodGenerationOffset, 1 / this.indexOfRefraction), PU && UU.updateFloat2("vRefractionFilteringInfo", gU, Math.log2(gU)), qU.boundingBoxSize) {
                const RU = qU;
                UU.updateVector3("vRefractionPosition", RU.boundingBoxPosition), UU.updateVector3("vRefractionSize", RU.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && UU.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), UU.updateColor3("vDiffusionDistance", this.diffusionDistance), UU.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), UU.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), UU.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), UU.updateFloat("dispersion", this.dispersion)
          }
          RU.texturesEnabled && (this._thicknessTexture && LU.b.ThicknessTextureEnabled && UU.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && LU.b.RefractionIntensityTextureEnabled && pU.SS_REFRACTIONINTENSITY_TEXTURE && UU.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && LU.b.TranslucencyIntensityTextureEnabled && pU.SS_TRANSLUCENCYINTENSITY_TEXTURE && UU.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && LU.b.TranslucencyColorTextureEnabled && pU.SS_TRANSLUCENCYCOLOR_TEXTURE && UU.setTexture("translucencyColorSampler", this._translucencyColorTexture), qU && LU.b.RefractionTextureEnabled && (TU ? UU.setTexture("refractionSampler", qU) : (UU.setTexture("refractionSampler", qU._lodTextureMid || qU), UU.setTexture("refractionSamplerLow", qU._lodTextureLow || qU), UU.setTexture("refractionSamplerHigh", qU._lodTextureHigh || qU))))
        }
        _getRefractionTexture(UU) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? UU.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(UU) {
          LU.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && UU.push(this._refractionTexture)
        }
        hasTexture(UU) {
          return this._thicknessTexture === UU || (this._refractionTexture === UU || (this._refractionIntensityTexture === UU || (this._translucencyIntensityTexture === UU || this._translucencyColorTexture === UU)))
        }
        hasRenderTargetTextures() {
          return !!(LU.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(UU) {
          this._thicknessTexture && UU.push(this._thicknessTexture), this._refractionTexture && UU.push(this._refractionTexture), this._refractionIntensityTexture && UU.push(this._refractionIntensityTexture), this._translucencyColorTexture && UU.push(this._translucencyColorTexture), this._translucencyIntensityTexture && UU.push(this._translucencyIntensityTexture)
        }
        getAnimatables(UU) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && UU.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && UU.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && UU.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && UU.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && UU.push(this._translucencyIntensityTexture)
        }
        dispose(UU) {
          UU && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(UU, RU, gU) {
          return UU.SS_SCATTERING && RU.addFallback(gU++, "SS_SCATTERING"), UU.SS_TRANSLUCENCY && RU.addFallback(gU++, "SS_TRANSLUCENCY"), gU
        }
        getSamplers(UU) {
          UU.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, pU = new WeakMap, EU = new WeakMap, PU = new WeakMap, TU = new WeakMap, qU = new WeakMap, KU = new WeakMap, cU = new WeakMap, GU = new WeakMap, jU = new WeakMap, uU = new WeakMap, CU = new WeakMap, hU = new WeakMap, QU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(gR[Symbol.metadata] ?? null) : void 0;
        eU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], WU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, bU.K)(), (0, bU.e)("_markScenePrePassDirty")], mU = [(0, bU.K)()], IU = [(0, bU.K)()], JU = [(0, bU.K)()], wU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ZU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], BU = [(0, bU.K)()], VU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], XU = [(0, bU.K)()], vU = [(0, bU.K)()], dU = [(0, bU.K)()], SU = [(0, bU.l)()], sU = [(0, bU.K)()], kU = [(0, bU.K)()], FU = [(0, bU.l)()], iU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], zU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], MU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, bU.l)()], NU = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, bU.K)()], RR = [(0, bU.K)()], (0, nU.i)(UU, null, eU, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isRefractionEnabled" in UU,
            get: UU => UU.isRefractionEnabled,
            set: (UU, RU) => {
              UU.isRefractionEnabled = RU
            }
          },
          metadata: RU
        }, tR, pR), (0, nU.i)(UU, null, WU, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isTranslucencyEnabled" in UU,
            get: UU => UU.isTranslucencyEnabled,
            set: (UU, RU) => {
              UU.isTranslucencyEnabled = RU
            }
          },
          metadata: RU
        }, ER, PR), (0, nU.i)(UU, null, fU, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isDispersionEnabled" in UU,
            get: UU => UU.isDispersionEnabled,
            set: (UU, RU) => {
              UU.isDispersionEnabled = RU
            }
          },
          metadata: RU
        }, qR, KR), (0, nU.i)(UU, null, xU, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isScatteringEnabled" in UU,
            get: UU => UU.isScatteringEnabled,
            set: (UU, RU) => {
              UU.isScatteringEnabled = RU
            }
          },
          metadata: RU
        }, cR, GR), (0, nU.i)(UU, null, wU, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlbedoToTintRefraction" in UU,
            get: UU => UU.useAlbedoToTintRefraction,
            set: (UU, RU) => {
              UU.useAlbedoToTintRefraction = RU
            }
          },
          metadata: RU
        }, WR, fR), (0, nU.i)(UU, null, oU, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlbedoToTintTranslucency" in UU,
            get: UU => UU.useAlbedoToTintTranslucency,
            set: (UU, RU) => {
              UU.useAlbedoToTintTranslucency = RU
            }
          },
          metadata: RU
        }, xR, mR), (0, nU.i)(UU, null, ZU, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "thicknessTexture" in UU,
            get: UU => UU.thicknessTexture,
            set: (UU, RU) => {
              UU.thicknessTexture = RU
            }
          },
          metadata: RU
        }, IR, JR), (0, nU.i)(UU, null, aU, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionTexture" in UU,
            get: UU => UU.refractionTexture,
            set: (UU, RU) => {
              UU.refractionTexture = RU
            }
          },
          metadata: RU
        }, wR, nR), (0, nU.i)(UU, null, YU, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, RU) => {
              UU.indexOfRefraction = RU
            }
          },
          metadata: RU
        }, bR, oR), (0, nU.i)(UU, null, VU, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertRefractionY" in UU,
            get: UU => UU.invertRefractionY,
            set: (UU, RU) => {
              UU.invertRefractionY = RU
            }
          },
          metadata: RU
        }, YR, BR), (0, nU.i)(UU, null, rU, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: UU => "linkRefractionWithTransparency" in UU,
            get: UU => UU.linkRefractionWithTransparency,
            set: (UU, RU) => {
              UU.linkRefractionWithTransparency = RU
            }
          },
          metadata: RU
        }, VR, rR), (0, nU.i)(UU, null, iU, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMaskFromThicknessTexture" in UU,
            get: UU => UU.useMaskFromThicknessTexture,
            set: (UU, RU) => {
              UU.useMaskFromThicknessTexture = RU
            }
          },
          metadata: RU
        }, LR, NR), (0, nU.i)(UU, null, zU, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionIntensityTexture" in UU,
            get: UU => UU.refractionIntensityTexture,
            set: (UU, RU) => {
              UU.refractionIntensityTexture = RU
            }
          },
          metadata: RU
        }, lR, OR), (0, nU.i)(UU, null, MU, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyIntensityTexture" in UU,
            get: UU => UU.translucencyIntensityTexture,
            set: (UU, RU) => {
              UU.translucencyIntensityTexture = RU
            }
          },
          metadata: RU
        }, Ug, Rg), (0, nU.i)(UU, null, NU, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyColorTexture" in UU,
            get: UU => UU.translucencyColorTexture,
            set: (UU, RU) => {
              UU.translucencyColorTexture = RU
            }
          },
          metadata: RU
        }, pg, Eg), (0, nU.i)(UU, null, OU, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: UU => "useGltfStyleTextures" in UU,
            get: UU => UU.useGltfStyleTextures,
            set: (UU, RU) => {
              UU.useGltfStyleTextures = RU
            }
          },
          metadata: RU
        }, Pg, Tg), (0, nU.i)(null, null, mU, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: UU => "_scatteringDiffusionProfileIndex" in UU,
            get: UU => UU._scatteringDiffusionProfileIndex,
            set: (UU, RU) => {
              UU._scatteringDiffusionProfileIndex = RU
            }
          },
          metadata: RU
        }, jR, uR), (0, nU.i)(null, null, IU, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionIntensity" in UU,
            get: UU => UU.refractionIntensity,
            set: (UU, RU) => {
              UU.refractionIntensity = RU
            }
          },
          metadata: RU
        }, CR, hR), (0, nU.i)(null, null, JU, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyIntensity" in UU,
            get: UU => UU.translucencyIntensity,
            set: (UU, RU) => {
              UU.translucencyIntensity = RU
            }
          },
          metadata: RU
        }, QR, eR), (0, nU.i)(null, null, BU, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "_volumeIndexOfRefraction" in UU,
            get: UU => UU._volumeIndexOfRefraction,
            set: (UU, RU) => {
              UU._volumeIndexOfRefraction = RU
            }
          },
          metadata: RU
        }, ZR, aR), (0, nU.i)(null, null, XU, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "minimumThickness" in UU,
            get: UU => UU.minimumThickness,
            set: (UU, RU) => {
              UU.minimumThickness = RU
            }
          },
          metadata: RU
        }, XR, vR), (0, nU.i)(null, null, vU, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "maximumThickness" in UU,
            get: UU => UU.maximumThickness,
            set: (UU, RU) => {
              UU.maximumThickness = RU
            }
          },
          metadata: RU
        }, dR, HR), (0, nU.i)(null, null, dU, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: UU => "useThicknessAsDepth" in UU,
            get: UU => UU.useThicknessAsDepth,
            set: (UU, RU) => {
              UU.useThicknessAsDepth = RU
            }
          },
          metadata: RU
        }, SR, sR), (0, nU.i)(null, null, SU, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColor" in UU,
            get: UU => UU.tintColor,
            set: (UU, RU) => {
              UU.tintColor = RU
            }
          },
          metadata: RU
        }, yR, kR), (0, nU.i)(null, null, sU, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColorAtDistance" in UU,
            get: UU => UU.tintColorAtDistance,
            set: (UU, RU) => {
              UU.tintColorAtDistance = RU
            }
          },
          metadata: RU
        }, FR, iR), (0, nU.i)(null, null, kU, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: UU => "dispersion" in UU,
            get: UU => UU.dispersion,
            set: (UU, RU) => {
              UU.dispersion = RU
            }
          },
          metadata: RU
        }, AR, zR), (0, nU.i)(null, null, FU, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffusionDistance" in UU,
            get: UU => UU.diffusionDistance,
            set: (UU, RU) => {
              UU.diffusionDistance = RU
            }
          },
          metadata: RU
        }, MR, DR), (0, nU.i)(null, null, DU, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyColor" in UU,
            get: UU => UU.translucencyColor,
            set: (UU, RU) => {
              UU.translucencyColor = RU
            }
          },
          metadata: RU
        }, gg, tg), (0, nU.i)(null, null, UR, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: UU => "applyAlbedoAfterSubSurface" in UU,
            get: UU => UU.applyAlbedoAfterSubSurface,
            set: (UU, RU) => {
              UU.applyAlbedoAfterSubSurface = RU
            }
          },
          metadata: RU
        }, qg, Kg), (0, nU.i)(null, null, RR, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: UU => "legacyTranslucency" in UU,
            get: UU => UU.legacyTranslucency,
            set: (UU, RU) => {
              UU.legacyTranslucency = RU
            }
          },
          metadata: RU
        }, cg, Gg), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, UU.DEFAULT_LEGACY_TRANSLUCENCY = !1, UU
    })();
    var KR = gU(39744),
      cR = gU(39720),
      GR = gU(39755),
      jR = gU(39759),
      uR = gU(39766),
      CR = gU(39768),
      hR = gU(39772),
      QR = gU(39775),
      eR = gU(39256);
    const WR = {
      effect: null,
      subMesh: null
    };
    class fR extends((0, hR.b)((0, CR.c)(sU.c))) {}
    class xR extends((0, zU.c)(fR)) {
      constructor(UU) {
        super(UU), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class mR extends((0, QR.c)(DU.b)) {}
    let IR = (() => {
      var UU, RU;
      let tU, pU = mR,
        PU = [],
        TU = [];
      return UU = class extends pU {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(UU) {
          this._realTimeFiltering = UU, this.cRU(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(UU) {
          this._realTimeFilteringQuality = UU, this.cRU(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, nU.c)(this, RU, "f")
        }
        set debugMode(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        constructor(gU, tU) {
          super(gU, tU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new HU.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = AU.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new AU.e(0, 0, 0), this._albedoColor = new AU.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new AU.e(1, 1, 1), this._reflectionColor = new AU.e(1, 1, 1), this._emissiveColor = new AU.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = UU.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ZU.h(16), this._globalAmbientColor = new AU.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, RU.set(this, (0, nU.j)(this, PU, 0)), this.debugLimit = ((0, nU.j)(this, TU), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new FU(this), this.clearCoat = new UR(this), this.iridescence = new gR(this), this.anisotropy = new pR(this), this.sheen = new PR(this), this.subSurface = new qR(this), this.detailMap = new KR.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), LU.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = rU(this.aZ()), this.prePassConfiguration = new iU.b
        }
        get hasRenderTargetTextures() {
          return !!(LU.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === UU.PBRMATERIAL_OPAQUE || this._transparencyMode === UU.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === UU.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== UU.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(UU, RU, gU) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const tU = RU._drawWrapper;
          if (tU.effect && this.isFrozen && tU._wasPreviouslyReady && tU._wasPreviouslyUsingInstances === gU) return !0;
          RU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), RU.materialDefines = new xR(this._eventInfo.defineNames));
          const pU = RU.materialDefines;
          if (this._isReadyForSubMesh(RU)) return !0;
          const EU = this.aZ(),
            PU = EU.WC();
          if (pU._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, EU.texturesEnabled)) {
            if (this._albedoTexture && LU.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && LU.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && LU.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && LU.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && LU.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const UU = this._getReflectionTexture();
            if (UU && LU.b.ReflectionTextureEnabled) {
              if (!UU.isReadyOrNotBlocking()) return !1;
              if (UU.irradianceTexture) {
                if (!UU.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!UU.sphericalPolynomial && UU.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && LU.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && LU.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (LU.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (PU.getCaps().standardDerivatives && this._bumpTexture && LU.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && LU.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pU, this._eventInfo.subMesh = RU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (pU._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (pU.AREALIGHTUSED || pU.CLUSTLIGHT_BATCH)
            for (let GU = 0; GU < UU.lightSources.length; GU++)
              if (!UU.lightSources[GU]._isReady()) return !1;
          if (PU.getCaps().standardDerivatives || UU.isVerticesDataPresent(SU.l.NormalKind) || (UU.createNormals(!0), oU.e.Warn("PBRMaterial: Normals have been created for the mesh: " + UU.name)), !(0, lU.b)(EU, UU, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const TU = RU.effect,
            qU = pU._areLightsDisposed,
            KU = this._prepareEffect(UU, RU.getRenderingMesh(), pU, this.onCompiled, this.onError, gU, null);
          let cU = !1;
          if (KU)
            if (this._onEffectCreatedObservable && (WR.effect = KU, WR.subMesh = RU, this._onEffectCreatedObservable.notifyObservers(WR)), this.allowShaderHotSwapping && TU && !KU.isReady()) {
              if (pU.markAsUnprocessed(), cU = this.isFrozen, qU) return pU._areLightsDisposed = !0, !1
            } else EU.resetCachedMaterial(), RU.setEffect(KU, pU, this._materialContext);
          return !(!RU.effect || !RU.effect.isReady()) && (pU._renderId = EU.getRenderId(), tU._wasPreviouslyReady = !cU, tU._wasPreviouslyUsingInstances = !!gU, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(RU, gU, tU) {
          let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(RU, gU, tU, PU, TU), !tU.isDirty) return null;
          tU.markAsProcessed();
          const qU = this.aZ().WC(),
            KU = new NU.c;
          let cU = 0;
          tU.USESPHERICALINVERTEX && KU.addFallback(cU++, "USESPHERICALINVERTEX"), tU.FOG && KU.addFallback(cU, "FOG"), tU.SPECULARAA && KU.addFallback(cU, "SPECULARAA"), tU.POINTSIZE && KU.addFallback(cU, "POINTSIZE"), tU.LOGARITHMICDEPTH && KU.addFallback(cU, "LOGARITHMICDEPTH"), tU.PARALLAX && KU.addFallback(cU, "PARALLAX"), tU.PARALLAX_RHS && KU.addFallback(cU, "PARALLAX_RHS"), tU.PARALLAXOCCLUSION && KU.addFallback(cU++, "PARALLAXOCCLUSION"), tU.ENVIRONMENTBRDF && KU.addFallback(cU++, "ENVIRONMENTBRDF"), tU.TANGENT && KU.addFallback(cU++, "TANGENT"), tU.BUMP && KU.addFallback(cU++, "BUMP"), cU = (0, lU.z)(tU, KU, this._maxSimultaneousLights, cU), tU.SPECULARTERM && KU.addFallback(cU++, "SPECULARTERM"), tU.USESPHERICALFROMREFLECTIONMAP && KU.addFallback(cU++, "USESPHERICALFROMREFLECTIONMAP"), tU.USEIRRADIANCEMAP && KU.addFallback(cU++, "USEIRRADIANCEMAP"), tU.LIGHTMAP && KU.addFallback(cU++, "LIGHTMAP"), tU.NORMAL && KU.addFallback(cU++, "NORMAL"), tU.AMBIENT && KU.addFallback(cU++, "AMBIENT"), tU.EMISSIVE && KU.addFallback(cU++, "EMISSIVE"), tU.VERTEXCOLOR && KU.addFallback(cU++, "VERTEXCOLOR"), tU.MORPHTARGETS && KU.addFallback(cU++, "MORPHTARGETS"), tU.MULTIVIEW && KU.addFallback(0, "MULTIVIEW");
          const GU = [SU.l.PositionKind];
          tU.NORMAL && GU.push(SU.l.NormalKind), tU.TANGENT && GU.push(SU.l.TangentKind);
          for (let UU = 1; UU <= 6; ++UU) tU["UV" + UU] && GU.push(`uv${1===UU?"":UU}`);
          tU.VERTEXCOLOR && GU.push(SU.l.ColorKind), (0, lU.C)(GU, RU, tU, KU), (0, lU.F)(GU, tU), (0, lU.G)(GU, RU, tU), (0, lU.A)(GU, RU, tU);
          let jU = "pbr";
          const uU = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            CU = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, lU.gb)(uU, CU, !0);
          const hU = ["Material", "Scene", "Mesh"],
            QU = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: tU.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = KU, this._eventInfo.fallbackRank = cU, this._eventInfo.defines = tU, this._eventInfo.uniforms = uU, this._eventInfo.attributes = GU, this._eventInfo.samplers = CU, this._eventInfo.uniformBuffersNames = hU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RU, this._eventInfo.indexParameters = QU, this._callbackPluginEventGeneric(128, this._eventInfo), uR.e.AddUniformsAndSamplers(uU, CU), iU.b.AddUniforms(uU), iU.b.AddSamplers(CU), (0, cR.c)(uU), this._useVertexPulling) {
            const UU = gU?.geometry;
            UU && (this._vertexPullingMetadata = (0, GR.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, RU) => {
              uU.push(`vp_${RU}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          MU.e && (MU.e.PrepareUniforms(uU, tU), MU.e.PrepareSamplers(CU, tU)), (0, lU.ib)({
            uniformsNames: uU,
            uniformBuffersNames: hU,
            samplers: CU,
            defines: tU,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const eU = {};
          this.customShaderNameResolve && (jU = this.customShaderNameResolve(jU, uU, hU, CU, tU, GU, eU));
          const WU = tU.toString(),
            fU = qU.createEffect(jU, {
              attributes: GU,
              uniformsNames: uU,
              uniformBuffersNames: hU,
              samplers: CU,
              defines: WU,
              fallbacks: KU,
              onCompiled: pU,
              onError: EU,
              indexParameters: QU,
              processFinalCode: eU.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: tU.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, qU);
          return this._eventInfo.customCode = void 0, fU
        }
        _prepareDefines(RU, gU, tU) {
          let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const PU = gU.hasThinInstances,
            TU = this.aZ(),
            qU = TU.WC();
          (0, lU.Q)(TU, RU, tU, !0, this._maxSimultaneousLights, this._disableLighting), tU._needNormals = !0, (0, lU.Y)(TU, tU);
          const KU = this.needAlphaBlendingForMesh(RU) && this.aZ().useOrderIndependentTransparency;
          if ((0, lU.cb)(TU, tU, this.canRenderToMRT && !KU), (0, lU.$)(TU, tU, KU), uR.e.PrepareDefines(qU.currentRenderPassId, RU, tU), tU.METALLICWORKFLOW = this.isMetallicWorkflow(), tU._areTexturesDirty) {
            tU._needUVs = !1;
            for (let UU = 1; UU <= 6; ++UU) tU["MAINUV" + UU] = !1;
            if (TU.texturesEnabled) {
              tU.ALBEDODIRECTUV = 0, tU.BASE_WEIGHTDIRECTUV = 0, tU.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, tU.AMBIENTDIRECTUV = 0, tU.OPACITYDIRECTUV = 0, tU.EMISSIVEDIRECTUV = 0, tU.REFLECTIVITYDIRECTUV = 0, tU.MICROSURFACEMAPDIRECTUV = 0, tU.METALLIC_REFLECTANCEDIRECTUV = 0, tU.REFLECTANCEDIRECTUV = 0, tU.BUMPDIRECTUV = 0, tU.LIGHTMAPDIRECTUV = 0, qU.getCaps().textureLOD && (tU.LODBASEDMICROSFURACE = !0), this._albedoTexture && LU.b.DiffuseTextureEnabled ? ((0, lU.T)(this._albedoTexture, tU, "ALBEDO"), tU.GAMMAALBEDO = this._albedoTexture.gammaSpace) : tU.ALBEDO = !1, this._baseWeightTexture && LU.b.BaseWeightTextureEnabled ? (0, lU.T)(this._baseWeightTexture, tU, "BASE_WEIGHT") : tU.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && LU.b.BaseDiffuseRoughnessTextureEnabled ? (0, lU.T)(this._baseDiffuseRoughnessTexture, tU, "BASE_DIFFUSE_ROUGHNESS") : tU.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && LU.b.AmbientTextureEnabled ? ((0, lU.T)(this._ambientTexture, tU, "AMBIENT"), tU.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : tU.AMBIENT = !1, this._opacityTexture && LU.b.OpacityTextureEnabled ? ((0, lU.T)(this._opacityTexture, tU, "OPACITY"), tU.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : tU.OPACITY = !1;
              const UU = this._getReflectionTexture(),
                RU = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qU.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, lU.P)(TU, UU, tU, this.realTimeFiltering, this.realTimeFilteringQuality, !RU), this._lightmapTexture && LU.b.LightmapTextureEnabled ? ((0, lU.T)(this._lightmapTexture, tU, "LIGHTMAP"), tU.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, tU.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, tU.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : tU.LIGHTMAP = !1, this._emissiveTexture && LU.b.EmissiveTextureEnabled ? ((0, lU.T)(this._emissiveTexture, tU, "EMISSIVE"), tU.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : tU.EMISSIVE = !1, LU.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, lU.T)(this._metallicTexture, tU, "REFLECTIVITY"), tU.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, tU.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, tU.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, tU.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, tU.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, lU.T)(this._reflectivityTexture, tU, "REFLECTIVITY"), tU.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, tU.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, tU.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : tU.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (tU.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, lU.T)(this._metallicReflectanceTexture, tU, "METALLIC_REFLECTANCE"), tU.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : tU.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, lU.T)(this._reflectanceTexture, tU, "REFLECTANCE"), tU.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : tU.REFLECTANCE = !1) : (tU.METALLIC_REFLECTANCE = !1, tU.REFLECTANCE = !1), this._microSurfaceTexture ? (0, lU.T)(this._microSurfaceTexture, tU, "MICROSURFACEMAP") : tU.MICROSURFACEMAP = !1) : (tU.REFLECTIVITY = !1, tU.MICROSURFACEMAP = !1), qU.getCaps().standardDerivatives && this._bumpTexture && LU.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, lU.T)(this._bumpTexture, tU, "BUMP"), this._useParallax && this._albedoTexture && LU.b.DiffuseTextureEnabled ? (tU.PARALLAX = !0, tU.PARALLAX_RHS = TU.useRightHandedSystem, tU.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : tU.PARALLAX = !1, tU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (tU.BUMP = !1, tU.PARALLAX = !1, tU.PARALLAX_RHS = !1, tU.PARALLAXOCCLUSION = !1, tU.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && LU.b.ReflectionTextureEnabled ? (tU.ENVIRONMENTBRDF = !0, tU.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (tU.ENVIRONMENTBRDF = !1, tU.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? tU.ALPHAFROMALBEDO = !0 : tU.ALPHAFROMALBEDO = !1
            }
            tU.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === UU.LIGHTFALLOFF_STANDARD ? (tU.USEPHYSICALLIGHTFALLOFF = !1, tU.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === UU.LIGHTFALLOFF_GLTF ? (tU.USEPHYSICALLIGHTFALLOFF = !1, tU.USEGLTFLIGHTFALLOFF = !0) : (tU.USEPHYSICALLIGHTFALLOFF = !0, tU.USEGLTFLIGHTFALLOFF = !1), tU.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? tU.TWOSIDEDLIGHTING = !0 : tU.TWOSIDEDLIGHTING = !1, tU.MIRRORED = !!TU._mirroredCameraPosition, tU.SPECULARAA = qU.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(tU._areTexturesDirty || tU._areMiscDirty) && (tU.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, tU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, tU.ALPHABLEND = this.needAlphaBlendingForMesh(RU), tU.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, tU.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), tU._areTexturesDirty && (tU.TEXTURE_REPETITION_MODE = qU.version > 1 || qU.isWebGPU ? this.textureRepetitionMode : 0), tU._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(tU), tU.FORCENORMALFORWARD = this._forceNormalForward, tU.RADIANCEOCCLUSION = this._useRadianceOcclusion, tU.HORIZONOCCLUSION = this._useHorizonOcclusion, tU._areMiscDirty && ((0, lU.X)(RU, TU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RU), tU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gU, this._isVertexOutputInvariant), tU.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !RU.isVerticesDataPresent(SU.l.NormalKind), tU.DEBUGMODE = this._debugMode), (0, lU.O)(TU, qU, this, tU, !!pU, EU, PU), this._eventInfo.defines = tU, this._eventInfo.mesh = RU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, lU.K)(RU, tU, !0, !0, !0, this._transparencyMode !== UU.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(UU, RU, gU) {
          const tU = {
            clipPlane: !1,
            useInstances: !1,
            ...gU
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const gU = new xR(this._eventInfo.defineNames),
              pU = this._prepareEffect(UU, UU, gU, void 0, void 0, tU.useInstances, tU.clipPlane);
            this._onEffectCreatedObservable && (WR.effect = pU, WR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(WR)), pU.isReady() ? RU && RU(this) : pU.onCompileObservable.add((() => {
              RU && RU(this)
            }))
          })()
        }
        buildUniformLayout() {
          const UU = this._uniformBuffer;
          UU.addUniform("vAlbedoInfos", 2), UU.addUniform("vBaseWeightInfos", 2), UU.addUniform("vBaseDiffuseRoughnessInfos", 2), UU.addUniform("vAmbientInfos", 4), UU.addUniform("vOpacityInfos", 2), UU.addUniform("vEmissiveInfos", 2), UU.addUniform("vLightmapInfos", 2), UU.addUniform("vReflectivityInfos", 3), UU.addUniform("vMicroSurfaceSamplerInfos", 2), UU.addUniform("vBumpInfos", 3), UU.addUniform("albedoMatrix", 16), UU.addUniform("baseWeightMatrix", 16), UU.addUniform("baseDiffuseRoughnessMatrix", 16), UU.addUniform("ambientMatrix", 16), UU.addUniform("opacityMatrix", 16), UU.addUniform("emissiveMatrix", 16), UU.addUniform("lightmapMatrix", 16), UU.addUniform("reflectivityMatrix", 16), UU.addUniform("microSurfaceSamplerMatrix", 16), UU.addUniform("bumpMatrix", 16), UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("vAlbedoColor", 4), UU.addUniform("baseWeight", 1), UU.addUniform("baseDiffuseRoughness", 1), UU.addUniform("vLightingIntensity", 4), UU.addUniform("pointSize", 1), UU.addUniform("vReflectivityColor", 4), UU.addUniform("vEmissiveColor", 3), UU.addUniform("vAmbientColor", 3), UU.addUniform("vDebugMode", 2), UU.addUniform("vMetallicReflectanceFactors", 4), UU.addUniform("vMetallicReflectanceInfos", 2), UU.addUniform("metallicReflectanceMatrix", 16), UU.addUniform("vReflectanceInfos", 2), UU.addUniform("reflectanceMatrix", 16), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), (0, lU.eb)(UU, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(UU, RU, gU) {
          const tU = this.aZ(),
            pU = gU.materialDefines;
          if (!pU) return;
          const EU = gU.effect;
          if (!EU) return;
          this._activeEffect = EU, RU.getMeshUniformBuffer().bindToEffect(EU, "Mesh"), RU.transferToEffect(UU);
          const PU = tU.WC();
          this._uniformBuffer.bindToEffect(EU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tU, RU, UU, this.isFrozen), uR.e.Bind(PU.currentRenderPassId, this._activeEffect, RU, UU, this);
          const TU = tU.activeCamera;
          TU ? this._uniformBuffer.updateFloat4("cameraInfo", TU.minZ, TU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const qU = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qU[0], qU[1], qU[2], qU[3]), this._eventInfo.subMesh = gU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pU.OBJECTSPACE_NORMALMAP && (UU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const KU = this._mustRebind(tU, EU, gU, RU.visibility),
            cU = PU._features.needToAlwaysBindUniformBuffers;
          (0, lU.c)(RU, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, GR.c)(this._activeEffect, this._vertexPullingMetadata);
          let GU = null;
          const jU = this._uniformBuffer;
          if (KU) {
            if (this.bindViewProjection(EU), GU = this._getReflectionTexture(), !jU.useUbo || !this.isFrozen || !jU.isSync || gU._drawWrapper._forceRebindOnNextCall) {
              if (tU.texturesEnabled && (this._albedoTexture && LU.b.DiffuseTextureEnabled && (jU.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, lU.x)(this._albedoTexture, jU, "albedo")), this._baseWeightTexture && LU.b.BaseWeightTextureEnabled && (jU.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, lU.x)(this._baseWeightTexture, jU, "baseWeight")), this._baseDiffuseRoughnessTexture && LU.b.BaseDiffuseRoughnessTextureEnabled && (jU.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, lU.x)(this._baseDiffuseRoughnessTexture, jU, "baseDiffuseRoughness")), this._ambientTexture && LU.b.AmbientTextureEnabled && (jU.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, lU.x)(this._ambientTexture, jU, "ambient")), this._opacityTexture && LU.b.OpacityTextureEnabled && (jU.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, lU.x)(this._opacityTexture, jU, "opacity")), this._emissiveTexture && LU.b.EmissiveTextureEnabled && (jU.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, lU.x)(this._emissiveTexture, jU, "emissive")), this._lightmapTexture && LU.b.LightmapTextureEnabled && (jU.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, lU.x)(this._lightmapTexture, jU, "lightmap")), LU.b.SpecularTextureEnabled && (this._metallicTexture ? (jU.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, lU.x)(this._metallicTexture, jU, "reflectivity")) : this._reflectivityTexture && (jU.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, lU.x)(this._reflectivityTexture, jU, "reflectivity")), this._metallicReflectanceTexture && (jU.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, lU.x)(this._metallicReflectanceTexture, jU, "metallicReflectance")), this._reflectanceTexture && pU.REFLECTANCE && (jU.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, lU.x)(this._reflectanceTexture, jU, "reflectance")), this._microSurfaceTexture && (jU.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, lU.x)(this._microSurfaceTexture, jU, "microSurfaceSampler"))), this._bumpTexture && PU.getCaps().standardDerivatives && LU.b.BumpTextureEnabled && !this._disableBumpMap && (jU.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, lU.x)(this._bumpTexture, jU, "bump"), tU._mirroredCameraPosition ? jU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : jU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, lU.h)(tU, pU, jU, this._reflectionColor, GU, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && jU.updateFloat("pointSize", this.pointSize), pU.METALLICWORKFLOW) {
                AU.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, AU.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const UU = this.subSurface?._indexOfRefraction ?? 1.5,
                  RU = 1;
                AU.m.Color4[0].b = UU;
                const gU = Math.pow((UU - RU) / (UU + RU), 2);
                AU.m.Color4[0].a = gU, jU.updateDirectColor4("vReflectivityColor", AU.m.Color4[0]), jU.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else jU.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              jU.updateColor3("vEmissiveColor", LU.b.EmissiveTextureEnabled ? this._emissiveColor : AU.e.BlackReadOnly), !pU.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? jU.updateColor4("vAlbedoColor", this._albedoColor, 1) : jU.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), jU.updateFloat("baseWeight", this._baseWeight), jU.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * tU.environmentIntensity, this._lightingInfos.w = this._specularIntensity, jU.updateVector4("vLightingIntensity", this._lightingInfos), tU.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), jU.updateColor3("vAmbientColor", this._globalAmbientColor), jU.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            tU.texturesEnabled && (this._albedoTexture && LU.b.DiffuseTextureEnabled && jU.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && LU.b.BaseWeightTextureEnabled && jU.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && LU.b.BaseDiffuseRoughnessTextureEnabled && jU.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && LU.b.AmbientTextureEnabled && jU.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && LU.b.OpacityTextureEnabled && jU.setTexture("opacitySampler", this._opacityTexture), (0, lU.j)(tU, pU, jU, GU, this.realTimeFiltering), pU.ENVIRONMENTBRDF && jU.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && LU.b.EmissiveTextureEnabled && jU.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && LU.b.LightmapTextureEnabled && jU.setTexture("lightmapSampler", this._lightmapTexture), LU.b.SpecularTextureEnabled && (this._metallicTexture ? jU.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && jU.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && jU.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && pU.REFLECTANCE && jU.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && jU.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && PU.getCaps().standardDerivatives && LU.b.BumpTextureEnabled && !this._disableBumpMap && jU.setTexture("bumpSampler", this._bumpTexture)), this.aZ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(RU) && this.aZ().depthPeelingRenderer.bind(EU), this._eventInfo.subMesh = gU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, cR.f)(this._activeEffect, this, tU), this.bindEyePosition(EU)
          } else cU && (this._needToBindSceneUbo = !0);
          !KU && this.isFrozen && !cU || !tU.lightsEnabled || this._disableLighting || (0, lU.n)(tU, RU, this._activeEffect, pU, this._maxSimultaneousLights), !KU && this.isFrozen || ((tU.fogEnabled && RU.applyFog && tU.fogMode !== dU.f.FOGMODE_NONE || GU || this.subSurface.refractionTexture || RU.receiveShadows || pU.PREPASS || pU.CLUSTLIGHT_BATCH) && this.bindView(EU), (0, lU.g)(tU, RU, this._activeEffect, !0), pU.NUM_MORPH_INFLUENCERS && (0, lU.s)(RU, this._activeEffect), pU.BAKED_VERTEX_ANIMATION_TEXTURE && RU.bakedVertexAnimationManager?.bind(EU, pU.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, lU.q)(pU, this._activeEffect, tU)), this._afterBind(RU, this._activeEffect, gU), jU.update()
        }
        getAnimatables() {
          const UU = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && UU.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && UU.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && UU.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && UU.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && UU.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && UU.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && UU.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? UU.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && UU.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && UU.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && UU.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && UU.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && UU.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && UU.push(this._microSurfaceTexture), UU
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.aZ().environmentTexture
        }
        getActiveTextures() {
          const UU = super.getActiveTextures();
          return this._albedoTexture && UU.push(this._albedoTexture), this._baseWeightTexture && UU.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && UU.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && UU.push(this._ambientTexture), this._opacityTexture && UU.push(this._opacityTexture), this._reflectionTexture && UU.push(this._reflectionTexture), this._emissiveTexture && UU.push(this._emissiveTexture), this._reflectivityTexture && UU.push(this._reflectivityTexture), this._metallicTexture && UU.push(this._metallicTexture), this._metallicReflectanceTexture && UU.push(this._metallicReflectanceTexture), this._reflectanceTexture && UU.push(this._reflectanceTexture), this._microSurfaceTexture && UU.push(this._microSurfaceTexture), this._bumpTexture && UU.push(this._bumpTexture), this._lightmapTexture && UU.push(this._lightmapTexture), UU
        }
        hasTexture(UU) {
          return !!super.hasTexture(UU) || (this._albedoTexture === UU || (this._baseWeightTexture === UU || (this._baseDiffuseRoughnessTexture === UU || (this._ambientTexture === UU || (this._opacityTexture === UU || (this._reflectionTexture === UU || (this._emissiveTexture === UU || (this._reflectivityTexture === UU || (this._metallicTexture === UU || (this._metallicReflectanceTexture === UU || (this._reflectanceTexture === UU || (this._microSurfaceTexture === UU || (this._bumpTexture === UU || this._lightmapTexture === UU)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const UU = this.aZ().enableSubSurfaceForPrePass();
          return UU && (UU.enabled = !0), !0
        }
        dispose(UU, RU) {
          this._breakShaderLoadedCheck = !0, RU && (this._environmentBRDFTexture && this.aZ().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, RU)
        }
      }, RU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(pU[Symbol.metadata] ?? null) : void 0;
        tU = [(0, bU.e)("_markAllSubMeshesAsMiscDirty")], (0, nU.i)(UU, null, tU, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "debugMode" in UU,
            get: UU => UU.debugMode,
            set: (UU, RU) => {
              UU.debugMode = RU
            }
          },
          metadata: RU
        }, PU, TU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU.PBRMATERIAL_OPAQUE = EU.c.MATERIAL_OPAQUE, UU.PBRMATERIAL_ALPHATEST = EU.c.MATERIAL_ALPHATEST, UU.PBRMATERIAL_ALPHABLEND = EU.c.MATERIAL_ALPHABLEND, UU.PBRMATERIAL_ALPHATESTANDBLEND = EU.c.MATERIAL_ALPHATESTANDBLEND, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, UU.LIGHTFALLOFF_PHYSICAL = 0, UU.LIGHTFALLOFF_GLTF = 1, UU.LIGHTFALLOFF_STANDARD = 2, UU.ForceGLSL = !1, UU._ShaderLoader = new jR.c((() => [Promise.all([gU.e(307), gU.e(318)]).then((() => gU(60895))), Promise.all([gU.e(312), gU.e(308), gU.e(372), gU.e(321), gU.e(371)]).then((() => gU(60916)))]), (() => [Promise.all([gU.e(326), gU.e(328), gU.e(335)]).then((() => gU(60978))), Promise.all([gU.e(326), gU.e(329), gU.e(375), gU.e(339), gU.e(374)]).then((() => gU(61009)))])), UU
    })();
    Object.getOwnPropertyDescriptor(IR.prototype, "decalMap") || Object.defineProperty(IR.prototype, "decalMap", (0, eR.i)("PBRBaseMaterial", "decalMap")), (0, gU(41184).d)();
    var JR = gU(39395);
    var wR = gU(39473),
      nR = gU(41170),
      bR = gU(39203),
      oR = gU(39215),
      ZR = gU(39324);
    let aR = !1;
    const YR = new AU.g,
      BR = new AU.g;
    class VR extends nR.e {
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
      set wrapU(UU) {
        if (this._textures)
          for (let RU = 0; RU < this._textures.length; RU++) this._textures[RU].wrapU = UU
      }
      set wrapV(UU) {
        if (this._textures)
          for (let RU = 0; RU < this._textures.length; RU++) this._textures[RU].wrapV = UU
      }
      constructor(UU, RU, gU, tU, pU, EU) {
        const PU = !(!pU || !pU.generateMipMaps) && pU.generateMipMaps,
          TU = !(!pU || !pU.generateDepthTexture) && pU.generateDepthTexture,
          qU = pU && pU.depthTextureFormat ? pU.depthTextureFormat : 15,
          KU = !pU || void 0 === pU.doNotChangeAspectRatio || pU.doNotChangeAspectRatio,
          cU = !(!pU || !pU.drawOnlyOnFirstAttachmentByDefault) && pU.drawOnlyOnFirstAttachmentByDefault;
        if (super(UU, RU, tU, PU, KU, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), aR || (aR = !0, oR.ThinEngine.prototype.restoreSingleAttachment = function() {
            const UU = this._gl;
            this.bindAttachments([UU.BACK])
          }, oR.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const UU = this._gl;
            this.bindAttachments([UU.COLOR_ATTACHMENT0])
          }, oR.ThinEngine.prototype.buildTextureLayout = function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const gU = this._gl,
              tU = [];
            if (RU) tU.push(gU.BACK);
            else
              for (let pU = 0; pU < UU.length; pU++) UU[pU] ? tU.push(gU["COLOR_ATTACHMENT" + pU]) : tU.push(gU.NONE);
            return tU
          }, oR.ThinEngine.prototype.bindAttachments = function(UU) {
            const RU = this._gl,
              gU = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, gU)
              for (let tU = 0; tU < UU.length; tU++) UU[tU] !== RU.NONE && gU[tU] && (0, ZR.f)(gU[tU].format) && (this._integerMRTAttachmentsMask |= 1 << tU);
            RU.drawBuffers(UU)
          }, oR.ThinEngine.prototype.clearAttachments = function(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const PU = this._currentRenderTarget?.textures;
            let TU = !1;
            if (gU && UU && PU)
              for (let qU = 0; qU < RU.length; qU++) {
                const UU = PU[qU];
                if (RU[qU] !== this._gl.NONE && UU && (0, ZR.f)(UU.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  TU = !0;
                  break
                }
              }
            if (!TU || !UU || !PU) return this.bindAttachments(RU), void this.clear(UU, gU, tU, pU, EU);
            this.bindAttachments(RU), this._applyColorWriteState();
            for (let qU = 0; qU < RU.length; qU++) {
              const gU = PU[qU];
              if (RU[qU] !== this._gl.NONE && gU) {
                let RU = UU;
                if ((0, ZR.f)(gU.format)) {
                  const tU = (0, ZR.j)(gU.type);
                  RU = tU ? YR : BR;
                  const pU = tU ? 255 : 1;
                  RU.r = Math.round(UU.r * pU), RU.g = Math.round(UU.g * pU), RU.b = Math.round(UU.b * pU), RU.a = Math.round(UU.a * pU)
                }
                this._clearColorAttachment(qU, RU, gU.format, gU.type)
              }
            }
            if (tU || pU) {
              const UU = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, tU, pU, EU)
              } finally {
                this._integerMRTAttachmentsMask = UU
              }
            }
          }, oR.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, UU.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(UU), RU || this.generateMipMapsMultiFramebuffer(UU), gU && (UU._MSAAFramebuffer && this._bindUnboundFramebuffer(UU._framebuffer), gU()), this._bindUnboundFramebuffer(null)
          }, oR.ThinEngine.prototype.createMultipleRenderTarget = function(UU, RU) {
            let gU, tU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              pU = !1,
              EU = !0,
              PU = !1,
              TU = !1,
              qU = 1,
              KU = 1,
              cU = [],
              GU = [],
              jU = [],
              uU = [],
              CU = [],
              hU = [],
              QU = [],
              eU = [],
              WU = [],
              fU = !1;
            const xU = this._createHardwareRenderTargetWrapper(!0, !1, UU);
            void 0 !== RU && (pU = void 0 !== RU.generateMipMaps && RU.generateMipMaps, EU = void 0 === RU.generateDepthBuffer || RU.generateDepthBuffer, PU = void 0 !== RU.generateStencilBuffer && RU.generateStencilBuffer, TU = void 0 !== RU.generateDepthTexture && RU.generateDepthTexture, qU = RU.qPU ?? 1, KU = RU.samples ?? KU, cU = RU.types || cU, GU = RU.samplingModes || GU, jU = RU.useSRGBBuffers || jU, uU = RU.formats || uU, CU = RU.targetTypes || CU, hU = RU.faceIndex || hU, QU = RU.layerIndex || QU, eU = RU.layerCounts || eU, WU = RU.labels || WU, fU = RU.dontCreateTextures ?? !1, this.MC > 1 && (13 === RU.depthTextureFormat || 17 === RU.depthTextureFormat || 16 === RU.depthTextureFormat || 14 === RU.depthTextureFormat || 18 === RU.depthTextureFormat) && (gU = RU.depthTextureFormat)), void 0 === gU && (gU = PU ? 13 : 14);
            const mU = this._gl,
              IU = this._currentFramebuffer,
              JU = mU.createFramebuffer();
            this._bindUnboundFramebuffer(JU);
            const wU = UU.width ?? UU,
              nU = UU.height ?? UU,
              bU = [],
              ZU = [],
              aU = this.MC > 1 && (13 === gU || 17 === gU || 18 === gU);
            xU.label = RU?.label ?? "MultiRenderTargetWrapper", xU._framebuffer = JU, xU._generateDepthBuffer = TU || EU, xU._generateStencilBuffer = TU ? aU : PU, xU._depthStencilBuffer = this._setupFramebufferDepthAttachments(xU._generateStencilBuffer, xU._generateDepthBuffer, wU, nU, 1, gU), xU._attachments = ZU;
            for (let YU = 0; YU < qU; YU++) {
              let UU = GU[YU] || 3,
                RU = cU[YU] || 0,
                gU = jU[YU] || !1;
              const tU = uU[YU] || 5,
                EU = CU[YU] || 3553,
                PU = eU[YU] ?? 1;
              (1 !== RU || this._caps.textureFloatLinearFiltering) && (2 !== RU || this._caps.textureHalfFloatLinearFiltering) || (UU = 1);
              const TU = this._getSamplingParameters(UU, pU);
              1 !== RU || this._caps.textureFloat || (RU = 0, oU.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), gU = gU && this._caps.supportSRGBBuffers && (this.MC > 1 || this.isWebGPU);
              const qU = this.MC > 1,
                KU = mU[qU ? "COLOR_ATTACHMENT" + YU : "COLOR_ATTACHMENT" + YU + "_WEBGL"];
              if (ZU.push(KU), -1 === EU || fU) continue;
              const hU = new bR.d(this, 6);
              bU[YU] = hU, mU.activeTexture(mU["TEXTURE" + YU]), mU.bindTexture(EU, hU._hardwareTexture.underlyingResource), mU.texParameteri(EU, mU.TEXTURE_MAG_FILTER, TU.mag), mU.texParameteri(EU, mU.TEXTURE_MIN_FILTER, TU.min), mU.texParameteri(EU, mU.TEXTURE_WRAP_S, mU.CLAMP_TO_EDGE), mU.texParameteri(EU, mU.TEXTURE_WRAP_T, mU.CLAMP_TO_EDGE);
              const QU = this._getRGBABufferInternalSizedFormat(RU, tU, gU),
                IU = this._getInternalFormat(tU),
                JU = this._getWebGLTextureType(RU);
              if (!qU || 35866 !== EU && 32879 !== EU)
                if (34067 === EU) {
                  for (let UU = 0; UU < 6; UU++) mU.texImage2D(mU.TEXTURE_CUBE_MAP_POSITIVE_X + UU, 0, QU, wU, nU, 0, IU, JU, null);
                  hU.isCube = !0
                } else mU.texImage2D(mU.TEXTURE_2D, 0, QU, wU, nU, 0, IU, JU, null);
              else 35866 === EU ? hU.is2DArray = !0 : hU.is3D = !0, hU.baseDepth = hU.depth = PU, mU.texImage3D(EU, 0, QU, wU, nU, PU, 0, IU, JU, null);
              pU && mU.generateMipmap(EU), this._bindTextureDirectly(EU, null), hU.baseWidth = wU, hU.baseHeight = nU, hU.width = wU, hU.height = nU, hU.isReady = !0, hU.samples = 1, hU.generateMipMaps = pU, hU.samplingMode = UU, hU.type = RU, hU._useSRGBBuffer = gU, hU.format = tU, hU.label = WU[YU] ?? xU.label + "-Texture" + YU, this._internalTexturesCache.push(hU)
            }
            if (TU && this._caps.depthTextureExtension && !fU) {
              const UU = new bR.d(this, 14);
              let RU = 5,
                tU = mU.DEPTH_COMPONENT16,
                EU = mU.DEPTH_COMPONENT,
                PU = mU.UNSIGNED_SHORT,
                TU = mU.DEPTH_ATTACHMENT;
              this.MC < 2 ? tU = mU.DEPTH_COMPONENT : 14 === gU ? (RU = 1, PU = mU.FLOAT, tU = mU.DEPTH_COMPONENT32F) : 18 === gU ? (RU = 0, PU = mU.FLOAT_32_UNSIGNED_INT_24_8_REV, tU = mU.DEPTH32F_STENCIL8, EU = mU.DEPTH_STENCIL, TU = mU.DEPTH_STENCIL_ATTACHMENT) : 16 === gU ? (RU = 0, PU = mU.UNSIGNED_INT, tU = mU.DEPTH_COMPONENT24, TU = mU.DEPTH_ATTACHMENT) : 13 !== gU && 17 !== gU || (RU = 12, PU = mU.UNSIGNED_INT_24_8, tU = mU.DEPTH24_STENCIL8, EU = mU.DEPTH_STENCIL, TU = mU.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(mU.TEXTURE_2D, UU, !0), mU.texParameteri(mU.TEXTURE_2D, mU.TEXTURE_MAG_FILTER, mU.NEAREST), mU.texParameteri(mU.TEXTURE_2D, mU.TEXTURE_MIN_FILTER, mU.NEAREST), mU.texParameteri(mU.TEXTURE_2D, mU.TEXTURE_WRAP_S, mU.CLAMP_TO_EDGE), mU.texParameteri(mU.TEXTURE_2D, mU.TEXTURE_WRAP_T, mU.CLAMP_TO_EDGE), mU.texImage2D(mU.TEXTURE_2D, 0, tU, wU, nU, 0, EU, PU, null), mU.framebufferTexture2D(mU.FRAMEBUFFER, TU, mU.TEXTURE_2D, UU._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(mU.TEXTURE_2D, null), xU._depthStencilTexture = UU, xU._depthStencilTextureWithStencil = aU, UU.baseWidth = wU, UU.baseHeight = nU, UU.width = wU, UU.height = nU, UU.isReady = !0, UU.samples = 1, UU.generateMipMaps = pU, UU.samplingMode = 1, UU.format = gU, UU.type = RU, UU.label = xU.label + "-DepthStencil", bU[qU] = UU, this._internalTexturesCache.push(UU)
            }
            if (xU.setTextures(bU), tU && mU.drawBuffers(ZU), this._bindUnboundFramebuffer(IU), xU.setLayerAndFaceIndices(QU, hU), this.resetTextureCache(), fU) {
              if (KU > 1) {
                const UU = mU.createFramebuffer();
                if (!UU) throw new Error("Unable to create multi sampled framebuffer");
                xU._samples = KU, xU._MSAAFramebuffer = UU, qU > 0 && tU && (this._bindUnboundFramebuffer(UU), mU.drawBuffers(ZU), this._bindUnboundFramebuffer(IU))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(xU, KU, tU);
            return xU
          }, oR.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(UU, RU) {
            let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.MC < 2 || !UU) return 1;
            if (UU.samples === RU) return RU;
            const tU = this._gl;
            RU = Math.min(RU, this.getCaps().maxMSAASamples), UU._depthStencilBuffer && (tU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = null), UU._MSAAFramebuffer && (tU.deleteFramebuffer(UU._MSAAFramebuffer), UU._MSAAFramebuffer = null);
            const pU = UU._attachments.length;
            for (let PU = 0; PU < pU; PU++) {
              const RU = UU.textures[PU]._hardwareTexture;
              RU?.releaseMSAARenderBuffers()
            }
            if (RU > 1 && "function" === typeof tU.renderbufferStorageMultisample) {
              const EU = tU.createFramebuffer();
              if (!EU) throw new Error("Unable to create multi sampled framebuffer");
              UU._MSAAFramebuffer = EU, this._bindUnboundFramebuffer(EU);
              const PU = [];
              for (let gU = 0; gU < pU; gU++) {
                const pU = UU.textures[gU],
                  EU = pU._hardwareTexture,
                  TU = tU[this.MC > 1 ? "COLOR_ATTACHMENT" + gU : "COLOR_ATTACHMENT" + gU + "_WEBGL"],
                  qU = this._createRenderBuffer(pU.width, pU.height, RU, -1, this._getRGBABufferInternalSizedFormat(pU.type, pU.format, pU._useSRGBBuffer), TU);
                if (!qU) throw new Error("Unable to create multi sampled framebuffer");
                EU.addMSAARenderBuffer(qU), pU.samples = RU, PU.push(TU)
              }
              gU && tU.drawBuffers(PU)
            } else this._bindUnboundFramebuffer(UU._framebuffer);
            const EU = UU._depthStencilTexture ? UU._depthStencilTexture.format : void 0;
            return UU._depthStencilBuffer = this._setupFramebufferDepthAttachments(UU._generateStencilBuffer, UU._generateDepthBuffer, UU.width, UU.height, RU, EU), this._bindUnboundFramebuffer(null), UU._samples = RU, RU
          }, oR.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(UU) {
            const RU = UU,
              gU = this._gl;
            if (RU.isMulti)
              for (let tU = 0; tU < RU._attachments.length; tU++) {
                const UU = RU.textures[tU];
                !UU?.generateMipMaps || UU?.isCube || UU?.is3D || (this._bindTextureDirectly(gU.TEXTURE_2D, UU, !0), gU.generateMipmap(gU.TEXTURE_2D), this._bindTextureDirectly(gU.TEXTURE_2D, null))
              }
          }, oR.ThinEngine.prototype.resolveMultiFramebuffer = function(UU) {
            const RU = UU,
              gU = this._gl;
            if (!RU._MSAAFramebuffer || !RU.isMulti) return;
            let tU = RU.resolveMSAAColors ? gU.COLOR_BUFFER_BIT : 0;
            tU |= RU._generateDepthBuffer && RU.resolveMSAADepth ? gU.DEPTH_BUFFER_BIT : 0, tU |= RU._generateStencilBuffer && RU.resolveMSAAStencil ? gU.STENCIL_BUFFER_BIT : 0;
            const pU = RU._attachments,
              EU = pU.length;
            gU.bindFramebuffer(gU.READ_FRAMEBUFFER, RU._MSAAFramebuffer), gU.bindFramebuffer(gU.DRAW_FRAMEBUFFER, RU._framebuffer);
            for (let PU = 0; PU < EU; PU++) {
              const UU = RU.textures[PU];
              for (let RU = 0; RU < EU; RU++) pU[RU] = gU.NONE;
              pU[PU] = gU[this.MC > 1 ? "COLOR_ATTACHMENT" + PU : "COLOR_ATTACHMENT" + PU + "_WEBGL"], gU.readBuffer(pU[PU]), gU.drawBuffers(pU), gU.blitFramebuffer(0, 0, UU.width, UU.height, 0, 0, UU.width, UU.height, tU, gU.NEAREST)
            }
            for (let PU = 0; PU < EU; PU++) pU[PU] = gU[this.MC > 1 ? "COLOR_ATTACHMENT" + PU : "COLOR_ATTACHMENT" + PU + "_WEBGL"];
            gU.drawBuffers(pU), gU.bindFramebuffer(this._gl.FRAMEBUFFER, RU._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = EU;
        const GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [],
          eU = [],
          WU = [];
        this._initTypes(gU, GU, jU, uU, CU, hU, QU, eU, WU, pU);
        const fU = !pU || void 0 === pU.generateDepthBuffer || pU.generateDepthBuffer,
          xU = !(!pU || void 0 === pU.generateStencilBuffer) && pU.generateStencilBuffer,
          mU = pU && pU.samples ? pU.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: jU,
          generateMipMaps: PU,
          generateDepthBuffer: fU,
          generateStencilBuffer: xU,
          generateDepthTexture: TU,
          depthTextureFormat: qU,
          types: GU,
          qPU: gU,
          useSRGBBuffers: uU,
          samples: mU,
          formats: CU,
          targetTypes: hU,
          faceIndex: QU,
          layerIndex: eU,
          layerCounts: WU,
          labels: EU,
          label: UU
        }, this._count = gU, this._drawOnlyOnFirstAttachmentByDefault = cU, gU > 0 && (this._createInternalTextures(), this._createTextures(EU))
      }
      _initTypes(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        for (let cU = 0; cU < UU; cU++) KU && KU.types && void 0 !== KU.types[cU] ? RU.push(KU.types[cU]) : RU.push(KU && KU.defaultType ? KU.defaultType : 0), KU && KU.samplingModes && void 0 !== KU.samplingModes[cU] ? gU.push(KU.samplingModes[cU]) : gU.push(aU.e.BILINEAR_SAMPLINGMODE), KU && KU.useSRGBBuffers && void 0 !== KU.useSRGBBuffers[cU] ? tU.push(KU.useSRGBBuffers[cU]) : tU.push(!1), KU && KU.formats && void 0 !== KU.formats[cU] ? pU.push(KU.formats[cU]) : pU.push(5), KU && KU.targetTypes && void 0 !== KU.targetTypes[cU] ? EU.push(KU.targetTypes[cU]) : EU.push(3553), KU && KU.faceIndex && void 0 !== KU.faceIndex[cU] ? PU.push(KU.faceIndex[cU]) : PU.push(0), KU && KU.layerIndex && void 0 !== KU.layerIndex[cU] ? TU.push(KU.layerIndex[cU]) : TU.push(0), KU && KU.layerCounts && void 0 !== KU.layerCounts[cU] ? qU.push(KU.layerCounts[cU]) : qU.push(1)
      }
      _createInternaTextureIndexMapping() {
        const UU = {},
          RU = [];
        if (!this._renderTarget) return RU;
        const gU = this._renderTarget.textures;
        for (let tU = 0; tU < gU.length; tU++) {
          const pU = gU[tU];
          if (!pU) continue;
          const EU = UU[pU.uniqueId];
          void 0 !== EU ? RU[tU] = EU : UU[pU.uniqueId] = tU
        }
        return RU
      }
      _rebuild() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || UU) return;
        const tU = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), RU && (this._releaseTextures(), this._createTextures(gU));
        const pU = this._renderTarget.textures;
        for (let EU = 0; EU < pU.length; EU++) {
          const UU = this._textures[EU];
          void 0 !== tU[EU] && this._renderTarget.setTexture(pU[tU[EU]], EU), UU._texture = pU[EU], UU._texture && (UU._noMipmap = !UU._texture.useMipMaps, UU._useSRGBBuffer = UU._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let UU = 0; UU < this._textures.length; UU++) this._textures[UU]._texture = null, this._textures[UU].dispose()
      }
      _createTextures(UU) {
        const RU = this._renderTarget.textures;
        this._textures = [];
        for (let gU = 0; gU < RU.length; gU++) {
          const tU = new aU.e(null, this.aZ());
          UU?.[gU] && (tU.name = UU[gU]), tU._texture = RU[gU], tU._texture && (tU._noMipmap = !tU._texture.useMipMaps, tU._useSRGBBuffer = tU._texture._useSRGBBuffer), this._textures.push(tU)
        }
      }
      setInternalTexture(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === RU && (this._texture = UU), this.renderTarget.setTexture(UU, RU, gU), this.textures[RU] || (this.textures[RU] = new aU.e(null, this.aZ()), this.textures[RU].name = this._textureNames?.[RU] ?? this.textures[RU].name), this.textures[RU]._texture = UU, this.textures[RU]._noMipmap = !UU.useMipMaps, this.textures[RU]._useSRGBBuffer = UU._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[RU] = UU.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[RU] = UU.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[RU] = UU._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[RU])) {
          let gU;
          gU = UU.is2DArray ? 35866 : UU.isCube ? 34067 : UU.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[RU] = gU
        }
      }
      setLayerAndFaceIndex(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[UU] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[UU] = RU), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[UU] = gU), this.renderTarget.setLayerAndFaceIndex(UU, RU, gU))
      }
      setLayerAndFaceIndices(UU, RU) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = UU, this._multiRenderTargetOptions.faceIndex = RU, this.renderTarget.setLayerAndFaceIndices(UU, RU))
      }
      get samples() {
        return this._samples
      }
      set samples(UU) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(UU) : this._samples = UU
      }
      resize(UU) {
        this._processSizeParameter(UU), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(UU, RU, gU) {
        this._multiRenderTargetOptions.qPU = UU, this._count = UU;
        const tU = [],
          pU = [],
          EU = [],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [];
        this._textureNames = gU, this._initTypes(UU, tU, pU, EU, PU, TU, qU, KU, cU, RU), this._multiRenderTargetOptions.types = tU, this._multiRenderTargetOptions.samplingModes = pU, this._multiRenderTargetOptions.useSRGBBuffers = EU, this._multiRenderTargetOptions.formats = PU, this._multiRenderTargetOptions.targetTypes = TU, this._multiRenderTargetOptions.faceIndex = qU, this._multiRenderTargetOptions.layerIndex = KU, this._multiRenderTargetOptions.layerCounts = cU, this._multiRenderTargetOptions.labels = gU, this._rebuild(!1, !0, gU)
      }
      _unbindFrameBuffer(UU, RU) {
        this._renderTarget && UU.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(RU)
        }))
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), UU ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const UU = this._renderTarget?.textures;
        if (UU) {
          for (let RU = UU.length - 1; RU >= 0; RU--) this._textures[RU]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var rR = gU(39547);
    class XR {
      constructor(UU) {
        this.name = rR.d.NAME_GEOMETRYBUFFERRENDERER, this.Zh = UU
      }
      register() {
        this.Zh._gatherRenderTargetsStage.registerStep(rR.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(UU) {
        this.Zh._geometryBufferRenderer && UU.push(this.Zh._geometryBufferRenderer.getGBuffer())
      }
    }
    let vR = !1;
    var dR;
    ! function(UU) {
      UU[UU.Small = 0] = "Small", UU[UU.Medium = 1] = "Medium", UU[UU.Large = 2] = "Large", UU[UU.ExtraLarge = 3] = "ExtraLarge"
    }(dR || (dR = {}));
    const HR = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      SR = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class sR {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(UU) {
        if (UU && this._enableMeshBlendTag && !this._scene.WC().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = UU
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(UU) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = UU, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(UU, RU) {
        UU === sR.POSITION_TEXTURE_TYPE ? (this._positionIndex = RU, this._enablePosition = !0) : UU === sR.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = RU, this._enableVelocity = !0) : UU === sR.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = RU, this._enableVelocityLinear = !0) : UU === sR.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = RU, this._enableReflectivity = !0) : UU === sR.DEPTH_TEXTURE_TYPE ? (this._depthIndex = RU, this._enableDepth = !0) : UU === sR.NORMAL_TEXTURE_TYPE ? (this._normalIndex = RU, this._enableNormal = !0) : UU === sR.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = RU, this._enableScreenspaceDepth = !0) : UU === sR.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = RU, this._enableIrradiance = !0) : UU === sR.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = RU, this._enableObjectId = !0) : UU === sR.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = RU, this._enableMeshBlendTag = !0)
      }
      _setAttachments(UU) {
        this._attachmentsFromPrePass = UU
      }
      _linkInternalTexture(UU) {
        this._multiRenderTarget.setInternalTexture(UU, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(UU) {
        this._multiRenderTarget.renderList = UU
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(UU) {
        switch (UU) {
          case sR.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case sR.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case sR.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case sR.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case sR.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case sR.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case sR.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case sR.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case sR.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case sR.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(UU) {
        this._enableDepth = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(UU) {
        this._enableNormal = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(UU) {
        this._enablePosition = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(UU) {
        this._enableVelocity = UU, UU || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = UU
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(UU) {
        this._enableVelocityLinear = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(UU) {
        this._enableReflectivity = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(UU) {
        this._enableScreenspaceDepth = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(UU) {
        this._enableIrradiance = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(UU) {
        if (UU && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (UU && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (UU && !this._enableObjectId && !this._linkedWithPrePass) {
          const UU = this._scene.WC(),
            RU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8),
            gU = this._assignRenderTargetIndices()[0] + 1;
          if (UU.getCaps().drawBuffersExtension && gU > RU) throw new Error(`GeometryBufferRenderer: ${gU} color attachments were requested, but this engine supports at most ${RU}`)
        }
        this._enableObjectId = UU, UU || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(UU) {
        if (this._enableMeshBlendTag !== UU) {
          if (UU) {
            const UU = this._scene.WC();
            if (! function(UU) {
                return "NATIVE" !== UU.shaderPlatformName && (UU.isWebGPU || 2 === UU.MC)
              }(UU)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !UU.isWebGPU && !UU.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const RU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8),
                gU = this._assignRenderTargetIndices()[0] + 1;
              if (UU.getCaps().drawBuffersExtension && gU > RU) throw new Error(`GeometryBufferRenderer: ${gU} color attachments were requested, but this engine supports at most ${RU}`)
            }
          }
          this._enableMeshBlendTag = UU, UU || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Zh() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        var pU;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new AU.g(0, 0, 0, 0), this._clearDepthColor = new AU.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = UU, this._ratioOrDimensions = RU, this._useUbo = UU.WC().supportsUniformBuffers, this._depthFormat = gU, this._textureTypesAndFormats = tU || {}, this._initShaderSourceAsync(), pU = sR, vR || (vR = !0, Object.defineProperty(dU.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(UU) {
            UU && UU.isSupported && (this._geometryBufferRenderer = UU)
          },
          enumerable: !0,
          configurable: !0
        }), dU.f.prototype.enableGeometryBufferRenderer = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            gU = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new pU(this, UU, RU, gU), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, dU.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, pU._SceneComponentInitialization = UU => {
          let RU = UU._getComponent(rR.d.NAME_GEOMETRYBUFFERRENDERER);
          RU || (RU = new XR(UU), UU.IgU(RU))
        }), sR._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.WC().isWebGPU && !sR.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gU.e(327).then((() => gU(61190))), Promise.all([gU.e(326), gU.e(338)]).then((() => gU(61199)))])) : await Promise.all([gU.e(310).then((() => gU(61207))), gU.e(309).then((() => gU(61211)))]), this._shadersLoaded = !0
      }
      isReady(UU, RU) {
        if (!this._shadersLoaded) return !1;
        const gU = UU.JC();
        if (gU && gU.disableDepthWrite) return !1;
        if (function(UU) {
            return UU._isGaussianSplatting || "GaussianSplattingMesh" === (RU = UU.getClassName()) || "GaussianSplattingStream" === RU;
            var RU
          }(UU.getMesh())) return !1;
        const tU = [],
          pU = [SU.l.PositionKind],
          EU = UU.getMesh();
        EU.isVerticesDataPresent(SU.l.NormalKind) && (tU.push("#define HAS_NORMAL_ATTRIBUTE"), pU.push(SU.l.NormalKind));
        let PU = !1,
          TU = !1;
        if (gU) {
          let UU = !1;
          if (gU.needAlphaTestingForMesh(EU) && gU.getAlphaTestTexture() && (tU.push("#define ALPHATEST"), tU.push(`#define ALPHATEST_UV${gU.getAlphaTestTexture().coordinatesIndex+1}`), UU = !0), (gU.bumpTexture || gU.normalTexture || gU.geometryNormalTexture) && LU.b.BumpTextureEnabled) {
            const RU = gU.bumpTexture || gU.normalTexture || gU.geometryNormalTexture;
            tU.push("#define BUMP"), tU.push(`#define BUMP_UV${RU.coordinatesIndex+1}`), UU = !0
          }
          if (this._enableReflectivity) {
            let RU = !1;
            if ("PBRMetallicRoughnessMaterial" === gU.getClassName()) gU.metallicRoughnessTexture && (tU.push("#define ORMTEXTURE"), tU.push(`#define REFLECTIVITY_UV${gU.metallicRoughnessTexture.coordinatesIndex+1}`), tU.push("#define METALLICWORKFLOW"), UU = !0, RU = !0), null != gU.metallic && (tU.push("#define METALLIC"), tU.push("#define METALLICWORKFLOW"), RU = !0), null != gU.roughness && (tU.push("#define ROUGHNESS"), tU.push("#define METALLICWORKFLOW"), RU = !0), RU && (gU.baseTexture && (tU.push("#define ALBEDOTEXTURE"), tU.push(`#define ALBEDO_UV${gU.baseTexture.coordinatesIndex+1}`), gU.baseTexture.gammaSpace && tU.push("#define GAMMAALBEDO"), UU = !0), gU.baseColor && tU.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === gU.getClassName()) gU.specularGlossinessTexture ? (tU.push("#define SPECULARGLOSSINESSTEXTURE"), tU.push(`#define REFLECTIVITY_UV${gU.specularGlossinessTexture.coordinatesIndex+1}`), UU = !0, gU.specularGlossinessTexture.gammaSpace && tU.push("#define GAMMAREFLECTIVITYTEXTURE")) : gU.specularColor && tU.push("#define REFLECTIVITYCOLOR"), null != gU.glossiness && tU.push("#define GLOSSINESS");
            else if ("PBRMaterial" === gU.getClassName()) gU.metallicTexture && (tU.push("#define ORMTEXTURE"), tU.push(`#define REFLECTIVITY_UV${gU.metallicTexture.coordinatesIndex+1}`), tU.push("#define METALLICWORKFLOW"), UU = !0, RU = !0), null != gU.metallic && (tU.push("#define METALLIC"), tU.push("#define METALLICWORKFLOW"), RU = !0), null != gU.roughness && (tU.push("#define ROUGHNESS"), tU.push("#define METALLICWORKFLOW"), RU = !0), RU ? (gU.albedoTexture && (tU.push("#define ALBEDOTEXTURE"), tU.push(`#define ALBEDO_UV${gU.albedoTexture.coordinatesIndex+1}`), gU.albedoTexture.gammaSpace && tU.push("#define GAMMAALBEDO"), UU = !0), gU.albedoColor && tU.push("#define ALBEDOCOLOR")) : (gU.reflectivityTexture ? (tU.push("#define SPECULARGLOSSINESSTEXTURE"), tU.push(`#define REFLECTIVITY_UV${gU.reflectivityTexture.coordinatesIndex+1}`), gU.reflectivityTexture.gammaSpace && tU.push("#define GAMMAREFLECTIVITYTEXTURE"), UU = !0) : gU.reflectivityColor && tU.push("#define REFLECTIVITYCOLOR"), null != gU.microSurface && tU.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === gU.getClassName()) gU.specularTexture && (tU.push("#define REFLECTIVITYTEXTURE"), tU.push(`#define REFLECTIVITY_UV${gU.specularTexture.coordinatesIndex+1}`), gU.specularTexture.gammaSpace && tU.push("#define GAMMAREFLECTIVITYTEXTURE"), UU = !0), gU.specularColor && tU.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === gU.getClassName()) {
              const RU = gU;
              tU.push("#define METALLIC"), tU.push("#define ROUGHNESS"), RU._useRoughnessFromMetallicTextureGreen && RU.baseMetalnessTexture ? (tU.push("#define ORMTEXTURE"), tU.push(`#define REFLECTIVITY_UV${RU.baseMetalnessTexture.coordinatesIndex+1}`), UU = !0) : RU.baseMetalnessTexture ? (tU.push("#define METALLIC_TEXTURE"), tU.push(`#define METALLIC_UV${RU.baseMetalnessTexture.coordinatesIndex+1}`), UU = !0) : RU.specularRoughnessTexture && (tU.push("#define ROUGHNESS_TEXTURE"), tU.push(`#define ROUGHNESS_UV${RU.specularRoughnessTexture.coordinatesIndex+1}`), UU = !0), RU.baseColorTexture && (tU.push("#define ALBEDOTEXTURE"), tU.push(`#define ALBEDO_UV${RU.baseColorTexture.coordinatesIndex+1}`), RU.baseColorTexture.gammaSpace && tU.push("#define GAMMAALBEDO"), UU = !0), RU.baseColor && tU.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (tU.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === gU.getClassName())) {
            const RU = gU;
            RU.subsurfaceWeight > 0 && RU.subsurfaceWeightTexture && (tU.push("#define SUBSURFACE_WEIGHT"), tU.push(`#define SUBSURFACEWEIGHT_UV${RU.subsurfaceWeightTexture.coordinatesIndex+1}`), UU = !0), RU.transmissionWeight > 0 && RU.transmissionWeightTexture && (tU.push("#define TRANSMISSION_WEIGHT"), tU.push(`#define TRANSMISSIONWEIGHT_UV${RU.transmissionWeightTexture.coordinatesIndex+1}`), UU = !0)
          }
          UU && (tU.push("#define NEED_UV"), EU.isVerticesDataPresent(SU.l.UVKind) && (pU.push(SU.l.UVKind), tU.push("#define UV1"), PU = !0), EU.isVerticesDataPresent(SU.l.UV2Kind) && (pU.push(SU.l.UV2Kind), tU.push("#define UV2"), TU = !0))
        }
        if (this._enableDepth && (tU.push("#define DEPTH"), tU.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (tU.push("#define NORMAL"), tU.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (tU.push("#define POSITION"), tU.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (tU.push("#define VELOCITY"), tU.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(EU) && tU.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (tU.push("#define VELOCITY_LINEAR"), tU.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(EU) && tU.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (tU.push("#define REFLECTIVITY"), tU.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (tU.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), tU.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          tU.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), tU.push("#define IRRADIANCE");
          const UU = this._scene;
          if (UU.environmentTexture) {
            const RU = {};
            let pU = !1,
              EU = 0;
            "OpenPBRMaterial" !== gU.getClassName() && "StandardMaterial" !== gU.getClassName() && "PBRMetallicRoughnessMaterial" !== gU.getClassName() && "PBRSpecularGlossinessMaterial" !== gU.getClassName() && "PBRMaterial" !== gU.getClassName() || (pU = !!gU.realtimeFiltering, EU = gU.realtimeFilteringQuality || 0), (0, lU.P)(UU, UU.environmentTexture, RU, pU, EU, !0);
            for (const UU in RU) RU[UU] && tU.push("#define " + UU);
            RU.USEIRRADIANCEMAP || tU.push("#define SPHERICAL_HARMONICS");
            const PU = UU.postProcessRenderPipelineManager.supportedPipelines.find((UU => "IBLShadowsRenderPipeline" === UU.getClassName()));
            if (PU) {
              const UU = PU;
              UU._getAccumulatedTexture() && (tU.push("#define IBL_SHADOW_TEXTURE"), UU.coloredShadows && tU.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (tU.push("#define OBJECT_ID"), tU.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (tU.push("#define MESH_BLEND_TAG"), tU.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && tU.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && tU.push("#define ENCODE_NORMAL"), EU.useBones && EU.computeBonesUsingShaders && EU.skeleton ? (pU.push(SU.l.MatricesIndicesKind), pU.push(SU.l.MatricesWeightsKind), EU.numBoneInfluencers > 4 && (pU.push(SU.l.MatricesIndicesExtraKind), pU.push(SU.l.MatricesWeightsExtraKind)), tU.push("#define NUM_BONE_INFLUENCERS " + EU.numBoneInfluencers), tU.push("#define BONETEXTURE " + EU.skeleton.isUsingTextureForMatrices), tU.push("#define BonesPerMesh " + (EU.skeleton.bones.length + 1))) : (tU.push("#define NUM_BONE_INFLUENCERS 0"), tU.push("#define BONETEXTURE false"), tU.push("#define BonesPerMesh 0"));
        const qU = EU.morphTargetManager ? (0, lU.I)(EU.morphTargetManager, tU, pU, EU, !0, !0, !1, PU, TU, !1) : 0;
        RU && (tU.push("#define INSTANCES"), (0, lU.jb)(pU, this._enableVelocity || this._enableVelocityLinear), UU.getRenderingMesh().hasThinInstances && tU.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? tU.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : tU.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, cR.h)(gU, this._scene, tU);
        const KU = this._scene.WC(),
          cU = UU._getDrawWrapper(void 0, !0),
          GU = cU.defines,
          jU = tU.join("\n");
        return GU !== jU && cU.setEffect(KU.createEffect("geometry", {
          attributes: pU,
          uniformsNames: SR,
          samplers: HR,
          defines: jU,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: qU
          },
          shaderLanguage: this.shaderLanguage
        }, KU), jU), cU.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(UU) {
        if (this._enableObjectId && 1 !== UU) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== UU) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = UU
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.WC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Zh.WC()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Zh.WC().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const UU = [],
          RU = [];
        let gU = 0;
        return this._enableDepth && (this._depthIndex = gU, gU++, UU.push("gBuffer_Depth"), RU.push(this._textureTypesAndFormats[sR.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = gU, gU++, UU.push("gBuffer_Normal"), RU.push(this._textureTypesAndFormats[sR.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = gU, gU++, UU.push("gBuffer_Position"), RU.push(this._textureTypesAndFormats[sR.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = gU, gU++, UU.push("gBuffer_Velocity"), RU.push(this._textureTypesAndFormats[sR.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = gU, gU++, UU.push("gBuffer_VelocityLinear"), RU.push(this._textureTypesAndFormats[sR.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = gU, gU++, UU.push("gBuffer_Reflectivity"), RU.push(this._textureTypesAndFormats[sR.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = gU, gU++, UU.push("gBuffer_ScreenspaceDepth"), RU.push(this._textureTypesAndFormats[sR.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = gU, gU++, UU.push("gBuffer_Irradiance"), RU.push(this._textureTypesAndFormats[sR.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = gU, gU++, UU.push("gBuffer_ObjectId"), RU.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = gU, gU++, UU.push("gBuffer_MeshBlendTag"), RU.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [gU, UU, RU]
      }
      _createRenderTargets() {
        const UU = this._scene.WC(),
          [RU, gU, tU] = this._assignRenderTargetIndices(),
          pU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8);
        if (UU.getCaps().drawBuffersExtension && RU > pU) throw new Error(`GeometryBufferRenderer: ${RU} color attachments were requested, but this engine supports at most ${pU}`);
        let PU = 0;
        UU._caps.textureFloat && UU._caps.textureFloatLinearFiltering ? PU = 1 : UU._caps.textureHalfFloat && UU._caps.textureHalfFloatLinearFiltering && (PU = 2);
        const TU = this._getRenderTargetDimensions(),
          qU = [],
          KU = [],
          cU = [];
        for (const EU of tU) EU ? (qU.push(EU.textureType), KU.push(EU.textureFormat), cU.push(EU.samplingMode ?? 2)) : (qU.push(PU), KU.push(5), cU.push(2));
        if (this._normalsAreUnsigned = 11 === qU[sR.NORMAL_TEXTURE_TYPE] || 13 === qU[sR.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new VR("gBuffer", TU, RU, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: qU,
            formats: KU,
            samplingModes: cU,
            depthTextureFormat: this._depthFormat
          }, gU.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = aU.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = aU.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const GU = [!0],
          jU = [!1],
          uU = [!0];
        for (let EU = 1; EU < RU; ++EU) GU.push(!0), uU.push(!1), jU.push(!0);
        const CU = UU.buildTextureLayout(GU),
          hU = UU.buildTextureLayout(jU),
          QU = UU.buildTextureLayout(uU);
        this._multiRenderTarget.onClearObservable.add((UU => {
          const RU = this.useSpecificClearForDepthTexture ? hU : CU;
          UU.clearAttachments(this._clearColor, RU, !0, !0, !0), this.useSpecificClearForDepthTexture && UU.clearAttachments(this._clearDepthColor, QU, !0, !1, !1), UU.bindAttachments(CU)
        })), this._resizeObserver = UU.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const eU = UU => {
          const RU = UU.getRenderingMesh(),
            gU = UU.getEffectiveMesh(),
            tU = this._scene,
            pU = tU.WC(),
            PU = UU.JC();
          if (!PU) return;
          if (gU._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[gU.uniqueId] && (this._previousTransformationMatrices[gU.uniqueId] = {
              FG: HU.c.Identity(),
              viewProjection: tU.getTransformMatrix()
            }, RU.skeleton)) {
            const UU = RU.skeleton.getTransformMatrices(RU);
            this._previousBonesTransformationMatrices[RU.uniqueId] = this._copyBonesTransformationMatrices(UU, new Float32Array(UU.length))
          }
          const TU = RU._getInstancesRenderList(UU._id, !!UU.getReplacementMesh());
          if (TU.mustReturn) return;
          const qU = pU.getCaps().instancedArrays && (null !== TU.visibleInstances[UU._id] || RU.hasThinInstances),
            KU = gU.getWorldMatrix();
          if (this.isReady(UU, qU)) {
            const cU = UU._getDrawWrapper();
            if (!cU) return;
            const GU = cU.effect;
            let jU;
            pU.enableEffect(cU), qU || RU._bind(UU, GU, PU.fillMode), this._useUbo ? ((0, lU.u)(GU, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (GU.setMatrix("viewProjection", tU.getTransformMatrix()), GU.setMatrix("view", tU.getViewMatrix()), this._scene.bindEyePosition(GU, "vEyePosition"));
            if (RU._instanceDataStorage.isFrozen || !PU.backFaceCulling && null === PU.sideOrientation) jU = RU._effectiveSideOrientation;
            else {
              const UU = gU._getWorldMatrixDeterminant();
              jU = PU._getEffectiveOrientation(RU), UU < 0 && (jU = jU === EU.c.ClockWiseSideOrientation ? EU.c.CounterClockWiseSideOrientation : EU.c.ClockWiseSideOrientation)
            }
            if (PU._preBind(cU, jU), PU.needAlphaTestingForMesh(gU)) {
              const UU = PU.getAlphaTestTexture();
              UU && (GU.setTexture("diffuseSampler", UU), GU.setMatrix("diffuseMatrix", UU.getTextureMatrix()), GU.setFloat("alphaCutOff", PU.alphaCutOff ?? .4))
            }
            if ((PU.bumpTexture || PU.normalTexture || PU.geometryNormalTexture) && tU.WC().getCaps().standardDerivatives && LU.b.BumpTextureEnabled) {
              const UU = PU.bumpTexture || PU.normalTexture || PU.geometryNormalTexture;
              GU.setFloat3("vBumpInfos", UU.coordinatesIndex, 1 / UU.level, PU.parallaxScaleBias), GU.setMatrix("bumpMatrix", UU.getTextureMatrix()), GU.setTexture("bumpSampler", UU), GU.setFloat2("vTangentSpaceParams", PU.invertNormalMapX ? -1 : 1, PU.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === PU.getClassName()) null !== PU.metallicRoughnessTexture && (GU.setTexture("reflectivitySampler", PU.metallicRoughnessTexture), GU.setMatrix("reflectivityMatrix", PU.metallicRoughnessTexture.getTextureMatrix())), null !== PU.metallic && GU.setFloat("metallic", PU.metallic), null !== PU.roughness && GU.setFloat("glossiness", 1 - PU.roughness), null !== PU.baseTexture && (GU.setTexture("albedoSampler", PU.baseTexture), GU.setMatrix("albedoMatrix", PU.baseTexture.getTextureMatrix())), null !== PU.baseColor && GU.setColor3("albedoColor", PU.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === PU.getClassName()) null !== PU.specularGlossinessTexture ? (GU.setTexture("reflectivitySampler", PU.specularGlossinessTexture), GU.setMatrix("reflectivityMatrix", PU.specularGlossinessTexture.getTextureMatrix())) : null !== PU.specularColor && GU.setColor3("reflectivityColor", PU.specularColor), null !== PU.glossiness && GU.setFloat("glossiness", PU.glossiness);
            else if ("PBRMaterial" === PU.getClassName()) null !== PU.metallicTexture && (GU.setTexture("reflectivitySampler", PU.metallicTexture), GU.setMatrix("reflectivityMatrix", PU.metallicTexture.getTextureMatrix())), null !== PU.metallic && GU.setFloat("metallic", PU.metallic), null !== PU.roughness && GU.setFloat("glossiness", 1 - PU.roughness), null !== PU.roughness || null !== PU.metallic || null !== PU.metallicTexture ? (null !== PU.albedoTexture && (GU.setTexture("albedoSampler", PU.albedoTexture), GU.setMatrix("albedoMatrix", PU.albedoTexture.getTextureMatrix())), null !== PU.albedoColor && GU.setColor3("albedoColor", PU.albedoColor)) : (null !== PU.reflectivityTexture ? (GU.setTexture("reflectivitySampler", PU.reflectivityTexture), GU.setMatrix("reflectivityMatrix", PU.reflectivityTexture.getTextureMatrix())) : null !== PU.reflectivityColor && GU.setColor3("reflectivityColor", PU.reflectivityColor), null !== PU.microSurface && GU.setFloat("glossiness", PU.microSurface));
            else if ("StandardMaterial" === PU.getClassName()) null !== PU.specularTexture && (GU.setTexture("reflectivitySampler", PU.specularTexture), GU.setMatrix("reflectivityMatrix", PU.specularTexture.getTextureMatrix())), null !== PU.specularColor && GU.setColor3("reflectivityColor", PU.specularColor);
            else if ("OpenPBRMaterial" === PU.getClassName()) {
              const UU = PU;
              UU._useRoughnessFromMetallicTextureGreen && UU.baseMetalnessTexture ? (GU.setTexture("reflectivitySampler", UU.baseMetalnessTexture), GU.setMatrix("reflectivityMatrix", UU.baseMetalnessTexture.getTextureMatrix())) : UU.baseMetalnessTexture ? (GU.setTexture("metallicSampler", UU.baseMetalnessTexture), GU.setMatrix("metallicMatrix", UU.baseMetalnessTexture.getTextureMatrix())) : UU.specularRoughnessTexture && (GU.setTexture("roughnessSampler", UU.specularRoughnessTexture), GU.setMatrix("roughnessMatrix", UU.specularRoughnessTexture.getTextureMatrix())), GU.setFloat("metallic", UU.baseMetalness), GU.setFloat("glossiness", 1 - UU.specularRoughness), null !== UU.baseColorTexture && (GU.setTexture("albedoSampler", UU.baseColorTexture), GU.setMatrix("albedoMatrix", UU.baseColorTexture.getTextureMatrix())), null !== UU.baseColor && GU.setColor3("albedoColor", UU.baseColor)
            }
            if (this._enableIrradiance && tU.environmentTexture) {
              const UU = tU.environmentTexture,
                RU = tU.postProcessRenderPipelineManager.supportedPipelines.find((UU => "IBLShadowsRenderPipeline" === UU.getClassName()));
              if (RU) {
                const UU = RU._getAccumulatedTexture();
                UU && (GU.setTexture("iblShadowSampler", UU), GU.setFloat2("shadowTextureSize", UU.getSize().width, UU.getSize().height))
              }
              if (GU.setMatrix("reflectionMatrix", UU.getReflectionTextureMatrix()), GU.setFloat2("vReflectionInfos", UU.level * tU.iblIntensity, 0), GU.setTexture("reflectionSampler", UU), UU.irradianceTexture && (GU.setTexture("irradianceSampler", UU.irradianceTexture), UU.irradianceTexture._dominantDirection && GU.setVector3("vReflectionDominantDirection", UU.irradianceTexture._dominantDirection)), UU.sphericalPolynomial) {
                const RU = UU.sphericalPolynomial;
                if (RU.preScaledHarmonics) {
                  const UU = RU.preScaledHarmonics;
                  GU.setVector3("vSphericalL00", UU.l00), GU.setVector3("vSphericalL1_1", UU.l1_1), GU.setVector3("vSphericalL10", UU.l10), GU.setVector3("vSphericalL11", UU.l11), GU.setVector3("vSphericalL2_2", UU.l2_2), GU.setVector3("vSphericalL2_1", UU.l2_1), GU.setVector3("vSphericalL20", UU.l20), GU.setVector3("vSphericalL21", UU.l21), GU.setVector3("vSphericalL22", UU.l22)
                } else GU.setFloat3("vSphericalX", RU.x.x, RU.x.y, RU.x.z), GU.setFloat3("vSphericalY", RU.y.x, RU.y.y, RU.y.z), GU.setFloat3("vSphericalZ", RU.z.x, RU.z.y, RU.z.z), GU.setFloat3("vSphericalXX_ZZ", RU.xx.x - RU.zz.x, RU.xx.y - RU.zz.y, RU.xx.z - RU.zz.z), GU.setFloat3("vSphericalYY_ZZ", RU.yy.x - RU.zz.x, RU.yy.y - RU.zz.y, RU.yy.z - RU.zz.z), GU.setFloat3("vSphericalZZ", RU.zz.x, RU.zz.y, RU.zz.z), GU.setFloat3("vSphericalXY", RU.xy.x, RU.xy.y, RU.xy.z), GU.setFloat3("vSphericalYZ", RU.yz.x, RU.yz.y, RU.yz.z), GU.setFloat3("vSphericalZX", RU.zx.x, RU.zx.y, RU.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === PU.getClassName()) {
                const UU = PU;
                GU.setFloat("vSubsurfaceWeight", UU.subsurfaceWeight), UU.subsurfaceWeightTexture && (GU.setTexture("subsurfaceWeightSampler", UU.subsurfaceWeightTexture), GU.setMatrix("subsurfaceWeightMatrix", UU.subsurfaceWeightTexture.getTextureMatrix())), GU.setFloat("vTransmissionWeight", UU.transmissionWeight), UU.transmissionWeightTexture && (GU.setTexture("transmissionWeightSampler", UU.transmissionWeightTexture), GU.setMatrix("transmissionWeightMatrix", UU.transmissionWeightTexture.getTextureMatrix())), GU.setFloat("vTransmissionScatterAnisotropy", UU.transmissionScatterAnisotropy), GU.setFloat("vSubsurfaceScatterAnisotropy", UU.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, cR.f)(GU, PU, this._scene), RU.useBones && RU.computeBonesUsingShaders && RU.skeleton) {
              const UU = RU.skeleton;
              if (UU.isUsingTextureForMatrices && GU.getUniformIndex("boneTextureInfo") > -1) {
                const gU = UU.getTransformMatrixTexture(RU);
                GU.setTexture("boneSampler", gU), GU.setFloat2("boneTextureInfo", UU._textureWidth, UU._textureHeight)
              } else GU.setMatrices("mBones", RU.skeleton.getTransformMatrices(RU));
              (this._enableVelocity || this._enableVelocityLinear) && GU.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[RU.uniqueId])
            }
            if ((0, lU.s)(RU, GU), RU.morphTargetManager && RU.morphTargetManager.isUsingTextureForTargets && RU.morphTargetManager._bind(GU), (this._enableVelocity || this._enableVelocityLinear) && (GU.setMatrix("previousWorld", this._previousTransformationMatrices[gU.uniqueId].FG), GU.setMatrix("previousViewProjection", this._previousTransformationMatrices[gU.uniqueId].viewProjection)), this._enableObjectId) {
              let UU = RU.uniqueId;
              if (this.objectIdProvider) UU = (0, uR.k)(RU, this.objectIdProvider);
              else if (UU > 16777215) throw new Error(`Invalid geometry object ID ${UU} for mesh "${RU.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              GU.setFloat("objectId", UU)
            }
            if (this._enableMeshBlendTag) {
              const UU = this.meshBlendTagProvider ? (0, uR.h)(RU, this.meshBlendTagProvider) : RU.meshBlendingTag;
              GU.setInt("meshBlendTag", UU)
            }
            qU && RU.hasThinInstances && GU.setMatrix("world", KU), RU._processRendering(gU, UU, GU, PU.fillMode, TU, qU, ((UU, RU) => {
              UU || GU.setMatrix("world", RU)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[gU.uniqueId].FG = KU.clone(), this._previousTransformationMatrices[gU.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), RU.skeleton && this._copyBonesTransformationMatrices(RU.skeleton.getTransformMatrices(RU), this._previousBonesTransformationMatrices[gU.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (RU, gU, tU) => {
          if ((tU || 0 === gU) && RU.ZI)
            for (let pU = 0; pU < RU.ZI.length; ++pU) {
              const gU = RU.ZI[pU],
                tU = gU.JC(),
                EU = gU.getRenderingMesh();
              if (!tU) continue;
              const PU = EU._getInstancesRenderList(gU._id, !!gU.getReplacementMesh()),
                TU = UU.getCaps().instancedArrays && (null !== PU.visibleInstances[gU._id] || EU.hasThinInstances);
              if (!this.isReady(gU, TU)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (RU, gU, tU, pU) => {
          let EU;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.WC().bindAttachments(this._attachmentsFromPrePass)
          }
          if (pU.length) {
            for (UU.setColorWrite(!1), EU = 0; EU < pU.length; EU++) eU(pU.data[EU]);
            UU.setColorWrite(!0)
          }
          for (EU = 0; EU < RU.length; EU++) eU(RU.data[EU]);
          for (UU.setDepthWrite(!1), EU = 0; EU < gU.length; EU++) eU(gU.data[EU]);
          if (this.renderTransparentMeshes)
            for (EU = 0; EU < tU.length; EU++) eU(tU.data[EU]);
          UU.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const UU = this._scene.WC();
        return {
          width: Math.max(1, Math.floor(UU.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(UU.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(UU, RU) {
        for (let gU = 0; gU < UU.length; gU++) RU[gU] = UU[gU];
        return RU
      }
    }
    sR.ForceGLSL = !1, sR.DEPTH_TEXTURE_TYPE = 0, sR.NORMAL_TEXTURE_TYPE = 1, sR.POSITION_TEXTURE_TYPE = 2, sR.VELOCITY_TEXTURE_TYPE = 3, sR.REFLECTIVITY_TEXTURE_TYPE = 4, sR.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, sR.VELOCITY_LINEAR_TEXTURE_TYPE = 6, sR.IRRADIANCE_TEXTURE_TYPE = 7, sR.OBJECT_ID_TEXTURE_TYPE = 8, sR.MESH_BLEND_TAG_TEXTURE_TYPE = 9, sR._SceneComponentInitialization = UU => {
      throw (0, eR.n)("GeometryBufferRendererSceneComponent")
    };
    var yR = gU(36639);
    const kR = {
      effect: null,
      subMesh: null
    };

    function FR(UU) {
      if ("number" === typeof UU) return 1;
      if (UU instanceof HU.l) return 2;
      if (UU instanceof HU.n || UU instanceof AU.e) return 3;
      if (UU instanceof HU.q || UU instanceof AU.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class iR {
      populateVectorFromLinkedProperties(UU) {
        const RU = FR(UU);
        for (const gU in this.linkedProperties) {
          const UU = this.linkedProperties[gU],
            tU = UU.numComponents;
          if (RU < tU || UU.targetUniformComponentOffset > RU - tU) return void(1 == tU ? oU.e.Error(`Float property ${UU.name} has an offset that is too large.`) : oU.e.Error(`Vector${tU} property ${UU.name} won't fit in Vector${RU} or has an offset that is too large.`));
          "number" === typeof UU.value ? iR._tmpArray[UU.targetUniformComponentOffset] = UU.value : UU.value.toArray(iR._tmpArray, UU.targetUniformComponentOffset)
        }
        UU.bRU(iR._tmpArray)
      }
      constructor(UU, RU) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = UU, this.numComponents = RU
      }
    }
    iR._tmpArray = [0, 0, 0, 0];
    class AR {
      constructor(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = UU, this.targetUniformName = gU, this.defaultValue = RU, this.value = RU, this.targetUniformComponentNum = tU, this.targetUniformComponentOffset = pU, this.requiredDefine = EU
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : FR(this.defaultValue)
      }
    }
    class zR {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(UU, RU, gU) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = UU, this.samplerPrefix = RU, this.textureDefine = gU
      }
    }
    class MR extends((0, hR.b)((0, CR.c)(sU.c))) {}
    class DR extends(function(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(MR)) {}
    class LR extends((0, zU.c)(DR)) {
      constructor(UU) {
        super(UU), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class NR extends((0, QR.c)(DU.b)) {}
    let lR = (() => {
        var UU, RU, tU, pU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, YU, BU, VU, rU, dU, sU, yU, kU, FU, zU, DU, OU, UR, RR, gR, tR, pR, ER, PR, TR, qR, KR, CR, hR, QR, eR, WR, fR, xR, mR, IR, nR, bR, oR, ZR, aR, YR, BR, VR, rR, XR, vR, dR, HR, SR, yR, FR, MR, DR, lR, OR, Ug, Rg, gg, tg, pg, Eg, Pg, Tg, qg, Kg, cg, Gg, jg, ug, Cg, hg, Qg, eg, Wg, fg, xg, mg, Ig, Jg, wg, ng, bg, og, Zg;
        let ag, Yg, Bg, Vg, rg, Xg, vg, dg, Hg, Sg, sg, yg, kg, Fg, ig, Ag, zg, Mg, Dg, Lg, Ng, lg, Og, Ut, Rt, gt, tt, pt, Et, Pt, Tt, qt, Kt, ct, Gt, jt, ut, Ct, ht, Qt, et, Wt, ft, xt, mt, It, Jt, wt, nt, bt, ot, Zt, Yt, Bt, Vt, rt, Xt, vt, dt, Ht, St, st, yt, kt, Ft, it, At, zt, Mt, Dt, Lt, Nt, lt, Ot, Up, Rp, gp, tp, pp, Ep, Pp, Tp, qp, Kp, cp, Gp, jp, Cp, hp, Qp, ep, Wp, fp, xp, mp, Ip, Jp, wp, np, bp, op, Zp, ap, Yp, Bp, Vp = NR,
          rp = [],
          Xp = [],
          vp = [],
          dp = [],
          Hp = [],
          Sp = [],
          sp = [],
          yp = [],
          kp = [],
          Fp = [],
          ip = [],
          Ap = [],
          zp = [],
          Mp = [],
          Dp = [],
          Lp = [],
          Np = [],
          lp = [],
          Op = [],
          UE = [],
          RE = [],
          gE = [],
          tE = [],
          pE = [],
          EE = [],
          PE = [],
          TE = [],
          qE = [],
          KE = [],
          cE = [],
          GE = [],
          jE = [],
          uE = [],
          CE = [],
          hE = [],
          QE = [],
          eE = [],
          WE = [],
          fE = [],
          xE = [],
          mE = [],
          IE = [],
          JE = [],
          wE = [],
          nE = [],
          bE = [],
          oE = [],
          ZE = [],
          aE = [],
          YE = [],
          BE = [],
          VE = [],
          rE = [],
          XE = [],
          vE = [],
          dE = [],
          HE = [],
          SE = [],
          sE = [],
          yE = [],
          kE = [],
          FE = [],
          iE = [],
          AE = [],
          zE = [],
          ME = [],
          DE = [],
          LE = [],
          NE = [],
          lE = [],
          OE = [],
          UP = [],
          RP = [],
          gP = [],
          tP = [],
          pP = [],
          EP = [],
          PP = [],
          TP = [],
          qP = [],
          KP = [],
          cP = [],
          GP = [],
          jP = [],
          uP = [],
          CP = [],
          hP = [],
          QP = [],
          eP = [],
          WP = [],
          fP = [],
          xP = [],
          mP = [],
          IP = [],
          JP = [],
          wP = [],
          nP = [],
          bP = [],
          oP = [],
          ZP = [],
          aP = [],
          YP = [],
          BP = [],
          VP = [],
          rP = [],
          XP = [],
          vP = [],
          dP = [],
          HP = [],
          SP = [],
          sP = [],
          yP = [],
          kP = [],
          FP = [],
          iP = [],
          AP = [],
          zP = [],
          MP = [],
          DP = [],
          LP = [],
          NP = [],
          lP = [],
          OP = [],
          UT = [],
          RT = [],
          gT = [],
          tT = [],
          pT = [],
          ET = [],
          PT = [],
          TT = [],
          qT = [],
          KT = [],
          cT = [],
          GT = [],
          jT = [],
          uT = [],
          CT = [],
          hT = [],
          QT = [],
          eT = [],
          WT = [],
          fT = [],
          xT = [],
          mT = [],
          IT = [],
          JT = [],
          wT = [],
          nT = [],
          bT = [],
          oT = [],
          ZT = [],
          aT = [],
          YT = [],
          BT = [],
          VT = [],
          rT = [],
          XT = [],
          vT = [],
          dT = [],
          HT = [],
          ST = [],
          sT = [],
          yT = [],
          kT = [],
          FT = [],
          iT = [],
          AT = [],
          zT = [],
          MT = [],
          DT = [],
          LT = [],
          NT = [],
          lT = [],
          OT = [],
          Uq = [],
          Rq = [],
          gq = [],
          tq = [],
          pq = [],
          Eq = [],
          Pq = [],
          Tq = [],
          qq = [],
          Kq = [],
          cq = [],
          Gq = [],
          jq = [],
          uq = [],
          Cq = [],
          hq = [],
          Qq = [],
          eq = [],
          Wq = [],
          fq = [],
          xq = [],
          mq = [],
          Iq = [],
          Jq = [],
          wq = [],
          nq = [],
          bq = [],
          oq = [],
          Zq = [],
          aq = [];
        return UU = class extends Vp {
          get baseWeight() {
            return (0, nU.c)(this, RU, "f")
          }
          set baseWeight(UU) {
            (0, nU.e)(this, RU, UU, "f")
          }
          get baseWeightTexture() {
            return (0, nU.c)(this, tU, "f")
          }
          set baseWeightTexture(UU) {
            (0, nU.e)(this, tU, UU, "f")
          }
          get baseColor() {
            return (0, nU.c)(this, pU, "f")
          }
          set baseColor(UU) {
            (0, nU.e)(this, pU, UU, "f")
          }
          get baseColorTexture() {
            return (0, nU.c)(this, PU, "f")
          }
          set baseColorTexture(UU) {
            (0, nU.e)(this, PU, UU, "f")
          }
          get baseDiffuseRoughness() {
            return (0, nU.c)(this, TU, "f")
          }
          set baseDiffuseRoughness(UU) {
            (0, nU.e)(this, TU, UU, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, nU.c)(this, qU, "f")
          }
          set baseDiffuseRoughnessTexture(UU) {
            (0, nU.e)(this, qU, UU, "f")
          }
          get baseMetalness() {
            return (0, nU.c)(this, KU, "f")
          }
          set baseMetalness(UU) {
            (0, nU.e)(this, KU, UU, "f")
          }
          get baseMetalnessTexture() {
            return (0, nU.c)(this, cU, "f")
          }
          set baseMetalnessTexture(UU) {
            (0, nU.e)(this, cU, UU, "f")
          }
          get specularWeight() {
            return (0, nU.c)(this, GU, "f")
          }
          set specularWeight(UU) {
            (0, nU.e)(this, GU, UU, "f")
          }
          get specularWeightTexture() {
            return (0, nU.c)(this, jU, "f")
          }
          set specularWeightTexture(UU) {
            (0, nU.e)(this, jU, UU, "f")
          }
          get specularColor() {
            return (0, nU.c)(this, uU, "f")
          }
          set specularColor(UU) {
            (0, nU.e)(this, uU, UU, "f")
          }
          get specularColorTexture() {
            return (0, nU.c)(this, CU, "f")
          }
          set specularColorTexture(UU) {
            (0, nU.e)(this, CU, UU, "f")
          }
          get specularRoughness() {
            return (0, nU.c)(this, hU, "f")
          }
          set specularRoughness(UU) {
            (0, nU.e)(this, hU, UU, "f")
          }
          get specularRoughnessTexture() {
            return (0, nU.c)(this, QU, "f")
          }
          set specularRoughnessTexture(UU) {
            (0, nU.e)(this, QU, UU, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, nU.c)(this, eU, "f")
          }
          set specularRoughnessAnisotropy(UU) {
            (0, nU.e)(this, eU, UU, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, nU.c)(this, WU, "f")
          }
          set specularRoughnessAnisotropyTexture(UU) {
            (0, nU.e)(this, WU, UU, "f")
          }
          get specularIor() {
            return (0, nU.c)(this, fU, "f")
          }
          set specularIor(UU) {
            (0, nU.e)(this, fU, UU, "f")
          }
          get transmissionWeight() {
            return (0, nU.c)(this, xU, "f")
          }
          set transmissionWeight(UU) {
            (0, nU.e)(this, xU, UU, "f")
          }
          get transmissionWeightTexture() {
            return (0, nU.c)(this, mU, "f")
          }
          set transmissionWeightTexture(UU) {
            (0, nU.e)(this, mU, UU, "f")
          }
          get transmissionColor() {
            return (0, nU.c)(this, IU, "f")
          }
          set transmissionColor(UU) {
            (0, nU.e)(this, IU, UU, "f")
          }
          get transmissionColorTexture() {
            return (0, nU.c)(this, JU, "f")
          }
          set transmissionColorTexture(UU) {
            (0, nU.e)(this, JU, UU, "f")
          }
          get transmissionDepth() {
            return (0, nU.c)(this, wU, "f")
          }
          set transmissionDepth(UU) {
            (0, nU.e)(this, wU, UU, "f")
          }
          get transmissionDepthTexture() {
            return (0, nU.c)(this, YU, "f")
          }
          set transmissionDepthTexture(UU) {
            (0, nU.e)(this, YU, UU, "f")
          }
          get transmissionScatter() {
            return (0, nU.c)(this, BU, "f")
          }
          set transmissionScatter(UU) {
            (0, nU.e)(this, BU, UU, "f")
          }
          get transmissionScatterTexture() {
            return (0, nU.c)(this, VU, "f")
          }
          set transmissionScatterTexture(UU) {
            (0, nU.e)(this, VU, UU, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, nU.c)(this, rU, "f")
          }
          set transmissionScatterAnisotropy(UU) {
            (0, nU.e)(this, rU, UU, "f")
          }
          get transmissionDispersionScale() {
            return (0, nU.c)(this, dU, "f")
          }
          set transmissionDispersionScale(UU) {
            (0, nU.e)(this, dU, UU, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, nU.c)(this, sU, "f")
          }
          set transmissionDispersionScaleTexture(UU) {
            (0, nU.e)(this, sU, UU, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, nU.c)(this, yU, "f")
          }
          set transmissionDispersionAbbeNumber(UU) {
            (0, nU.e)(this, yU, UU, "f")
          }
          get subsurfaceWeight() {
            return (0, nU.c)(this, kU, "f")
          }
          set subsurfaceWeight(UU) {
            (0, nU.e)(this, kU, UU, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, nU.c)(this, FU, "f")
          }
          set subsurfaceWeightTexture(UU) {
            (0, nU.e)(this, FU, UU, "f")
          }
          get subsurfaceColor() {
            return (0, nU.c)(this, zU, "f")
          }
          set subsurfaceColor(UU) {
            (0, nU.e)(this, zU, UU, "f")
          }
          get subsurfaceColorTexture() {
            return (0, nU.c)(this, DU, "f")
          }
          set subsurfaceColorTexture(UU) {
            (0, nU.e)(this, DU, UU, "f")
          }
          get subsurfaceRadius() {
            return (0, nU.c)(this, OU, "f")
          }
          set subsurfaceRadius(UU) {
            (0, nU.e)(this, OU, UU, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, nU.c)(this, UR, "f")
          }
          set subsurfaceRadiusScale(UU) {
            (0, nU.e)(this, UR, UU, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, nU.c)(this, RR, "f")
          }
          set subsurfaceRadiusScaleTexture(UU) {
            (0, nU.e)(this, RR, UU, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, nU.c)(this, gR, "f")
          }
          set subsurfaceScatterAnisotropy(UU) {
            (0, nU.e)(this, gR, UU, "f")
          }
          get coatWeight() {
            return (0, nU.c)(this, tR, "f")
          }
          set coatWeight(UU) {
            (0, nU.e)(this, tR, UU, "f")
          }
          get coatWeightTexture() {
            return (0, nU.c)(this, pR, "f")
          }
          set coatWeightTexture(UU) {
            (0, nU.e)(this, pR, UU, "f")
          }
          get coatColor() {
            return (0, nU.c)(this, ER, "f")
          }
          set coatColor(UU) {
            (0, nU.e)(this, ER, UU, "f")
          }
          get coatColorTexture() {
            return (0, nU.c)(this, PR, "f")
          }
          set coatColorTexture(UU) {
            (0, nU.e)(this, PR, UU, "f")
          }
          get coatRoughness() {
            return (0, nU.c)(this, TR, "f")
          }
          set coatRoughness(UU) {
            (0, nU.e)(this, TR, UU, "f")
          }
          get coatRoughnessTexture() {
            return (0, nU.c)(this, qR, "f")
          }
          set coatRoughnessTexture(UU) {
            (0, nU.e)(this, qR, UU, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, nU.c)(this, KR, "f")
          }
          set coatRoughnessAnisotropy(UU) {
            (0, nU.e)(this, KR, UU, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, nU.c)(this, CR, "f")
          }
          set coatRoughnessAnisotropyTexture(UU) {
            (0, nU.e)(this, CR, UU, "f")
          }
          get coatIor() {
            return (0, nU.c)(this, hR, "f")
          }
          set coatIor(UU) {
            (0, nU.e)(this, hR, UU, "f")
          }
          get coatDarkening() {
            return (0, nU.c)(this, QR, "f")
          }
          set coatDarkening(UU) {
            (0, nU.e)(this, QR, UU, "f")
          }
          get coatDarkeningTexture() {
            return (0, nU.c)(this, eR, "f")
          }
          set coatDarkeningTexture(UU) {
            (0, nU.e)(this, eR, UU, "f")
          }
          get fuzzWeight() {
            return (0, nU.c)(this, WR, "f")
          }
          set fuzzWeight(UU) {
            (0, nU.e)(this, WR, UU, "f")
          }
          get fuzzWeightTexture() {
            return (0, nU.c)(this, fR, "f")
          }
          set fuzzWeightTexture(UU) {
            (0, nU.e)(this, fR, UU, "f")
          }
          get fuzzColor() {
            return (0, nU.c)(this, xR, "f")
          }
          set fuzzColor(UU) {
            (0, nU.e)(this, xR, UU, "f")
          }
          get fuzzColorTexture() {
            return (0, nU.c)(this, mR, "f")
          }
          set fuzzColorTexture(UU) {
            (0, nU.e)(this, mR, UU, "f")
          }
          get fuzzRoughness() {
            return (0, nU.c)(this, IR, "f")
          }
          set fuzzRoughness(UU) {
            (0, nU.e)(this, IR, UU, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, nU.c)(this, nR, "f")
          }
          set fuzzRoughnessTexture(UU) {
            (0, nU.e)(this, nR, UU, "f")
          }
          get geometryThinWalled() {
            return (0, nU.c)(this, bR, "f")
          }
          set geometryThinWalled(UU) {
            (0, nU.e)(this, bR, UU, "f")
          }
          get geometryNormalTexture() {
            return (0, nU.c)(this, oR, "f")
          }
          set geometryNormalTexture(UU) {
            (0, nU.e)(this, oR, UU, "f")
          }
          get geometryTangent() {
            return (0, nU.c)(this, ZR, "f")
          }
          set geometryTangent(UU) {
            (0, nU.e)(this, ZR, UU, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(UU) {
            this.geometryTangent = new HU.l(Math.cos(UU), Math.sin(UU))
          }
          get geometryTangentTexture() {
            return (0, nU.c)(this, aR, "f")
          }
          set geometryTangentTexture(UU) {
            (0, nU.e)(this, aR, UU, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, nU.c)(this, YR, "f")
          }
          set geometryCoatNormalTexture(UU) {
            (0, nU.e)(this, YR, UU, "f")
          }
          get geometryCoatTangent() {
            return (0, nU.c)(this, BR, "f")
          }
          set geometryCoatTangent(UU) {
            (0, nU.e)(this, BR, UU, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(UU) {
            this.geometryCoatTangent = new HU.l(Math.cos(UU), Math.sin(UU))
          }
          get geometryCoatTangentTexture() {
            return (0, nU.c)(this, VR, "f")
          }
          set geometryCoatTangentTexture(UU) {
            (0, nU.e)(this, VR, UU, "f")
          }
          get geometryOpacity() {
            return (0, nU.c)(this, rR, "f")
          }
          set geometryOpacity(UU) {
            (0, nU.e)(this, rR, UU, "f")
          }
          get geometryOpacityTexture() {
            return (0, nU.c)(this, XR, "f")
          }
          set geometryOpacityTexture(UU) {
            (0, nU.e)(this, XR, UU, "f")
          }
          get geometryThickness() {
            return (0, nU.c)(this, vR, "f")
          }
          set geometryThickness(UU) {
            (0, nU.e)(this, vR, UU, "f")
          }
          get geometryThicknessTexture() {
            return (0, nU.c)(this, dR, "f")
          }
          set geometryThicknessTexture(UU) {
            (0, nU.e)(this, dR, UU, "f")
          }
          get emissionLuminance() {
            return (0, nU.c)(this, HR, "f")
          }
          set emissionLuminance(UU) {
            (0, nU.e)(this, HR, UU, "f")
          }
          get emissionColor() {
            return (0, nU.c)(this, SR, "f")
          }
          set emissionColor(UU) {
            (0, nU.e)(this, SR, UU, "f")
          }
          get emissionColorTexture() {
            return (0, nU.c)(this, yR, "f")
          }
          set emissionColorTexture(UU) {
            (0, nU.e)(this, yR, UU, "f")
          }
          get thinFilmWeight() {
            return (0, nU.c)(this, FR, "f")
          }
          set thinFilmWeight(UU) {
            (0, nU.e)(this, FR, UU, "f")
          }
          get thinFilmWeightTexture() {
            return (0, nU.c)(this, MR, "f")
          }
          set thinFilmWeightTexture(UU) {
            (0, nU.e)(this, MR, UU, "f")
          }
          get thinFilmThickness() {
            return (0, nU.c)(this, DR, "f")
          }
          set thinFilmThickness(UU) {
            (0, nU.e)(this, DR, UU, "f")
          }
          get thinFilmThicknessMin() {
            return (0, nU.c)(this, lR, "f")
          }
          set thinFilmThicknessMin(UU) {
            (0, nU.e)(this, lR, UU, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, nU.c)(this, OR, "f")
          }
          set thinFilmThicknessTexture(UU) {
            (0, nU.e)(this, OR, UU, "f")
          }
          get thinFilmIor() {
            return (0, nU.c)(this, Ug, "f")
          }
          set thinFilmIor(UU) {
            (0, nU.e)(this, Ug, UU, "f")
          }
          get ambientOcclusionTexture() {
            return (0, nU.c)(this, Rg, "f")
          }
          set ambientOcclusionTexture(UU) {
            (0, nU.e)(this, Rg, UU, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(UU) {
            this._sssQuality !== UU && (this._sssQuality = UU, this.cRU(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(UU) {
            this._sssIrradianceTexture !== UU && (this._sssIrradianceTexture = UU, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(UU) {
            this._sssDepthTexture !== UU && (this._sssDepthTexture = UU, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, nU.c)(this, gg, "f")
          }
          set directIntensity(UU) {
            (0, nU.e)(this, gg, UU, "f")
          }
          get environmentIntensity() {
            return (0, nU.c)(this, tg, "f")
          }
          set environmentIntensity(UU) {
            (0, nU.e)(this, tg, UU, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, nU.c)(this, pg, "f")
          }
          set useSpecularWeightFromTextureAlpha(UU) {
            (0, nU.e)(this, pg, UU, "f")
          }
          get forceAlphaTest() {
            return (0, nU.c)(this, Eg, "f")
          }
          set forceAlphaTest(UU) {
            (0, nU.e)(this, Eg, UU, "f")
          }
          get alphaCutOff() {
            return (0, nU.c)(this, Pg, "f")
          }
          set alphaCutOff(UU) {
            (0, nU.e)(this, Pg, UU, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, nU.c)(this, Tg, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(UU) {
            (0, nU.e)(this, Tg, UU, "f")
          }
          get useAmbientInGrayScale() {
            return (0, nU.c)(this, qg, "f")
          }
          set useAmbientInGrayScale(UU) {
            (0, nU.e)(this, qg, UU, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(AU.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === EU.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(UU) {
            UU !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? EU.c.LIGHTFALLOFF_PHYSICAL : EU.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === EU.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(UU) {
            UU !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? EU.c.LIGHTFALLOFF_GLTF : EU.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, nU.c)(this, Kg, "f")
          }
          set useObjectSpaceNormalMap(UU) {
            (0, nU.e)(this, Kg, UU, "f")
          }
          get useParallax() {
            return (0, nU.c)(this, cg, "f")
          }
          set useParallax(UU) {
            (0, nU.e)(this, cg, UU, "f")
          }
          get useParallaxOcclusion() {
            return (0, nU.c)(this, Gg, "f")
          }
          set useParallaxOcclusion(UU) {
            (0, nU.e)(this, Gg, UU, "f")
          }
          get parallaxScaleBias() {
            return (0, nU.c)(this, jg, "f")
          }
          set parallaxScaleBias(UU) {
            (0, nU.e)(this, jg, UU, "f")
          }
          get disableLighting() {
            return (0, nU.c)(this, ug, "f")
          }
          set disableLighting(UU) {
            (0, nU.e)(this, ug, UU, "f")
          }
          get forceIrradianceInFragment() {
            return (0, nU.c)(this, Cg, "f")
          }
          set forceIrradianceInFragment(UU) {
            (0, nU.e)(this, Cg, UU, "f")
          }
          get maxSimultaneousLights() {
            return (0, nU.c)(this, hg, "f")
          }
          set maxSimultaneousLights(UU) {
            (0, nU.e)(this, hg, UU, "f")
          }
          get invertNormalMapX() {
            return (0, nU.c)(this, Qg, "f")
          }
          set invertNormalMapX(UU) {
            (0, nU.e)(this, Qg, UU, "f")
          }
          get invertNormalMapY() {
            return (0, nU.c)(this, eg, "f")
          }
          set invertNormalMapY(UU) {
            (0, nU.e)(this, eg, UU, "f")
          }
          get twoSidedLighting() {
            return (0, nU.c)(this, Wg, "f")
          }
          set twoSidedLighting(UU) {
            (0, nU.e)(this, Wg, UU, "f")
          }
          get useAlphaFresnel() {
            return (0, nU.c)(this, fg, "f")
          }
          set useAlphaFresnel(UU) {
            (0, nU.e)(this, fg, UU, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, nU.c)(this, xg, "f")
          }
          set useLinearAlphaFresnel(UU) {
            (0, nU.e)(this, xg, UU, "f")
          }
          get environmentBRDFTexture() {
            return (0, nU.c)(this, mg, "f")
          }
          set environmentBRDFTexture(UU) {
            (0, nU.e)(this, mg, UU, "f")
          }
          get forceNormalForward() {
            return (0, nU.c)(this, Ig, "f")
          }
          set forceNormalForward(UU) {
            (0, nU.e)(this, Ig, UU, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, nU.c)(this, Jg, "f")
          }
          set enableSpecularAntiAliasing(UU) {
            (0, nU.e)(this, Jg, UU, "f")
          }
          get useHorizonOcclusion() {
            return (0, nU.c)(this, wg, "f")
          }
          set useHorizonOcclusion(UU) {
            (0, nU.e)(this, wg, UU, "f")
          }
          get useRadianceOcclusion() {
            return (0, nU.c)(this, ng, "f")
          }
          set useRadianceOcclusion(UU) {
            (0, nU.e)(this, ng, UU, "f")
          }
          get unlit() {
            return (0, nU.c)(this, bg, "f")
          }
          set unlit(UU) {
            (0, nU.e)(this, bg, UU, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, nU.c)(this, og, "f")
          }
          set applyDecalMapAfterDetailMap(UU) {
            (0, nU.e)(this, og, UU, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(UU) {
            this._backgroundRefractionTexture = UU, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(UU) {
            this._refractionHighQualityBlur !== UU && (this._refractionHighQualityBlur = UU, this.cRU(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(UU) {
            this._realTimeFiltering = UU, this.cRU(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(UU) {
            this._realTimeFilteringQuality = UU, this.cRU(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(UU) {
            this._fuzzSampleNumber = UU, this.cRU(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, nU.c)(this, Zg, "f")
          }
          set debugMode(UU) {
            (0, nU.e)(this, Zg, UU, "f")
          }
          constructor(gU, bU) {
            super(gU, bU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), RU.set(this, ((0, nU.j)(this, rp), (0, nU.j)(this, Xp, void 0))), this._baseWeight = ((0, nU.j)(this, vp), new AR("base_weight", 1, "vBaseWeight", 1)), tU.set(this, (0, nU.j)(this, dp, void 0)), this._baseWeightTexture = ((0, nU.j)(this, Hp), new zR("base_weight", "baseWeight", "BASE_WEIGHT")), pU.set(this, (0, nU.j)(this, Sp, void 0)), this._baseColor = ((0, nU.j)(this, sp), new AR("base_color", AU.e.White(), "vBaseColor", 4)), PU.set(this, (0, nU.j)(this, yp, void 0)), this._baseColorTexture = ((0, nU.j)(this, kp), new zR("base_color", "baseColor", "BASE_COLOR")), TU.set(this, (0, nU.j)(this, Fp, void 0)), this._baseDiffuseRoughness = ((0, nU.j)(this, ip), new AR("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), qU.set(this, (0, nU.j)(this, Ap, void 0)), this._baseDiffuseRoughnessTexture = ((0, nU.j)(this, zp), new zR("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), KU.set(this, (0, nU.j)(this, Mp, void 0)), this._baseMetalness = ((0, nU.j)(this, Dp), new AR("base_metalness", 0, "vReflectanceInfo", 4, 0)), cU.set(this, (0, nU.j)(this, Lp, void 0)), this._baseMetalnessTexture = ((0, nU.j)(this, Np), new zR("base_metalness", "baseMetalness", "BASE_METALNESS")), GU.set(this, (0, nU.j)(this, lp, void 0)), this._specularWeight = ((0, nU.j)(this, Op), new AR("specular_weight", 1, "vReflectanceInfo", 4, 3)), jU.set(this, (0, nU.j)(this, UE, void 0)), this._specularWeightTexture = ((0, nU.j)(this, RE), new zR("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), uU.set(this, (0, nU.j)(this, gE, void 0)), this._specularColor = ((0, nU.j)(this, tE), new AR("specular_color", AU.e.White(), "vSpecularColor", 4)), CU.set(this, (0, nU.j)(this, pE, void 0)), this._specularColorTexture = ((0, nU.j)(this, EE), new zR("specular_color", "specularColor", "SPECULAR_COLOR")), hU.set(this, (0, nU.j)(this, PE, void 0)), this._specularRoughness = ((0, nU.j)(this, TE), new AR("specular_roughness", .3, "vReflectanceInfo", 4, 1)), QU.set(this, (0, nU.j)(this, qE, void 0)), this._specularRoughnessTexture = ((0, nU.j)(this, KE), new zR("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), eU.set(this, (0, nU.j)(this, cE, void 0)), this._specularRoughnessAnisotropy = ((0, nU.j)(this, GE), new AR("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), WU.set(this, (0, nU.j)(this, jE, void 0)), this._specularRoughnessAnisotropyTexture = ((0, nU.j)(this, uE), new zR("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), fU.set(this, (0, nU.j)(this, CE, void 0)), this._specularIor = ((0, nU.j)(this, hE), new AR("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), xU.set(this, (0, nU.j)(this, QE, void 0)), this._transmissionWeight = ((0, nU.j)(this, eE), new AR("transmission_weight", 0, "vTransmissionWeight", 1)), mU.set(this, (0, nU.j)(this, WE, void 0)), this._transmissionWeightTexture = ((0, nU.j)(this, fE), new zR("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), IU.set(this, (0, nU.j)(this, xE, void 0)), this._transmissionColor = ((0, nU.j)(this, mE), new AR("transmission_color", AU.e.White(), "vTransmissionColor", 3, 0)), JU.set(this, (0, nU.j)(this, IE, void 0)), this._transmissionColorTexture = ((0, nU.j)(this, JE), new zR("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), wU.set(this, (0, nU.j)(this, wE, void 0)), this._transmissionDepth = ((0, nU.j)(this, nE), new AR("transmission_depth", 0, "vTransmissionDepth", 1, 0)), YU.set(this, (0, nU.j)(this, bE, void 0)), this._transmissionDepthTexture = ((0, nU.j)(this, oE), new zR("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), BU.set(this, (0, nU.j)(this, ZE, void 0)), this._transmissionScatter = ((0, nU.j)(this, aE), new AR("transmission_scatter", AU.e.Black(), "vTransmissionScatter", 3, 0)), VU.set(this, (0, nU.j)(this, YE, void 0)), this._transmissionScatterTexture = ((0, nU.j)(this, BE), new zR("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), rU.set(this, (0, nU.j)(this, VE, void 0)), this._transmissionScatterAnisotropy = ((0, nU.j)(this, rE), new AR("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), dU.set(this, (0, nU.j)(this, XE, void 0)), this._transmissionDispersionScale = ((0, nU.j)(this, vE), new AR("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), sU.set(this, (0, nU.j)(this, dE, void 0)), this._transmissionDispersionScaleTexture = ((0, nU.j)(this, HE), new zR("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), yU.set(this, (0, nU.j)(this, SE, void 0)), this._transmissionDispersionAbbeNumber = ((0, nU.j)(this, sE), new AR("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), kU.set(this, (0, nU.j)(this, yE, void 0)), this._subsurfaceWeight = ((0, nU.j)(this, kE), new AR("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), FU.set(this, (0, nU.j)(this, FE, void 0)), this._subsurfaceWeightTexture = ((0, nU.j)(this, iE), new zR("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), zU.set(this, (0, nU.j)(this, AE, void 0)), this._subsurfaceColor = ((0, nU.j)(this, zE), new AR("subsurface_color", new AU.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), DU.set(this, (0, nU.j)(this, ME, void 0)), this._subsurfaceColorTexture = ((0, nU.j)(this, DE), new zR("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), OU.set(this, (0, nU.j)(this, LE, void 0)), this._subsurfaceRadius = ((0, nU.j)(this, NE), new AR("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), UR.set(this, (0, nU.j)(this, lE, void 0)), this._subsurfaceRadiusScale = ((0, nU.j)(this, OE), new AR("subsurface_radius_scale", new AU.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), RR.set(this, (0, nU.j)(this, UP, void 0)), this._subsurfaceRadiusScaleTexture = ((0, nU.j)(this, RP), new zR("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), gR.set(this, (0, nU.j)(this, gP, void 0)), this._subsurfaceScatterAnisotropy = ((0, nU.j)(this, tP), new AR("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), tR.set(this, (0, nU.j)(this, pP, void 0)), this._coatWeight = ((0, nU.j)(this, EP), new AR("coat_weight", 0, "vCoatWeight", 1, 0)), pR.set(this, (0, nU.j)(this, PP, void 0)), this._coatWeightTexture = ((0, nU.j)(this, TP), new zR("coat_weight", "coatWeight", "COAT_WEIGHT")), ER.set(this, (0, nU.j)(this, qP, void 0)), this._coatColor = ((0, nU.j)(this, KP), new AR("coat_color", AU.e.White(), "vCoatColor", 3, 0)), PR.set(this, (0, nU.j)(this, cP, void 0)), this._coatColorTexture = ((0, nU.j)(this, GP), new zR("coat_color", "coatColor", "COAT_COLOR")), TR.set(this, (0, nU.j)(this, jP, void 0)), this._coatRoughness = ((0, nU.j)(this, uP), new AR("coat_roughness", 0, "vCoatRoughness", 1, 0)), qR.set(this, (0, nU.j)(this, CP, void 0)), this._coatRoughnessTexture = ((0, nU.j)(this, hP), new zR("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), KR.set(this, (0, nU.j)(this, QP, void 0)), this._coatRoughnessAnisotropy = ((0, nU.j)(this, eP), new AR("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), CR.set(this, (0, nU.j)(this, WP, void 0)), this._coatRoughnessAnisotropyTexture = ((0, nU.j)(this, fP), new zR("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), hR.set(this, (0, nU.j)(this, xP, void 0)), this._coatIor = ((0, nU.j)(this, mP), new AR("coat_ior", 1.5, "vCoatIor", 1, 0)), QR.set(this, (0, nU.j)(this, IP, void 0)), this._coatDarkening = ((0, nU.j)(this, JP), new AR("coat_darkening", 1, "vCoatDarkening", 1, 0)), eR.set(this, (0, nU.j)(this, wP, void 0)), this._coatDarkeningTexture = ((0, nU.j)(this, nP), new zR("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, WR.set(this, (0, nU.j)(this, bP, void 0)), this._fuzzWeight = ((0, nU.j)(this, oP), new AR("fuzz_weight", 0, "vFuzzWeight", 1, 0)), fR.set(this, (0, nU.j)(this, ZP, void 0)), this._fuzzWeightTexture = ((0, nU.j)(this, aP), new zR("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), xR.set(this, (0, nU.j)(this, YP, void 0)), this._fuzzColor = ((0, nU.j)(this, BP), new AR("fuzz_color", AU.e.White(), "vFuzzColor", 3, 0)), mR.set(this, (0, nU.j)(this, VP, void 0)), this._fuzzColorTexture = ((0, nU.j)(this, rP), new zR("fuzz_color", "fuzzColor", "FUZZ_COLOR")), IR.set(this, (0, nU.j)(this, XP, void 0)), this._fuzzRoughness = ((0, nU.j)(this, vP), new AR("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), nR.set(this, (0, nU.j)(this, dP, void 0)), this._fuzzRoughnessTexture = ((0, nU.j)(this, HP), new zR("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), bR.set(this, (0, nU.j)(this, SP, void 0)), this._geometryThinWalled = ((0, nU.j)(this, sP), new AR("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), oR.set(this, (0, nU.j)(this, yP, void 0)), this._geometryNormalTexture = ((0, nU.j)(this, kP), new zR("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ZR.set(this, (0, nU.j)(this, FP, void 0)), this._geometryTangent = ((0, nU.j)(this, iP), new AR("geometry_tangent", new HU.l(1, 0), "vSpecularAnisotropy", 3, 0)), aR.set(this, (0, nU.j)(this, AP, void 0)), this._geometryTangentTexture = ((0, nU.j)(this, zP), new zR("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), YR.set(this, (0, nU.j)(this, MP, void 0)), this._geometryCoatNormalTexture = ((0, nU.j)(this, DP), new zR("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), BR.set(this, (0, nU.j)(this, LP, void 0)), this._geometryCoatTangent = ((0, nU.j)(this, NP), new AR("geometry_coat_tangent", new HU.l(1, 0), "vGeometryCoatTangent", 2, 0)), VR.set(this, (0, nU.j)(this, lP, void 0)), this._geometryCoatTangentTexture = ((0, nU.j)(this, OP), new zR("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), rR.set(this, (0, nU.j)(this, UT, void 0)), this._geometryOpacity = ((0, nU.j)(this, RT), new AR("geometry_opacity", 1, "vBaseColor", 4, 3)), XR.set(this, (0, nU.j)(this, gT, void 0)), this._geometryOpacityTexture = ((0, nU.j)(this, tT), new zR("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), vR.set(this, (0, nU.j)(this, pT, void 0)), this._geometryThickness = ((0, nU.j)(this, ET), new AR("geometry_thickness", 0, "vGeometryThickness", 1, 0)), dR.set(this, (0, nU.j)(this, PT, void 0)), this._geometryThicknessTexture = ((0, nU.j)(this, TT), new zR("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), HR.set(this, (0, nU.j)(this, qT, void 0)), this._emissionLuminance = ((0, nU.j)(this, KT), new AR("emission_luminance", 1, "vLightingIntensity", 4, 1)), SR.set(this, (0, nU.j)(this, cT, void 0)), this._emissionColor = ((0, nU.j)(this, GT), new AR("emission_color", AU.e.Black(), "vEmissionColor", 3)), yR.set(this, (0, nU.j)(this, jT, void 0)), this._emissionColorTexture = ((0, nU.j)(this, uT), new zR("emission_color", "emissionColor", "EMISSION_COLOR")), FR.set(this, (0, nU.j)(this, CT, void 0)), this._thinFilmWeight = ((0, nU.j)(this, hT), new AR("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), MR.set(this, (0, nU.j)(this, QT, void 0)), this._thinFilmWeightTexture = ((0, nU.j)(this, eT), new zR("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), DR.set(this, (0, nU.j)(this, WT, void 0)), this._thinFilmThickness = ((0, nU.j)(this, fT), new AR("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), lR.set(this, (0, nU.j)(this, xT, void 0)), this._thinFilmThicknessMin = ((0, nU.j)(this, mT), new AR("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), OR.set(this, (0, nU.j)(this, IT, void 0)), this._thinFilmThicknessTexture = ((0, nU.j)(this, JT), new zR("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Ug.set(this, (0, nU.j)(this, wT, void 0)), this._thinFilmIor = ((0, nU.j)(this, nT), new AR("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Rg.set(this, (0, nU.j)(this, bT, void 0)), this._ambientOcclusionTexture = ((0, nU.j)(this, oT), new zR("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = UU.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, gg.set(this, (0, nU.j)(this, ZT, 1)), tg.set(this, ((0, nU.j)(this, aT), (0, nU.j)(this, YT, 1))), pg.set(this, ((0, nU.j)(this, BT), (0, nU.j)(this, VT, !1))), Eg.set(this, ((0, nU.j)(this, rT), (0, nU.j)(this, XT, !1))), Pg.set(this, ((0, nU.j)(this, vT), (0, nU.j)(this, dT, .4))), Tg.set(this, ((0, nU.j)(this, HT), (0, nU.j)(this, ST, !1))), qg.set(this, ((0, nU.j)(this, sT), (0, nU.j)(this, yT, !1))), Kg.set(this, ((0, nU.j)(this, kT), (0, nU.j)(this, FT, !1))), cg.set(this, ((0, nU.j)(this, iT), (0, nU.j)(this, AT, !1))), Gg.set(this, ((0, nU.j)(this, zT), (0, nU.j)(this, MT, !1))), jg.set(this, ((0, nU.j)(this, DT), (0, nU.j)(this, LT, .05))), ug.set(this, ((0, nU.j)(this, NT), (0, nU.j)(this, lT, !1))), Cg.set(this, ((0, nU.j)(this, OT), (0, nU.j)(this, Uq, !1))), hg.set(this, ((0, nU.j)(this, Rq), (0, nU.j)(this, gq, 4))), Qg.set(this, ((0, nU.j)(this, tq), (0, nU.j)(this, pq, !1))), eg.set(this, ((0, nU.j)(this, Eq), (0, nU.j)(this, Pq, !1))), Wg.set(this, ((0, nU.j)(this, Tq), (0, nU.j)(this, qq, !1))), fg.set(this, ((0, nU.j)(this, Kq), (0, nU.j)(this, cq, !1))), xg.set(this, ((0, nU.j)(this, Gq), (0, nU.j)(this, jq, !1))), mg.set(this, ((0, nU.j)(this, uq), (0, nU.j)(this, Cq, null))), Ig.set(this, ((0, nU.j)(this, hq), (0, nU.j)(this, Qq, !1))), Jg.set(this, ((0, nU.j)(this, eq), (0, nU.j)(this, Wq, !1))), wg.set(this, ((0, nU.j)(this, fq), (0, nU.j)(this, xq, !0))), ng.set(this, ((0, nU.j)(this, mq), (0, nU.j)(this, Iq, !0))), bg.set(this, ((0, nU.j)(this, Jq), (0, nU.j)(this, wq, !1))), og.set(this, ((0, nU.j)(this, nq), (0, nU.j)(this, bq, !1))), this._lightingInfos = ((0, nU.j)(this, oq), new HU.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = EU.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ZU.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Zg.set(this, (0, nU.j)(this, Zq, 0)), this.debugLimit = ((0, nU.j)(this, aq), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = EU.c.MATERIAL_OPAQUE, this.aZ() && !this.aZ()?.WC().isWebGPU && this.aZ().WC().MC < 2 && oU.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), UU._noiseTextures[this.aZ().uniqueId] || (UU._noiseTextures[this.aZ().uniqueId] = new aU.e(wR.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.aZ(), !1, !0, 1), this.aZ().HZ.addOnce((() => {
              UU._noiseTextures[this.aZ().uniqueId]?.dispose(), delete UU._noiseTextures[this.aZ().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), LU.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), LU.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = vU(this.aZ()), this._environmentFuzzBRDFTexture = XU(this.aZ()), this.prePassConfiguration = new iU.b, this._propertyList = {};
            for (const UU of Object.getOwnPropertyNames(this)) {
              const RU = this[UU];
              RU instanceof AR && (this._propertyList[UU] = RU)
            }
            Object.keys(this._propertyList).forEach((UU => {
              const RU = this._propertyList[UU];
              let gU = this._uniformsList[RU.targetUniformName];
              gU ? gU.numComponents !== RU.targetUniformComponentNum ? oU.e.Error(`Uniform ${RU.targetUniformName} already exists of size ${gU.numComponents}, but trying to set it to ${RU.targetUniformComponentNum}.`) : gU.requiredDefine !== RU.requiredDefine && (gU.requiredDefine = void 0) : (gU = new iR(RU.targetUniformName, RU.targetUniformComponentNum), gU.requiredDefine = RU.requiredDefine, this._uniformsList[RU.targetUniformName] = gU), "" === gU.firstLinkedKey && (gU.firstLinkedKey = RU.name), gU.linkedProperties[RU.name] = RU
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const UU of Object.getOwnPropertyNames(this)) {
              const RU = this[UU];
              RU instanceof zR && (this._samplersList[UU] = RU)
            }
            for (const UU in this._samplersList) {
              const RU = this._samplersList[UU].textureDefine;
              this._samplerDefines[RU] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[RU + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[RU + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(LU.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(LU.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(UU) {
            this._transparencyMode !== UU && (this._transparencyMode = UU, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== EU.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(UU) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(UU)
          }
          clone(RU) {
            let gU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const pU = JR.b.Clone((() => new UU(RU, this.aZ())), this, {
              cloneTexturesOnlyOnce: gU
            });
            return pU.id = RU, pU.name = RU, this.stencil.copyTo(pU.stencil), this._clonePlugins(pU, tU), pU
          }
          serialize() {
            const UU = super.serialize();
            return UU.customType = "BABYLON.OpenPBRMaterial", UU
          }
          static Parse(RU, gU, tU) {
            const pU = JR.b.Parse((() => new UU(RU.name, gU)), RU, gU, tU);
            return RU.stencil && pU.stencil.parse(RU.stencil, gU, tU), EU.c._ParsePlugins(RU, pU, gU, tU), pU
          }
          forceCompilation(UU, RU, gU) {
            const tU = {
              clipPlane: !1,
              useInstances: !1,
              ...gU
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const gU = new LR({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                pU = this._prepareEffect(UU, UU, gU, void 0, void 0, tU.useInstances, tU.clipPlane);
              this._onEffectCreatedObservable && (kR.effect = pU, kR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(kR)), pU.isReady() ? RU && RU(this) : pU.onCompileObservable.add((() => {
                RU && RU(this)
              }))
            })()
          }
          isReadyForSubMesh(RU, gU, tU) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const pU = gU._drawWrapper;
            if (pU.effect && this.isFrozen && pU._wasPreviouslyReady && pU._wasPreviouslyUsingInstances === tU) return !0;
            gU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gU.materialDefines = new LR({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const EU = gU.materialDefines;
            if (this._isReadyForSubMesh(gU)) return !0;
            const PU = this.aZ(),
              TU = PU.WC();
            if (EU._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, PU.texturesEnabled)) {
              for (const UU in this._samplersList) {
                const RU = this._samplersList[UU];
                if (RU.value && !RU.value.isReadyOrNotBlocking()) return !1
              }
              const RU = this._getRadianceTexture();
              if (RU && LU.b.ReflectionTextureEnabled) {
                if (!RU.isReadyOrNotBlocking()) return !1;
                if (RU.irradianceTexture) {
                  if (!RU.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!RU.sphericalPolynomial && RU.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && LU.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && LU.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && LU.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (UU._noiseTextures[PU.uniqueId] && !UU._noiseTextures[PU.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = EU, this._eventInfo.subMesh = gU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (EU._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (EU.AREALIGHTUSED)
              for (let UU = 0; UU < RU.lightSources.length; UU++)
                if (!RU.lightSources[UU]._isReady()) return !1;
            if (TU.getCaps().standardDerivatives || RU.isVerticesDataPresent(SU.l.NormalKind) || (RU.createNormals(!0), oU.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + RU.name)), !(0, lU.b)(PU, RU, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const qU = gU.effect,
              KU = EU._areLightsDisposed,
              cU = this._prepareEffect(RU, gU.getRenderingMesh(), EU, this.onCompiled, this.onError, tU, null);
            let GU = !1;
            if (cU)
              if (this._onEffectCreatedObservable && (kR.effect = cU, kR.subMesh = gU, this._onEffectCreatedObservable.notifyObservers(kR)), this.allowShaderHotSwapping && qU && !cU.isReady()) {
                if (EU.markAsUnprocessed(), GU = this.isFrozen, KU) return EU._areLightsDisposed = !0, !1
              } else PU.resetCachedMaterial(), gU.setEffect(cU, EU, this._materialContext);
            return !(!gU.effect || !gU.effect.isReady()) && (EU._renderId = PU.getRenderId(), pU._wasPreviouslyReady = !GU, pU._wasPreviouslyUsingInstances = !!tU, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const UU = this._uniformBuffer;
            UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("vLightingIntensity", 4), UU.addUniform("pointSize", 1), UU.addUniform("vDebugMode", 2), UU.addUniform("renderTargetSize", 2), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), UU.addUniform("backgroundRefractionMatrix", 16), UU.addUniform("vBackgroundRefractionInfos", 3), (0, lU.eb)(UU, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((RU => {
              UU.addUniform(RU.name, RU.numComponents)
            })), Object.values(this._samplersList).forEach((RU => {
              UU.addUniform(RU.samplerInfoName, 2), UU.addUniform(RU.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(UU, RU, gU, tU) {
            if (0 === this.geometryThickness) UU.updateFloat("vGeometryThickness", 0);
            else {
              tU.getRenderingMesh().getWorldMatrix().decompose(HU.h.xC[0]);
              const RU = Math.max(Math.abs(HU.h.xC[0].x), Math.abs(HU.h.xC[0].y), Math.abs(HU.h.xC[0].z));
              UU.updateFloat("vGeometryThickness", this.geometryThickness * RU)
            }
          }
          bindForSubMesh(RU, gU, tU) {
            const pU = this.aZ(),
              EU = tU.materialDefines;
            if (!EU) return;
            const PU = tU.effect;
            if (!PU) return;
            this._activeEffect = PU, gU.getMeshUniformBuffer().bindToEffect(PU, "Mesh"), gU.transferToEffect(RU);
            const TU = pU.WC();
            this._uniformBuffer.bindToEffect(PU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pU, gU, RU, this.isFrozen), uR.e.Bind(TU.currentRenderPassId, this._activeEffect, gU, RU, this);
            const qU = pU.activeCamera;
            qU ? this._uniformBuffer.updateFloat4("cameraInfo", qU.minZ, qU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const KU = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", KU[0], KU[1], KU[2], KU[3]), this._eventInfo.subMesh = tU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), EU.OBJECTSPACE_NORMALMAP && (RU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const cU = this._mustRebind(pU, PU, tU, gU.visibility),
              GU = TU._features.needToAlwaysBindUniformBuffers;
            (0, lU.c)(gU, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, GR.c)(this._activeEffect, this._vertexPullingMetadata);
            const jU = this._uniformBuffer;
            if (cU) {
              this.bindViewProjection(PU);
              const RU = this._getRadianceTexture();
              if (!jU.useUbo || !this.isFrozen || !jU.isSync || tU._drawWrapper._forceRebindOnNextCall) {
                if (pU.texturesEnabled) {
                  for (const UU in this._samplersList) {
                    const RU = this._samplersList[UU];
                    RU.value && (jU.updateFloat2(RU.samplerInfoName, RU.value.coordinatesIndex, RU.value.level), (0, lU.x)(RU.value, jU, RU.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (pU._mirroredCameraPosition ? jU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : jU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, lU.h)(pU, EU, jU, AU.e.White(), RU, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && jU.updateFloat("pointSize", this.pointSize);
                const UU = this._uniformsArray;
                for (let RU = 0, gU = UU.length; RU < gU; RU++) {
                  const gU = UU[RU];
                  (void 0 === gU.requiredDefine || EU[gU.requiredDefine]) && (4 === gU.numComponents ? (gU.populateVectorFromLinkedProperties(HU.h.Vector4[0]), jU.updateVector4(gU.name, HU.h.Vector4[0])) : 3 === gU.numComponents ? (gU.populateVectorFromLinkedProperties(HU.h.xC[0]), jU.updateVector3(gU.name, HU.h.xC[0])) : 2 === gU.numComponents ? (gU.populateVectorFromLinkedProperties(HU.h.Vector2[0]), jU.updateFloat2(gU.name, HU.h.Vector2[0].x, HU.h.Vector2[0].y)) : 1 === gU.numComponents && jU.updateFloat(gU.name, gU.linkedProperties[gU.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * pU.environmentIntensity, this._lightingInfos.w = 1, jU.updateVector4("vLightingIntensity", this._lightingInfos), jU.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (pU.texturesEnabled) {
                for (const UU in this._samplersList) {
                  const RU = this._samplersList[UU];
                  RU.value && jU.setTexture(RU.samplerName, RU.value)
                }
                if ((0, lU.j)(pU, EU, jU, RU, this.realTimeFiltering), EU.ENVIRONMENTBRDF && jU.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), EU.FUZZENVIRONMENTBRDF && jU.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), EU.REFRACTED_BACKGROUND && (jU.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), jU.p_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), HU.h.xC[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), jU.updateVector3("vBackgroundRefractionInfos", HU.h.xC[1])), (EU.ANISOTROPIC || EU.FUZZ || EU.REFRACTED_BACKGROUND || EU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && jU.setTexture("blueNoiseSampler", UU._noiseTextures[this.aZ().uniqueId]), EU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const UU = this.sssIrradianceTexture.getSize().width,
                    RU = this.sssIrradianceTexture.getSize().height;
                  jU.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), jU.setTexture("sceneDepthSampler", this.sssDepthTexture), jU.updateFloat2("renderTargetSize", UU, RU)
                }
              }
              this.aZ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gU) && this.aZ().depthPeelingRenderer.bind(PU), this._eventInfo.subMesh = tU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, cR.f)(this._activeEffect, this, pU), this.bindEyePosition(PU)
            } else GU && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, pU, pU.WC(), tU), !cU && this.isFrozen && !GU || !pU.lightsEnabled || this._disableLighting || (0, lU.n)(pU, gU, this._activeEffect, EU, this._maxSimultaneousLights), !cU && this.isFrozen || (this.bindView(PU), (0, lU.g)(pU, gU, this._activeEffect, !0), EU.NUM_MORPH_INFLUENCERS && (0, lU.s)(gU, this._activeEffect), EU.BAKED_VERTEX_ANIMATION_TEXTURE && gU.bakedVertexAnimationManager?.bind(PU, EU.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, lU.q)(EU, this._activeEffect, pU)), this._afterBind(gU, this._activeEffect, tU), jU.update()
          }
          getAnimatables() {
            const UU = super.getAnimatables();
            for (const RU in this._samplersList) {
              const gU = this._samplersList[RU];
              gU.value && gU.value.animations && gU.value.animations.length > 0 && UU.push(gU.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && UU.push(this._radianceTexture), UU
          }
          getActiveTextures() {
            const UU = super.getActiveTextures();
            for (const RU in this._samplersList) {
              const gU = this._samplersList[RU];
              gU.value && UU.push(gU.value)
            }
            return this._radianceTexture && UU.push(this._radianceTexture), UU
          }
          hasTexture(UU) {
            if (super.hasTexture(UU)) return !0;
            for (const RU in this._samplersList) {
              if (this._samplersList[RU].value === UU) return !0
            }
            return this._radianceTexture === UU
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(UU, RU) {
            if (this._breakShaderLoadedCheck = !0, RU) {
              this._environmentBRDFTexture && this.aZ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.aZ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const UU in this._samplersList) {
                const RU = this._samplersList[UU];
                RU.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, RU)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.aZ().environmentTexture
          }
          _prepareEffect(RU, gU, tU) {
            let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(RU, gU, tU, PU, TU), !tU.isDirty) return null;
            tU.markAsProcessed();
            const qU = this.aZ().WC(),
              KU = new NU.c;
            let cU = 0;
            tU.USESPHERICALINVERTEX && KU.addFallback(cU++, "USESPHERICALINVERTEX"), tU.FOG && KU.addFallback(cU, "FOG"), tU.SPECULARAA && KU.addFallback(cU, "SPECULARAA"), tU.POINTSIZE && KU.addFallback(cU, "POINTSIZE"), tU.LOGARITHMICDEPTH && KU.addFallback(cU, "LOGARITHMICDEPTH"), tU.PARALLAX && KU.addFallback(cU, "PARALLAX"), tU.PARALLAX_RHS && KU.addFallback(cU, "PARALLAX_RHS"), tU.PARALLAXOCCLUSION && KU.addFallback(cU++, "PARALLAXOCCLUSION"), tU.ENVIRONMENTBRDF && KU.addFallback(cU++, "ENVIRONMENTBRDF"), tU.TANGENT && KU.addFallback(cU++, "TANGENT"), cU = (0, lU.z)(tU, KU, this._maxSimultaneousLights, cU), tU.SPECULARTERM && KU.addFallback(cU++, "SPECULARTERM"), tU.USESPHERICALFROMREFLECTIONMAP && KU.addFallback(cU++, "USESPHERICALFROMREFLECTIONMAP"), tU.USEIRRADIANCEMAP && KU.addFallback(cU++, "USEIRRADIANCEMAP"), tU.NORMAL && KU.addFallback(cU++, "NORMAL"), tU.VERTEXCOLOR && KU.addFallback(cU++, "VERTEXCOLOR"), tU.MORPHTARGETS && KU.addFallback(cU++, "MORPHTARGETS"), tU.MULTIVIEW && KU.addFallback(0, "MULTIVIEW");
            const GU = [SU.l.PositionKind];
            tU.NORMAL && GU.push(SU.l.NormalKind), tU.TANGENT && GU.push(SU.l.TangentKind);
            for (let UU = 1; UU <= 6; ++UU) tU["UV" + UU] && GU.push(`uv${1===UU?"":UU}`);
            tU.VERTEXCOLOR && GU.push(SU.l.ColorKind), (0, lU.C)(GU, RU, tU, KU), (0, lU.F)(GU, tU), (0, lU.G)(GU, RU, tU), (0, lU.A)(GU, RU, tU);
            let jU = "openpbr";
            const uU = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const UU in this._uniformsList) uU.push(UU);
            const CU = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            tU.FUZZENVIRONMENTBRDF && CU.push("environmentFuzzBrdfSampler"), tU.REFRACTED_BACKGROUND && CU.push("backgroundRefractionSampler"), (tU.ANISOTROPIC || tU.FUZZ || tU.REFRACTED_BACKGROUND || tU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && CU.push("blueNoiseSampler"), tU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (CU.push("sceneIrradianceSampler"), CU.push("sceneDepthSampler"));
            for (const UU in this._samplersList) {
              const RU = this._samplersList[UU];
              CU.push(RU.samplerName), uU.push(RU.samplerInfoName), uU.push(RU.samplerMatrixName)
            }(0, lU.gb)(uU, CU, !0);
            const hU = ["Material", "Scene", "Mesh"],
              QU = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: tU.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = KU, this._eventInfo.fallbackRank = cU, this._eventInfo.defines = tU, this._eventInfo.uniforms = uU, this._eventInfo.attributes = GU, this._eventInfo.samplers = CU, this._eventInfo.uniformBuffersNames = hU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RU, this._eventInfo.indexParameters = QU, this._callbackPluginEventGeneric(128, this._eventInfo), uR.e.AddUniformsAndSamplers(uU, CU), iU.b.AddUniforms(uU), iU.b.AddSamplers(CU), (0, cR.c)(uU), this._useVertexPulling) {
              const UU = gU?.geometry;
              UU && (this._vertexPullingMetadata = (0, GR.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, RU) => {
                uU.push(`vp_${RU}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            MU.e && (MU.e.PrepareUniforms(uU, tU), MU.e.PrepareSamplers(CU, tU)), (0, lU.ib)({
              uniformsNames: uU,
              uniformBuffersNames: hU,
              samplers: CU,
              defines: tU,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const eU = {};
            this.customShaderNameResolve && (jU = this.customShaderNameResolve(jU, uU, hU, CU, tU, GU, eU));
            const WU = tU.toString(),
              fU = qU.createEffect(jU, {
                attributes: GU,
                uniformsNames: uU,
                uniformBuffersNames: hU,
                samplers: CU,
                defines: WU,
                fallbacks: KU,
                onCompiled: pU,
                onError: EU,
                indexParameters: QU,
                processFinalCode: eU.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: tU.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, qU);
            return this._eventInfo.customCode = void 0, fU
          }
          _prepareDefines(RU, gU, tU) {
            let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              PU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const TU = gU.hasThinInstances,
              qU = this.aZ(),
              KU = qU.WC();
            (0, lU.Q)(qU, RU, tU, !0, this._maxSimultaneousLights, this._disableLighting), tU._needNormals = !0, (0, lU.Y)(qU, tU);
            const cU = this.needAlphaBlendingForMesh(RU) && this.aZ().useOrderIndependentTransparency;
            if ((0, lU.cb)(qU, tU, this.canRenderToMRT && !cU), (0, lU.$)(qU, tU, cU), uR.e.PrepareDefines(KU.currentRenderPassId, RU, tU), tU._areTexturesDirty) {
              tU._needUVs = !1;
              for (let UU = 1; UU <= 6; ++UU) tU["MAINUV" + UU] = !1;
              if (qU.texturesEnabled) {
                for (const gU in this._samplersList) {
                  const UU = this._samplersList[gU];
                  UU.value ? ((0, lU.T)(UU.value, tU, UU.textureDefine), tU[UU.textureDefine + "_GAMMA"] = UU.value.gammaSpace) : tU[UU.textureDefine] = !1
                }
                const UU = this._getRadianceTexture(),
                  RU = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || KU.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, lU.P)(qU, UU, tU, this.realTimeFiltering, this.realTimeFilteringQuality, !RU), this._baseMetalnessTexture && (tU.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), tU.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, tU.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, tU.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, tU.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, tU.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, tU.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, tU.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, tU.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, tU.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, tU.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, tU.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && LU.b.DiffuseTextureEnabled ? (tU.PARALLAX = !0, tU.PARALLAX_RHS = qU.useRightHandedSystem, tU.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : tU.PARALLAX = !1, tU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (tU.PARALLAX = !1, tU.PARALLAX_RHS = !1, tU.PARALLAXOCCLUSION = !1, tU.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && LU.b.ReflectionTextureEnabled ? (tU.ENVIRONMENTBRDF = !0, tU.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (tU.ENVIRONMENTBRDF = !1, tU.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? tU.FUZZENVIRONMENTBRDF = !0 : tU.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  tU.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && LU.b.RefractionTextureEnabled, tU.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, tU.REFRACTED_LIGHTS = !0;
                  const UU = this._getRadianceTexture();
                  UU ? (tU.REFRACTED_ENVIRONMENT = LU.b.RefractionTextureEnabled, tU.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.aZ().useRightHandedSystem ? !UU.invertZ : UU.invertZ, tU.REFRACTED_ENVIRONMENT_LOCAL_CUBE = UU.isCube && UU.boundingBoxSize) : tU.REFRACTED_ENVIRONMENT = !1
                } else tU.REFRACTED_BACKGROUND = !1, tU.REFRACTED_LIGHTS = !1, tU.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? tU.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : tU.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === EU.c.LIGHTFALLOFF_STANDARD ? (tU.USEPHYSICALLIGHTFALLOFF = !1, tU.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === EU.c.LIGHTFALLOFF_GLTF ? (tU.USEPHYSICALLIGHTFALLOFF = !1, tU.USEGLTFLIGHTFALLOFF = !0) : (tU.USEPHYSICALLIGHTFALLOFF = !0, tU.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? tU.TWOSIDEDLIGHTING = !0 : tU.TWOSIDEDLIGHTING = !1, tU.MIRRORED = !!qU._mirroredCameraPosition, tU.SPECULARAA = KU.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(tU._areTexturesDirty || tU._areMiscDirty) && (tU.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, tU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, tU.ALPHABLEND = this.needAlphaBlendingForMesh(RU)), tU._areTexturesDirty && (tU.TEXTURE_REPETITION_MODE = KU.version > 1 || KU.isWebGPU ? this.textureRepetitionMode : 0), tU._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(tU), tU.FORCENORMALFORWARD = this._forceNormalForward, tU.RADIANCEOCCLUSION = this._useRadianceOcclusion, tU.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && UU._noiseTextures[qU.uniqueId] && LU.b.ReflectionTextureEnabled ? (tU.ANISOTROPIC = !0, RU.isVerticesDataPresent(SU.l.TangentKind) || (tU._needUVs = !0, tU.MAINUV1 = !0), this._useGltfStyleAnisotropy && (tU.USE_GLTF_STYLE_ANISOTROPY = !0), tU.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, tU.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (tU.ANISOTROPIC = !1, tU.USE_GLTF_STYLE_ANISOTROPY = !1, tU.ANISOTROPIC_BASE = !1, tU.ANISOTROPIC_COAT = !1), tU.THIN_FILM = this.thinFilmWeight > 0, tU.IRIDESCENCE = this.thinFilmWeight > 0, tU.DISPERSION = this.transmissionDispersionScale > 0, tU.SCATTERING = this.hasScattering;
            if (tU.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, tU.TRANSMISSION_SLAB = this.transmissionWeight > 0, tU.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, tU.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !tU.PREPASS && (tU.SUBSURFACE_SLAB || tU.TRANSMISSION_SLAB_VOLUME)) {
              let UU = !1;
              if (!this.sssIrradianceTexture && qU.geometryBufferRenderer) {
                const RU = qU.geometryBufferRenderer.getTextureIndex(sR.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = qU.geometryBufferRenderer.getGBuffer().textures[RU], UU = !0
              }
              if (!this.sssDepthTexture && qU.geometryBufferRenderer) {
                const RU = qU.geometryBufferRenderer.getTextureIndex(sR.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = qU.geometryBufferRenderer.getGBuffer().textures[RU], UU = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (tU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, UU && (tU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            tU.FUZZ = this.fuzzWeight > 0 && LU.b.ReflectionTextureEnabled, tU.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, tU.FUZZ ? (RU.isVerticesDataPresent(SU.l.TangentKind) || (tU._needUVs = !0, tU.MAINUV1 = !0), this._environmentFuzzBRDFTexture = XU(this.aZ()), tU.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, tU.FUZZENVIRONMENTBRDF = !1, tU.FUZZ_IBL_SAMPLES = 0), tU._areMiscDirty && ((0, lU.X)(RU, qU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RU), tU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gU, this._isVertexOutputInvariant), tU.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !RU.isVerticesDataPresent(SU.l.NormalKind), tU.DEBUGMODE = this._debugMode), (0, lU.O)(qU, KU, this, tU, !!pU, PU, TU), this._eventInfo.defines = tU, this._eventInfo.mesh = RU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, lU.K)(RU, tU, !0, !0, !0, this._transparencyMode !== EU.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, RU = new WeakMap, tU = new WeakMap, pU = new WeakMap, PU = new WeakMap, TU = new WeakMap, qU = new WeakMap, KU = new WeakMap, cU = new WeakMap, GU = new WeakMap, jU = new WeakMap, uU = new WeakMap, CU = new WeakMap, hU = new WeakMap, QU = new WeakMap, eU = new WeakMap, WU = new WeakMap, fU = new WeakMap, xU = new WeakMap, mU = new WeakMap, IU = new WeakMap, JU = new WeakMap, wU = new WeakMap, YU = new WeakMap, BU = new WeakMap, VU = new WeakMap, rU = new WeakMap, dU = new WeakMap, sU = new WeakMap, yU = new WeakMap, kU = new WeakMap, FU = new WeakMap, zU = new WeakMap, DU = new WeakMap, OU = new WeakMap, UR = new WeakMap, RR = new WeakMap, gR = new WeakMap, tR = new WeakMap, pR = new WeakMap, ER = new WeakMap, PR = new WeakMap, TR = new WeakMap, qR = new WeakMap, KR = new WeakMap, CR = new WeakMap, hR = new WeakMap, QR = new WeakMap, eR = new WeakMap, WR = new WeakMap, fR = new WeakMap, xR = new WeakMap, mR = new WeakMap, IR = new WeakMap, nR = new WeakMap, bR = new WeakMap, oR = new WeakMap, ZR = new WeakMap, aR = new WeakMap, YR = new WeakMap, BR = new WeakMap, VR = new WeakMap, rR = new WeakMap, XR = new WeakMap, vR = new WeakMap, dR = new WeakMap, HR = new WeakMap, SR = new WeakMap, yR = new WeakMap, FR = new WeakMap, MR = new WeakMap, DR = new WeakMap, lR = new WeakMap, OR = new WeakMap, Ug = new WeakMap, Rg = new WeakMap, gg = new WeakMap, tg = new WeakMap, pg = new WeakMap, Eg = new WeakMap, Pg = new WeakMap, Tg = new WeakMap, qg = new WeakMap, Kg = new WeakMap, cg = new WeakMap, Gg = new WeakMap, jg = new WeakMap, ug = new WeakMap, Cg = new WeakMap, hg = new WeakMap, Qg = new WeakMap, eg = new WeakMap, Wg = new WeakMap, fg = new WeakMap, xg = new WeakMap, mg = new WeakMap, Ig = new WeakMap, Jg = new WeakMap, wg = new WeakMap, ng = new WeakMap, bg = new WeakMap, og = new WeakMap, Zg = new WeakMap, (() => {
          const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vp[Symbol.metadata] ?? null) : void 0;
          ag = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Yg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Bg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], rg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Xg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], vg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], dg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Hg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Sg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], sg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], yg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], kg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Fg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ig = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ag = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], zg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Mg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Dg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Lg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ng = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], lg = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Og = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ut = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], gt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], tt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], pt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Et = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Pt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Tt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], qt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Kt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ct = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Gt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], jt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ut = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ct = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ht = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Qt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], et = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Wt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ft = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], xt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], mt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], It = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], nt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], bt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], ot = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Zt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Yt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Bt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Vt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], rt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Xt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], vt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], dt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ht = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], St = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], st = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], kt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ft = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], it = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], At = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], zt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Dt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Nt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Ot = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, bU.d)("_markAllSubMeshesAsTexturesDirty")], Rp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], gp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], tp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], pp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ep = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Tp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], qp = [(0, bU.K)()], Kp = [(0, bU.K)()], cp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Gp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], jp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Cp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], hp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsLightsDirty")], Qp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ep = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsLightsDirty")], Wp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], fp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], xp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], mp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Jp = [(0, bU.e)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], np = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], bp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], op = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Zp = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], ap = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], Yp = [(0, bU.e)("_markAllSubMeshesAsMiscDirty")], Bp = [(0, bU.K)()], (0, nU.i)(UU, null, ag, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseWeight" in UU,
              get: UU => UU.baseWeight,
              set: (UU, RU) => {
                UU.baseWeight = RU
              }
            },
            metadata: RU
          }, Xp, vp), (0, nU.i)(UU, null, Yg, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseWeightTexture" in UU,
              get: UU => UU.baseWeightTexture,
              set: (UU, RU) => {
                UU.baseWeightTexture = RU
              }
            },
            metadata: RU
          }, dp, Hp), (0, nU.i)(UU, null, Bg, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseColor" in UU,
              get: UU => UU.baseColor,
              set: (UU, RU) => {
                UU.baseColor = RU
              }
            },
            metadata: RU
          }, Sp, sp), (0, nU.i)(UU, null, Vg, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseColorTexture" in UU,
              get: UU => UU.baseColorTexture,
              set: (UU, RU) => {
                UU.baseColorTexture = RU
              }
            },
            metadata: RU
          }, yp, kp), (0, nU.i)(UU, null, rg, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseDiffuseRoughness" in UU,
              get: UU => UU.baseDiffuseRoughness,
              set: (UU, RU) => {
                UU.baseDiffuseRoughness = RU
              }
            },
            metadata: RU
          }, Fp, ip), (0, nU.i)(UU, null, Xg, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseDiffuseRoughnessTexture" in UU,
              get: UU => UU.baseDiffuseRoughnessTexture,
              set: (UU, RU) => {
                UU.baseDiffuseRoughnessTexture = RU
              }
            },
            metadata: RU
          }, Ap, zp), (0, nU.i)(UU, null, vg, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseMetalness" in UU,
              get: UU => UU.baseMetalness,
              set: (UU, RU) => {
                UU.baseMetalness = RU
              }
            },
            metadata: RU
          }, Mp, Dp), (0, nU.i)(UU, null, dg, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseMetalnessTexture" in UU,
              get: UU => UU.baseMetalnessTexture,
              set: (UU, RU) => {
                UU.baseMetalnessTexture = RU
              }
            },
            metadata: RU
          }, Lp, Np), (0, nU.i)(UU, null, Hg, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularWeight" in UU,
              get: UU => UU.specularWeight,
              set: (UU, RU) => {
                UU.specularWeight = RU
              }
            },
            metadata: RU
          }, lp, Op), (0, nU.i)(UU, null, Sg, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularWeightTexture" in UU,
              get: UU => UU.specularWeightTexture,
              set: (UU, RU) => {
                UU.specularWeightTexture = RU
              }
            },
            metadata: RU
          }, UE, RE), (0, nU.i)(UU, null, sg, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColor" in UU,
              get: UU => UU.specularColor,
              set: (UU, RU) => {
                UU.specularColor = RU
              }
            },
            metadata: RU
          }, gE, tE), (0, nU.i)(UU, null, yg, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColorTexture" in UU,
              get: UU => UU.specularColorTexture,
              set: (UU, RU) => {
                UU.specularColorTexture = RU
              }
            },
            metadata: RU
          }, pE, EE), (0, nU.i)(UU, null, kg, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughness" in UU,
              get: UU => UU.specularRoughness,
              set: (UU, RU) => {
                UU.specularRoughness = RU
              }
            },
            metadata: RU
          }, PE, TE), (0, nU.i)(UU, null, Fg, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessTexture" in UU,
              get: UU => UU.specularRoughnessTexture,
              set: (UU, RU) => {
                UU.specularRoughnessTexture = RU
              }
            },
            metadata: RU
          }, qE, KE), (0, nU.i)(UU, null, ig, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessAnisotropy" in UU,
              get: UU => UU.specularRoughnessAnisotropy,
              set: (UU, RU) => {
                UU.specularRoughnessAnisotropy = RU
              }
            },
            metadata: RU
          }, cE, GE), (0, nU.i)(UU, null, Ag, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessAnisotropyTexture" in UU,
              get: UU => UU.specularRoughnessAnisotropyTexture,
              set: (UU, RU) => {
                UU.specularRoughnessAnisotropyTexture = RU
              }
            },
            metadata: RU
          }, jE, uE), (0, nU.i)(UU, null, zg, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularIor" in UU,
              get: UU => UU.specularIor,
              set: (UU, RU) => {
                UU.specularIor = RU
              }
            },
            metadata: RU
          }, CE, hE), (0, nU.i)(UU, null, Mg, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionWeight" in UU,
              get: UU => UU.transmissionWeight,
              set: (UU, RU) => {
                UU.transmissionWeight = RU
              }
            },
            metadata: RU
          }, QE, eE), (0, nU.i)(UU, null, Dg, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionWeightTexture" in UU,
              get: UU => UU.transmissionWeightTexture,
              set: (UU, RU) => {
                UU.transmissionWeightTexture = RU
              }
            },
            metadata: RU
          }, WE, fE), (0, nU.i)(UU, null, Lg, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionColor" in UU,
              get: UU => UU.transmissionColor,
              set: (UU, RU) => {
                UU.transmissionColor = RU
              }
            },
            metadata: RU
          }, xE, mE), (0, nU.i)(UU, null, Ng, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionColorTexture" in UU,
              get: UU => UU.transmissionColorTexture,
              set: (UU, RU) => {
                UU.transmissionColorTexture = RU
              }
            },
            metadata: RU
          }, IE, JE), (0, nU.i)(UU, null, lg, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDepth" in UU,
              get: UU => UU.transmissionDepth,
              set: (UU, RU) => {
                UU.transmissionDepth = RU
              }
            },
            metadata: RU
          }, wE, nE), (0, nU.i)(UU, null, Og, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDepthTexture" in UU,
              get: UU => UU.transmissionDepthTexture,
              set: (UU, RU) => {
                UU.transmissionDepthTexture = RU
              }
            },
            metadata: RU
          }, bE, oE), (0, nU.i)(UU, null, Ut, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatter" in UU,
              get: UU => UU.transmissionScatter,
              set: (UU, RU) => {
                UU.transmissionScatter = RU
              }
            },
            metadata: RU
          }, ZE, aE), (0, nU.i)(UU, null, Rt, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatterTexture" in UU,
              get: UU => UU.transmissionScatterTexture,
              set: (UU, RU) => {
                UU.transmissionScatterTexture = RU
              }
            },
            metadata: RU
          }, YE, BE), (0, nU.i)(UU, null, gt, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatterAnisotropy" in UU,
              get: UU => UU.transmissionScatterAnisotropy,
              set: (UU, RU) => {
                UU.transmissionScatterAnisotropy = RU
              }
            },
            metadata: RU
          }, VE, rE), (0, nU.i)(UU, null, tt, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionScale" in UU,
              get: UU => UU.transmissionDispersionScale,
              set: (UU, RU) => {
                UU.transmissionDispersionScale = RU
              }
            },
            metadata: RU
          }, XE, vE), (0, nU.i)(UU, null, pt, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionScaleTexture" in UU,
              get: UU => UU.transmissionDispersionScaleTexture,
              set: (UU, RU) => {
                UU.transmissionDispersionScaleTexture = RU
              }
            },
            metadata: RU
          }, dE, HE), (0, nU.i)(UU, null, Et, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionAbbeNumber" in UU,
              get: UU => UU.transmissionDispersionAbbeNumber,
              set: (UU, RU) => {
                UU.transmissionDispersionAbbeNumber = RU
              }
            },
            metadata: RU
          }, SE, sE), (0, nU.i)(UU, null, Pt, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceWeight" in UU,
              get: UU => UU.subsurfaceWeight,
              set: (UU, RU) => {
                UU.subsurfaceWeight = RU
              }
            },
            metadata: RU
          }, yE, kE), (0, nU.i)(UU, null, Tt, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceWeightTexture" in UU,
              get: UU => UU.subsurfaceWeightTexture,
              set: (UU, RU) => {
                UU.subsurfaceWeightTexture = RU
              }
            },
            metadata: RU
          }, FE, iE), (0, nU.i)(UU, null, qt, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceColor" in UU,
              get: UU => UU.subsurfaceColor,
              set: (UU, RU) => {
                UU.subsurfaceColor = RU
              }
            },
            metadata: RU
          }, AE, zE), (0, nU.i)(UU, null, Kt, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceColorTexture" in UU,
              get: UU => UU.subsurfaceColorTexture,
              set: (UU, RU) => {
                UU.subsurfaceColorTexture = RU
              }
            },
            metadata: RU
          }, ME, DE), (0, nU.i)(UU, null, ct, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadius" in UU,
              get: UU => UU.subsurfaceRadius,
              set: (UU, RU) => {
                UU.subsurfaceRadius = RU
              }
            },
            metadata: RU
          }, LE, NE), (0, nU.i)(UU, null, Gt, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadiusScale" in UU,
              get: UU => UU.subsurfaceRadiusScale,
              set: (UU, RU) => {
                UU.subsurfaceRadiusScale = RU
              }
            },
            metadata: RU
          }, lE, OE), (0, nU.i)(UU, null, jt, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadiusScaleTexture" in UU,
              get: UU => UU.subsurfaceRadiusScaleTexture,
              set: (UU, RU) => {
                UU.subsurfaceRadiusScaleTexture = RU
              }
            },
            metadata: RU
          }, UP, RP), (0, nU.i)(UU, null, ut, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceScatterAnisotropy" in UU,
              get: UU => UU.subsurfaceScatterAnisotropy,
              set: (UU, RU) => {
                UU.subsurfaceScatterAnisotropy = RU
              }
            },
            metadata: RU
          }, gP, tP), (0, nU.i)(UU, null, Ct, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatWeight" in UU,
              get: UU => UU.coatWeight,
              set: (UU, RU) => {
                UU.coatWeight = RU
              }
            },
            metadata: RU
          }, pP, EP), (0, nU.i)(UU, null, ht, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatWeightTexture" in UU,
              get: UU => UU.coatWeightTexture,
              set: (UU, RU) => {
                UU.coatWeightTexture = RU
              }
            },
            metadata: RU
          }, PP, TP), (0, nU.i)(UU, null, Qt, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatColor" in UU,
              get: UU => UU.coatColor,
              set: (UU, RU) => {
                UU.coatColor = RU
              }
            },
            metadata: RU
          }, qP, KP), (0, nU.i)(UU, null, et, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatColorTexture" in UU,
              get: UU => UU.coatColorTexture,
              set: (UU, RU) => {
                UU.coatColorTexture = RU
              }
            },
            metadata: RU
          }, cP, GP), (0, nU.i)(UU, null, Wt, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughness" in UU,
              get: UU => UU.coatRoughness,
              set: (UU, RU) => {
                UU.coatRoughness = RU
              }
            },
            metadata: RU
          }, jP, uP), (0, nU.i)(UU, null, ft, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessTexture" in UU,
              get: UU => UU.coatRoughnessTexture,
              set: (UU, RU) => {
                UU.coatRoughnessTexture = RU
              }
            },
            metadata: RU
          }, CP, hP), (0, nU.i)(UU, null, xt, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessAnisotropy" in UU,
              get: UU => UU.coatRoughnessAnisotropy,
              set: (UU, RU) => {
                UU.coatRoughnessAnisotropy = RU
              }
            },
            metadata: RU
          }, QP, eP), (0, nU.i)(UU, null, mt, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessAnisotropyTexture" in UU,
              get: UU => UU.coatRoughnessAnisotropyTexture,
              set: (UU, RU) => {
                UU.coatRoughnessAnisotropyTexture = RU
              }
            },
            metadata: RU
          }, WP, fP), (0, nU.i)(UU, null, It, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatIor" in UU,
              get: UU => UU.coatIor,
              set: (UU, RU) => {
                UU.coatIor = RU
              }
            },
            metadata: RU
          }, xP, mP), (0, nU.i)(UU, null, Jt, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatDarkening" in UU,
              get: UU => UU.coatDarkening,
              set: (UU, RU) => {
                UU.coatDarkening = RU
              }
            },
            metadata: RU
          }, IP, JP), (0, nU.i)(UU, null, wt, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatDarkeningTexture" in UU,
              get: UU => UU.coatDarkeningTexture,
              set: (UU, RU) => {
                UU.coatDarkeningTexture = RU
              }
            },
            metadata: RU
          }, wP, nP), (0, nU.i)(UU, null, nt, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzWeight" in UU,
              get: UU => UU.fuzzWeight,
              set: (UU, RU) => {
                UU.fuzzWeight = RU
              }
            },
            metadata: RU
          }, bP, oP), (0, nU.i)(UU, null, bt, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzWeightTexture" in UU,
              get: UU => UU.fuzzWeightTexture,
              set: (UU, RU) => {
                UU.fuzzWeightTexture = RU
              }
            },
            metadata: RU
          }, ZP, aP), (0, nU.i)(UU, null, ot, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzColor" in UU,
              get: UU => UU.fuzzColor,
              set: (UU, RU) => {
                UU.fuzzColor = RU
              }
            },
            metadata: RU
          }, YP, BP), (0, nU.i)(UU, null, Zt, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzColorTexture" in UU,
              get: UU => UU.fuzzColorTexture,
              set: (UU, RU) => {
                UU.fuzzColorTexture = RU
              }
            },
            metadata: RU
          }, VP, rP), (0, nU.i)(UU, null, Yt, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzRoughness" in UU,
              get: UU => UU.fuzzRoughness,
              set: (UU, RU) => {
                UU.fuzzRoughness = RU
              }
            },
            metadata: RU
          }, XP, vP), (0, nU.i)(UU, null, Bt, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzRoughnessTexture" in UU,
              get: UU => UU.fuzzRoughnessTexture,
              set: (UU, RU) => {
                UU.fuzzRoughnessTexture = RU
              }
            },
            metadata: RU
          }, dP, HP), (0, nU.i)(UU, null, Vt, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThinWalled" in UU,
              get: UU => UU.geometryThinWalled,
              set: (UU, RU) => {
                UU.geometryThinWalled = RU
              }
            },
            metadata: RU
          }, SP, sP), (0, nU.i)(UU, null, rt, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryNormalTexture" in UU,
              get: UU => UU.geometryNormalTexture,
              set: (UU, RU) => {
                UU.geometryNormalTexture = RU
              }
            },
            metadata: RU
          }, yP, kP), (0, nU.i)(UU, null, Xt, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryTangent" in UU,
              get: UU => UU.geometryTangent,
              set: (UU, RU) => {
                UU.geometryTangent = RU
              }
            },
            metadata: RU
          }, FP, iP), (0, nU.i)(UU, null, vt, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryTangentTexture" in UU,
              get: UU => UU.geometryTangentTexture,
              set: (UU, RU) => {
                UU.geometryTangentTexture = RU
              }
            },
            metadata: RU
          }, AP, zP), (0, nU.i)(UU, null, dt, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatNormalTexture" in UU,
              get: UU => UU.geometryCoatNormalTexture,
              set: (UU, RU) => {
                UU.geometryCoatNormalTexture = RU
              }
            },
            metadata: RU
          }, MP, DP), (0, nU.i)(UU, null, Ht, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatTangent" in UU,
              get: UU => UU.geometryCoatTangent,
              set: (UU, RU) => {
                UU.geometryCoatTangent = RU
              }
            },
            metadata: RU
          }, LP, NP), (0, nU.i)(UU, null, St, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatTangentTexture" in UU,
              get: UU => UU.geometryCoatTangentTexture,
              set: (UU, RU) => {
                UU.geometryCoatTangentTexture = RU
              }
            },
            metadata: RU
          }, lP, OP), (0, nU.i)(UU, null, st, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryOpacity" in UU,
              get: UU => UU.geometryOpacity,
              set: (UU, RU) => {
                UU.geometryOpacity = RU
              }
            },
            metadata: RU
          }, UT, RT), (0, nU.i)(UU, null, yt, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryOpacityTexture" in UU,
              get: UU => UU.geometryOpacityTexture,
              set: (UU, RU) => {
                UU.geometryOpacityTexture = RU
              }
            },
            metadata: RU
          }, gT, tT), (0, nU.i)(UU, null, kt, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThickness" in UU,
              get: UU => UU.geometryThickness,
              set: (UU, RU) => {
                UU.geometryThickness = RU
              }
            },
            metadata: RU
          }, pT, ET), (0, nU.i)(UU, null, Ft, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThicknessTexture" in UU,
              get: UU => UU.geometryThicknessTexture,
              set: (UU, RU) => {
                UU.geometryThicknessTexture = RU
              }
            },
            metadata: RU
          }, PT, TT), (0, nU.i)(UU, null, it, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionLuminance" in UU,
              get: UU => UU.emissionLuminance,
              set: (UU, RU) => {
                UU.emissionLuminance = RU
              }
            },
            metadata: RU
          }, qT, KT), (0, nU.i)(UU, null, At, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionColor" in UU,
              get: UU => UU.emissionColor,
              set: (UU, RU) => {
                UU.emissionColor = RU
              }
            },
            metadata: RU
          }, cT, GT), (0, nU.i)(UU, null, zt, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionColorTexture" in UU,
              get: UU => UU.emissionColorTexture,
              set: (UU, RU) => {
                UU.emissionColorTexture = RU
              }
            },
            metadata: RU
          }, jT, uT), (0, nU.i)(UU, null, Mt, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmWeight" in UU,
              get: UU => UU.thinFilmWeight,
              set: (UU, RU) => {
                UU.thinFilmWeight = RU
              }
            },
            metadata: RU
          }, CT, hT), (0, nU.i)(UU, null, Dt, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmWeightTexture" in UU,
              get: UU => UU.thinFilmWeightTexture,
              set: (UU, RU) => {
                UU.thinFilmWeightTexture = RU
              }
            },
            metadata: RU
          }, QT, eT), (0, nU.i)(UU, null, Lt, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThickness" in UU,
              get: UU => UU.thinFilmThickness,
              set: (UU, RU) => {
                UU.thinFilmThickness = RU
              }
            },
            metadata: RU
          }, WT, fT), (0, nU.i)(UU, null, Nt, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThicknessMin" in UU,
              get: UU => UU.thinFilmThicknessMin,
              set: (UU, RU) => {
                UU.thinFilmThicknessMin = RU
              }
            },
            metadata: RU
          }, xT, mT), (0, nU.i)(UU, null, lt, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThicknessTexture" in UU,
              get: UU => UU.thinFilmThicknessTexture,
              set: (UU, RU) => {
                UU.thinFilmThicknessTexture = RU
              }
            },
            metadata: RU
          }, IT, JT), (0, nU.i)(UU, null, Ot, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmIor" in UU,
              get: UU => UU.thinFilmIor,
              set: (UU, RU) => {
                UU.thinFilmIor = RU
              }
            },
            metadata: RU
          }, wT, nT), (0, nU.i)(UU, null, Up, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientOcclusionTexture" in UU,
              get: UU => UU.ambientOcclusionTexture,
              set: (UU, RU) => {
                UU.ambientOcclusionTexture = RU
              }
            },
            metadata: RU
          }, bT, oT), (0, nU.i)(UU, null, Rp, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "directIntensity" in UU,
              get: UU => UU.directIntensity,
              set: (UU, RU) => {
                UU.directIntensity = RU
              }
            },
            metadata: RU
          }, ZT, aT), (0, nU.i)(UU, null, gp, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "environmentIntensity" in UU,
              get: UU => UU.environmentIntensity,
              set: (UU, RU) => {
                UU.environmentIntensity = RU
              }
            },
            metadata: RU
          }, YT, BT), (0, nU.i)(UU, null, tp, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useSpecularWeightFromTextureAlpha" in UU,
              get: UU => UU.useSpecularWeightFromTextureAlpha,
              set: (UU, RU) => {
                UU.useSpecularWeightFromTextureAlpha = RU
              }
            },
            metadata: RU
          }, VT, rT), (0, nU.i)(UU, null, pp, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceAlphaTest" in UU,
              get: UU => UU.forceAlphaTest,
              set: (UU, RU) => {
                UU.forceAlphaTest = RU
              }
            },
            metadata: RU
          }, XT, vT), (0, nU.i)(UU, null, Ep, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaCutOff" in UU,
              get: UU => UU.alphaCutOff,
              set: (UU, RU) => {
                UU.alphaCutOff = RU
              }
            },
            metadata: RU
          }, dT, HT), (0, nU.i)(UU, null, Pp, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAmbientOcclusionFromMetallicTextureRed" in UU,
              get: UU => UU.useAmbientOcclusionFromMetallicTextureRed,
              set: (UU, RU) => {
                UU.useAmbientOcclusionFromMetallicTextureRed = RU
              }
            },
            metadata: RU
          }, ST, sT), (0, nU.i)(UU, null, Tp, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAmbientInGrayScale" in UU,
              get: UU => UU.useAmbientInGrayScale,
              set: (UU, RU) => {
                UU.useAmbientInGrayScale = RU
              }
            },
            metadata: RU
          }, yT, kT), (0, nU.i)(UU, null, qp, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: UU => "usePhysicalLightFalloff" in UU,
              get: UU => UU.usePhysicalLightFalloff
            },
            metadata: RU
          }, null, rp), (0, nU.i)(UU, null, Kp, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: UU => "useGLTFLightFalloff" in UU,
              get: UU => UU.useGLTFLightFalloff
            },
            metadata: RU
          }, null, rp), (0, nU.i)(UU, null, cp, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useObjectSpaceNormalMap" in UU,
              get: UU => UU.useObjectSpaceNormalMap,
              set: (UU, RU) => {
                UU.useObjectSpaceNormalMap = RU
              }
            },
            metadata: RU
          }, FT, iT), (0, nU.i)(UU, null, Gp, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallax" in UU,
              get: UU => UU.useParallax,
              set: (UU, RU) => {
                UU.useParallax = RU
              }
            },
            metadata: RU
          }, AT, zT), (0, nU.i)(UU, null, jp, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallaxOcclusion" in UU,
              get: UU => UU.useParallaxOcclusion,
              set: (UU, RU) => {
                UU.useParallaxOcclusion = RU
              }
            },
            metadata: RU
          }, MT, DT), (0, nU.i)(UU, null, Cp, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: UU => "parallaxScaleBias" in UU,
              get: UU => UU.parallaxScaleBias,
              set: (UU, RU) => {
                UU.parallaxScaleBias = RU
              }
            },
            metadata: RU
          }, LT, NT), (0, nU.i)(UU, null, hp, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "disableLighting" in UU,
              get: UU => UU.disableLighting,
              set: (UU, RU) => {
                UU.disableLighting = RU
              }
            },
            metadata: RU
          }, lT, OT), (0, nU.i)(UU, null, Qp, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceIrradianceInFragment" in UU,
              get: UU => UU.forceIrradianceInFragment,
              set: (UU, RU) => {
                UU.forceIrradianceInFragment = RU
              }
            },
            metadata: RU
          }, Uq, Rq), (0, nU.i)(UU, null, ep, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "maxSimultaneousLights" in UU,
              get: UU => UU.maxSimultaneousLights,
              set: (UU, RU) => {
                UU.maxSimultaneousLights = RU
              }
            },
            metadata: RU
          }, gq, tq), (0, nU.i)(UU, null, Wp, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapX" in UU,
              get: UU => UU.invertNormalMapX,
              set: (UU, RU) => {
                UU.invertNormalMapX = RU
              }
            },
            metadata: RU
          }, pq, Eq), (0, nU.i)(UU, null, fp, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapY" in UU,
              get: UU => UU.invertNormalMapY,
              set: (UU, RU) => {
                UU.invertNormalMapY = RU
              }
            },
            metadata: RU
          }, Pq, Tq), (0, nU.i)(UU, null, xp, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "twoSidedLighting" in UU,
              get: UU => UU.twoSidedLighting,
              set: (UU, RU) => {
                UU.twoSidedLighting = RU
              }
            },
            metadata: RU
          }, qq, Kq), (0, nU.i)(UU, null, mp, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAlphaFresnel" in UU,
              get: UU => UU.useAlphaFresnel,
              set: (UU, RU) => {
                UU.useAlphaFresnel = RU
              }
            },
            metadata: RU
          }, cq, Gq), (0, nU.i)(UU, null, Ip, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: UU => "useLinearAlphaFresnel" in UU,
              get: UU => UU.useLinearAlphaFresnel,
              set: (UU, RU) => {
                UU.useLinearAlphaFresnel = RU
              }
            },
            metadata: RU
          }, jq, uq), (0, nU.i)(UU, null, Jp, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "environmentBRDFTexture" in UU,
              get: UU => UU.environmentBRDFTexture,
              set: (UU, RU) => {
                UU.environmentBRDFTexture = RU
              }
            },
            metadata: RU
          }, Cq, hq), (0, nU.i)(UU, null, wp, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceNormalForward" in UU,
              get: UU => UU.forceNormalForward,
              set: (UU, RU) => {
                UU.forceNormalForward = RU
              }
            },
            metadata: RU
          }, Qq, eq), (0, nU.i)(UU, null, np, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: UU => "enableSpecularAntiAliasing" in UU,
              get: UU => UU.enableSpecularAntiAliasing,
              set: (UU, RU) => {
                UU.enableSpecularAntiAliasing = RU
              }
            },
            metadata: RU
          }, Wq, fq), (0, nU.i)(UU, null, bp, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useHorizonOcclusion" in UU,
              get: UU => UU.useHorizonOcclusion,
              set: (UU, RU) => {
                UU.useHorizonOcclusion = RU
              }
            },
            metadata: RU
          }, xq, mq), (0, nU.i)(UU, null, op, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useRadianceOcclusion" in UU,
              get: UU => UU.useRadianceOcclusion,
              set: (UU, RU) => {
                UU.useRadianceOcclusion = RU
              }
            },
            metadata: RU
          }, Iq, Jq), (0, nU.i)(UU, null, Zp, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: UU => "unlit" in UU,
              get: UU => UU.unlit,
              set: (UU, RU) => {
                UU.unlit = RU
              }
            },
            metadata: RU
          }, wq, nq), (0, nU.i)(UU, null, ap, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyDecalMapAfterDetailMap" in UU,
              get: UU => UU.applyDecalMapAfterDetailMap,
              set: (UU, RU) => {
                UU.applyDecalMapAfterDetailMap = RU
              }
            },
            metadata: RU
          }, bq, oq), (0, nU.i)(UU, null, Yp, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "debugMode" in UU,
              get: UU => UU.debugMode,
              set: (UU, RU) => {
                UU.debugMode = RU
              }
            },
            metadata: RU
          }, Zq, aq), (0, nU.i)(UU, null, Bp, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "transparencyMode" in UU,
              get: UU => UU.transparencyMode
            },
            metadata: RU
          }, null, rp), RU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RU
          })
        })(), UU.SSS_QUALITY_LOW = 0, UU.SSS_QUALITY_MEDIUM = 1, UU.SSS_QUALITY_HIGH = 2, UU._noiseTextures = {}, UU.ForceGLSL = !1, UU._ShaderLoader = new jR.c((() => [Promise.all([gU.e(307), gU.e(373)]).then((() => gU(61102))), Promise.all([gU.e(312), gU.e(308), gU.e(372), gU.e(377)]).then((() => gU(61112)))]), (() => [Promise.all([gU.e(326), gU.e(328), gU.e(376)]).then((() => gU(61152))), Promise.all([gU.e(326), gU.e(329), gU.e(375), gU.e(378)]).then((() => gU(61161)))])), UU
      })(),
      OR = !1;
    OR || (OR = !0, (0, MU.g)(), (0, yR.g)("BABYLON.OpenPBRMaterial", lR));
    var Ug = gU(36624);
    class Rg {
      constructor(UU) {
        this.name = rR.d.NAME_PROCEDURALTEXTURE, this.Zh = UU
      }
      register() {
        this.Zh._beforeClearStage.registerStep(rR.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Zh.proceduralTexturesEnabled) {
          wR.g.StartPerformanceCounter("Procedural textures", this.Zh.proceduralTextures.length > 0);
          for (let UU = 0; UU < this.Zh.proceduralTextures.length; UU++) {
            const RU = this.Zh.proceduralTextures[UU];
            RU._shouldRender() && RU.render()
          }
          wR.g.EndPerformanceCounter("Procedural textures", this.Zh.proceduralTextures.length > 0)
        }
      }
    }
    var gg = gU(39714);
    let tg = (() => {
      var UU;
      let RU, tU, pU, PU, TU, qU = aU.e,
        KU = [],
        cU = [],
        GU = [],
        jU = [],
        uU = [],
        CU = [],
        QU = [],
        eU = [],
        WU = [];
      return UU = class extends qU {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(UU, RU, gU, tU) {
          let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, tU, !EU), this.isEnabled = ((0, nU.j)(this, KU), (0, nU.j)(this, cU, !0)), this.autoClear = ((0, nU.j)(this, GU), (0, nU.j)(this, jU, !0)), this.onGenerated = (0, nU.j)(this, uU), this.onGeneratedObservable = new Ug.b, this.onBeforeGenerationObservable = new Ug.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, nU.j)(this, CU, void 0), this._drawWrapper = (0, nU.j)(this, QU), this._textures = {}, this._size = (0, nU.j)(this, eU, void 0), this._textureType = (0, nU.j)(this, WU), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === pU || pU instanceof aU.e ? (this._options = {}, this._fallbackTexture = pU) : (this._options = pU, this._fallbackTexture = pU.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let qU = (tU = this.aZ() || hU.c.LastCreatedScene)._getComponent(rR.d.NAME_PROCEDURALTEXTURE);
          qU || (qU = new Rg(tU), tU.IgU(qU)), this._options.skipSceneRegistration || tU.proceduralTextures.push(this), this._fullEngine = tU.WC(), this.name = UU, this.isRenderTarget = !0, this._size = RU, this._textureType = TU, this._generateMipMaps = EU, this._drawWrapper = new gg.c(this._fullEngine), this.setFragment(gU);
          const fU = this._createRtWrapper(PU, RU, EU, TU);
          this._texture = fU.texture;
          const xU = [];
          xU.push(1, 1), xU.push(-1, 1), xU.push(-1, -1), xU.push(1, -1), this._vertexBuffers[SU.l.PositionKind] = new SU.l(this._fullEngine, xU, SU.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(UU, RU, gU, tU) {
          return UU ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(RU, {
            generateMipMaps: gU,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: tU,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(RU, {
            generateMipMaps: gU,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: tU,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(UU) {
          this._drawWrapper.effect = UU
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((UU => {
            this._contentData = this.readPixels(0, 0, UU), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const UU = this._fullEngine,
            RU = [];
          RU.push(0), RU.push(1), RU.push(2), RU.push(0), RU.push(2), RU.push(3), this._indexBuffer = UU.createIndexBuffer(RU)
        }
        _rebuild() {
          const UU = this._vertexBuffers[SU.l.PositionKind];
          UU && UU._rebuild(), this._createIndexBuffer(), this.refreshRate === nR.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = nR.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(UU) {
          if (this.isReady()) return void UU(this);
          const RU = this.getEffect();
          RU && RU.executeWhenCompiled((() => {
            UU(this)
          }))
        }
        isReady() {
          const UU = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const RU = this._getDefines();
          if (this._drawWrapper.effect && RU === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const tU = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== RU && (this._cachedDefines = RU, this._drawWrapper.effect = UU.createEffect(tU, [SU.l.PositionKind], this._uniforms, this._samplers, RU, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([gU.e(381).then((() => gU(61227))), this._options.extraInitializationsAsync()]) : await Promise.all([gU.e(382).then((() => gU(61232))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await gU.e(381).then((() => gU(61227))) : await gU.e(382).then((() => gU(61232)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(UU) {
          this._fragment = UU
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(UU) {
          this._refreshRate = UU, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(UU, RU) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const gU = this._texture.isCube;
          this._rtWrapper.dispose();
          const tU = this._createRtWrapper(gU, UU, RU, this._textureType);
          this._texture = tU.texture, this._size = UU, this._generateMipMaps = RU
        }
        _checkUniform(UU) {
          -1 === this._uniforms.indexOf(UU) && this._uniforms.push(UU)
        }
        setTexture(UU, RU) {
          return -1 === this._samplers.indexOf(UU) && this._samplers.push(UU), this._textures[UU] = RU, this
        }
        setFloat(UU, RU) {
          return this._checkUniform(UU), this._floats[UU] = RU, this
        }
        setInt(UU, RU) {
          return this._checkUniform(UU), this._ints[UU] = RU, this
        }
        setFloats(UU, RU) {
          return this._checkUniform(UU), this._floatsArrays[UU] = RU, this
        }
        setColor3(UU, RU) {
          return this._checkUniform(UU), this._colors3[UU] = RU, this
        }
        setColor4(UU, RU) {
          return this._checkUniform(UU), this._colors4[UU] = RU, this
        }
        setVector2(UU, RU) {
          return this._checkUniform(UU), this._vectors2[UU] = RU, this
        }
        setVector3(UU, RU) {
          return this._checkUniform(UU), this._vectors3[UU] = RU, this
        }
        setVector4(UU, RU) {
          return this._checkUniform(UU), this._vectors4[UU] = RU, this
        }
        setMatrix(UU, RU) {
          return this._checkUniform(UU), this._matrices[UU] = RU, this
        }
        render(UU) {
          const RU = this.aZ();
          if (!RU) return;
          const gU = this._fullEngine;
          if (gU.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), gU.setState(!1), !this.nodeMaterialSource) {
            for (const UU in this._textures) this._drawWrapper.effect.setTexture(UU, this._textures[UU]);
            for (const UU in this._ints) this._drawWrapper.effect.setInt(UU, this._ints[UU]);
            for (const UU in this._floats) this._drawWrapper.effect.setFloat(UU, this._floats[UU]);
            for (const UU in this._floatsArrays) this._drawWrapper.effect.setArray(UU, this._floatsArrays[UU]);
            for (const UU in this._colors3) this._drawWrapper.effect.setColor3(UU, this._colors3[UU]);
            for (const UU in this._colors4) {
              const RU = this._colors4[UU];
              this._drawWrapper.effect.setFloat4(UU, RU.r, RU.g, RU.b, RU.a)
            }
            for (const UU in this._vectors2) this._drawWrapper.effect.setVector2(UU, this._vectors2[UU]);
            for (const UU in this._vectors3) this._drawWrapper.effect.setVector3(UU, this._vectors3[UU]);
            for (const UU in this._vectors4) this._drawWrapper.effect.setVector4(UU, this._vectors4[UU]);
            for (const UU in this._matrices) this._drawWrapper.effect.setMatrix(UU, this._matrices[UU])
          }
          if (!this._texture || !this._rtWrapper) return;
          gU._enableGPUDebugMarkers && gU._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const tU = gU.currentViewport;
          if (this.isCube)
            for (let pU = 0; pU < 6; pU++) gU.bindFramebuffer(this._rtWrapper, pU, void 0, void 0, !0), gU.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", pU), this.autoClear && gU.clear(RU.clearColor, !0, !1, !1), gU.drawElementsType(EU.c.TriangleFillMode, 0, 6), gU.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let UU = 1;
            this._rtWrapper.is3D ? UU = this._rtWrapper.depth : this._rtWrapper.is2DArray && (UU = this._rtWrapper.layers);
            for (let tU = 0; tU < UU; tU++) {
              if (gU.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, tU), gU.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== UU ? tU / (UU - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", tU);
                for (const UU in this._textures) this._drawWrapper.effect.setTexture(UU, this._textures[UU])
              }
              this.autoClear && gU.clear(RU.clearColor, !0, !1, !1), gU.drawElementsType(EU.c.TriangleFillMode, 0, 6), gU.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          tU && gU.setViewport(tU), this.isCube && gU.generateMipMapsForCubemap(this._texture, !0), gU._enableGPUDebugMarkers && gU._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const RU = this.getSize(),
            gU = new UU(this.name, RU.width, this._fragment, this.aZ(), this._fallbackTexture, this._generateMipMaps);
          return gU.hasAlpha = this.hasAlpha, gU.level = this.level, gU.coordinatesMode = this.coordinatesMode, gU
        }
        dispose() {
          const UU = this.aZ();
          if (!UU) return;
          const RU = UU.proceduralTextures.indexOf(this);
          RU >= 0 && UU.proceduralTextures.splice(RU, 1);
          const gU = this._vertexBuffers[SU.l.PositionKind];
          gU && (gU.dispose(), this._vertexBuffers[SU.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const gU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, bU.K)()], tU = [(0, bU.K)()], pU = [(0, bU.K)()], PU = [(0, bU.K)()], TU = [(0, bU.K)()], (0, nU.i)(UU, null, TU, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: UU => "refreshRate" in UU,
            get: UU => UU.refreshRate
          },
          metadata: gU
        }, null, KU), (0, nU.i)(null, null, RU, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: gU
        }, cU, GU), (0, nU.i)(null, null, tU, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: UU => "autoClear" in UU,
            get: UU => UU.autoClear,
            set: (UU, RU) => {
              UU.autoClear = RU
            }
          },
          metadata: gU
        }, jU, uU), (0, nU.i)(null, null, pU, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: UU => "_generateMipMaps" in UU,
            get: UU => UU._generateMipMaps,
            set: (UU, RU) => {
              UU._generateMipMaps = RU
            }
          },
          metadata: gU
        }, CU, QU), (0, nU.i)(null, null, PU, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: UU => "_size" in UU,
            get: UU => UU._size,
            set: (UU, RU) => {
              UU._size = RU
            }
          },
          metadata: gU
        }, eU, WU), gU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gU
        })
      })(), UU
    })();

    function pg(UU) {
      return "texture" in UU
    }

    function Eg(UU) {
      return "value" in UU
    }
    async function Pg(UU, RU, tU) {
      const pU = [RU.red, RU.green, RU.blue, RU.alpha],
        EU = [],
        PU = [];
      for (let gU = 0; gU < 4; gU++) {
        const UU = pU[gU];
        if (UU)
          if (pg(UU)) {
            if (UU.sourceChannel < 0 || UU.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let RU = EU.indexOf(UU.texture); - 1 === RU && (RU = EU.length, EU.push(UU.texture)), PU[gU] = RU
          } else {
            if (!Eg(UU)) throw new Error("Invalid channel input configuration");
            if (UU.value < 0 || UU.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            PU[gU] = -1
          }
        else PU[gU] = -1
      }
      let TU = RU.outputSize;
      if (!TU && EU.length > 0) {
        let UU = 0;
        for (const RU of EU) {
          const gU = RU.getSize(),
            tU = Math.max(gU.width, gU.height);
          tU > UU && (UU = tU, TU = gU.width === gU.height ? UU : gU)
        }
      }
      TU = TU || 512;
      const qU = [],
        KU = new Set;
      for (let gU = 0; gU < 4; gU++) {
        const UU = pU[gU],
          RU = ["RED", "GREEN", "BLUE", "ALPHA"][gU];
        if (UU && pg(UU)) {
          qU.push(`${RU}_FROM_TEXTURE`);
          const UU = PU[gU];
          KU.add(UU)
        }
      }
      KU.forEach((UU => {
        qU.push(`USE_TEXTURE${UU}`)
      }));
      const cU = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: tU.WC().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            tU.WC().isWebGPU ? await Promise.all([gU.e(379).then((() => gU(61218)))]) : await Promise.all([gU.e(380).then((() => gU(61223)))])
          },
          skipSceneRegistration: !0
        },
        GU = new tg(UU, TU, "textureMerger", tU, cU);
      GU.refreshRate = -1, GU.defines = qU.length > 0 ? "#define " + qU.join("\n#define ") + "\n" : "";
      for (let gU = 0; gU < EU.length; gU++) jU = EU[gU], (uU = GU).uOffset = jU.uOffset, uU.vOffset = jU.vOffset, uU.uScale = jU.uScale, uU.vScale = jU.vScale, uU.uAng = jU.uAng, uU.vAng = jU.vAng, uU.wAng = jU.wAng, uU.uRotationCenter = jU.uRotationCenter, uU.vRotationCenter = jU.vRotationCenter, GU.setTexture(`inputTexture${gU}`, EU[gU]);
      var jU, uU;
      for (let gU = 0; gU < 4; gU++) {
        const UU = pU[gU],
          RU = ["red", "green", "blue", "alpha"][gU];
        if (UU && pg(UU)) {
          const tU = PU[gU];
          GU.setInt(`${RU}TextureIndex`, tU), GU.setInt(`${RU}SourceChannel`, UU.sourceChannel)
        } else {
          let tU;
          tU = UU && Eg(UU) ? UU.value : 3 === gU ? 1 : 0, GU.setFloat(`${RU}ConstantValue`, tU)
        }
      }
      return await new Promise(((UU, RU) => {
        GU.executeWhenReady((() => {
          try {
            GU.render(), UU(GU)
          } catch (gU) {
            RU(gU instanceof Error ? gU : new Error(String(gU)))
          }
        }))
      }))
    }

    function Tg(UU, RU) {
      return {
        texture: UU,
        sourceChannel: RU
      }
    }

    function qg(UU) {
      return {
        value: UU
      }
    }

    function Kg(UU, RU, gU, tU) {
      return {
        red: UU,
        green: RU,
        blue: gU,
        alpha: tU
      }
    }
    var cg = gU(39199),
      Gg = gU(39302),
      jg = gU(36619),
      ug = gU(39358),
      Cg = gU(39292);
    class hg {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Qg extends cg.c {
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
        return !!this._options?.enableMultiview || this.MC > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new hg;
        super(null), void 0 === UU.deterministicLockstep && (UU.deterministicLockstep = !1), void 0 !== UU.timeStep && (this._timeStep = UU.timeStep), void 0 === UU.lockstepMaxSteps && (UU.lockstepMaxSteps = 4), this._options = UU, jg.c.SetMatrixPrecision(!!UU.useHighPrecisionMatrix), this._caps = {
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
        }, UU.enableMultiview && (this._caps.multiview = {
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
        }, UU.renderingCanvas && (this._renderingCanvas = UU.renderingCanvas), oU.e.Log(`Babylon.js v${cg.c.Version} - Null engine`);
        const RU = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (RU.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (RU.Blob = function() {})
      }
      createVertexBuffer(UU) {
        const RU = new Gg.b;
        return RU.references = 1, RU
      }
      createIndexBuffer(UU) {
        const RU = new Gg.b;
        return RU.references = 1, RU
      }
      clear(UU, RU, gU) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(UU, RU, gU) {
        this._cachedViewport = UU
      }
      createUniformBuffer(UU) {
        const RU = new Gg.b;
        return RU.references = 1, RU.hG = UU instanceof Array ? UU.length * Float32Array.BYTES_PER_ELEMENT : UU.byteLength, RU
      }
      createDynamicUniformBuffer(UU) {
        return this.createUniformBuffer(UU)
      }
      updateUniformBuffer(UU, RU, gU, tU) {}
      bindUniformBufferBase(UU, RU, gU) {}
      bindUniformBlock(UU, RU, gU) {}
      createShaderProgram(UU, RU, gU, tU, pU) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(UU, RU) {
        return []
      }
      getAttributes(UU, RU) {
        return []
      }
      bindSamplers(UU) {
        this._currentEffect = null
      }
      enableEffect(UU) {
        UU = null !== UU && (0, Cg.c)(UU) ? UU.effect : UU, this._currentEffect = UU, UU && (UU.onBind && UU.onBind(UU), UU._onBindObservable && UU._onBindObservable.notifyObservers(UU))
      }
      setStateCullFaceType(UU, RU) {}
      setState(UU) {}
      setIntArray(UU, RU) {
        return !0
      }
      setIntArray2(UU, RU) {
        return !0
      }
      setIntArray3(UU, RU) {
        return !0
      }
      setIntArray4(UU, RU) {
        return !0
      }
      setFloatArray(UU, RU) {
        return !0
      }
      setFloatArray2(UU, RU) {
        return !0
      }
      setFloatArray3(UU, RU) {
        return !0
      }
      setFloatArray4(UU, RU) {
        return !0
      }
      setArray(UU, RU) {
        return !0
      }
      setArray2(UU, RU) {
        return !0
      }
      setArray3(UU, RU) {
        return !0
      }
      setArray4(UU, RU) {
        return !0
      }
      setMatrices(UU, RU) {
        return !0
      }
      setMatrix3x3(UU, RU) {
        return !0
      }
      setMatrix2x2(UU, RU) {
        return !0
      }
      setFloat(UU, RU) {
        return !0
      }
      setFloat2(UU, RU, gU) {
        return !0
      }
      setFloat3(UU, RU, gU, tU) {
        return !0
      }
      setBool(UU, RU) {
        return !0
      }
      setFloat4(UU, RU, gU, tU, pU) {
        return !0
      }
      setAlphaMode(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[gU] !== UU && (this.alphaState.setAlphaBlend(0 !== UU, 0), RU || this.setDepthWrite(0 === UU), this._alphaMode[gU] = UU)
      }
      bindBuffers(UU, RU, gU) {}
      wipeCaches(UU) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, UU && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(UU, RU, gU, tU) {}
      drawElementsType(UU, RU, gU, tU) {}
      drawArraysType(UU, RU, gU, tU) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(UU) {}
      createTexture(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          TU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const qU = new bR.d(this, 1),
          KU = String(UU);
        return qU.url = KU, qU.generateMipMaps = !RU, qU.samplingMode = pU, qU.invertY = gU, qU.baseWidth = this._options.textureSize, qU.baseHeight = this._options.textureSize, qU.width = this._options.textureSize, qU.height = this._options.textureSize, TU && (qU.format = TU), PU && (qU._buffer = PU), qU.isReady = !0, EU && setTimeout((() => {
          EU(qU)
        })), this._internalTexturesCache.push(qU), qU
      }
      _createHardwareRenderTargetWrapper(UU, RU, gU) {
        const tU = new ug.b(UU, RU, gU, this);
        return this._renderTargetWrapperCache.push(tU), tU
      }
      createRenderTargetTexture(UU, RU) {
        const gU = this._createHardwareRenderTargetWrapper(!1, !1, UU),
          tU = {};
        void 0 !== RU && "object" === typeof RU ? (tU.generateMipMaps = RU.generateMipMaps, tU.generateDepthBuffer = void 0 === RU.generateDepthBuffer || RU.generateDepthBuffer, tU.generateStencilBuffer = tU.generateDepthBuffer && RU.generateStencilBuffer, tU.type = void 0 === RU.type ? 0 : RU.type, tU.samplingMode = void 0 === RU.samplingMode ? 3 : RU.samplingMode) : (tU.generateMipMaps = RU, tU.generateDepthBuffer = !0, tU.generateStencilBuffer = !1, tU.type = 0, tU.samplingMode = 3);
        const pU = new bR.d(this, 5);
        gU.setTexture(pU);
        const EU = UU.width || UU,
          PU = UU.height || UU;
        return gU._generateDepthBuffer = tU.generateDepthBuffer, gU._generateStencilBuffer = !!tU.generateStencilBuffer, pU.baseWidth = EU, pU.baseHeight = PU, pU.width = EU, pU.height = PU, pU.isReady = !0, pU.samples = 1, pU.generateMipMaps = !!tU.generateMipMaps, pU.samplingMode = tU.samplingMode, pU.type = tU.type, this._internalTexturesCache.push(pU), gU
      }
      createMultiviewRenderTargetTexture(UU, RU) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const gU = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: UU,
            height: RU
          }),
          tU = new bR.d(this, 5, !0);
        return tU.baseWidth = UU, tU.baseHeight = RU, tU.width = UU, tU.height = RU, tU.isMultiview = !0, tU.isReady = !0, tU.format = 5, tU.samples = 1, gU.setTextures(tU), gU
      }
      bindMultiviewFramebuffer(UU) {
        this.bindFramebuffer(UU, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(UU, RU) {
        const gU = this._createHardwareRenderTargetWrapper(!1, !0, UU),
          tU = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...RU
          };
        tU.generateStencilBuffer = tU.generateDepthBuffer && tU.generateStencilBuffer, (1 !== tU.type || this._caps.textureFloatLinearFiltering) && (2 !== tU.type || this._caps.textureHalfFloatLinearFiltering) || (tU.samplingMode = 1), gU._generateDepthBuffer = tU.generateDepthBuffer, gU._generateStencilBuffer = !!tU.generateStencilBuffer;
        const pU = new bR.d(this, 5);
        return pU.baseWidth = UU, pU.baseHeight = UU, pU.width = UU, pU.height = UU, pU.isReady = !0, pU.isCube = !0, pU.samples = 1, pU.generateMipMaps = !!tU.generateMipMaps, pU.samplingMode = tU.samplingMode, pU.type = tU.type, this._internalTexturesCache.push(pU), gU
      }
      updateTextureSamplingMode(UU, RU) {
        RU.samplingMode = UU
      }
      createRawTexture(UU, RU, gU, tU, pU, EU, PU) {
        let TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          KU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const cU = new bR.d(this, 3);
        return cU.baseWidth = RU, cU.baseHeight = gU, cU.width = RU, cU.height = gU, cU.format = tU, cU.generateMipMaps = pU, cU.samplingMode = PU, cU.invertY = EU, cU._compression = TU, cU.type = qU, cU._useSRGBBuffer = KU, this._doNotHandleContextLost || (cU._bufferView = UU), cU
      }
      updateRawTexture(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        UU && (UU._bufferView = RU, UU.format = gU, UU.invertY = tU, UU._compression = pU, UU.type = EU, UU._useSRGBBuffer = PU)
      }
      bindFramebuffer(UU, RU, gU, tU, pU) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = UU, this._currentFramebuffer = null, this._cachedViewport && !pU && this.setViewport(this._cachedViewport, gU, tU)
      }
      unBindFramebuffer(UU) {
        let RU = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, RU && RU(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(UU) {
        const RU = new Gg.b;
        return RU.references = 1, RU.hG = 1, RU
      }
      updateDynamicTexture(UU, RU, gU) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(UU) {}
      updateDynamicIndexBuffer(UU, RU) {}
      updateDynamicVertexBuffer(UU, RU, gU, tU) {}
      _bindTextureDirectly(UU, RU) {
        return this._boundTexturesCache[this._activeChannel] !== RU && (this._boundTexturesCache[this._activeChannel] = RU, !0)
      }
      _bindTexture(UU, RU) {
        UU < 0 || this._bindTextureDirectly(0, RU)
      }
      _deleteBuffer(UU) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(UU) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(UU, RU, gU, tU, pU) {}
      _uploadDataToTextureDirectly(UU, RU) {}
      _uploadArrayBufferViewToTexture(UU, RU) {}
      _uploadImageToTexture(UU, RU) {}
    }
    gU(39416), gU(39449), gU(39409);
    async function eg(UU) {
      const RU = UU.getInternalTexture();
      if (!RU || 1 !== RU.source) return null;
      if (RU.invertY) {
        const RU = UU.aZ()?.WC();
        if (!(RU instanceof Qg)) return null
      }
      const gU = RU._buffer;
      let tU, EU = UU.mimeType;
      try {
        gU ? ArrayBuffer.isView(gU) ? tU = gU.buffer.slice(gU.byteOffset, gU.byteOffset + gU.byteLength) : gU instanceof ArrayBuffer ? tU = gU : gU instanceof Blob ? (tU = await gU.arrayBuffer(), EU = gU.type || EU) : "string" === typeof gU ? (tU = await pU.Tools.LoadFileAsync(gU), EU = (0, qU.d)(gU) || EU) : "undefined" !== typeof HTMLImageElement && gU instanceof HTMLImageElement && (tU = await pU.Tools.LoadFileAsync(gU.src), EU = (0, qU.d)(gU.src) || EU) : (tU = await pU.Tools.LoadFileAsync(RU.url), EU = (0, qU.d)(RU.url) || EU)
      } catch {
        return null
      }
      if (tU && !EU && RU.url) {
        const UU = RU.url.match(/^data:([^;,]+)/);
        EU = UU ? UU[1] : (0, qU.d)(RU.url)
      }
      return tU && EU ? {
        data: tU,
        mimeType: EU
      } : null
    }
    const Wg = 1e-6,
      fg = new QU.Color3(.04, .04, .04),
      xg = 1024,
      mg = QU.Color3.White(),
      Ig = QU.Color3.BlackReadOnly;

    function Jg(UU) {
      switch (UU) {
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

    function wg(UU, RU, gU) {
      if (RU < fg.r) return 0;
      const tU = fg.r,
        pU = UU * gU / (1 - fg.r) + RU - 2 * fg.r,
        EU = pU * pU - 4 * tU * (fg.r - RU);
      return fU.Clamp((-pU + Math.sqrt(EU)) / (2 * tU), 0, 1)
    }

    function ng(UU) {
      const RU = UU.diffuseColor.toLinearSpace(UU.aZ().WC().useExactSrgbConversions).scale(.5),
        gU = UU.alpha,
        tU = function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new HU.l(0, 1),
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new HU.l(0, .1),
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new HU.l(0, .1),
            pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new HU.l(1300, .1);
          return function(UU, RU, gU, tU, pU) {
            return (1 - UU) * (1 - UU) * (1 - UU) * RU + 3 * (1 - UU) * (1 - UU) * UU * gU + 3 * (1 - UU) * UU * UU * tU + UU * UU * UU * pU
          }(Math.pow(UU / pU.x, .333333), RU.y, gU.y, tU.y, pU.y)
        }(fU.Clamp(UU.specularPower, 0, xg));
      return {
        baseColorFactor: [RU.r, RU.g, RU.b, gU],
        metallicFactor: 0,
        roughnessFactor: tU
      }
    }

    function bg(UU, RU) {
      RU.needAlphaBlending() ? UU.alphaMode = "BLEND" : RU.needAlphaTesting() && (UU.alphaMode = "MASK", UU.alphaCutoff = RU.alphaCutOff)
    }

    function og(UU, RU, gU) {
      const tU = new Uint8Array(UU * RU * 4);
      for (let pU = 0; pU < tU.length; pU += 4) tU[pU] = tU[pU + 1] = tU[pU + 2] = tU[pU + 3] = 255;
      return IU.e.CreateRGBATexture(tU, UU, RU, gU)
    }

    function Zg(UU) {
      if (UU instanceof Uint8Array) {
        const RU = UU.length,
          gU = new Float32Array(UU.length);
        for (let tU = 0; tU < RU; ++tU) gU[tU] = UU[tU] / 255;
        return gU
      }
      if (UU instanceof Float32Array) return UU;
      throw new Error("Unsupported pixel format!")
    }
    class ag {
      constructor(UU) {
        this._exporter = UU, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(UU) {
        return UU ? this._textureMap.get(UU.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(UU, RU) {
        const gU = ng(UU),
          tU = {
            name: UU.name
          };
        if (null == UU.backFaceCulling || UU.backFaceCulling || (UU.twoSidedLighting || pU.Tools.Warn(UU.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), tU.doubleSided = !0), RU) {
          const RU = [],
            pU = UU.diffuseTexture;
          pU && RU.push(this.exportTextureAsync(pU).then((UU => {
            UU && (gU.baseColorTexture = UU)
          })));
          const EU = UU.bumpTexture;
          EU && RU.push(this.exportTextureAsync(EU).then((UU => {
            UU && (tU.normalTexture = UU, 1 !== EU.level && (tU.normalTexture.scale = EU.level))
          })));
          const PU = UU.emissiveTexture;
          PU && (tU.emissiveFactor = [1, 1, 1], RU.push(this.exportTextureAsync(PU).then((UU => {
            UU && (tU.emissiveTexture = UU)
          }))));
          const TU = UU.ambientTexture;
          TU && RU.push(this.exportTextureAsync(TU).then((UU => {
            if (UU) {
              const RU = {
                index: UU.index
              };
              tU.occlusionTexture = RU
            }
          }))), RU.length > 0 && (this._exporter._materialNeedsUVsSet.add(UU), await Promise.all(RU))
        }(UU.alpha < 1 || UU.opacityTexture) && (UU.alphaMode === JU.d.ALPHA_COMBINE ? tU.alphaMode = "BLEND" : pU.Tools.Warn(UU.name + ": glTF 2.0 does not support alpha mode: " + UU.alphaMode.toString())), UU.emissiveColor && !UU.emissiveColor.equalsWithEpsilon(Ig, Wg) && (tU.emissiveFactor = UU.emissiveColor.vgU()), tU.pbrMetallicRoughness = gU, bg(tU, UU), await this._finishMaterialAsync(tU, UU);
        const EU = this._exporter._materials;
        return EU.push(tU), EU.length - 1
      }
      async _finishMaterialAsync(UU, RU) {
        const gU = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", UU, RU),
          tU = [];
        for (const pU of gU) tU.push(this.exportTextureAsync(pU));
        await Promise.all(tU), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", UU, RU)
      }
      _resizeTexturesToSameDimensions(UU, RU, gU) {
        const tU = UU ? UU.getSize() : {
            width: 0,
            height: 0
          },
          pU = RU ? RU.getSize() : {
            width: 0,
            height: 0
          };
        let EU, PU;
        return tU.width < pU.width ? (EU = UU && UU instanceof mU.c ? xU.h.CreateResizedCopy(UU, pU.width, pU.height, !0) : og(pU.width, pU.height, gU), PU = RU) : tU.width > pU.width ? (PU = RU && RU instanceof mU.c ? xU.h.CreateResizedCopy(RU, tU.width, tU.height, !0) : og(tU.width, tU.height, gU), EU = UU) : (EU = UU, PU = RU), {
          texture1: EU,
          texture2: PU
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(UU, RU, gU) {
        const tU = new Array;
        if (!UU && !RU) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const pU = UU ? UU.aZ() : RU ? RU.aZ() : null;
        if (pU) {
          const EU = this._resizeTexturesToSameDimensions(UU, RU, pU),
            PU = EU.texture1?.getSize();
          let TU, qU;
          const KU = PU.width,
            cU = PU.height,
            GU = await EU.texture1.readPixels(),
            jU = await EU.texture2.readPixels();
          if (!GU) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (TU = Zg(GU), !jU) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          qU = Zg(jU);
          const uU = qU.byteLength,
            CU = new Uint8Array(uU),
            hU = new Uint8Array(uU),
            eU = 4,
            WU = new QU.Color3(0, 0, 0);
          let fU = 0,
            xU = 0;
          for (let UU = 0; UU < cU; ++UU)
            for (let RU = 0; RU < KU; ++RU) {
              const tU = (KU * UU + RU) * eU,
                PU = {
                  diffuseColor: new QU.Color3(TU[tU], TU[tU + 1], TU[tU + 2]).toLinearSpace(pU.WC().useExactSrgbConversions).multiply(gU.diffuseColor),
                  specularColor: new QU.Color3(qU[tU], qU[tU + 1], qU[tU + 2]).toLinearSpace(pU.WC().useExactSrgbConversions).multiply(gU.specularColor),
                  glossiness: qU[tU + 3] * gU.glossiness
                },
                cU = this._convertSpecularGlossinessToMetallicRoughness(PU);
              WU.r = Math.max(WU.r, cU.baseColor.r), WU.g = Math.max(WU.g, cU.baseColor.g), WU.b = Math.max(WU.b, cU.baseColor.b), fU = Math.max(fU, cU.metallic), xU = Math.max(xU, cU.roughness), hU[tU] = 255 * cU.baseColor.r, hU[tU + 1] = 255 * cU.baseColor.g, hU[tU + 2] = 255 * cU.baseColor.b, hU[tU + 3] = EU.texture1.hasAlpha ? 255 * TU[tU + 3] : 255, CU[tU] = 0, CU[tU + 1] = 255 * cU.roughness, CU[tU + 2] = 255 * cU.metallic, CU[tU + 3] = 255
            }
          const mU = {
            baseColor: WU,
            metallic: fU,
            roughness: xU
          };
          let IU = !1,
            JU = !1;
          for (let UU = 0; UU < cU; ++UU)
            for (let RU = 0; RU < KU; ++RU) {
              const gU = (KU * UU + RU) * eU;
              hU[gU] /= mU.baseColor.r > Wg ? mU.baseColor.r : 1, hU[gU + 1] /= mU.baseColor.g > Wg ? mU.baseColor.g : 1, hU[gU + 2] /= mU.baseColor.b > Wg ? mU.baseColor.b : 1;
              const tU = QU.Color3.FromInts(hU[gU], hU[gU + 1], hU[gU + 2]).toGammaSpace(pU.WC().useExactSrgbConversions);
              hU[gU] = 255 * tU.r, hU[gU + 1] = 255 * tU.g, hU[gU + 2] = 255 * tU.b, tU.equalsWithEpsilon(mg, Wg) || (JU = !0), CU[gU + 1] /= mU.roughness > Wg ? mU.roughness : 1, CU[gU + 2] /= mU.metallic > Wg ? mU.metallic : 1;
              QU.Color3.FromInts(255, CU[gU + 1], CU[gU + 2]).equalsWithEpsilon(mg, Wg) || (IU = !0)
            }
          return IU && tU.push((0, wU.EncodeImageAsync)(CU, KU, cU).then((UU => {
            mU.metallicRoughnessTextureData = UU
          }))), JU && tU.push((0, wU.EncodeImageAsync)(hU, KU, cU).then((UU => {
            mU.baseColorTextureData = UU
          }))), await Promise.all(tU).then((() => mU))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(UU) {
        const RU = this._getPerceivedBrightness(UU.diffuseColor),
          gU = this._getPerceivedBrightness(UU.specularColor),
          tU = 1 - this._getMaxComponent(UU.specularColor),
          pU = wg(RU, gU, tU),
          EU = UU.diffuseColor.scale(tU / (1 - fg.r) / Math.max(1 - pU, Wg)),
          PU = UU.specularColor.subtract(fg.scale(1 - pU)).scale(1 / Math.max(pU, Wg));
        let TU = QU.Color3.Lerp(EU, PU, pU * pU);
        TU = TU.clampToRef(0, 1, TU);
        return {
          baseColor: TU,
          metallic: pU,
          roughness: 1 - UU.glossiness
        }
      }
      _getPerceivedBrightness(UU) {
        return Math.sqrt(.299 * UU.r * UU.r + .587 * UU.g * UU.g + .114 * UU.b * UU.b)
      }
      _getMaxComponent(UU) {
        return Math.max(UU.r, Math.max(UU.g, UU.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        const KU = [],
          cU = {
            baseColor: UU,
            metallic: RU,
            roughness: gU
          };
        if (qU)
          if (PU instanceof lR) {
            if (PU.geometryOpacityTexture) {
              const UU = tU && tU.getInternalTexture() ? tU.getInternalTexture().uniqueId : 0,
                RU = PU.geometryOpacityTexture && PU.geometryOpacityTexture.getInternalTexture() ? PU.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                gU = Number(`${UU}${RU}`),
                pU = this._textureMap.get(gU);
              pU ? TU.baseColorTexture = pU : KU.push(Pg("baseColorOpacityTexture", Kg(tU ? Tg(tU, 0) : qg(1), tU ? Tg(tU, 1) : qg(1), tU ? Tg(tU, 2) : qg(1), Tg(PU.geometryOpacityTexture, 0)), PU.aZ()).then((async UU => {
                const RU = await this.exportTextureAsync(UU, gU);
                RU && (TU.baseColorTexture = RU)
              })))
            } else tU && KU.push(this.exportTextureAsync(tU).then((UU => {
              UU && (TU.baseColorTexture = UU)
            })));
            if (PU._useMetallicFromMetallicTextureBlue && pU) KU.push(this.exportTextureAsync(pU).then((UU => {
              UU && (TU.metallicRoughnessTexture = UU)
            })));
            else if (EU || pU) {
              const UU = pU && pU.getInternalTexture() ? pU.getInternalTexture().uniqueId : 0,
                RU = EU && EU.getInternalTexture() ? EU.getInternalTexture().uniqueId : 0,
                gU = Number(`${UU}${RU}`),
                tU = this._textureMap.get(gU);
              tU ? TU.metallicRoughnessTexture = tU : KU.push(Pg("MetalRoughTexture", Kg(PU.ambientOcclusionTexture ? Tg(PU.ambientOcclusionTexture, 0) : qg(1), EU ? Tg(EU, 0) : qg(1), pU ? Tg(pU, 0) : qg(1)), PU.aZ()).then((async UU => {
                const RU = await this.exportTextureAsync(UU, gU);
                RU && (TU.metallicRoughnessTexture = RU)
              })))
            }
          } else tU && KU.push(this.exportTextureAsync(tU).then((UU => {
            UU && (TU.baseColorTexture = UU)
          }))), pU && KU.push(this.exportTextureAsync(pU).then((UU => {
            UU && (TU.metallicRoughnessTexture = UU)
          })));
        return KU.length > 0 && (this._exporter._materialNeedsUVsSet.add(PU), await Promise.all(KU)), cU
      }
      _getTextureSampler(UU) {
        const RU = {};
        if (!UU || !(UU instanceof mU.c)) return RU;
        const gU = this._getGLTFTextureWrapMode(UU.wrapU);
        10497 !== gU && (RU.wrapS = gU);
        const tU = this._getGLTFTextureWrapMode(UU.wrapV);
        switch (10497 !== tU && (RU.wrapT = tU), UU.samplingMode) {
          case mU.c.LINEAR_LINEAR:
            RU.magFilter = 9729, RU.minFilter = 9729;
            break;
          case mU.c.LINEAR_NEAREST:
            RU.magFilter = 9729, RU.minFilter = 9728;
            break;
          case mU.c.NEAREST_LINEAR:
            RU.magFilter = 9728, RU.minFilter = 9729;
            break;
          case mU.c.NEAREST_LINEAR_MIPLINEAR:
            RU.magFilter = 9728, RU.minFilter = 9987;
            break;
          case mU.c.NEAREST_NEAREST:
            RU.magFilter = 9728, RU.minFilter = 9728;
            break;
          case mU.c.NEAREST_LINEAR_MIPNEAREST:
            RU.magFilter = 9728, RU.minFilter = 9985;
            break;
          case mU.c.LINEAR_NEAREST_MIPNEAREST:
            RU.magFilter = 9729, RU.minFilter = 9984;
            break;
          case mU.c.LINEAR_NEAREST_MIPLINEAR:
            RU.magFilter = 9729, RU.minFilter = 9986;
            break;
          case mU.c.NEAREST_NEAREST_MIPLINEAR:
            RU.magFilter = 9728, RU.minFilter = 9986;
            break;
          case mU.c.LINEAR_LINEAR_MIPLINEAR:
            RU.magFilter = 9729, RU.minFilter = 9987;
            break;
          case mU.c.LINEAR_LINEAR_MIPNEAREST:
            RU.magFilter = 9729, RU.minFilter = 9985;
            break;
          case mU.c.NEAREST_NEAREST_MIPNEAREST:
            RU.magFilter = 9728, RU.minFilter = 9984
        }
        return RU
      }
      _getGLTFTextureWrapMode(UU) {
        switch (UU) {
          case mU.c.WRAP_ADDRESSMODE:
            return 10497;
          case mU.c.CLAMP_ADDRESSMODE:
            return 33071;
          case mU.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return pU.Tools.Error(`Unsupported Texture Wrap Mode ${UU}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(UU, RU, gU) {
        const tU = {
            diffuseColor: UU._albedoColor,
            specularColor: UU._reflectivityColor,
            glossiness: UU._microSurface
          },
          pU = UU._albedoTexture,
          EU = UU._reflectivityTexture,
          PU = UU._useMicroSurfaceFromReflectivityMapAlpha;
        if (EU && !PU) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((pU || EU) && gU) {
          this._exporter._materialNeedsUVsSet.add(UU);
          const gU = this._exportTextureSampler(pU || EU),
            PU = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(pU, EU, tU),
            TU = this._exporter._textures;
          if (PU.baseColorTextureData) {
            const UU = await this._exportImageAsync(`baseColor${TU.length}`, PU.baseColorTextureData);
            RU.baseColorTexture = this._exportTextureInfo(UU, gU, pU?.coordinatesIndex)
          }
          if (PU.metallicRoughnessTextureData) {
            const UU = await this._exportImageAsync(`metallicRoughness${TU.length}`, PU.metallicRoughnessTextureData);
            RU.metallicRoughnessTexture = this._exportTextureInfo(UU, gU, EU?.coordinatesIndex)
          }
          return PU
        }
        return this._convertSpecularGlossinessToMetallicRoughness(tU)
      }
      async exportPBRMaterialAsync(UU, RU) {
        const gU = {},
          tU = {
            name: UU.name
          },
          pU = UU.isMetallicWorkflow();
        if (pU) {
          const RU = UU._albedoColor,
            tU = UU.alpha;
          RU && (gU.baseColorFactor = [RU.r, RU.g, RU.b, tU])
        }
        const EU = pU ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(UU._albedoColor, UU._metallic, UU._roughness, UU._albedoTexture, UU._metallicTexture, UU._metallicTexture, UU, gU, RU) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(UU, gU, RU);
        await this._setMetallicRoughnessPbrMaterialAsync(EU, UU, tU, gU, RU), await this._finishMaterialAsync(tU, UU);
        const PU = this._exporter._materials;
        return PU.push(tU), PU.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(UU, RU, gU, tU, EU) {
        if (bg(gU, RU), UU.baseColor.equalsWithEpsilon(mg, Wg) && fU.WithinEpsilon(RU.alpha, 1, Wg) || (tU.baseColorFactor = [UU.baseColor.r, UU.baseColor.g, UU.baseColor.b, RU.alpha]), null != UU.metallic && 1 !== UU.metallic && (tU.metallicFactor = UU.metallic), null != UU.roughness && 1 !== UU.roughness && (tU.roughnessFactor = UU.roughness), null == RU.backFaceCulling || RU.backFaceCulling || (RU._twoSidedLighting || pU.Tools.Warn(RU.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), gU.doubleSided = !0), EU) {
          const UU = [],
            pU = RU instanceof IR ? RU._bumpTexture : RU.geometryNormalTexture;
          pU && UU.push(this.exportTextureAsync(pU).then((UU => {
            UU && (gU.normalTexture = UU, 1 !== pU.level && (gU.normalTexture.scale = pU.level))
          })));
          const EU = RU instanceof IR ? RU._ambientTexture : RU.ambientOcclusionTexture;
          EU && UU.push(new Promise((async UU => {
            if (RU instanceof lR && tU.metallicRoughnessTexture) {
              const RU = this._exportTextureSampler(EU),
                gU = this._exporter._textures[tU.metallicRoughnessTexture.index].source,
                pU = this._exportTextureInfo(gU, RU, EU.coordinatesIndex);
              return this._textureMap.set(EU.uniqueId, pU), this._exporter._extensionsPostExportTextures("exporter", pU, EU), UU(pU)
            }
            return UU(await this.exportTextureAsync(EU))
          })).then((async UU => {
            if (UU) {
              const tU = {
                index: UU.index,
                texCoord: UU.texCoord,
                extensions: UU.extensions
              };
              gU.occlusionTexture = tU, tU.strength = RU instanceof IR ? RU._ambientTextureStrength : RU.ambientOcclusionTexture.level
            }
          })));
          const PU = RU instanceof IR ? RU._emissiveTexture : RU.emissionColorTexture;
          PU && UU.push(this.exportTextureAsync(PU).then((UU => {
            UU && (gU.emissiveTexture = UU)
          }))), UU.length > 0 && (this._exporter._materialNeedsUVsSet.add(RU), await Promise.all(UU))
        }
        const PU = RU instanceof IR ? RU._emissiveColor : RU.emissionColor;
        PU.equalsWithEpsilon(Ig, Wg) || (gU.emissiveFactor = PU.vgU()), gU.pbrMetallicRoughness = tU
      }
      async exportOpenPBRMaterialAsync(UU, RU) {
        const gU = {},
          tU = {
            name: UU.name
          },
          pU = UU.baseColor,
          EU = UU.geometryOpacity;
        pU && (gU.baseColorFactor = [pU.r, pU.g, pU.b, EU]);
        const PU = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(UU.baseColor, UU.baseMetalness, UU.specularRoughness, UU.baseColorTexture, UU.baseMetalnessTexture, UU.specularRoughnessTexture, UU, gU, RU);
        await this._setMetallicRoughnessPbrMaterialAsync(PU, UU, tU, gU, RU), await this._finishMaterialAsync(tU, UU);
        const TU = this._exporter._materials;
        return TU.push(tU), TU.length - 1
      }
      async exportTextureAsync(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = this._textureMap.get(RU ?? UU.uniqueId);
        if (gU) return gU;
        const tU = this._exportTextureSampler(UU),
          pU = await this._exportTextureImageAsync(UU);
        return gU = this._exportTextureInfo(pU, tU, UU.coordinatesIndex), this._textureMap.set(RU ?? UU.uniqueId, gU), this._exporter._extensionsPostExportTextures("exporter", gU, UU), gU
      }
      async _exportTextureImageAsync(UU) {
        const RU = UU.mimeType ?? "none",
          gU = this._internalTextureToImage,
          tU = UU.getInternalTexture().uniqueId;
        gU[tU] = gU[tU] || {};
        let EU = gU[tU][RU];
        return void 0 === EU && (EU = (async () => {
          const gU = await eg(UU);
          if (gU && Jg(gU.mimeType) && ("none" === RU || gU.mimeType === RU)) return await this._exportImageAsync(UU.name, new Blob([gU.data], {
            type: gU.mimeType
          }));
          let tU = "image/png";
          "none" !== RU && (Jg(RU) ? tU = RU : (tU = "image/png", pU.Tools.Warn(`Unsupported media type: ${RU}. Exporting texture as PNG.`)));
          const EU = UU.getSize(),
            PU = await (0, xU.f)(UU),
            TU = await (0, wU.EncodeImageAsync)(PU, EU.width, EU.height, tU);
          return await this._exportImageAsync(UU.name, TU)
        })(), gU[tU][RU] = EU), await EU
      }
      async _exportImageAsync(UU, RU) {
        const gU = this._exporter._images;
        let tU;
        if (this._exporter._shouldUseGlb) {
          tU = {
            name: UU,
            mimeType: RU.type,
            bufferView: void 0
          };
          const gU = await RU.arrayBuffer(),
            pU = this._exporter._bufferManager.createBufferView(new Uint8Array(gU));
          this._exporter._bufferManager.setBufferView(tU, pU)
        } else {
          const EU = UU.replace(/\.\/|\/|\.\\|\\/g, "_"),
            PU = function(UU) {
              switch (UU) {
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
            }(RU.type);
          let TU = EU + PU;
          gU.some((UU => UU.uri === TU)) && (TU = `${EU}_${pU.Tools.RandomId()}${PU}`), tU = {
            name: UU,
            uri: TU
          }, this._exporter._imageData[TU] = RU
        }
        return gU.push(tU), gU.length - 1
      }
      _exportTextureInfo(UU, RU, gU) {
        const tU = this._exporter._textures;
        let pU = tU.findIndex((gU => gU.sampler == RU && gU.source === UU)); - 1 === pU && (pU = tU.length, tU.push({
          source: UU,
          sampler: RU
        }));
        const EU = {
          index: pU
        };
        return gU && (EU.texCoord = gU), EU
      }
      _exportTextureSampler(UU) {
        const RU = this._getTextureSampler(UU),
          gU = this._exporter._samplers,
          tU = gU.findIndex((UU => UU.minFilter === RU.minFilter && UU.magFilter === RU.magFilter && UU.wrapS === RU.wrapS && UU.wrapT === RU.wrapT));
        return -1 !== tU ? tU : (gU.push(RU), gU.length - 1)
      }
    }
    var Yg = gU(39437),
      Bg = gU(39597);
    (0, Bg.e)();
    var Vg = gU(36602);
    const rg = tU.Matrix.Compose(new tU.xC(-1, 1, 1), tU.Quaternion.Identity(), tU.xC.Zero());

    function Xg(UU, RU) {
      if (!(UU instanceof GU.d)) return !1;
      if (RU) {
        if (!UU.getWorldMatrix().equalsWithEpsilon(tU.Matrix.IdentityReadOnly, Vg.e)) return !1
      } else {
        if (!UU.getWorldMatrix().multiplyToRef(rg, tU.TmpVectors.Matrix[0]).equalsWithEpsilon(tU.Matrix.IdentityReadOnly, Vg.e)) return !1
      }
      return !(UU instanceof jU.e && UU.geometry)
    }
    const vg = tU.xC.ZeroReadOnly,
      dg = tU.Quaternion.Identity(),
      Hg = tU.xC.OneReadOnly,
      Sg = new tU.xC(-1, 1, 1);

    function sg(UU, RU) {
      const {
        byteOffset: gU,
        byteStride: tU,
        type: pU,
        normalized: EU
      } = UU, PU = UU.getSize(), TU = RU.reduce(((UU, RU) => RU.getTotalVertices() > UU ? RU.getTotalVertices() : UU), -Number.MAX_VALUE);
      return {
        byteOffset: gU,
        byteStride: tU,
        componentCount: PU,
        type: pU,
        count: TU * PU,
        normalized: EU,
        totalVertices: TU,
        kind: UU.getKind()
      }
    }

    function yg(UU) {
      switch (UU) {
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

    function kg(UU) {
      switch (UU) {
        case cU.e.PositionKind:
        case cU.e.NormalKind:
        case cU.e.TangentKind:
        case cU.e.ColorKind:
        case cU.e.MatricesIndicesKind:
        case cU.e.MatricesIndicesExtraKind:
        case cU.e.MatricesWeightsKind:
        case cU.e.MatricesWeightsExtraKind:
        case cU.e.UVKind:
        case cU.e.UV2Kind:
        case cU.e.UV3Kind:
        case cU.e.UV4Kind:
        case cU.e.UV5Kind:
        case cU.e.UV6Kind:
          return !0
      }
      return !1
    }

    function Fg(UU) {
      const RU = Math.sqrt(UU.x * UU.x + UU.y * UU.y + UU.z * UU.z);
      RU > 0 && (UU.x /= RU, UU.y /= RU, UU.z /= RU)
    }

    function ig(UU) {
      return UU.x *= -1, UU
    }

    function Ag(UU) {
      if (UU.x * UU.x + UU.y * UU.y > .5) {
        const RU = Math.abs(UU.x),
          gU = Math.abs(UU.y);
        if (RU > gU) {
          const gU = Math.sign(UU.x);
          UU.x = RU, UU.y *= -gU, UU.z *= -gU, UU.w *= gU
        } else {
          const RU = Math.sign(UU.y);
          UU.x *= -RU, UU.y = gU, UU.z *= RU, UU.w *= -RU
        }
      } else {
        const RU = Math.abs(UU.z),
          gU = Math.abs(UU.w);
        if (RU > gU) {
          const gU = Math.sign(UU.z);
          UU.x *= -gU, UU.y *= gU, UU.z = RU, UU.w *= -gU
        } else {
          const RU = Math.sign(UU.w);
          UU.x *= RU, UU.y *= -RU, UU.z *= -RU, UU.w = gU
        }
      }
      return UU
    }

    function zg(UU) {
      UU.b_(-UU.z, UU.w, UU.x, -UU.y)
    }

    function Mg(UU, RU) {
      const gU = tU.xC.FromArrayToRef(RU.translation || [0, 0, 0], 0, tU.TmpVectors.xC[0]),
        pU = tU.Quaternion.FromArrayToRef(RU.rotation || [0, 0, 0, 1], 0, tU.TmpVectors.Quaternion[0]),
        EU = tU.Matrix.ComposeToRef(Hg, pU, gU, tU.TmpVectors.Matrix[0]),
        PU = tU.xC.FromArrayToRef(UU.translation || [0, 0, 0], 0, tU.TmpVectors.xC[2]),
        TU = tU.Quaternion.FromArrayToRef(UU.rotation || [0, 0, 0, 1], 0, tU.TmpVectors.Quaternion[1]),
        qU = tU.Matrix.ComposeToRef(Hg, TU, PU, tU.TmpVectors.Matrix[1]);
      EU.multiplyToRef(qU, qU), qU.decompose(void 0, pU, gU), gU.equalsWithEpsilon(vg, Vg.e) ? delete RU.translation : RU.translation = gU.vgU(), pU.equalsWithEpsilon(dg, Vg.e) ? delete RU.rotation : RU.rotation = pU.vgU(), RU.scale && delete RU.scale
    }

    function Dg(UU, RU) {
      if (!(RU instanceof GU.d)) return !1;
      if (!(1 === RU.getChildren().length && 0 === UU.getChildren().length && UU.parent === RU)) return !1;
      const gU = UU.aZ(),
        tU = UU instanceof Bg.i && !gU.useRightHandedSystem ? Sg : Hg;
      return !!RU.ep.equalsWithEpsilon(tU, Vg.e) || (oU.e.Warn(`Cannot collapse node ${UU.name} into parent node ${RU.name} with modified scaling.`), !1)
    }

    function Lg(UU) {
      if (UU instanceof Array) {
        const RU = new Float32Array(UU);
        return new Uint8Array(RU.buffer, RU.byteOffset, RU.byteLength)
      }
      return ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU)
    }

    function Ng(UU, RU) {
      for (const [gU, tU] of Object.entries(UU)) {
        const pU = RU[gU];
        (Array.isArray(tU) && Array.isArray(pU) && lg(tU, pU) || tU === pU) && delete UU[gU]
      }
      return UU
    }

    function lg(UU, RU) {
      return UU.length === RU.length && UU.every(((UU, gU) => UU === RU[gU]))
    }
    const Og = new Map([
      [Int8Array, (UU, RU, gU) => UU.setInt8(RU, gU)],
      [Uint8Array, (UU, RU, gU) => UU.setUint8(RU, gU)],
      [Uint8ClampedArray, (UU, RU, gU) => UU.setUint8(RU, gU)],
      [Int16Array, (UU, RU, gU) => UU.setInt16(RU, gU, !0)],
      [Uint16Array, (UU, RU, gU) => UU.setUint16(RU, gU, !0)],
      [Int32Array, (UU, RU, gU) => UU.setInt32(RU, gU, !0)],
      [Uint32Array, (UU, RU, gU) => UU.setUint32(RU, gU, !0)],
      [Float32Array, (UU, RU, gU) => UU.setFloat32(RU, gU, !0)],
      [Float64Array, (UU, RU, gU) => UU.setFloat64(RU, gU, !0)]
    ]);
    class Ut {
      writeTypedArray(UU) {
        this._checkGrowBuffer(UU.byteLength);
        const RU = Og.get(UU.constructor);
        for (let gU = 0; gU < UU.length; gU++) RU(this._dataView, this._byteOffset, UU[gU]), this._byteOffset += UU.BYTES_PER_ELEMENT
      }
      constructor(UU) {
        this._data = new Uint8Array(UU), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(UU) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, UU), this._byteOffset++
      }
      writeInt8(UU) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, UU), this._byteOffset++
      }
      writeInt16(UU) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, UU, !0), this._byteOffset += 2
      }
      writeUInt16(UU) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, UU, !0), this._byteOffset += 2
      }
      writeInt32(UU) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeUInt32(UU) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeFloat32(UU) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeFloat64(UU) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, UU, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(UU) {
        const RU = this.byteOffset + UU;
        if (RU > this._data.byteLength) {
          const UU = new Uint8Array(2 * RU);
          UU.set(this._data), this._data = UU, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Rt(UU) {
      return UU % 4 === 0 ? 4 : UU % 2 === 0 ? 2 : 1
    }
    class gt {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(UU) {
        let RU = 0;
        this._bufferViewToData.forEach((UU => {
          RU += UU.byteLength
        }));
        const gU = new Ut(RU),
          tU = Array.from(this._bufferViewToData.keys()).sort(((UU, RU) => Rt(RU.byteLength) - Rt(UU.byteLength)));
        for (const pU of tU) {
          pU.byteOffset = gU.byteOffset, UU.push(pU);
          const RU = UU.length - 1,
            tU = this.getPropertiesWithBufferView(pU);
          for (const UU of tU) UU.bufferView = RU;
          gU.writeTypedArray(this._bufferViewToData.get(pU)), this._bufferViewToData.delete(pU)
        }
        return gU.getOutputData()
      }
      createBufferView(UU, RU) {
        const gU = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: UU.byteLength,
          byteStride: RU
        };
        return this._bufferViewToData.set(gU, UU), gU
      }
      createAccessor(UU, RU, gU, tU, pU, EU, PU) {
        this._verifyBufferView(UU);
        const TU = {
          bufferView: void 0,
          componentType: gU,
          count: tU,
          type: RU,
          min: EU?.min,
          max: EU?.max,
          normalized: PU,
          byteOffset: pU
        };
        return this.setBufferView(TU, UU), this._accessorToBufferView.set(TU, UU), TU
      }
      setBufferView(UU, RU) {
        this._verifyBufferView(RU);
        this.getPropertiesWithBufferView(RU).push(UU)
      }
      removeBufferView(UU) {
        const RU = this.getPropertiesWithBufferView(UU);
        for (const gU of RU) void 0 !== gU.bufferView && delete gU.bufferView;
        this._bufferViewToData.delete(UU), this._bufferViewToProperties.delete(UU), this._accessorToBufferView.forEach(((RU, gU) => {
          RU === UU && (void 0 !== gU.byteOffset && delete gU.byteOffset, this._accessorToBufferView.delete(gU))
        }))
      }
      getBufferView(UU) {
        const RU = this._accessorToBufferView.get(UU);
        return this._verifyBufferView(RU), RU
      }
      getPropertiesWithBufferView(UU) {
        return this._verifyBufferView(UU), this._bufferViewToProperties.set(UU, this._bufferViewToProperties.get(UU) ?? []), this._bufferViewToProperties.get(UU)
      }
      getData(UU) {
        return this._verifyBufferView(UU), this._bufferViewToData.get(UU)
      }
      _verifyBufferView(UU) {
        if (void 0 === UU || !this._bufferViewToData.has(UU)) throw new Error(`BufferView ${UU} not found in BufferManager.`)
      }
    }
    var tt = gU(39603);
    (0, tt.g)();
    var pt = gU(39826);
    (0, pt.f)();
    var Et = gU(39648),
      Pt = gU(40477);
    (0, Pt.h)();
    let Tt = (() => {
      var UU;
      let RU, gU, tU = [],
        pU = [],
        EU = [],
        PU = [];
      return UU = class {
        get influence() {
          return this._influence
        }
        set influence(UU) {
          if (this._influence === UU) return;
          const RU = this._influence;
          this._influence = UU, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === RU || 0 === UU)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(UU) {
          this._animationPropertiesOverride = UU
        }
        constructor(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            TU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = UU, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Ug.b, this._onDataLayoutChanged = new Ug.b, this.id = (0, nU.j)(this, tU, void 0), this.morphTargetManager = ((0, nU.j)(this, pU), (0, nU.j)(this, EU, null)), this._animationPropertiesOverride = ((0, nU.j)(this, PU), null), this.id = UU, this.morphTargetManager = TU, this._scene = gU || hU.c.LastCreatedScene, this.influence = RU, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        KPU(UU) {
          const RU = this.hasPositions;
          this._positions = UU, RU !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(UU) {
          const RU = this.hasNormals;
          this._normals = UU, RU !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(UU) {
          const RU = this.hasTangents;
          this._tangents = UU, RU !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(UU) {
          const RU = this.hasUVs;
          this._uvs = UU, RU !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(UU) {
          const RU = this.hasUV2s;
          this._uv2s = UU, RU !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(UU) {
          const RU = this.hasColors;
          this._colors = UU, RU !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const RU = JR.b.Clone((() => new UU(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return RU._positions = this._positions, RU._normals = this._normals, RU._tangents = this._tangents, RU._uvs = this._uvs, RU._uv2s = this._uv2s, RU._colors = this._colors, RU
        }
        serialize() {
          const UU = {};
          return UU.name = this.name, UU.influence = this.influence, null != this.id && (UU.id = this.id), UU.uniqueId = this.uniqueId, UU.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (UU.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (UU.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (UU.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (UU.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (UU.colors = Array.prototype.slice.call(this.getColors())), JR.b.AppendSerializedAnimations(this, UU), UU
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(RU, gU) {
          let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const pU = new UU(RU.name, RU.influence, gU, tU);
          if (pU.KPU(RU.positions), null != RU.id && (pU.id = RU.id), RU.normals && pU.setNormals(RU.normals), RU.tangents && pU.setTangents(RU.tangents), RU.uvs && pU.setUVs(RU.uvs), RU.uv2s && pU.setUV2s(RU.uv2s), RU.colors && pU.setColors(RU.colors), RU.animations) {
            for (let UU = 0; UU < RU.animations.length; UU++) {
              const gU = RU.animations[UU],
                tU = (0, yR.e)("BABYLON.Animation");
              tU && pU.animations.push(tU.Parse(gU))
            }
            RU.autoAnimate && gU && gU.beginAnimation(pU, RU.autoAnimateFrom, RU.autoAnimateTo, RU.autoAnimateLoop, RU.autoAnimateSpeed || 1)
          }
          return pU
        }
        static FromMesh(RU, gU, tU) {
          gU || (gU = RU.name);
          const pU = new UU(gU, tU, RU.aZ(), RU.morphTargetManager);
          return pU.KPU(RU.getVerticesData(SU.l.PositionKind)), RU.isVerticesDataPresent(SU.l.NormalKind) && pU.setNormals(RU.getVerticesData(SU.l.NormalKind)), RU.isVerticesDataPresent(SU.l.TangentKind) && pU.setTangents(RU.getVerticesData(SU.l.TangentKind)), RU.isVerticesDataPresent(SU.l.UVKind) && pU.setUVs(RU.getVerticesData(SU.l.UVKind)), RU.isVerticesDataPresent(SU.l.UV2Kind) && pU.setUV2s(RU.getVerticesData(SU.l.UV2Kind)), RU.isVerticesDataPresent(SU.l.ColorKind) && pU.setColors(RU.getVerticesData(SU.l.ColorKind)), pU
        }
      }, (() => {
        const TU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, bU.K)()], gU = [(0, bU.K)()], (0, nU.i)(null, null, RU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, RU) => {
              UU.id = RU
            }
          },
          metadata: TU
        }, tU, pU), (0, nU.i)(null, null, gU, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: UU => "morphTargetManager" in UU,
            get: UU => UU.morphTargetManager,
            set: (UU, RU) => {
              UU.morphTargetManager = RU
            }
          },
          metadata: TU
        }, EU, PU), TU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TU
        })
      })(), UU
    })();
    var qt, Kt = gU(40536),
      ct = gU(39645);
    ! function(UU) {
      UU[UU.INTANGENT = 0] = "INTANGENT", UU[UU.OUTTANGENT = 1] = "OUTTANGENT"
    }(qt || (qt = {}));
    class Gt {
      static _IsTransformable(UU) {
        return UU && (UU instanceof GU.d || UU instanceof tt.d || UU instanceof ct.e)
      }
      static _CreateNodeAnimation(UU, RU, gU, tU, EU) {
        if (this._IsTransformable(UU)) {
          const PU = [],
            TU = [],
            qU = RU.getKeys(),
            KU = Gt._CalculateMinMaxKeyFrames(qU),
            cU = Gt._DeduceInterpolation(qU, gU, tU),
            GU = cU.interpolationType,
            jU = cU.shouldBakeAnimation;
          if (jU ? Gt._CreateBakedAnimation(UU, RU, gU, KU.min, KU.max, RU.framePerSecond, EU, PU, TU, KU, tU) : "LINEAR" === GU || "STEP" === GU ? Gt._CreateLinearOrStepAnimation(UU, RU, gU, PU, TU, tU) : "CUBICSPLINE" === GU ? Gt._CreateCubicSplineAnimation(UU, RU, gU, PU, TU, tU) : Gt._CreateBakedAnimation(UU, RU, gU, KU.min, KU.max, RU.framePerSecond, EU, PU, TU, KU, tU), PU.length && TU.length) {
            return {
              inputs: PU,
              outputs: TU,
              samplerInterpolation: GU,
              inputsMin: jU ? KU.min : pU.Tools.FloatRound(KU.min / RU.framePerSecond),
              inputsMax: jU ? KU.max : pU.Tools.FloatRound(KU.max / RU.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(UU) {
        let RU = null,
          gU = "VEC3",
          tU = !1;
        const EU = UU.targetProperty.split(".");
        switch (EU[0]) {
          case "ep":
            RU = "scale";
            break;
          case "position":
            RU = "translation";
            break;
          case "rotation":
            gU = "VEC4", RU = "rotation";
            break;
          case "rotationQuaternion":
            gU = "VEC4", tU = !0, RU = "rotation";
            break;
          case "influence":
            gU = "SCALAR", RU = "weights";
            break;
          default:
            pU.Tools.Error(`Unsupported animatable property ${EU[0]}`)
        }
        return RU ? {
          animationChannelTargetPath: RU,
          dataAccessorType: gU,
          useQuaternion: tU
        } : (pU.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        let GU;
        if (Gt._IsTransformable(UU) && UU.animations)
          for (const jU of UU.animations) {
            if (cU && !cU(jU)) continue;
            const pU = Gt._DeduceAnimationInfo(jU);
            pU && (GU = {
              name: jU.name,
              samplers: [],
              channels: []
            }, Gt._AddAnimation(`${jU.name}`, jU.hasRunningRuntimeAnimations ? RU : GU, UU, jU, pU.dataAccessorType, pU.animationChannelTargetPath, tU, EU, PU, TU, pU.useQuaternion, qU, KU), GU.samplers.length && GU.channels.length && gU.push(GU))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        let GU;
        if (UU instanceof Kt.c) {
          const pU = UU.morphTargetManager;
          if (pU)
            for (let jU = 0; jU < pU.numTargets; ++jU) {
              const uU = pU.getTarget(jU);
              for (const CU of uU.animations) {
                if (cU && !cU(CU)) continue;
                const uU = new Pt.e(`${CU.name}`, "influence", CU.framePerSecond, CU.dataType, CU.mE, CU.enableBlending),
                  hU = [],
                  QU = CU.getKeys();
                for (let UU = 0; UU < QU.length; ++UU) {
                  const RU = QU[UU];
                  for (let UU = 0; UU < pU.numTargets; ++UU) UU == jU ? hU.push(RU) : hU.push({
                    frame: RU.frame,
                    value: 0
                  })
                }
                uU.setKeys(hU, !0);
                const eU = Gt._DeduceAnimationInfo(uU);
                eU && (GU = {
                  name: uU.name,
                  samplers: [],
                  channels: []
                }, Gt._AddAnimation(CU.name, CU.hasRunningRuntimeAnimations ? RU : GU, UU, uU, eU.dataAccessorType, eU.animationChannelTargetPath, tU, EU, PU, TU, eU.useQuaternion, qU, KU, pU.numTargets), GU.samplers.length && GU.channels.length && gU.push(GU))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        let cU;
        if (UU.animationGroups) {
          const GU = UU.animationGroups;
          for (const jU of GU) {
            const GU = new Map,
              uU = new Map,
              CU = new Set,
              hU = jU.to - jU.from;
            cU = {
              name: jU.name,
              channels: [],
              samplers: []
            };
            for (let RU = 0; RU < jU.targetedAnimations.length; ++RU) {
              const KU = jU.targetedAnimations[RU],
                hU = KU.target,
                QU = KU.animation;
              if (qU && !qU(QU)) continue;
              const eU = TU.has(hU);
              if (this._IsTransformable(hU) || 1 === hU.length && this._IsTransformable(hU[0])) {
                const UU = Gt._DeduceAnimationInfo(KU.animation);
                if (UU) {
                  const RU = this._IsTransformable(hU) ? hU : this._IsTransformable(hU[0]) ? hU[0] : null;
                  RU && Gt._AddAnimation(`${QU.name}`, cU, RU, QU, UU.dataAccessorType, UU.animationChannelTargetPath, gU, tU, pU, EU, UU.useQuaternion, PU, eU)
                }
              } else if (hU instanceof Tt || 1 === hU.length && hU[0] instanceof Tt) {
                if (Gt._DeduceAnimationInfo(KU.animation)) {
                  const RU = hU instanceof Tt ? hU : hU[0];
                  if (RU) {
                    const gU = UU.morphTargetManagers.find((UU => {
                      for (let gU = 0; gU < UU.numTargets; ++gU)
                        if (UU.getTarget(gU) === RU) return !0;
                      return !1
                    }));
                    if (gU) {
                      const tU = UU.meshes.find((UU => UU.morphTargetManager === gU));
                      tU && (GU.has(tU) || GU.set(tU, new Map), GU.get(tU)?.set(RU, QU), CU.add(tU), uU.set(tU, QU))
                    }
                  }
                }
              }
            }
            CU.forEach((UU => {
              const RU = UU.morphTargetManager;
              let TU = null;
              const qU = [],
                KU = uU.get(UU).getKeys(),
                CU = KU.length;
              for (let gU = 0; gU < CU; ++gU)
                for (let tU = 0; tU < RU.numTargets; ++tU) {
                  const pU = RU.getTarget(tU),
                    EU = GU.get(UU);
                  if (EU) {
                    const RU = EU.get(pU);
                    RU ? (TU || (TU = new Pt.e(`${jU.name}_${UU.name}_MorphWeightAnimation`, "influence", RU.framePerSecond, Pt.e.ANIMATIONTYPE_FLOAT, RU.mE, RU.enableBlending)), qU.push(RU.getKeys()[gU])) : qU.push({
                      frame: jU.from + hU / CU * gU,
                      value: pU.influence,
                      inTangent: KU[0].inTangent ? 0 : void 0,
                      outTangent: KU[0].outTangent ? 0 : void 0
                    })
                  }
                }
              TU.setKeys(qU, !0);
              const QU = Gt._DeduceAnimationInfo(TU);
              QU && Gt._AddAnimation(`${jU.name}_${UU.name}_MorphWeightAnimation`, cU, UU, TU, QU.dataAccessorType, QU.animationChannelTargetPath, gU, tU, pU, EU, QU.useQuaternion, PU, !1, RU?.numTargets)
            })), cU.channels.length && cU.samplers.length && (KU?.set(jU, RU.length), RU.push(cU))
          }
        }
      }
      static _AddAnimation(UU, RU, gU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU) {
        const hU = Gt._CreateNodeAnimation(gU, pU, PU, GU, jU);
        let QU, eU, WU, fU, xU, mU;
        if (hU) {
          if (CU) {
            let UU, RU = 0;
            const gU = [];
            for (; hU.inputs.length > 0;) UU = hU.inputs.shift(), RU % CU == 0 && gU.push(UU), RU++;
            hU.inputs = gU
          }
          const UU = TU.get(gU),
            pU = new Float32Array(hU.inputs);
          QU = qU.createBufferView(pU), eU = qU.createAccessor(QU, "SCALAR", 5126, hU.inputs.length, void 0, {
            min: [hU.inputsMin],
            max: [hU.inputsMax]
          }), cU.push(eU), WU = cU.length - 1;
          const KU = new tU.Quaternion,
            GU = new tU.xC,
            jU = new tU.xC,
            IU = gU instanceof tt.d,
            JU = yg(EU),
            wU = new Float32Array(hU.outputs.length * JU);
          hU.outputs.forEach((function(UU, RU) {
            let gU = UU;
            switch (PU) {
              case "translation":
                uU && (tU.xC.FromArrayToRef(UU, 0, jU), ig(jU), jU.toArray(gU));
                break;
              case "rotation":
                4 === UU.length ? tU.Quaternion.FromArrayToRef(UU, 0, KU) : (gU = new Array(4), tU.xC.FromArrayToRef(UU, 0, GU), tU.Quaternion.FromEulerVectorToRef(GU, KU)), uU && (Ag(KU), IU && zg(KU)), KU.toArray(gU)
            }
            wU.set(gU, RU * JU)
          })), QU = qU.createBufferView(wU), eU = qU.createAccessor(QU, EU, 5126, hU.outputs.length), cU.push(eU), fU = cU.length - 1, xU = {
            interpolation: hU.samplerInterpolation,
            input: WU,
            output: fU
          }, RU.samplers.push(xU), mU = {
            sampler: RU.samplers.length - 1,
            target: {
              node: UU,
              path: PU
            }
          }, RU.channels.push(mU)
        }
      }
      static _CreateBakedAnimation(UU, RU, gU, EU, PU, TU, qU, KU, cU, GU, jU) {
        let uU;
        const CU = tU.Quaternion.Identity();
        let hU, QU, eU, WU, fU, xU = null,
          mU = null;
        GU.min = pU.Tools.FloatRound(EU / TU);
        const IU = RU.getKeys();
        for (let tU = 0, JU = IU.length; tU < JU; ++tU) {
          if (QU = IU[tU], tU + 1 < JU)
            if (eU = IU[tU + 1], QU.value.equals && QU.value.equals(eU.value) || QU.value === eU.value) {
              if (0 !== tU) continue;
              fU = QU.frame
            } else fU = eU.frame;
          else {
            if (WU = IU[tU - 1], QU.value.equals && QU.value.equals(WU.value) || QU.value === WU.value) continue;
            fU = PU
          }
          if (fU)
            for (let tU = QU.frame; tU <= fU; tU += qU) {
              if (hU = pU.Tools.FloatRound(tU / TU), hU === xU) continue;
              xU = hU, mU = hU;
              const EU = {
                key: 0,
                repeatCount: 0,
                mE: RU.mE
              };
              uU = RU._interpolate(tU, EU), Gt._SetInterpolatedValue(UU, uU, hU, RU, gU, CU, KU, cU, jU)
            }
        }
        mU && (GU.max = mU)
      }
      static _ConvertFactorToVector3OrQuaternion(UU, RU, gU, EU, PU) {
        const TU = Gt._GetBasePositionRotationOrScale(RU, EU, PU),
          qU = gU.targetProperty.split("."),
          KU = qU ? qU[1] : "",
          cU = PU ? tU.Quaternion.FromArray(TU).normalize() : tU.xC.FromArray(TU);
        switch (KU) {
          case "x":
          case "y":
          case "z":
            cU[KU] = UU;
            break;
          case "w":
            cU.w = UU;
            break;
          default:
            pU.Tools.Error(`glTFAnimation: Unsupported component name "${KU}"!`)
        }
        return cU
      }
      static _SetInterpolatedValue(UU, RU, gU, pU, EU, PU, TU, qU, KU) {
        let cU;
        TU.push(gU), "weights" !== EU ? (pU.dataType === Pt.e.ANIMATIONTYPE_FLOAT && (RU = this._ConvertFactorToVector3OrQuaternion(RU, UU, pU, EU, KU)), "rotation" === EU ? (KU ? PU = RU : (cU = RU, tU.Quaternion.RotationYawPitchRollToRef(cU.y, cU.x, cU.z, PU)), qU.push(PU.vgU())) : (cU = RU, qU.push(cU.vgU()))) : qU.push([RU])
      }
      static _CreateLinearOrStepAnimation(UU, RU, gU, tU, pU, EU) {
        for (const PU of RU.getKeys()) tU.push(PU.frame / RU.framePerSecond), Gt._AddKeyframeValue(PU, RU, pU, gU, UU, EU)
      }
      static _CreateCubicSplineAnimation(UU, RU, gU, tU, pU, EU) {
        RU.getKeys().forEach((function(PU) {
          tU.push(PU.frame / RU.framePerSecond), Gt._AddSplineTangent(qt.INTANGENT, pU, gU, "CUBICSPLINE", PU, EU), Gt._AddKeyframeValue(PU, RU, pU, gU, UU, EU), Gt._AddSplineTangent(qt.OUTTANGENT, pU, gU, "CUBICSPLINE", PU, EU)
        }))
      }
      static _GetBasePositionRotationOrScale(UU, RU, gU) {
        let pU;
        if ("rotation" === RU)
          if (gU) {
            pU = (UU.rotationQuaternion ?? tU.Quaternion.Identity()).vgU()
          } else {
            pU = (UU.rotation ?? tU.xC.Zero()).vgU()
          }
        else if ("translation" === RU) {
          pU = (UU.position ?? tU.xC.Zero()).vgU()
        } else {
          pU = (UU.ep ?? tU.xC.One()).vgU()
        }
        return pU
      }
      static _AddKeyframeValue(UU, RU, gU, EU, PU, TU) {
        let qU;
        const KU = RU.dataType;
        if (KU === Pt.e.ANIMATIONTYPE_VECTOR3) {
          let RU = UU.value.vgU();
          if ("rotation" === EU) {
            const UU = tU.xC.FromArray(RU);
            RU = tU.Quaternion.RotationYawPitchRoll(UU.y, UU.x, UU.z).vgU()
          }
          gU.push(RU)
        } else if (KU === Pt.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === EU) gU.push([UU.value]);
          else if (qU = this._ConvertFactorToVector3OrQuaternion(UU.value, PU, RU, EU, TU), qU) {
            if ("rotation" === EU) {
              const UU = TU ? qU : tU.Quaternion.RotationYawPitchRoll(qU.y, qU.x, qU.z).normalize();
              gU.push(UU.vgU())
            }
            gU.push(qU.vgU())
          }
        } else KU === Pt.e.ANIMATIONTYPE_QUATERNION ? gU.push(UU.value.normalize().vgU()) : pU.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(UU, RU, gU) {
        let tU, pU, EU = !1;
        if ("rotation" === RU && !gU) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let PU = 0, TU = UU.length; PU < TU; ++PU)
          if (pU = UU[PU], pU.inTangent || pU.outTangent)
            if (tU) {
              if ("CUBICSPLINE" !== tU) {
                tU = "LINEAR", EU = !0;
                break
              }
            } else tU = "CUBICSPLINE";
        else if (tU) {
          if ("CUBICSPLINE" === tU || pU.interpolation && 1 === pU.interpolation && "STEP" !== tU) {
            tU = "LINEAR", EU = !0;
            break
          }
        } else tU = pU.interpolation && 1 === pU.interpolation ? "STEP" : "LINEAR";
        return tU || (tU = "LINEAR"), {
          interpolationType: tU,
          shouldBakeAnimation: EU
        }
      }
      static _AddSplineTangent(UU, RU, gU, pU, EU, PU) {
        let TU;
        const qU = UU === qt.INTANGENT ? EU.inTangent : EU.outTangent;
        if ("CUBICSPLINE" === pU) {
          if ("rotation" === gU)
            if (qU)
              if (PU) TU = qU.vgU();
              else {
                const UU = qU;
                TU = tU.Quaternion.RotationYawPitchRoll(UU.y, UU.x, UU.z).vgU()
              }
          else TU = [0, 0, 0, 0];
          else TU = "weights" === gU ? qU ? [qU] : [0] : qU ? qU.vgU() : [0, 0, 0];
          RU.push(TU)
        }
      }
      static _CalculateMinMaxKeyFrames(UU) {
        let RU = 1 / 0,
          gU = -1 / 0;
        return UU.forEach((function(UU) {
          RU = Math.min(RU, UU.frame), gU = Math.max(gU, UU.frame)
        })), {
          min: RU,
          max: gU
        }
      }
    }

    function jt(UU, RU, gU, EU, PU, TU) {
      const qU = {
          attributes: {},
          influence: UU.influence,
          name: UU.name
        },
        KU = RU.geometry;
      if (!KU) return pU.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), qU;
      const GU = TU ? -1 : 1,
        jU = tU.xC.Zero();
      let uU, CU;
      if (UU.hasPositions) {
        const EU = UU.getPositions(),
          TU = KU.getVerticesData(cU.e.PositionKind);
        if (TU) {
          const UU = new Float32Array(TU.length),
            RU = [1 / 0, 1 / 0, 1 / 0],
            pU = [-1 / 0, -1 / 0, -1 / 0];
          CU = TU.length / 3, uU = 0;
          for (let gU = uU; gU < CU; ++gU) {
            const PU = tU.xC.FromArray(TU, 3 * gU);
            tU.xC.FromArray(EU, 3 * gU).subtractToRef(PU, jU), jU.x *= GU, RU[0] = Math.min(RU[0], jU.x), pU[0] = Math.max(pU[0], jU.x), RU[1] = Math.min(RU[1], jU.y), pU[1] = Math.max(pU[1], jU.y), RU[2] = Math.min(RU[2], jU.z), pU[2] = Math.max(pU[2], jU.z), UU[3 * gU] = jU.x, UU[3 * gU + 1] = jU.y, UU[3 * gU + 2] = jU.z
          }
          const KU = gU.createBufferView(UU, 12),
            cU = gU.createAccessor(KU, "VEC3", 5126, EU.length / 3, 0, {
              min: RU,
              max: pU
            });
          PU.push(cU), qU.attributes.POSITION = PU.length - 1
        } else pU.Tools.Warn(`Morph target positions for mesh ${RU.name} were not exported. Mesh does not have position vertex data`)
      }
      if (UU.hasNormals) {
        const EU = UU.getNormals(),
          TU = KU.getVerticesData(cU.e.NormalKind);
        if (TU) {
          const UU = new Float32Array(TU.length);
          CU = TU.length / 3, uU = 0;
          for (let gU = uU; gU < CU; ++gU) {
            const RU = tU.xC.FromArray(TU, 3 * gU).normalize();
            tU.xC.FromArray(EU, 3 * gU).normalize().subtractToRef(RU, jU), UU[3 * gU] = jU.x * GU, UU[3 * gU + 1] = jU.y, UU[3 * gU + 2] = jU.z
          }
          const RU = gU.createBufferView(UU, 12),
            pU = gU.createAccessor(RU, "VEC3", 5126, EU.length / 3, 0);
          PU.push(pU), qU.attributes.NORMAL = PU.length - 1
        } else pU.Tools.Warn(`Morph target normals for mesh ${RU.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (UU.hasTangents) {
        const EU = UU.getTangents(),
          TU = KU.getVerticesData(cU.e.TangentKind);
        if (TU) {
          CU = TU.length / 4;
          const UU = new Float32Array(3 * CU);
          uU = 0;
          for (let gU = uU; gU < CU; ++gU) {
            const RU = tU.xC.FromArray(TU, 4 * gU);
            Fg(RU);
            const pU = tU.xC.FromArray(EU, 3 * gU);
            Fg(pU), pU.subtractToRef(RU, jU), UU[3 * gU] = jU.x * GU, UU[3 * gU + 1] = jU.y, UU[3 * gU + 2] = jU.z
          }
          const RU = gU.createBufferView(UU, 12),
            pU = gU.createAccessor(RU, "VEC3", 5126, CU, 0);
          PU.push(pU), qU.attributes.TANGENT = PU.length - 1
        } else pU.Tools.Warn(`Morph target tangents for mesh ${RU.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (UU.hasColors) {
        const EU = UU.getColors(),
          TU = KU.getVerticesData(cU.e.ColorKind),
          GU = KU.getVertexBuffer(cU.e.ColorKind);
        if (TU && GU) {
          const UU = GU.getSize();
          CU = TU.length / UU;
          const RU = new Float32Array(CU * UU);
          uU = 0;
          for (let gU = uU; gU < CU; ++gU)
            if (3 === UU) {
              const pU = tU.xC.FromArray(TU, gU * UU);
              tU.xC.FromArray(EU, gU * UU).subtractToRef(pU, jU), RU[3 * gU] = jU.x, RU[3 * gU + 1] = jU.y, RU[3 * gU + 2] = jU.z
            } else if (4 === UU) {
            const pU = new tU.Vector4,
              PU = tU.Vector4.FromArray(TU, gU * UU);
            tU.Vector4.FromArray(EU, gU * UU).subtractToRef(PU, pU), RU[4 * gU] = pU.x, RU[4 * gU + 1] = pU.y, RU[4 * gU + 2] = pU.z, RU[4 * gU + 3] = pU.w
          } else pU.Tools.Warn(`Unsupported number of components for color attribute: ${UU}`);
          const KU = gU.createBufferView(RU, 4 * UU),
            cU = gU.createAccessor(KU, 3 === UU ? "VEC3" : "VEC4", 5126, CU, 0);
          PU.push(cU), qU.attributes.COLOR_0 = PU.length - 1
        } else pU.Tools.Warn(`Morph target colors for mesh ${RU.name} were not exported. Mesh does not have colors vertex data`)
      }
      return qU
    }
    var ut = gU(40960);
    class Ct {}
    Ct.DEFAULT_COLOR = AU.e.White(), Ct.DEFAULT_WIDTH_ATTENUATED = 1, Ct.DEFAULT_WIDTH = .1;
    var ht = gU(40472);
    class Qt {
      constructor(UU) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = UU
      }
      moveTo(UU, RU) {
        this._currentPath = new ht.h(UU, RU), this._tempPaths.push(this._currentPath)
      }
      lineTo(UU, RU) {
        this._currentPath.addLineTo(UU, RU)
      }
      quadraticCurveTo(UU, RU, gU, tU) {
        this._currentPath.addQuadraticCurveTo(UU, RU, gU, tU, this._resolution)
      }
      bezierCurveTo(UU, RU, gU, tU, pU, EU) {
        this._currentPath.addBezierCurveTo(UU, RU, gU, tU, pU, EU, this._resolution)
      }
      extractHoles() {
        for (const UU of this._tempPaths) UU.area() > 0 ? this._holes.push(UU) : this._paths.push(UU);
        if (!this._paths.length && this._holes.length) {
          const UU = this._holes;
          this._holes = this._paths, this._paths = UU
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

    function et(UU, RU, gU, tU, pU, EU) {
      const PU = EU.glyphs[UU] || EU.glyphs["?"];
      if (!PU) return null;
      const TU = new Qt(pU);
      if (PU.o) {
        const UU = PU.o.split(" ");
        for (let pU = 0, EU = UU.length; pU < EU;) {
          switch (UU[pU++]) {
            case "m": {
              const EU = parseInt(UU[pU++]) * RU + gU,
                PU = parseInt(UU[pU++]) * RU + tU;
              TU.moveTo(EU, PU);
              break
            }
            case "l": {
              const EU = parseInt(UU[pU++]) * RU + gU,
                PU = parseInt(UU[pU++]) * RU + tU;
              TU.lineTo(EU, PU);
              break
            }
            case "q": {
              const EU = parseInt(UU[pU++]) * RU + gU,
                PU = parseInt(UU[pU++]) * RU + tU,
                qU = parseInt(UU[pU++]) * RU + gU,
                KU = parseInt(UU[pU++]) * RU + tU;
              TU.quadraticCurveTo(qU, KU, EU, PU);
              break
            }
            case "b": {
              const EU = parseInt(UU[pU++]) * RU + gU,
                PU = parseInt(UU[pU++]) * RU + tU,
                qU = parseInt(UU[pU++]) * RU + gU,
                KU = parseInt(UU[pU++]) * RU + tU,
                cU = parseInt(UU[pU++]) * RU + gU,
                GU = parseInt(UU[pU++]) * RU + tU;
              TU.bezierCurveTo(qU, KU, cU, GU, EU, PU);
              break
            }
          }
        }
      }
      return TU.extractHoles(), {
        offsetX: PU.ha * RU,
        shapePath: TU
      }
    }

    function Wt(UU, RU, gU, tU) {
      const pU = Array.from(UU),
        EU = RU / tU.resolution,
        PU = (tU.boundingBox.yMax - tU.boundingBox.yMin + tU.underlineThickness) * EU,
        TU = [];
      let qU = 0,
        KU = 0;
      for (let cU = 0; cU < pU.length; cU++) {
        const UU = pU[cU];
        if ("\n" === UU) qU = 0, KU -= PU;
        else {
          const RU = et(UU, EU, qU, KU, gU, tU);
          RU && (qU += RU.offsetX, TU.push(RU.shapePath))
        }
      }
      return TU
    }
    class ft {
      static ConvertPoints(UU, RU) {
        if (UU.length && Array.isArray(UU) && "number" === typeof UU[0]) return [UU];
        if (UU.length && Array.isArray(UU[0]) && "number" === typeof UU[0][0]) return UU;
        if (UU.length && !Array.isArray(UU[0]) && UU[0] instanceof HU.n) {
          const RU = [];
          for (let gU = 0; gU < UU.length; gU++) {
            const tU = UU[gU];
            RU.push(tU.x, tU.y, tU.z)
          }
          return [RU]
        }
        if (UU.length > 0 && Array.isArray(UU[0]) && UU[0].length > 0 && UU[0][0] instanceof HU.n) {
          const RU = [],
            gU = UU;
          for (const UU of gU) RU.push(UU.flatMap((UU => [UU.x, UU.y, UU.z])));
          return RU
        }
        if (UU instanceof Float32Array) {
          if (RU?.floatArrayStride) {
            const gU = [],
              tU = 3 * RU.floatArrayStride;
            for (let RU = 0; RU < UU.length; RU += tU) {
              const pU = new Array(tU);
              for (let gU = 0; gU < tU; gU++) pU[gU] = UU[RU + gU];
              gU.push(pU)
            }
            return gU
          }
          return [Array.from(UU)]
        }
        if (UU.length && UU[0] instanceof Float32Array) {
          const RU = [];
          for (const gU of UU) RU.push(Array.from(gU));
          return RU
        }
        return []
      }
      static OmitZeroLengthPredicate(UU, RU, gU) {
        const tU = [];
        return RU.subtract(UU).lengthSquared() > 0 && tU.push([UU, RU]), gU.subtract(RU).lengthSquared() > 0 && tU.push([RU, gU]), UU.subtract(gU).lengthSquared() > 0 && tU.push([gU, UU]), 0 === tU.length ? null : tU
      }
      static OmitDuplicatesPredicate(UU, RU, gU, tU) {
        const pU = [];
        return ft._SearchInPoints(UU, RU, tU) || pU.push([UU, RU]), ft._SearchInPoints(RU, gU, tU) || pU.push([RU, gU]), ft._SearchInPoints(gU, UU, tU) || pU.push([gU, UU]), 0 === pU.length ? null : pU
      }
      static _SearchInPoints(UU, RU, gU) {
        for (const tU of gU)
          for (let gU = 0; gU < tU.length; gU++)
            if (tU[gU]?.equals(UU) && (tU[gU + 1]?.equals(RU) || tU[gU - 1]?.equals(RU))) return !0;
        return !1
      }
      static MeshesToLines(UU, RU) {
        const gU = [];
        for (let tU = 0; tU < UU.length; tU++) {
          const pU = UU[tU],
            EU = pU.getVerticesData(SU.l.PositionKind),
            PU = pU.dgU();
          if (EU && PU)
            for (let UU = 0, TU = 0; UU < PU.length; UU++) {
              const qU = 3 * PU[TU++],
                KU = 3 * PU[TU++],
                cU = 3 * PU[TU++],
                GU = new HU.n(EU[qU], EU[qU + 1], EU[qU + 2]),
                jU = new HU.n(EU[KU], EU[KU + 1], EU[KU + 2]),
                uU = new HU.n(EU[cU], EU[cU + 1], EU[cU + 2]);
              if (RU) {
                const TU = RU(GU, jU, uU, gU, UU, qU, pU, tU, EU, PU);
                if (TU)
                  for (const UU of TU) gU.push(UU)
              } else gU.push([GU, jU], [jU, uU], [uU, GU])
            }
        }
        return gU
      }
      static ToVector3Array(UU) {
        if (Array.isArray(UU[0])) {
          const RU = [],
            gU = UU;
          for (const UU of gU) {
            const gU = [];
            for (let RU = 0; RU < UU.length; RU += 3) gU.push(new HU.n(UU[RU], UU[RU + 1], UU[RU + 2]));
            RU.push(gU)
          }
          return RU
        }
        const RU = UU,
          gU = [];
        for (let tU = 0; tU < RU.length; tU += 3) gU.push(new HU.n(RU[tU], RU[tU + 1], RU[tU + 2]));
        return gU
      }
      static ToNumberArray(UU) {
        return UU.flatMap((UU => [UU.x, UU.y, UU.z]))
      }
      static GetPointsCountInfo(UU) {
        const RU = new Array(UU.length);
        let gU = 0;
        for (let tU = UU.length; tU--;) RU[tU] = UU[tU].length / 3, gU += RU[tU];
        return {
          total: gU,
          counts: RU
        }
      }
      static GetLineLength(UU) {
        if (0 === UU.length) return 0;
        let RU;
        RU = "number" === typeof UU[0] ? ft.ToVector3Array(UU) : UU;
        const gU = HU.h.xC[0];
        let tU = 0;
        for (let pU = 0; pU < RU.length - 1; pU++) {
          const UU = RU[pU];
          tU += RU[pU + 1].subtractToRef(UU, gU).length()
        }
        return tU
      }
      static GetLineLengthArray(UU, RU) {
        const gU = RU ? new Float32Array(RU, 0, UU.length / 3) : new Float32Array(UU.length / 3);
        let tU = 0;
        for (let pU = 0, EU = UU.length / 3 - 1; pU < EU; pU++) {
          let RU = UU[3 * pU + 0],
            EU = UU[3 * pU + 1],
            PU = UU[3 * pU + 2];
          RU -= UU[3 * pU + 3], EU -= UU[3 * pU + 4], PU -= UU[3 * pU + 5];
          tU += Math.sqrt(RU * RU + EU * EU + PU * PU), gU[pU + 1] = tU
        }
        return gU
      }
      static SegmentizeSegmentByCount(UU, RU, gU) {
        const tU = [],
          pU = RU.subtract(UU),
          EU = HU.h.xC[0];
        EU.Y5(gU);
        const PU = HU.h.xC[1];
        pU.divideToRef(EU, PU);
        let TU = UU.clone();
        tU.push(TU);
        for (let qU = 0; qU < gU; qU++) TU = TU.clone(), tU.push(TU.addInPlace(PU));
        return tU
      }
      static SegmentizeLineBySegmentLength(UU, RU) {
        const gU = UU[0] instanceof HU.n ? ft.GetLineSegments(UU) : "number" === typeof UU[0] ? ft.GetLineSegments(ft.ToVector3Array(UU)) : UU,
          tU = [];
        for (const pU of gU)
          if (pU.length > RU) {
            const UU = ft.SegmentizeSegmentByCount(pU.point1, pU.point2, Math.ceil(pU.length / RU));
            for (const RU of UU) tU.push(RU)
          } else tU.push(pU.point1), tU.push(pU.point2);
        return tU
      }
      static SegmentizeLineBySegmentCount(UU, RU) {
        const gU = "number" === typeof UU[0] ? ft.ToVector3Array(UU) : UU,
          tU = ft.GetLineLength(gU) / RU;
        return ft.SegmentizeLineBySegmentLength(gU, tU)
      }
      static GetLineSegments(UU) {
        const RU = [];
        for (let gU = 0; gU < UU.length - 1; gU++) {
          const tU = UU[gU],
            pU = UU[gU + 1],
            EU = pU.subtract(tU).length();
          RU.push({
            point1: tU,
            point2: pU,
            length: EU
          })
        }
        return RU
      }
      static GetMinMaxSegmentLength(UU) {
        const RU = ft.GetLineSegments(UU).sort((UU => UU.length));
        return {
          min: RU[0].length,
          max: RU[RU.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pU = RU * gU;
        let EU = 0,
          PU = 0;
        const TU = UU.length;
        for (let KU = 0; KU < TU; KU++) {
          if (pU <= EU + UU[KU].length) {
            PU = KU;
            break
          }
          EU += UU[KU].length
        }
        const qU = (pU - EU) / UU[PU].length;
        return UU[PU].point2.subtractToRef(UU[PU].point1, HU.h.xC[0]), HU.h.xC[0].scaleToRef(qU, HU.h.xC[1]), tU || HU.h.xC[1].addInPlace(UU[PU].point1), HU.h.xC[1].clone()
      }
      static GetCircleLinePoints(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / RU;
        const EU = [];
        for (let PU = 0; PU <= RU; PU++) EU.push(new HU.n(Math.cos(PU * pU) * UU, Math.sin(PU * pU) * tU, gU));
        return EU
      }
      static GetBezierLinePoints(UU, RU, gU, tU) {
        return ht.f.CreateQuadraticBezier(UU, RU, gU, tU).getPoints().flatMap((UU => [UU.x, UU.y, UU.z]))
      }
      static GetArrowCap(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [UU.clone(), UU.add(RU.multiplyByFloats(gU, gU, gU))],
          widths: [tU, pU, EU, PU]
        }
      }
      static GetPointsFromText(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const PU = [],
          TU = Wt(UU, RU, gU, tU);
        for (const qU of TU) {
          for (const UU of qU.paths) {
            const RU = [],
              gU = UU.getPoints();
            for (const UU of gU) RU.push(UU.x, UU.y, pU);
            PU.push(RU)
          }
          if (EU)
            for (const UU of qU.holes) {
              const RU = [],
                gU = UU.getPoints();
              for (const UU of gU) RU.push(UU.x, UU.y, pU);
              PU.push(RU)
            }
        }
        return PU
      }
      static Color3toRGBAUint8(UU) {
        const RU = new Uint8Array(4 * UU.length);
        for (let gU = 0, tU = 0; gU < UU.length; gU++) RU[tU++] = 255 * UU[gU].r, RU[tU++] = 255 * UU[gU].g, RU[tU++] = 255 * UU[gU].b, RU[tU++] = 255;
        return RU
      }
      static CreateColorsTexture(UU, RU, gU, tU) {
        const pU = tU.WC().getCaps().maxTextureSize ?? 1,
          EU = RU.length > pU ? pU : RU.length,
          PU = Math.ceil(RU.length / pU);
        PU > 1 && (RU = [...RU, ...Array(EU * PU - RU.length).fill(RU[0])]);
        const TU = ft.Color3toRGBAUint8(RU),
          qU = new IU.e(TU, EU, PU, cg.c.TEXTUREFORMAT_RGBA, tU, !1, !0, gU);
        return qU.name = UU, qU
      }
      static PrepareEmptyColorsTexture(UU) {
        if (!Ct.EmptyColorsTexture) {
          const RU = new Uint8Array(4);
          Ct.EmptyColorsTexture = new IU.e(RU, 1, 1, cg.c.TEXTUREFORMAT_RGBA, UU, !1, !1, IU.e.NEAREST_NEAREST), Ct.EmptyColorsTexture.name = "grlEmptyColorsTexture", Ct.EmptyColorsTexture.HZ.addOnce((() => {
            Ct.EmptyColorsTexture = null
          }))
        }
        return Ct.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Ct.EmptyColorsTexture?.dispose(), Ct.EmptyColorsTexture = null
      }
      static BooleanToNumber(UU) {
        return UU ? 1 : 0
      }
    }
    class xt extends sU.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class mt extends yU.b {
      isCompatible(UU) {
        return !0
      }
      constructor(UU, RU, gU) {
        gU = gU || {
          color: Ct.DEFAULT_COLOR
        };
        const tU = new xt;
        tU.GREASED_LINE_HAS_COLOR = !!gU.color && !gU.useColors, tU.GREASED_LINE_SIZE_ATTENUATION = gU.sizeAttenuation ?? !1, tU.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === gU.colorDistributionType, tU.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (RU ?? UU.aZ()).useRightHandedSystem, tU.GREASED_LINE_CAMERA_FACING = gU.cameraFacing ?? !0, super(UU, mt.GREASED_LINE_MATERIAL_NAME, 200, tU, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = gU?.forceGLSL || mt.ForceGLSL, this._scene = RU ?? UU.aZ(), this._engine = this._scene.WC(), this._cameraFacing = gU.cameraFacing ?? !0, this.visibility = gU.visibility ?? 1, this.useDash = gU.useDash ?? !1, this.dashRatio = gU.dashRatio ?? .5, this.dashOffset = gU.dashOffset ?? 0, this.width = gU.width ? gU.width : gU.sizeAttenuation ? Ct.DEFAULT_WIDTH_ATTENUATED : Ct.DEFAULT_WIDTH, this._sizeAttenuation = gU.sizeAttenuation ?? !1, this.colorMode = gU.colorMode ?? 0, this._color = gU.color ?? null, this.useColors = gU.useColors ?? !1, this._colorsDistributionType = gU.colorDistributionType ?? 0, this.colorsSampling = gU.colorsSampling ?? IU.e.NEAREST_NEAREST, this._colors = gU.colors ?? null, this.dashCount = gU.dashCount ?? 1, this.resolution = gU.resolution ?? new HU.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), gU.colorsTexture ? this.colorsTexture = gU.colorsTexture : this._colors ? this.colorsTexture = ft.CreateColorsTexture(`${UU.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Ct.DEFAULT_COLOR, ft.PrepareEmptyColorsTexture(this._scene)), this._engine.HZ.add((() => {
          ft.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(UU) {
        UU.push("grl_offsets"), UU.push("grl_widths"), UU.push("grl_colorPointers"), UU.push("grl_counters"), this._cameraFacing ? (UU.push("grl_previousAndSide"), UU.push("grl_nextAndCounters")) : UU.push("grl_slopes")
      }
      getSamplers(UU) {
        UU.push("grl_colors")
      }
      getActiveTextures(UU) {
        this.colorsTexture && UU.push(this.colorsTexture)
      }
      getUniforms() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const RU = [{
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
        return this._cameraFacing && RU.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === UU && RU.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: RU,
          vertex: this._cameraFacing && this._isGLSL(UU) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(UU) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(UU) {
        if (this._cameraFacing) {
          UU.p_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || UU.p_("viewProjection", this._scene.getTransformMatrix());
          const RU = HU.h.Vector4[0];
          RU.x = this._aspect, RU.y = this._resolution.x, RU.z = this._resolution.y, RU.w = this.width, UU.updateVector4("grl_aspect_resolution_lineWidth", RU)
        }
        const RU = HU.h.Vector4[0];
        RU.x = ft.BooleanToNumber(this.useDash), RU.y = this._dashArray, RU.z = this.dashOffset, RU.w = this.dashRatio, UU.updateVector4("grl_dashOptions", RU);
        const gU = HU.h.Vector4[1];
        gU.x = this.colorMode, gU.y = this.visibility, gU.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, gU.w = ft.BooleanToNumber(this.useColors), UU.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", gU), this._color && UU.updateColor3("grl_singleColor", this._color);
        const tU = this.colorsTexture ?? Ct.EmptyColorsTexture;
        UU.setTexture("grl_colors", tU), UU.updateFloat2("grl_textureSize", tU?.getSize().width ?? 1, tU?.getSize().height ?? 1)
      }
      prepareDefines(UU, RU, gU) {
        UU.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, UU.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, UU.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, UU.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = RU.useRightHandedSystem, UU.GREASED_LINE_CAMERA_FACING = this._cameraFacing, UU.GREASED_LINE_USE_OFFSETS = !!gU.offsets
      }
      getClassName() {
        return mt.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(RU) ? function(UU, RU) {
          if ("vertex" === UU) {
            const UU = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return RU && (UU["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), UU
          }
          return "fragment" === UU ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(UU, this._cameraFacing) : function(UU, RU) {
          if ("vertex" === UU) {
            const UU = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return RU && (UU["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), UU
          }
          return "fragment" === UU ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(UU, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(UU) {
        this.setColors(UU)
      }
      setColors(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this._colors?.length ?? 0;
        if (this._colors = UU, null !== UU && 0 !== UU.length) {
          if (!RU || gU)
            if (this.colorsTexture && tU === UU.length && !gU) {
              const RU = ft.Color3toRGBAUint8(UU);
              this.colorsTexture.update(RU)
            } else this.colorsTexture?.dispose(), this.colorsTexture = ft.CreateColorsTexture(`${this._material.name}-colors-texture`, UU, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(UU) {
        this._dashCount = UU, this._dashArray = 1 / UU
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(UU) {
        this._sizeAttenuation = UU, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(UU) {
        this.setColor(UU)
      }
      setColor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== UU || null !== this._color && null === UU ? (this._color = UU, RU || this.markAllDefinesAsDirty()) : this._color = UU
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(UU) {
        this._colorsDistributionType = UU, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(UU) {
        this._aspect = UU.x / UU.y, this._resolution = UU
      }
      serialize() {
        const UU = super.serialize(),
          RU = {
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
        return this._colors && (RU.colors = this._colors), this._color && (RU.color = this._color), UU.greasedLineMaterialOptions = RU, UU
      }
      parse(UU, RU, gU) {
        super.parse(UU, RU, gU);
        const tU = UU.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), tU.color && this.setColor(tU.color, !0), tU.colorDistributionType && (this.colorsDistributionType = tU.colorDistributionType), tU.colors && (this.colors = tU.colors), tU.colorsSampling && (this.colorsSampling = tU.colorsSampling), tU.colorMode && (this.colorMode = tU.colorMode), tU.useColors && (this.useColors = tU.useColors), tU.visibility && (this.visibility = tU.visibility), tU.useDash && (this.useDash = tU.useDash), tU.dashCount && (this.dashCount = tU.dashCount), tU.dashRatio && (this.dashRatio = tU.dashRatio), tU.dashOffset && (this.dashOffset = tU.dashOffset), tU.width && (this.width = tU.width), tU.sizeAttenuation && (this.sizeAttenuation = tU.sizeAttenuation), tU.resolution && (this.resolution = tU.resolution), this.colors ? this.colorsTexture = ft.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, RU) : ft.PrepareEmptyColorsTexture(RU), this.markAllDefinesAsDirty()
      }
      copyTo(UU) {
        const RU = UU;
        RU.colorsTexture?.dispose(), this._colors && (RU.colorsTexture = ft.CreateColorsTexture(`${RU._material.name}-colors-texture`, this._colors, RU.colorsSampling, this._scene)), RU.setColor(this.color, !0), RU.colorsDistributionType = this.colorsDistributionType, RU.colorsSampling = this.colorsSampling, RU.colorMode = this.colorMode, RU.useColors = this.useColors, RU.visibility = this.visibility, RU.useDash = this.useDash, RU.dashCount = this.dashCount, RU.dashRatio = this.dashRatio, RU.dashOffset = this.dashOffset, RU.width = this.width, RU.sizeAttenuation = this.sizeAttenuation, RU.resolution = this.resolution, RU.markAllDefinesAsDirty()
      }
      _isGLSL(UU) {
        return 0 === UU || this._forceGLSL
      }
    }
    mt.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", mt.ForceGLSL = !1;
    var It = gU(39782),
      Jt = gU(39792),
      wt = gU(38234),
      nt = gU(39847),
      bt = gU(39211);
    class ot extends nt.l {
      constructor(UU, RU, tU) {
        const pU = RU.WC(),
          EU = pU.isWebGPU && !(tU.forceGLSL || ot.ForceGLSL),
          PU = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        RU.useRightHandedSystem && PU.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const TU = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        tU.cameraFacing ? (PU.push("GREASED_LINE_CAMERA_FACING"), TU.push("grl_previousAndSide", "grl_nextAndCounters")) : (TU.push("grl_slopes"), TU.push("grl_counters"));
        const qU = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (EU || qU.push("world", "viewProjection", "view", "projection"), super(UU, RU, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: EU ? ["Scene", "Mesh"] : void 0,
            attributes: TU,
            uniforms: qU,
            samplers: EU ? [] : ["grlColors"],
            defines: PU,
            extraInitializationsAsync: async () => {
              EU ? await Promise.all([gU.e(324).then((() => gU(61238))), gU.e(383).then((() => gU(61246)))]) : await Promise.all([gU.e(317).then((() => gU(61252))), gU.e(384).then((() => gU(61257)))])
            },
            shaderLanguage: EU ? 1 : 0
          }), this._color = AU.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, tU = tU || {
            color: Ct.DEFAULT_COLOR
          }, this.visibility = tU.visibility ?? 1, this.useDash = tU.useDash ?? !1, this.dashRatio = tU.dashRatio ?? .5, this.dashOffset = tU.dashOffset ?? 0, this.dashCount = tU.dashCount ?? 1, this.width = tU.width ? tU.width : tU.sizeAttenuation && tU.cameraFacing ? Ct.DEFAULT_WIDTH_ATTENUATED : Ct.DEFAULT_WIDTH, this.sizeAttenuation = tU.sizeAttenuation ?? !1, this.color = tU.color ?? AU.e.White(), this.useColors = tU.useColors ?? !1, this.colorsDistributionType = tU.colorDistributionType ?? 0, this.colorsSampling = tU.colorsSampling ?? IU.e.NEAREST_NEAREST, this.colorMode = tU.colorMode ?? 0, this._colors = tU.colors ?? null, this._cameraFacing = tU.cameraFacing ?? !0, this.resolution = tU.resolution ?? new HU.l(pU.getRenderWidth(), pU.getRenderHeight()), tU.colorsTexture ? this.colorsTexture = tU.colorsTexture : this._colors ? this.colorsTexture = ft.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, RU) : (this._color = this._color ?? Ct.DEFAULT_COLOR, this.colorsTexture = ft.PrepareEmptyColorsTexture(RU)), EU) {
          const UU = new bt.c;
          UU.setParameters(), UU.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", UU)
        }
        pU.HZ.add((() => {
          ft.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Ct.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new HU.l(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(UU) {
        this.setColors(UU)
      }
      setColors(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this._colors?.length ?? 0;
        if (this._colors = UU, null !== UU && 0 !== UU.length) {
          if (!RU || gU)
            if (this._colorsTexture && tU === UU.length && !gU) {
              const RU = ft.Color3toRGBAUint8(UU);
              this._colorsTexture.update(RU)
            } else this._colorsTexture && this._colorsTexture !== Ct.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = ft.CreateColorsTexture(`${this.name}-colors-texture`, UU, this.colorsSampling, this.aZ())
        } else {
          this._colorsTexture && this._colorsTexture !== Ct.EmptyColorsTexture && this._colorsTexture.dispose();
          const UU = this.aZ();
          UU && (this.colorsTexture = ft.PrepareEmptyColorsTexture(UU))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(UU) {
        this._colorsTexture = UU, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(UU) {
        this._width = UU, this.setFloat("grlWidth", UU)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(UU) {
        this._useColors = UU, this.setFloat("grlUseColors", ft.BooleanToNumber(UU))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(UU) {
        this._colorsSampling = UU
      }
      get visibility() {
        return this._visibility
      }
      set visibility(UU) {
        this._visibility = UU, this.setFloat("grlVisibility", UU)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(UU) {
        this._useDash = UU, this.setFloat("grlUseDash", ft.BooleanToNumber(UU))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(UU) {
        this._dashOffset = UU, this.setFloat("grlDashOffset", UU)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(UU) {
        this._dashRatio = UU, this.setFloat("grlDashRatio", UU)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(UU) {
        this._dashCount = UU, this._dashArray = 1 / UU, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(UU) {
        this._sizeAttenuation = UU, this.setFloat("grlSizeAttenuation", ft.BooleanToNumber(UU))
      }
      get color() {
        return this._color
      }
      set color(UU) {
        this.setColor(UU)
      }
      setColor(UU) {
        UU = UU ?? Ct.DEFAULT_COLOR, this._color = UU, this.setColor3("grlColor", UU)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(UU) {
        this._colorsDistributionType = UU, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(UU) {
        this._colorMode = UU, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(UU) {
        this._resolution = UU, this.setVector2("grlResolution", UU), this.setFloat("grlAspect", UU.x / UU.y)
      }
      serialize() {
        const UU = super.serialize(),
          RU = {
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
        return this._colors && (RU.colors = this._colors), UU.greasedLineMaterialOptions = RU, UU
      }
      parse(UU, RU, gU) {
        const tU = UU.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), tU.color && (this.color = tU.color), tU.colorDistributionType && (this.colorsDistributionType = tU.colorDistributionType), tU.colorsSampling && (this.colorsSampling = tU.colorsSampling), tU.colorMode && (this.colorMode = tU.colorMode), tU.useColors && (this.useColors = tU.useColors), tU.visibility && (this.visibility = tU.visibility), tU.useDash && (this.useDash = tU.useDash), tU.dashCount && (this.dashCount = tU.dashCount), tU.dashRatio && (this.dashRatio = tU.dashRatio), tU.dashOffset && (this.dashOffset = tU.dashOffset), tU.width && (this.width = tU.width), tU.sizeAttenuation && (this.sizeAttenuation = tU.sizeAttenuation), tU.resolution && (this.resolution = tU.resolution), tU.colors ? this.colorsTexture = ft.CreateColorsTexture(`${this.name}-colors-texture`, tU.colors, this.colorsSampling, this.aZ()) : this.colorsTexture = ft.PrepareEmptyColorsTexture(RU), this._cameraFacing = tU.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Zt, Yt, Bt;
    ot.ForceGLSL = !1,
      function(UU) {
        UU[UU.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", UU[UU.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Zt || (Zt = {})),
      function(UU) {
        UU[UU.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", UU[UU.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", UU[UU.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Yt || (Yt = {})),
      function(UU) {
        UU[UU.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", UU[UU.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", UU[UU.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", UU[UU.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", UU[UU.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Bt || (Bt = {}));
    class Vt extends It.c {
      constructor(UU, RU, gU) {
        super(UU, RU, null, null, !1, !1), this.name = UU, this._options = gU, this._lazy = !1, this._updatable = !1, this._engine = RU.WC(), this._lazy = gU.lazy ?? !1, this._updatable = gU.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = gU.colorPointers ?? [], this._widths = gU.widths ?? new Array(gU.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(UU) {
        let RU = 0;
        for (const tU of this._points) RU += tU.length;
        const gU = RU / 3 * 2 - this._widths.length;
        for (let tU = 0; tU < gU; tU++) this._widths.push(UU)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.IC && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(UU, RU) {
        for (const gU of UU) this._points.push(gU);
        this._lazy || this.setPoints(this._points, RU)
      }
      dispose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(UU, RU)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(UU) {
        this._uvs = UU instanceof Float32Array ? UU : new Float32Array(UU), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(UU) {
        this.material instanceof ot && this.material.setDefine("GREASED_LINE_USE_OFFSETS", UU?.length > 0), this._offsets = UU, this._offsetsBuffer ? this._offsetsBuffer.update(UU) : this._createOffsetsBuffer(UU)
      }
      get widths() {
        return this._widths
      }
      set widths(UU) {
        this._widths = UU, this._lazy || this._widthsBuffer && this._widthsBuffer.update(UU)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(UU) {
        this._colorPointers = UU, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(UU)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof ot) return this.material;
        const UU = this.material?.pluginManager?.getPlugin(mt.GREASED_LINE_MATERIAL_NAME);
        return UU || void 0
      }
      get points() {
        const UU = [];
        return wt.c.DeepCopy(this._points, UU), UU
      }
      setPoints(UU, RU) {
        this._points = ft.ConvertPoints(UU, RU?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), RU?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, RU)
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
      serialize(UU) {
        super.serialize(UU), UU.type = this.getClassName(), UU.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new Jt.b;
        return RU.positions = this._vertexPositions, RU.indices = this._indices, RU.uvs = this._uvs, UU && (RU.normals = [], Jt.b.ComputeNormals(this._vertexPositions, this._indices, RU.normals)), RU.applyToMesh(this, this._options.updatable), RU
      }
      _createOffsetsBuffer(UU) {
        const RU = this._scene.WC(),
          gU = new SU.e(RU, UU, this._updatable, 3);
        this.setVerticesBuffer(gU.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = gU
      }
    }
    class rt {
      constructor(UU, RU) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = UU, this.wasAddedByNoopNode = RU
      }
      getIndicesAccessor(UU, RU, gU, tU, pU) {
        return this._indicesAccessorMap.get(UU)?.get(RU)?.get(gU)?.get(tU)?.get(pU)
      }
      setIndicesAccessor(UU, RU, gU, tU, pU, EU) {
        let PU = this._indicesAccessorMap.get(UU);
        PU || (PU = new Map, this._indicesAccessorMap.set(UU, PU));
        let TU = PU.get(RU);
        TU || (TU = new Map, PU.set(RU, TU));
        let qU = TU.get(gU);
        qU || (qU = new Map, TU.set(gU, qU));
        let KU = qU.get(tU);
        KU || (KU = new Map, qU.set(tU, KU)), KU.set(pU, EU)
      }
      pushExportedNode(UU) {
        this._exportedNodes.has(UU) || this._exportedNodes.add(UU)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(UU) {
        return this._vertexBufferViewMap.get(UU)
      }
      setVertexBufferView(UU, RU) {
        this._vertexBufferViewMap.set(UU, RU)
      }
      setRemappedBufferView(UU, RU, gU) {
        this._remappedBufferView.set(UU, new Map), this._remappedBufferView.get(UU).set(RU, gU)
      }
      getRemappedBufferView(UU, RU) {
        return this._remappedBufferView.get(UU)?.get(RU)
      }
      getVertexAccessor(UU, RU, gU) {
        return this._vertexAccessorMap.get(UU)?.get(RU)?.get(gU)
      }
      setVertexAccessor(UU, RU, gU, tU) {
        let pU = this._vertexAccessorMap.get(UU);
        pU || (pU = new Map, this._vertexAccessorMap.set(UU, pU));
        let EU = pU.get(RU);
        EU || (EU = new Map, pU.set(RU, EU)), EU.set(gU, tU)
      }
      hasVertexColorAlpha(UU) {
        return this._vertexMapColorAlpha.get(UU) || !1
      }
      setHasVertexColorAlpha(UU, RU) {
        return this._vertexMapColorAlpha.set(UU, RU)
      }
      getMesh(UU) {
        return this._meshMap.get(UU)
      }
      setMesh(UU, RU) {
        this._meshMap.set(UU, RU)
      }
      bindMorphDataToMesh(UU, RU) {
        const gU = this._meshMorphTargetMap.get(UU) || [];
        this._meshMorphTargetMap.set(UU, gU), -1 === gU.indexOf(RU) && gU.push(RU)
      }
      getMorphTargetsFromMesh(UU) {
        return this._meshMorphTargetMap.get(UU)
      }
    }
    class Xt {
      _ApplyExtension(UU, RU, gU, tU) {
        if (gU >= RU.length) return Promise.resolve(UU);
        const pU = tU(RU[gU], UU);
        return pU ? pU.then((async UU => UU ? await this._ApplyExtension(UU, RU, gU + 1, tU) : null)) : this._ApplyExtension(UU, RU, gU + 1, tU)
      }
      _ApplyExtensions(UU, RU) {
        const gU = [];
        for (const tU of Xt._ExtensionNames) gU.push(this._extensions[tU]);
        return this._ApplyExtension(UU, gU, 0, RU)
      }
      _extensionsPostExportNodeAsync(UU, RU, gU, tU, pU) {
        return this._ApplyExtensions(RU, ((RU, EU) => RU.postExportNodeAsync && RU.postExportNodeAsync(UU, EU, gU, tU, pU, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(UU, RU, gU) {
        return this._ApplyExtensions(RU, ((RU, tU) => RU.postExportMaterialAsync && RU.postExportMaterialAsync(UU, tU, gU)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        return await Promise.all(Xt._ExtensionNames.map((async pU => {
          const EU = this._extensions[pU];
          if (EU.postExportMaterialAdditionalTexturesAsync) {
            const pU = await EU.postExportMaterialAdditionalTexturesAsync(UU, RU, gU);
            tU.push(...pU)
          }
        }))), tU
      }
      _extensionsPostExportTextures(UU, RU, gU) {
        for (const tU of Xt._ExtensionNames) {
          const pU = this._extensions[tU];
          pU.postExportTexture && pU.postExportTexture(UU, RU, gU)
        }
      }
      _extensionsPostExportMeshPrimitive(UU) {
        for (const RU of Xt._ExtensionNames) {
          const gU = this._extensions[RU];
          gU.postExportMeshPrimitive && gU.postExportMeshPrimitive(UU, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const UU of Xt._ExtensionNames) {
          const RU = this._extensions[UU];
          RU.preGenerateBinaryAsync && await RU.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(UU) {
        for (const RU of Xt._ExtensionNames) {
          const gU = this._extensions[RU];
          gU.enabled && UU(gU)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((UU => {
          var RU, gU, tU;
          UU.wasUsed && ((RU = this._glTF).extensionsUsed || (RU.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(UU.name) && this._glTF.extensionsUsed.push(UU.name), UU.required && ((gU = this._glTF).extensionsRequired || (gU.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(UU.name) && this._glTF.extensionsRequired.push(UU.name)), (tU = this._glTF).extensions || (tU.extensions = {}), UU.onExporting && UU.onExporting())
        }))
      }
      _loadExtensions() {
        for (const UU of Xt._ExtensionNames) {
          const RU = Xt._ExtensionFactories[UU](this);
          this._extensions[UU] = RU
        }
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hU.c.LastCreatedScene,
          RU = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${CU.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new ag(this), this._extensions = {}, this._bufferManager = new gt, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !UU) throw new Error("No scene available to export");
        this._babylonScene = UU, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: UU => UU?.eZ?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...RU
        }, this._loadExtensions()
      }
      dispose() {
        for (const UU in this._extensions) {
          this._extensions[UU].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Xt.UnregisterExtension(UU) && pU.Tools.Warn(`Extension with the name ${UU} already exists`), Xt._ExtensionFactories[UU] = RU;
        const tU = gU ?? 0;
        Xt._ExtensionOrders[UU] = tU;
        let EU = Xt._ExtensionNames.length;
        for (let pU = 0; pU < Xt._ExtensionNames.length; pU++) {
          const UU = Xt._ExtensionNames[pU];
          if (tU < Xt._ExtensionOrders[UU]) {
            EU = pU;
            break
          }
        }
        Xt._ExtensionNames.splice(EU, 0, UU)
      }
      static UnregisterExtension(UU) {
        if (!Xt._ExtensionFactories[UU]) return !1;
        delete Xt._ExtensionFactories[UU], delete Xt._ExtensionOrders[UU];
        const RU = Xt._ExtensionNames.indexOf(UU);
        return -1 !== RU && Xt._ExtensionNames.splice(RU, 1), !0
      }
      _generateJSON(UU, RU, gU) {
        const tU = {
          byteLength: UU
        };
        return tU.byteLength && (this._glTF.buffers = [tU]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Zh = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (tU.uri = RU + ".bin"), gU ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(UU) {
        const RU = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gU = this._generateJSON(RU.byteLength, UU, !0),
          tU = new Blob([RU], {
            type: "application/octet-stream"
          }),
          pU = UU + ".gltf",
          EU = UU + ".bin",
          PU = new KU;
        if (PU.files[pU] = gU, PU.files[EU] = tU, this._imageData)
          for (const TU in this._imageData) PU.files[TU] = this._imageData[TU];
        return PU
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(UU) {
        const RU = UU % 4;
        return 0 === RU ? RU : 4 - RU
      }
      async generateGLBAsync(UU) {
        this._shouldUseGlb = !0;
        const RU = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const gU = this._generateJSON(RU.byteLength),
          tU = UU + ".glb";
        let pU, EU = gU.length;
        if ("undefined" !== typeof TextEncoder) {
          pU = (new TextEncoder).encode(gU), EU = pU.length
        }
        const PU = this._getPadding(EU),
          TU = this._getPadding(RU.byteLength),
          qU = 28 + EU + PU + RU.byteLength + TU,
          cU = new Ut(qU);
        if (cU.writeUInt32(1179937895), cU.writeUInt32(2), cU.writeUInt32(qU), cU.writeUInt32(EU + PU), cU.writeUInt32(1313821514), pU) cU.writeTypedArray(pU);
        else {
          const UU = "_".charCodeAt(0);
          for (let RU = 0; RU < EU; ++RU) {
            const tU = gU.charCodeAt(RU);
            tU != gU.codePointAt(RU) ? cU.writeUInt8(UU) : cU.writeUInt8(tU)
          }
        }
        for (let KU = 0; KU < PU; ++KU) cU.writeUInt8(32);
        cU.writeUInt32(RU.byteLength + TU), cU.writeUInt32(5130562), cU.writeTypedArray(RU);
        for (let KU = 0; KU < TU; ++KU) cU.writeUInt8(0);
        const GU = new KU;
        return GU.files[tU] = new Blob([cU.getOutputData()], {
          type: "application/octet-stream"
        }), GU
      }
      _setNodeTransformation(UU, RU, gU) {
        if (RU.getPivotPoint().equalsWithEpsilon(vg, Vg.e) || pU.Tools.Warn("Pivot points are not supported in the glTF serializer"), !RU.position.equalsWithEpsilon(vg, Vg.e)) {
          const pU = tU.TmpVectors.xC[0].PgU(RU.position);
          gU && ig(pU), UU.translation = pU.vgU()
        }
        RU.ep.equalsWithEpsilon(Hg, Vg.e) || (UU.scale = RU.ep.vgU());
        const EU = RU.rotationQuaternion?.clone() || tU.Quaternion.FromEulerAngles(RU.rotation.x, RU.rotation.y, RU.rotation.z);
        EU.equalsWithEpsilon(dg, Vg.e) || (gU && Ag(EU), UU.rotation = EU.normalize().vgU())
      }
      _setCameraTransformation(UU, RU, gU) {
        const pU = tU.TmpVectors.xC[0],
          EU = tU.TmpVectors.Quaternion[0],
          PU = RU.getWorldMatrix();
        if (RU.parent) {
          const UU = RU.parent.getWorldMatrix().invertToRef(tU.TmpVectors.Matrix[0]);
          PU.multiplyToRef(UU, tU.TmpVectors.Matrix[1]).decompose(void 0, EU, pU)
        } else PU.decompose(void 0, EU, pU);
        pU.equalsWithEpsilon(vg, Vg.e) || (gU && ig(pU), UU.translation = pU.vgU()), gU && Ag(EU), this._babylonScene.useRightHandedSystem || zg(EU), EU.equalsWithEpsilon(dg, Vg.e) || (UU.rotation = EU.vgU())
      }
      _listAvailableCameras() {
        for (const UU of this._babylonScene.cameras) {
          const RU = {
            type: UU.mode === tt.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (UU.name && (RU.name = UU.name), "perspective" === RU.type) RU.perspective = {
            aspectRatio: UU.WC().getAspectRatio(UU),
            yfov: UU.fovMode === tt.d.FOVMODE_VERTICAL_FIXED ? UU.fov : UU.fov * UU.WC().getAspectRatio(UU),
            znear: UU.minZ,
            zfar: UU.maxZ
          };
          else if ("orthographic" === RU.type) {
            const gU = UU.orthoLeft && UU.orthoRight ? .5 * (UU.orthoRight - UU.orthoLeft) : .5 * UU.WC().getRenderWidth(),
              tU = UU.orthoBottom && UU.orthoTop ? .5 * (UU.orthoTop - UU.orthoBottom) : .5 * UU.WC().getRenderHeight();
            RU.orthographic = {
              xmag: gU,
              ymag: tU,
              znear: UU.minZ,
              zfar: UU.maxZ
            }
          }
          this._camerasMap.set(UU, RU)
        }
      }
      _exportAndAssignCameras() {
        const UU = Array.from(this._camerasMap.values());
        for (const RU of UU) {
          const UU = this._nodesCameraMap.get(RU);
          if (void 0 !== UU) {
            this._cameras.push(RU);
            for (const RU of UU) RU.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const UU of this._babylonScene.skeletons) {
          if (UU.bones.length <= 0) continue;
          const RU = {
            joints: []
          };
          this._skinMap.set(UU, RU)
        }
      }
      _exportAndAssignSkeletons(UU) {
        for (const gU of this._babylonScene.skeletons) {
          if (gU.bones.length <= 0) continue;
          const EU = this._skinMap.get(gU);
          if (void 0 == EU) continue;
          const PU = {};
          let TU = -1;
          for (let UU = 0; UU < gU.bones.length; ++UU) {
            const RU = gU.bones[UU],
              tU = RU.getIndex() ?? UU; - 1 !== tU && (PU[tU] = RU, tU > TU && (TU = tU))
          }
          const qU = [];
          for (let gU = 0; gU <= TU; ++gU) {
            const TU = PU[gU],
              KU = TU.getTransformNode(),
              cU = KU ? this._nodeMap.get(KU) : void 0;
            if (void 0 === cU) {
              pU.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            EU.joints.push(cU);
            const GU = TU.getAbsoluteInverseBindMatrix().clone();
            UU.has(KU) && (RU = GU, rg.invertToRef(tU.TmpVectors.Matrix[0]).multiplyToRef(RU, RU).multiplyToRef(rg, RU)), qU.push(GU)
          }
          const KU = this._nodesSkinMap.get(EU);
          if (EU.joints.length > 0 && void 0 !== KU) {
            const UU = new Float32Array(16 * qU.length);
            qU.forEach(((RU, gU) => {
              UU.set(RU.m, 16 * gU)
            }));
            const RU = this._bufferManager.createBufferView(UU);
            this._accessors.push(this._bufferManager.createAccessor(RU, "MAT4", 5126, qU.length)), EU.inverseBindMatrices = this._accessors.length - 1, this._skins.push(EU);
            const gU = this._skins.length - 1;
            for (const tU of KU) tU.skin = gU
          }
        }
        var RU
      }
      async _exportSceneAsync() {
        const UU = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const RU = this._options.metadataSelector(this._babylonScene.metadata);
          RU && (UU.extras = RU)
        }
        const RU = new Array,
          gU = new Array,
          tU = new Array,
          pU = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let EU;
        if (pU && !this._options.includeCoordinateSystemConversionNodes)
          for (const KU of this._babylonScene.animationGroups)
            for (const UU of KU.targetedAnimations) {
              const RU = UU.target;
              RU instanceof GU.d && !RU.parent && (EU ?? (EU = new Set)).add(RU)
            }
        for (const KU of this._babylonScene.rootNodes) {
          const UU = KU.animations,
            PU = !!UU && UU.length > 0 || EU?.has(KU);
          pU && !this._options.includeCoordinateSystemConversionNodes && Xg(KU, this._babylonScene.useRightHandedSystem) && !PU ? tU.push(...KU.getChildren()) : this._babylonScene.useRightHandedSystem ? RU.push(KU) : gU.push(KU)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const PU = new rt(!0, !1);
        UU.nodes.push(...await this._exportNodesAsync(gU, PU));
        const TU = new rt(!1, !1);
        UU.nodes.push(...await this._exportNodesAsync(RU, TU));
        const qU = new rt(!1, !0);
        UU.nodes.push(...await this._exportNodesAsync(tU, qU)), UU.nodes.length && this._scenes.push(UU), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(PU.getNodesSet()), this._babylonScene.animationGroups.length && Gt._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, PU.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(UU) {
        return this._nodeMap.get(UU)
      }
      _getAnimationIndex(UU) {
        return this._animationGroupMap.get(UU)
      }
      _getCameraIndex(UU) {
        const RU = this._camerasMap.get(UU);
        if (!RU) return;
        const gU = this._cameras.indexOf(RU);
        return gU >= 0 ? gU : void 0
      }
      _getMaterialIndex(UU) {
        return this._materialMap.get(UU)
      }
      _getRootIndex(UU, RU) {
        switch (UU) {
          case "nodes":
            return this._getNodeIndex(RU);
          case "animations":
            return this._getAnimationIndex(RU);
          case "cameras":
            return this._getCameraIndex(RU);
          case "materials":
            return this._getMaterialIndex(RU);
          case "meshes": {
            const UU = this._getNodeIndex(RU);
            return void 0 === UU ? void 0 : this._nodes[UU]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(RU)?.index;
          case "images": {
            const UU = this._materialExporter.getTextureInfo(RU)?.index;
            if (void 0 === UU) return;
            const gU = this._textures[UU];
            for (const RU of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const UU = gU?.extensions?.[RU]?.source;
              if ("number" === typeof UU) return UU
            }
            return gU?.source
          }
          case "samplers": {
            const UU = this._materialExporter.getTextureInfo(RU)?.index;
            return void 0 === UU ? void 0 : this._textures[UU]?.sampler
          }
          case "skins": {
            const UU = this._skinMap.get(RU),
              gU = UU ? this._skins.indexOf(UU) : -1;
            return gU >= 0 ? gU : void 0
          }
          case "scenes":
            return RU === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(UU, RU, gU) {
        const tU = this._nodes[UU];
        if (!tU) throw new Error(`Cannot write ${RU}: glTF node ${UU} does not exist.`);
        tU.extensions || (tU.extensions = {}), tU.extensions[RU] = gU
      }
      _shouldExportNode(UU) {
        let RU = this._shouldExportNodeMap.get(UU);
        return void 0 === RU && (RU = this._options.shouldExportNode(UU), this._shouldExportNodeMap.set(UU, RU)), RU
      }
      async _exportNodesAsync(UU, RU) {
        const gU = new Array;
        this._exportBuffers(UU, RU);
        for (const tU of UU) await this._exportNodeAsync(tU, gU, RU);
        return gU
      }
      _collectBuffers(UU, RU, gU, tU, pU) {
        if (this._shouldExportNode(UU) && UU instanceof jU.e && UU.geometry) {
          const EU = UU.geometry.getVertexBuffers();
          if (EU)
            for (const tU in EU) {
              if (!kg(tU)) continue;
              const PU = EU[tU];
              pU.setHasVertexColorAlpha(PU, UU.hasVertexAlpha);
              const TU = PU._buffer,
                qU = RU.get(TU) || [];
              RU.set(TU, qU), -1 === qU.indexOf(PU) && qU.push(PU);
              const KU = gU.get(PU) || [];
              gU.set(PU, KU), -1 === KU.indexOf(UU) && KU.push(UU)
            }
          const PU = UU.morphTargetManager;
          if (PU)
            for (let RU = 0; RU < PU.numTargets; RU++) {
              const gU = PU.getTarget(RU),
                pU = tU.get(gU) || [];
              tU.set(gU, pU), -1 === pU.indexOf(UU) && pU.push(UU)
            }
        }
        for (const EU of UU.getChildren()) this._collectBuffers(EU, RU, gU, tU, pU)
      }
      _exportBuffers(UU, RU) {
        const gU = new Map,
          tU = new Map,
          pU = new Map;
        for (const TU of UU) this._collectBuffers(TU, gU, tU, pU, RU);
        const EU = Array.from(gU.keys());
        for (const TU of EU) {
          const UU = TU.getData();
          if (!UU) throw new Error("Buffer data is not available");
          const pU = gU.get(TU);
          if (!pU) continue;
          const EU = pU[0].byteStride;
          if (pU.some((UU => UU.byteStride !== EU))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const PU = Lg(UU).slice();
          for (const RU of pU) {
            const UU = tU.get(RU),
              {
                byteOffset: gU,
                byteStride: pU,
                componentCount: EU,
                type: TU,
                count: qU,
                normalized: KU,
                kind: GU
              } = sg(RU, UU);
            switch (GU) {
              case cU.e.NormalKind:
              case cU.e.TangentKind:
                (0, Yg.i)(PU, gU, pU, EU, TU, qU, KU, (UU => {
                  const RU = Math.sqrt(UU[0] * UU[0] + UU[1] * UU[1] + UU[2] * UU[2]);
                  if (RU > 0) {
                    const gU = 1 / RU;
                    UU[0] *= gU, UU[1] *= gU, UU[2] *= gU
                  }
                }));
                break;
              case cU.e.ColorKind: {
                const RU = UU.filter((UU => UU.material instanceof Et.StandardMaterial || null == UU.material)).length;
                if (0 == RU) break;
                if (RU != UU.length) {
                  oU.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                TU == cU.e.UNSIGNED_BYTE && oU.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const tU = new QU.Color3,
                  GU = new QU.c,
                  jU = this._babylonScene.WC().useExactSrgbConversions;
                (0, Yg.i)(PU, gU, pU, EU, TU, qU, KU, (UU => {
                  3 === UU.length ? (tU.bRU(UU, 0), tU.toLinearSpaceToRef(tU, jU), tU.toArray(UU, 0)) : (GU.bRU(UU, 0), GU.toLinearSpaceToRef(GU, jU), GU.toArray(UU, 0))
                }))
              }
            }
          }
          if (RU.convertToRightHanded) {
            for (const UU of pU) {
              const RU = tU.get(UU),
                {
                  byteOffset: gU,
                  byteStride: pU,
                  componentCount: EU,
                  type: TU,
                  count: qU,
                  normalized: KU,
                  kind: GU
                } = sg(UU, RU);
              switch (GU) {
                case cU.e.PositionKind:
                case cU.e.NormalKind:
                case cU.e.TangentKind:
                  (0, Yg.i)(PU, gU, pU, EU, TU, qU, KU, (UU => {
                    UU[0] = -UU[0]
                  }))
              }
            }
            RU.convertedToRightHandedBuffers.set(TU, PU)
          }
          const qU = this._bufferManager.createBufferView(PU, EU);
          RU.setVertexBufferView(TU, qU);
          const KU = new Map;
          for (const RU of pU) {
            const UU = tU.get(RU),
              {
                kind: gU,
                totalVertices: pU
              } = sg(RU, UU);
            switch (gU) {
              case cU.e.MatricesIndicesKind:
              case cU.e.MatricesIndicesExtraKind:
                if (RU.type == cU.e.FLOAT) {
                  const UU = RU.getFloatData(pU);
                  null !== UU && KU.set(RU, UU)
                }
            }
          }
          0 !== KU.size && oU.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const GU = Array.from(KU.keys());
          for (const gU of GU) {
            const UU = KU.get(gU);
            if (!UU) continue;
            const tU = UU.some((UU => UU >= 256)),
              pU = new(tU ? Uint16Array : Uint8Array)(UU.length);
            for (let RU = 0; RU < UU.length; RU++) pU[RU] = UU[RU];
            const EU = this._bufferManager.createBufferView(pU, 4 * (tU ? 2 : 1));
            RU.setRemappedBufferView(TU, gU, EU)
          }
        }
        const PU = Array.from(pU.keys());
        for (const TU of PU) {
          const UU = pU.get(TU);
          if (!UU) continue;
          const gU = jt(TU, UU[0], this._bufferManager, this._bufferViews, this._accessors, RU.convertToRightHanded);
          for (const tU of UU) RU.bindMorphDataToMesh(tU, gU)
        }
      }
      async _exportNodeAsync(UU, RU, gU) {
        let tU = this._nodeMap.get(UU);
        if (void 0 !== tU) return void(RU.includes(tU) || RU.push(tU));
        const pU = await this._createNodeAsync(UU, gU);
        if (pU) {
          tU = this._nodes.length, this._nodes.push(pU), this._nodeMap.set(UU, tU), gU.pushExportedNode(UU), RU.push(tU);
          const EU = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            PU = [];
          this._babylonScene.animationGroups.length || (Gt._CreateMorphTargetAnimationFromMorphTargetAnimations(UU, EU, PU, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gU.convertToRightHanded, this._options.shouldExportAnimation), UU.animations.length && Gt._CreateNodeAnimationFromNodeAnimations(UU, EU, PU, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gU.convertToRightHanded, this._options.shouldExportAnimation)), EU.channels.length && EU.samplers.length && this._animations.push(EU), PU.forEach((UU => {
            UU.channels.length && UU.samplers.length && this._animations.push(UU)
          }))
        }
        const EU = pU ? [] : RU;
        for (const PU of UU.getChildren()) await this._exportNodeAsync(PU, EU, gU);
        pU && EU.length && (pU.children = EU)
      }
      async _createNodeAsync(UU, RU) {
        if (!this._shouldExportNode(UU)) return null;
        const gU = {};
        if (UU.name && (gU.name = UU.name), UU.metadata) {
          const RU = this._options.metadataSelector(UU.metadata);
          RU && (gU.extras = RU)
        }
        if (UU instanceof GU.d && (this._setNodeTransformation(gU, UU, RU.convertToRightHanded), UU instanceof jU.e)) {
          const tU = UU instanceof uU.c ? UU.VtU : UU;
          if (tU.ZI && tU.ZI.length > 0 && (gU.mesh = await this._exportMeshAsync(tU, RU)), UU.skeleton) {
            const RU = this._skinMap.get(UU.skeleton);
            void 0 !== RU && (void 0 === this._nodesSkinMap.get(RU) && this._nodesSkinMap.set(RU, []), this._nodesSkinMap.get(RU)?.push(gU))
          }
        }
        if (UU instanceof Bg.i) {
          const tU = this._camerasMap.get(UU);
          if (tU) {
            void 0 === this._nodesCameraMap.get(tU) && this._nodesCameraMap.set(tU, []), this._setCameraTransformation(gU, UU, RU.convertToRightHanded);
            const pU = UU.parent;
            if (null !== pU && Dg(UU, pU)) {
              const UU = this._nodeMap.get(pU);
              if (void 0 !== UU) {
                const RU = this._nodes[UU];
                return Mg(gU, RU), this._nodesCameraMap.get(tU)?.push(RU), null
              }
            }
            this._nodesCameraMap.get(tU)?.push(gU)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", gU, UU, this._nodeMap, RU.convertToRightHanded) ? gU : (oU.e.Warn(`Not exporting node ${UU.name}`), null)
      }
      _exportIndices(UU, RU, gU, tU, pU, PU, TU, qU, KU) {
        let cU = null;
        KU.mode = function(UU) {
          switch (UU) {
            case EU.c.TriangleFillMode:
              return 4;
            case EU.c.TriangleStripDrawMode:
              return 5;
            case EU.c.TriangleFanDrawMode:
              return 6;
            case EU.c.PointListDrawMode:
            case EU.c.PointFillMode:
              return 0;
            case EU.c.LineLoopDrawMode:
              return 2;
            case EU.c.LineListDrawMode:
              return 1;
            case EU.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${UU}`)
        }(PU);
        const GU = TU !== EU.c.CounterClockWiseSideOrientation && function(UU) {
          switch (UU) {
            case EU.c.TriangleFillMode:
            case EU.c.TriangleStripDrawMode:
            case EU.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(PU);
        if (GU) {
          if (PU === EU.c.TriangleStripDrawMode || PU === EU.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const TU = RU ? new Uint32Array(tU) : new Uint16Array(tU);
          if (UU)
            for (let RU = 0; RU + 2 < tU; RU += 3) TU[RU] = UU[gU + RU] + pU, TU[RU + 1] = UU[gU + RU + 2] + pU, TU[RU + 2] = UU[gU + RU + 1] + pU;
          else
            for (let UU = 0; UU + 2 < tU; UU += 3) TU[UU] = UU, TU[UU + 1] = UU + 2, TU[UU + 2] = UU + 1;
          cU = TU
        } else if (UU && 0 !== pU) {
          const EU = RU ? new Uint32Array(tU) : new Uint16Array(tU);
          for (let RU = 0; RU < tU; RU++) EU[RU] = UU[gU + RU] + pU;
          cU = EU
        } else UU && (cU = function(UU, RU, gU, tU) {
          let pU = UU;
          return 0 === RU && gU === UU.length || (pU = Array.isArray(UU) ? UU.slice(RU, RU + gU) : UU.subarray(RU, RU + gU)), pU instanceof Int32Array ? new Uint32Array(pU.buffer, pU.byteOffset, pU.length) : Array.isArray(pU) ? tU ? new Uint32Array(pU) : new Uint16Array(pU) : pU
        }(UU, gU, tU, RU));
        if (cU) {
          let EU = qU.getIndicesAccessor(UU, gU, tU, pU, GU);
          if (void 0 === EU) {
            const PU = this._bufferManager.createBufferView(cU),
              TU = RU ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(PU, "SCALAR", TU, tU, 0)), EU = this._accessors.length - 1, qU.setIndicesAccessor(UU, gU, tU, pU, GU, EU)
          }
          KU.indices = EU
        }
      }
      _exportVertexBuffer(UU, RU, gU, tU, pU, EU) {
        const PU = UU.getKind();
        if (!kg(PU)) return;
        if (PU.startsWith("uv") && !this._options.exportUnusedUVs && (!RU || !this._materialNeedsUVsSet.has(RU))) return;
        let TU = pU.getVertexAccessor(UU, gU, tU);
        if (void 0 === TU) {
          const RU = pU.convertedToRightHandedBuffers.get(UU._buffer) || UU._buffer.getData(),
            EU = PU === cU.e.PositionKind ? function(UU, RU, gU, tU) {
              const {
                byteOffset: pU,
                byteStride: EU,
                type: PU,
                normalized: TU
              } = RU, qU = RU.getSize(), KU = new Array(qU).fill(1 / 0), cU = new Array(qU).fill(-1 / 0);
              return (0, Yg.i)(UU, pU + gU * EU, EU, qU, PU, tU * qU, TU, (UU => {
                for (let RU = 0; RU < qU; RU++) KU[RU] = Math.min(KU[RU], UU[RU]), cU[RU] = Math.max(cU[RU], UU[RU])
              })), {
                min: KU,
                max: cU
              }
            }(RU, UU, gU, tU) : void 0,
            qU = (PU === cU.e.MatricesIndicesKind || PU === cU.e.MatricesIndicesExtraKind) && UU.type === cU.e.FLOAT,
            KU = qU ? cU.e.UNSIGNED_BYTE : UU.type,
            GU = qU ? void 0 : UU.normalized,
            jU = qU ? pU.getRemappedBufferView(UU._buffer, UU) : pU.getVertexBufferView(UU._buffer),
            uU = UU.byteOffset + gU * UU.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(jU, function(UU, RU) {
            if (UU == cU.e.ColorKind) return RU ? "VEC4" : "VEC3";
            switch (UU) {
              case cU.e.PositionKind:
              case cU.e.NormalKind:
                return "VEC3";
              case cU.e.TangentKind:
              case cU.e.MatricesIndicesKind:
              case cU.e.MatricesIndicesExtraKind:
              case cU.e.MatricesWeightsKind:
              case cU.e.MatricesWeightsExtraKind:
                return "VEC4";
              case cU.e.UVKind:
              case cU.e.UV2Kind:
              case cU.e.UV3Kind:
              case cU.e.UV4Kind:
              case cU.e.UV5Kind:
              case cU.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${UU}`)
          }(PU, pU.hasVertexColorAlpha(UU)), KU, tU, uU, EU, GU)), TU = this._accessors.length - 1, pU.setVertexAccessor(UU, gU, tU, TU)
        }
        EU.attributes[function(UU) {
          switch (UU) {
            case cU.e.PositionKind:
              return "POSITION";
            case cU.e.NormalKind:
              return "NORMAL";
            case cU.e.TangentKind:
              return "TANGENT";
            case cU.e.ColorKind:
              return "COLOR_0";
            case cU.e.UVKind:
              return "TEXCOORD_0";
            case cU.e.UV2Kind:
              return "TEXCOORD_1";
            case cU.e.UV3Kind:
              return "TEXCOORD_2";
            case cU.e.UV4Kind:
              return "TEXCOORD_3";
            case cU.e.UV5Kind:
              return "TEXCOORD_4";
            case cU.e.UV6Kind:
              return "TEXCOORD_5";
            case cU.e.MatricesIndicesKind:
              return "JOINTS_0";
            case cU.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case cU.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case cU.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${UU}`)
        }(PU)] = TU
      }
      async _exportMaterialAsync(UU, RU, gU, tU) {
        let pU = this._materialMap.get(UU);
        if (void 0 === pU) {
          const tU = RU && Object.keys(RU).some((UU => UU.startsWith("uv")));
          if ((UU = UU instanceof pt.c ? UU.x_[gU.materialIndex] : UU) instanceof IR) pU = await this._materialExporter.exportPBRMaterialAsync(UU, tU);
          else if (UU instanceof Et.StandardMaterial) pU = await this._materialExporter.exportStandardMaterialAsync(UU, tU);
          else {
            if (!(UU instanceof lR)) return void oU.e.Warn(`Unsupported material '${UU.name}' with type ${UU.getClassName()}`);
            pU = await this._materialExporter.exportOpenPBRMaterialAsync(UU, tU)
          }
          this._materialMap.set(UU, pU)
        }
        tU.material = pU
      }
      async _exportMeshAsync(UU, RU) {
        let gU = RU.getMesh(UU);
        if (void 0 !== gU) return gU;
        const tU = {
          primitives: []
        };
        gU = this._meshes.length, this._meshes.push(tU), RU.setMesh(UU, gU);
        const pU = UU.isUnIndexed ? null : UU.dgU(),
          PU = UU.geometry?.getVertexBuffers(),
          TU = RU.getMorphTargetsFromMesh(UU),
          qU = UU instanceof ut.d,
          KU = UU instanceof Vt,
          cU = UU.ZI;
        if (PU && cU && cU.length > 0)
          for (const GU of cU) {
            const gU = {
                attributes: {}
              },
              cU = GU.JC() || this._babylonScene.defaultMaterial;
            if (KU) {
              const RU = {
                  name: cU.name
                },
                tU = UU,
                pU = QU.Color3.White(),
                EU = tU.material?.alpha ?? 1,
                PU = tU.greasedLineMaterial?.color ?? pU;
              (!PU.equalsWithEpsilon(pU, Vg.e) || EU < 1) && (RU.pbrMetallicRoughness = {
                baseColorFactor: [...PU.vgU(), EU]
              }), this._materials.push(RU), gU.material = this._materials.length - 1
            } else if (qU) {
              const RU = {
                  name: cU.name
                },
                tU = UU;
              (!tU.color.equalsWithEpsilon(QU.Color3.White(), Vg.e) || tU.alpha < 1) && (RU.pbrMetallicRoughness = {
                baseColorFactor: [...tU.color.vgU(), tU.alpha]
              }), this._materials.push(RU), gU.material = this._materials.length - 1
            } else await this._exportMaterialAsync(cU, PU, GU, gU);
            const jU = qU || KU ? EU.c.LineListDrawMode : UU.overrideRenderingFillMode ?? cU.fillMode;
            let uU = cU._getEffectiveOrientation(UU);
            RU.wasAddedByNoopNode && !UU.aZ().useRightHandedSystem && (uU = uU === EU.c.ClockWiseSideOrientation ? EU.c.CounterClockWiseSideOrientation : EU.c.ClockWiseSideOrientation), this._exportIndices(pU, pU ? (0, Yg.e)(pU, GU.indexCount, GU.indexStart, GU.verticesStart) : GU.verticesCount > 65535, pU ? GU.indexStart : GU.verticesStart, pU ? GU.indexCount : GU.verticesCount, -GU.verticesStart, jU, uU, RU, gU);
            for (const UU of Object.values(PU)) this._exportVertexBuffer(UU, cU, GU.verticesStart, GU.verticesCount, RU, gU);
            if (TU) {
              gU.targets = [];
              for (const UU of TU) gU.targets.push(UU.attributes)
            }
            tU.primitives.push(gU), this._extensionsPostExportMeshPrimitive(gU)
          }
        if (TU) {
          tU.weights = [], tU.extras || (tU.extras = {}), tU.extras.targetNames = [];
          for (const UU of TU) tU.weights.push(UU.influence), tU.extras.targetNames.push(UU.name)
        }
        return gU
      }
    }
    Xt._ExtensionNames = new Array, Xt._ExtensionFactories = {}, Xt._ExtensionOrders = {};
    class vt {
      static async GLTFAsync(UU, RU, gU) {
        gU && gU.exportWithoutWaitingForScene || await UU.whenReadyAsync();
        const tU = new Xt(UU, gU),
          pU = await tU.generateGLTFAsync(RU.replace(/\.[^/.]+$/, ""));
        return tU.dispose(), pU
      }
      static async GLBAsync(UU, RU, gU) {
        gU && gU.exportWithoutWaitingForScene || await UU.whenReadyAsync();
        const tU = new Xt(UU, gU),
          pU = await tU.generateGLBAsync(RU.replace(/\.[^/.]+$/, ""));
        return tU.dispose(), pU
      }
    }
    const dt = "EXT_mesh_gpu_instancing";

    function Ht(UU, RU) {
      const gU = new Float32Array(3 * RU);
      for (let tU = 0; tU < RU; tU++) gU[3 * tU + 0] = UU[4 * tU + 0], gU[3 * tU + 1] = UU[4 * tU + 1], gU[3 * tU + 2] = UU[4 * tU + 2];
      return gU
    }
    class St {
      constructor(UU) {
        this.name = dt, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(UU, RU, gU, tU, pU, EU) {
        return await new Promise((UU => {
          if (RU && gU instanceof It.c && gU.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const UU = HU.n.Zero(),
              tU = HU.d.Identity(),
              PU = HU.n.One(),
              TU = gU.thinInstanceGetWorldMatrices(),
              qU = HU.h.xC[2],
              KU = HU.h.Quaternion[1],
              cU = HU.h.xC[3];
            let GU = !1,
              jU = !1,
              uU = !1;
            const CU = new Float32Array(3 * gU.I6),
              hU = new Float32Array(4 * gU.I6),
              QU = new Float32Array(3 * gU.I6);
            let eU = 0;
            for (const RU of TU) RU.decompose(cU, KU, qU), pU && (ig(qU), Ag(KU)), CU.set(qU.vgU(), 3 * eU), hU.set(KU.normalize().vgU(), 4 * eU), QU.set(cU.vgU(), 3 * eU), GU = GU || !qU.equalsWithEpsilon(UU), jU = jU || !KU.equalsWithEpsilon(tU), uU = uU || !cU.equalsWithEpsilon(PU), eU++;
            const WU = {
              attributes: {}
            };
            GU && (WU.attributes.TRANSLATION = this._buildAccessor(CU, "VEC3", gU.I6, EU)), jU && (WU.attributes.ROTATION = this._buildAccessor(hU, "VEC4", gU.I6, EU)), uU && (WU.attributes.SCALE = this._buildAccessor(QU, "VEC3", gU.I6, EU));
            let fU = gU._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (fU) {
              const UU = gU.I6,
                RU = "VEC3";
              gU.hasVertexAlpha && fU.length === 4 * UU ? (this._instanceColorWarned || (oU.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), fU = Ht(fU, UU)) : fU.length === 4 * UU && (fU = Ht(fU, UU)), fU.length === 3 * UU && (WU.attributes._COLOR_0 = this._buildAccessor(fU, RU, UU, EU))
            }
            RU.extensions = RU.extensions || {}, RU.extensions[dt] = WU
          }
          UU(RU)
        }))
      }
      _buildAccessor(UU, RU, gU, tU) {
        const pU = tU.createBufferView(UU),
          EU = tU.createAccessor(pU, RU, 5126, gU);
        return this._exporter._accessors.push(EU), this._exporter._accessors.length - 1
      }
    }
    let st = !1;

    function yt() {
      st || (st = !0, Xt.RegisterExtension(dt, (UU => new St(UU))))
    }
    gU(39864);
    yt();
    var kt = gU(41199);

    function Ft(UU, RU, gU, tU) {
      const pU = UU;
      let EU = null,
        PU = null,
        TU = null,
        qU = null;
      const KU = {},
        cU = RU.find((UU => "POSITION" === UU.dracoName));
      if (!cU) throw new Error("Draco: Missing position attribute for encoding.");
      if (!gU) {
        const UU = cU.data.length / cU.size;
        gU = new(UU > 65535 ? Uint32Array : Uint16Array)(UU);
        for (let RU = 0; RU < UU; RU++) gU[RU] = RU
      }
      try {
        EU = new pU.Encoder, PU = new pU.MeshBuilder, TU = new pU.Mesh, PU.AddFacesToMesh(TU, gU.length / 3, gU);
        const UU = new Map([
          [Float32Array, (UU, RU, gU, tU, pU, EU) => UU.AddFloatAttribute(RU, gU, tU, pU, EU)],
          [Uint32Array, (UU, RU, gU, tU, pU, EU) => UU.AddUInt32Attribute(RU, gU, tU, pU, EU)],
          [Uint16Array, (UU, RU, gU, tU, pU, EU) => UU.AddUInt16Attribute(RU, gU, tU, pU, EU)],
          [Uint8Array, (UU, RU, gU, tU, pU, EU) => UU.AddUInt8Attribute(RU, gU, tU, pU, EU)],
          [Int32Array, (UU, RU, gU, tU, pU, EU) => UU.AddInt32Attribute(RU, gU, tU, pU, EU)],
          [Int16Array, (UU, RU, gU, tU, pU, EU) => UU.AddInt16Attribute(RU, gU, tU, pU, EU)],
          [Int8Array, (UU, RU, gU, tU, pU, EU) => UU.AddInt8Attribute(RU, gU, tU, pU, EU)]
        ]);
        for (const gU of RU) {
          gU.data instanceof Uint8ClampedArray && (gU.data = new Uint8Array(gU.data));
          const RU = UU.get(gU.data.constructor),
            qU = gU.data.length / gU.size;
          KU[gU.kind] = RU(PU, TU, pU[gU.dracoName], qU, gU.size, gU.data), tU.quantizationBits && tU.quantizationBits[gU.dracoName] && EU.SetAttributeQuantization(pU[gU.dracoName], tU.quantizationBits[gU.dracoName])
        }
        tU.method && EU.SetEncodingMethod(pU[tU.method]), void 0 !== tU.encodeSpeed && void 0 !== tU.decodeSpeed && EU.SetSpeedOptions(tU.encodeSpeed, tU.decodeSpeed), qU = new pU.DracoInt8Array;
        const cU = EU.EncodeMeshToDracoBuffer(TU, qU);
        if (cU <= 0) throw new Error("Draco: Failed to encode.");
        const GU = new Int8Array(cU);
        for (let RU = 0; RU < cU; RU++) GU[RU] = qU.GetValue(RU);
        return {
          data: GU,
          attributeIds: KU
        }
      } finally {
        TU && pU.destroy(TU), PU && pU.destroy(PU), EU && pU.destroy(EU), qU && pU.destroy(qU)
      }
    }

    function it() {
      let UU;
      onmessage = RU => {
        const gU = RU.data;
        switch (gU.id) {
          case "init": {
            gU.url && importScripts(gU.url);
            const RU = gU.wasmBinary ? {
              wasmBinary: gU.wasmBinary
            } : {};
            UU = DracoEncoderModule(RU), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!UU) throw new Error("Draco: Encoder module is not available.");
            UU.then((UU => {
              const RU = Ft(UU, gU.attributes, gU.indices, gU.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: RU
              }, RU ? [RU.data.buffer] : void 0)
            })).catch((UU => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: UU.message
              })
            }))
        }
      }
    }
    class At {
      constructor(UU) {
        if (UU.workerPool) return void(this._workerPoolPromise = Promise.resolve(UU.workerPool));
        const RU = UU.wasmBinary,
          gU = UU.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          tU = gU && "function" === typeof Worker && "function" === typeof URL,
          pU = tU || !UU.jsModule,
          EU = UU.wasmUrl && UU.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: pU ? wR.g.GetBabylonScriptURL(UU.wasmUrl, !0) : "",
            wasmBinaryPromise: RU ? Promise.resolve(RU) : wR.g.LoadFileAsync(wR.g.GetBabylonScriptURL(UU.wasmBinaryUrl, !0))
          } : {
            url: pU ? wR.g.GetBabylonScriptURL(UU.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        tU ? this._workerPoolPromise = EU.wasmBinaryPromise.then((UU => {
          const RU = this._getWorkerContent(),
            tU = URL.createObjectURL(new Blob([RU], {
              type: "application/javascript"
            }));
          return new kt.d(gU, (() => async function(UU, RU, gU) {
            return await new Promise(((tU, pU) => {
              const EU = RU => {
                  UU.removeEventListener("error", EU), UU.removeEventListener("message", PU), pU(RU)
                },
                PU = RU => {
                  "initDone" === RU.data.id && (UU.removeEventListener("error", EU), UU.removeEventListener("message", PU), tU(UU))
                };
              if (UU.addEventListener("error", EU), UU.addEventListener("message", PU), RU) {
                const tU = RU.slice(0);
                UU.postMessage({
                  id: "init",
                  url: gU,
                  wasmBinary: tU
                }, [tU])
              } else UU.postMessage({
                id: "init",
                url: gU
              })
            }))
          }(new Worker(tU), UU, EU.url)))
        })) : this._modulePromise = EU.wasmBinaryPromise.then((async RU => {
          if (!this._isModuleAvailable() && !UU.jsModule) {
            if (!EU.url) throw new Error("Draco codec module is not available");
            await wR.g.LoadBabylonScriptAsync(EU.url)
          }
          return await this._createModuleAsync(RU, UU.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((UU => {
          UU.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function zt() {
      const UU = UU => !!UU && "object" === typeof UU;
      for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
      return gU.reduce(((RU, gU) => {
        const tU = Object.keys(gU);
        for (const pU of tU) {
          const tU = RU[pU],
            EU = gU[pU];
          Array.isArray(tU) && Array.isArray(EU) ? RU[pU] = tU.concat(EU) : UU(tU) && UU(EU) ? RU[pU] = zt(tU, EU) : RU[pU] = EU
        }
        return RU
      }), {})
    }

    function Mt(UU) {
      return UU === SU.l.PositionKind ? "POSITION" : UU === SU.l.NormalKind ? "NORMAL" : UU === SU.l.ColorKind ? "COLOR" : UU.startsWith(SU.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Dt = {
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
    class Lt extends At {
      static get DefaultAvailable() {
        return !!((UU = Lt.DefaultConfiguration).wasmUrl && (UU.wasmBinary || UU.wasmBinaryUrl) && "object" === typeof WebAssembly || UU.fallbackUrl);
        var UU
      }
      static get Default() {
        return Lt._Default ?? (Lt._Default = new Lt), Lt._Default
      }
      static ResetDefault(UU) {
        Lt._Default && (UU || Lt._Default.dispose(), Lt._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(UU, RU) {
        return {
          module: await (RU || DracoEncoderModule)({
            wasmBinary: UU
          })
        }
      }
      _getWorkerContent() {
        return `${Ft}(${it})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt.DefaultConfiguration)
      }
      async _encodeAsync(UU, RU, gU) {
        const tU = gU ? zt(Dt, gU) : Dt;
        if (this._workerPoolPromise) {
          const gU = await this._workerPoolPromise;
          return await new Promise(((pU, EU) => {
            gU.push(((gU, PU) => {
              const TU = UU => {
                  gU.removeEventListener("error", TU), gU.removeEventListener("message", qU), EU(UU), PU()
                },
                qU = UU => {
                  "encodeMeshSuccess" === UU.data.id ? (gU.removeEventListener("error", TU), gU.removeEventListener("message", qU), pU(UU.data.encodedMeshData), PU()) : "encodeMeshError" === UU.data.id && (gU.removeEventListener("error", TU), gU.removeEventListener("message", qU), EU(new Error(UU.data.errorMessage)), PU())
                };
              gU.addEventListener("error", TU), gU.addEventListener("message", qU);
              const KU = [];
              for (const RU of UU) KU.push(RU.data.buffer);
              RU && KU.push(RU.buffer), gU.postMessage({
                id: "encodeMesh",
                attributes: UU,
                indices: RU,
                options: tU
              }, KU)
            }))
          }))
        }
        if (this._modulePromise) {
          return Ft((await this._modulePromise).module, UU, RU, tU)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(UU, RU) {
        if (0 == UU.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        UU instanceof It.c && UU.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === RU?.method && (oU.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), RU.method = "MESH_SEQUENTIAL_ENCODING");
        const gU = function(UU) {
            let RU = UU.dgU(void 0, !0);
            return !RU || RU instanceof Uint32Array || RU instanceof Uint16Array || (RU = ((0, Yg.e)(RU, RU.length) ? Uint32Array : Uint16Array).from(RU)), RU
          }(UU),
          tU = function(UU, RU) {
            const gU = [];
            for (const tU of UU.getVerticesDataKinds()) {
              if (RU?.includes(tU)) {
                if (tU === SU.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const pU = UU.getVertexBuffer(tU),
                EU = pU.getSize(),
                PU = (0, Yg.r)(pU.getData(), EU, pU.type, pU.byteOffset, pU.byteStride, UU.getTotalVertices(), !0);
              gU.push({
                kind: tU,
                dracoName: Mt(tU),
                size: EU,
                data: PU
              })
            }
            return gU
          }(UU, RU?.excludedAttributes);
        return await this._encodeAsync(tU, gU, RU)
      }
    }
    Lt.DefaultConfiguration = {
      wasmUrl: `${wR.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${wR.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${wR.g._DefaultCdnUrl}/draco_encoder.js`
    }, Lt._Default = null;
    const Nt = "KHR_draco_mesh_compression";
    class lt {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = Nt, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === UU.options.meshCompressionMethod && Lt.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(UU, RU, gU) {
        if (!this.enabled) return;
        if (4 !== UU.mode && 5 !== UU.mode) return void oU.e.Warn("Cannot compress primitive with mode " + UU.mode + ".");
        const tU = [],
          pU = [];
        let EU = null;
        if (void 0 !== UU.indices) {
          const PU = gU[UU.indices],
            TU = RU.getBufferView(PU);
          EU = RU.getData(TU).slice(), tU.push(TU), pU.push(PU)
        }
        const PU = [];
        for (const [cU, GU] of Object.entries(UU.attributes)) {
          const UU = gU[GU],
            EU = RU.getBufferView(UU),
            qU = yg(UU.type),
            KU = (0, Yg.r)(RU.getData(EU), qU, UU.componentType, UU.byteOffset || 0, EU.byteStride || (0, Yg.o)(UU.componentType) * qU, UU.count, !0);
          PU.push({
            kind: cU,
            dracoName: (TU = cU, "POSITION" === TU ? "POSITION" : "NORMAL" === TU ? "NORMAL" : TU.startsWith("COLOR") ? "COLOR" : TU.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: yg(UU.type),
            data: KU
          }), tU.push(EU), pU.push(UU)
        }
        var TU;
        const qU = {
            method: UU.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          KU = Lt.Default._encodeAsync(PU, EU, qU).then((gU => {
            const EU = {
                bufferView: -1,
                attributes: gU.attributeIds
              },
              PU = RU.createBufferView(gU.data);
            RU.setBufferView(EU, PU);
            for (const UU of tU) this._bufferViewsUsed.add(UU);
            for (const UU of pU) this._accessorsUsed.add(UU);
            UU.extensions || (UU.extensions = {}), UU.extensions[Nt] = EU
          })).catch((UU => {
            oU.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + UU.message)
          }));
        this._encodePromises.push(KU), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(UU) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((RU => {
          UU.getPropertiesWithBufferView(RU).every((UU => this._accessorsUsed.has(UU))) && UU.removeBufferView(RU)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Ot = !1;

    function Up() {
      Ot || (Ot = !0, Xt.RegisterExtension(Nt, (UU => new lt(UU))))
    }
    Up();
    var Rp = gU(40953);
    const gp = "KHR_lights_punctual",
      tp = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      pp = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Ep = HU.n.Backward();
    class Pp {
      constructor(UU) {
        this.name = gp, this.enabled = !0, this.required = !1, this._exporter = UU
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[gp] = this._lights
      }
      async postExportNodeAsync(UU, RU, gU, tU, pU) {
        return await new Promise((EU => {
          if (!(gU instanceof ct.e)) return void EU(RU);
          const PU = gU.getTypeID() == ct.e.LIGHTTYPEID_POINTLIGHT ? "point" : gU.getTypeID() == ct.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : gU.getTypeID() == ct.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!PU || !(gU instanceof Rp.d)) return oU.e.Warn(`${UU}: Light ${gU.name} is not supported in ${gp}`), void EU(RU);
          if (gU.falloffType !== ct.e.FALLOFF_GLTF && oU.e.Warn(`${UU}: Light falloff for ${gU.name} does not match the ${gp} specification!`), !gU.position.cPU(0, 0, 0)) {
            const UU = HU.h.xC[0].PgU(gU.position);
            pU && ig(UU), RU.translation = UU.vgU()
          }
          if ("point" !== PU) {
            const UU = gU.direction.normalizeToRef(HU.h.xC[0]);
            pU && ig(UU);
            const tU = HU.d.FromUnitVectorsToRef(Ep, UU, HU.h.Quaternion[0]);
            HU.d.IsIdentity(tU) || (RU.rotation = tU.vgU())
          }
          const TU = {
            type: PU,
            name: gU.name,
            color: gU.diffuse.vgU(),
            intensity: gU.intensity,
            range: gU.range
          };
          if (Ng(TU, tp), "spot" === PU) {
            const UU = gU;
            TU.spot = {
              innerConeAngle: UU.innerAngle / 2,
              outerConeAngle: UU.angle / 2
            }, Ng(TU.spot, pp)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(TU);
          const qU = {
              light: this._lights.lights.length - 1
            },
            KU = gU.parent;
          if (KU && Dg(gU, KU)) {
            const UU = tU.get(KU);
            if (UU) {
              const gU = this._exporter._nodes[UU];
              return Mg(RU, gU), gU.extensions || (gU.extensions = {}), gU.extensions[gp] = qU, void EU(null)
            }
          }
          RU.extensions || (RU.extensions = {}), RU.extensions[gp] = qU, EU(RU)
        }))
      }
    }
    let Tp = !1;

    function qp() {
      Tp || (Tp = !0, Xt.RegisterExtension(gp, (UU => new Pp(UU))))
    }
    qp();
    const Kp = "KHR_interactivity";
    class cp {
      constructor(UU) {
        this._exporter = UU, this.name = Kp, this.enabled = !!UU.options.khrInteractivity, this.required = UU.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var UU, RU, gU;
        const tU = this._exporter.options.khrInteractivity;
        if (!tU) return;
        const pU = tU.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: UU => this._exporter._getNodeIndex(UU),
          getAnimationIndex: UU => this._exporter._getAnimationIndex(UU),
          getCameraIndex: UU => this._exporter._getCameraIndex(UU),
          getMaterialIndex: UU => this._exporter._getMaterialIndex(UU),
          getRootIndex: (UU, RU) => this._exporter._getRootIndex(UU, RU),
          setNodeExtension: (UU, RU, gU) => this._exporter._setNodeExtension(UU, RU, gU)
        });
        this._exporter._glTF.extensions[Kp] = pU;
        for (const EU of tU.additionalExtensionsUsed)(UU = this._exporter._glTF).extensionsUsed || (UU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(EU) && this._exporter._glTF.extensionsUsed.push(EU);
        for (const EU of tU.additionalExtensionsRequired)(RU = this._exporter._glTF).extensionsUsed || (RU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(EU) && this._exporter._glTF.extensionsUsed.push(EU), (gU = this._exporter._glTF).extensionsRequired || (gU.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(EU) && this._exporter._glTF.extensionsRequired.push(EU)
      }
    }
    let Gp = !1;

    function jp() {
      Gp || (Gp = !0, Xt.RegisterExtension(Kp, (UU => new cp(UU)), 200))
    }
    jp();
    const Cp = "EXT_lights_area",
      hp = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Qp = {
        aspect: 1
      },
      ep = HU.n.Backward();
    class Wp {
      constructor(UU) {
        this.name = Cp, this.enabled = !0, this.required = !1, this._exporter = UU
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Cp] = this._lights
      }
      async postExportNodeAsync(UU, RU, gU, tU, pU) {
        return await new Promise((EU => {
          if (!(gU instanceof ct.e)) return void EU(RU);
          const PU = gU.getTypeID() == ct.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!PU) return oU.e.Warn(`${UU}: Light ${gU.name} is not supported in ${Cp}`), void EU(RU);
          const TU = gU;
          if (TU.falloffType !== ct.e.FALLOFF_GLTF && oU.e.Warn(`${UU}: Light falloff for ${gU.name} does not match the ${Cp} specification!`), !TU.position.cPU(0, 0, 0)) {
            const UU = HU.h.xC[0].PgU(TU.position);
            pU && ig(UU), RU.translation = UU.vgU()
          }
          const qU = HU.n.Forward();
          pU && ig(qU);
          const KU = HU.d.FromUnitVectorsToRef(ep, qU, HU.h.Quaternion[0]);
          HU.d.IsIdentity(KU) || (RU.rotation = KU.vgU());
          const cU = {
            type: PU,
            name: TU.name,
            color: TU.diffuse.vgU(),
            intensity: TU.intensity,
            size: TU.height,
            rect: {
              aspect: TU.width / TU.height
            }
          };
          Ng(cU, hp), cU.rect && Ng(cU.rect, Qp), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(cU);
          const GU = {
              light: this._lights.lights.length - 1
            },
            jU = gU.parent;
          if (jU && Dg(TU, jU)) {
            const UU = tU.get(jU);
            if (UU) {
              const gU = this._exporter._nodes[UU];
              return Mg(RU, gU), gU.extensions || (gU.extensions = {}), gU.extensions[Cp] = GU, void EU(null)
            }
          }
          RU.extensions || (RU.extensions = {}), RU.extensions[Cp] = GU, EU(RU)
        }))
      }
    }
    let fp = !1;

    function xp() {
      fp || (fp = !0, Xt.RegisterExtension(Cp, (UU => new Wp(UU))))
    }
    xp();
    const mp = "KHR_materials_anisotropy";
    class Ip {
      constructor(UU) {
        this.name = mp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof IR) {
          if (gU.anisotropy.isEnabled && !gU.anisotropy.legacy) return gU.anisotropy.texture && tU.push(gU.anisotropy.texture), tU
        } else if (gU instanceof lR && gU.specularRoughnessAnisotropy > 0) {
          const UU = function(UU) {
            const RU = UU.specularRoughnessAnisotropyTexture,
              gU = UU.geometryTangentTexture;
            return `${RU&&RU.getInternalTexture()?RU.getInternalTexture().uniqueId:"NoStrength"}_${gU&&gU.getInternalTexture()?gU.getInternalTexture().uniqueId:"NoTangent"}`
          }(gU);
          if (this._anisoTexturesMap[UU]) tU.push(this._anisoTexturesMap[UU]);
          else {
            const RU = await async function(UU) {
              const RU = UU.aZ(),
                gU = UU.specularRoughnessAnisotropyTexture,
                tU = UU.geometryTangentTexture;
              return gU || tU ? await Pg("AnisotropyTexture", Kg(tU ? Tg(tU, 0) : qg(1), tU ? Tg(tU, 1) : qg(0), gU ? Tg(gU, 0) : qg(1)), RU) : null
            }(gU);
            RU && (tU.push(RU), this._anisoTexturesMap[UU] = RU)
          }
          return tU
        }
        return []
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          var tU;
          if (gU instanceof IR) {
            if (!gU.anisotropy.isEnabled || gU.anisotropy.legacy) return void UU(RU);
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const tU = this._exporter._materialExporter.getTextureInfo(gU.anisotropy.texture),
              pU = {
                anisotropyStrength: gU.anisotropy.intensity,
                anisotropyRotation: gU.anisotropy.angle,
                anisotropyTexture: tU ?? void 0
              };
            null !== pU.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[mp] = pU
          } else if (gU instanceof lR && gU.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            let pU = gU.specularRoughnessTexture;
            gU._useRoughnessFromMetallicTextureGreen && (pU = gU.baseMetalnessTexture);
            const EU = this._anisoTexturesMap[gU.id];
            if (!pU && !EU) {
              let tU = gU.specularRoughness,
                pU = gU.specularRoughnessAnisotropy;
              if (!gU._useGltfStyleAnisotropy) {
                const UU = function(UU, RU) {
                  const gU = UU * UU,
                    tU = gU * Math.sqrt(2 / (1 + (1 - RU) * (1 - RU))),
                    pU = (1 - RU) * tU;
                  return {
                    newBaseRoughness: Math.sqrt(pU),
                    newAnisotropyStrength: Math.min(Math.sqrt((tU - gU) / Math.max(1 - gU, 1e-4)), 1)
                  }
                }(gU.specularRoughness, gU.specularRoughnessAnisotropy);
                tU = UU.newBaseRoughness, pU = UU.newAnisotropyStrength
              }
              RU.pbrMetallicRoughness && (RU.pbrMetallicRoughness.roughnessFactor = tU);
              const EU = {
                anisotropyStrength: pU,
                anisotropyRotation: gU.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return RU.extensions[mp] = EU, UU(RU)
            }
            const PU = EU ? this._exporter._materialExporter.getTextureInfo(EU) : null,
              TU = {
                anisotropyStrength: gU.specularRoughnessAnisotropy,
                anisotropyRotation: gU.geometryTangentAngle,
                anisotropyTexture: PU || void 0,
                extensions: {}
              };
            gU._useGltfStyleAnisotropy || (RU.extensions.KHR_materials_openpbr = {}, (tU = this._exporter._glTF).extensionsUsed || (tU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[mp] = TU
          }
          UU(RU)
        }))
      }
    }
    let Jp = !1;

    function wp() {
      Jp || (Jp = !0, Xt.RegisterExtension(mp, (UU => new Ip(UU))))
    }
    wp();
    const np = "KHR_materials_clearcoat";

    function bp(UU, RU) {
      const gU = new aU.e(RU.name, RU.aZ());
      return gU._texture = UU, gU.coordinatesIndex = RU.coordinatesIndex, RU instanceof aU.e && (gU.uOffset = RU.uOffset, gU.vOffset = RU.vOffset, gU.uScale = RU.uScale, gU.vScale = RU.vScale, gU.wAng = RU.wAng), gU.wrapU = RU.wrapU, gU.wrapV = RU.wrapV, gU
    }
    class op {
      constructor(UU) {
        this.name = np, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof IR) {
          if (gU.clearCoat.isEnabled) return gU.clearCoat.texture && tU.push(gU.clearCoat.texture), !gU.clearCoat.useRoughnessFromMainTexture && gU.clearCoat.textureRoughness && tU.push(gU.clearCoat.textureRoughness), gU.clearCoat.bumpTexture && tU.push(gU.clearCoat.bumpTexture), tU
        } else if (gU instanceof lR && gU.coatWeight > 0) {
          let UU = !1;
          if (gU.coatWeightTexture ? gU.coatRoughnessTexture ? gU._useCoatRoughnessFromGreenChannel && gU.coatWeightTexture.getInternalTexture() === gU.coatRoughnessTexture.getInternalTexture() ? (tU.push(gU.coatWeightTexture), tU.push(gU.coatRoughnessTexture)) : UU = !0 : tU.push(gU.coatWeightTexture) : gU.coatRoughnessTexture && (gU._useCoatRoughnessFromGreenChannel ? tU.push(gU.coatRoughnessTexture) : UU = !0), UU) {
            const UU = function(UU) {
              const RU = UU.coatWeightTexture,
                gU = RU && RU.getInternalTexture() ? RU.getInternalTexture().uniqueId : "NoCoat",
                tU = UU.coatRoughnessTexture;
              return `${gU}_${tU&&tU.getInternalTexture()?tU.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gU);
            if (!this._cachedInternalTexturesMap[UU]) {
              const RU = await async function(UU) {
                const RU = UU.aZ(),
                  gU = UU.coatWeightTexture,
                  tU = UU.coatRoughnessTexture;
                return gU || tU ? (await Pg("CoatTexture", Kg(gU ? Tg(gU, 0) : qg(1), tU ? Tg(tU, UU._useCoatRoughnessFromGreenChannel ? 1 : 0) : qg(1)), RU)).getInternalTexture() : null
              }(gU);
              RU && (this._cachedInternalTexturesMap[UU] = RU)
            }
            this._cachedInternalTexturesMap[UU] && (gU.coatWeightTexture && (this._mergedTexturesMap[gU.coatWeightTexture.uniqueId] = bp(this._cachedInternalTexturesMap[UU], gU.coatWeightTexture), tU.push(this._mergedTexturesMap[gU.coatWeightTexture.uniqueId])), gU.coatRoughnessTexture && (this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId] = bp(this._cachedInternalTexturesMap[UU], gU.coatRoughnessTexture), tU.push(this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId])))
          }
          return gU.geometryCoatNormalTexture && tU.push(gU.geometryCoatNormalTexture), tU
        }
        return []
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof IR) {
            if (!gU.clearCoat.isEnabled) return void UU(RU);
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const tU = this._exporter._materialExporter.getTextureInfo(gU.clearCoat.texture);
            let pU;
            pU = gU.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gU.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gU.clearCoat.textureRoughness), gU.clearCoat.isTintEnabled && wR.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gU.name}`), gU.clearCoat.remapF0OnInterfaceChange && wR.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${gU.name}`);
            const EU = this._exporter._materialExporter.getTextureInfo(gU.clearCoat.bumpTexture),
              PU = {
                clearcoatFactor: gU.clearCoat.intensity,
                clearcoatTexture: tU ?? void 0,
                clearcoatRoughnessFactor: gU.clearCoat.roughness,
                clearcoatRoughnessTexture: pU ?? void 0,
                clearcoatNormalTexture: EU ?? void 0
              };
            null === PU.clearcoatTexture && null === PU.clearcoatRoughnessTexture && null === PU.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[np] = PU
          } else if (gU instanceof lR) {
            if (0 == gU.coatWeight) return void UU(RU);
            let tU, pU, EU, PU;
            this._wasUsed = !0, RU.extensions = RU.extensions || {}, gU.coatWeightTexture && (tU = this._mergedTexturesMap[gU.coatWeightTexture.uniqueId], pU = this._exporter._materialExporter.getTextureInfo(tU)), gU.coatRoughnessTexture && (EU = this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId], PU = this._exporter._materialExporter.getTextureInfo(EU)), gU.coatColorTexture && wR.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${gU.name}`);
            const TU = this._exporter._materialExporter.getTextureInfo(gU.geometryCoatNormalTexture),
              qU = {
                clearcoatFactor: gU.coatWeight,
                clearcoatTexture: pU ?? void 0,
                clearcoatRoughnessFactor: gU.coatRoughness,
                clearcoatRoughnessTexture: PU ?? void 0,
                clearcoatNormalTexture: TU ?? void 0
              };
            null === qU.clearcoatTexture && null === qU.clearcoatRoughnessTexture && null === qU.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[np] = qU
          }
          UU(RU)
        }))
      }
    }
    let Zp = !1;

    function ap() {
      Zp || (Zp = !0, Xt.RegisterExtension(np, (UU => new op(UU))))
    }
    ap();
    const Yp = "KHR_materials_coat";

    function Bp(UU) {
      const RU = UU.coatRoughnessAnisotropyTexture,
        gU = UU.geometryCoatTangentTexture;
      return `${RU&&RU.getInternalTexture()?RU.getInternalTexture().uniqueId:"NoStrength"}_${gU&&gU.getInternalTexture()?gU.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Vp(UU, RU) {
      const gU = new aU.e(RU.name, RU.aZ());
      return gU._texture = UU, gU.coordinatesIndex = RU.coordinatesIndex, RU instanceof aU.e && (gU.uOffset = RU.uOffset, gU.vOffset = RU.vOffset, gU.uScale = RU.uScale, gU.vScale = RU.vScale, gU.wAng = RU.wAng), gU.wrapU = RU.wrapU, gU.wrapV = RU.wrapV, gU
    }
    class rp {
      constructor(UU) {
        this.name = Yp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof IR) {
          if (gU.clearCoat.isEnabled) return gU.clearCoat.texture && tU.push(gU.clearCoat.texture), !gU.clearCoat.useRoughnessFromMainTexture && gU.clearCoat.textureRoughness && tU.push(gU.clearCoat.textureRoughness), gU.clearCoat.bumpTexture && tU.push(gU.clearCoat.bumpTexture), gU.clearCoat.tintTexture && tU.push(gU.clearCoat.tintTexture), tU
        } else if (gU instanceof lR && gU.coatWeight > 0) {
          let UU = !1;
          if (gU.coatWeightTexture ? gU.coatRoughnessTexture ? gU._useCoatRoughnessFromGreenChannel && gU.coatWeightTexture.getInternalTexture() === gU.coatRoughnessTexture.getInternalTexture() ? (tU.push(gU.coatWeightTexture), tU.push(gU.coatRoughnessTexture)) : UU = !0 : tU.push(gU.coatWeightTexture) : gU.coatRoughnessTexture && (gU._useCoatRoughnessFromGreenChannel ? tU.push(gU.coatRoughnessTexture) : UU = !0), UU) {
            const UU = function(UU) {
              const RU = UU.coatWeightTexture,
                gU = RU && RU.getInternalTexture() ? RU.getInternalTexture().uniqueId : "NoCoat",
                tU = UU.coatRoughnessTexture;
              return `${gU}_${tU&&tU.getInternalTexture()?tU.getInternalTexture().uniqueId:"NoRoughness"}`
            }(gU);
            if (!this._cachedInternalTexturesMap[UU]) {
              const RU = await async function(UU) {
                const RU = UU.aZ(),
                  gU = UU.coatWeightTexture,
                  tU = UU.coatRoughnessTexture;
                return gU || tU ? (await Pg("CoatTexture", Kg(gU ? Tg(gU, 0) : qg(1), tU ? Tg(tU, UU._useCoatRoughnessFromGreenChannel ? 1 : 0) : qg(1)), RU)).getInternalTexture() : null
              }(gU);
              RU && (this._cachedInternalTexturesMap[UU] = RU)
            }
            this._cachedInternalTexturesMap[UU] && (gU.coatWeightTexture && (this._mergedTexturesMap[gU.coatWeightTexture.uniqueId] = Vp(this._cachedInternalTexturesMap[UU], gU.coatWeightTexture), tU.push(this._mergedTexturesMap[gU.coatWeightTexture.uniqueId])), gU.coatRoughnessTexture && (this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId] = Vp(this._cachedInternalTexturesMap[UU], gU.coatRoughnessTexture), tU.push(this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId])))
          }
          if (gU.geometryCoatNormalTexture && tU.push(gU.geometryCoatNormalTexture), gU.coatColorTexture && tU.push(gU.coatColorTexture), gU.coatRoughnessAnisotropy > 0) {
            const UU = Bp(gU);
            if (this._mergedTexturesMap[UU]) tU.push(this._mergedTexturesMap[UU]);
            else {
              const RU = await async function(UU) {
                const RU = UU.aZ(),
                  gU = UU.coatRoughnessAnisotropyTexture,
                  tU = UU.geometryCoatTangentTexture;
                return gU || tU ? await Pg("AnisotropyTexture", Kg(tU ? Tg(tU, 0) : qg(1), tU ? Tg(tU, 1) : qg(0), gU ? Tg(gU, 0) : qg(1)), RU) : null
              }(gU);
              RU && (tU.push(RU), this._mergedTexturesMap[UU] = RU)
            }
            return tU
          }
          return tU
        }
        return []
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          var tU;
          if (gU instanceof IR) {
            if (!gU.clearCoat.isEnabled) return void UU(RU);
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const tU = this._exporter._materialExporter.getTextureInfo(gU.clearCoat.texture);
            let pU, EU;
            pU = gU.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(gU.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(gU.clearCoat.textureRoughness), gU.clearCoat.isTintEnabled && (EU = this._exporter._materialExporter.getTextureInfo(gU.clearCoat.tintTexture));
            const PU = this._exporter._materialExporter.getTextureInfo(gU.clearCoat.bumpTexture),
              TU = gU.clearCoat.indexOfRefraction,
              qU = {
                coatFactor: gU.clearCoat.intensity,
                coatTexture: tU ?? void 0,
                coatRoughnessFactor: gU.clearCoat.roughness,
                coatRoughnessTexture: pU ?? void 0,
                coatNormalTexture: PU ?? void 0,
                coatColorFactor: gU.clearCoat.tintColor.vgU(),
                coatColorTexture: EU ?? void 0,
                coatIor: 1.5 !== TU ? TU : void 0
              };
            null === qU.coatTexture && null === qU.coatRoughnessTexture && null === qU.coatRoughnessTexture && null === qU.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[Yp] = qU
          } else if (gU instanceof lR) {
            if (0 == gU.coatWeight) return void UU(RU);
            let pU, EU, PU, TU;
            this._wasUsed = !0, RU.extensions = RU.extensions || {}, gU.coatWeightTexture && (pU = this._mergedTexturesMap[gU.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[gU.coatWeightTexture.uniqueId] : gU.coatWeightTexture, EU = this._exporter._materialExporter.getTextureInfo(pU)), gU.coatRoughnessTexture && (PU = this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gU.coatRoughnessTexture.uniqueId] : gU.coatRoughnessTexture, TU = this._exporter._materialExporter.getTextureInfo(PU));
            const qU = this._exporter._materialExporter.getTextureInfo(gU.geometryCoatNormalTexture),
              KU = this._exporter._materialExporter.getTextureInfo(gU.coatColorTexture),
              cU = gU.coatIor,
              GU = gU.coatDarkening,
              jU = gU.coatRoughnessTexture,
              uU = Bp(gU),
              CU = this._mergedTexturesMap[uU];
            let hU, QU = 0,
              eU = 0;
            if (gU.coatRoughnessAnisotropy > 0) {
              if (jU || CU) {
                const UU = CU ? this._exporter._materialExporter.getTextureInfo(CU) : null;
                QU = gU.coatRoughnessAnisotropy, eU = gU.geometryCoatTangentAngle, hU = UU || void 0
              } else {
                let UU = gU.coatRoughness,
                  tU = gU.coatRoughnessAnisotropy;
                if (!gU._useGltfStyleAnisotropy) {
                  const RU = function(UU, RU) {
                    const gU = UU * UU,
                      tU = gU * Math.sqrt(2 / (1 + (1 - RU) * (1 - RU))),
                      pU = (1 - RU) * tU;
                    return {
                      newBaseRoughness: Math.sqrt(pU),
                      newAnisotropyStrength: Math.min(Math.sqrt((tU - gU) / Math.max(1 - gU, 1e-4)), 1)
                    }
                  }(gU.coatRoughness, gU.coatRoughnessAnisotropy);
                  UU = RU.newBaseRoughness, tU = RU.newAnisotropyStrength
                }
                RU.pbrMetallicRoughness && (RU.pbrMetallicRoughness.roughnessFactor = UU), QU = tU, eU = gU.geometryCoatTangentAngle + .5 * Math.PI, hU = void 0
              }
              gU._useGltfStyleAnisotropy || (RU.extensions.KHR_materials_openpbr = {}, (tU = this._exporter._glTF).extensionsUsed || (tU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const WU = {
              coatFactor: gU.coatWeight,
              coatTexture: EU ?? void 0,
              coatRoughnessFactor: gU.coatRoughness,
              coatRoughnessTexture: TU ?? void 0,
              coatNormalTexture: qU ?? void 0,
              coatColorFactor: gU.coatColor.vgU(),
              coatColorTexture: KU ?? void 0,
              coatIor: 1.5 !== cU ? cU : void 0,
              coatDarkeningFactor: 1 !== GU ? GU : void 0,
              coatAnisotropyRotation: eU,
              coatAnisotropyStrength: QU,
              coatAnisotropyTexture: hU
            };
            null === WU.coatTexture && null === WU.coatRoughnessTexture && null === WU.coatRoughnessTexture && null === WU.coatAnisotropyTexture && null === WU.coatColorTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[Yp] = WU
          }
          UU(RU)
        }))
      }
    }
    let Xp = !1;

    function vp() {
      Xp || (Xp = !0, Xt.RegisterExtension(Yp, (UU => new rp(UU))))
    }
    vp();
    let dp = (() => {
      var UU, RU, gU, tU, pU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, oU, ZU, aU, YU, BU, VU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, zU, MU, DU, LU, NU, lU, OU, UR, RR, gR, tR, pR, ER, PR, TR, qR, KR, cR, GR, jR, uR, CR, hR, QR, eR, WR, fR;
      let xR, mR, wR, nR, bR, oR, ZR, aR, YR, BR, VR, rR, XR, vR, dR, HR, SR, sR, yR, kR, FR, iR, AR, zR, MR, DR, LR, NR, lR, OR, Ug, Rg, gg, tg, pg, Eg, Pg, Tg, qg, Kg, cg, Gg, jg, ug, Cg, hg, Qg, eg, Wg, fg, xg, mg, Ig, Jg, wg, ng, bg, og, Zg, ag, Yg, Bg, Vg, rg, Xg, vg, dg, Hg, Sg = IR,
        sg = [],
        yg = [],
        kg = [],
        Fg = [],
        ig = [],
        Ag = [],
        zg = [],
        Mg = [],
        Dg = [],
        Lg = [],
        Ng = [],
        lg = [],
        Og = [],
        Ut = [],
        Rt = [],
        gt = [],
        tt = [],
        pt = [],
        Et = [],
        Pt = [],
        Tt = [],
        qt = [],
        Kt = [],
        ct = [],
        Gt = [],
        jt = [],
        ut = [],
        Ct = [],
        ht = [],
        Qt = [],
        et = [],
        Wt = [],
        ft = [],
        xt = [],
        mt = [],
        It = [],
        Jt = [],
        wt = [],
        nt = [],
        bt = [],
        ot = [],
        Zt = [],
        Yt = [],
        Bt = [],
        Vt = [],
        rt = [],
        Xt = [],
        vt = [],
        dt = [],
        Ht = [],
        St = [],
        st = [],
        yt = [],
        kt = [],
        Ft = [],
        it = [],
        At = [],
        zt = [],
        Mt = [],
        Dt = [],
        Lt = [],
        Nt = [],
        lt = [],
        Ot = [],
        Up = [],
        Rp = [],
        gp = [],
        tp = [],
        pp = [],
        Ep = [],
        Pp = [],
        Tp = [],
        qp = [],
        Kp = [],
        cp = [],
        Gp = [],
        jp = [],
        Cp = [],
        hp = [],
        Qp = [],
        ep = [],
        Wp = [],
        fp = [],
        xp = [],
        mp = [],
        Ip = [],
        Jp = [],
        wp = [],
        np = [],
        bp = [],
        op = [],
        Zp = [],
        ap = [],
        Yp = [],
        Bp = [],
        Vp = [],
        rp = [],
        Xp = [],
        vp = [],
        dp = [],
        Hp = [],
        Sp = [],
        sp = [],
        yp = [],
        kp = [],
        Fp = [],
        ip = [],
        Ap = [],
        zp = [],
        Mp = [],
        Dp = [],
        Lp = [],
        Np = [],
        lp = [],
        Op = [],
        UE = [],
        RE = [],
        gE = [],
        tE = [],
        pE = [],
        EE = [],
        PE = [],
        TE = [],
        qE = [],
        KE = [],
        cE = [],
        GE = [],
        jE = [],
        uE = [],
        CE = [],
        hE = [],
        QE = [],
        eE = [];
      return UU = class extends Sg {
        get directIntensity() {
          return (0, nU.c)(this, RU, "f")
        }
        set directIntensity(UU) {
          (0, nU.e)(this, RU, UU, "f")
        }
        get emissiveIntensity() {
          return (0, nU.c)(this, gU, "f")
        }
        set emissiveIntensity(UU) {
          (0, nU.e)(this, gU, UU, "f")
        }
        get environmentIntensity() {
          return (0, nU.c)(this, tU, "f")
        }
        set environmentIntensity(UU) {
          (0, nU.e)(this, tU, UU, "f")
        }
        get specularIntensity() {
          return (0, nU.c)(this, pU, "f")
        }
        set specularIntensity(UU) {
          (0, nU.e)(this, pU, UU, "f")
        }
        get disableBumpMap() {
          return (0, nU.c)(this, PU, "f")
        }
        set disableBumpMap(UU) {
          (0, nU.e)(this, PU, UU, "f")
        }
        get albedoTexture() {
          return (0, nU.c)(this, TU, "f")
        }
        set albedoTexture(UU) {
          (0, nU.e)(this, TU, UU, "f")
        }
        get baseWeightTexture() {
          return (0, nU.c)(this, qU, "f")
        }
        set baseWeightTexture(UU) {
          (0, nU.e)(this, qU, UU, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, nU.c)(this, KU, "f")
        }
        set baseDiffuseRoughnessTexture(UU) {
          (0, nU.e)(this, KU, UU, "f")
        }
        get ambientTexture() {
          return (0, nU.c)(this, cU, "f")
        }
        set ambientTexture(UU) {
          (0, nU.e)(this, cU, UU, "f")
        }
        get ambientTextureStrength() {
          return (0, nU.c)(this, GU, "f")
        }
        set ambientTextureStrength(UU) {
          (0, nU.e)(this, GU, UU, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, nU.c)(this, jU, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(UU) {
          (0, nU.e)(this, jU, UU, "f")
        }
        get opacityTexture() {
          return (0, nU.c)(this, uU, "f")
        }
        set opacityTexture(UU) {
          (0, nU.e)(this, uU, UU, "f")
        }
        get reflectionTexture() {
          return (0, nU.c)(this, CU, "f")
        }
        set reflectionTexture(UU) {
          (0, nU.e)(this, CU, UU, "f")
        }
        get emissiveTexture() {
          return (0, nU.c)(this, hU, "f")
        }
        set emissiveTexture(UU) {
          (0, nU.e)(this, hU, UU, "f")
        }
        get reflectivityTexture() {
          return (0, nU.c)(this, QU, "f")
        }
        set reflectivityTexture(UU) {
          (0, nU.e)(this, QU, UU, "f")
        }
        get metallicTexture() {
          return (0, nU.c)(this, eU, "f")
        }
        set metallicTexture(UU) {
          (0, nU.e)(this, eU, UU, "f")
        }
        get metallic() {
          return (0, nU.c)(this, WU, "f")
        }
        set metallic(UU) {
          (0, nU.e)(this, WU, UU, "f")
        }
        get roughness() {
          return (0, nU.c)(this, fU, "f")
        }
        set roughness(UU) {
          (0, nU.e)(this, fU, UU, "f")
        }
        get metallicF0Factor() {
          return (0, nU.c)(this, xU, "f")
        }
        set metallicF0Factor(UU) {
          (0, nU.e)(this, xU, UU, "f")
        }
        get metallicReflectanceColor() {
          return (0, nU.c)(this, mU, "f")
        }
        set metallicReflectanceColor(UU) {
          (0, nU.e)(this, mU, UU, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, nU.c)(this, IU, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(UU) {
          (0, nU.e)(this, IU, UU, "f")
        }
        get metallicReflectanceTexture() {
          return (0, nU.c)(this, JU, "f")
        }
        set metallicReflectanceTexture(UU) {
          (0, nU.e)(this, JU, UU, "f")
        }
        get reflectanceTexture() {
          return (0, nU.c)(this, wU, "f")
        }
        set reflectanceTexture(UU) {
          (0, nU.e)(this, wU, UU, "f")
        }
        get microSurfaceTexture() {
          return (0, nU.c)(this, oU, "f")
        }
        set microSurfaceTexture(UU) {
          (0, nU.e)(this, oU, UU, "f")
        }
        get bumpTexture() {
          return (0, nU.c)(this, ZU, "f")
        }
        set bumpTexture(UU) {
          (0, nU.e)(this, ZU, UU, "f")
        }
        get lightmapTexture() {
          return (0, nU.c)(this, aU, "f")
        }
        set lightmapTexture(UU) {
          (0, nU.e)(this, aU, UU, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(UU) {
          this.subSurface.refractionTexture = UU, UU ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, nU.c)(this, YU, "f")
        }
        set ambientColor(UU) {
          (0, nU.e)(this, YU, UU, "f")
        }
        get albedoColor() {
          return (0, nU.c)(this, BU, "f")
        }
        set albedoColor(UU) {
          (0, nU.e)(this, BU, UU, "f")
        }
        get baseWeight() {
          return (0, nU.c)(this, VU, "f")
        }
        set baseWeight(UU) {
          (0, nU.e)(this, VU, UU, "f")
        }
        get baseDiffuseRoughness() {
          return (0, nU.c)(this, XU, "f")
        }
        set baseDiffuseRoughness(UU) {
          (0, nU.e)(this, XU, UU, "f")
        }
        get reflectivityColor() {
          return (0, nU.c)(this, vU, "f")
        }
        set reflectivityColor(UU) {
          (0, nU.e)(this, vU, UU, "f")
        }
        get reflectionColor() {
          return (0, nU.c)(this, dU, "f")
        }
        set reflectionColor(UU) {
          (0, nU.e)(this, dU, UU, "f")
        }
        get emissiveColor() {
          return (0, nU.c)(this, HU, "f")
        }
        set emissiveColor(UU) {
          (0, nU.e)(this, HU, UU, "f")
        }
        get microSurface() {
          return (0, nU.c)(this, SU, "f")
        }
        set microSurface(UU) {
          (0, nU.e)(this, SU, UU, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(UU) {
          this.subSurface.indexOfRefraction = UU
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(UU) {
          this.subSurface.invertRefractionY = UU
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(UU) {
          this.subSurface.linkRefractionWithTransparency = UU, UU && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, nU.c)(this, sU, "f")
        }
        set useLightmapAsShadowmap(UU) {
          (0, nU.e)(this, sU, UU, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, nU.c)(this, yU, "f")
        }
        set useAlphaFromAlbedoTexture(UU) {
          (0, nU.e)(this, yU, UU, "f")
        }
        get forceAlphaTest() {
          return (0, nU.c)(this, kU, "f")
        }
        set forceAlphaTest(UU) {
          (0, nU.e)(this, kU, UU, "f")
        }
        get alphaCutOff() {
          return (0, nU.c)(this, FU, "f")
        }
        set alphaCutOff(UU) {
          (0, nU.e)(this, FU, UU, "f")
        }
        get useSpecularOverAlpha() {
          return (0, nU.c)(this, iU, "f")
        }
        set useSpecularOverAlpha(UU) {
          (0, nU.e)(this, iU, UU, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, nU.c)(this, zU, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(UU) {
          (0, nU.e)(this, zU, UU, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, nU.c)(this, MU, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(UU) {
          (0, nU.e)(this, MU, UU, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, nU.c)(this, DU, "f")
        }
        set useRoughnessFromMetallicTextureGreen(UU) {
          (0, nU.e)(this, DU, UU, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, nU.c)(this, LU, "f")
        }
        set useMetallnessFromMetallicTextureBlue(UU) {
          (0, nU.e)(this, LU, UU, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, nU.c)(this, NU, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(UU) {
          (0, nU.e)(this, NU, UU, "f")
        }
        get useAmbientInGrayScale() {
          return (0, nU.c)(this, lU, "f")
        }
        set useAmbientInGrayScale(UU) {
          (0, nU.e)(this, lU, UU, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, nU.c)(this, OU, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(UU) {
          (0, nU.e)(this, OU, UU, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === IR.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(UU) {
          UU !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? IR.LIGHTFALLOFF_PHYSICAL : IR.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === IR.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(UU) {
          UU !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? IR.LIGHTFALLOFF_GLTF : IR.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, nU.c)(this, UR, "f")
        }
        set useRadianceOverAlpha(UU) {
          (0, nU.e)(this, UR, UU, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, nU.c)(this, RR, "f")
        }
        set useObjectSpaceNormalMap(UU) {
          (0, nU.e)(this, RR, UU, "f")
        }
        get useParallax() {
          return (0, nU.c)(this, gR, "f")
        }
        set useParallax(UU) {
          (0, nU.e)(this, gR, UU, "f")
        }
        get useParallaxOcclusion() {
          return (0, nU.c)(this, tR, "f")
        }
        set useParallaxOcclusion(UU) {
          (0, nU.e)(this, tR, UU, "f")
        }
        get parallaxScaleBias() {
          return (0, nU.c)(this, pR, "f")
        }
        set parallaxScaleBias(UU) {
          (0, nU.e)(this, pR, UU, "f")
        }
        get disableLighting() {
          return (0, nU.c)(this, ER, "f")
        }
        set disableLighting(UU) {
          (0, nU.e)(this, ER, UU, "f")
        }
        get forceIrradianceInFragment() {
          return (0, nU.c)(this, PR, "f")
        }
        set forceIrradianceInFragment(UU) {
          (0, nU.e)(this, PR, UU, "f")
        }
        get maxSimultaneousLights() {
          return (0, nU.c)(this, TR, "f")
        }
        set maxSimultaneousLights(UU) {
          (0, nU.e)(this, TR, UU, "f")
        }
        get invertNormalMapX() {
          return (0, nU.c)(this, qR, "f")
        }
        set invertNormalMapX(UU) {
          (0, nU.e)(this, qR, UU, "f")
        }
        get invertNormalMapY() {
          return (0, nU.c)(this, KR, "f")
        }
        set invertNormalMapY(UU) {
          (0, nU.e)(this, KR, UU, "f")
        }
        get twoSidedLighting() {
          return (0, nU.c)(this, cR, "f")
        }
        set twoSidedLighting(UU) {
          (0, nU.e)(this, cR, UU, "f")
        }
        get useAlphaFresnel() {
          return (0, nU.c)(this, GR, "f")
        }
        set useAlphaFresnel(UU) {
          (0, nU.e)(this, GR, UU, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, nU.c)(this, jR, "f")
        }
        set useLinearAlphaFresnel(UU) {
          (0, nU.e)(this, jR, UU, "f")
        }
        get environmentBRDFTexture() {
          return (0, nU.c)(this, uR, "f")
        }
        set environmentBRDFTexture(UU) {
          (0, nU.e)(this, uR, UU, "f")
        }
        get forceNormalForward() {
          return (0, nU.c)(this, CR, "f")
        }
        set forceNormalForward(UU) {
          (0, nU.e)(this, CR, UU, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, nU.c)(this, hR, "f")
        }
        set enableSpecularAntiAliasing(UU) {
          (0, nU.e)(this, hR, UU, "f")
        }
        get useHorizonOcclusion() {
          return (0, nU.c)(this, QR, "f")
        }
        set useHorizonOcclusion(UU) {
          (0, nU.e)(this, QR, UU, "f")
        }
        get useRadianceOcclusion() {
          return (0, nU.c)(this, eR, "f")
        }
        set useRadianceOcclusion(UU) {
          (0, nU.e)(this, eR, UU, "f")
        }
        get unlit() {
          return (0, nU.c)(this, WR, "f")
        }
        set unlit(UU) {
          (0, nU.e)(this, WR, UU, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, nU.c)(this, fR, "f")
        }
        set applyDecalMapAfterDetailMap(UU) {
          (0, nU.e)(this, fR, UU, "f")
        }
        constructor(EU, bU) {
          super(EU, bU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), RU.set(this, ((0, nU.j)(this, sg), (0, nU.j)(this, yg, 1))), gU.set(this, ((0, nU.j)(this, kg), (0, nU.j)(this, Fg, 1))), tU.set(this, ((0, nU.j)(this, ig), (0, nU.j)(this, Ag, 1))), pU.set(this, ((0, nU.j)(this, zg), (0, nU.j)(this, Mg, 1))), PU.set(this, ((0, nU.j)(this, Dg), (0, nU.j)(this, Lg, !1))), TU.set(this, ((0, nU.j)(this, Ng), (0, nU.j)(this, lg, void 0))), qU.set(this, ((0, nU.j)(this, Og), (0, nU.j)(this, Ut, void 0))), KU.set(this, ((0, nU.j)(this, Rt), (0, nU.j)(this, gt, void 0))), cU.set(this, ((0, nU.j)(this, tt), (0, nU.j)(this, pt, void 0))), GU.set(this, ((0, nU.j)(this, Et), (0, nU.j)(this, Pt, 1))), jU.set(this, ((0, nU.j)(this, Tt), (0, nU.j)(this, qt, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), uU.set(this, ((0, nU.j)(this, Kt), (0, nU.j)(this, ct, void 0))), CU.set(this, ((0, nU.j)(this, Gt), (0, nU.j)(this, jt, void 0))), hU.set(this, ((0, nU.j)(this, ut), (0, nU.j)(this, Ct, void 0))), QU.set(this, ((0, nU.j)(this, ht), (0, nU.j)(this, Qt, void 0))), eU.set(this, ((0, nU.j)(this, et), (0, nU.j)(this, Wt, void 0))), WU.set(this, ((0, nU.j)(this, ft), (0, nU.j)(this, xt, void 0))), fU.set(this, ((0, nU.j)(this, mt), (0, nU.j)(this, It, void 0))), xU.set(this, ((0, nU.j)(this, Jt), (0, nU.j)(this, wt, 1))), mU.set(this, ((0, nU.j)(this, nt), (0, nU.j)(this, bt, AU.e.White()))), IU.set(this, ((0, nU.j)(this, ot), (0, nU.j)(this, Zt, !1))), JU.set(this, ((0, nU.j)(this, Yt), (0, nU.j)(this, Bt, void 0))), wU.set(this, ((0, nU.j)(this, Vt), (0, nU.j)(this, rt, void 0))), oU.set(this, ((0, nU.j)(this, Xt), (0, nU.j)(this, vt, void 0))), ZU.set(this, ((0, nU.j)(this, dt), (0, nU.j)(this, Ht, void 0))), aU.set(this, ((0, nU.j)(this, St), (0, nU.j)(this, st, void 0))), YU.set(this, ((0, nU.j)(this, yt), (0, nU.j)(this, kt, new AU.e(0, 0, 0)))), BU.set(this, ((0, nU.j)(this, Ft), (0, nU.j)(this, it, new AU.e(1, 1, 1)))), VU.set(this, ((0, nU.j)(this, At), (0, nU.j)(this, zt, 1))), XU.set(this, ((0, nU.j)(this, Mt), (0, nU.j)(this, Dt, void 0))), vU.set(this, ((0, nU.j)(this, Lt), (0, nU.j)(this, Nt, new AU.e(1, 1, 1)))), dU.set(this, ((0, nU.j)(this, lt), (0, nU.j)(this, Ot, new AU.e(1, 1, 1)))), HU.set(this, ((0, nU.j)(this, Up), (0, nU.j)(this, Rp, new AU.e(0, 0, 0)))), SU.set(this, ((0, nU.j)(this, gp), (0, nU.j)(this, tp, 1))), sU.set(this, ((0, nU.j)(this, pp), (0, nU.j)(this, Ep, !1))), yU.set(this, ((0, nU.j)(this, Pp), (0, nU.j)(this, Tp, !1))), kU.set(this, ((0, nU.j)(this, qp), (0, nU.j)(this, Kp, !1))), FU.set(this, ((0, nU.j)(this, cp), (0, nU.j)(this, Gp, .4))), iU.set(this, ((0, nU.j)(this, jp), (0, nU.j)(this, Cp, !0))), zU.set(this, ((0, nU.j)(this, hp), (0, nU.j)(this, Qp, !1))), MU.set(this, ((0, nU.j)(this, ep), (0, nU.j)(this, Wp, !0))), DU.set(this, ((0, nU.j)(this, fp), (0, nU.j)(this, xp, !1))), LU.set(this, ((0, nU.j)(this, mp), (0, nU.j)(this, Ip, !1))), NU.set(this, ((0, nU.j)(this, Jp), (0, nU.j)(this, wp, !1))), lU.set(this, ((0, nU.j)(this, np), (0, nU.j)(this, bp, !1))), OU.set(this, ((0, nU.j)(this, op), (0, nU.j)(this, Zp, !1))), UR.set(this, ((0, nU.j)(this, ap), (0, nU.j)(this, Yp, !0))), RR.set(this, ((0, nU.j)(this, Bp), (0, nU.j)(this, Vp, !1))), gR.set(this, ((0, nU.j)(this, rp), (0, nU.j)(this, Xp, !1))), tR.set(this, ((0, nU.j)(this, vp), (0, nU.j)(this, dp, !1))), pR.set(this, ((0, nU.j)(this, Hp), (0, nU.j)(this, Sp, .05))), ER.set(this, ((0, nU.j)(this, sp), (0, nU.j)(this, yp, !1))), PR.set(this, ((0, nU.j)(this, kp), (0, nU.j)(this, Fp, !1))), TR.set(this, ((0, nU.j)(this, ip), (0, nU.j)(this, Ap, 4))), qR.set(this, ((0, nU.j)(this, zp), (0, nU.j)(this, Mp, !1))), KR.set(this, ((0, nU.j)(this, Dp), (0, nU.j)(this, Lp, !1))), cR.set(this, ((0, nU.j)(this, Np), (0, nU.j)(this, lp, !1))), GR.set(this, ((0, nU.j)(this, Op), (0, nU.j)(this, UE, !1))), jR.set(this, ((0, nU.j)(this, RE), (0, nU.j)(this, gE, !1))), uR.set(this, ((0, nU.j)(this, tE), (0, nU.j)(this, pE, null))), CR.set(this, ((0, nU.j)(this, EE), (0, nU.j)(this, PE, !1))), hR.set(this, ((0, nU.j)(this, TE), (0, nU.j)(this, qE, !1))), QR.set(this, ((0, nU.j)(this, KE), (0, nU.j)(this, cE, !0))), eR.set(this, ((0, nU.j)(this, GE), (0, nU.j)(this, jE, !0))), WR.set(this, ((0, nU.j)(this, uE), (0, nU.j)(this, CE, !1))), fR.set(this, ((0, nU.j)(this, hE), (0, nU.j)(this, QE, !1))), (0, nU.j)(this, eE), this._environmentBRDFTexture = rU(this.aZ())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(RU) {
          let gU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pU = JR.b.Clone((() => new UU(RU, this.aZ())), this, {
            cloneTexturesOnlyOnce: gU
          });
          return pU.id = RU, pU.name = RU, this.stencil.copyTo(pU.stencil), this._clonePlugins(pU, tU), pU
        }
        serialize() {
          const UU = super.serialize();
          return UU.customType = "BABYLON.PBRMaterial", UU
        }
        static Parse(RU, gU, tU) {
          const pU = JR.b.Parse((() => new UU(RU.name, gU)), RU, gU, tU);
          return RU.stencil && pU.stencil.parse(RU.stencil, gU, tU), EU.c._ParsePlugins(RU, pU, gU, tU), RU.clearCoat && pU.clearCoat.parse(RU.clearCoat, gU, tU), RU.anisotropy && pU.anisotropy.parse(RU.anisotropy, gU, tU), RU.brdf && pU.brdf.parse(RU.brdf, gU, tU), RU.sheen && pU.sheen.parse(RU.sheen, gU, tU), RU.subSurface && pU.subSurface.parse(RU.subSurface, gU, tU), RU.iridescence && pU.iridescence.parse(RU.iridescence, gU, tU), pU
        }
      }, RU = new WeakMap, gU = new WeakMap, tU = new WeakMap, pU = new WeakMap, PU = new WeakMap, TU = new WeakMap, qU = new WeakMap, KU = new WeakMap, cU = new WeakMap, GU = new WeakMap, jU = new WeakMap, uU = new WeakMap, CU = new WeakMap, hU = new WeakMap, QU = new WeakMap, eU = new WeakMap, WU = new WeakMap, fU = new WeakMap, xU = new WeakMap, mU = new WeakMap, IU = new WeakMap, JU = new WeakMap, wU = new WeakMap, oU = new WeakMap, ZU = new WeakMap, aU = new WeakMap, YU = new WeakMap, BU = new WeakMap, VU = new WeakMap, XU = new WeakMap, vU = new WeakMap, dU = new WeakMap, HU = new WeakMap, SU = new WeakMap, sU = new WeakMap, yU = new WeakMap, kU = new WeakMap, FU = new WeakMap, iU = new WeakMap, zU = new WeakMap, MU = new WeakMap, DU = new WeakMap, LU = new WeakMap, NU = new WeakMap, lU = new WeakMap, OU = new WeakMap, UR = new WeakMap, RR = new WeakMap, gR = new WeakMap, tR = new WeakMap, pR = new WeakMap, ER = new WeakMap, PR = new WeakMap, TR = new WeakMap, qR = new WeakMap, KR = new WeakMap, cR = new WeakMap, GR = new WeakMap, jR = new WeakMap, uR = new WeakMap, CR = new WeakMap, hR = new WeakMap, QR = new WeakMap, eR = new WeakMap, WR = new WeakMap, fR = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sg[Symbol.metadata] ?? null) : void 0;
        xR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], mR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], wR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], bR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], oR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ZR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], BR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], rR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], XR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], vR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], dR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], HR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], SR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], sR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], yR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, bU.l)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], FR = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], AR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], MR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], DR = [(0, bU.D)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty", null)], LR = [(0, bU.l)("ambient"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], NR = [(0, bU.l)("albedo"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], lR = [(0, bU.K)("baseWeight"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, bU.K)("baseDiffuseRoughness"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Ug = [(0, bU.l)("reflectivity"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Rg = [(0, bU.l)("reflection"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], gg = [(0, bU.l)("emissive"), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], tg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], pg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Eg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Tg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], qg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Kg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], cg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Gg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], jg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ug = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Cg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], hg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Qg = [(0, bU.K)()], eg = [(0, bU.K)()], Wg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], fg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], xg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], mg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Ig = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Jg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsLightsDirty")], wg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ng = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsLightsDirty")], bg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], og = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Zg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], ag = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Yg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Bg = [(0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], rg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], Xg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], vg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsTexturesDirty")], dg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], Hg = [(0, bU.K)(), (0, bU.e)("_markAllSubMeshesAsMiscDirty")], (0, nU.i)(UU, null, xR, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "directIntensity" in UU,
            get: UU => UU.directIntensity,
            set: (UU, RU) => {
              UU.directIntensity = RU
            }
          },
          metadata: RU
        }, yg, kg), (0, nU.i)(UU, null, mR, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveIntensity" in UU,
            get: UU => UU.emissiveIntensity,
            set: (UU, RU) => {
              UU.emissiveIntensity = RU
            }
          },
          metadata: RU
        }, Fg, ig), (0, nU.i)(UU, null, wR, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "environmentIntensity" in UU,
            get: UU => UU.environmentIntensity,
            set: (UU, RU) => {
              UU.environmentIntensity = RU
            }
          },
          metadata: RU
        }, Ag, zg), (0, nU.i)(UU, null, nR, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "specularIntensity" in UU,
            get: UU => UU.specularIntensity,
            set: (UU, RU) => {
              UU.specularIntensity = RU
            }
          },
          metadata: RU
        }, Mg, Dg), (0, nU.i)(UU, null, bR, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableBumpMap" in UU,
            get: UU => UU.disableBumpMap,
            set: (UU, RU) => {
              UU.disableBumpMap = RU
            }
          },
          metadata: RU
        }, Lg, Ng), (0, nU.i)(UU, null, oR, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoTexture" in UU,
            get: UU => UU.albedoTexture,
            set: (UU, RU) => {
              UU.albedoTexture = RU
            }
          },
          metadata: RU
        }, lg, Og), (0, nU.i)(UU, null, ZR, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseWeightTexture" in UU,
            get: UU => UU.baseWeightTexture,
            set: (UU, RU) => {
              UU.baseWeightTexture = RU
            }
          },
          metadata: RU
        }, Ut, Rt), (0, nU.i)(UU, null, aR, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseRoughnessTexture" in UU,
            get: UU => UU.baseDiffuseRoughnessTexture,
            set: (UU, RU) => {
              UU.baseDiffuseRoughnessTexture = RU
            }
          },
          metadata: RU
        }, gt, tt), (0, nU.i)(UU, null, YR, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTexture" in UU,
            get: UU => UU.ambientTexture,
            set: (UU, RU) => {
              UU.ambientTexture = RU
            }
          },
          metadata: RU
        }, pt, Et), (0, nU.i)(UU, null, BR, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTextureStrength" in UU,
            get: UU => UU.ambientTextureStrength,
            set: (UU, RU) => {
              UU.ambientTextureStrength = RU
            }
          },
          metadata: RU
        }, Pt, Tt), (0, nU.i)(UU, null, VR, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTextureImpactOnAnalyticalLights" in UU,
            get: UU => UU.ambientTextureImpactOnAnalyticalLights,
            set: (UU, RU) => {
              UU.ambientTextureImpactOnAnalyticalLights = RU
            }
          },
          metadata: RU
        }, qt, Kt), (0, nU.i)(UU, null, rR, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "opacityTexture" in UU,
            get: UU => UU.opacityTexture,
            set: (UU, RU) => {
              UU.opacityTexture = RU
            }
          },
          metadata: RU
        }, ct, Gt), (0, nU.i)(UU, null, XR, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectionTexture" in UU,
            get: UU => UU.reflectionTexture,
            set: (UU, RU) => {
              UU.reflectionTexture = RU
            }
          },
          metadata: RU
        }, jt, ut), (0, nU.i)(UU, null, vR, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveTexture" in UU,
            get: UU => UU.emissiveTexture,
            set: (UU, RU) => {
              UU.emissiveTexture = RU
            }
          },
          metadata: RU
        }, Ct, ht), (0, nU.i)(UU, null, dR, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectivityTexture" in UU,
            get: UU => UU.reflectivityTexture,
            set: (UU, RU) => {
              UU.reflectivityTexture = RU
            }
          },
          metadata: RU
        }, Qt, et), (0, nU.i)(UU, null, HR, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicTexture" in UU,
            get: UU => UU.metallicTexture,
            set: (UU, RU) => {
              UU.metallicTexture = RU
            }
          },
          metadata: RU
        }, Wt, ft), (0, nU.i)(UU, null, SR, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallic" in UU,
            get: UU => UU.metallic,
            set: (UU, RU) => {
              UU.metallic = RU
            }
          },
          metadata: RU
        }, xt, mt), (0, nU.i)(UU, null, sR, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, RU) => {
              UU.roughness = RU
            }
          },
          metadata: RU
        }, It, Jt), (0, nU.i)(UU, null, yR, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicF0Factor" in UU,
            get: UU => UU.metallicF0Factor,
            set: (UU, RU) => {
              UU.metallicF0Factor = RU
            }
          },
          metadata: RU
        }, wt, nt), (0, nU.i)(UU, null, kR, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicReflectanceColor" in UU,
            get: UU => UU.metallicReflectanceColor,
            set: (UU, RU) => {
              UU.metallicReflectanceColor = RU
            }
          },
          metadata: RU
        }, bt, ot), (0, nU.i)(UU, null, FR, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useOnlyMetallicFromMetallicReflectanceTexture" in UU,
            get: UU => UU.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (UU, RU) => {
              UU.useOnlyMetallicFromMetallicReflectanceTexture = RU
            }
          },
          metadata: RU
        }, Zt, Yt), (0, nU.i)(UU, null, iR, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicReflectanceTexture" in UU,
            get: UU => UU.metallicReflectanceTexture,
            set: (UU, RU) => {
              UU.metallicReflectanceTexture = RU
            }
          },
          metadata: RU
        }, Bt, Vt), (0, nU.i)(UU, null, AR, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectanceTexture" in UU,
            get: UU => UU.reflectanceTexture,
            set: (UU, RU) => {
              UU.reflectanceTexture = RU
            }
          },
          metadata: RU
        }, rt, Xt), (0, nU.i)(UU, null, zR, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "microSurfaceTexture" in UU,
            get: UU => UU.microSurfaceTexture,
            set: (UU, RU) => {
              UU.microSurfaceTexture = RU
            }
          },
          metadata: RU
        }, vt, dt), (0, nU.i)(UU, null, MR, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpTexture" in UU,
            get: UU => UU.bumpTexture,
            set: (UU, RU) => {
              UU.bumpTexture = RU
            }
          },
          metadata: RU
        }, Ht, St), (0, nU.i)(UU, null, DR, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "lightmapTexture" in UU,
            get: UU => UU.lightmapTexture,
            set: (UU, RU) => {
              UU.lightmapTexture = RU
            }
          },
          metadata: RU
        }, st, yt), (0, nU.i)(UU, null, LR, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientColor" in UU,
            get: UU => UU.ambientColor,
            set: (UU, RU) => {
              UU.ambientColor = RU
            }
          },
          metadata: RU
        }, kt, Ft), (0, nU.i)(UU, null, NR, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoColor" in UU,
            get: UU => UU.albedoColor,
            set: (UU, RU) => {
              UU.albedoColor = RU
            }
          },
          metadata: RU
        }, it, At), (0, nU.i)(UU, null, lR, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseWeight" in UU,
            get: UU => UU.baseWeight,
            set: (UU, RU) => {
              UU.baseWeight = RU
            }
          },
          metadata: RU
        }, zt, Mt), (0, nU.i)(UU, null, OR, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseRoughness" in UU,
            get: UU => UU.baseDiffuseRoughness,
            set: (UU, RU) => {
              UU.baseDiffuseRoughness = RU
            }
          },
          metadata: RU
        }, Dt, Lt), (0, nU.i)(UU, null, Ug, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectivityColor" in UU,
            get: UU => UU.reflectivityColor,
            set: (UU, RU) => {
              UU.reflectivityColor = RU
            }
          },
          metadata: RU
        }, Nt, lt), (0, nU.i)(UU, null, Rg, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectionColor" in UU,
            get: UU => UU.reflectionColor,
            set: (UU, RU) => {
              UU.reflectionColor = RU
            }
          },
          metadata: RU
        }, Ot, Up), (0, nU.i)(UU, null, gg, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveColor" in UU,
            get: UU => UU.emissiveColor,
            set: (UU, RU) => {
              UU.emissiveColor = RU
            }
          },
          metadata: RU
        }, Rp, gp), (0, nU.i)(UU, null, tg, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: UU => "microSurface" in UU,
            get: UU => UU.microSurface,
            set: (UU, RU) => {
              UU.microSurface = RU
            }
          },
          metadata: RU
        }, tp, pp), (0, nU.i)(UU, null, pg, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLightmapAsShadowmap" in UU,
            get: UU => UU.useLightmapAsShadowmap,
            set: (UU, RU) => {
              UU.useLightmapAsShadowmap = RU
            }
          },
          metadata: RU
        }, Ep, Pp), (0, nU.i)(UU, null, Eg, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlphaFromAlbedoTexture" in UU,
            get: UU => UU.useAlphaFromAlbedoTexture,
            set: (UU, RU) => {
              UU.useAlphaFromAlbedoTexture = RU
            }
          },
          metadata: RU
        }, Tp, qp), (0, nU.i)(UU, null, Pg, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceAlphaTest" in UU,
            get: UU => UU.forceAlphaTest,
            set: (UU, RU) => {
              UU.forceAlphaTest = RU
            }
          },
          metadata: RU
        }, Kp, cp), (0, nU.i)(UU, null, Tg, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: UU => "alphaCutOff" in UU,
            get: UU => UU.alphaCutOff,
            set: (UU, RU) => {
              UU.alphaCutOff = RU
            }
          },
          metadata: RU
        }, Gp, jp), (0, nU.i)(UU, null, qg, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSpecularOverAlpha" in UU,
            get: UU => UU.useSpecularOverAlpha,
            set: (UU, RU) => {
              UU.useSpecularOverAlpha = RU
            }
          },
          metadata: RU
        }, Cp, hp), (0, nU.i)(UU, null, Kg, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMicroSurfaceFromReflectivityMapAlpha" in UU,
            get: UU => UU.useMicroSurfaceFromReflectivityMapAlpha,
            set: (UU, RU) => {
              UU.useMicroSurfaceFromReflectivityMapAlpha = RU
            }
          },
          metadata: RU
        }, Qp, ep), (0, nU.i)(UU, null, cg, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMetallicTextureAlpha" in UU,
            get: UU => UU.useRoughnessFromMetallicTextureAlpha,
            set: (UU, RU) => {
              UU.useRoughnessFromMetallicTextureAlpha = RU
            }
          },
          metadata: RU
        }, Wp, fp), (0, nU.i)(UU, null, Gg, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMetallicTextureGreen" in UU,
            get: UU => UU.useRoughnessFromMetallicTextureGreen,
            set: (UU, RU) => {
              UU.useRoughnessFromMetallicTextureGreen = RU
            }
          },
          metadata: RU
        }, xp, mp), (0, nU.i)(UU, null, jg, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMetallnessFromMetallicTextureBlue" in UU,
            get: UU => UU.useMetallnessFromMetallicTextureBlue,
            set: (UU, RU) => {
              UU.useMetallnessFromMetallicTextureBlue = RU
            }
          },
          metadata: RU
        }, Ip, Jp), (0, nU.i)(UU, null, ug, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAmbientOcclusionFromMetallicTextureRed" in UU,
            get: UU => UU.useAmbientOcclusionFromMetallicTextureRed,
            set: (UU, RU) => {
              UU.useAmbientOcclusionFromMetallicTextureRed = RU
            }
          },
          metadata: RU
        }, wp, np), (0, nU.i)(UU, null, Cg, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAmbientInGrayScale" in UU,
            get: UU => UU.useAmbientInGrayScale,
            set: (UU, RU) => {
              UU.useAmbientInGrayScale = RU
            }
          },
          metadata: RU
        }, bp, op), (0, nU.i)(UU, null, hg, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAutoMicroSurfaceFromReflectivityMap" in UU,
            get: UU => UU.useAutoMicroSurfaceFromReflectivityMap,
            set: (UU, RU) => {
              UU.useAutoMicroSurfaceFromReflectivityMap = RU
            }
          },
          metadata: RU
        }, Zp, ap), (0, nU.i)(UU, null, Qg, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: UU => "usePhysicalLightFalloff" in UU,
            get: UU => UU.usePhysicalLightFalloff
          },
          metadata: RU
        }, null, sg), (0, nU.i)(UU, null, eg, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: UU => "useGLTFLightFalloff" in UU,
            get: UU => UU.useGLTFLightFalloff
          },
          metadata: RU
        }, null, sg), (0, nU.i)(UU, null, Wg, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRadianceOverAlpha" in UU,
            get: UU => UU.useRadianceOverAlpha,
            set: (UU, RU) => {
              UU.useRadianceOverAlpha = RU
            }
          },
          metadata: RU
        }, Yp, Bp), (0, nU.i)(UU, null, fg, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useObjectSpaceNormalMap" in UU,
            get: UU => UU.useObjectSpaceNormalMap,
            set: (UU, RU) => {
              UU.useObjectSpaceNormalMap = RU
            }
          },
          metadata: RU
        }, Vp, rp), (0, nU.i)(UU, null, xg, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: UU => "useParallax" in UU,
            get: UU => UU.useParallax,
            set: (UU, RU) => {
              UU.useParallax = RU
            }
          },
          metadata: RU
        }, Xp, vp), (0, nU.i)(UU, null, mg, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useParallaxOcclusion" in UU,
            get: UU => UU.useParallaxOcclusion,
            set: (UU, RU) => {
              UU.useParallaxOcclusion = RU
            }
          },
          metadata: RU
        }, dp, Hp), (0, nU.i)(UU, null, Ig, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: UU => "parallaxScaleBias" in UU,
            get: UU => UU.parallaxScaleBias,
            set: (UU, RU) => {
              UU.parallaxScaleBias = RU
            }
          },
          metadata: RU
        }, Sp, sp), (0, nU.i)(UU, null, Jg, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableLighting" in UU,
            get: UU => UU.disableLighting,
            set: (UU, RU) => {
              UU.disableLighting = RU
            }
          },
          metadata: RU
        }, yp, kp), (0, nU.i)(UU, null, wg, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceIrradianceInFragment" in UU,
            get: UU => UU.forceIrradianceInFragment,
            set: (UU, RU) => {
              UU.forceIrradianceInFragment = RU
            }
          },
          metadata: RU
        }, Fp, ip), (0, nU.i)(UU, null, ng, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: UU => "maxSimultaneousLights" in UU,
            get: UU => UU.maxSimultaneousLights,
            set: (UU, RU) => {
              UU.maxSimultaneousLights = RU
            }
          },
          metadata: RU
        }, Ap, zp), (0, nU.i)(UU, null, bg, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertNormalMapX" in UU,
            get: UU => UU.invertNormalMapX,
            set: (UU, RU) => {
              UU.invertNormalMapX = RU
            }
          },
          metadata: RU
        }, Mp, Dp), (0, nU.i)(UU, null, og, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertNormalMapY" in UU,
            get: UU => UU.invertNormalMapY,
            set: (UU, RU) => {
              UU.invertNormalMapY = RU
            }
          },
          metadata: RU
        }, Lp, Np), (0, nU.i)(UU, null, Zg, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: UU => "twoSidedLighting" in UU,
            get: UU => UU.twoSidedLighting,
            set: (UU, RU) => {
              UU.twoSidedLighting = RU
            }
          },
          metadata: RU
        }, lp, Op), (0, nU.i)(UU, null, ag, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlphaFresnel" in UU,
            get: UU => UU.useAlphaFresnel,
            set: (UU, RU) => {
              UU.useAlphaFresnel = RU
            }
          },
          metadata: RU
        }, UE, RE), (0, nU.i)(UU, null, Yg, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLinearAlphaFresnel" in UU,
            get: UU => UU.useLinearAlphaFresnel,
            set: (UU, RU) => {
              UU.useLinearAlphaFresnel = RU
            }
          },
          metadata: RU
        }, gE, tE), (0, nU.i)(UU, null, Bg, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "environmentBRDFTexture" in UU,
            get: UU => UU.environmentBRDFTexture,
            set: (UU, RU) => {
              UU.environmentBRDFTexture = RU
            }
          },
          metadata: RU
        }, pE, EE), (0, nU.i)(UU, null, Vg, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceNormalForward" in UU,
            get: UU => UU.forceNormalForward,
            set: (UU, RU) => {
              UU.forceNormalForward = RU
            }
          },
          metadata: RU
        }, PE, TE), (0, nU.i)(UU, null, rg, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: UU => "enableSpecularAntiAliasing" in UU,
            get: UU => UU.enableSpecularAntiAliasing,
            set: (UU, RU) => {
              UU.enableSpecularAntiAliasing = RU
            }
          },
          metadata: RU
        }, qE, KE), (0, nU.i)(UU, null, Xg, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useHorizonOcclusion" in UU,
            get: UU => UU.useHorizonOcclusion,
            set: (UU, RU) => {
              UU.useHorizonOcclusion = RU
            }
          },
          metadata: RU
        }, cE, GE), (0, nU.i)(UU, null, vg, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRadianceOcclusion" in UU,
            get: UU => UU.useRadianceOcclusion,
            set: (UU, RU) => {
              UU.useRadianceOcclusion = RU
            }
          },
          metadata: RU
        }, jE, uE), (0, nU.i)(UU, null, dg, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: UU => "unlit" in UU,
            get: UU => UU.unlit,
            set: (UU, RU) => {
              UU.unlit = RU
            }
          },
          metadata: RU
        }, CE, hE), (0, nU.i)(UU, null, Hg, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "applyDecalMapAfterDetailMap" in UU,
            get: UU => UU.applyDecalMapAfterDetailMap,
            set: (UU, RU) => {
              UU.applyDecalMapAfterDetailMap = RU
            }
          },
          metadata: RU
        }, QE, eE), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU.PBRMATERIAL_OPAQUE = IR.PBRMATERIAL_OPAQUE, UU.PBRMATERIAL_ALPHATEST = IR.PBRMATERIAL_ALPHATEST, UU.PBRMATERIAL_ALPHABLEND = IR.PBRMATERIAL_ALPHABLEND, UU.PBRMATERIAL_ALPHATESTANDBLEND = IR.PBRMATERIAL_ALPHATESTANDBLEND, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = IR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, UU
    })();
    const Hp = "KHR_materials_diffuse_transmission";

    function Sp(UU, RU) {
      const gU = RU.subSurface;
      let tU = null;
      return gU.translucencyIntensityTexture ? tU = gU.translucencyIntensityTexture : gU.thicknessTexture && gU.useMaskFromThicknessTexture && (tU = gU.thicknessTexture), tU && !gU.useGltfStyleTextures ? (oU.e.Warn(`${UU}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${RU.name}`, 1), null) : tU
    }
    class sp {
      constructor(UU) {
        this.name = Hp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof dp && this._isExtensionEnabled(gU)) {
          const RU = Sp(UU, gU);
          return RU && tU.push(RU), gU.subSurface.translucencyColorTexture && tU.push(gU.subSurface.translucencyColorTexture), tU
        }
        return tU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const RU = UU.subSurface;
        return !!RU.isTranslucencyEnabled && (!UU.unlit && !RU.useAlbedoToTintTranslucency && RU.useGltfStyleTextures && 1 === RU.volumeIndexOfRefraction && 0 === RU.minimumThickness && 0 === RU.maximumThickness)
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((tU => {
          if (gU instanceof dp && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            const tU = gU.subSurface,
              pU = Sp(UU, gU),
              EU = 0 == tU.translucencyIntensity ? void 0 : tU.translucencyIntensity,
              PU = this._exporter._materialExporter.getTextureInfo(pU) ?? void 0,
              TU = !tU.translucencyColor || tU.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : tU.translucencyColor.vgU(),
              qU = this._exporter._materialExporter.getTextureInfo(tU.translucencyColorTexture) ?? void 0,
              KU = {
                diffuseTransmissionFactor: EU,
                diffuseTransmissionTexture: PU,
                diffuseTransmissionColorFactor: TU,
                diffuseTransmissionColorTexture: qU
              };
            (PU || qU) && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions = RU.extensions || {}, RU.extensions[Hp] = KU
          }
          tU(RU)
        }))
      }
    }
    let yp = !1;

    function kp() {
      yp || (yp = !0, Xt.RegisterExtension(Hp, (UU => new sp(UU))))
    }
    kp();
    const Fp = "KHR_materials_dispersion";
    class ip {
      constructor() {
        this.name = Fp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const RU = UU.subSurface;
        return !(!RU.isRefractionEnabled && !RU.isDispersionEnabled)
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof dp && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            const UU = {
              dispersion: gU.subSurface.dispersion
            };
            RU.extensions = RU.extensions || {}, RU.extensions[Fp] = UU
          }
          UU(RU)
        }))
      }
    }
    let Ap = !1;

    function zp() {
      Ap || (Ap = !0, Xt.RegisterExtension(Fp, (() => new ip)))
    }
    zp();
    const Mp = "KHR_materials_emissive_strength";
    class Dp {
      constructor() {
        this.name = Mp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(UU, RU, gU) {
        return await new Promise((UU => {
          if (!(gU instanceof dp)) return UU(RU);
          const tU = gU.emissiveColor.scale(gU.emissiveIntensity),
            pU = Math.max(...tU.vgU());
          if (pU > 1) {
            RU.emissiveFactor = tU.scale(1 / pU).vgU(), this._wasUsed = !0;
            const UU = {
              emissiveStrength: pU
            };
            RU.extensions || (RU.extensions = {}), RU.extensions[Mp] = UU
          } else RU.emissiveFactor = tU.vgU();
          return UU(RU)
        }))
      }
    }
    let Lp = !1;

    function Np() {
      Lp || (Lp = !0, Xt.RegisterExtension(Mp, (() => new Dp)))
    }
    Np();
    const lp = "KHR_materials_ior";
    class Op {
      constructor() {
        this.name = lp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(UU) {
        return !UU.unlit && (UU instanceof lR ? 1.5 != UU.specularIor : UU instanceof dp && (void 0 != UU.indexOfRefraction && 1.5 != UU.indexOfRefraction))
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof dp && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            const UU = {
              ior: gU.indexOfRefraction
            };
            RU.extensions = RU.extensions || {}, RU.extensions[lp] = UU
          } else if (gU instanceof lR && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            const UU = {
              ior: gU.specularIor
            };
            RU.extensions = RU.extensions || {}, RU.extensions[lp] = UU
          }
          UU(RU)
        }))
      }
    }
    let UE = !1;

    function RE() {
      UE || (UE = !0, Xt.RegisterExtension(lp, (() => new Op)))
    }
    RE();
    const gE = "KHR_materials_iridescence";
    class tE {
      constructor(UU) {
        this.name = gE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof IR) {
          if (gU.iridescence.isEnabled) return gU.iridescence.texture && tU.push(gU.iridescence.texture), gU.iridescence.thicknessTexture && gU.iridescence.thicknessTexture !== gU.iridescence.texture && tU.push(gU.iridescence.thicknessTexture), tU
        } else if (gU instanceof lR && gU.thinFilmWeight > 0) return gU.thinFilmWeightTexture && tU.push(gU.thinFilmWeightTexture), gU.thinFilmThicknessTexture && gU.thinFilmThicknessTexture !== gU.thinFilmWeightTexture && tU.push(gU.thinFilmThicknessTexture), tU;
        return []
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof IR) {
            if (!gU.iridescence.isEnabled) return void UU(RU);
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const tU = this._exporter._materialExporter.getTextureInfo(gU.iridescence.texture),
              pU = this._exporter._materialExporter.getTextureInfo(gU.iridescence.thicknessTexture),
              EU = {
                iridescenceFactor: gU.iridescence.intensity,
                iridescenceIor: gU.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: gU.iridescence.minimumThickness,
                iridescenceThicknessMaximum: gU.iridescence.maximumThickness,
                iridescenceTexture: tU ?? void 0,
                iridescenceThicknessTexture: pU ?? void 0
              };
            null === EU.iridescenceTexture && null === EU.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[gE] = EU
          } else if (gU instanceof lR) {
            if (gU.thinFilmWeight <= 0) return void UU(RU);
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const tU = this._exporter._materialExporter.getTextureInfo(gU.thinFilmWeightTexture),
              pU = this._exporter._materialExporter.getTextureInfo(gU.thinFilmThicknessTexture),
              EU = {
                iridescenceFactor: gU.thinFilmWeight,
                iridescenceIor: gU.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * gU.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * gU.thinFilmThickness,
                iridescenceTexture: tU ?? void 0,
                iridescenceThicknessTexture: pU ?? void 0
              };
            null === EU.iridescenceTexture && null === EU.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[gE] = EU
          }
          UU(RU)
        }))
      }
    }
    let pE = !1;

    function EE() {
      pE || (pE = !0, Xt.RegisterExtension(gE, (UU => new tE(UU))))
    }
    EE();
    const PE = "KHR_materials_sheen";
    class TE {
      constructor(UU) {
        this.name = PE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        return gU instanceof dp && gU.sheen.isEnabled && gU.sheen.texture ? [gU.sheen.texture] : []
      }
      async postExportMaterialAsync(UU, RU, gU) {
        return await new Promise((UU => {
          if (gU instanceof dp) {
            if (!gU.sheen.isEnabled) return void UU(RU);
            this._wasUsed = !0, null == RU.extensions && (RU.extensions = {});
            const tU = {
              sheenColorFactor: gU.sheen.color.vgU(),
              sheenRoughnessFactor: gU.sheen.roughness ?? 0
            };
            null === tU.sheenColorTexture && null === tU.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gU), gU.sheen.texture && (tU.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(gU.sheen.texture) ?? void 0), gU.sheen.textureRoughness && !gU.sheen.useRoughnessFromMainTexture ? tU.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gU.sheen.textureRoughness) ?? void 0 : gU.sheen.texture && gU.sheen.useRoughnessFromMainTexture && (tU.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(gU.sheen.texture) ?? void 0), RU.extensions[PE] = tU
          }
          UU(RU)
        }))
      }
    }
    let qE = !1;

    function KE() {
      qE || (qE = !0, Xt.RegisterExtension(PE, (UU => new TE(UU))))
    }
    KE();
    const cE = "KHR_materials_fuzz";

    function GE(UU, RU) {
      const gU = new aU.e(RU.name, RU.aZ());
      return gU._texture = UU, gU.coordinatesIndex = RU.coordinatesIndex, RU instanceof aU.e && (gU.uOffset = RU.uOffset, gU.vOffset = RU.vOffset, gU.uScale = RU.uScale, gU.vScale = RU.vScale, gU.wAng = RU.wAng), gU.wrapU = RU.wrapU, gU.wrapV = RU.wrapV, gU
    }
    class jE {
      constructor(UU) {
        this.name = cE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        if (gU instanceof lR) {
          const UU = [];
          if (gU.fuzzWeight > 0) {
            gU.fuzzWeightTexture && UU.push(gU.fuzzWeightTexture);
            let RU = !1;
            if (gU.fuzzRoughnessTexture && (gU._useFuzzRoughnessFromTextureAlpha ? UU.push(gU.fuzzRoughnessTexture) : RU = !0), gU.fuzzColorTexture && !RU && UU.push(gU.fuzzColorTexture), RU) {
              const RU = function(UU) {
                const RU = UU.fuzzColorTexture,
                  gU = RU && RU.getInternalTexture() ? RU.getInternalTexture().uniqueId : "NoFuzzColor",
                  tU = UU.fuzzRoughnessTexture;
                return `FuzzColor_${gU}_FuzzRoughness_${tU&&tU.getInternalTexture()?tU.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(gU);
              if (!this._cachedInternalTexturesMap[RU]) {
                const UU = await async function(UU) {
                  const RU = UU.aZ(),
                    gU = UU.fuzzColorTexture,
                    tU = UU.fuzzRoughnessTexture;
                  return gU || tU ? (await Pg("FuzzTexture", Kg(gU ? Tg(gU, 0) : qg(1), gU ? Tg(gU, 1) : qg(1), gU ? Tg(gU, 2) : qg(1), tU ? Tg(tU, UU._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : qg(1)), RU)).getInternalTexture() : null
                }(gU);
                UU && (this._cachedInternalTexturesMap[RU] = UU)
              }
              this._cachedInternalTexturesMap[RU] && (gU.fuzzColorTexture && (this._mergedTexturesMap[gU.fuzzColorTexture.uniqueId] = GE(this._cachedInternalTexturesMap[RU], gU.fuzzColorTexture), UU.push(this._mergedTexturesMap[gU.fuzzColorTexture.uniqueId])), gU.fuzzRoughnessTexture && (this._mergedTexturesMap[gU.fuzzRoughnessTexture.uniqueId] = GE(this._cachedInternalTexturesMap[RU], gU.fuzzRoughnessTexture), UU.push(this._mergedTexturesMap[gU.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return UU
        }
        return []
      }
      async postExportMaterialAsync(UU, RU, gU) {
        return await new Promise((UU => {
          if (gU instanceof lR) {
            if (0 == gU.fuzzWeight) return void UU(RU);
            this._wasUsed = !0, null == RU.extensions && (RU.extensions = {});
            const tU = {
              fuzzFactor: gU.fuzzWeight,
              fuzzColorFactor: gU.fuzzColor.vgU(),
              fuzzRoughnessFactor: gU.fuzzRoughness
            };
            let pU, EU;
            gU.fuzzWeightTexture && (tU.fuzzTexture = this._exporter._materialExporter.getTextureInfo(gU.fuzzWeightTexture) ?? void 0), gU.fuzzColorTexture && (pU = this._mergedTexturesMap[gU.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[gU.fuzzColorTexture.uniqueId] : gU.fuzzColorTexture, tU.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(pU) ?? void 0), gU.fuzzRoughnessTexture && (EU = this._mergedTexturesMap[gU.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[gU.fuzzRoughnessTexture.uniqueId] : gU.fuzzRoughnessTexture, tU.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(EU) ?? void 0), null === tU.fuzzColorTexture && null === tU.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[cE] = tU
          }
          UU(RU)
        }))
      }
    }
    let uE = !1;

    function CE() {
      uE || (uE = !0, Xt.RegisterExtension(cE, (UU => new jE(UU))))
    }
    CE();
    const hE = "KHR_materials_specular";
    class QE {
      constructor(UU) {
        this.name = hE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        return gU instanceof dp && this._isExtensionEnabled(gU) ? (gU.metallicReflectanceTexture && tU.push(gU.metallicReflectanceTexture), gU.reflectanceTexture && tU.push(gU.reflectanceTexture), tU) : tU
      }
      _isExtensionEnabled(UU) {
        return !UU.unlit && (void 0 != UU.metallicF0Factor && 1 != UU.metallicF0Factor || void 0 != UU.metallicReflectanceColor && !UU.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(UU))
      }
      _hasTexturesExtension(UU) {
        return null != UU.metallicReflectanceTexture || null != UU.reflectanceTexture
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          var tU;
          if (gU instanceof dp && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0, RU.extensions = RU.extensions || {};
            const UU = this._exporter._materialExporter.getTextureInfo(gU.metallicReflectanceTexture) ?? void 0,
              tU = this._exporter._materialExporter.getTextureInfo(gU.reflectanceTexture) ?? void 0,
              pU = {
                specularFactor: 1 == gU.metallicF0Factor ? void 0 : gU.metallicF0Factor,
                specularTexture: UU,
                specularColorFactor: gU.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : gU.metallicReflectanceColor.vgU(),
                specularColorTexture: tU
              };
            this._hasTexturesExtension(gU) && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[hE] = pU
          } else if (gU instanceof lR) {
            RU.extensions = RU.extensions || {};
            const pU = this._exporter._materialExporter.getTextureInfo(gU.specularWeightTexture) ?? void 0,
              EU = this._exporter._materialExporter.getTextureInfo(gU.specularColorTexture) ?? void 0,
              PU = 1 == gU.specularWeight ? void 0 : gU.specularWeight,
              TU = gU.specularColor.equalsFloats(1, 1, 1) ? void 0 : gU.specularColor.vgU();
            if (!EU && !pU && void 0 === PU && void 0 === TU) return UU(RU);
            this._wasUsed = !0;
            const qU = {
                specularEdgeColorEnabled: !0
              },
              KU = {
                specularFactor: PU,
                specularTexture: pU,
                specularColorFactor: TU,
                specularColorTexture: EU,
                extensions: {}
              };
            KU.extensions.EXT_materials_specular_edge_color = qU, (tU = this._exporter._glTF).extensionsUsed || (tU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (pU || EU) && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[hE] = KU
          }
          UU(RU)
        }))
      }
    }
    let eE = !1;

    function WE() {
      eE || (eE = !0, Xt.RegisterExtension(hE, (UU => new QE(UU))))
    }
    WE();
    const fE = "KHR_materials_transmission";
    class xE {
      constructor(UU) {
        this.name = fE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof dp) {
          if (this._isExtensionEnabled(gU)) return gU.subSurface.refractionIntensityTexture && gU.subSurface.useGltfStyleTextures && tU.push(gU.subSurface.refractionIntensityTexture), tU
        } else gU instanceof lR && (gU.transmissionWeight > 0 && gU.transmissionWeightTexture && (tU.push(gU.transmissionWeightTexture), gU.transmissionColorTexture && tU.push(gU.transmissionColorTexture)), gU.subsurfaceWeight > 0 && gU.subsurfaceWeightTexture && tU.push(gU.subsurfaceWeightTexture));
        return tU
      }
      _isExtensionEnabled(UU) {
        if (UU instanceof lR && !UU.unlit) return UU.transmissionWeight > 0 || UU.subsurfaceWeight > 0;
        if (UU instanceof dp && !UU.unlit) {
          const RU = UU.subSurface;
          return RU.isRefractionEnabled && void 0 != RU.refractionIntensity && 0 != RU.refractionIntensity || null != RU.refractionIntensityTexture && RU.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(UU, RU, gU) {
        if (!this._isExtensionEnabled(gU)) return RU;
        if (gU instanceof dp) {
          this._wasUsed = !0;
          const tU = gU.subSurface,
            pU = {
              transmissionFactor: 0 === tU.refractionIntensity ? void 0 : tU.refractionIntensity
            };
          if (tU.refractionIntensityTexture)
            if (tU.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(gU);
              const UU = this._exporter._materialExporter.getTextureInfo(tU.refractionIntensityTexture);
              UU && (pU.transmissionTexture = UU)
            } else oU.e.Warn(`${UU}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          RU.extensions || (RU.extensions = {}), RU.extensions[fE] = pU
        } else if (gU instanceof lR) {
          this._wasUsed = !0;
          const UU = {
            transmissionFactor: (1 - gU.transmissionWeight) * gU.subsurfaceWeight + gU.transmissionWeight
          };
          if (gU.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gU);
            const RU = this._exporter._materialExporter.getTextureInfo(gU.transmissionWeightTexture);
            RU && (UU.transmissionTexture = RU)
          } else if (gU.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(gU);
            const RU = this._exporter._materialExporter.getTextureInfo(gU.subsurfaceWeightTexture);
            RU && (UU.transmissionTexture = RU)
          }
          if (0 == gU.transmissionDepth && (!gU.transmissionColor.equals(AU.e.White()) || gU.transmissionColorTexture) && RU.pbrMetallicRoughness && (RU.pbrMetallicRoughness.baseColorFactor || (RU.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), RU.pbrMetallicRoughness.baseColorFactor[0] *= gU.transmissionColor.r, RU.pbrMetallicRoughness.baseColorFactor[1] *= gU.transmissionColor.g, RU.pbrMetallicRoughness.baseColorFactor[2] *= gU.transmissionColor.b, gU.transmissionColorTexture && !RU.pbrMetallicRoughness.baseColorTexture)) {
            const UU = this._exporter._materialExporter.getTextureInfo(gU.transmissionColorTexture);
            UU && (RU.pbrMetallicRoughness.baseColorTexture = UU, this._exporter._materialNeedsUVsSet.add(gU))
          }
          RU.extensions || (RU.extensions = {}), RU.extensions[fE] = UU
        }
        return RU
      }
    }
    let mE = !1;

    function IE() {
      mE || (mE = !0, Xt.RegisterExtension(fE, (UU => new xE(UU))))
    }
    IE();
    var JE = gU(39655);
    const wE = "KHR_materials_unlit";
    class nE {
      constructor() {
        this.name = wE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          let tU = !1;
          gU instanceof dp ? tU = gU.unlit : gU instanceof JE.f && (tU = gU.disableLighting), tU && (this._wasUsed = !0, null == RU.extensions && (RU.extensions = {}), RU.extensions[wE] = {}), UU(RU)
        }))
      }
    }
    let bE = !1;

    function oE() {
      bE || (bE = !0, Xt.RegisterExtension(wE, (() => new nE)))
    }
    oE();
    const ZE = "KHR_materials_volume";
    class aE {
      constructor(UU) {
        this.name = ZE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof dp) {
          if (this._isExtensionEnabled(gU)) return gU.subSurface.thicknessTexture && tU.push(gU.subSurface.thicknessTexture), tU
        } else gU instanceof lR && (gU.transmissionWeight > 0 || gU.subsurfaceWeight > 0) && gU.geometryThicknessTexture && tU.push(gU.geometryThicknessTexture);
        return tU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const RU = UU.subSurface;
        return !(!RU.isRefractionEnabled && !RU.isTranslucencyEnabled) && (void 0 != RU.maximumThickness && 0 != RU.maximumThickness || void 0 != RU.tintColorAtDistance && RU.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != RU.tintColor && RU.tintColor != AU.e.White() || this._hasTexturesExtension(UU))
      }
      _hasTexturesExtension(UU) {
        return null != UU.subSurface.thicknessTexture
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof dp && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            const UU = gU.subSurface,
              tU = {
                thicknessFactor: 0 == UU.maximumThickness ? void 0 : UU.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(UU.thicknessTexture) ?? void 0,
                attenuationDistance: UU.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : UU.tintColorAtDistance,
                attenuationColor: UU.tintColor.equalsFloats(1, 1, 1) ? void 0 : UU.tintColor.vgU()
              };
            this._hasTexturesExtension(gU) && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions = RU.extensions || {}, RU.extensions[ZE] = tU
          } else if (gU instanceof lR) {
            const UU = gU.transmissionWeight > 0 && !gU.geometryThinWalled,
              tU = gU.subsurfaceWeight > 0 && !gU.geometryThinWalled;
            if (UU || tU) {
              this._wasUsed = !0;
              const pU = gU.geometryThickness,
                EU = this._exporter._materialExporter.getTextureInfo(gU.geometryThicknessTexture) ?? void 0;
              let PU;
              EU && this._exporter._materialNeedsUVsSet.add(gU);
              const TU = AU.e.White().vgU();
              if (UU && gU.transmissionDepth > 0) {
                const UU = 1 / gU.transmissionDepth;
                let RU = new HU.n(-Math.log(gU.transmissionColor.r) * UU, -Math.log(gU.transmissionColor.g) * UU, -Math.log(gU.transmissionColor.b) * UU);
                const tU = new HU.n(gU.transmissionScatter.r * UU, gU.transmissionScatter.g * UU, gU.transmissionScatter.b * UU),
                  pU = RU.subtract(tU),
                  EU = Math.min(pU.x, pU.y, pU.z);
                EU < 0 && (pU.x = pU.x - EU, pU.y = pU.y - EU, pU.z = pU.z - EU), RU = pU.add(tU);
                PU = 1 / Math.max(RU.x, RU.y, RU.z), TU[0] = Math.exp(-RU.x * PU), TU[1] = Math.exp(-RU.y * PU), TU[2] = Math.exp(-RU.z * PU)
              } else PU = Number.MAX_VALUE, TU[0] = 1, TU[1] = 1, TU[2] = 1;
              let qU = 1;
              const KU = AU.e.White().vgU();
              if (tU) {
                const UU = gU.subsurfaceRadius,
                  RU = gU.subsurfaceRadiusScale,
                  tU = new HU.n(RU.r, RU.g, RU.b).multiplyByFloats(UU, UU, UU),
                  pU = new HU.n(1 / Math.max(tU.x, 1e-6), 1 / Math.max(tU.y, 1e-6), 1 / Math.max(tU.z, 1e-6));
                qU = 1 / Math.max(pU.x, pU.y, pU.z), KU[0] = Math.exp(-pU.x * qU), KU[1] = Math.exp(-pU.y * qU), KU[2] = Math.exp(-pU.z * qU)
              }
              const cU = (1 - gU.transmissionWeight) * gU.subsurfaceWeight,
                GU = cU + gU.transmissionWeight,
                jU = 1 / Math.max(GU, 1e-6),
                uU = gU.transmissionWeight * jU,
                CU = cU * jU,
                hU = TU.map(((UU, RU) => UU * uU + KU[RU] * CU)),
                QU = {
                  thicknessFactor: pU,
                  thicknessTexture: EU,
                  attenuationDistance: PU * uU + qU * CU,
                  attenuationColor: hU
                };
              RU.extensions = RU.extensions || {}, RU.extensions[ZE] = QU
            }
          }
          UU(RU)
        }))
      }
    }
    let YE = !1;

    function BE() {
      YE || (YE = !0, Xt.RegisterExtension(ZE, (UU => new aE(UU))))
    }
    BE();
    const VE = "KHR_materials_volume_scatter";
    class rE {
      constructor(UU) {
        this.name = VE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        return gU instanceof lR && (gU.transmissionWeight > 0 && gU.transmissionScatterTexture && tU.push(gU.transmissionScatterTexture), gU.subsurfaceWeight > 0 && gU.subsurfaceColorTexture && tU.push(gU.subsurfaceColorTexture)), tU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const RU = UU.transmissionWeight > 0 && !UU.geometryThinWalled && UU.transmissionDepth > 0 && !UU.transmissionScatter.equals(AU.e.Black()),
          gU = UU.subsurfaceWeight > 0 && !UU.geometryThinWalled;
        return !(!RU && !gU)
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          if (gU instanceof lR && this._isExtensionEnabled(gU)) {
            this._wasUsed = !0;
            let UU = HU.n.Zero(),
              tU = 0;
            if (gU.transmissionWeight > 0) {
              UU = function(UU) {
                const RU = new HU.n(Math.sqrt(1 - UU.x), Math.sqrt(1 - UU.y), Math.sqrt(1 - UU.z)),
                  gU = new HU.n(1, 1, 1),
                  tU = gU.subtract(RU),
                  pU = gU.subtract(new HU.n(.139, .139, .139).multiplyInPlace(RU)),
                  EU = gU.add(new HU.n(1.17, 1.17, 1.17).multiplyInPlace(RU));
                return tU.multiplyInPlace(pU).divideInPlace(EU)
              }(new HU.n(gU.transmissionScatter.r, gU.transmissionScatter.g, gU.transmissionScatter.b)), tU = gU.transmissionScatterAnisotropy
            }
            const pU = HU.n.Zero();
            let EU = 0;
            gU.subsurfaceWeight > 0 && (pU.set(gU.subsurfaceColor.r, gU.subsurfaceColor.g, gU.subsurfaceColor.b), EU = gU.subsurfaceScatterAnisotropy);
            const PU = (1 - gU.transmissionWeight) * gU.subsurfaceWeight,
              TU = PU + gU.transmissionWeight,
              qU = 1 / Math.max(TU, 1e-6),
              KU = gU.transmissionWeight * qU,
              cU = PU * qU,
              GU = {
                multiscatterColorFactor: UU.multiplyByFloats(KU, KU, KU).addInPlace(pU.multiplyByFloats(cU, cU, cU)).vgU(),
                scatterAnisotropy: tU * KU + EU * cU
              };
            if (gU.subsurfaceWeight > 0 && gU.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(gU);
              const UU = this._exporter._materialExporter.getTextureInfo(gU.subsurfaceColorTexture);
              UU && (GU.multiscatterColorTexture = UU)
            } else if (gU.transmissionWeight > 0 && gU.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(gU);
              const UU = this._exporter._materialExporter.getTextureInfo(gU.transmissionScatterTexture);
              UU && (GU.multiscatterColorTexture = UU)
            }
            RU.extensions = RU.extensions || {}, RU.extensions[VE] = GU
          }
          UU(RU)
        }))
      }
    }
    let XE = !1;

    function vE() {
      XE || (XE = !0, Xt.RegisterExtension(VE, (UU => new rE(UU)), 101))
    }
    vE();
    const dE = "KHR_materials_diffuse_roughness";
    class HE {
      constructor(UU) {
        this.name = dE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, RU, gU) {
        const tU = [];
        if (gU instanceof IR) {
          if (gU._baseDiffuseRoughness) return gU._baseDiffuseRoughnessTexture && tU.push(gU._baseDiffuseRoughnessTexture), tU
        } else if (gU instanceof lR && gU.baseDiffuseRoughness) return gU.baseDiffuseRoughnessTexture && tU.push(gU.baseDiffuseRoughnessTexture), tU;
        return []
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          let tU = null,
            pU = null;
          if (gU instanceof IR ? (tU = gU._baseDiffuseRoughness, pU = gU._baseDiffuseRoughnessTexture) : gU instanceof lR && (tU = gU.baseDiffuseRoughness, pU = gU.baseDiffuseRoughnessTexture), !tU) return void UU(RU);
          this._wasUsed = !0, RU.extensions = RU.extensions || {};
          const EU = {
            diffuseRoughnessFactor: tU,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(pU) ?? void 0
          };
          null !== EU.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(gU), RU.extensions[dE] = EU, UU(RU)
        }))
      }
    }
    let SE = !1;

    function sE() {
      SE || (SE = !0, Xt.RegisterExtension(dE, (UU => new HE(UU))))
    }
    sE();
    const yE = "KHR_materials_openpbr";
    class kE {
      constructor() {
        this.name = yE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(UU, RU, gU) {
        return new Promise((UU => {
          gU instanceof lR && (this._wasUsed = !0, RU.extensions = RU.extensions || {}, RU.extensions[yE] = {}), UU(RU)
        }))
      }
    }
    let FE = !1;

    function iE() {
      FE || (FE = !0, Xt.RegisterExtension(yE, (() => new kE)))
    }
    iE();
    const AE = "KHR_texture_transform";
    class zE {
      constructor() {
        this.name = AE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(UU, RU, gU) {
        if (gU.aZ() || wR.g.Warn(`${UU}: "scene" is not defined for Babylon texture ${gU.name}!`), (0 !== gU.uAng || 0 !== gU.vAng) && (wR.g.Warn(`${UU}: Texture ${gU.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== gU.uRotationCenter || 0 !== gU.vRotationCenter)) return;
        const tU = {};
        let pU = !1;
        if (0 === gU.uOffset && 0 === gU.vOffset || (tU.offset = [gU.uOffset, gU.vOffset], pU = !0), 1 === gU.uScale && 1 === gU.vScale || (tU.scale = [gU.uScale, gU.vScale], pU = !0), 0 !== gU.wAng) {
          if (0 !== gU.uRotationCenter || 0 !== gU.vRotationCenter) {
            if (gU.homogeneousRotationInUVTransform && gU.uScale !== gU.vScale) return void wR.g.Warn(`${UU}: Texture ${gU.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${AE}.`);
            wR.g.Warn(`${UU}: Texture ${gU.name} with non-origin rotation center will be exported using an adjusted offset with ${AE}.`), tU.offset = function(UU) {
              const {
                uOffset: RU,
                vOffset: gU,
                uRotationCenter: tU,
                vRotationCenter: pU,
                uScale: EU,
                vScale: PU,
                wAng: TU
              } = UU, qU = Math.cos(TU), KU = Math.sin(TU), cU = tU * EU, GU = pU * PU;
              return [RU + (cU * (1 - qU) + GU * KU), gU + (GU * (1 - qU) - cU * KU)]
            }(gU)
          }
          tU.rotation = -gU.wAng, pU = !0
        }
        0 !== gU.coordinatesIndex && (tU.texCoord = gU.coordinatesIndex, pU = !0), pU && (this._wasUsed = !0, RU.extensions || (RU.extensions = {}), RU.extensions[AE] = tU)
      }
    }
    let ME = !1;

    function DE() {
      ME || (ME = !0, Xt.RegisterExtension(AE, (() => new zE)))
    }
    DE();
    var LE = gU(39424);
    const NE = "KHR_texture_basisu";
    class lE {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = NE, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, RU) {
        const gU = this._exporter._textures[RU.index],
          tU = gU.source;
        if (void 0 === tU) return;
        const pU = this._exporter._images[tU];
        "image/ktx2" === (pU.mimeType || (0, LE.h)(pU.uri)) && (gU.source = void 0, gU.extensions || (gU.extensions = {}), gU.extensions[NE] = {
          source: tU
        }, this._wasUsed = !0)
      }
    }
    let OE = !1;

    function UP() {
      OE || (OE = !0, Xt.RegisterExtension(NE, (UU => new lE(UU))))
    }
    UP();
    const RP = "EXT_texture_webp";
    class gP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = RP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, RU) {
        const gU = this._exporter._textures[RU.index],
          tU = gU.source;
        if (void 0 === tU) return;
        const pU = this._exporter._images[tU];
        "image/webp" === (pU.mimeType || (0, LE.h)(pU.uri)) && (gU.source = void 0, gU.extensions || (gU.extensions = {}), gU.extensions[RP] = {
          source: tU
        }, this._wasUsed = !0)
      }
    }
    let tP = !1;

    function pP() {
      tP || (tP = !0, Xt.RegisterExtension(RP, (UU => new gP(UU))))
    }
    pP();
    const EP = "EXT_texture_avif";
    class PP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = EP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, RU) {
        const gU = this._exporter._textures[RU.index],
          tU = gU.source;
        if (void 0 === tU) return;
        const pU = this._exporter._images[tU];
        "image/avif" === (pU.mimeType || (0, LE.h)(pU.uri)) && (gU.source = void 0, gU.extensions || (gU.extensions = {}), gU.extensions[EP] = {
          source: tU
        }, this._wasUsed = !0)
      }
    }
    let TP = !1;

    function qP() {
      TP || (TP = !0, Xt.RegisterExtension(EP, (UU => new PP(UU))))
    }
    qP();
    class KP {
      static CreateSTL(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const KU = function(UU, RU, gU) {
            const pU = [3 * UU[gU], 3 * UU[gU + 1], 3 * UU[gU + 2]],
              EU = [new tU.xC(RU[pU[0]], RU[pU[0] + 2], RU[pU[0] + 1]), new tU.xC(RU[pU[1]], RU[pU[1] + 2], RU[pU[1] + 1]), new tU.xC(RU[pU[2]], RU[pU[2] + 2], RU[pU[2] + 1])],
              PU = EU[0].subtract(EU[1]),
              TU = EU[2].subtract(EU[1]);
            return {
              v: EU,
              n: tU.xC.Cross(TU, PU).normalize()
            }
          },
          GU = function(UU, RU, gU, tU) {
            return RU = jU(UU, RU, gU.x, tU), RU = jU(UU, RU, gU.y, tU), jU(UU, RU, gU.z, tU)
          },
          jU = function(UU, RU, gU, tU) {
            return UU.setFloat32(RU, gU, tU), RU + 4
          },
          CU = function(UU) {
            if (TU) {
              let RU = UU;
              UU instanceof uU.c && (RU = UU.VtU);
              const gU = RU.getVerticesData(cU.e.PositionKind, !0, !0);
              if (!gU) return [];
              const pU = tU.xC.Zero();
              let EU;
              for (EU = 0; EU < gU.length; EU += 3) tU.xC.TransformCoordinatesFromFloatsToRef(gU[EU], gU[EU + 1], gU[EU + 2], UU.computeWorldMatrix(!0), pU).toArray(gU, EU);
              return gU
            }
            return UU.getVerticesData(cU.e.PositionKind) || []
          };
        TU && (PU = !0);
        let hU = "",
          QU = 0,
          eU = 0;
        if (pU) {
          for (let gU = 0; gU < UU.length; gU++) {
            const RU = UU[gU].dgU();
            QU += RU ? RU.length / 3 : 0
          }
          const RU = new ArrayBuffer(84 + 50 * QU);
          hU = new DataView(RU), eU += 80, hU.setUint32(eU, QU, EU), eU += 4
        } else qU || (hU = "solid stlmesh\r\n");
        for (let tU = 0; tU < UU.length; tU++) {
          const RU = UU[tU];
          !pU && qU && (hU += "solid " + RU.name + "\r\n"), !PU && RU instanceof Kt.c && RU.bakeCurrentTransformIntoVertices();
          const gU = CU(RU),
            TU = RU.dgU() || [];
          for (let UU = 0; UU < TU.length; UU += 3) {
            const RU = KU(TU, gU, UU);
            pU ? (eU = GU(hU, eU, RU.n, EU), eU = GU(hU, eU, RU.v[0], EU), eU = GU(hU, eU, RU.v[1], EU), eU = GU(hU, eU, RU.v[2], EU), eU += 2) : (hU += "\tfacet normal " + RU.n.x + " " + RU.n.y + " " + RU.n.z + "\r\n", hU += "\t\touter loop\r\n", hU += "\t\t\tvertex " + RU.v[0].x + " " + RU.v[0].y + " " + RU.v[0].z + "\r\n", hU += "\t\t\tvertex " + RU.v[1].x + " " + RU.v[1].y + " " + RU.v[1].z + "\r\n", hU += "\t\t\tvertex " + RU.v[2].x + " " + RU.v[2].y + " " + RU.v[2].z + "\r\n", hU += "\t\tendloop\r\n", hU += "\tendfacet\r\n")
          }!pU && qU && (hU += "endsolid " + name + "\r\n")
        }
        if (pU || qU || (hU += "endsolid stlmesh"), RU) {
          const UU = document.createElement("a"),
            RU = new Blob([hU], {
              type: "application/octet-stream"
            });
          UU.href = window.URL.createObjectURL(RU), UU.download = gU + ".stl", UU.click()
        }
        return hU
      }
    }

    function cP(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pU = [];
      for (let EU = 0; EU < UU.length / gU; EU++) {
        const PU = UU[EU * gU] * (tU ? -1 : 1),
          TU = UU[EU * gU + 1],
          qU = UU[EU * gU + 2];
        pU.push(`(${PU.toPrecision(RU.precision)}, ${TU.toPrecision(RU.precision)}, ${qU.toPrecision(RU.precision)})`)
      }
      return pU.join(", ")
    }

    function GP(UU, RU) {
      const gU = [];
      for (let tU = 0; tU < UU.length / 2; tU++) {
        const pU = UU[2 * tU],
          EU = UU[2 * tU + 1];
        gU.push(`(${pU.toPrecision(RU.precision)}, ${(1-EU).toPrecision(RU.precision)})`)
      }
      return gU.join(", ")
    }

    function jP(UU, RU, gU, tU) {
      const pU = UU.getVerticesData(cU.e.PositionKind),
        EU = UU.getVerticesData(cU.e.NormalKind);
      if (pU && EU) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${gU}"\n\t\tint[] faceVertexCounts = [${function(UU){const RU=UU.dgU()?.length?UU.getTotalIndices():UU.getTotalVertices();return Array(RU/3).fill(3).join(", ")}(UU)}]\n\t\tint[] faceVertexIndices = [${function(UU){const RU=UU.dgU(),gU=RU?.length??UU.getTotalVertices(),tU=[];if(null!==RU)for(let pU=0;pU<gU;pU++)tU.push(RU[pU]);else for(let pU=0;pU<gU;pU++)tU.push(pU);return tU.join(", ")}(UU)}]\n\t\tnormal3f[] normals = [${cP(EU,RU,void 0,tU)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${cP(pU,RU,void 0,tU)}]\n        ${function(UU,RU){let gU="";for(let pU=0;pU<4;pU++){const tU=pU>0?pU:"",EU=UU.getVerticesData(cU.e.UVKind+(tU?tU+1:""));EU&&(gU+=`\n\t\ttexCoord2f[] primvars:st${tU} = [${GP(EU,RU)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const tU=UU.getVerticesData(cU.e.ColorKind);return tU&&(gU+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        cP(tU, RU, tU.length / UU.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),gU}(UU,RU)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function uP(UU, RU, gU, tU) {
      return `\n        def "Geometry"\n        {\n        ${jP(UU,RU,gU,tU)}\n        }\n        `
    }

    function CP(UU) {
      let RU = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return RU += UU, fflate.strToU8(RU)
    }

    function hP(UU) {
      const RU = UU.m;
      return `( ${QP(RU,0)}, ${QP(RU,4)}, ${QP(RU,8)}, ${QP(RU,12)} )`
    }

    function QP(UU, RU) {
      return `(${UU[RU+0]}, ${UU[RU+1]}, ${UU[RU+2]}, ${UU[RU+3]})`
    }

    function eP(UU, RU) {
      const gU = "Object_" + UU.uniqueId,
        tU = hP(RU);
      return `def Xform "${gU}" (\n\tprepend references = @./geometries/Geometry_${UU.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${tU}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${UU.material.uniqueId}>\n}\n\n`
    }

    function WP(UU) {
      switch (UU) {
        case JU.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case JU.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case JU.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function fP(UU) {
      return `(${UU.x}, ${UU.y})`
    }

    function xP(UU) {
      return `(${UU.r}, ${UU.g}, ${UU.b})`
    }

    function mP(UU) {
      return "image/jpeg" === UU || "image/png" === UU
    }

    function IP(UU, RU, gU, pU, EU, PU) {
      const TU = UU.getInternalTexture().uniqueId + "_" + UU.invertY,
        KU = UU.mimeType || (0, qU.d)(UU.getInternalTexture()?.url ?? ""),
        cU = mP(KU) ? KU : "image/png",
        GU = "image/jpeg" === cU ? "jpg" : "png";
      EU[TU] = {
        texture: UU,
        mimeType: cU,
        ext: GU
      };
      const jU = UU.coordinatesIndex > 0 ? "st" + UU.coordinatesIndex : "st",
        uU = new tU.Vector2(UU.uScale, UU.vScale),
        CU = new tU.Vector2(UU.uOffset, UU.vOffset),
        hU = UU.wAng,
        QU = Math.sin(hU),
        eU = Math.cos(hU);
      return CU.y = 1 - CU.y - uU.y, CU.x += QU * uU.x, CU.y += (1 - eU) * uU.y, `\n    def Shader "PrimvarReader_${gU}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${jU}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${gU}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${RU.uniqueId}/PrimvarReader_${gU}.outputs:result>\n        float inputs:rotation = ${(hU*(180/Math.PI)).toFixed(PU.precision)}\n        float2 inputs:scale = ${fP(uU)}\n        float2 inputs:translation = ${fP(CU)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${UU.uniqueId}_${gU}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${TU}.${GU}@\n        float2 inputs:st.connect = </Root/Materials/Material_${RU.uniqueId}/Transform2d_${gU}.outputs:result>\n        ${pU?"float4 inputs:scale = "+function(UU){return`(${UU.r}, ${UU.g}, ${UU.b}, 1.0)`}(pU):""}\n        token inputs:sourceColorSpace = "${UU.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${WP(UU.wrapU)}"\n        token inputs:wrapT = "${WP(UU.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${RU.needAlphaBlending()||RU.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function JP(UU, RU, gU) {
      const tU = "\t\t\t",
        pU = [],
        EU = [],
        {
          diffuseMap: PU,
          diffuse: TU,
          alphaCutOff: qU,
          emissiveMap: KU,
          emissive: cU,
          normalMap: GU,
          roughnessMap: jU,
          roughnessChannel: uU,
          roughness: CU,
          metalnessMap: hU,
          metalnessChannel: eU,
          metalness: WU,
          aoMap: fU,
          aoMapChannel: xU,
          aoMapIntensity: mU,
          alphaMap: IU,
          ior: JU,
          clearCoatEnabled: wU,
          clearCoat: nU,
          clearCoatMap: bU,
          clearCoatRoughness: oU,
          clearCoatRoughnessMap: ZU
        } = function(UU) {
          const RU = {
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
          return UU instanceof Et.StandardMaterial ? {
            ...RU,
            diffuseMap: UU.diffuseTexture,
            diffuse: UU.diffuseColor,
            alphaCutOff: UU.alphaCutOff,
            emissiveMap: UU.emissiveTexture,
            emissive: UU.emissiveColor,
            roughness: 1,
            alphaMap: UU.opacityTexture
          } : UU instanceof IR ? {
            ...RU,
            diffuseMap: UU._albedoTexture,
            diffuse: UU._albedoColor,
            alphaCutOff: UU._alphaCutOff,
            emissiveMap: UU._emissiveTexture,
            emissive: UU._emissiveColor,
            normalMap: UU._bumpTexture,
            roughnessMap: UU._metallicTexture,
            roughnessChannel: UU._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: UU._roughness ?? 1,
            metalnessMap: UU._metallicTexture,
            metalnessChannel: UU._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: UU._metallic ?? 0,
            aoMap: UU._ambientTexture,
            aoMapChannel: UU._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: UU._ambientTextureStrength,
            alphaMap: UU._opacityTexture,
            ior: UU.subSurface.indexOfRefraction,
            clearCoatEnabled: UU.clearCoat.isEnabled,
            clearCoat: UU.clearCoat.intensity,
            clearCoatMap: UU.clearCoat.texture,
            clearCoatRoughness: UU.clearCoat.roughness,
            clearCoatRoughnessMap: UU.clearCoat.useRoughnessFromMainTexture ? UU.clearCoat.texture : UU.clearCoat.textureRoughness
          } : RU
        }(UU);
      return null !== PU ? (pU.push(`${tU}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${PU.uniqueId}_diffuse.outputs:rgb>`), UU.needAlphaBlending() ? pU.push(`${tU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${PU.uniqueId}_diffuse.outputs:a>`) : UU.needAlphaTesting() && (pU.push(`${tU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${PU.uniqueId}_diffuse.outputs:a>`), pU.push(`${tU}float inputs:opacityThreshold = ${qU}`)), EU.push(IP(PU, UU, "diffuse", TU, RU, gU))) : pU.push(`${tU}color3f inputs:diffuseColor = ${xP(TU||QU.Color3.White())}`), null !== KU ? (pU.push(`${tU}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${KU.uniqueId}_emissive.outputs:rgb>`), EU.push(IP(KU, UU, "emissive", cU, RU, gU))) : cU && cU.toLuminance() > 0 && pU.push(`${tU}color3f inputs:emissiveColor = ${xP(cU)}`), null !== GU && (pU.push(`${tU}normal3f inputs:normal.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${GU.uniqueId}_normal.outputs:rgb>`), EU.push(IP(GU, UU, "normal", null, RU, gU))), null !== fU && (pU.push(`${tU}float inputs:occlusion.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${fU.uniqueId}_occlusion.outputs:${xU}>`), EU.push(IP(fU, UU, "occlusion", new QU.Color3(mU, mU, mU), RU, gU))), null !== jU ? (pU.push(`${tU}float inputs:roughness.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${jU.uniqueId}_roughness.outputs:${uU}>`), EU.push(IP(jU, UU, "roughness", new QU.Color3(CU, CU, CU), RU, gU))) : pU.push(`${tU}float inputs:roughness = ${CU}`), null !== hU ? (pU.push(`${tU}float inputs:metallic.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${hU.uniqueId}_metallic.outputs:${eU}>`), EU.push(IP(hU, UU, "metallic", new QU.Color3(WU, WU, WU), RU, gU))) : pU.push(`${tU}float inputs:metallic = ${WU}`), null !== IU ? (pU.push(`${tU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${IU.uniqueId}_opacity.outputs:r>`), pU.push(`${tU}float inputs:opacityThreshold = 0.0001`), EU.push(IP(IU, UU, "opacity", null, RU, gU))) : pU.push(`${tU}float inputs:opacity = ${UU.alpha}`), wU && (null !== bU ? (pU.push(`${tU}float inputs:clearcoat.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${bU.uniqueId}_clearcoat.outputs:r>`), EU.push(IP(bU, UU, "clearcoat", new QU.Color3(nU, nU, nU), RU, gU))) : pU.push(`${tU}float inputs:clearcoat = ${nU}`), null !== ZU ? (pU.push(`${tU}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${ZU.uniqueId}_clearcoatRoughness.outputs:g>`), EU.push(IP(ZU, UU, "clearcoatRoughness", new QU.Color3(oU, oU, oU), RU, gU))) : pU.push(`${tU}float inputs:clearcoatRoughness = ${oU}`)), pU.push(`${tU}float inputs:ior = ${JU}`), `\n\tdef Material "Material_${UU.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${pU.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${UU.uniqueId}/PreviewSurface.outputs:surface>\n\n${EU.join("\n")}\n\n\t}\n`
    }

    function wP(UU) {
      UU.computeWorldMatrix(!0);
      const RU = UU.getWorldMatrix().clone(),
        gU = UU.aZ().useRightHandedSystem;
      let tU = UU.material?._getEffectiveOrientation(UU) ?? UU.sideOrientation,
        PU = !gU,
        TU = UU.parent;
      for (; TU;) {
        if (Xg(TU, gU) && null === TU.parent) {
          gU || (RU.multiplyToRef(TU.getWorldMatrix().invert(), RU), tU = tU === EU.c.ClockWiseSideOrientation ? EU.c.CounterClockWiseSideOrientation : EU.c.ClockWiseSideOrientation), PU = !1;
          break
        }
        TU = TU.parent
      }
      return RU.determinant() < 0 && pU.Tools.Warn(`Mesh ${UU.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: RU,
        windingOrder: tU === EU.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: PU
      }
    }
    async function nP(UU, RU, gU) {
      const EU = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...RU
      };
      "undefined" === typeof fflate && await pU.Tools.LoadScriptAsync(EU.fflateUrl);
      const PU = {};
      PU[EU.modelFileName] = null;
      let TU = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      TU += function(UU) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===UU.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${UU.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${UU.planeAnchoringAlignment}"`:""}\n            `
      }(EU);
      const qU = {};
      for (const tU of UU.meshes) {
        if (0 === tU.getTotalVertices()) continue;
        const UU = tU,
          RU = UU.geometry,
          KU = UU.material;
        if (!KU || !RU || gU && !gU(UU)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(KU.getClassName())) {
          const gU = "geometries/Geometry_" + RU.uniqueId + ".usda",
            {
              matrix: tU,
              windingOrder: pU,
              convertToRightHanded: cU
            } = wP(UU);
          if (!(gU in PU)) {
            const UU = uP(RU, EU, pU, cU);
            PU[gU] = CP(UU)
          }
          KU.uniqueId in qU || (qU[KU.uniqueId] = KU), TU += eP(UU, tU)
        } else pU.Tools.Warn("USDZExportAsync does not support this material type: " + KU.getClassName())
      }
      UU.activeCamera && EU.exportCamera && (TU += function(UU, RU) {
        const gU = "Camera_" + UU.uniqueId,
          pU = hP(tU.Matrix.RotationY(Math.PI).multiply(UU.getWorldMatrix()));
        if (UU.mode === JU.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${gU}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${pU}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${UU.minZ.toPrecision(RU.precision)}, ${UU.maxZ.toPrecision(RU.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(UU.orthoLeft||1)+Math.abs(UU.orthoRight||1))).toPrecision(RU.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(UU.orthoTop||1)+Math.abs(UU.orthoBottom||1))).toPrecision(RU.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const tU = UU.WC().getAspectRatio(UU),
            EU = RU.cameraSensorWidth || 35;
          return `def Camera "${gU}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${pU}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${UU.minZ.toPrecision(RU.precision)}, ${UU.maxZ.toPrecision(RU.precision)})\n\t\t\tfloat focalLength = ${(EU/(2*Math.tan(.5*UU.fov))).toPrecision(RU.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(EU*tU).toPrecision(RU.precision)}\n\t\t\tfloat verticalAperture = ${(EU/tU).toPrecision(RU.precision)}            \n\t\t}\n\t\n\t`
        }
      }(UU.activeCamera, EU)), TU += "\n            }\n        }";
      const KU = {};
      TU += function(UU, RU, gU) {
        const tU = [];
        for (const pU in UU) {
          const EU = UU[pU];
          tU.push(JP(EU, RU, gU))
        }
        return `\n    def "Materials"\n{\n${tU.join("")}\n}\n\n`
      }(qU, KU, EU), TU += "\n    }", PU[EU.modelFileName] = fflate.strToU8(TU);
      for (const tU in KU) {
        const {
          texture: UU,
          ext: RU,
          mimeType: gU
        } = KU[tU], pU = await eg(UU);
        if (pU && mP(pU.mimeType) && pU.mimeType === gU) PU[`textures/Texture_${tU}.${RU}`] = new Uint8Array(pU.data);
        else {
          const pU = UU.getSize(),
            EU = await (0, xU.f)(UU),
            TU = await wU.DumpTools.DumpDataAsync(pU.width, pU.height, EU, gU, void 0, !1, !0);
          PU[`textures/Texture_${tU}.${RU}`] = new Uint8Array(TU).slice()
        }
      }
      let cU = 0;
      for (const tU in PU) {
        const UU = PU[tU];
        if (!UU) continue;
        cU += 34 + tU.length;
        const RU = 63 & cU;
        if (4 !== RU) {
          const gU = new Uint8Array(64 - RU);
          PU[tU] = [UU, {
            extra: {
              12345: gU
            }
          }]
        }
        cU = UU.length
      }
      return fflate.zipSync(PU, {
        level: 0
      })
    }
    var bP = gU(40483);
    class oP {
      static Export(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (!UU || 0 === UU.bones.length) throw new Error("Invalid or empty skeleton provided");
        let tU = RU;
        RU && 0 !== RU.length || (tU = UU.animations.map((UU => UU.name)));
        let pU = null;
        for (const KU of tU) {
          const RU = UU.getAnimationRange(KU);
          RU && (pU = pU ? new bP.e("animation-range", Math.min(pU.from, RU.from), Math.max(pU.to, RU.to)) : RU)
        }
        if (!pU && (UU.animations.length > 0 && (pU = UU.getAnimationRange(UU.animations[0].name)), !pU)) throw new Error("No animation range found in skeleton");
        const EU = gU || 1 / (UU.animations[0]?.framePerSecond || 30),
          PU = this._BuildBoneHierarchy(UU, tU);
        let TU = 0;
        for (const KU of PU) KU.positionKeys.length > 0 && (TU = Math.max(TU, KU.positionKeys.length)), KU.rotationKeys.length > 0 && (TU = Math.max(TU, KU.rotationKeys.length));
        0 === TU && (TU = Math.floor((pU.to - pU.from) / EU) + 1);
        let qU = "";
        return qU += "HIERARCHY\n", qU += this._ExportHierarchy(PU, 0), qU += "MOTION\n", qU += `Frames: ${TU}\n`, qU += `Frame Time: ${EU.toFixed(6)}\n`, qU += this._ExportMotionData(PU, TU, 0, tU), qU
      }
      static _BuildBoneHierarchy(UU, RU) {
        const gU = new Map,
          tU = [];
        for (const pU of UU.bones) {
          const UU = {
            bone: pU,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          gU.set(pU, UU)
        }
        for (const pU of UU.bones) {
          const UU = gU.get(pU);
          if (pU.animations.length > 0)
            for (const gU of pU.animations) RU.includes(gU.name) && ("position" === gU.targetProperty ? (UU.hasPositionChannels = !0, UU.positionKeys.push(...gU.getKeys())) : "rotationQuaternion" === gU.targetProperty && (UU.hasRotationChannels = !0, UU.rotationKeys.push(...gU.getKeys())));
          if (pU.getParent()) {
            const RU = gU.get(pU.getParent());
            RU && RU.children.push(UU)
          } else tU.push(UU)
        }
        return tU
      }
      static _ExportHierarchy(UU, RU) {
        let gU = "";
        const tU = "    ".repeat(RU);
        for (const pU of UU) {
          const UU = pU.bone;
          if (this._IsEndSite(pU)) {
            gU += `${tU}End Site\n`, gU += `${tU}{\n`;
            const RU = this._GetBoneOffset(UU);
            gU += `${tU}    OFFSET ${RU.x.toFixed(6)} ${RU.y.toFixed(6)} ${RU.z.toFixed(6)}\n`, gU += `${tU}}\n`
          } else {
            gU += `${0===RU?"ROOT":`${tU}JOINT`} ${UU.name}\n`, gU += `${tU}{\n`;
            const EU = this._GetBoneOffset(UU);
            gU += `${tU}    OFFSET ${EU.x.toFixed(6)} ${EU.y.toFixed(6)} ${EU.z.toFixed(6)}\n`;
            const PU = [];
            pU.hasPositionChannels && PU.push("Xposition", "Yposition", "Zposition"), pU.hasRotationChannels && PU.push("Zrotation", "Xrotation", "Yrotation"), PU.length > 0 && (gU += `${tU}    CHANNELS ${PU.length} ${PU.join(" ")}\n`), pU.children.length > 0 && (gU += this._ExportHierarchy(pU.children, RU + 1)), gU += `${tU}}\n`
          }
        }
        return gU
      }
      static _IsEndSite(UU) {
        return 0 === UU.children.length
      }
      static _GetBoneOffset(UU) {
        try {
          if (!UU.getParent()) return UU.getRestMatrix().getTranslation();
          return UU.getLocalMatrix().getTranslation()
        } catch (RU) {
          return tU.xC.Zero()
        }
      }
      static _ExportMotionData(UU, RU, gU, tU) {
        let pU = "";
        for (let EU = 0; EU < RU; EU++) {
          const RU = [];
          this._CollectFrameValues(UU, EU + gU, RU, tU), pU += RU.map((UU => UU.toFixed(6))).join(" ") + "\n"
        }
        return pU
      }
      static _CollectFrameValues(UU, RU, gU, tU) {
        for (const pU of UU)
          if (!this._IsEndSite(pU)) {
            if (pU.hasPositionChannels) {
              const UU = this._GetPositionAtFrameIndex(pU.positionKeys, RU);
              gU.push(UU.x, UU.y, UU.z)
            }
            if (pU.hasRotationChannels) {
              const UU = this._GetRotationAtFrameIndex(pU.rotationKeys, RU),
                tU = this._QuaternionToEuler(UU);
              gU.push(tU.z, tU.x, tU.y)
            }
            pU.children.length > 0 && this._CollectFrameValues(pU.children, RU, gU, tU)
          }
      }
      static _GetPositionAtFrameIndex(UU, RU) {
        if (0 === UU.length) return tU.xC.Zero();
        return UU[Math.max(0, Math.min(RU, UU.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(UU, RU) {
        if (0 === UU.length) return tU.Quaternion.Identity();
        return UU[Math.max(0, Math.min(RU, UU.length - 1))].value.clone()
      }
      static _QuaternionToEuler(UU) {
        const RU = new tU.Matrix;
        UU.toRotationMatrix(RU);
        const gU = RU.m;
        let EU, PU, TU;
        const qU = Math.sqrt(gU[0] * gU[0] + gU[1] * gU[1]);
        return qU > Vg.e ? (EU = Math.atan2(gU[6], gU[10]), PU = Math.atan2(-gU[2], qU), TU = Math.atan2(gU[1], gU[0])) : (EU = Math.atan2(-gU[9], gU[5]), PU = Math.atan2(-gU[2], qU), TU = 0), new tU.xC(pU.Tools.ToDegrees(EU), pU.Tools.ToDegrees(PU), pU.Tools.ToDegrees(TU))
      }
    }

    function ZP(UU) {
      return "string" === typeof UU?.name
    }
    const aP = Symbol("__xml:meta$__"),
      YP = Symbol("__xml:name$__");

    function BP(UU, RU) {
      Object.prototype.hasOwnProperty.call(UU.metadata, aP) || (UU.metadata[aP] = []), UU.metadata[aP].push(RU)
    }

    function VP(UU) {
      return (RU, gU) => {
        RU[YP] = UU
      }
    }

    function rP() {
      return (UU, RU) => BP(RU, {
        kind: "none",
        prop: String(RU.name),
        ignore: !0
      })
    }

    function XP(UU) {
      return (RU, gU) => BP(gU, {
        kind: "attr",
        prop: String(gU.name),
        ...UU
      })
    }

    function vP(UU) {
      return (RU, gU) => BP(gU, {
        kind: "elem",
        prop: String(gU.name),
        ...UU
      })
    }

    function dP(UU) {
      const RU = "function" === typeof UU ? UU : UU?.constructor,
        gU = RU?.[Symbol.metadata];
      if (!gU) return [];
      const tU = [];
      let pU = gU;
      for (; pU;) Object.prototype.hasOwnProperty.call(pU, aP) && tU.push(...pU[aP]), pU = Object.getPrototypeOf(pU);
      return tU
    }

    function HP(UU) {
      const RU = UU?.constructor?.[YP];
      return RU || void 0
    }

    function SP(UU) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(UU)
    }

    function sP(UU) {
      if (ZP(UU)) return UU;
      const RU = (UU ?? "").trim();
      if (!RU) return {
        name: ""
      };
      const gU = RU.indexOf(":");
      if (-1 === gU) return {
        name: RU
      };
      if (-1 !== RU.indexOf(":", gU + 1)) return {
        name: RU
      };
      const tU = RU.slice(0, gU),
        pU = RU.slice(gU + 1);
      return SP(tU) && SP(pU) ? {
        ns: tU,
        name: pU
      } : {
        name: RU
      }
    }

    function yP(UU, RU) {
      return RU ? `${RU}:${UU}` : UU
    }
    const kP = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      FP = Object.freeze({
        number: kP
      });

    function iP(UU) {
      const RU = UU?.eps ?? kP.eps;
      return {
        eps: RU,
        maxDecimalsCap: UU?.maxDecimalsCap ?? kP.maxDecimalsCap,
        trimTrailingZeros: UU?.trimTrailingZeros ?? kP.trimTrailingZeros,
        fixedDecimals: UU?.fixedDecimals,
        allowScientific: UU?.allowScientific ?? kP.allowScientific,
        snapNearZero: UU?.snapNearZero ?? kP.snapNearZero,
        zeroThreshold: UU?.zeroThreshold ?? RU,
        perAttributeEps: UU?.perAttributeEps
      }
    }

    function AP(UU) {
      return {
        number: iP(UU?.number)
      }
    }
    class zP {
      constructor(UU) {
        if (this.o = UU, this._o = UU.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(UU) {
        if (!Number.isFinite(UU)) throw new Error(`Cannot format non-finite number: ${UU}`);
        const RU = this._o,
          gU = this._clampInt(RU.maxDecimalsCap ?? 15, 0, 20),
          tU = RU.trimTrailingZeros ?? !0,
          pU = RU.snapNearZero ?? !0,
          EU = RU.zeroThreshold ?? RU.eps,
          PU = 1 / RU.eps;
        let TU, qU = Math.round(UU * PU) / PU;
        if (Object.is(qU, -0) && (qU = 0), pU && Math.abs(qU) <= EU && (qU = 0), TU = void 0 !== RU.fixedDecimals ? this._clampInt(RU.fixedDecimals, 0, gU) : this._clampInt(Math.ceil(-Math.log10(RU.eps)), 0, gU), RU.allowScientific, 0 === TU) return String(Math.trunc(qU));
        let KU = qU.toFixed(TU);
        if (tU && void 0 === RU.fixedDecimals && (KU = KU.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(KU)) throw new Error(`Scientific notation not allowed in XML output: ${KU}`);
        return KU
      }
      _clampInt(UU, RU, gU) {
        return Number.isFinite(UU) ? (UU = Math.trunc(UU), Math.max(RU, Math.min(gU, UU))) : RU
      }
    }

    function MP(UU) {
      return UU instanceof Date
    }

    function DP(UU) {
      return "string" === typeof UU
    }

    function LP(UU) {
      return "string" === typeof UU || "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || MP(UU)
    }

    function NP(UU) {
      return "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || MP(UU)
    }
    class lP {
      constructor(UU, RU) {
        this._ns = new Map, this._prefixCount = 0, this._builder = UU, this._format = AP(RU), this._nFmt = new zP(this._format)
      }
      withNamespace() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        for (const tU of RU) this._assignNamespace(tU);
        return this
      }
      serialize(UU, RU) {
        if (!(RU = RU ?? HP(UU))) throw new Error("can not find name for given object");
        const gU = sP(RU);
        gU.ns && this._assignNamespace(gU.ns, "xmlns"), this._gatherNamespaces(UU, new WeakSet);
        const tU = this._builder.ele(null, gU.name);
        for (const [pU, EU] of Array.from(this._ns.entries())) tU.att("xmlns", EU, pU);
        this._writeObjectContent(tU, UU, (new WeakSet).add(UU)), this._builder.end()
      }
      _writeObject(UU, RU, gU) {
        if (gU.has(RU)) return;
        if (gU.add(RU), Array.isArray(RU)) {
          for (const tU of RU) NP(tU) || (DP(tU) ? this._builder.text(tU) : this._writeObject(UU, tU, gU));
          return
        }
        const tU = HP(RU);
        if (!tU) return;
        const pU = sP(tU),
          EU = this._getPrefix(pU),
          PU = yP(pU.name, EU);
        UU.ele(null, PU), this._writeObjectContent(UU, RU, gU), this._builder.end()
      }
      _getPrefix(UU) {
        if (UU.ns) {
          const RU = this._ns.get(UU.ns.toLowerCase());
          if ("xmlns" !== RU) return RU
        }
      }
      _writeObjectContent(UU, RU, gU) {
        const tU = dP(RU) ?? [],
          pU = new Map;
        for (const PU of tU) {
          const UU = pU.get(PU.prop) ?? [];
          UU.push(PU), pU.set(PU.prop, UU)
        }
        const EU = Object.keys(RU).sort(((UU, RU) => {
          const gU = (pU.get(UU) ?? []).some((UU => "attr" === UU.kind));
          return gU === (pU.get(RU) ?? []).some((UU => "attr" === UU.kind)) ? 0 : gU ? -1 : 1
        }));
        for (const PU of EU) {
          const tU = RU[PU];
          if (null === tU || void 0 === tU) continue;
          const EU = pU.get(PU);
          if (EU) {
            if (EU.some((UU => !0 === UU.ignore || "none" === UU.kind))) continue;
            for (const RU of EU) {
              const gU = RU.name ?? RU.prop.toLowerCase();
              if (gU) switch (RU.kind) {
                case "attr": {
                  let pU = null;
                  if ("number" === typeof tU && this._nFmt && (pU = this._nFmt.toString(tU)), RU.formatter) {
                    pU = new RU.formatter(this._format).toString(tU)
                  }
                  if (pU = pU ?? tU.toString(), pU) {
                    const RU = sP(gU),
                      tU = this._getPrefix(RU),
                      EU = yP(RU.name, tU);
                    UU.att(null, EU, pU)
                  }
                  break
                }
              }
            }
          } else NP(tU) || (DP(tU) ? this._builder.text(tU) : this._writeObject(UU, tU, gU))
        }
      }
      _gatherNamespaces(UU, RU) {
        if (RU.has(UU)) return;
        if (RU.add(UU), Array.isArray(UU)) {
          for (const gU of UU) LP(gU) || this._gatherNamespaces(gU, RU);
          return
        }
        const gU = HP(UU);
        gU && this._assignNamespace(gU);
        const tU = dP(UU) ?? [],
          pU = new Map;
        for (const PU of tU) {
          const UU = pU.get(PU.prop) ?? [];
          UU.push(PU), pU.set(PU.prop, UU)
        }
        const EU = [];
        for (const PU of Object.keys(UU)) {
          const RU = UU[PU];
          if (null === RU || void 0 === RU) continue;
          const gU = pU.get(PU);
          if (gU) {
            if (gU.some((UU => !0 === UU.ignore || "none" === UU.kind))) continue;
            for (const UU of gU) UU.name && this._assignNamespace(UU.name)
          }
          EU.push(RU)
        }
        for (const PU of EU) LP(PU) || this._gatherNamespaces(PU, RU)
      }
      _assignNamespace(UU, RU) {
        const gU = sP(UU);
        if (gU?.ns) {
          const UU = gU.ns.toLowerCase();
          this._ns.get(UU) || this._ns.set(UU, RU ?? this._buildNsPrefix(UU))
        } else if ("xmlns" === RU) {
          const UU = gU.name.toLowerCase();
          this._ns.get(UU) || this._ns.set(UU, RU ?? this._buildNsPrefix(UU))
        }
      }
      _buildNsPrefix(UU) {
        let RU, gU = !1;
        do {
          RU = "ns" + this._prefixCount++;
          for (const UU of Array.from(this._ns.values()))
            if (UU === RU) {
              gU = !0;
              break
            }
        } while (gU);
        return RU
      }
    }
    class OP {}
    var UT;
    OP.OpenTag = "<", OP.CloseTag = ">", OP.Slash = "/", OP.Question = "?", OP.Quote = '"', OP.Equal = "=", OP.Space = " ", OP.Semicolon = ":", OP.Dec = "<?xml", OP.Xml = "xml", OP.Xmlns = "xmlns", OP.Xsi = "xsi", OP.VersionKeyword = "version", OP.EncodingKeyword = "encoding", OP.StandaloneKeyword = "standalone",
      function(UU) {
        UU[UU.Declaration = 0] = "Declaration", UU[UU.Tag = 1] = "Tag", UU[UU.Attribute = 2] = "Attribute", UU[UU.Text = 3] = "Text"
      }(UT || (UT = {}));
    class RT {
      constructor(UU) {
        this._ctxStack = [], this._d = 0, this._w = UU
      }
      dec(UU, RU, gU) {
        return this._w.write(OP.Dec), this._writeAttStr(OP.VersionKeyword, UU), RU && this._writeAttStr(OP.EncodingKeyword, RU), void 0 !== gU && this._writeAttStr(OP.StandaloneKeyword, gU ? "yes" : "no"), this._w.write(OP.Question, OP.CloseTag), this
      }
      att(UU, RU, gU) {
        const tU = this._peekContext();
        if (!tU) throw new Error("att() without open element");
        if (tU.closed) throw new Error(`att() after start tag closed for <${tU.name}>`);
        if (this._isXmlnsDecl(UU, RU)) {
          if (RU === OP.Xmlns) tU.defaultNs = gU, this._registerNamespace(tU, "", gU), this._writeAttStr(OP.Xmlns, gU);
          else if (UU) this._registerNamespace(tU, RU, gU), this._writeAttStr(`${UU}:${RU}`, gU);
          else {
            const UU = RU.slice(6);
            this._registerNamespace(tU, UU, gU), this._writeAttStr(RU, gU)
          }
          return tU.lastToken = UT.Attribute, this
        }
        let pU = RU;
        if (UU) {
          pU = `${this._ensurePrefixDeclared(tU,UU)}:${RU}`
        }
        return tU.lastToken = UT.Attribute, this._writeAttStr(pU, gU), this
      }
      ele(UU, RU) {
        const gU = this._peekContext();
        gU && this._closeOpenTagIfNeeded(gU);
        let tU = RU;
        if (UU) {
          tU = `${this._lookupPrefix(UU)??UU}:${RU}`
        }
        return this._pushContext(tU, ++this._d), this._w.write(OP.OpenTag, tU), this
      }
      text(UU) {
        const RU = this._peekContext();
        if (!RU) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(RU), RU.lastToken = UT.Text, this._w.write(this._escText(UU)), this
      }
      end() {
        const UU = this._popContext();
        return UU && (this._d--, UU.closed ? this._w.write(OP.OpenTag, OP.Slash, UU.name, OP.CloseTag) : this._w.write(OP.Slash, OP.CloseTag)), this
      }
      _pushContext(UU, RU) {
        const gU = new RT.Context(UU, RU);
        return this._ctxStack.push(gU), gU
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
      _writeAttStr(UU, RU) {
        this._w.write(OP.Space, UU, OP.Equal, OP.Quote, this._escAttr(RU), OP.Quote)
      }
      _lookupPrefix(UU) {
        let RU = this._ctxStack.length - 1;
        if (RU >= 0)
          do {
            const gU = this._ctxStack[RU--],
              tU = gU.ns2prefix?.get(UU);
            if (tU) return tU
          } while (RU >= 0)
      }
      _escText(UU) {
        return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(UU) {
        return this._escText(UU).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(UU, RU) {
        if (UU) return UU === OP.Xmlns;
        const gU = RU.length,
          tU = OP.Xmlns.length;
        return gU >= tU && (RU.startsWith(OP.Xmlns) && (RU.length == tU || RU[tU] == OP.Semicolon))
      }
      _registerNamespace(UU, RU, gU) {
        if (RU === OP.Xml || RU === OP.Xmlns) throw new Error(`reserved prefix '${RU}'`);
        const tU = UU.prefix2ns.get(RU);
        if (tU && tU !== gU) throw new Error(`prefix '${RU}' already bound to a different namespace`);
        UU.ns2prefix.get(gU) || UU.ns2prefix.set(gU, RU), UU.prefix2ns.set(RU, gU)
      }
      _allocPrefix(UU) {
        let RU = 1;
        for (;;) {
          const gU = "ns" + RU++;
          if (!UU.prefix2ns.has(gU)) return gU
        }
      }
      _ensurePrefixDeclared(UU, RU) {
        const gU = this._lookupPrefix(RU);
        if (gU) return gU;
        if (UU.closed) throw new Error(`can not declare namespace after start tag closed for <${UU.name}>`);
        const tU = this._allocPrefix(UU);
        return this._writeAttStr(`${OP.Xmlns}:${tU}`, RU), this._registerNamespace(UU, tU, RU), tU
      }
      _closeOpenTagIfNeeded(UU) {
        UU.closed || (this._w.write(OP.CloseTag), UU.closed = !0)
      }
    }
    RT.Context = class {
      constructor(UU, RU) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = UU, this.depth = RU
      }
    };
    class gT {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        if (0 === RU.length) return this;
        const tU = RU.join("");
        return this._chunks.push(tU), this.count += tU.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class tT {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = UU, this._opts = RU, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        if (0 === RU.length) return this;
        const tU = RU.join("");
        if (0 === tU.length) return this;
        this._pending += tU, this._pendingChars += tU.length;
        const pU = this._opts.flushChars ?? 65536;
        return this._pendingChars >= pU && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const UU = this._encoder.encode(this._pending);
        return this._sink.push(UU), this.count += UU.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const pT = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      ET = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var PT, TT;
    ! function(UU) {
      UU.micron = "micron", UU.millimeter = "millimeter", UU.centimeter = "centimeter", UU.inch = "inch", UU.foot = "foot", UU.meter = "meter"
    }(PT || (PT = {})),
    function(UU) {
      UU.model = "model", UU.solidsupport = "solidsupport", UU.support = "support", UU.surface = "surface", UU.other = "other"
    }(TT || (TT = {}));
    const qT = "http://schemas.openxmlformats.org/package/2006/content-types",
      KT = "http://schemas.openxmlformats.org/package/2006/relationships";
    var cT;
    ! function(UU) {
      UU.Relationships = "application/vnd.openxmlformats-package.relationships+xml", UU.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", UU.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", UU.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", UU.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", UU.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", UU.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", UU.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", UU.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", UU.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", UU.Png = "image/png", UU.Jpeg = "image/jpeg", UU.Tiff = "image/tiff", UU.Xml = "application/xml"
    }(cT || (cT = {}));
    const GT = "_rels/",
      jT = "3D/",
      uT = "3dmodel.model",
      CT = ".rels",
      hT = "[Content_Types].xml";
    class QT {
      static IsKnown(UU) {
        return QT.Known.has(UU)
      }
      static IsThreeDimModel(UU) {
        return UU === QT.ThreeDimModel
      }
    }
    QT.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", QT.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", QT.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", QT.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", QT.Known = new Set([QT.ThreeDimModel, QT.Thumbnail, QT.PrintTicket, QT.MustPreserve]);
    let eT = (() => {
        let UU, RU, gU = [VP({
            ns: qT,
            name: "Types"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfContentTypes"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      WT = (() => {
        let UU, RU, gU, tU, pU = [VP({
            ns: qT,
            name: "Default"
          })],
          EU = [],
          PU = [],
          TU = [],
          qU = [],
          KU = [];
        RU = class {
          constructor(UU, RU) {
            this.ext = (0, nU.j)(this, PU, void 0), this.ct = ((0, nU.j)(this, TU), (0, nU.j)(this, qU, void 0)), (0, nU.j)(this, KU), this.ext = UU, this.ct = RU
          }
        };
        return (0, nU.n)(RU, "ThreeMfContentType"), (() => {
          const cU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: {
              ns: qT,
              name: "Extension"
            }
          })], tU = [XP({
            name: {
              ns: qT,
              name: "ContentType"
            }
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: UU => "ext" in UU,
              get: UU => UU.ext,
              set: (UU, RU) => {
                UU.ext = RU
              }
            },
            metadata: cU
          }, PU, TU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: UU => "ct" in UU,
              get: UU => UU.ct,
              set: (UU, RU) => {
                UU.ct = RU
              }
            },
            metadata: cU
          }, qU, KU), (0, nU.i)(null, UU = {
            value: RU
          }, pU, {
            kind: "class",
            name: RU.name,
            metadata: cU
          }, null, EU), RU = UU.value, cU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cU
          }), (0, nU.j)(RU, EU)
        })(), RU
      })(),
      fT = (() => {
        let UU, RU, gU = [VP({
            ns: KT,
            name: "Relationships"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.items = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfRelationships"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      xT = (() => {
        let UU, RU, gU, tU, pU, EU = [VP({
            ns: KT,
            name: "Relationship"
          })],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        RU = class {
          constructor(UU, RU, gU) {
            this.id = (0, nU.j)(this, TU, void 0), this.type = ((0, nU.j)(this, qU), (0, nU.j)(this, KU, void 0)), this.target = ((0, nU.j)(this, cU), (0, nU.j)(this, GU, void 0)), (0, nU.j)(this, jU), this.id = UU, this.type = RU, this.target = gU
          }
        };
        return (0, nU.n)(RU, "ThreeMfRelationship"), (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "Id"
          })], tU = [XP({
            name: "Type"
          })], pU = [XP({
            name: "Target"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, RU) => {
                UU.id = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, RU) => {
                UU.type = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: UU => "target" in UU,
              get: UU => UU.target,
              set: (UU, RU) => {
                UU.target = RU
              }
            },
            metadata: uU
          }, GU, jU), (0, nU.i)(null, UU = {
            value: RU
          }, EU, {
            kind: "class",
            name: RU.name,
            metadata: uU
          }, null, PU), RU = UU.value, uU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          }), (0, nU.j)(RU, PU)
        })(), RU
      })();
    class mT {
      constructor(UU, RU, gU) {
        this.contentTypes = UU, this.relationships = RU, this.model = gU
      }
    }
    class IT {
      static Zero() {
        return new IT([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(UU) {
        this.values = UU
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class JT {
      constructor(UU) {
        this.o = UU, this._f = new zP(UU)
      }
      toString(UU) {
        return UU.values.map((UU => this._f.toString(UU))).join(" ")
      }
    }
    let wT = (() => {
        let UU, RU, gU, tU, pU, EU = [VP({
            ns: pT,
            name: "model"
          })],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        RU = class {
          constructor() {
            this.unit = (0, nU.j)(this, TU, PT.millimeter), this.requiredextensions = ((0, nU.j)(this, qU), (0, nU.j)(this, KU, void 0)), this.recommendedextensions = ((0, nU.j)(this, cU), (0, nU.j)(this, GU, void 0)), this.metadata = (0, nU.j)(this, jU)
          }
        };
        return (0, nU.n)(RU, "ThreeMfModel"), (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "unit"
          })], tU = [XP({
            name: "requiredextensions"
          })], pU = [XP({
            name: "recommendedextensions"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: UU => "unit" in UU,
              get: UU => UU.unit,
              set: (UU, RU) => {
                UU.unit = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "requiredextensions" in UU,
              get: UU => UU.requiredextensions,
              set: (UU, RU) => {
                UU.requiredextensions = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "recommendedextensions" in UU,
              get: UU => UU.recommendedextensions,
              set: (UU, RU) => {
                UU.recommendedextensions = RU
              }
            },
            metadata: uU
          }, GU, jU), (0, nU.i)(null, UU = {
            value: RU
          }, EU, {
            kind: "class",
            name: RU.name,
            metadata: uU
          }, null, PU), RU = UU.value, uU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          })
        })(), RU.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, nU.j)(RU, PU), RU
      })(),
      nT = (() => {
        let UU, RU, gU, tU, pU, EU = [VP({
            ns: pT,
            name: "meta"
          })],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        RU = class {
          constructor(UU, RU, gU, tU) {
            this.name = (0, nU.j)(this, TU, void 0), this.preserve = ((0, nU.j)(this, qU), (0, nU.j)(this, KU, void 0)), this.type = ((0, nU.j)(this, cU), (0, nU.j)(this, GU, void 0)), this.value = (0, nU.j)(this, jU), this.name = UU, this.value = RU, this.preserve = gU, this.type = tU
          }
        };
        return (0, nU.n)(RU, "ThreeMfMeta"), (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "name"
          })], tU = [XP({
            name: "preserve"
          })], pU = [XP({
            name: "type"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, RU) => {
                UU.name = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: UU => "preserve" in UU,
              get: UU => UU.preserve,
              set: (UU, RU) => {
                UU.preserve = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, RU) => {
                UU.type = RU
              }
            },
            metadata: uU
          }, GU, jU), (0, nU.i)(null, UU = {
            value: RU
          }, EU, {
            kind: "class",
            name: RU.name,
            metadata: uU
          }, null, PU), RU = UU.value, uU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          }), (0, nU.j)(RU, PU)
        })(), RU
      })(),
      bT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "metadatagroup"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfMetadataGroup"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      oT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "resources"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.object = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfResources"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      ZT = (() => {
        let UU, RU, gU, tU, pU, EU, PU, TU, qU, KU = [VP({
            ns: pT,
            name: "object"
          })],
          cU = [],
          GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [],
          eU = [],
          WU = [],
          fU = [],
          xU = [],
          mU = [],
          IU = [],
          JU = [],
          wU = [];
        RU = class {
          constructor(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.model;
            this.id = (0, nU.j)(this, GU, void 0), this.type = ((0, nU.j)(this, jU), (0, nU.j)(this, uU, void 0)), this.thumbnail = ((0, nU.j)(this, CU), (0, nU.j)(this, hU, void 0)), this.partnumber = ((0, nU.j)(this, QU), (0, nU.j)(this, eU, void 0)), this.name = ((0, nU.j)(this, WU), (0, nU.j)(this, fU, void 0)), this.pid = ((0, nU.j)(this, xU), (0, nU.j)(this, mU, void 0)), this.pindex = ((0, nU.j)(this, IU), (0, nU.j)(this, JU, void 0)), this.metadatagroup = (0, nU.j)(this, wU), this.id = UU, this.type = RU
          }
        };
        return (0, nU.n)(RU, "ThreeMfObject"), (() => {
          const bU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "id"
          })], tU = [XP({
            name: "type"
          })], pU = [XP({
            name: "thumbnail"
          })], EU = [XP({
            name: "partnumber"
          })], PU = [XP({
            name: "name"
          })], TU = [XP({
            name: "pid"
          })], qU = [XP({
            name: "pindex"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, RU) => {
                UU.id = RU
              }
            },
            metadata: bU
          }, GU, jU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, RU) => {
                UU.type = RU
              }
            },
            metadata: bU
          }, uU, CU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: UU => "thumbnail" in UU,
              get: UU => UU.thumbnail,
              set: (UU, RU) => {
                UU.thumbnail = RU
              }
            },
            metadata: bU
          }, hU, QU), (0, nU.i)(null, null, EU, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "partnumber" in UU,
              get: UU => UU.partnumber,
              set: (UU, RU) => {
                UU.partnumber = RU
              }
            },
            metadata: bU
          }, eU, WU), (0, nU.i)(null, null, PU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, RU) => {
                UU.name = RU
              }
            },
            metadata: bU
          }, fU, xU), (0, nU.i)(null, null, TU, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: UU => "pid" in UU,
              get: UU => UU.pid,
              set: (UU, RU) => {
                UU.pid = RU
              }
            },
            metadata: bU
          }, mU, IU), (0, nU.i)(null, null, qU, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: UU => "pindex" in UU,
              get: UU => UU.pindex,
              set: (UU, RU) => {
                UU.pindex = RU
              }
            },
            metadata: bU
          }, JU, wU), (0, nU.i)(null, UU = {
            value: RU
          }, KU, {
            kind: "class",
            name: RU.name,
            metadata: bU
          }, null, cU), RU = UU.value, bU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bU
          }), (0, nU.j)(RU, cU)
        })(), RU
      })(),
      aT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "mesh"
          })],
          tU = [];
        RU = class {
          constructor(UU, RU) {
            this.vertices = UU ?? new YT, this.triangles = RU ?? new VT
          }
        };
        return (0, nU.n)(RU, "ThreeMfMesh"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      YT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "vertices"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfVertices"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      BT = (() => {
        let UU, RU, gU, tU, pU, EU = [VP({
            ns: pT,
            name: "vertex"
          })],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        RU = class {
          constructor() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, nU.j)(this, TU, void 0), this.y = ((0, nU.j)(this, qU), (0, nU.j)(this, KU, void 0)), this.z = ((0, nU.j)(this, cU), (0, nU.j)(this, GU, void 0)), (0, nU.j)(this, jU), this.x = UU, this.y = RU, this.z = gU
          }
        };
        return (0, nU.n)(RU, "ThreeMfVertex"), (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "x"
          })], tU = [XP({
            name: "y"
          })], pU = [XP({
            name: "z"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: UU => "x" in UU,
              get: UU => UU.x,
              set: (UU, RU) => {
                UU.x = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: UU => "y" in UU,
              get: UU => UU.y,
              set: (UU, RU) => {
                UU.y = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: UU => "z" in UU,
              get: UU => UU.z,
              set: (UU, RU) => {
                UU.z = RU
              }
            },
            metadata: uU
          }, GU, jU), (0, nU.i)(null, UU = {
            value: RU
          }, EU, {
            kind: "class",
            name: RU.name,
            metadata: uU
          }, null, PU), RU = UU.value, uU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          }), (0, nU.j)(RU, PU)
        })(), RU
      })(),
      VT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "triangles"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfTriangles"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      rT = (() => {
        let UU, RU, gU, tU, pU, EU, PU, TU, qU, KU = [VP({
            ns: pT,
            name: "triangle"
          })],
          cU = [],
          GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [],
          eU = [],
          WU = [],
          fU = [],
          xU = [],
          mU = [],
          IU = [],
          JU = [],
          wU = [];
        RU = class {
          constructor(UU, RU, gU) {
            this.v1 = (0, nU.j)(this, GU, void 0), this.v2 = ((0, nU.j)(this, jU), (0, nU.j)(this, uU, void 0)), this.v3 = ((0, nU.j)(this, CU), (0, nU.j)(this, hU, void 0)), this.p1 = ((0, nU.j)(this, QU), (0, nU.j)(this, eU, void 0)), this.p2 = ((0, nU.j)(this, WU), (0, nU.j)(this, fU, void 0)), this.p3 = ((0, nU.j)(this, xU), (0, nU.j)(this, mU, void 0)), this.pid = ((0, nU.j)(this, IU), (0, nU.j)(this, JU, void 0)), (0, nU.j)(this, wU), this.v1 = UU, this.v2 = RU, this.v3 = gU
          }
        };
        return (0, nU.n)(RU, "ThreeMfTriangle"), (() => {
          const bU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "v1"
          })], tU = [XP({
            name: "v2"
          })], pU = [XP({
            name: "v3"
          })], EU = [XP({
            name: "p1"
          })], PU = [XP({
            name: "p2"
          })], TU = [XP({
            name: "p3"
          })], qU = [XP({
            name: "pid"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: UU => "v1" in UU,
              get: UU => UU.v1,
              set: (UU, RU) => {
                UU.v1 = RU
              }
            },
            metadata: bU
          }, GU, jU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: UU => "v2" in UU,
              get: UU => UU.v2,
              set: (UU, RU) => {
                UU.v2 = RU
              }
            },
            metadata: bU
          }, uU, CU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: UU => "v3" in UU,
              get: UU => UU.v3,
              set: (UU, RU) => {
                UU.v3 = RU
              }
            },
            metadata: bU
          }, hU, QU), (0, nU.i)(null, null, EU, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: UU => "p1" in UU,
              get: UU => UU.p1,
              set: (UU, RU) => {
                UU.p1 = RU
              }
            },
            metadata: bU
          }, eU, WU), (0, nU.i)(null, null, PU, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: UU => "p2" in UU,
              get: UU => UU.p2,
              set: (UU, RU) => {
                UU.p2 = RU
              }
            },
            metadata: bU
          }, fU, xU), (0, nU.i)(null, null, TU, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: UU => "p3" in UU,
              get: UU => UU.p3,
              set: (UU, RU) => {
                UU.p3 = RU
              }
            },
            metadata: bU
          }, mU, IU), (0, nU.i)(null, null, qU, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: UU => "pid" in UU,
              get: UU => UU.pid,
              set: (UU, RU) => {
                UU.pid = RU
              }
            },
            metadata: bU
          }, JU, wU), (0, nU.i)(null, UU = {
            value: RU
          }, KU, {
            kind: "class",
            name: RU.name,
            metadata: bU
          }, null, cU), RU = UU.value, bU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bU
          }), (0, nU.j)(RU, cU)
        })(), RU
      })(),
      XT = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "components"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.component = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfComponents"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      vT = (() => {
        let UU, RU, gU, tU, pU = [VP({
            ns: pT,
            name: "component"
          })],
          EU = [],
          PU = [],
          TU = [],
          qU = [],
          KU = [];
        RU = class {
          constructor(UU, RU) {
            this.objectid = (0, nU.j)(this, PU, void 0), this.transform = ((0, nU.j)(this, TU), (0, nU.j)(this, qU, void 0)), (0, nU.j)(this, KU), this.objectid = UU, this.transform = RU
          }
        };
        return (0, nU.n)(RU, "ThreeMfComponent"), (() => {
          const cU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "objectid"
          })], tU = [XP({
            name: "transform",
            formatter: JT
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: UU => "objectid" in UU,
              get: UU => UU.objectid,
              set: (UU, RU) => {
                UU.objectid = RU
              }
            },
            metadata: cU
          }, PU, TU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: UU => "transform" in UU,
              get: UU => UU.transform,
              set: (UU, RU) => {
                UU.transform = RU
              }
            },
            metadata: cU
          }, qU, KU), (0, nU.i)(null, UU = {
            value: RU
          }, pU, {
            kind: "class",
            name: RU.name,
            metadata: cU
          }, null, EU), RU = UU.value, cU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cU
          }), (0, nU.j)(RU, EU)
        })(), RU
      })(),
      dT = (() => {
        let UU, RU, gU, tU = [VP({
            ns: pT,
            name: "basematerials"
          })],
          pU = [],
          EU = [],
          PU = [];
        RU = class {
          constructor(UU) {
            this.id = (0, nU.j)(this, EU, void 0), this.base = ((0, nU.j)(this, PU), []), this.id = UU
          }
        };
        return (0, nU.n)(RU, "ThreeMfBaseMaterials"), (() => {
          const TU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "id"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, RU) => {
                UU.id = RU
              }
            },
            metadata: TU
          }, EU, PU), (0, nU.i)(null, UU = {
            value: RU
          }, tU, {
            kind: "class",
            name: RU.name,
            metadata: TU
          }, null, pU), RU = UU.value, TU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TU
          }), (0, nU.j)(RU, pU)
        })(), RU
      })(),
      HT = (() => {
        let UU, RU, gU, tU, pU = [VP({
            ns: pT,
            name: "base"
          })],
          EU = [],
          PU = [],
          TU = [],
          qU = [],
          KU = [];
        RU = class {
          constructor(UU, RU) {
            this.name = (0, nU.j)(this, PU, void 0), this.displaycolor = ((0, nU.j)(this, TU), (0, nU.j)(this, qU, void 0)), (0, nU.j)(this, KU), this.name = UU, this.displaycolor = RU
          }
        };
        return (0, nU.n)(RU, "ThreeMfBase"), (() => {
          const cU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "name"
          })], tU = [XP({
            name: "displaycolor"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, RU) => {
                UU.name = RU
              }
            },
            metadata: cU
          }, PU, TU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: UU => "displaycolor" in UU,
              get: UU => UU.displaycolor,
              set: (UU, RU) => {
                UU.displaycolor = RU
              }
            },
            metadata: cU
          }, qU, KU), (0, nU.i)(null, UU = {
            value: RU
          }, pU, {
            kind: "class",
            name: RU.name,
            metadata: cU
          }, null, EU), RU = UU.value, cU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cU
          }), (0, nU.j)(RU, EU)
        })(), RU
      })(),
      ST = (() => {
        let UU, RU, gU = [VP({
            ns: pT,
            name: "build"
          })],
          tU = [];
        RU = class {
          constructor() {
            this.item = []
          }
        };
        return (0, nU.n)(RU, "ThreeMfBuild"), (() => {
          const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, nU.i)(null, UU = {
            value: RU
          }, gU, {
            kind: "class",
            name: RU.name,
            metadata: pU
          }, null, tU), RU = UU.value, pU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pU
          }), (0, nU.j)(RU, tU)
        })(), RU
      })(),
      sT = (() => {
        let UU, RU, gU, tU, pU, EU = [VP({
            ns: pT,
            name: "item"
          })],
          PU = [],
          TU = [],
          qU = [],
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        RU = class {
          constructor(UU, RU, gU) {
            this.objectid = (0, nU.j)(this, TU, void 0), this.transform = ((0, nU.j)(this, qU), (0, nU.j)(this, KU, void 0)), this.partnumber = ((0, nU.j)(this, cU), (0, nU.j)(this, GU, void 0)), this.metadatagroup = (0, nU.j)(this, jU), this.objectid = UU, this.transform = RU, this.partnumber = gU
          }
        };
        return (0, nU.n)(RU, "ThreeMfItem"), (() => {
          const uU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          gU = [XP({
            name: "objectid"
          })], tU = [XP({
            name: "transform",
            formatter: JT
          })], pU = [XP({
            name: "partnumber"
          })], (0, nU.i)(null, null, gU, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: UU => "objectid" in UU,
              get: UU => UU.objectid,
              set: (UU, RU) => {
                UU.objectid = RU
              }
            },
            metadata: uU
          }, TU, qU), (0, nU.i)(null, null, tU, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: UU => "transform" in UU,
              get: UU => UU.transform,
              set: (UU, RU) => {
                UU.transform = RU
              }
            },
            metadata: uU
          }, KU, cU), (0, nU.i)(null, null, pU, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "partnumber" in UU,
              get: UU => UU.partnumber,
              set: (UU, RU) => {
                UU.partnumber = RU
              }
            },
            metadata: uU
          }, GU, jU), (0, nU.i)(null, UU = {
            value: RU
          }, EU, {
            kind: "class",
            name: RU.name,
            metadata: uU
          }, null, PU), RU = UU.value, uU && Object.defineProperty(RU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uU
          }), (0, nU.j)(RU, PU)
        })(), RU
      })();
    class yT {
      constructor(UU, RU) {
        this._object = new ZT(UU, RU)
      }
      withName(UU) {
        return this._object.name = UU, this
      }
      withThumbnail(UU) {
        return this._object.thumbnail = UU, this
      }
      withProperty(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = UU, this._object.id = RU, this
      }
      build() {
        return this._object
      }
      reset(UU, RU) {
        this._object = new ZT(UU, RU)
      }
    }
    class kT extends yT {
      constructor(UU) {
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.model), this._object.content = new XT
      }
      withComponent(UU, RU) {
        return this._object.content.component.push(new vT(UU, RU)), this
      }
    }
    class FT extends yT {
      constructor(UU) {
        super(UU, TT.model)
      }
      withPostProcessHandlers(UU, RU) {
        return this._vh = UU, this._th = RU, this
      }
      withData(UU) {
        return this._object.content = this._buildMesh(UU), this
      }
      withMaterial(UU, RU) {
        return this._object.pid = UU, this._object.pindex = RU, this
      }
      _buildMesh(UU) {
        const RU = this._buildVertices(UU.positions),
          gU = this._buildTriangle(UU.indices);
        return new aT(RU, gU)
      }
      _buildVertices(UU) {
        const RU = new YT;
        if (UU)
          for (let gU = 0; gU < UU.length;) {
            const tU = UU[gU++],
              pU = UU[gU++],
              EU = UU[gU++];
            let PU = new BT(tU, pU, EU);
            this._vh && (PU = this._vh(PU)), RU.vertex.push(PU)
          }
        return RU
      }
      _buildTriangle(UU) {
        const RU = new VT;
        if (UU)
          for (let gU = 0; gU < UU.length;) {
            const tU = UU[gU++],
              pU = UU[gU++],
              EU = UU[gU++];
            let PU = new rT(tU, pU, EU);
            this._th && (PU = this._th(PU)), RU.triangle.push(PU)
          }
        return RU
      }
    }
    class iT {
      constructor(UU) {
        this._m = new dT(UU)
      }
      withColor(UU, RU) {
        this._m.base = this._m.base ?? [];
        let gU = this._m.base.find((RU => RU.name.toLowerCase() === UU.toLowerCase()));
        return gU ? (gU.displaycolor = this._rgbaToHex(RU), this) : (gU = new HT(UU, this._rgbaToHex(RU)), this._m.base.push(gU), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(UU) {
        const RU = UU => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(UU, 1 / 2.2)))),
          gU = RU(UU.r).toString(16).padStart(2, "0").toUpperCase(),
          tU = RU(UU.g).toString(16).padStart(2, "0").toUpperCase(),
          pU = RU(UU.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof UU.a) {
          return `#${gU}${tU}${pU}${Math.round(Math.min(255,Math.max(0,255*UU.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${gU}${tU}${pU}`
      }
    }
    class AT {
      constructor() {
        this._model = new wT, this._objects = new Map
      }
      withMetaData(UU, RU, gU, tU) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new nT(UU, RU, gU, tU)), this
      }
      withMaterial(UU) {
        return UU instanceof iT && (UU = UU.build()), UU && (this._model.resources = this._model.resources ?? new oT, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(UU)), this
      }
      withMesh(UU) {
        return UU instanceof FT && (UU = UU.build()), this._model.resources = this._model.resources ?? new oT, this._model.resources.object.push(UU), this
      }
      withComponents(UU) {
        return UU instanceof kT && (UU = UU.build()), this._model.resources = this._model.resources ?? new oT, this._model.resources.object.push(UU), this
      }
      withBuild(UU, RU, gU) {
        return this._model.build = this._model.build ?? new ST, this._model.build.item?.push(new sT(UU, RU, gU)), this
      }
      withUnit(UU) {
        return this._model.unit = UU, this
      }
      reset() {
        return this._model = new wT, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    AT.KnownMetaSet = new Set(wT.KnownMeta.map((UU => UU.toLowerCase())));
    class zT {
      withContentType(UU) {
        this._cts || (this._cts = new eT);
        const RU = this._cts.items;
        return RU.some((RU => RU.ext === UU.ext && RU.ct === UU.ct)) || RU.push(UU), this
      }
      withRelationship(UU) {
        this._rs || (this._rs = new fT);
        const RU = this._rs.items;
        return RU.some((RU => RU.id === UU.id)) || RU.push(UU), this.withContentType(new WT("rels", cT.Relationships)), this
      }
      withModel(UU) {
        return UU instanceof AT && (UU = UU.build()), this._m = UU, this.withContentType(new WT("model", cT.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const UU = `${jT}${uT}`;
        if (!this._rs) {
          const RU = `/${UU}`;
          this.withRelationship(new xT("rel0", QT.ThreeDimModel, RU))
        }
        return new mT(this._cts, this._rs, this._m)
      }
    }
    class MT {
      constructor(UU) {
        this._o = UU
      }
      get options() {
        return this._o
      }
      async serializeAsync(UU) {
        const RU = await this.ensureZipLibReadyAsync();
        if (!RU) return;
        const gU = RU.Zip,
          tU = RU.ZipDeflate;
        if (!gU || !tU) throw new Error("fflate Zip / ZipDeflate not available");
        const pU = function(UU, RU, gU) {
          const pU = new tU(RU, {
            level: 6
          });
          UU.add(pU);
          const EU = function(UU) {
              return {
                push: (RU, gU) => UU.push(RU, gU)
              }
            }(pU),
            PU = new tT(EU),
            TU = new RT(PU).dec("1.0", "UTF-8");
          new lP(TU).serialize(gU), PU.finish()
        };
        for (var EU = arguments.length, PU = new Array(EU > 1 ? EU - 1 : 0), TU = 1; TU < EU; TU++) PU[TU - 1] = arguments[TU];
        const qU = this.toDocument(...PU);
        if (!qU) return;
        const KU = new gU(UU);
        pU(KU, hT, qU.contentTypes), pU(KU, `${GT}${CT}`, qU.relationships), pU(KU, `${jT}${uT}`, qU.model), KU.end()
      }
      toDocument() {
        const UU = (new AT).withUnit(this._o?.unit ?? PT.millimeter);
        if (this.options.metadata)
          for (const pU in this.options.metadata) UU.withMetaData(pU, this.options.metadata[pU]);
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return (new zT).withModel(this.toModel(UU, ...gU)).build()
      }
    }
    class DT {
      static async SerializeToMemoryAsync(UU) {
        const RU = new Array;
        let gU = 0;
        for (var tU = arguments.length, pU = new Array(tU > 1 ? tU - 1 : 0), EU = 1; EU < tU; EU++) pU[EU - 1] = arguments[EU];
        if (await UU.serializeAsync((function(UU, tU, pU) {
            RU.push(tU), gU += tU.length
          }), ...pU), !gU) return;
        const PU = new Uint8Array(gU);
        let TU = 0;
        for (const qU of RU) PU.set(qU, TU), TU += qU.length;
        return PU
      }
    }
    class LT {}
    LT.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class NT {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = UU, this._to = RU, this._step = gU, this._i = UU
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const UU = this._i;
        return this._i += this._step, UU
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class lT extends MT {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...lT.DefaultOptions,
          ...UU
        })
      }
      toModel(UU) {
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        gU = gU.filter((UU => UU instanceof Kt.c || UU instanceof uU.c));
        const pU = new NT,
          EU = UU,
          PU = new Map,
          TU = this.options.exportInstances ? [] : null;
        for (let qU = 0; qU < gU.length; qU++) {
          const UU = gU[qU];
          if (UU instanceof uU.c) {
            TU?.push(UU);
            continue
          }
          const RU = UU.name || `mesh${qU}`,
            tU = UU.getWorldMatrix(),
            KU = this._handleBabylonTo3mfMatrixTransformToRef(tU, IT.Zero()),
            cU = UU.ZI;
          if (void 0 === cU) continue;
          const GU = 1 == cU.length;
          for (let gU = 0; gU < cU.length; gU++) {
            const tU = cU[gU],
              TU = this._extractSubMesh(UU, tU);
            if (TU) {
              const UU = GU ? `${RU}` : `${RU}_${gU}`,
                qU = new FT(pU.next()).withData(TU).withName(UU).build();
              EU.withMesh(qU), EU.withBuild(qU.id, KU), PU.set(tU, qU)
            }
          }
        }
        if (TU && TU.length) {
          const UU = this._groupBy(TU, (UU => UU.VtU));
          for (const [RU, gU] of Array.from(UU.entries()))
            if (gU && gU.length)
              for (let UU = 0; UU < gU.length; UU++) {
                const tU = gU[UU].getWorldMatrix(),
                  pU = RU.ZI;
                for (let UU = 0; UU < pU.length; UU++) {
                  const RU = pU[UU],
                    gU = PU.get(RU);
                  gU && EU.withBuild(gU.id, this._handleBabylonTo3mfMatrixTransformToRef(tU, IT.Zero()))
                }
              }
        }
        return EU.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const UU = globalThis;
          return UU.fflate || await pU.Tools.LoadScriptAsync(LT.FFLATEUrl), UU.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(UU, RU) {
        const gU = UU.dgU();
        if (!gU) return;
        const tU = UU.getVerticesData(lT._PositionKind);
        if (!tU) return;
        if (0 == RU.indexStart && RU.indexCount == gU.length) return {
          positions: tU,
          indices: gU
        };
        const pU = RU.indexStart,
          EU = new Map,
          PU = [],
          TU = new Uint32Array(RU.indexCount);
        for (let qU = 0; qU < RU.indexCount; qU++) {
          const UU = gU[pU + qU];
          let RU = EU.get(UU);
          if (void 0 === RU) {
            RU = EU.size, EU.set(UU, RU);
            const gU = 3 * UU;
            PU.push(tU[gU], tU[gU + 1], tU[gU + 2])
          }
          TU[qU] = RU
        }
        return {
          positions: new Float32Array(PU),
          indices: TU
        }
      }
      _groupBy(UU, RU) {
        const gU = new Map;
        for (const tU of UU) {
          const UU = RU(tU),
            pU = gU.get(UU);
          pU ? pU.push(tU) : gU.set(UU, [tU])
        }
        return gU
      }
      _handleBabylonTo3mfMatrixTransformToRef(UU, RU) {
        const gU = UU.multiplyToRef(lT._R_BJS_TO_3MF, HU.c.Zero()).m;
        return RU.values = [gU[0], gU[1], gU[2], gU[4], gU[5], gU[6], gU[8], gU[9], gU[10], gU[12], gU[13], gU[14]], RU
      }
    }
    lT.DefaultOptions = {
      unit: PT.meter,
      exportInstances: !1
    }, lT._PositionKind = "position", lT._R_BJS_TO_3MF = HU.c.RotationX(Math.PI / 2).multiply(HU.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);