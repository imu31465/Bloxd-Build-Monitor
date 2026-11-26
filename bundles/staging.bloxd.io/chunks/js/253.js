export const id = 253;
export const ids = [253, 258];
export const modules = {
  44725: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(44663),
      YV = xV(41252);
    let UV = !1;

    function yV() {
      UV || (UV = !0, YV.c.prototype._sphericalPolynomialTargetSize = 0, YV.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(YV.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = JV.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((VV => {
              this._texture._sphericalPolynomial = VV, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(VV) {
          this._texture && (this._texture._sphericalPolynomial = VV)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38387: (VV, eV, xV) => {
    xV.d(eV, {
      Color3: () => JV.d,
      c: () => JV.h
    });
    var JV = xV(38389);
    (0, JV.i)()
  },
  38908: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38917);
    class YV {
      static GetPlanes(VV) {
        const eV = [];
        for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
        return YV.GetPlanesToRef(VV, eV), eV
      }
      static GetNearPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
      }
      static GetFarPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
      }
      static GetLeftPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
      }
      static GetRightPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[0], eV.normal.y = xV[7] - xV[4], eV.normal.z = xV[11] - xV[8], eV.d = xV[15] - xV[12], eV.normalize()
      }
      static GetTopPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[1], eV.normal.y = xV[7] - xV[5], eV.normal.z = xV[11] - xV[9], eV.d = xV[15] - xV[13], eV.normalize()
      }
      static GetBottomPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[1], eV.normal.y = xV[7] + xV[5], eV.normal.z = xV[11] + xV[9], eV.d = xV[15] + xV[13], eV.normalize()
      }
      static GetPlanesToRef(VV, eV) {
        YV.GetNearPlaneToRef(VV, eV[0]), YV.GetFarPlaneToRef(VV, eV[1]), YV.GetLeftPlaneToRef(VV, eV[2]), YV.GetRightPlaneToRef(VV, eV[3]), YV.GetTopPlaneToRef(VV, eV[4]), YV.GetBottomPlaneToRef(VV, eV[5])
      }
      static IsPointInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; xV++)
          if (eV[xV].dotCoordinate(VV) < 0) return !1;
        return !0
      }
    }
  },
  38917: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV, YV) {
        this.normal = new JV.o(VV, eV, xV), this.d = YV
      }
      WYV() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let VV = this.normal.getHashCode();
        return VV = 397 * VV ^ this.d, VV
      }
      normalize() {
        const VV = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let eV = 0;
        return 0 !== VV && (eV = 1 / VV), this.normal.x *= eV, this.normal.y *= eV, this.normal.z *= eV, this.d *= eV, this
      }
      transform(VV) {
        const eV = YV._TmpMatrix;
        VV.invertToRef(eV);
        const xV = eV.m,
          JV = this.normal.x,
          UV = this.normal.y,
          yV = this.normal.z,
          pV = this.d,
          QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
          nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
          wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
          ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
        return new YV(QV, nV, wV, ZV)
      }
      dotCoordinate(VV) {
        return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
      }
      copyFromPoints(VV, eV, xV) {
        const JV = eV.x - VV.x,
          YV = eV.y - VV.y,
          UV = eV.z - VV.z,
          yV = xV.x - VV.x,
          pV = xV.y - VV.y,
          QV = xV.z - VV.z,
          nV = YV * QV - UV * pV,
          wV = UV * yV - JV * QV,
          ZV = JV * pV - YV * yV,
          vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
        let rV;
        return rV = 0 !== vV ? 1 / vV : 0, this.normal.x = nV * rV, this.normal.y = wV * rV, this.normal.z = ZV * rV, this.d = -(this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z), this
      }
      isFrontFacingTo(VV, eV) {
        return JV.o.Dot(this.normal, VV) <= eV
      }
      signedDistanceTo(VV) {
        return JV.o.Dot(VV, this.normal) + this.d
      }
      static FromArray(VV) {
        return new YV(VV[0], VV[1], VV[2], VV[3])
      }
      static FromPoints(VV, eV, xV) {
        const JV = new YV(0, 0, 0, 0);
        return JV.copyFromPoints(VV, eV, xV), JV
      }
      static FromPositionAndNormal(VV, eV) {
        const xV = new YV(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(VV, eV, xV)
      }
      static FromPositionAndNormalToRef(VV, eV, xV) {
        return xV.normal.iG(eV), xV.normal.normalize(), xV.d = -VV.dot(xV.normal), xV
      }
      static SignedDistanceToPlaneFromPositionAndNormal(VV, eV, xV) {
        const YV = -(eV.x * VV.x + eV.y * VV.y + eV.z * VV.z);
        return JV.o.Dot(xV, eV) + YV
      }
    }
    YV._TmpMatrix = JV.d.Identity()
  },
  38263: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Matrix: () => JV.d,
      Quaternion: () => JV.h,
      RegisterMathVector: () => JV.j,
      TmpVectors: () => JV.l,
      Vector2: () => JV.n,
      Ik: () => JV.o,
      Vector4: () => JV.q
    });
    var JV = xV(38269);
    (0, JV.j)()
  },
  39240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV, JV) {
        this.x = VV, this.y = eV, this.width = xV, this.height = JV
      }
      toGlobal(VV, eV) {
        return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
      }
      toGlobalToRef(VV, eV, xV) {
        return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
      }
      clone() {
        return new JV(this.x, this.y, this.width, this.height)
      }
    }
  },
  44663: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(41248),
      yV = xV(38272),
      pV = xV(38389);
    class QV {
      constructor(VV, eV, xV, JV) {
        this.name = VV, this.worldAxisForNormal = eV, this.worldAxisForFileX = xV, this.worldAxisForFileY = JV
      }
    }
    class nV {
      static _NearestPow2Floor(VV) {
        return VV <= 1 ? 1 : 1 << Math.floor(Math.log2(VV))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(VV) {
        if (!VV.isCube) return null;
        VV.dD()?.sk().flushFramebuffer();
        const eV = VV.getSize().width,
          xV = VV._sphericalPolynomialTargetSize,
          JV = xV > 0 ? this._NearestPow2Floor(xV) : 0,
          YV = !VV.noMipmap && !0 === VV._texture?.generateMipMaps,
          UV = JV > 0 && JV < eV && YV,
          yV = UV ? Math.max(0, Math.round(Math.log2(eV / JV))) : 0,
          pV = UV ? Math.max(1, Math.floor(eV / Math.pow(2, yV))) : eV,
          QV = VV.readPixels(0, yV, void 0, !1),
          nV = VV.readPixels(1, yV, void 0, !1);
        let wV, ZV;
        VV.isRenderTarget ? (wV = VV.readPixels(3, yV, void 0, !1), ZV = VV.readPixels(2, yV, void 0, !1)) : (wV = VV.readPixels(2, yV, void 0, !1), ZV = VV.readPixels(3, yV, void 0, !1));
        const vV = VV.readPixels(4, yV, void 0, !1),
          rV = VV.readPixels(5, yV, void 0, !1),
          kV = VV.gammaSpace,
          bV = JV > 0 && JV < eV && !UV;
        return new Promise((VV => {
          Promise.all([nV, QV, wV, ZV, vV, rV]).then((xV => {
            let [YV, UV, yV, QV, nV, wV] = xV, ZV = pV;
            if (bV) {
              const VV = 4;
              YV = this._DownsampleFace(YV, eV, JV, VV), UV = this._DownsampleFace(UV, eV, JV, VV), yV = this._DownsampleFace(yV, eV, JV, VV), QV = this._DownsampleFace(QV, eV, JV, VV), nV = this._DownsampleFace(nV, eV, JV, VV), wV = this._DownsampleFace(wV, eV, JV, VV), ZV = JV
            }
            const vV = {
              size: ZV,
              right: UV,
              left: YV,
              up: yV,
              down: QV,
              front: nV,
              back: wV,
              format: 5,
              type: YV instanceof Float32Array ? 1 : 0,
              gammaSpace: kV
            };
            VV(this.ConvertCubeMapToSphericalPolynomial(vV))
          }))
        }))
      }
      static _AreaElement(VV, eV) {
        return Math.atan2(VV * eV, Math.sqrt(VV * VV + eV * eV + 1))
      }
      static _DownsampleFace(VV, eV, xV, JV) {
        const YV = VV instanceof Float32Array ? VV : Float32Array.from(VV),
          UV = xV * xV * JV,
          yV = new Float32Array(UV),
          pV = eV / xV,
          QV = 1 / (pV * pV);
        for (let wV = 0; wV < xV; wV++) {
          const VV = Math.floor(wV * pV),
            UV = Math.floor((wV + 1) * pV);
          for (let nV = 0; nV < xV; nV++) {
            const ZV = Math.floor(nV * pV),
              vV = Math.floor((nV + 1) * pV),
              rV = (wV * xV + nV) * JV;
            for (let xV = 0; xV < JV; xV++) {
              let pV = 0;
              for (let yV = VV; yV < UV; yV++)
                for (let VV = ZV; VV < vV; VV++) pV += YV[(yV * eV + VV) * JV + xV];
              yV[rV + xV] = pV * QV
            }
          }
        }
        if (VV instanceof Float32Array) return yV;
        const nV = new(0, VV.constructor)(UV);
        for (let wV = 0; wV < UV; wV++) nV[wV] = yV[wV] + .5 | 0;
        return nV
      }
      static ConvertCubeMapToSphericalPolynomial(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = eV > 0 ? this._NearestPow2Floor(eV) : 0;
        if (xV > 0 && VV.size > xV) {
          const eV = 5 === VV.format ? 4 : 3,
            JV = ["right", "left", "up", "down", "front", "back"],
            YV = {};
          for (const UV of JV) YV[UV] = this._DownsampleFace(VV[UV], VV.size, xV, eV);
          VV = {
            ...VV,
            ...YV,
            size: xV
          }
        }
        const JV = new UV.e;
        let QV = 0;
        const nV = 2 / VV.size,
          wV = nV,
          ZV = .5 * nV,
          vV = ZV - 1;
        for (let UV = 0; UV < 6; UV++) {
          const eV = this._FileFaces[UV],
            xV = VV[eV.name];
          let rV = vV;
          const kV = 5 === VV.format ? 4 : 3;
          for (let UV = 0; UV < VV.size; UV++) {
            let bV = vV;
            for (let wV = 0; wV < VV.size; wV++) {
              const vV = eV.worldAxisForFileX.scale(bV).add(eV.worldAxisForFileY.scale(rV)).add(eV.worldAxisForNormal);
              vV.normalize();
              const EV = this._AreaElement(bV - ZV, rV - ZV) - this._AreaElement(bV - ZV, rV + ZV) - this._AreaElement(bV + ZV, rV - ZV) + this._AreaElement(bV + ZV, rV + ZV);
              let BV = xV[UV * VV.size * kV + wV * kV + 0],
                jV = xV[UV * VV.size * kV + wV * kV + 1],
                qV = xV[UV * VV.size * kV + wV * kV + 2];
              isNaN(BV) && (BV = 0), isNaN(jV) && (jV = 0), isNaN(qV) && (qV = 0), 0 === VV.type && (BV /= 255, jV /= 255, qV /= 255), VV.gammaSpace && (BV = Math.pow((0, YV.Clamp)(BV), yV.f), jV = Math.pow((0, YV.Clamp)(jV), yV.f), qV = Math.pow((0, YV.Clamp)(qV), yV.f));
              const tV = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const VV = Math.max(BV, jV, qV);
                if (VV > tV) {
                  const eV = tV / VV;
                  BV *= eV, jV *= eV, qV *= eV
                }
              } else BV = (0, YV.Clamp)(BV, 0, tV), jV = (0, YV.Clamp)(jV, 0, tV), qV = (0, YV.Clamp)(qV, 0, tV);
              const FV = new pV.d(BV, jV, qV);
              JV.addLight(vV, FV, EV), QV += EV, bV += nV
            }
            rV += wV
          }
        }
        const rV = 6 * (4 * Math.PI) / 6 / QV;
        return JV.scaleInPlace(rV), JV.convertIncidentRadianceToIrradiance(), JV.convertIrradianceToLambertianRadiance(), UV.f.FromHarmonics(JV)
      }
    }
    nV._FileFaces = [new QV("right", new JV.o(1, 0, 0), new JV.o(0, 0, -1), new JV.o(0, -1, 0)), new QV("left", new JV.o(-1, 0, 0), new JV.o(0, 0, 1), new JV.o(0, -1, 0)), new QV("up", new JV.o(0, 1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, 1)), new QV("down", new JV.o(0, -1, 0), new JV.o(1, 0, 0), new JV.o(0, 0, -1)), new QV("front", new JV.o(0, 0, 1), new JV.o(1, 0, 0), new JV.o(0, -1, 0)), new QV("back", new JV.o(0, 0, -1), new JV.o(-1, 0, 0), new JV.o(0, -1, 0))], nV.MAX_HDRI_VALUE = 4096, nV.PRESERVE_CLAMPED_COLORS = !1
  },
  44529: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV.h,
      h: () => JV.r
    });
    var JV = xV(41300);
    (0, JV.x)()
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  44706: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(44697),
      YV = xV(44714);
    class UV {
      static ExpandRGBDTexture(VV) {
        const eV = VV._texture;
        if (!eV || !VV.isRGBD) return;
        const YV = eV.sk(),
          UV = YV.getCaps(),
          yV = eV.isReady;
        let pV = !1;
        UV.textureHalfFloatRender && UV.textureHalfFloatLinearFiltering ? (pV = !0, eV.type = 2) : UV.textureFloatRender && UV.textureFloatLinearFiltering && (pV = !0, eV.type = 1), pV && (eV.isReady = !1, eV._isRGBD = !1, eV.invertY = !1);
        const QV = async () => {
          const UV = YV.isWebGPU,
            yV = UV ? 1 : 0;
          eV.isReady = !1, UV ? await xV.e(651).then((() => xV(64410))) : await xV.e(633).then((() => xV(64417)));
          const pV = new JV.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, YV, !1, void 0, eV.type, void 0, null, !1, void 0, yV);
          pV.externalTextureSamplerBinding = !0;
          const QV = YV.createRenderTargetTexture(eV.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: eV.samplingMode,
            type: eV.type,
            format: 5
          });
          pV.onEffectCreatedObservable.addOnce((xV => {
            xV.executeWhenCompiled((() => {
              pV.onApply = VV => {
                VV._bindTexture("textureSampler", eV), VV.setFloat2("scale", 1, 1)
              }, VV.dD()?.postProcessManager.directRender([pV], QV, !0), YV.restoreDefaultFramebuffer(), YV._releaseTexture(eV), pV && pV.dispose(), QV._swapAndDie(eV), eV.isReady = !0
            }))
          }))
        };
        pV && (yV ? QV() : VV.onLoadObservable.addOnce(QV))
      }
      static async EncodeTextureToRGBD(VV, eV) {
        let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return eV.sk().isWebGPU ? await xV.e(652).then((() => xV(64429))) : await xV.e(634).then((() => xV(64425))), await (0, YV.d)("rgbdEncode", VV, eV, JV, 1, 5)
      }
    }
  },
  64272: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AsyncLoop: () => JV.c,
      RegisterTools: () => JV.g,
      Tools: () => JV.j,
      className: () => JV.l
    });
    var JV = xV(41341);
    (0, JV.g)()
  },
  44740: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    class JV {
      constructor(VV) {
        this._pendingActions = new Array, this._workerInfos = VV.map((VV => ({
          workerPromise: Promise.resolve(VV),
          idle: !0
        })))
      }
      dispose() {
        for (const VV of this._workerInfos) VV.workerPromise.then((VV => {
          VV.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(VV) {
        this._executeOnIdleWorker(VV) || this._pendingActions.push(VV)
      }
      _executeOnIdleWorker(VV) {
        for (const eV of this._workerInfos)
          if (eV.idle) return this._execute(eV, VV), !0;
        return !1
      }
      _execute(VV, eV) {
        VV.idle = !1, VV.workerPromise.then((xV => {
          eV(xV, (() => {
            const eV = this._pendingActions.shift();
            eV ? this._execute(VV, eV) : VV.idle = !0
          }))
        }))
      }
    }
    class YV extends JV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV.DefaultOptions;
        super([]), this._maxWorkers = VV, this._createWorkerAsync = eV, this._options = xV
      }
      push(VV) {
        if (!this._executeOnIdleWorker(VV))
          if (this._workerInfos.length < this._maxWorkers) {
            const eV = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(eV), this._execute(eV, VV)
          } else this._pendingActions.push(VV)
      }
      _execute(VV, eV) {
        VV.timeoutId && (clearTimeout(VV.timeoutId), delete VV.timeoutId), super._execute(VV, ((xV, JV) => {
          eV(xV, (() => {
            JV(), VV.idle && (VV.timeoutId = setTimeout((() => {
              VV.workerPromise.then((VV => {
                VV.terminate()
              }));
              const eV = this._workerInfos.indexOf(VV); - 1 !== eV && this._workerInfos.splice(eV, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    YV.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64316: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AbstractThreeMfSerializer: () => Kp,
      BVHExporter: () => Ny,
      ContentTypeFileName: () => rp,
      DefaultXmlSerializerFormatOptions: () => ly,
      DefaultXmlSerializerNumberOptions: () => hy,
      EXT_lights_area: () => EY,
      EXT_mesh_gpu_instancing: () => oJ,
      EXT_texture_avif: () => Yy,
      EXT_texture_webp: () => Vy,
      GLTF2Export: () => iJ,
      GLTFData: () => nV,
      GetXmlFieldMeta: () => iy,
      GetXmlName: () => Cy,
      IsQualifiedName: () => Xy,
      KHR_draco_mesh_compression: () => IJ,
      KHR_interactivity: () => nY,
      KHR_lights_punctual: () => UY,
      KHR_materials_anisotropy: () => tY,
      KHR_materials_clearcoat: () => NY,
      KHR_materials_coat: () => RY,
      KHR_materials_diffuse_roughness: () => CU,
      KHR_materials_diffuse_transmission: () => oY,
      KHR_materials_dispersion: () => LY,
      KHR_materials_emissive_strength: () => HY,
      KHR_materials_fuzz: () => wU,
      KHR_materials_ior: () => IY,
      KHR_materials_iridescence: () => eU,
      KHR_materials_openpbr: () => hU,
      KHR_materials_sheen: () => UU,
      KHR_materials_specular: () => kU,
      KHR_materials_transmission: () => jU,
      KHR_materials_unlit: () => PU,
      KHR_materials_volume: () => MU,
      KHR_materials_volume_scatter: () => RU,
      KHR_texture_basisu: () => SU,
      KHR_texture_transform: () => mU,
      Known3mfRelationshipTypes: () => kp,
      KnownI3mfContentType: () => Qp,
      Matrix3d: () => tp,
      MatrixFormatter: () => Fp,
      ModelFileName: () => Zp,
      NumberFormatter: () => my,
      OBJExport: () => yV,
      Object3dDirName: () => wp,
      OpenXmlContentTypesNamespace: () => yp,
      OpenXmlRelationshipsNamespace: () => pp,
      RegisterEXT_lights_area: () => jY,
      RegisterEXT_mesh_gpu_instancing: () => hJ,
      RegisterEXT_texture_avif: () => yy,
      RegisterEXT_texture_webp: () => xy,
      RegisterKHR_draco_mesh_compression: () => OJ,
      RegisterKHR_interactivity: () => ZY,
      RegisterKHR_lights_punctual: () => pY,
      RegisterKHR_materials_anisotropy: () => TY,
      RegisterKHR_materials_clearcoat: () => MY,
      RegisterKHR_materials_coat: () => DY,
      RegisterKHR_materials_diffuse_roughness: () => oU,
      RegisterKHR_materials_diffuse_transmission: () => hY,
      RegisterKHR_materials_dispersion: () => mY,
      RegisterKHR_materials_emissive_strength: () => sY,
      RegisterKHR_materials_fuzz: () => vU,
      RegisterKHR_materials_ior: () => OY,
      RegisterKHR_materials_iridescence: () => JU,
      RegisterKHR_materials_openpbr: () => LU,
      RegisterKHR_materials_sheen: () => pU,
      RegisterKHR_materials_specular: () => EU,
      RegisterKHR_materials_transmission: () => tU,
      RegisterKHR_materials_unlit: () => NU,
      RegisterKHR_materials_volume: () => GU,
      RegisterKHR_materials_volume_scatter: () => DU,
      RegisterKHR_texture_basisu: () => dU,
      RegisterKHR_texture_transform: () => HU,
      RelationshipDirName: () => np,
      RelationshipFileName: () => vp,
      ResolveFormatOptions: () => fy,
      ResolveNumberOptions: () => Ly,
      STLExport: () => py,
      ST_ObjectType: () => Up,
      ST_Unit: () => Yp,
      StringXmlWriter: () => Vp,
      ThreeDimModelNamespace: () => xp,
      ThreeMf: () => Hp,
      ThreeMfBase: () => Cp,
      ThreeMfBaseMaterials: () => ip,
      ThreeMfBuild: () => ap,
      ThreeMfComponent: () => Dp,
      ThreeMfComponents: () => gp,
      ThreeMfComponentsBuilder: () => hp,
      ThreeMfContentType: () => Ep,
      ThreeMfContentTypes: () => bp,
      ThreeMfDocument: () => qp,
      ThreeMfDocumentBuilder: () => mp,
      ThreeMfItem: () => op,
      ThreeMfMaterialBuilder: () => Lp,
      ThreeMfMesh: () => Mp,
      ThreeMfMeshBuilder: () => lp,
      ThreeMfMeta: () => Pp,
      ThreeMfMetadataGroup: () => Ap,
      ThreeMfModel: () => Tp,
      ThreeMfModelBuilder: () => fp,
      ThreeMfObject: () => Xp,
      ThreeMfObjectBuilder: () => cp,
      ThreeMfRelationship: () => jp,
      ThreeMfRelationships: () => Bp,
      ThreeMfResources: () => Np,
      ThreeMfSerializer: () => Ip,
      ThreeMfSerializerGlobalConfiguration: () => sp,
      ThreeMfTriangle: () => Rp,
      ThreeMfTriangles: () => Wp,
      ThreeMfVertex: () => Gp,
      ThreeMfVertices: () => zp,
      ToQualifiedString: () => cy,
      TokenType: () => dy,
      TriangleSetsNamespace: () => Jp,
      USDZExportAsync: () => Py,
      Utf8XmlWriterToBytes: () => ep,
      XmlAttr: () => gy,
      XmlBuilder: () => Oy,
      XmlElem: () => Dy,
      XmlIgnore: () => Ry,
      XmlName: () => Wy,
      XmlNameToParts: () => oy,
      XmlSerializer: () => Sy,
      _ConvertToGLTFPBRMetallicRoughness: () => Nx,
      _SolveMetallic: () => Ax,
      __IGLTFExporterExtension: () => pV
    });
    var JV = xV(38263),
      YV = xV(64272),
      UV = xV(41553);
    class yV {
      static OBJ(VV, eV, xV, yV) {
        const pV = [];
        let QV = 1,
          nV = 1;
        eV && (xV || (xV = "mat"), pV.push("mtllib " + xV + ".mtl"));
        for (let wV = 0; wV < VV.length; wV++) {
          const xV = VV[wV],
            ZV = xV.name || `mesh${wV}}`;
          pV.push(`o ${ZV}`);
          let vV = null;
          if (yV) {
            const VV = xV.computeWorldMatrix(!0);
            vV = new JV.Matrix, VV.invertToRef(vV), xV.bakeTransformIntoVertices(VV)
          }
          if (eV) {
            const VV = xV.material;
            VV && pV.push("usemtl " + VV.id)
          }
          const rV = xV.geometry;
          if (!rV) {
            YV.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const kV = rV.getVerticesData("position"),
            bV = rV.getVerticesData("normal"),
            EV = rV.getVerticesData("uv"),
            BV = rV.RYV();
          let jV = 0,
            qV = 0;
          if (!kV || !BV) {
            YV.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const tV = VV[0].dD().useRightHandedSystem ? 1 : -1;
          for (let VV = 0; VV < kV.length; VV += 3) pV.push("v " + kV[VV] * tV + " " + kV[VV + 1] + " " + kV[VV + 2]), jV++;
          if (null != bV)
            for (let VV = 0; VV < bV.length; VV += 3) pV.push("vn " + bV[VV] * tV + " " + bV[VV + 1] + " " + bV[VV + 2]);
          if (null != EV)
            for (let VV = 0; VV < EV.length; VV += 2) pV.push("vt " + EV[VV] + " " + EV[VV + 1]), qV++;
          const FV = ["", "", ""],
            TV = (xV.material || xV.dD().defaultMaterial)._getEffectiveOrientation(xV),
            [PV, AV] = TV === UV.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let VV = 0; VV < BV.length; VV += 3) {
            const eV = [String(BV[VV] + QV), String(BV[VV + PV] + QV), String(BV[VV + AV] + QV)],
              xV = [String(BV[VV] + nV), String(BV[VV + PV] + nV), String(BV[VV + AV] + nV)],
              JV = eV,
              YV = null != EV ? xV : FV,
              UV = null != bV ? eV : FV;
            pV.push("f " + JV[0] + "/" + YV[0] + "/" + UV[0] + " " + JV[1] + "/" + YV[1] + "/" + UV[1] + " " + JV[2] + "/" + YV[2] + "/" + UV[2])
          }
          yV && vV && xV.bakeTransformIntoVertices(vV), QV += jV, nV += qV
        }
        return pV.join("\n")
      }
      static MTL(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const xV = [],
          JV = VV.material;
        xV.push("newmtl " + eV), xV.push("  Ns " + JV.specularPower.toFixed(4)), xV.push("  Ni 1.5000"), xV.push("  d " + JV.alpha.toFixed(4)), xV.push("  Tr 0.0000"), xV.push("  Tf 1.0000 1.0000 1.0000"), xV.push("  illum 2"), xV.push("  Ka " + JV.ambientColor.r.toFixed(4) + " " + JV.ambientColor.g.toFixed(4) + " " + JV.ambientColor.b.toFixed(4)), xV.push("  Kd " + JV.diffuseColor.r.toFixed(4) + " " + JV.diffuseColor.g.toFixed(4) + " " + JV.diffuseColor.b.toFixed(4)), xV.push("  Ks " + JV.specularColor.r.toFixed(4) + " " + JV.specularColor.g.toFixed(4) + " " + JV.specularColor.b.toFixed(4)), xV.push("  Ke " + JV.emissiveColor.r.toFixed(4) + " " + JV.emissiveColor.g.toFixed(4) + " " + JV.emissiveColor.b.toFixed(4));
        JV.ambientTexture && xV.push("  map_Ka " + JV.ambientTexture.name), JV.diffuseTexture && xV.push("  map_Kd " + JV.diffuseTexture.name), JV.specularTexture && xV.push("  map_Ks " + JV.specularTexture.name), JV.bumpTexture && xV.push("  map_bump -imfchan z " + JV.bumpTexture.name), JV.opacityTexture && xV.push("  map_d " + JV.opacityTexture.name);
        return xV.join("\n")
      }
    }
    var pV = 0,
      QV = xV(44529);
    class nV {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const VV in this.files) {
          const eV = this.files[VV],
            xV = new Blob([eV], {
              type: (0, QV.e)(VV)
            });
          YV.Tools.Download(xV, VV)
        }
      }
    }
    var wV = xV(42496),
      ZV = xV(42439),
      vV = xV(44511),
      rV = xV(42445),
      kV = xV(41071),
      bV = xV(38287),
      EV = xV(38387),
      BV = xV(38303);
    const jV = BV.HighestCommonFactor,
      qV = {
        ...BV,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: jV
      };
    var tV = xV(44714),
      FV = xV(42471),
      TV = xV(44480),
      PV = xV(44486),
      AV = xV(44723);
    (0, AV.RegisterDumpTools)();
    var NV = xV(41257),
      XV = xV(41263),
      MV = xV(39870),
      zV = xV(41353),
      GV = xV(41738),
      WV = xV(44706);
    let RV = 0;
    const gV = (VV, eV, xV, JV) => {
        if (!VV[xV]) {
          const YV = VV.useDelayedTextureLoading;
          VV.useDelayedTextureLoading = !1;
          const UV = VV._blockEntityCollection;
          VV._blockEntityCollection = !1;
          const yV = GV.f.CreateFromBase64String(eV, JV + RV++, VV, !0, !1, GV.f.BILINEAR_SAMPLINGMODE);
          VV._blockEntityCollection = UV;
          const pV = VV.sk().getLoadedTexturesCache(),
            QV = pV.indexOf(yV.getInternalTexture()); - 1 !== QV && pV.splice(QV, 1), yV.isRGBD = !0, yV.wrapU = GV.f.CLAMP_ADDRESSMODE, yV.wrapV = GV.f.CLAMP_ADDRESSMODE, VV[xV] = yV, VV.useDelayedTextureLoading = YV, WV.d.ExpandRGBDTexture(yV);
          const nV = VV.sk().uk.add((() => {
            yV.isRGBD = !0;
            const eV = VV.onBeforeRenderObservable.add((() => {
              yV.isReady() && (VV.onBeforeRenderObservable.remove(eV), WV.d.ExpandRGBDTexture(yV))
            }))
          }));
          VV.eC.add((() => {
            VV.sk().uk.remove(nV)
          }))
        }
        return VV[xV]
      },
      DV = VV => gV(VV, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      iV = VV => gV(VV, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      CV = VV => gV(VV, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var aV = xV(41337),
      oV = xV(38269),
      cV = xV(41394),
      hV = xV(41544),
      lV = xV(41621);
    class LV extends hV.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let fV = (() => {
      var VV, eV, xV, JV, YV, UV, yV, pV, QV, nV;
      let wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV = lV.d,
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [];
      return VV = class extends qV {
        get useEnergyConservation() {
          return (0, NV.b)(this, eV, "f")
        }
        set useEnergyConservation(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, NV.b)(this, xV, "f")
        }
        set useSmithVisibilityHeightCorrelated(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get useSphericalHarmonics() {
          return (0, NV.b)(this, JV, "f")
        }
        set useSphericalHarmonics(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, NV.b)(this, YV, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(VV) {
          (0, NV.f)(this, YV, VV, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, NV.b)(this, UV, "f")
        }
        set mixIblRadianceWithIrradiance(VV) {
          (0, NV.f)(this, UV, VV, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, NV.b)(this, yV, "f")
        }
        set useLegacySpecularEnergyConservation(VV) {
          (0, NV.f)(this, yV, VV, "f")
        }
        get baseDiffuseModel() {
          return (0, NV.b)(this, pV, "f")
        }
        set baseDiffuseModel(VV) {
          (0, NV.f)(this, pV, VV, "f")
        }
        get dielectricSpecularModel() {
          return (0, NV.b)(this, QV, "f")
        }
        set dielectricSpecularModel(VV) {
          (0, NV.f)(this, QV, VV, "f")
        }
        get conductorSpecularModel() {
          return (0, NV.b)(this, nV, "f")
        }
        set conductorSpecularModel(VV) {
          (0, NV.f)(this, nV, VV, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(wV) {
          let ZV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(wV, "PBRBRDF", 90, new LV, ZV), this._useEnergyConservation = VV.DEFAULT_USE_ENERGY_CONSERVATION, eV.set(this, (0, NV.l)(this, tV, VV.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, NV.l)(this, FV), VV.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), xV.set(this, (0, NV.l)(this, TV, VV.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, NV.l)(this, PV), VV.DEFAULT_USE_SPHERICAL_HARMONICS), JV.set(this, (0, NV.l)(this, AV, VV.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, NV.l)(this, MV), VV.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), YV.set(this, (0, NV.l)(this, zV, VV.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, NV.l)(this, GV), VV.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), UV.set(this, (0, NV.l)(this, WV, VV.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, NV.l)(this, RV), VV.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), yV.set(this, (0, NV.l)(this, gV, VV.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, NV.l)(this, DV), VV.DEFAULT_DIFFUSE_MODEL), pV.set(this, (0, NV.l)(this, iV, VV.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, NV.l)(this, CV), VV.DEFAULT_DIELECTRIC_SPECULAR_MODEL), QV.set(this, (0, NV.l)(this, aV, VV.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, NV.l)(this, oV), VV.DEFAULT_CONDUCTOR_SPECULAR_MODEL), nV.set(this, (0, NV.l)(this, cV, VV.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, NV.l)(this, hV), this._internalMarkAllSubMeshesAsMiscDirty = wV._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(VV) {
          VV.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, VV.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, VV.SPHERICAL_HARMONICS = this._useSphericalHarmonics, VV.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, VV.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, VV.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, VV.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, VV.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, VV.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, YV = new WeakMap, UV = new WeakMap, yV = new WeakMap, pV = new WeakMap, QV = new WeakMap, nV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(qV[Symbol.metadata] ?? null) : void 0;
        wV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], ZV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], vV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], rV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], kV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], bV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], EV = [(0, XV.J)("baseDiffuseModel"), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], BV = [(0, XV.J)("dielectricSpecularModel"), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], jV = [(0, XV.J)("conductorSpecularModel"), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], (0, NV.i)(VV, null, wV, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: VV => "useEnergyConservation" in VV,
            get: VV => VV.useEnergyConservation,
            set: (VV, eV) => {
              VV.useEnergyConservation = eV
            }
          },
          metadata: eV
        }, tV, FV), (0, NV.i)(VV, null, ZV, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: VV => "useSmithVisibilityHeightCorrelated" in VV,
            get: VV => VV.useSmithVisibilityHeightCorrelated,
            set: (VV, eV) => {
              VV.useSmithVisibilityHeightCorrelated = eV
            }
          },
          metadata: eV
        }, TV, PV), (0, NV.i)(VV, null, vV, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: VV => "useSphericalHarmonics" in VV,
            get: VV => VV.useSphericalHarmonics,
            set: (VV, eV) => {
              VV.useSphericalHarmonics = eV
            }
          },
          metadata: eV
        }, AV, MV), (0, NV.i)(VV, null, rV, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: VV => "useSpecularGlossinessInputEnergyConservation" in VV,
            get: VV => VV.useSpecularGlossinessInputEnergyConservation,
            set: (VV, eV) => {
              VV.useSpecularGlossinessInputEnergyConservation = eV
            }
          },
          metadata: eV
        }, zV, GV), (0, NV.i)(VV, null, kV, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: VV => "mixIblRadianceWithIrradiance" in VV,
            get: VV => VV.mixIblRadianceWithIrradiance,
            set: (VV, eV) => {
              VV.mixIblRadianceWithIrradiance = eV
            }
          },
          metadata: eV
        }, WV, RV), (0, NV.i)(VV, null, bV, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: VV => "useLegacySpecularEnergyConservation" in VV,
            get: VV => VV.useLegacySpecularEnergyConservation,
            set: (VV, eV) => {
              VV.useLegacySpecularEnergyConservation = eV
            }
          },
          metadata: eV
        }, gV, DV), (0, NV.i)(VV, null, EV, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: VV => "baseDiffuseModel" in VV,
            get: VV => VV.baseDiffuseModel,
            set: (VV, eV) => {
              VV.baseDiffuseModel = eV
            }
          },
          metadata: eV
        }, iV, CV), (0, NV.i)(VV, null, BV, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: VV => "dielectricSpecularModel" in VV,
            get: VV => VV.dielectricSpecularModel,
            set: (VV, eV) => {
              VV.dielectricSpecularModel = eV
            }
          },
          metadata: eV
        }, aV, oV), (0, NV.i)(VV, null, jV, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: VV => "conductorSpecularModel" in VV,
            get: VV => VV.conductorSpecularModel,
            set: (VV, eV) => {
              VV.conductorSpecularModel = eV
            }
          },
          metadata: eV
        }, cV, hV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV.DEFAULT_USE_ENERGY_CONSERVATION = !0, VV.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, VV.DEFAULT_USE_SPHERICAL_HARMONICS = !0, VV.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, VV.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, VV.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, VV.DEFAULT_DIFFUSE_MODEL = 0, VV.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, VV.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, VV
    })();
    var mV = xV(41529),
      KV = xV(38389),
      HV = xV(41535),
      uV = xV(41360),
      sV = xV(41606),
      SV = xV(41598),
      IV = xV(41610),
      dV = xV(41583);
    class OV extends hV.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Ve = (() => {
      var VV, eV, xV, JV, YV, UV, yV, pV, QV, nV;
      let wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV = lV.d,
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        LV = [],
        fV = [],
        mV = [],
        HV = [],
        uV = [],
        sV = [],
        IV = [],
        Ve = [],
        ee = [],
        xe = [],
        Je = [],
        Ye = [],
        Ue = [],
        ye = [],
        pe = [];
      return VV = class extends AV {
        get isEnabled() {
          return (0, NV.b)(this, eV, "f")
        }
        set isEnabled(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get indexOfRefraction() {
          return (0, NV.b)(this, xV, "f")
        }
        set indexOfRefraction(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get texture() {
          return (0, NV.b)(this, JV, "f")
        }
        set texture(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, NV.b)(this, YV, "f")
        }
        set useRoughnessFromMainTexture(VV) {
          (0, NV.f)(this, YV, VV, "f")
        }
        get textureRoughness() {
          return (0, NV.b)(this, UV, "f")
        }
        set textureRoughness(VV) {
          (0, NV.f)(this, UV, VV, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, NV.b)(this, yV, "f")
        }
        set remapF0OnInterfaceChange(VV) {
          (0, NV.f)(this, yV, VV, "f")
        }
        get bumpTexture() {
          return (0, NV.b)(this, pV, "f")
        }
        set bumpTexture(VV) {
          (0, NV.f)(this, pV, VV, "f")
        }
        get isTintEnabled() {
          return (0, NV.b)(this, QV, "f")
        }
        set isTintEnabled(VV) {
          (0, NV.f)(this, QV, VV, "f")
        }
        get tintTexture() {
          return (0, NV.b)(this, nV, "f")
        }
        set tintTexture(VV) {
          (0, NV.f)(this, nV, VV, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(wV) {
          let ZV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(wV, "PBRClearCoat", 100, new OV, ZV), this._isEnabled = !1, eV.set(this, (0, NV.l)(this, MV, !1)), this.intensity = ((0, NV.l)(this, zV), (0, NV.l)(this, GV, 1)), this.roughness = ((0, NV.l)(this, WV), (0, NV.l)(this, RV, 0)), this._indexOfRefraction = ((0, NV.l)(this, gV), VV._DefaultIndexOfRefraction), xV.set(this, (0, NV.l)(this, DV, VV._DefaultIndexOfRefraction)), this._texture = ((0, NV.l)(this, iV), null), JV.set(this, (0, NV.l)(this, CV, null)), this._useRoughnessFromMainTexture = ((0, NV.l)(this, aV), !0), YV.set(this, (0, NV.l)(this, oV, !0)), this._textureRoughness = ((0, NV.l)(this, cV), null), UV.set(this, (0, NV.l)(this, hV, null)), this._remapF0OnInterfaceChange = ((0, NV.l)(this, LV), !0), yV.set(this, (0, NV.l)(this, fV, !0)), this._bumpTexture = ((0, NV.l)(this, mV), null), pV.set(this, (0, NV.l)(this, HV, null)), this._isTintEnabled = ((0, NV.l)(this, uV), !1), QV.set(this, (0, NV.l)(this, sV, !1)), this.tintColor = ((0, NV.l)(this, IV), (0, NV.l)(this, Ve, KV.d.White())), this.tintColorAtDistance = ((0, NV.l)(this, ee), (0, NV.l)(this, xe, 1)), this.tintThickness = ((0, NV.l)(this, Je), (0, NV.l)(this, Ye, 1)), this._tintTexture = ((0, NV.l)(this, Ue), null), nV.set(this, (0, NV.l)(this, ye, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NV.l)(this, pe), this._internalMarkAllSubMeshesAsTexturesDirty = wV._dirtyCallbacks[1]
        }
        isReadyForSubMesh(VV, eV, xV) {
          if (!this._isEnabled) return !0;
          const JV = this._material._disableBumpMap;
          if (VV._areTexturesDirty && eV.texturesEnabled) {
            if (this._texture && SV.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && SV.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (xV.getCaps().standardDerivatives && this._bumpTexture && SV.b.ClearCoatBumpTextureEnabled && !JV && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && SV.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(eV, xV) {
          this._isEnabled ? (eV.CLEARCOAT = !0, eV.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, eV.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, eV._areTexturesDirty && xV.texturesEnabled && (this._texture && SV.b.ClearCoatTextureEnabled ? (0, dV.Y)(this._texture, eV, "CLEARCOAT_TEXTURE") : eV.CLEARCOAT_TEXTURE = !1, this._textureRoughness && SV.b.ClearCoatTextureEnabled ? (0, dV.Y)(this._textureRoughness, eV, "CLEARCOAT_TEXTURE_ROUGHNESS") : eV.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && SV.b.ClearCoatBumpTextureEnabled ? (0, dV.Y)(this._bumpTexture, eV, "CLEARCOAT_BUMP") : eV.CLEARCOAT_BUMP = !1, eV.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === VV._DefaultIndexOfRefraction, this._isTintEnabled ? (eV.CLEARCOAT_TINT = !0, this._tintTexture && SV.b.ClearCoatTintTextureEnabled ? ((0, dV.Y)(this._tintTexture, eV, "CLEARCOAT_TINT_TEXTURE"), eV.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : eV.CLEARCOAT_TINT_TEXTURE = !1) : (eV.CLEARCOAT_TINT = !1, eV.CLEARCOAT_TINT_TEXTURE = !1))) : (eV.CLEARCOAT = !1, eV.CLEARCOAT_TEXTURE = !1, eV.CLEARCOAT_TEXTURE_ROUGHNESS = !1, eV.CLEARCOAT_BUMP = !1, eV.CLEARCOAT_TINT = !1, eV.CLEARCOAT_TINT_TEXTURE = !1, eV.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, eV.CLEARCOAT_DEFAULTIOR = !1, eV.CLEARCOAT_TEXTUREDIRECTUV = 0, eV.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, eV.CLEARCOAT_BUMPDIRECTUV = 0, eV.CLEARCOAT_REMAP_F0 = !1, eV.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, eV.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(VV, eV, xV, JV) {
          if (!this._isEnabled) return;
          const YV = JV.materialDefines,
            UV = this._material.isFrozen,
            yV = this._material._disableBumpMap,
            pV = this._material._invertNormalMapX,
            QV = this._material._invertNormalMapY;
          if (!VV.useUbo || !UV || !VV.isSync) {
            (this._texture || this._textureRoughness) && SV.b.ClearCoatTextureEnabled && (VV.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dV.y)(this._texture, VV, "clearCoat"), this._textureRoughness && !YV.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dV.y)(this._textureRoughness, VV, "clearCoatRoughness")), this._bumpTexture && xV.getCaps().standardDerivatives && SV.b.ClearCoatTextureEnabled && !yV && (VV.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, dV.y)(this._bumpTexture, VV, "clearCoatBump"), eV._mirroredCameraPosition ? VV.updateFloat2("vClearCoatTangentSpaceParams", pV ? 1 : -1, QV ? 1 : -1) : VV.updateFloat2("vClearCoatTangentSpaceParams", pV ? -1 : 1, QV ? -1 : 1)), this._tintTexture && SV.b.ClearCoatTintTextureEnabled && (VV.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, dV.y)(this._tintTexture, VV, "clearCoatTint")), VV.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const JV = 1 - this._indexOfRefraction,
              UV = 1 + this._indexOfRefraction,
              nV = Math.pow(-JV / UV, 2),
              wV = 1 / this._indexOfRefraction;
            VV.updateFloat4("vClearCoatRefractionParams", nV, wV, JV, UV), this._isTintEnabled && (VV.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), VV.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          eV.texturesEnabled && (this._texture && SV.b.ClearCoatTextureEnabled && VV.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !YV.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && SV.b.ClearCoatTextureEnabled && VV.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && xV.getCaps().standardDerivatives && SV.b.ClearCoatBumpTextureEnabled && !yV && VV.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && SV.b.ClearCoatTintTextureEnabled && VV.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(VV) {
          return this._texture === VV || (this._textureRoughness === VV || (this._bumpTexture === VV || this._tintTexture === VV))
        }
        getActiveTextures(VV) {
          this._texture && VV.push(this._texture), this._textureRoughness && VV.push(this._textureRoughness), this._bumpTexture && VV.push(this._bumpTexture), this._tintTexture && VV.push(this._tintTexture)
        }
        getAnimatables(VV) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && VV.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && VV.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && VV.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && VV.push(this._tintTexture)
        }
        dispose(VV) {
          VV && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(VV, eV, xV) {
          return VV.CLEARCOAT_BUMP && eV.addFallback(xV++, "CLEARCOAT_BUMP"), VV.CLEARCOAT_TINT && eV.addFallback(xV++, "CLEARCOAT_TINT"), VV.CLEARCOAT && eV.addFallback(xV++, "CLEARCOAT"), xV
        }
        getSamplers(VV) {
          VV.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, YV = new WeakMap, UV = new WeakMap, yV = new WeakMap, pV = new WeakMap, QV = new WeakMap, nV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(AV[Symbol.metadata] ?? null) : void 0;
        wV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ZV = [(0, XV.J)()], vV = [(0, XV.J)()], rV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], BV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], jV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], qV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, XV.o)()], FV = [(0, XV.J)()], TV = [(0, XV.J)()], PV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], (0, NV.i)(VV, null, wV, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: eV
        }, MV, zV), (0, NV.i)(VV, null, rV, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: VV => "indexOfRefraction" in VV,
            get: VV => VV.indexOfRefraction,
            set: (VV, eV) => {
              VV.indexOfRefraction = eV
            }
          },
          metadata: eV
        }, DV, iV), (0, NV.i)(VV, null, kV, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: VV => "texture" in VV,
            get: VV => VV.texture,
            set: (VV, eV) => {
              VV.texture = eV
            }
          },
          metadata: eV
        }, CV, aV), (0, NV.i)(VV, null, bV, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRoughnessFromMainTexture" in VV,
            get: VV => VV.useRoughnessFromMainTexture,
            set: (VV, eV) => {
              VV.useRoughnessFromMainTexture = eV
            }
          },
          metadata: eV
        }, oV, cV), (0, NV.i)(VV, null, EV, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "textureRoughness" in VV,
            get: VV => VV.textureRoughness,
            set: (VV, eV) => {
              VV.textureRoughness = eV
            }
          },
          metadata: eV
        }, hV, LV), (0, NV.i)(VV, null, BV, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: VV => "remapF0OnInterfaceChange" in VV,
            get: VV => VV.remapF0OnInterfaceChange,
            set: (VV, eV) => {
              VV.remapF0OnInterfaceChange = eV
            }
          },
          metadata: eV
        }, fV, mV), (0, NV.i)(VV, null, jV, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "bumpTexture" in VV,
            get: VV => VV.bumpTexture,
            set: (VV, eV) => {
              VV.bumpTexture = eV
            }
          },
          metadata: eV
        }, HV, uV), (0, NV.i)(VV, null, qV, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isTintEnabled" in VV,
            get: VV => VV.isTintEnabled,
            set: (VV, eV) => {
              VV.isTintEnabled = eV
            }
          },
          metadata: eV
        }, sV, IV), (0, NV.i)(VV, null, PV, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintTexture" in VV,
            get: VV => VV.tintTexture,
            set: (VV, eV) => {
              VV.tintTexture = eV
            }
          },
          metadata: eV
        }, ye, pe), (0, NV.i)(null, null, ZV, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensity" in VV,
            get: VV => VV.intensity,
            set: (VV, eV) => {
              VV.intensity = eV
            }
          },
          metadata: eV
        }, GV, WV), (0, NV.i)(null, null, vV, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "roughness" in VV,
            get: VV => VV.roughness,
            set: (VV, eV) => {
              VV.roughness = eV
            }
          },
          metadata: eV
        }, RV, gV), (0, NV.i)(null, null, tV, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintColor" in VV,
            get: VV => VV.tintColor,
            set: (VV, eV) => {
              VV.tintColor = eV
            }
          },
          metadata: eV
        }, Ve, ee), (0, NV.i)(null, null, FV, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintColorAtDistance" in VV,
            get: VV => VV.tintColorAtDistance,
            set: (VV, eV) => {
              VV.tintColorAtDistance = eV
            }
          },
          metadata: eV
        }, xe, Je), (0, NV.i)(null, null, TV, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintThickness" in VV,
            get: VV => VV.tintThickness,
            set: (VV, eV) => {
              VV.tintThickness = eV
            }
          },
          metadata: eV
        }, Ye, Ue), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV._DefaultIndexOfRefraction = 1.5, VV
    })();
    class ee extends hV.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let xe = (() => {
      var VV, eV, xV, JV;
      let YV, UV, yV, pV, QV, nV, wV, ZV = lV.d,
        vV = [],
        rV = [],
        kV = [],
        bV = [],
        EV = [],
        BV = [],
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        MV = [];
      return VV = class extends ZV {
        get isEnabled() {
          return (0, NV.b)(this, eV, "f")
        }
        set isEnabled(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get texture() {
          return (0, NV.b)(this, xV, "f")
        }
        set texture(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get thicknessTexture() {
          return (0, NV.b)(this, JV, "f")
        }
        set thicknessTexture(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(YV) {
          let UV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YV, "PBRIridescence", 110, new ee, UV), this._isEnabled = !1, eV.set(this, (0, NV.l)(this, vV, !1)), this.intensity = ((0, NV.l)(this, rV), (0, NV.l)(this, kV, 1)), this.minimumThickness = ((0, NV.l)(this, bV), (0, NV.l)(this, EV, VV._DefaultMinimumThickness)), this.maximumThickness = ((0, NV.l)(this, BV), (0, NV.l)(this, jV, VV._DefaultMaximumThickness)), this.indexOfRefraction = ((0, NV.l)(this, qV), (0, NV.l)(this, tV, VV._DefaultIndexOfRefraction)), this._texture = ((0, NV.l)(this, FV), null), xV.set(this, (0, NV.l)(this, TV, null)), this._thicknessTexture = ((0, NV.l)(this, PV), null), JV.set(this, (0, NV.l)(this, AV, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NV.l)(this, MV), this._internalMarkAllSubMeshesAsTexturesDirty = YV._dirtyCallbacks[1]
        }
        isReadyForSubMesh(VV, eV) {
          if (!this._isEnabled) return !0;
          if (VV._areTexturesDirty && eV.texturesEnabled) {
            if (this._texture && SV.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && SV.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(VV, eV) {
          this._isEnabled ? (VV.IRIDESCENCE = !0, VV._areTexturesDirty && eV.texturesEnabled && (this._texture && SV.b.IridescenceTextureEnabled ? (0, dV.Y)(this._texture, VV, "IRIDESCENCE_TEXTURE") : VV.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && SV.b.IridescenceTextureEnabled ? (0, dV.Y)(this._thicknessTexture, VV, "IRIDESCENCE_THICKNESS_TEXTURE") : VV.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (VV.IRIDESCENCE = !1, VV.IRIDESCENCE_TEXTURE = !1, VV.IRIDESCENCE_THICKNESS_TEXTURE = !1, VV.IRIDESCENCE_TEXTUREDIRECTUV = 0, VV.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(VV, eV) {
          if (!this._isEnabled) return;
          const xV = this._material.isFrozen;
          VV.useUbo && xV && VV.isSync || ((this._texture || this._thicknessTexture) && SV.b.IridescenceTextureEnabled && (VV.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, dV.y)(this._texture, VV, "iridescence"), this._thicknessTexture && (0, dV.y)(this._thicknessTexture, VV, "iridescenceThickness")), VV.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), eV.texturesEnabled && (this._texture && SV.b.IridescenceTextureEnabled && VV.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && SV.b.IridescenceTextureEnabled && VV.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(VV) {
          return this._texture === VV || this._thicknessTexture === VV
        }
        getActiveTextures(VV) {
          this._texture && VV.push(this._texture), this._thicknessTexture && VV.push(this._thicknessTexture)
        }
        getAnimatables(VV) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && VV.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && VV.push(this._thicknessTexture)
        }
        dispose(VV) {
          VV && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(VV, eV, xV) {
          return VV.IRIDESCENCE && eV.addFallback(xV++, "IRIDESCENCE"), xV
        }
        getSamplers(VV) {
          VV.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZV[Symbol.metadata] ?? null) : void 0;
        YV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], UV = [(0, XV.J)()], yV = [(0, XV.J)()], pV = [(0, XV.J)()], QV = [(0, XV.J)()], nV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], wV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], (0, NV.i)(VV, null, YV, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: eV
        }, vV, rV), (0, NV.i)(VV, null, nV, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: VV => "texture" in VV,
            get: VV => VV.texture,
            set: (VV, eV) => {
              VV.texture = eV
            }
          },
          metadata: eV
        }, TV, PV), (0, NV.i)(VV, null, wV, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "thicknessTexture" in VV,
            get: VV => VV.thicknessTexture,
            set: (VV, eV) => {
              VV.thicknessTexture = eV
            }
          },
          metadata: eV
        }, AV, MV), (0, NV.i)(null, null, UV, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensity" in VV,
            get: VV => VV.intensity,
            set: (VV, eV) => {
              VV.intensity = eV
            }
          },
          metadata: eV
        }, kV, bV), (0, NV.i)(null, null, yV, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: VV => "minimumThickness" in VV,
            get: VV => VV.minimumThickness,
            set: (VV, eV) => {
              VV.minimumThickness = eV
            }
          },
          metadata: eV
        }, EV, BV), (0, NV.i)(null, null, pV, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: VV => "maximumThickness" in VV,
            get: VV => VV.maximumThickness,
            set: (VV, eV) => {
              VV.maximumThickness = eV
            }
          },
          metadata: eV
        }, jV, qV), (0, NV.i)(null, null, QV, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: VV => "indexOfRefraction" in VV,
            get: VV => VV.indexOfRefraction,
            set: (VV, eV) => {
              VV.indexOfRefraction = eV
            }
          },
          metadata: eV
        }, tV, FV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV._DefaultMinimumThickness = 100, VV._DefaultMaximumThickness = 400, VV._DefaultIndexOfRefraction = 1.3, VV
    })();
    class Je extends hV.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Ye = (() => {
      var VV, eV, xV, JV;
      let YV, UV, yV, pV, QV, nV = lV.d,
        wV = [],
        ZV = [],
        vV = [],
        rV = [],
        kV = [],
        bV = [],
        EV = [],
        BV = [],
        jV = [],
        qV = [];
      return VV = class extends nV {
        get isEnabled() {
          return (0, NV.b)(this, eV, "f")
        }
        set isEnabled(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        set angle(VV) {
          this.direction.x = Math.cos(VV), this.direction.y = Math.sin(VV)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, NV.b)(this, xV, "f")
        }
        set texture(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get legacy() {
          return (0, NV.b)(this, JV, "f")
        }
        set legacy(VV) {
          (0, NV.f)(this, JV, VV, "f")
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
        constructor(VV) {
          let YV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VV, "PBRAnisotropic", 110, new Je, YV), this._isEnabled = !1, eV.set(this, (0, NV.l)(this, wV, !1)), this.intensity = ((0, NV.l)(this, ZV), (0, NV.l)(this, vV, 1)), this.direction = ((0, NV.l)(this, rV), (0, NV.l)(this, kV, new oV.n(1, 0))), this._texture = ((0, NV.l)(this, bV), null), xV.set(this, (0, NV.l)(this, EV, null)), this._legacy = ((0, NV.l)(this, BV), !1), JV.set(this, (0, NV.l)(this, jV, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NV.l)(this, qV), this._internalMarkAllSubMeshesAsTexturesDirty = VV._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = VV._dirtyCallbacks[16]
        }
        isReadyForSubMesh(VV, eV) {
          return !this._isEnabled || !(VV._areTexturesDirty && eV.texturesEnabled && this._texture && SV.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(VV, eV, xV) {
          this._isEnabled ? (VV.ANISOTROPIC = this._isEnabled, this._isEnabled && !xV.isVerticesDataPresent(cV.j.TangentKind) && (VV._needUVs = !0, VV.MAINUV1 = !0), VV._areTexturesDirty && eV.texturesEnabled && (this._texture && SV.b.AnisotropicTextureEnabled ? (0, dV.Y)(this._texture, VV, "ANISOTROPIC_TEXTURE") : VV.ANISOTROPIC_TEXTURE = !1), VV._areMiscDirty && (VV.ANISOTROPIC_LEGACY = this._legacy)) : (VV.ANISOTROPIC = !1, VV.ANISOTROPIC_TEXTURE = !1, VV.ANISOTROPIC_TEXTUREDIRECTUV = 0, VV.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(VV, eV) {
          if (!this._isEnabled) return;
          const xV = this._material.isFrozen;
          VV.useUbo && xV && VV.isSync || (this._texture && SV.b.AnisotropicTextureEnabled && (VV.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, dV.y)(this._texture, VV, "anisotropy")), VV.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), eV.texturesEnabled && this._texture && SV.b.AnisotropicTextureEnabled && VV.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(VV) {
          return this._texture === VV
        }
        getActiveTextures(VV) {
          this._texture && VV.push(this._texture)
        }
        getAnimatables(VV) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && VV.push(this._texture)
        }
        dispose(VV) {
          VV && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(VV, eV, xV) {
          return VV.ANISOTROPIC && eV.addFallback(xV++, "ANISOTROPIC"), xV
        }
        getSamplers(VV) {
          VV.push("anisotropySampler")
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
        parse(VV, eV, xV) {
          super.parse(VV, eV, xV), void 0 === VV.legacy && (this.legacy = !0)
        }
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(nV[Symbol.metadata] ?? null) : void 0;
        YV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], UV = [(0, XV.J)()], yV = [(0, XV.H)()], pV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], QV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], (0, NV.i)(VV, null, YV, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: eV
        }, wV, ZV), (0, NV.i)(VV, null, pV, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: VV => "texture" in VV,
            get: VV => VV.texture,
            set: (VV, eV) => {
              VV.texture = eV
            }
          },
          metadata: eV
        }, EV, BV), (0, NV.i)(VV, null, QV, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: VV => "legacy" in VV,
            get: VV => VV.legacy,
            set: (VV, eV) => {
              VV.legacy = eV
            }
          },
          metadata: eV
        }, jV, qV), (0, NV.i)(null, null, UV, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensity" in VV,
            get: VV => VV.intensity,
            set: (VV, eV) => {
              VV.intensity = eV
            }
          },
          metadata: eV
        }, vV, rV), (0, NV.i)(null, null, yV, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: VV => "direction" in VV,
            get: VV => VV.direction,
            set: (VV, eV) => {
              VV.direction = eV
            }
          },
          metadata: eV
        }, kV, bV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV
    })();
    class Ue extends hV.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let ye = (() => {
      var VV, eV, xV, JV, YV, UV, yV, pV;
      let QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV = lV.d,
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        MV = [],
        zV = [],
        GV = [],
        WV = [],
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [];
      return VV = class extends BV {
        get isEnabled() {
          return (0, NV.b)(this, eV, "f")
        }
        set isEnabled(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, NV.b)(this, xV, "f")
        }
        set linkSheenWithAlbedo(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get texture() {
          return (0, NV.b)(this, JV, "f")
        }
        set texture(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, NV.b)(this, YV, "f")
        }
        set useRoughnessFromMainTexture(VV) {
          (0, NV.f)(this, YV, VV, "f")
        }
        get roughness() {
          return (0, NV.b)(this, UV, "f")
        }
        set roughness(VV) {
          (0, NV.f)(this, UV, VV, "f")
        }
        get textureRoughness() {
          return (0, NV.b)(this, yV, "f")
        }
        set textureRoughness(VV) {
          (0, NV.f)(this, yV, VV, "f")
        }
        get albedoScaling() {
          return (0, NV.b)(this, pV, "f")
        }
        set albedoScaling(VV) {
          (0, NV.f)(this, pV, VV, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VV) {
          let QV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VV, "Sheen", 120, new Ue, QV), this._isEnabled = !1, eV.set(this, (0, NV.l)(this, jV, !1)), this._linkSheenWithAlbedo = ((0, NV.l)(this, qV), !1), xV.set(this, (0, NV.l)(this, tV, !1)), this.intensity = ((0, NV.l)(this, FV), (0, NV.l)(this, TV, 1)), this.color = ((0, NV.l)(this, PV), (0, NV.l)(this, AV, KV.d.White())), this._texture = ((0, NV.l)(this, MV), null), JV.set(this, (0, NV.l)(this, zV, null)), this._useRoughnessFromMainTexture = ((0, NV.l)(this, GV), !0), YV.set(this, (0, NV.l)(this, WV, !0)), this._roughness = ((0, NV.l)(this, RV), null), UV.set(this, (0, NV.l)(this, gV, null)), this._textureRoughness = ((0, NV.l)(this, DV), null), yV.set(this, (0, NV.l)(this, iV, null)), this._albedoScaling = ((0, NV.l)(this, CV), !1), pV.set(this, (0, NV.l)(this, aV, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NV.l)(this, oV), this._internalMarkAllSubMeshesAsTexturesDirty = VV._dirtyCallbacks[1]
        }
        isReadyForSubMesh(VV, eV) {
          if (!this._isEnabled) return !0;
          if (VV._areTexturesDirty && eV.texturesEnabled) {
            if (this._texture && SV.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && SV.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(VV, eV) {
          this._isEnabled ? (VV.SHEEN = !0, VV.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, VV.SHEEN_ROUGHNESS = null !== this._roughness, VV.SHEEN_ALBEDOSCALING = this._albedoScaling, VV.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, VV._areTexturesDirty && eV.texturesEnabled && (this._texture && SV.b.SheenTextureEnabled ? ((0, dV.Y)(this._texture, VV, "SHEEN_TEXTURE"), VV.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : VV.SHEEN_TEXTURE = !1, this._textureRoughness && SV.b.SheenTextureEnabled ? (0, dV.Y)(this._textureRoughness, VV, "SHEEN_TEXTURE_ROUGHNESS") : VV.SHEEN_TEXTURE_ROUGHNESS = !1)) : (VV.SHEEN = !1, VV.SHEEN_TEXTURE = !1, VV.SHEEN_TEXTURE_ROUGHNESS = !1, VV.SHEEN_LINKWITHALBEDO = !1, VV.SHEEN_ROUGHNESS = !1, VV.SHEEN_ALBEDOSCALING = !1, VV.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, VV.SHEEN_GAMMATEXTURE = !1, VV.SHEEN_TEXTUREDIRECTUV = 0, VV.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(VV, eV, xV, JV) {
          if (!this._isEnabled) return;
          const YV = JV.materialDefines,
            UV = this._material.isFrozen;
          VV.useUbo && UV && VV.isSync || ((this._texture || this._textureRoughness) && SV.b.SheenTextureEnabled && (VV.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dV.y)(this._texture, VV, "sheen"), this._textureRoughness && !YV.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dV.y)(this._textureRoughness, VV, "sheenRoughness")), VV.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && VV.updateFloat("vSheenRoughness", this._roughness)), eV.texturesEnabled && (this._texture && SV.b.SheenTextureEnabled && VV.setTexture("sheenSampler", this._texture), this._textureRoughness && !YV.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && SV.b.SheenTextureEnabled && VV.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(VV) {
          return this._texture === VV || this._textureRoughness === VV
        }
        getActiveTextures(VV) {
          this._texture && VV.push(this._texture), this._textureRoughness && VV.push(this._textureRoughness)
        }
        getAnimatables(VV) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && VV.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && VV.push(this._textureRoughness)
        }
        dispose(VV) {
          VV && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(VV, eV, xV) {
          return VV.SHEEN && eV.addFallback(xV++, "SHEEN"), xV
        }
        getSamplers(VV) {
          VV.push("sheenSampler", "sheenRoughnessSampler")
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
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, YV = new WeakMap, UV = new WeakMap, yV = new WeakMap, pV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(BV[Symbol.metadata] ?? null) : void 0;
        QV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], nV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], wV = [(0, XV.J)()], ZV = [(0, XV.o)()], vV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], rV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], (0, NV.i)(VV, null, QV, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: eV
        }, jV, qV), (0, NV.i)(VV, null, nV, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: VV => "linkSheenWithAlbedo" in VV,
            get: VV => VV.linkSheenWithAlbedo,
            set: (VV, eV) => {
              VV.linkSheenWithAlbedo = eV
            }
          },
          metadata: eV
        }, tV, FV), (0, NV.i)(VV, null, vV, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: VV => "texture" in VV,
            get: VV => VV.texture,
            set: (VV, eV) => {
              VV.texture = eV
            }
          },
          metadata: eV
        }, zV, GV), (0, NV.i)(VV, null, rV, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRoughnessFromMainTexture" in VV,
            get: VV => VV.useRoughnessFromMainTexture,
            set: (VV, eV) => {
              VV.useRoughnessFromMainTexture = eV
            }
          },
          metadata: eV
        }, WV, RV), (0, NV.i)(VV, null, kV, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "roughness" in VV,
            get: VV => VV.roughness,
            set: (VV, eV) => {
              VV.roughness = eV
            }
          },
          metadata: eV
        }, gV, DV), (0, NV.i)(VV, null, bV, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "textureRoughness" in VV,
            get: VV => VV.textureRoughness,
            set: (VV, eV) => {
              VV.textureRoughness = eV
            }
          },
          metadata: eV
        }, iV, CV), (0, NV.i)(VV, null, EV, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: VV => "albedoScaling" in VV,
            get: VV => VV.albedoScaling,
            set: (VV, eV) => {
              VV.albedoScaling = eV
            }
          },
          metadata: eV
        }, aV, oV), (0, NV.i)(null, null, wV, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "intensity" in VV,
            get: VV => VV.intensity,
            set: (VV, eV) => {
              VV.intensity = eV
            }
          },
          metadata: eV
        }, TV, PV), (0, NV.i)(null, null, ZV, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: VV => "color" in VV,
            get: VV => VV.color,
            set: (VV, eV) => {
              VV.color = eV
            }
          },
          metadata: eV
        }, AV, MV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV
    })();
    class pe extends hV.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Qe = (() => {
      var VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV;
      let BV, jV, qV, tV, FV, TV, PV, AV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, cV, hV, LV, fV, mV, HV, uV, sV, IV, OV, Ve, ee, xe = lV.d,
        Je = [],
        Ye = [],
        Ue = [],
        ye = [],
        Qe = [],
        ne = [],
        we = [],
        Ze = [],
        ve = [],
        re = [],
        ke = [],
        be = [],
        Ee = [],
        Be = [],
        je = [],
        qe = [],
        te = [],
        Fe = [],
        Te = [],
        Pe = [],
        Ae = [],
        Ne = [],
        Xe = [],
        Me = [],
        ze = [],
        Ge = [],
        We = [],
        Re = [],
        ge = [],
        De = [],
        ie = [],
        Ce = [],
        ae = [],
        oe = [],
        ce = [],
        he = [],
        le = [],
        Le = [],
        fe = [],
        me = [],
        Ke = [],
        He = [],
        ue = [],
        se = [],
        Se = [],
        Ie = [],
        de = [],
        Oe = [],
        Vx = [],
        ex = [],
        xx = [],
        Jx = [],
        Yx = [],
        Ux = [],
        yx = [],
        px = [],
        Qx = [],
        nx = [],
        wx = [],
        Zx = [];
      return VV = class extends xe {
        get isRefractionEnabled() {
          return (0, NV.b)(this, eV, "f")
        }
        set isRefractionEnabled(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get isTranslucencyEnabled() {
          return (0, NV.b)(this, xV, "f")
        }
        set isTranslucencyEnabled(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get isDispersionEnabled() {
          return (0, NV.b)(this, JV, "f")
        }
        set isDispersionEnabled(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        get isScatteringEnabled() {
          return (0, NV.b)(this, YV, "f")
        }
        set isScatteringEnabled(VV) {
          (0, NV.f)(this, YV, VV, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(VV) {
          this._scene.enableSubSurfaceForPrePass() && VV && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(VV))
        }
        get useAlbedoToTintRefraction() {
          return (0, NV.b)(this, UV, "f")
        }
        set useAlbedoToTintRefraction(VV) {
          (0, NV.f)(this, UV, VV, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, NV.b)(this, yV, "f")
        }
        set useAlbedoToTintTranslucency(VV) {
          (0, NV.f)(this, yV, VV, "f")
        }
        get thicknessTexture() {
          return (0, NV.b)(this, pV, "f")
        }
        set thicknessTexture(VV) {
          (0, NV.f)(this, pV, VV, "f")
        }
        get refractionTexture() {
          return (0, NV.b)(this, QV, "f")
        }
        set refractionTexture(VV) {
          (0, NV.f)(this, QV, VV, "f")
        }
        get indexOfRefraction() {
          return (0, NV.b)(this, nV, "f")
        }
        set indexOfRefraction(VV) {
          (0, NV.f)(this, nV, VV, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(VV) {
          const eV = VV >= 1 ? VV : -1;
          this._volumeIndexOfRefraction !== eV && (this._volumeIndexOfRefraction = eV, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, NV.b)(this, wV, "f")
        }
        set invertRefractionY(VV) {
          (0, NV.f)(this, wV, VV, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, NV.b)(this, ZV, "f")
        }
        set linkRefractionWithTransparency(VV) {
          (0, NV.f)(this, ZV, VV, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, NV.b)(this, vV, "f")
        }
        set useMaskFromThicknessTexture(VV) {
          (0, NV.f)(this, vV, VV, "f")
        }
        get refractionIntensityTexture() {
          return (0, NV.b)(this, rV, "f")
        }
        set refractionIntensityTexture(VV) {
          (0, NV.f)(this, rV, VV, "f")
        }
        get translucencyIntensityTexture() {
          return (0, NV.b)(this, kV, "f")
        }
        set translucencyIntensityTexture(VV) {
          (0, NV.f)(this, kV, VV, "f")
        }
        get translucencyColorTexture() {
          return (0, NV.b)(this, bV, "f")
        }
        set translucencyColorTexture(VV) {
          (0, NV.f)(this, bV, VV, "f")
        }
        get useGltfStyleTextures() {
          return (0, NV.b)(this, EV, "f")
        }
        set useGltfStyleTextures(VV) {
          (0, NV.f)(this, EV, VV, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(VV) {
          this.legacyTranslucency = VV
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
        constructor(BV) {
          let jV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BV, "PBRSubSurface", 130, new pe, jV), this._isRefractionEnabled = !1, eV.set(this, (0, NV.l)(this, Je, !1)), this._isTranslucencyEnabled = ((0, NV.l)(this, Ye), !1), xV.set(this, (0, NV.l)(this, Ue, !1)), this._isDispersionEnabled = ((0, NV.l)(this, ye), !1), JV.set(this, (0, NV.l)(this, Qe, !1)), this._isScatteringEnabled = ((0, NV.l)(this, ne), !1), YV.set(this, (0, NV.l)(this, we, !1)), this._scatteringDiffusionProfileIndex = ((0, NV.l)(this, Ze), (0, NV.l)(this, ve, 0)), this.refractionIntensity = ((0, NV.l)(this, re), (0, NV.l)(this, ke, 1)), this.translucencyIntensity = ((0, NV.l)(this, be), (0, NV.l)(this, Ee, 1)), this._useAlbedoToTintRefraction = ((0, NV.l)(this, Be), !1), UV.set(this, (0, NV.l)(this, je, !1)), this._useAlbedoToTintTranslucency = ((0, NV.l)(this, qe), !1), yV.set(this, (0, NV.l)(this, te, !1)), this._thicknessTexture = ((0, NV.l)(this, Fe), null), pV.set(this, (0, NV.l)(this, Te, null)), this._refractionTexture = ((0, NV.l)(this, Pe), null), QV.set(this, (0, NV.l)(this, Ae, null)), this._indexOfRefraction = ((0, NV.l)(this, Ne), 1.5), nV.set(this, (0, NV.l)(this, Xe, 1.5)), this._volumeIndexOfRefraction = ((0, NV.l)(this, Me), (0, NV.l)(this, ze, -1)), this._invertRefractionY = ((0, NV.l)(this, Ge), !1), wV.set(this, (0, NV.l)(this, We, !1)), this._linkRefractionWithTransparency = ((0, NV.l)(this, Re), !1), ZV.set(this, (0, NV.l)(this, ge, !1)), this.minimumThickness = ((0, NV.l)(this, De), (0, NV.l)(this, ie, 0)), this.maximumThickness = ((0, NV.l)(this, Ce), (0, NV.l)(this, ae, 1)), this.useThicknessAsDepth = ((0, NV.l)(this, oe), (0, NV.l)(this, ce, !1)), this.tintColor = ((0, NV.l)(this, he), (0, NV.l)(this, le, KV.d.White())), this.tintColorAtDistance = ((0, NV.l)(this, Le), (0, NV.l)(this, fe, 1)), this.dispersion = ((0, NV.l)(this, me), (0, NV.l)(this, Ke, 0)), this.diffusionDistance = ((0, NV.l)(this, He), (0, NV.l)(this, ue, KV.d.White())), this._useMaskFromThicknessTexture = ((0, NV.l)(this, se), !1), vV.set(this, (0, NV.l)(this, Se, !1)), this._refractionIntensityTexture = ((0, NV.l)(this, Ie), null), rV.set(this, (0, NV.l)(this, de, null)), this._translucencyIntensityTexture = ((0, NV.l)(this, Oe), null), kV.set(this, (0, NV.l)(this, Vx, null)), this.translucencyColor = ((0, NV.l)(this, ex), (0, NV.l)(this, xx, null)), this._translucencyColorTexture = ((0, NV.l)(this, Jx), null), bV.set(this, (0, NV.l)(this, Yx, null)), this._useGltfStyleTextures = ((0, NV.l)(this, Ux), !0), EV.set(this, (0, NV.l)(this, yx, !0)), this.applyAlbedoAfterSubSurface = ((0, NV.l)(this, px), (0, NV.l)(this, Qx, VV.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, NV.l)(this, nx), (0, NV.l)(this, wx, VV.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, NV.l)(this, Zx), this._scene = BV.dD(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = BV._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = BV._dirtyCallbacks[32]
        }
        isReadyForSubMesh(VV, eV) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (VV._areTexturesDirty && eV.texturesEnabled) {
            if (this._thicknessTexture && SV.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && SV.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && SV.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && SV.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const VV = this._getRefractionTexture(eV);
            if (VV && SV.b.RefractionTextureEnabled && !VV.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(VV, eV) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return VV.SUBSURFACE = !1, VV.SS_DISPERSION = !1, VV.SS_TRANSLUCENCY = !1, VV.SS_SCATTERING = !1, VV.SS_REFRACTION = !1, VV.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, VV.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, VV.SS_THICKNESSANDMASK_TEXTURE = !1, VV.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, VV.SS_HAS_THICKNESS = !1, VV.SS_REFRACTIONINTENSITY_TEXTURE = !1, VV.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, VV.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, VV.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, VV.SS_REFRACTIONMAP_3D = !1, VV.SS_REFRACTIONMAP_OPPOSITEZ = !1, VV.SS_LODINREFRACTIONALPHA = !1, VV.SS_GAMMAREFRACTION = !1, VV.SS_RGBDREFRACTION = !1, VV.SS_LINEARSPECULARREFRACTION = !1, VV.SS_LINKREFRACTIONTOTRANSPARENCY = !1, VV.SS_ALBEDOFORREFRACTIONTINT = !1, VV.SS_ALBEDOFORTRANSLUCENCYTINT = !1, VV.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, VV.SS_USE_THICKNESS_AS_DEPTH = !1, VV.SS_USE_GLTF_TEXTURES = !1, VV.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, VV.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, VV.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(VV.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (VV._areTexturesDirty) {
            if (VV.SUBSURFACE = !0, VV.SS_DISPERSION = this._isDispersionEnabled, VV.SS_TRANSLUCENCY = this._isTranslucencyEnabled, VV.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, VV.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, VV.SS_SCATTERING = this._isScatteringEnabled, VV.SS_THICKNESSANDMASK_TEXTURE = !1, VV.SS_REFRACTIONINTENSITY_TEXTURE = !1, VV.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, VV.SS_HAS_THICKNESS = !1, VV.SS_USE_GLTF_TEXTURES = !1, VV.SS_REFRACTION = !1, VV.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, VV.SS_REFRACTIONMAP_3D = !1, VV.SS_GAMMAREFRACTION = !1, VV.SS_RGBDREFRACTION = !1, VV.SS_LINEARSPECULARREFRACTION = !1, VV.SS_REFRACTIONMAP_OPPOSITEZ = !1, VV.SS_LODINREFRACTIONALPHA = !1, VV.SS_LINKREFRACTIONTOTRANSPARENCY = !1, VV.SS_ALBEDOFORREFRACTIONTINT = !1, VV.SS_ALBEDOFORTRANSLUCENCYTINT = !1, VV.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, VV.SS_USE_THICKNESS_AS_DEPTH = !1, VV.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, VV.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, VV._areTexturesDirty && eV.texturesEnabled && (this._thicknessTexture && SV.b.ThicknessTextureEnabled && (0, dV.Y)(this._thicknessTexture, VV, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && SV.b.RefractionIntensityTextureEnabled && (0, dV.Y)(this._refractionIntensityTexture, VV, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && SV.b.TranslucencyIntensityTextureEnabled && (0, dV.Y)(this._translucencyIntensityTexture, VV, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && SV.b.TranslucencyColorTextureEnabled && ((0, dV.Y)(this._translucencyColorTexture, VV, "SS_TRANSLUCENCYCOLOR_TEXTURE"), VV.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), VV.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, VV.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, VV.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, VV.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && eV.texturesEnabled) {
              const xV = this._getRefractionTexture(eV);
              xV && SV.b.RefractionTextureEnabled && (VV.SS_REFRACTION = !0, VV.SS_REFRACTIONMAP_3D = xV.isCube, VV.SS_GAMMAREFRACTION = xV.gammaSpace, VV.SS_RGBDREFRACTION = xV.isRGBD, VV.SS_LINEARSPECULARREFRACTION = xV.linearSpecularLOD, VV.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && xV.isCube ? !xV.invertZ : xV.invertZ, VV.SS_LODINREFRACTIONALPHA = xV.lodLevelInAlpha, VV.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, VV.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, VV.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = xV.isCube && xV.boundingBoxSize, VV.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (VV.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(VV, eV, xV, JV) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) VV.updateFloat2("vThicknessParam", 0, 0);
            else {
              JV.getRenderingMesh().getWorldMatrix().decompose(oV.l.Ik[0]);
              const eV = Math.max(Math.abs(oV.l.Ik[0].x), Math.abs(oV.l.Ik[0].y), Math.abs(oV.l.Ik[0].z));
              VV.updateFloat2("vThicknessParam", this.minimumThickness * eV, (this.maximumThickness - this.minimumThickness) * eV)
            }
        }
        bindForSubMesh(VV, eV, xV, JV) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const YV = JV.materialDefines,
            UV = this._material.isFrozen,
            yV = this._material.realTimeFiltering,
            pV = YV.LODBASEDMICROSFURACE,
            QV = this._getRefractionTexture(eV);
          if (!VV.useUbo || !UV || !VV.isSync) {
            if (this._thicknessTexture && SV.b.ThicknessTextureEnabled && (VV.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, dV.y)(this._thicknessTexture, VV, "thickness")), this._refractionIntensityTexture && SV.b.RefractionIntensityTextureEnabled && YV.SS_REFRACTIONINTENSITY_TEXTURE && (VV.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, dV.y)(this._refractionIntensityTexture, VV, "refractionIntensity")), this._translucencyColorTexture && SV.b.TranslucencyColorTextureEnabled && YV.SS_TRANSLUCENCYCOLOR_TEXTURE && (VV.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, dV.y)(this._translucencyColorTexture, VV, "translucencyColor")), this._translucencyIntensityTexture && SV.b.TranslucencyIntensityTextureEnabled && YV.SS_TRANSLUCENCYINTENSITY_TEXTURE && (VV.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, dV.y)(this._translucencyIntensityTexture, VV, "translucencyIntensity")), QV && SV.b.RefractionTextureEnabled) {
              VV.peV("refractionMatrix", QV.getRefractionTextureMatrix());
              let eV = 1;
              QV.isCube || QV.depth && (eV = QV.depth);
              const xV = QV.getSize().width,
                JV = this.volumeIndexOfRefraction;
              if (VV.updateFloat4("vRefractionInfos", QV.level, 1 / JV, eV, this._invertRefractionY ? -1 : 1), VV.updateFloat4("vRefractionMicrosurfaceInfos", xV, QV.lodGenerationScale, QV.lodGenerationOffset, 1 / this.indexOfRefraction), yV && VV.updateFloat2("vRefractionFilteringInfo", xV, Math.log2(xV)), QV.boundingBoxSize) {
                const eV = QV;
                VV.updateVector3("vRefractionPosition", eV.boundingBoxPosition), VV.updateVector3("vRefractionSize", eV.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && VV.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), VV.updateColor3("vDiffusionDistance", this.diffusionDistance), VV.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), VV.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), VV.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), VV.updateFloat("dispersion", this.dispersion)
          }
          eV.texturesEnabled && (this._thicknessTexture && SV.b.ThicknessTextureEnabled && VV.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && SV.b.RefractionIntensityTextureEnabled && YV.SS_REFRACTIONINTENSITY_TEXTURE && VV.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && SV.b.TranslucencyIntensityTextureEnabled && YV.SS_TRANSLUCENCYINTENSITY_TEXTURE && VV.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && SV.b.TranslucencyColorTextureEnabled && YV.SS_TRANSLUCENCYCOLOR_TEXTURE && VV.setTexture("translucencyColorSampler", this._translucencyColorTexture), QV && SV.b.RefractionTextureEnabled && (pV ? VV.setTexture("refractionSampler", QV) : (VV.setTexture("refractionSampler", QV._lodTextureMid || QV), VV.setTexture("refractionSamplerLow", QV._lodTextureLow || QV), VV.setTexture("refractionSamplerHigh", QV._lodTextureHigh || QV))))
        }
        _getRefractionTexture(VV) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? VV.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(VV) {
          SV.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && VV.push(this._refractionTexture)
        }
        hasTexture(VV) {
          return this._thicknessTexture === VV || (this._refractionTexture === VV || (this._refractionIntensityTexture === VV || (this._translucencyIntensityTexture === VV || this._translucencyColorTexture === VV)))
        }
        hasRenderTargetTextures() {
          return !!(SV.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(VV) {
          this._thicknessTexture && VV.push(this._thicknessTexture), this._refractionTexture && VV.push(this._refractionTexture), this._refractionIntensityTexture && VV.push(this._refractionIntensityTexture), this._translucencyColorTexture && VV.push(this._translucencyColorTexture), this._translucencyIntensityTexture && VV.push(this._translucencyIntensityTexture)
        }
        getAnimatables(VV) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && VV.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && VV.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && VV.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && VV.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && VV.push(this._translucencyIntensityTexture)
        }
        dispose(VV) {
          VV && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(VV, eV, xV) {
          return VV.SS_SCATTERING && eV.addFallback(xV++, "SS_SCATTERING"), VV.SS_TRANSLUCENCY && eV.addFallback(xV++, "SS_TRANSLUCENCY"), xV
        }
        getSamplers(VV) {
          VV.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, YV = new WeakMap, UV = new WeakMap, yV = new WeakMap, pV = new WeakMap, QV = new WeakMap, nV = new WeakMap, wV = new WeakMap, ZV = new WeakMap, vV = new WeakMap, rV = new WeakMap, kV = new WeakMap, bV = new WeakMap, EV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(xe[Symbol.metadata] ?? null) : void 0;
        BV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], jV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], qV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, XV.J)(), (0, XV.h)("_markScenePrePassDirty")], FV = [(0, XV.J)()], TV = [(0, XV.J)()], PV = [(0, XV.J)()], AV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], MV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], zV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], GV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], WV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], RV = [(0, XV.J)()], gV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], DV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], iV = [(0, XV.J)()], CV = [(0, XV.J)()], aV = [(0, XV.J)()], cV = [(0, XV.o)()], hV = [(0, XV.J)()], LV = [(0, XV.J)()], fV = [(0, XV.o)()], mV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], HV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], uV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], sV = [(0, XV.o)()], IV = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], OV = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ve = [(0, XV.J)()], ee = [(0, XV.J)()], (0, NV.i)(VV, null, BV, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isRefractionEnabled" in VV,
            get: VV => VV.isRefractionEnabled,
            set: (VV, eV) => {
              VV.isRefractionEnabled = eV
            }
          },
          metadata: eV
        }, Je, Ye), (0, NV.i)(VV, null, jV, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isTranslucencyEnabled" in VV,
            get: VV => VV.isTranslucencyEnabled,
            set: (VV, eV) => {
              VV.isTranslucencyEnabled = eV
            }
          },
          metadata: eV
        }, Ue, ye), (0, NV.i)(VV, null, qV, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isDispersionEnabled" in VV,
            get: VV => VV.isDispersionEnabled,
            set: (VV, eV) => {
              VV.isDispersionEnabled = eV
            }
          },
          metadata: eV
        }, Qe, ne), (0, NV.i)(VV, null, tV, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isScatteringEnabled" in VV,
            get: VV => VV.isScatteringEnabled,
            set: (VV, eV) => {
              VV.isScatteringEnabled = eV
            }
          },
          metadata: eV
        }, we, Ze), (0, NV.i)(VV, null, AV, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAlbedoToTintRefraction" in VV,
            get: VV => VV.useAlbedoToTintRefraction,
            set: (VV, eV) => {
              VV.useAlbedoToTintRefraction = eV
            }
          },
          metadata: eV
        }, je, qe), (0, NV.i)(VV, null, MV, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAlbedoToTintTranslucency" in VV,
            get: VV => VV.useAlbedoToTintTranslucency,
            set: (VV, eV) => {
              VV.useAlbedoToTintTranslucency = eV
            }
          },
          metadata: eV
        }, te, Fe), (0, NV.i)(VV, null, zV, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "thicknessTexture" in VV,
            get: VV => VV.thicknessTexture,
            set: (VV, eV) => {
              VV.thicknessTexture = eV
            }
          },
          metadata: eV
        }, Te, Pe), (0, NV.i)(VV, null, GV, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "refractionTexture" in VV,
            get: VV => VV.refractionTexture,
            set: (VV, eV) => {
              VV.refractionTexture = eV
            }
          },
          metadata: eV
        }, Ae, Ne), (0, NV.i)(VV, null, WV, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: VV => "indexOfRefraction" in VV,
            get: VV => VV.indexOfRefraction,
            set: (VV, eV) => {
              VV.indexOfRefraction = eV
            }
          },
          metadata: eV
        }, Xe, Me), (0, NV.i)(VV, null, gV, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: VV => "invertRefractionY" in VV,
            get: VV => VV.invertRefractionY,
            set: (VV, eV) => {
              VV.invertRefractionY = eV
            }
          },
          metadata: eV
        }, We, Re), (0, NV.i)(VV, null, DV, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: VV => "linkRefractionWithTransparency" in VV,
            get: VV => VV.linkRefractionWithTransparency,
            set: (VV, eV) => {
              VV.linkRefractionWithTransparency = eV
            }
          },
          metadata: eV
        }, ge, De), (0, NV.i)(VV, null, mV, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "useMaskFromThicknessTexture" in VV,
            get: VV => VV.useMaskFromThicknessTexture,
            set: (VV, eV) => {
              VV.useMaskFromThicknessTexture = eV
            }
          },
          metadata: eV
        }, Se, Ie), (0, NV.i)(VV, null, HV, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "refractionIntensityTexture" in VV,
            get: VV => VV.refractionIntensityTexture,
            set: (VV, eV) => {
              VV.refractionIntensityTexture = eV
            }
          },
          metadata: eV
        }, de, Oe), (0, NV.i)(VV, null, uV, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "translucencyIntensityTexture" in VV,
            get: VV => VV.translucencyIntensityTexture,
            set: (VV, eV) => {
              VV.translucencyIntensityTexture = eV
            }
          },
          metadata: eV
        }, Vx, ex), (0, NV.i)(VV, null, IV, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "translucencyColorTexture" in VV,
            get: VV => VV.translucencyColorTexture,
            set: (VV, eV) => {
              VV.translucencyColorTexture = eV
            }
          },
          metadata: eV
        }, Yx, Ux), (0, NV.i)(VV, null, OV, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: VV => "useGltfStyleTextures" in VV,
            get: VV => VV.useGltfStyleTextures,
            set: (VV, eV) => {
              VV.useGltfStyleTextures = eV
            }
          },
          metadata: eV
        }, yx, px), (0, NV.i)(null, null, FV, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: VV => "_scatteringDiffusionProfileIndex" in VV,
            get: VV => VV._scatteringDiffusionProfileIndex,
            set: (VV, eV) => {
              VV._scatteringDiffusionProfileIndex = eV
            }
          },
          metadata: eV
        }, ve, re), (0, NV.i)(null, null, TV, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "refractionIntensity" in VV,
            get: VV => VV.refractionIntensity,
            set: (VV, eV) => {
              VV.refractionIntensity = eV
            }
          },
          metadata: eV
        }, ke, be), (0, NV.i)(null, null, PV, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "translucencyIntensity" in VV,
            get: VV => VV.translucencyIntensity,
            set: (VV, eV) => {
              VV.translucencyIntensity = eV
            }
          },
          metadata: eV
        }, Ee, Be), (0, NV.i)(null, null, RV, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: VV => "_volumeIndexOfRefraction" in VV,
            get: VV => VV._volumeIndexOfRefraction,
            set: (VV, eV) => {
              VV._volumeIndexOfRefraction = eV
            }
          },
          metadata: eV
        }, ze, Ge), (0, NV.i)(null, null, iV, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: VV => "minimumThickness" in VV,
            get: VV => VV.minimumThickness,
            set: (VV, eV) => {
              VV.minimumThickness = eV
            }
          },
          metadata: eV
        }, ie, Ce), (0, NV.i)(null, null, CV, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: VV => "maximumThickness" in VV,
            get: VV => VV.maximumThickness,
            set: (VV, eV) => {
              VV.maximumThickness = eV
            }
          },
          metadata: eV
        }, ae, oe), (0, NV.i)(null, null, aV, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: VV => "useThicknessAsDepth" in VV,
            get: VV => VV.useThicknessAsDepth,
            set: (VV, eV) => {
              VV.useThicknessAsDepth = eV
            }
          },
          metadata: eV
        }, ce, he), (0, NV.i)(null, null, cV, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintColor" in VV,
            get: VV => VV.tintColor,
            set: (VV, eV) => {
              VV.tintColor = eV
            }
          },
          metadata: eV
        }, le, Le), (0, NV.i)(null, null, hV, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: VV => "tintColorAtDistance" in VV,
            get: VV => VV.tintColorAtDistance,
            set: (VV, eV) => {
              VV.tintColorAtDistance = eV
            }
          },
          metadata: eV
        }, fe, me), (0, NV.i)(null, null, LV, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: VV => "dispersion" in VV,
            get: VV => VV.dispersion,
            set: (VV, eV) => {
              VV.dispersion = eV
            }
          },
          metadata: eV
        }, Ke, He), (0, NV.i)(null, null, fV, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: VV => "diffusionDistance" in VV,
            get: VV => VV.diffusionDistance,
            set: (VV, eV) => {
              VV.diffusionDistance = eV
            }
          },
          metadata: eV
        }, ue, se), (0, NV.i)(null, null, sV, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "translucencyColor" in VV,
            get: VV => VV.translucencyColor,
            set: (VV, eV) => {
              VV.translucencyColor = eV
            }
          },
          metadata: eV
        }, xx, Jx), (0, NV.i)(null, null, Ve, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: VV => "applyAlbedoAfterSubSurface" in VV,
            get: VV => VV.applyAlbedoAfterSubSurface,
            set: (VV, eV) => {
              VV.applyAlbedoAfterSubSurface = eV
            }
          },
          metadata: eV
        }, Qx, nx), (0, NV.i)(null, null, ee, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: VV => "legacyTranslucency" in VV,
            get: VV => VV.legacyTranslucency,
            set: (VV, eV) => {
              VV.legacyTranslucency = eV
            }
          },
          metadata: eV
        }, wx, Zx), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, VV.DEFAULT_LEGACY_TRANSLUCENCY = !1, VV
    })();
    var ne = xV(41616),
      we = xV(41591),
      Ze = xV(41630),
      ve = xV(41635),
      re = xV(41637),
      ke = xV(41640),
      be = xV(41646),
      Ee = xV(41655),
      Be = xV(41138);
    const je = {
      effect: null,
      subMesh: null
    };
    class qe extends((0, be.c)((0, ke.b)(hV.e))) {}
    class te extends((0, HV.e)(qe)) {
      constructor(VV) {
        super(VV), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Fe extends((0, Ee.c)(sV.e)) {}
    let Te = (() => {
      var VV, eV;
      let JV, YV = Fe,
        yV = [],
        pV = [];
      return VV = class extends YV {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(VV) {
          this._realTimeFiltering = VV, this.nJV(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(VV) {
          this._realTimeFilteringQuality = VV, this.nJV(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, NV.b)(this, eV, "f")
        }
        set debugMode(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        constructor(xV, JV) {
          super(xV, JV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || VV.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new oV.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = VV.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = KV.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new KV.d(0, 0, 0), this._albedoColor = new KV.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new KV.d(1, 1, 1), this._reflectionColor = new KV.d(1, 1, 1), this._emissiveColor = new KV.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = VV.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zV.f(16), this._globalAmbientColor = new KV.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, eV.set(this, (0, NV.l)(this, yV, 0)), this.debugLimit = ((0, NV.l)(this, pV), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new fV(this), this.clearCoat = new Ve(this), this.iridescence = new xe(this), this.anisotropy = new Ye(this), this.sheen = new ye(this), this.subSurface = new Qe(this), this.detailMap = new ne.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), SV.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = DV(this.dD()), this.prePassConfiguration = new mV.b
        }
        get hasRenderTargetTextures() {
          return !!(SV.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === VV.PBRMATERIAL_OPAQUE || this._transparencyMode === VV.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === VV.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== VV.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(VV, eV, xV) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const JV = eV._drawWrapper;
          if (JV.effect && this.isFrozen && JV._wasPreviouslyReady && JV._wasPreviouslyUsingInstances === xV) return !0;
          eV.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), eV.materialDefines = new te(this._eventInfo.defineNames));
          const YV = eV.materialDefines;
          if (this._isReadyForSubMesh(eV)) return !0;
          const UV = this.dD(),
            yV = UV.sk();
          if (YV._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, UV.texturesEnabled)) {
            if (this._albedoTexture && SV.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && SV.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && SV.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && SV.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && SV.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const VV = this._getReflectionTexture();
            if (VV && SV.b.ReflectionTextureEnabled) {
              if (!VV.isReadyOrNotBlocking()) return !1;
              if (VV.irradianceTexture) {
                if (!VV.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!VV.sphericalPolynomial && VV.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && SV.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && SV.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (SV.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (yV.getCaps().standardDerivatives && this._bumpTexture && SV.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && SV.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = YV, this._eventInfo.subMesh = eV, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (YV._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (YV.AREALIGHTUSED || YV.CLUSTLIGHT_BATCH)
            for (let ZV = 0; ZV < VV.lightSources.length; ZV++)
              if (!VV.lightSources[ZV]._isReady()) return !1;
          if (yV.getCaps().standardDerivatives || VV.isVerticesDataPresent(cV.j.NormalKind) || (VV.createNormals(!0), MV.b.Warn("PBRMaterial: Normals have been created for the mesh: " + VV.name)), !(0, dV.c)(UV, VV, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const pV = eV.effect,
            QV = YV._areLightsDisposed,
            nV = this._prepareEffect(VV, eV.getRenderingMesh(), YV, this.onCompiled, this.onError, xV, null);
          let wV = !1;
          if (nV)
            if (this._onEffectCreatedObservable && (je.effect = nV, je.subMesh = eV, this._onEffectCreatedObservable.notifyObservers(je)), this.allowShaderHotSwapping && pV && !nV.isReady()) {
              if (YV.markAsUnprocessed(), wV = this.isFrozen, QV) return YV._areLightsDisposed = !0, !1
            } else UV.resetCachedMaterial(), eV.setEffect(nV, YV, this._materialContext);
          return !(!eV.effect || !eV.effect.isReady()) && (YV._renderId = UV.getRenderId(), JV._wasPreviouslyReady = !wV, JV._wasPreviouslyUsingInstances = !!xV, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(eV, xV, JV) {
          let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(eV, xV, JV, yV, pV), !JV.isDirty) return null;
          JV.markAsProcessed();
          const QV = this.dD().sk(),
            nV = new IV.d;
          let wV = 0;
          JV.USESPHERICALINVERTEX && nV.addFallback(wV++, "USESPHERICALINVERTEX"), JV.FOG && nV.addFallback(wV, "FOG"), JV.SPECULARAA && nV.addFallback(wV, "SPECULARAA"), JV.POINTSIZE && nV.addFallback(wV, "POINTSIZE"), JV.LOGARITHMICDEPTH && nV.addFallback(wV, "LOGARITHMICDEPTH"), JV.PARALLAX && nV.addFallback(wV, "PARALLAX"), JV.PARALLAX_RHS && nV.addFallback(wV, "PARALLAX_RHS"), JV.PARALLAXOCCLUSION && nV.addFallback(wV++, "PARALLAXOCCLUSION"), JV.ENVIRONMENTBRDF && nV.addFallback(wV++, "ENVIRONMENTBRDF"), JV.TANGENT && nV.addFallback(wV++, "TANGENT"), JV.BUMP && nV.addFallback(wV++, "BUMP"), wV = (0, dV.z)(JV, nV, this._maxSimultaneousLights, wV), JV.SPECULARTERM && nV.addFallback(wV++, "SPECULARTERM"), JV.USESPHERICALFROMREFLECTIONMAP && nV.addFallback(wV++, "USESPHERICALFROMREFLECTIONMAP"), JV.USEIRRADIANCEMAP && nV.addFallback(wV++, "USEIRRADIANCEMAP"), JV.LIGHTMAP && nV.addFallback(wV++, "LIGHTMAP"), JV.NORMAL && nV.addFallback(wV++, "NORMAL"), JV.AMBIENT && nV.addFallback(wV++, "AMBIENT"), JV.EMISSIVE && nV.addFallback(wV++, "EMISSIVE"), JV.VERTEXCOLOR && nV.addFallback(wV++, "VERTEXCOLOR"), JV.MORPHTARGETS && nV.addFallback(wV++, "MORPHTARGETS"), JV.MULTIVIEW && nV.addFallback(0, "MULTIVIEW");
          const ZV = [cV.j.PositionKind];
          JV.NORMAL && ZV.push(cV.j.NormalKind), JV.TANGENT && ZV.push(cV.j.TangentKind);
          for (let VV = 1; VV <= 6; ++VV) JV["UV" + VV] && ZV.push(`uv${1===VV?"":VV}`);
          JV.VERTEXCOLOR && ZV.push(cV.j.ColorKind), (0, dV.E)(ZV, eV, JV, nV), (0, dV.H)(ZV, JV), (0, dV.L)(ZV, eV, JV), (0, dV.A)(ZV, eV, JV);
          let vV = "pbr";
          const rV = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            kV = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, dV.hb)(rV, kV, !0);
          const bV = ["Material", "Scene", "Mesh"],
            EV = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: JV.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = nV, this._eventInfo.fallbackRank = wV, this._eventInfo.defines = JV, this._eventInfo.uniforms = rV, this._eventInfo.attributes = ZV, this._eventInfo.samplers = kV, this._eventInfo.uniformBuffersNames = bV, this._eventInfo.customCode = void 0, this._eventInfo.mesh = eV, this._eventInfo.indexParameters = EV, this._callbackPluginEventGeneric(128, this._eventInfo), re.d.AddUniformsAndSamplers(rV, kV), mV.b.AddUniforms(rV), mV.b.AddSamplers(kV), (0, we.c)(rV), this._useVertexPulling) {
            const VV = xV?.geometry;
            VV && (this._vertexPullingMetadata = (0, Ze.e)(VV), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((VV, eV) => {
              rV.push(`vp_${eV}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          uV.b && (uV.b.PrepareUniforms(rV, JV), uV.b.PrepareSamplers(kV, JV)), (0, dV.lb)({
            uniformsNames: rV,
            uniformBuffersNames: bV,
            samplers: kV,
            defines: JV,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const BV = {};
          this.customShaderNameResolve && (vV = this.customShaderNameResolve(vV, rV, bV, kV, JV, ZV, BV));
          const jV = JV.toString(),
            qV = QV.createEffect(vV, {
              attributes: ZV,
              uniformsNames: rV,
              uniformBuffersNames: bV,
              samplers: kV,
              defines: jV,
              fallbacks: nV,
              onCompiled: YV,
              onError: UV,
              indexParameters: EV,
              processFinalCode: BV.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: JV.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: VV._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, QV);
          return this._eventInfo.customCode = void 0, qV
        }
        _prepareDefines(eV, xV, JV) {
          let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const yV = xV.hasThinInstances,
            pV = this.dD(),
            QV = pV.sk();
          (0, dV.X)(pV, eV, JV, !0, this._maxSimultaneousLights, this._disableLighting), JV._needNormals = !0, (0, dV.bb)(pV, JV);
          const nV = this.needAlphaBlendingForMesh(eV) && this.dD().useOrderIndependentTransparency;
          if ((0, dV.fb)(pV, JV, this.canRenderToMRT && !nV), (0, dV.cb)(pV, JV, nV), re.d.PrepareDefines(QV.currentRenderPassId, eV, JV), JV.METALLICWORKFLOW = this.isMetallicWorkflow(), JV._areTexturesDirty) {
            JV._needUVs = !1;
            for (let VV = 1; VV <= 6; ++VV) JV["MAINUV" + VV] = !1;
            if (pV.texturesEnabled) {
              JV.ALBEDODIRECTUV = 0, JV.BASE_WEIGHTDIRECTUV = 0, JV.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, JV.AMBIENTDIRECTUV = 0, JV.OPACITYDIRECTUV = 0, JV.EMISSIVEDIRECTUV = 0, JV.REFLECTIVITYDIRECTUV = 0, JV.MICROSURFACEMAPDIRECTUV = 0, JV.METALLIC_REFLECTANCEDIRECTUV = 0, JV.REFLECTANCEDIRECTUV = 0, JV.BUMPDIRECTUV = 0, JV.LIGHTMAPDIRECTUV = 0, QV.getCaps().textureLOD && (JV.LODBASEDMICROSFURACE = !0), this._albedoTexture && SV.b.DiffuseTextureEnabled ? ((0, dV.Y)(this._albedoTexture, JV, "ALBEDO"), JV.GAMMAALBEDO = this._albedoTexture.gammaSpace) : JV.ALBEDO = !1, this._baseWeightTexture && SV.b.BaseWeightTextureEnabled ? (0, dV.Y)(this._baseWeightTexture, JV, "BASE_WEIGHT") : JV.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && SV.b.BaseDiffuseRoughnessTextureEnabled ? (0, dV.Y)(this._baseDiffuseRoughnessTexture, JV, "BASE_DIFFUSE_ROUGHNESS") : JV.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && SV.b.AmbientTextureEnabled ? ((0, dV.Y)(this._ambientTexture, JV, "AMBIENT"), JV.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : JV.AMBIENT = !1, this._opacityTexture && SV.b.OpacityTextureEnabled ? ((0, dV.Y)(this._opacityTexture, JV, "OPACITY"), JV.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : JV.OPACITY = !1;
              const VV = this._getReflectionTexture(),
                eV = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || QV.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, dV.U)(pV, VV, JV, this.realTimeFiltering, this.realTimeFilteringQuality, !eV), this._lightmapTexture && SV.b.LightmapTextureEnabled ? ((0, dV.Y)(this._lightmapTexture, JV, "LIGHTMAP"), JV.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, JV.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, JV.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : JV.LIGHTMAP = !1, this._emissiveTexture && SV.b.EmissiveTextureEnabled ? ((0, dV.Y)(this._emissiveTexture, JV, "EMISSIVE"), JV.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : JV.EMISSIVE = !1, SV.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, dV.Y)(this._metallicTexture, JV, "REFLECTIVITY"), JV.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, JV.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, JV.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, JV.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, JV.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, dV.Y)(this._reflectivityTexture, JV, "REFLECTIVITY"), JV.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, JV.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, JV.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : JV.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (JV.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, dV.Y)(this._metallicReflectanceTexture, JV, "METALLIC_REFLECTANCE"), JV.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : JV.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, dV.Y)(this._reflectanceTexture, JV, "REFLECTANCE"), JV.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : JV.REFLECTANCE = !1) : (JV.METALLIC_REFLECTANCE = !1, JV.REFLECTANCE = !1), this._microSurfaceTexture ? (0, dV.Y)(this._microSurfaceTexture, JV, "MICROSURFACEMAP") : JV.MICROSURFACEMAP = !1) : (JV.REFLECTIVITY = !1, JV.MICROSURFACEMAP = !1), QV.getCaps().standardDerivatives && this._bumpTexture && SV.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, dV.Y)(this._bumpTexture, JV, "BUMP"), this._useParallax && this._albedoTexture && SV.b.DiffuseTextureEnabled ? (JV.PARALLAX = !0, JV.PARALLAX_RHS = pV.useRightHandedSystem, JV.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : JV.PARALLAX = !1, JV.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (JV.BUMP = !1, JV.PARALLAX = !1, JV.PARALLAX_RHS = !1, JV.PARALLAXOCCLUSION = !1, JV.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && SV.b.ReflectionTextureEnabled ? (JV.ENVIRONMENTBRDF = !0, JV.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (JV.ENVIRONMENTBRDF = !1, JV.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? JV.ALPHAFROMALBEDO = !0 : JV.ALPHAFROMALBEDO = !1
            }
            JV.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === VV.LIGHTFALLOFF_STANDARD ? (JV.USEPHYSICALLIGHTFALLOFF = !1, JV.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === VV.LIGHTFALLOFF_GLTF ? (JV.USEPHYSICALLIGHTFALLOFF = !1, JV.USEGLTFLIGHTFALLOFF = !0) : (JV.USEPHYSICALLIGHTFALLOFF = !0, JV.USEGLTFLIGHTFALLOFF = !1), JV.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? JV.TWOSIDEDLIGHTING = !0 : JV.TWOSIDEDLIGHTING = !1, JV.MIRRORED = !!pV._mirroredCameraPosition, JV.SPECULARAA = QV.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(JV._areTexturesDirty || JV._areMiscDirty) && (JV.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, JV.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, JV.ALPHABLEND = this.needAlphaBlendingForMesh(eV), JV.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, JV.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), JV._areTexturesDirty && (JV.TEXTURE_REPETITION_MODE = QV.version > 1 || QV.isWebGPU ? this.textureRepetitionMode : 0), JV._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(JV), JV.FORCENORMALFORWARD = this._forceNormalForward, JV.RADIANCEOCCLUSION = this._useRadianceOcclusion, JV.HORIZONOCCLUSION = this._useHorizonOcclusion, JV._areMiscDirty && ((0, dV.$)(eV, pV, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(eV), JV, this._applyDecalMapAfterDetailMap, this._useVertexPulling, xV, this._isVertexOutputInvariant), JV.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !eV.isVerticesDataPresent(cV.j.NormalKind), JV.DEBUGMODE = this._debugMode), (0, dV.Q)(pV, QV, this, JV, !!YV, UV, yV), this._eventInfo.defines = JV, this._eventInfo.mesh = eV, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dV.P)(eV, JV, !0, !0, !0, this._transparencyMode !== VV.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(VV, eV, xV) {
          const JV = {
            clipPlane: !1,
            useInstances: !1,
            ...xV
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const xV = new te(this._eventInfo.defineNames),
              YV = this._prepareEffect(VV, VV, xV, void 0, void 0, JV.useInstances, JV.clipPlane);
            this._onEffectCreatedObservable && (je.effect = YV, je.subMesh = null, this._onEffectCreatedObservable.notifyObservers(je)), YV.isReady() ? eV && eV(this) : YV.onCompileObservable.add((() => {
              eV && eV(this)
            }))
          })()
        }
        buildUniformLayout() {
          const VV = this._uniformBuffer;
          VV.addUniform("vAlbedoInfos", 2), VV.addUniform("vBaseWeightInfos", 2), VV.addUniform("vBaseDiffuseRoughnessInfos", 2), VV.addUniform("vAmbientInfos", 4), VV.addUniform("vOpacityInfos", 2), VV.addUniform("vEmissiveInfos", 2), VV.addUniform("vLightmapInfos", 2), VV.addUniform("vReflectivityInfos", 3), VV.addUniform("vMicroSurfaceSamplerInfos", 2), VV.addUniform("vBumpInfos", 3), VV.addUniform("albedoMatrix", 16), VV.addUniform("baseWeightMatrix", 16), VV.addUniform("baseDiffuseRoughnessMatrix", 16), VV.addUniform("ambientMatrix", 16), VV.addUniform("opacityMatrix", 16), VV.addUniform("emissiveMatrix", 16), VV.addUniform("lightmapMatrix", 16), VV.addUniform("reflectivityMatrix", 16), VV.addUniform("microSurfaceSamplerMatrix", 16), VV.addUniform("bumpMatrix", 16), VV.addUniform("vTangentSpaceParams", 2), VV.addUniform("vAlbedoColor", 4), VV.addUniform("baseWeight", 1), VV.addUniform("baseDiffuseRoughness", 1), VV.addUniform("vLightingIntensity", 4), VV.addUniform("pointSize", 1), VV.addUniform("vReflectivityColor", 4), VV.addUniform("vEmissiveColor", 3), VV.addUniform("vAmbientColor", 3), VV.addUniform("vDebugMode", 2), VV.addUniform("vMetallicReflectanceFactors", 4), VV.addUniform("vMetallicReflectanceInfos", 2), VV.addUniform("metallicReflectanceMatrix", 16), VV.addUniform("vReflectanceInfos", 2), VV.addUniform("reflectanceMatrix", 16), VV.addUniform("cameraInfo", 4), VV.addUniform("vTextureRepetitionHexTilingParams", 4), (0, dV.gb)(VV, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(VV, eV, xV) {
          const JV = this.dD(),
            YV = xV.materialDefines;
          if (!YV) return;
          const UV = xV.effect;
          if (!UV) return;
          this._activeEffect = UV, eV.getMeshUniformBuffer().bindToEffect(UV, "Mesh"), eV.transferToEffect(VV);
          const yV = JV.sk();
          this._uniformBuffer.bindToEffect(UV, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, JV, eV, VV, this.isFrozen), re.d.Bind(yV.currentRenderPassId, this._activeEffect, eV, VV, this);
          const pV = JV.activeCamera;
          pV ? this._uniformBuffer.updateFloat4("cameraInfo", pV.minZ, pV.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const QV = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", QV[0], QV[1], QV[2], QV[3]), this._eventInfo.subMesh = xV, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), YV.OBJECTSPACE_NORMALMAP && (VV.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const nV = this._mustRebind(JV, UV, xV, eV.visibility),
            wV = yV._features.needToAlwaysBindUniformBuffers;
          (0, dV.e)(eV, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ze.d)(this._activeEffect, this._vertexPullingMetadata);
          let ZV = null;
          const vV = this._uniformBuffer;
          if (nV) {
            if (this.bindViewProjection(UV), ZV = this._getReflectionTexture(), !vV.useUbo || !this.isFrozen || !vV.isSync || xV._drawWrapper._forceRebindOnNextCall) {
              if (JV.texturesEnabled && (this._albedoTexture && SV.b.DiffuseTextureEnabled && (vV.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, dV.y)(this._albedoTexture, vV, "albedo")), this._baseWeightTexture && SV.b.BaseWeightTextureEnabled && (vV.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, dV.y)(this._baseWeightTexture, vV, "baseWeight")), this._baseDiffuseRoughnessTexture && SV.b.BaseDiffuseRoughnessTextureEnabled && (vV.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, dV.y)(this._baseDiffuseRoughnessTexture, vV, "baseDiffuseRoughness")), this._ambientTexture && SV.b.AmbientTextureEnabled && (vV.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, dV.y)(this._ambientTexture, vV, "ambient")), this._opacityTexture && SV.b.OpacityTextureEnabled && (vV.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, dV.y)(this._opacityTexture, vV, "opacity")), this._emissiveTexture && SV.b.EmissiveTextureEnabled && (vV.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, dV.y)(this._emissiveTexture, vV, "emissive")), this._lightmapTexture && SV.b.LightmapTextureEnabled && (vV.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, dV.y)(this._lightmapTexture, vV, "lightmap")), SV.b.SpecularTextureEnabled && (this._metallicTexture ? (vV.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, dV.y)(this._metallicTexture, vV, "reflectivity")) : this._reflectivityTexture && (vV.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, dV.y)(this._reflectivityTexture, vV, "reflectivity")), this._metallicReflectanceTexture && (vV.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, dV.y)(this._metallicReflectanceTexture, vV, "metallicReflectance")), this._reflectanceTexture && YV.REFLECTANCE && (vV.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, dV.y)(this._reflectanceTexture, vV, "reflectance")), this._microSurfaceTexture && (vV.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, dV.y)(this._microSurfaceTexture, vV, "microSurfaceSampler"))), this._bumpTexture && yV.getCaps().standardDerivatives && SV.b.BumpTextureEnabled && !this._disableBumpMap && (vV.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, dV.y)(this._bumpTexture, vV, "bump"), JV._mirroredCameraPosition ? vV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : vV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dV.k)(JV, YV, vV, this._reflectionColor, ZV, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && vV.updateFloat("pointSize", this.pointSize), YV.METALLICWORKFLOW) {
                KV.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, KV.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const VV = this.subSurface?._indexOfRefraction ?? 1.5,
                  eV = 1;
                KV.k.Color4[0].b = VV;
                const xV = Math.pow((VV - eV) / (VV + eV), 2);
                KV.k.Color4[0].a = xV, vV.updateDirectColor4("vReflectivityColor", KV.k.Color4[0]), vV.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else vV.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              vV.updateColor3("vEmissiveColor", SV.b.EmissiveTextureEnabled ? this._emissiveColor : KV.d.BlackReadOnly), !YV.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? vV.updateColor4("vAlbedoColor", this._albedoColor, 1) : vV.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), vV.updateFloat("baseWeight", this._baseWeight), vV.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * JV.environmentIntensity, this._lightingInfos.w = this._specularIntensity, vV.updateVector4("vLightingIntensity", this._lightingInfos), JV.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), vV.updateColor3("vAmbientColor", this._globalAmbientColor), vV.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            JV.texturesEnabled && (this._albedoTexture && SV.b.DiffuseTextureEnabled && vV.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && SV.b.BaseWeightTextureEnabled && vV.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && SV.b.BaseDiffuseRoughnessTextureEnabled && vV.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && SV.b.AmbientTextureEnabled && vV.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && SV.b.OpacityTextureEnabled && vV.setTexture("opacitySampler", this._opacityTexture), (0, dV.m)(JV, YV, vV, ZV, this.realTimeFiltering), YV.ENVIRONMENTBRDF && vV.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && SV.b.EmissiveTextureEnabled && vV.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && SV.b.LightmapTextureEnabled && vV.setTexture("lightmapSampler", this._lightmapTexture), SV.b.SpecularTextureEnabled && (this._metallicTexture ? vV.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && vV.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && vV.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && YV.REFLECTANCE && vV.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && vV.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && yV.getCaps().standardDerivatives && SV.b.BumpTextureEnabled && !this._disableBumpMap && vV.setTexture("bumpSampler", this._bumpTexture)), this.dD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(eV) && this.dD().depthPeelingRenderer.bind(UV), this._eventInfo.subMesh = xV, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, we.g)(this._activeEffect, this, JV), this.bindEyePosition(UV)
          } else wV && (this._needToBindSceneUbo = !0);
          !nV && this.isFrozen && !wV || !JV.lightsEnabled || this._disableLighting || (0, dV.p)(JV, eV, this._activeEffect, YV, this._maxSimultaneousLights), !nV && this.isFrozen || ((JV.fogEnabled && eV.applyFog && JV.fogMode !== aV.e.FOGMODE_NONE || ZV || this.subSurface.refractionTexture || eV.receiveShadows || YV.PREPASS || YV.CLUSTLIGHT_BATCH) && this.bindView(UV), (0, dV.g)(JV, eV, this._activeEffect, !0), YV.NUM_MORPH_INFLUENCERS && (0, dV.u)(eV, this._activeEffect), YV.BAKED_VERTEX_ANIMATION_TEXTURE && eV.bakedVertexAnimationManager?.bind(UV, YV.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dV.r)(YV, this._activeEffect, JV)), this._afterBind(eV, this._activeEffect, xV), vV.update()
        }
        getAnimatables() {
          const VV = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && VV.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && VV.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && VV.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && VV.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && VV.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && VV.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && VV.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? VV.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && VV.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && VV.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && VV.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && VV.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && VV.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && VV.push(this._microSurfaceTexture), VV
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.dD().environmentTexture
        }
        getActiveTextures() {
          const VV = super.getActiveTextures();
          return this._albedoTexture && VV.push(this._albedoTexture), this._baseWeightTexture && VV.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && VV.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && VV.push(this._ambientTexture), this._opacityTexture && VV.push(this._opacityTexture), this._reflectionTexture && VV.push(this._reflectionTexture), this._emissiveTexture && VV.push(this._emissiveTexture), this._reflectivityTexture && VV.push(this._reflectivityTexture), this._metallicTexture && VV.push(this._metallicTexture), this._metallicReflectanceTexture && VV.push(this._metallicReflectanceTexture), this._reflectanceTexture && VV.push(this._reflectanceTexture), this._microSurfaceTexture && VV.push(this._microSurfaceTexture), this._bumpTexture && VV.push(this._bumpTexture), this._lightmapTexture && VV.push(this._lightmapTexture), VV
        }
        hasTexture(VV) {
          return !!super.hasTexture(VV) || (this._albedoTexture === VV || (this._baseWeightTexture === VV || (this._baseDiffuseRoughnessTexture === VV || (this._ambientTexture === VV || (this._opacityTexture === VV || (this._reflectionTexture === VV || (this._emissiveTexture === VV || (this._reflectivityTexture === VV || (this._metallicTexture === VV || (this._metallicReflectanceTexture === VV || (this._reflectanceTexture === VV || (this._microSurfaceTexture === VV || (this._bumpTexture === VV || this._lightmapTexture === VV)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const VV = this.dD().enableSubSurfaceForPrePass();
          return VV && (VV.enabled = !0), !0
        }
        dispose(VV, eV) {
          this._breakShaderLoadedCheck = !0, eV && (this._environmentBRDFTexture && this.dD().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(VV, eV)
        }
      }, eV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(YV[Symbol.metadata] ?? null) : void 0;
        JV = [(0, XV.h)("_markAllSubMeshesAsMiscDirty")], (0, NV.i)(VV, null, JV, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: VV => "debugMode" in VV,
            get: VV => VV.debugMode,
            set: (VV, eV) => {
              VV.debugMode = eV
            }
          },
          metadata: eV
        }, yV, pV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV.PBRMATERIAL_OPAQUE = UV.e.MATERIAL_OPAQUE, VV.PBRMATERIAL_ALPHATEST = UV.e.MATERIAL_ALPHATEST, VV.PBRMATERIAL_ALPHABLEND = UV.e.MATERIAL_ALPHABLEND, VV.PBRMATERIAL_ALPHATESTANDBLEND = UV.e.MATERIAL_ALPHATESTANDBLEND, VV.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, VV.LIGHTFALLOFF_PHYSICAL = 0, VV.LIGHTFALLOFF_GLTF = 1, VV.LIGHTFALLOFF_STANDARD = 2, VV.ForceGLSL = !1, VV._ShaderLoader = new ve.b((() => [Promise.all([xV.e(626), xV.e(637)]).then((() => xV(64553))), Promise.all([xV.e(631), xV.e(627), xV.e(688), xV.e(640), xV.e(687)]).then((() => xV(64569)))]), (() => [Promise.all([xV.e(645), xV.e(647), xV.e(654)]).then((() => xV(64640))), Promise.all([xV.e(645), xV.e(648), xV.e(691), xV.e(658), xV.e(690)]).then((() => xV(64665)))])), VV
    })();
    Object.getOwnPropertyDescriptor(Te.prototype, "decalMap") || Object.defineProperty(Te.prototype, "decalMap", (0, Be.g)("PBRBaseMaterial", "decalMap")), (0, xV(44725).b)();
    var Pe = xV(41279);
    var Ae = xV(41341),
      Ne = xV(44717),
      Xe = xV(41077),
      Me = xV(41095),
      ze = xV(41201);
    let Ge = !1;
    const We = new KV.h,
      Re = new KV.h;
    class ge extends Ne.b {
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
      set wrapU(VV) {
        if (this._textures)
          for (let eV = 0; eV < this._textures.length; eV++) this._textures[eV].wrapU = VV
      }
      set wrapV(VV) {
        if (this._textures)
          for (let eV = 0; eV < this._textures.length; eV++) this._textures[eV].wrapV = VV
      }
      constructor(VV, eV, xV, JV, YV, UV) {
        const yV = !(!YV || !YV.generateMipMaps) && YV.generateMipMaps,
          pV = !(!YV || !YV.generateDepthTexture) && YV.generateDepthTexture,
          QV = YV && YV.depthTextureFormat ? YV.depthTextureFormat : 15,
          nV = !YV || void 0 === YV.doNotChangeAspectRatio || YV.doNotChangeAspectRatio,
          wV = !(!YV || !YV.drawOnlyOnFirstAttachmentByDefault) && YV.drawOnlyOnFirstAttachmentByDefault;
        if (super(VV, eV, JV, yV, nV, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Ge || (Ge = !0, Me.ThinEngine.prototype.restoreSingleAttachment = function() {
            const VV = this._gl;
            this.bindAttachments([VV.BACK])
          }, Me.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const VV = this._gl;
            this.bindAttachments([VV.COLOR_ATTACHMENT0])
          }, Me.ThinEngine.prototype.buildTextureLayout = function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const xV = this._gl,
              JV = [];
            if (eV) JV.push(xV.BACK);
            else
              for (let YV = 0; YV < VV.length; YV++) VV[YV] ? JV.push(xV["COLOR_ATTACHMENT" + YV]) : JV.push(xV.NONE);
            return JV
          }, Me.ThinEngine.prototype.bindAttachments = function(VV) {
            const eV = this._gl,
              xV = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, xV)
              for (let JV = 0; JV < VV.length; JV++) VV[JV] !== eV.NONE && xV[JV] && (0, ze.j)(xV[JV].format) && (this._integerMRTAttachmentsMask |= 1 << JV);
            eV.drawBuffers(VV)
          }, Me.ThinEngine.prototype.clearAttachments = function(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const yV = this._currentRenderTarget?.textures;
            let pV = !1;
            if (xV && VV && yV)
              for (let QV = 0; QV < eV.length; QV++) {
                const VV = yV[QV];
                if (eV[QV] !== this._gl.NONE && VV && (0, ze.j)(VV.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  pV = !0;
                  break
                }
              }
            if (!pV || !VV || !yV) return this.bindAttachments(eV), void this.clear(VV, xV, JV, YV, UV);
            this.bindAttachments(eV), this._applyColorWriteState();
            for (let QV = 0; QV < eV.length; QV++) {
              const xV = yV[QV];
              if (eV[QV] !== this._gl.NONE && xV) {
                let eV = VV;
                if ((0, ze.j)(xV.format)) {
                  const JV = (0, ze.m)(xV.type);
                  eV = JV ? We : Re;
                  const YV = JV ? 255 : 1;
                  eV.r = Math.round(VV.r * YV), eV.g = Math.round(VV.g * YV), eV.b = Math.round(VV.b * YV), eV.a = Math.round(VV.a * YV)
                }
                this._clearColorAttachment(QV, eV, xV.format, xV.type)
              }
            }
            if (JV || YV) {
              const VV = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, JV, YV, UV)
              } finally {
                this._integerMRTAttachmentsMask = VV
              }
            }
          }, Me.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, VV.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(VV), eV || this.generateMipMapsMultiFramebuffer(VV), xV && (VV._MSAAFramebuffer && this._bindUnboundFramebuffer(VV._framebuffer), xV()), this._bindUnboundFramebuffer(null)
          }, Me.ThinEngine.prototype.createMultipleRenderTarget = function(VV, eV) {
            let xV, JV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              YV = !1,
              UV = !0,
              yV = !1,
              pV = !1,
              QV = 1,
              nV = 1,
              wV = [],
              ZV = [],
              vV = [],
              rV = [],
              kV = [],
              bV = [],
              EV = [],
              BV = [],
              jV = [],
              qV = !1;
            const tV = this._createHardwareRenderTargetWrapper(!0, !1, VV);
            void 0 !== eV && (YV = void 0 !== eV.generateMipMaps && eV.generateMipMaps, UV = void 0 === eV.generateDepthBuffer || eV.generateDepthBuffer, yV = void 0 !== eV.generateStencilBuffer && eV.generateStencilBuffer, pV = void 0 !== eV.generateDepthTexture && eV.generateDepthTexture, QV = eV.ZQV ?? 1, nV = eV.samples ?? nV, wV = eV.types || wV, ZV = eV.samplingModes || ZV, vV = eV.useSRGBBuffers || vV, rV = eV.formats || rV, kV = eV.targetTypes || kV, bV = eV.faceIndex || bV, EV = eV.layerIndex || EV, BV = eV.layerCounts || BV, jV = eV.labels || jV, qV = eV.dontCreateTextures ?? !1, this.Nb > 1 && (13 === eV.depthTextureFormat || 17 === eV.depthTextureFormat || 16 === eV.depthTextureFormat || 14 === eV.depthTextureFormat || 18 === eV.depthTextureFormat) && (xV = eV.depthTextureFormat)), void 0 === xV && (xV = yV ? 13 : 14);
            const FV = this._gl,
              TV = this._currentFramebuffer,
              PV = FV.createFramebuffer();
            this._bindUnboundFramebuffer(PV);
            const AV = VV.width ?? VV,
              NV = VV.height ?? VV,
              XV = [],
              zV = [],
              GV = this.Nb > 1 && (13 === xV || 17 === xV || 18 === xV);
            tV.label = eV?.label ?? "MultiRenderTargetWrapper", tV._framebuffer = PV, tV._generateDepthBuffer = pV || UV, tV._generateStencilBuffer = pV ? GV : yV, tV._depthStencilBuffer = this._setupFramebufferDepthAttachments(tV._generateStencilBuffer, tV._generateDepthBuffer, AV, NV, 1, xV), tV._attachments = zV;
            for (let WV = 0; WV < QV; WV++) {
              let VV = ZV[WV] || 3,
                eV = wV[WV] || 0,
                xV = vV[WV] || !1;
              const JV = rV[WV] || 5,
                UV = kV[WV] || 3553,
                yV = BV[WV] ?? 1;
              (1 !== eV || this._caps.textureFloatLinearFiltering) && (2 !== eV || this._caps.textureHalfFloatLinearFiltering) || (VV = 1);
              const pV = this._getSamplingParameters(VV, YV);
              1 !== eV || this._caps.textureFloat || (eV = 0, MV.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), xV = xV && this._caps.supportSRGBBuffers && (this.Nb > 1 || this.isWebGPU);
              const QV = this.Nb > 1,
                nV = FV[QV ? "COLOR_ATTACHMENT" + WV : "COLOR_ATTACHMENT" + WV + "_WEBGL"];
              if (zV.push(nV), -1 === UV || qV) continue;
              const bV = new Xe.e(this, 6);
              XV[WV] = bV, FV.activeTexture(FV["TEXTURE" + WV]), FV.bindTexture(UV, bV._hardwareTexture.underlyingResource), FV.texParameteri(UV, FV.TEXTURE_MAG_FILTER, pV.mag), FV.texParameteri(UV, FV.TEXTURE_MIN_FILTER, pV.min), FV.texParameteri(UV, FV.TEXTURE_WRAP_S, FV.CLAMP_TO_EDGE), FV.texParameteri(UV, FV.TEXTURE_WRAP_T, FV.CLAMP_TO_EDGE);
              const EV = this._getRGBABufferInternalSizedFormat(eV, JV, xV),
                TV = this._getInternalFormat(JV),
                PV = this._getWebGLTextureType(eV);
              if (!QV || 35866 !== UV && 32879 !== UV)
                if (34067 === UV) {
                  for (let VV = 0; VV < 6; VV++) FV.texImage2D(FV.TEXTURE_CUBE_MAP_POSITIVE_X + VV, 0, EV, AV, NV, 0, TV, PV, null);
                  bV.isCube = !0
                } else FV.texImage2D(FV.TEXTURE_2D, 0, EV, AV, NV, 0, TV, PV, null);
              else 35866 === UV ? bV.is2DArray = !0 : bV.is3D = !0, bV.baseDepth = bV.depth = yV, FV.texImage3D(UV, 0, EV, AV, NV, yV, 0, TV, PV, null);
              YV && FV.generateMipmap(UV), this._bindTextureDirectly(UV, null), bV.baseWidth = AV, bV.baseHeight = NV, bV.width = AV, bV.height = NV, bV.isReady = !0, bV.samples = 1, bV.generateMipMaps = YV, bV.samplingMode = VV, bV.type = eV, bV._useSRGBBuffer = xV, bV.format = JV, bV.label = jV[WV] ?? tV.label + "-Texture" + WV, this._internalTexturesCache.push(bV)
            }
            if (pV && this._caps.depthTextureExtension && !qV) {
              const VV = new Xe.e(this, 14);
              let eV = 5,
                JV = FV.DEPTH_COMPONENT16,
                UV = FV.DEPTH_COMPONENT,
                yV = FV.UNSIGNED_SHORT,
                pV = FV.DEPTH_ATTACHMENT;
              this.Nb < 2 ? JV = FV.DEPTH_COMPONENT : 14 === xV ? (eV = 1, yV = FV.FLOAT, JV = FV.DEPTH_COMPONENT32F) : 18 === xV ? (eV = 0, yV = FV.FLOAT_32_UNSIGNED_INT_24_8_REV, JV = FV.DEPTH32F_STENCIL8, UV = FV.DEPTH_STENCIL, pV = FV.DEPTH_STENCIL_ATTACHMENT) : 16 === xV ? (eV = 0, yV = FV.UNSIGNED_INT, JV = FV.DEPTH_COMPONENT24, pV = FV.DEPTH_ATTACHMENT) : 13 !== xV && 17 !== xV || (eV = 12, yV = FV.UNSIGNED_INT_24_8, JV = FV.DEPTH24_STENCIL8, UV = FV.DEPTH_STENCIL, pV = FV.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(FV.TEXTURE_2D, VV, !0), FV.texParameteri(FV.TEXTURE_2D, FV.TEXTURE_MAG_FILTER, FV.NEAREST), FV.texParameteri(FV.TEXTURE_2D, FV.TEXTURE_MIN_FILTER, FV.NEAREST), FV.texParameteri(FV.TEXTURE_2D, FV.TEXTURE_WRAP_S, FV.CLAMP_TO_EDGE), FV.texParameteri(FV.TEXTURE_2D, FV.TEXTURE_WRAP_T, FV.CLAMP_TO_EDGE), FV.texImage2D(FV.TEXTURE_2D, 0, JV, AV, NV, 0, UV, yV, null), FV.framebufferTexture2D(FV.FRAMEBUFFER, pV, FV.TEXTURE_2D, VV._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(FV.TEXTURE_2D, null), tV._depthStencilTexture = VV, tV._depthStencilTextureWithStencil = GV, VV.baseWidth = AV, VV.baseHeight = NV, VV.width = AV, VV.height = NV, VV.isReady = !0, VV.samples = 1, VV.generateMipMaps = YV, VV.samplingMode = 1, VV.format = xV, VV.type = eV, VV.label = tV.label + "-DepthStencil", XV[QV] = VV, this._internalTexturesCache.push(VV)
            }
            if (tV.setTextures(XV), JV && FV.drawBuffers(zV), this._bindUnboundFramebuffer(TV), tV.setLayerAndFaceIndices(EV, bV), this.resetTextureCache(), qV) {
              if (nV > 1) {
                const VV = FV.createFramebuffer();
                if (!VV) throw new Error("Unable to create multi sampled framebuffer");
                tV._samples = nV, tV._MSAAFramebuffer = VV, QV > 0 && JV && (this._bindUnboundFramebuffer(VV), FV.drawBuffers(zV), this._bindUnboundFramebuffer(TV))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(tV, nV, JV);
            return tV
          }, Me.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(VV, eV) {
            let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Nb < 2 || !VV) return 1;
            if (VV.samples === eV) return eV;
            const JV = this._gl;
            eV = Math.min(eV, this.getCaps().maxMSAASamples), VV._depthStencilBuffer && (JV.deleteRenderbuffer(VV._depthStencilBuffer), VV._depthStencilBuffer = null), VV._MSAAFramebuffer && (JV.deleteFramebuffer(VV._MSAAFramebuffer), VV._MSAAFramebuffer = null);
            const YV = VV._attachments.length;
            for (let yV = 0; yV < YV; yV++) {
              const eV = VV.textures[yV]._hardwareTexture;
              eV?.releaseMSAARenderBuffers()
            }
            if (eV > 1 && "function" === typeof JV.renderbufferStorageMultisample) {
              const UV = JV.createFramebuffer();
              if (!UV) throw new Error("Unable to create multi sampled framebuffer");
              VV._MSAAFramebuffer = UV, this._bindUnboundFramebuffer(UV);
              const yV = [];
              for (let xV = 0; xV < YV; xV++) {
                const YV = VV.textures[xV],
                  UV = YV._hardwareTexture,
                  pV = JV[this.Nb > 1 ? "COLOR_ATTACHMENT" + xV : "COLOR_ATTACHMENT" + xV + "_WEBGL"],
                  QV = this._createRenderBuffer(YV.width, YV.height, eV, -1, this._getRGBABufferInternalSizedFormat(YV.type, YV.format, YV._useSRGBBuffer), pV);
                if (!QV) throw new Error("Unable to create multi sampled framebuffer");
                UV.addMSAARenderBuffer(QV), YV.samples = eV, yV.push(pV)
              }
              xV && JV.drawBuffers(yV)
            } else this._bindUnboundFramebuffer(VV._framebuffer);
            const UV = VV._depthStencilTexture ? VV._depthStencilTexture.format : void 0;
            return VV._depthStencilBuffer = this._setupFramebufferDepthAttachments(VV._generateStencilBuffer, VV._generateDepthBuffer, VV.width, VV.height, eV, UV), this._bindUnboundFramebuffer(null), VV._samples = eV, eV
          }, Me.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(VV) {
            const eV = VV,
              xV = this._gl;
            if (eV.isMulti)
              for (let JV = 0; JV < eV._attachments.length; JV++) {
                const VV = eV.textures[JV];
                !VV?.generateMipMaps || VV?.isCube || VV?.is3D || (this._bindTextureDirectly(xV.TEXTURE_2D, VV, !0), xV.generateMipmap(xV.TEXTURE_2D), this._bindTextureDirectly(xV.TEXTURE_2D, null))
              }
          }, Me.ThinEngine.prototype.resolveMultiFramebuffer = function(VV) {
            const eV = VV,
              xV = this._gl;
            if (!eV._MSAAFramebuffer || !eV.isMulti) return;
            let JV = eV.resolveMSAAColors ? xV.COLOR_BUFFER_BIT : 0;
            JV |= eV._generateDepthBuffer && eV.resolveMSAADepth ? xV.DEPTH_BUFFER_BIT : 0, JV |= eV._generateStencilBuffer && eV.resolveMSAAStencil ? xV.STENCIL_BUFFER_BIT : 0;
            const YV = eV._attachments,
              UV = YV.length;
            xV.bindFramebuffer(xV.READ_FRAMEBUFFER, eV._MSAAFramebuffer), xV.bindFramebuffer(xV.DRAW_FRAMEBUFFER, eV._framebuffer);
            for (let yV = 0; yV < UV; yV++) {
              const VV = eV.textures[yV];
              for (let eV = 0; eV < UV; eV++) YV[eV] = xV.NONE;
              YV[yV] = xV[this.Nb > 1 ? "COLOR_ATTACHMENT" + yV : "COLOR_ATTACHMENT" + yV + "_WEBGL"], xV.readBuffer(YV[yV]), xV.drawBuffers(YV), xV.blitFramebuffer(0, 0, VV.width, VV.height, 0, 0, VV.width, VV.height, JV, xV.NEAREST)
            }
            for (let yV = 0; yV < UV; yV++) YV[yV] = xV[this.Nb > 1 ? "COLOR_ATTACHMENT" + yV : "COLOR_ATTACHMENT" + yV + "_WEBGL"];
            xV.drawBuffers(YV), xV.bindFramebuffer(this._gl.FRAMEBUFFER, eV._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = UV;
        const ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [],
          BV = [],
          jV = [];
        this._initTypes(xV, ZV, vV, rV, kV, bV, EV, BV, jV, YV);
        const qV = !YV || void 0 === YV.generateDepthBuffer || YV.generateDepthBuffer,
          tV = !(!YV || void 0 === YV.generateStencilBuffer) && YV.generateStencilBuffer,
          FV = YV && YV.samples ? YV.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: vV,
          generateMipMaps: yV,
          generateDepthBuffer: qV,
          generateStencilBuffer: tV,
          generateDepthTexture: pV,
          depthTextureFormat: QV,
          types: ZV,
          ZQV: xV,
          useSRGBBuffers: rV,
          samples: FV,
          formats: kV,
          targetTypes: bV,
          faceIndex: EV,
          layerIndex: BV,
          layerCounts: jV,
          labels: UV,
          label: VV
        }, this._count = xV, this._drawOnlyOnFirstAttachmentByDefault = wV, xV > 0 && (this._createInternalTextures(), this._createTextures(UV))
      }
      _initTypes(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        for (let wV = 0; wV < VV; wV++) nV && nV.types && void 0 !== nV.types[wV] ? eV.push(nV.types[wV]) : eV.push(nV && nV.defaultType ? nV.defaultType : 0), nV && nV.samplingModes && void 0 !== nV.samplingModes[wV] ? xV.push(nV.samplingModes[wV]) : xV.push(GV.f.BILINEAR_SAMPLINGMODE), nV && nV.useSRGBBuffers && void 0 !== nV.useSRGBBuffers[wV] ? JV.push(nV.useSRGBBuffers[wV]) : JV.push(!1), nV && nV.formats && void 0 !== nV.formats[wV] ? YV.push(nV.formats[wV]) : YV.push(5), nV && nV.targetTypes && void 0 !== nV.targetTypes[wV] ? UV.push(nV.targetTypes[wV]) : UV.push(3553), nV && nV.faceIndex && void 0 !== nV.faceIndex[wV] ? yV.push(nV.faceIndex[wV]) : yV.push(0), nV && nV.layerIndex && void 0 !== nV.layerIndex[wV] ? pV.push(nV.layerIndex[wV]) : pV.push(0), nV && nV.layerCounts && void 0 !== nV.layerCounts[wV] ? QV.push(nV.layerCounts[wV]) : QV.push(1)
      }
      _createInternaTextureIndexMapping() {
        const VV = {},
          eV = [];
        if (!this._renderTarget) return eV;
        const xV = this._renderTarget.textures;
        for (let JV = 0; JV < xV.length; JV++) {
          const YV = xV[JV];
          if (!YV) continue;
          const UV = VV[YV.uniqueId];
          void 0 !== UV ? eV[JV] = UV : VV[YV.uniqueId] = JV
        }
        return eV
      }
      _rebuild() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || VV) return;
        const JV = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), eV && (this._releaseTextures(), this._createTextures(xV));
        const YV = this._renderTarget.textures;
        for (let UV = 0; UV < YV.length; UV++) {
          const VV = this._textures[UV];
          void 0 !== JV[UV] && this._renderTarget.setTexture(YV[JV[UV]], UV), VV._texture = YV[UV], VV._texture && (VV._noMipmap = !VV._texture.useMipMaps, VV._useSRGBBuffer = VV._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let VV = 0; VV < this._textures.length; VV++) this._textures[VV]._texture = null, this._textures[VV].dispose()
      }
      _createTextures(VV) {
        const eV = this._renderTarget.textures;
        this._textures = [];
        for (let xV = 0; xV < eV.length; xV++) {
          const JV = new GV.f(null, this.dD());
          VV?.[xV] && (JV.name = VV[xV]), JV._texture = eV[xV], JV._texture && (JV._noMipmap = !JV._texture.useMipMaps, JV._useSRGBBuffer = JV._texture._useSRGBBuffer), this._textures.push(JV)
        }
      }
      setInternalTexture(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === eV && (this._texture = VV), this.renderTarget.setTexture(VV, eV, xV), this.textures[eV] || (this.textures[eV] = new GV.f(null, this.dD()), this.textures[eV].name = this._textureNames?.[eV] ?? this.textures[eV].name), this.textures[eV]._texture = VV, this.textures[eV]._noMipmap = !VV.useMipMaps, this.textures[eV]._useSRGBBuffer = VV._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[eV] = VV.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[eV] = VV.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[eV] = VV._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[eV])) {
          let xV;
          xV = VV.is2DArray ? 35866 : VV.isCube ? 34067 : VV.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[eV] = xV
        }
      }
      setLayerAndFaceIndex(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[VV] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[VV] = eV), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[VV] = xV), this.renderTarget.setLayerAndFaceIndex(VV, eV, xV))
      }
      setLayerAndFaceIndices(VV, eV) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = VV, this._multiRenderTargetOptions.faceIndex = eV, this.renderTarget.setLayerAndFaceIndices(VV, eV))
      }
      get samples() {
        return this._samples
      }
      set samples(VV) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(VV) : this._samples = VV
      }
      resize(VV) {
        this._processSizeParameter(VV), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(VV, eV, xV) {
        this._multiRenderTargetOptions.ZQV = VV, this._count = VV;
        const JV = [],
          YV = [],
          UV = [],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [];
        this._textureNames = xV, this._initTypes(VV, JV, YV, UV, yV, pV, QV, nV, wV, eV), this._multiRenderTargetOptions.types = JV, this._multiRenderTargetOptions.samplingModes = YV, this._multiRenderTargetOptions.useSRGBBuffers = UV, this._multiRenderTargetOptions.formats = yV, this._multiRenderTargetOptions.targetTypes = pV, this._multiRenderTargetOptions.faceIndex = QV, this._multiRenderTargetOptions.layerIndex = nV, this._multiRenderTargetOptions.layerCounts = wV, this._multiRenderTargetOptions.labels = xV, this._rebuild(!1, !0, xV)
      }
      _unbindFrameBuffer(VV, eV) {
        this._renderTarget && VV.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(eV)
        }))
      }
      dispose() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), VV ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const VV = this._renderTarget?.textures;
        if (VV) {
          for (let eV = VV.length - 1; eV >= 0; eV--) this._textures[eV]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var De = xV(41429);
    class ie {
      constructor(VV) {
        this.name = De.e.NAME_GEOMETRYBUFFERRENDERER, this.yE = VV
      }
      register() {
        this.yE._gatherRenderTargetsStage.registerStep(De.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(VV) {
        this.yE._geometryBufferRenderer && VV.push(this.yE._geometryBufferRenderer.getGBuffer())
      }
    }
    let Ce = !1;
    var ae;
    ! function(VV) {
      VV[VV.Small = 0] = "Small", VV[VV.Medium = 1] = "Medium", VV[VV.Large = 2] = "Large", VV[VV.ExtraLarge = 3] = "ExtraLarge"
    }(ae || (ae = {}));
    const oe = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      ce = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class he {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(VV) {
        if (VV && this._enableMeshBlendTag && !this._scene.sk().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = VV
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(VV) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = VV, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(VV, eV) {
        VV === he.POSITION_TEXTURE_TYPE ? (this._positionIndex = eV, this._enablePosition = !0) : VV === he.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = eV, this._enableVelocity = !0) : VV === he.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = eV, this._enableVelocityLinear = !0) : VV === he.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = eV, this._enableReflectivity = !0) : VV === he.DEPTH_TEXTURE_TYPE ? (this._depthIndex = eV, this._enableDepth = !0) : VV === he.NORMAL_TEXTURE_TYPE ? (this._normalIndex = eV, this._enableNormal = !0) : VV === he.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = eV, this._enableScreenspaceDepth = !0) : VV === he.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = eV, this._enableIrradiance = !0) : VV === he.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = eV, this._enableObjectId = !0) : VV === he.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = eV, this._enableMeshBlendTag = !0)
      }
      _setAttachments(VV) {
        this._attachmentsFromPrePass = VV
      }
      _linkInternalTexture(VV) {
        this._multiRenderTarget.setInternalTexture(VV, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(VV) {
        this._multiRenderTarget.renderList = VV
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(VV) {
        switch (VV) {
          case he.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case he.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case he.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case he.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case he.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case he.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case he.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case he.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case he.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case he.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(VV) {
        this._enableDepth = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(VV) {
        this._enableNormal = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(VV) {
        this._enablePosition = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(VV) {
        this._enableVelocity = VV, VV || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = VV
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(VV) {
        this._enableVelocityLinear = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(VV) {
        this._enableReflectivity = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(VV) {
        this._enableScreenspaceDepth = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(VV) {
        this._enableIrradiance = VV, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(VV) {
        if (VV && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (VV && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (VV && !this._enableObjectId && !this._linkedWithPrePass) {
          const VV = this._scene.sk(),
            eV = Math.min(VV.getCaps().maxDrawBuffers ?? 1, 8),
            xV = this._assignRenderTargetIndices()[0] + 1;
          if (VV.getCaps().drawBuffersExtension && xV > eV) throw new Error(`GeometryBufferRenderer: ${xV} color attachments were requested, but this engine supports at most ${eV}`)
        }
        this._enableObjectId = VV, VV || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(VV) {
        if (this._enableMeshBlendTag !== VV) {
          if (VV) {
            const VV = this._scene.sk();
            if (! function(VV) {
                return "NATIVE" !== VV.shaderPlatformName && (VV.isWebGPU || 2 === VV.Nb)
              }(VV)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !VV.isWebGPU && !VV.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const eV = Math.min(VV.getCaps().maxDrawBuffers ?? 1, 8),
                xV = this._assignRenderTargetIndices()[0] + 1;
              if (VV.getCaps().drawBuffersExtension && xV > eV) throw new Error(`GeometryBufferRenderer: ${xV} color attachments were requested, but this engine supports at most ${eV}`)
            }
          }
          this._enableMeshBlendTag = VV, VV || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get yE() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        var YV;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new KV.h(0, 0, 0, 0), this._clearDepthColor = new KV.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = VV, this._ratioOrDimensions = eV, this._useUbo = VV.sk().supportsUniformBuffers, this._depthFormat = xV, this._textureTypesAndFormats = JV || {}, this._initShaderSourceAsync(), YV = he, Ce || (Ce = !0, Object.defineProperty(aV.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(VV) {
            VV && VV.isSupported && (this._geometryBufferRenderer = VV)
          },
          enumerable: !0,
          configurable: !0
        }), aV.e.prototype.enableGeometryBufferRenderer = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            xV = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new YV(this, VV, eV, xV), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, aV.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, YV._SceneComponentInitialization = VV => {
          let eV = VV._getComponent(De.e.NAME_GEOMETRYBUFFERRENDERER);
          eV || (eV = new ie(VV), VV.jYV(eV))
        }), he._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.sk().isWebGPU && !he.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([xV.e(646).then((() => xV(64835))), Promise.all([xV.e(645), xV.e(657)]).then((() => xV(64844)))])) : await Promise.all([xV.e(629).then((() => xV(64852))), xV.e(628).then((() => xV(64855)))]), this._shadersLoaded = !0
      }
      isReady(VV, eV) {
        if (!this._shadersLoaded) return !1;
        const xV = VV.eb();
        if (xV && xV.disableDepthWrite) return !1;
        if (function(VV) {
            return VV._isGaussianSplatting || "GaussianSplattingMesh" === (eV = VV.getClassName()) || "GaussianSplattingStream" === eV;
            var eV
          }(VV.getMesh())) return !1;
        const JV = [],
          YV = [cV.j.PositionKind],
          UV = VV.getMesh();
        UV.isVerticesDataPresent(cV.j.NormalKind) && (JV.push("#define HAS_NORMAL_ATTRIBUTE"), YV.push(cV.j.NormalKind));
        let yV = !1,
          pV = !1;
        if (xV) {
          let VV = !1;
          if (xV.needAlphaTestingForMesh(UV) && xV.getAlphaTestTexture() && (JV.push("#define ALPHATEST"), JV.push(`#define ALPHATEST_UV${xV.getAlphaTestTexture().coordinatesIndex+1}`), VV = !0), (xV.bumpTexture || xV.normalTexture || xV.geometryNormalTexture) && SV.b.BumpTextureEnabled) {
            const eV = xV.bumpTexture || xV.normalTexture || xV.geometryNormalTexture;
            JV.push("#define BUMP"), JV.push(`#define BUMP_UV${eV.coordinatesIndex+1}`), VV = !0
          }
          if (this._enableReflectivity) {
            let eV = !1;
            if ("PBRMetallicRoughnessMaterial" === xV.getClassName()) xV.metallicRoughnessTexture && (JV.push("#define ORMTEXTURE"), JV.push(`#define REFLECTIVITY_UV${xV.metallicRoughnessTexture.coordinatesIndex+1}`), JV.push("#define METALLICWORKFLOW"), VV = !0, eV = !0), null != xV.metallic && (JV.push("#define METALLIC"), JV.push("#define METALLICWORKFLOW"), eV = !0), null != xV.roughness && (JV.push("#define ROUGHNESS"), JV.push("#define METALLICWORKFLOW"), eV = !0), eV && (xV.baseTexture && (JV.push("#define ALBEDOTEXTURE"), JV.push(`#define ALBEDO_UV${xV.baseTexture.coordinatesIndex+1}`), xV.baseTexture.gammaSpace && JV.push("#define GAMMAALBEDO"), VV = !0), xV.baseColor && JV.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === xV.getClassName()) xV.specularGlossinessTexture ? (JV.push("#define SPECULARGLOSSINESSTEXTURE"), JV.push(`#define REFLECTIVITY_UV${xV.specularGlossinessTexture.coordinatesIndex+1}`), VV = !0, xV.specularGlossinessTexture.gammaSpace && JV.push("#define GAMMAREFLECTIVITYTEXTURE")) : xV.specularColor && JV.push("#define REFLECTIVITYCOLOR"), null != xV.glossiness && JV.push("#define GLOSSINESS");
            else if ("PBRMaterial" === xV.getClassName()) xV.metallicTexture && (JV.push("#define ORMTEXTURE"), JV.push(`#define REFLECTIVITY_UV${xV.metallicTexture.coordinatesIndex+1}`), JV.push("#define METALLICWORKFLOW"), VV = !0, eV = !0), null != xV.metallic && (JV.push("#define METALLIC"), JV.push("#define METALLICWORKFLOW"), eV = !0), null != xV.roughness && (JV.push("#define ROUGHNESS"), JV.push("#define METALLICWORKFLOW"), eV = !0), eV ? (xV.albedoTexture && (JV.push("#define ALBEDOTEXTURE"), JV.push(`#define ALBEDO_UV${xV.albedoTexture.coordinatesIndex+1}`), xV.albedoTexture.gammaSpace && JV.push("#define GAMMAALBEDO"), VV = !0), xV.albedoColor && JV.push("#define ALBEDOCOLOR")) : (xV.reflectivityTexture ? (JV.push("#define SPECULARGLOSSINESSTEXTURE"), JV.push(`#define REFLECTIVITY_UV${xV.reflectivityTexture.coordinatesIndex+1}`), xV.reflectivityTexture.gammaSpace && JV.push("#define GAMMAREFLECTIVITYTEXTURE"), VV = !0) : xV.reflectivityColor && JV.push("#define REFLECTIVITYCOLOR"), null != xV.microSurface && JV.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === xV.getClassName()) xV.specularTexture && (JV.push("#define REFLECTIVITYTEXTURE"), JV.push(`#define REFLECTIVITY_UV${xV.specularTexture.coordinatesIndex+1}`), xV.specularTexture.gammaSpace && JV.push("#define GAMMAREFLECTIVITYTEXTURE"), VV = !0), xV.specularColor && JV.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === xV.getClassName()) {
              const eV = xV;
              JV.push("#define METALLIC"), JV.push("#define ROUGHNESS"), eV._useRoughnessFromMetallicTextureGreen && eV.baseMetalnessTexture ? (JV.push("#define ORMTEXTURE"), JV.push(`#define REFLECTIVITY_UV${eV.baseMetalnessTexture.coordinatesIndex+1}`), VV = !0) : eV.baseMetalnessTexture ? (JV.push("#define METALLIC_TEXTURE"), JV.push(`#define METALLIC_UV${eV.baseMetalnessTexture.coordinatesIndex+1}`), VV = !0) : eV.specularRoughnessTexture && (JV.push("#define ROUGHNESS_TEXTURE"), JV.push(`#define ROUGHNESS_UV${eV.specularRoughnessTexture.coordinatesIndex+1}`), VV = !0), eV.baseColorTexture && (JV.push("#define ALBEDOTEXTURE"), JV.push(`#define ALBEDO_UV${eV.baseColorTexture.coordinatesIndex+1}`), eV.baseColorTexture.gammaSpace && JV.push("#define GAMMAALBEDO"), VV = !0), eV.baseColor && JV.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (JV.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === xV.getClassName())) {
            const eV = xV;
            eV.subsurfaceWeight > 0 && eV.subsurfaceWeightTexture && (JV.push("#define SUBSURFACE_WEIGHT"), JV.push(`#define SUBSURFACEWEIGHT_UV${eV.subsurfaceWeightTexture.coordinatesIndex+1}`), VV = !0), eV.transmissionWeight > 0 && eV.transmissionWeightTexture && (JV.push("#define TRANSMISSION_WEIGHT"), JV.push(`#define TRANSMISSIONWEIGHT_UV${eV.transmissionWeightTexture.coordinatesIndex+1}`), VV = !0)
          }
          VV && (JV.push("#define NEED_UV"), UV.isVerticesDataPresent(cV.j.UVKind) && (YV.push(cV.j.UVKind), JV.push("#define UV1"), yV = !0), UV.isVerticesDataPresent(cV.j.UV2Kind) && (YV.push(cV.j.UV2Kind), JV.push("#define UV2"), pV = !0))
        }
        if (this._enableDepth && (JV.push("#define DEPTH"), JV.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (JV.push("#define NORMAL"), JV.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (JV.push("#define POSITION"), JV.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (JV.push("#define VELOCITY"), JV.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(UV) && JV.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (JV.push("#define VELOCITY_LINEAR"), JV.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(UV) && JV.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (JV.push("#define REFLECTIVITY"), JV.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (JV.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), JV.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          JV.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), JV.push("#define IRRADIANCE");
          const VV = this._scene;
          if (VV.environmentTexture) {
            const eV = {};
            let YV = !1,
              UV = 0;
            "OpenPBRMaterial" !== xV.getClassName() && "StandardMaterial" !== xV.getClassName() && "PBRMetallicRoughnessMaterial" !== xV.getClassName() && "PBRSpecularGlossinessMaterial" !== xV.getClassName() && "PBRMaterial" !== xV.getClassName() || (YV = !!xV.realtimeFiltering, UV = xV.realtimeFilteringQuality || 0), (0, dV.U)(VV, VV.environmentTexture, eV, YV, UV, !0);
            for (const VV in eV) eV[VV] && JV.push("#define " + VV);
            eV.USEIRRADIANCEMAP || JV.push("#define SPHERICAL_HARMONICS");
            const yV = VV.postProcessRenderPipelineManager.supportedPipelines.find((VV => "IBLShadowsRenderPipeline" === VV.getClassName()));
            if (yV) {
              const VV = yV;
              VV._getAccumulatedTexture() && (JV.push("#define IBL_SHADOW_TEXTURE"), VV.coloredShadows && JV.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (JV.push("#define OBJECT_ID"), JV.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (JV.push("#define MESH_BLEND_TAG"), JV.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && JV.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && JV.push("#define ENCODE_NORMAL"), UV.useBones && UV.computeBonesUsingShaders && UV.skeleton ? (YV.push(cV.j.MatricesIndicesKind), YV.push(cV.j.MatricesWeightsKind), UV.numBoneInfluencers > 4 && (YV.push(cV.j.MatricesIndicesExtraKind), YV.push(cV.j.MatricesWeightsExtraKind)), JV.push("#define NUM_BONE_INFLUENCERS " + UV.numBoneInfluencers), JV.push("#define BONETEXTURE " + UV.skeleton.isUsingTextureForMatrices), JV.push("#define BonesPerMesh " + (UV.skeleton.bones.length + 1))) : (JV.push("#define NUM_BONE_INFLUENCERS 0"), JV.push("#define BONETEXTURE false"), JV.push("#define BonesPerMesh 0"));
        const QV = UV.morphTargetManager ? (0, dV.O)(UV.morphTargetManager, JV, YV, UV, !0, !0, !1, yV, pV, !1) : 0;
        eV && (JV.push("#define INSTANCES"), (0, dV.ob)(YV, this._enableVelocity || this._enableVelocityLinear), VV.getRenderingMesh().hasThinInstances && JV.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? JV.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : JV.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, we.k)(xV, this._scene, JV);
        const nV = this._scene.sk(),
          wV = VV._getDrawWrapper(void 0, !0),
          ZV = wV.defines,
          vV = JV.join("\n");
        return ZV !== vV && wV.setEffect(nV.createEffect("geometry", {
          attributes: YV,
          uniformsNames: ce,
          samplers: oe,
          defines: vV,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: QV
          },
          shaderLanguage: this.shaderLanguage
        }, nV), vV), wV.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(VV) {
        if (this._enableObjectId && 1 !== VV) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== VV) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = VV
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.sk().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.yE.sk()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.yE.sk().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const VV = [],
          eV = [];
        let xV = 0;
        return this._enableDepth && (this._depthIndex = xV, xV++, VV.push("gBuffer_Depth"), eV.push(this._textureTypesAndFormats[he.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = xV, xV++, VV.push("gBuffer_Normal"), eV.push(this._textureTypesAndFormats[he.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = xV, xV++, VV.push("gBuffer_Position"), eV.push(this._textureTypesAndFormats[he.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = xV, xV++, VV.push("gBuffer_Velocity"), eV.push(this._textureTypesAndFormats[he.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = xV, xV++, VV.push("gBuffer_VelocityLinear"), eV.push(this._textureTypesAndFormats[he.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = xV, xV++, VV.push("gBuffer_Reflectivity"), eV.push(this._textureTypesAndFormats[he.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = xV, xV++, VV.push("gBuffer_ScreenspaceDepth"), eV.push(this._textureTypesAndFormats[he.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = xV, xV++, VV.push("gBuffer_Irradiance"), eV.push(this._textureTypesAndFormats[he.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = xV, xV++, VV.push("gBuffer_ObjectId"), eV.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = xV, xV++, VV.push("gBuffer_MeshBlendTag"), eV.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [xV, VV, eV]
      }
      _createRenderTargets() {
        const VV = this._scene.sk(),
          [eV, xV, JV] = this._assignRenderTargetIndices(),
          YV = Math.min(VV.getCaps().maxDrawBuffers ?? 1, 8);
        if (VV.getCaps().drawBuffersExtension && eV > YV) throw new Error(`GeometryBufferRenderer: ${eV} color attachments were requested, but this engine supports at most ${YV}`);
        let yV = 0;
        VV._caps.textureFloat && VV._caps.textureFloatLinearFiltering ? yV = 1 : VV._caps.textureHalfFloat && VV._caps.textureHalfFloatLinearFiltering && (yV = 2);
        const pV = this._getRenderTargetDimensions(),
          QV = [],
          nV = [],
          wV = [];
        for (const UV of JV) UV ? (QV.push(UV.textureType), nV.push(UV.textureFormat), wV.push(UV.samplingMode ?? 2)) : (QV.push(yV), nV.push(5), wV.push(2));
        if (this._normalsAreUnsigned = 11 === QV[he.NORMAL_TEXTURE_TYPE] || 13 === QV[he.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new ge("gBuffer", pV, eV, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: QV,
            formats: nV,
            samplingModes: wV,
            depthTextureFormat: this._depthFormat
          }, xV.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = GV.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = GV.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const ZV = [!0],
          vV = [!1],
          rV = [!0];
        for (let UV = 1; UV < eV; ++UV) ZV.push(!0), rV.push(!1), vV.push(!0);
        const kV = VV.buildTextureLayout(ZV),
          bV = VV.buildTextureLayout(vV),
          EV = VV.buildTextureLayout(rV);
        this._multiRenderTarget.onClearObservable.add((VV => {
          const eV = this.useSpecificClearForDepthTexture ? bV : kV;
          VV.clearAttachments(this._clearColor, eV, !0, !0, !0), this.useSpecificClearForDepthTexture && VV.clearAttachments(this._clearDepthColor, EV, !0, !1, !1), VV.bindAttachments(kV)
        })), this._resizeObserver = VV.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const BV = VV => {
          const eV = VV.getRenderingMesh(),
            xV = VV.getEffectiveMesh(),
            JV = this._scene,
            YV = JV.sk(),
            yV = VV.eb();
          if (!yV) return;
          if (xV._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[xV.uniqueId] && (this._previousTransformationMatrices[xV.uniqueId] = {
              cZ: oV.d.Identity(),
              viewProjection: JV.getTransformMatrix()
            }, eV.skeleton)) {
            const VV = eV.skeleton.getTransformMatrices(eV);
            this._previousBonesTransformationMatrices[eV.uniqueId] = this._copyBonesTransformationMatrices(VV, new Float32Array(VV.length))
          }
          const pV = eV._getInstancesRenderList(VV._id, !!VV.getReplacementMesh());
          if (pV.mustReturn) return;
          const QV = YV.getCaps().instancedArrays && (null !== pV.visibleInstances[VV._id] || eV.hasThinInstances),
            nV = xV.getWorldMatrix();
          if (this.isReady(VV, QV)) {
            const wV = VV._getDrawWrapper();
            if (!wV) return;
            const ZV = wV.effect;
            let vV;
            YV.enableEffect(wV), QV || eV._bind(VV, ZV, yV.fillMode), this._useUbo ? ((0, dV.x)(ZV, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (ZV.setMatrix("viewProjection", JV.getTransformMatrix()), ZV.setMatrix("view", JV.getViewMatrix()), this._scene.bindEyePosition(ZV, "vEyePosition"));
            if (eV._instanceDataStorage.isFrozen || !yV.backFaceCulling && null === yV.sideOrientation) vV = eV._effectiveSideOrientation;
            else {
              const VV = xV._getWorldMatrixDeterminant();
              vV = yV._getEffectiveOrientation(eV), VV < 0 && (vV = vV === UV.e.ClockWiseSideOrientation ? UV.e.CounterClockWiseSideOrientation : UV.e.ClockWiseSideOrientation)
            }
            if (yV._preBind(wV, vV), yV.needAlphaTestingForMesh(xV)) {
              const VV = yV.getAlphaTestTexture();
              VV && (ZV.setTexture("diffuseSampler", VV), ZV.setMatrix("diffuseMatrix", VV.getTextureMatrix()), ZV.setFloat("alphaCutOff", yV.alphaCutOff ?? .4))
            }
            if ((yV.bumpTexture || yV.normalTexture || yV.geometryNormalTexture) && JV.sk().getCaps().standardDerivatives && SV.b.BumpTextureEnabled) {
              const VV = yV.bumpTexture || yV.normalTexture || yV.geometryNormalTexture;
              ZV.setFloat3("vBumpInfos", VV.coordinatesIndex, 1 / VV.level, yV.parallaxScaleBias), ZV.setMatrix("bumpMatrix", VV.getTextureMatrix()), ZV.setTexture("bumpSampler", VV), ZV.setFloat2("vTangentSpaceParams", yV.invertNormalMapX ? -1 : 1, yV.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === yV.getClassName()) null !== yV.metallicRoughnessTexture && (ZV.setTexture("reflectivitySampler", yV.metallicRoughnessTexture), ZV.setMatrix("reflectivityMatrix", yV.metallicRoughnessTexture.getTextureMatrix())), null !== yV.metallic && ZV.setFloat("metallic", yV.metallic), null !== yV.roughness && ZV.setFloat("glossiness", 1 - yV.roughness), null !== yV.baseTexture && (ZV.setTexture("albedoSampler", yV.baseTexture), ZV.setMatrix("albedoMatrix", yV.baseTexture.getTextureMatrix())), null !== yV.baseColor && ZV.setColor3("albedoColor", yV.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === yV.getClassName()) null !== yV.specularGlossinessTexture ? (ZV.setTexture("reflectivitySampler", yV.specularGlossinessTexture), ZV.setMatrix("reflectivityMatrix", yV.specularGlossinessTexture.getTextureMatrix())) : null !== yV.specularColor && ZV.setColor3("reflectivityColor", yV.specularColor), null !== yV.glossiness && ZV.setFloat("glossiness", yV.glossiness);
            else if ("PBRMaterial" === yV.getClassName()) null !== yV.metallicTexture && (ZV.setTexture("reflectivitySampler", yV.metallicTexture), ZV.setMatrix("reflectivityMatrix", yV.metallicTexture.getTextureMatrix())), null !== yV.metallic && ZV.setFloat("metallic", yV.metallic), null !== yV.roughness && ZV.setFloat("glossiness", 1 - yV.roughness), null !== yV.roughness || null !== yV.metallic || null !== yV.metallicTexture ? (null !== yV.albedoTexture && (ZV.setTexture("albedoSampler", yV.albedoTexture), ZV.setMatrix("albedoMatrix", yV.albedoTexture.getTextureMatrix())), null !== yV.albedoColor && ZV.setColor3("albedoColor", yV.albedoColor)) : (null !== yV.reflectivityTexture ? (ZV.setTexture("reflectivitySampler", yV.reflectivityTexture), ZV.setMatrix("reflectivityMatrix", yV.reflectivityTexture.getTextureMatrix())) : null !== yV.reflectivityColor && ZV.setColor3("reflectivityColor", yV.reflectivityColor), null !== yV.microSurface && ZV.setFloat("glossiness", yV.microSurface));
            else if ("StandardMaterial" === yV.getClassName()) null !== yV.specularTexture && (ZV.setTexture("reflectivitySampler", yV.specularTexture), ZV.setMatrix("reflectivityMatrix", yV.specularTexture.getTextureMatrix())), null !== yV.specularColor && ZV.setColor3("reflectivityColor", yV.specularColor);
            else if ("OpenPBRMaterial" === yV.getClassName()) {
              const VV = yV;
              VV._useRoughnessFromMetallicTextureGreen && VV.baseMetalnessTexture ? (ZV.setTexture("reflectivitySampler", VV.baseMetalnessTexture), ZV.setMatrix("reflectivityMatrix", VV.baseMetalnessTexture.getTextureMatrix())) : VV.baseMetalnessTexture ? (ZV.setTexture("metallicSampler", VV.baseMetalnessTexture), ZV.setMatrix("metallicMatrix", VV.baseMetalnessTexture.getTextureMatrix())) : VV.specularRoughnessTexture && (ZV.setTexture("roughnessSampler", VV.specularRoughnessTexture), ZV.setMatrix("roughnessMatrix", VV.specularRoughnessTexture.getTextureMatrix())), ZV.setFloat("metallic", VV.baseMetalness), ZV.setFloat("glossiness", 1 - VV.specularRoughness), null !== VV.baseColorTexture && (ZV.setTexture("albedoSampler", VV.baseColorTexture), ZV.setMatrix("albedoMatrix", VV.baseColorTexture.getTextureMatrix())), null !== VV.baseColor && ZV.setColor3("albedoColor", VV.baseColor)
            }
            if (this._enableIrradiance && JV.environmentTexture) {
              const VV = JV.environmentTexture,
                eV = JV.postProcessRenderPipelineManager.supportedPipelines.find((VV => "IBLShadowsRenderPipeline" === VV.getClassName()));
              if (eV) {
                const VV = eV._getAccumulatedTexture();
                VV && (ZV.setTexture("iblShadowSampler", VV), ZV.setFloat2("shadowTextureSize", VV.getSize().width, VV.getSize().height))
              }
              if (ZV.setMatrix("reflectionMatrix", VV.getReflectionTextureMatrix()), ZV.setFloat2("vReflectionInfos", VV.level * JV.iblIntensity, 0), ZV.setTexture("reflectionSampler", VV), VV.irradianceTexture && (ZV.setTexture("irradianceSampler", VV.irradianceTexture), VV.irradianceTexture._dominantDirection && ZV.setVector3("vReflectionDominantDirection", VV.irradianceTexture._dominantDirection)), VV.sphericalPolynomial) {
                const eV = VV.sphericalPolynomial;
                if (eV.preScaledHarmonics) {
                  const VV = eV.preScaledHarmonics;
                  ZV.setVector3("vSphericalL00", VV.l00), ZV.setVector3("vSphericalL1_1", VV.l1_1), ZV.setVector3("vSphericalL10", VV.l10), ZV.setVector3("vSphericalL11", VV.l11), ZV.setVector3("vSphericalL2_2", VV.l2_2), ZV.setVector3("vSphericalL2_1", VV.l2_1), ZV.setVector3("vSphericalL20", VV.l20), ZV.setVector3("vSphericalL21", VV.l21), ZV.setVector3("vSphericalL22", VV.l22)
                } else ZV.setFloat3("vSphericalX", eV.x.x, eV.x.y, eV.x.z), ZV.setFloat3("vSphericalY", eV.y.x, eV.y.y, eV.y.z), ZV.setFloat3("vSphericalZ", eV.z.x, eV.z.y, eV.z.z), ZV.setFloat3("vSphericalXX_ZZ", eV.xx.x - eV.zz.x, eV.xx.y - eV.zz.y, eV.xx.z - eV.zz.z), ZV.setFloat3("vSphericalYY_ZZ", eV.yy.x - eV.zz.x, eV.yy.y - eV.zz.y, eV.yy.z - eV.zz.z), ZV.setFloat3("vSphericalZZ", eV.zz.x, eV.zz.y, eV.zz.z), ZV.setFloat3("vSphericalXY", eV.xy.x, eV.xy.y, eV.xy.z), ZV.setFloat3("vSphericalYZ", eV.yz.x, eV.yz.y, eV.yz.z), ZV.setFloat3("vSphericalZX", eV.zx.x, eV.zx.y, eV.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === yV.getClassName()) {
                const VV = yV;
                ZV.setFloat("vSubsurfaceWeight", VV.subsurfaceWeight), VV.subsurfaceWeightTexture && (ZV.setTexture("subsurfaceWeightSampler", VV.subsurfaceWeightTexture), ZV.setMatrix("subsurfaceWeightMatrix", VV.subsurfaceWeightTexture.getTextureMatrix())), ZV.setFloat("vTransmissionWeight", VV.transmissionWeight), VV.transmissionWeightTexture && (ZV.setTexture("transmissionWeightSampler", VV.transmissionWeightTexture), ZV.setMatrix("transmissionWeightMatrix", VV.transmissionWeightTexture.getTextureMatrix())), ZV.setFloat("vTransmissionScatterAnisotropy", VV.transmissionScatterAnisotropy), ZV.setFloat("vSubsurfaceScatterAnisotropy", VV.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, we.g)(ZV, yV, this._scene), eV.useBones && eV.computeBonesUsingShaders && eV.skeleton) {
              const VV = eV.skeleton;
              if (VV.isUsingTextureForMatrices && ZV.getUniformIndex("boneTextureInfo") > -1) {
                const xV = VV.getTransformMatrixTexture(eV);
                ZV.setTexture("boneSampler", xV), ZV.setFloat2("boneTextureInfo", VV._textureWidth, VV._textureHeight)
              } else ZV.setMatrices("mBones", eV.skeleton.getTransformMatrices(eV));
              (this._enableVelocity || this._enableVelocityLinear) && ZV.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[eV.uniqueId])
            }
            if ((0, dV.u)(eV, ZV), eV.morphTargetManager && eV.morphTargetManager.isUsingTextureForTargets && eV.morphTargetManager._bind(ZV), (this._enableVelocity || this._enableVelocityLinear) && (ZV.setMatrix("previousWorld", this._previousTransformationMatrices[xV.uniqueId].cZ), ZV.setMatrix("previousViewProjection", this._previousTransformationMatrices[xV.uniqueId].viewProjection)), this._enableObjectId) {
              let VV = eV.uniqueId;
              if (this.objectIdProvider) VV = (0, re.h)(eV, this.objectIdProvider);
              else if (VV > 16777215) throw new Error(`Invalid geometry object ID ${VV} for mesh "${eV.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              ZV.setFloat("objectId", VV)
            }
            if (this._enableMeshBlendTag) {
              const VV = this.meshBlendTagProvider ? (0, re.f)(eV, this.meshBlendTagProvider) : eV.meshBlendingTag;
              ZV.setInt("meshBlendTag", VV)
            }
            QV && eV.hasThinInstances && ZV.setMatrix("world", nV), eV._processRendering(xV, VV, ZV, yV.fillMode, pV, QV, ((VV, eV) => {
              VV || ZV.setMatrix("world", eV)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[xV.uniqueId].cZ = nV.clone(), this._previousTransformationMatrices[xV.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), eV.skeleton && this._copyBonesTransformationMatrices(eV.skeleton.getTransformMatrices(eV), this._previousBonesTransformationMatrices[xV.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (eV, xV, JV) => {
          if ((JV || 0 === xV) && eV.hT)
            for (let YV = 0; YV < eV.hT.length; ++YV) {
              const xV = eV.hT[YV],
                JV = xV.eb(),
                UV = xV.getRenderingMesh();
              if (!JV) continue;
              const yV = UV._getInstancesRenderList(xV._id, !!xV.getReplacementMesh()),
                pV = VV.getCaps().instancedArrays && (null !== yV.visibleInstances[xV._id] || UV.hasThinInstances);
              if (!this.isReady(xV, pV)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (eV, xV, JV, YV) => {
          let UV;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.sk().bindAttachments(this._attachmentsFromPrePass)
          }
          if (YV.length) {
            for (VV.setColorWrite(!1), UV = 0; UV < YV.length; UV++) BV(YV.data[UV]);
            VV.setColorWrite(!0)
          }
          for (UV = 0; UV < eV.length; UV++) BV(eV.data[UV]);
          for (VV.setDepthWrite(!1), UV = 0; UV < xV.length; UV++) BV(xV.data[UV]);
          if (this.renderTransparentMeshes)
            for (UV = 0; UV < JV.length; UV++) BV(JV.data[UV]);
          VV.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const VV = this._scene.sk();
        return {
          width: Math.max(1, Math.floor(VV.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(VV.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(VV, eV) {
        for (let xV = 0; xV < VV.length; xV++) eV[xV] = VV[xV];
        return eV
      }
    }
    he.ForceGLSL = !1, he.DEPTH_TEXTURE_TYPE = 0, he.NORMAL_TEXTURE_TYPE = 1, he.POSITION_TEXTURE_TYPE = 2, he.VELOCITY_TEXTURE_TYPE = 3, he.REFLECTIVITY_TEXTURE_TYPE = 4, he.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, he.VELOCITY_LINEAR_TEXTURE_TYPE = 6, he.IRRADIANCE_TEXTURE_TYPE = 7, he.OBJECT_ID_TEXTURE_TYPE = 8, he.MESH_BLEND_TAG_TEXTURE_TYPE = 9, he._SceneComponentInitialization = VV => {
      throw (0, Be.n)("GeometryBufferRendererSceneComponent")
    };
    var le = xV(38318);
    const Le = {
      effect: null,
      subMesh: null
    };

    function fe(VV) {
      if ("number" === typeof VV) return 1;
      if (VV instanceof oV.n) return 2;
      if (VV instanceof oV.o || VV instanceof KV.d) return 3;
      if (VV instanceof oV.q || VV instanceof KV.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class me {
      populateVectorFromLinkedProperties(VV) {
        const eV = fe(VV);
        for (const xV in this.linkedProperties) {
          const VV = this.linkedProperties[xV],
            JV = VV.numComponents;
          if (eV < JV || VV.targetUniformComponentOffset > eV - JV) return void(1 == JV ? MV.b.Error(`Float property ${VV.name} has an offset that is too large.`) : MV.b.Error(`Vector${JV} property ${VV.name} won't fit in Vector${eV} or has an offset that is too large.`));
          "number" === typeof VV.value ? me._tmpArray[VV.targetUniformComponentOffset] = VV.value : VV.value.toArray(me._tmpArray, VV.targetUniformComponentOffset)
        }
        VV.wZ(me._tmpArray)
      }
      constructor(VV, eV) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = VV, this.numComponents = eV
      }
    }
    me._tmpArray = [0, 0, 0, 0];
    class Ke {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = VV, this.targetUniformName = xV, this.defaultValue = eV, this.value = eV, this.targetUniformComponentNum = JV, this.targetUniformComponentOffset = YV, this.requiredDefine = UV
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : fe(this.defaultValue)
      }
    }
    class He {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(VV, eV, xV) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = VV, this.samplerPrefix = eV, this.textureDefine = xV
      }
    }
    class ue extends((0, be.c)((0, ke.b)(hV.e))) {}
    class se extends(function(VV) {
      return class extends VV {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(ue)) {}
    class Se extends((0, HV.e)(se)) {
      constructor(VV) {
        super(VV), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Ie extends((0, Ee.c)(sV.e)) {}
    let de = (() => {
        var VV, eV, JV, YV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, WV, RV, gV, DV, aV, hV, lV, LV, fV, HV, sV, OV, Ve, ee, xe, Je, Ye, Ue, ye, pe, Qe, ne, ke, be, Ee, Be, je, qe, te, Fe, Te, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, le, fe, ue, se, de, Oe, Vx, ex, xx, Jx, Yx, Ux, yx, px, Qx, nx, wx, Zx, vx, rx, kx, bx, Ex, Bx, jx, qx, tx, Fx, Tx, Px, Ax, Nx, Xx, Mx, zx;
        let Gx, Wx, Rx, gx, Dx, ix, Cx, ax, ox, cx, hx, lx, Lx, fx, mx, Kx, Hx, ux, sx, Sx, Ix, dx, Ox, VJ, eJ, xJ, JJ, YJ, UJ, yJ, pJ, QJ, nJ, wJ, ZJ, vJ, rJ, kJ, bJ, EJ, BJ, jJ, qJ, tJ, FJ, TJ, PJ, AJ, NJ, XJ, MJ, zJ, GJ, WJ, RJ, gJ, DJ, iJ, CJ, aJ, oJ, cJ, hJ, lJ, LJ, fJ, mJ, KJ, HJ, uJ, sJ, SJ, IJ, dJ, OJ, VY, eY, xY, JY, YY, UY, yY, pY, QY, nY, wY, ZY, vY, rY, kY, bY, EY, BY, jY, qY, tY, FY, TY, PY, AY, NY, XY, MY, zY, GY, WY = Ie,
          RY = [],
          gY = [],
          DY = [],
          iY = [],
          CY = [],
          aY = [],
          oY = [],
          cY = [],
          hY = [],
          lY = [],
          LY = [],
          fY = [],
          mY = [],
          KY = [],
          HY = [],
          uY = [],
          sY = [],
          SY = [],
          IY = [],
          dY = [],
          OY = [],
          VU = [],
          eU = [],
          xU = [],
          JU = [],
          YU = [],
          UU = [],
          yU = [],
          pU = [],
          QU = [],
          nU = [],
          wU = [],
          ZU = [],
          vU = [],
          rU = [],
          kU = [],
          bU = [],
          EU = [],
          BU = [],
          jU = [],
          qU = [],
          tU = [],
          FU = [],
          TU = [],
          PU = [],
          AU = [],
          NU = [],
          XU = [],
          MU = [],
          zU = [],
          GU = [],
          WU = [],
          RU = [],
          gU = [],
          DU = [],
          iU = [],
          CU = [],
          aU = [],
          oU = [],
          cU = [],
          hU = [],
          lU = [],
          LU = [],
          fU = [],
          mU = [],
          KU = [],
          HU = [],
          uU = [],
          sU = [],
          SU = [],
          IU = [],
          dU = [],
          OU = [],
          Vy = [],
          ey = [],
          xy = [],
          Jy = [],
          Yy = [],
          Uy = [],
          yy = [],
          py = [],
          Qy = [],
          ny = [],
          wy = [],
          Zy = [],
          vy = [],
          ry = [],
          ky = [],
          by = [],
          Ey = [],
          By = [],
          jy = [],
          qy = [],
          ty = [],
          Fy = [],
          Ty = [],
          Py = [],
          Ay = [],
          Ny = [],
          Xy = [],
          My = [],
          zy = [],
          Gy = [],
          Wy = [],
          Ry = [],
          gy = [],
          Dy = [],
          iy = [],
          Cy = [],
          ay = [],
          oy = [],
          cy = [],
          hy = [],
          ly = [],
          Ly = [],
          fy = [],
          my = [],
          Ky = [],
          Hy = [],
          uy = [],
          sy = [],
          Sy = [],
          Iy = [],
          dy = [],
          Oy = [],
          Vp = [],
          ep = [],
          xp = [],
          Jp = [],
          Yp = [],
          Up = [],
          yp = [],
          pp = [],
          Qp = [],
          np = [],
          wp = [],
          Zp = [],
          vp = [],
          rp = [],
          kp = [],
          bp = [],
          Ep = [],
          Bp = [],
          jp = [],
          qp = [],
          tp = [],
          Fp = [],
          Tp = [],
          Pp = [],
          Ap = [],
          Np = [],
          Xp = [],
          Mp = [],
          zp = [],
          Gp = [],
          Wp = [],
          Rp = [],
          gp = [],
          Dp = [],
          ip = [],
          Cp = [],
          ap = [],
          op = [],
          cp = [],
          hp = [],
          lp = [],
          Lp = [],
          fp = [],
          mp = [],
          Kp = [],
          Hp = [],
          sp = [],
          Sp = [],
          Ip = [],
          dp = [],
          Op = [],
          VQ = [],
          eQ = [],
          xQ = [],
          JQ = [],
          YQ = [],
          UQ = [],
          yQ = [],
          pQ = [],
          QQ = [],
          nQ = [],
          wQ = [],
          ZQ = [],
          vQ = [],
          rQ = [],
          kQ = [],
          bQ = [],
          EQ = [],
          BQ = [],
          jQ = [],
          qQ = [],
          tQ = [],
          FQ = [],
          TQ = [],
          PQ = [],
          AQ = [],
          NQ = [],
          XQ = [],
          MQ = [],
          zQ = [];
        return VV = class extends WY {
          get baseWeight() {
            return (0, NV.b)(this, eV, "f")
          }
          set baseWeight(VV) {
            (0, NV.f)(this, eV, VV, "f")
          }
          get baseWeightTexture() {
            return (0, NV.b)(this, JV, "f")
          }
          set baseWeightTexture(VV) {
            (0, NV.f)(this, JV, VV, "f")
          }
          get baseColor() {
            return (0, NV.b)(this, YV, "f")
          }
          set baseColor(VV) {
            (0, NV.f)(this, YV, VV, "f")
          }
          get baseColorTexture() {
            return (0, NV.b)(this, yV, "f")
          }
          set baseColorTexture(VV) {
            (0, NV.f)(this, yV, VV, "f")
          }
          get baseDiffuseRoughness() {
            return (0, NV.b)(this, pV, "f")
          }
          set baseDiffuseRoughness(VV) {
            (0, NV.f)(this, pV, VV, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, NV.b)(this, QV, "f")
          }
          set baseDiffuseRoughnessTexture(VV) {
            (0, NV.f)(this, QV, VV, "f")
          }
          get baseMetalness() {
            return (0, NV.b)(this, nV, "f")
          }
          set baseMetalness(VV) {
            (0, NV.f)(this, nV, VV, "f")
          }
          get baseMetalnessTexture() {
            return (0, NV.b)(this, wV, "f")
          }
          set baseMetalnessTexture(VV) {
            (0, NV.f)(this, wV, VV, "f")
          }
          get specularWeight() {
            return (0, NV.b)(this, ZV, "f")
          }
          set specularWeight(VV) {
            (0, NV.f)(this, ZV, VV, "f")
          }
          get specularWeightTexture() {
            return (0, NV.b)(this, vV, "f")
          }
          set specularWeightTexture(VV) {
            (0, NV.f)(this, vV, VV, "f")
          }
          get specularColor() {
            return (0, NV.b)(this, rV, "f")
          }
          set specularColor(VV) {
            (0, NV.f)(this, rV, VV, "f")
          }
          get specularColorTexture() {
            return (0, NV.b)(this, kV, "f")
          }
          set specularColorTexture(VV) {
            (0, NV.f)(this, kV, VV, "f")
          }
          get specularRoughness() {
            return (0, NV.b)(this, bV, "f")
          }
          set specularRoughness(VV) {
            (0, NV.f)(this, bV, VV, "f")
          }
          get specularRoughnessTexture() {
            return (0, NV.b)(this, EV, "f")
          }
          set specularRoughnessTexture(VV) {
            (0, NV.f)(this, EV, VV, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, NV.b)(this, BV, "f")
          }
          set specularRoughnessAnisotropy(VV) {
            (0, NV.f)(this, BV, VV, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, NV.b)(this, jV, "f")
          }
          set specularRoughnessAnisotropyTexture(VV) {
            (0, NV.f)(this, jV, VV, "f")
          }
          get specularIor() {
            return (0, NV.b)(this, qV, "f")
          }
          set specularIor(VV) {
            (0, NV.f)(this, qV, VV, "f")
          }
          get transmissionWeight() {
            return (0, NV.b)(this, tV, "f")
          }
          set transmissionWeight(VV) {
            (0, NV.f)(this, tV, VV, "f")
          }
          get transmissionWeightTexture() {
            return (0, NV.b)(this, FV, "f")
          }
          set transmissionWeightTexture(VV) {
            (0, NV.f)(this, FV, VV, "f")
          }
          get transmissionColor() {
            return (0, NV.b)(this, TV, "f")
          }
          set transmissionColor(VV) {
            (0, NV.f)(this, TV, VV, "f")
          }
          get transmissionColorTexture() {
            return (0, NV.b)(this, PV, "f")
          }
          set transmissionColorTexture(VV) {
            (0, NV.f)(this, PV, VV, "f")
          }
          get transmissionDepth() {
            return (0, NV.b)(this, AV, "f")
          }
          set transmissionDepth(VV) {
            (0, NV.f)(this, AV, VV, "f")
          }
          get transmissionDepthTexture() {
            return (0, NV.b)(this, WV, "f")
          }
          set transmissionDepthTexture(VV) {
            (0, NV.f)(this, WV, VV, "f")
          }
          get transmissionScatter() {
            return (0, NV.b)(this, RV, "f")
          }
          set transmissionScatter(VV) {
            (0, NV.f)(this, RV, VV, "f")
          }
          get transmissionScatterTexture() {
            return (0, NV.b)(this, gV, "f")
          }
          set transmissionScatterTexture(VV) {
            (0, NV.f)(this, gV, VV, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, NV.b)(this, DV, "f")
          }
          set transmissionScatterAnisotropy(VV) {
            (0, NV.f)(this, DV, VV, "f")
          }
          get transmissionDispersionScale() {
            return (0, NV.b)(this, aV, "f")
          }
          set transmissionDispersionScale(VV) {
            (0, NV.f)(this, aV, VV, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, NV.b)(this, hV, "f")
          }
          set transmissionDispersionScaleTexture(VV) {
            (0, NV.f)(this, hV, VV, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, NV.b)(this, lV, "f")
          }
          set transmissionDispersionAbbeNumber(VV) {
            (0, NV.f)(this, lV, VV, "f")
          }
          get subsurfaceWeight() {
            return (0, NV.b)(this, LV, "f")
          }
          set subsurfaceWeight(VV) {
            (0, NV.f)(this, LV, VV, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, NV.b)(this, fV, "f")
          }
          set subsurfaceWeightTexture(VV) {
            (0, NV.f)(this, fV, VV, "f")
          }
          get subsurfaceColor() {
            return (0, NV.b)(this, HV, "f")
          }
          set subsurfaceColor(VV) {
            (0, NV.f)(this, HV, VV, "f")
          }
          get subsurfaceColorTexture() {
            return (0, NV.b)(this, sV, "f")
          }
          set subsurfaceColorTexture(VV) {
            (0, NV.f)(this, sV, VV, "f")
          }
          get subsurfaceRadius() {
            return (0, NV.b)(this, OV, "f")
          }
          set subsurfaceRadius(VV) {
            (0, NV.f)(this, OV, VV, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, NV.b)(this, Ve, "f")
          }
          set subsurfaceRadiusScale(VV) {
            (0, NV.f)(this, Ve, VV, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, NV.b)(this, ee, "f")
          }
          set subsurfaceRadiusScaleTexture(VV) {
            (0, NV.f)(this, ee, VV, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, NV.b)(this, xe, "f")
          }
          set subsurfaceScatterAnisotropy(VV) {
            (0, NV.f)(this, xe, VV, "f")
          }
          get coatWeight() {
            return (0, NV.b)(this, Je, "f")
          }
          set coatWeight(VV) {
            (0, NV.f)(this, Je, VV, "f")
          }
          get coatWeightTexture() {
            return (0, NV.b)(this, Ye, "f")
          }
          set coatWeightTexture(VV) {
            (0, NV.f)(this, Ye, VV, "f")
          }
          get coatColor() {
            return (0, NV.b)(this, Ue, "f")
          }
          set coatColor(VV) {
            (0, NV.f)(this, Ue, VV, "f")
          }
          get coatColorTexture() {
            return (0, NV.b)(this, ye, "f")
          }
          set coatColorTexture(VV) {
            (0, NV.f)(this, ye, VV, "f")
          }
          get coatRoughness() {
            return (0, NV.b)(this, pe, "f")
          }
          set coatRoughness(VV) {
            (0, NV.f)(this, pe, VV, "f")
          }
          get coatRoughnessTexture() {
            return (0, NV.b)(this, Qe, "f")
          }
          set coatRoughnessTexture(VV) {
            (0, NV.f)(this, Qe, VV, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, NV.b)(this, ne, "f")
          }
          set coatRoughnessAnisotropy(VV) {
            (0, NV.f)(this, ne, VV, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, NV.b)(this, ke, "f")
          }
          set coatRoughnessAnisotropyTexture(VV) {
            (0, NV.f)(this, ke, VV, "f")
          }
          get coatIor() {
            return (0, NV.b)(this, be, "f")
          }
          set coatIor(VV) {
            (0, NV.f)(this, be, VV, "f")
          }
          get coatDarkening() {
            return (0, NV.b)(this, Ee, "f")
          }
          set coatDarkening(VV) {
            (0, NV.f)(this, Ee, VV, "f")
          }
          get coatDarkeningTexture() {
            return (0, NV.b)(this, Be, "f")
          }
          set coatDarkeningTexture(VV) {
            (0, NV.f)(this, Be, VV, "f")
          }
          get fuzzWeight() {
            return (0, NV.b)(this, je, "f")
          }
          set fuzzWeight(VV) {
            (0, NV.f)(this, je, VV, "f")
          }
          get fuzzWeightTexture() {
            return (0, NV.b)(this, qe, "f")
          }
          set fuzzWeightTexture(VV) {
            (0, NV.f)(this, qe, VV, "f")
          }
          get fuzzColor() {
            return (0, NV.b)(this, te, "f")
          }
          set fuzzColor(VV) {
            (0, NV.f)(this, te, VV, "f")
          }
          get fuzzColorTexture() {
            return (0, NV.b)(this, Fe, "f")
          }
          set fuzzColorTexture(VV) {
            (0, NV.f)(this, Fe, VV, "f")
          }
          get fuzzRoughness() {
            return (0, NV.b)(this, Te, "f")
          }
          set fuzzRoughness(VV) {
            (0, NV.f)(this, Te, VV, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, NV.b)(this, Ne, "f")
          }
          set fuzzRoughnessTexture(VV) {
            (0, NV.f)(this, Ne, VV, "f")
          }
          get geometryThinWalled() {
            return (0, NV.b)(this, Xe, "f")
          }
          set geometryThinWalled(VV) {
            (0, NV.f)(this, Xe, VV, "f")
          }
          get geometryNormalTexture() {
            return (0, NV.b)(this, Me, "f")
          }
          set geometryNormalTexture(VV) {
            (0, NV.f)(this, Me, VV, "f")
          }
          get geometryTangent() {
            return (0, NV.b)(this, ze, "f")
          }
          set geometryTangent(VV) {
            (0, NV.f)(this, ze, VV, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(VV) {
            this.geometryTangent = new oV.n(Math.cos(VV), Math.sin(VV))
          }
          get geometryTangentTexture() {
            return (0, NV.b)(this, Ge, "f")
          }
          set geometryTangentTexture(VV) {
            (0, NV.f)(this, Ge, VV, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, NV.b)(this, We, "f")
          }
          set geometryCoatNormalTexture(VV) {
            (0, NV.f)(this, We, VV, "f")
          }
          get geometryCoatTangent() {
            return (0, NV.b)(this, Re, "f")
          }
          set geometryCoatTangent(VV) {
            (0, NV.f)(this, Re, VV, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(VV) {
            this.geometryCoatTangent = new oV.n(Math.cos(VV), Math.sin(VV))
          }
          get geometryCoatTangentTexture() {
            return (0, NV.b)(this, ge, "f")
          }
          set geometryCoatTangentTexture(VV) {
            (0, NV.f)(this, ge, VV, "f")
          }
          get geometryOpacity() {
            return (0, NV.b)(this, De, "f")
          }
          set geometryOpacity(VV) {
            (0, NV.f)(this, De, VV, "f")
          }
          get geometryOpacityTexture() {
            return (0, NV.b)(this, ie, "f")
          }
          set geometryOpacityTexture(VV) {
            (0, NV.f)(this, ie, VV, "f")
          }
          get geometryThickness() {
            return (0, NV.b)(this, Ce, "f")
          }
          set geometryThickness(VV) {
            (0, NV.f)(this, Ce, VV, "f")
          }
          get geometryThicknessTexture() {
            return (0, NV.b)(this, ae, "f")
          }
          set geometryThicknessTexture(VV) {
            (0, NV.f)(this, ae, VV, "f")
          }
          get emissionLuminance() {
            return (0, NV.b)(this, oe, "f")
          }
          set emissionLuminance(VV) {
            (0, NV.f)(this, oe, VV, "f")
          }
          get emissionColor() {
            return (0, NV.b)(this, ce, "f")
          }
          set emissionColor(VV) {
            (0, NV.f)(this, ce, VV, "f")
          }
          get emissionColorTexture() {
            return (0, NV.b)(this, le, "f")
          }
          set emissionColorTexture(VV) {
            (0, NV.f)(this, le, VV, "f")
          }
          get thinFilmWeight() {
            return (0, NV.b)(this, fe, "f")
          }
          set thinFilmWeight(VV) {
            (0, NV.f)(this, fe, VV, "f")
          }
          get thinFilmWeightTexture() {
            return (0, NV.b)(this, ue, "f")
          }
          set thinFilmWeightTexture(VV) {
            (0, NV.f)(this, ue, VV, "f")
          }
          get thinFilmThickness() {
            return (0, NV.b)(this, se, "f")
          }
          set thinFilmThickness(VV) {
            (0, NV.f)(this, se, VV, "f")
          }
          get thinFilmThicknessMin() {
            return (0, NV.b)(this, de, "f")
          }
          set thinFilmThicknessMin(VV) {
            (0, NV.f)(this, de, VV, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, NV.b)(this, Oe, "f")
          }
          set thinFilmThicknessTexture(VV) {
            (0, NV.f)(this, Oe, VV, "f")
          }
          get thinFilmIor() {
            return (0, NV.b)(this, Vx, "f")
          }
          set thinFilmIor(VV) {
            (0, NV.f)(this, Vx, VV, "f")
          }
          get ambientOcclusionTexture() {
            return (0, NV.b)(this, ex, "f")
          }
          set ambientOcclusionTexture(VV) {
            (0, NV.f)(this, ex, VV, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(VV) {
            this._sssQuality !== VV && (this._sssQuality = VV, this.nJV(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(VV) {
            this._sssIrradianceTexture !== VV && (this._sssIrradianceTexture = VV, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(VV) {
            this._sssDepthTexture !== VV && (this._sssDepthTexture = VV, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, NV.b)(this, xx, "f")
          }
          set directIntensity(VV) {
            (0, NV.f)(this, xx, VV, "f")
          }
          get environmentIntensity() {
            return (0, NV.b)(this, Jx, "f")
          }
          set environmentIntensity(VV) {
            (0, NV.f)(this, Jx, VV, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, NV.b)(this, Yx, "f")
          }
          set useSpecularWeightFromTextureAlpha(VV) {
            (0, NV.f)(this, Yx, VV, "f")
          }
          get forceAlphaTest() {
            return (0, NV.b)(this, Ux, "f")
          }
          set forceAlphaTest(VV) {
            (0, NV.f)(this, Ux, VV, "f")
          }
          get alphaCutOff() {
            return (0, NV.b)(this, yx, "f")
          }
          set alphaCutOff(VV) {
            (0, NV.f)(this, yx, VV, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, NV.b)(this, px, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(VV) {
            (0, NV.f)(this, px, VV, "f")
          }
          get useAmbientInGrayScale() {
            return (0, NV.b)(this, Qx, "f")
          }
          set useAmbientInGrayScale(VV) {
            (0, NV.f)(this, Qx, VV, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(KV.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === UV.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(VV) {
            VV !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = VV ? UV.e.LIGHTFALLOFF_PHYSICAL : UV.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === UV.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(VV) {
            VV !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = VV ? UV.e.LIGHTFALLOFF_GLTF : UV.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, NV.b)(this, nx, "f")
          }
          set useObjectSpaceNormalMap(VV) {
            (0, NV.f)(this, nx, VV, "f")
          }
          get useParallax() {
            return (0, NV.b)(this, wx, "f")
          }
          set useParallax(VV) {
            (0, NV.f)(this, wx, VV, "f")
          }
          get useParallaxOcclusion() {
            return (0, NV.b)(this, Zx, "f")
          }
          set useParallaxOcclusion(VV) {
            (0, NV.f)(this, Zx, VV, "f")
          }
          get parallaxScaleBias() {
            return (0, NV.b)(this, vx, "f")
          }
          set parallaxScaleBias(VV) {
            (0, NV.f)(this, vx, VV, "f")
          }
          get disableLighting() {
            return (0, NV.b)(this, rx, "f")
          }
          set disableLighting(VV) {
            (0, NV.f)(this, rx, VV, "f")
          }
          get forceIrradianceInFragment() {
            return (0, NV.b)(this, kx, "f")
          }
          set forceIrradianceInFragment(VV) {
            (0, NV.f)(this, kx, VV, "f")
          }
          get maxSimultaneousLights() {
            return (0, NV.b)(this, bx, "f")
          }
          set maxSimultaneousLights(VV) {
            (0, NV.f)(this, bx, VV, "f")
          }
          get invertNormalMapX() {
            return (0, NV.b)(this, Ex, "f")
          }
          set invertNormalMapX(VV) {
            (0, NV.f)(this, Ex, VV, "f")
          }
          get invertNormalMapY() {
            return (0, NV.b)(this, Bx, "f")
          }
          set invertNormalMapY(VV) {
            (0, NV.f)(this, Bx, VV, "f")
          }
          get twoSidedLighting() {
            return (0, NV.b)(this, jx, "f")
          }
          set twoSidedLighting(VV) {
            (0, NV.f)(this, jx, VV, "f")
          }
          get useAlphaFresnel() {
            return (0, NV.b)(this, qx, "f")
          }
          set useAlphaFresnel(VV) {
            (0, NV.f)(this, qx, VV, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, NV.b)(this, tx, "f")
          }
          set useLinearAlphaFresnel(VV) {
            (0, NV.f)(this, tx, VV, "f")
          }
          get environmentBRDFTexture() {
            return (0, NV.b)(this, Fx, "f")
          }
          set environmentBRDFTexture(VV) {
            (0, NV.f)(this, Fx, VV, "f")
          }
          get forceNormalForward() {
            return (0, NV.b)(this, Tx, "f")
          }
          set forceNormalForward(VV) {
            (0, NV.f)(this, Tx, VV, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, NV.b)(this, Px, "f")
          }
          set enableSpecularAntiAliasing(VV) {
            (0, NV.f)(this, Px, VV, "f")
          }
          get useHorizonOcclusion() {
            return (0, NV.b)(this, Ax, "f")
          }
          set useHorizonOcclusion(VV) {
            (0, NV.f)(this, Ax, VV, "f")
          }
          get useRadianceOcclusion() {
            return (0, NV.b)(this, Nx, "f")
          }
          set useRadianceOcclusion(VV) {
            (0, NV.f)(this, Nx, VV, "f")
          }
          get unlit() {
            return (0, NV.b)(this, Xx, "f")
          }
          set unlit(VV) {
            (0, NV.f)(this, Xx, VV, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, NV.b)(this, Mx, "f")
          }
          set applyDecalMapAfterDetailMap(VV) {
            (0, NV.f)(this, Mx, VV, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(VV) {
            this._backgroundRefractionTexture = VV, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(VV) {
            this._refractionHighQualityBlur !== VV && (this._refractionHighQualityBlur = VV, this.nJV(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(VV) {
            this._realTimeFiltering = VV, this.nJV(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(VV) {
            this._realTimeFilteringQuality = VV, this.nJV(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(VV) {
            this._fuzzSampleNumber = VV, this.nJV(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, NV.b)(this, zx, "f")
          }
          set debugMode(VV) {
            (0, NV.f)(this, zx, VV, "f")
          }
          constructor(xV, XV) {
            super(xV, XV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || VV.ForceGLSL), eV.set(this, ((0, NV.l)(this, RY), (0, NV.l)(this, gY, void 0))), this._baseWeight = ((0, NV.l)(this, DY), new Ke("base_weight", 1, "vBaseWeight", 1)), JV.set(this, (0, NV.l)(this, iY, void 0)), this._baseWeightTexture = ((0, NV.l)(this, CY), new He("base_weight", "baseWeight", "BASE_WEIGHT")), YV.set(this, (0, NV.l)(this, aY, void 0)), this._baseColor = ((0, NV.l)(this, oY), new Ke("base_color", KV.d.White(), "vBaseColor", 4)), yV.set(this, (0, NV.l)(this, cY, void 0)), this._baseColorTexture = ((0, NV.l)(this, hY), new He("base_color", "baseColor", "BASE_COLOR")), pV.set(this, (0, NV.l)(this, lY, void 0)), this._baseDiffuseRoughness = ((0, NV.l)(this, LY), new Ke("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), QV.set(this, (0, NV.l)(this, fY, void 0)), this._baseDiffuseRoughnessTexture = ((0, NV.l)(this, mY), new He("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), nV.set(this, (0, NV.l)(this, KY, void 0)), this._baseMetalness = ((0, NV.l)(this, HY), new Ke("base_metalness", 0, "vReflectanceInfo", 4, 0)), wV.set(this, (0, NV.l)(this, uY, void 0)), this._baseMetalnessTexture = ((0, NV.l)(this, sY), new He("base_metalness", "baseMetalness", "BASE_METALNESS")), ZV.set(this, (0, NV.l)(this, SY, void 0)), this._specularWeight = ((0, NV.l)(this, IY), new Ke("specular_weight", 1, "vReflectanceInfo", 4, 3)), vV.set(this, (0, NV.l)(this, dY, void 0)), this._specularWeightTexture = ((0, NV.l)(this, OY), new He("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), rV.set(this, (0, NV.l)(this, VU, void 0)), this._specularColor = ((0, NV.l)(this, eU), new Ke("specular_color", KV.d.White(), "vSpecularColor", 4)), kV.set(this, (0, NV.l)(this, xU, void 0)), this._specularColorTexture = ((0, NV.l)(this, JU), new He("specular_color", "specularColor", "SPECULAR_COLOR")), bV.set(this, (0, NV.l)(this, YU, void 0)), this._specularRoughness = ((0, NV.l)(this, UU), new Ke("specular_roughness", .3, "vReflectanceInfo", 4, 1)), EV.set(this, (0, NV.l)(this, yU, void 0)), this._specularRoughnessTexture = ((0, NV.l)(this, pU), new He("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), BV.set(this, (0, NV.l)(this, QU, void 0)), this._specularRoughnessAnisotropy = ((0, NV.l)(this, nU), new Ke("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), jV.set(this, (0, NV.l)(this, wU, void 0)), this._specularRoughnessAnisotropyTexture = ((0, NV.l)(this, ZU), new He("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), qV.set(this, (0, NV.l)(this, vU, void 0)), this._specularIor = ((0, NV.l)(this, rU), new Ke("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), tV.set(this, (0, NV.l)(this, kU, void 0)), this._transmissionWeight = ((0, NV.l)(this, bU), new Ke("transmission_weight", 0, "vTransmissionWeight", 1)), FV.set(this, (0, NV.l)(this, EU, void 0)), this._transmissionWeightTexture = ((0, NV.l)(this, BU), new He("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), TV.set(this, (0, NV.l)(this, jU, void 0)), this._transmissionColor = ((0, NV.l)(this, qU), new Ke("transmission_color", KV.d.White(), "vTransmissionColor", 3, 0)), PV.set(this, (0, NV.l)(this, tU, void 0)), this._transmissionColorTexture = ((0, NV.l)(this, FU), new He("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), AV.set(this, (0, NV.l)(this, TU, void 0)), this._transmissionDepth = ((0, NV.l)(this, PU), new Ke("transmission_depth", 0, "vTransmissionDepth", 1, 0)), WV.set(this, (0, NV.l)(this, AU, void 0)), this._transmissionDepthTexture = ((0, NV.l)(this, NU), new He("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), RV.set(this, (0, NV.l)(this, XU, void 0)), this._transmissionScatter = ((0, NV.l)(this, MU), new Ke("transmission_scatter", KV.d.Black(), "vTransmissionScatter", 3, 0)), gV.set(this, (0, NV.l)(this, zU, void 0)), this._transmissionScatterTexture = ((0, NV.l)(this, GU), new He("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), DV.set(this, (0, NV.l)(this, WU, void 0)), this._transmissionScatterAnisotropy = ((0, NV.l)(this, RU), new Ke("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), aV.set(this, (0, NV.l)(this, gU, void 0)), this._transmissionDispersionScale = ((0, NV.l)(this, DU), new Ke("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), hV.set(this, (0, NV.l)(this, iU, void 0)), this._transmissionDispersionScaleTexture = ((0, NV.l)(this, CU), new He("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), lV.set(this, (0, NV.l)(this, aU, void 0)), this._transmissionDispersionAbbeNumber = ((0, NV.l)(this, oU), new Ke("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), LV.set(this, (0, NV.l)(this, cU, void 0)), this._subsurfaceWeight = ((0, NV.l)(this, hU), new Ke("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), fV.set(this, (0, NV.l)(this, lU, void 0)), this._subsurfaceWeightTexture = ((0, NV.l)(this, LU), new He("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), HV.set(this, (0, NV.l)(this, fU, void 0)), this._subsurfaceColor = ((0, NV.l)(this, mU), new Ke("subsurface_color", new KV.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), sV.set(this, (0, NV.l)(this, KU, void 0)), this._subsurfaceColorTexture = ((0, NV.l)(this, HU), new He("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), OV.set(this, (0, NV.l)(this, uU, void 0)), this._subsurfaceRadius = ((0, NV.l)(this, sU), new Ke("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Ve.set(this, (0, NV.l)(this, SU, void 0)), this._subsurfaceRadiusScale = ((0, NV.l)(this, IU), new Ke("subsurface_radius_scale", new KV.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), ee.set(this, (0, NV.l)(this, dU, void 0)), this._subsurfaceRadiusScaleTexture = ((0, NV.l)(this, OU), new He("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), xe.set(this, (0, NV.l)(this, Vy, void 0)), this._subsurfaceScatterAnisotropy = ((0, NV.l)(this, ey), new Ke("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Je.set(this, (0, NV.l)(this, xy, void 0)), this._coatWeight = ((0, NV.l)(this, Jy), new Ke("coat_weight", 0, "vCoatWeight", 1, 0)), Ye.set(this, (0, NV.l)(this, Yy, void 0)), this._coatWeightTexture = ((0, NV.l)(this, Uy), new He("coat_weight", "coatWeight", "COAT_WEIGHT")), Ue.set(this, (0, NV.l)(this, yy, void 0)), this._coatColor = ((0, NV.l)(this, py), new Ke("coat_color", KV.d.White(), "vCoatColor", 3, 0)), ye.set(this, (0, NV.l)(this, Qy, void 0)), this._coatColorTexture = ((0, NV.l)(this, ny), new He("coat_color", "coatColor", "COAT_COLOR")), pe.set(this, (0, NV.l)(this, wy, void 0)), this._coatRoughness = ((0, NV.l)(this, Zy), new Ke("coat_roughness", 0, "vCoatRoughness", 1, 0)), Qe.set(this, (0, NV.l)(this, vy, void 0)), this._coatRoughnessTexture = ((0, NV.l)(this, ry), new He("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), ne.set(this, (0, NV.l)(this, ky, void 0)), this._coatRoughnessAnisotropy = ((0, NV.l)(this, by), new Ke("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), ke.set(this, (0, NV.l)(this, Ey, void 0)), this._coatRoughnessAnisotropyTexture = ((0, NV.l)(this, By), new He("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), be.set(this, (0, NV.l)(this, jy, void 0)), this._coatIor = ((0, NV.l)(this, qy), new Ke("coat_ior", 1.5, "vCoatIor", 1, 0)), Ee.set(this, (0, NV.l)(this, ty, void 0)), this._coatDarkening = ((0, NV.l)(this, Fy), new Ke("coat_darkening", 1, "vCoatDarkening", 1, 0)), Be.set(this, (0, NV.l)(this, Ty, void 0)), this._coatDarkeningTexture = ((0, NV.l)(this, Py), new He("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, je.set(this, (0, NV.l)(this, Ay, void 0)), this._fuzzWeight = ((0, NV.l)(this, Ny), new Ke("fuzz_weight", 0, "vFuzzWeight", 1, 0)), qe.set(this, (0, NV.l)(this, Xy, void 0)), this._fuzzWeightTexture = ((0, NV.l)(this, My), new He("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), te.set(this, (0, NV.l)(this, zy, void 0)), this._fuzzColor = ((0, NV.l)(this, Gy), new Ke("fuzz_color", KV.d.White(), "vFuzzColor", 3, 0)), Fe.set(this, (0, NV.l)(this, Wy, void 0)), this._fuzzColorTexture = ((0, NV.l)(this, Ry), new He("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Te.set(this, (0, NV.l)(this, gy, void 0)), this._fuzzRoughness = ((0, NV.l)(this, Dy), new Ke("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Ne.set(this, (0, NV.l)(this, iy, void 0)), this._fuzzRoughnessTexture = ((0, NV.l)(this, Cy), new He("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Xe.set(this, (0, NV.l)(this, ay, void 0)), this._geometryThinWalled = ((0, NV.l)(this, oy), new Ke("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Me.set(this, (0, NV.l)(this, cy, void 0)), this._geometryNormalTexture = ((0, NV.l)(this, hy), new He("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ze.set(this, (0, NV.l)(this, ly, void 0)), this._geometryTangent = ((0, NV.l)(this, Ly), new Ke("geometry_tangent", new oV.n(1, 0), "vSpecularAnisotropy", 3, 0)), Ge.set(this, (0, NV.l)(this, fy, void 0)), this._geometryTangentTexture = ((0, NV.l)(this, my), new He("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), We.set(this, (0, NV.l)(this, Ky, void 0)), this._geometryCoatNormalTexture = ((0, NV.l)(this, Hy), new He("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Re.set(this, (0, NV.l)(this, uy, void 0)), this._geometryCoatTangent = ((0, NV.l)(this, sy), new Ke("geometry_coat_tangent", new oV.n(1, 0), "vGeometryCoatTangent", 2, 0)), ge.set(this, (0, NV.l)(this, Sy, void 0)), this._geometryCoatTangentTexture = ((0, NV.l)(this, Iy), new He("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), De.set(this, (0, NV.l)(this, dy, void 0)), this._geometryOpacity = ((0, NV.l)(this, Oy), new Ke("geometry_opacity", 1, "vBaseColor", 4, 3)), ie.set(this, (0, NV.l)(this, Vp, void 0)), this._geometryOpacityTexture = ((0, NV.l)(this, ep), new He("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Ce.set(this, (0, NV.l)(this, xp, void 0)), this._geometryThickness = ((0, NV.l)(this, Jp), new Ke("geometry_thickness", 0, "vGeometryThickness", 1, 0)), ae.set(this, (0, NV.l)(this, Yp, void 0)), this._geometryThicknessTexture = ((0, NV.l)(this, Up), new He("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), oe.set(this, (0, NV.l)(this, yp, void 0)), this._emissionLuminance = ((0, NV.l)(this, pp), new Ke("emission_luminance", 1, "vLightingIntensity", 4, 1)), ce.set(this, (0, NV.l)(this, Qp, void 0)), this._emissionColor = ((0, NV.l)(this, np), new Ke("emission_color", KV.d.Black(), "vEmissionColor", 3)), le.set(this, (0, NV.l)(this, wp, void 0)), this._emissionColorTexture = ((0, NV.l)(this, Zp), new He("emission_color", "emissionColor", "EMISSION_COLOR")), fe.set(this, (0, NV.l)(this, vp, void 0)), this._thinFilmWeight = ((0, NV.l)(this, rp), new Ke("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), ue.set(this, (0, NV.l)(this, kp, void 0)), this._thinFilmWeightTexture = ((0, NV.l)(this, bp), new He("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), se.set(this, (0, NV.l)(this, Ep, void 0)), this._thinFilmThickness = ((0, NV.l)(this, Bp), new Ke("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), de.set(this, (0, NV.l)(this, jp, void 0)), this._thinFilmThicknessMin = ((0, NV.l)(this, qp), new Ke("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Oe.set(this, (0, NV.l)(this, tp, void 0)), this._thinFilmThicknessTexture = ((0, NV.l)(this, Fp), new He("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Vx.set(this, (0, NV.l)(this, Tp, void 0)), this._thinFilmIor = ((0, NV.l)(this, Pp), new Ke("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ex.set(this, (0, NV.l)(this, Ap, void 0)), this._ambientOcclusionTexture = ((0, NV.l)(this, Np), new He("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = VV.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, xx.set(this, (0, NV.l)(this, Xp, 1)), Jx.set(this, ((0, NV.l)(this, Mp), (0, NV.l)(this, zp, 1))), Yx.set(this, ((0, NV.l)(this, Gp), (0, NV.l)(this, Wp, !1))), Ux.set(this, ((0, NV.l)(this, Rp), (0, NV.l)(this, gp, !1))), yx.set(this, ((0, NV.l)(this, Dp), (0, NV.l)(this, ip, .4))), px.set(this, ((0, NV.l)(this, Cp), (0, NV.l)(this, ap, !1))), Qx.set(this, ((0, NV.l)(this, op), (0, NV.l)(this, cp, !1))), nx.set(this, ((0, NV.l)(this, hp), (0, NV.l)(this, lp, !1))), wx.set(this, ((0, NV.l)(this, Lp), (0, NV.l)(this, fp, !1))), Zx.set(this, ((0, NV.l)(this, mp), (0, NV.l)(this, Kp, !1))), vx.set(this, ((0, NV.l)(this, Hp), (0, NV.l)(this, sp, .05))), rx.set(this, ((0, NV.l)(this, Sp), (0, NV.l)(this, Ip, !1))), kx.set(this, ((0, NV.l)(this, dp), (0, NV.l)(this, Op, !1))), bx.set(this, ((0, NV.l)(this, VQ), (0, NV.l)(this, eQ, 4))), Ex.set(this, ((0, NV.l)(this, xQ), (0, NV.l)(this, JQ, !1))), Bx.set(this, ((0, NV.l)(this, YQ), (0, NV.l)(this, UQ, !1))), jx.set(this, ((0, NV.l)(this, yQ), (0, NV.l)(this, pQ, !1))), qx.set(this, ((0, NV.l)(this, QQ), (0, NV.l)(this, nQ, !1))), tx.set(this, ((0, NV.l)(this, wQ), (0, NV.l)(this, ZQ, !1))), Fx.set(this, ((0, NV.l)(this, vQ), (0, NV.l)(this, rQ, null))), Tx.set(this, ((0, NV.l)(this, kQ), (0, NV.l)(this, bQ, !1))), Px.set(this, ((0, NV.l)(this, EQ), (0, NV.l)(this, BQ, !1))), Ax.set(this, ((0, NV.l)(this, jQ), (0, NV.l)(this, qQ, !0))), Nx.set(this, ((0, NV.l)(this, tQ), (0, NV.l)(this, FQ, !0))), Xx.set(this, ((0, NV.l)(this, TQ), (0, NV.l)(this, PQ, !1))), Mx.set(this, ((0, NV.l)(this, AQ), (0, NV.l)(this, NQ, !1))), this._lightingInfos = ((0, NV.l)(this, XQ), new oV.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = UV.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zV.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, zx.set(this, (0, NV.l)(this, MQ, 0)), this.debugLimit = ((0, NV.l)(this, zQ), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = UV.e.MATERIAL_OPAQUE, this.dD() && !this.dD()?.sk().isWebGPU && this.dD().sk().Nb < 2 && MV.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), VV._noiseTextures[this.dD().uniqueId] || (VV._noiseTextures[this.dD().uniqueId] = new GV.f(Ae.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.dD(), !1, !0, 1), this.dD().eC.addOnce((() => {
              VV._noiseTextures[this.dD().uniqueId]?.dispose(), delete VV._noiseTextures[this.dD().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), SV.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), SV.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = CV(this.dD()), this._environmentFuzzBRDFTexture = iV(this.dD()), this.prePassConfiguration = new mV.b, this._propertyList = {};
            for (const VV of Object.getOwnPropertyNames(this)) {
              const eV = this[VV];
              eV instanceof Ke && (this._propertyList[VV] = eV)
            }
            Object.keys(this._propertyList).forEach((VV => {
              const eV = this._propertyList[VV];
              let xV = this._uniformsList[eV.targetUniformName];
              xV ? xV.numComponents !== eV.targetUniformComponentNum ? MV.b.Error(`Uniform ${eV.targetUniformName} already exists of size ${xV.numComponents}, but trying to set it to ${eV.targetUniformComponentNum}.`) : xV.requiredDefine !== eV.requiredDefine && (xV.requiredDefine = void 0) : (xV = new me(eV.targetUniformName, eV.targetUniformComponentNum), xV.requiredDefine = eV.requiredDefine, this._uniformsList[eV.targetUniformName] = xV), "" === xV.firstLinkedKey && (xV.firstLinkedKey = eV.name), xV.linkedProperties[eV.name] = eV
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const VV of Object.getOwnPropertyNames(this)) {
              const eV = this[VV];
              eV instanceof He && (this._samplersList[VV] = eV)
            }
            for (const VV in this._samplersList) {
              const eV = this._samplersList[VV].textureDefine;
              this._samplerDefines[eV] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[eV + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[eV + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(SV.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(SV.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(VV) {
            this._transparencyMode !== VV && (this._transparencyMode = VV, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== UV.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(VV) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(VV)
          }
          clone(eV) {
            let xV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const YV = Pe.b.Clone((() => new VV(eV, this.dD())), this, {
              cloneTexturesOnlyOnce: xV
            });
            return YV.id = eV, YV.name = eV, this.stencil.copyTo(YV.stencil), this._clonePlugins(YV, JV), YV
          }
          serialize() {
            const VV = super.serialize();
            return VV.customType = "BABYLON.OpenPBRMaterial", VV
          }
          static Parse(eV, xV, JV) {
            const YV = Pe.b.Parse((() => new VV(eV.name, xV)), eV, xV, JV);
            return eV.stencil && YV.stencil.parse(eV.stencil, xV, JV), UV.e._ParsePlugins(eV, YV, xV, JV), YV
          }
          forceCompilation(VV, eV, xV) {
            const JV = {
              clipPlane: !1,
              useInstances: !1,
              ...xV
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const xV = new Se({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                YV = this._prepareEffect(VV, VV, xV, void 0, void 0, JV.useInstances, JV.clipPlane);
              this._onEffectCreatedObservable && (Le.effect = YV, Le.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Le)), YV.isReady() ? eV && eV(this) : YV.onCompileObservable.add((() => {
                eV && eV(this)
              }))
            })()
          }
          isReadyForSubMesh(eV, xV, JV) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const YV = xV._drawWrapper;
            if (YV.effect && this.isFrozen && YV._wasPreviouslyReady && YV._wasPreviouslyUsingInstances === JV) return !0;
            xV.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), xV.materialDefines = new Se({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const UV = xV.materialDefines;
            if (this._isReadyForSubMesh(xV)) return !0;
            const yV = this.dD(),
              pV = yV.sk();
            if (UV._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yV.texturesEnabled)) {
              for (const VV in this._samplersList) {
                const eV = this._samplersList[VV];
                if (eV.value && !eV.value.isReadyOrNotBlocking()) return !1
              }
              const eV = this._getRadianceTexture();
              if (eV && SV.b.ReflectionTextureEnabled) {
                if (!eV.isReadyOrNotBlocking()) return !1;
                if (eV.irradianceTexture) {
                  if (!eV.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!eV.sphericalPolynomial && eV.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && SV.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && SV.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && SV.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (VV._noiseTextures[yV.uniqueId] && !VV._noiseTextures[yV.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = UV, this._eventInfo.subMesh = xV, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (UV._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (UV.AREALIGHTUSED)
              for (let VV = 0; VV < eV.lightSources.length; VV++)
                if (!eV.lightSources[VV]._isReady()) return !1;
            if (pV.getCaps().standardDerivatives || eV.isVerticesDataPresent(cV.j.NormalKind) || (eV.createNormals(!0), MV.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + eV.name)), !(0, dV.c)(yV, eV, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const QV = xV.effect,
              nV = UV._areLightsDisposed,
              wV = this._prepareEffect(eV, xV.getRenderingMesh(), UV, this.onCompiled, this.onError, JV, null);
            let ZV = !1;
            if (wV)
              if (this._onEffectCreatedObservable && (Le.effect = wV, Le.subMesh = xV, this._onEffectCreatedObservable.notifyObservers(Le)), this.allowShaderHotSwapping && QV && !wV.isReady()) {
                if (UV.markAsUnprocessed(), ZV = this.isFrozen, nV) return UV._areLightsDisposed = !0, !1
              } else yV.resetCachedMaterial(), xV.setEffect(wV, UV, this._materialContext);
            return !(!xV.effect || !xV.effect.isReady()) && (UV._renderId = yV.getRenderId(), YV._wasPreviouslyReady = !ZV, YV._wasPreviouslyUsingInstances = !!JV, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const VV = this._uniformBuffer;
            VV.addUniform("vTangentSpaceParams", 2), VV.addUniform("vLightingIntensity", 4), VV.addUniform("pointSize", 1), VV.addUniform("vDebugMode", 2), VV.addUniform("renderTargetSize", 2), VV.addUniform("cameraInfo", 4), VV.addUniform("vTextureRepetitionHexTilingParams", 4), VV.addUniform("backgroundRefractionMatrix", 16), VV.addUniform("vBackgroundRefractionInfos", 3), (0, dV.gb)(VV, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((eV => {
              VV.addUniform(eV.name, eV.numComponents)
            })), Object.values(this._samplersList).forEach((eV => {
              VV.addUniform(eV.samplerInfoName, 2), VV.addUniform(eV.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(VV, eV, xV, JV) {
            if (0 === this.geometryThickness) VV.updateFloat("vGeometryThickness", 0);
            else {
              JV.getRenderingMesh().getWorldMatrix().decompose(oV.l.Ik[0]);
              const eV = Math.max(Math.abs(oV.l.Ik[0].x), Math.abs(oV.l.Ik[0].y), Math.abs(oV.l.Ik[0].z));
              VV.updateFloat("vGeometryThickness", this.geometryThickness * eV)
            }
          }
          bindForSubMesh(eV, xV, JV) {
            const YV = this.dD(),
              UV = JV.materialDefines;
            if (!UV) return;
            const yV = JV.effect;
            if (!yV) return;
            this._activeEffect = yV, xV.getMeshUniformBuffer().bindToEffect(yV, "Mesh"), xV.transferToEffect(eV);
            const pV = YV.sk();
            this._uniformBuffer.bindToEffect(yV, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, YV, xV, eV, this.isFrozen), re.d.Bind(pV.currentRenderPassId, this._activeEffect, xV, eV, this);
            const QV = YV.activeCamera;
            QV ? this._uniformBuffer.updateFloat4("cameraInfo", QV.minZ, QV.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const nV = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", nV[0], nV[1], nV[2], nV[3]), this._eventInfo.subMesh = JV, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), UV.OBJECTSPACE_NORMALMAP && (eV.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const wV = this._mustRebind(YV, yV, JV, xV.visibility),
              ZV = pV._features.needToAlwaysBindUniformBuffers;
            (0, dV.e)(xV, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ze.d)(this._activeEffect, this._vertexPullingMetadata);
            const vV = this._uniformBuffer;
            if (wV) {
              this.bindViewProjection(yV);
              const eV = this._getRadianceTexture();
              if (!vV.useUbo || !this.isFrozen || !vV.isSync || JV._drawWrapper._forceRebindOnNextCall) {
                if (YV.texturesEnabled) {
                  for (const VV in this._samplersList) {
                    const eV = this._samplersList[VV];
                    eV.value && (vV.updateFloat2(eV.samplerInfoName, eV.value.coordinatesIndex, eV.value.level), (0, dV.y)(eV.value, vV, eV.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (YV._mirroredCameraPosition ? vV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : vV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dV.k)(YV, UV, vV, KV.d.White(), eV, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && vV.updateFloat("pointSize", this.pointSize);
                const VV = this._uniformsArray;
                for (let eV = 0, xV = VV.length; eV < xV; eV++) {
                  const xV = VV[eV];
                  (void 0 === xV.requiredDefine || UV[xV.requiredDefine]) && (4 === xV.numComponents ? (xV.populateVectorFromLinkedProperties(oV.l.Vector4[0]), vV.updateVector4(xV.name, oV.l.Vector4[0])) : 3 === xV.numComponents ? (xV.populateVectorFromLinkedProperties(oV.l.Ik[0]), vV.updateVector3(xV.name, oV.l.Ik[0])) : 2 === xV.numComponents ? (xV.populateVectorFromLinkedProperties(oV.l.Vector2[0]), vV.updateFloat2(xV.name, oV.l.Vector2[0].x, oV.l.Vector2[0].y)) : 1 === xV.numComponents && vV.updateFloat(xV.name, xV.linkedProperties[xV.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * YV.environmentIntensity, this._lightingInfos.w = 1, vV.updateVector4("vLightingIntensity", this._lightingInfos), vV.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (YV.texturesEnabled) {
                for (const VV in this._samplersList) {
                  const eV = this._samplersList[VV];
                  eV.value && vV.setTexture(eV.samplerName, eV.value)
                }
                if ((0, dV.m)(YV, UV, vV, eV, this.realTimeFiltering), UV.ENVIRONMENTBRDF && vV.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), UV.FUZZENVIRONMENTBRDF && vV.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), UV.REFRACTED_BACKGROUND && (vV.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), vV.peV("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), oV.l.Ik[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), vV.updateVector3("vBackgroundRefractionInfos", oV.l.Ik[1])), (UV.ANISOTROPIC || UV.FUZZ || UV.REFRACTED_BACKGROUND || UV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && vV.setTexture("blueNoiseSampler", VV._noiseTextures[this.dD().uniqueId]), UV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const VV = this.sssIrradianceTexture.getSize().width,
                    eV = this.sssIrradianceTexture.getSize().height;
                  vV.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), vV.setTexture("sceneDepthSampler", this.sssDepthTexture), vV.updateFloat2("renderTargetSize", VV, eV)
                }
              }
              this.dD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(xV) && this.dD().depthPeelingRenderer.bind(yV), this._eventInfo.subMesh = JV, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, we.g)(this._activeEffect, this, YV), this.bindEyePosition(yV)
            } else ZV && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, YV, YV.sk(), JV), !wV && this.isFrozen && !ZV || !YV.lightsEnabled || this._disableLighting || (0, dV.p)(YV, xV, this._activeEffect, UV, this._maxSimultaneousLights), !wV && this.isFrozen || (this.bindView(yV), (0, dV.g)(YV, xV, this._activeEffect, !0), UV.NUM_MORPH_INFLUENCERS && (0, dV.u)(xV, this._activeEffect), UV.BAKED_VERTEX_ANIMATION_TEXTURE && xV.bakedVertexAnimationManager?.bind(yV, UV.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dV.r)(UV, this._activeEffect, YV)), this._afterBind(xV, this._activeEffect, JV), vV.update()
          }
          getAnimatables() {
            const VV = super.getAnimatables();
            for (const eV in this._samplersList) {
              const xV = this._samplersList[eV];
              xV.value && xV.value.animations && xV.value.animations.length > 0 && VV.push(xV.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && VV.push(this._radianceTexture), VV
          }
          getActiveTextures() {
            const VV = super.getActiveTextures();
            for (const eV in this._samplersList) {
              const xV = this._samplersList[eV];
              xV.value && VV.push(xV.value)
            }
            return this._radianceTexture && VV.push(this._radianceTexture), VV
          }
          hasTexture(VV) {
            if (super.hasTexture(VV)) return !0;
            for (const eV in this._samplersList) {
              if (this._samplersList[eV].value === VV) return !0
            }
            return this._radianceTexture === VV
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(VV, eV) {
            if (this._breakShaderLoadedCheck = !0, eV) {
              this._environmentBRDFTexture && this.dD().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.dD().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const VV in this._samplersList) {
                const eV = this._samplersList[VV];
                eV.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(VV, eV)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.dD().environmentTexture
          }
          _prepareEffect(eV, xV, JV) {
            let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(eV, xV, JV, yV, pV), !JV.isDirty) return null;
            JV.markAsProcessed();
            const QV = this.dD().sk(),
              nV = new IV.d;
            let wV = 0;
            JV.USESPHERICALINVERTEX && nV.addFallback(wV++, "USESPHERICALINVERTEX"), JV.FOG && nV.addFallback(wV, "FOG"), JV.SPECULARAA && nV.addFallback(wV, "SPECULARAA"), JV.POINTSIZE && nV.addFallback(wV, "POINTSIZE"), JV.LOGARITHMICDEPTH && nV.addFallback(wV, "LOGARITHMICDEPTH"), JV.PARALLAX && nV.addFallback(wV, "PARALLAX"), JV.PARALLAX_RHS && nV.addFallback(wV, "PARALLAX_RHS"), JV.PARALLAXOCCLUSION && nV.addFallback(wV++, "PARALLAXOCCLUSION"), JV.ENVIRONMENTBRDF && nV.addFallback(wV++, "ENVIRONMENTBRDF"), JV.TANGENT && nV.addFallback(wV++, "TANGENT"), wV = (0, dV.z)(JV, nV, this._maxSimultaneousLights, wV), JV.SPECULARTERM && nV.addFallback(wV++, "SPECULARTERM"), JV.USESPHERICALFROMREFLECTIONMAP && nV.addFallback(wV++, "USESPHERICALFROMREFLECTIONMAP"), JV.USEIRRADIANCEMAP && nV.addFallback(wV++, "USEIRRADIANCEMAP"), JV.NORMAL && nV.addFallback(wV++, "NORMAL"), JV.VERTEXCOLOR && nV.addFallback(wV++, "VERTEXCOLOR"), JV.MORPHTARGETS && nV.addFallback(wV++, "MORPHTARGETS"), JV.MULTIVIEW && nV.addFallback(0, "MULTIVIEW");
            const ZV = [cV.j.PositionKind];
            JV.NORMAL && ZV.push(cV.j.NormalKind), JV.TANGENT && ZV.push(cV.j.TangentKind);
            for (let VV = 1; VV <= 6; ++VV) JV["UV" + VV] && ZV.push(`uv${1===VV?"":VV}`);
            JV.VERTEXCOLOR && ZV.push(cV.j.ColorKind), (0, dV.E)(ZV, eV, JV, nV), (0, dV.H)(ZV, JV), (0, dV.L)(ZV, eV, JV), (0, dV.A)(ZV, eV, JV);
            let vV = "openpbr";
            const rV = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const VV in this._uniformsList) rV.push(VV);
            const kV = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            JV.FUZZENVIRONMENTBRDF && kV.push("environmentFuzzBrdfSampler"), JV.REFRACTED_BACKGROUND && kV.push("backgroundRefractionSampler"), (JV.ANISOTROPIC || JV.FUZZ || JV.REFRACTED_BACKGROUND || JV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && kV.push("blueNoiseSampler"), JV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (kV.push("sceneIrradianceSampler"), kV.push("sceneDepthSampler"));
            for (const VV in this._samplersList) {
              const eV = this._samplersList[VV];
              kV.push(eV.samplerName), rV.push(eV.samplerInfoName), rV.push(eV.samplerMatrixName)
            }(0, dV.hb)(rV, kV, !0);
            const bV = ["Material", "Scene", "Mesh"],
              EV = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: JV.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = nV, this._eventInfo.fallbackRank = wV, this._eventInfo.defines = JV, this._eventInfo.uniforms = rV, this._eventInfo.attributes = ZV, this._eventInfo.samplers = kV, this._eventInfo.uniformBuffersNames = bV, this._eventInfo.customCode = void 0, this._eventInfo.mesh = eV, this._eventInfo.indexParameters = EV, this._callbackPluginEventGeneric(128, this._eventInfo), re.d.AddUniformsAndSamplers(rV, kV), mV.b.AddUniforms(rV), mV.b.AddSamplers(kV), (0, we.c)(rV), this._useVertexPulling) {
              const VV = xV?.geometry;
              VV && (this._vertexPullingMetadata = (0, Ze.e)(VV), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((VV, eV) => {
                rV.push(`vp_${eV}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            uV.b && (uV.b.PrepareUniforms(rV, JV), uV.b.PrepareSamplers(kV, JV)), (0, dV.lb)({
              uniformsNames: rV,
              uniformBuffersNames: bV,
              samplers: kV,
              defines: JV,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const BV = {};
            this.customShaderNameResolve && (vV = this.customShaderNameResolve(vV, rV, bV, kV, JV, ZV, BV));
            const jV = JV.toString(),
              qV = QV.createEffect(vV, {
                attributes: ZV,
                uniformsNames: rV,
                uniformBuffersNames: bV,
                samplers: kV,
                defines: jV,
                fallbacks: nV,
                onCompiled: YV,
                onError: UV,
                indexParameters: EV,
                processFinalCode: BV.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: JV.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: VV._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, QV);
            return this._eventInfo.customCode = void 0, qV
          }
          _prepareDefines(eV, xV, JV) {
            let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              yV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const pV = xV.hasThinInstances,
              QV = this.dD(),
              nV = QV.sk();
            (0, dV.X)(QV, eV, JV, !0, this._maxSimultaneousLights, this._disableLighting), JV._needNormals = !0, (0, dV.bb)(QV, JV);
            const wV = this.needAlphaBlendingForMesh(eV) && this.dD().useOrderIndependentTransparency;
            if ((0, dV.fb)(QV, JV, this.canRenderToMRT && !wV), (0, dV.cb)(QV, JV, wV), re.d.PrepareDefines(nV.currentRenderPassId, eV, JV), JV._areTexturesDirty) {
              JV._needUVs = !1;
              for (let VV = 1; VV <= 6; ++VV) JV["MAINUV" + VV] = !1;
              if (QV.texturesEnabled) {
                for (const xV in this._samplersList) {
                  const VV = this._samplersList[xV];
                  VV.value ? ((0, dV.Y)(VV.value, JV, VV.textureDefine), JV[VV.textureDefine + "_GAMMA"] = VV.value.gammaSpace) : JV[VV.textureDefine] = !1
                }
                const VV = this._getRadianceTexture(),
                  eV = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || nV.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, dV.U)(QV, VV, JV, this.realTimeFiltering, this.realTimeFilteringQuality, !eV), this._baseMetalnessTexture && (JV.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), JV.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, JV.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, JV.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, JV.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, JV.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, JV.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, JV.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, JV.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, JV.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, JV.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, JV.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && SV.b.DiffuseTextureEnabled ? (JV.PARALLAX = !0, JV.PARALLAX_RHS = QV.useRightHandedSystem, JV.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : JV.PARALLAX = !1, JV.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (JV.PARALLAX = !1, JV.PARALLAX_RHS = !1, JV.PARALLAXOCCLUSION = !1, JV.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && SV.b.ReflectionTextureEnabled ? (JV.ENVIRONMENTBRDF = !0, JV.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (JV.ENVIRONMENTBRDF = !1, JV.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? JV.FUZZENVIRONMENTBRDF = !0 : JV.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  JV.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && SV.b.RefractionTextureEnabled, JV.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, JV.REFRACTED_LIGHTS = !0;
                  const VV = this._getRadianceTexture();
                  VV ? (JV.REFRACTED_ENVIRONMENT = SV.b.RefractionTextureEnabled, JV.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.dD().useRightHandedSystem ? !VV.invertZ : VV.invertZ, JV.REFRACTED_ENVIRONMENT_LOCAL_CUBE = VV.isCube && VV.boundingBoxSize) : JV.REFRACTED_ENVIRONMENT = !1
                } else JV.REFRACTED_BACKGROUND = !1, JV.REFRACTED_LIGHTS = !1, JV.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? JV.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : JV.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === UV.e.LIGHTFALLOFF_STANDARD ? (JV.USEPHYSICALLIGHTFALLOFF = !1, JV.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === UV.e.LIGHTFALLOFF_GLTF ? (JV.USEPHYSICALLIGHTFALLOFF = !1, JV.USEGLTFLIGHTFALLOFF = !0) : (JV.USEPHYSICALLIGHTFALLOFF = !0, JV.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? JV.TWOSIDEDLIGHTING = !0 : JV.TWOSIDEDLIGHTING = !1, JV.MIRRORED = !!QV._mirroredCameraPosition, JV.SPECULARAA = nV.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(JV._areTexturesDirty || JV._areMiscDirty) && (JV.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, JV.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, JV.ALPHABLEND = this.needAlphaBlendingForMesh(eV)), JV._areTexturesDirty && (JV.TEXTURE_REPETITION_MODE = nV.version > 1 || nV.isWebGPU ? this.textureRepetitionMode : 0), JV._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(JV), JV.FORCENORMALFORWARD = this._forceNormalForward, JV.RADIANCEOCCLUSION = this._useRadianceOcclusion, JV.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && VV._noiseTextures[QV.uniqueId] && SV.b.ReflectionTextureEnabled ? (JV.ANISOTROPIC = !0, eV.isVerticesDataPresent(cV.j.TangentKind) || (JV._needUVs = !0, JV.MAINUV1 = !0), this._useGltfStyleAnisotropy && (JV.USE_GLTF_STYLE_ANISOTROPY = !0), JV.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, JV.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (JV.ANISOTROPIC = !1, JV.USE_GLTF_STYLE_ANISOTROPY = !1, JV.ANISOTROPIC_BASE = !1, JV.ANISOTROPIC_COAT = !1), JV.THIN_FILM = this.thinFilmWeight > 0, JV.IRIDESCENCE = this.thinFilmWeight > 0, JV.DISPERSION = this.transmissionDispersionScale > 0, JV.SCATTERING = this.hasScattering;
            if (JV.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, JV.TRANSMISSION_SLAB = this.transmissionWeight > 0, JV.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, JV.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !JV.PREPASS && (JV.SUBSURFACE_SLAB || JV.TRANSMISSION_SLAB_VOLUME)) {
              let VV = !1;
              if (!this.sssIrradianceTexture && QV.geometryBufferRenderer) {
                const eV = QV.geometryBufferRenderer.getTextureIndex(he.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = QV.geometryBufferRenderer.getGBuffer().textures[eV], VV = !0
              }
              if (!this.sssDepthTexture && QV.geometryBufferRenderer) {
                const eV = QV.geometryBufferRenderer.getTextureIndex(he.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = QV.geometryBufferRenderer.getGBuffer().textures[eV], VV = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (JV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, VV && (JV.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            JV.FUZZ = this.fuzzWeight > 0 && SV.b.ReflectionTextureEnabled, JV.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, JV.FUZZ ? (eV.isVerticesDataPresent(cV.j.TangentKind) || (JV._needUVs = !0, JV.MAINUV1 = !0), this._environmentFuzzBRDFTexture = iV(this.dD()), JV.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, JV.FUZZENVIRONMENTBRDF = !1, JV.FUZZ_IBL_SAMPLES = 0), JV._areMiscDirty && ((0, dV.$)(eV, QV, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(eV), JV, this._applyDecalMapAfterDetailMap, this._useVertexPulling, xV, this._isVertexOutputInvariant), JV.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !eV.isVerticesDataPresent(cV.j.NormalKind), JV.DEBUGMODE = this._debugMode), (0, dV.Q)(QV, nV, this, JV, !!YV, yV, pV), this._eventInfo.defines = JV, this._eventInfo.mesh = eV, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dV.P)(eV, JV, !0, !0, !0, this._transparencyMode !== UV.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, eV = new WeakMap, JV = new WeakMap, YV = new WeakMap, yV = new WeakMap, pV = new WeakMap, QV = new WeakMap, nV = new WeakMap, wV = new WeakMap, ZV = new WeakMap, vV = new WeakMap, rV = new WeakMap, kV = new WeakMap, bV = new WeakMap, EV = new WeakMap, BV = new WeakMap, jV = new WeakMap, qV = new WeakMap, tV = new WeakMap, FV = new WeakMap, TV = new WeakMap, PV = new WeakMap, AV = new WeakMap, WV = new WeakMap, RV = new WeakMap, gV = new WeakMap, DV = new WeakMap, aV = new WeakMap, hV = new WeakMap, lV = new WeakMap, LV = new WeakMap, fV = new WeakMap, HV = new WeakMap, sV = new WeakMap, OV = new WeakMap, Ve = new WeakMap, ee = new WeakMap, xe = new WeakMap, Je = new WeakMap, Ye = new WeakMap, Ue = new WeakMap, ye = new WeakMap, pe = new WeakMap, Qe = new WeakMap, ne = new WeakMap, ke = new WeakMap, be = new WeakMap, Ee = new WeakMap, Be = new WeakMap, je = new WeakMap, qe = new WeakMap, te = new WeakMap, Fe = new WeakMap, Te = new WeakMap, Ne = new WeakMap, Xe = new WeakMap, Me = new WeakMap, ze = new WeakMap, Ge = new WeakMap, We = new WeakMap, Re = new WeakMap, ge = new WeakMap, De = new WeakMap, ie = new WeakMap, Ce = new WeakMap, ae = new WeakMap, oe = new WeakMap, ce = new WeakMap, le = new WeakMap, fe = new WeakMap, ue = new WeakMap, se = new WeakMap, de = new WeakMap, Oe = new WeakMap, Vx = new WeakMap, ex = new WeakMap, xx = new WeakMap, Jx = new WeakMap, Yx = new WeakMap, Ux = new WeakMap, yx = new WeakMap, px = new WeakMap, Qx = new WeakMap, nx = new WeakMap, wx = new WeakMap, Zx = new WeakMap, vx = new WeakMap, rx = new WeakMap, kx = new WeakMap, bx = new WeakMap, Ex = new WeakMap, Bx = new WeakMap, jx = new WeakMap, qx = new WeakMap, tx = new WeakMap, Fx = new WeakMap, Tx = new WeakMap, Px = new WeakMap, Ax = new WeakMap, Nx = new WeakMap, Xx = new WeakMap, Mx = new WeakMap, zx = new WeakMap, (() => {
          const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(WY[Symbol.metadata] ?? null) : void 0;
          Gx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Wx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Rx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], gx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Dx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], ix = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Cx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], ax = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], ox = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], cx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], hx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], lx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Lx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], fx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], mx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Kx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Hx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], ux = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], sx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Sx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Ix = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], dx = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], Ox = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], VJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], eJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], xJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], JJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], UJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], yJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], pJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], QJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], wJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], ZJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], vJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], rJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], kJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], bJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], EJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], BJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], jJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], qJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], tJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], FJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], TJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], PJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], AJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], NJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], XJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], MJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], zJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], GJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], WJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], RJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], gJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], DJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], iJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], CJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], aJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], oJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], cJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], hJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], lJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], LJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], fJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], mJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], KJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], HJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], uJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], sJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], SJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], IJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], dJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], OJ = [(0, XV.d)("_markAllSubMeshesAsTexturesDirty")], VY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], eY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], xY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], JY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], YY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], UY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], yY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], pY = [(0, XV.J)()], QY = [(0, XV.J)()], nY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], wY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ZY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], vY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], rY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsLightsDirty")], kY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], bY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsLightsDirty")], EY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], BY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], jY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], qY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], tY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], FY = [(0, XV.h)("_markAllSubMeshesAsTexturesDirty")], TY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], PY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], AY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], NY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], XY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], MY = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], zY = [(0, XV.h)("_markAllSubMeshesAsMiscDirty")], GY = [(0, XV.J)()], (0, NV.i)(VV, null, Gx, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseWeight" in VV,
              get: VV => VV.baseWeight,
              set: (VV, eV) => {
                VV.baseWeight = eV
              }
            },
            metadata: eV
          }, gY, DY), (0, NV.i)(VV, null, Wx, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseWeightTexture" in VV,
              get: VV => VV.baseWeightTexture,
              set: (VV, eV) => {
                VV.baseWeightTexture = eV
              }
            },
            metadata: eV
          }, iY, CY), (0, NV.i)(VV, null, Rx, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseColor" in VV,
              get: VV => VV.baseColor,
              set: (VV, eV) => {
                VV.baseColor = eV
              }
            },
            metadata: eV
          }, aY, oY), (0, NV.i)(VV, null, gx, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseColorTexture" in VV,
              get: VV => VV.baseColorTexture,
              set: (VV, eV) => {
                VV.baseColorTexture = eV
              }
            },
            metadata: eV
          }, cY, hY), (0, NV.i)(VV, null, Dx, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseDiffuseRoughness" in VV,
              get: VV => VV.baseDiffuseRoughness,
              set: (VV, eV) => {
                VV.baseDiffuseRoughness = eV
              }
            },
            metadata: eV
          }, lY, LY), (0, NV.i)(VV, null, ix, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseDiffuseRoughnessTexture" in VV,
              get: VV => VV.baseDiffuseRoughnessTexture,
              set: (VV, eV) => {
                VV.baseDiffuseRoughnessTexture = eV
              }
            },
            metadata: eV
          }, fY, mY), (0, NV.i)(VV, null, Cx, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseMetalness" in VV,
              get: VV => VV.baseMetalness,
              set: (VV, eV) => {
                VV.baseMetalness = eV
              }
            },
            metadata: eV
          }, KY, HY), (0, NV.i)(VV, null, ax, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "baseMetalnessTexture" in VV,
              get: VV => VV.baseMetalnessTexture,
              set: (VV, eV) => {
                VV.baseMetalnessTexture = eV
              }
            },
            metadata: eV
          }, uY, sY), (0, NV.i)(VV, null, ox, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularWeight" in VV,
              get: VV => VV.specularWeight,
              set: (VV, eV) => {
                VV.specularWeight = eV
              }
            },
            metadata: eV
          }, SY, IY), (0, NV.i)(VV, null, cx, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularWeightTexture" in VV,
              get: VV => VV.specularWeightTexture,
              set: (VV, eV) => {
                VV.specularWeightTexture = eV
              }
            },
            metadata: eV
          }, dY, OY), (0, NV.i)(VV, null, hx, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularColor" in VV,
              get: VV => VV.specularColor,
              set: (VV, eV) => {
                VV.specularColor = eV
              }
            },
            metadata: eV
          }, VU, eU), (0, NV.i)(VV, null, lx, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularColorTexture" in VV,
              get: VV => VV.specularColorTexture,
              set: (VV, eV) => {
                VV.specularColorTexture = eV
              }
            },
            metadata: eV
          }, xU, JU), (0, NV.i)(VV, null, Lx, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularRoughness" in VV,
              get: VV => VV.specularRoughness,
              set: (VV, eV) => {
                VV.specularRoughness = eV
              }
            },
            metadata: eV
          }, YU, UU), (0, NV.i)(VV, null, fx, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularRoughnessTexture" in VV,
              get: VV => VV.specularRoughnessTexture,
              set: (VV, eV) => {
                VV.specularRoughnessTexture = eV
              }
            },
            metadata: eV
          }, yU, pU), (0, NV.i)(VV, null, mx, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularRoughnessAnisotropy" in VV,
              get: VV => VV.specularRoughnessAnisotropy,
              set: (VV, eV) => {
                VV.specularRoughnessAnisotropy = eV
              }
            },
            metadata: eV
          }, QU, nU), (0, NV.i)(VV, null, Kx, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularRoughnessAnisotropyTexture" in VV,
              get: VV => VV.specularRoughnessAnisotropyTexture,
              set: (VV, eV) => {
                VV.specularRoughnessAnisotropyTexture = eV
              }
            },
            metadata: eV
          }, wU, ZU), (0, NV.i)(VV, null, Hx, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularIor" in VV,
              get: VV => VV.specularIor,
              set: (VV, eV) => {
                VV.specularIor = eV
              }
            },
            metadata: eV
          }, vU, rU), (0, NV.i)(VV, null, ux, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionWeight" in VV,
              get: VV => VV.transmissionWeight,
              set: (VV, eV) => {
                VV.transmissionWeight = eV
              }
            },
            metadata: eV
          }, kU, bU), (0, NV.i)(VV, null, sx, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionWeightTexture" in VV,
              get: VV => VV.transmissionWeightTexture,
              set: (VV, eV) => {
                VV.transmissionWeightTexture = eV
              }
            },
            metadata: eV
          }, EU, BU), (0, NV.i)(VV, null, Sx, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionColor" in VV,
              get: VV => VV.transmissionColor,
              set: (VV, eV) => {
                VV.transmissionColor = eV
              }
            },
            metadata: eV
          }, jU, qU), (0, NV.i)(VV, null, Ix, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionColorTexture" in VV,
              get: VV => VV.transmissionColorTexture,
              set: (VV, eV) => {
                VV.transmissionColorTexture = eV
              }
            },
            metadata: eV
          }, tU, FU), (0, NV.i)(VV, null, dx, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionDepth" in VV,
              get: VV => VV.transmissionDepth,
              set: (VV, eV) => {
                VV.transmissionDepth = eV
              }
            },
            metadata: eV
          }, TU, PU), (0, NV.i)(VV, null, Ox, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionDepthTexture" in VV,
              get: VV => VV.transmissionDepthTexture,
              set: (VV, eV) => {
                VV.transmissionDepthTexture = eV
              }
            },
            metadata: eV
          }, AU, NU), (0, NV.i)(VV, null, VJ, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionScatter" in VV,
              get: VV => VV.transmissionScatter,
              set: (VV, eV) => {
                VV.transmissionScatter = eV
              }
            },
            metadata: eV
          }, XU, MU), (0, NV.i)(VV, null, eJ, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionScatterTexture" in VV,
              get: VV => VV.transmissionScatterTexture,
              set: (VV, eV) => {
                VV.transmissionScatterTexture = eV
              }
            },
            metadata: eV
          }, zU, GU), (0, NV.i)(VV, null, xJ, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionScatterAnisotropy" in VV,
              get: VV => VV.transmissionScatterAnisotropy,
              set: (VV, eV) => {
                VV.transmissionScatterAnisotropy = eV
              }
            },
            metadata: eV
          }, WU, RU), (0, NV.i)(VV, null, JJ, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionDispersionScale" in VV,
              get: VV => VV.transmissionDispersionScale,
              set: (VV, eV) => {
                VV.transmissionDispersionScale = eV
              }
            },
            metadata: eV
          }, gU, DU), (0, NV.i)(VV, null, YJ, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionDispersionScaleTexture" in VV,
              get: VV => VV.transmissionDispersionScaleTexture,
              set: (VV, eV) => {
                VV.transmissionDispersionScaleTexture = eV
              }
            },
            metadata: eV
          }, iU, CU), (0, NV.i)(VV, null, UJ, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: VV => "transmissionDispersionAbbeNumber" in VV,
              get: VV => VV.transmissionDispersionAbbeNumber,
              set: (VV, eV) => {
                VV.transmissionDispersionAbbeNumber = eV
              }
            },
            metadata: eV
          }, aU, oU), (0, NV.i)(VV, null, yJ, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceWeight" in VV,
              get: VV => VV.subsurfaceWeight,
              set: (VV, eV) => {
                VV.subsurfaceWeight = eV
              }
            },
            metadata: eV
          }, cU, hU), (0, NV.i)(VV, null, pJ, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceWeightTexture" in VV,
              get: VV => VV.subsurfaceWeightTexture,
              set: (VV, eV) => {
                VV.subsurfaceWeightTexture = eV
              }
            },
            metadata: eV
          }, lU, LU), (0, NV.i)(VV, null, QJ, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceColor" in VV,
              get: VV => VV.subsurfaceColor,
              set: (VV, eV) => {
                VV.subsurfaceColor = eV
              }
            },
            metadata: eV
          }, fU, mU), (0, NV.i)(VV, null, nJ, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceColorTexture" in VV,
              get: VV => VV.subsurfaceColorTexture,
              set: (VV, eV) => {
                VV.subsurfaceColorTexture = eV
              }
            },
            metadata: eV
          }, KU, HU), (0, NV.i)(VV, null, wJ, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceRadius" in VV,
              get: VV => VV.subsurfaceRadius,
              set: (VV, eV) => {
                VV.subsurfaceRadius = eV
              }
            },
            metadata: eV
          }, uU, sU), (0, NV.i)(VV, null, ZJ, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceRadiusScale" in VV,
              get: VV => VV.subsurfaceRadiusScale,
              set: (VV, eV) => {
                VV.subsurfaceRadiusScale = eV
              }
            },
            metadata: eV
          }, SU, IU), (0, NV.i)(VV, null, vJ, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceRadiusScaleTexture" in VV,
              get: VV => VV.subsurfaceRadiusScaleTexture,
              set: (VV, eV) => {
                VV.subsurfaceRadiusScaleTexture = eV
              }
            },
            metadata: eV
          }, dU, OU), (0, NV.i)(VV, null, rJ, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: VV => "subsurfaceScatterAnisotropy" in VV,
              get: VV => VV.subsurfaceScatterAnisotropy,
              set: (VV, eV) => {
                VV.subsurfaceScatterAnisotropy = eV
              }
            },
            metadata: eV
          }, Vy, ey), (0, NV.i)(VV, null, kJ, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatWeight" in VV,
              get: VV => VV.coatWeight,
              set: (VV, eV) => {
                VV.coatWeight = eV
              }
            },
            metadata: eV
          }, xy, Jy), (0, NV.i)(VV, null, bJ, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatWeightTexture" in VV,
              get: VV => VV.coatWeightTexture,
              set: (VV, eV) => {
                VV.coatWeightTexture = eV
              }
            },
            metadata: eV
          }, Yy, Uy), (0, NV.i)(VV, null, EJ, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatColor" in VV,
              get: VV => VV.coatColor,
              set: (VV, eV) => {
                VV.coatColor = eV
              }
            },
            metadata: eV
          }, yy, py), (0, NV.i)(VV, null, BJ, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatColorTexture" in VV,
              get: VV => VV.coatColorTexture,
              set: (VV, eV) => {
                VV.coatColorTexture = eV
              }
            },
            metadata: eV
          }, Qy, ny), (0, NV.i)(VV, null, jJ, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatRoughness" in VV,
              get: VV => VV.coatRoughness,
              set: (VV, eV) => {
                VV.coatRoughness = eV
              }
            },
            metadata: eV
          }, wy, Zy), (0, NV.i)(VV, null, qJ, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatRoughnessTexture" in VV,
              get: VV => VV.coatRoughnessTexture,
              set: (VV, eV) => {
                VV.coatRoughnessTexture = eV
              }
            },
            metadata: eV
          }, vy, ry), (0, NV.i)(VV, null, tJ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatRoughnessAnisotropy" in VV,
              get: VV => VV.coatRoughnessAnisotropy,
              set: (VV, eV) => {
                VV.coatRoughnessAnisotropy = eV
              }
            },
            metadata: eV
          }, ky, by), (0, NV.i)(VV, null, FJ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatRoughnessAnisotropyTexture" in VV,
              get: VV => VV.coatRoughnessAnisotropyTexture,
              set: (VV, eV) => {
                VV.coatRoughnessAnisotropyTexture = eV
              }
            },
            metadata: eV
          }, Ey, By), (0, NV.i)(VV, null, TJ, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatIor" in VV,
              get: VV => VV.coatIor,
              set: (VV, eV) => {
                VV.coatIor = eV
              }
            },
            metadata: eV
          }, jy, qy), (0, NV.i)(VV, null, PJ, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatDarkening" in VV,
              get: VV => VV.coatDarkening,
              set: (VV, eV) => {
                VV.coatDarkening = eV
              }
            },
            metadata: eV
          }, ty, Fy), (0, NV.i)(VV, null, AJ, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "coatDarkeningTexture" in VV,
              get: VV => VV.coatDarkeningTexture,
              set: (VV, eV) => {
                VV.coatDarkeningTexture = eV
              }
            },
            metadata: eV
          }, Ty, Py), (0, NV.i)(VV, null, NJ, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzWeight" in VV,
              get: VV => VV.fuzzWeight,
              set: (VV, eV) => {
                VV.fuzzWeight = eV
              }
            },
            metadata: eV
          }, Ay, Ny), (0, NV.i)(VV, null, XJ, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzWeightTexture" in VV,
              get: VV => VV.fuzzWeightTexture,
              set: (VV, eV) => {
                VV.fuzzWeightTexture = eV
              }
            },
            metadata: eV
          }, Xy, My), (0, NV.i)(VV, null, MJ, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzColor" in VV,
              get: VV => VV.fuzzColor,
              set: (VV, eV) => {
                VV.fuzzColor = eV
              }
            },
            metadata: eV
          }, zy, Gy), (0, NV.i)(VV, null, zJ, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzColorTexture" in VV,
              get: VV => VV.fuzzColorTexture,
              set: (VV, eV) => {
                VV.fuzzColorTexture = eV
              }
            },
            metadata: eV
          }, Wy, Ry), (0, NV.i)(VV, null, GJ, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzRoughness" in VV,
              get: VV => VV.fuzzRoughness,
              set: (VV, eV) => {
                VV.fuzzRoughness = eV
              }
            },
            metadata: eV
          }, gy, Dy), (0, NV.i)(VV, null, WJ, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "fuzzRoughnessTexture" in VV,
              get: VV => VV.fuzzRoughnessTexture,
              set: (VV, eV) => {
                VV.fuzzRoughnessTexture = eV
              }
            },
            metadata: eV
          }, iy, Cy), (0, NV.i)(VV, null, RJ, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryThinWalled" in VV,
              get: VV => VV.geometryThinWalled,
              set: (VV, eV) => {
                VV.geometryThinWalled = eV
              }
            },
            metadata: eV
          }, ay, oy), (0, NV.i)(VV, null, gJ, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryNormalTexture" in VV,
              get: VV => VV.geometryNormalTexture,
              set: (VV, eV) => {
                VV.geometryNormalTexture = eV
              }
            },
            metadata: eV
          }, cy, hy), (0, NV.i)(VV, null, DJ, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryTangent" in VV,
              get: VV => VV.geometryTangent,
              set: (VV, eV) => {
                VV.geometryTangent = eV
              }
            },
            metadata: eV
          }, ly, Ly), (0, NV.i)(VV, null, iJ, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryTangentTexture" in VV,
              get: VV => VV.geometryTangentTexture,
              set: (VV, eV) => {
                VV.geometryTangentTexture = eV
              }
            },
            metadata: eV
          }, fy, my), (0, NV.i)(VV, null, CJ, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryCoatNormalTexture" in VV,
              get: VV => VV.geometryCoatNormalTexture,
              set: (VV, eV) => {
                VV.geometryCoatNormalTexture = eV
              }
            },
            metadata: eV
          }, Ky, Hy), (0, NV.i)(VV, null, aJ, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryCoatTangent" in VV,
              get: VV => VV.geometryCoatTangent,
              set: (VV, eV) => {
                VV.geometryCoatTangent = eV
              }
            },
            metadata: eV
          }, uy, sy), (0, NV.i)(VV, null, oJ, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryCoatTangentTexture" in VV,
              get: VV => VV.geometryCoatTangentTexture,
              set: (VV, eV) => {
                VV.geometryCoatTangentTexture = eV
              }
            },
            metadata: eV
          }, Sy, Iy), (0, NV.i)(VV, null, cJ, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryOpacity" in VV,
              get: VV => VV.geometryOpacity,
              set: (VV, eV) => {
                VV.geometryOpacity = eV
              }
            },
            metadata: eV
          }, dy, Oy), (0, NV.i)(VV, null, hJ, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryOpacityTexture" in VV,
              get: VV => VV.geometryOpacityTexture,
              set: (VV, eV) => {
                VV.geometryOpacityTexture = eV
              }
            },
            metadata: eV
          }, Vp, ep), (0, NV.i)(VV, null, lJ, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryThickness" in VV,
              get: VV => VV.geometryThickness,
              set: (VV, eV) => {
                VV.geometryThickness = eV
              }
            },
            metadata: eV
          }, xp, Jp), (0, NV.i)(VV, null, LJ, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "geometryThicknessTexture" in VV,
              get: VV => VV.geometryThicknessTexture,
              set: (VV, eV) => {
                VV.geometryThicknessTexture = eV
              }
            },
            metadata: eV
          }, Yp, Up), (0, NV.i)(VV, null, fJ, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissionLuminance" in VV,
              get: VV => VV.emissionLuminance,
              set: (VV, eV) => {
                VV.emissionLuminance = eV
              }
            },
            metadata: eV
          }, yp, pp), (0, NV.i)(VV, null, mJ, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissionColor" in VV,
              get: VV => VV.emissionColor,
              set: (VV, eV) => {
                VV.emissionColor = eV
              }
            },
            metadata: eV
          }, Qp, np), (0, NV.i)(VV, null, KJ, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissionColorTexture" in VV,
              get: VV => VV.emissionColorTexture,
              set: (VV, eV) => {
                VV.emissionColorTexture = eV
              }
            },
            metadata: eV
          }, wp, Zp), (0, NV.i)(VV, null, HJ, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmWeight" in VV,
              get: VV => VV.thinFilmWeight,
              set: (VV, eV) => {
                VV.thinFilmWeight = eV
              }
            },
            metadata: eV
          }, vp, rp), (0, NV.i)(VV, null, uJ, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmWeightTexture" in VV,
              get: VV => VV.thinFilmWeightTexture,
              set: (VV, eV) => {
                VV.thinFilmWeightTexture = eV
              }
            },
            metadata: eV
          }, kp, bp), (0, NV.i)(VV, null, sJ, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmThickness" in VV,
              get: VV => VV.thinFilmThickness,
              set: (VV, eV) => {
                VV.thinFilmThickness = eV
              }
            },
            metadata: eV
          }, Ep, Bp), (0, NV.i)(VV, null, SJ, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmThicknessMin" in VV,
              get: VV => VV.thinFilmThicknessMin,
              set: (VV, eV) => {
                VV.thinFilmThicknessMin = eV
              }
            },
            metadata: eV
          }, jp, qp), (0, NV.i)(VV, null, IJ, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmThicknessTexture" in VV,
              get: VV => VV.thinFilmThicknessTexture,
              set: (VV, eV) => {
                VV.thinFilmThicknessTexture = eV
              }
            },
            metadata: eV
          }, tp, Fp), (0, NV.i)(VV, null, dJ, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: VV => "thinFilmIor" in VV,
              get: VV => VV.thinFilmIor,
              set: (VV, eV) => {
                VV.thinFilmIor = eV
              }
            },
            metadata: eV
          }, Tp, Pp), (0, NV.i)(VV, null, OJ, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "ambientOcclusionTexture" in VV,
              get: VV => VV.ambientOcclusionTexture,
              set: (VV, eV) => {
                VV.ambientOcclusionTexture = eV
              }
            },
            metadata: eV
          }, Ap, Np), (0, NV.i)(VV, null, VY, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: VV => "directIntensity" in VV,
              get: VV => VV.directIntensity,
              set: (VV, eV) => {
                VV.directIntensity = eV
              }
            },
            metadata: eV
          }, Xp, Mp), (0, NV.i)(VV, null, eY, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: VV => "environmentIntensity" in VV,
              get: VV => VV.environmentIntensity,
              set: (VV, eV) => {
                VV.environmentIntensity = eV
              }
            },
            metadata: eV
          }, zp, Gp), (0, NV.i)(VV, null, xY, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "useSpecularWeightFromTextureAlpha" in VV,
              get: VV => VV.useSpecularWeightFromTextureAlpha,
              set: (VV, eV) => {
                VV.useSpecularWeightFromTextureAlpha = eV
              }
            },
            metadata: eV
          }, Wp, Rp), (0, NV.i)(VV, null, JY, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: VV => "forceAlphaTest" in VV,
              get: VV => VV.forceAlphaTest,
              set: (VV, eV) => {
                VV.forceAlphaTest = eV
              }
            },
            metadata: eV
          }, gp, Dp), (0, NV.i)(VV, null, YY, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: VV => "alphaCutOff" in VV,
              get: VV => VV.alphaCutOff,
              set: (VV, eV) => {
                VV.alphaCutOff = eV
              }
            },
            metadata: eV
          }, ip, Cp), (0, NV.i)(VV, null, UY, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: VV => "useAmbientOcclusionFromMetallicTextureRed" in VV,
              get: VV => VV.useAmbientOcclusionFromMetallicTextureRed,
              set: (VV, eV) => {
                VV.useAmbientOcclusionFromMetallicTextureRed = eV
              }
            },
            metadata: eV
          }, ap, op), (0, NV.i)(VV, null, yY, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "useAmbientInGrayScale" in VV,
              get: VV => VV.useAmbientInGrayScale,
              set: (VV, eV) => {
                VV.useAmbientInGrayScale = eV
              }
            },
            metadata: eV
          }, cp, hp), (0, NV.i)(VV, null, pY, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: VV => "usePhysicalLightFalloff" in VV,
              get: VV => VV.usePhysicalLightFalloff
            },
            metadata: eV
          }, null, RY), (0, NV.i)(VV, null, QY, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: VV => "useGLTFLightFalloff" in VV,
              get: VV => VV.useGLTFLightFalloff
            },
            metadata: eV
          }, null, RY), (0, NV.i)(VV, null, nY, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "useObjectSpaceNormalMap" in VV,
              get: VV => VV.useObjectSpaceNormalMap,
              set: (VV, eV) => {
                VV.useObjectSpaceNormalMap = eV
              }
            },
            metadata: eV
          }, lp, Lp), (0, NV.i)(VV, null, wY, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: VV => "useParallax" in VV,
              get: VV => VV.useParallax,
              set: (VV, eV) => {
                VV.useParallax = eV
              }
            },
            metadata: eV
          }, fp, mp), (0, NV.i)(VV, null, ZY, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: VV => "useParallaxOcclusion" in VV,
              get: VV => VV.useParallaxOcclusion,
              set: (VV, eV) => {
                VV.useParallaxOcclusion = eV
              }
            },
            metadata: eV
          }, Kp, Hp), (0, NV.i)(VV, null, vY, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: VV => "parallaxScaleBias" in VV,
              get: VV => VV.parallaxScaleBias,
              set: (VV, eV) => {
                VV.parallaxScaleBias = eV
              }
            },
            metadata: eV
          }, sp, Sp), (0, NV.i)(VV, null, rY, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "disableLighting" in VV,
              get: VV => VV.disableLighting,
              set: (VV, eV) => {
                VV.disableLighting = eV
              }
            },
            metadata: eV
          }, Ip, dp), (0, NV.i)(VV, null, kY, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: VV => "forceIrradianceInFragment" in VV,
              get: VV => VV.forceIrradianceInFragment,
              set: (VV, eV) => {
                VV.forceIrradianceInFragment = eV
              }
            },
            metadata: eV
          }, Op, VQ), (0, NV.i)(VV, null, bY, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: VV => "maxSimultaneousLights" in VV,
              get: VV => VV.maxSimultaneousLights,
              set: (VV, eV) => {
                VV.maxSimultaneousLights = eV
              }
            },
            metadata: eV
          }, eQ, xQ), (0, NV.i)(VV, null, EY, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: VV => "invertNormalMapX" in VV,
              get: VV => VV.invertNormalMapX,
              set: (VV, eV) => {
                VV.invertNormalMapX = eV
              }
            },
            metadata: eV
          }, JQ, YQ), (0, NV.i)(VV, null, BY, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: VV => "invertNormalMapY" in VV,
              get: VV => VV.invertNormalMapY,
              set: (VV, eV) => {
                VV.invertNormalMapY = eV
              }
            },
            metadata: eV
          }, UQ, yQ), (0, NV.i)(VV, null, jY, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "twoSidedLighting" in VV,
              get: VV => VV.twoSidedLighting,
              set: (VV, eV) => {
                VV.twoSidedLighting = eV
              }
            },
            metadata: eV
          }, pQ, QQ), (0, NV.i)(VV, null, qY, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: VV => "useAlphaFresnel" in VV,
              get: VV => VV.useAlphaFresnel,
              set: (VV, eV) => {
                VV.useAlphaFresnel = eV
              }
            },
            metadata: eV
          }, nQ, wQ), (0, NV.i)(VV, null, tY, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: VV => "useLinearAlphaFresnel" in VV,
              get: VV => VV.useLinearAlphaFresnel,
              set: (VV, eV) => {
                VV.useLinearAlphaFresnel = eV
              }
            },
            metadata: eV
          }, ZQ, vQ), (0, NV.i)(VV, null, FY, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "environmentBRDFTexture" in VV,
              get: VV => VV.environmentBRDFTexture,
              set: (VV, eV) => {
                VV.environmentBRDFTexture = eV
              }
            },
            metadata: eV
          }, rQ, kQ), (0, NV.i)(VV, null, TY, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: VV => "forceNormalForward" in VV,
              get: VV => VV.forceNormalForward,
              set: (VV, eV) => {
                VV.forceNormalForward = eV
              }
            },
            metadata: eV
          }, bQ, EQ), (0, NV.i)(VV, null, PY, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: VV => "enableSpecularAntiAliasing" in VV,
              get: VV => VV.enableSpecularAntiAliasing,
              set: (VV, eV) => {
                VV.enableSpecularAntiAliasing = eV
              }
            },
            metadata: eV
          }, BQ, jQ), (0, NV.i)(VV, null, AY, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: VV => "useHorizonOcclusion" in VV,
              get: VV => VV.useHorizonOcclusion,
              set: (VV, eV) => {
                VV.useHorizonOcclusion = eV
              }
            },
            metadata: eV
          }, qQ, tQ), (0, NV.i)(VV, null, NY, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: VV => "useRadianceOcclusion" in VV,
              get: VV => VV.useRadianceOcclusion,
              set: (VV, eV) => {
                VV.useRadianceOcclusion = eV
              }
            },
            metadata: eV
          }, FQ, TQ), (0, NV.i)(VV, null, XY, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: VV => "unlit" in VV,
              get: VV => VV.unlit,
              set: (VV, eV) => {
                VV.unlit = eV
              }
            },
            metadata: eV
          }, PQ, AQ), (0, NV.i)(VV, null, MY, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "applyDecalMapAfterDetailMap" in VV,
              get: VV => VV.applyDecalMapAfterDetailMap,
              set: (VV, eV) => {
                VV.applyDecalMapAfterDetailMap = eV
              }
            },
            metadata: eV
          }, NQ, XQ), (0, NV.i)(VV, null, zY, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "debugMode" in VV,
              get: VV => VV.debugMode,
              set: (VV, eV) => {
                VV.debugMode = eV
              }
            },
            metadata: eV
          }, MQ, zQ), (0, NV.i)(VV, null, GY, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: VV => "transparencyMode" in VV,
              get: VV => VV.transparencyMode
            },
            metadata: eV
          }, null, RY), eV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eV
          })
        })(), VV.SSS_QUALITY_LOW = 0, VV.SSS_QUALITY_MEDIUM = 1, VV.SSS_QUALITY_HIGH = 2, VV._noiseTextures = {}, VV.ForceGLSL = !1, VV._ShaderLoader = new ve.b((() => [Promise.all([xV.e(626), xV.e(689)]).then((() => xV(64752))), Promise.all([xV.e(631), xV.e(627), xV.e(688), xV.e(693)]).then((() => xV(64757)))]), (() => [Promise.all([xV.e(645), xV.e(647), xV.e(692)]).then((() => xV(64793))), Promise.all([xV.e(645), xV.e(648), xV.e(691), xV.e(694)]).then((() => xV(64803)))])), VV
      })(),
      Oe = !1;
    Oe || (Oe = !0, (0, uV.e)(), (0, le.d)("BABYLON.OpenPBRMaterial", de));
    var Vx = xV(38296);
    class ex {
      constructor(VV) {
        this.name = De.e.NAME_PROCEDURALTEXTURE, this.yE = VV
      }
      register() {
        this.yE._beforeClearStage.registerStep(De.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.yE.proceduralTexturesEnabled) {
          Ae.j.StartPerformanceCounter("Procedural textures", this.yE.proceduralTextures.length > 0);
          for (let VV = 0; VV < this.yE.proceduralTextures.length; VV++) {
            const eV = this.yE.proceduralTextures[VV];
            eV._shouldRender() && eV.render()
          }
          Ae.j.EndPerformanceCounter("Procedural textures", this.yE.proceduralTextures.length > 0)
        }
      }
    }
    var xx = xV(41577);
    let Jx = (() => {
      var VV;
      let eV, JV, YV, yV, pV, QV = GV.f,
        nV = [],
        wV = [],
        ZV = [],
        vV = [],
        rV = [],
        kV = [],
        EV = [],
        BV = [],
        jV = [];
      return VV = class extends QV {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(VV, eV, xV, JV) {
          let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, JV, !UV), this.isEnabled = ((0, NV.l)(this, nV), (0, NV.l)(this, wV, !0)), this.autoClear = ((0, NV.l)(this, ZV), (0, NV.l)(this, vV, !0)), this.onGenerated = (0, NV.l)(this, rV), this.onGeneratedObservable = new Vx.c, this.onBeforeGenerationObservable = new Vx.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, NV.l)(this, kV, void 0), this._drawWrapper = (0, NV.l)(this, EV), this._textures = {}, this._size = (0, NV.l)(this, BV, void 0), this._textureType = (0, NV.l)(this, jV), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === YV || YV instanceof GV.f ? (this._options = {}, this._fallbackTexture = YV) : (this._options = YV, this._fallbackTexture = YV.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let QV = (JV = this.dD() || bV.d.LastCreatedScene)._getComponent(De.e.NAME_PROCEDURALTEXTURE);
          QV || (QV = new ex(JV), JV.jYV(QV)), this._options.skipSceneRegistration || JV.proceduralTextures.push(this), this._fullEngine = JV.sk(), this.name = VV, this.isRenderTarget = !0, this._size = eV, this._textureType = pV, this._generateMipMaps = UV, this._drawWrapper = new xx.d(this._fullEngine), this.setFragment(xV);
          const qV = this._createRtWrapper(yV, eV, UV, pV);
          this._texture = qV.texture;
          const tV = [];
          tV.push(1, 1), tV.push(-1, 1), tV.push(-1, -1), tV.push(1, -1), this._vertexBuffers[cV.j.PositionKind] = new cV.j(this._fullEngine, tV, cV.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(VV, eV, xV, JV) {
          return VV ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(eV, {
            generateMipMaps: xV,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: JV,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(eV, {
            generateMipMaps: xV,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: JV,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(VV) {
          this._drawWrapper.effect = VV
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((VV => {
            this._contentData = this.readPixels(0, 0, VV), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const VV = this._fullEngine,
            eV = [];
          eV.push(0), eV.push(1), eV.push(2), eV.push(0), eV.push(2), eV.push(3), this._indexBuffer = VV.createIndexBuffer(eV)
        }
        _rebuild() {
          const VV = this._vertexBuffers[cV.j.PositionKind];
          VV && VV._rebuild(), this._createIndexBuffer(), this.refreshRate === Ne.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Ne.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(VV) {
          if (this.isReady()) return void VV(this);
          const eV = this.getEffect();
          eV && eV.executeWhenCompiled((() => {
            VV(this)
          }))
        }
        isReady() {
          const VV = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const eV = this._getDefines();
          if (this._drawWrapper.effect && eV === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const JV = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== eV && (this._cachedDefines = eV, this._drawWrapper.effect = VV.createEffect(JV, [cV.j.PositionKind], this._uniforms, this._samplers, eV, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([xV.e(697).then((() => xV(64865))), this._options.extraInitializationsAsync()]) : await Promise.all([xV.e(698).then((() => xV(64870))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await xV.e(697).then((() => xV(64865))) : await xV.e(698).then((() => xV(64870)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(VV) {
          this._fragment = VV
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(VV) {
          this._refreshRate = VV, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(VV, eV) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const xV = this._texture.isCube;
          this._rtWrapper.dispose();
          const JV = this._createRtWrapper(xV, VV, eV, this._textureType);
          this._texture = JV.texture, this._size = VV, this._generateMipMaps = eV
        }
        _checkUniform(VV) {
          -1 === this._uniforms.indexOf(VV) && this._uniforms.push(VV)
        }
        setTexture(VV, eV) {
          return -1 === this._samplers.indexOf(VV) && this._samplers.push(VV), this._textures[VV] = eV, this
        }
        setFloat(VV, eV) {
          return this._checkUniform(VV), this._floats[VV] = eV, this
        }
        setInt(VV, eV) {
          return this._checkUniform(VV), this._ints[VV] = eV, this
        }
        setFloats(VV, eV) {
          return this._checkUniform(VV), this._floatsArrays[VV] = eV, this
        }
        setColor3(VV, eV) {
          return this._checkUniform(VV), this._colors3[VV] = eV, this
        }
        setColor4(VV, eV) {
          return this._checkUniform(VV), this._colors4[VV] = eV, this
        }
        setVector2(VV, eV) {
          return this._checkUniform(VV), this._vectors2[VV] = eV, this
        }
        setVector3(VV, eV) {
          return this._checkUniform(VV), this._vectors3[VV] = eV, this
        }
        setVector4(VV, eV) {
          return this._checkUniform(VV), this._vectors4[VV] = eV, this
        }
        setMatrix(VV, eV) {
          return this._checkUniform(VV), this._matrices[VV] = eV, this
        }
        render(VV) {
          const eV = this.dD();
          if (!eV) return;
          const xV = this._fullEngine;
          if (xV.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), xV.setState(!1), !this.nodeMaterialSource) {
            for (const VV in this._textures) this._drawWrapper.effect.setTexture(VV, this._textures[VV]);
            for (const VV in this._ints) this._drawWrapper.effect.setInt(VV, this._ints[VV]);
            for (const VV in this._floats) this._drawWrapper.effect.setFloat(VV, this._floats[VV]);
            for (const VV in this._floatsArrays) this._drawWrapper.effect.setArray(VV, this._floatsArrays[VV]);
            for (const VV in this._colors3) this._drawWrapper.effect.setColor3(VV, this._colors3[VV]);
            for (const VV in this._colors4) {
              const eV = this._colors4[VV];
              this._drawWrapper.effect.setFloat4(VV, eV.r, eV.g, eV.b, eV.a)
            }
            for (const VV in this._vectors2) this._drawWrapper.effect.setVector2(VV, this._vectors2[VV]);
            for (const VV in this._vectors3) this._drawWrapper.effect.setVector3(VV, this._vectors3[VV]);
            for (const VV in this._vectors4) this._drawWrapper.effect.setVector4(VV, this._vectors4[VV]);
            for (const VV in this._matrices) this._drawWrapper.effect.setMatrix(VV, this._matrices[VV])
          }
          if (!this._texture || !this._rtWrapper) return;
          xV._enableGPUDebugMarkers && xV._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const JV = xV.currentViewport;
          if (this.isCube)
            for (let YV = 0; YV < 6; YV++) xV.bindFramebuffer(this._rtWrapper, YV, void 0, void 0, !0), xV.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", YV), this.autoClear && xV.clear(eV.clearColor, !0, !1, !1), xV.drawElementsType(UV.e.TriangleFillMode, 0, 6), xV.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let VV = 1;
            this._rtWrapper.is3D ? VV = this._rtWrapper.depth : this._rtWrapper.is2DArray && (VV = this._rtWrapper.layers);
            for (let JV = 0; JV < VV; JV++) {
              if (xV.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, JV), xV.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== VV ? JV / (VV - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", JV);
                for (const VV in this._textures) this._drawWrapper.effect.setTexture(VV, this._textures[VV])
              }
              this.autoClear && xV.clear(eV.clearColor, !0, !1, !1), xV.drawElementsType(UV.e.TriangleFillMode, 0, 6), xV.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          JV && xV.setViewport(JV), this.isCube && xV.generateMipMapsForCubemap(this._texture, !0), xV._enableGPUDebugMarkers && xV._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const eV = this.getSize(),
            xV = new VV(this.name, eV.width, this._fragment, this.dD(), this._fallbackTexture, this._generateMipMaps);
          return xV.hasAlpha = this.hasAlpha, xV.level = this.level, xV.coordinatesMode = this.coordinatesMode, xV
        }
        dispose() {
          const VV = this.dD();
          if (!VV) return;
          const eV = VV.proceduralTextures.indexOf(this);
          eV >= 0 && VV.proceduralTextures.splice(eV, 1);
          const xV = this._vertexBuffers[cV.j.PositionKind];
          xV && (xV.dispose(), this._vertexBuffers[cV.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const xV = "function" === typeof Symbol && Symbol.metadata ? Object.create(QV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, XV.J)()], JV = [(0, XV.J)()], YV = [(0, XV.J)()], yV = [(0, XV.J)()], pV = [(0, XV.J)()], (0, NV.i)(VV, null, pV, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: VV => "refreshRate" in VV,
            get: VV => VV.refreshRate
          },
          metadata: xV
        }, null, nV), (0, NV.i)(null, null, eV, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: xV
        }, wV, ZV), (0, NV.i)(null, null, JV, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: VV => "autoClear" in VV,
            get: VV => VV.autoClear,
            set: (VV, eV) => {
              VV.autoClear = eV
            }
          },
          metadata: xV
        }, vV, rV), (0, NV.i)(null, null, YV, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: VV => "_generateMipMaps" in VV,
            get: VV => VV._generateMipMaps,
            set: (VV, eV) => {
              VV._generateMipMaps = eV
            }
          },
          metadata: xV
        }, kV, EV), (0, NV.i)(null, null, yV, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: VV => "_size" in VV,
            get: VV => VV._size,
            set: (VV, eV) => {
              VV._size = eV
            }
          },
          metadata: xV
        }, BV, jV), xV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xV
        })
      })(), VV
    })();

    function Yx(VV) {
      return "texture" in VV
    }

    function Ux(VV) {
      return "value" in VV
    }
    async function yx(VV, eV, JV) {
      const YV = [eV.red, eV.green, eV.blue, eV.alpha],
        UV = [],
        yV = [];
      for (let xV = 0; xV < 4; xV++) {
        const VV = YV[xV];
        if (VV)
          if (Yx(VV)) {
            if (VV.sourceChannel < 0 || VV.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let eV = UV.indexOf(VV.texture); - 1 === eV && (eV = UV.length, UV.push(VV.texture)), yV[xV] = eV
          } else {
            if (!Ux(VV)) throw new Error("Invalid channel input configuration");
            if (VV.value < 0 || VV.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            yV[xV] = -1
          }
        else yV[xV] = -1
      }
      let pV = eV.outputSize;
      if (!pV && UV.length > 0) {
        let VV = 0;
        for (const eV of UV) {
          const xV = eV.getSize(),
            JV = Math.max(xV.width, xV.height);
          JV > VV && (VV = JV, pV = xV.width === xV.height ? VV : xV)
        }
      }
      pV = pV || 512;
      const QV = [],
        nV = new Set;
      for (let xV = 0; xV < 4; xV++) {
        const VV = YV[xV],
          eV = ["RED", "GREEN", "BLUE", "ALPHA"][xV];
        if (VV && Yx(VV)) {
          QV.push(`${eV}_FROM_TEXTURE`);
          const VV = yV[xV];
          nV.add(VV)
        }
      }
      nV.forEach((VV => {
        QV.push(`USE_TEXTURE${VV}`)
      }));
      const wV = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: JV.sk().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            JV.sk().isWebGPU ? await Promise.all([xV.e(695).then((() => xV(64859)))]) : await Promise.all([xV.e(696).then((() => xV(64863)))])
          },
          skipSceneRegistration: !0
        },
        ZV = new Jx(VV, pV, "textureMerger", JV, wV);
      ZV.refreshRate = -1, ZV.defines = QV.length > 0 ? "#define " + QV.join("\n#define ") + "\n" : "";
      for (let xV = 0; xV < UV.length; xV++) vV = UV[xV], (rV = ZV).uOffset = vV.uOffset, rV.vOffset = vV.vOffset, rV.uScale = vV.uScale, rV.vScale = vV.vScale, rV.uAng = vV.uAng, rV.vAng = vV.vAng, rV.wAng = vV.wAng, rV.uRotationCenter = vV.uRotationCenter, rV.vRotationCenter = vV.vRotationCenter, ZV.setTexture(`inputTexture${xV}`, UV[xV]);
      var vV, rV;
      for (let xV = 0; xV < 4; xV++) {
        const VV = YV[xV],
          eV = ["red", "green", "blue", "alpha"][xV];
        if (VV && Yx(VV)) {
          const JV = yV[xV];
          ZV.setInt(`${eV}TextureIndex`, JV), ZV.setInt(`${eV}SourceChannel`, VV.sourceChannel)
        } else {
          let JV;
          JV = VV && Ux(VV) ? VV.value : 3 === xV ? 1 : 0, ZV.setFloat(`${eV}ConstantValue`, JV)
        }
      }
      return await new Promise(((VV, eV) => {
        ZV.executeWhenReady((() => {
          try {
            ZV.render(), VV(ZV)
          } catch (xV) {
            eV(xV instanceof Error ? xV : new Error(String(xV)))
          }
        }))
      }))
    }

    function px(VV, eV) {
      return {
        texture: VV,
        sourceChannel: eV
      }
    }

    function Qx(VV) {
      return {
        value: VV
      }
    }

    function nx(VV, eV, xV, JV) {
      return {
        red: VV,
        green: eV,
        blue: xV,
        alpha: JV
      }
    }
    var wx = xV(41073),
      Zx = xV(41184),
      vx = xV(38280),
      rx = xV(41240),
      kx = xV(41168);
    class bx {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Ex extends wx.e {
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
        return !!this._options?.enableMultiview || this.Nb > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new bx;
        super(null), void 0 === VV.deterministicLockstep && (VV.deterministicLockstep = !1), void 0 !== VV.timeStep && (this._timeStep = VV.timeStep), void 0 === VV.lockstepMaxSteps && (VV.lockstepMaxSteps = 4), this._options = VV, vx.c.SetMatrixPrecision(!!VV.useHighPrecisionMatrix), this._caps = {
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
        }, VV.enableMultiview && (this._caps.multiview = {
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
        }, VV.renderingCanvas && (this._renderingCanvas = VV.renderingCanvas), MV.b.Log(`Babylon.js v${wx.e.Version} - Null engine`);
        const eV = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (eV.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (eV.Blob = function() {})
      }
      createVertexBuffer(VV) {
        const eV = new Zx.b;
        return eV.references = 1, eV
      }
      createIndexBuffer(VV) {
        const eV = new Zx.b;
        return eV.references = 1, eV
      }
      clear(VV, eV, xV) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(VV, eV, xV) {
        this._cachedViewport = VV
      }
      createUniformBuffer(VV) {
        const eV = new Zx.b;
        return eV.references = 1, eV.Jv = VV instanceof Array ? VV.length * Float32Array.BYTES_PER_ELEMENT : VV.byteLength, eV
      }
      createDynamicUniformBuffer(VV) {
        return this.createUniformBuffer(VV)
      }
      updateUniformBuffer(VV, eV, xV, JV) {}
      bindUniformBufferBase(VV, eV, xV) {}
      bindUniformBlock(VV, eV, xV) {}
      createShaderProgram(VV, eV, xV, JV, YV) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(VV, eV) {
        return []
      }
      getAttributes(VV, eV) {
        return []
      }
      bindSamplers(VV) {
        this._currentEffect = null
      }
      enableEffect(VV) {
        VV = null !== VV && (0, kx.e)(VV) ? VV.effect : VV, this._currentEffect = VV, VV && (VV.onBind && VV.onBind(VV), VV._onBindObservable && VV._onBindObservable.notifyObservers(VV))
      }
      setStateCullFaceType(VV, eV) {}
      setState(VV) {}
      setIntArray(VV, eV) {
        return !0
      }
      setIntArray2(VV, eV) {
        return !0
      }
      setIntArray3(VV, eV) {
        return !0
      }
      setIntArray4(VV, eV) {
        return !0
      }
      setFloatArray(VV, eV) {
        return !0
      }
      setFloatArray2(VV, eV) {
        return !0
      }
      setFloatArray3(VV, eV) {
        return !0
      }
      setFloatArray4(VV, eV) {
        return !0
      }
      setArray(VV, eV) {
        return !0
      }
      setArray2(VV, eV) {
        return !0
      }
      setArray3(VV, eV) {
        return !0
      }
      setArray4(VV, eV) {
        return !0
      }
      setMatrices(VV, eV) {
        return !0
      }
      setMatrix3x3(VV, eV) {
        return !0
      }
      setMatrix2x2(VV, eV) {
        return !0
      }
      setFloat(VV, eV) {
        return !0
      }
      setFloat2(VV, eV, xV) {
        return !0
      }
      setFloat3(VV, eV, xV, JV) {
        return !0
      }
      setBool(VV, eV) {
        return !0
      }
      setFloat4(VV, eV, xV, JV, YV) {
        return !0
      }
      setAlphaMode(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[xV] !== VV && (this.alphaState.setAlphaBlend(0 !== VV, 0), eV || this.setDepthWrite(0 === VV), this._alphaMode[xV] = VV)
      }
      bindBuffers(VV, eV, xV) {}
      wipeCaches(VV) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, VV && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(VV, eV, xV, JV) {}
      drawElementsType(VV, eV, xV, JV) {}
      drawArraysType(VV, eV, xV, JV) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(VV) {}
      createTexture(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const QV = new Xe.e(this, 1),
          nV = String(VV);
        return QV.url = nV, QV.generateMipMaps = !eV, QV.samplingMode = YV, QV.invertY = xV, QV.baseWidth = this._options.textureSize, QV.baseHeight = this._options.textureSize, QV.width = this._options.textureSize, QV.height = this._options.textureSize, pV && (QV.format = pV), yV && (QV._buffer = yV), QV.isReady = !0, UV && setTimeout((() => {
          UV(QV)
        })), this._internalTexturesCache.push(QV), QV
      }
      _createHardwareRenderTargetWrapper(VV, eV, xV) {
        const JV = new rx.c(VV, eV, xV, this);
        return this._renderTargetWrapperCache.push(JV), JV
      }
      createRenderTargetTexture(VV, eV) {
        const xV = this._createHardwareRenderTargetWrapper(!1, !1, VV),
          JV = {};
        void 0 !== eV && "object" === typeof eV ? (JV.generateMipMaps = eV.generateMipMaps, JV.generateDepthBuffer = void 0 === eV.generateDepthBuffer || eV.generateDepthBuffer, JV.generateStencilBuffer = JV.generateDepthBuffer && eV.generateStencilBuffer, JV.type = void 0 === eV.type ? 0 : eV.type, JV.samplingMode = void 0 === eV.samplingMode ? 3 : eV.samplingMode) : (JV.generateMipMaps = eV, JV.generateDepthBuffer = !0, JV.generateStencilBuffer = !1, JV.type = 0, JV.samplingMode = 3);
        const YV = new Xe.e(this, 5);
        xV.setTexture(YV);
        const UV = VV.width || VV,
          yV = VV.height || VV;
        return xV._generateDepthBuffer = JV.generateDepthBuffer, xV._generateStencilBuffer = !!JV.generateStencilBuffer, YV.baseWidth = UV, YV.baseHeight = yV, YV.width = UV, YV.height = yV, YV.isReady = !0, YV.samples = 1, YV.generateMipMaps = !!JV.generateMipMaps, YV.samplingMode = JV.samplingMode, YV.type = JV.type, this._internalTexturesCache.push(YV), xV
      }
      createMultiviewRenderTargetTexture(VV, eV) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const xV = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: VV,
            height: eV
          }),
          JV = new Xe.e(this, 5, !0);
        return JV.baseWidth = VV, JV.baseHeight = eV, JV.width = VV, JV.height = eV, JV.isMultiview = !0, JV.isReady = !0, JV.format = 5, JV.samples = 1, xV.setTextures(JV), xV
      }
      bindMultiviewFramebuffer(VV) {
        this.bindFramebuffer(VV, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(VV, eV) {
        const xV = this._createHardwareRenderTargetWrapper(!1, !0, VV),
          JV = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...eV
          };
        JV.generateStencilBuffer = JV.generateDepthBuffer && JV.generateStencilBuffer, (1 !== JV.type || this._caps.textureFloatLinearFiltering) && (2 !== JV.type || this._caps.textureHalfFloatLinearFiltering) || (JV.samplingMode = 1), xV._generateDepthBuffer = JV.generateDepthBuffer, xV._generateStencilBuffer = !!JV.generateStencilBuffer;
        const YV = new Xe.e(this, 5);
        return YV.baseWidth = VV, YV.baseHeight = VV, YV.width = VV, YV.height = VV, YV.isReady = !0, YV.isCube = !0, YV.samples = 1, YV.generateMipMaps = !!JV.generateMipMaps, YV.samplingMode = JV.samplingMode, YV.type = JV.type, this._internalTexturesCache.push(YV), xV
      }
      updateTextureSamplingMode(VV, eV) {
        eV.samplingMode = VV
      }
      createRawTexture(VV, eV, xV, JV, YV, UV, yV) {
        let pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          QV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          nV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const wV = new Xe.e(this, 3);
        return wV.baseWidth = eV, wV.baseHeight = xV, wV.width = eV, wV.height = xV, wV.format = JV, wV.generateMipMaps = YV, wV.samplingMode = yV, wV.invertY = UV, wV._compression = pV, wV.type = QV, wV._useSRGBBuffer = nV, this._doNotHandleContextLost || (wV._bufferView = VV), wV
      }
      updateRawTexture(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        VV && (VV._bufferView = eV, VV.format = xV, VV.invertY = JV, VV._compression = YV, VV.type = UV, VV._useSRGBBuffer = yV)
      }
      bindFramebuffer(VV, eV, xV, JV, YV) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = VV, this._currentFramebuffer = null, this._cachedViewport && !YV && this.setViewport(this._cachedViewport, xV, JV)
      }
      unBindFramebuffer(VV) {
        let eV = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, eV && eV(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(VV) {
        const eV = new Zx.b;
        return eV.references = 1, eV.Jv = 1, eV
      }
      updateDynamicTexture(VV, eV, xV) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(VV) {}
      updateDynamicIndexBuffer(VV, eV) {}
      updateDynamicVertexBuffer(VV, eV, xV, JV) {}
      _bindTextureDirectly(VV, eV) {
        return this._boundTexturesCache[this._activeChannel] !== eV && (this._boundTexturesCache[this._activeChannel] = eV, !0)
      }
      _bindTexture(VV, eV) {
        VV < 0 || this._bindTextureDirectly(0, eV)
      }
      _deleteBuffer(VV) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(VV) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(VV, eV, xV, JV, YV) {}
      _uploadDataToTextureDirectly(VV, eV) {}
      _uploadArrayBufferViewToTexture(VV, eV) {}
      _uploadImageToTexture(VV, eV) {}
    }
    xV(41293), xV(41326), xV(41290);
    async function Bx(VV) {
      const eV = VV.getInternalTexture();
      if (!eV || 1 !== eV.source) return null;
      if (eV.invertY) {
        const eV = VV.dD()?.sk();
        if (!(eV instanceof Ex)) return null
      }
      const xV = eV._buffer;
      let JV, UV = VV.mimeType;
      try {
        xV ? ArrayBuffer.isView(xV) ? JV = xV.buffer.slice(xV.byteOffset, xV.byteOffset + xV.byteLength) : xV instanceof ArrayBuffer ? JV = xV : xV instanceof Blob ? (JV = await xV.arrayBuffer(), UV = xV.type || UV) : "string" === typeof xV ? (JV = await YV.Tools.LoadFileAsync(xV), UV = (0, QV.e)(xV) || UV) : "undefined" !== typeof HTMLImageElement && xV instanceof HTMLImageElement && (JV = await YV.Tools.LoadFileAsync(xV.src), UV = (0, QV.e)(xV.src) || UV) : (JV = await YV.Tools.LoadFileAsync(eV.url), UV = (0, QV.e)(eV.url) || UV)
      } catch {
        return null
      }
      if (JV && !UV && eV.url) {
        const VV = eV.url.match(/^data:([^;,]+)/);
        UV = VV ? VV[1] : (0, QV.e)(eV.url)
      }
      return JV && UV ? {
        data: JV,
        mimeType: UV
      } : null
    }
    const jx = 1e-6,
      qx = new EV.Color3(.04, .04, .04),
      tx = 1024,
      Fx = EV.Color3.White(),
      Tx = EV.Color3.BlackReadOnly;

    function Px(VV) {
      switch (VV) {
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

    function Ax(VV, eV, xV) {
      if (eV < qx.r) return 0;
      const JV = qx.r,
        YV = VV * xV / (1 - qx.r) + eV - 2 * qx.r,
        UV = YV * YV - 4 * JV * (qx.r - eV);
      return qV.Clamp((-YV + Math.sqrt(UV)) / (2 * JV), 0, 1)
    }

    function Nx(VV) {
      const eV = VV.diffuseColor.toLinearSpace(VV.dD().sk().useExactSrgbConversions).scale(.5),
        xV = VV.alpha,
        JV = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oV.n(0, 1),
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oV.n(0, .1),
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oV.n(0, .1),
            YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oV.n(1300, .1);
          return function(VV, eV, xV, JV, YV) {
            return (1 - VV) * (1 - VV) * (1 - VV) * eV + 3 * (1 - VV) * (1 - VV) * VV * xV + 3 * (1 - VV) * VV * VV * JV + VV * VV * VV * YV
          }(Math.pow(VV / YV.x, .333333), eV.y, xV.y, JV.y, YV.y)
        }(qV.Clamp(VV.specularPower, 0, tx));
      return {
        baseColorFactor: [eV.r, eV.g, eV.b, xV],
        metallicFactor: 0,
        roughnessFactor: JV
      }
    }

    function Xx(VV, eV) {
      eV.needAlphaBlending() ? VV.alphaMode = "BLEND" : eV.needAlphaTesting() && (VV.alphaMode = "MASK", VV.alphaCutoff = eV.alphaCutOff)
    }

    function Mx(VV, eV, xV) {
      const JV = new Uint8Array(VV * eV * 4);
      for (let YV = 0; YV < JV.length; YV += 4) JV[YV] = JV[YV + 1] = JV[YV + 2] = JV[YV + 3] = 255;
      return TV.e.CreateRGBATexture(JV, VV, eV, xV)
    }

    function zx(VV) {
      if (VV instanceof Uint8Array) {
        const eV = VV.length,
          xV = new Float32Array(VV.length);
        for (let JV = 0; JV < eV; ++JV) xV[JV] = VV[JV] / 255;
        return xV
      }
      if (VV instanceof Float32Array) return VV;
      throw new Error("Unsupported pixel format!")
    }
    class Gx {
      constructor(VV) {
        this._exporter = VV, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(VV) {
        return VV ? this._textureMap.get(VV.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(VV, eV) {
        const xV = Nx(VV),
          JV = {
            name: VV.name
          };
        if (null == VV.backFaceCulling || VV.backFaceCulling || (VV.twoSidedLighting || YV.Tools.Warn(VV.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), JV.doubleSided = !0), eV) {
          const eV = [],
            YV = VV.diffuseTexture;
          YV && eV.push(this.exportTextureAsync(YV).then((VV => {
            VV && (xV.baseColorTexture = VV)
          })));
          const UV = VV.bumpTexture;
          UV && eV.push(this.exportTextureAsync(UV).then((VV => {
            VV && (JV.normalTexture = VV, 1 !== UV.level && (JV.normalTexture.scale = UV.level))
          })));
          const yV = VV.emissiveTexture;
          yV && (JV.emissiveFactor = [1, 1, 1], eV.push(this.exportTextureAsync(yV).then((VV => {
            VV && (JV.emissiveTexture = VV)
          }))));
          const pV = VV.ambientTexture;
          pV && eV.push(this.exportTextureAsync(pV).then((VV => {
            if (VV) {
              const eV = {
                index: VV.index
              };
              JV.occlusionTexture = eV
            }
          }))), eV.length > 0 && (this._exporter._materialNeedsUVsSet.add(VV), await Promise.all(eV))
        }(VV.alpha < 1 || VV.opacityTexture) && (VV.alphaMode === PV.c.ALPHA_COMBINE ? JV.alphaMode = "BLEND" : YV.Tools.Warn(VV.name + ": glTF 2.0 does not support alpha mode: " + VV.alphaMode.toString())), VV.emissiveColor && !VV.emissiveColor.equalsWithEpsilon(Tx, jx) && (JV.emissiveFactor = VV.emissiveColor.WYV()), JV.pbrMetallicRoughness = xV, Xx(JV, VV), await this._finishMaterialAsync(JV, VV);
        const UV = this._exporter._materials;
        return UV.push(JV), UV.length - 1
      }
      async _finishMaterialAsync(VV, eV) {
        const xV = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", VV, eV),
          JV = [];
        for (const YV of xV) JV.push(this.exportTextureAsync(YV));
        await Promise.all(JV), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", VV, eV)
      }
      _resizeTexturesToSameDimensions(VV, eV, xV) {
        const JV = VV ? VV.getSize() : {
            width: 0,
            height: 0
          },
          YV = eV ? eV.getSize() : {
            width: 0,
            height: 0
          };
        let UV, yV;
        return JV.width < YV.width ? (UV = VV && VV instanceof FV.b ? tV.g.CreateResizedCopy(VV, YV.width, YV.height, !0) : Mx(YV.width, YV.height, xV), yV = eV) : JV.width > YV.width ? (yV = eV && eV instanceof FV.b ? tV.g.CreateResizedCopy(eV, JV.width, JV.height, !0) : Mx(JV.width, JV.height, xV), UV = VV) : (UV = VV, yV = eV), {
          texture1: UV,
          texture2: yV
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(VV, eV, xV) {
        const JV = new Array;
        if (!VV && !eV) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const YV = VV ? VV.dD() : eV ? eV.dD() : null;
        if (YV) {
          const UV = this._resizeTexturesToSameDimensions(VV, eV, YV),
            yV = UV.texture1?.getSize();
          let pV, QV;
          const nV = yV.width,
            wV = yV.height,
            ZV = await UV.texture1.readPixels(),
            vV = await UV.texture2.readPixels();
          if (!ZV) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (pV = zx(ZV), !vV) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          QV = zx(vV);
          const rV = QV.byteLength,
            kV = new Uint8Array(rV),
            bV = new Uint8Array(rV),
            BV = 4,
            jV = new EV.Color3(0, 0, 0);
          let qV = 0,
            tV = 0;
          for (let VV = 0; VV < wV; ++VV)
            for (let eV = 0; eV < nV; ++eV) {
              const JV = (nV * VV + eV) * BV,
                yV = {
                  diffuseColor: new EV.Color3(pV[JV], pV[JV + 1], pV[JV + 2]).toLinearSpace(YV.sk().useExactSrgbConversions).multiply(xV.diffuseColor),
                  specularColor: new EV.Color3(QV[JV], QV[JV + 1], QV[JV + 2]).toLinearSpace(YV.sk().useExactSrgbConversions).multiply(xV.specularColor),
                  glossiness: QV[JV + 3] * xV.glossiness
                },
                wV = this._convertSpecularGlossinessToMetallicRoughness(yV);
              jV.r = Math.max(jV.r, wV.baseColor.r), jV.g = Math.max(jV.g, wV.baseColor.g), jV.b = Math.max(jV.b, wV.baseColor.b), qV = Math.max(qV, wV.metallic), tV = Math.max(tV, wV.roughness), bV[JV] = 255 * wV.baseColor.r, bV[JV + 1] = 255 * wV.baseColor.g, bV[JV + 2] = 255 * wV.baseColor.b, bV[JV + 3] = UV.texture1.hasAlpha ? 255 * pV[JV + 3] : 255, kV[JV] = 0, kV[JV + 1] = 255 * wV.roughness, kV[JV + 2] = 255 * wV.metallic, kV[JV + 3] = 255
            }
          const FV = {
            baseColor: jV,
            metallic: qV,
            roughness: tV
          };
          let TV = !1,
            PV = !1;
          for (let VV = 0; VV < wV; ++VV)
            for (let eV = 0; eV < nV; ++eV) {
              const xV = (nV * VV + eV) * BV;
              bV[xV] /= FV.baseColor.r > jx ? FV.baseColor.r : 1, bV[xV + 1] /= FV.baseColor.g > jx ? FV.baseColor.g : 1, bV[xV + 2] /= FV.baseColor.b > jx ? FV.baseColor.b : 1;
              const JV = EV.Color3.FromInts(bV[xV], bV[xV + 1], bV[xV + 2]).toGammaSpace(YV.sk().useExactSrgbConversions);
              bV[xV] = 255 * JV.r, bV[xV + 1] = 255 * JV.g, bV[xV + 2] = 255 * JV.b, JV.equalsWithEpsilon(Fx, jx) || (PV = !0), kV[xV + 1] /= FV.roughness > jx ? FV.roughness : 1, kV[xV + 2] /= FV.metallic > jx ? FV.metallic : 1;
              EV.Color3.FromInts(255, kV[xV + 1], kV[xV + 2]).equalsWithEpsilon(Fx, jx) || (TV = !0)
            }
          return TV && JV.push((0, AV.EncodeImageAsync)(kV, nV, wV).then((VV => {
            FV.metallicRoughnessTextureData = VV
          }))), PV && JV.push((0, AV.EncodeImageAsync)(bV, nV, wV).then((VV => {
            FV.baseColorTextureData = VV
          }))), await Promise.all(JV).then((() => FV))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(VV) {
        const eV = this._getPerceivedBrightness(VV.diffuseColor),
          xV = this._getPerceivedBrightness(VV.specularColor),
          JV = 1 - this._getMaxComponent(VV.specularColor),
          YV = Ax(eV, xV, JV),
          UV = VV.diffuseColor.scale(JV / (1 - qx.r) / Math.max(1 - YV, jx)),
          yV = VV.specularColor.subtract(qx.scale(1 - YV)).scale(1 / Math.max(YV, jx));
        let pV = EV.Color3.Lerp(UV, yV, YV * YV);
        pV = pV.clampToRef(0, 1, pV);
        return {
          baseColor: pV,
          metallic: YV,
          roughness: 1 - VV.glossiness
        }
      }
      _getPerceivedBrightness(VV) {
        return Math.sqrt(.299 * VV.r * VV.r + .587 * VV.g * VV.g + .114 * VV.b * VV.b)
      }
      _getMaxComponent(VV) {
        return Math.max(VV.r, Math.max(VV.g, VV.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        const nV = [],
          wV = {
            baseColor: VV,
            metallic: eV,
            roughness: xV
          };
        if (QV)
          if (yV instanceof de) {
            if (yV.geometryOpacityTexture) {
              const VV = JV && JV.getInternalTexture() ? JV.getInternalTexture().uniqueId : 0,
                eV = yV.geometryOpacityTexture && yV.geometryOpacityTexture.getInternalTexture() ? yV.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                xV = Number(`${VV}${eV}`),
                YV = this._textureMap.get(xV);
              YV ? pV.baseColorTexture = YV : nV.push(yx("baseColorOpacityTexture", nx(JV ? px(JV, 0) : Qx(1), JV ? px(JV, 1) : Qx(1), JV ? px(JV, 2) : Qx(1), px(yV.geometryOpacityTexture, 0)), yV.dD()).then((async VV => {
                const eV = await this.exportTextureAsync(VV, xV);
                eV && (pV.baseColorTexture = eV)
              })))
            } else JV && nV.push(this.exportTextureAsync(JV).then((VV => {
              VV && (pV.baseColorTexture = VV)
            })));
            if (yV._useMetallicFromMetallicTextureBlue && YV) nV.push(this.exportTextureAsync(YV).then((VV => {
              VV && (pV.metallicRoughnessTexture = VV)
            })));
            else if (UV || YV) {
              const VV = YV && YV.getInternalTexture() ? YV.getInternalTexture().uniqueId : 0,
                eV = UV && UV.getInternalTexture() ? UV.getInternalTexture().uniqueId : 0,
                xV = Number(`${VV}${eV}`),
                JV = this._textureMap.get(xV);
              JV ? pV.metallicRoughnessTexture = JV : nV.push(yx("MetalRoughTexture", nx(yV.ambientOcclusionTexture ? px(yV.ambientOcclusionTexture, 0) : Qx(1), UV ? px(UV, 0) : Qx(1), YV ? px(YV, 0) : Qx(1)), yV.dD()).then((async VV => {
                const eV = await this.exportTextureAsync(VV, xV);
                eV && (pV.metallicRoughnessTexture = eV)
              })))
            }
          } else JV && nV.push(this.exportTextureAsync(JV).then((VV => {
            VV && (pV.baseColorTexture = VV)
          }))), YV && nV.push(this.exportTextureAsync(YV).then((VV => {
            VV && (pV.metallicRoughnessTexture = VV)
          })));
        return nV.length > 0 && (this._exporter._materialNeedsUVsSet.add(yV), await Promise.all(nV)), wV
      }
      _getTextureSampler(VV) {
        const eV = {};
        if (!VV || !(VV instanceof FV.b)) return eV;
        const xV = this._getGLTFTextureWrapMode(VV.wrapU);
        10497 !== xV && (eV.wrapS = xV);
        const JV = this._getGLTFTextureWrapMode(VV.wrapV);
        switch (10497 !== JV && (eV.wrapT = JV), VV.samplingMode) {
          case FV.b.LINEAR_LINEAR:
            eV.magFilter = 9729, eV.minFilter = 9729;
            break;
          case FV.b.LINEAR_NEAREST:
            eV.magFilter = 9729, eV.minFilter = 9728;
            break;
          case FV.b.NEAREST_LINEAR:
            eV.magFilter = 9728, eV.minFilter = 9729;
            break;
          case FV.b.NEAREST_LINEAR_MIPLINEAR:
            eV.magFilter = 9728, eV.minFilter = 9987;
            break;
          case FV.b.NEAREST_NEAREST:
            eV.magFilter = 9728, eV.minFilter = 9728;
            break;
          case FV.b.NEAREST_LINEAR_MIPNEAREST:
            eV.magFilter = 9728, eV.minFilter = 9985;
            break;
          case FV.b.LINEAR_NEAREST_MIPNEAREST:
            eV.magFilter = 9729, eV.minFilter = 9984;
            break;
          case FV.b.LINEAR_NEAREST_MIPLINEAR:
            eV.magFilter = 9729, eV.minFilter = 9986;
            break;
          case FV.b.NEAREST_NEAREST_MIPLINEAR:
            eV.magFilter = 9728, eV.minFilter = 9986;
            break;
          case FV.b.LINEAR_LINEAR_MIPLINEAR:
            eV.magFilter = 9729, eV.minFilter = 9987;
            break;
          case FV.b.LINEAR_LINEAR_MIPNEAREST:
            eV.magFilter = 9729, eV.minFilter = 9985;
            break;
          case FV.b.NEAREST_NEAREST_MIPNEAREST:
            eV.magFilter = 9728, eV.minFilter = 9984
        }
        return eV
      }
      _getGLTFTextureWrapMode(VV) {
        switch (VV) {
          case FV.b.WRAP_ADDRESSMODE:
            return 10497;
          case FV.b.CLAMP_ADDRESSMODE:
            return 33071;
          case FV.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return YV.Tools.Error(`Unsupported Texture Wrap Mode ${VV}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(VV, eV, xV) {
        const JV = {
            diffuseColor: VV._albedoColor,
            specularColor: VV._reflectivityColor,
            glossiness: VV._microSurface
          },
          YV = VV._albedoTexture,
          UV = VV._reflectivityTexture,
          yV = VV._useMicroSurfaceFromReflectivityMapAlpha;
        if (UV && !yV) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((YV || UV) && xV) {
          this._exporter._materialNeedsUVsSet.add(VV);
          const xV = this._exportTextureSampler(YV || UV),
            yV = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(YV, UV, JV),
            pV = this._exporter._textures;
          if (yV.baseColorTextureData) {
            const VV = await this._exportImageAsync(`baseColor${pV.length}`, yV.baseColorTextureData);
            eV.baseColorTexture = this._exportTextureInfo(VV, xV, YV?.coordinatesIndex)
          }
          if (yV.metallicRoughnessTextureData) {
            const VV = await this._exportImageAsync(`metallicRoughness${pV.length}`, yV.metallicRoughnessTextureData);
            eV.metallicRoughnessTexture = this._exportTextureInfo(VV, xV, UV?.coordinatesIndex)
          }
          return yV
        }
        return this._convertSpecularGlossinessToMetallicRoughness(JV)
      }
      async exportPBRMaterialAsync(VV, eV) {
        const xV = {},
          JV = {
            name: VV.name
          },
          YV = VV.isMetallicWorkflow();
        if (YV) {
          const eV = VV._albedoColor,
            JV = VV.alpha;
          eV && (xV.baseColorFactor = [eV.r, eV.g, eV.b, JV])
        }
        const UV = YV ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(VV._albedoColor, VV._metallic, VV._roughness, VV._albedoTexture, VV._metallicTexture, VV._metallicTexture, VV, xV, eV) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(VV, xV, eV);
        await this._setMetallicRoughnessPbrMaterialAsync(UV, VV, JV, xV, eV), await this._finishMaterialAsync(JV, VV);
        const yV = this._exporter._materials;
        return yV.push(JV), yV.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(VV, eV, xV, JV, UV) {
        if (Xx(xV, eV), VV.baseColor.equalsWithEpsilon(Fx, jx) && qV.WithinEpsilon(eV.alpha, 1, jx) || (JV.baseColorFactor = [VV.baseColor.r, VV.baseColor.g, VV.baseColor.b, eV.alpha]), null != VV.metallic && 1 !== VV.metallic && (JV.metallicFactor = VV.metallic), null != VV.roughness && 1 !== VV.roughness && (JV.roughnessFactor = VV.roughness), null == eV.backFaceCulling || eV.backFaceCulling || (eV._twoSidedLighting || YV.Tools.Warn(eV.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), xV.doubleSided = !0), UV) {
          const VV = [],
            YV = eV instanceof Te ? eV._bumpTexture : eV.geometryNormalTexture;
          YV && VV.push(this.exportTextureAsync(YV).then((VV => {
            VV && (xV.normalTexture = VV, 1 !== YV.level && (xV.normalTexture.scale = YV.level))
          })));
          const UV = eV instanceof Te ? eV._ambientTexture : eV.ambientOcclusionTexture;
          UV && VV.push(new Promise((async VV => {
            if (eV instanceof de && JV.metallicRoughnessTexture) {
              const eV = this._exportTextureSampler(UV),
                xV = this._exporter._textures[JV.metallicRoughnessTexture.index].source,
                YV = this._exportTextureInfo(xV, eV, UV.coordinatesIndex);
              return this._textureMap.set(UV.uniqueId, YV), this._exporter._extensionsPostExportTextures("exporter", YV, UV), VV(YV)
            }
            return VV(await this.exportTextureAsync(UV))
          })).then((async VV => {
            if (VV) {
              const JV = {
                index: VV.index,
                texCoord: VV.texCoord,
                extensions: VV.extensions
              };
              xV.occlusionTexture = JV, JV.strength = eV instanceof Te ? eV._ambientTextureStrength : eV.ambientOcclusionTexture.level
            }
          })));
          const yV = eV instanceof Te ? eV._emissiveTexture : eV.emissionColorTexture;
          yV && VV.push(this.exportTextureAsync(yV).then((VV => {
            VV && (xV.emissiveTexture = VV)
          }))), VV.length > 0 && (this._exporter._materialNeedsUVsSet.add(eV), await Promise.all(VV))
        }
        const yV = eV instanceof Te ? eV._emissiveColor : eV.emissionColor;
        yV.equalsWithEpsilon(Tx, jx) || (xV.emissiveFactor = yV.WYV()), xV.pbrMetallicRoughness = JV
      }
      async exportOpenPBRMaterialAsync(VV, eV) {
        const xV = {},
          JV = {
            name: VV.name
          },
          YV = VV.baseColor,
          UV = VV.geometryOpacity;
        YV && (xV.baseColorFactor = [YV.r, YV.g, YV.b, UV]);
        const yV = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(VV.baseColor, VV.baseMetalness, VV.specularRoughness, VV.baseColorTexture, VV.baseMetalnessTexture, VV.specularRoughnessTexture, VV, xV, eV);
        await this._setMetallicRoughnessPbrMaterialAsync(yV, VV, JV, xV, eV), await this._finishMaterialAsync(JV, VV);
        const pV = this._exporter._materials;
        return pV.push(JV), pV.length - 1
      }
      async exportTextureAsync(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = this._textureMap.get(eV ?? VV.uniqueId);
        if (xV) return xV;
        const JV = this._exportTextureSampler(VV),
          YV = await this._exportTextureImageAsync(VV);
        return xV = this._exportTextureInfo(YV, JV, VV.coordinatesIndex), this._textureMap.set(eV ?? VV.uniqueId, xV), this._exporter._extensionsPostExportTextures("exporter", xV, VV), xV
      }
      async _exportTextureImageAsync(VV) {
        const eV = VV.mimeType ?? "none",
          xV = this._internalTextureToImage,
          JV = VV.getInternalTexture().uniqueId;
        xV[JV] = xV[JV] || {};
        let UV = xV[JV][eV];
        return void 0 === UV && (UV = (async () => {
          const xV = await Bx(VV);
          if (xV && Px(xV.mimeType) && ("none" === eV || xV.mimeType === eV)) return await this._exportImageAsync(VV.name, new Blob([xV.data], {
            type: xV.mimeType
          }));
          let JV = "image/png";
          "none" !== eV && (Px(eV) ? JV = eV : (JV = "image/png", YV.Tools.Warn(`Unsupported media type: ${eV}. Exporting texture as PNG.`)));
          const UV = VV.getSize(),
            yV = await (0, tV.e)(VV),
            pV = await (0, AV.EncodeImageAsync)(yV, UV.width, UV.height, JV);
          return await this._exportImageAsync(VV.name, pV)
        })(), xV[JV][eV] = UV), await UV
      }
      async _exportImageAsync(VV, eV) {
        const xV = this._exporter._images;
        let JV;
        if (this._exporter._shouldUseGlb) {
          JV = {
            name: VV,
            mimeType: eV.type,
            bufferView: void 0
          };
          const xV = await eV.arrayBuffer(),
            YV = this._exporter._bufferManager.createBufferView(new Uint8Array(xV));
          this._exporter._bufferManager.setBufferView(JV, YV)
        } else {
          const UV = VV.replace(/\.\/|\/|\.\\|\\/g, "_"),
            yV = function(VV) {
              switch (VV) {
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
            }(eV.type);
          let pV = UV + yV;
          xV.some((VV => VV.uri === pV)) && (pV = `${UV}_${YV.Tools.RandomId()}${yV}`), JV = {
            name: VV,
            uri: pV
          }, this._exporter._imageData[pV] = eV
        }
        return xV.push(JV), xV.length - 1
      }
      _exportTextureInfo(VV, eV, xV) {
        const JV = this._exporter._textures;
        let YV = JV.findIndex((xV => xV.sampler == eV && xV.source === VV)); - 1 === YV && (YV = JV.length, JV.push({
          source: VV,
          sampler: eV
        }));
        const UV = {
          index: YV
        };
        return xV && (UV.texCoord = xV), UV
      }
      _exportTextureSampler(VV) {
        const eV = this._getTextureSampler(VV),
          xV = this._exporter._samplers,
          JV = xV.findIndex((VV => VV.minFilter === eV.minFilter && VV.magFilter === eV.magFilter && VV.wrapS === eV.wrapS && VV.wrapT === eV.wrapT));
        return -1 !== JV ? JV : (xV.push(eV), xV.length - 1)
      }
    }
    var Wx = xV(41318),
      Rx = xV(41470);
    (0, Rx.c)();
    var gx = xV(38272);
    const Dx = JV.Matrix.Compose(new JV.Ik(-1, 1, 1), JV.Quaternion.Identity(), JV.Ik.Zero());

    function ix(VV, eV) {
      if (!(VV instanceof ZV.d)) return !1;
      if (eV) {
        if (!VV.getWorldMatrix().equalsWithEpsilon(JV.Matrix.IdentityReadOnly, gx.b)) return !1
      } else {
        if (!VV.getWorldMatrix().multiplyToRef(Dx, JV.TmpVectors.Matrix[0]).equalsWithEpsilon(JV.Matrix.IdentityReadOnly, gx.b)) return !1
      }
      return !(VV instanceof vV.e && VV.geometry)
    }
    const Cx = JV.Ik.ZeroReadOnly,
      ax = JV.Quaternion.Identity(),
      ox = JV.Ik.OneReadOnly,
      cx = new JV.Ik(-1, 1, 1);

    function hx(VV, eV) {
      const {
        byteOffset: xV,
        byteStride: JV,
        type: YV,
        normalized: UV
      } = VV, yV = VV.getSize(), pV = eV.reduce(((VV, eV) => eV.getTotalVertices() > VV ? eV.getTotalVertices() : VV), -Number.MAX_VALUE);
      return {
        byteOffset: xV,
        byteStride: JV,
        componentCount: yV,
        type: YV,
        count: pV * yV,
        normalized: UV,
        totalVertices: pV,
        kind: VV.getKind()
      }
    }

    function lx(VV) {
      switch (VV) {
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

    function Lx(VV) {
      switch (VV) {
        case wV.c.PositionKind:
        case wV.c.NormalKind:
        case wV.c.TangentKind:
        case wV.c.ColorKind:
        case wV.c.MatricesIndicesKind:
        case wV.c.MatricesIndicesExtraKind:
        case wV.c.MatricesWeightsKind:
        case wV.c.MatricesWeightsExtraKind:
        case wV.c.UVKind:
        case wV.c.UV2Kind:
        case wV.c.UV3Kind:
        case wV.c.UV4Kind:
        case wV.c.UV5Kind:
        case wV.c.UV6Kind:
          return !0
      }
      return !1
    }

    function fx(VV) {
      const eV = Math.sqrt(VV.x * VV.x + VV.y * VV.y + VV.z * VV.z);
      eV > 0 && (VV.x /= eV, VV.y /= eV, VV.z /= eV)
    }

    function mx(VV) {
      return VV.x *= -1, VV
    }

    function Kx(VV) {
      if (VV.x * VV.x + VV.y * VV.y > .5) {
        const eV = Math.abs(VV.x),
          xV = Math.abs(VV.y);
        if (eV > xV) {
          const xV = Math.sign(VV.x);
          VV.x = eV, VV.y *= -xV, VV.z *= -xV, VV.w *= xV
        } else {
          const eV = Math.sign(VV.y);
          VV.x *= -eV, VV.y = xV, VV.z *= eV, VV.w *= -eV
        }
      } else {
        const eV = Math.abs(VV.z),
          xV = Math.abs(VV.w);
        if (eV > xV) {
          const xV = Math.sign(VV.z);
          VV.x *= -xV, VV.y *= xV, VV.z = eV, VV.w *= -xV
        } else {
          const eV = Math.sign(VV.w);
          VV.x *= eV, VV.y *= -eV, VV.z *= -eV, VV.w = xV
        }
      }
      return VV
    }

    function Hx(VV) {
      VV.FeV(-VV.z, VV.w, VV.x, -VV.y)
    }

    function ux(VV, eV) {
      const xV = JV.Ik.FromArrayToRef(eV.translation || [0, 0, 0], 0, JV.TmpVectors.Ik[0]),
        YV = JV.Quaternion.FromArrayToRef(eV.rotation || [0, 0, 0, 1], 0, JV.TmpVectors.Quaternion[0]),
        UV = JV.Matrix.ComposeToRef(ox, YV, xV, JV.TmpVectors.Matrix[0]),
        yV = JV.Ik.FromArrayToRef(VV.translation || [0, 0, 0], 0, JV.TmpVectors.Ik[2]),
        pV = JV.Quaternion.FromArrayToRef(VV.rotation || [0, 0, 0, 1], 0, JV.TmpVectors.Quaternion[1]),
        QV = JV.Matrix.ComposeToRef(ox, pV, yV, JV.TmpVectors.Matrix[1]);
      UV.multiplyToRef(QV, QV), QV.decompose(void 0, YV, xV), xV.equalsWithEpsilon(Cx, gx.b) ? delete eV.translation : eV.translation = xV.WYV(), YV.equalsWithEpsilon(ax, gx.b) ? delete eV.rotation : eV.rotation = YV.WYV(), eV.scale && delete eV.scale
    }

    function sx(VV, eV) {
      if (!(eV instanceof ZV.d)) return !1;
      if (!(1 === eV.getChildren().length && 0 === VV.getChildren().length && VV.parent === eV)) return !1;
      const xV = VV.dD(),
        JV = VV instanceof Rx.g && !xV.useRightHandedSystem ? cx : ox;
      return !!eV.WZ.equalsWithEpsilon(JV, gx.b) || (MV.b.Warn(`Cannot collapse node ${VV.name} into parent node ${eV.name} with modified scaling.`), !1)
    }

    function Sx(VV) {
      if (VV instanceof Array) {
        const eV = new Float32Array(VV);
        return new Uint8Array(eV.buffer, eV.byteOffset, eV.byteLength)
      }
      return ArrayBuffer.isView(VV) ? new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength) : new Uint8Array(VV)
    }

    function Ix(VV, eV) {
      for (const [xV, JV] of Object.entries(VV)) {
        const YV = eV[xV];
        (Array.isArray(JV) && Array.isArray(YV) && dx(JV, YV) || JV === YV) && delete VV[xV]
      }
      return VV
    }

    function dx(VV, eV) {
      return VV.length === eV.length && VV.every(((VV, xV) => VV === eV[xV]))
    }
    const Ox = new Map([
      [Int8Array, (VV, eV, xV) => VV.setInt8(eV, xV)],
      [Uint8Array, (VV, eV, xV) => VV.setUint8(eV, xV)],
      [Uint8ClampedArray, (VV, eV, xV) => VV.setUint8(eV, xV)],
      [Int16Array, (VV, eV, xV) => VV.setInt16(eV, xV, !0)],
      [Uint16Array, (VV, eV, xV) => VV.setUint16(eV, xV, !0)],
      [Int32Array, (VV, eV, xV) => VV.setInt32(eV, xV, !0)],
      [Uint32Array, (VV, eV, xV) => VV.setUint32(eV, xV, !0)],
      [Float32Array, (VV, eV, xV) => VV.setFloat32(eV, xV, !0)],
      [Float64Array, (VV, eV, xV) => VV.setFloat64(eV, xV, !0)]
    ]);
    class VJ {
      writeTypedArray(VV) {
        this._checkGrowBuffer(VV.byteLength);
        const eV = Ox.get(VV.constructor);
        for (let xV = 0; xV < VV.length; xV++) eV(this._dataView, this._byteOffset, VV[xV]), this._byteOffset += VV.BYTES_PER_ELEMENT
      }
      constructor(VV) {
        this._data = new Uint8Array(VV), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(VV) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, VV), this._byteOffset++
      }
      writeInt8(VV) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, VV), this._byteOffset++
      }
      writeInt16(VV) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, VV, !0), this._byteOffset += 2
      }
      writeUInt16(VV) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, VV, !0), this._byteOffset += 2
      }
      writeInt32(VV) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, VV, !0), this._byteOffset += 4
      }
      writeUInt32(VV) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, VV, !0), this._byteOffset += 4
      }
      writeFloat32(VV) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, VV, !0), this._byteOffset += 4
      }
      writeFloat64(VV) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, VV, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(VV) {
        const eV = this.byteOffset + VV;
        if (eV > this._data.byteLength) {
          const VV = new Uint8Array(2 * eV);
          VV.set(this._data), this._data = VV, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function eJ(VV) {
      return VV % 4 === 0 ? 4 : VV % 2 === 0 ? 2 : 1
    }
    class xJ {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(VV) {
        let eV = 0;
        this._bufferViewToData.forEach((VV => {
          eV += VV.byteLength
        }));
        const xV = new VJ(eV),
          JV = Array.from(this._bufferViewToData.keys()).sort(((VV, eV) => eJ(eV.byteLength) - eJ(VV.byteLength)));
        for (const YV of JV) {
          YV.byteOffset = xV.byteOffset, VV.push(YV);
          const eV = VV.length - 1,
            JV = this.getPropertiesWithBufferView(YV);
          for (const VV of JV) VV.bufferView = eV;
          xV.writeTypedArray(this._bufferViewToData.get(YV)), this._bufferViewToData.delete(YV)
        }
        return xV.getOutputData()
      }
      createBufferView(VV, eV) {
        const xV = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: VV.byteLength,
          byteStride: eV
        };
        return this._bufferViewToData.set(xV, VV), xV
      }
      createAccessor(VV, eV, xV, JV, YV, UV, yV) {
        this._verifyBufferView(VV);
        const pV = {
          bufferView: void 0,
          componentType: xV,
          count: JV,
          type: eV,
          min: UV?.min,
          max: UV?.max,
          normalized: yV,
          byteOffset: YV
        };
        return this.setBufferView(pV, VV), this._accessorToBufferView.set(pV, VV), pV
      }
      setBufferView(VV, eV) {
        this._verifyBufferView(eV);
        this.getPropertiesWithBufferView(eV).push(VV)
      }
      removeBufferView(VV) {
        const eV = this.getPropertiesWithBufferView(VV);
        for (const xV of eV) void 0 !== xV.bufferView && delete xV.bufferView;
        this._bufferViewToData.delete(VV), this._bufferViewToProperties.delete(VV), this._accessorToBufferView.forEach(((eV, xV) => {
          eV === VV && (void 0 !== xV.byteOffset && delete xV.byteOffset, this._accessorToBufferView.delete(xV))
        }))
      }
      getBufferView(VV) {
        const eV = this._accessorToBufferView.get(VV);
        return this._verifyBufferView(eV), eV
      }
      getPropertiesWithBufferView(VV) {
        return this._verifyBufferView(VV), this._bufferViewToProperties.set(VV, this._bufferViewToProperties.get(VV) ?? []), this._bufferViewToProperties.get(VV)
      }
      getData(VV) {
        return this._verifyBufferView(VV), this._bufferViewToData.get(VV)
      }
      _verifyBufferView(VV) {
        if (void 0 === VV || !this._bufferViewToData.has(VV)) throw new Error(`BufferView ${VV} not found in BufferManager.`)
      }
    }
    var JJ = xV(41478);
    (0, JJ.f)();
    var YJ = xV(41704);
    (0, YJ.f)();
    var UJ = xV(41524),
      yJ = xV(42433);
    (0, yJ.g)();
    let pJ = (() => {
      var VV;
      let eV, xV, JV = [],
        YV = [],
        UV = [],
        yV = [];
      return VV = class {
        get influence() {
          return this._influence
        }
        set influence(VV) {
          if (this._influence === VV) return;
          const eV = this._influence;
          this._influence = VV, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === eV || 0 === VV)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(VV) {
          this._animationPropertiesOverride = VV
        }
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = VV, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Vx.c, this._onDataLayoutChanged = new Vx.c, this.id = (0, NV.l)(this, JV, void 0), this.morphTargetManager = ((0, NV.l)(this, YV), (0, NV.l)(this, UV, null)), this._animationPropertiesOverride = ((0, NV.l)(this, yV), null), this.id = VV, this.morphTargetManager = pV, this._scene = xV || bV.d.LastCreatedScene, this.influence = eV, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        vQV(VV) {
          const eV = this.hasPositions;
          this._positions = VV, eV !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(VV) {
          const eV = this.hasNormals;
          this._normals = VV, eV !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(VV) {
          const eV = this.hasTangents;
          this._tangents = VV, eV !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(VV) {
          const eV = this.hasUVs;
          this._uvs = VV, eV !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(VV) {
          const eV = this.hasUV2s;
          this._uv2s = VV, eV !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(VV) {
          const eV = this.hasColors;
          this._colors = VV, eV !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const eV = Pe.b.Clone((() => new VV(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return eV._positions = this._positions, eV._normals = this._normals, eV._tangents = this._tangents, eV._uvs = this._uvs, eV._uv2s = this._uv2s, eV._colors = this._colors, eV
        }
        serialize() {
          const VV = {};
          return VV.name = this.name, VV.influence = this.influence, null != this.id && (VV.id = this.id), VV.uniqueId = this.uniqueId, VV.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (VV.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (VV.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (VV.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (VV.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (VV.colors = Array.prototype.slice.call(this.getColors())), Pe.b.AppendSerializedAnimations(this, VV), VV
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(eV, xV) {
          let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const YV = new VV(eV.name, eV.influence, xV, JV);
          if (YV.vQV(eV.positions), null != eV.id && (YV.id = eV.id), eV.normals && YV.setNormals(eV.normals), eV.tangents && YV.setTangents(eV.tangents), eV.uvs && YV.setUVs(eV.uvs), eV.uv2s && YV.setUV2s(eV.uv2s), eV.colors && YV.setColors(eV.colors), eV.animations) {
            for (let VV = 0; VV < eV.animations.length; VV++) {
              const xV = eV.animations[VV],
                JV = (0, le.c)("BABYLON.Animation");
              JV && YV.animations.push(JV.Parse(xV))
            }
            eV.autoAnimate && xV && xV.beginAnimation(YV, eV.autoAnimateFrom, eV.autoAnimateTo, eV.autoAnimateLoop, eV.autoAnimateSpeed || 1)
          }
          return YV
        }
        static FromMesh(eV, xV, JV) {
          xV || (xV = eV.name);
          const YV = new VV(xV, JV, eV.dD(), eV.morphTargetManager);
          return YV.vQV(eV.getVerticesData(cV.j.PositionKind)), eV.isVerticesDataPresent(cV.j.NormalKind) && YV.setNormals(eV.getVerticesData(cV.j.NormalKind)), eV.isVerticesDataPresent(cV.j.TangentKind) && YV.setTangents(eV.getVerticesData(cV.j.TangentKind)), eV.isVerticesDataPresent(cV.j.UVKind) && YV.setUVs(eV.getVerticesData(cV.j.UVKind)), eV.isVerticesDataPresent(cV.j.UV2Kind) && YV.setUV2s(eV.getVerticesData(cV.j.UV2Kind)), eV.isVerticesDataPresent(cV.j.ColorKind) && YV.setColors(eV.getVerticesData(cV.j.ColorKind)), YV
        }
      }, (() => {
        const pV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        eV = [(0, XV.J)()], xV = [(0, XV.J)()], (0, NV.i)(null, null, eV, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: VV => "id" in VV,
            get: VV => VV.id,
            set: (VV, eV) => {
              VV.id = eV
            }
          },
          metadata: pV
        }, JV, YV), (0, NV.i)(null, null, xV, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: VV => "morphTargetManager" in VV,
            get: VV => VV.morphTargetManager,
            set: (VV, eV) => {
              VV.morphTargetManager = eV
            }
          },
          metadata: pV
        }, UV, yV), pV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pV
        })
      })(), VV
    })();
    var QJ, nJ = xV(42498),
      wJ = xV(41521);
    ! function(VV) {
      VV[VV.INTANGENT = 0] = "INTANGENT", VV[VV.OUTTANGENT = 1] = "OUTTANGENT"
    }(QJ || (QJ = {}));
    class ZJ {
      static _IsTransformable(VV) {
        return VV && (VV instanceof ZV.d || VV instanceof JJ.c || VV instanceof wJ.d)
      }
      static _CreateNodeAnimation(VV, eV, xV, JV, UV) {
        if (this._IsTransformable(VV)) {
          const yV = [],
            pV = [],
            QV = eV.getKeys(),
            nV = ZJ._CalculateMinMaxKeyFrames(QV),
            wV = ZJ._DeduceInterpolation(QV, xV, JV),
            ZV = wV.interpolationType,
            vV = wV.shouldBakeAnimation;
          if (vV ? ZJ._CreateBakedAnimation(VV, eV, xV, nV.min, nV.max, eV.framePerSecond, UV, yV, pV, nV, JV) : "LINEAR" === ZV || "STEP" === ZV ? ZJ._CreateLinearOrStepAnimation(VV, eV, xV, yV, pV, JV) : "CUBICSPLINE" === ZV ? ZJ._CreateCubicSplineAnimation(VV, eV, xV, yV, pV, JV) : ZJ._CreateBakedAnimation(VV, eV, xV, nV.min, nV.max, eV.framePerSecond, UV, yV, pV, nV, JV), yV.length && pV.length) {
            return {
              inputs: yV,
              outputs: pV,
              samplerInterpolation: ZV,
              inputsMin: vV ? nV.min : YV.Tools.FloatRound(nV.min / eV.framePerSecond),
              inputsMax: vV ? nV.max : YV.Tools.FloatRound(nV.max / eV.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(VV) {
        let eV = null,
          xV = "VEC3",
          JV = !1;
        const UV = VV.targetProperty.split(".");
        switch (UV[0]) {
          case "WZ":
            eV = "scale";
            break;
          case "position":
            eV = "translation";
            break;
          case "rotation":
            xV = "VEC4", eV = "rotation";
            break;
          case "rotationQuaternion":
            xV = "VEC4", JV = !0, eV = "rotation";
            break;
          case "influence":
            xV = "SCALAR", eV = "weights";
            break;
          default:
            YV.Tools.Error(`Unsupported animatable property ${UV[0]}`)
        }
        return eV ? {
          animationChannelTargetPath: eV,
          dataAccessorType: xV,
          useQuaternion: JV
        } : (YV.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        let ZV;
        if (ZJ._IsTransformable(VV) && VV.animations)
          for (const vV of VV.animations) {
            if (wV && !wV(vV)) continue;
            const YV = ZJ._DeduceAnimationInfo(vV);
            YV && (ZV = {
              name: vV.name,
              samplers: [],
              channels: []
            }, ZJ._AddAnimation(`${vV.name}`, vV.hasRunningRuntimeAnimations ? eV : ZV, VV, vV, YV.dataAccessorType, YV.animationChannelTargetPath, JV, UV, yV, pV, YV.useQuaternion, QV, nV), ZV.samplers.length && ZV.channels.length && xV.push(ZV))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        let ZV;
        if (VV instanceof nJ.e) {
          const YV = VV.morphTargetManager;
          if (YV)
            for (let vV = 0; vV < YV.numTargets; ++vV) {
              const rV = YV.getTarget(vV);
              for (const kV of rV.animations) {
                if (wV && !wV(kV)) continue;
                const rV = new yJ.c(`${kV.name}`, "influence", kV.framePerSecond, kV.dataType, kV.AY, kV.enableBlending),
                  bV = [],
                  EV = kV.getKeys();
                for (let VV = 0; VV < EV.length; ++VV) {
                  const eV = EV[VV];
                  for (let VV = 0; VV < YV.numTargets; ++VV) VV == vV ? bV.push(eV) : bV.push({
                    frame: eV.frame,
                    value: 0
                  })
                }
                rV.setKeys(bV, !0);
                const BV = ZJ._DeduceAnimationInfo(rV);
                BV && (ZV = {
                  name: rV.name,
                  samplers: [],
                  channels: []
                }, ZJ._AddAnimation(kV.name, kV.hasRunningRuntimeAnimations ? eV : ZV, VV, rV, BV.dataAccessorType, BV.animationChannelTargetPath, JV, UV, yV, pV, BV.useQuaternion, QV, nV, YV.numTargets), ZV.samplers.length && ZV.channels.length && xV.push(ZV))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        let wV;
        if (VV.animationGroups) {
          const ZV = VV.animationGroups;
          for (const vV of ZV) {
            const ZV = new Map,
              rV = new Map,
              kV = new Set,
              bV = vV.to - vV.from;
            wV = {
              name: vV.name,
              channels: [],
              samplers: []
            };
            for (let eV = 0; eV < vV.targetedAnimations.length; ++eV) {
              const nV = vV.targetedAnimations[eV],
                bV = nV.target,
                EV = nV.animation;
              if (QV && !QV(EV)) continue;
              const BV = pV.has(bV);
              if (this._IsTransformable(bV) || 1 === bV.length && this._IsTransformable(bV[0])) {
                const VV = ZJ._DeduceAnimationInfo(nV.animation);
                if (VV) {
                  const eV = this._IsTransformable(bV) ? bV : this._IsTransformable(bV[0]) ? bV[0] : null;
                  eV && ZJ._AddAnimation(`${EV.name}`, wV, eV, EV, VV.dataAccessorType, VV.animationChannelTargetPath, xV, JV, YV, UV, VV.useQuaternion, yV, BV)
                }
              } else if (bV instanceof pJ || 1 === bV.length && bV[0] instanceof pJ) {
                if (ZJ._DeduceAnimationInfo(nV.animation)) {
                  const eV = bV instanceof pJ ? bV : bV[0];
                  if (eV) {
                    const xV = VV.morphTargetManagers.find((VV => {
                      for (let xV = 0; xV < VV.numTargets; ++xV)
                        if (VV.getTarget(xV) === eV) return !0;
                      return !1
                    }));
                    if (xV) {
                      const JV = VV.meshes.find((VV => VV.morphTargetManager === xV));
                      JV && (ZV.has(JV) || ZV.set(JV, new Map), ZV.get(JV)?.set(eV, EV), kV.add(JV), rV.set(JV, EV))
                    }
                  }
                }
              }
            }
            kV.forEach((VV => {
              const eV = VV.morphTargetManager;
              let pV = null;
              const QV = [],
                nV = rV.get(VV).getKeys(),
                kV = nV.length;
              for (let xV = 0; xV < kV; ++xV)
                for (let JV = 0; JV < eV.numTargets; ++JV) {
                  const YV = eV.getTarget(JV),
                    UV = ZV.get(VV);
                  if (UV) {
                    const eV = UV.get(YV);
                    eV ? (pV || (pV = new yJ.c(`${vV.name}_${VV.name}_MorphWeightAnimation`, "influence", eV.framePerSecond, yJ.c.ANIMATIONTYPE_FLOAT, eV.AY, eV.enableBlending)), QV.push(eV.getKeys()[xV])) : QV.push({
                      frame: vV.from + bV / kV * xV,
                      value: YV.influence,
                      inTangent: nV[0].inTangent ? 0 : void 0,
                      outTangent: nV[0].outTangent ? 0 : void 0
                    })
                  }
                }
              pV.setKeys(QV, !0);
              const EV = ZJ._DeduceAnimationInfo(pV);
              EV && ZJ._AddAnimation(`${vV.name}_${VV.name}_MorphWeightAnimation`, wV, VV, pV, EV.dataAccessorType, EV.animationChannelTargetPath, xV, JV, YV, UV, EV.useQuaternion, yV, !1, eV?.numTargets)
            })), wV.channels.length && wV.samplers.length && (nV?.set(vV, eV.length), eV.push(wV))
          }
        }
      }
      static _AddAnimation(VV, eV, xV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV) {
        const bV = ZJ._CreateNodeAnimation(xV, YV, yV, ZV, vV);
        let EV, BV, jV, qV, tV, FV;
        if (bV) {
          if (kV) {
            let VV, eV = 0;
            const xV = [];
            for (; bV.inputs.length > 0;) VV = bV.inputs.shift(), eV % kV == 0 && xV.push(VV), eV++;
            bV.inputs = xV
          }
          const VV = pV.get(xV),
            YV = new Float32Array(bV.inputs);
          EV = QV.createBufferView(YV), BV = QV.createAccessor(EV, "SCALAR", 5126, bV.inputs.length, void 0, {
            min: [bV.inputsMin],
            max: [bV.inputsMax]
          }), wV.push(BV), jV = wV.length - 1;
          const nV = new JV.Quaternion,
            ZV = new JV.Ik,
            vV = new JV.Ik,
            TV = xV instanceof JJ.c,
            PV = lx(UV),
            AV = new Float32Array(bV.outputs.length * PV);
          bV.outputs.forEach((function(VV, eV) {
            let xV = VV;
            switch (yV) {
              case "translation":
                rV && (JV.Ik.FromArrayToRef(VV, 0, vV), mx(vV), vV.toArray(xV));
                break;
              case "rotation":
                4 === VV.length ? JV.Quaternion.FromArrayToRef(VV, 0, nV) : (xV = new Array(4), JV.Ik.FromArrayToRef(VV, 0, ZV), JV.Quaternion.FromEulerVectorToRef(ZV, nV)), rV && (Kx(nV), TV && Hx(nV)), nV.toArray(xV)
            }
            AV.set(xV, eV * PV)
          })), EV = QV.createBufferView(AV), BV = QV.createAccessor(EV, UV, 5126, bV.outputs.length), wV.push(BV), qV = wV.length - 1, tV = {
            interpolation: bV.samplerInterpolation,
            input: jV,
            output: qV
          }, eV.samplers.push(tV), FV = {
            sampler: eV.samplers.length - 1,
            target: {
              node: VV,
              path: yV
            }
          }, eV.channels.push(FV)
        }
      }
      static _CreateBakedAnimation(VV, eV, xV, UV, yV, pV, QV, nV, wV, ZV, vV) {
        let rV;
        const kV = JV.Quaternion.Identity();
        let bV, EV, BV, jV, qV, tV = null,
          FV = null;
        ZV.min = YV.Tools.FloatRound(UV / pV);
        const TV = eV.getKeys();
        for (let JV = 0, PV = TV.length; JV < PV; ++JV) {
          if (EV = TV[JV], JV + 1 < PV)
            if (BV = TV[JV + 1], EV.value.equals && EV.value.equals(BV.value) || EV.value === BV.value) {
              if (0 !== JV) continue;
              qV = EV.frame
            } else qV = BV.frame;
          else {
            if (jV = TV[JV - 1], EV.value.equals && EV.value.equals(jV.value) || EV.value === jV.value) continue;
            qV = yV
          }
          if (qV)
            for (let JV = EV.frame; JV <= qV; JV += QV) {
              if (bV = YV.Tools.FloatRound(JV / pV), bV === tV) continue;
              tV = bV, FV = bV;
              const UV = {
                key: 0,
                repeatCount: 0,
                AY: eV.AY
              };
              rV = eV._interpolate(JV, UV), ZJ._SetInterpolatedValue(VV, rV, bV, eV, xV, kV, nV, wV, vV)
            }
        }
        FV && (ZV.max = FV)
      }
      static _ConvertFactorToVector3OrQuaternion(VV, eV, xV, UV, yV) {
        const pV = ZJ._GetBasePositionRotationOrScale(eV, UV, yV),
          QV = xV.targetProperty.split("."),
          nV = QV ? QV[1] : "",
          wV = yV ? JV.Quaternion.FromArray(pV).normalize() : JV.Ik.FromArray(pV);
        switch (nV) {
          case "x":
          case "y":
          case "z":
            wV[nV] = VV;
            break;
          case "w":
            wV.w = VV;
            break;
          default:
            YV.Tools.Error(`glTFAnimation: Unsupported component name "${nV}"!`)
        }
        return wV
      }
      static _SetInterpolatedValue(VV, eV, xV, YV, UV, yV, pV, QV, nV) {
        let wV;
        pV.push(xV), "weights" !== UV ? (YV.dataType === yJ.c.ANIMATIONTYPE_FLOAT && (eV = this._ConvertFactorToVector3OrQuaternion(eV, VV, YV, UV, nV)), "rotation" === UV ? (nV ? yV = eV : (wV = eV, JV.Quaternion.RotationYawPitchRollToRef(wV.y, wV.x, wV.z, yV)), QV.push(yV.WYV())) : (wV = eV, QV.push(wV.WYV()))) : QV.push([eV])
      }
      static _CreateLinearOrStepAnimation(VV, eV, xV, JV, YV, UV) {
        for (const yV of eV.getKeys()) JV.push(yV.frame / eV.framePerSecond), ZJ._AddKeyframeValue(yV, eV, YV, xV, VV, UV)
      }
      static _CreateCubicSplineAnimation(VV, eV, xV, JV, YV, UV) {
        eV.getKeys().forEach((function(yV) {
          JV.push(yV.frame / eV.framePerSecond), ZJ._AddSplineTangent(QJ.INTANGENT, YV, xV, "CUBICSPLINE", yV, UV), ZJ._AddKeyframeValue(yV, eV, YV, xV, VV, UV), ZJ._AddSplineTangent(QJ.OUTTANGENT, YV, xV, "CUBICSPLINE", yV, UV)
        }))
      }
      static _GetBasePositionRotationOrScale(VV, eV, xV) {
        let YV;
        if ("rotation" === eV)
          if (xV) {
            YV = (VV.rotationQuaternion ?? JV.Quaternion.Identity()).WYV()
          } else {
            YV = (VV.rotation ?? JV.Ik.Zero()).WYV()
          }
        else if ("translation" === eV) {
          YV = (VV.position ?? JV.Ik.Zero()).WYV()
        } else {
          YV = (VV.WZ ?? JV.Ik.One()).WYV()
        }
        return YV
      }
      static _AddKeyframeValue(VV, eV, xV, UV, yV, pV) {
        let QV;
        const nV = eV.dataType;
        if (nV === yJ.c.ANIMATIONTYPE_VECTOR3) {
          let eV = VV.value.WYV();
          if ("rotation" === UV) {
            const VV = JV.Ik.FromArray(eV);
            eV = JV.Quaternion.RotationYawPitchRoll(VV.y, VV.x, VV.z).WYV()
          }
          xV.push(eV)
        } else if (nV === yJ.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === UV) xV.push([VV.value]);
          else if (QV = this._ConvertFactorToVector3OrQuaternion(VV.value, yV, eV, UV, pV), QV) {
            if ("rotation" === UV) {
              const VV = pV ? QV : JV.Quaternion.RotationYawPitchRoll(QV.y, QV.x, QV.z).normalize();
              xV.push(VV.WYV())
            }
            xV.push(QV.WYV())
          }
        } else nV === yJ.c.ANIMATIONTYPE_QUATERNION ? xV.push(VV.value.normalize().WYV()) : YV.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(VV, eV, xV) {
        let JV, YV, UV = !1;
        if ("rotation" === eV && !xV) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let yV = 0, pV = VV.length; yV < pV; ++yV)
          if (YV = VV[yV], YV.inTangent || YV.outTangent)
            if (JV) {
              if ("CUBICSPLINE" !== JV) {
                JV = "LINEAR", UV = !0;
                break
              }
            } else JV = "CUBICSPLINE";
        else if (JV) {
          if ("CUBICSPLINE" === JV || YV.interpolation && 1 === YV.interpolation && "STEP" !== JV) {
            JV = "LINEAR", UV = !0;
            break
          }
        } else JV = YV.interpolation && 1 === YV.interpolation ? "STEP" : "LINEAR";
        return JV || (JV = "LINEAR"), {
          interpolationType: JV,
          shouldBakeAnimation: UV
        }
      }
      static _AddSplineTangent(VV, eV, xV, YV, UV, yV) {
        let pV;
        const QV = VV === QJ.INTANGENT ? UV.inTangent : UV.outTangent;
        if ("CUBICSPLINE" === YV) {
          if ("rotation" === xV)
            if (QV)
              if (yV) pV = QV.WYV();
              else {
                const VV = QV;
                pV = JV.Quaternion.RotationYawPitchRoll(VV.y, VV.x, VV.z).WYV()
              }
          else pV = [0, 0, 0, 0];
          else pV = "weights" === xV ? QV ? [QV] : [0] : QV ? QV.WYV() : [0, 0, 0];
          eV.push(pV)
        }
      }
      static _CalculateMinMaxKeyFrames(VV) {
        let eV = 1 / 0,
          xV = -1 / 0;
        return VV.forEach((function(VV) {
          eV = Math.min(eV, VV.frame), xV = Math.max(xV, VV.frame)
        })), {
          min: eV,
          max: xV
        }
      }
    }

    function vJ(VV, eV, xV, UV, yV, pV) {
      const QV = {
          attributes: {},
          influence: VV.influence,
          name: VV.name
        },
        nV = eV.geometry;
      if (!nV) return YV.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), QV;
      const ZV = pV ? -1 : 1,
        vV = JV.Ik.Zero();
      let rV, kV;
      if (VV.hasPositions) {
        const UV = VV.getPositions(),
          pV = nV.getVerticesData(wV.c.PositionKind);
        if (pV) {
          const VV = new Float32Array(pV.length),
            eV = [1 / 0, 1 / 0, 1 / 0],
            YV = [-1 / 0, -1 / 0, -1 / 0];
          kV = pV.length / 3, rV = 0;
          for (let xV = rV; xV < kV; ++xV) {
            const yV = JV.Ik.FromArray(pV, 3 * xV);
            JV.Ik.FromArray(UV, 3 * xV).subtractToRef(yV, vV), vV.x *= ZV, eV[0] = Math.min(eV[0], vV.x), YV[0] = Math.max(YV[0], vV.x), eV[1] = Math.min(eV[1], vV.y), YV[1] = Math.max(YV[1], vV.y), eV[2] = Math.min(eV[2], vV.z), YV[2] = Math.max(YV[2], vV.z), VV[3 * xV] = vV.x, VV[3 * xV + 1] = vV.y, VV[3 * xV + 2] = vV.z
          }
          const nV = xV.createBufferView(VV, 12),
            wV = xV.createAccessor(nV, "VEC3", 5126, UV.length / 3, 0, {
              min: eV,
              max: YV
            });
          yV.push(wV), QV.attributes.POSITION = yV.length - 1
        } else YV.Tools.Warn(`Morph target positions for mesh ${eV.name} were not exported. Mesh does not have position vertex data`)
      }
      if (VV.hasNormals) {
        const UV = VV.getNormals(),
          pV = nV.getVerticesData(wV.c.NormalKind);
        if (pV) {
          const VV = new Float32Array(pV.length);
          kV = pV.length / 3, rV = 0;
          for (let xV = rV; xV < kV; ++xV) {
            const eV = JV.Ik.FromArray(pV, 3 * xV).normalize();
            JV.Ik.FromArray(UV, 3 * xV).normalize().subtractToRef(eV, vV), VV[3 * xV] = vV.x * ZV, VV[3 * xV + 1] = vV.y, VV[3 * xV + 2] = vV.z
          }
          const eV = xV.createBufferView(VV, 12),
            YV = xV.createAccessor(eV, "VEC3", 5126, UV.length / 3, 0);
          yV.push(YV), QV.attributes.NORMAL = yV.length - 1
        } else YV.Tools.Warn(`Morph target normals for mesh ${eV.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (VV.hasTangents) {
        const UV = VV.getTangents(),
          pV = nV.getVerticesData(wV.c.TangentKind);
        if (pV) {
          kV = pV.length / 4;
          const VV = new Float32Array(3 * kV);
          rV = 0;
          for (let xV = rV; xV < kV; ++xV) {
            const eV = JV.Ik.FromArray(pV, 4 * xV);
            fx(eV);
            const YV = JV.Ik.FromArray(UV, 3 * xV);
            fx(YV), YV.subtractToRef(eV, vV), VV[3 * xV] = vV.x * ZV, VV[3 * xV + 1] = vV.y, VV[3 * xV + 2] = vV.z
          }
          const eV = xV.createBufferView(VV, 12),
            YV = xV.createAccessor(eV, "VEC3", 5126, kV, 0);
          yV.push(YV), QV.attributes.TANGENT = yV.length - 1
        } else YV.Tools.Warn(`Morph target tangents for mesh ${eV.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (VV.hasColors) {
        const UV = VV.getColors(),
          pV = nV.getVerticesData(wV.c.ColorKind),
          ZV = nV.getVertexBuffer(wV.c.ColorKind);
        if (pV && ZV) {
          const VV = ZV.getSize();
          kV = pV.length / VV;
          const eV = new Float32Array(kV * VV);
          rV = 0;
          for (let xV = rV; xV < kV; ++xV)
            if (3 === VV) {
              const YV = JV.Ik.FromArray(pV, xV * VV);
              JV.Ik.FromArray(UV, xV * VV).subtractToRef(YV, vV), eV[3 * xV] = vV.x, eV[3 * xV + 1] = vV.y, eV[3 * xV + 2] = vV.z
            } else if (4 === VV) {
            const YV = new JV.Vector4,
              yV = JV.Vector4.FromArray(pV, xV * VV);
            JV.Vector4.FromArray(UV, xV * VV).subtractToRef(yV, YV), eV[4 * xV] = YV.x, eV[4 * xV + 1] = YV.y, eV[4 * xV + 2] = YV.z, eV[4 * xV + 3] = YV.w
          } else YV.Tools.Warn(`Unsupported number of components for color attribute: ${VV}`);
          const nV = xV.createBufferView(eV, 4 * VV),
            wV = xV.createAccessor(nV, 3 === VV ? "VEC3" : "VEC4", 5126, kV, 0);
          yV.push(wV), QV.attributes.COLOR_0 = yV.length - 1
        } else YV.Tools.Warn(`Morph target colors for mesh ${eV.name} were not exported. Mesh does not have colors vertex data`)
      }
      return QV
    }
    var rJ = xV(44474);
    class kJ {}
    kJ.DEFAULT_COLOR = KV.d.White(), kJ.DEFAULT_WIDTH_ATTENUATED = 1, kJ.DEFAULT_WIDTH = .1;
    var bJ = xV(42426);
    class EJ {
      constructor(VV) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = VV
      }
      moveTo(VV, eV) {
        this._currentPath = new bJ.j(VV, eV), this._tempPaths.push(this._currentPath)
      }
      lineTo(VV, eV) {
        this._currentPath.addLineTo(VV, eV)
      }
      quadraticCurveTo(VV, eV, xV, JV) {
        this._currentPath.addQuadraticCurveTo(VV, eV, xV, JV, this._resolution)
      }
      bezierCurveTo(VV, eV, xV, JV, YV, UV) {
        this._currentPath.addBezierCurveTo(VV, eV, xV, JV, YV, UV, this._resolution)
      }
      extractHoles() {
        for (const VV of this._tempPaths) VV.area() > 0 ? this._holes.push(VV) : this._paths.push(VV);
        if (!this._paths.length && this._holes.length) {
          const VV = this._holes;
          this._holes = this._paths, this._paths = VV
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

    function BJ(VV, eV, xV, JV, YV, UV) {
      const yV = UV.glyphs[VV] || UV.glyphs["?"];
      if (!yV) return null;
      const pV = new EJ(YV);
      if (yV.o) {
        const VV = yV.o.split(" ");
        for (let YV = 0, UV = VV.length; YV < UV;) {
          switch (VV[YV++]) {
            case "m": {
              const UV = parseInt(VV[YV++]) * eV + xV,
                yV = parseInt(VV[YV++]) * eV + JV;
              pV.moveTo(UV, yV);
              break
            }
            case "l": {
              const UV = parseInt(VV[YV++]) * eV + xV,
                yV = parseInt(VV[YV++]) * eV + JV;
              pV.lineTo(UV, yV);
              break
            }
            case "q": {
              const UV = parseInt(VV[YV++]) * eV + xV,
                yV = parseInt(VV[YV++]) * eV + JV,
                QV = parseInt(VV[YV++]) * eV + xV,
                nV = parseInt(VV[YV++]) * eV + JV;
              pV.quadraticCurveTo(QV, nV, UV, yV);
              break
            }
            case "b": {
              const UV = parseInt(VV[YV++]) * eV + xV,
                yV = parseInt(VV[YV++]) * eV + JV,
                QV = parseInt(VV[YV++]) * eV + xV,
                nV = parseInt(VV[YV++]) * eV + JV,
                wV = parseInt(VV[YV++]) * eV + xV,
                ZV = parseInt(VV[YV++]) * eV + JV;
              pV.bezierCurveTo(QV, nV, wV, ZV, UV, yV);
              break
            }
          }
        }
      }
      return pV.extractHoles(), {
        offsetX: yV.ha * eV,
        shapePath: pV
      }
    }

    function jJ(VV, eV, xV, JV) {
      const YV = Array.from(VV),
        UV = eV / JV.resolution,
        yV = (JV.boundingBox.yMax - JV.boundingBox.yMin + JV.underlineThickness) * UV,
        pV = [];
      let QV = 0,
        nV = 0;
      for (let wV = 0; wV < YV.length; wV++) {
        const VV = YV[wV];
        if ("\n" === VV) QV = 0, nV -= yV;
        else {
          const eV = BJ(VV, UV, QV, nV, xV, JV);
          eV && (QV += eV.offsetX, pV.push(eV.shapePath))
        }
      }
      return pV
    }
    class qJ {
      static ConvertPoints(VV, eV) {
        if (VV.length && Array.isArray(VV) && "number" === typeof VV[0]) return [VV];
        if (VV.length && Array.isArray(VV[0]) && "number" === typeof VV[0][0]) return VV;
        if (VV.length && !Array.isArray(VV[0]) && VV[0] instanceof oV.o) {
          const eV = [];
          for (let xV = 0; xV < VV.length; xV++) {
            const JV = VV[xV];
            eV.push(JV.x, JV.y, JV.z)
          }
          return [eV]
        }
        if (VV.length > 0 && Array.isArray(VV[0]) && VV[0].length > 0 && VV[0][0] instanceof oV.o) {
          const eV = [],
            xV = VV;
          for (const VV of xV) eV.push(VV.flatMap((VV => [VV.x, VV.y, VV.z])));
          return eV
        }
        if (VV instanceof Float32Array) {
          if (eV?.floatArrayStride) {
            const xV = [],
              JV = 3 * eV.floatArrayStride;
            for (let eV = 0; eV < VV.length; eV += JV) {
              const YV = new Array(JV);
              for (let xV = 0; xV < JV; xV++) YV[xV] = VV[eV + xV];
              xV.push(YV)
            }
            return xV
          }
          return [Array.from(VV)]
        }
        if (VV.length && VV[0] instanceof Float32Array) {
          const eV = [];
          for (const xV of VV) eV.push(Array.from(xV));
          return eV
        }
        return []
      }
      static OmitZeroLengthPredicate(VV, eV, xV) {
        const JV = [];
        return eV.subtract(VV).lengthSquared() > 0 && JV.push([VV, eV]), xV.subtract(eV).lengthSquared() > 0 && JV.push([eV, xV]), VV.subtract(xV).lengthSquared() > 0 && JV.push([xV, VV]), 0 === JV.length ? null : JV
      }
      static OmitDuplicatesPredicate(VV, eV, xV, JV) {
        const YV = [];
        return qJ._SearchInPoints(VV, eV, JV) || YV.push([VV, eV]), qJ._SearchInPoints(eV, xV, JV) || YV.push([eV, xV]), qJ._SearchInPoints(xV, VV, JV) || YV.push([xV, VV]), 0 === YV.length ? null : YV
      }
      static _SearchInPoints(VV, eV, xV) {
        for (const JV of xV)
          for (let xV = 0; xV < JV.length; xV++)
            if (JV[xV]?.equals(VV) && (JV[xV + 1]?.equals(eV) || JV[xV - 1]?.equals(eV))) return !0;
        return !1
      }
      static MeshesToLines(VV, eV) {
        const xV = [];
        for (let JV = 0; JV < VV.length; JV++) {
          const YV = VV[JV],
            UV = YV.getVerticesData(cV.j.PositionKind),
            yV = YV.RYV();
          if (UV && yV)
            for (let VV = 0, pV = 0; VV < yV.length; VV++) {
              const QV = 3 * yV[pV++],
                nV = 3 * yV[pV++],
                wV = 3 * yV[pV++],
                ZV = new oV.o(UV[QV], UV[QV + 1], UV[QV + 2]),
                vV = new oV.o(UV[nV], UV[nV + 1], UV[nV + 2]),
                rV = new oV.o(UV[wV], UV[wV + 1], UV[wV + 2]);
              if (eV) {
                const pV = eV(ZV, vV, rV, xV, VV, QV, YV, JV, UV, yV);
                if (pV)
                  for (const VV of pV) xV.push(VV)
              } else xV.push([ZV, vV], [vV, rV], [rV, ZV])
            }
        }
        return xV
      }
      static ToVector3Array(VV) {
        if (Array.isArray(VV[0])) {
          const eV = [],
            xV = VV;
          for (const VV of xV) {
            const xV = [];
            for (let eV = 0; eV < VV.length; eV += 3) xV.push(new oV.o(VV[eV], VV[eV + 1], VV[eV + 2]));
            eV.push(xV)
          }
          return eV
        }
        const eV = VV,
          xV = [];
        for (let JV = 0; JV < eV.length; JV += 3) xV.push(new oV.o(eV[JV], eV[JV + 1], eV[JV + 2]));
        return xV
      }
      static ToNumberArray(VV) {
        return VV.flatMap((VV => [VV.x, VV.y, VV.z]))
      }
      static GetPointsCountInfo(VV) {
        const eV = new Array(VV.length);
        let xV = 0;
        for (let JV = VV.length; JV--;) eV[JV] = VV[JV].length / 3, xV += eV[JV];
        return {
          total: xV,
          counts: eV
        }
      }
      static GetLineLength(VV) {
        if (0 === VV.length) return 0;
        let eV;
        eV = "number" === typeof VV[0] ? qJ.ToVector3Array(VV) : VV;
        const xV = oV.l.Ik[0];
        let JV = 0;
        for (let YV = 0; YV < eV.length - 1; YV++) {
          const VV = eV[YV];
          JV += eV[YV + 1].subtractToRef(VV, xV).length()
        }
        return JV
      }
      static GetLineLengthArray(VV, eV) {
        const xV = eV ? new Float32Array(eV, 0, VV.length / 3) : new Float32Array(VV.length / 3);
        let JV = 0;
        for (let YV = 0, UV = VV.length / 3 - 1; YV < UV; YV++) {
          let eV = VV[3 * YV + 0],
            UV = VV[3 * YV + 1],
            yV = VV[3 * YV + 2];
          eV -= VV[3 * YV + 3], UV -= VV[3 * YV + 4], yV -= VV[3 * YV + 5];
          JV += Math.sqrt(eV * eV + UV * UV + yV * yV), xV[YV + 1] = JV
        }
        return xV
      }
      static SegmentizeSegmentByCount(VV, eV, xV) {
        const JV = [],
          YV = eV.subtract(VV),
          UV = oV.l.Ik[0];
        UV.HVV(xV);
        const yV = oV.l.Ik[1];
        YV.divideToRef(UV, yV);
        let pV = VV.clone();
        JV.push(pV);
        for (let QV = 0; QV < xV; QV++) pV = pV.clone(), JV.push(pV.addInPlace(yV));
        return JV
      }
      static SegmentizeLineBySegmentLength(VV, eV) {
        const xV = VV[0] instanceof oV.o ? qJ.GetLineSegments(VV) : "number" === typeof VV[0] ? qJ.GetLineSegments(qJ.ToVector3Array(VV)) : VV,
          JV = [];
        for (const YV of xV)
          if (YV.length > eV) {
            const VV = qJ.SegmentizeSegmentByCount(YV.point1, YV.point2, Math.ceil(YV.length / eV));
            for (const eV of VV) JV.push(eV)
          } else JV.push(YV.point1), JV.push(YV.point2);
        return JV
      }
      static SegmentizeLineBySegmentCount(VV, eV) {
        const xV = "number" === typeof VV[0] ? qJ.ToVector3Array(VV) : VV,
          JV = qJ.GetLineLength(xV) / eV;
        return qJ.SegmentizeLineBySegmentLength(xV, JV)
      }
      static GetLineSegments(VV) {
        const eV = [];
        for (let xV = 0; xV < VV.length - 1; xV++) {
          const JV = VV[xV],
            YV = VV[xV + 1],
            UV = YV.subtract(JV).length();
          eV.push({
            point1: JV,
            point2: YV,
            length: UV
          })
        }
        return eV
      }
      static GetMinMaxSegmentLength(VV) {
        const eV = qJ.GetLineSegments(VV).sort((VV => VV.length));
        return {
          min: eV[0].length,
          max: eV[eV.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const YV = eV * xV;
        let UV = 0,
          yV = 0;
        const pV = VV.length;
        for (let nV = 0; nV < pV; nV++) {
          if (YV <= UV + VV[nV].length) {
            yV = nV;
            break
          }
          UV += VV[nV].length
        }
        const QV = (YV - UV) / VV[yV].length;
        return VV[yV].point2.subtractToRef(VV[yV].point1, oV.l.Ik[0]), oV.l.Ik[0].scaleToRef(QV, oV.l.Ik[1]), JV || oV.l.Ik[1].addInPlace(VV[yV].point1), oV.l.Ik[1].clone()
      }
      static GetCircleLinePoints(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / eV;
        const UV = [];
        for (let yV = 0; yV <= eV; yV++) UV.push(new oV.o(Math.cos(yV * YV) * VV, Math.sin(yV * YV) * JV, xV));
        return UV
      }
      static GetBezierLinePoints(VV, eV, xV, JV) {
        return bJ.f.CreateQuadraticBezier(VV, eV, xV, JV).getPoints().flatMap((VV => [VV.x, VV.y, VV.z]))
      }
      static GetArrowCap(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [VV.clone(), VV.add(eV.multiplyByFloats(xV, xV, xV))],
          widths: [JV, YV, UV, yV]
        }
      }
      static GetPointsFromText(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const yV = [],
          pV = jJ(VV, eV, xV, JV);
        for (const QV of pV) {
          for (const VV of QV.paths) {
            const eV = [],
              xV = VV.getPoints();
            for (const VV of xV) eV.push(VV.x, VV.y, YV);
            yV.push(eV)
          }
          if (UV)
            for (const VV of QV.holes) {
              const eV = [],
                xV = VV.getPoints();
              for (const VV of xV) eV.push(VV.x, VV.y, YV);
              yV.push(eV)
            }
        }
        return yV
      }
      static Color3toRGBAUint8(VV) {
        const eV = new Uint8Array(4 * VV.length);
        for (let xV = 0, JV = 0; xV < VV.length; xV++) eV[JV++] = 255 * VV[xV].r, eV[JV++] = 255 * VV[xV].g, eV[JV++] = 255 * VV[xV].b, eV[JV++] = 255;
        return eV
      }
      static CreateColorsTexture(VV, eV, xV, JV) {
        const YV = JV.sk().getCaps().maxTextureSize ?? 1,
          UV = eV.length > YV ? YV : eV.length,
          yV = Math.ceil(eV.length / YV);
        yV > 1 && (eV = [...eV, ...Array(UV * yV - eV.length).fill(eV[0])]);
        const pV = qJ.Color3toRGBAUint8(eV),
          QV = new TV.e(pV, UV, yV, wx.e.TEXTUREFORMAT_RGBA, JV, !1, !0, xV);
        return QV.name = VV, QV
      }
      static PrepareEmptyColorsTexture(VV) {
        if (!kJ.EmptyColorsTexture) {
          const eV = new Uint8Array(4);
          kJ.EmptyColorsTexture = new TV.e(eV, 1, 1, wx.e.TEXTUREFORMAT_RGBA, VV, !1, !1, TV.e.NEAREST_NEAREST), kJ.EmptyColorsTexture.name = "grlEmptyColorsTexture", kJ.EmptyColorsTexture.eC.addOnce((() => {
            kJ.EmptyColorsTexture = null
          }))
        }
        return kJ.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        kJ.EmptyColorsTexture?.dispose(), kJ.EmptyColorsTexture = null
      }
      static BooleanToNumber(VV) {
        return VV ? 1 : 0
      }
    }
    class tJ extends hV.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class FJ extends lV.d {
      isCompatible(VV) {
        return !0
      }
      constructor(VV, eV, xV) {
        xV = xV || {
          color: kJ.DEFAULT_COLOR
        };
        const JV = new tJ;
        JV.GREASED_LINE_HAS_COLOR = !!xV.color && !xV.useColors, JV.GREASED_LINE_SIZE_ATTENUATION = xV.sizeAttenuation ?? !1, JV.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === xV.colorDistributionType, JV.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (eV ?? VV.dD()).useRightHandedSystem, JV.GREASED_LINE_CAMERA_FACING = xV.cameraFacing ?? !0, super(VV, FJ.GREASED_LINE_MATERIAL_NAME, 200, JV, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = xV?.forceGLSL || FJ.ForceGLSL, this._scene = eV ?? VV.dD(), this._engine = this._scene.sk(), this._cameraFacing = xV.cameraFacing ?? !0, this.visibility = xV.visibility ?? 1, this.useDash = xV.useDash ?? !1, this.dashRatio = xV.dashRatio ?? .5, this.dashOffset = xV.dashOffset ?? 0, this.width = xV.width ? xV.width : xV.sizeAttenuation ? kJ.DEFAULT_WIDTH_ATTENUATED : kJ.DEFAULT_WIDTH, this._sizeAttenuation = xV.sizeAttenuation ?? !1, this.colorMode = xV.colorMode ?? 0, this._color = xV.color ?? null, this.useColors = xV.useColors ?? !1, this._colorsDistributionType = xV.colorDistributionType ?? 0, this.colorsSampling = xV.colorsSampling ?? TV.e.NEAREST_NEAREST, this._colors = xV.colors ?? null, this.dashCount = xV.dashCount ?? 1, this.resolution = xV.resolution ?? new oV.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), xV.colorsTexture ? this.colorsTexture = xV.colorsTexture : this._colors ? this.colorsTexture = qJ.CreateColorsTexture(`${VV.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? kJ.DEFAULT_COLOR, qJ.PrepareEmptyColorsTexture(this._scene)), this._engine.eC.add((() => {
          qJ.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(VV) {
        VV.push("grl_offsets"), VV.push("grl_widths"), VV.push("grl_colorPointers"), VV.push("grl_counters"), this._cameraFacing ? (VV.push("grl_previousAndSide"), VV.push("grl_nextAndCounters")) : VV.push("grl_slopes")
      }
      getSamplers(VV) {
        VV.push("grl_colors")
      }
      getActiveTextures(VV) {
        this.colorsTexture && VV.push(this.colorsTexture)
      }
      getUniforms() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const eV = [{
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
        return this._cameraFacing && eV.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === VV && eV.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: eV,
          vertex: this._cameraFacing && this._isGLSL(VV) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(VV) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(VV) {
        if (this._cameraFacing) {
          VV.peV("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || VV.peV("viewProjection", this._scene.getTransformMatrix());
          const eV = oV.l.Vector4[0];
          eV.x = this._aspect, eV.y = this._resolution.x, eV.z = this._resolution.y, eV.w = this.width, VV.updateVector4("grl_aspect_resolution_lineWidth", eV)
        }
        const eV = oV.l.Vector4[0];
        eV.x = qJ.BooleanToNumber(this.useDash), eV.y = this._dashArray, eV.z = this.dashOffset, eV.w = this.dashRatio, VV.updateVector4("grl_dashOptions", eV);
        const xV = oV.l.Vector4[1];
        xV.x = this.colorMode, xV.y = this.visibility, xV.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, xV.w = qJ.BooleanToNumber(this.useColors), VV.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", xV), this._color && VV.updateColor3("grl_singleColor", this._color);
        const JV = this.colorsTexture ?? kJ.EmptyColorsTexture;
        VV.setTexture("grl_colors", JV), VV.updateFloat2("grl_textureSize", JV?.getSize().width ?? 1, JV?.getSize().height ?? 1)
      }
      prepareDefines(VV, eV, xV) {
        VV.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, VV.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, VV.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, VV.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = eV.useRightHandedSystem, VV.GREASED_LINE_CAMERA_FACING = this._cameraFacing, VV.GREASED_LINE_USE_OFFSETS = !!xV.offsets
      }
      getClassName() {
        return FJ.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(eV) ? function(VV, eV) {
          if ("vertex" === VV) {
            const VV = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return eV && (VV["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), VV
          }
          return "fragment" === VV ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(VV, this._cameraFacing) : function(VV, eV) {
          if ("vertex" === VV) {
            const VV = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return eV && (VV["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), VV
          }
          return "fragment" === VV ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(VV, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(VV) {
        this.setColors(VV)
      }
      setColors(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this._colors?.length ?? 0;
        if (this._colors = VV, null !== VV && 0 !== VV.length) {
          if (!eV || xV)
            if (this.colorsTexture && JV === VV.length && !xV) {
              const eV = qJ.Color3toRGBAUint8(VV);
              this.colorsTexture.update(eV)
            } else this.colorsTexture?.dispose(), this.colorsTexture = qJ.CreateColorsTexture(`${this._material.name}-colors-texture`, VV, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(VV) {
        this._dashCount = VV, this._dashArray = 1 / VV
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(VV) {
        this._sizeAttenuation = VV, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(VV) {
        this.setColor(VV)
      }
      setColor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== VV || null !== this._color && null === VV ? (this._color = VV, eV || this.markAllDefinesAsDirty()) : this._color = VV
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(VV) {
        this._colorsDistributionType = VV, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(VV) {
        this._aspect = VV.x / VV.y, this._resolution = VV
      }
      serialize() {
        const VV = super.serialize(),
          eV = {
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
        return this._colors && (eV.colors = this._colors), this._color && (eV.color = this._color), VV.greasedLineMaterialOptions = eV, VV
      }
      parse(VV, eV, xV) {
        super.parse(VV, eV, xV);
        const JV = VV.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), JV.color && this.setColor(JV.color, !0), JV.colorDistributionType && (this.colorsDistributionType = JV.colorDistributionType), JV.colors && (this.colors = JV.colors), JV.colorsSampling && (this.colorsSampling = JV.colorsSampling), JV.colorMode && (this.colorMode = JV.colorMode), JV.useColors && (this.useColors = JV.useColors), JV.visibility && (this.visibility = JV.visibility), JV.useDash && (this.useDash = JV.useDash), JV.dashCount && (this.dashCount = JV.dashCount), JV.dashRatio && (this.dashRatio = JV.dashRatio), JV.dashOffset && (this.dashOffset = JV.dashOffset), JV.width && (this.width = JV.width), JV.sizeAttenuation && (this.sizeAttenuation = JV.sizeAttenuation), JV.resolution && (this.resolution = JV.resolution), this.colors ? this.colorsTexture = qJ.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, eV) : qJ.PrepareEmptyColorsTexture(eV), this.markAllDefinesAsDirty()
      }
      copyTo(VV) {
        const eV = VV;
        eV.colorsTexture?.dispose(), this._colors && (eV.colorsTexture = qJ.CreateColorsTexture(`${eV._material.name}-colors-texture`, this._colors, eV.colorsSampling, this._scene)), eV.setColor(this.color, !0), eV.colorsDistributionType = this.colorsDistributionType, eV.colorsSampling = this.colorsSampling, eV.colorMode = this.colorMode, eV.useColors = this.useColors, eV.visibility = this.visibility, eV.useDash = this.useDash, eV.dashCount = this.dashCount, eV.dashRatio = this.dashRatio, eV.dashOffset = this.dashOffset, eV.width = this.width, eV.sizeAttenuation = this.sizeAttenuation, eV.resolution = this.resolution, eV.markAllDefinesAsDirty()
      }
      _isGLSL(VV) {
        return 0 === VV || this._forceGLSL
      }
    }
    FJ.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", FJ.ForceGLSL = !1;
    var TJ = xV(41664),
      PJ = xV(41674),
      AJ = xV(39867),
      NJ = xV(41729),
      XJ = xV(41086);
    class MJ extends NJ.n {
      constructor(VV, eV, JV) {
        const YV = eV.sk(),
          UV = YV.isWebGPU && !(JV.forceGLSL || MJ.ForceGLSL),
          yV = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        eV.useRightHandedSystem && yV.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const pV = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        JV.cameraFacing ? (yV.push("GREASED_LINE_CAMERA_FACING"), pV.push("grl_previousAndSide", "grl_nextAndCounters")) : (pV.push("grl_slopes"), pV.push("grl_counters"));
        const QV = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (UV || QV.push("world", "viewProjection", "view", "projection"), super(VV, eV, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: UV ? ["Scene", "Mesh"] : void 0,
            attributes: pV,
            uniforms: QV,
            samplers: UV ? [] : ["grlColors"],
            defines: yV,
            extraInitializationsAsync: async () => {
              UV ? await Promise.all([xV.e(643).then((() => xV(64878))), xV.e(699).then((() => xV(64883)))]) : await Promise.all([xV.e(636).then((() => xV(64887))), xV.e(700).then((() => xV(64895)))])
            },
            shaderLanguage: UV ? 1 : 0
          }), this._color = KV.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, JV = JV || {
            color: kJ.DEFAULT_COLOR
          }, this.visibility = JV.visibility ?? 1, this.useDash = JV.useDash ?? !1, this.dashRatio = JV.dashRatio ?? .5, this.dashOffset = JV.dashOffset ?? 0, this.dashCount = JV.dashCount ?? 1, this.width = JV.width ? JV.width : JV.sizeAttenuation && JV.cameraFacing ? kJ.DEFAULT_WIDTH_ATTENUATED : kJ.DEFAULT_WIDTH, this.sizeAttenuation = JV.sizeAttenuation ?? !1, this.color = JV.color ?? KV.d.White(), this.useColors = JV.useColors ?? !1, this.colorsDistributionType = JV.colorDistributionType ?? 0, this.colorsSampling = JV.colorsSampling ?? TV.e.NEAREST_NEAREST, this.colorMode = JV.colorMode ?? 0, this._colors = JV.colors ?? null, this._cameraFacing = JV.cameraFacing ?? !0, this.resolution = JV.resolution ?? new oV.n(YV.getRenderWidth(), YV.getRenderHeight()), JV.colorsTexture ? this.colorsTexture = JV.colorsTexture : this._colors ? this.colorsTexture = qJ.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, eV) : (this._color = this._color ?? kJ.DEFAULT_COLOR, this.colorsTexture = qJ.PrepareEmptyColorsTexture(eV)), UV) {
          const VV = new XJ.c;
          VV.setParameters(), VV.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", VV)
        }
        YV.eC.add((() => {
          qJ.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== kJ.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new oV.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(VV) {
        this.setColors(VV)
      }
      setColors(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = this._colors?.length ?? 0;
        if (this._colors = VV, null !== VV && 0 !== VV.length) {
          if (!eV || xV)
            if (this._colorsTexture && JV === VV.length && !xV) {
              const eV = qJ.Color3toRGBAUint8(VV);
              this._colorsTexture.update(eV)
            } else this._colorsTexture && this._colorsTexture !== kJ.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = qJ.CreateColorsTexture(`${this.name}-colors-texture`, VV, this.colorsSampling, this.dD())
        } else {
          this._colorsTexture && this._colorsTexture !== kJ.EmptyColorsTexture && this._colorsTexture.dispose();
          const VV = this.dD();
          VV && (this.colorsTexture = qJ.PrepareEmptyColorsTexture(VV))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(VV) {
        this._colorsTexture = VV, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(VV) {
        this._width = VV, this.setFloat("grlWidth", VV)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(VV) {
        this._useColors = VV, this.setFloat("grlUseColors", qJ.BooleanToNumber(VV))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(VV) {
        this._colorsSampling = VV
      }
      get visibility() {
        return this._visibility
      }
      set visibility(VV) {
        this._visibility = VV, this.setFloat("grlVisibility", VV)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(VV) {
        this._useDash = VV, this.setFloat("grlUseDash", qJ.BooleanToNumber(VV))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(VV) {
        this._dashOffset = VV, this.setFloat("grlDashOffset", VV)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(VV) {
        this._dashRatio = VV, this.setFloat("grlDashRatio", VV)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(VV) {
        this._dashCount = VV, this._dashArray = 1 / VV, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(VV) {
        this._sizeAttenuation = VV, this.setFloat("grlSizeAttenuation", qJ.BooleanToNumber(VV))
      }
      get color() {
        return this._color
      }
      set color(VV) {
        this.setColor(VV)
      }
      setColor(VV) {
        VV = VV ?? kJ.DEFAULT_COLOR, this._color = VV, this.setColor3("grlColor", VV)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(VV) {
        this._colorsDistributionType = VV, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(VV) {
        this._colorMode = VV, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(VV) {
        this._resolution = VV, this.setVector2("grlResolution", VV), this.setFloat("grlAspect", VV.x / VV.y)
      }
      serialize() {
        const VV = super.serialize(),
          eV = {
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
        return this._colors && (eV.colors = this._colors), VV.greasedLineMaterialOptions = eV, VV
      }
      parse(VV, eV, xV) {
        const JV = VV.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), JV.color && (this.color = JV.color), JV.colorDistributionType && (this.colorsDistributionType = JV.colorDistributionType), JV.colorsSampling && (this.colorsSampling = JV.colorsSampling), JV.colorMode && (this.colorMode = JV.colorMode), JV.useColors && (this.useColors = JV.useColors), JV.visibility && (this.visibility = JV.visibility), JV.useDash && (this.useDash = JV.useDash), JV.dashCount && (this.dashCount = JV.dashCount), JV.dashRatio && (this.dashRatio = JV.dashRatio), JV.dashOffset && (this.dashOffset = JV.dashOffset), JV.width && (this.width = JV.width), JV.sizeAttenuation && (this.sizeAttenuation = JV.sizeAttenuation), JV.resolution && (this.resolution = JV.resolution), JV.colors ? this.colorsTexture = qJ.CreateColorsTexture(`${this.name}-colors-texture`, JV.colors, this.colorsSampling, this.dD()) : this.colorsTexture = qJ.PrepareEmptyColorsTexture(eV), this._cameraFacing = JV.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var zJ, GJ, WJ;
    MJ.ForceGLSL = !1,
      function(VV) {
        VV[VV.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", VV[VV.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(zJ || (zJ = {})),
      function(VV) {
        VV[VV.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", VV[VV.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", VV[VV.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(GJ || (GJ = {})),
      function(VV) {
        VV[VV.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", VV[VV.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", VV[VV.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", VV[VV.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", VV[VV.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(WJ || (WJ = {}));
    class RJ extends TJ.b {
      constructor(VV, eV, xV) {
        super(VV, eV, null, null, !1, !1), this.name = VV, this._options = xV, this._lazy = !1, this._updatable = !1, this._engine = eV.sk(), this._lazy = xV.lazy ?? !1, this._updatable = xV.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = xV.colorPointers ?? [], this._widths = xV.widths ?? new Array(xV.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(VV) {
        let eV = 0;
        for (const JV of this._points) eV += JV.length;
        const xV = eV / 3 * 2 - this._widths.length;
        for (let JV = 0; JV < xV; JV++) this._widths.push(VV)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Vb && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(VV, eV) {
        for (const xV of VV) this._points.push(xV);
        this._lazy || this.setPoints(this._points, eV)
      }
      dispose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(VV, eV)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(VV) {
        this._uvs = VV instanceof Float32Array ? VV : new Float32Array(VV), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(VV) {
        this.material instanceof MJ && this.material.setDefine("GREASED_LINE_USE_OFFSETS", VV?.length > 0), this._offsets = VV, this._offsetsBuffer ? this._offsetsBuffer.update(VV) : this._createOffsetsBuffer(VV)
      }
      get widths() {
        return this._widths
      }
      set widths(VV) {
        this._widths = VV, this._lazy || this._widthsBuffer && this._widthsBuffer.update(VV)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(VV) {
        this._colorPointers = VV, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(VV)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof MJ) return this.material;
        const VV = this.material?.pluginManager?.getPlugin(FJ.GREASED_LINE_MATERIAL_NAME);
        return VV || void 0
      }
      get points() {
        const VV = [];
        return AJ.d.DeepCopy(this._points, VV), VV
      }
      setPoints(VV, eV) {
        this._points = qJ.ConvertPoints(VV, eV?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), eV?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, eV)
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
      serialize(VV) {
        super.serialize(VV), VV.type = this.getClassName(), VV.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new PJ.c;
        return eV.positions = this._vertexPositions, eV.indices = this._indices, eV.uvs = this._uvs, VV && (eV.normals = [], PJ.c.ComputeNormals(this._vertexPositions, this._indices, eV.normals)), eV.applyToMesh(this, this._options.updatable), eV
      }
      _createOffsetsBuffer(VV) {
        const eV = this._scene.sk(),
          xV = new cV.d(eV, VV, this._updatable, 3);
        this.setVerticesBuffer(xV.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = xV
      }
    }
    class gJ {
      constructor(VV, eV) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = VV, this.wasAddedByNoopNode = eV
      }
      getIndicesAccessor(VV, eV, xV, JV, YV) {
        return this._indicesAccessorMap.get(VV)?.get(eV)?.get(xV)?.get(JV)?.get(YV)
      }
      setIndicesAccessor(VV, eV, xV, JV, YV, UV) {
        let yV = this._indicesAccessorMap.get(VV);
        yV || (yV = new Map, this._indicesAccessorMap.set(VV, yV));
        let pV = yV.get(eV);
        pV || (pV = new Map, yV.set(eV, pV));
        let QV = pV.get(xV);
        QV || (QV = new Map, pV.set(xV, QV));
        let nV = QV.get(JV);
        nV || (nV = new Map, QV.set(JV, nV)), nV.set(YV, UV)
      }
      pushExportedNode(VV) {
        this._exportedNodes.has(VV) || this._exportedNodes.add(VV)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(VV) {
        return this._vertexBufferViewMap.get(VV)
      }
      setVertexBufferView(VV, eV) {
        this._vertexBufferViewMap.set(VV, eV)
      }
      setRemappedBufferView(VV, eV, xV) {
        this._remappedBufferView.set(VV, new Map), this._remappedBufferView.get(VV).set(eV, xV)
      }
      getRemappedBufferView(VV, eV) {
        return this._remappedBufferView.get(VV)?.get(eV)
      }
      getVertexAccessor(VV, eV, xV) {
        return this._vertexAccessorMap.get(VV)?.get(eV)?.get(xV)
      }
      setVertexAccessor(VV, eV, xV, JV) {
        let YV = this._vertexAccessorMap.get(VV);
        YV || (YV = new Map, this._vertexAccessorMap.set(VV, YV));
        let UV = YV.get(eV);
        UV || (UV = new Map, YV.set(eV, UV)), UV.set(xV, JV)
      }
      hasVertexColorAlpha(VV) {
        return this._vertexMapColorAlpha.get(VV) || !1
      }
      setHasVertexColorAlpha(VV, eV) {
        return this._vertexMapColorAlpha.set(VV, eV)
      }
      getMesh(VV) {
        return this._meshMap.get(VV)
      }
      setMesh(VV, eV) {
        this._meshMap.set(VV, eV)
      }
      bindMorphDataToMesh(VV, eV) {
        const xV = this._meshMorphTargetMap.get(VV) || [];
        this._meshMorphTargetMap.set(VV, xV), -1 === xV.indexOf(eV) && xV.push(eV)
      }
      getMorphTargetsFromMesh(VV) {
        return this._meshMorphTargetMap.get(VV)
      }
    }
    class DJ {
      _ApplyExtension(VV, eV, xV, JV) {
        if (xV >= eV.length) return Promise.resolve(VV);
        const YV = JV(eV[xV], VV);
        return YV ? YV.then((async VV => VV ? await this._ApplyExtension(VV, eV, xV + 1, JV) : null)) : this._ApplyExtension(VV, eV, xV + 1, JV)
      }
      _ApplyExtensions(VV, eV) {
        const xV = [];
        for (const JV of DJ._ExtensionNames) xV.push(this._extensions[JV]);
        return this._ApplyExtension(VV, xV, 0, eV)
      }
      _extensionsPostExportNodeAsync(VV, eV, xV, JV, YV) {
        return this._ApplyExtensions(eV, ((eV, UV) => eV.postExportNodeAsync && eV.postExportNodeAsync(VV, UV, xV, JV, YV, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(VV, eV, xV) {
        return this._ApplyExtensions(eV, ((eV, JV) => eV.postExportMaterialAsync && eV.postExportMaterialAsync(VV, JV, xV)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        return await Promise.all(DJ._ExtensionNames.map((async YV => {
          const UV = this._extensions[YV];
          if (UV.postExportMaterialAdditionalTexturesAsync) {
            const YV = await UV.postExportMaterialAdditionalTexturesAsync(VV, eV, xV);
            JV.push(...YV)
          }
        }))), JV
      }
      _extensionsPostExportTextures(VV, eV, xV) {
        for (const JV of DJ._ExtensionNames) {
          const YV = this._extensions[JV];
          YV.postExportTexture && YV.postExportTexture(VV, eV, xV)
        }
      }
      _extensionsPostExportMeshPrimitive(VV) {
        for (const eV of DJ._ExtensionNames) {
          const xV = this._extensions[eV];
          xV.postExportMeshPrimitive && xV.postExportMeshPrimitive(VV, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const VV of DJ._ExtensionNames) {
          const eV = this._extensions[VV];
          eV.preGenerateBinaryAsync && await eV.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(VV) {
        for (const eV of DJ._ExtensionNames) {
          const xV = this._extensions[eV];
          xV.enabled && VV(xV)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((VV => {
          var eV, xV, JV;
          VV.wasUsed && ((eV = this._glTF).extensionsUsed || (eV.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(VV.name) && this._glTF.extensionsUsed.push(VV.name), VV.required && ((xV = this._glTF).extensionsRequired || (xV.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(VV.name) && this._glTF.extensionsRequired.push(VV.name)), (JV = this._glTF).extensions || (JV.extensions = {}), VV.onExporting && VV.onExporting())
        }))
      }
      _loadExtensions() {
        for (const VV of DJ._ExtensionNames) {
          const eV = DJ._ExtensionFactories[VV](this);
          this._extensions[VV] = eV
        }
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bV.d.LastCreatedScene,
          eV = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${kV.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Gx(this), this._extensions = {}, this._bufferManager = new xJ, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !VV) throw new Error("No scene available to export");
        this._babylonScene = VV, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: VV => VV?.ZD?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...eV
        }, this._loadExtensions()
      }
      dispose() {
        for (const VV in this._extensions) {
          this._extensions[VV].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        DJ.UnregisterExtension(VV) && YV.Tools.Warn(`Extension with the name ${VV} already exists`), DJ._ExtensionFactories[VV] = eV;
        const JV = xV ?? 0;
        DJ._ExtensionOrders[VV] = JV;
        let UV = DJ._ExtensionNames.length;
        for (let YV = 0; YV < DJ._ExtensionNames.length; YV++) {
          const VV = DJ._ExtensionNames[YV];
          if (JV < DJ._ExtensionOrders[VV]) {
            UV = YV;
            break
          }
        }
        DJ._ExtensionNames.splice(UV, 0, VV)
      }
      static UnregisterExtension(VV) {
        if (!DJ._ExtensionFactories[VV]) return !1;
        delete DJ._ExtensionFactories[VV], delete DJ._ExtensionOrders[VV];
        const eV = DJ._ExtensionNames.indexOf(VV);
        return -1 !== eV && DJ._ExtensionNames.splice(eV, 1), !0
      }
      _generateJSON(VV, eV, xV) {
        const JV = {
          byteLength: VV
        };
        return JV.byteLength && (this._glTF.buffers = [JV]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.yE = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (JV.uri = eV + ".bin"), xV ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(VV) {
        const eV = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const xV = this._generateJSON(eV.byteLength, VV, !0),
          JV = new Blob([eV], {
            type: "application/octet-stream"
          }),
          YV = VV + ".gltf",
          UV = VV + ".bin",
          yV = new nV;
        if (yV.files[YV] = xV, yV.files[UV] = JV, this._imageData)
          for (const pV in this._imageData) yV.files[pV] = this._imageData[pV];
        return yV
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(VV) {
        const eV = VV % 4;
        return 0 === eV ? eV : 4 - eV
      }
      async generateGLBAsync(VV) {
        this._shouldUseGlb = !0;
        const eV = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const xV = this._generateJSON(eV.byteLength),
          JV = VV + ".glb";
        let YV, UV = xV.length;
        if ("undefined" !== typeof TextEncoder) {
          YV = (new TextEncoder).encode(xV), UV = YV.length
        }
        const yV = this._getPadding(UV),
          pV = this._getPadding(eV.byteLength),
          QV = 28 + UV + yV + eV.byteLength + pV,
          wV = new VJ(QV);
        if (wV.writeUInt32(1179937895), wV.writeUInt32(2), wV.writeUInt32(QV), wV.writeUInt32(UV + yV), wV.writeUInt32(1313821514), YV) wV.writeTypedArray(YV);
        else {
          const VV = "_".charCodeAt(0);
          for (let eV = 0; eV < UV; ++eV) {
            const JV = xV.charCodeAt(eV);
            JV != xV.codePointAt(eV) ? wV.writeUInt8(VV) : wV.writeUInt8(JV)
          }
        }
        for (let nV = 0; nV < yV; ++nV) wV.writeUInt8(32);
        wV.writeUInt32(eV.byteLength + pV), wV.writeUInt32(5130562), wV.writeTypedArray(eV);
        for (let nV = 0; nV < pV; ++nV) wV.writeUInt8(0);
        const ZV = new nV;
        return ZV.files[JV] = new Blob([wV.getOutputData()], {
          type: "application/octet-stream"
        }), ZV
      }
      _setNodeTransformation(VV, eV, xV) {
        if (eV.getPivotPoint().equalsWithEpsilon(Cx, gx.b) || YV.Tools.Warn("Pivot points are not supported in the glTF serializer"), !eV.position.equalsWithEpsilon(Cx, gx.b)) {
          const YV = JV.TmpVectors.Ik[0].iG(eV.position);
          xV && mx(YV), VV.translation = YV.WYV()
        }
        eV.WZ.equalsWithEpsilon(ox, gx.b) || (VV.scale = eV.WZ.WYV());
        const UV = eV.rotationQuaternion?.clone() || JV.Quaternion.FromEulerAngles(eV.rotation.x, eV.rotation.y, eV.rotation.z);
        UV.equalsWithEpsilon(ax, gx.b) || (xV && Kx(UV), VV.rotation = UV.normalize().WYV())
      }
      _setCameraTransformation(VV, eV, xV) {
        const YV = JV.TmpVectors.Ik[0],
          UV = JV.TmpVectors.Quaternion[0],
          yV = eV.getWorldMatrix();
        if (eV.parent) {
          const VV = eV.parent.getWorldMatrix().invertToRef(JV.TmpVectors.Matrix[0]);
          yV.multiplyToRef(VV, JV.TmpVectors.Matrix[1]).decompose(void 0, UV, YV)
        } else yV.decompose(void 0, UV, YV);
        YV.equalsWithEpsilon(Cx, gx.b) || (xV && mx(YV), VV.translation = YV.WYV()), xV && Kx(UV), this._babylonScene.useRightHandedSystem || Hx(UV), UV.equalsWithEpsilon(ax, gx.b) || (VV.rotation = UV.WYV())
      }
      _listAvailableCameras() {
        for (const VV of this._babylonScene.cameras) {
          const eV = {
            type: VV.mode === JJ.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (VV.name && (eV.name = VV.name), "perspective" === eV.type) eV.perspective = {
            aspectRatio: VV.sk().getAspectRatio(VV),
            yfov: VV.fovMode === JJ.c.FOVMODE_VERTICAL_FIXED ? VV.fov : VV.fov * VV.sk().getAspectRatio(VV),
            znear: VV.minZ,
            zfar: VV.maxZ
          };
          else if ("orthographic" === eV.type) {
            const xV = VV.orthoLeft && VV.orthoRight ? .5 * (VV.orthoRight - VV.orthoLeft) : .5 * VV.sk().getRenderWidth(),
              JV = VV.orthoBottom && VV.orthoTop ? .5 * (VV.orthoTop - VV.orthoBottom) : .5 * VV.sk().getRenderHeight();
            eV.orthographic = {
              xmag: xV,
              ymag: JV,
              znear: VV.minZ,
              zfar: VV.maxZ
            }
          }
          this._camerasMap.set(VV, eV)
        }
      }
      _exportAndAssignCameras() {
        const VV = Array.from(this._camerasMap.values());
        for (const eV of VV) {
          const VV = this._nodesCameraMap.get(eV);
          if (void 0 !== VV) {
            this._cameras.push(eV);
            for (const eV of VV) eV.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const VV of this._babylonScene.skeletons) {
          if (VV.bones.length <= 0) continue;
          const eV = {
            joints: []
          };
          this._skinMap.set(VV, eV)
        }
      }
      _exportAndAssignSkeletons(VV) {
        for (const xV of this._babylonScene.skeletons) {
          if (xV.bones.length <= 0) continue;
          const UV = this._skinMap.get(xV);
          if (void 0 == UV) continue;
          const yV = {};
          let pV = -1;
          for (let VV = 0; VV < xV.bones.length; ++VV) {
            const eV = xV.bones[VV],
              JV = eV.getIndex() ?? VV; - 1 !== JV && (yV[JV] = eV, JV > pV && (pV = JV))
          }
          const QV = [];
          for (let xV = 0; xV <= pV; ++xV) {
            const pV = yV[xV],
              nV = pV.getTransformNode(),
              wV = nV ? this._nodeMap.get(nV) : void 0;
            if (void 0 === wV) {
              YV.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            UV.joints.push(wV);
            const ZV = pV.getAbsoluteInverseBindMatrix().clone();
            VV.has(nV) && (eV = ZV, Dx.invertToRef(JV.TmpVectors.Matrix[0]).multiplyToRef(eV, eV).multiplyToRef(Dx, eV)), QV.push(ZV)
          }
          const nV = this._nodesSkinMap.get(UV);
          if (UV.joints.length > 0 && void 0 !== nV) {
            const VV = new Float32Array(16 * QV.length);
            QV.forEach(((eV, xV) => {
              VV.set(eV.m, 16 * xV)
            }));
            const eV = this._bufferManager.createBufferView(VV);
            this._accessors.push(this._bufferManager.createAccessor(eV, "MAT4", 5126, QV.length)), UV.inverseBindMatrices = this._accessors.length - 1, this._skins.push(UV);
            const xV = this._skins.length - 1;
            for (const JV of nV) JV.skin = xV
          }
        }
        var eV
      }
      async _exportSceneAsync() {
        const VV = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const eV = this._options.metadataSelector(this._babylonScene.metadata);
          eV && (VV.extras = eV)
        }
        const eV = new Array,
          xV = new Array,
          JV = new Array,
          YV = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let UV;
        if (YV && !this._options.includeCoordinateSystemConversionNodes)
          for (const nV of this._babylonScene.animationGroups)
            for (const VV of nV.targetedAnimations) {
              const eV = VV.target;
              eV instanceof ZV.d && !eV.parent && (UV ?? (UV = new Set)).add(eV)
            }
        for (const nV of this._babylonScene.rootNodes) {
          const VV = nV.animations,
            yV = !!VV && VV.length > 0 || UV?.has(nV);
          YV && !this._options.includeCoordinateSystemConversionNodes && ix(nV, this._babylonScene.useRightHandedSystem) && !yV ? JV.push(...nV.getChildren()) : this._babylonScene.useRightHandedSystem ? eV.push(nV) : xV.push(nV)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const yV = new gJ(!0, !1);
        VV.nodes.push(...await this._exportNodesAsync(xV, yV));
        const pV = new gJ(!1, !1);
        VV.nodes.push(...await this._exportNodesAsync(eV, pV));
        const QV = new gJ(!1, !0);
        VV.nodes.push(...await this._exportNodesAsync(JV, QV)), VV.nodes.length && this._scenes.push(VV), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(yV.getNodesSet()), this._babylonScene.animationGroups.length && ZJ._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, yV.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(VV) {
        return this._nodeMap.get(VV)
      }
      _getAnimationIndex(VV) {
        return this._animationGroupMap.get(VV)
      }
      _getCameraIndex(VV) {
        const eV = this._camerasMap.get(VV);
        if (!eV) return;
        const xV = this._cameras.indexOf(eV);
        return xV >= 0 ? xV : void 0
      }
      _getMaterialIndex(VV) {
        return this._materialMap.get(VV)
      }
      _getRootIndex(VV, eV) {
        switch (VV) {
          case "nodes":
            return this._getNodeIndex(eV);
          case "animations":
            return this._getAnimationIndex(eV);
          case "cameras":
            return this._getCameraIndex(eV);
          case "materials":
            return this._getMaterialIndex(eV);
          case "meshes": {
            const VV = this._getNodeIndex(eV);
            return void 0 === VV ? void 0 : this._nodes[VV]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(eV)?.index;
          case "images": {
            const VV = this._materialExporter.getTextureInfo(eV)?.index;
            if (void 0 === VV) return;
            const xV = this._textures[VV];
            for (const eV of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const VV = xV?.extensions?.[eV]?.source;
              if ("number" === typeof VV) return VV
            }
            return xV?.source
          }
          case "samplers": {
            const VV = this._materialExporter.getTextureInfo(eV)?.index;
            return void 0 === VV ? void 0 : this._textures[VV]?.sampler
          }
          case "skins": {
            const VV = this._skinMap.get(eV),
              xV = VV ? this._skins.indexOf(VV) : -1;
            return xV >= 0 ? xV : void 0
          }
          case "scenes":
            return eV === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(VV, eV, xV) {
        const JV = this._nodes[VV];
        if (!JV) throw new Error(`Cannot write ${eV}: glTF node ${VV} does not exist.`);
        JV.extensions || (JV.extensions = {}), JV.extensions[eV] = xV
      }
      _shouldExportNode(VV) {
        let eV = this._shouldExportNodeMap.get(VV);
        return void 0 === eV && (eV = this._options.shouldExportNode(VV), this._shouldExportNodeMap.set(VV, eV)), eV
      }
      async _exportNodesAsync(VV, eV) {
        const xV = new Array;
        this._exportBuffers(VV, eV);
        for (const JV of VV) await this._exportNodeAsync(JV, xV, eV);
        return xV
      }
      _collectBuffers(VV, eV, xV, JV, YV) {
        if (this._shouldExportNode(VV) && VV instanceof vV.e && VV.geometry) {
          const UV = VV.geometry.getVertexBuffers();
          if (UV)
            for (const JV in UV) {
              if (!Lx(JV)) continue;
              const yV = UV[JV];
              YV.setHasVertexColorAlpha(yV, VV.hasVertexAlpha);
              const pV = yV._buffer,
                QV = eV.get(pV) || [];
              eV.set(pV, QV), -1 === QV.indexOf(yV) && QV.push(yV);
              const nV = xV.get(yV) || [];
              xV.set(yV, nV), -1 === nV.indexOf(VV) && nV.push(VV)
            }
          const yV = VV.morphTargetManager;
          if (yV)
            for (let eV = 0; eV < yV.numTargets; eV++) {
              const xV = yV.getTarget(eV),
                YV = JV.get(xV) || [];
              JV.set(xV, YV), -1 === YV.indexOf(VV) && YV.push(VV)
            }
        }
        for (const UV of VV.getChildren()) this._collectBuffers(UV, eV, xV, JV, YV)
      }
      _exportBuffers(VV, eV) {
        const xV = new Map,
          JV = new Map,
          YV = new Map;
        for (const pV of VV) this._collectBuffers(pV, xV, JV, YV, eV);
        const UV = Array.from(xV.keys());
        for (const pV of UV) {
          const VV = pV.getData();
          if (!VV) throw new Error("Buffer data is not available");
          const YV = xV.get(pV);
          if (!YV) continue;
          const UV = YV[0].byteStride;
          if (YV.some((VV => VV.byteStride !== UV))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const yV = Sx(VV).slice();
          for (const eV of YV) {
            const VV = JV.get(eV),
              {
                byteOffset: xV,
                byteStride: YV,
                componentCount: UV,
                type: pV,
                count: QV,
                normalized: nV,
                kind: ZV
              } = hx(eV, VV);
            switch (ZV) {
              case wV.c.NormalKind:
              case wV.c.TangentKind:
                (0, Wx.h)(yV, xV, YV, UV, pV, QV, nV, (VV => {
                  const eV = Math.sqrt(VV[0] * VV[0] + VV[1] * VV[1] + VV[2] * VV[2]);
                  if (eV > 0) {
                    const xV = 1 / eV;
                    VV[0] *= xV, VV[1] *= xV, VV[2] *= xV
                  }
                }));
                break;
              case wV.c.ColorKind: {
                const eV = VV.filter((VV => VV.material instanceof UJ.StandardMaterial || null == VV.material)).length;
                if (0 == eV) break;
                if (eV != VV.length) {
                  MV.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                pV == wV.c.UNSIGNED_BYTE && MV.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const JV = new EV.Color3,
                  ZV = new EV.c,
                  vV = this._babylonScene.sk().useExactSrgbConversions;
                (0, Wx.h)(yV, xV, YV, UV, pV, QV, nV, (VV => {
                  3 === VV.length ? (JV.wZ(VV, 0), JV.toLinearSpaceToRef(JV, vV), JV.toArray(VV, 0)) : (ZV.wZ(VV, 0), ZV.toLinearSpaceToRef(ZV, vV), ZV.toArray(VV, 0))
                }))
              }
            }
          }
          if (eV.convertToRightHanded) {
            for (const VV of YV) {
              const eV = JV.get(VV),
                {
                  byteOffset: xV,
                  byteStride: YV,
                  componentCount: UV,
                  type: pV,
                  count: QV,
                  normalized: nV,
                  kind: ZV
                } = hx(VV, eV);
              switch (ZV) {
                case wV.c.PositionKind:
                case wV.c.NormalKind:
                case wV.c.TangentKind:
                  (0, Wx.h)(yV, xV, YV, UV, pV, QV, nV, (VV => {
                    VV[0] = -VV[0]
                  }))
              }
            }
            eV.convertedToRightHandedBuffers.set(pV, yV)
          }
          const QV = this._bufferManager.createBufferView(yV, UV);
          eV.setVertexBufferView(pV, QV);
          const nV = new Map;
          for (const eV of YV) {
            const VV = JV.get(eV),
              {
                kind: xV,
                totalVertices: YV
              } = hx(eV, VV);
            switch (xV) {
              case wV.c.MatricesIndicesKind:
              case wV.c.MatricesIndicesExtraKind:
                if (eV.type == wV.c.FLOAT) {
                  const VV = eV.getFloatData(YV);
                  null !== VV && nV.set(eV, VV)
                }
            }
          }
          0 !== nV.size && MV.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const ZV = Array.from(nV.keys());
          for (const xV of ZV) {
            const VV = nV.get(xV);
            if (!VV) continue;
            const JV = VV.some((VV => VV >= 256)),
              YV = new(JV ? Uint16Array : Uint8Array)(VV.length);
            for (let eV = 0; eV < VV.length; eV++) YV[eV] = VV[eV];
            const UV = this._bufferManager.createBufferView(YV, 4 * (JV ? 2 : 1));
            eV.setRemappedBufferView(pV, xV, UV)
          }
        }
        const yV = Array.from(YV.keys());
        for (const pV of yV) {
          const VV = YV.get(pV);
          if (!VV) continue;
          const xV = vJ(pV, VV[0], this._bufferManager, this._bufferViews, this._accessors, eV.convertToRightHanded);
          for (const JV of VV) eV.bindMorphDataToMesh(JV, xV)
        }
      }
      async _exportNodeAsync(VV, eV, xV) {
        let JV = this._nodeMap.get(VV);
        if (void 0 !== JV) return void(eV.includes(JV) || eV.push(JV));
        const YV = await this._createNodeAsync(VV, xV);
        if (YV) {
          JV = this._nodes.length, this._nodes.push(YV), this._nodeMap.set(VV, JV), xV.pushExportedNode(VV), eV.push(JV);
          const UV = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            yV = [];
          this._babylonScene.animationGroups.length || (ZJ._CreateMorphTargetAnimationFromMorphTargetAnimations(VV, UV, yV, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, xV.convertToRightHanded, this._options.shouldExportAnimation), VV.animations.length && ZJ._CreateNodeAnimationFromNodeAnimations(VV, UV, yV, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, xV.convertToRightHanded, this._options.shouldExportAnimation)), UV.channels.length && UV.samplers.length && this._animations.push(UV), yV.forEach((VV => {
            VV.channels.length && VV.samplers.length && this._animations.push(VV)
          }))
        }
        const UV = YV ? [] : eV;
        for (const yV of VV.getChildren()) await this._exportNodeAsync(yV, UV, xV);
        YV && UV.length && (YV.children = UV)
      }
      async _createNodeAsync(VV, eV) {
        if (!this._shouldExportNode(VV)) return null;
        const xV = {};
        if (VV.name && (xV.name = VV.name), VV.metadata) {
          const eV = this._options.metadataSelector(VV.metadata);
          eV && (xV.extras = eV)
        }
        if (VV instanceof ZV.d && (this._setNodeTransformation(xV, VV, eV.convertToRightHanded), VV instanceof vV.e)) {
          const JV = VV instanceof rV.e ? VV.XUV : VV;
          if (JV.hT && JV.hT.length > 0 && (xV.mesh = await this._exportMeshAsync(JV, eV)), VV.skeleton) {
            const eV = this._skinMap.get(VV.skeleton);
            void 0 !== eV && (void 0 === this._nodesSkinMap.get(eV) && this._nodesSkinMap.set(eV, []), this._nodesSkinMap.get(eV)?.push(xV))
          }
        }
        if (VV instanceof Rx.g) {
          const JV = this._camerasMap.get(VV);
          if (JV) {
            void 0 === this._nodesCameraMap.get(JV) && this._nodesCameraMap.set(JV, []), this._setCameraTransformation(xV, VV, eV.convertToRightHanded);
            const YV = VV.parent;
            if (null !== YV && sx(VV, YV)) {
              const VV = this._nodeMap.get(YV);
              if (void 0 !== VV) {
                const eV = this._nodes[VV];
                return ux(xV, eV), this._nodesCameraMap.get(JV)?.push(eV), null
              }
            }
            this._nodesCameraMap.get(JV)?.push(xV)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", xV, VV, this._nodeMap, eV.convertToRightHanded) ? xV : (MV.b.Warn(`Not exporting node ${VV.name}`), null)
      }
      _exportIndices(VV, eV, xV, JV, YV, yV, pV, QV, nV) {
        let wV = null;
        nV.mode = function(VV) {
          switch (VV) {
            case UV.e.TriangleFillMode:
              return 4;
            case UV.e.TriangleStripDrawMode:
              return 5;
            case UV.e.TriangleFanDrawMode:
              return 6;
            case UV.e.PointListDrawMode:
            case UV.e.PointFillMode:
              return 0;
            case UV.e.LineLoopDrawMode:
              return 2;
            case UV.e.LineListDrawMode:
              return 1;
            case UV.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${VV}`)
        }(yV);
        const ZV = pV !== UV.e.CounterClockWiseSideOrientation && function(VV) {
          switch (VV) {
            case UV.e.TriangleFillMode:
            case UV.e.TriangleStripDrawMode:
            case UV.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(yV);
        if (ZV) {
          if (yV === UV.e.TriangleStripDrawMode || yV === UV.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const pV = eV ? new Uint32Array(JV) : new Uint16Array(JV);
          if (VV)
            for (let eV = 0; eV + 2 < JV; eV += 3) pV[eV] = VV[xV + eV] + YV, pV[eV + 1] = VV[xV + eV + 2] + YV, pV[eV + 2] = VV[xV + eV + 1] + YV;
          else
            for (let VV = 0; VV + 2 < JV; VV += 3) pV[VV] = VV, pV[VV + 1] = VV + 2, pV[VV + 2] = VV + 1;
          wV = pV
        } else if (VV && 0 !== YV) {
          const UV = eV ? new Uint32Array(JV) : new Uint16Array(JV);
          for (let eV = 0; eV < JV; eV++) UV[eV] = VV[xV + eV] + YV;
          wV = UV
        } else VV && (wV = function(VV, eV, xV, JV) {
          let YV = VV;
          return 0 === eV && xV === VV.length || (YV = Array.isArray(VV) ? VV.slice(eV, eV + xV) : VV.subarray(eV, eV + xV)), YV instanceof Int32Array ? new Uint32Array(YV.buffer, YV.byteOffset, YV.length) : Array.isArray(YV) ? JV ? new Uint32Array(YV) : new Uint16Array(YV) : YV
        }(VV, xV, JV, eV));
        if (wV) {
          let UV = QV.getIndicesAccessor(VV, xV, JV, YV, ZV);
          if (void 0 === UV) {
            const yV = this._bufferManager.createBufferView(wV),
              pV = eV ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(yV, "SCALAR", pV, JV, 0)), UV = this._accessors.length - 1, QV.setIndicesAccessor(VV, xV, JV, YV, ZV, UV)
          }
          nV.indices = UV
        }
      }
      _exportVertexBuffer(VV, eV, xV, JV, YV, UV) {
        const yV = VV.getKind();
        if (!Lx(yV)) return;
        if (yV.startsWith("uv") && !this._options.exportUnusedUVs && (!eV || !this._materialNeedsUVsSet.has(eV))) return;
        let pV = YV.getVertexAccessor(VV, xV, JV);
        if (void 0 === pV) {
          const eV = YV.convertedToRightHandedBuffers.get(VV._buffer) || VV._buffer.getData(),
            UV = yV === wV.c.PositionKind ? function(VV, eV, xV, JV) {
              const {
                byteOffset: YV,
                byteStride: UV,
                type: yV,
                normalized: pV
              } = eV, QV = eV.getSize(), nV = new Array(QV).fill(1 / 0), wV = new Array(QV).fill(-1 / 0);
              return (0, Wx.h)(VV, YV + xV * UV, UV, QV, yV, JV * QV, pV, (VV => {
                for (let eV = 0; eV < QV; eV++) nV[eV] = Math.min(nV[eV], VV[eV]), wV[eV] = Math.max(wV[eV], VV[eV])
              })), {
                min: nV,
                max: wV
              }
            }(eV, VV, xV, JV) : void 0,
            QV = (yV === wV.c.MatricesIndicesKind || yV === wV.c.MatricesIndicesExtraKind) && VV.type === wV.c.FLOAT,
            nV = QV ? wV.c.UNSIGNED_BYTE : VV.type,
            ZV = QV ? void 0 : VV.normalized,
            vV = QV ? YV.getRemappedBufferView(VV._buffer, VV) : YV.getVertexBufferView(VV._buffer),
            rV = VV.byteOffset + xV * VV.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(vV, function(VV, eV) {
            if (VV == wV.c.ColorKind) return eV ? "VEC4" : "VEC3";
            switch (VV) {
              case wV.c.PositionKind:
              case wV.c.NormalKind:
                return "VEC3";
              case wV.c.TangentKind:
              case wV.c.MatricesIndicesKind:
              case wV.c.MatricesIndicesExtraKind:
              case wV.c.MatricesWeightsKind:
              case wV.c.MatricesWeightsExtraKind:
                return "VEC4";
              case wV.c.UVKind:
              case wV.c.UV2Kind:
              case wV.c.UV3Kind:
              case wV.c.UV4Kind:
              case wV.c.UV5Kind:
              case wV.c.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${VV}`)
          }(yV, YV.hasVertexColorAlpha(VV)), nV, JV, rV, UV, ZV)), pV = this._accessors.length - 1, YV.setVertexAccessor(VV, xV, JV, pV)
        }
        UV.attributes[function(VV) {
          switch (VV) {
            case wV.c.PositionKind:
              return "POSITION";
            case wV.c.NormalKind:
              return "NORMAL";
            case wV.c.TangentKind:
              return "TANGENT";
            case wV.c.ColorKind:
              return "COLOR_0";
            case wV.c.UVKind:
              return "TEXCOORD_0";
            case wV.c.UV2Kind:
              return "TEXCOORD_1";
            case wV.c.UV3Kind:
              return "TEXCOORD_2";
            case wV.c.UV4Kind:
              return "TEXCOORD_3";
            case wV.c.UV5Kind:
              return "TEXCOORD_4";
            case wV.c.UV6Kind:
              return "TEXCOORD_5";
            case wV.c.MatricesIndicesKind:
              return "JOINTS_0";
            case wV.c.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case wV.c.MatricesWeightsKind:
              return "WEIGHTS_0";
            case wV.c.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${VV}`)
        }(yV)] = pV
      }
      async _exportMaterialAsync(VV, eV, xV, JV) {
        let YV = this._materialMap.get(VV);
        if (void 0 === YV) {
          const JV = eV && Object.keys(eV).some((VV => VV.startsWith("uv")));
          if ((VV = VV instanceof YJ.b ? VV.BeV[xV.materialIndex] : VV) instanceof Te) YV = await this._materialExporter.exportPBRMaterialAsync(VV, JV);
          else if (VV instanceof UJ.StandardMaterial) YV = await this._materialExporter.exportStandardMaterialAsync(VV, JV);
          else {
            if (!(VV instanceof de)) return void MV.b.Warn(`Unsupported material '${VV.name}' with type ${VV.getClassName()}`);
            YV = await this._materialExporter.exportOpenPBRMaterialAsync(VV, JV)
          }
          this._materialMap.set(VV, YV)
        }
        JV.material = YV
      }
      async _exportMeshAsync(VV, eV) {
        let xV = eV.getMesh(VV);
        if (void 0 !== xV) return xV;
        const JV = {
          primitives: []
        };
        xV = this._meshes.length, this._meshes.push(JV), eV.setMesh(VV, xV);
        const YV = VV.isUnIndexed ? null : VV.RYV(),
          yV = VV.geometry?.getVertexBuffers(),
          pV = eV.getMorphTargetsFromMesh(VV),
          QV = VV instanceof rJ.d,
          nV = VV instanceof RJ,
          wV = VV.hT;
        if (yV && wV && wV.length > 0)
          for (const ZV of wV) {
            const xV = {
                attributes: {}
              },
              wV = ZV.eb() || this._babylonScene.defaultMaterial;
            if (nV) {
              const eV = {
                  name: wV.name
                },
                JV = VV,
                YV = EV.Color3.White(),
                UV = JV.material?.alpha ?? 1,
                yV = JV.greasedLineMaterial?.color ?? YV;
              (!yV.equalsWithEpsilon(YV, gx.b) || UV < 1) && (eV.pbrMetallicRoughness = {
                baseColorFactor: [...yV.WYV(), UV]
              }), this._materials.push(eV), xV.material = this._materials.length - 1
            } else if (QV) {
              const eV = {
                  name: wV.name
                },
                JV = VV;
              (!JV.color.equalsWithEpsilon(EV.Color3.White(), gx.b) || JV.alpha < 1) && (eV.pbrMetallicRoughness = {
                baseColorFactor: [...JV.color.WYV(), JV.alpha]
              }), this._materials.push(eV), xV.material = this._materials.length - 1
            } else await this._exportMaterialAsync(wV, yV, ZV, xV);
            const vV = QV || nV ? UV.e.LineListDrawMode : VV.overrideRenderingFillMode ?? wV.fillMode;
            let rV = wV._getEffectiveOrientation(VV);
            eV.wasAddedByNoopNode && !VV.dD().useRightHandedSystem && (rV = rV === UV.e.ClockWiseSideOrientation ? UV.e.CounterClockWiseSideOrientation : UV.e.ClockWiseSideOrientation), this._exportIndices(YV, YV ? (0, Wx.d)(YV, ZV.indexCount, ZV.indexStart, ZV.verticesStart) : ZV.verticesCount > 65535, YV ? ZV.indexStart : ZV.verticesStart, YV ? ZV.indexCount : ZV.verticesCount, -ZV.verticesStart, vV, rV, eV, xV);
            for (const VV of Object.values(yV)) this._exportVertexBuffer(VV, wV, ZV.verticesStart, ZV.verticesCount, eV, xV);
            if (pV) {
              xV.targets = [];
              for (const VV of pV) xV.targets.push(VV.attributes)
            }
            JV.primitives.push(xV), this._extensionsPostExportMeshPrimitive(xV)
          }
        if (pV) {
          JV.weights = [], JV.extras || (JV.extras = {}), JV.extras.targetNames = [];
          for (const VV of pV) JV.weights.push(VV.influence), JV.extras.targetNames.push(VV.name)
        }
        return xV
      }
    }
    DJ._ExtensionNames = new Array, DJ._ExtensionFactories = {}, DJ._ExtensionOrders = {};
    class iJ {
      static async GLTFAsync(VV, eV, xV) {
        xV && xV.exportWithoutWaitingForScene || await VV.whenReadyAsync();
        const JV = new DJ(VV, xV),
          YV = await JV.generateGLTFAsync(eV.replace(/\.[^/.]+$/, ""));
        return JV.dispose(), YV
      }
      static async GLBAsync(VV, eV, xV) {
        xV && xV.exportWithoutWaitingForScene || await VV.whenReadyAsync();
        const JV = new DJ(VV, xV),
          YV = await JV.generateGLBAsync(eV.replace(/\.[^/.]+$/, ""));
        return JV.dispose(), YV
      }
    }
    const CJ = "EXT_mesh_gpu_instancing";

    function aJ(VV, eV) {
      const xV = new Float32Array(3 * eV);
      for (let JV = 0; JV < eV; JV++) xV[3 * JV + 0] = VV[4 * JV + 0], xV[3 * JV + 1] = VV[4 * JV + 1], xV[3 * JV + 2] = VV[4 * JV + 2];
      return xV
    }
    class oJ {
      constructor(VV) {
        this.name = CJ, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(VV, eV, xV, JV, YV, UV) {
        return await new Promise((VV => {
          if (eV && xV instanceof TJ.b && xV.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const VV = oV.o.Zero(),
              JV = oV.h.Identity(),
              yV = oV.o.One(),
              pV = xV.thinInstanceGetWorldMatrices(),
              QV = oV.l.Ik[2],
              nV = oV.l.Quaternion[1],
              wV = oV.l.Ik[3];
            let ZV = !1,
              vV = !1,
              rV = !1;
            const kV = new Float32Array(3 * xV.VeV),
              bV = new Float32Array(4 * xV.VeV),
              EV = new Float32Array(3 * xV.VeV);
            let BV = 0;
            for (const eV of pV) eV.decompose(wV, nV, QV), YV && (mx(QV), Kx(nV)), kV.set(QV.WYV(), 3 * BV), bV.set(nV.normalize().WYV(), 4 * BV), EV.set(wV.WYV(), 3 * BV), ZV = ZV || !QV.equalsWithEpsilon(VV), vV = vV || !nV.equalsWithEpsilon(JV), rV = rV || !wV.equalsWithEpsilon(yV), BV++;
            const jV = {
              attributes: {}
            };
            ZV && (jV.attributes.TRANSLATION = this._buildAccessor(kV, "VEC3", xV.VeV, UV)), vV && (jV.attributes.ROTATION = this._buildAccessor(bV, "VEC4", xV.VeV, UV)), rV && (jV.attributes.SCALE = this._buildAccessor(EV, "VEC3", xV.VeV, UV));
            let qV = xV._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (qV) {
              const VV = xV.VeV,
                eV = "VEC3";
              xV.hasVertexAlpha && qV.length === 4 * VV ? (this._instanceColorWarned || (MV.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), qV = aJ(qV, VV)) : qV.length === 4 * VV && (qV = aJ(qV, VV)), qV.length === 3 * VV && (jV.attributes._COLOR_0 = this._buildAccessor(qV, eV, VV, UV))
            }
            eV.extensions = eV.extensions || {}, eV.extensions[CJ] = jV
          }
          VV(eV)
        }))
      }
      _buildAccessor(VV, eV, xV, JV) {
        const YV = JV.createBufferView(VV),
          UV = JV.createAccessor(YV, eV, 5126, xV);
        return this._exporter._accessors.push(UV), this._exporter._accessors.length - 1
      }
    }
    let cJ = !1;

    function hJ() {
      cJ || (cJ = !0, DJ.RegisterExtension(CJ, (VV => new oJ(VV))))
    }
    xV(41744);
    hJ();
    var lJ = xV(44740);

    function LJ(VV, eV, xV, JV) {
      const YV = VV;
      let UV = null,
        yV = null,
        pV = null,
        QV = null;
      const nV = {},
        wV = eV.find((VV => "POSITION" === VV.dracoName));
      if (!wV) throw new Error("Draco: Missing position attribute for encoding.");
      if (!xV) {
        const VV = wV.data.length / wV.size;
        xV = new(VV > 65535 ? Uint32Array : Uint16Array)(VV);
        for (let eV = 0; eV < VV; eV++) xV[eV] = eV
      }
      try {
        UV = new YV.Encoder, yV = new YV.MeshBuilder, pV = new YV.Mesh, yV.AddFacesToMesh(pV, xV.length / 3, xV);
        const VV = new Map([
          [Float32Array, (VV, eV, xV, JV, YV, UV) => VV.AddFloatAttribute(eV, xV, JV, YV, UV)],
          [Uint32Array, (VV, eV, xV, JV, YV, UV) => VV.AddUInt32Attribute(eV, xV, JV, YV, UV)],
          [Uint16Array, (VV, eV, xV, JV, YV, UV) => VV.AddUInt16Attribute(eV, xV, JV, YV, UV)],
          [Uint8Array, (VV, eV, xV, JV, YV, UV) => VV.AddUInt8Attribute(eV, xV, JV, YV, UV)],
          [Int32Array, (VV, eV, xV, JV, YV, UV) => VV.AddInt32Attribute(eV, xV, JV, YV, UV)],
          [Int16Array, (VV, eV, xV, JV, YV, UV) => VV.AddInt16Attribute(eV, xV, JV, YV, UV)],
          [Int8Array, (VV, eV, xV, JV, YV, UV) => VV.AddInt8Attribute(eV, xV, JV, YV, UV)]
        ]);
        for (const xV of eV) {
          xV.data instanceof Uint8ClampedArray && (xV.data = new Uint8Array(xV.data));
          const eV = VV.get(xV.data.constructor),
            QV = xV.data.length / xV.size;
          nV[xV.kind] = eV(yV, pV, YV[xV.dracoName], QV, xV.size, xV.data), JV.quantizationBits && JV.quantizationBits[xV.dracoName] && UV.SetAttributeQuantization(YV[xV.dracoName], JV.quantizationBits[xV.dracoName])
        }
        JV.method && UV.SetEncodingMethod(YV[JV.method]), void 0 !== JV.encodeSpeed && void 0 !== JV.decodeSpeed && UV.SetSpeedOptions(JV.encodeSpeed, JV.decodeSpeed), QV = new YV.DracoInt8Array;
        const wV = UV.EncodeMeshToDracoBuffer(pV, QV);
        if (wV <= 0) throw new Error("Draco: Failed to encode.");
        const ZV = new Int8Array(wV);
        for (let eV = 0; eV < wV; eV++) ZV[eV] = QV.GetValue(eV);
        return {
          data: ZV,
          attributeIds: nV
        }
      } finally {
        pV && YV.destroy(pV), yV && YV.destroy(yV), UV && YV.destroy(UV), QV && YV.destroy(QV)
      }
    }

    function fJ() {
      let VV;
      onmessage = eV => {
        const xV = eV.data;
        switch (xV.id) {
          case "init": {
            xV.url && importScripts(xV.url);
            const eV = xV.wasmBinary ? {
              wasmBinary: xV.wasmBinary
            } : {};
            VV = DracoEncoderModule(eV), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!VV) throw new Error("Draco: Encoder module is not available.");
            VV.then((VV => {
              const eV = LJ(VV, xV.attributes, xV.indices, xV.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: eV
              }, eV ? [eV.data.buffer] : void 0)
            })).catch((VV => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: VV.message
              })
            }))
        }
      }
    }
    class mJ {
      constructor(VV) {
        if (VV.workerPool) return void(this._workerPoolPromise = Promise.resolve(VV.workerPool));
        const eV = VV.wasmBinary,
          xV = VV.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          JV = xV && "function" === typeof Worker && "function" === typeof URL,
          YV = JV || !VV.jsModule,
          UV = VV.wasmUrl && VV.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: YV ? Ae.j.GetBabylonScriptURL(VV.wasmUrl, !0) : "",
            wasmBinaryPromise: eV ? Promise.resolve(eV) : Ae.j.LoadFileAsync(Ae.j.GetBabylonScriptURL(VV.wasmBinaryUrl, !0))
          } : {
            url: YV ? Ae.j.GetBabylonScriptURL(VV.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        JV ? this._workerPoolPromise = UV.wasmBinaryPromise.then((VV => {
          const eV = this._getWorkerContent(),
            JV = URL.createObjectURL(new Blob([eV], {
              type: "application/javascript"
            }));
          return new lJ.c(xV, (() => async function(VV, eV, xV) {
            return await new Promise(((JV, YV) => {
              const UV = eV => {
                  VV.removeEventListener("error", UV), VV.removeEventListener("message", yV), YV(eV)
                },
                yV = eV => {
                  "initDone" === eV.data.id && (VV.removeEventListener("error", UV), VV.removeEventListener("message", yV), JV(VV))
                };
              if (VV.addEventListener("error", UV), VV.addEventListener("message", yV), eV) {
                const JV = eV.slice(0);
                VV.postMessage({
                  id: "init",
                  url: xV,
                  wasmBinary: JV
                }, [JV])
              } else VV.postMessage({
                id: "init",
                url: xV
              })
            }))
          }(new Worker(JV), VV, UV.url)))
        })) : this._modulePromise = UV.wasmBinaryPromise.then((async eV => {
          if (!this._isModuleAvailable() && !VV.jsModule) {
            if (!UV.url) throw new Error("Draco codec module is not available");
            await Ae.j.LoadBabylonScriptAsync(UV.url)
          }
          return await this._createModuleAsync(eV, VV.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((VV => {
          VV.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function KJ() {
      const VV = VV => !!VV && "object" === typeof VV;
      for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
      return xV.reduce(((eV, xV) => {
        const JV = Object.keys(xV);
        for (const YV of JV) {
          const JV = eV[YV],
            UV = xV[YV];
          Array.isArray(JV) && Array.isArray(UV) ? eV[YV] = JV.concat(UV) : VV(JV) && VV(UV) ? eV[YV] = KJ(JV, UV) : eV[YV] = UV
        }
        return eV
      }), {})
    }

    function HJ(VV) {
      return VV === cV.j.PositionKind ? "POSITION" : VV === cV.j.NormalKind ? "NORMAL" : VV === cV.j.ColorKind ? "COLOR" : VV.startsWith(cV.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const uJ = {
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
    class sJ extends mJ {
      static get DefaultAvailable() {
        return !!((VV = sJ.DefaultConfiguration).wasmUrl && (VV.wasmBinary || VV.wasmBinaryUrl) && "object" === typeof WebAssembly || VV.fallbackUrl);
        var VV
      }
      static get Default() {
        return sJ._Default ?? (sJ._Default = new sJ), sJ._Default
      }
      static ResetDefault(VV) {
        sJ._Default && (VV || sJ._Default.dispose(), sJ._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(VV, eV) {
        return {
          module: await (eV || DracoEncoderModule)({
            wasmBinary: VV
          })
        }
      }
      _getWorkerContent() {
        return `${LJ}(${fJ})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sJ.DefaultConfiguration)
      }
      async _encodeAsync(VV, eV, xV) {
        const JV = xV ? KJ(uJ, xV) : uJ;
        if (this._workerPoolPromise) {
          const xV = await this._workerPoolPromise;
          return await new Promise(((YV, UV) => {
            xV.push(((xV, yV) => {
              const pV = VV => {
                  xV.removeEventListener("error", pV), xV.removeEventListener("message", QV), UV(VV), yV()
                },
                QV = VV => {
                  "encodeMeshSuccess" === VV.data.id ? (xV.removeEventListener("error", pV), xV.removeEventListener("message", QV), YV(VV.data.encodedMeshData), yV()) : "encodeMeshError" === VV.data.id && (xV.removeEventListener("error", pV), xV.removeEventListener("message", QV), UV(new Error(VV.data.errorMessage)), yV())
                };
              xV.addEventListener("error", pV), xV.addEventListener("message", QV);
              const nV = [];
              for (const eV of VV) nV.push(eV.data.buffer);
              eV && nV.push(eV.buffer), xV.postMessage({
                id: "encodeMesh",
                attributes: VV,
                indices: eV,
                options: JV
              }, nV)
            }))
          }))
        }
        if (this._modulePromise) {
          return LJ((await this._modulePromise).module, VV, eV, JV)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(VV, eV) {
        if (0 == VV.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        VV instanceof TJ.b && VV.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === eV?.method && (MV.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), eV.method = "MESH_SEQUENTIAL_ENCODING");
        const xV = function(VV) {
            let eV = VV.RYV(void 0, !0);
            return !eV || eV instanceof Uint32Array || eV instanceof Uint16Array || (eV = ((0, Wx.d)(eV, eV.length) ? Uint32Array : Uint16Array).from(eV)), eV
          }(VV),
          JV = function(VV, eV) {
            const xV = [];
            for (const JV of VV.getVerticesDataKinds()) {
              if (eV?.includes(JV)) {
                if (JV === cV.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const YV = VV.getVertexBuffer(JV),
                UV = YV.getSize(),
                yV = (0, Wx.q)(YV.getData(), UV, YV.type, YV.byteOffset, YV.byteStride, VV.getTotalVertices(), !0);
              xV.push({
                kind: JV,
                dracoName: HJ(JV),
                size: UV,
                data: yV
              })
            }
            return xV
          }(VV, eV?.excludedAttributes);
        return await this._encodeAsync(JV, xV, eV)
      }
    }
    sJ.DefaultConfiguration = {
      wasmUrl: `${Ae.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Ae.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Ae.j._DefaultCdnUrl}/draco_encoder.js`
    }, sJ._Default = null;
    const SJ = "KHR_draco_mesh_compression";
    class IJ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(VV) {
        this.name = SJ, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === VV.options.meshCompressionMethod && sJ.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(VV, eV, xV) {
        if (!this.enabled) return;
        if (4 !== VV.mode && 5 !== VV.mode) return void MV.b.Warn("Cannot compress primitive with mode " + VV.mode + ".");
        const JV = [],
          YV = [];
        let UV = null;
        if (void 0 !== VV.indices) {
          const yV = xV[VV.indices],
            pV = eV.getBufferView(yV);
          UV = eV.getData(pV).slice(), JV.push(pV), YV.push(yV)
        }
        const yV = [];
        for (const [wV, ZV] of Object.entries(VV.attributes)) {
          const VV = xV[ZV],
            UV = eV.getBufferView(VV),
            QV = lx(VV.type),
            nV = (0, Wx.q)(eV.getData(UV), QV, VV.componentType, VV.byteOffset || 0, UV.byteStride || (0, Wx.m)(VV.componentType) * QV, VV.count, !0);
          yV.push({
            kind: wV,
            dracoName: (pV = wV, "POSITION" === pV ? "POSITION" : "NORMAL" === pV ? "NORMAL" : pV.startsWith("COLOR") ? "COLOR" : pV.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: lx(VV.type),
            data: nV
          }), JV.push(UV), YV.push(VV)
        }
        var pV;
        const QV = {
            method: VV.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          nV = sJ.Default._encodeAsync(yV, UV, QV).then((xV => {
            const UV = {
                bufferView: -1,
                attributes: xV.attributeIds
              },
              yV = eV.createBufferView(xV.data);
            eV.setBufferView(UV, yV);
            for (const VV of JV) this._bufferViewsUsed.add(VV);
            for (const VV of YV) this._accessorsUsed.add(VV);
            VV.extensions || (VV.extensions = {}), VV.extensions[SJ] = UV
          })).catch((VV => {
            MV.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + VV.message)
          }));
        this._encodePromises.push(nV), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(VV) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((eV => {
          VV.getPropertiesWithBufferView(eV).every((VV => this._accessorsUsed.has(VV))) && VV.removeBufferView(eV)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let dJ = !1;

    function OJ() {
      dJ || (dJ = !0, DJ.RegisterExtension(SJ, (VV => new IJ(VV))))
    }
    OJ();
    var VY = xV(44469);
    const eY = "KHR_lights_punctual",
      xY = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      JY = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      YY = oV.o.Backward();
    class UY {
      constructor(VV) {
        this.name = eY, this.enabled = !0, this.required = !1, this._exporter = VV
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[eY] = this._lights
      }
      async postExportNodeAsync(VV, eV, xV, JV, YV) {
        return await new Promise((UV => {
          if (!(xV instanceof wJ.d)) return void UV(eV);
          const yV = xV.getTypeID() == wJ.d.LIGHTTYPEID_POINTLIGHT ? "point" : xV.getTypeID() == wJ.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : xV.getTypeID() == wJ.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!yV || !(xV instanceof VY.b)) return MV.b.Warn(`${VV}: Light ${xV.name} is not supported in ${eY}`), void UV(eV);
          if (xV.falloffType !== wJ.d.FALLOFF_GLTF && MV.b.Warn(`${VV}: Light falloff for ${xV.name} does not match the ${eY} specification!`), !xV.position.rQV(0, 0, 0)) {
            const VV = oV.l.Ik[0].iG(xV.position);
            YV && mx(VV), eV.translation = VV.WYV()
          }
          if ("point" !== yV) {
            const VV = xV.direction.normalizeToRef(oV.l.Ik[0]);
            YV && mx(VV);
            const JV = oV.h.FromUnitVectorsToRef(YY, VV, oV.l.Quaternion[0]);
            oV.h.IsIdentity(JV) || (eV.rotation = JV.WYV())
          }
          const pV = {
            type: yV,
            name: xV.name,
            color: xV.diffuse.WYV(),
            intensity: xV.intensity,
            range: xV.range
          };
          if (Ix(pV, xY), "spot" === yV) {
            const VV = xV;
            pV.spot = {
              innerConeAngle: VV.innerAngle / 2,
              outerConeAngle: VV.angle / 2
            }, Ix(pV.spot, JY)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(pV);
          const QV = {
              light: this._lights.lights.length - 1
            },
            nV = xV.parent;
          if (nV && sx(xV, nV)) {
            const VV = JV.get(nV);
            if (VV) {
              const xV = this._exporter._nodes[VV];
              return ux(eV, xV), xV.extensions || (xV.extensions = {}), xV.extensions[eY] = QV, void UV(null)
            }
          }
          eV.extensions || (eV.extensions = {}), eV.extensions[eY] = QV, UV(eV)
        }))
      }
    }
    let yY = !1;

    function pY() {
      yY || (yY = !0, DJ.RegisterExtension(eY, (VV => new UY(VV))))
    }
    pY();
    const QY = "KHR_interactivity";
    class nY {
      constructor(VV) {
        this._exporter = VV, this.name = QY, this.enabled = !!VV.options.khrInteractivity, this.required = VV.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var VV, eV, xV;
        const JV = this._exporter.options.khrInteractivity;
        if (!JV) return;
        const YV = JV.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: VV => this._exporter._getNodeIndex(VV),
          getAnimationIndex: VV => this._exporter._getAnimationIndex(VV),
          getCameraIndex: VV => this._exporter._getCameraIndex(VV),
          getMaterialIndex: VV => this._exporter._getMaterialIndex(VV),
          getRootIndex: (VV, eV) => this._exporter._getRootIndex(VV, eV),
          setNodeExtension: (VV, eV, xV) => this._exporter._setNodeExtension(VV, eV, xV)
        });
        this._exporter._glTF.extensions[QY] = YV;
        for (const UV of JV.additionalExtensionsUsed)(VV = this._exporter._glTF).extensionsUsed || (VV.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(UV) && this._exporter._glTF.extensionsUsed.push(UV);
        for (const UV of JV.additionalExtensionsRequired)(eV = this._exporter._glTF).extensionsUsed || (eV.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(UV) && this._exporter._glTF.extensionsUsed.push(UV), (xV = this._exporter._glTF).extensionsRequired || (xV.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(UV) && this._exporter._glTF.extensionsRequired.push(UV)
      }
    }
    let wY = !1;

    function ZY() {
      wY || (wY = !0, DJ.RegisterExtension(QY, (VV => new nY(VV)), 200))
    }
    ZY();
    const vY = "EXT_lights_area",
      rY = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      kY = {
        aspect: 1
      },
      bY = oV.o.Backward();
    class EY {
      constructor(VV) {
        this.name = vY, this.enabled = !0, this.required = !1, this._exporter = VV
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[vY] = this._lights
      }
      async postExportNodeAsync(VV, eV, xV, JV, YV) {
        return await new Promise((UV => {
          if (!(xV instanceof wJ.d)) return void UV(eV);
          const yV = xV.getTypeID() == wJ.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!yV) return MV.b.Warn(`${VV}: Light ${xV.name} is not supported in ${vY}`), void UV(eV);
          const pV = xV;
          if (pV.falloffType !== wJ.d.FALLOFF_GLTF && MV.b.Warn(`${VV}: Light falloff for ${xV.name} does not match the ${vY} specification!`), !pV.position.rQV(0, 0, 0)) {
            const VV = oV.l.Ik[0].iG(pV.position);
            YV && mx(VV), eV.translation = VV.WYV()
          }
          const QV = oV.o.Forward();
          YV && mx(QV);
          const nV = oV.h.FromUnitVectorsToRef(bY, QV, oV.l.Quaternion[0]);
          oV.h.IsIdentity(nV) || (eV.rotation = nV.WYV());
          const wV = {
            type: yV,
            name: pV.name,
            color: pV.diffuse.WYV(),
            intensity: pV.intensity,
            size: pV.height,
            rect: {
              aspect: pV.width / pV.height
            }
          };
          Ix(wV, rY), wV.rect && Ix(wV.rect, kY), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(wV);
          const ZV = {
              light: this._lights.lights.length - 1
            },
            vV = xV.parent;
          if (vV && sx(pV, vV)) {
            const VV = JV.get(vV);
            if (VV) {
              const xV = this._exporter._nodes[VV];
              return ux(eV, xV), xV.extensions || (xV.extensions = {}), xV.extensions[vY] = ZV, void UV(null)
            }
          }
          eV.extensions || (eV.extensions = {}), eV.extensions[vY] = ZV, UV(eV)
        }))
      }
    }
    let BY = !1;

    function jY() {
      BY || (BY = !0, DJ.RegisterExtension(vY, (VV => new EY(VV))))
    }
    jY();
    const qY = "KHR_materials_anisotropy";
    class tY {
      constructor(VV) {
        this.name = qY, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof Te) {
          if (xV.anisotropy.isEnabled && !xV.anisotropy.legacy) return xV.anisotropy.texture && JV.push(xV.anisotropy.texture), JV
        } else if (xV instanceof de && xV.specularRoughnessAnisotropy > 0) {
          const VV = function(VV) {
            const eV = VV.specularRoughnessAnisotropyTexture,
              xV = VV.geometryTangentTexture;
            return `${eV&&eV.getInternalTexture()?eV.getInternalTexture().uniqueId:"NoStrength"}_${xV&&xV.getInternalTexture()?xV.getInternalTexture().uniqueId:"NoTangent"}`
          }(xV);
          if (this._anisoTexturesMap[VV]) JV.push(this._anisoTexturesMap[VV]);
          else {
            const eV = await async function(VV) {
              const eV = VV.dD(),
                xV = VV.specularRoughnessAnisotropyTexture,
                JV = VV.geometryTangentTexture;
              return xV || JV ? await yx("AnisotropyTexture", nx(JV ? px(JV, 0) : Qx(1), JV ? px(JV, 1) : Qx(0), xV ? px(xV, 0) : Qx(1)), eV) : null
            }(xV);
            eV && (JV.push(eV), this._anisoTexturesMap[VV] = eV)
          }
          return JV
        }
        return []
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          var JV;
          if (xV instanceof Te) {
            if (!xV.anisotropy.isEnabled || xV.anisotropy.legacy) return void VV(eV);
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const JV = this._exporter._materialExporter.getTextureInfo(xV.anisotropy.texture),
              YV = {
                anisotropyStrength: xV.anisotropy.intensity,
                anisotropyRotation: xV.anisotropy.angle,
                anisotropyTexture: JV ?? void 0
              };
            null !== YV.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[qY] = YV
          } else if (xV instanceof de && xV.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            let YV = xV.specularRoughnessTexture;
            xV._useRoughnessFromMetallicTextureGreen && (YV = xV.baseMetalnessTexture);
            const UV = this._anisoTexturesMap[xV.id];
            if (!YV && !UV) {
              let JV = xV.specularRoughness,
                YV = xV.specularRoughnessAnisotropy;
              if (!xV._useGltfStyleAnisotropy) {
                const VV = function(VV, eV) {
                  const xV = VV * VV,
                    JV = xV * Math.sqrt(2 / (1 + (1 - eV) * (1 - eV))),
                    YV = (1 - eV) * JV;
                  return {
                    newBaseRoughness: Math.sqrt(YV),
                    newAnisotropyStrength: Math.min(Math.sqrt((JV - xV) / Math.max(1 - xV, 1e-4)), 1)
                  }
                }(xV.specularRoughness, xV.specularRoughnessAnisotropy);
                JV = VV.newBaseRoughness, YV = VV.newAnisotropyStrength
              }
              eV.pbrMetallicRoughness && (eV.pbrMetallicRoughness.roughnessFactor = JV);
              const UV = {
                anisotropyStrength: YV,
                anisotropyRotation: xV.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return eV.extensions[qY] = UV, VV(eV)
            }
            const yV = UV ? this._exporter._materialExporter.getTextureInfo(UV) : null,
              pV = {
                anisotropyStrength: xV.specularRoughnessAnisotropy,
                anisotropyRotation: xV.geometryTangentAngle,
                anisotropyTexture: yV || void 0,
                extensions: {}
              };
            xV._useGltfStyleAnisotropy || (eV.extensions.KHR_materials_openpbr = {}, (JV = this._exporter._glTF).extensionsUsed || (JV.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[qY] = pV
          }
          VV(eV)
        }))
      }
    }
    let FY = !1;

    function TY() {
      FY || (FY = !0, DJ.RegisterExtension(qY, (VV => new tY(VV))))
    }
    TY();
    const PY = "KHR_materials_clearcoat";

    function AY(VV, eV) {
      const xV = new GV.f(eV.name, eV.dD());
      return xV._texture = VV, xV.coordinatesIndex = eV.coordinatesIndex, eV instanceof GV.f && (xV.uOffset = eV.uOffset, xV.vOffset = eV.vOffset, xV.uScale = eV.uScale, xV.vScale = eV.vScale, xV.wAng = eV.wAng), xV.wrapU = eV.wrapU, xV.wrapV = eV.wrapV, xV
    }
    class NY {
      constructor(VV) {
        this.name = PY, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = VV
      }
      dispose() {
        for (const VV of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[VV].dispose()
        }
        this._mergedTexturesMap = {};
        for (const VV of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[VV].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof Te) {
          if (xV.clearCoat.isEnabled) return xV.clearCoat.texture && JV.push(xV.clearCoat.texture), !xV.clearCoat.useRoughnessFromMainTexture && xV.clearCoat.textureRoughness && JV.push(xV.clearCoat.textureRoughness), xV.clearCoat.bumpTexture && JV.push(xV.clearCoat.bumpTexture), JV
        } else if (xV instanceof de && xV.coatWeight > 0) {
          let VV = !1;
          if (xV.coatWeightTexture ? xV.coatRoughnessTexture ? xV._useCoatRoughnessFromGreenChannel && xV.coatWeightTexture.getInternalTexture() === xV.coatRoughnessTexture.getInternalTexture() ? (JV.push(xV.coatWeightTexture), JV.push(xV.coatRoughnessTexture)) : VV = !0 : JV.push(xV.coatWeightTexture) : xV.coatRoughnessTexture && (xV._useCoatRoughnessFromGreenChannel ? JV.push(xV.coatRoughnessTexture) : VV = !0), VV) {
            const VV = function(VV) {
              const eV = VV.coatWeightTexture,
                xV = eV && eV.getInternalTexture() ? eV.getInternalTexture().uniqueId : "NoCoat",
                JV = VV.coatRoughnessTexture;
              return `${xV}_${JV&&JV.getInternalTexture()?JV.getInternalTexture().uniqueId:"NoRoughness"}`
            }(xV);
            if (!this._cachedInternalTexturesMap[VV]) {
              const eV = await async function(VV) {
                const eV = VV.dD(),
                  xV = VV.coatWeightTexture,
                  JV = VV.coatRoughnessTexture;
                return xV || JV ? (await yx("CoatTexture", nx(xV ? px(xV, 0) : Qx(1), JV ? px(JV, VV._useCoatRoughnessFromGreenChannel ? 1 : 0) : Qx(1)), eV)).getInternalTexture() : null
              }(xV);
              eV && (this._cachedInternalTexturesMap[VV] = eV)
            }
            this._cachedInternalTexturesMap[VV] && (xV.coatWeightTexture && (this._mergedTexturesMap[xV.coatWeightTexture.uniqueId] = AY(this._cachedInternalTexturesMap[VV], xV.coatWeightTexture), JV.push(this._mergedTexturesMap[xV.coatWeightTexture.uniqueId])), xV.coatRoughnessTexture && (this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId] = AY(this._cachedInternalTexturesMap[VV], xV.coatRoughnessTexture), JV.push(this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId])))
          }
          return xV.geometryCoatNormalTexture && JV.push(xV.geometryCoatNormalTexture), JV
        }
        return []
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof Te) {
            if (!xV.clearCoat.isEnabled) return void VV(eV);
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const JV = this._exporter._materialExporter.getTextureInfo(xV.clearCoat.texture);
            let YV;
            YV = xV.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(xV.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(xV.clearCoat.textureRoughness), xV.clearCoat.isTintEnabled && Ae.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${xV.name}`), xV.clearCoat.remapF0OnInterfaceChange && Ae.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${xV.name}`);
            const UV = this._exporter._materialExporter.getTextureInfo(xV.clearCoat.bumpTexture),
              yV = {
                clearcoatFactor: xV.clearCoat.intensity,
                clearcoatTexture: JV ?? void 0,
                clearcoatRoughnessFactor: xV.clearCoat.roughness,
                clearcoatRoughnessTexture: YV ?? void 0,
                clearcoatNormalTexture: UV ?? void 0
              };
            null === yV.clearcoatTexture && null === yV.clearcoatRoughnessTexture && null === yV.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[PY] = yV
          } else if (xV instanceof de) {
            if (0 == xV.coatWeight) return void VV(eV);
            let JV, YV, UV, yV;
            this._wasUsed = !0, eV.extensions = eV.extensions || {}, xV.coatWeightTexture && (JV = this._mergedTexturesMap[xV.coatWeightTexture.uniqueId], YV = this._exporter._materialExporter.getTextureInfo(JV)), xV.coatRoughnessTexture && (UV = this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId], yV = this._exporter._materialExporter.getTextureInfo(UV)), xV.coatColorTexture && Ae.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${xV.name}`);
            const pV = this._exporter._materialExporter.getTextureInfo(xV.geometryCoatNormalTexture),
              QV = {
                clearcoatFactor: xV.coatWeight,
                clearcoatTexture: YV ?? void 0,
                clearcoatRoughnessFactor: xV.coatRoughness,
                clearcoatRoughnessTexture: yV ?? void 0,
                clearcoatNormalTexture: pV ?? void 0
              };
            null === QV.clearcoatTexture && null === QV.clearcoatRoughnessTexture && null === QV.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[PY] = QV
          }
          VV(eV)
        }))
      }
    }
    let XY = !1;

    function MY() {
      XY || (XY = !0, DJ.RegisterExtension(PY, (VV => new NY(VV))))
    }
    MY();
    const zY = "KHR_materials_coat";

    function GY(VV) {
      const eV = VV.coatRoughnessAnisotropyTexture,
        xV = VV.geometryCoatTangentTexture;
      return `${eV&&eV.getInternalTexture()?eV.getInternalTexture().uniqueId:"NoStrength"}_${xV&&xV.getInternalTexture()?xV.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function WY(VV, eV) {
      const xV = new GV.f(eV.name, eV.dD());
      return xV._texture = VV, xV.coordinatesIndex = eV.coordinatesIndex, eV instanceof GV.f && (xV.uOffset = eV.uOffset, xV.vOffset = eV.vOffset, xV.uScale = eV.uScale, xV.vScale = eV.vScale, xV.wAng = eV.wAng), xV.wrapU = eV.wrapU, xV.wrapV = eV.wrapV, xV
    }
    class RY {
      constructor(VV) {
        this.name = zY, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = VV
      }
      dispose() {
        for (const VV of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[VV].dispose()
        }
        this._mergedTexturesMap = {};
        for (const VV of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[VV].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof Te) {
          if (xV.clearCoat.isEnabled) return xV.clearCoat.texture && JV.push(xV.clearCoat.texture), !xV.clearCoat.useRoughnessFromMainTexture && xV.clearCoat.textureRoughness && JV.push(xV.clearCoat.textureRoughness), xV.clearCoat.bumpTexture && JV.push(xV.clearCoat.bumpTexture), xV.clearCoat.tintTexture && JV.push(xV.clearCoat.tintTexture), JV
        } else if (xV instanceof de && xV.coatWeight > 0) {
          let VV = !1;
          if (xV.coatWeightTexture ? xV.coatRoughnessTexture ? xV._useCoatRoughnessFromGreenChannel && xV.coatWeightTexture.getInternalTexture() === xV.coatRoughnessTexture.getInternalTexture() ? (JV.push(xV.coatWeightTexture), JV.push(xV.coatRoughnessTexture)) : VV = !0 : JV.push(xV.coatWeightTexture) : xV.coatRoughnessTexture && (xV._useCoatRoughnessFromGreenChannel ? JV.push(xV.coatRoughnessTexture) : VV = !0), VV) {
            const VV = function(VV) {
              const eV = VV.coatWeightTexture,
                xV = eV && eV.getInternalTexture() ? eV.getInternalTexture().uniqueId : "NoCoat",
                JV = VV.coatRoughnessTexture;
              return `${xV}_${JV&&JV.getInternalTexture()?JV.getInternalTexture().uniqueId:"NoRoughness"}`
            }(xV);
            if (!this._cachedInternalTexturesMap[VV]) {
              const eV = await async function(VV) {
                const eV = VV.dD(),
                  xV = VV.coatWeightTexture,
                  JV = VV.coatRoughnessTexture;
                return xV || JV ? (await yx("CoatTexture", nx(xV ? px(xV, 0) : Qx(1), JV ? px(JV, VV._useCoatRoughnessFromGreenChannel ? 1 : 0) : Qx(1)), eV)).getInternalTexture() : null
              }(xV);
              eV && (this._cachedInternalTexturesMap[VV] = eV)
            }
            this._cachedInternalTexturesMap[VV] && (xV.coatWeightTexture && (this._mergedTexturesMap[xV.coatWeightTexture.uniqueId] = WY(this._cachedInternalTexturesMap[VV], xV.coatWeightTexture), JV.push(this._mergedTexturesMap[xV.coatWeightTexture.uniqueId])), xV.coatRoughnessTexture && (this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId] = WY(this._cachedInternalTexturesMap[VV], xV.coatRoughnessTexture), JV.push(this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId])))
          }
          if (xV.geometryCoatNormalTexture && JV.push(xV.geometryCoatNormalTexture), xV.coatColorTexture && JV.push(xV.coatColorTexture), xV.coatRoughnessAnisotropy > 0) {
            const VV = GY(xV);
            if (this._mergedTexturesMap[VV]) JV.push(this._mergedTexturesMap[VV]);
            else {
              const eV = await async function(VV) {
                const eV = VV.dD(),
                  xV = VV.coatRoughnessAnisotropyTexture,
                  JV = VV.geometryCoatTangentTexture;
                return xV || JV ? await yx("AnisotropyTexture", nx(JV ? px(JV, 0) : Qx(1), JV ? px(JV, 1) : Qx(0), xV ? px(xV, 0) : Qx(1)), eV) : null
              }(xV);
              eV && (JV.push(eV), this._mergedTexturesMap[VV] = eV)
            }
            return JV
          }
          return JV
        }
        return []
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          var JV;
          if (xV instanceof Te) {
            if (!xV.clearCoat.isEnabled) return void VV(eV);
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const JV = this._exporter._materialExporter.getTextureInfo(xV.clearCoat.texture);
            let YV, UV;
            YV = xV.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(xV.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(xV.clearCoat.textureRoughness), xV.clearCoat.isTintEnabled && (UV = this._exporter._materialExporter.getTextureInfo(xV.clearCoat.tintTexture));
            const yV = this._exporter._materialExporter.getTextureInfo(xV.clearCoat.bumpTexture),
              pV = xV.clearCoat.indexOfRefraction,
              QV = {
                coatFactor: xV.clearCoat.intensity,
                coatTexture: JV ?? void 0,
                coatRoughnessFactor: xV.clearCoat.roughness,
                coatRoughnessTexture: YV ?? void 0,
                coatNormalTexture: yV ?? void 0,
                coatColorFactor: xV.clearCoat.tintColor.WYV(),
                coatColorTexture: UV ?? void 0,
                coatIor: 1.5 !== pV ? pV : void 0
              };
            null === QV.coatTexture && null === QV.coatRoughnessTexture && null === QV.coatRoughnessTexture && null === QV.coatColorTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[zY] = QV
          } else if (xV instanceof de) {
            if (0 == xV.coatWeight) return void VV(eV);
            let YV, UV, yV, pV;
            this._wasUsed = !0, eV.extensions = eV.extensions || {}, xV.coatWeightTexture && (YV = this._mergedTexturesMap[xV.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[xV.coatWeightTexture.uniqueId] : xV.coatWeightTexture, UV = this._exporter._materialExporter.getTextureInfo(YV)), xV.coatRoughnessTexture && (yV = this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[xV.coatRoughnessTexture.uniqueId] : xV.coatRoughnessTexture, pV = this._exporter._materialExporter.getTextureInfo(yV));
            const QV = this._exporter._materialExporter.getTextureInfo(xV.geometryCoatNormalTexture),
              nV = this._exporter._materialExporter.getTextureInfo(xV.coatColorTexture),
              wV = xV.coatIor,
              ZV = xV.coatDarkening,
              vV = xV.coatRoughnessTexture,
              rV = GY(xV),
              kV = this._mergedTexturesMap[rV];
            let bV, EV = 0,
              BV = 0;
            if (xV.coatRoughnessAnisotropy > 0) {
              if (vV || kV) {
                const VV = kV ? this._exporter._materialExporter.getTextureInfo(kV) : null;
                EV = xV.coatRoughnessAnisotropy, BV = xV.geometryCoatTangentAngle, bV = VV || void 0
              } else {
                let VV = xV.coatRoughness,
                  JV = xV.coatRoughnessAnisotropy;
                if (!xV._useGltfStyleAnisotropy) {
                  const eV = function(VV, eV) {
                    const xV = VV * VV,
                      JV = xV * Math.sqrt(2 / (1 + (1 - eV) * (1 - eV))),
                      YV = (1 - eV) * JV;
                    return {
                      newBaseRoughness: Math.sqrt(YV),
                      newAnisotropyStrength: Math.min(Math.sqrt((JV - xV) / Math.max(1 - xV, 1e-4)), 1)
                    }
                  }(xV.coatRoughness, xV.coatRoughnessAnisotropy);
                  VV = eV.newBaseRoughness, JV = eV.newAnisotropyStrength
                }
                eV.pbrMetallicRoughness && (eV.pbrMetallicRoughness.roughnessFactor = VV), EV = JV, BV = xV.geometryCoatTangentAngle + .5 * Math.PI, bV = void 0
              }
              xV._useGltfStyleAnisotropy || (eV.extensions.KHR_materials_openpbr = {}, (JV = this._exporter._glTF).extensionsUsed || (JV.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const jV = {
              coatFactor: xV.coatWeight,
              coatTexture: UV ?? void 0,
              coatRoughnessFactor: xV.coatRoughness,
              coatRoughnessTexture: pV ?? void 0,
              coatNormalTexture: QV ?? void 0,
              coatColorFactor: xV.coatColor.WYV(),
              coatColorTexture: nV ?? void 0,
              coatIor: 1.5 !== wV ? wV : void 0,
              coatDarkeningFactor: 1 !== ZV ? ZV : void 0,
              coatAnisotropyRotation: BV,
              coatAnisotropyStrength: EV,
              coatAnisotropyTexture: bV
            };
            null === jV.coatTexture && null === jV.coatRoughnessTexture && null === jV.coatRoughnessTexture && null === jV.coatAnisotropyTexture && null === jV.coatColorTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[zY] = jV
          }
          VV(eV)
        }))
      }
    }
    let gY = !1;

    function DY() {
      gY || (gY = !0, DJ.RegisterExtension(zY, (VV => new RY(VV))))
    }
    DY();
    let iY = (() => {
      var VV, eV, xV, JV, YV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, MV, zV, GV, WV, RV, gV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, HV, uV, sV, SV, IV, dV, OV, Ve, ee, xe, Je, Ye, Ue, ye, pe, Qe, ne, we, Ze, ve, re, ke, be, Ee, Be, je, qe;
      let te, Fe, Ae, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, he, le, Le, fe, me, Ke, He, ue, se, Se, Ie, de, Oe, Vx, ex, xx, Jx, Yx, Ux, yx, px, Qx, nx, wx, Zx, vx, rx, kx, bx, Ex, Bx, jx, qx, tx, Fx, Tx, Px, Ax, Nx, Xx, Mx, zx, Gx, Wx, Rx, gx, Dx, ix, Cx, ax, ox, cx = Te,
        hx = [],
        lx = [],
        Lx = [],
        fx = [],
        mx = [],
        Kx = [],
        Hx = [],
        ux = [],
        sx = [],
        Sx = [],
        Ix = [],
        dx = [],
        Ox = [],
        VJ = [],
        eJ = [],
        xJ = [],
        JJ = [],
        YJ = [],
        UJ = [],
        yJ = [],
        pJ = [],
        QJ = [],
        nJ = [],
        wJ = [],
        ZJ = [],
        vJ = [],
        rJ = [],
        kJ = [],
        bJ = [],
        EJ = [],
        BJ = [],
        jJ = [],
        qJ = [],
        tJ = [],
        FJ = [],
        TJ = [],
        PJ = [],
        AJ = [],
        NJ = [],
        XJ = [],
        MJ = [],
        zJ = [],
        GJ = [],
        WJ = [],
        RJ = [],
        gJ = [],
        DJ = [],
        iJ = [],
        CJ = [],
        aJ = [],
        oJ = [],
        cJ = [],
        hJ = [],
        lJ = [],
        LJ = [],
        fJ = [],
        mJ = [],
        KJ = [],
        HJ = [],
        uJ = [],
        sJ = [],
        SJ = [],
        IJ = [],
        dJ = [],
        OJ = [],
        VY = [],
        eY = [],
        xY = [],
        JY = [],
        YY = [],
        UY = [],
        yY = [],
        pY = [],
        QY = [],
        nY = [],
        wY = [],
        ZY = [],
        vY = [],
        rY = [],
        kY = [],
        bY = [],
        EY = [],
        BY = [],
        jY = [],
        qY = [],
        tY = [],
        FY = [],
        TY = [],
        PY = [],
        AY = [],
        NY = [],
        XY = [],
        MY = [],
        zY = [],
        GY = [],
        WY = [],
        RY = [],
        gY = [],
        DY = [],
        iY = [],
        CY = [],
        aY = [],
        oY = [],
        cY = [],
        hY = [],
        lY = [],
        LY = [],
        fY = [],
        mY = [],
        KY = [],
        HY = [],
        uY = [],
        sY = [],
        SY = [],
        IY = [],
        dY = [],
        OY = [],
        VU = [],
        eU = [],
        xU = [],
        JU = [],
        YU = [],
        UU = [],
        yU = [],
        pU = [],
        QU = [],
        nU = [],
        wU = [],
        ZU = [],
        vU = [],
        rU = [],
        kU = [],
        bU = [];
      return VV = class extends cx {
        get directIntensity() {
          return (0, NV.b)(this, eV, "f")
        }
        set directIntensity(VV) {
          (0, NV.f)(this, eV, VV, "f")
        }
        get emissiveIntensity() {
          return (0, NV.b)(this, xV, "f")
        }
        set emissiveIntensity(VV) {
          (0, NV.f)(this, xV, VV, "f")
        }
        get environmentIntensity() {
          return (0, NV.b)(this, JV, "f")
        }
        set environmentIntensity(VV) {
          (0, NV.f)(this, JV, VV, "f")
        }
        get specularIntensity() {
          return (0, NV.b)(this, YV, "f")
        }
        set specularIntensity(VV) {
          (0, NV.f)(this, YV, VV, "f")
        }
        get disableBumpMap() {
          return (0, NV.b)(this, yV, "f")
        }
        set disableBumpMap(VV) {
          (0, NV.f)(this, yV, VV, "f")
        }
        get albedoTexture() {
          return (0, NV.b)(this, pV, "f")
        }
        set albedoTexture(VV) {
          (0, NV.f)(this, pV, VV, "f")
        }
        get baseWeightTexture() {
          return (0, NV.b)(this, QV, "f")
        }
        set baseWeightTexture(VV) {
          (0, NV.f)(this, QV, VV, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, NV.b)(this, nV, "f")
        }
        set baseDiffuseRoughnessTexture(VV) {
          (0, NV.f)(this, nV, VV, "f")
        }
        get ambientTexture() {
          return (0, NV.b)(this, wV, "f")
        }
        set ambientTexture(VV) {
          (0, NV.f)(this, wV, VV, "f")
        }
        get ambientTextureStrength() {
          return (0, NV.b)(this, ZV, "f")
        }
        set ambientTextureStrength(VV) {
          (0, NV.f)(this, ZV, VV, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, NV.b)(this, vV, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(VV) {
          (0, NV.f)(this, vV, VV, "f")
        }
        get opacityTexture() {
          return (0, NV.b)(this, rV, "f")
        }
        set opacityTexture(VV) {
          (0, NV.f)(this, rV, VV, "f")
        }
        get reflectionTexture() {
          return (0, NV.b)(this, kV, "f")
        }
        set reflectionTexture(VV) {
          (0, NV.f)(this, kV, VV, "f")
        }
        get emissiveTexture() {
          return (0, NV.b)(this, bV, "f")
        }
        set emissiveTexture(VV) {
          (0, NV.f)(this, bV, VV, "f")
        }
        get reflectivityTexture() {
          return (0, NV.b)(this, EV, "f")
        }
        set reflectivityTexture(VV) {
          (0, NV.f)(this, EV, VV, "f")
        }
        get metallicTexture() {
          return (0, NV.b)(this, BV, "f")
        }
        set metallicTexture(VV) {
          (0, NV.f)(this, BV, VV, "f")
        }
        get metallic() {
          return (0, NV.b)(this, jV, "f")
        }
        set metallic(VV) {
          (0, NV.f)(this, jV, VV, "f")
        }
        get roughness() {
          return (0, NV.b)(this, qV, "f")
        }
        set roughness(VV) {
          (0, NV.f)(this, qV, VV, "f")
        }
        get metallicF0Factor() {
          return (0, NV.b)(this, tV, "f")
        }
        set metallicF0Factor(VV) {
          (0, NV.f)(this, tV, VV, "f")
        }
        get metallicReflectanceColor() {
          return (0, NV.b)(this, FV, "f")
        }
        set metallicReflectanceColor(VV) {
          (0, NV.f)(this, FV, VV, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, NV.b)(this, TV, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(VV) {
          (0, NV.f)(this, TV, VV, "f")
        }
        get metallicReflectanceTexture() {
          return (0, NV.b)(this, PV, "f")
        }
        set metallicReflectanceTexture(VV) {
          (0, NV.f)(this, PV, VV, "f")
        }
        get reflectanceTexture() {
          return (0, NV.b)(this, AV, "f")
        }
        set reflectanceTexture(VV) {
          (0, NV.f)(this, AV, VV, "f")
        }
        get microSurfaceTexture() {
          return (0, NV.b)(this, MV, "f")
        }
        set microSurfaceTexture(VV) {
          (0, NV.f)(this, MV, VV, "f")
        }
        get bumpTexture() {
          return (0, NV.b)(this, zV, "f")
        }
        set bumpTexture(VV) {
          (0, NV.f)(this, zV, VV, "f")
        }
        get lightmapTexture() {
          return (0, NV.b)(this, GV, "f")
        }
        set lightmapTexture(VV) {
          (0, NV.f)(this, GV, VV, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(VV) {
          this.subSurface.refractionTexture = VV, VV ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, NV.b)(this, WV, "f")
        }
        set ambientColor(VV) {
          (0, NV.f)(this, WV, VV, "f")
        }
        get albedoColor() {
          return (0, NV.b)(this, RV, "f")
        }
        set albedoColor(VV) {
          (0, NV.f)(this, RV, VV, "f")
        }
        get baseWeight() {
          return (0, NV.b)(this, gV, "f")
        }
        set baseWeight(VV) {
          (0, NV.f)(this, gV, VV, "f")
        }
        get baseDiffuseRoughness() {
          return (0, NV.b)(this, iV, "f")
        }
        set baseDiffuseRoughness(VV) {
          (0, NV.f)(this, iV, VV, "f")
        }
        get reflectivityColor() {
          return (0, NV.b)(this, CV, "f")
        }
        set reflectivityColor(VV) {
          (0, NV.f)(this, CV, VV, "f")
        }
        get reflectionColor() {
          return (0, NV.b)(this, aV, "f")
        }
        set reflectionColor(VV) {
          (0, NV.f)(this, aV, VV, "f")
        }
        get emissiveColor() {
          return (0, NV.b)(this, oV, "f")
        }
        set emissiveColor(VV) {
          (0, NV.f)(this, oV, VV, "f")
        }
        get microSurface() {
          return (0, NV.b)(this, cV, "f")
        }
        set microSurface(VV) {
          (0, NV.f)(this, cV, VV, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(VV) {
          this.subSurface.indexOfRefraction = VV
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(VV) {
          this.subSurface.invertRefractionY = VV
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(VV) {
          this.subSurface.linkRefractionWithTransparency = VV, VV && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, NV.b)(this, hV, "f")
        }
        set useLightmapAsShadowmap(VV) {
          (0, NV.f)(this, hV, VV, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, NV.b)(this, lV, "f")
        }
        set useAlphaFromAlbedoTexture(VV) {
          (0, NV.f)(this, lV, VV, "f")
        }
        get forceAlphaTest() {
          return (0, NV.b)(this, LV, "f")
        }
        set forceAlphaTest(VV) {
          (0, NV.f)(this, LV, VV, "f")
        }
        get alphaCutOff() {
          return (0, NV.b)(this, fV, "f")
        }
        set alphaCutOff(VV) {
          (0, NV.f)(this, fV, VV, "f")
        }
        get useSpecularOverAlpha() {
          return (0, NV.b)(this, mV, "f")
        }
        set useSpecularOverAlpha(VV) {
          (0, NV.f)(this, mV, VV, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, NV.b)(this, HV, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(VV) {
          (0, NV.f)(this, HV, VV, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, NV.b)(this, uV, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(VV) {
          (0, NV.f)(this, uV, VV, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, NV.b)(this, sV, "f")
        }
        set useRoughnessFromMetallicTextureGreen(VV) {
          (0, NV.f)(this, sV, VV, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, NV.b)(this, SV, "f")
        }
        set useMetallnessFromMetallicTextureBlue(VV) {
          (0, NV.f)(this, SV, VV, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, NV.b)(this, IV, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(VV) {
          (0, NV.f)(this, IV, VV, "f")
        }
        get useAmbientInGrayScale() {
          return (0, NV.b)(this, dV, "f")
        }
        set useAmbientInGrayScale(VV) {
          (0, NV.f)(this, dV, VV, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, NV.b)(this, OV, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(VV) {
          (0, NV.f)(this, OV, VV, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Te.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(VV) {
          VV !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = VV ? Te.LIGHTFALLOFF_PHYSICAL : Te.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Te.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(VV) {
          VV !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = VV ? Te.LIGHTFALLOFF_GLTF : Te.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, NV.b)(this, Ve, "f")
        }
        set useRadianceOverAlpha(VV) {
          (0, NV.f)(this, Ve, VV, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, NV.b)(this, ee, "f")
        }
        set useObjectSpaceNormalMap(VV) {
          (0, NV.f)(this, ee, VV, "f")
        }
        get useParallax() {
          return (0, NV.b)(this, xe, "f")
        }
        set useParallax(VV) {
          (0, NV.f)(this, xe, VV, "f")
        }
        get useParallaxOcclusion() {
          return (0, NV.b)(this, Je, "f")
        }
        set useParallaxOcclusion(VV) {
          (0, NV.f)(this, Je, VV, "f")
        }
        get parallaxScaleBias() {
          return (0, NV.b)(this, Ye, "f")
        }
        set parallaxScaleBias(VV) {
          (0, NV.f)(this, Ye, VV, "f")
        }
        get disableLighting() {
          return (0, NV.b)(this, Ue, "f")
        }
        set disableLighting(VV) {
          (0, NV.f)(this, Ue, VV, "f")
        }
        get forceIrradianceInFragment() {
          return (0, NV.b)(this, ye, "f")
        }
        set forceIrradianceInFragment(VV) {
          (0, NV.f)(this, ye, VV, "f")
        }
        get maxSimultaneousLights() {
          return (0, NV.b)(this, pe, "f")
        }
        set maxSimultaneousLights(VV) {
          (0, NV.f)(this, pe, VV, "f")
        }
        get invertNormalMapX() {
          return (0, NV.b)(this, Qe, "f")
        }
        set invertNormalMapX(VV) {
          (0, NV.f)(this, Qe, VV, "f")
        }
        get invertNormalMapY() {
          return (0, NV.b)(this, ne, "f")
        }
        set invertNormalMapY(VV) {
          (0, NV.f)(this, ne, VV, "f")
        }
        get twoSidedLighting() {
          return (0, NV.b)(this, we, "f")
        }
        set twoSidedLighting(VV) {
          (0, NV.f)(this, we, VV, "f")
        }
        get useAlphaFresnel() {
          return (0, NV.b)(this, Ze, "f")
        }
        set useAlphaFresnel(VV) {
          (0, NV.f)(this, Ze, VV, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, NV.b)(this, ve, "f")
        }
        set useLinearAlphaFresnel(VV) {
          (0, NV.f)(this, ve, VV, "f")
        }
        get environmentBRDFTexture() {
          return (0, NV.b)(this, re, "f")
        }
        set environmentBRDFTexture(VV) {
          (0, NV.f)(this, re, VV, "f")
        }
        get forceNormalForward() {
          return (0, NV.b)(this, ke, "f")
        }
        set forceNormalForward(VV) {
          (0, NV.f)(this, ke, VV, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, NV.b)(this, be, "f")
        }
        set enableSpecularAntiAliasing(VV) {
          (0, NV.f)(this, be, VV, "f")
        }
        get useHorizonOcclusion() {
          return (0, NV.b)(this, Ee, "f")
        }
        set useHorizonOcclusion(VV) {
          (0, NV.f)(this, Ee, VV, "f")
        }
        get useRadianceOcclusion() {
          return (0, NV.b)(this, Be, "f")
        }
        set useRadianceOcclusion(VV) {
          (0, NV.f)(this, Be, VV, "f")
        }
        get unlit() {
          return (0, NV.b)(this, je, "f")
        }
        set unlit(VV) {
          (0, NV.f)(this, je, VV, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, NV.b)(this, qe, "f")
        }
        set applyDecalMapAfterDetailMap(VV) {
          (0, NV.f)(this, qe, VV, "f")
        }
        constructor(UV, XV) {
          super(UV, XV, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), eV.set(this, ((0, NV.l)(this, hx), (0, NV.l)(this, lx, 1))), xV.set(this, ((0, NV.l)(this, Lx), (0, NV.l)(this, fx, 1))), JV.set(this, ((0, NV.l)(this, mx), (0, NV.l)(this, Kx, 1))), YV.set(this, ((0, NV.l)(this, Hx), (0, NV.l)(this, ux, 1))), yV.set(this, ((0, NV.l)(this, sx), (0, NV.l)(this, Sx, !1))), pV.set(this, ((0, NV.l)(this, Ix), (0, NV.l)(this, dx, void 0))), QV.set(this, ((0, NV.l)(this, Ox), (0, NV.l)(this, VJ, void 0))), nV.set(this, ((0, NV.l)(this, eJ), (0, NV.l)(this, xJ, void 0))), wV.set(this, ((0, NV.l)(this, JJ), (0, NV.l)(this, YJ, void 0))), ZV.set(this, ((0, NV.l)(this, UJ), (0, NV.l)(this, yJ, 1))), vV.set(this, ((0, NV.l)(this, pJ), (0, NV.l)(this, QJ, VV.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), rV.set(this, ((0, NV.l)(this, nJ), (0, NV.l)(this, wJ, void 0))), kV.set(this, ((0, NV.l)(this, ZJ), (0, NV.l)(this, vJ, void 0))), bV.set(this, ((0, NV.l)(this, rJ), (0, NV.l)(this, kJ, void 0))), EV.set(this, ((0, NV.l)(this, bJ), (0, NV.l)(this, EJ, void 0))), BV.set(this, ((0, NV.l)(this, BJ), (0, NV.l)(this, jJ, void 0))), jV.set(this, ((0, NV.l)(this, qJ), (0, NV.l)(this, tJ, void 0))), qV.set(this, ((0, NV.l)(this, FJ), (0, NV.l)(this, TJ, void 0))), tV.set(this, ((0, NV.l)(this, PJ), (0, NV.l)(this, AJ, 1))), FV.set(this, ((0, NV.l)(this, NJ), (0, NV.l)(this, XJ, KV.d.White()))), TV.set(this, ((0, NV.l)(this, MJ), (0, NV.l)(this, zJ, !1))), PV.set(this, ((0, NV.l)(this, GJ), (0, NV.l)(this, WJ, void 0))), AV.set(this, ((0, NV.l)(this, RJ), (0, NV.l)(this, gJ, void 0))), MV.set(this, ((0, NV.l)(this, DJ), (0, NV.l)(this, iJ, void 0))), zV.set(this, ((0, NV.l)(this, CJ), (0, NV.l)(this, aJ, void 0))), GV.set(this, ((0, NV.l)(this, oJ), (0, NV.l)(this, cJ, void 0))), WV.set(this, ((0, NV.l)(this, hJ), (0, NV.l)(this, lJ, new KV.d(0, 0, 0)))), RV.set(this, ((0, NV.l)(this, LJ), (0, NV.l)(this, fJ, new KV.d(1, 1, 1)))), gV.set(this, ((0, NV.l)(this, mJ), (0, NV.l)(this, KJ, 1))), iV.set(this, ((0, NV.l)(this, HJ), (0, NV.l)(this, uJ, void 0))), CV.set(this, ((0, NV.l)(this, sJ), (0, NV.l)(this, SJ, new KV.d(1, 1, 1)))), aV.set(this, ((0, NV.l)(this, IJ), (0, NV.l)(this, dJ, new KV.d(1, 1, 1)))), oV.set(this, ((0, NV.l)(this, OJ), (0, NV.l)(this, VY, new KV.d(0, 0, 0)))), cV.set(this, ((0, NV.l)(this, eY), (0, NV.l)(this, xY, 1))), hV.set(this, ((0, NV.l)(this, JY), (0, NV.l)(this, YY, !1))), lV.set(this, ((0, NV.l)(this, UY), (0, NV.l)(this, yY, !1))), LV.set(this, ((0, NV.l)(this, pY), (0, NV.l)(this, QY, !1))), fV.set(this, ((0, NV.l)(this, nY), (0, NV.l)(this, wY, .4))), mV.set(this, ((0, NV.l)(this, ZY), (0, NV.l)(this, vY, !0))), HV.set(this, ((0, NV.l)(this, rY), (0, NV.l)(this, kY, !1))), uV.set(this, ((0, NV.l)(this, bY), (0, NV.l)(this, EY, !0))), sV.set(this, ((0, NV.l)(this, BY), (0, NV.l)(this, jY, !1))), SV.set(this, ((0, NV.l)(this, qY), (0, NV.l)(this, tY, !1))), IV.set(this, ((0, NV.l)(this, FY), (0, NV.l)(this, TY, !1))), dV.set(this, ((0, NV.l)(this, PY), (0, NV.l)(this, AY, !1))), OV.set(this, ((0, NV.l)(this, NY), (0, NV.l)(this, XY, !1))), Ve.set(this, ((0, NV.l)(this, MY), (0, NV.l)(this, zY, !0))), ee.set(this, ((0, NV.l)(this, GY), (0, NV.l)(this, WY, !1))), xe.set(this, ((0, NV.l)(this, RY), (0, NV.l)(this, gY, !1))), Je.set(this, ((0, NV.l)(this, DY), (0, NV.l)(this, iY, !1))), Ye.set(this, ((0, NV.l)(this, CY), (0, NV.l)(this, aY, .05))), Ue.set(this, ((0, NV.l)(this, oY), (0, NV.l)(this, cY, !1))), ye.set(this, ((0, NV.l)(this, hY), (0, NV.l)(this, lY, !1))), pe.set(this, ((0, NV.l)(this, LY), (0, NV.l)(this, fY, 4))), Qe.set(this, ((0, NV.l)(this, mY), (0, NV.l)(this, KY, !1))), ne.set(this, ((0, NV.l)(this, HY), (0, NV.l)(this, uY, !1))), we.set(this, ((0, NV.l)(this, sY), (0, NV.l)(this, SY, !1))), Ze.set(this, ((0, NV.l)(this, IY), (0, NV.l)(this, dY, !1))), ve.set(this, ((0, NV.l)(this, OY), (0, NV.l)(this, VU, !1))), re.set(this, ((0, NV.l)(this, eU), (0, NV.l)(this, xU, null))), ke.set(this, ((0, NV.l)(this, JU), (0, NV.l)(this, YU, !1))), be.set(this, ((0, NV.l)(this, UU), (0, NV.l)(this, yU, !1))), Ee.set(this, ((0, NV.l)(this, pU), (0, NV.l)(this, QU, !0))), Be.set(this, ((0, NV.l)(this, nU), (0, NV.l)(this, wU, !0))), je.set(this, ((0, NV.l)(this, ZU), (0, NV.l)(this, vU, !1))), qe.set(this, ((0, NV.l)(this, rU), (0, NV.l)(this, kU, !1))), (0, NV.l)(this, bU), this._environmentBRDFTexture = DV(this.dD())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(eV) {
          let xV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const YV = Pe.b.Clone((() => new VV(eV, this.dD())), this, {
            cloneTexturesOnlyOnce: xV
          });
          return YV.id = eV, YV.name = eV, this.stencil.copyTo(YV.stencil), this._clonePlugins(YV, JV), YV
        }
        serialize() {
          const VV = super.serialize();
          return VV.customType = "BABYLON.PBRMaterial", VV
        }
        static Parse(eV, xV, JV) {
          const YV = Pe.b.Parse((() => new VV(eV.name, xV)), eV, xV, JV);
          return eV.stencil && YV.stencil.parse(eV.stencil, xV, JV), UV.e._ParsePlugins(eV, YV, xV, JV), eV.clearCoat && YV.clearCoat.parse(eV.clearCoat, xV, JV), eV.anisotropy && YV.anisotropy.parse(eV.anisotropy, xV, JV), eV.brdf && YV.brdf.parse(eV.brdf, xV, JV), eV.sheen && YV.sheen.parse(eV.sheen, xV, JV), eV.subSurface && YV.subSurface.parse(eV.subSurface, xV, JV), eV.iridescence && YV.iridescence.parse(eV.iridescence, xV, JV), YV
        }
      }, eV = new WeakMap, xV = new WeakMap, JV = new WeakMap, YV = new WeakMap, yV = new WeakMap, pV = new WeakMap, QV = new WeakMap, nV = new WeakMap, wV = new WeakMap, ZV = new WeakMap, vV = new WeakMap, rV = new WeakMap, kV = new WeakMap, bV = new WeakMap, EV = new WeakMap, BV = new WeakMap, jV = new WeakMap, qV = new WeakMap, tV = new WeakMap, FV = new WeakMap, TV = new WeakMap, PV = new WeakMap, AV = new WeakMap, MV = new WeakMap, zV = new WeakMap, GV = new WeakMap, WV = new WeakMap, RV = new WeakMap, gV = new WeakMap, iV = new WeakMap, CV = new WeakMap, aV = new WeakMap, oV = new WeakMap, cV = new WeakMap, hV = new WeakMap, lV = new WeakMap, LV = new WeakMap, fV = new WeakMap, mV = new WeakMap, HV = new WeakMap, uV = new WeakMap, sV = new WeakMap, SV = new WeakMap, IV = new WeakMap, dV = new WeakMap, OV = new WeakMap, Ve = new WeakMap, ee = new WeakMap, xe = new WeakMap, Je = new WeakMap, Ye = new WeakMap, Ue = new WeakMap, ye = new WeakMap, pe = new WeakMap, Qe = new WeakMap, ne = new WeakMap, we = new WeakMap, Ze = new WeakMap, ve = new WeakMap, re = new WeakMap, ke = new WeakMap, be = new WeakMap, Ee = new WeakMap, Be = new WeakMap, je = new WeakMap, qe = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(cx[Symbol.metadata] ?? null) : void 0;
        te = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Fe = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ne = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Xe = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Me = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ge = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], We = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ge = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], De = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], ie = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ce = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ae = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], he = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], le = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, XV.o)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], fe = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], me = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ke = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], He = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ue = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], se = [(0, XV.F)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty", null)], Se = [(0, XV.o)("ambient"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ie = [(0, XV.o)("albedo"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], de = [(0, XV.J)("baseWeight"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Oe = [(0, XV.J)("baseDiffuseRoughness"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Vx = [(0, XV.o)("reflectivity"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ex = [(0, XV.o)("reflection"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], xx = [(0, XV.o)("emissive"), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Jx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Yx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ux = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], yx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], px = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], nx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], wx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Zx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], vx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], rx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], kx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], bx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Ex = [(0, XV.J)()], Bx = [(0, XV.J)()], jx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], qx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], tx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Fx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Tx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Px = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsLightsDirty")], Ax = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Nx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsLightsDirty")], Xx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Mx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], zx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Gx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Wx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Rx = [(0, XV.h)("_markAllSubMeshesAsTexturesDirty")], gx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Dx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ix = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], Cx = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsTexturesDirty")], ax = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], ox = [(0, XV.J)(), (0, XV.h)("_markAllSubMeshesAsMiscDirty")], (0, NV.i)(VV, null, te, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "directIntensity" in VV,
            get: VV => VV.directIntensity,
            set: (VV, eV) => {
              VV.directIntensity = eV
            }
          },
          metadata: eV
        }, lx, Lx), (0, NV.i)(VV, null, Fe, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "emissiveIntensity" in VV,
            get: VV => VV.emissiveIntensity,
            set: (VV, eV) => {
              VV.emissiveIntensity = eV
            }
          },
          metadata: eV
        }, fx, mx), (0, NV.i)(VV, null, Ae, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "environmentIntensity" in VV,
            get: VV => VV.environmentIntensity,
            set: (VV, eV) => {
              VV.environmentIntensity = eV
            }
          },
          metadata: eV
        }, Kx, Hx), (0, NV.i)(VV, null, Ne, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: VV => "specularIntensity" in VV,
            get: VV => VV.specularIntensity,
            set: (VV, eV) => {
              VV.specularIntensity = eV
            }
          },
          metadata: eV
        }, ux, sx), (0, NV.i)(VV, null, Xe, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: VV => "disableBumpMap" in VV,
            get: VV => VV.disableBumpMap,
            set: (VV, eV) => {
              VV.disableBumpMap = eV
            }
          },
          metadata: eV
        }, Sx, Ix), (0, NV.i)(VV, null, Me, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "albedoTexture" in VV,
            get: VV => VV.albedoTexture,
            set: (VV, eV) => {
              VV.albedoTexture = eV
            }
          },
          metadata: eV
        }, dx, Ox), (0, NV.i)(VV, null, ze, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "baseWeightTexture" in VV,
            get: VV => VV.baseWeightTexture,
            set: (VV, eV) => {
              VV.baseWeightTexture = eV
            }
          },
          metadata: eV
        }, VJ, eJ), (0, NV.i)(VV, null, Ge, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "baseDiffuseRoughnessTexture" in VV,
            get: VV => VV.baseDiffuseRoughnessTexture,
            set: (VV, eV) => {
              VV.baseDiffuseRoughnessTexture = eV
            }
          },
          metadata: eV
        }, xJ, JJ), (0, NV.i)(VV, null, We, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "ambientTexture" in VV,
            get: VV => VV.ambientTexture,
            set: (VV, eV) => {
              VV.ambientTexture = eV
            }
          },
          metadata: eV
        }, YJ, UJ), (0, NV.i)(VV, null, Re, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: VV => "ambientTextureStrength" in VV,
            get: VV => VV.ambientTextureStrength,
            set: (VV, eV) => {
              VV.ambientTextureStrength = eV
            }
          },
          metadata: eV
        }, yJ, pJ), (0, NV.i)(VV, null, ge, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: VV => "ambientTextureImpactOnAnalyticalLights" in VV,
            get: VV => VV.ambientTextureImpactOnAnalyticalLights,
            set: (VV, eV) => {
              VV.ambientTextureImpactOnAnalyticalLights = eV
            }
          },
          metadata: eV
        }, QJ, nJ), (0, NV.i)(VV, null, De, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "opacityTexture" in VV,
            get: VV => VV.opacityTexture,
            set: (VV, eV) => {
              VV.opacityTexture = eV
            }
          },
          metadata: eV
        }, wJ, ZJ), (0, NV.i)(VV, null, ie, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "reflectionTexture" in VV,
            get: VV => VV.reflectionTexture,
            set: (VV, eV) => {
              VV.reflectionTexture = eV
            }
          },
          metadata: eV
        }, vJ, rJ), (0, NV.i)(VV, null, Ce, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "emissiveTexture" in VV,
            get: VV => VV.emissiveTexture,
            set: (VV, eV) => {
              VV.emissiveTexture = eV
            }
          },
          metadata: eV
        }, kJ, bJ), (0, NV.i)(VV, null, ae, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "reflectivityTexture" in VV,
            get: VV => VV.reflectivityTexture,
            set: (VV, eV) => {
              VV.reflectivityTexture = eV
            }
          },
          metadata: eV
        }, EJ, BJ), (0, NV.i)(VV, null, oe, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "metallicTexture" in VV,
            get: VV => VV.metallicTexture,
            set: (VV, eV) => {
              VV.metallicTexture = eV
            }
          },
          metadata: eV
        }, jJ, qJ), (0, NV.i)(VV, null, ce, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: VV => "metallic" in VV,
            get: VV => VV.metallic,
            set: (VV, eV) => {
              VV.metallic = eV
            }
          },
          metadata: eV
        }, tJ, FJ), (0, NV.i)(VV, null, he, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "roughness" in VV,
            get: VV => VV.roughness,
            set: (VV, eV) => {
              VV.roughness = eV
            }
          },
          metadata: eV
        }, TJ, PJ), (0, NV.i)(VV, null, le, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: VV => "metallicF0Factor" in VV,
            get: VV => VV.metallicF0Factor,
            set: (VV, eV) => {
              VV.metallicF0Factor = eV
            }
          },
          metadata: eV
        }, AJ, NJ), (0, NV.i)(VV, null, Le, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "metallicReflectanceColor" in VV,
            get: VV => VV.metallicReflectanceColor,
            set: (VV, eV) => {
              VV.metallicReflectanceColor = eV
            }
          },
          metadata: eV
        }, XJ, MJ), (0, NV.i)(VV, null, fe, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "useOnlyMetallicFromMetallicReflectanceTexture" in VV,
            get: VV => VV.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (VV, eV) => {
              VV.useOnlyMetallicFromMetallicReflectanceTexture = eV
            }
          },
          metadata: eV
        }, zJ, GJ), (0, NV.i)(VV, null, me, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "metallicReflectanceTexture" in VV,
            get: VV => VV.metallicReflectanceTexture,
            set: (VV, eV) => {
              VV.metallicReflectanceTexture = eV
            }
          },
          metadata: eV
        }, WJ, RJ), (0, NV.i)(VV, null, Ke, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "reflectanceTexture" in VV,
            get: VV => VV.reflectanceTexture,
            set: (VV, eV) => {
              VV.reflectanceTexture = eV
            }
          },
          metadata: eV
        }, gJ, DJ), (0, NV.i)(VV, null, He, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "microSurfaceTexture" in VV,
            get: VV => VV.microSurfaceTexture,
            set: (VV, eV) => {
              VV.microSurfaceTexture = eV
            }
          },
          metadata: eV
        }, iJ, CJ), (0, NV.i)(VV, null, ue, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "bumpTexture" in VV,
            get: VV => VV.bumpTexture,
            set: (VV, eV) => {
              VV.bumpTexture = eV
            }
          },
          metadata: eV
        }, aJ, oJ), (0, NV.i)(VV, null, se, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "lightmapTexture" in VV,
            get: VV => VV.lightmapTexture,
            set: (VV, eV) => {
              VV.lightmapTexture = eV
            }
          },
          metadata: eV
        }, cJ, hJ), (0, NV.i)(VV, null, Se, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "ambientColor" in VV,
            get: VV => VV.ambientColor,
            set: (VV, eV) => {
              VV.ambientColor = eV
            }
          },
          metadata: eV
        }, lJ, LJ), (0, NV.i)(VV, null, Ie, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "albedoColor" in VV,
            get: VV => VV.albedoColor,
            set: (VV, eV) => {
              VV.albedoColor = eV
            }
          },
          metadata: eV
        }, fJ, mJ), (0, NV.i)(VV, null, de, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: VV => "baseWeight" in VV,
            get: VV => VV.baseWeight,
            set: (VV, eV) => {
              VV.baseWeight = eV
            }
          },
          metadata: eV
        }, KJ, HJ), (0, NV.i)(VV, null, Oe, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: VV => "baseDiffuseRoughness" in VV,
            get: VV => VV.baseDiffuseRoughness,
            set: (VV, eV) => {
              VV.baseDiffuseRoughness = eV
            }
          },
          metadata: eV
        }, uJ, sJ), (0, NV.i)(VV, null, Vx, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "reflectivityColor" in VV,
            get: VV => VV.reflectivityColor,
            set: (VV, eV) => {
              VV.reflectivityColor = eV
            }
          },
          metadata: eV
        }, SJ, IJ), (0, NV.i)(VV, null, ex, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "reflectionColor" in VV,
            get: VV => VV.reflectionColor,
            set: (VV, eV) => {
              VV.reflectionColor = eV
            }
          },
          metadata: eV
        }, dJ, OJ), (0, NV.i)(VV, null, xx, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: VV => "emissiveColor" in VV,
            get: VV => VV.emissiveColor,
            set: (VV, eV) => {
              VV.emissiveColor = eV
            }
          },
          metadata: eV
        }, VY, eY), (0, NV.i)(VV, null, Jx, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: VV => "microSurface" in VV,
            get: VV => VV.microSurface,
            set: (VV, eV) => {
              VV.microSurface = eV
            }
          },
          metadata: eV
        }, xY, JY), (0, NV.i)(VV, null, Yx, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: VV => "useLightmapAsShadowmap" in VV,
            get: VV => VV.useLightmapAsShadowmap,
            set: (VV, eV) => {
              VV.useLightmapAsShadowmap = eV
            }
          },
          metadata: eV
        }, YY, UY), (0, NV.i)(VV, null, Ux, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAlphaFromAlbedoTexture" in VV,
            get: VV => VV.useAlphaFromAlbedoTexture,
            set: (VV, eV) => {
              VV.useAlphaFromAlbedoTexture = eV
            }
          },
          metadata: eV
        }, yY, pY), (0, NV.i)(VV, null, yx, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: VV => "forceAlphaTest" in VV,
            get: VV => VV.forceAlphaTest,
            set: (VV, eV) => {
              VV.forceAlphaTest = eV
            }
          },
          metadata: eV
        }, QY, nY), (0, NV.i)(VV, null, px, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: VV => "alphaCutOff" in VV,
            get: VV => VV.alphaCutOff,
            set: (VV, eV) => {
              VV.alphaCutOff = eV
            }
          },
          metadata: eV
        }, wY, ZY), (0, NV.i)(VV, null, Qx, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "useSpecularOverAlpha" in VV,
            get: VV => VV.useSpecularOverAlpha,
            set: (VV, eV) => {
              VV.useSpecularOverAlpha = eV
            }
          },
          metadata: eV
        }, vY, rY), (0, NV.i)(VV, null, nx, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "useMicroSurfaceFromReflectivityMapAlpha" in VV,
            get: VV => VV.useMicroSurfaceFromReflectivityMapAlpha,
            set: (VV, eV) => {
              VV.useMicroSurfaceFromReflectivityMapAlpha = eV
            }
          },
          metadata: eV
        }, kY, bY), (0, NV.i)(VV, null, wx, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRoughnessFromMetallicTextureAlpha" in VV,
            get: VV => VV.useRoughnessFromMetallicTextureAlpha,
            set: (VV, eV) => {
              VV.useRoughnessFromMetallicTextureAlpha = eV
            }
          },
          metadata: eV
        }, EY, BY), (0, NV.i)(VV, null, Zx, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRoughnessFromMetallicTextureGreen" in VV,
            get: VV => VV.useRoughnessFromMetallicTextureGreen,
            set: (VV, eV) => {
              VV.useRoughnessFromMetallicTextureGreen = eV
            }
          },
          metadata: eV
        }, jY, qY), (0, NV.i)(VV, null, vx, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: VV => "useMetallnessFromMetallicTextureBlue" in VV,
            get: VV => VV.useMetallnessFromMetallicTextureBlue,
            set: (VV, eV) => {
              VV.useMetallnessFromMetallicTextureBlue = eV
            }
          },
          metadata: eV
        }, tY, FY), (0, NV.i)(VV, null, rx, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAmbientOcclusionFromMetallicTextureRed" in VV,
            get: VV => VV.useAmbientOcclusionFromMetallicTextureRed,
            set: (VV, eV) => {
              VV.useAmbientOcclusionFromMetallicTextureRed = eV
            }
          },
          metadata: eV
        }, TY, PY), (0, NV.i)(VV, null, kx, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAmbientInGrayScale" in VV,
            get: VV => VV.useAmbientInGrayScale,
            set: (VV, eV) => {
              VV.useAmbientInGrayScale = eV
            }
          },
          metadata: eV
        }, AY, NY), (0, NV.i)(VV, null, bx, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAutoMicroSurfaceFromReflectivityMap" in VV,
            get: VV => VV.useAutoMicroSurfaceFromReflectivityMap,
            set: (VV, eV) => {
              VV.useAutoMicroSurfaceFromReflectivityMap = eV
            }
          },
          metadata: eV
        }, XY, MY), (0, NV.i)(VV, null, Ex, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: VV => "usePhysicalLightFalloff" in VV,
            get: VV => VV.usePhysicalLightFalloff
          },
          metadata: eV
        }, null, hx), (0, NV.i)(VV, null, Bx, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: VV => "useGLTFLightFalloff" in VV,
            get: VV => VV.useGLTFLightFalloff
          },
          metadata: eV
        }, null, hx), (0, NV.i)(VV, null, jx, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRadianceOverAlpha" in VV,
            get: VV => VV.useRadianceOverAlpha,
            set: (VV, eV) => {
              VV.useRadianceOverAlpha = eV
            }
          },
          metadata: eV
        }, zY, GY), (0, NV.i)(VV, null, qx, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: VV => "useObjectSpaceNormalMap" in VV,
            get: VV => VV.useObjectSpaceNormalMap,
            set: (VV, eV) => {
              VV.useObjectSpaceNormalMap = eV
            }
          },
          metadata: eV
        }, WY, RY), (0, NV.i)(VV, null, tx, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: VV => "useParallax" in VV,
            get: VV => VV.useParallax,
            set: (VV, eV) => {
              VV.useParallax = eV
            }
          },
          metadata: eV
        }, gY, DY), (0, NV.i)(VV, null, Fx, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: VV => "useParallaxOcclusion" in VV,
            get: VV => VV.useParallaxOcclusion,
            set: (VV, eV) => {
              VV.useParallaxOcclusion = eV
            }
          },
          metadata: eV
        }, iY, CY), (0, NV.i)(VV, null, Tx, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: VV => "parallaxScaleBias" in VV,
            get: VV => VV.parallaxScaleBias,
            set: (VV, eV) => {
              VV.parallaxScaleBias = eV
            }
          },
          metadata: eV
        }, aY, oY), (0, NV.i)(VV, null, Px, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: VV => "disableLighting" in VV,
            get: VV => VV.disableLighting,
            set: (VV, eV) => {
              VV.disableLighting = eV
            }
          },
          metadata: eV
        }, cY, hY), (0, NV.i)(VV, null, Ax, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: VV => "forceIrradianceInFragment" in VV,
            get: VV => VV.forceIrradianceInFragment,
            set: (VV, eV) => {
              VV.forceIrradianceInFragment = eV
            }
          },
          metadata: eV
        }, lY, LY), (0, NV.i)(VV, null, Nx, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: VV => "maxSimultaneousLights" in VV,
            get: VV => VV.maxSimultaneousLights,
            set: (VV, eV) => {
              VV.maxSimultaneousLights = eV
            }
          },
          metadata: eV
        }, fY, mY), (0, NV.i)(VV, null, Xx, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: VV => "invertNormalMapX" in VV,
            get: VV => VV.invertNormalMapX,
            set: (VV, eV) => {
              VV.invertNormalMapX = eV
            }
          },
          metadata: eV
        }, KY, HY), (0, NV.i)(VV, null, Mx, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: VV => "invertNormalMapY" in VV,
            get: VV => VV.invertNormalMapY,
            set: (VV, eV) => {
              VV.invertNormalMapY = eV
            }
          },
          metadata: eV
        }, uY, sY), (0, NV.i)(VV, null, zx, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: VV => "twoSidedLighting" in VV,
            get: VV => VV.twoSidedLighting,
            set: (VV, eV) => {
              VV.twoSidedLighting = eV
            }
          },
          metadata: eV
        }, SY, IY), (0, NV.i)(VV, null, Gx, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: VV => "useAlphaFresnel" in VV,
            get: VV => VV.useAlphaFresnel,
            set: (VV, eV) => {
              VV.useAlphaFresnel = eV
            }
          },
          metadata: eV
        }, dY, OY), (0, NV.i)(VV, null, Wx, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: VV => "useLinearAlphaFresnel" in VV,
            get: VV => VV.useLinearAlphaFresnel,
            set: (VV, eV) => {
              VV.useLinearAlphaFresnel = eV
            }
          },
          metadata: eV
        }, VU, eU), (0, NV.i)(VV, null, Rx, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: VV => "environmentBRDFTexture" in VV,
            get: VV => VV.environmentBRDFTexture,
            set: (VV, eV) => {
              VV.environmentBRDFTexture = eV
            }
          },
          metadata: eV
        }, xU, JU), (0, NV.i)(VV, null, gx, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: VV => "forceNormalForward" in VV,
            get: VV => VV.forceNormalForward,
            set: (VV, eV) => {
              VV.forceNormalForward = eV
            }
          },
          metadata: eV
        }, YU, UU), (0, NV.i)(VV, null, Dx, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: VV => "enableSpecularAntiAliasing" in VV,
            get: VV => VV.enableSpecularAntiAliasing,
            set: (VV, eV) => {
              VV.enableSpecularAntiAliasing = eV
            }
          },
          metadata: eV
        }, yU, pU), (0, NV.i)(VV, null, ix, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: VV => "useHorizonOcclusion" in VV,
            get: VV => VV.useHorizonOcclusion,
            set: (VV, eV) => {
              VV.useHorizonOcclusion = eV
            }
          },
          metadata: eV
        }, QU, nU), (0, NV.i)(VV, null, Cx, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: VV => "useRadianceOcclusion" in VV,
            get: VV => VV.useRadianceOcclusion,
            set: (VV, eV) => {
              VV.useRadianceOcclusion = eV
            }
          },
          metadata: eV
        }, wU, ZU), (0, NV.i)(VV, null, ax, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: VV => "unlit" in VV,
            get: VV => VV.unlit,
            set: (VV, eV) => {
              VV.unlit = eV
            }
          },
          metadata: eV
        }, vU, rU), (0, NV.i)(VV, null, ox, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: VV => "applyDecalMapAfterDetailMap" in VV,
            get: VV => VV.applyDecalMapAfterDetailMap,
            set: (VV, eV) => {
              VV.applyDecalMapAfterDetailMap = eV
            }
          },
          metadata: eV
        }, kU, bU), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV.PBRMATERIAL_OPAQUE = Te.PBRMATERIAL_OPAQUE, VV.PBRMATERIAL_ALPHATEST = Te.PBRMATERIAL_ALPHATEST, VV.PBRMATERIAL_ALPHABLEND = Te.PBRMATERIAL_ALPHABLEND, VV.PBRMATERIAL_ALPHATESTANDBLEND = Te.PBRMATERIAL_ALPHATESTANDBLEND, VV.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Te.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, VV
    })();
    const CY = "KHR_materials_diffuse_transmission";

    function aY(VV, eV) {
      const xV = eV.subSurface;
      let JV = null;
      return xV.translucencyIntensityTexture ? JV = xV.translucencyIntensityTexture : xV.thicknessTexture && xV.useMaskFromThicknessTexture && (JV = xV.thicknessTexture), JV && !xV.useGltfStyleTextures ? (MV.b.Warn(`${VV}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${eV.name}`, 1), null) : JV
    }
    class oY {
      constructor(VV) {
        this.name = CY, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof iY && this._isExtensionEnabled(xV)) {
          const eV = aY(VV, xV);
          return eV && JV.push(eV), xV.subSurface.translucencyColorTexture && JV.push(xV.subSurface.translucencyColorTexture), JV
        }
        return JV
      }
      _isExtensionEnabled(VV) {
        if (VV.unlit) return !1;
        const eV = VV.subSurface;
        return !!eV.isTranslucencyEnabled && (!VV.unlit && !eV.useAlbedoToTintTranslucency && eV.useGltfStyleTextures && 1 === eV.volumeIndexOfRefraction && 0 === eV.minimumThickness && 0 === eV.maximumThickness)
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((JV => {
          if (xV instanceof iY && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            const JV = xV.subSurface,
              YV = aY(VV, xV),
              UV = 0 == JV.translucencyIntensity ? void 0 : JV.translucencyIntensity,
              yV = this._exporter._materialExporter.getTextureInfo(YV) ?? void 0,
              pV = !JV.translucencyColor || JV.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : JV.translucencyColor.WYV(),
              QV = this._exporter._materialExporter.getTextureInfo(JV.translucencyColorTexture) ?? void 0,
              nV = {
                diffuseTransmissionFactor: UV,
                diffuseTransmissionTexture: yV,
                diffuseTransmissionColorFactor: pV,
                diffuseTransmissionColorTexture: QV
              };
            (yV || QV) && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions = eV.extensions || {}, eV.extensions[CY] = nV
          }
          JV(eV)
        }))
      }
    }
    let cY = !1;

    function hY() {
      cY || (cY = !0, DJ.RegisterExtension(CY, (VV => new oY(VV))))
    }
    hY();
    const lY = "KHR_materials_dispersion";
    class LY {
      constructor() {
        this.name = lY, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(VV) {
        if (VV.unlit) return !1;
        const eV = VV.subSurface;
        return !(!eV.isRefractionEnabled && !eV.isDispersionEnabled)
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof iY && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            const VV = {
              dispersion: xV.subSurface.dispersion
            };
            eV.extensions = eV.extensions || {}, eV.extensions[lY] = VV
          }
          VV(eV)
        }))
      }
    }
    let fY = !1;

    function mY() {
      fY || (fY = !0, DJ.RegisterExtension(lY, (() => new LY)))
    }
    mY();
    const KY = "KHR_materials_emissive_strength";
    class HY {
      constructor() {
        this.name = KY, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(VV, eV, xV) {
        return await new Promise((VV => {
          if (!(xV instanceof iY)) return VV(eV);
          const JV = xV.emissiveColor.scale(xV.emissiveIntensity),
            YV = Math.max(...JV.WYV());
          if (YV > 1) {
            eV.emissiveFactor = JV.scale(1 / YV).WYV(), this._wasUsed = !0;
            const VV = {
              emissiveStrength: YV
            };
            eV.extensions || (eV.extensions = {}), eV.extensions[KY] = VV
          } else eV.emissiveFactor = JV.WYV();
          return VV(eV)
        }))
      }
    }
    let uY = !1;

    function sY() {
      uY || (uY = !0, DJ.RegisterExtension(KY, (() => new HY)))
    }
    sY();
    const SY = "KHR_materials_ior";
    class IY {
      constructor() {
        this.name = SY, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(VV) {
        return !VV.unlit && (VV instanceof de ? 1.5 != VV.specularIor : VV instanceof iY && (void 0 != VV.indexOfRefraction && 1.5 != VV.indexOfRefraction))
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof iY && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            const VV = {
              ior: xV.indexOfRefraction
            };
            eV.extensions = eV.extensions || {}, eV.extensions[SY] = VV
          } else if (xV instanceof de && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            const VV = {
              ior: xV.specularIor
            };
            eV.extensions = eV.extensions || {}, eV.extensions[SY] = VV
          }
          VV(eV)
        }))
      }
    }
    let dY = !1;

    function OY() {
      dY || (dY = !0, DJ.RegisterExtension(SY, (() => new IY)))
    }
    OY();
    const VU = "KHR_materials_iridescence";
    class eU {
      constructor(VV) {
        this.name = VU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof Te) {
          if (xV.iridescence.isEnabled) return xV.iridescence.texture && JV.push(xV.iridescence.texture), xV.iridescence.thicknessTexture && xV.iridescence.thicknessTexture !== xV.iridescence.texture && JV.push(xV.iridescence.thicknessTexture), JV
        } else if (xV instanceof de && xV.thinFilmWeight > 0) return xV.thinFilmWeightTexture && JV.push(xV.thinFilmWeightTexture), xV.thinFilmThicknessTexture && xV.thinFilmThicknessTexture !== xV.thinFilmWeightTexture && JV.push(xV.thinFilmThicknessTexture), JV;
        return []
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof Te) {
            if (!xV.iridescence.isEnabled) return void VV(eV);
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const JV = this._exporter._materialExporter.getTextureInfo(xV.iridescence.texture),
              YV = this._exporter._materialExporter.getTextureInfo(xV.iridescence.thicknessTexture),
              UV = {
                iridescenceFactor: xV.iridescence.intensity,
                iridescenceIor: xV.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: xV.iridescence.minimumThickness,
                iridescenceThicknessMaximum: xV.iridescence.maximumThickness,
                iridescenceTexture: JV ?? void 0,
                iridescenceThicknessTexture: YV ?? void 0
              };
            null === UV.iridescenceTexture && null === UV.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[VU] = UV
          } else if (xV instanceof de) {
            if (xV.thinFilmWeight <= 0) return void VV(eV);
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const JV = this._exporter._materialExporter.getTextureInfo(xV.thinFilmWeightTexture),
              YV = this._exporter._materialExporter.getTextureInfo(xV.thinFilmThicknessTexture),
              UV = {
                iridescenceFactor: xV.thinFilmWeight,
                iridescenceIor: xV.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * xV.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * xV.thinFilmThickness,
                iridescenceTexture: JV ?? void 0,
                iridescenceThicknessTexture: YV ?? void 0
              };
            null === UV.iridescenceTexture && null === UV.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[VU] = UV
          }
          VV(eV)
        }))
      }
    }
    let xU = !1;

    function JU() {
      xU || (xU = !0, DJ.RegisterExtension(VU, (VV => new eU(VV))))
    }
    JU();
    const YU = "KHR_materials_sheen";
    class UU {
      constructor(VV) {
        this.name = YU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        return xV instanceof iY && xV.sheen.isEnabled && xV.sheen.texture ? [xV.sheen.texture] : []
      }
      async postExportMaterialAsync(VV, eV, xV) {
        return await new Promise((VV => {
          if (xV instanceof iY) {
            if (!xV.sheen.isEnabled) return void VV(eV);
            this._wasUsed = !0, null == eV.extensions && (eV.extensions = {});
            const JV = {
              sheenColorFactor: xV.sheen.color.WYV(),
              sheenRoughnessFactor: xV.sheen.roughness ?? 0
            };
            null === JV.sheenColorTexture && null === JV.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(xV), xV.sheen.texture && (JV.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(xV.sheen.texture) ?? void 0), xV.sheen.textureRoughness && !xV.sheen.useRoughnessFromMainTexture ? JV.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(xV.sheen.textureRoughness) ?? void 0 : xV.sheen.texture && xV.sheen.useRoughnessFromMainTexture && (JV.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(xV.sheen.texture) ?? void 0), eV.extensions[YU] = JV
          }
          VV(eV)
        }))
      }
    }
    let yU = !1;

    function pU() {
      yU || (yU = !0, DJ.RegisterExtension(YU, (VV => new UU(VV))))
    }
    pU();
    const QU = "KHR_materials_fuzz";

    function nU(VV, eV) {
      const xV = new GV.f(eV.name, eV.dD());
      return xV._texture = VV, xV.coordinatesIndex = eV.coordinatesIndex, eV instanceof GV.f && (xV.uOffset = eV.uOffset, xV.vOffset = eV.vOffset, xV.uScale = eV.uScale, xV.vScale = eV.vScale, xV.wAng = eV.wAng), xV.wrapU = eV.wrapU, xV.wrapV = eV.wrapV, xV
    }
    class wU {
      constructor(VV) {
        this.name = QU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = VV
      }
      dispose() {
        for (const VV of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[VV].dispose()
        }
        this._mergedTexturesMap = {};
        for (const VV of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[VV].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        if (xV instanceof de) {
          const VV = [];
          if (xV.fuzzWeight > 0) {
            xV.fuzzWeightTexture && VV.push(xV.fuzzWeightTexture);
            let eV = !1;
            if (xV.fuzzRoughnessTexture && (xV._useFuzzRoughnessFromTextureAlpha ? VV.push(xV.fuzzRoughnessTexture) : eV = !0), xV.fuzzColorTexture && !eV && VV.push(xV.fuzzColorTexture), eV) {
              const eV = function(VV) {
                const eV = VV.fuzzColorTexture,
                  xV = eV && eV.getInternalTexture() ? eV.getInternalTexture().uniqueId : "NoFuzzColor",
                  JV = VV.fuzzRoughnessTexture;
                return `FuzzColor_${xV}_FuzzRoughness_${JV&&JV.getInternalTexture()?JV.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(xV);
              if (!this._cachedInternalTexturesMap[eV]) {
                const VV = await async function(VV) {
                  const eV = VV.dD(),
                    xV = VV.fuzzColorTexture,
                    JV = VV.fuzzRoughnessTexture;
                  return xV || JV ? (await yx("FuzzTexture", nx(xV ? px(xV, 0) : Qx(1), xV ? px(xV, 1) : Qx(1), xV ? px(xV, 2) : Qx(1), JV ? px(JV, VV._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Qx(1)), eV)).getInternalTexture() : null
                }(xV);
                VV && (this._cachedInternalTexturesMap[eV] = VV)
              }
              this._cachedInternalTexturesMap[eV] && (xV.fuzzColorTexture && (this._mergedTexturesMap[xV.fuzzColorTexture.uniqueId] = nU(this._cachedInternalTexturesMap[eV], xV.fuzzColorTexture), VV.push(this._mergedTexturesMap[xV.fuzzColorTexture.uniqueId])), xV.fuzzRoughnessTexture && (this._mergedTexturesMap[xV.fuzzRoughnessTexture.uniqueId] = nU(this._cachedInternalTexturesMap[eV], xV.fuzzRoughnessTexture), VV.push(this._mergedTexturesMap[xV.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return VV
        }
        return []
      }
      async postExportMaterialAsync(VV, eV, xV) {
        return await new Promise((VV => {
          if (xV instanceof de) {
            if (0 == xV.fuzzWeight) return void VV(eV);
            this._wasUsed = !0, null == eV.extensions && (eV.extensions = {});
            const JV = {
              fuzzFactor: xV.fuzzWeight,
              fuzzColorFactor: xV.fuzzColor.WYV(),
              fuzzRoughnessFactor: xV.fuzzRoughness
            };
            let YV, UV;
            xV.fuzzWeightTexture && (JV.fuzzTexture = this._exporter._materialExporter.getTextureInfo(xV.fuzzWeightTexture) ?? void 0), xV.fuzzColorTexture && (YV = this._mergedTexturesMap[xV.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[xV.fuzzColorTexture.uniqueId] : xV.fuzzColorTexture, JV.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(YV) ?? void 0), xV.fuzzRoughnessTexture && (UV = this._mergedTexturesMap[xV.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[xV.fuzzRoughnessTexture.uniqueId] : xV.fuzzRoughnessTexture, JV.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(UV) ?? void 0), null === JV.fuzzColorTexture && null === JV.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[QU] = JV
          }
          VV(eV)
        }))
      }
    }
    let ZU = !1;

    function vU() {
      ZU || (ZU = !0, DJ.RegisterExtension(QU, (VV => new wU(VV))))
    }
    vU();
    const rU = "KHR_materials_specular";
    class kU {
      constructor(VV) {
        this.name = rU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        return xV instanceof iY && this._isExtensionEnabled(xV) ? (xV.metallicReflectanceTexture && JV.push(xV.metallicReflectanceTexture), xV.reflectanceTexture && JV.push(xV.reflectanceTexture), JV) : JV
      }
      _isExtensionEnabled(VV) {
        return !VV.unlit && (void 0 != VV.metallicF0Factor && 1 != VV.metallicF0Factor || void 0 != VV.metallicReflectanceColor && !VV.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(VV))
      }
      _hasTexturesExtension(VV) {
        return null != VV.metallicReflectanceTexture || null != VV.reflectanceTexture
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          var JV;
          if (xV instanceof iY && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0, eV.extensions = eV.extensions || {};
            const VV = this._exporter._materialExporter.getTextureInfo(xV.metallicReflectanceTexture) ?? void 0,
              JV = this._exporter._materialExporter.getTextureInfo(xV.reflectanceTexture) ?? void 0,
              YV = {
                specularFactor: 1 == xV.metallicF0Factor ? void 0 : xV.metallicF0Factor,
                specularTexture: VV,
                specularColorFactor: xV.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : xV.metallicReflectanceColor.WYV(),
                specularColorTexture: JV
              };
            this._hasTexturesExtension(xV) && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[rU] = YV
          } else if (xV instanceof de) {
            eV.extensions = eV.extensions || {};
            const YV = this._exporter._materialExporter.getTextureInfo(xV.specularWeightTexture) ?? void 0,
              UV = this._exporter._materialExporter.getTextureInfo(xV.specularColorTexture) ?? void 0,
              yV = 1 == xV.specularWeight ? void 0 : xV.specularWeight,
              pV = xV.specularColor.equalsFloats(1, 1, 1) ? void 0 : xV.specularColor.WYV();
            if (!UV && !YV && void 0 === yV && void 0 === pV) return VV(eV);
            this._wasUsed = !0;
            const QV = {
                specularEdgeColorEnabled: !0
              },
              nV = {
                specularFactor: yV,
                specularTexture: YV,
                specularColorFactor: pV,
                specularColorTexture: UV,
                extensions: {}
              };
            nV.extensions.EXT_materials_specular_edge_color = QV, (JV = this._exporter._glTF).extensionsUsed || (JV.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (YV || UV) && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[rU] = nV
          }
          VV(eV)
        }))
      }
    }
    let bU = !1;

    function EU() {
      bU || (bU = !0, DJ.RegisterExtension(rU, (VV => new kU(VV))))
    }
    EU();
    const BU = "KHR_materials_transmission";
    class jU {
      constructor(VV) {
        this.name = BU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof iY) {
          if (this._isExtensionEnabled(xV)) return xV.subSurface.refractionIntensityTexture && xV.subSurface.useGltfStyleTextures && JV.push(xV.subSurface.refractionIntensityTexture), JV
        } else xV instanceof de && (xV.transmissionWeight > 0 && xV.transmissionWeightTexture && (JV.push(xV.transmissionWeightTexture), xV.transmissionColorTexture && JV.push(xV.transmissionColorTexture)), xV.subsurfaceWeight > 0 && xV.subsurfaceWeightTexture && JV.push(xV.subsurfaceWeightTexture));
        return JV
      }
      _isExtensionEnabled(VV) {
        if (VV instanceof de && !VV.unlit) return VV.transmissionWeight > 0 || VV.subsurfaceWeight > 0;
        if (VV instanceof iY && !VV.unlit) {
          const eV = VV.subSurface;
          return eV.isRefractionEnabled && void 0 != eV.refractionIntensity && 0 != eV.refractionIntensity || null != eV.refractionIntensityTexture && eV.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(VV, eV, xV) {
        if (!this._isExtensionEnabled(xV)) return eV;
        if (xV instanceof iY) {
          this._wasUsed = !0;
          const JV = xV.subSurface,
            YV = {
              transmissionFactor: 0 === JV.refractionIntensity ? void 0 : JV.refractionIntensity
            };
          if (JV.refractionIntensityTexture)
            if (JV.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(xV);
              const VV = this._exporter._materialExporter.getTextureInfo(JV.refractionIntensityTexture);
              VV && (YV.transmissionTexture = VV)
            } else MV.b.Warn(`${VV}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          eV.extensions || (eV.extensions = {}), eV.extensions[BU] = YV
        } else if (xV instanceof de) {
          this._wasUsed = !0;
          const VV = {
            transmissionFactor: (1 - xV.transmissionWeight) * xV.subsurfaceWeight + xV.transmissionWeight
          };
          if (xV.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(xV);
            const eV = this._exporter._materialExporter.getTextureInfo(xV.transmissionWeightTexture);
            eV && (VV.transmissionTexture = eV)
          } else if (xV.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(xV);
            const eV = this._exporter._materialExporter.getTextureInfo(xV.subsurfaceWeightTexture);
            eV && (VV.transmissionTexture = eV)
          }
          if (0 == xV.transmissionDepth && (!xV.transmissionColor.equals(KV.d.White()) || xV.transmissionColorTexture) && eV.pbrMetallicRoughness && (eV.pbrMetallicRoughness.baseColorFactor || (eV.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), eV.pbrMetallicRoughness.baseColorFactor[0] *= xV.transmissionColor.r, eV.pbrMetallicRoughness.baseColorFactor[1] *= xV.transmissionColor.g, eV.pbrMetallicRoughness.baseColorFactor[2] *= xV.transmissionColor.b, xV.transmissionColorTexture && !eV.pbrMetallicRoughness.baseColorTexture)) {
            const VV = this._exporter._materialExporter.getTextureInfo(xV.transmissionColorTexture);
            VV && (eV.pbrMetallicRoughness.baseColorTexture = VV, this._exporter._materialNeedsUVsSet.add(xV))
          }
          eV.extensions || (eV.extensions = {}), eV.extensions[BU] = VV
        }
        return eV
      }
    }
    let qU = !1;

    function tU() {
      qU || (qU = !0, DJ.RegisterExtension(BU, (VV => new jU(VV))))
    }
    tU();
    var FU = xV(41526);
    const TU = "KHR_materials_unlit";
    class PU {
      constructor() {
        this.name = TU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          let JV = !1;
          xV instanceof iY ? JV = xV.unlit : xV instanceof FU.e && (JV = xV.disableLighting), JV && (this._wasUsed = !0, null == eV.extensions && (eV.extensions = {}), eV.extensions[TU] = {}), VV(eV)
        }))
      }
    }
    let AU = !1;

    function NU() {
      AU || (AU = !0, DJ.RegisterExtension(TU, (() => new PU)))
    }
    NU();
    const XU = "KHR_materials_volume";
    class MU {
      constructor(VV) {
        this.name = XU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof iY) {
          if (this._isExtensionEnabled(xV)) return xV.subSurface.thicknessTexture && JV.push(xV.subSurface.thicknessTexture), JV
        } else xV instanceof de && (xV.transmissionWeight > 0 || xV.subsurfaceWeight > 0) && xV.geometryThicknessTexture && JV.push(xV.geometryThicknessTexture);
        return JV
      }
      _isExtensionEnabled(VV) {
        if (VV.unlit) return !1;
        const eV = VV.subSurface;
        return !(!eV.isRefractionEnabled && !eV.isTranslucencyEnabled) && (void 0 != eV.maximumThickness && 0 != eV.maximumThickness || void 0 != eV.tintColorAtDistance && eV.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != eV.tintColor && eV.tintColor != KV.d.White() || this._hasTexturesExtension(VV))
      }
      _hasTexturesExtension(VV) {
        return null != VV.subSurface.thicknessTexture
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof iY && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            const VV = xV.subSurface,
              JV = {
                thicknessFactor: 0 == VV.maximumThickness ? void 0 : VV.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(VV.thicknessTexture) ?? void 0,
                attenuationDistance: VV.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : VV.tintColorAtDistance,
                attenuationColor: VV.tintColor.equalsFloats(1, 1, 1) ? void 0 : VV.tintColor.WYV()
              };
            this._hasTexturesExtension(xV) && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions = eV.extensions || {}, eV.extensions[XU] = JV
          } else if (xV instanceof de) {
            const VV = xV.transmissionWeight > 0 && !xV.geometryThinWalled,
              JV = xV.subsurfaceWeight > 0 && !xV.geometryThinWalled;
            if (VV || JV) {
              this._wasUsed = !0;
              const YV = xV.geometryThickness,
                UV = this._exporter._materialExporter.getTextureInfo(xV.geometryThicknessTexture) ?? void 0;
              let yV;
              UV && this._exporter._materialNeedsUVsSet.add(xV);
              const pV = KV.d.White().WYV();
              if (VV && xV.transmissionDepth > 0) {
                const VV = 1 / xV.transmissionDepth;
                let eV = new oV.o(-Math.log(xV.transmissionColor.r) * VV, -Math.log(xV.transmissionColor.g) * VV, -Math.log(xV.transmissionColor.b) * VV);
                const JV = new oV.o(xV.transmissionScatter.r * VV, xV.transmissionScatter.g * VV, xV.transmissionScatter.b * VV),
                  YV = eV.subtract(JV),
                  UV = Math.min(YV.x, YV.y, YV.z);
                UV < 0 && (YV.x = YV.x - UV, YV.y = YV.y - UV, YV.z = YV.z - UV), eV = YV.add(JV);
                yV = 1 / Math.max(eV.x, eV.y, eV.z), pV[0] = Math.exp(-eV.x * yV), pV[1] = Math.exp(-eV.y * yV), pV[2] = Math.exp(-eV.z * yV)
              } else yV = Number.MAX_VALUE, pV[0] = 1, pV[1] = 1, pV[2] = 1;
              let QV = 1;
              const nV = KV.d.White().WYV();
              if (JV) {
                const VV = xV.subsurfaceRadius,
                  eV = xV.subsurfaceRadiusScale,
                  JV = new oV.o(eV.r, eV.g, eV.b).multiplyByFloats(VV, VV, VV),
                  YV = new oV.o(1 / Math.max(JV.x, 1e-6), 1 / Math.max(JV.y, 1e-6), 1 / Math.max(JV.z, 1e-6));
                QV = 1 / Math.max(YV.x, YV.y, YV.z), nV[0] = Math.exp(-YV.x * QV), nV[1] = Math.exp(-YV.y * QV), nV[2] = Math.exp(-YV.z * QV)
              }
              const wV = (1 - xV.transmissionWeight) * xV.subsurfaceWeight,
                ZV = wV + xV.transmissionWeight,
                vV = 1 / Math.max(ZV, 1e-6),
                rV = xV.transmissionWeight * vV,
                kV = wV * vV,
                bV = pV.map(((VV, eV) => VV * rV + nV[eV] * kV)),
                EV = {
                  thicknessFactor: YV,
                  thicknessTexture: UV,
                  attenuationDistance: yV * rV + QV * kV,
                  attenuationColor: bV
                };
              eV.extensions = eV.extensions || {}, eV.extensions[XU] = EV
            }
          }
          VV(eV)
        }))
      }
    }
    let zU = !1;

    function GU() {
      zU || (zU = !0, DJ.RegisterExtension(XU, (VV => new MU(VV))))
    }
    GU();
    const WU = "KHR_materials_volume_scatter";
    class RU {
      constructor(VV) {
        this.name = WU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        return xV instanceof de && (xV.transmissionWeight > 0 && xV.transmissionScatterTexture && JV.push(xV.transmissionScatterTexture), xV.subsurfaceWeight > 0 && xV.subsurfaceColorTexture && JV.push(xV.subsurfaceColorTexture)), JV
      }
      _isExtensionEnabled(VV) {
        if (VV.unlit) return !1;
        const eV = VV.transmissionWeight > 0 && !VV.geometryThinWalled && VV.transmissionDepth > 0 && !VV.transmissionScatter.equals(KV.d.Black()),
          xV = VV.subsurfaceWeight > 0 && !VV.geometryThinWalled;
        return !(!eV && !xV)
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          if (xV instanceof de && this._isExtensionEnabled(xV)) {
            this._wasUsed = !0;
            let VV = oV.o.Zero(),
              JV = 0;
            if (xV.transmissionWeight > 0) {
              VV = function(VV) {
                const eV = new oV.o(Math.sqrt(1 - VV.x), Math.sqrt(1 - VV.y), Math.sqrt(1 - VV.z)),
                  xV = new oV.o(1, 1, 1),
                  JV = xV.subtract(eV),
                  YV = xV.subtract(new oV.o(.139, .139, .139).multiplyInPlace(eV)),
                  UV = xV.add(new oV.o(1.17, 1.17, 1.17).multiplyInPlace(eV));
                return JV.multiplyInPlace(YV).divideInPlace(UV)
              }(new oV.o(xV.transmissionScatter.r, xV.transmissionScatter.g, xV.transmissionScatter.b)), JV = xV.transmissionScatterAnisotropy
            }
            const YV = oV.o.Zero();
            let UV = 0;
            xV.subsurfaceWeight > 0 && (YV.set(xV.subsurfaceColor.r, xV.subsurfaceColor.g, xV.subsurfaceColor.b), UV = xV.subsurfaceScatterAnisotropy);
            const yV = (1 - xV.transmissionWeight) * xV.subsurfaceWeight,
              pV = yV + xV.transmissionWeight,
              QV = 1 / Math.max(pV, 1e-6),
              nV = xV.transmissionWeight * QV,
              wV = yV * QV,
              ZV = {
                multiscatterColorFactor: VV.multiplyByFloats(nV, nV, nV).addInPlace(YV.multiplyByFloats(wV, wV, wV)).WYV(),
                scatterAnisotropy: JV * nV + UV * wV
              };
            if (xV.subsurfaceWeight > 0 && xV.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(xV);
              const VV = this._exporter._materialExporter.getTextureInfo(xV.subsurfaceColorTexture);
              VV && (ZV.multiscatterColorTexture = VV)
            } else if (xV.transmissionWeight > 0 && xV.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(xV);
              const VV = this._exporter._materialExporter.getTextureInfo(xV.transmissionScatterTexture);
              VV && (ZV.multiscatterColorTexture = VV)
            }
            eV.extensions = eV.extensions || {}, eV.extensions[WU] = ZV
          }
          VV(eV)
        }))
      }
    }
    let gU = !1;

    function DU() {
      gU || (gU = !0, DJ.RegisterExtension(WU, (VV => new RU(VV)), 101))
    }
    DU();
    const iU = "KHR_materials_diffuse_roughness";
    class CU {
      constructor(VV) {
        this.name = iU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(VV, eV, xV) {
        const JV = [];
        if (xV instanceof Te) {
          if (xV._baseDiffuseRoughness) return xV._baseDiffuseRoughnessTexture && JV.push(xV._baseDiffuseRoughnessTexture), JV
        } else if (xV instanceof de && xV.baseDiffuseRoughness) return xV.baseDiffuseRoughnessTexture && JV.push(xV.baseDiffuseRoughnessTexture), JV;
        return []
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          let JV = null,
            YV = null;
          if (xV instanceof Te ? (JV = xV._baseDiffuseRoughness, YV = xV._baseDiffuseRoughnessTexture) : xV instanceof de && (JV = xV.baseDiffuseRoughness, YV = xV.baseDiffuseRoughnessTexture), !JV) return void VV(eV);
          this._wasUsed = !0, eV.extensions = eV.extensions || {};
          const UV = {
            diffuseRoughnessFactor: JV,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(YV) ?? void 0
          };
          null !== UV.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(xV), eV.extensions[iU] = UV, VV(eV)
        }))
      }
    }
    let aU = !1;

    function oU() {
      aU || (aU = !0, DJ.RegisterExtension(iU, (VV => new CU(VV))))
    }
    oU();
    const cU = "KHR_materials_openpbr";
    class hU {
      constructor() {
        this.name = cU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(VV, eV, xV) {
        return new Promise((VV => {
          xV instanceof de && (this._wasUsed = !0, eV.extensions = eV.extensions || {}, eV.extensions[cU] = {}), VV(eV)
        }))
      }
    }
    let lU = !1;

    function LU() {
      lU || (lU = !0, DJ.RegisterExtension(cU, (() => new hU)))
    }
    LU();
    const fU = "KHR_texture_transform";
    class mU {
      constructor() {
        this.name = fU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(VV, eV, xV) {
        if (xV.dD() || Ae.j.Warn(`${VV}: "scene" is not defined for Babylon texture ${xV.name}!`), (0 !== xV.uAng || 0 !== xV.vAng) && (Ae.j.Warn(`${VV}: Texture ${xV.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== xV.uRotationCenter || 0 !== xV.vRotationCenter)) return;
        const JV = {};
        let YV = !1;
        if (0 === xV.uOffset && 0 === xV.vOffset || (JV.offset = [xV.uOffset, xV.vOffset], YV = !0), 1 === xV.uScale && 1 === xV.vScale || (JV.scale = [xV.uScale, xV.vScale], YV = !0), 0 !== xV.wAng) {
          if (0 !== xV.uRotationCenter || 0 !== xV.vRotationCenter) {
            if (xV.homogeneousRotationInUVTransform && xV.uScale !== xV.vScale) return void Ae.j.Warn(`${VV}: Texture ${xV.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${fU}.`);
            Ae.j.Warn(`${VV}: Texture ${xV.name} with non-origin rotation center will be exported using an adjusted offset with ${fU}.`), JV.offset = function(VV) {
              const {
                uOffset: eV,
                vOffset: xV,
                uRotationCenter: JV,
                vRotationCenter: YV,
                uScale: UV,
                vScale: yV,
                wAng: pV
              } = VV, QV = Math.cos(pV), nV = Math.sin(pV), wV = JV * UV, ZV = YV * yV;
              return [eV + (wV * (1 - QV) + ZV * nV), xV + (ZV * (1 - QV) - wV * nV)]
            }(xV)
          }
          JV.rotation = -xV.wAng, YV = !0
        }
        0 !== xV.coordinatesIndex && (JV.texCoord = xV.coordinatesIndex, YV = !0), YV && (this._wasUsed = !0, eV.extensions || (eV.extensions = {}), eV.extensions[fU] = JV)
      }
    }
    let KU = !1;

    function HU() {
      KU || (KU = !0, DJ.RegisterExtension(fU, (() => new mU)))
    }
    HU();
    var uU = xV(41300);
    const sU = "KHR_texture_basisu";
    class SU {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(VV) {
        this.name = sU, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      postExportTexture(VV, eV) {
        const xV = this._exporter._textures[eV.index],
          JV = xV.source;
        if (void 0 === JV) return;
        const YV = this._exporter._images[JV];
        "image/ktx2" === (YV.mimeType || (0, uU.h)(YV.uri)) && (xV.source = void 0, xV.extensions || (xV.extensions = {}), xV.extensions[sU] = {
          source: JV
        }, this._wasUsed = !0)
      }
    }
    let IU = !1;

    function dU() {
      IU || (IU = !0, DJ.RegisterExtension(sU, (VV => new SU(VV))))
    }
    dU();
    const OU = "EXT_texture_webp";
    class Vy {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(VV) {
        this.name = OU, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      postExportTexture(VV, eV) {
        const xV = this._exporter._textures[eV.index],
          JV = xV.source;
        if (void 0 === JV) return;
        const YV = this._exporter._images[JV];
        "image/webp" === (YV.mimeType || (0, uU.h)(YV.uri)) && (xV.source = void 0, xV.extensions || (xV.extensions = {}), xV.extensions[OU] = {
          source: JV
        }, this._wasUsed = !0)
      }
    }
    let ey = !1;

    function xy() {
      ey || (ey = !0, DJ.RegisterExtension(OU, (VV => new Vy(VV))))
    }
    xy();
    const Jy = "EXT_texture_avif";
    class Yy {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(VV) {
        this.name = Jy, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = VV
      }
      dispose() {}
      postExportTexture(VV, eV) {
        const xV = this._exporter._textures[eV.index],
          JV = xV.source;
        if (void 0 === JV) return;
        const YV = this._exporter._images[JV];
        "image/avif" === (YV.mimeType || (0, uU.h)(YV.uri)) && (xV.source = void 0, xV.extensions || (xV.extensions = {}), xV.extensions[Jy] = {
          source: JV
        }, this._wasUsed = !0)
      }
    }
    let Uy = !1;

    function yy() {
      Uy || (Uy = !0, DJ.RegisterExtension(Jy, (VV => new Yy(VV))))
    }
    yy();
    class py {
      static CreateSTL(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const nV = function(VV, eV, xV) {
            const YV = [3 * VV[xV], 3 * VV[xV + 1], 3 * VV[xV + 2]],
              UV = [new JV.Ik(eV[YV[0]], eV[YV[0] + 2], eV[YV[0] + 1]), new JV.Ik(eV[YV[1]], eV[YV[1] + 2], eV[YV[1] + 1]), new JV.Ik(eV[YV[2]], eV[YV[2] + 2], eV[YV[2] + 1])],
              yV = UV[0].subtract(UV[1]),
              pV = UV[2].subtract(UV[1]);
            return {
              v: UV,
              n: JV.Ik.Cross(pV, yV).normalize()
            }
          },
          ZV = function(VV, eV, xV, JV) {
            return eV = vV(VV, eV, xV.x, JV), eV = vV(VV, eV, xV.y, JV), vV(VV, eV, xV.z, JV)
          },
          vV = function(VV, eV, xV, JV) {
            return VV.setFloat32(eV, xV, JV), eV + 4
          },
          kV = function(VV) {
            if (pV) {
              let eV = VV;
              VV instanceof rV.e && (eV = VV.XUV);
              const xV = eV.getVerticesData(wV.c.PositionKind, !0, !0);
              if (!xV) return [];
              const YV = JV.Ik.Zero();
              let UV;
              for (UV = 0; UV < xV.length; UV += 3) JV.Ik.TransformCoordinatesFromFloatsToRef(xV[UV], xV[UV + 1], xV[UV + 2], VV.computeWorldMatrix(!0), YV).toArray(xV, UV);
              return xV
            }
            return VV.getVerticesData(wV.c.PositionKind) || []
          };
        pV && (yV = !0);
        let bV = "",
          EV = 0,
          BV = 0;
        if (YV) {
          for (let xV = 0; xV < VV.length; xV++) {
            const eV = VV[xV].RYV();
            EV += eV ? eV.length / 3 : 0
          }
          const eV = new ArrayBuffer(84 + 50 * EV);
          bV = new DataView(eV), BV += 80, bV.setUint32(BV, EV, UV), BV += 4
        } else QV || (bV = "solid stlmesh\r\n");
        for (let JV = 0; JV < VV.length; JV++) {
          const eV = VV[JV];
          !YV && QV && (bV += "solid " + eV.name + "\r\n"), !yV && eV instanceof nJ.e && eV.bakeCurrentTransformIntoVertices();
          const xV = kV(eV),
            pV = eV.RYV() || [];
          for (let VV = 0; VV < pV.length; VV += 3) {
            const eV = nV(pV, xV, VV);
            YV ? (BV = ZV(bV, BV, eV.n, UV), BV = ZV(bV, BV, eV.v[0], UV), BV = ZV(bV, BV, eV.v[1], UV), BV = ZV(bV, BV, eV.v[2], UV), BV += 2) : (bV += "\tfacet normal " + eV.n.x + " " + eV.n.y + " " + eV.n.z + "\r\n", bV += "\t\touter loop\r\n", bV += "\t\t\tvertex " + eV.v[0].x + " " + eV.v[0].y + " " + eV.v[0].z + "\r\n", bV += "\t\t\tvertex " + eV.v[1].x + " " + eV.v[1].y + " " + eV.v[1].z + "\r\n", bV += "\t\t\tvertex " + eV.v[2].x + " " + eV.v[2].y + " " + eV.v[2].z + "\r\n", bV += "\t\tendloop\r\n", bV += "\tendfacet\r\n")
          }!YV && QV && (bV += "endsolid " + name + "\r\n")
        }
        if (YV || QV || (bV += "endsolid stlmesh"), eV) {
          const VV = document.createElement("a"),
            eV = new Blob([bV], {
              type: "application/octet-stream"
            });
          VV.href = window.URL.createObjectURL(eV), VV.download = xV + ".stl", VV.click()
        }
        return bV
      }
    }

    function Qy(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const YV = [];
      for (let UV = 0; UV < VV.length / xV; UV++) {
        const yV = VV[UV * xV] * (JV ? -1 : 1),
          pV = VV[UV * xV + 1],
          QV = VV[UV * xV + 2];
        YV.push(`(${yV.toPrecision(eV.precision)}, ${pV.toPrecision(eV.precision)}, ${QV.toPrecision(eV.precision)})`)
      }
      return YV.join(", ")
    }

    function ny(VV, eV) {
      const xV = [];
      for (let JV = 0; JV < VV.length / 2; JV++) {
        const YV = VV[2 * JV],
          UV = VV[2 * JV + 1];
        xV.push(`(${YV.toPrecision(eV.precision)}, ${(1-UV).toPrecision(eV.precision)})`)
      }
      return xV.join(", ")
    }

    function wy(VV, eV, xV, JV) {
      const YV = VV.getVerticesData(wV.c.PositionKind),
        UV = VV.getVerticesData(wV.c.NormalKind);
      if (YV && UV) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${xV}"\n\t\tint[] faceVertexCounts = [${function(VV){const eV=VV.RYV()?.length?VV.getTotalIndices():VV.getTotalVertices();return Array(eV/3).fill(3).join(", ")}(VV)}]\n\t\tint[] faceVertexIndices = [${function(VV){const eV=VV.RYV(),xV=eV?.length??VV.getTotalVertices(),JV=[];if(null!==eV)for(let YV=0;YV<xV;YV++)JV.push(eV[YV]);else for(let YV=0;YV<xV;YV++)JV.push(YV);return JV.join(", ")}(VV)}]\n\t\tnormal3f[] normals = [${Qy(UV,eV,void 0,JV)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Qy(YV,eV,void 0,JV)}]\n        ${function(VV,eV){let xV="";for(let YV=0;YV<4;YV++){const JV=YV>0?YV:"",UV=VV.getVerticesData(wV.c.UVKind+(JV?JV+1:""));UV&&(xV+=`\n\t\ttexCoord2f[] primvars:st${JV} = [${ny(UV,eV)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const JV=VV.getVerticesData(wV.c.ColorKind);return JV&&(xV+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Qy(JV, eV, JV.length / VV.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),xV}(VV,eV)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Zy(VV, eV, xV, JV) {
      return `\n        def "Geometry"\n        {\n        ${wy(VV,eV,xV,JV)}\n        }\n        `
    }

    function vy(VV) {
      let eV = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return eV += VV, fflate.strToU8(eV)
    }

    function ry(VV) {
      const eV = VV.m;
      return `( ${ky(eV,0)}, ${ky(eV,4)}, ${ky(eV,8)}, ${ky(eV,12)} )`
    }

    function ky(VV, eV) {
      return `(${VV[eV+0]}, ${VV[eV+1]}, ${VV[eV+2]}, ${VV[eV+3]})`
    }

    function by(VV, eV) {
      const xV = "Object_" + VV.uniqueId,
        JV = ry(eV);
      return `def Xform "${xV}" (\n\tprepend references = @./geometries/Geometry_${VV.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${JV}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${VV.material.uniqueId}>\n}\n\n`
    }

    function Ey(VV) {
      switch (VV) {
        case PV.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case PV.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case PV.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function By(VV) {
      return `(${VV.x}, ${VV.y})`
    }

    function jy(VV) {
      return `(${VV.r}, ${VV.g}, ${VV.b})`
    }

    function qy(VV) {
      return "image/jpeg" === VV || "image/png" === VV
    }

    function ty(VV, eV, xV, YV, UV, yV) {
      const pV = VV.getInternalTexture().uniqueId + "_" + VV.invertY,
        nV = VV.mimeType || (0, QV.e)(VV.getInternalTexture()?.url ?? ""),
        wV = qy(nV) ? nV : "image/png",
        ZV = "image/jpeg" === wV ? "jpg" : "png";
      UV[pV] = {
        texture: VV,
        mimeType: wV,
        ext: ZV
      };
      const vV = VV.coordinatesIndex > 0 ? "st" + VV.coordinatesIndex : "st",
        rV = new JV.Vector2(VV.uScale, VV.vScale),
        kV = new JV.Vector2(VV.uOffset, VV.vOffset),
        bV = VV.wAng,
        EV = Math.sin(bV),
        BV = Math.cos(bV);
      return kV.y = 1 - kV.y - rV.y, kV.x += EV * rV.x, kV.y += (1 - BV) * rV.y, `\n    def Shader "PrimvarReader_${xV}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${vV}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${xV}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${eV.uniqueId}/PrimvarReader_${xV}.outputs:result>\n        float inputs:rotation = ${(bV*(180/Math.PI)).toFixed(yV.precision)}\n        float2 inputs:scale = ${By(rV)}\n        float2 inputs:translation = ${By(kV)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${VV.uniqueId}_${xV}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${pV}.${ZV}@\n        float2 inputs:st.connect = </Root/Materials/Material_${eV.uniqueId}/Transform2d_${xV}.outputs:result>\n        ${YV?"float4 inputs:scale = "+function(VV){return`(${VV.r}, ${VV.g}, ${VV.b}, 1.0)`}(YV):""}\n        token inputs:sourceColorSpace = "${VV.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Ey(VV.wrapU)}"\n        token inputs:wrapT = "${Ey(VV.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${eV.needAlphaBlending()||eV.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Fy(VV, eV, xV) {
      const JV = "\t\t\t",
        YV = [],
        UV = [],
        {
          diffuseMap: yV,
          diffuse: pV,
          alphaCutOff: QV,
          emissiveMap: nV,
          emissive: wV,
          normalMap: ZV,
          roughnessMap: vV,
          roughnessChannel: rV,
          roughness: kV,
          metalnessMap: bV,
          metalnessChannel: BV,
          metalness: jV,
          aoMap: qV,
          aoMapChannel: tV,
          aoMapIntensity: FV,
          alphaMap: TV,
          ior: PV,
          clearCoatEnabled: AV,
          clearCoat: NV,
          clearCoatMap: XV,
          clearCoatRoughness: MV,
          clearCoatRoughnessMap: zV
        } = function(VV) {
          const eV = {
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
          return VV instanceof UJ.StandardMaterial ? {
            ...eV,
            diffuseMap: VV.diffuseTexture,
            diffuse: VV.diffuseColor,
            alphaCutOff: VV.alphaCutOff,
            emissiveMap: VV.emissiveTexture,
            emissive: VV.emissiveColor,
            roughness: 1,
            alphaMap: VV.opacityTexture
          } : VV instanceof Te ? {
            ...eV,
            diffuseMap: VV._albedoTexture,
            diffuse: VV._albedoColor,
            alphaCutOff: VV._alphaCutOff,
            emissiveMap: VV._emissiveTexture,
            emissive: VV._emissiveColor,
            normalMap: VV._bumpTexture,
            roughnessMap: VV._metallicTexture,
            roughnessChannel: VV._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: VV._roughness ?? 1,
            metalnessMap: VV._metallicTexture,
            metalnessChannel: VV._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: VV._metallic ?? 0,
            aoMap: VV._ambientTexture,
            aoMapChannel: VV._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: VV._ambientTextureStrength,
            alphaMap: VV._opacityTexture,
            ior: VV.subSurface.indexOfRefraction,
            clearCoatEnabled: VV.clearCoat.isEnabled,
            clearCoat: VV.clearCoat.intensity,
            clearCoatMap: VV.clearCoat.texture,
            clearCoatRoughness: VV.clearCoat.roughness,
            clearCoatRoughnessMap: VV.clearCoat.useRoughnessFromMainTexture ? VV.clearCoat.texture : VV.clearCoat.textureRoughness
          } : eV
        }(VV);
      return null !== yV ? (YV.push(`${JV}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${yV.uniqueId}_diffuse.outputs:rgb>`), VV.needAlphaBlending() ? YV.push(`${JV}float inputs:opacity.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${yV.uniqueId}_diffuse.outputs:a>`) : VV.needAlphaTesting() && (YV.push(`${JV}float inputs:opacity.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${yV.uniqueId}_diffuse.outputs:a>`), YV.push(`${JV}float inputs:opacityThreshold = ${QV}`)), UV.push(ty(yV, VV, "diffuse", pV, eV, xV))) : YV.push(`${JV}color3f inputs:diffuseColor = ${jy(pV||EV.Color3.White())}`), null !== nV ? (YV.push(`${JV}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${nV.uniqueId}_emissive.outputs:rgb>`), UV.push(ty(nV, VV, "emissive", wV, eV, xV))) : wV && wV.toLuminance() > 0 && YV.push(`${JV}color3f inputs:emissiveColor = ${jy(wV)}`), null !== ZV && (YV.push(`${JV}normal3f inputs:normal.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${ZV.uniqueId}_normal.outputs:rgb>`), UV.push(ty(ZV, VV, "normal", null, eV, xV))), null !== qV && (YV.push(`${JV}float inputs:occlusion.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${qV.uniqueId}_occlusion.outputs:${tV}>`), UV.push(ty(qV, VV, "occlusion", new EV.Color3(FV, FV, FV), eV, xV))), null !== vV ? (YV.push(`${JV}float inputs:roughness.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${vV.uniqueId}_roughness.outputs:${rV}>`), UV.push(ty(vV, VV, "roughness", new EV.Color3(kV, kV, kV), eV, xV))) : YV.push(`${JV}float inputs:roughness = ${kV}`), null !== bV ? (YV.push(`${JV}float inputs:metallic.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${bV.uniqueId}_metallic.outputs:${BV}>`), UV.push(ty(bV, VV, "metallic", new EV.Color3(jV, jV, jV), eV, xV))) : YV.push(`${JV}float inputs:metallic = ${jV}`), null !== TV ? (YV.push(`${JV}float inputs:opacity.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${TV.uniqueId}_opacity.outputs:r>`), YV.push(`${JV}float inputs:opacityThreshold = 0.0001`), UV.push(ty(TV, VV, "opacity", null, eV, xV))) : YV.push(`${JV}float inputs:opacity = ${VV.alpha}`), AV && (null !== XV ? (YV.push(`${JV}float inputs:clearcoat.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${XV.uniqueId}_clearcoat.outputs:r>`), UV.push(ty(XV, VV, "clearcoat", new EV.Color3(NV, NV, NV), eV, xV))) : YV.push(`${JV}float inputs:clearcoat = ${NV}`), null !== zV ? (YV.push(`${JV}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${VV.uniqueId}/Texture_${zV.uniqueId}_clearcoatRoughness.outputs:g>`), UV.push(ty(zV, VV, "clearcoatRoughness", new EV.Color3(MV, MV, MV), eV, xV))) : YV.push(`${JV}float inputs:clearcoatRoughness = ${MV}`)), YV.push(`${JV}float inputs:ior = ${PV}`), `\n\tdef Material "Material_${VV.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${YV.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${VV.uniqueId}/PreviewSurface.outputs:surface>\n\n${UV.join("\n")}\n\n\t}\n`
    }

    function Ty(VV) {
      VV.computeWorldMatrix(!0);
      const eV = VV.getWorldMatrix().clone(),
        xV = VV.dD().useRightHandedSystem;
      let JV = VV.material?._getEffectiveOrientation(VV) ?? VV.sideOrientation,
        yV = !xV,
        pV = VV.parent;
      for (; pV;) {
        if (ix(pV, xV) && null === pV.parent) {
          xV || (eV.multiplyToRef(pV.getWorldMatrix().invert(), eV), JV = JV === UV.e.ClockWiseSideOrientation ? UV.e.CounterClockWiseSideOrientation : UV.e.ClockWiseSideOrientation), yV = !1;
          break
        }
        pV = pV.parent
      }
      return eV.determinant() < 0 && YV.Tools.Warn(`Mesh ${VV.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: eV,
        windingOrder: JV === UV.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: yV
      }
    }
    async function Py(VV, eV, xV) {
      const UV = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...eV
      };
      "undefined" === typeof fflate && await YV.Tools.LoadScriptAsync(UV.fflateUrl);
      const yV = {};
      yV[UV.modelFileName] = null;
      let pV = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      pV += function(VV) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===VV.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${VV.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${VV.planeAnchoringAlignment}"`:""}\n            `
      }(UV);
      const QV = {};
      for (const JV of VV.meshes) {
        if (0 === JV.getTotalVertices()) continue;
        const VV = JV,
          eV = VV.geometry,
          nV = VV.material;
        if (!nV || !eV || xV && !xV(VV)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(nV.getClassName())) {
          const xV = "geometries/Geometry_" + eV.uniqueId + ".usda",
            {
              matrix: JV,
              windingOrder: YV,
              convertToRightHanded: wV
            } = Ty(VV);
          if (!(xV in yV)) {
            const VV = Zy(eV, UV, YV, wV);
            yV[xV] = vy(VV)
          }
          nV.uniqueId in QV || (QV[nV.uniqueId] = nV), pV += by(VV, JV)
        } else YV.Tools.Warn("USDZExportAsync does not support this material type: " + nV.getClassName())
      }
      VV.activeCamera && UV.exportCamera && (pV += function(VV, eV) {
        const xV = "Camera_" + VV.uniqueId,
          YV = ry(JV.Matrix.RotationY(Math.PI).multiply(VV.getWorldMatrix()));
        if (VV.mode === PV.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${xV}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${YV}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${VV.minZ.toPrecision(eV.precision)}, ${VV.maxZ.toPrecision(eV.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(VV.orthoLeft||1)+Math.abs(VV.orthoRight||1))).toPrecision(eV.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(VV.orthoTop||1)+Math.abs(VV.orthoBottom||1))).toPrecision(eV.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const JV = VV.sk().getAspectRatio(VV),
            UV = eV.cameraSensorWidth || 35;
          return `def Camera "${xV}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${YV}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${VV.minZ.toPrecision(eV.precision)}, ${VV.maxZ.toPrecision(eV.precision)})\n\t\t\tfloat focalLength = ${(UV/(2*Math.tan(.5*VV.fov))).toPrecision(eV.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(UV*JV).toPrecision(eV.precision)}\n\t\t\tfloat verticalAperture = ${(UV/JV).toPrecision(eV.precision)}            \n\t\t}\n\t\n\t`
        }
      }(VV.activeCamera, UV)), pV += "\n            }\n        }";
      const nV = {};
      pV += function(VV, eV, xV) {
        const JV = [];
        for (const YV in VV) {
          const UV = VV[YV];
          JV.push(Fy(UV, eV, xV))
        }
        return `\n    def "Materials"\n{\n${JV.join("")}\n}\n\n`
      }(QV, nV, UV), pV += "\n    }", yV[UV.modelFileName] = fflate.strToU8(pV);
      for (const JV in nV) {
        const {
          texture: VV,
          ext: eV,
          mimeType: xV
        } = nV[JV], YV = await Bx(VV);
        if (YV && qy(YV.mimeType) && YV.mimeType === xV) yV[`textures/Texture_${JV}.${eV}`] = new Uint8Array(YV.data);
        else {
          const YV = VV.getSize(),
            UV = await (0, tV.e)(VV),
            pV = await AV.DumpTools.DumpDataAsync(YV.width, YV.height, UV, xV, void 0, !1, !0);
          yV[`textures/Texture_${JV}.${eV}`] = new Uint8Array(pV).slice()
        }
      }
      let wV = 0;
      for (const JV in yV) {
        const VV = yV[JV];
        if (!VV) continue;
        wV += 34 + JV.length;
        const eV = 63 & wV;
        if (4 !== eV) {
          const xV = new Uint8Array(64 - eV);
          yV[JV] = [VV, {
            extra: {
              12345: xV
            }
          }]
        }
        wV = VV.length
      }
      return fflate.zipSync(yV, {
        level: 0
      })
    }
    var Ay = xV(42435);
    class Ny {
      static Export(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (!VV || 0 === VV.bones.length) throw new Error("Invalid or empty skeleton provided");
        let JV = eV;
        eV && 0 !== eV.length || (JV = VV.animations.map((VV => VV.name)));
        let YV = null;
        for (const nV of JV) {
          const eV = VV.getAnimationRange(nV);
          eV && (YV = YV ? new Ay.e("animation-range", Math.min(YV.from, eV.from), Math.max(YV.to, eV.to)) : eV)
        }
        if (!YV && (VV.animations.length > 0 && (YV = VV.getAnimationRange(VV.animations[0].name)), !YV)) throw new Error("No animation range found in skeleton");
        const UV = xV || 1 / (VV.animations[0]?.framePerSecond || 30),
          yV = this._BuildBoneHierarchy(VV, JV);
        let pV = 0;
        for (const nV of yV) nV.positionKeys.length > 0 && (pV = Math.max(pV, nV.positionKeys.length)), nV.rotationKeys.length > 0 && (pV = Math.max(pV, nV.rotationKeys.length));
        0 === pV && (pV = Math.floor((YV.to - YV.from) / UV) + 1);
        let QV = "";
        return QV += "HIERARCHY\n", QV += this._ExportHierarchy(yV, 0), QV += "MOTION\n", QV += `Frames: ${pV}\n`, QV += `Frame Time: ${UV.toFixed(6)}\n`, QV += this._ExportMotionData(yV, pV, 0, JV), QV
      }
      static _BuildBoneHierarchy(VV, eV) {
        const xV = new Map,
          JV = [];
        for (const YV of VV.bones) {
          const VV = {
            bone: YV,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          xV.set(YV, VV)
        }
        for (const YV of VV.bones) {
          const VV = xV.get(YV);
          if (YV.animations.length > 0)
            for (const xV of YV.animations) eV.includes(xV.name) && ("position" === xV.targetProperty ? (VV.hasPositionChannels = !0, VV.positionKeys.push(...xV.getKeys())) : "rotationQuaternion" === xV.targetProperty && (VV.hasRotationChannels = !0, VV.rotationKeys.push(...xV.getKeys())));
          if (YV.getParent()) {
            const eV = xV.get(YV.getParent());
            eV && eV.children.push(VV)
          } else JV.push(VV)
        }
        return JV
      }
      static _ExportHierarchy(VV, eV) {
        let xV = "";
        const JV = "    ".repeat(eV);
        for (const YV of VV) {
          const VV = YV.bone;
          if (this._IsEndSite(YV)) {
            xV += `${JV}End Site\n`, xV += `${JV}{\n`;
            const eV = this._GetBoneOffset(VV);
            xV += `${JV}    OFFSET ${eV.x.toFixed(6)} ${eV.y.toFixed(6)} ${eV.z.toFixed(6)}\n`, xV += `${JV}}\n`
          } else {
            xV += `${0===eV?"ROOT":`${JV}JOINT`} ${VV.name}\n`, xV += `${JV}{\n`;
            const UV = this._GetBoneOffset(VV);
            xV += `${JV}    OFFSET ${UV.x.toFixed(6)} ${UV.y.toFixed(6)} ${UV.z.toFixed(6)}\n`;
            const yV = [];
            YV.hasPositionChannels && yV.push("Xposition", "Yposition", "Zposition"), YV.hasRotationChannels && yV.push("Zrotation", "Xrotation", "Yrotation"), yV.length > 0 && (xV += `${JV}    CHANNELS ${yV.length} ${yV.join(" ")}\n`), YV.children.length > 0 && (xV += this._ExportHierarchy(YV.children, eV + 1)), xV += `${JV}}\n`
          }
        }
        return xV
      }
      static _IsEndSite(VV) {
        return 0 === VV.children.length
      }
      static _GetBoneOffset(VV) {
        try {
          if (!VV.getParent()) return VV.getRestMatrix().getTranslation();
          return VV.getLocalMatrix().getTranslation()
        } catch (eV) {
          return JV.Ik.Zero()
        }
      }
      static _ExportMotionData(VV, eV, xV, JV) {
        let YV = "";
        for (let UV = 0; UV < eV; UV++) {
          const eV = [];
          this._CollectFrameValues(VV, UV + xV, eV, JV), YV += eV.map((VV => VV.toFixed(6))).join(" ") + "\n"
        }
        return YV
      }
      static _CollectFrameValues(VV, eV, xV, JV) {
        for (const YV of VV)
          if (!this._IsEndSite(YV)) {
            if (YV.hasPositionChannels) {
              const VV = this._GetPositionAtFrameIndex(YV.positionKeys, eV);
              xV.push(VV.x, VV.y, VV.z)
            }
            if (YV.hasRotationChannels) {
              const VV = this._GetRotationAtFrameIndex(YV.rotationKeys, eV),
                JV = this._QuaternionToEuler(VV);
              xV.push(JV.z, JV.x, JV.y)
            }
            YV.children.length > 0 && this._CollectFrameValues(YV.children, eV, xV, JV)
          }
      }
      static _GetPositionAtFrameIndex(VV, eV) {
        if (0 === VV.length) return JV.Ik.Zero();
        return VV[Math.max(0, Math.min(eV, VV.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(VV, eV) {
        if (0 === VV.length) return JV.Quaternion.Identity();
        return VV[Math.max(0, Math.min(eV, VV.length - 1))].value.clone()
      }
      static _QuaternionToEuler(VV) {
        const eV = new JV.Matrix;
        VV.toRotationMatrix(eV);
        const xV = eV.m;
        let UV, yV, pV;
        const QV = Math.sqrt(xV[0] * xV[0] + xV[1] * xV[1]);
        return QV > gx.b ? (UV = Math.atan2(xV[6], xV[10]), yV = Math.atan2(-xV[2], QV), pV = Math.atan2(xV[1], xV[0])) : (UV = Math.atan2(-xV[9], xV[5]), yV = Math.atan2(-xV[2], QV), pV = 0), new JV.Ik(YV.Tools.ToDegrees(UV), YV.Tools.ToDegrees(yV), YV.Tools.ToDegrees(pV))
      }
    }

    function Xy(VV) {
      return "string" === typeof VV?.name
    }
    const My = Symbol("__xml:meta$__"),
      zy = Symbol("__xml:name$__");

    function Gy(VV, eV) {
      Object.prototype.hasOwnProperty.call(VV.metadata, My) || (VV.metadata[My] = []), VV.metadata[My].push(eV)
    }

    function Wy(VV) {
      return (eV, xV) => {
        eV[zy] = VV
      }
    }

    function Ry() {
      return (VV, eV) => Gy(eV, {
        kind: "none",
        prop: String(eV.name),
        ignore: !0
      })
    }

    function gy(VV) {
      return (eV, xV) => Gy(xV, {
        kind: "attr",
        prop: String(xV.name),
        ...VV
      })
    }

    function Dy(VV) {
      return (eV, xV) => Gy(xV, {
        kind: "elem",
        prop: String(xV.name),
        ...VV
      })
    }

    function iy(VV) {
      const eV = "function" === typeof VV ? VV : VV?.constructor,
        xV = eV?.[Symbol.metadata];
      if (!xV) return [];
      const JV = [];
      let YV = xV;
      for (; YV;) Object.prototype.hasOwnProperty.call(YV, My) && JV.push(...YV[My]), YV = Object.getPrototypeOf(YV);
      return JV
    }

    function Cy(VV) {
      const eV = VV?.constructor?.[zy];
      return eV || void 0
    }

    function ay(VV) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(VV)
    }

    function oy(VV) {
      if (Xy(VV)) return VV;
      const eV = (VV ?? "").trim();
      if (!eV) return {
        name: ""
      };
      const xV = eV.indexOf(":");
      if (-1 === xV) return {
        name: eV
      };
      if (-1 !== eV.indexOf(":", xV + 1)) return {
        name: eV
      };
      const JV = eV.slice(0, xV),
        YV = eV.slice(xV + 1);
      return ay(JV) && ay(YV) ? {
        ns: JV,
        name: YV
      } : {
        name: eV
      }
    }

    function cy(VV, eV) {
      return eV ? `${eV}:${VV}` : VV
    }
    const hy = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      ly = Object.freeze({
        number: hy
      });

    function Ly(VV) {
      const eV = VV?.eps ?? hy.eps;
      return {
        eps: eV,
        maxDecimalsCap: VV?.maxDecimalsCap ?? hy.maxDecimalsCap,
        trimTrailingZeros: VV?.trimTrailingZeros ?? hy.trimTrailingZeros,
        fixedDecimals: VV?.fixedDecimals,
        allowScientific: VV?.allowScientific ?? hy.allowScientific,
        snapNearZero: VV?.snapNearZero ?? hy.snapNearZero,
        zeroThreshold: VV?.zeroThreshold ?? eV,
        perAttributeEps: VV?.perAttributeEps
      }
    }

    function fy(VV) {
      return {
        number: Ly(VV?.number)
      }
    }
    class my {
      constructor(VV) {
        if (this.o = VV, this._o = VV.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(VV) {
        if (!Number.isFinite(VV)) throw new Error(`Cannot format non-finite number: ${VV}`);
        const eV = this._o,
          xV = this._clampInt(eV.maxDecimalsCap ?? 15, 0, 20),
          JV = eV.trimTrailingZeros ?? !0,
          YV = eV.snapNearZero ?? !0,
          UV = eV.zeroThreshold ?? eV.eps,
          yV = 1 / eV.eps;
        let pV, QV = Math.round(VV * yV) / yV;
        if (Object.is(QV, -0) && (QV = 0), YV && Math.abs(QV) <= UV && (QV = 0), pV = void 0 !== eV.fixedDecimals ? this._clampInt(eV.fixedDecimals, 0, xV) : this._clampInt(Math.ceil(-Math.log10(eV.eps)), 0, xV), eV.allowScientific, 0 === pV) return String(Math.trunc(QV));
        let nV = QV.toFixed(pV);
        if (JV && void 0 === eV.fixedDecimals && (nV = nV.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(nV)) throw new Error(`Scientific notation not allowed in XML output: ${nV}`);
        return nV
      }
      _clampInt(VV, eV, xV) {
        return Number.isFinite(VV) ? (VV = Math.trunc(VV), Math.max(eV, Math.min(xV, VV))) : eV
      }
    }

    function Ky(VV) {
      return VV instanceof Date
    }

    function Hy(VV) {
      return "string" === typeof VV
    }

    function uy(VV) {
      return "string" === typeof VV || "number" === typeof VV || "boolean" === typeof VV || "bigint" === typeof VV || Ky(VV)
    }

    function sy(VV) {
      return "number" === typeof VV || "boolean" === typeof VV || "bigint" === typeof VV || Ky(VV)
    }
    class Sy {
      constructor(VV, eV) {
        this._ns = new Map, this._prefixCount = 0, this._builder = VV, this._format = fy(eV), this._nFmt = new my(this._format)
      }
      withNamespace() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        for (const JV of eV) this._assignNamespace(JV);
        return this
      }
      serialize(VV, eV) {
        if (!(eV = eV ?? Cy(VV))) throw new Error("can not find name for given object");
        const xV = oy(eV);
        xV.ns && this._assignNamespace(xV.ns, "xmlns"), this._gatherNamespaces(VV, new WeakSet);
        const JV = this._builder.ele(null, xV.name);
        for (const [YV, UV] of Array.from(this._ns.entries())) JV.att("xmlns", UV, YV);
        this._writeObjectContent(JV, VV, (new WeakSet).add(VV)), this._builder.end()
      }
      _writeObject(VV, eV, xV) {
        if (xV.has(eV)) return;
        if (xV.add(eV), Array.isArray(eV)) {
          for (const JV of eV) sy(JV) || (Hy(JV) ? this._builder.text(JV) : this._writeObject(VV, JV, xV));
          return
        }
        const JV = Cy(eV);
        if (!JV) return;
        const YV = oy(JV),
          UV = this._getPrefix(YV),
          yV = cy(YV.name, UV);
        VV.ele(null, yV), this._writeObjectContent(VV, eV, xV), this._builder.end()
      }
      _getPrefix(VV) {
        if (VV.ns) {
          const eV = this._ns.get(VV.ns.toLowerCase());
          if ("xmlns" !== eV) return eV
        }
      }
      _writeObjectContent(VV, eV, xV) {
        const JV = iy(eV) ?? [],
          YV = new Map;
        for (const yV of JV) {
          const VV = YV.get(yV.prop) ?? [];
          VV.push(yV), YV.set(yV.prop, VV)
        }
        const UV = Object.keys(eV).sort(((VV, eV) => {
          const xV = (YV.get(VV) ?? []).some((VV => "attr" === VV.kind));
          return xV === (YV.get(eV) ?? []).some((VV => "attr" === VV.kind)) ? 0 : xV ? -1 : 1
        }));
        for (const yV of UV) {
          const JV = eV[yV];
          if (null === JV || void 0 === JV) continue;
          const UV = YV.get(yV);
          if (UV) {
            if (UV.some((VV => !0 === VV.ignore || "none" === VV.kind))) continue;
            for (const eV of UV) {
              const xV = eV.name ?? eV.prop.toLowerCase();
              if (xV) switch (eV.kind) {
                case "attr": {
                  let YV = null;
                  if ("number" === typeof JV && this._nFmt && (YV = this._nFmt.toString(JV)), eV.formatter) {
                    YV = new eV.formatter(this._format).toString(JV)
                  }
                  if (YV = YV ?? JV.toString(), YV) {
                    const eV = oy(xV),
                      JV = this._getPrefix(eV),
                      UV = cy(eV.name, JV);
                    VV.att(null, UV, YV)
                  }
                  break
                }
              }
            }
          } else sy(JV) || (Hy(JV) ? this._builder.text(JV) : this._writeObject(VV, JV, xV))
        }
      }
      _gatherNamespaces(VV, eV) {
        if (eV.has(VV)) return;
        if (eV.add(VV), Array.isArray(VV)) {
          for (const xV of VV) uy(xV) || this._gatherNamespaces(xV, eV);
          return
        }
        const xV = Cy(VV);
        xV && this._assignNamespace(xV);
        const JV = iy(VV) ?? [],
          YV = new Map;
        for (const yV of JV) {
          const VV = YV.get(yV.prop) ?? [];
          VV.push(yV), YV.set(yV.prop, VV)
        }
        const UV = [];
        for (const yV of Object.keys(VV)) {
          const eV = VV[yV];
          if (null === eV || void 0 === eV) continue;
          const xV = YV.get(yV);
          if (xV) {
            if (xV.some((VV => !0 === VV.ignore || "none" === VV.kind))) continue;
            for (const VV of xV) VV.name && this._assignNamespace(VV.name)
          }
          UV.push(eV)
        }
        for (const yV of UV) uy(yV) || this._gatherNamespaces(yV, eV)
      }
      _assignNamespace(VV, eV) {
        const xV = oy(VV);
        if (xV?.ns) {
          const VV = xV.ns.toLowerCase();
          this._ns.get(VV) || this._ns.set(VV, eV ?? this._buildNsPrefix(VV))
        } else if ("xmlns" === eV) {
          const VV = xV.name.toLowerCase();
          this._ns.get(VV) || this._ns.set(VV, eV ?? this._buildNsPrefix(VV))
        }
      }
      _buildNsPrefix(VV) {
        let eV, xV = !1;
        do {
          eV = "ns" + this._prefixCount++;
          for (const VV of Array.from(this._ns.values()))
            if (VV === eV) {
              xV = !0;
              break
            }
        } while (xV);
        return eV
      }
    }
    class Iy {}
    var dy;
    Iy.OpenTag = "<", Iy.CloseTag = ">", Iy.Slash = "/", Iy.Question = "?", Iy.Quote = '"', Iy.Equal = "=", Iy.Space = " ", Iy.Semicolon = ":", Iy.Dec = "<?xml", Iy.Xml = "xml", Iy.Xmlns = "xmlns", Iy.Xsi = "xsi", Iy.VersionKeyword = "version", Iy.EncodingKeyword = "encoding", Iy.StandaloneKeyword = "standalone",
      function(VV) {
        VV[VV.Declaration = 0] = "Declaration", VV[VV.Tag = 1] = "Tag", VV[VV.Attribute = 2] = "Attribute", VV[VV.Text = 3] = "Text"
      }(dy || (dy = {}));
    class Oy {
      constructor(VV) {
        this._ctxStack = [], this._d = 0, this._w = VV
      }
      dec(VV, eV, xV) {
        return this._w.write(Iy.Dec), this._writeAttStr(Iy.VersionKeyword, VV), eV && this._writeAttStr(Iy.EncodingKeyword, eV), void 0 !== xV && this._writeAttStr(Iy.StandaloneKeyword, xV ? "yes" : "no"), this._w.write(Iy.Question, Iy.CloseTag), this
      }
      att(VV, eV, xV) {
        const JV = this._peekContext();
        if (!JV) throw new Error("att() without open element");
        if (JV.closed) throw new Error(`att() after start tag closed for <${JV.name}>`);
        if (this._isXmlnsDecl(VV, eV)) {
          if (eV === Iy.Xmlns) JV.defaultNs = xV, this._registerNamespace(JV, "", xV), this._writeAttStr(Iy.Xmlns, xV);
          else if (VV) this._registerNamespace(JV, eV, xV), this._writeAttStr(`${VV}:${eV}`, xV);
          else {
            const VV = eV.slice(6);
            this._registerNamespace(JV, VV, xV), this._writeAttStr(eV, xV)
          }
          return JV.lastToken = dy.Attribute, this
        }
        let YV = eV;
        if (VV) {
          YV = `${this._ensurePrefixDeclared(JV,VV)}:${eV}`
        }
        return JV.lastToken = dy.Attribute, this._writeAttStr(YV, xV), this
      }
      ele(VV, eV) {
        const xV = this._peekContext();
        xV && this._closeOpenTagIfNeeded(xV);
        let JV = eV;
        if (VV) {
          JV = `${this._lookupPrefix(VV)??VV}:${eV}`
        }
        return this._pushContext(JV, ++this._d), this._w.write(Iy.OpenTag, JV), this
      }
      text(VV) {
        const eV = this._peekContext();
        if (!eV) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(eV), eV.lastToken = dy.Text, this._w.write(this._escText(VV)), this
      }
      end() {
        const VV = this._popContext();
        return VV && (this._d--, VV.closed ? this._w.write(Iy.OpenTag, Iy.Slash, VV.name, Iy.CloseTag) : this._w.write(Iy.Slash, Iy.CloseTag)), this
      }
      _pushContext(VV, eV) {
        const xV = new Oy.Context(VV, eV);
        return this._ctxStack.push(xV), xV
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
      _writeAttStr(VV, eV) {
        this._w.write(Iy.Space, VV, Iy.Equal, Iy.Quote, this._escAttr(eV), Iy.Quote)
      }
      _lookupPrefix(VV) {
        let eV = this._ctxStack.length - 1;
        if (eV >= 0)
          do {
            const xV = this._ctxStack[eV--],
              JV = xV.ns2prefix?.get(VV);
            if (JV) return JV
          } while (eV >= 0)
      }
      _escText(VV) {
        return VV.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(VV) {
        return this._escText(VV).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(VV, eV) {
        if (VV) return VV === Iy.Xmlns;
        const xV = eV.length,
          JV = Iy.Xmlns.length;
        return xV >= JV && (eV.startsWith(Iy.Xmlns) && (eV.length == JV || eV[JV] == Iy.Semicolon))
      }
      _registerNamespace(VV, eV, xV) {
        if (eV === Iy.Xml || eV === Iy.Xmlns) throw new Error(`reserved prefix '${eV}'`);
        const JV = VV.prefix2ns.get(eV);
        if (JV && JV !== xV) throw new Error(`prefix '${eV}' already bound to a different namespace`);
        VV.ns2prefix.get(xV) || VV.ns2prefix.set(xV, eV), VV.prefix2ns.set(eV, xV)
      }
      _allocPrefix(VV) {
        let eV = 1;
        for (;;) {
          const xV = "ns" + eV++;
          if (!VV.prefix2ns.has(xV)) return xV
        }
      }
      _ensurePrefixDeclared(VV, eV) {
        const xV = this._lookupPrefix(eV);
        if (xV) return xV;
        if (VV.closed) throw new Error(`can not declare namespace after start tag closed for <${VV.name}>`);
        const JV = this._allocPrefix(VV);
        return this._writeAttStr(`${Iy.Xmlns}:${JV}`, eV), this._registerNamespace(VV, JV, eV), JV
      }
      _closeOpenTagIfNeeded(VV) {
        VV.closed || (this._w.write(Iy.CloseTag), VV.closed = !0)
      }
    }
    Oy.Context = class {
      constructor(VV, eV) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = VV, this.depth = eV
      }
    };
    class Vp {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        if (0 === eV.length) return this;
        const JV = eV.join("");
        return this._chunks.push(JV), this.count += JV.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class ep {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = VV, this._opts = eV, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        if (0 === eV.length) return this;
        const JV = eV.join("");
        if (0 === JV.length) return this;
        this._pending += JV, this._pendingChars += JV.length;
        const YV = this._opts.flushChars ?? 65536;
        return this._pendingChars >= YV && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const VV = this._encoder.encode(this._pending);
        return this._sink.push(VV), this.count += VV.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const xp = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Jp = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Yp, Up;
    ! function(VV) {
      VV.micron = "micron", VV.millimeter = "millimeter", VV.centimeter = "centimeter", VV.inch = "inch", VV.foot = "foot", VV.meter = "meter"
    }(Yp || (Yp = {})),
    function(VV) {
      VV.model = "model", VV.solidsupport = "solidsupport", VV.support = "support", VV.surface = "surface", VV.other = "other"
    }(Up || (Up = {}));
    const yp = "http://schemas.openxmlformats.org/package/2006/content-types",
      pp = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Qp;
    ! function(VV) {
      VV.Relationships = "application/vnd.openxmlformats-package.relationships+xml", VV.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", VV.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", VV.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", VV.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", VV.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", VV.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", VV.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", VV.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", VV.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", VV.Png = "image/png", VV.Jpeg = "image/jpeg", VV.Tiff = "image/tiff", VV.Xml = "application/xml"
    }(Qp || (Qp = {}));
    const np = "_rels/",
      wp = "3D/",
      Zp = "3dmodel.model",
      vp = ".rels",
      rp = "[Content_Types].xml";
    class kp {
      static IsKnown(VV) {
        return kp.Known.has(VV)
      }
      static IsThreeDimModel(VV) {
        return VV === kp.ThreeDimModel
      }
    }
    kp.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", kp.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", kp.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", kp.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", kp.Known = new Set([kp.ThreeDimModel, kp.Thumbnail, kp.PrintTicket, kp.MustPreserve]);
    let bp = (() => {
        let VV, eV, xV = [Wy({
            ns: yp,
            name: "Types"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.items = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfContentTypes"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Ep = (() => {
        let VV, eV, xV, JV, YV = [Wy({
            ns: yp,
            name: "Default"
          })],
          UV = [],
          yV = [],
          pV = [],
          QV = [],
          nV = [];
        eV = class {
          constructor(VV, eV) {
            this.ext = (0, NV.l)(this, yV, void 0), this.ct = ((0, NV.l)(this, pV), (0, NV.l)(this, QV, void 0)), (0, NV.l)(this, nV), this.ext = VV, this.ct = eV
          }
        };
        return (0, NV.p)(eV, "ThreeMfContentType"), (() => {
          const wV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: {
              ns: yp,
              name: "Extension"
            }
          })], JV = [gy({
            name: {
              ns: yp,
              name: "ContentType"
            }
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: VV => "ext" in VV,
              get: VV => VV.ext,
              set: (VV, eV) => {
                VV.ext = eV
              }
            },
            metadata: wV
          }, yV, pV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: VV => "ct" in VV,
              get: VV => VV.ct,
              set: (VV, eV) => {
                VV.ct = eV
              }
            },
            metadata: wV
          }, QV, nV), (0, NV.i)(null, VV = {
            value: eV
          }, YV, {
            kind: "class",
            name: eV.name,
            metadata: wV
          }, null, UV), eV = VV.value, wV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wV
          }), (0, NV.l)(eV, UV)
        })(), eV
      })(),
      Bp = (() => {
        let VV, eV, xV = [Wy({
            ns: pp,
            name: "Relationships"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.items = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfRelationships"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      jp = (() => {
        let VV, eV, xV, JV, YV, UV = [Wy({
            ns: pp,
            name: "Relationship"
          })],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        eV = class {
          constructor(VV, eV, xV) {
            this.id = (0, NV.l)(this, pV, void 0), this.type = ((0, NV.l)(this, QV), (0, NV.l)(this, nV, void 0)), this.target = ((0, NV.l)(this, wV), (0, NV.l)(this, ZV, void 0)), (0, NV.l)(this, vV), this.id = VV, this.type = eV, this.target = xV
          }
        };
        return (0, NV.p)(eV, "ThreeMfRelationship"), (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "Id"
          })], JV = [gy({
            name: "Type"
          })], YV = [gy({
            name: "Target"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: VV => "id" in VV,
              get: VV => VV.id,
              set: (VV, eV) => {
                VV.id = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: VV => "type" in VV,
              get: VV => VV.type,
              set: (VV, eV) => {
                VV.type = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: VV => "target" in VV,
              get: VV => VV.target,
              set: (VV, eV) => {
                VV.target = eV
              }
            },
            metadata: rV
          }, ZV, vV), (0, NV.i)(null, VV = {
            value: eV
          }, UV, {
            kind: "class",
            name: eV.name,
            metadata: rV
          }, null, yV), eV = VV.value, rV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          }), (0, NV.l)(eV, yV)
        })(), eV
      })();
    class qp {
      constructor(VV, eV, xV) {
        this.contentTypes = VV, this.relationships = eV, this.model = xV
      }
    }
    class tp {
      static Zero() {
        return new tp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(VV) {
        this.values = VV
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Fp {
      constructor(VV) {
        this.o = VV, this._f = new my(VV)
      }
      toString(VV) {
        return VV.values.map((VV => this._f.toString(VV))).join(" ")
      }
    }
    let Tp = (() => {
        let VV, eV, xV, JV, YV, UV = [Wy({
            ns: xp,
            name: "model"
          })],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        eV = class {
          constructor() {
            this.unit = (0, NV.l)(this, pV, Yp.millimeter), this.requiredextensions = ((0, NV.l)(this, QV), (0, NV.l)(this, nV, void 0)), this.recommendedextensions = ((0, NV.l)(this, wV), (0, NV.l)(this, ZV, void 0)), this.metadata = (0, NV.l)(this, vV)
          }
        };
        return (0, NV.p)(eV, "ThreeMfModel"), (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "unit"
          })], JV = [gy({
            name: "requiredextensions"
          })], YV = [gy({
            name: "recommendedextensions"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: VV => "unit" in VV,
              get: VV => VV.unit,
              set: (VV, eV) => {
                VV.unit = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: VV => "requiredextensions" in VV,
              get: VV => VV.requiredextensions,
              set: (VV, eV) => {
                VV.requiredextensions = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: VV => "recommendedextensions" in VV,
              get: VV => VV.recommendedextensions,
              set: (VV, eV) => {
                VV.recommendedextensions = eV
              }
            },
            metadata: rV
          }, ZV, vV), (0, NV.i)(null, VV = {
            value: eV
          }, UV, {
            kind: "class",
            name: eV.name,
            metadata: rV
          }, null, yV), eV = VV.value, rV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          })
        })(), eV.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, NV.l)(eV, yV), eV
      })(),
      Pp = (() => {
        let VV, eV, xV, JV, YV, UV = [Wy({
            ns: xp,
            name: "meta"
          })],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        eV = class {
          constructor(VV, eV, xV, JV) {
            this.name = (0, NV.l)(this, pV, void 0), this.preserve = ((0, NV.l)(this, QV), (0, NV.l)(this, nV, void 0)), this.type = ((0, NV.l)(this, wV), (0, NV.l)(this, ZV, void 0)), this.value = (0, NV.l)(this, vV), this.name = VV, this.value = eV, this.preserve = xV, this.type = JV
          }
        };
        return (0, NV.p)(eV, "ThreeMfMeta"), (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "name"
          })], JV = [gy({
            name: "preserve"
          })], YV = [gy({
            name: "type"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: VV => "name" in VV,
              get: VV => VV.name,
              set: (VV, eV) => {
                VV.name = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: VV => "preserve" in VV,
              get: VV => VV.preserve,
              set: (VV, eV) => {
                VV.preserve = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: VV => "type" in VV,
              get: VV => VV.type,
              set: (VV, eV) => {
                VV.type = eV
              }
            },
            metadata: rV
          }, ZV, vV), (0, NV.i)(null, VV = {
            value: eV
          }, UV, {
            kind: "class",
            name: eV.name,
            metadata: rV
          }, null, yV), eV = VV.value, rV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          }), (0, NV.l)(eV, yV)
        })(), eV
      })(),
      Ap = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "metadatagroup"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfMetadataGroup"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Np = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "resources"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.object = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfResources"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Xp = (() => {
        let VV, eV, xV, JV, YV, UV, yV, pV, QV, nV = [Wy({
            ns: xp,
            name: "object"
          })],
          wV = [],
          ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [],
          BV = [],
          jV = [],
          qV = [],
          tV = [],
          FV = [],
          TV = [],
          PV = [],
          AV = [];
        eV = class {
          constructor(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up.model;
            this.id = (0, NV.l)(this, ZV, void 0), this.type = ((0, NV.l)(this, vV), (0, NV.l)(this, rV, void 0)), this.thumbnail = ((0, NV.l)(this, kV), (0, NV.l)(this, bV, void 0)), this.partnumber = ((0, NV.l)(this, EV), (0, NV.l)(this, BV, void 0)), this.name = ((0, NV.l)(this, jV), (0, NV.l)(this, qV, void 0)), this.pid = ((0, NV.l)(this, tV), (0, NV.l)(this, FV, void 0)), this.pindex = ((0, NV.l)(this, TV), (0, NV.l)(this, PV, void 0)), this.metadatagroup = (0, NV.l)(this, AV), this.id = VV, this.type = eV
          }
        };
        return (0, NV.p)(eV, "ThreeMfObject"), (() => {
          const XV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "id"
          })], JV = [gy({
            name: "type"
          })], YV = [gy({
            name: "thumbnail"
          })], UV = [gy({
            name: "partnumber"
          })], yV = [gy({
            name: "name"
          })], pV = [gy({
            name: "pid"
          })], QV = [gy({
            name: "pindex"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: VV => "id" in VV,
              get: VV => VV.id,
              set: (VV, eV) => {
                VV.id = eV
              }
            },
            metadata: XV
          }, ZV, vV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: VV => "type" in VV,
              get: VV => VV.type,
              set: (VV, eV) => {
                VV.type = eV
              }
            },
            metadata: XV
          }, rV, kV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: VV => "thumbnail" in VV,
              get: VV => VV.thumbnail,
              set: (VV, eV) => {
                VV.thumbnail = eV
              }
            },
            metadata: XV
          }, bV, EV), (0, NV.i)(null, null, UV, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: VV => "partnumber" in VV,
              get: VV => VV.partnumber,
              set: (VV, eV) => {
                VV.partnumber = eV
              }
            },
            metadata: XV
          }, BV, jV), (0, NV.i)(null, null, yV, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: VV => "name" in VV,
              get: VV => VV.name,
              set: (VV, eV) => {
                VV.name = eV
              }
            },
            metadata: XV
          }, qV, tV), (0, NV.i)(null, null, pV, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: VV => "pid" in VV,
              get: VV => VV.pid,
              set: (VV, eV) => {
                VV.pid = eV
              }
            },
            metadata: XV
          }, FV, TV), (0, NV.i)(null, null, QV, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: VV => "pindex" in VV,
              get: VV => VV.pindex,
              set: (VV, eV) => {
                VV.pindex = eV
              }
            },
            metadata: XV
          }, PV, AV), (0, NV.i)(null, VV = {
            value: eV
          }, nV, {
            kind: "class",
            name: eV.name,
            metadata: XV
          }, null, wV), eV = VV.value, XV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XV
          }), (0, NV.l)(eV, wV)
        })(), eV
      })(),
      Mp = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "mesh"
          })],
          JV = [];
        eV = class {
          constructor(VV, eV) {
            this.vertices = VV ?? new zp, this.triangles = eV ?? new Wp
          }
        };
        return (0, NV.p)(eV, "ThreeMfMesh"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      zp = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "vertices"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfVertices"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Gp = (() => {
        let VV, eV, xV, JV, YV, UV = [Wy({
            ns: xp,
            name: "vertex"
          })],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        eV = class {
          constructor() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, NV.l)(this, pV, void 0), this.y = ((0, NV.l)(this, QV), (0, NV.l)(this, nV, void 0)), this.z = ((0, NV.l)(this, wV), (0, NV.l)(this, ZV, void 0)), (0, NV.l)(this, vV), this.x = VV, this.y = eV, this.z = xV
          }
        };
        return (0, NV.p)(eV, "ThreeMfVertex"), (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "x"
          })], JV = [gy({
            name: "y"
          })], YV = [gy({
            name: "z"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: VV => "x" in VV,
              get: VV => VV.x,
              set: (VV, eV) => {
                VV.x = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: VV => "y" in VV,
              get: VV => VV.y,
              set: (VV, eV) => {
                VV.y = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: VV => "z" in VV,
              get: VV => VV.z,
              set: (VV, eV) => {
                VV.z = eV
              }
            },
            metadata: rV
          }, ZV, vV), (0, NV.i)(null, VV = {
            value: eV
          }, UV, {
            kind: "class",
            name: eV.name,
            metadata: rV
          }, null, yV), eV = VV.value, rV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          }), (0, NV.l)(eV, yV)
        })(), eV
      })(),
      Wp = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "triangles"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfTriangles"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Rp = (() => {
        let VV, eV, xV, JV, YV, UV, yV, pV, QV, nV = [Wy({
            ns: xp,
            name: "triangle"
          })],
          wV = [],
          ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [],
          BV = [],
          jV = [],
          qV = [],
          tV = [],
          FV = [],
          TV = [],
          PV = [],
          AV = [];
        eV = class {
          constructor(VV, eV, xV) {
            this.v1 = (0, NV.l)(this, ZV, void 0), this.v2 = ((0, NV.l)(this, vV), (0, NV.l)(this, rV, void 0)), this.v3 = ((0, NV.l)(this, kV), (0, NV.l)(this, bV, void 0)), this.p1 = ((0, NV.l)(this, EV), (0, NV.l)(this, BV, void 0)), this.p2 = ((0, NV.l)(this, jV), (0, NV.l)(this, qV, void 0)), this.p3 = ((0, NV.l)(this, tV), (0, NV.l)(this, FV, void 0)), this.pid = ((0, NV.l)(this, TV), (0, NV.l)(this, PV, void 0)), (0, NV.l)(this, AV), this.v1 = VV, this.v2 = eV, this.v3 = xV
          }
        };
        return (0, NV.p)(eV, "ThreeMfTriangle"), (() => {
          const XV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "v1"
          })], JV = [gy({
            name: "v2"
          })], YV = [gy({
            name: "v3"
          })], UV = [gy({
            name: "p1"
          })], yV = [gy({
            name: "p2"
          })], pV = [gy({
            name: "p3"
          })], QV = [gy({
            name: "pid"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: VV => "v1" in VV,
              get: VV => VV.v1,
              set: (VV, eV) => {
                VV.v1 = eV
              }
            },
            metadata: XV
          }, ZV, vV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: VV => "v2" in VV,
              get: VV => VV.v2,
              set: (VV, eV) => {
                VV.v2 = eV
              }
            },
            metadata: XV
          }, rV, kV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: VV => "v3" in VV,
              get: VV => VV.v3,
              set: (VV, eV) => {
                VV.v3 = eV
              }
            },
            metadata: XV
          }, bV, EV), (0, NV.i)(null, null, UV, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: VV => "p1" in VV,
              get: VV => VV.p1,
              set: (VV, eV) => {
                VV.p1 = eV
              }
            },
            metadata: XV
          }, BV, jV), (0, NV.i)(null, null, yV, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: VV => "p2" in VV,
              get: VV => VV.p2,
              set: (VV, eV) => {
                VV.p2 = eV
              }
            },
            metadata: XV
          }, qV, tV), (0, NV.i)(null, null, pV, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: VV => "p3" in VV,
              get: VV => VV.p3,
              set: (VV, eV) => {
                VV.p3 = eV
              }
            },
            metadata: XV
          }, FV, TV), (0, NV.i)(null, null, QV, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: VV => "pid" in VV,
              get: VV => VV.pid,
              set: (VV, eV) => {
                VV.pid = eV
              }
            },
            metadata: XV
          }, PV, AV), (0, NV.i)(null, VV = {
            value: eV
          }, nV, {
            kind: "class",
            name: eV.name,
            metadata: XV
          }, null, wV), eV = VV.value, XV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XV
          }), (0, NV.l)(eV, wV)
        })(), eV
      })(),
      gp = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "components"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.component = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfComponents"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      Dp = (() => {
        let VV, eV, xV, JV, YV = [Wy({
            ns: xp,
            name: "component"
          })],
          UV = [],
          yV = [],
          pV = [],
          QV = [],
          nV = [];
        eV = class {
          constructor(VV, eV) {
            this.objectid = (0, NV.l)(this, yV, void 0), this.transform = ((0, NV.l)(this, pV), (0, NV.l)(this, QV, void 0)), (0, NV.l)(this, nV), this.objectid = VV, this.transform = eV
          }
        };
        return (0, NV.p)(eV, "ThreeMfComponent"), (() => {
          const wV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "objectid"
          })], JV = [gy({
            name: "transform",
            formatter: Fp
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: VV => "objectid" in VV,
              get: VV => VV.objectid,
              set: (VV, eV) => {
                VV.objectid = eV
              }
            },
            metadata: wV
          }, yV, pV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: VV => "transform" in VV,
              get: VV => VV.transform,
              set: (VV, eV) => {
                VV.transform = eV
              }
            },
            metadata: wV
          }, QV, nV), (0, NV.i)(null, VV = {
            value: eV
          }, YV, {
            kind: "class",
            name: eV.name,
            metadata: wV
          }, null, UV), eV = VV.value, wV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wV
          }), (0, NV.l)(eV, UV)
        })(), eV
      })(),
      ip = (() => {
        let VV, eV, xV, JV = [Wy({
            ns: xp,
            name: "basematerials"
          })],
          YV = [],
          UV = [],
          yV = [];
        eV = class {
          constructor(VV) {
            this.id = (0, NV.l)(this, UV, void 0), this.base = ((0, NV.l)(this, yV), []), this.id = VV
          }
        };
        return (0, NV.p)(eV, "ThreeMfBaseMaterials"), (() => {
          const pV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "id"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: VV => "id" in VV,
              get: VV => VV.id,
              set: (VV, eV) => {
                VV.id = eV
              }
            },
            metadata: pV
          }, UV, yV), (0, NV.i)(null, VV = {
            value: eV
          }, JV, {
            kind: "class",
            name: eV.name,
            metadata: pV
          }, null, YV), eV = VV.value, pV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pV
          }), (0, NV.l)(eV, YV)
        })(), eV
      })(),
      Cp = (() => {
        let VV, eV, xV, JV, YV = [Wy({
            ns: xp,
            name: "base"
          })],
          UV = [],
          yV = [],
          pV = [],
          QV = [],
          nV = [];
        eV = class {
          constructor(VV, eV) {
            this.name = (0, NV.l)(this, yV, void 0), this.displaycolor = ((0, NV.l)(this, pV), (0, NV.l)(this, QV, void 0)), (0, NV.l)(this, nV), this.name = VV, this.displaycolor = eV
          }
        };
        return (0, NV.p)(eV, "ThreeMfBase"), (() => {
          const wV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "name"
          })], JV = [gy({
            name: "displaycolor"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: VV => "name" in VV,
              get: VV => VV.name,
              set: (VV, eV) => {
                VV.name = eV
              }
            },
            metadata: wV
          }, yV, pV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: VV => "displaycolor" in VV,
              get: VV => VV.displaycolor,
              set: (VV, eV) => {
                VV.displaycolor = eV
              }
            },
            metadata: wV
          }, QV, nV), (0, NV.i)(null, VV = {
            value: eV
          }, YV, {
            kind: "class",
            name: eV.name,
            metadata: wV
          }, null, UV), eV = VV.value, wV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wV
          }), (0, NV.l)(eV, UV)
        })(), eV
      })(),
      ap = (() => {
        let VV, eV, xV = [Wy({
            ns: xp,
            name: "build"
          })],
          JV = [];
        eV = class {
          constructor() {
            this.item = []
          }
        };
        return (0, NV.p)(eV, "ThreeMfBuild"), (() => {
          const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NV.i)(null, VV = {
            value: eV
          }, xV, {
            kind: "class",
            name: eV.name,
            metadata: YV
          }, null, JV), eV = VV.value, YV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YV
          }), (0, NV.l)(eV, JV)
        })(), eV
      })(),
      op = (() => {
        let VV, eV, xV, JV, YV, UV = [Wy({
            ns: xp,
            name: "item"
          })],
          yV = [],
          pV = [],
          QV = [],
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        eV = class {
          constructor(VV, eV, xV) {
            this.objectid = (0, NV.l)(this, pV, void 0), this.transform = ((0, NV.l)(this, QV), (0, NV.l)(this, nV, void 0)), this.partnumber = ((0, NV.l)(this, wV), (0, NV.l)(this, ZV, void 0)), this.metadatagroup = (0, NV.l)(this, vV), this.objectid = VV, this.transform = eV, this.partnumber = xV
          }
        };
        return (0, NV.p)(eV, "ThreeMfItem"), (() => {
          const rV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          xV = [gy({
            name: "objectid"
          })], JV = [gy({
            name: "transform",
            formatter: Fp
          })], YV = [gy({
            name: "partnumber"
          })], (0, NV.i)(null, null, xV, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: VV => "objectid" in VV,
              get: VV => VV.objectid,
              set: (VV, eV) => {
                VV.objectid = eV
              }
            },
            metadata: rV
          }, pV, QV), (0, NV.i)(null, null, JV, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: VV => "transform" in VV,
              get: VV => VV.transform,
              set: (VV, eV) => {
                VV.transform = eV
              }
            },
            metadata: rV
          }, nV, wV), (0, NV.i)(null, null, YV, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: VV => "partnumber" in VV,
              get: VV => VV.partnumber,
              set: (VV, eV) => {
                VV.partnumber = eV
              }
            },
            metadata: rV
          }, ZV, vV), (0, NV.i)(null, VV = {
            value: eV
          }, UV, {
            kind: "class",
            name: eV.name,
            metadata: rV
          }, null, yV), eV = VV.value, rV && Object.defineProperty(eV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rV
          }), (0, NV.l)(eV, yV)
        })(), eV
      })();
    class cp {
      constructor(VV, eV) {
        this._object = new Xp(VV, eV)
      }
      withName(VV) {
        return this._object.name = VV, this
      }
      withThumbnail(VV) {
        return this._object.thumbnail = VV, this
      }
      withProperty(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = VV, this._object.id = eV, this
      }
      build() {
        return this._object
      }
      reset(VV, eV) {
        this._object = new Xp(VV, eV)
      }
    }
    class hp extends cp {
      constructor(VV) {
        super(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up.model), this._object.content = new gp
      }
      withComponent(VV, eV) {
        return this._object.content.component.push(new Dp(VV, eV)), this
      }
    }
    class lp extends cp {
      constructor(VV) {
        super(VV, Up.model)
      }
      withPostProcessHandlers(VV, eV) {
        return this._vh = VV, this._th = eV, this
      }
      withData(VV) {
        return this._object.content = this._buildMesh(VV), this
      }
      withMaterial(VV, eV) {
        return this._object.pid = VV, this._object.pindex = eV, this
      }
      _buildMesh(VV) {
        const eV = this._buildVertices(VV.positions),
          xV = this._buildTriangle(VV.indices);
        return new Mp(eV, xV)
      }
      _buildVertices(VV) {
        const eV = new zp;
        if (VV)
          for (let xV = 0; xV < VV.length;) {
            const JV = VV[xV++],
              YV = VV[xV++],
              UV = VV[xV++];
            let yV = new Gp(JV, YV, UV);
            this._vh && (yV = this._vh(yV)), eV.vertex.push(yV)
          }
        return eV
      }
      _buildTriangle(VV) {
        const eV = new Wp;
        if (VV)
          for (let xV = 0; xV < VV.length;) {
            const JV = VV[xV++],
              YV = VV[xV++],
              UV = VV[xV++];
            let yV = new Rp(JV, YV, UV);
            this._th && (yV = this._th(yV)), eV.triangle.push(yV)
          }
        return eV
      }
    }
    class Lp {
      constructor(VV) {
        this._m = new ip(VV)
      }
      withColor(VV, eV) {
        this._m.base = this._m.base ?? [];
        let xV = this._m.base.find((eV => eV.name.toLowerCase() === VV.toLowerCase()));
        return xV ? (xV.displaycolor = this._rgbaToHex(eV), this) : (xV = new Cp(VV, this._rgbaToHex(eV)), this._m.base.push(xV), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(VV) {
        const eV = VV => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(VV, 1 / 2.2)))),
          xV = eV(VV.r).toString(16).padStart(2, "0").toUpperCase(),
          JV = eV(VV.g).toString(16).padStart(2, "0").toUpperCase(),
          YV = eV(VV.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof VV.a) {
          return `#${xV}${JV}${YV}${Math.round(Math.min(255,Math.max(0,255*VV.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${xV}${JV}${YV}`
      }
    }
    class fp {
      constructor() {
        this._model = new Tp, this._objects = new Map
      }
      withMetaData(VV, eV, xV, JV) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Pp(VV, eV, xV, JV)), this
      }
      withMaterial(VV) {
        return VV instanceof Lp && (VV = VV.build()), VV && (this._model.resources = this._model.resources ?? new Np, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(VV)), this
      }
      withMesh(VV) {
        return VV instanceof lp && (VV = VV.build()), this._model.resources = this._model.resources ?? new Np, this._model.resources.object.push(VV), this
      }
      withComponents(VV) {
        return VV instanceof hp && (VV = VV.build()), this._model.resources = this._model.resources ?? new Np, this._model.resources.object.push(VV), this
      }
      withBuild(VV, eV, xV) {
        return this._model.build = this._model.build ?? new ap, this._model.build.item?.push(new op(VV, eV, xV)), this
      }
      withUnit(VV) {
        return this._model.unit = VV, this
      }
      reset() {
        return this._model = new Tp, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    fp.KnownMetaSet = new Set(Tp.KnownMeta.map((VV => VV.toLowerCase())));
    class mp {
      withContentType(VV) {
        this._cts || (this._cts = new bp);
        const eV = this._cts.items;
        return eV.some((eV => eV.ext === VV.ext && eV.ct === VV.ct)) || eV.push(VV), this
      }
      withRelationship(VV) {
        this._rs || (this._rs = new Bp);
        const eV = this._rs.items;
        return eV.some((eV => eV.id === VV.id)) || eV.push(VV), this.withContentType(new Ep("rels", Qp.Relationships)), this
      }
      withModel(VV) {
        return VV instanceof fp && (VV = VV.build()), this._m = VV, this.withContentType(new Ep("model", Qp.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const VV = `${wp}${Zp}`;
        if (!this._rs) {
          const eV = `/${VV}`;
          this.withRelationship(new jp("rel0", kp.ThreeDimModel, eV))
        }
        return new qp(this._cts, this._rs, this._m)
      }
    }
    class Kp {
      constructor(VV) {
        this._o = VV
      }
      get options() {
        return this._o
      }
      async serializeAsync(VV) {
        const eV = await this.ensureZipLibReadyAsync();
        if (!eV) return;
        const xV = eV.Zip,
          JV = eV.ZipDeflate;
        if (!xV || !JV) throw new Error("fflate Zip / ZipDeflate not available");
        const YV = function(VV, eV, xV) {
          const YV = new JV(eV, {
            level: 6
          });
          VV.add(YV);
          const UV = function(VV) {
              return {
                push: (eV, xV) => VV.push(eV, xV)
              }
            }(YV),
            yV = new ep(UV),
            pV = new Oy(yV).dec("1.0", "UTF-8");
          new Sy(pV).serialize(xV), yV.finish()
        };
        for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
        const QV = this.toDocument(...yV);
        if (!QV) return;
        const nV = new xV(VV);
        YV(nV, rp, QV.contentTypes), YV(nV, `${np}${vp}`, QV.relationships), YV(nV, `${wp}${Zp}`, QV.model), nV.end()
      }
      toDocument() {
        const VV = (new fp).withUnit(this._o?.unit ?? Yp.millimeter);
        if (this.options.metadata)
          for (const YV in this.options.metadata) VV.withMetaData(YV, this.options.metadata[YV]);
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return (new mp).withModel(this.toModel(VV, ...xV)).build()
      }
    }
    class Hp {
      static async SerializeToMemoryAsync(VV) {
        const eV = new Array;
        let xV = 0;
        for (var JV = arguments.length, YV = new Array(JV > 1 ? JV - 1 : 0), UV = 1; UV < JV; UV++) YV[UV - 1] = arguments[UV];
        if (await VV.serializeAsync((function(VV, JV, YV) {
            eV.push(JV), xV += JV.length
          }), ...YV), !xV) return;
        const yV = new Uint8Array(xV);
        let pV = 0;
        for (const QV of eV) yV.set(QV, pV), pV += QV.length;
        return yV
      }
    }
    class sp {}
    sp.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Sp {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = VV, this._to = eV, this._step = xV, this._i = VV
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const VV = this._i;
        return this._i += this._step, VV
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Ip extends Kp {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Ip.DefaultOptions,
          ...VV
        })
      }
      toModel(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        xV = xV.filter((VV => VV instanceof nJ.e || VV instanceof rV.e));
        const YV = new Sp,
          UV = VV,
          yV = new Map,
          pV = this.options.exportInstances ? [] : null;
        for (let QV = 0; QV < xV.length; QV++) {
          const VV = xV[QV];
          if (VV instanceof rV.e) {
            pV?.push(VV);
            continue
          }
          const eV = VV.name || `mesh${QV}`,
            JV = VV.getWorldMatrix(),
            nV = this._handleBabylonTo3mfMatrixTransformToRef(JV, tp.Zero()),
            wV = VV.hT;
          if (void 0 === wV) continue;
          const ZV = 1 == wV.length;
          for (let xV = 0; xV < wV.length; xV++) {
            const JV = wV[xV],
              pV = this._extractSubMesh(VV, JV);
            if (pV) {
              const VV = ZV ? `${eV}` : `${eV}_${xV}`,
                QV = new lp(YV.next()).withData(pV).withName(VV).build();
              UV.withMesh(QV), UV.withBuild(QV.id, nV), yV.set(JV, QV)
            }
          }
        }
        if (pV && pV.length) {
          const VV = this._groupBy(pV, (VV => VV.XUV));
          for (const [eV, xV] of Array.from(VV.entries()))
            if (xV && xV.length)
              for (let VV = 0; VV < xV.length; VV++) {
                const JV = xV[VV].getWorldMatrix(),
                  YV = eV.hT;
                for (let VV = 0; VV < YV.length; VV++) {
                  const eV = YV[VV],
                    xV = yV.get(eV);
                  xV && UV.withBuild(xV.id, this._handleBabylonTo3mfMatrixTransformToRef(JV, tp.Zero()))
                }
              }
        }
        return UV.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const VV = globalThis;
          return VV.fflate || await YV.Tools.LoadScriptAsync(sp.FFLATEUrl), VV.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(VV, eV) {
        const xV = VV.RYV();
        if (!xV) return;
        const JV = VV.getVerticesData(Ip._PositionKind);
        if (!JV) return;
        if (0 == eV.indexStart && eV.indexCount == xV.length) return {
          positions: JV,
          indices: xV
        };
        const YV = eV.indexStart,
          UV = new Map,
          yV = [],
          pV = new Uint32Array(eV.indexCount);
        for (let QV = 0; QV < eV.indexCount; QV++) {
          const VV = xV[YV + QV];
          let eV = UV.get(VV);
          if (void 0 === eV) {
            eV = UV.size, UV.set(VV, eV);
            const xV = 3 * VV;
            yV.push(JV[xV], JV[xV + 1], JV[xV + 2])
          }
          pV[QV] = eV
        }
        return {
          positions: new Float32Array(yV),
          indices: pV
        }
      }
      _groupBy(VV, eV) {
        const xV = new Map;
        for (const JV of VV) {
          const VV = eV(JV),
            YV = xV.get(VV);
          YV ? YV.push(JV) : xV.set(VV, [JV])
        }
        return xV
      }
      _handleBabylonTo3mfMatrixTransformToRef(VV, eV) {
        const xV = VV.multiplyToRef(Ip._R_BJS_TO_3MF, oV.d.Zero()).m;
        return eV.values = [xV[0], xV[1], xV[2], xV[4], xV[5], xV[6], xV[8], xV[9], xV[10], xV[12], xV[13], xV[14]], eV
      }
    }
    Ip.DefaultOptions = {
      unit: Yp.meter,
      exportInstances: !1
    }, Ip._PositionKind = "position", Ip._R_BJS_TO_3MF = oV.d.RotationX(Math.PI / 2).multiply(oV.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);