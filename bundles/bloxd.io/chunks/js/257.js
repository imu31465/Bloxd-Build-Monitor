export const id = 257;
export const ids = [257, 262];
export const modules = {
  45301: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(45245),
      rH = LH(41283);
    let SH = !1;

    function hH() {
      SH || (SH = !0, rH.e.prototype._sphericalPolynomialTargetSize = 0, rH.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(rH.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = AH.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((HH => {
              this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(HH) {
          this._texture && (this._texture._sphericalPolynomial = HH)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38071: (HH, BH, LH) => {
    LH.d(BH, {
      Color3: () => AH.c,
      d: () => AH.g
    });
    var AH = LH(38074);
    (0, AH.j)()
  },
  38610: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(38619);
    class rH {
      static GetPlanes(HH) {
        const BH = [];
        for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
        return rH.GetPlanesToRef(HH, BH), BH
      }
      static GetNearPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
      }
      static GetFarPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
      }
      static GetLeftPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
      }
      static GetRightPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
      }
      static GetTopPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
      }
      static GetBottomPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
      }
      static GetPlanesToRef(HH, BH) {
        rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
      }
      static IsPointInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; LH++)
          if (BH[LH].dotCoordinate(HH) < 0) return !1;
        return !0
      }
    }
  },
  38619: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH, rH) {
        this.normal = new AH.o(HH, BH, LH), this.d = rH
      }
      xrH() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let BH = 0;
        return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
      }
      transform(HH) {
        const BH = rH._TmpMatrix;
        HH.invertToRef(BH);
        const LH = BH.m,
          AH = this.normal.x,
          SH = this.normal.y,
          hH = this.normal.z,
          tH = this.d,
          zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
          CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
          EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
          XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
        return new rH(zH, CH, EH, XH)
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
      }
      copyFromPoints(HH, BH, LH) {
        const AH = BH.x - HH.x,
          rH = BH.y - HH.y,
          SH = BH.z - HH.z,
          hH = LH.x - HH.x,
          tH = LH.y - HH.y,
          zH = LH.z - HH.z,
          CH = rH * zH - SH * tH,
          EH = SH * hH - AH * zH,
          XH = AH * tH - rH * hH,
          GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
        let YH;
        return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
      }
      isFrontFacingTo(HH, BH) {
        return AH.o.Dot(this.normal, HH) <= BH
      }
      signedDistanceTo(HH) {
        return AH.o.Dot(HH, this.normal) + this.d
      }
      static FromArray(HH) {
        return new rH(HH[0], HH[1], HH[2], HH[3])
      }
      static FromPoints(HH, BH, LH) {
        const AH = new rH(0, 0, 0, 0);
        return AH.copyFromPoints(HH, BH, LH), AH
      }
      static FromPositionAndNormal(HH, BH) {
        const LH = new rH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, BH, LH)
      }
      static FromPositionAndNormalToRef(HH, BH, LH) {
        return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
        const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
        return AH.o.Dot(LH, BH) + rH
      }
    }
    rH._TmpMatrix = AH.e.Identity()
  },
  37961: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Matrix: () => AH.e,
      Quaternion: () => AH.f,
      RegisterMathVector: () => AH.h,
      TmpVectors: () => AH.l,
      Vector2: () => AH.n,
      lu: () => AH.o,
      Vector4: () => AH.q
    });
    var AH = LH(37963);
    (0, AH.h)()
  },
  38966: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH, LH, AH) {
        this.x = HH, this.y = BH, this.width = LH, this.height = AH
      }
      toGlobal(HH, BH) {
        return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
      }
      toGlobalToRef(HH, BH, LH) {
        return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
      }
      clone() {
        return new AH(this.x, this.y, this.width, this.height)
      }
    }
  },
  45245: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(41275),
      hH = LH(37972),
      tH = LH(38074);
    class zH {
      constructor(HH, BH, LH, AH) {
        this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
      }
    }
    class CH {
      static _NearestPow2Floor(HH) {
        return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(HH) {
        if (!HH.isCube) return null;
        HH.yN()?.Iu().flushFramebuffer();
        const BH = HH.getSize().width,
          LH = HH._sphericalPolynomialTargetSize,
          AH = LH > 0 ? this._NearestPow2Floor(LH) : 0,
          rH = !HH.noMipmap && !0 === HH._texture?.generateMipMaps,
          SH = AH > 0 && AH < BH && rH,
          hH = SH ? Math.max(0, Math.round(Math.log2(BH / AH))) : 0,
          tH = SH ? Math.max(1, Math.floor(BH / Math.pow(2, hH))) : BH,
          zH = HH.readPixels(0, hH, void 0, !1),
          CH = HH.readPixels(1, hH, void 0, !1);
        let EH, XH;
        HH.isRenderTarget ? (EH = HH.readPixels(3, hH, void 0, !1), XH = HH.readPixels(2, hH, void 0, !1)) : (EH = HH.readPixels(2, hH, void 0, !1), XH = HH.readPixels(3, hH, void 0, !1));
        const GH = HH.readPixels(4, hH, void 0, !1),
          YH = HH.readPixels(5, hH, void 0, !1),
          uH = HH.gammaSpace,
          QH = AH > 0 && AH < BH && !SH;
        return new Promise((HH => {
          Promise.all([CH, zH, EH, XH, GH, YH]).then((LH => {
            let [rH, SH, hH, zH, CH, EH] = LH, XH = tH;
            if (QH) {
              const HH = 4;
              rH = this._DownsampleFace(rH, BH, AH, HH), SH = this._DownsampleFace(SH, BH, AH, HH), hH = this._DownsampleFace(hH, BH, AH, HH), zH = this._DownsampleFace(zH, BH, AH, HH), CH = this._DownsampleFace(CH, BH, AH, HH), EH = this._DownsampleFace(EH, BH, AH, HH), XH = AH
            }
            const GH = {
              size: XH,
              right: SH,
              left: rH,
              up: hH,
              down: zH,
              front: CH,
              back: EH,
              format: 5,
              type: rH instanceof Float32Array ? 1 : 0,
              gammaSpace: uH
            };
            HH(this.ConvertCubeMapToSphericalPolynomial(GH))
          }))
        }))
      }
      static _AreaElement(HH, BH) {
        return Math.atan2(HH * BH, Math.sqrt(HH * HH + BH * BH + 1))
      }
      static _DownsampleFace(HH, BH, LH, AH) {
        const rH = HH instanceof Float32Array ? HH : Float32Array.from(HH),
          SH = LH * LH * AH,
          hH = new Float32Array(SH),
          tH = BH / LH,
          zH = 1 / (tH * tH);
        for (let EH = 0; EH < LH; EH++) {
          const HH = Math.floor(EH * tH),
            SH = Math.floor((EH + 1) * tH);
          for (let CH = 0; CH < LH; CH++) {
            const XH = Math.floor(CH * tH),
              GH = Math.floor((CH + 1) * tH),
              YH = (EH * LH + CH) * AH;
            for (let LH = 0; LH < AH; LH++) {
              let tH = 0;
              for (let hH = HH; hH < SH; hH++)
                for (let HH = XH; HH < GH; HH++) tH += rH[(hH * BH + HH) * AH + LH];
              hH[YH + LH] = tH * zH
            }
          }
        }
        if (HH instanceof Float32Array) return hH;
        const CH = new(0, HH.constructor)(SH);
        for (let EH = 0; EH < SH; EH++) CH[EH] = hH[EH] + .5 | 0;
        return CH
      }
      static ConvertCubeMapToSphericalPolynomial(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = BH > 0 ? this._NearestPow2Floor(BH) : 0;
        if (LH > 0 && HH.size > LH) {
          const BH = 5 === HH.format ? 4 : 3,
            AH = ["right", "left", "up", "down", "front", "back"],
            rH = {};
          for (const SH of AH) rH[SH] = this._DownsampleFace(HH[SH], HH.size, LH, BH);
          HH = {
            ...HH,
            ...rH,
            size: LH
          }
        }
        const AH = new SH.e;
        let zH = 0;
        const CH = 2 / HH.size,
          EH = CH,
          XH = .5 * CH,
          GH = XH - 1;
        for (let SH = 0; SH < 6; SH++) {
          const BH = this._FileFaces[SH],
            LH = HH[BH.name];
          let YH = GH;
          const uH = 5 === HH.format ? 4 : 3;
          for (let SH = 0; SH < HH.size; SH++) {
            let QH = GH;
            for (let EH = 0; EH < HH.size; EH++) {
              const GH = BH.worldAxisForFileX.scale(QH).add(BH.worldAxisForFileY.scale(YH)).add(BH.worldAxisForNormal);
              GH.normalize();
              const WH = this._AreaElement(QH - XH, YH - XH) - this._AreaElement(QH - XH, YH + XH) - this._AreaElement(QH + XH, YH - XH) + this._AreaElement(QH + XH, YH + XH);
              let MH = LH[SH * HH.size * uH + EH * uH + 0],
                xH = LH[SH * HH.size * uH + EH * uH + 1],
                vH = LH[SH * HH.size * uH + EH * uH + 2];
              isNaN(MH) && (MH = 0), isNaN(xH) && (xH = 0), isNaN(vH) && (vH = 0), 0 === HH.type && (MH /= 255, xH /= 255, vH /= 255), HH.gammaSpace && (MH = Math.pow((0, rH.Clamp)(MH), hH.f), xH = Math.pow((0, rH.Clamp)(xH), hH.f), vH = Math.pow((0, rH.Clamp)(vH), hH.f));
              const PH = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const HH = Math.max(MH, xH, vH);
                if (HH > PH) {
                  const BH = PH / HH;
                  MH *= BH, xH *= BH, vH *= BH
                }
              } else MH = (0, rH.Clamp)(MH, 0, PH), xH = (0, rH.Clamp)(xH, 0, PH), vH = (0, rH.Clamp)(vH, 0, PH);
              const TH = new tH.c(MH, xH, vH);
              AH.addLight(GH, TH, WH), zH += WH, QH += CH
            }
            YH += EH
          }
        }
        const YH = 6 * (4 * Math.PI) / 6 / zH;
        return AH.scaleInPlace(YH), AH.convertIncidentRadianceToIrradiance(), AH.convertIrradianceToLambertianRadiance(), SH.g.FromHarmonics(AH)
      }
    }
    CH._FileFaces = [new zH("right", new AH.o(1, 0, 0), new AH.o(0, 0, -1), new AH.o(0, -1, 0)), new zH("left", new AH.o(-1, 0, 0), new AH.o(0, 0, 1), new AH.o(0, -1, 0)), new zH("up", new AH.o(0, 1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, 1)), new zH("down", new AH.o(0, -1, 0), new AH.o(1, 0, 0), new AH.o(0, 0, -1)), new zH("front", new AH.o(0, 0, 1), new AH.o(1, 0, 0), new AH.o(0, -1, 0)), new zH("back", new AH.o(0, 0, -1), new AH.o(-1, 0, 0), new AH.o(0, -1, 0))], CH.MAX_HDRI_VALUE = 4096, CH.PRESERVE_CLAMPED_COLORS = !1
  },
  45118: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH.i,
      f: () => AH.m
    });
    var AH = LH(41336);
    (0, AH.q)()
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  45276: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45266),
      rH = LH(45285);
    class SH {
      static ExpandRGBDTexture(HH) {
        const BH = HH._texture;
        if (!BH || !HH.isRGBD) return;
        const rH = BH.Iu(),
          SH = rH.getCaps(),
          hH = BH.isReady;
        let tH = !1;
        SH.textureHalfFloatRender && SH.textureHalfFloatLinearFiltering ? (tH = !0, BH.type = 2) : SH.textureFloatRender && SH.textureFloatLinearFiltering && (tH = !0, BH.type = 1), tH && (BH.isReady = !1, BH._isRGBD = !1, BH.invertY = !1);
        const zH = async () => {
          const SH = rH.isWebGPU,
            hH = SH ? 1 : 0;
          BH.isReady = !1, SH ? await LH.e(651).then((() => LH(64229))) : await LH.e(633).then((() => LH(64238)));
          const tH = new AH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rH, !1, void 0, BH.type, void 0, null, !1, void 0, hH);
          tH.externalTextureSamplerBinding = !0;
          const zH = rH.createRenderTargetTexture(BH.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: BH.samplingMode,
            type: BH.type,
            format: 5
          });
          tH.onEffectCreatedObservable.addOnce((LH => {
            LH.executeWhenCompiled((() => {
              tH.onApply = HH => {
                HH._bindTexture("textureSampler", BH), HH.setFloat2("scale", 1, 1)
              }, HH.yN()?.postProcessManager.directRender([tH], zH, !0), rH.restoreDefaultFramebuffer(), rH._releaseTexture(BH), tH && tH.dispose(), zH._swapAndDie(BH), BH.isReady = !0
            }))
          }))
        };
        tH && (hH ? zH() : HH.onLoadObservable.addOnce(zH))
      }
      static async EncodeTextureToRGBD(HH, BH) {
        let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return BH.Iu().isWebGPU ? await LH.e(652).then((() => LH(64248))) : await LH.e(634).then((() => LH(64245))), await (0, rH.d)("rgbdEncode", HH, BH, AH, 1, 5)
      }
    }
  },
  64093: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AsyncLoop: () => AH.e,
      RegisterTools: () => AH.f,
      Tools: () => AH.i,
      className: () => AH.j
    });
    var AH = LH(41387);
    (0, AH.f)()
  },
  45318: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    class AH {
      constructor(HH) {
        this._pendingActions = new Array, this._workerInfos = HH.map((HH => ({
          workerPromise: Promise.resolve(HH),
          idle: !0
        })))
      }
      dispose() {
        for (const HH of this._workerInfos) HH.workerPromise.then((HH => {
          HH.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(HH) {
        this._executeOnIdleWorker(HH) || this._pendingActions.push(HH)
      }
      _executeOnIdleWorker(HH) {
        for (const BH of this._workerInfos)
          if (BH.idle) return this._execute(BH, HH), !0;
        return !1
      }
      _execute(HH, BH) {
        HH.idle = !1, HH.workerPromise.then((LH => {
          BH(LH, (() => {
            const BH = this._pendingActions.shift();
            BH ? this._execute(HH, BH) : HH.idle = !0
          }))
        }))
      }
    }
    class rH extends AH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.DefaultOptions;
        super([]), this._maxWorkers = HH, this._createWorkerAsync = BH, this._options = LH
      }
      push(HH) {
        if (!this._executeOnIdleWorker(HH))
          if (this._workerInfos.length < this._maxWorkers) {
            const BH = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(BH), this._execute(BH, HH)
          } else this._pendingActions.push(HH)
      }
      _execute(HH, BH) {
        HH.timeoutId && (clearTimeout(HH.timeoutId), delete HH.timeoutId), super._execute(HH, ((LH, AH) => {
          BH(LH, (() => {
            AH(), HH.idle && (HH.timeoutId = setTimeout((() => {
              HH.workerPromise.then((HH => {
                HH.terminate()
              }));
              const BH = this._workerInfos.indexOf(HH); - 1 !== BH && this._workerInfos.splice(BH, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    rH.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64122: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AbstractThreeMfSerializer: () => Zt,
      BVHExporter: () => bh,
      ContentTypeFileName: () => Yt,
      DefaultXmlSerializerFormatOptions: () => nh,
      DefaultXmlSerializerNumberOptions: () => jh,
      EXT_lights_area: () => Wr,
      EXT_mesh_gpu_instancing: () => NA,
      EXT_texture_avif: () => rh,
      EXT_texture_webp: () => Hh,
      GLTF2Export: () => eA,
      GLTFData: () => CH,
      GetXmlFieldMeta: () => eh,
      GetXmlName: () => qh,
      IsQualifiedName: () => kh,
      KHR_draco_mesh_compression: () => iA,
      KHR_interactivity: () => Cr,
      KHR_lights_punctual: () => Sr,
      KHR_materials_anisotropy: () => Pr,
      KHR_materials_clearcoat: () => br,
      KHR_materials_coat: () => lr,
      KHR_materials_diffuse_roughness: () => qS,
      KHR_materials_diffuse_transmission: () => Nr,
      KHR_materials_dispersion: () => Fr,
      KHR_materials_emissive_strength: () => dr,
      KHR_materials_fuzz: () => ES,
      KHR_materials_ior: () => ir,
      KHR_materials_iridescence: () => BS,
      KHR_materials_openpbr: () => jS,
      KHR_materials_sheen: () => SS,
      KHR_materials_specular: () => uS,
      KHR_materials_transmission: () => xS,
      KHR_materials_unlit: () => VS,
      KHR_materials_volume: () => mS,
      KHR_materials_volume_scatter: () => lS,
      KHR_texture_basisu: () => JS,
      KHR_texture_transform: () => wS,
      Known3mfRelationshipTypes: () => ut,
      KnownI3mfContentType: () => zt,
      Matrix3d: () => Pt,
      MatrixFormatter: () => Tt,
      ModelFileName: () => Xt,
      NumberFormatter: () => wh,
      OBJExport: () => hH,
      Object3dDirName: () => Et,
      OpenXmlContentTypesNamespace: () => ht,
      OpenXmlRelationshipsNamespace: () => tt,
      RegisterEXT_lights_area: () => xr,
      RegisterEXT_mesh_gpu_instancing: () => jA,
      RegisterEXT_texture_avif: () => hh,
      RegisterEXT_texture_webp: () => Lh,
      RegisterKHR_draco_mesh_compression: () => yA,
      RegisterKHR_interactivity: () => Xr,
      RegisterKHR_lights_punctual: () => tr,
      RegisterKHR_materials_anisotropy: () => Ur,
      RegisterKHR_materials_clearcoat: () => mr,
      RegisterKHR_materials_coat: () => cr,
      RegisterKHR_materials_diffuse_roughness: () => NS,
      RegisterKHR_materials_diffuse_transmission: () => jr,
      RegisterKHR_materials_dispersion: () => wr,
      RegisterKHR_materials_emissive_strength: () => sr,
      RegisterKHR_materials_fuzz: () => GS,
      RegisterKHR_materials_ior: () => yr,
      RegisterKHR_materials_iridescence: () => AS,
      RegisterKHR_materials_openpbr: () => FS,
      RegisterKHR_materials_sheen: () => tS,
      RegisterKHR_materials_specular: () => WS,
      RegisterKHR_materials_transmission: () => PS,
      RegisterKHR_materials_unlit: () => bS,
      RegisterKHR_materials_volume: () => IS,
      RegisterKHR_materials_volume_scatter: () => cS,
      RegisterKHR_texture_basisu: () => pS,
      RegisterKHR_texture_transform: () => dS,
      RelationshipDirName: () => Ct,
      RelationshipFileName: () => Gt,
      ResolveFormatOptions: () => Dh,
      ResolveNumberOptions: () => Fh,
      STLExport: () => th,
      ST_ObjectType: () => St,
      ST_Unit: () => rt,
      StringXmlWriter: () => Ht,
      ThreeDimModelNamespace: () => Lt,
      ThreeMf: () => dt,
      ThreeMfBase: () => qt,
      ThreeMfBaseMaterials: () => et,
      ThreeMfBuild: () => gt,
      ThreeMfComponent: () => ct,
      ThreeMfComponents: () => Kt,
      ThreeMfComponentsBuilder: () => jt,
      ThreeMfContentType: () => Wt,
      ThreeMfContentTypes: () => Qt,
      ThreeMfDocument: () => vt,
      ThreeMfDocumentBuilder: () => wt,
      ThreeMfItem: () => Nt,
      ThreeMfMaterialBuilder: () => Ft,
      ThreeMfMesh: () => mt,
      ThreeMfMeshBuilder: () => nt,
      ThreeMfMeta: () => Vt,
      ThreeMfMetadataGroup: () => Ot,
      ThreeMfModel: () => Ut,
      ThreeMfModelBuilder: () => Dt,
      ThreeMfObject: () => kt,
      ThreeMfObjectBuilder: () => Rt,
      ThreeMfRelationship: () => xt,
      ThreeMfRelationships: () => Mt,
      ThreeMfResources: () => bt,
      ThreeMfSerializer: () => it,
      ThreeMfSerializerGlobalConfiguration: () => st,
      ThreeMfTriangle: () => lt,
      ThreeMfTriangles: () => ft,
      ThreeMfVertex: () => It,
      ThreeMfVertices: () => ot,
      ToQualifiedString: () => Rh,
      TokenType: () => ph,
      TriangleSetsNamespace: () => At,
      USDZExportAsync: () => Vh,
      Utf8XmlWriterToBytes: () => Bt,
      XmlAttr: () => Kh,
      XmlBuilder: () => yh,
      XmlElem: () => ch,
      XmlIgnore: () => lh,
      XmlName: () => fh,
      XmlNameToParts: () => Nh,
      XmlSerializer: () => Jh,
      _ConvertToGLTFPBRMetallicRoughness: () => bL,
      _SolveMetallic: () => OL,
      __IGLTFExporterExtension: () => tH
    });
    var AH = LH(37961),
      rH = LH(64093),
      SH = LH(41573);
    class hH {
      static OBJ(HH, BH, LH, hH) {
        const tH = [];
        let zH = 1,
          CH = 1;
        BH && (LH || (LH = "mat"), tH.push("mtllib " + LH + ".mtl"));
        for (let EH = 0; EH < HH.length; EH++) {
          const LH = HH[EH],
            XH = LH.name || `mesh${EH}}`;
          tH.push(`o ${XH}`);
          let GH = null;
          if (hH) {
            const HH = LH.computeWorldMatrix(!0);
            GH = new AH.Matrix, HH.invertToRef(GH), LH.bakeTransformIntoVertices(HH)
          }
          if (BH) {
            const HH = LH.material;
            HH && tH.push("usemtl " + HH.id)
          }
          const YH = LH.geometry;
          if (!YH) {
            rH.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const uH = YH.getVerticesData("position"),
            QH = YH.getVerticesData("normal"),
            WH = YH.getVerticesData("uv"),
            MH = YH.vrH();
          let xH = 0,
            vH = 0;
          if (!uH || !MH) {
            rH.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const PH = HH[0].yN().useRightHandedSystem ? 1 : -1;
          for (let HH = 0; HH < uH.length; HH += 3) tH.push("v " + uH[HH] * PH + " " + uH[HH + 1] + " " + uH[HH + 2]), xH++;
          if (null != QH)
            for (let HH = 0; HH < QH.length; HH += 3) tH.push("vn " + QH[HH] * PH + " " + QH[HH + 1] + " " + QH[HH + 2]);
          if (null != WH)
            for (let HH = 0; HH < WH.length; HH += 2) tH.push("vt " + WH[HH] + " " + WH[HH + 1]), vH++;
          const TH = ["", "", ""],
            UH = (LH.material || LH.yN().defaultMaterial)._getEffectiveOrientation(LH),
            [VH, OH] = UH === SH.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let HH = 0; HH < MH.length; HH += 3) {
            const BH = [String(MH[HH] + zH), String(MH[HH + VH] + zH), String(MH[HH + OH] + zH)],
              LH = [String(MH[HH] + CH), String(MH[HH + VH] + CH), String(MH[HH + OH] + CH)],
              AH = BH,
              rH = null != WH ? LH : TH,
              SH = null != QH ? BH : TH;
            tH.push("f " + AH[0] + "/" + rH[0] + "/" + SH[0] + " " + AH[1] + "/" + rH[1] + "/" + SH[1] + " " + AH[2] + "/" + rH[2] + "/" + SH[2])
          }
          hH && GH && LH.bakeTransformIntoVertices(GH), zH += xH, CH += vH
        }
        return tH.join("\n")
      }
      static MTL(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const LH = [],
          AH = HH.material;
        LH.push("newmtl " + BH), LH.push("  Ns " + AH.specularPower.toFixed(4)), LH.push("  Ni 1.5000"), LH.push("  d " + AH.alpha.toFixed(4)), LH.push("  Tr 0.0000"), LH.push("  Tf 1.0000 1.0000 1.0000"), LH.push("  illum 2"), LH.push("  Ka " + AH.ambientColor.r.toFixed(4) + " " + AH.ambientColor.g.toFixed(4) + " " + AH.ambientColor.b.toFixed(4)), LH.push("  Kd " + AH.diffuseColor.r.toFixed(4) + " " + AH.diffuseColor.g.toFixed(4) + " " + AH.diffuseColor.b.toFixed(4)), LH.push("  Ks " + AH.specularColor.r.toFixed(4) + " " + AH.specularColor.g.toFixed(4) + " " + AH.specularColor.b.toFixed(4)), LH.push("  Ke " + AH.emissiveColor.r.toFixed(4) + " " + AH.emissiveColor.g.toFixed(4) + " " + AH.emissiveColor.b.toFixed(4));
        AH.ambientTexture && LH.push("  map_Ka " + AH.ambientTexture.name), AH.diffuseTexture && LH.push("  map_Kd " + AH.diffuseTexture.name), AH.specularTexture && LH.push("  map_Ks " + AH.specularTexture.name), AH.bumpTexture && LH.push("  map_bump -imfchan z " + AH.bumpTexture.name), AH.opacityTexture && LH.push("  map_d " + AH.opacityTexture.name);
        return LH.join("\n")
      }
    }
    var tH = 0,
      zH = LH(45118);
    class CH {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const HH in this.files) {
          const BH = this.files[HH],
            LH = new Blob([BH], {
              type: (0, zH.d)(HH)
            });
          rH.Tools.Download(LH, HH)
        }
      }
    }
    var EH = LH(42455),
      XH = LH(42414),
      GH = LH(45102),
      YH = LH(42418),
      uH = LH(41106),
      QH = LH(37989),
      WH = LH(38071),
      MH = LH(38002);
    const xH = MH.HighestCommonFactor,
      vH = {
        ...MH,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: xH
      };
    var PH = LH(45285),
      TH = LH(42434),
      UH = LH(45062),
      VH = LH(45065),
      OH = LH(45299);
    (0, OH.RegisterDumpTools)();
    var bH = LH(41290),
      kH = LH(41297),
      mH = LH(39595),
      oH = LH(41398),
      IH = LH(41777),
      fH = LH(45276);
    let lH = 0;
    const KH = (HH, BH, LH, AH) => {
        if (!HH[LH]) {
          const rH = HH.useDelayedTextureLoading;
          HH.useDelayedTextureLoading = !1;
          const SH = HH._blockEntityCollection;
          HH._blockEntityCollection = !1;
          const hH = IH.g.CreateFromBase64String(BH, AH + lH++, HH, !0, !1, IH.g.BILINEAR_SAMPLINGMODE);
          HH._blockEntityCollection = SH;
          const tH = HH.Iu().getLoadedTexturesCache(),
            zH = tH.indexOf(hH.getInternalTexture()); - 1 !== zH && tH.splice(zH, 1), hH.isRGBD = !0, hH.wrapU = IH.g.CLAMP_ADDRESSMODE, hH.wrapV = IH.g.CLAMP_ADDRESSMODE, HH[LH] = hH, HH.useDelayedTextureLoading = rH, fH.c.ExpandRGBDTexture(hH);
          const CH = HH.Iu().ou.add((() => {
            hH.isRGBD = !0;
            const BH = HH.onBeforeRenderObservable.add((() => {
              hH.isReady() && (HH.onBeforeRenderObservable.remove(BH), fH.c.ExpandRGBDTexture(hH))
            }))
          }));
          HH.uR.add((() => {
            HH.Iu().ou.remove(CH)
          }))
        }
        return HH[LH]
      },
      cH = HH => KH(HH, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      eH = HH => KH(HH, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      qH = HH => KH(HH, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var gH = LH(41383),
      NH = LH(37963),
      RH = LH(41427),
      jH = LH(41564),
      nH = LH(41648);
    class FH extends jH.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let DH = (() => {
      var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH;
      let EH, XH, GH, YH, uH, QH, WH, MH, xH, vH = nH.b,
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [];
      return HH = class extends vH {
        get useEnergyConservation() {
          return (0, bH.e)(this, BH, "f")
        }
        set useEnergyConservation(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, bH.e)(this, LH, "f")
        }
        set useSmithVisibilityHeightCorrelated(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get useSphericalHarmonics() {
          return (0, bH.e)(this, AH, "f")
        }
        set useSphericalHarmonics(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, bH.e)(this, rH, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(HH) {
          (0, bH.f)(this, rH, HH, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, bH.e)(this, SH, "f")
        }
        set mixIblRadianceWithIrradiance(HH) {
          (0, bH.f)(this, SH, HH, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, bH.e)(this, hH, "f")
        }
        set useLegacySpecularEnergyConservation(HH) {
          (0, bH.f)(this, hH, HH, "f")
        }
        get baseDiffuseModel() {
          return (0, bH.e)(this, tH, "f")
        }
        set baseDiffuseModel(HH) {
          (0, bH.f)(this, tH, HH, "f")
        }
        get dielectricSpecularModel() {
          return (0, bH.e)(this, zH, "f")
        }
        set dielectricSpecularModel(HH) {
          (0, bH.f)(this, zH, HH, "f")
        }
        get conductorSpecularModel() {
          return (0, bH.e)(this, CH, "f")
        }
        set conductorSpecularModel(HH) {
          (0, bH.f)(this, CH, HH, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(EH) {
          let XH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EH, "PBRBRDF", 90, new FH, XH), this._useEnergyConservation = HH.DEFAULT_USE_ENERGY_CONSERVATION, BH.set(this, (0, bH.k)(this, PH, HH.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, bH.k)(this, TH), HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), LH.set(this, (0, bH.k)(this, UH, HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, bH.k)(this, VH), HH.DEFAULT_USE_SPHERICAL_HARMONICS), AH.set(this, (0, bH.k)(this, OH, HH.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, bH.k)(this, mH), HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), rH.set(this, (0, bH.k)(this, oH, HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, bH.k)(this, IH), HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), SH.set(this, (0, bH.k)(this, fH, HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, bH.k)(this, lH), HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), hH.set(this, (0, bH.k)(this, KH, HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, bH.k)(this, cH), HH.DEFAULT_DIFFUSE_MODEL), tH.set(this, (0, bH.k)(this, eH, HH.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, bH.k)(this, qH), HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL), zH.set(this, (0, bH.k)(this, gH, HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, bH.k)(this, NH), HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL), CH.set(this, (0, bH.k)(this, RH, HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, bH.k)(this, jH), this._internalMarkAllSubMeshesAsMiscDirty = EH._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(HH) {
          HH.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, HH.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, HH.SPHERICAL_HARMONICS = this._useSphericalHarmonics, HH.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, HH.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, HH.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, HH.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, HH.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, HH.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, rH = new WeakMap, SH = new WeakMap, hH = new WeakMap, tH = new WeakMap, zH = new WeakMap, CH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(vH[Symbol.metadata] ?? null) : void 0;
        EH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], XH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], GH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], YH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], uH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], QH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], WH = [(0, kH.H)("baseDiffuseModel"), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], MH = [(0, kH.H)("dielectricSpecularModel"), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], xH = [(0, kH.H)("conductorSpecularModel"), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], (0, bH.g)(HH, null, EH, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useEnergyConservation" in HH,
            get: HH => HH.useEnergyConservation,
            set: (HH, BH) => {
              HH.useEnergyConservation = BH
            }
          },
          metadata: BH
        }, PH, TH), (0, bH.g)(HH, null, XH, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSmithVisibilityHeightCorrelated" in HH,
            get: HH => HH.useSmithVisibilityHeightCorrelated,
            set: (HH, BH) => {
              HH.useSmithVisibilityHeightCorrelated = BH
            }
          },
          metadata: BH
        }, UH, VH), (0, bH.g)(HH, null, GH, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSphericalHarmonics" in HH,
            get: HH => HH.useSphericalHarmonics,
            set: (HH, BH) => {
              HH.useSphericalHarmonics = BH
            }
          },
          metadata: BH
        }, OH, mH), (0, bH.g)(HH, null, YH, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSpecularGlossinessInputEnergyConservation" in HH,
            get: HH => HH.useSpecularGlossinessInputEnergyConservation,
            set: (HH, BH) => {
              HH.useSpecularGlossinessInputEnergyConservation = BH
            }
          },
          metadata: BH
        }, oH, IH), (0, bH.g)(HH, null, uH, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: HH => "mixIblRadianceWithIrradiance" in HH,
            get: HH => HH.mixIblRadianceWithIrradiance,
            set: (HH, BH) => {
              HH.mixIblRadianceWithIrradiance = BH
            }
          },
          metadata: BH
        }, fH, lH), (0, bH.g)(HH, null, QH, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLegacySpecularEnergyConservation" in HH,
            get: HH => HH.useLegacySpecularEnergyConservation,
            set: (HH, BH) => {
              HH.useLegacySpecularEnergyConservation = BH
            }
          },
          metadata: BH
        }, KH, cH), (0, bH.g)(HH, null, WH, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseDiffuseModel" in HH,
            get: HH => HH.baseDiffuseModel,
            set: (HH, BH) => {
              HH.baseDiffuseModel = BH
            }
          },
          metadata: BH
        }, eH, qH), (0, bH.g)(HH, null, MH, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "dielectricSpecularModel" in HH,
            get: HH => HH.dielectricSpecularModel,
            set: (HH, BH) => {
              HH.dielectricSpecularModel = BH
            }
          },
          metadata: BH
        }, gH, NH), (0, bH.g)(HH, null, xH, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "conductorSpecularModel" in HH,
            get: HH => HH.conductorSpecularModel,
            set: (HH, BH) => {
              HH.conductorSpecularModel = BH
            }
          },
          metadata: BH
        }, RH, jH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH.DEFAULT_USE_ENERGY_CONSERVATION = !0, HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, HH.DEFAULT_USE_SPHERICAL_HARMONICS = !0, HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, HH.DEFAULT_DIFFUSE_MODEL = 0, HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, HH
    })();
    var wH = LH(41554),
      ZH = LH(38074),
      dH = LH(41561),
      aH = LH(41402),
      sH = LH(41634),
      JH = LH(41632),
      iH = LH(41636),
      pH = LH(41618);
    class yH extends jH.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let HB = (() => {
      var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH;
      let EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH = nH.b,
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        FH = [],
        DH = [],
        wH = [],
        dH = [],
        aH = [],
        sH = [],
        iH = [],
        HB = [],
        BB = [],
        LB = [],
        AB = [],
        rB = [],
        SB = [],
        hB = [],
        tB = [];
      return HH = class extends OH {
        get isEnabled() {
          return (0, bH.e)(this, BH, "f")
        }
        set isEnabled(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get indexOfRefraction() {
          return (0, bH.e)(this, LH, "f")
        }
        set indexOfRefraction(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get texture() {
          return (0, bH.e)(this, AH, "f")
        }
        set texture(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, bH.e)(this, rH, "f")
        }
        set useRoughnessFromMainTexture(HH) {
          (0, bH.f)(this, rH, HH, "f")
        }
        get textureRoughness() {
          return (0, bH.e)(this, SH, "f")
        }
        set textureRoughness(HH) {
          (0, bH.f)(this, SH, HH, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, bH.e)(this, hH, "f")
        }
        set remapF0OnInterfaceChange(HH) {
          (0, bH.f)(this, hH, HH, "f")
        }
        get bumpTexture() {
          return (0, bH.e)(this, tH, "f")
        }
        set bumpTexture(HH) {
          (0, bH.f)(this, tH, HH, "f")
        }
        get isTintEnabled() {
          return (0, bH.e)(this, zH, "f")
        }
        set isTintEnabled(HH) {
          (0, bH.f)(this, zH, HH, "f")
        }
        get tintTexture() {
          return (0, bH.e)(this, CH, "f")
        }
        set tintTexture(HH) {
          (0, bH.f)(this, CH, HH, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(EH) {
          let XH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EH, "PBRClearCoat", 100, new yH, XH), this._isEnabled = !1, BH.set(this, (0, bH.k)(this, mH, !1)), this.intensity = ((0, bH.k)(this, oH), (0, bH.k)(this, IH, 1)), this.roughness = ((0, bH.k)(this, fH), (0, bH.k)(this, lH, 0)), this._indexOfRefraction = ((0, bH.k)(this, KH), HH._DefaultIndexOfRefraction), LH.set(this, (0, bH.k)(this, cH, HH._DefaultIndexOfRefraction)), this._texture = ((0, bH.k)(this, eH), null), AH.set(this, (0, bH.k)(this, qH, null)), this._useRoughnessFromMainTexture = ((0, bH.k)(this, gH), !0), rH.set(this, (0, bH.k)(this, NH, !0)), this._textureRoughness = ((0, bH.k)(this, RH), null), SH.set(this, (0, bH.k)(this, jH, null)), this._remapF0OnInterfaceChange = ((0, bH.k)(this, FH), !0), hH.set(this, (0, bH.k)(this, DH, !0)), this._bumpTexture = ((0, bH.k)(this, wH), null), tH.set(this, (0, bH.k)(this, dH, null)), this._isTintEnabled = ((0, bH.k)(this, aH), !1), zH.set(this, (0, bH.k)(this, sH, !1)), this.tintColor = ((0, bH.k)(this, iH), (0, bH.k)(this, HB, ZH.c.White())), this.tintColorAtDistance = ((0, bH.k)(this, BB), (0, bH.k)(this, LB, 1)), this.tintThickness = ((0, bH.k)(this, AB), (0, bH.k)(this, rB, 1)), this._tintTexture = ((0, bH.k)(this, SB), null), CH.set(this, (0, bH.k)(this, hB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, bH.k)(this, tB), this._internalMarkAllSubMeshesAsTexturesDirty = EH._dirtyCallbacks[1]
        }
        isReadyForSubMesh(HH, BH, LH) {
          if (!this._isEnabled) return !0;
          const AH = this._material._disableBumpMap;
          if (HH._areTexturesDirty && BH.texturesEnabled) {
            if (this._texture && JH.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && JH.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (LH.getCaps().standardDerivatives && this._bumpTexture && JH.e.ClearCoatBumpTextureEnabled && !AH && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && JH.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BH, LH) {
          this._isEnabled ? (BH.CLEARCOAT = !0, BH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, BH.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, BH._areTexturesDirty && LH.texturesEnabled && (this._texture && JH.e.ClearCoatTextureEnabled ? (0, pH.X)(this._texture, BH, "CLEARCOAT_TEXTURE") : BH.CLEARCOAT_TEXTURE = !1, this._textureRoughness && JH.e.ClearCoatTextureEnabled ? (0, pH.X)(this._textureRoughness, BH, "CLEARCOAT_TEXTURE_ROUGHNESS") : BH.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && JH.e.ClearCoatBumpTextureEnabled ? (0, pH.X)(this._bumpTexture, BH, "CLEARCOAT_BUMP") : BH.CLEARCOAT_BUMP = !1, BH.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === HH._DefaultIndexOfRefraction, this._isTintEnabled ? (BH.CLEARCOAT_TINT = !0, this._tintTexture && JH.e.ClearCoatTintTextureEnabled ? ((0, pH.X)(this._tintTexture, BH, "CLEARCOAT_TINT_TEXTURE"), BH.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : BH.CLEARCOAT_TINT_TEXTURE = !1) : (BH.CLEARCOAT_TINT = !1, BH.CLEARCOAT_TINT_TEXTURE = !1))) : (BH.CLEARCOAT = !1, BH.CLEARCOAT_TEXTURE = !1, BH.CLEARCOAT_TEXTURE_ROUGHNESS = !1, BH.CLEARCOAT_BUMP = !1, BH.CLEARCOAT_TINT = !1, BH.CLEARCOAT_TINT_TEXTURE = !1, BH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, BH.CLEARCOAT_DEFAULTIOR = !1, BH.CLEARCOAT_TEXTUREDIRECTUV = 0, BH.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, BH.CLEARCOAT_BUMPDIRECTUV = 0, BH.CLEARCOAT_REMAP_F0 = !1, BH.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, BH.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(HH, BH, LH, AH) {
          if (!this._isEnabled) return;
          const rH = AH.materialDefines,
            SH = this._material.isFrozen,
            hH = this._material._disableBumpMap,
            tH = this._material._invertNormalMapX,
            zH = this._material._invertNormalMapY;
          if (!HH.useUbo || !SH || !HH.isSync) {
            (this._texture || this._textureRoughness) && JH.e.ClearCoatTextureEnabled && (HH.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, pH.u)(this._texture, HH, "clearCoat"), this._textureRoughness && !rH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, pH.u)(this._textureRoughness, HH, "clearCoatRoughness")), this._bumpTexture && LH.getCaps().standardDerivatives && JH.e.ClearCoatTextureEnabled && !hH && (HH.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, pH.u)(this._bumpTexture, HH, "clearCoatBump"), BH._mirroredCameraPosition ? HH.updateFloat2("vClearCoatTangentSpaceParams", tH ? 1 : -1, zH ? 1 : -1) : HH.updateFloat2("vClearCoatTangentSpaceParams", tH ? -1 : 1, zH ? -1 : 1)), this._tintTexture && JH.e.ClearCoatTintTextureEnabled && (HH.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, pH.u)(this._tintTexture, HH, "clearCoatTint")), HH.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const AH = 1 - this._indexOfRefraction,
              SH = 1 + this._indexOfRefraction,
              CH = Math.pow(-AH / SH, 2),
              EH = 1 / this._indexOfRefraction;
            HH.updateFloat4("vClearCoatRefractionParams", CH, EH, AH, SH), this._isTintEnabled && (HH.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), HH.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          BH.texturesEnabled && (this._texture && JH.e.ClearCoatTextureEnabled && HH.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !rH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && JH.e.ClearCoatTextureEnabled && HH.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && LH.getCaps().standardDerivatives && JH.e.ClearCoatBumpTextureEnabled && !hH && HH.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && JH.e.ClearCoatTintTextureEnabled && HH.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(HH) {
          return this._texture === HH || (this._textureRoughness === HH || (this._bumpTexture === HH || this._tintTexture === HH))
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._textureRoughness && HH.push(this._textureRoughness), this._bumpTexture && HH.push(this._bumpTexture), this._tintTexture && HH.push(this._tintTexture)
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && HH.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && HH.push(this._tintTexture)
        }
        dispose(HH) {
          HH && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(HH, BH, LH) {
          return HH.CLEARCOAT_BUMP && BH.addFallback(LH++, "CLEARCOAT_BUMP"), HH.CLEARCOAT_TINT && BH.addFallback(LH++, "CLEARCOAT_TINT"), HH.CLEARCOAT && BH.addFallback(LH++, "CLEARCOAT"), LH
        }
        getSamplers(HH) {
          HH.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, rH = new WeakMap, SH = new WeakMap, hH = new WeakMap, tH = new WeakMap, zH = new WeakMap, CH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(OH[Symbol.metadata] ?? null) : void 0;
        EH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], XH = [(0, kH.H)()], GH = [(0, kH.H)()], YH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], uH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], MH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], xH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], PH = [(0, kH.l)()], TH = [(0, kH.H)()], UH = [(0, kH.H)()], VH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], (0, bH.g)(HH, null, EH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: BH
        }, mH, oH), (0, bH.g)(HH, null, YH, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "indexOfRefraction" in HH,
            get: HH => HH.indexOfRefraction,
            set: (HH, BH) => {
              HH.indexOfRefraction = BH
            }
          },
          metadata: BH
        }, cH, eH), (0, bH.g)(HH, null, uH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, BH) => {
              HH.texture = BH
            }
          },
          metadata: BH
        }, qH, gH), (0, bH.g)(HH, null, QH, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMainTexture" in HH,
            get: HH => HH.useRoughnessFromMainTexture,
            set: (HH, BH) => {
              HH.useRoughnessFromMainTexture = BH
            }
          },
          metadata: BH
        }, NH, RH), (0, bH.g)(HH, null, WH, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRoughness" in HH,
            get: HH => HH.textureRoughness,
            set: (HH, BH) => {
              HH.textureRoughness = BH
            }
          },
          metadata: BH
        }, jH, FH), (0, bH.g)(HH, null, MH, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: HH => "remapF0OnInterfaceChange" in HH,
            get: HH => HH.remapF0OnInterfaceChange,
            set: (HH, BH) => {
              HH.remapF0OnInterfaceChange = BH
            }
          },
          metadata: BH
        }, DH, wH), (0, bH.g)(HH, null, xH, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "bumpTexture" in HH,
            get: HH => HH.bumpTexture,
            set: (HH, BH) => {
              HH.bumpTexture = BH
            }
          },
          metadata: BH
        }, dH, aH), (0, bH.g)(HH, null, vH, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isTintEnabled" in HH,
            get: HH => HH.isTintEnabled,
            set: (HH, BH) => {
              HH.isTintEnabled = BH
            }
          },
          metadata: BH
        }, sH, iH), (0, bH.g)(HH, null, VH, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintTexture" in HH,
            get: HH => HH.tintTexture,
            set: (HH, BH) => {
              HH.tintTexture = BH
            }
          },
          metadata: BH
        }, hB, tB), (0, bH.g)(null, null, XH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensity" in HH,
            get: HH => HH.intensity,
            set: (HH, BH) => {
              HH.intensity = BH
            }
          },
          metadata: BH
        }, IH, fH), (0, bH.g)(null, null, GH, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "roughness" in HH,
            get: HH => HH.roughness,
            set: (HH, BH) => {
              HH.roughness = BH
            }
          },
          metadata: BH
        }, lH, KH), (0, bH.g)(null, null, PH, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColor" in HH,
            get: HH => HH.tintColor,
            set: (HH, BH) => {
              HH.tintColor = BH
            }
          },
          metadata: BH
        }, HB, BB), (0, bH.g)(null, null, TH, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColorAtDistance" in HH,
            get: HH => HH.tintColorAtDistance,
            set: (HH, BH) => {
              HH.tintColorAtDistance = BH
            }
          },
          metadata: BH
        }, LB, AB), (0, bH.g)(null, null, UH, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintThickness" in HH,
            get: HH => HH.tintThickness,
            set: (HH, BH) => {
              HH.tintThickness = BH
            }
          },
          metadata: BH
        }, rB, SB), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH._DefaultIndexOfRefraction = 1.5, HH
    })();
    class BB extends jH.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let LB = (() => {
      var HH, BH, LH, AH;
      let rH, SH, hH, tH, zH, CH, EH, XH = nH.b,
        GH = [],
        YH = [],
        uH = [],
        QH = [],
        WH = [],
        MH = [],
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        mH = [];
      return HH = class extends XH {
        get isEnabled() {
          return (0, bH.e)(this, BH, "f")
        }
        set isEnabled(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get texture() {
          return (0, bH.e)(this, LH, "f")
        }
        set texture(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get thicknessTexture() {
          return (0, bH.e)(this, AH, "f")
        }
        set thicknessTexture(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(rH) {
          let SH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(rH, "PBRIridescence", 110, new BB, SH), this._isEnabled = !1, BH.set(this, (0, bH.k)(this, GH, !1)), this.intensity = ((0, bH.k)(this, YH), (0, bH.k)(this, uH, 1)), this.minimumThickness = ((0, bH.k)(this, QH), (0, bH.k)(this, WH, HH._DefaultMinimumThickness)), this.maximumThickness = ((0, bH.k)(this, MH), (0, bH.k)(this, xH, HH._DefaultMaximumThickness)), this.indexOfRefraction = ((0, bH.k)(this, vH), (0, bH.k)(this, PH, HH._DefaultIndexOfRefraction)), this._texture = ((0, bH.k)(this, TH), null), LH.set(this, (0, bH.k)(this, UH, null)), this._thicknessTexture = ((0, bH.k)(this, VH), null), AH.set(this, (0, bH.k)(this, OH, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, bH.k)(this, mH), this._internalMarkAllSubMeshesAsTexturesDirty = rH._dirtyCallbacks[1]
        }
        isReadyForSubMesh(HH, BH) {
          if (!this._isEnabled) return !0;
          if (HH._areTexturesDirty && BH.texturesEnabled) {
            if (this._texture && JH.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && JH.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(HH, BH) {
          this._isEnabled ? (HH.IRIDESCENCE = !0, HH._areTexturesDirty && BH.texturesEnabled && (this._texture && JH.e.IridescenceTextureEnabled ? (0, pH.X)(this._texture, HH, "IRIDESCENCE_TEXTURE") : HH.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && JH.e.IridescenceTextureEnabled ? (0, pH.X)(this._thicknessTexture, HH, "IRIDESCENCE_THICKNESS_TEXTURE") : HH.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (HH.IRIDESCENCE = !1, HH.IRIDESCENCE_TEXTURE = !1, HH.IRIDESCENCE_THICKNESS_TEXTURE = !1, HH.IRIDESCENCE_TEXTUREDIRECTUV = 0, HH.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(HH, BH) {
          if (!this._isEnabled) return;
          const LH = this._material.isFrozen;
          HH.useUbo && LH && HH.isSync || ((this._texture || this._thicknessTexture) && JH.e.IridescenceTextureEnabled && (HH.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, pH.u)(this._texture, HH, "iridescence"), this._thicknessTexture && (0, pH.u)(this._thicknessTexture, HH, "iridescenceThickness")), HH.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), BH.texturesEnabled && (this._texture && JH.e.IridescenceTextureEnabled && HH.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && JH.e.IridescenceTextureEnabled && HH.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(HH) {
          return this._texture === HH || this._thicknessTexture === HH
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._thicknessTexture && HH.push(this._thicknessTexture)
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && HH.push(this._thicknessTexture)
        }
        dispose(HH) {
          HH && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(HH, BH, LH) {
          return HH.IRIDESCENCE && BH.addFallback(LH++, "IRIDESCENCE"), LH
        }
        getSamplers(HH) {
          HH.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(XH[Symbol.metadata] ?? null) : void 0;
        rH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], SH = [(0, kH.H)()], hH = [(0, kH.H)()], tH = [(0, kH.H)()], zH = [(0, kH.H)()], CH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], EH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], (0, bH.g)(HH, null, rH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: BH
        }, GH, YH), (0, bH.g)(HH, null, CH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, BH) => {
              HH.texture = BH
            }
          },
          metadata: BH
        }, UH, VH), (0, bH.g)(HH, null, EH, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "thicknessTexture" in HH,
            get: HH => HH.thicknessTexture,
            set: (HH, BH) => {
              HH.thicknessTexture = BH
            }
          },
          metadata: BH
        }, OH, mH), (0, bH.g)(null, null, SH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensity" in HH,
            get: HH => HH.intensity,
            set: (HH, BH) => {
              HH.intensity = BH
            }
          },
          metadata: BH
        }, uH, QH), (0, bH.g)(null, null, hH, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "minimumThickness" in HH,
            get: HH => HH.minimumThickness,
            set: (HH, BH) => {
              HH.minimumThickness = BH
            }
          },
          metadata: BH
        }, WH, MH), (0, bH.g)(null, null, tH, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "maximumThickness" in HH,
            get: HH => HH.maximumThickness,
            set: (HH, BH) => {
              HH.maximumThickness = BH
            }
          },
          metadata: BH
        }, xH, vH), (0, bH.g)(null, null, zH, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "indexOfRefraction" in HH,
            get: HH => HH.indexOfRefraction,
            set: (HH, BH) => {
              HH.indexOfRefraction = BH
            }
          },
          metadata: BH
        }, PH, TH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH._DefaultMinimumThickness = 100, HH._DefaultMaximumThickness = 400, HH._DefaultIndexOfRefraction = 1.3, HH
    })();
    class AB extends jH.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let rB = (() => {
      var HH, BH, LH, AH;
      let rH, SH, hH, tH, zH, CH = nH.b,
        EH = [],
        XH = [],
        GH = [],
        YH = [],
        uH = [],
        QH = [],
        WH = [],
        MH = [],
        xH = [],
        vH = [];
      return HH = class extends CH {
        get isEnabled() {
          return (0, bH.e)(this, BH, "f")
        }
        set isEnabled(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        set angle(HH) {
          this.direction.x = Math.cos(HH), this.direction.y = Math.sin(HH)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, bH.e)(this, LH, "f")
        }
        set texture(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get legacy() {
          return (0, bH.e)(this, AH, "f")
        }
        set legacy(HH) {
          (0, bH.f)(this, AH, HH, "f")
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
        constructor(HH) {
          let rH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "PBRAnisotropic", 110, new AB, rH), this._isEnabled = !1, BH.set(this, (0, bH.k)(this, EH, !1)), this.intensity = ((0, bH.k)(this, XH), (0, bH.k)(this, GH, 1)), this.direction = ((0, bH.k)(this, YH), (0, bH.k)(this, uH, new NH.n(1, 0))), this._texture = ((0, bH.k)(this, QH), null), LH.set(this, (0, bH.k)(this, WH, null)), this._legacy = ((0, bH.k)(this, MH), !1), AH.set(this, (0, bH.k)(this, xH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, bH.k)(this, vH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = HH._dirtyCallbacks[16]
        }
        isReadyForSubMesh(HH, BH) {
          return !this._isEnabled || !(HH._areTexturesDirty && BH.texturesEnabled && this._texture && JH.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(HH, BH, LH) {
          this._isEnabled ? (HH.ANISOTROPIC = this._isEnabled, this._isEnabled && !LH.isVerticesDataPresent(RH.i.TangentKind) && (HH._needUVs = !0, HH.MAINUV1 = !0), HH._areTexturesDirty && BH.texturesEnabled && (this._texture && JH.e.AnisotropicTextureEnabled ? (0, pH.X)(this._texture, HH, "ANISOTROPIC_TEXTURE") : HH.ANISOTROPIC_TEXTURE = !1), HH._areMiscDirty && (HH.ANISOTROPIC_LEGACY = this._legacy)) : (HH.ANISOTROPIC = !1, HH.ANISOTROPIC_TEXTURE = !1, HH.ANISOTROPIC_TEXTUREDIRECTUV = 0, HH.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(HH, BH) {
          if (!this._isEnabled) return;
          const LH = this._material.isFrozen;
          HH.useUbo && LH && HH.isSync || (this._texture && JH.e.AnisotropicTextureEnabled && (HH.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, pH.u)(this._texture, HH, "anisotropy")), HH.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), BH.texturesEnabled && this._texture && JH.e.AnisotropicTextureEnabled && HH.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(HH) {
          return this._texture === HH
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture)
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture)
        }
        dispose(HH) {
          HH && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(HH, BH, LH) {
          return HH.ANISOTROPIC && BH.addFallback(LH++, "ANISOTROPIC"), LH
        }
        getSamplers(HH) {
          HH.push("anisotropySampler")
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
        parse(HH, BH, LH) {
          super.parse(HH, BH, LH), void 0 === HH.legacy && (this.legacy = !0)
        }
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(CH[Symbol.metadata] ?? null) : void 0;
        rH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], SH = [(0, kH.H)()], hH = [(0, kH.C)()], tH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], zH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], (0, bH.g)(HH, null, rH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: BH
        }, EH, XH), (0, bH.g)(HH, null, tH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, BH) => {
              HH.texture = BH
            }
          },
          metadata: BH
        }, WH, MH), (0, bH.g)(HH, null, zH, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: HH => "legacy" in HH,
            get: HH => HH.legacy,
            set: (HH, BH) => {
              HH.legacy = BH
            }
          },
          metadata: BH
        }, xH, vH), (0, bH.g)(null, null, SH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensity" in HH,
            get: HH => HH.intensity,
            set: (HH, BH) => {
              HH.intensity = BH
            }
          },
          metadata: BH
        }, GH, YH), (0, bH.g)(null, null, hH, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: HH => "direction" in HH,
            get: HH => HH.direction,
            set: (HH, BH) => {
              HH.direction = BH
            }
          },
          metadata: BH
        }, uH, QH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH
    })();
    class SB extends jH.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let hB = (() => {
      var HH, BH, LH, AH, rH, SH, hH, tH;
      let zH, CH, EH, XH, GH, YH, uH, QH, WH, MH = nH.b,
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [];
      return HH = class extends MH {
        get isEnabled() {
          return (0, bH.e)(this, BH, "f")
        }
        set isEnabled(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, bH.e)(this, LH, "f")
        }
        set linkSheenWithAlbedo(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get texture() {
          return (0, bH.e)(this, AH, "f")
        }
        set texture(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, bH.e)(this, rH, "f")
        }
        set useRoughnessFromMainTexture(HH) {
          (0, bH.f)(this, rH, HH, "f")
        }
        get roughness() {
          return (0, bH.e)(this, SH, "f")
        }
        set roughness(HH) {
          (0, bH.f)(this, SH, HH, "f")
        }
        get textureRoughness() {
          return (0, bH.e)(this, hH, "f")
        }
        set textureRoughness(HH) {
          (0, bH.f)(this, hH, HH, "f")
        }
        get albedoScaling() {
          return (0, bH.e)(this, tH, "f")
        }
        set albedoScaling(HH) {
          (0, bH.f)(this, tH, HH, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(HH) {
          let zH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "Sheen", 120, new SB, zH), this._isEnabled = !1, BH.set(this, (0, bH.k)(this, xH, !1)), this._linkSheenWithAlbedo = ((0, bH.k)(this, vH), !1), LH.set(this, (0, bH.k)(this, PH, !1)), this.intensity = ((0, bH.k)(this, TH), (0, bH.k)(this, UH, 1)), this.color = ((0, bH.k)(this, VH), (0, bH.k)(this, OH, ZH.c.White())), this._texture = ((0, bH.k)(this, mH), null), AH.set(this, (0, bH.k)(this, oH, null)), this._useRoughnessFromMainTexture = ((0, bH.k)(this, IH), !0), rH.set(this, (0, bH.k)(this, fH, !0)), this._roughness = ((0, bH.k)(this, lH), null), SH.set(this, (0, bH.k)(this, KH, null)), this._textureRoughness = ((0, bH.k)(this, cH), null), hH.set(this, (0, bH.k)(this, eH, null)), this._albedoScaling = ((0, bH.k)(this, qH), !1), tH.set(this, (0, bH.k)(this, gH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, bH.k)(this, NH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1]
        }
        isReadyForSubMesh(HH, BH) {
          if (!this._isEnabled) return !0;
          if (HH._areTexturesDirty && BH.texturesEnabled) {
            if (this._texture && JH.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && JH.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(HH, BH) {
          this._isEnabled ? (HH.SHEEN = !0, HH.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, HH.SHEEN_ROUGHNESS = null !== this._roughness, HH.SHEEN_ALBEDOSCALING = this._albedoScaling, HH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, HH._areTexturesDirty && BH.texturesEnabled && (this._texture && JH.e.SheenTextureEnabled ? ((0, pH.X)(this._texture, HH, "SHEEN_TEXTURE"), HH.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : HH.SHEEN_TEXTURE = !1, this._textureRoughness && JH.e.SheenTextureEnabled ? (0, pH.X)(this._textureRoughness, HH, "SHEEN_TEXTURE_ROUGHNESS") : HH.SHEEN_TEXTURE_ROUGHNESS = !1)) : (HH.SHEEN = !1, HH.SHEEN_TEXTURE = !1, HH.SHEEN_TEXTURE_ROUGHNESS = !1, HH.SHEEN_LINKWITHALBEDO = !1, HH.SHEEN_ROUGHNESS = !1, HH.SHEEN_ALBEDOSCALING = !1, HH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, HH.SHEEN_GAMMATEXTURE = !1, HH.SHEEN_TEXTUREDIRECTUV = 0, HH.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(HH, BH, LH, AH) {
          if (!this._isEnabled) return;
          const rH = AH.materialDefines,
            SH = this._material.isFrozen;
          HH.useUbo && SH && HH.isSync || ((this._texture || this._textureRoughness) && JH.e.SheenTextureEnabled && (HH.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, pH.u)(this._texture, HH, "sheen"), this._textureRoughness && !rH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, pH.u)(this._textureRoughness, HH, "sheenRoughness")), HH.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && HH.updateFloat("vSheenRoughness", this._roughness)), BH.texturesEnabled && (this._texture && JH.e.SheenTextureEnabled && HH.setTexture("sheenSampler", this._texture), this._textureRoughness && !rH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && JH.e.SheenTextureEnabled && HH.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(HH) {
          return this._texture === HH || this._textureRoughness === HH
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._textureRoughness && HH.push(this._textureRoughness)
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && HH.push(this._textureRoughness)
        }
        dispose(HH) {
          HH && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(HH, BH, LH) {
          return HH.SHEEN && BH.addFallback(LH++, "SHEEN"), LH
        }
        getSamplers(HH) {
          HH.push("sheenSampler", "sheenRoughnessSampler")
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
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, rH = new WeakMap, SH = new WeakMap, hH = new WeakMap, tH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(MH[Symbol.metadata] ?? null) : void 0;
        zH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], CH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], EH = [(0, kH.H)()], XH = [(0, kH.l)()], GH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], YH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], uH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], (0, bH.g)(HH, null, zH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: BH
        }, xH, vH), (0, bH.g)(HH, null, CH, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: HH => "linkSheenWithAlbedo" in HH,
            get: HH => HH.linkSheenWithAlbedo,
            set: (HH, BH) => {
              HH.linkSheenWithAlbedo = BH
            }
          },
          metadata: BH
        }, PH, TH), (0, bH.g)(HH, null, GH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, BH) => {
              HH.texture = BH
            }
          },
          metadata: BH
        }, oH, IH), (0, bH.g)(HH, null, YH, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMainTexture" in HH,
            get: HH => HH.useRoughnessFromMainTexture,
            set: (HH, BH) => {
              HH.useRoughnessFromMainTexture = BH
            }
          },
          metadata: BH
        }, fH, lH), (0, bH.g)(HH, null, uH, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "roughness" in HH,
            get: HH => HH.roughness,
            set: (HH, BH) => {
              HH.roughness = BH
            }
          },
          metadata: BH
        }, KH, cH), (0, bH.g)(HH, null, QH, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRoughness" in HH,
            get: HH => HH.textureRoughness,
            set: (HH, BH) => {
              HH.textureRoughness = BH
            }
          },
          metadata: BH
        }, eH, qH), (0, bH.g)(HH, null, WH, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "albedoScaling" in HH,
            get: HH => HH.albedoScaling,
            set: (HH, BH) => {
              HH.albedoScaling = BH
            }
          },
          metadata: BH
        }, gH, NH), (0, bH.g)(null, null, EH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensity" in HH,
            get: HH => HH.intensity,
            set: (HH, BH) => {
              HH.intensity = BH
            }
          },
          metadata: BH
        }, UH, VH), (0, bH.g)(null, null, XH, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: HH => "color" in HH,
            get: HH => HH.color,
            set: (HH, BH) => {
              HH.color = BH
            }
          },
          metadata: BH
        }, OH, mH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH
    })();
    class tB extends jH.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let zB = (() => {
      var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
      let MH, xH, vH, PH, TH, UH, VH, OH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, RH, jH, FH, DH, wH, dH, aH, sH, iH, yH, HB, BB, LB = nH.b,
        AB = [],
        rB = [],
        SB = [],
        hB = [],
        zB = [],
        CB = [],
        EB = [],
        XB = [],
        GB = [],
        YB = [],
        uB = [],
        QB = [],
        WB = [],
        MB = [],
        xB = [],
        vB = [],
        PB = [],
        TB = [],
        UB = [],
        VB = [],
        OB = [],
        bB = [],
        kB = [],
        mB = [],
        oB = [],
        IB = [],
        fB = [],
        lB = [],
        KB = [],
        cB = [],
        eB = [],
        qB = [],
        gB = [],
        NB = [],
        RB = [],
        jB = [],
        nB = [],
        FB = [],
        DB = [],
        wB = [],
        ZB = [],
        dB = [],
        aB = [],
        sB = [],
        JB = [],
        iB = [],
        pB = [],
        yB = [],
        HL = [],
        BL = [],
        LL = [],
        AL = [],
        rL = [],
        SL = [],
        hL = [],
        tL = [],
        zL = [],
        CL = [],
        EL = [],
        XL = [];
      return HH = class extends LB {
        get isRefractionEnabled() {
          return (0, bH.e)(this, BH, "f")
        }
        set isRefractionEnabled(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get isTranslucencyEnabled() {
          return (0, bH.e)(this, LH, "f")
        }
        set isTranslucencyEnabled(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get isDispersionEnabled() {
          return (0, bH.e)(this, AH, "f")
        }
        set isDispersionEnabled(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        get isScatteringEnabled() {
          return (0, bH.e)(this, rH, "f")
        }
        set isScatteringEnabled(HH) {
          (0, bH.f)(this, rH, HH, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(HH) {
          this._scene.enableSubSurfaceForPrePass() && HH && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(HH))
        }
        get useAlbedoToTintRefraction() {
          return (0, bH.e)(this, SH, "f")
        }
        set useAlbedoToTintRefraction(HH) {
          (0, bH.f)(this, SH, HH, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, bH.e)(this, hH, "f")
        }
        set useAlbedoToTintTranslucency(HH) {
          (0, bH.f)(this, hH, HH, "f")
        }
        get thicknessTexture() {
          return (0, bH.e)(this, tH, "f")
        }
        set thicknessTexture(HH) {
          (0, bH.f)(this, tH, HH, "f")
        }
        get refractionTexture() {
          return (0, bH.e)(this, zH, "f")
        }
        set refractionTexture(HH) {
          (0, bH.f)(this, zH, HH, "f")
        }
        get indexOfRefraction() {
          return (0, bH.e)(this, CH, "f")
        }
        set indexOfRefraction(HH) {
          (0, bH.f)(this, CH, HH, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(HH) {
          const BH = HH >= 1 ? HH : -1;
          this._volumeIndexOfRefraction !== BH && (this._volumeIndexOfRefraction = BH, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, bH.e)(this, EH, "f")
        }
        set invertRefractionY(HH) {
          (0, bH.f)(this, EH, HH, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, bH.e)(this, XH, "f")
        }
        set linkRefractionWithTransparency(HH) {
          (0, bH.f)(this, XH, HH, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, bH.e)(this, GH, "f")
        }
        set useMaskFromThicknessTexture(HH) {
          (0, bH.f)(this, GH, HH, "f")
        }
        get refractionIntensityTexture() {
          return (0, bH.e)(this, YH, "f")
        }
        set refractionIntensityTexture(HH) {
          (0, bH.f)(this, YH, HH, "f")
        }
        get translucencyIntensityTexture() {
          return (0, bH.e)(this, uH, "f")
        }
        set translucencyIntensityTexture(HH) {
          (0, bH.f)(this, uH, HH, "f")
        }
        get translucencyColorTexture() {
          return (0, bH.e)(this, QH, "f")
        }
        set translucencyColorTexture(HH) {
          (0, bH.f)(this, QH, HH, "f")
        }
        get useGltfStyleTextures() {
          return (0, bH.e)(this, WH, "f")
        }
        set useGltfStyleTextures(HH) {
          (0, bH.f)(this, WH, HH, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(HH) {
          this.legacyTranslucency = HH
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
        constructor(MH) {
          let xH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MH, "PBRSubSurface", 130, new tB, xH), this._isRefractionEnabled = !1, BH.set(this, (0, bH.k)(this, AB, !1)), this._isTranslucencyEnabled = ((0, bH.k)(this, rB), !1), LH.set(this, (0, bH.k)(this, SB, !1)), this._isDispersionEnabled = ((0, bH.k)(this, hB), !1), AH.set(this, (0, bH.k)(this, zB, !1)), this._isScatteringEnabled = ((0, bH.k)(this, CB), !1), rH.set(this, (0, bH.k)(this, EB, !1)), this._scatteringDiffusionProfileIndex = ((0, bH.k)(this, XB), (0, bH.k)(this, GB, 0)), this.refractionIntensity = ((0, bH.k)(this, YB), (0, bH.k)(this, uB, 1)), this.translucencyIntensity = ((0, bH.k)(this, QB), (0, bH.k)(this, WB, 1)), this._useAlbedoToTintRefraction = ((0, bH.k)(this, MB), !1), SH.set(this, (0, bH.k)(this, xB, !1)), this._useAlbedoToTintTranslucency = ((0, bH.k)(this, vB), !1), hH.set(this, (0, bH.k)(this, PB, !1)), this._thicknessTexture = ((0, bH.k)(this, TB), null), tH.set(this, (0, bH.k)(this, UB, null)), this._refractionTexture = ((0, bH.k)(this, VB), null), zH.set(this, (0, bH.k)(this, OB, null)), this._indexOfRefraction = ((0, bH.k)(this, bB), 1.5), CH.set(this, (0, bH.k)(this, kB, 1.5)), this._volumeIndexOfRefraction = ((0, bH.k)(this, mB), (0, bH.k)(this, oB, -1)), this._invertRefractionY = ((0, bH.k)(this, IB), !1), EH.set(this, (0, bH.k)(this, fB, !1)), this._linkRefractionWithTransparency = ((0, bH.k)(this, lB), !1), XH.set(this, (0, bH.k)(this, KB, !1)), this.minimumThickness = ((0, bH.k)(this, cB), (0, bH.k)(this, eB, 0)), this.maximumThickness = ((0, bH.k)(this, qB), (0, bH.k)(this, gB, 1)), this.useThicknessAsDepth = ((0, bH.k)(this, NB), (0, bH.k)(this, RB, !1)), this.tintColor = ((0, bH.k)(this, jB), (0, bH.k)(this, nB, ZH.c.White())), this.tintColorAtDistance = ((0, bH.k)(this, FB), (0, bH.k)(this, DB, 1)), this.dispersion = ((0, bH.k)(this, wB), (0, bH.k)(this, ZB, 0)), this.diffusionDistance = ((0, bH.k)(this, dB), (0, bH.k)(this, aB, ZH.c.White())), this._useMaskFromThicknessTexture = ((0, bH.k)(this, sB), !1), GH.set(this, (0, bH.k)(this, JB, !1)), this._refractionIntensityTexture = ((0, bH.k)(this, iB), null), YH.set(this, (0, bH.k)(this, pB, null)), this._translucencyIntensityTexture = ((0, bH.k)(this, yB), null), uH.set(this, (0, bH.k)(this, HL, null)), this.translucencyColor = ((0, bH.k)(this, BL), (0, bH.k)(this, LL, null)), this._translucencyColorTexture = ((0, bH.k)(this, AL), null), QH.set(this, (0, bH.k)(this, rL, null)), this._useGltfStyleTextures = ((0, bH.k)(this, SL), !0), WH.set(this, (0, bH.k)(this, hL, !0)), this.applyAlbedoAfterSubSurface = ((0, bH.k)(this, tL), (0, bH.k)(this, zL, HH.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, bH.k)(this, CL), (0, bH.k)(this, EL, HH.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, bH.k)(this, XL), this._scene = MH.yN(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = MH._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = MH._dirtyCallbacks[32]
        }
        isReadyForSubMesh(HH, BH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (HH._areTexturesDirty && BH.texturesEnabled) {
            if (this._thicknessTexture && JH.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && JH.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && JH.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && JH.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const HH = this._getRefractionTexture(BH);
            if (HH && JH.e.RefractionTextureEnabled && !HH.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(HH, BH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return HH.SUBSURFACE = !1, HH.SS_DISPERSION = !1, HH.SS_TRANSLUCENCY = !1, HH.SS_SCATTERING = !1, HH.SS_REFRACTION = !1, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_THICKNESSANDMASK_TEXTURE = !1, HH.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, HH.SS_HAS_THICKNESS = !1, HH.SS_REFRACTIONINTENSITY_TEXTURE = !1, HH.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, HH.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, HH.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, HH.SS_REFRACTIONMAP_3D = !1, HH.SS_REFRACTIONMAP_OPPOSITEZ = !1, HH.SS_LODINREFRACTIONALPHA = !1, HH.SS_GAMMAREFRACTION = !1, HH.SS_RGBDREFRACTION = !1, HH.SS_LINEARSPECULARREFRACTION = !1, HH.SS_LINKREFRACTIONTOTRANSPARENCY = !1, HH.SS_ALBEDOFORREFRACTIONTINT = !1, HH.SS_ALBEDOFORTRANSLUCENCYTINT = !1, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, HH.SS_USE_THICKNESS_AS_DEPTH = !1, HH.SS_USE_GLTF_TEXTURES = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, HH.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(HH.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (HH._areTexturesDirty) {
            if (HH.SUBSURFACE = !0, HH.SS_DISPERSION = this._isDispersionEnabled, HH.SS_TRANSLUCENCY = this._isTranslucencyEnabled, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, HH.SS_SCATTERING = this._isScatteringEnabled, HH.SS_THICKNESSANDMASK_TEXTURE = !1, HH.SS_REFRACTIONINTENSITY_TEXTURE = !1, HH.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, HH.SS_HAS_THICKNESS = !1, HH.SS_USE_GLTF_TEXTURES = !1, HH.SS_REFRACTION = !1, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_REFRACTIONMAP_3D = !1, HH.SS_GAMMAREFRACTION = !1, HH.SS_RGBDREFRACTION = !1, HH.SS_LINEARSPECULARREFRACTION = !1, HH.SS_REFRACTIONMAP_OPPOSITEZ = !1, HH.SS_LODINREFRACTIONALPHA = !1, HH.SS_LINKREFRACTIONTOTRANSPARENCY = !1, HH.SS_ALBEDOFORREFRACTIONTINT = !1, HH.SS_ALBEDOFORTRANSLUCENCYTINT = !1, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, HH.SS_USE_THICKNESS_AS_DEPTH = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, HH.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, HH._areTexturesDirty && BH.texturesEnabled && (this._thicknessTexture && JH.e.ThicknessTextureEnabled && (0, pH.X)(this._thicknessTexture, HH, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && JH.e.RefractionIntensityTextureEnabled && (0, pH.X)(this._refractionIntensityTexture, HH, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && JH.e.TranslucencyIntensityTextureEnabled && (0, pH.X)(this._translucencyIntensityTexture, HH, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && JH.e.TranslucencyColorTextureEnabled && ((0, pH.X)(this._translucencyColorTexture, HH, "SS_TRANSLUCENCYCOLOR_TEXTURE"), HH.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), HH.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, HH.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && BH.texturesEnabled) {
              const LH = this._getRefractionTexture(BH);
              LH && JH.e.RefractionTextureEnabled && (HH.SS_REFRACTION = !0, HH.SS_REFRACTIONMAP_3D = LH.isCube, HH.SS_GAMMAREFRACTION = LH.gammaSpace, HH.SS_RGBDREFRACTION = LH.isRGBD, HH.SS_LINEARSPECULARREFRACTION = LH.linearSpecularLOD, HH.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && LH.isCube ? !LH.invertZ : LH.invertZ, HH.SS_LODINREFRACTIONALPHA = LH.lodLevelInAlpha, HH.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, HH.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = LH.isCube && LH.boundingBoxSize, HH.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (HH.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(HH, BH, LH, AH) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) HH.updateFloat2("vThicknessParam", 0, 0);
            else {
              AH.getRenderingMesh().getWorldMatrix().decompose(NH.l.lu[0]);
              const BH = Math.max(Math.abs(NH.l.lu[0].x), Math.abs(NH.l.lu[0].y), Math.abs(NH.l.lu[0].z));
              HH.updateFloat2("vThicknessParam", this.minimumThickness * BH, (this.maximumThickness - this.minimumThickness) * BH)
            }
        }
        bindForSubMesh(HH, BH, LH, AH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const rH = AH.materialDefines,
            SH = this._material.isFrozen,
            hH = this._material.realTimeFiltering,
            tH = rH.LODBASEDMICROSFURACE,
            zH = this._getRefractionTexture(BH);
          if (!HH.useUbo || !SH || !HH.isSync) {
            if (this._thicknessTexture && JH.e.ThicknessTextureEnabled && (HH.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, pH.u)(this._thicknessTexture, HH, "thickness")), this._refractionIntensityTexture && JH.e.RefractionIntensityTextureEnabled && rH.SS_REFRACTIONINTENSITY_TEXTURE && (HH.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, pH.u)(this._refractionIntensityTexture, HH, "refractionIntensity")), this._translucencyColorTexture && JH.e.TranslucencyColorTextureEnabled && rH.SS_TRANSLUCENCYCOLOR_TEXTURE && (HH.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, pH.u)(this._translucencyColorTexture, HH, "translucencyColor")), this._translucencyIntensityTexture && JH.e.TranslucencyIntensityTextureEnabled && rH.SS_TRANSLUCENCYINTENSITY_TEXTURE && (HH.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, pH.u)(this._translucencyIntensityTexture, HH, "translucencyIntensity")), zH && JH.e.RefractionTextureEnabled) {
              HH.wHH("refractionMatrix", zH.getRefractionTextureMatrix());
              let BH = 1;
              zH.isCube || zH.depth && (BH = zH.depth);
              const LH = zH.getSize().width,
                AH = this.volumeIndexOfRefraction;
              if (HH.updateFloat4("vRefractionInfos", zH.level, 1 / AH, BH, this._invertRefractionY ? -1 : 1), HH.updateFloat4("vRefractionMicrosurfaceInfos", LH, zH.lodGenerationScale, zH.lodGenerationOffset, 1 / this.indexOfRefraction), hH && HH.updateFloat2("vRefractionFilteringInfo", LH, Math.log2(LH)), zH.boundingBoxSize) {
                const BH = zH;
                HH.updateVector3("vRefractionPosition", BH.boundingBoxPosition), HH.updateVector3("vRefractionSize", BH.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && HH.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), HH.updateColor3("vDiffusionDistance", this.diffusionDistance), HH.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), HH.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), HH.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), HH.updateFloat("dispersion", this.dispersion)
          }
          BH.texturesEnabled && (this._thicknessTexture && JH.e.ThicknessTextureEnabled && HH.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && JH.e.RefractionIntensityTextureEnabled && rH.SS_REFRACTIONINTENSITY_TEXTURE && HH.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && JH.e.TranslucencyIntensityTextureEnabled && rH.SS_TRANSLUCENCYINTENSITY_TEXTURE && HH.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && JH.e.TranslucencyColorTextureEnabled && rH.SS_TRANSLUCENCYCOLOR_TEXTURE && HH.setTexture("translucencyColorSampler", this._translucencyColorTexture), zH && JH.e.RefractionTextureEnabled && (tH ? HH.setTexture("refractionSampler", zH) : (HH.setTexture("refractionSampler", zH._lodTextureMid || zH), HH.setTexture("refractionSamplerLow", zH._lodTextureLow || zH), HH.setTexture("refractionSamplerHigh", zH._lodTextureHigh || zH))))
        }
        _getRefractionTexture(HH) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? HH.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(HH) {
          JH.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && HH.push(this._refractionTexture)
        }
        hasTexture(HH) {
          return this._thicknessTexture === HH || (this._refractionTexture === HH || (this._refractionIntensityTexture === HH || (this._translucencyIntensityTexture === HH || this._translucencyColorTexture === HH)))
        }
        hasRenderTargetTextures() {
          return !!(JH.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(HH) {
          this._thicknessTexture && HH.push(this._thicknessTexture), this._refractionTexture && HH.push(this._refractionTexture), this._refractionIntensityTexture && HH.push(this._refractionIntensityTexture), this._translucencyColorTexture && HH.push(this._translucencyColorTexture), this._translucencyIntensityTexture && HH.push(this._translucencyIntensityTexture)
        }
        getAnimatables(HH) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && HH.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && HH.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && HH.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && HH.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && HH.push(this._translucencyIntensityTexture)
        }
        dispose(HH) {
          HH && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(HH, BH, LH) {
          return HH.SS_SCATTERING && BH.addFallback(LH++, "SS_SCATTERING"), HH.SS_TRANSLUCENCY && BH.addFallback(LH++, "SS_TRANSLUCENCY"), LH
        }
        getSamplers(HH) {
          HH.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, rH = new WeakMap, SH = new WeakMap, hH = new WeakMap, tH = new WeakMap, zH = new WeakMap, CH = new WeakMap, EH = new WeakMap, XH = new WeakMap, GH = new WeakMap, YH = new WeakMap, uH = new WeakMap, QH = new WeakMap, WH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(LB[Symbol.metadata] ?? null) : void 0;
        MH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], xH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], PH = [(0, kH.H)(), (0, kH.e)("_markScenePrePassDirty")], TH = [(0, kH.H)()], UH = [(0, kH.H)()], VH = [(0, kH.H)()], OH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], mH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], oH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], IH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], fH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], lH = [(0, kH.H)()], KH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], cH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, kH.H)()], qH = [(0, kH.H)()], gH = [(0, kH.H)()], RH = [(0, kH.l)()], jH = [(0, kH.H)()], FH = [(0, kH.H)()], DH = [(0, kH.l)()], wH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], dH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], aH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], sH = [(0, kH.l)()], iH = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], yH = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, kH.H)()], BB = [(0, kH.H)()], (0, bH.g)(HH, null, MH, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isRefractionEnabled" in HH,
            get: HH => HH.isRefractionEnabled,
            set: (HH, BH) => {
              HH.isRefractionEnabled = BH
            }
          },
          metadata: BH
        }, AB, rB), (0, bH.g)(HH, null, xH, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isTranslucencyEnabled" in HH,
            get: HH => HH.isTranslucencyEnabled,
            set: (HH, BH) => {
              HH.isTranslucencyEnabled = BH
            }
          },
          metadata: BH
        }, SB, hB), (0, bH.g)(HH, null, vH, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isDispersionEnabled" in HH,
            get: HH => HH.isDispersionEnabled,
            set: (HH, BH) => {
              HH.isDispersionEnabled = BH
            }
          },
          metadata: BH
        }, zB, CB), (0, bH.g)(HH, null, PH, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isScatteringEnabled" in HH,
            get: HH => HH.isScatteringEnabled,
            set: (HH, BH) => {
              HH.isScatteringEnabled = BH
            }
          },
          metadata: BH
        }, EB, XB), (0, bH.g)(HH, null, OH, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlbedoToTintRefraction" in HH,
            get: HH => HH.useAlbedoToTintRefraction,
            set: (HH, BH) => {
              HH.useAlbedoToTintRefraction = BH
            }
          },
          metadata: BH
        }, xB, vB), (0, bH.g)(HH, null, mH, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlbedoToTintTranslucency" in HH,
            get: HH => HH.useAlbedoToTintTranslucency,
            set: (HH, BH) => {
              HH.useAlbedoToTintTranslucency = BH
            }
          },
          metadata: BH
        }, PB, TB), (0, bH.g)(HH, null, oH, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "thicknessTexture" in HH,
            get: HH => HH.thicknessTexture,
            set: (HH, BH) => {
              HH.thicknessTexture = BH
            }
          },
          metadata: BH
        }, UB, VB), (0, bH.g)(HH, null, IH, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "refractionTexture" in HH,
            get: HH => HH.refractionTexture,
            set: (HH, BH) => {
              HH.refractionTexture = BH
            }
          },
          metadata: BH
        }, OB, bB), (0, bH.g)(HH, null, fH, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "indexOfRefraction" in HH,
            get: HH => HH.indexOfRefraction,
            set: (HH, BH) => {
              HH.indexOfRefraction = BH
            }
          },
          metadata: BH
        }, kB, mB), (0, bH.g)(HH, null, KH, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: HH => "invertRefractionY" in HH,
            get: HH => HH.invertRefractionY,
            set: (HH, BH) => {
              HH.invertRefractionY = BH
            }
          },
          metadata: BH
        }, fB, lB), (0, bH.g)(HH, null, cH, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: HH => "linkRefractionWithTransparency" in HH,
            get: HH => HH.linkRefractionWithTransparency,
            set: (HH, BH) => {
              HH.linkRefractionWithTransparency = BH
            }
          },
          metadata: BH
        }, KB, cB), (0, bH.g)(HH, null, wH, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useMaskFromThicknessTexture" in HH,
            get: HH => HH.useMaskFromThicknessTexture,
            set: (HH, BH) => {
              HH.useMaskFromThicknessTexture = BH
            }
          },
          metadata: BH
        }, JB, iB), (0, bH.g)(HH, null, dH, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "refractionIntensityTexture" in HH,
            get: HH => HH.refractionIntensityTexture,
            set: (HH, BH) => {
              HH.refractionIntensityTexture = BH
            }
          },
          metadata: BH
        }, pB, yB), (0, bH.g)(HH, null, aH, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyIntensityTexture" in HH,
            get: HH => HH.translucencyIntensityTexture,
            set: (HH, BH) => {
              HH.translucencyIntensityTexture = BH
            }
          },
          metadata: BH
        }, HL, BL), (0, bH.g)(HH, null, iH, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyColorTexture" in HH,
            get: HH => HH.translucencyColorTexture,
            set: (HH, BH) => {
              HH.translucencyColorTexture = BH
            }
          },
          metadata: BH
        }, rL, SL), (0, bH.g)(HH, null, yH, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: HH => "useGltfStyleTextures" in HH,
            get: HH => HH.useGltfStyleTextures,
            set: (HH, BH) => {
              HH.useGltfStyleTextures = BH
            }
          },
          metadata: BH
        }, hL, tL), (0, bH.g)(null, null, TH, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: HH => "_scatteringDiffusionProfileIndex" in HH,
            get: HH => HH._scatteringDiffusionProfileIndex,
            set: (HH, BH) => {
              HH._scatteringDiffusionProfileIndex = BH
            }
          },
          metadata: BH
        }, GB, YB), (0, bH.g)(null, null, UH, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "refractionIntensity" in HH,
            get: HH => HH.refractionIntensity,
            set: (HH, BH) => {
              HH.refractionIntensity = BH
            }
          },
          metadata: BH
        }, uB, QB), (0, bH.g)(null, null, VH, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyIntensity" in HH,
            get: HH => HH.translucencyIntensity,
            set: (HH, BH) => {
              HH.translucencyIntensity = BH
            }
          },
          metadata: BH
        }, WB, MB), (0, bH.g)(null, null, lH, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "_volumeIndexOfRefraction" in HH,
            get: HH => HH._volumeIndexOfRefraction,
            set: (HH, BH) => {
              HH._volumeIndexOfRefraction = BH
            }
          },
          metadata: BH
        }, oB, IB), (0, bH.g)(null, null, eH, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "minimumThickness" in HH,
            get: HH => HH.minimumThickness,
            set: (HH, BH) => {
              HH.minimumThickness = BH
            }
          },
          metadata: BH
        }, eB, qB), (0, bH.g)(null, null, qH, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "maximumThickness" in HH,
            get: HH => HH.maximumThickness,
            set: (HH, BH) => {
              HH.maximumThickness = BH
            }
          },
          metadata: BH
        }, gB, NB), (0, bH.g)(null, null, gH, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: HH => "useThicknessAsDepth" in HH,
            get: HH => HH.useThicknessAsDepth,
            set: (HH, BH) => {
              HH.useThicknessAsDepth = BH
            }
          },
          metadata: BH
        }, RB, jB), (0, bH.g)(null, null, RH, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColor" in HH,
            get: HH => HH.tintColor,
            set: (HH, BH) => {
              HH.tintColor = BH
            }
          },
          metadata: BH
        }, nB, FB), (0, bH.g)(null, null, jH, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColorAtDistance" in HH,
            get: HH => HH.tintColorAtDistance,
            set: (HH, BH) => {
              HH.tintColorAtDistance = BH
            }
          },
          metadata: BH
        }, DB, wB), (0, bH.g)(null, null, FH, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: HH => "dispersion" in HH,
            get: HH => HH.dispersion,
            set: (HH, BH) => {
              HH.dispersion = BH
            }
          },
          metadata: BH
        }, ZB, dB), (0, bH.g)(null, null, DH, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "diffusionDistance" in HH,
            get: HH => HH.diffusionDistance,
            set: (HH, BH) => {
              HH.diffusionDistance = BH
            }
          },
          metadata: BH
        }, aB, sB), (0, bH.g)(null, null, sH, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyColor" in HH,
            get: HH => HH.translucencyColor,
            set: (HH, BH) => {
              HH.translucencyColor = BH
            }
          },
          metadata: BH
        }, LL, AL), (0, bH.g)(null, null, HB, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: HH => "applyAlbedoAfterSubSurface" in HH,
            get: HH => HH.applyAlbedoAfterSubSurface,
            set: (HH, BH) => {
              HH.applyAlbedoAfterSubSurface = BH
            }
          },
          metadata: BH
        }, zL, CL), (0, bH.g)(null, null, BB, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: HH => "legacyTranslucency" in HH,
            get: HH => HH.legacyTranslucency,
            set: (HH, BH) => {
              HH.legacyTranslucency = BH
            }
          },
          metadata: BH
        }, EL, XL), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, HH.DEFAULT_LEGACY_TRANSLUCENCY = !1, HH
    })();
    var CB = LH(41644),
      EB = LH(41623),
      XB = LH(41653),
      GB = LH(41657),
      YB = LH(41662),
      uB = LH(41669),
      QB = LH(41674),
      WB = LH(41676),
      MB = LH(41169);
    const xB = {
      effect: null,
      subMesh: null
    };
    class vB extends((0, QB.c)((0, uB.b)(jH.c))) {}
    class PB extends((0, dH.e)(vB)) {
      constructor(HH) {
        super(HH), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class TB extends((0, WB.b)(sH.b)) {}
    let UB = (() => {
      var HH, BH;
      let AH, rH = TB,
        hH = [],
        tH = [];
      return HH = class extends rH {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(HH) {
          this._realTimeFiltering = HH, this.dLH(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(HH) {
          this._realTimeFilteringQuality = HH, this.dLH(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, bH.e)(this, BH, "f")
        }
        set debugMode(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        constructor(LH, AH) {
          super(LH, AH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new NH.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ZH.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ZH.c(0, 0, 0), this._albedoColor = new ZH.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ZH.c(1, 1, 1), this._reflectionColor = new ZH.c(1, 1, 1), this._emissiveColor = new ZH.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = HH.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new oH.i(16), this._globalAmbientColor = new ZH.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, BH.set(this, (0, bH.k)(this, hH, 0)), this.debugLimit = ((0, bH.k)(this, tH), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new DH(this), this.clearCoat = new HB(this), this.iridescence = new LB(this), this.anisotropy = new rB(this), this.sheen = new hB(this), this.subSurface = new zB(this), this.detailMap = new CB.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), JH.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = cH(this.yN()), this.prePassConfiguration = new wH.d
        }
        get hasRenderTargetTextures() {
          return !!(JH.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === HH.PBRMATERIAL_OPAQUE || this._transparencyMode === HH.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === HH.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== HH.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(HH, BH, LH) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const AH = BH._drawWrapper;
          if (AH.effect && this.isFrozen && AH._wasPreviouslyReady && AH._wasPreviouslyUsingInstances === LH) return !0;
          BH.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), BH.materialDefines = new PB(this._eventInfo.defineNames));
          const rH = BH.materialDefines;
          if (this._isReadyForSubMesh(BH)) return !0;
          const SH = this.yN(),
            hH = SH.Iu();
          if (rH._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, SH.texturesEnabled)) {
            if (this._albedoTexture && JH.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && JH.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && JH.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && JH.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && JH.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const HH = this._getReflectionTexture();
            if (HH && JH.e.ReflectionTextureEnabled) {
              if (!HH.isReadyOrNotBlocking()) return !1;
              if (HH.irradianceTexture) {
                if (!HH.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!HH.sphericalPolynomial && HH.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && JH.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && JH.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (JH.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (hH.getCaps().standardDerivatives && this._bumpTexture && JH.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && JH.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = rH, this._eventInfo.subMesh = BH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (rH._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (rH.AREALIGHTUSED || rH.CLUSTLIGHT_BATCH)
            for (let XH = 0; XH < HH.lightSources.length; XH++)
              if (!HH.lightSources[XH]._isReady()) return !1;
          if (hH.getCaps().standardDerivatives || HH.isVerticesDataPresent(RH.i.NormalKind) || (HH.createNormals(!0), mH.e.Warn("PBRMaterial: Normals have been created for the mesh: " + HH.name)), !(0, pH.c)(SH, HH, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const tH = BH.effect,
            zH = rH._areLightsDisposed,
            CH = this._prepareEffect(HH, BH.getRenderingMesh(), rH, this.onCompiled, this.onError, LH, null);
          let EH = !1;
          if (CH)
            if (this._onEffectCreatedObservable && (xB.effect = CH, xB.subMesh = BH, this._onEffectCreatedObservable.notifyObservers(xB)), this.allowShaderHotSwapping && tH && !CH.isReady()) {
              if (rH.markAsUnprocessed(), EH = this.isFrozen, zH) return rH._areLightsDisposed = !0, !1
            } else SH.resetCachedMaterial(), BH.setEffect(CH, rH, this._materialContext);
          return !(!BH.effect || !BH.effect.isReady()) && (rH._renderId = SH.getRenderId(), AH._wasPreviouslyReady = !EH, AH._wasPreviouslyUsingInstances = !!LH, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(BH, LH, AH) {
          let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(BH, LH, AH, hH, tH), !AH.isDirty) return null;
          AH.markAsProcessed();
          const zH = this.yN().Iu(),
            CH = new iH.b;
          let EH = 0;
          AH.USESPHERICALINVERTEX && CH.addFallback(EH++, "USESPHERICALINVERTEX"), AH.FOG && CH.addFallback(EH, "FOG"), AH.SPECULARAA && CH.addFallback(EH, "SPECULARAA"), AH.POINTSIZE && CH.addFallback(EH, "POINTSIZE"), AH.LOGARITHMICDEPTH && CH.addFallback(EH, "LOGARITHMICDEPTH"), AH.PARALLAX && CH.addFallback(EH, "PARALLAX"), AH.PARALLAX_RHS && CH.addFallback(EH, "PARALLAX_RHS"), AH.PARALLAXOCCLUSION && CH.addFallback(EH++, "PARALLAXOCCLUSION"), AH.ENVIRONMENTBRDF && CH.addFallback(EH++, "ENVIRONMENTBRDF"), AH.TANGENT && CH.addFallback(EH++, "TANGENT"), AH.BUMP && CH.addFallback(EH++, "BUMP"), EH = (0, pH.y)(AH, CH, this._maxSimultaneousLights, EH), AH.SPECULARTERM && CH.addFallback(EH++, "SPECULARTERM"), AH.USESPHERICALFROMREFLECTIONMAP && CH.addFallback(EH++, "USESPHERICALFROMREFLECTIONMAP"), AH.USEIRRADIANCEMAP && CH.addFallback(EH++, "USEIRRADIANCEMAP"), AH.LIGHTMAP && CH.addFallback(EH++, "LIGHTMAP"), AH.NORMAL && CH.addFallback(EH++, "NORMAL"), AH.AMBIENT && CH.addFallback(EH++, "AMBIENT"), AH.EMISSIVE && CH.addFallback(EH++, "EMISSIVE"), AH.VERTEXCOLOR && CH.addFallback(EH++, "VERTEXCOLOR"), AH.MORPHTARGETS && CH.addFallback(EH++, "MORPHTARGETS"), AH.MULTIVIEW && CH.addFallback(0, "MULTIVIEW");
          const XH = [RH.i.PositionKind];
          AH.NORMAL && XH.push(RH.i.NormalKind), AH.TANGENT && XH.push(RH.i.TangentKind);
          for (let HH = 1; HH <= 6; ++HH) AH["UV" + HH] && XH.push(`uv${1===HH?"":HH}`);
          AH.VERTEXCOLOR && XH.push(RH.i.ColorKind), (0, pH.E)(XH, BH, AH, CH), (0, pH.F)(XH, AH), (0, pH.G)(XH, BH, AH), (0, pH.C)(XH, BH, AH);
          let GH = "pbr";
          const YH = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            uH = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, pH.fb)(YH, uH, !0);
          const QH = ["Material", "Scene", "Mesh"],
            WH = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: AH.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = CH, this._eventInfo.fallbackRank = EH, this._eventInfo.defines = AH, this._eventInfo.uniforms = YH, this._eventInfo.attributes = XH, this._eventInfo.samplers = uH, this._eventInfo.uniformBuffersNames = QH, this._eventInfo.customCode = void 0, this._eventInfo.mesh = BH, this._eventInfo.indexParameters = WH, this._callbackPluginEventGeneric(128, this._eventInfo), YB.e.AddUniformsAndSamplers(YH, uH), wH.d.AddUniforms(YH), wH.d.AddSamplers(uH), (0, EB.b)(YH), this._useVertexPulling) {
            const HH = LH?.geometry;
            HH && (this._vertexPullingMetadata = (0, XB.f)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
              YH.push(`vp_${BH}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          aH.b && (aH.b.PrepareUniforms(YH, AH), aH.b.PrepareSamplers(uH, AH)), (0, pH.jb)({
            uniformsNames: YH,
            uniformBuffersNames: QH,
            samplers: uH,
            defines: AH,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const MH = {};
          this.customShaderNameResolve && (GH = this.customShaderNameResolve(GH, YH, QH, uH, AH, XH, MH));
          const xH = AH.toString(),
            vH = zH.createEffect(GH, {
              attributes: XH,
              uniformsNames: YH,
              uniformBuffersNames: QH,
              samplers: uH,
              defines: xH,
              fallbacks: CH,
              onCompiled: rH,
              onError: SH,
              indexParameters: WH,
              processFinalCode: MH.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: AH.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: HH._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, zH);
          return this._eventInfo.customCode = void 0, vH
        }
        _prepareDefines(BH, LH, AH) {
          let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const hH = LH.hasThinInstances,
            tH = this.yN(),
            zH = tH.Iu();
          (0, pH.U)(tH, BH, AH, !0, this._maxSimultaneousLights, this._disableLighting), AH._needNormals = !0, (0, pH._)(tH, AH);
          const CH = this.needAlphaBlendingForMesh(BH) && this.yN().useOrderIndependentTransparency;
          if ((0, pH.ab)(tH, AH, this.canRenderToMRT && !CH), (0, pH.$)(tH, AH, CH), YB.e.PrepareDefines(zH.currentRenderPassId, BH, AH), AH.METALLICWORKFLOW = this.isMetallicWorkflow(), AH._areTexturesDirty) {
            AH._needUVs = !1;
            for (let HH = 1; HH <= 6; ++HH) AH["MAINUV" + HH] = !1;
            if (tH.texturesEnabled) {
              AH.ALBEDODIRECTUV = 0, AH.BASE_WEIGHTDIRECTUV = 0, AH.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, AH.AMBIENTDIRECTUV = 0, AH.OPACITYDIRECTUV = 0, AH.EMISSIVEDIRECTUV = 0, AH.REFLECTIVITYDIRECTUV = 0, AH.MICROSURFACEMAPDIRECTUV = 0, AH.METALLIC_REFLECTANCEDIRECTUV = 0, AH.REFLECTANCEDIRECTUV = 0, AH.BUMPDIRECTUV = 0, AH.LIGHTMAPDIRECTUV = 0, zH.getCaps().textureLOD && (AH.LODBASEDMICROSFURACE = !0), this._albedoTexture && JH.e.DiffuseTextureEnabled ? ((0, pH.X)(this._albedoTexture, AH, "ALBEDO"), AH.GAMMAALBEDO = this._albedoTexture.gammaSpace) : AH.ALBEDO = !1, this._baseWeightTexture && JH.e.BaseWeightTextureEnabled ? (0, pH.X)(this._baseWeightTexture, AH, "BASE_WEIGHT") : AH.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && JH.e.BaseDiffuseRoughnessTextureEnabled ? (0, pH.X)(this._baseDiffuseRoughnessTexture, AH, "BASE_DIFFUSE_ROUGHNESS") : AH.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && JH.e.AmbientTextureEnabled ? ((0, pH.X)(this._ambientTexture, AH, "AMBIENT"), AH.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : AH.AMBIENT = !1, this._opacityTexture && JH.e.OpacityTextureEnabled ? ((0, pH.X)(this._opacityTexture, AH, "OPACITY"), AH.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : AH.OPACITY = !1;
              const HH = this._getReflectionTexture(),
                BH = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || zH.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, pH.R)(tH, HH, AH, this.realTimeFiltering, this.realTimeFilteringQuality, !BH), this._lightmapTexture && JH.e.LightmapTextureEnabled ? ((0, pH.X)(this._lightmapTexture, AH, "LIGHTMAP"), AH.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, AH.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, AH.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : AH.LIGHTMAP = !1, this._emissiveTexture && JH.e.EmissiveTextureEnabled ? ((0, pH.X)(this._emissiveTexture, AH, "EMISSIVE"), AH.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : AH.EMISSIVE = !1, JH.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, pH.X)(this._metallicTexture, AH, "REFLECTIVITY"), AH.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, AH.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, AH.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, AH.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, AH.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, pH.X)(this._reflectivityTexture, AH, "REFLECTIVITY"), AH.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, AH.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, AH.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : AH.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (AH.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, pH.X)(this._metallicReflectanceTexture, AH, "METALLIC_REFLECTANCE"), AH.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : AH.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, pH.X)(this._reflectanceTexture, AH, "REFLECTANCE"), AH.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : AH.REFLECTANCE = !1) : (AH.METALLIC_REFLECTANCE = !1, AH.REFLECTANCE = !1), this._microSurfaceTexture ? (0, pH.X)(this._microSurfaceTexture, AH, "MICROSURFACEMAP") : AH.MICROSURFACEMAP = !1) : (AH.REFLECTIVITY = !1, AH.MICROSURFACEMAP = !1), zH.getCaps().standardDerivatives && this._bumpTexture && JH.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, pH.X)(this._bumpTexture, AH, "BUMP"), this._useParallax && this._albedoTexture && JH.e.DiffuseTextureEnabled ? (AH.PARALLAX = !0, AH.PARALLAX_RHS = tH.useRightHandedSystem, AH.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : AH.PARALLAX = !1, AH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (AH.BUMP = !1, AH.PARALLAX = !1, AH.PARALLAX_RHS = !1, AH.PARALLAXOCCLUSION = !1, AH.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && JH.e.ReflectionTextureEnabled ? (AH.ENVIRONMENTBRDF = !0, AH.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (AH.ENVIRONMENTBRDF = !1, AH.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? AH.ALPHAFROMALBEDO = !0 : AH.ALPHAFROMALBEDO = !1
            }
            AH.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === HH.LIGHTFALLOFF_STANDARD ? (AH.USEPHYSICALLIGHTFALLOFF = !1, AH.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === HH.LIGHTFALLOFF_GLTF ? (AH.USEPHYSICALLIGHTFALLOFF = !1, AH.USEGLTFLIGHTFALLOFF = !0) : (AH.USEPHYSICALLIGHTFALLOFF = !0, AH.USEGLTFLIGHTFALLOFF = !1), AH.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? AH.TWOSIDEDLIGHTING = !0 : AH.TWOSIDEDLIGHTING = !1, AH.MIRRORED = !!tH._mirroredCameraPosition, AH.SPECULARAA = zH.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(AH._areTexturesDirty || AH._areMiscDirty) && (AH.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, AH.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, AH.ALPHABLEND = this.needAlphaBlendingForMesh(BH), AH.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, AH.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), AH._areTexturesDirty && (AH.TEXTURE_REPETITION_MODE = zH.version > 1 || zH.isWebGPU ? this.textureRepetitionMode : 0), AH._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(AH), AH.FORCENORMALFORWARD = this._forceNormalForward, AH.RADIANCEOCCLUSION = this._useRadianceOcclusion, AH.HORIZONOCCLUSION = this._useHorizonOcclusion, AH._areMiscDirty && ((0, pH.Z)(BH, tH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(BH), AH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, LH, this._isVertexOutputInvariant), AH.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !BH.isVerticesDataPresent(RH.i.NormalKind), AH.DEBUGMODE = this._debugMode), (0, pH.P)(tH, zH, this, AH, !!rH, SH, hH), this._eventInfo.defines = AH, this._eventInfo.mesh = BH, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pH.L)(BH, AH, !0, !0, !0, this._transparencyMode !== HH.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(HH, BH, LH) {
          const AH = {
            clipPlane: !1,
            useInstances: !1,
            ...LH
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const LH = new PB(this._eventInfo.defineNames),
              rH = this._prepareEffect(HH, HH, LH, void 0, void 0, AH.useInstances, AH.clipPlane);
            this._onEffectCreatedObservable && (xB.effect = rH, xB.subMesh = null, this._onEffectCreatedObservable.notifyObservers(xB)), rH.isReady() ? BH && BH(this) : rH.onCompileObservable.add((() => {
              BH && BH(this)
            }))
          })()
        }
        buildUniformLayout() {
          const HH = this._uniformBuffer;
          HH.addUniform("vAlbedoInfos", 2), HH.addUniform("vBaseWeightInfos", 2), HH.addUniform("vBaseDiffuseRoughnessInfos", 2), HH.addUniform("vAmbientInfos", 4), HH.addUniform("vOpacityInfos", 2), HH.addUniform("vEmissiveInfos", 2), HH.addUniform("vLightmapInfos", 2), HH.addUniform("vReflectivityInfos", 3), HH.addUniform("vMicroSurfaceSamplerInfos", 2), HH.addUniform("vBumpInfos", 3), HH.addUniform("albedoMatrix", 16), HH.addUniform("baseWeightMatrix", 16), HH.addUniform("baseDiffuseRoughnessMatrix", 16), HH.addUniform("ambientMatrix", 16), HH.addUniform("opacityMatrix", 16), HH.addUniform("emissiveMatrix", 16), HH.addUniform("lightmapMatrix", 16), HH.addUniform("reflectivityMatrix", 16), HH.addUniform("microSurfaceSamplerMatrix", 16), HH.addUniform("bumpMatrix", 16), HH.addUniform("vTangentSpaceParams", 2), HH.addUniform("vAlbedoColor", 4), HH.addUniform("baseWeight", 1), HH.addUniform("baseDiffuseRoughness", 1), HH.addUniform("vLightingIntensity", 4), HH.addUniform("pointSize", 1), HH.addUniform("vReflectivityColor", 4), HH.addUniform("vEmissiveColor", 3), HH.addUniform("vAmbientColor", 3), HH.addUniform("vDebugMode", 2), HH.addUniform("vMetallicReflectanceFactors", 4), HH.addUniform("vMetallicReflectanceInfos", 2), HH.addUniform("metallicReflectanceMatrix", 16), HH.addUniform("vReflectanceInfos", 2), HH.addUniform("reflectanceMatrix", 16), HH.addUniform("cameraInfo", 4), HH.addUniform("vTextureRepetitionHexTilingParams", 4), (0, pH.db)(HH, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(HH, BH, LH) {
          const AH = this.yN(),
            rH = LH.materialDefines;
          if (!rH) return;
          const SH = LH.effect;
          if (!SH) return;
          this._activeEffect = SH, BH.getMeshUniformBuffer().bindToEffect(SH, "Mesh"), BH.transferToEffect(HH);
          const hH = AH.Iu();
          this._uniformBuffer.bindToEffect(SH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, AH, BH, HH, this.isFrozen), YB.e.Bind(hH.currentRenderPassId, this._activeEffect, BH, HH, this);
          const tH = AH.activeCamera;
          tH ? this._uniformBuffer.updateFloat4("cameraInfo", tH.minZ, tH.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const zH = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", zH[0], zH[1], zH[2], zH[3]), this._eventInfo.subMesh = LH, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), rH.OBJECTSPACE_NORMALMAP && (HH.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const CH = this._mustRebind(AH, SH, LH, BH.visibility),
            EH = hH._features.needToAlwaysBindUniformBuffers;
          (0, pH.d)(BH, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, XB.d)(this._activeEffect, this._vertexPullingMetadata);
          let XH = null;
          const GH = this._uniformBuffer;
          if (CH) {
            if (this.bindViewProjection(SH), XH = this._getReflectionTexture(), !GH.useUbo || !this.isFrozen || !GH.isSync || LH._drawWrapper._forceRebindOnNextCall) {
              if (AH.texturesEnabled && (this._albedoTexture && JH.e.DiffuseTextureEnabled && (GH.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, pH.u)(this._albedoTexture, GH, "albedo")), this._baseWeightTexture && JH.e.BaseWeightTextureEnabled && (GH.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, pH.u)(this._baseWeightTexture, GH, "baseWeight")), this._baseDiffuseRoughnessTexture && JH.e.BaseDiffuseRoughnessTextureEnabled && (GH.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, pH.u)(this._baseDiffuseRoughnessTexture, GH, "baseDiffuseRoughness")), this._ambientTexture && JH.e.AmbientTextureEnabled && (GH.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, pH.u)(this._ambientTexture, GH, "ambient")), this._opacityTexture && JH.e.OpacityTextureEnabled && (GH.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, pH.u)(this._opacityTexture, GH, "opacity")), this._emissiveTexture && JH.e.EmissiveTextureEnabled && (GH.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, pH.u)(this._emissiveTexture, GH, "emissive")), this._lightmapTexture && JH.e.LightmapTextureEnabled && (GH.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, pH.u)(this._lightmapTexture, GH, "lightmap")), JH.e.SpecularTextureEnabled && (this._metallicTexture ? (GH.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, pH.u)(this._metallicTexture, GH, "reflectivity")) : this._reflectivityTexture && (GH.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, pH.u)(this._reflectivityTexture, GH, "reflectivity")), this._metallicReflectanceTexture && (GH.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, pH.u)(this._metallicReflectanceTexture, GH, "metallicReflectance")), this._reflectanceTexture && rH.REFLECTANCE && (GH.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, pH.u)(this._reflectanceTexture, GH, "reflectance")), this._microSurfaceTexture && (GH.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, pH.u)(this._microSurfaceTexture, GH, "microSurfaceSampler"))), this._bumpTexture && hH.getCaps().standardDerivatives && JH.e.BumpTextureEnabled && !this._disableBumpMap && (GH.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, pH.u)(this._bumpTexture, GH, "bump"), AH._mirroredCameraPosition ? GH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : GH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, pH.j)(AH, rH, GH, this._reflectionColor, XH, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && GH.updateFloat("pointSize", this.pointSize), rH.METALLICWORKFLOW) {
                ZH.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ZH.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const HH = this.subSurface?._indexOfRefraction ?? 1.5,
                  BH = 1;
                ZH.m.Color4[0].b = HH;
                const LH = Math.pow((HH - BH) / (HH + BH), 2);
                ZH.m.Color4[0].a = LH, GH.updateDirectColor4("vReflectivityColor", ZH.m.Color4[0]), GH.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else GH.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              GH.updateColor3("vEmissiveColor", JH.e.EmissiveTextureEnabled ? this._emissiveColor : ZH.c.BlackReadOnly), !rH.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? GH.updateColor4("vAlbedoColor", this._albedoColor, 1) : GH.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), GH.updateFloat("baseWeight", this._baseWeight), GH.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * AH.environmentIntensity, this._lightingInfos.w = this._specularIntensity, GH.updateVector4("vLightingIntensity", this._lightingInfos), AH.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), GH.updateColor3("vAmbientColor", this._globalAmbientColor), GH.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            AH.texturesEnabled && (this._albedoTexture && JH.e.DiffuseTextureEnabled && GH.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && JH.e.BaseWeightTextureEnabled && GH.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && JH.e.BaseDiffuseRoughnessTextureEnabled && GH.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && JH.e.AmbientTextureEnabled && GH.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && JH.e.OpacityTextureEnabled && GH.setTexture("opacitySampler", this._opacityTexture), (0, pH.n)(AH, rH, GH, XH, this.realTimeFiltering), rH.ENVIRONMENTBRDF && GH.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && JH.e.EmissiveTextureEnabled && GH.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && JH.e.LightmapTextureEnabled && GH.setTexture("lightmapSampler", this._lightmapTexture), JH.e.SpecularTextureEnabled && (this._metallicTexture ? GH.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && GH.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && GH.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && rH.REFLECTANCE && GH.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && GH.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && hH.getCaps().standardDerivatives && JH.e.BumpTextureEnabled && !this._disableBumpMap && GH.setTexture("bumpSampler", this._bumpTexture)), this.yN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(BH) && this.yN().depthPeelingRenderer.bind(SH), this._eventInfo.subMesh = LH, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, EB.d)(this._activeEffect, this, AH), this.bindEyePosition(SH)
          } else EH && (this._needToBindSceneUbo = !0);
          !CH && this.isFrozen && !EH || !AH.lightsEnabled || this._disableLighting || (0, pH.p)(AH, BH, this._activeEffect, rH, this._maxSimultaneousLights), !CH && this.isFrozen || ((AH.fogEnabled && BH.applyFog && AH.fogMode !== gH.d.FOGMODE_NONE || XH || this.subSurface.refractionTexture || BH.receiveShadows || rH.PREPASS || rH.CLUSTLIGHT_BATCH) && this.bindView(SH), (0, pH.f)(AH, BH, this._activeEffect, !0), rH.NUM_MORPH_INFLUENCERS && (0, pH.r)(BH, this._activeEffect), rH.BAKED_VERTEX_ANIMATION_TEXTURE && BH.bakedVertexAnimationManager?.bind(SH, rH.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, pH.q)(rH, this._activeEffect, AH)), this._afterBind(BH, this._activeEffect, LH), GH.update()
        }
        getAnimatables() {
          const HH = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && HH.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && HH.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && HH.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && HH.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && HH.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && HH.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && HH.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? HH.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && HH.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && HH.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && HH.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && HH.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && HH.push(this._microSurfaceTexture), HH
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.yN().environmentTexture
        }
        getActiveTextures() {
          const HH = super.getActiveTextures();
          return this._albedoTexture && HH.push(this._albedoTexture), this._baseWeightTexture && HH.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && HH.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && HH.push(this._ambientTexture), this._opacityTexture && HH.push(this._opacityTexture), this._reflectionTexture && HH.push(this._reflectionTexture), this._emissiveTexture && HH.push(this._emissiveTexture), this._reflectivityTexture && HH.push(this._reflectivityTexture), this._metallicTexture && HH.push(this._metallicTexture), this._metallicReflectanceTexture && HH.push(this._metallicReflectanceTexture), this._reflectanceTexture && HH.push(this._reflectanceTexture), this._microSurfaceTexture && HH.push(this._microSurfaceTexture), this._bumpTexture && HH.push(this._bumpTexture), this._lightmapTexture && HH.push(this._lightmapTexture), HH
        }
        hasTexture(HH) {
          return !!super.hasTexture(HH) || (this._albedoTexture === HH || (this._baseWeightTexture === HH || (this._baseDiffuseRoughnessTexture === HH || (this._ambientTexture === HH || (this._opacityTexture === HH || (this._reflectionTexture === HH || (this._emissiveTexture === HH || (this._reflectivityTexture === HH || (this._metallicTexture === HH || (this._metallicReflectanceTexture === HH || (this._reflectanceTexture === HH || (this._microSurfaceTexture === HH || (this._bumpTexture === HH || this._lightmapTexture === HH)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const HH = this.yN().enableSubSurfaceForPrePass();
          return HH && (HH.enabled = !0), !0
        }
        dispose(HH, BH) {
          this._breakShaderLoadedCheck = !0, BH && (this._environmentBRDFTexture && this.yN().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(HH, BH)
        }
      }, BH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(rH[Symbol.metadata] ?? null) : void 0;
        AH = [(0, kH.e)("_markAllSubMeshesAsMiscDirty")], (0, bH.g)(HH, null, AH, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "debugMode" in HH,
            get: HH => HH.debugMode,
            set: (HH, BH) => {
              HH.debugMode = BH
            }
          },
          metadata: BH
        }, hH, tH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH.PBRMATERIAL_OPAQUE = SH.c.MATERIAL_OPAQUE, HH.PBRMATERIAL_ALPHATEST = SH.c.MATERIAL_ALPHATEST, HH.PBRMATERIAL_ALPHABLEND = SH.c.MATERIAL_ALPHABLEND, HH.PBRMATERIAL_ALPHATESTANDBLEND = SH.c.MATERIAL_ALPHATESTANDBLEND, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, HH.LIGHTFALLOFF_PHYSICAL = 0, HH.LIGHTFALLOFF_GLTF = 1, HH.LIGHTFALLOFF_STANDARD = 2, HH.ForceGLSL = !1, HH._ShaderLoader = new GB.b((() => [Promise.all([LH.e(626), LH.e(637)]).then((() => LH(64372))), Promise.all([LH.e(631), LH.e(627), LH.e(688), LH.e(640), LH.e(687)]).then((() => LH(64400)))]), (() => [Promise.all([LH.e(645), LH.e(647), LH.e(654)]).then((() => LH(64488))), Promise.all([LH.e(645), LH.e(648), LH.e(691), LH.e(658), LH.e(690)]).then((() => LH(64507)))])), HH
    })();
    Object.getOwnPropertyDescriptor(UB.prototype, "decalMap") || Object.defineProperty(UB.prototype, "decalMap", (0, MB.e)("PBRBaseMaterial", "decalMap")), (0, LH(45301).e)();
    var VB = LH(41319);
    var OB = LH(41387),
      bB = LH(45290),
      kB = LH(41122),
      mB = LH(41129),
      oB = LH(41229);
    let IB = !1;
    const fB = new ZH.g,
      lB = new ZH.g;
    class KB extends bB.c {
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
      set wrapU(HH) {
        if (this._textures)
          for (let BH = 0; BH < this._textures.length; BH++) this._textures[BH].wrapU = HH
      }
      set wrapV(HH) {
        if (this._textures)
          for (let BH = 0; BH < this._textures.length; BH++) this._textures[BH].wrapV = HH
      }
      constructor(HH, BH, LH, AH, rH, SH) {
        const hH = !(!rH || !rH.generateMipMaps) && rH.generateMipMaps,
          tH = !(!rH || !rH.generateDepthTexture) && rH.generateDepthTexture,
          zH = rH && rH.depthTextureFormat ? rH.depthTextureFormat : 15,
          CH = !rH || void 0 === rH.doNotChangeAspectRatio || rH.doNotChangeAspectRatio,
          EH = !(!rH || !rH.drawOnlyOnFirstAttachmentByDefault) && rH.drawOnlyOnFirstAttachmentByDefault;
        if (super(HH, BH, AH, hH, CH, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), IB || (IB = !0, mB.ThinEngine.prototype.restoreSingleAttachment = function() {
            const HH = this._gl;
            this.bindAttachments([HH.BACK])
          }, mB.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const HH = this._gl;
            this.bindAttachments([HH.COLOR_ATTACHMENT0])
          }, mB.ThinEngine.prototype.buildTextureLayout = function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const LH = this._gl,
              AH = [];
            if (BH) AH.push(LH.BACK);
            else
              for (let rH = 0; rH < HH.length; rH++) HH[rH] ? AH.push(LH["COLOR_ATTACHMENT" + rH]) : AH.push(LH.NONE);
            return AH
          }, mB.ThinEngine.prototype.bindAttachments = function(HH) {
            const BH = this._gl,
              LH = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, LH)
              for (let AH = 0; AH < HH.length; AH++) HH[AH] !== BH.NONE && LH[AH] && (0, oB.f)(LH[AH].format) && (this._integerMRTAttachmentsMask |= 1 << AH);
            BH.drawBuffers(HH)
          }, mB.ThinEngine.prototype.clearAttachments = function(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const hH = this._currentRenderTarget?.textures;
            let tH = !1;
            if (LH && HH && hH)
              for (let zH = 0; zH < BH.length; zH++) {
                const HH = hH[zH];
                if (BH[zH] !== this._gl.NONE && HH && (0, oB.f)(HH.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  tH = !0;
                  break
                }
              }
            if (!tH || !HH || !hH) return this.bindAttachments(BH), void this.clear(HH, LH, AH, rH, SH);
            this.bindAttachments(BH), this._applyColorWriteState();
            for (let zH = 0; zH < BH.length; zH++) {
              const LH = hH[zH];
              if (BH[zH] !== this._gl.NONE && LH) {
                let BH = HH;
                if ((0, oB.f)(LH.format)) {
                  const AH = (0, oB.i)(LH.type);
                  BH = AH ? fB : lB;
                  const rH = AH ? 255 : 1;
                  BH.r = Math.round(HH.r * rH), BH.g = Math.round(HH.g * rH), BH.b = Math.round(HH.b * rH), BH.a = Math.round(HH.a * rH)
                }
                this._clearColorAttachment(zH, BH, LH.format, LH.type)
              }
            }
            if (AH || rH) {
              const HH = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, AH, rH, SH)
              } finally {
                this._integerMRTAttachmentsMask = HH
              }
            }
          }, mB.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, HH.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(HH), BH || this.generateMipMapsMultiFramebuffer(HH), LH && (HH._MSAAFramebuffer && this._bindUnboundFramebuffer(HH._framebuffer), LH()), this._bindUnboundFramebuffer(null)
          }, mB.ThinEngine.prototype.createMultipleRenderTarget = function(HH, BH) {
            let LH, AH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              rH = !1,
              SH = !0,
              hH = !1,
              tH = !1,
              zH = 1,
              CH = 1,
              EH = [],
              XH = [],
              GH = [],
              YH = [],
              uH = [],
              QH = [],
              WH = [],
              MH = [],
              xH = [],
              vH = !1;
            const PH = this._createHardwareRenderTargetWrapper(!0, !1, HH);
            void 0 !== BH && (rH = void 0 !== BH.generateMipMaps && BH.generateMipMaps, SH = void 0 === BH.generateDepthBuffer || BH.generateDepthBuffer, hH = void 0 !== BH.generateStencilBuffer && BH.generateStencilBuffer, tH = void 0 !== BH.generateDepthTexture && BH.generateDepthTexture, zH = BH.wtH ?? 1, CH = BH.samples ?? CH, EH = BH.types || EH, XH = BH.samplingModes || XH, GH = BH.useSRGBBuffers || GH, YH = BH.formats || YH, uH = BH.targetTypes || uH, QH = BH.faceIndex || QH, WH = BH.layerIndex || WH, MH = BH.layerCounts || MH, xH = BH.labels || xH, vH = BH.dontCreateTextures ?? !1, this.hQ > 1 && (13 === BH.depthTextureFormat || 17 === BH.depthTextureFormat || 16 === BH.depthTextureFormat || 14 === BH.depthTextureFormat || 18 === BH.depthTextureFormat) && (LH = BH.depthTextureFormat)), void 0 === LH && (LH = hH ? 13 : 14);
            const TH = this._gl,
              UH = this._currentFramebuffer,
              VH = TH.createFramebuffer();
            this._bindUnboundFramebuffer(VH);
            const OH = HH.width ?? HH,
              bH = HH.height ?? HH,
              kH = [],
              oH = [],
              IH = this.hQ > 1 && (13 === LH || 17 === LH || 18 === LH);
            PH.label = BH?.label ?? "MultiRenderTargetWrapper", PH._framebuffer = VH, PH._generateDepthBuffer = tH || SH, PH._generateStencilBuffer = tH ? IH : hH, PH._depthStencilBuffer = this._setupFramebufferDepthAttachments(PH._generateStencilBuffer, PH._generateDepthBuffer, OH, bH, 1, LH), PH._attachments = oH;
            for (let fH = 0; fH < zH; fH++) {
              let HH = XH[fH] || 3,
                BH = EH[fH] || 0,
                LH = GH[fH] || !1;
              const AH = YH[fH] || 5,
                SH = uH[fH] || 3553,
                hH = MH[fH] ?? 1;
              (1 !== BH || this._caps.textureFloatLinearFiltering) && (2 !== BH || this._caps.textureHalfFloatLinearFiltering) || (HH = 1);
              const tH = this._getSamplingParameters(HH, rH);
              1 !== BH || this._caps.textureFloat || (BH = 0, mH.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), LH = LH && this._caps.supportSRGBBuffers && (this.hQ > 1 || this.isWebGPU);
              const zH = this.hQ > 1,
                CH = TH[zH ? "COLOR_ATTACHMENT" + fH : "COLOR_ATTACHMENT" + fH + "_WEBGL"];
              if (oH.push(CH), -1 === SH || vH) continue;
              const QH = new kB.e(this, 6);
              kH[fH] = QH, TH.activeTexture(TH["TEXTURE" + fH]), TH.bindTexture(SH, QH._hardwareTexture.underlyingResource), TH.texParameteri(SH, TH.TEXTURE_MAG_FILTER, tH.mag), TH.texParameteri(SH, TH.TEXTURE_MIN_FILTER, tH.min), TH.texParameteri(SH, TH.TEXTURE_WRAP_S, TH.CLAMP_TO_EDGE), TH.texParameteri(SH, TH.TEXTURE_WRAP_T, TH.CLAMP_TO_EDGE);
              const WH = this._getRGBABufferInternalSizedFormat(BH, AH, LH),
                UH = this._getInternalFormat(AH),
                VH = this._getWebGLTextureType(BH);
              if (!zH || 35866 !== SH && 32879 !== SH)
                if (34067 === SH) {
                  for (let HH = 0; HH < 6; HH++) TH.texImage2D(TH.TEXTURE_CUBE_MAP_POSITIVE_X + HH, 0, WH, OH, bH, 0, UH, VH, null);
                  QH.isCube = !0
                } else TH.texImage2D(TH.TEXTURE_2D, 0, WH, OH, bH, 0, UH, VH, null);
              else 35866 === SH ? QH.is2DArray = !0 : QH.is3D = !0, QH.baseDepth = QH.depth = hH, TH.texImage3D(SH, 0, WH, OH, bH, hH, 0, UH, VH, null);
              rH && TH.generateMipmap(SH), this._bindTextureDirectly(SH, null), QH.baseWidth = OH, QH.baseHeight = bH, QH.width = OH, QH.height = bH, QH.isReady = !0, QH.samples = 1, QH.generateMipMaps = rH, QH.samplingMode = HH, QH.type = BH, QH._useSRGBBuffer = LH, QH.format = AH, QH.label = xH[fH] ?? PH.label + "-Texture" + fH, this._internalTexturesCache.push(QH)
            }
            if (tH && this._caps.depthTextureExtension && !vH) {
              const HH = new kB.e(this, 14);
              let BH = 5,
                AH = TH.DEPTH_COMPONENT16,
                SH = TH.DEPTH_COMPONENT,
                hH = TH.UNSIGNED_SHORT,
                tH = TH.DEPTH_ATTACHMENT;
              this.hQ < 2 ? AH = TH.DEPTH_COMPONENT : 14 === LH ? (BH = 1, hH = TH.FLOAT, AH = TH.DEPTH_COMPONENT32F) : 18 === LH ? (BH = 0, hH = TH.FLOAT_32_UNSIGNED_INT_24_8_REV, AH = TH.DEPTH32F_STENCIL8, SH = TH.DEPTH_STENCIL, tH = TH.DEPTH_STENCIL_ATTACHMENT) : 16 === LH ? (BH = 0, hH = TH.UNSIGNED_INT, AH = TH.DEPTH_COMPONENT24, tH = TH.DEPTH_ATTACHMENT) : 13 !== LH && 17 !== LH || (BH = 12, hH = TH.UNSIGNED_INT_24_8, AH = TH.DEPTH24_STENCIL8, SH = TH.DEPTH_STENCIL, tH = TH.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(TH.TEXTURE_2D, HH, !0), TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_MAG_FILTER, TH.NEAREST), TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_MIN_FILTER, TH.NEAREST), TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_WRAP_S, TH.CLAMP_TO_EDGE), TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_WRAP_T, TH.CLAMP_TO_EDGE), TH.texImage2D(TH.TEXTURE_2D, 0, AH, OH, bH, 0, SH, hH, null), TH.framebufferTexture2D(TH.FRAMEBUFFER, tH, TH.TEXTURE_2D, HH._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(TH.TEXTURE_2D, null), PH._depthStencilTexture = HH, PH._depthStencilTextureWithStencil = IH, HH.baseWidth = OH, HH.baseHeight = bH, HH.width = OH, HH.height = bH, HH.isReady = !0, HH.samples = 1, HH.generateMipMaps = rH, HH.samplingMode = 1, HH.format = LH, HH.type = BH, HH.label = PH.label + "-DepthStencil", kH[zH] = HH, this._internalTexturesCache.push(HH)
            }
            if (PH.setTextures(kH), AH && TH.drawBuffers(oH), this._bindUnboundFramebuffer(UH), PH.setLayerAndFaceIndices(WH, QH), this.resetTextureCache(), vH) {
              if (CH > 1) {
                const HH = TH.createFramebuffer();
                if (!HH) throw new Error("Unable to create multi sampled framebuffer");
                PH._samples = CH, PH._MSAAFramebuffer = HH, zH > 0 && AH && (this._bindUnboundFramebuffer(HH), TH.drawBuffers(oH), this._bindUnboundFramebuffer(UH))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(PH, CH, AH);
            return PH
          }, mB.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(HH, BH) {
            let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.hQ < 2 || !HH) return 1;
            if (HH.samples === BH) return BH;
            const AH = this._gl;
            BH = Math.min(BH, this.getCaps().maxMSAASamples), HH._depthStencilBuffer && (AH.deleteRenderbuffer(HH._depthStencilBuffer), HH._depthStencilBuffer = null), HH._MSAAFramebuffer && (AH.deleteFramebuffer(HH._MSAAFramebuffer), HH._MSAAFramebuffer = null);
            const rH = HH._attachments.length;
            for (let hH = 0; hH < rH; hH++) {
              const BH = HH.textures[hH]._hardwareTexture;
              BH?.releaseMSAARenderBuffers()
            }
            if (BH > 1 && "function" === typeof AH.renderbufferStorageMultisample) {
              const SH = AH.createFramebuffer();
              if (!SH) throw new Error("Unable to create multi sampled framebuffer");
              HH._MSAAFramebuffer = SH, this._bindUnboundFramebuffer(SH);
              const hH = [];
              for (let LH = 0; LH < rH; LH++) {
                const rH = HH.textures[LH],
                  SH = rH._hardwareTexture,
                  tH = AH[this.hQ > 1 ? "COLOR_ATTACHMENT" + LH : "COLOR_ATTACHMENT" + LH + "_WEBGL"],
                  zH = this._createRenderBuffer(rH.width, rH.height, BH, -1, this._getRGBABufferInternalSizedFormat(rH.type, rH.format, rH._useSRGBBuffer), tH);
                if (!zH) throw new Error("Unable to create multi sampled framebuffer");
                SH.addMSAARenderBuffer(zH), rH.samples = BH, hH.push(tH)
              }
              LH && AH.drawBuffers(hH)
            } else this._bindUnboundFramebuffer(HH._framebuffer);
            const SH = HH._depthStencilTexture ? HH._depthStencilTexture.format : void 0;
            return HH._depthStencilBuffer = this._setupFramebufferDepthAttachments(HH._generateStencilBuffer, HH._generateDepthBuffer, HH.width, HH.height, BH, SH), this._bindUnboundFramebuffer(null), HH._samples = BH, BH
          }, mB.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(HH) {
            const BH = HH,
              LH = this._gl;
            if (BH.isMulti)
              for (let AH = 0; AH < BH._attachments.length; AH++) {
                const HH = BH.textures[AH];
                !HH?.generateMipMaps || HH?.isCube || HH?.is3D || (this._bindTextureDirectly(LH.TEXTURE_2D, HH, !0), LH.generateMipmap(LH.TEXTURE_2D), this._bindTextureDirectly(LH.TEXTURE_2D, null))
              }
          }, mB.ThinEngine.prototype.resolveMultiFramebuffer = function(HH) {
            const BH = HH,
              LH = this._gl;
            if (!BH._MSAAFramebuffer || !BH.isMulti) return;
            let AH = BH.resolveMSAAColors ? LH.COLOR_BUFFER_BIT : 0;
            AH |= BH._generateDepthBuffer && BH.resolveMSAADepth ? LH.DEPTH_BUFFER_BIT : 0, AH |= BH._generateStencilBuffer && BH.resolveMSAAStencil ? LH.STENCIL_BUFFER_BIT : 0;
            const rH = BH._attachments,
              SH = rH.length;
            LH.bindFramebuffer(LH.READ_FRAMEBUFFER, BH._MSAAFramebuffer), LH.bindFramebuffer(LH.DRAW_FRAMEBUFFER, BH._framebuffer);
            for (let hH = 0; hH < SH; hH++) {
              const HH = BH.textures[hH];
              for (let BH = 0; BH < SH; BH++) rH[BH] = LH.NONE;
              rH[hH] = LH[this.hQ > 1 ? "COLOR_ATTACHMENT" + hH : "COLOR_ATTACHMENT" + hH + "_WEBGL"], LH.readBuffer(rH[hH]), LH.drawBuffers(rH), LH.blitFramebuffer(0, 0, HH.width, HH.height, 0, 0, HH.width, HH.height, AH, LH.NEAREST)
            }
            for (let hH = 0; hH < SH; hH++) rH[hH] = LH[this.hQ > 1 ? "COLOR_ATTACHMENT" + hH : "COLOR_ATTACHMENT" + hH + "_WEBGL"];
            LH.drawBuffers(rH), LH.bindFramebuffer(this._gl.FRAMEBUFFER, BH._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = SH;
        const XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [],
          MH = [],
          xH = [];
        this._initTypes(LH, XH, GH, YH, uH, QH, WH, MH, xH, rH);
        const vH = !rH || void 0 === rH.generateDepthBuffer || rH.generateDepthBuffer,
          PH = !(!rH || void 0 === rH.generateStencilBuffer) && rH.generateStencilBuffer,
          TH = rH && rH.samples ? rH.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: GH,
          generateMipMaps: hH,
          generateDepthBuffer: vH,
          generateStencilBuffer: PH,
          generateDepthTexture: tH,
          depthTextureFormat: zH,
          types: XH,
          wtH: LH,
          useSRGBBuffers: YH,
          samples: TH,
          formats: uH,
          targetTypes: QH,
          faceIndex: WH,
          layerIndex: MH,
          layerCounts: xH,
          labels: SH,
          label: HH
        }, this._count = LH, this._drawOnlyOnFirstAttachmentByDefault = EH, LH > 0 && (this._createInternalTextures(), this._createTextures(SH))
      }
      _initTypes(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        for (let EH = 0; EH < HH; EH++) CH && CH.types && void 0 !== CH.types[EH] ? BH.push(CH.types[EH]) : BH.push(CH && CH.defaultType ? CH.defaultType : 0), CH && CH.samplingModes && void 0 !== CH.samplingModes[EH] ? LH.push(CH.samplingModes[EH]) : LH.push(IH.g.BILINEAR_SAMPLINGMODE), CH && CH.useSRGBBuffers && void 0 !== CH.useSRGBBuffers[EH] ? AH.push(CH.useSRGBBuffers[EH]) : AH.push(!1), CH && CH.formats && void 0 !== CH.formats[EH] ? rH.push(CH.formats[EH]) : rH.push(5), CH && CH.targetTypes && void 0 !== CH.targetTypes[EH] ? SH.push(CH.targetTypes[EH]) : SH.push(3553), CH && CH.faceIndex && void 0 !== CH.faceIndex[EH] ? hH.push(CH.faceIndex[EH]) : hH.push(0), CH && CH.layerIndex && void 0 !== CH.layerIndex[EH] ? tH.push(CH.layerIndex[EH]) : tH.push(0), CH && CH.layerCounts && void 0 !== CH.layerCounts[EH] ? zH.push(CH.layerCounts[EH]) : zH.push(1)
      }
      _createInternaTextureIndexMapping() {
        const HH = {},
          BH = [];
        if (!this._renderTarget) return BH;
        const LH = this._renderTarget.textures;
        for (let AH = 0; AH < LH.length; AH++) {
          const rH = LH[AH];
          if (!rH) continue;
          const SH = HH[rH.uniqueId];
          void 0 !== SH ? BH[AH] = SH : HH[rH.uniqueId] = AH
        }
        return BH
      }
      _rebuild() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || HH) return;
        const AH = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), BH && (this._releaseTextures(), this._createTextures(LH));
        const rH = this._renderTarget.textures;
        for (let SH = 0; SH < rH.length; SH++) {
          const HH = this._textures[SH];
          void 0 !== AH[SH] && this._renderTarget.setTexture(rH[AH[SH]], SH), HH._texture = rH[SH], HH._texture && (HH._noMipmap = !HH._texture.useMipMaps, HH._useSRGBBuffer = HH._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let HH = 0; HH < this._textures.length; HH++) this._textures[HH]._texture = null, this._textures[HH].dispose()
      }
      _createTextures(HH) {
        const BH = this._renderTarget.textures;
        this._textures = [];
        for (let LH = 0; LH < BH.length; LH++) {
          const AH = new IH.g(null, this.yN());
          HH?.[LH] && (AH.name = HH[LH]), AH._texture = BH[LH], AH._texture && (AH._noMipmap = !AH._texture.useMipMaps, AH._useSRGBBuffer = AH._texture._useSRGBBuffer), this._textures.push(AH)
        }
      }
      setInternalTexture(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === BH && (this._texture = HH), this.renderTarget.setTexture(HH, BH, LH), this.textures[BH] || (this.textures[BH] = new IH.g(null, this.yN()), this.textures[BH].name = this._textureNames?.[BH] ?? this.textures[BH].name), this.textures[BH]._texture = HH, this.textures[BH]._noMipmap = !HH.useMipMaps, this.textures[BH]._useSRGBBuffer = HH._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[BH] = HH.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[BH] = HH.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[BH] = HH._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[BH])) {
          let LH;
          LH = HH.is2DArray ? 35866 : HH.isCube ? 34067 : HH.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[BH] = LH
        }
      }
      setLayerAndFaceIndex(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[HH] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[HH] = BH), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[HH] = LH), this.renderTarget.setLayerAndFaceIndex(HH, BH, LH))
      }
      setLayerAndFaceIndices(HH, BH) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = HH, this._multiRenderTargetOptions.faceIndex = BH, this.renderTarget.setLayerAndFaceIndices(HH, BH))
      }
      get samples() {
        return this._samples
      }
      set samples(HH) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(HH) : this._samples = HH
      }
      resize(HH) {
        this._processSizeParameter(HH), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(HH, BH, LH) {
        this._multiRenderTargetOptions.wtH = HH, this._count = HH;
        const AH = [],
          rH = [],
          SH = [],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [];
        this._textureNames = LH, this._initTypes(HH, AH, rH, SH, hH, tH, zH, CH, EH, BH), this._multiRenderTargetOptions.types = AH, this._multiRenderTargetOptions.samplingModes = rH, this._multiRenderTargetOptions.useSRGBBuffers = SH, this._multiRenderTargetOptions.formats = hH, this._multiRenderTargetOptions.targetTypes = tH, this._multiRenderTargetOptions.faceIndex = zH, this._multiRenderTargetOptions.layerIndex = CH, this._multiRenderTargetOptions.layerCounts = EH, this._multiRenderTargetOptions.labels = LH, this._rebuild(!1, !0, LH)
      }
      _unbindFrameBuffer(HH, BH) {
        this._renderTarget && HH.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(BH)
        }))
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), HH ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const HH = this._renderTarget?.textures;
        if (HH) {
          for (let BH = HH.length - 1; BH >= 0; BH--) this._textures[BH]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var cB = LH(41456);
    class eB {
      constructor(HH) {
        this.name = cB.b.NAME_GEOMETRYBUFFERRENDERER, this.NQ = HH
      }
      register() {
        this.NQ._gatherRenderTargetsStage.registerStep(cB.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(HH) {
        this.NQ._geometryBufferRenderer && HH.push(this.NQ._geometryBufferRenderer.getGBuffer())
      }
    }
    let qB = !1;
    var gB;
    ! function(HH) {
      HH[HH.Small = 0] = "Small", HH[HH.Medium = 1] = "Medium", HH[HH.Large = 2] = "Large", HH[HH.ExtraLarge = 3] = "ExtraLarge"
    }(gB || (gB = {}));
    const NB = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      RB = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class jB {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(HH) {
        if (HH && this._enableMeshBlendTag && !this._scene.Iu().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = HH
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(HH) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = HH, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(HH, BH) {
        HH === jB.POSITION_TEXTURE_TYPE ? (this._positionIndex = BH, this._enablePosition = !0) : HH === jB.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = BH, this._enableVelocity = !0) : HH === jB.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = BH, this._enableVelocityLinear = !0) : HH === jB.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = BH, this._enableReflectivity = !0) : HH === jB.DEPTH_TEXTURE_TYPE ? (this._depthIndex = BH, this._enableDepth = !0) : HH === jB.NORMAL_TEXTURE_TYPE ? (this._normalIndex = BH, this._enableNormal = !0) : HH === jB.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = BH, this._enableScreenspaceDepth = !0) : HH === jB.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = BH, this._enableIrradiance = !0) : HH === jB.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = BH, this._enableObjectId = !0) : HH === jB.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = BH, this._enableMeshBlendTag = !0)
      }
      _setAttachments(HH) {
        this._attachmentsFromPrePass = HH
      }
      _linkInternalTexture(HH) {
        this._multiRenderTarget.setInternalTexture(HH, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(HH) {
        this._multiRenderTarget.renderList = HH
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(HH) {
        switch (HH) {
          case jB.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case jB.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case jB.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case jB.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case jB.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case jB.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case jB.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case jB.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case jB.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case jB.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(HH) {
        this._enableDepth = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(HH) {
        this._enableNormal = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(HH) {
        this._enablePosition = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(HH) {
        this._enableVelocity = HH, HH || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = HH
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(HH) {
        this._enableVelocityLinear = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(HH) {
        this._enableReflectivity = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(HH) {
        this._enableScreenspaceDepth = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(HH) {
        this._enableIrradiance = HH, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(HH) {
        if (HH && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (HH && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (HH && !this._enableObjectId && !this._linkedWithPrePass) {
          const HH = this._scene.Iu(),
            BH = Math.min(HH.getCaps().maxDrawBuffers ?? 1, 8),
            LH = this._assignRenderTargetIndices()[0] + 1;
          if (HH.getCaps().drawBuffersExtension && LH > BH) throw new Error(`GeometryBufferRenderer: ${LH} color attachments were requested, but this engine supports at most ${BH}`)
        }
        this._enableObjectId = HH, HH || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(HH) {
        if (this._enableMeshBlendTag !== HH) {
          if (HH) {
            const HH = this._scene.Iu();
            if (! function(HH) {
                return "NATIVE" !== HH.shaderPlatformName && (HH.isWebGPU || 2 === HH.hQ)
              }(HH)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !HH.isWebGPU && !HH.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const BH = Math.min(HH.getCaps().maxDrawBuffers ?? 1, 8),
                LH = this._assignRenderTargetIndices()[0] + 1;
              if (HH.getCaps().drawBuffersExtension && LH > BH) throw new Error(`GeometryBufferRenderer: ${LH} color attachments were requested, but this engine supports at most ${BH}`)
            }
          }
          this._enableMeshBlendTag = HH, HH || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get NQ() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        var rH;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ZH.g(0, 0, 0, 0), this._clearDepthColor = new ZH.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = HH, this._ratioOrDimensions = BH, this._useUbo = HH.Iu().supportsUniformBuffers, this._depthFormat = LH, this._textureTypesAndFormats = AH || {}, this._initShaderSourceAsync(), rH = jB, qB || (qB = !0, Object.defineProperty(gH.d.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(HH) {
            HH && HH.isSupported && (this._geometryBufferRenderer = HH)
          },
          enumerable: !0,
          configurable: !0
        }), gH.d.prototype.enableGeometryBufferRenderer = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            LH = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new rH(this, HH, BH, LH), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, gH.d.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, rH._SceneComponentInitialization = HH => {
          let BH = HH._getComponent(cB.b.NAME_GEOMETRYBUFFERRENDERER);
          BH || (BH = new eB(HH), HH.SrH(BH))
        }), jB._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Iu().isWebGPU && !jB.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([LH.e(646).then((() => LH(64684))), Promise.all([LH.e(645), LH.e(657)]).then((() => LH(64690)))])) : await Promise.all([LH.e(629).then((() => LH(64694))), LH.e(628).then((() => LH(64700)))]), this._shadersLoaded = !0
      }
      isReady(HH, BH) {
        if (!this._shadersLoaded) return !1;
        const LH = HH.eu();
        if (LH && LH.disableDepthWrite) return !1;
        if (function(HH) {
            return HH._isGaussianSplatting || "GaussianSplattingMesh" === (BH = HH.getClassName()) || "GaussianSplattingStream" === BH;
            var BH
          }(HH.getMesh())) return !1;
        const AH = [],
          rH = [RH.i.PositionKind],
          SH = HH.getMesh();
        SH.isVerticesDataPresent(RH.i.NormalKind) && (AH.push("#define HAS_NORMAL_ATTRIBUTE"), rH.push(RH.i.NormalKind));
        let hH = !1,
          tH = !1;
        if (LH) {
          let HH = !1;
          if (LH.needAlphaTestingForMesh(SH) && LH.getAlphaTestTexture() && (AH.push("#define ALPHATEST"), AH.push(`#define ALPHATEST_UV${LH.getAlphaTestTexture().coordinatesIndex+1}`), HH = !0), (LH.bumpTexture || LH.normalTexture || LH.geometryNormalTexture) && JH.e.BumpTextureEnabled) {
            const BH = LH.bumpTexture || LH.normalTexture || LH.geometryNormalTexture;
            AH.push("#define BUMP"), AH.push(`#define BUMP_UV${BH.coordinatesIndex+1}`), HH = !0
          }
          if (this._enableReflectivity) {
            let BH = !1;
            if ("PBRMetallicRoughnessMaterial" === LH.getClassName()) LH.metallicRoughnessTexture && (AH.push("#define ORMTEXTURE"), AH.push(`#define REFLECTIVITY_UV${LH.metallicRoughnessTexture.coordinatesIndex+1}`), AH.push("#define METALLICWORKFLOW"), HH = !0, BH = !0), null != LH.metallic && (AH.push("#define METALLIC"), AH.push("#define METALLICWORKFLOW"), BH = !0), null != LH.roughness && (AH.push("#define ROUGHNESS"), AH.push("#define METALLICWORKFLOW"), BH = !0), BH && (LH.baseTexture && (AH.push("#define ALBEDOTEXTURE"), AH.push(`#define ALBEDO_UV${LH.baseTexture.coordinatesIndex+1}`), LH.baseTexture.gammaSpace && AH.push("#define GAMMAALBEDO"), HH = !0), LH.baseColor && AH.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === LH.getClassName()) LH.specularGlossinessTexture ? (AH.push("#define SPECULARGLOSSINESSTEXTURE"), AH.push(`#define REFLECTIVITY_UV${LH.specularGlossinessTexture.coordinatesIndex+1}`), HH = !0, LH.specularGlossinessTexture.gammaSpace && AH.push("#define GAMMAREFLECTIVITYTEXTURE")) : LH.specularColor && AH.push("#define REFLECTIVITYCOLOR"), null != LH.glossiness && AH.push("#define GLOSSINESS");
            else if ("PBRMaterial" === LH.getClassName()) LH.metallicTexture && (AH.push("#define ORMTEXTURE"), AH.push(`#define REFLECTIVITY_UV${LH.metallicTexture.coordinatesIndex+1}`), AH.push("#define METALLICWORKFLOW"), HH = !0, BH = !0), null != LH.metallic && (AH.push("#define METALLIC"), AH.push("#define METALLICWORKFLOW"), BH = !0), null != LH.roughness && (AH.push("#define ROUGHNESS"), AH.push("#define METALLICWORKFLOW"), BH = !0), BH ? (LH.albedoTexture && (AH.push("#define ALBEDOTEXTURE"), AH.push(`#define ALBEDO_UV${LH.albedoTexture.coordinatesIndex+1}`), LH.albedoTexture.gammaSpace && AH.push("#define GAMMAALBEDO"), HH = !0), LH.albedoColor && AH.push("#define ALBEDOCOLOR")) : (LH.reflectivityTexture ? (AH.push("#define SPECULARGLOSSINESSTEXTURE"), AH.push(`#define REFLECTIVITY_UV${LH.reflectivityTexture.coordinatesIndex+1}`), LH.reflectivityTexture.gammaSpace && AH.push("#define GAMMAREFLECTIVITYTEXTURE"), HH = !0) : LH.reflectivityColor && AH.push("#define REFLECTIVITYCOLOR"), null != LH.microSurface && AH.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === LH.getClassName()) LH.specularTexture && (AH.push("#define REFLECTIVITYTEXTURE"), AH.push(`#define REFLECTIVITY_UV${LH.specularTexture.coordinatesIndex+1}`), LH.specularTexture.gammaSpace && AH.push("#define GAMMAREFLECTIVITYTEXTURE"), HH = !0), LH.specularColor && AH.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === LH.getClassName()) {
              const BH = LH;
              AH.push("#define METALLIC"), AH.push("#define ROUGHNESS"), BH._useRoughnessFromMetallicTextureGreen && BH.baseMetalnessTexture ? (AH.push("#define ORMTEXTURE"), AH.push(`#define REFLECTIVITY_UV${BH.baseMetalnessTexture.coordinatesIndex+1}`), HH = !0) : BH.baseMetalnessTexture ? (AH.push("#define METALLIC_TEXTURE"), AH.push(`#define METALLIC_UV${BH.baseMetalnessTexture.coordinatesIndex+1}`), HH = !0) : BH.specularRoughnessTexture && (AH.push("#define ROUGHNESS_TEXTURE"), AH.push(`#define ROUGHNESS_UV${BH.specularRoughnessTexture.coordinatesIndex+1}`), HH = !0), BH.baseColorTexture && (AH.push("#define ALBEDOTEXTURE"), AH.push(`#define ALBEDO_UV${BH.baseColorTexture.coordinatesIndex+1}`), BH.baseColorTexture.gammaSpace && AH.push("#define GAMMAALBEDO"), HH = !0), BH.baseColor && AH.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (AH.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === LH.getClassName())) {
            const BH = LH;
            BH.subsurfaceWeight > 0 && BH.subsurfaceWeightTexture && (AH.push("#define SUBSURFACE_WEIGHT"), AH.push(`#define SUBSURFACEWEIGHT_UV${BH.subsurfaceWeightTexture.coordinatesIndex+1}`), HH = !0), BH.transmissionWeight > 0 && BH.transmissionWeightTexture && (AH.push("#define TRANSMISSION_WEIGHT"), AH.push(`#define TRANSMISSIONWEIGHT_UV${BH.transmissionWeightTexture.coordinatesIndex+1}`), HH = !0)
          }
          HH && (AH.push("#define NEED_UV"), SH.isVerticesDataPresent(RH.i.UVKind) && (rH.push(RH.i.UVKind), AH.push("#define UV1"), hH = !0), SH.isVerticesDataPresent(RH.i.UV2Kind) && (rH.push(RH.i.UV2Kind), AH.push("#define UV2"), tH = !0))
        }
        if (this._enableDepth && (AH.push("#define DEPTH"), AH.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (AH.push("#define NORMAL"), AH.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (AH.push("#define POSITION"), AH.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (AH.push("#define VELOCITY"), AH.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(SH) && AH.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (AH.push("#define VELOCITY_LINEAR"), AH.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(SH) && AH.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (AH.push("#define REFLECTIVITY"), AH.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (AH.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), AH.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          AH.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), AH.push("#define IRRADIANCE");
          const HH = this._scene;
          if (HH.environmentTexture) {
            const BH = {};
            let rH = !1,
              SH = 0;
            "OpenPBRMaterial" !== LH.getClassName() && "StandardMaterial" !== LH.getClassName() && "PBRMetallicRoughnessMaterial" !== LH.getClassName() && "PBRSpecularGlossinessMaterial" !== LH.getClassName() && "PBRMaterial" !== LH.getClassName() || (rH = !!LH.realtimeFiltering, SH = LH.realtimeFilteringQuality || 0), (0, pH.R)(HH, HH.environmentTexture, BH, rH, SH, !0);
            for (const HH in BH) BH[HH] && AH.push("#define " + HH);
            BH.USEIRRADIANCEMAP || AH.push("#define SPHERICAL_HARMONICS");
            const hH = HH.postProcessRenderPipelineManager.supportedPipelines.find((HH => "IBLShadowsRenderPipeline" === HH.getClassName()));
            if (hH) {
              const HH = hH;
              HH._getAccumulatedTexture() && (AH.push("#define IBL_SHADOW_TEXTURE"), HH.coloredShadows && AH.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (AH.push("#define OBJECT_ID"), AH.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (AH.push("#define MESH_BLEND_TAG"), AH.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && AH.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && AH.push("#define ENCODE_NORMAL"), SH.useBones && SH.computeBonesUsingShaders && SH.skeleton ? (rH.push(RH.i.MatricesIndicesKind), rH.push(RH.i.MatricesWeightsKind), SH.numBoneInfluencers > 4 && (rH.push(RH.i.MatricesIndicesExtraKind), rH.push(RH.i.MatricesWeightsExtraKind)), AH.push("#define NUM_BONE_INFLUENCERS " + SH.numBoneInfluencers), AH.push("#define BONETEXTURE " + SH.skeleton.isUsingTextureForMatrices), AH.push("#define BonesPerMesh " + (SH.skeleton.bones.length + 1))) : (AH.push("#define NUM_BONE_INFLUENCERS 0"), AH.push("#define BONETEXTURE false"), AH.push("#define BonesPerMesh 0"));
        const zH = SH.morphTargetManager ? (0, pH.H)(SH.morphTargetManager, AH, rH, SH, !0, !0, !1, hH, tH, !1) : 0;
        BH && (AH.push("#define INSTANCES"), (0, pH.kb)(rH, this._enableVelocity || this._enableVelocityLinear), HH.getRenderingMesh().hasThinInstances && AH.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? AH.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : AH.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, EB.i)(LH, this._scene, AH);
        const CH = this._scene.Iu(),
          EH = HH._getDrawWrapper(void 0, !0),
          XH = EH.defines,
          GH = AH.join("\n");
        return XH !== GH && EH.setEffect(CH.createEffect("geometry", {
          attributes: rH,
          uniformsNames: RB,
          samplers: NB,
          defines: GH,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: zH
          },
          shaderLanguage: this.shaderLanguage
        }, CH), GH), EH.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(HH) {
        if (this._enableObjectId && 1 !== HH) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== HH) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = HH
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Iu().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.NQ.Iu()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.NQ.Iu().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const HH = [],
          BH = [];
        let LH = 0;
        return this._enableDepth && (this._depthIndex = LH, LH++, HH.push("gBuffer_Depth"), BH.push(this._textureTypesAndFormats[jB.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = LH, LH++, HH.push("gBuffer_Normal"), BH.push(this._textureTypesAndFormats[jB.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = LH, LH++, HH.push("gBuffer_Position"), BH.push(this._textureTypesAndFormats[jB.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = LH, LH++, HH.push("gBuffer_Velocity"), BH.push(this._textureTypesAndFormats[jB.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = LH, LH++, HH.push("gBuffer_VelocityLinear"), BH.push(this._textureTypesAndFormats[jB.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = LH, LH++, HH.push("gBuffer_Reflectivity"), BH.push(this._textureTypesAndFormats[jB.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = LH, LH++, HH.push("gBuffer_ScreenspaceDepth"), BH.push(this._textureTypesAndFormats[jB.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = LH, LH++, HH.push("gBuffer_Irradiance"), BH.push(this._textureTypesAndFormats[jB.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = LH, LH++, HH.push("gBuffer_ObjectId"), BH.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = LH, LH++, HH.push("gBuffer_MeshBlendTag"), BH.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [LH, HH, BH]
      }
      _createRenderTargets() {
        const HH = this._scene.Iu(),
          [BH, LH, AH] = this._assignRenderTargetIndices(),
          rH = Math.min(HH.getCaps().maxDrawBuffers ?? 1, 8);
        if (HH.getCaps().drawBuffersExtension && BH > rH) throw new Error(`GeometryBufferRenderer: ${BH} color attachments were requested, but this engine supports at most ${rH}`);
        let hH = 0;
        HH._caps.textureFloat && HH._caps.textureFloatLinearFiltering ? hH = 1 : HH._caps.textureHalfFloat && HH._caps.textureHalfFloatLinearFiltering && (hH = 2);
        const tH = this._getRenderTargetDimensions(),
          zH = [],
          CH = [],
          EH = [];
        for (const SH of AH) SH ? (zH.push(SH.textureType), CH.push(SH.textureFormat), EH.push(SH.samplingMode ?? 2)) : (zH.push(hH), CH.push(5), EH.push(2));
        if (this._normalsAreUnsigned = 11 === zH[jB.NORMAL_TEXTURE_TYPE] || 13 === zH[jB.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new KB("gBuffer", tH, BH, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: zH,
            formats: CH,
            samplingModes: EH,
            depthTextureFormat: this._depthFormat
          }, LH.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = IH.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = IH.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const XH = [!0],
          GH = [!1],
          YH = [!0];
        for (let SH = 1; SH < BH; ++SH) XH.push(!0), YH.push(!1), GH.push(!0);
        const uH = HH.buildTextureLayout(XH),
          QH = HH.buildTextureLayout(GH),
          WH = HH.buildTextureLayout(YH);
        this._multiRenderTarget.onClearObservable.add((HH => {
          const BH = this.useSpecificClearForDepthTexture ? QH : uH;
          HH.clearAttachments(this._clearColor, BH, !0, !0, !0), this.useSpecificClearForDepthTexture && HH.clearAttachments(this._clearDepthColor, WH, !0, !1, !1), HH.bindAttachments(uH)
        })), this._resizeObserver = HH.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const MH = HH => {
          const BH = HH.getRenderingMesh(),
            LH = HH.getEffectiveMesh(),
            AH = this._scene,
            rH = AH.Iu(),
            hH = HH.eu();
          if (!hH) return;
          if (LH._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[LH.uniqueId] && (this._previousTransformationMatrices[LH.uniqueId] = {
              cX: NH.e.Identity(),
              viewProjection: AH.getTransformMatrix()
            }, BH.skeleton)) {
            const HH = BH.skeleton.getTransformMatrices(BH);
            this._previousBonesTransformationMatrices[BH.uniqueId] = this._copyBonesTransformationMatrices(HH, new Float32Array(HH.length))
          }
          const tH = BH._getInstancesRenderList(HH._id, !!HH.getReplacementMesh());
          if (tH.mustReturn) return;
          const zH = rH.getCaps().instancedArrays && (null !== tH.visibleInstances[HH._id] || BH.hasThinInstances),
            CH = LH.getWorldMatrix();
          if (this.isReady(HH, zH)) {
            const EH = HH._getDrawWrapper();
            if (!EH) return;
            const XH = EH.effect;
            let GH;
            rH.enableEffect(EH), zH || BH._bind(HH, XH, hH.fillMode), this._useUbo ? ((0, pH.t)(XH, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (XH.setMatrix("viewProjection", AH.getTransformMatrix()), XH.setMatrix("view", AH.getViewMatrix()), this._scene.bindEyePosition(XH, "vEyePosition"));
            if (BH._instanceDataStorage.isFrozen || !hH.backFaceCulling && null === hH.sideOrientation) GH = BH._effectiveSideOrientation;
            else {
              const HH = LH._getWorldMatrixDeterminant();
              GH = hH._getEffectiveOrientation(BH), HH < 0 && (GH = GH === SH.c.ClockWiseSideOrientation ? SH.c.CounterClockWiseSideOrientation : SH.c.ClockWiseSideOrientation)
            }
            if (hH._preBind(EH, GH), hH.needAlphaTestingForMesh(LH)) {
              const HH = hH.getAlphaTestTexture();
              HH && (XH.setTexture("diffuseSampler", HH), XH.setMatrix("diffuseMatrix", HH.getTextureMatrix()), XH.setFloat("alphaCutOff", hH.alphaCutOff ?? .4))
            }
            if ((hH.bumpTexture || hH.normalTexture || hH.geometryNormalTexture) && AH.Iu().getCaps().standardDerivatives && JH.e.BumpTextureEnabled) {
              const HH = hH.bumpTexture || hH.normalTexture || hH.geometryNormalTexture;
              XH.setFloat3("vBumpInfos", HH.coordinatesIndex, 1 / HH.level, hH.parallaxScaleBias), XH.setMatrix("bumpMatrix", HH.getTextureMatrix()), XH.setTexture("bumpSampler", HH), XH.setFloat2("vTangentSpaceParams", hH.invertNormalMapX ? -1 : 1, hH.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === hH.getClassName()) null !== hH.metallicRoughnessTexture && (XH.setTexture("reflectivitySampler", hH.metallicRoughnessTexture), XH.setMatrix("reflectivityMatrix", hH.metallicRoughnessTexture.getTextureMatrix())), null !== hH.metallic && XH.setFloat("metallic", hH.metallic), null !== hH.roughness && XH.setFloat("glossiness", 1 - hH.roughness), null !== hH.baseTexture && (XH.setTexture("albedoSampler", hH.baseTexture), XH.setMatrix("albedoMatrix", hH.baseTexture.getTextureMatrix())), null !== hH.baseColor && XH.setColor3("albedoColor", hH.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === hH.getClassName()) null !== hH.specularGlossinessTexture ? (XH.setTexture("reflectivitySampler", hH.specularGlossinessTexture), XH.setMatrix("reflectivityMatrix", hH.specularGlossinessTexture.getTextureMatrix())) : null !== hH.specularColor && XH.setColor3("reflectivityColor", hH.specularColor), null !== hH.glossiness && XH.setFloat("glossiness", hH.glossiness);
            else if ("PBRMaterial" === hH.getClassName()) null !== hH.metallicTexture && (XH.setTexture("reflectivitySampler", hH.metallicTexture), XH.setMatrix("reflectivityMatrix", hH.metallicTexture.getTextureMatrix())), null !== hH.metallic && XH.setFloat("metallic", hH.metallic), null !== hH.roughness && XH.setFloat("glossiness", 1 - hH.roughness), null !== hH.roughness || null !== hH.metallic || null !== hH.metallicTexture ? (null !== hH.albedoTexture && (XH.setTexture("albedoSampler", hH.albedoTexture), XH.setMatrix("albedoMatrix", hH.albedoTexture.getTextureMatrix())), null !== hH.albedoColor && XH.setColor3("albedoColor", hH.albedoColor)) : (null !== hH.reflectivityTexture ? (XH.setTexture("reflectivitySampler", hH.reflectivityTexture), XH.setMatrix("reflectivityMatrix", hH.reflectivityTexture.getTextureMatrix())) : null !== hH.reflectivityColor && XH.setColor3("reflectivityColor", hH.reflectivityColor), null !== hH.microSurface && XH.setFloat("glossiness", hH.microSurface));
            else if ("StandardMaterial" === hH.getClassName()) null !== hH.specularTexture && (XH.setTexture("reflectivitySampler", hH.specularTexture), XH.setMatrix("reflectivityMatrix", hH.specularTexture.getTextureMatrix())), null !== hH.specularColor && XH.setColor3("reflectivityColor", hH.specularColor);
            else if ("OpenPBRMaterial" === hH.getClassName()) {
              const HH = hH;
              HH._useRoughnessFromMetallicTextureGreen && HH.baseMetalnessTexture ? (XH.setTexture("reflectivitySampler", HH.baseMetalnessTexture), XH.setMatrix("reflectivityMatrix", HH.baseMetalnessTexture.getTextureMatrix())) : HH.baseMetalnessTexture ? (XH.setTexture("metallicSampler", HH.baseMetalnessTexture), XH.setMatrix("metallicMatrix", HH.baseMetalnessTexture.getTextureMatrix())) : HH.specularRoughnessTexture && (XH.setTexture("roughnessSampler", HH.specularRoughnessTexture), XH.setMatrix("roughnessMatrix", HH.specularRoughnessTexture.getTextureMatrix())), XH.setFloat("metallic", HH.baseMetalness), XH.setFloat("glossiness", 1 - HH.specularRoughness), null !== HH.baseColorTexture && (XH.setTexture("albedoSampler", HH.baseColorTexture), XH.setMatrix("albedoMatrix", HH.baseColorTexture.getTextureMatrix())), null !== HH.baseColor && XH.setColor3("albedoColor", HH.baseColor)
            }
            if (this._enableIrradiance && AH.environmentTexture) {
              const HH = AH.environmentTexture,
                BH = AH.postProcessRenderPipelineManager.supportedPipelines.find((HH => "IBLShadowsRenderPipeline" === HH.getClassName()));
              if (BH) {
                const HH = BH._getAccumulatedTexture();
                HH && (XH.setTexture("iblShadowSampler", HH), XH.setFloat2("shadowTextureSize", HH.getSize().width, HH.getSize().height))
              }
              if (XH.setMatrix("reflectionMatrix", HH.getReflectionTextureMatrix()), XH.setFloat2("vReflectionInfos", HH.level * AH.iblIntensity, 0), XH.setTexture("reflectionSampler", HH), HH.irradianceTexture && (XH.setTexture("irradianceSampler", HH.irradianceTexture), HH.irradianceTexture._dominantDirection && XH.setVector3("vReflectionDominantDirection", HH.irradianceTexture._dominantDirection)), HH.sphericalPolynomial) {
                const BH = HH.sphericalPolynomial;
                if (BH.preScaledHarmonics) {
                  const HH = BH.preScaledHarmonics;
                  XH.setVector3("vSphericalL00", HH.l00), XH.setVector3("vSphericalL1_1", HH.l1_1), XH.setVector3("vSphericalL10", HH.l10), XH.setVector3("vSphericalL11", HH.l11), XH.setVector3("vSphericalL2_2", HH.l2_2), XH.setVector3("vSphericalL2_1", HH.l2_1), XH.setVector3("vSphericalL20", HH.l20), XH.setVector3("vSphericalL21", HH.l21), XH.setVector3("vSphericalL22", HH.l22)
                } else XH.setFloat3("vSphericalX", BH.x.x, BH.x.y, BH.x.z), XH.setFloat3("vSphericalY", BH.y.x, BH.y.y, BH.y.z), XH.setFloat3("vSphericalZ", BH.z.x, BH.z.y, BH.z.z), XH.setFloat3("vSphericalXX_ZZ", BH.xx.x - BH.zz.x, BH.xx.y - BH.zz.y, BH.xx.z - BH.zz.z), XH.setFloat3("vSphericalYY_ZZ", BH.yy.x - BH.zz.x, BH.yy.y - BH.zz.y, BH.yy.z - BH.zz.z), XH.setFloat3("vSphericalZZ", BH.zz.x, BH.zz.y, BH.zz.z), XH.setFloat3("vSphericalXY", BH.xy.x, BH.xy.y, BH.xy.z), XH.setFloat3("vSphericalYZ", BH.yz.x, BH.yz.y, BH.yz.z), XH.setFloat3("vSphericalZX", BH.zx.x, BH.zx.y, BH.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === hH.getClassName()) {
                const HH = hH;
                XH.setFloat("vSubsurfaceWeight", HH.subsurfaceWeight), HH.subsurfaceWeightTexture && (XH.setTexture("subsurfaceWeightSampler", HH.subsurfaceWeightTexture), XH.setMatrix("subsurfaceWeightMatrix", HH.subsurfaceWeightTexture.getTextureMatrix())), XH.setFloat("vTransmissionWeight", HH.transmissionWeight), HH.transmissionWeightTexture && (XH.setTexture("transmissionWeightSampler", HH.transmissionWeightTexture), XH.setMatrix("transmissionWeightMatrix", HH.transmissionWeightTexture.getTextureMatrix())), XH.setFloat("vTransmissionScatterAnisotropy", HH.transmissionScatterAnisotropy), XH.setFloat("vSubsurfaceScatterAnisotropy", HH.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, EB.d)(XH, hH, this._scene), BH.useBones && BH.computeBonesUsingShaders && BH.skeleton) {
              const HH = BH.skeleton;
              if (HH.isUsingTextureForMatrices && XH.getUniformIndex("boneTextureInfo") > -1) {
                const LH = HH.getTransformMatrixTexture(BH);
                XH.setTexture("boneSampler", LH), XH.setFloat2("boneTextureInfo", HH._textureWidth, HH._textureHeight)
              } else XH.setMatrices("mBones", BH.skeleton.getTransformMatrices(BH));
              (this._enableVelocity || this._enableVelocityLinear) && XH.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[BH.uniqueId])
            }
            if ((0, pH.r)(BH, XH), BH.morphTargetManager && BH.morphTargetManager.isUsingTextureForTargets && BH.morphTargetManager._bind(XH), (this._enableVelocity || this._enableVelocityLinear) && (XH.setMatrix("previousWorld", this._previousTransformationMatrices[LH.uniqueId].cX), XH.setMatrix("previousViewProjection", this._previousTransformationMatrices[LH.uniqueId].viewProjection)), this._enableObjectId) {
              let HH = BH.uniqueId;
              if (this.objectIdProvider) HH = (0, YB.m)(BH, this.objectIdProvider);
              else if (HH > 16777215) throw new Error(`Invalid geometry object ID ${HH} for mesh "${BH.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              XH.setFloat("objectId", HH)
            }
            if (this._enableMeshBlendTag) {
              const HH = this.meshBlendTagProvider ? (0, YB.i)(BH, this.meshBlendTagProvider) : BH.meshBlendingTag;
              XH.setInt("meshBlendTag", HH)
            }
            zH && BH.hasThinInstances && XH.setMatrix("world", CH), BH._processRendering(LH, HH, XH, hH.fillMode, tH, zH, ((HH, BH) => {
              HH || XH.setMatrix("world", BH)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[LH.uniqueId].cX = CH.clone(), this._previousTransformationMatrices[LH.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), BH.skeleton && this._copyBonesTransformationMatrices(BH.skeleton.getTransformMatrices(BH), this._previousBonesTransformationMatrices[LH.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (BH, LH, AH) => {
          if ((AH || 0 === LH) && BH.jU)
            for (let rH = 0; rH < BH.jU.length; ++rH) {
              const LH = BH.jU[rH],
                AH = LH.eu(),
                SH = LH.getRenderingMesh();
              if (!AH) continue;
              const hH = SH._getInstancesRenderList(LH._id, !!LH.getReplacementMesh()),
                tH = HH.getCaps().instancedArrays && (null !== hH.visibleInstances[LH._id] || SH.hasThinInstances);
              if (!this.isReady(LH, tH)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (BH, LH, AH, rH) => {
          let SH;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Iu().bindAttachments(this._attachmentsFromPrePass)
          }
          if (rH.length) {
            for (HH.setColorWrite(!1), SH = 0; SH < rH.length; SH++) MH(rH.data[SH]);
            HH.setColorWrite(!0)
          }
          for (SH = 0; SH < BH.length; SH++) MH(BH.data[SH]);
          for (HH.setDepthWrite(!1), SH = 0; SH < LH.length; SH++) MH(LH.data[SH]);
          if (this.renderTransparentMeshes)
            for (SH = 0; SH < AH.length; SH++) MH(AH.data[SH]);
          HH.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const HH = this._scene.Iu();
        return {
          width: Math.max(1, Math.floor(HH.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(HH.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(HH, BH) {
        for (let LH = 0; LH < HH.length; LH++) BH[LH] = HH[LH];
        return BH
      }
    }
    jB.ForceGLSL = !1, jB.DEPTH_TEXTURE_TYPE = 0, jB.NORMAL_TEXTURE_TYPE = 1, jB.POSITION_TEXTURE_TYPE = 2, jB.VELOCITY_TEXTURE_TYPE = 3, jB.REFLECTIVITY_TEXTURE_TYPE = 4, jB.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, jB.VELOCITY_LINEAR_TEXTURE_TYPE = 6, jB.IRRADIANCE_TEXTURE_TYPE = 7, jB.OBJECT_ID_TEXTURE_TYPE = 8, jB.MESH_BLEND_TAG_TEXTURE_TYPE = 9, jB._SceneComponentInitialization = HH => {
      throw (0, MB.i)("GeometryBufferRendererSceneComponent")
    };
    var nB = LH(38012);
    const FB = {
      effect: null,
      subMesh: null
    };

    function DB(HH) {
      if ("number" === typeof HH) return 1;
      if (HH instanceof NH.n) return 2;
      if (HH instanceof NH.o || HH instanceof ZH.c) return 3;
      if (HH instanceof NH.q || HH instanceof ZH.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class wB {
      populateVectorFromLinkedProperties(HH) {
        const BH = DB(HH);
        for (const LH in this.linkedProperties) {
          const HH = this.linkedProperties[LH],
            AH = HH.numComponents;
          if (BH < AH || HH.targetUniformComponentOffset > BH - AH) return void(1 == AH ? mH.e.Error(`Float property ${HH.name} has an offset that is too large.`) : mH.e.Error(`Vector${AH} property ${HH.name} won't fit in Vector${BH} or has an offset that is too large.`));
          "number" === typeof HH.value ? wB._tmpArray[HH.targetUniformComponentOffset] = HH.value : HH.value.toArray(wB._tmpArray, HH.targetUniformComponentOffset)
        }
        HH.SX(wB._tmpArray)
      }
      constructor(HH, BH) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = HH, this.numComponents = BH
      }
    }
    wB._tmpArray = [0, 0, 0, 0];
    class ZB {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = HH, this.targetUniformName = LH, this.defaultValue = BH, this.value = BH, this.targetUniformComponentNum = AH, this.targetUniformComponentOffset = rH, this.requiredDefine = SH
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : DB(this.defaultValue)
      }
    }
    class dB {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(HH, BH, LH) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = HH, this.samplerPrefix = BH, this.textureDefine = LH
      }
    }
    class aB extends((0, QB.c)((0, uB.b)(jH.c))) {}
    class sB extends(function(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(aB)) {}
    class JB extends((0, dH.e)(sB)) {
      constructor(HH) {
        super(HH), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class iB extends((0, WB.b)(sH.b)) {}
    let pB = (() => {
        var HH, BH, AH, rH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, fH, lH, KH, cH, gH, jH, nH, FH, DH, dH, sH, yH, HB, BB, LB, AB, rB, SB, hB, tB, zB, CB, uB, QB, WB, MB, xB, vB, PB, TB, UB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, nB, DB, aB, sB, pB, yB, HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL, XL, GL, YL, uL, QL, WL, ML, xL, vL, PL, TL, UL, VL, OL, bL, kL, mL, oL;
        let IL, fL, lL, KL, cL, eL, qL, gL, NL, RL, jL, nL, FL, DL, wL, ZL, dL, aL, sL, JL, iL, pL, yL, HA, BA, LA, AA, rA, SA, hA, tA, zA, CA, EA, XA, GA, YA, uA, QA, WA, MA, xA, vA, PA, TA, UA, VA, OA, bA, kA, mA, oA, IA, fA, lA, KA, cA, eA, qA, gA, NA, RA, jA, nA, FA, DA, wA, ZA, dA, aA, sA, JA, iA, pA, yA, Hr, Br, Lr, Ar, rr, Sr, hr, tr, zr, Cr, Er, Xr, Gr, Yr, ur, Qr, Wr, Mr, xr, vr, Pr, Tr, Ur, Vr, Or, br, kr, mr, or, Ir, fr = iB,
          lr = [],
          Kr = [],
          cr = [],
          er = [],
          qr = [],
          gr = [],
          Nr = [],
          Rr = [],
          jr = [],
          nr = [],
          Fr = [],
          Dr = [],
          wr = [],
          Zr = [],
          dr = [],
          ar = [],
          sr = [],
          Jr = [],
          ir = [],
          pr = [],
          yr = [],
          HS = [],
          BS = [],
          LS = [],
          AS = [],
          rS = [],
          SS = [],
          hS = [],
          tS = [],
          zS = [],
          CS = [],
          ES = [],
          XS = [],
          GS = [],
          YS = [],
          uS = [],
          QS = [],
          WS = [],
          MS = [],
          xS = [],
          vS = [],
          PS = [],
          TS = [],
          US = [],
          VS = [],
          OS = [],
          bS = [],
          kS = [],
          mS = [],
          oS = [],
          IS = [],
          fS = [],
          lS = [],
          KS = [],
          cS = [],
          eS = [],
          qS = [],
          gS = [],
          NS = [],
          RS = [],
          jS = [],
          nS = [],
          FS = [],
          DS = [],
          wS = [],
          ZS = [],
          dS = [],
          aS = [],
          sS = [],
          JS = [],
          iS = [],
          pS = [],
          yS = [],
          Hh = [],
          Bh = [],
          Lh = [],
          Ah = [],
          rh = [],
          Sh = [],
          hh = [],
          th = [],
          zh = [],
          Ch = [],
          Eh = [],
          Xh = [],
          Gh = [],
          Yh = [],
          uh = [],
          Qh = [],
          Wh = [],
          Mh = [],
          xh = [],
          vh = [],
          Ph = [],
          Th = [],
          Uh = [],
          Vh = [],
          Oh = [],
          bh = [],
          kh = [],
          mh = [],
          oh = [],
          Ih = [],
          fh = [],
          lh = [],
          Kh = [],
          ch = [],
          eh = [],
          qh = [],
          gh = [],
          Nh = [],
          Rh = [],
          jh = [],
          nh = [],
          Fh = [],
          Dh = [],
          wh = [],
          Zh = [],
          dh = [],
          ah = [],
          sh = [],
          Jh = [],
          ih = [],
          ph = [],
          yh = [],
          Ht = [],
          Bt = [],
          Lt = [],
          At = [],
          rt = [],
          St = [],
          ht = [],
          tt = [],
          zt = [],
          Ct = [],
          Et = [],
          Xt = [],
          Gt = [],
          Yt = [],
          ut = [],
          Qt = [],
          Wt = [],
          Mt = [],
          xt = [],
          vt = [],
          Pt = [],
          Tt = [],
          Ut = [],
          Vt = [],
          Ot = [],
          bt = [],
          kt = [],
          mt = [],
          ot = [],
          It = [],
          ft = [],
          lt = [],
          Kt = [],
          ct = [],
          et = [],
          qt = [],
          gt = [],
          Nt = [],
          Rt = [],
          jt = [],
          nt = [],
          Ft = [],
          Dt = [],
          wt = [],
          Zt = [],
          dt = [],
          st = [],
          Jt = [],
          it = [],
          pt = [],
          yt = [],
          Hz = [],
          Bz = [],
          Lz = [],
          Az = [],
          rz = [],
          Sz = [],
          hz = [],
          tz = [],
          zz = [],
          Cz = [],
          Ez = [],
          Xz = [],
          Gz = [],
          Yz = [],
          uz = [],
          Qz = [],
          Wz = [],
          Mz = [],
          xz = [],
          vz = [],
          Pz = [],
          Tz = [],
          Uz = [],
          Vz = [],
          Oz = [],
          bz = [],
          kz = [],
          mz = [],
          oz = [];
        return HH = class extends fr {
          get baseWeight() {
            return (0, bH.e)(this, BH, "f")
          }
          set baseWeight(HH) {
            (0, bH.f)(this, BH, HH, "f")
          }
          get baseWeightTexture() {
            return (0, bH.e)(this, AH, "f")
          }
          set baseWeightTexture(HH) {
            (0, bH.f)(this, AH, HH, "f")
          }
          get baseColor() {
            return (0, bH.e)(this, rH, "f")
          }
          set baseColor(HH) {
            (0, bH.f)(this, rH, HH, "f")
          }
          get baseColorTexture() {
            return (0, bH.e)(this, hH, "f")
          }
          set baseColorTexture(HH) {
            (0, bH.f)(this, hH, HH, "f")
          }
          get baseDiffuseRoughness() {
            return (0, bH.e)(this, tH, "f")
          }
          set baseDiffuseRoughness(HH) {
            (0, bH.f)(this, tH, HH, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, bH.e)(this, zH, "f")
          }
          set baseDiffuseRoughnessTexture(HH) {
            (0, bH.f)(this, zH, HH, "f")
          }
          get baseMetalness() {
            return (0, bH.e)(this, CH, "f")
          }
          set baseMetalness(HH) {
            (0, bH.f)(this, CH, HH, "f")
          }
          get baseMetalnessTexture() {
            return (0, bH.e)(this, EH, "f")
          }
          set baseMetalnessTexture(HH) {
            (0, bH.f)(this, EH, HH, "f")
          }
          get specularWeight() {
            return (0, bH.e)(this, XH, "f")
          }
          set specularWeight(HH) {
            (0, bH.f)(this, XH, HH, "f")
          }
          get specularWeightTexture() {
            return (0, bH.e)(this, GH, "f")
          }
          set specularWeightTexture(HH) {
            (0, bH.f)(this, GH, HH, "f")
          }
          get specularColor() {
            return (0, bH.e)(this, YH, "f")
          }
          set specularColor(HH) {
            (0, bH.f)(this, YH, HH, "f")
          }
          get specularColorTexture() {
            return (0, bH.e)(this, uH, "f")
          }
          set specularColorTexture(HH) {
            (0, bH.f)(this, uH, HH, "f")
          }
          get specularRoughness() {
            return (0, bH.e)(this, QH, "f")
          }
          set specularRoughness(HH) {
            (0, bH.f)(this, QH, HH, "f")
          }
          get specularRoughnessTexture() {
            return (0, bH.e)(this, WH, "f")
          }
          set specularRoughnessTexture(HH) {
            (0, bH.f)(this, WH, HH, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, bH.e)(this, MH, "f")
          }
          set specularRoughnessAnisotropy(HH) {
            (0, bH.f)(this, MH, HH, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, bH.e)(this, xH, "f")
          }
          set specularRoughnessAnisotropyTexture(HH) {
            (0, bH.f)(this, xH, HH, "f")
          }
          get specularIor() {
            return (0, bH.e)(this, vH, "f")
          }
          set specularIor(HH) {
            (0, bH.f)(this, vH, HH, "f")
          }
          get transmissionWeight() {
            return (0, bH.e)(this, PH, "f")
          }
          set transmissionWeight(HH) {
            (0, bH.f)(this, PH, HH, "f")
          }
          get transmissionWeightTexture() {
            return (0, bH.e)(this, TH, "f")
          }
          set transmissionWeightTexture(HH) {
            (0, bH.f)(this, TH, HH, "f")
          }
          get transmissionColor() {
            return (0, bH.e)(this, UH, "f")
          }
          set transmissionColor(HH) {
            (0, bH.f)(this, UH, HH, "f")
          }
          get transmissionColorTexture() {
            return (0, bH.e)(this, VH, "f")
          }
          set transmissionColorTexture(HH) {
            (0, bH.f)(this, VH, HH, "f")
          }
          get transmissionDepth() {
            return (0, bH.e)(this, OH, "f")
          }
          set transmissionDepth(HH) {
            (0, bH.f)(this, OH, HH, "f")
          }
          get transmissionDepthTexture() {
            return (0, bH.e)(this, fH, "f")
          }
          set transmissionDepthTexture(HH) {
            (0, bH.f)(this, fH, HH, "f")
          }
          get transmissionScatter() {
            return (0, bH.e)(this, lH, "f")
          }
          set transmissionScatter(HH) {
            (0, bH.f)(this, lH, HH, "f")
          }
          get transmissionScatterTexture() {
            return (0, bH.e)(this, KH, "f")
          }
          set transmissionScatterTexture(HH) {
            (0, bH.f)(this, KH, HH, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, bH.e)(this, cH, "f")
          }
          set transmissionScatterAnisotropy(HH) {
            (0, bH.f)(this, cH, HH, "f")
          }
          get transmissionDispersionScale() {
            return (0, bH.e)(this, gH, "f")
          }
          set transmissionDispersionScale(HH) {
            (0, bH.f)(this, gH, HH, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, bH.e)(this, jH, "f")
          }
          set transmissionDispersionScaleTexture(HH) {
            (0, bH.f)(this, jH, HH, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, bH.e)(this, nH, "f")
          }
          set transmissionDispersionAbbeNumber(HH) {
            (0, bH.f)(this, nH, HH, "f")
          }
          get subsurfaceWeight() {
            return (0, bH.e)(this, FH, "f")
          }
          set subsurfaceWeight(HH) {
            (0, bH.f)(this, FH, HH, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, bH.e)(this, DH, "f")
          }
          set subsurfaceWeightTexture(HH) {
            (0, bH.f)(this, DH, HH, "f")
          }
          get subsurfaceColor() {
            return (0, bH.e)(this, dH, "f")
          }
          set subsurfaceColor(HH) {
            (0, bH.f)(this, dH, HH, "f")
          }
          get subsurfaceColorTexture() {
            return (0, bH.e)(this, sH, "f")
          }
          set subsurfaceColorTexture(HH) {
            (0, bH.f)(this, sH, HH, "f")
          }
          get subsurfaceRadius() {
            return (0, bH.e)(this, yH, "f")
          }
          set subsurfaceRadius(HH) {
            (0, bH.f)(this, yH, HH, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, bH.e)(this, HB, "f")
          }
          set subsurfaceRadiusScale(HH) {
            (0, bH.f)(this, HB, HH, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, bH.e)(this, BB, "f")
          }
          set subsurfaceRadiusScaleTexture(HH) {
            (0, bH.f)(this, BB, HH, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, bH.e)(this, LB, "f")
          }
          set subsurfaceScatterAnisotropy(HH) {
            (0, bH.f)(this, LB, HH, "f")
          }
          get coatWeight() {
            return (0, bH.e)(this, AB, "f")
          }
          set coatWeight(HH) {
            (0, bH.f)(this, AB, HH, "f")
          }
          get coatWeightTexture() {
            return (0, bH.e)(this, rB, "f")
          }
          set coatWeightTexture(HH) {
            (0, bH.f)(this, rB, HH, "f")
          }
          get coatColor() {
            return (0, bH.e)(this, SB, "f")
          }
          set coatColor(HH) {
            (0, bH.f)(this, SB, HH, "f")
          }
          get coatColorTexture() {
            return (0, bH.e)(this, hB, "f")
          }
          set coatColorTexture(HH) {
            (0, bH.f)(this, hB, HH, "f")
          }
          get coatRoughness() {
            return (0, bH.e)(this, tB, "f")
          }
          set coatRoughness(HH) {
            (0, bH.f)(this, tB, HH, "f")
          }
          get coatRoughnessTexture() {
            return (0, bH.e)(this, zB, "f")
          }
          set coatRoughnessTexture(HH) {
            (0, bH.f)(this, zB, HH, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, bH.e)(this, CB, "f")
          }
          set coatRoughnessAnisotropy(HH) {
            (0, bH.f)(this, CB, HH, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, bH.e)(this, uB, "f")
          }
          set coatRoughnessAnisotropyTexture(HH) {
            (0, bH.f)(this, uB, HH, "f")
          }
          get coatIor() {
            return (0, bH.e)(this, QB, "f")
          }
          set coatIor(HH) {
            (0, bH.f)(this, QB, HH, "f")
          }
          get coatDarkening() {
            return (0, bH.e)(this, WB, "f")
          }
          set coatDarkening(HH) {
            (0, bH.f)(this, WB, HH, "f")
          }
          get coatDarkeningTexture() {
            return (0, bH.e)(this, MB, "f")
          }
          set coatDarkeningTexture(HH) {
            (0, bH.f)(this, MB, HH, "f")
          }
          get fuzzWeight() {
            return (0, bH.e)(this, xB, "f")
          }
          set fuzzWeight(HH) {
            (0, bH.f)(this, xB, HH, "f")
          }
          get fuzzWeightTexture() {
            return (0, bH.e)(this, vB, "f")
          }
          set fuzzWeightTexture(HH) {
            (0, bH.f)(this, vB, HH, "f")
          }
          get fuzzColor() {
            return (0, bH.e)(this, PB, "f")
          }
          set fuzzColor(HH) {
            (0, bH.f)(this, PB, HH, "f")
          }
          get fuzzColorTexture() {
            return (0, bH.e)(this, TB, "f")
          }
          set fuzzColorTexture(HH) {
            (0, bH.f)(this, TB, HH, "f")
          }
          get fuzzRoughness() {
            return (0, bH.e)(this, UB, "f")
          }
          set fuzzRoughness(HH) {
            (0, bH.f)(this, UB, HH, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, bH.e)(this, bB, "f")
          }
          set fuzzRoughnessTexture(HH) {
            (0, bH.f)(this, bB, HH, "f")
          }
          get geometryThinWalled() {
            return (0, bH.e)(this, kB, "f")
          }
          set geometryThinWalled(HH) {
            (0, bH.f)(this, kB, HH, "f")
          }
          get geometryNormalTexture() {
            return (0, bH.e)(this, mB, "f")
          }
          set geometryNormalTexture(HH) {
            (0, bH.f)(this, mB, HH, "f")
          }
          get geometryTangent() {
            return (0, bH.e)(this, oB, "f")
          }
          set geometryTangent(HH) {
            (0, bH.f)(this, oB, HH, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(HH) {
            this.geometryTangent = new NH.n(Math.cos(HH), Math.sin(HH))
          }
          get geometryTangentTexture() {
            return (0, bH.e)(this, IB, "f")
          }
          set geometryTangentTexture(HH) {
            (0, bH.f)(this, IB, HH, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, bH.e)(this, fB, "f")
          }
          set geometryCoatNormalTexture(HH) {
            (0, bH.f)(this, fB, HH, "f")
          }
          get geometryCoatTangent() {
            return (0, bH.e)(this, lB, "f")
          }
          set geometryCoatTangent(HH) {
            (0, bH.f)(this, lB, HH, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(HH) {
            this.geometryCoatTangent = new NH.n(Math.cos(HH), Math.sin(HH))
          }
          get geometryCoatTangentTexture() {
            return (0, bH.e)(this, KB, "f")
          }
          set geometryCoatTangentTexture(HH) {
            (0, bH.f)(this, KB, HH, "f")
          }
          get geometryOpacity() {
            return (0, bH.e)(this, cB, "f")
          }
          set geometryOpacity(HH) {
            (0, bH.f)(this, cB, HH, "f")
          }
          get geometryOpacityTexture() {
            return (0, bH.e)(this, eB, "f")
          }
          set geometryOpacityTexture(HH) {
            (0, bH.f)(this, eB, HH, "f")
          }
          get geometryThickness() {
            return (0, bH.e)(this, qB, "f")
          }
          set geometryThickness(HH) {
            (0, bH.f)(this, qB, HH, "f")
          }
          get geometryThicknessTexture() {
            return (0, bH.e)(this, gB, "f")
          }
          set geometryThicknessTexture(HH) {
            (0, bH.f)(this, gB, HH, "f")
          }
          get emissionLuminance() {
            return (0, bH.e)(this, NB, "f")
          }
          set emissionLuminance(HH) {
            (0, bH.f)(this, NB, HH, "f")
          }
          get emissionColor() {
            return (0, bH.e)(this, RB, "f")
          }
          set emissionColor(HH) {
            (0, bH.f)(this, RB, HH, "f")
          }
          get emissionColorTexture() {
            return (0, bH.e)(this, nB, "f")
          }
          set emissionColorTexture(HH) {
            (0, bH.f)(this, nB, HH, "f")
          }
          get thinFilmWeight() {
            return (0, bH.e)(this, DB, "f")
          }
          set thinFilmWeight(HH) {
            (0, bH.f)(this, DB, HH, "f")
          }
          get thinFilmWeightTexture() {
            return (0, bH.e)(this, aB, "f")
          }
          set thinFilmWeightTexture(HH) {
            (0, bH.f)(this, aB, HH, "f")
          }
          get thinFilmThickness() {
            return (0, bH.e)(this, sB, "f")
          }
          set thinFilmThickness(HH) {
            (0, bH.f)(this, sB, HH, "f")
          }
          get thinFilmThicknessMin() {
            return (0, bH.e)(this, pB, "f")
          }
          set thinFilmThicknessMin(HH) {
            (0, bH.f)(this, pB, HH, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, bH.e)(this, yB, "f")
          }
          set thinFilmThicknessTexture(HH) {
            (0, bH.f)(this, yB, HH, "f")
          }
          get thinFilmIor() {
            return (0, bH.e)(this, HL, "f")
          }
          set thinFilmIor(HH) {
            (0, bH.f)(this, HL, HH, "f")
          }
          get ambientOcclusionTexture() {
            return (0, bH.e)(this, BL, "f")
          }
          set ambientOcclusionTexture(HH) {
            (0, bH.f)(this, BL, HH, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(HH) {
            this._sssQuality !== HH && (this._sssQuality = HH, this.dLH(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(HH) {
            this._sssIrradianceTexture !== HH && (this._sssIrradianceTexture = HH, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(HH) {
            this._sssDepthTexture !== HH && (this._sssDepthTexture = HH, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, bH.e)(this, LL, "f")
          }
          set directIntensity(HH) {
            (0, bH.f)(this, LL, HH, "f")
          }
          get environmentIntensity() {
            return (0, bH.e)(this, AL, "f")
          }
          set environmentIntensity(HH) {
            (0, bH.f)(this, AL, HH, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, bH.e)(this, rL, "f")
          }
          set useSpecularWeightFromTextureAlpha(HH) {
            (0, bH.f)(this, rL, HH, "f")
          }
          get forceAlphaTest() {
            return (0, bH.e)(this, SL, "f")
          }
          set forceAlphaTest(HH) {
            (0, bH.f)(this, SL, HH, "f")
          }
          get alphaCutOff() {
            return (0, bH.e)(this, hL, "f")
          }
          set alphaCutOff(HH) {
            (0, bH.f)(this, hL, HH, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, bH.e)(this, tL, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(HH) {
            (0, bH.f)(this, tL, HH, "f")
          }
          get useAmbientInGrayScale() {
            return (0, bH.e)(this, zL, "f")
          }
          set useAmbientInGrayScale(HH) {
            (0, bH.f)(this, zL, HH, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ZH.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === SH.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(HH) {
            HH !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? SH.c.LIGHTFALLOFF_PHYSICAL : SH.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === SH.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(HH) {
            HH !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? SH.c.LIGHTFALLOFF_GLTF : SH.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, bH.e)(this, CL, "f")
          }
          set useObjectSpaceNormalMap(HH) {
            (0, bH.f)(this, CL, HH, "f")
          }
          get useParallax() {
            return (0, bH.e)(this, EL, "f")
          }
          set useParallax(HH) {
            (0, bH.f)(this, EL, HH, "f")
          }
          get useParallaxOcclusion() {
            return (0, bH.e)(this, XL, "f")
          }
          set useParallaxOcclusion(HH) {
            (0, bH.f)(this, XL, HH, "f")
          }
          get parallaxScaleBias() {
            return (0, bH.e)(this, GL, "f")
          }
          set parallaxScaleBias(HH) {
            (0, bH.f)(this, GL, HH, "f")
          }
          get disableLighting() {
            return (0, bH.e)(this, YL, "f")
          }
          set disableLighting(HH) {
            (0, bH.f)(this, YL, HH, "f")
          }
          get forceIrradianceInFragment() {
            return (0, bH.e)(this, uL, "f")
          }
          set forceIrradianceInFragment(HH) {
            (0, bH.f)(this, uL, HH, "f")
          }
          get maxSimultaneousLights() {
            return (0, bH.e)(this, QL, "f")
          }
          set maxSimultaneousLights(HH) {
            (0, bH.f)(this, QL, HH, "f")
          }
          get invertNormalMapX() {
            return (0, bH.e)(this, WL, "f")
          }
          set invertNormalMapX(HH) {
            (0, bH.f)(this, WL, HH, "f")
          }
          get invertNormalMapY() {
            return (0, bH.e)(this, ML, "f")
          }
          set invertNormalMapY(HH) {
            (0, bH.f)(this, ML, HH, "f")
          }
          get twoSidedLighting() {
            return (0, bH.e)(this, xL, "f")
          }
          set twoSidedLighting(HH) {
            (0, bH.f)(this, xL, HH, "f")
          }
          get useAlphaFresnel() {
            return (0, bH.e)(this, vL, "f")
          }
          set useAlphaFresnel(HH) {
            (0, bH.f)(this, vL, HH, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, bH.e)(this, PL, "f")
          }
          set useLinearAlphaFresnel(HH) {
            (0, bH.f)(this, PL, HH, "f")
          }
          get environmentBRDFTexture() {
            return (0, bH.e)(this, TL, "f")
          }
          set environmentBRDFTexture(HH) {
            (0, bH.f)(this, TL, HH, "f")
          }
          get forceNormalForward() {
            return (0, bH.e)(this, UL, "f")
          }
          set forceNormalForward(HH) {
            (0, bH.f)(this, UL, HH, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, bH.e)(this, VL, "f")
          }
          set enableSpecularAntiAliasing(HH) {
            (0, bH.f)(this, VL, HH, "f")
          }
          get useHorizonOcclusion() {
            return (0, bH.e)(this, OL, "f")
          }
          set useHorizonOcclusion(HH) {
            (0, bH.f)(this, OL, HH, "f")
          }
          get useRadianceOcclusion() {
            return (0, bH.e)(this, bL, "f")
          }
          set useRadianceOcclusion(HH) {
            (0, bH.f)(this, bL, HH, "f")
          }
          get unlit() {
            return (0, bH.e)(this, kL, "f")
          }
          set unlit(HH) {
            (0, bH.f)(this, kL, HH, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, bH.e)(this, mL, "f")
          }
          set applyDecalMapAfterDetailMap(HH) {
            (0, bH.f)(this, mL, HH, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(HH) {
            this._backgroundRefractionTexture = HH, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(HH) {
            this._refractionHighQualityBlur !== HH && (this._refractionHighQualityBlur = HH, this.dLH(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(HH) {
            this._realTimeFiltering = HH, this.dLH(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(HH) {
            this._realTimeFilteringQuality = HH, this.dLH(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(HH) {
            this._fuzzSampleNumber = HH, this.dLH(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, bH.e)(this, oL, "f")
          }
          set debugMode(HH) {
            (0, bH.f)(this, oL, HH, "f")
          }
          constructor(LH, kH) {
            super(LH, kH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), BH.set(this, ((0, bH.k)(this, lr), (0, bH.k)(this, Kr, void 0))), this._baseWeight = ((0, bH.k)(this, cr), new ZB("base_weight", 1, "vBaseWeight", 1)), AH.set(this, (0, bH.k)(this, er, void 0)), this._baseWeightTexture = ((0, bH.k)(this, qr), new dB("base_weight", "baseWeight", "BASE_WEIGHT")), rH.set(this, (0, bH.k)(this, gr, void 0)), this._baseColor = ((0, bH.k)(this, Nr), new ZB("base_color", ZH.c.White(), "vBaseColor", 4)), hH.set(this, (0, bH.k)(this, Rr, void 0)), this._baseColorTexture = ((0, bH.k)(this, jr), new dB("base_color", "baseColor", "BASE_COLOR")), tH.set(this, (0, bH.k)(this, nr, void 0)), this._baseDiffuseRoughness = ((0, bH.k)(this, Fr), new ZB("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), zH.set(this, (0, bH.k)(this, Dr, void 0)), this._baseDiffuseRoughnessTexture = ((0, bH.k)(this, wr), new dB("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), CH.set(this, (0, bH.k)(this, Zr, void 0)), this._baseMetalness = ((0, bH.k)(this, dr), new ZB("base_metalness", 0, "vReflectanceInfo", 4, 0)), EH.set(this, (0, bH.k)(this, ar, void 0)), this._baseMetalnessTexture = ((0, bH.k)(this, sr), new dB("base_metalness", "baseMetalness", "BASE_METALNESS")), XH.set(this, (0, bH.k)(this, Jr, void 0)), this._specularWeight = ((0, bH.k)(this, ir), new ZB("specular_weight", 1, "vReflectanceInfo", 4, 3)), GH.set(this, (0, bH.k)(this, pr, void 0)), this._specularWeightTexture = ((0, bH.k)(this, yr), new dB("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), YH.set(this, (0, bH.k)(this, HS, void 0)), this._specularColor = ((0, bH.k)(this, BS), new ZB("specular_color", ZH.c.White(), "vSpecularColor", 4)), uH.set(this, (0, bH.k)(this, LS, void 0)), this._specularColorTexture = ((0, bH.k)(this, AS), new dB("specular_color", "specularColor", "SPECULAR_COLOR")), QH.set(this, (0, bH.k)(this, rS, void 0)), this._specularRoughness = ((0, bH.k)(this, SS), new ZB("specular_roughness", .3, "vReflectanceInfo", 4, 1)), WH.set(this, (0, bH.k)(this, hS, void 0)), this._specularRoughnessTexture = ((0, bH.k)(this, tS), new dB("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), MH.set(this, (0, bH.k)(this, zS, void 0)), this._specularRoughnessAnisotropy = ((0, bH.k)(this, CS), new ZB("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), xH.set(this, (0, bH.k)(this, ES, void 0)), this._specularRoughnessAnisotropyTexture = ((0, bH.k)(this, XS), new dB("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), vH.set(this, (0, bH.k)(this, GS, void 0)), this._specularIor = ((0, bH.k)(this, YS), new ZB("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), PH.set(this, (0, bH.k)(this, uS, void 0)), this._transmissionWeight = ((0, bH.k)(this, QS), new ZB("transmission_weight", 0, "vTransmissionWeight", 1)), TH.set(this, (0, bH.k)(this, WS, void 0)), this._transmissionWeightTexture = ((0, bH.k)(this, MS), new dB("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), UH.set(this, (0, bH.k)(this, xS, void 0)), this._transmissionColor = ((0, bH.k)(this, vS), new ZB("transmission_color", ZH.c.White(), "vTransmissionColor", 3, 0)), VH.set(this, (0, bH.k)(this, PS, void 0)), this._transmissionColorTexture = ((0, bH.k)(this, TS), new dB("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), OH.set(this, (0, bH.k)(this, US, void 0)), this._transmissionDepth = ((0, bH.k)(this, VS), new ZB("transmission_depth", 0, "vTransmissionDepth", 1, 0)), fH.set(this, (0, bH.k)(this, OS, void 0)), this._transmissionDepthTexture = ((0, bH.k)(this, bS), new dB("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), lH.set(this, (0, bH.k)(this, kS, void 0)), this._transmissionScatter = ((0, bH.k)(this, mS), new ZB("transmission_scatter", ZH.c.Black(), "vTransmissionScatter", 3, 0)), KH.set(this, (0, bH.k)(this, oS, void 0)), this._transmissionScatterTexture = ((0, bH.k)(this, IS), new dB("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), cH.set(this, (0, bH.k)(this, fS, void 0)), this._transmissionScatterAnisotropy = ((0, bH.k)(this, lS), new ZB("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), gH.set(this, (0, bH.k)(this, KS, void 0)), this._transmissionDispersionScale = ((0, bH.k)(this, cS), new ZB("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), jH.set(this, (0, bH.k)(this, eS, void 0)), this._transmissionDispersionScaleTexture = ((0, bH.k)(this, qS), new dB("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), nH.set(this, (0, bH.k)(this, gS, void 0)), this._transmissionDispersionAbbeNumber = ((0, bH.k)(this, NS), new ZB("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), FH.set(this, (0, bH.k)(this, RS, void 0)), this._subsurfaceWeight = ((0, bH.k)(this, jS), new ZB("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), DH.set(this, (0, bH.k)(this, nS, void 0)), this._subsurfaceWeightTexture = ((0, bH.k)(this, FS), new dB("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), dH.set(this, (0, bH.k)(this, DS, void 0)), this._subsurfaceColor = ((0, bH.k)(this, wS), new ZB("subsurface_color", new ZH.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), sH.set(this, (0, bH.k)(this, ZS, void 0)), this._subsurfaceColorTexture = ((0, bH.k)(this, dS), new dB("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), yH.set(this, (0, bH.k)(this, aS, void 0)), this._subsurfaceRadius = ((0, bH.k)(this, sS), new ZB("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), HB.set(this, (0, bH.k)(this, JS, void 0)), this._subsurfaceRadiusScale = ((0, bH.k)(this, iS), new ZB("subsurface_radius_scale", new ZH.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), BB.set(this, (0, bH.k)(this, pS, void 0)), this._subsurfaceRadiusScaleTexture = ((0, bH.k)(this, yS), new dB("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), LB.set(this, (0, bH.k)(this, Hh, void 0)), this._subsurfaceScatterAnisotropy = ((0, bH.k)(this, Bh), new ZB("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), AB.set(this, (0, bH.k)(this, Lh, void 0)), this._coatWeight = ((0, bH.k)(this, Ah), new ZB("coat_weight", 0, "vCoatWeight", 1, 0)), rB.set(this, (0, bH.k)(this, rh, void 0)), this._coatWeightTexture = ((0, bH.k)(this, Sh), new dB("coat_weight", "coatWeight", "COAT_WEIGHT")), SB.set(this, (0, bH.k)(this, hh, void 0)), this._coatColor = ((0, bH.k)(this, th), new ZB("coat_color", ZH.c.White(), "vCoatColor", 3, 0)), hB.set(this, (0, bH.k)(this, zh, void 0)), this._coatColorTexture = ((0, bH.k)(this, Ch), new dB("coat_color", "coatColor", "COAT_COLOR")), tB.set(this, (0, bH.k)(this, Eh, void 0)), this._coatRoughness = ((0, bH.k)(this, Xh), new ZB("coat_roughness", 0, "vCoatRoughness", 1, 0)), zB.set(this, (0, bH.k)(this, Gh, void 0)), this._coatRoughnessTexture = ((0, bH.k)(this, Yh), new dB("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), CB.set(this, (0, bH.k)(this, uh, void 0)), this._coatRoughnessAnisotropy = ((0, bH.k)(this, Qh), new ZB("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), uB.set(this, (0, bH.k)(this, Wh, void 0)), this._coatRoughnessAnisotropyTexture = ((0, bH.k)(this, Mh), new dB("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), QB.set(this, (0, bH.k)(this, xh, void 0)), this._coatIor = ((0, bH.k)(this, vh), new ZB("coat_ior", 1.5, "vCoatIor", 1, 0)), WB.set(this, (0, bH.k)(this, Ph, void 0)), this._coatDarkening = ((0, bH.k)(this, Th), new ZB("coat_darkening", 1, "vCoatDarkening", 1, 0)), MB.set(this, (0, bH.k)(this, Uh, void 0)), this._coatDarkeningTexture = ((0, bH.k)(this, Vh), new dB("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, xB.set(this, (0, bH.k)(this, Oh, void 0)), this._fuzzWeight = ((0, bH.k)(this, bh), new ZB("fuzz_weight", 0, "vFuzzWeight", 1, 0)), vB.set(this, (0, bH.k)(this, kh, void 0)), this._fuzzWeightTexture = ((0, bH.k)(this, mh), new dB("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), PB.set(this, (0, bH.k)(this, oh, void 0)), this._fuzzColor = ((0, bH.k)(this, Ih), new ZB("fuzz_color", ZH.c.White(), "vFuzzColor", 3, 0)), TB.set(this, (0, bH.k)(this, fh, void 0)), this._fuzzColorTexture = ((0, bH.k)(this, lh), new dB("fuzz_color", "fuzzColor", "FUZZ_COLOR")), UB.set(this, (0, bH.k)(this, Kh, void 0)), this._fuzzRoughness = ((0, bH.k)(this, ch), new ZB("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), bB.set(this, (0, bH.k)(this, eh, void 0)), this._fuzzRoughnessTexture = ((0, bH.k)(this, qh), new dB("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), kB.set(this, (0, bH.k)(this, gh, void 0)), this._geometryThinWalled = ((0, bH.k)(this, Nh), new ZB("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), mB.set(this, (0, bH.k)(this, Rh, void 0)), this._geometryNormalTexture = ((0, bH.k)(this, jh), new dB("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), oB.set(this, (0, bH.k)(this, nh, void 0)), this._geometryTangent = ((0, bH.k)(this, Fh), new ZB("geometry_tangent", new NH.n(1, 0), "vSpecularAnisotropy", 3, 0)), IB.set(this, (0, bH.k)(this, Dh, void 0)), this._geometryTangentTexture = ((0, bH.k)(this, wh), new dB("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), fB.set(this, (0, bH.k)(this, Zh, void 0)), this._geometryCoatNormalTexture = ((0, bH.k)(this, dh), new dB("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), lB.set(this, (0, bH.k)(this, ah, void 0)), this._geometryCoatTangent = ((0, bH.k)(this, sh), new ZB("geometry_coat_tangent", new NH.n(1, 0), "vGeometryCoatTangent", 2, 0)), KB.set(this, (0, bH.k)(this, Jh, void 0)), this._geometryCoatTangentTexture = ((0, bH.k)(this, ih), new dB("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), cB.set(this, (0, bH.k)(this, ph, void 0)), this._geometryOpacity = ((0, bH.k)(this, yh), new ZB("geometry_opacity", 1, "vBaseColor", 4, 3)), eB.set(this, (0, bH.k)(this, Ht, void 0)), this._geometryOpacityTexture = ((0, bH.k)(this, Bt), new dB("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), qB.set(this, (0, bH.k)(this, Lt, void 0)), this._geometryThickness = ((0, bH.k)(this, At), new ZB("geometry_thickness", 0, "vGeometryThickness", 1, 0)), gB.set(this, (0, bH.k)(this, rt, void 0)), this._geometryThicknessTexture = ((0, bH.k)(this, St), new dB("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), NB.set(this, (0, bH.k)(this, ht, void 0)), this._emissionLuminance = ((0, bH.k)(this, tt), new ZB("emission_luminance", 1, "vLightingIntensity", 4, 1)), RB.set(this, (0, bH.k)(this, zt, void 0)), this._emissionColor = ((0, bH.k)(this, Ct), new ZB("emission_color", ZH.c.Black(), "vEmissionColor", 3)), nB.set(this, (0, bH.k)(this, Et, void 0)), this._emissionColorTexture = ((0, bH.k)(this, Xt), new dB("emission_color", "emissionColor", "EMISSION_COLOR")), DB.set(this, (0, bH.k)(this, Gt, void 0)), this._thinFilmWeight = ((0, bH.k)(this, Yt), new ZB("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), aB.set(this, (0, bH.k)(this, ut, void 0)), this._thinFilmWeightTexture = ((0, bH.k)(this, Qt), new dB("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), sB.set(this, (0, bH.k)(this, Wt, void 0)), this._thinFilmThickness = ((0, bH.k)(this, Mt), new ZB("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), pB.set(this, (0, bH.k)(this, xt, void 0)), this._thinFilmThicknessMin = ((0, bH.k)(this, vt), new ZB("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), yB.set(this, (0, bH.k)(this, Pt, void 0)), this._thinFilmThicknessTexture = ((0, bH.k)(this, Tt), new dB("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), HL.set(this, (0, bH.k)(this, Ut, void 0)), this._thinFilmIor = ((0, bH.k)(this, Vt), new ZB("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), BL.set(this, (0, bH.k)(this, Ot, void 0)), this._ambientOcclusionTexture = ((0, bH.k)(this, bt), new dB("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = HH.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, LL.set(this, (0, bH.k)(this, kt, 1)), AL.set(this, ((0, bH.k)(this, mt), (0, bH.k)(this, ot, 1))), rL.set(this, ((0, bH.k)(this, It), (0, bH.k)(this, ft, !1))), SL.set(this, ((0, bH.k)(this, lt), (0, bH.k)(this, Kt, !1))), hL.set(this, ((0, bH.k)(this, ct), (0, bH.k)(this, et, .4))), tL.set(this, ((0, bH.k)(this, qt), (0, bH.k)(this, gt, !1))), zL.set(this, ((0, bH.k)(this, Nt), (0, bH.k)(this, Rt, !1))), CL.set(this, ((0, bH.k)(this, jt), (0, bH.k)(this, nt, !1))), EL.set(this, ((0, bH.k)(this, Ft), (0, bH.k)(this, Dt, !1))), XL.set(this, ((0, bH.k)(this, wt), (0, bH.k)(this, Zt, !1))), GL.set(this, ((0, bH.k)(this, dt), (0, bH.k)(this, st, .05))), YL.set(this, ((0, bH.k)(this, Jt), (0, bH.k)(this, it, !1))), uL.set(this, ((0, bH.k)(this, pt), (0, bH.k)(this, yt, !1))), QL.set(this, ((0, bH.k)(this, Hz), (0, bH.k)(this, Bz, 4))), WL.set(this, ((0, bH.k)(this, Lz), (0, bH.k)(this, Az, !1))), ML.set(this, ((0, bH.k)(this, rz), (0, bH.k)(this, Sz, !1))), xL.set(this, ((0, bH.k)(this, hz), (0, bH.k)(this, tz, !1))), vL.set(this, ((0, bH.k)(this, zz), (0, bH.k)(this, Cz, !1))), PL.set(this, ((0, bH.k)(this, Ez), (0, bH.k)(this, Xz, !1))), TL.set(this, ((0, bH.k)(this, Gz), (0, bH.k)(this, Yz, null))), UL.set(this, ((0, bH.k)(this, uz), (0, bH.k)(this, Qz, !1))), VL.set(this, ((0, bH.k)(this, Wz), (0, bH.k)(this, Mz, !1))), OL.set(this, ((0, bH.k)(this, xz), (0, bH.k)(this, vz, !0))), bL.set(this, ((0, bH.k)(this, Pz), (0, bH.k)(this, Tz, !0))), kL.set(this, ((0, bH.k)(this, Uz), (0, bH.k)(this, Vz, !1))), mL.set(this, ((0, bH.k)(this, Oz), (0, bH.k)(this, bz, !1))), this._lightingInfos = ((0, bH.k)(this, kz), new NH.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = SH.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new oH.i(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, oL.set(this, (0, bH.k)(this, mz, 0)), this.debugLimit = ((0, bH.k)(this, oz), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = SH.c.MATERIAL_OPAQUE, this.yN() && !this.yN()?.Iu().isWebGPU && this.yN().Iu().hQ < 2 && mH.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), HH._noiseTextures[this.yN().uniqueId] || (HH._noiseTextures[this.yN().uniqueId] = new IH.g(OB.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.yN(), !1, !0, 1), this.yN().uR.addOnce((() => {
              HH._noiseTextures[this.yN().uniqueId]?.dispose(), delete HH._noiseTextures[this.yN().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), JH.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), JH.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = qH(this.yN()), this._environmentFuzzBRDFTexture = eH(this.yN()), this.prePassConfiguration = new wH.d, this._propertyList = {};
            for (const HH of Object.getOwnPropertyNames(this)) {
              const BH = this[HH];
              BH instanceof ZB && (this._propertyList[HH] = BH)
            }
            Object.keys(this._propertyList).forEach((HH => {
              const BH = this._propertyList[HH];
              let LH = this._uniformsList[BH.targetUniformName];
              LH ? LH.numComponents !== BH.targetUniformComponentNum ? mH.e.Error(`Uniform ${BH.targetUniformName} already exists of size ${LH.numComponents}, but trying to set it to ${BH.targetUniformComponentNum}.`) : LH.requiredDefine !== BH.requiredDefine && (LH.requiredDefine = void 0) : (LH = new wB(BH.targetUniformName, BH.targetUniformComponentNum), LH.requiredDefine = BH.requiredDefine, this._uniformsList[BH.targetUniformName] = LH), "" === LH.firstLinkedKey && (LH.firstLinkedKey = BH.name), LH.linkedProperties[BH.name] = BH
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const HH of Object.getOwnPropertyNames(this)) {
              const BH = this[HH];
              BH instanceof dB && (this._samplersList[HH] = BH)
            }
            for (const HH in this._samplersList) {
              const BH = this._samplersList[HH].textureDefine;
              this._samplerDefines[BH] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[BH + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[BH + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(JH.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(JH.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(HH) {
            this._transparencyMode !== HH && (this._transparencyMode = HH, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== SH.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(HH) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(HH)
          }
          clone(BH) {
            let LH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const rH = VB.c.Clone((() => new HH(BH, this.yN())), this, {
              cloneTexturesOnlyOnce: LH
            });
            return rH.id = BH, rH.name = BH, this.stencil.copyTo(rH.stencil), this._clonePlugins(rH, AH), rH
          }
          serialize() {
            const HH = super.serialize();
            return HH.customType = "BABYLON.OpenPBRMaterial", HH
          }
          static Parse(BH, LH, AH) {
            const rH = VB.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH);
            return BH.stencil && rH.stencil.parse(BH.stencil, LH, AH), SH.c._ParsePlugins(BH, rH, LH, AH), rH
          }
          forceCompilation(HH, BH, LH) {
            const AH = {
              clipPlane: !1,
              useInstances: !1,
              ...LH
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const LH = new JB({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                rH = this._prepareEffect(HH, HH, LH, void 0, void 0, AH.useInstances, AH.clipPlane);
              this._onEffectCreatedObservable && (FB.effect = rH, FB.subMesh = null, this._onEffectCreatedObservable.notifyObservers(FB)), rH.isReady() ? BH && BH(this) : rH.onCompileObservable.add((() => {
                BH && BH(this)
              }))
            })()
          }
          isReadyForSubMesh(BH, LH, AH) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const rH = LH._drawWrapper;
            if (rH.effect && this.isFrozen && rH._wasPreviouslyReady && rH._wasPreviouslyUsingInstances === AH) return !0;
            LH.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), LH.materialDefines = new JB({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const SH = LH.materialDefines;
            if (this._isReadyForSubMesh(LH)) return !0;
            const hH = this.yN(),
              tH = hH.Iu();
            if (SH._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, hH.texturesEnabled)) {
              for (const HH in this._samplersList) {
                const BH = this._samplersList[HH];
                if (BH.value && !BH.value.isReadyOrNotBlocking()) return !1
              }
              const BH = this._getRadianceTexture();
              if (BH && JH.e.ReflectionTextureEnabled) {
                if (!BH.isReadyOrNotBlocking()) return !1;
                if (BH.irradianceTexture) {
                  if (!BH.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!BH.sphericalPolynomial && BH.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && JH.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && JH.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && JH.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (HH._noiseTextures[hH.uniqueId] && !HH._noiseTextures[hH.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = SH, this._eventInfo.subMesh = LH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (SH._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (SH.AREALIGHTUSED)
              for (let HH = 0; HH < BH.lightSources.length; HH++)
                if (!BH.lightSources[HH]._isReady()) return !1;
            if (tH.getCaps().standardDerivatives || BH.isVerticesDataPresent(RH.i.NormalKind) || (BH.createNormals(!0), mH.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + BH.name)), !(0, pH.c)(hH, BH, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const zH = LH.effect,
              CH = SH._areLightsDisposed,
              EH = this._prepareEffect(BH, LH.getRenderingMesh(), SH, this.onCompiled, this.onError, AH, null);
            let XH = !1;
            if (EH)
              if (this._onEffectCreatedObservable && (FB.effect = EH, FB.subMesh = LH, this._onEffectCreatedObservable.notifyObservers(FB)), this.allowShaderHotSwapping && zH && !EH.isReady()) {
                if (SH.markAsUnprocessed(), XH = this.isFrozen, CH) return SH._areLightsDisposed = !0, !1
              } else hH.resetCachedMaterial(), LH.setEffect(EH, SH, this._materialContext);
            return !(!LH.effect || !LH.effect.isReady()) && (SH._renderId = hH.getRenderId(), rH._wasPreviouslyReady = !XH, rH._wasPreviouslyUsingInstances = !!AH, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const HH = this._uniformBuffer;
            HH.addUniform("vTangentSpaceParams", 2), HH.addUniform("vLightingIntensity", 4), HH.addUniform("pointSize", 1), HH.addUniform("vDebugMode", 2), HH.addUniform("renderTargetSize", 2), HH.addUniform("cameraInfo", 4), HH.addUniform("vTextureRepetitionHexTilingParams", 4), HH.addUniform("backgroundRefractionMatrix", 16), HH.addUniform("vBackgroundRefractionInfos", 3), (0, pH.db)(HH, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((BH => {
              HH.addUniform(BH.name, BH.numComponents)
            })), Object.values(this._samplersList).forEach((BH => {
              HH.addUniform(BH.samplerInfoName, 2), HH.addUniform(BH.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(HH, BH, LH, AH) {
            if (0 === this.geometryThickness) HH.updateFloat("vGeometryThickness", 0);
            else {
              AH.getRenderingMesh().getWorldMatrix().decompose(NH.l.lu[0]);
              const BH = Math.max(Math.abs(NH.l.lu[0].x), Math.abs(NH.l.lu[0].y), Math.abs(NH.l.lu[0].z));
              HH.updateFloat("vGeometryThickness", this.geometryThickness * BH)
            }
          }
          bindForSubMesh(BH, LH, AH) {
            const rH = this.yN(),
              SH = AH.materialDefines;
            if (!SH) return;
            const hH = AH.effect;
            if (!hH) return;
            this._activeEffect = hH, LH.getMeshUniformBuffer().bindToEffect(hH, "Mesh"), LH.transferToEffect(BH);
            const tH = rH.Iu();
            this._uniformBuffer.bindToEffect(hH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, rH, LH, BH, this.isFrozen), YB.e.Bind(tH.currentRenderPassId, this._activeEffect, LH, BH, this);
            const zH = rH.activeCamera;
            zH ? this._uniformBuffer.updateFloat4("cameraInfo", zH.minZ, zH.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const CH = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", CH[0], CH[1], CH[2], CH[3]), this._eventInfo.subMesh = AH, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), SH.OBJECTSPACE_NORMALMAP && (BH.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const EH = this._mustRebind(rH, hH, AH, LH.visibility),
              XH = tH._features.needToAlwaysBindUniformBuffers;
            (0, pH.d)(LH, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, XB.d)(this._activeEffect, this._vertexPullingMetadata);
            const GH = this._uniformBuffer;
            if (EH) {
              this.bindViewProjection(hH);
              const BH = this._getRadianceTexture();
              if (!GH.useUbo || !this.isFrozen || !GH.isSync || AH._drawWrapper._forceRebindOnNextCall) {
                if (rH.texturesEnabled) {
                  for (const HH in this._samplersList) {
                    const BH = this._samplersList[HH];
                    BH.value && (GH.updateFloat2(BH.samplerInfoName, BH.value.coordinatesIndex, BH.value.level), (0, pH.u)(BH.value, GH, BH.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (rH._mirroredCameraPosition ? GH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : GH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, pH.j)(rH, SH, GH, ZH.c.White(), BH, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && GH.updateFloat("pointSize", this.pointSize);
                const HH = this._uniformsArray;
                for (let BH = 0, LH = HH.length; BH < LH; BH++) {
                  const LH = HH[BH];
                  (void 0 === LH.requiredDefine || SH[LH.requiredDefine]) && (4 === LH.numComponents ? (LH.populateVectorFromLinkedProperties(NH.l.Vector4[0]), GH.updateVector4(LH.name, NH.l.Vector4[0])) : 3 === LH.numComponents ? (LH.populateVectorFromLinkedProperties(NH.l.lu[0]), GH.updateVector3(LH.name, NH.l.lu[0])) : 2 === LH.numComponents ? (LH.populateVectorFromLinkedProperties(NH.l.Vector2[0]), GH.updateFloat2(LH.name, NH.l.Vector2[0].x, NH.l.Vector2[0].y)) : 1 === LH.numComponents && GH.updateFloat(LH.name, LH.linkedProperties[LH.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * rH.environmentIntensity, this._lightingInfos.w = 1, GH.updateVector4("vLightingIntensity", this._lightingInfos), GH.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (rH.texturesEnabled) {
                for (const HH in this._samplersList) {
                  const BH = this._samplersList[HH];
                  BH.value && GH.setTexture(BH.samplerName, BH.value)
                }
                if ((0, pH.n)(rH, SH, GH, BH, this.realTimeFiltering), SH.ENVIRONMENTBRDF && GH.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), SH.FUZZENVIRONMENTBRDF && GH.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), SH.REFRACTED_BACKGROUND && (GH.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), GH.wHH("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), NH.l.lu[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), GH.updateVector3("vBackgroundRefractionInfos", NH.l.lu[1])), (SH.ANISOTROPIC || SH.FUZZ || SH.REFRACTED_BACKGROUND || SH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && GH.setTexture("blueNoiseSampler", HH._noiseTextures[this.yN().uniqueId]), SH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const HH = this.sssIrradianceTexture.getSize().width,
                    BH = this.sssIrradianceTexture.getSize().height;
                  GH.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), GH.setTexture("sceneDepthSampler", this.sssDepthTexture), GH.updateFloat2("renderTargetSize", HH, BH)
                }
              }
              this.yN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(LH) && this.yN().depthPeelingRenderer.bind(hH), this._eventInfo.subMesh = AH, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, EB.d)(this._activeEffect, this, rH), this.bindEyePosition(hH)
            } else XH && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, rH, rH.Iu(), AH), !EH && this.isFrozen && !XH || !rH.lightsEnabled || this._disableLighting || (0, pH.p)(rH, LH, this._activeEffect, SH, this._maxSimultaneousLights), !EH && this.isFrozen || (this.bindView(hH), (0, pH.f)(rH, LH, this._activeEffect, !0), SH.NUM_MORPH_INFLUENCERS && (0, pH.r)(LH, this._activeEffect), SH.BAKED_VERTEX_ANIMATION_TEXTURE && LH.bakedVertexAnimationManager?.bind(hH, SH.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, pH.q)(SH, this._activeEffect, rH)), this._afterBind(LH, this._activeEffect, AH), GH.update()
          }
          getAnimatables() {
            const HH = super.getAnimatables();
            for (const BH in this._samplersList) {
              const LH = this._samplersList[BH];
              LH.value && LH.value.animations && LH.value.animations.length > 0 && HH.push(LH.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && HH.push(this._radianceTexture), HH
          }
          getActiveTextures() {
            const HH = super.getActiveTextures();
            for (const BH in this._samplersList) {
              const LH = this._samplersList[BH];
              LH.value && HH.push(LH.value)
            }
            return this._radianceTexture && HH.push(this._radianceTexture), HH
          }
          hasTexture(HH) {
            if (super.hasTexture(HH)) return !0;
            for (const BH in this._samplersList) {
              if (this._samplersList[BH].value === HH) return !0
            }
            return this._radianceTexture === HH
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(HH, BH) {
            if (this._breakShaderLoadedCheck = !0, BH) {
              this._environmentBRDFTexture && this.yN().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.yN().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const HH in this._samplersList) {
                const BH = this._samplersList[HH];
                BH.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(HH, BH)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.yN().environmentTexture
          }
          _prepareEffect(BH, LH, AH) {
            let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(BH, LH, AH, hH, tH), !AH.isDirty) return null;
            AH.markAsProcessed();
            const zH = this.yN().Iu(),
              CH = new iH.b;
            let EH = 0;
            AH.USESPHERICALINVERTEX && CH.addFallback(EH++, "USESPHERICALINVERTEX"), AH.FOG && CH.addFallback(EH, "FOG"), AH.SPECULARAA && CH.addFallback(EH, "SPECULARAA"), AH.POINTSIZE && CH.addFallback(EH, "POINTSIZE"), AH.LOGARITHMICDEPTH && CH.addFallback(EH, "LOGARITHMICDEPTH"), AH.PARALLAX && CH.addFallback(EH, "PARALLAX"), AH.PARALLAX_RHS && CH.addFallback(EH, "PARALLAX_RHS"), AH.PARALLAXOCCLUSION && CH.addFallback(EH++, "PARALLAXOCCLUSION"), AH.ENVIRONMENTBRDF && CH.addFallback(EH++, "ENVIRONMENTBRDF"), AH.TANGENT && CH.addFallback(EH++, "TANGENT"), EH = (0, pH.y)(AH, CH, this._maxSimultaneousLights, EH), AH.SPECULARTERM && CH.addFallback(EH++, "SPECULARTERM"), AH.USESPHERICALFROMREFLECTIONMAP && CH.addFallback(EH++, "USESPHERICALFROMREFLECTIONMAP"), AH.USEIRRADIANCEMAP && CH.addFallback(EH++, "USEIRRADIANCEMAP"), AH.NORMAL && CH.addFallback(EH++, "NORMAL"), AH.VERTEXCOLOR && CH.addFallback(EH++, "VERTEXCOLOR"), AH.MORPHTARGETS && CH.addFallback(EH++, "MORPHTARGETS"), AH.MULTIVIEW && CH.addFallback(0, "MULTIVIEW");
            const XH = [RH.i.PositionKind];
            AH.NORMAL && XH.push(RH.i.NormalKind), AH.TANGENT && XH.push(RH.i.TangentKind);
            for (let HH = 1; HH <= 6; ++HH) AH["UV" + HH] && XH.push(`uv${1===HH?"":HH}`);
            AH.VERTEXCOLOR && XH.push(RH.i.ColorKind), (0, pH.E)(XH, BH, AH, CH), (0, pH.F)(XH, AH), (0, pH.G)(XH, BH, AH), (0, pH.C)(XH, BH, AH);
            let GH = "openpbr";
            const YH = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const HH in this._uniformsList) YH.push(HH);
            const uH = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            AH.FUZZENVIRONMENTBRDF && uH.push("environmentFuzzBrdfSampler"), AH.REFRACTED_BACKGROUND && uH.push("backgroundRefractionSampler"), (AH.ANISOTROPIC || AH.FUZZ || AH.REFRACTED_BACKGROUND || AH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && uH.push("blueNoiseSampler"), AH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (uH.push("sceneIrradianceSampler"), uH.push("sceneDepthSampler"));
            for (const HH in this._samplersList) {
              const BH = this._samplersList[HH];
              uH.push(BH.samplerName), YH.push(BH.samplerInfoName), YH.push(BH.samplerMatrixName)
            }(0, pH.fb)(YH, uH, !0);
            const QH = ["Material", "Scene", "Mesh"],
              WH = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: AH.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = CH, this._eventInfo.fallbackRank = EH, this._eventInfo.defines = AH, this._eventInfo.uniforms = YH, this._eventInfo.attributes = XH, this._eventInfo.samplers = uH, this._eventInfo.uniformBuffersNames = QH, this._eventInfo.customCode = void 0, this._eventInfo.mesh = BH, this._eventInfo.indexParameters = WH, this._callbackPluginEventGeneric(128, this._eventInfo), YB.e.AddUniformsAndSamplers(YH, uH), wH.d.AddUniforms(YH), wH.d.AddSamplers(uH), (0, EB.b)(YH), this._useVertexPulling) {
              const HH = LH?.geometry;
              HH && (this._vertexPullingMetadata = (0, XB.f)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
                YH.push(`vp_${BH}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            aH.b && (aH.b.PrepareUniforms(YH, AH), aH.b.PrepareSamplers(uH, AH)), (0, pH.jb)({
              uniformsNames: YH,
              uniformBuffersNames: QH,
              samplers: uH,
              defines: AH,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const MH = {};
            this.customShaderNameResolve && (GH = this.customShaderNameResolve(GH, YH, QH, uH, AH, XH, MH));
            const xH = AH.toString(),
              vH = zH.createEffect(GH, {
                attributes: XH,
                uniformsNames: YH,
                uniformBuffersNames: QH,
                samplers: uH,
                defines: xH,
                fallbacks: CH,
                onCompiled: rH,
                onError: SH,
                indexParameters: WH,
                processFinalCode: MH.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: AH.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: HH._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, zH);
            return this._eventInfo.customCode = void 0, vH
          }
          _prepareDefines(BH, LH, AH) {
            let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const tH = LH.hasThinInstances,
              zH = this.yN(),
              CH = zH.Iu();
            (0, pH.U)(zH, BH, AH, !0, this._maxSimultaneousLights, this._disableLighting), AH._needNormals = !0, (0, pH._)(zH, AH);
            const EH = this.needAlphaBlendingForMesh(BH) && this.yN().useOrderIndependentTransparency;
            if ((0, pH.ab)(zH, AH, this.canRenderToMRT && !EH), (0, pH.$)(zH, AH, EH), YB.e.PrepareDefines(CH.currentRenderPassId, BH, AH), AH._areTexturesDirty) {
              AH._needUVs = !1;
              for (let HH = 1; HH <= 6; ++HH) AH["MAINUV" + HH] = !1;
              if (zH.texturesEnabled) {
                for (const LH in this._samplersList) {
                  const HH = this._samplersList[LH];
                  HH.value ? ((0, pH.X)(HH.value, AH, HH.textureDefine), AH[HH.textureDefine + "_GAMMA"] = HH.value.gammaSpace) : AH[HH.textureDefine] = !1
                }
                const HH = this._getRadianceTexture(),
                  BH = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || CH.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, pH.R)(zH, HH, AH, this.realTimeFiltering, this.realTimeFilteringQuality, !BH), this._baseMetalnessTexture && (AH.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), AH.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, AH.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, AH.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, AH.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, AH.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, AH.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, AH.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, AH.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, AH.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, AH.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, AH.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && JH.e.DiffuseTextureEnabled ? (AH.PARALLAX = !0, AH.PARALLAX_RHS = zH.useRightHandedSystem, AH.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : AH.PARALLAX = !1, AH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (AH.PARALLAX = !1, AH.PARALLAX_RHS = !1, AH.PARALLAXOCCLUSION = !1, AH.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && JH.e.ReflectionTextureEnabled ? (AH.ENVIRONMENTBRDF = !0, AH.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (AH.ENVIRONMENTBRDF = !1, AH.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? AH.FUZZENVIRONMENTBRDF = !0 : AH.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  AH.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && JH.e.RefractionTextureEnabled, AH.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, AH.REFRACTED_LIGHTS = !0;
                  const HH = this._getRadianceTexture();
                  HH ? (AH.REFRACTED_ENVIRONMENT = JH.e.RefractionTextureEnabled, AH.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.yN().useRightHandedSystem ? !HH.invertZ : HH.invertZ, AH.REFRACTED_ENVIRONMENT_LOCAL_CUBE = HH.isCube && HH.boundingBoxSize) : AH.REFRACTED_ENVIRONMENT = !1
                } else AH.REFRACTED_BACKGROUND = !1, AH.REFRACTED_LIGHTS = !1, AH.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? AH.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : AH.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === SH.c.LIGHTFALLOFF_STANDARD ? (AH.USEPHYSICALLIGHTFALLOFF = !1, AH.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === SH.c.LIGHTFALLOFF_GLTF ? (AH.USEPHYSICALLIGHTFALLOFF = !1, AH.USEGLTFLIGHTFALLOFF = !0) : (AH.USEPHYSICALLIGHTFALLOFF = !0, AH.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? AH.TWOSIDEDLIGHTING = !0 : AH.TWOSIDEDLIGHTING = !1, AH.MIRRORED = !!zH._mirroredCameraPosition, AH.SPECULARAA = CH.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(AH._areTexturesDirty || AH._areMiscDirty) && (AH.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, AH.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, AH.ALPHABLEND = this.needAlphaBlendingForMesh(BH)), AH._areTexturesDirty && (AH.TEXTURE_REPETITION_MODE = CH.version > 1 || CH.isWebGPU ? this.textureRepetitionMode : 0), AH._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(AH), AH.FORCENORMALFORWARD = this._forceNormalForward, AH.RADIANCEOCCLUSION = this._useRadianceOcclusion, AH.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && HH._noiseTextures[zH.uniqueId] && JH.e.ReflectionTextureEnabled ? (AH.ANISOTROPIC = !0, BH.isVerticesDataPresent(RH.i.TangentKind) || (AH._needUVs = !0, AH.MAINUV1 = !0), this._useGltfStyleAnisotropy && (AH.USE_GLTF_STYLE_ANISOTROPY = !0), AH.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, AH.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (AH.ANISOTROPIC = !1, AH.USE_GLTF_STYLE_ANISOTROPY = !1, AH.ANISOTROPIC_BASE = !1, AH.ANISOTROPIC_COAT = !1), AH.THIN_FILM = this.thinFilmWeight > 0, AH.IRIDESCENCE = this.thinFilmWeight > 0, AH.DISPERSION = this.transmissionDispersionScale > 0, AH.SCATTERING = this.hasScattering;
            if (AH.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, AH.TRANSMISSION_SLAB = this.transmissionWeight > 0, AH.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, AH.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !AH.PREPASS && (AH.SUBSURFACE_SLAB || AH.TRANSMISSION_SLAB_VOLUME)) {
              let HH = !1;
              if (!this.sssIrradianceTexture && zH.geometryBufferRenderer) {
                const BH = zH.geometryBufferRenderer.getTextureIndex(jB.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = zH.geometryBufferRenderer.getGBuffer().textures[BH], HH = !0
              }
              if (!this.sssDepthTexture && zH.geometryBufferRenderer) {
                const BH = zH.geometryBufferRenderer.getTextureIndex(jB.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = zH.geometryBufferRenderer.getGBuffer().textures[BH], HH = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (AH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, HH && (AH.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            AH.FUZZ = this.fuzzWeight > 0 && JH.e.ReflectionTextureEnabled, AH.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, AH.FUZZ ? (BH.isVerticesDataPresent(RH.i.TangentKind) || (AH._needUVs = !0, AH.MAINUV1 = !0), this._environmentFuzzBRDFTexture = eH(this.yN()), AH.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, AH.FUZZENVIRONMENTBRDF = !1, AH.FUZZ_IBL_SAMPLES = 0), AH._areMiscDirty && ((0, pH.Z)(BH, zH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(BH), AH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, LH, this._isVertexOutputInvariant), AH.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !BH.isVerticesDataPresent(RH.i.NormalKind), AH.DEBUGMODE = this._debugMode), (0, pH.P)(zH, CH, this, AH, !!rH, hH, tH), this._eventInfo.defines = AH, this._eventInfo.mesh = BH, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pH.L)(BH, AH, !0, !0, !0, this._transparencyMode !== SH.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, BH = new WeakMap, AH = new WeakMap, rH = new WeakMap, hH = new WeakMap, tH = new WeakMap, zH = new WeakMap, CH = new WeakMap, EH = new WeakMap, XH = new WeakMap, GH = new WeakMap, YH = new WeakMap, uH = new WeakMap, QH = new WeakMap, WH = new WeakMap, MH = new WeakMap, xH = new WeakMap, vH = new WeakMap, PH = new WeakMap, TH = new WeakMap, UH = new WeakMap, VH = new WeakMap, OH = new WeakMap, fH = new WeakMap, lH = new WeakMap, KH = new WeakMap, cH = new WeakMap, gH = new WeakMap, jH = new WeakMap, nH = new WeakMap, FH = new WeakMap, DH = new WeakMap, dH = new WeakMap, sH = new WeakMap, yH = new WeakMap, HB = new WeakMap, BB = new WeakMap, LB = new WeakMap, AB = new WeakMap, rB = new WeakMap, SB = new WeakMap, hB = new WeakMap, tB = new WeakMap, zB = new WeakMap, CB = new WeakMap, uB = new WeakMap, QB = new WeakMap, WB = new WeakMap, MB = new WeakMap, xB = new WeakMap, vB = new WeakMap, PB = new WeakMap, TB = new WeakMap, UB = new WeakMap, bB = new WeakMap, kB = new WeakMap, mB = new WeakMap, oB = new WeakMap, IB = new WeakMap, fB = new WeakMap, lB = new WeakMap, KB = new WeakMap, cB = new WeakMap, eB = new WeakMap, qB = new WeakMap, gB = new WeakMap, NB = new WeakMap, RB = new WeakMap, nB = new WeakMap, DB = new WeakMap, aB = new WeakMap, sB = new WeakMap, pB = new WeakMap, yB = new WeakMap, HL = new WeakMap, BL = new WeakMap, LL = new WeakMap, AL = new WeakMap, rL = new WeakMap, SL = new WeakMap, hL = new WeakMap, tL = new WeakMap, zL = new WeakMap, CL = new WeakMap, EL = new WeakMap, XL = new WeakMap, GL = new WeakMap, YL = new WeakMap, uL = new WeakMap, QL = new WeakMap, WL = new WeakMap, ML = new WeakMap, xL = new WeakMap, vL = new WeakMap, PL = new WeakMap, TL = new WeakMap, UL = new WeakMap, VL = new WeakMap, OL = new WeakMap, bL = new WeakMap, kL = new WeakMap, mL = new WeakMap, oL = new WeakMap, (() => {
          const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(fr[Symbol.metadata] ?? null) : void 0;
          IL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], fL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], lL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], KL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], cL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], eL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], qL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], gL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], NL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], RL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], jL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], nL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], FL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], DL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], wL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], ZL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], dL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], aL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], sL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], JL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], iL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], pL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], yL = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], HA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], BA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], LA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], AA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], rA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], SA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], hA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], tA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], zA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], CA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], EA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], XA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], GA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], YA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], uA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], QA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], WA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], MA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], xA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], vA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], PA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], TA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], UA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], VA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], OA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], bA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], kA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], mA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], oA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], IA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], fA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], lA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], KA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], cA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], eA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], qA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], gA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], NA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], RA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], jA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], nA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], FA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], DA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], wA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], ZA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], dA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], aA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], sA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], JA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], iA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], pA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], yA = [(0, kH.c)("_markAllSubMeshesAsTexturesDirty")], Hr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Br = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Lr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Ar = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Sr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, kH.H)()], zr = [(0, kH.H)()], Cr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Er = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Gr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Yr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsLightsDirty")], ur = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Qr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsLightsDirty")], Wr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Mr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], xr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], vr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Pr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Tr = [(0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Ur = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Vr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], Or = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], br = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], kr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], mr = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], or = [(0, kH.e)("_markAllSubMeshesAsMiscDirty")], Ir = [(0, kH.H)()], (0, bH.g)(HH, null, IL, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseWeight" in HH,
              get: HH => HH.baseWeight,
              set: (HH, BH) => {
                HH.baseWeight = BH
              }
            },
            metadata: BH
          }, Kr, cr), (0, bH.g)(HH, null, fL, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseWeightTexture" in HH,
              get: HH => HH.baseWeightTexture,
              set: (HH, BH) => {
                HH.baseWeightTexture = BH
              }
            },
            metadata: BH
          }, er, qr), (0, bH.g)(HH, null, lL, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseColor" in HH,
              get: HH => HH.baseColor,
              set: (HH, BH) => {
                HH.baseColor = BH
              }
            },
            metadata: BH
          }, gr, Nr), (0, bH.g)(HH, null, KL, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseColorTexture" in HH,
              get: HH => HH.baseColorTexture,
              set: (HH, BH) => {
                HH.baseColorTexture = BH
              }
            },
            metadata: BH
          }, Rr, jr), (0, bH.g)(HH, null, cL, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseDiffuseRoughness" in HH,
              get: HH => HH.baseDiffuseRoughness,
              set: (HH, BH) => {
                HH.baseDiffuseRoughness = BH
              }
            },
            metadata: BH
          }, nr, Fr), (0, bH.g)(HH, null, eL, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseDiffuseRoughnessTexture" in HH,
              get: HH => HH.baseDiffuseRoughnessTexture,
              set: (HH, BH) => {
                HH.baseDiffuseRoughnessTexture = BH
              }
            },
            metadata: BH
          }, Dr, wr), (0, bH.g)(HH, null, qL, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseMetalness" in HH,
              get: HH => HH.baseMetalness,
              set: (HH, BH) => {
                HH.baseMetalness = BH
              }
            },
            metadata: BH
          }, Zr, dr), (0, bH.g)(HH, null, gL, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseMetalnessTexture" in HH,
              get: HH => HH.baseMetalnessTexture,
              set: (HH, BH) => {
                HH.baseMetalnessTexture = BH
              }
            },
            metadata: BH
          }, ar, sr), (0, bH.g)(HH, null, NL, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularWeight" in HH,
              get: HH => HH.specularWeight,
              set: (HH, BH) => {
                HH.specularWeight = BH
              }
            },
            metadata: BH
          }, Jr, ir), (0, bH.g)(HH, null, RL, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularWeightTexture" in HH,
              get: HH => HH.specularWeightTexture,
              set: (HH, BH) => {
                HH.specularWeightTexture = BH
              }
            },
            metadata: BH
          }, pr, yr), (0, bH.g)(HH, null, jL, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularColor" in HH,
              get: HH => HH.specularColor,
              set: (HH, BH) => {
                HH.specularColor = BH
              }
            },
            metadata: BH
          }, HS, BS), (0, bH.g)(HH, null, nL, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularColorTexture" in HH,
              get: HH => HH.specularColorTexture,
              set: (HH, BH) => {
                HH.specularColorTexture = BH
              }
            },
            metadata: BH
          }, LS, AS), (0, bH.g)(HH, null, FL, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularRoughness" in HH,
              get: HH => HH.specularRoughness,
              set: (HH, BH) => {
                HH.specularRoughness = BH
              }
            },
            metadata: BH
          }, rS, SS), (0, bH.g)(HH, null, DL, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularRoughnessTexture" in HH,
              get: HH => HH.specularRoughnessTexture,
              set: (HH, BH) => {
                HH.specularRoughnessTexture = BH
              }
            },
            metadata: BH
          }, hS, tS), (0, bH.g)(HH, null, wL, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularRoughnessAnisotropy" in HH,
              get: HH => HH.specularRoughnessAnisotropy,
              set: (HH, BH) => {
                HH.specularRoughnessAnisotropy = BH
              }
            },
            metadata: BH
          }, zS, CS), (0, bH.g)(HH, null, ZL, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularRoughnessAnisotropyTexture" in HH,
              get: HH => HH.specularRoughnessAnisotropyTexture,
              set: (HH, BH) => {
                HH.specularRoughnessAnisotropyTexture = BH
              }
            },
            metadata: BH
          }, ES, XS), (0, bH.g)(HH, null, dL, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularIor" in HH,
              get: HH => HH.specularIor,
              set: (HH, BH) => {
                HH.specularIor = BH
              }
            },
            metadata: BH
          }, GS, YS), (0, bH.g)(HH, null, aL, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionWeight" in HH,
              get: HH => HH.transmissionWeight,
              set: (HH, BH) => {
                HH.transmissionWeight = BH
              }
            },
            metadata: BH
          }, uS, QS), (0, bH.g)(HH, null, sL, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionWeightTexture" in HH,
              get: HH => HH.transmissionWeightTexture,
              set: (HH, BH) => {
                HH.transmissionWeightTexture = BH
              }
            },
            metadata: BH
          }, WS, MS), (0, bH.g)(HH, null, JL, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionColor" in HH,
              get: HH => HH.transmissionColor,
              set: (HH, BH) => {
                HH.transmissionColor = BH
              }
            },
            metadata: BH
          }, xS, vS), (0, bH.g)(HH, null, iL, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionColorTexture" in HH,
              get: HH => HH.transmissionColorTexture,
              set: (HH, BH) => {
                HH.transmissionColorTexture = BH
              }
            },
            metadata: BH
          }, PS, TS), (0, bH.g)(HH, null, pL, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionDepth" in HH,
              get: HH => HH.transmissionDepth,
              set: (HH, BH) => {
                HH.transmissionDepth = BH
              }
            },
            metadata: BH
          }, US, VS), (0, bH.g)(HH, null, yL, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionDepthTexture" in HH,
              get: HH => HH.transmissionDepthTexture,
              set: (HH, BH) => {
                HH.transmissionDepthTexture = BH
              }
            },
            metadata: BH
          }, OS, bS), (0, bH.g)(HH, null, HA, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionScatter" in HH,
              get: HH => HH.transmissionScatter,
              set: (HH, BH) => {
                HH.transmissionScatter = BH
              }
            },
            metadata: BH
          }, kS, mS), (0, bH.g)(HH, null, BA, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionScatterTexture" in HH,
              get: HH => HH.transmissionScatterTexture,
              set: (HH, BH) => {
                HH.transmissionScatterTexture = BH
              }
            },
            metadata: BH
          }, oS, IS), (0, bH.g)(HH, null, LA, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionScatterAnisotropy" in HH,
              get: HH => HH.transmissionScatterAnisotropy,
              set: (HH, BH) => {
                HH.transmissionScatterAnisotropy = BH
              }
            },
            metadata: BH
          }, fS, lS), (0, bH.g)(HH, null, AA, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionDispersionScale" in HH,
              get: HH => HH.transmissionDispersionScale,
              set: (HH, BH) => {
                HH.transmissionDispersionScale = BH
              }
            },
            metadata: BH
          }, KS, cS), (0, bH.g)(HH, null, rA, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionDispersionScaleTexture" in HH,
              get: HH => HH.transmissionDispersionScaleTexture,
              set: (HH, BH) => {
                HH.transmissionDispersionScaleTexture = BH
              }
            },
            metadata: BH
          }, eS, qS), (0, bH.g)(HH, null, SA, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: HH => "transmissionDispersionAbbeNumber" in HH,
              get: HH => HH.transmissionDispersionAbbeNumber,
              set: (HH, BH) => {
                HH.transmissionDispersionAbbeNumber = BH
              }
            },
            metadata: BH
          }, gS, NS), (0, bH.g)(HH, null, hA, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceWeight" in HH,
              get: HH => HH.subsurfaceWeight,
              set: (HH, BH) => {
                HH.subsurfaceWeight = BH
              }
            },
            metadata: BH
          }, RS, jS), (0, bH.g)(HH, null, tA, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceWeightTexture" in HH,
              get: HH => HH.subsurfaceWeightTexture,
              set: (HH, BH) => {
                HH.subsurfaceWeightTexture = BH
              }
            },
            metadata: BH
          }, nS, FS), (0, bH.g)(HH, null, zA, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceColor" in HH,
              get: HH => HH.subsurfaceColor,
              set: (HH, BH) => {
                HH.subsurfaceColor = BH
              }
            },
            metadata: BH
          }, DS, wS), (0, bH.g)(HH, null, CA, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceColorTexture" in HH,
              get: HH => HH.subsurfaceColorTexture,
              set: (HH, BH) => {
                HH.subsurfaceColorTexture = BH
              }
            },
            metadata: BH
          }, ZS, dS), (0, bH.g)(HH, null, EA, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceRadius" in HH,
              get: HH => HH.subsurfaceRadius,
              set: (HH, BH) => {
                HH.subsurfaceRadius = BH
              }
            },
            metadata: BH
          }, aS, sS), (0, bH.g)(HH, null, XA, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceRadiusScale" in HH,
              get: HH => HH.subsurfaceRadiusScale,
              set: (HH, BH) => {
                HH.subsurfaceRadiusScale = BH
              }
            },
            metadata: BH
          }, JS, iS), (0, bH.g)(HH, null, GA, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceRadiusScaleTexture" in HH,
              get: HH => HH.subsurfaceRadiusScaleTexture,
              set: (HH, BH) => {
                HH.subsurfaceRadiusScaleTexture = BH
              }
            },
            metadata: BH
          }, pS, yS), (0, bH.g)(HH, null, YA, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: HH => "subsurfaceScatterAnisotropy" in HH,
              get: HH => HH.subsurfaceScatterAnisotropy,
              set: (HH, BH) => {
                HH.subsurfaceScatterAnisotropy = BH
              }
            },
            metadata: BH
          }, Hh, Bh), (0, bH.g)(HH, null, uA, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatWeight" in HH,
              get: HH => HH.coatWeight,
              set: (HH, BH) => {
                HH.coatWeight = BH
              }
            },
            metadata: BH
          }, Lh, Ah), (0, bH.g)(HH, null, QA, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatWeightTexture" in HH,
              get: HH => HH.coatWeightTexture,
              set: (HH, BH) => {
                HH.coatWeightTexture = BH
              }
            },
            metadata: BH
          }, rh, Sh), (0, bH.g)(HH, null, WA, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatColor" in HH,
              get: HH => HH.coatColor,
              set: (HH, BH) => {
                HH.coatColor = BH
              }
            },
            metadata: BH
          }, hh, th), (0, bH.g)(HH, null, MA, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatColorTexture" in HH,
              get: HH => HH.coatColorTexture,
              set: (HH, BH) => {
                HH.coatColorTexture = BH
              }
            },
            metadata: BH
          }, zh, Ch), (0, bH.g)(HH, null, xA, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatRoughness" in HH,
              get: HH => HH.coatRoughness,
              set: (HH, BH) => {
                HH.coatRoughness = BH
              }
            },
            metadata: BH
          }, Eh, Xh), (0, bH.g)(HH, null, vA, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatRoughnessTexture" in HH,
              get: HH => HH.coatRoughnessTexture,
              set: (HH, BH) => {
                HH.coatRoughnessTexture = BH
              }
            },
            metadata: BH
          }, Gh, Yh), (0, bH.g)(HH, null, PA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatRoughnessAnisotropy" in HH,
              get: HH => HH.coatRoughnessAnisotropy,
              set: (HH, BH) => {
                HH.coatRoughnessAnisotropy = BH
              }
            },
            metadata: BH
          }, uh, Qh), (0, bH.g)(HH, null, TA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatRoughnessAnisotropyTexture" in HH,
              get: HH => HH.coatRoughnessAnisotropyTexture,
              set: (HH, BH) => {
                HH.coatRoughnessAnisotropyTexture = BH
              }
            },
            metadata: BH
          }, Wh, Mh), (0, bH.g)(HH, null, UA, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatIor" in HH,
              get: HH => HH.coatIor,
              set: (HH, BH) => {
                HH.coatIor = BH
              }
            },
            metadata: BH
          }, xh, vh), (0, bH.g)(HH, null, VA, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatDarkening" in HH,
              get: HH => HH.coatDarkening,
              set: (HH, BH) => {
                HH.coatDarkening = BH
              }
            },
            metadata: BH
          }, Ph, Th), (0, bH.g)(HH, null, OA, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "coatDarkeningTexture" in HH,
              get: HH => HH.coatDarkeningTexture,
              set: (HH, BH) => {
                HH.coatDarkeningTexture = BH
              }
            },
            metadata: BH
          }, Uh, Vh), (0, bH.g)(HH, null, bA, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzWeight" in HH,
              get: HH => HH.fuzzWeight,
              set: (HH, BH) => {
                HH.fuzzWeight = BH
              }
            },
            metadata: BH
          }, Oh, bh), (0, bH.g)(HH, null, kA, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzWeightTexture" in HH,
              get: HH => HH.fuzzWeightTexture,
              set: (HH, BH) => {
                HH.fuzzWeightTexture = BH
              }
            },
            metadata: BH
          }, kh, mh), (0, bH.g)(HH, null, mA, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzColor" in HH,
              get: HH => HH.fuzzColor,
              set: (HH, BH) => {
                HH.fuzzColor = BH
              }
            },
            metadata: BH
          }, oh, Ih), (0, bH.g)(HH, null, oA, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzColorTexture" in HH,
              get: HH => HH.fuzzColorTexture,
              set: (HH, BH) => {
                HH.fuzzColorTexture = BH
              }
            },
            metadata: BH
          }, fh, lh), (0, bH.g)(HH, null, IA, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzRoughness" in HH,
              get: HH => HH.fuzzRoughness,
              set: (HH, BH) => {
                HH.fuzzRoughness = BH
              }
            },
            metadata: BH
          }, Kh, ch), (0, bH.g)(HH, null, fA, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "fuzzRoughnessTexture" in HH,
              get: HH => HH.fuzzRoughnessTexture,
              set: (HH, BH) => {
                HH.fuzzRoughnessTexture = BH
              }
            },
            metadata: BH
          }, eh, qh), (0, bH.g)(HH, null, lA, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryThinWalled" in HH,
              get: HH => HH.geometryThinWalled,
              set: (HH, BH) => {
                HH.geometryThinWalled = BH
              }
            },
            metadata: BH
          }, gh, Nh), (0, bH.g)(HH, null, KA, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryNormalTexture" in HH,
              get: HH => HH.geometryNormalTexture,
              set: (HH, BH) => {
                HH.geometryNormalTexture = BH
              }
            },
            metadata: BH
          }, Rh, jh), (0, bH.g)(HH, null, cA, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryTangent" in HH,
              get: HH => HH.geometryTangent,
              set: (HH, BH) => {
                HH.geometryTangent = BH
              }
            },
            metadata: BH
          }, nh, Fh), (0, bH.g)(HH, null, eA, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryTangentTexture" in HH,
              get: HH => HH.geometryTangentTexture,
              set: (HH, BH) => {
                HH.geometryTangentTexture = BH
              }
            },
            metadata: BH
          }, Dh, wh), (0, bH.g)(HH, null, qA, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryCoatNormalTexture" in HH,
              get: HH => HH.geometryCoatNormalTexture,
              set: (HH, BH) => {
                HH.geometryCoatNormalTexture = BH
              }
            },
            metadata: BH
          }, Zh, dh), (0, bH.g)(HH, null, gA, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryCoatTangent" in HH,
              get: HH => HH.geometryCoatTangent,
              set: (HH, BH) => {
                HH.geometryCoatTangent = BH
              }
            },
            metadata: BH
          }, ah, sh), (0, bH.g)(HH, null, NA, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryCoatTangentTexture" in HH,
              get: HH => HH.geometryCoatTangentTexture,
              set: (HH, BH) => {
                HH.geometryCoatTangentTexture = BH
              }
            },
            metadata: BH
          }, Jh, ih), (0, bH.g)(HH, null, RA, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryOpacity" in HH,
              get: HH => HH.geometryOpacity,
              set: (HH, BH) => {
                HH.geometryOpacity = BH
              }
            },
            metadata: BH
          }, ph, yh), (0, bH.g)(HH, null, jA, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryOpacityTexture" in HH,
              get: HH => HH.geometryOpacityTexture,
              set: (HH, BH) => {
                HH.geometryOpacityTexture = BH
              }
            },
            metadata: BH
          }, Ht, Bt), (0, bH.g)(HH, null, nA, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryThickness" in HH,
              get: HH => HH.geometryThickness,
              set: (HH, BH) => {
                HH.geometryThickness = BH
              }
            },
            metadata: BH
          }, Lt, At), (0, bH.g)(HH, null, FA, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "geometryThicknessTexture" in HH,
              get: HH => HH.geometryThicknessTexture,
              set: (HH, BH) => {
                HH.geometryThicknessTexture = BH
              }
            },
            metadata: BH
          }, rt, St), (0, bH.g)(HH, null, DA, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissionLuminance" in HH,
              get: HH => HH.emissionLuminance,
              set: (HH, BH) => {
                HH.emissionLuminance = BH
              }
            },
            metadata: BH
          }, ht, tt), (0, bH.g)(HH, null, wA, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissionColor" in HH,
              get: HH => HH.emissionColor,
              set: (HH, BH) => {
                HH.emissionColor = BH
              }
            },
            metadata: BH
          }, zt, Ct), (0, bH.g)(HH, null, ZA, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissionColorTexture" in HH,
              get: HH => HH.emissionColorTexture,
              set: (HH, BH) => {
                HH.emissionColorTexture = BH
              }
            },
            metadata: BH
          }, Et, Xt), (0, bH.g)(HH, null, dA, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmWeight" in HH,
              get: HH => HH.thinFilmWeight,
              set: (HH, BH) => {
                HH.thinFilmWeight = BH
              }
            },
            metadata: BH
          }, Gt, Yt), (0, bH.g)(HH, null, aA, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmWeightTexture" in HH,
              get: HH => HH.thinFilmWeightTexture,
              set: (HH, BH) => {
                HH.thinFilmWeightTexture = BH
              }
            },
            metadata: BH
          }, ut, Qt), (0, bH.g)(HH, null, sA, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmThickness" in HH,
              get: HH => HH.thinFilmThickness,
              set: (HH, BH) => {
                HH.thinFilmThickness = BH
              }
            },
            metadata: BH
          }, Wt, Mt), (0, bH.g)(HH, null, JA, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmThicknessMin" in HH,
              get: HH => HH.thinFilmThicknessMin,
              set: (HH, BH) => {
                HH.thinFilmThicknessMin = BH
              }
            },
            metadata: BH
          }, xt, vt), (0, bH.g)(HH, null, iA, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmThicknessTexture" in HH,
              get: HH => HH.thinFilmThicknessTexture,
              set: (HH, BH) => {
                HH.thinFilmThicknessTexture = BH
              }
            },
            metadata: BH
          }, Pt, Tt), (0, bH.g)(HH, null, pA, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: HH => "thinFilmIor" in HH,
              get: HH => HH.thinFilmIor,
              set: (HH, BH) => {
                HH.thinFilmIor = BH
              }
            },
            metadata: BH
          }, Ut, Vt), (0, bH.g)(HH, null, yA, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientOcclusionTexture" in HH,
              get: HH => HH.ambientOcclusionTexture,
              set: (HH, BH) => {
                HH.ambientOcclusionTexture = BH
              }
            },
            metadata: BH
          }, Ot, bt), (0, bH.g)(HH, null, Hr, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "directIntensity" in HH,
              get: HH => HH.directIntensity,
              set: (HH, BH) => {
                HH.directIntensity = BH
              }
            },
            metadata: BH
          }, kt, mt), (0, bH.g)(HH, null, Br, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "environmentIntensity" in HH,
              get: HH => HH.environmentIntensity,
              set: (HH, BH) => {
                HH.environmentIntensity = BH
              }
            },
            metadata: BH
          }, ot, It), (0, bH.g)(HH, null, Lr, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useSpecularWeightFromTextureAlpha" in HH,
              get: HH => HH.useSpecularWeightFromTextureAlpha,
              set: (HH, BH) => {
                HH.useSpecularWeightFromTextureAlpha = BH
              }
            },
            metadata: BH
          }, ft, lt), (0, bH.g)(HH, null, Ar, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceAlphaTest" in HH,
              get: HH => HH.forceAlphaTest,
              set: (HH, BH) => {
                HH.forceAlphaTest = BH
              }
            },
            metadata: BH
          }, Kt, ct), (0, bH.g)(HH, null, rr, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaCutOff" in HH,
              get: HH => HH.alphaCutOff,
              set: (HH, BH) => {
                HH.alphaCutOff = BH
              }
            },
            metadata: BH
          }, et, qt), (0, bH.g)(HH, null, Sr, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAmbientOcclusionFromMetallicTextureRed" in HH,
              get: HH => HH.useAmbientOcclusionFromMetallicTextureRed,
              set: (HH, BH) => {
                HH.useAmbientOcclusionFromMetallicTextureRed = BH
              }
            },
            metadata: BH
          }, gt, Nt), (0, bH.g)(HH, null, hr, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAmbientInGrayScale" in HH,
              get: HH => HH.useAmbientInGrayScale,
              set: (HH, BH) => {
                HH.useAmbientInGrayScale = BH
              }
            },
            metadata: BH
          }, Rt, jt), (0, bH.g)(HH, null, tr, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: HH => "usePhysicalLightFalloff" in HH,
              get: HH => HH.usePhysicalLightFalloff
            },
            metadata: BH
          }, null, lr), (0, bH.g)(HH, null, zr, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: HH => "useGLTFLightFalloff" in HH,
              get: HH => HH.useGLTFLightFalloff
            },
            metadata: BH
          }, null, lr), (0, bH.g)(HH, null, Cr, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useObjectSpaceNormalMap" in HH,
              get: HH => HH.useObjectSpaceNormalMap,
              set: (HH, BH) => {
                HH.useObjectSpaceNormalMap = BH
              }
            },
            metadata: BH
          }, nt, Ft), (0, bH.g)(HH, null, Er, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallax" in HH,
              get: HH => HH.useParallax,
              set: (HH, BH) => {
                HH.useParallax = BH
              }
            },
            metadata: BH
          }, Dt, wt), (0, bH.g)(HH, null, Xr, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallaxOcclusion" in HH,
              get: HH => HH.useParallaxOcclusion,
              set: (HH, BH) => {
                HH.useParallaxOcclusion = BH
              }
            },
            metadata: BH
          }, Zt, dt), (0, bH.g)(HH, null, Gr, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: HH => "parallaxScaleBias" in HH,
              get: HH => HH.parallaxScaleBias,
              set: (HH, BH) => {
                HH.parallaxScaleBias = BH
              }
            },
            metadata: BH
          }, st, Jt), (0, bH.g)(HH, null, Yr, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "disableLighting" in HH,
              get: HH => HH.disableLighting,
              set: (HH, BH) => {
                HH.disableLighting = BH
              }
            },
            metadata: BH
          }, it, pt), (0, bH.g)(HH, null, ur, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceIrradianceInFragment" in HH,
              get: HH => HH.forceIrradianceInFragment,
              set: (HH, BH) => {
                HH.forceIrradianceInFragment = BH
              }
            },
            metadata: BH
          }, yt, Hz), (0, bH.g)(HH, null, Qr, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "maxSimultaneousLights" in HH,
              get: HH => HH.maxSimultaneousLights,
              set: (HH, BH) => {
                HH.maxSimultaneousLights = BH
              }
            },
            metadata: BH
          }, Bz, Lz), (0, bH.g)(HH, null, Wr, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapX" in HH,
              get: HH => HH.invertNormalMapX,
              set: (HH, BH) => {
                HH.invertNormalMapX = BH
              }
            },
            metadata: BH
          }, Az, rz), (0, bH.g)(HH, null, Mr, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapY" in HH,
              get: HH => HH.invertNormalMapY,
              set: (HH, BH) => {
                HH.invertNormalMapY = BH
              }
            },
            metadata: BH
          }, Sz, hz), (0, bH.g)(HH, null, xr, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "twoSidedLighting" in HH,
              get: HH => HH.twoSidedLighting,
              set: (HH, BH) => {
                HH.twoSidedLighting = BH
              }
            },
            metadata: BH
          }, tz, zz), (0, bH.g)(HH, null, vr, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAlphaFresnel" in HH,
              get: HH => HH.useAlphaFresnel,
              set: (HH, BH) => {
                HH.useAlphaFresnel = BH
              }
            },
            metadata: BH
          }, Cz, Ez), (0, bH.g)(HH, null, Pr, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: HH => "useLinearAlphaFresnel" in HH,
              get: HH => HH.useLinearAlphaFresnel,
              set: (HH, BH) => {
                HH.useLinearAlphaFresnel = BH
              }
            },
            metadata: BH
          }, Xz, Gz), (0, bH.g)(HH, null, Tr, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "environmentBRDFTexture" in HH,
              get: HH => HH.environmentBRDFTexture,
              set: (HH, BH) => {
                HH.environmentBRDFTexture = BH
              }
            },
            metadata: BH
          }, Yz, uz), (0, bH.g)(HH, null, Ur, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceNormalForward" in HH,
              get: HH => HH.forceNormalForward,
              set: (HH, BH) => {
                HH.forceNormalForward = BH
              }
            },
            metadata: BH
          }, Qz, Wz), (0, bH.g)(HH, null, Vr, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: HH => "enableSpecularAntiAliasing" in HH,
              get: HH => HH.enableSpecularAntiAliasing,
              set: (HH, BH) => {
                HH.enableSpecularAntiAliasing = BH
              }
            },
            metadata: BH
          }, Mz, xz), (0, bH.g)(HH, null, Or, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useHorizonOcclusion" in HH,
              get: HH => HH.useHorizonOcclusion,
              set: (HH, BH) => {
                HH.useHorizonOcclusion = BH
              }
            },
            metadata: BH
          }, vz, Pz), (0, bH.g)(HH, null, br, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useRadianceOcclusion" in HH,
              get: HH => HH.useRadianceOcclusion,
              set: (HH, BH) => {
                HH.useRadianceOcclusion = BH
              }
            },
            metadata: BH
          }, Tz, Uz), (0, bH.g)(HH, null, kr, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: HH => "unlit" in HH,
              get: HH => HH.unlit,
              set: (HH, BH) => {
                HH.unlit = BH
              }
            },
            metadata: BH
          }, Vz, Oz), (0, bH.g)(HH, null, mr, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "applyDecalMapAfterDetailMap" in HH,
              get: HH => HH.applyDecalMapAfterDetailMap,
              set: (HH, BH) => {
                HH.applyDecalMapAfterDetailMap = BH
              }
            },
            metadata: BH
          }, bz, kz), (0, bH.g)(HH, null, or, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "debugMode" in HH,
              get: HH => HH.debugMode,
              set: (HH, BH) => {
                HH.debugMode = BH
              }
            },
            metadata: BH
          }, mz, oz), (0, bH.g)(HH, null, Ir, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "transparencyMode" in HH,
              get: HH => HH.transparencyMode
            },
            metadata: BH
          }, null, lr), BH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: BH
          })
        })(), HH.SSS_QUALITY_LOW = 0, HH.SSS_QUALITY_MEDIUM = 1, HH.SSS_QUALITY_HIGH = 2, HH._noiseTextures = {}, HH.ForceGLSL = !1, HH._ShaderLoader = new GB.b((() => [Promise.all([LH.e(626), LH.e(689)]).then((() => LH(64584))), Promise.all([LH.e(631), LH.e(627), LH.e(688), LH.e(693)]).then((() => LH(64595)))]), (() => [Promise.all([LH.e(645), LH.e(647), LH.e(692)]).then((() => LH(64634))), Promise.all([LH.e(645), LH.e(648), LH.e(691), LH.e(694)]).then((() => LH(64645)))])), HH
      })(),
      yB = !1;
    yB || (yB = !0, (0, aH.d)(), (0, nB.f)("BABYLON.OpenPBRMaterial", pB));
    var HL = LH(37997);
    class BL {
      constructor(HH) {
        this.name = cB.b.NAME_PROCEDURALTEXTURE, this.NQ = HH
      }
      register() {
        this.NQ._beforeClearStage.registerStep(cB.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.NQ.proceduralTexturesEnabled) {
          OB.i.StartPerformanceCounter("Procedural textures", this.NQ.proceduralTextures.length > 0);
          for (let HH = 0; HH < this.NQ.proceduralTextures.length; HH++) {
            const BH = this.NQ.proceduralTextures[HH];
            BH._shouldRender() && BH.render()
          }
          OB.i.EndPerformanceCounter("Procedural textures", this.NQ.proceduralTextures.length > 0)
        }
      }
    }
    var LL = LH(41609);
    let AL = (() => {
      var HH;
      let BH, AH, rH, hH, tH, zH = IH.g,
        CH = [],
        EH = [],
        XH = [],
        GH = [],
        YH = [],
        uH = [],
        WH = [],
        MH = [],
        xH = [];
      return HH = class extends zH {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(HH, BH, LH, AH) {
          let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, AH, !SH), this.isEnabled = ((0, bH.k)(this, CH), (0, bH.k)(this, EH, !0)), this.autoClear = ((0, bH.k)(this, XH), (0, bH.k)(this, GH, !0)), this.onGenerated = (0, bH.k)(this, YH), this.onGeneratedObservable = new HL.d, this.onBeforeGenerationObservable = new HL.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, bH.k)(this, uH, void 0), this._drawWrapper = (0, bH.k)(this, WH), this._textures = {}, this._size = (0, bH.k)(this, MH, void 0), this._textureType = (0, bH.k)(this, xH), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === rH || rH instanceof IH.g ? (this._options = {}, this._fallbackTexture = rH) : (this._options = rH, this._fallbackTexture = rH.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let zH = (AH = this.yN() || QH.d.LastCreatedScene)._getComponent(cB.b.NAME_PROCEDURALTEXTURE);
          zH || (zH = new BL(AH), AH.SrH(zH)), this._options.skipSceneRegistration || AH.proceduralTextures.push(this), this._fullEngine = AH.Iu(), this.name = HH, this.isRenderTarget = !0, this._size = BH, this._textureType = tH, this._generateMipMaps = SH, this._drawWrapper = new LL.e(this._fullEngine), this.setFragment(LH);
          const vH = this._createRtWrapper(hH, BH, SH, tH);
          this._texture = vH.texture;
          const PH = [];
          PH.push(1, 1), PH.push(-1, 1), PH.push(-1, -1), PH.push(1, -1), this._vertexBuffers[RH.i.PositionKind] = new RH.i(this._fullEngine, PH, RH.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(HH, BH, LH, AH) {
          return HH ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(BH, {
            generateMipMaps: LH,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: AH,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(BH, {
            generateMipMaps: LH,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: AH,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(HH) {
          this._drawWrapper.effect = HH
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((HH => {
            this._contentData = this.readPixels(0, 0, HH), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const HH = this._fullEngine,
            BH = [];
          BH.push(0), BH.push(1), BH.push(2), BH.push(0), BH.push(2), BH.push(3), this._indexBuffer = HH.createIndexBuffer(BH)
        }
        _rebuild() {
          const HH = this._vertexBuffers[RH.i.PositionKind];
          HH && HH._rebuild(), this._createIndexBuffer(), this.refreshRate === bB.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = bB.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(HH) {
          if (this.isReady()) return void HH(this);
          const BH = this.getEffect();
          BH && BH.executeWhenCompiled((() => {
            HH(this)
          }))
        }
        isReady() {
          const HH = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const BH = this._getDefines();
          if (this._drawWrapper.effect && BH === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const AH = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== BH && (this._cachedDefines = BH, this._drawWrapper.effect = HH.createEffect(AH, [RH.i.PositionKind], this._uniforms, this._samplers, BH, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([LH.e(697).then((() => LH(64720))), this._options.extraInitializationsAsync()]) : await Promise.all([LH.e(698).then((() => LH(64723))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await LH.e(697).then((() => LH(64720))) : await LH.e(698).then((() => LH(64723)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(HH) {
          this._fragment = HH
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(HH) {
          this._refreshRate = HH, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(HH, BH) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const LH = this._texture.isCube;
          this._rtWrapper.dispose();
          const AH = this._createRtWrapper(LH, HH, BH, this._textureType);
          this._texture = AH.texture, this._size = HH, this._generateMipMaps = BH
        }
        _checkUniform(HH) {
          -1 === this._uniforms.indexOf(HH) && this._uniforms.push(HH)
        }
        setTexture(HH, BH) {
          return -1 === this._samplers.indexOf(HH) && this._samplers.push(HH), this._textures[HH] = BH, this
        }
        setFloat(HH, BH) {
          return this._checkUniform(HH), this._floats[HH] = BH, this
        }
        setInt(HH, BH) {
          return this._checkUniform(HH), this._ints[HH] = BH, this
        }
        setFloats(HH, BH) {
          return this._checkUniform(HH), this._floatsArrays[HH] = BH, this
        }
        setColor3(HH, BH) {
          return this._checkUniform(HH), this._colors3[HH] = BH, this
        }
        setColor4(HH, BH) {
          return this._checkUniform(HH), this._colors4[HH] = BH, this
        }
        setVector2(HH, BH) {
          return this._checkUniform(HH), this._vectors2[HH] = BH, this
        }
        setVector3(HH, BH) {
          return this._checkUniform(HH), this._vectors3[HH] = BH, this
        }
        setVector4(HH, BH) {
          return this._checkUniform(HH), this._vectors4[HH] = BH, this
        }
        setMatrix(HH, BH) {
          return this._checkUniform(HH), this._matrices[HH] = BH, this
        }
        render(HH) {
          const BH = this.yN();
          if (!BH) return;
          const LH = this._fullEngine;
          if (LH.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), LH.setState(!1), !this.nodeMaterialSource) {
            for (const HH in this._textures) this._drawWrapper.effect.setTexture(HH, this._textures[HH]);
            for (const HH in this._ints) this._drawWrapper.effect.setInt(HH, this._ints[HH]);
            for (const HH in this._floats) this._drawWrapper.effect.setFloat(HH, this._floats[HH]);
            for (const HH in this._floatsArrays) this._drawWrapper.effect.setArray(HH, this._floatsArrays[HH]);
            for (const HH in this._colors3) this._drawWrapper.effect.setColor3(HH, this._colors3[HH]);
            for (const HH in this._colors4) {
              const BH = this._colors4[HH];
              this._drawWrapper.effect.setFloat4(HH, BH.r, BH.g, BH.b, BH.a)
            }
            for (const HH in this._vectors2) this._drawWrapper.effect.setVector2(HH, this._vectors2[HH]);
            for (const HH in this._vectors3) this._drawWrapper.effect.setVector3(HH, this._vectors3[HH]);
            for (const HH in this._vectors4) this._drawWrapper.effect.setVector4(HH, this._vectors4[HH]);
            for (const HH in this._matrices) this._drawWrapper.effect.setMatrix(HH, this._matrices[HH])
          }
          if (!this._texture || !this._rtWrapper) return;
          LH._enableGPUDebugMarkers && LH._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const AH = LH.currentViewport;
          if (this.isCube)
            for (let rH = 0; rH < 6; rH++) LH.bindFramebuffer(this._rtWrapper, rH, void 0, void 0, !0), LH.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", rH), this.autoClear && LH.clear(BH.clearColor, !0, !1, !1), LH.drawElementsType(SH.c.TriangleFillMode, 0, 6), LH.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let HH = 1;
            this._rtWrapper.is3D ? HH = this._rtWrapper.depth : this._rtWrapper.is2DArray && (HH = this._rtWrapper.layers);
            for (let AH = 0; AH < HH; AH++) {
              if (LH.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, AH), LH.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== HH ? AH / (HH - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", AH);
                for (const HH in this._textures) this._drawWrapper.effect.setTexture(HH, this._textures[HH])
              }
              this.autoClear && LH.clear(BH.clearColor, !0, !1, !1), LH.drawElementsType(SH.c.TriangleFillMode, 0, 6), LH.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          AH && LH.setViewport(AH), this.isCube && LH.generateMipMapsForCubemap(this._texture, !0), LH._enableGPUDebugMarkers && LH._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const BH = this.getSize(),
            LH = new HH(this.name, BH.width, this._fragment, this.yN(), this._fallbackTexture, this._generateMipMaps);
          return LH.hasAlpha = this.hasAlpha, LH.level = this.level, LH.coordinatesMode = this.coordinatesMode, LH
        }
        dispose() {
          const HH = this.yN();
          if (!HH) return;
          const BH = HH.proceduralTextures.indexOf(this);
          BH >= 0 && HH.proceduralTextures.splice(BH, 1);
          const LH = this._vertexBuffers[RH.i.PositionKind];
          LH && (LH.dispose(), this._vertexBuffers[RH.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const LH = "function" === typeof Symbol && Symbol.metadata ? Object.create(zH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, kH.H)()], AH = [(0, kH.H)()], rH = [(0, kH.H)()], hH = [(0, kH.H)()], tH = [(0, kH.H)()], (0, bH.g)(HH, null, tH, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: HH => "refreshRate" in HH,
            get: HH => HH.refreshRate
          },
          metadata: LH
        }, null, CH), (0, bH.g)(null, null, BH, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: LH
        }, EH, XH), (0, bH.g)(null, null, AH, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: HH => "autoClear" in HH,
            get: HH => HH.autoClear,
            set: (HH, BH) => {
              HH.autoClear = BH
            }
          },
          metadata: LH
        }, GH, YH), (0, bH.g)(null, null, rH, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: HH => "_generateMipMaps" in HH,
            get: HH => HH._generateMipMaps,
            set: (HH, BH) => {
              HH._generateMipMaps = BH
            }
          },
          metadata: LH
        }, uH, WH), (0, bH.g)(null, null, hH, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: HH => "_size" in HH,
            get: HH => HH._size,
            set: (HH, BH) => {
              HH._size = BH
            }
          },
          metadata: LH
        }, MH, xH), LH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LH
        })
      })(), HH
    })();

    function rL(HH) {
      return "texture" in HH
    }

    function SL(HH) {
      return "value" in HH
    }
    async function hL(HH, BH, AH) {
      const rH = [BH.red, BH.green, BH.blue, BH.alpha],
        SH = [],
        hH = [];
      for (let LH = 0; LH < 4; LH++) {
        const HH = rH[LH];
        if (HH)
          if (rL(HH)) {
            if (HH.sourceChannel < 0 || HH.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let BH = SH.indexOf(HH.texture); - 1 === BH && (BH = SH.length, SH.push(HH.texture)), hH[LH] = BH
          } else {
            if (!SL(HH)) throw new Error("Invalid channel input configuration");
            if (HH.value < 0 || HH.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            hH[LH] = -1
          }
        else hH[LH] = -1
      }
      let tH = BH.outputSize;
      if (!tH && SH.length > 0) {
        let HH = 0;
        for (const BH of SH) {
          const LH = BH.getSize(),
            AH = Math.max(LH.width, LH.height);
          AH > HH && (HH = AH, tH = LH.width === LH.height ? HH : LH)
        }
      }
      tH = tH || 512;
      const zH = [],
        CH = new Set;
      for (let LH = 0; LH < 4; LH++) {
        const HH = rH[LH],
          BH = ["RED", "GREEN", "BLUE", "ALPHA"][LH];
        if (HH && rL(HH)) {
          zH.push(`${BH}_FROM_TEXTURE`);
          const HH = hH[LH];
          CH.add(HH)
        }
      }
      CH.forEach((HH => {
        zH.push(`USE_TEXTURE${HH}`)
      }));
      const EH = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: AH.Iu().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            AH.Iu().isWebGPU ? await Promise.all([LH.e(695).then((() => LH(64708)))]) : await Promise.all([LH.e(696).then((() => LH(64714)))])
          },
          skipSceneRegistration: !0
        },
        XH = new AL(HH, tH, "textureMerger", AH, EH);
      XH.refreshRate = -1, XH.defines = zH.length > 0 ? "#define " + zH.join("\n#define ") + "\n" : "";
      for (let LH = 0; LH < SH.length; LH++) GH = SH[LH], (YH = XH).uOffset = GH.uOffset, YH.vOffset = GH.vOffset, YH.uScale = GH.uScale, YH.vScale = GH.vScale, YH.uAng = GH.uAng, YH.vAng = GH.vAng, YH.wAng = GH.wAng, YH.uRotationCenter = GH.uRotationCenter, YH.vRotationCenter = GH.vRotationCenter, XH.setTexture(`inputTexture${LH}`, SH[LH]);
      var GH, YH;
      for (let LH = 0; LH < 4; LH++) {
        const HH = rH[LH],
          BH = ["red", "green", "blue", "alpha"][LH];
        if (HH && rL(HH)) {
          const AH = hH[LH];
          XH.setInt(`${BH}TextureIndex`, AH), XH.setInt(`${BH}SourceChannel`, HH.sourceChannel)
        } else {
          let AH;
          AH = HH && SL(HH) ? HH.value : 3 === LH ? 1 : 0, XH.setFloat(`${BH}ConstantValue`, AH)
        }
      }
      return await new Promise(((HH, BH) => {
        XH.executeWhenReady((() => {
          try {
            XH.render(), HH(XH)
          } catch (LH) {
            BH(LH instanceof Error ? LH : new Error(String(LH)))
          }
        }))
      }))
    }

    function tL(HH, BH) {
      return {
        texture: HH,
        sourceChannel: BH
      }
    }

    function zL(HH) {
      return {
        value: HH
      }
    }

    function CL(HH, BH, LH, AH) {
      return {
        red: HH,
        green: BH,
        blue: LH,
        alpha: AH
      }
    }
    var EL = LH(41113),
      XL = LH(41218),
      GL = LH(37982),
      YL = LH(41271),
      uL = LH(41202);
    class QL {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class WL extends EL.c {
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
        return !!this._options?.enableMultiview || this.hQ > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new QL;
        super(null), void 0 === HH.deterministicLockstep && (HH.deterministicLockstep = !1), void 0 !== HH.timeStep && (this._timeStep = HH.timeStep), void 0 === HH.lockstepMaxSteps && (HH.lockstepMaxSteps = 4), this._options = HH, GL.e.SetMatrixPrecision(!!HH.useHighPrecisionMatrix), this._caps = {
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
        }, HH.enableMultiview && (this._caps.multiview = {
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
        }, HH.renderingCanvas && (this._renderingCanvas = HH.renderingCanvas), mH.e.Log(`Babylon.js v${EL.c.Version} - Null engine`);
        const BH = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (BH.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (BH.Blob = function() {})
      }
      createVertexBuffer(HH) {
        const BH = new XL.e;
        return BH.references = 1, BH
      }
      createIndexBuffer(HH) {
        const BH = new XL.e;
        return BH.references = 1, BH
      }
      clear(HH, BH, LH) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(HH, BH, LH) {
        this._cachedViewport = HH
      }
      createUniformBuffer(HH) {
        const BH = new XL.e;
        return BH.references = 1, BH.aX = HH instanceof Array ? HH.length * Float32Array.BYTES_PER_ELEMENT : HH.byteLength, BH
      }
      createDynamicUniformBuffer(HH) {
        return this.createUniformBuffer(HH)
      }
      updateUniformBuffer(HH, BH, LH, AH) {}
      bindUniformBufferBase(HH, BH, LH) {}
      bindUniformBlock(HH, BH, LH) {}
      createShaderProgram(HH, BH, LH, AH, rH) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(HH, BH) {
        return []
      }
      getAttributes(HH, BH) {
        return []
      }
      bindSamplers(HH) {
        this._currentEffect = null
      }
      enableEffect(HH) {
        HH = null !== HH && (0, uL.b)(HH) ? HH.effect : HH, this._currentEffect = HH, HH && (HH.onBind && HH.onBind(HH), HH._onBindObservable && HH._onBindObservable.notifyObservers(HH))
      }
      setStateCullFaceType(HH, BH) {}
      setState(HH) {}
      setIntArray(HH, BH) {
        return !0
      }
      setIntArray2(HH, BH) {
        return !0
      }
      setIntArray3(HH, BH) {
        return !0
      }
      setIntArray4(HH, BH) {
        return !0
      }
      setFloatArray(HH, BH) {
        return !0
      }
      setFloatArray2(HH, BH) {
        return !0
      }
      setFloatArray3(HH, BH) {
        return !0
      }
      setFloatArray4(HH, BH) {
        return !0
      }
      setArray(HH, BH) {
        return !0
      }
      setArray2(HH, BH) {
        return !0
      }
      setArray3(HH, BH) {
        return !0
      }
      setArray4(HH, BH) {
        return !0
      }
      setMatrices(HH, BH) {
        return !0
      }
      setMatrix3x3(HH, BH) {
        return !0
      }
      setMatrix2x2(HH, BH) {
        return !0
      }
      setFloat(HH, BH) {
        return !0
      }
      setFloat2(HH, BH, LH) {
        return !0
      }
      setFloat3(HH, BH, LH, AH) {
        return !0
      }
      setBool(HH, BH) {
        return !0
      }
      setFloat4(HH, BH, LH, AH, rH) {
        return !0
      }
      setAlphaMode(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[LH] !== HH && (this.alphaState.setAlphaBlend(0 !== HH, 0), BH || this.setDepthWrite(0 === HH), this._alphaMode[LH] = HH)
      }
      bindBuffers(HH, BH, LH) {}
      wipeCaches(HH) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, HH && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(HH, BH, LH, AH) {}
      drawElementsType(HH, BH, LH, AH) {}
      drawArraysType(HH, BH, LH, AH) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(HH) {}
      createTexture(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          hH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          tH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const zH = new kB.e(this, 1),
          CH = String(HH);
        return zH.url = CH, zH.generateMipMaps = !BH, zH.samplingMode = rH, zH.invertY = LH, zH.baseWidth = this._options.textureSize, zH.baseHeight = this._options.textureSize, zH.width = this._options.textureSize, zH.height = this._options.textureSize, tH && (zH.format = tH), hH && (zH._buffer = hH), zH.isReady = !0, SH && setTimeout((() => {
          SH(zH)
        })), this._internalTexturesCache.push(zH), zH
      }
      _createHardwareRenderTargetWrapper(HH, BH, LH) {
        const AH = new YL.d(HH, BH, LH, this);
        return this._renderTargetWrapperCache.push(AH), AH
      }
      createRenderTargetTexture(HH, BH) {
        const LH = this._createHardwareRenderTargetWrapper(!1, !1, HH),
          AH = {};
        void 0 !== BH && "object" === typeof BH ? (AH.generateMipMaps = BH.generateMipMaps, AH.generateDepthBuffer = void 0 === BH.generateDepthBuffer || BH.generateDepthBuffer, AH.generateStencilBuffer = AH.generateDepthBuffer && BH.generateStencilBuffer, AH.type = void 0 === BH.type ? 0 : BH.type, AH.samplingMode = void 0 === BH.samplingMode ? 3 : BH.samplingMode) : (AH.generateMipMaps = BH, AH.generateDepthBuffer = !0, AH.generateStencilBuffer = !1, AH.type = 0, AH.samplingMode = 3);
        const rH = new kB.e(this, 5);
        LH.setTexture(rH);
        const SH = HH.width || HH,
          hH = HH.height || HH;
        return LH._generateDepthBuffer = AH.generateDepthBuffer, LH._generateStencilBuffer = !!AH.generateStencilBuffer, rH.baseWidth = SH, rH.baseHeight = hH, rH.width = SH, rH.height = hH, rH.isReady = !0, rH.samples = 1, rH.generateMipMaps = !!AH.generateMipMaps, rH.samplingMode = AH.samplingMode, rH.type = AH.type, this._internalTexturesCache.push(rH), LH
      }
      createMultiviewRenderTargetTexture(HH, BH) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const LH = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: HH,
            height: BH
          }),
          AH = new kB.e(this, 5, !0);
        return AH.baseWidth = HH, AH.baseHeight = BH, AH.width = HH, AH.height = BH, AH.isMultiview = !0, AH.isReady = !0, AH.format = 5, AH.samples = 1, LH.setTextures(AH), LH
      }
      bindMultiviewFramebuffer(HH) {
        this.bindFramebuffer(HH, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(HH, BH) {
        const LH = this._createHardwareRenderTargetWrapper(!1, !0, HH),
          AH = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...BH
          };
        AH.generateStencilBuffer = AH.generateDepthBuffer && AH.generateStencilBuffer, (1 !== AH.type || this._caps.textureFloatLinearFiltering) && (2 !== AH.type || this._caps.textureHalfFloatLinearFiltering) || (AH.samplingMode = 1), LH._generateDepthBuffer = AH.generateDepthBuffer, LH._generateStencilBuffer = !!AH.generateStencilBuffer;
        const rH = new kB.e(this, 5);
        return rH.baseWidth = HH, rH.baseHeight = HH, rH.width = HH, rH.height = HH, rH.isReady = !0, rH.isCube = !0, rH.samples = 1, rH.generateMipMaps = !!AH.generateMipMaps, rH.samplingMode = AH.samplingMode, rH.type = AH.type, this._internalTexturesCache.push(rH), LH
      }
      updateTextureSamplingMode(HH, BH) {
        BH.samplingMode = HH
      }
      createRawTexture(HH, BH, LH, AH, rH, SH, hH) {
        let tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          CH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const EH = new kB.e(this, 3);
        return EH.baseWidth = BH, EH.baseHeight = LH, EH.width = BH, EH.height = LH, EH.format = AH, EH.generateMipMaps = rH, EH.samplingMode = hH, EH.invertY = SH, EH._compression = tH, EH.type = zH, EH._useSRGBBuffer = CH, this._doNotHandleContextLost || (EH._bufferView = HH), EH
      }
      updateRawTexture(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        HH && (HH._bufferView = BH, HH.format = LH, HH.invertY = AH, HH._compression = rH, HH.type = SH, HH._useSRGBBuffer = hH)
      }
      bindFramebuffer(HH, BH, LH, AH, rH) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = HH, this._currentFramebuffer = null, this._cachedViewport && !rH && this.setViewport(this._cachedViewport, LH, AH)
      }
      unBindFramebuffer(HH) {
        let BH = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, BH && BH(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(HH) {
        const BH = new XL.e;
        return BH.references = 1, BH.aX = 1, BH
      }
      updateDynamicTexture(HH, BH, LH) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(HH) {}
      updateDynamicIndexBuffer(HH, BH) {}
      updateDynamicVertexBuffer(HH, BH, LH, AH) {}
      _bindTextureDirectly(HH, BH) {
        return this._boundTexturesCache[this._activeChannel] !== BH && (this._boundTexturesCache[this._activeChannel] = BH, !0)
      }
      _bindTexture(HH, BH) {
        HH < 0 || this._bindTextureDirectly(0, BH)
      }
      _deleteBuffer(HH) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(HH) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(HH, BH, LH, AH, rH) {}
      _uploadDataToTextureDirectly(HH, BH) {}
      _uploadArrayBufferViewToTexture(HH, BH) {}
      _uploadImageToTexture(HH, BH) {}
    }
    LH(41330), LH(41370), LH(41328);
    async function ML(HH) {
      const BH = HH.getInternalTexture();
      if (!BH || 1 !== BH.source) return null;
      if (BH.invertY) {
        const BH = HH.yN()?.Iu();
        if (!(BH instanceof WL)) return null
      }
      const LH = BH._buffer;
      let AH, SH = HH.mimeType;
      try {
        LH ? ArrayBuffer.isView(LH) ? AH = LH.buffer.slice(LH.byteOffset, LH.byteOffset + LH.byteLength) : LH instanceof ArrayBuffer ? AH = LH : LH instanceof Blob ? (AH = await LH.arrayBuffer(), SH = LH.type || SH) : "string" === typeof LH ? (AH = await rH.Tools.LoadFileAsync(LH), SH = (0, zH.d)(LH) || SH) : "undefined" !== typeof HTMLImageElement && LH instanceof HTMLImageElement && (AH = await rH.Tools.LoadFileAsync(LH.src), SH = (0, zH.d)(LH.src) || SH) : (AH = await rH.Tools.LoadFileAsync(BH.url), SH = (0, zH.d)(BH.url) || SH)
      } catch {
        return null
      }
      if (AH && !SH && BH.url) {
        const HH = BH.url.match(/^data:([^;,]+)/);
        SH = HH ? HH[1] : (0, zH.d)(BH.url)
      }
      return AH && SH ? {
        data: AH,
        mimeType: SH
      } : null
    }
    const xL = 1e-6,
      vL = new WH.Color3(.04, .04, .04),
      PL = 1024,
      TL = WH.Color3.White(),
      UL = WH.Color3.BlackReadOnly;

    function VL(HH) {
      switch (HH) {
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

    function OL(HH, BH, LH) {
      if (BH < vL.r) return 0;
      const AH = vL.r,
        rH = HH * LH / (1 - vL.r) + BH - 2 * vL.r,
        SH = rH * rH - 4 * AH * (vL.r - BH);
      return vH.Clamp((-rH + Math.sqrt(SH)) / (2 * AH), 0, 1)
    }

    function bL(HH) {
      const BH = HH.diffuseColor.toLinearSpace(HH.yN().Iu().useExactSrgbConversions).scale(.5),
        LH = HH.alpha,
        AH = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new NH.n(0, 1),
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new NH.n(0, .1),
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NH.n(0, .1),
            rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new NH.n(1300, .1);
          return function(HH, BH, LH, AH, rH) {
            return (1 - HH) * (1 - HH) * (1 - HH) * BH + 3 * (1 - HH) * (1 - HH) * HH * LH + 3 * (1 - HH) * HH * HH * AH + HH * HH * HH * rH
          }(Math.pow(HH / rH.x, .333333), BH.y, LH.y, AH.y, rH.y)
        }(vH.Clamp(HH.specularPower, 0, PL));
      return {
        baseColorFactor: [BH.r, BH.g, BH.b, LH],
        metallicFactor: 0,
        roughnessFactor: AH
      }
    }

    function kL(HH, BH) {
      BH.needAlphaBlending() ? HH.alphaMode = "BLEND" : BH.needAlphaTesting() && (HH.alphaMode = "MASK", HH.alphaCutoff = BH.alphaCutOff)
    }

    function mL(HH, BH, LH) {
      const AH = new Uint8Array(HH * BH * 4);
      for (let rH = 0; rH < AH.length; rH += 4) AH[rH] = AH[rH + 1] = AH[rH + 2] = AH[rH + 3] = 255;
      return UH.b.CreateRGBATexture(AH, HH, BH, LH)
    }

    function oL(HH) {
      if (HH instanceof Uint8Array) {
        const BH = HH.length,
          LH = new Float32Array(HH.length);
        for (let AH = 0; AH < BH; ++AH) LH[AH] = HH[AH] / 255;
        return LH
      }
      if (HH instanceof Float32Array) return HH;
      throw new Error("Unsupported pixel format!")
    }
    class IL {
      constructor(HH) {
        this._exporter = HH, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(HH) {
        return HH ? this._textureMap.get(HH.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(HH, BH) {
        const LH = bL(HH),
          AH = {
            name: HH.name
          };
        if (null == HH.backFaceCulling || HH.backFaceCulling || (HH.twoSidedLighting || rH.Tools.Warn(HH.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), AH.doubleSided = !0), BH) {
          const BH = [],
            rH = HH.diffuseTexture;
          rH && BH.push(this.exportTextureAsync(rH).then((HH => {
            HH && (LH.baseColorTexture = HH)
          })));
          const SH = HH.bumpTexture;
          SH && BH.push(this.exportTextureAsync(SH).then((HH => {
            HH && (AH.normalTexture = HH, 1 !== SH.level && (AH.normalTexture.scale = SH.level))
          })));
          const hH = HH.emissiveTexture;
          hH && (AH.emissiveFactor = [1, 1, 1], BH.push(this.exportTextureAsync(hH).then((HH => {
            HH && (AH.emissiveTexture = HH)
          }))));
          const tH = HH.ambientTexture;
          tH && BH.push(this.exportTextureAsync(tH).then((HH => {
            if (HH) {
              const BH = {
                index: HH.index
              };
              AH.occlusionTexture = BH
            }
          }))), BH.length > 0 && (this._exporter._materialNeedsUVsSet.add(HH), await Promise.all(BH))
        }(HH.alpha < 1 || HH.opacityTexture) && (HH.alphaMode === VH.c.ALPHA_COMBINE ? AH.alphaMode = "BLEND" : rH.Tools.Warn(HH.name + ": glTF 2.0 does not support alpha mode: " + HH.alphaMode.toString())), HH.emissiveColor && !HH.emissiveColor.equalsWithEpsilon(UL, xL) && (AH.emissiveFactor = HH.emissiveColor.xrH()), AH.pbrMetallicRoughness = LH, kL(AH, HH), await this._finishMaterialAsync(AH, HH);
        const SH = this._exporter._materials;
        return SH.push(AH), SH.length - 1
      }
      async _finishMaterialAsync(HH, BH) {
        const LH = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", HH, BH),
          AH = [];
        for (const rH of LH) AH.push(this.exportTextureAsync(rH));
        await Promise.all(AH), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", HH, BH)
      }
      _resizeTexturesToSameDimensions(HH, BH, LH) {
        const AH = HH ? HH.getSize() : {
            width: 0,
            height: 0
          },
          rH = BH ? BH.getSize() : {
            width: 0,
            height: 0
          };
        let SH, hH;
        return AH.width < rH.width ? (SH = HH && HH instanceof TH.d ? PH.i.CreateResizedCopy(HH, rH.width, rH.height, !0) : mL(rH.width, rH.height, LH), hH = BH) : AH.width > rH.width ? (hH = BH && BH instanceof TH.d ? PH.i.CreateResizedCopy(BH, AH.width, AH.height, !0) : mL(AH.width, AH.height, LH), SH = HH) : (SH = HH, hH = BH), {
          texture1: SH,
          texture2: hH
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(HH, BH, LH) {
        const AH = new Array;
        if (!HH && !BH) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const rH = HH ? HH.yN() : BH ? BH.yN() : null;
        if (rH) {
          const SH = this._resizeTexturesToSameDimensions(HH, BH, rH),
            hH = SH.texture1?.getSize();
          let tH, zH;
          const CH = hH.width,
            EH = hH.height,
            XH = await SH.texture1.readPixels(),
            GH = await SH.texture2.readPixels();
          if (!XH) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (tH = oL(XH), !GH) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          zH = oL(GH);
          const YH = zH.byteLength,
            uH = new Uint8Array(YH),
            QH = new Uint8Array(YH),
            MH = 4,
            xH = new WH.Color3(0, 0, 0);
          let vH = 0,
            PH = 0;
          for (let HH = 0; HH < EH; ++HH)
            for (let BH = 0; BH < CH; ++BH) {
              const AH = (CH * HH + BH) * MH,
                hH = {
                  diffuseColor: new WH.Color3(tH[AH], tH[AH + 1], tH[AH + 2]).toLinearSpace(rH.Iu().useExactSrgbConversions).multiply(LH.diffuseColor),
                  specularColor: new WH.Color3(zH[AH], zH[AH + 1], zH[AH + 2]).toLinearSpace(rH.Iu().useExactSrgbConversions).multiply(LH.specularColor),
                  glossiness: zH[AH + 3] * LH.glossiness
                },
                EH = this._convertSpecularGlossinessToMetallicRoughness(hH);
              xH.r = Math.max(xH.r, EH.baseColor.r), xH.g = Math.max(xH.g, EH.baseColor.g), xH.b = Math.max(xH.b, EH.baseColor.b), vH = Math.max(vH, EH.metallic), PH = Math.max(PH, EH.roughness), QH[AH] = 255 * EH.baseColor.r, QH[AH + 1] = 255 * EH.baseColor.g, QH[AH + 2] = 255 * EH.baseColor.b, QH[AH + 3] = SH.texture1.hasAlpha ? 255 * tH[AH + 3] : 255, uH[AH] = 0, uH[AH + 1] = 255 * EH.roughness, uH[AH + 2] = 255 * EH.metallic, uH[AH + 3] = 255
            }
          const TH = {
            baseColor: xH,
            metallic: vH,
            roughness: PH
          };
          let UH = !1,
            VH = !1;
          for (let HH = 0; HH < EH; ++HH)
            for (let BH = 0; BH < CH; ++BH) {
              const LH = (CH * HH + BH) * MH;
              QH[LH] /= TH.baseColor.r > xL ? TH.baseColor.r : 1, QH[LH + 1] /= TH.baseColor.g > xL ? TH.baseColor.g : 1, QH[LH + 2] /= TH.baseColor.b > xL ? TH.baseColor.b : 1;
              const AH = WH.Color3.FromInts(QH[LH], QH[LH + 1], QH[LH + 2]).toGammaSpace(rH.Iu().useExactSrgbConversions);
              QH[LH] = 255 * AH.r, QH[LH + 1] = 255 * AH.g, QH[LH + 2] = 255 * AH.b, AH.equalsWithEpsilon(TL, xL) || (VH = !0), uH[LH + 1] /= TH.roughness > xL ? TH.roughness : 1, uH[LH + 2] /= TH.metallic > xL ? TH.metallic : 1;
              WH.Color3.FromInts(255, uH[LH + 1], uH[LH + 2]).equalsWithEpsilon(TL, xL) || (UH = !0)
            }
          return UH && AH.push((0, OH.EncodeImageAsync)(uH, CH, EH).then((HH => {
            TH.metallicRoughnessTextureData = HH
          }))), VH && AH.push((0, OH.EncodeImageAsync)(QH, CH, EH).then((HH => {
            TH.baseColorTextureData = HH
          }))), await Promise.all(AH).then((() => TH))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(HH) {
        const BH = this._getPerceivedBrightness(HH.diffuseColor),
          LH = this._getPerceivedBrightness(HH.specularColor),
          AH = 1 - this._getMaxComponent(HH.specularColor),
          rH = OL(BH, LH, AH),
          SH = HH.diffuseColor.scale(AH / (1 - vL.r) / Math.max(1 - rH, xL)),
          hH = HH.specularColor.subtract(vL.scale(1 - rH)).scale(1 / Math.max(rH, xL));
        let tH = WH.Color3.Lerp(SH, hH, rH * rH);
        tH = tH.clampToRef(0, 1, tH);
        return {
          baseColor: tH,
          metallic: rH,
          roughness: 1 - HH.glossiness
        }
      }
      _getPerceivedBrightness(HH) {
        return Math.sqrt(.299 * HH.r * HH.r + .587 * HH.g * HH.g + .114 * HH.b * HH.b)
      }
      _getMaxComponent(HH) {
        return Math.max(HH.r, Math.max(HH.g, HH.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        const CH = [],
          EH = {
            baseColor: HH,
            metallic: BH,
            roughness: LH
          };
        if (zH)
          if (hH instanceof pB) {
            if (hH.geometryOpacityTexture) {
              const HH = AH && AH.getInternalTexture() ? AH.getInternalTexture().uniqueId : 0,
                BH = hH.geometryOpacityTexture && hH.geometryOpacityTexture.getInternalTexture() ? hH.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                LH = Number(`${HH}${BH}`),
                rH = this._textureMap.get(LH);
              rH ? tH.baseColorTexture = rH : CH.push(hL("baseColorOpacityTexture", CL(AH ? tL(AH, 0) : zL(1), AH ? tL(AH, 1) : zL(1), AH ? tL(AH, 2) : zL(1), tL(hH.geometryOpacityTexture, 0)), hH.yN()).then((async HH => {
                const BH = await this.exportTextureAsync(HH, LH);
                BH && (tH.baseColorTexture = BH)
              })))
            } else AH && CH.push(this.exportTextureAsync(AH).then((HH => {
              HH && (tH.baseColorTexture = HH)
            })));
            if (hH._useMetallicFromMetallicTextureBlue && rH) CH.push(this.exportTextureAsync(rH).then((HH => {
              HH && (tH.metallicRoughnessTexture = HH)
            })));
            else if (SH || rH) {
              const HH = rH && rH.getInternalTexture() ? rH.getInternalTexture().uniqueId : 0,
                BH = SH && SH.getInternalTexture() ? SH.getInternalTexture().uniqueId : 0,
                LH = Number(`${HH}${BH}`),
                AH = this._textureMap.get(LH);
              AH ? tH.metallicRoughnessTexture = AH : CH.push(hL("MetalRoughTexture", CL(hH.ambientOcclusionTexture ? tL(hH.ambientOcclusionTexture, 0) : zL(1), SH ? tL(SH, 0) : zL(1), rH ? tL(rH, 0) : zL(1)), hH.yN()).then((async HH => {
                const BH = await this.exportTextureAsync(HH, LH);
                BH && (tH.metallicRoughnessTexture = BH)
              })))
            }
          } else AH && CH.push(this.exportTextureAsync(AH).then((HH => {
            HH && (tH.baseColorTexture = HH)
          }))), rH && CH.push(this.exportTextureAsync(rH).then((HH => {
            HH && (tH.metallicRoughnessTexture = HH)
          })));
        return CH.length > 0 && (this._exporter._materialNeedsUVsSet.add(hH), await Promise.all(CH)), EH
      }
      _getTextureSampler(HH) {
        const BH = {};
        if (!HH || !(HH instanceof TH.d)) return BH;
        const LH = this._getGLTFTextureWrapMode(HH.wrapU);
        10497 !== LH && (BH.wrapS = LH);
        const AH = this._getGLTFTextureWrapMode(HH.wrapV);
        switch (10497 !== AH && (BH.wrapT = AH), HH.samplingMode) {
          case TH.d.LINEAR_LINEAR:
            BH.magFilter = 9729, BH.minFilter = 9729;
            break;
          case TH.d.LINEAR_NEAREST:
            BH.magFilter = 9729, BH.minFilter = 9728;
            break;
          case TH.d.NEAREST_LINEAR:
            BH.magFilter = 9728, BH.minFilter = 9729;
            break;
          case TH.d.NEAREST_LINEAR_MIPLINEAR:
            BH.magFilter = 9728, BH.minFilter = 9987;
            break;
          case TH.d.NEAREST_NEAREST:
            BH.magFilter = 9728, BH.minFilter = 9728;
            break;
          case TH.d.NEAREST_LINEAR_MIPNEAREST:
            BH.magFilter = 9728, BH.minFilter = 9985;
            break;
          case TH.d.LINEAR_NEAREST_MIPNEAREST:
            BH.magFilter = 9729, BH.minFilter = 9984;
            break;
          case TH.d.LINEAR_NEAREST_MIPLINEAR:
            BH.magFilter = 9729, BH.minFilter = 9986;
            break;
          case TH.d.NEAREST_NEAREST_MIPLINEAR:
            BH.magFilter = 9728, BH.minFilter = 9986;
            break;
          case TH.d.LINEAR_LINEAR_MIPLINEAR:
            BH.magFilter = 9729, BH.minFilter = 9987;
            break;
          case TH.d.LINEAR_LINEAR_MIPNEAREST:
            BH.magFilter = 9729, BH.minFilter = 9985;
            break;
          case TH.d.NEAREST_NEAREST_MIPNEAREST:
            BH.magFilter = 9728, BH.minFilter = 9984
        }
        return BH
      }
      _getGLTFTextureWrapMode(HH) {
        switch (HH) {
          case TH.d.WRAP_ADDRESSMODE:
            return 10497;
          case TH.d.CLAMP_ADDRESSMODE:
            return 33071;
          case TH.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return rH.Tools.Error(`Unsupported Texture Wrap Mode ${HH}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(HH, BH, LH) {
        const AH = {
            diffuseColor: HH._albedoColor,
            specularColor: HH._reflectivityColor,
            glossiness: HH._microSurface
          },
          rH = HH._albedoTexture,
          SH = HH._reflectivityTexture,
          hH = HH._useMicroSurfaceFromReflectivityMapAlpha;
        if (SH && !hH) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((rH || SH) && LH) {
          this._exporter._materialNeedsUVsSet.add(HH);
          const LH = this._exportTextureSampler(rH || SH),
            hH = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(rH, SH, AH),
            tH = this._exporter._textures;
          if (hH.baseColorTextureData) {
            const HH = await this._exportImageAsync(`baseColor${tH.length}`, hH.baseColorTextureData);
            BH.baseColorTexture = this._exportTextureInfo(HH, LH, rH?.coordinatesIndex)
          }
          if (hH.metallicRoughnessTextureData) {
            const HH = await this._exportImageAsync(`metallicRoughness${tH.length}`, hH.metallicRoughnessTextureData);
            BH.metallicRoughnessTexture = this._exportTextureInfo(HH, LH, SH?.coordinatesIndex)
          }
          return hH
        }
        return this._convertSpecularGlossinessToMetallicRoughness(AH)
      }
      async exportPBRMaterialAsync(HH, BH) {
        const LH = {},
          AH = {
            name: HH.name
          },
          rH = HH.isMetallicWorkflow();
        if (rH) {
          const BH = HH._albedoColor,
            AH = HH.alpha;
          BH && (LH.baseColorFactor = [BH.r, BH.g, BH.b, AH])
        }
        const SH = rH ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(HH._albedoColor, HH._metallic, HH._roughness, HH._albedoTexture, HH._metallicTexture, HH._metallicTexture, HH, LH, BH) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(HH, LH, BH);
        await this._setMetallicRoughnessPbrMaterialAsync(SH, HH, AH, LH, BH), await this._finishMaterialAsync(AH, HH);
        const hH = this._exporter._materials;
        return hH.push(AH), hH.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(HH, BH, LH, AH, SH) {
        if (kL(LH, BH), HH.baseColor.equalsWithEpsilon(TL, xL) && vH.WithinEpsilon(BH.alpha, 1, xL) || (AH.baseColorFactor = [HH.baseColor.r, HH.baseColor.g, HH.baseColor.b, BH.alpha]), null != HH.metallic && 1 !== HH.metallic && (AH.metallicFactor = HH.metallic), null != HH.roughness && 1 !== HH.roughness && (AH.roughnessFactor = HH.roughness), null == BH.backFaceCulling || BH.backFaceCulling || (BH._twoSidedLighting || rH.Tools.Warn(BH.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), LH.doubleSided = !0), SH) {
          const HH = [],
            rH = BH instanceof UB ? BH._bumpTexture : BH.geometryNormalTexture;
          rH && HH.push(this.exportTextureAsync(rH).then((HH => {
            HH && (LH.normalTexture = HH, 1 !== rH.level && (LH.normalTexture.scale = rH.level))
          })));
          const SH = BH instanceof UB ? BH._ambientTexture : BH.ambientOcclusionTexture;
          SH && HH.push(new Promise((async HH => {
            if (BH instanceof pB && AH.metallicRoughnessTexture) {
              const BH = this._exportTextureSampler(SH),
                LH = this._exporter._textures[AH.metallicRoughnessTexture.index].source,
                rH = this._exportTextureInfo(LH, BH, SH.coordinatesIndex);
              return this._textureMap.set(SH.uniqueId, rH), this._exporter._extensionsPostExportTextures("exporter", rH, SH), HH(rH)
            }
            return HH(await this.exportTextureAsync(SH))
          })).then((async HH => {
            if (HH) {
              const AH = {
                index: HH.index,
                texCoord: HH.texCoord,
                extensions: HH.extensions
              };
              LH.occlusionTexture = AH, AH.strength = BH instanceof UB ? BH._ambientTextureStrength : BH.ambientOcclusionTexture.level
            }
          })));
          const hH = BH instanceof UB ? BH._emissiveTexture : BH.emissionColorTexture;
          hH && HH.push(this.exportTextureAsync(hH).then((HH => {
            HH && (LH.emissiveTexture = HH)
          }))), HH.length > 0 && (this._exporter._materialNeedsUVsSet.add(BH), await Promise.all(HH))
        }
        const hH = BH instanceof UB ? BH._emissiveColor : BH.emissionColor;
        hH.equalsWithEpsilon(UL, xL) || (LH.emissiveFactor = hH.xrH()), LH.pbrMetallicRoughness = AH
      }
      async exportOpenPBRMaterialAsync(HH, BH) {
        const LH = {},
          AH = {
            name: HH.name
          },
          rH = HH.baseColor,
          SH = HH.geometryOpacity;
        rH && (LH.baseColorFactor = [rH.r, rH.g, rH.b, SH]);
        const hH = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(HH.baseColor, HH.baseMetalness, HH.specularRoughness, HH.baseColorTexture, HH.baseMetalnessTexture, HH.specularRoughnessTexture, HH, LH, BH);
        await this._setMetallicRoughnessPbrMaterialAsync(hH, HH, AH, LH, BH), await this._finishMaterialAsync(AH, HH);
        const tH = this._exporter._materials;
        return tH.push(AH), tH.length - 1
      }
      async exportTextureAsync(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = this._textureMap.get(BH ?? HH.uniqueId);
        if (LH) return LH;
        const AH = this._exportTextureSampler(HH),
          rH = await this._exportTextureImageAsync(HH);
        return LH = this._exportTextureInfo(rH, AH, HH.coordinatesIndex), this._textureMap.set(BH ?? HH.uniqueId, LH), this._exporter._extensionsPostExportTextures("exporter", LH, HH), LH
      }
      async _exportTextureImageAsync(HH) {
        const BH = HH.mimeType ?? "none",
          LH = this._internalTextureToImage,
          AH = HH.getInternalTexture().uniqueId;
        LH[AH] = LH[AH] || {};
        let SH = LH[AH][BH];
        return void 0 === SH && (SH = (async () => {
          const LH = await ML(HH);
          if (LH && VL(LH.mimeType) && ("none" === BH || LH.mimeType === BH)) return await this._exportImageAsync(HH.name, new Blob([LH.data], {
            type: LH.mimeType
          }));
          let AH = "image/png";
          "none" !== BH && (VL(BH) ? AH = BH : (AH = "image/png", rH.Tools.Warn(`Unsupported media type: ${BH}. Exporting texture as PNG.`)));
          const SH = HH.getSize(),
            hH = await (0, PH.g)(HH),
            tH = await (0, OH.EncodeImageAsync)(hH, SH.width, SH.height, AH);
          return await this._exportImageAsync(HH.name, tH)
        })(), LH[AH][BH] = SH), await SH
      }
      async _exportImageAsync(HH, BH) {
        const LH = this._exporter._images;
        let AH;
        if (this._exporter._shouldUseGlb) {
          AH = {
            name: HH,
            mimeType: BH.type,
            bufferView: void 0
          };
          const LH = await BH.arrayBuffer(),
            rH = this._exporter._bufferManager.createBufferView(new Uint8Array(LH));
          this._exporter._bufferManager.setBufferView(AH, rH)
        } else {
          const SH = HH.replace(/\.\/|\/|\.\\|\\/g, "_"),
            hH = function(HH) {
              switch (HH) {
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
            }(BH.type);
          let tH = SH + hH;
          LH.some((HH => HH.uri === tH)) && (tH = `${SH}_${rH.Tools.RandomId()}${hH}`), AH = {
            name: HH,
            uri: tH
          }, this._exporter._imageData[tH] = BH
        }
        return LH.push(AH), LH.length - 1
      }
      _exportTextureInfo(HH, BH, LH) {
        const AH = this._exporter._textures;
        let rH = AH.findIndex((LH => LH.sampler == BH && LH.source === HH)); - 1 === rH && (rH = AH.length, AH.push({
          source: HH,
          sampler: BH
        }));
        const SH = {
          index: rH
        };
        return LH && (SH.texCoord = LH), SH
      }
      _exportTextureSampler(HH) {
        const BH = this._getTextureSampler(HH),
          LH = this._exporter._samplers,
          AH = LH.findIndex((HH => HH.minFilter === BH.minFilter && HH.magFilter === BH.magFilter && HH.wrapS === BH.wrapS && HH.wrapT === BH.wrapT));
        return -1 !== AH ? AH : (LH.push(BH), LH.length - 1)
      }
    }
    var fL = LH(41356),
      lL = LH(41483);
    (0, lL.c)();
    var KL = LH(37972);
    const cL = AH.Matrix.Compose(new AH.lu(-1, 1, 1), AH.Quaternion.Identity(), AH.lu.Zero());

    function eL(HH, BH) {
      if (!(HH instanceof XH.c)) return !1;
      if (BH) {
        if (!HH.getWorldMatrix().equalsWithEpsilon(AH.Matrix.IdentityReadOnly, KL.d)) return !1
      } else {
        if (!HH.getWorldMatrix().multiplyToRef(cL, AH.TmpVectors.Matrix[0]).equalsWithEpsilon(AH.Matrix.IdentityReadOnly, KL.d)) return !1
      }
      return !(HH instanceof GH.e && HH.geometry)
    }
    const qL = AH.lu.ZeroReadOnly,
      gL = AH.Quaternion.Identity(),
      NL = AH.lu.OneReadOnly,
      RL = new AH.lu(-1, 1, 1);

    function jL(HH, BH) {
      const {
        byteOffset: LH,
        byteStride: AH,
        type: rH,
        normalized: SH
      } = HH, hH = HH.getSize(), tH = BH.reduce(((HH, BH) => BH.getTotalVertices() > HH ? BH.getTotalVertices() : HH), -Number.MAX_VALUE);
      return {
        byteOffset: LH,
        byteStride: AH,
        componentCount: hH,
        type: rH,
        count: tH * hH,
        normalized: SH,
        totalVertices: tH,
        kind: HH.getKind()
      }
    }

    function nL(HH) {
      switch (HH) {
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

    function FL(HH) {
      switch (HH) {
        case EH.e.PositionKind:
        case EH.e.NormalKind:
        case EH.e.TangentKind:
        case EH.e.ColorKind:
        case EH.e.MatricesIndicesKind:
        case EH.e.MatricesIndicesExtraKind:
        case EH.e.MatricesWeightsKind:
        case EH.e.MatricesWeightsExtraKind:
        case EH.e.UVKind:
        case EH.e.UV2Kind:
        case EH.e.UV3Kind:
        case EH.e.UV4Kind:
        case EH.e.UV5Kind:
        case EH.e.UV6Kind:
          return !0
      }
      return !1
    }

    function DL(HH) {
      const BH = Math.sqrt(HH.x * HH.x + HH.y * HH.y + HH.z * HH.z);
      BH > 0 && (HH.x /= BH, HH.y /= BH, HH.z /= BH)
    }

    function wL(HH) {
      return HH.x *= -1, HH
    }

    function ZL(HH) {
      if (HH.x * HH.x + HH.y * HH.y > .5) {
        const BH = Math.abs(HH.x),
          LH = Math.abs(HH.y);
        if (BH > LH) {
          const LH = Math.sign(HH.x);
          HH.x = BH, HH.y *= -LH, HH.z *= -LH, HH.w *= LH
        } else {
          const BH = Math.sign(HH.y);
          HH.x *= -BH, HH.y = LH, HH.z *= BH, HH.w *= -BH
        }
      } else {
        const BH = Math.abs(HH.z),
          LH = Math.abs(HH.w);
        if (BH > LH) {
          const LH = Math.sign(HH.z);
          HH.x *= -LH, HH.y *= LH, HH.z = BH, HH.w *= -LH
        } else {
          const BH = Math.sign(HH.w);
          HH.x *= BH, HH.y *= -BH, HH.z *= -BH, HH.w = LH
        }
      }
      return HH
    }

    function dL(HH) {
      HH.SBH(-HH.z, HH.w, HH.x, -HH.y)
    }

    function aL(HH, BH) {
      const LH = AH.lu.FromArrayToRef(BH.translation || [0, 0, 0], 0, AH.TmpVectors.lu[0]),
        rH = AH.Quaternion.FromArrayToRef(BH.rotation || [0, 0, 0, 1], 0, AH.TmpVectors.Quaternion[0]),
        SH = AH.Matrix.ComposeToRef(NL, rH, LH, AH.TmpVectors.Matrix[0]),
        hH = AH.lu.FromArrayToRef(HH.translation || [0, 0, 0], 0, AH.TmpVectors.lu[2]),
        tH = AH.Quaternion.FromArrayToRef(HH.rotation || [0, 0, 0, 1], 0, AH.TmpVectors.Quaternion[1]),
        zH = AH.Matrix.ComposeToRef(NL, tH, hH, AH.TmpVectors.Matrix[1]);
      SH.multiplyToRef(zH, zH), zH.decompose(void 0, rH, LH), LH.equalsWithEpsilon(qL, KL.d) ? delete BH.translation : BH.translation = LH.xrH(), rH.equalsWithEpsilon(gL, KL.d) ? delete BH.rotation : BH.rotation = rH.xrH(), BH.scale && delete BH.scale
    }

    function sL(HH, BH) {
      if (!(BH instanceof XH.c)) return !1;
      if (!(1 === BH.getChildren().length && 0 === HH.getChildren().length && HH.parent === BH)) return !1;
      const LH = HH.yN(),
        AH = HH instanceof lL.e && !LH.useRightHandedSystem ? RL : NL;
      return !!BH.bX.equalsWithEpsilon(AH, KL.d) || (mH.e.Warn(`Cannot collapse node ${HH.name} into parent node ${BH.name} with modified scaling.`), !1)
    }

    function JL(HH) {
      if (HH instanceof Array) {
        const BH = new Float32Array(HH);
        return new Uint8Array(BH.buffer, BH.byteOffset, BH.byteLength)
      }
      return ArrayBuffer.isView(HH) ? new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength) : new Uint8Array(HH)
    }

    function iL(HH, BH) {
      for (const [LH, AH] of Object.entries(HH)) {
        const rH = BH[LH];
        (Array.isArray(AH) && Array.isArray(rH) && pL(AH, rH) || AH === rH) && delete HH[LH]
      }
      return HH
    }

    function pL(HH, BH) {
      return HH.length === BH.length && HH.every(((HH, LH) => HH === BH[LH]))
    }
    const yL = new Map([
      [Int8Array, (HH, BH, LH) => HH.setInt8(BH, LH)],
      [Uint8Array, (HH, BH, LH) => HH.setUint8(BH, LH)],
      [Uint8ClampedArray, (HH, BH, LH) => HH.setUint8(BH, LH)],
      [Int16Array, (HH, BH, LH) => HH.setInt16(BH, LH, !0)],
      [Uint16Array, (HH, BH, LH) => HH.setUint16(BH, LH, !0)],
      [Int32Array, (HH, BH, LH) => HH.setInt32(BH, LH, !0)],
      [Uint32Array, (HH, BH, LH) => HH.setUint32(BH, LH, !0)],
      [Float32Array, (HH, BH, LH) => HH.setFloat32(BH, LH, !0)],
      [Float64Array, (HH, BH, LH) => HH.setFloat64(BH, LH, !0)]
    ]);
    class HA {
      writeTypedArray(HH) {
        this._checkGrowBuffer(HH.byteLength);
        const BH = yL.get(HH.constructor);
        for (let LH = 0; LH < HH.length; LH++) BH(this._dataView, this._byteOffset, HH[LH]), this._byteOffset += HH.BYTES_PER_ELEMENT
      }
      constructor(HH) {
        this._data = new Uint8Array(HH), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(HH) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, HH), this._byteOffset++
      }
      writeInt8(HH) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, HH), this._byteOffset++
      }
      writeInt16(HH) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, HH, !0), this._byteOffset += 2
      }
      writeUInt16(HH) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, HH, !0), this._byteOffset += 2
      }
      writeInt32(HH) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, HH, !0), this._byteOffset += 4
      }
      writeUInt32(HH) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, HH, !0), this._byteOffset += 4
      }
      writeFloat32(HH) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, HH, !0), this._byteOffset += 4
      }
      writeFloat64(HH) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, HH, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(HH) {
        const BH = this.byteOffset + HH;
        if (BH > this._data.byteLength) {
          const HH = new Uint8Array(2 * BH);
          HH.set(this._data), this._data = HH, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function BA(HH) {
      return HH % 4 === 0 ? 4 : HH % 2 === 0 ? 2 : 1
    }
    class LA {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(HH) {
        let BH = 0;
        this._bufferViewToData.forEach((HH => {
          BH += HH.byteLength
        }));
        const LH = new HA(BH),
          AH = Array.from(this._bufferViewToData.keys()).sort(((HH, BH) => BA(BH.byteLength) - BA(HH.byteLength)));
        for (const rH of AH) {
          rH.byteOffset = LH.byteOffset, HH.push(rH);
          const BH = HH.length - 1,
            AH = this.getPropertiesWithBufferView(rH);
          for (const HH of AH) HH.bufferView = BH;
          LH.writeTypedArray(this._bufferViewToData.get(rH)), this._bufferViewToData.delete(rH)
        }
        return LH.getOutputData()
      }
      createBufferView(HH, BH) {
        const LH = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: HH.byteLength,
          byteStride: BH
        };
        return this._bufferViewToData.set(LH, HH), LH
      }
      createAccessor(HH, BH, LH, AH, rH, SH, hH) {
        this._verifyBufferView(HH);
        const tH = {
          bufferView: void 0,
          componentType: LH,
          count: AH,
          type: BH,
          min: SH?.min,
          max: SH?.max,
          normalized: hH,
          byteOffset: rH
        };
        return this.setBufferView(tH, HH), this._accessorToBufferView.set(tH, HH), tH
      }
      setBufferView(HH, BH) {
        this._verifyBufferView(BH);
        this.getPropertiesWithBufferView(BH).push(HH)
      }
      removeBufferView(HH) {
        const BH = this.getPropertiesWithBufferView(HH);
        for (const LH of BH) void 0 !== LH.bufferView && delete LH.bufferView;
        this._bufferViewToData.delete(HH), this._bufferViewToProperties.delete(HH), this._accessorToBufferView.forEach(((BH, LH) => {
          BH === HH && (void 0 !== LH.byteOffset && delete LH.byteOffset, this._accessorToBufferView.delete(LH))
        }))
      }
      getBufferView(HH) {
        const BH = this._accessorToBufferView.get(HH);
        return this._verifyBufferView(BH), BH
      }
      getPropertiesWithBufferView(HH) {
        return this._verifyBufferView(HH), this._bufferViewToProperties.set(HH, this._bufferViewToProperties.get(HH) ?? []), this._bufferViewToProperties.get(HH)
      }
      getData(HH) {
        return this._verifyBufferView(HH), this._bufferViewToData.get(HH)
      }
      _verifyBufferView(HH) {
        if (void 0 === HH || !this._bufferViewToData.has(HH)) throw new Error(`BufferView ${HH} not found in BufferManager.`)
      }
    }
    var AA = LH(41489);
    (0, AA.g)();
    var rA = LH(41742);
    (0, rA.g)();
    var SA = LH(41538),
      hA = LH(42398);
    (0, hA.e)();
    let tA = (() => {
      var HH;
      let BH, LH, AH = [],
        rH = [],
        SH = [],
        hH = [];
      return HH = class {
        get influence() {
          return this._influence
        }
        set influence(HH) {
          if (this._influence === HH) return;
          const BH = this._influence;
          this._influence = HH, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === BH || 0 === HH)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(HH) {
          this._animationPropertiesOverride = HH
        }
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = HH, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new HL.d, this._onDataLayoutChanged = new HL.d, this.id = (0, bH.k)(this, AH, void 0), this.morphTargetManager = ((0, bH.k)(this, rH), (0, bH.k)(this, SH, null)), this._animationPropertiesOverride = ((0, bH.k)(this, hH), null), this.id = HH, this.morphTargetManager = tH, this._scene = LH || QH.d.LastCreatedScene, this.influence = BH, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        ZtH(HH) {
          const BH = this.hasPositions;
          this._positions = HH, BH !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(HH) {
          const BH = this.hasNormals;
          this._normals = HH, BH !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(HH) {
          const BH = this.hasTangents;
          this._tangents = HH, BH !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(HH) {
          const BH = this.hasUVs;
          this._uvs = HH, BH !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(HH) {
          const BH = this.hasUV2s;
          this._uv2s = HH, BH !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(HH) {
          const BH = this.hasColors;
          this._colors = HH, BH !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const BH = VB.c.Clone((() => new HH(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return BH._positions = this._positions, BH._normals = this._normals, BH._tangents = this._tangents, BH._uvs = this._uvs, BH._uv2s = this._uv2s, BH._colors = this._colors, BH
        }
        serialize() {
          const HH = {};
          return HH.name = this.name, HH.influence = this.influence, null != this.id && (HH.id = this.id), HH.uniqueId = this.uniqueId, HH.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (HH.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (HH.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (HH.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (HH.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (HH.colors = Array.prototype.slice.call(this.getColors())), VB.c.AppendSerializedAnimations(this, HH), HH
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(BH, LH) {
          let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const rH = new HH(BH.name, BH.influence, LH, AH);
          if (rH.ZtH(BH.positions), null != BH.id && (rH.id = BH.id), BH.normals && rH.setNormals(BH.normals), BH.tangents && rH.setTangents(BH.tangents), BH.uvs && rH.setUVs(BH.uvs), BH.uv2s && rH.setUV2s(BH.uv2s), BH.colors && rH.setColors(BH.colors), BH.animations) {
            for (let HH = 0; HH < BH.animations.length; HH++) {
              const LH = BH.animations[HH],
                AH = (0, nB.b)("BABYLON.Animation");
              AH && rH.animations.push(AH.Parse(LH))
            }
            BH.autoAnimate && LH && LH.beginAnimation(rH, BH.autoAnimateFrom, BH.autoAnimateTo, BH.autoAnimateLoop, BH.autoAnimateSpeed || 1)
          }
          return rH
        }
        static FromMesh(BH, LH, AH) {
          LH || (LH = BH.name);
          const rH = new HH(LH, AH, BH.yN(), BH.morphTargetManager);
          return rH.ZtH(BH.getVerticesData(RH.i.PositionKind)), BH.isVerticesDataPresent(RH.i.NormalKind) && rH.setNormals(BH.getVerticesData(RH.i.NormalKind)), BH.isVerticesDataPresent(RH.i.TangentKind) && rH.setTangents(BH.getVerticesData(RH.i.TangentKind)), BH.isVerticesDataPresent(RH.i.UVKind) && rH.setUVs(BH.getVerticesData(RH.i.UVKind)), BH.isVerticesDataPresent(RH.i.UV2Kind) && rH.setUV2s(BH.getVerticesData(RH.i.UV2Kind)), BH.isVerticesDataPresent(RH.i.ColorKind) && rH.setColors(BH.getVerticesData(RH.i.ColorKind)), rH
        }
      }, (() => {
        const tH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, kH.H)()], LH = [(0, kH.H)()], (0, bH.g)(null, null, BH, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: HH => "id" in HH,
            get: HH => HH.id,
            set: (HH, BH) => {
              HH.id = BH
            }
          },
          metadata: tH
        }, AH, rH), (0, bH.g)(null, null, LH, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: HH => "morphTargetManager" in HH,
            get: HH => HH.morphTargetManager,
            set: (HH, BH) => {
              HH.morphTargetManager = BH
            }
          },
          metadata: tH
        }, SH, hH), tH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tH
        })
      })(), HH
    })();
    var zA, CA = LH(42458),
      EA = LH(41535);
    ! function(HH) {
      HH[HH.INTANGENT = 0] = "INTANGENT", HH[HH.OUTTANGENT = 1] = "OUTTANGENT"
    }(zA || (zA = {}));
    class XA {
      static _IsTransformable(HH) {
        return HH && (HH instanceof XH.c || HH instanceof AA.d || HH instanceof EA.b)
      }
      static _CreateNodeAnimation(HH, BH, LH, AH, SH) {
        if (this._IsTransformable(HH)) {
          const hH = [],
            tH = [],
            zH = BH.getKeys(),
            CH = XA._CalculateMinMaxKeyFrames(zH),
            EH = XA._DeduceInterpolation(zH, LH, AH),
            XH = EH.interpolationType,
            GH = EH.shouldBakeAnimation;
          if (GH ? XA._CreateBakedAnimation(HH, BH, LH, CH.min, CH.max, BH.framePerSecond, SH, hH, tH, CH, AH) : "LINEAR" === XH || "STEP" === XH ? XA._CreateLinearOrStepAnimation(HH, BH, LH, hH, tH, AH) : "CUBICSPLINE" === XH ? XA._CreateCubicSplineAnimation(HH, BH, LH, hH, tH, AH) : XA._CreateBakedAnimation(HH, BH, LH, CH.min, CH.max, BH.framePerSecond, SH, hH, tH, CH, AH), hH.length && tH.length) {
            return {
              inputs: hH,
              outputs: tH,
              samplerInterpolation: XH,
              inputsMin: GH ? CH.min : rH.Tools.FloatRound(CH.min / BH.framePerSecond),
              inputsMax: GH ? CH.max : rH.Tools.FloatRound(CH.max / BH.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(HH) {
        let BH = null,
          LH = "VEC3",
          AH = !1;
        const SH = HH.targetProperty.split(".");
        switch (SH[0]) {
          case "bX":
            BH = "scale";
            break;
          case "position":
            BH = "translation";
            break;
          case "rotation":
            LH = "VEC4", BH = "rotation";
            break;
          case "rotationQuaternion":
            LH = "VEC4", AH = !0, BH = "rotation";
            break;
          case "influence":
            LH = "SCALAR", BH = "weights";
            break;
          default:
            rH.Tools.Error(`Unsupported animatable property ${SH[0]}`)
        }
        return BH ? {
          animationChannelTargetPath: BH,
          dataAccessorType: LH,
          useQuaternion: AH
        } : (rH.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        let XH;
        if (XA._IsTransformable(HH) && HH.animations)
          for (const GH of HH.animations) {
            if (EH && !EH(GH)) continue;
            const rH = XA._DeduceAnimationInfo(GH);
            rH && (XH = {
              name: GH.name,
              samplers: [],
              channels: []
            }, XA._AddAnimation(`${GH.name}`, GH.hasRunningRuntimeAnimations ? BH : XH, HH, GH, rH.dataAccessorType, rH.animationChannelTargetPath, AH, SH, hH, tH, rH.useQuaternion, zH, CH), XH.samplers.length && XH.channels.length && LH.push(XH))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        let XH;
        if (HH instanceof CA.c) {
          const rH = HH.morphTargetManager;
          if (rH)
            for (let GH = 0; GH < rH.numTargets; ++GH) {
              const YH = rH.getTarget(GH);
              for (const uH of YH.animations) {
                if (EH && !EH(uH)) continue;
                const YH = new hA.b(`${uH.name}`, "influence", uH.framePerSecond, uH.dataType, uH.mB, uH.enableBlending),
                  QH = [],
                  WH = uH.getKeys();
                for (let HH = 0; HH < WH.length; ++HH) {
                  const BH = WH[HH];
                  for (let HH = 0; HH < rH.numTargets; ++HH) HH == GH ? QH.push(BH) : QH.push({
                    frame: BH.frame,
                    value: 0
                  })
                }
                YH.setKeys(QH, !0);
                const MH = XA._DeduceAnimationInfo(YH);
                MH && (XH = {
                  name: YH.name,
                  samplers: [],
                  channels: []
                }, XA._AddAnimation(uH.name, uH.hasRunningRuntimeAnimations ? BH : XH, HH, YH, MH.dataAccessorType, MH.animationChannelTargetPath, AH, SH, hH, tH, MH.useQuaternion, zH, CH, rH.numTargets), XH.samplers.length && XH.channels.length && LH.push(XH))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        let EH;
        if (HH.animationGroups) {
          const XH = HH.animationGroups;
          for (const GH of XH) {
            const XH = new Map,
              YH = new Map,
              uH = new Set,
              QH = GH.to - GH.from;
            EH = {
              name: GH.name,
              channels: [],
              samplers: []
            };
            for (let BH = 0; BH < GH.targetedAnimations.length; ++BH) {
              const CH = GH.targetedAnimations[BH],
                QH = CH.target,
                WH = CH.animation;
              if (zH && !zH(WH)) continue;
              const MH = tH.has(QH);
              if (this._IsTransformable(QH) || 1 === QH.length && this._IsTransformable(QH[0])) {
                const HH = XA._DeduceAnimationInfo(CH.animation);
                if (HH) {
                  const BH = this._IsTransformable(QH) ? QH : this._IsTransformable(QH[0]) ? QH[0] : null;
                  BH && XA._AddAnimation(`${WH.name}`, EH, BH, WH, HH.dataAccessorType, HH.animationChannelTargetPath, LH, AH, rH, SH, HH.useQuaternion, hH, MH)
                }
              } else if (QH instanceof tA || 1 === QH.length && QH[0] instanceof tA) {
                if (XA._DeduceAnimationInfo(CH.animation)) {
                  const BH = QH instanceof tA ? QH : QH[0];
                  if (BH) {
                    const LH = HH.morphTargetManagers.find((HH => {
                      for (let LH = 0; LH < HH.numTargets; ++LH)
                        if (HH.getTarget(LH) === BH) return !0;
                      return !1
                    }));
                    if (LH) {
                      const AH = HH.meshes.find((HH => HH.morphTargetManager === LH));
                      AH && (XH.has(AH) || XH.set(AH, new Map), XH.get(AH)?.set(BH, WH), uH.add(AH), YH.set(AH, WH))
                    }
                  }
                }
              }
            }
            uH.forEach((HH => {
              const BH = HH.morphTargetManager;
              let tH = null;
              const zH = [],
                CH = YH.get(HH).getKeys(),
                uH = CH.length;
              for (let LH = 0; LH < uH; ++LH)
                for (let AH = 0; AH < BH.numTargets; ++AH) {
                  const rH = BH.getTarget(AH),
                    SH = XH.get(HH);
                  if (SH) {
                    const BH = SH.get(rH);
                    BH ? (tH || (tH = new hA.b(`${GH.name}_${HH.name}_MorphWeightAnimation`, "influence", BH.framePerSecond, hA.b.ANIMATIONTYPE_FLOAT, BH.mB, BH.enableBlending)), zH.push(BH.getKeys()[LH])) : zH.push({
                      frame: GH.from + QH / uH * LH,
                      value: rH.influence,
                      inTangent: CH[0].inTangent ? 0 : void 0,
                      outTangent: CH[0].outTangent ? 0 : void 0
                    })
                  }
                }
              tH.setKeys(zH, !0);
              const WH = XA._DeduceAnimationInfo(tH);
              WH && XA._AddAnimation(`${GH.name}_${HH.name}_MorphWeightAnimation`, EH, HH, tH, WH.dataAccessorType, WH.animationChannelTargetPath, LH, AH, rH, SH, WH.useQuaternion, hH, !1, BH?.numTargets)
            })), EH.channels.length && EH.samplers.length && (CH?.set(GH, BH.length), BH.push(EH))
          }
        }
      }
      static _AddAnimation(HH, BH, LH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH) {
        const QH = XA._CreateNodeAnimation(LH, rH, hH, XH, GH);
        let WH, MH, xH, vH, PH, TH;
        if (QH) {
          if (uH) {
            let HH, BH = 0;
            const LH = [];
            for (; QH.inputs.length > 0;) HH = QH.inputs.shift(), BH % uH == 0 && LH.push(HH), BH++;
            QH.inputs = LH
          }
          const HH = tH.get(LH),
            rH = new Float32Array(QH.inputs);
          WH = zH.createBufferView(rH), MH = zH.createAccessor(WH, "SCALAR", 5126, QH.inputs.length, void 0, {
            min: [QH.inputsMin],
            max: [QH.inputsMax]
          }), EH.push(MH), xH = EH.length - 1;
          const CH = new AH.Quaternion,
            XH = new AH.lu,
            GH = new AH.lu,
            UH = LH instanceof AA.d,
            VH = nL(SH),
            OH = new Float32Array(QH.outputs.length * VH);
          QH.outputs.forEach((function(HH, BH) {
            let LH = HH;
            switch (hH) {
              case "translation":
                YH && (AH.lu.FromArrayToRef(HH, 0, GH), wL(GH), GH.toArray(LH));
                break;
              case "rotation":
                4 === HH.length ? AH.Quaternion.FromArrayToRef(HH, 0, CH) : (LH = new Array(4), AH.lu.FromArrayToRef(HH, 0, XH), AH.Quaternion.FromEulerVectorToRef(XH, CH)), YH && (ZL(CH), UH && dL(CH)), CH.toArray(LH)
            }
            OH.set(LH, BH * VH)
          })), WH = zH.createBufferView(OH), MH = zH.createAccessor(WH, SH, 5126, QH.outputs.length), EH.push(MH), vH = EH.length - 1, PH = {
            interpolation: QH.samplerInterpolation,
            input: xH,
            output: vH
          }, BH.samplers.push(PH), TH = {
            sampler: BH.samplers.length - 1,
            target: {
              node: HH,
              path: hH
            }
          }, BH.channels.push(TH)
        }
      }
      static _CreateBakedAnimation(HH, BH, LH, SH, hH, tH, zH, CH, EH, XH, GH) {
        let YH;
        const uH = AH.Quaternion.Identity();
        let QH, WH, MH, xH, vH, PH = null,
          TH = null;
        XH.min = rH.Tools.FloatRound(SH / tH);
        const UH = BH.getKeys();
        for (let AH = 0, VH = UH.length; AH < VH; ++AH) {
          if (WH = UH[AH], AH + 1 < VH)
            if (MH = UH[AH + 1], WH.value.equals && WH.value.equals(MH.value) || WH.value === MH.value) {
              if (0 !== AH) continue;
              vH = WH.frame
            } else vH = MH.frame;
          else {
            if (xH = UH[AH - 1], WH.value.equals && WH.value.equals(xH.value) || WH.value === xH.value) continue;
            vH = hH
          }
          if (vH)
            for (let AH = WH.frame; AH <= vH; AH += zH) {
              if (QH = rH.Tools.FloatRound(AH / tH), QH === PH) continue;
              PH = QH, TH = QH;
              const SH = {
                key: 0,
                repeatCount: 0,
                mB: BH.mB
              };
              YH = BH._interpolate(AH, SH), XA._SetInterpolatedValue(HH, YH, QH, BH, LH, uH, CH, EH, GH)
            }
        }
        TH && (XH.max = TH)
      }
      static _ConvertFactorToVector3OrQuaternion(HH, BH, LH, SH, hH) {
        const tH = XA._GetBasePositionRotationOrScale(BH, SH, hH),
          zH = LH.targetProperty.split("."),
          CH = zH ? zH[1] : "",
          EH = hH ? AH.Quaternion.FromArray(tH).normalize() : AH.lu.FromArray(tH);
        switch (CH) {
          case "x":
          case "y":
          case "z":
            EH[CH] = HH;
            break;
          case "w":
            EH.w = HH;
            break;
          default:
            rH.Tools.Error(`glTFAnimation: Unsupported component name "${CH}"!`)
        }
        return EH
      }
      static _SetInterpolatedValue(HH, BH, LH, rH, SH, hH, tH, zH, CH) {
        let EH;
        tH.push(LH), "weights" !== SH ? (rH.dataType === hA.b.ANIMATIONTYPE_FLOAT && (BH = this._ConvertFactorToVector3OrQuaternion(BH, HH, rH, SH, CH)), "rotation" === SH ? (CH ? hH = BH : (EH = BH, AH.Quaternion.RotationYawPitchRollToRef(EH.y, EH.x, EH.z, hH)), zH.push(hH.xrH())) : (EH = BH, zH.push(EH.xrH()))) : zH.push([BH])
      }
      static _CreateLinearOrStepAnimation(HH, BH, LH, AH, rH, SH) {
        for (const hH of BH.getKeys()) AH.push(hH.frame / BH.framePerSecond), XA._AddKeyframeValue(hH, BH, rH, LH, HH, SH)
      }
      static _CreateCubicSplineAnimation(HH, BH, LH, AH, rH, SH) {
        BH.getKeys().forEach((function(hH) {
          AH.push(hH.frame / BH.framePerSecond), XA._AddSplineTangent(zA.INTANGENT, rH, LH, "CUBICSPLINE", hH, SH), XA._AddKeyframeValue(hH, BH, rH, LH, HH, SH), XA._AddSplineTangent(zA.OUTTANGENT, rH, LH, "CUBICSPLINE", hH, SH)
        }))
      }
      static _GetBasePositionRotationOrScale(HH, BH, LH) {
        let rH;
        if ("rotation" === BH)
          if (LH) {
            rH = (HH.rotationQuaternion ?? AH.Quaternion.Identity()).xrH()
          } else {
            rH = (HH.rotation ?? AH.lu.Zero()).xrH()
          }
        else if ("translation" === BH) {
          rH = (HH.position ?? AH.lu.Zero()).xrH()
        } else {
          rH = (HH.bX ?? AH.lu.One()).xrH()
        }
        return rH
      }
      static _AddKeyframeValue(HH, BH, LH, SH, hH, tH) {
        let zH;
        const CH = BH.dataType;
        if (CH === hA.b.ANIMATIONTYPE_VECTOR3) {
          let BH = HH.value.xrH();
          if ("rotation" === SH) {
            const HH = AH.lu.FromArray(BH);
            BH = AH.Quaternion.RotationYawPitchRoll(HH.y, HH.x, HH.z).xrH()
          }
          LH.push(BH)
        } else if (CH === hA.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === SH) LH.push([HH.value]);
          else if (zH = this._ConvertFactorToVector3OrQuaternion(HH.value, hH, BH, SH, tH), zH) {
            if ("rotation" === SH) {
              const HH = tH ? zH : AH.Quaternion.RotationYawPitchRoll(zH.y, zH.x, zH.z).normalize();
              LH.push(HH.xrH())
            }
            LH.push(zH.xrH())
          }
        } else CH === hA.b.ANIMATIONTYPE_QUATERNION ? LH.push(HH.value.normalize().xrH()) : rH.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(HH, BH, LH) {
        let AH, rH, SH = !1;
        if ("rotation" === BH && !LH) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let hH = 0, tH = HH.length; hH < tH; ++hH)
          if (rH = HH[hH], rH.inTangent || rH.outTangent)
            if (AH) {
              if ("CUBICSPLINE" !== AH) {
                AH = "LINEAR", SH = !0;
                break
              }
            } else AH = "CUBICSPLINE";
        else if (AH) {
          if ("CUBICSPLINE" === AH || rH.interpolation && 1 === rH.interpolation && "STEP" !== AH) {
            AH = "LINEAR", SH = !0;
            break
          }
        } else AH = rH.interpolation && 1 === rH.interpolation ? "STEP" : "LINEAR";
        return AH || (AH = "LINEAR"), {
          interpolationType: AH,
          shouldBakeAnimation: SH
        }
      }
      static _AddSplineTangent(HH, BH, LH, rH, SH, hH) {
        let tH;
        const zH = HH === zA.INTANGENT ? SH.inTangent : SH.outTangent;
        if ("CUBICSPLINE" === rH) {
          if ("rotation" === LH)
            if (zH)
              if (hH) tH = zH.xrH();
              else {
                const HH = zH;
                tH = AH.Quaternion.RotationYawPitchRoll(HH.y, HH.x, HH.z).xrH()
              }
          else tH = [0, 0, 0, 0];
          else tH = "weights" === LH ? zH ? [zH] : [0] : zH ? zH.xrH() : [0, 0, 0];
          BH.push(tH)
        }
      }
      static _CalculateMinMaxKeyFrames(HH) {
        let BH = 1 / 0,
          LH = -1 / 0;
        return HH.forEach((function(HH) {
          BH = Math.min(BH, HH.frame), LH = Math.max(LH, HH.frame)
        })), {
          min: BH,
          max: LH
        }
      }
    }

    function GA(HH, BH, LH, SH, hH, tH) {
      const zH = {
          attributes: {},
          influence: HH.influence,
          name: HH.name
        },
        CH = BH.geometry;
      if (!CH) return rH.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), zH;
      const XH = tH ? -1 : 1,
        GH = AH.lu.Zero();
      let YH, uH;
      if (HH.hasPositions) {
        const SH = HH.getPositions(),
          tH = CH.getVerticesData(EH.e.PositionKind);
        if (tH) {
          const HH = new Float32Array(tH.length),
            BH = [1 / 0, 1 / 0, 1 / 0],
            rH = [-1 / 0, -1 / 0, -1 / 0];
          uH = tH.length / 3, YH = 0;
          for (let LH = YH; LH < uH; ++LH) {
            const hH = AH.lu.FromArray(tH, 3 * LH);
            AH.lu.FromArray(SH, 3 * LH).subtractToRef(hH, GH), GH.x *= XH, BH[0] = Math.min(BH[0], GH.x), rH[0] = Math.max(rH[0], GH.x), BH[1] = Math.min(BH[1], GH.y), rH[1] = Math.max(rH[1], GH.y), BH[2] = Math.min(BH[2], GH.z), rH[2] = Math.max(rH[2], GH.z), HH[3 * LH] = GH.x, HH[3 * LH + 1] = GH.y, HH[3 * LH + 2] = GH.z
          }
          const CH = LH.createBufferView(HH, 12),
            EH = LH.createAccessor(CH, "VEC3", 5126, SH.length / 3, 0, {
              min: BH,
              max: rH
            });
          hH.push(EH), zH.attributes.POSITION = hH.length - 1
        } else rH.Tools.Warn(`Morph target positions for mesh ${BH.name} were not exported. Mesh does not have position vertex data`)
      }
      if (HH.hasNormals) {
        const SH = HH.getNormals(),
          tH = CH.getVerticesData(EH.e.NormalKind);
        if (tH) {
          const HH = new Float32Array(tH.length);
          uH = tH.length / 3, YH = 0;
          for (let LH = YH; LH < uH; ++LH) {
            const BH = AH.lu.FromArray(tH, 3 * LH).normalize();
            AH.lu.FromArray(SH, 3 * LH).normalize().subtractToRef(BH, GH), HH[3 * LH] = GH.x * XH, HH[3 * LH + 1] = GH.y, HH[3 * LH + 2] = GH.z
          }
          const BH = LH.createBufferView(HH, 12),
            rH = LH.createAccessor(BH, "VEC3", 5126, SH.length / 3, 0);
          hH.push(rH), zH.attributes.NORMAL = hH.length - 1
        } else rH.Tools.Warn(`Morph target normals for mesh ${BH.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (HH.hasTangents) {
        const SH = HH.getTangents(),
          tH = CH.getVerticesData(EH.e.TangentKind);
        if (tH) {
          uH = tH.length / 4;
          const HH = new Float32Array(3 * uH);
          YH = 0;
          for (let LH = YH; LH < uH; ++LH) {
            const BH = AH.lu.FromArray(tH, 4 * LH);
            DL(BH);
            const rH = AH.lu.FromArray(SH, 3 * LH);
            DL(rH), rH.subtractToRef(BH, GH), HH[3 * LH] = GH.x * XH, HH[3 * LH + 1] = GH.y, HH[3 * LH + 2] = GH.z
          }
          const BH = LH.createBufferView(HH, 12),
            rH = LH.createAccessor(BH, "VEC3", 5126, uH, 0);
          hH.push(rH), zH.attributes.TANGENT = hH.length - 1
        } else rH.Tools.Warn(`Morph target tangents for mesh ${BH.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (HH.hasColors) {
        const SH = HH.getColors(),
          tH = CH.getVerticesData(EH.e.ColorKind),
          XH = CH.getVertexBuffer(EH.e.ColorKind);
        if (tH && XH) {
          const HH = XH.getSize();
          uH = tH.length / HH;
          const BH = new Float32Array(uH * HH);
          YH = 0;
          for (let LH = YH; LH < uH; ++LH)
            if (3 === HH) {
              const rH = AH.lu.FromArray(tH, LH * HH);
              AH.lu.FromArray(SH, LH * HH).subtractToRef(rH, GH), BH[3 * LH] = GH.x, BH[3 * LH + 1] = GH.y, BH[3 * LH + 2] = GH.z
            } else if (4 === HH) {
            const rH = new AH.Vector4,
              hH = AH.Vector4.FromArray(tH, LH * HH);
            AH.Vector4.FromArray(SH, LH * HH).subtractToRef(hH, rH), BH[4 * LH] = rH.x, BH[4 * LH + 1] = rH.y, BH[4 * LH + 2] = rH.z, BH[4 * LH + 3] = rH.w
          } else rH.Tools.Warn(`Unsupported number of components for color attribute: ${HH}`);
          const CH = LH.createBufferView(BH, 4 * HH),
            EH = LH.createAccessor(CH, 3 === HH ? "VEC3" : "VEC4", 5126, uH, 0);
          hH.push(EH), zH.attributes.COLOR_0 = hH.length - 1
        } else rH.Tools.Warn(`Morph target colors for mesh ${BH.name} were not exported. Mesh does not have colors vertex data`)
      }
      return zH
    }
    var YA = LH(45055);
    class uA {}
    uA.DEFAULT_COLOR = ZH.c.White(), uA.DEFAULT_WIDTH_ATTENUATED = 1, uA.DEFAULT_WIDTH = .1;
    var QA = LH(42396);
    class WA {
      constructor(HH) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = HH
      }
      moveTo(HH, BH) {
        this._currentPath = new QA.e(HH, BH), this._tempPaths.push(this._currentPath)
      }
      lineTo(HH, BH) {
        this._currentPath.addLineTo(HH, BH)
      }
      quadraticCurveTo(HH, BH, LH, AH) {
        this._currentPath.addQuadraticCurveTo(HH, BH, LH, AH, this._resolution)
      }
      bezierCurveTo(HH, BH, LH, AH, rH, SH) {
        this._currentPath.addBezierCurveTo(HH, BH, LH, AH, rH, SH, this._resolution)
      }
      extractHoles() {
        for (const HH of this._tempPaths) HH.area() > 0 ? this._holes.push(HH) : this._paths.push(HH);
        if (!this._paths.length && this._holes.length) {
          const HH = this._holes;
          this._holes = this._paths, this._paths = HH
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

    function MA(HH, BH, LH, AH, rH, SH) {
      const hH = SH.glyphs[HH] || SH.glyphs["?"];
      if (!hH) return null;
      const tH = new WA(rH);
      if (hH.o) {
        const HH = hH.o.split(" ");
        for (let rH = 0, SH = HH.length; rH < SH;) {
          switch (HH[rH++]) {
            case "m": {
              const SH = parseInt(HH[rH++]) * BH + LH,
                hH = parseInt(HH[rH++]) * BH + AH;
              tH.moveTo(SH, hH);
              break
            }
            case "l": {
              const SH = parseInt(HH[rH++]) * BH + LH,
                hH = parseInt(HH[rH++]) * BH + AH;
              tH.lineTo(SH, hH);
              break
            }
            case "q": {
              const SH = parseInt(HH[rH++]) * BH + LH,
                hH = parseInt(HH[rH++]) * BH + AH,
                zH = parseInt(HH[rH++]) * BH + LH,
                CH = parseInt(HH[rH++]) * BH + AH;
              tH.quadraticCurveTo(zH, CH, SH, hH);
              break
            }
            case "b": {
              const SH = parseInt(HH[rH++]) * BH + LH,
                hH = parseInt(HH[rH++]) * BH + AH,
                zH = parseInt(HH[rH++]) * BH + LH,
                CH = parseInt(HH[rH++]) * BH + AH,
                EH = parseInt(HH[rH++]) * BH + LH,
                XH = parseInt(HH[rH++]) * BH + AH;
              tH.bezierCurveTo(zH, CH, EH, XH, SH, hH);
              break
            }
          }
        }
      }
      return tH.extractHoles(), {
        offsetX: hH.ha * BH,
        shapePath: tH
      }
    }

    function xA(HH, BH, LH, AH) {
      const rH = Array.from(HH),
        SH = BH / AH.resolution,
        hH = (AH.boundingBox.yMax - AH.boundingBox.yMin + AH.underlineThickness) * SH,
        tH = [];
      let zH = 0,
        CH = 0;
      for (let EH = 0; EH < rH.length; EH++) {
        const HH = rH[EH];
        if ("\n" === HH) zH = 0, CH -= hH;
        else {
          const BH = MA(HH, SH, zH, CH, LH, AH);
          BH && (zH += BH.offsetX, tH.push(BH.shapePath))
        }
      }
      return tH
    }
    class vA {
      static ConvertPoints(HH, BH) {
        if (HH.length && Array.isArray(HH) && "number" === typeof HH[0]) return [HH];
        if (HH.length && Array.isArray(HH[0]) && "number" === typeof HH[0][0]) return HH;
        if (HH.length && !Array.isArray(HH[0]) && HH[0] instanceof NH.o) {
          const BH = [];
          for (let LH = 0; LH < HH.length; LH++) {
            const AH = HH[LH];
            BH.push(AH.x, AH.y, AH.z)
          }
          return [BH]
        }
        if (HH.length > 0 && Array.isArray(HH[0]) && HH[0].length > 0 && HH[0][0] instanceof NH.o) {
          const BH = [],
            LH = HH;
          for (const HH of LH) BH.push(HH.flatMap((HH => [HH.x, HH.y, HH.z])));
          return BH
        }
        if (HH instanceof Float32Array) {
          if (BH?.floatArrayStride) {
            const LH = [],
              AH = 3 * BH.floatArrayStride;
            for (let BH = 0; BH < HH.length; BH += AH) {
              const rH = new Array(AH);
              for (let LH = 0; LH < AH; LH++) rH[LH] = HH[BH + LH];
              LH.push(rH)
            }
            return LH
          }
          return [Array.from(HH)]
        }
        if (HH.length && HH[0] instanceof Float32Array) {
          const BH = [];
          for (const LH of HH) BH.push(Array.from(LH));
          return BH
        }
        return []
      }
      static OmitZeroLengthPredicate(HH, BH, LH) {
        const AH = [];
        return BH.subtract(HH).lengthSquared() > 0 && AH.push([HH, BH]), LH.subtract(BH).lengthSquared() > 0 && AH.push([BH, LH]), HH.subtract(LH).lengthSquared() > 0 && AH.push([LH, HH]), 0 === AH.length ? null : AH
      }
      static OmitDuplicatesPredicate(HH, BH, LH, AH) {
        const rH = [];
        return vA._SearchInPoints(HH, BH, AH) || rH.push([HH, BH]), vA._SearchInPoints(BH, LH, AH) || rH.push([BH, LH]), vA._SearchInPoints(LH, HH, AH) || rH.push([LH, HH]), 0 === rH.length ? null : rH
      }
      static _SearchInPoints(HH, BH, LH) {
        for (const AH of LH)
          for (let LH = 0; LH < AH.length; LH++)
            if (AH[LH]?.equals(HH) && (AH[LH + 1]?.equals(BH) || AH[LH - 1]?.equals(BH))) return !0;
        return !1
      }
      static MeshesToLines(HH, BH) {
        const LH = [];
        for (let AH = 0; AH < HH.length; AH++) {
          const rH = HH[AH],
            SH = rH.getVerticesData(RH.i.PositionKind),
            hH = rH.vrH();
          if (SH && hH)
            for (let HH = 0, tH = 0; HH < hH.length; HH++) {
              const zH = 3 * hH[tH++],
                CH = 3 * hH[tH++],
                EH = 3 * hH[tH++],
                XH = new NH.o(SH[zH], SH[zH + 1], SH[zH + 2]),
                GH = new NH.o(SH[CH], SH[CH + 1], SH[CH + 2]),
                YH = new NH.o(SH[EH], SH[EH + 1], SH[EH + 2]);
              if (BH) {
                const tH = BH(XH, GH, YH, LH, HH, zH, rH, AH, SH, hH);
                if (tH)
                  for (const HH of tH) LH.push(HH)
              } else LH.push([XH, GH], [GH, YH], [YH, XH])
            }
        }
        return LH
      }
      static ToVector3Array(HH) {
        if (Array.isArray(HH[0])) {
          const BH = [],
            LH = HH;
          for (const HH of LH) {
            const LH = [];
            for (let BH = 0; BH < HH.length; BH += 3) LH.push(new NH.o(HH[BH], HH[BH + 1], HH[BH + 2]));
            BH.push(LH)
          }
          return BH
        }
        const BH = HH,
          LH = [];
        for (let AH = 0; AH < BH.length; AH += 3) LH.push(new NH.o(BH[AH], BH[AH + 1], BH[AH + 2]));
        return LH
      }
      static ToNumberArray(HH) {
        return HH.flatMap((HH => [HH.x, HH.y, HH.z]))
      }
      static GetPointsCountInfo(HH) {
        const BH = new Array(HH.length);
        let LH = 0;
        for (let AH = HH.length; AH--;) BH[AH] = HH[AH].length / 3, LH += BH[AH];
        return {
          total: LH,
          counts: BH
        }
      }
      static GetLineLength(HH) {
        if (0 === HH.length) return 0;
        let BH;
        BH = "number" === typeof HH[0] ? vA.ToVector3Array(HH) : HH;
        const LH = NH.l.lu[0];
        let AH = 0;
        for (let rH = 0; rH < BH.length - 1; rH++) {
          const HH = BH[rH];
          AH += BH[rH + 1].subtractToRef(HH, LH).length()
        }
        return AH
      }
      static GetLineLengthArray(HH, BH) {
        const LH = BH ? new Float32Array(BH, 0, HH.length / 3) : new Float32Array(HH.length / 3);
        let AH = 0;
        for (let rH = 0, SH = HH.length / 3 - 1; rH < SH; rH++) {
          let BH = HH[3 * rH + 0],
            SH = HH[3 * rH + 1],
            hH = HH[3 * rH + 2];
          BH -= HH[3 * rH + 3], SH -= HH[3 * rH + 4], hH -= HH[3 * rH + 5];
          AH += Math.sqrt(BH * BH + SH * SH + hH * hH), LH[rH + 1] = AH
        }
        return LH
      }
      static SegmentizeSegmentByCount(HH, BH, LH) {
        const AH = [],
          rH = BH.subtract(HH),
          SH = NH.l.lu[0];
        SH.IHH(LH);
        const hH = NH.l.lu[1];
        rH.divideToRef(SH, hH);
        let tH = HH.clone();
        AH.push(tH);
        for (let zH = 0; zH < LH; zH++) tH = tH.clone(), AH.push(tH.addInPlace(hH));
        return AH
      }
      static SegmentizeLineBySegmentLength(HH, BH) {
        const LH = HH[0] instanceof NH.o ? vA.GetLineSegments(HH) : "number" === typeof HH[0] ? vA.GetLineSegments(vA.ToVector3Array(HH)) : HH,
          AH = [];
        for (const rH of LH)
          if (rH.length > BH) {
            const HH = vA.SegmentizeSegmentByCount(rH.point1, rH.point2, Math.ceil(rH.length / BH));
            for (const BH of HH) AH.push(BH)
          } else AH.push(rH.point1), AH.push(rH.point2);
        return AH
      }
      static SegmentizeLineBySegmentCount(HH, BH) {
        const LH = "number" === typeof HH[0] ? vA.ToVector3Array(HH) : HH,
          AH = vA.GetLineLength(LH) / BH;
        return vA.SegmentizeLineBySegmentLength(LH, AH)
      }
      static GetLineSegments(HH) {
        const BH = [];
        for (let LH = 0; LH < HH.length - 1; LH++) {
          const AH = HH[LH],
            rH = HH[LH + 1],
            SH = rH.subtract(AH).length();
          BH.push({
            point1: AH,
            point2: rH,
            length: SH
          })
        }
        return BH
      }
      static GetMinMaxSegmentLength(HH) {
        const BH = vA.GetLineSegments(HH).sort((HH => HH.length));
        return {
          min: BH[0].length,
          max: BH[BH.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rH = BH * LH;
        let SH = 0,
          hH = 0;
        const tH = HH.length;
        for (let CH = 0; CH < tH; CH++) {
          if (rH <= SH + HH[CH].length) {
            hH = CH;
            break
          }
          SH += HH[CH].length
        }
        const zH = (rH - SH) / HH[hH].length;
        return HH[hH].point2.subtractToRef(HH[hH].point1, NH.l.lu[0]), NH.l.lu[0].scaleToRef(zH, NH.l.lu[1]), AH || NH.l.lu[1].addInPlace(HH[hH].point1), NH.l.lu[1].clone()
      }
      static GetCircleLinePoints(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / BH;
        const SH = [];
        for (let hH = 0; hH <= BH; hH++) SH.push(new NH.o(Math.cos(hH * rH) * HH, Math.sin(hH * rH) * AH, LH));
        return SH
      }
      static GetBezierLinePoints(HH, BH, LH, AH) {
        return QA.c.CreateQuadraticBezier(HH, BH, LH, AH).getPoints().flatMap((HH => [HH.x, HH.y, HH.z]))
      }
      static GetArrowCap(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [HH.clone(), HH.add(BH.multiplyByFloats(LH, LH, LH))],
          widths: [AH, rH, SH, hH]
        }
      }
      static GetPointsFromText(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const hH = [],
          tH = xA(HH, BH, LH, AH);
        for (const zH of tH) {
          for (const HH of zH.paths) {
            const BH = [],
              LH = HH.getPoints();
            for (const HH of LH) BH.push(HH.x, HH.y, rH);
            hH.push(BH)
          }
          if (SH)
            for (const HH of zH.holes) {
              const BH = [],
                LH = HH.getPoints();
              for (const HH of LH) BH.push(HH.x, HH.y, rH);
              hH.push(BH)
            }
        }
        return hH
      }
      static Color3toRGBAUint8(HH) {
        const BH = new Uint8Array(4 * HH.length);
        for (let LH = 0, AH = 0; LH < HH.length; LH++) BH[AH++] = 255 * HH[LH].r, BH[AH++] = 255 * HH[LH].g, BH[AH++] = 255 * HH[LH].b, BH[AH++] = 255;
        return BH
      }
      static CreateColorsTexture(HH, BH, LH, AH) {
        const rH = AH.Iu().getCaps().maxTextureSize ?? 1,
          SH = BH.length > rH ? rH : BH.length,
          hH = Math.ceil(BH.length / rH);
        hH > 1 && (BH = [...BH, ...Array(SH * hH - BH.length).fill(BH[0])]);
        const tH = vA.Color3toRGBAUint8(BH),
          zH = new UH.b(tH, SH, hH, EL.c.TEXTUREFORMAT_RGBA, AH, !1, !0, LH);
        return zH.name = HH, zH
      }
      static PrepareEmptyColorsTexture(HH) {
        if (!uA.EmptyColorsTexture) {
          const BH = new Uint8Array(4);
          uA.EmptyColorsTexture = new UH.b(BH, 1, 1, EL.c.TEXTUREFORMAT_RGBA, HH, !1, !1, UH.b.NEAREST_NEAREST), uA.EmptyColorsTexture.name = "grlEmptyColorsTexture", uA.EmptyColorsTexture.uR.addOnce((() => {
            uA.EmptyColorsTexture = null
          }))
        }
        return uA.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        uA.EmptyColorsTexture?.dispose(), uA.EmptyColorsTexture = null
      }
      static BooleanToNumber(HH) {
        return HH ? 1 : 0
      }
    }
    class PA extends jH.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class TA extends nH.b {
      isCompatible(HH) {
        return !0
      }
      constructor(HH, BH, LH) {
        LH = LH || {
          color: uA.DEFAULT_COLOR
        };
        const AH = new PA;
        AH.GREASED_LINE_HAS_COLOR = !!LH.color && !LH.useColors, AH.GREASED_LINE_SIZE_ATTENUATION = LH.sizeAttenuation ?? !1, AH.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === LH.colorDistributionType, AH.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (BH ?? HH.yN()).useRightHandedSystem, AH.GREASED_LINE_CAMERA_FACING = LH.cameraFacing ?? !0, super(HH, TA.GREASED_LINE_MATERIAL_NAME, 200, AH, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = LH?.forceGLSL || TA.ForceGLSL, this._scene = BH ?? HH.yN(), this._engine = this._scene.Iu(), this._cameraFacing = LH.cameraFacing ?? !0, this.visibility = LH.visibility ?? 1, this.useDash = LH.useDash ?? !1, this.dashRatio = LH.dashRatio ?? .5, this.dashOffset = LH.dashOffset ?? 0, this.width = LH.width ? LH.width : LH.sizeAttenuation ? uA.DEFAULT_WIDTH_ATTENUATED : uA.DEFAULT_WIDTH, this._sizeAttenuation = LH.sizeAttenuation ?? !1, this.colorMode = LH.colorMode ?? 0, this._color = LH.color ?? null, this.useColors = LH.useColors ?? !1, this._colorsDistributionType = LH.colorDistributionType ?? 0, this.colorsSampling = LH.colorsSampling ?? UH.b.NEAREST_NEAREST, this._colors = LH.colors ?? null, this.dashCount = LH.dashCount ?? 1, this.resolution = LH.resolution ?? new NH.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), LH.colorsTexture ? this.colorsTexture = LH.colorsTexture : this._colors ? this.colorsTexture = vA.CreateColorsTexture(`${HH.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? uA.DEFAULT_COLOR, vA.PrepareEmptyColorsTexture(this._scene)), this._engine.uR.add((() => {
          vA.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(HH) {
        HH.push("grl_offsets"), HH.push("grl_widths"), HH.push("grl_colorPointers"), HH.push("grl_counters"), this._cameraFacing ? (HH.push("grl_previousAndSide"), HH.push("grl_nextAndCounters")) : HH.push("grl_slopes")
      }
      getSamplers(HH) {
        HH.push("grl_colors")
      }
      getActiveTextures(HH) {
        this.colorsTexture && HH.push(this.colorsTexture)
      }
      getUniforms() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const BH = [{
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
        return this._cameraFacing && BH.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === HH && BH.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: BH,
          vertex: this._cameraFacing && this._isGLSL(HH) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(HH) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(HH) {
        if (this._cameraFacing) {
          HH.wHH("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || HH.wHH("viewProjection", this._scene.getTransformMatrix());
          const BH = NH.l.Vector4[0];
          BH.x = this._aspect, BH.y = this._resolution.x, BH.z = this._resolution.y, BH.w = this.width, HH.updateVector4("grl_aspect_resolution_lineWidth", BH)
        }
        const BH = NH.l.Vector4[0];
        BH.x = vA.BooleanToNumber(this.useDash), BH.y = this._dashArray, BH.z = this.dashOffset, BH.w = this.dashRatio, HH.updateVector4("grl_dashOptions", BH);
        const LH = NH.l.Vector4[1];
        LH.x = this.colorMode, LH.y = this.visibility, LH.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, LH.w = vA.BooleanToNumber(this.useColors), HH.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", LH), this._color && HH.updateColor3("grl_singleColor", this._color);
        const AH = this.colorsTexture ?? uA.EmptyColorsTexture;
        HH.setTexture("grl_colors", AH), HH.updateFloat2("grl_textureSize", AH?.getSize().width ?? 1, AH?.getSize().height ?? 1)
      }
      prepareDefines(HH, BH, LH) {
        HH.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, HH.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, HH.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, HH.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = BH.useRightHandedSystem, HH.GREASED_LINE_CAMERA_FACING = this._cameraFacing, HH.GREASED_LINE_USE_OFFSETS = !!LH.offsets
      }
      getClassName() {
        return TA.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(BH) ? function(HH, BH) {
          if ("vertex" === HH) {
            const HH = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return BH && (HH["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), HH
          }
          return "fragment" === HH ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(HH, this._cameraFacing) : function(HH, BH) {
          if ("vertex" === HH) {
            const HH = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return BH && (HH["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), HH
          }
          return "fragment" === HH ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(HH, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(HH) {
        this.setColors(HH)
      }
      setColors(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this._colors?.length ?? 0;
        if (this._colors = HH, null !== HH && 0 !== HH.length) {
          if (!BH || LH)
            if (this.colorsTexture && AH === HH.length && !LH) {
              const BH = vA.Color3toRGBAUint8(HH);
              this.colorsTexture.update(BH)
            } else this.colorsTexture?.dispose(), this.colorsTexture = vA.CreateColorsTexture(`${this._material.name}-colors-texture`, HH, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(HH) {
        this._dashCount = HH, this._dashArray = 1 / HH
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(HH) {
        this._sizeAttenuation = HH, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(HH) {
        this.setColor(HH)
      }
      setColor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== HH || null !== this._color && null === HH ? (this._color = HH, BH || this.markAllDefinesAsDirty()) : this._color = HH
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(HH) {
        this._colorsDistributionType = HH, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(HH) {
        this._aspect = HH.x / HH.y, this._resolution = HH
      }
      serialize() {
        const HH = super.serialize(),
          BH = {
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
        return this._colors && (BH.colors = this._colors), this._color && (BH.color = this._color), HH.greasedLineMaterialOptions = BH, HH
      }
      parse(HH, BH, LH) {
        super.parse(HH, BH, LH);
        const AH = HH.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), AH.color && this.setColor(AH.color, !0), AH.colorDistributionType && (this.colorsDistributionType = AH.colorDistributionType), AH.colors && (this.colors = AH.colors), AH.colorsSampling && (this.colorsSampling = AH.colorsSampling), AH.colorMode && (this.colorMode = AH.colorMode), AH.useColors && (this.useColors = AH.useColors), AH.visibility && (this.visibility = AH.visibility), AH.useDash && (this.useDash = AH.useDash), AH.dashCount && (this.dashCount = AH.dashCount), AH.dashRatio && (this.dashRatio = AH.dashRatio), AH.dashOffset && (this.dashOffset = AH.dashOffset), AH.width && (this.width = AH.width), AH.sizeAttenuation && (this.sizeAttenuation = AH.sizeAttenuation), AH.resolution && (this.resolution = AH.resolution), this.colors ? this.colorsTexture = vA.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, BH) : vA.PrepareEmptyColorsTexture(BH), this.markAllDefinesAsDirty()
      }
      copyTo(HH) {
        const BH = HH;
        BH.colorsTexture?.dispose(), this._colors && (BH.colorsTexture = vA.CreateColorsTexture(`${BH._material.name}-colors-texture`, this._colors, BH.colorsSampling, this._scene)), BH.setColor(this.color, !0), BH.colorsDistributionType = this.colorsDistributionType, BH.colorsSampling = this.colorsSampling, BH.colorMode = this.colorMode, BH.useColors = this.useColors, BH.visibility = this.visibility, BH.useDash = this.useDash, BH.dashCount = this.dashCount, BH.dashRatio = this.dashRatio, BH.dashOffset = this.dashOffset, BH.width = this.width, BH.sizeAttenuation = this.sizeAttenuation, BH.resolution = this.resolution, BH.markAllDefinesAsDirty()
      }
      _isGLSL(HH) {
        return 0 === HH || this._forceGLSL
      }
    }
    TA.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", TA.ForceGLSL = !1;
    var UA = LH(41693),
      VA = LH(41703),
      OA = LH(39588),
      bA = LH(41769),
      kA = LH(41124);
    class mA extends bA.r {
      constructor(HH, BH, AH) {
        const rH = BH.Iu(),
          SH = rH.isWebGPU && !(AH.forceGLSL || mA.ForceGLSL),
          hH = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        BH.useRightHandedSystem && hH.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const tH = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        AH.cameraFacing ? (hH.push("GREASED_LINE_CAMERA_FACING"), tH.push("grl_previousAndSide", "grl_nextAndCounters")) : (tH.push("grl_slopes"), tH.push("grl_counters"));
        const zH = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (SH || zH.push("world", "viewProjection", "view", "projection"), super(HH, BH, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: SH ? ["Scene", "Mesh"] : void 0,
            attributes: tH,
            uniforms: zH,
            samplers: SH ? [] : ["grlColors"],
            defines: hH,
            extraInitializationsAsync: async () => {
              SH ? await Promise.all([LH.e(643).then((() => LH(64729))), LH.e(699).then((() => LH(64735)))]) : await Promise.all([LH.e(636).then((() => LH(64742))), LH.e(700).then((() => LH(64744)))])
            },
            shaderLanguage: SH ? 1 : 0
          }), this._color = ZH.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, AH = AH || {
            color: uA.DEFAULT_COLOR
          }, this.visibility = AH.visibility ?? 1, this.useDash = AH.useDash ?? !1, this.dashRatio = AH.dashRatio ?? .5, this.dashOffset = AH.dashOffset ?? 0, this.dashCount = AH.dashCount ?? 1, this.width = AH.width ? AH.width : AH.sizeAttenuation && AH.cameraFacing ? uA.DEFAULT_WIDTH_ATTENUATED : uA.DEFAULT_WIDTH, this.sizeAttenuation = AH.sizeAttenuation ?? !1, this.color = AH.color ?? ZH.c.White(), this.useColors = AH.useColors ?? !1, this.colorsDistributionType = AH.colorDistributionType ?? 0, this.colorsSampling = AH.colorsSampling ?? UH.b.NEAREST_NEAREST, this.colorMode = AH.colorMode ?? 0, this._colors = AH.colors ?? null, this._cameraFacing = AH.cameraFacing ?? !0, this.resolution = AH.resolution ?? new NH.n(rH.getRenderWidth(), rH.getRenderHeight()), AH.colorsTexture ? this.colorsTexture = AH.colorsTexture : this._colors ? this.colorsTexture = vA.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, BH) : (this._color = this._color ?? uA.DEFAULT_COLOR, this.colorsTexture = vA.PrepareEmptyColorsTexture(BH)), SH) {
          const HH = new kA.d;
          HH.setParameters(), HH.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", HH)
        }
        rH.uR.add((() => {
          vA.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== uA.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new NH.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(HH) {
        this.setColors(HH)
      }
      setColors(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this._colors?.length ?? 0;
        if (this._colors = HH, null !== HH && 0 !== HH.length) {
          if (!BH || LH)
            if (this._colorsTexture && AH === HH.length && !LH) {
              const BH = vA.Color3toRGBAUint8(HH);
              this._colorsTexture.update(BH)
            } else this._colorsTexture && this._colorsTexture !== uA.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = vA.CreateColorsTexture(`${this.name}-colors-texture`, HH, this.colorsSampling, this.yN())
        } else {
          this._colorsTexture && this._colorsTexture !== uA.EmptyColorsTexture && this._colorsTexture.dispose();
          const HH = this.yN();
          HH && (this.colorsTexture = vA.PrepareEmptyColorsTexture(HH))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(HH) {
        this._colorsTexture = HH, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(HH) {
        this._width = HH, this.setFloat("grlWidth", HH)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(HH) {
        this._useColors = HH, this.setFloat("grlUseColors", vA.BooleanToNumber(HH))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(HH) {
        this._colorsSampling = HH
      }
      get visibility() {
        return this._visibility
      }
      set visibility(HH) {
        this._visibility = HH, this.setFloat("grlVisibility", HH)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(HH) {
        this._useDash = HH, this.setFloat("grlUseDash", vA.BooleanToNumber(HH))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(HH) {
        this._dashOffset = HH, this.setFloat("grlDashOffset", HH)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(HH) {
        this._dashRatio = HH, this.setFloat("grlDashRatio", HH)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(HH) {
        this._dashCount = HH, this._dashArray = 1 / HH, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(HH) {
        this._sizeAttenuation = HH, this.setFloat("grlSizeAttenuation", vA.BooleanToNumber(HH))
      }
      get color() {
        return this._color
      }
      set color(HH) {
        this.setColor(HH)
      }
      setColor(HH) {
        HH = HH ?? uA.DEFAULT_COLOR, this._color = HH, this.setColor3("grlColor", HH)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(HH) {
        this._colorsDistributionType = HH, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(HH) {
        this._colorMode = HH, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(HH) {
        this._resolution = HH, this.setVector2("grlResolution", HH), this.setFloat("grlAspect", HH.x / HH.y)
      }
      serialize() {
        const HH = super.serialize(),
          BH = {
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
        return this._colors && (BH.colors = this._colors), HH.greasedLineMaterialOptions = BH, HH
      }
      parse(HH, BH, LH) {
        const AH = HH.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), AH.color && (this.color = AH.color), AH.colorDistributionType && (this.colorsDistributionType = AH.colorDistributionType), AH.colorsSampling && (this.colorsSampling = AH.colorsSampling), AH.colorMode && (this.colorMode = AH.colorMode), AH.useColors && (this.useColors = AH.useColors), AH.visibility && (this.visibility = AH.visibility), AH.useDash && (this.useDash = AH.useDash), AH.dashCount && (this.dashCount = AH.dashCount), AH.dashRatio && (this.dashRatio = AH.dashRatio), AH.dashOffset && (this.dashOffset = AH.dashOffset), AH.width && (this.width = AH.width), AH.sizeAttenuation && (this.sizeAttenuation = AH.sizeAttenuation), AH.resolution && (this.resolution = AH.resolution), AH.colors ? this.colorsTexture = vA.CreateColorsTexture(`${this.name}-colors-texture`, AH.colors, this.colorsSampling, this.yN()) : this.colorsTexture = vA.PrepareEmptyColorsTexture(BH), this._cameraFacing = AH.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var oA, IA, fA;
    mA.ForceGLSL = !1,
      function(HH) {
        HH[HH.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", HH[HH.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(oA || (oA = {})),
      function(HH) {
        HH[HH.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", HH[HH.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", HH[HH.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(IA || (IA = {})),
      function(HH) {
        HH[HH.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", HH[HH.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", HH[HH.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", HH[HH.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", HH[HH.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(fA || (fA = {}));
    class lA extends UA.c {
      constructor(HH, BH, LH) {
        super(HH, BH, null, null, !1, !1), this.name = HH, this._options = LH, this._lazy = !1, this._updatable = !1, this._engine = BH.Iu(), this._lazy = LH.lazy ?? !1, this._updatable = LH.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = LH.colorPointers ?? [], this._widths = LH.widths ?? new Array(LH.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(HH) {
        let BH = 0;
        for (const AH of this._points) BH += AH.length;
        const LH = BH / 3 * 2 - this._widths.length;
        for (let AH = 0; AH < LH; AH++) this._widths.push(HH)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.cu && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(HH, BH) {
        for (const LH of HH) this._points.push(LH);
        this._lazy || this.setPoints(this._points, BH)
      }
      dispose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(HH, BH)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(HH) {
        this._uvs = HH instanceof Float32Array ? HH : new Float32Array(HH), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(HH) {
        this.material instanceof mA && this.material.setDefine("GREASED_LINE_USE_OFFSETS", HH?.length > 0), this._offsets = HH, this._offsetsBuffer ? this._offsetsBuffer.update(HH) : this._createOffsetsBuffer(HH)
      }
      get widths() {
        return this._widths
      }
      set widths(HH) {
        this._widths = HH, this._lazy || this._widthsBuffer && this._widthsBuffer.update(HH)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(HH) {
        this._colorPointers = HH, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(HH)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof mA) return this.material;
        const HH = this.material?.pluginManager?.getPlugin(TA.GREASED_LINE_MATERIAL_NAME);
        return HH || void 0
      }
      get points() {
        const HH = [];
        return OA.d.DeepCopy(this._points, HH), HH
      }
      setPoints(HH, BH) {
        this._points = vA.ConvertPoints(HH, BH?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), BH?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, BH)
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
      serialize(HH) {
        super.serialize(HH), HH.type = this.getClassName(), HH.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new VA.b;
        return BH.positions = this._vertexPositions, BH.indices = this._indices, BH.uvs = this._uvs, HH && (BH.normals = [], VA.b.ComputeNormals(this._vertexPositions, this._indices, BH.normals)), BH.applyToMesh(this, this._options.updatable), BH
      }
      _createOffsetsBuffer(HH) {
        const BH = this._scene.Iu(),
          LH = new RH.b(BH, HH, this._updatable, 3);
        this.setVerticesBuffer(LH.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = LH
      }
    }
    class KA {
      constructor(HH, BH) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = HH, this.wasAddedByNoopNode = BH
      }
      getIndicesAccessor(HH, BH, LH, AH, rH) {
        return this._indicesAccessorMap.get(HH)?.get(BH)?.get(LH)?.get(AH)?.get(rH)
      }
      setIndicesAccessor(HH, BH, LH, AH, rH, SH) {
        let hH = this._indicesAccessorMap.get(HH);
        hH || (hH = new Map, this._indicesAccessorMap.set(HH, hH));
        let tH = hH.get(BH);
        tH || (tH = new Map, hH.set(BH, tH));
        let zH = tH.get(LH);
        zH || (zH = new Map, tH.set(LH, zH));
        let CH = zH.get(AH);
        CH || (CH = new Map, zH.set(AH, CH)), CH.set(rH, SH)
      }
      pushExportedNode(HH) {
        this._exportedNodes.has(HH) || this._exportedNodes.add(HH)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(HH) {
        return this._vertexBufferViewMap.get(HH)
      }
      setVertexBufferView(HH, BH) {
        this._vertexBufferViewMap.set(HH, BH)
      }
      setRemappedBufferView(HH, BH, LH) {
        this._remappedBufferView.set(HH, new Map), this._remappedBufferView.get(HH).set(BH, LH)
      }
      getRemappedBufferView(HH, BH) {
        return this._remappedBufferView.get(HH)?.get(BH)
      }
      getVertexAccessor(HH, BH, LH) {
        return this._vertexAccessorMap.get(HH)?.get(BH)?.get(LH)
      }
      setVertexAccessor(HH, BH, LH, AH) {
        let rH = this._vertexAccessorMap.get(HH);
        rH || (rH = new Map, this._vertexAccessorMap.set(HH, rH));
        let SH = rH.get(BH);
        SH || (SH = new Map, rH.set(BH, SH)), SH.set(LH, AH)
      }
      hasVertexColorAlpha(HH) {
        return this._vertexMapColorAlpha.get(HH) || !1
      }
      setHasVertexColorAlpha(HH, BH) {
        return this._vertexMapColorAlpha.set(HH, BH)
      }
      getMesh(HH) {
        return this._meshMap.get(HH)
      }
      setMesh(HH, BH) {
        this._meshMap.set(HH, BH)
      }
      bindMorphDataToMesh(HH, BH) {
        const LH = this._meshMorphTargetMap.get(HH) || [];
        this._meshMorphTargetMap.set(HH, LH), -1 === LH.indexOf(BH) && LH.push(BH)
      }
      getMorphTargetsFromMesh(HH) {
        return this._meshMorphTargetMap.get(HH)
      }
    }
    class cA {
      _ApplyExtension(HH, BH, LH, AH) {
        if (LH >= BH.length) return Promise.resolve(HH);
        const rH = AH(BH[LH], HH);
        return rH ? rH.then((async HH => HH ? await this._ApplyExtension(HH, BH, LH + 1, AH) : null)) : this._ApplyExtension(HH, BH, LH + 1, AH)
      }
      _ApplyExtensions(HH, BH) {
        const LH = [];
        for (const AH of cA._ExtensionNames) LH.push(this._extensions[AH]);
        return this._ApplyExtension(HH, LH, 0, BH)
      }
      _extensionsPostExportNodeAsync(HH, BH, LH, AH, rH) {
        return this._ApplyExtensions(BH, ((BH, SH) => BH.postExportNodeAsync && BH.postExportNodeAsync(HH, SH, LH, AH, rH, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(HH, BH, LH) {
        return this._ApplyExtensions(BH, ((BH, AH) => BH.postExportMaterialAsync && BH.postExportMaterialAsync(HH, AH, LH)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        return await Promise.all(cA._ExtensionNames.map((async rH => {
          const SH = this._extensions[rH];
          if (SH.postExportMaterialAdditionalTexturesAsync) {
            const rH = await SH.postExportMaterialAdditionalTexturesAsync(HH, BH, LH);
            AH.push(...rH)
          }
        }))), AH
      }
      _extensionsPostExportTextures(HH, BH, LH) {
        for (const AH of cA._ExtensionNames) {
          const rH = this._extensions[AH];
          rH.postExportTexture && rH.postExportTexture(HH, BH, LH)
        }
      }
      _extensionsPostExportMeshPrimitive(HH) {
        for (const BH of cA._ExtensionNames) {
          const LH = this._extensions[BH];
          LH.postExportMeshPrimitive && LH.postExportMeshPrimitive(HH, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const HH of cA._ExtensionNames) {
          const BH = this._extensions[HH];
          BH.preGenerateBinaryAsync && await BH.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(HH) {
        for (const BH of cA._ExtensionNames) {
          const LH = this._extensions[BH];
          LH.enabled && HH(LH)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((HH => {
          var BH, LH, AH;
          HH.wasUsed && ((BH = this._glTF).extensionsUsed || (BH.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(HH.name) && this._glTF.extensionsUsed.push(HH.name), HH.required && ((LH = this._glTF).extensionsRequired || (LH.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(HH.name) && this._glTF.extensionsRequired.push(HH.name)), (AH = this._glTF).extensions || (AH.extensions = {}), HH.onExporting && HH.onExporting())
        }))
      }
      _loadExtensions() {
        for (const HH of cA._ExtensionNames) {
          const BH = cA._ExtensionFactories[HH](this);
          this._extensions[HH] = BH
        }
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QH.d.LastCreatedScene,
          BH = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${uH.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new IL(this), this._extensions = {}, this._bufferManager = new LA, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !HH) throw new Error("No scene available to export");
        this._babylonScene = HH, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: HH => HH?.XN?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...BH
        }, this._loadExtensions()
      }
      dispose() {
        for (const HH in this._extensions) {
          this._extensions[HH].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        cA.UnregisterExtension(HH) && rH.Tools.Warn(`Extension with the name ${HH} already exists`), cA._ExtensionFactories[HH] = BH;
        const AH = LH ?? 0;
        cA._ExtensionOrders[HH] = AH;
        let SH = cA._ExtensionNames.length;
        for (let rH = 0; rH < cA._ExtensionNames.length; rH++) {
          const HH = cA._ExtensionNames[rH];
          if (AH < cA._ExtensionOrders[HH]) {
            SH = rH;
            break
          }
        }
        cA._ExtensionNames.splice(SH, 0, HH)
      }
      static UnregisterExtension(HH) {
        if (!cA._ExtensionFactories[HH]) return !1;
        delete cA._ExtensionFactories[HH], delete cA._ExtensionOrders[HH];
        const BH = cA._ExtensionNames.indexOf(HH);
        return -1 !== BH && cA._ExtensionNames.splice(BH, 1), !0
      }
      _generateJSON(HH, BH, LH) {
        const AH = {
          byteLength: HH
        };
        return AH.byteLength && (this._glTF.buffers = [AH]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.NQ = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (AH.uri = BH + ".bin"), LH ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(HH) {
        const BH = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const LH = this._generateJSON(BH.byteLength, HH, !0),
          AH = new Blob([BH], {
            type: "application/octet-stream"
          }),
          rH = HH + ".gltf",
          SH = HH + ".bin",
          hH = new CH;
        if (hH.files[rH] = LH, hH.files[SH] = AH, this._imageData)
          for (const tH in this._imageData) hH.files[tH] = this._imageData[tH];
        return hH
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(HH) {
        const BH = HH % 4;
        return 0 === BH ? BH : 4 - BH
      }
      async generateGLBAsync(HH) {
        this._shouldUseGlb = !0;
        const BH = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const LH = this._generateJSON(BH.byteLength),
          AH = HH + ".glb";
        let rH, SH = LH.length;
        if ("undefined" !== typeof TextEncoder) {
          rH = (new TextEncoder).encode(LH), SH = rH.length
        }
        const hH = this._getPadding(SH),
          tH = this._getPadding(BH.byteLength),
          zH = 28 + SH + hH + BH.byteLength + tH,
          EH = new HA(zH);
        if (EH.writeUInt32(1179937895), EH.writeUInt32(2), EH.writeUInt32(zH), EH.writeUInt32(SH + hH), EH.writeUInt32(1313821514), rH) EH.writeTypedArray(rH);
        else {
          const HH = "_".charCodeAt(0);
          for (let BH = 0; BH < SH; ++BH) {
            const AH = LH.charCodeAt(BH);
            AH != LH.codePointAt(BH) ? EH.writeUInt8(HH) : EH.writeUInt8(AH)
          }
        }
        for (let CH = 0; CH < hH; ++CH) EH.writeUInt8(32);
        EH.writeUInt32(BH.byteLength + tH), EH.writeUInt32(5130562), EH.writeTypedArray(BH);
        for (let CH = 0; CH < tH; ++CH) EH.writeUInt8(0);
        const XH = new CH;
        return XH.files[AH] = new Blob([EH.getOutputData()], {
          type: "application/octet-stream"
        }), XH
      }
      _setNodeTransformation(HH, BH, LH) {
        if (BH.getPivotPoint().equalsWithEpsilon(qL, KL.d) || rH.Tools.Warn("Pivot points are not supported in the glTF serializer"), !BH.position.equalsWithEpsilon(qL, KL.d)) {
          const rH = AH.TmpVectors.lu[0].Tm(BH.position);
          LH && wL(rH), HH.translation = rH.xrH()
        }
        BH.bX.equalsWithEpsilon(NL, KL.d) || (HH.scale = BH.bX.xrH());
        const SH = BH.rotationQuaternion?.clone() || AH.Quaternion.FromEulerAngles(BH.rotation.x, BH.rotation.y, BH.rotation.z);
        SH.equalsWithEpsilon(gL, KL.d) || (LH && ZL(SH), HH.rotation = SH.normalize().xrH())
      }
      _setCameraTransformation(HH, BH, LH) {
        const rH = AH.TmpVectors.lu[0],
          SH = AH.TmpVectors.Quaternion[0],
          hH = BH.getWorldMatrix();
        if (BH.parent) {
          const HH = BH.parent.getWorldMatrix().invertToRef(AH.TmpVectors.Matrix[0]);
          hH.multiplyToRef(HH, AH.TmpVectors.Matrix[1]).decompose(void 0, SH, rH)
        } else hH.decompose(void 0, SH, rH);
        rH.equalsWithEpsilon(qL, KL.d) || (LH && wL(rH), HH.translation = rH.xrH()), LH && ZL(SH), this._babylonScene.useRightHandedSystem || dL(SH), SH.equalsWithEpsilon(gL, KL.d) || (HH.rotation = SH.xrH())
      }
      _listAvailableCameras() {
        for (const HH of this._babylonScene.cameras) {
          const BH = {
            type: HH.mode === AA.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (HH.name && (BH.name = HH.name), "perspective" === BH.type) BH.perspective = {
            aspectRatio: HH.Iu().getAspectRatio(HH),
            yfov: HH.fovMode === AA.d.FOVMODE_VERTICAL_FIXED ? HH.fov : HH.fov * HH.Iu().getAspectRatio(HH),
            znear: HH.minZ,
            zfar: HH.maxZ
          };
          else if ("orthographic" === BH.type) {
            const LH = HH.orthoLeft && HH.orthoRight ? .5 * (HH.orthoRight - HH.orthoLeft) : .5 * HH.Iu().getRenderWidth(),
              AH = HH.orthoBottom && HH.orthoTop ? .5 * (HH.orthoTop - HH.orthoBottom) : .5 * HH.Iu().getRenderHeight();
            BH.orthographic = {
              xmag: LH,
              ymag: AH,
              znear: HH.minZ,
              zfar: HH.maxZ
            }
          }
          this._camerasMap.set(HH, BH)
        }
      }
      _exportAndAssignCameras() {
        const HH = Array.from(this._camerasMap.values());
        for (const BH of HH) {
          const HH = this._nodesCameraMap.get(BH);
          if (void 0 !== HH) {
            this._cameras.push(BH);
            for (const BH of HH) BH.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const HH of this._babylonScene.skeletons) {
          if (HH.bones.length <= 0) continue;
          const BH = {
            joints: []
          };
          this._skinMap.set(HH, BH)
        }
      }
      _exportAndAssignSkeletons(HH) {
        for (const LH of this._babylonScene.skeletons) {
          if (LH.bones.length <= 0) continue;
          const SH = this._skinMap.get(LH);
          if (void 0 == SH) continue;
          const hH = {};
          let tH = -1;
          for (let HH = 0; HH < LH.bones.length; ++HH) {
            const BH = LH.bones[HH],
              AH = BH.getIndex() ?? HH; - 1 !== AH && (hH[AH] = BH, AH > tH && (tH = AH))
          }
          const zH = [];
          for (let LH = 0; LH <= tH; ++LH) {
            const tH = hH[LH],
              CH = tH.getTransformNode(),
              EH = CH ? this._nodeMap.get(CH) : void 0;
            if (void 0 === EH) {
              rH.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            SH.joints.push(EH);
            const XH = tH.getAbsoluteInverseBindMatrix().clone();
            HH.has(CH) && (BH = XH, cL.invertToRef(AH.TmpVectors.Matrix[0]).multiplyToRef(BH, BH).multiplyToRef(cL, BH)), zH.push(XH)
          }
          const CH = this._nodesSkinMap.get(SH);
          if (SH.joints.length > 0 && void 0 !== CH) {
            const HH = new Float32Array(16 * zH.length);
            zH.forEach(((BH, LH) => {
              HH.set(BH.m, 16 * LH)
            }));
            const BH = this._bufferManager.createBufferView(HH);
            this._accessors.push(this._bufferManager.createAccessor(BH, "MAT4", 5126, zH.length)), SH.inverseBindMatrices = this._accessors.length - 1, this._skins.push(SH);
            const LH = this._skins.length - 1;
            for (const AH of CH) AH.skin = LH
          }
        }
        var BH
      }
      async _exportSceneAsync() {
        const HH = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const BH = this._options.metadataSelector(this._babylonScene.metadata);
          BH && (HH.extras = BH)
        }
        const BH = new Array,
          LH = new Array,
          AH = new Array,
          rH = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let SH;
        if (rH && !this._options.includeCoordinateSystemConversionNodes)
          for (const CH of this._babylonScene.animationGroups)
            for (const HH of CH.targetedAnimations) {
              const BH = HH.target;
              BH instanceof XH.c && !BH.parent && (SH ?? (SH = new Set)).add(BH)
            }
        for (const CH of this._babylonScene.rootNodes) {
          const HH = CH.animations,
            hH = !!HH && HH.length > 0 || SH?.has(CH);
          rH && !this._options.includeCoordinateSystemConversionNodes && eL(CH, this._babylonScene.useRightHandedSystem) && !hH ? AH.push(...CH.getChildren()) : this._babylonScene.useRightHandedSystem ? BH.push(CH) : LH.push(CH)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const hH = new KA(!0, !1);
        HH.nodes.push(...await this._exportNodesAsync(LH, hH));
        const tH = new KA(!1, !1);
        HH.nodes.push(...await this._exportNodesAsync(BH, tH));
        const zH = new KA(!1, !0);
        HH.nodes.push(...await this._exportNodesAsync(AH, zH)), HH.nodes.length && this._scenes.push(HH), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(hH.getNodesSet()), this._babylonScene.animationGroups.length && XA._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, hH.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(HH) {
        return this._nodeMap.get(HH)
      }
      _getAnimationIndex(HH) {
        return this._animationGroupMap.get(HH)
      }
      _getCameraIndex(HH) {
        const BH = this._camerasMap.get(HH);
        if (!BH) return;
        const LH = this._cameras.indexOf(BH);
        return LH >= 0 ? LH : void 0
      }
      _getMaterialIndex(HH) {
        return this._materialMap.get(HH)
      }
      _getRootIndex(HH, BH) {
        switch (HH) {
          case "nodes":
            return this._getNodeIndex(BH);
          case "animations":
            return this._getAnimationIndex(BH);
          case "cameras":
            return this._getCameraIndex(BH);
          case "materials":
            return this._getMaterialIndex(BH);
          case "meshes": {
            const HH = this._getNodeIndex(BH);
            return void 0 === HH ? void 0 : this._nodes[HH]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(BH)?.index;
          case "images": {
            const HH = this._materialExporter.getTextureInfo(BH)?.index;
            if (void 0 === HH) return;
            const LH = this._textures[HH];
            for (const BH of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const HH = LH?.extensions?.[BH]?.source;
              if ("number" === typeof HH) return HH
            }
            return LH?.source
          }
          case "samplers": {
            const HH = this._materialExporter.getTextureInfo(BH)?.index;
            return void 0 === HH ? void 0 : this._textures[HH]?.sampler
          }
          case "skins": {
            const HH = this._skinMap.get(BH),
              LH = HH ? this._skins.indexOf(HH) : -1;
            return LH >= 0 ? LH : void 0
          }
          case "scenes":
            return BH === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(HH, BH, LH) {
        const AH = this._nodes[HH];
        if (!AH) throw new Error(`Cannot write ${BH}: glTF node ${HH} does not exist.`);
        AH.extensions || (AH.extensions = {}), AH.extensions[BH] = LH
      }
      _shouldExportNode(HH) {
        let BH = this._shouldExportNodeMap.get(HH);
        return void 0 === BH && (BH = this._options.shouldExportNode(HH), this._shouldExportNodeMap.set(HH, BH)), BH
      }
      async _exportNodesAsync(HH, BH) {
        const LH = new Array;
        this._exportBuffers(HH, BH);
        for (const AH of HH) await this._exportNodeAsync(AH, LH, BH);
        return LH
      }
      _collectBuffers(HH, BH, LH, AH, rH) {
        if (this._shouldExportNode(HH) && HH instanceof GH.e && HH.geometry) {
          const SH = HH.geometry.getVertexBuffers();
          if (SH)
            for (const AH in SH) {
              if (!FL(AH)) continue;
              const hH = SH[AH];
              rH.setHasVertexColorAlpha(hH, HH.hasVertexAlpha);
              const tH = hH._buffer,
                zH = BH.get(tH) || [];
              BH.set(tH, zH), -1 === zH.indexOf(hH) && zH.push(hH);
              const CH = LH.get(hH) || [];
              LH.set(hH, CH), -1 === CH.indexOf(HH) && CH.push(HH)
            }
          const hH = HH.morphTargetManager;
          if (hH)
            for (let BH = 0; BH < hH.numTargets; BH++) {
              const LH = hH.getTarget(BH),
                rH = AH.get(LH) || [];
              AH.set(LH, rH), -1 === rH.indexOf(HH) && rH.push(HH)
            }
        }
        for (const SH of HH.getChildren()) this._collectBuffers(SH, BH, LH, AH, rH)
      }
      _exportBuffers(HH, BH) {
        const LH = new Map,
          AH = new Map,
          rH = new Map;
        for (const tH of HH) this._collectBuffers(tH, LH, AH, rH, BH);
        const SH = Array.from(LH.keys());
        for (const tH of SH) {
          const HH = tH.getData();
          if (!HH) throw new Error("Buffer data is not available");
          const rH = LH.get(tH);
          if (!rH) continue;
          const SH = rH[0].byteStride;
          if (rH.some((HH => HH.byteStride !== SH))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const hH = JL(HH).slice();
          for (const BH of rH) {
            const HH = AH.get(BH),
              {
                byteOffset: LH,
                byteStride: rH,
                componentCount: SH,
                type: tH,
                count: zH,
                normalized: CH,
                kind: XH
              } = jL(BH, HH);
            switch (XH) {
              case EH.e.NormalKind:
              case EH.e.TangentKind:
                (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
                  const BH = Math.sqrt(HH[0] * HH[0] + HH[1] * HH[1] + HH[2] * HH[2]);
                  if (BH > 0) {
                    const LH = 1 / BH;
                    HH[0] *= LH, HH[1] *= LH, HH[2] *= LH
                  }
                }));
                break;
              case EH.e.ColorKind: {
                const BH = HH.filter((HH => HH.material instanceof SA.StandardMaterial || null == HH.material)).length;
                if (0 == BH) break;
                if (BH != HH.length) {
                  mH.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                tH == EH.e.UNSIGNED_BYTE && mH.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const AH = new WH.Color3,
                  XH = new WH.d,
                  GH = this._babylonScene.Iu().useExactSrgbConversions;
                (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
                  3 === HH.length ? (AH.SX(HH, 0), AH.toLinearSpaceToRef(AH, GH), AH.toArray(HH, 0)) : (XH.SX(HH, 0), XH.toLinearSpaceToRef(XH, GH), XH.toArray(HH, 0))
                }))
              }
            }
          }
          if (BH.convertToRightHanded) {
            for (const HH of rH) {
              const BH = AH.get(HH),
                {
                  byteOffset: LH,
                  byteStride: rH,
                  componentCount: SH,
                  type: tH,
                  count: zH,
                  normalized: CH,
                  kind: XH
                } = jL(HH, BH);
              switch (XH) {
                case EH.e.PositionKind:
                case EH.e.NormalKind:
                case EH.e.TangentKind:
                  (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
                    HH[0] = -HH[0]
                  }))
              }
            }
            BH.convertedToRightHandedBuffers.set(tH, hH)
          }
          const zH = this._bufferManager.createBufferView(hH, SH);
          BH.setVertexBufferView(tH, zH);
          const CH = new Map;
          for (const BH of rH) {
            const HH = AH.get(BH),
              {
                kind: LH,
                totalVertices: rH
              } = jL(BH, HH);
            switch (LH) {
              case EH.e.MatricesIndicesKind:
              case EH.e.MatricesIndicesExtraKind:
                if (BH.type == EH.e.FLOAT) {
                  const HH = BH.getFloatData(rH);
                  null !== HH && CH.set(BH, HH)
                }
            }
          }
          0 !== CH.size && mH.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const XH = Array.from(CH.keys());
          for (const LH of XH) {
            const HH = CH.get(LH);
            if (!HH) continue;
            const AH = HH.some((HH => HH >= 256)),
              rH = new(AH ? Uint16Array : Uint8Array)(HH.length);
            for (let BH = 0; BH < HH.length; BH++) rH[BH] = HH[BH];
            const SH = this._bufferManager.createBufferView(rH, 4 * (AH ? 2 : 1));
            BH.setRemappedBufferView(tH, LH, SH)
          }
        }
        const hH = Array.from(rH.keys());
        for (const tH of hH) {
          const HH = rH.get(tH);
          if (!HH) continue;
          const LH = GA(tH, HH[0], this._bufferManager, this._bufferViews, this._accessors, BH.convertToRightHanded);
          for (const AH of HH) BH.bindMorphDataToMesh(AH, LH)
        }
      }
      async _exportNodeAsync(HH, BH, LH) {
        let AH = this._nodeMap.get(HH);
        if (void 0 !== AH) return void(BH.includes(AH) || BH.push(AH));
        const rH = await this._createNodeAsync(HH, LH);
        if (rH) {
          AH = this._nodes.length, this._nodes.push(rH), this._nodeMap.set(HH, AH), LH.pushExportedNode(HH), BH.push(AH);
          const SH = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            hH = [];
          this._babylonScene.animationGroups.length || (XA._CreateMorphTargetAnimationFromMorphTargetAnimations(HH, SH, hH, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, LH.convertToRightHanded, this._options.shouldExportAnimation), HH.animations.length && XA._CreateNodeAnimationFromNodeAnimations(HH, SH, hH, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, LH.convertToRightHanded, this._options.shouldExportAnimation)), SH.channels.length && SH.samplers.length && this._animations.push(SH), hH.forEach((HH => {
            HH.channels.length && HH.samplers.length && this._animations.push(HH)
          }))
        }
        const SH = rH ? [] : BH;
        for (const hH of HH.getChildren()) await this._exportNodeAsync(hH, SH, LH);
        rH && SH.length && (rH.children = SH)
      }
      async _createNodeAsync(HH, BH) {
        if (!this._shouldExportNode(HH)) return null;
        const LH = {};
        if (HH.name && (LH.name = HH.name), HH.metadata) {
          const BH = this._options.metadataSelector(HH.metadata);
          BH && (LH.extras = BH)
        }
        if (HH instanceof XH.c && (this._setNodeTransformation(LH, HH, BH.convertToRightHanded), HH instanceof GH.e)) {
          const AH = HH instanceof YH.b ? HH.XSH : HH;
          if (AH.jU && AH.jU.length > 0 && (LH.mesh = await this._exportMeshAsync(AH, BH)), HH.skeleton) {
            const BH = this._skinMap.get(HH.skeleton);
            void 0 !== BH && (void 0 === this._nodesSkinMap.get(BH) && this._nodesSkinMap.set(BH, []), this._nodesSkinMap.get(BH)?.push(LH))
          }
        }
        if (HH instanceof lL.e) {
          const AH = this._camerasMap.get(HH);
          if (AH) {
            void 0 === this._nodesCameraMap.get(AH) && this._nodesCameraMap.set(AH, []), this._setCameraTransformation(LH, HH, BH.convertToRightHanded);
            const rH = HH.parent;
            if (null !== rH && sL(HH, rH)) {
              const HH = this._nodeMap.get(rH);
              if (void 0 !== HH) {
                const BH = this._nodes[HH];
                return aL(LH, BH), this._nodesCameraMap.get(AH)?.push(BH), null
              }
            }
            this._nodesCameraMap.get(AH)?.push(LH)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", LH, HH, this._nodeMap, BH.convertToRightHanded) ? LH : (mH.e.Warn(`Not exporting node ${HH.name}`), null)
      }
      _exportIndices(HH, BH, LH, AH, rH, hH, tH, zH, CH) {
        let EH = null;
        CH.mode = function(HH) {
          switch (HH) {
            case SH.c.TriangleFillMode:
              return 4;
            case SH.c.TriangleStripDrawMode:
              return 5;
            case SH.c.TriangleFanDrawMode:
              return 6;
            case SH.c.PointListDrawMode:
            case SH.c.PointFillMode:
              return 0;
            case SH.c.LineLoopDrawMode:
              return 2;
            case SH.c.LineListDrawMode:
              return 1;
            case SH.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${HH}`)
        }(hH);
        const XH = tH !== SH.c.CounterClockWiseSideOrientation && function(HH) {
          switch (HH) {
            case SH.c.TriangleFillMode:
            case SH.c.TriangleStripDrawMode:
            case SH.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(hH);
        if (XH) {
          if (hH === SH.c.TriangleStripDrawMode || hH === SH.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const tH = BH ? new Uint32Array(AH) : new Uint16Array(AH);
          if (HH)
            for (let BH = 0; BH + 2 < AH; BH += 3) tH[BH] = HH[LH + BH] + rH, tH[BH + 1] = HH[LH + BH + 2] + rH, tH[BH + 2] = HH[LH + BH + 1] + rH;
          else
            for (let HH = 0; HH + 2 < AH; HH += 3) tH[HH] = HH, tH[HH + 1] = HH + 2, tH[HH + 2] = HH + 1;
          EH = tH
        } else if (HH && 0 !== rH) {
          const SH = BH ? new Uint32Array(AH) : new Uint16Array(AH);
          for (let BH = 0; BH < AH; BH++) SH[BH] = HH[LH + BH] + rH;
          EH = SH
        } else HH && (EH = function(HH, BH, LH, AH) {
          let rH = HH;
          return 0 === BH && LH === HH.length || (rH = Array.isArray(HH) ? HH.slice(BH, BH + LH) : HH.subarray(BH, BH + LH)), rH instanceof Int32Array ? new Uint32Array(rH.buffer, rH.byteOffset, rH.length) : Array.isArray(rH) ? AH ? new Uint32Array(rH) : new Uint16Array(rH) : rH
        }(HH, LH, AH, BH));
        if (EH) {
          let SH = zH.getIndicesAccessor(HH, LH, AH, rH, XH);
          if (void 0 === SH) {
            const hH = this._bufferManager.createBufferView(EH),
              tH = BH ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(hH, "SCALAR", tH, AH, 0)), SH = this._accessors.length - 1, zH.setIndicesAccessor(HH, LH, AH, rH, XH, SH)
          }
          CH.indices = SH
        }
      }
      _exportVertexBuffer(HH, BH, LH, AH, rH, SH) {
        const hH = HH.getKind();
        if (!FL(hH)) return;
        if (hH.startsWith("uv") && !this._options.exportUnusedUVs && (!BH || !this._materialNeedsUVsSet.has(BH))) return;
        let tH = rH.getVertexAccessor(HH, LH, AH);
        if (void 0 === tH) {
          const BH = rH.convertedToRightHandedBuffers.get(HH._buffer) || HH._buffer.getData(),
            SH = hH === EH.e.PositionKind ? function(HH, BH, LH, AH) {
              const {
                byteOffset: rH,
                byteStride: SH,
                type: hH,
                normalized: tH
              } = BH, zH = BH.getSize(), CH = new Array(zH).fill(1 / 0), EH = new Array(zH).fill(-1 / 0);
              return (0, fL.j)(HH, rH + LH * SH, SH, zH, hH, AH * zH, tH, (HH => {
                for (let BH = 0; BH < zH; BH++) CH[BH] = Math.min(CH[BH], HH[BH]), EH[BH] = Math.max(EH[BH], HH[BH])
              })), {
                min: CH,
                max: EH
              }
            }(BH, HH, LH, AH) : void 0,
            zH = (hH === EH.e.MatricesIndicesKind || hH === EH.e.MatricesIndicesExtraKind) && HH.type === EH.e.FLOAT,
            CH = zH ? EH.e.UNSIGNED_BYTE : HH.type,
            XH = zH ? void 0 : HH.normalized,
            GH = zH ? rH.getRemappedBufferView(HH._buffer, HH) : rH.getVertexBufferView(HH._buffer),
            YH = HH.byteOffset + LH * HH.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(GH, function(HH, BH) {
            if (HH == EH.e.ColorKind) return BH ? "VEC4" : "VEC3";
            switch (HH) {
              case EH.e.PositionKind:
              case EH.e.NormalKind:
                return "VEC3";
              case EH.e.TangentKind:
              case EH.e.MatricesIndicesKind:
              case EH.e.MatricesIndicesExtraKind:
              case EH.e.MatricesWeightsKind:
              case EH.e.MatricesWeightsExtraKind:
                return "VEC4";
              case EH.e.UVKind:
              case EH.e.UV2Kind:
              case EH.e.UV3Kind:
              case EH.e.UV4Kind:
              case EH.e.UV5Kind:
              case EH.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${HH}`)
          }(hH, rH.hasVertexColorAlpha(HH)), CH, AH, YH, SH, XH)), tH = this._accessors.length - 1, rH.setVertexAccessor(HH, LH, AH, tH)
        }
        SH.attributes[function(HH) {
          switch (HH) {
            case EH.e.PositionKind:
              return "POSITION";
            case EH.e.NormalKind:
              return "NORMAL";
            case EH.e.TangentKind:
              return "TANGENT";
            case EH.e.ColorKind:
              return "COLOR_0";
            case EH.e.UVKind:
              return "TEXCOORD_0";
            case EH.e.UV2Kind:
              return "TEXCOORD_1";
            case EH.e.UV3Kind:
              return "TEXCOORD_2";
            case EH.e.UV4Kind:
              return "TEXCOORD_3";
            case EH.e.UV5Kind:
              return "TEXCOORD_4";
            case EH.e.UV6Kind:
              return "TEXCOORD_5";
            case EH.e.MatricesIndicesKind:
              return "JOINTS_0";
            case EH.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case EH.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case EH.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${HH}`)
        }(hH)] = tH
      }
      async _exportMaterialAsync(HH, BH, LH, AH) {
        let rH = this._materialMap.get(HH);
        if (void 0 === rH) {
          const AH = BH && Object.keys(BH).some((HH => HH.startsWith("uv")));
          if ((HH = HH instanceof rA.c ? HH.BBH[LH.materialIndex] : HH) instanceof UB) rH = await this._materialExporter.exportPBRMaterialAsync(HH, AH);
          else if (HH instanceof SA.StandardMaterial) rH = await this._materialExporter.exportStandardMaterialAsync(HH, AH);
          else {
            if (!(HH instanceof pB)) return void mH.e.Warn(`Unsupported material '${HH.name}' with type ${HH.getClassName()}`);
            rH = await this._materialExporter.exportOpenPBRMaterialAsync(HH, AH)
          }
          this._materialMap.set(HH, rH)
        }
        AH.material = rH
      }
      async _exportMeshAsync(HH, BH) {
        let LH = BH.getMesh(HH);
        if (void 0 !== LH) return LH;
        const AH = {
          primitives: []
        };
        LH = this._meshes.length, this._meshes.push(AH), BH.setMesh(HH, LH);
        const rH = HH.isUnIndexed ? null : HH.vrH(),
          hH = HH.geometry?.getVertexBuffers(),
          tH = BH.getMorphTargetsFromMesh(HH),
          zH = HH instanceof YA.e,
          CH = HH instanceof lA,
          EH = HH.jU;
        if (hH && EH && EH.length > 0)
          for (const XH of EH) {
            const LH = {
                attributes: {}
              },
              EH = XH.eu() || this._babylonScene.defaultMaterial;
            if (CH) {
              const BH = {
                  name: EH.name
                },
                AH = HH,
                rH = WH.Color3.White(),
                SH = AH.material?.alpha ?? 1,
                hH = AH.greasedLineMaterial?.color ?? rH;
              (!hH.equalsWithEpsilon(rH, KL.d) || SH < 1) && (BH.pbrMetallicRoughness = {
                baseColorFactor: [...hH.xrH(), SH]
              }), this._materials.push(BH), LH.material = this._materials.length - 1
            } else if (zH) {
              const BH = {
                  name: EH.name
                },
                AH = HH;
              (!AH.color.equalsWithEpsilon(WH.Color3.White(), KL.d) || AH.alpha < 1) && (BH.pbrMetallicRoughness = {
                baseColorFactor: [...AH.color.xrH(), AH.alpha]
              }), this._materials.push(BH), LH.material = this._materials.length - 1
            } else await this._exportMaterialAsync(EH, hH, XH, LH);
            const GH = zH || CH ? SH.c.LineListDrawMode : HH.overrideRenderingFillMode ?? EH.fillMode;
            let YH = EH._getEffectiveOrientation(HH);
            BH.wasAddedByNoopNode && !HH.yN().useRightHandedSystem && (YH = YH === SH.c.ClockWiseSideOrientation ? SH.c.CounterClockWiseSideOrientation : SH.c.ClockWiseSideOrientation), this._exportIndices(rH, rH ? (0, fL.e)(rH, XH.indexCount, XH.indexStart, XH.verticesStart) : XH.verticesCount > 65535, rH ? XH.indexStart : XH.verticesStart, rH ? XH.indexCount : XH.verticesCount, -XH.verticesStart, GH, YH, BH, LH);
            for (const HH of Object.values(hH)) this._exportVertexBuffer(HH, EH, XH.verticesStart, XH.verticesCount, BH, LH);
            if (tH) {
              LH.targets = [];
              for (const HH of tH) LH.targets.push(HH.attributes)
            }
            AH.primitives.push(LH), this._extensionsPostExportMeshPrimitive(LH)
          }
        if (tH) {
          AH.weights = [], AH.extras || (AH.extras = {}), AH.extras.targetNames = [];
          for (const HH of tH) AH.weights.push(HH.influence), AH.extras.targetNames.push(HH.name)
        }
        return LH
      }
    }
    cA._ExtensionNames = new Array, cA._ExtensionFactories = {}, cA._ExtensionOrders = {};
    class eA {
      static async GLTFAsync(HH, BH, LH) {
        LH && LH.exportWithoutWaitingForScene || await HH.whenReadyAsync();
        const AH = new cA(HH, LH),
          rH = await AH.generateGLTFAsync(BH.replace(/\.[^/.]+$/, ""));
        return AH.dispose(), rH
      }
      static async GLBAsync(HH, BH, LH) {
        LH && LH.exportWithoutWaitingForScene || await HH.whenReadyAsync();
        const AH = new cA(HH, LH),
          rH = await AH.generateGLBAsync(BH.replace(/\.[^/.]+$/, ""));
        return AH.dispose(), rH
      }
    }
    const qA = "EXT_mesh_gpu_instancing";

    function gA(HH, BH) {
      const LH = new Float32Array(3 * BH);
      for (let AH = 0; AH < BH; AH++) LH[3 * AH + 0] = HH[4 * AH + 0], LH[3 * AH + 1] = HH[4 * AH + 1], LH[3 * AH + 2] = HH[4 * AH + 2];
      return LH
    }
    class NA {
      constructor(HH) {
        this.name = qA, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(HH, BH, LH, AH, rH, SH) {
        return await new Promise((HH => {
          if (BH && LH instanceof UA.c && LH.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const HH = NH.o.Zero(),
              AH = NH.f.Identity(),
              hH = NH.o.One(),
              tH = LH.thinInstanceGetWorldMatrices(),
              zH = NH.l.lu[2],
              CH = NH.l.Quaternion[1],
              EH = NH.l.lu[3];
            let XH = !1,
              GH = !1,
              YH = !1;
            const uH = new Float32Array(3 * LH.gHH),
              QH = new Float32Array(4 * LH.gHH),
              WH = new Float32Array(3 * LH.gHH);
            let MH = 0;
            for (const BH of tH) BH.decompose(EH, CH, zH), rH && (wL(zH), ZL(CH)), uH.set(zH.xrH(), 3 * MH), QH.set(CH.normalize().xrH(), 4 * MH), WH.set(EH.xrH(), 3 * MH), XH = XH || !zH.equalsWithEpsilon(HH), GH = GH || !CH.equalsWithEpsilon(AH), YH = YH || !EH.equalsWithEpsilon(hH), MH++;
            const xH = {
              attributes: {}
            };
            XH && (xH.attributes.TRANSLATION = this._buildAccessor(uH, "VEC3", LH.gHH, SH)), GH && (xH.attributes.ROTATION = this._buildAccessor(QH, "VEC4", LH.gHH, SH)), YH && (xH.attributes.SCALE = this._buildAccessor(WH, "VEC3", LH.gHH, SH));
            let vH = LH._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (vH) {
              const HH = LH.gHH,
                BH = "VEC3";
              LH.hasVertexAlpha && vH.length === 4 * HH ? (this._instanceColorWarned || (mH.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), vH = gA(vH, HH)) : vH.length === 4 * HH && (vH = gA(vH, HH)), vH.length === 3 * HH && (xH.attributes._COLOR_0 = this._buildAccessor(vH, BH, HH, SH))
            }
            BH.extensions = BH.extensions || {}, BH.extensions[qA] = xH
          }
          HH(BH)
        }))
      }
      _buildAccessor(HH, BH, LH, AH) {
        const rH = AH.createBufferView(HH),
          SH = AH.createAccessor(rH, BH, 5126, LH);
        return this._exporter._accessors.push(SH), this._exporter._accessors.length - 1
      }
    }
    let RA = !1;

    function jA() {
      RA || (RA = !0, cA.RegisterExtension(qA, (HH => new NA(HH))))
    }
    LH(41784);
    jA();
    var nA = LH(45318);

    function FA(HH, BH, LH, AH) {
      const rH = HH;
      let SH = null,
        hH = null,
        tH = null,
        zH = null;
      const CH = {},
        EH = BH.find((HH => "POSITION" === HH.dracoName));
      if (!EH) throw new Error("Draco: Missing position attribute for encoding.");
      if (!LH) {
        const HH = EH.data.length / EH.size;
        LH = new(HH > 65535 ? Uint32Array : Uint16Array)(HH);
        for (let BH = 0; BH < HH; BH++) LH[BH] = BH
      }
      try {
        SH = new rH.Encoder, hH = new rH.MeshBuilder, tH = new rH.Mesh, hH.AddFacesToMesh(tH, LH.length / 3, LH);
        const HH = new Map([
          [Float32Array, (HH, BH, LH, AH, rH, SH) => HH.AddFloatAttribute(BH, LH, AH, rH, SH)],
          [Uint32Array, (HH, BH, LH, AH, rH, SH) => HH.AddUInt32Attribute(BH, LH, AH, rH, SH)],
          [Uint16Array, (HH, BH, LH, AH, rH, SH) => HH.AddUInt16Attribute(BH, LH, AH, rH, SH)],
          [Uint8Array, (HH, BH, LH, AH, rH, SH) => HH.AddUInt8Attribute(BH, LH, AH, rH, SH)],
          [Int32Array, (HH, BH, LH, AH, rH, SH) => HH.AddInt32Attribute(BH, LH, AH, rH, SH)],
          [Int16Array, (HH, BH, LH, AH, rH, SH) => HH.AddInt16Attribute(BH, LH, AH, rH, SH)],
          [Int8Array, (HH, BH, LH, AH, rH, SH) => HH.AddInt8Attribute(BH, LH, AH, rH, SH)]
        ]);
        for (const LH of BH) {
          LH.data instanceof Uint8ClampedArray && (LH.data = new Uint8Array(LH.data));
          const BH = HH.get(LH.data.constructor),
            zH = LH.data.length / LH.size;
          CH[LH.kind] = BH(hH, tH, rH[LH.dracoName], zH, LH.size, LH.data), AH.quantizationBits && AH.quantizationBits[LH.dracoName] && SH.SetAttributeQuantization(rH[LH.dracoName], AH.quantizationBits[LH.dracoName])
        }
        AH.method && SH.SetEncodingMethod(rH[AH.method]), void 0 !== AH.encodeSpeed && void 0 !== AH.decodeSpeed && SH.SetSpeedOptions(AH.encodeSpeed, AH.decodeSpeed), zH = new rH.DracoInt8Array;
        const EH = SH.EncodeMeshToDracoBuffer(tH, zH);
        if (EH <= 0) throw new Error("Draco: Failed to encode.");
        const XH = new Int8Array(EH);
        for (let BH = 0; BH < EH; BH++) XH[BH] = zH.GetValue(BH);
        return {
          data: XH,
          attributeIds: CH
        }
      } finally {
        tH && rH.destroy(tH), hH && rH.destroy(hH), SH && rH.destroy(SH), zH && rH.destroy(zH)
      }
    }

    function DA() {
      let HH;
      onmessage = BH => {
        const LH = BH.data;
        switch (LH.id) {
          case "init": {
            LH.url && importScripts(LH.url);
            const BH = LH.wasmBinary ? {
              wasmBinary: LH.wasmBinary
            } : {};
            HH = DracoEncoderModule(BH), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!HH) throw new Error("Draco: Encoder module is not available.");
            HH.then((HH => {
              const BH = FA(HH, LH.attributes, LH.indices, LH.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: BH
              }, BH ? [BH.data.buffer] : void 0)
            })).catch((HH => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: HH.message
              })
            }))
        }
      }
    }
    class wA {
      constructor(HH) {
        if (HH.workerPool) return void(this._workerPoolPromise = Promise.resolve(HH.workerPool));
        const BH = HH.wasmBinary,
          LH = HH.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          AH = LH && "function" === typeof Worker && "function" === typeof URL,
          rH = AH || !HH.jsModule,
          SH = HH.wasmUrl && HH.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: rH ? OB.i.GetBabylonScriptURL(HH.wasmUrl, !0) : "",
            wasmBinaryPromise: BH ? Promise.resolve(BH) : OB.i.LoadFileAsync(OB.i.GetBabylonScriptURL(HH.wasmBinaryUrl, !0))
          } : {
            url: rH ? OB.i.GetBabylonScriptURL(HH.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        AH ? this._workerPoolPromise = SH.wasmBinaryPromise.then((HH => {
          const BH = this._getWorkerContent(),
            AH = URL.createObjectURL(new Blob([BH], {
              type: "application/javascript"
            }));
          return new nA.c(LH, (() => async function(HH, BH, LH) {
            return await new Promise(((AH, rH) => {
              const SH = BH => {
                  HH.removeEventListener("error", SH), HH.removeEventListener("message", hH), rH(BH)
                },
                hH = BH => {
                  "initDone" === BH.data.id && (HH.removeEventListener("error", SH), HH.removeEventListener("message", hH), AH(HH))
                };
              if (HH.addEventListener("error", SH), HH.addEventListener("message", hH), BH) {
                const AH = BH.slice(0);
                HH.postMessage({
                  id: "init",
                  url: LH,
                  wasmBinary: AH
                }, [AH])
              } else HH.postMessage({
                id: "init",
                url: LH
              })
            }))
          }(new Worker(AH), HH, SH.url)))
        })) : this._modulePromise = SH.wasmBinaryPromise.then((async BH => {
          if (!this._isModuleAvailable() && !HH.jsModule) {
            if (!SH.url) throw new Error("Draco codec module is not available");
            await OB.i.LoadBabylonScriptAsync(SH.url)
          }
          return await this._createModuleAsync(BH, HH.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((HH => {
          HH.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function ZA() {
      const HH = HH => !!HH && "object" === typeof HH;
      for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
      return LH.reduce(((BH, LH) => {
        const AH = Object.keys(LH);
        for (const rH of AH) {
          const AH = BH[rH],
            SH = LH[rH];
          Array.isArray(AH) && Array.isArray(SH) ? BH[rH] = AH.concat(SH) : HH(AH) && HH(SH) ? BH[rH] = ZA(AH, SH) : BH[rH] = SH
        }
        return BH
      }), {})
    }

    function dA(HH) {
      return HH === RH.i.PositionKind ? "POSITION" : HH === RH.i.NormalKind ? "NORMAL" : HH === RH.i.ColorKind ? "COLOR" : HH.startsWith(RH.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const aA = {
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
    class sA extends wA {
      static get DefaultAvailable() {
        return !!((HH = sA.DefaultConfiguration).wasmUrl && (HH.wasmBinary || HH.wasmBinaryUrl) && "object" === typeof WebAssembly || HH.fallbackUrl);
        var HH
      }
      static get Default() {
        return sA._Default ?? (sA._Default = new sA), sA._Default
      }
      static ResetDefault(HH) {
        sA._Default && (HH || sA._Default.dispose(), sA._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(HH, BH) {
        return {
          module: await (BH || DracoEncoderModule)({
            wasmBinary: HH
          })
        }
      }
      _getWorkerContent() {
        return `${FA}(${DA})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sA.DefaultConfiguration)
      }
      async _encodeAsync(HH, BH, LH) {
        const AH = LH ? ZA(aA, LH) : aA;
        if (this._workerPoolPromise) {
          const LH = await this._workerPoolPromise;
          return await new Promise(((rH, SH) => {
            LH.push(((LH, hH) => {
              const tH = HH => {
                  LH.removeEventListener("error", tH), LH.removeEventListener("message", zH), SH(HH), hH()
                },
                zH = HH => {
                  "encodeMeshSuccess" === HH.data.id ? (LH.removeEventListener("error", tH), LH.removeEventListener("message", zH), rH(HH.data.encodedMeshData), hH()) : "encodeMeshError" === HH.data.id && (LH.removeEventListener("error", tH), LH.removeEventListener("message", zH), SH(new Error(HH.data.errorMessage)), hH())
                };
              LH.addEventListener("error", tH), LH.addEventListener("message", zH);
              const CH = [];
              for (const BH of HH) CH.push(BH.data.buffer);
              BH && CH.push(BH.buffer), LH.postMessage({
                id: "encodeMesh",
                attributes: HH,
                indices: BH,
                options: AH
              }, CH)
            }))
          }))
        }
        if (this._modulePromise) {
          return FA((await this._modulePromise).module, HH, BH, AH)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(HH, BH) {
        if (0 == HH.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        HH instanceof UA.c && HH.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === BH?.method && (mH.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), BH.method = "MESH_SEQUENTIAL_ENCODING");
        const LH = function(HH) {
            let BH = HH.vrH(void 0, !0);
            return !BH || BH instanceof Uint32Array || BH instanceof Uint16Array || (BH = ((0, fL.e)(BH, BH.length) ? Uint32Array : Uint16Array).from(BH)), BH
          }(HH),
          AH = function(HH, BH) {
            const LH = [];
            for (const AH of HH.getVerticesDataKinds()) {
              if (BH?.includes(AH)) {
                if (AH === RH.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const rH = HH.getVertexBuffer(AH),
                SH = rH.getSize(),
                hH = (0, fL.r)(rH.getData(), SH, rH.type, rH.byteOffset, rH.byteStride, HH.getTotalVertices(), !0);
              LH.push({
                kind: AH,
                dracoName: dA(AH),
                size: SH,
                data: hH
              })
            }
            return LH
          }(HH, BH?.excludedAttributes);
        return await this._encodeAsync(AH, LH, BH)
      }
    }
    sA.DefaultConfiguration = {
      wasmUrl: `${OB.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${OB.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${OB.i._DefaultCdnUrl}/draco_encoder.js`
    }, sA._Default = null;
    const JA = "KHR_draco_mesh_compression";
    class iA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(HH) {
        this.name = JA, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === HH.options.meshCompressionMethod && sA.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(HH, BH, LH) {
        if (!this.enabled) return;
        if (4 !== HH.mode && 5 !== HH.mode) return void mH.e.Warn("Cannot compress primitive with mode " + HH.mode + ".");
        const AH = [],
          rH = [];
        let SH = null;
        if (void 0 !== HH.indices) {
          const hH = LH[HH.indices],
            tH = BH.getBufferView(hH);
          SH = BH.getData(tH).slice(), AH.push(tH), rH.push(hH)
        }
        const hH = [];
        for (const [EH, XH] of Object.entries(HH.attributes)) {
          const HH = LH[XH],
            SH = BH.getBufferView(HH),
            zH = nL(HH.type),
            CH = (0, fL.r)(BH.getData(SH), zH, HH.componentType, HH.byteOffset || 0, SH.byteStride || (0, fL.q)(HH.componentType) * zH, HH.count, !0);
          hH.push({
            kind: EH,
            dracoName: (tH = EH, "POSITION" === tH ? "POSITION" : "NORMAL" === tH ? "NORMAL" : tH.startsWith("COLOR") ? "COLOR" : tH.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: nL(HH.type),
            data: CH
          }), AH.push(SH), rH.push(HH)
        }
        var tH;
        const zH = {
            method: HH.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          CH = sA.Default._encodeAsync(hH, SH, zH).then((LH => {
            const SH = {
                bufferView: -1,
                attributes: LH.attributeIds
              },
              hH = BH.createBufferView(LH.data);
            BH.setBufferView(SH, hH);
            for (const HH of AH) this._bufferViewsUsed.add(HH);
            for (const HH of rH) this._accessorsUsed.add(HH);
            HH.extensions || (HH.extensions = {}), HH.extensions[JA] = SH
          })).catch((HH => {
            mH.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + HH.message)
          }));
        this._encodePromises.push(CH), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(HH) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((BH => {
          HH.getPropertiesWithBufferView(BH).every((HH => this._accessorsUsed.has(HH))) && HH.removeBufferView(BH)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let pA = !1;

    function yA() {
      pA || (pA = !0, cA.RegisterExtension(JA, (HH => new iA(HH))))
    }
    yA();
    var Hr = LH(45047);
    const Br = "KHR_lights_punctual",
      Lr = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Ar = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      rr = NH.o.Backward();
    class Sr {
      constructor(HH) {
        this.name = Br, this.enabled = !0, this.required = !1, this._exporter = HH
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Br] = this._lights
      }
      async postExportNodeAsync(HH, BH, LH, AH, rH) {
        return await new Promise((SH => {
          if (!(LH instanceof EA.b)) return void SH(BH);
          const hH = LH.getTypeID() == EA.b.LIGHTTYPEID_POINTLIGHT ? "point" : LH.getTypeID() == EA.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : LH.getTypeID() == EA.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!hH || !(LH instanceof Hr.d)) return mH.e.Warn(`${HH}: Light ${LH.name} is not supported in ${Br}`), void SH(BH);
          if (LH.falloffType !== EA.b.FALLOFF_GLTF && mH.e.Warn(`${HH}: Light falloff for ${LH.name} does not match the ${Br} specification!`), !LH.position.dtH(0, 0, 0)) {
            const HH = NH.l.lu[0].Tm(LH.position);
            rH && wL(HH), BH.translation = HH.xrH()
          }
          if ("point" !== hH) {
            const HH = LH.direction.normalizeToRef(NH.l.lu[0]);
            rH && wL(HH);
            const AH = NH.f.FromUnitVectorsToRef(rr, HH, NH.l.Quaternion[0]);
            NH.f.IsIdentity(AH) || (BH.rotation = AH.xrH())
          }
          const tH = {
            type: hH,
            name: LH.name,
            color: LH.diffuse.xrH(),
            intensity: LH.intensity,
            range: LH.range
          };
          if (iL(tH, Lr), "spot" === hH) {
            const HH = LH;
            tH.spot = {
              innerConeAngle: HH.innerAngle / 2,
              outerConeAngle: HH.angle / 2
            }, iL(tH.spot, Ar)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(tH);
          const zH = {
              light: this._lights.lights.length - 1
            },
            CH = LH.parent;
          if (CH && sL(LH, CH)) {
            const HH = AH.get(CH);
            if (HH) {
              const LH = this._exporter._nodes[HH];
              return aL(BH, LH), LH.extensions || (LH.extensions = {}), LH.extensions[Br] = zH, void SH(null)
            }
          }
          BH.extensions || (BH.extensions = {}), BH.extensions[Br] = zH, SH(BH)
        }))
      }
    }
    let hr = !1;

    function tr() {
      hr || (hr = !0, cA.RegisterExtension(Br, (HH => new Sr(HH))))
    }
    tr();
    const zr = "KHR_interactivity";
    class Cr {
      constructor(HH) {
        this._exporter = HH, this.name = zr, this.enabled = !!HH.options.khrInteractivity, this.required = HH.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var HH, BH, LH;
        const AH = this._exporter.options.khrInteractivity;
        if (!AH) return;
        const rH = AH.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: HH => this._exporter._getNodeIndex(HH),
          getAnimationIndex: HH => this._exporter._getAnimationIndex(HH),
          getCameraIndex: HH => this._exporter._getCameraIndex(HH),
          getMaterialIndex: HH => this._exporter._getMaterialIndex(HH),
          getRootIndex: (HH, BH) => this._exporter._getRootIndex(HH, BH),
          setNodeExtension: (HH, BH, LH) => this._exporter._setNodeExtension(HH, BH, LH)
        });
        this._exporter._glTF.extensions[zr] = rH;
        for (const SH of AH.additionalExtensionsUsed)(HH = this._exporter._glTF).extensionsUsed || (HH.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(SH) && this._exporter._glTF.extensionsUsed.push(SH);
        for (const SH of AH.additionalExtensionsRequired)(BH = this._exporter._glTF).extensionsUsed || (BH.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(SH) && this._exporter._glTF.extensionsUsed.push(SH), (LH = this._exporter._glTF).extensionsRequired || (LH.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(SH) && this._exporter._glTF.extensionsRequired.push(SH)
      }
    }
    let Er = !1;

    function Xr() {
      Er || (Er = !0, cA.RegisterExtension(zr, (HH => new Cr(HH)), 200))
    }
    Xr();
    const Gr = "EXT_lights_area",
      Yr = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      ur = {
        aspect: 1
      },
      Qr = NH.o.Backward();
    class Wr {
      constructor(HH) {
        this.name = Gr, this.enabled = !0, this.required = !1, this._exporter = HH
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Gr] = this._lights
      }
      async postExportNodeAsync(HH, BH, LH, AH, rH) {
        return await new Promise((SH => {
          if (!(LH instanceof EA.b)) return void SH(BH);
          const hH = LH.getTypeID() == EA.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!hH) return mH.e.Warn(`${HH}: Light ${LH.name} is not supported in ${Gr}`), void SH(BH);
          const tH = LH;
          if (tH.falloffType !== EA.b.FALLOFF_GLTF && mH.e.Warn(`${HH}: Light falloff for ${LH.name} does not match the ${Gr} specification!`), !tH.position.dtH(0, 0, 0)) {
            const HH = NH.l.lu[0].Tm(tH.position);
            rH && wL(HH), BH.translation = HH.xrH()
          }
          const zH = NH.o.Forward();
          rH && wL(zH);
          const CH = NH.f.FromUnitVectorsToRef(Qr, zH, NH.l.Quaternion[0]);
          NH.f.IsIdentity(CH) || (BH.rotation = CH.xrH());
          const EH = {
            type: hH,
            name: tH.name,
            color: tH.diffuse.xrH(),
            intensity: tH.intensity,
            size: tH.height,
            rect: {
              aspect: tH.width / tH.height
            }
          };
          iL(EH, Yr), EH.rect && iL(EH.rect, ur), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(EH);
          const XH = {
              light: this._lights.lights.length - 1
            },
            GH = LH.parent;
          if (GH && sL(tH, GH)) {
            const HH = AH.get(GH);
            if (HH) {
              const LH = this._exporter._nodes[HH];
              return aL(BH, LH), LH.extensions || (LH.extensions = {}), LH.extensions[Gr] = XH, void SH(null)
            }
          }
          BH.extensions || (BH.extensions = {}), BH.extensions[Gr] = XH, SH(BH)
        }))
      }
    }
    let Mr = !1;

    function xr() {
      Mr || (Mr = !0, cA.RegisterExtension(Gr, (HH => new Wr(HH))))
    }
    xr();
    const vr = "KHR_materials_anisotropy";
    class Pr {
      constructor(HH) {
        this.name = vr, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof UB) {
          if (LH.anisotropy.isEnabled && !LH.anisotropy.legacy) return LH.anisotropy.texture && AH.push(LH.anisotropy.texture), AH
        } else if (LH instanceof pB && LH.specularRoughnessAnisotropy > 0) {
          const HH = function(HH) {
            const BH = HH.specularRoughnessAnisotropyTexture,
              LH = HH.geometryTangentTexture;
            return `${BH&&BH.getInternalTexture()?BH.getInternalTexture().uniqueId:"NoStrength"}_${LH&&LH.getInternalTexture()?LH.getInternalTexture().uniqueId:"NoTangent"}`
          }(LH);
          if (this._anisoTexturesMap[HH]) AH.push(this._anisoTexturesMap[HH]);
          else {
            const BH = await async function(HH) {
              const BH = HH.yN(),
                LH = HH.specularRoughnessAnisotropyTexture,
                AH = HH.geometryTangentTexture;
              return LH || AH ? await hL("AnisotropyTexture", CL(AH ? tL(AH, 0) : zL(1), AH ? tL(AH, 1) : zL(0), LH ? tL(LH, 0) : zL(1)), BH) : null
            }(LH);
            BH && (AH.push(BH), this._anisoTexturesMap[HH] = BH)
          }
          return AH
        }
        return []
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          var AH;
          if (LH instanceof UB) {
            if (!LH.anisotropy.isEnabled || LH.anisotropy.legacy) return void HH(BH);
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const AH = this._exporter._materialExporter.getTextureInfo(LH.anisotropy.texture),
              rH = {
                anisotropyStrength: LH.anisotropy.intensity,
                anisotropyRotation: LH.anisotropy.angle,
                anisotropyTexture: AH ?? void 0
              };
            null !== rH.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[vr] = rH
          } else if (LH instanceof pB && LH.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            let rH = LH.specularRoughnessTexture;
            LH._useRoughnessFromMetallicTextureGreen && (rH = LH.baseMetalnessTexture);
            const SH = this._anisoTexturesMap[LH.id];
            if (!rH && !SH) {
              let AH = LH.specularRoughness,
                rH = LH.specularRoughnessAnisotropy;
              if (!LH._useGltfStyleAnisotropy) {
                const HH = function(HH, BH) {
                  const LH = HH * HH,
                    AH = LH * Math.sqrt(2 / (1 + (1 - BH) * (1 - BH))),
                    rH = (1 - BH) * AH;
                  return {
                    newBaseRoughness: Math.sqrt(rH),
                    newAnisotropyStrength: Math.min(Math.sqrt((AH - LH) / Math.max(1 - LH, 1e-4)), 1)
                  }
                }(LH.specularRoughness, LH.specularRoughnessAnisotropy);
                AH = HH.newBaseRoughness, rH = HH.newAnisotropyStrength
              }
              BH.pbrMetallicRoughness && (BH.pbrMetallicRoughness.roughnessFactor = AH);
              const SH = {
                anisotropyStrength: rH,
                anisotropyRotation: LH.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return BH.extensions[vr] = SH, HH(BH)
            }
            const hH = SH ? this._exporter._materialExporter.getTextureInfo(SH) : null,
              tH = {
                anisotropyStrength: LH.specularRoughnessAnisotropy,
                anisotropyRotation: LH.geometryTangentAngle,
                anisotropyTexture: hH || void 0,
                extensions: {}
              };
            LH._useGltfStyleAnisotropy || (BH.extensions.KHR_materials_openpbr = {}, (AH = this._exporter._glTF).extensionsUsed || (AH.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[vr] = tH
          }
          HH(BH)
        }))
      }
    }
    let Tr = !1;

    function Ur() {
      Tr || (Tr = !0, cA.RegisterExtension(vr, (HH => new Pr(HH))))
    }
    Ur();
    const Vr = "KHR_materials_clearcoat";

    function Or(HH, BH) {
      const LH = new IH.g(BH.name, BH.yN());
      return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
    }
    class br {
      constructor(HH) {
        this.name = Vr, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = HH
      }
      dispose() {
        for (const HH of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[HH].dispose()
        }
        this._mergedTexturesMap = {};
        for (const HH of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[HH].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof UB) {
          if (LH.clearCoat.isEnabled) return LH.clearCoat.texture && AH.push(LH.clearCoat.texture), !LH.clearCoat.useRoughnessFromMainTexture && LH.clearCoat.textureRoughness && AH.push(LH.clearCoat.textureRoughness), LH.clearCoat.bumpTexture && AH.push(LH.clearCoat.bumpTexture), AH
        } else if (LH instanceof pB && LH.coatWeight > 0) {
          let HH = !1;
          if (LH.coatWeightTexture ? LH.coatRoughnessTexture ? LH._useCoatRoughnessFromGreenChannel && LH.coatWeightTexture.getInternalTexture() === LH.coatRoughnessTexture.getInternalTexture() ? (AH.push(LH.coatWeightTexture), AH.push(LH.coatRoughnessTexture)) : HH = !0 : AH.push(LH.coatWeightTexture) : LH.coatRoughnessTexture && (LH._useCoatRoughnessFromGreenChannel ? AH.push(LH.coatRoughnessTexture) : HH = !0), HH) {
            const HH = function(HH) {
              const BH = HH.coatWeightTexture,
                LH = BH && BH.getInternalTexture() ? BH.getInternalTexture().uniqueId : "NoCoat",
                AH = HH.coatRoughnessTexture;
              return `${LH}_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoRoughness"}`
            }(LH);
            if (!this._cachedInternalTexturesMap[HH]) {
              const BH = await async function(HH) {
                const BH = HH.yN(),
                  LH = HH.coatWeightTexture,
                  AH = HH.coatRoughnessTexture;
                return LH || AH ? (await hL("CoatTexture", CL(LH ? tL(LH, 0) : zL(1), AH ? tL(AH, HH._useCoatRoughnessFromGreenChannel ? 1 : 0) : zL(1)), BH)).getInternalTexture() : null
              }(LH);
              BH && (this._cachedInternalTexturesMap[HH] = BH)
            }
            this._cachedInternalTexturesMap[HH] && (LH.coatWeightTexture && (this._mergedTexturesMap[LH.coatWeightTexture.uniqueId] = Or(this._cachedInternalTexturesMap[HH], LH.coatWeightTexture), AH.push(this._mergedTexturesMap[LH.coatWeightTexture.uniqueId])), LH.coatRoughnessTexture && (this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId] = Or(this._cachedInternalTexturesMap[HH], LH.coatRoughnessTexture), AH.push(this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId])))
          }
          return LH.geometryCoatNormalTexture && AH.push(LH.geometryCoatNormalTexture), AH
        }
        return []
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof UB) {
            if (!LH.clearCoat.isEnabled) return void HH(BH);
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const AH = this._exporter._materialExporter.getTextureInfo(LH.clearCoat.texture);
            let rH;
            rH = LH.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(LH.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(LH.clearCoat.textureRoughness), LH.clearCoat.isTintEnabled && OB.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${LH.name}`), LH.clearCoat.remapF0OnInterfaceChange && OB.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${LH.name}`);
            const SH = this._exporter._materialExporter.getTextureInfo(LH.clearCoat.bumpTexture),
              hH = {
                clearcoatFactor: LH.clearCoat.intensity,
                clearcoatTexture: AH ?? void 0,
                clearcoatRoughnessFactor: LH.clearCoat.roughness,
                clearcoatRoughnessTexture: rH ?? void 0,
                clearcoatNormalTexture: SH ?? void 0
              };
            null === hH.clearcoatTexture && null === hH.clearcoatRoughnessTexture && null === hH.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[Vr] = hH
          } else if (LH instanceof pB) {
            if (0 == LH.coatWeight) return void HH(BH);
            let AH, rH, SH, hH;
            this._wasUsed = !0, BH.extensions = BH.extensions || {}, LH.coatWeightTexture && (AH = this._mergedTexturesMap[LH.coatWeightTexture.uniqueId], rH = this._exporter._materialExporter.getTextureInfo(AH)), LH.coatRoughnessTexture && (SH = this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId], hH = this._exporter._materialExporter.getTextureInfo(SH)), LH.coatColorTexture && OB.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${LH.name}`);
            const tH = this._exporter._materialExporter.getTextureInfo(LH.geometryCoatNormalTexture),
              zH = {
                clearcoatFactor: LH.coatWeight,
                clearcoatTexture: rH ?? void 0,
                clearcoatRoughnessFactor: LH.coatRoughness,
                clearcoatRoughnessTexture: hH ?? void 0,
                clearcoatNormalTexture: tH ?? void 0
              };
            null === zH.clearcoatTexture && null === zH.clearcoatRoughnessTexture && null === zH.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[Vr] = zH
          }
          HH(BH)
        }))
      }
    }
    let kr = !1;

    function mr() {
      kr || (kr = !0, cA.RegisterExtension(Vr, (HH => new br(HH))))
    }
    mr();
    const or = "KHR_materials_coat";

    function Ir(HH) {
      const BH = HH.coatRoughnessAnisotropyTexture,
        LH = HH.geometryCoatTangentTexture;
      return `${BH&&BH.getInternalTexture()?BH.getInternalTexture().uniqueId:"NoStrength"}_${LH&&LH.getInternalTexture()?LH.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function fr(HH, BH) {
      const LH = new IH.g(BH.name, BH.yN());
      return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
    }
    class lr {
      constructor(HH) {
        this.name = or, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = HH
      }
      dispose() {
        for (const HH of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[HH].dispose()
        }
        this._mergedTexturesMap = {};
        for (const HH of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[HH].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof UB) {
          if (LH.clearCoat.isEnabled) return LH.clearCoat.texture && AH.push(LH.clearCoat.texture), !LH.clearCoat.useRoughnessFromMainTexture && LH.clearCoat.textureRoughness && AH.push(LH.clearCoat.textureRoughness), LH.clearCoat.bumpTexture && AH.push(LH.clearCoat.bumpTexture), LH.clearCoat.tintTexture && AH.push(LH.clearCoat.tintTexture), AH
        } else if (LH instanceof pB && LH.coatWeight > 0) {
          let HH = !1;
          if (LH.coatWeightTexture ? LH.coatRoughnessTexture ? LH._useCoatRoughnessFromGreenChannel && LH.coatWeightTexture.getInternalTexture() === LH.coatRoughnessTexture.getInternalTexture() ? (AH.push(LH.coatWeightTexture), AH.push(LH.coatRoughnessTexture)) : HH = !0 : AH.push(LH.coatWeightTexture) : LH.coatRoughnessTexture && (LH._useCoatRoughnessFromGreenChannel ? AH.push(LH.coatRoughnessTexture) : HH = !0), HH) {
            const HH = function(HH) {
              const BH = HH.coatWeightTexture,
                LH = BH && BH.getInternalTexture() ? BH.getInternalTexture().uniqueId : "NoCoat",
                AH = HH.coatRoughnessTexture;
              return `${LH}_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoRoughness"}`
            }(LH);
            if (!this._cachedInternalTexturesMap[HH]) {
              const BH = await async function(HH) {
                const BH = HH.yN(),
                  LH = HH.coatWeightTexture,
                  AH = HH.coatRoughnessTexture;
                return LH || AH ? (await hL("CoatTexture", CL(LH ? tL(LH, 0) : zL(1), AH ? tL(AH, HH._useCoatRoughnessFromGreenChannel ? 1 : 0) : zL(1)), BH)).getInternalTexture() : null
              }(LH);
              BH && (this._cachedInternalTexturesMap[HH] = BH)
            }
            this._cachedInternalTexturesMap[HH] && (LH.coatWeightTexture && (this._mergedTexturesMap[LH.coatWeightTexture.uniqueId] = fr(this._cachedInternalTexturesMap[HH], LH.coatWeightTexture), AH.push(this._mergedTexturesMap[LH.coatWeightTexture.uniqueId])), LH.coatRoughnessTexture && (this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId] = fr(this._cachedInternalTexturesMap[HH], LH.coatRoughnessTexture), AH.push(this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId])))
          }
          if (LH.geometryCoatNormalTexture && AH.push(LH.geometryCoatNormalTexture), LH.coatColorTexture && AH.push(LH.coatColorTexture), LH.coatRoughnessAnisotropy > 0) {
            const HH = Ir(LH);
            if (this._mergedTexturesMap[HH]) AH.push(this._mergedTexturesMap[HH]);
            else {
              const BH = await async function(HH) {
                const BH = HH.yN(),
                  LH = HH.coatRoughnessAnisotropyTexture,
                  AH = HH.geometryCoatTangentTexture;
                return LH || AH ? await hL("AnisotropyTexture", CL(AH ? tL(AH, 0) : zL(1), AH ? tL(AH, 1) : zL(0), LH ? tL(LH, 0) : zL(1)), BH) : null
              }(LH);
              BH && (AH.push(BH), this._mergedTexturesMap[HH] = BH)
            }
            return AH
          }
          return AH
        }
        return []
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          var AH;
          if (LH instanceof UB) {
            if (!LH.clearCoat.isEnabled) return void HH(BH);
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const AH = this._exporter._materialExporter.getTextureInfo(LH.clearCoat.texture);
            let rH, SH;
            rH = LH.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(LH.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(LH.clearCoat.textureRoughness), LH.clearCoat.isTintEnabled && (SH = this._exporter._materialExporter.getTextureInfo(LH.clearCoat.tintTexture));
            const hH = this._exporter._materialExporter.getTextureInfo(LH.clearCoat.bumpTexture),
              tH = LH.clearCoat.indexOfRefraction,
              zH = {
                coatFactor: LH.clearCoat.intensity,
                coatTexture: AH ?? void 0,
                coatRoughnessFactor: LH.clearCoat.roughness,
                coatRoughnessTexture: rH ?? void 0,
                coatNormalTexture: hH ?? void 0,
                coatColorFactor: LH.clearCoat.tintColor.xrH(),
                coatColorTexture: SH ?? void 0,
                coatIor: 1.5 !== tH ? tH : void 0
              };
            null === zH.coatTexture && null === zH.coatRoughnessTexture && null === zH.coatRoughnessTexture && null === zH.coatColorTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[or] = zH
          } else if (LH instanceof pB) {
            if (0 == LH.coatWeight) return void HH(BH);
            let rH, SH, hH, tH;
            this._wasUsed = !0, BH.extensions = BH.extensions || {}, LH.coatWeightTexture && (rH = this._mergedTexturesMap[LH.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[LH.coatWeightTexture.uniqueId] : LH.coatWeightTexture, SH = this._exporter._materialExporter.getTextureInfo(rH)), LH.coatRoughnessTexture && (hH = this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[LH.coatRoughnessTexture.uniqueId] : LH.coatRoughnessTexture, tH = this._exporter._materialExporter.getTextureInfo(hH));
            const zH = this._exporter._materialExporter.getTextureInfo(LH.geometryCoatNormalTexture),
              CH = this._exporter._materialExporter.getTextureInfo(LH.coatColorTexture),
              EH = LH.coatIor,
              XH = LH.coatDarkening,
              GH = LH.coatRoughnessTexture,
              YH = Ir(LH),
              uH = this._mergedTexturesMap[YH];
            let QH, WH = 0,
              MH = 0;
            if (LH.coatRoughnessAnisotropy > 0) {
              if (GH || uH) {
                const HH = uH ? this._exporter._materialExporter.getTextureInfo(uH) : null;
                WH = LH.coatRoughnessAnisotropy, MH = LH.geometryCoatTangentAngle, QH = HH || void 0
              } else {
                let HH = LH.coatRoughness,
                  AH = LH.coatRoughnessAnisotropy;
                if (!LH._useGltfStyleAnisotropy) {
                  const BH = function(HH, BH) {
                    const LH = HH * HH,
                      AH = LH * Math.sqrt(2 / (1 + (1 - BH) * (1 - BH))),
                      rH = (1 - BH) * AH;
                    return {
                      newBaseRoughness: Math.sqrt(rH),
                      newAnisotropyStrength: Math.min(Math.sqrt((AH - LH) / Math.max(1 - LH, 1e-4)), 1)
                    }
                  }(LH.coatRoughness, LH.coatRoughnessAnisotropy);
                  HH = BH.newBaseRoughness, AH = BH.newAnisotropyStrength
                }
                BH.pbrMetallicRoughness && (BH.pbrMetallicRoughness.roughnessFactor = HH), WH = AH, MH = LH.geometryCoatTangentAngle + .5 * Math.PI, QH = void 0
              }
              LH._useGltfStyleAnisotropy || (BH.extensions.KHR_materials_openpbr = {}, (AH = this._exporter._glTF).extensionsUsed || (AH.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const xH = {
              coatFactor: LH.coatWeight,
              coatTexture: SH ?? void 0,
              coatRoughnessFactor: LH.coatRoughness,
              coatRoughnessTexture: tH ?? void 0,
              coatNormalTexture: zH ?? void 0,
              coatColorFactor: LH.coatColor.xrH(),
              coatColorTexture: CH ?? void 0,
              coatIor: 1.5 !== EH ? EH : void 0,
              coatDarkeningFactor: 1 !== XH ? XH : void 0,
              coatAnisotropyRotation: MH,
              coatAnisotropyStrength: WH,
              coatAnisotropyTexture: QH
            };
            null === xH.coatTexture && null === xH.coatRoughnessTexture && null === xH.coatRoughnessTexture && null === xH.coatAnisotropyTexture && null === xH.coatColorTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[or] = xH
          }
          HH(BH)
        }))
      }
    }
    let Kr = !1;

    function cr() {
      Kr || (Kr = !0, cA.RegisterExtension(or, (HH => new lr(HH))))
    }
    cr();
    let er = (() => {
      var HH, BH, LH, AH, rH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, mH, oH, IH, fH, lH, KH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, dH, aH, sH, JH, iH, pH, yH, HB, BB, LB, AB, rB, SB, hB, tB, zB, CB, EB, XB, GB, YB, uB, QB, WB, MB, xB, vB;
      let PB, TB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB, yB, HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL, XL, GL, YL, uL, QL, WL, ML, xL, vL, PL, TL, UL, VL, OL, bL, kL, mL, oL, IL, fL, lL, KL, cL, eL, qL, gL, NL, RL = UB,
        jL = [],
        nL = [],
        FL = [],
        DL = [],
        wL = [],
        ZL = [],
        dL = [],
        aL = [],
        sL = [],
        JL = [],
        iL = [],
        pL = [],
        yL = [],
        HA = [],
        BA = [],
        LA = [],
        AA = [],
        rA = [],
        SA = [],
        hA = [],
        tA = [],
        zA = [],
        CA = [],
        EA = [],
        XA = [],
        GA = [],
        YA = [],
        uA = [],
        QA = [],
        WA = [],
        MA = [],
        xA = [],
        vA = [],
        PA = [],
        TA = [],
        UA = [],
        VA = [],
        OA = [],
        bA = [],
        kA = [],
        mA = [],
        oA = [],
        IA = [],
        fA = [],
        lA = [],
        KA = [],
        cA = [],
        eA = [],
        qA = [],
        gA = [],
        NA = [],
        RA = [],
        jA = [],
        nA = [],
        FA = [],
        DA = [],
        wA = [],
        ZA = [],
        dA = [],
        aA = [],
        sA = [],
        JA = [],
        iA = [],
        pA = [],
        yA = [],
        Hr = [],
        Br = [],
        Lr = [],
        Ar = [],
        rr = [],
        Sr = [],
        hr = [],
        tr = [],
        zr = [],
        Cr = [],
        Er = [],
        Xr = [],
        Gr = [],
        Yr = [],
        ur = [],
        Qr = [],
        Wr = [],
        Mr = [],
        xr = [],
        vr = [],
        Pr = [],
        Tr = [],
        Ur = [],
        Vr = [],
        Or = [],
        br = [],
        kr = [],
        mr = [],
        or = [],
        Ir = [],
        fr = [],
        lr = [],
        Kr = [],
        cr = [],
        er = [],
        qr = [],
        gr = [],
        Nr = [],
        Rr = [],
        jr = [],
        nr = [],
        Fr = [],
        Dr = [],
        wr = [],
        Zr = [],
        dr = [],
        ar = [],
        sr = [],
        Jr = [],
        ir = [],
        pr = [],
        yr = [],
        HS = [],
        BS = [],
        LS = [],
        AS = [],
        rS = [],
        SS = [],
        hS = [],
        tS = [],
        zS = [],
        CS = [],
        ES = [],
        XS = [],
        GS = [],
        YS = [],
        uS = [],
        QS = [];
      return HH = class extends RL {
        get directIntensity() {
          return (0, bH.e)(this, BH, "f")
        }
        set directIntensity(HH) {
          (0, bH.f)(this, BH, HH, "f")
        }
        get emissiveIntensity() {
          return (0, bH.e)(this, LH, "f")
        }
        set emissiveIntensity(HH) {
          (0, bH.f)(this, LH, HH, "f")
        }
        get environmentIntensity() {
          return (0, bH.e)(this, AH, "f")
        }
        set environmentIntensity(HH) {
          (0, bH.f)(this, AH, HH, "f")
        }
        get specularIntensity() {
          return (0, bH.e)(this, rH, "f")
        }
        set specularIntensity(HH) {
          (0, bH.f)(this, rH, HH, "f")
        }
        get disableBumpMap() {
          return (0, bH.e)(this, hH, "f")
        }
        set disableBumpMap(HH) {
          (0, bH.f)(this, hH, HH, "f")
        }
        get albedoTexture() {
          return (0, bH.e)(this, tH, "f")
        }
        set albedoTexture(HH) {
          (0, bH.f)(this, tH, HH, "f")
        }
        get baseWeightTexture() {
          return (0, bH.e)(this, zH, "f")
        }
        set baseWeightTexture(HH) {
          (0, bH.f)(this, zH, HH, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, bH.e)(this, CH, "f")
        }
        set baseDiffuseRoughnessTexture(HH) {
          (0, bH.f)(this, CH, HH, "f")
        }
        get ambientTexture() {
          return (0, bH.e)(this, EH, "f")
        }
        set ambientTexture(HH) {
          (0, bH.f)(this, EH, HH, "f")
        }
        get ambientTextureStrength() {
          return (0, bH.e)(this, XH, "f")
        }
        set ambientTextureStrength(HH) {
          (0, bH.f)(this, XH, HH, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, bH.e)(this, GH, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(HH) {
          (0, bH.f)(this, GH, HH, "f")
        }
        get opacityTexture() {
          return (0, bH.e)(this, YH, "f")
        }
        set opacityTexture(HH) {
          (0, bH.f)(this, YH, HH, "f")
        }
        get reflectionTexture() {
          return (0, bH.e)(this, uH, "f")
        }
        set reflectionTexture(HH) {
          (0, bH.f)(this, uH, HH, "f")
        }
        get emissiveTexture() {
          return (0, bH.e)(this, QH, "f")
        }
        set emissiveTexture(HH) {
          (0, bH.f)(this, QH, HH, "f")
        }
        get reflectivityTexture() {
          return (0, bH.e)(this, WH, "f")
        }
        set reflectivityTexture(HH) {
          (0, bH.f)(this, WH, HH, "f")
        }
        get metallicTexture() {
          return (0, bH.e)(this, MH, "f")
        }
        set metallicTexture(HH) {
          (0, bH.f)(this, MH, HH, "f")
        }
        get metallic() {
          return (0, bH.e)(this, xH, "f")
        }
        set metallic(HH) {
          (0, bH.f)(this, xH, HH, "f")
        }
        get roughness() {
          return (0, bH.e)(this, vH, "f")
        }
        set roughness(HH) {
          (0, bH.f)(this, vH, HH, "f")
        }
        get metallicF0Factor() {
          return (0, bH.e)(this, PH, "f")
        }
        set metallicF0Factor(HH) {
          (0, bH.f)(this, PH, HH, "f")
        }
        get metallicReflectanceColor() {
          return (0, bH.e)(this, TH, "f")
        }
        set metallicReflectanceColor(HH) {
          (0, bH.f)(this, TH, HH, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, bH.e)(this, UH, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(HH) {
          (0, bH.f)(this, UH, HH, "f")
        }
        get metallicReflectanceTexture() {
          return (0, bH.e)(this, VH, "f")
        }
        set metallicReflectanceTexture(HH) {
          (0, bH.f)(this, VH, HH, "f")
        }
        get reflectanceTexture() {
          return (0, bH.e)(this, OH, "f")
        }
        set reflectanceTexture(HH) {
          (0, bH.f)(this, OH, HH, "f")
        }
        get microSurfaceTexture() {
          return (0, bH.e)(this, mH, "f")
        }
        set microSurfaceTexture(HH) {
          (0, bH.f)(this, mH, HH, "f")
        }
        get bumpTexture() {
          return (0, bH.e)(this, oH, "f")
        }
        set bumpTexture(HH) {
          (0, bH.f)(this, oH, HH, "f")
        }
        get lightmapTexture() {
          return (0, bH.e)(this, IH, "f")
        }
        set lightmapTexture(HH) {
          (0, bH.f)(this, IH, HH, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(HH) {
          this.subSurface.refractionTexture = HH, HH ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, bH.e)(this, fH, "f")
        }
        set ambientColor(HH) {
          (0, bH.f)(this, fH, HH, "f")
        }
        get albedoColor() {
          return (0, bH.e)(this, lH, "f")
        }
        set albedoColor(HH) {
          (0, bH.f)(this, lH, HH, "f")
        }
        get baseWeight() {
          return (0, bH.e)(this, KH, "f")
        }
        set baseWeight(HH) {
          (0, bH.f)(this, KH, HH, "f")
        }
        get baseDiffuseRoughness() {
          return (0, bH.e)(this, eH, "f")
        }
        set baseDiffuseRoughness(HH) {
          (0, bH.f)(this, eH, HH, "f")
        }
        get reflectivityColor() {
          return (0, bH.e)(this, qH, "f")
        }
        set reflectivityColor(HH) {
          (0, bH.f)(this, qH, HH, "f")
        }
        get reflectionColor() {
          return (0, bH.e)(this, gH, "f")
        }
        set reflectionColor(HH) {
          (0, bH.f)(this, gH, HH, "f")
        }
        get emissiveColor() {
          return (0, bH.e)(this, NH, "f")
        }
        set emissiveColor(HH) {
          (0, bH.f)(this, NH, HH, "f")
        }
        get microSurface() {
          return (0, bH.e)(this, RH, "f")
        }
        set microSurface(HH) {
          (0, bH.f)(this, RH, HH, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(HH) {
          this.subSurface.indexOfRefraction = HH
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(HH) {
          this.subSurface.invertRefractionY = HH
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(HH) {
          this.subSurface.linkRefractionWithTransparency = HH, HH && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, bH.e)(this, jH, "f")
        }
        set useLightmapAsShadowmap(HH) {
          (0, bH.f)(this, jH, HH, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, bH.e)(this, nH, "f")
        }
        set useAlphaFromAlbedoTexture(HH) {
          (0, bH.f)(this, nH, HH, "f")
        }
        get forceAlphaTest() {
          return (0, bH.e)(this, FH, "f")
        }
        set forceAlphaTest(HH) {
          (0, bH.f)(this, FH, HH, "f")
        }
        get alphaCutOff() {
          return (0, bH.e)(this, DH, "f")
        }
        set alphaCutOff(HH) {
          (0, bH.f)(this, DH, HH, "f")
        }
        get useSpecularOverAlpha() {
          return (0, bH.e)(this, wH, "f")
        }
        set useSpecularOverAlpha(HH) {
          (0, bH.f)(this, wH, HH, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, bH.e)(this, dH, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(HH) {
          (0, bH.f)(this, dH, HH, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, bH.e)(this, aH, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(HH) {
          (0, bH.f)(this, aH, HH, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, bH.e)(this, sH, "f")
        }
        set useRoughnessFromMetallicTextureGreen(HH) {
          (0, bH.f)(this, sH, HH, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, bH.e)(this, JH, "f")
        }
        set useMetallnessFromMetallicTextureBlue(HH) {
          (0, bH.f)(this, JH, HH, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, bH.e)(this, iH, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(HH) {
          (0, bH.f)(this, iH, HH, "f")
        }
        get useAmbientInGrayScale() {
          return (0, bH.e)(this, pH, "f")
        }
        set useAmbientInGrayScale(HH) {
          (0, bH.f)(this, pH, HH, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, bH.e)(this, yH, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(HH) {
          (0, bH.f)(this, yH, HH, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === UB.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(HH) {
          HH !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? UB.LIGHTFALLOFF_PHYSICAL : UB.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === UB.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(HH) {
          HH !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? UB.LIGHTFALLOFF_GLTF : UB.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, bH.e)(this, HB, "f")
        }
        set useRadianceOverAlpha(HH) {
          (0, bH.f)(this, HB, HH, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, bH.e)(this, BB, "f")
        }
        set useObjectSpaceNormalMap(HH) {
          (0, bH.f)(this, BB, HH, "f")
        }
        get useParallax() {
          return (0, bH.e)(this, LB, "f")
        }
        set useParallax(HH) {
          (0, bH.f)(this, LB, HH, "f")
        }
        get useParallaxOcclusion() {
          return (0, bH.e)(this, AB, "f")
        }
        set useParallaxOcclusion(HH) {
          (0, bH.f)(this, AB, HH, "f")
        }
        get parallaxScaleBias() {
          return (0, bH.e)(this, rB, "f")
        }
        set parallaxScaleBias(HH) {
          (0, bH.f)(this, rB, HH, "f")
        }
        get disableLighting() {
          return (0, bH.e)(this, SB, "f")
        }
        set disableLighting(HH) {
          (0, bH.f)(this, SB, HH, "f")
        }
        get forceIrradianceInFragment() {
          return (0, bH.e)(this, hB, "f")
        }
        set forceIrradianceInFragment(HH) {
          (0, bH.f)(this, hB, HH, "f")
        }
        get maxSimultaneousLights() {
          return (0, bH.e)(this, tB, "f")
        }
        set maxSimultaneousLights(HH) {
          (0, bH.f)(this, tB, HH, "f")
        }
        get invertNormalMapX() {
          return (0, bH.e)(this, zB, "f")
        }
        set invertNormalMapX(HH) {
          (0, bH.f)(this, zB, HH, "f")
        }
        get invertNormalMapY() {
          return (0, bH.e)(this, CB, "f")
        }
        set invertNormalMapY(HH) {
          (0, bH.f)(this, CB, HH, "f")
        }
        get twoSidedLighting() {
          return (0, bH.e)(this, EB, "f")
        }
        set twoSidedLighting(HH) {
          (0, bH.f)(this, EB, HH, "f")
        }
        get useAlphaFresnel() {
          return (0, bH.e)(this, XB, "f")
        }
        set useAlphaFresnel(HH) {
          (0, bH.f)(this, XB, HH, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, bH.e)(this, GB, "f")
        }
        set useLinearAlphaFresnel(HH) {
          (0, bH.f)(this, GB, HH, "f")
        }
        get environmentBRDFTexture() {
          return (0, bH.e)(this, YB, "f")
        }
        set environmentBRDFTexture(HH) {
          (0, bH.f)(this, YB, HH, "f")
        }
        get forceNormalForward() {
          return (0, bH.e)(this, uB, "f")
        }
        set forceNormalForward(HH) {
          (0, bH.f)(this, uB, HH, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, bH.e)(this, QB, "f")
        }
        set enableSpecularAntiAliasing(HH) {
          (0, bH.f)(this, QB, HH, "f")
        }
        get useHorizonOcclusion() {
          return (0, bH.e)(this, WB, "f")
        }
        set useHorizonOcclusion(HH) {
          (0, bH.f)(this, WB, HH, "f")
        }
        get useRadianceOcclusion() {
          return (0, bH.e)(this, MB, "f")
        }
        set useRadianceOcclusion(HH) {
          (0, bH.f)(this, MB, HH, "f")
        }
        get unlit() {
          return (0, bH.e)(this, xB, "f")
        }
        set unlit(HH) {
          (0, bH.f)(this, xB, HH, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, bH.e)(this, vB, "f")
        }
        set applyDecalMapAfterDetailMap(HH) {
          (0, bH.f)(this, vB, HH, "f")
        }
        constructor(SH, kH) {
          super(SH, kH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), BH.set(this, ((0, bH.k)(this, jL), (0, bH.k)(this, nL, 1))), LH.set(this, ((0, bH.k)(this, FL), (0, bH.k)(this, DL, 1))), AH.set(this, ((0, bH.k)(this, wL), (0, bH.k)(this, ZL, 1))), rH.set(this, ((0, bH.k)(this, dL), (0, bH.k)(this, aL, 1))), hH.set(this, ((0, bH.k)(this, sL), (0, bH.k)(this, JL, !1))), tH.set(this, ((0, bH.k)(this, iL), (0, bH.k)(this, pL, void 0))), zH.set(this, ((0, bH.k)(this, yL), (0, bH.k)(this, HA, void 0))), CH.set(this, ((0, bH.k)(this, BA), (0, bH.k)(this, LA, void 0))), EH.set(this, ((0, bH.k)(this, AA), (0, bH.k)(this, rA, void 0))), XH.set(this, ((0, bH.k)(this, SA), (0, bH.k)(this, hA, 1))), GH.set(this, ((0, bH.k)(this, tA), (0, bH.k)(this, zA, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), YH.set(this, ((0, bH.k)(this, CA), (0, bH.k)(this, EA, void 0))), uH.set(this, ((0, bH.k)(this, XA), (0, bH.k)(this, GA, void 0))), QH.set(this, ((0, bH.k)(this, YA), (0, bH.k)(this, uA, void 0))), WH.set(this, ((0, bH.k)(this, QA), (0, bH.k)(this, WA, void 0))), MH.set(this, ((0, bH.k)(this, MA), (0, bH.k)(this, xA, void 0))), xH.set(this, ((0, bH.k)(this, vA), (0, bH.k)(this, PA, void 0))), vH.set(this, ((0, bH.k)(this, TA), (0, bH.k)(this, UA, void 0))), PH.set(this, ((0, bH.k)(this, VA), (0, bH.k)(this, OA, 1))), TH.set(this, ((0, bH.k)(this, bA), (0, bH.k)(this, kA, ZH.c.White()))), UH.set(this, ((0, bH.k)(this, mA), (0, bH.k)(this, oA, !1))), VH.set(this, ((0, bH.k)(this, IA), (0, bH.k)(this, fA, void 0))), OH.set(this, ((0, bH.k)(this, lA), (0, bH.k)(this, KA, void 0))), mH.set(this, ((0, bH.k)(this, cA), (0, bH.k)(this, eA, void 0))), oH.set(this, ((0, bH.k)(this, qA), (0, bH.k)(this, gA, void 0))), IH.set(this, ((0, bH.k)(this, NA), (0, bH.k)(this, RA, void 0))), fH.set(this, ((0, bH.k)(this, jA), (0, bH.k)(this, nA, new ZH.c(0, 0, 0)))), lH.set(this, ((0, bH.k)(this, FA), (0, bH.k)(this, DA, new ZH.c(1, 1, 1)))), KH.set(this, ((0, bH.k)(this, wA), (0, bH.k)(this, ZA, 1))), eH.set(this, ((0, bH.k)(this, dA), (0, bH.k)(this, aA, void 0))), qH.set(this, ((0, bH.k)(this, sA), (0, bH.k)(this, JA, new ZH.c(1, 1, 1)))), gH.set(this, ((0, bH.k)(this, iA), (0, bH.k)(this, pA, new ZH.c(1, 1, 1)))), NH.set(this, ((0, bH.k)(this, yA), (0, bH.k)(this, Hr, new ZH.c(0, 0, 0)))), RH.set(this, ((0, bH.k)(this, Br), (0, bH.k)(this, Lr, 1))), jH.set(this, ((0, bH.k)(this, Ar), (0, bH.k)(this, rr, !1))), nH.set(this, ((0, bH.k)(this, Sr), (0, bH.k)(this, hr, !1))), FH.set(this, ((0, bH.k)(this, tr), (0, bH.k)(this, zr, !1))), DH.set(this, ((0, bH.k)(this, Cr), (0, bH.k)(this, Er, .4))), wH.set(this, ((0, bH.k)(this, Xr), (0, bH.k)(this, Gr, !0))), dH.set(this, ((0, bH.k)(this, Yr), (0, bH.k)(this, ur, !1))), aH.set(this, ((0, bH.k)(this, Qr), (0, bH.k)(this, Wr, !0))), sH.set(this, ((0, bH.k)(this, Mr), (0, bH.k)(this, xr, !1))), JH.set(this, ((0, bH.k)(this, vr), (0, bH.k)(this, Pr, !1))), iH.set(this, ((0, bH.k)(this, Tr), (0, bH.k)(this, Ur, !1))), pH.set(this, ((0, bH.k)(this, Vr), (0, bH.k)(this, Or, !1))), yH.set(this, ((0, bH.k)(this, br), (0, bH.k)(this, kr, !1))), HB.set(this, ((0, bH.k)(this, mr), (0, bH.k)(this, or, !0))), BB.set(this, ((0, bH.k)(this, Ir), (0, bH.k)(this, fr, !1))), LB.set(this, ((0, bH.k)(this, lr), (0, bH.k)(this, Kr, !1))), AB.set(this, ((0, bH.k)(this, cr), (0, bH.k)(this, er, !1))), rB.set(this, ((0, bH.k)(this, qr), (0, bH.k)(this, gr, .05))), SB.set(this, ((0, bH.k)(this, Nr), (0, bH.k)(this, Rr, !1))), hB.set(this, ((0, bH.k)(this, jr), (0, bH.k)(this, nr, !1))), tB.set(this, ((0, bH.k)(this, Fr), (0, bH.k)(this, Dr, 4))), zB.set(this, ((0, bH.k)(this, wr), (0, bH.k)(this, Zr, !1))), CB.set(this, ((0, bH.k)(this, dr), (0, bH.k)(this, ar, !1))), EB.set(this, ((0, bH.k)(this, sr), (0, bH.k)(this, Jr, !1))), XB.set(this, ((0, bH.k)(this, ir), (0, bH.k)(this, pr, !1))), GB.set(this, ((0, bH.k)(this, yr), (0, bH.k)(this, HS, !1))), YB.set(this, ((0, bH.k)(this, BS), (0, bH.k)(this, LS, null))), uB.set(this, ((0, bH.k)(this, AS), (0, bH.k)(this, rS, !1))), QB.set(this, ((0, bH.k)(this, SS), (0, bH.k)(this, hS, !1))), WB.set(this, ((0, bH.k)(this, tS), (0, bH.k)(this, zS, !0))), MB.set(this, ((0, bH.k)(this, CS), (0, bH.k)(this, ES, !0))), xB.set(this, ((0, bH.k)(this, XS), (0, bH.k)(this, GS, !1))), vB.set(this, ((0, bH.k)(this, YS), (0, bH.k)(this, uS, !1))), (0, bH.k)(this, QS), this._environmentBRDFTexture = cH(this.yN())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(BH) {
          let LH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const rH = VB.c.Clone((() => new HH(BH, this.yN())), this, {
            cloneTexturesOnlyOnce: LH
          });
          return rH.id = BH, rH.name = BH, this.stencil.copyTo(rH.stencil), this._clonePlugins(rH, AH), rH
        }
        serialize() {
          const HH = super.serialize();
          return HH.customType = "BABYLON.PBRMaterial", HH
        }
        static Parse(BH, LH, AH) {
          const rH = VB.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH);
          return BH.stencil && rH.stencil.parse(BH.stencil, LH, AH), SH.c._ParsePlugins(BH, rH, LH, AH), BH.clearCoat && rH.clearCoat.parse(BH.clearCoat, LH, AH), BH.anisotropy && rH.anisotropy.parse(BH.anisotropy, LH, AH), BH.brdf && rH.brdf.parse(BH.brdf, LH, AH), BH.sheen && rH.sheen.parse(BH.sheen, LH, AH), BH.subSurface && rH.subSurface.parse(BH.subSurface, LH, AH), BH.iridescence && rH.iridescence.parse(BH.iridescence, LH, AH), rH
        }
      }, BH = new WeakMap, LH = new WeakMap, AH = new WeakMap, rH = new WeakMap, hH = new WeakMap, tH = new WeakMap, zH = new WeakMap, CH = new WeakMap, EH = new WeakMap, XH = new WeakMap, GH = new WeakMap, YH = new WeakMap, uH = new WeakMap, QH = new WeakMap, WH = new WeakMap, MH = new WeakMap, xH = new WeakMap, vH = new WeakMap, PH = new WeakMap, TH = new WeakMap, UH = new WeakMap, VH = new WeakMap, OH = new WeakMap, mH = new WeakMap, oH = new WeakMap, IH = new WeakMap, fH = new WeakMap, lH = new WeakMap, KH = new WeakMap, eH = new WeakMap, qH = new WeakMap, gH = new WeakMap, NH = new WeakMap, RH = new WeakMap, jH = new WeakMap, nH = new WeakMap, FH = new WeakMap, DH = new WeakMap, wH = new WeakMap, dH = new WeakMap, aH = new WeakMap, sH = new WeakMap, JH = new WeakMap, iH = new WeakMap, pH = new WeakMap, yH = new WeakMap, HB = new WeakMap, BB = new WeakMap, LB = new WeakMap, AB = new WeakMap, rB = new WeakMap, SB = new WeakMap, hB = new WeakMap, tB = new WeakMap, zB = new WeakMap, CB = new WeakMap, EB = new WeakMap, XB = new WeakMap, GB = new WeakMap, YB = new WeakMap, uB = new WeakMap, QB = new WeakMap, WB = new WeakMap, MB = new WeakMap, xB = new WeakMap, vB = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(RL[Symbol.metadata] ?? null) : void 0;
        PB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], IB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], fB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], eB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], jB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], nB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, kH.l)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], wB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], sB = [(0, kH.A)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty", null)], JB = [(0, kH.l)("ambient"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, kH.l)("albedo"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, kH.H)("baseWeight"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, kH.H)("baseDiffuseRoughness"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], HL = [(0, kH.l)("reflectivity"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], BL = [(0, kH.l)("reflection"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], LL = [(0, kH.l)("emissive"), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], AL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], rL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], SL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], hL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], tL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], zL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], CL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], EL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], XL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], GL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], YL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], uL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], QL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], WL = [(0, kH.H)()], ML = [(0, kH.H)()], xL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], vL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], PL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], TL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], UL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], VL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsLightsDirty")], OL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], bL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsLightsDirty")], kL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], mL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], oL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], IL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], fL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], lL = [(0, kH.e)("_markAllSubMeshesAsTexturesDirty")], KL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], cL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], eL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], qL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], gL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], NL = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsMiscDirty")], (0, bH.g)(HH, null, PB, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "directIntensity" in HH,
            get: HH => HH.directIntensity,
            set: (HH, BH) => {
              HH.directIntensity = BH
            }
          },
          metadata: BH
        }, nL, FL), (0, bH.g)(HH, null, TB, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "emissiveIntensity" in HH,
            get: HH => HH.emissiveIntensity,
            set: (HH, BH) => {
              HH.emissiveIntensity = BH
            }
          },
          metadata: BH
        }, DL, wL), (0, bH.g)(HH, null, OB, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "environmentIntensity" in HH,
            get: HH => HH.environmentIntensity,
            set: (HH, BH) => {
              HH.environmentIntensity = BH
            }
          },
          metadata: BH
        }, ZL, dL), (0, bH.g)(HH, null, bB, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "specularIntensity" in HH,
            get: HH => HH.specularIntensity,
            set: (HH, BH) => {
              HH.specularIntensity = BH
            }
          },
          metadata: BH
        }, aL, sL), (0, bH.g)(HH, null, kB, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableBumpMap" in HH,
            get: HH => HH.disableBumpMap,
            set: (HH, BH) => {
              HH.disableBumpMap = BH
            }
          },
          metadata: BH
        }, JL, iL), (0, bH.g)(HH, null, mB, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "albedoTexture" in HH,
            get: HH => HH.albedoTexture,
            set: (HH, BH) => {
              HH.albedoTexture = BH
            }
          },
          metadata: BH
        }, pL, yL), (0, bH.g)(HH, null, oB, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseWeightTexture" in HH,
            get: HH => HH.baseWeightTexture,
            set: (HH, BH) => {
              HH.baseWeightTexture = BH
            }
          },
          metadata: BH
        }, HA, BA), (0, bH.g)(HH, null, IB, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseDiffuseRoughnessTexture" in HH,
            get: HH => HH.baseDiffuseRoughnessTexture,
            set: (HH, BH) => {
              HH.baseDiffuseRoughnessTexture = BH
            }
          },
          metadata: BH
        }, LA, AA), (0, bH.g)(HH, null, fB, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "ambientTexture" in HH,
            get: HH => HH.ambientTexture,
            set: (HH, BH) => {
              HH.ambientTexture = BH
            }
          },
          metadata: BH
        }, rA, SA), (0, bH.g)(HH, null, lB, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: HH => "ambientTextureStrength" in HH,
            get: HH => HH.ambientTextureStrength,
            set: (HH, BH) => {
              HH.ambientTextureStrength = BH
            }
          },
          metadata: BH
        }, hA, tA), (0, bH.g)(HH, null, KB, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: HH => "ambientTextureImpactOnAnalyticalLights" in HH,
            get: HH => HH.ambientTextureImpactOnAnalyticalLights,
            set: (HH, BH) => {
              HH.ambientTextureImpactOnAnalyticalLights = BH
            }
          },
          metadata: BH
        }, zA, CA), (0, bH.g)(HH, null, cB, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "opacityTexture" in HH,
            get: HH => HH.opacityTexture,
            set: (HH, BH) => {
              HH.opacityTexture = BH
            }
          },
          metadata: BH
        }, EA, XA), (0, bH.g)(HH, null, eB, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "reflectionTexture" in HH,
            get: HH => HH.reflectionTexture,
            set: (HH, BH) => {
              HH.reflectionTexture = BH
            }
          },
          metadata: BH
        }, GA, YA), (0, bH.g)(HH, null, qB, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "emissiveTexture" in HH,
            get: HH => HH.emissiveTexture,
            set: (HH, BH) => {
              HH.emissiveTexture = BH
            }
          },
          metadata: BH
        }, uA, QA), (0, bH.g)(HH, null, gB, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "reflectivityTexture" in HH,
            get: HH => HH.reflectivityTexture,
            set: (HH, BH) => {
              HH.reflectivityTexture = BH
            }
          },
          metadata: BH
        }, WA, MA), (0, bH.g)(HH, null, NB, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "metallicTexture" in HH,
            get: HH => HH.metallicTexture,
            set: (HH, BH) => {
              HH.metallicTexture = BH
            }
          },
          metadata: BH
        }, xA, vA), (0, bH.g)(HH, null, RB, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: HH => "metallic" in HH,
            get: HH => HH.metallic,
            set: (HH, BH) => {
              HH.metallic = BH
            }
          },
          metadata: BH
        }, PA, TA), (0, bH.g)(HH, null, jB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "roughness" in HH,
            get: HH => HH.roughness,
            set: (HH, BH) => {
              HH.roughness = BH
            }
          },
          metadata: BH
        }, UA, VA), (0, bH.g)(HH, null, nB, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: HH => "metallicF0Factor" in HH,
            get: HH => HH.metallicF0Factor,
            set: (HH, BH) => {
              HH.metallicF0Factor = BH
            }
          },
          metadata: BH
        }, OA, bA), (0, bH.g)(HH, null, FB, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "metallicReflectanceColor" in HH,
            get: HH => HH.metallicReflectanceColor,
            set: (HH, BH) => {
              HH.metallicReflectanceColor = BH
            }
          },
          metadata: BH
        }, kA, mA), (0, bH.g)(HH, null, DB, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useOnlyMetallicFromMetallicReflectanceTexture" in HH,
            get: HH => HH.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (HH, BH) => {
              HH.useOnlyMetallicFromMetallicReflectanceTexture = BH
            }
          },
          metadata: BH
        }, oA, IA), (0, bH.g)(HH, null, wB, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "metallicReflectanceTexture" in HH,
            get: HH => HH.metallicReflectanceTexture,
            set: (HH, BH) => {
              HH.metallicReflectanceTexture = BH
            }
          },
          metadata: BH
        }, fA, lA), (0, bH.g)(HH, null, ZB, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "reflectanceTexture" in HH,
            get: HH => HH.reflectanceTexture,
            set: (HH, BH) => {
              HH.reflectanceTexture = BH
            }
          },
          metadata: BH
        }, KA, cA), (0, bH.g)(HH, null, dB, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "microSurfaceTexture" in HH,
            get: HH => HH.microSurfaceTexture,
            set: (HH, BH) => {
              HH.microSurfaceTexture = BH
            }
          },
          metadata: BH
        }, eA, qA), (0, bH.g)(HH, null, aB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "bumpTexture" in HH,
            get: HH => HH.bumpTexture,
            set: (HH, BH) => {
              HH.bumpTexture = BH
            }
          },
          metadata: BH
        }, gA, NA), (0, bH.g)(HH, null, sB, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "lightmapTexture" in HH,
            get: HH => HH.lightmapTexture,
            set: (HH, BH) => {
              HH.lightmapTexture = BH
            }
          },
          metadata: BH
        }, RA, jA), (0, bH.g)(HH, null, JB, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "ambientColor" in HH,
            get: HH => HH.ambientColor,
            set: (HH, BH) => {
              HH.ambientColor = BH
            }
          },
          metadata: BH
        }, nA, FA), (0, bH.g)(HH, null, iB, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "albedoColor" in HH,
            get: HH => HH.albedoColor,
            set: (HH, BH) => {
              HH.albedoColor = BH
            }
          },
          metadata: BH
        }, DA, wA), (0, bH.g)(HH, null, pB, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseWeight" in HH,
            get: HH => HH.baseWeight,
            set: (HH, BH) => {
              HH.baseWeight = BH
            }
          },
          metadata: BH
        }, ZA, dA), (0, bH.g)(HH, null, yB, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseDiffuseRoughness" in HH,
            get: HH => HH.baseDiffuseRoughness,
            set: (HH, BH) => {
              HH.baseDiffuseRoughness = BH
            }
          },
          metadata: BH
        }, aA, sA), (0, bH.g)(HH, null, HL, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "reflectivityColor" in HH,
            get: HH => HH.reflectivityColor,
            set: (HH, BH) => {
              HH.reflectivityColor = BH
            }
          },
          metadata: BH
        }, JA, iA), (0, bH.g)(HH, null, BL, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "reflectionColor" in HH,
            get: HH => HH.reflectionColor,
            set: (HH, BH) => {
              HH.reflectionColor = BH
            }
          },
          metadata: BH
        }, pA, yA), (0, bH.g)(HH, null, LL, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "emissiveColor" in HH,
            get: HH => HH.emissiveColor,
            set: (HH, BH) => {
              HH.emissiveColor = BH
            }
          },
          metadata: BH
        }, Hr, Br), (0, bH.g)(HH, null, AL, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: HH => "microSurface" in HH,
            get: HH => HH.microSurface,
            set: (HH, BH) => {
              HH.microSurface = BH
            }
          },
          metadata: BH
        }, Lr, Ar), (0, bH.g)(HH, null, rL, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLightmapAsShadowmap" in HH,
            get: HH => HH.useLightmapAsShadowmap,
            set: (HH, BH) => {
              HH.useLightmapAsShadowmap = BH
            }
          },
          metadata: BH
        }, rr, Sr), (0, bH.g)(HH, null, SL, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlphaFromAlbedoTexture" in HH,
            get: HH => HH.useAlphaFromAlbedoTexture,
            set: (HH, BH) => {
              HH.useAlphaFromAlbedoTexture = BH
            }
          },
          metadata: BH
        }, hr, tr), (0, bH.g)(HH, null, hL, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: HH => "forceAlphaTest" in HH,
            get: HH => HH.forceAlphaTest,
            set: (HH, BH) => {
              HH.forceAlphaTest = BH
            }
          },
          metadata: BH
        }, zr, Cr), (0, bH.g)(HH, null, tL, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: HH => "alphaCutOff" in HH,
            get: HH => HH.alphaCutOff,
            set: (HH, BH) => {
              HH.alphaCutOff = BH
            }
          },
          metadata: BH
        }, Er, Xr), (0, bH.g)(HH, null, zL, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSpecularOverAlpha" in HH,
            get: HH => HH.useSpecularOverAlpha,
            set: (HH, BH) => {
              HH.useSpecularOverAlpha = BH
            }
          },
          metadata: BH
        }, Gr, Yr), (0, bH.g)(HH, null, CL, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "useMicroSurfaceFromReflectivityMapAlpha" in HH,
            get: HH => HH.useMicroSurfaceFromReflectivityMapAlpha,
            set: (HH, BH) => {
              HH.useMicroSurfaceFromReflectivityMapAlpha = BH
            }
          },
          metadata: BH
        }, ur, Qr), (0, bH.g)(HH, null, EL, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMetallicTextureAlpha" in HH,
            get: HH => HH.useRoughnessFromMetallicTextureAlpha,
            set: (HH, BH) => {
              HH.useRoughnessFromMetallicTextureAlpha = BH
            }
          },
          metadata: BH
        }, Wr, Mr), (0, bH.g)(HH, null, XL, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMetallicTextureGreen" in HH,
            get: HH => HH.useRoughnessFromMetallicTextureGreen,
            set: (HH, BH) => {
              HH.useRoughnessFromMetallicTextureGreen = BH
            }
          },
          metadata: BH
        }, xr, vr), (0, bH.g)(HH, null, GL, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: HH => "useMetallnessFromMetallicTextureBlue" in HH,
            get: HH => HH.useMetallnessFromMetallicTextureBlue,
            set: (HH, BH) => {
              HH.useMetallnessFromMetallicTextureBlue = BH
            }
          },
          metadata: BH
        }, Pr, Tr), (0, bH.g)(HH, null, YL, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAmbientOcclusionFromMetallicTextureRed" in HH,
            get: HH => HH.useAmbientOcclusionFromMetallicTextureRed,
            set: (HH, BH) => {
              HH.useAmbientOcclusionFromMetallicTextureRed = BH
            }
          },
          metadata: BH
        }, Ur, Vr), (0, bH.g)(HH, null, uL, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAmbientInGrayScale" in HH,
            get: HH => HH.useAmbientInGrayScale,
            set: (HH, BH) => {
              HH.useAmbientInGrayScale = BH
            }
          },
          metadata: BH
        }, Or, br), (0, bH.g)(HH, null, QL, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAutoMicroSurfaceFromReflectivityMap" in HH,
            get: HH => HH.useAutoMicroSurfaceFromReflectivityMap,
            set: (HH, BH) => {
              HH.useAutoMicroSurfaceFromReflectivityMap = BH
            }
          },
          metadata: BH
        }, kr, mr), (0, bH.g)(HH, null, WL, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: HH => "usePhysicalLightFalloff" in HH,
            get: HH => HH.usePhysicalLightFalloff
          },
          metadata: BH
        }, null, jL), (0, bH.g)(HH, null, ML, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: HH => "useGLTFLightFalloff" in HH,
            get: HH => HH.useGLTFLightFalloff
          },
          metadata: BH
        }, null, jL), (0, bH.g)(HH, null, xL, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRadianceOverAlpha" in HH,
            get: HH => HH.useRadianceOverAlpha,
            set: (HH, BH) => {
              HH.useRadianceOverAlpha = BH
            }
          },
          metadata: BH
        }, or, Ir), (0, bH.g)(HH, null, vL, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: HH => "useObjectSpaceNormalMap" in HH,
            get: HH => HH.useObjectSpaceNormalMap,
            set: (HH, BH) => {
              HH.useObjectSpaceNormalMap = BH
            }
          },
          metadata: BH
        }, fr, lr), (0, bH.g)(HH, null, PL, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: HH => "useParallax" in HH,
            get: HH => HH.useParallax,
            set: (HH, BH) => {
              HH.useParallax = BH
            }
          },
          metadata: BH
        }, Kr, cr), (0, bH.g)(HH, null, TL, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: HH => "useParallaxOcclusion" in HH,
            get: HH => HH.useParallaxOcclusion,
            set: (HH, BH) => {
              HH.useParallaxOcclusion = BH
            }
          },
          metadata: BH
        }, er, qr), (0, bH.g)(HH, null, UL, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: HH => "parallaxScaleBias" in HH,
            get: HH => HH.parallaxScaleBias,
            set: (HH, BH) => {
              HH.parallaxScaleBias = BH
            }
          },
          metadata: BH
        }, gr, Nr), (0, bH.g)(HH, null, VL, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableLighting" in HH,
            get: HH => HH.disableLighting,
            set: (HH, BH) => {
              HH.disableLighting = BH
            }
          },
          metadata: BH
        }, Rr, jr), (0, bH.g)(HH, null, OL, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: HH => "forceIrradianceInFragment" in HH,
            get: HH => HH.forceIrradianceInFragment,
            set: (HH, BH) => {
              HH.forceIrradianceInFragment = BH
            }
          },
          metadata: BH
        }, nr, Fr), (0, bH.g)(HH, null, bL, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: HH => "maxSimultaneousLights" in HH,
            get: HH => HH.maxSimultaneousLights,
            set: (HH, BH) => {
              HH.maxSimultaneousLights = BH
            }
          },
          metadata: BH
        }, Dr, wr), (0, bH.g)(HH, null, kL, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: HH => "invertNormalMapX" in HH,
            get: HH => HH.invertNormalMapX,
            set: (HH, BH) => {
              HH.invertNormalMapX = BH
            }
          },
          metadata: BH
        }, Zr, dr), (0, bH.g)(HH, null, mL, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: HH => "invertNormalMapY" in HH,
            get: HH => HH.invertNormalMapY,
            set: (HH, BH) => {
              HH.invertNormalMapY = BH
            }
          },
          metadata: BH
        }, ar, sr), (0, bH.g)(HH, null, oL, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: HH => "twoSidedLighting" in HH,
            get: HH => HH.twoSidedLighting,
            set: (HH, BH) => {
              HH.twoSidedLighting = BH
            }
          },
          metadata: BH
        }, Jr, ir), (0, bH.g)(HH, null, IL, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlphaFresnel" in HH,
            get: HH => HH.useAlphaFresnel,
            set: (HH, BH) => {
              HH.useAlphaFresnel = BH
            }
          },
          metadata: BH
        }, pr, yr), (0, bH.g)(HH, null, fL, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLinearAlphaFresnel" in HH,
            get: HH => HH.useLinearAlphaFresnel,
            set: (HH, BH) => {
              HH.useLinearAlphaFresnel = BH
            }
          },
          metadata: BH
        }, HS, BS), (0, bH.g)(HH, null, lL, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "environmentBRDFTexture" in HH,
            get: HH => HH.environmentBRDFTexture,
            set: (HH, BH) => {
              HH.environmentBRDFTexture = BH
            }
          },
          metadata: BH
        }, LS, AS), (0, bH.g)(HH, null, KL, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: HH => "forceNormalForward" in HH,
            get: HH => HH.forceNormalForward,
            set: (HH, BH) => {
              HH.forceNormalForward = BH
            }
          },
          metadata: BH
        }, rS, SS), (0, bH.g)(HH, null, cL, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: HH => "enableSpecularAntiAliasing" in HH,
            get: HH => HH.enableSpecularAntiAliasing,
            set: (HH, BH) => {
              HH.enableSpecularAntiAliasing = BH
            }
          },
          metadata: BH
        }, hS, tS), (0, bH.g)(HH, null, eL, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: HH => "useHorizonOcclusion" in HH,
            get: HH => HH.useHorizonOcclusion,
            set: (HH, BH) => {
              HH.useHorizonOcclusion = BH
            }
          },
          metadata: BH
        }, zS, CS), (0, bH.g)(HH, null, qL, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRadianceOcclusion" in HH,
            get: HH => HH.useRadianceOcclusion,
            set: (HH, BH) => {
              HH.useRadianceOcclusion = BH
            }
          },
          metadata: BH
        }, ES, XS), (0, bH.g)(HH, null, gL, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: HH => "unlit" in HH,
            get: HH => HH.unlit,
            set: (HH, BH) => {
              HH.unlit = BH
            }
          },
          metadata: BH
        }, GS, YS), (0, bH.g)(HH, null, NL, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: HH => "applyDecalMapAfterDetailMap" in HH,
            get: HH => HH.applyDecalMapAfterDetailMap,
            set: (HH, BH) => {
              HH.applyDecalMapAfterDetailMap = BH
            }
          },
          metadata: BH
        }, uS, QS), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH.PBRMATERIAL_OPAQUE = UB.PBRMATERIAL_OPAQUE, HH.PBRMATERIAL_ALPHATEST = UB.PBRMATERIAL_ALPHATEST, HH.PBRMATERIAL_ALPHABLEND = UB.PBRMATERIAL_ALPHABLEND, HH.PBRMATERIAL_ALPHATESTANDBLEND = UB.PBRMATERIAL_ALPHATESTANDBLEND, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = UB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, HH
    })();
    const qr = "KHR_materials_diffuse_transmission";

    function gr(HH, BH) {
      const LH = BH.subSurface;
      let AH = null;
      return LH.translucencyIntensityTexture ? AH = LH.translucencyIntensityTexture : LH.thicknessTexture && LH.useMaskFromThicknessTexture && (AH = LH.thicknessTexture), AH && !LH.useGltfStyleTextures ? (mH.e.Warn(`${HH}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${BH.name}`, 1), null) : AH
    }
    class Nr {
      constructor(HH) {
        this.name = qr, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof er && this._isExtensionEnabled(LH)) {
          const BH = gr(HH, LH);
          return BH && AH.push(BH), LH.subSurface.translucencyColorTexture && AH.push(LH.subSurface.translucencyColorTexture), AH
        }
        return AH
      }
      _isExtensionEnabled(HH) {
        if (HH.unlit) return !1;
        const BH = HH.subSurface;
        return !!BH.isTranslucencyEnabled && (!HH.unlit && !BH.useAlbedoToTintTranslucency && BH.useGltfStyleTextures && 1 === BH.volumeIndexOfRefraction && 0 === BH.minimumThickness && 0 === BH.maximumThickness)
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((AH => {
          if (LH instanceof er && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            const AH = LH.subSurface,
              rH = gr(HH, LH),
              SH = 0 == AH.translucencyIntensity ? void 0 : AH.translucencyIntensity,
              hH = this._exporter._materialExporter.getTextureInfo(rH) ?? void 0,
              tH = !AH.translucencyColor || AH.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : AH.translucencyColor.xrH(),
              zH = this._exporter._materialExporter.getTextureInfo(AH.translucencyColorTexture) ?? void 0,
              CH = {
                diffuseTransmissionFactor: SH,
                diffuseTransmissionTexture: hH,
                diffuseTransmissionColorFactor: tH,
                diffuseTransmissionColorTexture: zH
              };
            (hH || zH) && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions = BH.extensions || {}, BH.extensions[qr] = CH
          }
          AH(BH)
        }))
      }
    }
    let Rr = !1;

    function jr() {
      Rr || (Rr = !0, cA.RegisterExtension(qr, (HH => new Nr(HH))))
    }
    jr();
    const nr = "KHR_materials_dispersion";
    class Fr {
      constructor() {
        this.name = nr, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(HH) {
        if (HH.unlit) return !1;
        const BH = HH.subSurface;
        return !(!BH.isRefractionEnabled && !BH.isDispersionEnabled)
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof er && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            const HH = {
              dispersion: LH.subSurface.dispersion
            };
            BH.extensions = BH.extensions || {}, BH.extensions[nr] = HH
          }
          HH(BH)
        }))
      }
    }
    let Dr = !1;

    function wr() {
      Dr || (Dr = !0, cA.RegisterExtension(nr, (() => new Fr)))
    }
    wr();
    const Zr = "KHR_materials_emissive_strength";
    class dr {
      constructor() {
        this.name = Zr, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(HH, BH, LH) {
        return await new Promise((HH => {
          if (!(LH instanceof er)) return HH(BH);
          const AH = LH.emissiveColor.scale(LH.emissiveIntensity),
            rH = Math.max(...AH.xrH());
          if (rH > 1) {
            BH.emissiveFactor = AH.scale(1 / rH).xrH(), this._wasUsed = !0;
            const HH = {
              emissiveStrength: rH
            };
            BH.extensions || (BH.extensions = {}), BH.extensions[Zr] = HH
          } else BH.emissiveFactor = AH.xrH();
          return HH(BH)
        }))
      }
    }
    let ar = !1;

    function sr() {
      ar || (ar = !0, cA.RegisterExtension(Zr, (() => new dr)))
    }
    sr();
    const Jr = "KHR_materials_ior";
    class ir {
      constructor() {
        this.name = Jr, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(HH) {
        return !HH.unlit && (HH instanceof pB ? 1.5 != HH.specularIor : HH instanceof er && (void 0 != HH.indexOfRefraction && 1.5 != HH.indexOfRefraction))
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof er && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            const HH = {
              ior: LH.indexOfRefraction
            };
            BH.extensions = BH.extensions || {}, BH.extensions[Jr] = HH
          } else if (LH instanceof pB && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            const HH = {
              ior: LH.specularIor
            };
            BH.extensions = BH.extensions || {}, BH.extensions[Jr] = HH
          }
          HH(BH)
        }))
      }
    }
    let pr = !1;

    function yr() {
      pr || (pr = !0, cA.RegisterExtension(Jr, (() => new ir)))
    }
    yr();
    const HS = "KHR_materials_iridescence";
    class BS {
      constructor(HH) {
        this.name = HS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof UB) {
          if (LH.iridescence.isEnabled) return LH.iridescence.texture && AH.push(LH.iridescence.texture), LH.iridescence.thicknessTexture && LH.iridescence.thicknessTexture !== LH.iridescence.texture && AH.push(LH.iridescence.thicknessTexture), AH
        } else if (LH instanceof pB && LH.thinFilmWeight > 0) return LH.thinFilmWeightTexture && AH.push(LH.thinFilmWeightTexture), LH.thinFilmThicknessTexture && LH.thinFilmThicknessTexture !== LH.thinFilmWeightTexture && AH.push(LH.thinFilmThicknessTexture), AH;
        return []
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof UB) {
            if (!LH.iridescence.isEnabled) return void HH(BH);
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const AH = this._exporter._materialExporter.getTextureInfo(LH.iridescence.texture),
              rH = this._exporter._materialExporter.getTextureInfo(LH.iridescence.thicknessTexture),
              SH = {
                iridescenceFactor: LH.iridescence.intensity,
                iridescenceIor: LH.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: LH.iridescence.minimumThickness,
                iridescenceThicknessMaximum: LH.iridescence.maximumThickness,
                iridescenceTexture: AH ?? void 0,
                iridescenceThicknessTexture: rH ?? void 0
              };
            null === SH.iridescenceTexture && null === SH.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[HS] = SH
          } else if (LH instanceof pB) {
            if (LH.thinFilmWeight <= 0) return void HH(BH);
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const AH = this._exporter._materialExporter.getTextureInfo(LH.thinFilmWeightTexture),
              rH = this._exporter._materialExporter.getTextureInfo(LH.thinFilmThicknessTexture),
              SH = {
                iridescenceFactor: LH.thinFilmWeight,
                iridescenceIor: LH.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * LH.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * LH.thinFilmThickness,
                iridescenceTexture: AH ?? void 0,
                iridescenceThicknessTexture: rH ?? void 0
              };
            null === SH.iridescenceTexture && null === SH.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[HS] = SH
          }
          HH(BH)
        }))
      }
    }
    let LS = !1;

    function AS() {
      LS || (LS = !0, cA.RegisterExtension(HS, (HH => new BS(HH))))
    }
    AS();
    const rS = "KHR_materials_sheen";
    class SS {
      constructor(HH) {
        this.name = rS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        return LH instanceof er && LH.sheen.isEnabled && LH.sheen.texture ? [LH.sheen.texture] : []
      }
      async postExportMaterialAsync(HH, BH, LH) {
        return await new Promise((HH => {
          if (LH instanceof er) {
            if (!LH.sheen.isEnabled) return void HH(BH);
            this._wasUsed = !0, null == BH.extensions && (BH.extensions = {});
            const AH = {
              sheenColorFactor: LH.sheen.color.xrH(),
              sheenRoughnessFactor: LH.sheen.roughness ?? 0
            };
            null === AH.sheenColorTexture && null === AH.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(LH), LH.sheen.texture && (AH.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(LH.sheen.texture) ?? void 0), LH.sheen.textureRoughness && !LH.sheen.useRoughnessFromMainTexture ? AH.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(LH.sheen.textureRoughness) ?? void 0 : LH.sheen.texture && LH.sheen.useRoughnessFromMainTexture && (AH.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(LH.sheen.texture) ?? void 0), BH.extensions[rS] = AH
          }
          HH(BH)
        }))
      }
    }
    let hS = !1;

    function tS() {
      hS || (hS = !0, cA.RegisterExtension(rS, (HH => new SS(HH))))
    }
    tS();
    const zS = "KHR_materials_fuzz";

    function CS(HH, BH) {
      const LH = new IH.g(BH.name, BH.yN());
      return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
    }
    class ES {
      constructor(HH) {
        this.name = zS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = HH
      }
      dispose() {
        for (const HH of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[HH].dispose()
        }
        this._mergedTexturesMap = {};
        for (const HH of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[HH].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        if (LH instanceof pB) {
          const HH = [];
          if (LH.fuzzWeight > 0) {
            LH.fuzzWeightTexture && HH.push(LH.fuzzWeightTexture);
            let BH = !1;
            if (LH.fuzzRoughnessTexture && (LH._useFuzzRoughnessFromTextureAlpha ? HH.push(LH.fuzzRoughnessTexture) : BH = !0), LH.fuzzColorTexture && !BH && HH.push(LH.fuzzColorTexture), BH) {
              const BH = function(HH) {
                const BH = HH.fuzzColorTexture,
                  LH = BH && BH.getInternalTexture() ? BH.getInternalTexture().uniqueId : "NoFuzzColor",
                  AH = HH.fuzzRoughnessTexture;
                return `FuzzColor_${LH}_FuzzRoughness_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(LH);
              if (!this._cachedInternalTexturesMap[BH]) {
                const HH = await async function(HH) {
                  const BH = HH.yN(),
                    LH = HH.fuzzColorTexture,
                    AH = HH.fuzzRoughnessTexture;
                  return LH || AH ? (await hL("FuzzTexture", CL(LH ? tL(LH, 0) : zL(1), LH ? tL(LH, 1) : zL(1), LH ? tL(LH, 2) : zL(1), AH ? tL(AH, HH._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : zL(1)), BH)).getInternalTexture() : null
                }(LH);
                HH && (this._cachedInternalTexturesMap[BH] = HH)
              }
              this._cachedInternalTexturesMap[BH] && (LH.fuzzColorTexture && (this._mergedTexturesMap[LH.fuzzColorTexture.uniqueId] = CS(this._cachedInternalTexturesMap[BH], LH.fuzzColorTexture), HH.push(this._mergedTexturesMap[LH.fuzzColorTexture.uniqueId])), LH.fuzzRoughnessTexture && (this._mergedTexturesMap[LH.fuzzRoughnessTexture.uniqueId] = CS(this._cachedInternalTexturesMap[BH], LH.fuzzRoughnessTexture), HH.push(this._mergedTexturesMap[LH.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return HH
        }
        return []
      }
      async postExportMaterialAsync(HH, BH, LH) {
        return await new Promise((HH => {
          if (LH instanceof pB) {
            if (0 == LH.fuzzWeight) return void HH(BH);
            this._wasUsed = !0, null == BH.extensions && (BH.extensions = {});
            const AH = {
              fuzzFactor: LH.fuzzWeight,
              fuzzColorFactor: LH.fuzzColor.xrH(),
              fuzzRoughnessFactor: LH.fuzzRoughness
            };
            let rH, SH;
            LH.fuzzWeightTexture && (AH.fuzzTexture = this._exporter._materialExporter.getTextureInfo(LH.fuzzWeightTexture) ?? void 0), LH.fuzzColorTexture && (rH = this._mergedTexturesMap[LH.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[LH.fuzzColorTexture.uniqueId] : LH.fuzzColorTexture, AH.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(rH) ?? void 0), LH.fuzzRoughnessTexture && (SH = this._mergedTexturesMap[LH.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[LH.fuzzRoughnessTexture.uniqueId] : LH.fuzzRoughnessTexture, AH.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(SH) ?? void 0), null === AH.fuzzColorTexture && null === AH.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[zS] = AH
          }
          HH(BH)
        }))
      }
    }
    let XS = !1;

    function GS() {
      XS || (XS = !0, cA.RegisterExtension(zS, (HH => new ES(HH))))
    }
    GS();
    const YS = "KHR_materials_specular";
    class uS {
      constructor(HH) {
        this.name = YS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        return LH instanceof er && this._isExtensionEnabled(LH) ? (LH.metallicReflectanceTexture && AH.push(LH.metallicReflectanceTexture), LH.reflectanceTexture && AH.push(LH.reflectanceTexture), AH) : AH
      }
      _isExtensionEnabled(HH) {
        return !HH.unlit && (void 0 != HH.metallicF0Factor && 1 != HH.metallicF0Factor || void 0 != HH.metallicReflectanceColor && !HH.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(HH))
      }
      _hasTexturesExtension(HH) {
        return null != HH.metallicReflectanceTexture || null != HH.reflectanceTexture
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          var AH;
          if (LH instanceof er && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0, BH.extensions = BH.extensions || {};
            const HH = this._exporter._materialExporter.getTextureInfo(LH.metallicReflectanceTexture) ?? void 0,
              AH = this._exporter._materialExporter.getTextureInfo(LH.reflectanceTexture) ?? void 0,
              rH = {
                specularFactor: 1 == LH.metallicF0Factor ? void 0 : LH.metallicF0Factor,
                specularTexture: HH,
                specularColorFactor: LH.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : LH.metallicReflectanceColor.xrH(),
                specularColorTexture: AH
              };
            this._hasTexturesExtension(LH) && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[YS] = rH
          } else if (LH instanceof pB) {
            BH.extensions = BH.extensions || {};
            const rH = this._exporter._materialExporter.getTextureInfo(LH.specularWeightTexture) ?? void 0,
              SH = this._exporter._materialExporter.getTextureInfo(LH.specularColorTexture) ?? void 0,
              hH = 1 == LH.specularWeight ? void 0 : LH.specularWeight,
              tH = LH.specularColor.equalsFloats(1, 1, 1) ? void 0 : LH.specularColor.xrH();
            if (!SH && !rH && void 0 === hH && void 0 === tH) return HH(BH);
            this._wasUsed = !0;
            const zH = {
                specularEdgeColorEnabled: !0
              },
              CH = {
                specularFactor: hH,
                specularTexture: rH,
                specularColorFactor: tH,
                specularColorTexture: SH,
                extensions: {}
              };
            CH.extensions.EXT_materials_specular_edge_color = zH, (AH = this._exporter._glTF).extensionsUsed || (AH.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (rH || SH) && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[YS] = CH
          }
          HH(BH)
        }))
      }
    }
    let QS = !1;

    function WS() {
      QS || (QS = !0, cA.RegisterExtension(YS, (HH => new uS(HH))))
    }
    WS();
    const MS = "KHR_materials_transmission";
    class xS {
      constructor(HH) {
        this.name = MS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof er) {
          if (this._isExtensionEnabled(LH)) return LH.subSurface.refractionIntensityTexture && LH.subSurface.useGltfStyleTextures && AH.push(LH.subSurface.refractionIntensityTexture), AH
        } else LH instanceof pB && (LH.transmissionWeight > 0 && LH.transmissionWeightTexture && (AH.push(LH.transmissionWeightTexture), LH.transmissionColorTexture && AH.push(LH.transmissionColorTexture)), LH.subsurfaceWeight > 0 && LH.subsurfaceWeightTexture && AH.push(LH.subsurfaceWeightTexture));
        return AH
      }
      _isExtensionEnabled(HH) {
        if (HH instanceof pB && !HH.unlit) return HH.transmissionWeight > 0 || HH.subsurfaceWeight > 0;
        if (HH instanceof er && !HH.unlit) {
          const BH = HH.subSurface;
          return BH.isRefractionEnabled && void 0 != BH.refractionIntensity && 0 != BH.refractionIntensity || null != BH.refractionIntensityTexture && BH.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(HH, BH, LH) {
        if (!this._isExtensionEnabled(LH)) return BH;
        if (LH instanceof er) {
          this._wasUsed = !0;
          const AH = LH.subSurface,
            rH = {
              transmissionFactor: 0 === AH.refractionIntensity ? void 0 : AH.refractionIntensity
            };
          if (AH.refractionIntensityTexture)
            if (AH.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(LH);
              const HH = this._exporter._materialExporter.getTextureInfo(AH.refractionIntensityTexture);
              HH && (rH.transmissionTexture = HH)
            } else mH.e.Warn(`${HH}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          BH.extensions || (BH.extensions = {}), BH.extensions[MS] = rH
        } else if (LH instanceof pB) {
          this._wasUsed = !0;
          const HH = {
            transmissionFactor: (1 - LH.transmissionWeight) * LH.subsurfaceWeight + LH.transmissionWeight
          };
          if (LH.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(LH);
            const BH = this._exporter._materialExporter.getTextureInfo(LH.transmissionWeightTexture);
            BH && (HH.transmissionTexture = BH)
          } else if (LH.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(LH);
            const BH = this._exporter._materialExporter.getTextureInfo(LH.subsurfaceWeightTexture);
            BH && (HH.transmissionTexture = BH)
          }
          if (0 == LH.transmissionDepth && (!LH.transmissionColor.equals(ZH.c.White()) || LH.transmissionColorTexture) && BH.pbrMetallicRoughness && (BH.pbrMetallicRoughness.baseColorFactor || (BH.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), BH.pbrMetallicRoughness.baseColorFactor[0] *= LH.transmissionColor.r, BH.pbrMetallicRoughness.baseColorFactor[1] *= LH.transmissionColor.g, BH.pbrMetallicRoughness.baseColorFactor[2] *= LH.transmissionColor.b, LH.transmissionColorTexture && !BH.pbrMetallicRoughness.baseColorTexture)) {
            const HH = this._exporter._materialExporter.getTextureInfo(LH.transmissionColorTexture);
            HH && (BH.pbrMetallicRoughness.baseColorTexture = HH, this._exporter._materialNeedsUVsSet.add(LH))
          }
          BH.extensions || (BH.extensions = {}), BH.extensions[MS] = HH
        }
        return BH
      }
    }
    let vS = !1;

    function PS() {
      vS || (vS = !0, cA.RegisterExtension(MS, (HH => new xS(HH))))
    }
    PS();
    var TS = LH(41545);
    const US = "KHR_materials_unlit";
    class VS {
      constructor() {
        this.name = US, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          let AH = !1;
          LH instanceof er ? AH = LH.unlit : LH instanceof TS.e && (AH = LH.disableLighting), AH && (this._wasUsed = !0, null == BH.extensions && (BH.extensions = {}), BH.extensions[US] = {}), HH(BH)
        }))
      }
    }
    let OS = !1;

    function bS() {
      OS || (OS = !0, cA.RegisterExtension(US, (() => new VS)))
    }
    bS();
    const kS = "KHR_materials_volume";
    class mS {
      constructor(HH) {
        this.name = kS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof er) {
          if (this._isExtensionEnabled(LH)) return LH.subSurface.thicknessTexture && AH.push(LH.subSurface.thicknessTexture), AH
        } else LH instanceof pB && (LH.transmissionWeight > 0 || LH.subsurfaceWeight > 0) && LH.geometryThicknessTexture && AH.push(LH.geometryThicknessTexture);
        return AH
      }
      _isExtensionEnabled(HH) {
        if (HH.unlit) return !1;
        const BH = HH.subSurface;
        return !(!BH.isRefractionEnabled && !BH.isTranslucencyEnabled) && (void 0 != BH.maximumThickness && 0 != BH.maximumThickness || void 0 != BH.tintColorAtDistance && BH.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != BH.tintColor && BH.tintColor != ZH.c.White() || this._hasTexturesExtension(HH))
      }
      _hasTexturesExtension(HH) {
        return null != HH.subSurface.thicknessTexture
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof er && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            const HH = LH.subSurface,
              AH = {
                thicknessFactor: 0 == HH.maximumThickness ? void 0 : HH.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(HH.thicknessTexture) ?? void 0,
                attenuationDistance: HH.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : HH.tintColorAtDistance,
                attenuationColor: HH.tintColor.equalsFloats(1, 1, 1) ? void 0 : HH.tintColor.xrH()
              };
            this._hasTexturesExtension(LH) && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions = BH.extensions || {}, BH.extensions[kS] = AH
          } else if (LH instanceof pB) {
            const HH = LH.transmissionWeight > 0 && !LH.geometryThinWalled,
              AH = LH.subsurfaceWeight > 0 && !LH.geometryThinWalled;
            if (HH || AH) {
              this._wasUsed = !0;
              const rH = LH.geometryThickness,
                SH = this._exporter._materialExporter.getTextureInfo(LH.geometryThicknessTexture) ?? void 0;
              let hH;
              SH && this._exporter._materialNeedsUVsSet.add(LH);
              const tH = ZH.c.White().xrH();
              if (HH && LH.transmissionDepth > 0) {
                const HH = 1 / LH.transmissionDepth;
                let BH = new NH.o(-Math.log(LH.transmissionColor.r) * HH, -Math.log(LH.transmissionColor.g) * HH, -Math.log(LH.transmissionColor.b) * HH);
                const AH = new NH.o(LH.transmissionScatter.r * HH, LH.transmissionScatter.g * HH, LH.transmissionScatter.b * HH),
                  rH = BH.subtract(AH),
                  SH = Math.min(rH.x, rH.y, rH.z);
                SH < 0 && (rH.x = rH.x - SH, rH.y = rH.y - SH, rH.z = rH.z - SH), BH = rH.add(AH);
                hH = 1 / Math.max(BH.x, BH.y, BH.z), tH[0] = Math.exp(-BH.x * hH), tH[1] = Math.exp(-BH.y * hH), tH[2] = Math.exp(-BH.z * hH)
              } else hH = Number.MAX_VALUE, tH[0] = 1, tH[1] = 1, tH[2] = 1;
              let zH = 1;
              const CH = ZH.c.White().xrH();
              if (AH) {
                const HH = LH.subsurfaceRadius,
                  BH = LH.subsurfaceRadiusScale,
                  AH = new NH.o(BH.r, BH.g, BH.b).multiplyByFloats(HH, HH, HH),
                  rH = new NH.o(1 / Math.max(AH.x, 1e-6), 1 / Math.max(AH.y, 1e-6), 1 / Math.max(AH.z, 1e-6));
                zH = 1 / Math.max(rH.x, rH.y, rH.z), CH[0] = Math.exp(-rH.x * zH), CH[1] = Math.exp(-rH.y * zH), CH[2] = Math.exp(-rH.z * zH)
              }
              const EH = (1 - LH.transmissionWeight) * LH.subsurfaceWeight,
                XH = EH + LH.transmissionWeight,
                GH = 1 / Math.max(XH, 1e-6),
                YH = LH.transmissionWeight * GH,
                uH = EH * GH,
                QH = tH.map(((HH, BH) => HH * YH + CH[BH] * uH)),
                WH = {
                  thicknessFactor: rH,
                  thicknessTexture: SH,
                  attenuationDistance: hH * YH + zH * uH,
                  attenuationColor: QH
                };
              BH.extensions = BH.extensions || {}, BH.extensions[kS] = WH
            }
          }
          HH(BH)
        }))
      }
    }
    let oS = !1;

    function IS() {
      oS || (oS = !0, cA.RegisterExtension(kS, (HH => new mS(HH))))
    }
    IS();
    const fS = "KHR_materials_volume_scatter";
    class lS {
      constructor(HH) {
        this.name = fS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        return LH instanceof pB && (LH.transmissionWeight > 0 && LH.transmissionScatterTexture && AH.push(LH.transmissionScatterTexture), LH.subsurfaceWeight > 0 && LH.subsurfaceColorTexture && AH.push(LH.subsurfaceColorTexture)), AH
      }
      _isExtensionEnabled(HH) {
        if (HH.unlit) return !1;
        const BH = HH.transmissionWeight > 0 && !HH.geometryThinWalled && HH.transmissionDepth > 0 && !HH.transmissionScatter.equals(ZH.c.Black()),
          LH = HH.subsurfaceWeight > 0 && !HH.geometryThinWalled;
        return !(!BH && !LH)
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          if (LH instanceof pB && this._isExtensionEnabled(LH)) {
            this._wasUsed = !0;
            let HH = NH.o.Zero(),
              AH = 0;
            if (LH.transmissionWeight > 0) {
              HH = function(HH) {
                const BH = new NH.o(Math.sqrt(1 - HH.x), Math.sqrt(1 - HH.y), Math.sqrt(1 - HH.z)),
                  LH = new NH.o(1, 1, 1),
                  AH = LH.subtract(BH),
                  rH = LH.subtract(new NH.o(.139, .139, .139).multiplyInPlace(BH)),
                  SH = LH.add(new NH.o(1.17, 1.17, 1.17).multiplyInPlace(BH));
                return AH.multiplyInPlace(rH).divideInPlace(SH)
              }(new NH.o(LH.transmissionScatter.r, LH.transmissionScatter.g, LH.transmissionScatter.b)), AH = LH.transmissionScatterAnisotropy
            }
            const rH = NH.o.Zero();
            let SH = 0;
            LH.subsurfaceWeight > 0 && (rH.set(LH.subsurfaceColor.r, LH.subsurfaceColor.g, LH.subsurfaceColor.b), SH = LH.subsurfaceScatterAnisotropy);
            const hH = (1 - LH.transmissionWeight) * LH.subsurfaceWeight,
              tH = hH + LH.transmissionWeight,
              zH = 1 / Math.max(tH, 1e-6),
              CH = LH.transmissionWeight * zH,
              EH = hH * zH,
              XH = {
                multiscatterColorFactor: HH.multiplyByFloats(CH, CH, CH).addInPlace(rH.multiplyByFloats(EH, EH, EH)).xrH(),
                scatterAnisotropy: AH * CH + SH * EH
              };
            if (LH.subsurfaceWeight > 0 && LH.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(LH);
              const HH = this._exporter._materialExporter.getTextureInfo(LH.subsurfaceColorTexture);
              HH && (XH.multiscatterColorTexture = HH)
            } else if (LH.transmissionWeight > 0 && LH.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(LH);
              const HH = this._exporter._materialExporter.getTextureInfo(LH.transmissionScatterTexture);
              HH && (XH.multiscatterColorTexture = HH)
            }
            BH.extensions = BH.extensions || {}, BH.extensions[fS] = XH
          }
          HH(BH)
        }))
      }
    }
    let KS = !1;

    function cS() {
      KS || (KS = !0, cA.RegisterExtension(fS, (HH => new lS(HH)), 101))
    }
    cS();
    const eS = "KHR_materials_diffuse_roughness";
    class qS {
      constructor(HH) {
        this.name = eS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(HH, BH, LH) {
        const AH = [];
        if (LH instanceof UB) {
          if (LH._baseDiffuseRoughness) return LH._baseDiffuseRoughnessTexture && AH.push(LH._baseDiffuseRoughnessTexture), AH
        } else if (LH instanceof pB && LH.baseDiffuseRoughness) return LH.baseDiffuseRoughnessTexture && AH.push(LH.baseDiffuseRoughnessTexture), AH;
        return []
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          let AH = null,
            rH = null;
          if (LH instanceof UB ? (AH = LH._baseDiffuseRoughness, rH = LH._baseDiffuseRoughnessTexture) : LH instanceof pB && (AH = LH.baseDiffuseRoughness, rH = LH.baseDiffuseRoughnessTexture), !AH) return void HH(BH);
          this._wasUsed = !0, BH.extensions = BH.extensions || {};
          const SH = {
            diffuseRoughnessFactor: AH,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(rH) ?? void 0
          };
          null !== SH.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(LH), BH.extensions[eS] = SH, HH(BH)
        }))
      }
    }
    let gS = !1;

    function NS() {
      gS || (gS = !0, cA.RegisterExtension(eS, (HH => new qS(HH))))
    }
    NS();
    const RS = "KHR_materials_openpbr";
    class jS {
      constructor() {
        this.name = RS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(HH, BH, LH) {
        return new Promise((HH => {
          LH instanceof pB && (this._wasUsed = !0, BH.extensions = BH.extensions || {}, BH.extensions[RS] = {}), HH(BH)
        }))
      }
    }
    let nS = !1;

    function FS() {
      nS || (nS = !0, cA.RegisterExtension(RS, (() => new jS)))
    }
    FS();
    const DS = "KHR_texture_transform";
    class wS {
      constructor() {
        this.name = DS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(HH, BH, LH) {
        if (LH.yN() || OB.i.Warn(`${HH}: "scene" is not defined for Babylon texture ${LH.name}!`), (0 !== LH.uAng || 0 !== LH.vAng) && (OB.i.Warn(`${HH}: Texture ${LH.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== LH.uRotationCenter || 0 !== LH.vRotationCenter)) return;
        const AH = {};
        let rH = !1;
        if (0 === LH.uOffset && 0 === LH.vOffset || (AH.offset = [LH.uOffset, LH.vOffset], rH = !0), 1 === LH.uScale && 1 === LH.vScale || (AH.scale = [LH.uScale, LH.vScale], rH = !0), 0 !== LH.wAng) {
          if (0 !== LH.uRotationCenter || 0 !== LH.vRotationCenter) {
            if (LH.homogeneousRotationInUVTransform && LH.uScale !== LH.vScale) return void OB.i.Warn(`${HH}: Texture ${LH.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${DS}.`);
            OB.i.Warn(`${HH}: Texture ${LH.name} with non-origin rotation center will be exported using an adjusted offset with ${DS}.`), AH.offset = function(HH) {
              const {
                uOffset: BH,
                vOffset: LH,
                uRotationCenter: AH,
                vRotationCenter: rH,
                uScale: SH,
                vScale: hH,
                wAng: tH
              } = HH, zH = Math.cos(tH), CH = Math.sin(tH), EH = AH * SH, XH = rH * hH;
              return [BH + (EH * (1 - zH) + XH * CH), LH + (XH * (1 - zH) - EH * CH)]
            }(LH)
          }
          AH.rotation = -LH.wAng, rH = !0
        }
        0 !== LH.coordinatesIndex && (AH.texCoord = LH.coordinatesIndex, rH = !0), rH && (this._wasUsed = !0, BH.extensions || (BH.extensions = {}), BH.extensions[DS] = AH)
      }
    }
    let ZS = !1;

    function dS() {
      ZS || (ZS = !0, cA.RegisterExtension(DS, (() => new wS)))
    }
    dS();
    var aS = LH(41336);
    const sS = "KHR_texture_basisu";
    class JS {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(HH) {
        this.name = sS, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      postExportTexture(HH, BH) {
        const LH = this._exporter._textures[BH.index],
          AH = LH.source;
        if (void 0 === AH) return;
        const rH = this._exporter._images[AH];
        "image/ktx2" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[sS] = {
          source: AH
        }, this._wasUsed = !0)
      }
    }
    let iS = !1;

    function pS() {
      iS || (iS = !0, cA.RegisterExtension(sS, (HH => new JS(HH))))
    }
    pS();
    const yS = "EXT_texture_webp";
    class Hh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(HH) {
        this.name = yS, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      postExportTexture(HH, BH) {
        const LH = this._exporter._textures[BH.index],
          AH = LH.source;
        if (void 0 === AH) return;
        const rH = this._exporter._images[AH];
        "image/webp" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[yS] = {
          source: AH
        }, this._wasUsed = !0)
      }
    }
    let Bh = !1;

    function Lh() {
      Bh || (Bh = !0, cA.RegisterExtension(yS, (HH => new Hh(HH))))
    }
    Lh();
    const Ah = "EXT_texture_avif";
    class rh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(HH) {
        this.name = Ah, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = HH
      }
      dispose() {}
      postExportTexture(HH, BH) {
        const LH = this._exporter._textures[BH.index],
          AH = LH.source;
        if (void 0 === AH) return;
        const rH = this._exporter._images[AH];
        "image/avif" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[Ah] = {
          source: AH
        }, this._wasUsed = !0)
      }
    }
    let Sh = !1;

    function hh() {
      Sh || (Sh = !0, cA.RegisterExtension(Ah, (HH => new rh(HH))))
    }
    hh();
    class th {
      static CreateSTL(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const CH = function(HH, BH, LH) {
            const rH = [3 * HH[LH], 3 * HH[LH + 1], 3 * HH[LH + 2]],
              SH = [new AH.lu(BH[rH[0]], BH[rH[0] + 2], BH[rH[0] + 1]), new AH.lu(BH[rH[1]], BH[rH[1] + 2], BH[rH[1] + 1]), new AH.lu(BH[rH[2]], BH[rH[2] + 2], BH[rH[2] + 1])],
              hH = SH[0].subtract(SH[1]),
              tH = SH[2].subtract(SH[1]);
            return {
              v: SH,
              n: AH.lu.Cross(tH, hH).normalize()
            }
          },
          XH = function(HH, BH, LH, AH) {
            return BH = GH(HH, BH, LH.x, AH), BH = GH(HH, BH, LH.y, AH), GH(HH, BH, LH.z, AH)
          },
          GH = function(HH, BH, LH, AH) {
            return HH.setFloat32(BH, LH, AH), BH + 4
          },
          uH = function(HH) {
            if (tH) {
              let BH = HH;
              HH instanceof YH.b && (BH = HH.XSH);
              const LH = BH.getVerticesData(EH.e.PositionKind, !0, !0);
              if (!LH) return [];
              const rH = AH.lu.Zero();
              let SH;
              for (SH = 0; SH < LH.length; SH += 3) AH.lu.TransformCoordinatesFromFloatsToRef(LH[SH], LH[SH + 1], LH[SH + 2], HH.computeWorldMatrix(!0), rH).toArray(LH, SH);
              return LH
            }
            return HH.getVerticesData(EH.e.PositionKind) || []
          };
        tH && (hH = !0);
        let QH = "",
          WH = 0,
          MH = 0;
        if (rH) {
          for (let LH = 0; LH < HH.length; LH++) {
            const BH = HH[LH].vrH();
            WH += BH ? BH.length / 3 : 0
          }
          const BH = new ArrayBuffer(84 + 50 * WH);
          QH = new DataView(BH), MH += 80, QH.setUint32(MH, WH, SH), MH += 4
        } else zH || (QH = "solid stlmesh\r\n");
        for (let AH = 0; AH < HH.length; AH++) {
          const BH = HH[AH];
          !rH && zH && (QH += "solid " + BH.name + "\r\n"), !hH && BH instanceof CA.c && BH.bakeCurrentTransformIntoVertices();
          const LH = uH(BH),
            tH = BH.vrH() || [];
          for (let HH = 0; HH < tH.length; HH += 3) {
            const BH = CH(tH, LH, HH);
            rH ? (MH = XH(QH, MH, BH.n, SH), MH = XH(QH, MH, BH.v[0], SH), MH = XH(QH, MH, BH.v[1], SH), MH = XH(QH, MH, BH.v[2], SH), MH += 2) : (QH += "\tfacet normal " + BH.n.x + " " + BH.n.y + " " + BH.n.z + "\r\n", QH += "\t\touter loop\r\n", QH += "\t\t\tvertex " + BH.v[0].x + " " + BH.v[0].y + " " + BH.v[0].z + "\r\n", QH += "\t\t\tvertex " + BH.v[1].x + " " + BH.v[1].y + " " + BH.v[1].z + "\r\n", QH += "\t\t\tvertex " + BH.v[2].x + " " + BH.v[2].y + " " + BH.v[2].z + "\r\n", QH += "\t\tendloop\r\n", QH += "\tendfacet\r\n")
          }!rH && zH && (QH += "endsolid " + name + "\r\n")
        }
        if (rH || zH || (QH += "endsolid stlmesh"), BH) {
          const HH = document.createElement("a"),
            BH = new Blob([QH], {
              type: "application/octet-stream"
            });
          HH.href = window.URL.createObjectURL(BH), HH.download = LH + ".stl", HH.click()
        }
        return QH
      }
    }

    function zh(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const rH = [];
      for (let SH = 0; SH < HH.length / LH; SH++) {
        const hH = HH[SH * LH] * (AH ? -1 : 1),
          tH = HH[SH * LH + 1],
          zH = HH[SH * LH + 2];
        rH.push(`(${hH.toPrecision(BH.precision)}, ${tH.toPrecision(BH.precision)}, ${zH.toPrecision(BH.precision)})`)
      }
      return rH.join(", ")
    }

    function Ch(HH, BH) {
      const LH = [];
      for (let AH = 0; AH < HH.length / 2; AH++) {
        const rH = HH[2 * AH],
          SH = HH[2 * AH + 1];
        LH.push(`(${rH.toPrecision(BH.precision)}, ${(1-SH).toPrecision(BH.precision)})`)
      }
      return LH.join(", ")
    }

    function Eh(HH, BH, LH, AH) {
      const rH = HH.getVerticesData(EH.e.PositionKind),
        SH = HH.getVerticesData(EH.e.NormalKind);
      if (rH && SH) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${LH}"\n\t\tint[] faceVertexCounts = [${function(HH){const BH=HH.vrH()?.length?HH.getTotalIndices():HH.getTotalVertices();return Array(BH/3).fill(3).join(", ")}(HH)}]\n\t\tint[] faceVertexIndices = [${function(HH){const BH=HH.vrH(),LH=BH?.length??HH.getTotalVertices(),AH=[];if(null!==BH)for(let rH=0;rH<LH;rH++)AH.push(BH[rH]);else for(let rH=0;rH<LH;rH++)AH.push(rH);return AH.join(", ")}(HH)}]\n\t\tnormal3f[] normals = [${zh(SH,BH,void 0,AH)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${zh(rH,BH,void 0,AH)}]\n        ${function(HH,BH){let LH="";for(let rH=0;rH<4;rH++){const AH=rH>0?rH:"",SH=HH.getVerticesData(EH.e.UVKind+(AH?AH+1:""));SH&&(LH+=`\n\t\ttexCoord2f[] primvars:st${AH} = [${Ch(SH,BH)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const AH=HH.getVerticesData(EH.e.ColorKind);return AH&&(LH+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        zh(AH, BH, AH.length / HH.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),LH}(HH,BH)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Xh(HH, BH, LH, AH) {
      return `\n        def "Geometry"\n        {\n        ${Eh(HH,BH,LH,AH)}\n        }\n        `
    }

    function Gh(HH) {
      let BH = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return BH += HH, fflate.strToU8(BH)
    }

    function Yh(HH) {
      const BH = HH.m;
      return `( ${uh(BH,0)}, ${uh(BH,4)}, ${uh(BH,8)}, ${uh(BH,12)} )`
    }

    function uh(HH, BH) {
      return `(${HH[BH+0]}, ${HH[BH+1]}, ${HH[BH+2]}, ${HH[BH+3]})`
    }

    function Qh(HH, BH) {
      const LH = "Object_" + HH.uniqueId,
        AH = Yh(BH);
      return `def Xform "${LH}" (\n\tprepend references = @./geometries/Geometry_${HH.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${AH}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${HH.material.uniqueId}>\n}\n\n`
    }

    function Wh(HH) {
      switch (HH) {
        case VH.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case VH.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case VH.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Mh(HH) {
      return `(${HH.x}, ${HH.y})`
    }

    function xh(HH) {
      return `(${HH.r}, ${HH.g}, ${HH.b})`
    }

    function vh(HH) {
      return "image/jpeg" === HH || "image/png" === HH
    }

    function Ph(HH, BH, LH, rH, SH, hH) {
      const tH = HH.getInternalTexture().uniqueId + "_" + HH.invertY,
        CH = HH.mimeType || (0, zH.d)(HH.getInternalTexture()?.url ?? ""),
        EH = vh(CH) ? CH : "image/png",
        XH = "image/jpeg" === EH ? "jpg" : "png";
      SH[tH] = {
        texture: HH,
        mimeType: EH,
        ext: XH
      };
      const GH = HH.coordinatesIndex > 0 ? "st" + HH.coordinatesIndex : "st",
        YH = new AH.Vector2(HH.uScale, HH.vScale),
        uH = new AH.Vector2(HH.uOffset, HH.vOffset),
        QH = HH.wAng,
        WH = Math.sin(QH),
        MH = Math.cos(QH);
      return uH.y = 1 - uH.y - YH.y, uH.x += WH * YH.x, uH.y += (1 - MH) * YH.y, `\n    def Shader "PrimvarReader_${LH}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${GH}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${LH}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${BH.uniqueId}/PrimvarReader_${LH}.outputs:result>\n        float inputs:rotation = ${(QH*(180/Math.PI)).toFixed(hH.precision)}\n        float2 inputs:scale = ${Mh(YH)}\n        float2 inputs:translation = ${Mh(uH)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${HH.uniqueId}_${LH}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${tH}.${XH}@\n        float2 inputs:st.connect = </Root/Materials/Material_${BH.uniqueId}/Transform2d_${LH}.outputs:result>\n        ${rH?"float4 inputs:scale = "+function(HH){return`(${HH.r}, ${HH.g}, ${HH.b}, 1.0)`}(rH):""}\n        token inputs:sourceColorSpace = "${HH.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Wh(HH.wrapU)}"\n        token inputs:wrapT = "${Wh(HH.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${BH.needAlphaBlending()||BH.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Th(HH, BH, LH) {
      const AH = "\t\t\t",
        rH = [],
        SH = [],
        {
          diffuseMap: hH,
          diffuse: tH,
          alphaCutOff: zH,
          emissiveMap: CH,
          emissive: EH,
          normalMap: XH,
          roughnessMap: GH,
          roughnessChannel: YH,
          roughness: uH,
          metalnessMap: QH,
          metalnessChannel: MH,
          metalness: xH,
          aoMap: vH,
          aoMapChannel: PH,
          aoMapIntensity: TH,
          alphaMap: UH,
          ior: VH,
          clearCoatEnabled: OH,
          clearCoat: bH,
          clearCoatMap: kH,
          clearCoatRoughness: mH,
          clearCoatRoughnessMap: oH
        } = function(HH) {
          const BH = {
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
          return HH instanceof SA.StandardMaterial ? {
            ...BH,
            diffuseMap: HH.diffuseTexture,
            diffuse: HH.diffuseColor,
            alphaCutOff: HH.alphaCutOff,
            emissiveMap: HH.emissiveTexture,
            emissive: HH.emissiveColor,
            roughness: 1,
            alphaMap: HH.opacityTexture
          } : HH instanceof UB ? {
            ...BH,
            diffuseMap: HH._albedoTexture,
            diffuse: HH._albedoColor,
            alphaCutOff: HH._alphaCutOff,
            emissiveMap: HH._emissiveTexture,
            emissive: HH._emissiveColor,
            normalMap: HH._bumpTexture,
            roughnessMap: HH._metallicTexture,
            roughnessChannel: HH._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: HH._roughness ?? 1,
            metalnessMap: HH._metallicTexture,
            metalnessChannel: HH._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: HH._metallic ?? 0,
            aoMap: HH._ambientTexture,
            aoMapChannel: HH._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: HH._ambientTextureStrength,
            alphaMap: HH._opacityTexture,
            ior: HH.subSurface.indexOfRefraction,
            clearCoatEnabled: HH.clearCoat.isEnabled,
            clearCoat: HH.clearCoat.intensity,
            clearCoatMap: HH.clearCoat.texture,
            clearCoatRoughness: HH.clearCoat.roughness,
            clearCoatRoughnessMap: HH.clearCoat.useRoughnessFromMainTexture ? HH.clearCoat.texture : HH.clearCoat.textureRoughness
          } : BH
        }(HH);
      return null !== hH ? (rH.push(`${AH}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${hH.uniqueId}_diffuse.outputs:rgb>`), HH.needAlphaBlending() ? rH.push(`${AH}float inputs:opacity.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${hH.uniqueId}_diffuse.outputs:a>`) : HH.needAlphaTesting() && (rH.push(`${AH}float inputs:opacity.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${hH.uniqueId}_diffuse.outputs:a>`), rH.push(`${AH}float inputs:opacityThreshold = ${zH}`)), SH.push(Ph(hH, HH, "diffuse", tH, BH, LH))) : rH.push(`${AH}color3f inputs:diffuseColor = ${xh(tH||WH.Color3.White())}`), null !== CH ? (rH.push(`${AH}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${CH.uniqueId}_emissive.outputs:rgb>`), SH.push(Ph(CH, HH, "emissive", EH, BH, LH))) : EH && EH.toLuminance() > 0 && rH.push(`${AH}color3f inputs:emissiveColor = ${xh(EH)}`), null !== XH && (rH.push(`${AH}normal3f inputs:normal.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${XH.uniqueId}_normal.outputs:rgb>`), SH.push(Ph(XH, HH, "normal", null, BH, LH))), null !== vH && (rH.push(`${AH}float inputs:occlusion.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${vH.uniqueId}_occlusion.outputs:${PH}>`), SH.push(Ph(vH, HH, "occlusion", new WH.Color3(TH, TH, TH), BH, LH))), null !== GH ? (rH.push(`${AH}float inputs:roughness.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${GH.uniqueId}_roughness.outputs:${YH}>`), SH.push(Ph(GH, HH, "roughness", new WH.Color3(uH, uH, uH), BH, LH))) : rH.push(`${AH}float inputs:roughness = ${uH}`), null !== QH ? (rH.push(`${AH}float inputs:metallic.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${QH.uniqueId}_metallic.outputs:${MH}>`), SH.push(Ph(QH, HH, "metallic", new WH.Color3(xH, xH, xH), BH, LH))) : rH.push(`${AH}float inputs:metallic = ${xH}`), null !== UH ? (rH.push(`${AH}float inputs:opacity.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${UH.uniqueId}_opacity.outputs:r>`), rH.push(`${AH}float inputs:opacityThreshold = 0.0001`), SH.push(Ph(UH, HH, "opacity", null, BH, LH))) : rH.push(`${AH}float inputs:opacity = ${HH.alpha}`), OH && (null !== kH ? (rH.push(`${AH}float inputs:clearcoat.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${kH.uniqueId}_clearcoat.outputs:r>`), SH.push(Ph(kH, HH, "clearcoat", new WH.Color3(bH, bH, bH), BH, LH))) : rH.push(`${AH}float inputs:clearcoat = ${bH}`), null !== oH ? (rH.push(`${AH}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${HH.uniqueId}/Texture_${oH.uniqueId}_clearcoatRoughness.outputs:g>`), SH.push(Ph(oH, HH, "clearcoatRoughness", new WH.Color3(mH, mH, mH), BH, LH))) : rH.push(`${AH}float inputs:clearcoatRoughness = ${mH}`)), rH.push(`${AH}float inputs:ior = ${VH}`), `\n\tdef Material "Material_${HH.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${rH.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${HH.uniqueId}/PreviewSurface.outputs:surface>\n\n${SH.join("\n")}\n\n\t}\n`
    }

    function Uh(HH) {
      HH.computeWorldMatrix(!0);
      const BH = HH.getWorldMatrix().clone(),
        LH = HH.yN().useRightHandedSystem;
      let AH = HH.material?._getEffectiveOrientation(HH) ?? HH.sideOrientation,
        hH = !LH,
        tH = HH.parent;
      for (; tH;) {
        if (eL(tH, LH) && null === tH.parent) {
          LH || (BH.multiplyToRef(tH.getWorldMatrix().invert(), BH), AH = AH === SH.c.ClockWiseSideOrientation ? SH.c.CounterClockWiseSideOrientation : SH.c.ClockWiseSideOrientation), hH = !1;
          break
        }
        tH = tH.parent
      }
      return BH.determinant() < 0 && rH.Tools.Warn(`Mesh ${HH.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: BH,
        windingOrder: AH === SH.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: hH
      }
    }
    async function Vh(HH, BH, LH) {
      const SH = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...BH
      };
      "undefined" === typeof fflate && await rH.Tools.LoadScriptAsync(SH.fflateUrl);
      const hH = {};
      hH[SH.modelFileName] = null;
      let tH = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      tH += function(HH) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===HH.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${HH.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${HH.planeAnchoringAlignment}"`:""}\n            `
      }(SH);
      const zH = {};
      for (const AH of HH.meshes) {
        if (0 === AH.getTotalVertices()) continue;
        const HH = AH,
          BH = HH.geometry,
          CH = HH.material;
        if (!CH || !BH || LH && !LH(HH)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(CH.getClassName())) {
          const LH = "geometries/Geometry_" + BH.uniqueId + ".usda",
            {
              matrix: AH,
              windingOrder: rH,
              convertToRightHanded: EH
            } = Uh(HH);
          if (!(LH in hH)) {
            const HH = Xh(BH, SH, rH, EH);
            hH[LH] = Gh(HH)
          }
          CH.uniqueId in zH || (zH[CH.uniqueId] = CH), tH += Qh(HH, AH)
        } else rH.Tools.Warn("USDZExportAsync does not support this material type: " + CH.getClassName())
      }
      HH.activeCamera && SH.exportCamera && (tH += function(HH, BH) {
        const LH = "Camera_" + HH.uniqueId,
          rH = Yh(AH.Matrix.RotationY(Math.PI).multiply(HH.getWorldMatrix()));
        if (HH.mode === VH.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${LH}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${rH}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${HH.minZ.toPrecision(BH.precision)}, ${HH.maxZ.toPrecision(BH.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(HH.orthoLeft||1)+Math.abs(HH.orthoRight||1))).toPrecision(BH.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(HH.orthoTop||1)+Math.abs(HH.orthoBottom||1))).toPrecision(BH.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const AH = HH.Iu().getAspectRatio(HH),
            SH = BH.cameraSensorWidth || 35;
          return `def Camera "${LH}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${rH}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${HH.minZ.toPrecision(BH.precision)}, ${HH.maxZ.toPrecision(BH.precision)})\n\t\t\tfloat focalLength = ${(SH/(2*Math.tan(.5*HH.fov))).toPrecision(BH.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(SH*AH).toPrecision(BH.precision)}\n\t\t\tfloat verticalAperture = ${(SH/AH).toPrecision(BH.precision)}            \n\t\t}\n\t\n\t`
        }
      }(HH.activeCamera, SH)), tH += "\n            }\n        }";
      const CH = {};
      tH += function(HH, BH, LH) {
        const AH = [];
        for (const rH in HH) {
          const SH = HH[rH];
          AH.push(Th(SH, BH, LH))
        }
        return `\n    def "Materials"\n{\n${AH.join("")}\n}\n\n`
      }(zH, CH, SH), tH += "\n    }", hH[SH.modelFileName] = fflate.strToU8(tH);
      for (const AH in CH) {
        const {
          texture: HH,
          ext: BH,
          mimeType: LH
        } = CH[AH], rH = await ML(HH);
        if (rH && vh(rH.mimeType) && rH.mimeType === LH) hH[`textures/Texture_${AH}.${BH}`] = new Uint8Array(rH.data);
        else {
          const rH = HH.getSize(),
            SH = await (0, PH.g)(HH),
            tH = await OH.DumpTools.DumpDataAsync(rH.width, rH.height, SH, LH, void 0, !1, !0);
          hH[`textures/Texture_${AH}.${BH}`] = new Uint8Array(tH).slice()
        }
      }
      let EH = 0;
      for (const AH in hH) {
        const HH = hH[AH];
        if (!HH) continue;
        EH += 34 + AH.length;
        const BH = 63 & EH;
        if (4 !== BH) {
          const LH = new Uint8Array(64 - BH);
          hH[AH] = [HH, {
            extra: {
              12345: LH
            }
          }]
        }
        EH = HH.length
      }
      return fflate.zipSync(hH, {
        level: 0
      })
    }
    var Oh = LH(42405);
    class bh {
      static Export(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (!HH || 0 === HH.bones.length) throw new Error("Invalid or empty skeleton provided");
        let AH = BH;
        BH && 0 !== BH.length || (AH = HH.animations.map((HH => HH.name)));
        let rH = null;
        for (const CH of AH) {
          const BH = HH.getAnimationRange(CH);
          BH && (rH = rH ? new Oh.b("animation-range", Math.min(rH.from, BH.from), Math.max(rH.to, BH.to)) : BH)
        }
        if (!rH && (HH.animations.length > 0 && (rH = HH.getAnimationRange(HH.animations[0].name)), !rH)) throw new Error("No animation range found in skeleton");
        const SH = LH || 1 / (HH.animations[0]?.framePerSecond || 30),
          hH = this._BuildBoneHierarchy(HH, AH);
        let tH = 0;
        for (const CH of hH) CH.positionKeys.length > 0 && (tH = Math.max(tH, CH.positionKeys.length)), CH.rotationKeys.length > 0 && (tH = Math.max(tH, CH.rotationKeys.length));
        0 === tH && (tH = Math.floor((rH.to - rH.from) / SH) + 1);
        let zH = "";
        return zH += "HIERARCHY\n", zH += this._ExportHierarchy(hH, 0), zH += "MOTION\n", zH += `Frames: ${tH}\n`, zH += `Frame Time: ${SH.toFixed(6)}\n`, zH += this._ExportMotionData(hH, tH, 0, AH), zH
      }
      static _BuildBoneHierarchy(HH, BH) {
        const LH = new Map,
          AH = [];
        for (const rH of HH.bones) {
          const HH = {
            bone: rH,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          LH.set(rH, HH)
        }
        for (const rH of HH.bones) {
          const HH = LH.get(rH);
          if (rH.animations.length > 0)
            for (const LH of rH.animations) BH.includes(LH.name) && ("position" === LH.targetProperty ? (HH.hasPositionChannels = !0, HH.positionKeys.push(...LH.getKeys())) : "rotationQuaternion" === LH.targetProperty && (HH.hasRotationChannels = !0, HH.rotationKeys.push(...LH.getKeys())));
          if (rH.getParent()) {
            const BH = LH.get(rH.getParent());
            BH && BH.children.push(HH)
          } else AH.push(HH)
        }
        return AH
      }
      static _ExportHierarchy(HH, BH) {
        let LH = "";
        const AH = "    ".repeat(BH);
        for (const rH of HH) {
          const HH = rH.bone;
          if (this._IsEndSite(rH)) {
            LH += `${AH}End Site\n`, LH += `${AH}{\n`;
            const BH = this._GetBoneOffset(HH);
            LH += `${AH}    OFFSET ${BH.x.toFixed(6)} ${BH.y.toFixed(6)} ${BH.z.toFixed(6)}\n`, LH += `${AH}}\n`
          } else {
            LH += `${0===BH?"ROOT":`${AH}JOINT`} ${HH.name}\n`, LH += `${AH}{\n`;
            const SH = this._GetBoneOffset(HH);
            LH += `${AH}    OFFSET ${SH.x.toFixed(6)} ${SH.y.toFixed(6)} ${SH.z.toFixed(6)}\n`;
            const hH = [];
            rH.hasPositionChannels && hH.push("Xposition", "Yposition", "Zposition"), rH.hasRotationChannels && hH.push("Zrotation", "Xrotation", "Yrotation"), hH.length > 0 && (LH += `${AH}    CHANNELS ${hH.length} ${hH.join(" ")}\n`), rH.children.length > 0 && (LH += this._ExportHierarchy(rH.children, BH + 1)), LH += `${AH}}\n`
          }
        }
        return LH
      }
      static _IsEndSite(HH) {
        return 0 === HH.children.length
      }
      static _GetBoneOffset(HH) {
        try {
          if (!HH.getParent()) return HH.getRestMatrix().getTranslation();
          return HH.getLocalMatrix().getTranslation()
        } catch (BH) {
          return AH.lu.Zero()
        }
      }
      static _ExportMotionData(HH, BH, LH, AH) {
        let rH = "";
        for (let SH = 0; SH < BH; SH++) {
          const BH = [];
          this._CollectFrameValues(HH, SH + LH, BH, AH), rH += BH.map((HH => HH.toFixed(6))).join(" ") + "\n"
        }
        return rH
      }
      static _CollectFrameValues(HH, BH, LH, AH) {
        for (const rH of HH)
          if (!this._IsEndSite(rH)) {
            if (rH.hasPositionChannels) {
              const HH = this._GetPositionAtFrameIndex(rH.positionKeys, BH);
              LH.push(HH.x, HH.y, HH.z)
            }
            if (rH.hasRotationChannels) {
              const HH = this._GetRotationAtFrameIndex(rH.rotationKeys, BH),
                AH = this._QuaternionToEuler(HH);
              LH.push(AH.z, AH.x, AH.y)
            }
            rH.children.length > 0 && this._CollectFrameValues(rH.children, BH, LH, AH)
          }
      }
      static _GetPositionAtFrameIndex(HH, BH) {
        if (0 === HH.length) return AH.lu.Zero();
        return HH[Math.max(0, Math.min(BH, HH.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(HH, BH) {
        if (0 === HH.length) return AH.Quaternion.Identity();
        return HH[Math.max(0, Math.min(BH, HH.length - 1))].value.clone()
      }
      static _QuaternionToEuler(HH) {
        const BH = new AH.Matrix;
        HH.toRotationMatrix(BH);
        const LH = BH.m;
        let SH, hH, tH;
        const zH = Math.sqrt(LH[0] * LH[0] + LH[1] * LH[1]);
        return zH > KL.d ? (SH = Math.atan2(LH[6], LH[10]), hH = Math.atan2(-LH[2], zH), tH = Math.atan2(LH[1], LH[0])) : (SH = Math.atan2(-LH[9], LH[5]), hH = Math.atan2(-LH[2], zH), tH = 0), new AH.lu(rH.Tools.ToDegrees(SH), rH.Tools.ToDegrees(hH), rH.Tools.ToDegrees(tH))
      }
    }

    function kh(HH) {
      return "string" === typeof HH?.name
    }
    const mh = Symbol("__xml:meta$__"),
      oh = Symbol("__xml:name$__");

    function Ih(HH, BH) {
      Object.prototype.hasOwnProperty.call(HH.metadata, mh) || (HH.metadata[mh] = []), HH.metadata[mh].push(BH)
    }

    function fh(HH) {
      return (BH, LH) => {
        BH[oh] = HH
      }
    }

    function lh() {
      return (HH, BH) => Ih(BH, {
        kind: "none",
        prop: String(BH.name),
        ignore: !0
      })
    }

    function Kh(HH) {
      return (BH, LH) => Ih(LH, {
        kind: "attr",
        prop: String(LH.name),
        ...HH
      })
    }

    function ch(HH) {
      return (BH, LH) => Ih(LH, {
        kind: "elem",
        prop: String(LH.name),
        ...HH
      })
    }

    function eh(HH) {
      const BH = "function" === typeof HH ? HH : HH?.constructor,
        LH = BH?.[Symbol.metadata];
      if (!LH) return [];
      const AH = [];
      let rH = LH;
      for (; rH;) Object.prototype.hasOwnProperty.call(rH, mh) && AH.push(...rH[mh]), rH = Object.getPrototypeOf(rH);
      return AH
    }

    function qh(HH) {
      const BH = HH?.constructor?.[oh];
      return BH || void 0
    }

    function gh(HH) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(HH)
    }

    function Nh(HH) {
      if (kh(HH)) return HH;
      const BH = (HH ?? "").trim();
      if (!BH) return {
        name: ""
      };
      const LH = BH.indexOf(":");
      if (-1 === LH) return {
        name: BH
      };
      if (-1 !== BH.indexOf(":", LH + 1)) return {
        name: BH
      };
      const AH = BH.slice(0, LH),
        rH = BH.slice(LH + 1);
      return gh(AH) && gh(rH) ? {
        ns: AH,
        name: rH
      } : {
        name: BH
      }
    }

    function Rh(HH, BH) {
      return BH ? `${BH}:${HH}` : HH
    }
    const jh = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      nh = Object.freeze({
        number: jh
      });

    function Fh(HH) {
      const BH = HH?.eps ?? jh.eps;
      return {
        eps: BH,
        maxDecimalsCap: HH?.maxDecimalsCap ?? jh.maxDecimalsCap,
        trimTrailingZeros: HH?.trimTrailingZeros ?? jh.trimTrailingZeros,
        fixedDecimals: HH?.fixedDecimals,
        allowScientific: HH?.allowScientific ?? jh.allowScientific,
        snapNearZero: HH?.snapNearZero ?? jh.snapNearZero,
        zeroThreshold: HH?.zeroThreshold ?? BH,
        perAttributeEps: HH?.perAttributeEps
      }
    }

    function Dh(HH) {
      return {
        number: Fh(HH?.number)
      }
    }
    class wh {
      constructor(HH) {
        if (this.o = HH, this._o = HH.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(HH) {
        if (!Number.isFinite(HH)) throw new Error(`Cannot format non-finite number: ${HH}`);
        const BH = this._o,
          LH = this._clampInt(BH.maxDecimalsCap ?? 15, 0, 20),
          AH = BH.trimTrailingZeros ?? !0,
          rH = BH.snapNearZero ?? !0,
          SH = BH.zeroThreshold ?? BH.eps,
          hH = 1 / BH.eps;
        let tH, zH = Math.round(HH * hH) / hH;
        if (Object.is(zH, -0) && (zH = 0), rH && Math.abs(zH) <= SH && (zH = 0), tH = void 0 !== BH.fixedDecimals ? this._clampInt(BH.fixedDecimals, 0, LH) : this._clampInt(Math.ceil(-Math.log10(BH.eps)), 0, LH), BH.allowScientific, 0 === tH) return String(Math.trunc(zH));
        let CH = zH.toFixed(tH);
        if (AH && void 0 === BH.fixedDecimals && (CH = CH.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(CH)) throw new Error(`Scientific notation not allowed in XML output: ${CH}`);
        return CH
      }
      _clampInt(HH, BH, LH) {
        return Number.isFinite(HH) ? (HH = Math.trunc(HH), Math.max(BH, Math.min(LH, HH))) : BH
      }
    }

    function Zh(HH) {
      return HH instanceof Date
    }

    function dh(HH) {
      return "string" === typeof HH
    }

    function ah(HH) {
      return "string" === typeof HH || "number" === typeof HH || "boolean" === typeof HH || "bigint" === typeof HH || Zh(HH)
    }

    function sh(HH) {
      return "number" === typeof HH || "boolean" === typeof HH || "bigint" === typeof HH || Zh(HH)
    }
    class Jh {
      constructor(HH, BH) {
        this._ns = new Map, this._prefixCount = 0, this._builder = HH, this._format = Dh(BH), this._nFmt = new wh(this._format)
      }
      withNamespace() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        for (const AH of BH) this._assignNamespace(AH);
        return this
      }
      serialize(HH, BH) {
        if (!(BH = BH ?? qh(HH))) throw new Error("can not find name for given object");
        const LH = Nh(BH);
        LH.ns && this._assignNamespace(LH.ns, "xmlns"), this._gatherNamespaces(HH, new WeakSet);
        const AH = this._builder.ele(null, LH.name);
        for (const [rH, SH] of Array.from(this._ns.entries())) AH.att("xmlns", SH, rH);
        this._writeObjectContent(AH, HH, (new WeakSet).add(HH)), this._builder.end()
      }
      _writeObject(HH, BH, LH) {
        if (LH.has(BH)) return;
        if (LH.add(BH), Array.isArray(BH)) {
          for (const AH of BH) sh(AH) || (dh(AH) ? this._builder.text(AH) : this._writeObject(HH, AH, LH));
          return
        }
        const AH = qh(BH);
        if (!AH) return;
        const rH = Nh(AH),
          SH = this._getPrefix(rH),
          hH = Rh(rH.name, SH);
        HH.ele(null, hH), this._writeObjectContent(HH, BH, LH), this._builder.end()
      }
      _getPrefix(HH) {
        if (HH.ns) {
          const BH = this._ns.get(HH.ns.toLowerCase());
          if ("xmlns" !== BH) return BH
        }
      }
      _writeObjectContent(HH, BH, LH) {
        const AH = eh(BH) ?? [],
          rH = new Map;
        for (const hH of AH) {
          const HH = rH.get(hH.prop) ?? [];
          HH.push(hH), rH.set(hH.prop, HH)
        }
        const SH = Object.keys(BH).sort(((HH, BH) => {
          const LH = (rH.get(HH) ?? []).some((HH => "attr" === HH.kind));
          return LH === (rH.get(BH) ?? []).some((HH => "attr" === HH.kind)) ? 0 : LH ? -1 : 1
        }));
        for (const hH of SH) {
          const AH = BH[hH];
          if (null === AH || void 0 === AH) continue;
          const SH = rH.get(hH);
          if (SH) {
            if (SH.some((HH => !0 === HH.ignore || "none" === HH.kind))) continue;
            for (const BH of SH) {
              const LH = BH.name ?? BH.prop.toLowerCase();
              if (LH) switch (BH.kind) {
                case "attr": {
                  let rH = null;
                  if ("number" === typeof AH && this._nFmt && (rH = this._nFmt.toString(AH)), BH.formatter) {
                    rH = new BH.formatter(this._format).toString(AH)
                  }
                  if (rH = rH ?? AH.toString(), rH) {
                    const BH = Nh(LH),
                      AH = this._getPrefix(BH),
                      SH = Rh(BH.name, AH);
                    HH.att(null, SH, rH)
                  }
                  break
                }
              }
            }
          } else sh(AH) || (dh(AH) ? this._builder.text(AH) : this._writeObject(HH, AH, LH))
        }
      }
      _gatherNamespaces(HH, BH) {
        if (BH.has(HH)) return;
        if (BH.add(HH), Array.isArray(HH)) {
          for (const LH of HH) ah(LH) || this._gatherNamespaces(LH, BH);
          return
        }
        const LH = qh(HH);
        LH && this._assignNamespace(LH);
        const AH = eh(HH) ?? [],
          rH = new Map;
        for (const hH of AH) {
          const HH = rH.get(hH.prop) ?? [];
          HH.push(hH), rH.set(hH.prop, HH)
        }
        const SH = [];
        for (const hH of Object.keys(HH)) {
          const BH = HH[hH];
          if (null === BH || void 0 === BH) continue;
          const LH = rH.get(hH);
          if (LH) {
            if (LH.some((HH => !0 === HH.ignore || "none" === HH.kind))) continue;
            for (const HH of LH) HH.name && this._assignNamespace(HH.name)
          }
          SH.push(BH)
        }
        for (const hH of SH) ah(hH) || this._gatherNamespaces(hH, BH)
      }
      _assignNamespace(HH, BH) {
        const LH = Nh(HH);
        if (LH?.ns) {
          const HH = LH.ns.toLowerCase();
          this._ns.get(HH) || this._ns.set(HH, BH ?? this._buildNsPrefix(HH))
        } else if ("xmlns" === BH) {
          const HH = LH.name.toLowerCase();
          this._ns.get(HH) || this._ns.set(HH, BH ?? this._buildNsPrefix(HH))
        }
      }
      _buildNsPrefix(HH) {
        let BH, LH = !1;
        do {
          BH = "ns" + this._prefixCount++;
          for (const HH of Array.from(this._ns.values()))
            if (HH === BH) {
              LH = !0;
              break
            }
        } while (LH);
        return BH
      }
    }
    class ih {}
    var ph;
    ih.OpenTag = "<", ih.CloseTag = ">", ih.Slash = "/", ih.Question = "?", ih.Quote = '"', ih.Equal = "=", ih.Space = " ", ih.Semicolon = ":", ih.Dec = "<?xml", ih.Xml = "xml", ih.Xmlns = "xmlns", ih.Xsi = "xsi", ih.VersionKeyword = "version", ih.EncodingKeyword = "encoding", ih.StandaloneKeyword = "standalone",
      function(HH) {
        HH[HH.Declaration = 0] = "Declaration", HH[HH.Tag = 1] = "Tag", HH[HH.Attribute = 2] = "Attribute", HH[HH.Text = 3] = "Text"
      }(ph || (ph = {}));
    class yh {
      constructor(HH) {
        this._ctxStack = [], this._d = 0, this._w = HH
      }
      dec(HH, BH, LH) {
        return this._w.write(ih.Dec), this._writeAttStr(ih.VersionKeyword, HH), BH && this._writeAttStr(ih.EncodingKeyword, BH), void 0 !== LH && this._writeAttStr(ih.StandaloneKeyword, LH ? "yes" : "no"), this._w.write(ih.Question, ih.CloseTag), this
      }
      att(HH, BH, LH) {
        const AH = this._peekContext();
        if (!AH) throw new Error("att() without open element");
        if (AH.closed) throw new Error(`att() after start tag closed for <${AH.name}>`);
        if (this._isXmlnsDecl(HH, BH)) {
          if (BH === ih.Xmlns) AH.defaultNs = LH, this._registerNamespace(AH, "", LH), this._writeAttStr(ih.Xmlns, LH);
          else if (HH) this._registerNamespace(AH, BH, LH), this._writeAttStr(`${HH}:${BH}`, LH);
          else {
            const HH = BH.slice(6);
            this._registerNamespace(AH, HH, LH), this._writeAttStr(BH, LH)
          }
          return AH.lastToken = ph.Attribute, this
        }
        let rH = BH;
        if (HH) {
          rH = `${this._ensurePrefixDeclared(AH,HH)}:${BH}`
        }
        return AH.lastToken = ph.Attribute, this._writeAttStr(rH, LH), this
      }
      ele(HH, BH) {
        const LH = this._peekContext();
        LH && this._closeOpenTagIfNeeded(LH);
        let AH = BH;
        if (HH) {
          AH = `${this._lookupPrefix(HH)??HH}:${BH}`
        }
        return this._pushContext(AH, ++this._d), this._w.write(ih.OpenTag, AH), this
      }
      text(HH) {
        const BH = this._peekContext();
        if (!BH) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(BH), BH.lastToken = ph.Text, this._w.write(this._escText(HH)), this
      }
      end() {
        const HH = this._popContext();
        return HH && (this._d--, HH.closed ? this._w.write(ih.OpenTag, ih.Slash, HH.name, ih.CloseTag) : this._w.write(ih.Slash, ih.CloseTag)), this
      }
      _pushContext(HH, BH) {
        const LH = new yh.Context(HH, BH);
        return this._ctxStack.push(LH), LH
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
      _writeAttStr(HH, BH) {
        this._w.write(ih.Space, HH, ih.Equal, ih.Quote, this._escAttr(BH), ih.Quote)
      }
      _lookupPrefix(HH) {
        let BH = this._ctxStack.length - 1;
        if (BH >= 0)
          do {
            const LH = this._ctxStack[BH--],
              AH = LH.ns2prefix?.get(HH);
            if (AH) return AH
          } while (BH >= 0)
      }
      _escText(HH) {
        return HH.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(HH) {
        return this._escText(HH).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(HH, BH) {
        if (HH) return HH === ih.Xmlns;
        const LH = BH.length,
          AH = ih.Xmlns.length;
        return LH >= AH && (BH.startsWith(ih.Xmlns) && (BH.length == AH || BH[AH] == ih.Semicolon))
      }
      _registerNamespace(HH, BH, LH) {
        if (BH === ih.Xml || BH === ih.Xmlns) throw new Error(`reserved prefix '${BH}'`);
        const AH = HH.prefix2ns.get(BH);
        if (AH && AH !== LH) throw new Error(`prefix '${BH}' already bound to a different namespace`);
        HH.ns2prefix.get(LH) || HH.ns2prefix.set(LH, BH), HH.prefix2ns.set(BH, LH)
      }
      _allocPrefix(HH) {
        let BH = 1;
        for (;;) {
          const LH = "ns" + BH++;
          if (!HH.prefix2ns.has(LH)) return LH
        }
      }
      _ensurePrefixDeclared(HH, BH) {
        const LH = this._lookupPrefix(BH);
        if (LH) return LH;
        if (HH.closed) throw new Error(`can not declare namespace after start tag closed for <${HH.name}>`);
        const AH = this._allocPrefix(HH);
        return this._writeAttStr(`${ih.Xmlns}:${AH}`, BH), this._registerNamespace(HH, AH, BH), AH
      }
      _closeOpenTagIfNeeded(HH) {
        HH.closed || (this._w.write(ih.CloseTag), HH.closed = !0)
      }
    }
    yh.Context = class {
      constructor(HH, BH) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = HH, this.depth = BH
      }
    };
    class Ht {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        if (0 === BH.length) return this;
        const AH = BH.join("");
        return this._chunks.push(AH), this.count += AH.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Bt {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = HH, this._opts = BH, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        if (0 === BH.length) return this;
        const AH = BH.join("");
        if (0 === AH.length) return this;
        this._pending += AH, this._pendingChars += AH.length;
        const rH = this._opts.flushChars ?? 65536;
        return this._pendingChars >= rH && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const HH = this._encoder.encode(this._pending);
        return this._sink.push(HH), this.count += HH.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Lt = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      At = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var rt, St;
    ! function(HH) {
      HH.micron = "micron", HH.millimeter = "millimeter", HH.centimeter = "centimeter", HH.inch = "inch", HH.foot = "foot", HH.meter = "meter"
    }(rt || (rt = {})),
    function(HH) {
      HH.model = "model", HH.solidsupport = "solidsupport", HH.support = "support", HH.surface = "surface", HH.other = "other"
    }(St || (St = {}));
    const ht = "http://schemas.openxmlformats.org/package/2006/content-types",
      tt = "http://schemas.openxmlformats.org/package/2006/relationships";
    var zt;
    ! function(HH) {
      HH.Relationships = "application/vnd.openxmlformats-package.relationships+xml", HH.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", HH.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", HH.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", HH.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", HH.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", HH.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", HH.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", HH.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", HH.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", HH.Png = "image/png", HH.Jpeg = "image/jpeg", HH.Tiff = "image/tiff", HH.Xml = "application/xml"
    }(zt || (zt = {}));
    const Ct = "_rels/",
      Et = "3D/",
      Xt = "3dmodel.model",
      Gt = ".rels",
      Yt = "[Content_Types].xml";
    class ut {
      static IsKnown(HH) {
        return ut.Known.has(HH)
      }
      static IsThreeDimModel(HH) {
        return HH === ut.ThreeDimModel
      }
    }
    ut.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", ut.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", ut.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", ut.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", ut.Known = new Set([ut.ThreeDimModel, ut.Thumbnail, ut.PrintTicket, ut.MustPreserve]);
    let Qt = (() => {
        let HH, BH, LH = [fh({
            ns: ht,
            name: "Types"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.items = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfContentTypes"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      Wt = (() => {
        let HH, BH, LH, AH, rH = [fh({
            ns: ht,
            name: "Default"
          })],
          SH = [],
          hH = [],
          tH = [],
          zH = [],
          CH = [];
        BH = class {
          constructor(HH, BH) {
            this.ext = (0, bH.k)(this, hH, void 0), this.ct = ((0, bH.k)(this, tH), (0, bH.k)(this, zH, void 0)), (0, bH.k)(this, CH), this.ext = HH, this.ct = BH
          }
        };
        return (0, bH.m)(BH, "ThreeMfContentType"), (() => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: {
              ns: ht,
              name: "Extension"
            }
          })], AH = [Kh({
            name: {
              ns: ht,
              name: "ContentType"
            }
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: HH => "ext" in HH,
              get: HH => HH.ext,
              set: (HH, BH) => {
                HH.ext = BH
              }
            },
            metadata: EH
          }, hH, tH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: HH => "ct" in HH,
              get: HH => HH.ct,
              set: (HH, BH) => {
                HH.ct = BH
              }
            },
            metadata: EH
          }, zH, CH), (0, bH.g)(null, HH = {
            value: BH
          }, rH, {
            kind: "class",
            name: BH.name,
            metadata: EH
          }, null, SH), BH = HH.value, EH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          }), (0, bH.k)(BH, SH)
        })(), BH
      })(),
      Mt = (() => {
        let HH, BH, LH = [fh({
            ns: tt,
            name: "Relationships"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.items = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfRelationships"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      xt = (() => {
        let HH, BH, LH, AH, rH, SH = [fh({
            ns: tt,
            name: "Relationship"
          })],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        BH = class {
          constructor(HH, BH, LH) {
            this.id = (0, bH.k)(this, tH, void 0), this.type = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.target = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), (0, bH.k)(this, GH), this.id = HH, this.type = BH, this.target = LH
          }
        };
        return (0, bH.m)(BH, "ThreeMfRelationship"), (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "Id"
          })], AH = [Kh({
            name: "Type"
          })], rH = [Kh({
            name: "Target"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: HH => "id" in HH,
              get: HH => HH.id,
              set: (HH, BH) => {
                HH.id = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: HH => "type" in HH,
              get: HH => HH.type,
              set: (HH, BH) => {
                HH.type = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: HH => "target" in HH,
              get: HH => HH.target,
              set: (HH, BH) => {
                HH.target = BH
              }
            },
            metadata: YH
          }, XH, GH), (0, bH.g)(null, HH = {
            value: BH
          }, SH, {
            kind: "class",
            name: BH.name,
            metadata: YH
          }, null, hH), BH = HH.value, YH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          }), (0, bH.k)(BH, hH)
        })(), BH
      })();
    class vt {
      constructor(HH, BH, LH) {
        this.contentTypes = HH, this.relationships = BH, this.model = LH
      }
    }
    class Pt {
      static Zero() {
        return new Pt([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(HH) {
        this.values = HH
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Tt {
      constructor(HH) {
        this.o = HH, this._f = new wh(HH)
      }
      toString(HH) {
        return HH.values.map((HH => this._f.toString(HH))).join(" ")
      }
    }
    let Ut = (() => {
        let HH, BH, LH, AH, rH, SH = [fh({
            ns: Lt,
            name: "model"
          })],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        BH = class {
          constructor() {
            this.unit = (0, bH.k)(this, tH, rt.millimeter), this.requiredextensions = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.recommendedextensions = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), this.metadata = (0, bH.k)(this, GH)
          }
        };
        return (0, bH.m)(BH, "ThreeMfModel"), (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "unit"
          })], AH = [Kh({
            name: "requiredextensions"
          })], rH = [Kh({
            name: "recommendedextensions"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: HH => "unit" in HH,
              get: HH => HH.unit,
              set: (HH, BH) => {
                HH.unit = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: HH => "requiredextensions" in HH,
              get: HH => HH.requiredextensions,
              set: (HH, BH) => {
                HH.requiredextensions = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: HH => "recommendedextensions" in HH,
              get: HH => HH.recommendedextensions,
              set: (HH, BH) => {
                HH.recommendedextensions = BH
              }
            },
            metadata: YH
          }, XH, GH), (0, bH.g)(null, HH = {
            value: BH
          }, SH, {
            kind: "class",
            name: BH.name,
            metadata: YH
          }, null, hH), BH = HH.value, YH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          })
        })(), BH.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, bH.k)(BH, hH), BH
      })(),
      Vt = (() => {
        let HH, BH, LH, AH, rH, SH = [fh({
            ns: Lt,
            name: "meta"
          })],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        BH = class {
          constructor(HH, BH, LH, AH) {
            this.name = (0, bH.k)(this, tH, void 0), this.preserve = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.type = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), this.value = (0, bH.k)(this, GH), this.name = HH, this.value = BH, this.preserve = LH, this.type = AH
          }
        };
        return (0, bH.m)(BH, "ThreeMfMeta"), (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "name"
          })], AH = [Kh({
            name: "preserve"
          })], rH = [Kh({
            name: "type"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name,
              set: (HH, BH) => {
                HH.name = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: HH => "preserve" in HH,
              get: HH => HH.preserve,
              set: (HH, BH) => {
                HH.preserve = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: HH => "type" in HH,
              get: HH => HH.type,
              set: (HH, BH) => {
                HH.type = BH
              }
            },
            metadata: YH
          }, XH, GH), (0, bH.g)(null, HH = {
            value: BH
          }, SH, {
            kind: "class",
            name: BH.name,
            metadata: YH
          }, null, hH), BH = HH.value, YH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          }), (0, bH.k)(BH, hH)
        })(), BH
      })(),
      Ot = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "metadatagroup"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfMetadataGroup"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      bt = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "resources"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.object = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfResources"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      kt = (() => {
        let HH, BH, LH, AH, rH, SH, hH, tH, zH, CH = [fh({
            ns: Lt,
            name: "object"
          })],
          EH = [],
          XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [],
          MH = [],
          xH = [],
          vH = [],
          PH = [],
          TH = [],
          UH = [],
          VH = [],
          OH = [];
        BH = class {
          constructor(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : St.model;
            this.id = (0, bH.k)(this, XH, void 0), this.type = ((0, bH.k)(this, GH), (0, bH.k)(this, YH, void 0)), this.thumbnail = ((0, bH.k)(this, uH), (0, bH.k)(this, QH, void 0)), this.partnumber = ((0, bH.k)(this, WH), (0, bH.k)(this, MH, void 0)), this.name = ((0, bH.k)(this, xH), (0, bH.k)(this, vH, void 0)), this.pid = ((0, bH.k)(this, PH), (0, bH.k)(this, TH, void 0)), this.pindex = ((0, bH.k)(this, UH), (0, bH.k)(this, VH, void 0)), this.metadatagroup = (0, bH.k)(this, OH), this.id = HH, this.type = BH
          }
        };
        return (0, bH.m)(BH, "ThreeMfObject"), (() => {
          const kH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "id"
          })], AH = [Kh({
            name: "type"
          })], rH = [Kh({
            name: "thumbnail"
          })], SH = [Kh({
            name: "partnumber"
          })], hH = [Kh({
            name: "name"
          })], tH = [Kh({
            name: "pid"
          })], zH = [Kh({
            name: "pindex"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: HH => "id" in HH,
              get: HH => HH.id,
              set: (HH, BH) => {
                HH.id = BH
              }
            },
            metadata: kH
          }, XH, GH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: HH => "type" in HH,
              get: HH => HH.type,
              set: (HH, BH) => {
                HH.type = BH
              }
            },
            metadata: kH
          }, YH, uH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: HH => "thumbnail" in HH,
              get: HH => HH.thumbnail,
              set: (HH, BH) => {
                HH.thumbnail = BH
              }
            },
            metadata: kH
          }, QH, WH), (0, bH.g)(null, null, SH, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: HH => "partnumber" in HH,
              get: HH => HH.partnumber,
              set: (HH, BH) => {
                HH.partnumber = BH
              }
            },
            metadata: kH
          }, MH, xH), (0, bH.g)(null, null, hH, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name,
              set: (HH, BH) => {
                HH.name = BH
              }
            },
            metadata: kH
          }, vH, PH), (0, bH.g)(null, null, tH, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: HH => "pid" in HH,
              get: HH => HH.pid,
              set: (HH, BH) => {
                HH.pid = BH
              }
            },
            metadata: kH
          }, TH, UH), (0, bH.g)(null, null, zH, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: HH => "pindex" in HH,
              get: HH => HH.pindex,
              set: (HH, BH) => {
                HH.pindex = BH
              }
            },
            metadata: kH
          }, VH, OH), (0, bH.g)(null, HH = {
            value: BH
          }, CH, {
            kind: "class",
            name: BH.name,
            metadata: kH
          }, null, EH), BH = HH.value, kH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kH
          }), (0, bH.k)(BH, EH)
        })(), BH
      })(),
      mt = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "mesh"
          })],
          AH = [];
        BH = class {
          constructor(HH, BH) {
            this.vertices = HH ?? new ot, this.triangles = BH ?? new ft
          }
        };
        return (0, bH.m)(BH, "ThreeMfMesh"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      ot = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "vertices"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfVertices"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      It = (() => {
        let HH, BH, LH, AH, rH, SH = [fh({
            ns: Lt,
            name: "vertex"
          })],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        BH = class {
          constructor() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, bH.k)(this, tH, void 0), this.y = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.z = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), (0, bH.k)(this, GH), this.x = HH, this.y = BH, this.z = LH
          }
        };
        return (0, bH.m)(BH, "ThreeMfVertex"), (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "x"
          })], AH = [Kh({
            name: "y"
          })], rH = [Kh({
            name: "z"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: HH => "x" in HH,
              get: HH => HH.x,
              set: (HH, BH) => {
                HH.x = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: HH => "y" in HH,
              get: HH => HH.y,
              set: (HH, BH) => {
                HH.y = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: HH => "z" in HH,
              get: HH => HH.z,
              set: (HH, BH) => {
                HH.z = BH
              }
            },
            metadata: YH
          }, XH, GH), (0, bH.g)(null, HH = {
            value: BH
          }, SH, {
            kind: "class",
            name: BH.name,
            metadata: YH
          }, null, hH), BH = HH.value, YH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          }), (0, bH.k)(BH, hH)
        })(), BH
      })(),
      ft = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "triangles"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfTriangles"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      lt = (() => {
        let HH, BH, LH, AH, rH, SH, hH, tH, zH, CH = [fh({
            ns: Lt,
            name: "triangle"
          })],
          EH = [],
          XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [],
          MH = [],
          xH = [],
          vH = [],
          PH = [],
          TH = [],
          UH = [],
          VH = [],
          OH = [];
        BH = class {
          constructor(HH, BH, LH) {
            this.v1 = (0, bH.k)(this, XH, void 0), this.v2 = ((0, bH.k)(this, GH), (0, bH.k)(this, YH, void 0)), this.v3 = ((0, bH.k)(this, uH), (0, bH.k)(this, QH, void 0)), this.p1 = ((0, bH.k)(this, WH), (0, bH.k)(this, MH, void 0)), this.p2 = ((0, bH.k)(this, xH), (0, bH.k)(this, vH, void 0)), this.p3 = ((0, bH.k)(this, PH), (0, bH.k)(this, TH, void 0)), this.pid = ((0, bH.k)(this, UH), (0, bH.k)(this, VH, void 0)), (0, bH.k)(this, OH), this.v1 = HH, this.v2 = BH, this.v3 = LH
          }
        };
        return (0, bH.m)(BH, "ThreeMfTriangle"), (() => {
          const kH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "v1"
          })], AH = [Kh({
            name: "v2"
          })], rH = [Kh({
            name: "v3"
          })], SH = [Kh({
            name: "p1"
          })], hH = [Kh({
            name: "p2"
          })], tH = [Kh({
            name: "p3"
          })], zH = [Kh({
            name: "pid"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: HH => "v1" in HH,
              get: HH => HH.v1,
              set: (HH, BH) => {
                HH.v1 = BH
              }
            },
            metadata: kH
          }, XH, GH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: HH => "v2" in HH,
              get: HH => HH.v2,
              set: (HH, BH) => {
                HH.v2 = BH
              }
            },
            metadata: kH
          }, YH, uH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: HH => "v3" in HH,
              get: HH => HH.v3,
              set: (HH, BH) => {
                HH.v3 = BH
              }
            },
            metadata: kH
          }, QH, WH), (0, bH.g)(null, null, SH, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: HH => "p1" in HH,
              get: HH => HH.p1,
              set: (HH, BH) => {
                HH.p1 = BH
              }
            },
            metadata: kH
          }, MH, xH), (0, bH.g)(null, null, hH, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: HH => "p2" in HH,
              get: HH => HH.p2,
              set: (HH, BH) => {
                HH.p2 = BH
              }
            },
            metadata: kH
          }, vH, PH), (0, bH.g)(null, null, tH, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: HH => "p3" in HH,
              get: HH => HH.p3,
              set: (HH, BH) => {
                HH.p3 = BH
              }
            },
            metadata: kH
          }, TH, UH), (0, bH.g)(null, null, zH, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: HH => "pid" in HH,
              get: HH => HH.pid,
              set: (HH, BH) => {
                HH.pid = BH
              }
            },
            metadata: kH
          }, VH, OH), (0, bH.g)(null, HH = {
            value: BH
          }, CH, {
            kind: "class",
            name: BH.name,
            metadata: kH
          }, null, EH), BH = HH.value, kH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kH
          }), (0, bH.k)(BH, EH)
        })(), BH
      })(),
      Kt = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "components"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.component = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfComponents"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      ct = (() => {
        let HH, BH, LH, AH, rH = [fh({
            ns: Lt,
            name: "component"
          })],
          SH = [],
          hH = [],
          tH = [],
          zH = [],
          CH = [];
        BH = class {
          constructor(HH, BH) {
            this.objectid = (0, bH.k)(this, hH, void 0), this.transform = ((0, bH.k)(this, tH), (0, bH.k)(this, zH, void 0)), (0, bH.k)(this, CH), this.objectid = HH, this.transform = BH
          }
        };
        return (0, bH.m)(BH, "ThreeMfComponent"), (() => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "objectid"
          })], AH = [Kh({
            name: "transform",
            formatter: Tt
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: HH => "objectid" in HH,
              get: HH => HH.objectid,
              set: (HH, BH) => {
                HH.objectid = BH
              }
            },
            metadata: EH
          }, hH, tH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: HH => "transform" in HH,
              get: HH => HH.transform,
              set: (HH, BH) => {
                HH.transform = BH
              }
            },
            metadata: EH
          }, zH, CH), (0, bH.g)(null, HH = {
            value: BH
          }, rH, {
            kind: "class",
            name: BH.name,
            metadata: EH
          }, null, SH), BH = HH.value, EH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          }), (0, bH.k)(BH, SH)
        })(), BH
      })(),
      et = (() => {
        let HH, BH, LH, AH = [fh({
            ns: Lt,
            name: "basematerials"
          })],
          rH = [],
          SH = [],
          hH = [];
        BH = class {
          constructor(HH) {
            this.id = (0, bH.k)(this, SH, void 0), this.base = ((0, bH.k)(this, hH), []), this.id = HH
          }
        };
        return (0, bH.m)(BH, "ThreeMfBaseMaterials"), (() => {
          const tH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "id"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: HH => "id" in HH,
              get: HH => HH.id,
              set: (HH, BH) => {
                HH.id = BH
              }
            },
            metadata: tH
          }, SH, hH), (0, bH.g)(null, HH = {
            value: BH
          }, AH, {
            kind: "class",
            name: BH.name,
            metadata: tH
          }, null, rH), BH = HH.value, tH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tH
          }), (0, bH.k)(BH, rH)
        })(), BH
      })(),
      qt = (() => {
        let HH, BH, LH, AH, rH = [fh({
            ns: Lt,
            name: "base"
          })],
          SH = [],
          hH = [],
          tH = [],
          zH = [],
          CH = [];
        BH = class {
          constructor(HH, BH) {
            this.name = (0, bH.k)(this, hH, void 0), this.displaycolor = ((0, bH.k)(this, tH), (0, bH.k)(this, zH, void 0)), (0, bH.k)(this, CH), this.name = HH, this.displaycolor = BH
          }
        };
        return (0, bH.m)(BH, "ThreeMfBase"), (() => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "name"
          })], AH = [Kh({
            name: "displaycolor"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name,
              set: (HH, BH) => {
                HH.name = BH
              }
            },
            metadata: EH
          }, hH, tH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: HH => "displaycolor" in HH,
              get: HH => HH.displaycolor,
              set: (HH, BH) => {
                HH.displaycolor = BH
              }
            },
            metadata: EH
          }, zH, CH), (0, bH.g)(null, HH = {
            value: BH
          }, rH, {
            kind: "class",
            name: BH.name,
            metadata: EH
          }, null, SH), BH = HH.value, EH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          }), (0, bH.k)(BH, SH)
        })(), BH
      })(),
      gt = (() => {
        let HH, BH, LH = [fh({
            ns: Lt,
            name: "build"
          })],
          AH = [];
        BH = class {
          constructor() {
            this.item = []
          }
        };
        return (0, bH.m)(BH, "ThreeMfBuild"), (() => {
          const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, bH.g)(null, HH = {
            value: BH
          }, LH, {
            kind: "class",
            name: BH.name,
            metadata: rH
          }, null, AH), BH = HH.value, rH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rH
          }), (0, bH.k)(BH, AH)
        })(), BH
      })(),
      Nt = (() => {
        let HH, BH, LH, AH, rH, SH = [fh({
            ns: Lt,
            name: "item"
          })],
          hH = [],
          tH = [],
          zH = [],
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        BH = class {
          constructor(HH, BH, LH) {
            this.objectid = (0, bH.k)(this, tH, void 0), this.transform = ((0, bH.k)(this, zH), (0, bH.k)(this, CH, void 0)), this.partnumber = ((0, bH.k)(this, EH), (0, bH.k)(this, XH, void 0)), this.metadatagroup = (0, bH.k)(this, GH), this.objectid = HH, this.transform = BH, this.partnumber = LH
          }
        };
        return (0, bH.m)(BH, "ThreeMfItem"), (() => {
          const YH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          LH = [Kh({
            name: "objectid"
          })], AH = [Kh({
            name: "transform",
            formatter: Tt
          })], rH = [Kh({
            name: "partnumber"
          })], (0, bH.g)(null, null, LH, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: HH => "objectid" in HH,
              get: HH => HH.objectid,
              set: (HH, BH) => {
                HH.objectid = BH
              }
            },
            metadata: YH
          }, tH, zH), (0, bH.g)(null, null, AH, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: HH => "transform" in HH,
              get: HH => HH.transform,
              set: (HH, BH) => {
                HH.transform = BH
              }
            },
            metadata: YH
          }, CH, EH), (0, bH.g)(null, null, rH, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: HH => "partnumber" in HH,
              get: HH => HH.partnumber,
              set: (HH, BH) => {
                HH.partnumber = BH
              }
            },
            metadata: YH
          }, XH, GH), (0, bH.g)(null, HH = {
            value: BH
          }, SH, {
            kind: "class",
            name: BH.name,
            metadata: YH
          }, null, hH), BH = HH.value, YH && Object.defineProperty(BH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YH
          }), (0, bH.k)(BH, hH)
        })(), BH
      })();
    class Rt {
      constructor(HH, BH) {
        this._object = new kt(HH, BH)
      }
      withName(HH) {
        return this._object.name = HH, this
      }
      withThumbnail(HH) {
        return this._object.thumbnail = HH, this
      }
      withProperty(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = HH, this._object.id = BH, this
      }
      build() {
        return this._object
      }
      reset(HH, BH) {
        this._object = new kt(HH, BH)
      }
    }
    class jt extends Rt {
      constructor(HH) {
        super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : St.model), this._object.content = new Kt
      }
      withComponent(HH, BH) {
        return this._object.content.component.push(new ct(HH, BH)), this
      }
    }
    class nt extends Rt {
      constructor(HH) {
        super(HH, St.model)
      }
      withPostProcessHandlers(HH, BH) {
        return this._vh = HH, this._th = BH, this
      }
      withData(HH) {
        return this._object.content = this._buildMesh(HH), this
      }
      withMaterial(HH, BH) {
        return this._object.pid = HH, this._object.pindex = BH, this
      }
      _buildMesh(HH) {
        const BH = this._buildVertices(HH.positions),
          LH = this._buildTriangle(HH.indices);
        return new mt(BH, LH)
      }
      _buildVertices(HH) {
        const BH = new ot;
        if (HH)
          for (let LH = 0; LH < HH.length;) {
            const AH = HH[LH++],
              rH = HH[LH++],
              SH = HH[LH++];
            let hH = new It(AH, rH, SH);
            this._vh && (hH = this._vh(hH)), BH.vertex.push(hH)
          }
        return BH
      }
      _buildTriangle(HH) {
        const BH = new ft;
        if (HH)
          for (let LH = 0; LH < HH.length;) {
            const AH = HH[LH++],
              rH = HH[LH++],
              SH = HH[LH++];
            let hH = new lt(AH, rH, SH);
            this._th && (hH = this._th(hH)), BH.triangle.push(hH)
          }
        return BH
      }
    }
    class Ft {
      constructor(HH) {
        this._m = new et(HH)
      }
      withColor(HH, BH) {
        this._m.base = this._m.base ?? [];
        let LH = this._m.base.find((BH => BH.name.toLowerCase() === HH.toLowerCase()));
        return LH ? (LH.displaycolor = this._rgbaToHex(BH), this) : (LH = new qt(HH, this._rgbaToHex(BH)), this._m.base.push(LH), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(HH) {
        const BH = HH => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(HH, 1 / 2.2)))),
          LH = BH(HH.r).toString(16).padStart(2, "0").toUpperCase(),
          AH = BH(HH.g).toString(16).padStart(2, "0").toUpperCase(),
          rH = BH(HH.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof HH.a) {
          return `#${LH}${AH}${rH}${Math.round(Math.min(255,Math.max(0,255*HH.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${LH}${AH}${rH}`
      }
    }
    class Dt {
      constructor() {
        this._model = new Ut, this._objects = new Map
      }
      withMetaData(HH, BH, LH, AH) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Vt(HH, BH, LH, AH)), this
      }
      withMaterial(HH) {
        return HH instanceof Ft && (HH = HH.build()), HH && (this._model.resources = this._model.resources ?? new bt, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(HH)), this
      }
      withMesh(HH) {
        return HH instanceof nt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
      }
      withComponents(HH) {
        return HH instanceof jt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
      }
      withBuild(HH, BH, LH) {
        return this._model.build = this._model.build ?? new gt, this._model.build.item?.push(new Nt(HH, BH, LH)), this
      }
      withUnit(HH) {
        return this._model.unit = HH, this
      }
      reset() {
        return this._model = new Ut, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Dt.KnownMetaSet = new Set(Ut.KnownMeta.map((HH => HH.toLowerCase())));
    class wt {
      withContentType(HH) {
        this._cts || (this._cts = new Qt);
        const BH = this._cts.items;
        return BH.some((BH => BH.ext === HH.ext && BH.ct === HH.ct)) || BH.push(HH), this
      }
      withRelationship(HH) {
        this._rs || (this._rs = new Mt);
        const BH = this._rs.items;
        return BH.some((BH => BH.id === HH.id)) || BH.push(HH), this.withContentType(new Wt("rels", zt.Relationships)), this
      }
      withModel(HH) {
        return HH instanceof Dt && (HH = HH.build()), this._m = HH, this.withContentType(new Wt("model", zt.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const HH = `${Et}${Xt}`;
        if (!this._rs) {
          const BH = `/${HH}`;
          this.withRelationship(new xt("rel0", ut.ThreeDimModel, BH))
        }
        return new vt(this._cts, this._rs, this._m)
      }
    }
    class Zt {
      constructor(HH) {
        this._o = HH
      }
      get options() {
        return this._o
      }
      async serializeAsync(HH) {
        const BH = await this.ensureZipLibReadyAsync();
        if (!BH) return;
        const LH = BH.Zip,
          AH = BH.ZipDeflate;
        if (!LH || !AH) throw new Error("fflate Zip / ZipDeflate not available");
        const rH = function(HH, BH, LH) {
          const rH = new AH(BH, {
            level: 6
          });
          HH.add(rH);
          const SH = function(HH) {
              return {
                push: (BH, LH) => HH.push(BH, LH)
              }
            }(rH),
            hH = new Bt(SH),
            tH = new yh(hH).dec("1.0", "UTF-8");
          new Jh(tH).serialize(LH), hH.finish()
        };
        for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
        const zH = this.toDocument(...hH);
        if (!zH) return;
        const CH = new LH(HH);
        rH(CH, Yt, zH.contentTypes), rH(CH, `${Ct}${Gt}`, zH.relationships), rH(CH, `${Et}${Xt}`, zH.model), CH.end()
      }
      toDocument() {
        const HH = (new Dt).withUnit(this._o?.unit ?? rt.millimeter);
        if (this.options.metadata)
          for (const rH in this.options.metadata) HH.withMetaData(rH, this.options.metadata[rH]);
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return (new wt).withModel(this.toModel(HH, ...LH)).build()
      }
    }
    class dt {
      static async SerializeToMemoryAsync(HH) {
        const BH = new Array;
        let LH = 0;
        for (var AH = arguments.length, rH = new Array(AH > 1 ? AH - 1 : 0), SH = 1; SH < AH; SH++) rH[SH - 1] = arguments[SH];
        if (await HH.serializeAsync((function(HH, AH, rH) {
            BH.push(AH), LH += AH.length
          }), ...rH), !LH) return;
        const hH = new Uint8Array(LH);
        let tH = 0;
        for (const zH of BH) hH.set(zH, tH), tH += zH.length;
        return hH
      }
    }
    class st {}
    st.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Jt {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = HH, this._to = BH, this._step = LH, this._i = HH
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const HH = this._i;
        return this._i += this._step, HH
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class it extends Zt {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...it.DefaultOptions,
          ...HH
        })
      }
      toModel(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        LH = LH.filter((HH => HH instanceof CA.c || HH instanceof YH.b));
        const rH = new Jt,
          SH = HH,
          hH = new Map,
          tH = this.options.exportInstances ? [] : null;
        for (let zH = 0; zH < LH.length; zH++) {
          const HH = LH[zH];
          if (HH instanceof YH.b) {
            tH?.push(HH);
            continue
          }
          const BH = HH.name || `mesh${zH}`,
            AH = HH.getWorldMatrix(),
            CH = this._handleBabylonTo3mfMatrixTransformToRef(AH, Pt.Zero()),
            EH = HH.jU;
          if (void 0 === EH) continue;
          const XH = 1 == EH.length;
          for (let LH = 0; LH < EH.length; LH++) {
            const AH = EH[LH],
              tH = this._extractSubMesh(HH, AH);
            if (tH) {
              const HH = XH ? `${BH}` : `${BH}_${LH}`,
                zH = new nt(rH.next()).withData(tH).withName(HH).build();
              SH.withMesh(zH), SH.withBuild(zH.id, CH), hH.set(AH, zH)
            }
          }
        }
        if (tH && tH.length) {
          const HH = this._groupBy(tH, (HH => HH.XSH));
          for (const [BH, LH] of Array.from(HH.entries()))
            if (LH && LH.length)
              for (let HH = 0; HH < LH.length; HH++) {
                const AH = LH[HH].getWorldMatrix(),
                  rH = BH.jU;
                for (let HH = 0; HH < rH.length; HH++) {
                  const BH = rH[HH],
                    LH = hH.get(BH);
                  LH && SH.withBuild(LH.id, this._handleBabylonTo3mfMatrixTransformToRef(AH, Pt.Zero()))
                }
              }
        }
        return SH.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const HH = globalThis;
          return HH.fflate || await rH.Tools.LoadScriptAsync(st.FFLATEUrl), HH.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(HH, BH) {
        const LH = HH.vrH();
        if (!LH) return;
        const AH = HH.getVerticesData(it._PositionKind);
        if (!AH) return;
        if (0 == BH.indexStart && BH.indexCount == LH.length) return {
          positions: AH,
          indices: LH
        };
        const rH = BH.indexStart,
          SH = new Map,
          hH = [],
          tH = new Uint32Array(BH.indexCount);
        for (let zH = 0; zH < BH.indexCount; zH++) {
          const HH = LH[rH + zH];
          let BH = SH.get(HH);
          if (void 0 === BH) {
            BH = SH.size, SH.set(HH, BH);
            const LH = 3 * HH;
            hH.push(AH[LH], AH[LH + 1], AH[LH + 2])
          }
          tH[zH] = BH
        }
        return {
          positions: new Float32Array(hH),
          indices: tH
        }
      }
      _groupBy(HH, BH) {
        const LH = new Map;
        for (const AH of HH) {
          const HH = BH(AH),
            rH = LH.get(HH);
          rH ? rH.push(AH) : LH.set(HH, [AH])
        }
        return LH
      }
      _handleBabylonTo3mfMatrixTransformToRef(HH, BH) {
        const LH = HH.multiplyToRef(it._R_BJS_TO_3MF, NH.e.Zero()).m;
        return BH.values = [LH[0], LH[1], LH[2], LH[4], LH[5], LH[6], LH[8], LH[9], LH[10], LH[12], LH[13], LH[14]], BH
      }
    }
    it.DefaultOptions = {
      unit: rt.meter,
      exportInstances: !1
    }, it._PositionKind = "position", it._R_BJS_TO_3MF = NH.e.RotationX(Math.PI / 2).multiply(NH.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);