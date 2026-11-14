export const id = 205;
export const ids = [205, 209];
export const modules = {
  39290: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(39222),
      CW = MW(37579);
    let zR = !1;

    function AW() {
      zR || (zR = !0, CW.c.prototype._sphericalPolynomialTargetSize = 0, CW.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(CW.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((WW => {
              this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(WW) {
          this._texture && (this._texture._sphericalPolynomial = WW)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  35373: (WW, RW, MW) => {
    MW.d(RW, {
      Color3: () => wW.d,
      d: () => wW.h
    });
    var wW = MW(35376);
    (0, wW.k)()
  },
  35845: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(35852);
    class CW {
      static GetPlanes(WW) {
        const RW = [];
        for (let MW = 0; MW < 6; MW++) RW.push(new wW.c(0, 0, 0, 0));
        return CW.GetPlanesToRef(WW, RW), RW
      }
      static GetNearPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[2], RW.normal.y = MW[7] + MW[6], RW.normal.z = MW[11] + MW[10], RW.d = MW[15] + MW[14], RW.normalize()
      }
      static GetFarPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[2], RW.normal.y = MW[7] - MW[6], RW.normal.z = MW[11] - MW[10], RW.d = MW[15] - MW[14], RW.normalize()
      }
      static GetLeftPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[0], RW.normal.y = MW[7] + MW[4], RW.normal.z = MW[11] + MW[8], RW.d = MW[15] + MW[12], RW.normalize()
      }
      static GetRightPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[0], RW.normal.y = MW[7] - MW[4], RW.normal.z = MW[11] - MW[8], RW.d = MW[15] - MW[12], RW.normalize()
      }
      static GetTopPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[1], RW.normal.y = MW[7] - MW[5], RW.normal.z = MW[11] - MW[9], RW.d = MW[15] - MW[13], RW.normalize()
      }
      static GetBottomPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[1], RW.normal.y = MW[7] + MW[5], RW.normal.z = MW[11] + MW[9], RW.d = MW[15] + MW[13], RW.normalize()
      }
      static GetPlanesToRef(WW, RW) {
        CW.GetNearPlaneToRef(WW, RW[0]), CW.GetFarPlaneToRef(WW, RW[1]), CW.GetLeftPlaneToRef(WW, RW[2]), CW.GetRightPlaneToRef(WW, RW[3]), CW.GetTopPlaneToRef(WW, RW[4]), CW.GetBottomPlaneToRef(WW, RW[5])
      }
      static IsPointInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; MW++)
          if (RW[MW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  35852: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW, CW) {
        this.normal = new wW.q(WW, RW, MW), this.d = CW
      }
      JNW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new CW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RW = 0;
        return 0 !== WW && (RW = 1 / WW), this.normal.x *= RW, this.normal.y *= RW, this.normal.z *= RW, this.d *= RW, this
      }
      transform(WW) {
        const RW = CW._TmpMatrix;
        WW.invertToRef(RW);
        const MW = RW.m,
          wW = this.normal.x,
          zR = this.normal.y,
          AW = this.normal.z,
          bR = this.d,
          yR = wW * MW[0] + zR * MW[1] + AW * MW[2] + bR * MW[3],
          NW = wW * MW[4] + zR * MW[5] + AW * MW[6] + bR * MW[7],
          eW = wW * MW[8] + zR * MW[9] + AW * MW[10] + bR * MW[11],
          BW = wW * MW[12] + zR * MW[13] + AW * MW[14] + bR * MW[15];
        return new CW(yR, NW, eW, BW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, RW, MW) {
        const wW = RW.x - WW.x,
          CW = RW.y - WW.y,
          zR = RW.z - WW.z,
          AW = MW.x - WW.x,
          bR = MW.y - WW.y,
          yR = MW.z - WW.z,
          NW = CW * yR - zR * bR,
          eW = zR * AW - wW * yR,
          BW = wW * bR - CW * AW,
          tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
        let TW;
        return TW = 0 !== tR ? 1 / tR : 0, this.normal.x = NW * TW, this.normal.y = eW * TW, this.normal.z = BW * TW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, RW) {
        return wW.q.Dot(this.normal, WW) <= RW
      }
      signedDistanceTo(WW) {
        return wW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new CW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, RW, MW) {
        const wW = new CW(0, 0, 0, 0);
        return wW.copyFromPoints(WW, RW, MW), wW
      }
      static FromPositionAndNormal(WW, RW) {
        const MW = new CW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, RW, MW)
      }
      static FromPositionAndNormalToRef(WW, RW, MW) {
        return MW.normal.hyW(RW), MW.normal.normalize(), MW.d = -WW.dot(MW.normal), MW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, RW, MW) {
        const CW = -(RW.x * WW.x + RW.y * WW.y + RW.z * WW.z);
        return wW.q.Dot(MW, RW) + CW
      }
    }
    CW._TmpMatrix = wW.d.Identity()
  },
  35317: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Matrix: () => wW.d,
      Quaternion: () => wW.e,
      RegisterMathVector: () => wW.h,
      TmpVectors: () => wW.k,
      Vector2: () => wW.n,
      vC: () => wW.q,
      Vector4: () => wW.s
    });
    var wW = MW(35324);
    (0, wW.h)()
  },
  36185: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW, MW, wW) {
        this.x = WW, this.y = RW, this.width = MW, this.height = wW
      }
      toGlobal(WW, RW) {
        return new wW(this.x * WW, this.y * RW, this.width * WW, this.height * RW)
      }
      toGlobalToRef(WW, RW, MW) {
        return MW.x = this.x * WW, MW.y = this.y * RW, MW.width = this.width * WW, MW.height = this.height * RW, this
      }
      clone() {
        return new wW(this.x, this.y, this.width, this.height)
      }
    }
  },
  39222: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(35324),
      CW = MW(35353),
      zR = MW(37574),
      AW = MW(35328),
      bR = MW(35376);
    class yR {
      constructor(WW, RW, MW, wW) {
        this.name = WW, this.worldAxisForNormal = RW, this.worldAxisForFileX = MW, this.worldAxisForFileY = wW
      }
    }
    class NW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.QRW()?.mC().flushFramebuffer();
        const RW = WW.getSize().width,
          MW = WW._sphericalPolynomialTargetSize,
          wW = MW > 0 ? this._NearestPow2Floor(MW) : 0,
          CW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          zR = wW > 0 && wW < RW && CW,
          AW = zR ? Math.max(0, Math.round(Math.log2(RW / wW))) : 0,
          bR = zR ? Math.max(1, Math.floor(RW / Math.pow(2, AW))) : RW,
          yR = WW.readPixels(0, AW, void 0, !1),
          NW = WW.readPixels(1, AW, void 0, !1);
        let eW, BW;
        WW.isRenderTarget ? (eW = WW.readPixels(3, AW, void 0, !1), BW = WW.readPixels(2, AW, void 0, !1)) : (eW = WW.readPixels(2, AW, void 0, !1), BW = WW.readPixels(3, AW, void 0, !1));
        const tR = WW.readPixels(4, AW, void 0, !1),
          TW = WW.readPixels(5, AW, void 0, !1),
          gR = WW.gammaSpace,
          iR = wW > 0 && wW < RW && !zR;
        return new Promise((WW => {
          Promise.all([NW, yR, eW, BW, tR, TW]).then((MW => {
            let [CW, zR, AW, yR, NW, eW] = MW, BW = bR;
            if (iR) {
              const WW = 4;
              CW = this._DownsampleFace(CW, RW, wW, WW), zR = this._DownsampleFace(zR, RW, wW, WW), AW = this._DownsampleFace(AW, RW, wW, WW), yR = this._DownsampleFace(yR, RW, wW, WW), NW = this._DownsampleFace(NW, RW, wW, WW), eW = this._DownsampleFace(eW, RW, wW, WW), BW = wW
            }
            const tR = {
              size: BW,
              right: zR,
              left: CW,
              up: AW,
              down: yR,
              front: NW,
              back: eW,
              format: 5,
              type: CW instanceof Float32Array ? 1 : 0,
              gammaSpace: gR
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(tR))
          }))
        }))
      }
      static _AreaElement(WW, RW) {
        return Math.atan2(WW * RW, Math.sqrt(WW * WW + RW * RW + 1))
      }
      static _DownsampleFace(WW, RW, MW, wW) {
        const CW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          zR = MW * MW * wW,
          AW = new Float32Array(zR),
          bR = RW / MW,
          yR = 1 / (bR * bR);
        for (let eW = 0; eW < MW; eW++) {
          const WW = Math.floor(eW * bR),
            zR = Math.floor((eW + 1) * bR);
          for (let NW = 0; NW < MW; NW++) {
            const BW = Math.floor(NW * bR),
              tR = Math.floor((NW + 1) * bR),
              TW = (eW * MW + NW) * wW;
            for (let MW = 0; MW < wW; MW++) {
              let bR = 0;
              for (let AW = WW; AW < zR; AW++)
                for (let WW = BW; WW < tR; WW++) bR += CW[(AW * RW + WW) * wW + MW];
              AW[TW + MW] = bR * yR
            }
          }
        }
        if (WW instanceof Float32Array) return AW;
        const NW = new(0, WW.constructor)(zR);
        for (let eW = 0; eW < zR; eW++) NW[eW] = AW[eW] + .5 | 0;
        return NW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = RW > 0 ? this._NearestPow2Floor(RW) : 0;
        if (MW > 0 && WW.size > MW) {
          const RW = 5 === WW.format ? 4 : 3,
            wW = ["right", "left", "up", "down", "front", "back"],
            CW = {};
          for (const zR of wW) CW[zR] = this._DownsampleFace(WW[zR], WW.size, MW, RW);
          WW = {
            ...WW,
            ...CW,
            size: MW
          }
        }
        const wW = new zR.c;
        let yR = 0;
        const NW = 2 / WW.size,
          eW = NW,
          BW = .5 * NW,
          tR = BW - 1;
        for (let zR = 0; zR < 6; zR++) {
          const RW = this._FileFaces[zR],
            MW = WW[RW.name];
          let TW = tR;
          const gR = 5 === WW.format ? 4 : 3;
          for (let zR = 0; zR < WW.size; zR++) {
            let iR = tR;
            for (let eW = 0; eW < WW.size; eW++) {
              const tR = RW.worldAxisForFileX.scale(iR).add(RW.worldAxisForFileY.scale(TW)).add(RW.worldAxisForNormal);
              tR.normalize();
              const YW = this._AreaElement(iR - BW, TW - BW) - this._AreaElement(iR - BW, TW + BW) - this._AreaElement(iR + BW, TW - BW) + this._AreaElement(iR + BW, TW + BW);
              let JW = MW[zR * WW.size * gR + eW * gR + 0],
                PW = MW[zR * WW.size * gR + eW * gR + 1],
                IW = MW[zR * WW.size * gR + eW * gR + 2];
              isNaN(JW) && (JW = 0), isNaN(PW) && (PW = 0), isNaN(IW) && (IW = 0), 0 === WW.type && (JW /= 255, PW /= 255, IW /= 255), WW.gammaSpace && (JW = Math.pow((0, CW.Clamp)(JW), AW.k), PW = Math.pow((0, CW.Clamp)(PW), AW.k), IW = Math.pow((0, CW.Clamp)(IW), AW.k));
              const oW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(JW, PW, IW);
                if (WW > oW) {
                  const RW = oW / WW;
                  JW *= RW, PW *= RW, IW *= RW
                }
              } else JW = (0, CW.Clamp)(JW, 0, oW), PW = (0, CW.Clamp)(PW, 0, oW), IW = (0, CW.Clamp)(IW, 0, oW);
              const lW = new bR.d(JW, PW, IW);
              wW.addLight(tR, lW, YW), yR += YW, iR += NW
            }
            TW += eW
          }
        }
        const TW = 6 * (4 * Math.PI) / 6 / yR;
        return wW.scaleInPlace(TW), wW.convertIncidentRadianceToIrradiance(), wW.convertIrradianceToLambertianRadiance(), zR.d.FromHarmonics(wW)
      }
    }
    NW._FileFaces = [new yR("right", new wW.q(1, 0, 0), new wW.q(0, 0, -1), new wW.q(0, -1, 0)), new yR("left", new wW.q(-1, 0, 0), new wW.q(0, 0, 1), new wW.q(0, -1, 0)), new yR("up", new wW.q(0, 1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, 1)), new yR("down", new wW.q(0, -1, 0), new wW.q(1, 0, 0), new wW.q(0, 0, -1)), new yR("front", new wW.q(0, 0, 1), new wW.q(1, 0, 0), new wW.q(0, -1, 0)), new yR("back", new wW.q(0, 0, -1), new wW.q(-1, 0, 0), new wW.q(0, -1, 0))], NW.MAX_HDRI_VALUE = 4096, NW.PRESERVE_CLAMPED_COLORS = !1
  },
  39023: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW.g,
      g: () => wW.m
    });
    var wW = MW(37635);
    (0, wW.s)()
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  39258: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = MW(39244),
      CW = MW(39265);
    class zR {
      static ExpandRGBDTexture(WW) {
        const RW = WW._texture;
        if (!RW || !WW.isRGBD) return;
        const CW = RW.mC(),
          zR = CW.getCaps(),
          AW = RW.isReady;
        let bR = !1;
        zR.textureHalfFloatRender && zR.textureHalfFloatLinearFiltering ? (bR = !0, RW.type = 2) : zR.textureFloatRender && zR.textureFloatLinearFiltering && (bR = !0, RW.type = 1), bR && (RW.isReady = !1, RW._isRGBD = !1, RW.invertY = !1);
        const yR = async () => {
          const zR = CW.isWebGPU,
            AW = zR ? 1 : 0;
          RW.isReady = !1, zR ? await MW.e(312).then((() => MW(58797))) : await MW.e(294).then((() => MW(58804)));
          const bR = new wW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, CW, !1, void 0, RW.type, void 0, null, !1, void 0, AW);
          bR.externalTextureSamplerBinding = !0;
          const yR = CW.createRenderTargetTexture(RW.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: RW.samplingMode,
            type: RW.type,
            format: 5
          });
          bR.onEffectCreatedObservable.addOnce((MW => {
            MW.executeWhenCompiled((() => {
              bR.onApply = WW => {
                WW._bindTexture("textureSampler", RW), WW.setFloat2("scale", 1, 1)
              }, WW.QRW()?.postProcessManager.directRender([bR], yR, !0), CW.restoreDefaultFramebuffer(), CW._releaseTexture(RW), bR && bR.dispose(), yR._swapAndDie(RW), RW.isReady = !0
            }))
          }))
        };
        bR && (AW ? yR() : WW.onLoadObservable.addOnce(yR))
      }
      static async EncodeTextureToRGBD(WW, RW) {
        let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return RW.mC().isWebGPU ? await MW.e(313).then((() => MW(58815))) : await MW.e(295).then((() => MW(58813))), await (0, CW.b)("rgbdEncode", WW, RW, wW, 1, 5)
      }
    }
  },
  58568: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AsyncLoop: () => wW.c,
      RegisterTools: () => wW.f,
      Tools: () => wW.j,
      className: () => wW.n
    });
    var wW = MW(37685);
    (0, wW.f)()
  },
  39306: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    class wW {
      constructor(WW) {
        this._pendingActions = new Array, this._workerInfos = WW.map((WW => ({
          workerPromise: Promise.resolve(WW),
          idle: !0
        })))
      }
      dispose() {
        for (const WW of this._workerInfos) WW.workerPromise.then((WW => {
          WW.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(WW) {
        this._executeOnIdleWorker(WW) || this._pendingActions.push(WW)
      }
      _executeOnIdleWorker(WW) {
        for (const RW of this._workerInfos)
          if (RW.idle) return this._execute(RW, WW), !0;
        return !1
      }
      _execute(WW, RW) {
        WW.idle = !1, WW.workerPromise.then((MW => {
          RW(MW, (() => {
            const RW = this._pendingActions.shift();
            RW ? this._execute(WW, RW) : WW.idle = !0
          }))
        }))
      }
    }
    class CW extends wW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.DefaultOptions;
        super([]), this._maxWorkers = WW, this._createWorkerAsync = RW, this._options = MW
      }
      push(WW) {
        if (!this._executeOnIdleWorker(WW))
          if (this._workerInfos.length < this._maxWorkers) {
            const RW = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(RW), this._execute(RW, WW)
          } else this._pendingActions.push(WW)
      }
      _execute(WW, RW) {
        WW.timeoutId && (clearTimeout(WW.timeoutId), delete WW.timeoutId), super._execute(WW, ((MW, wW) => {
          RW(MW, (() => {
            wW(), WW.idle && (WW.timeoutId = setTimeout((() => {
              WW.workerPromise.then((WW => {
                WW.terminate()
              }));
              const RW = this._workerInfos.indexOf(WW); - 1 !== RW && this._workerInfos.splice(RW, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    CW.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  58605: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AbstractThreeMfSerializer: () => nb,
      BVHExporter: () => rb,
      ContentTypeFileName: () => Tb,
      DefaultXmlSerializerFormatOptions: () => vb,
      DefaultXmlSerializerNumberOptions: () => xb,
      EXT_lights_area: () => YC,
      EXT_mesh_gpu_instancing: () => Vw,
      EXT_texture_avif: () => CA,
      EXT_texture_webp: () => WA,
      GLTF2Export: () => hw,
      GLTFData: () => NW,
      GetXmlFieldMeta: () => hA,
      GetXmlName: () => UA,
      IsQualifiedName: () => cb,
      KHR_draco_mesh_compression: () => qC,
      KHR_interactivity: () => NC,
      KHR_lights_punctual: () => zz,
      KHR_materials_anisotropy: () => oC,
      KHR_materials_clearcoat: () => rz,
      KHR_materials_coat: () => sC,
      KHR_materials_diffuse_roughness: () => Uz,
      KHR_materials_diffuse_transmission: () => VC,
      KHR_materials_dispersion: () => KC,
      KHR_materials_emissive_strength: () => GC,
      KHR_materials_fuzz: () => ez,
      KHR_materials_ior: () => qz,
      KHR_materials_iridescence: () => Rz,
      KHR_materials_openpbr: () => xA,
      KHR_materials_sheen: () => zA,
      KHR_materials_specular: () => gA,
      KHR_materials_transmission: () => Pz,
      KHR_materials_unlit: () => fz,
      KHR_materials_volume: () => Xz,
      KHR_materials_volume_scatter: () => sz,
      KHR_texture_basisu: () => Dz,
      KHR_texture_transform: () => Oz,
      Known3mfRelationshipTypes: () => gy,
      KnownI3mfContentType: () => yy,
      Matrix3d: () => ob,
      MatrixFormatter: () => lb,
      ModelFileName: () => Bb,
      NumberFormatter: () => OA,
      OBJExport: () => AW,
      Object3dDirName: () => eb,
      OpenXmlContentTypesNamespace: () => Ab,
      OpenXmlRelationshipsNamespace: () => by,
      RegisterEXT_lights_area: () => PC,
      RegisterEXT_mesh_gpu_instancing: () => xC,
      RegisterEXT_texture_avif: () => AA,
      RegisterEXT_texture_webp: () => MA,
      RegisterKHR_draco_mesh_compression: () => Sw,
      RegisterKHR_interactivity: () => BC,
      RegisterKHR_lights_punctual: () => bz,
      RegisterKHR_materials_anisotropy: () => FC,
      RegisterKHR_materials_clearcoat: () => XC,
      RegisterKHR_materials_coat: () => pC,
      RegisterKHR_materials_diffuse_roughness: () => Vz,
      RegisterKHR_materials_diffuse_transmission: () => xz,
      RegisterKHR_materials_dispersion: () => OC,
      RegisterKHR_materials_emissive_strength: () => HC,
      RegisterKHR_materials_fuzz: () => tA,
      RegisterKHR_materials_ior: () => SC,
      RegisterKHR_materials_iridescence: () => wz,
      RegisterKHR_materials_openpbr: () => Kz,
      RegisterKHR_materials_sheen: () => bA,
      RegisterKHR_materials_specular: () => Yz,
      RegisterKHR_materials_transmission: () => oz,
      RegisterKHR_materials_unlit: () => rA,
      RegisterKHR_materials_volume: () => kA,
      RegisterKHR_materials_volume_scatter: () => pz,
      RegisterKHR_texture_basisu: () => Zz,
      RegisterKHR_texture_transform: () => Gz,
      RelationshipDirName: () => Nb,
      RelationshipFileName: () => ty,
      ResolveFormatOptions: () => uA,
      ResolveNumberOptions: () => KA,
      STLExport: () => bb,
      ST_ObjectType: () => zy,
      ST_Unit: () => Cb,
      StringXmlWriter: () => Wb,
      ThreeDimModelNamespace: () => Mb,
      ThreeMf: () => Gb,
      ThreeMfBase: () => Ub,
      ThreeMfBaseMaterials: () => hb,
      ThreeMfBuild: () => Eb,
      ThreeMfComponent: () => pb,
      ThreeMfComponents: () => db,
      ThreeMfComponentsBuilder: () => xy,
      ThreeMfContentType: () => Yb,
      ThreeMfContentTypes: () => iy,
      ThreeMfDocument: () => Ib,
      ThreeMfDocumentBuilder: () => Ob,
      ThreeMfItem: () => Vb,
      ThreeMfMaterialBuilder: () => Kb,
      ThreeMfMesh: () => Xb,
      ThreeMfMeshBuilder: () => vy,
      ThreeMfMeta: () => fb,
      ThreeMfMetadataGroup: () => Qb,
      ThreeMfModel: () => Fb,
      ThreeMfModelBuilder: () => ub,
      ThreeMfObject: () => cy,
      ThreeMfObjectBuilder: () => my,
      ThreeMfRelationship: () => Pb,
      ThreeMfRelationships: () => Jb,
      ThreeMfResources: () => ry,
      ThreeMfSerializer: () => Db,
      ThreeMfSerializerGlobalConfiguration: () => Lb,
      ThreeMfTriangle: () => sb,
      ThreeMfTriangles: () => ay,
      ThreeMfVertex: () => ky,
      ThreeMfVertices: () => jy,
      ToQualifiedString: () => mb,
      TokenType: () => ZA,
      TriangleSetsNamespace: () => wb,
      USDZExportAsync: () => fA,
      Utf8XmlWriterToBytes: () => Rb,
      XmlAttr: () => dA,
      XmlBuilder: () => SA,
      XmlElem: () => pA,
      XmlIgnore: () => sA,
      XmlName: () => ab,
      XmlNameToParts: () => VA,
      XmlSerializer: () => DA,
      _ConvertToGLTFPBRMetallicRoughness: () => rw,
      _SolveMetallic: () => QM,
      __IGLTFExporterExtension: () => bR
    });
    var wW = MW(35317),
      CW = MW(58568),
      zR = MW(37866);
    class AW {
      static OBJ(WW, RW, MW, AW) {
        const bR = [];
        let yR = 1,
          NW = 1;
        RW && (MW || (MW = "mat"), bR.push("mtllib " + MW + ".mtl"));
        for (let eW = 0; eW < WW.length; eW++) {
          const MW = WW[eW],
            BW = MW.name || `mesh${eW}}`;
          bR.push(`o ${BW}`);
          let tR = null;
          if (AW) {
            const WW = MW.computeWorldMatrix(!0);
            tR = new wW.Matrix, WW.invertToRef(tR), MW.bakeTransformIntoVertices(WW)
          }
          if (RW) {
            const WW = MW.material;
            WW && bR.push("usemtl " + WW.id)
          }
          const TW = MW.geometry;
          if (!TW) {
            CW.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const gR = TW.getVerticesData("position"),
            iR = TW.getVerticesData("normal"),
            YW = TW.getVerticesData("uv"),
            JW = TW.ptW();
          let PW = 0,
            IW = 0;
          if (!gR || !JW) {
            CW.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const oW = WW[0].QRW().useRightHandedSystem ? 1 : -1;
          for (let WW = 0; WW < gR.length; WW += 3) bR.push("v " + gR[WW] * oW + " " + gR[WW + 1] + " " + gR[WW + 2]), PW++;
          if (null != iR)
            for (let WW = 0; WW < iR.length; WW += 3) bR.push("vn " + iR[WW] * oW + " " + iR[WW + 1] + " " + iR[WW + 2]);
          if (null != YW)
            for (let WW = 0; WW < YW.length; WW += 2) bR.push("vt " + YW[WW] + " " + YW[WW + 1]), IW++;
          const lW = ["", "", ""],
            FW = (MW.material || MW.QRW().defaultMaterial)._getEffectiveOrientation(MW),
            [fW, QW] = FW === zR.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let WW = 0; WW < JW.length; WW += 3) {
            const RW = [String(JW[WW] + yR), String(JW[WW + fW] + yR), String(JW[WW + QW] + yR)],
              MW = [String(JW[WW] + NW), String(JW[WW + fW] + NW), String(JW[WW + QW] + NW)],
              wW = RW,
              CW = null != YW ? MW : lW,
              zR = null != iR ? RW : lW;
            bR.push("f " + wW[0] + "/" + CW[0] + "/" + zR[0] + " " + wW[1] + "/" + CW[1] + "/" + zR[1] + " " + wW[2] + "/" + CW[2] + "/" + zR[2])
          }
          AW && tR && MW.bakeTransformIntoVertices(tR), yR += PW, NW += IW
        }
        return bR.join("\n")
      }
      static MTL(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const MW = [],
          wW = WW.material;
        MW.push("newmtl " + RW), MW.push("  Ns " + wW.specularPower.toFixed(4)), MW.push("  Ni 1.5000"), MW.push("  d " + wW.alpha.toFixed(4)), MW.push("  Tr 0.0000"), MW.push("  Tf 1.0000 1.0000 1.0000"), MW.push("  illum 2"), MW.push("  Ka " + wW.ambientColor.r.toFixed(4) + " " + wW.ambientColor.g.toFixed(4) + " " + wW.ambientColor.b.toFixed(4)), MW.push("  Kd " + wW.diffuseColor.r.toFixed(4) + " " + wW.diffuseColor.g.toFixed(4) + " " + wW.diffuseColor.b.toFixed(4)), MW.push("  Ks " + wW.specularColor.r.toFixed(4) + " " + wW.specularColor.g.toFixed(4) + " " + wW.specularColor.b.toFixed(4)), MW.push("  Ke " + wW.emissiveColor.r.toFixed(4) + " " + wW.emissiveColor.g.toFixed(4) + " " + wW.emissiveColor.b.toFixed(4));
        wW.ambientTexture && MW.push("  map_Ka " + wW.ambientTexture.name), wW.diffuseTexture && MW.push("  map_Kd " + wW.diffuseTexture.name), wW.specularTexture && MW.push("  map_Ks " + wW.specularTexture.name), wW.bumpTexture && MW.push("  map_bump -imfchan z " + wW.bumpTexture.name), wW.opacityTexture && MW.push("  map_d " + wW.opacityTexture.name);
        return MW.join("\n")
      }
    }
    var bR = 0,
      yR = MW(39023);
    class NW {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const WW in this.files) {
          const RW = this.files[WW],
            MW = new Blob([RW], {
              type: (0, yR.d)(WW)
            });
          CW.Tools.Download(MW, WW)
        }
      }
    }
    var eW = MW(38747),
      BW = MW(38701),
      tR = MW(39108),
      TW = MW(38704),
      gR = MW(37418),
      iR = MW(35344),
      YW = MW(35373),
      JW = MW(35353);
    const PW = JW.HighestCommonFactor,
      IW = {
        ...JW,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: PW
      };
    var oW = MW(39265),
      lW = MW(38729),
      FW = MW(39072),
      fW = MW(39074),
      QW = MW(39287);
    (0, QW.RegisterDumpTools)();
    var rR = MW(37587),
      cR = MW(37593),
      XW = MW(36721),
      jR = MW(37693),
      kR = MW(38069),
      aR = MW(39258);
    let sW = 0;
    const dW = (WW, RW, MW, wW) => {
        if (!WW[MW]) {
          const CW = WW.useDelayedTextureLoading;
          WW.useDelayedTextureLoading = !1;
          const zR = WW._blockEntityCollection;
          WW._blockEntityCollection = !1;
          const AW = kR.d.CreateFromBase64String(RW, wW + sW++, WW, !0, !1, kR.d.BILINEAR_SAMPLINGMODE);
          WW._blockEntityCollection = zR;
          const bR = WW.mC().getLoadedTexturesCache(),
            yR = bR.indexOf(AW.getInternalTexture()); - 1 !== yR && bR.splice(yR, 1), AW.isRGBD = !0, AW.wrapU = kR.d.CLAMP_ADDRESSMODE, AW.wrapV = kR.d.CLAMP_ADDRESSMODE, WW[MW] = AW, WW.useDelayedTextureLoading = CW, aR.b.ExpandRGBDTexture(AW);
          const NW = WW.mC().onContextRestoredObservable.add((() => {
            AW.isRGBD = !0;
            const RW = WW.onBeforeRenderObservable.add((() => {
              AW.isReady() && (WW.onBeforeRenderObservable.remove(RW), aR.b.ExpandRGBDTexture(AW))
            }))
          }));
          WW.rMW.add((() => {
            WW.mC().onContextRestoredObservable.remove(NW)
          }))
        }
        return WW[MW]
      },
      pW = WW => dW(WW, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      hW = WW => dW(WW, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      UW = WW => dW(WW, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var EW = MW(37677),
      VW = MW(35324),
      mR = MW(37722),
      xR = MW(37858),
      vR = MW(37941);
    class KW extends xR.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let uW = (() => {
      var WW, RW, MW, wW, CW, zR, AW, bR, yR, NW;
      let eW, BW, tR, TW, gR, iR, YW, JW, PW, IW = vR.c,
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [];
      return WW = class extends IW {
        get useEnergyConservation() {
          return (0, rR.c)(this, RW, "f")
        }
        set useEnergyConservation(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, rR.c)(this, MW, "f")
        }
        set useSmithVisibilityHeightCorrelated(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get useSphericalHarmonics() {
          return (0, rR.c)(this, wW, "f")
        }
        set useSphericalHarmonics(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, rR.c)(this, CW, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(WW) {
          (0, rR.d)(this, CW, WW, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, rR.c)(this, zR, "f")
        }
        set mixIblRadianceWithIrradiance(WW) {
          (0, rR.d)(this, zR, WW, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, rR.c)(this, AW, "f")
        }
        set useLegacySpecularEnergyConservation(WW) {
          (0, rR.d)(this, AW, WW, "f")
        }
        get baseDiffuseModel() {
          return (0, rR.c)(this, bR, "f")
        }
        set baseDiffuseModel(WW) {
          (0, rR.d)(this, bR, WW, "f")
        }
        get dielectricSpecularModel() {
          return (0, rR.c)(this, yR, "f")
        }
        set dielectricSpecularModel(WW) {
          (0, rR.d)(this, yR, WW, "f")
        }
        get conductorSpecularModel() {
          return (0, rR.c)(this, NW, "f")
        }
        set conductorSpecularModel(WW) {
          (0, rR.d)(this, NW, WW, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(eW) {
          let BW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(eW, "PBRBRDF", 90, new KW, BW), this._useEnergyConservation = WW.DEFAULT_USE_ENERGY_CONSERVATION, RW.set(this, (0, rR.i)(this, oW, WW.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, rR.i)(this, lW), WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), MW.set(this, (0, rR.i)(this, FW, WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, rR.i)(this, fW), WW.DEFAULT_USE_SPHERICAL_HARMONICS), wW.set(this, (0, rR.i)(this, QW, WW.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, rR.i)(this, XW), WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), CW.set(this, (0, rR.i)(this, jR, WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, rR.i)(this, kR), WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), zR.set(this, (0, rR.i)(this, aR, WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, rR.i)(this, sW), WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), AW.set(this, (0, rR.i)(this, dW, WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, rR.i)(this, pW), WW.DEFAULT_DIFFUSE_MODEL), bR.set(this, (0, rR.i)(this, hW, WW.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, rR.i)(this, UW), WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL), yR.set(this, (0, rR.i)(this, EW, WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, rR.i)(this, VW), WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL), NW.set(this, (0, rR.i)(this, mR, WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, rR.i)(this, xR), this._internalMarkAllSubMeshesAsMiscDirty = eW._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(WW) {
          WW.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, WW.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, WW.SPHERICAL_HARMONICS = this._useSphericalHarmonics, WW.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, WW.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, WW.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, WW.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, WW.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, WW.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, CW = new WeakMap, zR = new WeakMap, AW = new WeakMap, bR = new WeakMap, yR = new WeakMap, NW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(IW[Symbol.metadata] ?? null) : void 0;
        eW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], BW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], tR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], TW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], gR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], iR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], YW = [(0, cR.D)("baseDiffuseModel"), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], JW = [(0, cR.D)("dielectricSpecularModel"), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], PW = [(0, cR.D)("conductorSpecularModel"), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], (0, rR.e)(WW, null, eW, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useEnergyConservation" in WW,
            get: WW => WW.useEnergyConservation,
            set: (WW, RW) => {
              WW.useEnergyConservation = RW
            }
          },
          metadata: RW
        }, oW, lW), (0, rR.e)(WW, null, BW, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSmithVisibilityHeightCorrelated" in WW,
            get: WW => WW.useSmithVisibilityHeightCorrelated,
            set: (WW, RW) => {
              WW.useSmithVisibilityHeightCorrelated = RW
            }
          },
          metadata: RW
        }, FW, fW), (0, rR.e)(WW, null, tR, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSphericalHarmonics" in WW,
            get: WW => WW.useSphericalHarmonics,
            set: (WW, RW) => {
              WW.useSphericalHarmonics = RW
            }
          },
          metadata: RW
        }, QW, XW), (0, rR.e)(WW, null, TW, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSpecularGlossinessInputEnergyConservation" in WW,
            get: WW => WW.useSpecularGlossinessInputEnergyConservation,
            set: (WW, RW) => {
              WW.useSpecularGlossinessInputEnergyConservation = RW
            }
          },
          metadata: RW
        }, jR, kR), (0, rR.e)(WW, null, gR, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: WW => "mixIblRadianceWithIrradiance" in WW,
            get: WW => WW.mixIblRadianceWithIrradiance,
            set: (WW, RW) => {
              WW.mixIblRadianceWithIrradiance = RW
            }
          },
          metadata: RW
        }, aR, sW), (0, rR.e)(WW, null, iR, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLegacySpecularEnergyConservation" in WW,
            get: WW => WW.useLegacySpecularEnergyConservation,
            set: (WW, RW) => {
              WW.useLegacySpecularEnergyConservation = RW
            }
          },
          metadata: RW
        }, dW, pW), (0, rR.e)(WW, null, YW, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseModel" in WW,
            get: WW => WW.baseDiffuseModel,
            set: (WW, RW) => {
              WW.baseDiffuseModel = RW
            }
          },
          metadata: RW
        }, hW, UW), (0, rR.e)(WW, null, JW, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "dielectricSpecularModel" in WW,
            get: WW => WW.dielectricSpecularModel,
            set: (WW, RW) => {
              WW.dielectricSpecularModel = RW
            }
          },
          metadata: RW
        }, EW, VW), (0, rR.e)(WW, null, PW, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "conductorSpecularModel" in WW,
            get: WW => WW.conductorSpecularModel,
            set: (WW, RW) => {
              WW.conductorSpecularModel = RW
            }
          },
          metadata: RW
        }, mR, xR), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW.DEFAULT_USE_ENERGY_CONSERVATION = !0, WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, WW.DEFAULT_USE_SPHERICAL_HARMONICS = !0, WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, WW.DEFAULT_DIFFUSE_MODEL = 0, WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, WW
    })();
    var OW = MW(37853),
      nW = MW(35376),
      GW = MW(37856),
      LW = MW(37699),
      HW = MW(37925),
      DW = MW(37917),
      qR = MW(37930),
      ZW = MW(37904);
    class SW extends xR.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let WR = (() => {
      var WW, RW, MW, wW, CW, zR, AW, bR, yR, NW;
      let eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW = vR.c,
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        KW = [],
        uW = [],
        OW = [],
        GW = [],
        LW = [],
        HW = [],
        qR = [],
        WR = [],
        RR = [],
        MR = [],
        wR = [],
        CR = [],
        zM = [],
        AR = [],
        bM = [];
      return WW = class extends QW {
        get isEnabled() {
          return (0, rR.c)(this, RW, "f")
        }
        set isEnabled(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get indexOfRefraction() {
          return (0, rR.c)(this, MW, "f")
        }
        set indexOfRefraction(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get texture() {
          return (0, rR.c)(this, wW, "f")
        }
        set texture(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, rR.c)(this, CW, "f")
        }
        set useRoughnessFromMainTexture(WW) {
          (0, rR.d)(this, CW, WW, "f")
        }
        get textureRoughness() {
          return (0, rR.c)(this, zR, "f")
        }
        set textureRoughness(WW) {
          (0, rR.d)(this, zR, WW, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, rR.c)(this, AW, "f")
        }
        set remapF0OnInterfaceChange(WW) {
          (0, rR.d)(this, AW, WW, "f")
        }
        get bumpTexture() {
          return (0, rR.c)(this, bR, "f")
        }
        set bumpTexture(WW) {
          (0, rR.d)(this, bR, WW, "f")
        }
        get isTintEnabled() {
          return (0, rR.c)(this, yR, "f")
        }
        set isTintEnabled(WW) {
          (0, rR.d)(this, yR, WW, "f")
        }
        get tintTexture() {
          return (0, rR.c)(this, NW, "f")
        }
        set tintTexture(WW) {
          (0, rR.d)(this, NW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(eW) {
          let BW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(eW, "PBRClearCoat", 100, new SW, BW), this._isEnabled = !1, RW.set(this, (0, rR.i)(this, XW, !1)), this.intensity = ((0, rR.i)(this, jR), (0, rR.i)(this, kR, 1)), this.roughness = ((0, rR.i)(this, aR), (0, rR.i)(this, sW, 0)), this._indexOfRefraction = ((0, rR.i)(this, dW), WW._DefaultIndexOfRefraction), MW.set(this, (0, rR.i)(this, pW, WW._DefaultIndexOfRefraction)), this._texture = ((0, rR.i)(this, hW), null), wW.set(this, (0, rR.i)(this, UW, null)), this._useRoughnessFromMainTexture = ((0, rR.i)(this, EW), !0), CW.set(this, (0, rR.i)(this, VW, !0)), this._textureRoughness = ((0, rR.i)(this, mR), null), zR.set(this, (0, rR.i)(this, xR, null)), this._remapF0OnInterfaceChange = ((0, rR.i)(this, KW), !0), AW.set(this, (0, rR.i)(this, uW, !0)), this._bumpTexture = ((0, rR.i)(this, OW), null), bR.set(this, (0, rR.i)(this, GW, null)), this._isTintEnabled = ((0, rR.i)(this, LW), !1), yR.set(this, (0, rR.i)(this, HW, !1)), this.tintColor = ((0, rR.i)(this, qR), (0, rR.i)(this, WR, nW.d.White())), this.tintColorAtDistance = ((0, rR.i)(this, RR), (0, rR.i)(this, MR, 1)), this.tintThickness = ((0, rR.i)(this, wR), (0, rR.i)(this, CR, 1)), this._tintTexture = ((0, rR.i)(this, zM), null), NW.set(this, (0, rR.i)(this, AR, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, rR.i)(this, bM), this._internalMarkAllSubMeshesAsTexturesDirty = eW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, RW, MW) {
          if (!this._isEnabled) return !0;
          const wW = this._material._disableBumpMap;
          if (WW._areTexturesDirty && RW.texturesEnabled) {
            if (this._texture && DW.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DW.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (MW.getCaps().standardDerivatives && this._bumpTexture && DW.e.ClearCoatBumpTextureEnabled && !wW && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && DW.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(RW, MW) {
          this._isEnabled ? (RW.CLEARCOAT = !0, RW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, RW.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, RW._areTexturesDirty && MW.texturesEnabled && (this._texture && DW.e.ClearCoatTextureEnabled ? (0, ZW.cb)(this._texture, RW, "CLEARCOAT_TEXTURE") : RW.CLEARCOAT_TEXTURE = !1, this._textureRoughness && DW.e.ClearCoatTextureEnabled ? (0, ZW.cb)(this._textureRoughness, RW, "CLEARCOAT_TEXTURE_ROUGHNESS") : RW.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && DW.e.ClearCoatBumpTextureEnabled ? (0, ZW.cb)(this._bumpTexture, RW, "CLEARCOAT_BUMP") : RW.CLEARCOAT_BUMP = !1, RW.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === WW._DefaultIndexOfRefraction, this._isTintEnabled ? (RW.CLEARCOAT_TINT = !0, this._tintTexture && DW.e.ClearCoatTintTextureEnabled ? ((0, ZW.cb)(this._tintTexture, RW, "CLEARCOAT_TINT_TEXTURE"), RW.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : RW.CLEARCOAT_TINT_TEXTURE = !1) : (RW.CLEARCOAT_TINT = !1, RW.CLEARCOAT_TINT_TEXTURE = !1))) : (RW.CLEARCOAT = !1, RW.CLEARCOAT_TEXTURE = !1, RW.CLEARCOAT_TEXTURE_ROUGHNESS = !1, RW.CLEARCOAT_BUMP = !1, RW.CLEARCOAT_TINT = !1, RW.CLEARCOAT_TINT_TEXTURE = !1, RW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, RW.CLEARCOAT_DEFAULTIOR = !1, RW.CLEARCOAT_TEXTUREDIRECTUV = 0, RW.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, RW.CLEARCOAT_BUMPDIRECTUV = 0, RW.CLEARCOAT_REMAP_F0 = !1, RW.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, RW.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(WW, RW, MW, wW) {
          if (!this._isEnabled) return;
          const CW = wW.materialDefines,
            zR = this._material.isFrozen,
            AW = this._material._disableBumpMap,
            bR = this._material._invertNormalMapX,
            yR = this._material._invertNormalMapY;
          if (!WW.useUbo || !zR || !WW.isSync) {
            (this._texture || this._textureRoughness) && DW.e.ClearCoatTextureEnabled && (WW.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, ZW.D)(this._texture, WW, "clearCoat"), this._textureRoughness && !CW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, ZW.D)(this._textureRoughness, WW, "clearCoatRoughness")), this._bumpTexture && MW.getCaps().standardDerivatives && DW.e.ClearCoatTextureEnabled && !AW && (WW.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, ZW.D)(this._bumpTexture, WW, "clearCoatBump"), RW._mirroredCameraPosition ? WW.updateFloat2("vClearCoatTangentSpaceParams", bR ? 1 : -1, yR ? 1 : -1) : WW.updateFloat2("vClearCoatTangentSpaceParams", bR ? -1 : 1, yR ? -1 : 1)), this._tintTexture && DW.e.ClearCoatTintTextureEnabled && (WW.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, ZW.D)(this._tintTexture, WW, "clearCoatTint")), WW.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const wW = 1 - this._indexOfRefraction,
              zR = 1 + this._indexOfRefraction,
              NW = Math.pow(-wW / zR, 2),
              eW = 1 / this._indexOfRefraction;
            WW.updateFloat4("vClearCoatRefractionParams", NW, eW, wW, zR), this._isTintEnabled && (WW.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), WW.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          RW.texturesEnabled && (this._texture && DW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !CW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && DW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && MW.getCaps().standardDerivatives && DW.e.ClearCoatBumpTextureEnabled && !AW && WW.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && DW.e.ClearCoatTintTextureEnabled && WW.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(WW) {
          return this._texture === WW || (this._textureRoughness === WW || (this._bumpTexture === WW || this._tintTexture === WW))
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._textureRoughness && WW.push(this._textureRoughness), this._bumpTexture && WW.push(this._bumpTexture), this._tintTexture && WW.push(this._tintTexture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && WW.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && WW.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && WW.push(this._tintTexture)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(WW, RW, MW) {
          return WW.CLEARCOAT_BUMP && RW.addFallback(MW++, "CLEARCOAT_BUMP"), WW.CLEARCOAT_TINT && RW.addFallback(MW++, "CLEARCOAT_TINT"), WW.CLEARCOAT && RW.addFallback(MW++, "CLEARCOAT"), MW
        }
        getSamplers(WW) {
          WW.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, CW = new WeakMap, zR = new WeakMap, AW = new WeakMap, bR = new WeakMap, yR = new WeakMap, NW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(QW[Symbol.metadata] ?? null) : void 0;
        eW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, cR.D)()], tR = [(0, cR.D)()], TW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], PW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, cR.m)()], lW = [(0, cR.D)()], FW = [(0, cR.D)()], fW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], (0, rR.e)(WW, null, eW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: RW
        }, XW, jR), (0, rR.e)(WW, null, TW, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, RW) => {
              WW.indexOfRefraction = RW
            }
          },
          metadata: RW
        }, pW, hW), (0, rR.e)(WW, null, gR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, RW) => {
              WW.texture = RW
            }
          },
          metadata: RW
        }, UW, EW), (0, rR.e)(WW, null, iR, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMainTexture" in WW,
            get: WW => WW.useRoughnessFromMainTexture,
            set: (WW, RW) => {
              WW.useRoughnessFromMainTexture = RW
            }
          },
          metadata: RW
        }, VW, mR), (0, rR.e)(WW, null, YW, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRoughness" in WW,
            get: WW => WW.textureRoughness,
            set: (WW, RW) => {
              WW.textureRoughness = RW
            }
          },
          metadata: RW
        }, xR, KW), (0, rR.e)(WW, null, JW, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: WW => "remapF0OnInterfaceChange" in WW,
            get: WW => WW.remapF0OnInterfaceChange,
            set: (WW, RW) => {
              WW.remapF0OnInterfaceChange = RW
            }
          },
          metadata: RW
        }, uW, OW), (0, rR.e)(WW, null, PW, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpTexture" in WW,
            get: WW => WW.bumpTexture,
            set: (WW, RW) => {
              WW.bumpTexture = RW
            }
          },
          metadata: RW
        }, GW, LW), (0, rR.e)(WW, null, IW, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isTintEnabled" in WW,
            get: WW => WW.isTintEnabled,
            set: (WW, RW) => {
              WW.isTintEnabled = RW
            }
          },
          metadata: RW
        }, HW, qR), (0, rR.e)(WW, null, fW, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintTexture" in WW,
            get: WW => WW.tintTexture,
            set: (WW, RW) => {
              WW.tintTexture = RW
            }
          },
          metadata: RW
        }, AR, bM), (0, rR.e)(null, null, BW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, RW) => {
              WW.intensity = RW
            }
          },
          metadata: RW
        }, kR, aR), (0, rR.e)(null, null, tR, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, RW) => {
              WW.roughness = RW
            }
          },
          metadata: RW
        }, sW, dW), (0, rR.e)(null, null, oW, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColor" in WW,
            get: WW => WW.tintColor,
            set: (WW, RW) => {
              WW.tintColor = RW
            }
          },
          metadata: RW
        }, WR, RR), (0, rR.e)(null, null, lW, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColorAtDistance" in WW,
            get: WW => WW.tintColorAtDistance,
            set: (WW, RW) => {
              WW.tintColorAtDistance = RW
            }
          },
          metadata: RW
        }, MR, wR), (0, rR.e)(null, null, FW, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintThickness" in WW,
            get: WW => WW.tintThickness,
            set: (WW, RW) => {
              WW.tintThickness = RW
            }
          },
          metadata: RW
        }, CR, zM), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW._DefaultIndexOfRefraction = 1.5, WW
    })();
    class RR extends xR.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let MR = (() => {
      var WW, RW, MW, wW;
      let CW, zR, AW, bR, yR, NW, eW, BW = vR.c,
        tR = [],
        TW = [],
        gR = [],
        iR = [],
        YW = [],
        JW = [],
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        XW = [];
      return WW = class extends BW {
        get isEnabled() {
          return (0, rR.c)(this, RW, "f")
        }
        set isEnabled(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get texture() {
          return (0, rR.c)(this, MW, "f")
        }
        set texture(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get thicknessTexture() {
          return (0, rR.c)(this, wW, "f")
        }
        set thicknessTexture(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(CW) {
          let zR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(CW, "PBRIridescence", 110, new RR, zR), this._isEnabled = !1, RW.set(this, (0, rR.i)(this, tR, !1)), this.intensity = ((0, rR.i)(this, TW), (0, rR.i)(this, gR, 1)), this.minimumThickness = ((0, rR.i)(this, iR), (0, rR.i)(this, YW, WW._DefaultMinimumThickness)), this.maximumThickness = ((0, rR.i)(this, JW), (0, rR.i)(this, PW, WW._DefaultMaximumThickness)), this.indexOfRefraction = ((0, rR.i)(this, IW), (0, rR.i)(this, oW, WW._DefaultIndexOfRefraction)), this._texture = ((0, rR.i)(this, lW), null), MW.set(this, (0, rR.i)(this, FW, null)), this._thicknessTexture = ((0, rR.i)(this, fW), null), wW.set(this, (0, rR.i)(this, QW, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, rR.i)(this, XW), this._internalMarkAllSubMeshesAsTexturesDirty = CW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, RW) {
          if (!this._isEnabled) return !0;
          if (WW._areTexturesDirty && RW.texturesEnabled) {
            if (this._texture && DW.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && DW.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, RW) {
          this._isEnabled ? (WW.IRIDESCENCE = !0, WW._areTexturesDirty && RW.texturesEnabled && (this._texture && DW.e.IridescenceTextureEnabled ? (0, ZW.cb)(this._texture, WW, "IRIDESCENCE_TEXTURE") : WW.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && DW.e.IridescenceTextureEnabled ? (0, ZW.cb)(this._thicknessTexture, WW, "IRIDESCENCE_THICKNESS_TEXTURE") : WW.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (WW.IRIDESCENCE = !1, WW.IRIDESCENCE_TEXTURE = !1, WW.IRIDESCENCE_THICKNESS_TEXTURE = !1, WW.IRIDESCENCE_TEXTUREDIRECTUV = 0, WW.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(WW, RW) {
          if (!this._isEnabled) return;
          const MW = this._material.isFrozen;
          WW.useUbo && MW && WW.isSync || ((this._texture || this._thicknessTexture) && DW.e.IridescenceTextureEnabled && (WW.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, ZW.D)(this._texture, WW, "iridescence"), this._thicknessTexture && (0, ZW.D)(this._thicknessTexture, WW, "iridescenceThickness")), WW.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), RW.texturesEnabled && (this._texture && DW.e.IridescenceTextureEnabled && WW.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && DW.e.IridescenceTextureEnabled && WW.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(WW) {
          return this._texture === WW || this._thicknessTexture === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._thicknessTexture && WW.push(this._thicknessTexture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && WW.push(this._thicknessTexture)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(WW, RW, MW) {
          return WW.IRIDESCENCE && RW.addFallback(MW++, "IRIDESCENCE"), MW
        }
        getSamplers(WW) {
          WW.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(BW[Symbol.metadata] ?? null) : void 0;
        CW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, cR.D)()], AW = [(0, cR.D)()], bR = [(0, cR.D)()], yR = [(0, cR.D)()], NW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], (0, rR.e)(WW, null, CW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: RW
        }, tR, TW), (0, rR.e)(WW, null, NW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, RW) => {
              WW.texture = RW
            }
          },
          metadata: RW
        }, FW, fW), (0, rR.e)(WW, null, eW, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "thicknessTexture" in WW,
            get: WW => WW.thicknessTexture,
            set: (WW, RW) => {
              WW.thicknessTexture = RW
            }
          },
          metadata: RW
        }, QW, XW), (0, rR.e)(null, null, zR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, RW) => {
              WW.intensity = RW
            }
          },
          metadata: RW
        }, gR, iR), (0, rR.e)(null, null, AW, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "minimumThickness" in WW,
            get: WW => WW.minimumThickness,
            set: (WW, RW) => {
              WW.minimumThickness = RW
            }
          },
          metadata: RW
        }, YW, JW), (0, rR.e)(null, null, bR, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "maximumThickness" in WW,
            get: WW => WW.maximumThickness,
            set: (WW, RW) => {
              WW.maximumThickness = RW
            }
          },
          metadata: RW
        }, PW, IW), (0, rR.e)(null, null, yR, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, RW) => {
              WW.indexOfRefraction = RW
            }
          },
          metadata: RW
        }, oW, lW), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW._DefaultMinimumThickness = 100, WW._DefaultMaximumThickness = 400, WW._DefaultIndexOfRefraction = 1.3, WW
    })();
    class wR extends xR.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let CR = (() => {
      var WW, RW, MW, wW;
      let CW, zR, AW, bR, yR, NW = vR.c,
        eW = [],
        BW = [],
        tR = [],
        TW = [],
        gR = [],
        iR = [],
        YW = [],
        JW = [],
        PW = [],
        IW = [];
      return WW = class extends NW {
        get isEnabled() {
          return (0, rR.c)(this, RW, "f")
        }
        set isEnabled(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        set angle(WW) {
          this.direction.x = Math.cos(WW), this.direction.y = Math.sin(WW)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, rR.c)(this, MW, "f")
        }
        set texture(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get legacy() {
          return (0, rR.c)(this, wW, "f")
        }
        set legacy(WW) {
          (0, rR.d)(this, wW, WW, "f")
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
        constructor(WW) {
          let CW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "PBRAnisotropic", 110, new wR, CW), this._isEnabled = !1, RW.set(this, (0, rR.i)(this, eW, !1)), this.intensity = ((0, rR.i)(this, BW), (0, rR.i)(this, tR, 1)), this.direction = ((0, rR.i)(this, TW), (0, rR.i)(this, gR, new VW.n(1, 0))), this._texture = ((0, rR.i)(this, iR), null), MW.set(this, (0, rR.i)(this, YW, null)), this._legacy = ((0, rR.i)(this, JW), !1), wW.set(this, (0, rR.i)(this, PW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, rR.i)(this, IW), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = WW._dirtyCallbacks[16]
        }
        isReadyForSubMesh(WW, RW) {
          return !this._isEnabled || !(WW._areTexturesDirty && RW.texturesEnabled && this._texture && DW.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(WW, RW, MW) {
          this._isEnabled ? (WW.ANISOTROPIC = this._isEnabled, this._isEnabled && !MW.isVerticesDataPresent(mR.j.TangentKind) && (WW._needUVs = !0, WW.MAINUV1 = !0), WW._areTexturesDirty && RW.texturesEnabled && (this._texture && DW.e.AnisotropicTextureEnabled ? (0, ZW.cb)(this._texture, WW, "ANISOTROPIC_TEXTURE") : WW.ANISOTROPIC_TEXTURE = !1), WW._areMiscDirty && (WW.ANISOTROPIC_LEGACY = this._legacy)) : (WW.ANISOTROPIC = !1, WW.ANISOTROPIC_TEXTURE = !1, WW.ANISOTROPIC_TEXTUREDIRECTUV = 0, WW.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(WW, RW) {
          if (!this._isEnabled) return;
          const MW = this._material.isFrozen;
          WW.useUbo && MW && WW.isSync || (this._texture && DW.e.AnisotropicTextureEnabled && (WW.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, ZW.D)(this._texture, WW, "anisotropy")), WW.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), RW.texturesEnabled && this._texture && DW.e.AnisotropicTextureEnabled && WW.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(WW) {
          return this._texture === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture)
        }
        dispose(WW) {
          WW && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(WW, RW, MW) {
          return WW.ANISOTROPIC && RW.addFallback(MW++, "ANISOTROPIC"), MW
        }
        getSamplers(WW) {
          WW.push("anisotropySampler")
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
        parse(WW, RW, MW) {
          super.parse(WW, RW, MW), void 0 === WW.legacy && (this.legacy = !0)
        }
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(NW[Symbol.metadata] ?? null) : void 0;
        CW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, cR.D)()], AW = [(0, cR.z)()], bR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], yR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], (0, rR.e)(WW, null, CW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: RW
        }, eW, BW), (0, rR.e)(WW, null, bR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, RW) => {
              WW.texture = RW
            }
          },
          metadata: RW
        }, YW, JW), (0, rR.e)(WW, null, yR, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: WW => "legacy" in WW,
            get: WW => WW.legacy,
            set: (WW, RW) => {
              WW.legacy = RW
            }
          },
          metadata: RW
        }, PW, IW), (0, rR.e)(null, null, zR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, RW) => {
              WW.intensity = RW
            }
          },
          metadata: RW
        }, tR, TW), (0, rR.e)(null, null, AW, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: WW => "direction" in WW,
            get: WW => WW.direction,
            set: (WW, RW) => {
              WW.direction = RW
            }
          },
          metadata: RW
        }, gR, iR), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW
    })();
    class zM extends xR.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let AR = (() => {
      var WW, RW, MW, wW, CW, zR, AW, bR;
      let yR, NW, eW, BW, tR, TW, gR, iR, YW, JW = vR.c,
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [];
      return WW = class extends JW {
        get isEnabled() {
          return (0, rR.c)(this, RW, "f")
        }
        set isEnabled(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, rR.c)(this, MW, "f")
        }
        set linkSheenWithAlbedo(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get texture() {
          return (0, rR.c)(this, wW, "f")
        }
        set texture(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, rR.c)(this, CW, "f")
        }
        set useRoughnessFromMainTexture(WW) {
          (0, rR.d)(this, CW, WW, "f")
        }
        get roughness() {
          return (0, rR.c)(this, zR, "f")
        }
        set roughness(WW) {
          (0, rR.d)(this, zR, WW, "f")
        }
        get textureRoughness() {
          return (0, rR.c)(this, AW, "f")
        }
        set textureRoughness(WW) {
          (0, rR.d)(this, AW, WW, "f")
        }
        get albedoScaling() {
          return (0, rR.c)(this, bR, "f")
        }
        set albedoScaling(WW) {
          (0, rR.d)(this, bR, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(WW) {
          let yR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "Sheen", 120, new zM, yR), this._isEnabled = !1, RW.set(this, (0, rR.i)(this, PW, !1)), this._linkSheenWithAlbedo = ((0, rR.i)(this, IW), !1), MW.set(this, (0, rR.i)(this, oW, !1)), this.intensity = ((0, rR.i)(this, lW), (0, rR.i)(this, FW, 1)), this.color = ((0, rR.i)(this, fW), (0, rR.i)(this, QW, nW.d.White())), this._texture = ((0, rR.i)(this, XW), null), wW.set(this, (0, rR.i)(this, jR, null)), this._useRoughnessFromMainTexture = ((0, rR.i)(this, kR), !0), CW.set(this, (0, rR.i)(this, aR, !0)), this._roughness = ((0, rR.i)(this, sW), null), zR.set(this, (0, rR.i)(this, dW, null)), this._textureRoughness = ((0, rR.i)(this, pW), null), AW.set(this, (0, rR.i)(this, hW, null)), this._albedoScaling = ((0, rR.i)(this, UW), !1), bR.set(this, (0, rR.i)(this, EW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, rR.i)(this, VW), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, RW) {
          if (!this._isEnabled) return !0;
          if (WW._areTexturesDirty && RW.texturesEnabled) {
            if (this._texture && DW.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DW.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, RW) {
          this._isEnabled ? (WW.SHEEN = !0, WW.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, WW.SHEEN_ROUGHNESS = null !== this._roughness, WW.SHEEN_ALBEDOSCALING = this._albedoScaling, WW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, WW._areTexturesDirty && RW.texturesEnabled && (this._texture && DW.e.SheenTextureEnabled ? ((0, ZW.cb)(this._texture, WW, "SHEEN_TEXTURE"), WW.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : WW.SHEEN_TEXTURE = !1, this._textureRoughness && DW.e.SheenTextureEnabled ? (0, ZW.cb)(this._textureRoughness, WW, "SHEEN_TEXTURE_ROUGHNESS") : WW.SHEEN_TEXTURE_ROUGHNESS = !1)) : (WW.SHEEN = !1, WW.SHEEN_TEXTURE = !1, WW.SHEEN_TEXTURE_ROUGHNESS = !1, WW.SHEEN_LINKWITHALBEDO = !1, WW.SHEEN_ROUGHNESS = !1, WW.SHEEN_ALBEDOSCALING = !1, WW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, WW.SHEEN_GAMMATEXTURE = !1, WW.SHEEN_TEXTUREDIRECTUV = 0, WW.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(WW, RW, MW, wW) {
          if (!this._isEnabled) return;
          const CW = wW.materialDefines,
            zR = this._material.isFrozen;
          WW.useUbo && zR && WW.isSync || ((this._texture || this._textureRoughness) && DW.e.SheenTextureEnabled && (WW.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, ZW.D)(this._texture, WW, "sheen"), this._textureRoughness && !CW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, ZW.D)(this._textureRoughness, WW, "sheenRoughness")), WW.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && WW.updateFloat("vSheenRoughness", this._roughness)), RW.texturesEnabled && (this._texture && DW.e.SheenTextureEnabled && WW.setTexture("sheenSampler", this._texture), this._textureRoughness && !CW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && DW.e.SheenTextureEnabled && WW.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(WW) {
          return this._texture === WW || this._textureRoughness === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._textureRoughness && WW.push(this._textureRoughness)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && WW.push(this._textureRoughness)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(WW, RW, MW) {
          return WW.SHEEN && RW.addFallback(MW++, "SHEEN"), MW
        }
        getSamplers(WW) {
          WW.push("sheenSampler", "sheenRoughnessSampler")
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
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, CW = new WeakMap, zR = new WeakMap, AW = new WeakMap, bR = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(JW[Symbol.metadata] ?? null) : void 0;
        yR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, cR.D)()], BW = [(0, cR.m)()], tR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], (0, rR.e)(WW, null, yR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: RW
        }, PW, IW), (0, rR.e)(WW, null, NW, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: WW => "linkSheenWithAlbedo" in WW,
            get: WW => WW.linkSheenWithAlbedo,
            set: (WW, RW) => {
              WW.linkSheenWithAlbedo = RW
            }
          },
          metadata: RW
        }, oW, lW), (0, rR.e)(WW, null, tR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, RW) => {
              WW.texture = RW
            }
          },
          metadata: RW
        }, jR, kR), (0, rR.e)(WW, null, TW, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMainTexture" in WW,
            get: WW => WW.useRoughnessFromMainTexture,
            set: (WW, RW) => {
              WW.useRoughnessFromMainTexture = RW
            }
          },
          metadata: RW
        }, aR, sW), (0, rR.e)(WW, null, gR, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, RW) => {
              WW.roughness = RW
            }
          },
          metadata: RW
        }, dW, pW), (0, rR.e)(WW, null, iR, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRoughness" in WW,
            get: WW => WW.textureRoughness,
            set: (WW, RW) => {
              WW.textureRoughness = RW
            }
          },
          metadata: RW
        }, hW, UW), (0, rR.e)(WW, null, YW, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoScaling" in WW,
            get: WW => WW.albedoScaling,
            set: (WW, RW) => {
              WW.albedoScaling = RW
            }
          },
          metadata: RW
        }, EW, VW), (0, rR.e)(null, null, eW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, RW) => {
              WW.intensity = RW
            }
          },
          metadata: RW
        }, FW, fW), (0, rR.e)(null, null, BW, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: WW => "color" in WW,
            get: WW => WW.color,
            set: (WW, RW) => {
              WW.color = RW
            }
          },
          metadata: RW
        }, QW, XW), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW
    })();
    class bM extends xR.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let yM = (() => {
      var WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW;
      let JW, PW, IW, oW, lW, FW, fW, QW, XW, jR, kR, aR, sW, dW, pW, hW, UW, EW, mR, xR, KW, uW, OW, GW, LW, HW, qR, SW, WR, RR, MR = vR.c,
        wR = [],
        CR = [],
        zM = [],
        AR = [],
        yM = [],
        NR = [],
        eR = [],
        BR = [],
        tM = [],
        TR = [],
        gM = [],
        iM = [],
        YR = [],
        JR = [],
        PR = [],
        IR = [],
        oR = [],
        lR = [],
        FR = [],
        fR = [],
        QR = [],
        rM = [],
        cM = [],
        XR = [],
        jM = [],
        kM = [],
        aM = [],
        sR = [],
        dR = [],
        pR = [],
        hR = [],
        UR = [],
        ER = [],
        VR = [],
        mM = [],
        xM = [],
        vM = [],
        KR = [],
        uR = [],
        OR = [],
        nR = [],
        GR = [],
        LR = [],
        HR = [],
        DR = [],
        qM = [],
        ZR = [],
        SR = [],
        WM = [],
        RM = [],
        MM = [],
        wM = [],
        CM = [],
        zw = [],
        AM = [],
        bw = [],
        yw = [],
        NM = [],
        eM = [],
        BM = [];
      return WW = class extends MR {
        get isRefractionEnabled() {
          return (0, rR.c)(this, RW, "f")
        }
        set isRefractionEnabled(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get isTranslucencyEnabled() {
          return (0, rR.c)(this, MW, "f")
        }
        set isTranslucencyEnabled(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get isDispersionEnabled() {
          return (0, rR.c)(this, wW, "f")
        }
        set isDispersionEnabled(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        get isScatteringEnabled() {
          return (0, rR.c)(this, CW, "f")
        }
        set isScatteringEnabled(WW) {
          (0, rR.d)(this, CW, WW, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(WW) {
          this._scene.enableSubSurfaceForPrePass() && WW && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(WW))
        }
        get useAlbedoToTintRefraction() {
          return (0, rR.c)(this, zR, "f")
        }
        set useAlbedoToTintRefraction(WW) {
          (0, rR.d)(this, zR, WW, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, rR.c)(this, AW, "f")
        }
        set useAlbedoToTintTranslucency(WW) {
          (0, rR.d)(this, AW, WW, "f")
        }
        get thicknessTexture() {
          return (0, rR.c)(this, bR, "f")
        }
        set thicknessTexture(WW) {
          (0, rR.d)(this, bR, WW, "f")
        }
        get refractionTexture() {
          return (0, rR.c)(this, yR, "f")
        }
        set refractionTexture(WW) {
          (0, rR.d)(this, yR, WW, "f")
        }
        get indexOfRefraction() {
          return (0, rR.c)(this, NW, "f")
        }
        set indexOfRefraction(WW) {
          (0, rR.d)(this, NW, WW, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(WW) {
          const RW = WW >= 1 ? WW : -1;
          this._volumeIndexOfRefraction !== RW && (this._volumeIndexOfRefraction = RW, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, rR.c)(this, eW, "f")
        }
        set invertRefractionY(WW) {
          (0, rR.d)(this, eW, WW, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, rR.c)(this, BW, "f")
        }
        set linkRefractionWithTransparency(WW) {
          (0, rR.d)(this, BW, WW, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, rR.c)(this, tR, "f")
        }
        set useMaskFromThicknessTexture(WW) {
          (0, rR.d)(this, tR, WW, "f")
        }
        get refractionIntensityTexture() {
          return (0, rR.c)(this, TW, "f")
        }
        set refractionIntensityTexture(WW) {
          (0, rR.d)(this, TW, WW, "f")
        }
        get translucencyIntensityTexture() {
          return (0, rR.c)(this, gR, "f")
        }
        set translucencyIntensityTexture(WW) {
          (0, rR.d)(this, gR, WW, "f")
        }
        get translucencyColorTexture() {
          return (0, rR.c)(this, iR, "f")
        }
        set translucencyColorTexture(WW) {
          (0, rR.d)(this, iR, WW, "f")
        }
        get useGltfStyleTextures() {
          return (0, rR.c)(this, YW, "f")
        }
        set useGltfStyleTextures(WW) {
          (0, rR.d)(this, YW, WW, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(WW) {
          this.legacyTranslucency = WW
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
        constructor(JW) {
          let PW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JW, "PBRSubSurface", 130, new bM, PW), this._isRefractionEnabled = !1, RW.set(this, (0, rR.i)(this, wR, !1)), this._isTranslucencyEnabled = ((0, rR.i)(this, CR), !1), MW.set(this, (0, rR.i)(this, zM, !1)), this._isDispersionEnabled = ((0, rR.i)(this, AR), !1), wW.set(this, (0, rR.i)(this, yM, !1)), this._isScatteringEnabled = ((0, rR.i)(this, NR), !1), CW.set(this, (0, rR.i)(this, eR, !1)), this._scatteringDiffusionProfileIndex = ((0, rR.i)(this, BR), (0, rR.i)(this, tM, 0)), this.refractionIntensity = ((0, rR.i)(this, TR), (0, rR.i)(this, gM, 1)), this.translucencyIntensity = ((0, rR.i)(this, iM), (0, rR.i)(this, YR, 1)), this._useAlbedoToTintRefraction = ((0, rR.i)(this, JR), !1), zR.set(this, (0, rR.i)(this, PR, !1)), this._useAlbedoToTintTranslucency = ((0, rR.i)(this, IR), !1), AW.set(this, (0, rR.i)(this, oR, !1)), this._thicknessTexture = ((0, rR.i)(this, lR), null), bR.set(this, (0, rR.i)(this, FR, null)), this._refractionTexture = ((0, rR.i)(this, fR), null), yR.set(this, (0, rR.i)(this, QR, null)), this._indexOfRefraction = ((0, rR.i)(this, rM), 1.5), NW.set(this, (0, rR.i)(this, cM, 1.5)), this._volumeIndexOfRefraction = ((0, rR.i)(this, XR), (0, rR.i)(this, jM, -1)), this._invertRefractionY = ((0, rR.i)(this, kM), !1), eW.set(this, (0, rR.i)(this, aM, !1)), this._linkRefractionWithTransparency = ((0, rR.i)(this, sR), !1), BW.set(this, (0, rR.i)(this, dR, !1)), this.minimumThickness = ((0, rR.i)(this, pR), (0, rR.i)(this, hR, 0)), this.maximumThickness = ((0, rR.i)(this, UR), (0, rR.i)(this, ER, 1)), this.useThicknessAsDepth = ((0, rR.i)(this, VR), (0, rR.i)(this, mM, !1)), this.tintColor = ((0, rR.i)(this, xM), (0, rR.i)(this, vM, nW.d.White())), this.tintColorAtDistance = ((0, rR.i)(this, KR), (0, rR.i)(this, uR, 1)), this.dispersion = ((0, rR.i)(this, OR), (0, rR.i)(this, nR, 0)), this.diffusionDistance = ((0, rR.i)(this, GR), (0, rR.i)(this, LR, nW.d.White())), this._useMaskFromThicknessTexture = ((0, rR.i)(this, HR), !1), tR.set(this, (0, rR.i)(this, DR, !1)), this._refractionIntensityTexture = ((0, rR.i)(this, qM), null), TW.set(this, (0, rR.i)(this, ZR, null)), this._translucencyIntensityTexture = ((0, rR.i)(this, SR), null), gR.set(this, (0, rR.i)(this, WM, null)), this.translucencyColor = ((0, rR.i)(this, RM), (0, rR.i)(this, MM, null)), this._translucencyColorTexture = ((0, rR.i)(this, wM), null), iR.set(this, (0, rR.i)(this, CM, null)), this._useGltfStyleTextures = ((0, rR.i)(this, zw), !0), YW.set(this, (0, rR.i)(this, AM, !0)), this.applyAlbedoAfterSubSurface = ((0, rR.i)(this, bw), (0, rR.i)(this, yw, WW.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, rR.i)(this, NM), (0, rR.i)(this, eM, WW.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, rR.i)(this, BM), this._scene = JW.QRW(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = JW._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = JW._dirtyCallbacks[32]
        }
        isReadyForSubMesh(WW, RW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (WW._areTexturesDirty && RW.texturesEnabled) {
            if (this._thicknessTexture && DW.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && DW.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && DW.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && DW.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const WW = this._getRefractionTexture(RW);
            if (WW && DW.e.RefractionTextureEnabled && !WW.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, RW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return WW.SUBSURFACE = !1, WW.SS_DISPERSION = !1, WW.SS_TRANSLUCENCY = !1, WW.SS_SCATTERING = !1, WW.SS_REFRACTION = !1, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_THICKNESSANDMASK_TEXTURE = !1, WW.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, WW.SS_HAS_THICKNESS = !1, WW.SS_REFRACTIONINTENSITY_TEXTURE = !1, WW.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, WW.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, WW.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, WW.SS_REFRACTIONMAP_3D = !1, WW.SS_REFRACTIONMAP_OPPOSITEZ = !1, WW.SS_LODINREFRACTIONALPHA = !1, WW.SS_GAMMAREFRACTION = !1, WW.SS_RGBDREFRACTION = !1, WW.SS_LINEARSPECULARREFRACTION = !1, WW.SS_LINKREFRACTIONTOTRANSPARENCY = !1, WW.SS_ALBEDOFORREFRACTIONTINT = !1, WW.SS_ALBEDOFORTRANSLUCENCYTINT = !1, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, WW.SS_USE_THICKNESS_AS_DEPTH = !1, WW.SS_USE_GLTF_TEXTURES = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, WW.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(WW.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (WW._areTexturesDirty) {
            if (WW.SUBSURFACE = !0, WW.SS_DISPERSION = this._isDispersionEnabled, WW.SS_TRANSLUCENCY = this._isTranslucencyEnabled, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, WW.SS_SCATTERING = this._isScatteringEnabled, WW.SS_THICKNESSANDMASK_TEXTURE = !1, WW.SS_REFRACTIONINTENSITY_TEXTURE = !1, WW.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, WW.SS_HAS_THICKNESS = !1, WW.SS_USE_GLTF_TEXTURES = !1, WW.SS_REFRACTION = !1, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_REFRACTIONMAP_3D = !1, WW.SS_GAMMAREFRACTION = !1, WW.SS_RGBDREFRACTION = !1, WW.SS_LINEARSPECULARREFRACTION = !1, WW.SS_REFRACTIONMAP_OPPOSITEZ = !1, WW.SS_LODINREFRACTIONALPHA = !1, WW.SS_LINKREFRACTIONTOTRANSPARENCY = !1, WW.SS_ALBEDOFORREFRACTIONTINT = !1, WW.SS_ALBEDOFORTRANSLUCENCYTINT = !1, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, WW.SS_USE_THICKNESS_AS_DEPTH = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, WW.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, WW._areTexturesDirty && RW.texturesEnabled && (this._thicknessTexture && DW.e.ThicknessTextureEnabled && (0, ZW.cb)(this._thicknessTexture, WW, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && DW.e.RefractionIntensityTextureEnabled && (0, ZW.cb)(this._refractionIntensityTexture, WW, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && DW.e.TranslucencyIntensityTextureEnabled && (0, ZW.cb)(this._translucencyIntensityTexture, WW, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && DW.e.TranslucencyColorTextureEnabled && ((0, ZW.cb)(this._translucencyColorTexture, WW, "SS_TRANSLUCENCYCOLOR_TEXTURE"), WW.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), WW.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, WW.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && RW.texturesEnabled) {
              const MW = this._getRefractionTexture(RW);
              MW && DW.e.RefractionTextureEnabled && (WW.SS_REFRACTION = !0, WW.SS_REFRACTIONMAP_3D = MW.isCube, WW.SS_GAMMAREFRACTION = MW.gammaSpace, WW.SS_RGBDREFRACTION = MW.isRGBD, WW.SS_LINEARSPECULARREFRACTION = MW.linearSpecularLOD, WW.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && MW.isCube ? !MW.invertZ : MW.invertZ, WW.SS_LODINREFRACTIONALPHA = MW.lodLevelInAlpha, WW.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, WW.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = MW.isCube && MW.boundingBoxSize, WW.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (WW.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(WW, RW, MW, wW) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) WW.updateFloat2("vThicknessParam", 0, 0);
            else {
              wW.getRenderingMesh().getWorldMatrix().decompose(VW.k.vC[0]);
              const RW = Math.max(Math.abs(VW.k.vC[0].x), Math.abs(VW.k.vC[0].y), Math.abs(VW.k.vC[0].z));
              WW.updateFloat2("vThicknessParam", this.minimumThickness * RW, (this.maximumThickness - this.minimumThickness) * RW)
            }
        }
        bindForSubMesh(WW, RW, MW, wW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const CW = wW.materialDefines,
            zR = this._material.isFrozen,
            AW = this._material.realTimeFiltering,
            bR = CW.LODBASEDMICROSFURACE,
            yR = this._getRefractionTexture(RW);
          if (!WW.useUbo || !zR || !WW.isSync) {
            if (this._thicknessTexture && DW.e.ThicknessTextureEnabled && (WW.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, ZW.D)(this._thicknessTexture, WW, "thickness")), this._refractionIntensityTexture && DW.e.RefractionIntensityTextureEnabled && CW.SS_REFRACTIONINTENSITY_TEXTURE && (WW.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, ZW.D)(this._refractionIntensityTexture, WW, "refractionIntensity")), this._translucencyColorTexture && DW.e.TranslucencyColorTextureEnabled && CW.SS_TRANSLUCENCYCOLOR_TEXTURE && (WW.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, ZW.D)(this._translucencyColorTexture, WW, "translucencyColor")), this._translucencyIntensityTexture && DW.e.TranslucencyIntensityTextureEnabled && CW.SS_TRANSLUCENCYINTENSITY_TEXTURE && (WW.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, ZW.D)(this._translucencyIntensityTexture, WW, "translucencyIntensity")), yR && DW.e.RefractionTextureEnabled) {
              WW.aAW("refractionMatrix", yR.getRefractionTextureMatrix());
              let RW = 1;
              yR.isCube || yR.depth && (RW = yR.depth);
              const MW = yR.getSize().width,
                wW = this.volumeIndexOfRefraction;
              if (WW.updateFloat4("vRefractionInfos", yR.level, 1 / wW, RW, this._invertRefractionY ? -1 : 1), WW.updateFloat4("vRefractionMicrosurfaceInfos", MW, yR.lodGenerationScale, yR.lodGenerationOffset, 1 / this.indexOfRefraction), AW && WW.updateFloat2("vRefractionFilteringInfo", MW, Math.log2(MW)), yR.boundingBoxSize) {
                const RW = yR;
                WW.updateVector3("vRefractionPosition", RW.boundingBoxPosition), WW.updateVector3("vRefractionSize", RW.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && WW.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), WW.updateColor3("vDiffusionDistance", this.diffusionDistance), WW.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), WW.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), WW.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), WW.updateFloat("dispersion", this.dispersion)
          }
          RW.texturesEnabled && (this._thicknessTexture && DW.e.ThicknessTextureEnabled && WW.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && DW.e.RefractionIntensityTextureEnabled && CW.SS_REFRACTIONINTENSITY_TEXTURE && WW.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && DW.e.TranslucencyIntensityTextureEnabled && CW.SS_TRANSLUCENCYINTENSITY_TEXTURE && WW.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && DW.e.TranslucencyColorTextureEnabled && CW.SS_TRANSLUCENCYCOLOR_TEXTURE && WW.setTexture("translucencyColorSampler", this._translucencyColorTexture), yR && DW.e.RefractionTextureEnabled && (bR ? WW.setTexture("refractionSampler", yR) : (WW.setTexture("refractionSampler", yR._lodTextureMid || yR), WW.setTexture("refractionSamplerLow", yR._lodTextureLow || yR), WW.setTexture("refractionSamplerHigh", yR._lodTextureHigh || yR))))
        }
        _getRefractionTexture(WW) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? WW.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(WW) {
          DW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && WW.push(this._refractionTexture)
        }
        hasTexture(WW) {
          return this._thicknessTexture === WW || (this._refractionTexture === WW || (this._refractionIntensityTexture === WW || (this._translucencyIntensityTexture === WW || this._translucencyColorTexture === WW)))
        }
        hasRenderTargetTextures() {
          return !!(DW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(WW) {
          this._thicknessTexture && WW.push(this._thicknessTexture), this._refractionTexture && WW.push(this._refractionTexture), this._refractionIntensityTexture && WW.push(this._refractionIntensityTexture), this._translucencyColorTexture && WW.push(this._translucencyColorTexture), this._translucencyIntensityTexture && WW.push(this._translucencyIntensityTexture)
        }
        getAnimatables(WW) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && WW.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && WW.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && WW.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && WW.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && WW.push(this._translucencyIntensityTexture)
        }
        dispose(WW) {
          WW && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(WW, RW, MW) {
          return WW.SS_SCATTERING && RW.addFallback(MW++, "SS_SCATTERING"), WW.SS_TRANSLUCENCY && RW.addFallback(MW++, "SS_TRANSLUCENCY"), MW
        }
        getSamplers(WW) {
          WW.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, CW = new WeakMap, zR = new WeakMap, AW = new WeakMap, bR = new WeakMap, yR = new WeakMap, NW = new WeakMap, eW = new WeakMap, BW = new WeakMap, tR = new WeakMap, TW = new WeakMap, gR = new WeakMap, iR = new WeakMap, YW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(MR[Symbol.metadata] ?? null) : void 0;
        JW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], PW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, cR.D)(), (0, cR.h)("_markScenePrePassDirty")], lW = [(0, cR.D)()], FW = [(0, cR.D)()], fW = [(0, cR.D)()], QW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], jR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, cR.D)()], dW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, cR.D)()], UW = [(0, cR.D)()], EW = [(0, cR.D)()], mR = [(0, cR.m)()], xR = [(0, cR.D)()], KW = [(0, cR.D)()], uW = [(0, cR.m)()], OW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, cR.m)()], qR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], WR = [(0, cR.D)()], RR = [(0, cR.D)()], (0, rR.e)(WW, null, JW, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isRefractionEnabled" in WW,
            get: WW => WW.isRefractionEnabled,
            set: (WW, RW) => {
              WW.isRefractionEnabled = RW
            }
          },
          metadata: RW
        }, wR, CR), (0, rR.e)(WW, null, PW, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isTranslucencyEnabled" in WW,
            get: WW => WW.isTranslucencyEnabled,
            set: (WW, RW) => {
              WW.isTranslucencyEnabled = RW
            }
          },
          metadata: RW
        }, zM, AR), (0, rR.e)(WW, null, IW, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isDispersionEnabled" in WW,
            get: WW => WW.isDispersionEnabled,
            set: (WW, RW) => {
              WW.isDispersionEnabled = RW
            }
          },
          metadata: RW
        }, yM, NR), (0, rR.e)(WW, null, oW, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isScatteringEnabled" in WW,
            get: WW => WW.isScatteringEnabled,
            set: (WW, RW) => {
              WW.isScatteringEnabled = RW
            }
          },
          metadata: RW
        }, eR, BR), (0, rR.e)(WW, null, QW, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlbedoToTintRefraction" in WW,
            get: WW => WW.useAlbedoToTintRefraction,
            set: (WW, RW) => {
              WW.useAlbedoToTintRefraction = RW
            }
          },
          metadata: RW
        }, PR, IR), (0, rR.e)(WW, null, XW, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlbedoToTintTranslucency" in WW,
            get: WW => WW.useAlbedoToTintTranslucency,
            set: (WW, RW) => {
              WW.useAlbedoToTintTranslucency = RW
            }
          },
          metadata: RW
        }, oR, lR), (0, rR.e)(WW, null, jR, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "thicknessTexture" in WW,
            get: WW => WW.thicknessTexture,
            set: (WW, RW) => {
              WW.thicknessTexture = RW
            }
          },
          metadata: RW
        }, FR, fR), (0, rR.e)(WW, null, kR, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionTexture" in WW,
            get: WW => WW.refractionTexture,
            set: (WW, RW) => {
              WW.refractionTexture = RW
            }
          },
          metadata: RW
        }, QR, rM), (0, rR.e)(WW, null, aR, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, RW) => {
              WW.indexOfRefraction = RW
            }
          },
          metadata: RW
        }, cM, XR), (0, rR.e)(WW, null, dW, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertRefractionY" in WW,
            get: WW => WW.invertRefractionY,
            set: (WW, RW) => {
              WW.invertRefractionY = RW
            }
          },
          metadata: RW
        }, aM, sR), (0, rR.e)(WW, null, pW, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: WW => "linkRefractionWithTransparency" in WW,
            get: WW => WW.linkRefractionWithTransparency,
            set: (WW, RW) => {
              WW.linkRefractionWithTransparency = RW
            }
          },
          metadata: RW
        }, dR, pR), (0, rR.e)(WW, null, OW, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMaskFromThicknessTexture" in WW,
            get: WW => WW.useMaskFromThicknessTexture,
            set: (WW, RW) => {
              WW.useMaskFromThicknessTexture = RW
            }
          },
          metadata: RW
        }, DR, qM), (0, rR.e)(WW, null, GW, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionIntensityTexture" in WW,
            get: WW => WW.refractionIntensityTexture,
            set: (WW, RW) => {
              WW.refractionIntensityTexture = RW
            }
          },
          metadata: RW
        }, ZR, SR), (0, rR.e)(WW, null, LW, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyIntensityTexture" in WW,
            get: WW => WW.translucencyIntensityTexture,
            set: (WW, RW) => {
              WW.translucencyIntensityTexture = RW
            }
          },
          metadata: RW
        }, WM, RM), (0, rR.e)(WW, null, qR, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyColorTexture" in WW,
            get: WW => WW.translucencyColorTexture,
            set: (WW, RW) => {
              WW.translucencyColorTexture = RW
            }
          },
          metadata: RW
        }, CM, zw), (0, rR.e)(WW, null, SW, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: WW => "useGltfStyleTextures" in WW,
            get: WW => WW.useGltfStyleTextures,
            set: (WW, RW) => {
              WW.useGltfStyleTextures = RW
            }
          },
          metadata: RW
        }, AM, bw), (0, rR.e)(null, null, lW, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: WW => "_scatteringDiffusionProfileIndex" in WW,
            get: WW => WW._scatteringDiffusionProfileIndex,
            set: (WW, RW) => {
              WW._scatteringDiffusionProfileIndex = RW
            }
          },
          metadata: RW
        }, tM, TR), (0, rR.e)(null, null, FW, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionIntensity" in WW,
            get: WW => WW.refractionIntensity,
            set: (WW, RW) => {
              WW.refractionIntensity = RW
            }
          },
          metadata: RW
        }, gM, iM), (0, rR.e)(null, null, fW, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyIntensity" in WW,
            get: WW => WW.translucencyIntensity,
            set: (WW, RW) => {
              WW.translucencyIntensity = RW
            }
          },
          metadata: RW
        }, YR, JR), (0, rR.e)(null, null, sW, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "_volumeIndexOfRefraction" in WW,
            get: WW => WW._volumeIndexOfRefraction,
            set: (WW, RW) => {
              WW._volumeIndexOfRefraction = RW
            }
          },
          metadata: RW
        }, jM, kM), (0, rR.e)(null, null, hW, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "minimumThickness" in WW,
            get: WW => WW.minimumThickness,
            set: (WW, RW) => {
              WW.minimumThickness = RW
            }
          },
          metadata: RW
        }, hR, UR), (0, rR.e)(null, null, UW, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "maximumThickness" in WW,
            get: WW => WW.maximumThickness,
            set: (WW, RW) => {
              WW.maximumThickness = RW
            }
          },
          metadata: RW
        }, ER, VR), (0, rR.e)(null, null, EW, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: WW => "useThicknessAsDepth" in WW,
            get: WW => WW.useThicknessAsDepth,
            set: (WW, RW) => {
              WW.useThicknessAsDepth = RW
            }
          },
          metadata: RW
        }, mM, xM), (0, rR.e)(null, null, mR, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColor" in WW,
            get: WW => WW.tintColor,
            set: (WW, RW) => {
              WW.tintColor = RW
            }
          },
          metadata: RW
        }, vM, KR), (0, rR.e)(null, null, xR, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColorAtDistance" in WW,
            get: WW => WW.tintColorAtDistance,
            set: (WW, RW) => {
              WW.tintColorAtDistance = RW
            }
          },
          metadata: RW
        }, uR, OR), (0, rR.e)(null, null, KW, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: WW => "dispersion" in WW,
            get: WW => WW.dispersion,
            set: (WW, RW) => {
              WW.dispersion = RW
            }
          },
          metadata: RW
        }, nR, GR), (0, rR.e)(null, null, uW, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffusionDistance" in WW,
            get: WW => WW.diffusionDistance,
            set: (WW, RW) => {
              WW.diffusionDistance = RW
            }
          },
          metadata: RW
        }, LR, HR), (0, rR.e)(null, null, HW, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyColor" in WW,
            get: WW => WW.translucencyColor,
            set: (WW, RW) => {
              WW.translucencyColor = RW
            }
          },
          metadata: RW
        }, MM, wM), (0, rR.e)(null, null, WR, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: WW => "applyAlbedoAfterSubSurface" in WW,
            get: WW => WW.applyAlbedoAfterSubSurface,
            set: (WW, RW) => {
              WW.applyAlbedoAfterSubSurface = RW
            }
          },
          metadata: RW
        }, yw, NM), (0, rR.e)(null, null, RR, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: WW => "legacyTranslucency" in WW,
            get: WW => WW.legacyTranslucency,
            set: (WW, RW) => {
              WW.legacyTranslucency = RW
            }
          },
          metadata: RW
        }, eM, BM), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, WW.DEFAULT_LEGACY_TRANSLUCENCY = !1, WW
    })();
    var NR = MW(37933),
      eR = MW(37910),
      BR = MW(37948),
      tM = MW(37952),
      TR = MW(37956),
      gM = MW(37962),
      iM = MW(37971),
      YR = MW(37978),
      JR = MW(37470);
    const PR = {
      effect: null,
      subMesh: null
    };
    class IR extends((0, iM.e)((0, gM.d)(xR.e))) {}
    class oR extends((0, GW.h)(IR)) {
      constructor(WW) {
        super(WW), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class lR extends((0, YR.e)(HW.c)) {}
    let FR = (() => {
      var WW, RW;
      let wW, CW = lR,
        AW = [],
        bR = [];
      return WW = class extends CW {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(WW) {
          this._realTimeFiltering = WW, this.KbW(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(WW) {
          this._realTimeFilteringQuality = WW, this.KbW(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, rR.c)(this, RW, "f")
        }
        set debugMode(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        constructor(MW, wW) {
          super(MW, wW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new VW.s(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = nW.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new nW.d(0, 0, 0), this._albedoColor = new nW.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new nW.d(1, 1, 1), this._reflectionColor = new nW.d(1, 1, 1), this._emissiveColor = new nW.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = WW.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new jR.i(16), this._globalAmbientColor = new nW.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, RW.set(this, (0, rR.i)(this, AW, 0)), this.debugLimit = ((0, rR.i)(this, bR), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new uW(this), this.clearCoat = new WR(this), this.iridescence = new MR(this), this.anisotropy = new CR(this), this.sheen = new AR(this), this.subSurface = new yM(this), this.detailMap = new NR.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = pW(this.QRW()), this.prePassConfiguration = new OW.d
        }
        get hasRenderTargetTextures() {
          return !!(DW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === WW.PBRMATERIAL_OPAQUE || this._transparencyMode === WW.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === WW.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== WW.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(WW, RW, MW) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const wW = RW._drawWrapper;
          if (wW.effect && this.isFrozen && wW._wasPreviouslyReady && wW._wasPreviouslyUsingInstances === MW) return !0;
          RW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), RW.materialDefines = new oR(this._eventInfo.defineNames));
          const CW = RW.materialDefines;
          if (this._isReadyForSubMesh(RW)) return !0;
          const zR = this.QRW(),
            AW = zR.mC();
          if (CW._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, zR.texturesEnabled)) {
            if (this._albedoTexture && DW.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && DW.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && DW.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && DW.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && DW.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const WW = this._getReflectionTexture();
            if (WW && DW.e.ReflectionTextureEnabled) {
              if (!WW.isReadyOrNotBlocking()) return !1;
              if (WW.irradianceTexture) {
                if (!WW.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!WW.sphericalPolynomial && WW.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && DW.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && DW.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (DW.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (AW.getCaps().standardDerivatives && this._bumpTexture && DW.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && DW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = CW, this._eventInfo.subMesh = RW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (CW._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (CW.AREALIGHTUSED || CW.CLUSTLIGHT_BATCH)
            for (let BW = 0; BW < WW.lightSources.length; BW++)
              if (!WW.lightSources[BW]._isReady()) return !1;
          if (AW.getCaps().standardDerivatives || WW.isVerticesDataPresent(mR.j.NormalKind) || (WW.createNormals(!0), XW.b.Warn("PBRMaterial: Normals have been created for the mesh: " + WW.name)), !(0, ZW.d)(zR, WW, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const bR = RW.effect,
            yR = CW._areLightsDisposed,
            NW = this._prepareEffect(WW, RW.getRenderingMesh(), CW, this.onCompiled, this.onError, MW, null);
          let eW = !1;
          if (NW)
            if (this._onEffectCreatedObservable && (PR.effect = NW, PR.subMesh = RW, this._onEffectCreatedObservable.notifyObservers(PR)), this.allowShaderHotSwapping && bR && !NW.isReady()) {
              if (CW.markAsUnprocessed(), eW = this.isFrozen, yR) return CW._areLightsDisposed = !0, !1
            } else zR.resetCachedMaterial(), RW.setEffect(NW, CW, this._materialContext);
          return !(!RW.effect || !RW.effect.isReady()) && (CW._renderId = zR.getRenderId(), wW._wasPreviouslyReady = !eW, wW._wasPreviouslyUsingInstances = !!MW, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(RW, MW, wW) {
          let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(RW, MW, wW, AW, bR), !wW.isDirty) return null;
          wW.markAsProcessed();
          const yR = this.QRW().mC(),
            NW = new qR.c;
          let eW = 0;
          wW.USESPHERICALINVERTEX && NW.addFallback(eW++, "USESPHERICALINVERTEX"), wW.FOG && NW.addFallback(eW, "FOG"), wW.SPECULARAA && NW.addFallback(eW, "SPECULARAA"), wW.POINTSIZE && NW.addFallback(eW, "POINTSIZE"), wW.LOGARITHMICDEPTH && NW.addFallback(eW, "LOGARITHMICDEPTH"), wW.PARALLAX && NW.addFallback(eW, "PARALLAX"), wW.PARALLAX_RHS && NW.addFallback(eW, "PARALLAX_RHS"), wW.PARALLAXOCCLUSION && NW.addFallback(eW++, "PARALLAXOCCLUSION"), wW.ENVIRONMENTBRDF && NW.addFallback(eW++, "ENVIRONMENTBRDF"), wW.TANGENT && NW.addFallback(eW++, "TANGENT"), wW.BUMP && NW.addFallback(eW++, "BUMP"), eW = (0, ZW.H)(wW, NW, this._maxSimultaneousLights, eW), wW.SPECULARTERM && NW.addFallback(eW++, "SPECULARTERM"), wW.USESPHERICALFROMREFLECTIONMAP && NW.addFallback(eW++, "USESPHERICALFROMREFLECTIONMAP"), wW.USEIRRADIANCEMAP && NW.addFallback(eW++, "USEIRRADIANCEMAP"), wW.LIGHTMAP && NW.addFallback(eW++, "LIGHTMAP"), wW.NORMAL && NW.addFallback(eW++, "NORMAL"), wW.AMBIENT && NW.addFallback(eW++, "AMBIENT"), wW.EMISSIVE && NW.addFallback(eW++, "EMISSIVE"), wW.VERTEXCOLOR && NW.addFallback(eW++, "VERTEXCOLOR"), wW.MORPHTARGETS && NW.addFallback(eW++, "MORPHTARGETS"), wW.MULTIVIEW && NW.addFallback(0, "MULTIVIEW");
          const BW = [mR.j.PositionKind];
          wW.NORMAL && BW.push(mR.j.NormalKind), wW.TANGENT && BW.push(mR.j.TangentKind);
          for (let WW = 1; WW <= 6; ++WW) wW["UV" + WW] && BW.push(`uv${1===WW?"":WW}`);
          wW.VERTEXCOLOR && BW.push(mR.j.ColorKind), (0, ZW.K)(BW, RW, wW, NW), (0, ZW.O)(BW, wW), (0, ZW.S)(BW, RW, wW), (0, ZW.J)(BW, RW, wW);
          let tR = "pbr";
          const TW = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            gR = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, ZW.pb)(TW, gR, !0);
          const iR = ["Material", "Scene", "Mesh"],
            YW = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: wW.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = NW, this._eventInfo.fallbackRank = eW, this._eventInfo.defines = wW, this._eventInfo.uniforms = TW, this._eventInfo.attributes = BW, this._eventInfo.samplers = gR, this._eventInfo.uniformBuffersNames = iR, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RW, this._eventInfo.indexParameters = YW, this._callbackPluginEventGeneric(128, this._eventInfo), TR.d.AddUniformsAndSamplers(TW, gR), OW.d.AddUniforms(TW), OW.d.AddSamplers(gR), (0, eR.c)(TW), this._useVertexPulling) {
            const WW = MW?.geometry;
            WW && (this._vertexPullingMetadata = (0, BR.e)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, RW) => {
              TW.push(`vp_${RW}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          LW.b && (LW.b.PrepareUniforms(TW, wW), LW.b.PrepareSamplers(gR, wW)), (0, ZW.rb)({
            uniformsNames: TW,
            uniformBuffersNames: iR,
            samplers: gR,
            defines: wW,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const JW = {};
          this.customShaderNameResolve && (tR = this.customShaderNameResolve(tR, TW, iR, gR, wW, BW, JW));
          const PW = wW.toString(),
            IW = yR.createEffect(tR, {
              attributes: BW,
              uniformsNames: TW,
              uniformBuffersNames: iR,
              samplers: gR,
              defines: PW,
              fallbacks: NW,
              onCompiled: CW,
              onError: zR,
              indexParameters: YW,
              processFinalCode: JW.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: wW.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, yR);
          return this._eventInfo.customCode = void 0, IW
        }
        _prepareDefines(RW, MW, wW) {
          let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const AW = MW.hasThinInstances,
            bR = this.QRW(),
            yR = bR.mC();
          (0, ZW.ab)(bR, RW, wW, !0, this._maxSimultaneousLights, this._disableLighting), wW._needNormals = !0, (0, ZW.fb)(bR, wW);
          const NW = this.needAlphaBlendingForMesh(RW) && this.QRW().useOrderIndependentTransparency;
          if ((0, ZW.lb)(bR, wW, this.canRenderToMRT && !NW), (0, ZW.ib)(bR, wW, NW), TR.d.PrepareDefines(yR.currentRenderPassId, RW, wW), wW.METALLICWORKFLOW = this.isMetallicWorkflow(), wW._areTexturesDirty) {
            wW._needUVs = !1;
            for (let WW = 1; WW <= 6; ++WW) wW["MAINUV" + WW] = !1;
            if (bR.texturesEnabled) {
              wW.ALBEDODIRECTUV = 0, wW.BASE_WEIGHTDIRECTUV = 0, wW.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, wW.AMBIENTDIRECTUV = 0, wW.OPACITYDIRECTUV = 0, wW.EMISSIVEDIRECTUV = 0, wW.REFLECTIVITYDIRECTUV = 0, wW.MICROSURFACEMAPDIRECTUV = 0, wW.METALLIC_REFLECTANCEDIRECTUV = 0, wW.REFLECTANCEDIRECTUV = 0, wW.BUMPDIRECTUV = 0, wW.LIGHTMAPDIRECTUV = 0, yR.getCaps().textureLOD && (wW.LODBASEDMICROSFURACE = !0), this._albedoTexture && DW.e.DiffuseTextureEnabled ? ((0, ZW.cb)(this._albedoTexture, wW, "ALBEDO"), wW.GAMMAALBEDO = this._albedoTexture.gammaSpace) : wW.ALBEDO = !1, this._baseWeightTexture && DW.e.BaseWeightTextureEnabled ? (0, ZW.cb)(this._baseWeightTexture, wW, "BASE_WEIGHT") : wW.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && DW.e.BaseDiffuseRoughnessTextureEnabled ? (0, ZW.cb)(this._baseDiffuseRoughnessTexture, wW, "BASE_DIFFUSE_ROUGHNESS") : wW.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && DW.e.AmbientTextureEnabled ? ((0, ZW.cb)(this._ambientTexture, wW, "AMBIENT"), wW.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : wW.AMBIENT = !1, this._opacityTexture && DW.e.OpacityTextureEnabled ? ((0, ZW.cb)(this._opacityTexture, wW, "OPACITY"), wW.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : wW.OPACITY = !1;
              const WW = this._getReflectionTexture(),
                RW = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || yR.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, ZW._)(bR, WW, wW, this.realTimeFiltering, this.realTimeFilteringQuality, !RW), this._lightmapTexture && DW.e.LightmapTextureEnabled ? ((0, ZW.cb)(this._lightmapTexture, wW, "LIGHTMAP"), wW.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, wW.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, wW.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : wW.LIGHTMAP = !1, this._emissiveTexture && DW.e.EmissiveTextureEnabled ? ((0, ZW.cb)(this._emissiveTexture, wW, "EMISSIVE"), wW.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : wW.EMISSIVE = !1, DW.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, ZW.cb)(this._metallicTexture, wW, "REFLECTIVITY"), wW.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, wW.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, wW.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, wW.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, wW.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, ZW.cb)(this._reflectivityTexture, wW, "REFLECTIVITY"), wW.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, wW.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, wW.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : wW.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (wW.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, ZW.cb)(this._metallicReflectanceTexture, wW, "METALLIC_REFLECTANCE"), wW.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : wW.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, ZW.cb)(this._reflectanceTexture, wW, "REFLECTANCE"), wW.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : wW.REFLECTANCE = !1) : (wW.METALLIC_REFLECTANCE = !1, wW.REFLECTANCE = !1), this._microSurfaceTexture ? (0, ZW.cb)(this._microSurfaceTexture, wW, "MICROSURFACEMAP") : wW.MICROSURFACEMAP = !1) : (wW.REFLECTIVITY = !1, wW.MICROSURFACEMAP = !1), yR.getCaps().standardDerivatives && this._bumpTexture && DW.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, ZW.cb)(this._bumpTexture, wW, "BUMP"), this._useParallax && this._albedoTexture && DW.e.DiffuseTextureEnabled ? (wW.PARALLAX = !0, wW.PARALLAX_RHS = bR.useRightHandedSystem, wW.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wW.PARALLAX = !1, wW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wW.BUMP = !1, wW.PARALLAX = !1, wW.PARALLAX_RHS = !1, wW.PARALLAXOCCLUSION = !1, wW.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DW.e.ReflectionTextureEnabled ? (wW.ENVIRONMENTBRDF = !0, wW.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wW.ENVIRONMENTBRDF = !1, wW.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? wW.ALPHAFROMALBEDO = !0 : wW.ALPHAFROMALBEDO = !1
            }
            wW.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === WW.LIGHTFALLOFF_STANDARD ? (wW.USEPHYSICALLIGHTFALLOFF = !1, wW.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === WW.LIGHTFALLOFF_GLTF ? (wW.USEPHYSICALLIGHTFALLOFF = !1, wW.USEGLTFLIGHTFALLOFF = !0) : (wW.USEPHYSICALLIGHTFALLOFF = !0, wW.USEGLTFLIGHTFALLOFF = !1), wW.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? wW.TWOSIDEDLIGHTING = !0 : wW.TWOSIDEDLIGHTING = !1, wW.MIRRORED = !!bR._mirroredCameraPosition, wW.SPECULARAA = yR.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(wW._areTexturesDirty || wW._areMiscDirty) && (wW.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wW.ALPHABLEND = this.needAlphaBlendingForMesh(RW), wW.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, wW.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), wW._areTexturesDirty && (wW.TEXTURE_REPETITION_MODE = yR.version > 1 || yR.isWebGPU ? this.textureRepetitionMode : 0), wW._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wW), wW.FORCENORMALFORWARD = this._forceNormalForward, wW.RADIANCEOCCLUSION = this._useRadianceOcclusion, wW.HORIZONOCCLUSION = this._useHorizonOcclusion, wW._areMiscDirty && ((0, ZW.eb)(RW, bR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RW), wW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, MW, this._isVertexOutputInvariant), wW.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !RW.isVerticesDataPresent(mR.j.NormalKind), wW.DEBUGMODE = this._debugMode), (0, ZW.X)(bR, yR, this, wW, !!CW, zR, AW), this._eventInfo.defines = wW, this._eventInfo.mesh = RW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, ZW.V)(RW, wW, !0, !0, !0, this._transparencyMode !== WW.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(WW, RW, MW) {
          const wW = {
            clipPlane: !1,
            useInstances: !1,
            ...MW
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const MW = new oR(this._eventInfo.defineNames),
              CW = this._prepareEffect(WW, WW, MW, void 0, void 0, wW.useInstances, wW.clipPlane);
            this._onEffectCreatedObservable && (PR.effect = CW, PR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(PR)), CW.isReady() ? RW && RW(this) : CW.onCompileObservable.add((() => {
              RW && RW(this)
            }))
          })()
        }
        buildUniformLayout() {
          const WW = this._uniformBuffer;
          WW.addUniform("vAlbedoInfos", 2), WW.addUniform("vBaseWeightInfos", 2), WW.addUniform("vBaseDiffuseRoughnessInfos", 2), WW.addUniform("vAmbientInfos", 4), WW.addUniform("vOpacityInfos", 2), WW.addUniform("vEmissiveInfos", 2), WW.addUniform("vLightmapInfos", 2), WW.addUniform("vReflectivityInfos", 3), WW.addUniform("vMicroSurfaceSamplerInfos", 2), WW.addUniform("vBumpInfos", 3), WW.addUniform("albedoMatrix", 16), WW.addUniform("baseWeightMatrix", 16), WW.addUniform("baseDiffuseRoughnessMatrix", 16), WW.addUniform("ambientMatrix", 16), WW.addUniform("opacityMatrix", 16), WW.addUniform("emissiveMatrix", 16), WW.addUniform("lightmapMatrix", 16), WW.addUniform("reflectivityMatrix", 16), WW.addUniform("microSurfaceSamplerMatrix", 16), WW.addUniform("bumpMatrix", 16), WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("vAlbedoColor", 4), WW.addUniform("baseWeight", 1), WW.addUniform("baseDiffuseRoughness", 1), WW.addUniform("vLightingIntensity", 4), WW.addUniform("pointSize", 1), WW.addUniform("vReflectivityColor", 4), WW.addUniform("vEmissiveColor", 3), WW.addUniform("vAmbientColor", 3), WW.addUniform("vDebugMode", 2), WW.addUniform("vMetallicReflectanceFactors", 4), WW.addUniform("vMetallicReflectanceInfos", 2), WW.addUniform("metallicReflectanceMatrix", 16), WW.addUniform("vReflectanceInfos", 2), WW.addUniform("reflectanceMatrix", 16), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), (0, ZW.ob)(WW, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(WW, RW, MW) {
          const wW = this.QRW(),
            CW = MW.materialDefines;
          if (!CW) return;
          const zR = MW.effect;
          if (!zR) return;
          this._activeEffect = zR, RW.getMeshUniformBuffer().bindToEffect(zR, "Mesh"), RW.transferToEffect(WW);
          const AW = wW.mC();
          this._uniformBuffer.bindToEffect(zR, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, wW, RW, WW, this.isFrozen), TR.d.Bind(AW.currentRenderPassId, this._activeEffect, RW, WW, this);
          const bR = wW.activeCamera;
          bR ? this._uniformBuffer.updateFloat4("cameraInfo", bR.minZ, bR.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const yR = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", yR[0], yR[1], yR[2], yR[3]), this._eventInfo.subMesh = MW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), CW.OBJECTSPACE_NORMALMAP && (WW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const NW = this._mustRebind(wW, zR, MW, RW.visibility),
            eW = AW._features.needToAlwaysBindUniformBuffers;
          (0, ZW.e)(RW, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BR.b)(this._activeEffect, this._vertexPullingMetadata);
          let BW = null;
          const tR = this._uniformBuffer;
          if (NW) {
            if (this.bindViewProjection(zR), BW = this._getReflectionTexture(), !tR.useUbo || !this.isFrozen || !tR.isSync || MW._drawWrapper._forceRebindOnNextCall) {
              if (wW.texturesEnabled && (this._albedoTexture && DW.e.DiffuseTextureEnabled && (tR.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, ZW.D)(this._albedoTexture, tR, "albedo")), this._baseWeightTexture && DW.e.BaseWeightTextureEnabled && (tR.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, ZW.D)(this._baseWeightTexture, tR, "baseWeight")), this._baseDiffuseRoughnessTexture && DW.e.BaseDiffuseRoughnessTextureEnabled && (tR.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, ZW.D)(this._baseDiffuseRoughnessTexture, tR, "baseDiffuseRoughness")), this._ambientTexture && DW.e.AmbientTextureEnabled && (tR.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, ZW.D)(this._ambientTexture, tR, "ambient")), this._opacityTexture && DW.e.OpacityTextureEnabled && (tR.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, ZW.D)(this._opacityTexture, tR, "opacity")), this._emissiveTexture && DW.e.EmissiveTextureEnabled && (tR.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, ZW.D)(this._emissiveTexture, tR, "emissive")), this._lightmapTexture && DW.e.LightmapTextureEnabled && (tR.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, ZW.D)(this._lightmapTexture, tR, "lightmap")), DW.e.SpecularTextureEnabled && (this._metallicTexture ? (tR.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, ZW.D)(this._metallicTexture, tR, "reflectivity")) : this._reflectivityTexture && (tR.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, ZW.D)(this._reflectivityTexture, tR, "reflectivity")), this._metallicReflectanceTexture && (tR.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, ZW.D)(this._metallicReflectanceTexture, tR, "metallicReflectance")), this._reflectanceTexture && CW.REFLECTANCE && (tR.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, ZW.D)(this._reflectanceTexture, tR, "reflectance")), this._microSurfaceTexture && (tR.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, ZW.D)(this._microSurfaceTexture, tR, "microSurfaceSampler"))), this._bumpTexture && AW.getCaps().standardDerivatives && DW.e.BumpTextureEnabled && !this._disableBumpMap && (tR.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, ZW.D)(this._bumpTexture, tR, "bump"), wW._mirroredCameraPosition ? tR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : tR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, ZW.j)(wW, CW, tR, this._reflectionColor, BW, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && tR.updateFloat("pointSize", this.pointSize), CW.METALLICWORKFLOW) {
                nW.n.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, nW.n.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const WW = this.subSurface?._indexOfRefraction ?? 1.5,
                  RW = 1;
                nW.n.Color4[0].b = WW;
                const MW = Math.pow((WW - RW) / (WW + RW), 2);
                nW.n.Color4[0].a = MW, tR.updateDirectColor4("vReflectivityColor", nW.n.Color4[0]), tR.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else tR.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              tR.updateColor3("vEmissiveColor", DW.e.EmissiveTextureEnabled ? this._emissiveColor : nW.d.BlackReadOnly), !CW.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? tR.updateColor4("vAlbedoColor", this._albedoColor, 1) : tR.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), tR.updateFloat("baseWeight", this._baseWeight), tR.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * wW.environmentIntensity, this._lightingInfos.w = this._specularIntensity, tR.updateVector4("vLightingIntensity", this._lightingInfos), wW.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), tR.updateColor3("vAmbientColor", this._globalAmbientColor), tR.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            wW.texturesEnabled && (this._albedoTexture && DW.e.DiffuseTextureEnabled && tR.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && DW.e.BaseWeightTextureEnabled && tR.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && DW.e.BaseDiffuseRoughnessTextureEnabled && tR.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && DW.e.AmbientTextureEnabled && tR.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DW.e.OpacityTextureEnabled && tR.setTexture("opacitySampler", this._opacityTexture), (0, ZW.n)(wW, CW, tR, BW, this.realTimeFiltering), CW.ENVIRONMENTBRDF && tR.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && DW.e.EmissiveTextureEnabled && tR.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && DW.e.LightmapTextureEnabled && tR.setTexture("lightmapSampler", this._lightmapTexture), DW.e.SpecularTextureEnabled && (this._metallicTexture ? tR.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && tR.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && tR.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && CW.REFLECTANCE && tR.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && tR.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && AW.getCaps().standardDerivatives && DW.e.BumpTextureEnabled && !this._disableBumpMap && tR.setTexture("bumpSampler", this._bumpTexture)), this.QRW().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(RW) && this.QRW().depthPeelingRenderer.bind(zR), this._eventInfo.subMesh = MW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, eR.d)(this._activeEffect, this, wW), this.bindEyePosition(zR)
          } else eW && (this._needToBindSceneUbo = !0);
          !NW && this.isFrozen && !eW || !wW.lightsEnabled || this._disableLighting || (0, ZW.r)(wW, RW, this._activeEffect, CW, this._maxSimultaneousLights), !NW && this.isFrozen || ((wW.fogEnabled && RW.applyFog && wW.fogMode !== EW.i.FOGMODE_NONE || BW || this.subSurface.refractionTexture || RW.receiveShadows || CW.PREPASS || CW.CLUSTLIGHT_BATCH) && this.bindView(zR), (0, ZW.i)(wW, RW, this._activeEffect, !0), CW.NUM_MORPH_INFLUENCERS && (0, ZW.x)(RW, this._activeEffect), CW.BAKED_VERTEX_ANIMATION_TEXTURE && RW.bakedVertexAnimationManager?.bind(zR, CW.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, ZW.t)(CW, this._activeEffect, wW)), this._afterBind(RW, this._activeEffect, MW), tR.update()
        }
        getAnimatables() {
          const WW = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && WW.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && WW.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && WW.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && WW.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && WW.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && WW.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && WW.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? WW.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && WW.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && WW.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && WW.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && WW.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && WW.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && WW.push(this._microSurfaceTexture), WW
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.QRW().environmentTexture
        }
        getActiveTextures() {
          const WW = super.getActiveTextures();
          return this._albedoTexture && WW.push(this._albedoTexture), this._baseWeightTexture && WW.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && WW.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && WW.push(this._ambientTexture), this._opacityTexture && WW.push(this._opacityTexture), this._reflectionTexture && WW.push(this._reflectionTexture), this._emissiveTexture && WW.push(this._emissiveTexture), this._reflectivityTexture && WW.push(this._reflectivityTexture), this._metallicTexture && WW.push(this._metallicTexture), this._metallicReflectanceTexture && WW.push(this._metallicReflectanceTexture), this._reflectanceTexture && WW.push(this._reflectanceTexture), this._microSurfaceTexture && WW.push(this._microSurfaceTexture), this._bumpTexture && WW.push(this._bumpTexture), this._lightmapTexture && WW.push(this._lightmapTexture), WW
        }
        hasTexture(WW) {
          return !!super.hasTexture(WW) || (this._albedoTexture === WW || (this._baseWeightTexture === WW || (this._baseDiffuseRoughnessTexture === WW || (this._ambientTexture === WW || (this._opacityTexture === WW || (this._reflectionTexture === WW || (this._emissiveTexture === WW || (this._reflectivityTexture === WW || (this._metallicTexture === WW || (this._metallicReflectanceTexture === WW || (this._reflectanceTexture === WW || (this._microSurfaceTexture === WW || (this._bumpTexture === WW || this._lightmapTexture === WW)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const WW = this.QRW().enableSubSurfaceForPrePass();
          return WW && (WW.enabled = !0), !0
        }
        dispose(WW, RW) {
          this._breakShaderLoadedCheck = !0, RW && (this._environmentBRDFTexture && this.QRW().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, RW)
        }
      }, RW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(CW[Symbol.metadata] ?? null) : void 0;
        wW = [(0, cR.h)("_markAllSubMeshesAsMiscDirty")], (0, rR.e)(WW, null, wW, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "debugMode" in WW,
            get: WW => WW.debugMode,
            set: (WW, RW) => {
              WW.debugMode = RW
            }
          },
          metadata: RW
        }, AW, bR), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW.PBRMATERIAL_OPAQUE = zR.e.MATERIAL_OPAQUE, WW.PBRMATERIAL_ALPHATEST = zR.e.MATERIAL_ALPHATEST, WW.PBRMATERIAL_ALPHABLEND = zR.e.MATERIAL_ALPHABLEND, WW.PBRMATERIAL_ALPHATESTANDBLEND = zR.e.MATERIAL_ALPHATESTANDBLEND, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, WW.LIGHTFALLOFF_PHYSICAL = 0, WW.LIGHTFALLOFF_GLTF = 1, WW.LIGHTFALLOFF_STANDARD = 2, WW.ForceGLSL = !1, WW._ShaderLoader = new tM.b((() => [Promise.all([MW.e(287), MW.e(298)]).then((() => MW(58920))), Promise.all([MW.e(292), MW.e(288), MW.e(352), MW.e(301), MW.e(351)]).then((() => MW(58942)))]), (() => [Promise.all([MW.e(306), MW.e(308), MW.e(315)]).then((() => MW(59014))), Promise.all([MW.e(306), MW.e(309), MW.e(355), MW.e(319), MW.e(354)]).then((() => MW(59042)))])), WW
    })();
    Object.getOwnPropertyDescriptor(FR.prototype, "decalMap") || Object.defineProperty(FR.prototype, "decalMap", (0, JR.e)("PBRBaseMaterial", "decalMap")), (0, MW(39290).c)();
    var fR = MW(37615);
    var QR = MW(37685),
      rM = MW(39273),
      cM = MW(37424),
      XR = MW(37433),
      jM = MW(37533);
    let kM = !1;
    const aM = new nW.h,
      sR = new nW.h;
    class dR extends rM.b {
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
      set wrapU(WW) {
        if (this._textures)
          for (let RW = 0; RW < this._textures.length; RW++) this._textures[RW].wrapU = WW
      }
      set wrapV(WW) {
        if (this._textures)
          for (let RW = 0; RW < this._textures.length; RW++) this._textures[RW].wrapV = WW
      }
      constructor(WW, RW, MW, wW, CW, zR) {
        const AW = !(!CW || !CW.generateMipMaps) && CW.generateMipMaps,
          bR = !(!CW || !CW.generateDepthTexture) && CW.generateDepthTexture,
          yR = CW && CW.depthTextureFormat ? CW.depthTextureFormat : 15,
          NW = !CW || void 0 === CW.doNotChangeAspectRatio || CW.doNotChangeAspectRatio,
          eW = !(!CW || !CW.drawOnlyOnFirstAttachmentByDefault) && CW.drawOnlyOnFirstAttachmentByDefault;
        if (super(WW, RW, wW, AW, NW, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), kM || (kM = !0, XR.ThinEngine.prototype.restoreSingleAttachment = function() {
            const WW = this._gl;
            this.bindAttachments([WW.BACK])
          }, XR.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const WW = this._gl;
            this.bindAttachments([WW.COLOR_ATTACHMENT0])
          }, XR.ThinEngine.prototype.buildTextureLayout = function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const MW = this._gl,
              wW = [];
            if (RW) wW.push(MW.BACK);
            else
              for (let CW = 0; CW < WW.length; CW++) WW[CW] ? wW.push(MW["COLOR_ATTACHMENT" + CW]) : wW.push(MW.NONE);
            return wW
          }, XR.ThinEngine.prototype.bindAttachments = function(WW) {
            const RW = this._gl,
              MW = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, MW)
              for (let wW = 0; wW < WW.length; wW++) WW[wW] !== RW.NONE && MW[wW] && (0, jM.k)(MW[wW].format) && (this._integerMRTAttachmentsMask |= 1 << wW);
            RW.drawBuffers(WW)
          }, XR.ThinEngine.prototype.clearAttachments = function(WW, RW, MW, wW) {
            let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const AW = this._currentRenderTarget?.textures;
            let bR = !1;
            if (MW && WW && AW)
              for (let yR = 0; yR < RW.length; yR++) {
                const WW = AW[yR];
                if (RW[yR] !== this._gl.NONE && WW && (0, jM.k)(WW.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  bR = !0;
                  break
                }
              }
            if (!bR || !WW || !AW) return this.bindAttachments(RW), void this.clear(WW, MW, wW, CW, zR);
            this.bindAttachments(RW), this._applyColorWriteState();
            for (let yR = 0; yR < RW.length; yR++) {
              const MW = AW[yR];
              if (RW[yR] !== this._gl.NONE && MW) {
                let RW = WW;
                if ((0, jM.k)(MW.format)) {
                  const wW = (0, jM.l)(MW.type);
                  RW = wW ? aM : sR;
                  const CW = wW ? 255 : 1;
                  RW.r = Math.round(WW.r * CW), RW.g = Math.round(WW.g * CW), RW.b = Math.round(WW.b * CW), RW.a = Math.round(WW.a * CW)
                }
                this._clearColorAttachment(yR, RW, MW.format, MW.type)
              }
            }
            if (wW || CW) {
              const WW = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, wW, CW, zR)
              } finally {
                this._integerMRTAttachmentsMask = WW
              }
            }
          }, XR.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, WW.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(WW), RW || this.generateMipMapsMultiFramebuffer(WW), MW && (WW._MSAAFramebuffer && this._bindUnboundFramebuffer(WW._framebuffer), MW()), this._bindUnboundFramebuffer(null)
          }, XR.ThinEngine.prototype.createMultipleRenderTarget = function(WW, RW) {
            let MW, wW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              CW = !1,
              zR = !0,
              AW = !1,
              bR = !1,
              yR = 1,
              NW = 1,
              eW = [],
              BW = [],
              tR = [],
              TW = [],
              gR = [],
              iR = [],
              YW = [],
              JW = [],
              PW = [],
              IW = !1;
            const oW = this._createHardwareRenderTargetWrapper(!0, !1, WW);
            void 0 !== RW && (CW = void 0 !== RW.generateMipMaps && RW.generateMipMaps, zR = void 0 === RW.generateDepthBuffer || RW.generateDepthBuffer, AW = void 0 !== RW.generateStencilBuffer && RW.generateStencilBuffer, bR = void 0 !== RW.generateDepthTexture && RW.generateDepthTexture, yR = RW.htW ?? 1, NW = RW.samples ?? NW, eW = RW.types || eW, BW = RW.samplingModes || BW, tR = RW.useSRGBBuffers || tR, TW = RW.formats || TW, gR = RW.targetTypes || gR, iR = RW.faceIndex || iR, YW = RW.layerIndex || YW, JW = RW.layerCounts || JW, PW = RW.labels || PW, IW = RW.dontCreateTextures ?? !1, this.Gs > 1 && (13 === RW.depthTextureFormat || 17 === RW.depthTextureFormat || 16 === RW.depthTextureFormat || 14 === RW.depthTextureFormat || 18 === RW.depthTextureFormat) && (MW = RW.depthTextureFormat)), void 0 === MW && (MW = AW ? 13 : 14);
            const lW = this._gl,
              FW = this._currentFramebuffer,
              fW = lW.createFramebuffer();
            this._bindUnboundFramebuffer(fW);
            const QW = WW.width ?? WW,
              rR = WW.height ?? WW,
              cR = [],
              jR = [],
              kR = this.Gs > 1 && (13 === MW || 17 === MW || 18 === MW);
            oW.label = RW?.label ?? "MultiRenderTargetWrapper", oW._framebuffer = fW, oW._generateDepthBuffer = bR || zR, oW._generateStencilBuffer = bR ? kR : AW, oW._depthStencilBuffer = this._setupFramebufferDepthAttachments(oW._generateStencilBuffer, oW._generateDepthBuffer, QW, rR, 1, MW), oW._attachments = jR;
            for (let aR = 0; aR < yR; aR++) {
              let WW = BW[aR] || 3,
                RW = eW[aR] || 0,
                MW = tR[aR] || !1;
              const wW = TW[aR] || 5,
                zR = gR[aR] || 3553,
                AW = JW[aR] ?? 1;
              (1 !== RW || this._caps.textureFloatLinearFiltering) && (2 !== RW || this._caps.textureHalfFloatLinearFiltering) || (WW = 1);
              const bR = this._getSamplingParameters(WW, CW);
              1 !== RW || this._caps.textureFloat || (RW = 0, XW.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), MW = MW && this._caps.supportSRGBBuffers && (this.Gs > 1 || this.isWebGPU);
              const yR = this.Gs > 1,
                NW = lW[yR ? "COLOR_ATTACHMENT" + aR : "COLOR_ATTACHMENT" + aR + "_WEBGL"];
              if (jR.push(NW), -1 === zR || IW) continue;
              const iR = new cM.e(this, 6);
              cR[aR] = iR, lW.activeTexture(lW["TEXTURE" + aR]), lW.bindTexture(zR, iR._hardwareTexture.underlyingResource), lW.texParameteri(zR, lW.TEXTURE_MAG_FILTER, bR.mag), lW.texParameteri(zR, lW.TEXTURE_MIN_FILTER, bR.min), lW.texParameteri(zR, lW.TEXTURE_WRAP_S, lW.CLAMP_TO_EDGE), lW.texParameteri(zR, lW.TEXTURE_WRAP_T, lW.CLAMP_TO_EDGE);
              const YW = this._getRGBABufferInternalSizedFormat(RW, wW, MW),
                FW = this._getInternalFormat(wW),
                fW = this._getWebGLTextureType(RW);
              if (!yR || 35866 !== zR && 32879 !== zR)
                if (34067 === zR) {
                  for (let WW = 0; WW < 6; WW++) lW.texImage2D(lW.TEXTURE_CUBE_MAP_POSITIVE_X + WW, 0, YW, QW, rR, 0, FW, fW, null);
                  iR.isCube = !0
                } else lW.texImage2D(lW.TEXTURE_2D, 0, YW, QW, rR, 0, FW, fW, null);
              else 35866 === zR ? iR.is2DArray = !0 : iR.is3D = !0, iR.baseDepth = iR.depth = AW, lW.texImage3D(zR, 0, YW, QW, rR, AW, 0, FW, fW, null);
              CW && lW.generateMipmap(zR), this._bindTextureDirectly(zR, null), iR.baseWidth = QW, iR.baseHeight = rR, iR.width = QW, iR.height = rR, iR.isReady = !0, iR.samples = 1, iR.generateMipMaps = CW, iR.samplingMode = WW, iR.type = RW, iR._useSRGBBuffer = MW, iR.format = wW, iR.label = PW[aR] ?? oW.label + "-Texture" + aR, this._internalTexturesCache.push(iR)
            }
            if (bR && this._caps.depthTextureExtension && !IW) {
              const WW = new cM.e(this, 14);
              let RW = 5,
                wW = lW.DEPTH_COMPONENT16,
                zR = lW.DEPTH_COMPONENT,
                AW = lW.UNSIGNED_SHORT,
                bR = lW.DEPTH_ATTACHMENT;
              this.Gs < 2 ? wW = lW.DEPTH_COMPONENT : 14 === MW ? (RW = 1, AW = lW.FLOAT, wW = lW.DEPTH_COMPONENT32F) : 18 === MW ? (RW = 0, AW = lW.FLOAT_32_UNSIGNED_INT_24_8_REV, wW = lW.DEPTH32F_STENCIL8, zR = lW.DEPTH_STENCIL, bR = lW.DEPTH_STENCIL_ATTACHMENT) : 16 === MW ? (RW = 0, AW = lW.UNSIGNED_INT, wW = lW.DEPTH_COMPONENT24, bR = lW.DEPTH_ATTACHMENT) : 13 !== MW && 17 !== MW || (RW = 12, AW = lW.UNSIGNED_INT_24_8, wW = lW.DEPTH24_STENCIL8, zR = lW.DEPTH_STENCIL, bR = lW.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(lW.TEXTURE_2D, WW, !0), lW.texParameteri(lW.TEXTURE_2D, lW.TEXTURE_MAG_FILTER, lW.NEAREST), lW.texParameteri(lW.TEXTURE_2D, lW.TEXTURE_MIN_FILTER, lW.NEAREST), lW.texParameteri(lW.TEXTURE_2D, lW.TEXTURE_WRAP_S, lW.CLAMP_TO_EDGE), lW.texParameteri(lW.TEXTURE_2D, lW.TEXTURE_WRAP_T, lW.CLAMP_TO_EDGE), lW.texImage2D(lW.TEXTURE_2D, 0, wW, QW, rR, 0, zR, AW, null), lW.framebufferTexture2D(lW.FRAMEBUFFER, bR, lW.TEXTURE_2D, WW._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(lW.TEXTURE_2D, null), oW._depthStencilTexture = WW, oW._depthStencilTextureWithStencil = kR, WW.baseWidth = QW, WW.baseHeight = rR, WW.width = QW, WW.height = rR, WW.isReady = !0, WW.samples = 1, WW.generateMipMaps = CW, WW.samplingMode = 1, WW.format = MW, WW.type = RW, WW.label = oW.label + "-DepthStencil", cR[yR] = WW, this._internalTexturesCache.push(WW)
            }
            if (oW.setTextures(cR), wW && lW.drawBuffers(jR), this._bindUnboundFramebuffer(FW), oW.setLayerAndFaceIndices(YW, iR), this.resetTextureCache(), IW) {
              if (NW > 1) {
                const WW = lW.createFramebuffer();
                if (!WW) throw new Error("Unable to create multi sampled framebuffer");
                oW._samples = NW, oW._MSAAFramebuffer = WW, yR > 0 && wW && (this._bindUnboundFramebuffer(WW), lW.drawBuffers(jR), this._bindUnboundFramebuffer(FW))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(oW, NW, wW);
            return oW
          }, XR.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(WW, RW) {
            let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Gs < 2 || !WW) return 1;
            if (WW.samples === RW) return RW;
            const wW = this._gl;
            RW = Math.min(RW, this.getCaps().maxMSAASamples), WW._depthStencilBuffer && (wW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = null), WW._MSAAFramebuffer && (wW.deleteFramebuffer(WW._MSAAFramebuffer), WW._MSAAFramebuffer = null);
            const CW = WW._attachments.length;
            for (let AW = 0; AW < CW; AW++) {
              const RW = WW.textures[AW]._hardwareTexture;
              RW?.releaseMSAARenderBuffers()
            }
            if (RW > 1 && "function" === typeof wW.renderbufferStorageMultisample) {
              const zR = wW.createFramebuffer();
              if (!zR) throw new Error("Unable to create multi sampled framebuffer");
              WW._MSAAFramebuffer = zR, this._bindUnboundFramebuffer(zR);
              const AW = [];
              for (let MW = 0; MW < CW; MW++) {
                const CW = WW.textures[MW],
                  zR = CW._hardwareTexture,
                  bR = wW[this.Gs > 1 ? "COLOR_ATTACHMENT" + MW : "COLOR_ATTACHMENT" + MW + "_WEBGL"],
                  yR = this._createRenderBuffer(CW.width, CW.height, RW, -1, this._getRGBABufferInternalSizedFormat(CW.type, CW.format, CW._useSRGBBuffer), bR);
                if (!yR) throw new Error("Unable to create multi sampled framebuffer");
                zR.addMSAARenderBuffer(yR), CW.samples = RW, AW.push(bR)
              }
              MW && wW.drawBuffers(AW)
            } else this._bindUnboundFramebuffer(WW._framebuffer);
            const zR = WW._depthStencilTexture ? WW._depthStencilTexture.format : void 0;
            return WW._depthStencilBuffer = this._setupFramebufferDepthAttachments(WW._generateStencilBuffer, WW._generateDepthBuffer, WW.width, WW.height, RW, zR), this._bindUnboundFramebuffer(null), WW._samples = RW, RW
          }, XR.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(WW) {
            const RW = WW,
              MW = this._gl;
            if (RW.isMulti)
              for (let wW = 0; wW < RW._attachments.length; wW++) {
                const WW = RW.textures[wW];
                !WW?.generateMipMaps || WW?.isCube || WW?.is3D || (this._bindTextureDirectly(MW.TEXTURE_2D, WW, !0), MW.generateMipmap(MW.TEXTURE_2D), this._bindTextureDirectly(MW.TEXTURE_2D, null))
              }
          }, XR.ThinEngine.prototype.resolveMultiFramebuffer = function(WW) {
            const RW = WW,
              MW = this._gl;
            if (!RW._MSAAFramebuffer || !RW.isMulti) return;
            let wW = RW.resolveMSAAColors ? MW.COLOR_BUFFER_BIT : 0;
            wW |= RW._generateDepthBuffer && RW.resolveMSAADepth ? MW.DEPTH_BUFFER_BIT : 0, wW |= RW._generateStencilBuffer && RW.resolveMSAAStencil ? MW.STENCIL_BUFFER_BIT : 0;
            const CW = RW._attachments,
              zR = CW.length;
            MW.bindFramebuffer(MW.READ_FRAMEBUFFER, RW._MSAAFramebuffer), MW.bindFramebuffer(MW.DRAW_FRAMEBUFFER, RW._framebuffer);
            for (let AW = 0; AW < zR; AW++) {
              const WW = RW.textures[AW];
              for (let RW = 0; RW < zR; RW++) CW[RW] = MW.NONE;
              CW[AW] = MW[this.Gs > 1 ? "COLOR_ATTACHMENT" + AW : "COLOR_ATTACHMENT" + AW + "_WEBGL"], MW.readBuffer(CW[AW]), MW.drawBuffers(CW), MW.blitFramebuffer(0, 0, WW.width, WW.height, 0, 0, WW.width, WW.height, wW, MW.NEAREST)
            }
            for (let AW = 0; AW < zR; AW++) CW[AW] = MW[this.Gs > 1 ? "COLOR_ATTACHMENT" + AW : "COLOR_ATTACHMENT" + AW + "_WEBGL"];
            MW.drawBuffers(CW), MW.bindFramebuffer(this._gl.FRAMEBUFFER, RW._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = zR;
        const BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [],
          JW = [],
          PW = [];
        this._initTypes(MW, BW, tR, TW, gR, iR, YW, JW, PW, CW);
        const IW = !CW || void 0 === CW.generateDepthBuffer || CW.generateDepthBuffer,
          oW = !(!CW || void 0 === CW.generateStencilBuffer) && CW.generateStencilBuffer,
          lW = CW && CW.samples ? CW.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: tR,
          generateMipMaps: AW,
          generateDepthBuffer: IW,
          generateStencilBuffer: oW,
          generateDepthTexture: bR,
          depthTextureFormat: yR,
          types: BW,
          htW: MW,
          useSRGBBuffers: TW,
          samples: lW,
          formats: gR,
          targetTypes: iR,
          faceIndex: YW,
          layerIndex: JW,
          layerCounts: PW,
          labels: zR,
          label: WW
        }, this._count = MW, this._drawOnlyOnFirstAttachmentByDefault = eW, MW > 0 && (this._createInternalTextures(), this._createTextures(zR))
      }
      _initTypes(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        for (let eW = 0; eW < WW; eW++) NW && NW.types && void 0 !== NW.types[eW] ? RW.push(NW.types[eW]) : RW.push(NW && NW.defaultType ? NW.defaultType : 0), NW && NW.samplingModes && void 0 !== NW.samplingModes[eW] ? MW.push(NW.samplingModes[eW]) : MW.push(kR.d.BILINEAR_SAMPLINGMODE), NW && NW.useSRGBBuffers && void 0 !== NW.useSRGBBuffers[eW] ? wW.push(NW.useSRGBBuffers[eW]) : wW.push(!1), NW && NW.formats && void 0 !== NW.formats[eW] ? CW.push(NW.formats[eW]) : CW.push(5), NW && NW.targetTypes && void 0 !== NW.targetTypes[eW] ? zR.push(NW.targetTypes[eW]) : zR.push(3553), NW && NW.faceIndex && void 0 !== NW.faceIndex[eW] ? AW.push(NW.faceIndex[eW]) : AW.push(0), NW && NW.layerIndex && void 0 !== NW.layerIndex[eW] ? bR.push(NW.layerIndex[eW]) : bR.push(0), NW && NW.layerCounts && void 0 !== NW.layerCounts[eW] ? yR.push(NW.layerCounts[eW]) : yR.push(1)
      }
      _createInternaTextureIndexMapping() {
        const WW = {},
          RW = [];
        if (!this._renderTarget) return RW;
        const MW = this._renderTarget.textures;
        for (let wW = 0; wW < MW.length; wW++) {
          const CW = MW[wW];
          if (!CW) continue;
          const zR = WW[CW.uniqueId];
          void 0 !== zR ? RW[wW] = zR : WW[CW.uniqueId] = wW
        }
        return RW
      }
      _rebuild() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || WW) return;
        const wW = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), RW && (this._releaseTextures(), this._createTextures(MW));
        const CW = this._renderTarget.textures;
        for (let zR = 0; zR < CW.length; zR++) {
          const WW = this._textures[zR];
          void 0 !== wW[zR] && this._renderTarget.setTexture(CW[wW[zR]], zR), WW._texture = CW[zR], WW._texture && (WW._noMipmap = !WW._texture.useMipMaps, WW._useSRGBBuffer = WW._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let WW = 0; WW < this._textures.length; WW++) this._textures[WW]._texture = null, this._textures[WW].dispose()
      }
      _createTextures(WW) {
        const RW = this._renderTarget.textures;
        this._textures = [];
        for (let MW = 0; MW < RW.length; MW++) {
          const wW = new kR.d(null, this.QRW());
          WW?.[MW] && (wW.name = WW[MW]), wW._texture = RW[MW], wW._texture && (wW._noMipmap = !wW._texture.useMipMaps, wW._useSRGBBuffer = wW._texture._useSRGBBuffer), this._textures.push(wW)
        }
      }
      setInternalTexture(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === RW && (this._texture = WW), this.renderTarget.setTexture(WW, RW, MW), this.textures[RW] || (this.textures[RW] = new kR.d(null, this.QRW()), this.textures[RW].name = this._textureNames?.[RW] ?? this.textures[RW].name), this.textures[RW]._texture = WW, this.textures[RW]._noMipmap = !WW.useMipMaps, this.textures[RW]._useSRGBBuffer = WW._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[RW] = WW.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[RW] = WW.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[RW] = WW._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[RW])) {
          let MW;
          MW = WW.is2DArray ? 35866 : WW.isCube ? 34067 : WW.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[RW] = MW
        }
      }
      setLayerAndFaceIndex(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[WW] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[WW] = RW), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[WW] = MW), this.renderTarget.setLayerAndFaceIndex(WW, RW, MW))
      }
      setLayerAndFaceIndices(WW, RW) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = WW, this._multiRenderTargetOptions.faceIndex = RW, this.renderTarget.setLayerAndFaceIndices(WW, RW))
      }
      get samples() {
        return this._samples
      }
      set samples(WW) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(WW) : this._samples = WW
      }
      resize(WW) {
        this._processSizeParameter(WW), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(WW, RW, MW) {
        this._multiRenderTargetOptions.htW = WW, this._count = WW;
        const wW = [],
          CW = [],
          zR = [],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [];
        this._textureNames = MW, this._initTypes(WW, wW, CW, zR, AW, bR, yR, NW, eW, RW), this._multiRenderTargetOptions.types = wW, this._multiRenderTargetOptions.samplingModes = CW, this._multiRenderTargetOptions.useSRGBBuffers = zR, this._multiRenderTargetOptions.formats = AW, this._multiRenderTargetOptions.targetTypes = bR, this._multiRenderTargetOptions.faceIndex = yR, this._multiRenderTargetOptions.layerIndex = NW, this._multiRenderTargetOptions.layerCounts = eW, this._multiRenderTargetOptions.labels = MW, this._rebuild(!1, !0, MW)
      }
      _unbindFrameBuffer(WW, RW) {
        this._renderTarget && WW.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(RW)
        }))
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), WW ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const WW = this._renderTarget?.textures;
        if (WW) {
          for (let RW = WW.length - 1; RW >= 0; RW--) this._textures[RW]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var pR = MW(37749);
    class hR {
      constructor(WW) {
        this.name = pR.d.NAME_GEOMETRYBUFFERRENDERER, this.LC = WW
      }
      register() {
        this.LC._gatherRenderTargetsStage.registerStep(pR.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(WW) {
        this.LC._geometryBufferRenderer && WW.push(this.LC._geometryBufferRenderer.getGBuffer())
      }
    }
    let UR = !1;
    var ER;
    ! function(WW) {
      WW[WW.Small = 0] = "Small", WW[WW.Medium = 1] = "Medium", WW[WW.Large = 2] = "Large", WW[WW.ExtraLarge = 3] = "ExtraLarge"
    }(ER || (ER = {}));
    const VR = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      mM = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class xM {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(WW) {
        if (WW && this._enableMeshBlendTag && !this._scene.mC().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = WW
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(WW) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = WW, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(WW, RW) {
        WW === xM.POSITION_TEXTURE_TYPE ? (this._positionIndex = RW, this._enablePosition = !0) : WW === xM.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = RW, this._enableVelocity = !0) : WW === xM.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = RW, this._enableVelocityLinear = !0) : WW === xM.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = RW, this._enableReflectivity = !0) : WW === xM.DEPTH_TEXTURE_TYPE ? (this._depthIndex = RW, this._enableDepth = !0) : WW === xM.NORMAL_TEXTURE_TYPE ? (this._normalIndex = RW, this._enableNormal = !0) : WW === xM.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = RW, this._enableScreenspaceDepth = !0) : WW === xM.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = RW, this._enableIrradiance = !0) : WW === xM.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = RW, this._enableObjectId = !0) : WW === xM.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = RW, this._enableMeshBlendTag = !0)
      }
      _setAttachments(WW) {
        this._attachmentsFromPrePass = WW
      }
      _linkInternalTexture(WW) {
        this._multiRenderTarget.setInternalTexture(WW, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(WW) {
        this._multiRenderTarget.renderList = WW
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(WW) {
        switch (WW) {
          case xM.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case xM.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case xM.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case xM.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case xM.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case xM.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case xM.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case xM.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case xM.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case xM.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(WW) {
        this._enableDepth = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(WW) {
        this._enableNormal = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(WW) {
        this._enablePosition = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(WW) {
        this._enableVelocity = WW, WW || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = WW
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(WW) {
        this._enableVelocityLinear = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(WW) {
        this._enableReflectivity = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(WW) {
        this._enableScreenspaceDepth = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(WW) {
        this._enableIrradiance = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(WW) {
        if (WW && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (WW && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (WW && !this._enableObjectId && !this._linkedWithPrePass) {
          const WW = this._scene.mC(),
            RW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8),
            MW = this._assignRenderTargetIndices()[0] + 1;
          if (WW.getCaps().drawBuffersExtension && MW > RW) throw new Error(`GeometryBufferRenderer: ${MW} color attachments were requested, but this engine supports at most ${RW}`)
        }
        this._enableObjectId = WW, WW || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(WW) {
        if (this._enableMeshBlendTag !== WW) {
          if (WW) {
            const WW = this._scene.mC();
            if (! function(WW) {
                return "NATIVE" !== WW.shaderPlatformName && (WW.isWebGPU || 2 === WW.Gs)
              }(WW)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !WW.isWebGPU && !WW.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const RW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8),
                MW = this._assignRenderTargetIndices()[0] + 1;
              if (WW.getCaps().drawBuffersExtension && MW > RW) throw new Error(`GeometryBufferRenderer: ${MW} color attachments were requested, but this engine supports at most ${RW}`)
            }
          }
          this._enableMeshBlendTag = WW, WW || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get LC() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        var CW;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new nW.h(0, 0, 0, 0), this._clearDepthColor = new nW.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = WW, this._ratioOrDimensions = RW, this._useUbo = WW.mC().supportsUniformBuffers, this._depthFormat = MW, this._textureTypesAndFormats = wW || {}, this._initShaderSourceAsync(), CW = xM, UR || (UR = !0, Object.defineProperty(EW.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(WW) {
            WW && WW.isSupported && (this._geometryBufferRenderer = WW)
          },
          enumerable: !0,
          configurable: !0
        }), EW.i.prototype.enableGeometryBufferRenderer = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            MW = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new CW(this, WW, RW, MW), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, EW.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, CW._SceneComponentInitialization = WW => {
          let RW = WW._getComponent(pR.d.NAME_GEOMETRYBUFFERRENDERER);
          RW || (RW = new hR(WW), WW.SyW(RW))
        }), xM._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.mC().isWebGPU && !xM.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([MW.e(307).then((() => MW(59220))), Promise.all([MW.e(306), MW.e(318)]).then((() => MW(59228)))])) : await Promise.all([MW.e(290).then((() => MW(59234))), MW.e(289).then((() => MW(59238)))]), this._shadersLoaded = !0
      }
      isReady(WW, RW) {
        if (!this._shadersLoaded) return !1;
        const MW = WW.Ow();
        if (MW && MW.disableDepthWrite) return !1;
        if (function(WW) {
            return WW._isGaussianSplatting || "GaussianSplattingMesh" === (RW = WW.getClassName()) || "GaussianSplattingStream" === RW;
            var RW
          }(WW.getMesh())) return !1;
        const wW = [],
          CW = [mR.j.PositionKind],
          zR = WW.getMesh();
        zR.isVerticesDataPresent(mR.j.NormalKind) && (wW.push("#define HAS_NORMAL_ATTRIBUTE"), CW.push(mR.j.NormalKind));
        let AW = !1,
          bR = !1;
        if (MW) {
          let WW = !1;
          if (MW.needAlphaTestingForMesh(zR) && MW.getAlphaTestTexture() && (wW.push("#define ALPHATEST"), wW.push(`#define ALPHATEST_UV${MW.getAlphaTestTexture().coordinatesIndex+1}`), WW = !0), (MW.bumpTexture || MW.normalTexture || MW.geometryNormalTexture) && DW.e.BumpTextureEnabled) {
            const RW = MW.bumpTexture || MW.normalTexture || MW.geometryNormalTexture;
            wW.push("#define BUMP"), wW.push(`#define BUMP_UV${RW.coordinatesIndex+1}`), WW = !0
          }
          if (this._enableReflectivity) {
            let RW = !1;
            if ("PBRMetallicRoughnessMaterial" === MW.getClassName()) MW.metallicRoughnessTexture && (wW.push("#define ORMTEXTURE"), wW.push(`#define REFLECTIVITY_UV${MW.metallicRoughnessTexture.coordinatesIndex+1}`), wW.push("#define METALLICWORKFLOW"), WW = !0, RW = !0), null != MW.metallic && (wW.push("#define METALLIC"), wW.push("#define METALLICWORKFLOW"), RW = !0), null != MW.roughness && (wW.push("#define ROUGHNESS"), wW.push("#define METALLICWORKFLOW"), RW = !0), RW && (MW.baseTexture && (wW.push("#define ALBEDOTEXTURE"), wW.push(`#define ALBEDO_UV${MW.baseTexture.coordinatesIndex+1}`), MW.baseTexture.gammaSpace && wW.push("#define GAMMAALBEDO"), WW = !0), MW.baseColor && wW.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === MW.getClassName()) MW.specularGlossinessTexture ? (wW.push("#define SPECULARGLOSSINESSTEXTURE"), wW.push(`#define REFLECTIVITY_UV${MW.specularGlossinessTexture.coordinatesIndex+1}`), WW = !0, MW.specularGlossinessTexture.gammaSpace && wW.push("#define GAMMAREFLECTIVITYTEXTURE")) : MW.specularColor && wW.push("#define REFLECTIVITYCOLOR"), null != MW.glossiness && wW.push("#define GLOSSINESS");
            else if ("PBRMaterial" === MW.getClassName()) MW.metallicTexture && (wW.push("#define ORMTEXTURE"), wW.push(`#define REFLECTIVITY_UV${MW.metallicTexture.coordinatesIndex+1}`), wW.push("#define METALLICWORKFLOW"), WW = !0, RW = !0), null != MW.metallic && (wW.push("#define METALLIC"), wW.push("#define METALLICWORKFLOW"), RW = !0), null != MW.roughness && (wW.push("#define ROUGHNESS"), wW.push("#define METALLICWORKFLOW"), RW = !0), RW ? (MW.albedoTexture && (wW.push("#define ALBEDOTEXTURE"), wW.push(`#define ALBEDO_UV${MW.albedoTexture.coordinatesIndex+1}`), MW.albedoTexture.gammaSpace && wW.push("#define GAMMAALBEDO"), WW = !0), MW.albedoColor && wW.push("#define ALBEDOCOLOR")) : (MW.reflectivityTexture ? (wW.push("#define SPECULARGLOSSINESSTEXTURE"), wW.push(`#define REFLECTIVITY_UV${MW.reflectivityTexture.coordinatesIndex+1}`), MW.reflectivityTexture.gammaSpace && wW.push("#define GAMMAREFLECTIVITYTEXTURE"), WW = !0) : MW.reflectivityColor && wW.push("#define REFLECTIVITYCOLOR"), null != MW.microSurface && wW.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === MW.getClassName()) MW.specularTexture && (wW.push("#define REFLECTIVITYTEXTURE"), wW.push(`#define REFLECTIVITY_UV${MW.specularTexture.coordinatesIndex+1}`), MW.specularTexture.gammaSpace && wW.push("#define GAMMAREFLECTIVITYTEXTURE"), WW = !0), MW.specularColor && wW.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === MW.getClassName()) {
              const RW = MW;
              wW.push("#define METALLIC"), wW.push("#define ROUGHNESS"), RW._useRoughnessFromMetallicTextureGreen && RW.baseMetalnessTexture ? (wW.push("#define ORMTEXTURE"), wW.push(`#define REFLECTIVITY_UV${RW.baseMetalnessTexture.coordinatesIndex+1}`), WW = !0) : RW.baseMetalnessTexture ? (wW.push("#define METALLIC_TEXTURE"), wW.push(`#define METALLIC_UV${RW.baseMetalnessTexture.coordinatesIndex+1}`), WW = !0) : RW.specularRoughnessTexture && (wW.push("#define ROUGHNESS_TEXTURE"), wW.push(`#define ROUGHNESS_UV${RW.specularRoughnessTexture.coordinatesIndex+1}`), WW = !0), RW.baseColorTexture && (wW.push("#define ALBEDOTEXTURE"), wW.push(`#define ALBEDO_UV${RW.baseColorTexture.coordinatesIndex+1}`), RW.baseColorTexture.gammaSpace && wW.push("#define GAMMAALBEDO"), WW = !0), RW.baseColor && wW.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (wW.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === MW.getClassName())) {
            const RW = MW;
            RW.subsurfaceWeight > 0 && RW.subsurfaceWeightTexture && (wW.push("#define SUBSURFACE_WEIGHT"), wW.push(`#define SUBSURFACEWEIGHT_UV${RW.subsurfaceWeightTexture.coordinatesIndex+1}`), WW = !0), RW.transmissionWeight > 0 && RW.transmissionWeightTexture && (wW.push("#define TRANSMISSION_WEIGHT"), wW.push(`#define TRANSMISSIONWEIGHT_UV${RW.transmissionWeightTexture.coordinatesIndex+1}`), WW = !0)
          }
          WW && (wW.push("#define NEED_UV"), zR.isVerticesDataPresent(mR.j.UVKind) && (CW.push(mR.j.UVKind), wW.push("#define UV1"), AW = !0), zR.isVerticesDataPresent(mR.j.UV2Kind) && (CW.push(mR.j.UV2Kind), wW.push("#define UV2"), bR = !0))
        }
        if (this._enableDepth && (wW.push("#define DEPTH"), wW.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (wW.push("#define NORMAL"), wW.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (wW.push("#define POSITION"), wW.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (wW.push("#define VELOCITY"), wW.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(zR) && wW.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (wW.push("#define VELOCITY_LINEAR"), wW.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(zR) && wW.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (wW.push("#define REFLECTIVITY"), wW.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (wW.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), wW.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          wW.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), wW.push("#define IRRADIANCE");
          const WW = this._scene;
          if (WW.environmentTexture) {
            const RW = {};
            let CW = !1,
              zR = 0;
            "OpenPBRMaterial" !== MW.getClassName() && "StandardMaterial" !== MW.getClassName() && "PBRMetallicRoughnessMaterial" !== MW.getClassName() && "PBRSpecularGlossinessMaterial" !== MW.getClassName() && "PBRMaterial" !== MW.getClassName() || (CW = !!MW.realtimeFiltering, zR = MW.realtimeFilteringQuality || 0), (0, ZW._)(WW, WW.environmentTexture, RW, CW, zR, !0);
            for (const WW in RW) RW[WW] && wW.push("#define " + WW);
            RW.USEIRRADIANCEMAP || wW.push("#define SPHERICAL_HARMONICS");
            const AW = WW.postProcessRenderPipelineManager.supportedPipelines.find((WW => "IBLShadowsRenderPipeline" === WW.getClassName()));
            if (AW) {
              const WW = AW;
              WW._getAccumulatedTexture() && (wW.push("#define IBL_SHADOW_TEXTURE"), WW.coloredShadows && wW.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (wW.push("#define OBJECT_ID"), wW.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (wW.push("#define MESH_BLEND_TAG"), wW.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && wW.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && wW.push("#define ENCODE_NORMAL"), zR.useBones && zR.computeBonesUsingShaders && zR.skeleton ? (CW.push(mR.j.MatricesIndicesKind), CW.push(mR.j.MatricesWeightsKind), zR.numBoneInfluencers > 4 && (CW.push(mR.j.MatricesIndicesExtraKind), CW.push(mR.j.MatricesWeightsExtraKind)), wW.push("#define NUM_BONE_INFLUENCERS " + zR.numBoneInfluencers), wW.push("#define BONETEXTURE " + zR.skeleton.isUsingTextureForMatrices), wW.push("#define BonesPerMesh " + (zR.skeleton.bones.length + 1))) : (wW.push("#define NUM_BONE_INFLUENCERS 0"), wW.push("#define BONETEXTURE false"), wW.push("#define BonesPerMesh 0"));
        const yR = zR.morphTargetManager ? (0, ZW.T)(zR.morphTargetManager, wW, CW, zR, !0, !0, !1, AW, bR, !1) : 0;
        RW && (wW.push("#define INSTANCES"), (0, ZW.ub)(CW, this._enableVelocity || this._enableVelocityLinear), WW.getRenderingMesh().hasThinInstances && wW.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? wW.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : wW.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, eR.g)(MW, this._scene, wW);
        const NW = this._scene.mC(),
          eW = WW._getDrawWrapper(void 0, !0),
          BW = eW.defines,
          tR = wW.join("\n");
        return BW !== tR && eW.setEffect(NW.createEffect("geometry", {
          attributes: CW,
          uniformsNames: mM,
          samplers: VR,
          defines: tR,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: yR
          },
          shaderLanguage: this.shaderLanguage
        }, NW), tR), eW.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(WW) {
        if (this._enableObjectId && 1 !== WW) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== WW) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = WW
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.mC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.LC.mC()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.LC.mC().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const WW = [],
          RW = [];
        let MW = 0;
        return this._enableDepth && (this._depthIndex = MW, MW++, WW.push("gBuffer_Depth"), RW.push(this._textureTypesAndFormats[xM.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = MW, MW++, WW.push("gBuffer_Normal"), RW.push(this._textureTypesAndFormats[xM.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = MW, MW++, WW.push("gBuffer_Position"), RW.push(this._textureTypesAndFormats[xM.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = MW, MW++, WW.push("gBuffer_Velocity"), RW.push(this._textureTypesAndFormats[xM.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = MW, MW++, WW.push("gBuffer_VelocityLinear"), RW.push(this._textureTypesAndFormats[xM.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = MW, MW++, WW.push("gBuffer_Reflectivity"), RW.push(this._textureTypesAndFormats[xM.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = MW, MW++, WW.push("gBuffer_ScreenspaceDepth"), RW.push(this._textureTypesAndFormats[xM.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = MW, MW++, WW.push("gBuffer_Irradiance"), RW.push(this._textureTypesAndFormats[xM.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = MW, MW++, WW.push("gBuffer_ObjectId"), RW.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = MW, MW++, WW.push("gBuffer_MeshBlendTag"), RW.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [MW, WW, RW]
      }
      _createRenderTargets() {
        const WW = this._scene.mC(),
          [RW, MW, wW] = this._assignRenderTargetIndices(),
          CW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8);
        if (WW.getCaps().drawBuffersExtension && RW > CW) throw new Error(`GeometryBufferRenderer: ${RW} color attachments were requested, but this engine supports at most ${CW}`);
        let AW = 0;
        WW._caps.textureFloat && WW._caps.textureFloatLinearFiltering ? AW = 1 : WW._caps.textureHalfFloat && WW._caps.textureHalfFloatLinearFiltering && (AW = 2);
        const bR = this._getRenderTargetDimensions(),
          yR = [],
          NW = [],
          eW = [];
        for (const zR of wW) zR ? (yR.push(zR.textureType), NW.push(zR.textureFormat), eW.push(zR.samplingMode ?? 2)) : (yR.push(AW), NW.push(5), eW.push(2));
        if (this._normalsAreUnsigned = 11 === yR[xM.NORMAL_TEXTURE_TYPE] || 13 === yR[xM.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new dR("gBuffer", bR, RW, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: yR,
            formats: NW,
            samplingModes: eW,
            depthTextureFormat: this._depthFormat
          }, MW.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = kR.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = kR.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const BW = [!0],
          tR = [!1],
          TW = [!0];
        for (let zR = 1; zR < RW; ++zR) BW.push(!0), TW.push(!1), tR.push(!0);
        const gR = WW.buildTextureLayout(BW),
          iR = WW.buildTextureLayout(tR),
          YW = WW.buildTextureLayout(TW);
        this._multiRenderTarget.onClearObservable.add((WW => {
          const RW = this.useSpecificClearForDepthTexture ? iR : gR;
          WW.clearAttachments(this._clearColor, RW, !0, !0, !0), this.useSpecificClearForDepthTexture && WW.clearAttachments(this._clearDepthColor, YW, !0, !1, !1), WW.bindAttachments(gR)
        })), this._resizeObserver = WW.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const JW = WW => {
          const RW = WW.getRenderingMesh(),
            MW = WW.getEffectiveMesh(),
            wW = this._scene,
            CW = wW.mC(),
            AW = WW.Ow();
          if (!AW) return;
          if (MW._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[MW.uniqueId] && (this._previousTransformationMatrices[MW.uniqueId] = {
              zM: VW.d.Identity(),
              viewProjection: wW.getTransformMatrix()
            }, RW.skeleton)) {
            const WW = RW.skeleton.getTransformMatrices(RW);
            this._previousBonesTransformationMatrices[RW.uniqueId] = this._copyBonesTransformationMatrices(WW, new Float32Array(WW.length))
          }
          const bR = RW._getInstancesRenderList(WW._id, !!WW.getReplacementMesh());
          if (bR.mustReturn) return;
          const yR = CW.getCaps().instancedArrays && (null !== bR.visibleInstances[WW._id] || RW.hasThinInstances),
            NW = MW.getWorldMatrix();
          if (this.isReady(WW, yR)) {
            const eW = WW._getDrawWrapper();
            if (!eW) return;
            const BW = eW.effect;
            let tR;
            CW.enableEffect(eW), yR || RW._bind(WW, BW, AW.fillMode), this._useUbo ? ((0, ZW.B)(BW, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (BW.setMatrix("viewProjection", wW.getTransformMatrix()), BW.setMatrix("view", wW.getViewMatrix()), this._scene.bindEyePosition(BW, "vEyePosition"));
            if (RW._instanceDataStorage.isFrozen || !AW.backFaceCulling && null === AW.sideOrientation) tR = RW._effectiveSideOrientation;
            else {
              const WW = MW._getWorldMatrixDeterminant();
              tR = AW._getEffectiveOrientation(RW), WW < 0 && (tR = tR === zR.e.ClockWiseSideOrientation ? zR.e.CounterClockWiseSideOrientation : zR.e.ClockWiseSideOrientation)
            }
            if (AW._preBind(eW, tR), AW.needAlphaTestingForMesh(MW)) {
              const WW = AW.getAlphaTestTexture();
              WW && (BW.setTexture("diffuseSampler", WW), BW.setMatrix("diffuseMatrix", WW.getTextureMatrix()), BW.setFloat("alphaCutOff", AW.alphaCutOff ?? .4))
            }
            if ((AW.bumpTexture || AW.normalTexture || AW.geometryNormalTexture) && wW.mC().getCaps().standardDerivatives && DW.e.BumpTextureEnabled) {
              const WW = AW.bumpTexture || AW.normalTexture || AW.geometryNormalTexture;
              BW.setFloat3("vBumpInfos", WW.coordinatesIndex, 1 / WW.level, AW.parallaxScaleBias), BW.setMatrix("bumpMatrix", WW.getTextureMatrix()), BW.setTexture("bumpSampler", WW), BW.setFloat2("vTangentSpaceParams", AW.invertNormalMapX ? -1 : 1, AW.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === AW.getClassName()) null !== AW.metallicRoughnessTexture && (BW.setTexture("reflectivitySampler", AW.metallicRoughnessTexture), BW.setMatrix("reflectivityMatrix", AW.metallicRoughnessTexture.getTextureMatrix())), null !== AW.metallic && BW.setFloat("metallic", AW.metallic), null !== AW.roughness && BW.setFloat("glossiness", 1 - AW.roughness), null !== AW.baseTexture && (BW.setTexture("albedoSampler", AW.baseTexture), BW.setMatrix("albedoMatrix", AW.baseTexture.getTextureMatrix())), null !== AW.baseColor && BW.setColor3("albedoColor", AW.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === AW.getClassName()) null !== AW.specularGlossinessTexture ? (BW.setTexture("reflectivitySampler", AW.specularGlossinessTexture), BW.setMatrix("reflectivityMatrix", AW.specularGlossinessTexture.getTextureMatrix())) : null !== AW.specularColor && BW.setColor3("reflectivityColor", AW.specularColor), null !== AW.glossiness && BW.setFloat("glossiness", AW.glossiness);
            else if ("PBRMaterial" === AW.getClassName()) null !== AW.metallicTexture && (BW.setTexture("reflectivitySampler", AW.metallicTexture), BW.setMatrix("reflectivityMatrix", AW.metallicTexture.getTextureMatrix())), null !== AW.metallic && BW.setFloat("metallic", AW.metallic), null !== AW.roughness && BW.setFloat("glossiness", 1 - AW.roughness), null !== AW.roughness || null !== AW.metallic || null !== AW.metallicTexture ? (null !== AW.albedoTexture && (BW.setTexture("albedoSampler", AW.albedoTexture), BW.setMatrix("albedoMatrix", AW.albedoTexture.getTextureMatrix())), null !== AW.albedoColor && BW.setColor3("albedoColor", AW.albedoColor)) : (null !== AW.reflectivityTexture ? (BW.setTexture("reflectivitySampler", AW.reflectivityTexture), BW.setMatrix("reflectivityMatrix", AW.reflectivityTexture.getTextureMatrix())) : null !== AW.reflectivityColor && BW.setColor3("reflectivityColor", AW.reflectivityColor), null !== AW.microSurface && BW.setFloat("glossiness", AW.microSurface));
            else if ("StandardMaterial" === AW.getClassName()) null !== AW.specularTexture && (BW.setTexture("reflectivitySampler", AW.specularTexture), BW.setMatrix("reflectivityMatrix", AW.specularTexture.getTextureMatrix())), null !== AW.specularColor && BW.setColor3("reflectivityColor", AW.specularColor);
            else if ("OpenPBRMaterial" === AW.getClassName()) {
              const WW = AW;
              WW._useRoughnessFromMetallicTextureGreen && WW.baseMetalnessTexture ? (BW.setTexture("reflectivitySampler", WW.baseMetalnessTexture), BW.setMatrix("reflectivityMatrix", WW.baseMetalnessTexture.getTextureMatrix())) : WW.baseMetalnessTexture ? (BW.setTexture("metallicSampler", WW.baseMetalnessTexture), BW.setMatrix("metallicMatrix", WW.baseMetalnessTexture.getTextureMatrix())) : WW.specularRoughnessTexture && (BW.setTexture("roughnessSampler", WW.specularRoughnessTexture), BW.setMatrix("roughnessMatrix", WW.specularRoughnessTexture.getTextureMatrix())), BW.setFloat("metallic", WW.baseMetalness), BW.setFloat("glossiness", 1 - WW.specularRoughness), null !== WW.baseColorTexture && (BW.setTexture("albedoSampler", WW.baseColorTexture), BW.setMatrix("albedoMatrix", WW.baseColorTexture.getTextureMatrix())), null !== WW.baseColor && BW.setColor3("albedoColor", WW.baseColor)
            }
            if (this._enableIrradiance && wW.environmentTexture) {
              const WW = wW.environmentTexture,
                RW = wW.postProcessRenderPipelineManager.supportedPipelines.find((WW => "IBLShadowsRenderPipeline" === WW.getClassName()));
              if (RW) {
                const WW = RW._getAccumulatedTexture();
                WW && (BW.setTexture("iblShadowSampler", WW), BW.setFloat2("shadowTextureSize", WW.getSize().width, WW.getSize().height))
              }
              if (BW.setMatrix("reflectionMatrix", WW.getReflectionTextureMatrix()), BW.setFloat2("vReflectionInfos", WW.level * wW.iblIntensity, 0), BW.setTexture("reflectionSampler", WW), WW.irradianceTexture && (BW.setTexture("irradianceSampler", WW.irradianceTexture), WW.irradianceTexture._dominantDirection && BW.setVector3("vReflectionDominantDirection", WW.irradianceTexture._dominantDirection)), WW.sphericalPolynomial) {
                const RW = WW.sphericalPolynomial;
                if (RW.preScaledHarmonics) {
                  const WW = RW.preScaledHarmonics;
                  BW.setVector3("vSphericalL00", WW.l00), BW.setVector3("vSphericalL1_1", WW.l1_1), BW.setVector3("vSphericalL10", WW.l10), BW.setVector3("vSphericalL11", WW.l11), BW.setVector3("vSphericalL2_2", WW.l2_2), BW.setVector3("vSphericalL2_1", WW.l2_1), BW.setVector3("vSphericalL20", WW.l20), BW.setVector3("vSphericalL21", WW.l21), BW.setVector3("vSphericalL22", WW.l22)
                } else BW.setFloat3("vSphericalX", RW.x.x, RW.x.y, RW.x.z), BW.setFloat3("vSphericalY", RW.y.x, RW.y.y, RW.y.z), BW.setFloat3("vSphericalZ", RW.z.x, RW.z.y, RW.z.z), BW.setFloat3("vSphericalXX_ZZ", RW.xx.x - RW.zz.x, RW.xx.y - RW.zz.y, RW.xx.z - RW.zz.z), BW.setFloat3("vSphericalYY_ZZ", RW.yy.x - RW.zz.x, RW.yy.y - RW.zz.y, RW.yy.z - RW.zz.z), BW.setFloat3("vSphericalZZ", RW.zz.x, RW.zz.y, RW.zz.z), BW.setFloat3("vSphericalXY", RW.xy.x, RW.xy.y, RW.xy.z), BW.setFloat3("vSphericalYZ", RW.yz.x, RW.yz.y, RW.yz.z), BW.setFloat3("vSphericalZX", RW.zx.x, RW.zx.y, RW.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === AW.getClassName()) {
                const WW = AW;
                BW.setFloat("vSubsurfaceWeight", WW.subsurfaceWeight), WW.subsurfaceWeightTexture && (BW.setTexture("subsurfaceWeightSampler", WW.subsurfaceWeightTexture), BW.setMatrix("subsurfaceWeightMatrix", WW.subsurfaceWeightTexture.getTextureMatrix())), BW.setFloat("vTransmissionWeight", WW.transmissionWeight), WW.transmissionWeightTexture && (BW.setTexture("transmissionWeightSampler", WW.transmissionWeightTexture), BW.setMatrix("transmissionWeightMatrix", WW.transmissionWeightTexture.getTextureMatrix())), BW.setFloat("vTransmissionScatterAnisotropy", WW.transmissionScatterAnisotropy), BW.setFloat("vSubsurfaceScatterAnisotropy", WW.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, eR.d)(BW, AW, this._scene), RW.useBones && RW.computeBonesUsingShaders && RW.skeleton) {
              const WW = RW.skeleton;
              if (WW.isUsingTextureForMatrices && BW.getUniformIndex("boneTextureInfo") > -1) {
                const MW = WW.getTransformMatrixTexture(RW);
                BW.setTexture("boneSampler", MW), BW.setFloat2("boneTextureInfo", WW._textureWidth, WW._textureHeight)
              } else BW.setMatrices("mBones", RW.skeleton.getTransformMatrices(RW));
              (this._enableVelocity || this._enableVelocityLinear) && BW.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[RW.uniqueId])
            }
            if ((0, ZW.x)(RW, BW), RW.morphTargetManager && RW.morphTargetManager.isUsingTextureForTargets && RW.morphTargetManager._bind(BW), (this._enableVelocity || this._enableVelocityLinear) && (BW.setMatrix("previousWorld", this._previousTransformationMatrices[MW.uniqueId].zM), BW.setMatrix("previousViewProjection", this._previousTransformationMatrices[MW.uniqueId].viewProjection)), this._enableObjectId) {
              let WW = RW.uniqueId;
              if (this.objectIdProvider) WW = (0, TR.h)(RW, this.objectIdProvider);
              else if (WW > 16777215) throw new Error(`Invalid geometry object ID ${WW} for mesh "${RW.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              BW.setFloat("objectId", WW)
            }
            if (this._enableMeshBlendTag) {
              const WW = this.meshBlendTagProvider ? (0, TR.g)(RW, this.meshBlendTagProvider) : RW.meshBlendingTag;
              BW.setInt("meshBlendTag", WW)
            }
            yR && RW.hasThinInstances && BW.setMatrix("world", NW), RW._processRendering(MW, WW, BW, AW.fillMode, bR, yR, ((WW, RW) => {
              WW || BW.setMatrix("world", RW)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[MW.uniqueId].zM = NW.clone(), this._previousTransformationMatrices[MW.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), RW.skeleton && this._copyBonesTransformationMatrices(RW.skeleton.getTransformMatrices(RW), this._previousBonesTransformationMatrices[MW.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (RW, MW, wW) => {
          if ((wW || 0 === MW) && RW.Qs)
            for (let CW = 0; CW < RW.Qs.length; ++CW) {
              const MW = RW.Qs[CW],
                wW = MW.Ow(),
                zR = MW.getRenderingMesh();
              if (!wW) continue;
              const AW = zR._getInstancesRenderList(MW._id, !!MW.getReplacementMesh()),
                bR = WW.getCaps().instancedArrays && (null !== AW.visibleInstances[MW._id] || zR.hasThinInstances);
              if (!this.isReady(MW, bR)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (RW, MW, wW, CW) => {
          let zR;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.mC().bindAttachments(this._attachmentsFromPrePass)
          }
          if (CW.length) {
            for (WW.setColorWrite(!1), zR = 0; zR < CW.length; zR++) JW(CW.data[zR]);
            WW.setColorWrite(!0)
          }
          for (zR = 0; zR < RW.length; zR++) JW(RW.data[zR]);
          for (WW.setDepthWrite(!1), zR = 0; zR < MW.length; zR++) JW(MW.data[zR]);
          if (this.renderTransparentMeshes)
            for (zR = 0; zR < wW.length; zR++) JW(wW.data[zR]);
          WW.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const WW = this._scene.mC();
        return {
          width: Math.max(1, Math.floor(WW.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(WW.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(WW, RW) {
        for (let MW = 0; MW < WW.length; MW++) RW[MW] = WW[MW];
        return RW
      }
    }
    xM.ForceGLSL = !1, xM.DEPTH_TEXTURE_TYPE = 0, xM.NORMAL_TEXTURE_TYPE = 1, xM.POSITION_TEXTURE_TYPE = 2, xM.VELOCITY_TEXTURE_TYPE = 3, xM.REFLECTIVITY_TEXTURE_TYPE = 4, xM.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, xM.VELOCITY_LINEAR_TEXTURE_TYPE = 6, xM.IRRADIANCE_TEXTURE_TYPE = 7, xM.OBJECT_ID_TEXTURE_TYPE = 8, xM.MESH_BLEND_TAG_TEXTURE_TYPE = 9, xM._SceneComponentInitialization = WW => {
      throw (0, JR.g)("GeometryBufferRendererSceneComponent")
    };
    var vM = MW(35361);
    const KR = {
      effect: null,
      subMesh: null
    };

    function uR(WW) {
      if ("number" === typeof WW) return 1;
      if (WW instanceof VW.n) return 2;
      if (WW instanceof VW.q || WW instanceof nW.d) return 3;
      if (WW instanceof VW.s || WW instanceof nW.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class OR {
      populateVectorFromLinkedProperties(WW) {
        const RW = uR(WW);
        for (const MW in this.linkedProperties) {
          const WW = this.linkedProperties[MW],
            wW = WW.numComponents;
          if (RW < wW || WW.targetUniformComponentOffset > RW - wW) return void(1 == wW ? XW.b.Error(`Float property ${WW.name} has an offset that is too large.`) : XW.b.Error(`Vector${wW} property ${WW.name} won't fit in Vector${RW} or has an offset that is too large.`));
          "number" === typeof WW.value ? OR._tmpArray[WW.targetUniformComponentOffset] = WW.value : WW.value.toArray(OR._tmpArray, WW.targetUniformComponentOffset)
        }
        WW.MyW(OR._tmpArray)
      }
      constructor(WW, RW) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = WW, this.numComponents = RW
      }
    }
    OR._tmpArray = [0, 0, 0, 0];
    class nR {
      constructor(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = WW, this.targetUniformName = MW, this.defaultValue = RW, this.value = RW, this.targetUniformComponentNum = wW, this.targetUniformComponentOffset = CW, this.requiredDefine = zR
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : uR(this.defaultValue)
      }
    }
    class GR {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(WW, RW, MW) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = WW, this.samplerPrefix = RW, this.textureDefine = MW
      }
    }
    class LR extends((0, iM.e)((0, gM.d)(xR.e))) {}
    class HR extends(function(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(LR)) {}
    class DR extends((0, GW.h)(HR)) {
      constructor(WW) {
        super(WW), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class qM extends((0, YR.e)(HW.c)) {}
    let ZR = (() => {
        var WW, RW, wW, CW, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, aR, sW, dW, pW, EW, xR, vR, KW, uW, GW, HW, SW, WR, RR, MR, wR, CR, zM, AR, bM, yM, NR, gM, iM, YR, JR, PR, IR, oR, lR, FR, rM, cM, XR, jM, kM, aM, sR, dR, pR, hR, UR, ER, VR, mM, vM, uR, LR, HR, ZR, SR, WM, RM, MM, wM, CM, zw, AM, bw, yw, NM, eM, BM, tw, TM, gw, iw, YM, JM, PM, IM, oM, lM, FM, fM, QM, rw, cwW, XM, jw;
        let kw, aw, sM, dM, pM, hM, UM, EM, VM, mw, xw, vw, KM, uM, OM, nM, GM, LM, HM, DM, qw, ZM, SM, Ww, Rw, Mw, ww, Cw, zC, Aw, bC, yC, Nw, ew, Bw, tC, Tw, gC, iC, Yw, Jw, Pw, Iw, ow, lw, Fw, fw, Qw, rC, cC, Xw, jC, kC, aC, sw, dw, pw, hw, Uw, Ew, Vw, mC, xC, vC, Kw, uw, Ow, nw, Gw, Lw, Hw, Dw, qC, Zw, Sw, WC, RC, MC, wC, CC, zz, AC, bz, yz, NC, eC, BC, tz, TC, gz, iz, YC, JC, PC, IC, oC, lC, FC, fC, QC, rz, cz, XC, jz, kz, az = qM,
          sC = [],
          dC = [],
          pC = [],
          hC = [],
          UC = [],
          EC = [],
          VC = [],
          mz = [],
          xz = [],
          vz = [],
          KC = [],
          uC = [],
          OC = [],
          nC = [],
          GC = [],
          LC = [],
          HC = [],
          DC = [],
          qz = [],
          ZC = [],
          SC = [],
          Wz = [],
          Rz = [],
          Mz = [],
          wz = [],
          Cz = [],
          zA = [],
          Az = [],
          bA = [],
          yA = [],
          Nz = [],
          ez = [],
          Bz = [],
          tA = [],
          Tz = [],
          gA = [],
          iA = [],
          Yz = [],
          Jz = [],
          Pz = [],
          Iz = [],
          oz = [],
          lz = [],
          Fz = [],
          fz = [],
          Qz = [],
          rA = [],
          cA = [],
          Xz = [],
          jA = [],
          kA = [],
          aA = [],
          sz = [],
          dz = [],
          pz = [],
          hz = [],
          Uz = [],
          Ez = [],
          Vz = [],
          mA = [],
          xA = [],
          vA = [],
          Kz = [],
          uz = [],
          Oz = [],
          nz = [],
          Gz = [],
          Lz = [],
          Hz = [],
          Dz = [],
          qA = [],
          Zz = [],
          Sz = [],
          WA = [],
          RA = [],
          MA = [],
          wA = [],
          CA = [],
          zb = [],
          AA = [],
          bb = [],
          yb = [],
          NA = [],
          eA = [],
          BA = [],
          tb = [],
          TA = [],
          gb = [],
          ib = [],
          YA = [],
          JA = [],
          PA = [],
          IA = [],
          oA = [],
          lA = [],
          FA = [],
          fA = [],
          QA = [],
          rb = [],
          cb = [],
          XA = [],
          jb = [],
          kb = [],
          ab = [],
          sA = [],
          dA = [],
          pA = [],
          hA = [],
          UA = [],
          EA = [],
          VA = [],
          mb = [],
          xb = [],
          vb = [],
          KA = [],
          uA = [],
          OA = [],
          nA = [],
          GA = [],
          LA = [],
          HA = [],
          DA = [],
          qb = [],
          ZA = [],
          SA = [],
          Wb = [],
          Rb = [],
          Mb = [],
          wb = [],
          Cb = [],
          zy = [],
          Ab = [],
          by = [],
          yy = [],
          Nb = [],
          eb = [],
          Bb = [],
          ty = [],
          Tb = [],
          gy = [],
          iy = [],
          Yb = [],
          Jb = [],
          Pb = [],
          Ib = [],
          ob = [],
          lb = [],
          Fb = [],
          fb = [],
          Qb = [],
          ry = [],
          cy = [],
          Xb = [],
          jy = [],
          ky = [],
          ay = [],
          sb = [],
          db = [],
          pb = [],
          hb = [],
          Ub = [],
          Eb = [],
          Vb = [],
          my = [],
          xy = [],
          vy = [],
          Kb = [],
          ub = [],
          Ob = [],
          nb = [],
          Gb = [],
          Lb = [],
          Hb = [],
          Db = [],
          qy = [],
          Zb = [],
          Sb = [],
          Wy = [],
          Ry = [],
          My = [],
          wy = [],
          Cy = [],
          zN = [],
          Ay = [],
          bN = [],
          yN = [],
          Ny = [],
          ey = [],
          By = [],
          tN = [],
          Ty = [],
          gN = [],
          iN = [],
          Yy = [],
          Jy = [],
          Py = [],
          Iy = [],
          oy = [],
          ly = [],
          Fy = [],
          fy = [],
          Qy = [],
          rN = [],
          cN = [],
          Xy = [];
        return WW = class extends az {
          get baseWeight() {
            return (0, rR.c)(this, RW, "f")
          }
          set baseWeight(WW) {
            (0, rR.d)(this, RW, WW, "f")
          }
          get baseWeightTexture() {
            return (0, rR.c)(this, wW, "f")
          }
          set baseWeightTexture(WW) {
            (0, rR.d)(this, wW, WW, "f")
          }
          get baseColor() {
            return (0, rR.c)(this, CW, "f")
          }
          set baseColor(WW) {
            (0, rR.d)(this, CW, WW, "f")
          }
          get baseColorTexture() {
            return (0, rR.c)(this, AW, "f")
          }
          set baseColorTexture(WW) {
            (0, rR.d)(this, AW, WW, "f")
          }
          get baseDiffuseRoughness() {
            return (0, rR.c)(this, bR, "f")
          }
          set baseDiffuseRoughness(WW) {
            (0, rR.d)(this, bR, WW, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, rR.c)(this, yR, "f")
          }
          set baseDiffuseRoughnessTexture(WW) {
            (0, rR.d)(this, yR, WW, "f")
          }
          get baseMetalness() {
            return (0, rR.c)(this, NW, "f")
          }
          set baseMetalness(WW) {
            (0, rR.d)(this, NW, WW, "f")
          }
          get baseMetalnessTexture() {
            return (0, rR.c)(this, eW, "f")
          }
          set baseMetalnessTexture(WW) {
            (0, rR.d)(this, eW, WW, "f")
          }
          get specularWeight() {
            return (0, rR.c)(this, BW, "f")
          }
          set specularWeight(WW) {
            (0, rR.d)(this, BW, WW, "f")
          }
          get specularWeightTexture() {
            return (0, rR.c)(this, tR, "f")
          }
          set specularWeightTexture(WW) {
            (0, rR.d)(this, tR, WW, "f")
          }
          get specularColor() {
            return (0, rR.c)(this, TW, "f")
          }
          set specularColor(WW) {
            (0, rR.d)(this, TW, WW, "f")
          }
          get specularColorTexture() {
            return (0, rR.c)(this, gR, "f")
          }
          set specularColorTexture(WW) {
            (0, rR.d)(this, gR, WW, "f")
          }
          get specularRoughness() {
            return (0, rR.c)(this, iR, "f")
          }
          set specularRoughness(WW) {
            (0, rR.d)(this, iR, WW, "f")
          }
          get specularRoughnessTexture() {
            return (0, rR.c)(this, YW, "f")
          }
          set specularRoughnessTexture(WW) {
            (0, rR.d)(this, YW, WW, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, rR.c)(this, JW, "f")
          }
          set specularRoughnessAnisotropy(WW) {
            (0, rR.d)(this, JW, WW, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, rR.c)(this, PW, "f")
          }
          set specularRoughnessAnisotropyTexture(WW) {
            (0, rR.d)(this, PW, WW, "f")
          }
          get specularIor() {
            return (0, rR.c)(this, IW, "f")
          }
          set specularIor(WW) {
            (0, rR.d)(this, IW, WW, "f")
          }
          get transmissionWeight() {
            return (0, rR.c)(this, oW, "f")
          }
          set transmissionWeight(WW) {
            (0, rR.d)(this, oW, WW, "f")
          }
          get transmissionWeightTexture() {
            return (0, rR.c)(this, lW, "f")
          }
          set transmissionWeightTexture(WW) {
            (0, rR.d)(this, lW, WW, "f")
          }
          get transmissionColor() {
            return (0, rR.c)(this, FW, "f")
          }
          set transmissionColor(WW) {
            (0, rR.d)(this, FW, WW, "f")
          }
          get transmissionColorTexture() {
            return (0, rR.c)(this, fW, "f")
          }
          set transmissionColorTexture(WW) {
            (0, rR.d)(this, fW, WW, "f")
          }
          get transmissionDepth() {
            return (0, rR.c)(this, QW, "f")
          }
          set transmissionDepth(WW) {
            (0, rR.d)(this, QW, WW, "f")
          }
          get transmissionDepthTexture() {
            return (0, rR.c)(this, aR, "f")
          }
          set transmissionDepthTexture(WW) {
            (0, rR.d)(this, aR, WW, "f")
          }
          get transmissionScatter() {
            return (0, rR.c)(this, sW, "f")
          }
          set transmissionScatter(WW) {
            (0, rR.d)(this, sW, WW, "f")
          }
          get transmissionScatterTexture() {
            return (0, rR.c)(this, dW, "f")
          }
          set transmissionScatterTexture(WW) {
            (0, rR.d)(this, dW, WW, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, rR.c)(this, pW, "f")
          }
          set transmissionScatterAnisotropy(WW) {
            (0, rR.d)(this, pW, WW, "f")
          }
          get transmissionDispersionScale() {
            return (0, rR.c)(this, EW, "f")
          }
          set transmissionDispersionScale(WW) {
            (0, rR.d)(this, EW, WW, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, rR.c)(this, xR, "f")
          }
          set transmissionDispersionScaleTexture(WW) {
            (0, rR.d)(this, xR, WW, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, rR.c)(this, vR, "f")
          }
          set transmissionDispersionAbbeNumber(WW) {
            (0, rR.d)(this, vR, WW, "f")
          }
          get subsurfaceWeight() {
            return (0, rR.c)(this, KW, "f")
          }
          set subsurfaceWeight(WW) {
            (0, rR.d)(this, KW, WW, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, rR.c)(this, uW, "f")
          }
          set subsurfaceWeightTexture(WW) {
            (0, rR.d)(this, uW, WW, "f")
          }
          get subsurfaceColor() {
            return (0, rR.c)(this, GW, "f")
          }
          set subsurfaceColor(WW) {
            (0, rR.d)(this, GW, WW, "f")
          }
          get subsurfaceColorTexture() {
            return (0, rR.c)(this, HW, "f")
          }
          set subsurfaceColorTexture(WW) {
            (0, rR.d)(this, HW, WW, "f")
          }
          get subsurfaceRadius() {
            return (0, rR.c)(this, SW, "f")
          }
          set subsurfaceRadius(WW) {
            (0, rR.d)(this, SW, WW, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, rR.c)(this, WR, "f")
          }
          set subsurfaceRadiusScale(WW) {
            (0, rR.d)(this, WR, WW, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, rR.c)(this, RR, "f")
          }
          set subsurfaceRadiusScaleTexture(WW) {
            (0, rR.d)(this, RR, WW, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, rR.c)(this, MR, "f")
          }
          set subsurfaceScatterAnisotropy(WW) {
            (0, rR.d)(this, MR, WW, "f")
          }
          get coatWeight() {
            return (0, rR.c)(this, wR, "f")
          }
          set coatWeight(WW) {
            (0, rR.d)(this, wR, WW, "f")
          }
          get coatWeightTexture() {
            return (0, rR.c)(this, CR, "f")
          }
          set coatWeightTexture(WW) {
            (0, rR.d)(this, CR, WW, "f")
          }
          get coatColor() {
            return (0, rR.c)(this, zM, "f")
          }
          set coatColor(WW) {
            (0, rR.d)(this, zM, WW, "f")
          }
          get coatColorTexture() {
            return (0, rR.c)(this, AR, "f")
          }
          set coatColorTexture(WW) {
            (0, rR.d)(this, AR, WW, "f")
          }
          get coatRoughness() {
            return (0, rR.c)(this, bM, "f")
          }
          set coatRoughness(WW) {
            (0, rR.d)(this, bM, WW, "f")
          }
          get coatRoughnessTexture() {
            return (0, rR.c)(this, yM, "f")
          }
          set coatRoughnessTexture(WW) {
            (0, rR.d)(this, yM, WW, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, rR.c)(this, NR, "f")
          }
          set coatRoughnessAnisotropy(WW) {
            (0, rR.d)(this, NR, WW, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, rR.c)(this, gM, "f")
          }
          set coatRoughnessAnisotropyTexture(WW) {
            (0, rR.d)(this, gM, WW, "f")
          }
          get coatIor() {
            return (0, rR.c)(this, iM, "f")
          }
          set coatIor(WW) {
            (0, rR.d)(this, iM, WW, "f")
          }
          get coatDarkening() {
            return (0, rR.c)(this, YR, "f")
          }
          set coatDarkening(WW) {
            (0, rR.d)(this, YR, WW, "f")
          }
          get coatDarkeningTexture() {
            return (0, rR.c)(this, JR, "f")
          }
          set coatDarkeningTexture(WW) {
            (0, rR.d)(this, JR, WW, "f")
          }
          get fuzzWeight() {
            return (0, rR.c)(this, PR, "f")
          }
          set fuzzWeight(WW) {
            (0, rR.d)(this, PR, WW, "f")
          }
          get fuzzWeightTexture() {
            return (0, rR.c)(this, IR, "f")
          }
          set fuzzWeightTexture(WW) {
            (0, rR.d)(this, IR, WW, "f")
          }
          get fuzzColor() {
            return (0, rR.c)(this, oR, "f")
          }
          set fuzzColor(WW) {
            (0, rR.d)(this, oR, WW, "f")
          }
          get fuzzColorTexture() {
            return (0, rR.c)(this, lR, "f")
          }
          set fuzzColorTexture(WW) {
            (0, rR.d)(this, lR, WW, "f")
          }
          get fuzzRoughness() {
            return (0, rR.c)(this, FR, "f")
          }
          set fuzzRoughness(WW) {
            (0, rR.d)(this, FR, WW, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, rR.c)(this, rM, "f")
          }
          set fuzzRoughnessTexture(WW) {
            (0, rR.d)(this, rM, WW, "f")
          }
          get geometryThinWalled() {
            return (0, rR.c)(this, cM, "f")
          }
          set geometryThinWalled(WW) {
            (0, rR.d)(this, cM, WW, "f")
          }
          get geometryNormalTexture() {
            return (0, rR.c)(this, XR, "f")
          }
          set geometryNormalTexture(WW) {
            (0, rR.d)(this, XR, WW, "f")
          }
          get geometryTangent() {
            return (0, rR.c)(this, jM, "f")
          }
          set geometryTangent(WW) {
            (0, rR.d)(this, jM, WW, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(WW) {
            this.geometryTangent = new VW.n(Math.cos(WW), Math.sin(WW))
          }
          get geometryTangentTexture() {
            return (0, rR.c)(this, kM, "f")
          }
          set geometryTangentTexture(WW) {
            (0, rR.d)(this, kM, WW, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, rR.c)(this, aM, "f")
          }
          set geometryCoatNormalTexture(WW) {
            (0, rR.d)(this, aM, WW, "f")
          }
          get geometryCoatTangent() {
            return (0, rR.c)(this, sR, "f")
          }
          set geometryCoatTangent(WW) {
            (0, rR.d)(this, sR, WW, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(WW) {
            this.geometryCoatTangent = new VW.n(Math.cos(WW), Math.sin(WW))
          }
          get geometryCoatTangentTexture() {
            return (0, rR.c)(this, dR, "f")
          }
          set geometryCoatTangentTexture(WW) {
            (0, rR.d)(this, dR, WW, "f")
          }
          get geometryOpacity() {
            return (0, rR.c)(this, pR, "f")
          }
          set geometryOpacity(WW) {
            (0, rR.d)(this, pR, WW, "f")
          }
          get geometryOpacityTexture() {
            return (0, rR.c)(this, hR, "f")
          }
          set geometryOpacityTexture(WW) {
            (0, rR.d)(this, hR, WW, "f")
          }
          get geometryThickness() {
            return (0, rR.c)(this, UR, "f")
          }
          set geometryThickness(WW) {
            (0, rR.d)(this, UR, WW, "f")
          }
          get geometryThicknessTexture() {
            return (0, rR.c)(this, ER, "f")
          }
          set geometryThicknessTexture(WW) {
            (0, rR.d)(this, ER, WW, "f")
          }
          get emissionLuminance() {
            return (0, rR.c)(this, VR, "f")
          }
          set emissionLuminance(WW) {
            (0, rR.d)(this, VR, WW, "f")
          }
          get emissionColor() {
            return (0, rR.c)(this, mM, "f")
          }
          set emissionColor(WW) {
            (0, rR.d)(this, mM, WW, "f")
          }
          get emissionColorTexture() {
            return (0, rR.c)(this, vM, "f")
          }
          set emissionColorTexture(WW) {
            (0, rR.d)(this, vM, WW, "f")
          }
          get thinFilmWeight() {
            return (0, rR.c)(this, uR, "f")
          }
          set thinFilmWeight(WW) {
            (0, rR.d)(this, uR, WW, "f")
          }
          get thinFilmWeightTexture() {
            return (0, rR.c)(this, LR, "f")
          }
          set thinFilmWeightTexture(WW) {
            (0, rR.d)(this, LR, WW, "f")
          }
          get thinFilmThickness() {
            return (0, rR.c)(this, HR, "f")
          }
          set thinFilmThickness(WW) {
            (0, rR.d)(this, HR, WW, "f")
          }
          get thinFilmThicknessMin() {
            return (0, rR.c)(this, ZR, "f")
          }
          set thinFilmThicknessMin(WW) {
            (0, rR.d)(this, ZR, WW, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, rR.c)(this, SR, "f")
          }
          set thinFilmThicknessTexture(WW) {
            (0, rR.d)(this, SR, WW, "f")
          }
          get thinFilmIor() {
            return (0, rR.c)(this, WM, "f")
          }
          set thinFilmIor(WW) {
            (0, rR.d)(this, WM, WW, "f")
          }
          get ambientOcclusionTexture() {
            return (0, rR.c)(this, RM, "f")
          }
          set ambientOcclusionTexture(WW) {
            (0, rR.d)(this, RM, WW, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(WW) {
            this._sssQuality !== WW && (this._sssQuality = WW, this.KbW(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(WW) {
            this._sssIrradianceTexture !== WW && (this._sssIrradianceTexture = WW, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(WW) {
            this._sssDepthTexture !== WW && (this._sssDepthTexture = WW, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, rR.c)(this, MM, "f")
          }
          set directIntensity(WW) {
            (0, rR.d)(this, MM, WW, "f")
          }
          get environmentIntensity() {
            return (0, rR.c)(this, wM, "f")
          }
          set environmentIntensity(WW) {
            (0, rR.d)(this, wM, WW, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, rR.c)(this, CM, "f")
          }
          set useSpecularWeightFromTextureAlpha(WW) {
            (0, rR.d)(this, CM, WW, "f")
          }
          get forceAlphaTest() {
            return (0, rR.c)(this, zw, "f")
          }
          set forceAlphaTest(WW) {
            (0, rR.d)(this, zw, WW, "f")
          }
          get alphaCutOff() {
            return (0, rR.c)(this, AM, "f")
          }
          set alphaCutOff(WW) {
            (0, rR.d)(this, AM, WW, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, rR.c)(this, bw, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(WW) {
            (0, rR.d)(this, bw, WW, "f")
          }
          get useAmbientInGrayScale() {
            return (0, rR.c)(this, yw, "f")
          }
          set useAmbientInGrayScale(WW) {
            (0, rR.d)(this, yw, WW, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(nW.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === zR.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(WW) {
            WW !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? zR.e.LIGHTFALLOFF_PHYSICAL : zR.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === zR.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(WW) {
            WW !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? zR.e.LIGHTFALLOFF_GLTF : zR.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, rR.c)(this, NM, "f")
          }
          set useObjectSpaceNormalMap(WW) {
            (0, rR.d)(this, NM, WW, "f")
          }
          get useParallax() {
            return (0, rR.c)(this, eM, "f")
          }
          set useParallax(WW) {
            (0, rR.d)(this, eM, WW, "f")
          }
          get useParallaxOcclusion() {
            return (0, rR.c)(this, BM, "f")
          }
          set useParallaxOcclusion(WW) {
            (0, rR.d)(this, BM, WW, "f")
          }
          get parallaxScaleBias() {
            return (0, rR.c)(this, tw, "f")
          }
          set parallaxScaleBias(WW) {
            (0, rR.d)(this, tw, WW, "f")
          }
          get disableLighting() {
            return (0, rR.c)(this, TM, "f")
          }
          set disableLighting(WW) {
            (0, rR.d)(this, TM, WW, "f")
          }
          get forceIrradianceInFragment() {
            return (0, rR.c)(this, gw, "f")
          }
          set forceIrradianceInFragment(WW) {
            (0, rR.d)(this, gw, WW, "f")
          }
          get maxSimultaneousLights() {
            return (0, rR.c)(this, iw, "f")
          }
          set maxSimultaneousLights(WW) {
            (0, rR.d)(this, iw, WW, "f")
          }
          get invertNormalMapX() {
            return (0, rR.c)(this, YM, "f")
          }
          set invertNormalMapX(WW) {
            (0, rR.d)(this, YM, WW, "f")
          }
          get invertNormalMapY() {
            return (0, rR.c)(this, JM, "f")
          }
          set invertNormalMapY(WW) {
            (0, rR.d)(this, JM, WW, "f")
          }
          get twoSidedLighting() {
            return (0, rR.c)(this, PM, "f")
          }
          set twoSidedLighting(WW) {
            (0, rR.d)(this, PM, WW, "f")
          }
          get useAlphaFresnel() {
            return (0, rR.c)(this, IM, "f")
          }
          set useAlphaFresnel(WW) {
            (0, rR.d)(this, IM, WW, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, rR.c)(this, oM, "f")
          }
          set useLinearAlphaFresnel(WW) {
            (0, rR.d)(this, oM, WW, "f")
          }
          get environmentBRDFTexture() {
            return (0, rR.c)(this, lM, "f")
          }
          set environmentBRDFTexture(WW) {
            (0, rR.d)(this, lM, WW, "f")
          }
          get forceNormalForward() {
            return (0, rR.c)(this, FM, "f")
          }
          set forceNormalForward(WW) {
            (0, rR.d)(this, FM, WW, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, rR.c)(this, fM, "f")
          }
          set enableSpecularAntiAliasing(WW) {
            (0, rR.d)(this, fM, WW, "f")
          }
          get useHorizonOcclusion() {
            return (0, rR.c)(this, QM, "f")
          }
          set useHorizonOcclusion(WW) {
            (0, rR.d)(this, QM, WW, "f")
          }
          get useRadianceOcclusion() {
            return (0, rR.c)(this, rw, "f")
          }
          set useRadianceOcclusion(WW) {
            (0, rR.d)(this, rw, WW, "f")
          }
          get unlit() {
            return (0, rR.c)(this, cwW, "f")
          }
          set unlit(WW) {
            (0, rR.d)(this, cwW, WW, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, rR.c)(this, XM, "f")
          }
          set applyDecalMapAfterDetailMap(WW) {
            (0, rR.d)(this, XM, WW, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(WW) {
            this._backgroundRefractionTexture = WW, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(WW) {
            this._refractionHighQualityBlur !== WW && (this._refractionHighQualityBlur = WW, this.KbW(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(WW) {
            this._realTimeFiltering = WW, this.KbW(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(WW) {
            this._realTimeFilteringQuality = WW, this.KbW(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(WW) {
            this._fuzzSampleNumber = WW, this.KbW(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, rR.c)(this, jw, "f")
          }
          set debugMode(WW) {
            (0, rR.d)(this, jw, WW, "f")
          }
          constructor(MW, cR) {
            super(MW, cR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), RW.set(this, ((0, rR.i)(this, sC), (0, rR.i)(this, dC, void 0))), this._baseWeight = ((0, rR.i)(this, pC), new nR("base_weight", 1, "vBaseWeight", 1)), wW.set(this, (0, rR.i)(this, hC, void 0)), this._baseWeightTexture = ((0, rR.i)(this, UC), new GR("base_weight", "baseWeight", "BASE_WEIGHT")), CW.set(this, (0, rR.i)(this, EC, void 0)), this._baseColor = ((0, rR.i)(this, VC), new nR("base_color", nW.d.White(), "vBaseColor", 4)), AW.set(this, (0, rR.i)(this, mz, void 0)), this._baseColorTexture = ((0, rR.i)(this, xz), new GR("base_color", "baseColor", "BASE_COLOR")), bR.set(this, (0, rR.i)(this, vz, void 0)), this._baseDiffuseRoughness = ((0, rR.i)(this, KC), new nR("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), yR.set(this, (0, rR.i)(this, uC, void 0)), this._baseDiffuseRoughnessTexture = ((0, rR.i)(this, OC), new GR("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), NW.set(this, (0, rR.i)(this, nC, void 0)), this._baseMetalness = ((0, rR.i)(this, GC), new nR("base_metalness", 0, "vReflectanceInfo", 4, 0)), eW.set(this, (0, rR.i)(this, LC, void 0)), this._baseMetalnessTexture = ((0, rR.i)(this, HC), new GR("base_metalness", "baseMetalness", "BASE_METALNESS")), BW.set(this, (0, rR.i)(this, DC, void 0)), this._specularWeight = ((0, rR.i)(this, qz), new nR("specular_weight", 1, "vReflectanceInfo", 4, 3)), tR.set(this, (0, rR.i)(this, ZC, void 0)), this._specularWeightTexture = ((0, rR.i)(this, SC), new GR("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), TW.set(this, (0, rR.i)(this, Wz, void 0)), this._specularColor = ((0, rR.i)(this, Rz), new nR("specular_color", nW.d.White(), "vSpecularColor", 4)), gR.set(this, (0, rR.i)(this, Mz, void 0)), this._specularColorTexture = ((0, rR.i)(this, wz), new GR("specular_color", "specularColor", "SPECULAR_COLOR")), iR.set(this, (0, rR.i)(this, Cz, void 0)), this._specularRoughness = ((0, rR.i)(this, zA), new nR("specular_roughness", .3, "vReflectanceInfo", 4, 1)), YW.set(this, (0, rR.i)(this, Az, void 0)), this._specularRoughnessTexture = ((0, rR.i)(this, bA), new GR("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), JW.set(this, (0, rR.i)(this, yA, void 0)), this._specularRoughnessAnisotropy = ((0, rR.i)(this, Nz), new nR("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), PW.set(this, (0, rR.i)(this, ez, void 0)), this._specularRoughnessAnisotropyTexture = ((0, rR.i)(this, Bz), new GR("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), IW.set(this, (0, rR.i)(this, tA, void 0)), this._specularIor = ((0, rR.i)(this, Tz), new nR("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), oW.set(this, (0, rR.i)(this, gA, void 0)), this._transmissionWeight = ((0, rR.i)(this, iA), new nR("transmission_weight", 0, "vTransmissionWeight", 1)), lW.set(this, (0, rR.i)(this, Yz, void 0)), this._transmissionWeightTexture = ((0, rR.i)(this, Jz), new GR("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), FW.set(this, (0, rR.i)(this, Pz, void 0)), this._transmissionColor = ((0, rR.i)(this, Iz), new nR("transmission_color", nW.d.White(), "vTransmissionColor", 3, 0)), fW.set(this, (0, rR.i)(this, oz, void 0)), this._transmissionColorTexture = ((0, rR.i)(this, lz), new GR("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), QW.set(this, (0, rR.i)(this, Fz, void 0)), this._transmissionDepth = ((0, rR.i)(this, fz), new nR("transmission_depth", 0, "vTransmissionDepth", 1, 0)), aR.set(this, (0, rR.i)(this, Qz, void 0)), this._transmissionDepthTexture = ((0, rR.i)(this, rA), new GR("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), sW.set(this, (0, rR.i)(this, cA, void 0)), this._transmissionScatter = ((0, rR.i)(this, Xz), new nR("transmission_scatter", nW.d.Black(), "vTransmissionScatter", 3, 0)), dW.set(this, (0, rR.i)(this, jA, void 0)), this._transmissionScatterTexture = ((0, rR.i)(this, kA), new GR("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), pW.set(this, (0, rR.i)(this, aA, void 0)), this._transmissionScatterAnisotropy = ((0, rR.i)(this, sz), new nR("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), EW.set(this, (0, rR.i)(this, dz, void 0)), this._transmissionDispersionScale = ((0, rR.i)(this, pz), new nR("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), xR.set(this, (0, rR.i)(this, hz, void 0)), this._transmissionDispersionScaleTexture = ((0, rR.i)(this, Uz), new GR("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), vR.set(this, (0, rR.i)(this, Ez, void 0)), this._transmissionDispersionAbbeNumber = ((0, rR.i)(this, Vz), new nR("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), KW.set(this, (0, rR.i)(this, mA, void 0)), this._subsurfaceWeight = ((0, rR.i)(this, xA), new nR("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), uW.set(this, (0, rR.i)(this, vA, void 0)), this._subsurfaceWeightTexture = ((0, rR.i)(this, Kz), new GR("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), GW.set(this, (0, rR.i)(this, uz, void 0)), this._subsurfaceColor = ((0, rR.i)(this, Oz), new nR("subsurface_color", new nW.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), HW.set(this, (0, rR.i)(this, nz, void 0)), this._subsurfaceColorTexture = ((0, rR.i)(this, Gz), new GR("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), SW.set(this, (0, rR.i)(this, Lz, void 0)), this._subsurfaceRadius = ((0, rR.i)(this, Hz), new nR("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), WR.set(this, (0, rR.i)(this, Dz, void 0)), this._subsurfaceRadiusScale = ((0, rR.i)(this, qA), new nR("subsurface_radius_scale", new nW.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), RR.set(this, (0, rR.i)(this, Zz, void 0)), this._subsurfaceRadiusScaleTexture = ((0, rR.i)(this, Sz), new GR("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), MR.set(this, (0, rR.i)(this, WA, void 0)), this._subsurfaceScatterAnisotropy = ((0, rR.i)(this, RA), new nR("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), wR.set(this, (0, rR.i)(this, MA, void 0)), this._coatWeight = ((0, rR.i)(this, wA), new nR("coat_weight", 0, "vCoatWeight", 1, 0)), CR.set(this, (0, rR.i)(this, CA, void 0)), this._coatWeightTexture = ((0, rR.i)(this, zb), new GR("coat_weight", "coatWeight", "COAT_WEIGHT")), zM.set(this, (0, rR.i)(this, AA, void 0)), this._coatColor = ((0, rR.i)(this, bb), new nR("coat_color", nW.d.White(), "vCoatColor", 3, 0)), AR.set(this, (0, rR.i)(this, yb, void 0)), this._coatColorTexture = ((0, rR.i)(this, NA), new GR("coat_color", "coatColor", "COAT_COLOR")), bM.set(this, (0, rR.i)(this, eA, void 0)), this._coatRoughness = ((0, rR.i)(this, BA), new nR("coat_roughness", 0, "vCoatRoughness", 1, 0)), yM.set(this, (0, rR.i)(this, tb, void 0)), this._coatRoughnessTexture = ((0, rR.i)(this, TA), new GR("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), NR.set(this, (0, rR.i)(this, gb, void 0)), this._coatRoughnessAnisotropy = ((0, rR.i)(this, ib), new nR("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), gM.set(this, (0, rR.i)(this, YA, void 0)), this._coatRoughnessAnisotropyTexture = ((0, rR.i)(this, JA), new GR("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), iM.set(this, (0, rR.i)(this, PA, void 0)), this._coatIor = ((0, rR.i)(this, IA), new nR("coat_ior", 1.5, "vCoatIor", 1, 0)), YR.set(this, (0, rR.i)(this, oA, void 0)), this._coatDarkening = ((0, rR.i)(this, lA), new nR("coat_darkening", 1, "vCoatDarkening", 1, 0)), JR.set(this, (0, rR.i)(this, FA, void 0)), this._coatDarkeningTexture = ((0, rR.i)(this, fA), new GR("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, PR.set(this, (0, rR.i)(this, QA, void 0)), this._fuzzWeight = ((0, rR.i)(this, rb), new nR("fuzz_weight", 0, "vFuzzWeight", 1, 0)), IR.set(this, (0, rR.i)(this, cb, void 0)), this._fuzzWeightTexture = ((0, rR.i)(this, XA), new GR("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), oR.set(this, (0, rR.i)(this, jb, void 0)), this._fuzzColor = ((0, rR.i)(this, kb), new nR("fuzz_color", nW.d.White(), "vFuzzColor", 3, 0)), lR.set(this, (0, rR.i)(this, ab, void 0)), this._fuzzColorTexture = ((0, rR.i)(this, sA), new GR("fuzz_color", "fuzzColor", "FUZZ_COLOR")), FR.set(this, (0, rR.i)(this, dA, void 0)), this._fuzzRoughness = ((0, rR.i)(this, pA), new nR("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), rM.set(this, (0, rR.i)(this, hA, void 0)), this._fuzzRoughnessTexture = ((0, rR.i)(this, UA), new GR("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), cM.set(this, (0, rR.i)(this, EA, void 0)), this._geometryThinWalled = ((0, rR.i)(this, VA), new nR("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), XR.set(this, (0, rR.i)(this, mb, void 0)), this._geometryNormalTexture = ((0, rR.i)(this, xb), new GR("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), jM.set(this, (0, rR.i)(this, vb, void 0)), this._geometryTangent = ((0, rR.i)(this, KA), new nR("geometry_tangent", new VW.n(1, 0), "vSpecularAnisotropy", 3, 0)), kM.set(this, (0, rR.i)(this, uA, void 0)), this._geometryTangentTexture = ((0, rR.i)(this, OA), new GR("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), aM.set(this, (0, rR.i)(this, nA, void 0)), this._geometryCoatNormalTexture = ((0, rR.i)(this, GA), new GR("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), sR.set(this, (0, rR.i)(this, LA, void 0)), this._geometryCoatTangent = ((0, rR.i)(this, HA), new nR("geometry_coat_tangent", new VW.n(1, 0), "vGeometryCoatTangent", 2, 0)), dR.set(this, (0, rR.i)(this, DA, void 0)), this._geometryCoatTangentTexture = ((0, rR.i)(this, qb), new GR("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), pR.set(this, (0, rR.i)(this, ZA, void 0)), this._geometryOpacity = ((0, rR.i)(this, SA), new nR("geometry_opacity", 1, "vBaseColor", 4, 3)), hR.set(this, (0, rR.i)(this, Wb, void 0)), this._geometryOpacityTexture = ((0, rR.i)(this, Rb), new GR("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), UR.set(this, (0, rR.i)(this, Mb, void 0)), this._geometryThickness = ((0, rR.i)(this, wb), new nR("geometry_thickness", 0, "vGeometryThickness", 1, 0)), ER.set(this, (0, rR.i)(this, Cb, void 0)), this._geometryThicknessTexture = ((0, rR.i)(this, zy), new GR("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), VR.set(this, (0, rR.i)(this, Ab, void 0)), this._emissionLuminance = ((0, rR.i)(this, by), new nR("emission_luminance", 1, "vLightingIntensity", 4, 1)), mM.set(this, (0, rR.i)(this, yy, void 0)), this._emissionColor = ((0, rR.i)(this, Nb), new nR("emission_color", nW.d.Black(), "vEmissionColor", 3)), vM.set(this, (0, rR.i)(this, eb, void 0)), this._emissionColorTexture = ((0, rR.i)(this, Bb), new GR("emission_color", "emissionColor", "EMISSION_COLOR")), uR.set(this, (0, rR.i)(this, ty, void 0)), this._thinFilmWeight = ((0, rR.i)(this, Tb), new nR("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), LR.set(this, (0, rR.i)(this, gy, void 0)), this._thinFilmWeightTexture = ((0, rR.i)(this, iy), new GR("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), HR.set(this, (0, rR.i)(this, Yb, void 0)), this._thinFilmThickness = ((0, rR.i)(this, Jb), new nR("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), ZR.set(this, (0, rR.i)(this, Pb, void 0)), this._thinFilmThicknessMin = ((0, rR.i)(this, Ib), new nR("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), SR.set(this, (0, rR.i)(this, ob, void 0)), this._thinFilmThicknessTexture = ((0, rR.i)(this, lb), new GR("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), WM.set(this, (0, rR.i)(this, Fb, void 0)), this._thinFilmIor = ((0, rR.i)(this, fb), new nR("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), RM.set(this, (0, rR.i)(this, Qb, void 0)), this._ambientOcclusionTexture = ((0, rR.i)(this, ry), new GR("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = WW.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, MM.set(this, (0, rR.i)(this, cy, 1)), wM.set(this, ((0, rR.i)(this, Xb), (0, rR.i)(this, jy, 1))), CM.set(this, ((0, rR.i)(this, ky), (0, rR.i)(this, ay, !1))), zw.set(this, ((0, rR.i)(this, sb), (0, rR.i)(this, db, !1))), AM.set(this, ((0, rR.i)(this, pb), (0, rR.i)(this, hb, .4))), bw.set(this, ((0, rR.i)(this, Ub), (0, rR.i)(this, Eb, !1))), yw.set(this, ((0, rR.i)(this, Vb), (0, rR.i)(this, my, !1))), NM.set(this, ((0, rR.i)(this, xy), (0, rR.i)(this, vy, !1))), eM.set(this, ((0, rR.i)(this, Kb), (0, rR.i)(this, ub, !1))), BM.set(this, ((0, rR.i)(this, Ob), (0, rR.i)(this, nb, !1))), tw.set(this, ((0, rR.i)(this, Gb), (0, rR.i)(this, Lb, .05))), TM.set(this, ((0, rR.i)(this, Hb), (0, rR.i)(this, Db, !1))), gw.set(this, ((0, rR.i)(this, qy), (0, rR.i)(this, Zb, !1))), iw.set(this, ((0, rR.i)(this, Sb), (0, rR.i)(this, Wy, 4))), YM.set(this, ((0, rR.i)(this, Ry), (0, rR.i)(this, My, !1))), JM.set(this, ((0, rR.i)(this, wy), (0, rR.i)(this, Cy, !1))), PM.set(this, ((0, rR.i)(this, zN), (0, rR.i)(this, Ay, !1))), IM.set(this, ((0, rR.i)(this, bN), (0, rR.i)(this, yN, !1))), oM.set(this, ((0, rR.i)(this, Ny), (0, rR.i)(this, ey, !1))), lM.set(this, ((0, rR.i)(this, By), (0, rR.i)(this, tN, null))), FM.set(this, ((0, rR.i)(this, Ty), (0, rR.i)(this, gN, !1))), fM.set(this, ((0, rR.i)(this, iN), (0, rR.i)(this, Yy, !1))), QM.set(this, ((0, rR.i)(this, Jy), (0, rR.i)(this, Py, !0))), rw.set(this, ((0, rR.i)(this, Iy), (0, rR.i)(this, oy, !0))), cwW.set(this, ((0, rR.i)(this, ly), (0, rR.i)(this, Fy, !1))), XM.set(this, ((0, rR.i)(this, fy), (0, rR.i)(this, Qy, !1))), this._lightingInfos = ((0, rR.i)(this, rN), new VW.s(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = zR.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new jR.i(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, jw.set(this, (0, rR.i)(this, cN, 0)), this.debugLimit = ((0, rR.i)(this, Xy), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = zR.e.MATERIAL_OPAQUE, this.QRW() && !this.QRW()?.mC().isWebGPU && this.QRW().mC().Gs < 2 && XW.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), WW._noiseTextures[this.QRW().uniqueId] || (WW._noiseTextures[this.QRW().uniqueId] = new kR.d(QR.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.QRW(), !1, !0, 1), this.QRW().rMW.addOnce((() => {
              WW._noiseTextures[this.QRW().uniqueId]?.dispose(), delete WW._noiseTextures[this.QRW().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), DW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = UW(this.QRW()), this._environmentFuzzBRDFTexture = hW(this.QRW()), this.prePassConfiguration = new OW.d, this._propertyList = {};
            for (const WW of Object.getOwnPropertyNames(this)) {
              const RW = this[WW];
              RW instanceof nR && (this._propertyList[WW] = RW)
            }
            Object.keys(this._propertyList).forEach((WW => {
              const RW = this._propertyList[WW];
              let MW = this._uniformsList[RW.targetUniformName];
              MW ? MW.numComponents !== RW.targetUniformComponentNum ? XW.b.Error(`Uniform ${RW.targetUniformName} already exists of size ${MW.numComponents}, but trying to set it to ${RW.targetUniformComponentNum}.`) : MW.requiredDefine !== RW.requiredDefine && (MW.requiredDefine = void 0) : (MW = new OR(RW.targetUniformName, RW.targetUniformComponentNum), MW.requiredDefine = RW.requiredDefine, this._uniformsList[RW.targetUniformName] = MW), "" === MW.firstLinkedKey && (MW.firstLinkedKey = RW.name), MW.linkedProperties[RW.name] = RW
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const WW of Object.getOwnPropertyNames(this)) {
              const RW = this[WW];
              RW instanceof GR && (this._samplersList[WW] = RW)
            }
            for (const WW in this._samplersList) {
              const RW = this._samplersList[WW].textureDefine;
              this._samplerDefines[RW] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[RW + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[RW + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(DW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(DW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(WW) {
            this._transparencyMode !== WW && (this._transparencyMode = WW, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== zR.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(WW) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(WW)
          }
          clone(RW) {
            let MW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const CW = fR.d.Clone((() => new WW(RW, this.QRW())), this, {
              cloneTexturesOnlyOnce: MW
            });
            return CW.id = RW, CW.name = RW, this.stencil.copyTo(CW.stencil), this._clonePlugins(CW, wW), CW
          }
          serialize() {
            const WW = super.serialize();
            return WW.customType = "BABYLON.OpenPBRMaterial", WW
          }
          static Parse(RW, MW, wW) {
            const CW = fR.d.Parse((() => new WW(RW.name, MW)), RW, MW, wW);
            return RW.stencil && CW.stencil.parse(RW.stencil, MW, wW), zR.e._ParsePlugins(RW, CW, MW, wW), CW
          }
          forceCompilation(WW, RW, MW) {
            const wW = {
              clipPlane: !1,
              useInstances: !1,
              ...MW
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const MW = new DR({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                CW = this._prepareEffect(WW, WW, MW, void 0, void 0, wW.useInstances, wW.clipPlane);
              this._onEffectCreatedObservable && (KR.effect = CW, KR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(KR)), CW.isReady() ? RW && RW(this) : CW.onCompileObservable.add((() => {
                RW && RW(this)
              }))
            })()
          }
          isReadyForSubMesh(RW, MW, wW) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const CW = MW._drawWrapper;
            if (CW.effect && this.isFrozen && CW._wasPreviouslyReady && CW._wasPreviouslyUsingInstances === wW) return !0;
            MW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), MW.materialDefines = new DR({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const zR = MW.materialDefines;
            if (this._isReadyForSubMesh(MW)) return !0;
            const AW = this.QRW(),
              bR = AW.mC();
            if (zR._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, AW.texturesEnabled)) {
              for (const WW in this._samplersList) {
                const RW = this._samplersList[WW];
                if (RW.value && !RW.value.isReadyOrNotBlocking()) return !1
              }
              const RW = this._getRadianceTexture();
              if (RW && DW.e.ReflectionTextureEnabled) {
                if (!RW.isReadyOrNotBlocking()) return !1;
                if (RW.irradianceTexture) {
                  if (!RW.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!RW.sphericalPolynomial && RW.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && DW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && DW.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && DW.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (WW._noiseTextures[AW.uniqueId] && !WW._noiseTextures[AW.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = zR, this._eventInfo.subMesh = MW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (zR._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (zR.AREALIGHTUSED)
              for (let WW = 0; WW < RW.lightSources.length; WW++)
                if (!RW.lightSources[WW]._isReady()) return !1;
            if (bR.getCaps().standardDerivatives || RW.isVerticesDataPresent(mR.j.NormalKind) || (RW.createNormals(!0), XW.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + RW.name)), !(0, ZW.d)(AW, RW, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const yR = MW.effect,
              NW = zR._areLightsDisposed,
              eW = this._prepareEffect(RW, MW.getRenderingMesh(), zR, this.onCompiled, this.onError, wW, null);
            let BW = !1;
            if (eW)
              if (this._onEffectCreatedObservable && (KR.effect = eW, KR.subMesh = MW, this._onEffectCreatedObservable.notifyObservers(KR)), this.allowShaderHotSwapping && yR && !eW.isReady()) {
                if (zR.markAsUnprocessed(), BW = this.isFrozen, NW) return zR._areLightsDisposed = !0, !1
              } else AW.resetCachedMaterial(), MW.setEffect(eW, zR, this._materialContext);
            return !(!MW.effect || !MW.effect.isReady()) && (zR._renderId = AW.getRenderId(), CW._wasPreviouslyReady = !BW, CW._wasPreviouslyUsingInstances = !!wW, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const WW = this._uniformBuffer;
            WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("vLightingIntensity", 4), WW.addUniform("pointSize", 1), WW.addUniform("vDebugMode", 2), WW.addUniform("renderTargetSize", 2), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), WW.addUniform("backgroundRefractionMatrix", 16), WW.addUniform("vBackgroundRefractionInfos", 3), (0, ZW.ob)(WW, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((RW => {
              WW.addUniform(RW.name, RW.numComponents)
            })), Object.values(this._samplersList).forEach((RW => {
              WW.addUniform(RW.samplerInfoName, 2), WW.addUniform(RW.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(WW, RW, MW, wW) {
            if (0 === this.geometryThickness) WW.updateFloat("vGeometryThickness", 0);
            else {
              wW.getRenderingMesh().getWorldMatrix().decompose(VW.k.vC[0]);
              const RW = Math.max(Math.abs(VW.k.vC[0].x), Math.abs(VW.k.vC[0].y), Math.abs(VW.k.vC[0].z));
              WW.updateFloat("vGeometryThickness", this.geometryThickness * RW)
            }
          }
          bindForSubMesh(RW, MW, wW) {
            const CW = this.QRW(),
              zR = wW.materialDefines;
            if (!zR) return;
            const AW = wW.effect;
            if (!AW) return;
            this._activeEffect = AW, MW.getMeshUniformBuffer().bindToEffect(AW, "Mesh"), MW.transferToEffect(RW);
            const bR = CW.mC();
            this._uniformBuffer.bindToEffect(AW, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, CW, MW, RW, this.isFrozen), TR.d.Bind(bR.currentRenderPassId, this._activeEffect, MW, RW, this);
            const yR = CW.activeCamera;
            yR ? this._uniformBuffer.updateFloat4("cameraInfo", yR.minZ, yR.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const NW = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", NW[0], NW[1], NW[2], NW[3]), this._eventInfo.subMesh = wW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), zR.OBJECTSPACE_NORMALMAP && (RW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const eW = this._mustRebind(CW, AW, wW, MW.visibility),
              BW = bR._features.needToAlwaysBindUniformBuffers;
            (0, ZW.e)(MW, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, BR.b)(this._activeEffect, this._vertexPullingMetadata);
            const tR = this._uniformBuffer;
            if (eW) {
              this.bindViewProjection(AW);
              const RW = this._getRadianceTexture();
              if (!tR.useUbo || !this.isFrozen || !tR.isSync || wW._drawWrapper._forceRebindOnNextCall) {
                if (CW.texturesEnabled) {
                  for (const WW in this._samplersList) {
                    const RW = this._samplersList[WW];
                    RW.value && (tR.updateFloat2(RW.samplerInfoName, RW.value.coordinatesIndex, RW.value.level), (0, ZW.D)(RW.value, tR, RW.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (CW._mirroredCameraPosition ? tR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : tR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, ZW.j)(CW, zR, tR, nW.d.White(), RW, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && tR.updateFloat("pointSize", this.pointSize);
                const WW = this._uniformsArray;
                for (let RW = 0, MW = WW.length; RW < MW; RW++) {
                  const MW = WW[RW];
                  (void 0 === MW.requiredDefine || zR[MW.requiredDefine]) && (4 === MW.numComponents ? (MW.populateVectorFromLinkedProperties(VW.k.Vector4[0]), tR.updateVector4(MW.name, VW.k.Vector4[0])) : 3 === MW.numComponents ? (MW.populateVectorFromLinkedProperties(VW.k.vC[0]), tR.updateVector3(MW.name, VW.k.vC[0])) : 2 === MW.numComponents ? (MW.populateVectorFromLinkedProperties(VW.k.Vector2[0]), tR.updateFloat2(MW.name, VW.k.Vector2[0].x, VW.k.Vector2[0].y)) : 1 === MW.numComponents && tR.updateFloat(MW.name, MW.linkedProperties[MW.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * CW.environmentIntensity, this._lightingInfos.w = 1, tR.updateVector4("vLightingIntensity", this._lightingInfos), tR.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (CW.texturesEnabled) {
                for (const WW in this._samplersList) {
                  const RW = this._samplersList[WW];
                  RW.value && tR.setTexture(RW.samplerName, RW.value)
                }
                if ((0, ZW.n)(CW, zR, tR, RW, this.realTimeFiltering), zR.ENVIRONMENTBRDF && tR.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), zR.FUZZENVIRONMENTBRDF && tR.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), zR.REFRACTED_BACKGROUND && (tR.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), tR.aAW("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), VW.k.vC[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), tR.updateVector3("vBackgroundRefractionInfos", VW.k.vC[1])), (zR.ANISOTROPIC || zR.FUZZ || zR.REFRACTED_BACKGROUND || zR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && tR.setTexture("blueNoiseSampler", WW._noiseTextures[this.QRW().uniqueId]), zR.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const WW = this.sssIrradianceTexture.getSize().width,
                    RW = this.sssIrradianceTexture.getSize().height;
                  tR.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), tR.setTexture("sceneDepthSampler", this.sssDepthTexture), tR.updateFloat2("renderTargetSize", WW, RW)
                }
              }
              this.QRW().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(MW) && this.QRW().depthPeelingRenderer.bind(AW), this._eventInfo.subMesh = wW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, eR.d)(this._activeEffect, this, CW), this.bindEyePosition(AW)
            } else BW && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, CW, CW.mC(), wW), !eW && this.isFrozen && !BW || !CW.lightsEnabled || this._disableLighting || (0, ZW.r)(CW, MW, this._activeEffect, zR, this._maxSimultaneousLights), !eW && this.isFrozen || (this.bindView(AW), (0, ZW.i)(CW, MW, this._activeEffect, !0), zR.NUM_MORPH_INFLUENCERS && (0, ZW.x)(MW, this._activeEffect), zR.BAKED_VERTEX_ANIMATION_TEXTURE && MW.bakedVertexAnimationManager?.bind(AW, zR.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, ZW.t)(zR, this._activeEffect, CW)), this._afterBind(MW, this._activeEffect, wW), tR.update()
          }
          getAnimatables() {
            const WW = super.getAnimatables();
            for (const RW in this._samplersList) {
              const MW = this._samplersList[RW];
              MW.value && MW.value.animations && MW.value.animations.length > 0 && WW.push(MW.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && WW.push(this._radianceTexture), WW
          }
          getActiveTextures() {
            const WW = super.getActiveTextures();
            for (const RW in this._samplersList) {
              const MW = this._samplersList[RW];
              MW.value && WW.push(MW.value)
            }
            return this._radianceTexture && WW.push(this._radianceTexture), WW
          }
          hasTexture(WW) {
            if (super.hasTexture(WW)) return !0;
            for (const RW in this._samplersList) {
              if (this._samplersList[RW].value === WW) return !0
            }
            return this._radianceTexture === WW
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(WW, RW) {
            if (this._breakShaderLoadedCheck = !0, RW) {
              this._environmentBRDFTexture && this.QRW().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.QRW().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const WW in this._samplersList) {
                const RW = this._samplersList[WW];
                RW.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, RW)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.QRW().environmentTexture
          }
          _prepareEffect(RW, MW, wW) {
            let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              AW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(RW, MW, wW, AW, bR), !wW.isDirty) return null;
            wW.markAsProcessed();
            const yR = this.QRW().mC(),
              NW = new qR.c;
            let eW = 0;
            wW.USESPHERICALINVERTEX && NW.addFallback(eW++, "USESPHERICALINVERTEX"), wW.FOG && NW.addFallback(eW, "FOG"), wW.SPECULARAA && NW.addFallback(eW, "SPECULARAA"), wW.POINTSIZE && NW.addFallback(eW, "POINTSIZE"), wW.LOGARITHMICDEPTH && NW.addFallback(eW, "LOGARITHMICDEPTH"), wW.PARALLAX && NW.addFallback(eW, "PARALLAX"), wW.PARALLAX_RHS && NW.addFallback(eW, "PARALLAX_RHS"), wW.PARALLAXOCCLUSION && NW.addFallback(eW++, "PARALLAXOCCLUSION"), wW.ENVIRONMENTBRDF && NW.addFallback(eW++, "ENVIRONMENTBRDF"), wW.TANGENT && NW.addFallback(eW++, "TANGENT"), eW = (0, ZW.H)(wW, NW, this._maxSimultaneousLights, eW), wW.SPECULARTERM && NW.addFallback(eW++, "SPECULARTERM"), wW.USESPHERICALFROMREFLECTIONMAP && NW.addFallback(eW++, "USESPHERICALFROMREFLECTIONMAP"), wW.USEIRRADIANCEMAP && NW.addFallback(eW++, "USEIRRADIANCEMAP"), wW.NORMAL && NW.addFallback(eW++, "NORMAL"), wW.VERTEXCOLOR && NW.addFallback(eW++, "VERTEXCOLOR"), wW.MORPHTARGETS && NW.addFallback(eW++, "MORPHTARGETS"), wW.MULTIVIEW && NW.addFallback(0, "MULTIVIEW");
            const BW = [mR.j.PositionKind];
            wW.NORMAL && BW.push(mR.j.NormalKind), wW.TANGENT && BW.push(mR.j.TangentKind);
            for (let WW = 1; WW <= 6; ++WW) wW["UV" + WW] && BW.push(`uv${1===WW?"":WW}`);
            wW.VERTEXCOLOR && BW.push(mR.j.ColorKind), (0, ZW.K)(BW, RW, wW, NW), (0, ZW.O)(BW, wW), (0, ZW.S)(BW, RW, wW), (0, ZW.J)(BW, RW, wW);
            let tR = "openpbr";
            const TW = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const WW in this._uniformsList) TW.push(WW);
            const gR = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            wW.FUZZENVIRONMENTBRDF && gR.push("environmentFuzzBrdfSampler"), wW.REFRACTED_BACKGROUND && gR.push("backgroundRefractionSampler"), (wW.ANISOTROPIC || wW.FUZZ || wW.REFRACTED_BACKGROUND || wW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && gR.push("blueNoiseSampler"), wW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (gR.push("sceneIrradianceSampler"), gR.push("sceneDepthSampler"));
            for (const WW in this._samplersList) {
              const RW = this._samplersList[WW];
              gR.push(RW.samplerName), TW.push(RW.samplerInfoName), TW.push(RW.samplerMatrixName)
            }(0, ZW.pb)(TW, gR, !0);
            const iR = ["Material", "Scene", "Mesh"],
              YW = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: wW.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = NW, this._eventInfo.fallbackRank = eW, this._eventInfo.defines = wW, this._eventInfo.uniforms = TW, this._eventInfo.attributes = BW, this._eventInfo.samplers = gR, this._eventInfo.uniformBuffersNames = iR, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RW, this._eventInfo.indexParameters = YW, this._callbackPluginEventGeneric(128, this._eventInfo), TR.d.AddUniformsAndSamplers(TW, gR), OW.d.AddUniforms(TW), OW.d.AddSamplers(gR), (0, eR.c)(TW), this._useVertexPulling) {
              const WW = MW?.geometry;
              WW && (this._vertexPullingMetadata = (0, BR.e)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, RW) => {
                TW.push(`vp_${RW}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            LW.b && (LW.b.PrepareUniforms(TW, wW), LW.b.PrepareSamplers(gR, wW)), (0, ZW.rb)({
              uniformsNames: TW,
              uniformBuffersNames: iR,
              samplers: gR,
              defines: wW,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const JW = {};
            this.customShaderNameResolve && (tR = this.customShaderNameResolve(tR, TW, iR, gR, wW, BW, JW));
            const PW = wW.toString(),
              IW = yR.createEffect(tR, {
                attributes: BW,
                uniformsNames: TW,
                uniformBuffersNames: iR,
                samplers: gR,
                defines: PW,
                fallbacks: NW,
                onCompiled: CW,
                onError: zR,
                indexParameters: YW,
                processFinalCode: JW.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: wW.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, yR);
            return this._eventInfo.customCode = void 0, IW
          }
          _prepareDefines(RW, MW, wW) {
            let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              AW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const bR = MW.hasThinInstances,
              yR = this.QRW(),
              NW = yR.mC();
            (0, ZW.ab)(yR, RW, wW, !0, this._maxSimultaneousLights, this._disableLighting), wW._needNormals = !0, (0, ZW.fb)(yR, wW);
            const eW = this.needAlphaBlendingForMesh(RW) && this.QRW().useOrderIndependentTransparency;
            if ((0, ZW.lb)(yR, wW, this.canRenderToMRT && !eW), (0, ZW.ib)(yR, wW, eW), TR.d.PrepareDefines(NW.currentRenderPassId, RW, wW), wW._areTexturesDirty) {
              wW._needUVs = !1;
              for (let WW = 1; WW <= 6; ++WW) wW["MAINUV" + WW] = !1;
              if (yR.texturesEnabled) {
                for (const MW in this._samplersList) {
                  const WW = this._samplersList[MW];
                  WW.value ? ((0, ZW.cb)(WW.value, wW, WW.textureDefine), wW[WW.textureDefine + "_GAMMA"] = WW.value.gammaSpace) : wW[WW.textureDefine] = !1
                }
                const WW = this._getRadianceTexture(),
                  RW = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || NW.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, ZW._)(yR, WW, wW, this.realTimeFiltering, this.realTimeFilteringQuality, !RW), this._baseMetalnessTexture && (wW.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), wW.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, wW.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, wW.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, wW.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, wW.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, wW.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, wW.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, wW.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, wW.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, wW.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, wW.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && DW.e.DiffuseTextureEnabled ? (wW.PARALLAX = !0, wW.PARALLAX_RHS = yR.useRightHandedSystem, wW.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wW.PARALLAX = !1, wW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wW.PARALLAX = !1, wW.PARALLAX_RHS = !1, wW.PARALLAXOCCLUSION = !1, wW.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DW.e.ReflectionTextureEnabled ? (wW.ENVIRONMENTBRDF = !0, wW.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wW.ENVIRONMENTBRDF = !1, wW.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? wW.FUZZENVIRONMENTBRDF = !0 : wW.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  wW.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && DW.e.RefractionTextureEnabled, wW.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, wW.REFRACTED_LIGHTS = !0;
                  const WW = this._getRadianceTexture();
                  WW ? (wW.REFRACTED_ENVIRONMENT = DW.e.RefractionTextureEnabled, wW.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.QRW().useRightHandedSystem ? !WW.invertZ : WW.invertZ, wW.REFRACTED_ENVIRONMENT_LOCAL_CUBE = WW.isCube && WW.boundingBoxSize) : wW.REFRACTED_ENVIRONMENT = !1
                } else wW.REFRACTED_BACKGROUND = !1, wW.REFRACTED_LIGHTS = !1, wW.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? wW.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : wW.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === zR.e.LIGHTFALLOFF_STANDARD ? (wW.USEPHYSICALLIGHTFALLOFF = !1, wW.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === zR.e.LIGHTFALLOFF_GLTF ? (wW.USEPHYSICALLIGHTFALLOFF = !1, wW.USEGLTFLIGHTFALLOFF = !0) : (wW.USEPHYSICALLIGHTFALLOFF = !0, wW.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? wW.TWOSIDEDLIGHTING = !0 : wW.TWOSIDEDLIGHTING = !1, wW.MIRRORED = !!yR._mirroredCameraPosition, wW.SPECULARAA = NW.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(wW._areTexturesDirty || wW._areMiscDirty) && (wW.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wW.ALPHABLEND = this.needAlphaBlendingForMesh(RW)), wW._areTexturesDirty && (wW.TEXTURE_REPETITION_MODE = NW.version > 1 || NW.isWebGPU ? this.textureRepetitionMode : 0), wW._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wW), wW.FORCENORMALFORWARD = this._forceNormalForward, wW.RADIANCEOCCLUSION = this._useRadianceOcclusion, wW.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && WW._noiseTextures[yR.uniqueId] && DW.e.ReflectionTextureEnabled ? (wW.ANISOTROPIC = !0, RW.isVerticesDataPresent(mR.j.TangentKind) || (wW._needUVs = !0, wW.MAINUV1 = !0), this._useGltfStyleAnisotropy && (wW.USE_GLTF_STYLE_ANISOTROPY = !0), wW.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, wW.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (wW.ANISOTROPIC = !1, wW.USE_GLTF_STYLE_ANISOTROPY = !1, wW.ANISOTROPIC_BASE = !1, wW.ANISOTROPIC_COAT = !1), wW.THIN_FILM = this.thinFilmWeight > 0, wW.IRIDESCENCE = this.thinFilmWeight > 0, wW.DISPERSION = this.transmissionDispersionScale > 0, wW.SCATTERING = this.hasScattering;
            if (wW.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, wW.TRANSMISSION_SLAB = this.transmissionWeight > 0, wW.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, wW.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !wW.PREPASS && (wW.SUBSURFACE_SLAB || wW.TRANSMISSION_SLAB_VOLUME)) {
              let WW = !1;
              if (!this.sssIrradianceTexture && yR.geometryBufferRenderer) {
                const RW = yR.geometryBufferRenderer.getTextureIndex(xM.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = yR.geometryBufferRenderer.getGBuffer().textures[RW], WW = !0
              }
              if (!this.sssDepthTexture && yR.geometryBufferRenderer) {
                const RW = yR.geometryBufferRenderer.getTextureIndex(xM.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = yR.geometryBufferRenderer.getGBuffer().textures[RW], WW = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (wW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, WW && (wW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            wW.FUZZ = this.fuzzWeight > 0 && DW.e.ReflectionTextureEnabled, wW.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, wW.FUZZ ? (RW.isVerticesDataPresent(mR.j.TangentKind) || (wW._needUVs = !0, wW.MAINUV1 = !0), this._environmentFuzzBRDFTexture = hW(this.QRW()), wW.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, wW.FUZZENVIRONMENTBRDF = !1, wW.FUZZ_IBL_SAMPLES = 0), wW._areMiscDirty && ((0, ZW.eb)(RW, yR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RW), wW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, MW, this._isVertexOutputInvariant), wW.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !RW.isVerticesDataPresent(mR.j.NormalKind), wW.DEBUGMODE = this._debugMode), (0, ZW.X)(yR, NW, this, wW, !!CW, AW, bR), this._eventInfo.defines = wW, this._eventInfo.mesh = RW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, ZW.V)(RW, wW, !0, !0, !0, this._transparencyMode !== zR.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, RW = new WeakMap, wW = new WeakMap, CW = new WeakMap, AW = new WeakMap, bR = new WeakMap, yR = new WeakMap, NW = new WeakMap, eW = new WeakMap, BW = new WeakMap, tR = new WeakMap, TW = new WeakMap, gR = new WeakMap, iR = new WeakMap, YW = new WeakMap, JW = new WeakMap, PW = new WeakMap, IW = new WeakMap, oW = new WeakMap, lW = new WeakMap, FW = new WeakMap, fW = new WeakMap, QW = new WeakMap, aR = new WeakMap, sW = new WeakMap, dW = new WeakMap, pW = new WeakMap, EW = new WeakMap, xR = new WeakMap, vR = new WeakMap, KW = new WeakMap, uW = new WeakMap, GW = new WeakMap, HW = new WeakMap, SW = new WeakMap, WR = new WeakMap, RR = new WeakMap, MR = new WeakMap, wR = new WeakMap, CR = new WeakMap, zM = new WeakMap, AR = new WeakMap, bM = new WeakMap, yM = new WeakMap, NR = new WeakMap, gM = new WeakMap, iM = new WeakMap, YR = new WeakMap, JR = new WeakMap, PR = new WeakMap, IR = new WeakMap, oR = new WeakMap, lR = new WeakMap, FR = new WeakMap, rM = new WeakMap, cM = new WeakMap, XR = new WeakMap, jM = new WeakMap, kM = new WeakMap, aM = new WeakMap, sR = new WeakMap, dR = new WeakMap, pR = new WeakMap, hR = new WeakMap, UR = new WeakMap, ER = new WeakMap, VR = new WeakMap, mM = new WeakMap, vM = new WeakMap, uR = new WeakMap, LR = new WeakMap, HR = new WeakMap, ZR = new WeakMap, SR = new WeakMap, WM = new WeakMap, RM = new WeakMap, MM = new WeakMap, wM = new WeakMap, CM = new WeakMap, zw = new WeakMap, AM = new WeakMap, bw = new WeakMap, yw = new WeakMap, NM = new WeakMap, eM = new WeakMap, BM = new WeakMap, tw = new WeakMap, TM = new WeakMap, gw = new WeakMap, iw = new WeakMap, YM = new WeakMap, JM = new WeakMap, PM = new WeakMap, IM = new WeakMap, oM = new WeakMap, lM = new WeakMap, FM = new WeakMap, fM = new WeakMap, QM = new WeakMap, rw = new WeakMap, cwW = new WeakMap, XM = new WeakMap, jw = new WeakMap, (() => {
          const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(az[Symbol.metadata] ?? null) : void 0;
          kw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], sM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], pM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], VM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], mw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], KM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], uM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], OM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], nM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], GM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], LM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], HM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], DM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], ZM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], SM = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Mw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], ww = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], zC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], bC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], yC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], ew = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Bw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], tC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], gC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], iC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], rC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], cC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], jC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], kC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], aC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], pw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Vw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], mC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], xC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], vC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Ow = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Lw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Hw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Dw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], qC = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, cR.d)("_markAllSubMeshesAsTexturesDirty")], WC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], RC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], MC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], wC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], CC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], zz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], AC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, cR.D)()], yz = [(0, cR.D)()], NC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], eC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], BC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], TC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsLightsDirty")], gz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsLightsDirty")], YC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], JC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], PC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], IC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], oC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], lC = [(0, cR.h)("_markAllSubMeshesAsTexturesDirty")], FC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], fC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], QC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], XC = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], jz = [(0, cR.h)("_markAllSubMeshesAsMiscDirty")], kz = [(0, cR.D)()], (0, rR.e)(WW, null, kw, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseWeight" in WW,
              get: WW => WW.baseWeight,
              set: (WW, RW) => {
                WW.baseWeight = RW
              }
            },
            metadata: RW
          }, dC, pC), (0, rR.e)(WW, null, aw, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseWeightTexture" in WW,
              get: WW => WW.baseWeightTexture,
              set: (WW, RW) => {
                WW.baseWeightTexture = RW
              }
            },
            metadata: RW
          }, hC, UC), (0, rR.e)(WW, null, sM, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseColor" in WW,
              get: WW => WW.baseColor,
              set: (WW, RW) => {
                WW.baseColor = RW
              }
            },
            metadata: RW
          }, EC, VC), (0, rR.e)(WW, null, dM, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseColorTexture" in WW,
              get: WW => WW.baseColorTexture,
              set: (WW, RW) => {
                WW.baseColorTexture = RW
              }
            },
            metadata: RW
          }, mz, xz), (0, rR.e)(WW, null, pM, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseDiffuseRoughness" in WW,
              get: WW => WW.baseDiffuseRoughness,
              set: (WW, RW) => {
                WW.baseDiffuseRoughness = RW
              }
            },
            metadata: RW
          }, vz, KC), (0, rR.e)(WW, null, hM, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseDiffuseRoughnessTexture" in WW,
              get: WW => WW.baseDiffuseRoughnessTexture,
              set: (WW, RW) => {
                WW.baseDiffuseRoughnessTexture = RW
              }
            },
            metadata: RW
          }, uC, OC), (0, rR.e)(WW, null, UM, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseMetalness" in WW,
              get: WW => WW.baseMetalness,
              set: (WW, RW) => {
                WW.baseMetalness = RW
              }
            },
            metadata: RW
          }, nC, GC), (0, rR.e)(WW, null, EM, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseMetalnessTexture" in WW,
              get: WW => WW.baseMetalnessTexture,
              set: (WW, RW) => {
                WW.baseMetalnessTexture = RW
              }
            },
            metadata: RW
          }, LC, HC), (0, rR.e)(WW, null, VM, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularWeight" in WW,
              get: WW => WW.specularWeight,
              set: (WW, RW) => {
                WW.specularWeight = RW
              }
            },
            metadata: RW
          }, DC, qz), (0, rR.e)(WW, null, mw, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularWeightTexture" in WW,
              get: WW => WW.specularWeightTexture,
              set: (WW, RW) => {
                WW.specularWeightTexture = RW
              }
            },
            metadata: RW
          }, ZC, SC), (0, rR.e)(WW, null, xw, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColor" in WW,
              get: WW => WW.specularColor,
              set: (WW, RW) => {
                WW.specularColor = RW
              }
            },
            metadata: RW
          }, Wz, Rz), (0, rR.e)(WW, null, vw, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColorTexture" in WW,
              get: WW => WW.specularColorTexture,
              set: (WW, RW) => {
                WW.specularColorTexture = RW
              }
            },
            metadata: RW
          }, Mz, wz), (0, rR.e)(WW, null, KM, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughness" in WW,
              get: WW => WW.specularRoughness,
              set: (WW, RW) => {
                WW.specularRoughness = RW
              }
            },
            metadata: RW
          }, Cz, zA), (0, rR.e)(WW, null, uM, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessTexture" in WW,
              get: WW => WW.specularRoughnessTexture,
              set: (WW, RW) => {
                WW.specularRoughnessTexture = RW
              }
            },
            metadata: RW
          }, Az, bA), (0, rR.e)(WW, null, OM, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessAnisotropy" in WW,
              get: WW => WW.specularRoughnessAnisotropy,
              set: (WW, RW) => {
                WW.specularRoughnessAnisotropy = RW
              }
            },
            metadata: RW
          }, yA, Nz), (0, rR.e)(WW, null, nM, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessAnisotropyTexture" in WW,
              get: WW => WW.specularRoughnessAnisotropyTexture,
              set: (WW, RW) => {
                WW.specularRoughnessAnisotropyTexture = RW
              }
            },
            metadata: RW
          }, ez, Bz), (0, rR.e)(WW, null, GM, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularIor" in WW,
              get: WW => WW.specularIor,
              set: (WW, RW) => {
                WW.specularIor = RW
              }
            },
            metadata: RW
          }, tA, Tz), (0, rR.e)(WW, null, LM, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionWeight" in WW,
              get: WW => WW.transmissionWeight,
              set: (WW, RW) => {
                WW.transmissionWeight = RW
              }
            },
            metadata: RW
          }, gA, iA), (0, rR.e)(WW, null, HM, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionWeightTexture" in WW,
              get: WW => WW.transmissionWeightTexture,
              set: (WW, RW) => {
                WW.transmissionWeightTexture = RW
              }
            },
            metadata: RW
          }, Yz, Jz), (0, rR.e)(WW, null, DM, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionColor" in WW,
              get: WW => WW.transmissionColor,
              set: (WW, RW) => {
                WW.transmissionColor = RW
              }
            },
            metadata: RW
          }, Pz, Iz), (0, rR.e)(WW, null, qw, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionColorTexture" in WW,
              get: WW => WW.transmissionColorTexture,
              set: (WW, RW) => {
                WW.transmissionColorTexture = RW
              }
            },
            metadata: RW
          }, oz, lz), (0, rR.e)(WW, null, ZM, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDepth" in WW,
              get: WW => WW.transmissionDepth,
              set: (WW, RW) => {
                WW.transmissionDepth = RW
              }
            },
            metadata: RW
          }, Fz, fz), (0, rR.e)(WW, null, SM, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDepthTexture" in WW,
              get: WW => WW.transmissionDepthTexture,
              set: (WW, RW) => {
                WW.transmissionDepthTexture = RW
              }
            },
            metadata: RW
          }, Qz, rA), (0, rR.e)(WW, null, Ww, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatter" in WW,
              get: WW => WW.transmissionScatter,
              set: (WW, RW) => {
                WW.transmissionScatter = RW
              }
            },
            metadata: RW
          }, cA, Xz), (0, rR.e)(WW, null, Rw, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatterTexture" in WW,
              get: WW => WW.transmissionScatterTexture,
              set: (WW, RW) => {
                WW.transmissionScatterTexture = RW
              }
            },
            metadata: RW
          }, jA, kA), (0, rR.e)(WW, null, Mw, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatterAnisotropy" in WW,
              get: WW => WW.transmissionScatterAnisotropy,
              set: (WW, RW) => {
                WW.transmissionScatterAnisotropy = RW
              }
            },
            metadata: RW
          }, aA, sz), (0, rR.e)(WW, null, ww, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionScale" in WW,
              get: WW => WW.transmissionDispersionScale,
              set: (WW, RW) => {
                WW.transmissionDispersionScale = RW
              }
            },
            metadata: RW
          }, dz, pz), (0, rR.e)(WW, null, Cw, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionScaleTexture" in WW,
              get: WW => WW.transmissionDispersionScaleTexture,
              set: (WW, RW) => {
                WW.transmissionDispersionScaleTexture = RW
              }
            },
            metadata: RW
          }, hz, Uz), (0, rR.e)(WW, null, zC, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionAbbeNumber" in WW,
              get: WW => WW.transmissionDispersionAbbeNumber,
              set: (WW, RW) => {
                WW.transmissionDispersionAbbeNumber = RW
              }
            },
            metadata: RW
          }, Ez, Vz), (0, rR.e)(WW, null, Aw, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceWeight" in WW,
              get: WW => WW.subsurfaceWeight,
              set: (WW, RW) => {
                WW.subsurfaceWeight = RW
              }
            },
            metadata: RW
          }, mA, xA), (0, rR.e)(WW, null, bC, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceWeightTexture" in WW,
              get: WW => WW.subsurfaceWeightTexture,
              set: (WW, RW) => {
                WW.subsurfaceWeightTexture = RW
              }
            },
            metadata: RW
          }, vA, Kz), (0, rR.e)(WW, null, yC, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceColor" in WW,
              get: WW => WW.subsurfaceColor,
              set: (WW, RW) => {
                WW.subsurfaceColor = RW
              }
            },
            metadata: RW
          }, uz, Oz), (0, rR.e)(WW, null, Nw, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceColorTexture" in WW,
              get: WW => WW.subsurfaceColorTexture,
              set: (WW, RW) => {
                WW.subsurfaceColorTexture = RW
              }
            },
            metadata: RW
          }, nz, Gz), (0, rR.e)(WW, null, ew, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadius" in WW,
              get: WW => WW.subsurfaceRadius,
              set: (WW, RW) => {
                WW.subsurfaceRadius = RW
              }
            },
            metadata: RW
          }, Lz, Hz), (0, rR.e)(WW, null, Bw, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadiusScale" in WW,
              get: WW => WW.subsurfaceRadiusScale,
              set: (WW, RW) => {
                WW.subsurfaceRadiusScale = RW
              }
            },
            metadata: RW
          }, Dz, qA), (0, rR.e)(WW, null, tC, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadiusScaleTexture" in WW,
              get: WW => WW.subsurfaceRadiusScaleTexture,
              set: (WW, RW) => {
                WW.subsurfaceRadiusScaleTexture = RW
              }
            },
            metadata: RW
          }, Zz, Sz), (0, rR.e)(WW, null, Tw, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceScatterAnisotropy" in WW,
              get: WW => WW.subsurfaceScatterAnisotropy,
              set: (WW, RW) => {
                WW.subsurfaceScatterAnisotropy = RW
              }
            },
            metadata: RW
          }, WA, RA), (0, rR.e)(WW, null, gC, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatWeight" in WW,
              get: WW => WW.coatWeight,
              set: (WW, RW) => {
                WW.coatWeight = RW
              }
            },
            metadata: RW
          }, MA, wA), (0, rR.e)(WW, null, iC, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatWeightTexture" in WW,
              get: WW => WW.coatWeightTexture,
              set: (WW, RW) => {
                WW.coatWeightTexture = RW
              }
            },
            metadata: RW
          }, CA, zb), (0, rR.e)(WW, null, Yw, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatColor" in WW,
              get: WW => WW.coatColor,
              set: (WW, RW) => {
                WW.coatColor = RW
              }
            },
            metadata: RW
          }, AA, bb), (0, rR.e)(WW, null, Jw, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatColorTexture" in WW,
              get: WW => WW.coatColorTexture,
              set: (WW, RW) => {
                WW.coatColorTexture = RW
              }
            },
            metadata: RW
          }, yb, NA), (0, rR.e)(WW, null, Pw, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughness" in WW,
              get: WW => WW.coatRoughness,
              set: (WW, RW) => {
                WW.coatRoughness = RW
              }
            },
            metadata: RW
          }, eA, BA), (0, rR.e)(WW, null, Iw, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessTexture" in WW,
              get: WW => WW.coatRoughnessTexture,
              set: (WW, RW) => {
                WW.coatRoughnessTexture = RW
              }
            },
            metadata: RW
          }, tb, TA), (0, rR.e)(WW, null, ow, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessAnisotropy" in WW,
              get: WW => WW.coatRoughnessAnisotropy,
              set: (WW, RW) => {
                WW.coatRoughnessAnisotropy = RW
              }
            },
            metadata: RW
          }, gb, ib), (0, rR.e)(WW, null, lw, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessAnisotropyTexture" in WW,
              get: WW => WW.coatRoughnessAnisotropyTexture,
              set: (WW, RW) => {
                WW.coatRoughnessAnisotropyTexture = RW
              }
            },
            metadata: RW
          }, YA, JA), (0, rR.e)(WW, null, Fw, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatIor" in WW,
              get: WW => WW.coatIor,
              set: (WW, RW) => {
                WW.coatIor = RW
              }
            },
            metadata: RW
          }, PA, IA), (0, rR.e)(WW, null, fw, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatDarkening" in WW,
              get: WW => WW.coatDarkening,
              set: (WW, RW) => {
                WW.coatDarkening = RW
              }
            },
            metadata: RW
          }, oA, lA), (0, rR.e)(WW, null, Qw, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatDarkeningTexture" in WW,
              get: WW => WW.coatDarkeningTexture,
              set: (WW, RW) => {
                WW.coatDarkeningTexture = RW
              }
            },
            metadata: RW
          }, FA, fA), (0, rR.e)(WW, null, rC, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzWeight" in WW,
              get: WW => WW.fuzzWeight,
              set: (WW, RW) => {
                WW.fuzzWeight = RW
              }
            },
            metadata: RW
          }, QA, rb), (0, rR.e)(WW, null, cC, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzWeightTexture" in WW,
              get: WW => WW.fuzzWeightTexture,
              set: (WW, RW) => {
                WW.fuzzWeightTexture = RW
              }
            },
            metadata: RW
          }, cb, XA), (0, rR.e)(WW, null, Xw, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzColor" in WW,
              get: WW => WW.fuzzColor,
              set: (WW, RW) => {
                WW.fuzzColor = RW
              }
            },
            metadata: RW
          }, jb, kb), (0, rR.e)(WW, null, jC, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzColorTexture" in WW,
              get: WW => WW.fuzzColorTexture,
              set: (WW, RW) => {
                WW.fuzzColorTexture = RW
              }
            },
            metadata: RW
          }, ab, sA), (0, rR.e)(WW, null, kC, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzRoughness" in WW,
              get: WW => WW.fuzzRoughness,
              set: (WW, RW) => {
                WW.fuzzRoughness = RW
              }
            },
            metadata: RW
          }, dA, pA), (0, rR.e)(WW, null, aC, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzRoughnessTexture" in WW,
              get: WW => WW.fuzzRoughnessTexture,
              set: (WW, RW) => {
                WW.fuzzRoughnessTexture = RW
              }
            },
            metadata: RW
          }, hA, UA), (0, rR.e)(WW, null, sw, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThinWalled" in WW,
              get: WW => WW.geometryThinWalled,
              set: (WW, RW) => {
                WW.geometryThinWalled = RW
              }
            },
            metadata: RW
          }, EA, VA), (0, rR.e)(WW, null, dw, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryNormalTexture" in WW,
              get: WW => WW.geometryNormalTexture,
              set: (WW, RW) => {
                WW.geometryNormalTexture = RW
              }
            },
            metadata: RW
          }, mb, xb), (0, rR.e)(WW, null, pw, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryTangent" in WW,
              get: WW => WW.geometryTangent,
              set: (WW, RW) => {
                WW.geometryTangent = RW
              }
            },
            metadata: RW
          }, vb, KA), (0, rR.e)(WW, null, hw, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryTangentTexture" in WW,
              get: WW => WW.geometryTangentTexture,
              set: (WW, RW) => {
                WW.geometryTangentTexture = RW
              }
            },
            metadata: RW
          }, uA, OA), (0, rR.e)(WW, null, Uw, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatNormalTexture" in WW,
              get: WW => WW.geometryCoatNormalTexture,
              set: (WW, RW) => {
                WW.geometryCoatNormalTexture = RW
              }
            },
            metadata: RW
          }, nA, GA), (0, rR.e)(WW, null, Ew, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatTangent" in WW,
              get: WW => WW.geometryCoatTangent,
              set: (WW, RW) => {
                WW.geometryCoatTangent = RW
              }
            },
            metadata: RW
          }, LA, HA), (0, rR.e)(WW, null, Vw, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatTangentTexture" in WW,
              get: WW => WW.geometryCoatTangentTexture,
              set: (WW, RW) => {
                WW.geometryCoatTangentTexture = RW
              }
            },
            metadata: RW
          }, DA, qb), (0, rR.e)(WW, null, mC, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryOpacity" in WW,
              get: WW => WW.geometryOpacity,
              set: (WW, RW) => {
                WW.geometryOpacity = RW
              }
            },
            metadata: RW
          }, ZA, SA), (0, rR.e)(WW, null, xC, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryOpacityTexture" in WW,
              get: WW => WW.geometryOpacityTexture,
              set: (WW, RW) => {
                WW.geometryOpacityTexture = RW
              }
            },
            metadata: RW
          }, Wb, Rb), (0, rR.e)(WW, null, vC, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThickness" in WW,
              get: WW => WW.geometryThickness,
              set: (WW, RW) => {
                WW.geometryThickness = RW
              }
            },
            metadata: RW
          }, Mb, wb), (0, rR.e)(WW, null, Kw, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThicknessTexture" in WW,
              get: WW => WW.geometryThicknessTexture,
              set: (WW, RW) => {
                WW.geometryThicknessTexture = RW
              }
            },
            metadata: RW
          }, Cb, zy), (0, rR.e)(WW, null, uw, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionLuminance" in WW,
              get: WW => WW.emissionLuminance,
              set: (WW, RW) => {
                WW.emissionLuminance = RW
              }
            },
            metadata: RW
          }, Ab, by), (0, rR.e)(WW, null, Ow, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionColor" in WW,
              get: WW => WW.emissionColor,
              set: (WW, RW) => {
                WW.emissionColor = RW
              }
            },
            metadata: RW
          }, yy, Nb), (0, rR.e)(WW, null, nw, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionColorTexture" in WW,
              get: WW => WW.emissionColorTexture,
              set: (WW, RW) => {
                WW.emissionColorTexture = RW
              }
            },
            metadata: RW
          }, eb, Bb), (0, rR.e)(WW, null, Gw, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmWeight" in WW,
              get: WW => WW.thinFilmWeight,
              set: (WW, RW) => {
                WW.thinFilmWeight = RW
              }
            },
            metadata: RW
          }, ty, Tb), (0, rR.e)(WW, null, Lw, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmWeightTexture" in WW,
              get: WW => WW.thinFilmWeightTexture,
              set: (WW, RW) => {
                WW.thinFilmWeightTexture = RW
              }
            },
            metadata: RW
          }, gy, iy), (0, rR.e)(WW, null, Hw, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThickness" in WW,
              get: WW => WW.thinFilmThickness,
              set: (WW, RW) => {
                WW.thinFilmThickness = RW
              }
            },
            metadata: RW
          }, Yb, Jb), (0, rR.e)(WW, null, Dw, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThicknessMin" in WW,
              get: WW => WW.thinFilmThicknessMin,
              set: (WW, RW) => {
                WW.thinFilmThicknessMin = RW
              }
            },
            metadata: RW
          }, Pb, Ib), (0, rR.e)(WW, null, qC, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThicknessTexture" in WW,
              get: WW => WW.thinFilmThicknessTexture,
              set: (WW, RW) => {
                WW.thinFilmThicknessTexture = RW
              }
            },
            metadata: RW
          }, ob, lb), (0, rR.e)(WW, null, Zw, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmIor" in WW,
              get: WW => WW.thinFilmIor,
              set: (WW, RW) => {
                WW.thinFilmIor = RW
              }
            },
            metadata: RW
          }, Fb, fb), (0, rR.e)(WW, null, Sw, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientOcclusionTexture" in WW,
              get: WW => WW.ambientOcclusionTexture,
              set: (WW, RW) => {
                WW.ambientOcclusionTexture = RW
              }
            },
            metadata: RW
          }, Qb, ry), (0, rR.e)(WW, null, WC, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "directIntensity" in WW,
              get: WW => WW.directIntensity,
              set: (WW, RW) => {
                WW.directIntensity = RW
              }
            },
            metadata: RW
          }, cy, Xb), (0, rR.e)(WW, null, RC, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "environmentIntensity" in WW,
              get: WW => WW.environmentIntensity,
              set: (WW, RW) => {
                WW.environmentIntensity = RW
              }
            },
            metadata: RW
          }, jy, ky), (0, rR.e)(WW, null, MC, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useSpecularWeightFromTextureAlpha" in WW,
              get: WW => WW.useSpecularWeightFromTextureAlpha,
              set: (WW, RW) => {
                WW.useSpecularWeightFromTextureAlpha = RW
              }
            },
            metadata: RW
          }, ay, sb), (0, rR.e)(WW, null, wC, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceAlphaTest" in WW,
              get: WW => WW.forceAlphaTest,
              set: (WW, RW) => {
                WW.forceAlphaTest = RW
              }
            },
            metadata: RW
          }, db, pb), (0, rR.e)(WW, null, CC, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaCutOff" in WW,
              get: WW => WW.alphaCutOff,
              set: (WW, RW) => {
                WW.alphaCutOff = RW
              }
            },
            metadata: RW
          }, hb, Ub), (0, rR.e)(WW, null, zz, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAmbientOcclusionFromMetallicTextureRed" in WW,
              get: WW => WW.useAmbientOcclusionFromMetallicTextureRed,
              set: (WW, RW) => {
                WW.useAmbientOcclusionFromMetallicTextureRed = RW
              }
            },
            metadata: RW
          }, Eb, Vb), (0, rR.e)(WW, null, AC, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAmbientInGrayScale" in WW,
              get: WW => WW.useAmbientInGrayScale,
              set: (WW, RW) => {
                WW.useAmbientInGrayScale = RW
              }
            },
            metadata: RW
          }, my, xy), (0, rR.e)(WW, null, bz, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: WW => "usePhysicalLightFalloff" in WW,
              get: WW => WW.usePhysicalLightFalloff
            },
            metadata: RW
          }, null, sC), (0, rR.e)(WW, null, yz, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: WW => "useGLTFLightFalloff" in WW,
              get: WW => WW.useGLTFLightFalloff
            },
            metadata: RW
          }, null, sC), (0, rR.e)(WW, null, NC, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useObjectSpaceNormalMap" in WW,
              get: WW => WW.useObjectSpaceNormalMap,
              set: (WW, RW) => {
                WW.useObjectSpaceNormalMap = RW
              }
            },
            metadata: RW
          }, vy, Kb), (0, rR.e)(WW, null, eC, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallax" in WW,
              get: WW => WW.useParallax,
              set: (WW, RW) => {
                WW.useParallax = RW
              }
            },
            metadata: RW
          }, ub, Ob), (0, rR.e)(WW, null, BC, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallaxOcclusion" in WW,
              get: WW => WW.useParallaxOcclusion,
              set: (WW, RW) => {
                WW.useParallaxOcclusion = RW
              }
            },
            metadata: RW
          }, nb, Gb), (0, rR.e)(WW, null, tz, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: WW => "parallaxScaleBias" in WW,
              get: WW => WW.parallaxScaleBias,
              set: (WW, RW) => {
                WW.parallaxScaleBias = RW
              }
            },
            metadata: RW
          }, Lb, Hb), (0, rR.e)(WW, null, TC, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "disableLighting" in WW,
              get: WW => WW.disableLighting,
              set: (WW, RW) => {
                WW.disableLighting = RW
              }
            },
            metadata: RW
          }, Db, qy), (0, rR.e)(WW, null, gz, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceIrradianceInFragment" in WW,
              get: WW => WW.forceIrradianceInFragment,
              set: (WW, RW) => {
                WW.forceIrradianceInFragment = RW
              }
            },
            metadata: RW
          }, Zb, Sb), (0, rR.e)(WW, null, iz, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "maxSimultaneousLights" in WW,
              get: WW => WW.maxSimultaneousLights,
              set: (WW, RW) => {
                WW.maxSimultaneousLights = RW
              }
            },
            metadata: RW
          }, Wy, Ry), (0, rR.e)(WW, null, YC, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapX" in WW,
              get: WW => WW.invertNormalMapX,
              set: (WW, RW) => {
                WW.invertNormalMapX = RW
              }
            },
            metadata: RW
          }, My, wy), (0, rR.e)(WW, null, JC, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapY" in WW,
              get: WW => WW.invertNormalMapY,
              set: (WW, RW) => {
                WW.invertNormalMapY = RW
              }
            },
            metadata: RW
          }, Cy, zN), (0, rR.e)(WW, null, PC, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "twoSidedLighting" in WW,
              get: WW => WW.twoSidedLighting,
              set: (WW, RW) => {
                WW.twoSidedLighting = RW
              }
            },
            metadata: RW
          }, Ay, bN), (0, rR.e)(WW, null, IC, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAlphaFresnel" in WW,
              get: WW => WW.useAlphaFresnel,
              set: (WW, RW) => {
                WW.useAlphaFresnel = RW
              }
            },
            metadata: RW
          }, yN, Ny), (0, rR.e)(WW, null, oC, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: WW => "useLinearAlphaFresnel" in WW,
              get: WW => WW.useLinearAlphaFresnel,
              set: (WW, RW) => {
                WW.useLinearAlphaFresnel = RW
              }
            },
            metadata: RW
          }, ey, By), (0, rR.e)(WW, null, lC, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "environmentBRDFTexture" in WW,
              get: WW => WW.environmentBRDFTexture,
              set: (WW, RW) => {
                WW.environmentBRDFTexture = RW
              }
            },
            metadata: RW
          }, tN, Ty), (0, rR.e)(WW, null, FC, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceNormalForward" in WW,
              get: WW => WW.forceNormalForward,
              set: (WW, RW) => {
                WW.forceNormalForward = RW
              }
            },
            metadata: RW
          }, gN, iN), (0, rR.e)(WW, null, fC, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: WW => "enableSpecularAntiAliasing" in WW,
              get: WW => WW.enableSpecularAntiAliasing,
              set: (WW, RW) => {
                WW.enableSpecularAntiAliasing = RW
              }
            },
            metadata: RW
          }, Yy, Jy), (0, rR.e)(WW, null, QC, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useHorizonOcclusion" in WW,
              get: WW => WW.useHorizonOcclusion,
              set: (WW, RW) => {
                WW.useHorizonOcclusion = RW
              }
            },
            metadata: RW
          }, Py, Iy), (0, rR.e)(WW, null, rz, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useRadianceOcclusion" in WW,
              get: WW => WW.useRadianceOcclusion,
              set: (WW, RW) => {
                WW.useRadianceOcclusion = RW
              }
            },
            metadata: RW
          }, oy, ly), (0, rR.e)(WW, null, cz, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: WW => "unlit" in WW,
              get: WW => WW.unlit,
              set: (WW, RW) => {
                WW.unlit = RW
              }
            },
            metadata: RW
          }, Fy, fy), (0, rR.e)(WW, null, XC, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyDecalMapAfterDetailMap" in WW,
              get: WW => WW.applyDecalMapAfterDetailMap,
              set: (WW, RW) => {
                WW.applyDecalMapAfterDetailMap = RW
              }
            },
            metadata: RW
          }, Qy, rN), (0, rR.e)(WW, null, jz, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "debugMode" in WW,
              get: WW => WW.debugMode,
              set: (WW, RW) => {
                WW.debugMode = RW
              }
            },
            metadata: RW
          }, cN, Xy), (0, rR.e)(WW, null, kz, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "transparencyMode" in WW,
              get: WW => WW.transparencyMode
            },
            metadata: RW
          }, null, sC), RW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RW
          })
        })(), WW.SSS_QUALITY_LOW = 0, WW.SSS_QUALITY_MEDIUM = 1, WW.SSS_QUALITY_HIGH = 2, WW._noiseTextures = {}, WW.ForceGLSL = !1, WW._ShaderLoader = new tM.b((() => [Promise.all([MW.e(287), MW.e(353)]).then((() => MW(59119))), Promise.all([MW.e(292), MW.e(288), MW.e(352), MW.e(357)]).then((() => MW(59131)))]), (() => [Promise.all([MW.e(306), MW.e(308), MW.e(356)]).then((() => MW(59170))), Promise.all([MW.e(306), MW.e(309), MW.e(355), MW.e(358)]).then((() => MW(59188)))])), WW
      })(),
      SR = !1;
    SR || (SR = !0, (0, LW.d)(), (0, vM.e)("BABYLON.OpenPBRMaterial", ZR));
    var WM = MW(35346);
    class RM {
      constructor(WW) {
        this.name = pR.d.NAME_PROCEDURALTEXTURE, this.LC = WW
      }
      register() {
        this.LC._beforeClearStage.registerStep(pR.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.LC.proceduralTexturesEnabled) {
          QR.j.StartPerformanceCounter("Procedural textures", this.LC.proceduralTextures.length > 0);
          for (let WW = 0; WW < this.LC.proceduralTextures.length; WW++) {
            const RW = this.LC.proceduralTextures[WW];
            RW._shouldRender() && RW.render()
          }
          QR.j.EndPerformanceCounter("Procedural textures", this.LC.proceduralTextures.length > 0)
        }
      }
    }
    var MM = MW(37900);
    let wM = (() => {
      var WW;
      let RW, wW, CW, AW, bR, yR = kR.d,
        NW = [],
        eW = [],
        BW = [],
        tR = [],
        TW = [],
        gR = [],
        YW = [],
        JW = [],
        PW = [];
      return WW = class extends yR {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(WW, RW, MW, wW) {
          let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, wW, !zR), this.isEnabled = ((0, rR.i)(this, NW), (0, rR.i)(this, eW, !0)), this.autoClear = ((0, rR.i)(this, BW), (0, rR.i)(this, tR, !0)), this.onGenerated = (0, rR.i)(this, TW), this.onGeneratedObservable = new WM.c, this.onBeforeGenerationObservable = new WM.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, rR.i)(this, gR, void 0), this._drawWrapper = (0, rR.i)(this, YW), this._textures = {}, this._size = (0, rR.i)(this, JW, void 0), this._textureType = (0, rR.i)(this, PW), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === CW || CW instanceof kR.d ? (this._options = {}, this._fallbackTexture = CW) : (this._options = CW, this._fallbackTexture = CW.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let yR = (wW = this.QRW() || iR.d.LastCreatedScene)._getComponent(pR.d.NAME_PROCEDURALTEXTURE);
          yR || (yR = new RM(wW), wW.SyW(yR)), this._options.skipSceneRegistration || wW.proceduralTextures.push(this), this._fullEngine = wW.mC(), this.name = WW, this.isRenderTarget = !0, this._size = RW, this._textureType = bR, this._generateMipMaps = zR, this._drawWrapper = new MM.d(this._fullEngine), this.setFragment(MW);
          const IW = this._createRtWrapper(AW, RW, zR, bR);
          this._texture = IW.texture;
          const oW = [];
          oW.push(1, 1), oW.push(-1, 1), oW.push(-1, -1), oW.push(1, -1), this._vertexBuffers[mR.j.PositionKind] = new mR.j(this._fullEngine, oW, mR.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(WW, RW, MW, wW) {
          return WW ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(RW, {
            generateMipMaps: MW,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wW,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(RW, {
            generateMipMaps: MW,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wW,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(WW) {
          this._drawWrapper.effect = WW
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((WW => {
            this._contentData = this.readPixels(0, 0, WW), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const WW = this._fullEngine,
            RW = [];
          RW.push(0), RW.push(1), RW.push(2), RW.push(0), RW.push(2), RW.push(3), this._indexBuffer = WW.createIndexBuffer(RW)
        }
        _rebuild() {
          const WW = this._vertexBuffers[mR.j.PositionKind];
          WW && WW._rebuild(), this._createIndexBuffer(), this.refreshRate === rM.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = rM.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(WW) {
          if (this.isReady()) return void WW(this);
          const RW = this.getEffect();
          RW && RW.executeWhenCompiled((() => {
            WW(this)
          }))
        }
        isReady() {
          const WW = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const RW = this._getDefines();
          if (this._drawWrapper.effect && RW === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const wW = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== RW && (this._cachedDefines = RW, this._drawWrapper.effect = WW.createEffect(wW, [mR.j.PositionKind], this._uniforms, this._samplers, RW, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([MW.e(361).then((() => MW(59251))), this._options.extraInitializationsAsync()]) : await Promise.all([MW.e(362).then((() => MW(59259))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await MW.e(361).then((() => MW(59251))) : await MW.e(362).then((() => MW(59259)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(WW) {
          this._fragment = WW
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(WW) {
          this._refreshRate = WW, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(WW, RW) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const MW = this._texture.isCube;
          this._rtWrapper.dispose();
          const wW = this._createRtWrapper(MW, WW, RW, this._textureType);
          this._texture = wW.texture, this._size = WW, this._generateMipMaps = RW
        }
        _checkUniform(WW) {
          -1 === this._uniforms.indexOf(WW) && this._uniforms.push(WW)
        }
        setTexture(WW, RW) {
          return -1 === this._samplers.indexOf(WW) && this._samplers.push(WW), this._textures[WW] = RW, this
        }
        setFloat(WW, RW) {
          return this._checkUniform(WW), this._floats[WW] = RW, this
        }
        setInt(WW, RW) {
          return this._checkUniform(WW), this._ints[WW] = RW, this
        }
        setFloats(WW, RW) {
          return this._checkUniform(WW), this._floatsArrays[WW] = RW, this
        }
        setColor3(WW, RW) {
          return this._checkUniform(WW), this._colors3[WW] = RW, this
        }
        setColor4(WW, RW) {
          return this._checkUniform(WW), this._colors4[WW] = RW, this
        }
        setVector2(WW, RW) {
          return this._checkUniform(WW), this._vectors2[WW] = RW, this
        }
        setVector3(WW, RW) {
          return this._checkUniform(WW), this._vectors3[WW] = RW, this
        }
        setVector4(WW, RW) {
          return this._checkUniform(WW), this._vectors4[WW] = RW, this
        }
        setMatrix(WW, RW) {
          return this._checkUniform(WW), this._matrices[WW] = RW, this
        }
        render(WW) {
          const RW = this.QRW();
          if (!RW) return;
          const MW = this._fullEngine;
          if (MW.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), MW.setState(!1), !this.nodeMaterialSource) {
            for (const WW in this._textures) this._drawWrapper.effect.setTexture(WW, this._textures[WW]);
            for (const WW in this._ints) this._drawWrapper.effect.setInt(WW, this._ints[WW]);
            for (const WW in this._floats) this._drawWrapper.effect.setFloat(WW, this._floats[WW]);
            for (const WW in this._floatsArrays) this._drawWrapper.effect.setArray(WW, this._floatsArrays[WW]);
            for (const WW in this._colors3) this._drawWrapper.effect.setColor3(WW, this._colors3[WW]);
            for (const WW in this._colors4) {
              const RW = this._colors4[WW];
              this._drawWrapper.effect.setFloat4(WW, RW.r, RW.g, RW.b, RW.a)
            }
            for (const WW in this._vectors2) this._drawWrapper.effect.setVector2(WW, this._vectors2[WW]);
            for (const WW in this._vectors3) this._drawWrapper.effect.setVector3(WW, this._vectors3[WW]);
            for (const WW in this._vectors4) this._drawWrapper.effect.setVector4(WW, this._vectors4[WW]);
            for (const WW in this._matrices) this._drawWrapper.effect.setMatrix(WW, this._matrices[WW])
          }
          if (!this._texture || !this._rtWrapper) return;
          MW._enableGPUDebugMarkers && MW._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const wW = MW.currentViewport;
          if (this.isCube)
            for (let CW = 0; CW < 6; CW++) MW.bindFramebuffer(this._rtWrapper, CW, void 0, void 0, !0), MW.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", CW), this.autoClear && MW.clear(RW.clearColor, !0, !1, !1), MW.drawElementsType(zR.e.TriangleFillMode, 0, 6), MW.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let WW = 1;
            this._rtWrapper.is3D ? WW = this._rtWrapper.depth : this._rtWrapper.is2DArray && (WW = this._rtWrapper.layers);
            for (let wW = 0; wW < WW; wW++) {
              if (MW.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, wW), MW.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== WW ? wW / (WW - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", wW);
                for (const WW in this._textures) this._drawWrapper.effect.setTexture(WW, this._textures[WW])
              }
              this.autoClear && MW.clear(RW.clearColor, !0, !1, !1), MW.drawElementsType(zR.e.TriangleFillMode, 0, 6), MW.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          wW && MW.setViewport(wW), this.isCube && MW.generateMipMapsForCubemap(this._texture, !0), MW._enableGPUDebugMarkers && MW._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const RW = this.getSize(),
            MW = new WW(this.name, RW.width, this._fragment, this.QRW(), this._fallbackTexture, this._generateMipMaps);
          return MW.hasAlpha = this.hasAlpha, MW.level = this.level, MW.coordinatesMode = this.coordinatesMode, MW
        }
        dispose() {
          const WW = this.QRW();
          if (!WW) return;
          const RW = WW.proceduralTextures.indexOf(this);
          RW >= 0 && WW.proceduralTextures.splice(RW, 1);
          const MW = this._vertexBuffers[mR.j.PositionKind];
          MW && (MW.dispose(), this._vertexBuffers[mR.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const MW = "function" === typeof Symbol && Symbol.metadata ? Object.create(yR[Symbol.metadata] ?? null) : void 0;
        RW = [(0, cR.D)()], wW = [(0, cR.D)()], CW = [(0, cR.D)()], AW = [(0, cR.D)()], bR = [(0, cR.D)()], (0, rR.e)(WW, null, bR, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: WW => "refreshRate" in WW,
            get: WW => WW.refreshRate
          },
          metadata: MW
        }, null, NW), (0, rR.e)(null, null, RW, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: MW
        }, eW, BW), (0, rR.e)(null, null, wW, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: WW => "autoClear" in WW,
            get: WW => WW.autoClear,
            set: (WW, RW) => {
              WW.autoClear = RW
            }
          },
          metadata: MW
        }, tR, TW), (0, rR.e)(null, null, CW, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: WW => "_generateMipMaps" in WW,
            get: WW => WW._generateMipMaps,
            set: (WW, RW) => {
              WW._generateMipMaps = RW
            }
          },
          metadata: MW
        }, gR, YW), (0, rR.e)(null, null, AW, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: WW => "_size" in WW,
            get: WW => WW._size,
            set: (WW, RW) => {
              WW._size = RW
            }
          },
          metadata: MW
        }, JW, PW), MW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MW
        })
      })(), WW
    })();

    function CM(WW) {
      return "texture" in WW
    }

    function zw(WW) {
      return "value" in WW
    }
    async function AM(WW, RW, wW) {
      const CW = [RW.red, RW.green, RW.blue, RW.alpha],
        zR = [],
        AW = [];
      for (let MW = 0; MW < 4; MW++) {
        const WW = CW[MW];
        if (WW)
          if (CM(WW)) {
            if (WW.sourceChannel < 0 || WW.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let RW = zR.indexOf(WW.texture); - 1 === RW && (RW = zR.length, zR.push(WW.texture)), AW[MW] = RW
          } else {
            if (!zw(WW)) throw new Error("Invalid channel input configuration");
            if (WW.value < 0 || WW.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            AW[MW] = -1
          }
        else AW[MW] = -1
      }
      let bR = RW.outputSize;
      if (!bR && zR.length > 0) {
        let WW = 0;
        for (const RW of zR) {
          const MW = RW.getSize(),
            wW = Math.max(MW.width, MW.height);
          wW > WW && (WW = wW, bR = MW.width === MW.height ? WW : MW)
        }
      }
      bR = bR || 512;
      const yR = [],
        NW = new Set;
      for (let MW = 0; MW < 4; MW++) {
        const WW = CW[MW],
          RW = ["RED", "GREEN", "BLUE", "ALPHA"][MW];
        if (WW && CM(WW)) {
          yR.push(`${RW}_FROM_TEXTURE`);
          const WW = AW[MW];
          NW.add(WW)
        }
      }
      NW.forEach((WW => {
        yR.push(`USE_TEXTURE${WW}`)
      }));
      const eW = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: wW.mC().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            wW.mC().isWebGPU ? await Promise.all([MW.e(359).then((() => MW(59240)))]) : await Promise.all([MW.e(360).then((() => MW(59245)))])
          },
          skipSceneRegistration: !0
        },
        BW = new wM(WW, bR, "textureMerger", wW, eW);
      BW.refreshRate = -1, BW.defines = yR.length > 0 ? "#define " + yR.join("\n#define ") + "\n" : "";
      for (let MW = 0; MW < zR.length; MW++) tR = zR[MW], (TW = BW).uOffset = tR.uOffset, TW.vOffset = tR.vOffset, TW.uScale = tR.uScale, TW.vScale = tR.vScale, TW.uAng = tR.uAng, TW.vAng = tR.vAng, TW.wAng = tR.wAng, TW.uRotationCenter = tR.uRotationCenter, TW.vRotationCenter = tR.vRotationCenter, BW.setTexture(`inputTexture${MW}`, zR[MW]);
      var tR, TW;
      for (let MW = 0; MW < 4; MW++) {
        const WW = CW[MW],
          RW = ["red", "green", "blue", "alpha"][MW];
        if (WW && CM(WW)) {
          const wW = AW[MW];
          BW.setInt(`${RW}TextureIndex`, wW), BW.setInt(`${RW}SourceChannel`, WW.sourceChannel)
        } else {
          let wW;
          wW = WW && zw(WW) ? WW.value : 3 === MW ? 1 : 0, BW.setFloat(`${RW}ConstantValue`, wW)
        }
      }
      return await new Promise(((WW, RW) => {
        BW.executeWhenReady((() => {
          try {
            BW.render(), WW(BW)
          } catch (MW) {
            RW(MW instanceof Error ? MW : new Error(String(MW)))
          }
        }))
      }))
    }

    function bw(WW, RW) {
      return {
        texture: WW,
        sourceChannel: RW
      }
    }

    function yw(WW) {
      return {
        value: WW
      }
    }

    function NM(WW, RW, MW, wW) {
      return {
        red: WW,
        green: RW,
        blue: MW,
        alpha: wW
      }
    }
    var eM = MW(37421),
      BM = MW(37517),
      tw = MW(35336),
      TM = MW(37568),
      gw = MW(37500);
    class iw {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class YM extends eM.c {
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
        return !!this._options?.enableMultiview || this.Gs > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new iw;
        super(null), void 0 === WW.deterministicLockstep && (WW.deterministicLockstep = !1), void 0 !== WW.timeStep && (this._timeStep = WW.timeStep), void 0 === WW.lockstepMaxSteps && (WW.lockstepMaxSteps = 4), this._options = WW, tw.d.SetMatrixPrecision(!!WW.useHighPrecisionMatrix), this._caps = {
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
        }, WW.enableMultiview && (this._caps.multiview = {
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
        }, WW.renderingCanvas && (this._renderingCanvas = WW.renderingCanvas), XW.b.Log(`Babylon.js v${eM.c.Version} - Null engine`);
        const RW = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (RW.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (RW.Blob = function() {})
      }
      createVertexBuffer(WW) {
        const RW = new BM.d;
        return RW.references = 1, RW
      }
      createIndexBuffer(WW) {
        const RW = new BM.d;
        return RW.references = 1, RW
      }
      clear(WW, RW, MW) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(WW, RW, MW) {
        this._cachedViewport = WW
      }
      createUniformBuffer(WW) {
        const RW = new BM.d;
        return RW.references = 1, RW.aR = WW instanceof Array ? WW.length * Float32Array.BYTES_PER_ELEMENT : WW.byteLength, RW
      }
      createDynamicUniformBuffer(WW) {
        return this.createUniformBuffer(WW)
      }
      updateUniformBuffer(WW, RW, MW, wW) {}
      bindUniformBufferBase(WW, RW, MW) {}
      bindUniformBlock(WW, RW, MW) {}
      createShaderProgram(WW, RW, MW, wW, CW) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(WW, RW) {
        return []
      }
      getAttributes(WW, RW) {
        return []
      }
      bindSamplers(WW) {
        this._currentEffect = null
      }
      enableEffect(WW) {
        WW = null !== WW && (0, gw.c)(WW) ? WW.effect : WW, this._currentEffect = WW, WW && (WW.onBind && WW.onBind(WW), WW._onBindObservable && WW._onBindObservable.notifyObservers(WW))
      }
      setStateCullFaceType(WW, RW) {}
      setState(WW) {}
      setIntArray(WW, RW) {
        return !0
      }
      setIntArray2(WW, RW) {
        return !0
      }
      setIntArray3(WW, RW) {
        return !0
      }
      setIntArray4(WW, RW) {
        return !0
      }
      setFloatArray(WW, RW) {
        return !0
      }
      setFloatArray2(WW, RW) {
        return !0
      }
      setFloatArray3(WW, RW) {
        return !0
      }
      setFloatArray4(WW, RW) {
        return !0
      }
      setArray(WW, RW) {
        return !0
      }
      setArray2(WW, RW) {
        return !0
      }
      setArray3(WW, RW) {
        return !0
      }
      setArray4(WW, RW) {
        return !0
      }
      setMatrices(WW, RW) {
        return !0
      }
      setMatrix3x3(WW, RW) {
        return !0
      }
      setMatrix2x2(WW, RW) {
        return !0
      }
      setFloat(WW, RW) {
        return !0
      }
      setFloat2(WW, RW, MW) {
        return !0
      }
      setFloat3(WW, RW, MW, wW) {
        return !0
      }
      setBool(WW, RW) {
        return !0
      }
      setFloat4(WW, RW, MW, wW, CW) {
        return !0
      }
      setAlphaMode(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[MW] !== WW && (this.alphaState.setAlphaBlend(0 !== WW, 0), RW || this.setDepthWrite(0 === WW), this._alphaMode[MW] = WW)
      }
      bindBuffers(WW, RW, MW) {}
      wipeCaches(WW) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, WW && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(WW, RW, MW, wW) {}
      drawElementsType(WW, RW, MW, wW) {}
      drawArraysType(WW, RW, MW, wW) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(WW) {}
      createTexture(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          bR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const yR = new cM.e(this, 1),
          NW = String(WW);
        return yR.url = NW, yR.generateMipMaps = !RW, yR.samplingMode = CW, yR.invertY = MW, yR.baseWidth = this._options.textureSize, yR.baseHeight = this._options.textureSize, yR.width = this._options.textureSize, yR.height = this._options.textureSize, bR && (yR.format = bR), AW && (yR._buffer = AW), yR.isReady = !0, zR && setTimeout((() => {
          zR(yR)
        })), this._internalTexturesCache.push(yR), yR
      }
      _createHardwareRenderTargetWrapper(WW, RW, MW) {
        const wW = new TM.e(WW, RW, MW, this);
        return this._renderTargetWrapperCache.push(wW), wW
      }
      createRenderTargetTexture(WW, RW) {
        const MW = this._createHardwareRenderTargetWrapper(!1, !1, WW),
          wW = {};
        void 0 !== RW && "object" === typeof RW ? (wW.generateMipMaps = RW.generateMipMaps, wW.generateDepthBuffer = void 0 === RW.generateDepthBuffer || RW.generateDepthBuffer, wW.generateStencilBuffer = wW.generateDepthBuffer && RW.generateStencilBuffer, wW.type = void 0 === RW.type ? 0 : RW.type, wW.samplingMode = void 0 === RW.samplingMode ? 3 : RW.samplingMode) : (wW.generateMipMaps = RW, wW.generateDepthBuffer = !0, wW.generateStencilBuffer = !1, wW.type = 0, wW.samplingMode = 3);
        const CW = new cM.e(this, 5);
        MW.setTexture(CW);
        const zR = WW.width || WW,
          AW = WW.height || WW;
        return MW._generateDepthBuffer = wW.generateDepthBuffer, MW._generateStencilBuffer = !!wW.generateStencilBuffer, CW.baseWidth = zR, CW.baseHeight = AW, CW.width = zR, CW.height = AW, CW.isReady = !0, CW.samples = 1, CW.generateMipMaps = !!wW.generateMipMaps, CW.samplingMode = wW.samplingMode, CW.type = wW.type, this._internalTexturesCache.push(CW), MW
      }
      createMultiviewRenderTargetTexture(WW, RW) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const MW = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: WW,
            height: RW
          }),
          wW = new cM.e(this, 5, !0);
        return wW.baseWidth = WW, wW.baseHeight = RW, wW.width = WW, wW.height = RW, wW.isMultiview = !0, wW.isReady = !0, wW.format = 5, wW.samples = 1, MW.setTextures(wW), MW
      }
      bindMultiviewFramebuffer(WW) {
        this.bindFramebuffer(WW, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(WW, RW) {
        const MW = this._createHardwareRenderTargetWrapper(!1, !0, WW),
          wW = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...RW
          };
        wW.generateStencilBuffer = wW.generateDepthBuffer && wW.generateStencilBuffer, (1 !== wW.type || this._caps.textureFloatLinearFiltering) && (2 !== wW.type || this._caps.textureHalfFloatLinearFiltering) || (wW.samplingMode = 1), MW._generateDepthBuffer = wW.generateDepthBuffer, MW._generateStencilBuffer = !!wW.generateStencilBuffer;
        const CW = new cM.e(this, 5);
        return CW.baseWidth = WW, CW.baseHeight = WW, CW.width = WW, CW.height = WW, CW.isReady = !0, CW.isCube = !0, CW.samples = 1, CW.generateMipMaps = !!wW.generateMipMaps, CW.samplingMode = wW.samplingMode, CW.type = wW.type, this._internalTexturesCache.push(CW), MW
      }
      updateTextureSamplingMode(WW, RW) {
        RW.samplingMode = WW
      }
      createRawTexture(WW, RW, MW, wW, CW, zR, AW) {
        let bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          yR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          NW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const eW = new cM.e(this, 3);
        return eW.baseWidth = RW, eW.baseHeight = MW, eW.width = RW, eW.height = MW, eW.format = wW, eW.generateMipMaps = CW, eW.samplingMode = AW, eW.invertY = zR, eW._compression = bR, eW.type = yR, eW._useSRGBBuffer = NW, this._doNotHandleContextLost || (eW._bufferView = WW), eW
      }
      updateRawTexture(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        WW && (WW._bufferView = RW, WW.format = MW, WW.invertY = wW, WW._compression = CW, WW.type = zR, WW._useSRGBBuffer = AW)
      }
      bindFramebuffer(WW, RW, MW, wW, CW) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = WW, this._currentFramebuffer = null, this._cachedViewport && !CW && this.setViewport(this._cachedViewport, MW, wW)
      }
      unBindFramebuffer(WW) {
        let RW = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, RW && RW(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(WW) {
        const RW = new BM.d;
        return RW.references = 1, RW.aR = 1, RW
      }
      updateDynamicTexture(WW, RW, MW) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(WW) {}
      updateDynamicIndexBuffer(WW, RW) {}
      updateDynamicVertexBuffer(WW, RW, MW, wW) {}
      _bindTextureDirectly(WW, RW) {
        return this._boundTexturesCache[this._activeChannel] !== RW && (this._boundTexturesCache[this._activeChannel] = RW, !0)
      }
      _bindTexture(WW, RW) {
        WW < 0 || this._bindTextureDirectly(0, RW)
      }
      _deleteBuffer(WW) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(WW) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(WW, RW, MW, wW, CW) {}
      _uploadDataToTextureDirectly(WW, RW) {}
      _uploadArrayBufferViewToTexture(WW, RW) {}
      _uploadImageToTexture(WW, RW) {}
    }
    MW(37632), MW(37661), MW(37628);
    async function JM(WW) {
      const RW = WW.getInternalTexture();
      if (!RW || 1 !== RW.source) return null;
      if (RW.invertY) {
        const RW = WW.QRW()?.mC();
        if (!(RW instanceof YM)) return null
      }
      const MW = RW._buffer;
      let wW, zR = WW.mimeType;
      try {
        MW ? ArrayBuffer.isView(MW) ? wW = MW.buffer.slice(MW.byteOffset, MW.byteOffset + MW.byteLength) : MW instanceof ArrayBuffer ? wW = MW : MW instanceof Blob ? (wW = await MW.arrayBuffer(), zR = MW.type || zR) : "string" === typeof MW ? (wW = await CW.Tools.LoadFileAsync(MW), zR = (0, yR.d)(MW) || zR) : "undefined" !== typeof HTMLImageElement && MW instanceof HTMLImageElement && (wW = await CW.Tools.LoadFileAsync(MW.src), zR = (0, yR.d)(MW.src) || zR) : (wW = await CW.Tools.LoadFileAsync(RW.url), zR = (0, yR.d)(RW.url) || zR)
      } catch {
        return null
      }
      if (wW && !zR && RW.url) {
        const WW = RW.url.match(/^data:([^;,]+)/);
        zR = WW ? WW[1] : (0, yR.d)(RW.url)
      }
      return wW && zR ? {
        data: wW,
        mimeType: zR
      } : null
    }
    const PM = 1e-6,
      IM = new YW.Color3(.04, .04, .04),
      oM = 1024,
      lM = YW.Color3.White(),
      FM = YW.Color3.BlackReadOnly;

    function fM(WW) {
      switch (WW) {
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

    function QM(WW, RW, MW) {
      if (RW < IM.r) return 0;
      const wW = IM.r,
        CW = WW * MW / (1 - IM.r) + RW - 2 * IM.r,
        zR = CW * CW - 4 * wW * (IM.r - RW);
      return IW.Clamp((-CW + Math.sqrt(zR)) / (2 * wW), 0, 1)
    }

    function rw(WW) {
      const RW = WW.diffuseColor.toLinearSpace(WW.QRW().mC().useExactSrgbConversions).scale(.5),
        MW = WW.alpha,
        wW = function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new VW.n(0, 1),
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new VW.n(0, .1),
            wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new VW.n(0, .1),
            CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new VW.n(1300, .1);
          return function(WW, RW, MW, wW, CW) {
            return (1 - WW) * (1 - WW) * (1 - WW) * RW + 3 * (1 - WW) * (1 - WW) * WW * MW + 3 * (1 - WW) * WW * WW * wW + WW * WW * WW * CW
          }(Math.pow(WW / CW.x, .333333), RW.y, MW.y, wW.y, CW.y)
        }(IW.Clamp(WW.specularPower, 0, oM));
      return {
        baseColorFactor: [RW.r, RW.g, RW.b, MW],
        metallicFactor: 0,
        roughnessFactor: wW
      }
    }

    function cwW(WW, RW) {
      RW.needAlphaBlending() ? WW.alphaMode = "BLEND" : RW.needAlphaTesting() && (WW.alphaMode = "MASK", WW.alphaCutoff = RW.alphaCutOff)
    }

    function XM(WW, RW, MW) {
      const wW = new Uint8Array(WW * RW * 4);
      for (let CW = 0; CW < wW.length; CW += 4) wW[CW] = wW[CW + 1] = wW[CW + 2] = wW[CW + 3] = 255;
      return FW.b.CreateRGBATexture(wW, WW, RW, MW)
    }

    function jw(WW) {
      if (WW instanceof Uint8Array) {
        const RW = WW.length,
          MW = new Float32Array(WW.length);
        for (let wW = 0; wW < RW; ++wW) MW[wW] = WW[wW] / 255;
        return MW
      }
      if (WW instanceof Float32Array) return WW;
      throw new Error("Unsupported pixel format!")
    }
    class kw {
      constructor(WW) {
        this._exporter = WW, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(WW) {
        return WW ? this._textureMap.get(WW.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(WW, RW) {
        const MW = rw(WW),
          wW = {
            name: WW.name
          };
        if (null == WW.backFaceCulling || WW.backFaceCulling || (WW.twoSidedLighting || CW.Tools.Warn(WW.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), wW.doubleSided = !0), RW) {
          const RW = [],
            CW = WW.diffuseTexture;
          CW && RW.push(this.exportTextureAsync(CW).then((WW => {
            WW && (MW.baseColorTexture = WW)
          })));
          const zR = WW.bumpTexture;
          zR && RW.push(this.exportTextureAsync(zR).then((WW => {
            WW && (wW.normalTexture = WW, 1 !== zR.level && (wW.normalTexture.scale = zR.level))
          })));
          const AW = WW.emissiveTexture;
          AW && (wW.emissiveFactor = [1, 1, 1], RW.push(this.exportTextureAsync(AW).then((WW => {
            WW && (wW.emissiveTexture = WW)
          }))));
          const bR = WW.ambientTexture;
          bR && RW.push(this.exportTextureAsync(bR).then((WW => {
            if (WW) {
              const RW = {
                index: WW.index
              };
              wW.occlusionTexture = RW
            }
          }))), RW.length > 0 && (this._exporter._materialNeedsUVsSet.add(WW), await Promise.all(RW))
        }(WW.alpha < 1 || WW.opacityTexture) && (WW.alphaMode === fW.c.ALPHA_COMBINE ? wW.alphaMode = "BLEND" : CW.Tools.Warn(WW.name + ": glTF 2.0 does not support alpha mode: " + WW.alphaMode.toString())), WW.emissiveColor && !WW.emissiveColor.equalsWithEpsilon(FM, PM) && (wW.emissiveFactor = WW.emissiveColor.JNW()), wW.pbrMetallicRoughness = MW, cwW(wW, WW), await this._finishMaterialAsync(wW, WW);
        const zR = this._exporter._materials;
        return zR.push(wW), zR.length - 1
      }
      async _finishMaterialAsync(WW, RW) {
        const MW = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", WW, RW),
          wW = [];
        for (const CW of MW) wW.push(this.exportTextureAsync(CW));
        await Promise.all(wW), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", WW, RW)
      }
      _resizeTexturesToSameDimensions(WW, RW, MW) {
        const wW = WW ? WW.getSize() : {
            width: 0,
            height: 0
          },
          CW = RW ? RW.getSize() : {
            width: 0,
            height: 0
          };
        let zR, AW;
        return wW.width < CW.width ? (zR = WW && WW instanceof lW.b ? oW.f.CreateResizedCopy(WW, CW.width, CW.height, !0) : XM(CW.width, CW.height, MW), AW = RW) : wW.width > CW.width ? (AW = RW && RW instanceof lW.b ? oW.f.CreateResizedCopy(RW, wW.width, wW.height, !0) : XM(wW.width, wW.height, MW), zR = WW) : (zR = WW, AW = RW), {
          texture1: zR,
          texture2: AW
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(WW, RW, MW) {
        const wW = new Array;
        if (!WW && !RW) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const CW = WW ? WW.QRW() : RW ? RW.QRW() : null;
        if (CW) {
          const zR = this._resizeTexturesToSameDimensions(WW, RW, CW),
            AW = zR.texture1?.getSize();
          let bR, yR;
          const NW = AW.width,
            eW = AW.height,
            BW = await zR.texture1.readPixels(),
            tR = await zR.texture2.readPixels();
          if (!BW) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (bR = jw(BW), !tR) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          yR = jw(tR);
          const TW = yR.byteLength,
            gR = new Uint8Array(TW),
            iR = new Uint8Array(TW),
            JW = 4,
            PW = new YW.Color3(0, 0, 0);
          let IW = 0,
            oW = 0;
          for (let WW = 0; WW < eW; ++WW)
            for (let RW = 0; RW < NW; ++RW) {
              const wW = (NW * WW + RW) * JW,
                AW = {
                  diffuseColor: new YW.Color3(bR[wW], bR[wW + 1], bR[wW + 2]).toLinearSpace(CW.mC().useExactSrgbConversions).multiply(MW.diffuseColor),
                  specularColor: new YW.Color3(yR[wW], yR[wW + 1], yR[wW + 2]).toLinearSpace(CW.mC().useExactSrgbConversions).multiply(MW.specularColor),
                  glossiness: yR[wW + 3] * MW.glossiness
                },
                eW = this._convertSpecularGlossinessToMetallicRoughness(AW);
              PW.r = Math.max(PW.r, eW.baseColor.r), PW.g = Math.max(PW.g, eW.baseColor.g), PW.b = Math.max(PW.b, eW.baseColor.b), IW = Math.max(IW, eW.metallic), oW = Math.max(oW, eW.roughness), iR[wW] = 255 * eW.baseColor.r, iR[wW + 1] = 255 * eW.baseColor.g, iR[wW + 2] = 255 * eW.baseColor.b, iR[wW + 3] = zR.texture1.hasAlpha ? 255 * bR[wW + 3] : 255, gR[wW] = 0, gR[wW + 1] = 255 * eW.roughness, gR[wW + 2] = 255 * eW.metallic, gR[wW + 3] = 255
            }
          const lW = {
            baseColor: PW,
            metallic: IW,
            roughness: oW
          };
          let FW = !1,
            fW = !1;
          for (let WW = 0; WW < eW; ++WW)
            for (let RW = 0; RW < NW; ++RW) {
              const MW = (NW * WW + RW) * JW;
              iR[MW] /= lW.baseColor.r > PM ? lW.baseColor.r : 1, iR[MW + 1] /= lW.baseColor.g > PM ? lW.baseColor.g : 1, iR[MW + 2] /= lW.baseColor.b > PM ? lW.baseColor.b : 1;
              const wW = YW.Color3.FromInts(iR[MW], iR[MW + 1], iR[MW + 2]).toGammaSpace(CW.mC().useExactSrgbConversions);
              iR[MW] = 255 * wW.r, iR[MW + 1] = 255 * wW.g, iR[MW + 2] = 255 * wW.b, wW.equalsWithEpsilon(lM, PM) || (fW = !0), gR[MW + 1] /= lW.roughness > PM ? lW.roughness : 1, gR[MW + 2] /= lW.metallic > PM ? lW.metallic : 1;
              YW.Color3.FromInts(255, gR[MW + 1], gR[MW + 2]).equalsWithEpsilon(lM, PM) || (FW = !0)
            }
          return FW && wW.push((0, QW.EncodeImageAsync)(gR, NW, eW).then((WW => {
            lW.metallicRoughnessTextureData = WW
          }))), fW && wW.push((0, QW.EncodeImageAsync)(iR, NW, eW).then((WW => {
            lW.baseColorTextureData = WW
          }))), await Promise.all(wW).then((() => lW))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(WW) {
        const RW = this._getPerceivedBrightness(WW.diffuseColor),
          MW = this._getPerceivedBrightness(WW.specularColor),
          wW = 1 - this._getMaxComponent(WW.specularColor),
          CW = QM(RW, MW, wW),
          zR = WW.diffuseColor.scale(wW / (1 - IM.r) / Math.max(1 - CW, PM)),
          AW = WW.specularColor.subtract(IM.scale(1 - CW)).scale(1 / Math.max(CW, PM));
        let bR = YW.Color3.Lerp(zR, AW, CW * CW);
        bR = bR.clampToRef(0, 1, bR);
        return {
          baseColor: bR,
          metallic: CW,
          roughness: 1 - WW.glossiness
        }
      }
      _getPerceivedBrightness(WW) {
        return Math.sqrt(.299 * WW.r * WW.r + .587 * WW.g * WW.g + .114 * WW.b * WW.b)
      }
      _getMaxComponent(WW) {
        return Math.max(WW.r, Math.max(WW.g, WW.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        const NW = [],
          eW = {
            baseColor: WW,
            metallic: RW,
            roughness: MW
          };
        if (yR)
          if (AW instanceof ZR) {
            if (AW.geometryOpacityTexture) {
              const WW = wW && wW.getInternalTexture() ? wW.getInternalTexture().uniqueId : 0,
                RW = AW.geometryOpacityTexture && AW.geometryOpacityTexture.getInternalTexture() ? AW.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                MW = Number(`${WW}${RW}`),
                CW = this._textureMap.get(MW);
              CW ? bR.baseColorTexture = CW : NW.push(AM("baseColorOpacityTexture", NM(wW ? bw(wW, 0) : yw(1), wW ? bw(wW, 1) : yw(1), wW ? bw(wW, 2) : yw(1), bw(AW.geometryOpacityTexture, 0)), AW.QRW()).then((async WW => {
                const RW = await this.exportTextureAsync(WW, MW);
                RW && (bR.baseColorTexture = RW)
              })))
            } else wW && NW.push(this.exportTextureAsync(wW).then((WW => {
              WW && (bR.baseColorTexture = WW)
            })));
            if (AW._useMetallicFromMetallicTextureBlue && CW) NW.push(this.exportTextureAsync(CW).then((WW => {
              WW && (bR.metallicRoughnessTexture = WW)
            })));
            else if (zR || CW) {
              const WW = CW && CW.getInternalTexture() ? CW.getInternalTexture().uniqueId : 0,
                RW = zR && zR.getInternalTexture() ? zR.getInternalTexture().uniqueId : 0,
                MW = Number(`${WW}${RW}`),
                wW = this._textureMap.get(MW);
              wW ? bR.metallicRoughnessTexture = wW : NW.push(AM("MetalRoughTexture", NM(AW.ambientOcclusionTexture ? bw(AW.ambientOcclusionTexture, 0) : yw(1), zR ? bw(zR, 0) : yw(1), CW ? bw(CW, 0) : yw(1)), AW.QRW()).then((async WW => {
                const RW = await this.exportTextureAsync(WW, MW);
                RW && (bR.metallicRoughnessTexture = RW)
              })))
            }
          } else wW && NW.push(this.exportTextureAsync(wW).then((WW => {
            WW && (bR.baseColorTexture = WW)
          }))), CW && NW.push(this.exportTextureAsync(CW).then((WW => {
            WW && (bR.metallicRoughnessTexture = WW)
          })));
        return NW.length > 0 && (this._exporter._materialNeedsUVsSet.add(AW), await Promise.all(NW)), eW
      }
      _getTextureSampler(WW) {
        const RW = {};
        if (!WW || !(WW instanceof lW.b)) return RW;
        const MW = this._getGLTFTextureWrapMode(WW.wrapU);
        10497 !== MW && (RW.wrapS = MW);
        const wW = this._getGLTFTextureWrapMode(WW.wrapV);
        switch (10497 !== wW && (RW.wrapT = wW), WW.samplingMode) {
          case lW.b.LINEAR_LINEAR:
            RW.magFilter = 9729, RW.minFilter = 9729;
            break;
          case lW.b.LINEAR_NEAREST:
            RW.magFilter = 9729, RW.minFilter = 9728;
            break;
          case lW.b.NEAREST_LINEAR:
            RW.magFilter = 9728, RW.minFilter = 9729;
            break;
          case lW.b.NEAREST_LINEAR_MIPLINEAR:
            RW.magFilter = 9728, RW.minFilter = 9987;
            break;
          case lW.b.NEAREST_NEAREST:
            RW.magFilter = 9728, RW.minFilter = 9728;
            break;
          case lW.b.NEAREST_LINEAR_MIPNEAREST:
            RW.magFilter = 9728, RW.minFilter = 9985;
            break;
          case lW.b.LINEAR_NEAREST_MIPNEAREST:
            RW.magFilter = 9729, RW.minFilter = 9984;
            break;
          case lW.b.LINEAR_NEAREST_MIPLINEAR:
            RW.magFilter = 9729, RW.minFilter = 9986;
            break;
          case lW.b.NEAREST_NEAREST_MIPLINEAR:
            RW.magFilter = 9728, RW.minFilter = 9986;
            break;
          case lW.b.LINEAR_LINEAR_MIPLINEAR:
            RW.magFilter = 9729, RW.minFilter = 9987;
            break;
          case lW.b.LINEAR_LINEAR_MIPNEAREST:
            RW.magFilter = 9729, RW.minFilter = 9985;
            break;
          case lW.b.NEAREST_NEAREST_MIPNEAREST:
            RW.magFilter = 9728, RW.minFilter = 9984
        }
        return RW
      }
      _getGLTFTextureWrapMode(WW) {
        switch (WW) {
          case lW.b.WRAP_ADDRESSMODE:
            return 10497;
          case lW.b.CLAMP_ADDRESSMODE:
            return 33071;
          case lW.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return CW.Tools.Error(`Unsupported Texture Wrap Mode ${WW}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(WW, RW, MW) {
        const wW = {
            diffuseColor: WW._albedoColor,
            specularColor: WW._reflectivityColor,
            glossiness: WW._microSurface
          },
          CW = WW._albedoTexture,
          zR = WW._reflectivityTexture,
          AW = WW._useMicroSurfaceFromReflectivityMapAlpha;
        if (zR && !AW) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((CW || zR) && MW) {
          this._exporter._materialNeedsUVsSet.add(WW);
          const MW = this._exportTextureSampler(CW || zR),
            AW = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(CW, zR, wW),
            bR = this._exporter._textures;
          if (AW.baseColorTextureData) {
            const WW = await this._exportImageAsync(`baseColor${bR.length}`, AW.baseColorTextureData);
            RW.baseColorTexture = this._exportTextureInfo(WW, MW, CW?.coordinatesIndex)
          }
          if (AW.metallicRoughnessTextureData) {
            const WW = await this._exportImageAsync(`metallicRoughness${bR.length}`, AW.metallicRoughnessTextureData);
            RW.metallicRoughnessTexture = this._exportTextureInfo(WW, MW, zR?.coordinatesIndex)
          }
          return AW
        }
        return this._convertSpecularGlossinessToMetallicRoughness(wW)
      }
      async exportPBRMaterialAsync(WW, RW) {
        const MW = {},
          wW = {
            name: WW.name
          },
          CW = WW.isMetallicWorkflow();
        if (CW) {
          const RW = WW._albedoColor,
            wW = WW.alpha;
          RW && (MW.baseColorFactor = [RW.r, RW.g, RW.b, wW])
        }
        const zR = CW ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(WW._albedoColor, WW._metallic, WW._roughness, WW._albedoTexture, WW._metallicTexture, WW._metallicTexture, WW, MW, RW) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(WW, MW, RW);
        await this._setMetallicRoughnessPbrMaterialAsync(zR, WW, wW, MW, RW), await this._finishMaterialAsync(wW, WW);
        const AW = this._exporter._materials;
        return AW.push(wW), AW.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(WW, RW, MW, wW, zR) {
        if (cwW(MW, RW), WW.baseColor.equalsWithEpsilon(lM, PM) && IW.WithinEpsilon(RW.alpha, 1, PM) || (wW.baseColorFactor = [WW.baseColor.r, WW.baseColor.g, WW.baseColor.b, RW.alpha]), null != WW.metallic && 1 !== WW.metallic && (wW.metallicFactor = WW.metallic), null != WW.roughness && 1 !== WW.roughness && (wW.roughnessFactor = WW.roughness), null == RW.backFaceCulling || RW.backFaceCulling || (RW._twoSidedLighting || CW.Tools.Warn(RW.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), MW.doubleSided = !0), zR) {
          const WW = [],
            CW = RW instanceof FR ? RW._bumpTexture : RW.geometryNormalTexture;
          CW && WW.push(this.exportTextureAsync(CW).then((WW => {
            WW && (MW.normalTexture = WW, 1 !== CW.level && (MW.normalTexture.scale = CW.level))
          })));
          const zR = RW instanceof FR ? RW._ambientTexture : RW.ambientOcclusionTexture;
          zR && WW.push(new Promise((async WW => {
            if (RW instanceof ZR && wW.metallicRoughnessTexture) {
              const RW = this._exportTextureSampler(zR),
                MW = this._exporter._textures[wW.metallicRoughnessTexture.index].source,
                CW = this._exportTextureInfo(MW, RW, zR.coordinatesIndex);
              return this._textureMap.set(zR.uniqueId, CW), this._exporter._extensionsPostExportTextures("exporter", CW, zR), WW(CW)
            }
            return WW(await this.exportTextureAsync(zR))
          })).then((async WW => {
            if (WW) {
              const wW = {
                index: WW.index,
                texCoord: WW.texCoord,
                extensions: WW.extensions
              };
              MW.occlusionTexture = wW, wW.strength = RW instanceof FR ? RW._ambientTextureStrength : RW.ambientOcclusionTexture.level
            }
          })));
          const AW = RW instanceof FR ? RW._emissiveTexture : RW.emissionColorTexture;
          AW && WW.push(this.exportTextureAsync(AW).then((WW => {
            WW && (MW.emissiveTexture = WW)
          }))), WW.length > 0 && (this._exporter._materialNeedsUVsSet.add(RW), await Promise.all(WW))
        }
        const AW = RW instanceof FR ? RW._emissiveColor : RW.emissionColor;
        AW.equalsWithEpsilon(FM, PM) || (MW.emissiveFactor = AW.JNW()), MW.pbrMetallicRoughness = wW
      }
      async exportOpenPBRMaterialAsync(WW, RW) {
        const MW = {},
          wW = {
            name: WW.name
          },
          CW = WW.baseColor,
          zR = WW.geometryOpacity;
        CW && (MW.baseColorFactor = [CW.r, CW.g, CW.b, zR]);
        const AW = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(WW.baseColor, WW.baseMetalness, WW.specularRoughness, WW.baseColorTexture, WW.baseMetalnessTexture, WW.specularRoughnessTexture, WW, MW, RW);
        await this._setMetallicRoughnessPbrMaterialAsync(AW, WW, wW, MW, RW), await this._finishMaterialAsync(wW, WW);
        const bR = this._exporter._materials;
        return bR.push(wW), bR.length - 1
      }
      async exportTextureAsync(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = this._textureMap.get(RW ?? WW.uniqueId);
        if (MW) return MW;
        const wW = this._exportTextureSampler(WW),
          CW = await this._exportTextureImageAsync(WW);
        return MW = this._exportTextureInfo(CW, wW, WW.coordinatesIndex), this._textureMap.set(RW ?? WW.uniqueId, MW), this._exporter._extensionsPostExportTextures("exporter", MW, WW), MW
      }
      async _exportTextureImageAsync(WW) {
        const RW = WW.mimeType ?? "none",
          MW = this._internalTextureToImage,
          wW = WW.getInternalTexture().uniqueId;
        MW[wW] = MW[wW] || {};
        let zR = MW[wW][RW];
        return void 0 === zR && (zR = (async () => {
          const MW = await JM(WW);
          if (MW && fM(MW.mimeType) && ("none" === RW || MW.mimeType === RW)) return await this._exportImageAsync(WW.name, new Blob([MW.data], {
            type: MW.mimeType
          }));
          let wW = "image/png";
          "none" !== RW && (fM(RW) ? wW = RW : (wW = "image/png", CW.Tools.Warn(`Unsupported media type: ${RW}. Exporting texture as PNG.`)));
          const zR = WW.getSize(),
            AW = await (0, oW.d)(WW),
            bR = await (0, QW.EncodeImageAsync)(AW, zR.width, zR.height, wW);
          return await this._exportImageAsync(WW.name, bR)
        })(), MW[wW][RW] = zR), await zR
      }
      async _exportImageAsync(WW, RW) {
        const MW = this._exporter._images;
        let wW;
        if (this._exporter._shouldUseGlb) {
          wW = {
            name: WW,
            mimeType: RW.type,
            bufferView: void 0
          };
          const MW = await RW.arrayBuffer(),
            CW = this._exporter._bufferManager.createBufferView(new Uint8Array(MW));
          this._exporter._bufferManager.setBufferView(wW, CW)
        } else {
          const zR = WW.replace(/\.\/|\/|\.\\|\\/g, "_"),
            AW = function(WW) {
              switch (WW) {
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
            }(RW.type);
          let bR = zR + AW;
          MW.some((WW => WW.uri === bR)) && (bR = `${zR}_${CW.Tools.RandomId()}${AW}`), wW = {
            name: WW,
            uri: bR
          }, this._exporter._imageData[bR] = RW
        }
        return MW.push(wW), MW.length - 1
      }
      _exportTextureInfo(WW, RW, MW) {
        const wW = this._exporter._textures;
        let CW = wW.findIndex((MW => MW.sampler == RW && MW.source === WW)); - 1 === CW && (CW = wW.length, wW.push({
          source: WW,
          sampler: RW
        }));
        const zR = {
          index: CW
        };
        return MW && (zR.texCoord = MW), zR
      }
      _exportTextureSampler(WW) {
        const RW = this._getTextureSampler(WW),
          MW = this._exporter._samplers,
          wW = MW.findIndex((WW => WW.minFilter === RW.minFilter && WW.magFilter === RW.magFilter && WW.wrapS === RW.wrapS && WW.wrapT === RW.wrapT));
        return -1 !== wW ? wW : (MW.push(RW), MW.length - 1)
      }
    }
    var aw = MW(37652),
      sM = MW(37787);
    (0, sM.d)();
    var dM = MW(35328);
    const pM = wW.Matrix.Compose(new wW.vC(-1, 1, 1), wW.Quaternion.Identity(), wW.vC.Zero());

    function hM(WW, RW) {
      if (!(WW instanceof BW.d)) return !1;
      if (RW) {
        if (!WW.getWorldMatrix().equalsWithEpsilon(wW.Matrix.IdentityReadOnly, dM.c)) return !1
      } else {
        if (!WW.getWorldMatrix().multiplyToRef(pM, wW.TmpVectors.Matrix[0]).equalsWithEpsilon(wW.Matrix.IdentityReadOnly, dM.c)) return !1
      }
      return !(WW instanceof tR.b && WW.geometry)
    }
    const UM = wW.vC.ZeroReadOnly,
      EM = wW.Quaternion.Identity(),
      VM = wW.vC.OneReadOnly,
      mw = new wW.vC(-1, 1, 1);

    function xw(WW, RW) {
      const {
        byteOffset: MW,
        byteStride: wW,
        type: CW,
        normalized: zR
      } = WW, AW = WW.getSize(), bR = RW.reduce(((WW, RW) => RW.getTotalVertices() > WW ? RW.getTotalVertices() : WW), -Number.MAX_VALUE);
      return {
        byteOffset: MW,
        byteStride: wW,
        componentCount: AW,
        type: CW,
        count: bR * AW,
        normalized: zR,
        totalVertices: bR,
        kind: WW.getKind()
      }
    }

    function vw(WW) {
      switch (WW) {
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

    function KM(WW) {
      switch (WW) {
        case eW.h.PositionKind:
        case eW.h.NormalKind:
        case eW.h.TangentKind:
        case eW.h.ColorKind:
        case eW.h.MatricesIndicesKind:
        case eW.h.MatricesIndicesExtraKind:
        case eW.h.MatricesWeightsKind:
        case eW.h.MatricesWeightsExtraKind:
        case eW.h.UVKind:
        case eW.h.UV2Kind:
        case eW.h.UV3Kind:
        case eW.h.UV4Kind:
        case eW.h.UV5Kind:
        case eW.h.UV6Kind:
          return !0
      }
      return !1
    }

    function uM(WW) {
      const RW = Math.sqrt(WW.x * WW.x + WW.y * WW.y + WW.z * WW.z);
      RW > 0 && (WW.x /= RW, WW.y /= RW, WW.z /= RW)
    }

    function OM(WW) {
      return WW.x *= -1, WW
    }

    function nM(WW) {
      if (WW.x * WW.x + WW.y * WW.y > .5) {
        const RW = Math.abs(WW.x),
          MW = Math.abs(WW.y);
        if (RW > MW) {
          const MW = Math.sign(WW.x);
          WW.x = RW, WW.y *= -MW, WW.z *= -MW, WW.w *= MW
        } else {
          const RW = Math.sign(WW.y);
          WW.x *= -RW, WW.y = MW, WW.z *= RW, WW.w *= -RW
        }
      } else {
        const RW = Math.abs(WW.z),
          MW = Math.abs(WW.w);
        if (RW > MW) {
          const MW = Math.sign(WW.z);
          WW.x *= -MW, WW.y *= MW, WW.z = RW, WW.w *= -MW
        } else {
          const RW = Math.sign(WW.w);
          WW.x *= RW, WW.y *= -RW, WW.z *= -RW, WW.w = MW
        }
      }
      return WW
    }

    function GM(WW) {
      WW.nzW(-WW.z, WW.w, WW.x, -WW.y)
    }

    function LM(WW, RW) {
      const MW = wW.vC.FromArrayToRef(RW.translation || [0, 0, 0], 0, wW.TmpVectors.vC[0]),
        CW = wW.Quaternion.FromArrayToRef(RW.rotation || [0, 0, 0, 1], 0, wW.TmpVectors.Quaternion[0]),
        zR = wW.Matrix.ComposeToRef(VM, CW, MW, wW.TmpVectors.Matrix[0]),
        AW = wW.vC.FromArrayToRef(WW.translation || [0, 0, 0], 0, wW.TmpVectors.vC[2]),
        bR = wW.Quaternion.FromArrayToRef(WW.rotation || [0, 0, 0, 1], 0, wW.TmpVectors.Quaternion[1]),
        yR = wW.Matrix.ComposeToRef(VM, bR, AW, wW.TmpVectors.Matrix[1]);
      zR.multiplyToRef(yR, yR), yR.decompose(void 0, CW, MW), MW.equalsWithEpsilon(UM, dM.c) ? delete RW.translation : RW.translation = MW.JNW(), CW.equalsWithEpsilon(EM, dM.c) ? delete RW.rotation : RW.rotation = CW.JNW(), RW.scale && delete RW.scale
    }

    function HM(WW, RW) {
      if (!(RW instanceof BW.d)) return !1;
      if (!(1 === RW.getChildren().length && 0 === WW.getChildren().length && WW.parent === RW)) return !1;
      const MW = WW.QRW(),
        wW = WW instanceof sM.f && !MW.useRightHandedSystem ? mw : VM;
      return !!RW.NA.equalsWithEpsilon(wW, dM.c) || (XW.b.Warn(`Cannot collapse node ${WW.name} into parent node ${RW.name} with modified scaling.`), !1)
    }

    function DM(WW) {
      if (WW instanceof Array) {
        const RW = new Float32Array(WW);
        return new Uint8Array(RW.buffer, RW.byteOffset, RW.byteLength)
      }
      return ArrayBuffer.isView(WW) ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : new Uint8Array(WW)
    }

    function qw(WW, RW) {
      for (const [MW, wW] of Object.entries(WW)) {
        const CW = RW[MW];
        (Array.isArray(wW) && Array.isArray(CW) && ZM(wW, CW) || wW === CW) && delete WW[MW]
      }
      return WW
    }

    function ZM(WW, RW) {
      return WW.length === RW.length && WW.every(((WW, MW) => WW === RW[MW]))
    }
    const SM = new Map([
      [Int8Array, (WW, RW, MW) => WW.setInt8(RW, MW)],
      [Uint8Array, (WW, RW, MW) => WW.setUint8(RW, MW)],
      [Uint8ClampedArray, (WW, RW, MW) => WW.setUint8(RW, MW)],
      [Int16Array, (WW, RW, MW) => WW.setInt16(RW, MW, !0)],
      [Uint16Array, (WW, RW, MW) => WW.setUint16(RW, MW, !0)],
      [Int32Array, (WW, RW, MW) => WW.setInt32(RW, MW, !0)],
      [Uint32Array, (WW, RW, MW) => WW.setUint32(RW, MW, !0)],
      [Float32Array, (WW, RW, MW) => WW.setFloat32(RW, MW, !0)],
      [Float64Array, (WW, RW, MW) => WW.setFloat64(RW, MW, !0)]
    ]);
    class Ww {
      writeTypedArray(WW) {
        this._checkGrowBuffer(WW.byteLength);
        const RW = SM.get(WW.constructor);
        for (let MW = 0; MW < WW.length; MW++) RW(this._dataView, this._byteOffset, WW[MW]), this._byteOffset += WW.BYTES_PER_ELEMENT
      }
      constructor(WW) {
        this._data = new Uint8Array(WW), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(WW) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, WW), this._byteOffset++
      }
      writeInt8(WW) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, WW), this._byteOffset++
      }
      writeInt16(WW) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, WW, !0), this._byteOffset += 2
      }
      writeUInt16(WW) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, WW, !0), this._byteOffset += 2
      }
      writeInt32(WW) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeUInt32(WW) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeFloat32(WW) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeFloat64(WW) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, WW, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(WW) {
        const RW = this.byteOffset + WW;
        if (RW > this._data.byteLength) {
          const WW = new Uint8Array(2 * RW);
          WW.set(this._data), this._data = WW, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Rw(WW) {
      return WW % 4 === 0 ? 4 : WW % 2 === 0 ? 2 : 1
    }
    class Mw {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(WW) {
        let RW = 0;
        this._bufferViewToData.forEach((WW => {
          RW += WW.byteLength
        }));
        const MW = new Ww(RW),
          wW = Array.from(this._bufferViewToData.keys()).sort(((WW, RW) => Rw(RW.byteLength) - Rw(WW.byteLength)));
        for (const CW of wW) {
          CW.byteOffset = MW.byteOffset, WW.push(CW);
          const RW = WW.length - 1,
            wW = this.getPropertiesWithBufferView(CW);
          for (const WW of wW) WW.bufferView = RW;
          MW.writeTypedArray(this._bufferViewToData.get(CW)), this._bufferViewToData.delete(CW)
        }
        return MW.getOutputData()
      }
      createBufferView(WW, RW) {
        const MW = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: WW.byteLength,
          byteStride: RW
        };
        return this._bufferViewToData.set(MW, WW), MW
      }
      createAccessor(WW, RW, MW, wW, CW, zR, AW) {
        this._verifyBufferView(WW);
        const bR = {
          bufferView: void 0,
          componentType: MW,
          count: wW,
          type: RW,
          min: zR?.min,
          max: zR?.max,
          normalized: AW,
          byteOffset: CW
        };
        return this.setBufferView(bR, WW), this._accessorToBufferView.set(bR, WW), bR
      }
      setBufferView(WW, RW) {
        this._verifyBufferView(RW);
        this.getPropertiesWithBufferView(RW).push(WW)
      }
      removeBufferView(WW) {
        const RW = this.getPropertiesWithBufferView(WW);
        for (const MW of RW) void 0 !== MW.bufferView && delete MW.bufferView;
        this._bufferViewToData.delete(WW), this._bufferViewToProperties.delete(WW), this._accessorToBufferView.forEach(((RW, MW) => {
          RW === WW && (void 0 !== MW.byteOffset && delete MW.byteOffset, this._accessorToBufferView.delete(MW))
        }))
      }
      getBufferView(WW) {
        const RW = this._accessorToBufferView.get(WW);
        return this._verifyBufferView(RW), RW
      }
      getPropertiesWithBufferView(WW) {
        return this._verifyBufferView(WW), this._bufferViewToProperties.set(WW, this._bufferViewToProperties.get(WW) ?? []), this._bufferViewToProperties.get(WW)
      }
      getData(WW) {
        return this._verifyBufferView(WW), this._bufferViewToData.get(WW)
      }
      _verifyBufferView(WW) {
        if (void 0 === WW || !this._bufferViewToData.has(WW)) throw new Error(`BufferView ${WW} not found in BufferManager.`)
      }
    }
    var ww = MW(37796);
    (0, ww.i)();
    var Cw = MW(38039);
    (0, Cw.f)();
    var zC = MW(37844),
      Aw = MW(38689);
    (0, Aw.f)();
    let bC = (() => {
      var WW;
      let RW, MW, wW = [],
        CW = [],
        zR = [],
        AW = [];
      return WW = class {
        get influence() {
          return this._influence
        }
        set influence(WW) {
          if (this._influence === WW) return;
          const RW = this._influence;
          this._influence = WW, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === RW || 0 === WW)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(WW) {
          this._animationPropertiesOverride = WW
        }
        constructor(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            bR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = WW, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new WM.c, this._onDataLayoutChanged = new WM.c, this.id = (0, rR.i)(this, wW, void 0), this.morphTargetManager = ((0, rR.i)(this, CW), (0, rR.i)(this, zR, null)), this._animationPropertiesOverride = ((0, rR.i)(this, AW), null), this.id = WW, this.morphTargetManager = bR, this._scene = MW || iR.d.LastCreatedScene, this.influence = RW, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        UtW(WW) {
          const RW = this.hasPositions;
          this._positions = WW, RW !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(WW) {
          const RW = this.hasNormals;
          this._normals = WW, RW !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(WW) {
          const RW = this.hasTangents;
          this._tangents = WW, RW !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(WW) {
          const RW = this.hasUVs;
          this._uvs = WW, RW !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(WW) {
          const RW = this.hasUV2s;
          this._uv2s = WW, RW !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(WW) {
          const RW = this.hasColors;
          this._colors = WW, RW !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const RW = fR.d.Clone((() => new WW(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return RW._positions = this._positions, RW._normals = this._normals, RW._tangents = this._tangents, RW._uvs = this._uvs, RW._uv2s = this._uv2s, RW._colors = this._colors, RW
        }
        serialize() {
          const WW = {};
          return WW.name = this.name, WW.influence = this.influence, null != this.id && (WW.id = this.id), WW.uniqueId = this.uniqueId, WW.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (WW.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (WW.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (WW.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (WW.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (WW.colors = Array.prototype.slice.call(this.getColors())), fR.d.AppendSerializedAnimations(this, WW), WW
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(RW, MW) {
          let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const CW = new WW(RW.name, RW.influence, MW, wW);
          if (CW.UtW(RW.positions), null != RW.id && (CW.id = RW.id), RW.normals && CW.setNormals(RW.normals), RW.tangents && CW.setTangents(RW.tangents), RW.uvs && CW.setUVs(RW.uvs), RW.uv2s && CW.setUV2s(RW.uv2s), RW.colors && CW.setColors(RW.colors), RW.animations) {
            for (let WW = 0; WW < RW.animations.length; WW++) {
              const MW = RW.animations[WW],
                wW = (0, vM.c)("BABYLON.Animation");
              wW && CW.animations.push(wW.Parse(MW))
            }
            RW.autoAnimate && MW && MW.beginAnimation(CW, RW.autoAnimateFrom, RW.autoAnimateTo, RW.autoAnimateLoop, RW.autoAnimateSpeed || 1)
          }
          return CW
        }
        static FromMesh(RW, MW, wW) {
          MW || (MW = RW.name);
          const CW = new WW(MW, wW, RW.QRW(), RW.morphTargetManager);
          return CW.UtW(RW.getVerticesData(mR.j.PositionKind)), RW.isVerticesDataPresent(mR.j.NormalKind) && CW.setNormals(RW.getVerticesData(mR.j.NormalKind)), RW.isVerticesDataPresent(mR.j.TangentKind) && CW.setTangents(RW.getVerticesData(mR.j.TangentKind)), RW.isVerticesDataPresent(mR.j.UVKind) && CW.setUVs(RW.getVerticesData(mR.j.UVKind)), RW.isVerticesDataPresent(mR.j.UV2Kind) && CW.setUV2s(RW.getVerticesData(mR.j.UV2Kind)), RW.isVerticesDataPresent(mR.j.ColorKind) && CW.setColors(RW.getVerticesData(mR.j.ColorKind)), CW
        }
      }, (() => {
        const bR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, cR.D)()], MW = [(0, cR.D)()], (0, rR.e)(null, null, RW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, RW) => {
              WW.id = RW
            }
          },
          metadata: bR
        }, wW, CW), (0, rR.e)(null, null, MW, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: WW => "morphTargetManager" in WW,
            get: WW => WW.morphTargetManager,
            set: (WW, RW) => {
              WW.morphTargetManager = RW
            }
          },
          metadata: bR
        }, zR, AW), bR && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bR
        })
      })(), WW
    })();
    var yC, Nw = MW(38751),
      ew = MW(37836);
    ! function(WW) {
      WW[WW.INTANGENT = 0] = "INTANGENT", WW[WW.OUTTANGENT = 1] = "OUTTANGENT"
    }(yC || (yC = {}));
    class Bw {
      static _IsTransformable(WW) {
        return WW && (WW instanceof BW.d || WW instanceof ww.e || WW instanceof ew.c)
      }
      static _CreateNodeAnimation(WW, RW, MW, wW, zR) {
        if (this._IsTransformable(WW)) {
          const AW = [],
            bR = [],
            yR = RW.getKeys(),
            NW = Bw._CalculateMinMaxKeyFrames(yR),
            eW = Bw._DeduceInterpolation(yR, MW, wW),
            BW = eW.interpolationType,
            tR = eW.shouldBakeAnimation;
          if (tR ? Bw._CreateBakedAnimation(WW, RW, MW, NW.min, NW.max, RW.framePerSecond, zR, AW, bR, NW, wW) : "LINEAR" === BW || "STEP" === BW ? Bw._CreateLinearOrStepAnimation(WW, RW, MW, AW, bR, wW) : "CUBICSPLINE" === BW ? Bw._CreateCubicSplineAnimation(WW, RW, MW, AW, bR, wW) : Bw._CreateBakedAnimation(WW, RW, MW, NW.min, NW.max, RW.framePerSecond, zR, AW, bR, NW, wW), AW.length && bR.length) {
            return {
              inputs: AW,
              outputs: bR,
              samplerInterpolation: BW,
              inputsMin: tR ? NW.min : CW.Tools.FloatRound(NW.min / RW.framePerSecond),
              inputsMax: tR ? NW.max : CW.Tools.FloatRound(NW.max / RW.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(WW) {
        let RW = null,
          MW = "VEC3",
          wW = !1;
        const zR = WW.targetProperty.split(".");
        switch (zR[0]) {
          case "NA":
            RW = "scale";
            break;
          case "position":
            RW = "translation";
            break;
          case "rotation":
            MW = "VEC4", RW = "rotation";
            break;
          case "rotationQuaternion":
            MW = "VEC4", wW = !0, RW = "rotation";
            break;
          case "influence":
            MW = "SCALAR", RW = "weights";
            break;
          default:
            CW.Tools.Error(`Unsupported animatable property ${zR[0]}`)
        }
        return RW ? {
          animationChannelTargetPath: RW,
          dataAccessorType: MW,
          useQuaternion: wW
        } : (CW.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        let BW;
        if (Bw._IsTransformable(WW) && WW.animations)
          for (const tR of WW.animations) {
            if (eW && !eW(tR)) continue;
            const CW = Bw._DeduceAnimationInfo(tR);
            CW && (BW = {
              name: tR.name,
              samplers: [],
              channels: []
            }, Bw._AddAnimation(`${tR.name}`, tR.hasRunningRuntimeAnimations ? RW : BW, WW, tR, CW.dataAccessorType, CW.animationChannelTargetPath, wW, zR, AW, bR, CW.useQuaternion, yR, NW), BW.samplers.length && BW.channels.length && MW.push(BW))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        let BW;
        if (WW instanceof Nw.c) {
          const CW = WW.morphTargetManager;
          if (CW)
            for (let tR = 0; tR < CW.numTargets; ++tR) {
              const TW = CW.getTarget(tR);
              for (const gR of TW.animations) {
                if (eW && !eW(gR)) continue;
                const TW = new Aw.e(`${gR.name}`, "influence", gR.framePerSecond, gR.dataType, gR.CWW, gR.enableBlending),
                  iR = [],
                  YW = gR.getKeys();
                for (let WW = 0; WW < YW.length; ++WW) {
                  const RW = YW[WW];
                  for (let WW = 0; WW < CW.numTargets; ++WW) WW == tR ? iR.push(RW) : iR.push({
                    frame: RW.frame,
                    value: 0
                  })
                }
                TW.setKeys(iR, !0);
                const JW = Bw._DeduceAnimationInfo(TW);
                JW && (BW = {
                  name: TW.name,
                  samplers: [],
                  channels: []
                }, Bw._AddAnimation(gR.name, gR.hasRunningRuntimeAnimations ? RW : BW, WW, TW, JW.dataAccessorType, JW.animationChannelTargetPath, wW, zR, AW, bR, JW.useQuaternion, yR, NW, CW.numTargets), BW.samplers.length && BW.channels.length && MW.push(BW))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
        let eW;
        if (WW.animationGroups) {
          const BW = WW.animationGroups;
          for (const tR of BW) {
            const BW = new Map,
              TW = new Map,
              gR = new Set,
              iR = tR.to - tR.from;
            eW = {
              name: tR.name,
              channels: [],
              samplers: []
            };
            for (let RW = 0; RW < tR.targetedAnimations.length; ++RW) {
              const NW = tR.targetedAnimations[RW],
                iR = NW.target,
                YW = NW.animation;
              if (yR && !yR(YW)) continue;
              const JW = bR.has(iR);
              if (this._IsTransformable(iR) || 1 === iR.length && this._IsTransformable(iR[0])) {
                const WW = Bw._DeduceAnimationInfo(NW.animation);
                if (WW) {
                  const RW = this._IsTransformable(iR) ? iR : this._IsTransformable(iR[0]) ? iR[0] : null;
                  RW && Bw._AddAnimation(`${YW.name}`, eW, RW, YW, WW.dataAccessorType, WW.animationChannelTargetPath, MW, wW, CW, zR, WW.useQuaternion, AW, JW)
                }
              } else if (iR instanceof bC || 1 === iR.length && iR[0] instanceof bC) {
                if (Bw._DeduceAnimationInfo(NW.animation)) {
                  const RW = iR instanceof bC ? iR : iR[0];
                  if (RW) {
                    const MW = WW.morphTargetManagers.find((WW => {
                      for (let MW = 0; MW < WW.numTargets; ++MW)
                        if (WW.getTarget(MW) === RW) return !0;
                      return !1
                    }));
                    if (MW) {
                      const wW = WW.meshes.find((WW => WW.morphTargetManager === MW));
                      wW && (BW.has(wW) || BW.set(wW, new Map), BW.get(wW)?.set(RW, YW), gR.add(wW), TW.set(wW, YW))
                    }
                  }
                }
              }
            }
            gR.forEach((WW => {
              const RW = WW.morphTargetManager;
              let bR = null;
              const yR = [],
                NW = TW.get(WW).getKeys(),
                gR = NW.length;
              for (let MW = 0; MW < gR; ++MW)
                for (let wW = 0; wW < RW.numTargets; ++wW) {
                  const CW = RW.getTarget(wW),
                    zR = BW.get(WW);
                  if (zR) {
                    const RW = zR.get(CW);
                    RW ? (bR || (bR = new Aw.e(`${tR.name}_${WW.name}_MorphWeightAnimation`, "influence", RW.framePerSecond, Aw.e.ANIMATIONTYPE_FLOAT, RW.CWW, RW.enableBlending)), yR.push(RW.getKeys()[MW])) : yR.push({
                      frame: tR.from + iR / gR * MW,
                      value: CW.influence,
                      inTangent: NW[0].inTangent ? 0 : void 0,
                      outTangent: NW[0].outTangent ? 0 : void 0
                    })
                  }
                }
              bR.setKeys(yR, !0);
              const YW = Bw._DeduceAnimationInfo(bR);
              YW && Bw._AddAnimation(`${tR.name}_${WW.name}_MorphWeightAnimation`, eW, WW, bR, YW.dataAccessorType, YW.animationChannelTargetPath, MW, wW, CW, zR, YW.useQuaternion, AW, !1, RW?.numTargets)
            })), eW.channels.length && eW.samplers.length && (NW?.set(tR, RW.length), RW.push(eW))
          }
        }
      }
      static _AddAnimation(WW, RW, MW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR) {
        const iR = Bw._CreateNodeAnimation(MW, CW, AW, BW, tR);
        let YW, JW, PW, IW, oW, lW;
        if (iR) {
          if (gR) {
            let WW, RW = 0;
            const MW = [];
            for (; iR.inputs.length > 0;) WW = iR.inputs.shift(), RW % gR == 0 && MW.push(WW), RW++;
            iR.inputs = MW
          }
          const WW = bR.get(MW),
            CW = new Float32Array(iR.inputs);
          YW = yR.createBufferView(CW), JW = yR.createAccessor(YW, "SCALAR", 5126, iR.inputs.length, void 0, {
            min: [iR.inputsMin],
            max: [iR.inputsMax]
          }), eW.push(JW), PW = eW.length - 1;
          const NW = new wW.Quaternion,
            BW = new wW.vC,
            tR = new wW.vC,
            FW = MW instanceof ww.e,
            fW = vw(zR),
            QW = new Float32Array(iR.outputs.length * fW);
          iR.outputs.forEach((function(WW, RW) {
            let MW = WW;
            switch (AW) {
              case "translation":
                TW && (wW.vC.FromArrayToRef(WW, 0, tR), OM(tR), tR.toArray(MW));
                break;
              case "rotation":
                4 === WW.length ? wW.Quaternion.FromArrayToRef(WW, 0, NW) : (MW = new Array(4), wW.vC.FromArrayToRef(WW, 0, BW), wW.Quaternion.FromEulerVectorToRef(BW, NW)), TW && (nM(NW), FW && GM(NW)), NW.toArray(MW)
            }
            QW.set(MW, RW * fW)
          })), YW = yR.createBufferView(QW), JW = yR.createAccessor(YW, zR, 5126, iR.outputs.length), eW.push(JW), IW = eW.length - 1, oW = {
            interpolation: iR.samplerInterpolation,
            input: PW,
            output: IW
          }, RW.samplers.push(oW), lW = {
            sampler: RW.samplers.length - 1,
            target: {
              node: WW,
              path: AW
            }
          }, RW.channels.push(lW)
        }
      }
      static _CreateBakedAnimation(WW, RW, MW, zR, AW, bR, yR, NW, eW, BW, tR) {
        let TW;
        const gR = wW.Quaternion.Identity();
        let iR, YW, JW, PW, IW, oW = null,
          lW = null;
        BW.min = CW.Tools.FloatRound(zR / bR);
        const FW = RW.getKeys();
        for (let wW = 0, fW = FW.length; wW < fW; ++wW) {
          if (YW = FW[wW], wW + 1 < fW)
            if (JW = FW[wW + 1], YW.value.equals && YW.value.equals(JW.value) || YW.value === JW.value) {
              if (0 !== wW) continue;
              IW = YW.frame
            } else IW = JW.frame;
          else {
            if (PW = FW[wW - 1], YW.value.equals && YW.value.equals(PW.value) || YW.value === PW.value) continue;
            IW = AW
          }
          if (IW)
            for (let wW = YW.frame; wW <= IW; wW += yR) {
              if (iR = CW.Tools.FloatRound(wW / bR), iR === oW) continue;
              oW = iR, lW = iR;
              const zR = {
                key: 0,
                repeatCount: 0,
                CWW: RW.CWW
              };
              TW = RW._interpolate(wW, zR), Bw._SetInterpolatedValue(WW, TW, iR, RW, MW, gR, NW, eW, tR)
            }
        }
        lW && (BW.max = lW)
      }
      static _ConvertFactorToVector3OrQuaternion(WW, RW, MW, zR, AW) {
        const bR = Bw._GetBasePositionRotationOrScale(RW, zR, AW),
          yR = MW.targetProperty.split("."),
          NW = yR ? yR[1] : "",
          eW = AW ? wW.Quaternion.FromArray(bR).normalize() : wW.vC.FromArray(bR);
        switch (NW) {
          case "x":
          case "y":
          case "z":
            eW[NW] = WW;
            break;
          case "w":
            eW.w = WW;
            break;
          default:
            CW.Tools.Error(`glTFAnimation: Unsupported component name "${NW}"!`)
        }
        return eW
      }
      static _SetInterpolatedValue(WW, RW, MW, CW, zR, AW, bR, yR, NW) {
        let eW;
        bR.push(MW), "weights" !== zR ? (CW.dataType === Aw.e.ANIMATIONTYPE_FLOAT && (RW = this._ConvertFactorToVector3OrQuaternion(RW, WW, CW, zR, NW)), "rotation" === zR ? (NW ? AW = RW : (eW = RW, wW.Quaternion.RotationYawPitchRollToRef(eW.y, eW.x, eW.z, AW)), yR.push(AW.JNW())) : (eW = RW, yR.push(eW.JNW()))) : yR.push([RW])
      }
      static _CreateLinearOrStepAnimation(WW, RW, MW, wW, CW, zR) {
        for (const AW of RW.getKeys()) wW.push(AW.frame / RW.framePerSecond), Bw._AddKeyframeValue(AW, RW, CW, MW, WW, zR)
      }
      static _CreateCubicSplineAnimation(WW, RW, MW, wW, CW, zR) {
        RW.getKeys().forEach((function(AW) {
          wW.push(AW.frame / RW.framePerSecond), Bw._AddSplineTangent(yC.INTANGENT, CW, MW, "CUBICSPLINE", AW, zR), Bw._AddKeyframeValue(AW, RW, CW, MW, WW, zR), Bw._AddSplineTangent(yC.OUTTANGENT, CW, MW, "CUBICSPLINE", AW, zR)
        }))
      }
      static _GetBasePositionRotationOrScale(WW, RW, MW) {
        let CW;
        if ("rotation" === RW)
          if (MW) {
            CW = (WW.rotationQuaternion ?? wW.Quaternion.Identity()).JNW()
          } else {
            CW = (WW.rotation ?? wW.vC.Zero()).JNW()
          }
        else if ("translation" === RW) {
          CW = (WW.position ?? wW.vC.Zero()).JNW()
        } else {
          CW = (WW.NA ?? wW.vC.One()).JNW()
        }
        return CW
      }
      static _AddKeyframeValue(WW, RW, MW, zR, AW, bR) {
        let yR;
        const NW = RW.dataType;
        if (NW === Aw.e.ANIMATIONTYPE_VECTOR3) {
          let RW = WW.value.JNW();
          if ("rotation" === zR) {
            const WW = wW.vC.FromArray(RW);
            RW = wW.Quaternion.RotationYawPitchRoll(WW.y, WW.x, WW.z).JNW()
          }
          MW.push(RW)
        } else if (NW === Aw.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === zR) MW.push([WW.value]);
          else if (yR = this._ConvertFactorToVector3OrQuaternion(WW.value, AW, RW, zR, bR), yR) {
            if ("rotation" === zR) {
              const WW = bR ? yR : wW.Quaternion.RotationYawPitchRoll(yR.y, yR.x, yR.z).normalize();
              MW.push(WW.JNW())
            }
            MW.push(yR.JNW())
          }
        } else NW === Aw.e.ANIMATIONTYPE_QUATERNION ? MW.push(WW.value.normalize().JNW()) : CW.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(WW, RW, MW) {
        let wW, CW, zR = !1;
        if ("rotation" === RW && !MW) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let AW = 0, bR = WW.length; AW < bR; ++AW)
          if (CW = WW[AW], CW.inTangent || CW.outTangent)
            if (wW) {
              if ("CUBICSPLINE" !== wW) {
                wW = "LINEAR", zR = !0;
                break
              }
            } else wW = "CUBICSPLINE";
        else if (wW) {
          if ("CUBICSPLINE" === wW || CW.interpolation && 1 === CW.interpolation && "STEP" !== wW) {
            wW = "LINEAR", zR = !0;
            break
          }
        } else wW = CW.interpolation && 1 === CW.interpolation ? "STEP" : "LINEAR";
        return wW || (wW = "LINEAR"), {
          interpolationType: wW,
          shouldBakeAnimation: zR
        }
      }
      static _AddSplineTangent(WW, RW, MW, CW, zR, AW) {
        let bR;
        const yR = WW === yC.INTANGENT ? zR.inTangent : zR.outTangent;
        if ("CUBICSPLINE" === CW) {
          if ("rotation" === MW)
            if (yR)
              if (AW) bR = yR.JNW();
              else {
                const WW = yR;
                bR = wW.Quaternion.RotationYawPitchRoll(WW.y, WW.x, WW.z).JNW()
              }
          else bR = [0, 0, 0, 0];
          else bR = "weights" === MW ? yR ? [yR] : [0] : yR ? yR.JNW() : [0, 0, 0];
          RW.push(bR)
        }
      }
      static _CalculateMinMaxKeyFrames(WW) {
        let RW = 1 / 0,
          MW = -1 / 0;
        return WW.forEach((function(WW) {
          RW = Math.min(RW, WW.frame), MW = Math.max(MW, WW.frame)
        })), {
          min: RW,
          max: MW
        }
      }
    }

    function tC(WW, RW, MW, zR, AW, bR) {
      const yR = {
          attributes: {},
          influence: WW.influence,
          name: WW.name
        },
        NW = RW.geometry;
      if (!NW) return CW.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), yR;
      const BW = bR ? -1 : 1,
        tR = wW.vC.Zero();
      let TW, gR;
      if (WW.hasPositions) {
        const zR = WW.getPositions(),
          bR = NW.getVerticesData(eW.h.PositionKind);
        if (bR) {
          const WW = new Float32Array(bR.length),
            RW = [1 / 0, 1 / 0, 1 / 0],
            CW = [-1 / 0, -1 / 0, -1 / 0];
          gR = bR.length / 3, TW = 0;
          for (let MW = TW; MW < gR; ++MW) {
            const AW = wW.vC.FromArray(bR, 3 * MW);
            wW.vC.FromArray(zR, 3 * MW).subtractToRef(AW, tR), tR.x *= BW, RW[0] = Math.min(RW[0], tR.x), CW[0] = Math.max(CW[0], tR.x), RW[1] = Math.min(RW[1], tR.y), CW[1] = Math.max(CW[1], tR.y), RW[2] = Math.min(RW[2], tR.z), CW[2] = Math.max(CW[2], tR.z), WW[3 * MW] = tR.x, WW[3 * MW + 1] = tR.y, WW[3 * MW + 2] = tR.z
          }
          const NW = MW.createBufferView(WW, 12),
            eW = MW.createAccessor(NW, "VEC3", 5126, zR.length / 3, 0, {
              min: RW,
              max: CW
            });
          AW.push(eW), yR.attributes.POSITION = AW.length - 1
        } else CW.Tools.Warn(`Morph target positions for mesh ${RW.name} were not exported. Mesh does not have position vertex data`)
      }
      if (WW.hasNormals) {
        const zR = WW.getNormals(),
          bR = NW.getVerticesData(eW.h.NormalKind);
        if (bR) {
          const WW = new Float32Array(bR.length);
          gR = bR.length / 3, TW = 0;
          for (let MW = TW; MW < gR; ++MW) {
            const RW = wW.vC.FromArray(bR, 3 * MW).normalize();
            wW.vC.FromArray(zR, 3 * MW).normalize().subtractToRef(RW, tR), WW[3 * MW] = tR.x * BW, WW[3 * MW + 1] = tR.y, WW[3 * MW + 2] = tR.z
          }
          const RW = MW.createBufferView(WW, 12),
            CW = MW.createAccessor(RW, "VEC3", 5126, zR.length / 3, 0);
          AW.push(CW), yR.attributes.NORMAL = AW.length - 1
        } else CW.Tools.Warn(`Morph target normals for mesh ${RW.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (WW.hasTangents) {
        const zR = WW.getTangents(),
          bR = NW.getVerticesData(eW.h.TangentKind);
        if (bR) {
          gR = bR.length / 4;
          const WW = new Float32Array(3 * gR);
          TW = 0;
          for (let MW = TW; MW < gR; ++MW) {
            const RW = wW.vC.FromArray(bR, 4 * MW);
            uM(RW);
            const CW = wW.vC.FromArray(zR, 3 * MW);
            uM(CW), CW.subtractToRef(RW, tR), WW[3 * MW] = tR.x * BW, WW[3 * MW + 1] = tR.y, WW[3 * MW + 2] = tR.z
          }
          const RW = MW.createBufferView(WW, 12),
            CW = MW.createAccessor(RW, "VEC3", 5126, gR, 0);
          AW.push(CW), yR.attributes.TANGENT = AW.length - 1
        } else CW.Tools.Warn(`Morph target tangents for mesh ${RW.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (WW.hasColors) {
        const zR = WW.getColors(),
          bR = NW.getVerticesData(eW.h.ColorKind),
          BW = NW.getVertexBuffer(eW.h.ColorKind);
        if (bR && BW) {
          const WW = BW.getSize();
          gR = bR.length / WW;
          const RW = new Float32Array(gR * WW);
          TW = 0;
          for (let MW = TW; MW < gR; ++MW)
            if (3 === WW) {
              const CW = wW.vC.FromArray(bR, MW * WW);
              wW.vC.FromArray(zR, MW * WW).subtractToRef(CW, tR), RW[3 * MW] = tR.x, RW[3 * MW + 1] = tR.y, RW[3 * MW + 2] = tR.z
            } else if (4 === WW) {
            const CW = new wW.Vector4,
              AW = wW.Vector4.FromArray(bR, MW * WW);
            wW.Vector4.FromArray(zR, MW * WW).subtractToRef(AW, CW), RW[4 * MW] = CW.x, RW[4 * MW + 1] = CW.y, RW[4 * MW + 2] = CW.z, RW[4 * MW + 3] = CW.w
          } else CW.Tools.Warn(`Unsupported number of components for color attribute: ${WW}`);
          const NW = MW.createBufferView(RW, 4 * WW),
            eW = MW.createAccessor(NW, 3 === WW ? "VEC3" : "VEC4", 5126, gR, 0);
          AW.push(eW), yR.attributes.COLOR_0 = AW.length - 1
        } else CW.Tools.Warn(`Morph target colors for mesh ${RW.name} were not exported. Mesh does not have colors vertex data`)
      }
      return yR
    }
    var Tw = MW(39055);
    class gC {}
    gC.DEFAULT_COLOR = nW.d.White(), gC.DEFAULT_WIDTH_ATTENUATED = 1, gC.DEFAULT_WIDTH = .1;
    var iC = MW(38685);
    class Yw {
      constructor(WW) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = WW
      }
      moveTo(WW, RW) {
        this._currentPath = new iC.g(WW, RW), this._tempPaths.push(this._currentPath)
      }
      lineTo(WW, RW) {
        this._currentPath.addLineTo(WW, RW)
      }
      quadraticCurveTo(WW, RW, MW, wW) {
        this._currentPath.addQuadraticCurveTo(WW, RW, MW, wW, this._resolution)
      }
      bezierCurveTo(WW, RW, MW, wW, CW, zR) {
        this._currentPath.addBezierCurveTo(WW, RW, MW, wW, CW, zR, this._resolution)
      }
      extractHoles() {
        for (const WW of this._tempPaths) WW.area() > 0 ? this._holes.push(WW) : this._paths.push(WW);
        if (!this._paths.length && this._holes.length) {
          const WW = this._holes;
          this._holes = this._paths, this._paths = WW
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

    function Jw(WW, RW, MW, wW, CW, zR) {
      const AW = zR.glyphs[WW] || zR.glyphs["?"];
      if (!AW) return null;
      const bR = new Yw(CW);
      if (AW.o) {
        const WW = AW.o.split(" ");
        for (let CW = 0, zR = WW.length; CW < zR;) {
          switch (WW[CW++]) {
            case "m": {
              const zR = parseInt(WW[CW++]) * RW + MW,
                AW = parseInt(WW[CW++]) * RW + wW;
              bR.moveTo(zR, AW);
              break
            }
            case "l": {
              const zR = parseInt(WW[CW++]) * RW + MW,
                AW = parseInt(WW[CW++]) * RW + wW;
              bR.lineTo(zR, AW);
              break
            }
            case "q": {
              const zR = parseInt(WW[CW++]) * RW + MW,
                AW = parseInt(WW[CW++]) * RW + wW,
                yR = parseInt(WW[CW++]) * RW + MW,
                NW = parseInt(WW[CW++]) * RW + wW;
              bR.quadraticCurveTo(yR, NW, zR, AW);
              break
            }
            case "b": {
              const zR = parseInt(WW[CW++]) * RW + MW,
                AW = parseInt(WW[CW++]) * RW + wW,
                yR = parseInt(WW[CW++]) * RW + MW,
                NW = parseInt(WW[CW++]) * RW + wW,
                eW = parseInt(WW[CW++]) * RW + MW,
                BW = parseInt(WW[CW++]) * RW + wW;
              bR.bezierCurveTo(yR, NW, eW, BW, zR, AW);
              break
            }
          }
        }
      }
      return bR.extractHoles(), {
        offsetX: AW.ha * RW,
        shapePath: bR
      }
    }

    function Pw(WW, RW, MW, wW) {
      const CW = Array.from(WW),
        zR = RW / wW.resolution,
        AW = (wW.boundingBox.yMax - wW.boundingBox.yMin + wW.underlineThickness) * zR,
        bR = [];
      let yR = 0,
        NW = 0;
      for (let eW = 0; eW < CW.length; eW++) {
        const WW = CW[eW];
        if ("\n" === WW) yR = 0, NW -= AW;
        else {
          const RW = Jw(WW, zR, yR, NW, MW, wW);
          RW && (yR += RW.offsetX, bR.push(RW.shapePath))
        }
      }
      return bR
    }
    class Iw {
      static ConvertPoints(WW, RW) {
        if (WW.length && Array.isArray(WW) && "number" === typeof WW[0]) return [WW];
        if (WW.length && Array.isArray(WW[0]) && "number" === typeof WW[0][0]) return WW;
        if (WW.length && !Array.isArray(WW[0]) && WW[0] instanceof VW.q) {
          const RW = [];
          for (let MW = 0; MW < WW.length; MW++) {
            const wW = WW[MW];
            RW.push(wW.x, wW.y, wW.z)
          }
          return [RW]
        }
        if (WW.length > 0 && Array.isArray(WW[0]) && WW[0].length > 0 && WW[0][0] instanceof VW.q) {
          const RW = [],
            MW = WW;
          for (const WW of MW) RW.push(WW.flatMap((WW => [WW.x, WW.y, WW.z])));
          return RW
        }
        if (WW instanceof Float32Array) {
          if (RW?.floatArrayStride) {
            const MW = [],
              wW = 3 * RW.floatArrayStride;
            for (let RW = 0; RW < WW.length; RW += wW) {
              const CW = new Array(wW);
              for (let MW = 0; MW < wW; MW++) CW[MW] = WW[RW + MW];
              MW.push(CW)
            }
            return MW
          }
          return [Array.from(WW)]
        }
        if (WW.length && WW[0] instanceof Float32Array) {
          const RW = [];
          for (const MW of WW) RW.push(Array.from(MW));
          return RW
        }
        return []
      }
      static OmitZeroLengthPredicate(WW, RW, MW) {
        const wW = [];
        return RW.subtract(WW).lengthSquared() > 0 && wW.push([WW, RW]), MW.subtract(RW).lengthSquared() > 0 && wW.push([RW, MW]), WW.subtract(MW).lengthSquared() > 0 && wW.push([MW, WW]), 0 === wW.length ? null : wW
      }
      static OmitDuplicatesPredicate(WW, RW, MW, wW) {
        const CW = [];
        return Iw._SearchInPoints(WW, RW, wW) || CW.push([WW, RW]), Iw._SearchInPoints(RW, MW, wW) || CW.push([RW, MW]), Iw._SearchInPoints(MW, WW, wW) || CW.push([MW, WW]), 0 === CW.length ? null : CW
      }
      static _SearchInPoints(WW, RW, MW) {
        for (const wW of MW)
          for (let MW = 0; MW < wW.length; MW++)
            if (wW[MW]?.equals(WW) && (wW[MW + 1]?.equals(RW) || wW[MW - 1]?.equals(RW))) return !0;
        return !1
      }
      static MeshesToLines(WW, RW) {
        const MW = [];
        for (let wW = 0; wW < WW.length; wW++) {
          const CW = WW[wW],
            zR = CW.getVerticesData(mR.j.PositionKind),
            AW = CW.ptW();
          if (zR && AW)
            for (let WW = 0, bR = 0; WW < AW.length; WW++) {
              const yR = 3 * AW[bR++],
                NW = 3 * AW[bR++],
                eW = 3 * AW[bR++],
                BW = new VW.q(zR[yR], zR[yR + 1], zR[yR + 2]),
                tR = new VW.q(zR[NW], zR[NW + 1], zR[NW + 2]),
                TW = new VW.q(zR[eW], zR[eW + 1], zR[eW + 2]);
              if (RW) {
                const bR = RW(BW, tR, TW, MW, WW, yR, CW, wW, zR, AW);
                if (bR)
                  for (const WW of bR) MW.push(WW)
              } else MW.push([BW, tR], [tR, TW], [TW, BW])
            }
        }
        return MW
      }
      static ToVector3Array(WW) {
        if (Array.isArray(WW[0])) {
          const RW = [],
            MW = WW;
          for (const WW of MW) {
            const MW = [];
            for (let RW = 0; RW < WW.length; RW += 3) MW.push(new VW.q(WW[RW], WW[RW + 1], WW[RW + 2]));
            RW.push(MW)
          }
          return RW
        }
        const RW = WW,
          MW = [];
        for (let wW = 0; wW < RW.length; wW += 3) MW.push(new VW.q(RW[wW], RW[wW + 1], RW[wW + 2]));
        return MW
      }
      static ToNumberArray(WW) {
        return WW.flatMap((WW => [WW.x, WW.y, WW.z]))
      }
      static GetPointsCountInfo(WW) {
        const RW = new Array(WW.length);
        let MW = 0;
        for (let wW = WW.length; wW--;) RW[wW] = WW[wW].length / 3, MW += RW[wW];
        return {
          total: MW,
          counts: RW
        }
      }
      static GetLineLength(WW) {
        if (0 === WW.length) return 0;
        let RW;
        RW = "number" === typeof WW[0] ? Iw.ToVector3Array(WW) : WW;
        const MW = VW.k.vC[0];
        let wW = 0;
        for (let CW = 0; CW < RW.length - 1; CW++) {
          const WW = RW[CW];
          wW += RW[CW + 1].subtractToRef(WW, MW).length()
        }
        return wW
      }
      static GetLineLengthArray(WW, RW) {
        const MW = RW ? new Float32Array(RW, 0, WW.length / 3) : new Float32Array(WW.length / 3);
        let wW = 0;
        for (let CW = 0, zR = WW.length / 3 - 1; CW < zR; CW++) {
          let RW = WW[3 * CW + 0],
            zR = WW[3 * CW + 1],
            AW = WW[3 * CW + 2];
          RW -= WW[3 * CW + 3], zR -= WW[3 * CW + 4], AW -= WW[3 * CW + 5];
          wW += Math.sqrt(RW * RW + zR * zR + AW * AW), MW[CW + 1] = wW
        }
        return MW
      }
      static SegmentizeSegmentByCount(WW, RW, MW) {
        const wW = [],
          CW = RW.subtract(WW),
          zR = VW.k.vC[0];
        zR.YzW(MW);
        const AW = VW.k.vC[1];
        CW.divideToRef(zR, AW);
        let bR = WW.clone();
        wW.push(bR);
        for (let yR = 0; yR < MW; yR++) bR = bR.clone(), wW.push(bR.addInPlace(AW));
        return wW
      }
      static SegmentizeLineBySegmentLength(WW, RW) {
        const MW = WW[0] instanceof VW.q ? Iw.GetLineSegments(WW) : "number" === typeof WW[0] ? Iw.GetLineSegments(Iw.ToVector3Array(WW)) : WW,
          wW = [];
        for (const CW of MW)
          if (CW.length > RW) {
            const WW = Iw.SegmentizeSegmentByCount(CW.point1, CW.point2, Math.ceil(CW.length / RW));
            for (const RW of WW) wW.push(RW)
          } else wW.push(CW.point1), wW.push(CW.point2);
        return wW
      }
      static SegmentizeLineBySegmentCount(WW, RW) {
        const MW = "number" === typeof WW[0] ? Iw.ToVector3Array(WW) : WW,
          wW = Iw.GetLineLength(MW) / RW;
        return Iw.SegmentizeLineBySegmentLength(MW, wW)
      }
      static GetLineSegments(WW) {
        const RW = [];
        for (let MW = 0; MW < WW.length - 1; MW++) {
          const wW = WW[MW],
            CW = WW[MW + 1],
            zR = CW.subtract(wW).length();
          RW.push({
            point1: wW,
            point2: CW,
            length: zR
          })
        }
        return RW
      }
      static GetMinMaxSegmentLength(WW) {
        const RW = Iw.GetLineSegments(WW).sort((WW => WW.length));
        return {
          min: RW[0].length,
          max: RW[RW.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const CW = RW * MW;
        let zR = 0,
          AW = 0;
        const bR = WW.length;
        for (let NW = 0; NW < bR; NW++) {
          if (CW <= zR + WW[NW].length) {
            AW = NW;
            break
          }
          zR += WW[NW].length
        }
        const yR = (CW - zR) / WW[AW].length;
        return WW[AW].point2.subtractToRef(WW[AW].point1, VW.k.vC[0]), VW.k.vC[0].scaleToRef(yR, VW.k.vC[1]), wW || VW.k.vC[1].addInPlace(WW[AW].point1), VW.k.vC[1].clone()
      }
      static GetCircleLinePoints(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / RW;
        const zR = [];
        for (let AW = 0; AW <= RW; AW++) zR.push(new VW.q(Math.cos(AW * CW) * WW, Math.sin(AW * CW) * wW, MW));
        return zR
      }
      static GetBezierLinePoints(WW, RW, MW, wW) {
        return iC.f.CreateQuadraticBezier(WW, RW, MW, wW).getPoints().flatMap((WW => [WW.x, WW.y, WW.z]))
      }
      static GetArrowCap(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [WW.clone(), WW.add(RW.multiplyByFloats(MW, MW, MW))],
          widths: [wW, CW, zR, AW]
        }
      }
      static GetPointsFromText(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const AW = [],
          bR = Pw(WW, RW, MW, wW);
        for (const yR of bR) {
          for (const WW of yR.paths) {
            const RW = [],
              MW = WW.getPoints();
            for (const WW of MW) RW.push(WW.x, WW.y, CW);
            AW.push(RW)
          }
          if (zR)
            for (const WW of yR.holes) {
              const RW = [],
                MW = WW.getPoints();
              for (const WW of MW) RW.push(WW.x, WW.y, CW);
              AW.push(RW)
            }
        }
        return AW
      }
      static Color3toRGBAUint8(WW) {
        const RW = new Uint8Array(4 * WW.length);
        for (let MW = 0, wW = 0; MW < WW.length; MW++) RW[wW++] = 255 * WW[MW].r, RW[wW++] = 255 * WW[MW].g, RW[wW++] = 255 * WW[MW].b, RW[wW++] = 255;
        return RW
      }
      static CreateColorsTexture(WW, RW, MW, wW) {
        const CW = wW.mC().getCaps().maxTextureSize ?? 1,
          zR = RW.length > CW ? CW : RW.length,
          AW = Math.ceil(RW.length / CW);
        AW > 1 && (RW = [...RW, ...Array(zR * AW - RW.length).fill(RW[0])]);
        const bR = Iw.Color3toRGBAUint8(RW),
          yR = new FW.b(bR, zR, AW, eM.c.TEXTUREFORMAT_RGBA, wW, !1, !0, MW);
        return yR.name = WW, yR
      }
      static PrepareEmptyColorsTexture(WW) {
        if (!gC.EmptyColorsTexture) {
          const RW = new Uint8Array(4);
          gC.EmptyColorsTexture = new FW.b(RW, 1, 1, eM.c.TEXTUREFORMAT_RGBA, WW, !1, !1, FW.b.NEAREST_NEAREST), gC.EmptyColorsTexture.name = "grlEmptyColorsTexture", gC.EmptyColorsTexture.rMW.addOnce((() => {
            gC.EmptyColorsTexture = null
          }))
        }
        return gC.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        gC.EmptyColorsTexture?.dispose(), gC.EmptyColorsTexture = null
      }
      static BooleanToNumber(WW) {
        return WW ? 1 : 0
      }
    }
    class ow extends xR.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class lw extends vR.c {
      isCompatible(WW) {
        return !0
      }
      constructor(WW, RW, MW) {
        MW = MW || {
          color: gC.DEFAULT_COLOR
        };
        const wW = new ow;
        wW.GREASED_LINE_HAS_COLOR = !!MW.color && !MW.useColors, wW.GREASED_LINE_SIZE_ATTENUATION = MW.sizeAttenuation ?? !1, wW.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === MW.colorDistributionType, wW.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (RW ?? WW.QRW()).useRightHandedSystem, wW.GREASED_LINE_CAMERA_FACING = MW.cameraFacing ?? !0, super(WW, lw.GREASED_LINE_MATERIAL_NAME, 200, wW, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = MW?.forceGLSL || lw.ForceGLSL, this._scene = RW ?? WW.QRW(), this._engine = this._scene.mC(), this._cameraFacing = MW.cameraFacing ?? !0, this.visibility = MW.visibility ?? 1, this.useDash = MW.useDash ?? !1, this.dashRatio = MW.dashRatio ?? .5, this.dashOffset = MW.dashOffset ?? 0, this.width = MW.width ? MW.width : MW.sizeAttenuation ? gC.DEFAULT_WIDTH_ATTENUATED : gC.DEFAULT_WIDTH, this._sizeAttenuation = MW.sizeAttenuation ?? !1, this.colorMode = MW.colorMode ?? 0, this._color = MW.color ?? null, this.useColors = MW.useColors ?? !1, this._colorsDistributionType = MW.colorDistributionType ?? 0, this.colorsSampling = MW.colorsSampling ?? FW.b.NEAREST_NEAREST, this._colors = MW.colors ?? null, this.dashCount = MW.dashCount ?? 1, this.resolution = MW.resolution ?? new VW.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), MW.colorsTexture ? this.colorsTexture = MW.colorsTexture : this._colors ? this.colorsTexture = Iw.CreateColorsTexture(`${WW.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? gC.DEFAULT_COLOR, Iw.PrepareEmptyColorsTexture(this._scene)), this._engine.rMW.add((() => {
          Iw.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(WW) {
        WW.push("grl_offsets"), WW.push("grl_widths"), WW.push("grl_colorPointers"), WW.push("grl_counters"), this._cameraFacing ? (WW.push("grl_previousAndSide"), WW.push("grl_nextAndCounters")) : WW.push("grl_slopes")
      }
      getSamplers(WW) {
        WW.push("grl_colors")
      }
      getActiveTextures(WW) {
        this.colorsTexture && WW.push(this.colorsTexture)
      }
      getUniforms() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const RW = [{
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
        return this._cameraFacing && RW.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === WW && RW.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: RW,
          vertex: this._cameraFacing && this._isGLSL(WW) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(WW) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(WW) {
        if (this._cameraFacing) {
          WW.aAW("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || WW.aAW("viewProjection", this._scene.getTransformMatrix());
          const RW = VW.k.Vector4[0];
          RW.x = this._aspect, RW.y = this._resolution.x, RW.z = this._resolution.y, RW.w = this.width, WW.updateVector4("grl_aspect_resolution_lineWidth", RW)
        }
        const RW = VW.k.Vector4[0];
        RW.x = Iw.BooleanToNumber(this.useDash), RW.y = this._dashArray, RW.z = this.dashOffset, RW.w = this.dashRatio, WW.updateVector4("grl_dashOptions", RW);
        const MW = VW.k.Vector4[1];
        MW.x = this.colorMode, MW.y = this.visibility, MW.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, MW.w = Iw.BooleanToNumber(this.useColors), WW.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", MW), this._color && WW.updateColor3("grl_singleColor", this._color);
        const wW = this.colorsTexture ?? gC.EmptyColorsTexture;
        WW.setTexture("grl_colors", wW), WW.updateFloat2("grl_textureSize", wW?.getSize().width ?? 1, wW?.getSize().height ?? 1)
      }
      prepareDefines(WW, RW, MW) {
        WW.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, WW.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, WW.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, WW.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = RW.useRightHandedSystem, WW.GREASED_LINE_CAMERA_FACING = this._cameraFacing, WW.GREASED_LINE_USE_OFFSETS = !!MW.offsets
      }
      getClassName() {
        return lw.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(RW) ? function(WW, RW) {
          if ("vertex" === WW) {
            const WW = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return RW && (WW["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), WW
          }
          return "fragment" === WW ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(WW, this._cameraFacing) : function(WW, RW) {
          if ("vertex" === WW) {
            const WW = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return RW && (WW["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), WW
          }
          return "fragment" === WW ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(WW, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(WW) {
        this.setColors(WW)
      }
      setColors(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this._colors?.length ?? 0;
        if (this._colors = WW, null !== WW && 0 !== WW.length) {
          if (!RW || MW)
            if (this.colorsTexture && wW === WW.length && !MW) {
              const RW = Iw.Color3toRGBAUint8(WW);
              this.colorsTexture.update(RW)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Iw.CreateColorsTexture(`${this._material.name}-colors-texture`, WW, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(WW) {
        this._dashCount = WW, this._dashArray = 1 / WW
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(WW) {
        this._sizeAttenuation = WW, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(WW) {
        this.setColor(WW)
      }
      setColor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== WW || null !== this._color && null === WW ? (this._color = WW, RW || this.markAllDefinesAsDirty()) : this._color = WW
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(WW) {
        this._colorsDistributionType = WW, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(WW) {
        this._aspect = WW.x / WW.y, this._resolution = WW
      }
      serialize() {
        const WW = super.serialize(),
          RW = {
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
        return this._colors && (RW.colors = this._colors), this._color && (RW.color = this._color), WW.greasedLineMaterialOptions = RW, WW
      }
      parse(WW, RW, MW) {
        super.parse(WW, RW, MW);
        const wW = WW.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), wW.color && this.setColor(wW.color, !0), wW.colorDistributionType && (this.colorsDistributionType = wW.colorDistributionType), wW.colors && (this.colors = wW.colors), wW.colorsSampling && (this.colorsSampling = wW.colorsSampling), wW.colorMode && (this.colorMode = wW.colorMode), wW.useColors && (this.useColors = wW.useColors), wW.visibility && (this.visibility = wW.visibility), wW.useDash && (this.useDash = wW.useDash), wW.dashCount && (this.dashCount = wW.dashCount), wW.dashRatio && (this.dashRatio = wW.dashRatio), wW.dashOffset && (this.dashOffset = wW.dashOffset), wW.width && (this.width = wW.width), wW.sizeAttenuation && (this.sizeAttenuation = wW.sizeAttenuation), wW.resolution && (this.resolution = wW.resolution), this.colors ? this.colorsTexture = Iw.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, RW) : Iw.PrepareEmptyColorsTexture(RW), this.markAllDefinesAsDirty()
      }
      copyTo(WW) {
        const RW = WW;
        RW.colorsTexture?.dispose(), this._colors && (RW.colorsTexture = Iw.CreateColorsTexture(`${RW._material.name}-colors-texture`, this._colors, RW.colorsSampling, this._scene)), RW.setColor(this.color, !0), RW.colorsDistributionType = this.colorsDistributionType, RW.colorsSampling = this.colorsSampling, RW.colorMode = this.colorMode, RW.useColors = this.useColors, RW.visibility = this.visibility, RW.useDash = this.useDash, RW.dashCount = this.dashCount, RW.dashRatio = this.dashRatio, RW.dashOffset = this.dashOffset, RW.width = this.width, RW.sizeAttenuation = this.sizeAttenuation, RW.resolution = this.resolution, RW.markAllDefinesAsDirty()
      }
      _isGLSL(WW) {
        return 0 === WW || this._forceGLSL
      }
    }
    lw.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", lw.ForceGLSL = !1;
    var Fw = MW(37993),
      fw = MW(38003),
      Qw = MW(36716),
      rC = MW(38062),
      cC = MW(37428);
    class Xw extends rC.r {
      constructor(WW, RW, wW) {
        const CW = RW.mC(),
          zR = CW.isWebGPU && !(wW.forceGLSL || Xw.ForceGLSL),
          AW = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        RW.useRightHandedSystem && AW.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const bR = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        wW.cameraFacing ? (AW.push("GREASED_LINE_CAMERA_FACING"), bR.push("grl_previousAndSide", "grl_nextAndCounters")) : (bR.push("grl_slopes"), bR.push("grl_counters"));
        const yR = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (zR || yR.push("world", "viewProjection", "view", "projection"), super(WW, RW, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: zR ? ["Scene", "Mesh"] : void 0,
            attributes: bR,
            uniforms: yR,
            samplers: zR ? [] : ["grlColors"],
            defines: AW,
            extraInitializationsAsync: async () => {
              zR ? await Promise.all([MW.e(304).then((() => MW(59264))), MW.e(363).then((() => MW(59270)))]) : await Promise.all([MW.e(297).then((() => MW(59273))), MW.e(364).then((() => MW(59282)))])
            },
            shaderLanguage: zR ? 1 : 0
          }), this._color = nW.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, wW = wW || {
            color: gC.DEFAULT_COLOR
          }, this.visibility = wW.visibility ?? 1, this.useDash = wW.useDash ?? !1, this.dashRatio = wW.dashRatio ?? .5, this.dashOffset = wW.dashOffset ?? 0, this.dashCount = wW.dashCount ?? 1, this.width = wW.width ? wW.width : wW.sizeAttenuation && wW.cameraFacing ? gC.DEFAULT_WIDTH_ATTENUATED : gC.DEFAULT_WIDTH, this.sizeAttenuation = wW.sizeAttenuation ?? !1, this.color = wW.color ?? nW.d.White(), this.useColors = wW.useColors ?? !1, this.colorsDistributionType = wW.colorDistributionType ?? 0, this.colorsSampling = wW.colorsSampling ?? FW.b.NEAREST_NEAREST, this.colorMode = wW.colorMode ?? 0, this._colors = wW.colors ?? null, this._cameraFacing = wW.cameraFacing ?? !0, this.resolution = wW.resolution ?? new VW.n(CW.getRenderWidth(), CW.getRenderHeight()), wW.colorsTexture ? this.colorsTexture = wW.colorsTexture : this._colors ? this.colorsTexture = Iw.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, RW) : (this._color = this._color ?? gC.DEFAULT_COLOR, this.colorsTexture = Iw.PrepareEmptyColorsTexture(RW)), zR) {
          const WW = new cC.e;
          WW.setParameters(), WW.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", WW)
        }
        CW.rMW.add((() => {
          Iw.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== gC.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new VW.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(WW) {
        this.setColors(WW)
      }
      setColors(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = this._colors?.length ?? 0;
        if (this._colors = WW, null !== WW && 0 !== WW.length) {
          if (!RW || MW)
            if (this._colorsTexture && wW === WW.length && !MW) {
              const RW = Iw.Color3toRGBAUint8(WW);
              this._colorsTexture.update(RW)
            } else this._colorsTexture && this._colorsTexture !== gC.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Iw.CreateColorsTexture(`${this.name}-colors-texture`, WW, this.colorsSampling, this.QRW())
        } else {
          this._colorsTexture && this._colorsTexture !== gC.EmptyColorsTexture && this._colorsTexture.dispose();
          const WW = this.QRW();
          WW && (this.colorsTexture = Iw.PrepareEmptyColorsTexture(WW))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(WW) {
        this._colorsTexture = WW, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(WW) {
        this._width = WW, this.setFloat("grlWidth", WW)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(WW) {
        this._useColors = WW, this.setFloat("grlUseColors", Iw.BooleanToNumber(WW))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(WW) {
        this._colorsSampling = WW
      }
      get visibility() {
        return this._visibility
      }
      set visibility(WW) {
        this._visibility = WW, this.setFloat("grlVisibility", WW)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(WW) {
        this._useDash = WW, this.setFloat("grlUseDash", Iw.BooleanToNumber(WW))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(WW) {
        this._dashOffset = WW, this.setFloat("grlDashOffset", WW)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(WW) {
        this._dashRatio = WW, this.setFloat("grlDashRatio", WW)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(WW) {
        this._dashCount = WW, this._dashArray = 1 / WW, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(WW) {
        this._sizeAttenuation = WW, this.setFloat("grlSizeAttenuation", Iw.BooleanToNumber(WW))
      }
      get color() {
        return this._color
      }
      set color(WW) {
        this.setColor(WW)
      }
      setColor(WW) {
        WW = WW ?? gC.DEFAULT_COLOR, this._color = WW, this.setColor3("grlColor", WW)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(WW) {
        this._colorsDistributionType = WW, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(WW) {
        this._colorMode = WW, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(WW) {
        this._resolution = WW, this.setVector2("grlResolution", WW), this.setFloat("grlAspect", WW.x / WW.y)
      }
      serialize() {
        const WW = super.serialize(),
          RW = {
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
        return this._colors && (RW.colors = this._colors), WW.greasedLineMaterialOptions = RW, WW
      }
      parse(WW, RW, MW) {
        const wW = WW.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), wW.color && (this.color = wW.color), wW.colorDistributionType && (this.colorsDistributionType = wW.colorDistributionType), wW.colorsSampling && (this.colorsSampling = wW.colorsSampling), wW.colorMode && (this.colorMode = wW.colorMode), wW.useColors && (this.useColors = wW.useColors), wW.visibility && (this.visibility = wW.visibility), wW.useDash && (this.useDash = wW.useDash), wW.dashCount && (this.dashCount = wW.dashCount), wW.dashRatio && (this.dashRatio = wW.dashRatio), wW.dashOffset && (this.dashOffset = wW.dashOffset), wW.width && (this.width = wW.width), wW.sizeAttenuation && (this.sizeAttenuation = wW.sizeAttenuation), wW.resolution && (this.resolution = wW.resolution), wW.colors ? this.colorsTexture = Iw.CreateColorsTexture(`${this.name}-colors-texture`, wW.colors, this.colorsSampling, this.QRW()) : this.colorsTexture = Iw.PrepareEmptyColorsTexture(RW), this._cameraFacing = wW.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var jC, kC, aC;
    Xw.ForceGLSL = !1,
      function(WW) {
        WW[WW.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", WW[WW.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(jC || (jC = {})),
      function(WW) {
        WW[WW.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", WW[WW.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", WW[WW.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(kC || (kC = {})),
      function(WW) {
        WW[WW.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", WW[WW.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", WW[WW.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", WW[WW.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", WW[WW.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(aC || (aC = {}));
    class sw extends Fw.b {
      constructor(WW, RW, MW) {
        super(WW, RW, null, null, !1, !1), this.name = WW, this._options = MW, this._lazy = !1, this._updatable = !1, this._engine = RW.mC(), this._lazy = MW.lazy ?? !1, this._updatable = MW.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = MW.colorPointers ?? [], this._widths = MW.widths ?? new Array(MW.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(WW) {
        let RW = 0;
        for (const wW of this._points) RW += wW.length;
        const MW = RW / 3 * 2 - this._widths.length;
        for (let wW = 0; wW < MW; wW++) this._widths.push(WW)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.uw && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(WW, RW) {
        for (const MW of WW) this._points.push(MW);
        this._lazy || this.setPoints(this._points, RW)
      }
      dispose(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(WW, RW)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(WW) {
        this._uvs = WW instanceof Float32Array ? WW : new Float32Array(WW), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(WW) {
        this.material instanceof Xw && this.material.setDefine("GREASED_LINE_USE_OFFSETS", WW?.length > 0), this._offsets = WW, this._offsetsBuffer ? this._offsetsBuffer.update(WW) : this._createOffsetsBuffer(WW)
      }
      get widths() {
        return this._widths
      }
      set widths(WW) {
        this._widths = WW, this._lazy || this._widthsBuffer && this._widthsBuffer.update(WW)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(WW) {
        this._colorPointers = WW, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(WW)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof Xw) return this.material;
        const WW = this.material?.pluginManager?.getPlugin(lw.GREASED_LINE_MATERIAL_NAME);
        return WW || void 0
      }
      get points() {
        const WW = [];
        return Qw.c.DeepCopy(this._points, WW), WW
      }
      setPoints(WW, RW) {
        this._points = Iw.ConvertPoints(WW, RW?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), RW?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, RW)
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
      serialize(WW) {
        super.serialize(WW), WW.type = this.getClassName(), WW.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new fw.c;
        return RW.positions = this._vertexPositions, RW.indices = this._indices, RW.uvs = this._uvs, WW && (RW.normals = [], fw.c.ComputeNormals(this._vertexPositions, this._indices, RW.normals)), RW.applyToMesh(this, this._options.updatable), RW
      }
      _createOffsetsBuffer(WW) {
        const RW = this._scene.mC(),
          MW = new mR.c(RW, WW, this._updatable, 3);
        this.setVerticesBuffer(MW.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = MW
      }
    }
    class dw {
      constructor(WW, RW) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = WW, this.wasAddedByNoopNode = RW
      }
      getIndicesAccessor(WW, RW, MW, wW, CW) {
        return this._indicesAccessorMap.get(WW)?.get(RW)?.get(MW)?.get(wW)?.get(CW)
      }
      setIndicesAccessor(WW, RW, MW, wW, CW, zR) {
        let AW = this._indicesAccessorMap.get(WW);
        AW || (AW = new Map, this._indicesAccessorMap.set(WW, AW));
        let bR = AW.get(RW);
        bR || (bR = new Map, AW.set(RW, bR));
        let yR = bR.get(MW);
        yR || (yR = new Map, bR.set(MW, yR));
        let NW = yR.get(wW);
        NW || (NW = new Map, yR.set(wW, NW)), NW.set(CW, zR)
      }
      pushExportedNode(WW) {
        this._exportedNodes.has(WW) || this._exportedNodes.add(WW)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(WW) {
        return this._vertexBufferViewMap.get(WW)
      }
      setVertexBufferView(WW, RW) {
        this._vertexBufferViewMap.set(WW, RW)
      }
      setRemappedBufferView(WW, RW, MW) {
        this._remappedBufferView.set(WW, new Map), this._remappedBufferView.get(WW).set(RW, MW)
      }
      getRemappedBufferView(WW, RW) {
        return this._remappedBufferView.get(WW)?.get(RW)
      }
      getVertexAccessor(WW, RW, MW) {
        return this._vertexAccessorMap.get(WW)?.get(RW)?.get(MW)
      }
      setVertexAccessor(WW, RW, MW, wW) {
        let CW = this._vertexAccessorMap.get(WW);
        CW || (CW = new Map, this._vertexAccessorMap.set(WW, CW));
        let zR = CW.get(RW);
        zR || (zR = new Map, CW.set(RW, zR)), zR.set(MW, wW)
      }
      hasVertexColorAlpha(WW) {
        return this._vertexMapColorAlpha.get(WW) || !1
      }
      setHasVertexColorAlpha(WW, RW) {
        return this._vertexMapColorAlpha.set(WW, RW)
      }
      getMesh(WW) {
        return this._meshMap.get(WW)
      }
      setMesh(WW, RW) {
        this._meshMap.set(WW, RW)
      }
      bindMorphDataToMesh(WW, RW) {
        const MW = this._meshMorphTargetMap.get(WW) || [];
        this._meshMorphTargetMap.set(WW, MW), -1 === MW.indexOf(RW) && MW.push(RW)
      }
      getMorphTargetsFromMesh(WW) {
        return this._meshMorphTargetMap.get(WW)
      }
    }
    class pw {
      _ApplyExtension(WW, RW, MW, wW) {
        if (MW >= RW.length) return Promise.resolve(WW);
        const CW = wW(RW[MW], WW);
        return CW ? CW.then((async WW => WW ? await this._ApplyExtension(WW, RW, MW + 1, wW) : null)) : this._ApplyExtension(WW, RW, MW + 1, wW)
      }
      _ApplyExtensions(WW, RW) {
        const MW = [];
        for (const wW of pw._ExtensionNames) MW.push(this._extensions[wW]);
        return this._ApplyExtension(WW, MW, 0, RW)
      }
      _extensionsPostExportNodeAsync(WW, RW, MW, wW, CW) {
        return this._ApplyExtensions(RW, ((RW, zR) => RW.postExportNodeAsync && RW.postExportNodeAsync(WW, zR, MW, wW, CW, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(WW, RW, MW) {
        return this._ApplyExtensions(RW, ((RW, wW) => RW.postExportMaterialAsync && RW.postExportMaterialAsync(WW, wW, MW)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        return await Promise.all(pw._ExtensionNames.map((async CW => {
          const zR = this._extensions[CW];
          if (zR.postExportMaterialAdditionalTexturesAsync) {
            const CW = await zR.postExportMaterialAdditionalTexturesAsync(WW, RW, MW);
            wW.push(...CW)
          }
        }))), wW
      }
      _extensionsPostExportTextures(WW, RW, MW) {
        for (const wW of pw._ExtensionNames) {
          const CW = this._extensions[wW];
          CW.postExportTexture && CW.postExportTexture(WW, RW, MW)
        }
      }
      _extensionsPostExportMeshPrimitive(WW) {
        for (const RW of pw._ExtensionNames) {
          const MW = this._extensions[RW];
          MW.postExportMeshPrimitive && MW.postExportMeshPrimitive(WW, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const WW of pw._ExtensionNames) {
          const RW = this._extensions[WW];
          RW.preGenerateBinaryAsync && await RW.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(WW) {
        for (const RW of pw._ExtensionNames) {
          const MW = this._extensions[RW];
          MW.enabled && WW(MW)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((WW => {
          var RW, MW, wW;
          WW.wasUsed && ((RW = this._glTF).extensionsUsed || (RW.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(WW.name) && this._glTF.extensionsUsed.push(WW.name), WW.required && ((MW = this._glTF).extensionsRequired || (MW.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(WW.name) && this._glTF.extensionsRequired.push(WW.name)), (wW = this._glTF).extensions || (wW.extensions = {}), WW.onExporting && WW.onExporting())
        }))
      }
      _loadExtensions() {
        for (const WW of pw._ExtensionNames) {
          const RW = pw._ExtensionFactories[WW](this);
          this._extensions[WW] = RW
        }
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iR.d.LastCreatedScene,
          RW = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${gR.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new kw(this), this._extensions = {}, this._bufferManager = new Mw, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !WW) throw new Error("No scene available to export");
        this._babylonScene = WW, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: WW => WW?.CNW?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...RW
        }, this._loadExtensions()
      }
      dispose() {
        for (const WW in this._extensions) {
          this._extensions[WW].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        pw.UnregisterExtension(WW) && CW.Tools.Warn(`Extension with the name ${WW} already exists`), pw._ExtensionFactories[WW] = RW;
        const wW = MW ?? 0;
        pw._ExtensionOrders[WW] = wW;
        let zR = pw._ExtensionNames.length;
        for (let CW = 0; CW < pw._ExtensionNames.length; CW++) {
          const WW = pw._ExtensionNames[CW];
          if (wW < pw._ExtensionOrders[WW]) {
            zR = CW;
            break
          }
        }
        pw._ExtensionNames.splice(zR, 0, WW)
      }
      static UnregisterExtension(WW) {
        if (!pw._ExtensionFactories[WW]) return !1;
        delete pw._ExtensionFactories[WW], delete pw._ExtensionOrders[WW];
        const RW = pw._ExtensionNames.indexOf(WW);
        return -1 !== RW && pw._ExtensionNames.splice(RW, 1), !0
      }
      _generateJSON(WW, RW, MW) {
        const wW = {
          byteLength: WW
        };
        return wW.byteLength && (this._glTF.buffers = [wW]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.LC = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (wW.uri = RW + ".bin"), MW ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(WW) {
        const RW = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const MW = this._generateJSON(RW.byteLength, WW, !0),
          wW = new Blob([RW], {
            type: "application/octet-stream"
          }),
          CW = WW + ".gltf",
          zR = WW + ".bin",
          AW = new NW;
        if (AW.files[CW] = MW, AW.files[zR] = wW, this._imageData)
          for (const bR in this._imageData) AW.files[bR] = this._imageData[bR];
        return AW
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(WW) {
        const RW = WW % 4;
        return 0 === RW ? RW : 4 - RW
      }
      async generateGLBAsync(WW) {
        this._shouldUseGlb = !0;
        const RW = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const MW = this._generateJSON(RW.byteLength),
          wW = WW + ".glb";
        let CW, zR = MW.length;
        if ("undefined" !== typeof TextEncoder) {
          CW = (new TextEncoder).encode(MW), zR = CW.length
        }
        const AW = this._getPadding(zR),
          bR = this._getPadding(RW.byteLength),
          yR = 28 + zR + AW + RW.byteLength + bR,
          eW = new Ww(yR);
        if (eW.writeUInt32(1179937895), eW.writeUInt32(2), eW.writeUInt32(yR), eW.writeUInt32(zR + AW), eW.writeUInt32(1313821514), CW) eW.writeTypedArray(CW);
        else {
          const WW = "_".charCodeAt(0);
          for (let RW = 0; RW < zR; ++RW) {
            const wW = MW.charCodeAt(RW);
            wW != MW.codePointAt(RW) ? eW.writeUInt8(WW) : eW.writeUInt8(wW)
          }
        }
        for (let NW = 0; NW < AW; ++NW) eW.writeUInt8(32);
        eW.writeUInt32(RW.byteLength + bR), eW.writeUInt32(5130562), eW.writeTypedArray(RW);
        for (let NW = 0; NW < bR; ++NW) eW.writeUInt8(0);
        const BW = new NW;
        return BW.files[wW] = new Blob([eW.getOutputData()], {
          type: "application/octet-stream"
        }), BW
      }
      _setNodeTransformation(WW, RW, MW) {
        if (RW.getPivotPoint().equalsWithEpsilon(UM, dM.c) || CW.Tools.Warn("Pivot points are not supported in the glTF serializer"), !RW.position.equalsWithEpsilon(UM, dM.c)) {
          const CW = wW.TmpVectors.vC[0].hyW(RW.position);
          MW && OM(CW), WW.translation = CW.JNW()
        }
        RW.NA.equalsWithEpsilon(VM, dM.c) || (WW.scale = RW.NA.JNW());
        const zR = RW.rotationQuaternion?.clone() || wW.Quaternion.FromEulerAngles(RW.rotation.x, RW.rotation.y, RW.rotation.z);
        zR.equalsWithEpsilon(EM, dM.c) || (MW && nM(zR), WW.rotation = zR.normalize().JNW())
      }
      _setCameraTransformation(WW, RW, MW) {
        const CW = wW.TmpVectors.vC[0],
          zR = wW.TmpVectors.Quaternion[0],
          AW = RW.getWorldMatrix();
        if (RW.parent) {
          const WW = RW.parent.getWorldMatrix().invertToRef(wW.TmpVectors.Matrix[0]);
          AW.multiplyToRef(WW, wW.TmpVectors.Matrix[1]).decompose(void 0, zR, CW)
        } else AW.decompose(void 0, zR, CW);
        CW.equalsWithEpsilon(UM, dM.c) || (MW && OM(CW), WW.translation = CW.JNW()), MW && nM(zR), this._babylonScene.useRightHandedSystem || GM(zR), zR.equalsWithEpsilon(EM, dM.c) || (WW.rotation = zR.JNW())
      }
      _listAvailableCameras() {
        for (const WW of this._babylonScene.cameras) {
          const RW = {
            type: WW.mode === ww.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (WW.name && (RW.name = WW.name), "perspective" === RW.type) RW.perspective = {
            aspectRatio: WW.mC().getAspectRatio(WW),
            yfov: WW.fovMode === ww.e.FOVMODE_VERTICAL_FIXED ? WW.fov : WW.fov * WW.mC().getAspectRatio(WW),
            znear: WW.minZ,
            zfar: WW.maxZ
          };
          else if ("orthographic" === RW.type) {
            const MW = WW.orthoLeft && WW.orthoRight ? .5 * (WW.orthoRight - WW.orthoLeft) : .5 * WW.mC().getRenderWidth(),
              wW = WW.orthoBottom && WW.orthoTop ? .5 * (WW.orthoTop - WW.orthoBottom) : .5 * WW.mC().getRenderHeight();
            RW.orthographic = {
              xmag: MW,
              ymag: wW,
              znear: WW.minZ,
              zfar: WW.maxZ
            }
          }
          this._camerasMap.set(WW, RW)
        }
      }
      _exportAndAssignCameras() {
        const WW = Array.from(this._camerasMap.values());
        for (const RW of WW) {
          const WW = this._nodesCameraMap.get(RW);
          if (void 0 !== WW) {
            this._cameras.push(RW);
            for (const RW of WW) RW.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const WW of this._babylonScene.skeletons) {
          if (WW.bones.length <= 0) continue;
          const RW = {
            joints: []
          };
          this._skinMap.set(WW, RW)
        }
      }
      _exportAndAssignSkeletons(WW) {
        for (const MW of this._babylonScene.skeletons) {
          if (MW.bones.length <= 0) continue;
          const zR = this._skinMap.get(MW);
          if (void 0 == zR) continue;
          const AW = {};
          let bR = -1;
          for (let WW = 0; WW < MW.bones.length; ++WW) {
            const RW = MW.bones[WW],
              wW = RW.getIndex() ?? WW; - 1 !== wW && (AW[wW] = RW, wW > bR && (bR = wW))
          }
          const yR = [];
          for (let MW = 0; MW <= bR; ++MW) {
            const bR = AW[MW],
              NW = bR.getTransformNode(),
              eW = NW ? this._nodeMap.get(NW) : void 0;
            if (void 0 === eW) {
              CW.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            zR.joints.push(eW);
            const BW = bR.getAbsoluteInverseBindMatrix().clone();
            WW.has(NW) && (RW = BW, pM.invertToRef(wW.TmpVectors.Matrix[0]).multiplyToRef(RW, RW).multiplyToRef(pM, RW)), yR.push(BW)
          }
          const NW = this._nodesSkinMap.get(zR);
          if (zR.joints.length > 0 && void 0 !== NW) {
            const WW = new Float32Array(16 * yR.length);
            yR.forEach(((RW, MW) => {
              WW.set(RW.m, 16 * MW)
            }));
            const RW = this._bufferManager.createBufferView(WW);
            this._accessors.push(this._bufferManager.createAccessor(RW, "MAT4", 5126, yR.length)), zR.inverseBindMatrices = this._accessors.length - 1, this._skins.push(zR);
            const MW = this._skins.length - 1;
            for (const wW of NW) wW.skin = MW
          }
        }
        var RW
      }
      async _exportSceneAsync() {
        const WW = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const RW = this._options.metadataSelector(this._babylonScene.metadata);
          RW && (WW.extras = RW)
        }
        const RW = new Array,
          MW = new Array,
          wW = new Array,
          CW = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let zR;
        if (CW && !this._options.includeCoordinateSystemConversionNodes)
          for (const NW of this._babylonScene.animationGroups)
            for (const WW of NW.targetedAnimations) {
              const RW = WW.target;
              RW instanceof BW.d && !RW.parent && (zR ?? (zR = new Set)).add(RW)
            }
        for (const NW of this._babylonScene.rootNodes) {
          const WW = NW.animations,
            AW = !!WW && WW.length > 0 || zR?.has(NW);
          CW && !this._options.includeCoordinateSystemConversionNodes && hM(NW, this._babylonScene.useRightHandedSystem) && !AW ? wW.push(...NW.getChildren()) : this._babylonScene.useRightHandedSystem ? RW.push(NW) : MW.push(NW)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const AW = new dw(!0, !1);
        WW.nodes.push(...await this._exportNodesAsync(MW, AW));
        const bR = new dw(!1, !1);
        WW.nodes.push(...await this._exportNodesAsync(RW, bR));
        const yR = new dw(!1, !0);
        WW.nodes.push(...await this._exportNodesAsync(wW, yR)), WW.nodes.length && this._scenes.push(WW), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(AW.getNodesSet()), this._babylonScene.animationGroups.length && Bw._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, AW.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(WW) {
        return this._nodeMap.get(WW)
      }
      _getAnimationIndex(WW) {
        return this._animationGroupMap.get(WW)
      }
      _getCameraIndex(WW) {
        const RW = this._camerasMap.get(WW);
        if (!RW) return;
        const MW = this._cameras.indexOf(RW);
        return MW >= 0 ? MW : void 0
      }
      _getMaterialIndex(WW) {
        return this._materialMap.get(WW)
      }
      _getRootIndex(WW, RW) {
        switch (WW) {
          case "nodes":
            return this._getNodeIndex(RW);
          case "animations":
            return this._getAnimationIndex(RW);
          case "cameras":
            return this._getCameraIndex(RW);
          case "materials":
            return this._getMaterialIndex(RW);
          case "meshes": {
            const WW = this._getNodeIndex(RW);
            return void 0 === WW ? void 0 : this._nodes[WW]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(RW)?.index;
          case "images": {
            const WW = this._materialExporter.getTextureInfo(RW)?.index;
            if (void 0 === WW) return;
            const MW = this._textures[WW];
            for (const RW of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const WW = MW?.extensions?.[RW]?.source;
              if ("number" === typeof WW) return WW
            }
            return MW?.source
          }
          case "samplers": {
            const WW = this._materialExporter.getTextureInfo(RW)?.index;
            return void 0 === WW ? void 0 : this._textures[WW]?.sampler
          }
          case "skins": {
            const WW = this._skinMap.get(RW),
              MW = WW ? this._skins.indexOf(WW) : -1;
            return MW >= 0 ? MW : void 0
          }
          case "scenes":
            return RW === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(WW, RW, MW) {
        const wW = this._nodes[WW];
        if (!wW) throw new Error(`Cannot write ${RW}: glTF node ${WW} does not exist.`);
        wW.extensions || (wW.extensions = {}), wW.extensions[RW] = MW
      }
      _shouldExportNode(WW) {
        let RW = this._shouldExportNodeMap.get(WW);
        return void 0 === RW && (RW = this._options.shouldExportNode(WW), this._shouldExportNodeMap.set(WW, RW)), RW
      }
      async _exportNodesAsync(WW, RW) {
        const MW = new Array;
        this._exportBuffers(WW, RW);
        for (const wW of WW) await this._exportNodeAsync(wW, MW, RW);
        return MW
      }
      _collectBuffers(WW, RW, MW, wW, CW) {
        if (this._shouldExportNode(WW) && WW instanceof tR.b && WW.geometry) {
          const zR = WW.geometry.getVertexBuffers();
          if (zR)
            for (const wW in zR) {
              if (!KM(wW)) continue;
              const AW = zR[wW];
              CW.setHasVertexColorAlpha(AW, WW.hasVertexAlpha);
              const bR = AW._buffer,
                yR = RW.get(bR) || [];
              RW.set(bR, yR), -1 === yR.indexOf(AW) && yR.push(AW);
              const NW = MW.get(AW) || [];
              MW.set(AW, NW), -1 === NW.indexOf(WW) && NW.push(WW)
            }
          const AW = WW.morphTargetManager;
          if (AW)
            for (let RW = 0; RW < AW.numTargets; RW++) {
              const MW = AW.getTarget(RW),
                CW = wW.get(MW) || [];
              wW.set(MW, CW), -1 === CW.indexOf(WW) && CW.push(WW)
            }
        }
        for (const zR of WW.getChildren()) this._collectBuffers(zR, RW, MW, wW, CW)
      }
      _exportBuffers(WW, RW) {
        const MW = new Map,
          wW = new Map,
          CW = new Map;
        for (const bR of WW) this._collectBuffers(bR, MW, wW, CW, RW);
        const zR = Array.from(MW.keys());
        for (const bR of zR) {
          const WW = bR.getData();
          if (!WW) throw new Error("Buffer data is not available");
          const CW = MW.get(bR);
          if (!CW) continue;
          const zR = CW[0].byteStride;
          if (CW.some((WW => WW.byteStride !== zR))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const AW = DM(WW).slice();
          for (const RW of CW) {
            const WW = wW.get(RW),
              {
                byteOffset: MW,
                byteStride: CW,
                componentCount: zR,
                type: bR,
                count: yR,
                normalized: NW,
                kind: BW
              } = xw(RW, WW);
            switch (BW) {
              case eW.h.NormalKind:
              case eW.h.TangentKind:
                (0, aw.l)(AW, MW, CW, zR, bR, yR, NW, (WW => {
                  const RW = Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2]);
                  if (RW > 0) {
                    const MW = 1 / RW;
                    WW[0] *= MW, WW[1] *= MW, WW[2] *= MW
                  }
                }));
                break;
              case eW.h.ColorKind: {
                const RW = WW.filter((WW => WW.material instanceof zC.StandardMaterial || null == WW.material)).length;
                if (0 == RW) break;
                if (RW != WW.length) {
                  XW.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                bR == eW.h.UNSIGNED_BYTE && XW.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const wW = new YW.Color3,
                  BW = new YW.d,
                  tR = this._babylonScene.mC().useExactSrgbConversions;
                (0, aw.l)(AW, MW, CW, zR, bR, yR, NW, (WW => {
                  3 === WW.length ? (wW.MyW(WW, 0), wW.toLinearSpaceToRef(wW, tR), wW.toArray(WW, 0)) : (BW.MyW(WW, 0), BW.toLinearSpaceToRef(BW, tR), BW.toArray(WW, 0))
                }))
              }
            }
          }
          if (RW.convertToRightHanded) {
            for (const WW of CW) {
              const RW = wW.get(WW),
                {
                  byteOffset: MW,
                  byteStride: CW,
                  componentCount: zR,
                  type: bR,
                  count: yR,
                  normalized: NW,
                  kind: BW
                } = xw(WW, RW);
              switch (BW) {
                case eW.h.PositionKind:
                case eW.h.NormalKind:
                case eW.h.TangentKind:
                  (0, aw.l)(AW, MW, CW, zR, bR, yR, NW, (WW => {
                    WW[0] = -WW[0]
                  }))
              }
            }
            RW.convertedToRightHandedBuffers.set(bR, AW)
          }
          const yR = this._bufferManager.createBufferView(AW, zR);
          RW.setVertexBufferView(bR, yR);
          const NW = new Map;
          for (const RW of CW) {
            const WW = wW.get(RW),
              {
                kind: MW,
                totalVertices: CW
              } = xw(RW, WW);
            switch (MW) {
              case eW.h.MatricesIndicesKind:
              case eW.h.MatricesIndicesExtraKind:
                if (RW.type == eW.h.FLOAT) {
                  const WW = RW.getFloatData(CW);
                  null !== WW && NW.set(RW, WW)
                }
            }
          }
          0 !== NW.size && XW.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const BW = Array.from(NW.keys());
          for (const MW of BW) {
            const WW = NW.get(MW);
            if (!WW) continue;
            const wW = WW.some((WW => WW >= 256)),
              CW = new(wW ? Uint16Array : Uint8Array)(WW.length);
            for (let RW = 0; RW < WW.length; RW++) CW[RW] = WW[RW];
            const zR = this._bufferManager.createBufferView(CW, 4 * (wW ? 2 : 1));
            RW.setRemappedBufferView(bR, MW, zR)
          }
        }
        const AW = Array.from(CW.keys());
        for (const bR of AW) {
          const WW = CW.get(bR);
          if (!WW) continue;
          const MW = tC(bR, WW[0], this._bufferManager, this._bufferViews, this._accessors, RW.convertToRightHanded);
          for (const wW of WW) RW.bindMorphDataToMesh(wW, MW)
        }
      }
      async _exportNodeAsync(WW, RW, MW) {
        let wW = this._nodeMap.get(WW);
        if (void 0 !== wW) return void(RW.includes(wW) || RW.push(wW));
        const CW = await this._createNodeAsync(WW, MW);
        if (CW) {
          wW = this._nodes.length, this._nodes.push(CW), this._nodeMap.set(WW, wW), MW.pushExportedNode(WW), RW.push(wW);
          const zR = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            AW = [];
          this._babylonScene.animationGroups.length || (Bw._CreateMorphTargetAnimationFromMorphTargetAnimations(WW, zR, AW, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, MW.convertToRightHanded, this._options.shouldExportAnimation), WW.animations.length && Bw._CreateNodeAnimationFromNodeAnimations(WW, zR, AW, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, MW.convertToRightHanded, this._options.shouldExportAnimation)), zR.channels.length && zR.samplers.length && this._animations.push(zR), AW.forEach((WW => {
            WW.channels.length && WW.samplers.length && this._animations.push(WW)
          }))
        }
        const zR = CW ? [] : RW;
        for (const AW of WW.getChildren()) await this._exportNodeAsync(AW, zR, MW);
        CW && zR.length && (CW.children = zR)
      }
      async _createNodeAsync(WW, RW) {
        if (!this._shouldExportNode(WW)) return null;
        const MW = {};
        if (WW.name && (MW.name = WW.name), WW.metadata) {
          const RW = this._options.metadataSelector(WW.metadata);
          RW && (MW.extras = RW)
        }
        if (WW instanceof BW.d && (this._setNodeTransformation(MW, WW, RW.convertToRightHanded), WW instanceof tR.b)) {
          const wW = WW instanceof TW.e ? WW.yBW : WW;
          if (wW.Qs && wW.Qs.length > 0 && (MW.mesh = await this._exportMeshAsync(wW, RW)), WW.skeleton) {
            const RW = this._skinMap.get(WW.skeleton);
            void 0 !== RW && (void 0 === this._nodesSkinMap.get(RW) && this._nodesSkinMap.set(RW, []), this._nodesSkinMap.get(RW)?.push(MW))
          }
        }
        if (WW instanceof sM.f) {
          const wW = this._camerasMap.get(WW);
          if (wW) {
            void 0 === this._nodesCameraMap.get(wW) && this._nodesCameraMap.set(wW, []), this._setCameraTransformation(MW, WW, RW.convertToRightHanded);
            const CW = WW.parent;
            if (null !== CW && HM(WW, CW)) {
              const WW = this._nodeMap.get(CW);
              if (void 0 !== WW) {
                const RW = this._nodes[WW];
                return LM(MW, RW), this._nodesCameraMap.get(wW)?.push(RW), null
              }
            }
            this._nodesCameraMap.get(wW)?.push(MW)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", MW, WW, this._nodeMap, RW.convertToRightHanded) ? MW : (XW.b.Warn(`Not exporting node ${WW.name}`), null)
      }
      _exportIndices(WW, RW, MW, wW, CW, AW, bR, yR, NW) {
        let eW = null;
        NW.mode = function(WW) {
          switch (WW) {
            case zR.e.TriangleFillMode:
              return 4;
            case zR.e.TriangleStripDrawMode:
              return 5;
            case zR.e.TriangleFanDrawMode:
              return 6;
            case zR.e.PointListDrawMode:
            case zR.e.PointFillMode:
              return 0;
            case zR.e.LineLoopDrawMode:
              return 2;
            case zR.e.LineListDrawMode:
              return 1;
            case zR.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${WW}`)
        }(AW);
        const BW = bR !== zR.e.CounterClockWiseSideOrientation && function(WW) {
          switch (WW) {
            case zR.e.TriangleFillMode:
            case zR.e.TriangleStripDrawMode:
            case zR.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(AW);
        if (BW) {
          if (AW === zR.e.TriangleStripDrawMode || AW === zR.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const bR = RW ? new Uint32Array(wW) : new Uint16Array(wW);
          if (WW)
            for (let RW = 0; RW + 2 < wW; RW += 3) bR[RW] = WW[MW + RW] + CW, bR[RW + 1] = WW[MW + RW + 2] + CW, bR[RW + 2] = WW[MW + RW + 1] + CW;
          else
            for (let WW = 0; WW + 2 < wW; WW += 3) bR[WW] = WW, bR[WW + 1] = WW + 2, bR[WW + 2] = WW + 1;
          eW = bR
        } else if (WW && 0 !== CW) {
          const zR = RW ? new Uint32Array(wW) : new Uint16Array(wW);
          for (let RW = 0; RW < wW; RW++) zR[RW] = WW[MW + RW] + CW;
          eW = zR
        } else WW && (eW = function(WW, RW, MW, wW) {
          let CW = WW;
          return 0 === RW && MW === WW.length || (CW = Array.isArray(WW) ? WW.slice(RW, RW + MW) : WW.subarray(RW, RW + MW)), CW instanceof Int32Array ? new Uint32Array(CW.buffer, CW.byteOffset, CW.length) : Array.isArray(CW) ? wW ? new Uint32Array(CW) : new Uint16Array(CW) : CW
        }(WW, MW, wW, RW));
        if (eW) {
          let zR = yR.getIndicesAccessor(WW, MW, wW, CW, BW);
          if (void 0 === zR) {
            const AW = this._bufferManager.createBufferView(eW),
              bR = RW ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(AW, "SCALAR", bR, wW, 0)), zR = this._accessors.length - 1, yR.setIndicesAccessor(WW, MW, wW, CW, BW, zR)
          }
          NW.indices = zR
        }
      }
      _exportVertexBuffer(WW, RW, MW, wW, CW, zR) {
        const AW = WW.getKind();
        if (!KM(AW)) return;
        if (AW.startsWith("uv") && !this._options.exportUnusedUVs && (!RW || !this._materialNeedsUVsSet.has(RW))) return;
        let bR = CW.getVertexAccessor(WW, MW, wW);
        if (void 0 === bR) {
          const RW = CW.convertedToRightHandedBuffers.get(WW._buffer) || WW._buffer.getData(),
            zR = AW === eW.h.PositionKind ? function(WW, RW, MW, wW) {
              const {
                byteOffset: CW,
                byteStride: zR,
                type: AW,
                normalized: bR
              } = RW, yR = RW.getSize(), NW = new Array(yR).fill(1 / 0), eW = new Array(yR).fill(-1 / 0);
              return (0, aw.l)(WW, CW + MW * zR, zR, yR, AW, wW * yR, bR, (WW => {
                for (let RW = 0; RW < yR; RW++) NW[RW] = Math.min(NW[RW], WW[RW]), eW[RW] = Math.max(eW[RW], WW[RW])
              })), {
                min: NW,
                max: eW
              }
            }(RW, WW, MW, wW) : void 0,
            yR = (AW === eW.h.MatricesIndicesKind || AW === eW.h.MatricesIndicesExtraKind) && WW.type === eW.h.FLOAT,
            NW = yR ? eW.h.UNSIGNED_BYTE : WW.type,
            BW = yR ? void 0 : WW.normalized,
            tR = yR ? CW.getRemappedBufferView(WW._buffer, WW) : CW.getVertexBufferView(WW._buffer),
            TW = WW.byteOffset + MW * WW.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(tR, function(WW, RW) {
            if (WW == eW.h.ColorKind) return RW ? "VEC4" : "VEC3";
            switch (WW) {
              case eW.h.PositionKind:
              case eW.h.NormalKind:
                return "VEC3";
              case eW.h.TangentKind:
              case eW.h.MatricesIndicesKind:
              case eW.h.MatricesIndicesExtraKind:
              case eW.h.MatricesWeightsKind:
              case eW.h.MatricesWeightsExtraKind:
                return "VEC4";
              case eW.h.UVKind:
              case eW.h.UV2Kind:
              case eW.h.UV3Kind:
              case eW.h.UV4Kind:
              case eW.h.UV5Kind:
              case eW.h.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${WW}`)
          }(AW, CW.hasVertexColorAlpha(WW)), NW, wW, TW, zR, BW)), bR = this._accessors.length - 1, CW.setVertexAccessor(WW, MW, wW, bR)
        }
        zR.attributes[function(WW) {
          switch (WW) {
            case eW.h.PositionKind:
              return "POSITION";
            case eW.h.NormalKind:
              return "NORMAL";
            case eW.h.TangentKind:
              return "TANGENT";
            case eW.h.ColorKind:
              return "COLOR_0";
            case eW.h.UVKind:
              return "TEXCOORD_0";
            case eW.h.UV2Kind:
              return "TEXCOORD_1";
            case eW.h.UV3Kind:
              return "TEXCOORD_2";
            case eW.h.UV4Kind:
              return "TEXCOORD_3";
            case eW.h.UV5Kind:
              return "TEXCOORD_4";
            case eW.h.UV6Kind:
              return "TEXCOORD_5";
            case eW.h.MatricesIndicesKind:
              return "JOINTS_0";
            case eW.h.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case eW.h.MatricesWeightsKind:
              return "WEIGHTS_0";
            case eW.h.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${WW}`)
        }(AW)] = bR
      }
      async _exportMaterialAsync(WW, RW, MW, wW) {
        let CW = this._materialMap.get(WW);
        if (void 0 === CW) {
          const wW = RW && Object.keys(RW).some((WW => WW.startsWith("uv")));
          if ((WW = WW instanceof Cw.e ? WW.vAW[MW.materialIndex] : WW) instanceof FR) CW = await this._materialExporter.exportPBRMaterialAsync(WW, wW);
          else if (WW instanceof zC.StandardMaterial) CW = await this._materialExporter.exportStandardMaterialAsync(WW, wW);
          else {
            if (!(WW instanceof ZR)) return void XW.b.Warn(`Unsupported material '${WW.name}' with type ${WW.getClassName()}`);
            CW = await this._materialExporter.exportOpenPBRMaterialAsync(WW, wW)
          }
          this._materialMap.set(WW, CW)
        }
        wW.material = CW
      }
      async _exportMeshAsync(WW, RW) {
        let MW = RW.getMesh(WW);
        if (void 0 !== MW) return MW;
        const wW = {
          primitives: []
        };
        MW = this._meshes.length, this._meshes.push(wW), RW.setMesh(WW, MW);
        const CW = WW.isUnIndexed ? null : WW.ptW(),
          AW = WW.geometry?.getVertexBuffers(),
          bR = RW.getMorphTargetsFromMesh(WW),
          yR = WW instanceof Tw.d,
          NW = WW instanceof sw,
          eW = WW.Qs;
        if (AW && eW && eW.length > 0)
          for (const BW of eW) {
            const MW = {
                attributes: {}
              },
              eW = BW.Ow() || this._babylonScene.defaultMaterial;
            if (NW) {
              const RW = {
                  name: eW.name
                },
                wW = WW,
                CW = YW.Color3.White(),
                zR = wW.material?.alpha ?? 1,
                AW = wW.greasedLineMaterial?.color ?? CW;
              (!AW.equalsWithEpsilon(CW, dM.c) || zR < 1) && (RW.pbrMetallicRoughness = {
                baseColorFactor: [...AW.JNW(), zR]
              }), this._materials.push(RW), MW.material = this._materials.length - 1
            } else if (yR) {
              const RW = {
                  name: eW.name
                },
                wW = WW;
              (!wW.color.equalsWithEpsilon(YW.Color3.White(), dM.c) || wW.alpha < 1) && (RW.pbrMetallicRoughness = {
                baseColorFactor: [...wW.color.JNW(), wW.alpha]
              }), this._materials.push(RW), MW.material = this._materials.length - 1
            } else await this._exportMaterialAsync(eW, AW, BW, MW);
            const tR = yR || NW ? zR.e.LineListDrawMode : WW.overrideRenderingFillMode ?? eW.fillMode;
            let TW = eW._getEffectiveOrientation(WW);
            RW.wasAddedByNoopNode && !WW.QRW().useRightHandedSystem && (TW = TW === zR.e.ClockWiseSideOrientation ? zR.e.CounterClockWiseSideOrientation : zR.e.ClockWiseSideOrientation), this._exportIndices(CW, CW ? (0, aw.e)(CW, BW.indexCount, BW.indexStart, BW.verticesStart) : BW.verticesCount > 65535, CW ? BW.indexStart : BW.verticesStart, CW ? BW.indexCount : BW.verticesCount, -BW.verticesStart, tR, TW, RW, MW);
            for (const WW of Object.values(AW)) this._exportVertexBuffer(WW, eW, BW.verticesStart, BW.verticesCount, RW, MW);
            if (bR) {
              MW.targets = [];
              for (const WW of bR) MW.targets.push(WW.attributes)
            }
            wW.primitives.push(MW), this._extensionsPostExportMeshPrimitive(MW)
          }
        if (bR) {
          wW.weights = [], wW.extras || (wW.extras = {}), wW.extras.targetNames = [];
          for (const WW of bR) wW.weights.push(WW.influence), wW.extras.targetNames.push(WW.name)
        }
        return MW
      }
    }
    pw._ExtensionNames = new Array, pw._ExtensionFactories = {}, pw._ExtensionOrders = {};
    class hw {
      static async GLTFAsync(WW, RW, MW) {
        MW && MW.exportWithoutWaitingForScene || await WW.whenReadyAsync();
        const wW = new pw(WW, MW),
          CW = await wW.generateGLTFAsync(RW.replace(/\.[^/.]+$/, ""));
        return wW.dispose(), CW
      }
      static async GLBAsync(WW, RW, MW) {
        MW && MW.exportWithoutWaitingForScene || await WW.whenReadyAsync();
        const wW = new pw(WW, MW),
          CW = await wW.generateGLBAsync(RW.replace(/\.[^/.]+$/, ""));
        return wW.dispose(), CW
      }
    }
    const Uw = "EXT_mesh_gpu_instancing";

    function Ew(WW, RW) {
      const MW = new Float32Array(3 * RW);
      for (let wW = 0; wW < RW; wW++) MW[3 * wW + 0] = WW[4 * wW + 0], MW[3 * wW + 1] = WW[4 * wW + 1], MW[3 * wW + 2] = WW[4 * wW + 2];
      return MW
    }
    class Vw {
      constructor(WW) {
        this.name = Uw, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(WW, RW, MW, wW, CW, zR) {
        return await new Promise((WW => {
          if (RW && MW instanceof Fw.b && MW.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const WW = VW.q.Zero(),
              wW = VW.e.Identity(),
              AW = VW.q.One(),
              bR = MW.thinInstanceGetWorldMatrices(),
              yR = VW.k.vC[2],
              NW = VW.k.Quaternion[1],
              eW = VW.k.vC[3];
            let BW = !1,
              tR = !1,
              TW = !1;
            const gR = new Float32Array(3 * MW.fzW),
              iR = new Float32Array(4 * MW.fzW),
              YW = new Float32Array(3 * MW.fzW);
            let JW = 0;
            for (const RW of bR) RW.decompose(eW, NW, yR), CW && (OM(yR), nM(NW)), gR.set(yR.JNW(), 3 * JW), iR.set(NW.normalize().JNW(), 4 * JW), YW.set(eW.JNW(), 3 * JW), BW = BW || !yR.equalsWithEpsilon(WW), tR = tR || !NW.equalsWithEpsilon(wW), TW = TW || !eW.equalsWithEpsilon(AW), JW++;
            const PW = {
              attributes: {}
            };
            BW && (PW.attributes.TRANSLATION = this._buildAccessor(gR, "VEC3", MW.fzW, zR)), tR && (PW.attributes.ROTATION = this._buildAccessor(iR, "VEC4", MW.fzW, zR)), TW && (PW.attributes.SCALE = this._buildAccessor(YW, "VEC3", MW.fzW, zR));
            let IW = MW._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (IW) {
              const WW = MW.fzW,
                RW = "VEC3";
              MW.hasVertexAlpha && IW.length === 4 * WW ? (this._instanceColorWarned || (XW.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), IW = Ew(IW, WW)) : IW.length === 4 * WW && (IW = Ew(IW, WW)), IW.length === 3 * WW && (PW.attributes._COLOR_0 = this._buildAccessor(IW, RW, WW, zR))
            }
            RW.extensions = RW.extensions || {}, RW.extensions[Uw] = PW
          }
          WW(RW)
        }))
      }
      _buildAccessor(WW, RW, MW, wW) {
        const CW = wW.createBufferView(WW),
          zR = wW.createAccessor(CW, RW, 5126, MW);
        return this._exporter._accessors.push(zR), this._exporter._accessors.length - 1
      }
    }
    let mC = !1;

    function xC() {
      mC || (mC = !0, pw.RegisterExtension(Uw, (WW => new Vw(WW))))
    }
    MW(38074);
    xC();
    var vC = MW(39306);

    function Kw(WW, RW, MW, wW) {
      const CW = WW;
      let zR = null,
        AW = null,
        bR = null,
        yR = null;
      const NW = {},
        eW = RW.find((WW => "POSITION" === WW.dracoName));
      if (!eW) throw new Error("Draco: Missing position attribute for encoding.");
      if (!MW) {
        const WW = eW.data.length / eW.size;
        MW = new(WW > 65535 ? Uint32Array : Uint16Array)(WW);
        for (let RW = 0; RW < WW; RW++) MW[RW] = RW
      }
      try {
        zR = new CW.Encoder, AW = new CW.MeshBuilder, bR = new CW.Mesh, AW.AddFacesToMesh(bR, MW.length / 3, MW);
        const WW = new Map([
          [Float32Array, (WW, RW, MW, wW, CW, zR) => WW.AddFloatAttribute(RW, MW, wW, CW, zR)],
          [Uint32Array, (WW, RW, MW, wW, CW, zR) => WW.AddUInt32Attribute(RW, MW, wW, CW, zR)],
          [Uint16Array, (WW, RW, MW, wW, CW, zR) => WW.AddUInt16Attribute(RW, MW, wW, CW, zR)],
          [Uint8Array, (WW, RW, MW, wW, CW, zR) => WW.AddUInt8Attribute(RW, MW, wW, CW, zR)],
          [Int32Array, (WW, RW, MW, wW, CW, zR) => WW.AddInt32Attribute(RW, MW, wW, CW, zR)],
          [Int16Array, (WW, RW, MW, wW, CW, zR) => WW.AddInt16Attribute(RW, MW, wW, CW, zR)],
          [Int8Array, (WW, RW, MW, wW, CW, zR) => WW.AddInt8Attribute(RW, MW, wW, CW, zR)]
        ]);
        for (const MW of RW) {
          MW.data instanceof Uint8ClampedArray && (MW.data = new Uint8Array(MW.data));
          const RW = WW.get(MW.data.constructor),
            yR = MW.data.length / MW.size;
          NW[MW.kind] = RW(AW, bR, CW[MW.dracoName], yR, MW.size, MW.data), wW.quantizationBits && wW.quantizationBits[MW.dracoName] && zR.SetAttributeQuantization(CW[MW.dracoName], wW.quantizationBits[MW.dracoName])
        }
        wW.method && zR.SetEncodingMethod(CW[wW.method]), void 0 !== wW.encodeSpeed && void 0 !== wW.decodeSpeed && zR.SetSpeedOptions(wW.encodeSpeed, wW.decodeSpeed), yR = new CW.DracoInt8Array;
        const eW = zR.EncodeMeshToDracoBuffer(bR, yR);
        if (eW <= 0) throw new Error("Draco: Failed to encode.");
        const BW = new Int8Array(eW);
        for (let RW = 0; RW < eW; RW++) BW[RW] = yR.GetValue(RW);
        return {
          data: BW,
          attributeIds: NW
        }
      } finally {
        bR && CW.destroy(bR), AW && CW.destroy(AW), zR && CW.destroy(zR), yR && CW.destroy(yR)
      }
    }

    function uw() {
      let WW;
      onmessage = RW => {
        const MW = RW.data;
        switch (MW.id) {
          case "init": {
            MW.url && importScripts(MW.url);
            const RW = MW.wasmBinary ? {
              wasmBinary: MW.wasmBinary
            } : {};
            WW = DracoEncoderModule(RW), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!WW) throw new Error("Draco: Encoder module is not available.");
            WW.then((WW => {
              const RW = Kw(WW, MW.attributes, MW.indices, MW.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: RW
              }, RW ? [RW.data.buffer] : void 0)
            })).catch((WW => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: WW.message
              })
            }))
        }
      }
    }
    class Ow {
      constructor(WW) {
        if (WW.workerPool) return void(this._workerPoolPromise = Promise.resolve(WW.workerPool));
        const RW = WW.wasmBinary,
          MW = WW.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          wW = MW && "function" === typeof Worker && "function" === typeof URL,
          CW = wW || !WW.jsModule,
          zR = WW.wasmUrl && WW.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: CW ? QR.j.GetBabylonScriptURL(WW.wasmUrl, !0) : "",
            wasmBinaryPromise: RW ? Promise.resolve(RW) : QR.j.LoadFileAsync(QR.j.GetBabylonScriptURL(WW.wasmBinaryUrl, !0))
          } : {
            url: CW ? QR.j.GetBabylonScriptURL(WW.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        wW ? this._workerPoolPromise = zR.wasmBinaryPromise.then((WW => {
          const RW = this._getWorkerContent(),
            wW = URL.createObjectURL(new Blob([RW], {
              type: "application/javascript"
            }));
          return new vC.b(MW, (() => async function(WW, RW, MW) {
            return await new Promise(((wW, CW) => {
              const zR = RW => {
                  WW.removeEventListener("error", zR), WW.removeEventListener("message", AW), CW(RW)
                },
                AW = RW => {
                  "initDone" === RW.data.id && (WW.removeEventListener("error", zR), WW.removeEventListener("message", AW), wW(WW))
                };
              if (WW.addEventListener("error", zR), WW.addEventListener("message", AW), RW) {
                const wW = RW.slice(0);
                WW.postMessage({
                  id: "init",
                  url: MW,
                  wasmBinary: wW
                }, [wW])
              } else WW.postMessage({
                id: "init",
                url: MW
              })
            }))
          }(new Worker(wW), WW, zR.url)))
        })) : this._modulePromise = zR.wasmBinaryPromise.then((async RW => {
          if (!this._isModuleAvailable() && !WW.jsModule) {
            if (!zR.url) throw new Error("Draco codec module is not available");
            await QR.j.LoadBabylonScriptAsync(zR.url)
          }
          return await this._createModuleAsync(RW, WW.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((WW => {
          WW.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function nw() {
      const WW = WW => !!WW && "object" === typeof WW;
      for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
      return MW.reduce(((RW, MW) => {
        const wW = Object.keys(MW);
        for (const CW of wW) {
          const wW = RW[CW],
            zR = MW[CW];
          Array.isArray(wW) && Array.isArray(zR) ? RW[CW] = wW.concat(zR) : WW(wW) && WW(zR) ? RW[CW] = nw(wW, zR) : RW[CW] = zR
        }
        return RW
      }), {})
    }

    function Gw(WW) {
      return WW === mR.j.PositionKind ? "POSITION" : WW === mR.j.NormalKind ? "NORMAL" : WW === mR.j.ColorKind ? "COLOR" : WW.startsWith(mR.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Lw = {
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
    class Hw extends Ow {
      static get DefaultAvailable() {
        return !!((WW = Hw.DefaultConfiguration).wasmUrl && (WW.wasmBinary || WW.wasmBinaryUrl) && "object" === typeof WebAssembly || WW.fallbackUrl);
        var WW
      }
      static get Default() {
        return Hw._Default ?? (Hw._Default = new Hw), Hw._Default
      }
      static ResetDefault(WW) {
        Hw._Default && (WW || Hw._Default.dispose(), Hw._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(WW, RW) {
        return {
          module: await (RW || DracoEncoderModule)({
            wasmBinary: WW
          })
        }
      }
      _getWorkerContent() {
        return `${Kw}(${uw})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hw.DefaultConfiguration)
      }
      async _encodeAsync(WW, RW, MW) {
        const wW = MW ? nw(Lw, MW) : Lw;
        if (this._workerPoolPromise) {
          const MW = await this._workerPoolPromise;
          return await new Promise(((CW, zR) => {
            MW.push(((MW, AW) => {
              const bR = WW => {
                  MW.removeEventListener("error", bR), MW.removeEventListener("message", yR), zR(WW), AW()
                },
                yR = WW => {
                  "encodeMeshSuccess" === WW.data.id ? (MW.removeEventListener("error", bR), MW.removeEventListener("message", yR), CW(WW.data.encodedMeshData), AW()) : "encodeMeshError" === WW.data.id && (MW.removeEventListener("error", bR), MW.removeEventListener("message", yR), zR(new Error(WW.data.errorMessage)), AW())
                };
              MW.addEventListener("error", bR), MW.addEventListener("message", yR);
              const NW = [];
              for (const RW of WW) NW.push(RW.data.buffer);
              RW && NW.push(RW.buffer), MW.postMessage({
                id: "encodeMesh",
                attributes: WW,
                indices: RW,
                options: wW
              }, NW)
            }))
          }))
        }
        if (this._modulePromise) {
          return Kw((await this._modulePromise).module, WW, RW, wW)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(WW, RW) {
        if (0 == WW.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        WW instanceof Fw.b && WW.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === RW?.method && (XW.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), RW.method = "MESH_SEQUENTIAL_ENCODING");
        const MW = function(WW) {
            let RW = WW.ptW(void 0, !0);
            return !RW || RW instanceof Uint32Array || RW instanceof Uint16Array || (RW = ((0, aw.e)(RW, RW.length) ? Uint32Array : Uint16Array).from(RW)), RW
          }(WW),
          wW = function(WW, RW) {
            const MW = [];
            for (const wW of WW.getVerticesDataKinds()) {
              if (RW?.includes(wW)) {
                if (wW === mR.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const CW = WW.getVertexBuffer(wW),
                zR = CW.getSize(),
                AW = (0, aw.t)(CW.getData(), zR, CW.type, CW.byteOffset, CW.byteStride, WW.getTotalVertices(), !0);
              MW.push({
                kind: wW,
                dracoName: Gw(wW),
                size: zR,
                data: AW
              })
            }
            return MW
          }(WW, RW?.excludedAttributes);
        return await this._encodeAsync(wW, MW, RW)
      }
    }
    Hw.DefaultConfiguration = {
      wasmUrl: `${QR.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${QR.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${QR.j._DefaultCdnUrl}/draco_encoder.js`
    }, Hw._Default = null;
    const Dw = "KHR_draco_mesh_compression";
    class qC {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = Dw, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === WW.options.meshCompressionMethod && Hw.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(WW, RW, MW) {
        if (!this.enabled) return;
        if (4 !== WW.mode && 5 !== WW.mode) return void XW.b.Warn("Cannot compress primitive with mode " + WW.mode + ".");
        const wW = [],
          CW = [];
        let zR = null;
        if (void 0 !== WW.indices) {
          const AW = MW[WW.indices],
            bR = RW.getBufferView(AW);
          zR = RW.getData(bR).slice(), wW.push(bR), CW.push(AW)
        }
        const AW = [];
        for (const [eW, BW] of Object.entries(WW.attributes)) {
          const WW = MW[BW],
            zR = RW.getBufferView(WW),
            yR = vw(WW.type),
            NW = (0, aw.t)(RW.getData(zR), yR, WW.componentType, WW.byteOffset || 0, zR.byteStride || (0, aw.r)(WW.componentType) * yR, WW.count, !0);
          AW.push({
            kind: eW,
            dracoName: (bR = eW, "POSITION" === bR ? "POSITION" : "NORMAL" === bR ? "NORMAL" : bR.startsWith("COLOR") ? "COLOR" : bR.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: vw(WW.type),
            data: NW
          }), wW.push(zR), CW.push(WW)
        }
        var bR;
        const yR = {
            method: WW.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          NW = Hw.Default._encodeAsync(AW, zR, yR).then((MW => {
            const zR = {
                bufferView: -1,
                attributes: MW.attributeIds
              },
              AW = RW.createBufferView(MW.data);
            RW.setBufferView(zR, AW);
            for (const WW of wW) this._bufferViewsUsed.add(WW);
            for (const WW of CW) this._accessorsUsed.add(WW);
            WW.extensions || (WW.extensions = {}), WW.extensions[Dw] = zR
          })).catch((WW => {
            XW.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + WW.message)
          }));
        this._encodePromises.push(NW), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(WW) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((RW => {
          WW.getPropertiesWithBufferView(RW).every((WW => this._accessorsUsed.has(WW))) && WW.removeBufferView(RW)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Zw = !1;

    function Sw() {
      Zw || (Zw = !0, pw.RegisterExtension(Dw, (WW => new qC(WW))))
    }
    Sw();
    var WC = MW(39050);
    const RC = "KHR_lights_punctual",
      MC = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      wC = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      CC = VW.q.Backward();
    class zz {
      constructor(WW) {
        this.name = RC, this.enabled = !0, this.required = !1, this._exporter = WW
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[RC] = this._lights
      }
      async postExportNodeAsync(WW, RW, MW, wW, CW) {
        return await new Promise((zR => {
          if (!(MW instanceof ew.c)) return void zR(RW);
          const AW = MW.getTypeID() == ew.c.LIGHTTYPEID_POINTLIGHT ? "point" : MW.getTypeID() == ew.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : MW.getTypeID() == ew.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!AW || !(MW instanceof WC.d)) return XW.b.Warn(`${WW}: Light ${MW.name} is not supported in ${RC}`), void zR(RW);
          if (MW.falloffType !== ew.c.FALLOFF_GLTF && XW.b.Warn(`${WW}: Light falloff for ${MW.name} does not match the ${RC} specification!`), !MW.position.EtW(0, 0, 0)) {
            const WW = VW.k.vC[0].hyW(MW.position);
            CW && OM(WW), RW.translation = WW.JNW()
          }
          if ("point" !== AW) {
            const WW = MW.direction.normalizeToRef(VW.k.vC[0]);
            CW && OM(WW);
            const wW = VW.e.FromUnitVectorsToRef(CC, WW, VW.k.Quaternion[0]);
            VW.e.IsIdentity(wW) || (RW.rotation = wW.JNW())
          }
          const bR = {
            type: AW,
            name: MW.name,
            color: MW.diffuse.JNW(),
            intensity: MW.intensity,
            range: MW.range
          };
          if (qw(bR, MC), "spot" === AW) {
            const WW = MW;
            bR.spot = {
              innerConeAngle: WW.innerAngle / 2,
              outerConeAngle: WW.angle / 2
            }, qw(bR.spot, wC)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(bR);
          const yR = {
              light: this._lights.lights.length - 1
            },
            NW = MW.parent;
          if (NW && HM(MW, NW)) {
            const WW = wW.get(NW);
            if (WW) {
              const MW = this._exporter._nodes[WW];
              return LM(RW, MW), MW.extensions || (MW.extensions = {}), MW.extensions[RC] = yR, void zR(null)
            }
          }
          RW.extensions || (RW.extensions = {}), RW.extensions[RC] = yR, zR(RW)
        }))
      }
    }
    let AC = !1;

    function bz() {
      AC || (AC = !0, pw.RegisterExtension(RC, (WW => new zz(WW))))
    }
    bz();
    const yz = "KHR_interactivity";
    class NC {
      constructor(WW) {
        this._exporter = WW, this.name = yz, this.enabled = !!WW.options.khrInteractivity, this.required = WW.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var WW, RW, MW;
        const wW = this._exporter.options.khrInteractivity;
        if (!wW) return;
        const CW = wW.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: WW => this._exporter._getNodeIndex(WW),
          getAnimationIndex: WW => this._exporter._getAnimationIndex(WW),
          getCameraIndex: WW => this._exporter._getCameraIndex(WW),
          getMaterialIndex: WW => this._exporter._getMaterialIndex(WW),
          getRootIndex: (WW, RW) => this._exporter._getRootIndex(WW, RW),
          setNodeExtension: (WW, RW, MW) => this._exporter._setNodeExtension(WW, RW, MW)
        });
        this._exporter._glTF.extensions[yz] = CW;
        for (const zR of wW.additionalExtensionsUsed)(WW = this._exporter._glTF).extensionsUsed || (WW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(zR) && this._exporter._glTF.extensionsUsed.push(zR);
        for (const zR of wW.additionalExtensionsRequired)(RW = this._exporter._glTF).extensionsUsed || (RW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(zR) && this._exporter._glTF.extensionsUsed.push(zR), (MW = this._exporter._glTF).extensionsRequired || (MW.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(zR) && this._exporter._glTF.extensionsRequired.push(zR)
      }
    }
    let eC = !1;

    function BC() {
      eC || (eC = !0, pw.RegisterExtension(yz, (WW => new NC(WW)), 200))
    }
    BC();
    const tz = "EXT_lights_area",
      TC = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      gz = {
        aspect: 1
      },
      iz = VW.q.Backward();
    class YC {
      constructor(WW) {
        this.name = tz, this.enabled = !0, this.required = !1, this._exporter = WW
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[tz] = this._lights
      }
      async postExportNodeAsync(WW, RW, MW, wW, CW) {
        return await new Promise((zR => {
          if (!(MW instanceof ew.c)) return void zR(RW);
          const AW = MW.getTypeID() == ew.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!AW) return XW.b.Warn(`${WW}: Light ${MW.name} is not supported in ${tz}`), void zR(RW);
          const bR = MW;
          if (bR.falloffType !== ew.c.FALLOFF_GLTF && XW.b.Warn(`${WW}: Light falloff for ${MW.name} does not match the ${tz} specification!`), !bR.position.EtW(0, 0, 0)) {
            const WW = VW.k.vC[0].hyW(bR.position);
            CW && OM(WW), RW.translation = WW.JNW()
          }
          const yR = VW.q.Forward();
          CW && OM(yR);
          const NW = VW.e.FromUnitVectorsToRef(iz, yR, VW.k.Quaternion[0]);
          VW.e.IsIdentity(NW) || (RW.rotation = NW.JNW());
          const eW = {
            type: AW,
            name: bR.name,
            color: bR.diffuse.JNW(),
            intensity: bR.intensity,
            size: bR.height,
            rect: {
              aspect: bR.width / bR.height
            }
          };
          qw(eW, TC), eW.rect && qw(eW.rect, gz), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(eW);
          const BW = {
              light: this._lights.lights.length - 1
            },
            tR = MW.parent;
          if (tR && HM(bR, tR)) {
            const WW = wW.get(tR);
            if (WW) {
              const MW = this._exporter._nodes[WW];
              return LM(RW, MW), MW.extensions || (MW.extensions = {}), MW.extensions[tz] = BW, void zR(null)
            }
          }
          RW.extensions || (RW.extensions = {}), RW.extensions[tz] = BW, zR(RW)
        }))
      }
    }
    let JC = !1;

    function PC() {
      JC || (JC = !0, pw.RegisterExtension(tz, (WW => new YC(WW))))
    }
    PC();
    const IC = "KHR_materials_anisotropy";
    class oC {
      constructor(WW) {
        this.name = IC, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof FR) {
          if (MW.anisotropy.isEnabled && !MW.anisotropy.legacy) return MW.anisotropy.texture && wW.push(MW.anisotropy.texture), wW
        } else if (MW instanceof ZR && MW.specularRoughnessAnisotropy > 0) {
          const WW = function(WW) {
            const RW = WW.specularRoughnessAnisotropyTexture,
              MW = WW.geometryTangentTexture;
            return `${RW&&RW.getInternalTexture()?RW.getInternalTexture().uniqueId:"NoStrength"}_${MW&&MW.getInternalTexture()?MW.getInternalTexture().uniqueId:"NoTangent"}`
          }(MW);
          if (this._anisoTexturesMap[WW]) wW.push(this._anisoTexturesMap[WW]);
          else {
            const RW = await async function(WW) {
              const RW = WW.QRW(),
                MW = WW.specularRoughnessAnisotropyTexture,
                wW = WW.geometryTangentTexture;
              return MW || wW ? await AM("AnisotropyTexture", NM(wW ? bw(wW, 0) : yw(1), wW ? bw(wW, 1) : yw(0), MW ? bw(MW, 0) : yw(1)), RW) : null
            }(MW);
            RW && (wW.push(RW), this._anisoTexturesMap[WW] = RW)
          }
          return wW
        }
        return []
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          var wW;
          if (MW instanceof FR) {
            if (!MW.anisotropy.isEnabled || MW.anisotropy.legacy) return void WW(RW);
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const wW = this._exporter._materialExporter.getTextureInfo(MW.anisotropy.texture),
              CW = {
                anisotropyStrength: MW.anisotropy.intensity,
                anisotropyRotation: MW.anisotropy.angle,
                anisotropyTexture: wW ?? void 0
              };
            null !== CW.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[IC] = CW
          } else if (MW instanceof ZR && MW.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            let CW = MW.specularRoughnessTexture;
            MW._useRoughnessFromMetallicTextureGreen && (CW = MW.baseMetalnessTexture);
            const zR = this._anisoTexturesMap[MW.id];
            if (!CW && !zR) {
              let wW = MW.specularRoughness,
                CW = MW.specularRoughnessAnisotropy;
              if (!MW._useGltfStyleAnisotropy) {
                const WW = function(WW, RW) {
                  const MW = WW * WW,
                    wW = MW * Math.sqrt(2 / (1 + (1 - RW) * (1 - RW))),
                    CW = (1 - RW) * wW;
                  return {
                    newBaseRoughness: Math.sqrt(CW),
                    newAnisotropyStrength: Math.min(Math.sqrt((wW - MW) / Math.max(1 - MW, 1e-4)), 1)
                  }
                }(MW.specularRoughness, MW.specularRoughnessAnisotropy);
                wW = WW.newBaseRoughness, CW = WW.newAnisotropyStrength
              }
              RW.pbrMetallicRoughness && (RW.pbrMetallicRoughness.roughnessFactor = wW);
              const zR = {
                anisotropyStrength: CW,
                anisotropyRotation: MW.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return RW.extensions[IC] = zR, WW(RW)
            }
            const AW = zR ? this._exporter._materialExporter.getTextureInfo(zR) : null,
              bR = {
                anisotropyStrength: MW.specularRoughnessAnisotropy,
                anisotropyRotation: MW.geometryTangentAngle,
                anisotropyTexture: AW || void 0,
                extensions: {}
              };
            MW._useGltfStyleAnisotropy || (RW.extensions.KHR_materials_openpbr = {}, (wW = this._exporter._glTF).extensionsUsed || (wW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[IC] = bR
          }
          WW(RW)
        }))
      }
    }
    let lC = !1;

    function FC() {
      lC || (lC = !0, pw.RegisterExtension(IC, (WW => new oC(WW))))
    }
    FC();
    const fC = "KHR_materials_clearcoat";

    function QC(WW, RW) {
      const MW = new kR.d(RW.name, RW.QRW());
      return MW._texture = WW, MW.coordinatesIndex = RW.coordinatesIndex, RW instanceof kR.d && (MW.uOffset = RW.uOffset, MW.vOffset = RW.vOffset, MW.uScale = RW.uScale, MW.vScale = RW.vScale, MW.wAng = RW.wAng), MW.wrapU = RW.wrapU, MW.wrapV = RW.wrapV, MW
    }
    class rz {
      constructor(WW) {
        this.name = fC, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof FR) {
          if (MW.clearCoat.isEnabled) return MW.clearCoat.texture && wW.push(MW.clearCoat.texture), !MW.clearCoat.useRoughnessFromMainTexture && MW.clearCoat.textureRoughness && wW.push(MW.clearCoat.textureRoughness), MW.clearCoat.bumpTexture && wW.push(MW.clearCoat.bumpTexture), wW
        } else if (MW instanceof ZR && MW.coatWeight > 0) {
          let WW = !1;
          if (MW.coatWeightTexture ? MW.coatRoughnessTexture ? MW._useCoatRoughnessFromGreenChannel && MW.coatWeightTexture.getInternalTexture() === MW.coatRoughnessTexture.getInternalTexture() ? (wW.push(MW.coatWeightTexture), wW.push(MW.coatRoughnessTexture)) : WW = !0 : wW.push(MW.coatWeightTexture) : MW.coatRoughnessTexture && (MW._useCoatRoughnessFromGreenChannel ? wW.push(MW.coatRoughnessTexture) : WW = !0), WW) {
            const WW = function(WW) {
              const RW = WW.coatWeightTexture,
                MW = RW && RW.getInternalTexture() ? RW.getInternalTexture().uniqueId : "NoCoat",
                wW = WW.coatRoughnessTexture;
              return `${MW}_${wW&&wW.getInternalTexture()?wW.getInternalTexture().uniqueId:"NoRoughness"}`
            }(MW);
            if (!this._cachedInternalTexturesMap[WW]) {
              const RW = await async function(WW) {
                const RW = WW.QRW(),
                  MW = WW.coatWeightTexture,
                  wW = WW.coatRoughnessTexture;
                return MW || wW ? (await AM("CoatTexture", NM(MW ? bw(MW, 0) : yw(1), wW ? bw(wW, WW._useCoatRoughnessFromGreenChannel ? 1 : 0) : yw(1)), RW)).getInternalTexture() : null
              }(MW);
              RW && (this._cachedInternalTexturesMap[WW] = RW)
            }
            this._cachedInternalTexturesMap[WW] && (MW.coatWeightTexture && (this._mergedTexturesMap[MW.coatWeightTexture.uniqueId] = QC(this._cachedInternalTexturesMap[WW], MW.coatWeightTexture), wW.push(this._mergedTexturesMap[MW.coatWeightTexture.uniqueId])), MW.coatRoughnessTexture && (this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId] = QC(this._cachedInternalTexturesMap[WW], MW.coatRoughnessTexture), wW.push(this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId])))
          }
          return MW.geometryCoatNormalTexture && wW.push(MW.geometryCoatNormalTexture), wW
        }
        return []
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof FR) {
            if (!MW.clearCoat.isEnabled) return void WW(RW);
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const wW = this._exporter._materialExporter.getTextureInfo(MW.clearCoat.texture);
            let CW;
            CW = MW.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(MW.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(MW.clearCoat.textureRoughness), MW.clearCoat.isTintEnabled && QR.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${MW.name}`), MW.clearCoat.remapF0OnInterfaceChange && QR.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${MW.name}`);
            const zR = this._exporter._materialExporter.getTextureInfo(MW.clearCoat.bumpTexture),
              AW = {
                clearcoatFactor: MW.clearCoat.intensity,
                clearcoatTexture: wW ?? void 0,
                clearcoatRoughnessFactor: MW.clearCoat.roughness,
                clearcoatRoughnessTexture: CW ?? void 0,
                clearcoatNormalTexture: zR ?? void 0
              };
            null === AW.clearcoatTexture && null === AW.clearcoatRoughnessTexture && null === AW.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[fC] = AW
          } else if (MW instanceof ZR) {
            if (0 == MW.coatWeight) return void WW(RW);
            let wW, CW, zR, AW;
            this._wasUsed = !0, RW.extensions = RW.extensions || {}, MW.coatWeightTexture && (wW = this._mergedTexturesMap[MW.coatWeightTexture.uniqueId], CW = this._exporter._materialExporter.getTextureInfo(wW)), MW.coatRoughnessTexture && (zR = this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId], AW = this._exporter._materialExporter.getTextureInfo(zR)), MW.coatColorTexture && QR.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${MW.name}`);
            const bR = this._exporter._materialExporter.getTextureInfo(MW.geometryCoatNormalTexture),
              yR = {
                clearcoatFactor: MW.coatWeight,
                clearcoatTexture: CW ?? void 0,
                clearcoatRoughnessFactor: MW.coatRoughness,
                clearcoatRoughnessTexture: AW ?? void 0,
                clearcoatNormalTexture: bR ?? void 0
              };
            null === yR.clearcoatTexture && null === yR.clearcoatRoughnessTexture && null === yR.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[fC] = yR
          }
          WW(RW)
        }))
      }
    }
    let cz = !1;

    function XC() {
      cz || (cz = !0, pw.RegisterExtension(fC, (WW => new rz(WW))))
    }
    XC();
    const jz = "KHR_materials_coat";

    function kz(WW) {
      const RW = WW.coatRoughnessAnisotropyTexture,
        MW = WW.geometryCoatTangentTexture;
      return `${RW&&RW.getInternalTexture()?RW.getInternalTexture().uniqueId:"NoStrength"}_${MW&&MW.getInternalTexture()?MW.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function az(WW, RW) {
      const MW = new kR.d(RW.name, RW.QRW());
      return MW._texture = WW, MW.coordinatesIndex = RW.coordinatesIndex, RW instanceof kR.d && (MW.uOffset = RW.uOffset, MW.vOffset = RW.vOffset, MW.uScale = RW.uScale, MW.vScale = RW.vScale, MW.wAng = RW.wAng), MW.wrapU = RW.wrapU, MW.wrapV = RW.wrapV, MW
    }
    class sC {
      constructor(WW) {
        this.name = jz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof FR) {
          if (MW.clearCoat.isEnabled) return MW.clearCoat.texture && wW.push(MW.clearCoat.texture), !MW.clearCoat.useRoughnessFromMainTexture && MW.clearCoat.textureRoughness && wW.push(MW.clearCoat.textureRoughness), MW.clearCoat.bumpTexture && wW.push(MW.clearCoat.bumpTexture), MW.clearCoat.tintTexture && wW.push(MW.clearCoat.tintTexture), wW
        } else if (MW instanceof ZR && MW.coatWeight > 0) {
          let WW = !1;
          if (MW.coatWeightTexture ? MW.coatRoughnessTexture ? MW._useCoatRoughnessFromGreenChannel && MW.coatWeightTexture.getInternalTexture() === MW.coatRoughnessTexture.getInternalTexture() ? (wW.push(MW.coatWeightTexture), wW.push(MW.coatRoughnessTexture)) : WW = !0 : wW.push(MW.coatWeightTexture) : MW.coatRoughnessTexture && (MW._useCoatRoughnessFromGreenChannel ? wW.push(MW.coatRoughnessTexture) : WW = !0), WW) {
            const WW = function(WW) {
              const RW = WW.coatWeightTexture,
                MW = RW && RW.getInternalTexture() ? RW.getInternalTexture().uniqueId : "NoCoat",
                wW = WW.coatRoughnessTexture;
              return `${MW}_${wW&&wW.getInternalTexture()?wW.getInternalTexture().uniqueId:"NoRoughness"}`
            }(MW);
            if (!this._cachedInternalTexturesMap[WW]) {
              const RW = await async function(WW) {
                const RW = WW.QRW(),
                  MW = WW.coatWeightTexture,
                  wW = WW.coatRoughnessTexture;
                return MW || wW ? (await AM("CoatTexture", NM(MW ? bw(MW, 0) : yw(1), wW ? bw(wW, WW._useCoatRoughnessFromGreenChannel ? 1 : 0) : yw(1)), RW)).getInternalTexture() : null
              }(MW);
              RW && (this._cachedInternalTexturesMap[WW] = RW)
            }
            this._cachedInternalTexturesMap[WW] && (MW.coatWeightTexture && (this._mergedTexturesMap[MW.coatWeightTexture.uniqueId] = az(this._cachedInternalTexturesMap[WW], MW.coatWeightTexture), wW.push(this._mergedTexturesMap[MW.coatWeightTexture.uniqueId])), MW.coatRoughnessTexture && (this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId] = az(this._cachedInternalTexturesMap[WW], MW.coatRoughnessTexture), wW.push(this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId])))
          }
          if (MW.geometryCoatNormalTexture && wW.push(MW.geometryCoatNormalTexture), MW.coatColorTexture && wW.push(MW.coatColorTexture), MW.coatRoughnessAnisotropy > 0) {
            const WW = kz(MW);
            if (this._mergedTexturesMap[WW]) wW.push(this._mergedTexturesMap[WW]);
            else {
              const RW = await async function(WW) {
                const RW = WW.QRW(),
                  MW = WW.coatRoughnessAnisotropyTexture,
                  wW = WW.geometryCoatTangentTexture;
                return MW || wW ? await AM("AnisotropyTexture", NM(wW ? bw(wW, 0) : yw(1), wW ? bw(wW, 1) : yw(0), MW ? bw(MW, 0) : yw(1)), RW) : null
              }(MW);
              RW && (wW.push(RW), this._mergedTexturesMap[WW] = RW)
            }
            return wW
          }
          return wW
        }
        return []
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          var wW;
          if (MW instanceof FR) {
            if (!MW.clearCoat.isEnabled) return void WW(RW);
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const wW = this._exporter._materialExporter.getTextureInfo(MW.clearCoat.texture);
            let CW, zR;
            CW = MW.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(MW.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(MW.clearCoat.textureRoughness), MW.clearCoat.isTintEnabled && (zR = this._exporter._materialExporter.getTextureInfo(MW.clearCoat.tintTexture));
            const AW = this._exporter._materialExporter.getTextureInfo(MW.clearCoat.bumpTexture),
              bR = MW.clearCoat.indexOfRefraction,
              yR = {
                coatFactor: MW.clearCoat.intensity,
                coatTexture: wW ?? void 0,
                coatRoughnessFactor: MW.clearCoat.roughness,
                coatRoughnessTexture: CW ?? void 0,
                coatNormalTexture: AW ?? void 0,
                coatColorFactor: MW.clearCoat.tintColor.JNW(),
                coatColorTexture: zR ?? void 0,
                coatIor: 1.5 !== bR ? bR : void 0
              };
            null === yR.coatTexture && null === yR.coatRoughnessTexture && null === yR.coatRoughnessTexture && null === yR.coatColorTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[jz] = yR
          } else if (MW instanceof ZR) {
            if (0 == MW.coatWeight) return void WW(RW);
            let CW, zR, AW, bR;
            this._wasUsed = !0, RW.extensions = RW.extensions || {}, MW.coatWeightTexture && (CW = this._mergedTexturesMap[MW.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[MW.coatWeightTexture.uniqueId] : MW.coatWeightTexture, zR = this._exporter._materialExporter.getTextureInfo(CW)), MW.coatRoughnessTexture && (AW = this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[MW.coatRoughnessTexture.uniqueId] : MW.coatRoughnessTexture, bR = this._exporter._materialExporter.getTextureInfo(AW));
            const yR = this._exporter._materialExporter.getTextureInfo(MW.geometryCoatNormalTexture),
              NW = this._exporter._materialExporter.getTextureInfo(MW.coatColorTexture),
              eW = MW.coatIor,
              BW = MW.coatDarkening,
              tR = MW.coatRoughnessTexture,
              TW = kz(MW),
              gR = this._mergedTexturesMap[TW];
            let iR, YW = 0,
              JW = 0;
            if (MW.coatRoughnessAnisotropy > 0) {
              if (tR || gR) {
                const WW = gR ? this._exporter._materialExporter.getTextureInfo(gR) : null;
                YW = MW.coatRoughnessAnisotropy, JW = MW.geometryCoatTangentAngle, iR = WW || void 0
              } else {
                let WW = MW.coatRoughness,
                  wW = MW.coatRoughnessAnisotropy;
                if (!MW._useGltfStyleAnisotropy) {
                  const RW = function(WW, RW) {
                    const MW = WW * WW,
                      wW = MW * Math.sqrt(2 / (1 + (1 - RW) * (1 - RW))),
                      CW = (1 - RW) * wW;
                    return {
                      newBaseRoughness: Math.sqrt(CW),
                      newAnisotropyStrength: Math.min(Math.sqrt((wW - MW) / Math.max(1 - MW, 1e-4)), 1)
                    }
                  }(MW.coatRoughness, MW.coatRoughnessAnisotropy);
                  WW = RW.newBaseRoughness, wW = RW.newAnisotropyStrength
                }
                RW.pbrMetallicRoughness && (RW.pbrMetallicRoughness.roughnessFactor = WW), YW = wW, JW = MW.geometryCoatTangentAngle + .5 * Math.PI, iR = void 0
              }
              MW._useGltfStyleAnisotropy || (RW.extensions.KHR_materials_openpbr = {}, (wW = this._exporter._glTF).extensionsUsed || (wW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const PW = {
              coatFactor: MW.coatWeight,
              coatTexture: zR ?? void 0,
              coatRoughnessFactor: MW.coatRoughness,
              coatRoughnessTexture: bR ?? void 0,
              coatNormalTexture: yR ?? void 0,
              coatColorFactor: MW.coatColor.JNW(),
              coatColorTexture: NW ?? void 0,
              coatIor: 1.5 !== eW ? eW : void 0,
              coatDarkeningFactor: 1 !== BW ? BW : void 0,
              coatAnisotropyRotation: JW,
              coatAnisotropyStrength: YW,
              coatAnisotropyTexture: iR
            };
            null === PW.coatTexture && null === PW.coatRoughnessTexture && null === PW.coatRoughnessTexture && null === PW.coatAnisotropyTexture && null === PW.coatColorTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[jz] = PW
          }
          WW(RW)
        }))
      }
    }
    let dC = !1;

    function pC() {
      dC || (dC = !0, pw.RegisterExtension(jz, (WW => new sC(WW))))
    }
    pC();
    let hC = (() => {
      var WW, RW, MW, wW, CW, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, XW, jR, kR, aR, sW, dW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, GW, LW, HW, DW, qR, ZW, SW, WR, RR, MR, wR, CR, zM, AR, bM, yM, NR, eR, BR, tM, TR, gM, iM, YR, JR, PR, IR;
      let oR, lR, QR, rM, cM, XR, jM, kM, aM, sR, dR, pR, hR, UR, ER, VR, mM, xM, vM, KR, uR, OR, nR, GR, LR, HR, DR, qM, ZR, SR, WM, RM, MM, wM, CM, zw, AM, bw, yw, NM, eM, BM, tw, TM, gw, iw, YM, JM, PM, IM, oM, lM, FM, fM, QM, rw, cwW, XM, jw, kw, aw, sM, dM, pM, hM, UM, EM, VM, mw = FR,
        xw = [],
        vw = [],
        KM = [],
        uM = [],
        OM = [],
        nM = [],
        GM = [],
        LM = [],
        HM = [],
        DM = [],
        qw = [],
        ZM = [],
        SM = [],
        Ww = [],
        Rw = [],
        Mw = [],
        ww = [],
        Cw = [],
        zC = [],
        Aw = [],
        bC = [],
        yC = [],
        Nw = [],
        ew = [],
        Bw = [],
        tC = [],
        Tw = [],
        gC = [],
        iC = [],
        Yw = [],
        Jw = [],
        Pw = [],
        Iw = [],
        ow = [],
        lw = [],
        Fw = [],
        fw = [],
        Qw = [],
        rC = [],
        cC = [],
        Xw = [],
        jC = [],
        kC = [],
        aC = [],
        sw = [],
        dw = [],
        pw = [],
        hw = [],
        Uw = [],
        Ew = [],
        Vw = [],
        mC = [],
        xC = [],
        vC = [],
        Kw = [],
        uw = [],
        Ow = [],
        nw = [],
        Gw = [],
        Lw = [],
        Hw = [],
        Dw = [],
        qC = [],
        Zw = [],
        Sw = [],
        WC = [],
        RC = [],
        MC = [],
        wC = [],
        CC = [],
        zz = [],
        AC = [],
        bz = [],
        yz = [],
        NC = [],
        eC = [],
        BC = [],
        tz = [],
        TC = [],
        gz = [],
        iz = [],
        YC = [],
        JC = [],
        PC = [],
        IC = [],
        oC = [],
        lC = [],
        FC = [],
        fC = [],
        QC = [],
        rz = [],
        cz = [],
        XC = [],
        jz = [],
        kz = [],
        az = [],
        sC = [],
        dC = [],
        pC = [],
        hC = [],
        UC = [],
        EC = [],
        VC = [],
        mz = [],
        xz = [],
        vz = [],
        KC = [],
        uC = [],
        OC = [],
        nC = [],
        GC = [],
        LC = [],
        HC = [],
        DC = [],
        qz = [],
        ZC = [],
        SC = [],
        Wz = [],
        Rz = [],
        Mz = [],
        wz = [],
        Cz = [],
        zA = [],
        Az = [],
        bA = [],
        yA = [],
        Nz = [],
        ez = [],
        Bz = [],
        tA = [],
        Tz = [],
        gA = [],
        iA = [];
      return WW = class extends mw {
        get directIntensity() {
          return (0, rR.c)(this, RW, "f")
        }
        set directIntensity(WW) {
          (0, rR.d)(this, RW, WW, "f")
        }
        get emissiveIntensity() {
          return (0, rR.c)(this, MW, "f")
        }
        set emissiveIntensity(WW) {
          (0, rR.d)(this, MW, WW, "f")
        }
        get environmentIntensity() {
          return (0, rR.c)(this, wW, "f")
        }
        set environmentIntensity(WW) {
          (0, rR.d)(this, wW, WW, "f")
        }
        get specularIntensity() {
          return (0, rR.c)(this, CW, "f")
        }
        set specularIntensity(WW) {
          (0, rR.d)(this, CW, WW, "f")
        }
        get disableBumpMap() {
          return (0, rR.c)(this, AW, "f")
        }
        set disableBumpMap(WW) {
          (0, rR.d)(this, AW, WW, "f")
        }
        get albedoTexture() {
          return (0, rR.c)(this, bR, "f")
        }
        set albedoTexture(WW) {
          (0, rR.d)(this, bR, WW, "f")
        }
        get baseWeightTexture() {
          return (0, rR.c)(this, yR, "f")
        }
        set baseWeightTexture(WW) {
          (0, rR.d)(this, yR, WW, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, rR.c)(this, NW, "f")
        }
        set baseDiffuseRoughnessTexture(WW) {
          (0, rR.d)(this, NW, WW, "f")
        }
        get ambientTexture() {
          return (0, rR.c)(this, eW, "f")
        }
        set ambientTexture(WW) {
          (0, rR.d)(this, eW, WW, "f")
        }
        get ambientTextureStrength() {
          return (0, rR.c)(this, BW, "f")
        }
        set ambientTextureStrength(WW) {
          (0, rR.d)(this, BW, WW, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, rR.c)(this, tR, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(WW) {
          (0, rR.d)(this, tR, WW, "f")
        }
        get opacityTexture() {
          return (0, rR.c)(this, TW, "f")
        }
        set opacityTexture(WW) {
          (0, rR.d)(this, TW, WW, "f")
        }
        get reflectionTexture() {
          return (0, rR.c)(this, gR, "f")
        }
        set reflectionTexture(WW) {
          (0, rR.d)(this, gR, WW, "f")
        }
        get emissiveTexture() {
          return (0, rR.c)(this, iR, "f")
        }
        set emissiveTexture(WW) {
          (0, rR.d)(this, iR, WW, "f")
        }
        get reflectivityTexture() {
          return (0, rR.c)(this, YW, "f")
        }
        set reflectivityTexture(WW) {
          (0, rR.d)(this, YW, WW, "f")
        }
        get metallicTexture() {
          return (0, rR.c)(this, JW, "f")
        }
        set metallicTexture(WW) {
          (0, rR.d)(this, JW, WW, "f")
        }
        get metallic() {
          return (0, rR.c)(this, PW, "f")
        }
        set metallic(WW) {
          (0, rR.d)(this, PW, WW, "f")
        }
        get roughness() {
          return (0, rR.c)(this, IW, "f")
        }
        set roughness(WW) {
          (0, rR.d)(this, IW, WW, "f")
        }
        get metallicF0Factor() {
          return (0, rR.c)(this, oW, "f")
        }
        set metallicF0Factor(WW) {
          (0, rR.d)(this, oW, WW, "f")
        }
        get metallicReflectanceColor() {
          return (0, rR.c)(this, lW, "f")
        }
        set metallicReflectanceColor(WW) {
          (0, rR.d)(this, lW, WW, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, rR.c)(this, FW, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(WW) {
          (0, rR.d)(this, FW, WW, "f")
        }
        get metallicReflectanceTexture() {
          return (0, rR.c)(this, fW, "f")
        }
        set metallicReflectanceTexture(WW) {
          (0, rR.d)(this, fW, WW, "f")
        }
        get reflectanceTexture() {
          return (0, rR.c)(this, QW, "f")
        }
        set reflectanceTexture(WW) {
          (0, rR.d)(this, QW, WW, "f")
        }
        get microSurfaceTexture() {
          return (0, rR.c)(this, XW, "f")
        }
        set microSurfaceTexture(WW) {
          (0, rR.d)(this, XW, WW, "f")
        }
        get bumpTexture() {
          return (0, rR.c)(this, jR, "f")
        }
        set bumpTexture(WW) {
          (0, rR.d)(this, jR, WW, "f")
        }
        get lightmapTexture() {
          return (0, rR.c)(this, kR, "f")
        }
        set lightmapTexture(WW) {
          (0, rR.d)(this, kR, WW, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(WW) {
          this.subSurface.refractionTexture = WW, WW ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, rR.c)(this, aR, "f")
        }
        set ambientColor(WW) {
          (0, rR.d)(this, aR, WW, "f")
        }
        get albedoColor() {
          return (0, rR.c)(this, sW, "f")
        }
        set albedoColor(WW) {
          (0, rR.d)(this, sW, WW, "f")
        }
        get baseWeight() {
          return (0, rR.c)(this, dW, "f")
        }
        set baseWeight(WW) {
          (0, rR.d)(this, dW, WW, "f")
        }
        get baseDiffuseRoughness() {
          return (0, rR.c)(this, hW, "f")
        }
        set baseDiffuseRoughness(WW) {
          (0, rR.d)(this, hW, WW, "f")
        }
        get reflectivityColor() {
          return (0, rR.c)(this, UW, "f")
        }
        set reflectivityColor(WW) {
          (0, rR.d)(this, UW, WW, "f")
        }
        get reflectionColor() {
          return (0, rR.c)(this, EW, "f")
        }
        set reflectionColor(WW) {
          (0, rR.d)(this, EW, WW, "f")
        }
        get emissiveColor() {
          return (0, rR.c)(this, VW, "f")
        }
        set emissiveColor(WW) {
          (0, rR.d)(this, VW, WW, "f")
        }
        get microSurface() {
          return (0, rR.c)(this, mR, "f")
        }
        set microSurface(WW) {
          (0, rR.d)(this, mR, WW, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(WW) {
          this.subSurface.indexOfRefraction = WW
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(WW) {
          this.subSurface.invertRefractionY = WW
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(WW) {
          this.subSurface.linkRefractionWithTransparency = WW, WW && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, rR.c)(this, xR, "f")
        }
        set useLightmapAsShadowmap(WW) {
          (0, rR.d)(this, xR, WW, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, rR.c)(this, vR, "f")
        }
        set useAlphaFromAlbedoTexture(WW) {
          (0, rR.d)(this, vR, WW, "f")
        }
        get forceAlphaTest() {
          return (0, rR.c)(this, KW, "f")
        }
        set forceAlphaTest(WW) {
          (0, rR.d)(this, KW, WW, "f")
        }
        get alphaCutOff() {
          return (0, rR.c)(this, uW, "f")
        }
        set alphaCutOff(WW) {
          (0, rR.d)(this, uW, WW, "f")
        }
        get useSpecularOverAlpha() {
          return (0, rR.c)(this, OW, "f")
        }
        set useSpecularOverAlpha(WW) {
          (0, rR.d)(this, OW, WW, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, rR.c)(this, GW, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(WW) {
          (0, rR.d)(this, GW, WW, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, rR.c)(this, LW, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(WW) {
          (0, rR.d)(this, LW, WW, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, rR.c)(this, HW, "f")
        }
        set useRoughnessFromMetallicTextureGreen(WW) {
          (0, rR.d)(this, HW, WW, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, rR.c)(this, DW, "f")
        }
        set useMetallnessFromMetallicTextureBlue(WW) {
          (0, rR.d)(this, DW, WW, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, rR.c)(this, qR, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(WW) {
          (0, rR.d)(this, qR, WW, "f")
        }
        get useAmbientInGrayScale() {
          return (0, rR.c)(this, ZW, "f")
        }
        set useAmbientInGrayScale(WW) {
          (0, rR.d)(this, ZW, WW, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, rR.c)(this, SW, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(WW) {
          (0, rR.d)(this, SW, WW, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === FR.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(WW) {
          WW !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? FR.LIGHTFALLOFF_PHYSICAL : FR.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === FR.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(WW) {
          WW !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? FR.LIGHTFALLOFF_GLTF : FR.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, rR.c)(this, WR, "f")
        }
        set useRadianceOverAlpha(WW) {
          (0, rR.d)(this, WR, WW, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, rR.c)(this, RR, "f")
        }
        set useObjectSpaceNormalMap(WW) {
          (0, rR.d)(this, RR, WW, "f")
        }
        get useParallax() {
          return (0, rR.c)(this, MR, "f")
        }
        set useParallax(WW) {
          (0, rR.d)(this, MR, WW, "f")
        }
        get useParallaxOcclusion() {
          return (0, rR.c)(this, wR, "f")
        }
        set useParallaxOcclusion(WW) {
          (0, rR.d)(this, wR, WW, "f")
        }
        get parallaxScaleBias() {
          return (0, rR.c)(this, CR, "f")
        }
        set parallaxScaleBias(WW) {
          (0, rR.d)(this, CR, WW, "f")
        }
        get disableLighting() {
          return (0, rR.c)(this, zM, "f")
        }
        set disableLighting(WW) {
          (0, rR.d)(this, zM, WW, "f")
        }
        get forceIrradianceInFragment() {
          return (0, rR.c)(this, AR, "f")
        }
        set forceIrradianceInFragment(WW) {
          (0, rR.d)(this, AR, WW, "f")
        }
        get maxSimultaneousLights() {
          return (0, rR.c)(this, bM, "f")
        }
        set maxSimultaneousLights(WW) {
          (0, rR.d)(this, bM, WW, "f")
        }
        get invertNormalMapX() {
          return (0, rR.c)(this, yM, "f")
        }
        set invertNormalMapX(WW) {
          (0, rR.d)(this, yM, WW, "f")
        }
        get invertNormalMapY() {
          return (0, rR.c)(this, NR, "f")
        }
        set invertNormalMapY(WW) {
          (0, rR.d)(this, NR, WW, "f")
        }
        get twoSidedLighting() {
          return (0, rR.c)(this, eR, "f")
        }
        set twoSidedLighting(WW) {
          (0, rR.d)(this, eR, WW, "f")
        }
        get useAlphaFresnel() {
          return (0, rR.c)(this, BR, "f")
        }
        set useAlphaFresnel(WW) {
          (0, rR.d)(this, BR, WW, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, rR.c)(this, tM, "f")
        }
        set useLinearAlphaFresnel(WW) {
          (0, rR.d)(this, tM, WW, "f")
        }
        get environmentBRDFTexture() {
          return (0, rR.c)(this, TR, "f")
        }
        set environmentBRDFTexture(WW) {
          (0, rR.d)(this, TR, WW, "f")
        }
        get forceNormalForward() {
          return (0, rR.c)(this, gM, "f")
        }
        set forceNormalForward(WW) {
          (0, rR.d)(this, gM, WW, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, rR.c)(this, iM, "f")
        }
        set enableSpecularAntiAliasing(WW) {
          (0, rR.d)(this, iM, WW, "f")
        }
        get useHorizonOcclusion() {
          return (0, rR.c)(this, YR, "f")
        }
        set useHorizonOcclusion(WW) {
          (0, rR.d)(this, YR, WW, "f")
        }
        get useRadianceOcclusion() {
          return (0, rR.c)(this, JR, "f")
        }
        set useRadianceOcclusion(WW) {
          (0, rR.d)(this, JR, WW, "f")
        }
        get unlit() {
          return (0, rR.c)(this, PR, "f")
        }
        set unlit(WW) {
          (0, rR.d)(this, PR, WW, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, rR.c)(this, IR, "f")
        }
        set applyDecalMapAfterDetailMap(WW) {
          (0, rR.d)(this, IR, WW, "f")
        }
        constructor(zR, cR) {
          super(zR, cR, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), RW.set(this, ((0, rR.i)(this, xw), (0, rR.i)(this, vw, 1))), MW.set(this, ((0, rR.i)(this, KM), (0, rR.i)(this, uM, 1))), wW.set(this, ((0, rR.i)(this, OM), (0, rR.i)(this, nM, 1))), CW.set(this, ((0, rR.i)(this, GM), (0, rR.i)(this, LM, 1))), AW.set(this, ((0, rR.i)(this, HM), (0, rR.i)(this, DM, !1))), bR.set(this, ((0, rR.i)(this, qw), (0, rR.i)(this, ZM, void 0))), yR.set(this, ((0, rR.i)(this, SM), (0, rR.i)(this, Ww, void 0))), NW.set(this, ((0, rR.i)(this, Rw), (0, rR.i)(this, Mw, void 0))), eW.set(this, ((0, rR.i)(this, ww), (0, rR.i)(this, Cw, void 0))), BW.set(this, ((0, rR.i)(this, zC), (0, rR.i)(this, Aw, 1))), tR.set(this, ((0, rR.i)(this, bC), (0, rR.i)(this, yC, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), TW.set(this, ((0, rR.i)(this, Nw), (0, rR.i)(this, ew, void 0))), gR.set(this, ((0, rR.i)(this, Bw), (0, rR.i)(this, tC, void 0))), iR.set(this, ((0, rR.i)(this, Tw), (0, rR.i)(this, gC, void 0))), YW.set(this, ((0, rR.i)(this, iC), (0, rR.i)(this, Yw, void 0))), JW.set(this, ((0, rR.i)(this, Jw), (0, rR.i)(this, Pw, void 0))), PW.set(this, ((0, rR.i)(this, Iw), (0, rR.i)(this, ow, void 0))), IW.set(this, ((0, rR.i)(this, lw), (0, rR.i)(this, Fw, void 0))), oW.set(this, ((0, rR.i)(this, fw), (0, rR.i)(this, Qw, 1))), lW.set(this, ((0, rR.i)(this, rC), (0, rR.i)(this, cC, nW.d.White()))), FW.set(this, ((0, rR.i)(this, Xw), (0, rR.i)(this, jC, !1))), fW.set(this, ((0, rR.i)(this, kC), (0, rR.i)(this, aC, void 0))), QW.set(this, ((0, rR.i)(this, sw), (0, rR.i)(this, dw, void 0))), XW.set(this, ((0, rR.i)(this, pw), (0, rR.i)(this, hw, void 0))), jR.set(this, ((0, rR.i)(this, Uw), (0, rR.i)(this, Ew, void 0))), kR.set(this, ((0, rR.i)(this, Vw), (0, rR.i)(this, mC, void 0))), aR.set(this, ((0, rR.i)(this, xC), (0, rR.i)(this, vC, new nW.d(0, 0, 0)))), sW.set(this, ((0, rR.i)(this, Kw), (0, rR.i)(this, uw, new nW.d(1, 1, 1)))), dW.set(this, ((0, rR.i)(this, Ow), (0, rR.i)(this, nw, 1))), hW.set(this, ((0, rR.i)(this, Gw), (0, rR.i)(this, Lw, void 0))), UW.set(this, ((0, rR.i)(this, Hw), (0, rR.i)(this, Dw, new nW.d(1, 1, 1)))), EW.set(this, ((0, rR.i)(this, qC), (0, rR.i)(this, Zw, new nW.d(1, 1, 1)))), VW.set(this, ((0, rR.i)(this, Sw), (0, rR.i)(this, WC, new nW.d(0, 0, 0)))), mR.set(this, ((0, rR.i)(this, RC), (0, rR.i)(this, MC, 1))), xR.set(this, ((0, rR.i)(this, wC), (0, rR.i)(this, CC, !1))), vR.set(this, ((0, rR.i)(this, zz), (0, rR.i)(this, AC, !1))), KW.set(this, ((0, rR.i)(this, bz), (0, rR.i)(this, yz, !1))), uW.set(this, ((0, rR.i)(this, NC), (0, rR.i)(this, eC, .4))), OW.set(this, ((0, rR.i)(this, BC), (0, rR.i)(this, tz, !0))), GW.set(this, ((0, rR.i)(this, TC), (0, rR.i)(this, gz, !1))), LW.set(this, ((0, rR.i)(this, iz), (0, rR.i)(this, YC, !0))), HW.set(this, ((0, rR.i)(this, JC), (0, rR.i)(this, PC, !1))), DW.set(this, ((0, rR.i)(this, IC), (0, rR.i)(this, oC, !1))), qR.set(this, ((0, rR.i)(this, lC), (0, rR.i)(this, FC, !1))), ZW.set(this, ((0, rR.i)(this, fC), (0, rR.i)(this, QC, !1))), SW.set(this, ((0, rR.i)(this, rz), (0, rR.i)(this, cz, !1))), WR.set(this, ((0, rR.i)(this, XC), (0, rR.i)(this, jz, !0))), RR.set(this, ((0, rR.i)(this, kz), (0, rR.i)(this, az, !1))), MR.set(this, ((0, rR.i)(this, sC), (0, rR.i)(this, dC, !1))), wR.set(this, ((0, rR.i)(this, pC), (0, rR.i)(this, hC, !1))), CR.set(this, ((0, rR.i)(this, UC), (0, rR.i)(this, EC, .05))), zM.set(this, ((0, rR.i)(this, VC), (0, rR.i)(this, mz, !1))), AR.set(this, ((0, rR.i)(this, xz), (0, rR.i)(this, vz, !1))), bM.set(this, ((0, rR.i)(this, KC), (0, rR.i)(this, uC, 4))), yM.set(this, ((0, rR.i)(this, OC), (0, rR.i)(this, nC, !1))), NR.set(this, ((0, rR.i)(this, GC), (0, rR.i)(this, LC, !1))), eR.set(this, ((0, rR.i)(this, HC), (0, rR.i)(this, DC, !1))), BR.set(this, ((0, rR.i)(this, qz), (0, rR.i)(this, ZC, !1))), tM.set(this, ((0, rR.i)(this, SC), (0, rR.i)(this, Wz, !1))), TR.set(this, ((0, rR.i)(this, Rz), (0, rR.i)(this, Mz, null))), gM.set(this, ((0, rR.i)(this, wz), (0, rR.i)(this, Cz, !1))), iM.set(this, ((0, rR.i)(this, zA), (0, rR.i)(this, Az, !1))), YR.set(this, ((0, rR.i)(this, bA), (0, rR.i)(this, yA, !0))), JR.set(this, ((0, rR.i)(this, Nz), (0, rR.i)(this, ez, !0))), PR.set(this, ((0, rR.i)(this, Bz), (0, rR.i)(this, tA, !1))), IR.set(this, ((0, rR.i)(this, Tz), (0, rR.i)(this, gA, !1))), (0, rR.i)(this, iA), this._environmentBRDFTexture = pW(this.QRW())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(RW) {
          let MW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const CW = fR.d.Clone((() => new WW(RW, this.QRW())), this, {
            cloneTexturesOnlyOnce: MW
          });
          return CW.id = RW, CW.name = RW, this.stencil.copyTo(CW.stencil), this._clonePlugins(CW, wW), CW
        }
        serialize() {
          const WW = super.serialize();
          return WW.customType = "BABYLON.PBRMaterial", WW
        }
        static Parse(RW, MW, wW) {
          const CW = fR.d.Parse((() => new WW(RW.name, MW)), RW, MW, wW);
          return RW.stencil && CW.stencil.parse(RW.stencil, MW, wW), zR.e._ParsePlugins(RW, CW, MW, wW), RW.clearCoat && CW.clearCoat.parse(RW.clearCoat, MW, wW), RW.anisotropy && CW.anisotropy.parse(RW.anisotropy, MW, wW), RW.brdf && CW.brdf.parse(RW.brdf, MW, wW), RW.sheen && CW.sheen.parse(RW.sheen, MW, wW), RW.subSurface && CW.subSurface.parse(RW.subSurface, MW, wW), RW.iridescence && CW.iridescence.parse(RW.iridescence, MW, wW), CW
        }
      }, RW = new WeakMap, MW = new WeakMap, wW = new WeakMap, CW = new WeakMap, AW = new WeakMap, bR = new WeakMap, yR = new WeakMap, NW = new WeakMap, eW = new WeakMap, BW = new WeakMap, tR = new WeakMap, TW = new WeakMap, gR = new WeakMap, iR = new WeakMap, YW = new WeakMap, JW = new WeakMap, PW = new WeakMap, IW = new WeakMap, oW = new WeakMap, lW = new WeakMap, FW = new WeakMap, fW = new WeakMap, QW = new WeakMap, XW = new WeakMap, jR = new WeakMap, kR = new WeakMap, aR = new WeakMap, sW = new WeakMap, dW = new WeakMap, hW = new WeakMap, UW = new WeakMap, EW = new WeakMap, VW = new WeakMap, mR = new WeakMap, xR = new WeakMap, vR = new WeakMap, KW = new WeakMap, uW = new WeakMap, OW = new WeakMap, GW = new WeakMap, LW = new WeakMap, HW = new WeakMap, DW = new WeakMap, qR = new WeakMap, ZW = new WeakMap, SW = new WeakMap, WR = new WeakMap, RR = new WeakMap, MR = new WeakMap, wR = new WeakMap, CR = new WeakMap, zM = new WeakMap, AR = new WeakMap, bM = new WeakMap, yM = new WeakMap, NR = new WeakMap, eR = new WeakMap, BR = new WeakMap, tM = new WeakMap, TR = new WeakMap, gM = new WeakMap, iM = new WeakMap, YR = new WeakMap, JR = new WeakMap, PR = new WeakMap, IR = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(mw[Symbol.metadata] ?? null) : void 0;
        oR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], lR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], QR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], rM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], cM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], XR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], kM = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], aM = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], sR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], dR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], pR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], hR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], ER = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], mM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], xM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], vM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], KR = [(0, cR.m)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], GR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], HR = [(0, cR.y)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty", null)], DR = [(0, cR.m)("ambient"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], qM = [(0, cR.m)("albedo"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], ZR = [(0, cR.D)("baseWeight"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], SR = [(0, cR.D)("baseDiffuseRoughness"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], WM = [(0, cR.m)("reflectivity"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], RM = [(0, cR.m)("reflection"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], MM = [(0, cR.m)("emissive"), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], wM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], CM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], AM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], bw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], yw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], NM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], eM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], BM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], tw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], TM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], gw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], YM = [(0, cR.D)()], JM = [(0, cR.D)()], PM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], IM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], oM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], lM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], FM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsLightsDirty")], QM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], rw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsLightsDirty")], cwW = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], XM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], kw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], sM = [(0, cR.h)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], pM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], VM = [(0, cR.D)(), (0, cR.h)("_markAllSubMeshesAsMiscDirty")], (0, rR.e)(WW, null, oR, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "directIntensity" in WW,
            get: WW => WW.directIntensity,
            set: (WW, RW) => {
              WW.directIntensity = RW
            }
          },
          metadata: RW
        }, vw, KM), (0, rR.e)(WW, null, lR, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveIntensity" in WW,
            get: WW => WW.emissiveIntensity,
            set: (WW, RW) => {
              WW.emissiveIntensity = RW
            }
          },
          metadata: RW
        }, uM, OM), (0, rR.e)(WW, null, QR, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "environmentIntensity" in WW,
            get: WW => WW.environmentIntensity,
            set: (WW, RW) => {
              WW.environmentIntensity = RW
            }
          },
          metadata: RW
        }, nM, GM), (0, rR.e)(WW, null, rM, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "specularIntensity" in WW,
            get: WW => WW.specularIntensity,
            set: (WW, RW) => {
              WW.specularIntensity = RW
            }
          },
          metadata: RW
        }, LM, HM), (0, rR.e)(WW, null, cM, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableBumpMap" in WW,
            get: WW => WW.disableBumpMap,
            set: (WW, RW) => {
              WW.disableBumpMap = RW
            }
          },
          metadata: RW
        }, DM, qw), (0, rR.e)(WW, null, XR, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoTexture" in WW,
            get: WW => WW.albedoTexture,
            set: (WW, RW) => {
              WW.albedoTexture = RW
            }
          },
          metadata: RW
        }, ZM, SM), (0, rR.e)(WW, null, jM, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseWeightTexture" in WW,
            get: WW => WW.baseWeightTexture,
            set: (WW, RW) => {
              WW.baseWeightTexture = RW
            }
          },
          metadata: RW
        }, Ww, Rw), (0, rR.e)(WW, null, kM, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseRoughnessTexture" in WW,
            get: WW => WW.baseDiffuseRoughnessTexture,
            set: (WW, RW) => {
              WW.baseDiffuseRoughnessTexture = RW
            }
          },
          metadata: RW
        }, Mw, ww), (0, rR.e)(WW, null, aM, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTexture" in WW,
            get: WW => WW.ambientTexture,
            set: (WW, RW) => {
              WW.ambientTexture = RW
            }
          },
          metadata: RW
        }, Cw, zC), (0, rR.e)(WW, null, sR, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTextureStrength" in WW,
            get: WW => WW.ambientTextureStrength,
            set: (WW, RW) => {
              WW.ambientTextureStrength = RW
            }
          },
          metadata: RW
        }, Aw, bC), (0, rR.e)(WW, null, dR, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTextureImpactOnAnalyticalLights" in WW,
            get: WW => WW.ambientTextureImpactOnAnalyticalLights,
            set: (WW, RW) => {
              WW.ambientTextureImpactOnAnalyticalLights = RW
            }
          },
          metadata: RW
        }, yC, Nw), (0, rR.e)(WW, null, pR, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "opacityTexture" in WW,
            get: WW => WW.opacityTexture,
            set: (WW, RW) => {
              WW.opacityTexture = RW
            }
          },
          metadata: RW
        }, ew, Bw), (0, rR.e)(WW, null, hR, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectionTexture" in WW,
            get: WW => WW.reflectionTexture,
            set: (WW, RW) => {
              WW.reflectionTexture = RW
            }
          },
          metadata: RW
        }, tC, Tw), (0, rR.e)(WW, null, UR, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveTexture" in WW,
            get: WW => WW.emissiveTexture,
            set: (WW, RW) => {
              WW.emissiveTexture = RW
            }
          },
          metadata: RW
        }, gC, iC), (0, rR.e)(WW, null, ER, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectivityTexture" in WW,
            get: WW => WW.reflectivityTexture,
            set: (WW, RW) => {
              WW.reflectivityTexture = RW
            }
          },
          metadata: RW
        }, Yw, Jw), (0, rR.e)(WW, null, VR, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicTexture" in WW,
            get: WW => WW.metallicTexture,
            set: (WW, RW) => {
              WW.metallicTexture = RW
            }
          },
          metadata: RW
        }, Pw, Iw), (0, rR.e)(WW, null, mM, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallic" in WW,
            get: WW => WW.metallic,
            set: (WW, RW) => {
              WW.metallic = RW
            }
          },
          metadata: RW
        }, ow, lw), (0, rR.e)(WW, null, xM, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, RW) => {
              WW.roughness = RW
            }
          },
          metadata: RW
        }, Fw, fw), (0, rR.e)(WW, null, vM, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicF0Factor" in WW,
            get: WW => WW.metallicF0Factor,
            set: (WW, RW) => {
              WW.metallicF0Factor = RW
            }
          },
          metadata: RW
        }, Qw, rC), (0, rR.e)(WW, null, KR, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicReflectanceColor" in WW,
            get: WW => WW.metallicReflectanceColor,
            set: (WW, RW) => {
              WW.metallicReflectanceColor = RW
            }
          },
          metadata: RW
        }, cC, Xw), (0, rR.e)(WW, null, uR, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useOnlyMetallicFromMetallicReflectanceTexture" in WW,
            get: WW => WW.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (WW, RW) => {
              WW.useOnlyMetallicFromMetallicReflectanceTexture = RW
            }
          },
          metadata: RW
        }, jC, kC), (0, rR.e)(WW, null, OR, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicReflectanceTexture" in WW,
            get: WW => WW.metallicReflectanceTexture,
            set: (WW, RW) => {
              WW.metallicReflectanceTexture = RW
            }
          },
          metadata: RW
        }, aC, sw), (0, rR.e)(WW, null, nR, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectanceTexture" in WW,
            get: WW => WW.reflectanceTexture,
            set: (WW, RW) => {
              WW.reflectanceTexture = RW
            }
          },
          metadata: RW
        }, dw, pw), (0, rR.e)(WW, null, GR, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "microSurfaceTexture" in WW,
            get: WW => WW.microSurfaceTexture,
            set: (WW, RW) => {
              WW.microSurfaceTexture = RW
            }
          },
          metadata: RW
        }, hw, Uw), (0, rR.e)(WW, null, LR, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpTexture" in WW,
            get: WW => WW.bumpTexture,
            set: (WW, RW) => {
              WW.bumpTexture = RW
            }
          },
          metadata: RW
        }, Ew, Vw), (0, rR.e)(WW, null, HR, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "lightmapTexture" in WW,
            get: WW => WW.lightmapTexture,
            set: (WW, RW) => {
              WW.lightmapTexture = RW
            }
          },
          metadata: RW
        }, mC, xC), (0, rR.e)(WW, null, DR, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientColor" in WW,
            get: WW => WW.ambientColor,
            set: (WW, RW) => {
              WW.ambientColor = RW
            }
          },
          metadata: RW
        }, vC, Kw), (0, rR.e)(WW, null, qM, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoColor" in WW,
            get: WW => WW.albedoColor,
            set: (WW, RW) => {
              WW.albedoColor = RW
            }
          },
          metadata: RW
        }, uw, Ow), (0, rR.e)(WW, null, ZR, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseWeight" in WW,
            get: WW => WW.baseWeight,
            set: (WW, RW) => {
              WW.baseWeight = RW
            }
          },
          metadata: RW
        }, nw, Gw), (0, rR.e)(WW, null, SR, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseRoughness" in WW,
            get: WW => WW.baseDiffuseRoughness,
            set: (WW, RW) => {
              WW.baseDiffuseRoughness = RW
            }
          },
          metadata: RW
        }, Lw, Hw), (0, rR.e)(WW, null, WM, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectivityColor" in WW,
            get: WW => WW.reflectivityColor,
            set: (WW, RW) => {
              WW.reflectivityColor = RW
            }
          },
          metadata: RW
        }, Dw, qC), (0, rR.e)(WW, null, RM, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectionColor" in WW,
            get: WW => WW.reflectionColor,
            set: (WW, RW) => {
              WW.reflectionColor = RW
            }
          },
          metadata: RW
        }, Zw, Sw), (0, rR.e)(WW, null, MM, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveColor" in WW,
            get: WW => WW.emissiveColor,
            set: (WW, RW) => {
              WW.emissiveColor = RW
            }
          },
          metadata: RW
        }, WC, RC), (0, rR.e)(WW, null, wM, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: WW => "microSurface" in WW,
            get: WW => WW.microSurface,
            set: (WW, RW) => {
              WW.microSurface = RW
            }
          },
          metadata: RW
        }, MC, wC), (0, rR.e)(WW, null, CM, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLightmapAsShadowmap" in WW,
            get: WW => WW.useLightmapAsShadowmap,
            set: (WW, RW) => {
              WW.useLightmapAsShadowmap = RW
            }
          },
          metadata: RW
        }, CC, zz), (0, rR.e)(WW, null, zw, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlphaFromAlbedoTexture" in WW,
            get: WW => WW.useAlphaFromAlbedoTexture,
            set: (WW, RW) => {
              WW.useAlphaFromAlbedoTexture = RW
            }
          },
          metadata: RW
        }, AC, bz), (0, rR.e)(WW, null, AM, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceAlphaTest" in WW,
            get: WW => WW.forceAlphaTest,
            set: (WW, RW) => {
              WW.forceAlphaTest = RW
            }
          },
          metadata: RW
        }, yz, NC), (0, rR.e)(WW, null, bw, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: WW => "alphaCutOff" in WW,
            get: WW => WW.alphaCutOff,
            set: (WW, RW) => {
              WW.alphaCutOff = RW
            }
          },
          metadata: RW
        }, eC, BC), (0, rR.e)(WW, null, yw, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSpecularOverAlpha" in WW,
            get: WW => WW.useSpecularOverAlpha,
            set: (WW, RW) => {
              WW.useSpecularOverAlpha = RW
            }
          },
          metadata: RW
        }, tz, TC), (0, rR.e)(WW, null, NM, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMicroSurfaceFromReflectivityMapAlpha" in WW,
            get: WW => WW.useMicroSurfaceFromReflectivityMapAlpha,
            set: (WW, RW) => {
              WW.useMicroSurfaceFromReflectivityMapAlpha = RW
            }
          },
          metadata: RW
        }, gz, iz), (0, rR.e)(WW, null, eM, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMetallicTextureAlpha" in WW,
            get: WW => WW.useRoughnessFromMetallicTextureAlpha,
            set: (WW, RW) => {
              WW.useRoughnessFromMetallicTextureAlpha = RW
            }
          },
          metadata: RW
        }, YC, JC), (0, rR.e)(WW, null, BM, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMetallicTextureGreen" in WW,
            get: WW => WW.useRoughnessFromMetallicTextureGreen,
            set: (WW, RW) => {
              WW.useRoughnessFromMetallicTextureGreen = RW
            }
          },
          metadata: RW
        }, PC, IC), (0, rR.e)(WW, null, tw, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMetallnessFromMetallicTextureBlue" in WW,
            get: WW => WW.useMetallnessFromMetallicTextureBlue,
            set: (WW, RW) => {
              WW.useMetallnessFromMetallicTextureBlue = RW
            }
          },
          metadata: RW
        }, oC, lC), (0, rR.e)(WW, null, TM, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAmbientOcclusionFromMetallicTextureRed" in WW,
            get: WW => WW.useAmbientOcclusionFromMetallicTextureRed,
            set: (WW, RW) => {
              WW.useAmbientOcclusionFromMetallicTextureRed = RW
            }
          },
          metadata: RW
        }, FC, fC), (0, rR.e)(WW, null, gw, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAmbientInGrayScale" in WW,
            get: WW => WW.useAmbientInGrayScale,
            set: (WW, RW) => {
              WW.useAmbientInGrayScale = RW
            }
          },
          metadata: RW
        }, QC, rz), (0, rR.e)(WW, null, iw, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAutoMicroSurfaceFromReflectivityMap" in WW,
            get: WW => WW.useAutoMicroSurfaceFromReflectivityMap,
            set: (WW, RW) => {
              WW.useAutoMicroSurfaceFromReflectivityMap = RW
            }
          },
          metadata: RW
        }, cz, XC), (0, rR.e)(WW, null, YM, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: WW => "usePhysicalLightFalloff" in WW,
            get: WW => WW.usePhysicalLightFalloff
          },
          metadata: RW
        }, null, xw), (0, rR.e)(WW, null, JM, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: WW => "useGLTFLightFalloff" in WW,
            get: WW => WW.useGLTFLightFalloff
          },
          metadata: RW
        }, null, xw), (0, rR.e)(WW, null, PM, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRadianceOverAlpha" in WW,
            get: WW => WW.useRadianceOverAlpha,
            set: (WW, RW) => {
              WW.useRadianceOverAlpha = RW
            }
          },
          metadata: RW
        }, jz, kz), (0, rR.e)(WW, null, IM, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useObjectSpaceNormalMap" in WW,
            get: WW => WW.useObjectSpaceNormalMap,
            set: (WW, RW) => {
              WW.useObjectSpaceNormalMap = RW
            }
          },
          metadata: RW
        }, az, sC), (0, rR.e)(WW, null, oM, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: WW => "useParallax" in WW,
            get: WW => WW.useParallax,
            set: (WW, RW) => {
              WW.useParallax = RW
            }
          },
          metadata: RW
        }, dC, pC), (0, rR.e)(WW, null, lM, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useParallaxOcclusion" in WW,
            get: WW => WW.useParallaxOcclusion,
            set: (WW, RW) => {
              WW.useParallaxOcclusion = RW
            }
          },
          metadata: RW
        }, hC, UC), (0, rR.e)(WW, null, FM, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: WW => "parallaxScaleBias" in WW,
            get: WW => WW.parallaxScaleBias,
            set: (WW, RW) => {
              WW.parallaxScaleBias = RW
            }
          },
          metadata: RW
        }, EC, VC), (0, rR.e)(WW, null, fM, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableLighting" in WW,
            get: WW => WW.disableLighting,
            set: (WW, RW) => {
              WW.disableLighting = RW
            }
          },
          metadata: RW
        }, mz, xz), (0, rR.e)(WW, null, QM, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceIrradianceInFragment" in WW,
            get: WW => WW.forceIrradianceInFragment,
            set: (WW, RW) => {
              WW.forceIrradianceInFragment = RW
            }
          },
          metadata: RW
        }, vz, KC), (0, rR.e)(WW, null, rw, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: WW => "maxSimultaneousLights" in WW,
            get: WW => WW.maxSimultaneousLights,
            set: (WW, RW) => {
              WW.maxSimultaneousLights = RW
            }
          },
          metadata: RW
        }, uC, OC), (0, rR.e)(WW, null, cwW, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertNormalMapX" in WW,
            get: WW => WW.invertNormalMapX,
            set: (WW, RW) => {
              WW.invertNormalMapX = RW
            }
          },
          metadata: RW
        }, nC, GC), (0, rR.e)(WW, null, XM, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertNormalMapY" in WW,
            get: WW => WW.invertNormalMapY,
            set: (WW, RW) => {
              WW.invertNormalMapY = RW
            }
          },
          metadata: RW
        }, LC, HC), (0, rR.e)(WW, null, jw, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: WW => "twoSidedLighting" in WW,
            get: WW => WW.twoSidedLighting,
            set: (WW, RW) => {
              WW.twoSidedLighting = RW
            }
          },
          metadata: RW
        }, DC, qz), (0, rR.e)(WW, null, kw, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlphaFresnel" in WW,
            get: WW => WW.useAlphaFresnel,
            set: (WW, RW) => {
              WW.useAlphaFresnel = RW
            }
          },
          metadata: RW
        }, ZC, SC), (0, rR.e)(WW, null, aw, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLinearAlphaFresnel" in WW,
            get: WW => WW.useLinearAlphaFresnel,
            set: (WW, RW) => {
              WW.useLinearAlphaFresnel = RW
            }
          },
          metadata: RW
        }, Wz, Rz), (0, rR.e)(WW, null, sM, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "environmentBRDFTexture" in WW,
            get: WW => WW.environmentBRDFTexture,
            set: (WW, RW) => {
              WW.environmentBRDFTexture = RW
            }
          },
          metadata: RW
        }, Mz, wz), (0, rR.e)(WW, null, dM, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceNormalForward" in WW,
            get: WW => WW.forceNormalForward,
            set: (WW, RW) => {
              WW.forceNormalForward = RW
            }
          },
          metadata: RW
        }, Cz, zA), (0, rR.e)(WW, null, pM, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: WW => "enableSpecularAntiAliasing" in WW,
            get: WW => WW.enableSpecularAntiAliasing,
            set: (WW, RW) => {
              WW.enableSpecularAntiAliasing = RW
            }
          },
          metadata: RW
        }, Az, bA), (0, rR.e)(WW, null, hM, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useHorizonOcclusion" in WW,
            get: WW => WW.useHorizonOcclusion,
            set: (WW, RW) => {
              WW.useHorizonOcclusion = RW
            }
          },
          metadata: RW
        }, yA, Nz), (0, rR.e)(WW, null, UM, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRadianceOcclusion" in WW,
            get: WW => WW.useRadianceOcclusion,
            set: (WW, RW) => {
              WW.useRadianceOcclusion = RW
            }
          },
          metadata: RW
        }, ez, Bz), (0, rR.e)(WW, null, EM, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: WW => "unlit" in WW,
            get: WW => WW.unlit,
            set: (WW, RW) => {
              WW.unlit = RW
            }
          },
          metadata: RW
        }, tA, Tz), (0, rR.e)(WW, null, VM, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "applyDecalMapAfterDetailMap" in WW,
            get: WW => WW.applyDecalMapAfterDetailMap,
            set: (WW, RW) => {
              WW.applyDecalMapAfterDetailMap = RW
            }
          },
          metadata: RW
        }, gA, iA), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW.PBRMATERIAL_OPAQUE = FR.PBRMATERIAL_OPAQUE, WW.PBRMATERIAL_ALPHATEST = FR.PBRMATERIAL_ALPHATEST, WW.PBRMATERIAL_ALPHABLEND = FR.PBRMATERIAL_ALPHABLEND, WW.PBRMATERIAL_ALPHATESTANDBLEND = FR.PBRMATERIAL_ALPHATESTANDBLEND, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = FR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, WW
    })();
    const UC = "KHR_materials_diffuse_transmission";

    function EC(WW, RW) {
      const MW = RW.subSurface;
      let wW = null;
      return MW.translucencyIntensityTexture ? wW = MW.translucencyIntensityTexture : MW.thicknessTexture && MW.useMaskFromThicknessTexture && (wW = MW.thicknessTexture), wW && !MW.useGltfStyleTextures ? (XW.b.Warn(`${WW}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${RW.name}`, 1), null) : wW
    }
    class VC {
      constructor(WW) {
        this.name = UC, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof hC && this._isExtensionEnabled(MW)) {
          const RW = EC(WW, MW);
          return RW && wW.push(RW), MW.subSurface.translucencyColorTexture && wW.push(MW.subSurface.translucencyColorTexture), wW
        }
        return wW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const RW = WW.subSurface;
        return !!RW.isTranslucencyEnabled && (!WW.unlit && !RW.useAlbedoToTintTranslucency && RW.useGltfStyleTextures && 1 === RW.volumeIndexOfRefraction && 0 === RW.minimumThickness && 0 === RW.maximumThickness)
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((wW => {
          if (MW instanceof hC && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            const wW = MW.subSurface,
              CW = EC(WW, MW),
              zR = 0 == wW.translucencyIntensity ? void 0 : wW.translucencyIntensity,
              AW = this._exporter._materialExporter.getTextureInfo(CW) ?? void 0,
              bR = !wW.translucencyColor || wW.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : wW.translucencyColor.JNW(),
              yR = this._exporter._materialExporter.getTextureInfo(wW.translucencyColorTexture) ?? void 0,
              NW = {
                diffuseTransmissionFactor: zR,
                diffuseTransmissionTexture: AW,
                diffuseTransmissionColorFactor: bR,
                diffuseTransmissionColorTexture: yR
              };
            (AW || yR) && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions = RW.extensions || {}, RW.extensions[UC] = NW
          }
          wW(RW)
        }))
      }
    }
    let mz = !1;

    function xz() {
      mz || (mz = !0, pw.RegisterExtension(UC, (WW => new VC(WW))))
    }
    xz();
    const vz = "KHR_materials_dispersion";
    class KC {
      constructor() {
        this.name = vz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const RW = WW.subSurface;
        return !(!RW.isRefractionEnabled && !RW.isDispersionEnabled)
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof hC && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            const WW = {
              dispersion: MW.subSurface.dispersion
            };
            RW.extensions = RW.extensions || {}, RW.extensions[vz] = WW
          }
          WW(RW)
        }))
      }
    }
    let uC = !1;

    function OC() {
      uC || (uC = !0, pw.RegisterExtension(vz, (() => new KC)))
    }
    OC();
    const nC = "KHR_materials_emissive_strength";
    class GC {
      constructor() {
        this.name = nC, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(WW, RW, MW) {
        return await new Promise((WW => {
          if (!(MW instanceof hC)) return WW(RW);
          const wW = MW.emissiveColor.scale(MW.emissiveIntensity),
            CW = Math.max(...wW.JNW());
          if (CW > 1) {
            RW.emissiveFactor = wW.scale(1 / CW).JNW(), this._wasUsed = !0;
            const WW = {
              emissiveStrength: CW
            };
            RW.extensions || (RW.extensions = {}), RW.extensions[nC] = WW
          } else RW.emissiveFactor = wW.JNW();
          return WW(RW)
        }))
      }
    }
    let LC = !1;

    function HC() {
      LC || (LC = !0, pw.RegisterExtension(nC, (() => new GC)))
    }
    HC();
    const DC = "KHR_materials_ior";
    class qz {
      constructor() {
        this.name = DC, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(WW) {
        return !WW.unlit && (WW instanceof ZR ? 1.5 != WW.specularIor : WW instanceof hC && (void 0 != WW.indexOfRefraction && 1.5 != WW.indexOfRefraction))
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof hC && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            const WW = {
              ior: MW.indexOfRefraction
            };
            RW.extensions = RW.extensions || {}, RW.extensions[DC] = WW
          } else if (MW instanceof ZR && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            const WW = {
              ior: MW.specularIor
            };
            RW.extensions = RW.extensions || {}, RW.extensions[DC] = WW
          }
          WW(RW)
        }))
      }
    }
    let ZC = !1;

    function SC() {
      ZC || (ZC = !0, pw.RegisterExtension(DC, (() => new qz)))
    }
    SC();
    const Wz = "KHR_materials_iridescence";
    class Rz {
      constructor(WW) {
        this.name = Wz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof FR) {
          if (MW.iridescence.isEnabled) return MW.iridescence.texture && wW.push(MW.iridescence.texture), MW.iridescence.thicknessTexture && MW.iridescence.thicknessTexture !== MW.iridescence.texture && wW.push(MW.iridescence.thicknessTexture), wW
        } else if (MW instanceof ZR && MW.thinFilmWeight > 0) return MW.thinFilmWeightTexture && wW.push(MW.thinFilmWeightTexture), MW.thinFilmThicknessTexture && MW.thinFilmThicknessTexture !== MW.thinFilmWeightTexture && wW.push(MW.thinFilmThicknessTexture), wW;
        return []
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof FR) {
            if (!MW.iridescence.isEnabled) return void WW(RW);
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const wW = this._exporter._materialExporter.getTextureInfo(MW.iridescence.texture),
              CW = this._exporter._materialExporter.getTextureInfo(MW.iridescence.thicknessTexture),
              zR = {
                iridescenceFactor: MW.iridescence.intensity,
                iridescenceIor: MW.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: MW.iridescence.minimumThickness,
                iridescenceThicknessMaximum: MW.iridescence.maximumThickness,
                iridescenceTexture: wW ?? void 0,
                iridescenceThicknessTexture: CW ?? void 0
              };
            null === zR.iridescenceTexture && null === zR.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[Wz] = zR
          } else if (MW instanceof ZR) {
            if (MW.thinFilmWeight <= 0) return void WW(RW);
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const wW = this._exporter._materialExporter.getTextureInfo(MW.thinFilmWeightTexture),
              CW = this._exporter._materialExporter.getTextureInfo(MW.thinFilmThicknessTexture),
              zR = {
                iridescenceFactor: MW.thinFilmWeight,
                iridescenceIor: MW.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * MW.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * MW.thinFilmThickness,
                iridescenceTexture: wW ?? void 0,
                iridescenceThicknessTexture: CW ?? void 0
              };
            null === zR.iridescenceTexture && null === zR.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[Wz] = zR
          }
          WW(RW)
        }))
      }
    }
    let Mz = !1;

    function wz() {
      Mz || (Mz = !0, pw.RegisterExtension(Wz, (WW => new Rz(WW))))
    }
    wz();
    const Cz = "KHR_materials_sheen";
    class zA {
      constructor(WW) {
        this.name = Cz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        return MW instanceof hC && MW.sheen.isEnabled && MW.sheen.texture ? [MW.sheen.texture] : []
      }
      async postExportMaterialAsync(WW, RW, MW) {
        return await new Promise((WW => {
          if (MW instanceof hC) {
            if (!MW.sheen.isEnabled) return void WW(RW);
            this._wasUsed = !0, null == RW.extensions && (RW.extensions = {});
            const wW = {
              sheenColorFactor: MW.sheen.color.JNW(),
              sheenRoughnessFactor: MW.sheen.roughness ?? 0
            };
            null === wW.sheenColorTexture && null === wW.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(MW), MW.sheen.texture && (wW.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(MW.sheen.texture) ?? void 0), MW.sheen.textureRoughness && !MW.sheen.useRoughnessFromMainTexture ? wW.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(MW.sheen.textureRoughness) ?? void 0 : MW.sheen.texture && MW.sheen.useRoughnessFromMainTexture && (wW.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(MW.sheen.texture) ?? void 0), RW.extensions[Cz] = wW
          }
          WW(RW)
        }))
      }
    }
    let Az = !1;

    function bA() {
      Az || (Az = !0, pw.RegisterExtension(Cz, (WW => new zA(WW))))
    }
    bA();
    const yA = "KHR_materials_fuzz";

    function Nz(WW, RW) {
      const MW = new kR.d(RW.name, RW.QRW());
      return MW._texture = WW, MW.coordinatesIndex = RW.coordinatesIndex, RW instanceof kR.d && (MW.uOffset = RW.uOffset, MW.vOffset = RW.vOffset, MW.uScale = RW.uScale, MW.vScale = RW.vScale, MW.wAng = RW.wAng), MW.wrapU = RW.wrapU, MW.wrapV = RW.wrapV, MW
    }
    class ez {
      constructor(WW) {
        this.name = yA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        if (MW instanceof ZR) {
          const WW = [];
          if (MW.fuzzWeight > 0) {
            MW.fuzzWeightTexture && WW.push(MW.fuzzWeightTexture);
            let RW = !1;
            if (MW.fuzzRoughnessTexture && (MW._useFuzzRoughnessFromTextureAlpha ? WW.push(MW.fuzzRoughnessTexture) : RW = !0), MW.fuzzColorTexture && !RW && WW.push(MW.fuzzColorTexture), RW) {
              const RW = function(WW) {
                const RW = WW.fuzzColorTexture,
                  MW = RW && RW.getInternalTexture() ? RW.getInternalTexture().uniqueId : "NoFuzzColor",
                  wW = WW.fuzzRoughnessTexture;
                return `FuzzColor_${MW}_FuzzRoughness_${wW&&wW.getInternalTexture()?wW.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(MW);
              if (!this._cachedInternalTexturesMap[RW]) {
                const WW = await async function(WW) {
                  const RW = WW.QRW(),
                    MW = WW.fuzzColorTexture,
                    wW = WW.fuzzRoughnessTexture;
                  return MW || wW ? (await AM("FuzzTexture", NM(MW ? bw(MW, 0) : yw(1), MW ? bw(MW, 1) : yw(1), MW ? bw(MW, 2) : yw(1), wW ? bw(wW, WW._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : yw(1)), RW)).getInternalTexture() : null
                }(MW);
                WW && (this._cachedInternalTexturesMap[RW] = WW)
              }
              this._cachedInternalTexturesMap[RW] && (MW.fuzzColorTexture && (this._mergedTexturesMap[MW.fuzzColorTexture.uniqueId] = Nz(this._cachedInternalTexturesMap[RW], MW.fuzzColorTexture), WW.push(this._mergedTexturesMap[MW.fuzzColorTexture.uniqueId])), MW.fuzzRoughnessTexture && (this._mergedTexturesMap[MW.fuzzRoughnessTexture.uniqueId] = Nz(this._cachedInternalTexturesMap[RW], MW.fuzzRoughnessTexture), WW.push(this._mergedTexturesMap[MW.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return WW
        }
        return []
      }
      async postExportMaterialAsync(WW, RW, MW) {
        return await new Promise((WW => {
          if (MW instanceof ZR) {
            if (0 == MW.fuzzWeight) return void WW(RW);
            this._wasUsed = !0, null == RW.extensions && (RW.extensions = {});
            const wW = {
              fuzzFactor: MW.fuzzWeight,
              fuzzColorFactor: MW.fuzzColor.JNW(),
              fuzzRoughnessFactor: MW.fuzzRoughness
            };
            let CW, zR;
            MW.fuzzWeightTexture && (wW.fuzzTexture = this._exporter._materialExporter.getTextureInfo(MW.fuzzWeightTexture) ?? void 0), MW.fuzzColorTexture && (CW = this._mergedTexturesMap[MW.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[MW.fuzzColorTexture.uniqueId] : MW.fuzzColorTexture, wW.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(CW) ?? void 0), MW.fuzzRoughnessTexture && (zR = this._mergedTexturesMap[MW.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[MW.fuzzRoughnessTexture.uniqueId] : MW.fuzzRoughnessTexture, wW.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(zR) ?? void 0), null === wW.fuzzColorTexture && null === wW.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[yA] = wW
          }
          WW(RW)
        }))
      }
    }
    let Bz = !1;

    function tA() {
      Bz || (Bz = !0, pw.RegisterExtension(yA, (WW => new ez(WW))))
    }
    tA();
    const Tz = "KHR_materials_specular";
    class gA {
      constructor(WW) {
        this.name = Tz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        return MW instanceof hC && this._isExtensionEnabled(MW) ? (MW.metallicReflectanceTexture && wW.push(MW.metallicReflectanceTexture), MW.reflectanceTexture && wW.push(MW.reflectanceTexture), wW) : wW
      }
      _isExtensionEnabled(WW) {
        return !WW.unlit && (void 0 != WW.metallicF0Factor && 1 != WW.metallicF0Factor || void 0 != WW.metallicReflectanceColor && !WW.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(WW))
      }
      _hasTexturesExtension(WW) {
        return null != WW.metallicReflectanceTexture || null != WW.reflectanceTexture
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          var wW;
          if (MW instanceof hC && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0, RW.extensions = RW.extensions || {};
            const WW = this._exporter._materialExporter.getTextureInfo(MW.metallicReflectanceTexture) ?? void 0,
              wW = this._exporter._materialExporter.getTextureInfo(MW.reflectanceTexture) ?? void 0,
              CW = {
                specularFactor: 1 == MW.metallicF0Factor ? void 0 : MW.metallicF0Factor,
                specularTexture: WW,
                specularColorFactor: MW.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : MW.metallicReflectanceColor.JNW(),
                specularColorTexture: wW
              };
            this._hasTexturesExtension(MW) && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[Tz] = CW
          } else if (MW instanceof ZR) {
            RW.extensions = RW.extensions || {};
            const CW = this._exporter._materialExporter.getTextureInfo(MW.specularWeightTexture) ?? void 0,
              zR = this._exporter._materialExporter.getTextureInfo(MW.specularColorTexture) ?? void 0,
              AW = 1 == MW.specularWeight ? void 0 : MW.specularWeight,
              bR = MW.specularColor.equalsFloats(1, 1, 1) ? void 0 : MW.specularColor.JNW();
            if (!zR && !CW && void 0 === AW && void 0 === bR) return WW(RW);
            this._wasUsed = !0;
            const yR = {
                specularEdgeColorEnabled: !0
              },
              NW = {
                specularFactor: AW,
                specularTexture: CW,
                specularColorFactor: bR,
                specularColorTexture: zR,
                extensions: {}
              };
            NW.extensions.EXT_materials_specular_edge_color = yR, (wW = this._exporter._glTF).extensionsUsed || (wW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (CW || zR) && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[Tz] = NW
          }
          WW(RW)
        }))
      }
    }
    let iA = !1;

    function Yz() {
      iA || (iA = !0, pw.RegisterExtension(Tz, (WW => new gA(WW))))
    }
    Yz();
    const Jz = "KHR_materials_transmission";
    class Pz {
      constructor(WW) {
        this.name = Jz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof hC) {
          if (this._isExtensionEnabled(MW)) return MW.subSurface.refractionIntensityTexture && MW.subSurface.useGltfStyleTextures && wW.push(MW.subSurface.refractionIntensityTexture), wW
        } else MW instanceof ZR && (MW.transmissionWeight > 0 && MW.transmissionWeightTexture && (wW.push(MW.transmissionWeightTexture), MW.transmissionColorTexture && wW.push(MW.transmissionColorTexture)), MW.subsurfaceWeight > 0 && MW.subsurfaceWeightTexture && wW.push(MW.subsurfaceWeightTexture));
        return wW
      }
      _isExtensionEnabled(WW) {
        if (WW instanceof ZR && !WW.unlit) return WW.transmissionWeight > 0 || WW.subsurfaceWeight > 0;
        if (WW instanceof hC && !WW.unlit) {
          const RW = WW.subSurface;
          return RW.isRefractionEnabled && void 0 != RW.refractionIntensity && 0 != RW.refractionIntensity || null != RW.refractionIntensityTexture && RW.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(WW, RW, MW) {
        if (!this._isExtensionEnabled(MW)) return RW;
        if (MW instanceof hC) {
          this._wasUsed = !0;
          const wW = MW.subSurface,
            CW = {
              transmissionFactor: 0 === wW.refractionIntensity ? void 0 : wW.refractionIntensity
            };
          if (wW.refractionIntensityTexture)
            if (wW.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(MW);
              const WW = this._exporter._materialExporter.getTextureInfo(wW.refractionIntensityTexture);
              WW && (CW.transmissionTexture = WW)
            } else XW.b.Warn(`${WW}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          RW.extensions || (RW.extensions = {}), RW.extensions[Jz] = CW
        } else if (MW instanceof ZR) {
          this._wasUsed = !0;
          const WW = {
            transmissionFactor: (1 - MW.transmissionWeight) * MW.subsurfaceWeight + MW.transmissionWeight
          };
          if (MW.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(MW);
            const RW = this._exporter._materialExporter.getTextureInfo(MW.transmissionWeightTexture);
            RW && (WW.transmissionTexture = RW)
          } else if (MW.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(MW);
            const RW = this._exporter._materialExporter.getTextureInfo(MW.subsurfaceWeightTexture);
            RW && (WW.transmissionTexture = RW)
          }
          if (0 == MW.transmissionDepth && (!MW.transmissionColor.equals(nW.d.White()) || MW.transmissionColorTexture) && RW.pbrMetallicRoughness && (RW.pbrMetallicRoughness.baseColorFactor || (RW.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), RW.pbrMetallicRoughness.baseColorFactor[0] *= MW.transmissionColor.r, RW.pbrMetallicRoughness.baseColorFactor[1] *= MW.transmissionColor.g, RW.pbrMetallicRoughness.baseColorFactor[2] *= MW.transmissionColor.b, MW.transmissionColorTexture && !RW.pbrMetallicRoughness.baseColorTexture)) {
            const WW = this._exporter._materialExporter.getTextureInfo(MW.transmissionColorTexture);
            WW && (RW.pbrMetallicRoughness.baseColorTexture = WW, this._exporter._materialNeedsUVsSet.add(MW))
          }
          RW.extensions || (RW.extensions = {}), RW.extensions[Jz] = WW
        }
        return RW
      }
    }
    let Iz = !1;

    function oz() {
      Iz || (Iz = !0, pw.RegisterExtension(Jz, (WW => new Pz(WW))))
    }
    oz();
    var lz = MW(37846);
    const Fz = "KHR_materials_unlit";
    class fz {
      constructor() {
        this.name = Fz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          let wW = !1;
          MW instanceof hC ? wW = MW.unlit : MW instanceof lz.i && (wW = MW.disableLighting), wW && (this._wasUsed = !0, null == RW.extensions && (RW.extensions = {}), RW.extensions[Fz] = {}), WW(RW)
        }))
      }
    }
    let Qz = !1;

    function rA() {
      Qz || (Qz = !0, pw.RegisterExtension(Fz, (() => new fz)))
    }
    rA();
    const cA = "KHR_materials_volume";
    class Xz {
      constructor(WW) {
        this.name = cA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof hC) {
          if (this._isExtensionEnabled(MW)) return MW.subSurface.thicknessTexture && wW.push(MW.subSurface.thicknessTexture), wW
        } else MW instanceof ZR && (MW.transmissionWeight > 0 || MW.subsurfaceWeight > 0) && MW.geometryThicknessTexture && wW.push(MW.geometryThicknessTexture);
        return wW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const RW = WW.subSurface;
        return !(!RW.isRefractionEnabled && !RW.isTranslucencyEnabled) && (void 0 != RW.maximumThickness && 0 != RW.maximumThickness || void 0 != RW.tintColorAtDistance && RW.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != RW.tintColor && RW.tintColor != nW.d.White() || this._hasTexturesExtension(WW))
      }
      _hasTexturesExtension(WW) {
        return null != WW.subSurface.thicknessTexture
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof hC && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            const WW = MW.subSurface,
              wW = {
                thicknessFactor: 0 == WW.maximumThickness ? void 0 : WW.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(WW.thicknessTexture) ?? void 0,
                attenuationDistance: WW.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : WW.tintColorAtDistance,
                attenuationColor: WW.tintColor.equalsFloats(1, 1, 1) ? void 0 : WW.tintColor.JNW()
              };
            this._hasTexturesExtension(MW) && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions = RW.extensions || {}, RW.extensions[cA] = wW
          } else if (MW instanceof ZR) {
            const WW = MW.transmissionWeight > 0 && !MW.geometryThinWalled,
              wW = MW.subsurfaceWeight > 0 && !MW.geometryThinWalled;
            if (WW || wW) {
              this._wasUsed = !0;
              const CW = MW.geometryThickness,
                zR = this._exporter._materialExporter.getTextureInfo(MW.geometryThicknessTexture) ?? void 0;
              let AW;
              zR && this._exporter._materialNeedsUVsSet.add(MW);
              const bR = nW.d.White().JNW();
              if (WW && MW.transmissionDepth > 0) {
                const WW = 1 / MW.transmissionDepth;
                let RW = new VW.q(-Math.log(MW.transmissionColor.r) * WW, -Math.log(MW.transmissionColor.g) * WW, -Math.log(MW.transmissionColor.b) * WW);
                const wW = new VW.q(MW.transmissionScatter.r * WW, MW.transmissionScatter.g * WW, MW.transmissionScatter.b * WW),
                  CW = RW.subtract(wW),
                  zR = Math.min(CW.x, CW.y, CW.z);
                zR < 0 && (CW.x = CW.x - zR, CW.y = CW.y - zR, CW.z = CW.z - zR), RW = CW.add(wW);
                AW = 1 / Math.max(RW.x, RW.y, RW.z), bR[0] = Math.exp(-RW.x * AW), bR[1] = Math.exp(-RW.y * AW), bR[2] = Math.exp(-RW.z * AW)
              } else AW = Number.MAX_VALUE, bR[0] = 1, bR[1] = 1, bR[2] = 1;
              let yR = 1;
              const NW = nW.d.White().JNW();
              if (wW) {
                const WW = MW.subsurfaceRadius,
                  RW = MW.subsurfaceRadiusScale,
                  wW = new VW.q(RW.r, RW.g, RW.b).multiplyByFloats(WW, WW, WW),
                  CW = new VW.q(1 / Math.max(wW.x, 1e-6), 1 / Math.max(wW.y, 1e-6), 1 / Math.max(wW.z, 1e-6));
                yR = 1 / Math.max(CW.x, CW.y, CW.z), NW[0] = Math.exp(-CW.x * yR), NW[1] = Math.exp(-CW.y * yR), NW[2] = Math.exp(-CW.z * yR)
              }
              const eW = (1 - MW.transmissionWeight) * MW.subsurfaceWeight,
                BW = eW + MW.transmissionWeight,
                tR = 1 / Math.max(BW, 1e-6),
                TW = MW.transmissionWeight * tR,
                gR = eW * tR,
                iR = bR.map(((WW, RW) => WW * TW + NW[RW] * gR)),
                YW = {
                  thicknessFactor: CW,
                  thicknessTexture: zR,
                  attenuationDistance: AW * TW + yR * gR,
                  attenuationColor: iR
                };
              RW.extensions = RW.extensions || {}, RW.extensions[cA] = YW
            }
          }
          WW(RW)
        }))
      }
    }
    let jA = !1;

    function kA() {
      jA || (jA = !0, pw.RegisterExtension(cA, (WW => new Xz(WW))))
    }
    kA();
    const aA = "KHR_materials_volume_scatter";
    class sz {
      constructor(WW) {
        this.name = aA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        return MW instanceof ZR && (MW.transmissionWeight > 0 && MW.transmissionScatterTexture && wW.push(MW.transmissionScatterTexture), MW.subsurfaceWeight > 0 && MW.subsurfaceColorTexture && wW.push(MW.subsurfaceColorTexture)), wW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const RW = WW.transmissionWeight > 0 && !WW.geometryThinWalled && WW.transmissionDepth > 0 && !WW.transmissionScatter.equals(nW.d.Black()),
          MW = WW.subsurfaceWeight > 0 && !WW.geometryThinWalled;
        return !(!RW && !MW)
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          if (MW instanceof ZR && this._isExtensionEnabled(MW)) {
            this._wasUsed = !0;
            let WW = VW.q.Zero(),
              wW = 0;
            if (MW.transmissionWeight > 0) {
              WW = function(WW) {
                const RW = new VW.q(Math.sqrt(1 - WW.x), Math.sqrt(1 - WW.y), Math.sqrt(1 - WW.z)),
                  MW = new VW.q(1, 1, 1),
                  wW = MW.subtract(RW),
                  CW = MW.subtract(new VW.q(.139, .139, .139).multiplyInPlace(RW)),
                  zR = MW.add(new VW.q(1.17, 1.17, 1.17).multiplyInPlace(RW));
                return wW.multiplyInPlace(CW).divideInPlace(zR)
              }(new VW.q(MW.transmissionScatter.r, MW.transmissionScatter.g, MW.transmissionScatter.b)), wW = MW.transmissionScatterAnisotropy
            }
            const CW = VW.q.Zero();
            let zR = 0;
            MW.subsurfaceWeight > 0 && (CW.set(MW.subsurfaceColor.r, MW.subsurfaceColor.g, MW.subsurfaceColor.b), zR = MW.subsurfaceScatterAnisotropy);
            const AW = (1 - MW.transmissionWeight) * MW.subsurfaceWeight,
              bR = AW + MW.transmissionWeight,
              yR = 1 / Math.max(bR, 1e-6),
              NW = MW.transmissionWeight * yR,
              eW = AW * yR,
              BW = {
                multiscatterColorFactor: WW.multiplyByFloats(NW, NW, NW).addInPlace(CW.multiplyByFloats(eW, eW, eW)).JNW(),
                scatterAnisotropy: wW * NW + zR * eW
              };
            if (MW.subsurfaceWeight > 0 && MW.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(MW);
              const WW = this._exporter._materialExporter.getTextureInfo(MW.subsurfaceColorTexture);
              WW && (BW.multiscatterColorTexture = WW)
            } else if (MW.transmissionWeight > 0 && MW.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(MW);
              const WW = this._exporter._materialExporter.getTextureInfo(MW.transmissionScatterTexture);
              WW && (BW.multiscatterColorTexture = WW)
            }
            RW.extensions = RW.extensions || {}, RW.extensions[aA] = BW
          }
          WW(RW)
        }))
      }
    }
    let dz = !1;

    function pz() {
      dz || (dz = !0, pw.RegisterExtension(aA, (WW => new sz(WW)), 101))
    }
    pz();
    const hz = "KHR_materials_diffuse_roughness";
    class Uz {
      constructor(WW) {
        this.name = hz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, RW, MW) {
        const wW = [];
        if (MW instanceof FR) {
          if (MW._baseDiffuseRoughness) return MW._baseDiffuseRoughnessTexture && wW.push(MW._baseDiffuseRoughnessTexture), wW
        } else if (MW instanceof ZR && MW.baseDiffuseRoughness) return MW.baseDiffuseRoughnessTexture && wW.push(MW.baseDiffuseRoughnessTexture), wW;
        return []
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          let wW = null,
            CW = null;
          if (MW instanceof FR ? (wW = MW._baseDiffuseRoughness, CW = MW._baseDiffuseRoughnessTexture) : MW instanceof ZR && (wW = MW.baseDiffuseRoughness, CW = MW.baseDiffuseRoughnessTexture), !wW) return void WW(RW);
          this._wasUsed = !0, RW.extensions = RW.extensions || {};
          const zR = {
            diffuseRoughnessFactor: wW,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(CW) ?? void 0
          };
          null !== zR.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(MW), RW.extensions[hz] = zR, WW(RW)
        }))
      }
    }
    let Ez = !1;

    function Vz() {
      Ez || (Ez = !0, pw.RegisterExtension(hz, (WW => new Uz(WW))))
    }
    Vz();
    const mA = "KHR_materials_openpbr";
    class xA {
      constructor() {
        this.name = mA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(WW, RW, MW) {
        return new Promise((WW => {
          MW instanceof ZR && (this._wasUsed = !0, RW.extensions = RW.extensions || {}, RW.extensions[mA] = {}), WW(RW)
        }))
      }
    }
    let vA = !1;

    function Kz() {
      vA || (vA = !0, pw.RegisterExtension(mA, (() => new xA)))
    }
    Kz();
    const uz = "KHR_texture_transform";
    class Oz {
      constructor() {
        this.name = uz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(WW, RW, MW) {
        if (MW.QRW() || QR.j.Warn(`${WW}: "scene" is not defined for Babylon texture ${MW.name}!`), (0 !== MW.uAng || 0 !== MW.vAng) && (QR.j.Warn(`${WW}: Texture ${MW.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== MW.uRotationCenter || 0 !== MW.vRotationCenter)) return;
        const wW = {};
        let CW = !1;
        if (0 === MW.uOffset && 0 === MW.vOffset || (wW.offset = [MW.uOffset, MW.vOffset], CW = !0), 1 === MW.uScale && 1 === MW.vScale || (wW.scale = [MW.uScale, MW.vScale], CW = !0), 0 !== MW.wAng) {
          if (0 !== MW.uRotationCenter || 0 !== MW.vRotationCenter) {
            if (MW.homogeneousRotationInUVTransform && MW.uScale !== MW.vScale) return void QR.j.Warn(`${WW}: Texture ${MW.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${uz}.`);
            QR.j.Warn(`${WW}: Texture ${MW.name} with non-origin rotation center will be exported using an adjusted offset with ${uz}.`), wW.offset = function(WW) {
              const {
                uOffset: RW,
                vOffset: MW,
                uRotationCenter: wW,
                vRotationCenter: CW,
                uScale: zR,
                vScale: AW,
                wAng: bR
              } = WW, yR = Math.cos(bR), NW = Math.sin(bR), eW = wW * zR, BW = CW * AW;
              return [RW + (eW * (1 - yR) + BW * NW), MW + (BW * (1 - yR) - eW * NW)]
            }(MW)
          }
          wW.rotation = -MW.wAng, CW = !0
        }
        0 !== MW.coordinatesIndex && (wW.texCoord = MW.coordinatesIndex, CW = !0), CW && (this._wasUsed = !0, RW.extensions || (RW.extensions = {}), RW.extensions[uz] = wW)
      }
    }
    let nz = !1;

    function Gz() {
      nz || (nz = !0, pw.RegisterExtension(uz, (() => new Oz)))
    }
    Gz();
    var Lz = MW(37635);
    const Hz = "KHR_texture_basisu";
    class Dz {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = Hz, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, RW) {
        const MW = this._exporter._textures[RW.index],
          wW = MW.source;
        if (void 0 === wW) return;
        const CW = this._exporter._images[wW];
        "image/ktx2" === (CW.mimeType || (0, Lz.g)(CW.uri)) && (MW.source = void 0, MW.extensions || (MW.extensions = {}), MW.extensions[Hz] = {
          source: wW
        }, this._wasUsed = !0)
      }
    }
    let qA = !1;

    function Zz() {
      qA || (qA = !0, pw.RegisterExtension(Hz, (WW => new Dz(WW))))
    }
    Zz();
    const Sz = "EXT_texture_webp";
    class WA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = Sz, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, RW) {
        const MW = this._exporter._textures[RW.index],
          wW = MW.source;
        if (void 0 === wW) return;
        const CW = this._exporter._images[wW];
        "image/webp" === (CW.mimeType || (0, Lz.g)(CW.uri)) && (MW.source = void 0, MW.extensions || (MW.extensions = {}), MW.extensions[Sz] = {
          source: wW
        }, this._wasUsed = !0)
      }
    }
    let RA = !1;

    function MA() {
      RA || (RA = !0, pw.RegisterExtension(Sz, (WW => new WA(WW))))
    }
    MA();
    const wA = "EXT_texture_avif";
    class CA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = wA, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, RW) {
        const MW = this._exporter._textures[RW.index],
          wW = MW.source;
        if (void 0 === wW) return;
        const CW = this._exporter._images[wW];
        "image/avif" === (CW.mimeType || (0, Lz.g)(CW.uri)) && (MW.source = void 0, MW.extensions || (MW.extensions = {}), MW.extensions[wA] = {
          source: wW
        }, this._wasUsed = !0)
      }
    }
    let zb = !1;

    function AA() {
      zb || (zb = !0, pw.RegisterExtension(wA, (WW => new CA(WW))))
    }
    AA();
    class bb {
      static CreateSTL(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          yR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const NW = function(WW, RW, MW) {
            const CW = [3 * WW[MW], 3 * WW[MW + 1], 3 * WW[MW + 2]],
              zR = [new wW.vC(RW[CW[0]], RW[CW[0] + 2], RW[CW[0] + 1]), new wW.vC(RW[CW[1]], RW[CW[1] + 2], RW[CW[1] + 1]), new wW.vC(RW[CW[2]], RW[CW[2] + 2], RW[CW[2] + 1])],
              AW = zR[0].subtract(zR[1]),
              bR = zR[2].subtract(zR[1]);
            return {
              v: zR,
              n: wW.vC.Cross(bR, AW).normalize()
            }
          },
          BW = function(WW, RW, MW, wW) {
            return RW = tR(WW, RW, MW.x, wW), RW = tR(WW, RW, MW.y, wW), tR(WW, RW, MW.z, wW)
          },
          tR = function(WW, RW, MW, wW) {
            return WW.setFloat32(RW, MW, wW), RW + 4
          },
          gR = function(WW) {
            if (bR) {
              let RW = WW;
              WW instanceof TW.e && (RW = WW.yBW);
              const MW = RW.getVerticesData(eW.h.PositionKind, !0, !0);
              if (!MW) return [];
              const CW = wW.vC.Zero();
              let zR;
              for (zR = 0; zR < MW.length; zR += 3) wW.vC.TransformCoordinatesFromFloatsToRef(MW[zR], MW[zR + 1], MW[zR + 2], WW.computeWorldMatrix(!0), CW).toArray(MW, zR);
              return MW
            }
            return WW.getVerticesData(eW.h.PositionKind) || []
          };
        bR && (AW = !0);
        let iR = "",
          YW = 0,
          JW = 0;
        if (CW) {
          for (let MW = 0; MW < WW.length; MW++) {
            const RW = WW[MW].ptW();
            YW += RW ? RW.length / 3 : 0
          }
          const RW = new ArrayBuffer(84 + 50 * YW);
          iR = new DataView(RW), JW += 80, iR.setUint32(JW, YW, zR), JW += 4
        } else yR || (iR = "solid stlmesh\r\n");
        for (let wW = 0; wW < WW.length; wW++) {
          const RW = WW[wW];
          !CW && yR && (iR += "solid " + RW.name + "\r\n"), !AW && RW instanceof Nw.c && RW.bakeCurrentTransformIntoVertices();
          const MW = gR(RW),
            bR = RW.ptW() || [];
          for (let WW = 0; WW < bR.length; WW += 3) {
            const RW = NW(bR, MW, WW);
            CW ? (JW = BW(iR, JW, RW.n, zR), JW = BW(iR, JW, RW.v[0], zR), JW = BW(iR, JW, RW.v[1], zR), JW = BW(iR, JW, RW.v[2], zR), JW += 2) : (iR += "\tfacet normal " + RW.n.x + " " + RW.n.y + " " + RW.n.z + "\r\n", iR += "\t\touter loop\r\n", iR += "\t\t\tvertex " + RW.v[0].x + " " + RW.v[0].y + " " + RW.v[0].z + "\r\n", iR += "\t\t\tvertex " + RW.v[1].x + " " + RW.v[1].y + " " + RW.v[1].z + "\r\n", iR += "\t\t\tvertex " + RW.v[2].x + " " + RW.v[2].y + " " + RW.v[2].z + "\r\n", iR += "\t\tendloop\r\n", iR += "\tendfacet\r\n")
          }!CW && yR && (iR += "endsolid " + name + "\r\n")
        }
        if (CW || yR || (iR += "endsolid stlmesh"), RW) {
          const WW = document.createElement("a"),
            RW = new Blob([iR], {
              type: "application/octet-stream"
            });
          WW.href = window.URL.createObjectURL(RW), WW.download = MW + ".stl", WW.click()
        }
        return iR
      }
    }

    function yb(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const CW = [];
      for (let zR = 0; zR < WW.length / MW; zR++) {
        const AW = WW[zR * MW] * (wW ? -1 : 1),
          bR = WW[zR * MW + 1],
          yR = WW[zR * MW + 2];
        CW.push(`(${AW.toPrecision(RW.precision)}, ${bR.toPrecision(RW.precision)}, ${yR.toPrecision(RW.precision)})`)
      }
      return CW.join(", ")
    }

    function NA(WW, RW) {
      const MW = [];
      for (let wW = 0; wW < WW.length / 2; wW++) {
        const CW = WW[2 * wW],
          zR = WW[2 * wW + 1];
        MW.push(`(${CW.toPrecision(RW.precision)}, ${(1-zR).toPrecision(RW.precision)})`)
      }
      return MW.join(", ")
    }

    function eA(WW, RW, MW, wW) {
      const CW = WW.getVerticesData(eW.h.PositionKind),
        zR = WW.getVerticesData(eW.h.NormalKind);
      if (CW && zR) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${MW}"\n\t\tint[] faceVertexCounts = [${function(WW){const RW=WW.ptW()?.length?WW.getTotalIndices():WW.getTotalVertices();return Array(RW/3).fill(3).join(", ")}(WW)}]\n\t\tint[] faceVertexIndices = [${function(WW){const RW=WW.ptW(),MW=RW?.length??WW.getTotalVertices(),wW=[];if(null!==RW)for(let CW=0;CW<MW;CW++)wW.push(RW[CW]);else for(let CW=0;CW<MW;CW++)wW.push(CW);return wW.join(", ")}(WW)}]\n\t\tnormal3f[] normals = [${yb(zR,RW,void 0,wW)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${yb(CW,RW,void 0,wW)}]\n        ${function(WW,RW){let MW="";for(let CW=0;CW<4;CW++){const wW=CW>0?CW:"",zR=WW.getVerticesData(eW.h.UVKind+(wW?wW+1:""));zR&&(MW+=`\n\t\ttexCoord2f[] primvars:st${wW} = [${NA(zR,RW)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const wW=WW.getVerticesData(eW.h.ColorKind);return wW&&(MW+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        yb(wW, RW, wW.length / WW.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),MW}(WW,RW)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function BA(WW, RW, MW, wW) {
      return `\n        def "Geometry"\n        {\n        ${eA(WW,RW,MW,wW)}\n        }\n        `
    }

    function tb(WW) {
      let RW = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return RW += WW, fflate.strToU8(RW)
    }

    function TA(WW) {
      const RW = WW.m;
      return `( ${gb(RW,0)}, ${gb(RW,4)}, ${gb(RW,8)}, ${gb(RW,12)} )`
    }

    function gb(WW, RW) {
      return `(${WW[RW+0]}, ${WW[RW+1]}, ${WW[RW+2]}, ${WW[RW+3]})`
    }

    function ib(WW, RW) {
      const MW = "Object_" + WW.uniqueId,
        wW = TA(RW);
      return `def Xform "${MW}" (\n\tprepend references = @./geometries/Geometry_${WW.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${wW}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${WW.material.uniqueId}>\n}\n\n`
    }

    function YA(WW) {
      switch (WW) {
        case fW.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case fW.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case fW.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function JA(WW) {
      return `(${WW.x}, ${WW.y})`
    }

    function PA(WW) {
      return `(${WW.r}, ${WW.g}, ${WW.b})`
    }

    function IA(WW) {
      return "image/jpeg" === WW || "image/png" === WW
    }

    function oA(WW, RW, MW, CW, zR, AW) {
      const bR = WW.getInternalTexture().uniqueId + "_" + WW.invertY,
        NW = WW.mimeType || (0, yR.d)(WW.getInternalTexture()?.url ?? ""),
        eW = IA(NW) ? NW : "image/png",
        BW = "image/jpeg" === eW ? "jpg" : "png";
      zR[bR] = {
        texture: WW,
        mimeType: eW,
        ext: BW
      };
      const tR = WW.coordinatesIndex > 0 ? "st" + WW.coordinatesIndex : "st",
        TW = new wW.Vector2(WW.uScale, WW.vScale),
        gR = new wW.Vector2(WW.uOffset, WW.vOffset),
        iR = WW.wAng,
        YW = Math.sin(iR),
        JW = Math.cos(iR);
      return gR.y = 1 - gR.y - TW.y, gR.x += YW * TW.x, gR.y += (1 - JW) * TW.y, `\n    def Shader "PrimvarReader_${MW}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${tR}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${MW}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${RW.uniqueId}/PrimvarReader_${MW}.outputs:result>\n        float inputs:rotation = ${(iR*(180/Math.PI)).toFixed(AW.precision)}\n        float2 inputs:scale = ${JA(TW)}\n        float2 inputs:translation = ${JA(gR)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${WW.uniqueId}_${MW}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${bR}.${BW}@\n        float2 inputs:st.connect = </Root/Materials/Material_${RW.uniqueId}/Transform2d_${MW}.outputs:result>\n        ${CW?"float4 inputs:scale = "+function(WW){return`(${WW.r}, ${WW.g}, ${WW.b}, 1.0)`}(CW):""}\n        token inputs:sourceColorSpace = "${WW.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${YA(WW.wrapU)}"\n        token inputs:wrapT = "${YA(WW.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${RW.needAlphaBlending()||RW.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function lA(WW, RW, MW) {
      const wW = "\t\t\t",
        CW = [],
        zR = [],
        {
          diffuseMap: AW,
          diffuse: bR,
          alphaCutOff: yR,
          emissiveMap: NW,
          emissive: eW,
          normalMap: BW,
          roughnessMap: tR,
          roughnessChannel: TW,
          roughness: gR,
          metalnessMap: iR,
          metalnessChannel: JW,
          metalness: PW,
          aoMap: IW,
          aoMapChannel: oW,
          aoMapIntensity: lW,
          alphaMap: FW,
          ior: fW,
          clearCoatEnabled: QW,
          clearCoat: rR,
          clearCoatMap: cR,
          clearCoatRoughness: XW,
          clearCoatRoughnessMap: jR
        } = function(WW) {
          const RW = {
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
          return WW instanceof zC.StandardMaterial ? {
            ...RW,
            diffuseMap: WW.diffuseTexture,
            diffuse: WW.diffuseColor,
            alphaCutOff: WW.alphaCutOff,
            emissiveMap: WW.emissiveTexture,
            emissive: WW.emissiveColor,
            roughness: 1,
            alphaMap: WW.opacityTexture
          } : WW instanceof FR ? {
            ...RW,
            diffuseMap: WW._albedoTexture,
            diffuse: WW._albedoColor,
            alphaCutOff: WW._alphaCutOff,
            emissiveMap: WW._emissiveTexture,
            emissive: WW._emissiveColor,
            normalMap: WW._bumpTexture,
            roughnessMap: WW._metallicTexture,
            roughnessChannel: WW._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: WW._roughness ?? 1,
            metalnessMap: WW._metallicTexture,
            metalnessChannel: WW._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: WW._metallic ?? 0,
            aoMap: WW._ambientTexture,
            aoMapChannel: WW._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: WW._ambientTextureStrength,
            alphaMap: WW._opacityTexture,
            ior: WW.subSurface.indexOfRefraction,
            clearCoatEnabled: WW.clearCoat.isEnabled,
            clearCoat: WW.clearCoat.intensity,
            clearCoatMap: WW.clearCoat.texture,
            clearCoatRoughness: WW.clearCoat.roughness,
            clearCoatRoughnessMap: WW.clearCoat.useRoughnessFromMainTexture ? WW.clearCoat.texture : WW.clearCoat.textureRoughness
          } : RW
        }(WW);
      return null !== AW ? (CW.push(`${wW}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${AW.uniqueId}_diffuse.outputs:rgb>`), WW.needAlphaBlending() ? CW.push(`${wW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${AW.uniqueId}_diffuse.outputs:a>`) : WW.needAlphaTesting() && (CW.push(`${wW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${AW.uniqueId}_diffuse.outputs:a>`), CW.push(`${wW}float inputs:opacityThreshold = ${yR}`)), zR.push(oA(AW, WW, "diffuse", bR, RW, MW))) : CW.push(`${wW}color3f inputs:diffuseColor = ${PA(bR||YW.Color3.White())}`), null !== NW ? (CW.push(`${wW}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${NW.uniqueId}_emissive.outputs:rgb>`), zR.push(oA(NW, WW, "emissive", eW, RW, MW))) : eW && eW.toLuminance() > 0 && CW.push(`${wW}color3f inputs:emissiveColor = ${PA(eW)}`), null !== BW && (CW.push(`${wW}normal3f inputs:normal.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${BW.uniqueId}_normal.outputs:rgb>`), zR.push(oA(BW, WW, "normal", null, RW, MW))), null !== IW && (CW.push(`${wW}float inputs:occlusion.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${IW.uniqueId}_occlusion.outputs:${oW}>`), zR.push(oA(IW, WW, "occlusion", new YW.Color3(lW, lW, lW), RW, MW))), null !== tR ? (CW.push(`${wW}float inputs:roughness.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${tR.uniqueId}_roughness.outputs:${TW}>`), zR.push(oA(tR, WW, "roughness", new YW.Color3(gR, gR, gR), RW, MW))) : CW.push(`${wW}float inputs:roughness = ${gR}`), null !== iR ? (CW.push(`${wW}float inputs:metallic.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${iR.uniqueId}_metallic.outputs:${JW}>`), zR.push(oA(iR, WW, "metallic", new YW.Color3(PW, PW, PW), RW, MW))) : CW.push(`${wW}float inputs:metallic = ${PW}`), null !== FW ? (CW.push(`${wW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${FW.uniqueId}_opacity.outputs:r>`), CW.push(`${wW}float inputs:opacityThreshold = 0.0001`), zR.push(oA(FW, WW, "opacity", null, RW, MW))) : CW.push(`${wW}float inputs:opacity = ${WW.alpha}`), QW && (null !== cR ? (CW.push(`${wW}float inputs:clearcoat.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${cR.uniqueId}_clearcoat.outputs:r>`), zR.push(oA(cR, WW, "clearcoat", new YW.Color3(rR, rR, rR), RW, MW))) : CW.push(`${wW}float inputs:clearcoat = ${rR}`), null !== jR ? (CW.push(`${wW}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${jR.uniqueId}_clearcoatRoughness.outputs:g>`), zR.push(oA(jR, WW, "clearcoatRoughness", new YW.Color3(XW, XW, XW), RW, MW))) : CW.push(`${wW}float inputs:clearcoatRoughness = ${XW}`)), CW.push(`${wW}float inputs:ior = ${fW}`), `\n\tdef Material "Material_${WW.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${CW.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${WW.uniqueId}/PreviewSurface.outputs:surface>\n\n${zR.join("\n")}\n\n\t}\n`
    }

    function FA(WW) {
      WW.computeWorldMatrix(!0);
      const RW = WW.getWorldMatrix().clone(),
        MW = WW.QRW().useRightHandedSystem;
      let wW = WW.material?._getEffectiveOrientation(WW) ?? WW.sideOrientation,
        AW = !MW,
        bR = WW.parent;
      for (; bR;) {
        if (hM(bR, MW) && null === bR.parent) {
          MW || (RW.multiplyToRef(bR.getWorldMatrix().invert(), RW), wW = wW === zR.e.ClockWiseSideOrientation ? zR.e.CounterClockWiseSideOrientation : zR.e.ClockWiseSideOrientation), AW = !1;
          break
        }
        bR = bR.parent
      }
      return RW.determinant() < 0 && CW.Tools.Warn(`Mesh ${WW.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: RW,
        windingOrder: wW === zR.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: AW
      }
    }
    async function fA(WW, RW, MW) {
      const zR = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...RW
      };
      "undefined" === typeof fflate && await CW.Tools.LoadScriptAsync(zR.fflateUrl);
      const AW = {};
      AW[zR.modelFileName] = null;
      let bR = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      bR += function(WW) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===WW.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${WW.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${WW.planeAnchoringAlignment}"`:""}\n            `
      }(zR);
      const yR = {};
      for (const wW of WW.meshes) {
        if (0 === wW.getTotalVertices()) continue;
        const WW = wW,
          RW = WW.geometry,
          NW = WW.material;
        if (!NW || !RW || MW && !MW(WW)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(NW.getClassName())) {
          const MW = "geometries/Geometry_" + RW.uniqueId + ".usda",
            {
              matrix: wW,
              windingOrder: CW,
              convertToRightHanded: eW
            } = FA(WW);
          if (!(MW in AW)) {
            const WW = BA(RW, zR, CW, eW);
            AW[MW] = tb(WW)
          }
          NW.uniqueId in yR || (yR[NW.uniqueId] = NW), bR += ib(WW, wW)
        } else CW.Tools.Warn("USDZExportAsync does not support this material type: " + NW.getClassName())
      }
      WW.activeCamera && zR.exportCamera && (bR += function(WW, RW) {
        const MW = "Camera_" + WW.uniqueId,
          CW = TA(wW.Matrix.RotationY(Math.PI).multiply(WW.getWorldMatrix()));
        if (WW.mode === fW.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${MW}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${CW}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${WW.minZ.toPrecision(RW.precision)}, ${WW.maxZ.toPrecision(RW.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(WW.orthoLeft||1)+Math.abs(WW.orthoRight||1))).toPrecision(RW.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(WW.orthoTop||1)+Math.abs(WW.orthoBottom||1))).toPrecision(RW.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const wW = WW.mC().getAspectRatio(WW),
            zR = RW.cameraSensorWidth || 35;
          return `def Camera "${MW}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${CW}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${WW.minZ.toPrecision(RW.precision)}, ${WW.maxZ.toPrecision(RW.precision)})\n\t\t\tfloat focalLength = ${(zR/(2*Math.tan(.5*WW.fov))).toPrecision(RW.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(zR*wW).toPrecision(RW.precision)}\n\t\t\tfloat verticalAperture = ${(zR/wW).toPrecision(RW.precision)}            \n\t\t}\n\t\n\t`
        }
      }(WW.activeCamera, zR)), bR += "\n            }\n        }";
      const NW = {};
      bR += function(WW, RW, MW) {
        const wW = [];
        for (const CW in WW) {
          const zR = WW[CW];
          wW.push(lA(zR, RW, MW))
        }
        return `\n    def "Materials"\n{\n${wW.join("")}\n}\n\n`
      }(yR, NW, zR), bR += "\n    }", AW[zR.modelFileName] = fflate.strToU8(bR);
      for (const wW in NW) {
        const {
          texture: WW,
          ext: RW,
          mimeType: MW
        } = NW[wW], CW = await JM(WW);
        if (CW && IA(CW.mimeType) && CW.mimeType === MW) AW[`textures/Texture_${wW}.${RW}`] = new Uint8Array(CW.data);
        else {
          const CW = WW.getSize(),
            zR = await (0, oW.d)(WW),
            bR = await QW.DumpTools.DumpDataAsync(CW.width, CW.height, zR, MW, void 0, !1, !0);
          AW[`textures/Texture_${wW}.${RW}`] = new Uint8Array(bR).slice()
        }
      }
      let eW = 0;
      for (const wW in AW) {
        const WW = AW[wW];
        if (!WW) continue;
        eW += 34 + wW.length;
        const RW = 63 & eW;
        if (4 !== RW) {
          const MW = new Uint8Array(64 - RW);
          AW[wW] = [WW, {
            extra: {
              12345: MW
            }
          }]
        }
        eW = WW.length
      }
      return fflate.zipSync(AW, {
        level: 0
      })
    }
    var QA = MW(38692);
    class rb {
      static Export(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (!WW || 0 === WW.bones.length) throw new Error("Invalid or empty skeleton provided");
        let wW = RW;
        RW && 0 !== RW.length || (wW = WW.animations.map((WW => WW.name)));
        let CW = null;
        for (const NW of wW) {
          const RW = WW.getAnimationRange(NW);
          RW && (CW = CW ? new QA.e("animation-range", Math.min(CW.from, RW.from), Math.max(CW.to, RW.to)) : RW)
        }
        if (!CW && (WW.animations.length > 0 && (CW = WW.getAnimationRange(WW.animations[0].name)), !CW)) throw new Error("No animation range found in skeleton");
        const zR = MW || 1 / (WW.animations[0]?.framePerSecond || 30),
          AW = this._BuildBoneHierarchy(WW, wW);
        let bR = 0;
        for (const NW of AW) NW.positionKeys.length > 0 && (bR = Math.max(bR, NW.positionKeys.length)), NW.rotationKeys.length > 0 && (bR = Math.max(bR, NW.rotationKeys.length));
        0 === bR && (bR = Math.floor((CW.to - CW.from) / zR) + 1);
        let yR = "";
        return yR += "HIERARCHY\n", yR += this._ExportHierarchy(AW, 0), yR += "MOTION\n", yR += `Frames: ${bR}\n`, yR += `Frame Time: ${zR.toFixed(6)}\n`, yR += this._ExportMotionData(AW, bR, 0, wW), yR
      }
      static _BuildBoneHierarchy(WW, RW) {
        const MW = new Map,
          wW = [];
        for (const CW of WW.bones) {
          const WW = {
            bone: CW,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          MW.set(CW, WW)
        }
        for (const CW of WW.bones) {
          const WW = MW.get(CW);
          if (CW.animations.length > 0)
            for (const MW of CW.animations) RW.includes(MW.name) && ("position" === MW.targetProperty ? (WW.hasPositionChannels = !0, WW.positionKeys.push(...MW.getKeys())) : "rotationQuaternion" === MW.targetProperty && (WW.hasRotationChannels = !0, WW.rotationKeys.push(...MW.getKeys())));
          if (CW.getParent()) {
            const RW = MW.get(CW.getParent());
            RW && RW.children.push(WW)
          } else wW.push(WW)
        }
        return wW
      }
      static _ExportHierarchy(WW, RW) {
        let MW = "";
        const wW = "    ".repeat(RW);
        for (const CW of WW) {
          const WW = CW.bone;
          if (this._IsEndSite(CW)) {
            MW += `${wW}End Site\n`, MW += `${wW}{\n`;
            const RW = this._GetBoneOffset(WW);
            MW += `${wW}    OFFSET ${RW.x.toFixed(6)} ${RW.y.toFixed(6)} ${RW.z.toFixed(6)}\n`, MW += `${wW}}\n`
          } else {
            MW += `${0===RW?"ROOT":`${wW}JOINT`} ${WW.name}\n`, MW += `${wW}{\n`;
            const zR = this._GetBoneOffset(WW);
            MW += `${wW}    OFFSET ${zR.x.toFixed(6)} ${zR.y.toFixed(6)} ${zR.z.toFixed(6)}\n`;
            const AW = [];
            CW.hasPositionChannels && AW.push("Xposition", "Yposition", "Zposition"), CW.hasRotationChannels && AW.push("Zrotation", "Xrotation", "Yrotation"), AW.length > 0 && (MW += `${wW}    CHANNELS ${AW.length} ${AW.join(" ")}\n`), CW.children.length > 0 && (MW += this._ExportHierarchy(CW.children, RW + 1)), MW += `${wW}}\n`
          }
        }
        return MW
      }
      static _IsEndSite(WW) {
        return 0 === WW.children.length
      }
      static _GetBoneOffset(WW) {
        try {
          if (!WW.getParent()) return WW.getRestMatrix().getTranslation();
          return WW.getLocalMatrix().getTranslation()
        } catch (RW) {
          return wW.vC.Zero()
        }
      }
      static _ExportMotionData(WW, RW, MW, wW) {
        let CW = "";
        for (let zR = 0; zR < RW; zR++) {
          const RW = [];
          this._CollectFrameValues(WW, zR + MW, RW, wW), CW += RW.map((WW => WW.toFixed(6))).join(" ") + "\n"
        }
        return CW
      }
      static _CollectFrameValues(WW, RW, MW, wW) {
        for (const CW of WW)
          if (!this._IsEndSite(CW)) {
            if (CW.hasPositionChannels) {
              const WW = this._GetPositionAtFrameIndex(CW.positionKeys, RW);
              MW.push(WW.x, WW.y, WW.z)
            }
            if (CW.hasRotationChannels) {
              const WW = this._GetRotationAtFrameIndex(CW.rotationKeys, RW),
                wW = this._QuaternionToEuler(WW);
              MW.push(wW.z, wW.x, wW.y)
            }
            CW.children.length > 0 && this._CollectFrameValues(CW.children, RW, MW, wW)
          }
      }
      static _GetPositionAtFrameIndex(WW, RW) {
        if (0 === WW.length) return wW.vC.Zero();
        return WW[Math.max(0, Math.min(RW, WW.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(WW, RW) {
        if (0 === WW.length) return wW.Quaternion.Identity();
        return WW[Math.max(0, Math.min(RW, WW.length - 1))].value.clone()
      }
      static _QuaternionToEuler(WW) {
        const RW = new wW.Matrix;
        WW.toRotationMatrix(RW);
        const MW = RW.m;
        let zR, AW, bR;
        const yR = Math.sqrt(MW[0] * MW[0] + MW[1] * MW[1]);
        return yR > dM.c ? (zR = Math.atan2(MW[6], MW[10]), AW = Math.atan2(-MW[2], yR), bR = Math.atan2(MW[1], MW[0])) : (zR = Math.atan2(-MW[9], MW[5]), AW = Math.atan2(-MW[2], yR), bR = 0), new wW.vC(CW.Tools.ToDegrees(zR), CW.Tools.ToDegrees(AW), CW.Tools.ToDegrees(bR))
      }
    }

    function cb(WW) {
      return "string" === typeof WW?.name
    }
    const XA = Symbol("__xml:meta$__"),
      jb = Symbol("__xml:name$__");

    function kb(WW, RW) {
      Object.prototype.hasOwnProperty.call(WW.metadata, XA) || (WW.metadata[XA] = []), WW.metadata[XA].push(RW)
    }

    function ab(WW) {
      return (RW, MW) => {
        RW[jb] = WW
      }
    }

    function sA() {
      return (WW, RW) => kb(RW, {
        kind: "none",
        prop: String(RW.name),
        ignore: !0
      })
    }

    function dA(WW) {
      return (RW, MW) => kb(MW, {
        kind: "attr",
        prop: String(MW.name),
        ...WW
      })
    }

    function pA(WW) {
      return (RW, MW) => kb(MW, {
        kind: "elem",
        prop: String(MW.name),
        ...WW
      })
    }

    function hA(WW) {
      const RW = "function" === typeof WW ? WW : WW?.constructor,
        MW = RW?.[Symbol.metadata];
      if (!MW) return [];
      const wW = [];
      let CW = MW;
      for (; CW;) Object.prototype.hasOwnProperty.call(CW, XA) && wW.push(...CW[XA]), CW = Object.getPrototypeOf(CW);
      return wW
    }

    function UA(WW) {
      const RW = WW?.constructor?.[jb];
      return RW || void 0
    }

    function EA(WW) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(WW)
    }

    function VA(WW) {
      if (cb(WW)) return WW;
      const RW = (WW ?? "").trim();
      if (!RW) return {
        name: ""
      };
      const MW = RW.indexOf(":");
      if (-1 === MW) return {
        name: RW
      };
      if (-1 !== RW.indexOf(":", MW + 1)) return {
        name: RW
      };
      const wW = RW.slice(0, MW),
        CW = RW.slice(MW + 1);
      return EA(wW) && EA(CW) ? {
        ns: wW,
        name: CW
      } : {
        name: RW
      }
    }

    function mb(WW, RW) {
      return RW ? `${RW}:${WW}` : WW
    }
    const xb = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      vb = Object.freeze({
        number: xb
      });

    function KA(WW) {
      const RW = WW?.eps ?? xb.eps;
      return {
        eps: RW,
        maxDecimalsCap: WW?.maxDecimalsCap ?? xb.maxDecimalsCap,
        trimTrailingZeros: WW?.trimTrailingZeros ?? xb.trimTrailingZeros,
        fixedDecimals: WW?.fixedDecimals,
        allowScientific: WW?.allowScientific ?? xb.allowScientific,
        snapNearZero: WW?.snapNearZero ?? xb.snapNearZero,
        zeroThreshold: WW?.zeroThreshold ?? RW,
        perAttributeEps: WW?.perAttributeEps
      }
    }

    function uA(WW) {
      return {
        number: KA(WW?.number)
      }
    }
    class OA {
      constructor(WW) {
        if (this.o = WW, this._o = WW.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(WW) {
        if (!Number.isFinite(WW)) throw new Error(`Cannot format non-finite number: ${WW}`);
        const RW = this._o,
          MW = this._clampInt(RW.maxDecimalsCap ?? 15, 0, 20),
          wW = RW.trimTrailingZeros ?? !0,
          CW = RW.snapNearZero ?? !0,
          zR = RW.zeroThreshold ?? RW.eps,
          AW = 1 / RW.eps;
        let bR, yR = Math.round(WW * AW) / AW;
        if (Object.is(yR, -0) && (yR = 0), CW && Math.abs(yR) <= zR && (yR = 0), bR = void 0 !== RW.fixedDecimals ? this._clampInt(RW.fixedDecimals, 0, MW) : this._clampInt(Math.ceil(-Math.log10(RW.eps)), 0, MW), RW.allowScientific, 0 === bR) return String(Math.trunc(yR));
        let NW = yR.toFixed(bR);
        if (wW && void 0 === RW.fixedDecimals && (NW = NW.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(NW)) throw new Error(`Scientific notation not allowed in XML output: ${NW}`);
        return NW
      }
      _clampInt(WW, RW, MW) {
        return Number.isFinite(WW) ? (WW = Math.trunc(WW), Math.max(RW, Math.min(MW, WW))) : RW
      }
    }

    function nA(WW) {
      return WW instanceof Date
    }

    function GA(WW) {
      return "string" === typeof WW
    }

    function LA(WW) {
      return "string" === typeof WW || "number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW || nA(WW)
    }

    function HA(WW) {
      return "number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW || nA(WW)
    }
    class DA {
      constructor(WW, RW) {
        this._ns = new Map, this._prefixCount = 0, this._builder = WW, this._format = uA(RW), this._nFmt = new OA(this._format)
      }
      withNamespace() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        for (const wW of RW) this._assignNamespace(wW);
        return this
      }
      serialize(WW, RW) {
        if (!(RW = RW ?? UA(WW))) throw new Error("can not find name for given object");
        const MW = VA(RW);
        MW.ns && this._assignNamespace(MW.ns, "xmlns"), this._gatherNamespaces(WW, new WeakSet);
        const wW = this._builder.ele(null, MW.name);
        for (const [CW, zR] of Array.from(this._ns.entries())) wW.att("xmlns", zR, CW);
        this._writeObjectContent(wW, WW, (new WeakSet).add(WW)), this._builder.end()
      }
      _writeObject(WW, RW, MW) {
        if (MW.has(RW)) return;
        if (MW.add(RW), Array.isArray(RW)) {
          for (const wW of RW) HA(wW) || (GA(wW) ? this._builder.text(wW) : this._writeObject(WW, wW, MW));
          return
        }
        const wW = UA(RW);
        if (!wW) return;
        const CW = VA(wW),
          zR = this._getPrefix(CW),
          AW = mb(CW.name, zR);
        WW.ele(null, AW), this._writeObjectContent(WW, RW, MW), this._builder.end()
      }
      _getPrefix(WW) {
        if (WW.ns) {
          const RW = this._ns.get(WW.ns.toLowerCase());
          if ("xmlns" !== RW) return RW
        }
      }
      _writeObjectContent(WW, RW, MW) {
        const wW = hA(RW) ?? [],
          CW = new Map;
        for (const AW of wW) {
          const WW = CW.get(AW.prop) ?? [];
          WW.push(AW), CW.set(AW.prop, WW)
        }
        const zR = Object.keys(RW).sort(((WW, RW) => {
          const MW = (CW.get(WW) ?? []).some((WW => "attr" === WW.kind));
          return MW === (CW.get(RW) ?? []).some((WW => "attr" === WW.kind)) ? 0 : MW ? -1 : 1
        }));
        for (const AW of zR) {
          const wW = RW[AW];
          if (null === wW || void 0 === wW) continue;
          const zR = CW.get(AW);
          if (zR) {
            if (zR.some((WW => !0 === WW.ignore || "none" === WW.kind))) continue;
            for (const RW of zR) {
              const MW = RW.name ?? RW.prop.toLowerCase();
              if (MW) switch (RW.kind) {
                case "attr": {
                  let CW = null;
                  if ("number" === typeof wW && this._nFmt && (CW = this._nFmt.toString(wW)), RW.formatter) {
                    CW = new RW.formatter(this._format).toString(wW)
                  }
                  if (CW = CW ?? wW.toString(), CW) {
                    const RW = VA(MW),
                      wW = this._getPrefix(RW),
                      zR = mb(RW.name, wW);
                    WW.att(null, zR, CW)
                  }
                  break
                }
              }
            }
          } else HA(wW) || (GA(wW) ? this._builder.text(wW) : this._writeObject(WW, wW, MW))
        }
      }
      _gatherNamespaces(WW, RW) {
        if (RW.has(WW)) return;
        if (RW.add(WW), Array.isArray(WW)) {
          for (const MW of WW) LA(MW) || this._gatherNamespaces(MW, RW);
          return
        }
        const MW = UA(WW);
        MW && this._assignNamespace(MW);
        const wW = hA(WW) ?? [],
          CW = new Map;
        for (const AW of wW) {
          const WW = CW.get(AW.prop) ?? [];
          WW.push(AW), CW.set(AW.prop, WW)
        }
        const zR = [];
        for (const AW of Object.keys(WW)) {
          const RW = WW[AW];
          if (null === RW || void 0 === RW) continue;
          const MW = CW.get(AW);
          if (MW) {
            if (MW.some((WW => !0 === WW.ignore || "none" === WW.kind))) continue;
            for (const WW of MW) WW.name && this._assignNamespace(WW.name)
          }
          zR.push(RW)
        }
        for (const AW of zR) LA(AW) || this._gatherNamespaces(AW, RW)
      }
      _assignNamespace(WW, RW) {
        const MW = VA(WW);
        if (MW?.ns) {
          const WW = MW.ns.toLowerCase();
          this._ns.get(WW) || this._ns.set(WW, RW ?? this._buildNsPrefix(WW))
        } else if ("xmlns" === RW) {
          const WW = MW.name.toLowerCase();
          this._ns.get(WW) || this._ns.set(WW, RW ?? this._buildNsPrefix(WW))
        }
      }
      _buildNsPrefix(WW) {
        let RW, MW = !1;
        do {
          RW = "ns" + this._prefixCount++;
          for (const WW of Array.from(this._ns.values()))
            if (WW === RW) {
              MW = !0;
              break
            }
        } while (MW);
        return RW
      }
    }
    class qb {}
    var ZA;
    qb.OpenTag = "<", qb.CloseTag = ">", qb.Slash = "/", qb.Question = "?", qb.Quote = '"', qb.Equal = "=", qb.Space = " ", qb.Semicolon = ":", qb.Dec = "<?xml", qb.Xml = "xml", qb.Xmlns = "xmlns", qb.Xsi = "xsi", qb.VersionKeyword = "version", qb.EncodingKeyword = "encoding", qb.StandaloneKeyword = "standalone",
      function(WW) {
        WW[WW.Declaration = 0] = "Declaration", WW[WW.Tag = 1] = "Tag", WW[WW.Attribute = 2] = "Attribute", WW[WW.Text = 3] = "Text"
      }(ZA || (ZA = {}));
    class SA {
      constructor(WW) {
        this._ctxStack = [], this._d = 0, this._w = WW
      }
      dec(WW, RW, MW) {
        return this._w.write(qb.Dec), this._writeAttStr(qb.VersionKeyword, WW), RW && this._writeAttStr(qb.EncodingKeyword, RW), void 0 !== MW && this._writeAttStr(qb.StandaloneKeyword, MW ? "yes" : "no"), this._w.write(qb.Question, qb.CloseTag), this
      }
      att(WW, RW, MW) {
        const wW = this._peekContext();
        if (!wW) throw new Error("att() without open element");
        if (wW.closed) throw new Error(`att() after start tag closed for <${wW.name}>`);
        if (this._isXmlnsDecl(WW, RW)) {
          if (RW === qb.Xmlns) wW.defaultNs = MW, this._registerNamespace(wW, "", MW), this._writeAttStr(qb.Xmlns, MW);
          else if (WW) this._registerNamespace(wW, RW, MW), this._writeAttStr(`${WW}:${RW}`, MW);
          else {
            const WW = RW.slice(6);
            this._registerNamespace(wW, WW, MW), this._writeAttStr(RW, MW)
          }
          return wW.lastToken = ZA.Attribute, this
        }
        let CW = RW;
        if (WW) {
          CW = `${this._ensurePrefixDeclared(wW,WW)}:${RW}`
        }
        return wW.lastToken = ZA.Attribute, this._writeAttStr(CW, MW), this
      }
      ele(WW, RW) {
        const MW = this._peekContext();
        MW && this._closeOpenTagIfNeeded(MW);
        let wW = RW;
        if (WW) {
          wW = `${this._lookupPrefix(WW)??WW}:${RW}`
        }
        return this._pushContext(wW, ++this._d), this._w.write(qb.OpenTag, wW), this
      }
      text(WW) {
        const RW = this._peekContext();
        if (!RW) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(RW), RW.lastToken = ZA.Text, this._w.write(this._escText(WW)), this
      }
      end() {
        const WW = this._popContext();
        return WW && (this._d--, WW.closed ? this._w.write(qb.OpenTag, qb.Slash, WW.name, qb.CloseTag) : this._w.write(qb.Slash, qb.CloseTag)), this
      }
      _pushContext(WW, RW) {
        const MW = new SA.Context(WW, RW);
        return this._ctxStack.push(MW), MW
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
      _writeAttStr(WW, RW) {
        this._w.write(qb.Space, WW, qb.Equal, qb.Quote, this._escAttr(RW), qb.Quote)
      }
      _lookupPrefix(WW) {
        let RW = this._ctxStack.length - 1;
        if (RW >= 0)
          do {
            const MW = this._ctxStack[RW--],
              wW = MW.ns2prefix?.get(WW);
            if (wW) return wW
          } while (RW >= 0)
      }
      _escText(WW) {
        return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(WW) {
        return this._escText(WW).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(WW, RW) {
        if (WW) return WW === qb.Xmlns;
        const MW = RW.length,
          wW = qb.Xmlns.length;
        return MW >= wW && (RW.startsWith(qb.Xmlns) && (RW.length == wW || RW[wW] == qb.Semicolon))
      }
      _registerNamespace(WW, RW, MW) {
        if (RW === qb.Xml || RW === qb.Xmlns) throw new Error(`reserved prefix '${RW}'`);
        const wW = WW.prefix2ns.get(RW);
        if (wW && wW !== MW) throw new Error(`prefix '${RW}' already bound to a different namespace`);
        WW.ns2prefix.get(MW) || WW.ns2prefix.set(MW, RW), WW.prefix2ns.set(RW, MW)
      }
      _allocPrefix(WW) {
        let RW = 1;
        for (;;) {
          const MW = "ns" + RW++;
          if (!WW.prefix2ns.has(MW)) return MW
        }
      }
      _ensurePrefixDeclared(WW, RW) {
        const MW = this._lookupPrefix(RW);
        if (MW) return MW;
        if (WW.closed) throw new Error(`can not declare namespace after start tag closed for <${WW.name}>`);
        const wW = this._allocPrefix(WW);
        return this._writeAttStr(`${qb.Xmlns}:${wW}`, RW), this._registerNamespace(WW, wW, RW), wW
      }
      _closeOpenTagIfNeeded(WW) {
        WW.closed || (this._w.write(qb.CloseTag), WW.closed = !0)
      }
    }
    SA.Context = class {
      constructor(WW, RW) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = WW, this.depth = RW
      }
    };
    class Wb {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        if (0 === RW.length) return this;
        const wW = RW.join("");
        return this._chunks.push(wW), this.count += wW.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Rb {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = WW, this._opts = RW, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        if (0 === RW.length) return this;
        const wW = RW.join("");
        if (0 === wW.length) return this;
        this._pending += wW, this._pendingChars += wW.length;
        const CW = this._opts.flushChars ?? 65536;
        return this._pendingChars >= CW && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const WW = this._encoder.encode(this._pending);
        return this._sink.push(WW), this.count += WW.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Mb = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      wb = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Cb, zy;
    ! function(WW) {
      WW.micron = "micron", WW.millimeter = "millimeter", WW.centimeter = "centimeter", WW.inch = "inch", WW.foot = "foot", WW.meter = "meter"
    }(Cb || (Cb = {})),
    function(WW) {
      WW.model = "model", WW.solidsupport = "solidsupport", WW.support = "support", WW.surface = "surface", WW.other = "other"
    }(zy || (zy = {}));
    const Ab = "http://schemas.openxmlformats.org/package/2006/content-types",
      by = "http://schemas.openxmlformats.org/package/2006/relationships";
    var yy;
    ! function(WW) {
      WW.Relationships = "application/vnd.openxmlformats-package.relationships+xml", WW.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", WW.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", WW.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", WW.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", WW.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", WW.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", WW.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", WW.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", WW.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", WW.Png = "image/png", WW.Jpeg = "image/jpeg", WW.Tiff = "image/tiff", WW.Xml = "application/xml"
    }(yy || (yy = {}));
    const Nb = "_rels/",
      eb = "3D/",
      Bb = "3dmodel.model",
      ty = ".rels",
      Tb = "[Content_Types].xml";
    class gy {
      static IsKnown(WW) {
        return gy.Known.has(WW)
      }
      static IsThreeDimModel(WW) {
        return WW === gy.ThreeDimModel
      }
    }
    gy.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", gy.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", gy.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", gy.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", gy.Known = new Set([gy.ThreeDimModel, gy.Thumbnail, gy.PrintTicket, gy.MustPreserve]);
    let iy = (() => {
        let WW, RW, MW = [ab({
            ns: Ab,
            name: "Types"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.items = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfContentTypes"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      Yb = (() => {
        let WW, RW, MW, wW, CW = [ab({
            ns: Ab,
            name: "Default"
          })],
          zR = [],
          AW = [],
          bR = [],
          yR = [],
          NW = [];
        RW = class {
          constructor(WW, RW) {
            this.ext = (0, rR.i)(this, AW, void 0), this.ct = ((0, rR.i)(this, bR), (0, rR.i)(this, yR, void 0)), (0, rR.i)(this, NW), this.ext = WW, this.ct = RW
          }
        };
        return (0, rR.j)(RW, "ThreeMfContentType"), (() => {
          const eW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: {
              ns: Ab,
              name: "Extension"
            }
          })], wW = [dA({
            name: {
              ns: Ab,
              name: "ContentType"
            }
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: WW => "ext" in WW,
              get: WW => WW.ext,
              set: (WW, RW) => {
                WW.ext = RW
              }
            },
            metadata: eW
          }, AW, bR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: WW => "ct" in WW,
              get: WW => WW.ct,
              set: (WW, RW) => {
                WW.ct = RW
              }
            },
            metadata: eW
          }, yR, NW), (0, rR.e)(null, WW = {
            value: RW
          }, CW, {
            kind: "class",
            name: RW.name,
            metadata: eW
          }, null, zR), RW = WW.value, eW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eW
          }), (0, rR.i)(RW, zR)
        })(), RW
      })(),
      Jb = (() => {
        let WW, RW, MW = [ab({
            ns: by,
            name: "Relationships"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.items = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfRelationships"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      Pb = (() => {
        let WW, RW, MW, wW, CW, zR = [ab({
            ns: by,
            name: "Relationship"
          })],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        RW = class {
          constructor(WW, RW, MW) {
            this.id = (0, rR.i)(this, bR, void 0), this.type = ((0, rR.i)(this, yR), (0, rR.i)(this, NW, void 0)), this.target = ((0, rR.i)(this, eW), (0, rR.i)(this, BW, void 0)), (0, rR.i)(this, tR), this.id = WW, this.type = RW, this.target = MW
          }
        };
        return (0, rR.j)(RW, "ThreeMfRelationship"), (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "Id"
          })], wW = [dA({
            name: "Type"
          })], CW = [dA({
            name: "Target"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, RW) => {
                WW.id = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, RW) => {
                WW.type = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: WW => "target" in WW,
              get: WW => WW.target,
              set: (WW, RW) => {
                WW.target = RW
              }
            },
            metadata: TW
          }, BW, tR), (0, rR.e)(null, WW = {
            value: RW
          }, zR, {
            kind: "class",
            name: RW.name,
            metadata: TW
          }, null, AW), RW = WW.value, TW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          }), (0, rR.i)(RW, AW)
        })(), RW
      })();
    class Ib {
      constructor(WW, RW, MW) {
        this.contentTypes = WW, this.relationships = RW, this.model = MW
      }
    }
    class ob {
      static Zero() {
        return new ob([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(WW) {
        this.values = WW
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class lb {
      constructor(WW) {
        this.o = WW, this._f = new OA(WW)
      }
      toString(WW) {
        return WW.values.map((WW => this._f.toString(WW))).join(" ")
      }
    }
    let Fb = (() => {
        let WW, RW, MW, wW, CW, zR = [ab({
            ns: Mb,
            name: "model"
          })],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        RW = class {
          constructor() {
            this.unit = (0, rR.i)(this, bR, Cb.millimeter), this.requiredextensions = ((0, rR.i)(this, yR), (0, rR.i)(this, NW, void 0)), this.recommendedextensions = ((0, rR.i)(this, eW), (0, rR.i)(this, BW, void 0)), this.metadata = (0, rR.i)(this, tR)
          }
        };
        return (0, rR.j)(RW, "ThreeMfModel"), (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "unit"
          })], wW = [dA({
            name: "requiredextensions"
          })], CW = [dA({
            name: "recommendedextensions"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: WW => "unit" in WW,
              get: WW => WW.unit,
              set: (WW, RW) => {
                WW.unit = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "requiredextensions" in WW,
              get: WW => WW.requiredextensions,
              set: (WW, RW) => {
                WW.requiredextensions = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "recommendedextensions" in WW,
              get: WW => WW.recommendedextensions,
              set: (WW, RW) => {
                WW.recommendedextensions = RW
              }
            },
            metadata: TW
          }, BW, tR), (0, rR.e)(null, WW = {
            value: RW
          }, zR, {
            kind: "class",
            name: RW.name,
            metadata: TW
          }, null, AW), RW = WW.value, TW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          })
        })(), RW.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, rR.i)(RW, AW), RW
      })(),
      fb = (() => {
        let WW, RW, MW, wW, CW, zR = [ab({
            ns: Mb,
            name: "meta"
          })],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        RW = class {
          constructor(WW, RW, MW, wW) {
            this.name = (0, rR.i)(this, bR, void 0), this.preserve = ((0, rR.i)(this, yR), (0, rR.i)(this, NW, void 0)), this.type = ((0, rR.i)(this, eW), (0, rR.i)(this, BW, void 0)), this.value = (0, rR.i)(this, tR), this.name = WW, this.value = RW, this.preserve = MW, this.type = wW
          }
        };
        return (0, rR.j)(RW, "ThreeMfMeta"), (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "name"
          })], wW = [dA({
            name: "preserve"
          })], CW = [dA({
            name: "type"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, RW) => {
                WW.name = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: WW => "preserve" in WW,
              get: WW => WW.preserve,
              set: (WW, RW) => {
                WW.preserve = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, RW) => {
                WW.type = RW
              }
            },
            metadata: TW
          }, BW, tR), (0, rR.e)(null, WW = {
            value: RW
          }, zR, {
            kind: "class",
            name: RW.name,
            metadata: TW
          }, null, AW), RW = WW.value, TW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          }), (0, rR.i)(RW, AW)
        })(), RW
      })(),
      Qb = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "metadatagroup"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfMetadataGroup"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      ry = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "resources"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.object = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfResources"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      cy = (() => {
        let WW, RW, MW, wW, CW, zR, AW, bR, yR, NW = [ab({
            ns: Mb,
            name: "object"
          })],
          eW = [],
          BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [],
          JW = [],
          PW = [],
          IW = [],
          oW = [],
          lW = [],
          FW = [],
          fW = [],
          QW = [];
        RW = class {
          constructor(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zy.model;
            this.id = (0, rR.i)(this, BW, void 0), this.type = ((0, rR.i)(this, tR), (0, rR.i)(this, TW, void 0)), this.thumbnail = ((0, rR.i)(this, gR), (0, rR.i)(this, iR, void 0)), this.partnumber = ((0, rR.i)(this, YW), (0, rR.i)(this, JW, void 0)), this.name = ((0, rR.i)(this, PW), (0, rR.i)(this, IW, void 0)), this.pid = ((0, rR.i)(this, oW), (0, rR.i)(this, lW, void 0)), this.pindex = ((0, rR.i)(this, FW), (0, rR.i)(this, fW, void 0)), this.metadatagroup = (0, rR.i)(this, QW), this.id = WW, this.type = RW
          }
        };
        return (0, rR.j)(RW, "ThreeMfObject"), (() => {
          const cR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "id"
          })], wW = [dA({
            name: "type"
          })], CW = [dA({
            name: "thumbnail"
          })], zR = [dA({
            name: "partnumber"
          })], AW = [dA({
            name: "name"
          })], bR = [dA({
            name: "pid"
          })], yR = [dA({
            name: "pindex"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, RW) => {
                WW.id = RW
              }
            },
            metadata: cR
          }, BW, tR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, RW) => {
                WW.type = RW
              }
            },
            metadata: cR
          }, TW, gR), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: WW => "thumbnail" in WW,
              get: WW => WW.thumbnail,
              set: (WW, RW) => {
                WW.thumbnail = RW
              }
            },
            metadata: cR
          }, iR, YW), (0, rR.e)(null, null, zR, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "partnumber" in WW,
              get: WW => WW.partnumber,
              set: (WW, RW) => {
                WW.partnumber = RW
              }
            },
            metadata: cR
          }, JW, PW), (0, rR.e)(null, null, AW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, RW) => {
                WW.name = RW
              }
            },
            metadata: cR
          }, IW, oW), (0, rR.e)(null, null, bR, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: WW => "pid" in WW,
              get: WW => WW.pid,
              set: (WW, RW) => {
                WW.pid = RW
              }
            },
            metadata: cR
          }, lW, FW), (0, rR.e)(null, null, yR, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: WW => "pindex" in WW,
              get: WW => WW.pindex,
              set: (WW, RW) => {
                WW.pindex = RW
              }
            },
            metadata: cR
          }, fW, QW), (0, rR.e)(null, WW = {
            value: RW
          }, NW, {
            kind: "class",
            name: RW.name,
            metadata: cR
          }, null, eW), RW = WW.value, cR && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cR
          }), (0, rR.i)(RW, eW)
        })(), RW
      })(),
      Xb = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "mesh"
          })],
          wW = [];
        RW = class {
          constructor(WW, RW) {
            this.vertices = WW ?? new jy, this.triangles = RW ?? new ay
          }
        };
        return (0, rR.j)(RW, "ThreeMfMesh"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      jy = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "vertices"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfVertices"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      ky = (() => {
        let WW, RW, MW, wW, CW, zR = [ab({
            ns: Mb,
            name: "vertex"
          })],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        RW = class {
          constructor() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, rR.i)(this, bR, void 0), this.y = ((0, rR.i)(this, yR), (0, rR.i)(this, NW, void 0)), this.z = ((0, rR.i)(this, eW), (0, rR.i)(this, BW, void 0)), (0, rR.i)(this, tR), this.x = WW, this.y = RW, this.z = MW
          }
        };
        return (0, rR.j)(RW, "ThreeMfVertex"), (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "x"
          })], wW = [dA({
            name: "y"
          })], CW = [dA({
            name: "z"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: WW => "x" in WW,
              get: WW => WW.x,
              set: (WW, RW) => {
                WW.x = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: WW => "y" in WW,
              get: WW => WW.y,
              set: (WW, RW) => {
                WW.y = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: WW => "z" in WW,
              get: WW => WW.z,
              set: (WW, RW) => {
                WW.z = RW
              }
            },
            metadata: TW
          }, BW, tR), (0, rR.e)(null, WW = {
            value: RW
          }, zR, {
            kind: "class",
            name: RW.name,
            metadata: TW
          }, null, AW), RW = WW.value, TW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          }), (0, rR.i)(RW, AW)
        })(), RW
      })(),
      ay = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "triangles"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfTriangles"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      sb = (() => {
        let WW, RW, MW, wW, CW, zR, AW, bR, yR, NW = [ab({
            ns: Mb,
            name: "triangle"
          })],
          eW = [],
          BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [],
          JW = [],
          PW = [],
          IW = [],
          oW = [],
          lW = [],
          FW = [],
          fW = [],
          QW = [];
        RW = class {
          constructor(WW, RW, MW) {
            this.v1 = (0, rR.i)(this, BW, void 0), this.v2 = ((0, rR.i)(this, tR), (0, rR.i)(this, TW, void 0)), this.v3 = ((0, rR.i)(this, gR), (0, rR.i)(this, iR, void 0)), this.p1 = ((0, rR.i)(this, YW), (0, rR.i)(this, JW, void 0)), this.p2 = ((0, rR.i)(this, PW), (0, rR.i)(this, IW, void 0)), this.p3 = ((0, rR.i)(this, oW), (0, rR.i)(this, lW, void 0)), this.pid = ((0, rR.i)(this, FW), (0, rR.i)(this, fW, void 0)), (0, rR.i)(this, QW), this.v1 = WW, this.v2 = RW, this.v3 = MW
          }
        };
        return (0, rR.j)(RW, "ThreeMfTriangle"), (() => {
          const cR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "v1"
          })], wW = [dA({
            name: "v2"
          })], CW = [dA({
            name: "v3"
          })], zR = [dA({
            name: "p1"
          })], AW = [dA({
            name: "p2"
          })], bR = [dA({
            name: "p3"
          })], yR = [dA({
            name: "pid"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: WW => "v1" in WW,
              get: WW => WW.v1,
              set: (WW, RW) => {
                WW.v1 = RW
              }
            },
            metadata: cR
          }, BW, tR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: WW => "v2" in WW,
              get: WW => WW.v2,
              set: (WW, RW) => {
                WW.v2 = RW
              }
            },
            metadata: cR
          }, TW, gR), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: WW => "v3" in WW,
              get: WW => WW.v3,
              set: (WW, RW) => {
                WW.v3 = RW
              }
            },
            metadata: cR
          }, iR, YW), (0, rR.e)(null, null, zR, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: WW => "p1" in WW,
              get: WW => WW.p1,
              set: (WW, RW) => {
                WW.p1 = RW
              }
            },
            metadata: cR
          }, JW, PW), (0, rR.e)(null, null, AW, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: WW => "p2" in WW,
              get: WW => WW.p2,
              set: (WW, RW) => {
                WW.p2 = RW
              }
            },
            metadata: cR
          }, IW, oW), (0, rR.e)(null, null, bR, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: WW => "p3" in WW,
              get: WW => WW.p3,
              set: (WW, RW) => {
                WW.p3 = RW
              }
            },
            metadata: cR
          }, lW, FW), (0, rR.e)(null, null, yR, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: WW => "pid" in WW,
              get: WW => WW.pid,
              set: (WW, RW) => {
                WW.pid = RW
              }
            },
            metadata: cR
          }, fW, QW), (0, rR.e)(null, WW = {
            value: RW
          }, NW, {
            kind: "class",
            name: RW.name,
            metadata: cR
          }, null, eW), RW = WW.value, cR && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cR
          }), (0, rR.i)(RW, eW)
        })(), RW
      })(),
      db = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "components"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.component = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfComponents"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      pb = (() => {
        let WW, RW, MW, wW, CW = [ab({
            ns: Mb,
            name: "component"
          })],
          zR = [],
          AW = [],
          bR = [],
          yR = [],
          NW = [];
        RW = class {
          constructor(WW, RW) {
            this.objectid = (0, rR.i)(this, AW, void 0), this.transform = ((0, rR.i)(this, bR), (0, rR.i)(this, yR, void 0)), (0, rR.i)(this, NW), this.objectid = WW, this.transform = RW
          }
        };
        return (0, rR.j)(RW, "ThreeMfComponent"), (() => {
          const eW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "objectid"
          })], wW = [dA({
            name: "transform",
            formatter: lb
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: WW => "objectid" in WW,
              get: WW => WW.objectid,
              set: (WW, RW) => {
                WW.objectid = RW
              }
            },
            metadata: eW
          }, AW, bR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: WW => "transform" in WW,
              get: WW => WW.transform,
              set: (WW, RW) => {
                WW.transform = RW
              }
            },
            metadata: eW
          }, yR, NW), (0, rR.e)(null, WW = {
            value: RW
          }, CW, {
            kind: "class",
            name: RW.name,
            metadata: eW
          }, null, zR), RW = WW.value, eW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eW
          }), (0, rR.i)(RW, zR)
        })(), RW
      })(),
      hb = (() => {
        let WW, RW, MW, wW = [ab({
            ns: Mb,
            name: "basematerials"
          })],
          CW = [],
          zR = [],
          AW = [];
        RW = class {
          constructor(WW) {
            this.id = (0, rR.i)(this, zR, void 0), this.base = ((0, rR.i)(this, AW), []), this.id = WW
          }
        };
        return (0, rR.j)(RW, "ThreeMfBaseMaterials"), (() => {
          const bR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "id"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, RW) => {
                WW.id = RW
              }
            },
            metadata: bR
          }, zR, AW), (0, rR.e)(null, WW = {
            value: RW
          }, wW, {
            kind: "class",
            name: RW.name,
            metadata: bR
          }, null, CW), RW = WW.value, bR && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bR
          }), (0, rR.i)(RW, CW)
        })(), RW
      })(),
      Ub = (() => {
        let WW, RW, MW, wW, CW = [ab({
            ns: Mb,
            name: "base"
          })],
          zR = [],
          AW = [],
          bR = [],
          yR = [],
          NW = [];
        RW = class {
          constructor(WW, RW) {
            this.name = (0, rR.i)(this, AW, void 0), this.displaycolor = ((0, rR.i)(this, bR), (0, rR.i)(this, yR, void 0)), (0, rR.i)(this, NW), this.name = WW, this.displaycolor = RW
          }
        };
        return (0, rR.j)(RW, "ThreeMfBase"), (() => {
          const eW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "name"
          })], wW = [dA({
            name: "displaycolor"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, RW) => {
                WW.name = RW
              }
            },
            metadata: eW
          }, AW, bR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: WW => "displaycolor" in WW,
              get: WW => WW.displaycolor,
              set: (WW, RW) => {
                WW.displaycolor = RW
              }
            },
            metadata: eW
          }, yR, NW), (0, rR.e)(null, WW = {
            value: RW
          }, CW, {
            kind: "class",
            name: RW.name,
            metadata: eW
          }, null, zR), RW = WW.value, eW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eW
          }), (0, rR.i)(RW, zR)
        })(), RW
      })(),
      Eb = (() => {
        let WW, RW, MW = [ab({
            ns: Mb,
            name: "build"
          })],
          wW = [];
        RW = class {
          constructor() {
            this.item = []
          }
        };
        return (0, rR.j)(RW, "ThreeMfBuild"), (() => {
          const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, rR.e)(null, WW = {
            value: RW
          }, MW, {
            kind: "class",
            name: RW.name,
            metadata: CW
          }, null, wW), RW = WW.value, CW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CW
          }), (0, rR.i)(RW, wW)
        })(), RW
      })(),
      Vb = (() => {
        let WW, RW, MW, wW, CW, zR = [ab({
            ns: Mb,
            name: "item"
          })],
          AW = [],
          bR = [],
          yR = [],
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        RW = class {
          constructor(WW, RW, MW) {
            this.objectid = (0, rR.i)(this, bR, void 0), this.transform = ((0, rR.i)(this, yR), (0, rR.i)(this, NW, void 0)), this.partnumber = ((0, rR.i)(this, eW), (0, rR.i)(this, BW, void 0)), this.metadatagroup = (0, rR.i)(this, tR), this.objectid = WW, this.transform = RW, this.partnumber = MW
          }
        };
        return (0, rR.j)(RW, "ThreeMfItem"), (() => {
          const TW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          MW = [dA({
            name: "objectid"
          })], wW = [dA({
            name: "transform",
            formatter: lb
          })], CW = [dA({
            name: "partnumber"
          })], (0, rR.e)(null, null, MW, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: WW => "objectid" in WW,
              get: WW => WW.objectid,
              set: (WW, RW) => {
                WW.objectid = RW
              }
            },
            metadata: TW
          }, bR, yR), (0, rR.e)(null, null, wW, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: WW => "transform" in WW,
              get: WW => WW.transform,
              set: (WW, RW) => {
                WW.transform = RW
              }
            },
            metadata: TW
          }, NW, eW), (0, rR.e)(null, null, CW, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "partnumber" in WW,
              get: WW => WW.partnumber,
              set: (WW, RW) => {
                WW.partnumber = RW
              }
            },
            metadata: TW
          }, BW, tR), (0, rR.e)(null, WW = {
            value: RW
          }, zR, {
            kind: "class",
            name: RW.name,
            metadata: TW
          }, null, AW), RW = WW.value, TW && Object.defineProperty(RW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TW
          }), (0, rR.i)(RW, AW)
        })(), RW
      })();
    class my {
      constructor(WW, RW) {
        this._object = new cy(WW, RW)
      }
      withName(WW) {
        return this._object.name = WW, this
      }
      withThumbnail(WW) {
        return this._object.thumbnail = WW, this
      }
      withProperty(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = WW, this._object.id = RW, this
      }
      build() {
        return this._object
      }
      reset(WW, RW) {
        this._object = new cy(WW, RW)
      }
    }
    class xy extends my {
      constructor(WW) {
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zy.model), this._object.content = new db
      }
      withComponent(WW, RW) {
        return this._object.content.component.push(new pb(WW, RW)), this
      }
    }
    class vy extends my {
      constructor(WW) {
        super(WW, zy.model)
      }
      withPostProcessHandlers(WW, RW) {
        return this._vh = WW, this._th = RW, this
      }
      withData(WW) {
        return this._object.content = this._buildMesh(WW), this
      }
      withMaterial(WW, RW) {
        return this._object.pid = WW, this._object.pindex = RW, this
      }
      _buildMesh(WW) {
        const RW = this._buildVertices(WW.positions),
          MW = this._buildTriangle(WW.indices);
        return new Xb(RW, MW)
      }
      _buildVertices(WW) {
        const RW = new jy;
        if (WW)
          for (let MW = 0; MW < WW.length;) {
            const wW = WW[MW++],
              CW = WW[MW++],
              zR = WW[MW++];
            let AW = new ky(wW, CW, zR);
            this._vh && (AW = this._vh(AW)), RW.vertex.push(AW)
          }
        return RW
      }
      _buildTriangle(WW) {
        const RW = new ay;
        if (WW)
          for (let MW = 0; MW < WW.length;) {
            const wW = WW[MW++],
              CW = WW[MW++],
              zR = WW[MW++];
            let AW = new sb(wW, CW, zR);
            this._th && (AW = this._th(AW)), RW.triangle.push(AW)
          }
        return RW
      }
    }
    class Kb {
      constructor(WW) {
        this._m = new hb(WW)
      }
      withColor(WW, RW) {
        this._m.base = this._m.base ?? [];
        let MW = this._m.base.find((RW => RW.name.toLowerCase() === WW.toLowerCase()));
        return MW ? (MW.displaycolor = this._rgbaToHex(RW), this) : (MW = new Ub(WW, this._rgbaToHex(RW)), this._m.base.push(MW), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(WW) {
        const RW = WW => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(WW, 1 / 2.2)))),
          MW = RW(WW.r).toString(16).padStart(2, "0").toUpperCase(),
          wW = RW(WW.g).toString(16).padStart(2, "0").toUpperCase(),
          CW = RW(WW.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof WW.a) {
          return `#${MW}${wW}${CW}${Math.round(Math.min(255,Math.max(0,255*WW.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${MW}${wW}${CW}`
      }
    }
    class ub {
      constructor() {
        this._model = new Fb, this._objects = new Map
      }
      withMetaData(WW, RW, MW, wW) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new fb(WW, RW, MW, wW)), this
      }
      withMaterial(WW) {
        return WW instanceof Kb && (WW = WW.build()), WW && (this._model.resources = this._model.resources ?? new ry, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(WW)), this
      }
      withMesh(WW) {
        return WW instanceof vy && (WW = WW.build()), this._model.resources = this._model.resources ?? new ry, this._model.resources.object.push(WW), this
      }
      withComponents(WW) {
        return WW instanceof xy && (WW = WW.build()), this._model.resources = this._model.resources ?? new ry, this._model.resources.object.push(WW), this
      }
      withBuild(WW, RW, MW) {
        return this._model.build = this._model.build ?? new Eb, this._model.build.item?.push(new Vb(WW, RW, MW)), this
      }
      withUnit(WW) {
        return this._model.unit = WW, this
      }
      reset() {
        return this._model = new Fb, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    ub.KnownMetaSet = new Set(Fb.KnownMeta.map((WW => WW.toLowerCase())));
    class Ob {
      withContentType(WW) {
        this._cts || (this._cts = new iy);
        const RW = this._cts.items;
        return RW.some((RW => RW.ext === WW.ext && RW.ct === WW.ct)) || RW.push(WW), this
      }
      withRelationship(WW) {
        this._rs || (this._rs = new Jb);
        const RW = this._rs.items;
        return RW.some((RW => RW.id === WW.id)) || RW.push(WW), this.withContentType(new Yb("rels", yy.Relationships)), this
      }
      withModel(WW) {
        return WW instanceof ub && (WW = WW.build()), this._m = WW, this.withContentType(new Yb("model", yy.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const WW = `${eb}${Bb}`;
        if (!this._rs) {
          const RW = `/${WW}`;
          this.withRelationship(new Pb("rel0", gy.ThreeDimModel, RW))
        }
        return new Ib(this._cts, this._rs, this._m)
      }
    }
    class nb {
      constructor(WW) {
        this._o = WW
      }
      get options() {
        return this._o
      }
      async serializeAsync(WW) {
        const RW = await this.ensureZipLibReadyAsync();
        if (!RW) return;
        const MW = RW.Zip,
          wW = RW.ZipDeflate;
        if (!MW || !wW) throw new Error("fflate Zip / ZipDeflate not available");
        const CW = function(WW, RW, MW) {
          const CW = new wW(RW, {
            level: 6
          });
          WW.add(CW);
          const zR = function(WW) {
              return {
                push: (RW, MW) => WW.push(RW, MW)
              }
            }(CW),
            AW = new Rb(zR),
            bR = new SA(AW).dec("1.0", "UTF-8");
          new DA(bR).serialize(MW), AW.finish()
        };
        for (var zR = arguments.length, AW = new Array(zR > 1 ? zR - 1 : 0), bR = 1; bR < zR; bR++) AW[bR - 1] = arguments[bR];
        const yR = this.toDocument(...AW);
        if (!yR) return;
        const NW = new MW(WW);
        CW(NW, Tb, yR.contentTypes), CW(NW, `${Nb}${ty}`, yR.relationships), CW(NW, `${eb}${Bb}`, yR.model), NW.end()
      }
      toDocument() {
        const WW = (new ub).withUnit(this._o?.unit ?? Cb.millimeter);
        if (this.options.metadata)
          for (const CW in this.options.metadata) WW.withMetaData(CW, this.options.metadata[CW]);
        for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
        return (new Ob).withModel(this.toModel(WW, ...MW)).build()
      }
    }
    class Gb {
      static async SerializeToMemoryAsync(WW) {
        const RW = new Array;
        let MW = 0;
        for (var wW = arguments.length, CW = new Array(wW > 1 ? wW - 1 : 0), zR = 1; zR < wW; zR++) CW[zR - 1] = arguments[zR];
        if (await WW.serializeAsync((function(WW, wW, CW) {
            RW.push(wW), MW += wW.length
          }), ...CW), !MW) return;
        const AW = new Uint8Array(MW);
        let bR = 0;
        for (const yR of RW) AW.set(yR, bR), bR += yR.length;
        return AW
      }
    }
    class Lb {}
    Lb.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Hb {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = WW, this._to = RW, this._step = MW, this._i = WW
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const WW = this._i;
        return this._i += this._step, WW
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Db extends nb {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Db.DefaultOptions,
          ...WW
        })
      }
      toModel(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        MW = MW.filter((WW => WW instanceof Nw.c || WW instanceof TW.e));
        const CW = new Hb,
          zR = WW,
          AW = new Map,
          bR = this.options.exportInstances ? [] : null;
        for (let yR = 0; yR < MW.length; yR++) {
          const WW = MW[yR];
          if (WW instanceof TW.e) {
            bR?.push(WW);
            continue
          }
          const RW = WW.name || `mesh${yR}`,
            wW = WW.getWorldMatrix(),
            NW = this._handleBabylonTo3mfMatrixTransformToRef(wW, ob.Zero()),
            eW = WW.Qs;
          if (void 0 === eW) continue;
          const BW = 1 == eW.length;
          for (let MW = 0; MW < eW.length; MW++) {
            const wW = eW[MW],
              bR = this._extractSubMesh(WW, wW);
            if (bR) {
              const WW = BW ? `${RW}` : `${RW}_${MW}`,
                yR = new vy(CW.next()).withData(bR).withName(WW).build();
              zR.withMesh(yR), zR.withBuild(yR.id, NW), AW.set(wW, yR)
            }
          }
        }
        if (bR && bR.length) {
          const WW = this._groupBy(bR, (WW => WW.yBW));
          for (const [RW, MW] of Array.from(WW.entries()))
            if (MW && MW.length)
              for (let WW = 0; WW < MW.length; WW++) {
                const wW = MW[WW].getWorldMatrix(),
                  CW = RW.Qs;
                for (let WW = 0; WW < CW.length; WW++) {
                  const RW = CW[WW],
                    MW = AW.get(RW);
                  MW && zR.withBuild(MW.id, this._handleBabylonTo3mfMatrixTransformToRef(wW, ob.Zero()))
                }
              }
        }
        return zR.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const WW = globalThis;
          return WW.fflate || await CW.Tools.LoadScriptAsync(Lb.FFLATEUrl), WW.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(WW, RW) {
        const MW = WW.ptW();
        if (!MW) return;
        const wW = WW.getVerticesData(Db._PositionKind);
        if (!wW) return;
        if (0 == RW.indexStart && RW.indexCount == MW.length) return {
          positions: wW,
          indices: MW
        };
        const CW = RW.indexStart,
          zR = new Map,
          AW = [],
          bR = new Uint32Array(RW.indexCount);
        for (let yR = 0; yR < RW.indexCount; yR++) {
          const WW = MW[CW + yR];
          let RW = zR.get(WW);
          if (void 0 === RW) {
            RW = zR.size, zR.set(WW, RW);
            const MW = 3 * WW;
            AW.push(wW[MW], wW[MW + 1], wW[MW + 2])
          }
          bR[yR] = RW
        }
        return {
          positions: new Float32Array(AW),
          indices: bR
        }
      }
      _groupBy(WW, RW) {
        const MW = new Map;
        for (const wW of WW) {
          const WW = RW(wW),
            CW = MW.get(WW);
          CW ? CW.push(wW) : MW.set(WW, [wW])
        }
        return MW
      }
      _handleBabylonTo3mfMatrixTransformToRef(WW, RW) {
        const MW = WW.multiplyToRef(Db._R_BJS_TO_3MF, VW.d.Zero()).m;
        return RW.values = [MW[0], MW[1], MW[2], MW[4], MW[5], MW[6], MW[8], MW[9], MW[10], MW[12], MW[13], MW[14]], RW
      }
    }
    Db.DefaultOptions = {
      unit: Cb.meter,
      exportInstances: !1
    }, Db._PositionKind = "position", Db._R_BJS_TO_3MF = VW.d.RotationX(Math.PI / 2).multiply(VW.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);