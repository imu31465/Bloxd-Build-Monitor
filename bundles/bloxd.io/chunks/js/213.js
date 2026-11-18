export const id = 213;
export const ids = [213, 217];
export const modules = {
  40542: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(40476),
      UJ = ZJ(38797);
    let eJ = !1;

    function XJ() {
      eJ || (eJ = !0, UJ.c.prototype._sphericalPolynomialTargetSize = 0, UJ.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(UJ.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = FJ.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((JJ => {
              this._texture._sphericalPolynomial = JJ, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(JJ) {
          this._texture && (this._texture._sphericalPolynomial = JJ)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36229: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Color3: () => FJ.e,
      e: () => FJ.f
    });
    var FJ = ZJ(36231);
    (0, FJ.g)()
  },
  36742: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36744);
    class UJ {
      static GetPlanes(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < 6; ZJ++) cJ.push(new FJ.c(0, 0, 0, 0));
        return UJ.GetPlanesToRef(JJ, cJ), cJ
      }
      static GetNearPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[2], cJ.normal.y = ZJ[7] + ZJ[6], cJ.normal.z = ZJ[11] + ZJ[10], cJ.d = ZJ[15] + ZJ[14], cJ.normalize()
      }
      static GetFarPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[2], cJ.normal.y = ZJ[7] - ZJ[6], cJ.normal.z = ZJ[11] - ZJ[10], cJ.d = ZJ[15] - ZJ[14], cJ.normalize()
      }
      static GetLeftPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[0], cJ.normal.y = ZJ[7] + ZJ[4], cJ.normal.z = ZJ[11] + ZJ[8], cJ.d = ZJ[15] + ZJ[12], cJ.normalize()
      }
      static GetRightPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[0], cJ.normal.y = ZJ[7] - ZJ[4], cJ.normal.z = ZJ[11] - ZJ[8], cJ.d = ZJ[15] - ZJ[12], cJ.normalize()
      }
      static GetTopPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[1], cJ.normal.y = ZJ[7] - ZJ[5], cJ.normal.z = ZJ[11] - ZJ[9], cJ.d = ZJ[15] - ZJ[13], cJ.normalize()
      }
      static GetBottomPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[1], cJ.normal.y = ZJ[7] + ZJ[5], cJ.normal.z = ZJ[11] + ZJ[9], cJ.d = ZJ[15] + ZJ[13], cJ.normalize()
      }
      static GetPlanesToRef(JJ, cJ) {
        UJ.GetNearPlaneToRef(JJ, cJ[0]), UJ.GetFarPlaneToRef(JJ, cJ[1]), UJ.GetLeftPlaneToRef(JJ, cJ[2]), UJ.GetRightPlaneToRef(JJ, cJ[3]), UJ.GetTopPlaneToRef(JJ, cJ[4]), UJ.GetBottomPlaneToRef(JJ, cJ[5])
      }
      static IsPointInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (cJ[ZJ].dotCoordinate(JJ) < 0) return !1;
        return !0
      }
    }
  },
  36744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this.normal = new FJ.j(JJ, cJ, ZJ), this.d = UJ
      }
      JFJ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new UJ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let JJ = this.normal.getHashCode();
        return JJ = 397 * JJ ^ this.d, JJ
      }
      normalize() {
        const JJ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cJ = 0;
        return 0 !== JJ && (cJ = 1 / JJ), this.normal.x *= cJ, this.normal.y *= cJ, this.normal.z *= cJ, this.d *= cJ, this
      }
      transform(JJ) {
        const cJ = UJ._TmpMatrix;
        JJ.invertToRef(cJ);
        const ZJ = cJ.m,
          FJ = this.normal.x,
          eJ = this.normal.y,
          XJ = this.normal.z,
          AJ = this.d,
          qJ = FJ * ZJ[0] + eJ * ZJ[1] + XJ * ZJ[2] + AJ * ZJ[3],
          jJ = FJ * ZJ[4] + eJ * ZJ[5] + XJ * ZJ[6] + AJ * ZJ[7],
          YJ = FJ * ZJ[8] + eJ * ZJ[9] + XJ * ZJ[10] + AJ * ZJ[11],
          hJ = FJ * ZJ[12] + eJ * ZJ[13] + XJ * ZJ[14] + AJ * ZJ[15];
        return new UJ(qJ, jJ, YJ, hJ)
      }
      dotCoordinate(JJ) {
        return this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z + this.d
      }
      copyFromPoints(JJ, cJ, ZJ) {
        const FJ = cJ.x - JJ.x,
          UJ = cJ.y - JJ.y,
          eJ = cJ.z - JJ.z,
          XJ = ZJ.x - JJ.x,
          AJ = ZJ.y - JJ.y,
          qJ = ZJ.z - JJ.z,
          jJ = UJ * qJ - eJ * AJ,
          YJ = eJ * XJ - FJ * qJ,
          hJ = FJ * AJ - UJ * XJ,
          DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
        let sJ;
        return sJ = 0 !== DJ ? 1 / DJ : 0, this.normal.x = jJ * sJ, this.normal.y = YJ * sJ, this.normal.z = hJ * sJ, this.d = -(this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z), this
      }
      isFrontFacingTo(JJ, cJ) {
        return FJ.j.Dot(this.normal, JJ) <= cJ
      }
      signedDistanceTo(JJ) {
        return FJ.j.Dot(JJ, this.normal) + this.d
      }
      static FromArray(JJ) {
        return new UJ(JJ[0], JJ[1], JJ[2], JJ[3])
      }
      static FromPoints(JJ, cJ, ZJ) {
        const FJ = new UJ(0, 0, 0, 0);
        return FJ.copyFromPoints(JJ, cJ, ZJ), FJ
      }
      static FromPositionAndNormal(JJ, cJ) {
        const ZJ = new UJ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(JJ, cJ, ZJ)
      }
      static FromPositionAndNormalToRef(JJ, cJ, ZJ) {
        return ZJ.normal.rZJ(cJ), ZJ.normal.normalize(), ZJ.d = -JJ.dot(ZJ.normal), ZJ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(JJ, cJ, ZJ) {
        const UJ = -(cJ.x * JJ.x + cJ.y * JJ.y + cJ.z * JJ.z);
        return FJ.j.Dot(ZJ, cJ) + UJ
      }
    }
    UJ._TmpMatrix = FJ.b.Identity()
  },
  36165: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Matrix: () => FJ.b,
      Quaternion: () => FJ.e,
      RegisterMathVector: () => FJ.f,
      TmpVectors: () => FJ.h,
      Vector2: () => FJ.i,
      Pn: () => FJ.j,
      Vector4: () => FJ.k
    });
    var FJ = ZJ(36174);
    (0, FJ.f)()
  },
  37100: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.x = JJ, this.y = cJ, this.width = ZJ, this.height = FJ
      }
      toGlobal(JJ, cJ) {
        return new FJ(this.x * JJ, this.y * cJ, this.width * JJ, this.height * cJ)
      }
      toGlobalToRef(JJ, cJ, ZJ) {
        return ZJ.x = this.x * JJ, ZJ.y = this.y * cJ, ZJ.width = this.width * JJ, ZJ.height = this.height * cJ, this
      }
      clone() {
        return new FJ(this.x, this.y, this.width, this.height)
      }
    }
  },
  40476: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36207),
      eJ = ZJ(38790),
      XJ = ZJ(36177),
      AJ = ZJ(36231);
    class qJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.name = JJ, this.worldAxisForNormal = cJ, this.worldAxisForFileX = ZJ, this.worldAxisForFileY = FJ
      }
    }
    class jJ {
      static _NearestPow2Floor(JJ) {
        return JJ <= 1 ? 1 : 1 << Math.floor(Math.log2(JJ))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(JJ) {
        if (!JJ.isCube) return null;
        JJ.Qy()?.gn().flushFramebuffer();
        const cJ = JJ.getSize().width,
          ZJ = JJ._sphericalPolynomialTargetSize,
          FJ = ZJ > 0 ? this._NearestPow2Floor(ZJ) : 0,
          UJ = !JJ.noMipmap && !0 === JJ._texture?.generateMipMaps,
          eJ = FJ > 0 && FJ < cJ && UJ,
          XJ = eJ ? Math.max(0, Math.round(Math.log2(cJ / FJ))) : 0,
          AJ = eJ ? Math.max(1, Math.floor(cJ / Math.pow(2, XJ))) : cJ,
          qJ = JJ.readPixels(0, XJ, void 0, !1),
          jJ = JJ.readPixels(1, XJ, void 0, !1);
        let YJ, hJ;
        JJ.isRenderTarget ? (YJ = JJ.readPixels(3, XJ, void 0, !1), hJ = JJ.readPixels(2, XJ, void 0, !1)) : (YJ = JJ.readPixels(2, XJ, void 0, !1), hJ = JJ.readPixels(3, XJ, void 0, !1));
        const DJ = JJ.readPixels(4, XJ, void 0, !1),
          sJ = JJ.readPixels(5, XJ, void 0, !1),
          nJ = JJ.gammaSpace,
          GJ = FJ > 0 && FJ < cJ && !eJ;
        return new Promise((JJ => {
          Promise.all([jJ, qJ, YJ, hJ, DJ, sJ]).then((ZJ => {
            let [UJ, eJ, XJ, qJ, jJ, YJ] = ZJ, hJ = AJ;
            if (GJ) {
              const JJ = 4;
              UJ = this._DownsampleFace(UJ, cJ, FJ, JJ), eJ = this._DownsampleFace(eJ, cJ, FJ, JJ), XJ = this._DownsampleFace(XJ, cJ, FJ, JJ), qJ = this._DownsampleFace(qJ, cJ, FJ, JJ), jJ = this._DownsampleFace(jJ, cJ, FJ, JJ), YJ = this._DownsampleFace(YJ, cJ, FJ, JJ), hJ = FJ
            }
            const DJ = {
              size: hJ,
              right: eJ,
              left: UJ,
              up: XJ,
              down: qJ,
              front: jJ,
              back: YJ,
              format: 5,
              type: UJ instanceof Float32Array ? 1 : 0,
              gammaSpace: nJ
            };
            JJ(this.ConvertCubeMapToSphericalPolynomial(DJ))
          }))
        }))
      }
      static _AreaElement(JJ, cJ) {
        return Math.atan2(JJ * cJ, Math.sqrt(JJ * JJ + cJ * cJ + 1))
      }
      static _DownsampleFace(JJ, cJ, ZJ, FJ) {
        const UJ = JJ instanceof Float32Array ? JJ : Float32Array.from(JJ),
          eJ = ZJ * ZJ * FJ,
          XJ = new Float32Array(eJ),
          AJ = cJ / ZJ,
          qJ = 1 / (AJ * AJ);
        for (let YJ = 0; YJ < ZJ; YJ++) {
          const JJ = Math.floor(YJ * AJ),
            eJ = Math.floor((YJ + 1) * AJ);
          for (let jJ = 0; jJ < ZJ; jJ++) {
            const hJ = Math.floor(jJ * AJ),
              DJ = Math.floor((jJ + 1) * AJ),
              sJ = (YJ * ZJ + jJ) * FJ;
            for (let ZJ = 0; ZJ < FJ; ZJ++) {
              let AJ = 0;
              for (let XJ = JJ; XJ < eJ; XJ++)
                for (let JJ = hJ; JJ < DJ; JJ++) AJ += UJ[(XJ * cJ + JJ) * FJ + ZJ];
              XJ[sJ + ZJ] = AJ * qJ
            }
          }
        }
        if (JJ instanceof Float32Array) return XJ;
        const jJ = new(0, JJ.constructor)(eJ);
        for (let YJ = 0; YJ < eJ; YJ++) jJ[YJ] = XJ[YJ] + .5 | 0;
        return jJ
      }
      static ConvertCubeMapToSphericalPolynomial(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = cJ > 0 ? this._NearestPow2Floor(cJ) : 0;
        if (ZJ > 0 && JJ.size > ZJ) {
          const cJ = 5 === JJ.format ? 4 : 3,
            FJ = ["right", "left", "up", "down", "front", "back"],
            UJ = {};
          for (const eJ of FJ) UJ[eJ] = this._DownsampleFace(JJ[eJ], JJ.size, ZJ, cJ);
          JJ = {
            ...JJ,
            ...UJ,
            size: ZJ
          }
        }
        const FJ = new eJ.e;
        let qJ = 0;
        const jJ = 2 / JJ.size,
          YJ = jJ,
          hJ = .5 * jJ,
          DJ = hJ - 1;
        for (let eJ = 0; eJ < 6; eJ++) {
          const cJ = this._FileFaces[eJ],
            ZJ = JJ[cJ.name];
          let sJ = DJ;
          const nJ = 5 === JJ.format ? 4 : 3;
          for (let eJ = 0; eJ < JJ.size; eJ++) {
            let GJ = DJ;
            for (let YJ = 0; YJ < JJ.size; YJ++) {
              const DJ = cJ.worldAxisForFileX.scale(GJ).add(cJ.worldAxisForFileY.scale(sJ)).add(cJ.worldAxisForNormal);
              DJ.normalize();
              const fJ = this._AreaElement(GJ - hJ, sJ - hJ) - this._AreaElement(GJ - hJ, sJ + hJ) - this._AreaElement(GJ + hJ, sJ - hJ) + this._AreaElement(GJ + hJ, sJ + hJ);
              let xJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 0],
                rJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 1],
                vJ = ZJ[eJ * JJ.size * nJ + YJ * nJ + 2];
              isNaN(xJ) && (xJ = 0), isNaN(rJ) && (rJ = 0), isNaN(vJ) && (vJ = 0), 0 === JJ.type && (xJ /= 255, rJ /= 255, vJ /= 255), JJ.gammaSpace && (xJ = Math.pow((0, UJ.Clamp)(xJ), XJ.j), rJ = Math.pow((0, UJ.Clamp)(rJ), XJ.j), vJ = Math.pow((0, UJ.Clamp)(vJ), XJ.j));
              const mJ = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const JJ = Math.max(xJ, rJ, vJ);
                if (JJ > mJ) {
                  const cJ = mJ / JJ;
                  xJ *= cJ, rJ *= cJ, vJ *= cJ
                }
              } else xJ = (0, UJ.Clamp)(xJ, 0, mJ), rJ = (0, UJ.Clamp)(rJ, 0, mJ), vJ = (0, UJ.Clamp)(vJ, 0, mJ);
              const QJ = new AJ.e(xJ, rJ, vJ);
              FJ.addLight(DJ, QJ, fJ), qJ += fJ, GJ += jJ
            }
            sJ += YJ
          }
        }
        const sJ = 6 * (4 * Math.PI) / 6 / qJ;
        return FJ.scaleInPlace(sJ), FJ.convertIncidentRadianceToIrradiance(), FJ.convertIrradianceToLambertianRadiance(), eJ.h.FromHarmonics(FJ)
      }
    }
    jJ._FileFaces = [new qJ("right", new FJ.j(1, 0, 0), new FJ.j(0, 0, -1), new FJ.j(0, -1, 0)), new qJ("left", new FJ.j(-1, 0, 0), new FJ.j(0, 0, 1), new FJ.j(0, -1, 0)), new qJ("up", new FJ.j(0, 1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, 1)), new qJ("down", new FJ.j(0, -1, 0), new FJ.j(1, 0, 0), new FJ.j(0, 0, -1)), new qJ("front", new FJ.j(0, 0, 1), new FJ.j(1, 0, 0), new FJ.j(0, -1, 0)), new qJ("back", new FJ.j(0, 0, -1), new FJ.j(-1, 0, 0), new FJ.j(0, -1, 0))], jJ.MAX_HDRI_VALUE = 4096, jJ.PRESERVE_CLAMPED_COLORS = !1
  },
  40284: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.i,
      d: () => FJ.n
    });
    var FJ = ZJ(38844);
    (0, FJ.t)()
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  40512: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(40501),
      UJ = ZJ(40520);
    class eJ {
      static ExpandRGBDTexture(JJ) {
        const cJ = JJ._texture;
        if (!cJ || !JJ.isRGBD) return;
        const UJ = cJ.gn(),
          eJ = UJ.getCaps(),
          XJ = cJ.isReady;
        let AJ = !1;
        eJ.textureHalfFloatRender && eJ.textureHalfFloatLinearFiltering ? (AJ = !0, cJ.type = 2) : eJ.textureFloatRender && eJ.textureFloatLinearFiltering && (AJ = !0, cJ.type = 1), AJ && (cJ.isReady = !1, cJ._isRGBD = !1, cJ.invertY = !1);
        const qJ = async () => {
          const eJ = UJ.isWebGPU,
            XJ = eJ ? 1 : 0;
          cJ.isReady = !1, eJ ? await ZJ.e(322).then((() => ZJ(59636))) : await ZJ.e(304).then((() => ZJ(59641)));
          const AJ = new FJ.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, UJ, !1, void 0, cJ.type, void 0, null, !1, void 0, XJ);
          AJ.externalTextureSamplerBinding = !0;
          const qJ = UJ.createRenderTargetTexture(cJ.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: cJ.samplingMode,
            type: cJ.type,
            format: 5
          });
          AJ.onEffectCreatedObservable.addOnce((ZJ => {
            ZJ.executeWhenCompiled((() => {
              AJ.onApply = JJ => {
                JJ._bindTexture("textureSampler", cJ), JJ.setFloat2("scale", 1, 1)
              }, JJ.Qy()?.postProcessManager.directRender([AJ], qJ, !0), UJ.restoreDefaultFramebuffer(), UJ._releaseTexture(cJ), AJ && AJ.dispose(), qJ._swapAndDie(cJ), cJ.isReady = !0
            }))
          }))
        };
        AJ && (XJ ? qJ() : JJ.onLoadObservable.addOnce(qJ))
      }
      static async EncodeTextureToRGBD(JJ, cJ) {
        let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return cJ.gn().isWebGPU ? await ZJ.e(323).then((() => ZJ(59654))) : await ZJ.e(305).then((() => ZJ(59652))), await (0, UJ.c)("rgbdEncode", JJ, cJ, FJ, 1, 5)
      }
    }
  },
  59384: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AsyncLoop: () => FJ.e,
      RegisterTools: () => FJ.g,
      Tools: () => FJ.j,
      className: () => FJ.m
    });
    var FJ = ZJ(38879);
    (0, FJ.g)()
  },
  40556: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    class FJ {
      constructor(JJ) {
        this._pendingActions = new Array, this._workerInfos = JJ.map((JJ => ({
          workerPromise: Promise.resolve(JJ),
          idle: !0
        })))
      }
      dispose() {
        for (const JJ of this._workerInfos) JJ.workerPromise.then((JJ => {
          JJ.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(JJ) {
        this._executeOnIdleWorker(JJ) || this._pendingActions.push(JJ)
      }
      _executeOnIdleWorker(JJ) {
        for (const cJ of this._workerInfos)
          if (cJ.idle) return this._execute(cJ, JJ), !0;
        return !1
      }
      _execute(JJ, cJ) {
        JJ.idle = !1, JJ.workerPromise.then((ZJ => {
          cJ(ZJ, (() => {
            const cJ = this._pendingActions.shift();
            cJ ? this._execute(JJ, cJ) : JJ.idle = !0
          }))
        }))
      }
    }
    class UJ extends FJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.DefaultOptions;
        super([]), this._maxWorkers = JJ, this._createWorkerAsync = cJ, this._options = ZJ
      }
      push(JJ) {
        if (!this._executeOnIdleWorker(JJ))
          if (this._workerInfos.length < this._maxWorkers) {
            const cJ = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(cJ), this._execute(cJ, JJ)
          } else this._pendingActions.push(JJ)
      }
      _execute(JJ, cJ) {
        JJ.timeoutId && (clearTimeout(JJ.timeoutId), delete JJ.timeoutId), super._execute(JJ, ((ZJ, FJ) => {
          cJ(ZJ, (() => {
            FJ(), JJ.idle && (JJ.timeoutId = setTimeout((() => {
              JJ.workerPromise.then((JJ => {
                JJ.terminate()
              }));
              const cJ = this._workerInfos.indexOf(JJ); - 1 !== cJ && this._workerInfos.splice(cJ, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    UJ.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  59415: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AbstractThreeMfSerializer: () => iA,
      BVHExporter: () => yX,
      ContentTypeFileName: () => sA,
      DefaultXmlSerializerFormatOptions: () => OX,
      DefaultXmlSerializerNumberOptions: () => NX,
      EXT_lights_area: () => fU,
      EXT_mesh_gpu_instancing: () => dF,
      EXT_texture_avif: () => UX,
      EXT_texture_webp: () => JX,
      GLTF2Export: () => PF,
      GLTFData: () => jJ,
      GetXmlFieldMeta: () => PX,
      GetXmlName: () => kX,
      IsQualifiedName: () => SX,
      KHR_draco_mesh_compression: () => tF,
      KHR_interactivity: () => jU,
      KHR_lights_punctual: () => eU,
      KHR_materials_anisotropy: () => mU,
      KHR_materials_clearcoat: () => yU,
      KHR_materials_coat: () => WU,
      KHR_materials_diffuse_roughness: () => ke,
      KHR_materials_diffuse_transmission: () => dU,
      KHR_materials_dispersion: () => TU,
      KHR_materials_emissive_strength: () => RU,
      KHR_materials_fuzz: () => Ye,
      KHR_materials_ior: () => tU,
      KHR_materials_iridescence: () => ce,
      KHR_materials_openpbr: () => Ne,
      KHR_materials_sheen: () => ee,
      KHR_materials_specular: () => ne,
      KHR_materials_transmission: () => re,
      KHR_materials_unlit: () => Ve,
      KHR_materials_volume: () => Ie,
      KHR_materials_volume_scatter: () => We,
      KHR_texture_basisu: () => Be,
      KHR_texture_transform: () => ue,
      Known3mfRelationshipTypes: () => nA,
      KnownI3mfContentType: () => qA,
      Matrix3d: () => mA,
      MatrixFormatter: () => QA,
      ModelFileName: () => hA,
      NumberFormatter: () => uX,
      OBJExport: () => XJ,
      Object3dDirName: () => YA,
      OpenXmlContentTypesNamespace: () => XA,
      OpenXmlRelationshipsNamespace: () => AA,
      RegisterEXT_lights_area: () => rU,
      RegisterEXT_mesh_gpu_instancing: () => NF,
      RegisterEXT_texture_avif: () => XX,
      RegisterEXT_texture_webp: () => ZX,
      RegisterKHR_draco_mesh_compression: () => lF,
      RegisterKHR_interactivity: () => hU,
      RegisterKHR_lights_punctual: () => AU,
      RegisterKHR_materials_anisotropy: () => EU,
      RegisterKHR_materials_clearcoat: () => IU,
      RegisterKHR_materials_coat: () => HU,
      RegisterKHR_materials_diffuse_roughness: () => de,
      RegisterKHR_materials_diffuse_transmission: () => NU,
      RegisterKHR_materials_dispersion: () => uU,
      RegisterKHR_materials_emissive_strength: () => aU,
      RegisterKHR_materials_fuzz: () => De,
      RegisterKHR_materials_ior: () => lU,
      RegisterKHR_materials_iridescence: () => Fe,
      RegisterKHR_materials_openpbr: () => Te,
      RegisterKHR_materials_sheen: () => Ae,
      RegisterKHR_materials_specular: () => fe,
      RegisterKHR_materials_transmission: () => me,
      RegisterKHR_materials_unlit: () => ye,
      RegisterKHR_materials_volume: () => be,
      RegisterKHR_materials_volume_scatter: () => He,
      RegisterKHR_texture_basisu: () => oe,
      RegisterKHR_texture_transform: () => Re,
      RelationshipDirName: () => jA,
      RelationshipFileName: () => DA,
      ResolveFormatOptions: () => CX,
      ResolveNumberOptions: () => TX,
      STLExport: () => AX,
      ST_ObjectType: () => eA,
      ST_Unit: () => UA,
      StringXmlWriter: () => JA,
      ThreeDimModelNamespace: () => ZA,
      ThreeMf: () => RA,
      ThreeMfBase: () => kA,
      ThreeMfBaseMaterials: () => PA,
      ThreeMfBuild: () => pA,
      ThreeMfComponent: () => HA,
      ThreeMfComponents: () => gA,
      ThreeMfComponentsBuilder: () => NA,
      ThreeMfContentType: () => fA,
      ThreeMfContentTypes: () => GA,
      ThreeMfDocument: () => vA,
      ThreeMfDocumentBuilder: () => uA,
      ThreeMfItem: () => dA,
      ThreeMfMaterialBuilder: () => TA,
      ThreeMfMesh: () => IA,
      ThreeMfMeshBuilder: () => OA,
      ThreeMfMeta: () => VA,
      ThreeMfMetadataGroup: () => KA,
      ThreeMfModel: () => EA,
      ThreeMfModelBuilder: () => CA,
      ThreeMfObject: () => SA,
      ThreeMfObjectBuilder: () => zA,
      ThreeMfRelationship: () => rA,
      ThreeMfRelationships: () => xA,
      ThreeMfResources: () => yA,
      ThreeMfSerializer: () => BA,
      ThreeMfSerializerGlobalConfiguration: () => LA,
      ThreeMfTriangle: () => WA,
      ThreeMfTriangles: () => wA,
      ThreeMfVertex: () => bA,
      ThreeMfVertices: () => MA,
      ToQualifiedString: () => zX,
      TokenType: () => oX,
      TriangleSetsNamespace: () => FA,
      USDZExportAsync: () => VX,
      Utf8XmlWriterToBytes: () => cA,
      XmlAttr: () => gX,
      XmlBuilder: () => lX,
      XmlElem: () => HX,
      XmlIgnore: () => WX,
      XmlName: () => wX,
      XmlNameToParts: () => dX,
      XmlSerializer: () => BX,
      _ConvertToGLTFPBRMetallicRoughness: () => yZ,
      _SolveMetallic: () => KZ,
      __IGLTFExporterExtension: () => AJ
    });
    var FJ = ZJ(36165),
      UJ = ZJ(59384),
      eJ = ZJ(39049);
    class XJ {
      static OBJ(JJ, cJ, ZJ, XJ) {
        const AJ = [];
        let qJ = 1,
          jJ = 1;
        cJ && (ZJ || (ZJ = "mat"), AJ.push("mtllib " + ZJ + ".mtl"));
        for (let YJ = 0; YJ < JJ.length; YJ++) {
          const ZJ = JJ[YJ],
            hJ = ZJ.name || `mesh${YJ}}`;
          AJ.push(`o ${hJ}`);
          let DJ = null;
          if (XJ) {
            const JJ = ZJ.computeWorldMatrix(!0);
            DJ = new FJ.Matrix, JJ.invertToRef(DJ), ZJ.bakeTransformIntoVertices(JJ)
          }
          if (cJ) {
            const JJ = ZJ.material;
            JJ && AJ.push("usemtl " + JJ.id)
          }
          const sJ = ZJ.geometry;
          if (!sJ) {
            UJ.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const nJ = sJ.getVerticesData("position"),
            GJ = sJ.getVerticesData("normal"),
            fJ = sJ.getVerticesData("uv"),
            xJ = sJ.QXJ();
          let rJ = 0,
            vJ = 0;
          if (!nJ || !xJ) {
            UJ.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const mJ = JJ[0].Qy().useRightHandedSystem ? 1 : -1;
          for (let JJ = 0; JJ < nJ.length; JJ += 3) AJ.push("v " + nJ[JJ] * mJ + " " + nJ[JJ + 1] + " " + nJ[JJ + 2]), rJ++;
          if (null != GJ)
            for (let JJ = 0; JJ < GJ.length; JJ += 3) AJ.push("vn " + GJ[JJ] * mJ + " " + GJ[JJ + 1] + " " + GJ[JJ + 2]);
          if (null != fJ)
            for (let JJ = 0; JJ < fJ.length; JJ += 2) AJ.push("vt " + fJ[JJ] + " " + fJ[JJ + 1]), vJ++;
          const QJ = ["", "", ""],
            EJ = (ZJ.material || ZJ.Qy().defaultMaterial)._getEffectiveOrientation(ZJ),
            [VJ, KJ] = EJ === eJ.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let JJ = 0; JJ < xJ.length; JJ += 3) {
            const cJ = [String(xJ[JJ] + qJ), String(xJ[JJ + VJ] + qJ), String(xJ[JJ + KJ] + qJ)],
              ZJ = [String(xJ[JJ] + jJ), String(xJ[JJ + VJ] + jJ), String(xJ[JJ + KJ] + jJ)],
              FJ = cJ,
              UJ = null != fJ ? ZJ : QJ,
              eJ = null != GJ ? cJ : QJ;
            AJ.push("f " + FJ[0] + "/" + UJ[0] + "/" + eJ[0] + " " + FJ[1] + "/" + UJ[1] + "/" + eJ[1] + " " + FJ[2] + "/" + UJ[2] + "/" + eJ[2])
          }
          XJ && DJ && ZJ.bakeTransformIntoVertices(DJ), qJ += rJ, jJ += vJ
        }
        return AJ.join("\n")
      }
      static MTL(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ZJ = [],
          FJ = JJ.material;
        ZJ.push("newmtl " + cJ), ZJ.push("  Ns " + FJ.specularPower.toFixed(4)), ZJ.push("  Ni 1.5000"), ZJ.push("  d " + FJ.alpha.toFixed(4)), ZJ.push("  Tr 0.0000"), ZJ.push("  Tf 1.0000 1.0000 1.0000"), ZJ.push("  illum 2"), ZJ.push("  Ka " + FJ.ambientColor.r.toFixed(4) + " " + FJ.ambientColor.g.toFixed(4) + " " + FJ.ambientColor.b.toFixed(4)), ZJ.push("  Kd " + FJ.diffuseColor.r.toFixed(4) + " " + FJ.diffuseColor.g.toFixed(4) + " " + FJ.diffuseColor.b.toFixed(4)), ZJ.push("  Ks " + FJ.specularColor.r.toFixed(4) + " " + FJ.specularColor.g.toFixed(4) + " " + FJ.specularColor.b.toFixed(4)), ZJ.push("  Ke " + FJ.emissiveColor.r.toFixed(4) + " " + FJ.emissiveColor.g.toFixed(4) + " " + FJ.emissiveColor.b.toFixed(4));
        FJ.ambientTexture && ZJ.push("  map_Ka " + FJ.ambientTexture.name), FJ.diffuseTexture && ZJ.push("  map_Kd " + FJ.diffuseTexture.name), FJ.specularTexture && ZJ.push("  map_Ks " + FJ.specularTexture.name), FJ.bumpTexture && ZJ.push("  map_bump -imfchan z " + FJ.bumpTexture.name), FJ.opacityTexture && ZJ.push("  map_d " + FJ.opacityTexture.name);
        return ZJ.join("\n")
      }
    }
    var AJ = 0,
      qJ = ZJ(40284);
    class jJ {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const JJ in this.files) {
          const cJ = this.files[JJ],
            ZJ = new Blob([cJ], {
              type: (0, qJ.b)(JJ)
            });
          UJ.Tools.Download(ZJ, JJ)
        }
      }
    }
    var YJ = ZJ(40018),
      hJ = ZJ(39971),
      DJ = ZJ(40350),
      sJ = ZJ(39980),
      nJ = ZJ(38624),
      GJ = ZJ(36192),
      fJ = ZJ(36229),
      xJ = ZJ(36207);
    const rJ = xJ.HighestCommonFactor,
      vJ = {
        ...xJ,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: rJ
      };
    var mJ = ZJ(40520),
      QJ = ZJ(40004),
      EJ = ZJ(40325),
      VJ = ZJ(40327),
      KJ = ZJ(40538);
    (0, KJ.RegisterDumpTools)();
    var yJ = ZJ(38800),
      SJ = ZJ(38806),
      IJ = ZJ(37660),
      MJ = ZJ(38890),
      bJ = ZJ(39243),
      wJ = ZJ(40512);
    let WJ = 0;
    const gJ = (JJ, cJ, ZJ, FJ) => {
        if (!JJ[ZJ]) {
          const UJ = JJ.useDelayedTextureLoading;
          JJ.useDelayedTextureLoading = !1;
          const eJ = JJ._blockEntityCollection;
          JJ._blockEntityCollection = !1;
          const XJ = bJ.i.CreateFromBase64String(cJ, FJ + WJ++, JJ, !0, !1, bJ.i.BILINEAR_SAMPLINGMODE);
          JJ._blockEntityCollection = eJ;
          const AJ = JJ.gn().getLoadedTexturesCache(),
            qJ = AJ.indexOf(XJ.getInternalTexture()); - 1 !== qJ && AJ.splice(qJ, 1), XJ.isRGBD = !0, XJ.wrapU = bJ.i.CLAMP_ADDRESSMODE, XJ.wrapV = bJ.i.CLAMP_ADDRESSMODE, JJ[ZJ] = XJ, JJ.useDelayedTextureLoading = UJ, wJ.d.ExpandRGBDTexture(XJ);
          const jJ = JJ.gn().onContextRestoredObservable.add((() => {
            XJ.isRGBD = !0;
            const cJ = JJ.onBeforeRenderObservable.add((() => {
              XJ.isReady() && (JJ.onBeforeRenderObservable.remove(cJ), wJ.d.ExpandRGBDTexture(XJ))
            }))
          }));
          JJ.Sy.add((() => {
            JJ.gn().onContextRestoredObservable.remove(jJ)
          }))
        }
        return JJ[ZJ]
      },
      HJ = JJ => gJ(JJ, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      PJ = JJ => gJ(JJ, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      kJ = JJ => gJ(JJ, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var pJ = ZJ(38874),
      dJ = ZJ(36174),
      zJ = ZJ(38918),
      NJ = ZJ(39041),
      OJ = ZJ(39123);
    class TJ extends NJ.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let CJ = (() => {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
      let YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ = OJ.d,
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [];
      return JJ = class extends vJ {
        get useEnergyConservation() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set useEnergyConservation(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set useSmithVisibilityHeightCorrelated(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get useSphericalHarmonics() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set useSphericalHarmonics(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, yJ.b)(this, UJ, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(JJ) {
          (0, yJ.c)(this, UJ, JJ, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, yJ.b)(this, eJ, "f")
        }
        set mixIblRadianceWithIrradiance(JJ) {
          (0, yJ.c)(this, eJ, JJ, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, yJ.b)(this, XJ, "f")
        }
        set useLegacySpecularEnergyConservation(JJ) {
          (0, yJ.c)(this, XJ, JJ, "f")
        }
        get baseDiffuseModel() {
          return (0, yJ.b)(this, AJ, "f")
        }
        set baseDiffuseModel(JJ) {
          (0, yJ.c)(this, AJ, JJ, "f")
        }
        get dielectricSpecularModel() {
          return (0, yJ.b)(this, qJ, "f")
        }
        set dielectricSpecularModel(JJ) {
          (0, yJ.c)(this, qJ, JJ, "f")
        }
        get conductorSpecularModel() {
          return (0, yJ.b)(this, jJ, "f")
        }
        set conductorSpecularModel(JJ) {
          (0, yJ.c)(this, jJ, JJ, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(YJ) {
          let hJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YJ, "PBRBRDF", 90, new TJ, hJ), this._useEnergyConservation = JJ.DEFAULT_USE_ENERGY_CONSERVATION, cJ.set(this, (0, yJ.e)(this, mJ, JJ.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, yJ.e)(this, QJ), JJ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ZJ.set(this, (0, yJ.e)(this, EJ, JJ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, yJ.e)(this, VJ), JJ.DEFAULT_USE_SPHERICAL_HARMONICS), FJ.set(this, (0, yJ.e)(this, KJ, JJ.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, yJ.e)(this, IJ), JJ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), UJ.set(this, (0, yJ.e)(this, MJ, JJ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, yJ.e)(this, bJ), JJ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), eJ.set(this, (0, yJ.e)(this, wJ, JJ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, yJ.e)(this, WJ), JJ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), XJ.set(this, (0, yJ.e)(this, gJ, JJ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, yJ.e)(this, HJ), JJ.DEFAULT_DIFFUSE_MODEL), AJ.set(this, (0, yJ.e)(this, PJ, JJ.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, yJ.e)(this, kJ), JJ.DEFAULT_DIELECTRIC_SPECULAR_MODEL), qJ.set(this, (0, yJ.e)(this, pJ, JJ.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, yJ.e)(this, dJ), JJ.DEFAULT_CONDUCTOR_SPECULAR_MODEL), jJ.set(this, (0, yJ.e)(this, zJ, JJ.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, yJ.e)(this, NJ), this._internalMarkAllSubMeshesAsMiscDirty = YJ._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(JJ) {
          JJ.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, JJ.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, JJ.SPHERICAL_HARMONICS = this._useSphericalHarmonics, JJ.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, JJ.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, JJ.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, JJ.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, JJ.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, JJ.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, eJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, qJ = new WeakMap, jJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(vJ[Symbol.metadata] ?? null) : void 0;
        YJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], hJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], DJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], sJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], nJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], GJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], fJ = [(0, SJ.F)("baseDiffuseModel"), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], xJ = [(0, SJ.F)("dielectricSpecularModel"), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], rJ = [(0, SJ.F)("conductorSpecularModel"), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], (0, yJ.d)(JJ, null, YJ, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useEnergyConservation" in JJ,
            get: JJ => JJ.useEnergyConservation,
            set: (JJ, cJ) => {
              JJ.useEnergyConservation = cJ
            }
          },
          metadata: cJ
        }, mJ, QJ), (0, yJ.d)(JJ, null, hJ, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useSmithVisibilityHeightCorrelated" in JJ,
            get: JJ => JJ.useSmithVisibilityHeightCorrelated,
            set: (JJ, cJ) => {
              JJ.useSmithVisibilityHeightCorrelated = cJ
            }
          },
          metadata: cJ
        }, EJ, VJ), (0, yJ.d)(JJ, null, DJ, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useSphericalHarmonics" in JJ,
            get: JJ => JJ.useSphericalHarmonics,
            set: (JJ, cJ) => {
              JJ.useSphericalHarmonics = cJ
            }
          },
          metadata: cJ
        }, KJ, IJ), (0, yJ.d)(JJ, null, sJ, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useSpecularGlossinessInputEnergyConservation" in JJ,
            get: JJ => JJ.useSpecularGlossinessInputEnergyConservation,
            set: (JJ, cJ) => {
              JJ.useSpecularGlossinessInputEnergyConservation = cJ
            }
          },
          metadata: cJ
        }, MJ, bJ), (0, yJ.d)(JJ, null, nJ, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "mixIblRadianceWithIrradiance" in JJ,
            get: JJ => JJ.mixIblRadianceWithIrradiance,
            set: (JJ, cJ) => {
              JJ.mixIblRadianceWithIrradiance = cJ
            }
          },
          metadata: cJ
        }, wJ, WJ), (0, yJ.d)(JJ, null, GJ, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useLegacySpecularEnergyConservation" in JJ,
            get: JJ => JJ.useLegacySpecularEnergyConservation,
            set: (JJ, cJ) => {
              JJ.useLegacySpecularEnergyConservation = cJ
            }
          },
          metadata: cJ
        }, gJ, HJ), (0, yJ.d)(JJ, null, fJ, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "baseDiffuseModel" in JJ,
            get: JJ => JJ.baseDiffuseModel,
            set: (JJ, cJ) => {
              JJ.baseDiffuseModel = cJ
            }
          },
          metadata: cJ
        }, PJ, kJ), (0, yJ.d)(JJ, null, xJ, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "dielectricSpecularModel" in JJ,
            get: JJ => JJ.dielectricSpecularModel,
            set: (JJ, cJ) => {
              JJ.dielectricSpecularModel = cJ
            }
          },
          metadata: cJ
        }, pJ, dJ), (0, yJ.d)(JJ, null, rJ, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "conductorSpecularModel" in JJ,
            get: JJ => JJ.conductorSpecularModel,
            set: (JJ, cJ) => {
              JJ.conductorSpecularModel = cJ
            }
          },
          metadata: cJ
        }, zJ, NJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ.DEFAULT_USE_ENERGY_CONSERVATION = !0, JJ.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, JJ.DEFAULT_USE_SPHERICAL_HARMONICS = !0, JJ.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, JJ.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, JJ.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, JJ.DEFAULT_DIFFUSE_MODEL = 0, JJ.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, JJ.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, JJ
    })();
    var uJ = ZJ(39034),
      iJ = ZJ(36231),
      RJ = ZJ(39037),
      LJ = ZJ(38892),
      aJ = ZJ(39106),
      BJ = ZJ(39100),
      tJ = ZJ(39113),
      oJ = ZJ(39087);
    class lJ extends NJ.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Jc = (() => {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
      let YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ = OJ.d,
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        TJ = [],
        CJ = [],
        uJ = [],
        RJ = [],
        LJ = [],
        aJ = [],
        tJ = [],
        Jc = [],
        cc = [],
        Zc = [],
        Fc = [],
        Uc = [],
        ec = [],
        Xc = [],
        Ac = [];
      return JJ = class extends KJ {
        get isEnabled() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set isEnabled(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get indexOfRefraction() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set indexOfRefraction(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get texture() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set texture(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, yJ.b)(this, UJ, "f")
        }
        set useRoughnessFromMainTexture(JJ) {
          (0, yJ.c)(this, UJ, JJ, "f")
        }
        get textureRoughness() {
          return (0, yJ.b)(this, eJ, "f")
        }
        set textureRoughness(JJ) {
          (0, yJ.c)(this, eJ, JJ, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, yJ.b)(this, XJ, "f")
        }
        set remapF0OnInterfaceChange(JJ) {
          (0, yJ.c)(this, XJ, JJ, "f")
        }
        get bumpTexture() {
          return (0, yJ.b)(this, AJ, "f")
        }
        set bumpTexture(JJ) {
          (0, yJ.c)(this, AJ, JJ, "f")
        }
        get isTintEnabled() {
          return (0, yJ.b)(this, qJ, "f")
        }
        set isTintEnabled(JJ) {
          (0, yJ.c)(this, qJ, JJ, "f")
        }
        get tintTexture() {
          return (0, yJ.b)(this, jJ, "f")
        }
        set tintTexture(JJ) {
          (0, yJ.c)(this, jJ, JJ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(YJ) {
          let hJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YJ, "PBRClearCoat", 100, new lJ, hJ), this._isEnabled = !1, cJ.set(this, (0, yJ.e)(this, IJ, !1)), this.intensity = ((0, yJ.e)(this, MJ), (0, yJ.e)(this, bJ, 1)), this.roughness = ((0, yJ.e)(this, wJ), (0, yJ.e)(this, WJ, 0)), this._indexOfRefraction = ((0, yJ.e)(this, gJ), JJ._DefaultIndexOfRefraction), ZJ.set(this, (0, yJ.e)(this, HJ, JJ._DefaultIndexOfRefraction)), this._texture = ((0, yJ.e)(this, PJ), null), FJ.set(this, (0, yJ.e)(this, kJ, null)), this._useRoughnessFromMainTexture = ((0, yJ.e)(this, pJ), !0), UJ.set(this, (0, yJ.e)(this, dJ, !0)), this._textureRoughness = ((0, yJ.e)(this, zJ), null), eJ.set(this, (0, yJ.e)(this, NJ, null)), this._remapF0OnInterfaceChange = ((0, yJ.e)(this, TJ), !0), XJ.set(this, (0, yJ.e)(this, CJ, !0)), this._bumpTexture = ((0, yJ.e)(this, uJ), null), AJ.set(this, (0, yJ.e)(this, RJ, null)), this._isTintEnabled = ((0, yJ.e)(this, LJ), !1), qJ.set(this, (0, yJ.e)(this, aJ, !1)), this.tintColor = ((0, yJ.e)(this, tJ), (0, yJ.e)(this, Jc, iJ.e.White())), this.tintColorAtDistance = ((0, yJ.e)(this, cc), (0, yJ.e)(this, Zc, 1)), this.tintThickness = ((0, yJ.e)(this, Fc), (0, yJ.e)(this, Uc, 1)), this._tintTexture = ((0, yJ.e)(this, ec), null), jJ.set(this, (0, yJ.e)(this, Xc, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, yJ.e)(this, Ac), this._internalMarkAllSubMeshesAsTexturesDirty = YJ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(JJ, cJ, ZJ) {
          if (!this._isEnabled) return !0;
          const FJ = this._material._disableBumpMap;
          if (JJ._areTexturesDirty && cJ.texturesEnabled) {
            if (this._texture && BJ.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && BJ.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ZJ.getCaps().standardDerivatives && this._bumpTexture && BJ.d.ClearCoatBumpTextureEnabled && !FJ && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && BJ.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(cJ, ZJ) {
          this._isEnabled ? (cJ.CLEARCOAT = !0, cJ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, cJ.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, cJ._areTexturesDirty && ZJ.texturesEnabled && (this._texture && BJ.d.ClearCoatTextureEnabled ? (0, oJ.X)(this._texture, cJ, "CLEARCOAT_TEXTURE") : cJ.CLEARCOAT_TEXTURE = !1, this._textureRoughness && BJ.d.ClearCoatTextureEnabled ? (0, oJ.X)(this._textureRoughness, cJ, "CLEARCOAT_TEXTURE_ROUGHNESS") : cJ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && BJ.d.ClearCoatBumpTextureEnabled ? (0, oJ.X)(this._bumpTexture, cJ, "CLEARCOAT_BUMP") : cJ.CLEARCOAT_BUMP = !1, cJ.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === JJ._DefaultIndexOfRefraction, this._isTintEnabled ? (cJ.CLEARCOAT_TINT = !0, this._tintTexture && BJ.d.ClearCoatTintTextureEnabled ? ((0, oJ.X)(this._tintTexture, cJ, "CLEARCOAT_TINT_TEXTURE"), cJ.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : cJ.CLEARCOAT_TINT_TEXTURE = !1) : (cJ.CLEARCOAT_TINT = !1, cJ.CLEARCOAT_TINT_TEXTURE = !1))) : (cJ.CLEARCOAT = !1, cJ.CLEARCOAT_TEXTURE = !1, cJ.CLEARCOAT_TEXTURE_ROUGHNESS = !1, cJ.CLEARCOAT_BUMP = !1, cJ.CLEARCOAT_TINT = !1, cJ.CLEARCOAT_TINT_TEXTURE = !1, cJ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, cJ.CLEARCOAT_DEFAULTIOR = !1, cJ.CLEARCOAT_TEXTUREDIRECTUV = 0, cJ.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, cJ.CLEARCOAT_BUMPDIRECTUV = 0, cJ.CLEARCOAT_REMAP_F0 = !1, cJ.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, cJ.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(JJ, cJ, ZJ, FJ) {
          if (!this._isEnabled) return;
          const UJ = FJ.materialDefines,
            eJ = this._material.isFrozen,
            XJ = this._material._disableBumpMap,
            AJ = this._material._invertNormalMapX,
            qJ = this._material._invertNormalMapY;
          if (!JJ.useUbo || !eJ || !JJ.isSync) {
            (this._texture || this._textureRoughness) && BJ.d.ClearCoatTextureEnabled && (JJ.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, oJ.q)(this._texture, JJ, "clearCoat"), this._textureRoughness && !UJ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, oJ.q)(this._textureRoughness, JJ, "clearCoatRoughness")), this._bumpTexture && ZJ.getCaps().standardDerivatives && BJ.d.ClearCoatTextureEnabled && !XJ && (JJ.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, oJ.q)(this._bumpTexture, JJ, "clearCoatBump"), cJ._mirroredCameraPosition ? JJ.updateFloat2("vClearCoatTangentSpaceParams", AJ ? 1 : -1, qJ ? 1 : -1) : JJ.updateFloat2("vClearCoatTangentSpaceParams", AJ ? -1 : 1, qJ ? -1 : 1)), this._tintTexture && BJ.d.ClearCoatTintTextureEnabled && (JJ.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, oJ.q)(this._tintTexture, JJ, "clearCoatTint")), JJ.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const FJ = 1 - this._indexOfRefraction,
              eJ = 1 + this._indexOfRefraction,
              jJ = Math.pow(-FJ / eJ, 2),
              YJ = 1 / this._indexOfRefraction;
            JJ.updateFloat4("vClearCoatRefractionParams", jJ, YJ, FJ, eJ), this._isTintEnabled && (JJ.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), JJ.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          cJ.texturesEnabled && (this._texture && BJ.d.ClearCoatTextureEnabled && JJ.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !UJ.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && BJ.d.ClearCoatTextureEnabled && JJ.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ZJ.getCaps().standardDerivatives && BJ.d.ClearCoatBumpTextureEnabled && !XJ && JJ.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && BJ.d.ClearCoatTintTextureEnabled && JJ.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(JJ) {
          return this._texture === JJ || (this._textureRoughness === JJ || (this._bumpTexture === JJ || this._tintTexture === JJ))
        }
        getActiveTextures(JJ) {
          this._texture && JJ.push(this._texture), this._textureRoughness && JJ.push(this._textureRoughness), this._bumpTexture && JJ.push(this._bumpTexture), this._tintTexture && JJ.push(this._tintTexture)
        }
        getAnimatables(JJ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && JJ.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && JJ.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && JJ.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && JJ.push(this._tintTexture)
        }
        dispose(JJ) {
          JJ && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(JJ, cJ, ZJ) {
          return JJ.CLEARCOAT_BUMP && cJ.addFallback(ZJ++, "CLEARCOAT_BUMP"), JJ.CLEARCOAT_TINT && cJ.addFallback(ZJ++, "CLEARCOAT_TINT"), JJ.CLEARCOAT && cJ.addFallback(ZJ++, "CLEARCOAT"), ZJ
        }
        getSamplers(JJ) {
          JJ.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, eJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, qJ = new WeakMap, jJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(KJ[Symbol.metadata] ?? null) : void 0;
        YJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], hJ = [(0, SJ.F)()], DJ = [(0, SJ.F)()], sJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], GJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], fJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], xJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], rJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], vJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], mJ = [(0, SJ.m)()], QJ = [(0, SJ.F)()], EJ = [(0, SJ.F)()], VJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], (0, yJ.d)(JJ, null, YJ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: cJ
        }, IJ, MJ), (0, yJ.d)(JJ, null, sJ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "indexOfRefraction" in JJ,
            get: JJ => JJ.indexOfRefraction,
            set: (JJ, cJ) => {
              JJ.indexOfRefraction = cJ
            }
          },
          metadata: cJ
        }, HJ, PJ), (0, yJ.d)(JJ, null, nJ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "texture" in JJ,
            get: JJ => JJ.texture,
            set: (JJ, cJ) => {
              JJ.texture = cJ
            }
          },
          metadata: cJ
        }, kJ, pJ), (0, yJ.d)(JJ, null, GJ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRoughnessFromMainTexture" in JJ,
            get: JJ => JJ.useRoughnessFromMainTexture,
            set: (JJ, cJ) => {
              JJ.useRoughnessFromMainTexture = cJ
            }
          },
          metadata: cJ
        }, dJ, zJ), (0, yJ.d)(JJ, null, fJ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "textureRoughness" in JJ,
            get: JJ => JJ.textureRoughness,
            set: (JJ, cJ) => {
              JJ.textureRoughness = cJ
            }
          },
          metadata: cJ
        }, NJ, TJ), (0, yJ.d)(JJ, null, xJ, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: JJ => "remapF0OnInterfaceChange" in JJ,
            get: JJ => JJ.remapF0OnInterfaceChange,
            set: (JJ, cJ) => {
              JJ.remapF0OnInterfaceChange = cJ
            }
          },
          metadata: cJ
        }, CJ, uJ), (0, yJ.d)(JJ, null, rJ, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "bumpTexture" in JJ,
            get: JJ => JJ.bumpTexture,
            set: (JJ, cJ) => {
              JJ.bumpTexture = cJ
            }
          },
          metadata: cJ
        }, RJ, LJ), (0, yJ.d)(JJ, null, vJ, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isTintEnabled" in JJ,
            get: JJ => JJ.isTintEnabled,
            set: (JJ, cJ) => {
              JJ.isTintEnabled = cJ
            }
          },
          metadata: cJ
        }, aJ, tJ), (0, yJ.d)(JJ, null, VJ, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintTexture" in JJ,
            get: JJ => JJ.tintTexture,
            set: (JJ, cJ) => {
              JJ.tintTexture = cJ
            }
          },
          metadata: cJ
        }, Xc, Ac), (0, yJ.d)(null, null, hJ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensity" in JJ,
            get: JJ => JJ.intensity,
            set: (JJ, cJ) => {
              JJ.intensity = cJ
            }
          },
          metadata: cJ
        }, bJ, wJ), (0, yJ.d)(null, null, DJ, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "roughness" in JJ,
            get: JJ => JJ.roughness,
            set: (JJ, cJ) => {
              JJ.roughness = cJ
            }
          },
          metadata: cJ
        }, WJ, gJ), (0, yJ.d)(null, null, mJ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintColor" in JJ,
            get: JJ => JJ.tintColor,
            set: (JJ, cJ) => {
              JJ.tintColor = cJ
            }
          },
          metadata: cJ
        }, Jc, cc), (0, yJ.d)(null, null, QJ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintColorAtDistance" in JJ,
            get: JJ => JJ.tintColorAtDistance,
            set: (JJ, cJ) => {
              JJ.tintColorAtDistance = cJ
            }
          },
          metadata: cJ
        }, Zc, Fc), (0, yJ.d)(null, null, EJ, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintThickness" in JJ,
            get: JJ => JJ.tintThickness,
            set: (JJ, cJ) => {
              JJ.tintThickness = cJ
            }
          },
          metadata: cJ
        }, Uc, ec), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ._DefaultIndexOfRefraction = 1.5, JJ
    })();
    class cc extends NJ.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Zc = (() => {
      var JJ, cJ, ZJ, FJ;
      let UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ = OJ.d,
        DJ = [],
        sJ = [],
        nJ = [],
        GJ = [],
        fJ = [],
        xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        IJ = [];
      return JJ = class extends hJ {
        get isEnabled() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set isEnabled(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get texture() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set texture(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get thicknessTexture() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set thicknessTexture(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(UJ) {
          let eJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UJ, "PBRIridescence", 110, new cc, eJ), this._isEnabled = !1, cJ.set(this, (0, yJ.e)(this, DJ, !1)), this.intensity = ((0, yJ.e)(this, sJ), (0, yJ.e)(this, nJ, 1)), this.minimumThickness = ((0, yJ.e)(this, GJ), (0, yJ.e)(this, fJ, JJ._DefaultMinimumThickness)), this.maximumThickness = ((0, yJ.e)(this, xJ), (0, yJ.e)(this, rJ, JJ._DefaultMaximumThickness)), this.indexOfRefraction = ((0, yJ.e)(this, vJ), (0, yJ.e)(this, mJ, JJ._DefaultIndexOfRefraction)), this._texture = ((0, yJ.e)(this, QJ), null), ZJ.set(this, (0, yJ.e)(this, EJ, null)), this._thicknessTexture = ((0, yJ.e)(this, VJ), null), FJ.set(this, (0, yJ.e)(this, KJ, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, yJ.e)(this, IJ), this._internalMarkAllSubMeshesAsTexturesDirty = UJ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(JJ, cJ) {
          if (!this._isEnabled) return !0;
          if (JJ._areTexturesDirty && cJ.texturesEnabled) {
            if (this._texture && BJ.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && BJ.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(JJ, cJ) {
          this._isEnabled ? (JJ.IRIDESCENCE = !0, JJ._areTexturesDirty && cJ.texturesEnabled && (this._texture && BJ.d.IridescenceTextureEnabled ? (0, oJ.X)(this._texture, JJ, "IRIDESCENCE_TEXTURE") : JJ.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && BJ.d.IridescenceTextureEnabled ? (0, oJ.X)(this._thicknessTexture, JJ, "IRIDESCENCE_THICKNESS_TEXTURE") : JJ.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (JJ.IRIDESCENCE = !1, JJ.IRIDESCENCE_TEXTURE = !1, JJ.IRIDESCENCE_THICKNESS_TEXTURE = !1, JJ.IRIDESCENCE_TEXTUREDIRECTUV = 0, JJ.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(JJ, cJ) {
          if (!this._isEnabled) return;
          const ZJ = this._material.isFrozen;
          JJ.useUbo && ZJ && JJ.isSync || ((this._texture || this._thicknessTexture) && BJ.d.IridescenceTextureEnabled && (JJ.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, oJ.q)(this._texture, JJ, "iridescence"), this._thicknessTexture && (0, oJ.q)(this._thicknessTexture, JJ, "iridescenceThickness")), JJ.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), cJ.texturesEnabled && (this._texture && BJ.d.IridescenceTextureEnabled && JJ.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && BJ.d.IridescenceTextureEnabled && JJ.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(JJ) {
          return this._texture === JJ || this._thicknessTexture === JJ
        }
        getActiveTextures(JJ) {
          this._texture && JJ.push(this._texture), this._thicknessTexture && JJ.push(this._thicknessTexture)
        }
        getAnimatables(JJ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && JJ.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && JJ.push(this._thicknessTexture)
        }
        dispose(JJ) {
          JJ && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(JJ, cJ, ZJ) {
          return JJ.IRIDESCENCE && cJ.addFallback(ZJ++, "IRIDESCENCE"), ZJ
        }
        getSamplers(JJ) {
          JJ.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(hJ[Symbol.metadata] ?? null) : void 0;
        UJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], eJ = [(0, SJ.F)()], XJ = [(0, SJ.F)()], AJ = [(0, SJ.F)()], qJ = [(0, SJ.F)()], jJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], (0, yJ.d)(JJ, null, UJ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: cJ
        }, DJ, sJ), (0, yJ.d)(JJ, null, jJ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "texture" in JJ,
            get: JJ => JJ.texture,
            set: (JJ, cJ) => {
              JJ.texture = cJ
            }
          },
          metadata: cJ
        }, EJ, VJ), (0, yJ.d)(JJ, null, YJ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "thicknessTexture" in JJ,
            get: JJ => JJ.thicknessTexture,
            set: (JJ, cJ) => {
              JJ.thicknessTexture = cJ
            }
          },
          metadata: cJ
        }, KJ, IJ), (0, yJ.d)(null, null, eJ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensity" in JJ,
            get: JJ => JJ.intensity,
            set: (JJ, cJ) => {
              JJ.intensity = cJ
            }
          },
          metadata: cJ
        }, nJ, GJ), (0, yJ.d)(null, null, XJ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "minimumThickness" in JJ,
            get: JJ => JJ.minimumThickness,
            set: (JJ, cJ) => {
              JJ.minimumThickness = cJ
            }
          },
          metadata: cJ
        }, fJ, xJ), (0, yJ.d)(null, null, AJ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "maximumThickness" in JJ,
            get: JJ => JJ.maximumThickness,
            set: (JJ, cJ) => {
              JJ.maximumThickness = cJ
            }
          },
          metadata: cJ
        }, rJ, vJ), (0, yJ.d)(null, null, qJ, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "indexOfRefraction" in JJ,
            get: JJ => JJ.indexOfRefraction,
            set: (JJ, cJ) => {
              JJ.indexOfRefraction = cJ
            }
          },
          metadata: cJ
        }, mJ, QJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ._DefaultMinimumThickness = 100, JJ._DefaultMaximumThickness = 400, JJ._DefaultIndexOfRefraction = 1.3, JJ
    })();
    class Fc extends NJ.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Uc = (() => {
      var JJ, cJ, ZJ, FJ;
      let UJ, eJ, XJ, AJ, qJ, jJ = OJ.d,
        YJ = [],
        hJ = [],
        DJ = [],
        sJ = [],
        nJ = [],
        GJ = [],
        fJ = [],
        xJ = [],
        rJ = [],
        vJ = [];
      return JJ = class extends jJ {
        get isEnabled() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set isEnabled(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        set angle(JJ) {
          this.direction.x = Math.cos(JJ), this.direction.y = Math.sin(JJ)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set texture(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get legacy() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set legacy(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
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
        constructor(JJ) {
          let UJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JJ, "PBRAnisotropic", 110, new Fc, UJ), this._isEnabled = !1, cJ.set(this, (0, yJ.e)(this, YJ, !1)), this.intensity = ((0, yJ.e)(this, hJ), (0, yJ.e)(this, DJ, 1)), this.direction = ((0, yJ.e)(this, sJ), (0, yJ.e)(this, nJ, new dJ.i(1, 0))), this._texture = ((0, yJ.e)(this, GJ), null), ZJ.set(this, (0, yJ.e)(this, fJ, null)), this._legacy = ((0, yJ.e)(this, xJ), !1), FJ.set(this, (0, yJ.e)(this, rJ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, yJ.e)(this, vJ), this._internalMarkAllSubMeshesAsTexturesDirty = JJ._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = JJ._dirtyCallbacks[16]
        }
        isReadyForSubMesh(JJ, cJ) {
          return !this._isEnabled || !(JJ._areTexturesDirty && cJ.texturesEnabled && this._texture && BJ.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(JJ, cJ, ZJ) {
          this._isEnabled ? (JJ.ANISOTROPIC = this._isEnabled, this._isEnabled && !ZJ.isVerticesDataPresent(zJ.n.TangentKind) && (JJ._needUVs = !0, JJ.MAINUV1 = !0), JJ._areTexturesDirty && cJ.texturesEnabled && (this._texture && BJ.d.AnisotropicTextureEnabled ? (0, oJ.X)(this._texture, JJ, "ANISOTROPIC_TEXTURE") : JJ.ANISOTROPIC_TEXTURE = !1), JJ._areMiscDirty && (JJ.ANISOTROPIC_LEGACY = this._legacy)) : (JJ.ANISOTROPIC = !1, JJ.ANISOTROPIC_TEXTURE = !1, JJ.ANISOTROPIC_TEXTUREDIRECTUV = 0, JJ.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(JJ, cJ) {
          if (!this._isEnabled) return;
          const ZJ = this._material.isFrozen;
          JJ.useUbo && ZJ && JJ.isSync || (this._texture && BJ.d.AnisotropicTextureEnabled && (JJ.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, oJ.q)(this._texture, JJ, "anisotropy")), JJ.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), cJ.texturesEnabled && this._texture && BJ.d.AnisotropicTextureEnabled && JJ.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(JJ) {
          return this._texture === JJ
        }
        getActiveTextures(JJ) {
          this._texture && JJ.push(this._texture)
        }
        getAnimatables(JJ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && JJ.push(this._texture)
        }
        dispose(JJ) {
          JJ && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(JJ, cJ, ZJ) {
          return JJ.ANISOTROPIC && cJ.addFallback(ZJ++, "ANISOTROPIC"), ZJ
        }
        getSamplers(JJ) {
          JJ.push("anisotropySampler")
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
        parse(JJ, cJ, ZJ) {
          super.parse(JJ, cJ, ZJ), void 0 === JJ.legacy && (this.legacy = !0)
        }
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(jJ[Symbol.metadata] ?? null) : void 0;
        UJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], eJ = [(0, SJ.F)()], XJ = [(0, SJ.C)()], AJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], qJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], (0, yJ.d)(JJ, null, UJ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: cJ
        }, YJ, hJ), (0, yJ.d)(JJ, null, AJ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "texture" in JJ,
            get: JJ => JJ.texture,
            set: (JJ, cJ) => {
              JJ.texture = cJ
            }
          },
          metadata: cJ
        }, fJ, xJ), (0, yJ.d)(JJ, null, qJ, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: JJ => "legacy" in JJ,
            get: JJ => JJ.legacy,
            set: (JJ, cJ) => {
              JJ.legacy = cJ
            }
          },
          metadata: cJ
        }, rJ, vJ), (0, yJ.d)(null, null, eJ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensity" in JJ,
            get: JJ => JJ.intensity,
            set: (JJ, cJ) => {
              JJ.intensity = cJ
            }
          },
          metadata: cJ
        }, DJ, sJ), (0, yJ.d)(null, null, XJ, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "direction" in JJ,
            get: JJ => JJ.direction,
            set: (JJ, cJ) => {
              JJ.direction = cJ
            }
          },
          metadata: cJ
        }, nJ, GJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ
    })();
    class ec extends NJ.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Xc = (() => {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
      let qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ = OJ.d,
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [];
      return JJ = class extends xJ {
        get isEnabled() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set isEnabled(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set linkSheenWithAlbedo(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get texture() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set texture(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, yJ.b)(this, UJ, "f")
        }
        set useRoughnessFromMainTexture(JJ) {
          (0, yJ.c)(this, UJ, JJ, "f")
        }
        get roughness() {
          return (0, yJ.b)(this, eJ, "f")
        }
        set roughness(JJ) {
          (0, yJ.c)(this, eJ, JJ, "f")
        }
        get textureRoughness() {
          return (0, yJ.b)(this, XJ, "f")
        }
        set textureRoughness(JJ) {
          (0, yJ.c)(this, XJ, JJ, "f")
        }
        get albedoScaling() {
          return (0, yJ.b)(this, AJ, "f")
        }
        set albedoScaling(JJ) {
          (0, yJ.c)(this, AJ, JJ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(JJ) {
          let qJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JJ, "Sheen", 120, new ec, qJ), this._isEnabled = !1, cJ.set(this, (0, yJ.e)(this, rJ, !1)), this._linkSheenWithAlbedo = ((0, yJ.e)(this, vJ), !1), ZJ.set(this, (0, yJ.e)(this, mJ, !1)), this.intensity = ((0, yJ.e)(this, QJ), (0, yJ.e)(this, EJ, 1)), this.color = ((0, yJ.e)(this, VJ), (0, yJ.e)(this, KJ, iJ.e.White())), this._texture = ((0, yJ.e)(this, IJ), null), FJ.set(this, (0, yJ.e)(this, MJ, null)), this._useRoughnessFromMainTexture = ((0, yJ.e)(this, bJ), !0), UJ.set(this, (0, yJ.e)(this, wJ, !0)), this._roughness = ((0, yJ.e)(this, WJ), null), eJ.set(this, (0, yJ.e)(this, gJ, null)), this._textureRoughness = ((0, yJ.e)(this, HJ), null), XJ.set(this, (0, yJ.e)(this, PJ, null)), this._albedoScaling = ((0, yJ.e)(this, kJ), !1), AJ.set(this, (0, yJ.e)(this, pJ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, yJ.e)(this, dJ), this._internalMarkAllSubMeshesAsTexturesDirty = JJ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(JJ, cJ) {
          if (!this._isEnabled) return !0;
          if (JJ._areTexturesDirty && cJ.texturesEnabled) {
            if (this._texture && BJ.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && BJ.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(JJ, cJ) {
          this._isEnabled ? (JJ.SHEEN = !0, JJ.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, JJ.SHEEN_ROUGHNESS = null !== this._roughness, JJ.SHEEN_ALBEDOSCALING = this._albedoScaling, JJ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, JJ._areTexturesDirty && cJ.texturesEnabled && (this._texture && BJ.d.SheenTextureEnabled ? ((0, oJ.X)(this._texture, JJ, "SHEEN_TEXTURE"), JJ.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : JJ.SHEEN_TEXTURE = !1, this._textureRoughness && BJ.d.SheenTextureEnabled ? (0, oJ.X)(this._textureRoughness, JJ, "SHEEN_TEXTURE_ROUGHNESS") : JJ.SHEEN_TEXTURE_ROUGHNESS = !1)) : (JJ.SHEEN = !1, JJ.SHEEN_TEXTURE = !1, JJ.SHEEN_TEXTURE_ROUGHNESS = !1, JJ.SHEEN_LINKWITHALBEDO = !1, JJ.SHEEN_ROUGHNESS = !1, JJ.SHEEN_ALBEDOSCALING = !1, JJ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, JJ.SHEEN_GAMMATEXTURE = !1, JJ.SHEEN_TEXTUREDIRECTUV = 0, JJ.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(JJ, cJ, ZJ, FJ) {
          if (!this._isEnabled) return;
          const UJ = FJ.materialDefines,
            eJ = this._material.isFrozen;
          JJ.useUbo && eJ && JJ.isSync || ((this._texture || this._textureRoughness) && BJ.d.SheenTextureEnabled && (JJ.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, oJ.q)(this._texture, JJ, "sheen"), this._textureRoughness && !UJ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, oJ.q)(this._textureRoughness, JJ, "sheenRoughness")), JJ.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && JJ.updateFloat("vSheenRoughness", this._roughness)), cJ.texturesEnabled && (this._texture && BJ.d.SheenTextureEnabled && JJ.setTexture("sheenSampler", this._texture), this._textureRoughness && !UJ.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && BJ.d.SheenTextureEnabled && JJ.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(JJ) {
          return this._texture === JJ || this._textureRoughness === JJ
        }
        getActiveTextures(JJ) {
          this._texture && JJ.push(this._texture), this._textureRoughness && JJ.push(this._textureRoughness)
        }
        getAnimatables(JJ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && JJ.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && JJ.push(this._textureRoughness)
        }
        dispose(JJ) {
          JJ && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(JJ, cJ, ZJ) {
          return JJ.SHEEN && cJ.addFallback(ZJ++, "SHEEN"), ZJ
        }
        getSamplers(JJ) {
          JJ.push("sheenSampler", "sheenRoughnessSampler")
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
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, eJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(xJ[Symbol.metadata] ?? null) : void 0;
        qJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], jJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, SJ.F)()], hJ = [(0, SJ.m)()], DJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], sJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], GJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], fJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], (0, yJ.d)(JJ, null, qJ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: cJ
        }, rJ, vJ), (0, yJ.d)(JJ, null, jJ, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: JJ => "linkSheenWithAlbedo" in JJ,
            get: JJ => JJ.linkSheenWithAlbedo,
            set: (JJ, cJ) => {
              JJ.linkSheenWithAlbedo = cJ
            }
          },
          metadata: cJ
        }, mJ, QJ), (0, yJ.d)(JJ, null, DJ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "texture" in JJ,
            get: JJ => JJ.texture,
            set: (JJ, cJ) => {
              JJ.texture = cJ
            }
          },
          metadata: cJ
        }, MJ, bJ), (0, yJ.d)(JJ, null, sJ, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRoughnessFromMainTexture" in JJ,
            get: JJ => JJ.useRoughnessFromMainTexture,
            set: (JJ, cJ) => {
              JJ.useRoughnessFromMainTexture = cJ
            }
          },
          metadata: cJ
        }, wJ, WJ), (0, yJ.d)(JJ, null, nJ, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "roughness" in JJ,
            get: JJ => JJ.roughness,
            set: (JJ, cJ) => {
              JJ.roughness = cJ
            }
          },
          metadata: cJ
        }, gJ, HJ), (0, yJ.d)(JJ, null, GJ, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "textureRoughness" in JJ,
            get: JJ => JJ.textureRoughness,
            set: (JJ, cJ) => {
              JJ.textureRoughness = cJ
            }
          },
          metadata: cJ
        }, PJ, kJ), (0, yJ.d)(JJ, null, fJ, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: JJ => "albedoScaling" in JJ,
            get: JJ => JJ.albedoScaling,
            set: (JJ, cJ) => {
              JJ.albedoScaling = cJ
            }
          },
          metadata: cJ
        }, pJ, dJ), (0, yJ.d)(null, null, YJ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "intensity" in JJ,
            get: JJ => JJ.intensity,
            set: (JJ, cJ) => {
              JJ.intensity = cJ
            }
          },
          metadata: cJ
        }, EJ, VJ), (0, yJ.d)(null, null, hJ, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: JJ => "color" in JJ,
            get: JJ => JJ.color,
            set: (JJ, cJ) => {
              JJ.color = cJ
            }
          },
          metadata: cJ
        }, KJ, IJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ
    })();
    class Ac extends NJ.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let qc = (() => {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ;
      let xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, zJ, NJ, TJ, CJ, uJ, RJ, LJ, aJ, tJ, lJ, Jc, cc, Zc = OJ.d,
        Fc = [],
        Uc = [],
        ec = [],
        Xc = [],
        qc = [],
        jc = [],
        Yc = [],
        hc = [],
        Dc = [],
        sc = [],
        nc = [],
        Gc = [],
        fc = [],
        xc = [],
        rc = [],
        vc = [],
        mc = [],
        Qc = [],
        Ec = [],
        Vc = [],
        Kc = [],
        yc = [],
        Sc = [],
        Ic = [],
        Mc = [],
        bc = [],
        wc = [],
        Wc = [],
        gc = [],
        Hc = [],
        Pc = [],
        kc = [],
        pc = [],
        dc = [],
        zc = [],
        Nc = [],
        Oc = [],
        Tc = [],
        Cc = [],
        uc = [],
        ic = [],
        Rc = [],
        Lc = [],
        ac = [],
        Bc = [],
        tc = [],
        oc = [],
        lc = [],
        JZ = [],
        cZ = [],
        ZZ = [],
        FZ = [],
        UZ = [],
        eZ = [],
        XZ = [],
        AZ = [],
        qZ = [],
        jZ = [],
        YZ = [],
        hZ = [];
      return JJ = class extends Zc {
        get isRefractionEnabled() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set isRefractionEnabled(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get isTranslucencyEnabled() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set isTranslucencyEnabled(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get isDispersionEnabled() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set isDispersionEnabled(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        get isScatteringEnabled() {
          return (0, yJ.b)(this, UJ, "f")
        }
        set isScatteringEnabled(JJ) {
          (0, yJ.c)(this, UJ, JJ, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(JJ) {
          this._scene.enableSubSurfaceForPrePass() && JJ && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(JJ))
        }
        get useAlbedoToTintRefraction() {
          return (0, yJ.b)(this, eJ, "f")
        }
        set useAlbedoToTintRefraction(JJ) {
          (0, yJ.c)(this, eJ, JJ, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, yJ.b)(this, XJ, "f")
        }
        set useAlbedoToTintTranslucency(JJ) {
          (0, yJ.c)(this, XJ, JJ, "f")
        }
        get thicknessTexture() {
          return (0, yJ.b)(this, AJ, "f")
        }
        set thicknessTexture(JJ) {
          (0, yJ.c)(this, AJ, JJ, "f")
        }
        get refractionTexture() {
          return (0, yJ.b)(this, qJ, "f")
        }
        set refractionTexture(JJ) {
          (0, yJ.c)(this, qJ, JJ, "f")
        }
        get indexOfRefraction() {
          return (0, yJ.b)(this, jJ, "f")
        }
        set indexOfRefraction(JJ) {
          (0, yJ.c)(this, jJ, JJ, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(JJ) {
          const cJ = JJ >= 1 ? JJ : -1;
          this._volumeIndexOfRefraction !== cJ && (this._volumeIndexOfRefraction = cJ, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, yJ.b)(this, YJ, "f")
        }
        set invertRefractionY(JJ) {
          (0, yJ.c)(this, YJ, JJ, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, yJ.b)(this, hJ, "f")
        }
        set linkRefractionWithTransparency(JJ) {
          (0, yJ.c)(this, hJ, JJ, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, yJ.b)(this, DJ, "f")
        }
        set useMaskFromThicknessTexture(JJ) {
          (0, yJ.c)(this, DJ, JJ, "f")
        }
        get refractionIntensityTexture() {
          return (0, yJ.b)(this, sJ, "f")
        }
        set refractionIntensityTexture(JJ) {
          (0, yJ.c)(this, sJ, JJ, "f")
        }
        get translucencyIntensityTexture() {
          return (0, yJ.b)(this, nJ, "f")
        }
        set translucencyIntensityTexture(JJ) {
          (0, yJ.c)(this, nJ, JJ, "f")
        }
        get translucencyColorTexture() {
          return (0, yJ.b)(this, GJ, "f")
        }
        set translucencyColorTexture(JJ) {
          (0, yJ.c)(this, GJ, JJ, "f")
        }
        get useGltfStyleTextures() {
          return (0, yJ.b)(this, fJ, "f")
        }
        set useGltfStyleTextures(JJ) {
          (0, yJ.c)(this, fJ, JJ, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(JJ) {
          this.legacyTranslucency = JJ
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
        constructor(xJ) {
          let rJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(xJ, "PBRSubSurface", 130, new Ac, rJ), this._isRefractionEnabled = !1, cJ.set(this, (0, yJ.e)(this, Fc, !1)), this._isTranslucencyEnabled = ((0, yJ.e)(this, Uc), !1), ZJ.set(this, (0, yJ.e)(this, ec, !1)), this._isDispersionEnabled = ((0, yJ.e)(this, Xc), !1), FJ.set(this, (0, yJ.e)(this, qc, !1)), this._isScatteringEnabled = ((0, yJ.e)(this, jc), !1), UJ.set(this, (0, yJ.e)(this, Yc, !1)), this._scatteringDiffusionProfileIndex = ((0, yJ.e)(this, hc), (0, yJ.e)(this, Dc, 0)), this.refractionIntensity = ((0, yJ.e)(this, sc), (0, yJ.e)(this, nc, 1)), this.translucencyIntensity = ((0, yJ.e)(this, Gc), (0, yJ.e)(this, fc, 1)), this._useAlbedoToTintRefraction = ((0, yJ.e)(this, xc), !1), eJ.set(this, (0, yJ.e)(this, rc, !1)), this._useAlbedoToTintTranslucency = ((0, yJ.e)(this, vc), !1), XJ.set(this, (0, yJ.e)(this, mc, !1)), this._thicknessTexture = ((0, yJ.e)(this, Qc), null), AJ.set(this, (0, yJ.e)(this, Ec, null)), this._refractionTexture = ((0, yJ.e)(this, Vc), null), qJ.set(this, (0, yJ.e)(this, Kc, null)), this._indexOfRefraction = ((0, yJ.e)(this, yc), 1.5), jJ.set(this, (0, yJ.e)(this, Sc, 1.5)), this._volumeIndexOfRefraction = ((0, yJ.e)(this, Ic), (0, yJ.e)(this, Mc, -1)), this._invertRefractionY = ((0, yJ.e)(this, bc), !1), YJ.set(this, (0, yJ.e)(this, wc, !1)), this._linkRefractionWithTransparency = ((0, yJ.e)(this, Wc), !1), hJ.set(this, (0, yJ.e)(this, gc, !1)), this.minimumThickness = ((0, yJ.e)(this, Hc), (0, yJ.e)(this, Pc, 0)), this.maximumThickness = ((0, yJ.e)(this, kc), (0, yJ.e)(this, pc, 1)), this.useThicknessAsDepth = ((0, yJ.e)(this, dc), (0, yJ.e)(this, zc, !1)), this.tintColor = ((0, yJ.e)(this, Nc), (0, yJ.e)(this, Oc, iJ.e.White())), this.tintColorAtDistance = ((0, yJ.e)(this, Tc), (0, yJ.e)(this, Cc, 1)), this.dispersion = ((0, yJ.e)(this, uc), (0, yJ.e)(this, ic, 0)), this.diffusionDistance = ((0, yJ.e)(this, Rc), (0, yJ.e)(this, Lc, iJ.e.White())), this._useMaskFromThicknessTexture = ((0, yJ.e)(this, ac), !1), DJ.set(this, (0, yJ.e)(this, Bc, !1)), this._refractionIntensityTexture = ((0, yJ.e)(this, tc), null), sJ.set(this, (0, yJ.e)(this, oc, null)), this._translucencyIntensityTexture = ((0, yJ.e)(this, lc), null), nJ.set(this, (0, yJ.e)(this, JZ, null)), this.translucencyColor = ((0, yJ.e)(this, cZ), (0, yJ.e)(this, ZZ, null)), this._translucencyColorTexture = ((0, yJ.e)(this, FZ), null), GJ.set(this, (0, yJ.e)(this, UZ, null)), this._useGltfStyleTextures = ((0, yJ.e)(this, eZ), !0), fJ.set(this, (0, yJ.e)(this, XZ, !0)), this.applyAlbedoAfterSubSurface = ((0, yJ.e)(this, AZ), (0, yJ.e)(this, qZ, JJ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, yJ.e)(this, jZ), (0, yJ.e)(this, YZ, JJ.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, yJ.e)(this, hZ), this._scene = xJ.Qy(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = xJ._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = xJ._dirtyCallbacks[32]
        }
        isReadyForSubMesh(JJ, cJ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (JJ._areTexturesDirty && cJ.texturesEnabled) {
            if (this._thicknessTexture && BJ.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && BJ.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && BJ.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && BJ.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const JJ = this._getRefractionTexture(cJ);
            if (JJ && BJ.d.RefractionTextureEnabled && !JJ.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(JJ, cJ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return JJ.SUBSURFACE = !1, JJ.SS_DISPERSION = !1, JJ.SS_TRANSLUCENCY = !1, JJ.SS_SCATTERING = !1, JJ.SS_REFRACTION = !1, JJ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, JJ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, JJ.SS_THICKNESSANDMASK_TEXTURE = !1, JJ.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, JJ.SS_HAS_THICKNESS = !1, JJ.SS_REFRACTIONINTENSITY_TEXTURE = !1, JJ.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, JJ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, JJ.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, JJ.SS_REFRACTIONMAP_3D = !1, JJ.SS_REFRACTIONMAP_OPPOSITEZ = !1, JJ.SS_LODINREFRACTIONALPHA = !1, JJ.SS_GAMMAREFRACTION = !1, JJ.SS_RGBDREFRACTION = !1, JJ.SS_LINEARSPECULARREFRACTION = !1, JJ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, JJ.SS_ALBEDOFORREFRACTIONTINT = !1, JJ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, JJ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, JJ.SS_USE_THICKNESS_AS_DEPTH = !1, JJ.SS_USE_GLTF_TEXTURES = !1, JJ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, JJ.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, JJ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(JJ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (JJ._areTexturesDirty) {
            if (JJ.SUBSURFACE = !0, JJ.SS_DISPERSION = this._isDispersionEnabled, JJ.SS_TRANSLUCENCY = this._isTranslucencyEnabled, JJ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, JJ.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, JJ.SS_SCATTERING = this._isScatteringEnabled, JJ.SS_THICKNESSANDMASK_TEXTURE = !1, JJ.SS_REFRACTIONINTENSITY_TEXTURE = !1, JJ.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, JJ.SS_HAS_THICKNESS = !1, JJ.SS_USE_GLTF_TEXTURES = !1, JJ.SS_REFRACTION = !1, JJ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, JJ.SS_REFRACTIONMAP_3D = !1, JJ.SS_GAMMAREFRACTION = !1, JJ.SS_RGBDREFRACTION = !1, JJ.SS_LINEARSPECULARREFRACTION = !1, JJ.SS_REFRACTIONMAP_OPPOSITEZ = !1, JJ.SS_LODINREFRACTIONALPHA = !1, JJ.SS_LINKREFRACTIONTOTRANSPARENCY = !1, JJ.SS_ALBEDOFORREFRACTIONTINT = !1, JJ.SS_ALBEDOFORTRANSLUCENCYTINT = !1, JJ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, JJ.SS_USE_THICKNESS_AS_DEPTH = !1, JJ.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, JJ.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, JJ._areTexturesDirty && cJ.texturesEnabled && (this._thicknessTexture && BJ.d.ThicknessTextureEnabled && (0, oJ.X)(this._thicknessTexture, JJ, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && BJ.d.RefractionIntensityTextureEnabled && (0, oJ.X)(this._refractionIntensityTexture, JJ, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && BJ.d.TranslucencyIntensityTextureEnabled && (0, oJ.X)(this._translucencyIntensityTexture, JJ, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && BJ.d.TranslucencyColorTextureEnabled && ((0, oJ.X)(this._translucencyColorTexture, JJ, "SS_TRANSLUCENCYCOLOR_TEXTURE"), JJ.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), JJ.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, JJ.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, JJ.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, JJ.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && cJ.texturesEnabled) {
              const ZJ = this._getRefractionTexture(cJ);
              ZJ && BJ.d.RefractionTextureEnabled && (JJ.SS_REFRACTION = !0, JJ.SS_REFRACTIONMAP_3D = ZJ.isCube, JJ.SS_GAMMAREFRACTION = ZJ.gammaSpace, JJ.SS_RGBDREFRACTION = ZJ.isRGBD, JJ.SS_LINEARSPECULARREFRACTION = ZJ.linearSpecularLOD, JJ.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ZJ.isCube ? !ZJ.invertZ : ZJ.invertZ, JJ.SS_LODINREFRACTIONALPHA = ZJ.lodLevelInAlpha, JJ.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, JJ.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, JJ.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ZJ.isCube && ZJ.boundingBoxSize, JJ.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (JJ.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(JJ, cJ, ZJ, FJ) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) JJ.updateFloat2("vThicknessParam", 0, 0);
            else {
              FJ.getRenderingMesh().getWorldMatrix().decompose(dJ.h.Pn[0]);
              const cJ = Math.max(Math.abs(dJ.h.Pn[0].x), Math.abs(dJ.h.Pn[0].y), Math.abs(dJ.h.Pn[0].z));
              JJ.updateFloat2("vThicknessParam", this.minimumThickness * cJ, (this.maximumThickness - this.minimumThickness) * cJ)
            }
        }
        bindForSubMesh(JJ, cJ, ZJ, FJ) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const UJ = FJ.materialDefines,
            eJ = this._material.isFrozen,
            XJ = this._material.realTimeFiltering,
            AJ = UJ.LODBASEDMICROSFURACE,
            qJ = this._getRefractionTexture(cJ);
          if (!JJ.useUbo || !eJ || !JJ.isSync) {
            if (this._thicknessTexture && BJ.d.ThicknessTextureEnabled && (JJ.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, oJ.q)(this._thicknessTexture, JJ, "thickness")), this._refractionIntensityTexture && BJ.d.RefractionIntensityTextureEnabled && UJ.SS_REFRACTIONINTENSITY_TEXTURE && (JJ.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, oJ.q)(this._refractionIntensityTexture, JJ, "refractionIntensity")), this._translucencyColorTexture && BJ.d.TranslucencyColorTextureEnabled && UJ.SS_TRANSLUCENCYCOLOR_TEXTURE && (JJ.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, oJ.q)(this._translucencyColorTexture, JJ, "translucencyColor")), this._translucencyIntensityTexture && BJ.d.TranslucencyIntensityTextureEnabled && UJ.SS_TRANSLUCENCYINTENSITY_TEXTURE && (JJ.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, oJ.q)(this._translucencyIntensityTexture, JJ, "translucencyIntensity")), qJ && BJ.d.RefractionTextureEnabled) {
              JJ.Y5("refractionMatrix", qJ.getRefractionTextureMatrix());
              let cJ = 1;
              qJ.isCube || qJ.depth && (cJ = qJ.depth);
              const ZJ = qJ.getSize().width,
                FJ = this.volumeIndexOfRefraction;
              if (JJ.updateFloat4("vRefractionInfos", qJ.level, 1 / FJ, cJ, this._invertRefractionY ? -1 : 1), JJ.updateFloat4("vRefractionMicrosurfaceInfos", ZJ, qJ.lodGenerationScale, qJ.lodGenerationOffset, 1 / this.indexOfRefraction), XJ && JJ.updateFloat2("vRefractionFilteringInfo", ZJ, Math.log2(ZJ)), qJ.boundingBoxSize) {
                const cJ = qJ;
                JJ.updateVector3("vRefractionPosition", cJ.boundingBoxPosition), JJ.updateVector3("vRefractionSize", cJ.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && JJ.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), JJ.updateColor3("vDiffusionDistance", this.diffusionDistance), JJ.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), JJ.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), JJ.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), JJ.updateFloat("dispersion", this.dispersion)
          }
          cJ.texturesEnabled && (this._thicknessTexture && BJ.d.ThicknessTextureEnabled && JJ.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && BJ.d.RefractionIntensityTextureEnabled && UJ.SS_REFRACTIONINTENSITY_TEXTURE && JJ.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && BJ.d.TranslucencyIntensityTextureEnabled && UJ.SS_TRANSLUCENCYINTENSITY_TEXTURE && JJ.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && BJ.d.TranslucencyColorTextureEnabled && UJ.SS_TRANSLUCENCYCOLOR_TEXTURE && JJ.setTexture("translucencyColorSampler", this._translucencyColorTexture), qJ && BJ.d.RefractionTextureEnabled && (AJ ? JJ.setTexture("refractionSampler", qJ) : (JJ.setTexture("refractionSampler", qJ._lodTextureMid || qJ), JJ.setTexture("refractionSamplerLow", qJ._lodTextureLow || qJ), JJ.setTexture("refractionSamplerHigh", qJ._lodTextureHigh || qJ))))
        }
        _getRefractionTexture(JJ) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? JJ.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(JJ) {
          BJ.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && JJ.push(this._refractionTexture)
        }
        hasTexture(JJ) {
          return this._thicknessTexture === JJ || (this._refractionTexture === JJ || (this._refractionIntensityTexture === JJ || (this._translucencyIntensityTexture === JJ || this._translucencyColorTexture === JJ)))
        }
        hasRenderTargetTextures() {
          return !!(BJ.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(JJ) {
          this._thicknessTexture && JJ.push(this._thicknessTexture), this._refractionTexture && JJ.push(this._refractionTexture), this._refractionIntensityTexture && JJ.push(this._refractionIntensityTexture), this._translucencyColorTexture && JJ.push(this._translucencyColorTexture), this._translucencyIntensityTexture && JJ.push(this._translucencyIntensityTexture)
        }
        getAnimatables(JJ) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && JJ.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && JJ.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && JJ.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && JJ.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && JJ.push(this._translucencyIntensityTexture)
        }
        dispose(JJ) {
          JJ && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(JJ, cJ, ZJ) {
          return JJ.SS_SCATTERING && cJ.addFallback(ZJ++, "SS_SCATTERING"), JJ.SS_TRANSLUCENCY && cJ.addFallback(ZJ++, "SS_TRANSLUCENCY"), ZJ
        }
        getSamplers(JJ) {
          JJ.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, eJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, qJ = new WeakMap, jJ = new WeakMap, YJ = new WeakMap, hJ = new WeakMap, DJ = new WeakMap, sJ = new WeakMap, nJ = new WeakMap, GJ = new WeakMap, fJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zc[Symbol.metadata] ?? null) : void 0;
        xJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], rJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], vJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], mJ = [(0, SJ.F)(), (0, SJ.f)("_markScenePrePassDirty")], QJ = [(0, SJ.F)()], EJ = [(0, SJ.F)()], VJ = [(0, SJ.F)()], KJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], IJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], MJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], bJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], wJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], WJ = [(0, SJ.F)()], gJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], HJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], PJ = [(0, SJ.F)()], kJ = [(0, SJ.F)()], pJ = [(0, SJ.F)()], zJ = [(0, SJ.m)()], NJ = [(0, SJ.F)()], TJ = [(0, SJ.F)()], CJ = [(0, SJ.m)()], uJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], RJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], LJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], aJ = [(0, SJ.m)()], tJ = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], lJ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, SJ.F)()], cc = [(0, SJ.F)()], (0, yJ.d)(JJ, null, xJ, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isRefractionEnabled" in JJ,
            get: JJ => JJ.isRefractionEnabled,
            set: (JJ, cJ) => {
              JJ.isRefractionEnabled = cJ
            }
          },
          metadata: cJ
        }, Fc, Uc), (0, yJ.d)(JJ, null, rJ, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isTranslucencyEnabled" in JJ,
            get: JJ => JJ.isTranslucencyEnabled,
            set: (JJ, cJ) => {
              JJ.isTranslucencyEnabled = cJ
            }
          },
          metadata: cJ
        }, ec, Xc), (0, yJ.d)(JJ, null, vJ, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isDispersionEnabled" in JJ,
            get: JJ => JJ.isDispersionEnabled,
            set: (JJ, cJ) => {
              JJ.isDispersionEnabled = cJ
            }
          },
          metadata: cJ
        }, qc, jc), (0, yJ.d)(JJ, null, mJ, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isScatteringEnabled" in JJ,
            get: JJ => JJ.isScatteringEnabled,
            set: (JJ, cJ) => {
              JJ.isScatteringEnabled = cJ
            }
          },
          metadata: cJ
        }, Yc, hc), (0, yJ.d)(JJ, null, KJ, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAlbedoToTintRefraction" in JJ,
            get: JJ => JJ.useAlbedoToTintRefraction,
            set: (JJ, cJ) => {
              JJ.useAlbedoToTintRefraction = cJ
            }
          },
          metadata: cJ
        }, rc, vc), (0, yJ.d)(JJ, null, IJ, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAlbedoToTintTranslucency" in JJ,
            get: JJ => JJ.useAlbedoToTintTranslucency,
            set: (JJ, cJ) => {
              JJ.useAlbedoToTintTranslucency = cJ
            }
          },
          metadata: cJ
        }, mc, Qc), (0, yJ.d)(JJ, null, MJ, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "thicknessTexture" in JJ,
            get: JJ => JJ.thicknessTexture,
            set: (JJ, cJ) => {
              JJ.thicknessTexture = cJ
            }
          },
          metadata: cJ
        }, Ec, Vc), (0, yJ.d)(JJ, null, bJ, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "refractionTexture" in JJ,
            get: JJ => JJ.refractionTexture,
            set: (JJ, cJ) => {
              JJ.refractionTexture = cJ
            }
          },
          metadata: cJ
        }, Kc, yc), (0, yJ.d)(JJ, null, wJ, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "indexOfRefraction" in JJ,
            get: JJ => JJ.indexOfRefraction,
            set: (JJ, cJ) => {
              JJ.indexOfRefraction = cJ
            }
          },
          metadata: cJ
        }, Sc, Ic), (0, yJ.d)(JJ, null, gJ, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: JJ => "invertRefractionY" in JJ,
            get: JJ => JJ.invertRefractionY,
            set: (JJ, cJ) => {
              JJ.invertRefractionY = cJ
            }
          },
          metadata: cJ
        }, wc, Wc), (0, yJ.d)(JJ, null, HJ, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: JJ => "linkRefractionWithTransparency" in JJ,
            get: JJ => JJ.linkRefractionWithTransparency,
            set: (JJ, cJ) => {
              JJ.linkRefractionWithTransparency = cJ
            }
          },
          metadata: cJ
        }, gc, Hc), (0, yJ.d)(JJ, null, uJ, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useMaskFromThicknessTexture" in JJ,
            get: JJ => JJ.useMaskFromThicknessTexture,
            set: (JJ, cJ) => {
              JJ.useMaskFromThicknessTexture = cJ
            }
          },
          metadata: cJ
        }, Bc, tc), (0, yJ.d)(JJ, null, RJ, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "refractionIntensityTexture" in JJ,
            get: JJ => JJ.refractionIntensityTexture,
            set: (JJ, cJ) => {
              JJ.refractionIntensityTexture = cJ
            }
          },
          metadata: cJ
        }, oc, lc), (0, yJ.d)(JJ, null, LJ, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "translucencyIntensityTexture" in JJ,
            get: JJ => JJ.translucencyIntensityTexture,
            set: (JJ, cJ) => {
              JJ.translucencyIntensityTexture = cJ
            }
          },
          metadata: cJ
        }, JZ, cZ), (0, yJ.d)(JJ, null, tJ, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "translucencyColorTexture" in JJ,
            get: JJ => JJ.translucencyColorTexture,
            set: (JJ, cJ) => {
              JJ.translucencyColorTexture = cJ
            }
          },
          metadata: cJ
        }, UZ, eZ), (0, yJ.d)(JJ, null, lJ, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useGltfStyleTextures" in JJ,
            get: JJ => JJ.useGltfStyleTextures,
            set: (JJ, cJ) => {
              JJ.useGltfStyleTextures = cJ
            }
          },
          metadata: cJ
        }, XZ, AZ), (0, yJ.d)(null, null, QJ, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_scatteringDiffusionProfileIndex" in JJ,
            get: JJ => JJ._scatteringDiffusionProfileIndex,
            set: (JJ, cJ) => {
              JJ._scatteringDiffusionProfileIndex = cJ
            }
          },
          metadata: cJ
        }, Dc, sc), (0, yJ.d)(null, null, EJ, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "refractionIntensity" in JJ,
            get: JJ => JJ.refractionIntensity,
            set: (JJ, cJ) => {
              JJ.refractionIntensity = cJ
            }
          },
          metadata: cJ
        }, nc, Gc), (0, yJ.d)(null, null, VJ, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "translucencyIntensity" in JJ,
            get: JJ => JJ.translucencyIntensity,
            set: (JJ, cJ) => {
              JJ.translucencyIntensity = cJ
            }
          },
          metadata: cJ
        }, fc, xc), (0, yJ.d)(null, null, WJ, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_volumeIndexOfRefraction" in JJ,
            get: JJ => JJ._volumeIndexOfRefraction,
            set: (JJ, cJ) => {
              JJ._volumeIndexOfRefraction = cJ
            }
          },
          metadata: cJ
        }, Mc, bc), (0, yJ.d)(null, null, PJ, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "minimumThickness" in JJ,
            get: JJ => JJ.minimumThickness,
            set: (JJ, cJ) => {
              JJ.minimumThickness = cJ
            }
          },
          metadata: cJ
        }, Pc, kc), (0, yJ.d)(null, null, kJ, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "maximumThickness" in JJ,
            get: JJ => JJ.maximumThickness,
            set: (JJ, cJ) => {
              JJ.maximumThickness = cJ
            }
          },
          metadata: cJ
        }, pc, dc), (0, yJ.d)(null, null, pJ, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useThicknessAsDepth" in JJ,
            get: JJ => JJ.useThicknessAsDepth,
            set: (JJ, cJ) => {
              JJ.useThicknessAsDepth = cJ
            }
          },
          metadata: cJ
        }, zc, Nc), (0, yJ.d)(null, null, zJ, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintColor" in JJ,
            get: JJ => JJ.tintColor,
            set: (JJ, cJ) => {
              JJ.tintColor = cJ
            }
          },
          metadata: cJ
        }, Oc, Tc), (0, yJ.d)(null, null, NJ, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "tintColorAtDistance" in JJ,
            get: JJ => JJ.tintColorAtDistance,
            set: (JJ, cJ) => {
              JJ.tintColorAtDistance = cJ
            }
          },
          metadata: cJ
        }, Cc, uc), (0, yJ.d)(null, null, TJ, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "dispersion" in JJ,
            get: JJ => JJ.dispersion,
            set: (JJ, cJ) => {
              JJ.dispersion = cJ
            }
          },
          metadata: cJ
        }, ic, Rc), (0, yJ.d)(null, null, CJ, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "diffusionDistance" in JJ,
            get: JJ => JJ.diffusionDistance,
            set: (JJ, cJ) => {
              JJ.diffusionDistance = cJ
            }
          },
          metadata: cJ
        }, Lc, ac), (0, yJ.d)(null, null, aJ, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "translucencyColor" in JJ,
            get: JJ => JJ.translucencyColor,
            set: (JJ, cJ) => {
              JJ.translucencyColor = cJ
            }
          },
          metadata: cJ
        }, ZZ, FZ), (0, yJ.d)(null, null, Jc, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: JJ => "applyAlbedoAfterSubSurface" in JJ,
            get: JJ => JJ.applyAlbedoAfterSubSurface,
            set: (JJ, cJ) => {
              JJ.applyAlbedoAfterSubSurface = cJ
            }
          },
          metadata: cJ
        }, qZ, jZ), (0, yJ.d)(null, null, cc, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: JJ => "legacyTranslucency" in JJ,
            get: JJ => JJ.legacyTranslucency,
            set: (JJ, cJ) => {
              JJ.legacyTranslucency = cJ
            }
          },
          metadata: cJ
        }, YZ, hZ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, JJ.DEFAULT_LEGACY_TRANSLUCENCY = !1, JJ
    })();
    var jc = ZJ(39117),
      Yc = ZJ(39091),
      hc = ZJ(39128),
      Dc = ZJ(39130),
      sc = ZJ(39138),
      nc = ZJ(39140),
      Gc = ZJ(39143),
      fc = ZJ(39151),
      xc = ZJ(38677);
    const rc = {
      effect: null,
      subMesh: null
    };
    class vc extends((0, Gc.d)((0, nc.c)(NJ.d))) {}
    class mc extends((0, RJ.e)(vc)) {
      constructor(JJ) {
        super(JJ), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Qc extends((0, fc.e)(aJ.d)) {}
    let Ec = (() => {
      var JJ, cJ;
      let FJ, UJ = Qc,
        XJ = [],
        AJ = [];
      return JJ = class extends UJ {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(JJ) {
          this._realTimeFiltering = JJ, this.ycJ(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(JJ) {
          this._realTimeFilteringQuality = JJ, this.ycJ(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set debugMode(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        constructor(ZJ, FJ) {
          super(ZJ, FJ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || JJ.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new dJ.k(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = JJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = iJ.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new iJ.e(0, 0, 0), this._albedoColor = new iJ.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new iJ.e(1, 1, 1), this._reflectionColor = new iJ.e(1, 1, 1), this._emissiveColor = new iJ.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = JJ.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new MJ.c(16), this._globalAmbientColor = new iJ.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, cJ.set(this, (0, yJ.e)(this, XJ, 0)), this.debugLimit = ((0, yJ.e)(this, AJ), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new CJ(this), this.clearCoat = new Jc(this), this.iridescence = new Zc(this), this.anisotropy = new Uc(this), this.sheen = new Xc(this), this.subSurface = new qc(this), this.detailMap = new jc.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), BJ.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = HJ(this.Qy()), this.prePassConfiguration = new uJ.e
        }
        get hasRenderTargetTextures() {
          return !!(BJ.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === JJ.PBRMATERIAL_OPAQUE || this._transparencyMode === JJ.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === JJ.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== JJ.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(JJ, cJ, ZJ) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const FJ = cJ._drawWrapper;
          if (FJ.effect && this.isFrozen && FJ._wasPreviouslyReady && FJ._wasPreviouslyUsingInstances === ZJ) return !0;
          cJ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cJ.materialDefines = new mc(this._eventInfo.defineNames));
          const UJ = cJ.materialDefines;
          if (this._isReadyForSubMesh(cJ)) return !0;
          const eJ = this.Qy(),
            XJ = eJ.gn();
          if (UJ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, eJ.texturesEnabled)) {
            if (this._albedoTexture && BJ.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && BJ.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && BJ.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && BJ.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && BJ.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const JJ = this._getReflectionTexture();
            if (JJ && BJ.d.ReflectionTextureEnabled) {
              if (!JJ.isReadyOrNotBlocking()) return !1;
              if (JJ.irradianceTexture) {
                if (!JJ.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!JJ.sphericalPolynomial && JJ.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && BJ.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && BJ.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (BJ.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (XJ.getCaps().standardDerivatives && this._bumpTexture && BJ.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && BJ.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = UJ, this._eventInfo.subMesh = cJ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (UJ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (UJ.AREALIGHTUSED || UJ.CLUSTLIGHT_BATCH)
            for (let hJ = 0; hJ < JJ.lightSources.length; hJ++)
              if (!JJ.lightSources[hJ]._isReady()) return !1;
          if (XJ.getCaps().standardDerivatives || JJ.isVerticesDataPresent(zJ.n.NormalKind) || (JJ.createNormals(!0), IJ.c.Warn("PBRMaterial: Normals have been created for the mesh: " + JJ.name)), !(0, oJ.d)(eJ, JJ, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const AJ = cJ.effect,
            qJ = UJ._areLightsDisposed,
            jJ = this._prepareEffect(JJ, cJ.getRenderingMesh(), UJ, this.onCompiled, this.onError, ZJ, null);
          let YJ = !1;
          if (jJ)
            if (this._onEffectCreatedObservable && (rc.effect = jJ, rc.subMesh = cJ, this._onEffectCreatedObservable.notifyObservers(rc)), this.allowShaderHotSwapping && AJ && !jJ.isReady()) {
              if (UJ.markAsUnprocessed(), YJ = this.isFrozen, qJ) return UJ._areLightsDisposed = !0, !1
            } else eJ.resetCachedMaterial(), cJ.setEffect(jJ, UJ, this._materialContext);
          return !(!cJ.effect || !cJ.effect.isReady()) && (UJ._renderId = eJ.getRenderId(), FJ._wasPreviouslyReady = !YJ, FJ._wasPreviouslyUsingInstances = !!ZJ, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(cJ, ZJ, FJ) {
          let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(cJ, ZJ, FJ, XJ, AJ), !FJ.isDirty) return null;
          FJ.markAsProcessed();
          const qJ = this.Qy().gn(),
            jJ = new tJ.b;
          let YJ = 0;
          FJ.USESPHERICALINVERTEX && jJ.addFallback(YJ++, "USESPHERICALINVERTEX"), FJ.FOG && jJ.addFallback(YJ, "FOG"), FJ.SPECULARAA && jJ.addFallback(YJ, "SPECULARAA"), FJ.POINTSIZE && jJ.addFallback(YJ, "POINTSIZE"), FJ.LOGARITHMICDEPTH && jJ.addFallback(YJ, "LOGARITHMICDEPTH"), FJ.PARALLAX && jJ.addFallback(YJ, "PARALLAX"), FJ.PARALLAX_RHS && jJ.addFallback(YJ, "PARALLAX_RHS"), FJ.PARALLAXOCCLUSION && jJ.addFallback(YJ++, "PARALLAXOCCLUSION"), FJ.ENVIRONMENTBRDF && jJ.addFallback(YJ++, "ENVIRONMENTBRDF"), FJ.TANGENT && jJ.addFallback(YJ++, "TANGENT"), FJ.BUMP && jJ.addFallback(YJ++, "BUMP"), YJ = (0, oJ.t)(FJ, jJ, this._maxSimultaneousLights, YJ), FJ.SPECULARTERM && jJ.addFallback(YJ++, "SPECULARTERM"), FJ.USESPHERICALFROMREFLECTIONMAP && jJ.addFallback(YJ++, "USESPHERICALFROMREFLECTIONMAP"), FJ.USEIRRADIANCEMAP && jJ.addFallback(YJ++, "USEIRRADIANCEMAP"), FJ.LIGHTMAP && jJ.addFallback(YJ++, "LIGHTMAP"), FJ.NORMAL && jJ.addFallback(YJ++, "NORMAL"), FJ.AMBIENT && jJ.addFallback(YJ++, "AMBIENT"), FJ.EMISSIVE && jJ.addFallback(YJ++, "EMISSIVE"), FJ.VERTEXCOLOR && jJ.addFallback(YJ++, "VERTEXCOLOR"), FJ.MORPHTARGETS && jJ.addFallback(YJ++, "MORPHTARGETS"), FJ.MULTIVIEW && jJ.addFallback(0, "MULTIVIEW");
          const hJ = [zJ.n.PositionKind];
          FJ.NORMAL && hJ.push(zJ.n.NormalKind), FJ.TANGENT && hJ.push(zJ.n.TangentKind);
          for (let JJ = 1; JJ <= 6; ++JJ) FJ["UV" + JJ] && hJ.push(`uv${1===JJ?"":JJ}`);
          FJ.VERTEXCOLOR && hJ.push(zJ.n.ColorKind), (0, oJ.z)(hJ, cJ, FJ, jJ), (0, oJ.D)(hJ, FJ), (0, oJ.H)(hJ, cJ, FJ), (0, oJ.w)(hJ, cJ, FJ);
          let DJ = "pbr";
          const sJ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            nJ = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, oJ.kb)(sJ, nJ, !0);
          const GJ = ["Material", "Scene", "Mesh"],
            fJ = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: FJ.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = jJ, this._eventInfo.fallbackRank = YJ, this._eventInfo.defines = FJ, this._eventInfo.uniforms = sJ, this._eventInfo.attributes = hJ, this._eventInfo.samplers = nJ, this._eventInfo.uniformBuffersNames = GJ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cJ, this._eventInfo.indexParameters = fJ, this._callbackPluginEventGeneric(128, this._eventInfo), sc.b.AddUniformsAndSamplers(sJ, nJ), uJ.e.AddUniforms(sJ), uJ.e.AddSamplers(nJ), (0, Yc.c)(sJ), this._useVertexPulling) {
            const JJ = ZJ?.geometry;
            JJ && (this._vertexPullingMetadata = (0, hc.f)(JJ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((JJ, cJ) => {
              sJ.push(`vp_${cJ}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          LJ.e && (LJ.e.PrepareUniforms(sJ, FJ), LJ.e.PrepareSamplers(nJ, FJ)), (0, oJ.mb)({
            uniformsNames: sJ,
            uniformBuffersNames: GJ,
            samplers: nJ,
            defines: FJ,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const xJ = {};
          this.customShaderNameResolve && (DJ = this.customShaderNameResolve(DJ, sJ, GJ, nJ, FJ, hJ, xJ));
          const rJ = FJ.toString(),
            vJ = qJ.createEffect(DJ, {
              attributes: hJ,
              uniformsNames: sJ,
              uniformBuffersNames: GJ,
              samplers: nJ,
              defines: rJ,
              fallbacks: jJ,
              onCompiled: UJ,
              onError: eJ,
              indexParameters: fJ,
              processFinalCode: xJ.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: FJ.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: JJ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, qJ);
          return this._eventInfo.customCode = void 0, vJ
        }
        _prepareDefines(cJ, ZJ, FJ) {
          let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const XJ = ZJ.hasThinInstances,
            AJ = this.Qy(),
            qJ = AJ.gn();
          (0, oJ.V)(AJ, cJ, FJ, !0, this._maxSimultaneousLights, this._disableLighting), FJ._needNormals = !0, (0, oJ._)(AJ, FJ);
          const jJ = this.needAlphaBlendingForMesh(cJ) && this.Qy().useOrderIndependentTransparency;
          if ((0, oJ.eb)(AJ, FJ, this.canRenderToMRT && !jJ), (0, oJ.cb)(AJ, FJ, jJ), sc.b.PrepareDefines(qJ.currentRenderPassId, cJ, FJ), FJ.METALLICWORKFLOW = this.isMetallicWorkflow(), FJ._areTexturesDirty) {
            FJ._needUVs = !1;
            for (let JJ = 1; JJ <= 6; ++JJ) FJ["MAINUV" + JJ] = !1;
            if (AJ.texturesEnabled) {
              FJ.ALBEDODIRECTUV = 0, FJ.BASE_WEIGHTDIRECTUV = 0, FJ.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, FJ.AMBIENTDIRECTUV = 0, FJ.OPACITYDIRECTUV = 0, FJ.EMISSIVEDIRECTUV = 0, FJ.REFLECTIVITYDIRECTUV = 0, FJ.MICROSURFACEMAPDIRECTUV = 0, FJ.METALLIC_REFLECTANCEDIRECTUV = 0, FJ.REFLECTANCEDIRECTUV = 0, FJ.BUMPDIRECTUV = 0, FJ.LIGHTMAPDIRECTUV = 0, qJ.getCaps().textureLOD && (FJ.LODBASEDMICROSFURACE = !0), this._albedoTexture && BJ.d.DiffuseTextureEnabled ? ((0, oJ.X)(this._albedoTexture, FJ, "ALBEDO"), FJ.GAMMAALBEDO = this._albedoTexture.gammaSpace) : FJ.ALBEDO = !1, this._baseWeightTexture && BJ.d.BaseWeightTextureEnabled ? (0, oJ.X)(this._baseWeightTexture, FJ, "BASE_WEIGHT") : FJ.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && BJ.d.BaseDiffuseRoughnessTextureEnabled ? (0, oJ.X)(this._baseDiffuseRoughnessTexture, FJ, "BASE_DIFFUSE_ROUGHNESS") : FJ.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && BJ.d.AmbientTextureEnabled ? ((0, oJ.X)(this._ambientTexture, FJ, "AMBIENT"), FJ.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : FJ.AMBIENT = !1, this._opacityTexture && BJ.d.OpacityTextureEnabled ? ((0, oJ.X)(this._opacityTexture, FJ, "OPACITY"), FJ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : FJ.OPACITY = !1;
              const JJ = this._getReflectionTexture(),
                cJ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qJ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, oJ.T)(AJ, JJ, FJ, this.realTimeFiltering, this.realTimeFilteringQuality, !cJ), this._lightmapTexture && BJ.d.LightmapTextureEnabled ? ((0, oJ.X)(this._lightmapTexture, FJ, "LIGHTMAP"), FJ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, FJ.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, FJ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : FJ.LIGHTMAP = !1, this._emissiveTexture && BJ.d.EmissiveTextureEnabled ? ((0, oJ.X)(this._emissiveTexture, FJ, "EMISSIVE"), FJ.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : FJ.EMISSIVE = !1, BJ.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, oJ.X)(this._metallicTexture, FJ, "REFLECTIVITY"), FJ.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, FJ.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, FJ.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, FJ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, FJ.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, oJ.X)(this._reflectivityTexture, FJ, "REFLECTIVITY"), FJ.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, FJ.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, FJ.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : FJ.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (FJ.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, oJ.X)(this._metallicReflectanceTexture, FJ, "METALLIC_REFLECTANCE"), FJ.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : FJ.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, oJ.X)(this._reflectanceTexture, FJ, "REFLECTANCE"), FJ.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : FJ.REFLECTANCE = !1) : (FJ.METALLIC_REFLECTANCE = !1, FJ.REFLECTANCE = !1), this._microSurfaceTexture ? (0, oJ.X)(this._microSurfaceTexture, FJ, "MICROSURFACEMAP") : FJ.MICROSURFACEMAP = !1) : (FJ.REFLECTIVITY = !1, FJ.MICROSURFACEMAP = !1), qJ.getCaps().standardDerivatives && this._bumpTexture && BJ.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, oJ.X)(this._bumpTexture, FJ, "BUMP"), this._useParallax && this._albedoTexture && BJ.d.DiffuseTextureEnabled ? (FJ.PARALLAX = !0, FJ.PARALLAX_RHS = AJ.useRightHandedSystem, FJ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : FJ.PARALLAX = !1, FJ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (FJ.BUMP = !1, FJ.PARALLAX = !1, FJ.PARALLAX_RHS = !1, FJ.PARALLAXOCCLUSION = !1, FJ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && BJ.d.ReflectionTextureEnabled ? (FJ.ENVIRONMENTBRDF = !0, FJ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (FJ.ENVIRONMENTBRDF = !1, FJ.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? FJ.ALPHAFROMALBEDO = !0 : FJ.ALPHAFROMALBEDO = !1
            }
            FJ.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === JJ.LIGHTFALLOFF_STANDARD ? (FJ.USEPHYSICALLIGHTFALLOFF = !1, FJ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === JJ.LIGHTFALLOFF_GLTF ? (FJ.USEPHYSICALLIGHTFALLOFF = !1, FJ.USEGLTFLIGHTFALLOFF = !0) : (FJ.USEPHYSICALLIGHTFALLOFF = !0, FJ.USEGLTFLIGHTFALLOFF = !1), FJ.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? FJ.TWOSIDEDLIGHTING = !0 : FJ.TWOSIDEDLIGHTING = !1, FJ.MIRRORED = !!AJ._mirroredCameraPosition, FJ.SPECULARAA = qJ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(FJ._areTexturesDirty || FJ._areMiscDirty) && (FJ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, FJ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, FJ.ALPHABLEND = this.needAlphaBlendingForMesh(cJ), FJ.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, FJ.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), FJ._areTexturesDirty && (FJ.TEXTURE_REPETITION_MODE = qJ.version > 1 || qJ.isWebGPU ? this.textureRepetitionMode : 0), FJ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(FJ), FJ.FORCENORMALFORWARD = this._forceNormalForward, FJ.RADIANCEOCCLUSION = this._useRadianceOcclusion, FJ.HORIZONOCCLUSION = this._useHorizonOcclusion, FJ._areMiscDirty && ((0, oJ.Y)(cJ, AJ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cJ), FJ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZJ, this._isVertexOutputInvariant), FJ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !cJ.isVerticesDataPresent(zJ.n.NormalKind), FJ.DEBUGMODE = this._debugMode), (0, oJ.P)(AJ, qJ, this, FJ, !!UJ, eJ, XJ), this._eventInfo.defines = FJ, this._eventInfo.mesh = cJ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, oJ.L)(cJ, FJ, !0, !0, !0, this._transparencyMode !== JJ.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(JJ, cJ, ZJ) {
          const FJ = {
            clipPlane: !1,
            useInstances: !1,
            ...ZJ
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ZJ = new mc(this._eventInfo.defineNames),
              UJ = this._prepareEffect(JJ, JJ, ZJ, void 0, void 0, FJ.useInstances, FJ.clipPlane);
            this._onEffectCreatedObservable && (rc.effect = UJ, rc.subMesh = null, this._onEffectCreatedObservable.notifyObservers(rc)), UJ.isReady() ? cJ && cJ(this) : UJ.onCompileObservable.add((() => {
              cJ && cJ(this)
            }))
          })()
        }
        buildUniformLayout() {
          const JJ = this._uniformBuffer;
          JJ.addUniform("vAlbedoInfos", 2), JJ.addUniform("vBaseWeightInfos", 2), JJ.addUniform("vBaseDiffuseRoughnessInfos", 2), JJ.addUniform("vAmbientInfos", 4), JJ.addUniform("vOpacityInfos", 2), JJ.addUniform("vEmissiveInfos", 2), JJ.addUniform("vLightmapInfos", 2), JJ.addUniform("vReflectivityInfos", 3), JJ.addUniform("vMicroSurfaceSamplerInfos", 2), JJ.addUniform("vBumpInfos", 3), JJ.addUniform("albedoMatrix", 16), JJ.addUniform("baseWeightMatrix", 16), JJ.addUniform("baseDiffuseRoughnessMatrix", 16), JJ.addUniform("ambientMatrix", 16), JJ.addUniform("opacityMatrix", 16), JJ.addUniform("emissiveMatrix", 16), JJ.addUniform("lightmapMatrix", 16), JJ.addUniform("reflectivityMatrix", 16), JJ.addUniform("microSurfaceSamplerMatrix", 16), JJ.addUniform("bumpMatrix", 16), JJ.addUniform("vTangentSpaceParams", 2), JJ.addUniform("vAlbedoColor", 4), JJ.addUniform("baseWeight", 1), JJ.addUniform("baseDiffuseRoughness", 1), JJ.addUniform("vLightingIntensity", 4), JJ.addUniform("pointSize", 1), JJ.addUniform("vReflectivityColor", 4), JJ.addUniform("vEmissiveColor", 3), JJ.addUniform("vAmbientColor", 3), JJ.addUniform("vDebugMode", 2), JJ.addUniform("vMetallicReflectanceFactors", 4), JJ.addUniform("vMetallicReflectanceInfos", 2), JJ.addUniform("metallicReflectanceMatrix", 16), JJ.addUniform("vReflectanceInfos", 2), JJ.addUniform("reflectanceMatrix", 16), JJ.addUniform("cameraInfo", 4), JJ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, oJ.gb)(JJ, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(JJ, cJ, ZJ) {
          const FJ = this.Qy(),
            UJ = ZJ.materialDefines;
          if (!UJ) return;
          const eJ = ZJ.effect;
          if (!eJ) return;
          this._activeEffect = eJ, cJ.getMeshUniformBuffer().bindToEffect(eJ, "Mesh"), cJ.transferToEffect(JJ);
          const XJ = FJ.gn();
          this._uniformBuffer.bindToEffect(eJ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, FJ, cJ, JJ, this.isFrozen), sc.b.Bind(XJ.currentRenderPassId, this._activeEffect, cJ, JJ, this);
          const AJ = FJ.activeCamera;
          AJ ? this._uniformBuffer.updateFloat4("cameraInfo", AJ.minZ, AJ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const qJ = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qJ[0], qJ[1], qJ[2], qJ[3]), this._eventInfo.subMesh = ZJ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), UJ.OBJECTSPACE_NORMALMAP && (JJ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const jJ = this._mustRebind(FJ, eJ, ZJ, cJ.visibility),
            YJ = XJ._features.needToAlwaysBindUniformBuffers;
          (0, oJ.e)(cJ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, hc.d)(this._activeEffect, this._vertexPullingMetadata);
          let hJ = null;
          const DJ = this._uniformBuffer;
          if (jJ) {
            if (this.bindViewProjection(eJ), hJ = this._getReflectionTexture(), !DJ.useUbo || !this.isFrozen || !DJ.isSync || ZJ._drawWrapper._forceRebindOnNextCall) {
              if (FJ.texturesEnabled && (this._albedoTexture && BJ.d.DiffuseTextureEnabled && (DJ.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, oJ.q)(this._albedoTexture, DJ, "albedo")), this._baseWeightTexture && BJ.d.BaseWeightTextureEnabled && (DJ.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, oJ.q)(this._baseWeightTexture, DJ, "baseWeight")), this._baseDiffuseRoughnessTexture && BJ.d.BaseDiffuseRoughnessTextureEnabled && (DJ.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, oJ.q)(this._baseDiffuseRoughnessTexture, DJ, "baseDiffuseRoughness")), this._ambientTexture && BJ.d.AmbientTextureEnabled && (DJ.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, oJ.q)(this._ambientTexture, DJ, "ambient")), this._opacityTexture && BJ.d.OpacityTextureEnabled && (DJ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, oJ.q)(this._opacityTexture, DJ, "opacity")), this._emissiveTexture && BJ.d.EmissiveTextureEnabled && (DJ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, oJ.q)(this._emissiveTexture, DJ, "emissive")), this._lightmapTexture && BJ.d.LightmapTextureEnabled && (DJ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, oJ.q)(this._lightmapTexture, DJ, "lightmap")), BJ.d.SpecularTextureEnabled && (this._metallicTexture ? (DJ.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, oJ.q)(this._metallicTexture, DJ, "reflectivity")) : this._reflectivityTexture && (DJ.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, oJ.q)(this._reflectivityTexture, DJ, "reflectivity")), this._metallicReflectanceTexture && (DJ.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, oJ.q)(this._metallicReflectanceTexture, DJ, "metallicReflectance")), this._reflectanceTexture && UJ.REFLECTANCE && (DJ.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, oJ.q)(this._reflectanceTexture, DJ, "reflectance")), this._microSurfaceTexture && (DJ.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, oJ.q)(this._microSurfaceTexture, DJ, "microSurfaceSampler"))), this._bumpTexture && XJ.getCaps().standardDerivatives && BJ.d.BumpTextureEnabled && !this._disableBumpMap && (DJ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, oJ.q)(this._bumpTexture, DJ, "bump"), FJ._mirroredCameraPosition ? DJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : DJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, oJ.i)(FJ, UJ, DJ, this._reflectionColor, hJ, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && DJ.updateFloat("pointSize", this.pointSize), UJ.METALLICWORKFLOW) {
                iJ.h.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, iJ.h.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const JJ = this.subSurface?._indexOfRefraction ?? 1.5,
                  cJ = 1;
                iJ.h.Color4[0].b = JJ;
                const ZJ = Math.pow((JJ - cJ) / (JJ + cJ), 2);
                iJ.h.Color4[0].a = ZJ, DJ.updateDirectColor4("vReflectivityColor", iJ.h.Color4[0]), DJ.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else DJ.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              DJ.updateColor3("vEmissiveColor", BJ.d.EmissiveTextureEnabled ? this._emissiveColor : iJ.e.BlackReadOnly), !UJ.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? DJ.updateColor4("vAlbedoColor", this._albedoColor, 1) : DJ.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), DJ.updateFloat("baseWeight", this._baseWeight), DJ.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * FJ.environmentIntensity, this._lightingInfos.w = this._specularIntensity, DJ.updateVector4("vLightingIntensity", this._lightingInfos), FJ.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), DJ.updateColor3("vAmbientColor", this._globalAmbientColor), DJ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            FJ.texturesEnabled && (this._albedoTexture && BJ.d.DiffuseTextureEnabled && DJ.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && BJ.d.BaseWeightTextureEnabled && DJ.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && BJ.d.BaseDiffuseRoughnessTextureEnabled && DJ.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && BJ.d.AmbientTextureEnabled && DJ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BJ.d.OpacityTextureEnabled && DJ.setTexture("opacitySampler", this._opacityTexture), (0, oJ.j)(FJ, UJ, DJ, hJ, this.realTimeFiltering), UJ.ENVIRONMENTBRDF && DJ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && BJ.d.EmissiveTextureEnabled && DJ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BJ.d.LightmapTextureEnabled && DJ.setTexture("lightmapSampler", this._lightmapTexture), BJ.d.SpecularTextureEnabled && (this._metallicTexture ? DJ.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && DJ.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && DJ.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && UJ.REFLECTANCE && DJ.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && DJ.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && XJ.getCaps().standardDerivatives && BJ.d.BumpTextureEnabled && !this._disableBumpMap && DJ.setTexture("bumpSampler", this._bumpTexture)), this.Qy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cJ) && this.Qy().depthPeelingRenderer.bind(eJ), this._eventInfo.subMesh = ZJ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Yc.e)(this._activeEffect, this, FJ), this.bindEyePosition(eJ)
          } else YJ && (this._needToBindSceneUbo = !0);
          !jJ && this.isFrozen && !YJ || !FJ.lightsEnabled || this._disableLighting || (0, oJ.k)(FJ, cJ, this._activeEffect, UJ, this._maxSimultaneousLights), !jJ && this.isFrozen || ((FJ.fogEnabled && cJ.applyFog && FJ.fogMode !== pJ.e.FOGMODE_NONE || hJ || this.subSurface.refractionTexture || cJ.receiveShadows || UJ.PREPASS || UJ.CLUSTLIGHT_BATCH) && this.bindView(eJ), (0, oJ.h)(FJ, cJ, this._activeEffect, !0), UJ.NUM_MORPH_INFLUENCERS && (0, oJ.m)(cJ, this._activeEffect), UJ.BAKED_VERTEX_ANIMATION_TEXTURE && cJ.bakedVertexAnimationManager?.bind(eJ, UJ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, oJ.l)(UJ, this._activeEffect, FJ)), this._afterBind(cJ, this._activeEffect, ZJ), DJ.update()
        }
        getAnimatables() {
          const JJ = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && JJ.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && JJ.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && JJ.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && JJ.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && JJ.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && JJ.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && JJ.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? JJ.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && JJ.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && JJ.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && JJ.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && JJ.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && JJ.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && JJ.push(this._microSurfaceTexture), JJ
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Qy().environmentTexture
        }
        getActiveTextures() {
          const JJ = super.getActiveTextures();
          return this._albedoTexture && JJ.push(this._albedoTexture), this._baseWeightTexture && JJ.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && JJ.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && JJ.push(this._ambientTexture), this._opacityTexture && JJ.push(this._opacityTexture), this._reflectionTexture && JJ.push(this._reflectionTexture), this._emissiveTexture && JJ.push(this._emissiveTexture), this._reflectivityTexture && JJ.push(this._reflectivityTexture), this._metallicTexture && JJ.push(this._metallicTexture), this._metallicReflectanceTexture && JJ.push(this._metallicReflectanceTexture), this._reflectanceTexture && JJ.push(this._reflectanceTexture), this._microSurfaceTexture && JJ.push(this._microSurfaceTexture), this._bumpTexture && JJ.push(this._bumpTexture), this._lightmapTexture && JJ.push(this._lightmapTexture), JJ
        }
        hasTexture(JJ) {
          return !!super.hasTexture(JJ) || (this._albedoTexture === JJ || (this._baseWeightTexture === JJ || (this._baseDiffuseRoughnessTexture === JJ || (this._ambientTexture === JJ || (this._opacityTexture === JJ || (this._reflectionTexture === JJ || (this._emissiveTexture === JJ || (this._reflectivityTexture === JJ || (this._metallicTexture === JJ || (this._metallicReflectanceTexture === JJ || (this._reflectanceTexture === JJ || (this._microSurfaceTexture === JJ || (this._bumpTexture === JJ || this._lightmapTexture === JJ)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const JJ = this.Qy().enableSubSurfaceForPrePass();
          return JJ && (JJ.enabled = !0), !0
        }
        dispose(JJ, cJ) {
          this._breakShaderLoadedCheck = !0, cJ && (this._environmentBRDFTexture && this.Qy().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(JJ, cJ)
        }
      }, cJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(UJ[Symbol.metadata] ?? null) : void 0;
        FJ = [(0, SJ.f)("_markAllSubMeshesAsMiscDirty")], (0, yJ.d)(JJ, null, FJ, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "debugMode" in JJ,
            get: JJ => JJ.debugMode,
            set: (JJ, cJ) => {
              JJ.debugMode = cJ
            }
          },
          metadata: cJ
        }, XJ, AJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ.PBRMATERIAL_OPAQUE = eJ.c.MATERIAL_OPAQUE, JJ.PBRMATERIAL_ALPHATEST = eJ.c.MATERIAL_ALPHATEST, JJ.PBRMATERIAL_ALPHABLEND = eJ.c.MATERIAL_ALPHABLEND, JJ.PBRMATERIAL_ALPHATESTANDBLEND = eJ.c.MATERIAL_ALPHATESTANDBLEND, JJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, JJ.LIGHTFALLOFF_PHYSICAL = 0, JJ.LIGHTFALLOFF_GLTF = 1, JJ.LIGHTFALLOFF_STANDARD = 2, JJ.ForceGLSL = !1, JJ._ShaderLoader = new Dc.b((() => [Promise.all([ZJ.e(297), ZJ.e(308)]).then((() => ZJ(59773))), Promise.all([ZJ.e(302), ZJ.e(298), ZJ.e(362), ZJ.e(311), ZJ.e(361)]).then((() => ZJ(59790)))]), (() => [Promise.all([ZJ.e(316), ZJ.e(318), ZJ.e(325)]).then((() => ZJ(59876))), Promise.all([ZJ.e(316), ZJ.e(319), ZJ.e(365), ZJ.e(329), ZJ.e(364)]).then((() => ZJ(59903)))])), JJ
    })();
    Object.getOwnPropertyDescriptor(Ec.prototype, "decalMap") || Object.defineProperty(Ec.prototype, "decalMap", (0, xc.h)("PBRBaseMaterial", "decalMap")), (0, ZJ(40542).d)();
    var Vc = ZJ(38822);
    var Kc = ZJ(38879),
      yc = ZJ(40527),
      Sc = ZJ(38635),
      Ic = ZJ(38644),
      Mc = ZJ(38741);
    let bc = !1;
    const wc = new iJ.f,
      Wc = new iJ.f;
    class gc extends yc.d {
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
      set wrapU(JJ) {
        if (this._textures)
          for (let cJ = 0; cJ < this._textures.length; cJ++) this._textures[cJ].wrapU = JJ
      }
      set wrapV(JJ) {
        if (this._textures)
          for (let cJ = 0; cJ < this._textures.length; cJ++) this._textures[cJ].wrapV = JJ
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = !(!UJ || !UJ.generateMipMaps) && UJ.generateMipMaps,
          AJ = !(!UJ || !UJ.generateDepthTexture) && UJ.generateDepthTexture,
          qJ = UJ && UJ.depthTextureFormat ? UJ.depthTextureFormat : 15,
          jJ = !UJ || void 0 === UJ.doNotChangeAspectRatio || UJ.doNotChangeAspectRatio,
          YJ = !(!UJ || !UJ.drawOnlyOnFirstAttachmentByDefault) && UJ.drawOnlyOnFirstAttachmentByDefault;
        if (super(JJ, cJ, FJ, XJ, jJ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), bc || (bc = !0, Ic.ThinEngine.prototype.restoreSingleAttachment = function() {
            const JJ = this._gl;
            this.bindAttachments([JJ.BACK])
          }, Ic.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const JJ = this._gl;
            this.bindAttachments([JJ.COLOR_ATTACHMENT0])
          }, Ic.ThinEngine.prototype.buildTextureLayout = function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ZJ = this._gl,
              FJ = [];
            if (cJ) FJ.push(ZJ.BACK);
            else
              for (let UJ = 0; UJ < JJ.length; UJ++) JJ[UJ] ? FJ.push(ZJ["COLOR_ATTACHMENT" + UJ]) : FJ.push(ZJ.NONE);
            return FJ
          }, Ic.ThinEngine.prototype.bindAttachments = function(JJ) {
            const cJ = this._gl,
              ZJ = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ZJ)
              for (let FJ = 0; FJ < JJ.length; FJ++) JJ[FJ] !== cJ.NONE && ZJ[FJ] && (0, Mc.l)(ZJ[FJ].format) && (this._integerMRTAttachmentsMask |= 1 << FJ);
            cJ.drawBuffers(JJ)
          }, Ic.ThinEngine.prototype.clearAttachments = function(JJ, cJ, ZJ, FJ) {
            let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const XJ = this._currentRenderTarget?.textures;
            let AJ = !1;
            if (ZJ && JJ && XJ)
              for (let qJ = 0; qJ < cJ.length; qJ++) {
                const JJ = XJ[qJ];
                if (cJ[qJ] !== this._gl.NONE && JJ && (0, Mc.l)(JJ.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  AJ = !0;
                  break
                }
              }
            if (!AJ || !JJ || !XJ) return this.bindAttachments(cJ), void this.clear(JJ, ZJ, FJ, UJ, eJ);
            this.bindAttachments(cJ), this._applyColorWriteState();
            for (let qJ = 0; qJ < cJ.length; qJ++) {
              const ZJ = XJ[qJ];
              if (cJ[qJ] !== this._gl.NONE && ZJ) {
                let cJ = JJ;
                if ((0, Mc.l)(ZJ.format)) {
                  const FJ = (0, Mc.m)(ZJ.type);
                  cJ = FJ ? wc : Wc;
                  const UJ = FJ ? 255 : 1;
                  cJ.r = Math.round(JJ.r * UJ), cJ.g = Math.round(JJ.g * UJ), cJ.b = Math.round(JJ.b * UJ), cJ.a = Math.round(JJ.a * UJ)
                }
                this._clearColorAttachment(qJ, cJ, ZJ.format, ZJ.type)
              }
            }
            if (FJ || UJ) {
              const JJ = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, FJ, UJ, eJ)
              } finally {
                this._integerMRTAttachmentsMask = JJ
              }
            }
          }, Ic.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, JJ.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(JJ), cJ || this.generateMipMapsMultiFramebuffer(JJ), ZJ && (JJ._MSAAFramebuffer && this._bindUnboundFramebuffer(JJ._framebuffer), ZJ()), this._bindUnboundFramebuffer(null)
          }, Ic.ThinEngine.prototype.createMultipleRenderTarget = function(JJ, cJ) {
            let ZJ, FJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              UJ = !1,
              eJ = !0,
              XJ = !1,
              AJ = !1,
              qJ = 1,
              jJ = 1,
              YJ = [],
              hJ = [],
              DJ = [],
              sJ = [],
              nJ = [],
              GJ = [],
              fJ = [],
              xJ = [],
              rJ = [],
              vJ = !1;
            const mJ = this._createHardwareRenderTargetWrapper(!0, !1, JJ);
            void 0 !== cJ && (UJ = void 0 !== cJ.generateMipMaps && cJ.generateMipMaps, eJ = void 0 === cJ.generateDepthBuffer || cJ.generateDepthBuffer, XJ = void 0 !== cJ.generateStencilBuffer && cJ.generateStencilBuffer, AJ = void 0 !== cJ.generateDepthTexture && cJ.generateDepthTexture, qJ = cJ.EXJ ?? 1, jJ = cJ.samples ?? jJ, YJ = cJ.types || YJ, hJ = cJ.samplingModes || hJ, DJ = cJ.useSRGBBuffers || DJ, sJ = cJ.formats || sJ, nJ = cJ.targetTypes || nJ, GJ = cJ.faceIndex || GJ, fJ = cJ.layerIndex || fJ, xJ = cJ.layerCounts || xJ, rJ = cJ.labels || rJ, vJ = cJ.dontCreateTextures ?? !1, this.nG > 1 && (13 === cJ.depthTextureFormat || 17 === cJ.depthTextureFormat || 16 === cJ.depthTextureFormat || 14 === cJ.depthTextureFormat || 18 === cJ.depthTextureFormat) && (ZJ = cJ.depthTextureFormat)), void 0 === ZJ && (ZJ = XJ ? 13 : 14);
            const QJ = this._gl,
              EJ = this._currentFramebuffer,
              VJ = QJ.createFramebuffer();
            this._bindUnboundFramebuffer(VJ);
            const KJ = JJ.width ?? JJ,
              yJ = JJ.height ?? JJ,
              SJ = [],
              MJ = [],
              bJ = this.nG > 1 && (13 === ZJ || 17 === ZJ || 18 === ZJ);
            mJ.label = cJ?.label ?? "MultiRenderTargetWrapper", mJ._framebuffer = VJ, mJ._generateDepthBuffer = AJ || eJ, mJ._generateStencilBuffer = AJ ? bJ : XJ, mJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(mJ._generateStencilBuffer, mJ._generateDepthBuffer, KJ, yJ, 1, ZJ), mJ._attachments = MJ;
            for (let wJ = 0; wJ < qJ; wJ++) {
              let JJ = hJ[wJ] || 3,
                cJ = YJ[wJ] || 0,
                ZJ = DJ[wJ] || !1;
              const FJ = sJ[wJ] || 5,
                eJ = nJ[wJ] || 3553,
                XJ = xJ[wJ] ?? 1;
              (1 !== cJ || this._caps.textureFloatLinearFiltering) && (2 !== cJ || this._caps.textureHalfFloatLinearFiltering) || (JJ = 1);
              const AJ = this._getSamplingParameters(JJ, UJ);
              1 !== cJ || this._caps.textureFloat || (cJ = 0, IJ.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ZJ = ZJ && this._caps.supportSRGBBuffers && (this.nG > 1 || this.isWebGPU);
              const qJ = this.nG > 1,
                jJ = QJ[qJ ? "COLOR_ATTACHMENT" + wJ : "COLOR_ATTACHMENT" + wJ + "_WEBGL"];
              if (MJ.push(jJ), -1 === eJ || vJ) continue;
              const GJ = new Sc.e(this, 6);
              SJ[wJ] = GJ, QJ.activeTexture(QJ["TEXTURE" + wJ]), QJ.bindTexture(eJ, GJ._hardwareTexture.underlyingResource), QJ.texParameteri(eJ, QJ.TEXTURE_MAG_FILTER, AJ.mag), QJ.texParameteri(eJ, QJ.TEXTURE_MIN_FILTER, AJ.min), QJ.texParameteri(eJ, QJ.TEXTURE_WRAP_S, QJ.CLAMP_TO_EDGE), QJ.texParameteri(eJ, QJ.TEXTURE_WRAP_T, QJ.CLAMP_TO_EDGE);
              const fJ = this._getRGBABufferInternalSizedFormat(cJ, FJ, ZJ),
                EJ = this._getInternalFormat(FJ),
                VJ = this._getWebGLTextureType(cJ);
              if (!qJ || 35866 !== eJ && 32879 !== eJ)
                if (34067 === eJ) {
                  for (let JJ = 0; JJ < 6; JJ++) QJ.texImage2D(QJ.TEXTURE_CUBE_MAP_POSITIVE_X + JJ, 0, fJ, KJ, yJ, 0, EJ, VJ, null);
                  GJ.isCube = !0
                } else QJ.texImage2D(QJ.TEXTURE_2D, 0, fJ, KJ, yJ, 0, EJ, VJ, null);
              else 35866 === eJ ? GJ.is2DArray = !0 : GJ.is3D = !0, GJ.baseDepth = GJ.depth = XJ, QJ.texImage3D(eJ, 0, fJ, KJ, yJ, XJ, 0, EJ, VJ, null);
              UJ && QJ.generateMipmap(eJ), this._bindTextureDirectly(eJ, null), GJ.baseWidth = KJ, GJ.baseHeight = yJ, GJ.width = KJ, GJ.height = yJ, GJ.isReady = !0, GJ.samples = 1, GJ.generateMipMaps = UJ, GJ.samplingMode = JJ, GJ.type = cJ, GJ._useSRGBBuffer = ZJ, GJ.format = FJ, GJ.label = rJ[wJ] ?? mJ.label + "-Texture" + wJ, this._internalTexturesCache.push(GJ)
            }
            if (AJ && this._caps.depthTextureExtension && !vJ) {
              const JJ = new Sc.e(this, 14);
              let cJ = 5,
                FJ = QJ.DEPTH_COMPONENT16,
                eJ = QJ.DEPTH_COMPONENT,
                XJ = QJ.UNSIGNED_SHORT,
                AJ = QJ.DEPTH_ATTACHMENT;
              this.nG < 2 ? FJ = QJ.DEPTH_COMPONENT : 14 === ZJ ? (cJ = 1, XJ = QJ.FLOAT, FJ = QJ.DEPTH_COMPONENT32F) : 18 === ZJ ? (cJ = 0, XJ = QJ.FLOAT_32_UNSIGNED_INT_24_8_REV, FJ = QJ.DEPTH32F_STENCIL8, eJ = QJ.DEPTH_STENCIL, AJ = QJ.DEPTH_STENCIL_ATTACHMENT) : 16 === ZJ ? (cJ = 0, XJ = QJ.UNSIGNED_INT, FJ = QJ.DEPTH_COMPONENT24, AJ = QJ.DEPTH_ATTACHMENT) : 13 !== ZJ && 17 !== ZJ || (cJ = 12, XJ = QJ.UNSIGNED_INT_24_8, FJ = QJ.DEPTH24_STENCIL8, eJ = QJ.DEPTH_STENCIL, AJ = QJ.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(QJ.TEXTURE_2D, JJ, !0), QJ.texParameteri(QJ.TEXTURE_2D, QJ.TEXTURE_MAG_FILTER, QJ.NEAREST), QJ.texParameteri(QJ.TEXTURE_2D, QJ.TEXTURE_MIN_FILTER, QJ.NEAREST), QJ.texParameteri(QJ.TEXTURE_2D, QJ.TEXTURE_WRAP_S, QJ.CLAMP_TO_EDGE), QJ.texParameteri(QJ.TEXTURE_2D, QJ.TEXTURE_WRAP_T, QJ.CLAMP_TO_EDGE), QJ.texImage2D(QJ.TEXTURE_2D, 0, FJ, KJ, yJ, 0, eJ, XJ, null), QJ.framebufferTexture2D(QJ.FRAMEBUFFER, AJ, QJ.TEXTURE_2D, JJ._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(QJ.TEXTURE_2D, null), mJ._depthStencilTexture = JJ, mJ._depthStencilTextureWithStencil = bJ, JJ.baseWidth = KJ, JJ.baseHeight = yJ, JJ.width = KJ, JJ.height = yJ, JJ.isReady = !0, JJ.samples = 1, JJ.generateMipMaps = UJ, JJ.samplingMode = 1, JJ.format = ZJ, JJ.type = cJ, JJ.label = mJ.label + "-DepthStencil", SJ[qJ] = JJ, this._internalTexturesCache.push(JJ)
            }
            if (mJ.setTextures(SJ), FJ && QJ.drawBuffers(MJ), this._bindUnboundFramebuffer(EJ), mJ.setLayerAndFaceIndices(fJ, GJ), this.resetTextureCache(), vJ) {
              if (jJ > 1) {
                const JJ = QJ.createFramebuffer();
                if (!JJ) throw new Error("Unable to create multi sampled framebuffer");
                mJ._samples = jJ, mJ._MSAAFramebuffer = JJ, qJ > 0 && FJ && (this._bindUnboundFramebuffer(JJ), QJ.drawBuffers(MJ), this._bindUnboundFramebuffer(EJ))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(mJ, jJ, FJ);
            return mJ
          }, Ic.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(JJ, cJ) {
            let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.nG < 2 || !JJ) return 1;
            if (JJ.samples === cJ) return cJ;
            const FJ = this._gl;
            cJ = Math.min(cJ, this.getCaps().maxMSAASamples), JJ._depthStencilBuffer && (FJ.deleteRenderbuffer(JJ._depthStencilBuffer), JJ._depthStencilBuffer = null), JJ._MSAAFramebuffer && (FJ.deleteFramebuffer(JJ._MSAAFramebuffer), JJ._MSAAFramebuffer = null);
            const UJ = JJ._attachments.length;
            for (let XJ = 0; XJ < UJ; XJ++) {
              const cJ = JJ.textures[XJ]._hardwareTexture;
              cJ?.releaseMSAARenderBuffers()
            }
            if (cJ > 1 && "function" === typeof FJ.renderbufferStorageMultisample) {
              const eJ = FJ.createFramebuffer();
              if (!eJ) throw new Error("Unable to create multi sampled framebuffer");
              JJ._MSAAFramebuffer = eJ, this._bindUnboundFramebuffer(eJ);
              const XJ = [];
              for (let ZJ = 0; ZJ < UJ; ZJ++) {
                const UJ = JJ.textures[ZJ],
                  eJ = UJ._hardwareTexture,
                  AJ = FJ[this.nG > 1 ? "COLOR_ATTACHMENT" + ZJ : "COLOR_ATTACHMENT" + ZJ + "_WEBGL"],
                  qJ = this._createRenderBuffer(UJ.width, UJ.height, cJ, -1, this._getRGBABufferInternalSizedFormat(UJ.type, UJ.format, UJ._useSRGBBuffer), AJ);
                if (!qJ) throw new Error("Unable to create multi sampled framebuffer");
                eJ.addMSAARenderBuffer(qJ), UJ.samples = cJ, XJ.push(AJ)
              }
              ZJ && FJ.drawBuffers(XJ)
            } else this._bindUnboundFramebuffer(JJ._framebuffer);
            const eJ = JJ._depthStencilTexture ? JJ._depthStencilTexture.format : void 0;
            return JJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(JJ._generateStencilBuffer, JJ._generateDepthBuffer, JJ.width, JJ.height, cJ, eJ), this._bindUnboundFramebuffer(null), JJ._samples = cJ, cJ
          }, Ic.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(JJ) {
            const cJ = JJ,
              ZJ = this._gl;
            if (cJ.isMulti)
              for (let FJ = 0; FJ < cJ._attachments.length; FJ++) {
                const JJ = cJ.textures[FJ];
                !JJ?.generateMipMaps || JJ?.isCube || JJ?.is3D || (this._bindTextureDirectly(ZJ.TEXTURE_2D, JJ, !0), ZJ.generateMipmap(ZJ.TEXTURE_2D), this._bindTextureDirectly(ZJ.TEXTURE_2D, null))
              }
          }, Ic.ThinEngine.prototype.resolveMultiFramebuffer = function(JJ) {
            const cJ = JJ,
              ZJ = this._gl;
            if (!cJ._MSAAFramebuffer || !cJ.isMulti) return;
            let FJ = cJ.resolveMSAAColors ? ZJ.COLOR_BUFFER_BIT : 0;
            FJ |= cJ._generateDepthBuffer && cJ.resolveMSAADepth ? ZJ.DEPTH_BUFFER_BIT : 0, FJ |= cJ._generateStencilBuffer && cJ.resolveMSAAStencil ? ZJ.STENCIL_BUFFER_BIT : 0;
            const UJ = cJ._attachments,
              eJ = UJ.length;
            ZJ.bindFramebuffer(ZJ.READ_FRAMEBUFFER, cJ._MSAAFramebuffer), ZJ.bindFramebuffer(ZJ.DRAW_FRAMEBUFFER, cJ._framebuffer);
            for (let XJ = 0; XJ < eJ; XJ++) {
              const JJ = cJ.textures[XJ];
              for (let cJ = 0; cJ < eJ; cJ++) UJ[cJ] = ZJ.NONE;
              UJ[XJ] = ZJ[this.nG > 1 ? "COLOR_ATTACHMENT" + XJ : "COLOR_ATTACHMENT" + XJ + "_WEBGL"], ZJ.readBuffer(UJ[XJ]), ZJ.drawBuffers(UJ), ZJ.blitFramebuffer(0, 0, JJ.width, JJ.height, 0, 0, JJ.width, JJ.height, FJ, ZJ.NEAREST)
            }
            for (let XJ = 0; XJ < eJ; XJ++) UJ[XJ] = ZJ[this.nG > 1 ? "COLOR_ATTACHMENT" + XJ : "COLOR_ATTACHMENT" + XJ + "_WEBGL"];
            ZJ.drawBuffers(UJ), ZJ.bindFramebuffer(this._gl.FRAMEBUFFER, cJ._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = eJ;
        const hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [];
        this._initTypes(ZJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, UJ);
        const vJ = !UJ || void 0 === UJ.generateDepthBuffer || UJ.generateDepthBuffer,
          mJ = !(!UJ || void 0 === UJ.generateStencilBuffer) && UJ.generateStencilBuffer,
          QJ = UJ && UJ.samples ? UJ.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: DJ,
          generateMipMaps: XJ,
          generateDepthBuffer: vJ,
          generateStencilBuffer: mJ,
          generateDepthTexture: AJ,
          depthTextureFormat: qJ,
          types: hJ,
          EXJ: ZJ,
          useSRGBBuffers: sJ,
          samples: QJ,
          formats: nJ,
          targetTypes: GJ,
          faceIndex: fJ,
          layerIndex: xJ,
          layerCounts: rJ,
          labels: eJ,
          label: JJ
        }, this._count = ZJ, this._drawOnlyOnFirstAttachmentByDefault = YJ, ZJ > 0 && (this._createInternalTextures(), this._createTextures(eJ))
      }
      _initTypes(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        for (let YJ = 0; YJ < JJ; YJ++) jJ && jJ.types && void 0 !== jJ.types[YJ] ? cJ.push(jJ.types[YJ]) : cJ.push(jJ && jJ.defaultType ? jJ.defaultType : 0), jJ && jJ.samplingModes && void 0 !== jJ.samplingModes[YJ] ? ZJ.push(jJ.samplingModes[YJ]) : ZJ.push(bJ.i.BILINEAR_SAMPLINGMODE), jJ && jJ.useSRGBBuffers && void 0 !== jJ.useSRGBBuffers[YJ] ? FJ.push(jJ.useSRGBBuffers[YJ]) : FJ.push(!1), jJ && jJ.formats && void 0 !== jJ.formats[YJ] ? UJ.push(jJ.formats[YJ]) : UJ.push(5), jJ && jJ.targetTypes && void 0 !== jJ.targetTypes[YJ] ? eJ.push(jJ.targetTypes[YJ]) : eJ.push(3553), jJ && jJ.faceIndex && void 0 !== jJ.faceIndex[YJ] ? XJ.push(jJ.faceIndex[YJ]) : XJ.push(0), jJ && jJ.layerIndex && void 0 !== jJ.layerIndex[YJ] ? AJ.push(jJ.layerIndex[YJ]) : AJ.push(0), jJ && jJ.layerCounts && void 0 !== jJ.layerCounts[YJ] ? qJ.push(jJ.layerCounts[YJ]) : qJ.push(1)
      }
      _createInternaTextureIndexMapping() {
        const JJ = {},
          cJ = [];
        if (!this._renderTarget) return cJ;
        const ZJ = this._renderTarget.textures;
        for (let FJ = 0; FJ < ZJ.length; FJ++) {
          const UJ = ZJ[FJ];
          if (!UJ) continue;
          const eJ = JJ[UJ.uniqueId];
          void 0 !== eJ ? cJ[FJ] = eJ : JJ[UJ.uniqueId] = FJ
        }
        return cJ
      }
      _rebuild() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || JJ) return;
        const FJ = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), cJ && (this._releaseTextures(), this._createTextures(ZJ));
        const UJ = this._renderTarget.textures;
        for (let eJ = 0; eJ < UJ.length; eJ++) {
          const JJ = this._textures[eJ];
          void 0 !== FJ[eJ] && this._renderTarget.setTexture(UJ[FJ[eJ]], eJ), JJ._texture = UJ[eJ], JJ._texture && (JJ._noMipmap = !JJ._texture.useMipMaps, JJ._useSRGBBuffer = JJ._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let JJ = 0; JJ < this._textures.length; JJ++) this._textures[JJ]._texture = null, this._textures[JJ].dispose()
      }
      _createTextures(JJ) {
        const cJ = this._renderTarget.textures;
        this._textures = [];
        for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
          const FJ = new bJ.i(null, this.Qy());
          JJ?.[ZJ] && (FJ.name = JJ[ZJ]), FJ._texture = cJ[ZJ], FJ._texture && (FJ._noMipmap = !FJ._texture.useMipMaps, FJ._useSRGBBuffer = FJ._texture._useSRGBBuffer), this._textures.push(FJ)
        }
      }
      setInternalTexture(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === cJ && (this._texture = JJ), this.renderTarget.setTexture(JJ, cJ, ZJ), this.textures[cJ] || (this.textures[cJ] = new bJ.i(null, this.Qy()), this.textures[cJ].name = this._textureNames?.[cJ] ?? this.textures[cJ].name), this.textures[cJ]._texture = JJ, this.textures[cJ]._noMipmap = !JJ.useMipMaps, this.textures[cJ]._useSRGBBuffer = JJ._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[cJ] = JJ.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[cJ] = JJ.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[cJ] = JJ._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[cJ])) {
          let ZJ;
          ZJ = JJ.is2DArray ? 35866 : JJ.isCube ? 34067 : JJ.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[cJ] = ZJ
        }
      }
      setLayerAndFaceIndex(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[JJ] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[JJ] = cJ), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[JJ] = ZJ), this.renderTarget.setLayerAndFaceIndex(JJ, cJ, ZJ))
      }
      setLayerAndFaceIndices(JJ, cJ) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = JJ, this._multiRenderTargetOptions.faceIndex = cJ, this.renderTarget.setLayerAndFaceIndices(JJ, cJ))
      }
      get samples() {
        return this._samples
      }
      set samples(JJ) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(JJ) : this._samples = JJ
      }
      resize(JJ) {
        this._processSizeParameter(JJ), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(JJ, cJ, ZJ) {
        this._multiRenderTargetOptions.EXJ = JJ, this._count = JJ;
        const FJ = [],
          UJ = [],
          eJ = [],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [];
        this._textureNames = ZJ, this._initTypes(JJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, cJ), this._multiRenderTargetOptions.types = FJ, this._multiRenderTargetOptions.samplingModes = UJ, this._multiRenderTargetOptions.useSRGBBuffers = eJ, this._multiRenderTargetOptions.formats = XJ, this._multiRenderTargetOptions.targetTypes = AJ, this._multiRenderTargetOptions.faceIndex = qJ, this._multiRenderTargetOptions.layerIndex = jJ, this._multiRenderTargetOptions.layerCounts = YJ, this._multiRenderTargetOptions.labels = ZJ, this._rebuild(!1, !0, ZJ)
      }
      _unbindFrameBuffer(JJ, cJ) {
        this._renderTarget && JJ.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(cJ)
        }))
      }
      dispose() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), JJ ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const JJ = this._renderTarget?.textures;
        if (JJ) {
          for (let cJ = JJ.length - 1; cJ >= 0; cJ--) this._textures[cJ]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Hc = ZJ(38933);
    class Pc {
      constructor(JJ) {
        this.name = Hc.c.NAME_GEOMETRYBUFFERRENDERER, this.iG = JJ
      }
      register() {
        this.iG._gatherRenderTargetsStage.registerStep(Hc.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(JJ) {
        this.iG._geometryBufferRenderer && JJ.push(this.iG._geometryBufferRenderer.getGBuffer())
      }
    }
    let kc = !1;
    var pc;
    ! function(JJ) {
      JJ[JJ.Small = 0] = "Small", JJ[JJ.Medium = 1] = "Medium", JJ[JJ.Large = 2] = "Large", JJ[JJ.ExtraLarge = 3] = "ExtraLarge"
    }(pc || (pc = {}));
    const dc = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      zc = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Nc {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(JJ) {
        if (JJ && this._enableMeshBlendTag && !this._scene.gn().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = JJ
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(JJ) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = JJ, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(JJ, cJ) {
        JJ === Nc.POSITION_TEXTURE_TYPE ? (this._positionIndex = cJ, this._enablePosition = !0) : JJ === Nc.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = cJ, this._enableVelocity = !0) : JJ === Nc.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = cJ, this._enableVelocityLinear = !0) : JJ === Nc.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = cJ, this._enableReflectivity = !0) : JJ === Nc.DEPTH_TEXTURE_TYPE ? (this._depthIndex = cJ, this._enableDepth = !0) : JJ === Nc.NORMAL_TEXTURE_TYPE ? (this._normalIndex = cJ, this._enableNormal = !0) : JJ === Nc.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = cJ, this._enableScreenspaceDepth = !0) : JJ === Nc.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = cJ, this._enableIrradiance = !0) : JJ === Nc.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = cJ, this._enableObjectId = !0) : JJ === Nc.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = cJ, this._enableMeshBlendTag = !0)
      }
      _setAttachments(JJ) {
        this._attachmentsFromPrePass = JJ
      }
      _linkInternalTexture(JJ) {
        this._multiRenderTarget.setInternalTexture(JJ, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(JJ) {
        this._multiRenderTarget.renderList = JJ
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(JJ) {
        switch (JJ) {
          case Nc.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Nc.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Nc.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Nc.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Nc.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Nc.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Nc.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Nc.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Nc.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Nc.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(JJ) {
        this._enableDepth = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(JJ) {
        this._enableNormal = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(JJ) {
        this._enablePosition = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(JJ) {
        this._enableVelocity = JJ, JJ || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = JJ
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(JJ) {
        this._enableVelocityLinear = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(JJ) {
        this._enableReflectivity = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(JJ) {
        this._enableScreenspaceDepth = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(JJ) {
        this._enableIrradiance = JJ, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(JJ) {
        if (JJ && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (JJ && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (JJ && !this._enableObjectId && !this._linkedWithPrePass) {
          const JJ = this._scene.gn(),
            cJ = Math.min(JJ.getCaps().maxDrawBuffers ?? 1, 8),
            ZJ = this._assignRenderTargetIndices()[0] + 1;
          if (JJ.getCaps().drawBuffersExtension && ZJ > cJ) throw new Error(`GeometryBufferRenderer: ${ZJ} color attachments were requested, but this engine supports at most ${cJ}`)
        }
        this._enableObjectId = JJ, JJ || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(JJ) {
        if (this._enableMeshBlendTag !== JJ) {
          if (JJ) {
            const JJ = this._scene.gn();
            if (! function(JJ) {
                return "NATIVE" !== JJ.shaderPlatformName && (JJ.isWebGPU || 2 === JJ.nG)
              }(JJ)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !JJ.isWebGPU && !JJ.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const cJ = Math.min(JJ.getCaps().maxDrawBuffers ?? 1, 8),
                ZJ = this._assignRenderTargetIndices()[0] + 1;
              if (JJ.getCaps().drawBuffersExtension && ZJ > cJ) throw new Error(`GeometryBufferRenderer: ${ZJ} color attachments were requested, but this engine supports at most ${cJ}`)
            }
          }
          this._enableMeshBlendTag = JJ, JJ || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get iG() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        var UJ;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new iJ.f(0, 0, 0, 0), this._clearDepthColor = new iJ.f(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = JJ, this._ratioOrDimensions = cJ, this._useUbo = JJ.gn().supportsUniformBuffers, this._depthFormat = ZJ, this._textureTypesAndFormats = FJ || {}, this._initShaderSourceAsync(), UJ = Nc, kc || (kc = !0, Object.defineProperty(pJ.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(JJ) {
            JJ && JJ.isSupported && (this._geometryBufferRenderer = JJ)
          },
          enumerable: !0,
          configurable: !0
        }), pJ.e.prototype.enableGeometryBufferRenderer = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new UJ(this, JJ, cJ, ZJ), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, pJ.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, UJ._SceneComponentInitialization = JJ => {
          let cJ = JJ._getComponent(Hc.c.NAME_GEOMETRYBUFFERRENDERER);
          cJ || (cJ = new Pc(JJ), JJ.pZJ(cJ))
        }), Nc._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.gn().isWebGPU && !Nc.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZJ.e(317).then((() => ZJ(60089))), Promise.all([ZJ.e(316), ZJ.e(328)]).then((() => ZJ(60096)))])) : await Promise.all([ZJ.e(300).then((() => ZJ(60098))), ZJ.e(299).then((() => ZJ(60101)))]), this._shadersLoaded = !0
      }
      isReady(JJ, cJ) {
        if (!this._shadersLoaded) return !1;
        const ZJ = JJ.dn();
        if (ZJ && ZJ.disableDepthWrite) return !1;
        if (function(JJ) {
            return JJ._isGaussianSplatting || "GaussianSplattingMesh" === (cJ = JJ.getClassName()) || "GaussianSplattingStream" === cJ;
            var cJ
          }(JJ.getMesh())) return !1;
        const FJ = [],
          UJ = [zJ.n.PositionKind],
          eJ = JJ.getMesh();
        eJ.isVerticesDataPresent(zJ.n.NormalKind) && (FJ.push("#define HAS_NORMAL_ATTRIBUTE"), UJ.push(zJ.n.NormalKind));
        let XJ = !1,
          AJ = !1;
        if (ZJ) {
          let JJ = !1;
          if (ZJ.needAlphaTestingForMesh(eJ) && ZJ.getAlphaTestTexture() && (FJ.push("#define ALPHATEST"), FJ.push(`#define ALPHATEST_UV${ZJ.getAlphaTestTexture().coordinatesIndex+1}`), JJ = !0), (ZJ.bumpTexture || ZJ.normalTexture || ZJ.geometryNormalTexture) && BJ.d.BumpTextureEnabled) {
            const cJ = ZJ.bumpTexture || ZJ.normalTexture || ZJ.geometryNormalTexture;
            FJ.push("#define BUMP"), FJ.push(`#define BUMP_UV${cJ.coordinatesIndex+1}`), JJ = !0
          }
          if (this._enableReflectivity) {
            let cJ = !1;
            if ("PBRMetallicRoughnessMaterial" === ZJ.getClassName()) ZJ.metallicRoughnessTexture && (FJ.push("#define ORMTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${ZJ.metallicRoughnessTexture.coordinatesIndex+1}`), FJ.push("#define METALLICWORKFLOW"), JJ = !0, cJ = !0), null != ZJ.metallic && (FJ.push("#define METALLIC"), FJ.push("#define METALLICWORKFLOW"), cJ = !0), null != ZJ.roughness && (FJ.push("#define ROUGHNESS"), FJ.push("#define METALLICWORKFLOW"), cJ = !0), cJ && (ZJ.baseTexture && (FJ.push("#define ALBEDOTEXTURE"), FJ.push(`#define ALBEDO_UV${ZJ.baseTexture.coordinatesIndex+1}`), ZJ.baseTexture.gammaSpace && FJ.push("#define GAMMAALBEDO"), JJ = !0), ZJ.baseColor && FJ.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ZJ.getClassName()) ZJ.specularGlossinessTexture ? (FJ.push("#define SPECULARGLOSSINESSTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${ZJ.specularGlossinessTexture.coordinatesIndex+1}`), JJ = !0, ZJ.specularGlossinessTexture.gammaSpace && FJ.push("#define GAMMAREFLECTIVITYTEXTURE")) : ZJ.specularColor && FJ.push("#define REFLECTIVITYCOLOR"), null != ZJ.glossiness && FJ.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ZJ.getClassName()) ZJ.metallicTexture && (FJ.push("#define ORMTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${ZJ.metallicTexture.coordinatesIndex+1}`), FJ.push("#define METALLICWORKFLOW"), JJ = !0, cJ = !0), null != ZJ.metallic && (FJ.push("#define METALLIC"), FJ.push("#define METALLICWORKFLOW"), cJ = !0), null != ZJ.roughness && (FJ.push("#define ROUGHNESS"), FJ.push("#define METALLICWORKFLOW"), cJ = !0), cJ ? (ZJ.albedoTexture && (FJ.push("#define ALBEDOTEXTURE"), FJ.push(`#define ALBEDO_UV${ZJ.albedoTexture.coordinatesIndex+1}`), ZJ.albedoTexture.gammaSpace && FJ.push("#define GAMMAALBEDO"), JJ = !0), ZJ.albedoColor && FJ.push("#define ALBEDOCOLOR")) : (ZJ.reflectivityTexture ? (FJ.push("#define SPECULARGLOSSINESSTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${ZJ.reflectivityTexture.coordinatesIndex+1}`), ZJ.reflectivityTexture.gammaSpace && FJ.push("#define GAMMAREFLECTIVITYTEXTURE"), JJ = !0) : ZJ.reflectivityColor && FJ.push("#define REFLECTIVITYCOLOR"), null != ZJ.microSurface && FJ.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ZJ.getClassName()) ZJ.specularTexture && (FJ.push("#define REFLECTIVITYTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${ZJ.specularTexture.coordinatesIndex+1}`), ZJ.specularTexture.gammaSpace && FJ.push("#define GAMMAREFLECTIVITYTEXTURE"), JJ = !0), ZJ.specularColor && FJ.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ZJ.getClassName()) {
              const cJ = ZJ;
              FJ.push("#define METALLIC"), FJ.push("#define ROUGHNESS"), cJ._useRoughnessFromMetallicTextureGreen && cJ.baseMetalnessTexture ? (FJ.push("#define ORMTEXTURE"), FJ.push(`#define REFLECTIVITY_UV${cJ.baseMetalnessTexture.coordinatesIndex+1}`), JJ = !0) : cJ.baseMetalnessTexture ? (FJ.push("#define METALLIC_TEXTURE"), FJ.push(`#define METALLIC_UV${cJ.baseMetalnessTexture.coordinatesIndex+1}`), JJ = !0) : cJ.specularRoughnessTexture && (FJ.push("#define ROUGHNESS_TEXTURE"), FJ.push(`#define ROUGHNESS_UV${cJ.specularRoughnessTexture.coordinatesIndex+1}`), JJ = !0), cJ.baseColorTexture && (FJ.push("#define ALBEDOTEXTURE"), FJ.push(`#define ALBEDO_UV${cJ.baseColorTexture.coordinatesIndex+1}`), cJ.baseColorTexture.gammaSpace && FJ.push("#define GAMMAALBEDO"), JJ = !0), cJ.baseColor && FJ.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (FJ.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ZJ.getClassName())) {
            const cJ = ZJ;
            cJ.subsurfaceWeight > 0 && cJ.subsurfaceWeightTexture && (FJ.push("#define SUBSURFACE_WEIGHT"), FJ.push(`#define SUBSURFACEWEIGHT_UV${cJ.subsurfaceWeightTexture.coordinatesIndex+1}`), JJ = !0), cJ.transmissionWeight > 0 && cJ.transmissionWeightTexture && (FJ.push("#define TRANSMISSION_WEIGHT"), FJ.push(`#define TRANSMISSIONWEIGHT_UV${cJ.transmissionWeightTexture.coordinatesIndex+1}`), JJ = !0)
          }
          JJ && (FJ.push("#define NEED_UV"), eJ.isVerticesDataPresent(zJ.n.UVKind) && (UJ.push(zJ.n.UVKind), FJ.push("#define UV1"), XJ = !0), eJ.isVerticesDataPresent(zJ.n.UV2Kind) && (UJ.push(zJ.n.UV2Kind), FJ.push("#define UV2"), AJ = !0))
        }
        if (this._enableDepth && (FJ.push("#define DEPTH"), FJ.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (FJ.push("#define NORMAL"), FJ.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (FJ.push("#define POSITION"), FJ.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (FJ.push("#define VELOCITY"), FJ.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(eJ) && FJ.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (FJ.push("#define VELOCITY_LINEAR"), FJ.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(eJ) && FJ.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (FJ.push("#define REFLECTIVITY"), FJ.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (FJ.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), FJ.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          FJ.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), FJ.push("#define IRRADIANCE");
          const JJ = this._scene;
          if (JJ.environmentTexture) {
            const cJ = {};
            let UJ = !1,
              eJ = 0;
            "OpenPBRMaterial" !== ZJ.getClassName() && "StandardMaterial" !== ZJ.getClassName() && "PBRMetallicRoughnessMaterial" !== ZJ.getClassName() && "PBRSpecularGlossinessMaterial" !== ZJ.getClassName() && "PBRMaterial" !== ZJ.getClassName() || (UJ = !!ZJ.realtimeFiltering, eJ = ZJ.realtimeFilteringQuality || 0), (0, oJ.T)(JJ, JJ.environmentTexture, cJ, UJ, eJ, !0);
            for (const JJ in cJ) cJ[JJ] && FJ.push("#define " + JJ);
            cJ.USEIRRADIANCEMAP || FJ.push("#define SPHERICAL_HARMONICS");
            const XJ = JJ.postProcessRenderPipelineManager.supportedPipelines.find((JJ => "IBLShadowsRenderPipeline" === JJ.getClassName()));
            if (XJ) {
              const JJ = XJ;
              JJ._getAccumulatedTexture() && (FJ.push("#define IBL_SHADOW_TEXTURE"), JJ.coloredShadows && FJ.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (FJ.push("#define OBJECT_ID"), FJ.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (FJ.push("#define MESH_BLEND_TAG"), FJ.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && FJ.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && FJ.push("#define ENCODE_NORMAL"), eJ.useBones && eJ.computeBonesUsingShaders && eJ.skeleton ? (UJ.push(zJ.n.MatricesIndicesKind), UJ.push(zJ.n.MatricesWeightsKind), eJ.numBoneInfluencers > 4 && (UJ.push(zJ.n.MatricesIndicesExtraKind), UJ.push(zJ.n.MatricesWeightsExtraKind)), FJ.push("#define NUM_BONE_INFLUENCERS " + eJ.numBoneInfluencers), FJ.push("#define BONETEXTURE " + eJ.skeleton.isUsingTextureForMatrices), FJ.push("#define BonesPerMesh " + (eJ.skeleton.bones.length + 1))) : (FJ.push("#define NUM_BONE_INFLUENCERS 0"), FJ.push("#define BONETEXTURE false"), FJ.push("#define BonesPerMesh 0"));
        const qJ = eJ.morphTargetManager ? (0, oJ.I)(eJ.morphTargetManager, FJ, UJ, eJ, !0, !0, !1, XJ, AJ, !1) : 0;
        cJ && (FJ.push("#define INSTANCES"), (0, oJ.pb)(UJ, this._enableVelocity || this._enableVelocityLinear), JJ.getRenderingMesh().hasThinInstances && FJ.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? FJ.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : FJ.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Yc.l)(ZJ, this._scene, FJ);
        const jJ = this._scene.gn(),
          YJ = JJ._getDrawWrapper(void 0, !0),
          hJ = YJ.defines,
          DJ = FJ.join("\n");
        return hJ !== DJ && YJ.setEffect(jJ.createEffect("geometry", {
          attributes: UJ,
          uniformsNames: zc,
          samplers: dc,
          defines: DJ,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: qJ
          },
          shaderLanguage: this.shaderLanguage
        }, jJ), DJ), YJ.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(JJ) {
        if (this._enableObjectId && 1 !== JJ) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== JJ) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = JJ
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.gn().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.iG.gn()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.iG.gn().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const JJ = [],
          cJ = [];
        let ZJ = 0;
        return this._enableDepth && (this._depthIndex = ZJ, ZJ++, JJ.push("gBuffer_Depth"), cJ.push(this._textureTypesAndFormats[Nc.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ZJ, ZJ++, JJ.push("gBuffer_Normal"), cJ.push(this._textureTypesAndFormats[Nc.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ZJ, ZJ++, JJ.push("gBuffer_Position"), cJ.push(this._textureTypesAndFormats[Nc.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ZJ, ZJ++, JJ.push("gBuffer_Velocity"), cJ.push(this._textureTypesAndFormats[Nc.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ZJ, ZJ++, JJ.push("gBuffer_VelocityLinear"), cJ.push(this._textureTypesAndFormats[Nc.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ZJ, ZJ++, JJ.push("gBuffer_Reflectivity"), cJ.push(this._textureTypesAndFormats[Nc.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ZJ, ZJ++, JJ.push("gBuffer_ScreenspaceDepth"), cJ.push(this._textureTypesAndFormats[Nc.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ZJ, ZJ++, JJ.push("gBuffer_Irradiance"), cJ.push(this._textureTypesAndFormats[Nc.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ZJ, ZJ++, JJ.push("gBuffer_ObjectId"), cJ.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ZJ, ZJ++, JJ.push("gBuffer_MeshBlendTag"), cJ.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ZJ, JJ, cJ]
      }
      _createRenderTargets() {
        const JJ = this._scene.gn(),
          [cJ, ZJ, FJ] = this._assignRenderTargetIndices(),
          UJ = Math.min(JJ.getCaps().maxDrawBuffers ?? 1, 8);
        if (JJ.getCaps().drawBuffersExtension && cJ > UJ) throw new Error(`GeometryBufferRenderer: ${cJ} color attachments were requested, but this engine supports at most ${UJ}`);
        let XJ = 0;
        JJ._caps.textureFloat && JJ._caps.textureFloatLinearFiltering ? XJ = 1 : JJ._caps.textureHalfFloat && JJ._caps.textureHalfFloatLinearFiltering && (XJ = 2);
        const AJ = this._getRenderTargetDimensions(),
          qJ = [],
          jJ = [],
          YJ = [];
        for (const eJ of FJ) eJ ? (qJ.push(eJ.textureType), jJ.push(eJ.textureFormat), YJ.push(eJ.samplingMode ?? 2)) : (qJ.push(XJ), jJ.push(5), YJ.push(2));
        if (this._normalsAreUnsigned = 11 === qJ[Nc.NORMAL_TEXTURE_TYPE] || 13 === qJ[Nc.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new gc("gBuffer", AJ, cJ, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: qJ,
            formats: jJ,
            samplingModes: YJ,
            depthTextureFormat: this._depthFormat
          }, ZJ.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = bJ.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = bJ.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const hJ = [!0],
          DJ = [!1],
          sJ = [!0];
        for (let eJ = 1; eJ < cJ; ++eJ) hJ.push(!0), sJ.push(!1), DJ.push(!0);
        const nJ = JJ.buildTextureLayout(hJ),
          GJ = JJ.buildTextureLayout(DJ),
          fJ = JJ.buildTextureLayout(sJ);
        this._multiRenderTarget.onClearObservable.add((JJ => {
          const cJ = this.useSpecificClearForDepthTexture ? GJ : nJ;
          JJ.clearAttachments(this._clearColor, cJ, !0, !0, !0), this.useSpecificClearForDepthTexture && JJ.clearAttachments(this._clearDepthColor, fJ, !0, !1, !1), JJ.bindAttachments(nJ)
        })), this._resizeObserver = JJ.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const xJ = JJ => {
          const cJ = JJ.getRenderingMesh(),
            ZJ = JJ.getEffectiveMesh(),
            FJ = this._scene,
            UJ = FJ.gn(),
            XJ = JJ.dn();
          if (!XJ) return;
          if (ZJ._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ZJ.uniqueId] && (this._previousTransformationMatrices[ZJ.uniqueId] = {
              zh: dJ.b.Identity(),
              viewProjection: FJ.getTransformMatrix()
            }, cJ.skeleton)) {
            const JJ = cJ.skeleton.getTransformMatrices(cJ);
            this._previousBonesTransformationMatrices[cJ.uniqueId] = this._copyBonesTransformationMatrices(JJ, new Float32Array(JJ.length))
          }
          const AJ = cJ._getInstancesRenderList(JJ._id, !!JJ.getReplacementMesh());
          if (AJ.mustReturn) return;
          const qJ = UJ.getCaps().instancedArrays && (null !== AJ.visibleInstances[JJ._id] || cJ.hasThinInstances),
            jJ = ZJ.getWorldMatrix();
          if (this.isReady(JJ, qJ)) {
            const YJ = JJ._getDrawWrapper();
            if (!YJ) return;
            const hJ = YJ.effect;
            let DJ;
            UJ.enableEffect(YJ), qJ || cJ._bind(JJ, hJ, XJ.fillMode), this._useUbo ? ((0, oJ.o)(hJ, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (hJ.setMatrix("viewProjection", FJ.getTransformMatrix()), hJ.setMatrix("view", FJ.getViewMatrix()), this._scene.bindEyePosition(hJ, "vEyePosition"));
            if (cJ._instanceDataStorage.isFrozen || !XJ.backFaceCulling && null === XJ.sideOrientation) DJ = cJ._effectiveSideOrientation;
            else {
              const JJ = ZJ._getWorldMatrixDeterminant();
              DJ = XJ._getEffectiveOrientation(cJ), JJ < 0 && (DJ = DJ === eJ.c.ClockWiseSideOrientation ? eJ.c.CounterClockWiseSideOrientation : eJ.c.ClockWiseSideOrientation)
            }
            if (XJ._preBind(YJ, DJ), XJ.needAlphaTestingForMesh(ZJ)) {
              const JJ = XJ.getAlphaTestTexture();
              JJ && (hJ.setTexture("diffuseSampler", JJ), hJ.setMatrix("diffuseMatrix", JJ.getTextureMatrix()), hJ.setFloat("alphaCutOff", XJ.alphaCutOff ?? .4))
            }
            if ((XJ.bumpTexture || XJ.normalTexture || XJ.geometryNormalTexture) && FJ.gn().getCaps().standardDerivatives && BJ.d.BumpTextureEnabled) {
              const JJ = XJ.bumpTexture || XJ.normalTexture || XJ.geometryNormalTexture;
              hJ.setFloat3("vBumpInfos", JJ.coordinatesIndex, 1 / JJ.level, XJ.parallaxScaleBias), hJ.setMatrix("bumpMatrix", JJ.getTextureMatrix()), hJ.setTexture("bumpSampler", JJ), hJ.setFloat2("vTangentSpaceParams", XJ.invertNormalMapX ? -1 : 1, XJ.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === XJ.getClassName()) null !== XJ.metallicRoughnessTexture && (hJ.setTexture("reflectivitySampler", XJ.metallicRoughnessTexture), hJ.setMatrix("reflectivityMatrix", XJ.metallicRoughnessTexture.getTextureMatrix())), null !== XJ.metallic && hJ.setFloat("metallic", XJ.metallic), null !== XJ.roughness && hJ.setFloat("glossiness", 1 - XJ.roughness), null !== XJ.baseTexture && (hJ.setTexture("albedoSampler", XJ.baseTexture), hJ.setMatrix("albedoMatrix", XJ.baseTexture.getTextureMatrix())), null !== XJ.baseColor && hJ.setColor3("albedoColor", XJ.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === XJ.getClassName()) null !== XJ.specularGlossinessTexture ? (hJ.setTexture("reflectivitySampler", XJ.specularGlossinessTexture), hJ.setMatrix("reflectivityMatrix", XJ.specularGlossinessTexture.getTextureMatrix())) : null !== XJ.specularColor && hJ.setColor3("reflectivityColor", XJ.specularColor), null !== XJ.glossiness && hJ.setFloat("glossiness", XJ.glossiness);
            else if ("PBRMaterial" === XJ.getClassName()) null !== XJ.metallicTexture && (hJ.setTexture("reflectivitySampler", XJ.metallicTexture), hJ.setMatrix("reflectivityMatrix", XJ.metallicTexture.getTextureMatrix())), null !== XJ.metallic && hJ.setFloat("metallic", XJ.metallic), null !== XJ.roughness && hJ.setFloat("glossiness", 1 - XJ.roughness), null !== XJ.roughness || null !== XJ.metallic || null !== XJ.metallicTexture ? (null !== XJ.albedoTexture && (hJ.setTexture("albedoSampler", XJ.albedoTexture), hJ.setMatrix("albedoMatrix", XJ.albedoTexture.getTextureMatrix())), null !== XJ.albedoColor && hJ.setColor3("albedoColor", XJ.albedoColor)) : (null !== XJ.reflectivityTexture ? (hJ.setTexture("reflectivitySampler", XJ.reflectivityTexture), hJ.setMatrix("reflectivityMatrix", XJ.reflectivityTexture.getTextureMatrix())) : null !== XJ.reflectivityColor && hJ.setColor3("reflectivityColor", XJ.reflectivityColor), null !== XJ.microSurface && hJ.setFloat("glossiness", XJ.microSurface));
            else if ("StandardMaterial" === XJ.getClassName()) null !== XJ.specularTexture && (hJ.setTexture("reflectivitySampler", XJ.specularTexture), hJ.setMatrix("reflectivityMatrix", XJ.specularTexture.getTextureMatrix())), null !== XJ.specularColor && hJ.setColor3("reflectivityColor", XJ.specularColor);
            else if ("OpenPBRMaterial" === XJ.getClassName()) {
              const JJ = XJ;
              JJ._useRoughnessFromMetallicTextureGreen && JJ.baseMetalnessTexture ? (hJ.setTexture("reflectivitySampler", JJ.baseMetalnessTexture), hJ.setMatrix("reflectivityMatrix", JJ.baseMetalnessTexture.getTextureMatrix())) : JJ.baseMetalnessTexture ? (hJ.setTexture("metallicSampler", JJ.baseMetalnessTexture), hJ.setMatrix("metallicMatrix", JJ.baseMetalnessTexture.getTextureMatrix())) : JJ.specularRoughnessTexture && (hJ.setTexture("roughnessSampler", JJ.specularRoughnessTexture), hJ.setMatrix("roughnessMatrix", JJ.specularRoughnessTexture.getTextureMatrix())), hJ.setFloat("metallic", JJ.baseMetalness), hJ.setFloat("glossiness", 1 - JJ.specularRoughness), null !== JJ.baseColorTexture && (hJ.setTexture("albedoSampler", JJ.baseColorTexture), hJ.setMatrix("albedoMatrix", JJ.baseColorTexture.getTextureMatrix())), null !== JJ.baseColor && hJ.setColor3("albedoColor", JJ.baseColor)
            }
            if (this._enableIrradiance && FJ.environmentTexture) {
              const JJ = FJ.environmentTexture,
                cJ = FJ.postProcessRenderPipelineManager.supportedPipelines.find((JJ => "IBLShadowsRenderPipeline" === JJ.getClassName()));
              if (cJ) {
                const JJ = cJ._getAccumulatedTexture();
                JJ && (hJ.setTexture("iblShadowSampler", JJ), hJ.setFloat2("shadowTextureSize", JJ.getSize().width, JJ.getSize().height))
              }
              if (hJ.setMatrix("reflectionMatrix", JJ.getReflectionTextureMatrix()), hJ.setFloat2("vReflectionInfos", JJ.level * FJ.iblIntensity, 0), hJ.setTexture("reflectionSampler", JJ), JJ.irradianceTexture && (hJ.setTexture("irradianceSampler", JJ.irradianceTexture), JJ.irradianceTexture._dominantDirection && hJ.setVector3("vReflectionDominantDirection", JJ.irradianceTexture._dominantDirection)), JJ.sphericalPolynomial) {
                const cJ = JJ.sphericalPolynomial;
                if (cJ.preScaledHarmonics) {
                  const JJ = cJ.preScaledHarmonics;
                  hJ.setVector3("vSphericalL00", JJ.l00), hJ.setVector3("vSphericalL1_1", JJ.l1_1), hJ.setVector3("vSphericalL10", JJ.l10), hJ.setVector3("vSphericalL11", JJ.l11), hJ.setVector3("vSphericalL2_2", JJ.l2_2), hJ.setVector3("vSphericalL2_1", JJ.l2_1), hJ.setVector3("vSphericalL20", JJ.l20), hJ.setVector3("vSphericalL21", JJ.l21), hJ.setVector3("vSphericalL22", JJ.l22)
                } else hJ.setFloat3("vSphericalX", cJ.x.x, cJ.x.y, cJ.x.z), hJ.setFloat3("vSphericalY", cJ.y.x, cJ.y.y, cJ.y.z), hJ.setFloat3("vSphericalZ", cJ.z.x, cJ.z.y, cJ.z.z), hJ.setFloat3("vSphericalXX_ZZ", cJ.xx.x - cJ.zz.x, cJ.xx.y - cJ.zz.y, cJ.xx.z - cJ.zz.z), hJ.setFloat3("vSphericalYY_ZZ", cJ.yy.x - cJ.zz.x, cJ.yy.y - cJ.zz.y, cJ.yy.z - cJ.zz.z), hJ.setFloat3("vSphericalZZ", cJ.zz.x, cJ.zz.y, cJ.zz.z), hJ.setFloat3("vSphericalXY", cJ.xy.x, cJ.xy.y, cJ.xy.z), hJ.setFloat3("vSphericalYZ", cJ.yz.x, cJ.yz.y, cJ.yz.z), hJ.setFloat3("vSphericalZX", cJ.zx.x, cJ.zx.y, cJ.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === XJ.getClassName()) {
                const JJ = XJ;
                hJ.setFloat("vSubsurfaceWeight", JJ.subsurfaceWeight), JJ.subsurfaceWeightTexture && (hJ.setTexture("subsurfaceWeightSampler", JJ.subsurfaceWeightTexture), hJ.setMatrix("subsurfaceWeightMatrix", JJ.subsurfaceWeightTexture.getTextureMatrix())), hJ.setFloat("vTransmissionWeight", JJ.transmissionWeight), JJ.transmissionWeightTexture && (hJ.setTexture("transmissionWeightSampler", JJ.transmissionWeightTexture), hJ.setMatrix("transmissionWeightMatrix", JJ.transmissionWeightTexture.getTextureMatrix())), hJ.setFloat("vTransmissionScatterAnisotropy", JJ.transmissionScatterAnisotropy), hJ.setFloat("vSubsurfaceScatterAnisotropy", JJ.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Yc.e)(hJ, XJ, this._scene), cJ.useBones && cJ.computeBonesUsingShaders && cJ.skeleton) {
              const JJ = cJ.skeleton;
              if (JJ.isUsingTextureForMatrices && hJ.getUniformIndex("boneTextureInfo") > -1) {
                const ZJ = JJ.getTransformMatrixTexture(cJ);
                hJ.setTexture("boneSampler", ZJ), hJ.setFloat2("boneTextureInfo", JJ._textureWidth, JJ._textureHeight)
              } else hJ.setMatrices("mBones", cJ.skeleton.getTransformMatrices(cJ));
              (this._enableVelocity || this._enableVelocityLinear) && hJ.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[cJ.uniqueId])
            }
            if ((0, oJ.m)(cJ, hJ), cJ.morphTargetManager && cJ.morphTargetManager.isUsingTextureForTargets && cJ.morphTargetManager._bind(hJ), (this._enableVelocity || this._enableVelocityLinear) && (hJ.setMatrix("previousWorld", this._previousTransformationMatrices[ZJ.uniqueId].zh), hJ.setMatrix("previousViewProjection", this._previousTransformationMatrices[ZJ.uniqueId].viewProjection)), this._enableObjectId) {
              let JJ = cJ.uniqueId;
              if (this.objectIdProvider) JJ = (0, sc.e)(cJ, this.objectIdProvider);
              else if (JJ > 16777215) throw new Error(`Invalid geometry object ID ${JJ} for mesh "${cJ.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              hJ.setFloat("objectId", JJ)
            }
            if (this._enableMeshBlendTag) {
              const JJ = this.meshBlendTagProvider ? (0, sc.d)(cJ, this.meshBlendTagProvider) : cJ.meshBlendingTag;
              hJ.setInt("meshBlendTag", JJ)
            }
            qJ && cJ.hasThinInstances && hJ.setMatrix("world", jJ), cJ._processRendering(ZJ, JJ, hJ, XJ.fillMode, AJ, qJ, ((JJ, cJ) => {
              JJ || hJ.setMatrix("world", cJ)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ZJ.uniqueId].zh = jJ.clone(), this._previousTransformationMatrices[ZJ.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), cJ.skeleton && this._copyBonesTransformationMatrices(cJ.skeleton.getTransformMatrices(cJ), this._previousBonesTransformationMatrices[ZJ.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (cJ, ZJ, FJ) => {
          if ((FJ || 0 === ZJ) && cJ.aE)
            for (let UJ = 0; UJ < cJ.aE.length; ++UJ) {
              const ZJ = cJ.aE[UJ],
                FJ = ZJ.dn(),
                eJ = ZJ.getRenderingMesh();
              if (!FJ) continue;
              const XJ = eJ._getInstancesRenderList(ZJ._id, !!ZJ.getReplacementMesh()),
                AJ = JJ.getCaps().instancedArrays && (null !== XJ.visibleInstances[ZJ._id] || eJ.hasThinInstances);
              if (!this.isReady(ZJ, AJ)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (cJ, ZJ, FJ, UJ) => {
          let eJ;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.gn().bindAttachments(this._attachmentsFromPrePass)
          }
          if (UJ.length) {
            for (JJ.setColorWrite(!1), eJ = 0; eJ < UJ.length; eJ++) xJ(UJ.data[eJ]);
            JJ.setColorWrite(!0)
          }
          for (eJ = 0; eJ < cJ.length; eJ++) xJ(cJ.data[eJ]);
          for (JJ.setDepthWrite(!1), eJ = 0; eJ < ZJ.length; eJ++) xJ(ZJ.data[eJ]);
          if (this.renderTransparentMeshes)
            for (eJ = 0; eJ < FJ.length; eJ++) xJ(FJ.data[eJ]);
          JJ.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const JJ = this._scene.gn();
        return {
          width: Math.max(1, Math.floor(JJ.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(JJ.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(JJ, cJ) {
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ[ZJ] = JJ[ZJ];
        return cJ
      }
    }
    Nc.ForceGLSL = !1, Nc.DEPTH_TEXTURE_TYPE = 0, Nc.NORMAL_TEXTURE_TYPE = 1, Nc.POSITION_TEXTURE_TYPE = 2, Nc.VELOCITY_TEXTURE_TYPE = 3, Nc.REFLECTIVITY_TEXTURE_TYPE = 4, Nc.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Nc.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Nc.IRRADIANCE_TEXTURE_TYPE = 7, Nc.OBJECT_ID_TEXTURE_TYPE = 8, Nc.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Nc._SceneComponentInitialization = JJ => {
      throw (0, xc.m)("GeometryBufferRendererSceneComponent")
    };
    var Oc = ZJ(36216);
    const Tc = {
      effect: null,
      subMesh: null
    };

    function Cc(JJ) {
      if ("number" === typeof JJ) return 1;
      if (JJ instanceof dJ.i) return 2;
      if (JJ instanceof dJ.j || JJ instanceof iJ.e) return 3;
      if (JJ instanceof dJ.k || JJ instanceof iJ.f) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class uc {
      populateVectorFromLinkedProperties(JJ) {
        const cJ = Cc(JJ);
        for (const ZJ in this.linkedProperties) {
          const JJ = this.linkedProperties[ZJ],
            FJ = JJ.numComponents;
          if (cJ < FJ || JJ.targetUniformComponentOffset > cJ - FJ) return void(1 == FJ ? IJ.c.Error(`Float property ${JJ.name} has an offset that is too large.`) : IJ.c.Error(`Vector${FJ} property ${JJ.name} won't fit in Vector${cJ} or has an offset that is too large.`));
          "number" === typeof JJ.value ? uc._tmpArray[JJ.targetUniformComponentOffset] = JJ.value : JJ.value.toArray(uc._tmpArray, JJ.targetUniformComponentOffset)
        }
        JJ.zcJ(uc._tmpArray)
      }
      constructor(JJ, cJ) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = JJ, this.numComponents = cJ
      }
    }
    uc._tmpArray = [0, 0, 0, 0];
    class ic {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = JJ, this.targetUniformName = ZJ, this.defaultValue = cJ, this.value = cJ, this.targetUniformComponentNum = FJ, this.targetUniformComponentOffset = UJ, this.requiredDefine = eJ
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Cc(this.defaultValue)
      }
    }
    class Rc {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(JJ, cJ, ZJ) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = JJ, this.samplerPrefix = cJ, this.textureDefine = ZJ
      }
    }
    class Lc extends((0, Gc.d)((0, nc.c)(NJ.d))) {}
    class ac extends(function(JJ) {
      return class extends JJ {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Lc)) {}
    class Bc extends((0, RJ.e)(ac)) {
      constructor(JJ) {
        super(JJ), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class tc extends((0, fc.e)(aJ.d)) {}
    let oc = (() => {
        var JJ, cJ, FJ, UJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, wJ, WJ, gJ, HJ, pJ, NJ, OJ, TJ, CJ, RJ, aJ, lJ, Jc, cc, Zc, Fc, Uc, ec, Xc, Ac, qc, jc, nc, Gc, fc, xc, rc, vc, mc, Qc, Ec, yc, Sc, Ic, Mc, bc, wc, Wc, gc, Hc, Pc, kc, pc, dc, zc, Oc, Cc, Lc, ac, oc, lc, JZ, cZ, ZZ, FZ, UZ, eZ, XZ, AZ, qZ, jZ, YZ, hZ, DZ, sZ, nZ, GZ, fZ, xZ, rZ, vZ, mZ, QZ, EZ, VZ, KZ, yZ, SZ, IZ, MZ;
        let bZ, wZ, WZ, gZ, HZ, PZ, kZ, pZ, dZ, zZ, NZ, OZ, TZ, CZ, uZ, iZ, RZ, LZ, aZ, BZ, tZ, oZ, lZ, JF, cF, ZF, FF, UF, eF, XF, AF, qF, jF, YF, hF, DF, sF, nF, GF, fF, xF, rF, vF, mF, QF, EF, VF, KF, yF, SF, IF, MF, bF, wF, WF, gF, HF, PF, kF, pF, dF, zF, NF, OF, TF, CF, uF, iF, RF, LF, aF, BF, tF, oF, lF, JU, cU, ZU, FU, UU, eU, XU, AU, qU, jU, YU, hU, DU, sU, nU, GU, fU, xU, rU, vU, mU, QU, EU, VU, KU, yU, SU, IU, MU, bU, wU = tc,
          WU = [],
          gU = [],
          HU = [],
          PU = [],
          kU = [],
          pU = [],
          dU = [],
          zU = [],
          NU = [],
          OU = [],
          TU = [],
          CU = [],
          uU = [],
          iU = [],
          RU = [],
          LU = [],
          aU = [],
          BU = [],
          tU = [],
          oU = [],
          lU = [],
          Je = [],
          ce = [],
          Ze = [],
          Fe = [],
          Ue = [],
          ee = [],
          Xe = [],
          Ae = [],
          qe = [],
          je = [],
          Ye = [],
          he = [],
          De = [],
          se = [],
          ne = [],
          Ge = [],
          fe = [],
          xe = [],
          re = [],
          ve = [],
          me = [],
          Qe = [],
          Ee = [],
          Ve = [],
          Ke = [],
          ye = [],
          Se = [],
          Ie = [],
          Me = [],
          be = [],
          we = [],
          We = [],
          ge = [],
          He = [],
          Pe = [],
          ke = [],
          pe = [],
          de = [],
          ze = [],
          Ne = [],
          Oe = [],
          Te = [],
          Ce = [],
          ue = [],
          ie = [],
          Re = [],
          Le = [],
          ae = [],
          Be = [],
          te = [],
          oe = [],
          le = [],
          JX = [],
          cX = [],
          ZX = [],
          FX = [],
          UX = [],
          eX = [],
          XX = [],
          AX = [],
          qX = [],
          jX = [],
          YX = [],
          hX = [],
          DX = [],
          sX = [],
          nX = [],
          GX = [],
          fX = [],
          xX = [],
          rX = [],
          vX = [],
          mX = [],
          QX = [],
          EX = [],
          VX = [],
          KX = [],
          yX = [],
          SX = [],
          IX = [],
          MX = [],
          bX = [],
          wX = [],
          WX = [],
          gX = [],
          HX = [],
          PX = [],
          kX = [],
          pX = [],
          dX = [],
          zX = [],
          NX = [],
          OX = [],
          TX = [],
          CX = [],
          uX = [],
          iX = [],
          RX = [],
          LX = [],
          aX = [],
          BX = [],
          tX = [],
          oX = [],
          lX = [],
          JA = [],
          cA = [],
          ZA = [],
          FA = [],
          UA = [],
          eA = [],
          XA = [],
          AA = [],
          qA = [],
          jA = [],
          YA = [],
          hA = [],
          DA = [],
          sA = [],
          nA = [],
          GA = [],
          fA = [],
          xA = [],
          rA = [],
          vA = [],
          mA = [],
          QA = [],
          EA = [],
          VA = [],
          KA = [],
          yA = [],
          SA = [],
          IA = [],
          MA = [],
          bA = [],
          wA = [],
          WA = [],
          gA = [],
          HA = [],
          PA = [],
          kA = [],
          pA = [],
          dA = [],
          zA = [],
          NA = [],
          OA = [],
          TA = [],
          CA = [],
          uA = [],
          iA = [],
          RA = [],
          LA = [],
          aA = [],
          BA = [],
          tA = [],
          oA = [],
          lA = [],
          Jq = [],
          cq = [],
          Zq = [],
          Fq = [],
          Uq = [],
          eq = [],
          Xq = [],
          Aq = [],
          qq = [],
          jq = [],
          Yq = [],
          hq = [],
          Dq = [],
          sq = [],
          nq = [],
          Gq = [],
          fq = [],
          xq = [],
          rq = [],
          vq = [],
          mq = [],
          Qq = [],
          Eq = [],
          Vq = [],
          Kq = [],
          yq = [],
          Sq = [],
          Iq = [];
        return JJ = class extends wU {
          get baseWeight() {
            return (0, yJ.b)(this, cJ, "f")
          }
          set baseWeight(JJ) {
            (0, yJ.c)(this, cJ, JJ, "f")
          }
          get baseWeightTexture() {
            return (0, yJ.b)(this, FJ, "f")
          }
          set baseWeightTexture(JJ) {
            (0, yJ.c)(this, FJ, JJ, "f")
          }
          get baseColor() {
            return (0, yJ.b)(this, UJ, "f")
          }
          set baseColor(JJ) {
            (0, yJ.c)(this, UJ, JJ, "f")
          }
          get baseColorTexture() {
            return (0, yJ.b)(this, XJ, "f")
          }
          set baseColorTexture(JJ) {
            (0, yJ.c)(this, XJ, JJ, "f")
          }
          get baseDiffuseRoughness() {
            return (0, yJ.b)(this, AJ, "f")
          }
          set baseDiffuseRoughness(JJ) {
            (0, yJ.c)(this, AJ, JJ, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, yJ.b)(this, qJ, "f")
          }
          set baseDiffuseRoughnessTexture(JJ) {
            (0, yJ.c)(this, qJ, JJ, "f")
          }
          get baseMetalness() {
            return (0, yJ.b)(this, jJ, "f")
          }
          set baseMetalness(JJ) {
            (0, yJ.c)(this, jJ, JJ, "f")
          }
          get baseMetalnessTexture() {
            return (0, yJ.b)(this, YJ, "f")
          }
          set baseMetalnessTexture(JJ) {
            (0, yJ.c)(this, YJ, JJ, "f")
          }
          get specularWeight() {
            return (0, yJ.b)(this, hJ, "f")
          }
          set specularWeight(JJ) {
            (0, yJ.c)(this, hJ, JJ, "f")
          }
          get specularWeightTexture() {
            return (0, yJ.b)(this, DJ, "f")
          }
          set specularWeightTexture(JJ) {
            (0, yJ.c)(this, DJ, JJ, "f")
          }
          get specularColor() {
            return (0, yJ.b)(this, sJ, "f")
          }
          set specularColor(JJ) {
            (0, yJ.c)(this, sJ, JJ, "f")
          }
          get specularColorTexture() {
            return (0, yJ.b)(this, nJ, "f")
          }
          set specularColorTexture(JJ) {
            (0, yJ.c)(this, nJ, JJ, "f")
          }
          get specularRoughness() {
            return (0, yJ.b)(this, GJ, "f")
          }
          set specularRoughness(JJ) {
            (0, yJ.c)(this, GJ, JJ, "f")
          }
          get specularRoughnessTexture() {
            return (0, yJ.b)(this, fJ, "f")
          }
          set specularRoughnessTexture(JJ) {
            (0, yJ.c)(this, fJ, JJ, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, yJ.b)(this, xJ, "f")
          }
          set specularRoughnessAnisotropy(JJ) {
            (0, yJ.c)(this, xJ, JJ, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, yJ.b)(this, rJ, "f")
          }
          set specularRoughnessAnisotropyTexture(JJ) {
            (0, yJ.c)(this, rJ, JJ, "f")
          }
          get specularIor() {
            return (0, yJ.b)(this, vJ, "f")
          }
          set specularIor(JJ) {
            (0, yJ.c)(this, vJ, JJ, "f")
          }
          get transmissionWeight() {
            return (0, yJ.b)(this, mJ, "f")
          }
          set transmissionWeight(JJ) {
            (0, yJ.c)(this, mJ, JJ, "f")
          }
          get transmissionWeightTexture() {
            return (0, yJ.b)(this, QJ, "f")
          }
          set transmissionWeightTexture(JJ) {
            (0, yJ.c)(this, QJ, JJ, "f")
          }
          get transmissionColor() {
            return (0, yJ.b)(this, EJ, "f")
          }
          set transmissionColor(JJ) {
            (0, yJ.c)(this, EJ, JJ, "f")
          }
          get transmissionColorTexture() {
            return (0, yJ.b)(this, VJ, "f")
          }
          set transmissionColorTexture(JJ) {
            (0, yJ.c)(this, VJ, JJ, "f")
          }
          get transmissionDepth() {
            return (0, yJ.b)(this, KJ, "f")
          }
          set transmissionDepth(JJ) {
            (0, yJ.c)(this, KJ, JJ, "f")
          }
          get transmissionDepthTexture() {
            return (0, yJ.b)(this, wJ, "f")
          }
          set transmissionDepthTexture(JJ) {
            (0, yJ.c)(this, wJ, JJ, "f")
          }
          get transmissionScatter() {
            return (0, yJ.b)(this, WJ, "f")
          }
          set transmissionScatter(JJ) {
            (0, yJ.c)(this, WJ, JJ, "f")
          }
          get transmissionScatterTexture() {
            return (0, yJ.b)(this, gJ, "f")
          }
          set transmissionScatterTexture(JJ) {
            (0, yJ.c)(this, gJ, JJ, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, yJ.b)(this, HJ, "f")
          }
          set transmissionScatterAnisotropy(JJ) {
            (0, yJ.c)(this, HJ, JJ, "f")
          }
          get transmissionDispersionScale() {
            return (0, yJ.b)(this, pJ, "f")
          }
          set transmissionDispersionScale(JJ) {
            (0, yJ.c)(this, pJ, JJ, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, yJ.b)(this, NJ, "f")
          }
          set transmissionDispersionScaleTexture(JJ) {
            (0, yJ.c)(this, NJ, JJ, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, yJ.b)(this, OJ, "f")
          }
          set transmissionDispersionAbbeNumber(JJ) {
            (0, yJ.c)(this, OJ, JJ, "f")
          }
          get subsurfaceWeight() {
            return (0, yJ.b)(this, TJ, "f")
          }
          set subsurfaceWeight(JJ) {
            (0, yJ.c)(this, TJ, JJ, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, yJ.b)(this, CJ, "f")
          }
          set subsurfaceWeightTexture(JJ) {
            (0, yJ.c)(this, CJ, JJ, "f")
          }
          get subsurfaceColor() {
            return (0, yJ.b)(this, RJ, "f")
          }
          set subsurfaceColor(JJ) {
            (0, yJ.c)(this, RJ, JJ, "f")
          }
          get subsurfaceColorTexture() {
            return (0, yJ.b)(this, aJ, "f")
          }
          set subsurfaceColorTexture(JJ) {
            (0, yJ.c)(this, aJ, JJ, "f")
          }
          get subsurfaceRadius() {
            return (0, yJ.b)(this, lJ, "f")
          }
          set subsurfaceRadius(JJ) {
            (0, yJ.c)(this, lJ, JJ, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, yJ.b)(this, Jc, "f")
          }
          set subsurfaceRadiusScale(JJ) {
            (0, yJ.c)(this, Jc, JJ, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, yJ.b)(this, cc, "f")
          }
          set subsurfaceRadiusScaleTexture(JJ) {
            (0, yJ.c)(this, cc, JJ, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, yJ.b)(this, Zc, "f")
          }
          set subsurfaceScatterAnisotropy(JJ) {
            (0, yJ.c)(this, Zc, JJ, "f")
          }
          get coatWeight() {
            return (0, yJ.b)(this, Fc, "f")
          }
          set coatWeight(JJ) {
            (0, yJ.c)(this, Fc, JJ, "f")
          }
          get coatWeightTexture() {
            return (0, yJ.b)(this, Uc, "f")
          }
          set coatWeightTexture(JJ) {
            (0, yJ.c)(this, Uc, JJ, "f")
          }
          get coatColor() {
            return (0, yJ.b)(this, ec, "f")
          }
          set coatColor(JJ) {
            (0, yJ.c)(this, ec, JJ, "f")
          }
          get coatColorTexture() {
            return (0, yJ.b)(this, Xc, "f")
          }
          set coatColorTexture(JJ) {
            (0, yJ.c)(this, Xc, JJ, "f")
          }
          get coatRoughness() {
            return (0, yJ.b)(this, Ac, "f")
          }
          set coatRoughness(JJ) {
            (0, yJ.c)(this, Ac, JJ, "f")
          }
          get coatRoughnessTexture() {
            return (0, yJ.b)(this, qc, "f")
          }
          set coatRoughnessTexture(JJ) {
            (0, yJ.c)(this, qc, JJ, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, yJ.b)(this, jc, "f")
          }
          set coatRoughnessAnisotropy(JJ) {
            (0, yJ.c)(this, jc, JJ, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, yJ.b)(this, nc, "f")
          }
          set coatRoughnessAnisotropyTexture(JJ) {
            (0, yJ.c)(this, nc, JJ, "f")
          }
          get coatIor() {
            return (0, yJ.b)(this, Gc, "f")
          }
          set coatIor(JJ) {
            (0, yJ.c)(this, Gc, JJ, "f")
          }
          get coatDarkening() {
            return (0, yJ.b)(this, fc, "f")
          }
          set coatDarkening(JJ) {
            (0, yJ.c)(this, fc, JJ, "f")
          }
          get coatDarkeningTexture() {
            return (0, yJ.b)(this, xc, "f")
          }
          set coatDarkeningTexture(JJ) {
            (0, yJ.c)(this, xc, JJ, "f")
          }
          get fuzzWeight() {
            return (0, yJ.b)(this, rc, "f")
          }
          set fuzzWeight(JJ) {
            (0, yJ.c)(this, rc, JJ, "f")
          }
          get fuzzWeightTexture() {
            return (0, yJ.b)(this, vc, "f")
          }
          set fuzzWeightTexture(JJ) {
            (0, yJ.c)(this, vc, JJ, "f")
          }
          get fuzzColor() {
            return (0, yJ.b)(this, mc, "f")
          }
          set fuzzColor(JJ) {
            (0, yJ.c)(this, mc, JJ, "f")
          }
          get fuzzColorTexture() {
            return (0, yJ.b)(this, Qc, "f")
          }
          set fuzzColorTexture(JJ) {
            (0, yJ.c)(this, Qc, JJ, "f")
          }
          get fuzzRoughness() {
            return (0, yJ.b)(this, Ec, "f")
          }
          set fuzzRoughness(JJ) {
            (0, yJ.c)(this, Ec, JJ, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, yJ.b)(this, yc, "f")
          }
          set fuzzRoughnessTexture(JJ) {
            (0, yJ.c)(this, yc, JJ, "f")
          }
          get geometryThinWalled() {
            return (0, yJ.b)(this, Sc, "f")
          }
          set geometryThinWalled(JJ) {
            (0, yJ.c)(this, Sc, JJ, "f")
          }
          get geometryNormalTexture() {
            return (0, yJ.b)(this, Ic, "f")
          }
          set geometryNormalTexture(JJ) {
            (0, yJ.c)(this, Ic, JJ, "f")
          }
          get geometryTangent() {
            return (0, yJ.b)(this, Mc, "f")
          }
          set geometryTangent(JJ) {
            (0, yJ.c)(this, Mc, JJ, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(JJ) {
            this.geometryTangent = new dJ.i(Math.cos(JJ), Math.sin(JJ))
          }
          get geometryTangentTexture() {
            return (0, yJ.b)(this, bc, "f")
          }
          set geometryTangentTexture(JJ) {
            (0, yJ.c)(this, bc, JJ, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, yJ.b)(this, wc, "f")
          }
          set geometryCoatNormalTexture(JJ) {
            (0, yJ.c)(this, wc, JJ, "f")
          }
          get geometryCoatTangent() {
            return (0, yJ.b)(this, Wc, "f")
          }
          set geometryCoatTangent(JJ) {
            (0, yJ.c)(this, Wc, JJ, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(JJ) {
            this.geometryCoatTangent = new dJ.i(Math.cos(JJ), Math.sin(JJ))
          }
          get geometryCoatTangentTexture() {
            return (0, yJ.b)(this, gc, "f")
          }
          set geometryCoatTangentTexture(JJ) {
            (0, yJ.c)(this, gc, JJ, "f")
          }
          get geometryOpacity() {
            return (0, yJ.b)(this, Hc, "f")
          }
          set geometryOpacity(JJ) {
            (0, yJ.c)(this, Hc, JJ, "f")
          }
          get geometryOpacityTexture() {
            return (0, yJ.b)(this, Pc, "f")
          }
          set geometryOpacityTexture(JJ) {
            (0, yJ.c)(this, Pc, JJ, "f")
          }
          get geometryThickness() {
            return (0, yJ.b)(this, kc, "f")
          }
          set geometryThickness(JJ) {
            (0, yJ.c)(this, kc, JJ, "f")
          }
          get geometryThicknessTexture() {
            return (0, yJ.b)(this, pc, "f")
          }
          set geometryThicknessTexture(JJ) {
            (0, yJ.c)(this, pc, JJ, "f")
          }
          get emissionLuminance() {
            return (0, yJ.b)(this, dc, "f")
          }
          set emissionLuminance(JJ) {
            (0, yJ.c)(this, dc, JJ, "f")
          }
          get emissionColor() {
            return (0, yJ.b)(this, zc, "f")
          }
          set emissionColor(JJ) {
            (0, yJ.c)(this, zc, JJ, "f")
          }
          get emissionColorTexture() {
            return (0, yJ.b)(this, Oc, "f")
          }
          set emissionColorTexture(JJ) {
            (0, yJ.c)(this, Oc, JJ, "f")
          }
          get thinFilmWeight() {
            return (0, yJ.b)(this, Cc, "f")
          }
          set thinFilmWeight(JJ) {
            (0, yJ.c)(this, Cc, JJ, "f")
          }
          get thinFilmWeightTexture() {
            return (0, yJ.b)(this, Lc, "f")
          }
          set thinFilmWeightTexture(JJ) {
            (0, yJ.c)(this, Lc, JJ, "f")
          }
          get thinFilmThickness() {
            return (0, yJ.b)(this, ac, "f")
          }
          set thinFilmThickness(JJ) {
            (0, yJ.c)(this, ac, JJ, "f")
          }
          get thinFilmThicknessMin() {
            return (0, yJ.b)(this, oc, "f")
          }
          set thinFilmThicknessMin(JJ) {
            (0, yJ.c)(this, oc, JJ, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, yJ.b)(this, lc, "f")
          }
          set thinFilmThicknessTexture(JJ) {
            (0, yJ.c)(this, lc, JJ, "f")
          }
          get thinFilmIor() {
            return (0, yJ.b)(this, JZ, "f")
          }
          set thinFilmIor(JJ) {
            (0, yJ.c)(this, JZ, JJ, "f")
          }
          get ambientOcclusionTexture() {
            return (0, yJ.b)(this, cZ, "f")
          }
          set ambientOcclusionTexture(JJ) {
            (0, yJ.c)(this, cZ, JJ, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(JJ) {
            this._sssQuality !== JJ && (this._sssQuality = JJ, this.ycJ(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(JJ) {
            this._sssIrradianceTexture !== JJ && (this._sssIrradianceTexture = JJ, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(JJ) {
            this._sssDepthTexture !== JJ && (this._sssDepthTexture = JJ, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, yJ.b)(this, ZZ, "f")
          }
          set directIntensity(JJ) {
            (0, yJ.c)(this, ZZ, JJ, "f")
          }
          get environmentIntensity() {
            return (0, yJ.b)(this, FZ, "f")
          }
          set environmentIntensity(JJ) {
            (0, yJ.c)(this, FZ, JJ, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, yJ.b)(this, UZ, "f")
          }
          set useSpecularWeightFromTextureAlpha(JJ) {
            (0, yJ.c)(this, UZ, JJ, "f")
          }
          get forceAlphaTest() {
            return (0, yJ.b)(this, eZ, "f")
          }
          set forceAlphaTest(JJ) {
            (0, yJ.c)(this, eZ, JJ, "f")
          }
          get alphaCutOff() {
            return (0, yJ.b)(this, XZ, "f")
          }
          set alphaCutOff(JJ) {
            (0, yJ.c)(this, XZ, JJ, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, yJ.b)(this, AZ, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(JJ) {
            (0, yJ.c)(this, AZ, JJ, "f")
          }
          get useAmbientInGrayScale() {
            return (0, yJ.b)(this, qZ, "f")
          }
          set useAmbientInGrayScale(JJ) {
            (0, yJ.c)(this, qZ, JJ, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(iJ.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === eJ.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(JJ) {
            JJ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = JJ ? eJ.c.LIGHTFALLOFF_PHYSICAL : eJ.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === eJ.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(JJ) {
            JJ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = JJ ? eJ.c.LIGHTFALLOFF_GLTF : eJ.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, yJ.b)(this, jZ, "f")
          }
          set useObjectSpaceNormalMap(JJ) {
            (0, yJ.c)(this, jZ, JJ, "f")
          }
          get useParallax() {
            return (0, yJ.b)(this, YZ, "f")
          }
          set useParallax(JJ) {
            (0, yJ.c)(this, YZ, JJ, "f")
          }
          get useParallaxOcclusion() {
            return (0, yJ.b)(this, hZ, "f")
          }
          set useParallaxOcclusion(JJ) {
            (0, yJ.c)(this, hZ, JJ, "f")
          }
          get parallaxScaleBias() {
            return (0, yJ.b)(this, DZ, "f")
          }
          set parallaxScaleBias(JJ) {
            (0, yJ.c)(this, DZ, JJ, "f")
          }
          get disableLighting() {
            return (0, yJ.b)(this, sZ, "f")
          }
          set disableLighting(JJ) {
            (0, yJ.c)(this, sZ, JJ, "f")
          }
          get forceIrradianceInFragment() {
            return (0, yJ.b)(this, nZ, "f")
          }
          set forceIrradianceInFragment(JJ) {
            (0, yJ.c)(this, nZ, JJ, "f")
          }
          get maxSimultaneousLights() {
            return (0, yJ.b)(this, GZ, "f")
          }
          set maxSimultaneousLights(JJ) {
            (0, yJ.c)(this, GZ, JJ, "f")
          }
          get invertNormalMapX() {
            return (0, yJ.b)(this, fZ, "f")
          }
          set invertNormalMapX(JJ) {
            (0, yJ.c)(this, fZ, JJ, "f")
          }
          get invertNormalMapY() {
            return (0, yJ.b)(this, xZ, "f")
          }
          set invertNormalMapY(JJ) {
            (0, yJ.c)(this, xZ, JJ, "f")
          }
          get twoSidedLighting() {
            return (0, yJ.b)(this, rZ, "f")
          }
          set twoSidedLighting(JJ) {
            (0, yJ.c)(this, rZ, JJ, "f")
          }
          get useAlphaFresnel() {
            return (0, yJ.b)(this, vZ, "f")
          }
          set useAlphaFresnel(JJ) {
            (0, yJ.c)(this, vZ, JJ, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, yJ.b)(this, mZ, "f")
          }
          set useLinearAlphaFresnel(JJ) {
            (0, yJ.c)(this, mZ, JJ, "f")
          }
          get environmentBRDFTexture() {
            return (0, yJ.b)(this, QZ, "f")
          }
          set environmentBRDFTexture(JJ) {
            (0, yJ.c)(this, QZ, JJ, "f")
          }
          get forceNormalForward() {
            return (0, yJ.b)(this, EZ, "f")
          }
          set forceNormalForward(JJ) {
            (0, yJ.c)(this, EZ, JJ, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, yJ.b)(this, VZ, "f")
          }
          set enableSpecularAntiAliasing(JJ) {
            (0, yJ.c)(this, VZ, JJ, "f")
          }
          get useHorizonOcclusion() {
            return (0, yJ.b)(this, KZ, "f")
          }
          set useHorizonOcclusion(JJ) {
            (0, yJ.c)(this, KZ, JJ, "f")
          }
          get useRadianceOcclusion() {
            return (0, yJ.b)(this, yZ, "f")
          }
          set useRadianceOcclusion(JJ) {
            (0, yJ.c)(this, yZ, JJ, "f")
          }
          get unlit() {
            return (0, yJ.b)(this, SZ, "f")
          }
          set unlit(JJ) {
            (0, yJ.c)(this, SZ, JJ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, yJ.b)(this, IZ, "f")
          }
          set applyDecalMapAfterDetailMap(JJ) {
            (0, yJ.c)(this, IZ, JJ, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(JJ) {
            this._backgroundRefractionTexture = JJ, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(JJ) {
            this._refractionHighQualityBlur !== JJ && (this._refractionHighQualityBlur = JJ, this.ycJ(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(JJ) {
            this._realTimeFiltering = JJ, this.ycJ(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(JJ) {
            this._realTimeFilteringQuality = JJ, this.ycJ(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(JJ) {
            this._fuzzSampleNumber = JJ, this.ycJ(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, yJ.b)(this, MZ, "f")
          }
          set debugMode(JJ) {
            (0, yJ.c)(this, MZ, JJ, "f")
          }
          constructor(ZJ, SJ) {
            super(ZJ, SJ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || JJ.ForceGLSL), cJ.set(this, ((0, yJ.e)(this, WU), (0, yJ.e)(this, gU, void 0))), this._baseWeight = ((0, yJ.e)(this, HU), new ic("base_weight", 1, "vBaseWeight", 1)), FJ.set(this, (0, yJ.e)(this, PU, void 0)), this._baseWeightTexture = ((0, yJ.e)(this, kU), new Rc("base_weight", "baseWeight", "BASE_WEIGHT")), UJ.set(this, (0, yJ.e)(this, pU, void 0)), this._baseColor = ((0, yJ.e)(this, dU), new ic("base_color", iJ.e.White(), "vBaseColor", 4)), XJ.set(this, (0, yJ.e)(this, zU, void 0)), this._baseColorTexture = ((0, yJ.e)(this, NU), new Rc("base_color", "baseColor", "BASE_COLOR")), AJ.set(this, (0, yJ.e)(this, OU, void 0)), this._baseDiffuseRoughness = ((0, yJ.e)(this, TU), new ic("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), qJ.set(this, (0, yJ.e)(this, CU, void 0)), this._baseDiffuseRoughnessTexture = ((0, yJ.e)(this, uU), new Rc("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), jJ.set(this, (0, yJ.e)(this, iU, void 0)), this._baseMetalness = ((0, yJ.e)(this, RU), new ic("base_metalness", 0, "vReflectanceInfo", 4, 0)), YJ.set(this, (0, yJ.e)(this, LU, void 0)), this._baseMetalnessTexture = ((0, yJ.e)(this, aU), new Rc("base_metalness", "baseMetalness", "BASE_METALNESS")), hJ.set(this, (0, yJ.e)(this, BU, void 0)), this._specularWeight = ((0, yJ.e)(this, tU), new ic("specular_weight", 1, "vReflectanceInfo", 4, 3)), DJ.set(this, (0, yJ.e)(this, oU, void 0)), this._specularWeightTexture = ((0, yJ.e)(this, lU), new Rc("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), sJ.set(this, (0, yJ.e)(this, Je, void 0)), this._specularColor = ((0, yJ.e)(this, ce), new ic("specular_color", iJ.e.White(), "vSpecularColor", 4)), nJ.set(this, (0, yJ.e)(this, Ze, void 0)), this._specularColorTexture = ((0, yJ.e)(this, Fe), new Rc("specular_color", "specularColor", "SPECULAR_COLOR")), GJ.set(this, (0, yJ.e)(this, Ue, void 0)), this._specularRoughness = ((0, yJ.e)(this, ee), new ic("specular_roughness", .3, "vReflectanceInfo", 4, 1)), fJ.set(this, (0, yJ.e)(this, Xe, void 0)), this._specularRoughnessTexture = ((0, yJ.e)(this, Ae), new Rc("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), xJ.set(this, (0, yJ.e)(this, qe, void 0)), this._specularRoughnessAnisotropy = ((0, yJ.e)(this, je), new ic("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), rJ.set(this, (0, yJ.e)(this, Ye, void 0)), this._specularRoughnessAnisotropyTexture = ((0, yJ.e)(this, he), new Rc("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), vJ.set(this, (0, yJ.e)(this, De, void 0)), this._specularIor = ((0, yJ.e)(this, se), new ic("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), mJ.set(this, (0, yJ.e)(this, ne, void 0)), this._transmissionWeight = ((0, yJ.e)(this, Ge), new ic("transmission_weight", 0, "vTransmissionWeight", 1)), QJ.set(this, (0, yJ.e)(this, fe, void 0)), this._transmissionWeightTexture = ((0, yJ.e)(this, xe), new Rc("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), EJ.set(this, (0, yJ.e)(this, re, void 0)), this._transmissionColor = ((0, yJ.e)(this, ve), new ic("transmission_color", iJ.e.White(), "vTransmissionColor", 3, 0)), VJ.set(this, (0, yJ.e)(this, me, void 0)), this._transmissionColorTexture = ((0, yJ.e)(this, Qe), new Rc("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), KJ.set(this, (0, yJ.e)(this, Ee, void 0)), this._transmissionDepth = ((0, yJ.e)(this, Ve), new ic("transmission_depth", 0, "vTransmissionDepth", 1, 0)), wJ.set(this, (0, yJ.e)(this, Ke, void 0)), this._transmissionDepthTexture = ((0, yJ.e)(this, ye), new Rc("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), WJ.set(this, (0, yJ.e)(this, Se, void 0)), this._transmissionScatter = ((0, yJ.e)(this, Ie), new ic("transmission_scatter", iJ.e.Black(), "vTransmissionScatter", 3, 0)), gJ.set(this, (0, yJ.e)(this, Me, void 0)), this._transmissionScatterTexture = ((0, yJ.e)(this, be), new Rc("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), HJ.set(this, (0, yJ.e)(this, we, void 0)), this._transmissionScatterAnisotropy = ((0, yJ.e)(this, We), new ic("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), pJ.set(this, (0, yJ.e)(this, ge, void 0)), this._transmissionDispersionScale = ((0, yJ.e)(this, He), new ic("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), NJ.set(this, (0, yJ.e)(this, Pe, void 0)), this._transmissionDispersionScaleTexture = ((0, yJ.e)(this, ke), new Rc("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), OJ.set(this, (0, yJ.e)(this, pe, void 0)), this._transmissionDispersionAbbeNumber = ((0, yJ.e)(this, de), new ic("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), TJ.set(this, (0, yJ.e)(this, ze, void 0)), this._subsurfaceWeight = ((0, yJ.e)(this, Ne), new ic("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), CJ.set(this, (0, yJ.e)(this, Oe, void 0)), this._subsurfaceWeightTexture = ((0, yJ.e)(this, Te), new Rc("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), RJ.set(this, (0, yJ.e)(this, Ce, void 0)), this._subsurfaceColor = ((0, yJ.e)(this, ue), new ic("subsurface_color", new iJ.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), aJ.set(this, (0, yJ.e)(this, ie, void 0)), this._subsurfaceColorTexture = ((0, yJ.e)(this, Re), new Rc("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), lJ.set(this, (0, yJ.e)(this, Le, void 0)), this._subsurfaceRadius = ((0, yJ.e)(this, ae), new ic("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Jc.set(this, (0, yJ.e)(this, Be, void 0)), this._subsurfaceRadiusScale = ((0, yJ.e)(this, te), new ic("subsurface_radius_scale", new iJ.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), cc.set(this, (0, yJ.e)(this, oe, void 0)), this._subsurfaceRadiusScaleTexture = ((0, yJ.e)(this, le), new Rc("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Zc.set(this, (0, yJ.e)(this, JX, void 0)), this._subsurfaceScatterAnisotropy = ((0, yJ.e)(this, cX), new ic("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Fc.set(this, (0, yJ.e)(this, ZX, void 0)), this._coatWeight = ((0, yJ.e)(this, FX), new ic("coat_weight", 0, "vCoatWeight", 1, 0)), Uc.set(this, (0, yJ.e)(this, UX, void 0)), this._coatWeightTexture = ((0, yJ.e)(this, eX), new Rc("coat_weight", "coatWeight", "COAT_WEIGHT")), ec.set(this, (0, yJ.e)(this, XX, void 0)), this._coatColor = ((0, yJ.e)(this, AX), new ic("coat_color", iJ.e.White(), "vCoatColor", 3, 0)), Xc.set(this, (0, yJ.e)(this, qX, void 0)), this._coatColorTexture = ((0, yJ.e)(this, jX), new Rc("coat_color", "coatColor", "COAT_COLOR")), Ac.set(this, (0, yJ.e)(this, YX, void 0)), this._coatRoughness = ((0, yJ.e)(this, hX), new ic("coat_roughness", 0, "vCoatRoughness", 1, 0)), qc.set(this, (0, yJ.e)(this, DX, void 0)), this._coatRoughnessTexture = ((0, yJ.e)(this, sX), new Rc("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), jc.set(this, (0, yJ.e)(this, nX, void 0)), this._coatRoughnessAnisotropy = ((0, yJ.e)(this, GX), new ic("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), nc.set(this, (0, yJ.e)(this, fX, void 0)), this._coatRoughnessAnisotropyTexture = ((0, yJ.e)(this, xX), new Rc("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Gc.set(this, (0, yJ.e)(this, rX, void 0)), this._coatIor = ((0, yJ.e)(this, vX), new ic("coat_ior", 1.5, "vCoatIor", 1, 0)), fc.set(this, (0, yJ.e)(this, mX, void 0)), this._coatDarkening = ((0, yJ.e)(this, QX), new ic("coat_darkening", 1, "vCoatDarkening", 1, 0)), xc.set(this, (0, yJ.e)(this, EX, void 0)), this._coatDarkeningTexture = ((0, yJ.e)(this, VX), new Rc("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, rc.set(this, (0, yJ.e)(this, KX, void 0)), this._fuzzWeight = ((0, yJ.e)(this, yX), new ic("fuzz_weight", 0, "vFuzzWeight", 1, 0)), vc.set(this, (0, yJ.e)(this, SX, void 0)), this._fuzzWeightTexture = ((0, yJ.e)(this, IX), new Rc("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), mc.set(this, (0, yJ.e)(this, MX, void 0)), this._fuzzColor = ((0, yJ.e)(this, bX), new ic("fuzz_color", iJ.e.White(), "vFuzzColor", 3, 0)), Qc.set(this, (0, yJ.e)(this, wX, void 0)), this._fuzzColorTexture = ((0, yJ.e)(this, WX), new Rc("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Ec.set(this, (0, yJ.e)(this, gX, void 0)), this._fuzzRoughness = ((0, yJ.e)(this, HX), new ic("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), yc.set(this, (0, yJ.e)(this, PX, void 0)), this._fuzzRoughnessTexture = ((0, yJ.e)(this, kX), new Rc("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Sc.set(this, (0, yJ.e)(this, pX, void 0)), this._geometryThinWalled = ((0, yJ.e)(this, dX), new ic("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Ic.set(this, (0, yJ.e)(this, zX, void 0)), this._geometryNormalTexture = ((0, yJ.e)(this, NX), new Rc("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Mc.set(this, (0, yJ.e)(this, OX, void 0)), this._geometryTangent = ((0, yJ.e)(this, TX), new ic("geometry_tangent", new dJ.i(1, 0), "vSpecularAnisotropy", 3, 0)), bc.set(this, (0, yJ.e)(this, CX, void 0)), this._geometryTangentTexture = ((0, yJ.e)(this, uX), new Rc("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), wc.set(this, (0, yJ.e)(this, iX, void 0)), this._geometryCoatNormalTexture = ((0, yJ.e)(this, RX), new Rc("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Wc.set(this, (0, yJ.e)(this, LX, void 0)), this._geometryCoatTangent = ((0, yJ.e)(this, aX), new ic("geometry_coat_tangent", new dJ.i(1, 0), "vGeometryCoatTangent", 2, 0)), gc.set(this, (0, yJ.e)(this, BX, void 0)), this._geometryCoatTangentTexture = ((0, yJ.e)(this, tX), new Rc("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Hc.set(this, (0, yJ.e)(this, oX, void 0)), this._geometryOpacity = ((0, yJ.e)(this, lX), new ic("geometry_opacity", 1, "vBaseColor", 4, 3)), Pc.set(this, (0, yJ.e)(this, JA, void 0)), this._geometryOpacityTexture = ((0, yJ.e)(this, cA), new Rc("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), kc.set(this, (0, yJ.e)(this, ZA, void 0)), this._geometryThickness = ((0, yJ.e)(this, FA), new ic("geometry_thickness", 0, "vGeometryThickness", 1, 0)), pc.set(this, (0, yJ.e)(this, UA, void 0)), this._geometryThicknessTexture = ((0, yJ.e)(this, eA), new Rc("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), dc.set(this, (0, yJ.e)(this, XA, void 0)), this._emissionLuminance = ((0, yJ.e)(this, AA), new ic("emission_luminance", 1, "vLightingIntensity", 4, 1)), zc.set(this, (0, yJ.e)(this, qA, void 0)), this._emissionColor = ((0, yJ.e)(this, jA), new ic("emission_color", iJ.e.Black(), "vEmissionColor", 3)), Oc.set(this, (0, yJ.e)(this, YA, void 0)), this._emissionColorTexture = ((0, yJ.e)(this, hA), new Rc("emission_color", "emissionColor", "EMISSION_COLOR")), Cc.set(this, (0, yJ.e)(this, DA, void 0)), this._thinFilmWeight = ((0, yJ.e)(this, sA), new ic("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Lc.set(this, (0, yJ.e)(this, nA, void 0)), this._thinFilmWeightTexture = ((0, yJ.e)(this, GA), new Rc("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), ac.set(this, (0, yJ.e)(this, fA, void 0)), this._thinFilmThickness = ((0, yJ.e)(this, xA), new ic("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), oc.set(this, (0, yJ.e)(this, rA, void 0)), this._thinFilmThicknessMin = ((0, yJ.e)(this, vA), new ic("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), lc.set(this, (0, yJ.e)(this, mA, void 0)), this._thinFilmThicknessTexture = ((0, yJ.e)(this, QA), new Rc("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), JZ.set(this, (0, yJ.e)(this, EA, void 0)), this._thinFilmIor = ((0, yJ.e)(this, VA), new ic("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), cZ.set(this, (0, yJ.e)(this, KA, void 0)), this._ambientOcclusionTexture = ((0, yJ.e)(this, yA), new Rc("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = JJ.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ZZ.set(this, (0, yJ.e)(this, SA, 1)), FZ.set(this, ((0, yJ.e)(this, IA), (0, yJ.e)(this, MA, 1))), UZ.set(this, ((0, yJ.e)(this, bA), (0, yJ.e)(this, wA, !1))), eZ.set(this, ((0, yJ.e)(this, WA), (0, yJ.e)(this, gA, !1))), XZ.set(this, ((0, yJ.e)(this, HA), (0, yJ.e)(this, PA, .4))), AZ.set(this, ((0, yJ.e)(this, kA), (0, yJ.e)(this, pA, !1))), qZ.set(this, ((0, yJ.e)(this, dA), (0, yJ.e)(this, zA, !1))), jZ.set(this, ((0, yJ.e)(this, NA), (0, yJ.e)(this, OA, !1))), YZ.set(this, ((0, yJ.e)(this, TA), (0, yJ.e)(this, CA, !1))), hZ.set(this, ((0, yJ.e)(this, uA), (0, yJ.e)(this, iA, !1))), DZ.set(this, ((0, yJ.e)(this, RA), (0, yJ.e)(this, LA, .05))), sZ.set(this, ((0, yJ.e)(this, aA), (0, yJ.e)(this, BA, !1))), nZ.set(this, ((0, yJ.e)(this, tA), (0, yJ.e)(this, oA, !1))), GZ.set(this, ((0, yJ.e)(this, lA), (0, yJ.e)(this, Jq, 4))), fZ.set(this, ((0, yJ.e)(this, cq), (0, yJ.e)(this, Zq, !1))), xZ.set(this, ((0, yJ.e)(this, Fq), (0, yJ.e)(this, Uq, !1))), rZ.set(this, ((0, yJ.e)(this, eq), (0, yJ.e)(this, Xq, !1))), vZ.set(this, ((0, yJ.e)(this, Aq), (0, yJ.e)(this, qq, !1))), mZ.set(this, ((0, yJ.e)(this, jq), (0, yJ.e)(this, Yq, !1))), QZ.set(this, ((0, yJ.e)(this, hq), (0, yJ.e)(this, Dq, null))), EZ.set(this, ((0, yJ.e)(this, sq), (0, yJ.e)(this, nq, !1))), VZ.set(this, ((0, yJ.e)(this, Gq), (0, yJ.e)(this, fq, !1))), KZ.set(this, ((0, yJ.e)(this, xq), (0, yJ.e)(this, rq, !0))), yZ.set(this, ((0, yJ.e)(this, vq), (0, yJ.e)(this, mq, !0))), SZ.set(this, ((0, yJ.e)(this, Qq), (0, yJ.e)(this, Eq, !1))), IZ.set(this, ((0, yJ.e)(this, Vq), (0, yJ.e)(this, Kq, !1))), this._lightingInfos = ((0, yJ.e)(this, yq), new dJ.k(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = eJ.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new MJ.c(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, MZ.set(this, (0, yJ.e)(this, Sq, 0)), this.debugLimit = ((0, yJ.e)(this, Iq), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = eJ.c.MATERIAL_OPAQUE, this.Qy() && !this.Qy()?.gn().isWebGPU && this.Qy().gn().nG < 2 && IJ.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), JJ._noiseTextures[this.Qy().uniqueId] || (JJ._noiseTextures[this.Qy().uniqueId] = new bJ.i(Kc.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Qy(), !1, !0, 1), this.Qy().Sy.addOnce((() => {
              JJ._noiseTextures[this.Qy().uniqueId]?.dispose(), delete JJ._noiseTextures[this.Qy().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), BJ.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), BJ.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = kJ(this.Qy()), this._environmentFuzzBRDFTexture = PJ(this.Qy()), this.prePassConfiguration = new uJ.e, this._propertyList = {};
            for (const JJ of Object.getOwnPropertyNames(this)) {
              const cJ = this[JJ];
              cJ instanceof ic && (this._propertyList[JJ] = cJ)
            }
            Object.keys(this._propertyList).forEach((JJ => {
              const cJ = this._propertyList[JJ];
              let ZJ = this._uniformsList[cJ.targetUniformName];
              ZJ ? ZJ.numComponents !== cJ.targetUniformComponentNum ? IJ.c.Error(`Uniform ${cJ.targetUniformName} already exists of size ${ZJ.numComponents}, but trying to set it to ${cJ.targetUniformComponentNum}.`) : ZJ.requiredDefine !== cJ.requiredDefine && (ZJ.requiredDefine = void 0) : (ZJ = new uc(cJ.targetUniformName, cJ.targetUniformComponentNum), ZJ.requiredDefine = cJ.requiredDefine, this._uniformsList[cJ.targetUniformName] = ZJ), "" === ZJ.firstLinkedKey && (ZJ.firstLinkedKey = cJ.name), ZJ.linkedProperties[cJ.name] = cJ
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const JJ of Object.getOwnPropertyNames(this)) {
              const cJ = this[JJ];
              cJ instanceof Rc && (this._samplersList[JJ] = cJ)
            }
            for (const JJ in this._samplersList) {
              const cJ = this._samplersList[JJ].textureDefine;
              this._samplerDefines[cJ] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[cJ + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[cJ + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(BJ.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(BJ.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(JJ) {
            this._transparencyMode !== JJ && (this._transparencyMode = JJ, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== eJ.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(JJ) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(JJ)
          }
          clone(cJ) {
            let ZJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const UJ = Vc.c.Clone((() => new JJ(cJ, this.Qy())), this, {
              cloneTexturesOnlyOnce: ZJ
            });
            return UJ.id = cJ, UJ.name = cJ, this.stencil.copyTo(UJ.stencil), this._clonePlugins(UJ, FJ), UJ
          }
          serialize() {
            const JJ = super.serialize();
            return JJ.customType = "BABYLON.OpenPBRMaterial", JJ
          }
          static Parse(cJ, ZJ, FJ) {
            const UJ = Vc.c.Parse((() => new JJ(cJ.name, ZJ)), cJ, ZJ, FJ);
            return cJ.stencil && UJ.stencil.parse(cJ.stencil, ZJ, FJ), eJ.c._ParsePlugins(cJ, UJ, ZJ, FJ), UJ
          }
          forceCompilation(JJ, cJ, ZJ) {
            const FJ = {
              clipPlane: !1,
              useInstances: !1,
              ...ZJ
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ZJ = new Bc({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                UJ = this._prepareEffect(JJ, JJ, ZJ, void 0, void 0, FJ.useInstances, FJ.clipPlane);
              this._onEffectCreatedObservable && (Tc.effect = UJ, Tc.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Tc)), UJ.isReady() ? cJ && cJ(this) : UJ.onCompileObservable.add((() => {
                cJ && cJ(this)
              }))
            })()
          }
          isReadyForSubMesh(cJ, ZJ, FJ) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const UJ = ZJ._drawWrapper;
            if (UJ.effect && this.isFrozen && UJ._wasPreviouslyReady && UJ._wasPreviouslyUsingInstances === FJ) return !0;
            ZJ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZJ.materialDefines = new Bc({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const eJ = ZJ.materialDefines;
            if (this._isReadyForSubMesh(ZJ)) return !0;
            const XJ = this.Qy(),
              AJ = XJ.gn();
            if (eJ._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, XJ.texturesEnabled)) {
              for (const JJ in this._samplersList) {
                const cJ = this._samplersList[JJ];
                if (cJ.value && !cJ.value.isReadyOrNotBlocking()) return !1
              }
              const cJ = this._getRadianceTexture();
              if (cJ && BJ.d.ReflectionTextureEnabled) {
                if (!cJ.isReadyOrNotBlocking()) return !1;
                if (cJ.irradianceTexture) {
                  if (!cJ.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!cJ.sphericalPolynomial && cJ.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && BJ.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && BJ.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && BJ.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (JJ._noiseTextures[XJ.uniqueId] && !JJ._noiseTextures[XJ.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = eJ, this._eventInfo.subMesh = ZJ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (eJ._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (eJ.AREALIGHTUSED)
              for (let JJ = 0; JJ < cJ.lightSources.length; JJ++)
                if (!cJ.lightSources[JJ]._isReady()) return !1;
            if (AJ.getCaps().standardDerivatives || cJ.isVerticesDataPresent(zJ.n.NormalKind) || (cJ.createNormals(!0), IJ.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + cJ.name)), !(0, oJ.d)(XJ, cJ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const qJ = ZJ.effect,
              jJ = eJ._areLightsDisposed,
              YJ = this._prepareEffect(cJ, ZJ.getRenderingMesh(), eJ, this.onCompiled, this.onError, FJ, null);
            let hJ = !1;
            if (YJ)
              if (this._onEffectCreatedObservable && (Tc.effect = YJ, Tc.subMesh = ZJ, this._onEffectCreatedObservable.notifyObservers(Tc)), this.allowShaderHotSwapping && qJ && !YJ.isReady()) {
                if (eJ.markAsUnprocessed(), hJ = this.isFrozen, jJ) return eJ._areLightsDisposed = !0, !1
              } else XJ.resetCachedMaterial(), ZJ.setEffect(YJ, eJ, this._materialContext);
            return !(!ZJ.effect || !ZJ.effect.isReady()) && (eJ._renderId = XJ.getRenderId(), UJ._wasPreviouslyReady = !hJ, UJ._wasPreviouslyUsingInstances = !!FJ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const JJ = this._uniformBuffer;
            JJ.addUniform("vTangentSpaceParams", 2), JJ.addUniform("vLightingIntensity", 4), JJ.addUniform("pointSize", 1), JJ.addUniform("vDebugMode", 2), JJ.addUniform("renderTargetSize", 2), JJ.addUniform("cameraInfo", 4), JJ.addUniform("vTextureRepetitionHexTilingParams", 4), JJ.addUniform("backgroundRefractionMatrix", 16), JJ.addUniform("vBackgroundRefractionInfos", 3), (0, oJ.gb)(JJ, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((cJ => {
              JJ.addUniform(cJ.name, cJ.numComponents)
            })), Object.values(this._samplersList).forEach((cJ => {
              JJ.addUniform(cJ.samplerInfoName, 2), JJ.addUniform(cJ.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(JJ, cJ, ZJ, FJ) {
            if (0 === this.geometryThickness) JJ.updateFloat("vGeometryThickness", 0);
            else {
              FJ.getRenderingMesh().getWorldMatrix().decompose(dJ.h.Pn[0]);
              const cJ = Math.max(Math.abs(dJ.h.Pn[0].x), Math.abs(dJ.h.Pn[0].y), Math.abs(dJ.h.Pn[0].z));
              JJ.updateFloat("vGeometryThickness", this.geometryThickness * cJ)
            }
          }
          bindForSubMesh(cJ, ZJ, FJ) {
            const UJ = this.Qy(),
              eJ = FJ.materialDefines;
            if (!eJ) return;
            const XJ = FJ.effect;
            if (!XJ) return;
            this._activeEffect = XJ, ZJ.getMeshUniformBuffer().bindToEffect(XJ, "Mesh"), ZJ.transferToEffect(cJ);
            const AJ = UJ.gn();
            this._uniformBuffer.bindToEffect(XJ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, UJ, ZJ, cJ, this.isFrozen), sc.b.Bind(AJ.currentRenderPassId, this._activeEffect, ZJ, cJ, this);
            const qJ = UJ.activeCamera;
            qJ ? this._uniformBuffer.updateFloat4("cameraInfo", qJ.minZ, qJ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const jJ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", jJ[0], jJ[1], jJ[2], jJ[3]), this._eventInfo.subMesh = FJ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), eJ.OBJECTSPACE_NORMALMAP && (cJ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const YJ = this._mustRebind(UJ, XJ, FJ, ZJ.visibility),
              hJ = AJ._features.needToAlwaysBindUniformBuffers;
            (0, oJ.e)(ZJ, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, hc.d)(this._activeEffect, this._vertexPullingMetadata);
            const DJ = this._uniformBuffer;
            if (YJ) {
              this.bindViewProjection(XJ);
              const cJ = this._getRadianceTexture();
              if (!DJ.useUbo || !this.isFrozen || !DJ.isSync || FJ._drawWrapper._forceRebindOnNextCall) {
                if (UJ.texturesEnabled) {
                  for (const JJ in this._samplersList) {
                    const cJ = this._samplersList[JJ];
                    cJ.value && (DJ.updateFloat2(cJ.samplerInfoName, cJ.value.coordinatesIndex, cJ.value.level), (0, oJ.q)(cJ.value, DJ, cJ.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (UJ._mirroredCameraPosition ? DJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : DJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, oJ.i)(UJ, eJ, DJ, iJ.e.White(), cJ, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && DJ.updateFloat("pointSize", this.pointSize);
                const JJ = this._uniformsArray;
                for (let cJ = 0, ZJ = JJ.length; cJ < ZJ; cJ++) {
                  const ZJ = JJ[cJ];
                  (void 0 === ZJ.requiredDefine || eJ[ZJ.requiredDefine]) && (4 === ZJ.numComponents ? (ZJ.populateVectorFromLinkedProperties(dJ.h.Vector4[0]), DJ.updateVector4(ZJ.name, dJ.h.Vector4[0])) : 3 === ZJ.numComponents ? (ZJ.populateVectorFromLinkedProperties(dJ.h.Pn[0]), DJ.updateVector3(ZJ.name, dJ.h.Pn[0])) : 2 === ZJ.numComponents ? (ZJ.populateVectorFromLinkedProperties(dJ.h.Vector2[0]), DJ.updateFloat2(ZJ.name, dJ.h.Vector2[0].x, dJ.h.Vector2[0].y)) : 1 === ZJ.numComponents && DJ.updateFloat(ZJ.name, ZJ.linkedProperties[ZJ.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * UJ.environmentIntensity, this._lightingInfos.w = 1, DJ.updateVector4("vLightingIntensity", this._lightingInfos), DJ.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (UJ.texturesEnabled) {
                for (const JJ in this._samplersList) {
                  const cJ = this._samplersList[JJ];
                  cJ.value && DJ.setTexture(cJ.samplerName, cJ.value)
                }
                if ((0, oJ.j)(UJ, eJ, DJ, cJ, this.realTimeFiltering), eJ.ENVIRONMENTBRDF && DJ.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), eJ.FUZZENVIRONMENTBRDF && DJ.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), eJ.REFRACTED_BACKGROUND && (DJ.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), DJ.Y5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), dJ.h.Pn[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), DJ.updateVector3("vBackgroundRefractionInfos", dJ.h.Pn[1])), (eJ.ANISOTROPIC || eJ.FUZZ || eJ.REFRACTED_BACKGROUND || eJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && DJ.setTexture("blueNoiseSampler", JJ._noiseTextures[this.Qy().uniqueId]), eJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const JJ = this.sssIrradianceTexture.getSize().width,
                    cJ = this.sssIrradianceTexture.getSize().height;
                  DJ.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), DJ.setTexture("sceneDepthSampler", this.sssDepthTexture), DJ.updateFloat2("renderTargetSize", JJ, cJ)
                }
              }
              this.Qy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZJ) && this.Qy().depthPeelingRenderer.bind(XJ), this._eventInfo.subMesh = FJ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Yc.e)(this._activeEffect, this, UJ), this.bindEyePosition(XJ)
            } else hJ && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, UJ, UJ.gn(), FJ), !YJ && this.isFrozen && !hJ || !UJ.lightsEnabled || this._disableLighting || (0, oJ.k)(UJ, ZJ, this._activeEffect, eJ, this._maxSimultaneousLights), !YJ && this.isFrozen || (this.bindView(XJ), (0, oJ.h)(UJ, ZJ, this._activeEffect, !0), eJ.NUM_MORPH_INFLUENCERS && (0, oJ.m)(ZJ, this._activeEffect), eJ.BAKED_VERTEX_ANIMATION_TEXTURE && ZJ.bakedVertexAnimationManager?.bind(XJ, eJ.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, oJ.l)(eJ, this._activeEffect, UJ)), this._afterBind(ZJ, this._activeEffect, FJ), DJ.update()
          }
          getAnimatables() {
            const JJ = super.getAnimatables();
            for (const cJ in this._samplersList) {
              const ZJ = this._samplersList[cJ];
              ZJ.value && ZJ.value.animations && ZJ.value.animations.length > 0 && JJ.push(ZJ.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && JJ.push(this._radianceTexture), JJ
          }
          getActiveTextures() {
            const JJ = super.getActiveTextures();
            for (const cJ in this._samplersList) {
              const ZJ = this._samplersList[cJ];
              ZJ.value && JJ.push(ZJ.value)
            }
            return this._radianceTexture && JJ.push(this._radianceTexture), JJ
          }
          hasTexture(JJ) {
            if (super.hasTexture(JJ)) return !0;
            for (const cJ in this._samplersList) {
              if (this._samplersList[cJ].value === JJ) return !0
            }
            return this._radianceTexture === JJ
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(JJ, cJ) {
            if (this._breakShaderLoadedCheck = !0, cJ) {
              this._environmentBRDFTexture && this.Qy().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Qy().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const JJ in this._samplersList) {
                const cJ = this._samplersList[JJ];
                cJ.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(JJ, cJ)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Qy().environmentTexture
          }
          _prepareEffect(cJ, ZJ, FJ) {
            let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(cJ, ZJ, FJ, XJ, AJ), !FJ.isDirty) return null;
            FJ.markAsProcessed();
            const qJ = this.Qy().gn(),
              jJ = new tJ.b;
            let YJ = 0;
            FJ.USESPHERICALINVERTEX && jJ.addFallback(YJ++, "USESPHERICALINVERTEX"), FJ.FOG && jJ.addFallback(YJ, "FOG"), FJ.SPECULARAA && jJ.addFallback(YJ, "SPECULARAA"), FJ.POINTSIZE && jJ.addFallback(YJ, "POINTSIZE"), FJ.LOGARITHMICDEPTH && jJ.addFallback(YJ, "LOGARITHMICDEPTH"), FJ.PARALLAX && jJ.addFallback(YJ, "PARALLAX"), FJ.PARALLAX_RHS && jJ.addFallback(YJ, "PARALLAX_RHS"), FJ.PARALLAXOCCLUSION && jJ.addFallback(YJ++, "PARALLAXOCCLUSION"), FJ.ENVIRONMENTBRDF && jJ.addFallback(YJ++, "ENVIRONMENTBRDF"), FJ.TANGENT && jJ.addFallback(YJ++, "TANGENT"), YJ = (0, oJ.t)(FJ, jJ, this._maxSimultaneousLights, YJ), FJ.SPECULARTERM && jJ.addFallback(YJ++, "SPECULARTERM"), FJ.USESPHERICALFROMREFLECTIONMAP && jJ.addFallback(YJ++, "USESPHERICALFROMREFLECTIONMAP"), FJ.USEIRRADIANCEMAP && jJ.addFallback(YJ++, "USEIRRADIANCEMAP"), FJ.NORMAL && jJ.addFallback(YJ++, "NORMAL"), FJ.VERTEXCOLOR && jJ.addFallback(YJ++, "VERTEXCOLOR"), FJ.MORPHTARGETS && jJ.addFallback(YJ++, "MORPHTARGETS"), FJ.MULTIVIEW && jJ.addFallback(0, "MULTIVIEW");
            const hJ = [zJ.n.PositionKind];
            FJ.NORMAL && hJ.push(zJ.n.NormalKind), FJ.TANGENT && hJ.push(zJ.n.TangentKind);
            for (let JJ = 1; JJ <= 6; ++JJ) FJ["UV" + JJ] && hJ.push(`uv${1===JJ?"":JJ}`);
            FJ.VERTEXCOLOR && hJ.push(zJ.n.ColorKind), (0, oJ.z)(hJ, cJ, FJ, jJ), (0, oJ.D)(hJ, FJ), (0, oJ.H)(hJ, cJ, FJ), (0, oJ.w)(hJ, cJ, FJ);
            let DJ = "openpbr";
            const sJ = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const JJ in this._uniformsList) sJ.push(JJ);
            const nJ = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            FJ.FUZZENVIRONMENTBRDF && nJ.push("environmentFuzzBrdfSampler"), FJ.REFRACTED_BACKGROUND && nJ.push("backgroundRefractionSampler"), (FJ.ANISOTROPIC || FJ.FUZZ || FJ.REFRACTED_BACKGROUND || FJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && nJ.push("blueNoiseSampler"), FJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (nJ.push("sceneIrradianceSampler"), nJ.push("sceneDepthSampler"));
            for (const JJ in this._samplersList) {
              const cJ = this._samplersList[JJ];
              nJ.push(cJ.samplerName), sJ.push(cJ.samplerInfoName), sJ.push(cJ.samplerMatrixName)
            }(0, oJ.kb)(sJ, nJ, !0);
            const GJ = ["Material", "Scene", "Mesh"],
              fJ = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: FJ.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = jJ, this._eventInfo.fallbackRank = YJ, this._eventInfo.defines = FJ, this._eventInfo.uniforms = sJ, this._eventInfo.attributes = hJ, this._eventInfo.samplers = nJ, this._eventInfo.uniformBuffersNames = GJ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cJ, this._eventInfo.indexParameters = fJ, this._callbackPluginEventGeneric(128, this._eventInfo), sc.b.AddUniformsAndSamplers(sJ, nJ), uJ.e.AddUniforms(sJ), uJ.e.AddSamplers(nJ), (0, Yc.c)(sJ), this._useVertexPulling) {
              const JJ = ZJ?.geometry;
              JJ && (this._vertexPullingMetadata = (0, hc.f)(JJ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((JJ, cJ) => {
                sJ.push(`vp_${cJ}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            LJ.e && (LJ.e.PrepareUniforms(sJ, FJ), LJ.e.PrepareSamplers(nJ, FJ)), (0, oJ.mb)({
              uniformsNames: sJ,
              uniformBuffersNames: GJ,
              samplers: nJ,
              defines: FJ,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const xJ = {};
            this.customShaderNameResolve && (DJ = this.customShaderNameResolve(DJ, sJ, GJ, nJ, FJ, hJ, xJ));
            const rJ = FJ.toString(),
              vJ = qJ.createEffect(DJ, {
                attributes: hJ,
                uniformsNames: sJ,
                uniformBuffersNames: GJ,
                samplers: nJ,
                defines: rJ,
                fallbacks: jJ,
                onCompiled: UJ,
                onError: eJ,
                indexParameters: fJ,
                processFinalCode: xJ.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: FJ.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: JJ._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, qJ);
            return this._eventInfo.customCode = void 0, vJ
          }
          _prepareDefines(cJ, ZJ, FJ) {
            let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              XJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const AJ = ZJ.hasThinInstances,
              qJ = this.Qy(),
              jJ = qJ.gn();
            (0, oJ.V)(qJ, cJ, FJ, !0, this._maxSimultaneousLights, this._disableLighting), FJ._needNormals = !0, (0, oJ._)(qJ, FJ);
            const YJ = this.needAlphaBlendingForMesh(cJ) && this.Qy().useOrderIndependentTransparency;
            if ((0, oJ.eb)(qJ, FJ, this.canRenderToMRT && !YJ), (0, oJ.cb)(qJ, FJ, YJ), sc.b.PrepareDefines(jJ.currentRenderPassId, cJ, FJ), FJ._areTexturesDirty) {
              FJ._needUVs = !1;
              for (let JJ = 1; JJ <= 6; ++JJ) FJ["MAINUV" + JJ] = !1;
              if (qJ.texturesEnabled) {
                for (const ZJ in this._samplersList) {
                  const JJ = this._samplersList[ZJ];
                  JJ.value ? ((0, oJ.X)(JJ.value, FJ, JJ.textureDefine), FJ[JJ.textureDefine + "_GAMMA"] = JJ.value.gammaSpace) : FJ[JJ.textureDefine] = !1
                }
                const JJ = this._getRadianceTexture(),
                  cJ = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || jJ.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, oJ.T)(qJ, JJ, FJ, this.realTimeFiltering, this.realTimeFilteringQuality, !cJ), this._baseMetalnessTexture && (FJ.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), FJ.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, FJ.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, FJ.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, FJ.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, FJ.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, FJ.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, FJ.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, FJ.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, FJ.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, FJ.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, FJ.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && BJ.d.DiffuseTextureEnabled ? (FJ.PARALLAX = !0, FJ.PARALLAX_RHS = qJ.useRightHandedSystem, FJ.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : FJ.PARALLAX = !1, FJ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (FJ.PARALLAX = !1, FJ.PARALLAX_RHS = !1, FJ.PARALLAXOCCLUSION = !1, FJ.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && BJ.d.ReflectionTextureEnabled ? (FJ.ENVIRONMENTBRDF = !0, FJ.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (FJ.ENVIRONMENTBRDF = !1, FJ.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? FJ.FUZZENVIRONMENTBRDF = !0 : FJ.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  FJ.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && BJ.d.RefractionTextureEnabled, FJ.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, FJ.REFRACTED_LIGHTS = !0;
                  const JJ = this._getRadianceTexture();
                  JJ ? (FJ.REFRACTED_ENVIRONMENT = BJ.d.RefractionTextureEnabled, FJ.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Qy().useRightHandedSystem ? !JJ.invertZ : JJ.invertZ, FJ.REFRACTED_ENVIRONMENT_LOCAL_CUBE = JJ.isCube && JJ.boundingBoxSize) : FJ.REFRACTED_ENVIRONMENT = !1
                } else FJ.REFRACTED_BACKGROUND = !1, FJ.REFRACTED_LIGHTS = !1, FJ.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? FJ.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : FJ.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === eJ.c.LIGHTFALLOFF_STANDARD ? (FJ.USEPHYSICALLIGHTFALLOFF = !1, FJ.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === eJ.c.LIGHTFALLOFF_GLTF ? (FJ.USEPHYSICALLIGHTFALLOFF = !1, FJ.USEGLTFLIGHTFALLOFF = !0) : (FJ.USEPHYSICALLIGHTFALLOFF = !0, FJ.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? FJ.TWOSIDEDLIGHTING = !0 : FJ.TWOSIDEDLIGHTING = !1, FJ.MIRRORED = !!qJ._mirroredCameraPosition, FJ.SPECULARAA = jJ.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(FJ._areTexturesDirty || FJ._areMiscDirty) && (FJ.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, FJ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, FJ.ALPHABLEND = this.needAlphaBlendingForMesh(cJ)), FJ._areTexturesDirty && (FJ.TEXTURE_REPETITION_MODE = jJ.version > 1 || jJ.isWebGPU ? this.textureRepetitionMode : 0), FJ._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(FJ), FJ.FORCENORMALFORWARD = this._forceNormalForward, FJ.RADIANCEOCCLUSION = this._useRadianceOcclusion, FJ.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && JJ._noiseTextures[qJ.uniqueId] && BJ.d.ReflectionTextureEnabled ? (FJ.ANISOTROPIC = !0, cJ.isVerticesDataPresent(zJ.n.TangentKind) || (FJ._needUVs = !0, FJ.MAINUV1 = !0), this._useGltfStyleAnisotropy && (FJ.USE_GLTF_STYLE_ANISOTROPY = !0), FJ.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, FJ.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (FJ.ANISOTROPIC = !1, FJ.USE_GLTF_STYLE_ANISOTROPY = !1, FJ.ANISOTROPIC_BASE = !1, FJ.ANISOTROPIC_COAT = !1), FJ.THIN_FILM = this.thinFilmWeight > 0, FJ.IRIDESCENCE = this.thinFilmWeight > 0, FJ.DISPERSION = this.transmissionDispersionScale > 0, FJ.SCATTERING = this.hasScattering;
            if (FJ.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, FJ.TRANSMISSION_SLAB = this.transmissionWeight > 0, FJ.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, FJ.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !FJ.PREPASS && (FJ.SUBSURFACE_SLAB || FJ.TRANSMISSION_SLAB_VOLUME)) {
              let JJ = !1;
              if (!this.sssIrradianceTexture && qJ.geometryBufferRenderer) {
                const cJ = qJ.geometryBufferRenderer.getTextureIndex(Nc.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = qJ.geometryBufferRenderer.getGBuffer().textures[cJ], JJ = !0
              }
              if (!this.sssDepthTexture && qJ.geometryBufferRenderer) {
                const cJ = qJ.geometryBufferRenderer.getTextureIndex(Nc.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = qJ.geometryBufferRenderer.getGBuffer().textures[cJ], JJ = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (FJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, JJ && (FJ.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            FJ.FUZZ = this.fuzzWeight > 0 && BJ.d.ReflectionTextureEnabled, FJ.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, FJ.FUZZ ? (cJ.isVerticesDataPresent(zJ.n.TangentKind) || (FJ._needUVs = !0, FJ.MAINUV1 = !0), this._environmentFuzzBRDFTexture = PJ(this.Qy()), FJ.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, FJ.FUZZENVIRONMENTBRDF = !1, FJ.FUZZ_IBL_SAMPLES = 0), FJ._areMiscDirty && ((0, oJ.Y)(cJ, qJ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cJ), FJ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZJ, this._isVertexOutputInvariant), FJ.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !cJ.isVerticesDataPresent(zJ.n.NormalKind), FJ.DEBUGMODE = this._debugMode), (0, oJ.P)(qJ, jJ, this, FJ, !!UJ, XJ, AJ), this._eventInfo.defines = FJ, this._eventInfo.mesh = cJ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, oJ.L)(cJ, FJ, !0, !0, !0, this._transparencyMode !== eJ.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, cJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, qJ = new WeakMap, jJ = new WeakMap, YJ = new WeakMap, hJ = new WeakMap, DJ = new WeakMap, sJ = new WeakMap, nJ = new WeakMap, GJ = new WeakMap, fJ = new WeakMap, xJ = new WeakMap, rJ = new WeakMap, vJ = new WeakMap, mJ = new WeakMap, QJ = new WeakMap, EJ = new WeakMap, VJ = new WeakMap, KJ = new WeakMap, wJ = new WeakMap, WJ = new WeakMap, gJ = new WeakMap, HJ = new WeakMap, pJ = new WeakMap, NJ = new WeakMap, OJ = new WeakMap, TJ = new WeakMap, CJ = new WeakMap, RJ = new WeakMap, aJ = new WeakMap, lJ = new WeakMap, Jc = new WeakMap, cc = new WeakMap, Zc = new WeakMap, Fc = new WeakMap, Uc = new WeakMap, ec = new WeakMap, Xc = new WeakMap, Ac = new WeakMap, qc = new WeakMap, jc = new WeakMap, nc = new WeakMap, Gc = new WeakMap, fc = new WeakMap, xc = new WeakMap, rc = new WeakMap, vc = new WeakMap, mc = new WeakMap, Qc = new WeakMap, Ec = new WeakMap, yc = new WeakMap, Sc = new WeakMap, Ic = new WeakMap, Mc = new WeakMap, bc = new WeakMap, wc = new WeakMap, Wc = new WeakMap, gc = new WeakMap, Hc = new WeakMap, Pc = new WeakMap, kc = new WeakMap, pc = new WeakMap, dc = new WeakMap, zc = new WeakMap, Oc = new WeakMap, Cc = new WeakMap, Lc = new WeakMap, ac = new WeakMap, oc = new WeakMap, lc = new WeakMap, JZ = new WeakMap, cZ = new WeakMap, ZZ = new WeakMap, FZ = new WeakMap, UZ = new WeakMap, eZ = new WeakMap, XZ = new WeakMap, AZ = new WeakMap, qZ = new WeakMap, jZ = new WeakMap, YZ = new WeakMap, hZ = new WeakMap, DZ = new WeakMap, sZ = new WeakMap, nZ = new WeakMap, GZ = new WeakMap, fZ = new WeakMap, xZ = new WeakMap, rZ = new WeakMap, vZ = new WeakMap, mZ = new WeakMap, QZ = new WeakMap, EZ = new WeakMap, VZ = new WeakMap, KZ = new WeakMap, yZ = new WeakMap, SZ = new WeakMap, IZ = new WeakMap, MZ = new WeakMap, (() => {
          const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(wU[Symbol.metadata] ?? null) : void 0;
          bZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], wZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], kZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], NZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], OZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], TZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], iZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], LZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], BZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], tZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], oZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], eF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], XF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], AF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], DF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], sF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], fF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], KF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], IF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], wF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], HF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], kF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], iF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], LF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], aF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], tF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, SJ.b)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], ZU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], FU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], UU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], eU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], XU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], AU = [(0, SJ.F)()], qU = [(0, SJ.F)()], jU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsLightsDirty")], nU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsLightsDirty")], fU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], vU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], mU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], VU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], KU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], yU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], SU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], IU = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], MU = [(0, SJ.f)("_markAllSubMeshesAsMiscDirty")], bU = [(0, SJ.F)()], (0, yJ.d)(JJ, null, bZ, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseWeight" in JJ,
              get: JJ => JJ.baseWeight,
              set: (JJ, cJ) => {
                JJ.baseWeight = cJ
              }
            },
            metadata: cJ
          }, gU, HU), (0, yJ.d)(JJ, null, wZ, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseWeightTexture" in JJ,
              get: JJ => JJ.baseWeightTexture,
              set: (JJ, cJ) => {
                JJ.baseWeightTexture = cJ
              }
            },
            metadata: cJ
          }, PU, kU), (0, yJ.d)(JJ, null, WZ, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseColor" in JJ,
              get: JJ => JJ.baseColor,
              set: (JJ, cJ) => {
                JJ.baseColor = cJ
              }
            },
            metadata: cJ
          }, pU, dU), (0, yJ.d)(JJ, null, gZ, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseColorTexture" in JJ,
              get: JJ => JJ.baseColorTexture,
              set: (JJ, cJ) => {
                JJ.baseColorTexture = cJ
              }
            },
            metadata: cJ
          }, zU, NU), (0, yJ.d)(JJ, null, HZ, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseDiffuseRoughness" in JJ,
              get: JJ => JJ.baseDiffuseRoughness,
              set: (JJ, cJ) => {
                JJ.baseDiffuseRoughness = cJ
              }
            },
            metadata: cJ
          }, OU, TU), (0, yJ.d)(JJ, null, PZ, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseDiffuseRoughnessTexture" in JJ,
              get: JJ => JJ.baseDiffuseRoughnessTexture,
              set: (JJ, cJ) => {
                JJ.baseDiffuseRoughnessTexture = cJ
              }
            },
            metadata: cJ
          }, CU, uU), (0, yJ.d)(JJ, null, kZ, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseMetalness" in JJ,
              get: JJ => JJ.baseMetalness,
              set: (JJ, cJ) => {
                JJ.baseMetalness = cJ
              }
            },
            metadata: cJ
          }, iU, RU), (0, yJ.d)(JJ, null, pZ, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "baseMetalnessTexture" in JJ,
              get: JJ => JJ.baseMetalnessTexture,
              set: (JJ, cJ) => {
                JJ.baseMetalnessTexture = cJ
              }
            },
            metadata: cJ
          }, LU, aU), (0, yJ.d)(JJ, null, dZ, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularWeight" in JJ,
              get: JJ => JJ.specularWeight,
              set: (JJ, cJ) => {
                JJ.specularWeight = cJ
              }
            },
            metadata: cJ
          }, BU, tU), (0, yJ.d)(JJ, null, zZ, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularWeightTexture" in JJ,
              get: JJ => JJ.specularWeightTexture,
              set: (JJ, cJ) => {
                JJ.specularWeightTexture = cJ
              }
            },
            metadata: cJ
          }, oU, lU), (0, yJ.d)(JJ, null, NZ, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularColor" in JJ,
              get: JJ => JJ.specularColor,
              set: (JJ, cJ) => {
                JJ.specularColor = cJ
              }
            },
            metadata: cJ
          }, Je, ce), (0, yJ.d)(JJ, null, OZ, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularColorTexture" in JJ,
              get: JJ => JJ.specularColorTexture,
              set: (JJ, cJ) => {
                JJ.specularColorTexture = cJ
              }
            },
            metadata: cJ
          }, Ze, Fe), (0, yJ.d)(JJ, null, TZ, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularRoughness" in JJ,
              get: JJ => JJ.specularRoughness,
              set: (JJ, cJ) => {
                JJ.specularRoughness = cJ
              }
            },
            metadata: cJ
          }, Ue, ee), (0, yJ.d)(JJ, null, CZ, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularRoughnessTexture" in JJ,
              get: JJ => JJ.specularRoughnessTexture,
              set: (JJ, cJ) => {
                JJ.specularRoughnessTexture = cJ
              }
            },
            metadata: cJ
          }, Xe, Ae), (0, yJ.d)(JJ, null, uZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularRoughnessAnisotropy" in JJ,
              get: JJ => JJ.specularRoughnessAnisotropy,
              set: (JJ, cJ) => {
                JJ.specularRoughnessAnisotropy = cJ
              }
            },
            metadata: cJ
          }, qe, je), (0, yJ.d)(JJ, null, iZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularRoughnessAnisotropyTexture" in JJ,
              get: JJ => JJ.specularRoughnessAnisotropyTexture,
              set: (JJ, cJ) => {
                JJ.specularRoughnessAnisotropyTexture = cJ
              }
            },
            metadata: cJ
          }, Ye, he), (0, yJ.d)(JJ, null, RZ, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularIor" in JJ,
              get: JJ => JJ.specularIor,
              set: (JJ, cJ) => {
                JJ.specularIor = cJ
              }
            },
            metadata: cJ
          }, De, se), (0, yJ.d)(JJ, null, LZ, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionWeight" in JJ,
              get: JJ => JJ.transmissionWeight,
              set: (JJ, cJ) => {
                JJ.transmissionWeight = cJ
              }
            },
            metadata: cJ
          }, ne, Ge), (0, yJ.d)(JJ, null, aZ, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionWeightTexture" in JJ,
              get: JJ => JJ.transmissionWeightTexture,
              set: (JJ, cJ) => {
                JJ.transmissionWeightTexture = cJ
              }
            },
            metadata: cJ
          }, fe, xe), (0, yJ.d)(JJ, null, BZ, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionColor" in JJ,
              get: JJ => JJ.transmissionColor,
              set: (JJ, cJ) => {
                JJ.transmissionColor = cJ
              }
            },
            metadata: cJ
          }, re, ve), (0, yJ.d)(JJ, null, tZ, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionColorTexture" in JJ,
              get: JJ => JJ.transmissionColorTexture,
              set: (JJ, cJ) => {
                JJ.transmissionColorTexture = cJ
              }
            },
            metadata: cJ
          }, me, Qe), (0, yJ.d)(JJ, null, oZ, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionDepth" in JJ,
              get: JJ => JJ.transmissionDepth,
              set: (JJ, cJ) => {
                JJ.transmissionDepth = cJ
              }
            },
            metadata: cJ
          }, Ee, Ve), (0, yJ.d)(JJ, null, lZ, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionDepthTexture" in JJ,
              get: JJ => JJ.transmissionDepthTexture,
              set: (JJ, cJ) => {
                JJ.transmissionDepthTexture = cJ
              }
            },
            metadata: cJ
          }, Ke, ye), (0, yJ.d)(JJ, null, JF, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionScatter" in JJ,
              get: JJ => JJ.transmissionScatter,
              set: (JJ, cJ) => {
                JJ.transmissionScatter = cJ
              }
            },
            metadata: cJ
          }, Se, Ie), (0, yJ.d)(JJ, null, cF, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionScatterTexture" in JJ,
              get: JJ => JJ.transmissionScatterTexture,
              set: (JJ, cJ) => {
                JJ.transmissionScatterTexture = cJ
              }
            },
            metadata: cJ
          }, Me, be), (0, yJ.d)(JJ, null, ZF, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionScatterAnisotropy" in JJ,
              get: JJ => JJ.transmissionScatterAnisotropy,
              set: (JJ, cJ) => {
                JJ.transmissionScatterAnisotropy = cJ
              }
            },
            metadata: cJ
          }, we, We), (0, yJ.d)(JJ, null, FF, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionDispersionScale" in JJ,
              get: JJ => JJ.transmissionDispersionScale,
              set: (JJ, cJ) => {
                JJ.transmissionDispersionScale = cJ
              }
            },
            metadata: cJ
          }, ge, He), (0, yJ.d)(JJ, null, UF, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionDispersionScaleTexture" in JJ,
              get: JJ => JJ.transmissionDispersionScaleTexture,
              set: (JJ, cJ) => {
                JJ.transmissionDispersionScaleTexture = cJ
              }
            },
            metadata: cJ
          }, Pe, ke), (0, yJ.d)(JJ, null, eF, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transmissionDispersionAbbeNumber" in JJ,
              get: JJ => JJ.transmissionDispersionAbbeNumber,
              set: (JJ, cJ) => {
                JJ.transmissionDispersionAbbeNumber = cJ
              }
            },
            metadata: cJ
          }, pe, de), (0, yJ.d)(JJ, null, XF, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceWeight" in JJ,
              get: JJ => JJ.subsurfaceWeight,
              set: (JJ, cJ) => {
                JJ.subsurfaceWeight = cJ
              }
            },
            metadata: cJ
          }, ze, Ne), (0, yJ.d)(JJ, null, AF, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceWeightTexture" in JJ,
              get: JJ => JJ.subsurfaceWeightTexture,
              set: (JJ, cJ) => {
                JJ.subsurfaceWeightTexture = cJ
              }
            },
            metadata: cJ
          }, Oe, Te), (0, yJ.d)(JJ, null, qF, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceColor" in JJ,
              get: JJ => JJ.subsurfaceColor,
              set: (JJ, cJ) => {
                JJ.subsurfaceColor = cJ
              }
            },
            metadata: cJ
          }, Ce, ue), (0, yJ.d)(JJ, null, jF, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceColorTexture" in JJ,
              get: JJ => JJ.subsurfaceColorTexture,
              set: (JJ, cJ) => {
                JJ.subsurfaceColorTexture = cJ
              }
            },
            metadata: cJ
          }, ie, Re), (0, yJ.d)(JJ, null, YF, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceRadius" in JJ,
              get: JJ => JJ.subsurfaceRadius,
              set: (JJ, cJ) => {
                JJ.subsurfaceRadius = cJ
              }
            },
            metadata: cJ
          }, Le, ae), (0, yJ.d)(JJ, null, hF, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceRadiusScale" in JJ,
              get: JJ => JJ.subsurfaceRadiusScale,
              set: (JJ, cJ) => {
                JJ.subsurfaceRadiusScale = cJ
              }
            },
            metadata: cJ
          }, Be, te), (0, yJ.d)(JJ, null, DF, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceRadiusScaleTexture" in JJ,
              get: JJ => JJ.subsurfaceRadiusScaleTexture,
              set: (JJ, cJ) => {
                JJ.subsurfaceRadiusScaleTexture = cJ
              }
            },
            metadata: cJ
          }, oe, le), (0, yJ.d)(JJ, null, sF, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: JJ => "subsurfaceScatterAnisotropy" in JJ,
              get: JJ => JJ.subsurfaceScatterAnisotropy,
              set: (JJ, cJ) => {
                JJ.subsurfaceScatterAnisotropy = cJ
              }
            },
            metadata: cJ
          }, JX, cX), (0, yJ.d)(JJ, null, nF, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatWeight" in JJ,
              get: JJ => JJ.coatWeight,
              set: (JJ, cJ) => {
                JJ.coatWeight = cJ
              }
            },
            metadata: cJ
          }, ZX, FX), (0, yJ.d)(JJ, null, GF, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatWeightTexture" in JJ,
              get: JJ => JJ.coatWeightTexture,
              set: (JJ, cJ) => {
                JJ.coatWeightTexture = cJ
              }
            },
            metadata: cJ
          }, UX, eX), (0, yJ.d)(JJ, null, fF, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatColor" in JJ,
              get: JJ => JJ.coatColor,
              set: (JJ, cJ) => {
                JJ.coatColor = cJ
              }
            },
            metadata: cJ
          }, XX, AX), (0, yJ.d)(JJ, null, xF, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatColorTexture" in JJ,
              get: JJ => JJ.coatColorTexture,
              set: (JJ, cJ) => {
                JJ.coatColorTexture = cJ
              }
            },
            metadata: cJ
          }, qX, jX), (0, yJ.d)(JJ, null, rF, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatRoughness" in JJ,
              get: JJ => JJ.coatRoughness,
              set: (JJ, cJ) => {
                JJ.coatRoughness = cJ
              }
            },
            metadata: cJ
          }, YX, hX), (0, yJ.d)(JJ, null, vF, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatRoughnessTexture" in JJ,
              get: JJ => JJ.coatRoughnessTexture,
              set: (JJ, cJ) => {
                JJ.coatRoughnessTexture = cJ
              }
            },
            metadata: cJ
          }, DX, sX), (0, yJ.d)(JJ, null, mF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatRoughnessAnisotropy" in JJ,
              get: JJ => JJ.coatRoughnessAnisotropy,
              set: (JJ, cJ) => {
                JJ.coatRoughnessAnisotropy = cJ
              }
            },
            metadata: cJ
          }, nX, GX), (0, yJ.d)(JJ, null, QF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatRoughnessAnisotropyTexture" in JJ,
              get: JJ => JJ.coatRoughnessAnisotropyTexture,
              set: (JJ, cJ) => {
                JJ.coatRoughnessAnisotropyTexture = cJ
              }
            },
            metadata: cJ
          }, fX, xX), (0, yJ.d)(JJ, null, EF, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatIor" in JJ,
              get: JJ => JJ.coatIor,
              set: (JJ, cJ) => {
                JJ.coatIor = cJ
              }
            },
            metadata: cJ
          }, rX, vX), (0, yJ.d)(JJ, null, VF, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatDarkening" in JJ,
              get: JJ => JJ.coatDarkening,
              set: (JJ, cJ) => {
                JJ.coatDarkening = cJ
              }
            },
            metadata: cJ
          }, mX, QX), (0, yJ.d)(JJ, null, KF, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "coatDarkeningTexture" in JJ,
              get: JJ => JJ.coatDarkeningTexture,
              set: (JJ, cJ) => {
                JJ.coatDarkeningTexture = cJ
              }
            },
            metadata: cJ
          }, EX, VX), (0, yJ.d)(JJ, null, yF, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzWeight" in JJ,
              get: JJ => JJ.fuzzWeight,
              set: (JJ, cJ) => {
                JJ.fuzzWeight = cJ
              }
            },
            metadata: cJ
          }, KX, yX), (0, yJ.d)(JJ, null, SF, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzWeightTexture" in JJ,
              get: JJ => JJ.fuzzWeightTexture,
              set: (JJ, cJ) => {
                JJ.fuzzWeightTexture = cJ
              }
            },
            metadata: cJ
          }, SX, IX), (0, yJ.d)(JJ, null, IF, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzColor" in JJ,
              get: JJ => JJ.fuzzColor,
              set: (JJ, cJ) => {
                JJ.fuzzColor = cJ
              }
            },
            metadata: cJ
          }, MX, bX), (0, yJ.d)(JJ, null, MF, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzColorTexture" in JJ,
              get: JJ => JJ.fuzzColorTexture,
              set: (JJ, cJ) => {
                JJ.fuzzColorTexture = cJ
              }
            },
            metadata: cJ
          }, wX, WX), (0, yJ.d)(JJ, null, bF, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzRoughness" in JJ,
              get: JJ => JJ.fuzzRoughness,
              set: (JJ, cJ) => {
                JJ.fuzzRoughness = cJ
              }
            },
            metadata: cJ
          }, gX, HX), (0, yJ.d)(JJ, null, wF, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "fuzzRoughnessTexture" in JJ,
              get: JJ => JJ.fuzzRoughnessTexture,
              set: (JJ, cJ) => {
                JJ.fuzzRoughnessTexture = cJ
              }
            },
            metadata: cJ
          }, PX, kX), (0, yJ.d)(JJ, null, WF, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryThinWalled" in JJ,
              get: JJ => JJ.geometryThinWalled,
              set: (JJ, cJ) => {
                JJ.geometryThinWalled = cJ
              }
            },
            metadata: cJ
          }, pX, dX), (0, yJ.d)(JJ, null, gF, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryNormalTexture" in JJ,
              get: JJ => JJ.geometryNormalTexture,
              set: (JJ, cJ) => {
                JJ.geometryNormalTexture = cJ
              }
            },
            metadata: cJ
          }, zX, NX), (0, yJ.d)(JJ, null, HF, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryTangent" in JJ,
              get: JJ => JJ.geometryTangent,
              set: (JJ, cJ) => {
                JJ.geometryTangent = cJ
              }
            },
            metadata: cJ
          }, OX, TX), (0, yJ.d)(JJ, null, PF, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryTangentTexture" in JJ,
              get: JJ => JJ.geometryTangentTexture,
              set: (JJ, cJ) => {
                JJ.geometryTangentTexture = cJ
              }
            },
            metadata: cJ
          }, CX, uX), (0, yJ.d)(JJ, null, kF, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryCoatNormalTexture" in JJ,
              get: JJ => JJ.geometryCoatNormalTexture,
              set: (JJ, cJ) => {
                JJ.geometryCoatNormalTexture = cJ
              }
            },
            metadata: cJ
          }, iX, RX), (0, yJ.d)(JJ, null, pF, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryCoatTangent" in JJ,
              get: JJ => JJ.geometryCoatTangent,
              set: (JJ, cJ) => {
                JJ.geometryCoatTangent = cJ
              }
            },
            metadata: cJ
          }, LX, aX), (0, yJ.d)(JJ, null, dF, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryCoatTangentTexture" in JJ,
              get: JJ => JJ.geometryCoatTangentTexture,
              set: (JJ, cJ) => {
                JJ.geometryCoatTangentTexture = cJ
              }
            },
            metadata: cJ
          }, BX, tX), (0, yJ.d)(JJ, null, zF, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryOpacity" in JJ,
              get: JJ => JJ.geometryOpacity,
              set: (JJ, cJ) => {
                JJ.geometryOpacity = cJ
              }
            },
            metadata: cJ
          }, oX, lX), (0, yJ.d)(JJ, null, NF, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryOpacityTexture" in JJ,
              get: JJ => JJ.geometryOpacityTexture,
              set: (JJ, cJ) => {
                JJ.geometryOpacityTexture = cJ
              }
            },
            metadata: cJ
          }, JA, cA), (0, yJ.d)(JJ, null, OF, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryThickness" in JJ,
              get: JJ => JJ.geometryThickness,
              set: (JJ, cJ) => {
                JJ.geometryThickness = cJ
              }
            },
            metadata: cJ
          }, ZA, FA), (0, yJ.d)(JJ, null, TF, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "geometryThicknessTexture" in JJ,
              get: JJ => JJ.geometryThicknessTexture,
              set: (JJ, cJ) => {
                JJ.geometryThicknessTexture = cJ
              }
            },
            metadata: cJ
          }, UA, eA), (0, yJ.d)(JJ, null, CF, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissionLuminance" in JJ,
              get: JJ => JJ.emissionLuminance,
              set: (JJ, cJ) => {
                JJ.emissionLuminance = cJ
              }
            },
            metadata: cJ
          }, XA, AA), (0, yJ.d)(JJ, null, uF, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissionColor" in JJ,
              get: JJ => JJ.emissionColor,
              set: (JJ, cJ) => {
                JJ.emissionColor = cJ
              }
            },
            metadata: cJ
          }, qA, jA), (0, yJ.d)(JJ, null, iF, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissionColorTexture" in JJ,
              get: JJ => JJ.emissionColorTexture,
              set: (JJ, cJ) => {
                JJ.emissionColorTexture = cJ
              }
            },
            metadata: cJ
          }, YA, hA), (0, yJ.d)(JJ, null, RF, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmWeight" in JJ,
              get: JJ => JJ.thinFilmWeight,
              set: (JJ, cJ) => {
                JJ.thinFilmWeight = cJ
              }
            },
            metadata: cJ
          }, DA, sA), (0, yJ.d)(JJ, null, LF, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmWeightTexture" in JJ,
              get: JJ => JJ.thinFilmWeightTexture,
              set: (JJ, cJ) => {
                JJ.thinFilmWeightTexture = cJ
              }
            },
            metadata: cJ
          }, nA, GA), (0, yJ.d)(JJ, null, aF, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmThickness" in JJ,
              get: JJ => JJ.thinFilmThickness,
              set: (JJ, cJ) => {
                JJ.thinFilmThickness = cJ
              }
            },
            metadata: cJ
          }, fA, xA), (0, yJ.d)(JJ, null, BF, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmThicknessMin" in JJ,
              get: JJ => JJ.thinFilmThicknessMin,
              set: (JJ, cJ) => {
                JJ.thinFilmThicknessMin = cJ
              }
            },
            metadata: cJ
          }, rA, vA), (0, yJ.d)(JJ, null, tF, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmThicknessTexture" in JJ,
              get: JJ => JJ.thinFilmThicknessTexture,
              set: (JJ, cJ) => {
                JJ.thinFilmThicknessTexture = cJ
              }
            },
            metadata: cJ
          }, mA, QA), (0, yJ.d)(JJ, null, oF, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thinFilmIor" in JJ,
              get: JJ => JJ.thinFilmIor,
              set: (JJ, cJ) => {
                JJ.thinFilmIor = cJ
              }
            },
            metadata: cJ
          }, EA, VA), (0, yJ.d)(JJ, null, lF, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ambientOcclusionTexture" in JJ,
              get: JJ => JJ.ambientOcclusionTexture,
              set: (JJ, cJ) => {
                JJ.ambientOcclusionTexture = cJ
              }
            },
            metadata: cJ
          }, KA, yA), (0, yJ.d)(JJ, null, JU, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: JJ => "directIntensity" in JJ,
              get: JJ => JJ.directIntensity,
              set: (JJ, cJ) => {
                JJ.directIntensity = cJ
              }
            },
            metadata: cJ
          }, SA, IA), (0, yJ.d)(JJ, null, cU, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: JJ => "environmentIntensity" in JJ,
              get: JJ => JJ.environmentIntensity,
              set: (JJ, cJ) => {
                JJ.environmentIntensity = cJ
              }
            },
            metadata: cJ
          }, MA, bA), (0, yJ.d)(JJ, null, ZU, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useSpecularWeightFromTextureAlpha" in JJ,
              get: JJ => JJ.useSpecularWeightFromTextureAlpha,
              set: (JJ, cJ) => {
                JJ.useSpecularWeightFromTextureAlpha = cJ
              }
            },
            metadata: cJ
          }, wA, WA), (0, yJ.d)(JJ, null, FU, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: JJ => "forceAlphaTest" in JJ,
              get: JJ => JJ.forceAlphaTest,
              set: (JJ, cJ) => {
                JJ.forceAlphaTest = cJ
              }
            },
            metadata: cJ
          }, gA, HA), (0, yJ.d)(JJ, null, UU, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alphaCutOff" in JJ,
              get: JJ => JJ.alphaCutOff,
              set: (JJ, cJ) => {
                JJ.alphaCutOff = cJ
              }
            },
            metadata: cJ
          }, PA, kA), (0, yJ.d)(JJ, null, eU, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useAmbientOcclusionFromMetallicTextureRed" in JJ,
              get: JJ => JJ.useAmbientOcclusionFromMetallicTextureRed,
              set: (JJ, cJ) => {
                JJ.useAmbientOcclusionFromMetallicTextureRed = cJ
              }
            },
            metadata: cJ
          }, pA, dA), (0, yJ.d)(JJ, null, XU, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useAmbientInGrayScale" in JJ,
              get: JJ => JJ.useAmbientInGrayScale,
              set: (JJ, cJ) => {
                JJ.useAmbientInGrayScale = cJ
              }
            },
            metadata: cJ
          }, zA, NA), (0, yJ.d)(JJ, null, AU, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: JJ => "usePhysicalLightFalloff" in JJ,
              get: JJ => JJ.usePhysicalLightFalloff
            },
            metadata: cJ
          }, null, WU), (0, yJ.d)(JJ, null, qU, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useGLTFLightFalloff" in JJ,
              get: JJ => JJ.useGLTFLightFalloff
            },
            metadata: cJ
          }, null, WU), (0, yJ.d)(JJ, null, jU, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useObjectSpaceNormalMap" in JJ,
              get: JJ => JJ.useObjectSpaceNormalMap,
              set: (JJ, cJ) => {
                JJ.useObjectSpaceNormalMap = cJ
              }
            },
            metadata: cJ
          }, OA, TA), (0, yJ.d)(JJ, null, YU, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useParallax" in JJ,
              get: JJ => JJ.useParallax,
              set: (JJ, cJ) => {
                JJ.useParallax = cJ
              }
            },
            metadata: cJ
          }, CA, uA), (0, yJ.d)(JJ, null, hU, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useParallaxOcclusion" in JJ,
              get: JJ => JJ.useParallaxOcclusion,
              set: (JJ, cJ) => {
                JJ.useParallaxOcclusion = cJ
              }
            },
            metadata: cJ
          }, iA, RA), (0, yJ.d)(JJ, null, DU, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: JJ => "parallaxScaleBias" in JJ,
              get: JJ => JJ.parallaxScaleBias,
              set: (JJ, cJ) => {
                JJ.parallaxScaleBias = cJ
              }
            },
            metadata: cJ
          }, LA, aA), (0, yJ.d)(JJ, null, sU, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "disableLighting" in JJ,
              get: JJ => JJ.disableLighting,
              set: (JJ, cJ) => {
                JJ.disableLighting = cJ
              }
            },
            metadata: cJ
          }, BA, tA), (0, yJ.d)(JJ, null, nU, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: JJ => "forceIrradianceInFragment" in JJ,
              get: JJ => JJ.forceIrradianceInFragment,
              set: (JJ, cJ) => {
                JJ.forceIrradianceInFragment = cJ
              }
            },
            metadata: cJ
          }, oA, lA), (0, yJ.d)(JJ, null, GU, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: JJ => "maxSimultaneousLights" in JJ,
              get: JJ => JJ.maxSimultaneousLights,
              set: (JJ, cJ) => {
                JJ.maxSimultaneousLights = cJ
              }
            },
            metadata: cJ
          }, Jq, cq), (0, yJ.d)(JJ, null, fU, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "invertNormalMapX" in JJ,
              get: JJ => JJ.invertNormalMapX,
              set: (JJ, cJ) => {
                JJ.invertNormalMapX = cJ
              }
            },
            metadata: cJ
          }, Zq, Fq), (0, yJ.d)(JJ, null, xU, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "invertNormalMapY" in JJ,
              get: JJ => JJ.invertNormalMapY,
              set: (JJ, cJ) => {
                JJ.invertNormalMapY = cJ
              }
            },
            metadata: cJ
          }, Uq, eq), (0, yJ.d)(JJ, null, rU, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "twoSidedLighting" in JJ,
              get: JJ => JJ.twoSidedLighting,
              set: (JJ, cJ) => {
                JJ.twoSidedLighting = cJ
              }
            },
            metadata: cJ
          }, Xq, Aq), (0, yJ.d)(JJ, null, vU, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useAlphaFresnel" in JJ,
              get: JJ => JJ.useAlphaFresnel,
              set: (JJ, cJ) => {
                JJ.useAlphaFresnel = cJ
              }
            },
            metadata: cJ
          }, qq, jq), (0, yJ.d)(JJ, null, mU, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useLinearAlphaFresnel" in JJ,
              get: JJ => JJ.useLinearAlphaFresnel,
              set: (JJ, cJ) => {
                JJ.useLinearAlphaFresnel = cJ
              }
            },
            metadata: cJ
          }, Yq, hq), (0, yJ.d)(JJ, null, QU, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "environmentBRDFTexture" in JJ,
              get: JJ => JJ.environmentBRDFTexture,
              set: (JJ, cJ) => {
                JJ.environmentBRDFTexture = cJ
              }
            },
            metadata: cJ
          }, Dq, sq), (0, yJ.d)(JJ, null, EU, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: JJ => "forceNormalForward" in JJ,
              get: JJ => JJ.forceNormalForward,
              set: (JJ, cJ) => {
                JJ.forceNormalForward = cJ
              }
            },
            metadata: cJ
          }, nq, Gq), (0, yJ.d)(JJ, null, VU, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: JJ => "enableSpecularAntiAliasing" in JJ,
              get: JJ => JJ.enableSpecularAntiAliasing,
              set: (JJ, cJ) => {
                JJ.enableSpecularAntiAliasing = cJ
              }
            },
            metadata: cJ
          }, fq, xq), (0, yJ.d)(JJ, null, KU, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useHorizonOcclusion" in JJ,
              get: JJ => JJ.useHorizonOcclusion,
              set: (JJ, cJ) => {
                JJ.useHorizonOcclusion = cJ
              }
            },
            metadata: cJ
          }, rq, vq), (0, yJ.d)(JJ, null, yU, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useRadianceOcclusion" in JJ,
              get: JJ => JJ.useRadianceOcclusion,
              set: (JJ, cJ) => {
                JJ.useRadianceOcclusion = cJ
              }
            },
            metadata: cJ
          }, mq, Qq), (0, yJ.d)(JJ, null, SU, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "unlit" in JJ,
              get: JJ => JJ.unlit,
              set: (JJ, cJ) => {
                JJ.unlit = cJ
              }
            },
            metadata: cJ
          }, Eq, Vq), (0, yJ.d)(JJ, null, IU, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "applyDecalMapAfterDetailMap" in JJ,
              get: JJ => JJ.applyDecalMapAfterDetailMap,
              set: (JJ, cJ) => {
                JJ.applyDecalMapAfterDetailMap = cJ
              }
            },
            metadata: cJ
          }, Kq, yq), (0, yJ.d)(JJ, null, MU, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "debugMode" in JJ,
              get: JJ => JJ.debugMode,
              set: (JJ, cJ) => {
                JJ.debugMode = cJ
              }
            },
            metadata: cJ
          }, Sq, Iq), (0, yJ.d)(JJ, null, bU, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transparencyMode" in JJ,
              get: JJ => JJ.transparencyMode
            },
            metadata: cJ
          }, null, WU), cJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cJ
          })
        })(), JJ.SSS_QUALITY_LOW = 0, JJ.SSS_QUALITY_MEDIUM = 1, JJ.SSS_QUALITY_HIGH = 2, JJ._noiseTextures = {}, JJ.ForceGLSL = !1, JJ._ShaderLoader = new Dc.b((() => [Promise.all([ZJ.e(297), ZJ.e(363)]).then((() => ZJ(59991))), Promise.all([ZJ.e(302), ZJ.e(298), ZJ.e(362), ZJ.e(367)]).then((() => ZJ(60002)))]), (() => [Promise.all([ZJ.e(316), ZJ.e(318), ZJ.e(366)]).then((() => ZJ(60044))), Promise.all([ZJ.e(316), ZJ.e(319), ZJ.e(365), ZJ.e(368)]).then((() => ZJ(60058)))])), JJ
      })(),
      lc = !1;
    lc || (lc = !0, (0, LJ.i)(), (0, Oc.f)("BABYLON.OpenPBRMaterial", oc));
    var JZ = ZJ(36200);
    class cZ {
      constructor(JJ) {
        this.name = Hc.c.NAME_PROCEDURALTEXTURE, this.iG = JJ
      }
      register() {
        this.iG._beforeClearStage.registerStep(Hc.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.iG.proceduralTexturesEnabled) {
          Kc.j.StartPerformanceCounter("Procedural textures", this.iG.proceduralTextures.length > 0);
          for (let JJ = 0; JJ < this.iG.proceduralTextures.length; JJ++) {
            const cJ = this.iG.proceduralTextures[JJ];
            cJ._shouldRender() && cJ.render()
          }
          Kc.j.EndPerformanceCounter("Procedural textures", this.iG.proceduralTextures.length > 0)
        }
      }
    }
    var ZZ = ZJ(39079);
    let FZ = (() => {
      var JJ;
      let cJ, FJ, UJ, XJ, AJ, qJ = bJ.i,
        jJ = [],
        YJ = [],
        hJ = [],
        DJ = [],
        sJ = [],
        nJ = [],
        fJ = [],
        xJ = [],
        rJ = [];
      return JJ = class extends qJ {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(JJ, cJ, ZJ, FJ) {
          let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, FJ, !eJ), this.isEnabled = ((0, yJ.e)(this, jJ), (0, yJ.e)(this, YJ, !0)), this.autoClear = ((0, yJ.e)(this, hJ), (0, yJ.e)(this, DJ, !0)), this.onGenerated = (0, yJ.e)(this, sJ), this.onGeneratedObservable = new JZ.c, this.onBeforeGenerationObservable = new JZ.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, yJ.e)(this, nJ, void 0), this._drawWrapper = (0, yJ.e)(this, fJ), this._textures = {}, this._size = (0, yJ.e)(this, xJ, void 0), this._textureType = (0, yJ.e)(this, rJ), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === UJ || UJ instanceof bJ.i ? (this._options = {}, this._fallbackTexture = UJ) : (this._options = UJ, this._fallbackTexture = UJ.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let qJ = (FJ = this.Qy() || GJ.c.LastCreatedScene)._getComponent(Hc.c.NAME_PROCEDURALTEXTURE);
          qJ || (qJ = new cZ(FJ), FJ.pZJ(qJ)), this._options.skipSceneRegistration || FJ.proceduralTextures.push(this), this._fullEngine = FJ.gn(), this.name = JJ, this.isRenderTarget = !0, this._size = cJ, this._textureType = AJ, this._generateMipMaps = eJ, this._drawWrapper = new ZZ.d(this._fullEngine), this.setFragment(ZJ);
          const vJ = this._createRtWrapper(XJ, cJ, eJ, AJ);
          this._texture = vJ.texture;
          const mJ = [];
          mJ.push(1, 1), mJ.push(-1, 1), mJ.push(-1, -1), mJ.push(1, -1), this._vertexBuffers[zJ.n.PositionKind] = new zJ.n(this._fullEngine, mJ, zJ.n.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(JJ, cJ, ZJ, FJ) {
          return JJ ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(cJ, {
            generateMipMaps: ZJ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: FJ,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(cJ, {
            generateMipMaps: ZJ,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: FJ,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(JJ) {
          this._drawWrapper.effect = JJ
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((JJ => {
            this._contentData = this.readPixels(0, 0, JJ), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const JJ = this._fullEngine,
            cJ = [];
          cJ.push(0), cJ.push(1), cJ.push(2), cJ.push(0), cJ.push(2), cJ.push(3), this._indexBuffer = JJ.createIndexBuffer(cJ)
        }
        _rebuild() {
          const JJ = this._vertexBuffers[zJ.n.PositionKind];
          JJ && JJ._rebuild(), this._createIndexBuffer(), this.refreshRate === yc.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = yc.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(JJ) {
          if (this.isReady()) return void JJ(this);
          const cJ = this.getEffect();
          cJ && cJ.executeWhenCompiled((() => {
            JJ(this)
          }))
        }
        isReady() {
          const JJ = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const cJ = this._getDefines();
          if (this._drawWrapper.effect && cJ === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const FJ = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== cJ && (this._cachedDefines = cJ, this._drawWrapper.effect = JJ.createEffect(FJ, [zJ.n.PositionKind], this._uniforms, this._samplers, cJ, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ZJ.e(371).then((() => ZJ(60119))), this._options.extraInitializationsAsync()]) : await Promise.all([ZJ.e(372).then((() => ZJ(60127))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ZJ.e(371).then((() => ZJ(60119))) : await ZJ.e(372).then((() => ZJ(60127)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(JJ) {
          this._fragment = JJ
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(JJ) {
          this._refreshRate = JJ, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(JJ, cJ) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ZJ = this._texture.isCube;
          this._rtWrapper.dispose();
          const FJ = this._createRtWrapper(ZJ, JJ, cJ, this._textureType);
          this._texture = FJ.texture, this._size = JJ, this._generateMipMaps = cJ
        }
        _checkUniform(JJ) {
          -1 === this._uniforms.indexOf(JJ) && this._uniforms.push(JJ)
        }
        setTexture(JJ, cJ) {
          return -1 === this._samplers.indexOf(JJ) && this._samplers.push(JJ), this._textures[JJ] = cJ, this
        }
        setFloat(JJ, cJ) {
          return this._checkUniform(JJ), this._floats[JJ] = cJ, this
        }
        setInt(JJ, cJ) {
          return this._checkUniform(JJ), this._ints[JJ] = cJ, this
        }
        setFloats(JJ, cJ) {
          return this._checkUniform(JJ), this._floatsArrays[JJ] = cJ, this
        }
        setColor3(JJ, cJ) {
          return this._checkUniform(JJ), this._colors3[JJ] = cJ, this
        }
        setColor4(JJ, cJ) {
          return this._checkUniform(JJ), this._colors4[JJ] = cJ, this
        }
        setVector2(JJ, cJ) {
          return this._checkUniform(JJ), this._vectors2[JJ] = cJ, this
        }
        setVector3(JJ, cJ) {
          return this._checkUniform(JJ), this._vectors3[JJ] = cJ, this
        }
        setVector4(JJ, cJ) {
          return this._checkUniform(JJ), this._vectors4[JJ] = cJ, this
        }
        setMatrix(JJ, cJ) {
          return this._checkUniform(JJ), this._matrices[JJ] = cJ, this
        }
        render(JJ) {
          const cJ = this.Qy();
          if (!cJ) return;
          const ZJ = this._fullEngine;
          if (ZJ.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ZJ.setState(!1), !this.nodeMaterialSource) {
            for (const JJ in this._textures) this._drawWrapper.effect.setTexture(JJ, this._textures[JJ]);
            for (const JJ in this._ints) this._drawWrapper.effect.setInt(JJ, this._ints[JJ]);
            for (const JJ in this._floats) this._drawWrapper.effect.setFloat(JJ, this._floats[JJ]);
            for (const JJ in this._floatsArrays) this._drawWrapper.effect.setArray(JJ, this._floatsArrays[JJ]);
            for (const JJ in this._colors3) this._drawWrapper.effect.setColor3(JJ, this._colors3[JJ]);
            for (const JJ in this._colors4) {
              const cJ = this._colors4[JJ];
              this._drawWrapper.effect.setFloat4(JJ, cJ.r, cJ.g, cJ.b, cJ.a)
            }
            for (const JJ in this._vectors2) this._drawWrapper.effect.setVector2(JJ, this._vectors2[JJ]);
            for (const JJ in this._vectors3) this._drawWrapper.effect.setVector3(JJ, this._vectors3[JJ]);
            for (const JJ in this._vectors4) this._drawWrapper.effect.setVector4(JJ, this._vectors4[JJ]);
            for (const JJ in this._matrices) this._drawWrapper.effect.setMatrix(JJ, this._matrices[JJ])
          }
          if (!this._texture || !this._rtWrapper) return;
          ZJ._enableGPUDebugMarkers && ZJ._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const FJ = ZJ.currentViewport;
          if (this.isCube)
            for (let UJ = 0; UJ < 6; UJ++) ZJ.bindFramebuffer(this._rtWrapper, UJ, void 0, void 0, !0), ZJ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", UJ), this.autoClear && ZJ.clear(cJ.clearColor, !0, !1, !1), ZJ.drawElementsType(eJ.c.TriangleFillMode, 0, 6), ZJ.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let JJ = 1;
            this._rtWrapper.is3D ? JJ = this._rtWrapper.depth : this._rtWrapper.is2DArray && (JJ = this._rtWrapper.layers);
            for (let FJ = 0; FJ < JJ; FJ++) {
              if (ZJ.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, FJ), ZJ.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== JJ ? FJ / (JJ - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", FJ);
                for (const JJ in this._textures) this._drawWrapper.effect.setTexture(JJ, this._textures[JJ])
              }
              this.autoClear && ZJ.clear(cJ.clearColor, !0, !1, !1), ZJ.drawElementsType(eJ.c.TriangleFillMode, 0, 6), ZJ.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          FJ && ZJ.setViewport(FJ), this.isCube && ZJ.generateMipMapsForCubemap(this._texture, !0), ZJ._enableGPUDebugMarkers && ZJ._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const cJ = this.getSize(),
            ZJ = new JJ(this.name, cJ.width, this._fragment, this.Qy(), this._fallbackTexture, this._generateMipMaps);
          return ZJ.hasAlpha = this.hasAlpha, ZJ.level = this.level, ZJ.coordinatesMode = this.coordinatesMode, ZJ
        }
        dispose() {
          const JJ = this.Qy();
          if (!JJ) return;
          const cJ = JJ.proceduralTextures.indexOf(this);
          cJ >= 0 && JJ.proceduralTextures.splice(cJ, 1);
          const ZJ = this._vertexBuffers[zJ.n.PositionKind];
          ZJ && (ZJ.dispose(), this._vertexBuffers[zJ.n.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ZJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, SJ.F)()], FJ = [(0, SJ.F)()], UJ = [(0, SJ.F)()], XJ = [(0, SJ.F)()], AJ = [(0, SJ.F)()], (0, yJ.d)(JJ, null, AJ, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: JJ => "refreshRate" in JJ,
            get: JJ => JJ.refreshRate
          },
          metadata: ZJ
        }, null, jJ), (0, yJ.d)(null, null, cJ, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: ZJ
        }, YJ, hJ), (0, yJ.d)(null, null, FJ, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: JJ => "autoClear" in JJ,
            get: JJ => JJ.autoClear,
            set: (JJ, cJ) => {
              JJ.autoClear = cJ
            }
          },
          metadata: ZJ
        }, DJ, sJ), (0, yJ.d)(null, null, UJ, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_generateMipMaps" in JJ,
            get: JJ => JJ._generateMipMaps,
            set: (JJ, cJ) => {
              JJ._generateMipMaps = cJ
            }
          },
          metadata: ZJ
        }, nJ, fJ), (0, yJ.d)(null, null, XJ, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_size" in JJ,
            get: JJ => JJ._size,
            set: (JJ, cJ) => {
              JJ._size = cJ
            }
          },
          metadata: ZJ
        }, xJ, rJ), ZJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZJ
        })
      })(), JJ
    })();

    function UZ(JJ) {
      return "texture" in JJ
    }

    function eZ(JJ) {
      return "value" in JJ
    }
    async function XZ(JJ, cJ, FJ) {
      const UJ = [cJ.red, cJ.green, cJ.blue, cJ.alpha],
        eJ = [],
        XJ = [];
      for (let ZJ = 0; ZJ < 4; ZJ++) {
        const JJ = UJ[ZJ];
        if (JJ)
          if (UZ(JJ)) {
            if (JJ.sourceChannel < 0 || JJ.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let cJ = eJ.indexOf(JJ.texture); - 1 === cJ && (cJ = eJ.length, eJ.push(JJ.texture)), XJ[ZJ] = cJ
          } else {
            if (!eZ(JJ)) throw new Error("Invalid channel input configuration");
            if (JJ.value < 0 || JJ.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            XJ[ZJ] = -1
          }
        else XJ[ZJ] = -1
      }
      let AJ = cJ.outputSize;
      if (!AJ && eJ.length > 0) {
        let JJ = 0;
        for (const cJ of eJ) {
          const ZJ = cJ.getSize(),
            FJ = Math.max(ZJ.width, ZJ.height);
          FJ > JJ && (JJ = FJ, AJ = ZJ.width === ZJ.height ? JJ : ZJ)
        }
      }
      AJ = AJ || 512;
      const qJ = [],
        jJ = new Set;
      for (let ZJ = 0; ZJ < 4; ZJ++) {
        const JJ = UJ[ZJ],
          cJ = ["RED", "GREEN", "BLUE", "ALPHA"][ZJ];
        if (JJ && UZ(JJ)) {
          qJ.push(`${cJ}_FROM_TEXTURE`);
          const JJ = XJ[ZJ];
          jJ.add(JJ)
        }
      }
      jJ.forEach((JJ => {
        qJ.push(`USE_TEXTURE${JJ}`)
      }));
      const YJ = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: FJ.gn().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            FJ.gn().isWebGPU ? await Promise.all([ZJ.e(369).then((() => ZJ(60108)))]) : await Promise.all([ZJ.e(370).then((() => ZJ(60117)))])
          },
          skipSceneRegistration: !0
        },
        hJ = new FZ(JJ, AJ, "textureMerger", FJ, YJ);
      hJ.refreshRate = -1, hJ.defines = qJ.length > 0 ? "#define " + qJ.join("\n#define ") + "\n" : "";
      for (let ZJ = 0; ZJ < eJ.length; ZJ++) DJ = eJ[ZJ], (sJ = hJ).uOffset = DJ.uOffset, sJ.vOffset = DJ.vOffset, sJ.uScale = DJ.uScale, sJ.vScale = DJ.vScale, sJ.uAng = DJ.uAng, sJ.vAng = DJ.vAng, sJ.wAng = DJ.wAng, sJ.uRotationCenter = DJ.uRotationCenter, sJ.vRotationCenter = DJ.vRotationCenter, hJ.setTexture(`inputTexture${ZJ}`, eJ[ZJ]);
      var DJ, sJ;
      for (let ZJ = 0; ZJ < 4; ZJ++) {
        const JJ = UJ[ZJ],
          cJ = ["red", "green", "blue", "alpha"][ZJ];
        if (JJ && UZ(JJ)) {
          const FJ = XJ[ZJ];
          hJ.setInt(`${cJ}TextureIndex`, FJ), hJ.setInt(`${cJ}SourceChannel`, JJ.sourceChannel)
        } else {
          let FJ;
          FJ = JJ && eZ(JJ) ? JJ.value : 3 === ZJ ? 1 : 0, hJ.setFloat(`${cJ}ConstantValue`, FJ)
        }
      }
      return await new Promise(((JJ, cJ) => {
        hJ.executeWhenReady((() => {
          try {
            hJ.render(), JJ(hJ)
          } catch (ZJ) {
            cJ(ZJ instanceof Error ? ZJ : new Error(String(ZJ)))
          }
        }))
      }))
    }

    function AZ(JJ, cJ) {
      return {
        texture: JJ,
        sourceChannel: cJ
      }
    }

    function qZ(JJ) {
      return {
        value: JJ
      }
    }

    function jZ(JJ, cJ, ZJ, FJ) {
      return {
        red: JJ,
        green: cJ,
        blue: ZJ,
        alpha: FJ
      }
    }
    var YZ = ZJ(38633),
      hZ = ZJ(38723),
      DZ = ZJ(36189),
      sZ = ZJ(38784),
      nZ = ZJ(38712);
    class GZ {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class fZ extends YZ.c {
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
        return !!this._options?.enableMultiview || this.nG > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new GZ;
        super(null), void 0 === JJ.deterministicLockstep && (JJ.deterministicLockstep = !1), void 0 !== JJ.timeStep && (this._timeStep = JJ.timeStep), void 0 === JJ.lockstepMaxSteps && (JJ.lockstepMaxSteps = 4), this._options = JJ, DZ.e.SetMatrixPrecision(!!JJ.useHighPrecisionMatrix), this._caps = {
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
        }, JJ.enableMultiview && (this._caps.multiview = {
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
        }, JJ.renderingCanvas && (this._renderingCanvas = JJ.renderingCanvas), IJ.c.Log(`Babylon.js v${YZ.c.Version} - Null engine`);
        const cJ = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (cJ.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (cJ.Blob = function() {})
      }
      createVertexBuffer(JJ) {
        const cJ = new hZ.d;
        return cJ.references = 1, cJ
      }
      createIndexBuffer(JJ) {
        const cJ = new hZ.d;
        return cJ.references = 1, cJ
      }
      clear(JJ, cJ, ZJ) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(JJ, cJ, ZJ) {
        this._cachedViewport = JJ
      }
      createUniformBuffer(JJ) {
        const cJ = new hZ.d;
        return cJ.references = 1, cJ.qh = JJ instanceof Array ? JJ.length * Float32Array.BYTES_PER_ELEMENT : JJ.byteLength, cJ
      }
      createDynamicUniformBuffer(JJ) {
        return this.createUniformBuffer(JJ)
      }
      updateUniformBuffer(JJ, cJ, ZJ, FJ) {}
      bindUniformBufferBase(JJ, cJ, ZJ) {}
      bindUniformBlock(JJ, cJ, ZJ) {}
      createShaderProgram(JJ, cJ, ZJ, FJ, UJ) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(JJ, cJ) {
        return []
      }
      getAttributes(JJ, cJ) {
        return []
      }
      bindSamplers(JJ) {
        this._currentEffect = null
      }
      enableEffect(JJ) {
        JJ = null !== JJ && (0, nZ.d)(JJ) ? JJ.effect : JJ, this._currentEffect = JJ, JJ && (JJ.onBind && JJ.onBind(JJ), JJ._onBindObservable && JJ._onBindObservable.notifyObservers(JJ))
      }
      setStateCullFaceType(JJ, cJ) {}
      setState(JJ) {}
      setIntArray(JJ, cJ) {
        return !0
      }
      setIntArray2(JJ, cJ) {
        return !0
      }
      setIntArray3(JJ, cJ) {
        return !0
      }
      setIntArray4(JJ, cJ) {
        return !0
      }
      setFloatArray(JJ, cJ) {
        return !0
      }
      setFloatArray2(JJ, cJ) {
        return !0
      }
      setFloatArray3(JJ, cJ) {
        return !0
      }
      setFloatArray4(JJ, cJ) {
        return !0
      }
      setArray(JJ, cJ) {
        return !0
      }
      setArray2(JJ, cJ) {
        return !0
      }
      setArray3(JJ, cJ) {
        return !0
      }
      setArray4(JJ, cJ) {
        return !0
      }
      setMatrices(JJ, cJ) {
        return !0
      }
      setMatrix3x3(JJ, cJ) {
        return !0
      }
      setMatrix2x2(JJ, cJ) {
        return !0
      }
      setFloat(JJ, cJ) {
        return !0
      }
      setFloat2(JJ, cJ, ZJ) {
        return !0
      }
      setFloat3(JJ, cJ, ZJ, FJ) {
        return !0
      }
      setBool(JJ, cJ) {
        return !0
      }
      setFloat4(JJ, cJ, ZJ, FJ, UJ) {
        return !0
      }
      setAlphaMode(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ZJ] !== JJ && (this.alphaState.setAlphaBlend(0 !== JJ, 0), cJ || this.setDepthWrite(0 === JJ), this._alphaMode[ZJ] = JJ)
      }
      bindBuffers(JJ, cJ, ZJ) {}
      wipeCaches(JJ) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, JJ && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(JJ, cJ, ZJ, FJ) {}
      drawElementsType(JJ, cJ, ZJ, FJ) {}
      drawArraysType(JJ, cJ, ZJ, FJ) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(JJ) {}
      createTexture(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          XJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          AJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const qJ = new Sc.e(this, 1),
          jJ = String(JJ);
        return qJ.url = jJ, qJ.generateMipMaps = !cJ, qJ.samplingMode = UJ, qJ.invertY = ZJ, qJ.baseWidth = this._options.textureSize, qJ.baseHeight = this._options.textureSize, qJ.width = this._options.textureSize, qJ.height = this._options.textureSize, AJ && (qJ.format = AJ), XJ && (qJ._buffer = XJ), qJ.isReady = !0, eJ && setTimeout((() => {
          eJ(qJ)
        })), this._internalTexturesCache.push(qJ), qJ
      }
      _createHardwareRenderTargetWrapper(JJ, cJ, ZJ) {
        const FJ = new sZ.b(JJ, cJ, ZJ, this);
        return this._renderTargetWrapperCache.push(FJ), FJ
      }
      createRenderTargetTexture(JJ, cJ) {
        const ZJ = this._createHardwareRenderTargetWrapper(!1, !1, JJ),
          FJ = {};
        void 0 !== cJ && "object" === typeof cJ ? (FJ.generateMipMaps = cJ.generateMipMaps, FJ.generateDepthBuffer = void 0 === cJ.generateDepthBuffer || cJ.generateDepthBuffer, FJ.generateStencilBuffer = FJ.generateDepthBuffer && cJ.generateStencilBuffer, FJ.type = void 0 === cJ.type ? 0 : cJ.type, FJ.samplingMode = void 0 === cJ.samplingMode ? 3 : cJ.samplingMode) : (FJ.generateMipMaps = cJ, FJ.generateDepthBuffer = !0, FJ.generateStencilBuffer = !1, FJ.type = 0, FJ.samplingMode = 3);
        const UJ = new Sc.e(this, 5);
        ZJ.setTexture(UJ);
        const eJ = JJ.width || JJ,
          XJ = JJ.height || JJ;
        return ZJ._generateDepthBuffer = FJ.generateDepthBuffer, ZJ._generateStencilBuffer = !!FJ.generateStencilBuffer, UJ.baseWidth = eJ, UJ.baseHeight = XJ, UJ.width = eJ, UJ.height = XJ, UJ.isReady = !0, UJ.samples = 1, UJ.generateMipMaps = !!FJ.generateMipMaps, UJ.samplingMode = FJ.samplingMode, UJ.type = FJ.type, this._internalTexturesCache.push(UJ), ZJ
      }
      createMultiviewRenderTargetTexture(JJ, cJ) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ZJ = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: JJ,
            height: cJ
          }),
          FJ = new Sc.e(this, 5, !0);
        return FJ.baseWidth = JJ, FJ.baseHeight = cJ, FJ.width = JJ, FJ.height = cJ, FJ.isMultiview = !0, FJ.isReady = !0, FJ.format = 5, FJ.samples = 1, ZJ.setTextures(FJ), ZJ
      }
      bindMultiviewFramebuffer(JJ) {
        this.bindFramebuffer(JJ, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(JJ, cJ) {
        const ZJ = this._createHardwareRenderTargetWrapper(!1, !0, JJ),
          FJ = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...cJ
          };
        FJ.generateStencilBuffer = FJ.generateDepthBuffer && FJ.generateStencilBuffer, (1 !== FJ.type || this._caps.textureFloatLinearFiltering) && (2 !== FJ.type || this._caps.textureHalfFloatLinearFiltering) || (FJ.samplingMode = 1), ZJ._generateDepthBuffer = FJ.generateDepthBuffer, ZJ._generateStencilBuffer = !!FJ.generateStencilBuffer;
        const UJ = new Sc.e(this, 5);
        return UJ.baseWidth = JJ, UJ.baseHeight = JJ, UJ.width = JJ, UJ.height = JJ, UJ.isReady = !0, UJ.isCube = !0, UJ.samples = 1, UJ.generateMipMaps = !!FJ.generateMipMaps, UJ.samplingMode = FJ.samplingMode, UJ.type = FJ.type, this._internalTexturesCache.push(UJ), ZJ
      }
      updateTextureSamplingMode(JJ, cJ) {
        cJ.samplingMode = JJ
      }
      createRawTexture(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          jJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const YJ = new Sc.e(this, 3);
        return YJ.baseWidth = cJ, YJ.baseHeight = ZJ, YJ.width = cJ, YJ.height = ZJ, YJ.format = FJ, YJ.generateMipMaps = UJ, YJ.samplingMode = XJ, YJ.invertY = eJ, YJ._compression = AJ, YJ.type = qJ, YJ._useSRGBBuffer = jJ, this._doNotHandleContextLost || (YJ._bufferView = JJ), YJ
      }
      updateRawTexture(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        JJ && (JJ._bufferView = cJ, JJ.format = ZJ, JJ.invertY = FJ, JJ._compression = UJ, JJ.type = eJ, JJ._useSRGBBuffer = XJ)
      }
      bindFramebuffer(JJ, cJ, ZJ, FJ, UJ) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = JJ, this._currentFramebuffer = null, this._cachedViewport && !UJ && this.setViewport(this._cachedViewport, ZJ, FJ)
      }
      unBindFramebuffer(JJ) {
        let cJ = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, cJ && cJ(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(JJ) {
        const cJ = new hZ.d;
        return cJ.references = 1, cJ.qh = 1, cJ
      }
      updateDynamicTexture(JJ, cJ, ZJ) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(JJ) {}
      updateDynamicIndexBuffer(JJ, cJ) {}
      updateDynamicVertexBuffer(JJ, cJ, ZJ, FJ) {}
      _bindTextureDirectly(JJ, cJ) {
        return this._boundTexturesCache[this._activeChannel] !== cJ && (this._boundTexturesCache[this._activeChannel] = cJ, !0)
      }
      _bindTexture(JJ, cJ) {
        JJ < 0 || this._bindTextureDirectly(0, cJ)
      }
      _deleteBuffer(JJ) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(JJ) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(JJ, cJ, ZJ, FJ, UJ) {}
      _uploadDataToTextureDirectly(JJ, cJ) {}
      _uploadArrayBufferViewToTexture(JJ, cJ) {}
      _uploadImageToTexture(JJ, cJ) {}
    }
    ZJ(38840), ZJ(38865), ZJ(38831);
    async function xZ(JJ) {
      const cJ = JJ.getInternalTexture();
      if (!cJ || 1 !== cJ.source) return null;
      if (cJ.invertY) {
        const cJ = JJ.Qy()?.gn();
        if (!(cJ instanceof fZ)) return null
      }
      const ZJ = cJ._buffer;
      let FJ, eJ = JJ.mimeType;
      try {
        ZJ ? ArrayBuffer.isView(ZJ) ? FJ = ZJ.buffer.slice(ZJ.byteOffset, ZJ.byteOffset + ZJ.byteLength) : ZJ instanceof ArrayBuffer ? FJ = ZJ : ZJ instanceof Blob ? (FJ = await ZJ.arrayBuffer(), eJ = ZJ.type || eJ) : "string" === typeof ZJ ? (FJ = await UJ.Tools.LoadFileAsync(ZJ), eJ = (0, qJ.b)(ZJ) || eJ) : "undefined" !== typeof HTMLImageElement && ZJ instanceof HTMLImageElement && (FJ = await UJ.Tools.LoadFileAsync(ZJ.src), eJ = (0, qJ.b)(ZJ.src) || eJ) : (FJ = await UJ.Tools.LoadFileAsync(cJ.url), eJ = (0, qJ.b)(cJ.url) || eJ)
      } catch {
        return null
      }
      if (FJ && !eJ && cJ.url) {
        const JJ = cJ.url.match(/^data:([^;,]+)/);
        eJ = JJ ? JJ[1] : (0, qJ.b)(cJ.url)
      }
      return FJ && eJ ? {
        data: FJ,
        mimeType: eJ
      } : null
    }
    const rZ = 1e-6,
      vZ = new fJ.Color3(.04, .04, .04),
      mZ = 1024,
      QZ = fJ.Color3.White(),
      EZ = fJ.Color3.BlackReadOnly;

    function VZ(JJ) {
      switch (JJ) {
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

    function KZ(JJ, cJ, ZJ) {
      if (cJ < vZ.r) return 0;
      const FJ = vZ.r,
        UJ = JJ * ZJ / (1 - vZ.r) + cJ - 2 * vZ.r,
        eJ = UJ * UJ - 4 * FJ * (vZ.r - cJ);
      return vJ.Clamp((-UJ + Math.sqrt(eJ)) / (2 * FJ), 0, 1)
    }

    function yZ(JJ) {
      const cJ = JJ.diffuseColor.toLinearSpace(JJ.Qy().gn().useExactSrgbConversions).scale(.5),
        ZJ = JJ.alpha,
        FJ = function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dJ.i(0, 1),
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dJ.i(0, .1),
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dJ.i(0, .1),
            UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new dJ.i(1300, .1);
          return function(JJ, cJ, ZJ, FJ, UJ) {
            return (1 - JJ) * (1 - JJ) * (1 - JJ) * cJ + 3 * (1 - JJ) * (1 - JJ) * JJ * ZJ + 3 * (1 - JJ) * JJ * JJ * FJ + JJ * JJ * JJ * UJ
          }(Math.pow(JJ / UJ.x, .333333), cJ.y, ZJ.y, FJ.y, UJ.y)
        }(vJ.Clamp(JJ.specularPower, 0, mZ));
      return {
        baseColorFactor: [cJ.r, cJ.g, cJ.b, ZJ],
        metallicFactor: 0,
        roughnessFactor: FJ
      }
    }

    function SZ(JJ, cJ) {
      cJ.needAlphaBlending() ? JJ.alphaMode = "BLEND" : cJ.needAlphaTesting() && (JJ.alphaMode = "MASK", JJ.alphaCutoff = cJ.alphaCutOff)
    }

    function IZ(JJ, cJ, ZJ) {
      const FJ = new Uint8Array(JJ * cJ * 4);
      for (let UJ = 0; UJ < FJ.length; UJ += 4) FJ[UJ] = FJ[UJ + 1] = FJ[UJ + 2] = FJ[UJ + 3] = 255;
      return EJ.e.CreateRGBATexture(FJ, JJ, cJ, ZJ)
    }

    function MZ(JJ) {
      if (JJ instanceof Uint8Array) {
        const cJ = JJ.length,
          ZJ = new Float32Array(JJ.length);
        for (let FJ = 0; FJ < cJ; ++FJ) ZJ[FJ] = JJ[FJ] / 255;
        return ZJ
      }
      if (JJ instanceof Float32Array) return JJ;
      throw new Error("Unsupported pixel format!")
    }
    class bZ {
      constructor(JJ) {
        this._exporter = JJ, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(JJ) {
        return JJ ? this._textureMap.get(JJ.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(JJ, cJ) {
        const ZJ = yZ(JJ),
          FJ = {
            name: JJ.name
          };
        if (null == JJ.backFaceCulling || JJ.backFaceCulling || (JJ.twoSidedLighting || UJ.Tools.Warn(JJ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), FJ.doubleSided = !0), cJ) {
          const cJ = [],
            UJ = JJ.diffuseTexture;
          UJ && cJ.push(this.exportTextureAsync(UJ).then((JJ => {
            JJ && (ZJ.baseColorTexture = JJ)
          })));
          const eJ = JJ.bumpTexture;
          eJ && cJ.push(this.exportTextureAsync(eJ).then((JJ => {
            JJ && (FJ.normalTexture = JJ, 1 !== eJ.level && (FJ.normalTexture.scale = eJ.level))
          })));
          const XJ = JJ.emissiveTexture;
          XJ && (FJ.emissiveFactor = [1, 1, 1], cJ.push(this.exportTextureAsync(XJ).then((JJ => {
            JJ && (FJ.emissiveTexture = JJ)
          }))));
          const AJ = JJ.ambientTexture;
          AJ && cJ.push(this.exportTextureAsync(AJ).then((JJ => {
            if (JJ) {
              const cJ = {
                index: JJ.index
              };
              FJ.occlusionTexture = cJ
            }
          }))), cJ.length > 0 && (this._exporter._materialNeedsUVsSet.add(JJ), await Promise.all(cJ))
        }(JJ.alpha < 1 || JJ.opacityTexture) && (JJ.alphaMode === VJ.c.ALPHA_COMBINE ? FJ.alphaMode = "BLEND" : UJ.Tools.Warn(JJ.name + ": glTF 2.0 does not support alpha mode: " + JJ.alphaMode.toString())), JJ.emissiveColor && !JJ.emissiveColor.equalsWithEpsilon(EZ, rZ) && (FJ.emissiveFactor = JJ.emissiveColor.JFJ()), FJ.pbrMetallicRoughness = ZJ, SZ(FJ, JJ), await this._finishMaterialAsync(FJ, JJ);
        const eJ = this._exporter._materials;
        return eJ.push(FJ), eJ.length - 1
      }
      async _finishMaterialAsync(JJ, cJ) {
        const ZJ = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", JJ, cJ),
          FJ = [];
        for (const UJ of ZJ) FJ.push(this.exportTextureAsync(UJ));
        await Promise.all(FJ), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", JJ, cJ)
      }
      _resizeTexturesToSameDimensions(JJ, cJ, ZJ) {
        const FJ = JJ ? JJ.getSize() : {
            width: 0,
            height: 0
          },
          UJ = cJ ? cJ.getSize() : {
            width: 0,
            height: 0
          };
        let eJ, XJ;
        return FJ.width < UJ.width ? (eJ = JJ && JJ instanceof QJ.b ? mJ.g.CreateResizedCopy(JJ, UJ.width, UJ.height, !0) : IZ(UJ.width, UJ.height, ZJ), XJ = cJ) : FJ.width > UJ.width ? (XJ = cJ && cJ instanceof QJ.b ? mJ.g.CreateResizedCopy(cJ, FJ.width, FJ.height, !0) : IZ(FJ.width, FJ.height, ZJ), eJ = JJ) : (eJ = JJ, XJ = cJ), {
          texture1: eJ,
          texture2: XJ
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(JJ, cJ, ZJ) {
        const FJ = new Array;
        if (!JJ && !cJ) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const UJ = JJ ? JJ.Qy() : cJ ? cJ.Qy() : null;
        if (UJ) {
          const eJ = this._resizeTexturesToSameDimensions(JJ, cJ, UJ),
            XJ = eJ.texture1?.getSize();
          let AJ, qJ;
          const jJ = XJ.width,
            YJ = XJ.height,
            hJ = await eJ.texture1.readPixels(),
            DJ = await eJ.texture2.readPixels();
          if (!hJ) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (AJ = MZ(hJ), !DJ) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          qJ = MZ(DJ);
          const sJ = qJ.byteLength,
            nJ = new Uint8Array(sJ),
            GJ = new Uint8Array(sJ),
            xJ = 4,
            rJ = new fJ.Color3(0, 0, 0);
          let vJ = 0,
            mJ = 0;
          for (let JJ = 0; JJ < YJ; ++JJ)
            for (let cJ = 0; cJ < jJ; ++cJ) {
              const FJ = (jJ * JJ + cJ) * xJ,
                XJ = {
                  diffuseColor: new fJ.Color3(AJ[FJ], AJ[FJ + 1], AJ[FJ + 2]).toLinearSpace(UJ.gn().useExactSrgbConversions).multiply(ZJ.diffuseColor),
                  specularColor: new fJ.Color3(qJ[FJ], qJ[FJ + 1], qJ[FJ + 2]).toLinearSpace(UJ.gn().useExactSrgbConversions).multiply(ZJ.specularColor),
                  glossiness: qJ[FJ + 3] * ZJ.glossiness
                },
                YJ = this._convertSpecularGlossinessToMetallicRoughness(XJ);
              rJ.r = Math.max(rJ.r, YJ.baseColor.r), rJ.g = Math.max(rJ.g, YJ.baseColor.g), rJ.b = Math.max(rJ.b, YJ.baseColor.b), vJ = Math.max(vJ, YJ.metallic), mJ = Math.max(mJ, YJ.roughness), GJ[FJ] = 255 * YJ.baseColor.r, GJ[FJ + 1] = 255 * YJ.baseColor.g, GJ[FJ + 2] = 255 * YJ.baseColor.b, GJ[FJ + 3] = eJ.texture1.hasAlpha ? 255 * AJ[FJ + 3] : 255, nJ[FJ] = 0, nJ[FJ + 1] = 255 * YJ.roughness, nJ[FJ + 2] = 255 * YJ.metallic, nJ[FJ + 3] = 255
            }
          const QJ = {
            baseColor: rJ,
            metallic: vJ,
            roughness: mJ
          };
          let EJ = !1,
            VJ = !1;
          for (let JJ = 0; JJ < YJ; ++JJ)
            for (let cJ = 0; cJ < jJ; ++cJ) {
              const ZJ = (jJ * JJ + cJ) * xJ;
              GJ[ZJ] /= QJ.baseColor.r > rZ ? QJ.baseColor.r : 1, GJ[ZJ + 1] /= QJ.baseColor.g > rZ ? QJ.baseColor.g : 1, GJ[ZJ + 2] /= QJ.baseColor.b > rZ ? QJ.baseColor.b : 1;
              const FJ = fJ.Color3.FromInts(GJ[ZJ], GJ[ZJ + 1], GJ[ZJ + 2]).toGammaSpace(UJ.gn().useExactSrgbConversions);
              GJ[ZJ] = 255 * FJ.r, GJ[ZJ + 1] = 255 * FJ.g, GJ[ZJ + 2] = 255 * FJ.b, FJ.equalsWithEpsilon(QZ, rZ) || (VJ = !0), nJ[ZJ + 1] /= QJ.roughness > rZ ? QJ.roughness : 1, nJ[ZJ + 2] /= QJ.metallic > rZ ? QJ.metallic : 1;
              fJ.Color3.FromInts(255, nJ[ZJ + 1], nJ[ZJ + 2]).equalsWithEpsilon(QZ, rZ) || (EJ = !0)
            }
          return EJ && FJ.push((0, KJ.EncodeImageAsync)(nJ, jJ, YJ).then((JJ => {
            QJ.metallicRoughnessTextureData = JJ
          }))), VJ && FJ.push((0, KJ.EncodeImageAsync)(GJ, jJ, YJ).then((JJ => {
            QJ.baseColorTextureData = JJ
          }))), await Promise.all(FJ).then((() => QJ))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(JJ) {
        const cJ = this._getPerceivedBrightness(JJ.diffuseColor),
          ZJ = this._getPerceivedBrightness(JJ.specularColor),
          FJ = 1 - this._getMaxComponent(JJ.specularColor),
          UJ = KZ(cJ, ZJ, FJ),
          eJ = JJ.diffuseColor.scale(FJ / (1 - vZ.r) / Math.max(1 - UJ, rZ)),
          XJ = JJ.specularColor.subtract(vZ.scale(1 - UJ)).scale(1 / Math.max(UJ, rZ));
        let AJ = fJ.Color3.Lerp(eJ, XJ, UJ * UJ);
        AJ = AJ.clampToRef(0, 1, AJ);
        return {
          baseColor: AJ,
          metallic: UJ,
          roughness: 1 - JJ.glossiness
        }
      }
      _getPerceivedBrightness(JJ) {
        return Math.sqrt(.299 * JJ.r * JJ.r + .587 * JJ.g * JJ.g + .114 * JJ.b * JJ.b)
      }
      _getMaxComponent(JJ) {
        return Math.max(JJ.r, Math.max(JJ.g, JJ.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        const jJ = [],
          YJ = {
            baseColor: JJ,
            metallic: cJ,
            roughness: ZJ
          };
        if (qJ)
          if (XJ instanceof oc) {
            if (XJ.geometryOpacityTexture) {
              const JJ = FJ && FJ.getInternalTexture() ? FJ.getInternalTexture().uniqueId : 0,
                cJ = XJ.geometryOpacityTexture && XJ.geometryOpacityTexture.getInternalTexture() ? XJ.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ZJ = Number(`${JJ}${cJ}`),
                UJ = this._textureMap.get(ZJ);
              UJ ? AJ.baseColorTexture = UJ : jJ.push(XZ("baseColorOpacityTexture", jZ(FJ ? AZ(FJ, 0) : qZ(1), FJ ? AZ(FJ, 1) : qZ(1), FJ ? AZ(FJ, 2) : qZ(1), AZ(XJ.geometryOpacityTexture, 0)), XJ.Qy()).then((async JJ => {
                const cJ = await this.exportTextureAsync(JJ, ZJ);
                cJ && (AJ.baseColorTexture = cJ)
              })))
            } else FJ && jJ.push(this.exportTextureAsync(FJ).then((JJ => {
              JJ && (AJ.baseColorTexture = JJ)
            })));
            if (XJ._useMetallicFromMetallicTextureBlue && UJ) jJ.push(this.exportTextureAsync(UJ).then((JJ => {
              JJ && (AJ.metallicRoughnessTexture = JJ)
            })));
            else if (eJ || UJ) {
              const JJ = UJ && UJ.getInternalTexture() ? UJ.getInternalTexture().uniqueId : 0,
                cJ = eJ && eJ.getInternalTexture() ? eJ.getInternalTexture().uniqueId : 0,
                ZJ = Number(`${JJ}${cJ}`),
                FJ = this._textureMap.get(ZJ);
              FJ ? AJ.metallicRoughnessTexture = FJ : jJ.push(XZ("MetalRoughTexture", jZ(XJ.ambientOcclusionTexture ? AZ(XJ.ambientOcclusionTexture, 0) : qZ(1), eJ ? AZ(eJ, 0) : qZ(1), UJ ? AZ(UJ, 0) : qZ(1)), XJ.Qy()).then((async JJ => {
                const cJ = await this.exportTextureAsync(JJ, ZJ);
                cJ && (AJ.metallicRoughnessTexture = cJ)
              })))
            }
          } else FJ && jJ.push(this.exportTextureAsync(FJ).then((JJ => {
            JJ && (AJ.baseColorTexture = JJ)
          }))), UJ && jJ.push(this.exportTextureAsync(UJ).then((JJ => {
            JJ && (AJ.metallicRoughnessTexture = JJ)
          })));
        return jJ.length > 0 && (this._exporter._materialNeedsUVsSet.add(XJ), await Promise.all(jJ)), YJ
      }
      _getTextureSampler(JJ) {
        const cJ = {};
        if (!JJ || !(JJ instanceof QJ.b)) return cJ;
        const ZJ = this._getGLTFTextureWrapMode(JJ.wrapU);
        10497 !== ZJ && (cJ.wrapS = ZJ);
        const FJ = this._getGLTFTextureWrapMode(JJ.wrapV);
        switch (10497 !== FJ && (cJ.wrapT = FJ), JJ.samplingMode) {
          case QJ.b.LINEAR_LINEAR:
            cJ.magFilter = 9729, cJ.minFilter = 9729;
            break;
          case QJ.b.LINEAR_NEAREST:
            cJ.magFilter = 9729, cJ.minFilter = 9728;
            break;
          case QJ.b.NEAREST_LINEAR:
            cJ.magFilter = 9728, cJ.minFilter = 9729;
            break;
          case QJ.b.NEAREST_LINEAR_MIPLINEAR:
            cJ.magFilter = 9728, cJ.minFilter = 9987;
            break;
          case QJ.b.NEAREST_NEAREST:
            cJ.magFilter = 9728, cJ.minFilter = 9728;
            break;
          case QJ.b.NEAREST_LINEAR_MIPNEAREST:
            cJ.magFilter = 9728, cJ.minFilter = 9985;
            break;
          case QJ.b.LINEAR_NEAREST_MIPNEAREST:
            cJ.magFilter = 9729, cJ.minFilter = 9984;
            break;
          case QJ.b.LINEAR_NEAREST_MIPLINEAR:
            cJ.magFilter = 9729, cJ.minFilter = 9986;
            break;
          case QJ.b.NEAREST_NEAREST_MIPLINEAR:
            cJ.magFilter = 9728, cJ.minFilter = 9986;
            break;
          case QJ.b.LINEAR_LINEAR_MIPLINEAR:
            cJ.magFilter = 9729, cJ.minFilter = 9987;
            break;
          case QJ.b.LINEAR_LINEAR_MIPNEAREST:
            cJ.magFilter = 9729, cJ.minFilter = 9985;
            break;
          case QJ.b.NEAREST_NEAREST_MIPNEAREST:
            cJ.magFilter = 9728, cJ.minFilter = 9984
        }
        return cJ
      }
      _getGLTFTextureWrapMode(JJ) {
        switch (JJ) {
          case QJ.b.WRAP_ADDRESSMODE:
            return 10497;
          case QJ.b.CLAMP_ADDRESSMODE:
            return 33071;
          case QJ.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return UJ.Tools.Error(`Unsupported Texture Wrap Mode ${JJ}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(JJ, cJ, ZJ) {
        const FJ = {
            diffuseColor: JJ._albedoColor,
            specularColor: JJ._reflectivityColor,
            glossiness: JJ._microSurface
          },
          UJ = JJ._albedoTexture,
          eJ = JJ._reflectivityTexture,
          XJ = JJ._useMicroSurfaceFromReflectivityMapAlpha;
        if (eJ && !XJ) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((UJ || eJ) && ZJ) {
          this._exporter._materialNeedsUVsSet.add(JJ);
          const ZJ = this._exportTextureSampler(UJ || eJ),
            XJ = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(UJ, eJ, FJ),
            AJ = this._exporter._textures;
          if (XJ.baseColorTextureData) {
            const JJ = await this._exportImageAsync(`baseColor${AJ.length}`, XJ.baseColorTextureData);
            cJ.baseColorTexture = this._exportTextureInfo(JJ, ZJ, UJ?.coordinatesIndex)
          }
          if (XJ.metallicRoughnessTextureData) {
            const JJ = await this._exportImageAsync(`metallicRoughness${AJ.length}`, XJ.metallicRoughnessTextureData);
            cJ.metallicRoughnessTexture = this._exportTextureInfo(JJ, ZJ, eJ?.coordinatesIndex)
          }
          return XJ
        }
        return this._convertSpecularGlossinessToMetallicRoughness(FJ)
      }
      async exportPBRMaterialAsync(JJ, cJ) {
        const ZJ = {},
          FJ = {
            name: JJ.name
          },
          UJ = JJ.isMetallicWorkflow();
        if (UJ) {
          const cJ = JJ._albedoColor,
            FJ = JJ.alpha;
          cJ && (ZJ.baseColorFactor = [cJ.r, cJ.g, cJ.b, FJ])
        }
        const eJ = UJ ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(JJ._albedoColor, JJ._metallic, JJ._roughness, JJ._albedoTexture, JJ._metallicTexture, JJ._metallicTexture, JJ, ZJ, cJ) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(JJ, ZJ, cJ);
        await this._setMetallicRoughnessPbrMaterialAsync(eJ, JJ, FJ, ZJ, cJ), await this._finishMaterialAsync(FJ, JJ);
        const XJ = this._exporter._materials;
        return XJ.push(FJ), XJ.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(JJ, cJ, ZJ, FJ, eJ) {
        if (SZ(ZJ, cJ), JJ.baseColor.equalsWithEpsilon(QZ, rZ) && vJ.WithinEpsilon(cJ.alpha, 1, rZ) || (FJ.baseColorFactor = [JJ.baseColor.r, JJ.baseColor.g, JJ.baseColor.b, cJ.alpha]), null != JJ.metallic && 1 !== JJ.metallic && (FJ.metallicFactor = JJ.metallic), null != JJ.roughness && 1 !== JJ.roughness && (FJ.roughnessFactor = JJ.roughness), null == cJ.backFaceCulling || cJ.backFaceCulling || (cJ._twoSidedLighting || UJ.Tools.Warn(cJ.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ZJ.doubleSided = !0), eJ) {
          const JJ = [],
            UJ = cJ instanceof Ec ? cJ._bumpTexture : cJ.geometryNormalTexture;
          UJ && JJ.push(this.exportTextureAsync(UJ).then((JJ => {
            JJ && (ZJ.normalTexture = JJ, 1 !== UJ.level && (ZJ.normalTexture.scale = UJ.level))
          })));
          const eJ = cJ instanceof Ec ? cJ._ambientTexture : cJ.ambientOcclusionTexture;
          eJ && JJ.push(new Promise((async JJ => {
            if (cJ instanceof oc && FJ.metallicRoughnessTexture) {
              const cJ = this._exportTextureSampler(eJ),
                ZJ = this._exporter._textures[FJ.metallicRoughnessTexture.index].source,
                UJ = this._exportTextureInfo(ZJ, cJ, eJ.coordinatesIndex);
              return this._textureMap.set(eJ.uniqueId, UJ), this._exporter._extensionsPostExportTextures("exporter", UJ, eJ), JJ(UJ)
            }
            return JJ(await this.exportTextureAsync(eJ))
          })).then((async JJ => {
            if (JJ) {
              const FJ = {
                index: JJ.index,
                texCoord: JJ.texCoord,
                extensions: JJ.extensions
              };
              ZJ.occlusionTexture = FJ, FJ.strength = cJ instanceof Ec ? cJ._ambientTextureStrength : cJ.ambientOcclusionTexture.level
            }
          })));
          const XJ = cJ instanceof Ec ? cJ._emissiveTexture : cJ.emissionColorTexture;
          XJ && JJ.push(this.exportTextureAsync(XJ).then((JJ => {
            JJ && (ZJ.emissiveTexture = JJ)
          }))), JJ.length > 0 && (this._exporter._materialNeedsUVsSet.add(cJ), await Promise.all(JJ))
        }
        const XJ = cJ instanceof Ec ? cJ._emissiveColor : cJ.emissionColor;
        XJ.equalsWithEpsilon(EZ, rZ) || (ZJ.emissiveFactor = XJ.JFJ()), ZJ.pbrMetallicRoughness = FJ
      }
      async exportOpenPBRMaterialAsync(JJ, cJ) {
        const ZJ = {},
          FJ = {
            name: JJ.name
          },
          UJ = JJ.baseColor,
          eJ = JJ.geometryOpacity;
        UJ && (ZJ.baseColorFactor = [UJ.r, UJ.g, UJ.b, eJ]);
        const XJ = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(JJ.baseColor, JJ.baseMetalness, JJ.specularRoughness, JJ.baseColorTexture, JJ.baseMetalnessTexture, JJ.specularRoughnessTexture, JJ, ZJ, cJ);
        await this._setMetallicRoughnessPbrMaterialAsync(XJ, JJ, FJ, ZJ, cJ), await this._finishMaterialAsync(FJ, JJ);
        const AJ = this._exporter._materials;
        return AJ.push(FJ), AJ.length - 1
      }
      async exportTextureAsync(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = this._textureMap.get(cJ ?? JJ.uniqueId);
        if (ZJ) return ZJ;
        const FJ = this._exportTextureSampler(JJ),
          UJ = await this._exportTextureImageAsync(JJ);
        return ZJ = this._exportTextureInfo(UJ, FJ, JJ.coordinatesIndex), this._textureMap.set(cJ ?? JJ.uniqueId, ZJ), this._exporter._extensionsPostExportTextures("exporter", ZJ, JJ), ZJ
      }
      async _exportTextureImageAsync(JJ) {
        const cJ = JJ.mimeType ?? "none",
          ZJ = this._internalTextureToImage,
          FJ = JJ.getInternalTexture().uniqueId;
        ZJ[FJ] = ZJ[FJ] || {};
        let eJ = ZJ[FJ][cJ];
        return void 0 === eJ && (eJ = (async () => {
          const ZJ = await xZ(JJ);
          if (ZJ && VZ(ZJ.mimeType) && ("none" === cJ || ZJ.mimeType === cJ)) return await this._exportImageAsync(JJ.name, new Blob([ZJ.data], {
            type: ZJ.mimeType
          }));
          let FJ = "image/png";
          "none" !== cJ && (VZ(cJ) ? FJ = cJ : (FJ = "image/png", UJ.Tools.Warn(`Unsupported media type: ${cJ}. Exporting texture as PNG.`)));
          const eJ = JJ.getSize(),
            XJ = await (0, mJ.f)(JJ),
            AJ = await (0, KJ.EncodeImageAsync)(XJ, eJ.width, eJ.height, FJ);
          return await this._exportImageAsync(JJ.name, AJ)
        })(), ZJ[FJ][cJ] = eJ), await eJ
      }
      async _exportImageAsync(JJ, cJ) {
        const ZJ = this._exporter._images;
        let FJ;
        if (this._exporter._shouldUseGlb) {
          FJ = {
            name: JJ,
            mimeType: cJ.type,
            bufferView: void 0
          };
          const ZJ = await cJ.arrayBuffer(),
            UJ = this._exporter._bufferManager.createBufferView(new Uint8Array(ZJ));
          this._exporter._bufferManager.setBufferView(FJ, UJ)
        } else {
          const eJ = JJ.replace(/\.\/|\/|\.\\|\\/g, "_"),
            XJ = function(JJ) {
              switch (JJ) {
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
            }(cJ.type);
          let AJ = eJ + XJ;
          ZJ.some((JJ => JJ.uri === AJ)) && (AJ = `${eJ}_${UJ.Tools.RandomId()}${XJ}`), FJ = {
            name: JJ,
            uri: AJ
          }, this._exporter._imageData[AJ] = cJ
        }
        return ZJ.push(FJ), ZJ.length - 1
      }
      _exportTextureInfo(JJ, cJ, ZJ) {
        const FJ = this._exporter._textures;
        let UJ = FJ.findIndex((ZJ => ZJ.sampler == cJ && ZJ.source === JJ)); - 1 === UJ && (UJ = FJ.length, FJ.push({
          source: JJ,
          sampler: cJ
        }));
        const eJ = {
          index: UJ
        };
        return ZJ && (eJ.texCoord = ZJ), eJ
      }
      _exportTextureSampler(JJ) {
        const cJ = this._getTextureSampler(JJ),
          ZJ = this._exporter._samplers,
          FJ = ZJ.findIndex((JJ => JJ.minFilter === cJ.minFilter && JJ.magFilter === cJ.magFilter && JJ.wrapS === cJ.wrapS && JJ.wrapT === cJ.wrapT));
        return -1 !== FJ ? FJ : (ZJ.push(cJ), ZJ.length - 1)
      }
    }
    var wZ = ZJ(38859),
      WZ = ZJ(38982);
    (0, WZ.e)();
    var gZ = ZJ(36177);
    const HZ = FJ.Matrix.Compose(new FJ.Pn(-1, 1, 1), FJ.Quaternion.Identity(), FJ.Pn.Zero());

    function PZ(JJ, cJ) {
      if (!(JJ instanceof hJ.e)) return !1;
      if (cJ) {
        if (!JJ.getWorldMatrix().equalsWithEpsilon(FJ.Matrix.IdentityReadOnly, gZ.e)) return !1
      } else {
        if (!JJ.getWorldMatrix().multiplyToRef(HZ, FJ.TmpVectors.Matrix[0]).equalsWithEpsilon(FJ.Matrix.IdentityReadOnly, gZ.e)) return !1
      }
      return !(JJ instanceof DJ.d && JJ.geometry)
    }
    const kZ = FJ.Pn.ZeroReadOnly,
      pZ = FJ.Quaternion.Identity(),
      dZ = FJ.Pn.OneReadOnly,
      zZ = new FJ.Pn(-1, 1, 1);

    function NZ(JJ, cJ) {
      const {
        byteOffset: ZJ,
        byteStride: FJ,
        type: UJ,
        normalized: eJ
      } = JJ, XJ = JJ.getSize(), AJ = cJ.reduce(((JJ, cJ) => cJ.getTotalVertices() > JJ ? cJ.getTotalVertices() : JJ), -Number.MAX_VALUE);
      return {
        byteOffset: ZJ,
        byteStride: FJ,
        componentCount: XJ,
        type: UJ,
        count: AJ * XJ,
        normalized: eJ,
        totalVertices: AJ,
        kind: JJ.getKind()
      }
    }

    function OZ(JJ) {
      switch (JJ) {
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

    function TZ(JJ) {
      switch (JJ) {
        case YJ.e.PositionKind:
        case YJ.e.NormalKind:
        case YJ.e.TangentKind:
        case YJ.e.ColorKind:
        case YJ.e.MatricesIndicesKind:
        case YJ.e.MatricesIndicesExtraKind:
        case YJ.e.MatricesWeightsKind:
        case YJ.e.MatricesWeightsExtraKind:
        case YJ.e.UVKind:
        case YJ.e.UV2Kind:
        case YJ.e.UV3Kind:
        case YJ.e.UV4Kind:
        case YJ.e.UV5Kind:
        case YJ.e.UV6Kind:
          return !0
      }
      return !1
    }

    function CZ(JJ) {
      const cJ = Math.sqrt(JJ.x * JJ.x + JJ.y * JJ.y + JJ.z * JJ.z);
      cJ > 0 && (JJ.x /= cJ, JJ.y /= cJ, JJ.z /= cJ)
    }

    function uZ(JJ) {
      return JJ.x *= -1, JJ
    }

    function iZ(JJ) {
      if (JJ.x * JJ.x + JJ.y * JJ.y > .5) {
        const cJ = Math.abs(JJ.x),
          ZJ = Math.abs(JJ.y);
        if (cJ > ZJ) {
          const ZJ = Math.sign(JJ.x);
          JJ.x = cJ, JJ.y *= -ZJ, JJ.z *= -ZJ, JJ.w *= ZJ
        } else {
          const cJ = Math.sign(JJ.y);
          JJ.x *= -cJ, JJ.y = ZJ, JJ.z *= cJ, JJ.w *= -cJ
        }
      } else {
        const cJ = Math.abs(JJ.z),
          ZJ = Math.abs(JJ.w);
        if (cJ > ZJ) {
          const ZJ = Math.sign(JJ.z);
          JJ.x *= -ZJ, JJ.y *= ZJ, JJ.z = cJ, JJ.w *= -ZJ
        } else {
          const cJ = Math.sign(JJ.w);
          JJ.x *= cJ, JJ.y *= -cJ, JJ.z *= -cJ, JJ.w = ZJ
        }
      }
      return JJ
    }

    function RZ(JJ) {
      JJ.K9(-JJ.z, JJ.w, JJ.x, -JJ.y)
    }

    function LZ(JJ, cJ) {
      const ZJ = FJ.Pn.FromArrayToRef(cJ.translation || [0, 0, 0], 0, FJ.TmpVectors.Pn[0]),
        UJ = FJ.Quaternion.FromArrayToRef(cJ.rotation || [0, 0, 0, 1], 0, FJ.TmpVectors.Quaternion[0]),
        eJ = FJ.Matrix.ComposeToRef(dZ, UJ, ZJ, FJ.TmpVectors.Matrix[0]),
        XJ = FJ.Pn.FromArrayToRef(JJ.translation || [0, 0, 0], 0, FJ.TmpVectors.Pn[2]),
        AJ = FJ.Quaternion.FromArrayToRef(JJ.rotation || [0, 0, 0, 1], 0, FJ.TmpVectors.Quaternion[1]),
        qJ = FJ.Matrix.ComposeToRef(dZ, AJ, XJ, FJ.TmpVectors.Matrix[1]);
      eJ.multiplyToRef(qJ, qJ), qJ.decompose(void 0, UJ, ZJ), ZJ.equalsWithEpsilon(kZ, gZ.e) ? delete cJ.translation : cJ.translation = ZJ.JFJ(), UJ.equalsWithEpsilon(pZ, gZ.e) ? delete cJ.rotation : cJ.rotation = UJ.JFJ(), cJ.scale && delete cJ.scale
    }

    function aZ(JJ, cJ) {
      if (!(cJ instanceof hJ.e)) return !1;
      if (!(1 === cJ.getChildren().length && 0 === JJ.getChildren().length && JJ.parent === cJ)) return !1;
      const ZJ = JJ.Qy(),
        FJ = JJ instanceof WZ.h && !ZJ.useRightHandedSystem ? zZ : dZ;
      return !!cJ.GA.equalsWithEpsilon(FJ, gZ.e) || (IJ.c.Warn(`Cannot collapse node ${JJ.name} into parent node ${cJ.name} with modified scaling.`), !1)
    }

    function BZ(JJ) {
      if (JJ instanceof Array) {
        const cJ = new Float32Array(JJ);
        return new Uint8Array(cJ.buffer, cJ.byteOffset, cJ.byteLength)
      }
      return ArrayBuffer.isView(JJ) ? new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength) : new Uint8Array(JJ)
    }

    function tZ(JJ, cJ) {
      for (const [ZJ, FJ] of Object.entries(JJ)) {
        const UJ = cJ[ZJ];
        (Array.isArray(FJ) && Array.isArray(UJ) && oZ(FJ, UJ) || FJ === UJ) && delete JJ[ZJ]
      }
      return JJ
    }

    function oZ(JJ, cJ) {
      return JJ.length === cJ.length && JJ.every(((JJ, ZJ) => JJ === cJ[ZJ]))
    }
    const lZ = new Map([
      [Int8Array, (JJ, cJ, ZJ) => JJ.setInt8(cJ, ZJ)],
      [Uint8Array, (JJ, cJ, ZJ) => JJ.setUint8(cJ, ZJ)],
      [Uint8ClampedArray, (JJ, cJ, ZJ) => JJ.setUint8(cJ, ZJ)],
      [Int16Array, (JJ, cJ, ZJ) => JJ.setInt16(cJ, ZJ, !0)],
      [Uint16Array, (JJ, cJ, ZJ) => JJ.setUint16(cJ, ZJ, !0)],
      [Int32Array, (JJ, cJ, ZJ) => JJ.setInt32(cJ, ZJ, !0)],
      [Uint32Array, (JJ, cJ, ZJ) => JJ.setUint32(cJ, ZJ, !0)],
      [Float32Array, (JJ, cJ, ZJ) => JJ.setFloat32(cJ, ZJ, !0)],
      [Float64Array, (JJ, cJ, ZJ) => JJ.setFloat64(cJ, ZJ, !0)]
    ]);
    class JF {
      writeTypedArray(JJ) {
        this._checkGrowBuffer(JJ.byteLength);
        const cJ = lZ.get(JJ.constructor);
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ(this._dataView, this._byteOffset, JJ[ZJ]), this._byteOffset += JJ.BYTES_PER_ELEMENT
      }
      constructor(JJ) {
        this._data = new Uint8Array(JJ), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(JJ) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, JJ), this._byteOffset++
      }
      writeInt8(JJ) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, JJ), this._byteOffset++
      }
      writeInt16(JJ) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, JJ, !0), this._byteOffset += 2
      }
      writeUInt16(JJ) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, JJ, !0), this._byteOffset += 2
      }
      writeInt32(JJ) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, JJ, !0), this._byteOffset += 4
      }
      writeUInt32(JJ) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, JJ, !0), this._byteOffset += 4
      }
      writeFloat32(JJ) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, JJ, !0), this._byteOffset += 4
      }
      writeFloat64(JJ) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, JJ, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(JJ) {
        const cJ = this.byteOffset + JJ;
        if (cJ > this._data.byteLength) {
          const JJ = new Uint8Array(2 * cJ);
          JJ.set(this._data), this._data = JJ, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function cF(JJ) {
      return JJ % 4 === 0 ? 4 : JJ % 2 === 0 ? 2 : 1
    }
    class ZF {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(JJ) {
        let cJ = 0;
        this._bufferViewToData.forEach((JJ => {
          cJ += JJ.byteLength
        }));
        const ZJ = new JF(cJ),
          FJ = Array.from(this._bufferViewToData.keys()).sort(((JJ, cJ) => cF(cJ.byteLength) - cF(JJ.byteLength)));
        for (const UJ of FJ) {
          UJ.byteOffset = ZJ.byteOffset, JJ.push(UJ);
          const cJ = JJ.length - 1,
            FJ = this.getPropertiesWithBufferView(UJ);
          for (const JJ of FJ) JJ.bufferView = cJ;
          ZJ.writeTypedArray(this._bufferViewToData.get(UJ)), this._bufferViewToData.delete(UJ)
        }
        return ZJ.getOutputData()
      }
      createBufferView(JJ, cJ) {
        const ZJ = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: JJ.byteLength,
          byteStride: cJ
        };
        return this._bufferViewToData.set(ZJ, JJ), ZJ
      }
      createAccessor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        this._verifyBufferView(JJ);
        const AJ = {
          bufferView: void 0,
          componentType: ZJ,
          count: FJ,
          type: cJ,
          min: eJ?.min,
          max: eJ?.max,
          normalized: XJ,
          byteOffset: UJ
        };
        return this.setBufferView(AJ, JJ), this._accessorToBufferView.set(AJ, JJ), AJ
      }
      setBufferView(JJ, cJ) {
        this._verifyBufferView(cJ);
        this.getPropertiesWithBufferView(cJ).push(JJ)
      }
      removeBufferView(JJ) {
        const cJ = this.getPropertiesWithBufferView(JJ);
        for (const ZJ of cJ) void 0 !== ZJ.bufferView && delete ZJ.bufferView;
        this._bufferViewToData.delete(JJ), this._bufferViewToProperties.delete(JJ), this._accessorToBufferView.forEach(((cJ, ZJ) => {
          cJ === JJ && (void 0 !== ZJ.byteOffset && delete ZJ.byteOffset, this._accessorToBufferView.delete(ZJ))
        }))
      }
      getBufferView(JJ) {
        const cJ = this._accessorToBufferView.get(JJ);
        return this._verifyBufferView(cJ), cJ
      }
      getPropertiesWithBufferView(JJ) {
        return this._verifyBufferView(JJ), this._bufferViewToProperties.set(JJ, this._bufferViewToProperties.get(JJ) ?? []), this._bufferViewToProperties.get(JJ)
      }
      getData(JJ) {
        return this._verifyBufferView(JJ), this._bufferViewToData.get(JJ)
      }
      _verifyBufferView(JJ) {
        if (void 0 === JJ || !this._bufferViewToData.has(JJ)) throw new Error(`BufferView ${JJ} not found in BufferManager.`)
      }
    }
    var FF = ZJ(38986);
    (0, FF.h)();
    var UF = ZJ(39213);
    (0, UF.d)();
    var eF = ZJ(39029),
      XF = ZJ(39958);
    (0, XF.g)();
    let AF = (() => {
      var JJ;
      let cJ, ZJ, FJ = [],
        UJ = [],
        eJ = [],
        XJ = [];
      return JJ = class {
        get influence() {
          return this._influence
        }
        set influence(JJ) {
          if (this._influence === JJ) return;
          const cJ = this._influence;
          this._influence = JJ, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === cJ || 0 === JJ)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(JJ) {
          this._animationPropertiesOverride = JJ
        }
        constructor(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            AJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = JJ, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new JZ.c, this._onDataLayoutChanged = new JZ.c, this.id = (0, yJ.e)(this, FJ, void 0), this.morphTargetManager = ((0, yJ.e)(this, UJ), (0, yJ.e)(this, eJ, null)), this._animationPropertiesOverride = ((0, yJ.e)(this, XJ), null), this.id = JJ, this.morphTargetManager = AJ, this._scene = ZJ || GJ.c.LastCreatedScene, this.influence = cJ, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        VXJ(JJ) {
          const cJ = this.hasPositions;
          this._positions = JJ, cJ !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(JJ) {
          const cJ = this.hasNormals;
          this._normals = JJ, cJ !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(JJ) {
          const cJ = this.hasTangents;
          this._tangents = JJ, cJ !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(JJ) {
          const cJ = this.hasUVs;
          this._uvs = JJ, cJ !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(JJ) {
          const cJ = this.hasUV2s;
          this._uv2s = JJ, cJ !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(JJ) {
          const cJ = this.hasColors;
          this._colors = JJ, cJ !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const cJ = Vc.c.Clone((() => new JJ(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return cJ._positions = this._positions, cJ._normals = this._normals, cJ._tangents = this._tangents, cJ._uvs = this._uvs, cJ._uv2s = this._uv2s, cJ._colors = this._colors, cJ
        }
        serialize() {
          const JJ = {};
          return JJ.name = this.name, JJ.influence = this.influence, null != this.id && (JJ.id = this.id), JJ.uniqueId = this.uniqueId, JJ.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (JJ.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (JJ.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (JJ.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (JJ.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (JJ.colors = Array.prototype.slice.call(this.getColors())), Vc.c.AppendSerializedAnimations(this, JJ), JJ
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(cJ, ZJ) {
          let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const UJ = new JJ(cJ.name, cJ.influence, ZJ, FJ);
          if (UJ.VXJ(cJ.positions), null != cJ.id && (UJ.id = cJ.id), cJ.normals && UJ.setNormals(cJ.normals), cJ.tangents && UJ.setTangents(cJ.tangents), cJ.uvs && UJ.setUVs(cJ.uvs), cJ.uv2s && UJ.setUV2s(cJ.uv2s), cJ.colors && UJ.setColors(cJ.colors), cJ.animations) {
            for (let JJ = 0; JJ < cJ.animations.length; JJ++) {
              const ZJ = cJ.animations[JJ],
                FJ = (0, Oc.e)("BABYLON.Animation");
              FJ && UJ.animations.push(FJ.Parse(ZJ))
            }
            cJ.autoAnimate && ZJ && ZJ.beginAnimation(UJ, cJ.autoAnimateFrom, cJ.autoAnimateTo, cJ.autoAnimateLoop, cJ.autoAnimateSpeed || 1)
          }
          return UJ
        }
        static FromMesh(cJ, ZJ, FJ) {
          ZJ || (ZJ = cJ.name);
          const UJ = new JJ(ZJ, FJ, cJ.Qy(), cJ.morphTargetManager);
          return UJ.VXJ(cJ.getVerticesData(zJ.n.PositionKind)), cJ.isVerticesDataPresent(zJ.n.NormalKind) && UJ.setNormals(cJ.getVerticesData(zJ.n.NormalKind)), cJ.isVerticesDataPresent(zJ.n.TangentKind) && UJ.setTangents(cJ.getVerticesData(zJ.n.TangentKind)), cJ.isVerticesDataPresent(zJ.n.UVKind) && UJ.setUVs(cJ.getVerticesData(zJ.n.UVKind)), cJ.isVerticesDataPresent(zJ.n.UV2Kind) && UJ.setUV2s(cJ.getVerticesData(zJ.n.UV2Kind)), cJ.isVerticesDataPresent(zJ.n.ColorKind) && UJ.setColors(cJ.getVerticesData(zJ.n.ColorKind)), UJ
        }
      }, (() => {
        const AJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [(0, SJ.F)()], ZJ = [(0, SJ.F)()], (0, yJ.d)(null, null, cJ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: JJ => "id" in JJ,
            get: JJ => JJ.id,
            set: (JJ, cJ) => {
              JJ.id = cJ
            }
          },
          metadata: AJ
        }, FJ, UJ), (0, yJ.d)(null, null, ZJ, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: JJ => "morphTargetManager" in JJ,
            get: JJ => JJ.morphTargetManager,
            set: (JJ, cJ) => {
              JJ.morphTargetManager = cJ
            }
          },
          metadata: AJ
        }, eJ, XJ), AJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AJ
        })
      })(), JJ
    })();
    var qF, jF = ZJ(40024),
      YF = ZJ(39023);
    ! function(JJ) {
      JJ[JJ.INTANGENT = 0] = "INTANGENT", JJ[JJ.OUTTANGENT = 1] = "OUTTANGENT"
    }(qF || (qF = {}));
    class hF {
      static _IsTransformable(JJ) {
        return JJ && (JJ instanceof hJ.e || JJ instanceof FF.e || JJ instanceof YF.b)
      }
      static _CreateNodeAnimation(JJ, cJ, ZJ, FJ, eJ) {
        if (this._IsTransformable(JJ)) {
          const XJ = [],
            AJ = [],
            qJ = cJ.getKeys(),
            jJ = hF._CalculateMinMaxKeyFrames(qJ),
            YJ = hF._DeduceInterpolation(qJ, ZJ, FJ),
            hJ = YJ.interpolationType,
            DJ = YJ.shouldBakeAnimation;
          if (DJ ? hF._CreateBakedAnimation(JJ, cJ, ZJ, jJ.min, jJ.max, cJ.framePerSecond, eJ, XJ, AJ, jJ, FJ) : "LINEAR" === hJ || "STEP" === hJ ? hF._CreateLinearOrStepAnimation(JJ, cJ, ZJ, XJ, AJ, FJ) : "CUBICSPLINE" === hJ ? hF._CreateCubicSplineAnimation(JJ, cJ, ZJ, XJ, AJ, FJ) : hF._CreateBakedAnimation(JJ, cJ, ZJ, jJ.min, jJ.max, cJ.framePerSecond, eJ, XJ, AJ, jJ, FJ), XJ.length && AJ.length) {
            return {
              inputs: XJ,
              outputs: AJ,
              samplerInterpolation: hJ,
              inputsMin: DJ ? jJ.min : UJ.Tools.FloatRound(jJ.min / cJ.framePerSecond),
              inputsMax: DJ ? jJ.max : UJ.Tools.FloatRound(jJ.max / cJ.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(JJ) {
        let cJ = null,
          ZJ = "VEC3",
          FJ = !1;
        const eJ = JJ.targetProperty.split(".");
        switch (eJ[0]) {
          case "GA":
            cJ = "scale";
            break;
          case "position":
            cJ = "translation";
            break;
          case "rotation":
            ZJ = "VEC4", cJ = "rotation";
            break;
          case "rotationQuaternion":
            ZJ = "VEC4", FJ = !0, cJ = "rotation";
            break;
          case "influence":
            ZJ = "SCALAR", cJ = "weights";
            break;
          default:
            UJ.Tools.Error(`Unsupported animatable property ${eJ[0]}`)
        }
        return cJ ? {
          animationChannelTargetPath: cJ,
          dataAccessorType: ZJ,
          useQuaternion: FJ
        } : (UJ.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        let hJ;
        if (hF._IsTransformable(JJ) && JJ.animations)
          for (const DJ of JJ.animations) {
            if (YJ && !YJ(DJ)) continue;
            const UJ = hF._DeduceAnimationInfo(DJ);
            UJ && (hJ = {
              name: DJ.name,
              samplers: [],
              channels: []
            }, hF._AddAnimation(`${DJ.name}`, DJ.hasRunningRuntimeAnimations ? cJ : hJ, JJ, DJ, UJ.dataAccessorType, UJ.animationChannelTargetPath, FJ, eJ, XJ, AJ, UJ.useQuaternion, qJ, jJ), hJ.samplers.length && hJ.channels.length && ZJ.push(hJ))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        let hJ;
        if (JJ instanceof jF.d) {
          const UJ = JJ.morphTargetManager;
          if (UJ)
            for (let DJ = 0; DJ < UJ.numTargets; ++DJ) {
              const sJ = UJ.getTarget(DJ);
              for (const nJ of sJ.animations) {
                if (YJ && !YJ(nJ)) continue;
                const sJ = new XF.c(`${nJ.name}`, "influence", nJ.framePerSecond, nJ.dataType, nJ.Mc, nJ.enableBlending),
                  GJ = [],
                  fJ = nJ.getKeys();
                for (let JJ = 0; JJ < fJ.length; ++JJ) {
                  const cJ = fJ[JJ];
                  for (let JJ = 0; JJ < UJ.numTargets; ++JJ) JJ == DJ ? GJ.push(cJ) : GJ.push({
                    frame: cJ.frame,
                    value: 0
                  })
                }
                sJ.setKeys(GJ, !0);
                const xJ = hF._DeduceAnimationInfo(sJ);
                xJ && (hJ = {
                  name: sJ.name,
                  samplers: [],
                  channels: []
                }, hF._AddAnimation(nJ.name, nJ.hasRunningRuntimeAnimations ? cJ : hJ, JJ, sJ, xJ.dataAccessorType, xJ.animationChannelTargetPath, FJ, eJ, XJ, AJ, xJ.useQuaternion, qJ, jJ, UJ.numTargets), hJ.samplers.length && hJ.channels.length && ZJ.push(hJ))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        let YJ;
        if (JJ.animationGroups) {
          const hJ = JJ.animationGroups;
          for (const DJ of hJ) {
            const hJ = new Map,
              sJ = new Map,
              nJ = new Set,
              GJ = DJ.to - DJ.from;
            YJ = {
              name: DJ.name,
              channels: [],
              samplers: []
            };
            for (let cJ = 0; cJ < DJ.targetedAnimations.length; ++cJ) {
              const jJ = DJ.targetedAnimations[cJ],
                GJ = jJ.target,
                fJ = jJ.animation;
              if (qJ && !qJ(fJ)) continue;
              const xJ = AJ.has(GJ);
              if (this._IsTransformable(GJ) || 1 === GJ.length && this._IsTransformable(GJ[0])) {
                const JJ = hF._DeduceAnimationInfo(jJ.animation);
                if (JJ) {
                  const cJ = this._IsTransformable(GJ) ? GJ : this._IsTransformable(GJ[0]) ? GJ[0] : null;
                  cJ && hF._AddAnimation(`${fJ.name}`, YJ, cJ, fJ, JJ.dataAccessorType, JJ.animationChannelTargetPath, ZJ, FJ, UJ, eJ, JJ.useQuaternion, XJ, xJ)
                }
              } else if (GJ instanceof AF || 1 === GJ.length && GJ[0] instanceof AF) {
                if (hF._DeduceAnimationInfo(jJ.animation)) {
                  const cJ = GJ instanceof AF ? GJ : GJ[0];
                  if (cJ) {
                    const ZJ = JJ.morphTargetManagers.find((JJ => {
                      for (let ZJ = 0; ZJ < JJ.numTargets; ++ZJ)
                        if (JJ.getTarget(ZJ) === cJ) return !0;
                      return !1
                    }));
                    if (ZJ) {
                      const FJ = JJ.meshes.find((JJ => JJ.morphTargetManager === ZJ));
                      FJ && (hJ.has(FJ) || hJ.set(FJ, new Map), hJ.get(FJ)?.set(cJ, fJ), nJ.add(FJ), sJ.set(FJ, fJ))
                    }
                  }
                }
              }
            }
            nJ.forEach((JJ => {
              const cJ = JJ.morphTargetManager;
              let AJ = null;
              const qJ = [],
                jJ = sJ.get(JJ).getKeys(),
                nJ = jJ.length;
              for (let ZJ = 0; ZJ < nJ; ++ZJ)
                for (let FJ = 0; FJ < cJ.numTargets; ++FJ) {
                  const UJ = cJ.getTarget(FJ),
                    eJ = hJ.get(JJ);
                  if (eJ) {
                    const cJ = eJ.get(UJ);
                    cJ ? (AJ || (AJ = new XF.c(`${DJ.name}_${JJ.name}_MorphWeightAnimation`, "influence", cJ.framePerSecond, XF.c.ANIMATIONTYPE_FLOAT, cJ.Mc, cJ.enableBlending)), qJ.push(cJ.getKeys()[ZJ])) : qJ.push({
                      frame: DJ.from + GJ / nJ * ZJ,
                      value: UJ.influence,
                      inTangent: jJ[0].inTangent ? 0 : void 0,
                      outTangent: jJ[0].outTangent ? 0 : void 0
                    })
                  }
                }
              AJ.setKeys(qJ, !0);
              const fJ = hF._DeduceAnimationInfo(AJ);
              fJ && hF._AddAnimation(`${DJ.name}_${JJ.name}_MorphWeightAnimation`, YJ, JJ, AJ, fJ.dataAccessorType, fJ.animationChannelTargetPath, ZJ, FJ, UJ, eJ, fJ.useQuaternion, XJ, !1, cJ?.numTargets)
            })), YJ.channels.length && YJ.samplers.length && (jJ?.set(DJ, cJ.length), cJ.push(YJ))
          }
        }
      }
      static _AddAnimation(JJ, cJ, ZJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ) {
        const GJ = hF._CreateNodeAnimation(ZJ, UJ, XJ, hJ, DJ);
        let fJ, xJ, rJ, vJ, mJ, QJ;
        if (GJ) {
          if (nJ) {
            let JJ, cJ = 0;
            const ZJ = [];
            for (; GJ.inputs.length > 0;) JJ = GJ.inputs.shift(), cJ % nJ == 0 && ZJ.push(JJ), cJ++;
            GJ.inputs = ZJ
          }
          const JJ = AJ.get(ZJ),
            UJ = new Float32Array(GJ.inputs);
          fJ = qJ.createBufferView(UJ), xJ = qJ.createAccessor(fJ, "SCALAR", 5126, GJ.inputs.length, void 0, {
            min: [GJ.inputsMin],
            max: [GJ.inputsMax]
          }), YJ.push(xJ), rJ = YJ.length - 1;
          const jJ = new FJ.Quaternion,
            hJ = new FJ.Pn,
            DJ = new FJ.Pn,
            EJ = ZJ instanceof FF.e,
            VJ = OZ(eJ),
            KJ = new Float32Array(GJ.outputs.length * VJ);
          GJ.outputs.forEach((function(JJ, cJ) {
            let ZJ = JJ;
            switch (XJ) {
              case "translation":
                sJ && (FJ.Pn.FromArrayToRef(JJ, 0, DJ), uZ(DJ), DJ.toArray(ZJ));
                break;
              case "rotation":
                4 === JJ.length ? FJ.Quaternion.FromArrayToRef(JJ, 0, jJ) : (ZJ = new Array(4), FJ.Pn.FromArrayToRef(JJ, 0, hJ), FJ.Quaternion.FromEulerVectorToRef(hJ, jJ)), sJ && (iZ(jJ), EJ && RZ(jJ)), jJ.toArray(ZJ)
            }
            KJ.set(ZJ, cJ * VJ)
          })), fJ = qJ.createBufferView(KJ), xJ = qJ.createAccessor(fJ, eJ, 5126, GJ.outputs.length), YJ.push(xJ), vJ = YJ.length - 1, mJ = {
            interpolation: GJ.samplerInterpolation,
            input: rJ,
            output: vJ
          }, cJ.samplers.push(mJ), QJ = {
            sampler: cJ.samplers.length - 1,
            target: {
              node: JJ,
              path: XJ
            }
          }, cJ.channels.push(QJ)
        }
      }
      static _CreateBakedAnimation(JJ, cJ, ZJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ) {
        let sJ;
        const nJ = FJ.Quaternion.Identity();
        let GJ, fJ, xJ, rJ, vJ, mJ = null,
          QJ = null;
        hJ.min = UJ.Tools.FloatRound(eJ / AJ);
        const EJ = cJ.getKeys();
        for (let FJ = 0, VJ = EJ.length; FJ < VJ; ++FJ) {
          if (fJ = EJ[FJ], FJ + 1 < VJ)
            if (xJ = EJ[FJ + 1], fJ.value.equals && fJ.value.equals(xJ.value) || fJ.value === xJ.value) {
              if (0 !== FJ) continue;
              vJ = fJ.frame
            } else vJ = xJ.frame;
          else {
            if (rJ = EJ[FJ - 1], fJ.value.equals && fJ.value.equals(rJ.value) || fJ.value === rJ.value) continue;
            vJ = XJ
          }
          if (vJ)
            for (let FJ = fJ.frame; FJ <= vJ; FJ += qJ) {
              if (GJ = UJ.Tools.FloatRound(FJ / AJ), GJ === mJ) continue;
              mJ = GJ, QJ = GJ;
              const eJ = {
                key: 0,
                repeatCount: 0,
                Mc: cJ.Mc
              };
              sJ = cJ._interpolate(FJ, eJ), hF._SetInterpolatedValue(JJ, sJ, GJ, cJ, ZJ, nJ, jJ, YJ, DJ)
            }
        }
        QJ && (hJ.max = QJ)
      }
      static _ConvertFactorToVector3OrQuaternion(JJ, cJ, ZJ, eJ, XJ) {
        const AJ = hF._GetBasePositionRotationOrScale(cJ, eJ, XJ),
          qJ = ZJ.targetProperty.split("."),
          jJ = qJ ? qJ[1] : "",
          YJ = XJ ? FJ.Quaternion.FromArray(AJ).normalize() : FJ.Pn.FromArray(AJ);
        switch (jJ) {
          case "x":
          case "y":
          case "z":
            YJ[jJ] = JJ;
            break;
          case "w":
            YJ.w = JJ;
            break;
          default:
            UJ.Tools.Error(`glTFAnimation: Unsupported component name "${jJ}"!`)
        }
        return YJ
      }
      static _SetInterpolatedValue(JJ, cJ, ZJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        let YJ;
        AJ.push(ZJ), "weights" !== eJ ? (UJ.dataType === XF.c.ANIMATIONTYPE_FLOAT && (cJ = this._ConvertFactorToVector3OrQuaternion(cJ, JJ, UJ, eJ, jJ)), "rotation" === eJ ? (jJ ? XJ = cJ : (YJ = cJ, FJ.Quaternion.RotationYawPitchRollToRef(YJ.y, YJ.x, YJ.z, XJ)), qJ.push(XJ.JFJ())) : (YJ = cJ, qJ.push(YJ.JFJ()))) : qJ.push([cJ])
      }
      static _CreateLinearOrStepAnimation(JJ, cJ, ZJ, FJ, UJ, eJ) {
        for (const XJ of cJ.getKeys()) FJ.push(XJ.frame / cJ.framePerSecond), hF._AddKeyframeValue(XJ, cJ, UJ, ZJ, JJ, eJ)
      }
      static _CreateCubicSplineAnimation(JJ, cJ, ZJ, FJ, UJ, eJ) {
        cJ.getKeys().forEach((function(XJ) {
          FJ.push(XJ.frame / cJ.framePerSecond), hF._AddSplineTangent(qF.INTANGENT, UJ, ZJ, "CUBICSPLINE", XJ, eJ), hF._AddKeyframeValue(XJ, cJ, UJ, ZJ, JJ, eJ), hF._AddSplineTangent(qF.OUTTANGENT, UJ, ZJ, "CUBICSPLINE", XJ, eJ)
        }))
      }
      static _GetBasePositionRotationOrScale(JJ, cJ, ZJ) {
        let UJ;
        if ("rotation" === cJ)
          if (ZJ) {
            UJ = (JJ.rotationQuaternion ?? FJ.Quaternion.Identity()).JFJ()
          } else {
            UJ = (JJ.rotation ?? FJ.Pn.Zero()).JFJ()
          }
        else if ("translation" === cJ) {
          UJ = (JJ.position ?? FJ.Pn.Zero()).JFJ()
        } else {
          UJ = (JJ.GA ?? FJ.Pn.One()).JFJ()
        }
        return UJ
      }
      static _AddKeyframeValue(JJ, cJ, ZJ, eJ, XJ, AJ) {
        let qJ;
        const jJ = cJ.dataType;
        if (jJ === XF.c.ANIMATIONTYPE_VECTOR3) {
          let cJ = JJ.value.JFJ();
          if ("rotation" === eJ) {
            const JJ = FJ.Pn.FromArray(cJ);
            cJ = FJ.Quaternion.RotationYawPitchRoll(JJ.y, JJ.x, JJ.z).JFJ()
          }
          ZJ.push(cJ)
        } else if (jJ === XF.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === eJ) ZJ.push([JJ.value]);
          else if (qJ = this._ConvertFactorToVector3OrQuaternion(JJ.value, XJ, cJ, eJ, AJ), qJ) {
            if ("rotation" === eJ) {
              const JJ = AJ ? qJ : FJ.Quaternion.RotationYawPitchRoll(qJ.y, qJ.x, qJ.z).normalize();
              ZJ.push(JJ.JFJ())
            }
            ZJ.push(qJ.JFJ())
          }
        } else jJ === XF.c.ANIMATIONTYPE_QUATERNION ? ZJ.push(JJ.value.normalize().JFJ()) : UJ.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(JJ, cJ, ZJ) {
        let FJ, UJ, eJ = !1;
        if ("rotation" === cJ && !ZJ) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let XJ = 0, AJ = JJ.length; XJ < AJ; ++XJ)
          if (UJ = JJ[XJ], UJ.inTangent || UJ.outTangent)
            if (FJ) {
              if ("CUBICSPLINE" !== FJ) {
                FJ = "LINEAR", eJ = !0;
                break
              }
            } else FJ = "CUBICSPLINE";
        else if (FJ) {
          if ("CUBICSPLINE" === FJ || UJ.interpolation && 1 === UJ.interpolation && "STEP" !== FJ) {
            FJ = "LINEAR", eJ = !0;
            break
          }
        } else FJ = UJ.interpolation && 1 === UJ.interpolation ? "STEP" : "LINEAR";
        return FJ || (FJ = "LINEAR"), {
          interpolationType: FJ,
          shouldBakeAnimation: eJ
        }
      }
      static _AddSplineTangent(JJ, cJ, ZJ, UJ, eJ, XJ) {
        let AJ;
        const qJ = JJ === qF.INTANGENT ? eJ.inTangent : eJ.outTangent;
        if ("CUBICSPLINE" === UJ) {
          if ("rotation" === ZJ)
            if (qJ)
              if (XJ) AJ = qJ.JFJ();
              else {
                const JJ = qJ;
                AJ = FJ.Quaternion.RotationYawPitchRoll(JJ.y, JJ.x, JJ.z).JFJ()
              }
          else AJ = [0, 0, 0, 0];
          else AJ = "weights" === ZJ ? qJ ? [qJ] : [0] : qJ ? qJ.JFJ() : [0, 0, 0];
          cJ.push(AJ)
        }
      }
      static _CalculateMinMaxKeyFrames(JJ) {
        let cJ = 1 / 0,
          ZJ = -1 / 0;
        return JJ.forEach((function(JJ) {
          cJ = Math.min(cJ, JJ.frame), ZJ = Math.max(ZJ, JJ.frame)
        })), {
          min: cJ,
          max: ZJ
        }
      }
    }

    function DF(JJ, cJ, ZJ, eJ, XJ, AJ) {
      const qJ = {
          attributes: {},
          influence: JJ.influence,
          name: JJ.name
        },
        jJ = cJ.geometry;
      if (!jJ) return UJ.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), qJ;
      const hJ = AJ ? -1 : 1,
        DJ = FJ.Pn.Zero();
      let sJ, nJ;
      if (JJ.hasPositions) {
        const eJ = JJ.getPositions(),
          AJ = jJ.getVerticesData(YJ.e.PositionKind);
        if (AJ) {
          const JJ = new Float32Array(AJ.length),
            cJ = [1 / 0, 1 / 0, 1 / 0],
            UJ = [-1 / 0, -1 / 0, -1 / 0];
          nJ = AJ.length / 3, sJ = 0;
          for (let ZJ = sJ; ZJ < nJ; ++ZJ) {
            const XJ = FJ.Pn.FromArray(AJ, 3 * ZJ);
            FJ.Pn.FromArray(eJ, 3 * ZJ).subtractToRef(XJ, DJ), DJ.x *= hJ, cJ[0] = Math.min(cJ[0], DJ.x), UJ[0] = Math.max(UJ[0], DJ.x), cJ[1] = Math.min(cJ[1], DJ.y), UJ[1] = Math.max(UJ[1], DJ.y), cJ[2] = Math.min(cJ[2], DJ.z), UJ[2] = Math.max(UJ[2], DJ.z), JJ[3 * ZJ] = DJ.x, JJ[3 * ZJ + 1] = DJ.y, JJ[3 * ZJ + 2] = DJ.z
          }
          const jJ = ZJ.createBufferView(JJ, 12),
            YJ = ZJ.createAccessor(jJ, "VEC3", 5126, eJ.length / 3, 0, {
              min: cJ,
              max: UJ
            });
          XJ.push(YJ), qJ.attributes.POSITION = XJ.length - 1
        } else UJ.Tools.Warn(`Morph target positions for mesh ${cJ.name} were not exported. Mesh does not have position vertex data`)
      }
      if (JJ.hasNormals) {
        const eJ = JJ.getNormals(),
          AJ = jJ.getVerticesData(YJ.e.NormalKind);
        if (AJ) {
          const JJ = new Float32Array(AJ.length);
          nJ = AJ.length / 3, sJ = 0;
          for (let ZJ = sJ; ZJ < nJ; ++ZJ) {
            const cJ = FJ.Pn.FromArray(AJ, 3 * ZJ).normalize();
            FJ.Pn.FromArray(eJ, 3 * ZJ).normalize().subtractToRef(cJ, DJ), JJ[3 * ZJ] = DJ.x * hJ, JJ[3 * ZJ + 1] = DJ.y, JJ[3 * ZJ + 2] = DJ.z
          }
          const cJ = ZJ.createBufferView(JJ, 12),
            UJ = ZJ.createAccessor(cJ, "VEC3", 5126, eJ.length / 3, 0);
          XJ.push(UJ), qJ.attributes.NORMAL = XJ.length - 1
        } else UJ.Tools.Warn(`Morph target normals for mesh ${cJ.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (JJ.hasTangents) {
        const eJ = JJ.getTangents(),
          AJ = jJ.getVerticesData(YJ.e.TangentKind);
        if (AJ) {
          nJ = AJ.length / 4;
          const JJ = new Float32Array(3 * nJ);
          sJ = 0;
          for (let ZJ = sJ; ZJ < nJ; ++ZJ) {
            const cJ = FJ.Pn.FromArray(AJ, 4 * ZJ);
            CZ(cJ);
            const UJ = FJ.Pn.FromArray(eJ, 3 * ZJ);
            CZ(UJ), UJ.subtractToRef(cJ, DJ), JJ[3 * ZJ] = DJ.x * hJ, JJ[3 * ZJ + 1] = DJ.y, JJ[3 * ZJ + 2] = DJ.z
          }
          const cJ = ZJ.createBufferView(JJ, 12),
            UJ = ZJ.createAccessor(cJ, "VEC3", 5126, nJ, 0);
          XJ.push(UJ), qJ.attributes.TANGENT = XJ.length - 1
        } else UJ.Tools.Warn(`Morph target tangents for mesh ${cJ.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (JJ.hasColors) {
        const eJ = JJ.getColors(),
          AJ = jJ.getVerticesData(YJ.e.ColorKind),
          hJ = jJ.getVertexBuffer(YJ.e.ColorKind);
        if (AJ && hJ) {
          const JJ = hJ.getSize();
          nJ = AJ.length / JJ;
          const cJ = new Float32Array(nJ * JJ);
          sJ = 0;
          for (let ZJ = sJ; ZJ < nJ; ++ZJ)
            if (3 === JJ) {
              const UJ = FJ.Pn.FromArray(AJ, ZJ * JJ);
              FJ.Pn.FromArray(eJ, ZJ * JJ).subtractToRef(UJ, DJ), cJ[3 * ZJ] = DJ.x, cJ[3 * ZJ + 1] = DJ.y, cJ[3 * ZJ + 2] = DJ.z
            } else if (4 === JJ) {
            const UJ = new FJ.Vector4,
              XJ = FJ.Vector4.FromArray(AJ, ZJ * JJ);
            FJ.Vector4.FromArray(eJ, ZJ * JJ).subtractToRef(XJ, UJ), cJ[4 * ZJ] = UJ.x, cJ[4 * ZJ + 1] = UJ.y, cJ[4 * ZJ + 2] = UJ.z, cJ[4 * ZJ + 3] = UJ.w
          } else UJ.Tools.Warn(`Unsupported number of components for color attribute: ${JJ}`);
          const jJ = ZJ.createBufferView(cJ, 4 * JJ),
            YJ = ZJ.createAccessor(jJ, 3 === JJ ? "VEC3" : "VEC4", 5126, nJ, 0);
          XJ.push(YJ), qJ.attributes.COLOR_0 = XJ.length - 1
        } else UJ.Tools.Warn(`Morph target colors for mesh ${cJ.name} were not exported. Mesh does not have colors vertex data`)
      }
      return qJ
    }
    var sF = ZJ(40315);
    class nF {}
    nF.DEFAULT_COLOR = iJ.e.White(), nF.DEFAULT_WIDTH_ATTENUATED = 1, nF.DEFAULT_WIDTH = .1;
    var GF = ZJ(39956);
    class fF {
      constructor(JJ) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = JJ
      }
      moveTo(JJ, cJ) {
        this._currentPath = new GF.k(JJ, cJ), this._tempPaths.push(this._currentPath)
      }
      lineTo(JJ, cJ) {
        this._currentPath.addLineTo(JJ, cJ)
      }
      quadraticCurveTo(JJ, cJ, ZJ, FJ) {
        this._currentPath.addQuadraticCurveTo(JJ, cJ, ZJ, FJ, this._resolution)
      }
      bezierCurveTo(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this._currentPath.addBezierCurveTo(JJ, cJ, ZJ, FJ, UJ, eJ, this._resolution)
      }
      extractHoles() {
        for (const JJ of this._tempPaths) JJ.area() > 0 ? this._holes.push(JJ) : this._paths.push(JJ);
        if (!this._paths.length && this._holes.length) {
          const JJ = this._holes;
          this._holes = this._paths, this._paths = JJ
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

    function xF(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = eJ.glyphs[JJ] || eJ.glyphs["?"];
      if (!XJ) return null;
      const AJ = new fF(UJ);
      if (XJ.o) {
        const JJ = XJ.o.split(" ");
        for (let UJ = 0, eJ = JJ.length; UJ < eJ;) {
          switch (JJ[UJ++]) {
            case "m": {
              const eJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                XJ = parseInt(JJ[UJ++]) * cJ + FJ;
              AJ.moveTo(eJ, XJ);
              break
            }
            case "l": {
              const eJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                XJ = parseInt(JJ[UJ++]) * cJ + FJ;
              AJ.lineTo(eJ, XJ);
              break
            }
            case "q": {
              const eJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                XJ = parseInt(JJ[UJ++]) * cJ + FJ,
                qJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                jJ = parseInt(JJ[UJ++]) * cJ + FJ;
              AJ.quadraticCurveTo(qJ, jJ, eJ, XJ);
              break
            }
            case "b": {
              const eJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                XJ = parseInt(JJ[UJ++]) * cJ + FJ,
                qJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                jJ = parseInt(JJ[UJ++]) * cJ + FJ,
                YJ = parseInt(JJ[UJ++]) * cJ + ZJ,
                hJ = parseInt(JJ[UJ++]) * cJ + FJ;
              AJ.bezierCurveTo(qJ, jJ, YJ, hJ, eJ, XJ);
              break
            }
          }
        }
      }
      return AJ.extractHoles(), {
        offsetX: XJ.ha * cJ,
        shapePath: AJ
      }
    }

    function rF(JJ, cJ, ZJ, FJ) {
      const UJ = Array.from(JJ),
        eJ = cJ / FJ.resolution,
        XJ = (FJ.boundingBox.yMax - FJ.boundingBox.yMin + FJ.underlineThickness) * eJ,
        AJ = [];
      let qJ = 0,
        jJ = 0;
      for (let YJ = 0; YJ < UJ.length; YJ++) {
        const JJ = UJ[YJ];
        if ("\n" === JJ) qJ = 0, jJ -= XJ;
        else {
          const cJ = xF(JJ, eJ, qJ, jJ, ZJ, FJ);
          cJ && (qJ += cJ.offsetX, AJ.push(cJ.shapePath))
        }
      }
      return AJ
    }
    class vF {
      static ConvertPoints(JJ, cJ) {
        if (JJ.length && Array.isArray(JJ) && "number" === typeof JJ[0]) return [JJ];
        if (JJ.length && Array.isArray(JJ[0]) && "number" === typeof JJ[0][0]) return JJ;
        if (JJ.length && !Array.isArray(JJ[0]) && JJ[0] instanceof dJ.j) {
          const cJ = [];
          for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
            const FJ = JJ[ZJ];
            cJ.push(FJ.x, FJ.y, FJ.z)
          }
          return [cJ]
        }
        if (JJ.length > 0 && Array.isArray(JJ[0]) && JJ[0].length > 0 && JJ[0][0] instanceof dJ.j) {
          const cJ = [],
            ZJ = JJ;
          for (const JJ of ZJ) cJ.push(JJ.flatMap((JJ => [JJ.x, JJ.y, JJ.z])));
          return cJ
        }
        if (JJ instanceof Float32Array) {
          if (cJ?.floatArrayStride) {
            const ZJ = [],
              FJ = 3 * cJ.floatArrayStride;
            for (let cJ = 0; cJ < JJ.length; cJ += FJ) {
              const UJ = new Array(FJ);
              for (let ZJ = 0; ZJ < FJ; ZJ++) UJ[ZJ] = JJ[cJ + ZJ];
              ZJ.push(UJ)
            }
            return ZJ
          }
          return [Array.from(JJ)]
        }
        if (JJ.length && JJ[0] instanceof Float32Array) {
          const cJ = [];
          for (const ZJ of JJ) cJ.push(Array.from(ZJ));
          return cJ
        }
        return []
      }
      static OmitZeroLengthPredicate(JJ, cJ, ZJ) {
        const FJ = [];
        return cJ.subtract(JJ).lengthSquared() > 0 && FJ.push([JJ, cJ]), ZJ.subtract(cJ).lengthSquared() > 0 && FJ.push([cJ, ZJ]), JJ.subtract(ZJ).lengthSquared() > 0 && FJ.push([ZJ, JJ]), 0 === FJ.length ? null : FJ
      }
      static OmitDuplicatesPredicate(JJ, cJ, ZJ, FJ) {
        const UJ = [];
        return vF._SearchInPoints(JJ, cJ, FJ) || UJ.push([JJ, cJ]), vF._SearchInPoints(cJ, ZJ, FJ) || UJ.push([cJ, ZJ]), vF._SearchInPoints(ZJ, JJ, FJ) || UJ.push([ZJ, JJ]), 0 === UJ.length ? null : UJ
      }
      static _SearchInPoints(JJ, cJ, ZJ) {
        for (const FJ of ZJ)
          for (let ZJ = 0; ZJ < FJ.length; ZJ++)
            if (FJ[ZJ]?.equals(JJ) && (FJ[ZJ + 1]?.equals(cJ) || FJ[ZJ - 1]?.equals(cJ))) return !0;
        return !1
      }
      static MeshesToLines(JJ, cJ) {
        const ZJ = [];
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          const UJ = JJ[FJ],
            eJ = UJ.getVerticesData(zJ.n.PositionKind),
            XJ = UJ.QXJ();
          if (eJ && XJ)
            for (let JJ = 0, AJ = 0; JJ < XJ.length; JJ++) {
              const qJ = 3 * XJ[AJ++],
                jJ = 3 * XJ[AJ++],
                YJ = 3 * XJ[AJ++],
                hJ = new dJ.j(eJ[qJ], eJ[qJ + 1], eJ[qJ + 2]),
                DJ = new dJ.j(eJ[jJ], eJ[jJ + 1], eJ[jJ + 2]),
                sJ = new dJ.j(eJ[YJ], eJ[YJ + 1], eJ[YJ + 2]);
              if (cJ) {
                const AJ = cJ(hJ, DJ, sJ, ZJ, JJ, qJ, UJ, FJ, eJ, XJ);
                if (AJ)
                  for (const JJ of AJ) ZJ.push(JJ)
              } else ZJ.push([hJ, DJ], [DJ, sJ], [sJ, hJ])
            }
        }
        return ZJ
      }
      static ToVector3Array(JJ) {
        if (Array.isArray(JJ[0])) {
          const cJ = [],
            ZJ = JJ;
          for (const JJ of ZJ) {
            const ZJ = [];
            for (let cJ = 0; cJ < JJ.length; cJ += 3) ZJ.push(new dJ.j(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2]));
            cJ.push(ZJ)
          }
          return cJ
        }
        const cJ = JJ,
          ZJ = [];
        for (let FJ = 0; FJ < cJ.length; FJ += 3) ZJ.push(new dJ.j(cJ[FJ], cJ[FJ + 1], cJ[FJ + 2]));
        return ZJ
      }
      static ToNumberArray(JJ) {
        return JJ.flatMap((JJ => [JJ.x, JJ.y, JJ.z]))
      }
      static GetPointsCountInfo(JJ) {
        const cJ = new Array(JJ.length);
        let ZJ = 0;
        for (let FJ = JJ.length; FJ--;) cJ[FJ] = JJ[FJ].length / 3, ZJ += cJ[FJ];
        return {
          total: ZJ,
          counts: cJ
        }
      }
      static GetLineLength(JJ) {
        if (0 === JJ.length) return 0;
        let cJ;
        cJ = "number" === typeof JJ[0] ? vF.ToVector3Array(JJ) : JJ;
        const ZJ = dJ.h.Pn[0];
        let FJ = 0;
        for (let UJ = 0; UJ < cJ.length - 1; UJ++) {
          const JJ = cJ[UJ];
          FJ += cJ[UJ + 1].subtractToRef(JJ, ZJ).length()
        }
        return FJ
      }
      static GetLineLengthArray(JJ, cJ) {
        const ZJ = cJ ? new Float32Array(cJ, 0, JJ.length / 3) : new Float32Array(JJ.length / 3);
        let FJ = 0;
        for (let UJ = 0, eJ = JJ.length / 3 - 1; UJ < eJ; UJ++) {
          let cJ = JJ[3 * UJ + 0],
            eJ = JJ[3 * UJ + 1],
            XJ = JJ[3 * UJ + 2];
          cJ -= JJ[3 * UJ + 3], eJ -= JJ[3 * UJ + 4], XJ -= JJ[3 * UJ + 5];
          FJ += Math.sqrt(cJ * cJ + eJ * eJ + XJ * XJ), ZJ[UJ + 1] = FJ
        }
        return ZJ
      }
      static SegmentizeSegmentByCount(JJ, cJ, ZJ) {
        const FJ = [],
          UJ = cJ.subtract(JJ),
          eJ = dJ.h.Pn[0];
        eJ.X3(ZJ);
        const XJ = dJ.h.Pn[1];
        UJ.divideToRef(eJ, XJ);
        let AJ = JJ.clone();
        FJ.push(AJ);
        for (let qJ = 0; qJ < ZJ; qJ++) AJ = AJ.clone(), FJ.push(AJ.addInPlace(XJ));
        return FJ
      }
      static SegmentizeLineBySegmentLength(JJ, cJ) {
        const ZJ = JJ[0] instanceof dJ.j ? vF.GetLineSegments(JJ) : "number" === typeof JJ[0] ? vF.GetLineSegments(vF.ToVector3Array(JJ)) : JJ,
          FJ = [];
        for (const UJ of ZJ)
          if (UJ.length > cJ) {
            const JJ = vF.SegmentizeSegmentByCount(UJ.point1, UJ.point2, Math.ceil(UJ.length / cJ));
            for (const cJ of JJ) FJ.push(cJ)
          } else FJ.push(UJ.point1), FJ.push(UJ.point2);
        return FJ
      }
      static SegmentizeLineBySegmentCount(JJ, cJ) {
        const ZJ = "number" === typeof JJ[0] ? vF.ToVector3Array(JJ) : JJ,
          FJ = vF.GetLineLength(ZJ) / cJ;
        return vF.SegmentizeLineBySegmentLength(ZJ, FJ)
      }
      static GetLineSegments(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < JJ.length - 1; ZJ++) {
          const FJ = JJ[ZJ],
            UJ = JJ[ZJ + 1],
            eJ = UJ.subtract(FJ).length();
          cJ.push({
            point1: FJ,
            point2: UJ,
            length: eJ
          })
        }
        return cJ
      }
      static GetMinMaxSegmentLength(JJ) {
        const cJ = vF.GetLineSegments(JJ).sort((JJ => JJ.length));
        return {
          min: cJ[0].length,
          max: cJ[cJ.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UJ = cJ * ZJ;
        let eJ = 0,
          XJ = 0;
        const AJ = JJ.length;
        for (let jJ = 0; jJ < AJ; jJ++) {
          if (UJ <= eJ + JJ[jJ].length) {
            XJ = jJ;
            break
          }
          eJ += JJ[jJ].length
        }
        const qJ = (UJ - eJ) / JJ[XJ].length;
        return JJ[XJ].point2.subtractToRef(JJ[XJ].point1, dJ.h.Pn[0]), dJ.h.Pn[0].scaleToRef(qJ, dJ.h.Pn[1]), FJ || dJ.h.Pn[1].addInPlace(JJ[XJ].point1), dJ.h.Pn[1].clone()
      }
      static GetCircleLinePoints(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / cJ;
        const eJ = [];
        for (let XJ = 0; XJ <= cJ; XJ++) eJ.push(new dJ.j(Math.cos(XJ * UJ) * JJ, Math.sin(XJ * UJ) * FJ, ZJ));
        return eJ
      }
      static GetBezierLinePoints(JJ, cJ, ZJ, FJ) {
        return GF.g.CreateQuadraticBezier(JJ, cJ, ZJ, FJ).getPoints().flatMap((JJ => [JJ.x, JJ.y, JJ.z]))
      }
      static GetArrowCap(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [JJ.clone(), JJ.add(cJ.multiplyByFloats(ZJ, ZJ, ZJ))],
          widths: [FJ, UJ, eJ, XJ]
        }
      }
      static GetPointsFromText(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const XJ = [],
          AJ = rF(JJ, cJ, ZJ, FJ);
        for (const qJ of AJ) {
          for (const JJ of qJ.paths) {
            const cJ = [],
              ZJ = JJ.getPoints();
            for (const JJ of ZJ) cJ.push(JJ.x, JJ.y, UJ);
            XJ.push(cJ)
          }
          if (eJ)
            for (const JJ of qJ.holes) {
              const cJ = [],
                ZJ = JJ.getPoints();
              for (const JJ of ZJ) cJ.push(JJ.x, JJ.y, UJ);
              XJ.push(cJ)
            }
        }
        return XJ
      }
      static Color3toRGBAUint8(JJ) {
        const cJ = new Uint8Array(4 * JJ.length);
        for (let ZJ = 0, FJ = 0; ZJ < JJ.length; ZJ++) cJ[FJ++] = 255 * JJ[ZJ].r, cJ[FJ++] = 255 * JJ[ZJ].g, cJ[FJ++] = 255 * JJ[ZJ].b, cJ[FJ++] = 255;
        return cJ
      }
      static CreateColorsTexture(JJ, cJ, ZJ, FJ) {
        const UJ = FJ.gn().getCaps().maxTextureSize ?? 1,
          eJ = cJ.length > UJ ? UJ : cJ.length,
          XJ = Math.ceil(cJ.length / UJ);
        XJ > 1 && (cJ = [...cJ, ...Array(eJ * XJ - cJ.length).fill(cJ[0])]);
        const AJ = vF.Color3toRGBAUint8(cJ),
          qJ = new EJ.e(AJ, eJ, XJ, YZ.c.TEXTUREFORMAT_RGBA, FJ, !1, !0, ZJ);
        return qJ.name = JJ, qJ
      }
      static PrepareEmptyColorsTexture(JJ) {
        if (!nF.EmptyColorsTexture) {
          const cJ = new Uint8Array(4);
          nF.EmptyColorsTexture = new EJ.e(cJ, 1, 1, YZ.c.TEXTUREFORMAT_RGBA, JJ, !1, !1, EJ.e.NEAREST_NEAREST), nF.EmptyColorsTexture.name = "grlEmptyColorsTexture", nF.EmptyColorsTexture.Sy.addOnce((() => {
            nF.EmptyColorsTexture = null
          }))
        }
        return nF.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        nF.EmptyColorsTexture?.dispose(), nF.EmptyColorsTexture = null
      }
      static BooleanToNumber(JJ) {
        return JJ ? 1 : 0
      }
    }
    class mF extends NJ.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class QF extends OJ.d {
      isCompatible(JJ) {
        return !0
      }
      constructor(JJ, cJ, ZJ) {
        ZJ = ZJ || {
          color: nF.DEFAULT_COLOR
        };
        const FJ = new mF;
        FJ.GREASED_LINE_HAS_COLOR = !!ZJ.color && !ZJ.useColors, FJ.GREASED_LINE_SIZE_ATTENUATION = ZJ.sizeAttenuation ?? !1, FJ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ZJ.colorDistributionType, FJ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (cJ ?? JJ.Qy()).useRightHandedSystem, FJ.GREASED_LINE_CAMERA_FACING = ZJ.cameraFacing ?? !0, super(JJ, QF.GREASED_LINE_MATERIAL_NAME, 200, FJ, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ZJ?.forceGLSL || QF.ForceGLSL, this._scene = cJ ?? JJ.Qy(), this._engine = this._scene.gn(), this._cameraFacing = ZJ.cameraFacing ?? !0, this.visibility = ZJ.visibility ?? 1, this.useDash = ZJ.useDash ?? !1, this.dashRatio = ZJ.dashRatio ?? .5, this.dashOffset = ZJ.dashOffset ?? 0, this.width = ZJ.width ? ZJ.width : ZJ.sizeAttenuation ? nF.DEFAULT_WIDTH_ATTENUATED : nF.DEFAULT_WIDTH, this._sizeAttenuation = ZJ.sizeAttenuation ?? !1, this.colorMode = ZJ.colorMode ?? 0, this._color = ZJ.color ?? null, this.useColors = ZJ.useColors ?? !1, this._colorsDistributionType = ZJ.colorDistributionType ?? 0, this.colorsSampling = ZJ.colorsSampling ?? EJ.e.NEAREST_NEAREST, this._colors = ZJ.colors ?? null, this.dashCount = ZJ.dashCount ?? 1, this.resolution = ZJ.resolution ?? new dJ.i(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ZJ.colorsTexture ? this.colorsTexture = ZJ.colorsTexture : this._colors ? this.colorsTexture = vF.CreateColorsTexture(`${JJ.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? nF.DEFAULT_COLOR, vF.PrepareEmptyColorsTexture(this._scene)), this._engine.Sy.add((() => {
          vF.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(JJ) {
        JJ.push("grl_offsets"), JJ.push("grl_widths"), JJ.push("grl_colorPointers"), JJ.push("grl_counters"), this._cameraFacing ? (JJ.push("grl_previousAndSide"), JJ.push("grl_nextAndCounters")) : JJ.push("grl_slopes")
      }
      getSamplers(JJ) {
        JJ.push("grl_colors")
      }
      getActiveTextures(JJ) {
        this.colorsTexture && JJ.push(this.colorsTexture)
      }
      getUniforms() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const cJ = [{
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
        return this._cameraFacing && cJ.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === JJ && cJ.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: cJ,
          vertex: this._cameraFacing && this._isGLSL(JJ) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(JJ) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(JJ) {
        if (this._cameraFacing) {
          JJ.Y5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || JJ.Y5("viewProjection", this._scene.getTransformMatrix());
          const cJ = dJ.h.Vector4[0];
          cJ.x = this._aspect, cJ.y = this._resolution.x, cJ.z = this._resolution.y, cJ.w = this.width, JJ.updateVector4("grl_aspect_resolution_lineWidth", cJ)
        }
        const cJ = dJ.h.Vector4[0];
        cJ.x = vF.BooleanToNumber(this.useDash), cJ.y = this._dashArray, cJ.z = this.dashOffset, cJ.w = this.dashRatio, JJ.updateVector4("grl_dashOptions", cJ);
        const ZJ = dJ.h.Vector4[1];
        ZJ.x = this.colorMode, ZJ.y = this.visibility, ZJ.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ZJ.w = vF.BooleanToNumber(this.useColors), JJ.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ZJ), this._color && JJ.updateColor3("grl_singleColor", this._color);
        const FJ = this.colorsTexture ?? nF.EmptyColorsTexture;
        JJ.setTexture("grl_colors", FJ), JJ.updateFloat2("grl_textureSize", FJ?.getSize().width ?? 1, FJ?.getSize().height ?? 1)
      }
      prepareDefines(JJ, cJ, ZJ) {
        JJ.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, JJ.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, JJ.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, JJ.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = cJ.useRightHandedSystem, JJ.GREASED_LINE_CAMERA_FACING = this._cameraFacing, JJ.GREASED_LINE_USE_OFFSETS = !!ZJ.offsets
      }
      getClassName() {
        return QF.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(cJ) ? function(JJ, cJ) {
          if ("vertex" === JJ) {
            const JJ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return cJ && (JJ["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), JJ
          }
          return "fragment" === JJ ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(JJ, this._cameraFacing) : function(JJ, cJ) {
          if ("vertex" === JJ) {
            const JJ = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return cJ && (JJ["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), JJ
          }
          return "fragment" === JJ ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(JJ, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(JJ) {
        this.setColors(JJ)
      }
      setColors(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this._colors?.length ?? 0;
        if (this._colors = JJ, null !== JJ && 0 !== JJ.length) {
          if (!cJ || ZJ)
            if (this.colorsTexture && FJ === JJ.length && !ZJ) {
              const cJ = vF.Color3toRGBAUint8(JJ);
              this.colorsTexture.update(cJ)
            } else this.colorsTexture?.dispose(), this.colorsTexture = vF.CreateColorsTexture(`${this._material.name}-colors-texture`, JJ, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(JJ) {
        this._dashCount = JJ, this._dashArray = 1 / JJ
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(JJ) {
        this._sizeAttenuation = JJ, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(JJ) {
        this.setColor(JJ)
      }
      setColor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== JJ || null !== this._color && null === JJ ? (this._color = JJ, cJ || this.markAllDefinesAsDirty()) : this._color = JJ
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(JJ) {
        this._colorsDistributionType = JJ, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(JJ) {
        this._aspect = JJ.x / JJ.y, this._resolution = JJ
      }
      serialize() {
        const JJ = super.serialize(),
          cJ = {
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
        return this._colors && (cJ.colors = this._colors), this._color && (cJ.color = this._color), JJ.greasedLineMaterialOptions = cJ, JJ
      }
      parse(JJ, cJ, ZJ) {
        super.parse(JJ, cJ, ZJ);
        const FJ = JJ.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), FJ.color && this.setColor(FJ.color, !0), FJ.colorDistributionType && (this.colorsDistributionType = FJ.colorDistributionType), FJ.colors && (this.colors = FJ.colors), FJ.colorsSampling && (this.colorsSampling = FJ.colorsSampling), FJ.colorMode && (this.colorMode = FJ.colorMode), FJ.useColors && (this.useColors = FJ.useColors), FJ.visibility && (this.visibility = FJ.visibility), FJ.useDash && (this.useDash = FJ.useDash), FJ.dashCount && (this.dashCount = FJ.dashCount), FJ.dashRatio && (this.dashRatio = FJ.dashRatio), FJ.dashOffset && (this.dashOffset = FJ.dashOffset), FJ.width && (this.width = FJ.width), FJ.sizeAttenuation && (this.sizeAttenuation = FJ.sizeAttenuation), FJ.resolution && (this.resolution = FJ.resolution), this.colors ? this.colorsTexture = vF.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, cJ) : vF.PrepareEmptyColorsTexture(cJ), this.markAllDefinesAsDirty()
      }
      copyTo(JJ) {
        const cJ = JJ;
        cJ.colorsTexture?.dispose(), this._colors && (cJ.colorsTexture = vF.CreateColorsTexture(`${cJ._material.name}-colors-texture`, this._colors, cJ.colorsSampling, this._scene)), cJ.setColor(this.color, !0), cJ.colorsDistributionType = this.colorsDistributionType, cJ.colorsSampling = this.colorsSampling, cJ.colorMode = this.colorMode, cJ.useColors = this.useColors, cJ.visibility = this.visibility, cJ.useDash = this.useDash, cJ.dashCount = this.dashCount, cJ.dashRatio = this.dashRatio, cJ.dashOffset = this.dashOffset, cJ.width = this.width, cJ.sizeAttenuation = this.sizeAttenuation, cJ.resolution = this.resolution, cJ.markAllDefinesAsDirty()
      }
      _isGLSL(JJ) {
        return 0 === JJ || this._forceGLSL
      }
    }
    QF.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", QF.ForceGLSL = !1;
    var EF = ZJ(39159),
      VF = ZJ(39170),
      KF = ZJ(37658),
      yF = ZJ(39234),
      SF = ZJ(38639);
    class IF extends yF.t {
      constructor(JJ, cJ, FJ) {
        const UJ = cJ.gn(),
          eJ = UJ.isWebGPU && !(FJ.forceGLSL || IF.ForceGLSL),
          XJ = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        cJ.useRightHandedSystem && XJ.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const AJ = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        FJ.cameraFacing ? (XJ.push("GREASED_LINE_CAMERA_FACING"), AJ.push("grl_previousAndSide", "grl_nextAndCounters")) : (AJ.push("grl_slopes"), AJ.push("grl_counters"));
        const qJ = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (eJ || qJ.push("world", "viewProjection", "view", "projection"), super(JJ, cJ, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: eJ ? ["Scene", "Mesh"] : void 0,
            attributes: AJ,
            uniforms: qJ,
            samplers: eJ ? [] : ["grlColors"],
            defines: XJ,
            extraInitializationsAsync: async () => {
              eJ ? await Promise.all([ZJ.e(314).then((() => ZJ(60131))), ZJ.e(373).then((() => ZJ(60139)))]) : await Promise.all([ZJ.e(307).then((() => ZJ(60142))), ZJ.e(374).then((() => ZJ(60147)))])
            },
            shaderLanguage: eJ ? 1 : 0
          }), this._color = iJ.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, FJ = FJ || {
            color: nF.DEFAULT_COLOR
          }, this.visibility = FJ.visibility ?? 1, this.useDash = FJ.useDash ?? !1, this.dashRatio = FJ.dashRatio ?? .5, this.dashOffset = FJ.dashOffset ?? 0, this.dashCount = FJ.dashCount ?? 1, this.width = FJ.width ? FJ.width : FJ.sizeAttenuation && FJ.cameraFacing ? nF.DEFAULT_WIDTH_ATTENUATED : nF.DEFAULT_WIDTH, this.sizeAttenuation = FJ.sizeAttenuation ?? !1, this.color = FJ.color ?? iJ.e.White(), this.useColors = FJ.useColors ?? !1, this.colorsDistributionType = FJ.colorDistributionType ?? 0, this.colorsSampling = FJ.colorsSampling ?? EJ.e.NEAREST_NEAREST, this.colorMode = FJ.colorMode ?? 0, this._colors = FJ.colors ?? null, this._cameraFacing = FJ.cameraFacing ?? !0, this.resolution = FJ.resolution ?? new dJ.i(UJ.getRenderWidth(), UJ.getRenderHeight()), FJ.colorsTexture ? this.colorsTexture = FJ.colorsTexture : this._colors ? this.colorsTexture = vF.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, cJ) : (this._color = this._color ?? nF.DEFAULT_COLOR, this.colorsTexture = vF.PrepareEmptyColorsTexture(cJ)), eJ) {
          const JJ = new SF.d;
          JJ.setParameters(), JJ.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", JJ)
        }
        UJ.Sy.add((() => {
          vF.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== nF.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new dJ.i(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(JJ) {
        this.setColors(JJ)
      }
      setColors(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this._colors?.length ?? 0;
        if (this._colors = JJ, null !== JJ && 0 !== JJ.length) {
          if (!cJ || ZJ)
            if (this._colorsTexture && FJ === JJ.length && !ZJ) {
              const cJ = vF.Color3toRGBAUint8(JJ);
              this._colorsTexture.update(cJ)
            } else this._colorsTexture && this._colorsTexture !== nF.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = vF.CreateColorsTexture(`${this.name}-colors-texture`, JJ, this.colorsSampling, this.Qy())
        } else {
          this._colorsTexture && this._colorsTexture !== nF.EmptyColorsTexture && this._colorsTexture.dispose();
          const JJ = this.Qy();
          JJ && (this.colorsTexture = vF.PrepareEmptyColorsTexture(JJ))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(JJ) {
        this._colorsTexture = JJ, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(JJ) {
        this._width = JJ, this.setFloat("grlWidth", JJ)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(JJ) {
        this._useColors = JJ, this.setFloat("grlUseColors", vF.BooleanToNumber(JJ))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(JJ) {
        this._colorsSampling = JJ
      }
      get visibility() {
        return this._visibility
      }
      set visibility(JJ) {
        this._visibility = JJ, this.setFloat("grlVisibility", JJ)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(JJ) {
        this._useDash = JJ, this.setFloat("grlUseDash", vF.BooleanToNumber(JJ))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(JJ) {
        this._dashOffset = JJ, this.setFloat("grlDashOffset", JJ)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(JJ) {
        this._dashRatio = JJ, this.setFloat("grlDashRatio", JJ)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(JJ) {
        this._dashCount = JJ, this._dashArray = 1 / JJ, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(JJ) {
        this._sizeAttenuation = JJ, this.setFloat("grlSizeAttenuation", vF.BooleanToNumber(JJ))
      }
      get color() {
        return this._color
      }
      set color(JJ) {
        this.setColor(JJ)
      }
      setColor(JJ) {
        JJ = JJ ?? nF.DEFAULT_COLOR, this._color = JJ, this.setColor3("grlColor", JJ)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(JJ) {
        this._colorsDistributionType = JJ, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(JJ) {
        this._colorMode = JJ, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(JJ) {
        this._resolution = JJ, this.setVector2("grlResolution", JJ), this.setFloat("grlAspect", JJ.x / JJ.y)
      }
      serialize() {
        const JJ = super.serialize(),
          cJ = {
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
        return this._colors && (cJ.colors = this._colors), JJ.greasedLineMaterialOptions = cJ, JJ
      }
      parse(JJ, cJ, ZJ) {
        const FJ = JJ.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), FJ.color && (this.color = FJ.color), FJ.colorDistributionType && (this.colorsDistributionType = FJ.colorDistributionType), FJ.colorsSampling && (this.colorsSampling = FJ.colorsSampling), FJ.colorMode && (this.colorMode = FJ.colorMode), FJ.useColors && (this.useColors = FJ.useColors), FJ.visibility && (this.visibility = FJ.visibility), FJ.useDash && (this.useDash = FJ.useDash), FJ.dashCount && (this.dashCount = FJ.dashCount), FJ.dashRatio && (this.dashRatio = FJ.dashRatio), FJ.dashOffset && (this.dashOffset = FJ.dashOffset), FJ.width && (this.width = FJ.width), FJ.sizeAttenuation && (this.sizeAttenuation = FJ.sizeAttenuation), FJ.resolution && (this.resolution = FJ.resolution), FJ.colors ? this.colorsTexture = vF.CreateColorsTexture(`${this.name}-colors-texture`, FJ.colors, this.colorsSampling, this.Qy()) : this.colorsTexture = vF.PrepareEmptyColorsTexture(cJ), this._cameraFacing = FJ.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var MF, bF, wF;
    IF.ForceGLSL = !1,
      function(JJ) {
        JJ[JJ.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", JJ[JJ.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(MF || (MF = {})),
      function(JJ) {
        JJ[JJ.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", JJ[JJ.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", JJ[JJ.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(bF || (bF = {})),
      function(JJ) {
        JJ[JJ.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", JJ[JJ.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", JJ[JJ.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", JJ[JJ.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", JJ[JJ.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(wF || (wF = {}));
    class WF extends EF.d {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, null, null, !1, !1), this.name = JJ, this._options = ZJ, this._lazy = !1, this._updatable = !1, this._engine = cJ.gn(), this._lazy = ZJ.lazy ?? !1, this._updatable = ZJ.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ZJ.colorPointers ?? [], this._widths = ZJ.widths ?? new Array(ZJ.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(JJ) {
        let cJ = 0;
        for (const FJ of this._points) cJ += FJ.length;
        const ZJ = cJ / 3 * 2 - this._widths.length;
        for (let FJ = 0; FJ < ZJ; FJ++) this._widths.push(JJ)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.pn && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(JJ, cJ) {
        for (const ZJ of JJ) this._points.push(ZJ);
        this._lazy || this.setPoints(this._points, cJ)
      }
      dispose(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(JJ, cJ)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(JJ) {
        this._uvs = JJ instanceof Float32Array ? JJ : new Float32Array(JJ), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(JJ) {
        this.material instanceof IF && this.material.setDefine("GREASED_LINE_USE_OFFSETS", JJ?.length > 0), this._offsets = JJ, this._offsetsBuffer ? this._offsetsBuffer.update(JJ) : this._createOffsetsBuffer(JJ)
      }
      get widths() {
        return this._widths
      }
      set widths(JJ) {
        this._widths = JJ, this._lazy || this._widthsBuffer && this._widthsBuffer.update(JJ)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(JJ) {
        this._colorPointers = JJ, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(JJ)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof IF) return this.material;
        const JJ = this.material?.pluginManager?.getPlugin(QF.GREASED_LINE_MATERIAL_NAME);
        return JJ || void 0
      }
      get points() {
        const JJ = [];
        return KF.e.DeepCopy(this._points, JJ), JJ
      }
      setPoints(JJ, cJ) {
        this._points = vF.ConvertPoints(JJ, cJ?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), cJ?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, cJ)
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
      serialize(JJ) {
        super.serialize(JJ), JJ.type = this.getClassName(), JJ.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new VF.e;
        return cJ.positions = this._vertexPositions, cJ.indices = this._indices, cJ.uvs = this._uvs, JJ && (cJ.normals = [], VF.e.ComputeNormals(this._vertexPositions, this._indices, cJ.normals)), cJ.applyToMesh(this, this._options.updatable), cJ
      }
      _createOffsetsBuffer(JJ) {
        const cJ = this._scene.gn(),
          ZJ = new zJ.d(cJ, JJ, this._updatable, 3);
        this.setVerticesBuffer(ZJ.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ZJ
      }
    }
    class gF {
      constructor(JJ, cJ) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = JJ, this.wasAddedByNoopNode = cJ
      }
      getIndicesAccessor(JJ, cJ, ZJ, FJ, UJ) {
        return this._indicesAccessorMap.get(JJ)?.get(cJ)?.get(ZJ)?.get(FJ)?.get(UJ)
      }
      setIndicesAccessor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = this._indicesAccessorMap.get(JJ);
        XJ || (XJ = new Map, this._indicesAccessorMap.set(JJ, XJ));
        let AJ = XJ.get(cJ);
        AJ || (AJ = new Map, XJ.set(cJ, AJ));
        let qJ = AJ.get(ZJ);
        qJ || (qJ = new Map, AJ.set(ZJ, qJ));
        let jJ = qJ.get(FJ);
        jJ || (jJ = new Map, qJ.set(FJ, jJ)), jJ.set(UJ, eJ)
      }
      pushExportedNode(JJ) {
        this._exportedNodes.has(JJ) || this._exportedNodes.add(JJ)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(JJ) {
        return this._vertexBufferViewMap.get(JJ)
      }
      setVertexBufferView(JJ, cJ) {
        this._vertexBufferViewMap.set(JJ, cJ)
      }
      setRemappedBufferView(JJ, cJ, ZJ) {
        this._remappedBufferView.set(JJ, new Map), this._remappedBufferView.get(JJ).set(cJ, ZJ)
      }
      getRemappedBufferView(JJ, cJ) {
        return this._remappedBufferView.get(JJ)?.get(cJ)
      }
      getVertexAccessor(JJ, cJ, ZJ) {
        return this._vertexAccessorMap.get(JJ)?.get(cJ)?.get(ZJ)
      }
      setVertexAccessor(JJ, cJ, ZJ, FJ) {
        let UJ = this._vertexAccessorMap.get(JJ);
        UJ || (UJ = new Map, this._vertexAccessorMap.set(JJ, UJ));
        let eJ = UJ.get(cJ);
        eJ || (eJ = new Map, UJ.set(cJ, eJ)), eJ.set(ZJ, FJ)
      }
      hasVertexColorAlpha(JJ) {
        return this._vertexMapColorAlpha.get(JJ) || !1
      }
      setHasVertexColorAlpha(JJ, cJ) {
        return this._vertexMapColorAlpha.set(JJ, cJ)
      }
      getMesh(JJ) {
        return this._meshMap.get(JJ)
      }
      setMesh(JJ, cJ) {
        this._meshMap.set(JJ, cJ)
      }
      bindMorphDataToMesh(JJ, cJ) {
        const ZJ = this._meshMorphTargetMap.get(JJ) || [];
        this._meshMorphTargetMap.set(JJ, ZJ), -1 === ZJ.indexOf(cJ) && ZJ.push(cJ)
      }
      getMorphTargetsFromMesh(JJ) {
        return this._meshMorphTargetMap.get(JJ)
      }
    }
    class HF {
      _ApplyExtension(JJ, cJ, ZJ, FJ) {
        if (ZJ >= cJ.length) return Promise.resolve(JJ);
        const UJ = FJ(cJ[ZJ], JJ);
        return UJ ? UJ.then((async JJ => JJ ? await this._ApplyExtension(JJ, cJ, ZJ + 1, FJ) : null)) : this._ApplyExtension(JJ, cJ, ZJ + 1, FJ)
      }
      _ApplyExtensions(JJ, cJ) {
        const ZJ = [];
        for (const FJ of HF._ExtensionNames) ZJ.push(this._extensions[FJ]);
        return this._ApplyExtension(JJ, ZJ, 0, cJ)
      }
      _extensionsPostExportNodeAsync(JJ, cJ, ZJ, FJ, UJ) {
        return this._ApplyExtensions(cJ, ((cJ, eJ) => cJ.postExportNodeAsync && cJ.postExportNodeAsync(JJ, eJ, ZJ, FJ, UJ, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(JJ, cJ, ZJ) {
        return this._ApplyExtensions(cJ, ((cJ, FJ) => cJ.postExportMaterialAsync && cJ.postExportMaterialAsync(JJ, FJ, ZJ)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        return await Promise.all(HF._ExtensionNames.map((async UJ => {
          const eJ = this._extensions[UJ];
          if (eJ.postExportMaterialAdditionalTexturesAsync) {
            const UJ = await eJ.postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ);
            FJ.push(...UJ)
          }
        }))), FJ
      }
      _extensionsPostExportTextures(JJ, cJ, ZJ) {
        for (const FJ of HF._ExtensionNames) {
          const UJ = this._extensions[FJ];
          UJ.postExportTexture && UJ.postExportTexture(JJ, cJ, ZJ)
        }
      }
      _extensionsPostExportMeshPrimitive(JJ) {
        for (const cJ of HF._ExtensionNames) {
          const ZJ = this._extensions[cJ];
          ZJ.postExportMeshPrimitive && ZJ.postExportMeshPrimitive(JJ, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const JJ of HF._ExtensionNames) {
          const cJ = this._extensions[JJ];
          cJ.preGenerateBinaryAsync && await cJ.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(JJ) {
        for (const cJ of HF._ExtensionNames) {
          const ZJ = this._extensions[cJ];
          ZJ.enabled && JJ(ZJ)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((JJ => {
          var cJ, ZJ, FJ;
          JJ.wasUsed && ((cJ = this._glTF).extensionsUsed || (cJ.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(JJ.name) && this._glTF.extensionsUsed.push(JJ.name), JJ.required && ((ZJ = this._glTF).extensionsRequired || (ZJ.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(JJ.name) && this._glTF.extensionsRequired.push(JJ.name)), (FJ = this._glTF).extensions || (FJ.extensions = {}), JJ.onExporting && JJ.onExporting())
        }))
      }
      _loadExtensions() {
        for (const JJ of HF._ExtensionNames) {
          const cJ = HF._ExtensionFactories[JJ](this);
          this._extensions[JJ] = cJ
        }
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GJ.c.LastCreatedScene,
          cJ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${nJ.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new bZ(this), this._extensions = {}, this._bufferManager = new ZF, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !JJ) throw new Error("No scene available to export");
        this._babylonScene = JJ, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: JJ => JJ?.Fy?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...cJ
        }, this._loadExtensions()
      }
      dispose() {
        for (const JJ in this._extensions) {
          this._extensions[JJ].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        HF.UnregisterExtension(JJ) && UJ.Tools.Warn(`Extension with the name ${JJ} already exists`), HF._ExtensionFactories[JJ] = cJ;
        const FJ = ZJ ?? 0;
        HF._ExtensionOrders[JJ] = FJ;
        let eJ = HF._ExtensionNames.length;
        for (let UJ = 0; UJ < HF._ExtensionNames.length; UJ++) {
          const JJ = HF._ExtensionNames[UJ];
          if (FJ < HF._ExtensionOrders[JJ]) {
            eJ = UJ;
            break
          }
        }
        HF._ExtensionNames.splice(eJ, 0, JJ)
      }
      static UnregisterExtension(JJ) {
        if (!HF._ExtensionFactories[JJ]) return !1;
        delete HF._ExtensionFactories[JJ], delete HF._ExtensionOrders[JJ];
        const cJ = HF._ExtensionNames.indexOf(JJ);
        return -1 !== cJ && HF._ExtensionNames.splice(cJ, 1), !0
      }
      _generateJSON(JJ, cJ, ZJ) {
        const FJ = {
          byteLength: JJ
        };
        return FJ.byteLength && (this._glTF.buffers = [FJ]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.iG = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (FJ.uri = cJ + ".bin"), ZJ ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(JJ) {
        const cJ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZJ = this._generateJSON(cJ.byteLength, JJ, !0),
          FJ = new Blob([cJ], {
            type: "application/octet-stream"
          }),
          UJ = JJ + ".gltf",
          eJ = JJ + ".bin",
          XJ = new jJ;
        if (XJ.files[UJ] = ZJ, XJ.files[eJ] = FJ, this._imageData)
          for (const AJ in this._imageData) XJ.files[AJ] = this._imageData[AJ];
        return XJ
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(JJ) {
        const cJ = JJ % 4;
        return 0 === cJ ? cJ : 4 - cJ
      }
      async generateGLBAsync(JJ) {
        this._shouldUseGlb = !0;
        const cJ = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZJ = this._generateJSON(cJ.byteLength),
          FJ = JJ + ".glb";
        let UJ, eJ = ZJ.length;
        if ("undefined" !== typeof TextEncoder) {
          UJ = (new TextEncoder).encode(ZJ), eJ = UJ.length
        }
        const XJ = this._getPadding(eJ),
          AJ = this._getPadding(cJ.byteLength),
          qJ = 28 + eJ + XJ + cJ.byteLength + AJ,
          YJ = new JF(qJ);
        if (YJ.writeUInt32(1179937895), YJ.writeUInt32(2), YJ.writeUInt32(qJ), YJ.writeUInt32(eJ + XJ), YJ.writeUInt32(1313821514), UJ) YJ.writeTypedArray(UJ);
        else {
          const JJ = "_".charCodeAt(0);
          for (let cJ = 0; cJ < eJ; ++cJ) {
            const FJ = ZJ.charCodeAt(cJ);
            FJ != ZJ.codePointAt(cJ) ? YJ.writeUInt8(JJ) : YJ.writeUInt8(FJ)
          }
        }
        for (let jJ = 0; jJ < XJ; ++jJ) YJ.writeUInt8(32);
        YJ.writeUInt32(cJ.byteLength + AJ), YJ.writeUInt32(5130562), YJ.writeTypedArray(cJ);
        for (let jJ = 0; jJ < AJ; ++jJ) YJ.writeUInt8(0);
        const hJ = new jJ;
        return hJ.files[FJ] = new Blob([YJ.getOutputData()], {
          type: "application/octet-stream"
        }), hJ
      }
      _setNodeTransformation(JJ, cJ, ZJ) {
        if (cJ.getPivotPoint().equalsWithEpsilon(kZ, gZ.e) || UJ.Tools.Warn("Pivot points are not supported in the glTF serializer"), !cJ.position.equalsWithEpsilon(kZ, gZ.e)) {
          const UJ = FJ.TmpVectors.Pn[0].rZJ(cJ.position);
          ZJ && uZ(UJ), JJ.translation = UJ.JFJ()
        }
        cJ.GA.equalsWithEpsilon(dZ, gZ.e) || (JJ.scale = cJ.GA.JFJ());
        const eJ = cJ.rotationQuaternion?.clone() || FJ.Quaternion.FromEulerAngles(cJ.rotation.x, cJ.rotation.y, cJ.rotation.z);
        eJ.equalsWithEpsilon(pZ, gZ.e) || (ZJ && iZ(eJ), JJ.rotation = eJ.normalize().JFJ())
      }
      _setCameraTransformation(JJ, cJ, ZJ) {
        const UJ = FJ.TmpVectors.Pn[0],
          eJ = FJ.TmpVectors.Quaternion[0],
          XJ = cJ.getWorldMatrix();
        if (cJ.parent) {
          const JJ = cJ.parent.getWorldMatrix().invertToRef(FJ.TmpVectors.Matrix[0]);
          XJ.multiplyToRef(JJ, FJ.TmpVectors.Matrix[1]).decompose(void 0, eJ, UJ)
        } else XJ.decompose(void 0, eJ, UJ);
        UJ.equalsWithEpsilon(kZ, gZ.e) || (ZJ && uZ(UJ), JJ.translation = UJ.JFJ()), ZJ && iZ(eJ), this._babylonScene.useRightHandedSystem || RZ(eJ), eJ.equalsWithEpsilon(pZ, gZ.e) || (JJ.rotation = eJ.JFJ())
      }
      _listAvailableCameras() {
        for (const JJ of this._babylonScene.cameras) {
          const cJ = {
            type: JJ.mode === FF.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (JJ.name && (cJ.name = JJ.name), "perspective" === cJ.type) cJ.perspective = {
            aspectRatio: JJ.gn().getAspectRatio(JJ),
            yfov: JJ.fovMode === FF.e.FOVMODE_VERTICAL_FIXED ? JJ.fov : JJ.fov * JJ.gn().getAspectRatio(JJ),
            znear: JJ.minZ,
            zfar: JJ.maxZ
          };
          else if ("orthographic" === cJ.type) {
            const ZJ = JJ.orthoLeft && JJ.orthoRight ? .5 * (JJ.orthoRight - JJ.orthoLeft) : .5 * JJ.gn().getRenderWidth(),
              FJ = JJ.orthoBottom && JJ.orthoTop ? .5 * (JJ.orthoTop - JJ.orthoBottom) : .5 * JJ.gn().getRenderHeight();
            cJ.orthographic = {
              xmag: ZJ,
              ymag: FJ,
              znear: JJ.minZ,
              zfar: JJ.maxZ
            }
          }
          this._camerasMap.set(JJ, cJ)
        }
      }
      _exportAndAssignCameras() {
        const JJ = Array.from(this._camerasMap.values());
        for (const cJ of JJ) {
          const JJ = this._nodesCameraMap.get(cJ);
          if (void 0 !== JJ) {
            this._cameras.push(cJ);
            for (const cJ of JJ) cJ.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const JJ of this._babylonScene.skeletons) {
          if (JJ.bones.length <= 0) continue;
          const cJ = {
            joints: []
          };
          this._skinMap.set(JJ, cJ)
        }
      }
      _exportAndAssignSkeletons(JJ) {
        for (const ZJ of this._babylonScene.skeletons) {
          if (ZJ.bones.length <= 0) continue;
          const eJ = this._skinMap.get(ZJ);
          if (void 0 == eJ) continue;
          const XJ = {};
          let AJ = -1;
          for (let JJ = 0; JJ < ZJ.bones.length; ++JJ) {
            const cJ = ZJ.bones[JJ],
              FJ = cJ.getIndex() ?? JJ; - 1 !== FJ && (XJ[FJ] = cJ, FJ > AJ && (AJ = FJ))
          }
          const qJ = [];
          for (let ZJ = 0; ZJ <= AJ; ++ZJ) {
            const AJ = XJ[ZJ],
              jJ = AJ.getTransformNode(),
              YJ = jJ ? this._nodeMap.get(jJ) : void 0;
            if (void 0 === YJ) {
              UJ.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            eJ.joints.push(YJ);
            const hJ = AJ.getAbsoluteInverseBindMatrix().clone();
            JJ.has(jJ) && (cJ = hJ, HZ.invertToRef(FJ.TmpVectors.Matrix[0]).multiplyToRef(cJ, cJ).multiplyToRef(HZ, cJ)), qJ.push(hJ)
          }
          const jJ = this._nodesSkinMap.get(eJ);
          if (eJ.joints.length > 0 && void 0 !== jJ) {
            const JJ = new Float32Array(16 * qJ.length);
            qJ.forEach(((cJ, ZJ) => {
              JJ.set(cJ.m, 16 * ZJ)
            }));
            const cJ = this._bufferManager.createBufferView(JJ);
            this._accessors.push(this._bufferManager.createAccessor(cJ, "MAT4", 5126, qJ.length)), eJ.inverseBindMatrices = this._accessors.length - 1, this._skins.push(eJ);
            const ZJ = this._skins.length - 1;
            for (const FJ of jJ) FJ.skin = ZJ
          }
        }
        var cJ
      }
      async _exportSceneAsync() {
        const JJ = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const cJ = this._options.metadataSelector(this._babylonScene.metadata);
          cJ && (JJ.extras = cJ)
        }
        const cJ = new Array,
          ZJ = new Array,
          FJ = new Array,
          UJ = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let eJ;
        if (UJ && !this._options.includeCoordinateSystemConversionNodes)
          for (const jJ of this._babylonScene.animationGroups)
            for (const JJ of jJ.targetedAnimations) {
              const cJ = JJ.target;
              cJ instanceof hJ.e && !cJ.parent && (eJ ?? (eJ = new Set)).add(cJ)
            }
        for (const jJ of this._babylonScene.rootNodes) {
          const JJ = jJ.animations,
            XJ = !!JJ && JJ.length > 0 || eJ?.has(jJ);
          UJ && !this._options.includeCoordinateSystemConversionNodes && PZ(jJ, this._babylonScene.useRightHandedSystem) && !XJ ? FJ.push(...jJ.getChildren()) : this._babylonScene.useRightHandedSystem ? cJ.push(jJ) : ZJ.push(jJ)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const XJ = new gF(!0, !1);
        JJ.nodes.push(...await this._exportNodesAsync(ZJ, XJ));
        const AJ = new gF(!1, !1);
        JJ.nodes.push(...await this._exportNodesAsync(cJ, AJ));
        const qJ = new gF(!1, !0);
        JJ.nodes.push(...await this._exportNodesAsync(FJ, qJ)), JJ.nodes.length && this._scenes.push(JJ), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(XJ.getNodesSet()), this._babylonScene.animationGroups.length && hF._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, XJ.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(JJ) {
        return this._nodeMap.get(JJ)
      }
      _getAnimationIndex(JJ) {
        return this._animationGroupMap.get(JJ)
      }
      _getCameraIndex(JJ) {
        const cJ = this._camerasMap.get(JJ);
        if (!cJ) return;
        const ZJ = this._cameras.indexOf(cJ);
        return ZJ >= 0 ? ZJ : void 0
      }
      _getMaterialIndex(JJ) {
        return this._materialMap.get(JJ)
      }
      _getRootIndex(JJ, cJ) {
        switch (JJ) {
          case "nodes":
            return this._getNodeIndex(cJ);
          case "animations":
            return this._getAnimationIndex(cJ);
          case "cameras":
            return this._getCameraIndex(cJ);
          case "materials":
            return this._getMaterialIndex(cJ);
          case "meshes": {
            const JJ = this._getNodeIndex(cJ);
            return void 0 === JJ ? void 0 : this._nodes[JJ]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(cJ)?.index;
          case "images": {
            const JJ = this._materialExporter.getTextureInfo(cJ)?.index;
            if (void 0 === JJ) return;
            const ZJ = this._textures[JJ];
            for (const cJ of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const JJ = ZJ?.extensions?.[cJ]?.source;
              if ("number" === typeof JJ) return JJ
            }
            return ZJ?.source
          }
          case "samplers": {
            const JJ = this._materialExporter.getTextureInfo(cJ)?.index;
            return void 0 === JJ ? void 0 : this._textures[JJ]?.sampler
          }
          case "skins": {
            const JJ = this._skinMap.get(cJ),
              ZJ = JJ ? this._skins.indexOf(JJ) : -1;
            return ZJ >= 0 ? ZJ : void 0
          }
          case "scenes":
            return cJ === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(JJ, cJ, ZJ) {
        const FJ = this._nodes[JJ];
        if (!FJ) throw new Error(`Cannot write ${cJ}: glTF node ${JJ} does not exist.`);
        FJ.extensions || (FJ.extensions = {}), FJ.extensions[cJ] = ZJ
      }
      _shouldExportNode(JJ) {
        let cJ = this._shouldExportNodeMap.get(JJ);
        return void 0 === cJ && (cJ = this._options.shouldExportNode(JJ), this._shouldExportNodeMap.set(JJ, cJ)), cJ
      }
      async _exportNodesAsync(JJ, cJ) {
        const ZJ = new Array;
        this._exportBuffers(JJ, cJ);
        for (const FJ of JJ) await this._exportNodeAsync(FJ, ZJ, cJ);
        return ZJ
      }
      _collectBuffers(JJ, cJ, ZJ, FJ, UJ) {
        if (this._shouldExportNode(JJ) && JJ instanceof DJ.d && JJ.geometry) {
          const eJ = JJ.geometry.getVertexBuffers();
          if (eJ)
            for (const FJ in eJ) {
              if (!TZ(FJ)) continue;
              const XJ = eJ[FJ];
              UJ.setHasVertexColorAlpha(XJ, JJ.hasVertexAlpha);
              const AJ = XJ._buffer,
                qJ = cJ.get(AJ) || [];
              cJ.set(AJ, qJ), -1 === qJ.indexOf(XJ) && qJ.push(XJ);
              const jJ = ZJ.get(XJ) || [];
              ZJ.set(XJ, jJ), -1 === jJ.indexOf(JJ) && jJ.push(JJ)
            }
          const XJ = JJ.morphTargetManager;
          if (XJ)
            for (let cJ = 0; cJ < XJ.numTargets; cJ++) {
              const ZJ = XJ.getTarget(cJ),
                UJ = FJ.get(ZJ) || [];
              FJ.set(ZJ, UJ), -1 === UJ.indexOf(JJ) && UJ.push(JJ)
            }
        }
        for (const eJ of JJ.getChildren()) this._collectBuffers(eJ, cJ, ZJ, FJ, UJ)
      }
      _exportBuffers(JJ, cJ) {
        const ZJ = new Map,
          FJ = new Map,
          UJ = new Map;
        for (const AJ of JJ) this._collectBuffers(AJ, ZJ, FJ, UJ, cJ);
        const eJ = Array.from(ZJ.keys());
        for (const AJ of eJ) {
          const JJ = AJ.getData();
          if (!JJ) throw new Error("Buffer data is not available");
          const UJ = ZJ.get(AJ);
          if (!UJ) continue;
          const eJ = UJ[0].byteStride;
          if (UJ.some((JJ => JJ.byteStride !== eJ))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const XJ = BZ(JJ).slice();
          for (const cJ of UJ) {
            const JJ = FJ.get(cJ),
              {
                byteOffset: ZJ,
                byteStride: UJ,
                componentCount: eJ,
                type: AJ,
                count: qJ,
                normalized: jJ,
                kind: hJ
              } = NZ(cJ, JJ);
            switch (hJ) {
              case YJ.e.NormalKind:
              case YJ.e.TangentKind:
                (0, wZ.i)(XJ, ZJ, UJ, eJ, AJ, qJ, jJ, (JJ => {
                  const cJ = Math.sqrt(JJ[0] * JJ[0] + JJ[1] * JJ[1] + JJ[2] * JJ[2]);
                  if (cJ > 0) {
                    const ZJ = 1 / cJ;
                    JJ[0] *= ZJ, JJ[1] *= ZJ, JJ[2] *= ZJ
                  }
                }));
                break;
              case YJ.e.ColorKind: {
                const cJ = JJ.filter((JJ => JJ.material instanceof eF.StandardMaterial || null == JJ.material)).length;
                if (0 == cJ) break;
                if (cJ != JJ.length) {
                  IJ.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                AJ == YJ.e.UNSIGNED_BYTE && IJ.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const FJ = new fJ.Color3,
                  hJ = new fJ.e,
                  DJ = this._babylonScene.gn().useExactSrgbConversions;
                (0, wZ.i)(XJ, ZJ, UJ, eJ, AJ, qJ, jJ, (JJ => {
                  3 === JJ.length ? (FJ.zcJ(JJ, 0), FJ.toLinearSpaceToRef(FJ, DJ), FJ.toArray(JJ, 0)) : (hJ.zcJ(JJ, 0), hJ.toLinearSpaceToRef(hJ, DJ), hJ.toArray(JJ, 0))
                }))
              }
            }
          }
          if (cJ.convertToRightHanded) {
            for (const JJ of UJ) {
              const cJ = FJ.get(JJ),
                {
                  byteOffset: ZJ,
                  byteStride: UJ,
                  componentCount: eJ,
                  type: AJ,
                  count: qJ,
                  normalized: jJ,
                  kind: hJ
                } = NZ(JJ, cJ);
              switch (hJ) {
                case YJ.e.PositionKind:
                case YJ.e.NormalKind:
                case YJ.e.TangentKind:
                  (0, wZ.i)(XJ, ZJ, UJ, eJ, AJ, qJ, jJ, (JJ => {
                    JJ[0] = -JJ[0]
                  }))
              }
            }
            cJ.convertedToRightHandedBuffers.set(AJ, XJ)
          }
          const qJ = this._bufferManager.createBufferView(XJ, eJ);
          cJ.setVertexBufferView(AJ, qJ);
          const jJ = new Map;
          for (const cJ of UJ) {
            const JJ = FJ.get(cJ),
              {
                kind: ZJ,
                totalVertices: UJ
              } = NZ(cJ, JJ);
            switch (ZJ) {
              case YJ.e.MatricesIndicesKind:
              case YJ.e.MatricesIndicesExtraKind:
                if (cJ.type == YJ.e.FLOAT) {
                  const JJ = cJ.getFloatData(UJ);
                  null !== JJ && jJ.set(cJ, JJ)
                }
            }
          }
          0 !== jJ.size && IJ.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const hJ = Array.from(jJ.keys());
          for (const ZJ of hJ) {
            const JJ = jJ.get(ZJ);
            if (!JJ) continue;
            const FJ = JJ.some((JJ => JJ >= 256)),
              UJ = new(FJ ? Uint16Array : Uint8Array)(JJ.length);
            for (let cJ = 0; cJ < JJ.length; cJ++) UJ[cJ] = JJ[cJ];
            const eJ = this._bufferManager.createBufferView(UJ, 4 * (FJ ? 2 : 1));
            cJ.setRemappedBufferView(AJ, ZJ, eJ)
          }
        }
        const XJ = Array.from(UJ.keys());
        for (const AJ of XJ) {
          const JJ = UJ.get(AJ);
          if (!JJ) continue;
          const ZJ = DF(AJ, JJ[0], this._bufferManager, this._bufferViews, this._accessors, cJ.convertToRightHanded);
          for (const FJ of JJ) cJ.bindMorphDataToMesh(FJ, ZJ)
        }
      }
      async _exportNodeAsync(JJ, cJ, ZJ) {
        let FJ = this._nodeMap.get(JJ);
        if (void 0 !== FJ) return void(cJ.includes(FJ) || cJ.push(FJ));
        const UJ = await this._createNodeAsync(JJ, ZJ);
        if (UJ) {
          FJ = this._nodes.length, this._nodes.push(UJ), this._nodeMap.set(JJ, FJ), ZJ.pushExportedNode(JJ), cJ.push(FJ);
          const eJ = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            XJ = [];
          this._babylonScene.animationGroups.length || (hF._CreateMorphTargetAnimationFromMorphTargetAnimations(JJ, eJ, XJ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZJ.convertToRightHanded, this._options.shouldExportAnimation), JJ.animations.length && hF._CreateNodeAnimationFromNodeAnimations(JJ, eJ, XJ, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZJ.convertToRightHanded, this._options.shouldExportAnimation)), eJ.channels.length && eJ.samplers.length && this._animations.push(eJ), XJ.forEach((JJ => {
            JJ.channels.length && JJ.samplers.length && this._animations.push(JJ)
          }))
        }
        const eJ = UJ ? [] : cJ;
        for (const XJ of JJ.getChildren()) await this._exportNodeAsync(XJ, eJ, ZJ);
        UJ && eJ.length && (UJ.children = eJ)
      }
      async _createNodeAsync(JJ, cJ) {
        if (!this._shouldExportNode(JJ)) return null;
        const ZJ = {};
        if (JJ.name && (ZJ.name = JJ.name), JJ.metadata) {
          const cJ = this._options.metadataSelector(JJ.metadata);
          cJ && (ZJ.extras = cJ)
        }
        if (JJ instanceof hJ.e && (this._setNodeTransformation(ZJ, JJ, cJ.convertToRightHanded), JJ instanceof DJ.d)) {
          const FJ = JJ instanceof sJ.d ? JJ.uFJ : JJ;
          if (FJ.aE && FJ.aE.length > 0 && (ZJ.mesh = await this._exportMeshAsync(FJ, cJ)), JJ.skeleton) {
            const cJ = this._skinMap.get(JJ.skeleton);
            void 0 !== cJ && (void 0 === this._nodesSkinMap.get(cJ) && this._nodesSkinMap.set(cJ, []), this._nodesSkinMap.get(cJ)?.push(ZJ))
          }
        }
        if (JJ instanceof WZ.h) {
          const FJ = this._camerasMap.get(JJ);
          if (FJ) {
            void 0 === this._nodesCameraMap.get(FJ) && this._nodesCameraMap.set(FJ, []), this._setCameraTransformation(ZJ, JJ, cJ.convertToRightHanded);
            const UJ = JJ.parent;
            if (null !== UJ && aZ(JJ, UJ)) {
              const JJ = this._nodeMap.get(UJ);
              if (void 0 !== JJ) {
                const cJ = this._nodes[JJ];
                return LZ(ZJ, cJ), this._nodesCameraMap.get(FJ)?.push(cJ), null
              }
            }
            this._nodesCameraMap.get(FJ)?.push(ZJ)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ZJ, JJ, this._nodeMap, cJ.convertToRightHanded) ? ZJ : (IJ.c.Warn(`Not exporting node ${JJ.name}`), null)
      }
      _exportIndices(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, qJ, jJ) {
        let YJ = null;
        jJ.mode = function(JJ) {
          switch (JJ) {
            case eJ.c.TriangleFillMode:
              return 4;
            case eJ.c.TriangleStripDrawMode:
              return 5;
            case eJ.c.TriangleFanDrawMode:
              return 6;
            case eJ.c.PointListDrawMode:
            case eJ.c.PointFillMode:
              return 0;
            case eJ.c.LineLoopDrawMode:
              return 2;
            case eJ.c.LineListDrawMode:
              return 1;
            case eJ.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${JJ}`)
        }(XJ);
        const hJ = AJ !== eJ.c.CounterClockWiseSideOrientation && function(JJ) {
          switch (JJ) {
            case eJ.c.TriangleFillMode:
            case eJ.c.TriangleStripDrawMode:
            case eJ.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(XJ);
        if (hJ) {
          if (XJ === eJ.c.TriangleStripDrawMode || XJ === eJ.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const AJ = cJ ? new Uint32Array(FJ) : new Uint16Array(FJ);
          if (JJ)
            for (let cJ = 0; cJ + 2 < FJ; cJ += 3) AJ[cJ] = JJ[ZJ + cJ] + UJ, AJ[cJ + 1] = JJ[ZJ + cJ + 2] + UJ, AJ[cJ + 2] = JJ[ZJ + cJ + 1] + UJ;
          else
            for (let JJ = 0; JJ + 2 < FJ; JJ += 3) AJ[JJ] = JJ, AJ[JJ + 1] = JJ + 2, AJ[JJ + 2] = JJ + 1;
          YJ = AJ
        } else if (JJ && 0 !== UJ) {
          const eJ = cJ ? new Uint32Array(FJ) : new Uint16Array(FJ);
          for (let cJ = 0; cJ < FJ; cJ++) eJ[cJ] = JJ[ZJ + cJ] + UJ;
          YJ = eJ
        } else JJ && (YJ = function(JJ, cJ, ZJ, FJ) {
          let UJ = JJ;
          return 0 === cJ && ZJ === JJ.length || (UJ = Array.isArray(JJ) ? JJ.slice(cJ, cJ + ZJ) : JJ.subarray(cJ, cJ + ZJ)), UJ instanceof Int32Array ? new Uint32Array(UJ.buffer, UJ.byteOffset, UJ.length) : Array.isArray(UJ) ? FJ ? new Uint32Array(UJ) : new Uint16Array(UJ) : UJ
        }(JJ, ZJ, FJ, cJ));
        if (YJ) {
          let eJ = qJ.getIndicesAccessor(JJ, ZJ, FJ, UJ, hJ);
          if (void 0 === eJ) {
            const XJ = this._bufferManager.createBufferView(YJ),
              AJ = cJ ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(XJ, "SCALAR", AJ, FJ, 0)), eJ = this._accessors.length - 1, qJ.setIndicesAccessor(JJ, ZJ, FJ, UJ, hJ, eJ)
          }
          jJ.indices = eJ
        }
      }
      _exportVertexBuffer(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = JJ.getKind();
        if (!TZ(XJ)) return;
        if (XJ.startsWith("uv") && !this._options.exportUnusedUVs && (!cJ || !this._materialNeedsUVsSet.has(cJ))) return;
        let AJ = UJ.getVertexAccessor(JJ, ZJ, FJ);
        if (void 0 === AJ) {
          const cJ = UJ.convertedToRightHandedBuffers.get(JJ._buffer) || JJ._buffer.getData(),
            eJ = XJ === YJ.e.PositionKind ? function(JJ, cJ, ZJ, FJ) {
              const {
                byteOffset: UJ,
                byteStride: eJ,
                type: XJ,
                normalized: AJ
              } = cJ, qJ = cJ.getSize(), jJ = new Array(qJ).fill(1 / 0), YJ = new Array(qJ).fill(-1 / 0);
              return (0, wZ.i)(JJ, UJ + ZJ * eJ, eJ, qJ, XJ, FJ * qJ, AJ, (JJ => {
                for (let cJ = 0; cJ < qJ; cJ++) jJ[cJ] = Math.min(jJ[cJ], JJ[cJ]), YJ[cJ] = Math.max(YJ[cJ], JJ[cJ])
              })), {
                min: jJ,
                max: YJ
              }
            }(cJ, JJ, ZJ, FJ) : void 0,
            qJ = (XJ === YJ.e.MatricesIndicesKind || XJ === YJ.e.MatricesIndicesExtraKind) && JJ.type === YJ.e.FLOAT,
            jJ = qJ ? YJ.e.UNSIGNED_BYTE : JJ.type,
            hJ = qJ ? void 0 : JJ.normalized,
            DJ = qJ ? UJ.getRemappedBufferView(JJ._buffer, JJ) : UJ.getVertexBufferView(JJ._buffer),
            sJ = JJ.byteOffset + ZJ * JJ.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(DJ, function(JJ, cJ) {
            if (JJ == YJ.e.ColorKind) return cJ ? "VEC4" : "VEC3";
            switch (JJ) {
              case YJ.e.PositionKind:
              case YJ.e.NormalKind:
                return "VEC3";
              case YJ.e.TangentKind:
              case YJ.e.MatricesIndicesKind:
              case YJ.e.MatricesIndicesExtraKind:
              case YJ.e.MatricesWeightsKind:
              case YJ.e.MatricesWeightsExtraKind:
                return "VEC4";
              case YJ.e.UVKind:
              case YJ.e.UV2Kind:
              case YJ.e.UV3Kind:
              case YJ.e.UV4Kind:
              case YJ.e.UV5Kind:
              case YJ.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${JJ}`)
          }(XJ, UJ.hasVertexColorAlpha(JJ)), jJ, FJ, sJ, eJ, hJ)), AJ = this._accessors.length - 1, UJ.setVertexAccessor(JJ, ZJ, FJ, AJ)
        }
        eJ.attributes[function(JJ) {
          switch (JJ) {
            case YJ.e.PositionKind:
              return "POSITION";
            case YJ.e.NormalKind:
              return "NORMAL";
            case YJ.e.TangentKind:
              return "TANGENT";
            case YJ.e.ColorKind:
              return "COLOR_0";
            case YJ.e.UVKind:
              return "TEXCOORD_0";
            case YJ.e.UV2Kind:
              return "TEXCOORD_1";
            case YJ.e.UV3Kind:
              return "TEXCOORD_2";
            case YJ.e.UV4Kind:
              return "TEXCOORD_3";
            case YJ.e.UV5Kind:
              return "TEXCOORD_4";
            case YJ.e.UV6Kind:
              return "TEXCOORD_5";
            case YJ.e.MatricesIndicesKind:
              return "JOINTS_0";
            case YJ.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case YJ.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case YJ.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${JJ}`)
        }(XJ)] = AJ
      }
      async _exportMaterialAsync(JJ, cJ, ZJ, FJ) {
        let UJ = this._materialMap.get(JJ);
        if (void 0 === UJ) {
          const FJ = cJ && Object.keys(cJ).some((JJ => JJ.startsWith("uv")));
          if ((JJ = JJ instanceof UF.b ? JJ.U1[ZJ.materialIndex] : JJ) instanceof Ec) UJ = await this._materialExporter.exportPBRMaterialAsync(JJ, FJ);
          else if (JJ instanceof eF.StandardMaterial) UJ = await this._materialExporter.exportStandardMaterialAsync(JJ, FJ);
          else {
            if (!(JJ instanceof oc)) return void IJ.c.Warn(`Unsupported material '${JJ.name}' with type ${JJ.getClassName()}`);
            UJ = await this._materialExporter.exportOpenPBRMaterialAsync(JJ, FJ)
          }
          this._materialMap.set(JJ, UJ)
        }
        FJ.material = UJ
      }
      async _exportMeshAsync(JJ, cJ) {
        let ZJ = cJ.getMesh(JJ);
        if (void 0 !== ZJ) return ZJ;
        const FJ = {
          primitives: []
        };
        ZJ = this._meshes.length, this._meshes.push(FJ), cJ.setMesh(JJ, ZJ);
        const UJ = JJ.isUnIndexed ? null : JJ.QXJ(),
          XJ = JJ.geometry?.getVertexBuffers(),
          AJ = cJ.getMorphTargetsFromMesh(JJ),
          qJ = JJ instanceof sF.e,
          jJ = JJ instanceof WF,
          YJ = JJ.aE;
        if (XJ && YJ && YJ.length > 0)
          for (const hJ of YJ) {
            const ZJ = {
                attributes: {}
              },
              YJ = hJ.dn() || this._babylonScene.defaultMaterial;
            if (jJ) {
              const cJ = {
                  name: YJ.name
                },
                FJ = JJ,
                UJ = fJ.Color3.White(),
                eJ = FJ.material?.alpha ?? 1,
                XJ = FJ.greasedLineMaterial?.color ?? UJ;
              (!XJ.equalsWithEpsilon(UJ, gZ.e) || eJ < 1) && (cJ.pbrMetallicRoughness = {
                baseColorFactor: [...XJ.JFJ(), eJ]
              }), this._materials.push(cJ), ZJ.material = this._materials.length - 1
            } else if (qJ) {
              const cJ = {
                  name: YJ.name
                },
                FJ = JJ;
              (!FJ.color.equalsWithEpsilon(fJ.Color3.White(), gZ.e) || FJ.alpha < 1) && (cJ.pbrMetallicRoughness = {
                baseColorFactor: [...FJ.color.JFJ(), FJ.alpha]
              }), this._materials.push(cJ), ZJ.material = this._materials.length - 1
            } else await this._exportMaterialAsync(YJ, XJ, hJ, ZJ);
            const DJ = qJ || jJ ? eJ.c.LineListDrawMode : JJ.overrideRenderingFillMode ?? YJ.fillMode;
            let sJ = YJ._getEffectiveOrientation(JJ);
            cJ.wasAddedByNoopNode && !JJ.Qy().useRightHandedSystem && (sJ = sJ === eJ.c.ClockWiseSideOrientation ? eJ.c.CounterClockWiseSideOrientation : eJ.c.ClockWiseSideOrientation), this._exportIndices(UJ, UJ ? (0, wZ.b)(UJ, hJ.indexCount, hJ.indexStart, hJ.verticesStart) : hJ.verticesCount > 65535, UJ ? hJ.indexStart : hJ.verticesStart, UJ ? hJ.indexCount : hJ.verticesCount, -hJ.verticesStart, DJ, sJ, cJ, ZJ);
            for (const JJ of Object.values(XJ)) this._exportVertexBuffer(JJ, YJ, hJ.verticesStart, hJ.verticesCount, cJ, ZJ);
            if (AJ) {
              ZJ.targets = [];
              for (const JJ of AJ) ZJ.targets.push(JJ.attributes)
            }
            FJ.primitives.push(ZJ), this._extensionsPostExportMeshPrimitive(ZJ)
          }
        if (AJ) {
          FJ.weights = [], FJ.extras || (FJ.extras = {}), FJ.extras.targetNames = [];
          for (const JJ of AJ) FJ.weights.push(JJ.influence), FJ.extras.targetNames.push(JJ.name)
        }
        return ZJ
      }
    }
    HF._ExtensionNames = new Array, HF._ExtensionFactories = {}, HF._ExtensionOrders = {};
    class PF {
      static async GLTFAsync(JJ, cJ, ZJ) {
        ZJ && ZJ.exportWithoutWaitingForScene || await JJ.whenReadyAsync();
        const FJ = new HF(JJ, ZJ),
          UJ = await FJ.generateGLTFAsync(cJ.replace(/\.[^/.]+$/, ""));
        return FJ.dispose(), UJ
      }
      static async GLBAsync(JJ, cJ, ZJ) {
        ZJ && ZJ.exportWithoutWaitingForScene || await JJ.whenReadyAsync();
        const FJ = new HF(JJ, ZJ),
          UJ = await FJ.generateGLBAsync(cJ.replace(/\.[^/.]+$/, ""));
        return FJ.dispose(), UJ
      }
    }
    const kF = "EXT_mesh_gpu_instancing";

    function pF(JJ, cJ) {
      const ZJ = new Float32Array(3 * cJ);
      for (let FJ = 0; FJ < cJ; FJ++) ZJ[3 * FJ + 0] = JJ[4 * FJ + 0], ZJ[3 * FJ + 1] = JJ[4 * FJ + 1], ZJ[3 * FJ + 2] = JJ[4 * FJ + 2];
      return ZJ
    }
    class dF {
      constructor(JJ) {
        this.name = kF, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return await new Promise((JJ => {
          if (cJ && ZJ instanceof EF.d && ZJ.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const JJ = dJ.j.Zero(),
              FJ = dJ.e.Identity(),
              XJ = dJ.j.One(),
              AJ = ZJ.thinInstanceGetWorldMatrices(),
              qJ = dJ.h.Pn[2],
              jJ = dJ.h.Quaternion[1],
              YJ = dJ.h.Pn[3];
            let hJ = !1,
              DJ = !1,
              sJ = !1;
            const nJ = new Float32Array(3 * ZJ.f6),
              GJ = new Float32Array(4 * ZJ.f6),
              fJ = new Float32Array(3 * ZJ.f6);
            let xJ = 0;
            for (const cJ of AJ) cJ.decompose(YJ, jJ, qJ), UJ && (uZ(qJ), iZ(jJ)), nJ.set(qJ.JFJ(), 3 * xJ), GJ.set(jJ.normalize().JFJ(), 4 * xJ), fJ.set(YJ.JFJ(), 3 * xJ), hJ = hJ || !qJ.equalsWithEpsilon(JJ), DJ = DJ || !jJ.equalsWithEpsilon(FJ), sJ = sJ || !YJ.equalsWithEpsilon(XJ), xJ++;
            const rJ = {
              attributes: {}
            };
            hJ && (rJ.attributes.TRANSLATION = this._buildAccessor(nJ, "VEC3", ZJ.f6, eJ)), DJ && (rJ.attributes.ROTATION = this._buildAccessor(GJ, "VEC4", ZJ.f6, eJ)), sJ && (rJ.attributes.SCALE = this._buildAccessor(fJ, "VEC3", ZJ.f6, eJ));
            let vJ = ZJ._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (vJ) {
              const JJ = ZJ.f6,
                cJ = "VEC3";
              ZJ.hasVertexAlpha && vJ.length === 4 * JJ ? (this._instanceColorWarned || (IJ.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), vJ = pF(vJ, JJ)) : vJ.length === 4 * JJ && (vJ = pF(vJ, JJ)), vJ.length === 3 * JJ && (rJ.attributes._COLOR_0 = this._buildAccessor(vJ, cJ, JJ, eJ))
            }
            cJ.extensions = cJ.extensions || {}, cJ.extensions[kF] = rJ
          }
          JJ(cJ)
        }))
      }
      _buildAccessor(JJ, cJ, ZJ, FJ) {
        const UJ = FJ.createBufferView(JJ),
          eJ = FJ.createAccessor(UJ, cJ, 5126, ZJ);
        return this._exporter._accessors.push(eJ), this._exporter._accessors.length - 1
      }
    }
    let zF = !1;

    function NF() {
      zF || (zF = !0, HF.RegisterExtension(kF, (JJ => new dF(JJ))))
    }
    ZJ(39250);
    NF();
    var OF = ZJ(40556);

    function TF(JJ, cJ, ZJ, FJ) {
      const UJ = JJ;
      let eJ = null,
        XJ = null,
        AJ = null,
        qJ = null;
      const jJ = {},
        YJ = cJ.find((JJ => "POSITION" === JJ.dracoName));
      if (!YJ) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ZJ) {
        const JJ = YJ.data.length / YJ.size;
        ZJ = new(JJ > 65535 ? Uint32Array : Uint16Array)(JJ);
        for (let cJ = 0; cJ < JJ; cJ++) ZJ[cJ] = cJ
      }
      try {
        eJ = new UJ.Encoder, XJ = new UJ.MeshBuilder, AJ = new UJ.Mesh, XJ.AddFacesToMesh(AJ, ZJ.length / 3, ZJ);
        const JJ = new Map([
          [Float32Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddFloatAttribute(cJ, ZJ, FJ, UJ, eJ)],
          [Uint32Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddUInt32Attribute(cJ, ZJ, FJ, UJ, eJ)],
          [Uint16Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddUInt16Attribute(cJ, ZJ, FJ, UJ, eJ)],
          [Uint8Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddUInt8Attribute(cJ, ZJ, FJ, UJ, eJ)],
          [Int32Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddInt32Attribute(cJ, ZJ, FJ, UJ, eJ)],
          [Int16Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddInt16Attribute(cJ, ZJ, FJ, UJ, eJ)],
          [Int8Array, (JJ, cJ, ZJ, FJ, UJ, eJ) => JJ.AddInt8Attribute(cJ, ZJ, FJ, UJ, eJ)]
        ]);
        for (const ZJ of cJ) {
          ZJ.data instanceof Uint8ClampedArray && (ZJ.data = new Uint8Array(ZJ.data));
          const cJ = JJ.get(ZJ.data.constructor),
            qJ = ZJ.data.length / ZJ.size;
          jJ[ZJ.kind] = cJ(XJ, AJ, UJ[ZJ.dracoName], qJ, ZJ.size, ZJ.data), FJ.quantizationBits && FJ.quantizationBits[ZJ.dracoName] && eJ.SetAttributeQuantization(UJ[ZJ.dracoName], FJ.quantizationBits[ZJ.dracoName])
        }
        FJ.method && eJ.SetEncodingMethod(UJ[FJ.method]), void 0 !== FJ.encodeSpeed && void 0 !== FJ.decodeSpeed && eJ.SetSpeedOptions(FJ.encodeSpeed, FJ.decodeSpeed), qJ = new UJ.DracoInt8Array;
        const YJ = eJ.EncodeMeshToDracoBuffer(AJ, qJ);
        if (YJ <= 0) throw new Error("Draco: Failed to encode.");
        const hJ = new Int8Array(YJ);
        for (let cJ = 0; cJ < YJ; cJ++) hJ[cJ] = qJ.GetValue(cJ);
        return {
          data: hJ,
          attributeIds: jJ
        }
      } finally {
        AJ && UJ.destroy(AJ), XJ && UJ.destroy(XJ), eJ && UJ.destroy(eJ), qJ && UJ.destroy(qJ)
      }
    }

    function CF() {
      let JJ;
      onmessage = cJ => {
        const ZJ = cJ.data;
        switch (ZJ.id) {
          case "init": {
            ZJ.url && importScripts(ZJ.url);
            const cJ = ZJ.wasmBinary ? {
              wasmBinary: ZJ.wasmBinary
            } : {};
            JJ = DracoEncoderModule(cJ), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!JJ) throw new Error("Draco: Encoder module is not available.");
            JJ.then((JJ => {
              const cJ = TF(JJ, ZJ.attributes, ZJ.indices, ZJ.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: cJ
              }, cJ ? [cJ.data.buffer] : void 0)
            })).catch((JJ => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: JJ.message
              })
            }))
        }
      }
    }
    class uF {
      constructor(JJ) {
        if (JJ.workerPool) return void(this._workerPoolPromise = Promise.resolve(JJ.workerPool));
        const cJ = JJ.wasmBinary,
          ZJ = JJ.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          FJ = ZJ && "function" === typeof Worker && "function" === typeof URL,
          UJ = FJ || !JJ.jsModule,
          eJ = JJ.wasmUrl && JJ.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: UJ ? Kc.j.GetBabylonScriptURL(JJ.wasmUrl, !0) : "",
            wasmBinaryPromise: cJ ? Promise.resolve(cJ) : Kc.j.LoadFileAsync(Kc.j.GetBabylonScriptURL(JJ.wasmBinaryUrl, !0))
          } : {
            url: UJ ? Kc.j.GetBabylonScriptURL(JJ.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        FJ ? this._workerPoolPromise = eJ.wasmBinaryPromise.then((JJ => {
          const cJ = this._getWorkerContent(),
            FJ = URL.createObjectURL(new Blob([cJ], {
              type: "application/javascript"
            }));
          return new OF.b(ZJ, (() => async function(JJ, cJ, ZJ) {
            return await new Promise(((FJ, UJ) => {
              const eJ = cJ => {
                  JJ.removeEventListener("error", eJ), JJ.removeEventListener("message", XJ), UJ(cJ)
                },
                XJ = cJ => {
                  "initDone" === cJ.data.id && (JJ.removeEventListener("error", eJ), JJ.removeEventListener("message", XJ), FJ(JJ))
                };
              if (JJ.addEventListener("error", eJ), JJ.addEventListener("message", XJ), cJ) {
                const FJ = cJ.slice(0);
                JJ.postMessage({
                  id: "init",
                  url: ZJ,
                  wasmBinary: FJ
                }, [FJ])
              } else JJ.postMessage({
                id: "init",
                url: ZJ
              })
            }))
          }(new Worker(FJ), JJ, eJ.url)))
        })) : this._modulePromise = eJ.wasmBinaryPromise.then((async cJ => {
          if (!this._isModuleAvailable() && !JJ.jsModule) {
            if (!eJ.url) throw new Error("Draco codec module is not available");
            await Kc.j.LoadBabylonScriptAsync(eJ.url)
          }
          return await this._createModuleAsync(cJ, JJ.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((JJ => {
          JJ.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function iF() {
      const JJ = JJ => !!JJ && "object" === typeof JJ;
      for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
      return ZJ.reduce(((cJ, ZJ) => {
        const FJ = Object.keys(ZJ);
        for (const UJ of FJ) {
          const FJ = cJ[UJ],
            eJ = ZJ[UJ];
          Array.isArray(FJ) && Array.isArray(eJ) ? cJ[UJ] = FJ.concat(eJ) : JJ(FJ) && JJ(eJ) ? cJ[UJ] = iF(FJ, eJ) : cJ[UJ] = eJ
        }
        return cJ
      }), {})
    }

    function RF(JJ) {
      return JJ === zJ.n.PositionKind ? "POSITION" : JJ === zJ.n.NormalKind ? "NORMAL" : JJ === zJ.n.ColorKind ? "COLOR" : JJ.startsWith(zJ.n.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const LF = {
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
    class aF extends uF {
      static get DefaultAvailable() {
        return !!((JJ = aF.DefaultConfiguration).wasmUrl && (JJ.wasmBinary || JJ.wasmBinaryUrl) && "object" === typeof WebAssembly || JJ.fallbackUrl);
        var JJ
      }
      static get Default() {
        return aF._Default ?? (aF._Default = new aF), aF._Default
      }
      static ResetDefault(JJ) {
        aF._Default && (JJ || aF._Default.dispose(), aF._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(JJ, cJ) {
        return {
          module: await (cJ || DracoEncoderModule)({
            wasmBinary: JJ
          })
        }
      }
      _getWorkerContent() {
        return `${TF}(${CF})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aF.DefaultConfiguration)
      }
      async _encodeAsync(JJ, cJ, ZJ) {
        const FJ = ZJ ? iF(LF, ZJ) : LF;
        if (this._workerPoolPromise) {
          const ZJ = await this._workerPoolPromise;
          return await new Promise(((UJ, eJ) => {
            ZJ.push(((ZJ, XJ) => {
              const AJ = JJ => {
                  ZJ.removeEventListener("error", AJ), ZJ.removeEventListener("message", qJ), eJ(JJ), XJ()
                },
                qJ = JJ => {
                  "encodeMeshSuccess" === JJ.data.id ? (ZJ.removeEventListener("error", AJ), ZJ.removeEventListener("message", qJ), UJ(JJ.data.encodedMeshData), XJ()) : "encodeMeshError" === JJ.data.id && (ZJ.removeEventListener("error", AJ), ZJ.removeEventListener("message", qJ), eJ(new Error(JJ.data.errorMessage)), XJ())
                };
              ZJ.addEventListener("error", AJ), ZJ.addEventListener("message", qJ);
              const jJ = [];
              for (const cJ of JJ) jJ.push(cJ.data.buffer);
              cJ && jJ.push(cJ.buffer), ZJ.postMessage({
                id: "encodeMesh",
                attributes: JJ,
                indices: cJ,
                options: FJ
              }, jJ)
            }))
          }))
        }
        if (this._modulePromise) {
          return TF((await this._modulePromise).module, JJ, cJ, FJ)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(JJ, cJ) {
        if (0 == JJ.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        JJ instanceof EF.d && JJ.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === cJ?.method && (IJ.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), cJ.method = "MESH_SEQUENTIAL_ENCODING");
        const ZJ = function(JJ) {
            let cJ = JJ.QXJ(void 0, !0);
            return !cJ || cJ instanceof Uint32Array || cJ instanceof Uint16Array || (cJ = ((0, wZ.b)(cJ, cJ.length) ? Uint32Array : Uint16Array).from(cJ)), cJ
          }(JJ),
          FJ = function(JJ, cJ) {
            const ZJ = [];
            for (const FJ of JJ.getVerticesDataKinds()) {
              if (cJ?.includes(FJ)) {
                if (FJ === zJ.n.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const UJ = JJ.getVertexBuffer(FJ),
                eJ = UJ.getSize(),
                XJ = (0, wZ.r)(UJ.getData(), eJ, UJ.type, UJ.byteOffset, UJ.byteStride, JJ.getTotalVertices(), !0);
              ZJ.push({
                kind: FJ,
                dracoName: RF(FJ),
                size: eJ,
                data: XJ
              })
            }
            return ZJ
          }(JJ, cJ?.excludedAttributes);
        return await this._encodeAsync(FJ, ZJ, cJ)
      }
    }
    aF.DefaultConfiguration = {
      wasmUrl: `${Kc.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Kc.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Kc.j._DefaultCdnUrl}/draco_encoder.js`
    }, aF._Default = null;
    const BF = "KHR_draco_mesh_compression";
    class tF {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(JJ) {
        this.name = BF, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === JJ.options.meshCompressionMethod && aF.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(JJ, cJ, ZJ) {
        if (!this.enabled) return;
        if (4 !== JJ.mode && 5 !== JJ.mode) return void IJ.c.Warn("Cannot compress primitive with mode " + JJ.mode + ".");
        const FJ = [],
          UJ = [];
        let eJ = null;
        if (void 0 !== JJ.indices) {
          const XJ = ZJ[JJ.indices],
            AJ = cJ.getBufferView(XJ);
          eJ = cJ.getData(AJ).slice(), FJ.push(AJ), UJ.push(XJ)
        }
        const XJ = [];
        for (const [YJ, hJ] of Object.entries(JJ.attributes)) {
          const JJ = ZJ[hJ],
            eJ = cJ.getBufferView(JJ),
            qJ = OZ(JJ.type),
            jJ = (0, wZ.r)(cJ.getData(eJ), qJ, JJ.componentType, JJ.byteOffset || 0, eJ.byteStride || (0, wZ.o)(JJ.componentType) * qJ, JJ.count, !0);
          XJ.push({
            kind: YJ,
            dracoName: (AJ = YJ, "POSITION" === AJ ? "POSITION" : "NORMAL" === AJ ? "NORMAL" : AJ.startsWith("COLOR") ? "COLOR" : AJ.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: OZ(JJ.type),
            data: jJ
          }), FJ.push(eJ), UJ.push(JJ)
        }
        var AJ;
        const qJ = {
            method: JJ.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          jJ = aF.Default._encodeAsync(XJ, eJ, qJ).then((ZJ => {
            const eJ = {
                bufferView: -1,
                attributes: ZJ.attributeIds
              },
              XJ = cJ.createBufferView(ZJ.data);
            cJ.setBufferView(eJ, XJ);
            for (const JJ of FJ) this._bufferViewsUsed.add(JJ);
            for (const JJ of UJ) this._accessorsUsed.add(JJ);
            JJ.extensions || (JJ.extensions = {}), JJ.extensions[BF] = eJ
          })).catch((JJ => {
            IJ.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + JJ.message)
          }));
        this._encodePromises.push(jJ), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(JJ) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((cJ => {
          JJ.getPropertiesWithBufferView(cJ).every((JJ => this._accessorsUsed.has(JJ))) && JJ.removeBufferView(cJ)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let oF = !1;

    function lF() {
      oF || (oF = !0, HF.RegisterExtension(BF, (JJ => new tF(JJ))))
    }
    lF();
    var JU = ZJ(40308);
    const cU = "KHR_lights_punctual",
      ZU = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      FU = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      UU = dJ.j.Backward();
    class eU {
      constructor(JJ) {
        this.name = cU, this.enabled = !0, this.required = !1, this._exporter = JJ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[cU] = this._lights
      }
      async postExportNodeAsync(JJ, cJ, ZJ, FJ, UJ) {
        return await new Promise((eJ => {
          if (!(ZJ instanceof YF.b)) return void eJ(cJ);
          const XJ = ZJ.getTypeID() == YF.b.LIGHTTYPEID_POINTLIGHT ? "point" : ZJ.getTypeID() == YF.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ZJ.getTypeID() == YF.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!XJ || !(ZJ instanceof JU.e)) return IJ.c.Warn(`${JJ}: Light ${ZJ.name} is not supported in ${cU}`), void eJ(cJ);
          if (ZJ.falloffType !== YF.b.FALLOFF_GLTF && IJ.c.Warn(`${JJ}: Light falloff for ${ZJ.name} does not match the ${cU} specification!`), !ZJ.position.KXJ(0, 0, 0)) {
            const JJ = dJ.h.Pn[0].rZJ(ZJ.position);
            UJ && uZ(JJ), cJ.translation = JJ.JFJ()
          }
          if ("point" !== XJ) {
            const JJ = ZJ.direction.normalizeToRef(dJ.h.Pn[0]);
            UJ && uZ(JJ);
            const FJ = dJ.e.FromUnitVectorsToRef(UU, JJ, dJ.h.Quaternion[0]);
            dJ.e.IsIdentity(FJ) || (cJ.rotation = FJ.JFJ())
          }
          const AJ = {
            type: XJ,
            name: ZJ.name,
            color: ZJ.diffuse.JFJ(),
            intensity: ZJ.intensity,
            range: ZJ.range
          };
          if (tZ(AJ, ZU), "spot" === XJ) {
            const JJ = ZJ;
            AJ.spot = {
              innerConeAngle: JJ.innerAngle / 2,
              outerConeAngle: JJ.angle / 2
            }, tZ(AJ.spot, FU)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(AJ);
          const qJ = {
              light: this._lights.lights.length - 1
            },
            jJ = ZJ.parent;
          if (jJ && aZ(ZJ, jJ)) {
            const JJ = FJ.get(jJ);
            if (JJ) {
              const ZJ = this._exporter._nodes[JJ];
              return LZ(cJ, ZJ), ZJ.extensions || (ZJ.extensions = {}), ZJ.extensions[cU] = qJ, void eJ(null)
            }
          }
          cJ.extensions || (cJ.extensions = {}), cJ.extensions[cU] = qJ, eJ(cJ)
        }))
      }
    }
    let XU = !1;

    function AU() {
      XU || (XU = !0, HF.RegisterExtension(cU, (JJ => new eU(JJ))))
    }
    AU();
    const qU = "KHR_interactivity";
    class jU {
      constructor(JJ) {
        this._exporter = JJ, this.name = qU, this.enabled = !!JJ.options.khrInteractivity, this.required = JJ.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var JJ, cJ, ZJ;
        const FJ = this._exporter.options.khrInteractivity;
        if (!FJ) return;
        const UJ = FJ.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: JJ => this._exporter._getNodeIndex(JJ),
          getAnimationIndex: JJ => this._exporter._getAnimationIndex(JJ),
          getCameraIndex: JJ => this._exporter._getCameraIndex(JJ),
          getMaterialIndex: JJ => this._exporter._getMaterialIndex(JJ),
          getRootIndex: (JJ, cJ) => this._exporter._getRootIndex(JJ, cJ),
          setNodeExtension: (JJ, cJ, ZJ) => this._exporter._setNodeExtension(JJ, cJ, ZJ)
        });
        this._exporter._glTF.extensions[qU] = UJ;
        for (const eJ of FJ.additionalExtensionsUsed)(JJ = this._exporter._glTF).extensionsUsed || (JJ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(eJ) && this._exporter._glTF.extensionsUsed.push(eJ);
        for (const eJ of FJ.additionalExtensionsRequired)(cJ = this._exporter._glTF).extensionsUsed || (cJ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(eJ) && this._exporter._glTF.extensionsUsed.push(eJ), (ZJ = this._exporter._glTF).extensionsRequired || (ZJ.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(eJ) && this._exporter._glTF.extensionsRequired.push(eJ)
      }
    }
    let YU = !1;

    function hU() {
      YU || (YU = !0, HF.RegisterExtension(qU, (JJ => new jU(JJ)), 200))
    }
    hU();
    const DU = "EXT_lights_area",
      sU = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      nU = {
        aspect: 1
      },
      GU = dJ.j.Backward();
    class fU {
      constructor(JJ) {
        this.name = DU, this.enabled = !0, this.required = !1, this._exporter = JJ
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[DU] = this._lights
      }
      async postExportNodeAsync(JJ, cJ, ZJ, FJ, UJ) {
        return await new Promise((eJ => {
          if (!(ZJ instanceof YF.b)) return void eJ(cJ);
          const XJ = ZJ.getTypeID() == YF.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!XJ) return IJ.c.Warn(`${JJ}: Light ${ZJ.name} is not supported in ${DU}`), void eJ(cJ);
          const AJ = ZJ;
          if (AJ.falloffType !== YF.b.FALLOFF_GLTF && IJ.c.Warn(`${JJ}: Light falloff for ${ZJ.name} does not match the ${DU} specification!`), !AJ.position.KXJ(0, 0, 0)) {
            const JJ = dJ.h.Pn[0].rZJ(AJ.position);
            UJ && uZ(JJ), cJ.translation = JJ.JFJ()
          }
          const qJ = dJ.j.Forward();
          UJ && uZ(qJ);
          const jJ = dJ.e.FromUnitVectorsToRef(GU, qJ, dJ.h.Quaternion[0]);
          dJ.e.IsIdentity(jJ) || (cJ.rotation = jJ.JFJ());
          const YJ = {
            type: XJ,
            name: AJ.name,
            color: AJ.diffuse.JFJ(),
            intensity: AJ.intensity,
            size: AJ.height,
            rect: {
              aspect: AJ.width / AJ.height
            }
          };
          tZ(YJ, sU), YJ.rect && tZ(YJ.rect, nU), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(YJ);
          const hJ = {
              light: this._lights.lights.length - 1
            },
            DJ = ZJ.parent;
          if (DJ && aZ(AJ, DJ)) {
            const JJ = FJ.get(DJ);
            if (JJ) {
              const ZJ = this._exporter._nodes[JJ];
              return LZ(cJ, ZJ), ZJ.extensions || (ZJ.extensions = {}), ZJ.extensions[DU] = hJ, void eJ(null)
            }
          }
          cJ.extensions || (cJ.extensions = {}), cJ.extensions[DU] = hJ, eJ(cJ)
        }))
      }
    }
    let xU = !1;

    function rU() {
      xU || (xU = !0, HF.RegisterExtension(DU, (JJ => new fU(JJ))))
    }
    rU();
    const vU = "KHR_materials_anisotropy";
    class mU {
      constructor(JJ) {
        this.name = vU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof Ec) {
          if (ZJ.anisotropy.isEnabled && !ZJ.anisotropy.legacy) return ZJ.anisotropy.texture && FJ.push(ZJ.anisotropy.texture), FJ
        } else if (ZJ instanceof oc && ZJ.specularRoughnessAnisotropy > 0) {
          const JJ = function(JJ) {
            const cJ = JJ.specularRoughnessAnisotropyTexture,
              ZJ = JJ.geometryTangentTexture;
            return `${cJ&&cJ.getInternalTexture()?cJ.getInternalTexture().uniqueId:"NoStrength"}_${ZJ&&ZJ.getInternalTexture()?ZJ.getInternalTexture().uniqueId:"NoTangent"}`
          }(ZJ);
          if (this._anisoTexturesMap[JJ]) FJ.push(this._anisoTexturesMap[JJ]);
          else {
            const cJ = await async function(JJ) {
              const cJ = JJ.Qy(),
                ZJ = JJ.specularRoughnessAnisotropyTexture,
                FJ = JJ.geometryTangentTexture;
              return ZJ || FJ ? await XZ("AnisotropyTexture", jZ(FJ ? AZ(FJ, 0) : qZ(1), FJ ? AZ(FJ, 1) : qZ(0), ZJ ? AZ(ZJ, 0) : qZ(1)), cJ) : null
            }(ZJ);
            cJ && (FJ.push(cJ), this._anisoTexturesMap[JJ] = cJ)
          }
          return FJ
        }
        return []
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          var FJ;
          if (ZJ instanceof Ec) {
            if (!ZJ.anisotropy.isEnabled || ZJ.anisotropy.legacy) return void JJ(cJ);
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const FJ = this._exporter._materialExporter.getTextureInfo(ZJ.anisotropy.texture),
              UJ = {
                anisotropyStrength: ZJ.anisotropy.intensity,
                anisotropyRotation: ZJ.anisotropy.angle,
                anisotropyTexture: FJ ?? void 0
              };
            null !== UJ.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[vU] = UJ
          } else if (ZJ instanceof oc && ZJ.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            let UJ = ZJ.specularRoughnessTexture;
            ZJ._useRoughnessFromMetallicTextureGreen && (UJ = ZJ.baseMetalnessTexture);
            const eJ = this._anisoTexturesMap[ZJ.id];
            if (!UJ && !eJ) {
              let FJ = ZJ.specularRoughness,
                UJ = ZJ.specularRoughnessAnisotropy;
              if (!ZJ._useGltfStyleAnisotropy) {
                const JJ = function(JJ, cJ) {
                  const ZJ = JJ * JJ,
                    FJ = ZJ * Math.sqrt(2 / (1 + (1 - cJ) * (1 - cJ))),
                    UJ = (1 - cJ) * FJ;
                  return {
                    newBaseRoughness: Math.sqrt(UJ),
                    newAnisotropyStrength: Math.min(Math.sqrt((FJ - ZJ) / Math.max(1 - ZJ, 1e-4)), 1)
                  }
                }(ZJ.specularRoughness, ZJ.specularRoughnessAnisotropy);
                FJ = JJ.newBaseRoughness, UJ = JJ.newAnisotropyStrength
              }
              cJ.pbrMetallicRoughness && (cJ.pbrMetallicRoughness.roughnessFactor = FJ);
              const eJ = {
                anisotropyStrength: UJ,
                anisotropyRotation: ZJ.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return cJ.extensions[vU] = eJ, JJ(cJ)
            }
            const XJ = eJ ? this._exporter._materialExporter.getTextureInfo(eJ) : null,
              AJ = {
                anisotropyStrength: ZJ.specularRoughnessAnisotropy,
                anisotropyRotation: ZJ.geometryTangentAngle,
                anisotropyTexture: XJ || void 0,
                extensions: {}
              };
            ZJ._useGltfStyleAnisotropy || (cJ.extensions.KHR_materials_openpbr = {}, (FJ = this._exporter._glTF).extensionsUsed || (FJ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[vU] = AJ
          }
          JJ(cJ)
        }))
      }
    }
    let QU = !1;

    function EU() {
      QU || (QU = !0, HF.RegisterExtension(vU, (JJ => new mU(JJ))))
    }
    EU();
    const VU = "KHR_materials_clearcoat";

    function KU(JJ, cJ) {
      const ZJ = new bJ.i(cJ.name, cJ.Qy());
      return ZJ._texture = JJ, ZJ.coordinatesIndex = cJ.coordinatesIndex, cJ instanceof bJ.i && (ZJ.uOffset = cJ.uOffset, ZJ.vOffset = cJ.vOffset, ZJ.uScale = cJ.uScale, ZJ.vScale = cJ.vScale, ZJ.wAng = cJ.wAng), ZJ.wrapU = cJ.wrapU, ZJ.wrapV = cJ.wrapV, ZJ
    }
    class yU {
      constructor(JJ) {
        this.name = VU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = JJ
      }
      dispose() {
        for (const JJ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[JJ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const JJ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[JJ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof Ec) {
          if (ZJ.clearCoat.isEnabled) return ZJ.clearCoat.texture && FJ.push(ZJ.clearCoat.texture), !ZJ.clearCoat.useRoughnessFromMainTexture && ZJ.clearCoat.textureRoughness && FJ.push(ZJ.clearCoat.textureRoughness), ZJ.clearCoat.bumpTexture && FJ.push(ZJ.clearCoat.bumpTexture), FJ
        } else if (ZJ instanceof oc && ZJ.coatWeight > 0) {
          let JJ = !1;
          if (ZJ.coatWeightTexture ? ZJ.coatRoughnessTexture ? ZJ._useCoatRoughnessFromGreenChannel && ZJ.coatWeightTexture.getInternalTexture() === ZJ.coatRoughnessTexture.getInternalTexture() ? (FJ.push(ZJ.coatWeightTexture), FJ.push(ZJ.coatRoughnessTexture)) : JJ = !0 : FJ.push(ZJ.coatWeightTexture) : ZJ.coatRoughnessTexture && (ZJ._useCoatRoughnessFromGreenChannel ? FJ.push(ZJ.coatRoughnessTexture) : JJ = !0), JJ) {
            const JJ = function(JJ) {
              const cJ = JJ.coatWeightTexture,
                ZJ = cJ && cJ.getInternalTexture() ? cJ.getInternalTexture().uniqueId : "NoCoat",
                FJ = JJ.coatRoughnessTexture;
              return `${ZJ}_${FJ&&FJ.getInternalTexture()?FJ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZJ);
            if (!this._cachedInternalTexturesMap[JJ]) {
              const cJ = await async function(JJ) {
                const cJ = JJ.Qy(),
                  ZJ = JJ.coatWeightTexture,
                  FJ = JJ.coatRoughnessTexture;
                return ZJ || FJ ? (await XZ("CoatTexture", jZ(ZJ ? AZ(ZJ, 0) : qZ(1), FJ ? AZ(FJ, JJ._useCoatRoughnessFromGreenChannel ? 1 : 0) : qZ(1)), cJ)).getInternalTexture() : null
              }(ZJ);
              cJ && (this._cachedInternalTexturesMap[JJ] = cJ)
            }
            this._cachedInternalTexturesMap[JJ] && (ZJ.coatWeightTexture && (this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId] = KU(this._cachedInternalTexturesMap[JJ], ZJ.coatWeightTexture), FJ.push(this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId])), ZJ.coatRoughnessTexture && (this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId] = KU(this._cachedInternalTexturesMap[JJ], ZJ.coatRoughnessTexture), FJ.push(this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId])))
          }
          return ZJ.geometryCoatNormalTexture && FJ.push(ZJ.geometryCoatNormalTexture), FJ
        }
        return []
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof Ec) {
            if (!ZJ.clearCoat.isEnabled) return void JJ(cJ);
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const FJ = this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.texture);
            let UJ;
            UJ = ZJ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.textureRoughness), ZJ.clearCoat.isTintEnabled && Kc.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZJ.name}`), ZJ.clearCoat.remapF0OnInterfaceChange && Kc.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ZJ.name}`);
            const eJ = this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.bumpTexture),
              XJ = {
                clearcoatFactor: ZJ.clearCoat.intensity,
                clearcoatTexture: FJ ?? void 0,
                clearcoatRoughnessFactor: ZJ.clearCoat.roughness,
                clearcoatRoughnessTexture: UJ ?? void 0,
                clearcoatNormalTexture: eJ ?? void 0
              };
            null === XJ.clearcoatTexture && null === XJ.clearcoatRoughnessTexture && null === XJ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[VU] = XJ
          } else if (ZJ instanceof oc) {
            if (0 == ZJ.coatWeight) return void JJ(cJ);
            let FJ, UJ, eJ, XJ;
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {}, ZJ.coatWeightTexture && (FJ = this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId], UJ = this._exporter._materialExporter.getTextureInfo(FJ)), ZJ.coatRoughnessTexture && (eJ = this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId], XJ = this._exporter._materialExporter.getTextureInfo(eJ)), ZJ.coatColorTexture && Kc.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZJ.name}`);
            const AJ = this._exporter._materialExporter.getTextureInfo(ZJ.geometryCoatNormalTexture),
              qJ = {
                clearcoatFactor: ZJ.coatWeight,
                clearcoatTexture: UJ ?? void 0,
                clearcoatRoughnessFactor: ZJ.coatRoughness,
                clearcoatRoughnessTexture: XJ ?? void 0,
                clearcoatNormalTexture: AJ ?? void 0
              };
            null === qJ.clearcoatTexture && null === qJ.clearcoatRoughnessTexture && null === qJ.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[VU] = qJ
          }
          JJ(cJ)
        }))
      }
    }
    let SU = !1;

    function IU() {
      SU || (SU = !0, HF.RegisterExtension(VU, (JJ => new yU(JJ))))
    }
    IU();
    const MU = "KHR_materials_coat";

    function bU(JJ) {
      const cJ = JJ.coatRoughnessAnisotropyTexture,
        ZJ = JJ.geometryCoatTangentTexture;
      return `${cJ&&cJ.getInternalTexture()?cJ.getInternalTexture().uniqueId:"NoStrength"}_${ZJ&&ZJ.getInternalTexture()?ZJ.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function wU(JJ, cJ) {
      const ZJ = new bJ.i(cJ.name, cJ.Qy());
      return ZJ._texture = JJ, ZJ.coordinatesIndex = cJ.coordinatesIndex, cJ instanceof bJ.i && (ZJ.uOffset = cJ.uOffset, ZJ.vOffset = cJ.vOffset, ZJ.uScale = cJ.uScale, ZJ.vScale = cJ.vScale, ZJ.wAng = cJ.wAng), ZJ.wrapU = cJ.wrapU, ZJ.wrapV = cJ.wrapV, ZJ
    }
    class WU {
      constructor(JJ) {
        this.name = MU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = JJ
      }
      dispose() {
        for (const JJ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[JJ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const JJ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[JJ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof Ec) {
          if (ZJ.clearCoat.isEnabled) return ZJ.clearCoat.texture && FJ.push(ZJ.clearCoat.texture), !ZJ.clearCoat.useRoughnessFromMainTexture && ZJ.clearCoat.textureRoughness && FJ.push(ZJ.clearCoat.textureRoughness), ZJ.clearCoat.bumpTexture && FJ.push(ZJ.clearCoat.bumpTexture), ZJ.clearCoat.tintTexture && FJ.push(ZJ.clearCoat.tintTexture), FJ
        } else if (ZJ instanceof oc && ZJ.coatWeight > 0) {
          let JJ = !1;
          if (ZJ.coatWeightTexture ? ZJ.coatRoughnessTexture ? ZJ._useCoatRoughnessFromGreenChannel && ZJ.coatWeightTexture.getInternalTexture() === ZJ.coatRoughnessTexture.getInternalTexture() ? (FJ.push(ZJ.coatWeightTexture), FJ.push(ZJ.coatRoughnessTexture)) : JJ = !0 : FJ.push(ZJ.coatWeightTexture) : ZJ.coatRoughnessTexture && (ZJ._useCoatRoughnessFromGreenChannel ? FJ.push(ZJ.coatRoughnessTexture) : JJ = !0), JJ) {
            const JJ = function(JJ) {
              const cJ = JJ.coatWeightTexture,
                ZJ = cJ && cJ.getInternalTexture() ? cJ.getInternalTexture().uniqueId : "NoCoat",
                FJ = JJ.coatRoughnessTexture;
              return `${ZJ}_${FJ&&FJ.getInternalTexture()?FJ.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZJ);
            if (!this._cachedInternalTexturesMap[JJ]) {
              const cJ = await async function(JJ) {
                const cJ = JJ.Qy(),
                  ZJ = JJ.coatWeightTexture,
                  FJ = JJ.coatRoughnessTexture;
                return ZJ || FJ ? (await XZ("CoatTexture", jZ(ZJ ? AZ(ZJ, 0) : qZ(1), FJ ? AZ(FJ, JJ._useCoatRoughnessFromGreenChannel ? 1 : 0) : qZ(1)), cJ)).getInternalTexture() : null
              }(ZJ);
              cJ && (this._cachedInternalTexturesMap[JJ] = cJ)
            }
            this._cachedInternalTexturesMap[JJ] && (ZJ.coatWeightTexture && (this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId] = wU(this._cachedInternalTexturesMap[JJ], ZJ.coatWeightTexture), FJ.push(this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId])), ZJ.coatRoughnessTexture && (this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId] = wU(this._cachedInternalTexturesMap[JJ], ZJ.coatRoughnessTexture), FJ.push(this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId])))
          }
          if (ZJ.geometryCoatNormalTexture && FJ.push(ZJ.geometryCoatNormalTexture), ZJ.coatColorTexture && FJ.push(ZJ.coatColorTexture), ZJ.coatRoughnessAnisotropy > 0) {
            const JJ = bU(ZJ);
            if (this._mergedTexturesMap[JJ]) FJ.push(this._mergedTexturesMap[JJ]);
            else {
              const cJ = await async function(JJ) {
                const cJ = JJ.Qy(),
                  ZJ = JJ.coatRoughnessAnisotropyTexture,
                  FJ = JJ.geometryCoatTangentTexture;
                return ZJ || FJ ? await XZ("AnisotropyTexture", jZ(FJ ? AZ(FJ, 0) : qZ(1), FJ ? AZ(FJ, 1) : qZ(0), ZJ ? AZ(ZJ, 0) : qZ(1)), cJ) : null
              }(ZJ);
              cJ && (FJ.push(cJ), this._mergedTexturesMap[JJ] = cJ)
            }
            return FJ
          }
          return FJ
        }
        return []
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          var FJ;
          if (ZJ instanceof Ec) {
            if (!ZJ.clearCoat.isEnabled) return void JJ(cJ);
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const FJ = this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.texture);
            let UJ, eJ;
            UJ = ZJ.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.textureRoughness), ZJ.clearCoat.isTintEnabled && (eJ = this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.tintTexture));
            const XJ = this._exporter._materialExporter.getTextureInfo(ZJ.clearCoat.bumpTexture),
              AJ = ZJ.clearCoat.indexOfRefraction,
              qJ = {
                coatFactor: ZJ.clearCoat.intensity,
                coatTexture: FJ ?? void 0,
                coatRoughnessFactor: ZJ.clearCoat.roughness,
                coatRoughnessTexture: UJ ?? void 0,
                coatNormalTexture: XJ ?? void 0,
                coatColorFactor: ZJ.clearCoat.tintColor.JFJ(),
                coatColorTexture: eJ ?? void 0,
                coatIor: 1.5 !== AJ ? AJ : void 0
              };
            null === qJ.coatTexture && null === qJ.coatRoughnessTexture && null === qJ.coatRoughnessTexture && null === qJ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[MU] = qJ
          } else if (ZJ instanceof oc) {
            if (0 == ZJ.coatWeight) return void JJ(cJ);
            let UJ, eJ, XJ, AJ;
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {}, ZJ.coatWeightTexture && (UJ = this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ZJ.coatWeightTexture.uniqueId] : ZJ.coatWeightTexture, eJ = this._exporter._materialExporter.getTextureInfo(UJ)), ZJ.coatRoughnessTexture && (XJ = this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZJ.coatRoughnessTexture.uniqueId] : ZJ.coatRoughnessTexture, AJ = this._exporter._materialExporter.getTextureInfo(XJ));
            const qJ = this._exporter._materialExporter.getTextureInfo(ZJ.geometryCoatNormalTexture),
              jJ = this._exporter._materialExporter.getTextureInfo(ZJ.coatColorTexture),
              YJ = ZJ.coatIor,
              hJ = ZJ.coatDarkening,
              DJ = ZJ.coatRoughnessTexture,
              sJ = bU(ZJ),
              nJ = this._mergedTexturesMap[sJ];
            let GJ, fJ = 0,
              xJ = 0;
            if (ZJ.coatRoughnessAnisotropy > 0) {
              if (DJ || nJ) {
                const JJ = nJ ? this._exporter._materialExporter.getTextureInfo(nJ) : null;
                fJ = ZJ.coatRoughnessAnisotropy, xJ = ZJ.geometryCoatTangentAngle, GJ = JJ || void 0
              } else {
                let JJ = ZJ.coatRoughness,
                  FJ = ZJ.coatRoughnessAnisotropy;
                if (!ZJ._useGltfStyleAnisotropy) {
                  const cJ = function(JJ, cJ) {
                    const ZJ = JJ * JJ,
                      FJ = ZJ * Math.sqrt(2 / (1 + (1 - cJ) * (1 - cJ))),
                      UJ = (1 - cJ) * FJ;
                    return {
                      newBaseRoughness: Math.sqrt(UJ),
                      newAnisotropyStrength: Math.min(Math.sqrt((FJ - ZJ) / Math.max(1 - ZJ, 1e-4)), 1)
                    }
                  }(ZJ.coatRoughness, ZJ.coatRoughnessAnisotropy);
                  JJ = cJ.newBaseRoughness, FJ = cJ.newAnisotropyStrength
                }
                cJ.pbrMetallicRoughness && (cJ.pbrMetallicRoughness.roughnessFactor = JJ), fJ = FJ, xJ = ZJ.geometryCoatTangentAngle + .5 * Math.PI, GJ = void 0
              }
              ZJ._useGltfStyleAnisotropy || (cJ.extensions.KHR_materials_openpbr = {}, (FJ = this._exporter._glTF).extensionsUsed || (FJ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const rJ = {
              coatFactor: ZJ.coatWeight,
              coatTexture: eJ ?? void 0,
              coatRoughnessFactor: ZJ.coatRoughness,
              coatRoughnessTexture: AJ ?? void 0,
              coatNormalTexture: qJ ?? void 0,
              coatColorFactor: ZJ.coatColor.JFJ(),
              coatColorTexture: jJ ?? void 0,
              coatIor: 1.5 !== YJ ? YJ : void 0,
              coatDarkeningFactor: 1 !== hJ ? hJ : void 0,
              coatAnisotropyRotation: xJ,
              coatAnisotropyStrength: fJ,
              coatAnisotropyTexture: GJ
            };
            null === rJ.coatTexture && null === rJ.coatRoughnessTexture && null === rJ.coatRoughnessTexture && null === rJ.coatAnisotropyTexture && null === rJ.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[MU] = rJ
          }
          JJ(cJ)
        }))
      }
    }
    let gU = !1;

    function HU() {
      gU || (gU = !0, HF.RegisterExtension(MU, (JJ => new WU(JJ))))
    }
    HU();
    let PU = (() => {
      var JJ, cJ, ZJ, FJ, UJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, IJ, MJ, bJ, wJ, WJ, gJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, RJ, LJ, aJ, BJ, tJ, oJ, lJ, Jc, cc, Zc, Fc, Uc, ec, Xc, Ac, qc, jc, Yc, hc, Dc, sc, nc, Gc, fc, xc, rc, vc;
      let mc, Qc, Kc, yc, Sc, Ic, Mc, bc, wc, Wc, gc, Hc, Pc, kc, pc, dc, zc, Nc, Oc, Tc, Cc, uc, ic, Rc, Lc, ac, Bc, tc, oc, lc, JZ, cZ, ZZ, FZ, UZ, eZ, XZ, AZ, qZ, jZ, YZ, hZ, DZ, sZ, nZ, GZ, fZ, xZ, rZ, vZ, mZ, QZ, EZ, VZ, KZ, yZ, SZ, IZ, MZ, bZ, wZ, WZ, gZ, HZ, PZ, kZ, pZ, dZ, zZ = Ec,
        NZ = [],
        OZ = [],
        TZ = [],
        CZ = [],
        uZ = [],
        iZ = [],
        RZ = [],
        LZ = [],
        aZ = [],
        BZ = [],
        tZ = [],
        oZ = [],
        lZ = [],
        JF = [],
        cF = [],
        ZF = [],
        FF = [],
        UF = [],
        eF = [],
        XF = [],
        AF = [],
        qF = [],
        jF = [],
        YF = [],
        hF = [],
        DF = [],
        sF = [],
        nF = [],
        GF = [],
        fF = [],
        xF = [],
        rF = [],
        vF = [],
        mF = [],
        QF = [],
        EF = [],
        VF = [],
        KF = [],
        yF = [],
        SF = [],
        IF = [],
        MF = [],
        bF = [],
        wF = [],
        WF = [],
        gF = [],
        HF = [],
        PF = [],
        kF = [],
        pF = [],
        dF = [],
        zF = [],
        NF = [],
        OF = [],
        TF = [],
        CF = [],
        uF = [],
        iF = [],
        RF = [],
        LF = [],
        aF = [],
        BF = [],
        tF = [],
        oF = [],
        lF = [],
        JU = [],
        cU = [],
        ZU = [],
        FU = [],
        UU = [],
        eU = [],
        XU = [],
        AU = [],
        qU = [],
        jU = [],
        YU = [],
        hU = [],
        DU = [],
        sU = [],
        nU = [],
        GU = [],
        fU = [],
        xU = [],
        rU = [],
        vU = [],
        mU = [],
        QU = [],
        EU = [],
        VU = [],
        KU = [],
        yU = [],
        SU = [],
        IU = [],
        MU = [],
        bU = [],
        wU = [],
        WU = [],
        gU = [],
        HU = [],
        PU = [],
        kU = [],
        pU = [],
        dU = [],
        zU = [],
        NU = [],
        OU = [],
        TU = [],
        CU = [],
        uU = [],
        iU = [],
        RU = [],
        LU = [],
        aU = [],
        BU = [],
        tU = [],
        oU = [],
        lU = [],
        Je = [],
        ce = [],
        Ze = [],
        Fe = [],
        Ue = [],
        ee = [],
        Xe = [],
        Ae = [],
        qe = [],
        je = [],
        Ye = [],
        he = [],
        De = [],
        se = [],
        ne = [],
        Ge = [];
      return JJ = class extends zZ {
        get directIntensity() {
          return (0, yJ.b)(this, cJ, "f")
        }
        set directIntensity(JJ) {
          (0, yJ.c)(this, cJ, JJ, "f")
        }
        get emissiveIntensity() {
          return (0, yJ.b)(this, ZJ, "f")
        }
        set emissiveIntensity(JJ) {
          (0, yJ.c)(this, ZJ, JJ, "f")
        }
        get environmentIntensity() {
          return (0, yJ.b)(this, FJ, "f")
        }
        set environmentIntensity(JJ) {
          (0, yJ.c)(this, FJ, JJ, "f")
        }
        get specularIntensity() {
          return (0, yJ.b)(this, UJ, "f")
        }
        set specularIntensity(JJ) {
          (0, yJ.c)(this, UJ, JJ, "f")
        }
        get disableBumpMap() {
          return (0, yJ.b)(this, XJ, "f")
        }
        set disableBumpMap(JJ) {
          (0, yJ.c)(this, XJ, JJ, "f")
        }
        get albedoTexture() {
          return (0, yJ.b)(this, AJ, "f")
        }
        set albedoTexture(JJ) {
          (0, yJ.c)(this, AJ, JJ, "f")
        }
        get baseWeightTexture() {
          return (0, yJ.b)(this, qJ, "f")
        }
        set baseWeightTexture(JJ) {
          (0, yJ.c)(this, qJ, JJ, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, yJ.b)(this, jJ, "f")
        }
        set baseDiffuseRoughnessTexture(JJ) {
          (0, yJ.c)(this, jJ, JJ, "f")
        }
        get ambientTexture() {
          return (0, yJ.b)(this, YJ, "f")
        }
        set ambientTexture(JJ) {
          (0, yJ.c)(this, YJ, JJ, "f")
        }
        get ambientTextureStrength() {
          return (0, yJ.b)(this, hJ, "f")
        }
        set ambientTextureStrength(JJ) {
          (0, yJ.c)(this, hJ, JJ, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, yJ.b)(this, DJ, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(JJ) {
          (0, yJ.c)(this, DJ, JJ, "f")
        }
        get opacityTexture() {
          return (0, yJ.b)(this, sJ, "f")
        }
        set opacityTexture(JJ) {
          (0, yJ.c)(this, sJ, JJ, "f")
        }
        get reflectionTexture() {
          return (0, yJ.b)(this, nJ, "f")
        }
        set reflectionTexture(JJ) {
          (0, yJ.c)(this, nJ, JJ, "f")
        }
        get emissiveTexture() {
          return (0, yJ.b)(this, GJ, "f")
        }
        set emissiveTexture(JJ) {
          (0, yJ.c)(this, GJ, JJ, "f")
        }
        get reflectivityTexture() {
          return (0, yJ.b)(this, fJ, "f")
        }
        set reflectivityTexture(JJ) {
          (0, yJ.c)(this, fJ, JJ, "f")
        }
        get metallicTexture() {
          return (0, yJ.b)(this, xJ, "f")
        }
        set metallicTexture(JJ) {
          (0, yJ.c)(this, xJ, JJ, "f")
        }
        get metallic() {
          return (0, yJ.b)(this, rJ, "f")
        }
        set metallic(JJ) {
          (0, yJ.c)(this, rJ, JJ, "f")
        }
        get roughness() {
          return (0, yJ.b)(this, vJ, "f")
        }
        set roughness(JJ) {
          (0, yJ.c)(this, vJ, JJ, "f")
        }
        get metallicF0Factor() {
          return (0, yJ.b)(this, mJ, "f")
        }
        set metallicF0Factor(JJ) {
          (0, yJ.c)(this, mJ, JJ, "f")
        }
        get metallicReflectanceColor() {
          return (0, yJ.b)(this, QJ, "f")
        }
        set metallicReflectanceColor(JJ) {
          (0, yJ.c)(this, QJ, JJ, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, yJ.b)(this, EJ, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(JJ) {
          (0, yJ.c)(this, EJ, JJ, "f")
        }
        get metallicReflectanceTexture() {
          return (0, yJ.b)(this, VJ, "f")
        }
        set metallicReflectanceTexture(JJ) {
          (0, yJ.c)(this, VJ, JJ, "f")
        }
        get reflectanceTexture() {
          return (0, yJ.b)(this, KJ, "f")
        }
        set reflectanceTexture(JJ) {
          (0, yJ.c)(this, KJ, JJ, "f")
        }
        get microSurfaceTexture() {
          return (0, yJ.b)(this, IJ, "f")
        }
        set microSurfaceTexture(JJ) {
          (0, yJ.c)(this, IJ, JJ, "f")
        }
        get bumpTexture() {
          return (0, yJ.b)(this, MJ, "f")
        }
        set bumpTexture(JJ) {
          (0, yJ.c)(this, MJ, JJ, "f")
        }
        get lightmapTexture() {
          return (0, yJ.b)(this, bJ, "f")
        }
        set lightmapTexture(JJ) {
          (0, yJ.c)(this, bJ, JJ, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(JJ) {
          this.subSurface.refractionTexture = JJ, JJ ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, yJ.b)(this, wJ, "f")
        }
        set ambientColor(JJ) {
          (0, yJ.c)(this, wJ, JJ, "f")
        }
        get albedoColor() {
          return (0, yJ.b)(this, WJ, "f")
        }
        set albedoColor(JJ) {
          (0, yJ.c)(this, WJ, JJ, "f")
        }
        get baseWeight() {
          return (0, yJ.b)(this, gJ, "f")
        }
        set baseWeight(JJ) {
          (0, yJ.c)(this, gJ, JJ, "f")
        }
        get baseDiffuseRoughness() {
          return (0, yJ.b)(this, PJ, "f")
        }
        set baseDiffuseRoughness(JJ) {
          (0, yJ.c)(this, PJ, JJ, "f")
        }
        get reflectivityColor() {
          return (0, yJ.b)(this, kJ, "f")
        }
        set reflectivityColor(JJ) {
          (0, yJ.c)(this, kJ, JJ, "f")
        }
        get reflectionColor() {
          return (0, yJ.b)(this, pJ, "f")
        }
        set reflectionColor(JJ) {
          (0, yJ.c)(this, pJ, JJ, "f")
        }
        get emissiveColor() {
          return (0, yJ.b)(this, dJ, "f")
        }
        set emissiveColor(JJ) {
          (0, yJ.c)(this, dJ, JJ, "f")
        }
        get microSurface() {
          return (0, yJ.b)(this, zJ, "f")
        }
        set microSurface(JJ) {
          (0, yJ.c)(this, zJ, JJ, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(JJ) {
          this.subSurface.indexOfRefraction = JJ
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(JJ) {
          this.subSurface.invertRefractionY = JJ
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(JJ) {
          this.subSurface.linkRefractionWithTransparency = JJ, JJ && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, yJ.b)(this, NJ, "f")
        }
        set useLightmapAsShadowmap(JJ) {
          (0, yJ.c)(this, NJ, JJ, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, yJ.b)(this, OJ, "f")
        }
        set useAlphaFromAlbedoTexture(JJ) {
          (0, yJ.c)(this, OJ, JJ, "f")
        }
        get forceAlphaTest() {
          return (0, yJ.b)(this, TJ, "f")
        }
        set forceAlphaTest(JJ) {
          (0, yJ.c)(this, TJ, JJ, "f")
        }
        get alphaCutOff() {
          return (0, yJ.b)(this, CJ, "f")
        }
        set alphaCutOff(JJ) {
          (0, yJ.c)(this, CJ, JJ, "f")
        }
        get useSpecularOverAlpha() {
          return (0, yJ.b)(this, uJ, "f")
        }
        set useSpecularOverAlpha(JJ) {
          (0, yJ.c)(this, uJ, JJ, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, yJ.b)(this, RJ, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(JJ) {
          (0, yJ.c)(this, RJ, JJ, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, yJ.b)(this, LJ, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(JJ) {
          (0, yJ.c)(this, LJ, JJ, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, yJ.b)(this, aJ, "f")
        }
        set useRoughnessFromMetallicTextureGreen(JJ) {
          (0, yJ.c)(this, aJ, JJ, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, yJ.b)(this, BJ, "f")
        }
        set useMetallnessFromMetallicTextureBlue(JJ) {
          (0, yJ.c)(this, BJ, JJ, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, yJ.b)(this, tJ, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(JJ) {
          (0, yJ.c)(this, tJ, JJ, "f")
        }
        get useAmbientInGrayScale() {
          return (0, yJ.b)(this, oJ, "f")
        }
        set useAmbientInGrayScale(JJ) {
          (0, yJ.c)(this, oJ, JJ, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, yJ.b)(this, lJ, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(JJ) {
          (0, yJ.c)(this, lJ, JJ, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Ec.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(JJ) {
          JJ !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = JJ ? Ec.LIGHTFALLOFF_PHYSICAL : Ec.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Ec.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(JJ) {
          JJ !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = JJ ? Ec.LIGHTFALLOFF_GLTF : Ec.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, yJ.b)(this, Jc, "f")
        }
        set useRadianceOverAlpha(JJ) {
          (0, yJ.c)(this, Jc, JJ, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, yJ.b)(this, cc, "f")
        }
        set useObjectSpaceNormalMap(JJ) {
          (0, yJ.c)(this, cc, JJ, "f")
        }
        get useParallax() {
          return (0, yJ.b)(this, Zc, "f")
        }
        set useParallax(JJ) {
          (0, yJ.c)(this, Zc, JJ, "f")
        }
        get useParallaxOcclusion() {
          return (0, yJ.b)(this, Fc, "f")
        }
        set useParallaxOcclusion(JJ) {
          (0, yJ.c)(this, Fc, JJ, "f")
        }
        get parallaxScaleBias() {
          return (0, yJ.b)(this, Uc, "f")
        }
        set parallaxScaleBias(JJ) {
          (0, yJ.c)(this, Uc, JJ, "f")
        }
        get disableLighting() {
          return (0, yJ.b)(this, ec, "f")
        }
        set disableLighting(JJ) {
          (0, yJ.c)(this, ec, JJ, "f")
        }
        get forceIrradianceInFragment() {
          return (0, yJ.b)(this, Xc, "f")
        }
        set forceIrradianceInFragment(JJ) {
          (0, yJ.c)(this, Xc, JJ, "f")
        }
        get maxSimultaneousLights() {
          return (0, yJ.b)(this, Ac, "f")
        }
        set maxSimultaneousLights(JJ) {
          (0, yJ.c)(this, Ac, JJ, "f")
        }
        get invertNormalMapX() {
          return (0, yJ.b)(this, qc, "f")
        }
        set invertNormalMapX(JJ) {
          (0, yJ.c)(this, qc, JJ, "f")
        }
        get invertNormalMapY() {
          return (0, yJ.b)(this, jc, "f")
        }
        set invertNormalMapY(JJ) {
          (0, yJ.c)(this, jc, JJ, "f")
        }
        get twoSidedLighting() {
          return (0, yJ.b)(this, Yc, "f")
        }
        set twoSidedLighting(JJ) {
          (0, yJ.c)(this, Yc, JJ, "f")
        }
        get useAlphaFresnel() {
          return (0, yJ.b)(this, hc, "f")
        }
        set useAlphaFresnel(JJ) {
          (0, yJ.c)(this, hc, JJ, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, yJ.b)(this, Dc, "f")
        }
        set useLinearAlphaFresnel(JJ) {
          (0, yJ.c)(this, Dc, JJ, "f")
        }
        get environmentBRDFTexture() {
          return (0, yJ.b)(this, sc, "f")
        }
        set environmentBRDFTexture(JJ) {
          (0, yJ.c)(this, sc, JJ, "f")
        }
        get forceNormalForward() {
          return (0, yJ.b)(this, nc, "f")
        }
        set forceNormalForward(JJ) {
          (0, yJ.c)(this, nc, JJ, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, yJ.b)(this, Gc, "f")
        }
        set enableSpecularAntiAliasing(JJ) {
          (0, yJ.c)(this, Gc, JJ, "f")
        }
        get useHorizonOcclusion() {
          return (0, yJ.b)(this, fc, "f")
        }
        set useHorizonOcclusion(JJ) {
          (0, yJ.c)(this, fc, JJ, "f")
        }
        get useRadianceOcclusion() {
          return (0, yJ.b)(this, xc, "f")
        }
        set useRadianceOcclusion(JJ) {
          (0, yJ.c)(this, xc, JJ, "f")
        }
        get unlit() {
          return (0, yJ.b)(this, rc, "f")
        }
        set unlit(JJ) {
          (0, yJ.c)(this, rc, JJ, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, yJ.b)(this, vc, "f")
        }
        set applyDecalMapAfterDetailMap(JJ) {
          (0, yJ.c)(this, vc, JJ, "f")
        }
        constructor(eJ, SJ) {
          super(eJ, SJ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), cJ.set(this, ((0, yJ.e)(this, NZ), (0, yJ.e)(this, OZ, 1))), ZJ.set(this, ((0, yJ.e)(this, TZ), (0, yJ.e)(this, CZ, 1))), FJ.set(this, ((0, yJ.e)(this, uZ), (0, yJ.e)(this, iZ, 1))), UJ.set(this, ((0, yJ.e)(this, RZ), (0, yJ.e)(this, LZ, 1))), XJ.set(this, ((0, yJ.e)(this, aZ), (0, yJ.e)(this, BZ, !1))), AJ.set(this, ((0, yJ.e)(this, tZ), (0, yJ.e)(this, oZ, void 0))), qJ.set(this, ((0, yJ.e)(this, lZ), (0, yJ.e)(this, JF, void 0))), jJ.set(this, ((0, yJ.e)(this, cF), (0, yJ.e)(this, ZF, void 0))), YJ.set(this, ((0, yJ.e)(this, FF), (0, yJ.e)(this, UF, void 0))), hJ.set(this, ((0, yJ.e)(this, eF), (0, yJ.e)(this, XF, 1))), DJ.set(this, ((0, yJ.e)(this, AF), (0, yJ.e)(this, qF, JJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), sJ.set(this, ((0, yJ.e)(this, jF), (0, yJ.e)(this, YF, void 0))), nJ.set(this, ((0, yJ.e)(this, hF), (0, yJ.e)(this, DF, void 0))), GJ.set(this, ((0, yJ.e)(this, sF), (0, yJ.e)(this, nF, void 0))), fJ.set(this, ((0, yJ.e)(this, GF), (0, yJ.e)(this, fF, void 0))), xJ.set(this, ((0, yJ.e)(this, xF), (0, yJ.e)(this, rF, void 0))), rJ.set(this, ((0, yJ.e)(this, vF), (0, yJ.e)(this, mF, void 0))), vJ.set(this, ((0, yJ.e)(this, QF), (0, yJ.e)(this, EF, void 0))), mJ.set(this, ((0, yJ.e)(this, VF), (0, yJ.e)(this, KF, 1))), QJ.set(this, ((0, yJ.e)(this, yF), (0, yJ.e)(this, SF, iJ.e.White()))), EJ.set(this, ((0, yJ.e)(this, IF), (0, yJ.e)(this, MF, !1))), VJ.set(this, ((0, yJ.e)(this, bF), (0, yJ.e)(this, wF, void 0))), KJ.set(this, ((0, yJ.e)(this, WF), (0, yJ.e)(this, gF, void 0))), IJ.set(this, ((0, yJ.e)(this, HF), (0, yJ.e)(this, PF, void 0))), MJ.set(this, ((0, yJ.e)(this, kF), (0, yJ.e)(this, pF, void 0))), bJ.set(this, ((0, yJ.e)(this, dF), (0, yJ.e)(this, zF, void 0))), wJ.set(this, ((0, yJ.e)(this, NF), (0, yJ.e)(this, OF, new iJ.e(0, 0, 0)))), WJ.set(this, ((0, yJ.e)(this, TF), (0, yJ.e)(this, CF, new iJ.e(1, 1, 1)))), gJ.set(this, ((0, yJ.e)(this, uF), (0, yJ.e)(this, iF, 1))), PJ.set(this, ((0, yJ.e)(this, RF), (0, yJ.e)(this, LF, void 0))), kJ.set(this, ((0, yJ.e)(this, aF), (0, yJ.e)(this, BF, new iJ.e(1, 1, 1)))), pJ.set(this, ((0, yJ.e)(this, tF), (0, yJ.e)(this, oF, new iJ.e(1, 1, 1)))), dJ.set(this, ((0, yJ.e)(this, lF), (0, yJ.e)(this, JU, new iJ.e(0, 0, 0)))), zJ.set(this, ((0, yJ.e)(this, cU), (0, yJ.e)(this, ZU, 1))), NJ.set(this, ((0, yJ.e)(this, FU), (0, yJ.e)(this, UU, !1))), OJ.set(this, ((0, yJ.e)(this, eU), (0, yJ.e)(this, XU, !1))), TJ.set(this, ((0, yJ.e)(this, AU), (0, yJ.e)(this, qU, !1))), CJ.set(this, ((0, yJ.e)(this, jU), (0, yJ.e)(this, YU, .4))), uJ.set(this, ((0, yJ.e)(this, hU), (0, yJ.e)(this, DU, !0))), RJ.set(this, ((0, yJ.e)(this, sU), (0, yJ.e)(this, nU, !1))), LJ.set(this, ((0, yJ.e)(this, GU), (0, yJ.e)(this, fU, !0))), aJ.set(this, ((0, yJ.e)(this, xU), (0, yJ.e)(this, rU, !1))), BJ.set(this, ((0, yJ.e)(this, vU), (0, yJ.e)(this, mU, !1))), tJ.set(this, ((0, yJ.e)(this, QU), (0, yJ.e)(this, EU, !1))), oJ.set(this, ((0, yJ.e)(this, VU), (0, yJ.e)(this, KU, !1))), lJ.set(this, ((0, yJ.e)(this, yU), (0, yJ.e)(this, SU, !1))), Jc.set(this, ((0, yJ.e)(this, IU), (0, yJ.e)(this, MU, !0))), cc.set(this, ((0, yJ.e)(this, bU), (0, yJ.e)(this, wU, !1))), Zc.set(this, ((0, yJ.e)(this, WU), (0, yJ.e)(this, gU, !1))), Fc.set(this, ((0, yJ.e)(this, HU), (0, yJ.e)(this, PU, !1))), Uc.set(this, ((0, yJ.e)(this, kU), (0, yJ.e)(this, pU, .05))), ec.set(this, ((0, yJ.e)(this, dU), (0, yJ.e)(this, zU, !1))), Xc.set(this, ((0, yJ.e)(this, NU), (0, yJ.e)(this, OU, !1))), Ac.set(this, ((0, yJ.e)(this, TU), (0, yJ.e)(this, CU, 4))), qc.set(this, ((0, yJ.e)(this, uU), (0, yJ.e)(this, iU, !1))), jc.set(this, ((0, yJ.e)(this, RU), (0, yJ.e)(this, LU, !1))), Yc.set(this, ((0, yJ.e)(this, aU), (0, yJ.e)(this, BU, !1))), hc.set(this, ((0, yJ.e)(this, tU), (0, yJ.e)(this, oU, !1))), Dc.set(this, ((0, yJ.e)(this, lU), (0, yJ.e)(this, Je, !1))), sc.set(this, ((0, yJ.e)(this, ce), (0, yJ.e)(this, Ze, null))), nc.set(this, ((0, yJ.e)(this, Fe), (0, yJ.e)(this, Ue, !1))), Gc.set(this, ((0, yJ.e)(this, ee), (0, yJ.e)(this, Xe, !1))), fc.set(this, ((0, yJ.e)(this, Ae), (0, yJ.e)(this, qe, !0))), xc.set(this, ((0, yJ.e)(this, je), (0, yJ.e)(this, Ye, !0))), rc.set(this, ((0, yJ.e)(this, he), (0, yJ.e)(this, De, !1))), vc.set(this, ((0, yJ.e)(this, se), (0, yJ.e)(this, ne, !1))), (0, yJ.e)(this, Ge), this._environmentBRDFTexture = HJ(this.Qy())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(cJ) {
          let ZJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const UJ = Vc.c.Clone((() => new JJ(cJ, this.Qy())), this, {
            cloneTexturesOnlyOnce: ZJ
          });
          return UJ.id = cJ, UJ.name = cJ, this.stencil.copyTo(UJ.stencil), this._clonePlugins(UJ, FJ), UJ
        }
        serialize() {
          const JJ = super.serialize();
          return JJ.customType = "BABYLON.PBRMaterial", JJ
        }
        static Parse(cJ, ZJ, FJ) {
          const UJ = Vc.c.Parse((() => new JJ(cJ.name, ZJ)), cJ, ZJ, FJ);
          return cJ.stencil && UJ.stencil.parse(cJ.stencil, ZJ, FJ), eJ.c._ParsePlugins(cJ, UJ, ZJ, FJ), cJ.clearCoat && UJ.clearCoat.parse(cJ.clearCoat, ZJ, FJ), cJ.anisotropy && UJ.anisotropy.parse(cJ.anisotropy, ZJ, FJ), cJ.brdf && UJ.brdf.parse(cJ.brdf, ZJ, FJ), cJ.sheen && UJ.sheen.parse(cJ.sheen, ZJ, FJ), cJ.subSurface && UJ.subSurface.parse(cJ.subSurface, ZJ, FJ), cJ.iridescence && UJ.iridescence.parse(cJ.iridescence, ZJ, FJ), UJ
        }
      }, cJ = new WeakMap, ZJ = new WeakMap, FJ = new WeakMap, UJ = new WeakMap, XJ = new WeakMap, AJ = new WeakMap, qJ = new WeakMap, jJ = new WeakMap, YJ = new WeakMap, hJ = new WeakMap, DJ = new WeakMap, sJ = new WeakMap, nJ = new WeakMap, GJ = new WeakMap, fJ = new WeakMap, xJ = new WeakMap, rJ = new WeakMap, vJ = new WeakMap, mJ = new WeakMap, QJ = new WeakMap, EJ = new WeakMap, VJ = new WeakMap, KJ = new WeakMap, IJ = new WeakMap, MJ = new WeakMap, bJ = new WeakMap, wJ = new WeakMap, WJ = new WeakMap, gJ = new WeakMap, PJ = new WeakMap, kJ = new WeakMap, pJ = new WeakMap, dJ = new WeakMap, zJ = new WeakMap, NJ = new WeakMap, OJ = new WeakMap, TJ = new WeakMap, CJ = new WeakMap, uJ = new WeakMap, RJ = new WeakMap, LJ = new WeakMap, aJ = new WeakMap, BJ = new WeakMap, tJ = new WeakMap, oJ = new WeakMap, lJ = new WeakMap, Jc = new WeakMap, cc = new WeakMap, Zc = new WeakMap, Fc = new WeakMap, Uc = new WeakMap, ec = new WeakMap, Xc = new WeakMap, Ac = new WeakMap, qc = new WeakMap, jc = new WeakMap, Yc = new WeakMap, hc = new WeakMap, Dc = new WeakMap, sc = new WeakMap, nc = new WeakMap, Gc = new WeakMap, fc = new WeakMap, xc = new WeakMap, rc = new WeakMap, vc = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(zZ[Symbol.metadata] ?? null) : void 0;
        mc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], yc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], bc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], wc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, SJ.m)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, SJ.A)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty", null)], Bc = [(0, SJ.m)("ambient"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, SJ.m)("albedo"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, SJ.F)("baseWeight"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, SJ.F)("baseDiffuseRoughness"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], JZ = [(0, SJ.m)("reflectivity"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, SJ.m)("reflection"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], ZZ = [(0, SJ.m)("emissive"), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], FZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], UZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], eZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], XZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], AZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], qZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], YZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], DZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], nZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], GZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], fZ = [(0, SJ.F)()], xZ = [(0, SJ.F)()], rZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsLightsDirty")], KZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], yZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsLightsDirty")], SZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], wZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], kZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], dZ = [(0, SJ.F)(), (0, SJ.f)("_markAllSubMeshesAsMiscDirty")], (0, yJ.d)(JJ, null, mc, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "directIntensity" in JJ,
            get: JJ => JJ.directIntensity,
            set: (JJ, cJ) => {
              JJ.directIntensity = cJ
            }
          },
          metadata: cJ
        }, OZ, TZ), (0, yJ.d)(JJ, null, Qc, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "emissiveIntensity" in JJ,
            get: JJ => JJ.emissiveIntensity,
            set: (JJ, cJ) => {
              JJ.emissiveIntensity = cJ
            }
          },
          metadata: cJ
        }, CZ, uZ), (0, yJ.d)(JJ, null, Kc, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "environmentIntensity" in JJ,
            get: JJ => JJ.environmentIntensity,
            set: (JJ, cJ) => {
              JJ.environmentIntensity = cJ
            }
          },
          metadata: cJ
        }, iZ, RZ), (0, yJ.d)(JJ, null, yc, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "specularIntensity" in JJ,
            get: JJ => JJ.specularIntensity,
            set: (JJ, cJ) => {
              JJ.specularIntensity = cJ
            }
          },
          metadata: cJ
        }, LZ, aZ), (0, yJ.d)(JJ, null, Sc, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: JJ => "disableBumpMap" in JJ,
            get: JJ => JJ.disableBumpMap,
            set: (JJ, cJ) => {
              JJ.disableBumpMap = cJ
            }
          },
          metadata: cJ
        }, BZ, tZ), (0, yJ.d)(JJ, null, Ic, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "albedoTexture" in JJ,
            get: JJ => JJ.albedoTexture,
            set: (JJ, cJ) => {
              JJ.albedoTexture = cJ
            }
          },
          metadata: cJ
        }, oZ, lZ), (0, yJ.d)(JJ, null, Mc, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "baseWeightTexture" in JJ,
            get: JJ => JJ.baseWeightTexture,
            set: (JJ, cJ) => {
              JJ.baseWeightTexture = cJ
            }
          },
          metadata: cJ
        }, JF, cF), (0, yJ.d)(JJ, null, bc, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "baseDiffuseRoughnessTexture" in JJ,
            get: JJ => JJ.baseDiffuseRoughnessTexture,
            set: (JJ, cJ) => {
              JJ.baseDiffuseRoughnessTexture = cJ
            }
          },
          metadata: cJ
        }, ZF, FF), (0, yJ.d)(JJ, null, wc, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ambientTexture" in JJ,
            get: JJ => JJ.ambientTexture,
            set: (JJ, cJ) => {
              JJ.ambientTexture = cJ
            }
          },
          metadata: cJ
        }, UF, eF), (0, yJ.d)(JJ, null, Wc, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ambientTextureStrength" in JJ,
            get: JJ => JJ.ambientTextureStrength,
            set: (JJ, cJ) => {
              JJ.ambientTextureStrength = cJ
            }
          },
          metadata: cJ
        }, XF, AF), (0, yJ.d)(JJ, null, gc, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ambientTextureImpactOnAnalyticalLights" in JJ,
            get: JJ => JJ.ambientTextureImpactOnAnalyticalLights,
            set: (JJ, cJ) => {
              JJ.ambientTextureImpactOnAnalyticalLights = cJ
            }
          },
          metadata: cJ
        }, qF, jF), (0, yJ.d)(JJ, null, Hc, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "opacityTexture" in JJ,
            get: JJ => JJ.opacityTexture,
            set: (JJ, cJ) => {
              JJ.opacityTexture = cJ
            }
          },
          metadata: cJ
        }, YF, hF), (0, yJ.d)(JJ, null, Pc, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reflectionTexture" in JJ,
            get: JJ => JJ.reflectionTexture,
            set: (JJ, cJ) => {
              JJ.reflectionTexture = cJ
            }
          },
          metadata: cJ
        }, DF, sF), (0, yJ.d)(JJ, null, kc, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "emissiveTexture" in JJ,
            get: JJ => JJ.emissiveTexture,
            set: (JJ, cJ) => {
              JJ.emissiveTexture = cJ
            }
          },
          metadata: cJ
        }, nF, GF), (0, yJ.d)(JJ, null, pc, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reflectivityTexture" in JJ,
            get: JJ => JJ.reflectivityTexture,
            set: (JJ, cJ) => {
              JJ.reflectivityTexture = cJ
            }
          },
          metadata: cJ
        }, fF, xF), (0, yJ.d)(JJ, null, dc, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metallicTexture" in JJ,
            get: JJ => JJ.metallicTexture,
            set: (JJ, cJ) => {
              JJ.metallicTexture = cJ
            }
          },
          metadata: cJ
        }, rF, vF), (0, yJ.d)(JJ, null, zc, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metallic" in JJ,
            get: JJ => JJ.metallic,
            set: (JJ, cJ) => {
              JJ.metallic = cJ
            }
          },
          metadata: cJ
        }, mF, QF), (0, yJ.d)(JJ, null, Nc, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "roughness" in JJ,
            get: JJ => JJ.roughness,
            set: (JJ, cJ) => {
              JJ.roughness = cJ
            }
          },
          metadata: cJ
        }, EF, VF), (0, yJ.d)(JJ, null, Oc, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metallicF0Factor" in JJ,
            get: JJ => JJ.metallicF0Factor,
            set: (JJ, cJ) => {
              JJ.metallicF0Factor = cJ
            }
          },
          metadata: cJ
        }, KF, yF), (0, yJ.d)(JJ, null, Tc, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metallicReflectanceColor" in JJ,
            get: JJ => JJ.metallicReflectanceColor,
            set: (JJ, cJ) => {
              JJ.metallicReflectanceColor = cJ
            }
          },
          metadata: cJ
        }, SF, IF), (0, yJ.d)(JJ, null, Cc, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useOnlyMetallicFromMetallicReflectanceTexture" in JJ,
            get: JJ => JJ.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (JJ, cJ) => {
              JJ.useOnlyMetallicFromMetallicReflectanceTexture = cJ
            }
          },
          metadata: cJ
        }, MF, bF), (0, yJ.d)(JJ, null, uc, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "metallicReflectanceTexture" in JJ,
            get: JJ => JJ.metallicReflectanceTexture,
            set: (JJ, cJ) => {
              JJ.metallicReflectanceTexture = cJ
            }
          },
          metadata: cJ
        }, wF, WF), (0, yJ.d)(JJ, null, ic, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reflectanceTexture" in JJ,
            get: JJ => JJ.reflectanceTexture,
            set: (JJ, cJ) => {
              JJ.reflectanceTexture = cJ
            }
          },
          metadata: cJ
        }, gF, HF), (0, yJ.d)(JJ, null, Rc, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "microSurfaceTexture" in JJ,
            get: JJ => JJ.microSurfaceTexture,
            set: (JJ, cJ) => {
              JJ.microSurfaceTexture = cJ
            }
          },
          metadata: cJ
        }, PF, kF), (0, yJ.d)(JJ, null, Lc, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "bumpTexture" in JJ,
            get: JJ => JJ.bumpTexture,
            set: (JJ, cJ) => {
              JJ.bumpTexture = cJ
            }
          },
          metadata: cJ
        }, pF, dF), (0, yJ.d)(JJ, null, ac, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "lightmapTexture" in JJ,
            get: JJ => JJ.lightmapTexture,
            set: (JJ, cJ) => {
              JJ.lightmapTexture = cJ
            }
          },
          metadata: cJ
        }, zF, NF), (0, yJ.d)(JJ, null, Bc, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ambientColor" in JJ,
            get: JJ => JJ.ambientColor,
            set: (JJ, cJ) => {
              JJ.ambientColor = cJ
            }
          },
          metadata: cJ
        }, OF, TF), (0, yJ.d)(JJ, null, tc, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "albedoColor" in JJ,
            get: JJ => JJ.albedoColor,
            set: (JJ, cJ) => {
              JJ.albedoColor = cJ
            }
          },
          metadata: cJ
        }, CF, uF), (0, yJ.d)(JJ, null, oc, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: JJ => "baseWeight" in JJ,
            get: JJ => JJ.baseWeight,
            set: (JJ, cJ) => {
              JJ.baseWeight = cJ
            }
          },
          metadata: cJ
        }, iF, RF), (0, yJ.d)(JJ, null, lc, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "baseDiffuseRoughness" in JJ,
            get: JJ => JJ.baseDiffuseRoughness,
            set: (JJ, cJ) => {
              JJ.baseDiffuseRoughness = cJ
            }
          },
          metadata: cJ
        }, LF, aF), (0, yJ.d)(JJ, null, JZ, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reflectivityColor" in JJ,
            get: JJ => JJ.reflectivityColor,
            set: (JJ, cJ) => {
              JJ.reflectivityColor = cJ
            }
          },
          metadata: cJ
        }, BF, tF), (0, yJ.d)(JJ, null, cZ, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reflectionColor" in JJ,
            get: JJ => JJ.reflectionColor,
            set: (JJ, cJ) => {
              JJ.reflectionColor = cJ
            }
          },
          metadata: cJ
        }, oF, lF), (0, yJ.d)(JJ, null, ZZ, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: JJ => "emissiveColor" in JJ,
            get: JJ => JJ.emissiveColor,
            set: (JJ, cJ) => {
              JJ.emissiveColor = cJ
            }
          },
          metadata: cJ
        }, JU, cU), (0, yJ.d)(JJ, null, FZ, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: JJ => "microSurface" in JJ,
            get: JJ => JJ.microSurface,
            set: (JJ, cJ) => {
              JJ.microSurface = cJ
            }
          },
          metadata: cJ
        }, ZU, FU), (0, yJ.d)(JJ, null, UZ, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useLightmapAsShadowmap" in JJ,
            get: JJ => JJ.useLightmapAsShadowmap,
            set: (JJ, cJ) => {
              JJ.useLightmapAsShadowmap = cJ
            }
          },
          metadata: cJ
        }, UU, eU), (0, yJ.d)(JJ, null, eZ, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAlphaFromAlbedoTexture" in JJ,
            get: JJ => JJ.useAlphaFromAlbedoTexture,
            set: (JJ, cJ) => {
              JJ.useAlphaFromAlbedoTexture = cJ
            }
          },
          metadata: cJ
        }, XU, AU), (0, yJ.d)(JJ, null, XZ, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: JJ => "forceAlphaTest" in JJ,
            get: JJ => JJ.forceAlphaTest,
            set: (JJ, cJ) => {
              JJ.forceAlphaTest = cJ
            }
          },
          metadata: cJ
        }, qU, jU), (0, yJ.d)(JJ, null, AZ, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: JJ => "alphaCutOff" in JJ,
            get: JJ => JJ.alphaCutOff,
            set: (JJ, cJ) => {
              JJ.alphaCutOff = cJ
            }
          },
          metadata: cJ
        }, YU, hU), (0, yJ.d)(JJ, null, qZ, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useSpecularOverAlpha" in JJ,
            get: JJ => JJ.useSpecularOverAlpha,
            set: (JJ, cJ) => {
              JJ.useSpecularOverAlpha = cJ
            }
          },
          metadata: cJ
        }, DU, sU), (0, yJ.d)(JJ, null, jZ, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useMicroSurfaceFromReflectivityMapAlpha" in JJ,
            get: JJ => JJ.useMicroSurfaceFromReflectivityMapAlpha,
            set: (JJ, cJ) => {
              JJ.useMicroSurfaceFromReflectivityMapAlpha = cJ
            }
          },
          metadata: cJ
        }, nU, GU), (0, yJ.d)(JJ, null, YZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRoughnessFromMetallicTextureAlpha" in JJ,
            get: JJ => JJ.useRoughnessFromMetallicTextureAlpha,
            set: (JJ, cJ) => {
              JJ.useRoughnessFromMetallicTextureAlpha = cJ
            }
          },
          metadata: cJ
        }, fU, xU), (0, yJ.d)(JJ, null, hZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRoughnessFromMetallicTextureGreen" in JJ,
            get: JJ => JJ.useRoughnessFromMetallicTextureGreen,
            set: (JJ, cJ) => {
              JJ.useRoughnessFromMetallicTextureGreen = cJ
            }
          },
          metadata: cJ
        }, rU, vU), (0, yJ.d)(JJ, null, DZ, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useMetallnessFromMetallicTextureBlue" in JJ,
            get: JJ => JJ.useMetallnessFromMetallicTextureBlue,
            set: (JJ, cJ) => {
              JJ.useMetallnessFromMetallicTextureBlue = cJ
            }
          },
          metadata: cJ
        }, mU, QU), (0, yJ.d)(JJ, null, sZ, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAmbientOcclusionFromMetallicTextureRed" in JJ,
            get: JJ => JJ.useAmbientOcclusionFromMetallicTextureRed,
            set: (JJ, cJ) => {
              JJ.useAmbientOcclusionFromMetallicTextureRed = cJ
            }
          },
          metadata: cJ
        }, EU, VU), (0, yJ.d)(JJ, null, nZ, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAmbientInGrayScale" in JJ,
            get: JJ => JJ.useAmbientInGrayScale,
            set: (JJ, cJ) => {
              JJ.useAmbientInGrayScale = cJ
            }
          },
          metadata: cJ
        }, KU, yU), (0, yJ.d)(JJ, null, GZ, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAutoMicroSurfaceFromReflectivityMap" in JJ,
            get: JJ => JJ.useAutoMicroSurfaceFromReflectivityMap,
            set: (JJ, cJ) => {
              JJ.useAutoMicroSurfaceFromReflectivityMap = cJ
            }
          },
          metadata: cJ
        }, SU, IU), (0, yJ.d)(JJ, null, fZ, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: JJ => "usePhysicalLightFalloff" in JJ,
            get: JJ => JJ.usePhysicalLightFalloff
          },
          metadata: cJ
        }, null, NZ), (0, yJ.d)(JJ, null, xZ, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useGLTFLightFalloff" in JJ,
            get: JJ => JJ.useGLTFLightFalloff
          },
          metadata: cJ
        }, null, NZ), (0, yJ.d)(JJ, null, rZ, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRadianceOverAlpha" in JJ,
            get: JJ => JJ.useRadianceOverAlpha,
            set: (JJ, cJ) => {
              JJ.useRadianceOverAlpha = cJ
            }
          },
          metadata: cJ
        }, MU, bU), (0, yJ.d)(JJ, null, vZ, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useObjectSpaceNormalMap" in JJ,
            get: JJ => JJ.useObjectSpaceNormalMap,
            set: (JJ, cJ) => {
              JJ.useObjectSpaceNormalMap = cJ
            }
          },
          metadata: cJ
        }, wU, WU), (0, yJ.d)(JJ, null, mZ, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useParallax" in JJ,
            get: JJ => JJ.useParallax,
            set: (JJ, cJ) => {
              JJ.useParallax = cJ
            }
          },
          metadata: cJ
        }, gU, HU), (0, yJ.d)(JJ, null, QZ, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useParallaxOcclusion" in JJ,
            get: JJ => JJ.useParallaxOcclusion,
            set: (JJ, cJ) => {
              JJ.useParallaxOcclusion = cJ
            }
          },
          metadata: cJ
        }, PU, kU), (0, yJ.d)(JJ, null, EZ, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: JJ => "parallaxScaleBias" in JJ,
            get: JJ => JJ.parallaxScaleBias,
            set: (JJ, cJ) => {
              JJ.parallaxScaleBias = cJ
            }
          },
          metadata: cJ
        }, pU, dU), (0, yJ.d)(JJ, null, VZ, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: JJ => "disableLighting" in JJ,
            get: JJ => JJ.disableLighting,
            set: (JJ, cJ) => {
              JJ.disableLighting = cJ
            }
          },
          metadata: cJ
        }, zU, NU), (0, yJ.d)(JJ, null, KZ, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: JJ => "forceIrradianceInFragment" in JJ,
            get: JJ => JJ.forceIrradianceInFragment,
            set: (JJ, cJ) => {
              JJ.forceIrradianceInFragment = cJ
            }
          },
          metadata: cJ
        }, OU, TU), (0, yJ.d)(JJ, null, yZ, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: JJ => "maxSimultaneousLights" in JJ,
            get: JJ => JJ.maxSimultaneousLights,
            set: (JJ, cJ) => {
              JJ.maxSimultaneousLights = cJ
            }
          },
          metadata: cJ
        }, CU, uU), (0, yJ.d)(JJ, null, SZ, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: JJ => "invertNormalMapX" in JJ,
            get: JJ => JJ.invertNormalMapX,
            set: (JJ, cJ) => {
              JJ.invertNormalMapX = cJ
            }
          },
          metadata: cJ
        }, iU, RU), (0, yJ.d)(JJ, null, IZ, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: JJ => "invertNormalMapY" in JJ,
            get: JJ => JJ.invertNormalMapY,
            set: (JJ, cJ) => {
              JJ.invertNormalMapY = cJ
            }
          },
          metadata: cJ
        }, LU, aU), (0, yJ.d)(JJ, null, MZ, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: JJ => "twoSidedLighting" in JJ,
            get: JJ => JJ.twoSidedLighting,
            set: (JJ, cJ) => {
              JJ.twoSidedLighting = cJ
            }
          },
          metadata: cJ
        }, BU, tU), (0, yJ.d)(JJ, null, bZ, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useAlphaFresnel" in JJ,
            get: JJ => JJ.useAlphaFresnel,
            set: (JJ, cJ) => {
              JJ.useAlphaFresnel = cJ
            }
          },
          metadata: cJ
        }, oU, lU), (0, yJ.d)(JJ, null, wZ, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useLinearAlphaFresnel" in JJ,
            get: JJ => JJ.useLinearAlphaFresnel,
            set: (JJ, cJ) => {
              JJ.useLinearAlphaFresnel = cJ
            }
          },
          metadata: cJ
        }, Je, ce), (0, yJ.d)(JJ, null, WZ, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "environmentBRDFTexture" in JJ,
            get: JJ => JJ.environmentBRDFTexture,
            set: (JJ, cJ) => {
              JJ.environmentBRDFTexture = cJ
            }
          },
          metadata: cJ
        }, Ze, Fe), (0, yJ.d)(JJ, null, gZ, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: JJ => "forceNormalForward" in JJ,
            get: JJ => JJ.forceNormalForward,
            set: (JJ, cJ) => {
              JJ.forceNormalForward = cJ
            }
          },
          metadata: cJ
        }, Ue, ee), (0, yJ.d)(JJ, null, HZ, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: JJ => "enableSpecularAntiAliasing" in JJ,
            get: JJ => JJ.enableSpecularAntiAliasing,
            set: (JJ, cJ) => {
              JJ.enableSpecularAntiAliasing = cJ
            }
          },
          metadata: cJ
        }, Xe, Ae), (0, yJ.d)(JJ, null, PZ, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useHorizonOcclusion" in JJ,
            get: JJ => JJ.useHorizonOcclusion,
            set: (JJ, cJ) => {
              JJ.useHorizonOcclusion = cJ
            }
          },
          metadata: cJ
        }, qe, je), (0, yJ.d)(JJ, null, kZ, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useRadianceOcclusion" in JJ,
            get: JJ => JJ.useRadianceOcclusion,
            set: (JJ, cJ) => {
              JJ.useRadianceOcclusion = cJ
            }
          },
          metadata: cJ
        }, Ye, he), (0, yJ.d)(JJ, null, pZ, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: JJ => "unlit" in JJ,
            get: JJ => JJ.unlit,
            set: (JJ, cJ) => {
              JJ.unlit = cJ
            }
          },
          metadata: cJ
        }, De, se), (0, yJ.d)(JJ, null, dZ, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: JJ => "applyDecalMapAfterDetailMap" in JJ,
            get: JJ => JJ.applyDecalMapAfterDetailMap,
            set: (JJ, cJ) => {
              JJ.applyDecalMapAfterDetailMap = cJ
            }
          },
          metadata: cJ
        }, ne, Ge), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ.PBRMATERIAL_OPAQUE = Ec.PBRMATERIAL_OPAQUE, JJ.PBRMATERIAL_ALPHATEST = Ec.PBRMATERIAL_ALPHATEST, JJ.PBRMATERIAL_ALPHABLEND = Ec.PBRMATERIAL_ALPHABLEND, JJ.PBRMATERIAL_ALPHATESTANDBLEND = Ec.PBRMATERIAL_ALPHATESTANDBLEND, JJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Ec.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, JJ
    })();
    const kU = "KHR_materials_diffuse_transmission";

    function pU(JJ, cJ) {
      const ZJ = cJ.subSurface;
      let FJ = null;
      return ZJ.translucencyIntensityTexture ? FJ = ZJ.translucencyIntensityTexture : ZJ.thicknessTexture && ZJ.useMaskFromThicknessTexture && (FJ = ZJ.thicknessTexture), FJ && !ZJ.useGltfStyleTextures ? (IJ.c.Warn(`${JJ}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${cJ.name}`, 1), null) : FJ
    }
    class dU {
      constructor(JJ) {
        this.name = kU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
          const cJ = pU(JJ, ZJ);
          return cJ && FJ.push(cJ), ZJ.subSurface.translucencyColorTexture && FJ.push(ZJ.subSurface.translucencyColorTexture), FJ
        }
        return FJ
      }
      _isExtensionEnabled(JJ) {
        if (JJ.unlit) return !1;
        const cJ = JJ.subSurface;
        return !!cJ.isTranslucencyEnabled && (!JJ.unlit && !cJ.useAlbedoToTintTranslucency && cJ.useGltfStyleTextures && 1 === cJ.volumeIndexOfRefraction && 0 === cJ.minimumThickness && 0 === cJ.maximumThickness)
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((FJ => {
          if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            const FJ = ZJ.subSurface,
              UJ = pU(JJ, ZJ),
              eJ = 0 == FJ.translucencyIntensity ? void 0 : FJ.translucencyIntensity,
              XJ = this._exporter._materialExporter.getTextureInfo(UJ) ?? void 0,
              AJ = !FJ.translucencyColor || FJ.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : FJ.translucencyColor.JFJ(),
              qJ = this._exporter._materialExporter.getTextureInfo(FJ.translucencyColorTexture) ?? void 0,
              jJ = {
                diffuseTransmissionFactor: eJ,
                diffuseTransmissionTexture: XJ,
                diffuseTransmissionColorFactor: AJ,
                diffuseTransmissionColorTexture: qJ
              };
            (XJ || qJ) && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions = cJ.extensions || {}, cJ.extensions[kU] = jJ
          }
          FJ(cJ)
        }))
      }
    }
    let zU = !1;

    function NU() {
      zU || (zU = !0, HF.RegisterExtension(kU, (JJ => new dU(JJ))))
    }
    NU();
    const OU = "KHR_materials_dispersion";
    class TU {
      constructor() {
        this.name = OU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(JJ) {
        if (JJ.unlit) return !1;
        const cJ = JJ.subSurface;
        return !(!cJ.isRefractionEnabled && !cJ.isDispersionEnabled)
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            const JJ = {
              dispersion: ZJ.subSurface.dispersion
            };
            cJ.extensions = cJ.extensions || {}, cJ.extensions[OU] = JJ
          }
          JJ(cJ)
        }))
      }
    }
    let CU = !1;

    function uU() {
      CU || (CU = !0, HF.RegisterExtension(OU, (() => new TU)))
    }
    uU();
    const iU = "KHR_materials_emissive_strength";
    class RU {
      constructor() {
        this.name = iU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(JJ, cJ, ZJ) {
        return await new Promise((JJ => {
          if (!(ZJ instanceof PU)) return JJ(cJ);
          const FJ = ZJ.emissiveColor.scale(ZJ.emissiveIntensity),
            UJ = Math.max(...FJ.JFJ());
          if (UJ > 1) {
            cJ.emissiveFactor = FJ.scale(1 / UJ).JFJ(), this._wasUsed = !0;
            const JJ = {
              emissiveStrength: UJ
            };
            cJ.extensions || (cJ.extensions = {}), cJ.extensions[iU] = JJ
          } else cJ.emissiveFactor = FJ.JFJ();
          return JJ(cJ)
        }))
      }
    }
    let LU = !1;

    function aU() {
      LU || (LU = !0, HF.RegisterExtension(iU, (() => new RU)))
    }
    aU();
    const BU = "KHR_materials_ior";
    class tU {
      constructor() {
        this.name = BU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(JJ) {
        return !JJ.unlit && (JJ instanceof oc ? 1.5 != JJ.specularIor : JJ instanceof PU && (void 0 != JJ.indexOfRefraction && 1.5 != JJ.indexOfRefraction))
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            const JJ = {
              ior: ZJ.indexOfRefraction
            };
            cJ.extensions = cJ.extensions || {}, cJ.extensions[BU] = JJ
          } else if (ZJ instanceof oc && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            const JJ = {
              ior: ZJ.specularIor
            };
            cJ.extensions = cJ.extensions || {}, cJ.extensions[BU] = JJ
          }
          JJ(cJ)
        }))
      }
    }
    let oU = !1;

    function lU() {
      oU || (oU = !0, HF.RegisterExtension(BU, (() => new tU)))
    }
    lU();
    const Je = "KHR_materials_iridescence";
    class ce {
      constructor(JJ) {
        this.name = Je, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof Ec) {
          if (ZJ.iridescence.isEnabled) return ZJ.iridescence.texture && FJ.push(ZJ.iridescence.texture), ZJ.iridescence.thicknessTexture && ZJ.iridescence.thicknessTexture !== ZJ.iridescence.texture && FJ.push(ZJ.iridescence.thicknessTexture), FJ
        } else if (ZJ instanceof oc && ZJ.thinFilmWeight > 0) return ZJ.thinFilmWeightTexture && FJ.push(ZJ.thinFilmWeightTexture), ZJ.thinFilmThicknessTexture && ZJ.thinFilmThicknessTexture !== ZJ.thinFilmWeightTexture && FJ.push(ZJ.thinFilmThicknessTexture), FJ;
        return []
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof Ec) {
            if (!ZJ.iridescence.isEnabled) return void JJ(cJ);
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const FJ = this._exporter._materialExporter.getTextureInfo(ZJ.iridescence.texture),
              UJ = this._exporter._materialExporter.getTextureInfo(ZJ.iridescence.thicknessTexture),
              eJ = {
                iridescenceFactor: ZJ.iridescence.intensity,
                iridescenceIor: ZJ.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ZJ.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ZJ.iridescence.maximumThickness,
                iridescenceTexture: FJ ?? void 0,
                iridescenceThicknessTexture: UJ ?? void 0
              };
            null === eJ.iridescenceTexture && null === eJ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[Je] = eJ
          } else if (ZJ instanceof oc) {
            if (ZJ.thinFilmWeight <= 0) return void JJ(cJ);
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const FJ = this._exporter._materialExporter.getTextureInfo(ZJ.thinFilmWeightTexture),
              UJ = this._exporter._materialExporter.getTextureInfo(ZJ.thinFilmThicknessTexture),
              eJ = {
                iridescenceFactor: ZJ.thinFilmWeight,
                iridescenceIor: ZJ.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ZJ.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ZJ.thinFilmThickness,
                iridescenceTexture: FJ ?? void 0,
                iridescenceThicknessTexture: UJ ?? void 0
              };
            null === eJ.iridescenceTexture && null === eJ.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[Je] = eJ
          }
          JJ(cJ)
        }))
      }
    }
    let Ze = !1;

    function Fe() {
      Ze || (Ze = !0, HF.RegisterExtension(Je, (JJ => new ce(JJ))))
    }
    Fe();
    const Ue = "KHR_materials_sheen";
    class ee {
      constructor(JJ) {
        this.name = Ue, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        return ZJ instanceof PU && ZJ.sheen.isEnabled && ZJ.sheen.texture ? [ZJ.sheen.texture] : []
      }
      async postExportMaterialAsync(JJ, cJ, ZJ) {
        return await new Promise((JJ => {
          if (ZJ instanceof PU) {
            if (!ZJ.sheen.isEnabled) return void JJ(cJ);
            this._wasUsed = !0, null == cJ.extensions && (cJ.extensions = {});
            const FJ = {
              sheenColorFactor: ZJ.sheen.color.JFJ(),
              sheenRoughnessFactor: ZJ.sheen.roughness ?? 0
            };
            null === FJ.sheenColorTexture && null === FJ.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), ZJ.sheen.texture && (FJ.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ZJ.sheen.texture) ?? void 0), ZJ.sheen.textureRoughness && !ZJ.sheen.useRoughnessFromMainTexture ? FJ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZJ.sheen.textureRoughness) ?? void 0 : ZJ.sheen.texture && ZJ.sheen.useRoughnessFromMainTexture && (FJ.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZJ.sheen.texture) ?? void 0), cJ.extensions[Ue] = FJ
          }
          JJ(cJ)
        }))
      }
    }
    let Xe = !1;

    function Ae() {
      Xe || (Xe = !0, HF.RegisterExtension(Ue, (JJ => new ee(JJ))))
    }
    Ae();
    const qe = "KHR_materials_fuzz";

    function je(JJ, cJ) {
      const ZJ = new bJ.i(cJ.name, cJ.Qy());
      return ZJ._texture = JJ, ZJ.coordinatesIndex = cJ.coordinatesIndex, cJ instanceof bJ.i && (ZJ.uOffset = cJ.uOffset, ZJ.vOffset = cJ.vOffset, ZJ.uScale = cJ.uScale, ZJ.vScale = cJ.vScale, ZJ.wAng = cJ.wAng), ZJ.wrapU = cJ.wrapU, ZJ.wrapV = cJ.wrapV, ZJ
    }
    class Ye {
      constructor(JJ) {
        this.name = qe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = JJ
      }
      dispose() {
        for (const JJ of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[JJ].dispose()
        }
        this._mergedTexturesMap = {};
        for (const JJ of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[JJ].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        if (ZJ instanceof oc) {
          const JJ = [];
          if (ZJ.fuzzWeight > 0) {
            ZJ.fuzzWeightTexture && JJ.push(ZJ.fuzzWeightTexture);
            let cJ = !1;
            if (ZJ.fuzzRoughnessTexture && (ZJ._useFuzzRoughnessFromTextureAlpha ? JJ.push(ZJ.fuzzRoughnessTexture) : cJ = !0), ZJ.fuzzColorTexture && !cJ && JJ.push(ZJ.fuzzColorTexture), cJ) {
              const cJ = function(JJ) {
                const cJ = JJ.fuzzColorTexture,
                  ZJ = cJ && cJ.getInternalTexture() ? cJ.getInternalTexture().uniqueId : "NoFuzzColor",
                  FJ = JJ.fuzzRoughnessTexture;
                return `FuzzColor_${ZJ}_FuzzRoughness_${FJ&&FJ.getInternalTexture()?FJ.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ZJ);
              if (!this._cachedInternalTexturesMap[cJ]) {
                const JJ = await async function(JJ) {
                  const cJ = JJ.Qy(),
                    ZJ = JJ.fuzzColorTexture,
                    FJ = JJ.fuzzRoughnessTexture;
                  return ZJ || FJ ? (await XZ("FuzzTexture", jZ(ZJ ? AZ(ZJ, 0) : qZ(1), ZJ ? AZ(ZJ, 1) : qZ(1), ZJ ? AZ(ZJ, 2) : qZ(1), FJ ? AZ(FJ, JJ._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : qZ(1)), cJ)).getInternalTexture() : null
                }(ZJ);
                JJ && (this._cachedInternalTexturesMap[cJ] = JJ)
              }
              this._cachedInternalTexturesMap[cJ] && (ZJ.fuzzColorTexture && (this._mergedTexturesMap[ZJ.fuzzColorTexture.uniqueId] = je(this._cachedInternalTexturesMap[cJ], ZJ.fuzzColorTexture), JJ.push(this._mergedTexturesMap[ZJ.fuzzColorTexture.uniqueId])), ZJ.fuzzRoughnessTexture && (this._mergedTexturesMap[ZJ.fuzzRoughnessTexture.uniqueId] = je(this._cachedInternalTexturesMap[cJ], ZJ.fuzzRoughnessTexture), JJ.push(this._mergedTexturesMap[ZJ.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return JJ
        }
        return []
      }
      async postExportMaterialAsync(JJ, cJ, ZJ) {
        return await new Promise((JJ => {
          if (ZJ instanceof oc) {
            if (0 == ZJ.fuzzWeight) return void JJ(cJ);
            this._wasUsed = !0, null == cJ.extensions && (cJ.extensions = {});
            const FJ = {
              fuzzFactor: ZJ.fuzzWeight,
              fuzzColorFactor: ZJ.fuzzColor.JFJ(),
              fuzzRoughnessFactor: ZJ.fuzzRoughness
            };
            let UJ, eJ;
            ZJ.fuzzWeightTexture && (FJ.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ZJ.fuzzWeightTexture) ?? void 0), ZJ.fuzzColorTexture && (UJ = this._mergedTexturesMap[ZJ.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ZJ.fuzzColorTexture.uniqueId] : ZJ.fuzzColorTexture, FJ.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(UJ) ?? void 0), ZJ.fuzzRoughnessTexture && (eJ = this._mergedTexturesMap[ZJ.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZJ.fuzzRoughnessTexture.uniqueId] : ZJ.fuzzRoughnessTexture, FJ.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(eJ) ?? void 0), null === FJ.fuzzColorTexture && null === FJ.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[qe] = FJ
          }
          JJ(cJ)
        }))
      }
    }
    let he = !1;

    function De() {
      he || (he = !0, HF.RegisterExtension(qe, (JJ => new Ye(JJ))))
    }
    De();
    const se = "KHR_materials_specular";
    class ne {
      constructor(JJ) {
        this.name = se, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        return ZJ instanceof PU && this._isExtensionEnabled(ZJ) ? (ZJ.metallicReflectanceTexture && FJ.push(ZJ.metallicReflectanceTexture), ZJ.reflectanceTexture && FJ.push(ZJ.reflectanceTexture), FJ) : FJ
      }
      _isExtensionEnabled(JJ) {
        return !JJ.unlit && (void 0 != JJ.metallicF0Factor && 1 != JJ.metallicF0Factor || void 0 != JJ.metallicReflectanceColor && !JJ.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(JJ))
      }
      _hasTexturesExtension(JJ) {
        return null != JJ.metallicReflectanceTexture || null != JJ.reflectanceTexture
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          var FJ;
          if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
            const JJ = this._exporter._materialExporter.getTextureInfo(ZJ.metallicReflectanceTexture) ?? void 0,
              FJ = this._exporter._materialExporter.getTextureInfo(ZJ.reflectanceTexture) ?? void 0,
              UJ = {
                specularFactor: 1 == ZJ.metallicF0Factor ? void 0 : ZJ.metallicF0Factor,
                specularTexture: JJ,
                specularColorFactor: ZJ.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ZJ.metallicReflectanceColor.JFJ(),
                specularColorTexture: FJ
              };
            this._hasTexturesExtension(ZJ) && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[se] = UJ
          } else if (ZJ instanceof oc) {
            cJ.extensions = cJ.extensions || {};
            const UJ = this._exporter._materialExporter.getTextureInfo(ZJ.specularWeightTexture) ?? void 0,
              eJ = this._exporter._materialExporter.getTextureInfo(ZJ.specularColorTexture) ?? void 0,
              XJ = 1 == ZJ.specularWeight ? void 0 : ZJ.specularWeight,
              AJ = ZJ.specularColor.equalsFloats(1, 1, 1) ? void 0 : ZJ.specularColor.JFJ();
            if (!eJ && !UJ && void 0 === XJ && void 0 === AJ) return JJ(cJ);
            this._wasUsed = !0;
            const qJ = {
                specularEdgeColorEnabled: !0
              },
              jJ = {
                specularFactor: XJ,
                specularTexture: UJ,
                specularColorFactor: AJ,
                specularColorTexture: eJ,
                extensions: {}
              };
            jJ.extensions.EXT_materials_specular_edge_color = qJ, (FJ = this._exporter._glTF).extensionsUsed || (FJ.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (UJ || eJ) && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[se] = jJ
          }
          JJ(cJ)
        }))
      }
    }
    let Ge = !1;

    function fe() {
      Ge || (Ge = !0, HF.RegisterExtension(se, (JJ => new ne(JJ))))
    }
    fe();
    const xe = "KHR_materials_transmission";
    class re {
      constructor(JJ) {
        this.name = xe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof PU) {
          if (this._isExtensionEnabled(ZJ)) return ZJ.subSurface.refractionIntensityTexture && ZJ.subSurface.useGltfStyleTextures && FJ.push(ZJ.subSurface.refractionIntensityTexture), FJ
        } else ZJ instanceof oc && (ZJ.transmissionWeight > 0 && ZJ.transmissionWeightTexture && (FJ.push(ZJ.transmissionWeightTexture), ZJ.transmissionColorTexture && FJ.push(ZJ.transmissionColorTexture)), ZJ.subsurfaceWeight > 0 && ZJ.subsurfaceWeightTexture && FJ.push(ZJ.subsurfaceWeightTexture));
        return FJ
      }
      _isExtensionEnabled(JJ) {
        if (JJ instanceof oc && !JJ.unlit) return JJ.transmissionWeight > 0 || JJ.subsurfaceWeight > 0;
        if (JJ instanceof PU && !JJ.unlit) {
          const cJ = JJ.subSurface;
          return cJ.isRefractionEnabled && void 0 != cJ.refractionIntensity && 0 != cJ.refractionIntensity || null != cJ.refractionIntensityTexture && cJ.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(JJ, cJ, ZJ) {
        if (!this._isExtensionEnabled(ZJ)) return cJ;
        if (ZJ instanceof PU) {
          this._wasUsed = !0;
          const FJ = ZJ.subSurface,
            UJ = {
              transmissionFactor: 0 === FJ.refractionIntensity ? void 0 : FJ.refractionIntensity
            };
          if (FJ.refractionIntensityTexture)
            if (FJ.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ZJ);
              const JJ = this._exporter._materialExporter.getTextureInfo(FJ.refractionIntensityTexture);
              JJ && (UJ.transmissionTexture = JJ)
            } else IJ.c.Warn(`${JJ}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          cJ.extensions || (cJ.extensions = {}), cJ.extensions[xe] = UJ
        } else if (ZJ instanceof oc) {
          this._wasUsed = !0;
          const JJ = {
            transmissionFactor: (1 - ZJ.transmissionWeight) * ZJ.subsurfaceWeight + ZJ.transmissionWeight
          };
          if (ZJ.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZJ);
            const cJ = this._exporter._materialExporter.getTextureInfo(ZJ.transmissionWeightTexture);
            cJ && (JJ.transmissionTexture = cJ)
          } else if (ZJ.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZJ);
            const cJ = this._exporter._materialExporter.getTextureInfo(ZJ.subsurfaceWeightTexture);
            cJ && (JJ.transmissionTexture = cJ)
          }
          if (0 == ZJ.transmissionDepth && (!ZJ.transmissionColor.equals(iJ.e.White()) || ZJ.transmissionColorTexture) && cJ.pbrMetallicRoughness && (cJ.pbrMetallicRoughness.baseColorFactor || (cJ.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), cJ.pbrMetallicRoughness.baseColorFactor[0] *= ZJ.transmissionColor.r, cJ.pbrMetallicRoughness.baseColorFactor[1] *= ZJ.transmissionColor.g, cJ.pbrMetallicRoughness.baseColorFactor[2] *= ZJ.transmissionColor.b, ZJ.transmissionColorTexture && !cJ.pbrMetallicRoughness.baseColorTexture)) {
            const JJ = this._exporter._materialExporter.getTextureInfo(ZJ.transmissionColorTexture);
            JJ && (cJ.pbrMetallicRoughness.baseColorTexture = JJ, this._exporter._materialNeedsUVsSet.add(ZJ))
          }
          cJ.extensions || (cJ.extensions = {}), cJ.extensions[xe] = JJ
        }
        return cJ
      }
    }
    let ve = !1;

    function me() {
      ve || (ve = !0, HF.RegisterExtension(xe, (JJ => new re(JJ))))
    }
    me();
    var Qe = ZJ(39032);
    const Ee = "KHR_materials_unlit";
    class Ve {
      constructor() {
        this.name = Ee, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          let FJ = !1;
          ZJ instanceof PU ? FJ = ZJ.unlit : ZJ instanceof Qe.f && (FJ = ZJ.disableLighting), FJ && (this._wasUsed = !0, null == cJ.extensions && (cJ.extensions = {}), cJ.extensions[Ee] = {}), JJ(cJ)
        }))
      }
    }
    let Ke = !1;

    function ye() {
      Ke || (Ke = !0, HF.RegisterExtension(Ee, (() => new Ve)))
    }
    ye();
    const Se = "KHR_materials_volume";
    class Ie {
      constructor(JJ) {
        this.name = Se, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof PU) {
          if (this._isExtensionEnabled(ZJ)) return ZJ.subSurface.thicknessTexture && FJ.push(ZJ.subSurface.thicknessTexture), FJ
        } else ZJ instanceof oc && (ZJ.transmissionWeight > 0 || ZJ.subsurfaceWeight > 0) && ZJ.geometryThicknessTexture && FJ.push(ZJ.geometryThicknessTexture);
        return FJ
      }
      _isExtensionEnabled(JJ) {
        if (JJ.unlit) return !1;
        const cJ = JJ.subSurface;
        return !(!cJ.isRefractionEnabled && !cJ.isTranslucencyEnabled) && (void 0 != cJ.maximumThickness && 0 != cJ.maximumThickness || void 0 != cJ.tintColorAtDistance && cJ.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != cJ.tintColor && cJ.tintColor != iJ.e.White() || this._hasTexturesExtension(JJ))
      }
      _hasTexturesExtension(JJ) {
        return null != JJ.subSurface.thicknessTexture
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof PU && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            const JJ = ZJ.subSurface,
              FJ = {
                thicknessFactor: 0 == JJ.maximumThickness ? void 0 : JJ.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(JJ.thicknessTexture) ?? void 0,
                attenuationDistance: JJ.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : JJ.tintColorAtDistance,
                attenuationColor: JJ.tintColor.equalsFloats(1, 1, 1) ? void 0 : JJ.tintColor.JFJ()
              };
            this._hasTexturesExtension(ZJ) && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions = cJ.extensions || {}, cJ.extensions[Se] = FJ
          } else if (ZJ instanceof oc) {
            const JJ = ZJ.transmissionWeight > 0 && !ZJ.geometryThinWalled,
              FJ = ZJ.subsurfaceWeight > 0 && !ZJ.geometryThinWalled;
            if (JJ || FJ) {
              this._wasUsed = !0;
              const UJ = ZJ.geometryThickness,
                eJ = this._exporter._materialExporter.getTextureInfo(ZJ.geometryThicknessTexture) ?? void 0;
              let XJ;
              eJ && this._exporter._materialNeedsUVsSet.add(ZJ);
              const AJ = iJ.e.White().JFJ();
              if (JJ && ZJ.transmissionDepth > 0) {
                const JJ = 1 / ZJ.transmissionDepth;
                let cJ = new dJ.j(-Math.log(ZJ.transmissionColor.r) * JJ, -Math.log(ZJ.transmissionColor.g) * JJ, -Math.log(ZJ.transmissionColor.b) * JJ);
                const FJ = new dJ.j(ZJ.transmissionScatter.r * JJ, ZJ.transmissionScatter.g * JJ, ZJ.transmissionScatter.b * JJ),
                  UJ = cJ.subtract(FJ),
                  eJ = Math.min(UJ.x, UJ.y, UJ.z);
                eJ < 0 && (UJ.x = UJ.x - eJ, UJ.y = UJ.y - eJ, UJ.z = UJ.z - eJ), cJ = UJ.add(FJ);
                XJ = 1 / Math.max(cJ.x, cJ.y, cJ.z), AJ[0] = Math.exp(-cJ.x * XJ), AJ[1] = Math.exp(-cJ.y * XJ), AJ[2] = Math.exp(-cJ.z * XJ)
              } else XJ = Number.MAX_VALUE, AJ[0] = 1, AJ[1] = 1, AJ[2] = 1;
              let qJ = 1;
              const jJ = iJ.e.White().JFJ();
              if (FJ) {
                const JJ = ZJ.subsurfaceRadius,
                  cJ = ZJ.subsurfaceRadiusScale,
                  FJ = new dJ.j(cJ.r, cJ.g, cJ.b).multiplyByFloats(JJ, JJ, JJ),
                  UJ = new dJ.j(1 / Math.max(FJ.x, 1e-6), 1 / Math.max(FJ.y, 1e-6), 1 / Math.max(FJ.z, 1e-6));
                qJ = 1 / Math.max(UJ.x, UJ.y, UJ.z), jJ[0] = Math.exp(-UJ.x * qJ), jJ[1] = Math.exp(-UJ.y * qJ), jJ[2] = Math.exp(-UJ.z * qJ)
              }
              const YJ = (1 - ZJ.transmissionWeight) * ZJ.subsurfaceWeight,
                hJ = YJ + ZJ.transmissionWeight,
                DJ = 1 / Math.max(hJ, 1e-6),
                sJ = ZJ.transmissionWeight * DJ,
                nJ = YJ * DJ,
                GJ = AJ.map(((JJ, cJ) => JJ * sJ + jJ[cJ] * nJ)),
                fJ = {
                  thicknessFactor: UJ,
                  thicknessTexture: eJ,
                  attenuationDistance: XJ * sJ + qJ * nJ,
                  attenuationColor: GJ
                };
              cJ.extensions = cJ.extensions || {}, cJ.extensions[Se] = fJ
            }
          }
          JJ(cJ)
        }))
      }
    }
    let Me = !1;

    function be() {
      Me || (Me = !0, HF.RegisterExtension(Se, (JJ => new Ie(JJ))))
    }
    be();
    const we = "KHR_materials_volume_scatter";
    class We {
      constructor(JJ) {
        this.name = we, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        return ZJ instanceof oc && (ZJ.transmissionWeight > 0 && ZJ.transmissionScatterTexture && FJ.push(ZJ.transmissionScatterTexture), ZJ.subsurfaceWeight > 0 && ZJ.subsurfaceColorTexture && FJ.push(ZJ.subsurfaceColorTexture)), FJ
      }
      _isExtensionEnabled(JJ) {
        if (JJ.unlit) return !1;
        const cJ = JJ.transmissionWeight > 0 && !JJ.geometryThinWalled && JJ.transmissionDepth > 0 && !JJ.transmissionScatter.equals(iJ.e.Black()),
          ZJ = JJ.subsurfaceWeight > 0 && !JJ.geometryThinWalled;
        return !(!cJ && !ZJ)
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          if (ZJ instanceof oc && this._isExtensionEnabled(ZJ)) {
            this._wasUsed = !0;
            let JJ = dJ.j.Zero(),
              FJ = 0;
            if (ZJ.transmissionWeight > 0) {
              JJ = function(JJ) {
                const cJ = new dJ.j(Math.sqrt(1 - JJ.x), Math.sqrt(1 - JJ.y), Math.sqrt(1 - JJ.z)),
                  ZJ = new dJ.j(1, 1, 1),
                  FJ = ZJ.subtract(cJ),
                  UJ = ZJ.subtract(new dJ.j(.139, .139, .139).multiplyInPlace(cJ)),
                  eJ = ZJ.add(new dJ.j(1.17, 1.17, 1.17).multiplyInPlace(cJ));
                return FJ.multiplyInPlace(UJ).divideInPlace(eJ)
              }(new dJ.j(ZJ.transmissionScatter.r, ZJ.transmissionScatter.g, ZJ.transmissionScatter.b)), FJ = ZJ.transmissionScatterAnisotropy
            }
            const UJ = dJ.j.Zero();
            let eJ = 0;
            ZJ.subsurfaceWeight > 0 && (UJ.set(ZJ.subsurfaceColor.r, ZJ.subsurfaceColor.g, ZJ.subsurfaceColor.b), eJ = ZJ.subsurfaceScatterAnisotropy);
            const XJ = (1 - ZJ.transmissionWeight) * ZJ.subsurfaceWeight,
              AJ = XJ + ZJ.transmissionWeight,
              qJ = 1 / Math.max(AJ, 1e-6),
              jJ = ZJ.transmissionWeight * qJ,
              YJ = XJ * qJ,
              hJ = {
                multiscatterColorFactor: JJ.multiplyByFloats(jJ, jJ, jJ).addInPlace(UJ.multiplyByFloats(YJ, YJ, YJ)).JFJ(),
                scatterAnisotropy: FJ * jJ + eJ * YJ
              };
            if (ZJ.subsurfaceWeight > 0 && ZJ.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ZJ);
              const JJ = this._exporter._materialExporter.getTextureInfo(ZJ.subsurfaceColorTexture);
              JJ && (hJ.multiscatterColorTexture = JJ)
            } else if (ZJ.transmissionWeight > 0 && ZJ.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ZJ);
              const JJ = this._exporter._materialExporter.getTextureInfo(ZJ.transmissionScatterTexture);
              JJ && (hJ.multiscatterColorTexture = JJ)
            }
            cJ.extensions = cJ.extensions || {}, cJ.extensions[we] = hJ
          }
          JJ(cJ)
        }))
      }
    }
    let ge = !1;

    function He() {
      ge || (ge = !0, HF.RegisterExtension(we, (JJ => new We(JJ)), 101))
    }
    He();
    const Pe = "KHR_materials_diffuse_roughness";
    class ke {
      constructor(JJ) {
        this.name = Pe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(JJ, cJ, ZJ) {
        const FJ = [];
        if (ZJ instanceof Ec) {
          if (ZJ._baseDiffuseRoughness) return ZJ._baseDiffuseRoughnessTexture && FJ.push(ZJ._baseDiffuseRoughnessTexture), FJ
        } else if (ZJ instanceof oc && ZJ.baseDiffuseRoughness) return ZJ.baseDiffuseRoughnessTexture && FJ.push(ZJ.baseDiffuseRoughnessTexture), FJ;
        return []
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          let FJ = null,
            UJ = null;
          if (ZJ instanceof Ec ? (FJ = ZJ._baseDiffuseRoughness, UJ = ZJ._baseDiffuseRoughnessTexture) : ZJ instanceof oc && (FJ = ZJ.baseDiffuseRoughness, UJ = ZJ.baseDiffuseRoughnessTexture), !FJ) return void JJ(cJ);
          this._wasUsed = !0, cJ.extensions = cJ.extensions || {};
          const eJ = {
            diffuseRoughnessFactor: FJ,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(UJ) ?? void 0
          };
          null !== eJ.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ZJ), cJ.extensions[Pe] = eJ, JJ(cJ)
        }))
      }
    }
    let pe = !1;

    function de() {
      pe || (pe = !0, HF.RegisterExtension(Pe, (JJ => new ke(JJ))))
    }
    de();
    const ze = "KHR_materials_openpbr";
    class Ne {
      constructor() {
        this.name = ze, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(JJ, cJ, ZJ) {
        return new Promise((JJ => {
          ZJ instanceof oc && (this._wasUsed = !0, cJ.extensions = cJ.extensions || {}, cJ.extensions[ze] = {}), JJ(cJ)
        }))
      }
    }
    let Oe = !1;

    function Te() {
      Oe || (Oe = !0, HF.RegisterExtension(ze, (() => new Ne)))
    }
    Te();
    const Ce = "KHR_texture_transform";
    class ue {
      constructor() {
        this.name = Ce, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(JJ, cJ, ZJ) {
        if (ZJ.Qy() || Kc.j.Warn(`${JJ}: "scene" is not defined for Babylon texture ${ZJ.name}!`), (0 !== ZJ.uAng || 0 !== ZJ.vAng) && (Kc.j.Warn(`${JJ}: Texture ${ZJ.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ZJ.uRotationCenter || 0 !== ZJ.vRotationCenter)) return;
        const FJ = {};
        let UJ = !1;
        if (0 === ZJ.uOffset && 0 === ZJ.vOffset || (FJ.offset = [ZJ.uOffset, ZJ.vOffset], UJ = !0), 1 === ZJ.uScale && 1 === ZJ.vScale || (FJ.scale = [ZJ.uScale, ZJ.vScale], UJ = !0), 0 !== ZJ.wAng) {
          if (0 !== ZJ.uRotationCenter || 0 !== ZJ.vRotationCenter) {
            if (ZJ.homogeneousRotationInUVTransform && ZJ.uScale !== ZJ.vScale) return void Kc.j.Warn(`${JJ}: Texture ${ZJ.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Ce}.`);
            Kc.j.Warn(`${JJ}: Texture ${ZJ.name} with non-origin rotation center will be exported using an adjusted offset with ${Ce}.`), FJ.offset = function(JJ) {
              const {
                uOffset: cJ,
                vOffset: ZJ,
                uRotationCenter: FJ,
                vRotationCenter: UJ,
                uScale: eJ,
                vScale: XJ,
                wAng: AJ
              } = JJ, qJ = Math.cos(AJ), jJ = Math.sin(AJ), YJ = FJ * eJ, hJ = UJ * XJ;
              return [cJ + (YJ * (1 - qJ) + hJ * jJ), ZJ + (hJ * (1 - qJ) - YJ * jJ)]
            }(ZJ)
          }
          FJ.rotation = -ZJ.wAng, UJ = !0
        }
        0 !== ZJ.coordinatesIndex && (FJ.texCoord = ZJ.coordinatesIndex, UJ = !0), UJ && (this._wasUsed = !0, cJ.extensions || (cJ.extensions = {}), cJ.extensions[Ce] = FJ)
      }
    }
    let ie = !1;

    function Re() {
      ie || (ie = !0, HF.RegisterExtension(Ce, (() => new ue)))
    }
    Re();
    var Le = ZJ(38844);
    const ae = "KHR_texture_basisu";
    class Be {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(JJ) {
        this.name = ae, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      postExportTexture(JJ, cJ) {
        const ZJ = this._exporter._textures[cJ.index],
          FJ = ZJ.source;
        if (void 0 === FJ) return;
        const UJ = this._exporter._images[FJ];
        "image/ktx2" === (UJ.mimeType || (0, Le.i)(UJ.uri)) && (ZJ.source = void 0, ZJ.extensions || (ZJ.extensions = {}), ZJ.extensions[ae] = {
          source: FJ
        }, this._wasUsed = !0)
      }
    }
    let te = !1;

    function oe() {
      te || (te = !0, HF.RegisterExtension(ae, (JJ => new Be(JJ))))
    }
    oe();
    const le = "EXT_texture_webp";
    class JX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(JJ) {
        this.name = le, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      postExportTexture(JJ, cJ) {
        const ZJ = this._exporter._textures[cJ.index],
          FJ = ZJ.source;
        if (void 0 === FJ) return;
        const UJ = this._exporter._images[FJ];
        "image/webp" === (UJ.mimeType || (0, Le.i)(UJ.uri)) && (ZJ.source = void 0, ZJ.extensions || (ZJ.extensions = {}), ZJ.extensions[le] = {
          source: FJ
        }, this._wasUsed = !0)
      }
    }
    let cX = !1;

    function ZX() {
      cX || (cX = !0, HF.RegisterExtension(le, (JJ => new JX(JJ))))
    }
    ZX();
    const FX = "EXT_texture_avif";
    class UX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(JJ) {
        this.name = FX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = JJ
      }
      dispose() {}
      postExportTexture(JJ, cJ) {
        const ZJ = this._exporter._textures[cJ.index],
          FJ = ZJ.source;
        if (void 0 === FJ) return;
        const UJ = this._exporter._images[FJ];
        "image/avif" === (UJ.mimeType || (0, Le.i)(UJ.uri)) && (ZJ.source = void 0, ZJ.extensions || (ZJ.extensions = {}), ZJ.extensions[FX] = {
          source: FJ
        }, this._wasUsed = !0)
      }
    }
    let eX = !1;

    function XX() {
      eX || (eX = !0, HF.RegisterExtension(FX, (JJ => new UX(JJ))))
    }
    XX();
    class AX {
      static CreateSTL(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          eJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          AJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const jJ = function(JJ, cJ, ZJ) {
            const UJ = [3 * JJ[ZJ], 3 * JJ[ZJ + 1], 3 * JJ[ZJ + 2]],
              eJ = [new FJ.Pn(cJ[UJ[0]], cJ[UJ[0] + 2], cJ[UJ[0] + 1]), new FJ.Pn(cJ[UJ[1]], cJ[UJ[1] + 2], cJ[UJ[1] + 1]), new FJ.Pn(cJ[UJ[2]], cJ[UJ[2] + 2], cJ[UJ[2] + 1])],
              XJ = eJ[0].subtract(eJ[1]),
              AJ = eJ[2].subtract(eJ[1]);
            return {
              v: eJ,
              n: FJ.Pn.Cross(AJ, XJ).normalize()
            }
          },
          hJ = function(JJ, cJ, ZJ, FJ) {
            return cJ = DJ(JJ, cJ, ZJ.x, FJ), cJ = DJ(JJ, cJ, ZJ.y, FJ), DJ(JJ, cJ, ZJ.z, FJ)
          },
          DJ = function(JJ, cJ, ZJ, FJ) {
            return JJ.setFloat32(cJ, ZJ, FJ), cJ + 4
          },
          nJ = function(JJ) {
            if (AJ) {
              let cJ = JJ;
              JJ instanceof sJ.d && (cJ = JJ.uFJ);
              const ZJ = cJ.getVerticesData(YJ.e.PositionKind, !0, !0);
              if (!ZJ) return [];
              const UJ = FJ.Pn.Zero();
              let eJ;
              for (eJ = 0; eJ < ZJ.length; eJ += 3) FJ.Pn.TransformCoordinatesFromFloatsToRef(ZJ[eJ], ZJ[eJ + 1], ZJ[eJ + 2], JJ.computeWorldMatrix(!0), UJ).toArray(ZJ, eJ);
              return ZJ
            }
            return JJ.getVerticesData(YJ.e.PositionKind) || []
          };
        AJ && (XJ = !0);
        let GJ = "",
          fJ = 0,
          xJ = 0;
        if (UJ) {
          for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
            const cJ = JJ[ZJ].QXJ();
            fJ += cJ ? cJ.length / 3 : 0
          }
          const cJ = new ArrayBuffer(84 + 50 * fJ);
          GJ = new DataView(cJ), xJ += 80, GJ.setUint32(xJ, fJ, eJ), xJ += 4
        } else qJ || (GJ = "solid stlmesh\r\n");
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          const cJ = JJ[FJ];
          !UJ && qJ && (GJ += "solid " + cJ.name + "\r\n"), !XJ && cJ instanceof jF.d && cJ.bakeCurrentTransformIntoVertices();
          const ZJ = nJ(cJ),
            AJ = cJ.QXJ() || [];
          for (let JJ = 0; JJ < AJ.length; JJ += 3) {
            const cJ = jJ(AJ, ZJ, JJ);
            UJ ? (xJ = hJ(GJ, xJ, cJ.n, eJ), xJ = hJ(GJ, xJ, cJ.v[0], eJ), xJ = hJ(GJ, xJ, cJ.v[1], eJ), xJ = hJ(GJ, xJ, cJ.v[2], eJ), xJ += 2) : (GJ += "\tfacet normal " + cJ.n.x + " " + cJ.n.y + " " + cJ.n.z + "\r\n", GJ += "\t\touter loop\r\n", GJ += "\t\t\tvertex " + cJ.v[0].x + " " + cJ.v[0].y + " " + cJ.v[0].z + "\r\n", GJ += "\t\t\tvertex " + cJ.v[1].x + " " + cJ.v[1].y + " " + cJ.v[1].z + "\r\n", GJ += "\t\t\tvertex " + cJ.v[2].x + " " + cJ.v[2].y + " " + cJ.v[2].z + "\r\n", GJ += "\t\tendloop\r\n", GJ += "\tendfacet\r\n")
          }!UJ && qJ && (GJ += "endsolid " + name + "\r\n")
        }
        if (UJ || qJ || (GJ += "endsolid stlmesh"), cJ) {
          const JJ = document.createElement("a"),
            cJ = new Blob([GJ], {
              type: "application/octet-stream"
            });
          JJ.href = window.URL.createObjectURL(cJ), JJ.download = ZJ + ".stl", JJ.click()
        }
        return GJ
      }
    }

    function qX(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const UJ = [];
      for (let eJ = 0; eJ < JJ.length / ZJ; eJ++) {
        const XJ = JJ[eJ * ZJ] * (FJ ? -1 : 1),
          AJ = JJ[eJ * ZJ + 1],
          qJ = JJ[eJ * ZJ + 2];
        UJ.push(`(${XJ.toPrecision(cJ.precision)}, ${AJ.toPrecision(cJ.precision)}, ${qJ.toPrecision(cJ.precision)})`)
      }
      return UJ.join(", ")
    }

    function jX(JJ, cJ) {
      const ZJ = [];
      for (let FJ = 0; FJ < JJ.length / 2; FJ++) {
        const UJ = JJ[2 * FJ],
          eJ = JJ[2 * FJ + 1];
        ZJ.push(`(${UJ.toPrecision(cJ.precision)}, ${(1-eJ).toPrecision(cJ.precision)})`)
      }
      return ZJ.join(", ")
    }

    function YX(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.getVerticesData(YJ.e.PositionKind),
        eJ = JJ.getVerticesData(YJ.e.NormalKind);
      if (UJ && eJ) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ZJ}"\n\t\tint[] faceVertexCounts = [${function(JJ){const cJ=JJ.QXJ()?.length?JJ.getTotalIndices():JJ.getTotalVertices();return Array(cJ/3).fill(3).join(", ")}(JJ)}]\n\t\tint[] faceVertexIndices = [${function(JJ){const cJ=JJ.QXJ(),ZJ=cJ?.length??JJ.getTotalVertices(),FJ=[];if(null!==cJ)for(let UJ=0;UJ<ZJ;UJ++)FJ.push(cJ[UJ]);else for(let UJ=0;UJ<ZJ;UJ++)FJ.push(UJ);return FJ.join(", ")}(JJ)}]\n\t\tnormal3f[] normals = [${qX(eJ,cJ,void 0,FJ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${qX(UJ,cJ,void 0,FJ)}]\n        ${function(JJ,cJ){let ZJ="";for(let UJ=0;UJ<4;UJ++){const FJ=UJ>0?UJ:"",eJ=JJ.getVerticesData(YJ.e.UVKind+(FJ?FJ+1:""));eJ&&(ZJ+=`\n\t\ttexCoord2f[] primvars:st${FJ} = [${jX(eJ,cJ)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const FJ=JJ.getVerticesData(YJ.e.ColorKind);return FJ&&(ZJ+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        qX(FJ, cJ, FJ.length / JJ.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ZJ}(JJ,cJ)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function hX(JJ, cJ, ZJ, FJ) {
      return `\n        def "Geometry"\n        {\n        ${YX(JJ,cJ,ZJ,FJ)}\n        }\n        `
    }

    function DX(JJ) {
      let cJ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return cJ += JJ, fflate.strToU8(cJ)
    }

    function sX(JJ) {
      const cJ = JJ.m;
      return `( ${nX(cJ,0)}, ${nX(cJ,4)}, ${nX(cJ,8)}, ${nX(cJ,12)} )`
    }

    function nX(JJ, cJ) {
      return `(${JJ[cJ+0]}, ${JJ[cJ+1]}, ${JJ[cJ+2]}, ${JJ[cJ+3]})`
    }

    function GX(JJ, cJ) {
      const ZJ = "Object_" + JJ.uniqueId,
        FJ = sX(cJ);
      return `def Xform "${ZJ}" (\n\tprepend references = @./geometries/Geometry_${JJ.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${FJ}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${JJ.material.uniqueId}>\n}\n\n`
    }

    function fX(JJ) {
      switch (JJ) {
        case VJ.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case VJ.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case VJ.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function xX(JJ) {
      return `(${JJ.x}, ${JJ.y})`
    }

    function rX(JJ) {
      return `(${JJ.r}, ${JJ.g}, ${JJ.b})`
    }

    function vX(JJ) {
      return "image/jpeg" === JJ || "image/png" === JJ
    }

    function mX(JJ, cJ, ZJ, UJ, eJ, XJ) {
      const AJ = JJ.getInternalTexture().uniqueId + "_" + JJ.invertY,
        jJ = JJ.mimeType || (0, qJ.b)(JJ.getInternalTexture()?.url ?? ""),
        YJ = vX(jJ) ? jJ : "image/png",
        hJ = "image/jpeg" === YJ ? "jpg" : "png";
      eJ[AJ] = {
        texture: JJ,
        mimeType: YJ,
        ext: hJ
      };
      const DJ = JJ.coordinatesIndex > 0 ? "st" + JJ.coordinatesIndex : "st",
        sJ = new FJ.Vector2(JJ.uScale, JJ.vScale),
        nJ = new FJ.Vector2(JJ.uOffset, JJ.vOffset),
        GJ = JJ.wAng,
        fJ = Math.sin(GJ),
        xJ = Math.cos(GJ);
      return nJ.y = 1 - nJ.y - sJ.y, nJ.x += fJ * sJ.x, nJ.y += (1 - xJ) * sJ.y, `\n    def Shader "PrimvarReader_${ZJ}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${DJ}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ZJ}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${cJ.uniqueId}/PrimvarReader_${ZJ}.outputs:result>\n        float inputs:rotation = ${(GJ*(180/Math.PI)).toFixed(XJ.precision)}\n        float2 inputs:scale = ${xX(sJ)}\n        float2 inputs:translation = ${xX(nJ)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${JJ.uniqueId}_${ZJ}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${AJ}.${hJ}@\n        float2 inputs:st.connect = </Root/Materials/Material_${cJ.uniqueId}/Transform2d_${ZJ}.outputs:result>\n        ${UJ?"float4 inputs:scale = "+function(JJ){return`(${JJ.r}, ${JJ.g}, ${JJ.b}, 1.0)`}(UJ):""}\n        token inputs:sourceColorSpace = "${JJ.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${fX(JJ.wrapU)}"\n        token inputs:wrapT = "${fX(JJ.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${cJ.needAlphaBlending()||cJ.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function QX(JJ, cJ, ZJ) {
      const FJ = "\t\t\t",
        UJ = [],
        eJ = [],
        {
          diffuseMap: XJ,
          diffuse: AJ,
          alphaCutOff: qJ,
          emissiveMap: jJ,
          emissive: YJ,
          normalMap: hJ,
          roughnessMap: DJ,
          roughnessChannel: sJ,
          roughness: nJ,
          metalnessMap: GJ,
          metalnessChannel: xJ,
          metalness: rJ,
          aoMap: vJ,
          aoMapChannel: mJ,
          aoMapIntensity: QJ,
          alphaMap: EJ,
          ior: VJ,
          clearCoatEnabled: KJ,
          clearCoat: yJ,
          clearCoatMap: SJ,
          clearCoatRoughness: IJ,
          clearCoatRoughnessMap: MJ
        } = function(JJ) {
          const cJ = {
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
          return JJ instanceof eF.StandardMaterial ? {
            ...cJ,
            diffuseMap: JJ.diffuseTexture,
            diffuse: JJ.diffuseColor,
            alphaCutOff: JJ.alphaCutOff,
            emissiveMap: JJ.emissiveTexture,
            emissive: JJ.emissiveColor,
            roughness: 1,
            alphaMap: JJ.opacityTexture
          } : JJ instanceof Ec ? {
            ...cJ,
            diffuseMap: JJ._albedoTexture,
            diffuse: JJ._albedoColor,
            alphaCutOff: JJ._alphaCutOff,
            emissiveMap: JJ._emissiveTexture,
            emissive: JJ._emissiveColor,
            normalMap: JJ._bumpTexture,
            roughnessMap: JJ._metallicTexture,
            roughnessChannel: JJ._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: JJ._roughness ?? 1,
            metalnessMap: JJ._metallicTexture,
            metalnessChannel: JJ._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: JJ._metallic ?? 0,
            aoMap: JJ._ambientTexture,
            aoMapChannel: JJ._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: JJ._ambientTextureStrength,
            alphaMap: JJ._opacityTexture,
            ior: JJ.subSurface.indexOfRefraction,
            clearCoatEnabled: JJ.clearCoat.isEnabled,
            clearCoat: JJ.clearCoat.intensity,
            clearCoatMap: JJ.clearCoat.texture,
            clearCoatRoughness: JJ.clearCoat.roughness,
            clearCoatRoughnessMap: JJ.clearCoat.useRoughnessFromMainTexture ? JJ.clearCoat.texture : JJ.clearCoat.textureRoughness
          } : cJ
        }(JJ);
      return null !== XJ ? (UJ.push(`${FJ}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${XJ.uniqueId}_diffuse.outputs:rgb>`), JJ.needAlphaBlending() ? UJ.push(`${FJ}float inputs:opacity.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${XJ.uniqueId}_diffuse.outputs:a>`) : JJ.needAlphaTesting() && (UJ.push(`${FJ}float inputs:opacity.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${XJ.uniqueId}_diffuse.outputs:a>`), UJ.push(`${FJ}float inputs:opacityThreshold = ${qJ}`)), eJ.push(mX(XJ, JJ, "diffuse", AJ, cJ, ZJ))) : UJ.push(`${FJ}color3f inputs:diffuseColor = ${rX(AJ||fJ.Color3.White())}`), null !== jJ ? (UJ.push(`${FJ}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${jJ.uniqueId}_emissive.outputs:rgb>`), eJ.push(mX(jJ, JJ, "emissive", YJ, cJ, ZJ))) : YJ && YJ.toLuminance() > 0 && UJ.push(`${FJ}color3f inputs:emissiveColor = ${rX(YJ)}`), null !== hJ && (UJ.push(`${FJ}normal3f inputs:normal.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${hJ.uniqueId}_normal.outputs:rgb>`), eJ.push(mX(hJ, JJ, "normal", null, cJ, ZJ))), null !== vJ && (UJ.push(`${FJ}float inputs:occlusion.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${vJ.uniqueId}_occlusion.outputs:${mJ}>`), eJ.push(mX(vJ, JJ, "occlusion", new fJ.Color3(QJ, QJ, QJ), cJ, ZJ))), null !== DJ ? (UJ.push(`${FJ}float inputs:roughness.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${DJ.uniqueId}_roughness.outputs:${sJ}>`), eJ.push(mX(DJ, JJ, "roughness", new fJ.Color3(nJ, nJ, nJ), cJ, ZJ))) : UJ.push(`${FJ}float inputs:roughness = ${nJ}`), null !== GJ ? (UJ.push(`${FJ}float inputs:metallic.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${GJ.uniqueId}_metallic.outputs:${xJ}>`), eJ.push(mX(GJ, JJ, "metallic", new fJ.Color3(rJ, rJ, rJ), cJ, ZJ))) : UJ.push(`${FJ}float inputs:metallic = ${rJ}`), null !== EJ ? (UJ.push(`${FJ}float inputs:opacity.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${EJ.uniqueId}_opacity.outputs:r>`), UJ.push(`${FJ}float inputs:opacityThreshold = 0.0001`), eJ.push(mX(EJ, JJ, "opacity", null, cJ, ZJ))) : UJ.push(`${FJ}float inputs:opacity = ${JJ.alpha}`), KJ && (null !== SJ ? (UJ.push(`${FJ}float inputs:clearcoat.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${SJ.uniqueId}_clearcoat.outputs:r>`), eJ.push(mX(SJ, JJ, "clearcoat", new fJ.Color3(yJ, yJ, yJ), cJ, ZJ))) : UJ.push(`${FJ}float inputs:clearcoat = ${yJ}`), null !== MJ ? (UJ.push(`${FJ}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${JJ.uniqueId}/Texture_${MJ.uniqueId}_clearcoatRoughness.outputs:g>`), eJ.push(mX(MJ, JJ, "clearcoatRoughness", new fJ.Color3(IJ, IJ, IJ), cJ, ZJ))) : UJ.push(`${FJ}float inputs:clearcoatRoughness = ${IJ}`)), UJ.push(`${FJ}float inputs:ior = ${VJ}`), `\n\tdef Material "Material_${JJ.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${UJ.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${JJ.uniqueId}/PreviewSurface.outputs:surface>\n\n${eJ.join("\n")}\n\n\t}\n`
    }

    function EX(JJ) {
      JJ.computeWorldMatrix(!0);
      const cJ = JJ.getWorldMatrix().clone(),
        ZJ = JJ.Qy().useRightHandedSystem;
      let FJ = JJ.material?._getEffectiveOrientation(JJ) ?? JJ.sideOrientation,
        XJ = !ZJ,
        AJ = JJ.parent;
      for (; AJ;) {
        if (PZ(AJ, ZJ) && null === AJ.parent) {
          ZJ || (cJ.multiplyToRef(AJ.getWorldMatrix().invert(), cJ), FJ = FJ === eJ.c.ClockWiseSideOrientation ? eJ.c.CounterClockWiseSideOrientation : eJ.c.ClockWiseSideOrientation), XJ = !1;
          break
        }
        AJ = AJ.parent
      }
      return cJ.determinant() < 0 && UJ.Tools.Warn(`Mesh ${JJ.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: cJ,
        windingOrder: FJ === eJ.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: XJ
      }
    }
    async function VX(JJ, cJ, ZJ) {
      const eJ = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...cJ
      };
      "undefined" === typeof fflate && await UJ.Tools.LoadScriptAsync(eJ.fflateUrl);
      const XJ = {};
      XJ[eJ.modelFileName] = null;
      let AJ = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      AJ += function(JJ) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===JJ.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${JJ.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${JJ.planeAnchoringAlignment}"`:""}\n            `
      }(eJ);
      const qJ = {};
      for (const FJ of JJ.meshes) {
        if (0 === FJ.getTotalVertices()) continue;
        const JJ = FJ,
          cJ = JJ.geometry,
          jJ = JJ.material;
        if (!jJ || !cJ || ZJ && !ZJ(JJ)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(jJ.getClassName())) {
          const ZJ = "geometries/Geometry_" + cJ.uniqueId + ".usda",
            {
              matrix: FJ,
              windingOrder: UJ,
              convertToRightHanded: YJ
            } = EX(JJ);
          if (!(ZJ in XJ)) {
            const JJ = hX(cJ, eJ, UJ, YJ);
            XJ[ZJ] = DX(JJ)
          }
          jJ.uniqueId in qJ || (qJ[jJ.uniqueId] = jJ), AJ += GX(JJ, FJ)
        } else UJ.Tools.Warn("USDZExportAsync does not support this material type: " + jJ.getClassName())
      }
      JJ.activeCamera && eJ.exportCamera && (AJ += function(JJ, cJ) {
        const ZJ = "Camera_" + JJ.uniqueId,
          UJ = sX(FJ.Matrix.RotationY(Math.PI).multiply(JJ.getWorldMatrix()));
        if (JJ.mode === VJ.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${ZJ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${UJ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${JJ.minZ.toPrecision(cJ.precision)}, ${JJ.maxZ.toPrecision(cJ.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(JJ.orthoLeft||1)+Math.abs(JJ.orthoRight||1))).toPrecision(cJ.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(JJ.orthoTop||1)+Math.abs(JJ.orthoBottom||1))).toPrecision(cJ.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const FJ = JJ.gn().getAspectRatio(JJ),
            eJ = cJ.cameraSensorWidth || 35;
          return `def Camera "${ZJ}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${UJ}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${JJ.minZ.toPrecision(cJ.precision)}, ${JJ.maxZ.toPrecision(cJ.precision)})\n\t\t\tfloat focalLength = ${(eJ/(2*Math.tan(.5*JJ.fov))).toPrecision(cJ.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(eJ*FJ).toPrecision(cJ.precision)}\n\t\t\tfloat verticalAperture = ${(eJ/FJ).toPrecision(cJ.precision)}            \n\t\t}\n\t\n\t`
        }
      }(JJ.activeCamera, eJ)), AJ += "\n            }\n        }";
      const jJ = {};
      AJ += function(JJ, cJ, ZJ) {
        const FJ = [];
        for (const UJ in JJ) {
          const eJ = JJ[UJ];
          FJ.push(QX(eJ, cJ, ZJ))
        }
        return `\n    def "Materials"\n{\n${FJ.join("")}\n}\n\n`
      }(qJ, jJ, eJ), AJ += "\n    }", XJ[eJ.modelFileName] = fflate.strToU8(AJ);
      for (const FJ in jJ) {
        const {
          texture: JJ,
          ext: cJ,
          mimeType: ZJ
        } = jJ[FJ], UJ = await xZ(JJ);
        if (UJ && vX(UJ.mimeType) && UJ.mimeType === ZJ) XJ[`textures/Texture_${FJ}.${cJ}`] = new Uint8Array(UJ.data);
        else {
          const UJ = JJ.getSize(),
            eJ = await (0, mJ.f)(JJ),
            AJ = await KJ.DumpTools.DumpDataAsync(UJ.width, UJ.height, eJ, ZJ, void 0, !1, !0);
          XJ[`textures/Texture_${FJ}.${cJ}`] = new Uint8Array(AJ).slice()
        }
      }
      let YJ = 0;
      for (const FJ in XJ) {
        const JJ = XJ[FJ];
        if (!JJ) continue;
        YJ += 34 + FJ.length;
        const cJ = 63 & YJ;
        if (4 !== cJ) {
          const ZJ = new Uint8Array(64 - cJ);
          XJ[FJ] = [JJ, {
            extra: {
              12345: ZJ
            }
          }]
        }
        YJ = JJ.length
      }
      return fflate.zipSync(XJ, {
        level: 0
      })
    }
    var KX = ZJ(39965);
    class yX {
      static Export(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (!JJ || 0 === JJ.bones.length) throw new Error("Invalid or empty skeleton provided");
        let FJ = cJ;
        cJ && 0 !== cJ.length || (FJ = JJ.animations.map((JJ => JJ.name)));
        let UJ = null;
        for (const jJ of FJ) {
          const cJ = JJ.getAnimationRange(jJ);
          cJ && (UJ = UJ ? new KX.e("animation-range", Math.min(UJ.from, cJ.from), Math.max(UJ.to, cJ.to)) : cJ)
        }
        if (!UJ && (JJ.animations.length > 0 && (UJ = JJ.getAnimationRange(JJ.animations[0].name)), !UJ)) throw new Error("No animation range found in skeleton");
        const eJ = ZJ || 1 / (JJ.animations[0]?.framePerSecond || 30),
          XJ = this._BuildBoneHierarchy(JJ, FJ);
        let AJ = 0;
        for (const jJ of XJ) jJ.positionKeys.length > 0 && (AJ = Math.max(AJ, jJ.positionKeys.length)), jJ.rotationKeys.length > 0 && (AJ = Math.max(AJ, jJ.rotationKeys.length));
        0 === AJ && (AJ = Math.floor((UJ.to - UJ.from) / eJ) + 1);
        let qJ = "";
        return qJ += "HIERARCHY\n", qJ += this._ExportHierarchy(XJ, 0), qJ += "MOTION\n", qJ += `Frames: ${AJ}\n`, qJ += `Frame Time: ${eJ.toFixed(6)}\n`, qJ += this._ExportMotionData(XJ, AJ, 0, FJ), qJ
      }
      static _BuildBoneHierarchy(JJ, cJ) {
        const ZJ = new Map,
          FJ = [];
        for (const UJ of JJ.bones) {
          const JJ = {
            bone: UJ,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ZJ.set(UJ, JJ)
        }
        for (const UJ of JJ.bones) {
          const JJ = ZJ.get(UJ);
          if (UJ.animations.length > 0)
            for (const ZJ of UJ.animations) cJ.includes(ZJ.name) && ("position" === ZJ.targetProperty ? (JJ.hasPositionChannels = !0, JJ.positionKeys.push(...ZJ.getKeys())) : "rotationQuaternion" === ZJ.targetProperty && (JJ.hasRotationChannels = !0, JJ.rotationKeys.push(...ZJ.getKeys())));
          if (UJ.getParent()) {
            const cJ = ZJ.get(UJ.getParent());
            cJ && cJ.children.push(JJ)
          } else FJ.push(JJ)
        }
        return FJ
      }
      static _ExportHierarchy(JJ, cJ) {
        let ZJ = "";
        const FJ = "    ".repeat(cJ);
        for (const UJ of JJ) {
          const JJ = UJ.bone;
          if (this._IsEndSite(UJ)) {
            ZJ += `${FJ}End Site\n`, ZJ += `${FJ}{\n`;
            const cJ = this._GetBoneOffset(JJ);
            ZJ += `${FJ}    OFFSET ${cJ.x.toFixed(6)} ${cJ.y.toFixed(6)} ${cJ.z.toFixed(6)}\n`, ZJ += `${FJ}}\n`
          } else {
            ZJ += `${0===cJ?"ROOT":`${FJ}JOINT`} ${JJ.name}\n`, ZJ += `${FJ}{\n`;
            const eJ = this._GetBoneOffset(JJ);
            ZJ += `${FJ}    OFFSET ${eJ.x.toFixed(6)} ${eJ.y.toFixed(6)} ${eJ.z.toFixed(6)}\n`;
            const XJ = [];
            UJ.hasPositionChannels && XJ.push("Xposition", "Yposition", "Zposition"), UJ.hasRotationChannels && XJ.push("Zrotation", "Xrotation", "Yrotation"), XJ.length > 0 && (ZJ += `${FJ}    CHANNELS ${XJ.length} ${XJ.join(" ")}\n`), UJ.children.length > 0 && (ZJ += this._ExportHierarchy(UJ.children, cJ + 1)), ZJ += `${FJ}}\n`
          }
        }
        return ZJ
      }
      static _IsEndSite(JJ) {
        return 0 === JJ.children.length
      }
      static _GetBoneOffset(JJ) {
        try {
          if (!JJ.getParent()) return JJ.getRestMatrix().getTranslation();
          return JJ.getLocalMatrix().getTranslation()
        } catch (cJ) {
          return FJ.Pn.Zero()
        }
      }
      static _ExportMotionData(JJ, cJ, ZJ, FJ) {
        let UJ = "";
        for (let eJ = 0; eJ < cJ; eJ++) {
          const cJ = [];
          this._CollectFrameValues(JJ, eJ + ZJ, cJ, FJ), UJ += cJ.map((JJ => JJ.toFixed(6))).join(" ") + "\n"
        }
        return UJ
      }
      static _CollectFrameValues(JJ, cJ, ZJ, FJ) {
        for (const UJ of JJ)
          if (!this._IsEndSite(UJ)) {
            if (UJ.hasPositionChannels) {
              const JJ = this._GetPositionAtFrameIndex(UJ.positionKeys, cJ);
              ZJ.push(JJ.x, JJ.y, JJ.z)
            }
            if (UJ.hasRotationChannels) {
              const JJ = this._GetRotationAtFrameIndex(UJ.rotationKeys, cJ),
                FJ = this._QuaternionToEuler(JJ);
              ZJ.push(FJ.z, FJ.x, FJ.y)
            }
            UJ.children.length > 0 && this._CollectFrameValues(UJ.children, cJ, ZJ, FJ)
          }
      }
      static _GetPositionAtFrameIndex(JJ, cJ) {
        if (0 === JJ.length) return FJ.Pn.Zero();
        return JJ[Math.max(0, Math.min(cJ, JJ.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(JJ, cJ) {
        if (0 === JJ.length) return FJ.Quaternion.Identity();
        return JJ[Math.max(0, Math.min(cJ, JJ.length - 1))].value.clone()
      }
      static _QuaternionToEuler(JJ) {
        const cJ = new FJ.Matrix;
        JJ.toRotationMatrix(cJ);
        const ZJ = cJ.m;
        let eJ, XJ, AJ;
        const qJ = Math.sqrt(ZJ[0] * ZJ[0] + ZJ[1] * ZJ[1]);
        return qJ > gZ.e ? (eJ = Math.atan2(ZJ[6], ZJ[10]), XJ = Math.atan2(-ZJ[2], qJ), AJ = Math.atan2(ZJ[1], ZJ[0])) : (eJ = Math.atan2(-ZJ[9], ZJ[5]), XJ = Math.atan2(-ZJ[2], qJ), AJ = 0), new FJ.Pn(UJ.Tools.ToDegrees(eJ), UJ.Tools.ToDegrees(XJ), UJ.Tools.ToDegrees(AJ))
      }
    }

    function SX(JJ) {
      return "string" === typeof JJ?.name
    }
    const IX = Symbol("__xml:meta$__"),
      MX = Symbol("__xml:name$__");

    function bX(JJ, cJ) {
      Object.prototype.hasOwnProperty.call(JJ.metadata, IX) || (JJ.metadata[IX] = []), JJ.metadata[IX].push(cJ)
    }

    function wX(JJ) {
      return (cJ, ZJ) => {
        cJ[MX] = JJ
      }
    }

    function WX() {
      return (JJ, cJ) => bX(cJ, {
        kind: "none",
        prop: String(cJ.name),
        ignore: !0
      })
    }

    function gX(JJ) {
      return (cJ, ZJ) => bX(ZJ, {
        kind: "attr",
        prop: String(ZJ.name),
        ...JJ
      })
    }

    function HX(JJ) {
      return (cJ, ZJ) => bX(ZJ, {
        kind: "elem",
        prop: String(ZJ.name),
        ...JJ
      })
    }

    function PX(JJ) {
      const cJ = "function" === typeof JJ ? JJ : JJ?.constructor,
        ZJ = cJ?.[Symbol.metadata];
      if (!ZJ) return [];
      const FJ = [];
      let UJ = ZJ;
      for (; UJ;) Object.prototype.hasOwnProperty.call(UJ, IX) && FJ.push(...UJ[IX]), UJ = Object.getPrototypeOf(UJ);
      return FJ
    }

    function kX(JJ) {
      const cJ = JJ?.constructor?.[MX];
      return cJ || void 0
    }

    function pX(JJ) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(JJ)
    }

    function dX(JJ) {
      if (SX(JJ)) return JJ;
      const cJ = (JJ ?? "").trim();
      if (!cJ) return {
        name: ""
      };
      const ZJ = cJ.indexOf(":");
      if (-1 === ZJ) return {
        name: cJ
      };
      if (-1 !== cJ.indexOf(":", ZJ + 1)) return {
        name: cJ
      };
      const FJ = cJ.slice(0, ZJ),
        UJ = cJ.slice(ZJ + 1);
      return pX(FJ) && pX(UJ) ? {
        ns: FJ,
        name: UJ
      } : {
        name: cJ
      }
    }

    function zX(JJ, cJ) {
      return cJ ? `${cJ}:${JJ}` : JJ
    }
    const NX = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      OX = Object.freeze({
        number: NX
      });

    function TX(JJ) {
      const cJ = JJ?.eps ?? NX.eps;
      return {
        eps: cJ,
        maxDecimalsCap: JJ?.maxDecimalsCap ?? NX.maxDecimalsCap,
        trimTrailingZeros: JJ?.trimTrailingZeros ?? NX.trimTrailingZeros,
        fixedDecimals: JJ?.fixedDecimals,
        allowScientific: JJ?.allowScientific ?? NX.allowScientific,
        snapNearZero: JJ?.snapNearZero ?? NX.snapNearZero,
        zeroThreshold: JJ?.zeroThreshold ?? cJ,
        perAttributeEps: JJ?.perAttributeEps
      }
    }

    function CX(JJ) {
      return {
        number: TX(JJ?.number)
      }
    }
    class uX {
      constructor(JJ) {
        if (this.o = JJ, this._o = JJ.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(JJ) {
        if (!Number.isFinite(JJ)) throw new Error(`Cannot format non-finite number: ${JJ}`);
        const cJ = this._o,
          ZJ = this._clampInt(cJ.maxDecimalsCap ?? 15, 0, 20),
          FJ = cJ.trimTrailingZeros ?? !0,
          UJ = cJ.snapNearZero ?? !0,
          eJ = cJ.zeroThreshold ?? cJ.eps,
          XJ = 1 / cJ.eps;
        let AJ, qJ = Math.round(JJ * XJ) / XJ;
        if (Object.is(qJ, -0) && (qJ = 0), UJ && Math.abs(qJ) <= eJ && (qJ = 0), AJ = void 0 !== cJ.fixedDecimals ? this._clampInt(cJ.fixedDecimals, 0, ZJ) : this._clampInt(Math.ceil(-Math.log10(cJ.eps)), 0, ZJ), cJ.allowScientific, 0 === AJ) return String(Math.trunc(qJ));
        let jJ = qJ.toFixed(AJ);
        if (FJ && void 0 === cJ.fixedDecimals && (jJ = jJ.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(jJ)) throw new Error(`Scientific notation not allowed in XML output: ${jJ}`);
        return jJ
      }
      _clampInt(JJ, cJ, ZJ) {
        return Number.isFinite(JJ) ? (JJ = Math.trunc(JJ), Math.max(cJ, Math.min(ZJ, JJ))) : cJ
      }
    }

    function iX(JJ) {
      return JJ instanceof Date
    }

    function RX(JJ) {
      return "string" === typeof JJ
    }

    function LX(JJ) {
      return "string" === typeof JJ || "number" === typeof JJ || "boolean" === typeof JJ || "bigint" === typeof JJ || iX(JJ)
    }

    function aX(JJ) {
      return "number" === typeof JJ || "boolean" === typeof JJ || "bigint" === typeof JJ || iX(JJ)
    }
    class BX {
      constructor(JJ, cJ) {
        this._ns = new Map, this._prefixCount = 0, this._builder = JJ, this._format = CX(cJ), this._nFmt = new uX(this._format)
      }
      withNamespace() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        for (const FJ of cJ) this._assignNamespace(FJ);
        return this
      }
      serialize(JJ, cJ) {
        if (!(cJ = cJ ?? kX(JJ))) throw new Error("can not find name for given object");
        const ZJ = dX(cJ);
        ZJ.ns && this._assignNamespace(ZJ.ns, "xmlns"), this._gatherNamespaces(JJ, new WeakSet);
        const FJ = this._builder.ele(null, ZJ.name);
        for (const [UJ, eJ] of Array.from(this._ns.entries())) FJ.att("xmlns", eJ, UJ);
        this._writeObjectContent(FJ, JJ, (new WeakSet).add(JJ)), this._builder.end()
      }
      _writeObject(JJ, cJ, ZJ) {
        if (ZJ.has(cJ)) return;
        if (ZJ.add(cJ), Array.isArray(cJ)) {
          for (const FJ of cJ) aX(FJ) || (RX(FJ) ? this._builder.text(FJ) : this._writeObject(JJ, FJ, ZJ));
          return
        }
        const FJ = kX(cJ);
        if (!FJ) return;
        const UJ = dX(FJ),
          eJ = this._getPrefix(UJ),
          XJ = zX(UJ.name, eJ);
        JJ.ele(null, XJ), this._writeObjectContent(JJ, cJ, ZJ), this._builder.end()
      }
      _getPrefix(JJ) {
        if (JJ.ns) {
          const cJ = this._ns.get(JJ.ns.toLowerCase());
          if ("xmlns" !== cJ) return cJ
        }
      }
      _writeObjectContent(JJ, cJ, ZJ) {
        const FJ = PX(cJ) ?? [],
          UJ = new Map;
        for (const XJ of FJ) {
          const JJ = UJ.get(XJ.prop) ?? [];
          JJ.push(XJ), UJ.set(XJ.prop, JJ)
        }
        const eJ = Object.keys(cJ).sort(((JJ, cJ) => {
          const ZJ = (UJ.get(JJ) ?? []).some((JJ => "attr" === JJ.kind));
          return ZJ === (UJ.get(cJ) ?? []).some((JJ => "attr" === JJ.kind)) ? 0 : ZJ ? -1 : 1
        }));
        for (const XJ of eJ) {
          const FJ = cJ[XJ];
          if (null === FJ || void 0 === FJ) continue;
          const eJ = UJ.get(XJ);
          if (eJ) {
            if (eJ.some((JJ => !0 === JJ.ignore || "none" === JJ.kind))) continue;
            for (const cJ of eJ) {
              const ZJ = cJ.name ?? cJ.prop.toLowerCase();
              if (ZJ) switch (cJ.kind) {
                case "attr": {
                  let UJ = null;
                  if ("number" === typeof FJ && this._nFmt && (UJ = this._nFmt.toString(FJ)), cJ.formatter) {
                    UJ = new cJ.formatter(this._format).toString(FJ)
                  }
                  if (UJ = UJ ?? FJ.toString(), UJ) {
                    const cJ = dX(ZJ),
                      FJ = this._getPrefix(cJ),
                      eJ = zX(cJ.name, FJ);
                    JJ.att(null, eJ, UJ)
                  }
                  break
                }
              }
            }
          } else aX(FJ) || (RX(FJ) ? this._builder.text(FJ) : this._writeObject(JJ, FJ, ZJ))
        }
      }
      _gatherNamespaces(JJ, cJ) {
        if (cJ.has(JJ)) return;
        if (cJ.add(JJ), Array.isArray(JJ)) {
          for (const ZJ of JJ) LX(ZJ) || this._gatherNamespaces(ZJ, cJ);
          return
        }
        const ZJ = kX(JJ);
        ZJ && this._assignNamespace(ZJ);
        const FJ = PX(JJ) ?? [],
          UJ = new Map;
        for (const XJ of FJ) {
          const JJ = UJ.get(XJ.prop) ?? [];
          JJ.push(XJ), UJ.set(XJ.prop, JJ)
        }
        const eJ = [];
        for (const XJ of Object.keys(JJ)) {
          const cJ = JJ[XJ];
          if (null === cJ || void 0 === cJ) continue;
          const ZJ = UJ.get(XJ);
          if (ZJ) {
            if (ZJ.some((JJ => !0 === JJ.ignore || "none" === JJ.kind))) continue;
            for (const JJ of ZJ) JJ.name && this._assignNamespace(JJ.name)
          }
          eJ.push(cJ)
        }
        for (const XJ of eJ) LX(XJ) || this._gatherNamespaces(XJ, cJ)
      }
      _assignNamespace(JJ, cJ) {
        const ZJ = dX(JJ);
        if (ZJ?.ns) {
          const JJ = ZJ.ns.toLowerCase();
          this._ns.get(JJ) || this._ns.set(JJ, cJ ?? this._buildNsPrefix(JJ))
        } else if ("xmlns" === cJ) {
          const JJ = ZJ.name.toLowerCase();
          this._ns.get(JJ) || this._ns.set(JJ, cJ ?? this._buildNsPrefix(JJ))
        }
      }
      _buildNsPrefix(JJ) {
        let cJ, ZJ = !1;
        do {
          cJ = "ns" + this._prefixCount++;
          for (const JJ of Array.from(this._ns.values()))
            if (JJ === cJ) {
              ZJ = !0;
              break
            }
        } while (ZJ);
        return cJ
      }
    }
    class tX {}
    var oX;
    tX.OpenTag = "<", tX.CloseTag = ">", tX.Slash = "/", tX.Question = "?", tX.Quote = '"', tX.Equal = "=", tX.Space = " ", tX.Semicolon = ":", tX.Dec = "<?xml", tX.Xml = "xml", tX.Xmlns = "xmlns", tX.Xsi = "xsi", tX.VersionKeyword = "version", tX.EncodingKeyword = "encoding", tX.StandaloneKeyword = "standalone",
      function(JJ) {
        JJ[JJ.Declaration = 0] = "Declaration", JJ[JJ.Tag = 1] = "Tag", JJ[JJ.Attribute = 2] = "Attribute", JJ[JJ.Text = 3] = "Text"
      }(oX || (oX = {}));
    class lX {
      constructor(JJ) {
        this._ctxStack = [], this._d = 0, this._w = JJ
      }
      dec(JJ, cJ, ZJ) {
        return this._w.write(tX.Dec), this._writeAttStr(tX.VersionKeyword, JJ), cJ && this._writeAttStr(tX.EncodingKeyword, cJ), void 0 !== ZJ && this._writeAttStr(tX.StandaloneKeyword, ZJ ? "yes" : "no"), this._w.write(tX.Question, tX.CloseTag), this
      }
      att(JJ, cJ, ZJ) {
        const FJ = this._peekContext();
        if (!FJ) throw new Error("att() without open element");
        if (FJ.closed) throw new Error(`att() after start tag closed for <${FJ.name}>`);
        if (this._isXmlnsDecl(JJ, cJ)) {
          if (cJ === tX.Xmlns) FJ.defaultNs = ZJ, this._registerNamespace(FJ, "", ZJ), this._writeAttStr(tX.Xmlns, ZJ);
          else if (JJ) this._registerNamespace(FJ, cJ, ZJ), this._writeAttStr(`${JJ}:${cJ}`, ZJ);
          else {
            const JJ = cJ.slice(6);
            this._registerNamespace(FJ, JJ, ZJ), this._writeAttStr(cJ, ZJ)
          }
          return FJ.lastToken = oX.Attribute, this
        }
        let UJ = cJ;
        if (JJ) {
          UJ = `${this._ensurePrefixDeclared(FJ,JJ)}:${cJ}`
        }
        return FJ.lastToken = oX.Attribute, this._writeAttStr(UJ, ZJ), this
      }
      ele(JJ, cJ) {
        const ZJ = this._peekContext();
        ZJ && this._closeOpenTagIfNeeded(ZJ);
        let FJ = cJ;
        if (JJ) {
          FJ = `${this._lookupPrefix(JJ)??JJ}:${cJ}`
        }
        return this._pushContext(FJ, ++this._d), this._w.write(tX.OpenTag, FJ), this
      }
      text(JJ) {
        const cJ = this._peekContext();
        if (!cJ) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(cJ), cJ.lastToken = oX.Text, this._w.write(this._escText(JJ)), this
      }
      end() {
        const JJ = this._popContext();
        return JJ && (this._d--, JJ.closed ? this._w.write(tX.OpenTag, tX.Slash, JJ.name, tX.CloseTag) : this._w.write(tX.Slash, tX.CloseTag)), this
      }
      _pushContext(JJ, cJ) {
        const ZJ = new lX.Context(JJ, cJ);
        return this._ctxStack.push(ZJ), ZJ
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
      _writeAttStr(JJ, cJ) {
        this._w.write(tX.Space, JJ, tX.Equal, tX.Quote, this._escAttr(cJ), tX.Quote)
      }
      _lookupPrefix(JJ) {
        let cJ = this._ctxStack.length - 1;
        if (cJ >= 0)
          do {
            const ZJ = this._ctxStack[cJ--],
              FJ = ZJ.ns2prefix?.get(JJ);
            if (FJ) return FJ
          } while (cJ >= 0)
      }
      _escText(JJ) {
        return JJ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(JJ) {
        return this._escText(JJ).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(JJ, cJ) {
        if (JJ) return JJ === tX.Xmlns;
        const ZJ = cJ.length,
          FJ = tX.Xmlns.length;
        return ZJ >= FJ && (cJ.startsWith(tX.Xmlns) && (cJ.length == FJ || cJ[FJ] == tX.Semicolon))
      }
      _registerNamespace(JJ, cJ, ZJ) {
        if (cJ === tX.Xml || cJ === tX.Xmlns) throw new Error(`reserved prefix '${cJ}'`);
        const FJ = JJ.prefix2ns.get(cJ);
        if (FJ && FJ !== ZJ) throw new Error(`prefix '${cJ}' already bound to a different namespace`);
        JJ.ns2prefix.get(ZJ) || JJ.ns2prefix.set(ZJ, cJ), JJ.prefix2ns.set(cJ, ZJ)
      }
      _allocPrefix(JJ) {
        let cJ = 1;
        for (;;) {
          const ZJ = "ns" + cJ++;
          if (!JJ.prefix2ns.has(ZJ)) return ZJ
        }
      }
      _ensurePrefixDeclared(JJ, cJ) {
        const ZJ = this._lookupPrefix(cJ);
        if (ZJ) return ZJ;
        if (JJ.closed) throw new Error(`can not declare namespace after start tag closed for <${JJ.name}>`);
        const FJ = this._allocPrefix(JJ);
        return this._writeAttStr(`${tX.Xmlns}:${FJ}`, cJ), this._registerNamespace(JJ, FJ, cJ), FJ
      }
      _closeOpenTagIfNeeded(JJ) {
        JJ.closed || (this._w.write(tX.CloseTag), JJ.closed = !0)
      }
    }
    lX.Context = class {
      constructor(JJ, cJ) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = JJ, this.depth = cJ
      }
    };
    class JA {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        if (0 === cJ.length) return this;
        const FJ = cJ.join("");
        return this._chunks.push(FJ), this.count += FJ.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class cA {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = JJ, this._opts = cJ, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        if (0 === cJ.length) return this;
        const FJ = cJ.join("");
        if (0 === FJ.length) return this;
        this._pending += FJ, this._pendingChars += FJ.length;
        const UJ = this._opts.flushChars ?? 65536;
        return this._pendingChars >= UJ && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const JJ = this._encoder.encode(this._pending);
        return this._sink.push(JJ), this.count += JJ.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const ZA = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      FA = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var UA, eA;
    ! function(JJ) {
      JJ.micron = "micron", JJ.millimeter = "millimeter", JJ.centimeter = "centimeter", JJ.inch = "inch", JJ.foot = "foot", JJ.meter = "meter"
    }(UA || (UA = {})),
    function(JJ) {
      JJ.model = "model", JJ.solidsupport = "solidsupport", JJ.support = "support", JJ.surface = "surface", JJ.other = "other"
    }(eA || (eA = {}));
    const XA = "http://schemas.openxmlformats.org/package/2006/content-types",
      AA = "http://schemas.openxmlformats.org/package/2006/relationships";
    var qA;
    ! function(JJ) {
      JJ.Relationships = "application/vnd.openxmlformats-package.relationships+xml", JJ.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", JJ.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", JJ.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", JJ.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", JJ.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", JJ.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", JJ.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", JJ.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", JJ.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", JJ.Png = "image/png", JJ.Jpeg = "image/jpeg", JJ.Tiff = "image/tiff", JJ.Xml = "application/xml"
    }(qA || (qA = {}));
    const jA = "_rels/",
      YA = "3D/",
      hA = "3dmodel.model",
      DA = ".rels",
      sA = "[Content_Types].xml";
    class nA {
      static IsKnown(JJ) {
        return nA.Known.has(JJ)
      }
      static IsThreeDimModel(JJ) {
        return JJ === nA.ThreeDimModel
      }
    }
    nA.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", nA.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", nA.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", nA.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", nA.Known = new Set([nA.ThreeDimModel, nA.Thumbnail, nA.PrintTicket, nA.MustPreserve]);
    let GA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: XA,
            name: "Types"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfContentTypes"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      fA = (() => {
        let JJ, cJ, ZJ, FJ, UJ = [wX({
            ns: XA,
            name: "Default"
          })],
          eJ = [],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [];
        cJ = class {
          constructor(JJ, cJ) {
            this.ext = (0, yJ.e)(this, XJ, void 0), this.ct = ((0, yJ.e)(this, AJ), (0, yJ.e)(this, qJ, void 0)), (0, yJ.e)(this, jJ), this.ext = JJ, this.ct = cJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfContentType"), (() => {
          const YJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: {
              ns: XA,
              name: "Extension"
            }
          })], FJ = [gX({
            name: {
              ns: XA,
              name: "ContentType"
            }
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ext" in JJ,
              get: JJ => JJ.ext,
              set: (JJ, cJ) => {
                JJ.ext = cJ
              }
            },
            metadata: YJ
          }, XJ, AJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ct" in JJ,
              get: JJ => JJ.ct,
              set: (JJ, cJ) => {
                JJ.ct = cJ
              }
            },
            metadata: YJ
          }, qJ, jJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, UJ, {
            kind: "class",
            name: cJ.name,
            metadata: YJ
          }, null, eJ), cJ = JJ.value, YJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YJ
          }), (0, yJ.e)(cJ, eJ)
        })(), cJ
      })(),
      xA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: AA,
            name: "Relationships"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.items = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfRelationships"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      rA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ = [wX({
            ns: AA,
            name: "Relationship"
          })],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        cJ = class {
          constructor(JJ, cJ, ZJ) {
            this.id = (0, yJ.e)(this, AJ, void 0), this.type = ((0, yJ.e)(this, qJ), (0, yJ.e)(this, jJ, void 0)), this.target = ((0, yJ.e)(this, YJ), (0, yJ.e)(this, hJ, void 0)), (0, yJ.e)(this, DJ), this.id = JJ, this.type = cJ, this.target = ZJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfRelationship"), (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "Id"
          })], FJ = [gX({
            name: "Type"
          })], UJ = [gX({
            name: "Target"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: JJ => "id" in JJ,
              get: JJ => JJ.id,
              set: (JJ, cJ) => {
                JJ.id = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: JJ => "type" in JJ,
              get: JJ => JJ.type,
              set: (JJ, cJ) => {
                JJ.type = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: JJ => "target" in JJ,
              get: JJ => JJ.target,
              set: (JJ, cJ) => {
                JJ.target = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, eJ, {
            kind: "class",
            name: cJ.name,
            metadata: sJ
          }, null, XJ), cJ = JJ.value, sJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          }), (0, yJ.e)(cJ, XJ)
        })(), cJ
      })();
    class vA {
      constructor(JJ, cJ, ZJ) {
        this.contentTypes = JJ, this.relationships = cJ, this.model = ZJ
      }
    }
    class mA {
      static Zero() {
        return new mA([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(JJ) {
        this.values = JJ
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class QA {
      constructor(JJ) {
        this.o = JJ, this._f = new uX(JJ)
      }
      toString(JJ) {
        return JJ.values.map((JJ => this._f.toString(JJ))).join(" ")
      }
    }
    let EA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ = [wX({
            ns: ZA,
            name: "model"
          })],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        cJ = class {
          constructor() {
            this.unit = (0, yJ.e)(this, AJ, UA.millimeter), this.requiredextensions = ((0, yJ.e)(this, qJ), (0, yJ.e)(this, jJ, void 0)), this.recommendedextensions = ((0, yJ.e)(this, YJ), (0, yJ.e)(this, hJ, void 0)), this.metadata = (0, yJ.e)(this, DJ)
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfModel"), (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "unit"
          })], FJ = [gX({
            name: "requiredextensions"
          })], UJ = [gX({
            name: "recommendedextensions"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: JJ => "unit" in JJ,
              get: JJ => JJ.unit,
              set: (JJ, cJ) => {
                JJ.unit = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: JJ => "requiredextensions" in JJ,
              get: JJ => JJ.requiredextensions,
              set: (JJ, cJ) => {
                JJ.requiredextensions = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: JJ => "recommendedextensions" in JJ,
              get: JJ => JJ.recommendedextensions,
              set: (JJ, cJ) => {
                JJ.recommendedextensions = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, eJ, {
            kind: "class",
            name: cJ.name,
            metadata: sJ
          }, null, XJ), cJ = JJ.value, sJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          })
        })(), cJ.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, yJ.e)(cJ, XJ), cJ
      })(),
      VA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ = [wX({
            ns: ZA,
            name: "meta"
          })],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        cJ = class {
          constructor(JJ, cJ, ZJ, FJ) {
            this.name = (0, yJ.e)(this, AJ, void 0), this.preserve = ((0, yJ.e)(this, qJ), (0, yJ.e)(this, jJ, void 0)), this.type = ((0, yJ.e)(this, YJ), (0, yJ.e)(this, hJ, void 0)), this.value = (0, yJ.e)(this, DJ), this.name = JJ, this.value = cJ, this.preserve = ZJ, this.type = FJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfMeta"), (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "name"
          })], FJ = [gX({
            name: "preserve"
          })], UJ = [gX({
            name: "type"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: JJ => "name" in JJ,
              get: JJ => JJ.name,
              set: (JJ, cJ) => {
                JJ.name = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: JJ => "preserve" in JJ,
              get: JJ => JJ.preserve,
              set: (JJ, cJ) => {
                JJ.preserve = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: JJ => "type" in JJ,
              get: JJ => JJ.type,
              set: (JJ, cJ) => {
                JJ.type = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, eJ, {
            kind: "class",
            name: cJ.name,
            metadata: sJ
          }, null, XJ), cJ = JJ.value, sJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          }), (0, yJ.e)(cJ, XJ)
        })(), cJ
      })(),
      KA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "metadatagroup"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfMetadataGroup"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      yA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "resources"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.object = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfResources"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      SA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ = [wX({
            ns: ZA,
            name: "object"
          })],
          YJ = [],
          hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [],
          vJ = [],
          mJ = [],
          QJ = [],
          EJ = [],
          VJ = [],
          KJ = [];
        cJ = class {
          constructor(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.model;
            this.id = (0, yJ.e)(this, hJ, void 0), this.type = ((0, yJ.e)(this, DJ), (0, yJ.e)(this, sJ, void 0)), this.thumbnail = ((0, yJ.e)(this, nJ), (0, yJ.e)(this, GJ, void 0)), this.partnumber = ((0, yJ.e)(this, fJ), (0, yJ.e)(this, xJ, void 0)), this.name = ((0, yJ.e)(this, rJ), (0, yJ.e)(this, vJ, void 0)), this.pid = ((0, yJ.e)(this, mJ), (0, yJ.e)(this, QJ, void 0)), this.pindex = ((0, yJ.e)(this, EJ), (0, yJ.e)(this, VJ, void 0)), this.metadatagroup = (0, yJ.e)(this, KJ), this.id = JJ, this.type = cJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfObject"), (() => {
          const SJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "id"
          })], FJ = [gX({
            name: "type"
          })], UJ = [gX({
            name: "thumbnail"
          })], eJ = [gX({
            name: "partnumber"
          })], XJ = [gX({
            name: "name"
          })], AJ = [gX({
            name: "pid"
          })], qJ = [gX({
            name: "pindex"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: JJ => "id" in JJ,
              get: JJ => JJ.id,
              set: (JJ, cJ) => {
                JJ.id = cJ
              }
            },
            metadata: SJ
          }, hJ, DJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: JJ => "type" in JJ,
              get: JJ => JJ.type,
              set: (JJ, cJ) => {
                JJ.type = cJ
              }
            },
            metadata: SJ
          }, sJ, nJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: JJ => "thumbnail" in JJ,
              get: JJ => JJ.thumbnail,
              set: (JJ, cJ) => {
                JJ.thumbnail = cJ
              }
            },
            metadata: SJ
          }, GJ, fJ), (0, yJ.d)(null, null, eJ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: JJ => "partnumber" in JJ,
              get: JJ => JJ.partnumber,
              set: (JJ, cJ) => {
                JJ.partnumber = cJ
              }
            },
            metadata: SJ
          }, xJ, rJ), (0, yJ.d)(null, null, XJ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: JJ => "name" in JJ,
              get: JJ => JJ.name,
              set: (JJ, cJ) => {
                JJ.name = cJ
              }
            },
            metadata: SJ
          }, vJ, mJ), (0, yJ.d)(null, null, AJ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pid" in JJ,
              get: JJ => JJ.pid,
              set: (JJ, cJ) => {
                JJ.pid = cJ
              }
            },
            metadata: SJ
          }, QJ, EJ), (0, yJ.d)(null, null, qJ, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pindex" in JJ,
              get: JJ => JJ.pindex,
              set: (JJ, cJ) => {
                JJ.pindex = cJ
              }
            },
            metadata: SJ
          }, VJ, KJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, jJ, {
            kind: "class",
            name: cJ.name,
            metadata: SJ
          }, null, YJ), cJ = JJ.value, SJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SJ
          }), (0, yJ.e)(cJ, YJ)
        })(), cJ
      })(),
      IA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "mesh"
          })],
          FJ = [];
        cJ = class {
          constructor(JJ, cJ) {
            this.vertices = JJ ?? new MA, this.triangles = cJ ?? new wA
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfMesh"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      MA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "vertices"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfVertices"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      bA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ = [wX({
            ns: ZA,
            name: "vertex"
          })],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        cJ = class {
          constructor() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, yJ.e)(this, AJ, void 0), this.y = ((0, yJ.e)(this, qJ), (0, yJ.e)(this, jJ, void 0)), this.z = ((0, yJ.e)(this, YJ), (0, yJ.e)(this, hJ, void 0)), (0, yJ.e)(this, DJ), this.x = JJ, this.y = cJ, this.z = ZJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfVertex"), (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "x"
          })], FJ = [gX({
            name: "y"
          })], UJ = [gX({
            name: "z"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: JJ => "x" in JJ,
              get: JJ => JJ.x,
              set: (JJ, cJ) => {
                JJ.x = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: JJ => "y" in JJ,
              get: JJ => JJ.y,
              set: (JJ, cJ) => {
                JJ.y = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: JJ => "z" in JJ,
              get: JJ => JJ.z,
              set: (JJ, cJ) => {
                JJ.z = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, eJ, {
            kind: "class",
            name: cJ.name,
            metadata: sJ
          }, null, XJ), cJ = JJ.value, sJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          }), (0, yJ.e)(cJ, XJ)
        })(), cJ
      })(),
      wA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "triangles"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfTriangles"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      WA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ = [wX({
            ns: ZA,
            name: "triangle"
          })],
          YJ = [],
          hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [],
          vJ = [],
          mJ = [],
          QJ = [],
          EJ = [],
          VJ = [],
          KJ = [];
        cJ = class {
          constructor(JJ, cJ, ZJ) {
            this.v1 = (0, yJ.e)(this, hJ, void 0), this.v2 = ((0, yJ.e)(this, DJ), (0, yJ.e)(this, sJ, void 0)), this.v3 = ((0, yJ.e)(this, nJ), (0, yJ.e)(this, GJ, void 0)), this.p1 = ((0, yJ.e)(this, fJ), (0, yJ.e)(this, xJ, void 0)), this.p2 = ((0, yJ.e)(this, rJ), (0, yJ.e)(this, vJ, void 0)), this.p3 = ((0, yJ.e)(this, mJ), (0, yJ.e)(this, QJ, void 0)), this.pid = ((0, yJ.e)(this, EJ), (0, yJ.e)(this, VJ, void 0)), (0, yJ.e)(this, KJ), this.v1 = JJ, this.v2 = cJ, this.v3 = ZJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfTriangle"), (() => {
          const SJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "v1"
          })], FJ = [gX({
            name: "v2"
          })], UJ = [gX({
            name: "v3"
          })], eJ = [gX({
            name: "p1"
          })], XJ = [gX({
            name: "p2"
          })], AJ = [gX({
            name: "p3"
          })], qJ = [gX({
            name: "pid"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: JJ => "v1" in JJ,
              get: JJ => JJ.v1,
              set: (JJ, cJ) => {
                JJ.v1 = cJ
              }
            },
            metadata: SJ
          }, hJ, DJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: JJ => "v2" in JJ,
              get: JJ => JJ.v2,
              set: (JJ, cJ) => {
                JJ.v2 = cJ
              }
            },
            metadata: SJ
          }, sJ, nJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: JJ => "v3" in JJ,
              get: JJ => JJ.v3,
              set: (JJ, cJ) => {
                JJ.v3 = cJ
              }
            },
            metadata: SJ
          }, GJ, fJ), (0, yJ.d)(null, null, eJ, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: JJ => "p1" in JJ,
              get: JJ => JJ.p1,
              set: (JJ, cJ) => {
                JJ.p1 = cJ
              }
            },
            metadata: SJ
          }, xJ, rJ), (0, yJ.d)(null, null, XJ, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: JJ => "p2" in JJ,
              get: JJ => JJ.p2,
              set: (JJ, cJ) => {
                JJ.p2 = cJ
              }
            },
            metadata: SJ
          }, vJ, mJ), (0, yJ.d)(null, null, AJ, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: JJ => "p3" in JJ,
              get: JJ => JJ.p3,
              set: (JJ, cJ) => {
                JJ.p3 = cJ
              }
            },
            metadata: SJ
          }, QJ, EJ), (0, yJ.d)(null, null, qJ, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: JJ => "pid" in JJ,
              get: JJ => JJ.pid,
              set: (JJ, cJ) => {
                JJ.pid = cJ
              }
            },
            metadata: SJ
          }, VJ, KJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, jJ, {
            kind: "class",
            name: cJ.name,
            metadata: SJ
          }, null, YJ), cJ = JJ.value, SJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SJ
          }), (0, yJ.e)(cJ, YJ)
        })(), cJ
      })(),
      gA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "components"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.component = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfComponents"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      HA = (() => {
        let JJ, cJ, ZJ, FJ, UJ = [wX({
            ns: ZA,
            name: "component"
          })],
          eJ = [],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [];
        cJ = class {
          constructor(JJ, cJ) {
            this.objectid = (0, yJ.e)(this, XJ, void 0), this.transform = ((0, yJ.e)(this, AJ), (0, yJ.e)(this, qJ, void 0)), (0, yJ.e)(this, jJ), this.objectid = JJ, this.transform = cJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfComponent"), (() => {
          const YJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "objectid"
          })], FJ = [gX({
            name: "transform",
            formatter: QA
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: JJ => "objectid" in JJ,
              get: JJ => JJ.objectid,
              set: (JJ, cJ) => {
                JJ.objectid = cJ
              }
            },
            metadata: YJ
          }, XJ, AJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transform" in JJ,
              get: JJ => JJ.transform,
              set: (JJ, cJ) => {
                JJ.transform = cJ
              }
            },
            metadata: YJ
          }, qJ, jJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, UJ, {
            kind: "class",
            name: cJ.name,
            metadata: YJ
          }, null, eJ), cJ = JJ.value, YJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YJ
          }), (0, yJ.e)(cJ, eJ)
        })(), cJ
      })(),
      PA = (() => {
        let JJ, cJ, ZJ, FJ = [wX({
            ns: ZA,
            name: "basematerials"
          })],
          UJ = [],
          eJ = [],
          XJ = [];
        cJ = class {
          constructor(JJ) {
            this.id = (0, yJ.e)(this, eJ, void 0), this.base = ((0, yJ.e)(this, XJ), []), this.id = JJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfBaseMaterials"), (() => {
          const AJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "id"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: JJ => "id" in JJ,
              get: JJ => JJ.id,
              set: (JJ, cJ) => {
                JJ.id = cJ
              }
            },
            metadata: AJ
          }, eJ, XJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, FJ, {
            kind: "class",
            name: cJ.name,
            metadata: AJ
          }, null, UJ), cJ = JJ.value, AJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AJ
          }), (0, yJ.e)(cJ, UJ)
        })(), cJ
      })(),
      kA = (() => {
        let JJ, cJ, ZJ, FJ, UJ = [wX({
            ns: ZA,
            name: "base"
          })],
          eJ = [],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [];
        cJ = class {
          constructor(JJ, cJ) {
            this.name = (0, yJ.e)(this, XJ, void 0), this.displaycolor = ((0, yJ.e)(this, AJ), (0, yJ.e)(this, qJ, void 0)), (0, yJ.e)(this, jJ), this.name = JJ, this.displaycolor = cJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfBase"), (() => {
          const YJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "name"
          })], FJ = [gX({
            name: "displaycolor"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: JJ => "name" in JJ,
              get: JJ => JJ.name,
              set: (JJ, cJ) => {
                JJ.name = cJ
              }
            },
            metadata: YJ
          }, XJ, AJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "displaycolor" in JJ,
              get: JJ => JJ.displaycolor,
              set: (JJ, cJ) => {
                JJ.displaycolor = cJ
              }
            },
            metadata: YJ
          }, qJ, jJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, UJ, {
            kind: "class",
            name: cJ.name,
            metadata: YJ
          }, null, eJ), cJ = JJ.value, YJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YJ
          }), (0, yJ.e)(cJ, eJ)
        })(), cJ
      })(),
      pA = (() => {
        let JJ, cJ, ZJ = [wX({
            ns: ZA,
            name: "build"
          })],
          FJ = [];
        cJ = class {
          constructor() {
            this.item = []
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfBuild"), (() => {
          const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, yJ.d)(null, JJ = {
            value: cJ
          }, ZJ, {
            kind: "class",
            name: cJ.name,
            metadata: UJ
          }, null, FJ), cJ = JJ.value, UJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UJ
          }), (0, yJ.e)(cJ, FJ)
        })(), cJ
      })(),
      dA = (() => {
        let JJ, cJ, ZJ, FJ, UJ, eJ = [wX({
            ns: ZA,
            name: "item"
          })],
          XJ = [],
          AJ = [],
          qJ = [],
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        cJ = class {
          constructor(JJ, cJ, ZJ) {
            this.objectid = (0, yJ.e)(this, AJ, void 0), this.transform = ((0, yJ.e)(this, qJ), (0, yJ.e)(this, jJ, void 0)), this.partnumber = ((0, yJ.e)(this, YJ), (0, yJ.e)(this, hJ, void 0)), this.metadatagroup = (0, yJ.e)(this, DJ), this.objectid = JJ, this.transform = cJ, this.partnumber = ZJ
          }
        };
        return (0, yJ.f)(cJ, "ThreeMfItem"), (() => {
          const sJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZJ = [gX({
            name: "objectid"
          })], FJ = [gX({
            name: "transform",
            formatter: QA
          })], UJ = [gX({
            name: "partnumber"
          })], (0, yJ.d)(null, null, ZJ, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: JJ => "objectid" in JJ,
              get: JJ => JJ.objectid,
              set: (JJ, cJ) => {
                JJ.objectid = cJ
              }
            },
            metadata: sJ
          }, AJ, qJ), (0, yJ.d)(null, null, FJ, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: JJ => "transform" in JJ,
              get: JJ => JJ.transform,
              set: (JJ, cJ) => {
                JJ.transform = cJ
              }
            },
            metadata: sJ
          }, jJ, YJ), (0, yJ.d)(null, null, UJ, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: JJ => "partnumber" in JJ,
              get: JJ => JJ.partnumber,
              set: (JJ, cJ) => {
                JJ.partnumber = cJ
              }
            },
            metadata: sJ
          }, hJ, DJ), (0, yJ.d)(null, JJ = {
            value: cJ
          }, eJ, {
            kind: "class",
            name: cJ.name,
            metadata: sJ
          }, null, XJ), cJ = JJ.value, sJ && Object.defineProperty(cJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sJ
          }), (0, yJ.e)(cJ, XJ)
        })(), cJ
      })();
    class zA {
      constructor(JJ, cJ) {
        this._object = new SA(JJ, cJ)
      }
      withName(JJ) {
        return this._object.name = JJ, this
      }
      withThumbnail(JJ) {
        return this._object.thumbnail = JJ, this
      }
      withProperty(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = JJ, this._object.id = cJ, this
      }
      build() {
        return this._object
      }
      reset(JJ, cJ) {
        this._object = new SA(JJ, cJ)
      }
    }
    class NA extends zA {
      constructor(JJ) {
        super(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.model), this._object.content = new gA
      }
      withComponent(JJ, cJ) {
        return this._object.content.component.push(new HA(JJ, cJ)), this
      }
    }
    class OA extends zA {
      constructor(JJ) {
        super(JJ, eA.model)
      }
      withPostProcessHandlers(JJ, cJ) {
        return this._vh = JJ, this._th = cJ, this
      }
      withData(JJ) {
        return this._object.content = this._buildMesh(JJ), this
      }
      withMaterial(JJ, cJ) {
        return this._object.pid = JJ, this._object.pindex = cJ, this
      }
      _buildMesh(JJ) {
        const cJ = this._buildVertices(JJ.positions),
          ZJ = this._buildTriangle(JJ.indices);
        return new IA(cJ, ZJ)
      }
      _buildVertices(JJ) {
        const cJ = new MA;
        if (JJ)
          for (let ZJ = 0; ZJ < JJ.length;) {
            const FJ = JJ[ZJ++],
              UJ = JJ[ZJ++],
              eJ = JJ[ZJ++];
            let XJ = new bA(FJ, UJ, eJ);
            this._vh && (XJ = this._vh(XJ)), cJ.vertex.push(XJ)
          }
        return cJ
      }
      _buildTriangle(JJ) {
        const cJ = new wA;
        if (JJ)
          for (let ZJ = 0; ZJ < JJ.length;) {
            const FJ = JJ[ZJ++],
              UJ = JJ[ZJ++],
              eJ = JJ[ZJ++];
            let XJ = new WA(FJ, UJ, eJ);
            this._th && (XJ = this._th(XJ)), cJ.triangle.push(XJ)
          }
        return cJ
      }
    }
    class TA {
      constructor(JJ) {
        this._m = new PA(JJ)
      }
      withColor(JJ, cJ) {
        this._m.base = this._m.base ?? [];
        let ZJ = this._m.base.find((cJ => cJ.name.toLowerCase() === JJ.toLowerCase()));
        return ZJ ? (ZJ.displaycolor = this._rgbaToHex(cJ), this) : (ZJ = new kA(JJ, this._rgbaToHex(cJ)), this._m.base.push(ZJ), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(JJ) {
        const cJ = JJ => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(JJ, 1 / 2.2)))),
          ZJ = cJ(JJ.r).toString(16).padStart(2, "0").toUpperCase(),
          FJ = cJ(JJ.g).toString(16).padStart(2, "0").toUpperCase(),
          UJ = cJ(JJ.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof JJ.a) {
          return `#${ZJ}${FJ}${UJ}${Math.round(Math.min(255,Math.max(0,255*JJ.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ZJ}${FJ}${UJ}`
      }
    }
    class CA {
      constructor() {
        this._model = new EA, this._objects = new Map
      }
      withMetaData(JJ, cJ, ZJ, FJ) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new VA(JJ, cJ, ZJ, FJ)), this
      }
      withMaterial(JJ) {
        return JJ instanceof TA && (JJ = JJ.build()), JJ && (this._model.resources = this._model.resources ?? new yA, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(JJ)), this
      }
      withMesh(JJ) {
        return JJ instanceof OA && (JJ = JJ.build()), this._model.resources = this._model.resources ?? new yA, this._model.resources.object.push(JJ), this
      }
      withComponents(JJ) {
        return JJ instanceof NA && (JJ = JJ.build()), this._model.resources = this._model.resources ?? new yA, this._model.resources.object.push(JJ), this
      }
      withBuild(JJ, cJ, ZJ) {
        return this._model.build = this._model.build ?? new pA, this._model.build.item?.push(new dA(JJ, cJ, ZJ)), this
      }
      withUnit(JJ) {
        return this._model.unit = JJ, this
      }
      reset() {
        return this._model = new EA, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    CA.KnownMetaSet = new Set(EA.KnownMeta.map((JJ => JJ.toLowerCase())));
    class uA {
      withContentType(JJ) {
        this._cts || (this._cts = new GA);
        const cJ = this._cts.items;
        return cJ.some((cJ => cJ.ext === JJ.ext && cJ.ct === JJ.ct)) || cJ.push(JJ), this
      }
      withRelationship(JJ) {
        this._rs || (this._rs = new xA);
        const cJ = this._rs.items;
        return cJ.some((cJ => cJ.id === JJ.id)) || cJ.push(JJ), this.withContentType(new fA("rels", qA.Relationships)), this
      }
      withModel(JJ) {
        return JJ instanceof CA && (JJ = JJ.build()), this._m = JJ, this.withContentType(new fA("model", qA.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const JJ = `${YA}${hA}`;
        if (!this._rs) {
          const cJ = `/${JJ}`;
          this.withRelationship(new rA("rel0", nA.ThreeDimModel, cJ))
        }
        return new vA(this._cts, this._rs, this._m)
      }
    }
    class iA {
      constructor(JJ) {
        this._o = JJ
      }
      get options() {
        return this._o
      }
      async serializeAsync(JJ) {
        const cJ = await this.ensureZipLibReadyAsync();
        if (!cJ) return;
        const ZJ = cJ.Zip,
          FJ = cJ.ZipDeflate;
        if (!ZJ || !FJ) throw new Error("fflate Zip / ZipDeflate not available");
        const UJ = function(JJ, cJ, ZJ) {
          const UJ = new FJ(cJ, {
            level: 6
          });
          JJ.add(UJ);
          const eJ = function(JJ) {
              return {
                push: (cJ, ZJ) => JJ.push(cJ, ZJ)
              }
            }(UJ),
            XJ = new cA(eJ),
            AJ = new lX(XJ).dec("1.0", "UTF-8");
          new BX(AJ).serialize(ZJ), XJ.finish()
        };
        for (var eJ = arguments.length, XJ = new Array(eJ > 1 ? eJ - 1 : 0), AJ = 1; AJ < eJ; AJ++) XJ[AJ - 1] = arguments[AJ];
        const qJ = this.toDocument(...XJ);
        if (!qJ) return;
        const jJ = new ZJ(JJ);
        UJ(jJ, sA, qJ.contentTypes), UJ(jJ, `${jA}${DA}`, qJ.relationships), UJ(jJ, `${YA}${hA}`, qJ.model), jJ.end()
      }
      toDocument() {
        const JJ = (new CA).withUnit(this._o?.unit ?? UA.millimeter);
        if (this.options.metadata)
          for (const UJ in this.options.metadata) JJ.withMetaData(UJ, this.options.metadata[UJ]);
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return (new uA).withModel(this.toModel(JJ, ...ZJ)).build()
      }
    }
    class RA {
      static async SerializeToMemoryAsync(JJ) {
        const cJ = new Array;
        let ZJ = 0;
        for (var FJ = arguments.length, UJ = new Array(FJ > 1 ? FJ - 1 : 0), eJ = 1; eJ < FJ; eJ++) UJ[eJ - 1] = arguments[eJ];
        if (await JJ.serializeAsync((function(JJ, FJ, UJ) {
            cJ.push(FJ), ZJ += FJ.length
          }), ...UJ), !ZJ) return;
        const XJ = new Uint8Array(ZJ);
        let AJ = 0;
        for (const qJ of cJ) XJ.set(qJ, AJ), AJ += qJ.length;
        return XJ
      }
    }
    class LA {}
    LA.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class aA {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = JJ, this._to = cJ, this._step = ZJ, this._i = JJ
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const JJ = this._i;
        return this._i += this._step, JJ
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class BA extends iA {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...BA.DefaultOptions,
          ...JJ
        })
      }
      toModel(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        ZJ = ZJ.filter((JJ => JJ instanceof jF.d || JJ instanceof sJ.d));
        const UJ = new aA,
          eJ = JJ,
          XJ = new Map,
          AJ = this.options.exportInstances ? [] : null;
        for (let qJ = 0; qJ < ZJ.length; qJ++) {
          const JJ = ZJ[qJ];
          if (JJ instanceof sJ.d) {
            AJ?.push(JJ);
            continue
          }
          const cJ = JJ.name || `mesh${qJ}`,
            FJ = JJ.getWorldMatrix(),
            jJ = this._handleBabylonTo3mfMatrixTransformToRef(FJ, mA.Zero()),
            YJ = JJ.aE;
          if (void 0 === YJ) continue;
          const hJ = 1 == YJ.length;
          for (let ZJ = 0; ZJ < YJ.length; ZJ++) {
            const FJ = YJ[ZJ],
              AJ = this._extractSubMesh(JJ, FJ);
            if (AJ) {
              const JJ = hJ ? `${cJ}` : `${cJ}_${ZJ}`,
                qJ = new OA(UJ.next()).withData(AJ).withName(JJ).build();
              eJ.withMesh(qJ), eJ.withBuild(qJ.id, jJ), XJ.set(FJ, qJ)
            }
          }
        }
        if (AJ && AJ.length) {
          const JJ = this._groupBy(AJ, (JJ => JJ.uFJ));
          for (const [cJ, ZJ] of Array.from(JJ.entries()))
            if (ZJ && ZJ.length)
              for (let JJ = 0; JJ < ZJ.length; JJ++) {
                const FJ = ZJ[JJ].getWorldMatrix(),
                  UJ = cJ.aE;
                for (let JJ = 0; JJ < UJ.length; JJ++) {
                  const cJ = UJ[JJ],
                    ZJ = XJ.get(cJ);
                  ZJ && eJ.withBuild(ZJ.id, this._handleBabylonTo3mfMatrixTransformToRef(FJ, mA.Zero()))
                }
              }
        }
        return eJ.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const JJ = globalThis;
          return JJ.fflate || await UJ.Tools.LoadScriptAsync(LA.FFLATEUrl), JJ.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(JJ, cJ) {
        const ZJ = JJ.QXJ();
        if (!ZJ) return;
        const FJ = JJ.getVerticesData(BA._PositionKind);
        if (!FJ) return;
        if (0 == cJ.indexStart && cJ.indexCount == ZJ.length) return {
          positions: FJ,
          indices: ZJ
        };
        const UJ = cJ.indexStart,
          eJ = new Map,
          XJ = [],
          AJ = new Uint32Array(cJ.indexCount);
        for (let qJ = 0; qJ < cJ.indexCount; qJ++) {
          const JJ = ZJ[UJ + qJ];
          let cJ = eJ.get(JJ);
          if (void 0 === cJ) {
            cJ = eJ.size, eJ.set(JJ, cJ);
            const ZJ = 3 * JJ;
            XJ.push(FJ[ZJ], FJ[ZJ + 1], FJ[ZJ + 2])
          }
          AJ[qJ] = cJ
        }
        return {
          positions: new Float32Array(XJ),
          indices: AJ
        }
      }
      _groupBy(JJ, cJ) {
        const ZJ = new Map;
        for (const FJ of JJ) {
          const JJ = cJ(FJ),
            UJ = ZJ.get(JJ);
          UJ ? UJ.push(FJ) : ZJ.set(JJ, [FJ])
        }
        return ZJ
      }
      _handleBabylonTo3mfMatrixTransformToRef(JJ, cJ) {
        const ZJ = JJ.multiplyToRef(BA._R_BJS_TO_3MF, dJ.b.Zero()).m;
        return cJ.values = [ZJ[0], ZJ[1], ZJ[2], ZJ[4], ZJ[5], ZJ[6], ZJ[8], ZJ[9], ZJ[10], ZJ[12], ZJ[13], ZJ[14]], cJ
      }
    }
    BA.DefaultOptions = {
      unit: UA.meter,
      exportInstances: !1
    }, BA._PositionKind = "position", BA._R_BJS_TO_3MF = dJ.b.RotationX(Math.PI / 2).multiply(dJ.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);