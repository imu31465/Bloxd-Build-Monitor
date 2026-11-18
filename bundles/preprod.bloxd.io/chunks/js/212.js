export const id = 212;
export const ids = [212, 216];
export const modules = {
  40315: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(40243),
      hy = Wy(38457);
    let fy = !1;

    function Zy() {
      fy || (fy = !0, hy.d.prototype._sphericalPolynomialTargetSize = 0, hy.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(hy.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Uy.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((yb => {
              this._texture._sphericalPolynomial = yb, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(yb) {
          this._texture && (this._texture._sphericalPolynomial = yb)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  35917: (yb, bb, Wy) => {
    Wy.d(bb, {
      Color3: () => Uy.d,
      e: () => Uy.e
    });
    var Uy = Wy(35919);
    (0, Uy.i)()
  },
  36425: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(36434);
    class hy {
      static GetPlanes(yb) {
        const bb = [];
        for (let Wy = 0; Wy < 6; Wy++) bb.push(new Uy.c(0, 0, 0, 0));
        return hy.GetPlanesToRef(yb, bb), bb
      }
      static GetNearPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[2], bb.normal.y = Wy[7] + Wy[6], bb.normal.z = Wy[11] + Wy[10], bb.d = Wy[15] + Wy[14], bb.normalize()
      }
      static GetFarPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[2], bb.normal.y = Wy[7] - Wy[6], bb.normal.z = Wy[11] - Wy[10], bb.d = Wy[15] - Wy[14], bb.normalize()
      }
      static GetLeftPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[0], bb.normal.y = Wy[7] + Wy[4], bb.normal.z = Wy[11] + Wy[8], bb.d = Wy[15] + Wy[12], bb.normalize()
      }
      static GetRightPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[0], bb.normal.y = Wy[7] - Wy[4], bb.normal.z = Wy[11] - Wy[8], bb.d = Wy[15] - Wy[12], bb.normalize()
      }
      static GetTopPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[1], bb.normal.y = Wy[7] - Wy[5], bb.normal.z = Wy[11] - Wy[9], bb.d = Wy[15] - Wy[13], bb.normalize()
      }
      static GetBottomPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[1], bb.normal.y = Wy[7] + Wy[5], bb.normal.z = Wy[11] + Wy[9], bb.d = Wy[15] + Wy[13], bb.normalize()
      }
      static GetPlanesToRef(yb, bb) {
        hy.GetNearPlaneToRef(yb, bb[0]), hy.GetFarPlaneToRef(yb, bb[1]), hy.GetLeftPlaneToRef(yb, bb[2]), hy.GetRightPlaneToRef(yb, bb[3]), hy.GetTopPlaneToRef(yb, bb[4]), hy.GetBottomPlaneToRef(yb, bb[5])
      }
      static IsPointInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; Wy++)
          if (bb[Wy].dotCoordinate(yb) < 0) return !1;
        return !0
      }
    }
  },
  36434: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy, hy) {
        this.normal = new Uy.n(yb, bb, Wy), this.d = hy
      }
      hBy() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new hy(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let yb = this.normal.getHashCode();
        return yb = 397 * yb ^ this.d, yb
      }
      normalize() {
        const yb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bb = 0;
        return 0 !== yb && (bb = 1 / yb), this.normal.x *= bb, this.normal.y *= bb, this.normal.z *= bb, this.d *= bb, this
      }
      transform(yb) {
        const bb = hy._TmpMatrix;
        yb.invertToRef(bb);
        const Wy = bb.m,
          Uy = this.normal.x,
          fy = this.normal.y,
          Zy = this.normal.z,
          cb = this.d,
          Py = Uy * Wy[0] + fy * Wy[1] + Zy * Wy[2] + cb * Wy[3],
          oy = Uy * Wy[4] + fy * Wy[5] + Zy * Wy[6] + cb * Wy[7],
          By = Uy * Wy[8] + fy * Wy[9] + Zy * Wy[10] + cb * Wy[11],
          Ky = Uy * Wy[12] + fy * Wy[13] + Zy * Wy[14] + cb * Wy[15];
        return new hy(Py, oy, By, Ky)
      }
      dotCoordinate(yb) {
        return this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z + this.d
      }
      copyFromPoints(yb, bb, Wy) {
        const Uy = bb.x - yb.x,
          hy = bb.y - yb.y,
          fy = bb.z - yb.z,
          Zy = Wy.x - yb.x,
          cb = Wy.y - yb.y,
          Py = Wy.z - yb.z,
          oy = hy * Py - fy * cb,
          By = fy * Zy - Uy * Py,
          Ky = Uy * cb - hy * Zy,
          ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
        let qb;
        return qb = 0 !== ey ? 1 / ey : 0, this.normal.x = oy * qb, this.normal.y = By * qb, this.normal.z = Ky * qb, this.d = -(this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z), this
      }
      isFrontFacingTo(yb, bb) {
        return Uy.n.Dot(this.normal, yb) <= bb
      }
      signedDistanceTo(yb) {
        return Uy.n.Dot(yb, this.normal) + this.d
      }
      static FromArray(yb) {
        return new hy(yb[0], yb[1], yb[2], yb[3])
      }
      static FromPoints(yb, bb, Wy) {
        const Uy = new hy(0, 0, 0, 0);
        return Uy.copyFromPoints(yb, bb, Wy), Uy
      }
      static FromPositionAndNormal(yb, bb) {
        const Wy = new hy(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(yb, bb, Wy)
      }
      static FromPositionAndNormalToRef(yb, bb, Wy) {
        return Wy.normal.Coy(bb), Wy.normal.normalize(), Wy.d = -yb.dot(Wy.normal), Wy
      }
      static SignedDistanceToPlaneFromPositionAndNormal(yb, bb, Wy) {
        const hy = -(bb.x * yb.x + bb.y * yb.y + bb.z * yb.z);
        return Uy.n.Dot(Wy, bb) + hy
      }
    }
    hy._TmpMatrix = Uy.c.Identity()
  },
  35856: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Matrix: () => Uy.c,
      Quaternion: () => Uy.e,
      RegisterMathVector: () => Uy.i,
      TmpVectors: () => Uy.j,
      Vector2: () => Uy.m,
      dU: () => Uy.n,
      Vector4: () => Uy.p
    });
    var Uy = Wy(35861);
    (0, Uy.i)()
  },
  36794: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy, Uy) {
        this.x = yb, this.y = bb, this.width = Wy, this.height = Uy
      }
      toGlobal(yb, bb) {
        return new Uy(this.x * yb, this.y * bb, this.width * yb, this.height * bb)
      }
      toGlobalToRef(yb, bb, Wy) {
        return Wy.x = this.x * yb, Wy.y = this.y * bb, Wy.width = this.width * yb, Wy.height = this.height * bb, this
      }
      clone() {
        return new Uy(this.x, this.y, this.width, this.height)
      }
    }
  },
  40243: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy
    });
    var Uy = Wy(35861),
      hy = Wy(35902),
      fy = Wy(38453),
      Zy = Wy(35864),
      cb = Wy(35919);
    class Py {
      constructor(yb, bb, Wy, Uy) {
        this.name = yb, this.worldAxisForNormal = bb, this.worldAxisForFileX = Wy, this.worldAxisForFileY = Uy
      }
    }
    class oy {
      static _NearestPow2Floor(yb) {
        return yb <= 1 ? 1 : 1 << Math.floor(Math.log2(yb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(yb) {
        if (!yb.isCube) return null;
        yb.kWy()?.xh().flushFramebuffer();
        const bb = yb.getSize().width,
          Wy = yb._sphericalPolynomialTargetSize,
          Uy = Wy > 0 ? this._NearestPow2Floor(Wy) : 0,
          hy = !yb.noMipmap && !0 === yb._texture?.generateMipMaps,
          fy = Uy > 0 && Uy < bb && hy,
          Zy = fy ? Math.max(0, Math.round(Math.log2(bb / Uy))) : 0,
          cb = fy ? Math.max(1, Math.floor(bb / Math.pow(2, Zy))) : bb,
          Py = yb.readPixels(0, Zy, void 0, !1),
          oy = yb.readPixels(1, Zy, void 0, !1);
        let By, Ky;
        yb.isRenderTarget ? (By = yb.readPixels(3, Zy, void 0, !1), Ky = yb.readPixels(2, Zy, void 0, !1)) : (By = yb.readPixels(2, Zy, void 0, !1), Ky = yb.readPixels(3, Zy, void 0, !1));
        const ey = yb.readPixels(4, Zy, void 0, !1),
          qb = yb.readPixels(5, Zy, void 0, !1),
          sy = yb.gammaSpace,
          Sy = Uy > 0 && Uy < bb && !fy;
        return new Promise((yb => {
          Promise.all([oy, Py, By, Ky, ey, qb]).then((Wy => {
            let [hy, fy, Zy, Py, oy, By] = Wy, Ky = cb;
            if (Sy) {
              const yb = 4;
              hy = this._DownsampleFace(hy, bb, Uy, yb), fy = this._DownsampleFace(fy, bb, Uy, yb), Zy = this._DownsampleFace(Zy, bb, Uy, yb), Py = this._DownsampleFace(Py, bb, Uy, yb), oy = this._DownsampleFace(oy, bb, Uy, yb), By = this._DownsampleFace(By, bb, Uy, yb), Ky = Uy
            }
            const ey = {
              size: Ky,
              right: fy,
              left: hy,
              up: Zy,
              down: Py,
              front: oy,
              back: By,
              format: 5,
              type: hy instanceof Float32Array ? 1 : 0,
              gammaSpace: sy
            };
            yb(this.ConvertCubeMapToSphericalPolynomial(ey))
          }))
        }))
      }
      static _AreaElement(yb, bb) {
        return Math.atan2(yb * bb, Math.sqrt(yb * yb + bb * bb + 1))
      }
      static _DownsampleFace(yb, bb, Wy, Uy) {
        const hy = yb instanceof Float32Array ? yb : Float32Array.from(yb),
          fy = Wy * Wy * Uy,
          Zy = new Float32Array(fy),
          cb = bb / Wy,
          Py = 1 / (cb * cb);
        for (let By = 0; By < Wy; By++) {
          const yb = Math.floor(By * cb),
            fy = Math.floor((By + 1) * cb);
          for (let oy = 0; oy < Wy; oy++) {
            const Ky = Math.floor(oy * cb),
              ey = Math.floor((oy + 1) * cb),
              qb = (By * Wy + oy) * Uy;
            for (let Wy = 0; Wy < Uy; Wy++) {
              let cb = 0;
              for (let Zy = yb; Zy < fy; Zy++)
                for (let yb = Ky; yb < ey; yb++) cb += hy[(Zy * bb + yb) * Uy + Wy];
              Zy[qb + Wy] = cb * Py
            }
          }
        }
        if (yb instanceof Float32Array) return Zy;
        const oy = new(0, yb.constructor)(fy);
        for (let By = 0; By < fy; By++) oy[By] = Zy[By] + .5 | 0;
        return oy
      }
      static ConvertCubeMapToSphericalPolynomial(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = bb > 0 ? this._NearestPow2Floor(bb) : 0;
        if (Wy > 0 && yb.size > Wy) {
          const bb = 5 === yb.format ? 4 : 3,
            Uy = ["right", "left", "up", "down", "front", "back"],
            hy = {};
          for (const fy of Uy) hy[fy] = this._DownsampleFace(yb[fy], yb.size, Wy, bb);
          yb = {
            ...yb,
            ...hy,
            size: Wy
          }
        }
        const Uy = new fy.e;
        let Py = 0;
        const oy = 2 / yb.size,
          By = oy,
          Ky = .5 * oy,
          ey = Ky - 1;
        for (let fy = 0; fy < 6; fy++) {
          const bb = this._FileFaces[fy],
            Wy = yb[bb.name];
          let qb = ey;
          const sy = 5 === yb.format ? 4 : 3;
          for (let fy = 0; fy < yb.size; fy++) {
            let Sy = ey;
            for (let By = 0; By < yb.size; By++) {
              const ey = bb.worldAxisForFileX.scale(Sy).add(bb.worldAxisForFileY.scale(qb)).add(bb.worldAxisForNormal);
              ey.normalize();
              const Ey = this._AreaElement(Sy - Ky, qb - Ky) - this._AreaElement(Sy - Ky, qb + Ky) - this._AreaElement(Sy + Ky, qb - Ky) + this._AreaElement(Sy + Ky, qb + Ky);
              let ly = Wy[fy * yb.size * sy + By * sy + 0],
                mb = Wy[fy * yb.size * sy + By * sy + 1],
                Cy = Wy[fy * yb.size * sy + By * sy + 2];
              isNaN(ly) && (ly = 0), isNaN(mb) && (mb = 0), isNaN(Cy) && (Cy = 0), 0 === yb.type && (ly /= 255, mb /= 255, Cy /= 255), yb.gammaSpace && (ly = Math.pow((0, hy.Clamp)(ly), Zy.j), mb = Math.pow((0, hy.Clamp)(mb), Zy.j), Cy = Math.pow((0, hy.Clamp)(Cy), Zy.j));
              const Ty = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const yb = Math.max(ly, mb, Cy);
                if (yb > Ty) {
                  const bb = Ty / yb;
                  ly *= bb, mb *= bb, Cy *= bb
                }
              } else ly = (0, hy.Clamp)(ly, 0, Ty), mb = (0, hy.Clamp)(mb, 0, Ty), Cy = (0, hy.Clamp)(Cy, 0, Ty);
              const Vy = new cb.d(ly, mb, Cy);
              Uy.addLight(ey, Vy, Ey), Py += Ey, Sy += oy
            }
            qb += By
          }
        }
        const qb = 6 * (4 * Math.PI) / 6 / Py;
        return Uy.scaleInPlace(qb), Uy.convertIncidentRadianceToIrradiance(), Uy.convertIrradianceToLambertianRadiance(), fy.f.FromHarmonics(Uy)
      }
    }
    oy._FileFaces = [new Py("right", new Uy.n(1, 0, 0), new Uy.n(0, 0, -1), new Uy.n(0, -1, 0)), new Py("left", new Uy.n(-1, 0, 0), new Uy.n(0, 0, 1), new Uy.n(0, -1, 0)), new Py("up", new Uy.n(0, 1, 0), new Uy.n(1, 0, 0), new Uy.n(0, 0, 1)), new Py("down", new Uy.n(0, -1, 0), new Uy.n(1, 0, 0), new Uy.n(0, 0, -1)), new Py("front", new Uy.n(0, 0, 1), new Uy.n(1, 0, 0), new Uy.n(0, -1, 0)), new Py("back", new Uy.n(0, 0, -1), new Uy.n(-1, 0, 0), new Uy.n(0, -1, 0))], oy.MAX_HDRI_VALUE = 4096, oy.PRESERVE_CLAMPED_COLORS = !1
  },
  39996: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.m,
      f: () => Uy.x
    });
    var Uy = Wy(38511);
    (0, Uy.D)()
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  40289: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy
    });
    var Uy = Wy(40273),
      hy = Wy(40293);
    class fy {
      static ExpandRGBDTexture(yb) {
        const bb = yb._texture;
        if (!bb || !yb.isRGBD) return;
        const hy = bb.xh(),
          fy = hy.getCaps(),
          Zy = bb.isReady;
        let cb = !1;
        fy.textureHalfFloatRender && fy.textureHalfFloatLinearFiltering ? (cb = !0, bb.type = 2) : fy.textureFloatRender && fy.textureFloatLinearFiltering && (cb = !0, bb.type = 1), cb && (bb.isReady = !1, bb._isRGBD = !1, bb.invertY = !1);
        const Py = async () => {
          const fy = hy.isWebGPU,
            Zy = fy ? 1 : 0;
          bb.isReady = !1, fy ? await Wy.e(320).then((() => Wy(59935))) : await Wy.e(302).then((() => Wy(59943)));
          const cb = new Uy.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, hy, !1, void 0, bb.type, void 0, null, !1, void 0, Zy);
          cb.externalTextureSamplerBinding = !0;
          const Py = hy.createRenderTargetTexture(bb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: bb.samplingMode,
            type: bb.type,
            format: 5
          });
          cb.onEffectCreatedObservable.addOnce((Wy => {
            Wy.executeWhenCompiled((() => {
              cb.onApply = yb => {
                yb._bindTexture("textureSampler", bb), yb.setFloat2("scale", 1, 1)
              }, yb.kWy()?.postProcessManager.directRender([cb], Py, !0), hy.restoreDefaultFramebuffer(), hy._releaseTexture(bb), cb && cb.dispose(), Py._swapAndDie(bb), bb.isReady = !0
            }))
          }))
        };
        cb && (Zy ? Py() : yb.onLoadObservable.addOnce(Py))
      }
      static async EncodeTextureToRGBD(yb, bb) {
        let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return bb.xh().isWebGPU ? await Wy.e(321).then((() => Wy(59961))) : await Wy.e(303).then((() => Wy(59958))), await (0, hy.d)("rgbdEncode", yb, bb, Uy, 1, 5)
      }
    }
  },
  59676: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AsyncLoop: () => Uy.d,
      RegisterTools: () => Uy.h,
      Tools: () => Uy.k,
      className: () => Uy.m
    });
    var Uy = Wy(38576);
    (0, Uy.h)()
  },
  40335: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    class Uy {
      constructor(yb) {
        this._pendingActions = new Array, this._workerInfos = yb.map((yb => ({
          workerPromise: Promise.resolve(yb),
          idle: !0
        })))
      }
      dispose() {
        for (const yb of this._workerInfos) yb.workerPromise.then((yb => {
          yb.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(yb) {
        this._executeOnIdleWorker(yb) || this._pendingActions.push(yb)
      }
      _executeOnIdleWorker(yb) {
        for (const bb of this._workerInfos)
          if (bb.idle) return this._execute(bb, yb), !0;
        return !1
      }
      _execute(yb, bb) {
        yb.idle = !1, yb.workerPromise.then((Wy => {
          bb(Wy, (() => {
            const bb = this._pendingActions.shift();
            bb ? this._execute(yb, bb) : yb.idle = !0
          }))
        }))
      }
    }
    class hy extends Uy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.DefaultOptions;
        super([]), this._maxWorkers = yb, this._createWorkerAsync = bb, this._options = Wy
      }
      push(yb) {
        if (!this._executeOnIdleWorker(yb))
          if (this._workerInfos.length < this._maxWorkers) {
            const bb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(bb), this._execute(bb, yb)
          } else this._pendingActions.push(yb)
      }
      _execute(yb, bb) {
        yb.timeoutId && (clearTimeout(yb.timeoutId), delete yb.timeoutId), super._execute(yb, ((Wy, Uy) => {
          bb(Wy, (() => {
            Uy(), yb.idle && (yb.timeoutId = setTimeout((() => {
              yb.workerPromise.then((yb => {
                yb.terminate()
              }));
              const bb = this._workerInfos.indexOf(yb); - 1 !== bb && this._workerInfos.splice(bb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    hy.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  59706: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AbstractThreeMfSerializer: () => kP,
      BVHExporter: () => RZ,
      ContentTypeFileName: () => sc,
      DefaultXmlSerializerFormatOptions: () => jc,
      DefaultXmlSerializerNumberOptions: () => QZ,
      EXT_lights_area: () => Eh,
      EXT_mesh_gpu_instancing: () => FU,
      EXT_texture_avif: () => fZ,
      EXT_texture_webp: () => bc,
      GLTF2Export: () => rh,
      GLTFData: () => oy,
      GetXmlFieldMeta: () => HZ,
      GetXmlName: () => ac,
      IsQualifiedName: () => vc,
      KHR_draco_mesh_compression: () => xh,
      KHR_interactivity: () => oh,
      KHR_lights_punctual: () => fh,
      KHR_materials_anisotropy: () => Th,
      KHR_materials_clearcoat: () => Oh,
      KHR_materials_coat: () => nh,
      KHR_materials_diffuse_roughness: () => aZ,
      KHR_materials_diffuse_transmission: () => ph,
      KHR_materials_dispersion: () => Dh,
      KHR_materials_emissive_strength: () => Nh,
      KHR_materials_fuzz: () => Kf,
      KHR_materials_ior: () => Ah,
      KHR_materials_iridescence: () => Wf,
      KHR_materials_openpbr: () => Qf,
      KHR_materials_sheen: () => Zf,
      KHR_materials_specular: () => Sf,
      KHR_materials_transmission: () => Cf,
      KHR_materials_unlit: () => Gf,
      KHR_materials_volume: () => iZ,
      KHR_materials_volume_scatter: () => nf,
      KHR_texture_basisu: () => xZ,
      KHR_texture_transform: () => wf,
      Known3mfRelationshipTypes: () => Sc,
      KnownI3mfContentType: () => oc,
      Matrix3d: () => Vc,
      MatrixFormatter: () => Jc,
      ModelFileName: () => ec,
      NumberFormatter: () => wZ,
      OBJExport: () => Zy,
      Object3dDirName: () => Kc,
      OpenXmlContentTypesNamespace: () => cP,
      OpenXmlRelationshipsNamespace: () => Pc,
      RegisterEXT_lights_area: () => mf,
      RegisterEXT_mesh_gpu_instancing: () => LU,
      RegisterEXT_texture_avif: () => cc,
      RegisterEXT_texture_webp: () => UZ,
      RegisterKHR_draco_mesh_compression: () => dU,
      RegisterKHR_interactivity: () => Kh,
      RegisterKHR_lights_punctual: () => cf,
      RegisterKHR_materials_anisotropy: () => Jh,
      RegisterKHR_materials_clearcoat: () => vf,
      RegisterKHR_materials_coat: () => rf,
      RegisterKHR_materials_diffuse_roughness: () => pf,
      RegisterKHR_materials_diffuse_transmission: () => Qh,
      RegisterKHR_materials_dispersion: () => wh,
      RegisterKHR_materials_emissive_strength: () => Ih,
      RegisterKHR_materials_fuzz: () => qZ,
      RegisterKHR_materials_ior: () => yZ,
      RegisterKHR_materials_iridescence: () => hf,
      RegisterKHR_materials_openpbr: () => Df,
      RegisterKHR_materials_sheen: () => Pf,
      RegisterKHR_materials_specular: () => lf,
      RegisterKHR_materials_transmission: () => Vf,
      RegisterKHR_materials_unlit: () => Rf,
      RegisterKHR_materials_volume: () => Yf,
      RegisterKHR_materials_volume_scatter: () => rZ,
      RegisterKHR_texture_basisu: () => df,
      RegisterKHR_texture_transform: () => Nf,
      RelationshipDirName: () => Bc,
      RelationshipFileName: () => qP,
      ResolveFormatOptions: () => tc,
      ResolveNumberOptions: () => DZ,
      STLExport: () => PZ,
      ST_ObjectType: () => Zc,
      ST_Unit: () => fc,
      StringXmlWriter: () => bP,
      ThreeDimModelNamespace: () => Uc,
      ThreeMf: () => Nc,
      ThreeMfBase: () => aP,
      ThreeMfBaseMaterials: () => Hc,
      ThreeMfBuild: () => Fc,
      ThreeMfComponent: () => rP,
      ThreeMfComponents: () => uc,
      ThreeMfComponentsBuilder: () => Qc,
      ThreeMfContentType: () => lc,
      ThreeMfContentTypes: () => Ec,
      ThreeMfDocument: () => Tc,
      ThreeMfDocumentBuilder: () => wc,
      ThreeMfItem: () => pc,
      ThreeMfMaterialBuilder: () => Dc,
      ThreeMfMesh: () => iP,
      ThreeMfMeshBuilder: () => jP,
      ThreeMfMeta: () => Gc,
      ThreeMfMetadataGroup: () => Oc,
      ThreeMfModel: () => gP,
      ThreeMfModelBuilder: () => tP,
      ThreeMfObject: () => vP,
      ThreeMfObjectBuilder: () => Lc,
      ThreeMfRelationship: () => Cc,
      ThreeMfRelationships: () => mP,
      ThreeMfResources: () => Rc,
      ThreeMfSerializer: () => xP,
      ThreeMfSerializerGlobalConfiguration: () => zP,
      ThreeMfTriangle: () => nc,
      ThreeMfTriangles: () => Xc,
      ThreeMfVertex: () => Yc,
      ThreeMfVertices: () => Mc,
      ToQualifiedString: () => LZ,
      TokenType: () => dZ,
      TriangleSetsNamespace: () => hc,
      USDZExportAsync: () => GZ,
      Utf8XmlWriterToBytes: () => Wc,
      XmlAttr: () => uZ,
      XmlBuilder: () => yP,
      XmlElem: () => rc,
      XmlIgnore: () => nZ,
      XmlName: () => XZ,
      XmlNameToParts: () => pZ,
      XmlSerializer: () => xc,
      _ConvertToGLTFPBRMetallicRoughness: () => OW,
      _SolveMetallic: () => GW,
      __IGLTFExporterExtension: () => cb
    });
    var Uy = Wy(35856),
      hy = Wy(59676),
      fy = Wy(38782);
    class Zy {
      static OBJ(yb, bb, Wy, Zy) {
        const cb = [];
        let Py = 1,
          oy = 1;
        bb && (Wy || (Wy = "mat"), cb.push("mtllib " + Wy + ".mtl"));
        for (let By = 0; By < yb.length; By++) {
          const Wy = yb[By],
            Ky = Wy.name || `mesh${By}}`;
          cb.push(`o ${Ky}`);
          let ey = null;
          if (Zy) {
            const yb = Wy.computeWorldMatrix(!0);
            ey = new Uy.Matrix, yb.invertToRef(ey), Wy.bakeTransformIntoVertices(yb)
          }
          if (bb) {
            const yb = Wy.material;
            yb && cb.push("usemtl " + yb.id)
          }
          const qb = Wy.geometry;
          if (!qb) {
            hy.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const sy = qb.getVerticesData("position"),
            Sy = qb.getVerticesData("normal"),
            Ey = qb.getVerticesData("uv"),
            ly = qb.Mqy();
          let mb = 0,
            Cy = 0;
          if (!sy || !ly) {
            hy.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Ty = yb[0].kWy().useRightHandedSystem ? 1 : -1;
          for (let yb = 0; yb < sy.length; yb += 3) cb.push("v " + sy[yb] * Ty + " " + sy[yb + 1] + " " + sy[yb + 2]), mb++;
          if (null != Sy)
            for (let yb = 0; yb < Sy.length; yb += 3) cb.push("vn " + Sy[yb] * Ty + " " + Sy[yb + 1] + " " + Sy[yb + 2]);
          if (null != Ey)
            for (let yb = 0; yb < Ey.length; yb += 2) cb.push("vt " + Ey[yb] + " " + Ey[yb + 1]), Cy++;
          const Vy = ["", "", ""],
            Jy = (Wy.material || Wy.kWy().defaultMaterial)._getEffectiveOrientation(Wy),
            [gb, Gy] = Jy === fy.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let yb = 0; yb < ly.length; yb += 3) {
            const bb = [String(ly[yb] + Py), String(ly[yb + gb] + Py), String(ly[yb + Gy] + Py)],
              Wy = [String(ly[yb] + oy), String(ly[yb + gb] + oy), String(ly[yb + Gy] + oy)],
              Uy = bb,
              hy = null != Ey ? Wy : Vy,
              fy = null != Sy ? bb : Vy;
            cb.push("f " + Uy[0] + "/" + hy[0] + "/" + fy[0] + " " + Uy[1] + "/" + hy[1] + "/" + fy[1] + " " + Uy[2] + "/" + hy[2] + "/" + fy[2])
          }
          Zy && ey && Wy.bakeTransformIntoVertices(ey), Py += mb, oy += Cy
        }
        return cb.join("\n")
      }
      static MTL(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Wy = [],
          Uy = yb.material;
        Wy.push("newmtl " + bb), Wy.push("  Ns " + Uy.specularPower.toFixed(4)), Wy.push("  Ni 1.5000"), Wy.push("  d " + Uy.alpha.toFixed(4)), Wy.push("  Tr 0.0000"), Wy.push("  Tf 1.0000 1.0000 1.0000"), Wy.push("  illum 2"), Wy.push("  Ka " + Uy.ambientColor.r.toFixed(4) + " " + Uy.ambientColor.g.toFixed(4) + " " + Uy.ambientColor.b.toFixed(4)), Wy.push("  Kd " + Uy.diffuseColor.r.toFixed(4) + " " + Uy.diffuseColor.g.toFixed(4) + " " + Uy.diffuseColor.b.toFixed(4)), Wy.push("  Ks " + Uy.specularColor.r.toFixed(4) + " " + Uy.specularColor.g.toFixed(4) + " " + Uy.specularColor.b.toFixed(4)), Wy.push("  Ke " + Uy.emissiveColor.r.toFixed(4) + " " + Uy.emissiveColor.g.toFixed(4) + " " + Uy.emissiveColor.b.toFixed(4));
        Uy.ambientTexture && Wy.push("  map_Ka " + Uy.ambientTexture.name), Uy.diffuseTexture && Wy.push("  map_Kd " + Uy.diffuseTexture.name), Uy.specularTexture && Wy.push("  map_Ks " + Uy.specularTexture.name), Uy.bumpTexture && Wy.push("  map_bump -imfchan z " + Uy.bumpTexture.name), Uy.opacityTexture && Wy.push("  map_d " + Uy.opacityTexture.name);
        return Wy.join("\n")
      }
    }
    var cb = 0,
      Py = Wy(39996);
    class oy {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const yb in this.files) {
          const bb = this.files[yb],
            Wy = new Blob([bb], {
              type: (0, Py.b)(yb)
            });
          hy.Tools.Download(Wy, yb)
        }
      }
    }
    var By = Wy(39719),
      Ky = Wy(39689),
      ey = Wy(40099),
      qb = Wy(39693),
      sy = Wy(38272),
      Sy = Wy(35886),
      Ey = Wy(35917),
      ly = Wy(35902);
    const mb = ly.HighestCommonFactor,
      Cy = {
        ...ly,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: mb
      };
    var Ty = Wy(40293),
      Vy = Wy(39705),
      Jy = Wy(40051),
      gb = Wy(40059),
      Gy = Wy(40309);
    (0, Gy.RegisterDumpTools)();
    var Oy = Wy(38464),
      Ry = Wy(38466),
      vb = Wy(37350),
      ib = Wy(38587),
      My = Wy(38989),
      Yy = Wy(40289);
    let Xy = 0;
    const ny = (yb, bb, Wy, Uy) => {
        if (!yb[Wy]) {
          const hy = yb.useDelayedTextureLoading;
          yb.useDelayedTextureLoading = !1;
          const fy = yb._blockEntityCollection;
          yb._blockEntityCollection = !1;
          const Zy = My.f.CreateFromBase64String(bb, Uy + Xy++, yb, !0, !1, My.f.BILINEAR_SAMPLINGMODE);
          yb._blockEntityCollection = fy;
          const cb = yb.xh().getLoadedTexturesCache(),
            Py = cb.indexOf(Zy.getInternalTexture()); - 1 !== Py && cb.splice(Py, 1), Zy.isRGBD = !0, Zy.wrapU = My.f.CLAMP_ADDRESSMODE, Zy.wrapV = My.f.CLAMP_ADDRESSMODE, yb[Wy] = Zy, yb.useDelayedTextureLoading = hy, Yy.e.ExpandRGBDTexture(Zy);
          const oy = yb.xh().onContextRestoredObservable.add((() => {
            Zy.isRGBD = !0;
            const bb = yb.onBeforeRenderObservable.add((() => {
              Zy.isReady() && (yb.onBeforeRenderObservable.remove(bb), Yy.e.ExpandRGBDTexture(Zy))
            }))
          }));
          yb.Nby.add((() => {
            yb.xh().onContextRestoredObservable.remove(oy)
          }))
        }
        return yb[Wy]
      },
      uy = yb => ny(yb, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      rb = yb => ny(yb, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Hy = yb => ny(yb, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var ab = Wy(38569),
      Fy = Wy(35861),
      py = Wy(38620),
      Ly = Wy(38777),
      Qy = Wy(38862);
    class jb extends Ly.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Dy = (() => {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy;
      let By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy = Qy.c,
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [];
      return yb = class extends Cy {
        get useEnergyConservation() {
          return (0, Oy.e)(this, bb, "f")
        }
        set useEnergyConservation(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set useSmithVisibilityHeightCorrelated(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get useSphericalHarmonics() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set useSphericalHarmonics(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Oy.e)(this, hy, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(yb) {
          (0, Oy.f)(this, hy, yb, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Oy.e)(this, fy, "f")
        }
        set mixIblRadianceWithIrradiance(yb) {
          (0, Oy.f)(this, fy, yb, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Oy.e)(this, Zy, "f")
        }
        set useLegacySpecularEnergyConservation(yb) {
          (0, Oy.f)(this, Zy, yb, "f")
        }
        get baseDiffuseModel() {
          return (0, Oy.e)(this, cb, "f")
        }
        set baseDiffuseModel(yb) {
          (0, Oy.f)(this, cb, yb, "f")
        }
        get dielectricSpecularModel() {
          return (0, Oy.e)(this, Py, "f")
        }
        set dielectricSpecularModel(yb) {
          (0, Oy.f)(this, Py, yb, "f")
        }
        get conductorSpecularModel() {
          return (0, Oy.e)(this, oy, "f")
        }
        set conductorSpecularModel(yb) {
          (0, Oy.f)(this, oy, yb, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(By) {
          let Ky = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(By, "PBRBRDF", 90, new jb, Ky), this._useEnergyConservation = yb.DEFAULT_USE_ENERGY_CONSERVATION, bb.set(this, (0, Oy.l)(this, Ty, yb.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Oy.l)(this, Vy), yb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Wy.set(this, (0, Oy.l)(this, Jy, yb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Oy.l)(this, gb), yb.DEFAULT_USE_SPHERICAL_HARMONICS), Uy.set(this, (0, Oy.l)(this, Gy, yb.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Oy.l)(this, vb), yb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), hy.set(this, (0, Oy.l)(this, ib, yb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Oy.l)(this, My), yb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), fy.set(this, (0, Oy.l)(this, Yy, yb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Oy.l)(this, Xy), yb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Zy.set(this, (0, Oy.l)(this, ny, yb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Oy.l)(this, uy), yb.DEFAULT_DIFFUSE_MODEL), cb.set(this, (0, Oy.l)(this, rb, yb.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Oy.l)(this, Hy), yb.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Py.set(this, (0, Oy.l)(this, ab, yb.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Oy.l)(this, Fy), yb.DEFAULT_CONDUCTOR_SPECULAR_MODEL), oy.set(this, (0, Oy.l)(this, py, yb.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Oy.l)(this, Ly), this._internalMarkAllSubMeshesAsMiscDirty = By._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(yb) {
          yb.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, yb.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, yb.SPHERICAL_HARMONICS = this._useSphericalHarmonics, yb.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, yb.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, yb.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, yb.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, yb.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, yb.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, hy = new WeakMap, fy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, Py = new WeakMap, oy = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cy[Symbol.metadata] ?? null) : void 0;
        By = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], Ky = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], ey = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], qb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], sy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], Sy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], Ey = [(0, Ry.T)("baseDiffuseModel"), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], ly = [(0, Ry.T)("dielectricSpecularModel"), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], mb = [(0, Ry.T)("conductorSpecularModel"), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], (0, Oy.j)(yb, null, By, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: yb => "useEnergyConservation" in yb,
            get: yb => yb.useEnergyConservation,
            set: (yb, bb) => {
              yb.useEnergyConservation = bb
            }
          },
          metadata: bb
        }, Ty, Vy), (0, Oy.j)(yb, null, Ky, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: yb => "useSmithVisibilityHeightCorrelated" in yb,
            get: yb => yb.useSmithVisibilityHeightCorrelated,
            set: (yb, bb) => {
              yb.useSmithVisibilityHeightCorrelated = bb
            }
          },
          metadata: bb
        }, Jy, gb), (0, Oy.j)(yb, null, ey, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: yb => "useSphericalHarmonics" in yb,
            get: yb => yb.useSphericalHarmonics,
            set: (yb, bb) => {
              yb.useSphericalHarmonics = bb
            }
          },
          metadata: bb
        }, Gy, vb), (0, Oy.j)(yb, null, qb, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: yb => "useSpecularGlossinessInputEnergyConservation" in yb,
            get: yb => yb.useSpecularGlossinessInputEnergyConservation,
            set: (yb, bb) => {
              yb.useSpecularGlossinessInputEnergyConservation = bb
            }
          },
          metadata: bb
        }, ib, My), (0, Oy.j)(yb, null, sy, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: yb => "mixIblRadianceWithIrradiance" in yb,
            get: yb => yb.mixIblRadianceWithIrradiance,
            set: (yb, bb) => {
              yb.mixIblRadianceWithIrradiance = bb
            }
          },
          metadata: bb
        }, Yy, Xy), (0, Oy.j)(yb, null, Sy, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: yb => "useLegacySpecularEnergyConservation" in yb,
            get: yb => yb.useLegacySpecularEnergyConservation,
            set: (yb, bb) => {
              yb.useLegacySpecularEnergyConservation = bb
            }
          },
          metadata: bb
        }, ny, uy), (0, Oy.j)(yb, null, Ey, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: yb => "baseDiffuseModel" in yb,
            get: yb => yb.baseDiffuseModel,
            set: (yb, bb) => {
              yb.baseDiffuseModel = bb
            }
          },
          metadata: bb
        }, rb, Hy), (0, Oy.j)(yb, null, ly, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: yb => "dielectricSpecularModel" in yb,
            get: yb => yb.dielectricSpecularModel,
            set: (yb, bb) => {
              yb.dielectricSpecularModel = bb
            }
          },
          metadata: bb
        }, ab, Fy), (0, Oy.j)(yb, null, mb, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: yb => "conductorSpecularModel" in yb,
            get: yb => yb.conductorSpecularModel,
            set: (yb, bb) => {
              yb.conductorSpecularModel = bb
            }
          },
          metadata: bb
        }, py, Ly), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb.DEFAULT_USE_ENERGY_CONSERVATION = !0, yb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, yb.DEFAULT_USE_SPHERICAL_HARMONICS = !0, yb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, yb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, yb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, yb.DEFAULT_DIFFUSE_MODEL = 0, yb.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, yb.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, yb
    })();
    var tb = Wy(38761),
      wy = Wy(35919),
      kb = Wy(38770),
      Ny = Wy(38594),
      zb = Wy(38841),
      Iy = Wy(38836),
      xb = Wy(38846),
      Ay = Wy(38824);
    class dy extends Ly.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let yW = (() => {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy;
      let By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy = Qy.c,
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [],
        py = [],
        Ly = [],
        jb = [],
        Dy = [],
        tb = [],
        kb = [],
        Ny = [],
        zb = [],
        xb = [],
        yW = [],
        bW = [],
        Wb = [],
        Ub = [],
        hb = [],
        fb = [],
        Zb = [],
        cW = [];
      return yb = class extends Gy {
        get isEnabled() {
          return (0, Oy.e)(this, bb, "f")
        }
        set isEnabled(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get indexOfRefraction() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set indexOfRefraction(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get texture() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set texture(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Oy.e)(this, hy, "f")
        }
        set useRoughnessFromMainTexture(yb) {
          (0, Oy.f)(this, hy, yb, "f")
        }
        get textureRoughness() {
          return (0, Oy.e)(this, fy, "f")
        }
        set textureRoughness(yb) {
          (0, Oy.f)(this, fy, yb, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Oy.e)(this, Zy, "f")
        }
        set remapF0OnInterfaceChange(yb) {
          (0, Oy.f)(this, Zy, yb, "f")
        }
        get bumpTexture() {
          return (0, Oy.e)(this, cb, "f")
        }
        set bumpTexture(yb) {
          (0, Oy.f)(this, cb, yb, "f")
        }
        get isTintEnabled() {
          return (0, Oy.e)(this, Py, "f")
        }
        set isTintEnabled(yb) {
          (0, Oy.f)(this, Py, yb, "f")
        }
        get tintTexture() {
          return (0, Oy.e)(this, oy, "f")
        }
        set tintTexture(yb) {
          (0, Oy.f)(this, oy, yb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(By) {
          let Ky = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(By, "PBRClearCoat", 100, new dy, Ky), this._isEnabled = !1, bb.set(this, (0, Oy.l)(this, vb, !1)), this.intensity = ((0, Oy.l)(this, ib), (0, Oy.l)(this, My, 1)), this.roughness = ((0, Oy.l)(this, Yy), (0, Oy.l)(this, Xy, 0)), this._indexOfRefraction = ((0, Oy.l)(this, ny), yb._DefaultIndexOfRefraction), Wy.set(this, (0, Oy.l)(this, uy, yb._DefaultIndexOfRefraction)), this._texture = ((0, Oy.l)(this, rb), null), Uy.set(this, (0, Oy.l)(this, Hy, null)), this._useRoughnessFromMainTexture = ((0, Oy.l)(this, ab), !0), hy.set(this, (0, Oy.l)(this, Fy, !0)), this._textureRoughness = ((0, Oy.l)(this, py), null), fy.set(this, (0, Oy.l)(this, Ly, null)), this._remapF0OnInterfaceChange = ((0, Oy.l)(this, jb), !0), Zy.set(this, (0, Oy.l)(this, Dy, !0)), this._bumpTexture = ((0, Oy.l)(this, tb), null), cb.set(this, (0, Oy.l)(this, kb, null)), this._isTintEnabled = ((0, Oy.l)(this, Ny), !1), Py.set(this, (0, Oy.l)(this, zb, !1)), this.tintColor = ((0, Oy.l)(this, xb), (0, Oy.l)(this, yW, wy.d.White())), this.tintColorAtDistance = ((0, Oy.l)(this, bW), (0, Oy.l)(this, Wb, 1)), this.tintThickness = ((0, Oy.l)(this, Ub), (0, Oy.l)(this, hb, 1)), this._tintTexture = ((0, Oy.l)(this, fb), null), oy.set(this, (0, Oy.l)(this, Zb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Oy.l)(this, cW), this._internalMarkAllSubMeshesAsTexturesDirty = By._dirtyCallbacks[1]
        }
        isReadyForSubMesh(yb, bb, Wy) {
          if (!this._isEnabled) return !0;
          const Uy = this._material._disableBumpMap;
          if (yb._areTexturesDirty && bb.texturesEnabled) {
            if (this._texture && Iy.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Iy.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Wy.getCaps().standardDerivatives && this._bumpTexture && Iy.d.ClearCoatBumpTextureEnabled && !Uy && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Iy.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, Wy) {
          this._isEnabled ? (bb.CLEARCOAT = !0, bb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bb.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, bb._areTexturesDirty && Wy.texturesEnabled && (this._texture && Iy.d.ClearCoatTextureEnabled ? (0, Ay.$)(this._texture, bb, "CLEARCOAT_TEXTURE") : bb.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Iy.d.ClearCoatTextureEnabled ? (0, Ay.$)(this._textureRoughness, bb, "CLEARCOAT_TEXTURE_ROUGHNESS") : bb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Iy.d.ClearCoatBumpTextureEnabled ? (0, Ay.$)(this._bumpTexture, bb, "CLEARCOAT_BUMP") : bb.CLEARCOAT_BUMP = !1, bb.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === yb._DefaultIndexOfRefraction, this._isTintEnabled ? (bb.CLEARCOAT_TINT = !0, this._tintTexture && Iy.d.ClearCoatTintTextureEnabled ? ((0, Ay.$)(this._tintTexture, bb, "CLEARCOAT_TINT_TEXTURE"), bb.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : bb.CLEARCOAT_TINT_TEXTURE = !1) : (bb.CLEARCOAT_TINT = !1, bb.CLEARCOAT_TINT_TEXTURE = !1))) : (bb.CLEARCOAT = !1, bb.CLEARCOAT_TEXTURE = !1, bb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, bb.CLEARCOAT_BUMP = !1, bb.CLEARCOAT_TINT = !1, bb.CLEARCOAT_TINT_TEXTURE = !1, bb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bb.CLEARCOAT_DEFAULTIOR = !1, bb.CLEARCOAT_TEXTUREDIRECTUV = 0, bb.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, bb.CLEARCOAT_BUMPDIRECTUV = 0, bb.CLEARCOAT_REMAP_F0 = !1, bb.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, bb.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(yb, bb, Wy, Uy) {
          if (!this._isEnabled) return;
          const hy = Uy.materialDefines,
            fy = this._material.isFrozen,
            Zy = this._material._disableBumpMap,
            cb = this._material._invertNormalMapX,
            Py = this._material._invertNormalMapY;
          if (!yb.useUbo || !fy || !yb.isSync) {
            (this._texture || this._textureRoughness) && Iy.d.ClearCoatTextureEnabled && (yb.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ay.z)(this._texture, yb, "clearCoat"), this._textureRoughness && !hy.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ay.z)(this._textureRoughness, yb, "clearCoatRoughness")), this._bumpTexture && Wy.getCaps().standardDerivatives && Iy.d.ClearCoatTextureEnabled && !Zy && (yb.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Ay.z)(this._bumpTexture, yb, "clearCoatBump"), bb._mirroredCameraPosition ? yb.updateFloat2("vClearCoatTangentSpaceParams", cb ? 1 : -1, Py ? 1 : -1) : yb.updateFloat2("vClearCoatTangentSpaceParams", cb ? -1 : 1, Py ? -1 : 1)), this._tintTexture && Iy.d.ClearCoatTintTextureEnabled && (yb.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Ay.z)(this._tintTexture, yb, "clearCoatTint")), yb.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Uy = 1 - this._indexOfRefraction,
              fy = 1 + this._indexOfRefraction,
              oy = Math.pow(-Uy / fy, 2),
              By = 1 / this._indexOfRefraction;
            yb.updateFloat4("vClearCoatRefractionParams", oy, By, Uy, fy), this._isTintEnabled && (yb.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), yb.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          bb.texturesEnabled && (this._texture && Iy.d.ClearCoatTextureEnabled && yb.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !hy.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Iy.d.ClearCoatTextureEnabled && yb.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Wy.getCaps().standardDerivatives && Iy.d.ClearCoatBumpTextureEnabled && !Zy && yb.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Iy.d.ClearCoatTintTextureEnabled && yb.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(yb) {
          return this._texture === yb || (this._textureRoughness === yb || (this._bumpTexture === yb || this._tintTexture === yb))
        }
        getActiveTextures(yb) {
          this._texture && yb.push(this._texture), this._textureRoughness && yb.push(this._textureRoughness), this._bumpTexture && yb.push(this._bumpTexture), this._tintTexture && yb.push(this._tintTexture)
        }
        getAnimatables(yb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && yb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && yb.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && yb.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && yb.push(this._tintTexture)
        }
        dispose(yb) {
          yb && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(yb, bb, Wy) {
          return yb.CLEARCOAT_BUMP && bb.addFallback(Wy++, "CLEARCOAT_BUMP"), yb.CLEARCOAT_TINT && bb.addFallback(Wy++, "CLEARCOAT_TINT"), yb.CLEARCOAT && bb.addFallback(Wy++, "CLEARCOAT"), Wy
        }
        getSamplers(yb) {
          yb.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, hy = new WeakMap, fy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, Py = new WeakMap, oy = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gy[Symbol.metadata] ?? null) : void 0;
        By = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ky = [(0, Ry.T)()], ey = [(0, Ry.T)()], qb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Sy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], ly = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Cy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, Ry.q)()], Vy = [(0, Ry.T)()], Jy = [(0, Ry.T)()], gb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], (0, Oy.j)(yb, null, By, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: bb
        }, vb, ib), (0, Oy.j)(yb, null, qb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: yb => "indexOfRefraction" in yb,
            get: yb => yb.indexOfRefraction,
            set: (yb, bb) => {
              yb.indexOfRefraction = bb
            }
          },
          metadata: bb
        }, uy, rb), (0, Oy.j)(yb, null, sy, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: yb => "texture" in yb,
            get: yb => yb.texture,
            set: (yb, bb) => {
              yb.texture = bb
            }
          },
          metadata: bb
        }, Hy, ab), (0, Oy.j)(yb, null, Sy, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRoughnessFromMainTexture" in yb,
            get: yb => yb.useRoughnessFromMainTexture,
            set: (yb, bb) => {
              yb.useRoughnessFromMainTexture = bb
            }
          },
          metadata: bb
        }, Fy, py), (0, Oy.j)(yb, null, Ey, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "textureRoughness" in yb,
            get: yb => yb.textureRoughness,
            set: (yb, bb) => {
              yb.textureRoughness = bb
            }
          },
          metadata: bb
        }, Ly, jb), (0, Oy.j)(yb, null, ly, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: yb => "remapF0OnInterfaceChange" in yb,
            get: yb => yb.remapF0OnInterfaceChange,
            set: (yb, bb) => {
              yb.remapF0OnInterfaceChange = bb
            }
          },
          metadata: bb
        }, Dy, tb), (0, Oy.j)(yb, null, mb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "bumpTexture" in yb,
            get: yb => yb.bumpTexture,
            set: (yb, bb) => {
              yb.bumpTexture = bb
            }
          },
          metadata: bb
        }, kb, Ny), (0, Oy.j)(yb, null, Cy, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isTintEnabled" in yb,
            get: yb => yb.isTintEnabled,
            set: (yb, bb) => {
              yb.isTintEnabled = bb
            }
          },
          metadata: bb
        }, zb, xb), (0, Oy.j)(yb, null, gb, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintTexture" in yb,
            get: yb => yb.tintTexture,
            set: (yb, bb) => {
              yb.tintTexture = bb
            }
          },
          metadata: bb
        }, Zb, cW), (0, Oy.j)(null, null, Ky, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensity" in yb,
            get: yb => yb.intensity,
            set: (yb, bb) => {
              yb.intensity = bb
            }
          },
          metadata: bb
        }, My, Yy), (0, Oy.j)(null, null, ey, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "roughness" in yb,
            get: yb => yb.roughness,
            set: (yb, bb) => {
              yb.roughness = bb
            }
          },
          metadata: bb
        }, Xy, ny), (0, Oy.j)(null, null, Ty, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintColor" in yb,
            get: yb => yb.tintColor,
            set: (yb, bb) => {
              yb.tintColor = bb
            }
          },
          metadata: bb
        }, yW, bW), (0, Oy.j)(null, null, Vy, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintColorAtDistance" in yb,
            get: yb => yb.tintColorAtDistance,
            set: (yb, bb) => {
              yb.tintColorAtDistance = bb
            }
          },
          metadata: bb
        }, Wb, Ub), (0, Oy.j)(null, null, Jy, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintThickness" in yb,
            get: yb => yb.tintThickness,
            set: (yb, bb) => {
              yb.tintThickness = bb
            }
          },
          metadata: bb
        }, hb, fb), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb._DefaultIndexOfRefraction = 1.5, yb
    })();
    class bW extends Ly.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Wb = (() => {
      var yb, bb, Wy, Uy;
      let hy, fy, Zy, cb, Py, oy, By, Ky = Qy.c,
        ey = [],
        qb = [],
        sy = [],
        Sy = [],
        Ey = [],
        ly = [],
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        vb = [];
      return yb = class extends Ky {
        get isEnabled() {
          return (0, Oy.e)(this, bb, "f")
        }
        set isEnabled(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get texture() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set texture(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get thicknessTexture() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set thicknessTexture(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(hy) {
          let fy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(hy, "PBRIridescence", 110, new bW, fy), this._isEnabled = !1, bb.set(this, (0, Oy.l)(this, ey, !1)), this.intensity = ((0, Oy.l)(this, qb), (0, Oy.l)(this, sy, 1)), this.minimumThickness = ((0, Oy.l)(this, Sy), (0, Oy.l)(this, Ey, yb._DefaultMinimumThickness)), this.maximumThickness = ((0, Oy.l)(this, ly), (0, Oy.l)(this, mb, yb._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Oy.l)(this, Cy), (0, Oy.l)(this, Ty, yb._DefaultIndexOfRefraction)), this._texture = ((0, Oy.l)(this, Vy), null), Wy.set(this, (0, Oy.l)(this, Jy, null)), this._thicknessTexture = ((0, Oy.l)(this, gb), null), Uy.set(this, (0, Oy.l)(this, Gy, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Oy.l)(this, vb), this._internalMarkAllSubMeshesAsTexturesDirty = hy._dirtyCallbacks[1]
        }
        isReadyForSubMesh(yb, bb) {
          if (!this._isEnabled) return !0;
          if (yb._areTexturesDirty && bb.texturesEnabled) {
            if (this._texture && Iy.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Iy.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(yb, bb) {
          this._isEnabled ? (yb.IRIDESCENCE = !0, yb._areTexturesDirty && bb.texturesEnabled && (this._texture && Iy.d.IridescenceTextureEnabled ? (0, Ay.$)(this._texture, yb, "IRIDESCENCE_TEXTURE") : yb.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Iy.d.IridescenceTextureEnabled ? (0, Ay.$)(this._thicknessTexture, yb, "IRIDESCENCE_THICKNESS_TEXTURE") : yb.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (yb.IRIDESCENCE = !1, yb.IRIDESCENCE_TEXTURE = !1, yb.IRIDESCENCE_THICKNESS_TEXTURE = !1, yb.IRIDESCENCE_TEXTUREDIRECTUV = 0, yb.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(yb, bb) {
          if (!this._isEnabled) return;
          const Wy = this._material.isFrozen;
          yb.useUbo && Wy && yb.isSync || ((this._texture || this._thicknessTexture) && Iy.d.IridescenceTextureEnabled && (yb.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Ay.z)(this._texture, yb, "iridescence"), this._thicknessTexture && (0, Ay.z)(this._thicknessTexture, yb, "iridescenceThickness")), yb.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), bb.texturesEnabled && (this._texture && Iy.d.IridescenceTextureEnabled && yb.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Iy.d.IridescenceTextureEnabled && yb.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(yb) {
          return this._texture === yb || this._thicknessTexture === yb
        }
        getActiveTextures(yb) {
          this._texture && yb.push(this._texture), this._thicknessTexture && yb.push(this._thicknessTexture)
        }
        getAnimatables(yb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && yb.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && yb.push(this._thicknessTexture)
        }
        dispose(yb) {
          yb && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(yb, bb, Wy) {
          return yb.IRIDESCENCE && bb.addFallback(Wy++, "IRIDESCENCE"), Wy
        }
        getSamplers(yb) {
          yb.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ky[Symbol.metadata] ?? null) : void 0;
        hy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, Ry.T)()], Zy = [(0, Ry.T)()], cb = [(0, Ry.T)()], Py = [(0, Ry.T)()], oy = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], By = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], (0, Oy.j)(yb, null, hy, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: bb
        }, ey, qb), (0, Oy.j)(yb, null, oy, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: yb => "texture" in yb,
            get: yb => yb.texture,
            set: (yb, bb) => {
              yb.texture = bb
            }
          },
          metadata: bb
        }, Jy, gb), (0, Oy.j)(yb, null, By, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "thicknessTexture" in yb,
            get: yb => yb.thicknessTexture,
            set: (yb, bb) => {
              yb.thicknessTexture = bb
            }
          },
          metadata: bb
        }, Gy, vb), (0, Oy.j)(null, null, fy, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensity" in yb,
            get: yb => yb.intensity,
            set: (yb, bb) => {
              yb.intensity = bb
            }
          },
          metadata: bb
        }, sy, Sy), (0, Oy.j)(null, null, Zy, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: yb => "minimumThickness" in yb,
            get: yb => yb.minimumThickness,
            set: (yb, bb) => {
              yb.minimumThickness = bb
            }
          },
          metadata: bb
        }, Ey, ly), (0, Oy.j)(null, null, cb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: yb => "maximumThickness" in yb,
            get: yb => yb.maximumThickness,
            set: (yb, bb) => {
              yb.maximumThickness = bb
            }
          },
          metadata: bb
        }, mb, Cy), (0, Oy.j)(null, null, Py, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: yb => "indexOfRefraction" in yb,
            get: yb => yb.indexOfRefraction,
            set: (yb, bb) => {
              yb.indexOfRefraction = bb
            }
          },
          metadata: bb
        }, Ty, Vy), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb._DefaultMinimumThickness = 100, yb._DefaultMaximumThickness = 400, yb._DefaultIndexOfRefraction = 1.3, yb
    })();
    class Ub extends Ly.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let hb = (() => {
      var yb, bb, Wy, Uy;
      let hy, fy, Zy, cb, Py, oy = Qy.c,
        By = [],
        Ky = [],
        ey = [],
        qb = [],
        sy = [],
        Sy = [],
        Ey = [],
        ly = [],
        mb = [],
        Cy = [];
      return yb = class extends oy {
        get isEnabled() {
          return (0, Oy.e)(this, bb, "f")
        }
        set isEnabled(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        set angle(yb) {
          this.direction.x = Math.cos(yb), this.direction.y = Math.sin(yb)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set texture(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get legacy() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set legacy(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
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
        constructor(yb) {
          let hy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yb, "PBRAnisotropic", 110, new Ub, hy), this._isEnabled = !1, bb.set(this, (0, Oy.l)(this, By, !1)), this.intensity = ((0, Oy.l)(this, Ky), (0, Oy.l)(this, ey, 1)), this.direction = ((0, Oy.l)(this, qb), (0, Oy.l)(this, sy, new Fy.m(1, 0))), this._texture = ((0, Oy.l)(this, Sy), null), Wy.set(this, (0, Oy.l)(this, Ey, null)), this._legacy = ((0, Oy.l)(this, ly), !1), Uy.set(this, (0, Oy.l)(this, mb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Oy.l)(this, Cy), this._internalMarkAllSubMeshesAsTexturesDirty = yb._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = yb._dirtyCallbacks[16]
        }
        isReadyForSubMesh(yb, bb) {
          return !this._isEnabled || !(yb._areTexturesDirty && bb.texturesEnabled && this._texture && Iy.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(yb, bb, Wy) {
          this._isEnabled ? (yb.ANISOTROPIC = this._isEnabled, this._isEnabled && !Wy.isVerticesDataPresent(py.k.TangentKind) && (yb._needUVs = !0, yb.MAINUV1 = !0), yb._areTexturesDirty && bb.texturesEnabled && (this._texture && Iy.d.AnisotropicTextureEnabled ? (0, Ay.$)(this._texture, yb, "ANISOTROPIC_TEXTURE") : yb.ANISOTROPIC_TEXTURE = !1), yb._areMiscDirty && (yb.ANISOTROPIC_LEGACY = this._legacy)) : (yb.ANISOTROPIC = !1, yb.ANISOTROPIC_TEXTURE = !1, yb.ANISOTROPIC_TEXTUREDIRECTUV = 0, yb.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(yb, bb) {
          if (!this._isEnabled) return;
          const Wy = this._material.isFrozen;
          yb.useUbo && Wy && yb.isSync || (this._texture && Iy.d.AnisotropicTextureEnabled && (yb.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Ay.z)(this._texture, yb, "anisotropy")), yb.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), bb.texturesEnabled && this._texture && Iy.d.AnisotropicTextureEnabled && yb.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(yb) {
          return this._texture === yb
        }
        getActiveTextures(yb) {
          this._texture && yb.push(this._texture)
        }
        getAnimatables(yb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && yb.push(this._texture)
        }
        dispose(yb) {
          yb && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(yb, bb, Wy) {
          return yb.ANISOTROPIC && bb.addFallback(Wy++, "ANISOTROPIC"), Wy
        }
        getSamplers(yb) {
          yb.push("anisotropySampler")
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
        parse(yb, bb, Wy) {
          super.parse(yb, bb, Wy), void 0 === yb.legacy && (this.legacy = !0)
        }
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(oy[Symbol.metadata] ?? null) : void 0;
        hy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, Ry.T)()], Zy = [(0, Ry.N)()], cb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Py = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], (0, Oy.j)(yb, null, hy, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: bb
        }, By, Ky), (0, Oy.j)(yb, null, cb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: yb => "texture" in yb,
            get: yb => yb.texture,
            set: (yb, bb) => {
              yb.texture = bb
            }
          },
          metadata: bb
        }, Ey, ly), (0, Oy.j)(yb, null, Py, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: yb => "legacy" in yb,
            get: yb => yb.legacy,
            set: (yb, bb) => {
              yb.legacy = bb
            }
          },
          metadata: bb
        }, mb, Cy), (0, Oy.j)(null, null, fy, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensity" in yb,
            get: yb => yb.intensity,
            set: (yb, bb) => {
              yb.intensity = bb
            }
          },
          metadata: bb
        }, ey, qb), (0, Oy.j)(null, null, Zy, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: yb => "direction" in yb,
            get: yb => yb.direction,
            set: (yb, bb) => {
              yb.direction = bb
            }
          },
          metadata: bb
        }, sy, Sy), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb
    })();
    class fb extends Ly.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Zb = (() => {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb;
      let Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly = Qy.c,
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        vb = [],
        ib = [],
        My = [],
        Yy = [],
        Xy = [],
        ny = [],
        uy = [],
        rb = [],
        Hy = [],
        ab = [],
        Fy = [];
      return yb = class extends ly {
        get isEnabled() {
          return (0, Oy.e)(this, bb, "f")
        }
        set isEnabled(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set linkSheenWithAlbedo(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get texture() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set texture(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Oy.e)(this, hy, "f")
        }
        set useRoughnessFromMainTexture(yb) {
          (0, Oy.f)(this, hy, yb, "f")
        }
        get roughness() {
          return (0, Oy.e)(this, fy, "f")
        }
        set roughness(yb) {
          (0, Oy.f)(this, fy, yb, "f")
        }
        get textureRoughness() {
          return (0, Oy.e)(this, Zy, "f")
        }
        set textureRoughness(yb) {
          (0, Oy.f)(this, Zy, yb, "f")
        }
        get albedoScaling() {
          return (0, Oy.e)(this, cb, "f")
        }
        set albedoScaling(yb) {
          (0, Oy.f)(this, cb, yb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(yb) {
          let Py = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yb, "Sheen", 120, new fb, Py), this._isEnabled = !1, bb.set(this, (0, Oy.l)(this, mb, !1)), this._linkSheenWithAlbedo = ((0, Oy.l)(this, Cy), !1), Wy.set(this, (0, Oy.l)(this, Ty, !1)), this.intensity = ((0, Oy.l)(this, Vy), (0, Oy.l)(this, Jy, 1)), this.color = ((0, Oy.l)(this, gb), (0, Oy.l)(this, Gy, wy.d.White())), this._texture = ((0, Oy.l)(this, vb), null), Uy.set(this, (0, Oy.l)(this, ib, null)), this._useRoughnessFromMainTexture = ((0, Oy.l)(this, My), !0), hy.set(this, (0, Oy.l)(this, Yy, !0)), this._roughness = ((0, Oy.l)(this, Xy), null), fy.set(this, (0, Oy.l)(this, ny, null)), this._textureRoughness = ((0, Oy.l)(this, uy), null), Zy.set(this, (0, Oy.l)(this, rb, null)), this._albedoScaling = ((0, Oy.l)(this, Hy), !1), cb.set(this, (0, Oy.l)(this, ab, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Oy.l)(this, Fy), this._internalMarkAllSubMeshesAsTexturesDirty = yb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(yb, bb) {
          if (!this._isEnabled) return !0;
          if (yb._areTexturesDirty && bb.texturesEnabled) {
            if (this._texture && Iy.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Iy.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(yb, bb) {
          this._isEnabled ? (yb.SHEEN = !0, yb.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, yb.SHEEN_ROUGHNESS = null !== this._roughness, yb.SHEEN_ALBEDOSCALING = this._albedoScaling, yb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, yb._areTexturesDirty && bb.texturesEnabled && (this._texture && Iy.d.SheenTextureEnabled ? ((0, Ay.$)(this._texture, yb, "SHEEN_TEXTURE"), yb.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : yb.SHEEN_TEXTURE = !1, this._textureRoughness && Iy.d.SheenTextureEnabled ? (0, Ay.$)(this._textureRoughness, yb, "SHEEN_TEXTURE_ROUGHNESS") : yb.SHEEN_TEXTURE_ROUGHNESS = !1)) : (yb.SHEEN = !1, yb.SHEEN_TEXTURE = !1, yb.SHEEN_TEXTURE_ROUGHNESS = !1, yb.SHEEN_LINKWITHALBEDO = !1, yb.SHEEN_ROUGHNESS = !1, yb.SHEEN_ALBEDOSCALING = !1, yb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, yb.SHEEN_GAMMATEXTURE = !1, yb.SHEEN_TEXTUREDIRECTUV = 0, yb.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(yb, bb, Wy, Uy) {
          if (!this._isEnabled) return;
          const hy = Uy.materialDefines,
            fy = this._material.isFrozen;
          yb.useUbo && fy && yb.isSync || ((this._texture || this._textureRoughness) && Iy.d.SheenTextureEnabled && (yb.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ay.z)(this._texture, yb, "sheen"), this._textureRoughness && !hy.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ay.z)(this._textureRoughness, yb, "sheenRoughness")), yb.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && yb.updateFloat("vSheenRoughness", this._roughness)), bb.texturesEnabled && (this._texture && Iy.d.SheenTextureEnabled && yb.setTexture("sheenSampler", this._texture), this._textureRoughness && !hy.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Iy.d.SheenTextureEnabled && yb.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(yb) {
          return this._texture === yb || this._textureRoughness === yb
        }
        getActiveTextures(yb) {
          this._texture && yb.push(this._texture), this._textureRoughness && yb.push(this._textureRoughness)
        }
        getAnimatables(yb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && yb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && yb.push(this._textureRoughness)
        }
        dispose(yb) {
          yb && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(yb, bb, Wy) {
          return yb.SHEEN && bb.addFallback(Wy++, "SHEEN"), Wy
        }
        getSamplers(yb) {
          yb.push("sheenSampler", "sheenRoughnessSampler")
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
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, hy = new WeakMap, fy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ly[Symbol.metadata] ?? null) : void 0;
        Py = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], oy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], By = [(0, Ry.T)()], Ky = [(0, Ry.q)()], ey = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Sy = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], (0, Oy.j)(yb, null, Py, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: bb
        }, mb, Cy), (0, Oy.j)(yb, null, oy, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: yb => "linkSheenWithAlbedo" in yb,
            get: yb => yb.linkSheenWithAlbedo,
            set: (yb, bb) => {
              yb.linkSheenWithAlbedo = bb
            }
          },
          metadata: bb
        }, Ty, Vy), (0, Oy.j)(yb, null, ey, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: yb => "texture" in yb,
            get: yb => yb.texture,
            set: (yb, bb) => {
              yb.texture = bb
            }
          },
          metadata: bb
        }, ib, My), (0, Oy.j)(yb, null, qb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRoughnessFromMainTexture" in yb,
            get: yb => yb.useRoughnessFromMainTexture,
            set: (yb, bb) => {
              yb.useRoughnessFromMainTexture = bb
            }
          },
          metadata: bb
        }, Yy, Xy), (0, Oy.j)(yb, null, sy, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "roughness" in yb,
            get: yb => yb.roughness,
            set: (yb, bb) => {
              yb.roughness = bb
            }
          },
          metadata: bb
        }, ny, uy), (0, Oy.j)(yb, null, Sy, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "textureRoughness" in yb,
            get: yb => yb.textureRoughness,
            set: (yb, bb) => {
              yb.textureRoughness = bb
            }
          },
          metadata: bb
        }, rb, Hy), (0, Oy.j)(yb, null, Ey, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: yb => "albedoScaling" in yb,
            get: yb => yb.albedoScaling,
            set: (yb, bb) => {
              yb.albedoScaling = bb
            }
          },
          metadata: bb
        }, ab, Fy), (0, Oy.j)(null, null, By, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "intensity" in yb,
            get: yb => yb.intensity,
            set: (yb, bb) => {
              yb.intensity = bb
            }
          },
          metadata: bb
        }, Jy, gb), (0, Oy.j)(null, null, Ky, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: yb => "color" in yb,
            get: yb => yb.color,
            set: (yb, bb) => {
              yb.color = bb
            }
          },
          metadata: bb
        }, Gy, vb), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb
    })();
    class cW extends Ly.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Pb = (() => {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey;
      let ly, mb, Cy, Ty, Vy, Jy, gb, Gy, vb, ib, My, Yy, Xy, ny, uy, rb, Hy, ab, py, Ly, jb, Dy, tb, kb, Ny, zb, xb, dy, yW, bW, Wb = Qy.c,
        Ub = [],
        hb = [],
        fb = [],
        Zb = [],
        Pb = [],
        ob = [],
        Bb = [],
        Kb = [],
        eb = [],
        qW = [],
        sb = [],
        Sb = [],
        Eb = [],
        lb = [],
        mW = [],
        Cb = [],
        Tb = [],
        Vb = [],
        Jb = [],
        gW = [],
        Gb = [],
        Ob = [],
        Rb = [],
        vW = [],
        iW = [],
        Mb = [],
        Yb = [],
        Xb = [],
        nb = [],
        ub = [],
        rW = [],
        Hb = [],
        aW = [],
        Fb = [],
        pb = [],
        Lb = [],
        Qb = [],
        jW = [],
        Db = [],
        tW = [],
        wb = [],
        kW = [],
        Nb = [],
        zW = [],
        Ib = [],
        xW = [],
        Ab = [],
        db = [],
        yU = [],
        bU = [],
        WW = [],
        UW = [],
        hW = [],
        fW = [],
        ZW = [],
        cU = [],
        PW = [],
        oW = [],
        BW = [],
        KW = [];
      return yb = class extends Wb {
        get isRefractionEnabled() {
          return (0, Oy.e)(this, bb, "f")
        }
        set isRefractionEnabled(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set isTranslucencyEnabled(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get isDispersionEnabled() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set isDispersionEnabled(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        get isScatteringEnabled() {
          return (0, Oy.e)(this, hy, "f")
        }
        set isScatteringEnabled(yb) {
          (0, Oy.f)(this, hy, yb, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(yb) {
          this._scene.enableSubSurfaceForPrePass() && yb && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(yb))
        }
        get useAlbedoToTintRefraction() {
          return (0, Oy.e)(this, fy, "f")
        }
        set useAlbedoToTintRefraction(yb) {
          (0, Oy.f)(this, fy, yb, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Oy.e)(this, Zy, "f")
        }
        set useAlbedoToTintTranslucency(yb) {
          (0, Oy.f)(this, Zy, yb, "f")
        }
        get thicknessTexture() {
          return (0, Oy.e)(this, cb, "f")
        }
        set thicknessTexture(yb) {
          (0, Oy.f)(this, cb, yb, "f")
        }
        get refractionTexture() {
          return (0, Oy.e)(this, Py, "f")
        }
        set refractionTexture(yb) {
          (0, Oy.f)(this, Py, yb, "f")
        }
        get indexOfRefraction() {
          return (0, Oy.e)(this, oy, "f")
        }
        set indexOfRefraction(yb) {
          (0, Oy.f)(this, oy, yb, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(yb) {
          const bb = yb >= 1 ? yb : -1;
          this._volumeIndexOfRefraction !== bb && (this._volumeIndexOfRefraction = bb, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Oy.e)(this, By, "f")
        }
        set invertRefractionY(yb) {
          (0, Oy.f)(this, By, yb, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Oy.e)(this, Ky, "f")
        }
        set linkRefractionWithTransparency(yb) {
          (0, Oy.f)(this, Ky, yb, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Oy.e)(this, ey, "f")
        }
        set useMaskFromThicknessTexture(yb) {
          (0, Oy.f)(this, ey, yb, "f")
        }
        get refractionIntensityTexture() {
          return (0, Oy.e)(this, qb, "f")
        }
        set refractionIntensityTexture(yb) {
          (0, Oy.f)(this, qb, yb, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Oy.e)(this, sy, "f")
        }
        set translucencyIntensityTexture(yb) {
          (0, Oy.f)(this, sy, yb, "f")
        }
        get translucencyColorTexture() {
          return (0, Oy.e)(this, Sy, "f")
        }
        set translucencyColorTexture(yb) {
          (0, Oy.f)(this, Sy, yb, "f")
        }
        get useGltfStyleTextures() {
          return (0, Oy.e)(this, Ey, "f")
        }
        set useGltfStyleTextures(yb) {
          (0, Oy.f)(this, Ey, yb, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(yb) {
          this.legacyTranslucency = yb
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
        constructor(ly) {
          let mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ly, "PBRSubSurface", 130, new cW, mb), this._isRefractionEnabled = !1, bb.set(this, (0, Oy.l)(this, Ub, !1)), this._isTranslucencyEnabled = ((0, Oy.l)(this, hb), !1), Wy.set(this, (0, Oy.l)(this, fb, !1)), this._isDispersionEnabled = ((0, Oy.l)(this, Zb), !1), Uy.set(this, (0, Oy.l)(this, Pb, !1)), this._isScatteringEnabled = ((0, Oy.l)(this, ob), !1), hy.set(this, (0, Oy.l)(this, Bb, !1)), this._scatteringDiffusionProfileIndex = ((0, Oy.l)(this, Kb), (0, Oy.l)(this, eb, 0)), this.refractionIntensity = ((0, Oy.l)(this, qW), (0, Oy.l)(this, sb, 1)), this.translucencyIntensity = ((0, Oy.l)(this, Sb), (0, Oy.l)(this, Eb, 1)), this._useAlbedoToTintRefraction = ((0, Oy.l)(this, lb), !1), fy.set(this, (0, Oy.l)(this, mW, !1)), this._useAlbedoToTintTranslucency = ((0, Oy.l)(this, Cb), !1), Zy.set(this, (0, Oy.l)(this, Tb, !1)), this._thicknessTexture = ((0, Oy.l)(this, Vb), null), cb.set(this, (0, Oy.l)(this, Jb, null)), this._refractionTexture = ((0, Oy.l)(this, gW), null), Py.set(this, (0, Oy.l)(this, Gb, null)), this._indexOfRefraction = ((0, Oy.l)(this, Ob), 1.5), oy.set(this, (0, Oy.l)(this, Rb, 1.5)), this._volumeIndexOfRefraction = ((0, Oy.l)(this, vW), (0, Oy.l)(this, iW, -1)), this._invertRefractionY = ((0, Oy.l)(this, Mb), !1), By.set(this, (0, Oy.l)(this, Yb, !1)), this._linkRefractionWithTransparency = ((0, Oy.l)(this, Xb), !1), Ky.set(this, (0, Oy.l)(this, nb, !1)), this.minimumThickness = ((0, Oy.l)(this, ub), (0, Oy.l)(this, rW, 0)), this.maximumThickness = ((0, Oy.l)(this, Hb), (0, Oy.l)(this, aW, 1)), this.useThicknessAsDepth = ((0, Oy.l)(this, Fb), (0, Oy.l)(this, pb, !1)), this.tintColor = ((0, Oy.l)(this, Lb), (0, Oy.l)(this, Qb, wy.d.White())), this.tintColorAtDistance = ((0, Oy.l)(this, jW), (0, Oy.l)(this, Db, 1)), this.dispersion = ((0, Oy.l)(this, tW), (0, Oy.l)(this, wb, 0)), this.diffusionDistance = ((0, Oy.l)(this, kW), (0, Oy.l)(this, Nb, wy.d.White())), this._useMaskFromThicknessTexture = ((0, Oy.l)(this, zW), !1), ey.set(this, (0, Oy.l)(this, Ib, !1)), this._refractionIntensityTexture = ((0, Oy.l)(this, xW), null), qb.set(this, (0, Oy.l)(this, Ab, null)), this._translucencyIntensityTexture = ((0, Oy.l)(this, db), null), sy.set(this, (0, Oy.l)(this, yU, null)), this.translucencyColor = ((0, Oy.l)(this, bU), (0, Oy.l)(this, WW, null)), this._translucencyColorTexture = ((0, Oy.l)(this, UW), null), Sy.set(this, (0, Oy.l)(this, hW, null)), this._useGltfStyleTextures = ((0, Oy.l)(this, fW), !0), Ey.set(this, (0, Oy.l)(this, ZW, !0)), this.applyAlbedoAfterSubSurface = ((0, Oy.l)(this, cU), (0, Oy.l)(this, PW, yb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Oy.l)(this, oW), (0, Oy.l)(this, BW, yb.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Oy.l)(this, KW), this._scene = ly.kWy(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = ly._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = ly._dirtyCallbacks[32]
        }
        isReadyForSubMesh(yb, bb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (yb._areTexturesDirty && bb.texturesEnabled) {
            if (this._thicknessTexture && Iy.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Iy.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Iy.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Iy.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const yb = this._getRefractionTexture(bb);
            if (yb && Iy.d.RefractionTextureEnabled && !yb.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(yb, bb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return yb.SUBSURFACE = !1, yb.SS_DISPERSION = !1, yb.SS_TRANSLUCENCY = !1, yb.SS_SCATTERING = !1, yb.SS_REFRACTION = !1, yb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, yb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, yb.SS_THICKNESSANDMASK_TEXTURE = !1, yb.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, yb.SS_HAS_THICKNESS = !1, yb.SS_REFRACTIONINTENSITY_TEXTURE = !1, yb.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, yb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, yb.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, yb.SS_REFRACTIONMAP_3D = !1, yb.SS_REFRACTIONMAP_OPPOSITEZ = !1, yb.SS_LODINREFRACTIONALPHA = !1, yb.SS_GAMMAREFRACTION = !1, yb.SS_RGBDREFRACTION = !1, yb.SS_LINEARSPECULARREFRACTION = !1, yb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, yb.SS_ALBEDOFORREFRACTIONTINT = !1, yb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, yb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, yb.SS_USE_THICKNESS_AS_DEPTH = !1, yb.SS_USE_GLTF_TEXTURES = !1, yb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, yb.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, yb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(yb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (yb._areTexturesDirty) {
            if (yb.SUBSURFACE = !0, yb.SS_DISPERSION = this._isDispersionEnabled, yb.SS_TRANSLUCENCY = this._isTranslucencyEnabled, yb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, yb.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, yb.SS_SCATTERING = this._isScatteringEnabled, yb.SS_THICKNESSANDMASK_TEXTURE = !1, yb.SS_REFRACTIONINTENSITY_TEXTURE = !1, yb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, yb.SS_HAS_THICKNESS = !1, yb.SS_USE_GLTF_TEXTURES = !1, yb.SS_REFRACTION = !1, yb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, yb.SS_REFRACTIONMAP_3D = !1, yb.SS_GAMMAREFRACTION = !1, yb.SS_RGBDREFRACTION = !1, yb.SS_LINEARSPECULARREFRACTION = !1, yb.SS_REFRACTIONMAP_OPPOSITEZ = !1, yb.SS_LODINREFRACTIONALPHA = !1, yb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, yb.SS_ALBEDOFORREFRACTIONTINT = !1, yb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, yb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, yb.SS_USE_THICKNESS_AS_DEPTH = !1, yb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, yb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, yb._areTexturesDirty && bb.texturesEnabled && (this._thicknessTexture && Iy.d.ThicknessTextureEnabled && (0, Ay.$)(this._thicknessTexture, yb, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Iy.d.RefractionIntensityTextureEnabled && (0, Ay.$)(this._refractionIntensityTexture, yb, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Iy.d.TranslucencyIntensityTextureEnabled && (0, Ay.$)(this._translucencyIntensityTexture, yb, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Iy.d.TranslucencyColorTextureEnabled && ((0, Ay.$)(this._translucencyColorTexture, yb, "SS_TRANSLUCENCYCOLOR_TEXTURE"), yb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), yb.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, yb.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, yb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, yb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && bb.texturesEnabled) {
              const Wy = this._getRefractionTexture(bb);
              Wy && Iy.d.RefractionTextureEnabled && (yb.SS_REFRACTION = !0, yb.SS_REFRACTIONMAP_3D = Wy.isCube, yb.SS_GAMMAREFRACTION = Wy.gammaSpace, yb.SS_RGBDREFRACTION = Wy.isRGBD, yb.SS_LINEARSPECULARREFRACTION = Wy.linearSpecularLOD, yb.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Wy.isCube ? !Wy.invertZ : Wy.invertZ, yb.SS_LODINREFRACTIONALPHA = Wy.lodLevelInAlpha, yb.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, yb.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, yb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Wy.isCube && Wy.boundingBoxSize, yb.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (yb.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(yb, bb, Wy, Uy) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) yb.updateFloat2("vThicknessParam", 0, 0);
            else {
              Uy.getRenderingMesh().getWorldMatrix().decompose(Fy.j.dU[0]);
              const bb = Math.max(Math.abs(Fy.j.dU[0].x), Math.abs(Fy.j.dU[0].y), Math.abs(Fy.j.dU[0].z));
              yb.updateFloat2("vThicknessParam", this.minimumThickness * bb, (this.maximumThickness - this.minimumThickness) * bb)
            }
        }
        bindForSubMesh(yb, bb, Wy, Uy) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const hy = Uy.materialDefines,
            fy = this._material.isFrozen,
            Zy = this._material.realTimeFiltering,
            cb = hy.LODBASEDMICROSFURACE,
            Py = this._getRefractionTexture(bb);
          if (!yb.useUbo || !fy || !yb.isSync) {
            if (this._thicknessTexture && Iy.d.ThicknessTextureEnabled && (yb.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Ay.z)(this._thicknessTexture, yb, "thickness")), this._refractionIntensityTexture && Iy.d.RefractionIntensityTextureEnabled && hy.SS_REFRACTIONINTENSITY_TEXTURE && (yb.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Ay.z)(this._refractionIntensityTexture, yb, "refractionIntensity")), this._translucencyColorTexture && Iy.d.TranslucencyColorTextureEnabled && hy.SS_TRANSLUCENCYCOLOR_TEXTURE && (yb.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Ay.z)(this._translucencyColorTexture, yb, "translucencyColor")), this._translucencyIntensityTexture && Iy.d.TranslucencyIntensityTextureEnabled && hy.SS_TRANSLUCENCYINTENSITY_TEXTURE && (yb.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Ay.z)(this._translucencyIntensityTexture, yb, "translucencyIntensity")), Py && Iy.d.RefractionTextureEnabled) {
              yb.qcy("refractionMatrix", Py.getRefractionTextureMatrix());
              let bb = 1;
              Py.isCube || Py.depth && (bb = Py.depth);
              const Wy = Py.getSize().width,
                Uy = this.volumeIndexOfRefraction;
              if (yb.updateFloat4("vRefractionInfos", Py.level, 1 / Uy, bb, this._invertRefractionY ? -1 : 1), yb.updateFloat4("vRefractionMicrosurfaceInfos", Wy, Py.lodGenerationScale, Py.lodGenerationOffset, 1 / this.indexOfRefraction), Zy && yb.updateFloat2("vRefractionFilteringInfo", Wy, Math.log2(Wy)), Py.boundingBoxSize) {
                const bb = Py;
                yb.updateVector3("vRefractionPosition", bb.boundingBoxPosition), yb.updateVector3("vRefractionSize", bb.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && yb.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), yb.updateColor3("vDiffusionDistance", this.diffusionDistance), yb.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), yb.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), yb.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), yb.updateFloat("dispersion", this.dispersion)
          }
          bb.texturesEnabled && (this._thicknessTexture && Iy.d.ThicknessTextureEnabled && yb.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Iy.d.RefractionIntensityTextureEnabled && hy.SS_REFRACTIONINTENSITY_TEXTURE && yb.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Iy.d.TranslucencyIntensityTextureEnabled && hy.SS_TRANSLUCENCYINTENSITY_TEXTURE && yb.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Iy.d.TranslucencyColorTextureEnabled && hy.SS_TRANSLUCENCYCOLOR_TEXTURE && yb.setTexture("translucencyColorSampler", this._translucencyColorTexture), Py && Iy.d.RefractionTextureEnabled && (cb ? yb.setTexture("refractionSampler", Py) : (yb.setTexture("refractionSampler", Py._lodTextureMid || Py), yb.setTexture("refractionSamplerLow", Py._lodTextureLow || Py), yb.setTexture("refractionSamplerHigh", Py._lodTextureHigh || Py))))
        }
        _getRefractionTexture(yb) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? yb.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(yb) {
          Iy.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && yb.push(this._refractionTexture)
        }
        hasTexture(yb) {
          return this._thicknessTexture === yb || (this._refractionTexture === yb || (this._refractionIntensityTexture === yb || (this._translucencyIntensityTexture === yb || this._translucencyColorTexture === yb)))
        }
        hasRenderTargetTextures() {
          return !!(Iy.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(yb) {
          this._thicknessTexture && yb.push(this._thicknessTexture), this._refractionTexture && yb.push(this._refractionTexture), this._refractionIntensityTexture && yb.push(this._refractionIntensityTexture), this._translucencyColorTexture && yb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && yb.push(this._translucencyIntensityTexture)
        }
        getAnimatables(yb) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && yb.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && yb.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && yb.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && yb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && yb.push(this._translucencyIntensityTexture)
        }
        dispose(yb) {
          yb && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(yb, bb, Wy) {
          return yb.SS_SCATTERING && bb.addFallback(Wy++, "SS_SCATTERING"), yb.SS_TRANSLUCENCY && bb.addFallback(Wy++, "SS_TRANSLUCENCY"), Wy
        }
        getSamplers(yb) {
          yb.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, hy = new WeakMap, fy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, Py = new WeakMap, oy = new WeakMap, By = new WeakMap, Ky = new WeakMap, ey = new WeakMap, qb = new WeakMap, sy = new WeakMap, Sy = new WeakMap, Ey = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wb[Symbol.metadata] ?? null) : void 0;
        ly = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Cy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, Ry.T)(), (0, Ry.h)("_markScenePrePassDirty")], Vy = [(0, Ry.T)()], Jy = [(0, Ry.T)()], gb = [(0, Ry.T)()], Gy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], My = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Xy = [(0, Ry.T)()], ny = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], uy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], rb = [(0, Ry.T)()], Hy = [(0, Ry.T)()], ab = [(0, Ry.T)()], py = [(0, Ry.q)()], Ly = [(0, Ry.T)()], jb = [(0, Ry.T)()], Dy = [(0, Ry.q)()], tb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ny = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], zb = [(0, Ry.q)()], xb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, Ry.T)()], bW = [(0, Ry.T)()], (0, Oy.j)(yb, null, ly, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isRefractionEnabled" in yb,
            get: yb => yb.isRefractionEnabled,
            set: (yb, bb) => {
              yb.isRefractionEnabled = bb
            }
          },
          metadata: bb
        }, Ub, hb), (0, Oy.j)(yb, null, mb, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isTranslucencyEnabled" in yb,
            get: yb => yb.isTranslucencyEnabled,
            set: (yb, bb) => {
              yb.isTranslucencyEnabled = bb
            }
          },
          metadata: bb
        }, fb, Zb), (0, Oy.j)(yb, null, Cy, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isDispersionEnabled" in yb,
            get: yb => yb.isDispersionEnabled,
            set: (yb, bb) => {
              yb.isDispersionEnabled = bb
            }
          },
          metadata: bb
        }, Pb, ob), (0, Oy.j)(yb, null, Ty, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isScatteringEnabled" in yb,
            get: yb => yb.isScatteringEnabled,
            set: (yb, bb) => {
              yb.isScatteringEnabled = bb
            }
          },
          metadata: bb
        }, Bb, Kb), (0, Oy.j)(yb, null, Gy, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAlbedoToTintRefraction" in yb,
            get: yb => yb.useAlbedoToTintRefraction,
            set: (yb, bb) => {
              yb.useAlbedoToTintRefraction = bb
            }
          },
          metadata: bb
        }, mW, Cb), (0, Oy.j)(yb, null, vb, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAlbedoToTintTranslucency" in yb,
            get: yb => yb.useAlbedoToTintTranslucency,
            set: (yb, bb) => {
              yb.useAlbedoToTintTranslucency = bb
            }
          },
          metadata: bb
        }, Tb, Vb), (0, Oy.j)(yb, null, ib, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "thicknessTexture" in yb,
            get: yb => yb.thicknessTexture,
            set: (yb, bb) => {
              yb.thicknessTexture = bb
            }
          },
          metadata: bb
        }, Jb, gW), (0, Oy.j)(yb, null, My, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "refractionTexture" in yb,
            get: yb => yb.refractionTexture,
            set: (yb, bb) => {
              yb.refractionTexture = bb
            }
          },
          metadata: bb
        }, Gb, Ob), (0, Oy.j)(yb, null, Yy, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: yb => "indexOfRefraction" in yb,
            get: yb => yb.indexOfRefraction,
            set: (yb, bb) => {
              yb.indexOfRefraction = bb
            }
          },
          metadata: bb
        }, Rb, vW), (0, Oy.j)(yb, null, ny, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: yb => "invertRefractionY" in yb,
            get: yb => yb.invertRefractionY,
            set: (yb, bb) => {
              yb.invertRefractionY = bb
            }
          },
          metadata: bb
        }, Yb, Xb), (0, Oy.j)(yb, null, uy, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: yb => "linkRefractionWithTransparency" in yb,
            get: yb => yb.linkRefractionWithTransparency,
            set: (yb, bb) => {
              yb.linkRefractionWithTransparency = bb
            }
          },
          metadata: bb
        }, nb, ub), (0, Oy.j)(yb, null, tb, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "useMaskFromThicknessTexture" in yb,
            get: yb => yb.useMaskFromThicknessTexture,
            set: (yb, bb) => {
              yb.useMaskFromThicknessTexture = bb
            }
          },
          metadata: bb
        }, Ib, xW), (0, Oy.j)(yb, null, kb, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "refractionIntensityTexture" in yb,
            get: yb => yb.refractionIntensityTexture,
            set: (yb, bb) => {
              yb.refractionIntensityTexture = bb
            }
          },
          metadata: bb
        }, Ab, db), (0, Oy.j)(yb, null, Ny, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "translucencyIntensityTexture" in yb,
            get: yb => yb.translucencyIntensityTexture,
            set: (yb, bb) => {
              yb.translucencyIntensityTexture = bb
            }
          },
          metadata: bb
        }, yU, bU), (0, Oy.j)(yb, null, xb, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "translucencyColorTexture" in yb,
            get: yb => yb.translucencyColorTexture,
            set: (yb, bb) => {
              yb.translucencyColorTexture = bb
            }
          },
          metadata: bb
        }, hW, fW), (0, Oy.j)(yb, null, dy, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: yb => "useGltfStyleTextures" in yb,
            get: yb => yb.useGltfStyleTextures,
            set: (yb, bb) => {
              yb.useGltfStyleTextures = bb
            }
          },
          metadata: bb
        }, ZW, cU), (0, Oy.j)(null, null, Vy, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: yb => "_scatteringDiffusionProfileIndex" in yb,
            get: yb => yb._scatteringDiffusionProfileIndex,
            set: (yb, bb) => {
              yb._scatteringDiffusionProfileIndex = bb
            }
          },
          metadata: bb
        }, eb, qW), (0, Oy.j)(null, null, Jy, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "refractionIntensity" in yb,
            get: yb => yb.refractionIntensity,
            set: (yb, bb) => {
              yb.refractionIntensity = bb
            }
          },
          metadata: bb
        }, sb, Sb), (0, Oy.j)(null, null, gb, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "translucencyIntensity" in yb,
            get: yb => yb.translucencyIntensity,
            set: (yb, bb) => {
              yb.translucencyIntensity = bb
            }
          },
          metadata: bb
        }, Eb, lb), (0, Oy.j)(null, null, Xy, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: yb => "_volumeIndexOfRefraction" in yb,
            get: yb => yb._volumeIndexOfRefraction,
            set: (yb, bb) => {
              yb._volumeIndexOfRefraction = bb
            }
          },
          metadata: bb
        }, iW, Mb), (0, Oy.j)(null, null, rb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: yb => "minimumThickness" in yb,
            get: yb => yb.minimumThickness,
            set: (yb, bb) => {
              yb.minimumThickness = bb
            }
          },
          metadata: bb
        }, rW, Hb), (0, Oy.j)(null, null, Hy, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: yb => "maximumThickness" in yb,
            get: yb => yb.maximumThickness,
            set: (yb, bb) => {
              yb.maximumThickness = bb
            }
          },
          metadata: bb
        }, aW, Fb), (0, Oy.j)(null, null, ab, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: yb => "useThicknessAsDepth" in yb,
            get: yb => yb.useThicknessAsDepth,
            set: (yb, bb) => {
              yb.useThicknessAsDepth = bb
            }
          },
          metadata: bb
        }, pb, Lb), (0, Oy.j)(null, null, py, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintColor" in yb,
            get: yb => yb.tintColor,
            set: (yb, bb) => {
              yb.tintColor = bb
            }
          },
          metadata: bb
        }, Qb, jW), (0, Oy.j)(null, null, Ly, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: yb => "tintColorAtDistance" in yb,
            get: yb => yb.tintColorAtDistance,
            set: (yb, bb) => {
              yb.tintColorAtDistance = bb
            }
          },
          metadata: bb
        }, Db, tW), (0, Oy.j)(null, null, jb, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: yb => "dispersion" in yb,
            get: yb => yb.dispersion,
            set: (yb, bb) => {
              yb.dispersion = bb
            }
          },
          metadata: bb
        }, wb, kW), (0, Oy.j)(null, null, Dy, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: yb => "diffusionDistance" in yb,
            get: yb => yb.diffusionDistance,
            set: (yb, bb) => {
              yb.diffusionDistance = bb
            }
          },
          metadata: bb
        }, Nb, zW), (0, Oy.j)(null, null, zb, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "translucencyColor" in yb,
            get: yb => yb.translucencyColor,
            set: (yb, bb) => {
              yb.translucencyColor = bb
            }
          },
          metadata: bb
        }, WW, UW), (0, Oy.j)(null, null, yW, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: yb => "applyAlbedoAfterSubSurface" in yb,
            get: yb => yb.applyAlbedoAfterSubSurface,
            set: (yb, bb) => {
              yb.applyAlbedoAfterSubSurface = bb
            }
          },
          metadata: bb
        }, PW, oW), (0, Oy.j)(null, null, bW, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: yb => "legacyTranslucency" in yb,
            get: yb => yb.legacyTranslucency,
            set: (yb, bb) => {
              yb.legacyTranslucency = bb
            }
          },
          metadata: bb
        }, BW, KW), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, yb.DEFAULT_LEGACY_TRANSLUCENCY = !1, yb
    })();
    var ob = Wy(38853),
      Bb = Wy(38830),
      Kb = Wy(38865),
      eb = Wy(38870),
      qW = Wy(38877),
      sb = Wy(38882),
      Sb = Wy(38887),
      Eb = Wy(38895),
      lb = Wy(38347);
    const mW = {
      effect: null,
      subMesh: null
    };
    class Cb extends((0, Sb.b)((0, sb.b)(Ly.d))) {}
    class Tb extends((0, kb.g)(Cb)) {
      constructor(yb) {
        super(yb), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Vb extends((0, Eb.e)(zb.d)) {}
    let Jb = (() => {
      var yb, bb;
      let Uy, hy = Vb,
        Zy = [],
        cb = [];
      return yb = class extends hy {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(yb) {
          this._realTimeFiltering = yb, this.goy(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(yb) {
          this._realTimeFilteringQuality = yb, this.goy(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Oy.e)(this, bb, "f")
        }
        set debugMode(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        constructor(Wy, Uy) {
          super(Wy, Uy, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || yb.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Fy.p(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = yb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = wy.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new wy.d(0, 0, 0), this._albedoColor = new wy.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new wy.d(1, 1, 1), this._reflectionColor = new wy.d(1, 1, 1), this._emissiveColor = new wy.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = yb.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ib.e(16), this._globalAmbientColor = new wy.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, bb.set(this, (0, Oy.l)(this, Zy, 0)), this.debugLimit = ((0, Oy.l)(this, cb), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Dy(this), this.clearCoat = new yW(this), this.iridescence = new Wb(this), this.anisotropy = new hb(this), this.sheen = new Zb(this), this.subSurface = new Pb(this), this.detailMap = new ob.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Iy.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = uy(this.kWy()), this.prePassConfiguration = new tb.b
        }
        get hasRenderTargetTextures() {
          return !!(Iy.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === yb.PBRMATERIAL_OPAQUE || this._transparencyMode === yb.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === yb.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== yb.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(yb, bb, Wy) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Uy = bb._drawWrapper;
          if (Uy.effect && this.isFrozen && Uy._wasPreviouslyReady && Uy._wasPreviouslyUsingInstances === Wy) return !0;
          bb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), bb.materialDefines = new Tb(this._eventInfo.defineNames));
          const hy = bb.materialDefines;
          if (this._isReadyForSubMesh(bb)) return !0;
          const fy = this.kWy(),
            Zy = fy.xh();
          if (hy._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, fy.texturesEnabled)) {
            if (this._albedoTexture && Iy.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Iy.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Iy.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Iy.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Iy.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const yb = this._getReflectionTexture();
            if (yb && Iy.d.ReflectionTextureEnabled) {
              if (!yb.isReadyOrNotBlocking()) return !1;
              if (yb.irradianceTexture) {
                if (!yb.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!yb.sphericalPolynomial && yb.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Iy.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Iy.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Iy.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Zy.getCaps().standardDerivatives && this._bumpTexture && Iy.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Iy.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hy, this._eventInfo.subMesh = bb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (hy._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (hy.AREALIGHTUSED || hy.CLUSTLIGHT_BATCH)
            for (let Ky = 0; Ky < yb.lightSources.length; Ky++)
              if (!yb.lightSources[Ky]._isReady()) return !1;
          if (Zy.getCaps().standardDerivatives || yb.isVerticesDataPresent(py.k.NormalKind) || (yb.createNormals(!0), vb.b.Warn("PBRMaterial: Normals have been created for the mesh: " + yb.name)), !(0, Ay.b)(fy, yb, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const cb = bb.effect,
            Py = hy._areLightsDisposed,
            oy = this._prepareEffect(yb, bb.getRenderingMesh(), hy, this.onCompiled, this.onError, Wy, null);
          let By = !1;
          if (oy)
            if (this._onEffectCreatedObservable && (mW.effect = oy, mW.subMesh = bb, this._onEffectCreatedObservable.notifyObservers(mW)), this.allowShaderHotSwapping && cb && !oy.isReady()) {
              if (hy.markAsUnprocessed(), By = this.isFrozen, Py) return hy._areLightsDisposed = !0, !1
            } else fy.resetCachedMaterial(), bb.setEffect(oy, hy, this._materialContext);
          return !(!bb.effect || !bb.effect.isReady()) && (hy._renderId = fy.getRenderId(), Uy._wasPreviouslyReady = !By, Uy._wasPreviouslyUsingInstances = !!Wy, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(bb, Wy, Uy) {
          let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(bb, Wy, Uy, Zy, cb), !Uy.isDirty) return null;
          Uy.markAsProcessed();
          const Py = this.kWy().xh(),
            oy = new xb.c;
          let By = 0;
          Uy.USESPHERICALINVERTEX && oy.addFallback(By++, "USESPHERICALINVERTEX"), Uy.FOG && oy.addFallback(By, "FOG"), Uy.SPECULARAA && oy.addFallback(By, "SPECULARAA"), Uy.POINTSIZE && oy.addFallback(By, "POINTSIZE"), Uy.LOGARITHMICDEPTH && oy.addFallback(By, "LOGARITHMICDEPTH"), Uy.PARALLAX && oy.addFallback(By, "PARALLAX"), Uy.PARALLAX_RHS && oy.addFallback(By, "PARALLAX_RHS"), Uy.PARALLAXOCCLUSION && oy.addFallback(By++, "PARALLAXOCCLUSION"), Uy.ENVIRONMENTBRDF && oy.addFallback(By++, "ENVIRONMENTBRDF"), Uy.TANGENT && oy.addFallback(By++, "TANGENT"), Uy.BUMP && oy.addFallback(By++, "BUMP"), By = (0, Ay.D)(Uy, oy, this._maxSimultaneousLights, By), Uy.SPECULARTERM && oy.addFallback(By++, "SPECULARTERM"), Uy.USESPHERICALFROMREFLECTIONMAP && oy.addFallback(By++, "USESPHERICALFROMREFLECTIONMAP"), Uy.USEIRRADIANCEMAP && oy.addFallback(By++, "USEIRRADIANCEMAP"), Uy.LIGHTMAP && oy.addFallback(By++, "LIGHTMAP"), Uy.NORMAL && oy.addFallback(By++, "NORMAL"), Uy.AMBIENT && oy.addFallback(By++, "AMBIENT"), Uy.EMISSIVE && oy.addFallback(By++, "EMISSIVE"), Uy.VERTEXCOLOR && oy.addFallback(By++, "VERTEXCOLOR"), Uy.MORPHTARGETS && oy.addFallback(By++, "MORPHTARGETS"), Uy.MULTIVIEW && oy.addFallback(0, "MULTIVIEW");
          const Ky = [py.k.PositionKind];
          Uy.NORMAL && Ky.push(py.k.NormalKind), Uy.TANGENT && Ky.push(py.k.TangentKind);
          for (let yb = 1; yb <= 6; ++yb) Uy["UV" + yb] && Ky.push(`uv${1===yb?"":yb}`);
          Uy.VERTEXCOLOR && Ky.push(py.k.ColorKind), (0, Ay.K)(Ky, bb, Uy, oy), (0, Ay.N)(Ky, Uy), (0, Ay.O)(Ky, bb, Uy), (0, Ay.H)(Ky, bb, Uy);
          let ey = "pbr";
          const qb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            sy = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Ay.mb)(qb, sy, !0);
          const Sy = ["Material", "Scene", "Mesh"],
            Ey = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Uy.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = oy, this._eventInfo.fallbackRank = By, this._eventInfo.defines = Uy, this._eventInfo.uniforms = qb, this._eventInfo.attributes = Ky, this._eventInfo.samplers = sy, this._eventInfo.uniformBuffersNames = Sy, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bb, this._eventInfo.indexParameters = Ey, this._callbackPluginEventGeneric(128, this._eventInfo), qW.c.AddUniformsAndSamplers(qb, sy), tb.b.AddUniforms(qb), tb.b.AddSamplers(sy), (0, Bb.d)(qb), this._useVertexPulling) {
            const yb = Wy?.geometry;
            yb && (this._vertexPullingMetadata = (0, Kb.c)(yb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((yb, bb) => {
              qb.push(`vp_${bb}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Ny.b && (Ny.b.PrepareUniforms(qb, Uy), Ny.b.PrepareSamplers(sy, Uy)), (0, Ay.pb)({
            uniformsNames: qb,
            uniformBuffersNames: Sy,
            samplers: sy,
            defines: Uy,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const ly = {};
          this.customShaderNameResolve && (ey = this.customShaderNameResolve(ey, qb, Sy, sy, Uy, Ky, ly));
          const mb = Uy.toString(),
            Cy = Py.createEffect(ey, {
              attributes: Ky,
              uniformsNames: qb,
              uniformBuffersNames: Sy,
              samplers: sy,
              defines: mb,
              fallbacks: oy,
              onCompiled: hy,
              onError: fy,
              indexParameters: Ey,
              processFinalCode: ly.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Uy.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: yb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Py);
          return this._eventInfo.customCode = void 0, Cy
        }
        _prepareDefines(bb, Wy, Uy) {
          let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Zy = Wy.hasThinInstances,
            cb = this.kWy(),
            Py = cb.xh();
          (0, Ay.Y)(cb, bb, Uy, !0, this._maxSimultaneousLights, this._disableLighting), Uy._needNormals = !0, (0, Ay.db)(cb, Uy);
          const oy = this.needAlphaBlendingForMesh(bb) && this.kWy().useOrderIndependentTransparency;
          if ((0, Ay.ib)(cb, Uy, this.canRenderToMRT && !oy), (0, Ay.gb)(cb, Uy, oy), qW.c.PrepareDefines(Py.currentRenderPassId, bb, Uy), Uy.METALLICWORKFLOW = this.isMetallicWorkflow(), Uy._areTexturesDirty) {
            Uy._needUVs = !1;
            for (let yb = 1; yb <= 6; ++yb) Uy["MAINUV" + yb] = !1;
            if (cb.texturesEnabled) {
              Uy.ALBEDODIRECTUV = 0, Uy.BASE_WEIGHTDIRECTUV = 0, Uy.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Uy.AMBIENTDIRECTUV = 0, Uy.OPACITYDIRECTUV = 0, Uy.EMISSIVEDIRECTUV = 0, Uy.REFLECTIVITYDIRECTUV = 0, Uy.MICROSURFACEMAPDIRECTUV = 0, Uy.METALLIC_REFLECTANCEDIRECTUV = 0, Uy.REFLECTANCEDIRECTUV = 0, Uy.BUMPDIRECTUV = 0, Uy.LIGHTMAPDIRECTUV = 0, Py.getCaps().textureLOD && (Uy.LODBASEDMICROSFURACE = !0), this._albedoTexture && Iy.d.DiffuseTextureEnabled ? ((0, Ay.$)(this._albedoTexture, Uy, "ALBEDO"), Uy.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Uy.ALBEDO = !1, this._baseWeightTexture && Iy.d.BaseWeightTextureEnabled ? (0, Ay.$)(this._baseWeightTexture, Uy, "BASE_WEIGHT") : Uy.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Iy.d.BaseDiffuseRoughnessTextureEnabled ? (0, Ay.$)(this._baseDiffuseRoughnessTexture, Uy, "BASE_DIFFUSE_ROUGHNESS") : Uy.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Iy.d.AmbientTextureEnabled ? ((0, Ay.$)(this._ambientTexture, Uy, "AMBIENT"), Uy.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Uy.AMBIENT = !1, this._opacityTexture && Iy.d.OpacityTextureEnabled ? ((0, Ay.$)(this._opacityTexture, Uy, "OPACITY"), Uy.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Uy.OPACITY = !1;
              const yb = this._getReflectionTexture(),
                bb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Py.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Ay.X)(cb, yb, Uy, this.realTimeFiltering, this.realTimeFilteringQuality, !bb), this._lightmapTexture && Iy.d.LightmapTextureEnabled ? ((0, Ay.$)(this._lightmapTexture, Uy, "LIGHTMAP"), Uy.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Uy.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Uy.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Uy.LIGHTMAP = !1, this._emissiveTexture && Iy.d.EmissiveTextureEnabled ? ((0, Ay.$)(this._emissiveTexture, Uy, "EMISSIVE"), Uy.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Uy.EMISSIVE = !1, Iy.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Ay.$)(this._metallicTexture, Uy, "REFLECTIVITY"), Uy.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Uy.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Uy.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Uy.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Uy.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Ay.$)(this._reflectivityTexture, Uy, "REFLECTIVITY"), Uy.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Uy.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Uy.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Uy.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Uy.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Ay.$)(this._metallicReflectanceTexture, Uy, "METALLIC_REFLECTANCE"), Uy.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Uy.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Ay.$)(this._reflectanceTexture, Uy, "REFLECTANCE"), Uy.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Uy.REFLECTANCE = !1) : (Uy.METALLIC_REFLECTANCE = !1, Uy.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Ay.$)(this._microSurfaceTexture, Uy, "MICROSURFACEMAP") : Uy.MICROSURFACEMAP = !1) : (Uy.REFLECTIVITY = !1, Uy.MICROSURFACEMAP = !1), Py.getCaps().standardDerivatives && this._bumpTexture && Iy.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, Ay.$)(this._bumpTexture, Uy, "BUMP"), this._useParallax && this._albedoTexture && Iy.d.DiffuseTextureEnabled ? (Uy.PARALLAX = !0, Uy.PARALLAX_RHS = cb.useRightHandedSystem, Uy.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Uy.PARALLAX = !1, Uy.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Uy.BUMP = !1, Uy.PARALLAX = !1, Uy.PARALLAX_RHS = !1, Uy.PARALLAXOCCLUSION = !1, Uy.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Iy.d.ReflectionTextureEnabled ? (Uy.ENVIRONMENTBRDF = !0, Uy.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Uy.ENVIRONMENTBRDF = !1, Uy.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Uy.ALPHAFROMALBEDO = !0 : Uy.ALPHAFROMALBEDO = !1
            }
            Uy.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === yb.LIGHTFALLOFF_STANDARD ? (Uy.USEPHYSICALLIGHTFALLOFF = !1, Uy.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === yb.LIGHTFALLOFF_GLTF ? (Uy.USEPHYSICALLIGHTFALLOFF = !1, Uy.USEGLTFLIGHTFALLOFF = !0) : (Uy.USEPHYSICALLIGHTFALLOFF = !0, Uy.USEGLTFLIGHTFALLOFF = !1), Uy.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Uy.TWOSIDEDLIGHTING = !0 : Uy.TWOSIDEDLIGHTING = !1, Uy.MIRRORED = !!cb._mirroredCameraPosition, Uy.SPECULARAA = Py.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Uy._areTexturesDirty || Uy._areMiscDirty) && (Uy.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Uy.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Uy.ALPHABLEND = this.needAlphaBlendingForMesh(bb), Uy.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Uy.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Uy._areTexturesDirty && (Uy.TEXTURE_REPETITION_MODE = Py.version > 1 || Py.isWebGPU ? this.textureRepetitionMode : 0), Uy._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Uy), Uy.FORCENORMALFORWARD = this._forceNormalForward, Uy.RADIANCEOCCLUSION = this._useRadianceOcclusion, Uy.HORIZONOCCLUSION = this._useHorizonOcclusion, Uy._areMiscDirty && ((0, Ay.cb)(bb, cb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bb), Uy, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Wy, this._isVertexOutputInvariant), Uy.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !bb.isVerticesDataPresent(py.k.NormalKind), Uy.DEBUGMODE = this._debugMode), (0, Ay.U)(cb, Py, this, Uy, !!hy, fy, Zy), this._eventInfo.defines = Uy, this._eventInfo.mesh = bb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ay.R)(bb, Uy, !0, !0, !0, this._transparencyMode !== yb.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(yb, bb, Wy) {
          const Uy = {
            clipPlane: !1,
            useInstances: !1,
            ...Wy
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Wy = new Tb(this._eventInfo.defineNames),
              hy = this._prepareEffect(yb, yb, Wy, void 0, void 0, Uy.useInstances, Uy.clipPlane);
            this._onEffectCreatedObservable && (mW.effect = hy, mW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(mW)), hy.isReady() ? bb && bb(this) : hy.onCompileObservable.add((() => {
              bb && bb(this)
            }))
          })()
        }
        buildUniformLayout() {
          const yb = this._uniformBuffer;
          yb.addUniform("vAlbedoInfos", 2), yb.addUniform("vBaseWeightInfos", 2), yb.addUniform("vBaseDiffuseRoughnessInfos", 2), yb.addUniform("vAmbientInfos", 4), yb.addUniform("vOpacityInfos", 2), yb.addUniform("vEmissiveInfos", 2), yb.addUniform("vLightmapInfos", 2), yb.addUniform("vReflectivityInfos", 3), yb.addUniform("vMicroSurfaceSamplerInfos", 2), yb.addUniform("vBumpInfos", 3), yb.addUniform("albedoMatrix", 16), yb.addUniform("baseWeightMatrix", 16), yb.addUniform("baseDiffuseRoughnessMatrix", 16), yb.addUniform("ambientMatrix", 16), yb.addUniform("opacityMatrix", 16), yb.addUniform("emissiveMatrix", 16), yb.addUniform("lightmapMatrix", 16), yb.addUniform("reflectivityMatrix", 16), yb.addUniform("microSurfaceSamplerMatrix", 16), yb.addUniform("bumpMatrix", 16), yb.addUniform("vTangentSpaceParams", 2), yb.addUniform("vAlbedoColor", 4), yb.addUniform("baseWeight", 1), yb.addUniform("baseDiffuseRoughness", 1), yb.addUniform("vLightingIntensity", 4), yb.addUniform("pointSize", 1), yb.addUniform("vReflectivityColor", 4), yb.addUniform("vEmissiveColor", 3), yb.addUniform("vAmbientColor", 3), yb.addUniform("vDebugMode", 2), yb.addUniform("vMetallicReflectanceFactors", 4), yb.addUniform("vMetallicReflectanceInfos", 2), yb.addUniform("metallicReflectanceMatrix", 16), yb.addUniform("vReflectanceInfos", 2), yb.addUniform("reflectanceMatrix", 16), yb.addUniform("cameraInfo", 4), yb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Ay.jb)(yb, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(yb, bb, Wy) {
          const Uy = this.kWy(),
            hy = Wy.materialDefines;
          if (!hy) return;
          const fy = Wy.effect;
          if (!fy) return;
          this._activeEffect = fy, bb.getMeshUniformBuffer().bindToEffect(fy, "Mesh"), bb.transferToEffect(yb);
          const Zy = Uy.xh();
          this._uniformBuffer.bindToEffect(fy, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Uy, bb, yb, this.isFrozen), qW.c.Bind(Zy.currentRenderPassId, this._activeEffect, bb, yb, this);
          const cb = Uy.activeCamera;
          cb ? this._uniformBuffer.updateFloat4("cameraInfo", cb.minZ, cb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Py = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Py[0], Py[1], Py[2], Py[3]), this._eventInfo.subMesh = Wy, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), hy.OBJECTSPACE_NORMALMAP && (yb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const oy = this._mustRebind(Uy, fy, Wy, bb.visibility),
            By = Zy._features.needToAlwaysBindUniformBuffers;
          (0, Ay.c)(bb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Kb.b)(this._activeEffect, this._vertexPullingMetadata);
          let Ky = null;
          const ey = this._uniformBuffer;
          if (oy) {
            if (this.bindViewProjection(fy), Ky = this._getReflectionTexture(), !ey.useUbo || !this.isFrozen || !ey.isSync || Wy._drawWrapper._forceRebindOnNextCall) {
              if (Uy.texturesEnabled && (this._albedoTexture && Iy.d.DiffuseTextureEnabled && (ey.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Ay.z)(this._albedoTexture, ey, "albedo")), this._baseWeightTexture && Iy.d.BaseWeightTextureEnabled && (ey.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Ay.z)(this._baseWeightTexture, ey, "baseWeight")), this._baseDiffuseRoughnessTexture && Iy.d.BaseDiffuseRoughnessTextureEnabled && (ey.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Ay.z)(this._baseDiffuseRoughnessTexture, ey, "baseDiffuseRoughness")), this._ambientTexture && Iy.d.AmbientTextureEnabled && (ey.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Ay.z)(this._ambientTexture, ey, "ambient")), this._opacityTexture && Iy.d.OpacityTextureEnabled && (ey.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Ay.z)(this._opacityTexture, ey, "opacity")), this._emissiveTexture && Iy.d.EmissiveTextureEnabled && (ey.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Ay.z)(this._emissiveTexture, ey, "emissive")), this._lightmapTexture && Iy.d.LightmapTextureEnabled && (ey.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Ay.z)(this._lightmapTexture, ey, "lightmap")), Iy.d.SpecularTextureEnabled && (this._metallicTexture ? (ey.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Ay.z)(this._metallicTexture, ey, "reflectivity")) : this._reflectivityTexture && (ey.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Ay.z)(this._reflectivityTexture, ey, "reflectivity")), this._metallicReflectanceTexture && (ey.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Ay.z)(this._metallicReflectanceTexture, ey, "metallicReflectance")), this._reflectanceTexture && hy.REFLECTANCE && (ey.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Ay.z)(this._reflectanceTexture, ey, "reflectance")), this._microSurfaceTexture && (ey.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Ay.z)(this._microSurfaceTexture, ey, "microSurfaceSampler"))), this._bumpTexture && Zy.getCaps().standardDerivatives && Iy.d.BumpTextureEnabled && !this._disableBumpMap && (ey.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Ay.z)(this._bumpTexture, ey, "bump"), Uy._mirroredCameraPosition ? ey.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ey.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ay.e)(Uy, hy, ey, this._reflectionColor, Ky, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && ey.updateFloat("pointSize", this.pointSize), hy.METALLICWORKFLOW) {
                wy.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, wy.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const yb = this.subSurface?._indexOfRefraction ?? 1.5,
                  bb = 1;
                wy.m.Color4[0].b = yb;
                const Wy = Math.pow((yb - bb) / (yb + bb), 2);
                wy.m.Color4[0].a = Wy, ey.updateDirectColor4("vReflectivityColor", wy.m.Color4[0]), ey.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else ey.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              ey.updateColor3("vEmissiveColor", Iy.d.EmissiveTextureEnabled ? this._emissiveColor : wy.d.BlackReadOnly), !hy.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? ey.updateColor4("vAlbedoColor", this._albedoColor, 1) : ey.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), ey.updateFloat("baseWeight", this._baseWeight), ey.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Uy.environmentIntensity, this._lightingInfos.w = this._specularIntensity, ey.updateVector4("vLightingIntensity", this._lightingInfos), Uy.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), ey.updateColor3("vAmbientColor", this._globalAmbientColor), ey.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Uy.texturesEnabled && (this._albedoTexture && Iy.d.DiffuseTextureEnabled && ey.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Iy.d.BaseWeightTextureEnabled && ey.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Iy.d.BaseDiffuseRoughnessTextureEnabled && ey.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Iy.d.AmbientTextureEnabled && ey.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Iy.d.OpacityTextureEnabled && ey.setTexture("opacitySampler", this._opacityTexture), (0, Ay.i)(Uy, hy, ey, Ky, this.realTimeFiltering), hy.ENVIRONMENTBRDF && ey.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Iy.d.EmissiveTextureEnabled && ey.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Iy.d.LightmapTextureEnabled && ey.setTexture("lightmapSampler", this._lightmapTexture), Iy.d.SpecularTextureEnabled && (this._metallicTexture ? ey.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && ey.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && ey.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && hy.REFLECTANCE && ey.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && ey.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Zy.getCaps().standardDerivatives && Iy.d.BumpTextureEnabled && !this._disableBumpMap && ey.setTexture("bumpSampler", this._bumpTexture)), this.kWy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(bb) && this.kWy().depthPeelingRenderer.bind(fy), this._eventInfo.subMesh = Wy, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Bb.g)(this._activeEffect, this, Uy), this.bindEyePosition(fy)
          } else By && (this._needToBindSceneUbo = !0);
          !oy && this.isFrozen && !By || !Uy.lightsEnabled || this._disableLighting || (0, Ay.m)(Uy, bb, this._activeEffect, hy, this._maxSimultaneousLights), !oy && this.isFrozen || ((Uy.fogEnabled && bb.applyFog && Uy.fogMode !== ab.g.FOGMODE_NONE || Ky || this.subSurface.refractionTexture || bb.receiveShadows || hy.PREPASS || hy.CLUSTLIGHT_BATCH) && this.bindView(fy), (0, Ay.d)(Uy, bb, this._activeEffect, !0), hy.NUM_MORPH_INFLUENCERS && (0, Ay.r)(bb, this._activeEffect), hy.BAKED_VERTEX_ANIMATION_TEXTURE && bb.bakedVertexAnimationManager?.bind(fy, hy.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ay.q)(hy, this._activeEffect, Uy)), this._afterBind(bb, this._activeEffect, Wy), ey.update()
        }
        getAnimatables() {
          const yb = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && yb.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && yb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && yb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && yb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && yb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && yb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && yb.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? yb.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && yb.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && yb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && yb.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && yb.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && yb.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && yb.push(this._microSurfaceTexture), yb
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.kWy().environmentTexture
        }
        getActiveTextures() {
          const yb = super.getActiveTextures();
          return this._albedoTexture && yb.push(this._albedoTexture), this._baseWeightTexture && yb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && yb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && yb.push(this._ambientTexture), this._opacityTexture && yb.push(this._opacityTexture), this._reflectionTexture && yb.push(this._reflectionTexture), this._emissiveTexture && yb.push(this._emissiveTexture), this._reflectivityTexture && yb.push(this._reflectivityTexture), this._metallicTexture && yb.push(this._metallicTexture), this._metallicReflectanceTexture && yb.push(this._metallicReflectanceTexture), this._reflectanceTexture && yb.push(this._reflectanceTexture), this._microSurfaceTexture && yb.push(this._microSurfaceTexture), this._bumpTexture && yb.push(this._bumpTexture), this._lightmapTexture && yb.push(this._lightmapTexture), yb
        }
        hasTexture(yb) {
          return !!super.hasTexture(yb) || (this._albedoTexture === yb || (this._baseWeightTexture === yb || (this._baseDiffuseRoughnessTexture === yb || (this._ambientTexture === yb || (this._opacityTexture === yb || (this._reflectionTexture === yb || (this._emissiveTexture === yb || (this._reflectivityTexture === yb || (this._metallicTexture === yb || (this._metallicReflectanceTexture === yb || (this._reflectanceTexture === yb || (this._microSurfaceTexture === yb || (this._bumpTexture === yb || this._lightmapTexture === yb)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const yb = this.kWy().enableSubSurfaceForPrePass();
          return yb && (yb.enabled = !0), !0
        }
        dispose(yb, bb) {
          this._breakShaderLoadedCheck = !0, bb && (this._environmentBRDFTexture && this.kWy().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(yb, bb)
        }
      }, bb = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(hy[Symbol.metadata] ?? null) : void 0;
        Uy = [(0, Ry.h)("_markAllSubMeshesAsMiscDirty")], (0, Oy.j)(yb, null, Uy, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: yb => "debugMode" in yb,
            get: yb => yb.debugMode,
            set: (yb, bb) => {
              yb.debugMode = bb
            }
          },
          metadata: bb
        }, Zy, cb), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb.PBRMATERIAL_OPAQUE = fy.e.MATERIAL_OPAQUE, yb.PBRMATERIAL_ALPHATEST = fy.e.MATERIAL_ALPHATEST, yb.PBRMATERIAL_ALPHABLEND = fy.e.MATERIAL_ALPHABLEND, yb.PBRMATERIAL_ALPHATESTANDBLEND = fy.e.MATERIAL_ALPHATESTANDBLEND, yb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, yb.LIGHTFALLOFF_PHYSICAL = 0, yb.LIGHTFALLOFF_GLTF = 1, yb.LIGHTFALLOFF_STANDARD = 2, yb.ForceGLSL = !1, yb._ShaderLoader = new eb.d((() => [Promise.all([Wy.e(295), Wy.e(306)]).then((() => Wy(60079))), Promise.all([Wy.e(300), Wy.e(296), Wy.e(360), Wy.e(309), Wy.e(359)]).then((() => Wy(60097)))]), (() => [Promise.all([Wy.e(314), Wy.e(316), Wy.e(323)]).then((() => Wy(60188))), Promise.all([Wy.e(314), Wy.e(317), Wy.e(363), Wy.e(327), Wy.e(362)]).then((() => Wy(60222)))])), yb
    })();
    Object.getOwnPropertyDescriptor(Jb.prototype, "decalMap") || Object.defineProperty(Jb.prototype, "decalMap", (0, lb.e)("PBRBaseMaterial", "decalMap")), (0, Wy(40315).c)();
    var gW = Wy(38485);
    var Gb = Wy(38576),
      Ob = Wy(40299),
      Rb = Wy(38287),
      vW = Wy(38305),
      iW = Wy(38414);
    let Mb = !1;
    const Yb = new wy.e,
      Xb = new wy.e;
    class nb extends Ob.e {
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
      set wrapU(yb) {
        if (this._textures)
          for (let bb = 0; bb < this._textures.length; bb++) this._textures[bb].wrapU = yb
      }
      set wrapV(yb) {
        if (this._textures)
          for (let bb = 0; bb < this._textures.length; bb++) this._textures[bb].wrapV = yb
      }
      constructor(yb, bb, Wy, Uy, hy, fy) {
        const Zy = !(!hy || !hy.generateMipMaps) && hy.generateMipMaps,
          cb = !(!hy || !hy.generateDepthTexture) && hy.generateDepthTexture,
          Py = hy && hy.depthTextureFormat ? hy.depthTextureFormat : 15,
          oy = !hy || void 0 === hy.doNotChangeAspectRatio || hy.doNotChangeAspectRatio,
          By = !(!hy || !hy.drawOnlyOnFirstAttachmentByDefault) && hy.drawOnlyOnFirstAttachmentByDefault;
        if (super(yb, bb, Uy, Zy, oy, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Mb || (Mb = !0, vW.ThinEngine.prototype.restoreSingleAttachment = function() {
            const yb = this._gl;
            this.bindAttachments([yb.BACK])
          }, vW.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const yb = this._gl;
            this.bindAttachments([yb.COLOR_ATTACHMENT0])
          }, vW.ThinEngine.prototype.buildTextureLayout = function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Wy = this._gl,
              Uy = [];
            if (bb) Uy.push(Wy.BACK);
            else
              for (let hy = 0; hy < yb.length; hy++) yb[hy] ? Uy.push(Wy["COLOR_ATTACHMENT" + hy]) : Uy.push(Wy.NONE);
            return Uy
          }, vW.ThinEngine.prototype.bindAttachments = function(yb) {
            const bb = this._gl,
              Wy = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Wy)
              for (let Uy = 0; Uy < yb.length; Uy++) yb[Uy] !== bb.NONE && Wy[Uy] && (0, iW.h)(Wy[Uy].format) && (this._integerMRTAttachmentsMask |= 1 << Uy);
            bb.drawBuffers(yb)
          }, vW.ThinEngine.prototype.clearAttachments = function(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Zy = this._currentRenderTarget?.textures;
            let cb = !1;
            if (Wy && yb && Zy)
              for (let Py = 0; Py < bb.length; Py++) {
                const yb = Zy[Py];
                if (bb[Py] !== this._gl.NONE && yb && (0, iW.h)(yb.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  cb = !0;
                  break
                }
              }
            if (!cb || !yb || !Zy) return this.bindAttachments(bb), void this.clear(yb, Wy, Uy, hy, fy);
            this.bindAttachments(bb), this._applyColorWriteState();
            for (let Py = 0; Py < bb.length; Py++) {
              const Wy = Zy[Py];
              if (bb[Py] !== this._gl.NONE && Wy) {
                let bb = yb;
                if ((0, iW.h)(Wy.format)) {
                  const Uy = (0, iW.i)(Wy.type);
                  bb = Uy ? Yb : Xb;
                  const hy = Uy ? 255 : 1;
                  bb.r = Math.round(yb.r * hy), bb.g = Math.round(yb.g * hy), bb.b = Math.round(yb.b * hy), bb.a = Math.round(yb.a * hy)
                }
                this._clearColorAttachment(Py, bb, Wy.format, Wy.type)
              }
            }
            if (Uy || hy) {
              const yb = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Uy, hy, fy)
              } finally {
                this._integerMRTAttachmentsMask = yb
              }
            }
          }, vW.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Wy = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, yb.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(yb), bb || this.generateMipMapsMultiFramebuffer(yb), Wy && (yb._MSAAFramebuffer && this._bindUnboundFramebuffer(yb._framebuffer), Wy()), this._bindUnboundFramebuffer(null)
          }, vW.ThinEngine.prototype.createMultipleRenderTarget = function(yb, bb) {
            let Wy, Uy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              hy = !1,
              fy = !0,
              Zy = !1,
              cb = !1,
              Py = 1,
              oy = 1,
              By = [],
              Ky = [],
              ey = [],
              qb = [],
              sy = [],
              Sy = [],
              Ey = [],
              ly = [],
              mb = [],
              Cy = !1;
            const Ty = this._createHardwareRenderTargetWrapper(!0, !1, yb);
            void 0 !== bb && (hy = void 0 !== bb.generateMipMaps && bb.generateMipMaps, fy = void 0 === bb.generateDepthBuffer || bb.generateDepthBuffer, Zy = void 0 !== bb.generateStencilBuffer && bb.generateStencilBuffer, cb = void 0 !== bb.generateDepthTexture && bb.generateDepthTexture, Py = bb.Yqy ?? 1, oy = bb.samples ?? oy, By = bb.types || By, Ky = bb.samplingModes || Ky, ey = bb.useSRGBBuffers || ey, qb = bb.formats || qb, sy = bb.targetTypes || sy, Sy = bb.faceIndex || Sy, Ey = bb.layerIndex || Ey, ly = bb.layerCounts || ly, mb = bb.labels || mb, Cy = bb.dontCreateTextures ?? !1, this.vf > 1 && (13 === bb.depthTextureFormat || 17 === bb.depthTextureFormat || 16 === bb.depthTextureFormat || 14 === bb.depthTextureFormat || 18 === bb.depthTextureFormat) && (Wy = bb.depthTextureFormat)), void 0 === Wy && (Wy = Zy ? 13 : 14);
            const Vy = this._gl,
              Jy = this._currentFramebuffer,
              gb = Vy.createFramebuffer();
            this._bindUnboundFramebuffer(gb);
            const Gy = yb.width ?? yb,
              Oy = yb.height ?? yb,
              Ry = [],
              ib = [],
              My = this.vf > 1 && (13 === Wy || 17 === Wy || 18 === Wy);
            Ty.label = bb?.label ?? "MultiRenderTargetWrapper", Ty._framebuffer = gb, Ty._generateDepthBuffer = cb || fy, Ty._generateStencilBuffer = cb ? My : Zy, Ty._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ty._generateStencilBuffer, Ty._generateDepthBuffer, Gy, Oy, 1, Wy), Ty._attachments = ib;
            for (let Yy = 0; Yy < Py; Yy++) {
              let yb = Ky[Yy] || 3,
                bb = By[Yy] || 0,
                Wy = ey[Yy] || !1;
              const Uy = qb[Yy] || 5,
                fy = sy[Yy] || 3553,
                Zy = ly[Yy] ?? 1;
              (1 !== bb || this._caps.textureFloatLinearFiltering) && (2 !== bb || this._caps.textureHalfFloatLinearFiltering) || (yb = 1);
              const cb = this._getSamplingParameters(yb, hy);
              1 !== bb || this._caps.textureFloat || (bb = 0, vb.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Wy = Wy && this._caps.supportSRGBBuffers && (this.vf > 1 || this.isWebGPU);
              const Py = this.vf > 1,
                oy = Vy[Py ? "COLOR_ATTACHMENT" + Yy : "COLOR_ATTACHMENT" + Yy + "_WEBGL"];
              if (ib.push(oy), -1 === fy || Cy) continue;
              const Sy = new Rb.d(this, 6);
              Ry[Yy] = Sy, Vy.activeTexture(Vy["TEXTURE" + Yy]), Vy.bindTexture(fy, Sy._hardwareTexture.underlyingResource), Vy.texParameteri(fy, Vy.TEXTURE_MAG_FILTER, cb.mag), Vy.texParameteri(fy, Vy.TEXTURE_MIN_FILTER, cb.min), Vy.texParameteri(fy, Vy.TEXTURE_WRAP_S, Vy.CLAMP_TO_EDGE), Vy.texParameteri(fy, Vy.TEXTURE_WRAP_T, Vy.CLAMP_TO_EDGE);
              const Ey = this._getRGBABufferInternalSizedFormat(bb, Uy, Wy),
                Jy = this._getInternalFormat(Uy),
                gb = this._getWebGLTextureType(bb);
              if (!Py || 35866 !== fy && 32879 !== fy)
                if (34067 === fy) {
                  for (let yb = 0; yb < 6; yb++) Vy.texImage2D(Vy.TEXTURE_CUBE_MAP_POSITIVE_X + yb, 0, Ey, Gy, Oy, 0, Jy, gb, null);
                  Sy.isCube = !0
                } else Vy.texImage2D(Vy.TEXTURE_2D, 0, Ey, Gy, Oy, 0, Jy, gb, null);
              else 35866 === fy ? Sy.is2DArray = !0 : Sy.is3D = !0, Sy.baseDepth = Sy.depth = Zy, Vy.texImage3D(fy, 0, Ey, Gy, Oy, Zy, 0, Jy, gb, null);
              hy && Vy.generateMipmap(fy), this._bindTextureDirectly(fy, null), Sy.baseWidth = Gy, Sy.baseHeight = Oy, Sy.width = Gy, Sy.height = Oy, Sy.isReady = !0, Sy.samples = 1, Sy.generateMipMaps = hy, Sy.samplingMode = yb, Sy.type = bb, Sy._useSRGBBuffer = Wy, Sy.format = Uy, Sy.label = mb[Yy] ?? Ty.label + "-Texture" + Yy, this._internalTexturesCache.push(Sy)
            }
            if (cb && this._caps.depthTextureExtension && !Cy) {
              const yb = new Rb.d(this, 14);
              let bb = 5,
                Uy = Vy.DEPTH_COMPONENT16,
                fy = Vy.DEPTH_COMPONENT,
                Zy = Vy.UNSIGNED_SHORT,
                cb = Vy.DEPTH_ATTACHMENT;
              this.vf < 2 ? Uy = Vy.DEPTH_COMPONENT : 14 === Wy ? (bb = 1, Zy = Vy.FLOAT, Uy = Vy.DEPTH_COMPONENT32F) : 18 === Wy ? (bb = 0, Zy = Vy.FLOAT_32_UNSIGNED_INT_24_8_REV, Uy = Vy.DEPTH32F_STENCIL8, fy = Vy.DEPTH_STENCIL, cb = Vy.DEPTH_STENCIL_ATTACHMENT) : 16 === Wy ? (bb = 0, Zy = Vy.UNSIGNED_INT, Uy = Vy.DEPTH_COMPONENT24, cb = Vy.DEPTH_ATTACHMENT) : 13 !== Wy && 17 !== Wy || (bb = 12, Zy = Vy.UNSIGNED_INT_24_8, Uy = Vy.DEPTH24_STENCIL8, fy = Vy.DEPTH_STENCIL, cb = Vy.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Vy.TEXTURE_2D, yb, !0), Vy.texParameteri(Vy.TEXTURE_2D, Vy.TEXTURE_MAG_FILTER, Vy.NEAREST), Vy.texParameteri(Vy.TEXTURE_2D, Vy.TEXTURE_MIN_FILTER, Vy.NEAREST), Vy.texParameteri(Vy.TEXTURE_2D, Vy.TEXTURE_WRAP_S, Vy.CLAMP_TO_EDGE), Vy.texParameteri(Vy.TEXTURE_2D, Vy.TEXTURE_WRAP_T, Vy.CLAMP_TO_EDGE), Vy.texImage2D(Vy.TEXTURE_2D, 0, Uy, Gy, Oy, 0, fy, Zy, null), Vy.framebufferTexture2D(Vy.FRAMEBUFFER, cb, Vy.TEXTURE_2D, yb._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Vy.TEXTURE_2D, null), Ty._depthStencilTexture = yb, Ty._depthStencilTextureWithStencil = My, yb.baseWidth = Gy, yb.baseHeight = Oy, yb.width = Gy, yb.height = Oy, yb.isReady = !0, yb.samples = 1, yb.generateMipMaps = hy, yb.samplingMode = 1, yb.format = Wy, yb.type = bb, yb.label = Ty.label + "-DepthStencil", Ry[Py] = yb, this._internalTexturesCache.push(yb)
            }
            if (Ty.setTextures(Ry), Uy && Vy.drawBuffers(ib), this._bindUnboundFramebuffer(Jy), Ty.setLayerAndFaceIndices(Ey, Sy), this.resetTextureCache(), Cy) {
              if (oy > 1) {
                const yb = Vy.createFramebuffer();
                if (!yb) throw new Error("Unable to create multi sampled framebuffer");
                Ty._samples = oy, Ty._MSAAFramebuffer = yb, Py > 0 && Uy && (this._bindUnboundFramebuffer(yb), Vy.drawBuffers(ib), this._bindUnboundFramebuffer(Jy))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Ty, oy, Uy);
            return Ty
          }, vW.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(yb, bb) {
            let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.vf < 2 || !yb) return 1;
            if (yb.samples === bb) return bb;
            const Uy = this._gl;
            bb = Math.min(bb, this.getCaps().maxMSAASamples), yb._depthStencilBuffer && (Uy.deleteRenderbuffer(yb._depthStencilBuffer), yb._depthStencilBuffer = null), yb._MSAAFramebuffer && (Uy.deleteFramebuffer(yb._MSAAFramebuffer), yb._MSAAFramebuffer = null);
            const hy = yb._attachments.length;
            for (let Zy = 0; Zy < hy; Zy++) {
              const bb = yb.textures[Zy]._hardwareTexture;
              bb?.releaseMSAARenderBuffers()
            }
            if (bb > 1 && "function" === typeof Uy.renderbufferStorageMultisample) {
              const fy = Uy.createFramebuffer();
              if (!fy) throw new Error("Unable to create multi sampled framebuffer");
              yb._MSAAFramebuffer = fy, this._bindUnboundFramebuffer(fy);
              const Zy = [];
              for (let Wy = 0; Wy < hy; Wy++) {
                const hy = yb.textures[Wy],
                  fy = hy._hardwareTexture,
                  cb = Uy[this.vf > 1 ? "COLOR_ATTACHMENT" + Wy : "COLOR_ATTACHMENT" + Wy + "_WEBGL"],
                  Py = this._createRenderBuffer(hy.width, hy.height, bb, -1, this._getRGBABufferInternalSizedFormat(hy.type, hy.format, hy._useSRGBBuffer), cb);
                if (!Py) throw new Error("Unable to create multi sampled framebuffer");
                fy.addMSAARenderBuffer(Py), hy.samples = bb, Zy.push(cb)
              }
              Wy && Uy.drawBuffers(Zy)
            } else this._bindUnboundFramebuffer(yb._framebuffer);
            const fy = yb._depthStencilTexture ? yb._depthStencilTexture.format : void 0;
            return yb._depthStencilBuffer = this._setupFramebufferDepthAttachments(yb._generateStencilBuffer, yb._generateDepthBuffer, yb.width, yb.height, bb, fy), this._bindUnboundFramebuffer(null), yb._samples = bb, bb
          }, vW.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(yb) {
            const bb = yb,
              Wy = this._gl;
            if (bb.isMulti)
              for (let Uy = 0; Uy < bb._attachments.length; Uy++) {
                const yb = bb.textures[Uy];
                !yb?.generateMipMaps || yb?.isCube || yb?.is3D || (this._bindTextureDirectly(Wy.TEXTURE_2D, yb, !0), Wy.generateMipmap(Wy.TEXTURE_2D), this._bindTextureDirectly(Wy.TEXTURE_2D, null))
              }
          }, vW.ThinEngine.prototype.resolveMultiFramebuffer = function(yb) {
            const bb = yb,
              Wy = this._gl;
            if (!bb._MSAAFramebuffer || !bb.isMulti) return;
            let Uy = bb.resolveMSAAColors ? Wy.COLOR_BUFFER_BIT : 0;
            Uy |= bb._generateDepthBuffer && bb.resolveMSAADepth ? Wy.DEPTH_BUFFER_BIT : 0, Uy |= bb._generateStencilBuffer && bb.resolveMSAAStencil ? Wy.STENCIL_BUFFER_BIT : 0;
            const hy = bb._attachments,
              fy = hy.length;
            Wy.bindFramebuffer(Wy.READ_FRAMEBUFFER, bb._MSAAFramebuffer), Wy.bindFramebuffer(Wy.DRAW_FRAMEBUFFER, bb._framebuffer);
            for (let Zy = 0; Zy < fy; Zy++) {
              const yb = bb.textures[Zy];
              for (let bb = 0; bb < fy; bb++) hy[bb] = Wy.NONE;
              hy[Zy] = Wy[this.vf > 1 ? "COLOR_ATTACHMENT" + Zy : "COLOR_ATTACHMENT" + Zy + "_WEBGL"], Wy.readBuffer(hy[Zy]), Wy.drawBuffers(hy), Wy.blitFramebuffer(0, 0, yb.width, yb.height, 0, 0, yb.width, yb.height, Uy, Wy.NEAREST)
            }
            for (let Zy = 0; Zy < fy; Zy++) hy[Zy] = Wy[this.vf > 1 ? "COLOR_ATTACHMENT" + Zy : "COLOR_ATTACHMENT" + Zy + "_WEBGL"];
            Wy.drawBuffers(hy), Wy.bindFramebuffer(this._gl.FRAMEBUFFER, bb._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = fy;
        const Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [],
          ly = [],
          mb = [];
        this._initTypes(Wy, Ky, ey, qb, sy, Sy, Ey, ly, mb, hy);
        const Cy = !hy || void 0 === hy.generateDepthBuffer || hy.generateDepthBuffer,
          Ty = !(!hy || void 0 === hy.generateStencilBuffer) && hy.generateStencilBuffer,
          Vy = hy && hy.samples ? hy.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: ey,
          generateMipMaps: Zy,
          generateDepthBuffer: Cy,
          generateStencilBuffer: Ty,
          generateDepthTexture: cb,
          depthTextureFormat: Py,
          types: Ky,
          Yqy: Wy,
          useSRGBBuffers: qb,
          samples: Vy,
          formats: sy,
          targetTypes: Sy,
          faceIndex: Ey,
          layerIndex: ly,
          layerCounts: mb,
          labels: fy,
          label: yb
        }, this._count = Wy, this._drawOnlyOnFirstAttachmentByDefault = By, Wy > 0 && (this._createInternalTextures(), this._createTextures(fy))
      }
      _initTypes(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        for (let By = 0; By < yb; By++) oy && oy.types && void 0 !== oy.types[By] ? bb.push(oy.types[By]) : bb.push(oy && oy.defaultType ? oy.defaultType : 0), oy && oy.samplingModes && void 0 !== oy.samplingModes[By] ? Wy.push(oy.samplingModes[By]) : Wy.push(My.f.BILINEAR_SAMPLINGMODE), oy && oy.useSRGBBuffers && void 0 !== oy.useSRGBBuffers[By] ? Uy.push(oy.useSRGBBuffers[By]) : Uy.push(!1), oy && oy.formats && void 0 !== oy.formats[By] ? hy.push(oy.formats[By]) : hy.push(5), oy && oy.targetTypes && void 0 !== oy.targetTypes[By] ? fy.push(oy.targetTypes[By]) : fy.push(3553), oy && oy.faceIndex && void 0 !== oy.faceIndex[By] ? Zy.push(oy.faceIndex[By]) : Zy.push(0), oy && oy.layerIndex && void 0 !== oy.layerIndex[By] ? cb.push(oy.layerIndex[By]) : cb.push(0), oy && oy.layerCounts && void 0 !== oy.layerCounts[By] ? Py.push(oy.layerCounts[By]) : Py.push(1)
      }
      _createInternaTextureIndexMapping() {
        const yb = {},
          bb = [];
        if (!this._renderTarget) return bb;
        const Wy = this._renderTarget.textures;
        for (let Uy = 0; Uy < Wy.length; Uy++) {
          const hy = Wy[Uy];
          if (!hy) continue;
          const fy = yb[hy.uniqueId];
          void 0 !== fy ? bb[Uy] = fy : yb[hy.uniqueId] = Uy
        }
        return bb
      }
      _rebuild() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || yb) return;
        const Uy = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), bb && (this._releaseTextures(), this._createTextures(Wy));
        const hy = this._renderTarget.textures;
        for (let fy = 0; fy < hy.length; fy++) {
          const yb = this._textures[fy];
          void 0 !== Uy[fy] && this._renderTarget.setTexture(hy[Uy[fy]], fy), yb._texture = hy[fy], yb._texture && (yb._noMipmap = !yb._texture.useMipMaps, yb._useSRGBBuffer = yb._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let yb = 0; yb < this._textures.length; yb++) this._textures[yb]._texture = null, this._textures[yb].dispose()
      }
      _createTextures(yb) {
        const bb = this._renderTarget.textures;
        this._textures = [];
        for (let Wy = 0; Wy < bb.length; Wy++) {
          const Uy = new My.f(null, this.kWy());
          yb?.[Wy] && (Uy.name = yb[Wy]), Uy._texture = bb[Wy], Uy._texture && (Uy._noMipmap = !Uy._texture.useMipMaps, Uy._useSRGBBuffer = Uy._texture._useSRGBBuffer), this._textures.push(Uy)
        }
      }
      setInternalTexture(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === bb && (this._texture = yb), this.renderTarget.setTexture(yb, bb, Wy), this.textures[bb] || (this.textures[bb] = new My.f(null, this.kWy()), this.textures[bb].name = this._textureNames?.[bb] ?? this.textures[bb].name), this.textures[bb]._texture = yb, this.textures[bb]._noMipmap = !yb.useMipMaps, this.textures[bb]._useSRGBBuffer = yb._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[bb] = yb.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[bb] = yb.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[bb] = yb._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[bb])) {
          let Wy;
          Wy = yb.is2DArray ? 35866 : yb.isCube ? 34067 : yb.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[bb] = Wy
        }
      }
      setLayerAndFaceIndex(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[yb] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[yb] = bb), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[yb] = Wy), this.renderTarget.setLayerAndFaceIndex(yb, bb, Wy))
      }
      setLayerAndFaceIndices(yb, bb) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = yb, this._multiRenderTargetOptions.faceIndex = bb, this.renderTarget.setLayerAndFaceIndices(yb, bb))
      }
      get samples() {
        return this._samples
      }
      set samples(yb) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(yb) : this._samples = yb
      }
      resize(yb) {
        this._processSizeParameter(yb), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(yb, bb, Wy) {
        this._multiRenderTargetOptions.Yqy = yb, this._count = yb;
        const Uy = [],
          hy = [],
          fy = [],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [];
        this._textureNames = Wy, this._initTypes(yb, Uy, hy, fy, Zy, cb, Py, oy, By, bb), this._multiRenderTargetOptions.types = Uy, this._multiRenderTargetOptions.samplingModes = hy, this._multiRenderTargetOptions.useSRGBBuffers = fy, this._multiRenderTargetOptions.formats = Zy, this._multiRenderTargetOptions.targetTypes = cb, this._multiRenderTargetOptions.faceIndex = Py, this._multiRenderTargetOptions.layerIndex = oy, this._multiRenderTargetOptions.layerCounts = By, this._multiRenderTargetOptions.labels = Wy, this._rebuild(!1, !0, Wy)
      }
      _unbindFrameBuffer(yb, bb) {
        this._renderTarget && yb.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(bb)
        }))
      }
      dispose() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), yb ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const yb = this._renderTarget?.textures;
        if (yb) {
          for (let bb = yb.length - 1; bb >= 0; bb--) this._textures[bb]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var ub = Wy(38649);
    class rW {
      constructor(yb) {
        this.name = ub.b.NAME_GEOMETRYBUFFERRENDERER, this.Pf = yb
      }
      register() {
        this.Pf._gatherRenderTargetsStage.registerStep(ub.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(yb) {
        this.Pf._geometryBufferRenderer && yb.push(this.Pf._geometryBufferRenderer.getGBuffer())
      }
    }
    let Hb = !1;
    var aW;
    ! function(yb) {
      yb[yb.Small = 0] = "Small", yb[yb.Medium = 1] = "Medium", yb[yb.Large = 2] = "Large", yb[yb.ExtraLarge = 3] = "ExtraLarge"
    }(aW || (aW = {}));
    const Fb = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      pb = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Lb {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(yb) {
        if (yb && this._enableMeshBlendTag && !this._scene.xh().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = yb
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(yb) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = yb, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(yb, bb) {
        yb === Lb.POSITION_TEXTURE_TYPE ? (this._positionIndex = bb, this._enablePosition = !0) : yb === Lb.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = bb, this._enableVelocity = !0) : yb === Lb.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = bb, this._enableVelocityLinear = !0) : yb === Lb.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = bb, this._enableReflectivity = !0) : yb === Lb.DEPTH_TEXTURE_TYPE ? (this._depthIndex = bb, this._enableDepth = !0) : yb === Lb.NORMAL_TEXTURE_TYPE ? (this._normalIndex = bb, this._enableNormal = !0) : yb === Lb.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = bb, this._enableScreenspaceDepth = !0) : yb === Lb.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = bb, this._enableIrradiance = !0) : yb === Lb.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = bb, this._enableObjectId = !0) : yb === Lb.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = bb, this._enableMeshBlendTag = !0)
      }
      _setAttachments(yb) {
        this._attachmentsFromPrePass = yb
      }
      _linkInternalTexture(yb) {
        this._multiRenderTarget.setInternalTexture(yb, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(yb) {
        this._multiRenderTarget.renderList = yb
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(yb) {
        switch (yb) {
          case Lb.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Lb.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Lb.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Lb.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Lb.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Lb.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Lb.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Lb.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Lb.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Lb.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(yb) {
        this._enableDepth = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(yb) {
        this._enableNormal = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(yb) {
        this._enablePosition = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(yb) {
        this._enableVelocity = yb, yb || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = yb
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(yb) {
        this._enableVelocityLinear = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(yb) {
        this._enableReflectivity = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(yb) {
        this._enableScreenspaceDepth = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(yb) {
        this._enableIrradiance = yb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(yb) {
        if (yb && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (yb && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (yb && !this._enableObjectId && !this._linkedWithPrePass) {
          const yb = this._scene.xh(),
            bb = Math.min(yb.getCaps().maxDrawBuffers ?? 1, 8),
            Wy = this._assignRenderTargetIndices()[0] + 1;
          if (yb.getCaps().drawBuffersExtension && Wy > bb) throw new Error(`GeometryBufferRenderer: ${Wy} color attachments were requested, but this engine supports at most ${bb}`)
        }
        this._enableObjectId = yb, yb || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(yb) {
        if (this._enableMeshBlendTag !== yb) {
          if (yb) {
            const yb = this._scene.xh();
            if (! function(yb) {
                return "NATIVE" !== yb.shaderPlatformName && (yb.isWebGPU || 2 === yb.vf)
              }(yb)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !yb.isWebGPU && !yb.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const bb = Math.min(yb.getCaps().maxDrawBuffers ?? 1, 8),
                Wy = this._assignRenderTargetIndices()[0] + 1;
              if (yb.getCaps().drawBuffersExtension && Wy > bb) throw new Error(`GeometryBufferRenderer: ${Wy} color attachments were requested, but this engine supports at most ${bb}`)
            }
          }
          this._enableMeshBlendTag = yb, yb || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Pf() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        var hy;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new wy.e(0, 0, 0, 0), this._clearDepthColor = new wy.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = yb, this._ratioOrDimensions = bb, this._useUbo = yb.xh().supportsUniformBuffers, this._depthFormat = Wy, this._textureTypesAndFormats = Uy || {}, this._initShaderSourceAsync(), hy = Lb, Hb || (Hb = !0, Object.defineProperty(ab.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(yb) {
            yb && yb.isSupported && (this._geometryBufferRenderer = yb)
          },
          enumerable: !0,
          configurable: !0
        }), ab.g.prototype.enableGeometryBufferRenderer = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new hy(this, yb, bb, Wy), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, ab.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, hy._SceneComponentInitialization = yb => {
          let bb = yb._getComponent(ub.b.NAME_GEOMETRYBUFFERRENDERER);
          bb || (bb = new rW(yb), yb.Foy(bb))
        }), Lb._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.xh().isWebGPU && !Lb.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Wy.e(315).then((() => Wy(60415))), Promise.all([Wy.e(314), Wy.e(326)]).then((() => Wy(60418)))])) : await Promise.all([Wy.e(298).then((() => Wy(60427))), Wy.e(297).then((() => Wy(60429)))]), this._shadersLoaded = !0
      }
      isReady(yb, bb) {
        if (!this._shadersLoaded) return !1;
        const Wy = yb.Wh();
        if (Wy && Wy.disableDepthWrite) return !1;
        if (function(yb) {
            return yb._isGaussianSplatting || "GaussianSplattingMesh" === (bb = yb.getClassName()) || "GaussianSplattingStream" === bb;
            var bb
          }(yb.getMesh())) return !1;
        const Uy = [],
          hy = [py.k.PositionKind],
          fy = yb.getMesh();
        fy.isVerticesDataPresent(py.k.NormalKind) && (Uy.push("#define HAS_NORMAL_ATTRIBUTE"), hy.push(py.k.NormalKind));
        let Zy = !1,
          cb = !1;
        if (Wy) {
          let yb = !1;
          if (Wy.needAlphaTestingForMesh(fy) && Wy.getAlphaTestTexture() && (Uy.push("#define ALPHATEST"), Uy.push(`#define ALPHATEST_UV${Wy.getAlphaTestTexture().coordinatesIndex+1}`), yb = !0), (Wy.bumpTexture || Wy.normalTexture || Wy.geometryNormalTexture) && Iy.d.BumpTextureEnabled) {
            const bb = Wy.bumpTexture || Wy.normalTexture || Wy.geometryNormalTexture;
            Uy.push("#define BUMP"), Uy.push(`#define BUMP_UV${bb.coordinatesIndex+1}`), yb = !0
          }
          if (this._enableReflectivity) {
            let bb = !1;
            if ("PBRMetallicRoughnessMaterial" === Wy.getClassName()) Wy.metallicRoughnessTexture && (Uy.push("#define ORMTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${Wy.metallicRoughnessTexture.coordinatesIndex+1}`), Uy.push("#define METALLICWORKFLOW"), yb = !0, bb = !0), null != Wy.metallic && (Uy.push("#define METALLIC"), Uy.push("#define METALLICWORKFLOW"), bb = !0), null != Wy.roughness && (Uy.push("#define ROUGHNESS"), Uy.push("#define METALLICWORKFLOW"), bb = !0), bb && (Wy.baseTexture && (Uy.push("#define ALBEDOTEXTURE"), Uy.push(`#define ALBEDO_UV${Wy.baseTexture.coordinatesIndex+1}`), Wy.baseTexture.gammaSpace && Uy.push("#define GAMMAALBEDO"), yb = !0), Wy.baseColor && Uy.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Wy.getClassName()) Wy.specularGlossinessTexture ? (Uy.push("#define SPECULARGLOSSINESSTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${Wy.specularGlossinessTexture.coordinatesIndex+1}`), yb = !0, Wy.specularGlossinessTexture.gammaSpace && Uy.push("#define GAMMAREFLECTIVITYTEXTURE")) : Wy.specularColor && Uy.push("#define REFLECTIVITYCOLOR"), null != Wy.glossiness && Uy.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Wy.getClassName()) Wy.metallicTexture && (Uy.push("#define ORMTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${Wy.metallicTexture.coordinatesIndex+1}`), Uy.push("#define METALLICWORKFLOW"), yb = !0, bb = !0), null != Wy.metallic && (Uy.push("#define METALLIC"), Uy.push("#define METALLICWORKFLOW"), bb = !0), null != Wy.roughness && (Uy.push("#define ROUGHNESS"), Uy.push("#define METALLICWORKFLOW"), bb = !0), bb ? (Wy.albedoTexture && (Uy.push("#define ALBEDOTEXTURE"), Uy.push(`#define ALBEDO_UV${Wy.albedoTexture.coordinatesIndex+1}`), Wy.albedoTexture.gammaSpace && Uy.push("#define GAMMAALBEDO"), yb = !0), Wy.albedoColor && Uy.push("#define ALBEDOCOLOR")) : (Wy.reflectivityTexture ? (Uy.push("#define SPECULARGLOSSINESSTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${Wy.reflectivityTexture.coordinatesIndex+1}`), Wy.reflectivityTexture.gammaSpace && Uy.push("#define GAMMAREFLECTIVITYTEXTURE"), yb = !0) : Wy.reflectivityColor && Uy.push("#define REFLECTIVITYCOLOR"), null != Wy.microSurface && Uy.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Wy.getClassName()) Wy.specularTexture && (Uy.push("#define REFLECTIVITYTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${Wy.specularTexture.coordinatesIndex+1}`), Wy.specularTexture.gammaSpace && Uy.push("#define GAMMAREFLECTIVITYTEXTURE"), yb = !0), Wy.specularColor && Uy.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Wy.getClassName()) {
              const bb = Wy;
              Uy.push("#define METALLIC"), Uy.push("#define ROUGHNESS"), bb._useRoughnessFromMetallicTextureGreen && bb.baseMetalnessTexture ? (Uy.push("#define ORMTEXTURE"), Uy.push(`#define REFLECTIVITY_UV${bb.baseMetalnessTexture.coordinatesIndex+1}`), yb = !0) : bb.baseMetalnessTexture ? (Uy.push("#define METALLIC_TEXTURE"), Uy.push(`#define METALLIC_UV${bb.baseMetalnessTexture.coordinatesIndex+1}`), yb = !0) : bb.specularRoughnessTexture && (Uy.push("#define ROUGHNESS_TEXTURE"), Uy.push(`#define ROUGHNESS_UV${bb.specularRoughnessTexture.coordinatesIndex+1}`), yb = !0), bb.baseColorTexture && (Uy.push("#define ALBEDOTEXTURE"), Uy.push(`#define ALBEDO_UV${bb.baseColorTexture.coordinatesIndex+1}`), bb.baseColorTexture.gammaSpace && Uy.push("#define GAMMAALBEDO"), yb = !0), bb.baseColor && Uy.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Uy.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Wy.getClassName())) {
            const bb = Wy;
            bb.subsurfaceWeight > 0 && bb.subsurfaceWeightTexture && (Uy.push("#define SUBSURFACE_WEIGHT"), Uy.push(`#define SUBSURFACEWEIGHT_UV${bb.subsurfaceWeightTexture.coordinatesIndex+1}`), yb = !0), bb.transmissionWeight > 0 && bb.transmissionWeightTexture && (Uy.push("#define TRANSMISSION_WEIGHT"), Uy.push(`#define TRANSMISSIONWEIGHT_UV${bb.transmissionWeightTexture.coordinatesIndex+1}`), yb = !0)
          }
          yb && (Uy.push("#define NEED_UV"), fy.isVerticesDataPresent(py.k.UVKind) && (hy.push(py.k.UVKind), Uy.push("#define UV1"), Zy = !0), fy.isVerticesDataPresent(py.k.UV2Kind) && (hy.push(py.k.UV2Kind), Uy.push("#define UV2"), cb = !0))
        }
        if (this._enableDepth && (Uy.push("#define DEPTH"), Uy.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Uy.push("#define NORMAL"), Uy.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Uy.push("#define POSITION"), Uy.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Uy.push("#define VELOCITY"), Uy.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(fy) && Uy.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Uy.push("#define VELOCITY_LINEAR"), Uy.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(fy) && Uy.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Uy.push("#define REFLECTIVITY"), Uy.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Uy.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Uy.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Uy.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Uy.push("#define IRRADIANCE");
          const yb = this._scene;
          if (yb.environmentTexture) {
            const bb = {};
            let hy = !1,
              fy = 0;
            "OpenPBRMaterial" !== Wy.getClassName() && "StandardMaterial" !== Wy.getClassName() && "PBRMetallicRoughnessMaterial" !== Wy.getClassName() && "PBRSpecularGlossinessMaterial" !== Wy.getClassName() && "PBRMaterial" !== Wy.getClassName() || (hy = !!Wy.realtimeFiltering, fy = Wy.realtimeFilteringQuality || 0), (0, Ay.X)(yb, yb.environmentTexture, bb, hy, fy, !0);
            for (const yb in bb) bb[yb] && Uy.push("#define " + yb);
            bb.USEIRRADIANCEMAP || Uy.push("#define SPHERICAL_HARMONICS");
            const Zy = yb.postProcessRenderPipelineManager.supportedPipelines.find((yb => "IBLShadowsRenderPipeline" === yb.getClassName()));
            if (Zy) {
              const yb = Zy;
              yb._getAccumulatedTexture() && (Uy.push("#define IBL_SHADOW_TEXTURE"), yb.coloredShadows && Uy.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Uy.push("#define OBJECT_ID"), Uy.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Uy.push("#define MESH_BLEND_TAG"), Uy.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Uy.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Uy.push("#define ENCODE_NORMAL"), fy.useBones && fy.computeBonesUsingShaders && fy.skeleton ? (hy.push(py.k.MatricesIndicesKind), hy.push(py.k.MatricesWeightsKind), fy.numBoneInfluencers > 4 && (hy.push(py.k.MatricesIndicesExtraKind), hy.push(py.k.MatricesWeightsExtraKind)), Uy.push("#define NUM_BONE_INFLUENCERS " + fy.numBoneInfluencers), Uy.push("#define BONETEXTURE " + fy.skeleton.isUsingTextureForMatrices), Uy.push("#define BonesPerMesh " + (fy.skeleton.bones.length + 1))) : (Uy.push("#define NUM_BONE_INFLUENCERS 0"), Uy.push("#define BONETEXTURE false"), Uy.push("#define BonesPerMesh 0"));
        const Py = fy.morphTargetManager ? (0, Ay.P)(fy.morphTargetManager, Uy, hy, fy, !0, !0, !1, Zy, cb, !1) : 0;
        bb && (Uy.push("#define INSTANCES"), (0, Ay.tb)(hy, this._enableVelocity || this._enableVelocityLinear), yb.getRenderingMesh().hasThinInstances && Uy.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Uy.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Uy.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Bb.k)(Wy, this._scene, Uy);
        const oy = this._scene.xh(),
          By = yb._getDrawWrapper(void 0, !0),
          Ky = By.defines,
          ey = Uy.join("\n");
        return Ky !== ey && By.setEffect(oy.createEffect("geometry", {
          attributes: hy,
          uniformsNames: pb,
          samplers: Fb,
          defines: ey,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Py
          },
          shaderLanguage: this.shaderLanguage
        }, oy), ey), By.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(yb) {
        if (this._enableObjectId && 1 !== yb) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== yb) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = yb
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.xh().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Pf.xh()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Pf.xh().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const yb = [],
          bb = [];
        let Wy = 0;
        return this._enableDepth && (this._depthIndex = Wy, Wy++, yb.push("gBuffer_Depth"), bb.push(this._textureTypesAndFormats[Lb.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Wy, Wy++, yb.push("gBuffer_Normal"), bb.push(this._textureTypesAndFormats[Lb.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Wy, Wy++, yb.push("gBuffer_Position"), bb.push(this._textureTypesAndFormats[Lb.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Wy, Wy++, yb.push("gBuffer_Velocity"), bb.push(this._textureTypesAndFormats[Lb.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Wy, Wy++, yb.push("gBuffer_VelocityLinear"), bb.push(this._textureTypesAndFormats[Lb.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Wy, Wy++, yb.push("gBuffer_Reflectivity"), bb.push(this._textureTypesAndFormats[Lb.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Wy, Wy++, yb.push("gBuffer_ScreenspaceDepth"), bb.push(this._textureTypesAndFormats[Lb.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Wy, Wy++, yb.push("gBuffer_Irradiance"), bb.push(this._textureTypesAndFormats[Lb.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Wy, Wy++, yb.push("gBuffer_ObjectId"), bb.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Wy, Wy++, yb.push("gBuffer_MeshBlendTag"), bb.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Wy, yb, bb]
      }
      _createRenderTargets() {
        const yb = this._scene.xh(),
          [bb, Wy, Uy] = this._assignRenderTargetIndices(),
          hy = Math.min(yb.getCaps().maxDrawBuffers ?? 1, 8);
        if (yb.getCaps().drawBuffersExtension && bb > hy) throw new Error(`GeometryBufferRenderer: ${bb} color attachments were requested, but this engine supports at most ${hy}`);
        let Zy = 0;
        yb._caps.textureFloat && yb._caps.textureFloatLinearFiltering ? Zy = 1 : yb._caps.textureHalfFloat && yb._caps.textureHalfFloatLinearFiltering && (Zy = 2);
        const cb = this._getRenderTargetDimensions(),
          Py = [],
          oy = [],
          By = [];
        for (const fy of Uy) fy ? (Py.push(fy.textureType), oy.push(fy.textureFormat), By.push(fy.samplingMode ?? 2)) : (Py.push(Zy), oy.push(5), By.push(2));
        if (this._normalsAreUnsigned = 11 === Py[Lb.NORMAL_TEXTURE_TYPE] || 13 === Py[Lb.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new nb("gBuffer", cb, bb, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Py,
            formats: oy,
            samplingModes: By,
            depthTextureFormat: this._depthFormat
          }, Wy.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = My.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = My.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Ky = [!0],
          ey = [!1],
          qb = [!0];
        for (let fy = 1; fy < bb; ++fy) Ky.push(!0), qb.push(!1), ey.push(!0);
        const sy = yb.buildTextureLayout(Ky),
          Sy = yb.buildTextureLayout(ey),
          Ey = yb.buildTextureLayout(qb);
        this._multiRenderTarget.onClearObservable.add((yb => {
          const bb = this.useSpecificClearForDepthTexture ? Sy : sy;
          yb.clearAttachments(this._clearColor, bb, !0, !0, !0), this.useSpecificClearForDepthTexture && yb.clearAttachments(this._clearDepthColor, Ey, !0, !1, !1), yb.bindAttachments(sy)
        })), this._resizeObserver = yb.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const ly = yb => {
          const bb = yb.getRenderingMesh(),
            Wy = yb.getEffectiveMesh(),
            Uy = this._scene,
            hy = Uy.xh(),
            Zy = yb.Wh();
          if (!Zy) return;
          if (Wy._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Wy.uniqueId] && (this._previousTransformationMatrices[Wy.uniqueId] = {
              Kb: Fy.c.Identity(),
              viewProjection: Uy.getTransformMatrix()
            }, bb.skeleton)) {
            const yb = bb.skeleton.getTransformMatrices(bb);
            this._previousBonesTransformationMatrices[bb.uniqueId] = this._copyBonesTransformationMatrices(yb, new Float32Array(yb.length))
          }
          const cb = bb._getInstancesRenderList(yb._id, !!yb.getReplacementMesh());
          if (cb.mustReturn) return;
          const Py = hy.getCaps().instancedArrays && (null !== cb.visibleInstances[yb._id] || bb.hasThinInstances),
            oy = Wy.getWorldMatrix();
          if (this.isReady(yb, Py)) {
            const By = yb._getDrawWrapper();
            if (!By) return;
            const Ky = By.effect;
            let ey;
            hy.enableEffect(By), Py || bb._bind(yb, Ky, Zy.fillMode), this._useUbo ? ((0, Ay.v)(Ky, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Ky.setMatrix("viewProjection", Uy.getTransformMatrix()), Ky.setMatrix("view", Uy.getViewMatrix()), this._scene.bindEyePosition(Ky, "vEyePosition"));
            if (bb._instanceDataStorage.isFrozen || !Zy.backFaceCulling && null === Zy.sideOrientation) ey = bb._effectiveSideOrientation;
            else {
              const yb = Wy._getWorldMatrixDeterminant();
              ey = Zy._getEffectiveOrientation(bb), yb < 0 && (ey = ey === fy.e.ClockWiseSideOrientation ? fy.e.CounterClockWiseSideOrientation : fy.e.ClockWiseSideOrientation)
            }
            if (Zy._preBind(By, ey), Zy.needAlphaTestingForMesh(Wy)) {
              const yb = Zy.getAlphaTestTexture();
              yb && (Ky.setTexture("diffuseSampler", yb), Ky.setMatrix("diffuseMatrix", yb.getTextureMatrix()), Ky.setFloat("alphaCutOff", Zy.alphaCutOff ?? .4))
            }
            if ((Zy.bumpTexture || Zy.normalTexture || Zy.geometryNormalTexture) && Uy.xh().getCaps().standardDerivatives && Iy.d.BumpTextureEnabled) {
              const yb = Zy.bumpTexture || Zy.normalTexture || Zy.geometryNormalTexture;
              Ky.setFloat3("vBumpInfos", yb.coordinatesIndex, 1 / yb.level, Zy.parallaxScaleBias), Ky.setMatrix("bumpMatrix", yb.getTextureMatrix()), Ky.setTexture("bumpSampler", yb), Ky.setFloat2("vTangentSpaceParams", Zy.invertNormalMapX ? -1 : 1, Zy.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Zy.getClassName()) null !== Zy.metallicRoughnessTexture && (Ky.setTexture("reflectivitySampler", Zy.metallicRoughnessTexture), Ky.setMatrix("reflectivityMatrix", Zy.metallicRoughnessTexture.getTextureMatrix())), null !== Zy.metallic && Ky.setFloat("metallic", Zy.metallic), null !== Zy.roughness && Ky.setFloat("glossiness", 1 - Zy.roughness), null !== Zy.baseTexture && (Ky.setTexture("albedoSampler", Zy.baseTexture), Ky.setMatrix("albedoMatrix", Zy.baseTexture.getTextureMatrix())), null !== Zy.baseColor && Ky.setColor3("albedoColor", Zy.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Zy.getClassName()) null !== Zy.specularGlossinessTexture ? (Ky.setTexture("reflectivitySampler", Zy.specularGlossinessTexture), Ky.setMatrix("reflectivityMatrix", Zy.specularGlossinessTexture.getTextureMatrix())) : null !== Zy.specularColor && Ky.setColor3("reflectivityColor", Zy.specularColor), null !== Zy.glossiness && Ky.setFloat("glossiness", Zy.glossiness);
            else if ("PBRMaterial" === Zy.getClassName()) null !== Zy.metallicTexture && (Ky.setTexture("reflectivitySampler", Zy.metallicTexture), Ky.setMatrix("reflectivityMatrix", Zy.metallicTexture.getTextureMatrix())), null !== Zy.metallic && Ky.setFloat("metallic", Zy.metallic), null !== Zy.roughness && Ky.setFloat("glossiness", 1 - Zy.roughness), null !== Zy.roughness || null !== Zy.metallic || null !== Zy.metallicTexture ? (null !== Zy.albedoTexture && (Ky.setTexture("albedoSampler", Zy.albedoTexture), Ky.setMatrix("albedoMatrix", Zy.albedoTexture.getTextureMatrix())), null !== Zy.albedoColor && Ky.setColor3("albedoColor", Zy.albedoColor)) : (null !== Zy.reflectivityTexture ? (Ky.setTexture("reflectivitySampler", Zy.reflectivityTexture), Ky.setMatrix("reflectivityMatrix", Zy.reflectivityTexture.getTextureMatrix())) : null !== Zy.reflectivityColor && Ky.setColor3("reflectivityColor", Zy.reflectivityColor), null !== Zy.microSurface && Ky.setFloat("glossiness", Zy.microSurface));
            else if ("StandardMaterial" === Zy.getClassName()) null !== Zy.specularTexture && (Ky.setTexture("reflectivitySampler", Zy.specularTexture), Ky.setMatrix("reflectivityMatrix", Zy.specularTexture.getTextureMatrix())), null !== Zy.specularColor && Ky.setColor3("reflectivityColor", Zy.specularColor);
            else if ("OpenPBRMaterial" === Zy.getClassName()) {
              const yb = Zy;
              yb._useRoughnessFromMetallicTextureGreen && yb.baseMetalnessTexture ? (Ky.setTexture("reflectivitySampler", yb.baseMetalnessTexture), Ky.setMatrix("reflectivityMatrix", yb.baseMetalnessTexture.getTextureMatrix())) : yb.baseMetalnessTexture ? (Ky.setTexture("metallicSampler", yb.baseMetalnessTexture), Ky.setMatrix("metallicMatrix", yb.baseMetalnessTexture.getTextureMatrix())) : yb.specularRoughnessTexture && (Ky.setTexture("roughnessSampler", yb.specularRoughnessTexture), Ky.setMatrix("roughnessMatrix", yb.specularRoughnessTexture.getTextureMatrix())), Ky.setFloat("metallic", yb.baseMetalness), Ky.setFloat("glossiness", 1 - yb.specularRoughness), null !== yb.baseColorTexture && (Ky.setTexture("albedoSampler", yb.baseColorTexture), Ky.setMatrix("albedoMatrix", yb.baseColorTexture.getTextureMatrix())), null !== yb.baseColor && Ky.setColor3("albedoColor", yb.baseColor)
            }
            if (this._enableIrradiance && Uy.environmentTexture) {
              const yb = Uy.environmentTexture,
                bb = Uy.postProcessRenderPipelineManager.supportedPipelines.find((yb => "IBLShadowsRenderPipeline" === yb.getClassName()));
              if (bb) {
                const yb = bb._getAccumulatedTexture();
                yb && (Ky.setTexture("iblShadowSampler", yb), Ky.setFloat2("shadowTextureSize", yb.getSize().width, yb.getSize().height))
              }
              if (Ky.setMatrix("reflectionMatrix", yb.getReflectionTextureMatrix()), Ky.setFloat2("vReflectionInfos", yb.level * Uy.iblIntensity, 0), Ky.setTexture("reflectionSampler", yb), yb.irradianceTexture && (Ky.setTexture("irradianceSampler", yb.irradianceTexture), yb.irradianceTexture._dominantDirection && Ky.setVector3("vReflectionDominantDirection", yb.irradianceTexture._dominantDirection)), yb.sphericalPolynomial) {
                const bb = yb.sphericalPolynomial;
                if (bb.preScaledHarmonics) {
                  const yb = bb.preScaledHarmonics;
                  Ky.setVector3("vSphericalL00", yb.l00), Ky.setVector3("vSphericalL1_1", yb.l1_1), Ky.setVector3("vSphericalL10", yb.l10), Ky.setVector3("vSphericalL11", yb.l11), Ky.setVector3("vSphericalL2_2", yb.l2_2), Ky.setVector3("vSphericalL2_1", yb.l2_1), Ky.setVector3("vSphericalL20", yb.l20), Ky.setVector3("vSphericalL21", yb.l21), Ky.setVector3("vSphericalL22", yb.l22)
                } else Ky.setFloat3("vSphericalX", bb.x.x, bb.x.y, bb.x.z), Ky.setFloat3("vSphericalY", bb.y.x, bb.y.y, bb.y.z), Ky.setFloat3("vSphericalZ", bb.z.x, bb.z.y, bb.z.z), Ky.setFloat3("vSphericalXX_ZZ", bb.xx.x - bb.zz.x, bb.xx.y - bb.zz.y, bb.xx.z - bb.zz.z), Ky.setFloat3("vSphericalYY_ZZ", bb.yy.x - bb.zz.x, bb.yy.y - bb.zz.y, bb.yy.z - bb.zz.z), Ky.setFloat3("vSphericalZZ", bb.zz.x, bb.zz.y, bb.zz.z), Ky.setFloat3("vSphericalXY", bb.xy.x, bb.xy.y, bb.xy.z), Ky.setFloat3("vSphericalYZ", bb.yz.x, bb.yz.y, bb.yz.z), Ky.setFloat3("vSphericalZX", bb.zx.x, bb.zx.y, bb.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Zy.getClassName()) {
                const yb = Zy;
                Ky.setFloat("vSubsurfaceWeight", yb.subsurfaceWeight), yb.subsurfaceWeightTexture && (Ky.setTexture("subsurfaceWeightSampler", yb.subsurfaceWeightTexture), Ky.setMatrix("subsurfaceWeightMatrix", yb.subsurfaceWeightTexture.getTextureMatrix())), Ky.setFloat("vTransmissionWeight", yb.transmissionWeight), yb.transmissionWeightTexture && (Ky.setTexture("transmissionWeightSampler", yb.transmissionWeightTexture), Ky.setMatrix("transmissionWeightMatrix", yb.transmissionWeightTexture.getTextureMatrix())), Ky.setFloat("vTransmissionScatterAnisotropy", yb.transmissionScatterAnisotropy), Ky.setFloat("vSubsurfaceScatterAnisotropy", yb.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Bb.g)(Ky, Zy, this._scene), bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
              const yb = bb.skeleton;
              if (yb.isUsingTextureForMatrices && Ky.getUniformIndex("boneTextureInfo") > -1) {
                const Wy = yb.getTransformMatrixTexture(bb);
                Ky.setTexture("boneSampler", Wy), Ky.setFloat2("boneTextureInfo", yb._textureWidth, yb._textureHeight)
              } else Ky.setMatrices("mBones", bb.skeleton.getTransformMatrices(bb));
              (this._enableVelocity || this._enableVelocityLinear) && Ky.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[bb.uniqueId])
            }
            if ((0, Ay.r)(bb, Ky), bb.morphTargetManager && bb.morphTargetManager.isUsingTextureForTargets && bb.morphTargetManager._bind(Ky), (this._enableVelocity || this._enableVelocityLinear) && (Ky.setMatrix("previousWorld", this._previousTransformationMatrices[Wy.uniqueId].Kb), Ky.setMatrix("previousViewProjection", this._previousTransformationMatrices[Wy.uniqueId].viewProjection)), this._enableObjectId) {
              let yb = bb.uniqueId;
              if (this.objectIdProvider) yb = (0, qW.i)(bb, this.objectIdProvider);
              else if (yb > 16777215) throw new Error(`Invalid geometry object ID ${yb} for mesh "${bb.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Ky.setFloat("objectId", yb)
            }
            if (this._enableMeshBlendTag) {
              const yb = this.meshBlendTagProvider ? (0, qW.e)(bb, this.meshBlendTagProvider) : bb.meshBlendingTag;
              Ky.setInt("meshBlendTag", yb)
            }
            Py && bb.hasThinInstances && Ky.setMatrix("world", oy), bb._processRendering(Wy, yb, Ky, Zy.fillMode, cb, Py, ((yb, bb) => {
              yb || Ky.setMatrix("world", bb)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Wy.uniqueId].Kb = oy.clone(), this._previousTransformationMatrices[Wy.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), bb.skeleton && this._copyBonesTransformationMatrices(bb.skeleton.getTransformMatrices(bb), this._previousBonesTransformationMatrices[Wy.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (bb, Wy, Uy) => {
          if ((Uy || 0 === Wy) && bb.vJ)
            for (let hy = 0; hy < bb.vJ.length; ++hy) {
              const Wy = bb.vJ[hy],
                Uy = Wy.Wh(),
                fy = Wy.getRenderingMesh();
              if (!Uy) continue;
              const Zy = fy._getInstancesRenderList(Wy._id, !!Wy.getReplacementMesh()),
                cb = yb.getCaps().instancedArrays && (null !== Zy.visibleInstances[Wy._id] || fy.hasThinInstances);
              if (!this.isReady(Wy, cb)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (bb, Wy, Uy, hy) => {
          let fy;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.xh().bindAttachments(this._attachmentsFromPrePass)
          }
          if (hy.length) {
            for (yb.setColorWrite(!1), fy = 0; fy < hy.length; fy++) ly(hy.data[fy]);
            yb.setColorWrite(!0)
          }
          for (fy = 0; fy < bb.length; fy++) ly(bb.data[fy]);
          for (yb.setDepthWrite(!1), fy = 0; fy < Wy.length; fy++) ly(Wy.data[fy]);
          if (this.renderTransparentMeshes)
            for (fy = 0; fy < Uy.length; fy++) ly(Uy.data[fy]);
          yb.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const yb = this._scene.xh();
        return {
          width: Math.max(1, Math.floor(yb.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(yb.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(yb, bb) {
        for (let Wy = 0; Wy < yb.length; Wy++) bb[Wy] = yb[Wy];
        return bb
      }
    }
    Lb.ForceGLSL = !1, Lb.DEPTH_TEXTURE_TYPE = 0, Lb.NORMAL_TEXTURE_TYPE = 1, Lb.POSITION_TEXTURE_TYPE = 2, Lb.VELOCITY_TEXTURE_TYPE = 3, Lb.REFLECTIVITY_TEXTURE_TYPE = 4, Lb.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Lb.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Lb.IRRADIANCE_TEXTURE_TYPE = 7, Lb.OBJECT_ID_TEXTURE_TYPE = 8, Lb.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Lb._SceneComponentInitialization = yb => {
      throw (0, lb.g)("GeometryBufferRendererSceneComponent")
    };
    var Qb = Wy(35909);
    const jW = {
      effect: null,
      subMesh: null
    };

    function Db(yb) {
      if ("number" === typeof yb) return 1;
      if (yb instanceof Fy.m) return 2;
      if (yb instanceof Fy.n || yb instanceof wy.d) return 3;
      if (yb instanceof Fy.p || yb instanceof wy.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class tW {
      populateVectorFromLinkedProperties(yb) {
        const bb = Db(yb);
        for (const Wy in this.linkedProperties) {
          const yb = this.linkedProperties[Wy],
            Uy = yb.numComponents;
          if (bb < Uy || yb.targetUniformComponentOffset > bb - Uy) return void(1 == Uy ? vb.b.Error(`Float property ${yb.name} has an offset that is too large.`) : vb.b.Error(`Vector${Uy} property ${yb.name} won't fit in Vector${bb} or has an offset that is too large.`));
          "number" === typeof yb.value ? tW._tmpArray[yb.targetUniformComponentOffset] = yb.value : yb.value.toArray(tW._tmpArray, yb.targetUniformComponentOffset)
        }
        yb.FPy(tW._tmpArray)
      }
      constructor(yb, bb) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = yb, this.numComponents = bb
      }
    }
    tW._tmpArray = [0, 0, 0, 0];
    class wb {
      constructor(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = yb, this.targetUniformName = Wy, this.defaultValue = bb, this.value = bb, this.targetUniformComponentNum = Uy, this.targetUniformComponentOffset = hy, this.requiredDefine = fy
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Db(this.defaultValue)
      }
    }
    class kW {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(yb, bb, Wy) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = yb, this.samplerPrefix = bb, this.textureDefine = Wy
      }
    }
    class Nb extends((0, Sb.b)((0, sb.b)(Ly.d))) {}
    class zW extends(function(yb) {
      return class extends yb {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Nb)) {}
    class Ib extends((0, kb.g)(zW)) {
      constructor(yb) {
        super(yb), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class xW extends((0, Eb.e)(zb.d)) {}
    let Ab = (() => {
        var yb, bb, Uy, hy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Yy, Xy, ny, uy, ab, Ly, Qy, jb, Dy, kb, zb, dy, yW, bW, Wb, Ub, hb, fb, Zb, cW, Pb, ob, sb, Sb, Eb, lb, mW, Cb, Tb, Vb, Jb, Ob, Rb, vW, iW, Mb, Yb, Xb, nb, ub, rW, Hb, aW, Fb, pb, Qb, Db, Nb, zW, Ab, db, yU, bU, WW, UW, hW, fW, ZW, cU, PW, oW, BW, KW, eW, qU, sW, SW, EW, lW, mU, CW, TW, VW, JW, gU, GW, OW, RW, vU, iU;
        let MW, YW, XW, nW, uW, rU, HW, aU, FW, pW, LW, QW, jU, DW, tU, wW, kU, NW, zU, IW, xU, AW, dW, yh, bh, WU, UU, hU, fU, ZU, ch, PU, oU, BU, KU, eU, qh, sU, SU, EU, lU, mh, CU, TU, VU, JU, gh, GU, OU, RU, vh, ih, MU, YU, XU, nU, uU, rh, HU, ah, FU, pU, LU, QU, jh, DU, th, wU, kh, NU, zh, IU, xh, AU, dU, yf, bf, Wh, Uh, hh, fh, Zh, cf, Ph, oh, Bh, Kh, eh, qf, sh, Sh, Eh, lh, mf, Ch, Th, Vh, Jh, gf, Gh, Oh, Rh, vf, Mh, Yh, Xh = xW,
          nh = [],
          uh = [],
          rf = [],
          Hh = [],
          af = [],
          Fh = [],
          ph = [],
          Lh = [],
          Qh = [],
          jf = [],
          Dh = [],
          tf = [],
          wh = [],
          kf = [],
          Nh = [],
          zf = [],
          Ih = [],
          xf = [],
          Ah = [],
          dh = [],
          yZ = [],
          bZ = [],
          Wf = [],
          Uf = [],
          hf = [],
          ff = [],
          Zf = [],
          cZ = [],
          Pf = [],
          of = [],
          Bf = [],
          Kf = [],
          ef = [],
          qZ = [],
          sf = [],
          Sf = [],
          Ef = [],
          lf = [],
          mZ = [],
          Cf = [],
          Tf = [],
          Vf = [],
          Jf = [],
          gZ = [],
          Gf = [],
          Of = [],
          Rf = [],
          vZ = [],
          iZ = [],
          Mf = [],
          Yf = [],
          Xf = [],
          nf = [],
          uf = [],
          rZ = [],
          Hf = [],
          aZ = [],
          Ff = [],
          pf = [],
          Lf = [],
          Qf = [],
          jZ = [],
          Df = [],
          tZ = [],
          wf = [],
          kZ = [],
          Nf = [],
          zZ = [],
          If = [],
          xZ = [],
          Af = [],
          df = [],
          yc = [],
          bc = [],
          WZ = [],
          UZ = [],
          hZ = [],
          fZ = [],
          ZZ = [],
          cc = [],
          PZ = [],
          oZ = [],
          BZ = [],
          KZ = [],
          eZ = [],
          qc = [],
          sZ = [],
          SZ = [],
          EZ = [],
          lZ = [],
          mc = [],
          CZ = [],
          TZ = [],
          VZ = [],
          JZ = [],
          gc = [],
          GZ = [],
          OZ = [],
          RZ = [],
          vc = [],
          ic = [],
          MZ = [],
          YZ = [],
          XZ = [],
          nZ = [],
          uZ = [],
          rc = [],
          HZ = [],
          ac = [],
          FZ = [],
          pZ = [],
          LZ = [],
          QZ = [],
          jc = [],
          DZ = [],
          tc = [],
          wZ = [],
          kc = [],
          NZ = [],
          zc = [],
          IZ = [],
          xc = [],
          AZ = [],
          dZ = [],
          yP = [],
          bP = [],
          Wc = [],
          Uc = [],
          hc = [],
          fc = [],
          Zc = [],
          cP = [],
          Pc = [],
          oc = [],
          Bc = [],
          Kc = [],
          ec = [],
          qP = [],
          sc = [],
          Sc = [],
          Ec = [],
          lc = [],
          mP = [],
          Cc = [],
          Tc = [],
          Vc = [],
          Jc = [],
          gP = [],
          Gc = [],
          Oc = [],
          Rc = [],
          vP = [],
          iP = [],
          Mc = [],
          Yc = [],
          Xc = [],
          nc = [],
          uc = [],
          rP = [],
          Hc = [],
          aP = [],
          Fc = [],
          pc = [],
          Lc = [],
          Qc = [],
          jP = [],
          Dc = [],
          tP = [],
          wc = [],
          kP = [],
          Nc = [],
          zP = [],
          Ic = [],
          xP = [],
          Ac = [],
          dc = [],
          yo = [],
          bo = [],
          WP = [],
          UP = [],
          hP = [],
          fP = [],
          ZP = [],
          co = [],
          PP = [],
          oP = [],
          BP = [],
          KP = [],
          eP = [],
          qo = [],
          sP = [],
          SP = [],
          EP = [],
          lP = [],
          mo = [],
          CP = [],
          TP = [],
          VP = [],
          JP = [],
          go = [],
          GP = [],
          OP = [],
          RP = [],
          vo = [],
          io = [];
        return yb = class extends Xh {
          get baseWeight() {
            return (0, Oy.e)(this, bb, "f")
          }
          set baseWeight(yb) {
            (0, Oy.f)(this, bb, yb, "f")
          }
          get baseWeightTexture() {
            return (0, Oy.e)(this, Uy, "f")
          }
          set baseWeightTexture(yb) {
            (0, Oy.f)(this, Uy, yb, "f")
          }
          get baseColor() {
            return (0, Oy.e)(this, hy, "f")
          }
          set baseColor(yb) {
            (0, Oy.f)(this, hy, yb, "f")
          }
          get baseColorTexture() {
            return (0, Oy.e)(this, Zy, "f")
          }
          set baseColorTexture(yb) {
            (0, Oy.f)(this, Zy, yb, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Oy.e)(this, cb, "f")
          }
          set baseDiffuseRoughness(yb) {
            (0, Oy.f)(this, cb, yb, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Oy.e)(this, Py, "f")
          }
          set baseDiffuseRoughnessTexture(yb) {
            (0, Oy.f)(this, Py, yb, "f")
          }
          get baseMetalness() {
            return (0, Oy.e)(this, oy, "f")
          }
          set baseMetalness(yb) {
            (0, Oy.f)(this, oy, yb, "f")
          }
          get baseMetalnessTexture() {
            return (0, Oy.e)(this, By, "f")
          }
          set baseMetalnessTexture(yb) {
            (0, Oy.f)(this, By, yb, "f")
          }
          get specularWeight() {
            return (0, Oy.e)(this, Ky, "f")
          }
          set specularWeight(yb) {
            (0, Oy.f)(this, Ky, yb, "f")
          }
          get specularWeightTexture() {
            return (0, Oy.e)(this, ey, "f")
          }
          set specularWeightTexture(yb) {
            (0, Oy.f)(this, ey, yb, "f")
          }
          get specularColor() {
            return (0, Oy.e)(this, qb, "f")
          }
          set specularColor(yb) {
            (0, Oy.f)(this, qb, yb, "f")
          }
          get specularColorTexture() {
            return (0, Oy.e)(this, sy, "f")
          }
          set specularColorTexture(yb) {
            (0, Oy.f)(this, sy, yb, "f")
          }
          get specularRoughness() {
            return (0, Oy.e)(this, Sy, "f")
          }
          set specularRoughness(yb) {
            (0, Oy.f)(this, Sy, yb, "f")
          }
          get specularRoughnessTexture() {
            return (0, Oy.e)(this, Ey, "f")
          }
          set specularRoughnessTexture(yb) {
            (0, Oy.f)(this, Ey, yb, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Oy.e)(this, ly, "f")
          }
          set specularRoughnessAnisotropy(yb) {
            (0, Oy.f)(this, ly, yb, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Oy.e)(this, mb, "f")
          }
          set specularRoughnessAnisotropyTexture(yb) {
            (0, Oy.f)(this, mb, yb, "f")
          }
          get specularIor() {
            return (0, Oy.e)(this, Cy, "f")
          }
          set specularIor(yb) {
            (0, Oy.f)(this, Cy, yb, "f")
          }
          get transmissionWeight() {
            return (0, Oy.e)(this, Ty, "f")
          }
          set transmissionWeight(yb) {
            (0, Oy.f)(this, Ty, yb, "f")
          }
          get transmissionWeightTexture() {
            return (0, Oy.e)(this, Vy, "f")
          }
          set transmissionWeightTexture(yb) {
            (0, Oy.f)(this, Vy, yb, "f")
          }
          get transmissionColor() {
            return (0, Oy.e)(this, Jy, "f")
          }
          set transmissionColor(yb) {
            (0, Oy.f)(this, Jy, yb, "f")
          }
          get transmissionColorTexture() {
            return (0, Oy.e)(this, gb, "f")
          }
          set transmissionColorTexture(yb) {
            (0, Oy.f)(this, gb, yb, "f")
          }
          get transmissionDepth() {
            return (0, Oy.e)(this, Gy, "f")
          }
          set transmissionDepth(yb) {
            (0, Oy.f)(this, Gy, yb, "f")
          }
          get transmissionDepthTexture() {
            return (0, Oy.e)(this, Yy, "f")
          }
          set transmissionDepthTexture(yb) {
            (0, Oy.f)(this, Yy, yb, "f")
          }
          get transmissionScatter() {
            return (0, Oy.e)(this, Xy, "f")
          }
          set transmissionScatter(yb) {
            (0, Oy.f)(this, Xy, yb, "f")
          }
          get transmissionScatterTexture() {
            return (0, Oy.e)(this, ny, "f")
          }
          set transmissionScatterTexture(yb) {
            (0, Oy.f)(this, ny, yb, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Oy.e)(this, uy, "f")
          }
          set transmissionScatterAnisotropy(yb) {
            (0, Oy.f)(this, uy, yb, "f")
          }
          get transmissionDispersionScale() {
            return (0, Oy.e)(this, ab, "f")
          }
          set transmissionDispersionScale(yb) {
            (0, Oy.f)(this, ab, yb, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Oy.e)(this, Ly, "f")
          }
          set transmissionDispersionScaleTexture(yb) {
            (0, Oy.f)(this, Ly, yb, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Oy.e)(this, Qy, "f")
          }
          set transmissionDispersionAbbeNumber(yb) {
            (0, Oy.f)(this, Qy, yb, "f")
          }
          get subsurfaceWeight() {
            return (0, Oy.e)(this, jb, "f")
          }
          set subsurfaceWeight(yb) {
            (0, Oy.f)(this, jb, yb, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Oy.e)(this, Dy, "f")
          }
          set subsurfaceWeightTexture(yb) {
            (0, Oy.f)(this, Dy, yb, "f")
          }
          get subsurfaceColor() {
            return (0, Oy.e)(this, kb, "f")
          }
          set subsurfaceColor(yb) {
            (0, Oy.f)(this, kb, yb, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Oy.e)(this, zb, "f")
          }
          set subsurfaceColorTexture(yb) {
            (0, Oy.f)(this, zb, yb, "f")
          }
          get subsurfaceRadius() {
            return (0, Oy.e)(this, dy, "f")
          }
          set subsurfaceRadius(yb) {
            (0, Oy.f)(this, dy, yb, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Oy.e)(this, yW, "f")
          }
          set subsurfaceRadiusScale(yb) {
            (0, Oy.f)(this, yW, yb, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Oy.e)(this, bW, "f")
          }
          set subsurfaceRadiusScaleTexture(yb) {
            (0, Oy.f)(this, bW, yb, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Oy.e)(this, Wb, "f")
          }
          set subsurfaceScatterAnisotropy(yb) {
            (0, Oy.f)(this, Wb, yb, "f")
          }
          get coatWeight() {
            return (0, Oy.e)(this, Ub, "f")
          }
          set coatWeight(yb) {
            (0, Oy.f)(this, Ub, yb, "f")
          }
          get coatWeightTexture() {
            return (0, Oy.e)(this, hb, "f")
          }
          set coatWeightTexture(yb) {
            (0, Oy.f)(this, hb, yb, "f")
          }
          get coatColor() {
            return (0, Oy.e)(this, fb, "f")
          }
          set coatColor(yb) {
            (0, Oy.f)(this, fb, yb, "f")
          }
          get coatColorTexture() {
            return (0, Oy.e)(this, Zb, "f")
          }
          set coatColorTexture(yb) {
            (0, Oy.f)(this, Zb, yb, "f")
          }
          get coatRoughness() {
            return (0, Oy.e)(this, cW, "f")
          }
          set coatRoughness(yb) {
            (0, Oy.f)(this, cW, yb, "f")
          }
          get coatRoughnessTexture() {
            return (0, Oy.e)(this, Pb, "f")
          }
          set coatRoughnessTexture(yb) {
            (0, Oy.f)(this, Pb, yb, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Oy.e)(this, ob, "f")
          }
          set coatRoughnessAnisotropy(yb) {
            (0, Oy.f)(this, ob, yb, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Oy.e)(this, sb, "f")
          }
          set coatRoughnessAnisotropyTexture(yb) {
            (0, Oy.f)(this, sb, yb, "f")
          }
          get coatIor() {
            return (0, Oy.e)(this, Sb, "f")
          }
          set coatIor(yb) {
            (0, Oy.f)(this, Sb, yb, "f")
          }
          get coatDarkening() {
            return (0, Oy.e)(this, Eb, "f")
          }
          set coatDarkening(yb) {
            (0, Oy.f)(this, Eb, yb, "f")
          }
          get coatDarkeningTexture() {
            return (0, Oy.e)(this, lb, "f")
          }
          set coatDarkeningTexture(yb) {
            (0, Oy.f)(this, lb, yb, "f")
          }
          get fuzzWeight() {
            return (0, Oy.e)(this, mW, "f")
          }
          set fuzzWeight(yb) {
            (0, Oy.f)(this, mW, yb, "f")
          }
          get fuzzWeightTexture() {
            return (0, Oy.e)(this, Cb, "f")
          }
          set fuzzWeightTexture(yb) {
            (0, Oy.f)(this, Cb, yb, "f")
          }
          get fuzzColor() {
            return (0, Oy.e)(this, Tb, "f")
          }
          set fuzzColor(yb) {
            (0, Oy.f)(this, Tb, yb, "f")
          }
          get fuzzColorTexture() {
            return (0, Oy.e)(this, Vb, "f")
          }
          set fuzzColorTexture(yb) {
            (0, Oy.f)(this, Vb, yb, "f")
          }
          get fuzzRoughness() {
            return (0, Oy.e)(this, Jb, "f")
          }
          set fuzzRoughness(yb) {
            (0, Oy.f)(this, Jb, yb, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Oy.e)(this, Ob, "f")
          }
          set fuzzRoughnessTexture(yb) {
            (0, Oy.f)(this, Ob, yb, "f")
          }
          get geometryThinWalled() {
            return (0, Oy.e)(this, Rb, "f")
          }
          set geometryThinWalled(yb) {
            (0, Oy.f)(this, Rb, yb, "f")
          }
          get geometryNormalTexture() {
            return (0, Oy.e)(this, vW, "f")
          }
          set geometryNormalTexture(yb) {
            (0, Oy.f)(this, vW, yb, "f")
          }
          get geometryTangent() {
            return (0, Oy.e)(this, iW, "f")
          }
          set geometryTangent(yb) {
            (0, Oy.f)(this, iW, yb, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(yb) {
            this.geometryTangent = new Fy.m(Math.cos(yb), Math.sin(yb))
          }
          get geometryTangentTexture() {
            return (0, Oy.e)(this, Mb, "f")
          }
          set geometryTangentTexture(yb) {
            (0, Oy.f)(this, Mb, yb, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Oy.e)(this, Yb, "f")
          }
          set geometryCoatNormalTexture(yb) {
            (0, Oy.f)(this, Yb, yb, "f")
          }
          get geometryCoatTangent() {
            return (0, Oy.e)(this, Xb, "f")
          }
          set geometryCoatTangent(yb) {
            (0, Oy.f)(this, Xb, yb, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(yb) {
            this.geometryCoatTangent = new Fy.m(Math.cos(yb), Math.sin(yb))
          }
          get geometryCoatTangentTexture() {
            return (0, Oy.e)(this, nb, "f")
          }
          set geometryCoatTangentTexture(yb) {
            (0, Oy.f)(this, nb, yb, "f")
          }
          get geometryOpacity() {
            return (0, Oy.e)(this, ub, "f")
          }
          set geometryOpacity(yb) {
            (0, Oy.f)(this, ub, yb, "f")
          }
          get geometryOpacityTexture() {
            return (0, Oy.e)(this, rW, "f")
          }
          set geometryOpacityTexture(yb) {
            (0, Oy.f)(this, rW, yb, "f")
          }
          get geometryThickness() {
            return (0, Oy.e)(this, Hb, "f")
          }
          set geometryThickness(yb) {
            (0, Oy.f)(this, Hb, yb, "f")
          }
          get geometryThicknessTexture() {
            return (0, Oy.e)(this, aW, "f")
          }
          set geometryThicknessTexture(yb) {
            (0, Oy.f)(this, aW, yb, "f")
          }
          get emissionLuminance() {
            return (0, Oy.e)(this, Fb, "f")
          }
          set emissionLuminance(yb) {
            (0, Oy.f)(this, Fb, yb, "f")
          }
          get emissionColor() {
            return (0, Oy.e)(this, pb, "f")
          }
          set emissionColor(yb) {
            (0, Oy.f)(this, pb, yb, "f")
          }
          get emissionColorTexture() {
            return (0, Oy.e)(this, Qb, "f")
          }
          set emissionColorTexture(yb) {
            (0, Oy.f)(this, Qb, yb, "f")
          }
          get thinFilmWeight() {
            return (0, Oy.e)(this, Db, "f")
          }
          set thinFilmWeight(yb) {
            (0, Oy.f)(this, Db, yb, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Oy.e)(this, Nb, "f")
          }
          set thinFilmWeightTexture(yb) {
            (0, Oy.f)(this, Nb, yb, "f")
          }
          get thinFilmThickness() {
            return (0, Oy.e)(this, zW, "f")
          }
          set thinFilmThickness(yb) {
            (0, Oy.f)(this, zW, yb, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Oy.e)(this, Ab, "f")
          }
          set thinFilmThicknessMin(yb) {
            (0, Oy.f)(this, Ab, yb, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Oy.e)(this, db, "f")
          }
          set thinFilmThicknessTexture(yb) {
            (0, Oy.f)(this, db, yb, "f")
          }
          get thinFilmIor() {
            return (0, Oy.e)(this, yU, "f")
          }
          set thinFilmIor(yb) {
            (0, Oy.f)(this, yU, yb, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Oy.e)(this, bU, "f")
          }
          set ambientOcclusionTexture(yb) {
            (0, Oy.f)(this, bU, yb, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(yb) {
            this._sssQuality !== yb && (this._sssQuality = yb, this.goy(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(yb) {
            this._sssIrradianceTexture !== yb && (this._sssIrradianceTexture = yb, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(yb) {
            this._sssDepthTexture !== yb && (this._sssDepthTexture = yb, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Oy.e)(this, WW, "f")
          }
          set directIntensity(yb) {
            (0, Oy.f)(this, WW, yb, "f")
          }
          get environmentIntensity() {
            return (0, Oy.e)(this, UW, "f")
          }
          set environmentIntensity(yb) {
            (0, Oy.f)(this, UW, yb, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Oy.e)(this, hW, "f")
          }
          set useSpecularWeightFromTextureAlpha(yb) {
            (0, Oy.f)(this, hW, yb, "f")
          }
          get forceAlphaTest() {
            return (0, Oy.e)(this, fW, "f")
          }
          set forceAlphaTest(yb) {
            (0, Oy.f)(this, fW, yb, "f")
          }
          get alphaCutOff() {
            return (0, Oy.e)(this, ZW, "f")
          }
          set alphaCutOff(yb) {
            (0, Oy.f)(this, ZW, yb, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Oy.e)(this, cU, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(yb) {
            (0, Oy.f)(this, cU, yb, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Oy.e)(this, PW, "f")
          }
          set useAmbientInGrayScale(yb) {
            (0, Oy.f)(this, PW, yb, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(wy.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === fy.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(yb) {
            yb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = yb ? fy.e.LIGHTFALLOFF_PHYSICAL : fy.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === fy.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(yb) {
            yb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = yb ? fy.e.LIGHTFALLOFF_GLTF : fy.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Oy.e)(this, oW, "f")
          }
          set useObjectSpaceNormalMap(yb) {
            (0, Oy.f)(this, oW, yb, "f")
          }
          get useParallax() {
            return (0, Oy.e)(this, BW, "f")
          }
          set useParallax(yb) {
            (0, Oy.f)(this, BW, yb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Oy.e)(this, KW, "f")
          }
          set useParallaxOcclusion(yb) {
            (0, Oy.f)(this, KW, yb, "f")
          }
          get parallaxScaleBias() {
            return (0, Oy.e)(this, eW, "f")
          }
          set parallaxScaleBias(yb) {
            (0, Oy.f)(this, eW, yb, "f")
          }
          get disableLighting() {
            return (0, Oy.e)(this, qU, "f")
          }
          set disableLighting(yb) {
            (0, Oy.f)(this, qU, yb, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Oy.e)(this, sW, "f")
          }
          set forceIrradianceInFragment(yb) {
            (0, Oy.f)(this, sW, yb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Oy.e)(this, SW, "f")
          }
          set maxSimultaneousLights(yb) {
            (0, Oy.f)(this, SW, yb, "f")
          }
          get invertNormalMapX() {
            return (0, Oy.e)(this, EW, "f")
          }
          set invertNormalMapX(yb) {
            (0, Oy.f)(this, EW, yb, "f")
          }
          get invertNormalMapY() {
            return (0, Oy.e)(this, lW, "f")
          }
          set invertNormalMapY(yb) {
            (0, Oy.f)(this, lW, yb, "f")
          }
          get twoSidedLighting() {
            return (0, Oy.e)(this, mU, "f")
          }
          set twoSidedLighting(yb) {
            (0, Oy.f)(this, mU, yb, "f")
          }
          get useAlphaFresnel() {
            return (0, Oy.e)(this, CW, "f")
          }
          set useAlphaFresnel(yb) {
            (0, Oy.f)(this, CW, yb, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Oy.e)(this, TW, "f")
          }
          set useLinearAlphaFresnel(yb) {
            (0, Oy.f)(this, TW, yb, "f")
          }
          get environmentBRDFTexture() {
            return (0, Oy.e)(this, VW, "f")
          }
          set environmentBRDFTexture(yb) {
            (0, Oy.f)(this, VW, yb, "f")
          }
          get forceNormalForward() {
            return (0, Oy.e)(this, JW, "f")
          }
          set forceNormalForward(yb) {
            (0, Oy.f)(this, JW, yb, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Oy.e)(this, gU, "f")
          }
          set enableSpecularAntiAliasing(yb) {
            (0, Oy.f)(this, gU, yb, "f")
          }
          get useHorizonOcclusion() {
            return (0, Oy.e)(this, GW, "f")
          }
          set useHorizonOcclusion(yb) {
            (0, Oy.f)(this, GW, yb, "f")
          }
          get useRadianceOcclusion() {
            return (0, Oy.e)(this, OW, "f")
          }
          set useRadianceOcclusion(yb) {
            (0, Oy.f)(this, OW, yb, "f")
          }
          get unlit() {
            return (0, Oy.e)(this, RW, "f")
          }
          set unlit(yb) {
            (0, Oy.f)(this, RW, yb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Oy.e)(this, vU, "f")
          }
          set applyDecalMapAfterDetailMap(yb) {
            (0, Oy.f)(this, vU, yb, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(yb) {
            this._backgroundRefractionTexture = yb, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(yb) {
            this._refractionHighQualityBlur !== yb && (this._refractionHighQualityBlur = yb, this.goy(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(yb) {
            this._realTimeFiltering = yb, this.goy(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(yb) {
            this._realTimeFilteringQuality = yb, this.goy(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(yb) {
            this._fuzzSampleNumber = yb, this.goy(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Oy.e)(this, iU, "f")
          }
          set debugMode(yb) {
            (0, Oy.f)(this, iU, yb, "f")
          }
          constructor(Wy, Ry) {
            super(Wy, Ry, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || yb.ForceGLSL), bb.set(this, ((0, Oy.l)(this, nh), (0, Oy.l)(this, uh, void 0))), this._baseWeight = ((0, Oy.l)(this, rf), new wb("base_weight", 1, "vBaseWeight", 1)), Uy.set(this, (0, Oy.l)(this, Hh, void 0)), this._baseWeightTexture = ((0, Oy.l)(this, af), new kW("base_weight", "baseWeight", "BASE_WEIGHT")), hy.set(this, (0, Oy.l)(this, Fh, void 0)), this._baseColor = ((0, Oy.l)(this, ph), new wb("base_color", wy.d.White(), "vBaseColor", 4)), Zy.set(this, (0, Oy.l)(this, Lh, void 0)), this._baseColorTexture = ((0, Oy.l)(this, Qh), new kW("base_color", "baseColor", "BASE_COLOR")), cb.set(this, (0, Oy.l)(this, jf, void 0)), this._baseDiffuseRoughness = ((0, Oy.l)(this, Dh), new wb("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Py.set(this, (0, Oy.l)(this, tf, void 0)), this._baseDiffuseRoughnessTexture = ((0, Oy.l)(this, wh), new kW("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), oy.set(this, (0, Oy.l)(this, kf, void 0)), this._baseMetalness = ((0, Oy.l)(this, Nh), new wb("base_metalness", 0, "vReflectanceInfo", 4, 0)), By.set(this, (0, Oy.l)(this, zf, void 0)), this._baseMetalnessTexture = ((0, Oy.l)(this, Ih), new kW("base_metalness", "baseMetalness", "BASE_METALNESS")), Ky.set(this, (0, Oy.l)(this, xf, void 0)), this._specularWeight = ((0, Oy.l)(this, Ah), new wb("specular_weight", 1, "vReflectanceInfo", 4, 3)), ey.set(this, (0, Oy.l)(this, dh, void 0)), this._specularWeightTexture = ((0, Oy.l)(this, yZ), new kW("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), qb.set(this, (0, Oy.l)(this, bZ, void 0)), this._specularColor = ((0, Oy.l)(this, Wf), new wb("specular_color", wy.d.White(), "vSpecularColor", 4)), sy.set(this, (0, Oy.l)(this, Uf, void 0)), this._specularColorTexture = ((0, Oy.l)(this, hf), new kW("specular_color", "specularColor", "SPECULAR_COLOR")), Sy.set(this, (0, Oy.l)(this, ff, void 0)), this._specularRoughness = ((0, Oy.l)(this, Zf), new wb("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Ey.set(this, (0, Oy.l)(this, cZ, void 0)), this._specularRoughnessTexture = ((0, Oy.l)(this, Pf), new kW("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), ly.set(this, (0, Oy.l)(this, of, void 0)), this._specularRoughnessAnisotropy = ((0, Oy.l)(this, Bf), new wb("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), mb.set(this, (0, Oy.l)(this, Kf, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Oy.l)(this, ef), new kW("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Cy.set(this, (0, Oy.l)(this, qZ, void 0)), this._specularIor = ((0, Oy.l)(this, sf), new wb("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Ty.set(this, (0, Oy.l)(this, Sf, void 0)), this._transmissionWeight = ((0, Oy.l)(this, Ef), new wb("transmission_weight", 0, "vTransmissionWeight", 1)), Vy.set(this, (0, Oy.l)(this, lf, void 0)), this._transmissionWeightTexture = ((0, Oy.l)(this, mZ), new kW("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Jy.set(this, (0, Oy.l)(this, Cf, void 0)), this._transmissionColor = ((0, Oy.l)(this, Tf), new wb("transmission_color", wy.d.White(), "vTransmissionColor", 3, 0)), gb.set(this, (0, Oy.l)(this, Vf, void 0)), this._transmissionColorTexture = ((0, Oy.l)(this, Jf), new kW("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Gy.set(this, (0, Oy.l)(this, gZ, void 0)), this._transmissionDepth = ((0, Oy.l)(this, Gf), new wb("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Yy.set(this, (0, Oy.l)(this, Of, void 0)), this._transmissionDepthTexture = ((0, Oy.l)(this, Rf), new kW("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Xy.set(this, (0, Oy.l)(this, vZ, void 0)), this._transmissionScatter = ((0, Oy.l)(this, iZ), new wb("transmission_scatter", wy.d.Black(), "vTransmissionScatter", 3, 0)), ny.set(this, (0, Oy.l)(this, Mf, void 0)), this._transmissionScatterTexture = ((0, Oy.l)(this, Yf), new kW("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), uy.set(this, (0, Oy.l)(this, Xf, void 0)), this._transmissionScatterAnisotropy = ((0, Oy.l)(this, nf), new wb("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), ab.set(this, (0, Oy.l)(this, uf, void 0)), this._transmissionDispersionScale = ((0, Oy.l)(this, rZ), new wb("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Ly.set(this, (0, Oy.l)(this, Hf, void 0)), this._transmissionDispersionScaleTexture = ((0, Oy.l)(this, aZ), new kW("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Qy.set(this, (0, Oy.l)(this, Ff, void 0)), this._transmissionDispersionAbbeNumber = ((0, Oy.l)(this, pf), new wb("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), jb.set(this, (0, Oy.l)(this, Lf, void 0)), this._subsurfaceWeight = ((0, Oy.l)(this, Qf), new wb("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Dy.set(this, (0, Oy.l)(this, jZ, void 0)), this._subsurfaceWeightTexture = ((0, Oy.l)(this, Df), new kW("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), kb.set(this, (0, Oy.l)(this, tZ, void 0)), this._subsurfaceColor = ((0, Oy.l)(this, wf), new wb("subsurface_color", new wy.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), zb.set(this, (0, Oy.l)(this, kZ, void 0)), this._subsurfaceColorTexture = ((0, Oy.l)(this, Nf), new kW("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), dy.set(this, (0, Oy.l)(this, zZ, void 0)), this._subsurfaceRadius = ((0, Oy.l)(this, If), new wb("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), yW.set(this, (0, Oy.l)(this, xZ, void 0)), this._subsurfaceRadiusScale = ((0, Oy.l)(this, Af), new wb("subsurface_radius_scale", new wy.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), bW.set(this, (0, Oy.l)(this, df, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Oy.l)(this, yc), new kW("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Wb.set(this, (0, Oy.l)(this, bc, void 0)), this._subsurfaceScatterAnisotropy = ((0, Oy.l)(this, WZ), new wb("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Ub.set(this, (0, Oy.l)(this, UZ, void 0)), this._coatWeight = ((0, Oy.l)(this, hZ), new wb("coat_weight", 0, "vCoatWeight", 1, 0)), hb.set(this, (0, Oy.l)(this, fZ, void 0)), this._coatWeightTexture = ((0, Oy.l)(this, ZZ), new kW("coat_weight", "coatWeight", "COAT_WEIGHT")), fb.set(this, (0, Oy.l)(this, cc, void 0)), this._coatColor = ((0, Oy.l)(this, PZ), new wb("coat_color", wy.d.White(), "vCoatColor", 3, 0)), Zb.set(this, (0, Oy.l)(this, oZ, void 0)), this._coatColorTexture = ((0, Oy.l)(this, BZ), new kW("coat_color", "coatColor", "COAT_COLOR")), cW.set(this, (0, Oy.l)(this, KZ, void 0)), this._coatRoughness = ((0, Oy.l)(this, eZ), new wb("coat_roughness", 0, "vCoatRoughness", 1, 0)), Pb.set(this, (0, Oy.l)(this, qc, void 0)), this._coatRoughnessTexture = ((0, Oy.l)(this, sZ), new kW("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), ob.set(this, (0, Oy.l)(this, SZ, void 0)), this._coatRoughnessAnisotropy = ((0, Oy.l)(this, EZ), new wb("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), sb.set(this, (0, Oy.l)(this, lZ, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Oy.l)(this, mc), new kW("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Sb.set(this, (0, Oy.l)(this, CZ, void 0)), this._coatIor = ((0, Oy.l)(this, TZ), new wb("coat_ior", 1.5, "vCoatIor", 1, 0)), Eb.set(this, (0, Oy.l)(this, VZ, void 0)), this._coatDarkening = ((0, Oy.l)(this, JZ), new wb("coat_darkening", 1, "vCoatDarkening", 1, 0)), lb.set(this, (0, Oy.l)(this, gc, void 0)), this._coatDarkeningTexture = ((0, Oy.l)(this, GZ), new kW("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, mW.set(this, (0, Oy.l)(this, OZ, void 0)), this._fuzzWeight = ((0, Oy.l)(this, RZ), new wb("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Cb.set(this, (0, Oy.l)(this, vc, void 0)), this._fuzzWeightTexture = ((0, Oy.l)(this, ic), new kW("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Tb.set(this, (0, Oy.l)(this, MZ, void 0)), this._fuzzColor = ((0, Oy.l)(this, YZ), new wb("fuzz_color", wy.d.White(), "vFuzzColor", 3, 0)), Vb.set(this, (0, Oy.l)(this, XZ, void 0)), this._fuzzColorTexture = ((0, Oy.l)(this, nZ), new kW("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Jb.set(this, (0, Oy.l)(this, uZ, void 0)), this._fuzzRoughness = ((0, Oy.l)(this, rc), new wb("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Ob.set(this, (0, Oy.l)(this, HZ, void 0)), this._fuzzRoughnessTexture = ((0, Oy.l)(this, ac), new kW("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Rb.set(this, (0, Oy.l)(this, FZ, void 0)), this._geometryThinWalled = ((0, Oy.l)(this, pZ), new wb("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), vW.set(this, (0, Oy.l)(this, LZ, void 0)), this._geometryNormalTexture = ((0, Oy.l)(this, QZ), new kW("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), iW.set(this, (0, Oy.l)(this, jc, void 0)), this._geometryTangent = ((0, Oy.l)(this, DZ), new wb("geometry_tangent", new Fy.m(1, 0), "vSpecularAnisotropy", 3, 0)), Mb.set(this, (0, Oy.l)(this, tc, void 0)), this._geometryTangentTexture = ((0, Oy.l)(this, wZ), new kW("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Yb.set(this, (0, Oy.l)(this, kc, void 0)), this._geometryCoatNormalTexture = ((0, Oy.l)(this, NZ), new kW("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Xb.set(this, (0, Oy.l)(this, zc, void 0)), this._geometryCoatTangent = ((0, Oy.l)(this, IZ), new wb("geometry_coat_tangent", new Fy.m(1, 0), "vGeometryCoatTangent", 2, 0)), nb.set(this, (0, Oy.l)(this, xc, void 0)), this._geometryCoatTangentTexture = ((0, Oy.l)(this, AZ), new kW("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), ub.set(this, (0, Oy.l)(this, dZ, void 0)), this._geometryOpacity = ((0, Oy.l)(this, yP), new wb("geometry_opacity", 1, "vBaseColor", 4, 3)), rW.set(this, (0, Oy.l)(this, bP, void 0)), this._geometryOpacityTexture = ((0, Oy.l)(this, Wc), new kW("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Hb.set(this, (0, Oy.l)(this, Uc, void 0)), this._geometryThickness = ((0, Oy.l)(this, hc), new wb("geometry_thickness", 0, "vGeometryThickness", 1, 0)), aW.set(this, (0, Oy.l)(this, fc, void 0)), this._geometryThicknessTexture = ((0, Oy.l)(this, Zc), new kW("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Fb.set(this, (0, Oy.l)(this, cP, void 0)), this._emissionLuminance = ((0, Oy.l)(this, Pc), new wb("emission_luminance", 1, "vLightingIntensity", 4, 1)), pb.set(this, (0, Oy.l)(this, oc, void 0)), this._emissionColor = ((0, Oy.l)(this, Bc), new wb("emission_color", wy.d.Black(), "vEmissionColor", 3)), Qb.set(this, (0, Oy.l)(this, Kc, void 0)), this._emissionColorTexture = ((0, Oy.l)(this, ec), new kW("emission_color", "emissionColor", "EMISSION_COLOR")), Db.set(this, (0, Oy.l)(this, qP, void 0)), this._thinFilmWeight = ((0, Oy.l)(this, sc), new wb("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Nb.set(this, (0, Oy.l)(this, Sc, void 0)), this._thinFilmWeightTexture = ((0, Oy.l)(this, Ec), new kW("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), zW.set(this, (0, Oy.l)(this, lc, void 0)), this._thinFilmThickness = ((0, Oy.l)(this, mP), new wb("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Ab.set(this, (0, Oy.l)(this, Cc, void 0)), this._thinFilmThicknessMin = ((0, Oy.l)(this, Tc), new wb("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), db.set(this, (0, Oy.l)(this, Vc, void 0)), this._thinFilmThicknessTexture = ((0, Oy.l)(this, Jc), new kW("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), yU.set(this, (0, Oy.l)(this, gP, void 0)), this._thinFilmIor = ((0, Oy.l)(this, Gc), new wb("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), bU.set(this, (0, Oy.l)(this, Oc, void 0)), this._ambientOcclusionTexture = ((0, Oy.l)(this, Rc), new kW("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = yb.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, WW.set(this, (0, Oy.l)(this, vP, 1)), UW.set(this, ((0, Oy.l)(this, iP), (0, Oy.l)(this, Mc, 1))), hW.set(this, ((0, Oy.l)(this, Yc), (0, Oy.l)(this, Xc, !1))), fW.set(this, ((0, Oy.l)(this, nc), (0, Oy.l)(this, uc, !1))), ZW.set(this, ((0, Oy.l)(this, rP), (0, Oy.l)(this, Hc, .4))), cU.set(this, ((0, Oy.l)(this, aP), (0, Oy.l)(this, Fc, !1))), PW.set(this, ((0, Oy.l)(this, pc), (0, Oy.l)(this, Lc, !1))), oW.set(this, ((0, Oy.l)(this, Qc), (0, Oy.l)(this, jP, !1))), BW.set(this, ((0, Oy.l)(this, Dc), (0, Oy.l)(this, tP, !1))), KW.set(this, ((0, Oy.l)(this, wc), (0, Oy.l)(this, kP, !1))), eW.set(this, ((0, Oy.l)(this, Nc), (0, Oy.l)(this, zP, .05))), qU.set(this, ((0, Oy.l)(this, Ic), (0, Oy.l)(this, xP, !1))), sW.set(this, ((0, Oy.l)(this, Ac), (0, Oy.l)(this, dc, !1))), SW.set(this, ((0, Oy.l)(this, yo), (0, Oy.l)(this, bo, 4))), EW.set(this, ((0, Oy.l)(this, WP), (0, Oy.l)(this, UP, !1))), lW.set(this, ((0, Oy.l)(this, hP), (0, Oy.l)(this, fP, !1))), mU.set(this, ((0, Oy.l)(this, ZP), (0, Oy.l)(this, co, !1))), CW.set(this, ((0, Oy.l)(this, PP), (0, Oy.l)(this, oP, !1))), TW.set(this, ((0, Oy.l)(this, BP), (0, Oy.l)(this, KP, !1))), VW.set(this, ((0, Oy.l)(this, eP), (0, Oy.l)(this, qo, null))), JW.set(this, ((0, Oy.l)(this, sP), (0, Oy.l)(this, SP, !1))), gU.set(this, ((0, Oy.l)(this, EP), (0, Oy.l)(this, lP, !1))), GW.set(this, ((0, Oy.l)(this, mo), (0, Oy.l)(this, CP, !0))), OW.set(this, ((0, Oy.l)(this, TP), (0, Oy.l)(this, VP, !0))), RW.set(this, ((0, Oy.l)(this, JP), (0, Oy.l)(this, go, !1))), vU.set(this, ((0, Oy.l)(this, GP), (0, Oy.l)(this, OP, !1))), this._lightingInfos = ((0, Oy.l)(this, RP), new Fy.p(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = fy.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ib.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, iU.set(this, (0, Oy.l)(this, vo, 0)), this.debugLimit = ((0, Oy.l)(this, io), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = fy.e.MATERIAL_OPAQUE, this.kWy() && !this.kWy()?.xh().isWebGPU && this.kWy().xh().vf < 2 && vb.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), yb._noiseTextures[this.kWy().uniqueId] || (yb._noiseTextures[this.kWy().uniqueId] = new My.f(Gb.k.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.kWy(), !1, !0, 1), this.kWy().Nby.addOnce((() => {
              yb._noiseTextures[this.kWy().uniqueId]?.dispose(), delete yb._noiseTextures[this.kWy().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Iy.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Iy.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Hy(this.kWy()), this._environmentFuzzBRDFTexture = rb(this.kWy()), this.prePassConfiguration = new tb.b, this._propertyList = {};
            for (const yb of Object.getOwnPropertyNames(this)) {
              const bb = this[yb];
              bb instanceof wb && (this._propertyList[yb] = bb)
            }
            Object.keys(this._propertyList).forEach((yb => {
              const bb = this._propertyList[yb];
              let Wy = this._uniformsList[bb.targetUniformName];
              Wy ? Wy.numComponents !== bb.targetUniformComponentNum ? vb.b.Error(`Uniform ${bb.targetUniformName} already exists of size ${Wy.numComponents}, but trying to set it to ${bb.targetUniformComponentNum}.`) : Wy.requiredDefine !== bb.requiredDefine && (Wy.requiredDefine = void 0) : (Wy = new tW(bb.targetUniformName, bb.targetUniformComponentNum), Wy.requiredDefine = bb.requiredDefine, this._uniformsList[bb.targetUniformName] = Wy), "" === Wy.firstLinkedKey && (Wy.firstLinkedKey = bb.name), Wy.linkedProperties[bb.name] = bb
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const yb of Object.getOwnPropertyNames(this)) {
              const bb = this[yb];
              bb instanceof kW && (this._samplersList[yb] = bb)
            }
            for (const yb in this._samplersList) {
              const bb = this._samplersList[yb].textureDefine;
              this._samplerDefines[bb] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[bb + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[bb + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Iy.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Iy.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(yb) {
            this._transparencyMode !== yb && (this._transparencyMode = yb, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== fy.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(yb) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(yb)
          }
          clone(bb) {
            let Wy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const hy = gW.c.Clone((() => new yb(bb, this.kWy())), this, {
              cloneTexturesOnlyOnce: Wy
            });
            return hy.id = bb, hy.name = bb, this.stencil.copyTo(hy.stencil), this._clonePlugins(hy, Uy), hy
          }
          serialize() {
            const yb = super.serialize();
            return yb.customType = "BABYLON.OpenPBRMaterial", yb
          }
          static Parse(bb, Wy, Uy) {
            const hy = gW.c.Parse((() => new yb(bb.name, Wy)), bb, Wy, Uy);
            return bb.stencil && hy.stencil.parse(bb.stencil, Wy, Uy), fy.e._ParsePlugins(bb, hy, Wy, Uy), hy
          }
          forceCompilation(yb, bb, Wy) {
            const Uy = {
              clipPlane: !1,
              useInstances: !1,
              ...Wy
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Wy = new Ib({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                hy = this._prepareEffect(yb, yb, Wy, void 0, void 0, Uy.useInstances, Uy.clipPlane);
              this._onEffectCreatedObservable && (jW.effect = hy, jW.subMesh = null, this._onEffectCreatedObservable.notifyObservers(jW)), hy.isReady() ? bb && bb(this) : hy.onCompileObservable.add((() => {
                bb && bb(this)
              }))
            })()
          }
          isReadyForSubMesh(bb, Wy, Uy) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const hy = Wy._drawWrapper;
            if (hy.effect && this.isFrozen && hy._wasPreviouslyReady && hy._wasPreviouslyUsingInstances === Uy) return !0;
            Wy.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Wy.materialDefines = new Ib({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const fy = Wy.materialDefines;
            if (this._isReadyForSubMesh(Wy)) return !0;
            const Zy = this.kWy(),
              cb = Zy.xh();
            if (fy._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Zy.texturesEnabled)) {
              for (const yb in this._samplersList) {
                const bb = this._samplersList[yb];
                if (bb.value && !bb.value.isReadyOrNotBlocking()) return !1
              }
              const bb = this._getRadianceTexture();
              if (bb && Iy.d.ReflectionTextureEnabled) {
                if (!bb.isReadyOrNotBlocking()) return !1;
                if (bb.irradianceTexture) {
                  if (!bb.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!bb.sphericalPolynomial && bb.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Iy.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Iy.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Iy.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (yb._noiseTextures[Zy.uniqueId] && !yb._noiseTextures[Zy.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = fy, this._eventInfo.subMesh = Wy, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (fy._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (fy.AREALIGHTUSED)
              for (let yb = 0; yb < bb.lightSources.length; yb++)
                if (!bb.lightSources[yb]._isReady()) return !1;
            if (cb.getCaps().standardDerivatives || bb.isVerticesDataPresent(py.k.NormalKind) || (bb.createNormals(!0), vb.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + bb.name)), !(0, Ay.b)(Zy, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Py = Wy.effect,
              oy = fy._areLightsDisposed,
              By = this._prepareEffect(bb, Wy.getRenderingMesh(), fy, this.onCompiled, this.onError, Uy, null);
            let Ky = !1;
            if (By)
              if (this._onEffectCreatedObservable && (jW.effect = By, jW.subMesh = Wy, this._onEffectCreatedObservable.notifyObservers(jW)), this.allowShaderHotSwapping && Py && !By.isReady()) {
                if (fy.markAsUnprocessed(), Ky = this.isFrozen, oy) return fy._areLightsDisposed = !0, !1
              } else Zy.resetCachedMaterial(), Wy.setEffect(By, fy, this._materialContext);
            return !(!Wy.effect || !Wy.effect.isReady()) && (fy._renderId = Zy.getRenderId(), hy._wasPreviouslyReady = !Ky, hy._wasPreviouslyUsingInstances = !!Uy, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const yb = this._uniformBuffer;
            yb.addUniform("vTangentSpaceParams", 2), yb.addUniform("vLightingIntensity", 4), yb.addUniform("pointSize", 1), yb.addUniform("vDebugMode", 2), yb.addUniform("renderTargetSize", 2), yb.addUniform("cameraInfo", 4), yb.addUniform("vTextureRepetitionHexTilingParams", 4), yb.addUniform("backgroundRefractionMatrix", 16), yb.addUniform("vBackgroundRefractionInfos", 3), (0, Ay.jb)(yb, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((bb => {
              yb.addUniform(bb.name, bb.numComponents)
            })), Object.values(this._samplersList).forEach((bb => {
              yb.addUniform(bb.samplerInfoName, 2), yb.addUniform(bb.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(yb, bb, Wy, Uy) {
            if (0 === this.geometryThickness) yb.updateFloat("vGeometryThickness", 0);
            else {
              Uy.getRenderingMesh().getWorldMatrix().decompose(Fy.j.dU[0]);
              const bb = Math.max(Math.abs(Fy.j.dU[0].x), Math.abs(Fy.j.dU[0].y), Math.abs(Fy.j.dU[0].z));
              yb.updateFloat("vGeometryThickness", this.geometryThickness * bb)
            }
          }
          bindForSubMesh(bb, Wy, Uy) {
            const hy = this.kWy(),
              fy = Uy.materialDefines;
            if (!fy) return;
            const Zy = Uy.effect;
            if (!Zy) return;
            this._activeEffect = Zy, Wy.getMeshUniformBuffer().bindToEffect(Zy, "Mesh"), Wy.transferToEffect(bb);
            const cb = hy.xh();
            this._uniformBuffer.bindToEffect(Zy, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, hy, Wy, bb, this.isFrozen), qW.c.Bind(cb.currentRenderPassId, this._activeEffect, Wy, bb, this);
            const Py = hy.activeCamera;
            Py ? this._uniformBuffer.updateFloat4("cameraInfo", Py.minZ, Py.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const oy = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", oy[0], oy[1], oy[2], oy[3]), this._eventInfo.subMesh = Uy, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), fy.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const By = this._mustRebind(hy, Zy, Uy, Wy.visibility),
              Ky = cb._features.needToAlwaysBindUniformBuffers;
            (0, Ay.c)(Wy, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Kb.b)(this._activeEffect, this._vertexPullingMetadata);
            const ey = this._uniformBuffer;
            if (By) {
              this.bindViewProjection(Zy);
              const bb = this._getRadianceTexture();
              if (!ey.useUbo || !this.isFrozen || !ey.isSync || Uy._drawWrapper._forceRebindOnNextCall) {
                if (hy.texturesEnabled) {
                  for (const yb in this._samplersList) {
                    const bb = this._samplersList[yb];
                    bb.value && (ey.updateFloat2(bb.samplerInfoName, bb.value.coordinatesIndex, bb.value.level), (0, Ay.z)(bb.value, ey, bb.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (hy._mirroredCameraPosition ? ey.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ey.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ay.e)(hy, fy, ey, wy.d.White(), bb, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && ey.updateFloat("pointSize", this.pointSize);
                const yb = this._uniformsArray;
                for (let bb = 0, Wy = yb.length; bb < Wy; bb++) {
                  const Wy = yb[bb];
                  (void 0 === Wy.requiredDefine || fy[Wy.requiredDefine]) && (4 === Wy.numComponents ? (Wy.populateVectorFromLinkedProperties(Fy.j.Vector4[0]), ey.updateVector4(Wy.name, Fy.j.Vector4[0])) : 3 === Wy.numComponents ? (Wy.populateVectorFromLinkedProperties(Fy.j.dU[0]), ey.updateVector3(Wy.name, Fy.j.dU[0])) : 2 === Wy.numComponents ? (Wy.populateVectorFromLinkedProperties(Fy.j.Vector2[0]), ey.updateFloat2(Wy.name, Fy.j.Vector2[0].x, Fy.j.Vector2[0].y)) : 1 === Wy.numComponents && ey.updateFloat(Wy.name, Wy.linkedProperties[Wy.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * hy.environmentIntensity, this._lightingInfos.w = 1, ey.updateVector4("vLightingIntensity", this._lightingInfos), ey.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (hy.texturesEnabled) {
                for (const yb in this._samplersList) {
                  const bb = this._samplersList[yb];
                  bb.value && ey.setTexture(bb.samplerName, bb.value)
                }
                if ((0, Ay.i)(hy, fy, ey, bb, this.realTimeFiltering), fy.ENVIRONMENTBRDF && ey.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), fy.FUZZENVIRONMENTBRDF && ey.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), fy.REFRACTED_BACKGROUND && (ey.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), ey.qcy("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Fy.j.dU[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), ey.updateVector3("vBackgroundRefractionInfos", Fy.j.dU[1])), (fy.ANISOTROPIC || fy.FUZZ || fy.REFRACTED_BACKGROUND || fy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ey.setTexture("blueNoiseSampler", yb._noiseTextures[this.kWy().uniqueId]), fy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const yb = this.sssIrradianceTexture.getSize().width,
                    bb = this.sssIrradianceTexture.getSize().height;
                  ey.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), ey.setTexture("sceneDepthSampler", this.sssDepthTexture), ey.updateFloat2("renderTargetSize", yb, bb)
                }
              }
              this.kWy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Wy) && this.kWy().depthPeelingRenderer.bind(Zy), this._eventInfo.subMesh = Uy, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Bb.g)(this._activeEffect, this, hy), this.bindEyePosition(Zy)
            } else Ky && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, hy, hy.xh(), Uy), !By && this.isFrozen && !Ky || !hy.lightsEnabled || this._disableLighting || (0, Ay.m)(hy, Wy, this._activeEffect, fy, this._maxSimultaneousLights), !By && this.isFrozen || (this.bindView(Zy), (0, Ay.d)(hy, Wy, this._activeEffect, !0), fy.NUM_MORPH_INFLUENCERS && (0, Ay.r)(Wy, this._activeEffect), fy.BAKED_VERTEX_ANIMATION_TEXTURE && Wy.bakedVertexAnimationManager?.bind(Zy, fy.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ay.q)(fy, this._activeEffect, hy)), this._afterBind(Wy, this._activeEffect, Uy), ey.update()
          }
          getAnimatables() {
            const yb = super.getAnimatables();
            for (const bb in this._samplersList) {
              const Wy = this._samplersList[bb];
              Wy.value && Wy.value.animations && Wy.value.animations.length > 0 && yb.push(Wy.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && yb.push(this._radianceTexture), yb
          }
          getActiveTextures() {
            const yb = super.getActiveTextures();
            for (const bb in this._samplersList) {
              const Wy = this._samplersList[bb];
              Wy.value && yb.push(Wy.value)
            }
            return this._radianceTexture && yb.push(this._radianceTexture), yb
          }
          hasTexture(yb) {
            if (super.hasTexture(yb)) return !0;
            for (const bb in this._samplersList) {
              if (this._samplersList[bb].value === yb) return !0
            }
            return this._radianceTexture === yb
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(yb, bb) {
            if (this._breakShaderLoadedCheck = !0, bb) {
              this._environmentBRDFTexture && this.kWy().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.kWy().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const yb in this._samplersList) {
                const bb = this._samplersList[yb];
                bb.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(yb, bb)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.kWy().environmentTexture
          }
          _prepareEffect(bb, Wy, Uy) {
            let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Zy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(bb, Wy, Uy, Zy, cb), !Uy.isDirty) return null;
            Uy.markAsProcessed();
            const Py = this.kWy().xh(),
              oy = new xb.c;
            let By = 0;
            Uy.USESPHERICALINVERTEX && oy.addFallback(By++, "USESPHERICALINVERTEX"), Uy.FOG && oy.addFallback(By, "FOG"), Uy.SPECULARAA && oy.addFallback(By, "SPECULARAA"), Uy.POINTSIZE && oy.addFallback(By, "POINTSIZE"), Uy.LOGARITHMICDEPTH && oy.addFallback(By, "LOGARITHMICDEPTH"), Uy.PARALLAX && oy.addFallback(By, "PARALLAX"), Uy.PARALLAX_RHS && oy.addFallback(By, "PARALLAX_RHS"), Uy.PARALLAXOCCLUSION && oy.addFallback(By++, "PARALLAXOCCLUSION"), Uy.ENVIRONMENTBRDF && oy.addFallback(By++, "ENVIRONMENTBRDF"), Uy.TANGENT && oy.addFallback(By++, "TANGENT"), By = (0, Ay.D)(Uy, oy, this._maxSimultaneousLights, By), Uy.SPECULARTERM && oy.addFallback(By++, "SPECULARTERM"), Uy.USESPHERICALFROMREFLECTIONMAP && oy.addFallback(By++, "USESPHERICALFROMREFLECTIONMAP"), Uy.USEIRRADIANCEMAP && oy.addFallback(By++, "USEIRRADIANCEMAP"), Uy.NORMAL && oy.addFallback(By++, "NORMAL"), Uy.VERTEXCOLOR && oy.addFallback(By++, "VERTEXCOLOR"), Uy.MORPHTARGETS && oy.addFallback(By++, "MORPHTARGETS"), Uy.MULTIVIEW && oy.addFallback(0, "MULTIVIEW");
            const Ky = [py.k.PositionKind];
            Uy.NORMAL && Ky.push(py.k.NormalKind), Uy.TANGENT && Ky.push(py.k.TangentKind);
            for (let yb = 1; yb <= 6; ++yb) Uy["UV" + yb] && Ky.push(`uv${1===yb?"":yb}`);
            Uy.VERTEXCOLOR && Ky.push(py.k.ColorKind), (0, Ay.K)(Ky, bb, Uy, oy), (0, Ay.N)(Ky, Uy), (0, Ay.O)(Ky, bb, Uy), (0, Ay.H)(Ky, bb, Uy);
            let ey = "openpbr";
            const qb = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const yb in this._uniformsList) qb.push(yb);
            const sy = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Uy.FUZZENVIRONMENTBRDF && sy.push("environmentFuzzBrdfSampler"), Uy.REFRACTED_BACKGROUND && sy.push("backgroundRefractionSampler"), (Uy.ANISOTROPIC || Uy.FUZZ || Uy.REFRACTED_BACKGROUND || Uy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && sy.push("blueNoiseSampler"), Uy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (sy.push("sceneIrradianceSampler"), sy.push("sceneDepthSampler"));
            for (const yb in this._samplersList) {
              const bb = this._samplersList[yb];
              sy.push(bb.samplerName), qb.push(bb.samplerInfoName), qb.push(bb.samplerMatrixName)
            }(0, Ay.mb)(qb, sy, !0);
            const Sy = ["Material", "Scene", "Mesh"],
              Ey = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Uy.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = oy, this._eventInfo.fallbackRank = By, this._eventInfo.defines = Uy, this._eventInfo.uniforms = qb, this._eventInfo.attributes = Ky, this._eventInfo.samplers = sy, this._eventInfo.uniformBuffersNames = Sy, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bb, this._eventInfo.indexParameters = Ey, this._callbackPluginEventGeneric(128, this._eventInfo), qW.c.AddUniformsAndSamplers(qb, sy), tb.b.AddUniforms(qb), tb.b.AddSamplers(sy), (0, Bb.d)(qb), this._useVertexPulling) {
              const yb = Wy?.geometry;
              yb && (this._vertexPullingMetadata = (0, Kb.c)(yb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((yb, bb) => {
                qb.push(`vp_${bb}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Ny.b && (Ny.b.PrepareUniforms(qb, Uy), Ny.b.PrepareSamplers(sy, Uy)), (0, Ay.pb)({
              uniformsNames: qb,
              uniformBuffersNames: Sy,
              samplers: sy,
              defines: Uy,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const ly = {};
            this.customShaderNameResolve && (ey = this.customShaderNameResolve(ey, qb, Sy, sy, Uy, Ky, ly));
            const mb = Uy.toString(),
              Cy = Py.createEffect(ey, {
                attributes: Ky,
                uniformsNames: qb,
                uniformBuffersNames: Sy,
                samplers: sy,
                defines: mb,
                fallbacks: oy,
                onCompiled: hy,
                onError: fy,
                indexParameters: Ey,
                processFinalCode: ly.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Uy.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: yb._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Py);
            return this._eventInfo.customCode = void 0, Cy
          }
          _prepareDefines(bb, Wy, Uy) {
            let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Zy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const cb = Wy.hasThinInstances,
              Py = this.kWy(),
              oy = Py.xh();
            (0, Ay.Y)(Py, bb, Uy, !0, this._maxSimultaneousLights, this._disableLighting), Uy._needNormals = !0, (0, Ay.db)(Py, Uy);
            const By = this.needAlphaBlendingForMesh(bb) && this.kWy().useOrderIndependentTransparency;
            if ((0, Ay.ib)(Py, Uy, this.canRenderToMRT && !By), (0, Ay.gb)(Py, Uy, By), qW.c.PrepareDefines(oy.currentRenderPassId, bb, Uy), Uy._areTexturesDirty) {
              Uy._needUVs = !1;
              for (let yb = 1; yb <= 6; ++yb) Uy["MAINUV" + yb] = !1;
              if (Py.texturesEnabled) {
                for (const Wy in this._samplersList) {
                  const yb = this._samplersList[Wy];
                  yb.value ? ((0, Ay.$)(yb.value, Uy, yb.textureDefine), Uy[yb.textureDefine + "_GAMMA"] = yb.value.gammaSpace) : Uy[yb.textureDefine] = !1
                }
                const yb = this._getRadianceTexture(),
                  bb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || oy.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Ay.X)(Py, yb, Uy, this.realTimeFiltering, this.realTimeFilteringQuality, !bb), this._baseMetalnessTexture && (Uy.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Uy.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Uy.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Uy.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Uy.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Uy.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Uy.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Uy.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Uy.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Uy.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Uy.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Uy.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Iy.d.DiffuseTextureEnabled ? (Uy.PARALLAX = !0, Uy.PARALLAX_RHS = Py.useRightHandedSystem, Uy.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Uy.PARALLAX = !1, Uy.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Uy.PARALLAX = !1, Uy.PARALLAX_RHS = !1, Uy.PARALLAXOCCLUSION = !1, Uy.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Iy.d.ReflectionTextureEnabled ? (Uy.ENVIRONMENTBRDF = !0, Uy.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Uy.ENVIRONMENTBRDF = !1, Uy.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Uy.FUZZENVIRONMENTBRDF = !0 : Uy.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Uy.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Iy.d.RefractionTextureEnabled, Uy.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Uy.REFRACTED_LIGHTS = !0;
                  const yb = this._getRadianceTexture();
                  yb ? (Uy.REFRACTED_ENVIRONMENT = Iy.d.RefractionTextureEnabled, Uy.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.kWy().useRightHandedSystem ? !yb.invertZ : yb.invertZ, Uy.REFRACTED_ENVIRONMENT_LOCAL_CUBE = yb.isCube && yb.boundingBoxSize) : Uy.REFRACTED_ENVIRONMENT = !1
                } else Uy.REFRACTED_BACKGROUND = !1, Uy.REFRACTED_LIGHTS = !1, Uy.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Uy.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Uy.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === fy.e.LIGHTFALLOFF_STANDARD ? (Uy.USEPHYSICALLIGHTFALLOFF = !1, Uy.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === fy.e.LIGHTFALLOFF_GLTF ? (Uy.USEPHYSICALLIGHTFALLOFF = !1, Uy.USEGLTFLIGHTFALLOFF = !0) : (Uy.USEPHYSICALLIGHTFALLOFF = !0, Uy.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Uy.TWOSIDEDLIGHTING = !0 : Uy.TWOSIDEDLIGHTING = !1, Uy.MIRRORED = !!Py._mirroredCameraPosition, Uy.SPECULARAA = oy.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Uy._areTexturesDirty || Uy._areMiscDirty) && (Uy.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Uy.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Uy.ALPHABLEND = this.needAlphaBlendingForMesh(bb)), Uy._areTexturesDirty && (Uy.TEXTURE_REPETITION_MODE = oy.version > 1 || oy.isWebGPU ? this.textureRepetitionMode : 0), Uy._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Uy), Uy.FORCENORMALFORWARD = this._forceNormalForward, Uy.RADIANCEOCCLUSION = this._useRadianceOcclusion, Uy.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && yb._noiseTextures[Py.uniqueId] && Iy.d.ReflectionTextureEnabled ? (Uy.ANISOTROPIC = !0, bb.isVerticesDataPresent(py.k.TangentKind) || (Uy._needUVs = !0, Uy.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Uy.USE_GLTF_STYLE_ANISOTROPY = !0), Uy.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Uy.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Uy.ANISOTROPIC = !1, Uy.USE_GLTF_STYLE_ANISOTROPY = !1, Uy.ANISOTROPIC_BASE = !1, Uy.ANISOTROPIC_COAT = !1), Uy.THIN_FILM = this.thinFilmWeight > 0, Uy.IRIDESCENCE = this.thinFilmWeight > 0, Uy.DISPERSION = this.transmissionDispersionScale > 0, Uy.SCATTERING = this.hasScattering;
            if (Uy.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Uy.TRANSMISSION_SLAB = this.transmissionWeight > 0, Uy.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Uy.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Uy.PREPASS && (Uy.SUBSURFACE_SLAB || Uy.TRANSMISSION_SLAB_VOLUME)) {
              let yb = !1;
              if (!this.sssIrradianceTexture && Py.geometryBufferRenderer) {
                const bb = Py.geometryBufferRenderer.getTextureIndex(Lb.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Py.geometryBufferRenderer.getGBuffer().textures[bb], yb = !0
              }
              if (!this.sssDepthTexture && Py.geometryBufferRenderer) {
                const bb = Py.geometryBufferRenderer.getTextureIndex(Lb.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Py.geometryBufferRenderer.getGBuffer().textures[bb], yb = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Uy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, yb && (Uy.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Uy.FUZZ = this.fuzzWeight > 0 && Iy.d.ReflectionTextureEnabled, Uy.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Uy.FUZZ ? (bb.isVerticesDataPresent(py.k.TangentKind) || (Uy._needUVs = !0, Uy.MAINUV1 = !0), this._environmentFuzzBRDFTexture = rb(this.kWy()), Uy.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Uy.FUZZENVIRONMENTBRDF = !1, Uy.FUZZ_IBL_SAMPLES = 0), Uy._areMiscDirty && ((0, Ay.cb)(bb, Py, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bb), Uy, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Wy, this._isVertexOutputInvariant), Uy.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !bb.isVerticesDataPresent(py.k.NormalKind), Uy.DEBUGMODE = this._debugMode), (0, Ay.U)(Py, oy, this, Uy, !!hy, Zy, cb), this._eventInfo.defines = Uy, this._eventInfo.mesh = bb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ay.R)(bb, Uy, !0, !0, !0, this._transparencyMode !== fy.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, bb = new WeakMap, Uy = new WeakMap, hy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, Py = new WeakMap, oy = new WeakMap, By = new WeakMap, Ky = new WeakMap, ey = new WeakMap, qb = new WeakMap, sy = new WeakMap, Sy = new WeakMap, Ey = new WeakMap, ly = new WeakMap, mb = new WeakMap, Cy = new WeakMap, Ty = new WeakMap, Vy = new WeakMap, Jy = new WeakMap, gb = new WeakMap, Gy = new WeakMap, Yy = new WeakMap, Xy = new WeakMap, ny = new WeakMap, uy = new WeakMap, ab = new WeakMap, Ly = new WeakMap, Qy = new WeakMap, jb = new WeakMap, Dy = new WeakMap, kb = new WeakMap, zb = new WeakMap, dy = new WeakMap, yW = new WeakMap, bW = new WeakMap, Wb = new WeakMap, Ub = new WeakMap, hb = new WeakMap, fb = new WeakMap, Zb = new WeakMap, cW = new WeakMap, Pb = new WeakMap, ob = new WeakMap, sb = new WeakMap, Sb = new WeakMap, Eb = new WeakMap, lb = new WeakMap, mW = new WeakMap, Cb = new WeakMap, Tb = new WeakMap, Vb = new WeakMap, Jb = new WeakMap, Ob = new WeakMap, Rb = new WeakMap, vW = new WeakMap, iW = new WeakMap, Mb = new WeakMap, Yb = new WeakMap, Xb = new WeakMap, nb = new WeakMap, ub = new WeakMap, rW = new WeakMap, Hb = new WeakMap, aW = new WeakMap, Fb = new WeakMap, pb = new WeakMap, Qb = new WeakMap, Db = new WeakMap, Nb = new WeakMap, zW = new WeakMap, Ab = new WeakMap, db = new WeakMap, yU = new WeakMap, bU = new WeakMap, WW = new WeakMap, UW = new WeakMap, hW = new WeakMap, fW = new WeakMap, ZW = new WeakMap, cU = new WeakMap, PW = new WeakMap, oW = new WeakMap, BW = new WeakMap, KW = new WeakMap, eW = new WeakMap, qU = new WeakMap, sW = new WeakMap, SW = new WeakMap, EW = new WeakMap, lW = new WeakMap, mU = new WeakMap, CW = new WeakMap, TW = new WeakMap, VW = new WeakMap, JW = new WeakMap, gU = new WeakMap, GW = new WeakMap, OW = new WeakMap, RW = new WeakMap, vU = new WeakMap, iU = new WeakMap, (() => {
          const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xh[Symbol.metadata] ?? null) : void 0;
          MW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], jU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], kU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], zU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], dW = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], yh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], bh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], WU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], UU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], ZU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], ch = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], PU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], BU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], KU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], eU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], qh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], SU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], lU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], mh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], TU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], VU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], gh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], RU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], vh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], ih = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], MU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], XU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], nU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], rh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], HU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], ah = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], FU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], pU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], LU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], jh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], th = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], wU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], kh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], NU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], zh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], xh = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], AU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], dU = [(0, Ry.e)("_markAllSubMeshesAsTexturesDirty")], yf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], bf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Wh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Uh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], hh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], fh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Zh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], cf = [(0, Ry.T)()], Ph = [(0, Ry.T)()], oh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Bh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Kh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], eh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], qf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsLightsDirty")], sh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Sh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsLightsDirty")], Eh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], lh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], mf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ch = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Th = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Vh = [(0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Jh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], gf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Gh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Oh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Rh = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], vf = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], Mh = [(0, Ry.h)("_markAllSubMeshesAsMiscDirty")], Yh = [(0, Ry.T)()], (0, Oy.j)(yb, null, MW, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseWeight" in yb,
              get: yb => yb.baseWeight,
              set: (yb, bb) => {
                yb.baseWeight = bb
              }
            },
            metadata: bb
          }, uh, rf), (0, Oy.j)(yb, null, YW, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseWeightTexture" in yb,
              get: yb => yb.baseWeightTexture,
              set: (yb, bb) => {
                yb.baseWeightTexture = bb
              }
            },
            metadata: bb
          }, Hh, af), (0, Oy.j)(yb, null, XW, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseColor" in yb,
              get: yb => yb.baseColor,
              set: (yb, bb) => {
                yb.baseColor = bb
              }
            },
            metadata: bb
          }, Fh, ph), (0, Oy.j)(yb, null, nW, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseColorTexture" in yb,
              get: yb => yb.baseColorTexture,
              set: (yb, bb) => {
                yb.baseColorTexture = bb
              }
            },
            metadata: bb
          }, Lh, Qh), (0, Oy.j)(yb, null, uW, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseDiffuseRoughness" in yb,
              get: yb => yb.baseDiffuseRoughness,
              set: (yb, bb) => {
                yb.baseDiffuseRoughness = bb
              }
            },
            metadata: bb
          }, jf, Dh), (0, Oy.j)(yb, null, rU, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseDiffuseRoughnessTexture" in yb,
              get: yb => yb.baseDiffuseRoughnessTexture,
              set: (yb, bb) => {
                yb.baseDiffuseRoughnessTexture = bb
              }
            },
            metadata: bb
          }, tf, wh), (0, Oy.j)(yb, null, HW, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseMetalness" in yb,
              get: yb => yb.baseMetalness,
              set: (yb, bb) => {
                yb.baseMetalness = bb
              }
            },
            metadata: bb
          }, kf, Nh), (0, Oy.j)(yb, null, aU, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "baseMetalnessTexture" in yb,
              get: yb => yb.baseMetalnessTexture,
              set: (yb, bb) => {
                yb.baseMetalnessTexture = bb
              }
            },
            metadata: bb
          }, zf, Ih), (0, Oy.j)(yb, null, FW, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularWeight" in yb,
              get: yb => yb.specularWeight,
              set: (yb, bb) => {
                yb.specularWeight = bb
              }
            },
            metadata: bb
          }, xf, Ah), (0, Oy.j)(yb, null, pW, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularWeightTexture" in yb,
              get: yb => yb.specularWeightTexture,
              set: (yb, bb) => {
                yb.specularWeightTexture = bb
              }
            },
            metadata: bb
          }, dh, yZ), (0, Oy.j)(yb, null, LW, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularColor" in yb,
              get: yb => yb.specularColor,
              set: (yb, bb) => {
                yb.specularColor = bb
              }
            },
            metadata: bb
          }, bZ, Wf), (0, Oy.j)(yb, null, QW, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularColorTexture" in yb,
              get: yb => yb.specularColorTexture,
              set: (yb, bb) => {
                yb.specularColorTexture = bb
              }
            },
            metadata: bb
          }, Uf, hf), (0, Oy.j)(yb, null, jU, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularRoughness" in yb,
              get: yb => yb.specularRoughness,
              set: (yb, bb) => {
                yb.specularRoughness = bb
              }
            },
            metadata: bb
          }, ff, Zf), (0, Oy.j)(yb, null, DW, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularRoughnessTexture" in yb,
              get: yb => yb.specularRoughnessTexture,
              set: (yb, bb) => {
                yb.specularRoughnessTexture = bb
              }
            },
            metadata: bb
          }, cZ, Pf), (0, Oy.j)(yb, null, tU, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularRoughnessAnisotropy" in yb,
              get: yb => yb.specularRoughnessAnisotropy,
              set: (yb, bb) => {
                yb.specularRoughnessAnisotropy = bb
              }
            },
            metadata: bb
          }, of, Bf), (0, Oy.j)(yb, null, wW, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularRoughnessAnisotropyTexture" in yb,
              get: yb => yb.specularRoughnessAnisotropyTexture,
              set: (yb, bb) => {
                yb.specularRoughnessAnisotropyTexture = bb
              }
            },
            metadata: bb
          }, Kf, ef), (0, Oy.j)(yb, null, kU, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularIor" in yb,
              get: yb => yb.specularIor,
              set: (yb, bb) => {
                yb.specularIor = bb
              }
            },
            metadata: bb
          }, qZ, sf), (0, Oy.j)(yb, null, NW, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionWeight" in yb,
              get: yb => yb.transmissionWeight,
              set: (yb, bb) => {
                yb.transmissionWeight = bb
              }
            },
            metadata: bb
          }, Sf, Ef), (0, Oy.j)(yb, null, zU, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionWeightTexture" in yb,
              get: yb => yb.transmissionWeightTexture,
              set: (yb, bb) => {
                yb.transmissionWeightTexture = bb
              }
            },
            metadata: bb
          }, lf, mZ), (0, Oy.j)(yb, null, IW, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionColor" in yb,
              get: yb => yb.transmissionColor,
              set: (yb, bb) => {
                yb.transmissionColor = bb
              }
            },
            metadata: bb
          }, Cf, Tf), (0, Oy.j)(yb, null, xU, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionColorTexture" in yb,
              get: yb => yb.transmissionColorTexture,
              set: (yb, bb) => {
                yb.transmissionColorTexture = bb
              }
            },
            metadata: bb
          }, Vf, Jf), (0, Oy.j)(yb, null, AW, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionDepth" in yb,
              get: yb => yb.transmissionDepth,
              set: (yb, bb) => {
                yb.transmissionDepth = bb
              }
            },
            metadata: bb
          }, gZ, Gf), (0, Oy.j)(yb, null, dW, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionDepthTexture" in yb,
              get: yb => yb.transmissionDepthTexture,
              set: (yb, bb) => {
                yb.transmissionDepthTexture = bb
              }
            },
            metadata: bb
          }, Of, Rf), (0, Oy.j)(yb, null, yh, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionScatter" in yb,
              get: yb => yb.transmissionScatter,
              set: (yb, bb) => {
                yb.transmissionScatter = bb
              }
            },
            metadata: bb
          }, vZ, iZ), (0, Oy.j)(yb, null, bh, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionScatterTexture" in yb,
              get: yb => yb.transmissionScatterTexture,
              set: (yb, bb) => {
                yb.transmissionScatterTexture = bb
              }
            },
            metadata: bb
          }, Mf, Yf), (0, Oy.j)(yb, null, WU, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionScatterAnisotropy" in yb,
              get: yb => yb.transmissionScatterAnisotropy,
              set: (yb, bb) => {
                yb.transmissionScatterAnisotropy = bb
              }
            },
            metadata: bb
          }, Xf, nf), (0, Oy.j)(yb, null, UU, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionDispersionScale" in yb,
              get: yb => yb.transmissionDispersionScale,
              set: (yb, bb) => {
                yb.transmissionDispersionScale = bb
              }
            },
            metadata: bb
          }, uf, rZ), (0, Oy.j)(yb, null, hU, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionDispersionScaleTexture" in yb,
              get: yb => yb.transmissionDispersionScaleTexture,
              set: (yb, bb) => {
                yb.transmissionDispersionScaleTexture = bb
              }
            },
            metadata: bb
          }, Hf, aZ), (0, Oy.j)(yb, null, fU, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: yb => "transmissionDispersionAbbeNumber" in yb,
              get: yb => yb.transmissionDispersionAbbeNumber,
              set: (yb, bb) => {
                yb.transmissionDispersionAbbeNumber = bb
              }
            },
            metadata: bb
          }, Ff, pf), (0, Oy.j)(yb, null, ZU, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceWeight" in yb,
              get: yb => yb.subsurfaceWeight,
              set: (yb, bb) => {
                yb.subsurfaceWeight = bb
              }
            },
            metadata: bb
          }, Lf, Qf), (0, Oy.j)(yb, null, ch, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceWeightTexture" in yb,
              get: yb => yb.subsurfaceWeightTexture,
              set: (yb, bb) => {
                yb.subsurfaceWeightTexture = bb
              }
            },
            metadata: bb
          }, jZ, Df), (0, Oy.j)(yb, null, PU, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceColor" in yb,
              get: yb => yb.subsurfaceColor,
              set: (yb, bb) => {
                yb.subsurfaceColor = bb
              }
            },
            metadata: bb
          }, tZ, wf), (0, Oy.j)(yb, null, oU, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceColorTexture" in yb,
              get: yb => yb.subsurfaceColorTexture,
              set: (yb, bb) => {
                yb.subsurfaceColorTexture = bb
              }
            },
            metadata: bb
          }, kZ, Nf), (0, Oy.j)(yb, null, BU, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceRadius" in yb,
              get: yb => yb.subsurfaceRadius,
              set: (yb, bb) => {
                yb.subsurfaceRadius = bb
              }
            },
            metadata: bb
          }, zZ, If), (0, Oy.j)(yb, null, KU, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceRadiusScale" in yb,
              get: yb => yb.subsurfaceRadiusScale,
              set: (yb, bb) => {
                yb.subsurfaceRadiusScale = bb
              }
            },
            metadata: bb
          }, xZ, Af), (0, Oy.j)(yb, null, eU, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceRadiusScaleTexture" in yb,
              get: yb => yb.subsurfaceRadiusScaleTexture,
              set: (yb, bb) => {
                yb.subsurfaceRadiusScaleTexture = bb
              }
            },
            metadata: bb
          }, df, yc), (0, Oy.j)(yb, null, qh, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: yb => "subsurfaceScatterAnisotropy" in yb,
              get: yb => yb.subsurfaceScatterAnisotropy,
              set: (yb, bb) => {
                yb.subsurfaceScatterAnisotropy = bb
              }
            },
            metadata: bb
          }, bc, WZ), (0, Oy.j)(yb, null, sU, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatWeight" in yb,
              get: yb => yb.coatWeight,
              set: (yb, bb) => {
                yb.coatWeight = bb
              }
            },
            metadata: bb
          }, UZ, hZ), (0, Oy.j)(yb, null, SU, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatWeightTexture" in yb,
              get: yb => yb.coatWeightTexture,
              set: (yb, bb) => {
                yb.coatWeightTexture = bb
              }
            },
            metadata: bb
          }, fZ, ZZ), (0, Oy.j)(yb, null, EU, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatColor" in yb,
              get: yb => yb.coatColor,
              set: (yb, bb) => {
                yb.coatColor = bb
              }
            },
            metadata: bb
          }, cc, PZ), (0, Oy.j)(yb, null, lU, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatColorTexture" in yb,
              get: yb => yb.coatColorTexture,
              set: (yb, bb) => {
                yb.coatColorTexture = bb
              }
            },
            metadata: bb
          }, oZ, BZ), (0, Oy.j)(yb, null, mh, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatRoughness" in yb,
              get: yb => yb.coatRoughness,
              set: (yb, bb) => {
                yb.coatRoughness = bb
              }
            },
            metadata: bb
          }, KZ, eZ), (0, Oy.j)(yb, null, CU, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatRoughnessTexture" in yb,
              get: yb => yb.coatRoughnessTexture,
              set: (yb, bb) => {
                yb.coatRoughnessTexture = bb
              }
            },
            metadata: bb
          }, qc, sZ), (0, Oy.j)(yb, null, TU, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatRoughnessAnisotropy" in yb,
              get: yb => yb.coatRoughnessAnisotropy,
              set: (yb, bb) => {
                yb.coatRoughnessAnisotropy = bb
              }
            },
            metadata: bb
          }, SZ, EZ), (0, Oy.j)(yb, null, VU, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatRoughnessAnisotropyTexture" in yb,
              get: yb => yb.coatRoughnessAnisotropyTexture,
              set: (yb, bb) => {
                yb.coatRoughnessAnisotropyTexture = bb
              }
            },
            metadata: bb
          }, lZ, mc), (0, Oy.j)(yb, null, JU, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatIor" in yb,
              get: yb => yb.coatIor,
              set: (yb, bb) => {
                yb.coatIor = bb
              }
            },
            metadata: bb
          }, CZ, TZ), (0, Oy.j)(yb, null, gh, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatDarkening" in yb,
              get: yb => yb.coatDarkening,
              set: (yb, bb) => {
                yb.coatDarkening = bb
              }
            },
            metadata: bb
          }, VZ, JZ), (0, Oy.j)(yb, null, GU, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "coatDarkeningTexture" in yb,
              get: yb => yb.coatDarkeningTexture,
              set: (yb, bb) => {
                yb.coatDarkeningTexture = bb
              }
            },
            metadata: bb
          }, gc, GZ), (0, Oy.j)(yb, null, OU, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzWeight" in yb,
              get: yb => yb.fuzzWeight,
              set: (yb, bb) => {
                yb.fuzzWeight = bb
              }
            },
            metadata: bb
          }, OZ, RZ), (0, Oy.j)(yb, null, RU, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzWeightTexture" in yb,
              get: yb => yb.fuzzWeightTexture,
              set: (yb, bb) => {
                yb.fuzzWeightTexture = bb
              }
            },
            metadata: bb
          }, vc, ic), (0, Oy.j)(yb, null, vh, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzColor" in yb,
              get: yb => yb.fuzzColor,
              set: (yb, bb) => {
                yb.fuzzColor = bb
              }
            },
            metadata: bb
          }, MZ, YZ), (0, Oy.j)(yb, null, ih, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzColorTexture" in yb,
              get: yb => yb.fuzzColorTexture,
              set: (yb, bb) => {
                yb.fuzzColorTexture = bb
              }
            },
            metadata: bb
          }, XZ, nZ), (0, Oy.j)(yb, null, MU, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzRoughness" in yb,
              get: yb => yb.fuzzRoughness,
              set: (yb, bb) => {
                yb.fuzzRoughness = bb
              }
            },
            metadata: bb
          }, uZ, rc), (0, Oy.j)(yb, null, YU, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "fuzzRoughnessTexture" in yb,
              get: yb => yb.fuzzRoughnessTexture,
              set: (yb, bb) => {
                yb.fuzzRoughnessTexture = bb
              }
            },
            metadata: bb
          }, HZ, ac), (0, Oy.j)(yb, null, XU, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryThinWalled" in yb,
              get: yb => yb.geometryThinWalled,
              set: (yb, bb) => {
                yb.geometryThinWalled = bb
              }
            },
            metadata: bb
          }, FZ, pZ), (0, Oy.j)(yb, null, nU, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryNormalTexture" in yb,
              get: yb => yb.geometryNormalTexture,
              set: (yb, bb) => {
                yb.geometryNormalTexture = bb
              }
            },
            metadata: bb
          }, LZ, QZ), (0, Oy.j)(yb, null, uU, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryTangent" in yb,
              get: yb => yb.geometryTangent,
              set: (yb, bb) => {
                yb.geometryTangent = bb
              }
            },
            metadata: bb
          }, jc, DZ), (0, Oy.j)(yb, null, rh, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryTangentTexture" in yb,
              get: yb => yb.geometryTangentTexture,
              set: (yb, bb) => {
                yb.geometryTangentTexture = bb
              }
            },
            metadata: bb
          }, tc, wZ), (0, Oy.j)(yb, null, HU, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryCoatNormalTexture" in yb,
              get: yb => yb.geometryCoatNormalTexture,
              set: (yb, bb) => {
                yb.geometryCoatNormalTexture = bb
              }
            },
            metadata: bb
          }, kc, NZ), (0, Oy.j)(yb, null, ah, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryCoatTangent" in yb,
              get: yb => yb.geometryCoatTangent,
              set: (yb, bb) => {
                yb.geometryCoatTangent = bb
              }
            },
            metadata: bb
          }, zc, IZ), (0, Oy.j)(yb, null, FU, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryCoatTangentTexture" in yb,
              get: yb => yb.geometryCoatTangentTexture,
              set: (yb, bb) => {
                yb.geometryCoatTangentTexture = bb
              }
            },
            metadata: bb
          }, xc, AZ), (0, Oy.j)(yb, null, pU, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryOpacity" in yb,
              get: yb => yb.geometryOpacity,
              set: (yb, bb) => {
                yb.geometryOpacity = bb
              }
            },
            metadata: bb
          }, dZ, yP), (0, Oy.j)(yb, null, LU, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryOpacityTexture" in yb,
              get: yb => yb.geometryOpacityTexture,
              set: (yb, bb) => {
                yb.geometryOpacityTexture = bb
              }
            },
            metadata: bb
          }, bP, Wc), (0, Oy.j)(yb, null, QU, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryThickness" in yb,
              get: yb => yb.geometryThickness,
              set: (yb, bb) => {
                yb.geometryThickness = bb
              }
            },
            metadata: bb
          }, Uc, hc), (0, Oy.j)(yb, null, jh, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "geometryThicknessTexture" in yb,
              get: yb => yb.geometryThicknessTexture,
              set: (yb, bb) => {
                yb.geometryThicknessTexture = bb
              }
            },
            metadata: bb
          }, fc, Zc), (0, Oy.j)(yb, null, DU, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissionLuminance" in yb,
              get: yb => yb.emissionLuminance,
              set: (yb, bb) => {
                yb.emissionLuminance = bb
              }
            },
            metadata: bb
          }, cP, Pc), (0, Oy.j)(yb, null, th, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissionColor" in yb,
              get: yb => yb.emissionColor,
              set: (yb, bb) => {
                yb.emissionColor = bb
              }
            },
            metadata: bb
          }, oc, Bc), (0, Oy.j)(yb, null, wU, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissionColorTexture" in yb,
              get: yb => yb.emissionColorTexture,
              set: (yb, bb) => {
                yb.emissionColorTexture = bb
              }
            },
            metadata: bb
          }, Kc, ec), (0, Oy.j)(yb, null, kh, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmWeight" in yb,
              get: yb => yb.thinFilmWeight,
              set: (yb, bb) => {
                yb.thinFilmWeight = bb
              }
            },
            metadata: bb
          }, qP, sc), (0, Oy.j)(yb, null, NU, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmWeightTexture" in yb,
              get: yb => yb.thinFilmWeightTexture,
              set: (yb, bb) => {
                yb.thinFilmWeightTexture = bb
              }
            },
            metadata: bb
          }, Sc, Ec), (0, Oy.j)(yb, null, zh, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmThickness" in yb,
              get: yb => yb.thinFilmThickness,
              set: (yb, bb) => {
                yb.thinFilmThickness = bb
              }
            },
            metadata: bb
          }, lc, mP), (0, Oy.j)(yb, null, IU, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmThicknessMin" in yb,
              get: yb => yb.thinFilmThicknessMin,
              set: (yb, bb) => {
                yb.thinFilmThicknessMin = bb
              }
            },
            metadata: bb
          }, Cc, Tc), (0, Oy.j)(yb, null, xh, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmThicknessTexture" in yb,
              get: yb => yb.thinFilmThicknessTexture,
              set: (yb, bb) => {
                yb.thinFilmThicknessTexture = bb
              }
            },
            metadata: bb
          }, Vc, Jc), (0, Oy.j)(yb, null, AU, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: yb => "thinFilmIor" in yb,
              get: yb => yb.thinFilmIor,
              set: (yb, bb) => {
                yb.thinFilmIor = bb
              }
            },
            metadata: bb
          }, gP, Gc), (0, Oy.j)(yb, null, dU, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "ambientOcclusionTexture" in yb,
              get: yb => yb.ambientOcclusionTexture,
              set: (yb, bb) => {
                yb.ambientOcclusionTexture = bb
              }
            },
            metadata: bb
          }, Oc, Rc), (0, Oy.j)(yb, null, yf, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: yb => "directIntensity" in yb,
              get: yb => yb.directIntensity,
              set: (yb, bb) => {
                yb.directIntensity = bb
              }
            },
            metadata: bb
          }, vP, iP), (0, Oy.j)(yb, null, bf, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: yb => "environmentIntensity" in yb,
              get: yb => yb.environmentIntensity,
              set: (yb, bb) => {
                yb.environmentIntensity = bb
              }
            },
            metadata: bb
          }, Mc, Yc), (0, Oy.j)(yb, null, Wh, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "useSpecularWeightFromTextureAlpha" in yb,
              get: yb => yb.useSpecularWeightFromTextureAlpha,
              set: (yb, bb) => {
                yb.useSpecularWeightFromTextureAlpha = bb
              }
            },
            metadata: bb
          }, Xc, nc), (0, Oy.j)(yb, null, Uh, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: yb => "forceAlphaTest" in yb,
              get: yb => yb.forceAlphaTest,
              set: (yb, bb) => {
                yb.forceAlphaTest = bb
              }
            },
            metadata: bb
          }, uc, rP), (0, Oy.j)(yb, null, hh, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: yb => "alphaCutOff" in yb,
              get: yb => yb.alphaCutOff,
              set: (yb, bb) => {
                yb.alphaCutOff = bb
              }
            },
            metadata: bb
          }, Hc, aP), (0, Oy.j)(yb, null, fh, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: yb => "useAmbientOcclusionFromMetallicTextureRed" in yb,
              get: yb => yb.useAmbientOcclusionFromMetallicTextureRed,
              set: (yb, bb) => {
                yb.useAmbientOcclusionFromMetallicTextureRed = bb
              }
            },
            metadata: bb
          }, Fc, pc), (0, Oy.j)(yb, null, Zh, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: yb => "useAmbientInGrayScale" in yb,
              get: yb => yb.useAmbientInGrayScale,
              set: (yb, bb) => {
                yb.useAmbientInGrayScale = bb
              }
            },
            metadata: bb
          }, Lc, Qc), (0, Oy.j)(yb, null, cf, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: yb => "usePhysicalLightFalloff" in yb,
              get: yb => yb.usePhysicalLightFalloff
            },
            metadata: bb
          }, null, nh), (0, Oy.j)(yb, null, Ph, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: yb => "useGLTFLightFalloff" in yb,
              get: yb => yb.useGLTFLightFalloff
            },
            metadata: bb
          }, null, nh), (0, Oy.j)(yb, null, oh, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "useObjectSpaceNormalMap" in yb,
              get: yb => yb.useObjectSpaceNormalMap,
              set: (yb, bb) => {
                yb.useObjectSpaceNormalMap = bb
              }
            },
            metadata: bb
          }, jP, Dc), (0, Oy.j)(yb, null, Bh, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: yb => "useParallax" in yb,
              get: yb => yb.useParallax,
              set: (yb, bb) => {
                yb.useParallax = bb
              }
            },
            metadata: bb
          }, tP, wc), (0, Oy.j)(yb, null, Kh, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: yb => "useParallaxOcclusion" in yb,
              get: yb => yb.useParallaxOcclusion,
              set: (yb, bb) => {
                yb.useParallaxOcclusion = bb
              }
            },
            metadata: bb
          }, kP, Nc), (0, Oy.j)(yb, null, eh, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: yb => "parallaxScaleBias" in yb,
              get: yb => yb.parallaxScaleBias,
              set: (yb, bb) => {
                yb.parallaxScaleBias = bb
              }
            },
            metadata: bb
          }, zP, Ic), (0, Oy.j)(yb, null, qf, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "disableLighting" in yb,
              get: yb => yb.disableLighting,
              set: (yb, bb) => {
                yb.disableLighting = bb
              }
            },
            metadata: bb
          }, xP, Ac), (0, Oy.j)(yb, null, sh, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: yb => "forceIrradianceInFragment" in yb,
              get: yb => yb.forceIrradianceInFragment,
              set: (yb, bb) => {
                yb.forceIrradianceInFragment = bb
              }
            },
            metadata: bb
          }, dc, yo), (0, Oy.j)(yb, null, Sh, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: yb => "maxSimultaneousLights" in yb,
              get: yb => yb.maxSimultaneousLights,
              set: (yb, bb) => {
                yb.maxSimultaneousLights = bb
              }
            },
            metadata: bb
          }, bo, WP), (0, Oy.j)(yb, null, Eh, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: yb => "invertNormalMapX" in yb,
              get: yb => yb.invertNormalMapX,
              set: (yb, bb) => {
                yb.invertNormalMapX = bb
              }
            },
            metadata: bb
          }, UP, hP), (0, Oy.j)(yb, null, lh, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: yb => "invertNormalMapY" in yb,
              get: yb => yb.invertNormalMapY,
              set: (yb, bb) => {
                yb.invertNormalMapY = bb
              }
            },
            metadata: bb
          }, fP, ZP), (0, Oy.j)(yb, null, mf, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "twoSidedLighting" in yb,
              get: yb => yb.twoSidedLighting,
              set: (yb, bb) => {
                yb.twoSidedLighting = bb
              }
            },
            metadata: bb
          }, co, PP), (0, Oy.j)(yb, null, Ch, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: yb => "useAlphaFresnel" in yb,
              get: yb => yb.useAlphaFresnel,
              set: (yb, bb) => {
                yb.useAlphaFresnel = bb
              }
            },
            metadata: bb
          }, oP, BP), (0, Oy.j)(yb, null, Th, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: yb => "useLinearAlphaFresnel" in yb,
              get: yb => yb.useLinearAlphaFresnel,
              set: (yb, bb) => {
                yb.useLinearAlphaFresnel = bb
              }
            },
            metadata: bb
          }, KP, eP), (0, Oy.j)(yb, null, Vh, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "environmentBRDFTexture" in yb,
              get: yb => yb.environmentBRDFTexture,
              set: (yb, bb) => {
                yb.environmentBRDFTexture = bb
              }
            },
            metadata: bb
          }, qo, sP), (0, Oy.j)(yb, null, Jh, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: yb => "forceNormalForward" in yb,
              get: yb => yb.forceNormalForward,
              set: (yb, bb) => {
                yb.forceNormalForward = bb
              }
            },
            metadata: bb
          }, SP, EP), (0, Oy.j)(yb, null, gf, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: yb => "enableSpecularAntiAliasing" in yb,
              get: yb => yb.enableSpecularAntiAliasing,
              set: (yb, bb) => {
                yb.enableSpecularAntiAliasing = bb
              }
            },
            metadata: bb
          }, lP, mo), (0, Oy.j)(yb, null, Gh, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: yb => "useHorizonOcclusion" in yb,
              get: yb => yb.useHorizonOcclusion,
              set: (yb, bb) => {
                yb.useHorizonOcclusion = bb
              }
            },
            metadata: bb
          }, CP, TP), (0, Oy.j)(yb, null, Oh, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: yb => "useRadianceOcclusion" in yb,
              get: yb => yb.useRadianceOcclusion,
              set: (yb, bb) => {
                yb.useRadianceOcclusion = bb
              }
            },
            metadata: bb
          }, VP, JP), (0, Oy.j)(yb, null, Rh, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: yb => "unlit" in yb,
              get: yb => yb.unlit,
              set: (yb, bb) => {
                yb.unlit = bb
              }
            },
            metadata: bb
          }, go, GP), (0, Oy.j)(yb, null, vf, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "applyDecalMapAfterDetailMap" in yb,
              get: yb => yb.applyDecalMapAfterDetailMap,
              set: (yb, bb) => {
                yb.applyDecalMapAfterDetailMap = bb
              }
            },
            metadata: bb
          }, OP, RP), (0, Oy.j)(yb, null, Mh, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "debugMode" in yb,
              get: yb => yb.debugMode,
              set: (yb, bb) => {
                yb.debugMode = bb
              }
            },
            metadata: bb
          }, vo, io), (0, Oy.j)(yb, null, Yh, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: yb => "transparencyMode" in yb,
              get: yb => yb.transparencyMode
            },
            metadata: bb
          }, null, nh), bb && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bb
          })
        })(), yb.SSS_QUALITY_LOW = 0, yb.SSS_QUALITY_MEDIUM = 1, yb.SSS_QUALITY_HIGH = 2, yb._noiseTextures = {}, yb.ForceGLSL = !1, yb._ShaderLoader = new eb.d((() => [Promise.all([Wy.e(295), Wy.e(361)]).then((() => Wy(60323))), Promise.all([Wy.e(300), Wy.e(296), Wy.e(360), Wy.e(365)]).then((() => Wy(60336)))]), (() => [Promise.all([Wy.e(314), Wy.e(316), Wy.e(364)]).then((() => Wy(60378))), Promise.all([Wy.e(314), Wy.e(317), Wy.e(363), Wy.e(366)]).then((() => Wy(60389)))])), yb
      })(),
      db = !1;
    db || (db = !0, (0, Ny.f)(), (0, Qb.e)("BABYLON.OpenPBRMaterial", Ab));
    var yU = Wy(35893);
    class bU {
      constructor(yb) {
        this.name = ub.b.NAME_PROCEDURALTEXTURE, this.Pf = yb
      }
      register() {
        this.Pf._beforeClearStage.registerStep(ub.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Pf.proceduralTexturesEnabled) {
          Gb.k.StartPerformanceCounter("Procedural textures", this.Pf.proceduralTextures.length > 0);
          for (let yb = 0; yb < this.Pf.proceduralTextures.length; yb++) {
            const bb = this.Pf.proceduralTextures[yb];
            bb._shouldRender() && bb.render()
          }
          Gb.k.EndPerformanceCounter("Procedural textures", this.Pf.proceduralTextures.length > 0)
        }
      }
    }
    var WW = Wy(38822);
    let UW = (() => {
      var yb;
      let bb, Uy, hy, Zy, cb, Py = My.f,
        oy = [],
        By = [],
        Ky = [],
        ey = [],
        qb = [],
        sy = [],
        Ey = [],
        ly = [],
        mb = [];
      return yb = class extends Py {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(yb, bb, Wy, Uy) {
          let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Uy, !fy), this.isEnabled = ((0, Oy.l)(this, oy), (0, Oy.l)(this, By, !0)), this.autoClear = ((0, Oy.l)(this, Ky), (0, Oy.l)(this, ey, !0)), this.onGenerated = (0, Oy.l)(this, qb), this.onGeneratedObservable = new yU.c, this.onBeforeGenerationObservable = new yU.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Oy.l)(this, sy, void 0), this._drawWrapper = (0, Oy.l)(this, Ey), this._textures = {}, this._size = (0, Oy.l)(this, ly, void 0), this._textureType = (0, Oy.l)(this, mb), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === hy || hy instanceof My.f ? (this._options = {}, this._fallbackTexture = hy) : (this._options = hy, this._fallbackTexture = hy.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Py = (Uy = this.kWy() || Sy.c.LastCreatedScene)._getComponent(ub.b.NAME_PROCEDURALTEXTURE);
          Py || (Py = new bU(Uy), Uy.Foy(Py)), this._options.skipSceneRegistration || Uy.proceduralTextures.push(this), this._fullEngine = Uy.xh(), this.name = yb, this.isRenderTarget = !0, this._size = bb, this._textureType = cb, this._generateMipMaps = fy, this._drawWrapper = new WW.c(this._fullEngine), this.setFragment(Wy);
          const Cy = this._createRtWrapper(Zy, bb, fy, cb);
          this._texture = Cy.texture;
          const Ty = [];
          Ty.push(1, 1), Ty.push(-1, 1), Ty.push(-1, -1), Ty.push(1, -1), this._vertexBuffers[py.k.PositionKind] = new py.k(this._fullEngine, Ty, py.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(yb, bb, Wy, Uy) {
          return yb ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(bb, {
            generateMipMaps: Wy,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Uy,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(bb, {
            generateMipMaps: Wy,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Uy,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(yb) {
          this._drawWrapper.effect = yb
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((yb => {
            this._contentData = this.readPixels(0, 0, yb), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const yb = this._fullEngine,
            bb = [];
          bb.push(0), bb.push(1), bb.push(2), bb.push(0), bb.push(2), bb.push(3), this._indexBuffer = yb.createIndexBuffer(bb)
        }
        _rebuild() {
          const yb = this._vertexBuffers[py.k.PositionKind];
          yb && yb._rebuild(), this._createIndexBuffer(), this.refreshRate === Ob.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Ob.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(yb) {
          if (this.isReady()) return void yb(this);
          const bb = this.getEffect();
          bb && bb.executeWhenCompiled((() => {
            yb(this)
          }))
        }
        isReady() {
          const yb = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const bb = this._getDefines();
          if (this._drawWrapper.effect && bb === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Uy = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== bb && (this._cachedDefines = bb, this._drawWrapper.effect = yb.createEffect(Uy, [py.k.PositionKind], this._uniforms, this._samplers, bb, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Wy.e(369).then((() => Wy(60447))), this._options.extraInitializationsAsync()]) : await Promise.all([Wy.e(370).then((() => Wy(60455))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Wy.e(369).then((() => Wy(60447))) : await Wy.e(370).then((() => Wy(60455)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(yb) {
          this._fragment = yb
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(yb) {
          this._refreshRate = yb, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(yb, bb) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Wy = this._texture.isCube;
          this._rtWrapper.dispose();
          const Uy = this._createRtWrapper(Wy, yb, bb, this._textureType);
          this._texture = Uy.texture, this._size = yb, this._generateMipMaps = bb
        }
        _checkUniform(yb) {
          -1 === this._uniforms.indexOf(yb) && this._uniforms.push(yb)
        }
        setTexture(yb, bb) {
          return -1 === this._samplers.indexOf(yb) && this._samplers.push(yb), this._textures[yb] = bb, this
        }
        setFloat(yb, bb) {
          return this._checkUniform(yb), this._floats[yb] = bb, this
        }
        setInt(yb, bb) {
          return this._checkUniform(yb), this._ints[yb] = bb, this
        }
        setFloats(yb, bb) {
          return this._checkUniform(yb), this._floatsArrays[yb] = bb, this
        }
        setColor3(yb, bb) {
          return this._checkUniform(yb), this._colors3[yb] = bb, this
        }
        setColor4(yb, bb) {
          return this._checkUniform(yb), this._colors4[yb] = bb, this
        }
        setVector2(yb, bb) {
          return this._checkUniform(yb), this._vectors2[yb] = bb, this
        }
        setVector3(yb, bb) {
          return this._checkUniform(yb), this._vectors3[yb] = bb, this
        }
        setVector4(yb, bb) {
          return this._checkUniform(yb), this._vectors4[yb] = bb, this
        }
        setMatrix(yb, bb) {
          return this._checkUniform(yb), this._matrices[yb] = bb, this
        }
        render(yb) {
          const bb = this.kWy();
          if (!bb) return;
          const Wy = this._fullEngine;
          if (Wy.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Wy.setState(!1), !this.nodeMaterialSource) {
            for (const yb in this._textures) this._drawWrapper.effect.setTexture(yb, this._textures[yb]);
            for (const yb in this._ints) this._drawWrapper.effect.setInt(yb, this._ints[yb]);
            for (const yb in this._floats) this._drawWrapper.effect.setFloat(yb, this._floats[yb]);
            for (const yb in this._floatsArrays) this._drawWrapper.effect.setArray(yb, this._floatsArrays[yb]);
            for (const yb in this._colors3) this._drawWrapper.effect.setColor3(yb, this._colors3[yb]);
            for (const yb in this._colors4) {
              const bb = this._colors4[yb];
              this._drawWrapper.effect.setFloat4(yb, bb.r, bb.g, bb.b, bb.a)
            }
            for (const yb in this._vectors2) this._drawWrapper.effect.setVector2(yb, this._vectors2[yb]);
            for (const yb in this._vectors3) this._drawWrapper.effect.setVector3(yb, this._vectors3[yb]);
            for (const yb in this._vectors4) this._drawWrapper.effect.setVector4(yb, this._vectors4[yb]);
            for (const yb in this._matrices) this._drawWrapper.effect.setMatrix(yb, this._matrices[yb])
          }
          if (!this._texture || !this._rtWrapper) return;
          Wy._enableGPUDebugMarkers && Wy._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Uy = Wy.currentViewport;
          if (this.isCube)
            for (let hy = 0; hy < 6; hy++) Wy.bindFramebuffer(this._rtWrapper, hy, void 0, void 0, !0), Wy.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", hy), this.autoClear && Wy.clear(bb.clearColor, !0, !1, !1), Wy.drawElementsType(fy.e.TriangleFillMode, 0, 6), Wy.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let yb = 1;
            this._rtWrapper.is3D ? yb = this._rtWrapper.depth : this._rtWrapper.is2DArray && (yb = this._rtWrapper.layers);
            for (let Uy = 0; Uy < yb; Uy++) {
              if (Wy.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Uy), Wy.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== yb ? Uy / (yb - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Uy);
                for (const yb in this._textures) this._drawWrapper.effect.setTexture(yb, this._textures[yb])
              }
              this.autoClear && Wy.clear(bb.clearColor, !0, !1, !1), Wy.drawElementsType(fy.e.TriangleFillMode, 0, 6), Wy.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Uy && Wy.setViewport(Uy), this.isCube && Wy.generateMipMapsForCubemap(this._texture, !0), Wy._enableGPUDebugMarkers && Wy._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const bb = this.getSize(),
            Wy = new yb(this.name, bb.width, this._fragment, this.kWy(), this._fallbackTexture, this._generateMipMaps);
          return Wy.hasAlpha = this.hasAlpha, Wy.level = this.level, Wy.coordinatesMode = this.coordinatesMode, Wy
        }
        dispose() {
          const yb = this.kWy();
          if (!yb) return;
          const bb = yb.proceduralTextures.indexOf(this);
          bb >= 0 && yb.proceduralTextures.splice(bb, 1);
          const Wy = this._vertexBuffers[py.k.PositionKind];
          Wy && (Wy.dispose(), this._vertexBuffers[py.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Wy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Py[Symbol.metadata] ?? null) : void 0;
        bb = [(0, Ry.T)()], Uy = [(0, Ry.T)()], hy = [(0, Ry.T)()], Zy = [(0, Ry.T)()], cb = [(0, Ry.T)()], (0, Oy.j)(yb, null, cb, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: yb => "refreshRate" in yb,
            get: yb => yb.refreshRate
          },
          metadata: Wy
        }, null, oy), (0, Oy.j)(null, null, bb, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: Wy
        }, By, Ky), (0, Oy.j)(null, null, Uy, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: yb => "autoClear" in yb,
            get: yb => yb.autoClear,
            set: (yb, bb) => {
              yb.autoClear = bb
            }
          },
          metadata: Wy
        }, ey, qb), (0, Oy.j)(null, null, hy, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: yb => "_generateMipMaps" in yb,
            get: yb => yb._generateMipMaps,
            set: (yb, bb) => {
              yb._generateMipMaps = bb
            }
          },
          metadata: Wy
        }, sy, Ey), (0, Oy.j)(null, null, Zy, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: yb => "_size" in yb,
            get: yb => yb._size,
            set: (yb, bb) => {
              yb._size = bb
            }
          },
          metadata: Wy
        }, ly, mb), Wy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wy
        })
      })(), yb
    })();

    function hW(yb) {
      return "texture" in yb
    }

    function fW(yb) {
      return "value" in yb
    }
    async function ZW(yb, bb, Uy) {
      const hy = [bb.red, bb.green, bb.blue, bb.alpha],
        fy = [],
        Zy = [];
      for (let Wy = 0; Wy < 4; Wy++) {
        const yb = hy[Wy];
        if (yb)
          if (hW(yb)) {
            if (yb.sourceChannel < 0 || yb.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let bb = fy.indexOf(yb.texture); - 1 === bb && (bb = fy.length, fy.push(yb.texture)), Zy[Wy] = bb
          } else {
            if (!fW(yb)) throw new Error("Invalid channel input configuration");
            if (yb.value < 0 || yb.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Zy[Wy] = -1
          }
        else Zy[Wy] = -1
      }
      let cb = bb.outputSize;
      if (!cb && fy.length > 0) {
        let yb = 0;
        for (const bb of fy) {
          const Wy = bb.getSize(),
            Uy = Math.max(Wy.width, Wy.height);
          Uy > yb && (yb = Uy, cb = Wy.width === Wy.height ? yb : Wy)
        }
      }
      cb = cb || 512;
      const Py = [],
        oy = new Set;
      for (let Wy = 0; Wy < 4; Wy++) {
        const yb = hy[Wy],
          bb = ["RED", "GREEN", "BLUE", "ALPHA"][Wy];
        if (yb && hW(yb)) {
          Py.push(`${bb}_FROM_TEXTURE`);
          const yb = Zy[Wy];
          oy.add(yb)
        }
      }
      oy.forEach((yb => {
        Py.push(`USE_TEXTURE${yb}`)
      }));
      const By = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Uy.xh().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Uy.xh().isWebGPU ? await Promise.all([Wy.e(367).then((() => Wy(60437)))]) : await Promise.all([Wy.e(368).then((() => Wy(60441)))])
          },
          skipSceneRegistration: !0
        },
        Ky = new UW(yb, cb, "textureMerger", Uy, By);
      Ky.refreshRate = -1, Ky.defines = Py.length > 0 ? "#define " + Py.join("\n#define ") + "\n" : "";
      for (let Wy = 0; Wy < fy.length; Wy++) ey = fy[Wy], (qb = Ky).uOffset = ey.uOffset, qb.vOffset = ey.vOffset, qb.uScale = ey.uScale, qb.vScale = ey.vScale, qb.uAng = ey.uAng, qb.vAng = ey.vAng, qb.wAng = ey.wAng, qb.uRotationCenter = ey.uRotationCenter, qb.vRotationCenter = ey.vRotationCenter, Ky.setTexture(`inputTexture${Wy}`, fy[Wy]);
      var ey, qb;
      for (let Wy = 0; Wy < 4; Wy++) {
        const yb = hy[Wy],
          bb = ["red", "green", "blue", "alpha"][Wy];
        if (yb && hW(yb)) {
          const Uy = Zy[Wy];
          Ky.setInt(`${bb}TextureIndex`, Uy), Ky.setInt(`${bb}SourceChannel`, yb.sourceChannel)
        } else {
          let Uy;
          Uy = yb && fW(yb) ? yb.value : 3 === Wy ? 1 : 0, Ky.setFloat(`${bb}ConstantValue`, Uy)
        }
      }
      return await new Promise(((yb, bb) => {
        Ky.executeWhenReady((() => {
          try {
            Ky.render(), yb(Ky)
          } catch (Wy) {
            bb(Wy instanceof Error ? Wy : new Error(String(Wy)))
          }
        }))
      }))
    }

    function cU(yb, bb) {
      return {
        texture: yb,
        sourceChannel: bb
      }
    }

    function PW(yb) {
      return {
        value: yb
      }
    }

    function oW(yb, bb, Wy, Uy) {
      return {
        red: yb,
        green: bb,
        blue: Wy,
        alpha: Uy
      }
    }
    var BW = Wy(38281),
      KW = Wy(38399),
      eW = Wy(35877),
      qU = Wy(38451),
      sW = Wy(38383);
    class SW {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class EW extends BW.b {
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
        return !!this._options?.enableMultiview || this.vf > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new SW;
        super(null), void 0 === yb.deterministicLockstep && (yb.deterministicLockstep = !1), void 0 !== yb.timeStep && (this._timeStep = yb.timeStep), void 0 === yb.lockstepMaxSteps && (yb.lockstepMaxSteps = 4), this._options = yb, eW.c.SetMatrixPrecision(!!yb.useHighPrecisionMatrix), this._caps = {
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
        }, yb.enableMultiview && (this._caps.multiview = {
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
        }, yb.renderingCanvas && (this._renderingCanvas = yb.renderingCanvas), vb.b.Log(`Babylon.js v${BW.b.Version} - Null engine`);
        const bb = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (bb.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (bb.Blob = function() {})
      }
      createVertexBuffer(yb) {
        const bb = new KW.e;
        return bb.references = 1, bb
      }
      createIndexBuffer(yb) {
        const bb = new KW.e;
        return bb.references = 1, bb
      }
      clear(yb, bb, Wy) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(yb, bb, Wy) {
        this._cachedViewport = yb
      }
      createUniformBuffer(yb) {
        const bb = new KW.e;
        return bb.references = 1, bb.Hy = yb instanceof Array ? yb.length * Float32Array.BYTES_PER_ELEMENT : yb.byteLength, bb
      }
      createDynamicUniformBuffer(yb) {
        return this.createUniformBuffer(yb)
      }
      updateUniformBuffer(yb, bb, Wy, Uy) {}
      bindUniformBufferBase(yb, bb, Wy) {}
      bindUniformBlock(yb, bb, Wy) {}
      createShaderProgram(yb, bb, Wy, Uy, hy) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(yb, bb) {
        return []
      }
      getAttributes(yb, bb) {
        return []
      }
      bindSamplers(yb) {
        this._currentEffect = null
      }
      enableEffect(yb) {
        yb = null !== yb && (0, sW.d)(yb) ? yb.effect : yb, this._currentEffect = yb, yb && (yb.onBind && yb.onBind(yb), yb._onBindObservable && yb._onBindObservable.notifyObservers(yb))
      }
      setStateCullFaceType(yb, bb) {}
      setState(yb) {}
      setIntArray(yb, bb) {
        return !0
      }
      setIntArray2(yb, bb) {
        return !0
      }
      setIntArray3(yb, bb) {
        return !0
      }
      setIntArray4(yb, bb) {
        return !0
      }
      setFloatArray(yb, bb) {
        return !0
      }
      setFloatArray2(yb, bb) {
        return !0
      }
      setFloatArray3(yb, bb) {
        return !0
      }
      setFloatArray4(yb, bb) {
        return !0
      }
      setArray(yb, bb) {
        return !0
      }
      setArray2(yb, bb) {
        return !0
      }
      setArray3(yb, bb) {
        return !0
      }
      setArray4(yb, bb) {
        return !0
      }
      setMatrices(yb, bb) {
        return !0
      }
      setMatrix3x3(yb, bb) {
        return !0
      }
      setMatrix2x2(yb, bb) {
        return !0
      }
      setFloat(yb, bb) {
        return !0
      }
      setFloat2(yb, bb, Wy) {
        return !0
      }
      setFloat3(yb, bb, Wy, Uy) {
        return !0
      }
      setBool(yb, bb) {
        return !0
      }
      setFloat4(yb, bb, Wy, Uy, hy) {
        return !0
      }
      setAlphaMode(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Wy] !== yb && (this.alphaState.setAlphaBlend(0 !== yb, 0), bb || this.setDepthWrite(0 === yb), this._alphaMode[Wy] = yb)
      }
      bindBuffers(yb, bb, Wy) {}
      wipeCaches(yb) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, yb && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(yb, bb, Wy, Uy) {}
      drawElementsType(yb, bb, Wy, Uy) {}
      drawArraysType(yb, bb, Wy, Uy) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(yb) {}
      createTexture(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Zy = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Py = new Rb.d(this, 1),
          oy = String(yb);
        return Py.url = oy, Py.generateMipMaps = !bb, Py.samplingMode = hy, Py.invertY = Wy, Py.baseWidth = this._options.textureSize, Py.baseHeight = this._options.textureSize, Py.width = this._options.textureSize, Py.height = this._options.textureSize, cb && (Py.format = cb), Zy && (Py._buffer = Zy), Py.isReady = !0, fy && setTimeout((() => {
          fy(Py)
        })), this._internalTexturesCache.push(Py), Py
      }
      _createHardwareRenderTargetWrapper(yb, bb, Wy) {
        const Uy = new qU.e(yb, bb, Wy, this);
        return this._renderTargetWrapperCache.push(Uy), Uy
      }
      createRenderTargetTexture(yb, bb) {
        const Wy = this._createHardwareRenderTargetWrapper(!1, !1, yb),
          Uy = {};
        void 0 !== bb && "object" === typeof bb ? (Uy.generateMipMaps = bb.generateMipMaps, Uy.generateDepthBuffer = void 0 === bb.generateDepthBuffer || bb.generateDepthBuffer, Uy.generateStencilBuffer = Uy.generateDepthBuffer && bb.generateStencilBuffer, Uy.type = void 0 === bb.type ? 0 : bb.type, Uy.samplingMode = void 0 === bb.samplingMode ? 3 : bb.samplingMode) : (Uy.generateMipMaps = bb, Uy.generateDepthBuffer = !0, Uy.generateStencilBuffer = !1, Uy.type = 0, Uy.samplingMode = 3);
        const hy = new Rb.d(this, 5);
        Wy.setTexture(hy);
        const fy = yb.width || yb,
          Zy = yb.height || yb;
        return Wy._generateDepthBuffer = Uy.generateDepthBuffer, Wy._generateStencilBuffer = !!Uy.generateStencilBuffer, hy.baseWidth = fy, hy.baseHeight = Zy, hy.width = fy, hy.height = Zy, hy.isReady = !0, hy.samples = 1, hy.generateMipMaps = !!Uy.generateMipMaps, hy.samplingMode = Uy.samplingMode, hy.type = Uy.type, this._internalTexturesCache.push(hy), Wy
      }
      createMultiviewRenderTargetTexture(yb, bb) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Wy = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: yb,
            height: bb
          }),
          Uy = new Rb.d(this, 5, !0);
        return Uy.baseWidth = yb, Uy.baseHeight = bb, Uy.width = yb, Uy.height = bb, Uy.isMultiview = !0, Uy.isReady = !0, Uy.format = 5, Uy.samples = 1, Wy.setTextures(Uy), Wy
      }
      bindMultiviewFramebuffer(yb) {
        this.bindFramebuffer(yb, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(yb, bb) {
        const Wy = this._createHardwareRenderTargetWrapper(!1, !0, yb),
          Uy = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...bb
          };
        Uy.generateStencilBuffer = Uy.generateDepthBuffer && Uy.generateStencilBuffer, (1 !== Uy.type || this._caps.textureFloatLinearFiltering) && (2 !== Uy.type || this._caps.textureHalfFloatLinearFiltering) || (Uy.samplingMode = 1), Wy._generateDepthBuffer = Uy.generateDepthBuffer, Wy._generateStencilBuffer = !!Uy.generateStencilBuffer;
        const hy = new Rb.d(this, 5);
        return hy.baseWidth = yb, hy.baseHeight = yb, hy.width = yb, hy.height = yb, hy.isReady = !0, hy.isCube = !0, hy.samples = 1, hy.generateMipMaps = !!Uy.generateMipMaps, hy.samplingMode = Uy.samplingMode, hy.type = Uy.type, this._internalTexturesCache.push(hy), Wy
      }
      updateTextureSamplingMode(yb, bb) {
        bb.samplingMode = yb
      }
      createRawTexture(yb, bb, Wy, Uy, hy, fy, Zy) {
        let cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Py = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          oy = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const By = new Rb.d(this, 3);
        return By.baseWidth = bb, By.baseHeight = Wy, By.width = bb, By.height = Wy, By.format = Uy, By.generateMipMaps = hy, By.samplingMode = Zy, By.invertY = fy, By._compression = cb, By.type = Py, By._useSRGBBuffer = oy, this._doNotHandleContextLost || (By._bufferView = yb), By
      }
      updateRawTexture(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        yb && (yb._bufferView = bb, yb.format = Wy, yb.invertY = Uy, yb._compression = hy, yb.type = fy, yb._useSRGBBuffer = Zy)
      }
      bindFramebuffer(yb, bb, Wy, Uy, hy) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = yb, this._currentFramebuffer = null, this._cachedViewport && !hy && this.setViewport(this._cachedViewport, Wy, Uy)
      }
      unBindFramebuffer(yb) {
        let bb = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, bb && bb(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(yb) {
        const bb = new KW.e;
        return bb.references = 1, bb.Hy = 1, bb
      }
      updateDynamicTexture(yb, bb, Wy) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(yb) {}
      updateDynamicIndexBuffer(yb, bb) {}
      updateDynamicVertexBuffer(yb, bb, Wy, Uy) {}
      _bindTextureDirectly(yb, bb) {
        return this._boundTexturesCache[this._activeChannel] !== bb && (this._boundTexturesCache[this._activeChannel] = bb, !0)
      }
      _bindTexture(yb, bb) {
        yb < 0 || this._bindTextureDirectly(0, bb)
      }
      _deleteBuffer(yb) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(yb) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(yb, bb, Wy, Uy, hy) {}
      _uploadDataToTextureDirectly(yb, bb) {}
      _uploadArrayBufferViewToTexture(yb, bb) {}
      _uploadImageToTexture(yb, bb) {}
    }
    Wy(38506), Wy(38555), Wy(38502);
    async function lW(yb) {
      const bb = yb.getInternalTexture();
      if (!bb || 1 !== bb.source) return null;
      if (bb.invertY) {
        const bb = yb.kWy()?.xh();
        if (!(bb instanceof EW)) return null
      }
      const Wy = bb._buffer;
      let Uy, fy = yb.mimeType;
      try {
        Wy ? ArrayBuffer.isView(Wy) ? Uy = Wy.buffer.slice(Wy.byteOffset, Wy.byteOffset + Wy.byteLength) : Wy instanceof ArrayBuffer ? Uy = Wy : Wy instanceof Blob ? (Uy = await Wy.arrayBuffer(), fy = Wy.type || fy) : "string" === typeof Wy ? (Uy = await hy.Tools.LoadFileAsync(Wy), fy = (0, Py.b)(Wy) || fy) : "undefined" !== typeof HTMLImageElement && Wy instanceof HTMLImageElement && (Uy = await hy.Tools.LoadFileAsync(Wy.src), fy = (0, Py.b)(Wy.src) || fy) : (Uy = await hy.Tools.LoadFileAsync(bb.url), fy = (0, Py.b)(bb.url) || fy)
      } catch {
        return null
      }
      if (Uy && !fy && bb.url) {
        const yb = bb.url.match(/^data:([^;,]+)/);
        fy = yb ? yb[1] : (0, Py.b)(bb.url)
      }
      return Uy && fy ? {
        data: Uy,
        mimeType: fy
      } : null
    }
    const mU = 1e-6,
      CW = new Ey.Color3(.04, .04, .04),
      TW = 1024,
      VW = Ey.Color3.White(),
      JW = Ey.Color3.BlackReadOnly;

    function gU(yb) {
      switch (yb) {
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

    function GW(yb, bb, Wy) {
      if (bb < CW.r) return 0;
      const Uy = CW.r,
        hy = yb * Wy / (1 - CW.r) + bb - 2 * CW.r,
        fy = hy * hy - 4 * Uy * (CW.r - bb);
      return Cy.Clamp((-hy + Math.sqrt(fy)) / (2 * Uy), 0, 1)
    }

    function OW(yb) {
      const bb = yb.diffuseColor.toLinearSpace(yb.kWy().xh().useExactSrgbConversions).scale(.5),
        Wy = yb.alpha,
        Uy = function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Fy.m(0, 1),
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Fy.m(0, .1),
            Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Fy.m(0, .1),
            hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Fy.m(1300, .1);
          return function(yb, bb, Wy, Uy, hy) {
            return (1 - yb) * (1 - yb) * (1 - yb) * bb + 3 * (1 - yb) * (1 - yb) * yb * Wy + 3 * (1 - yb) * yb * yb * Uy + yb * yb * yb * hy
          }(Math.pow(yb / hy.x, .333333), bb.y, Wy.y, Uy.y, hy.y)
        }(Cy.Clamp(yb.specularPower, 0, TW));
      return {
        baseColorFactor: [bb.r, bb.g, bb.b, Wy],
        metallicFactor: 0,
        roughnessFactor: Uy
      }
    }

    function RW(yb, bb) {
      bb.needAlphaBlending() ? yb.alphaMode = "BLEND" : bb.needAlphaTesting() && (yb.alphaMode = "MASK", yb.alphaCutoff = bb.alphaCutOff)
    }

    function vU(yb, bb, Wy) {
      const Uy = new Uint8Array(yb * bb * 4);
      for (let hy = 0; hy < Uy.length; hy += 4) Uy[hy] = Uy[hy + 1] = Uy[hy + 2] = Uy[hy + 3] = 255;
      return Jy.d.CreateRGBATexture(Uy, yb, bb, Wy)
    }

    function iU(yb) {
      if (yb instanceof Uint8Array) {
        const bb = yb.length,
          Wy = new Float32Array(yb.length);
        for (let Uy = 0; Uy < bb; ++Uy) Wy[Uy] = yb[Uy] / 255;
        return Wy
      }
      if (yb instanceof Float32Array) return yb;
      throw new Error("Unsupported pixel format!")
    }
    class MW {
      constructor(yb) {
        this._exporter = yb, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(yb) {
        return yb ? this._textureMap.get(yb.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(yb, bb) {
        const Wy = OW(yb),
          Uy = {
            name: yb.name
          };
        if (null == yb.backFaceCulling || yb.backFaceCulling || (yb.twoSidedLighting || hy.Tools.Warn(yb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Uy.doubleSided = !0), bb) {
          const bb = [],
            hy = yb.diffuseTexture;
          hy && bb.push(this.exportTextureAsync(hy).then((yb => {
            yb && (Wy.baseColorTexture = yb)
          })));
          const fy = yb.bumpTexture;
          fy && bb.push(this.exportTextureAsync(fy).then((yb => {
            yb && (Uy.normalTexture = yb, 1 !== fy.level && (Uy.normalTexture.scale = fy.level))
          })));
          const Zy = yb.emissiveTexture;
          Zy && (Uy.emissiveFactor = [1, 1, 1], bb.push(this.exportTextureAsync(Zy).then((yb => {
            yb && (Uy.emissiveTexture = yb)
          }))));
          const cb = yb.ambientTexture;
          cb && bb.push(this.exportTextureAsync(cb).then((yb => {
            if (yb) {
              const bb = {
                index: yb.index
              };
              Uy.occlusionTexture = bb
            }
          }))), bb.length > 0 && (this._exporter._materialNeedsUVsSet.add(yb), await Promise.all(bb))
        }(yb.alpha < 1 || yb.opacityTexture) && (yb.alphaMode === gb.b.ALPHA_COMBINE ? Uy.alphaMode = "BLEND" : hy.Tools.Warn(yb.name + ": glTF 2.0 does not support alpha mode: " + yb.alphaMode.toString())), yb.emissiveColor && !yb.emissiveColor.equalsWithEpsilon(JW, mU) && (Uy.emissiveFactor = yb.emissiveColor.hBy()), Uy.pbrMetallicRoughness = Wy, RW(Uy, yb), await this._finishMaterialAsync(Uy, yb);
        const fy = this._exporter._materials;
        return fy.push(Uy), fy.length - 1
      }
      async _finishMaterialAsync(yb, bb) {
        const Wy = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", yb, bb),
          Uy = [];
        for (const hy of Wy) Uy.push(this.exportTextureAsync(hy));
        await Promise.all(Uy), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", yb, bb)
      }
      _resizeTexturesToSameDimensions(yb, bb, Wy) {
        const Uy = yb ? yb.getSize() : {
            width: 0,
            height: 0
          },
          hy = bb ? bb.getSize() : {
            width: 0,
            height: 0
          };
        let fy, Zy;
        return Uy.width < hy.width ? (fy = yb && yb instanceof Vy.e ? Ty.l.CreateResizedCopy(yb, hy.width, hy.height, !0) : vU(hy.width, hy.height, Wy), Zy = bb) : Uy.width > hy.width ? (Zy = bb && bb instanceof Vy.e ? Ty.l.CreateResizedCopy(bb, Uy.width, Uy.height, !0) : vU(Uy.width, Uy.height, Wy), fy = yb) : (fy = yb, Zy = bb), {
          texture1: fy,
          texture2: Zy
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(yb, bb, Wy) {
        const Uy = new Array;
        if (!yb && !bb) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const hy = yb ? yb.kWy() : bb ? bb.kWy() : null;
        if (hy) {
          const fy = this._resizeTexturesToSameDimensions(yb, bb, hy),
            Zy = fy.texture1?.getSize();
          let cb, Py;
          const oy = Zy.width,
            By = Zy.height,
            Ky = await fy.texture1.readPixels(),
            ey = await fy.texture2.readPixels();
          if (!Ky) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (cb = iU(Ky), !ey) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Py = iU(ey);
          const qb = Py.byteLength,
            sy = new Uint8Array(qb),
            Sy = new Uint8Array(qb),
            ly = 4,
            mb = new Ey.Color3(0, 0, 0);
          let Cy = 0,
            Ty = 0;
          for (let yb = 0; yb < By; ++yb)
            for (let bb = 0; bb < oy; ++bb) {
              const Uy = (oy * yb + bb) * ly,
                Zy = {
                  diffuseColor: new Ey.Color3(cb[Uy], cb[Uy + 1], cb[Uy + 2]).toLinearSpace(hy.xh().useExactSrgbConversions).multiply(Wy.diffuseColor),
                  specularColor: new Ey.Color3(Py[Uy], Py[Uy + 1], Py[Uy + 2]).toLinearSpace(hy.xh().useExactSrgbConversions).multiply(Wy.specularColor),
                  glossiness: Py[Uy + 3] * Wy.glossiness
                },
                By = this._convertSpecularGlossinessToMetallicRoughness(Zy);
              mb.r = Math.max(mb.r, By.baseColor.r), mb.g = Math.max(mb.g, By.baseColor.g), mb.b = Math.max(mb.b, By.baseColor.b), Cy = Math.max(Cy, By.metallic), Ty = Math.max(Ty, By.roughness), Sy[Uy] = 255 * By.baseColor.r, Sy[Uy + 1] = 255 * By.baseColor.g, Sy[Uy + 2] = 255 * By.baseColor.b, Sy[Uy + 3] = fy.texture1.hasAlpha ? 255 * cb[Uy + 3] : 255, sy[Uy] = 0, sy[Uy + 1] = 255 * By.roughness, sy[Uy + 2] = 255 * By.metallic, sy[Uy + 3] = 255
            }
          const Vy = {
            baseColor: mb,
            metallic: Cy,
            roughness: Ty
          };
          let Jy = !1,
            gb = !1;
          for (let yb = 0; yb < By; ++yb)
            for (let bb = 0; bb < oy; ++bb) {
              const Wy = (oy * yb + bb) * ly;
              Sy[Wy] /= Vy.baseColor.r > mU ? Vy.baseColor.r : 1, Sy[Wy + 1] /= Vy.baseColor.g > mU ? Vy.baseColor.g : 1, Sy[Wy + 2] /= Vy.baseColor.b > mU ? Vy.baseColor.b : 1;
              const Uy = Ey.Color3.FromInts(Sy[Wy], Sy[Wy + 1], Sy[Wy + 2]).toGammaSpace(hy.xh().useExactSrgbConversions);
              Sy[Wy] = 255 * Uy.r, Sy[Wy + 1] = 255 * Uy.g, Sy[Wy + 2] = 255 * Uy.b, Uy.equalsWithEpsilon(VW, mU) || (gb = !0), sy[Wy + 1] /= Vy.roughness > mU ? Vy.roughness : 1, sy[Wy + 2] /= Vy.metallic > mU ? Vy.metallic : 1;
              Ey.Color3.FromInts(255, sy[Wy + 1], sy[Wy + 2]).equalsWithEpsilon(VW, mU) || (Jy = !0)
            }
          return Jy && Uy.push((0, Gy.EncodeImageAsync)(sy, oy, By).then((yb => {
            Vy.metallicRoughnessTextureData = yb
          }))), gb && Uy.push((0, Gy.EncodeImageAsync)(Sy, oy, By).then((yb => {
            Vy.baseColorTextureData = yb
          }))), await Promise.all(Uy).then((() => Vy))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(yb) {
        const bb = this._getPerceivedBrightness(yb.diffuseColor),
          Wy = this._getPerceivedBrightness(yb.specularColor),
          Uy = 1 - this._getMaxComponent(yb.specularColor),
          hy = GW(bb, Wy, Uy),
          fy = yb.diffuseColor.scale(Uy / (1 - CW.r) / Math.max(1 - hy, mU)),
          Zy = yb.specularColor.subtract(CW.scale(1 - hy)).scale(1 / Math.max(hy, mU));
        let cb = Ey.Color3.Lerp(fy, Zy, hy * hy);
        cb = cb.clampToRef(0, 1, cb);
        return {
          baseColor: cb,
          metallic: hy,
          roughness: 1 - yb.glossiness
        }
      }
      _getPerceivedBrightness(yb) {
        return Math.sqrt(.299 * yb.r * yb.r + .587 * yb.g * yb.g + .114 * yb.b * yb.b)
      }
      _getMaxComponent(yb) {
        return Math.max(yb.r, Math.max(yb.g, yb.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = [],
          By = {
            baseColor: yb,
            metallic: bb,
            roughness: Wy
          };
        if (Py)
          if (Zy instanceof Ab) {
            if (Zy.geometryOpacityTexture) {
              const yb = Uy && Uy.getInternalTexture() ? Uy.getInternalTexture().uniqueId : 0,
                bb = Zy.geometryOpacityTexture && Zy.geometryOpacityTexture.getInternalTexture() ? Zy.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Wy = Number(`${yb}${bb}`),
                hy = this._textureMap.get(Wy);
              hy ? cb.baseColorTexture = hy : oy.push(ZW("baseColorOpacityTexture", oW(Uy ? cU(Uy, 0) : PW(1), Uy ? cU(Uy, 1) : PW(1), Uy ? cU(Uy, 2) : PW(1), cU(Zy.geometryOpacityTexture, 0)), Zy.kWy()).then((async yb => {
                const bb = await this.exportTextureAsync(yb, Wy);
                bb && (cb.baseColorTexture = bb)
              })))
            } else Uy && oy.push(this.exportTextureAsync(Uy).then((yb => {
              yb && (cb.baseColorTexture = yb)
            })));
            if (Zy._useMetallicFromMetallicTextureBlue && hy) oy.push(this.exportTextureAsync(hy).then((yb => {
              yb && (cb.metallicRoughnessTexture = yb)
            })));
            else if (fy || hy) {
              const yb = hy && hy.getInternalTexture() ? hy.getInternalTexture().uniqueId : 0,
                bb = fy && fy.getInternalTexture() ? fy.getInternalTexture().uniqueId : 0,
                Wy = Number(`${yb}${bb}`),
                Uy = this._textureMap.get(Wy);
              Uy ? cb.metallicRoughnessTexture = Uy : oy.push(ZW("MetalRoughTexture", oW(Zy.ambientOcclusionTexture ? cU(Zy.ambientOcclusionTexture, 0) : PW(1), fy ? cU(fy, 0) : PW(1), hy ? cU(hy, 0) : PW(1)), Zy.kWy()).then((async yb => {
                const bb = await this.exportTextureAsync(yb, Wy);
                bb && (cb.metallicRoughnessTexture = bb)
              })))
            }
          } else Uy && oy.push(this.exportTextureAsync(Uy).then((yb => {
            yb && (cb.baseColorTexture = yb)
          }))), hy && oy.push(this.exportTextureAsync(hy).then((yb => {
            yb && (cb.metallicRoughnessTexture = yb)
          })));
        return oy.length > 0 && (this._exporter._materialNeedsUVsSet.add(Zy), await Promise.all(oy)), By
      }
      _getTextureSampler(yb) {
        const bb = {};
        if (!yb || !(yb instanceof Vy.e)) return bb;
        const Wy = this._getGLTFTextureWrapMode(yb.wrapU);
        10497 !== Wy && (bb.wrapS = Wy);
        const Uy = this._getGLTFTextureWrapMode(yb.wrapV);
        switch (10497 !== Uy && (bb.wrapT = Uy), yb.samplingMode) {
          case Vy.e.LINEAR_LINEAR:
            bb.magFilter = 9729, bb.minFilter = 9729;
            break;
          case Vy.e.LINEAR_NEAREST:
            bb.magFilter = 9729, bb.minFilter = 9728;
            break;
          case Vy.e.NEAREST_LINEAR:
            bb.magFilter = 9728, bb.minFilter = 9729;
            break;
          case Vy.e.NEAREST_LINEAR_MIPLINEAR:
            bb.magFilter = 9728, bb.minFilter = 9987;
            break;
          case Vy.e.NEAREST_NEAREST:
            bb.magFilter = 9728, bb.minFilter = 9728;
            break;
          case Vy.e.NEAREST_LINEAR_MIPNEAREST:
            bb.magFilter = 9728, bb.minFilter = 9985;
            break;
          case Vy.e.LINEAR_NEAREST_MIPNEAREST:
            bb.magFilter = 9729, bb.minFilter = 9984;
            break;
          case Vy.e.LINEAR_NEAREST_MIPLINEAR:
            bb.magFilter = 9729, bb.minFilter = 9986;
            break;
          case Vy.e.NEAREST_NEAREST_MIPLINEAR:
            bb.magFilter = 9728, bb.minFilter = 9986;
            break;
          case Vy.e.LINEAR_LINEAR_MIPLINEAR:
            bb.magFilter = 9729, bb.minFilter = 9987;
            break;
          case Vy.e.LINEAR_LINEAR_MIPNEAREST:
            bb.magFilter = 9729, bb.minFilter = 9985;
            break;
          case Vy.e.NEAREST_NEAREST_MIPNEAREST:
            bb.magFilter = 9728, bb.minFilter = 9984
        }
        return bb
      }
      _getGLTFTextureWrapMode(yb) {
        switch (yb) {
          case Vy.e.WRAP_ADDRESSMODE:
            return 10497;
          case Vy.e.CLAMP_ADDRESSMODE:
            return 33071;
          case Vy.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return hy.Tools.Error(`Unsupported Texture Wrap Mode ${yb}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(yb, bb, Wy) {
        const Uy = {
            diffuseColor: yb._albedoColor,
            specularColor: yb._reflectivityColor,
            glossiness: yb._microSurface
          },
          hy = yb._albedoTexture,
          fy = yb._reflectivityTexture,
          Zy = yb._useMicroSurfaceFromReflectivityMapAlpha;
        if (fy && !Zy) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((hy || fy) && Wy) {
          this._exporter._materialNeedsUVsSet.add(yb);
          const Wy = this._exportTextureSampler(hy || fy),
            Zy = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(hy, fy, Uy),
            cb = this._exporter._textures;
          if (Zy.baseColorTextureData) {
            const yb = await this._exportImageAsync(`baseColor${cb.length}`, Zy.baseColorTextureData);
            bb.baseColorTexture = this._exportTextureInfo(yb, Wy, hy?.coordinatesIndex)
          }
          if (Zy.metallicRoughnessTextureData) {
            const yb = await this._exportImageAsync(`metallicRoughness${cb.length}`, Zy.metallicRoughnessTextureData);
            bb.metallicRoughnessTexture = this._exportTextureInfo(yb, Wy, fy?.coordinatesIndex)
          }
          return Zy
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Uy)
      }
      async exportPBRMaterialAsync(yb, bb) {
        const Wy = {},
          Uy = {
            name: yb.name
          },
          hy = yb.isMetallicWorkflow();
        if (hy) {
          const bb = yb._albedoColor,
            Uy = yb.alpha;
          bb && (Wy.baseColorFactor = [bb.r, bb.g, bb.b, Uy])
        }
        const fy = hy ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(yb._albedoColor, yb._metallic, yb._roughness, yb._albedoTexture, yb._metallicTexture, yb._metallicTexture, yb, Wy, bb) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(yb, Wy, bb);
        await this._setMetallicRoughnessPbrMaterialAsync(fy, yb, Uy, Wy, bb), await this._finishMaterialAsync(Uy, yb);
        const Zy = this._exporter._materials;
        return Zy.push(Uy), Zy.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(yb, bb, Wy, Uy, fy) {
        if (RW(Wy, bb), yb.baseColor.equalsWithEpsilon(VW, mU) && Cy.WithinEpsilon(bb.alpha, 1, mU) || (Uy.baseColorFactor = [yb.baseColor.r, yb.baseColor.g, yb.baseColor.b, bb.alpha]), null != yb.metallic && 1 !== yb.metallic && (Uy.metallicFactor = yb.metallic), null != yb.roughness && 1 !== yb.roughness && (Uy.roughnessFactor = yb.roughness), null == bb.backFaceCulling || bb.backFaceCulling || (bb._twoSidedLighting || hy.Tools.Warn(bb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Wy.doubleSided = !0), fy) {
          const yb = [],
            hy = bb instanceof Jb ? bb._bumpTexture : bb.geometryNormalTexture;
          hy && yb.push(this.exportTextureAsync(hy).then((yb => {
            yb && (Wy.normalTexture = yb, 1 !== hy.level && (Wy.normalTexture.scale = hy.level))
          })));
          const fy = bb instanceof Jb ? bb._ambientTexture : bb.ambientOcclusionTexture;
          fy && yb.push(new Promise((async yb => {
            if (bb instanceof Ab && Uy.metallicRoughnessTexture) {
              const bb = this._exportTextureSampler(fy),
                Wy = this._exporter._textures[Uy.metallicRoughnessTexture.index].source,
                hy = this._exportTextureInfo(Wy, bb, fy.coordinatesIndex);
              return this._textureMap.set(fy.uniqueId, hy), this._exporter._extensionsPostExportTextures("exporter", hy, fy), yb(hy)
            }
            return yb(await this.exportTextureAsync(fy))
          })).then((async yb => {
            if (yb) {
              const Uy = {
                index: yb.index,
                texCoord: yb.texCoord,
                extensions: yb.extensions
              };
              Wy.occlusionTexture = Uy, Uy.strength = bb instanceof Jb ? bb._ambientTextureStrength : bb.ambientOcclusionTexture.level
            }
          })));
          const Zy = bb instanceof Jb ? bb._emissiveTexture : bb.emissionColorTexture;
          Zy && yb.push(this.exportTextureAsync(Zy).then((yb => {
            yb && (Wy.emissiveTexture = yb)
          }))), yb.length > 0 && (this._exporter._materialNeedsUVsSet.add(bb), await Promise.all(yb))
        }
        const Zy = bb instanceof Jb ? bb._emissiveColor : bb.emissionColor;
        Zy.equalsWithEpsilon(JW, mU) || (Wy.emissiveFactor = Zy.hBy()), Wy.pbrMetallicRoughness = Uy
      }
      async exportOpenPBRMaterialAsync(yb, bb) {
        const Wy = {},
          Uy = {
            name: yb.name
          },
          hy = yb.baseColor,
          fy = yb.geometryOpacity;
        hy && (Wy.baseColorFactor = [hy.r, hy.g, hy.b, fy]);
        const Zy = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(yb.baseColor, yb.baseMetalness, yb.specularRoughness, yb.baseColorTexture, yb.baseMetalnessTexture, yb.specularRoughnessTexture, yb, Wy, bb);
        await this._setMetallicRoughnessPbrMaterialAsync(Zy, yb, Uy, Wy, bb), await this._finishMaterialAsync(Uy, yb);
        const cb = this._exporter._materials;
        return cb.push(Uy), cb.length - 1
      }
      async exportTextureAsync(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = this._textureMap.get(bb ?? yb.uniqueId);
        if (Wy) return Wy;
        const Uy = this._exportTextureSampler(yb),
          hy = await this._exportTextureImageAsync(yb);
        return Wy = this._exportTextureInfo(hy, Uy, yb.coordinatesIndex), this._textureMap.set(bb ?? yb.uniqueId, Wy), this._exporter._extensionsPostExportTextures("exporter", Wy, yb), Wy
      }
      async _exportTextureImageAsync(yb) {
        const bb = yb.mimeType ?? "none",
          Wy = this._internalTextureToImage,
          Uy = yb.getInternalTexture().uniqueId;
        Wy[Uy] = Wy[Uy] || {};
        let fy = Wy[Uy][bb];
        return void 0 === fy && (fy = (async () => {
          const Wy = await lW(yb);
          if (Wy && gU(Wy.mimeType) && ("none" === bb || Wy.mimeType === bb)) return await this._exportImageAsync(yb.name, new Blob([Wy.data], {
            type: Wy.mimeType
          }));
          let Uy = "image/png";
          "none" !== bb && (gU(bb) ? Uy = bb : (Uy = "image/png", hy.Tools.Warn(`Unsupported media type: ${bb}. Exporting texture as PNG.`)));
          const fy = yb.getSize(),
            Zy = await (0, Ty.h)(yb),
            cb = await (0, Gy.EncodeImageAsync)(Zy, fy.width, fy.height, Uy);
          return await this._exportImageAsync(yb.name, cb)
        })(), Wy[Uy][bb] = fy), await fy
      }
      async _exportImageAsync(yb, bb) {
        const Wy = this._exporter._images;
        let Uy;
        if (this._exporter._shouldUseGlb) {
          Uy = {
            name: yb,
            mimeType: bb.type,
            bufferView: void 0
          };
          const Wy = await bb.arrayBuffer(),
            hy = this._exporter._bufferManager.createBufferView(new Uint8Array(Wy));
          this._exporter._bufferManager.setBufferView(Uy, hy)
        } else {
          const fy = yb.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Zy = function(yb) {
              switch (yb) {
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
            }(bb.type);
          let cb = fy + Zy;
          Wy.some((yb => yb.uri === cb)) && (cb = `${fy}_${hy.Tools.RandomId()}${Zy}`), Uy = {
            name: yb,
            uri: cb
          }, this._exporter._imageData[cb] = bb
        }
        return Wy.push(Uy), Wy.length - 1
      }
      _exportTextureInfo(yb, bb, Wy) {
        const Uy = this._exporter._textures;
        let hy = Uy.findIndex((Wy => Wy.sampler == bb && Wy.source === yb)); - 1 === hy && (hy = Uy.length, Uy.push({
          source: yb,
          sampler: bb
        }));
        const fy = {
          index: hy
        };
        return Wy && (fy.texCoord = Wy), fy
      }
      _exportTextureSampler(yb) {
        const bb = this._getTextureSampler(yb),
          Wy = this._exporter._samplers,
          Uy = Wy.findIndex((yb => yb.minFilter === bb.minFilter && yb.magFilter === bb.magFilter && yb.wrapS === bb.wrapS && yb.wrapT === bb.wrapT));
        return -1 !== Uy ? Uy : (Wy.push(bb), Wy.length - 1)
      }
    }
    var YW = Wy(38540),
      XW = Wy(38688);
    (0, XW.b)();
    var nW = Wy(35864);
    const uW = Uy.Matrix.Compose(new Uy.dU(-1, 1, 1), Uy.Quaternion.Identity(), Uy.dU.Zero());

    function rU(yb, bb) {
      if (!(yb instanceof Ky.d)) return !1;
      if (bb) {
        if (!yb.getWorldMatrix().equalsWithEpsilon(Uy.Matrix.IdentityReadOnly, nW.e)) return !1
      } else {
        if (!yb.getWorldMatrix().multiplyToRef(uW, Uy.TmpVectors.Matrix[0]).equalsWithEpsilon(Uy.Matrix.IdentityReadOnly, nW.e)) return !1
      }
      return !(yb instanceof ey.b && yb.geometry)
    }
    const HW = Uy.dU.ZeroReadOnly,
      aU = Uy.Quaternion.Identity(),
      FW = Uy.dU.OneReadOnly,
      pW = new Uy.dU(-1, 1, 1);

    function LW(yb, bb) {
      const {
        byteOffset: Wy,
        byteStride: Uy,
        type: hy,
        normalized: fy
      } = yb, Zy = yb.getSize(), cb = bb.reduce(((yb, bb) => bb.getTotalVertices() > yb ? bb.getTotalVertices() : yb), -Number.MAX_VALUE);
      return {
        byteOffset: Wy,
        byteStride: Uy,
        componentCount: Zy,
        type: hy,
        count: cb * Zy,
        normalized: fy,
        totalVertices: cb,
        kind: yb.getKind()
      }
    }

    function QW(yb) {
      switch (yb) {
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

    function jU(yb) {
      switch (yb) {
        case By.g.PositionKind:
        case By.g.NormalKind:
        case By.g.TangentKind:
        case By.g.ColorKind:
        case By.g.MatricesIndicesKind:
        case By.g.MatricesIndicesExtraKind:
        case By.g.MatricesWeightsKind:
        case By.g.MatricesWeightsExtraKind:
        case By.g.UVKind:
        case By.g.UV2Kind:
        case By.g.UV3Kind:
        case By.g.UV4Kind:
        case By.g.UV5Kind:
        case By.g.UV6Kind:
          return !0
      }
      return !1
    }

    function DW(yb) {
      const bb = Math.sqrt(yb.x * yb.x + yb.y * yb.y + yb.z * yb.z);
      bb > 0 && (yb.x /= bb, yb.y /= bb, yb.z /= bb)
    }

    function tU(yb) {
      return yb.x *= -1, yb
    }

    function wW(yb) {
      if (yb.x * yb.x + yb.y * yb.y > .5) {
        const bb = Math.abs(yb.x),
          Wy = Math.abs(yb.y);
        if (bb > Wy) {
          const Wy = Math.sign(yb.x);
          yb.x = bb, yb.y *= -Wy, yb.z *= -Wy, yb.w *= Wy
        } else {
          const bb = Math.sign(yb.y);
          yb.x *= -bb, yb.y = Wy, yb.z *= bb, yb.w *= -bb
        }
      } else {
        const bb = Math.abs(yb.z),
          Wy = Math.abs(yb.w);
        if (bb > Wy) {
          const Wy = Math.sign(yb.z);
          yb.x *= -Wy, yb.y *= Wy, yb.z = bb, yb.w *= -Wy
        } else {
          const bb = Math.sign(yb.w);
          yb.x *= bb, yb.y *= -bb, yb.z *= -bb, yb.w = Wy
        }
      }
      return yb
    }

    function kU(yb) {
      yb.vcy(-yb.z, yb.w, yb.x, -yb.y)
    }

    function NW(yb, bb) {
      const Wy = Uy.dU.FromArrayToRef(bb.translation || [0, 0, 0], 0, Uy.TmpVectors.dU[0]),
        hy = Uy.Quaternion.FromArrayToRef(bb.rotation || [0, 0, 0, 1], 0, Uy.TmpVectors.Quaternion[0]),
        fy = Uy.Matrix.ComposeToRef(FW, hy, Wy, Uy.TmpVectors.Matrix[0]),
        Zy = Uy.dU.FromArrayToRef(yb.translation || [0, 0, 0], 0, Uy.TmpVectors.dU[2]),
        cb = Uy.Quaternion.FromArrayToRef(yb.rotation || [0, 0, 0, 1], 0, Uy.TmpVectors.Quaternion[1]),
        Py = Uy.Matrix.ComposeToRef(FW, cb, Zy, Uy.TmpVectors.Matrix[1]);
      fy.multiplyToRef(Py, Py), Py.decompose(void 0, hy, Wy), Wy.equalsWithEpsilon(HW, nW.e) ? delete bb.translation : bb.translation = Wy.hBy(), hy.equalsWithEpsilon(aU, nW.e) ? delete bb.rotation : bb.rotation = hy.hBy(), bb.scale && delete bb.scale
    }

    function zU(yb, bb) {
      if (!(bb instanceof Ky.d)) return !1;
      if (!(1 === bb.getChildren().length && 0 === yb.getChildren().length && yb.parent === bb)) return !1;
      const Wy = yb.kWy(),
        Uy = yb instanceof XW.e && !Wy.useRightHandedSystem ? pW : FW;
      return !!bb.vZ.equalsWithEpsilon(Uy, nW.e) || (vb.b.Warn(`Cannot collapse node ${yb.name} into parent node ${bb.name} with modified scaling.`), !1)
    }

    function IW(yb) {
      if (yb instanceof Array) {
        const bb = new Float32Array(yb);
        return new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)
      }
      return ArrayBuffer.isView(yb) ? new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength) : new Uint8Array(yb)
    }

    function xU(yb, bb) {
      for (const [Wy, Uy] of Object.entries(yb)) {
        const hy = bb[Wy];
        (Array.isArray(Uy) && Array.isArray(hy) && AW(Uy, hy) || Uy === hy) && delete yb[Wy]
      }
      return yb
    }

    function AW(yb, bb) {
      return yb.length === bb.length && yb.every(((yb, Wy) => yb === bb[Wy]))
    }
    const dW = new Map([
      [Int8Array, (yb, bb, Wy) => yb.setInt8(bb, Wy)],
      [Uint8Array, (yb, bb, Wy) => yb.setUint8(bb, Wy)],
      [Uint8ClampedArray, (yb, bb, Wy) => yb.setUint8(bb, Wy)],
      [Int16Array, (yb, bb, Wy) => yb.setInt16(bb, Wy, !0)],
      [Uint16Array, (yb, bb, Wy) => yb.setUint16(bb, Wy, !0)],
      [Int32Array, (yb, bb, Wy) => yb.setInt32(bb, Wy, !0)],
      [Uint32Array, (yb, bb, Wy) => yb.setUint32(bb, Wy, !0)],
      [Float32Array, (yb, bb, Wy) => yb.setFloat32(bb, Wy, !0)],
      [Float64Array, (yb, bb, Wy) => yb.setFloat64(bb, Wy, !0)]
    ]);
    class yh {
      writeTypedArray(yb) {
        this._checkGrowBuffer(yb.byteLength);
        const bb = dW.get(yb.constructor);
        for (let Wy = 0; Wy < yb.length; Wy++) bb(this._dataView, this._byteOffset, yb[Wy]), this._byteOffset += yb.BYTES_PER_ELEMENT
      }
      constructor(yb) {
        this._data = new Uint8Array(yb), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(yb) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, yb), this._byteOffset++
      }
      writeInt8(yb) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, yb), this._byteOffset++
      }
      writeInt16(yb) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, yb, !0), this._byteOffset += 2
      }
      writeUInt16(yb) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, yb, !0), this._byteOffset += 2
      }
      writeInt32(yb) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, yb, !0), this._byteOffset += 4
      }
      writeUInt32(yb) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, yb, !0), this._byteOffset += 4
      }
      writeFloat32(yb) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, yb, !0), this._byteOffset += 4
      }
      writeFloat64(yb) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, yb, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(yb) {
        const bb = this.byteOffset + yb;
        if (bb > this._data.byteLength) {
          const yb = new Uint8Array(2 * bb);
          yb.set(this._data), this._data = yb, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function bh(yb) {
      return yb % 4 === 0 ? 4 : yb % 2 === 0 ? 2 : 1
    }
    class WU {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(yb) {
        let bb = 0;
        this._bufferViewToData.forEach((yb => {
          bb += yb.byteLength
        }));
        const Wy = new yh(bb),
          Uy = Array.from(this._bufferViewToData.keys()).sort(((yb, bb) => bh(bb.byteLength) - bh(yb.byteLength)));
        for (const hy of Uy) {
          hy.byteOffset = Wy.byteOffset, yb.push(hy);
          const bb = yb.length - 1,
            Uy = this.getPropertiesWithBufferView(hy);
          for (const yb of Uy) yb.bufferView = bb;
          Wy.writeTypedArray(this._bufferViewToData.get(hy)), this._bufferViewToData.delete(hy)
        }
        return Wy.getOutputData()
      }
      createBufferView(yb, bb) {
        const Wy = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: yb.byteLength,
          byteStride: bb
        };
        return this._bufferViewToData.set(Wy, yb), Wy
      }
      createAccessor(yb, bb, Wy, Uy, hy, fy, Zy) {
        this._verifyBufferView(yb);
        const cb = {
          bufferView: void 0,
          componentType: Wy,
          count: Uy,
          type: bb,
          min: fy?.min,
          max: fy?.max,
          normalized: Zy,
          byteOffset: hy
        };
        return this.setBufferView(cb, yb), this._accessorToBufferView.set(cb, yb), cb
      }
      setBufferView(yb, bb) {
        this._verifyBufferView(bb);
        this.getPropertiesWithBufferView(bb).push(yb)
      }
      removeBufferView(yb) {
        const bb = this.getPropertiesWithBufferView(yb);
        for (const Wy of bb) void 0 !== Wy.bufferView && delete Wy.bufferView;
        this._bufferViewToData.delete(yb), this._bufferViewToProperties.delete(yb), this._accessorToBufferView.forEach(((bb, Wy) => {
          bb === yb && (void 0 !== Wy.byteOffset && delete Wy.byteOffset, this._accessorToBufferView.delete(Wy))
        }))
      }
      getBufferView(yb) {
        const bb = this._accessorToBufferView.get(yb);
        return this._verifyBufferView(bb), bb
      }
      getPropertiesWithBufferView(yb) {
        return this._verifyBufferView(yb), this._bufferViewToProperties.set(yb, this._bufferViewToProperties.get(yb) ?? []), this._bufferViewToProperties.get(yb)
      }
      getData(yb) {
        return this._verifyBufferView(yb), this._bufferViewToData.get(yb)
      }
      _verifyBufferView(yb) {
        if (void 0 === yb || !this._bufferViewToData.has(yb)) throw new Error(`BufferView ${yb} not found in BufferManager.`)
      }
    }
    var UU = Wy(38694);
    (0, UU.c)();
    var hU = Wy(38957);
    (0, hU.f)();
    var fU = Wy(38746),
      ZU = Wy(39680);
    (0, ZU.g)();
    let ch = (() => {
      var yb;
      let bb, Wy, Uy = [],
        hy = [],
        fy = [],
        Zy = [];
      return yb = class {
        get influence() {
          return this._influence
        }
        set influence(yb) {
          if (this._influence === yb) return;
          const bb = this._influence;
          this._influence = yb, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === bb || 0 === yb)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(yb) {
          this._animationPropertiesOverride = yb
        }
        constructor(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = yb, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new yU.c, this._onDataLayoutChanged = new yU.c, this.id = (0, Oy.l)(this, Uy, void 0), this.morphTargetManager = ((0, Oy.l)(this, hy), (0, Oy.l)(this, fy, null)), this._animationPropertiesOverride = ((0, Oy.l)(this, Zy), null), this.id = yb, this.morphTargetManager = cb, this._scene = Wy || Sy.c.LastCreatedScene, this.influence = bb, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Xqy(yb) {
          const bb = this.hasPositions;
          this._positions = yb, bb !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(yb) {
          const bb = this.hasNormals;
          this._normals = yb, bb !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(yb) {
          const bb = this.hasTangents;
          this._tangents = yb, bb !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(yb) {
          const bb = this.hasUVs;
          this._uvs = yb, bb !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(yb) {
          const bb = this.hasUV2s;
          this._uv2s = yb, bb !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(yb) {
          const bb = this.hasColors;
          this._colors = yb, bb !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const bb = gW.c.Clone((() => new yb(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return bb._positions = this._positions, bb._normals = this._normals, bb._tangents = this._tangents, bb._uvs = this._uvs, bb._uv2s = this._uv2s, bb._colors = this._colors, bb
        }
        serialize() {
          const yb = {};
          return yb.name = this.name, yb.influence = this.influence, null != this.id && (yb.id = this.id), yb.uniqueId = this.uniqueId, yb.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (yb.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (yb.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (yb.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (yb.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (yb.colors = Array.prototype.slice.call(this.getColors())), gW.c.AppendSerializedAnimations(this, yb), yb
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(bb, Wy) {
          let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const hy = new yb(bb.name, bb.influence, Wy, Uy);
          if (hy.Xqy(bb.positions), null != bb.id && (hy.id = bb.id), bb.normals && hy.setNormals(bb.normals), bb.tangents && hy.setTangents(bb.tangents), bb.uvs && hy.setUVs(bb.uvs), bb.uv2s && hy.setUV2s(bb.uv2s), bb.colors && hy.setColors(bb.colors), bb.animations) {
            for (let yb = 0; yb < bb.animations.length; yb++) {
              const Wy = bb.animations[yb],
                Uy = (0, Qb.b)("BABYLON.Animation");
              Uy && hy.animations.push(Uy.Parse(Wy))
            }
            bb.autoAnimate && Wy && Wy.beginAnimation(hy, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1)
          }
          return hy
        }
        static FromMesh(bb, Wy, Uy) {
          Wy || (Wy = bb.name);
          const hy = new yb(Wy, Uy, bb.kWy(), bb.morphTargetManager);
          return hy.Xqy(bb.getVerticesData(py.k.PositionKind)), bb.isVerticesDataPresent(py.k.NormalKind) && hy.setNormals(bb.getVerticesData(py.k.NormalKind)), bb.isVerticesDataPresent(py.k.TangentKind) && hy.setTangents(bb.getVerticesData(py.k.TangentKind)), bb.isVerticesDataPresent(py.k.UVKind) && hy.setUVs(bb.getVerticesData(py.k.UVKind)), bb.isVerticesDataPresent(py.k.UV2Kind) && hy.setUV2s(bb.getVerticesData(py.k.UV2Kind)), bb.isVerticesDataPresent(py.k.ColorKind) && hy.setColors(bb.getVerticesData(py.k.ColorKind)), hy
        }
      }, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bb = [(0, Ry.T)()], Wy = [(0, Ry.T)()], (0, Oy.j)(null, null, bb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: yb => "id" in yb,
            get: yb => yb.id,
            set: (yb, bb) => {
              yb.id = bb
            }
          },
          metadata: cb
        }, Uy, hy), (0, Oy.j)(null, null, Wy, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: yb => "morphTargetManager" in yb,
            get: yb => yb.morphTargetManager,
            set: (yb, bb) => {
              yb.morphTargetManager = bb
            }
          },
          metadata: cb
        }, fy, Zy), cb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), yb
    })();
    var PU, oU = Wy(39721),
      BU = Wy(38742);
    ! function(yb) {
      yb[yb.INTANGENT = 0] = "INTANGENT", yb[yb.OUTTANGENT = 1] = "OUTTANGENT"
    }(PU || (PU = {}));
    class KU {
      static _IsTransformable(yb) {
        return yb && (yb instanceof Ky.d || yb instanceof UU.b || yb instanceof BU.d)
      }
      static _CreateNodeAnimation(yb, bb, Wy, Uy, fy) {
        if (this._IsTransformable(yb)) {
          const Zy = [],
            cb = [],
            Py = bb.getKeys(),
            oy = KU._CalculateMinMaxKeyFrames(Py),
            By = KU._DeduceInterpolation(Py, Wy, Uy),
            Ky = By.interpolationType,
            ey = By.shouldBakeAnimation;
          if (ey ? KU._CreateBakedAnimation(yb, bb, Wy, oy.min, oy.max, bb.framePerSecond, fy, Zy, cb, oy, Uy) : "LINEAR" === Ky || "STEP" === Ky ? KU._CreateLinearOrStepAnimation(yb, bb, Wy, Zy, cb, Uy) : "CUBICSPLINE" === Ky ? KU._CreateCubicSplineAnimation(yb, bb, Wy, Zy, cb, Uy) : KU._CreateBakedAnimation(yb, bb, Wy, oy.min, oy.max, bb.framePerSecond, fy, Zy, cb, oy, Uy), Zy.length && cb.length) {
            return {
              inputs: Zy,
              outputs: cb,
              samplerInterpolation: Ky,
              inputsMin: ey ? oy.min : hy.Tools.FloatRound(oy.min / bb.framePerSecond),
              inputsMax: ey ? oy.max : hy.Tools.FloatRound(oy.max / bb.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(yb) {
        let bb = null,
          Wy = "VEC3",
          Uy = !1;
        const fy = yb.targetProperty.split(".");
        switch (fy[0]) {
          case "vZ":
            bb = "scale";
            break;
          case "position":
            bb = "translation";
            break;
          case "rotation":
            Wy = "VEC4", bb = "rotation";
            break;
          case "rotationQuaternion":
            Wy = "VEC4", Uy = !0, bb = "rotation";
            break;
          case "influence":
            Wy = "SCALAR", bb = "weights";
            break;
          default:
            hy.Tools.Error(`Unsupported animatable property ${fy[0]}`)
        }
        return bb ? {
          animationChannelTargetPath: bb,
          dataAccessorType: Wy,
          useQuaternion: Uy
        } : (hy.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        let Ky;
        if (KU._IsTransformable(yb) && yb.animations)
          for (const ey of yb.animations) {
            if (By && !By(ey)) continue;
            const hy = KU._DeduceAnimationInfo(ey);
            hy && (Ky = {
              name: ey.name,
              samplers: [],
              channels: []
            }, KU._AddAnimation(`${ey.name}`, ey.hasRunningRuntimeAnimations ? bb : Ky, yb, ey, hy.dataAccessorType, hy.animationChannelTargetPath, Uy, fy, Zy, cb, hy.useQuaternion, Py, oy), Ky.samplers.length && Ky.channels.length && Wy.push(Ky))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        let Ky;
        if (yb instanceof oU.b) {
          const hy = yb.morphTargetManager;
          if (hy)
            for (let ey = 0; ey < hy.numTargets; ++ey) {
              const qb = hy.getTarget(ey);
              for (const sy of qb.animations) {
                if (By && !By(sy)) continue;
                const qb = new ZU.d(`${sy.name}`, "influence", sy.framePerSecond, sy.dataType, sy.Pyy, sy.enableBlending),
                  Sy = [],
                  Ey = sy.getKeys();
                for (let yb = 0; yb < Ey.length; ++yb) {
                  const bb = Ey[yb];
                  for (let yb = 0; yb < hy.numTargets; ++yb) yb == ey ? Sy.push(bb) : Sy.push({
                    frame: bb.frame,
                    value: 0
                  })
                }
                qb.setKeys(Sy, !0);
                const ly = KU._DeduceAnimationInfo(qb);
                ly && (Ky = {
                  name: qb.name,
                  samplers: [],
                  channels: []
                }, KU._AddAnimation(sy.name, sy.hasRunningRuntimeAnimations ? bb : Ky, yb, qb, ly.dataAccessorType, ly.animationChannelTargetPath, Uy, fy, Zy, cb, ly.useQuaternion, Py, oy, hy.numTargets), Ky.samplers.length && Ky.channels.length && Wy.push(Ky))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        let By;
        if (yb.animationGroups) {
          const Ky = yb.animationGroups;
          for (const ey of Ky) {
            const Ky = new Map,
              qb = new Map,
              sy = new Set,
              Sy = ey.to - ey.from;
            By = {
              name: ey.name,
              channels: [],
              samplers: []
            };
            for (let bb = 0; bb < ey.targetedAnimations.length; ++bb) {
              const oy = ey.targetedAnimations[bb],
                Sy = oy.target,
                Ey = oy.animation;
              if (Py && !Py(Ey)) continue;
              const ly = cb.has(Sy);
              if (this._IsTransformable(Sy) || 1 === Sy.length && this._IsTransformable(Sy[0])) {
                const yb = KU._DeduceAnimationInfo(oy.animation);
                if (yb) {
                  const bb = this._IsTransformable(Sy) ? Sy : this._IsTransformable(Sy[0]) ? Sy[0] : null;
                  bb && KU._AddAnimation(`${Ey.name}`, By, bb, Ey, yb.dataAccessorType, yb.animationChannelTargetPath, Wy, Uy, hy, fy, yb.useQuaternion, Zy, ly)
                }
              } else if (Sy instanceof ch || 1 === Sy.length && Sy[0] instanceof ch) {
                if (KU._DeduceAnimationInfo(oy.animation)) {
                  const bb = Sy instanceof ch ? Sy : Sy[0];
                  if (bb) {
                    const Wy = yb.morphTargetManagers.find((yb => {
                      for (let Wy = 0; Wy < yb.numTargets; ++Wy)
                        if (yb.getTarget(Wy) === bb) return !0;
                      return !1
                    }));
                    if (Wy) {
                      const Uy = yb.meshes.find((yb => yb.morphTargetManager === Wy));
                      Uy && (Ky.has(Uy) || Ky.set(Uy, new Map), Ky.get(Uy)?.set(bb, Ey), sy.add(Uy), qb.set(Uy, Ey))
                    }
                  }
                }
              }
            }
            sy.forEach((yb => {
              const bb = yb.morphTargetManager;
              let cb = null;
              const Py = [],
                oy = qb.get(yb).getKeys(),
                sy = oy.length;
              for (let Wy = 0; Wy < sy; ++Wy)
                for (let Uy = 0; Uy < bb.numTargets; ++Uy) {
                  const hy = bb.getTarget(Uy),
                    fy = Ky.get(yb);
                  if (fy) {
                    const bb = fy.get(hy);
                    bb ? (cb || (cb = new ZU.d(`${ey.name}_${yb.name}_MorphWeightAnimation`, "influence", bb.framePerSecond, ZU.d.ANIMATIONTYPE_FLOAT, bb.Pyy, bb.enableBlending)), Py.push(bb.getKeys()[Wy])) : Py.push({
                      frame: ey.from + Sy / sy * Wy,
                      value: hy.influence,
                      inTangent: oy[0].inTangent ? 0 : void 0,
                      outTangent: oy[0].outTangent ? 0 : void 0
                    })
                  }
                }
              cb.setKeys(Py, !0);
              const Ey = KU._DeduceAnimationInfo(cb);
              Ey && KU._AddAnimation(`${ey.name}_${yb.name}_MorphWeightAnimation`, By, yb, cb, Ey.dataAccessorType, Ey.animationChannelTargetPath, Wy, Uy, hy, fy, Ey.useQuaternion, Zy, !1, bb?.numTargets)
            })), By.channels.length && By.samplers.length && (oy?.set(ey, bb.length), bb.push(By))
          }
        }
      }
      static _AddAnimation(yb, bb, Wy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy) {
        const Sy = KU._CreateNodeAnimation(Wy, hy, Zy, Ky, ey);
        let Ey, ly, mb, Cy, Ty, Vy;
        if (Sy) {
          if (sy) {
            let yb, bb = 0;
            const Wy = [];
            for (; Sy.inputs.length > 0;) yb = Sy.inputs.shift(), bb % sy == 0 && Wy.push(yb), bb++;
            Sy.inputs = Wy
          }
          const yb = cb.get(Wy),
            hy = new Float32Array(Sy.inputs);
          Ey = Py.createBufferView(hy), ly = Py.createAccessor(Ey, "SCALAR", 5126, Sy.inputs.length, void 0, {
            min: [Sy.inputsMin],
            max: [Sy.inputsMax]
          }), By.push(ly), mb = By.length - 1;
          const oy = new Uy.Quaternion,
            Ky = new Uy.dU,
            ey = new Uy.dU,
            Jy = Wy instanceof UU.b,
            gb = QW(fy),
            Gy = new Float32Array(Sy.outputs.length * gb);
          Sy.outputs.forEach((function(yb, bb) {
            let Wy = yb;
            switch (Zy) {
              case "translation":
                qb && (Uy.dU.FromArrayToRef(yb, 0, ey), tU(ey), ey.toArray(Wy));
                break;
              case "rotation":
                4 === yb.length ? Uy.Quaternion.FromArrayToRef(yb, 0, oy) : (Wy = new Array(4), Uy.dU.FromArrayToRef(yb, 0, Ky), Uy.Quaternion.FromEulerVectorToRef(Ky, oy)), qb && (wW(oy), Jy && kU(oy)), oy.toArray(Wy)
            }
            Gy.set(Wy, bb * gb)
          })), Ey = Py.createBufferView(Gy), ly = Py.createAccessor(Ey, fy, 5126, Sy.outputs.length), By.push(ly), Cy = By.length - 1, Ty = {
            interpolation: Sy.samplerInterpolation,
            input: mb,
            output: Cy
          }, bb.samplers.push(Ty), Vy = {
            sampler: bb.samplers.length - 1,
            target: {
              node: yb,
              path: Zy
            }
          }, bb.channels.push(Vy)
        }
      }
      static _CreateBakedAnimation(yb, bb, Wy, fy, Zy, cb, Py, oy, By, Ky, ey) {
        let qb;
        const sy = Uy.Quaternion.Identity();
        let Sy, Ey, ly, mb, Cy, Ty = null,
          Vy = null;
        Ky.min = hy.Tools.FloatRound(fy / cb);
        const Jy = bb.getKeys();
        for (let Uy = 0, gb = Jy.length; Uy < gb; ++Uy) {
          if (Ey = Jy[Uy], Uy + 1 < gb)
            if (ly = Jy[Uy + 1], Ey.value.equals && Ey.value.equals(ly.value) || Ey.value === ly.value) {
              if (0 !== Uy) continue;
              Cy = Ey.frame
            } else Cy = ly.frame;
          else {
            if (mb = Jy[Uy - 1], Ey.value.equals && Ey.value.equals(mb.value) || Ey.value === mb.value) continue;
            Cy = Zy
          }
          if (Cy)
            for (let Uy = Ey.frame; Uy <= Cy; Uy += Py) {
              if (Sy = hy.Tools.FloatRound(Uy / cb), Sy === Ty) continue;
              Ty = Sy, Vy = Sy;
              const fy = {
                key: 0,
                repeatCount: 0,
                Pyy: bb.Pyy
              };
              qb = bb._interpolate(Uy, fy), KU._SetInterpolatedValue(yb, qb, Sy, bb, Wy, sy, oy, By, ey)
            }
        }
        Vy && (Ky.max = Vy)
      }
      static _ConvertFactorToVector3OrQuaternion(yb, bb, Wy, fy, Zy) {
        const cb = KU._GetBasePositionRotationOrScale(bb, fy, Zy),
          Py = Wy.targetProperty.split("."),
          oy = Py ? Py[1] : "",
          By = Zy ? Uy.Quaternion.FromArray(cb).normalize() : Uy.dU.FromArray(cb);
        switch (oy) {
          case "x":
          case "y":
          case "z":
            By[oy] = yb;
            break;
          case "w":
            By.w = yb;
            break;
          default:
            hy.Tools.Error(`glTFAnimation: Unsupported component name "${oy}"!`)
        }
        return By
      }
      static _SetInterpolatedValue(yb, bb, Wy, hy, fy, Zy, cb, Py, oy) {
        let By;
        cb.push(Wy), "weights" !== fy ? (hy.dataType === ZU.d.ANIMATIONTYPE_FLOAT && (bb = this._ConvertFactorToVector3OrQuaternion(bb, yb, hy, fy, oy)), "rotation" === fy ? (oy ? Zy = bb : (By = bb, Uy.Quaternion.RotationYawPitchRollToRef(By.y, By.x, By.z, Zy)), Py.push(Zy.hBy())) : (By = bb, Py.push(By.hBy()))) : Py.push([bb])
      }
      static _CreateLinearOrStepAnimation(yb, bb, Wy, Uy, hy, fy) {
        for (const Zy of bb.getKeys()) Uy.push(Zy.frame / bb.framePerSecond), KU._AddKeyframeValue(Zy, bb, hy, Wy, yb, fy)
      }
      static _CreateCubicSplineAnimation(yb, bb, Wy, Uy, hy, fy) {
        bb.getKeys().forEach((function(Zy) {
          Uy.push(Zy.frame / bb.framePerSecond), KU._AddSplineTangent(PU.INTANGENT, hy, Wy, "CUBICSPLINE", Zy, fy), KU._AddKeyframeValue(Zy, bb, hy, Wy, yb, fy), KU._AddSplineTangent(PU.OUTTANGENT, hy, Wy, "CUBICSPLINE", Zy, fy)
        }))
      }
      static _GetBasePositionRotationOrScale(yb, bb, Wy) {
        let hy;
        if ("rotation" === bb)
          if (Wy) {
            hy = (yb.rotationQuaternion ?? Uy.Quaternion.Identity()).hBy()
          } else {
            hy = (yb.rotation ?? Uy.dU.Zero()).hBy()
          }
        else if ("translation" === bb) {
          hy = (yb.position ?? Uy.dU.Zero()).hBy()
        } else {
          hy = (yb.vZ ?? Uy.dU.One()).hBy()
        }
        return hy
      }
      static _AddKeyframeValue(yb, bb, Wy, fy, Zy, cb) {
        let Py;
        const oy = bb.dataType;
        if (oy === ZU.d.ANIMATIONTYPE_VECTOR3) {
          let bb = yb.value.hBy();
          if ("rotation" === fy) {
            const yb = Uy.dU.FromArray(bb);
            bb = Uy.Quaternion.RotationYawPitchRoll(yb.y, yb.x, yb.z).hBy()
          }
          Wy.push(bb)
        } else if (oy === ZU.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === fy) Wy.push([yb.value]);
          else if (Py = this._ConvertFactorToVector3OrQuaternion(yb.value, Zy, bb, fy, cb), Py) {
            if ("rotation" === fy) {
              const yb = cb ? Py : Uy.Quaternion.RotationYawPitchRoll(Py.y, Py.x, Py.z).normalize();
              Wy.push(yb.hBy())
            }
            Wy.push(Py.hBy())
          }
        } else oy === ZU.d.ANIMATIONTYPE_QUATERNION ? Wy.push(yb.value.normalize().hBy()) : hy.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(yb, bb, Wy) {
        let Uy, hy, fy = !1;
        if ("rotation" === bb && !Wy) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Zy = 0, cb = yb.length; Zy < cb; ++Zy)
          if (hy = yb[Zy], hy.inTangent || hy.outTangent)
            if (Uy) {
              if ("CUBICSPLINE" !== Uy) {
                Uy = "LINEAR", fy = !0;
                break
              }
            } else Uy = "CUBICSPLINE";
        else if (Uy) {
          if ("CUBICSPLINE" === Uy || hy.interpolation && 1 === hy.interpolation && "STEP" !== Uy) {
            Uy = "LINEAR", fy = !0;
            break
          }
        } else Uy = hy.interpolation && 1 === hy.interpolation ? "STEP" : "LINEAR";
        return Uy || (Uy = "LINEAR"), {
          interpolationType: Uy,
          shouldBakeAnimation: fy
        }
      }
      static _AddSplineTangent(yb, bb, Wy, hy, fy, Zy) {
        let cb;
        const Py = yb === PU.INTANGENT ? fy.inTangent : fy.outTangent;
        if ("CUBICSPLINE" === hy) {
          if ("rotation" === Wy)
            if (Py)
              if (Zy) cb = Py.hBy();
              else {
                const yb = Py;
                cb = Uy.Quaternion.RotationYawPitchRoll(yb.y, yb.x, yb.z).hBy()
              }
          else cb = [0, 0, 0, 0];
          else cb = "weights" === Wy ? Py ? [Py] : [0] : Py ? Py.hBy() : [0, 0, 0];
          bb.push(cb)
        }
      }
      static _CalculateMinMaxKeyFrames(yb) {
        let bb = 1 / 0,
          Wy = -1 / 0;
        return yb.forEach((function(yb) {
          bb = Math.min(bb, yb.frame), Wy = Math.max(Wy, yb.frame)
        })), {
          min: bb,
          max: Wy
        }
      }
    }

    function eU(yb, bb, Wy, fy, Zy, cb) {
      const Py = {
          attributes: {},
          influence: yb.influence,
          name: yb.name
        },
        oy = bb.geometry;
      if (!oy) return hy.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Py;
      const Ky = cb ? -1 : 1,
        ey = Uy.dU.Zero();
      let qb, sy;
      if (yb.hasPositions) {
        const fy = yb.getPositions(),
          cb = oy.getVerticesData(By.g.PositionKind);
        if (cb) {
          const yb = new Float32Array(cb.length),
            bb = [1 / 0, 1 / 0, 1 / 0],
            hy = [-1 / 0, -1 / 0, -1 / 0];
          sy = cb.length / 3, qb = 0;
          for (let Wy = qb; Wy < sy; ++Wy) {
            const Zy = Uy.dU.FromArray(cb, 3 * Wy);
            Uy.dU.FromArray(fy, 3 * Wy).subtractToRef(Zy, ey), ey.x *= Ky, bb[0] = Math.min(bb[0], ey.x), hy[0] = Math.max(hy[0], ey.x), bb[1] = Math.min(bb[1], ey.y), hy[1] = Math.max(hy[1], ey.y), bb[2] = Math.min(bb[2], ey.z), hy[2] = Math.max(hy[2], ey.z), yb[3 * Wy] = ey.x, yb[3 * Wy + 1] = ey.y, yb[3 * Wy + 2] = ey.z
          }
          const oy = Wy.createBufferView(yb, 12),
            By = Wy.createAccessor(oy, "VEC3", 5126, fy.length / 3, 0, {
              min: bb,
              max: hy
            });
          Zy.push(By), Py.attributes.POSITION = Zy.length - 1
        } else hy.Tools.Warn(`Morph target positions for mesh ${bb.name} were not exported. Mesh does not have position vertex data`)
      }
      if (yb.hasNormals) {
        const fy = yb.getNormals(),
          cb = oy.getVerticesData(By.g.NormalKind);
        if (cb) {
          const yb = new Float32Array(cb.length);
          sy = cb.length / 3, qb = 0;
          for (let Wy = qb; Wy < sy; ++Wy) {
            const bb = Uy.dU.FromArray(cb, 3 * Wy).normalize();
            Uy.dU.FromArray(fy, 3 * Wy).normalize().subtractToRef(bb, ey), yb[3 * Wy] = ey.x * Ky, yb[3 * Wy + 1] = ey.y, yb[3 * Wy + 2] = ey.z
          }
          const bb = Wy.createBufferView(yb, 12),
            hy = Wy.createAccessor(bb, "VEC3", 5126, fy.length / 3, 0);
          Zy.push(hy), Py.attributes.NORMAL = Zy.length - 1
        } else hy.Tools.Warn(`Morph target normals for mesh ${bb.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (yb.hasTangents) {
        const fy = yb.getTangents(),
          cb = oy.getVerticesData(By.g.TangentKind);
        if (cb) {
          sy = cb.length / 4;
          const yb = new Float32Array(3 * sy);
          qb = 0;
          for (let Wy = qb; Wy < sy; ++Wy) {
            const bb = Uy.dU.FromArray(cb, 4 * Wy);
            DW(bb);
            const hy = Uy.dU.FromArray(fy, 3 * Wy);
            DW(hy), hy.subtractToRef(bb, ey), yb[3 * Wy] = ey.x * Ky, yb[3 * Wy + 1] = ey.y, yb[3 * Wy + 2] = ey.z
          }
          const bb = Wy.createBufferView(yb, 12),
            hy = Wy.createAccessor(bb, "VEC3", 5126, sy, 0);
          Zy.push(hy), Py.attributes.TANGENT = Zy.length - 1
        } else hy.Tools.Warn(`Morph target tangents for mesh ${bb.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (yb.hasColors) {
        const fy = yb.getColors(),
          cb = oy.getVerticesData(By.g.ColorKind),
          Ky = oy.getVertexBuffer(By.g.ColorKind);
        if (cb && Ky) {
          const yb = Ky.getSize();
          sy = cb.length / yb;
          const bb = new Float32Array(sy * yb);
          qb = 0;
          for (let Wy = qb; Wy < sy; ++Wy)
            if (3 === yb) {
              const hy = Uy.dU.FromArray(cb, Wy * yb);
              Uy.dU.FromArray(fy, Wy * yb).subtractToRef(hy, ey), bb[3 * Wy] = ey.x, bb[3 * Wy + 1] = ey.y, bb[3 * Wy + 2] = ey.z
            } else if (4 === yb) {
            const hy = new Uy.Vector4,
              Zy = Uy.Vector4.FromArray(cb, Wy * yb);
            Uy.Vector4.FromArray(fy, Wy * yb).subtractToRef(Zy, hy), bb[4 * Wy] = hy.x, bb[4 * Wy + 1] = hy.y, bb[4 * Wy + 2] = hy.z, bb[4 * Wy + 3] = hy.w
          } else hy.Tools.Warn(`Unsupported number of components for color attribute: ${yb}`);
          const oy = Wy.createBufferView(bb, 4 * yb),
            By = Wy.createAccessor(oy, 3 === yb ? "VEC3" : "VEC4", 5126, sy, 0);
          Zy.push(By), Py.attributes.COLOR_0 = Zy.length - 1
        } else hy.Tools.Warn(`Morph target colors for mesh ${bb.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Py
    }
    var qh = Wy(40034);
    class sU {}
    sU.DEFAULT_COLOR = wy.d.White(), sU.DEFAULT_WIDTH_ATTENUATED = 1, sU.DEFAULT_WIDTH = .1;
    var SU = Wy(39674);
    class EU {
      constructor(yb) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = yb
      }
      moveTo(yb, bb) {
        this._currentPath = new SU.g(yb, bb), this._tempPaths.push(this._currentPath)
      }
      lineTo(yb, bb) {
        this._currentPath.addLineTo(yb, bb)
      }
      quadraticCurveTo(yb, bb, Wy, Uy) {
        this._currentPath.addQuadraticCurveTo(yb, bb, Wy, Uy, this._resolution)
      }
      bezierCurveTo(yb, bb, Wy, Uy, hy, fy) {
        this._currentPath.addBezierCurveTo(yb, bb, Wy, Uy, hy, fy, this._resolution)
      }
      extractHoles() {
        for (const yb of this._tempPaths) yb.area() > 0 ? this._holes.push(yb) : this._paths.push(yb);
        if (!this._paths.length && this._holes.length) {
          const yb = this._holes;
          this._holes = this._paths, this._paths = yb
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

    function lU(yb, bb, Wy, Uy, hy, fy) {
      const Zy = fy.glyphs[yb] || fy.glyphs["?"];
      if (!Zy) return null;
      const cb = new EU(hy);
      if (Zy.o) {
        const yb = Zy.o.split(" ");
        for (let hy = 0, fy = yb.length; hy < fy;) {
          switch (yb[hy++]) {
            case "m": {
              const fy = parseInt(yb[hy++]) * bb + Wy,
                Zy = parseInt(yb[hy++]) * bb + Uy;
              cb.moveTo(fy, Zy);
              break
            }
            case "l": {
              const fy = parseInt(yb[hy++]) * bb + Wy,
                Zy = parseInt(yb[hy++]) * bb + Uy;
              cb.lineTo(fy, Zy);
              break
            }
            case "q": {
              const fy = parseInt(yb[hy++]) * bb + Wy,
                Zy = parseInt(yb[hy++]) * bb + Uy,
                Py = parseInt(yb[hy++]) * bb + Wy,
                oy = parseInt(yb[hy++]) * bb + Uy;
              cb.quadraticCurveTo(Py, oy, fy, Zy);
              break
            }
            case "b": {
              const fy = parseInt(yb[hy++]) * bb + Wy,
                Zy = parseInt(yb[hy++]) * bb + Uy,
                Py = parseInt(yb[hy++]) * bb + Wy,
                oy = parseInt(yb[hy++]) * bb + Uy,
                By = parseInt(yb[hy++]) * bb + Wy,
                Ky = parseInt(yb[hy++]) * bb + Uy;
              cb.bezierCurveTo(Py, oy, By, Ky, fy, Zy);
              break
            }
          }
        }
      }
      return cb.extractHoles(), {
        offsetX: Zy.ha * bb,
        shapePath: cb
      }
    }

    function mh(yb, bb, Wy, Uy) {
      const hy = Array.from(yb),
        fy = bb / Uy.resolution,
        Zy = (Uy.boundingBox.yMax - Uy.boundingBox.yMin + Uy.underlineThickness) * fy,
        cb = [];
      let Py = 0,
        oy = 0;
      for (let By = 0; By < hy.length; By++) {
        const yb = hy[By];
        if ("\n" === yb) Py = 0, oy -= Zy;
        else {
          const bb = lU(yb, fy, Py, oy, Wy, Uy);
          bb && (Py += bb.offsetX, cb.push(bb.shapePath))
        }
      }
      return cb
    }
    class CU {
      static ConvertPoints(yb, bb) {
        if (yb.length && Array.isArray(yb) && "number" === typeof yb[0]) return [yb];
        if (yb.length && Array.isArray(yb[0]) && "number" === typeof yb[0][0]) return yb;
        if (yb.length && !Array.isArray(yb[0]) && yb[0] instanceof Fy.n) {
          const bb = [];
          for (let Wy = 0; Wy < yb.length; Wy++) {
            const Uy = yb[Wy];
            bb.push(Uy.x, Uy.y, Uy.z)
          }
          return [bb]
        }
        if (yb.length > 0 && Array.isArray(yb[0]) && yb[0].length > 0 && yb[0][0] instanceof Fy.n) {
          const bb = [],
            Wy = yb;
          for (const yb of Wy) bb.push(yb.flatMap((yb => [yb.x, yb.y, yb.z])));
          return bb
        }
        if (yb instanceof Float32Array) {
          if (bb?.floatArrayStride) {
            const Wy = [],
              Uy = 3 * bb.floatArrayStride;
            for (let bb = 0; bb < yb.length; bb += Uy) {
              const hy = new Array(Uy);
              for (let Wy = 0; Wy < Uy; Wy++) hy[Wy] = yb[bb + Wy];
              Wy.push(hy)
            }
            return Wy
          }
          return [Array.from(yb)]
        }
        if (yb.length && yb[0] instanceof Float32Array) {
          const bb = [];
          for (const Wy of yb) bb.push(Array.from(Wy));
          return bb
        }
        return []
      }
      static OmitZeroLengthPredicate(yb, bb, Wy) {
        const Uy = [];
        return bb.subtract(yb).lengthSquared() > 0 && Uy.push([yb, bb]), Wy.subtract(bb).lengthSquared() > 0 && Uy.push([bb, Wy]), yb.subtract(Wy).lengthSquared() > 0 && Uy.push([Wy, yb]), 0 === Uy.length ? null : Uy
      }
      static OmitDuplicatesPredicate(yb, bb, Wy, Uy) {
        const hy = [];
        return CU._SearchInPoints(yb, bb, Uy) || hy.push([yb, bb]), CU._SearchInPoints(bb, Wy, Uy) || hy.push([bb, Wy]), CU._SearchInPoints(Wy, yb, Uy) || hy.push([Wy, yb]), 0 === hy.length ? null : hy
      }
      static _SearchInPoints(yb, bb, Wy) {
        for (const Uy of Wy)
          for (let Wy = 0; Wy < Uy.length; Wy++)
            if (Uy[Wy]?.equals(yb) && (Uy[Wy + 1]?.equals(bb) || Uy[Wy - 1]?.equals(bb))) return !0;
        return !1
      }
      static MeshesToLines(yb, bb) {
        const Wy = [];
        for (let Uy = 0; Uy < yb.length; Uy++) {
          const hy = yb[Uy],
            fy = hy.getVerticesData(py.k.PositionKind),
            Zy = hy.Mqy();
          if (fy && Zy)
            for (let yb = 0, cb = 0; yb < Zy.length; yb++) {
              const Py = 3 * Zy[cb++],
                oy = 3 * Zy[cb++],
                By = 3 * Zy[cb++],
                Ky = new Fy.n(fy[Py], fy[Py + 1], fy[Py + 2]),
                ey = new Fy.n(fy[oy], fy[oy + 1], fy[oy + 2]),
                qb = new Fy.n(fy[By], fy[By + 1], fy[By + 2]);
              if (bb) {
                const cb = bb(Ky, ey, qb, Wy, yb, Py, hy, Uy, fy, Zy);
                if (cb)
                  for (const yb of cb) Wy.push(yb)
              } else Wy.push([Ky, ey], [ey, qb], [qb, Ky])
            }
        }
        return Wy
      }
      static ToVector3Array(yb) {
        if (Array.isArray(yb[0])) {
          const bb = [],
            Wy = yb;
          for (const yb of Wy) {
            const Wy = [];
            for (let bb = 0; bb < yb.length; bb += 3) Wy.push(new Fy.n(yb[bb], yb[bb + 1], yb[bb + 2]));
            bb.push(Wy)
          }
          return bb
        }
        const bb = yb,
          Wy = [];
        for (let Uy = 0; Uy < bb.length; Uy += 3) Wy.push(new Fy.n(bb[Uy], bb[Uy + 1], bb[Uy + 2]));
        return Wy
      }
      static ToNumberArray(yb) {
        return yb.flatMap((yb => [yb.x, yb.y, yb.z]))
      }
      static GetPointsCountInfo(yb) {
        const bb = new Array(yb.length);
        let Wy = 0;
        for (let Uy = yb.length; Uy--;) bb[Uy] = yb[Uy].length / 3, Wy += bb[Uy];
        return {
          total: Wy,
          counts: bb
        }
      }
      static GetLineLength(yb) {
        if (0 === yb.length) return 0;
        let bb;
        bb = "number" === typeof yb[0] ? CU.ToVector3Array(yb) : yb;
        const Wy = Fy.j.dU[0];
        let Uy = 0;
        for (let hy = 0; hy < bb.length - 1; hy++) {
          const yb = bb[hy];
          Uy += bb[hy + 1].subtractToRef(yb, Wy).length()
        }
        return Uy
      }
      static GetLineLengthArray(yb, bb) {
        const Wy = bb ? new Float32Array(bb, 0, yb.length / 3) : new Float32Array(yb.length / 3);
        let Uy = 0;
        for (let hy = 0, fy = yb.length / 3 - 1; hy < fy; hy++) {
          let bb = yb[3 * hy + 0],
            fy = yb[3 * hy + 1],
            Zy = yb[3 * hy + 2];
          bb -= yb[3 * hy + 3], fy -= yb[3 * hy + 4], Zy -= yb[3 * hy + 5];
          Uy += Math.sqrt(bb * bb + fy * fy + Zy * Zy), Wy[hy + 1] = Uy
        }
        return Wy
      }
      static SegmentizeSegmentByCount(yb, bb, Wy) {
        const Uy = [],
          hy = bb.subtract(yb),
          fy = Fy.j.dU[0];
        fy.dfy(Wy);
        const Zy = Fy.j.dU[1];
        hy.divideToRef(fy, Zy);
        let cb = yb.clone();
        Uy.push(cb);
        for (let Py = 0; Py < Wy; Py++) cb = cb.clone(), Uy.push(cb.addInPlace(Zy));
        return Uy
      }
      static SegmentizeLineBySegmentLength(yb, bb) {
        const Wy = yb[0] instanceof Fy.n ? CU.GetLineSegments(yb) : "number" === typeof yb[0] ? CU.GetLineSegments(CU.ToVector3Array(yb)) : yb,
          Uy = [];
        for (const hy of Wy)
          if (hy.length > bb) {
            const yb = CU.SegmentizeSegmentByCount(hy.point1, hy.point2, Math.ceil(hy.length / bb));
            for (const bb of yb) Uy.push(bb)
          } else Uy.push(hy.point1), Uy.push(hy.point2);
        return Uy
      }
      static SegmentizeLineBySegmentCount(yb, bb) {
        const Wy = "number" === typeof yb[0] ? CU.ToVector3Array(yb) : yb,
          Uy = CU.GetLineLength(Wy) / bb;
        return CU.SegmentizeLineBySegmentLength(Wy, Uy)
      }
      static GetLineSegments(yb) {
        const bb = [];
        for (let Wy = 0; Wy < yb.length - 1; Wy++) {
          const Uy = yb[Wy],
            hy = yb[Wy + 1],
            fy = hy.subtract(Uy).length();
          bb.push({
            point1: Uy,
            point2: hy,
            length: fy
          })
        }
        return bb
      }
      static GetMinMaxSegmentLength(yb) {
        const bb = CU.GetLineSegments(yb).sort((yb => yb.length));
        return {
          min: bb[0].length,
          max: bb[bb.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hy = bb * Wy;
        let fy = 0,
          Zy = 0;
        const cb = yb.length;
        for (let oy = 0; oy < cb; oy++) {
          if (hy <= fy + yb[oy].length) {
            Zy = oy;
            break
          }
          fy += yb[oy].length
        }
        const Py = (hy - fy) / yb[Zy].length;
        return yb[Zy].point2.subtractToRef(yb[Zy].point1, Fy.j.dU[0]), Fy.j.dU[0].scaleToRef(Py, Fy.j.dU[1]), Uy || Fy.j.dU[1].addInPlace(yb[Zy].point1), Fy.j.dU[1].clone()
      }
      static GetCircleLinePoints(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / bb;
        const fy = [];
        for (let Zy = 0; Zy <= bb; Zy++) fy.push(new Fy.n(Math.cos(Zy * hy) * yb, Math.sin(Zy * hy) * Uy, Wy));
        return fy
      }
      static GetBezierLinePoints(yb, bb, Wy, Uy) {
        return SU.e.CreateQuadraticBezier(yb, bb, Wy, Uy).getPoints().flatMap((yb => [yb.x, yb.y, yb.z]))
      }
      static GetArrowCap(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [yb.clone(), yb.add(bb.multiplyByFloats(Wy, Wy, Wy))],
          widths: [Uy, hy, fy, Zy]
        }
      }
      static GetPointsFromText(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Zy = [],
          cb = mh(yb, bb, Wy, Uy);
        for (const Py of cb) {
          for (const yb of Py.paths) {
            const bb = [],
              Wy = yb.getPoints();
            for (const yb of Wy) bb.push(yb.x, yb.y, hy);
            Zy.push(bb)
          }
          if (fy)
            for (const yb of Py.holes) {
              const bb = [],
                Wy = yb.getPoints();
              for (const yb of Wy) bb.push(yb.x, yb.y, hy);
              Zy.push(bb)
            }
        }
        return Zy
      }
      static Color3toRGBAUint8(yb) {
        const bb = new Uint8Array(4 * yb.length);
        for (let Wy = 0, Uy = 0; Wy < yb.length; Wy++) bb[Uy++] = 255 * yb[Wy].r, bb[Uy++] = 255 * yb[Wy].g, bb[Uy++] = 255 * yb[Wy].b, bb[Uy++] = 255;
        return bb
      }
      static CreateColorsTexture(yb, bb, Wy, Uy) {
        const hy = Uy.xh().getCaps().maxTextureSize ?? 1,
          fy = bb.length > hy ? hy : bb.length,
          Zy = Math.ceil(bb.length / hy);
        Zy > 1 && (bb = [...bb, ...Array(fy * Zy - bb.length).fill(bb[0])]);
        const cb = CU.Color3toRGBAUint8(bb),
          Py = new Jy.d(cb, fy, Zy, BW.b.TEXTUREFORMAT_RGBA, Uy, !1, !0, Wy);
        return Py.name = yb, Py
      }
      static PrepareEmptyColorsTexture(yb) {
        if (!sU.EmptyColorsTexture) {
          const bb = new Uint8Array(4);
          sU.EmptyColorsTexture = new Jy.d(bb, 1, 1, BW.b.TEXTUREFORMAT_RGBA, yb, !1, !1, Jy.d.NEAREST_NEAREST), sU.EmptyColorsTexture.name = "grlEmptyColorsTexture", sU.EmptyColorsTexture.Nby.addOnce((() => {
            sU.EmptyColorsTexture = null
          }))
        }
        return sU.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        sU.EmptyColorsTexture?.dispose(), sU.EmptyColorsTexture = null
      }
      static BooleanToNumber(yb) {
        return yb ? 1 : 0
      }
    }
    class TU extends Ly.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class VU extends Qy.c {
      isCompatible(yb) {
        return !0
      }
      constructor(yb, bb, Wy) {
        Wy = Wy || {
          color: sU.DEFAULT_COLOR
        };
        const Uy = new TU;
        Uy.GREASED_LINE_HAS_COLOR = !!Wy.color && !Wy.useColors, Uy.GREASED_LINE_SIZE_ATTENUATION = Wy.sizeAttenuation ?? !1, Uy.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Wy.colorDistributionType, Uy.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (bb ?? yb.kWy()).useRightHandedSystem, Uy.GREASED_LINE_CAMERA_FACING = Wy.cameraFacing ?? !0, super(yb, VU.GREASED_LINE_MATERIAL_NAME, 200, Uy, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Wy?.forceGLSL || VU.ForceGLSL, this._scene = bb ?? yb.kWy(), this._engine = this._scene.xh(), this._cameraFacing = Wy.cameraFacing ?? !0, this.visibility = Wy.visibility ?? 1, this.useDash = Wy.useDash ?? !1, this.dashRatio = Wy.dashRatio ?? .5, this.dashOffset = Wy.dashOffset ?? 0, this.width = Wy.width ? Wy.width : Wy.sizeAttenuation ? sU.DEFAULT_WIDTH_ATTENUATED : sU.DEFAULT_WIDTH, this._sizeAttenuation = Wy.sizeAttenuation ?? !1, this.colorMode = Wy.colorMode ?? 0, this._color = Wy.color ?? null, this.useColors = Wy.useColors ?? !1, this._colorsDistributionType = Wy.colorDistributionType ?? 0, this.colorsSampling = Wy.colorsSampling ?? Jy.d.NEAREST_NEAREST, this._colors = Wy.colors ?? null, this.dashCount = Wy.dashCount ?? 1, this.resolution = Wy.resolution ?? new Fy.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Wy.colorsTexture ? this.colorsTexture = Wy.colorsTexture : this._colors ? this.colorsTexture = CU.CreateColorsTexture(`${yb.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? sU.DEFAULT_COLOR, CU.PrepareEmptyColorsTexture(this._scene)), this._engine.Nby.add((() => {
          CU.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(yb) {
        yb.push("grl_offsets"), yb.push("grl_widths"), yb.push("grl_colorPointers"), yb.push("grl_counters"), this._cameraFacing ? (yb.push("grl_previousAndSide"), yb.push("grl_nextAndCounters")) : yb.push("grl_slopes")
      }
      getSamplers(yb) {
        yb.push("grl_colors")
      }
      getActiveTextures(yb) {
        this.colorsTexture && yb.push(this.colorsTexture)
      }
      getUniforms() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const bb = [{
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
        return this._cameraFacing && bb.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === yb && bb.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: bb,
          vertex: this._cameraFacing && this._isGLSL(yb) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(yb) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(yb) {
        if (this._cameraFacing) {
          yb.qcy("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || yb.qcy("viewProjection", this._scene.getTransformMatrix());
          const bb = Fy.j.Vector4[0];
          bb.x = this._aspect, bb.y = this._resolution.x, bb.z = this._resolution.y, bb.w = this.width, yb.updateVector4("grl_aspect_resolution_lineWidth", bb)
        }
        const bb = Fy.j.Vector4[0];
        bb.x = CU.BooleanToNumber(this.useDash), bb.y = this._dashArray, bb.z = this.dashOffset, bb.w = this.dashRatio, yb.updateVector4("grl_dashOptions", bb);
        const Wy = Fy.j.Vector4[1];
        Wy.x = this.colorMode, Wy.y = this.visibility, Wy.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Wy.w = CU.BooleanToNumber(this.useColors), yb.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Wy), this._color && yb.updateColor3("grl_singleColor", this._color);
        const Uy = this.colorsTexture ?? sU.EmptyColorsTexture;
        yb.setTexture("grl_colors", Uy), yb.updateFloat2("grl_textureSize", Uy?.getSize().width ?? 1, Uy?.getSize().height ?? 1)
      }
      prepareDefines(yb, bb, Wy) {
        yb.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, yb.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, yb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, yb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = bb.useRightHandedSystem, yb.GREASED_LINE_CAMERA_FACING = this._cameraFacing, yb.GREASED_LINE_USE_OFFSETS = !!Wy.offsets
      }
      getClassName() {
        return VU.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(bb) ? function(yb, bb) {
          if ("vertex" === yb) {
            const yb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return bb && (yb["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), yb
          }
          return "fragment" === yb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(yb, this._cameraFacing) : function(yb, bb) {
          if ("vertex" === yb) {
            const yb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return bb && (yb["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), yb
          }
          return "fragment" === yb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(yb, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(yb) {
        this.setColors(yb)
      }
      setColors(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this._colors?.length ?? 0;
        if (this._colors = yb, null !== yb && 0 !== yb.length) {
          if (!bb || Wy)
            if (this.colorsTexture && Uy === yb.length && !Wy) {
              const bb = CU.Color3toRGBAUint8(yb);
              this.colorsTexture.update(bb)
            } else this.colorsTexture?.dispose(), this.colorsTexture = CU.CreateColorsTexture(`${this._material.name}-colors-texture`, yb, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(yb) {
        this._dashCount = yb, this._dashArray = 1 / yb
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(yb) {
        this._sizeAttenuation = yb, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(yb) {
        this.setColor(yb)
      }
      setColor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== yb || null !== this._color && null === yb ? (this._color = yb, bb || this.markAllDefinesAsDirty()) : this._color = yb
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(yb) {
        this._colorsDistributionType = yb, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(yb) {
        this._aspect = yb.x / yb.y, this._resolution = yb
      }
      serialize() {
        const yb = super.serialize(),
          bb = {
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
        return this._colors && (bb.colors = this._colors), this._color && (bb.color = this._color), yb.greasedLineMaterialOptions = bb, yb
      }
      parse(yb, bb, Wy) {
        super.parse(yb, bb, Wy);
        const Uy = yb.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Uy.color && this.setColor(Uy.color, !0), Uy.colorDistributionType && (this.colorsDistributionType = Uy.colorDistributionType), Uy.colors && (this.colors = Uy.colors), Uy.colorsSampling && (this.colorsSampling = Uy.colorsSampling), Uy.colorMode && (this.colorMode = Uy.colorMode), Uy.useColors && (this.useColors = Uy.useColors), Uy.visibility && (this.visibility = Uy.visibility), Uy.useDash && (this.useDash = Uy.useDash), Uy.dashCount && (this.dashCount = Uy.dashCount), Uy.dashRatio && (this.dashRatio = Uy.dashRatio), Uy.dashOffset && (this.dashOffset = Uy.dashOffset), Uy.width && (this.width = Uy.width), Uy.sizeAttenuation && (this.sizeAttenuation = Uy.sizeAttenuation), Uy.resolution && (this.resolution = Uy.resolution), this.colors ? this.colorsTexture = CU.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, bb) : CU.PrepareEmptyColorsTexture(bb), this.markAllDefinesAsDirty()
      }
      copyTo(yb) {
        const bb = yb;
        bb.colorsTexture?.dispose(), this._colors && (bb.colorsTexture = CU.CreateColorsTexture(`${bb._material.name}-colors-texture`, this._colors, bb.colorsSampling, this._scene)), bb.setColor(this.color, !0), bb.colorsDistributionType = this.colorsDistributionType, bb.colorsSampling = this.colorsSampling, bb.colorMode = this.colorMode, bb.useColors = this.useColors, bb.visibility = this.visibility, bb.useDash = this.useDash, bb.dashCount = this.dashCount, bb.dashRatio = this.dashRatio, bb.dashOffset = this.dashOffset, bb.width = this.width, bb.sizeAttenuation = this.sizeAttenuation, bb.resolution = this.resolution, bb.markAllDefinesAsDirty()
      }
      _isGLSL(yb) {
        return 0 === yb || this._forceGLSL
      }
    }
    VU.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", VU.ForceGLSL = !1;
    var JU = Wy(38902),
      gh = Wy(38915),
      GU = Wy(37346),
      OU = Wy(38983),
      RU = Wy(38296);
    class vh extends OU.s {
      constructor(yb, bb, Uy) {
        const hy = bb.xh(),
          fy = hy.isWebGPU && !(Uy.forceGLSL || vh.ForceGLSL),
          Zy = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        bb.useRightHandedSystem && Zy.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const cb = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Uy.cameraFacing ? (Zy.push("GREASED_LINE_CAMERA_FACING"), cb.push("grl_previousAndSide", "grl_nextAndCounters")) : (cb.push("grl_slopes"), cb.push("grl_counters"));
        const Py = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (fy || Py.push("world", "viewProjection", "view", "projection"), super(yb, bb, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: fy ? ["Scene", "Mesh"] : void 0,
            attributes: cb,
            uniforms: Py,
            samplers: fy ? [] : ["grlColors"],
            defines: Zy,
            extraInitializationsAsync: async () => {
              fy ? await Promise.all([Wy.e(312).then((() => Wy(60463))), Wy.e(371).then((() => Wy(60472)))]) : await Promise.all([Wy.e(305).then((() => Wy(60480))), Wy.e(372).then((() => Wy(60489)))])
            },
            shaderLanguage: fy ? 1 : 0
          }), this._color = wy.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Uy = Uy || {
            color: sU.DEFAULT_COLOR
          }, this.visibility = Uy.visibility ?? 1, this.useDash = Uy.useDash ?? !1, this.dashRatio = Uy.dashRatio ?? .5, this.dashOffset = Uy.dashOffset ?? 0, this.dashCount = Uy.dashCount ?? 1, this.width = Uy.width ? Uy.width : Uy.sizeAttenuation && Uy.cameraFacing ? sU.DEFAULT_WIDTH_ATTENUATED : sU.DEFAULT_WIDTH, this.sizeAttenuation = Uy.sizeAttenuation ?? !1, this.color = Uy.color ?? wy.d.White(), this.useColors = Uy.useColors ?? !1, this.colorsDistributionType = Uy.colorDistributionType ?? 0, this.colorsSampling = Uy.colorsSampling ?? Jy.d.NEAREST_NEAREST, this.colorMode = Uy.colorMode ?? 0, this._colors = Uy.colors ?? null, this._cameraFacing = Uy.cameraFacing ?? !0, this.resolution = Uy.resolution ?? new Fy.m(hy.getRenderWidth(), hy.getRenderHeight()), Uy.colorsTexture ? this.colorsTexture = Uy.colorsTexture : this._colors ? this.colorsTexture = CU.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, bb) : (this._color = this._color ?? sU.DEFAULT_COLOR, this.colorsTexture = CU.PrepareEmptyColorsTexture(bb)), fy) {
          const yb = new RU.d;
          yb.setParameters(), yb.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", yb)
        }
        hy.Nby.add((() => {
          CU.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== sU.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Fy.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(yb) {
        this.setColors(yb)
      }
      setColors(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = this._colors?.length ?? 0;
        if (this._colors = yb, null !== yb && 0 !== yb.length) {
          if (!bb || Wy)
            if (this._colorsTexture && Uy === yb.length && !Wy) {
              const bb = CU.Color3toRGBAUint8(yb);
              this._colorsTexture.update(bb)
            } else this._colorsTexture && this._colorsTexture !== sU.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = CU.CreateColorsTexture(`${this.name}-colors-texture`, yb, this.colorsSampling, this.kWy())
        } else {
          this._colorsTexture && this._colorsTexture !== sU.EmptyColorsTexture && this._colorsTexture.dispose();
          const yb = this.kWy();
          yb && (this.colorsTexture = CU.PrepareEmptyColorsTexture(yb))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(yb) {
        this._colorsTexture = yb, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(yb) {
        this._width = yb, this.setFloat("grlWidth", yb)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(yb) {
        this._useColors = yb, this.setFloat("grlUseColors", CU.BooleanToNumber(yb))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(yb) {
        this._colorsSampling = yb
      }
      get visibility() {
        return this._visibility
      }
      set visibility(yb) {
        this._visibility = yb, this.setFloat("grlVisibility", yb)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(yb) {
        this._useDash = yb, this.setFloat("grlUseDash", CU.BooleanToNumber(yb))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(yb) {
        this._dashOffset = yb, this.setFloat("grlDashOffset", yb)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(yb) {
        this._dashRatio = yb, this.setFloat("grlDashRatio", yb)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(yb) {
        this._dashCount = yb, this._dashArray = 1 / yb, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(yb) {
        this._sizeAttenuation = yb, this.setFloat("grlSizeAttenuation", CU.BooleanToNumber(yb))
      }
      get color() {
        return this._color
      }
      set color(yb) {
        this.setColor(yb)
      }
      setColor(yb) {
        yb = yb ?? sU.DEFAULT_COLOR, this._color = yb, this.setColor3("grlColor", yb)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(yb) {
        this._colorsDistributionType = yb, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(yb) {
        this._colorMode = yb, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(yb) {
        this._resolution = yb, this.setVector2("grlResolution", yb), this.setFloat("grlAspect", yb.x / yb.y)
      }
      serialize() {
        const yb = super.serialize(),
          bb = {
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
        return this._colors && (bb.colors = this._colors), yb.greasedLineMaterialOptions = bb, yb
      }
      parse(yb, bb, Wy) {
        const Uy = yb.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Uy.color && (this.color = Uy.color), Uy.colorDistributionType && (this.colorsDistributionType = Uy.colorDistributionType), Uy.colorsSampling && (this.colorsSampling = Uy.colorsSampling), Uy.colorMode && (this.colorMode = Uy.colorMode), Uy.useColors && (this.useColors = Uy.useColors), Uy.visibility && (this.visibility = Uy.visibility), Uy.useDash && (this.useDash = Uy.useDash), Uy.dashCount && (this.dashCount = Uy.dashCount), Uy.dashRatio && (this.dashRatio = Uy.dashRatio), Uy.dashOffset && (this.dashOffset = Uy.dashOffset), Uy.width && (this.width = Uy.width), Uy.sizeAttenuation && (this.sizeAttenuation = Uy.sizeAttenuation), Uy.resolution && (this.resolution = Uy.resolution), Uy.colors ? this.colorsTexture = CU.CreateColorsTexture(`${this.name}-colors-texture`, Uy.colors, this.colorsSampling, this.kWy()) : this.colorsTexture = CU.PrepareEmptyColorsTexture(bb), this._cameraFacing = Uy.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var ih, MU, YU;
    vh.ForceGLSL = !1,
      function(yb) {
        yb[yb.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", yb[yb.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(ih || (ih = {})),
      function(yb) {
        yb[yb.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", yb[yb.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", yb[yb.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(MU || (MU = {})),
      function(yb) {
        yb[yb.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", yb[yb.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", yb[yb.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", yb[yb.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", yb[yb.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(YU || (YU = {}));
    class XU extends JU.c {
      constructor(yb, bb, Wy) {
        super(yb, bb, null, null, !1, !1), this.name = yb, this._options = Wy, this._lazy = !1, this._updatable = !1, this._engine = bb.xh(), this._lazy = Wy.lazy ?? !1, this._updatable = Wy.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Wy.colorPointers ?? [], this._widths = Wy.widths ?? new Array(Wy.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(yb) {
        let bb = 0;
        for (const Uy of this._points) bb += Uy.length;
        const Wy = bb / 3 * 2 - this._widths.length;
        for (let Uy = 0; Uy < Wy; Uy++) this._widths.push(yb)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.bf && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(yb, bb) {
        for (const Wy of yb) this._points.push(Wy);
        this._lazy || this.setPoints(this._points, bb)
      }
      dispose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(yb, bb)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(yb) {
        this._uvs = yb instanceof Float32Array ? yb : new Float32Array(yb), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(yb) {
        this.material instanceof vh && this.material.setDefine("GREASED_LINE_USE_OFFSETS", yb?.length > 0), this._offsets = yb, this._offsetsBuffer ? this._offsetsBuffer.update(yb) : this._createOffsetsBuffer(yb)
      }
      get widths() {
        return this._widths
      }
      set widths(yb) {
        this._widths = yb, this._lazy || this._widthsBuffer && this._widthsBuffer.update(yb)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(yb) {
        this._colorPointers = yb, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(yb)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof vh) return this.material;
        const yb = this.material?.pluginManager?.getPlugin(VU.GREASED_LINE_MATERIAL_NAME);
        return yb || void 0
      }
      get points() {
        const yb = [];
        return GU.d.DeepCopy(this._points, yb), yb
      }
      setPoints(yb, bb) {
        this._points = CU.ConvertPoints(yb, bb?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), bb?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, bb)
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
      serialize(yb) {
        super.serialize(yb), yb.type = this.getClassName(), yb.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new gh.e;
        return bb.positions = this._vertexPositions, bb.indices = this._indices, bb.uvs = this._uvs, yb && (bb.normals = [], gh.e.ComputeNormals(this._vertexPositions, this._indices, bb.normals)), bb.applyToMesh(this, this._options.updatable), bb
      }
      _createOffsetsBuffer(yb) {
        const bb = this._scene.xh(),
          Wy = new py.b(bb, yb, this._updatable, 3);
        this.setVerticesBuffer(Wy.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Wy
      }
    }
    class nU {
      constructor(yb, bb) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = yb, this.wasAddedByNoopNode = bb
      }
      getIndicesAccessor(yb, bb, Wy, Uy, hy) {
        return this._indicesAccessorMap.get(yb)?.get(bb)?.get(Wy)?.get(Uy)?.get(hy)
      }
      setIndicesAccessor(yb, bb, Wy, Uy, hy, fy) {
        let Zy = this._indicesAccessorMap.get(yb);
        Zy || (Zy = new Map, this._indicesAccessorMap.set(yb, Zy));
        let cb = Zy.get(bb);
        cb || (cb = new Map, Zy.set(bb, cb));
        let Py = cb.get(Wy);
        Py || (Py = new Map, cb.set(Wy, Py));
        let oy = Py.get(Uy);
        oy || (oy = new Map, Py.set(Uy, oy)), oy.set(hy, fy)
      }
      pushExportedNode(yb) {
        this._exportedNodes.has(yb) || this._exportedNodes.add(yb)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(yb) {
        return this._vertexBufferViewMap.get(yb)
      }
      setVertexBufferView(yb, bb) {
        this._vertexBufferViewMap.set(yb, bb)
      }
      setRemappedBufferView(yb, bb, Wy) {
        this._remappedBufferView.set(yb, new Map), this._remappedBufferView.get(yb).set(bb, Wy)
      }
      getRemappedBufferView(yb, bb) {
        return this._remappedBufferView.get(yb)?.get(bb)
      }
      getVertexAccessor(yb, bb, Wy) {
        return this._vertexAccessorMap.get(yb)?.get(bb)?.get(Wy)
      }
      setVertexAccessor(yb, bb, Wy, Uy) {
        let hy = this._vertexAccessorMap.get(yb);
        hy || (hy = new Map, this._vertexAccessorMap.set(yb, hy));
        let fy = hy.get(bb);
        fy || (fy = new Map, hy.set(bb, fy)), fy.set(Wy, Uy)
      }
      hasVertexColorAlpha(yb) {
        return this._vertexMapColorAlpha.get(yb) || !1
      }
      setHasVertexColorAlpha(yb, bb) {
        return this._vertexMapColorAlpha.set(yb, bb)
      }
      getMesh(yb) {
        return this._meshMap.get(yb)
      }
      setMesh(yb, bb) {
        this._meshMap.set(yb, bb)
      }
      bindMorphDataToMesh(yb, bb) {
        const Wy = this._meshMorphTargetMap.get(yb) || [];
        this._meshMorphTargetMap.set(yb, Wy), -1 === Wy.indexOf(bb) && Wy.push(bb)
      }
      getMorphTargetsFromMesh(yb) {
        return this._meshMorphTargetMap.get(yb)
      }
    }
    class uU {
      _ApplyExtension(yb, bb, Wy, Uy) {
        if (Wy >= bb.length) return Promise.resolve(yb);
        const hy = Uy(bb[Wy], yb);
        return hy ? hy.then((async yb => yb ? await this._ApplyExtension(yb, bb, Wy + 1, Uy) : null)) : this._ApplyExtension(yb, bb, Wy + 1, Uy)
      }
      _ApplyExtensions(yb, bb) {
        const Wy = [];
        for (const Uy of uU._ExtensionNames) Wy.push(this._extensions[Uy]);
        return this._ApplyExtension(yb, Wy, 0, bb)
      }
      _extensionsPostExportNodeAsync(yb, bb, Wy, Uy, hy) {
        return this._ApplyExtensions(bb, ((bb, fy) => bb.postExportNodeAsync && bb.postExportNodeAsync(yb, fy, Wy, Uy, hy, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(yb, bb, Wy) {
        return this._ApplyExtensions(bb, ((bb, Uy) => bb.postExportMaterialAsync && bb.postExportMaterialAsync(yb, Uy, Wy)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        return await Promise.all(uU._ExtensionNames.map((async hy => {
          const fy = this._extensions[hy];
          if (fy.postExportMaterialAdditionalTexturesAsync) {
            const hy = await fy.postExportMaterialAdditionalTexturesAsync(yb, bb, Wy);
            Uy.push(...hy)
          }
        }))), Uy
      }
      _extensionsPostExportTextures(yb, bb, Wy) {
        for (const Uy of uU._ExtensionNames) {
          const hy = this._extensions[Uy];
          hy.postExportTexture && hy.postExportTexture(yb, bb, Wy)
        }
      }
      _extensionsPostExportMeshPrimitive(yb) {
        for (const bb of uU._ExtensionNames) {
          const Wy = this._extensions[bb];
          Wy.postExportMeshPrimitive && Wy.postExportMeshPrimitive(yb, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const yb of uU._ExtensionNames) {
          const bb = this._extensions[yb];
          bb.preGenerateBinaryAsync && await bb.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(yb) {
        for (const bb of uU._ExtensionNames) {
          const Wy = this._extensions[bb];
          Wy.enabled && yb(Wy)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((yb => {
          var bb, Wy, Uy;
          yb.wasUsed && ((bb = this._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(yb.name) && this._glTF.extensionsUsed.push(yb.name), yb.required && ((Wy = this._glTF).extensionsRequired || (Wy.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(yb.name) && this._glTF.extensionsRequired.push(yb.name)), (Uy = this._glTF).extensions || (Uy.extensions = {}), yb.onExporting && yb.onExporting())
        }))
      }
      _loadExtensions() {
        for (const yb of uU._ExtensionNames) {
          const bb = uU._ExtensionFactories[yb](this);
          this._extensions[yb] = bb
        }
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sy.c.LastCreatedScene,
          bb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${sy.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new MW(this), this._extensions = {}, this._bufferManager = new WU, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !yb) throw new Error("No scene available to export");
        this._babylonScene = yb, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: yb => yb?.jBy?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...bb
        }, this._loadExtensions()
      }
      dispose() {
        for (const yb in this._extensions) {
          this._extensions[yb].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        uU.UnregisterExtension(yb) && hy.Tools.Warn(`Extension with the name ${yb} already exists`), uU._ExtensionFactories[yb] = bb;
        const Uy = Wy ?? 0;
        uU._ExtensionOrders[yb] = Uy;
        let fy = uU._ExtensionNames.length;
        for (let hy = 0; hy < uU._ExtensionNames.length; hy++) {
          const yb = uU._ExtensionNames[hy];
          if (Uy < uU._ExtensionOrders[yb]) {
            fy = hy;
            break
          }
        }
        uU._ExtensionNames.splice(fy, 0, yb)
      }
      static UnregisterExtension(yb) {
        if (!uU._ExtensionFactories[yb]) return !1;
        delete uU._ExtensionFactories[yb], delete uU._ExtensionOrders[yb];
        const bb = uU._ExtensionNames.indexOf(yb);
        return -1 !== bb && uU._ExtensionNames.splice(bb, 1), !0
      }
      _generateJSON(yb, bb, Wy) {
        const Uy = {
          byteLength: yb
        };
        return Uy.byteLength && (this._glTF.buffers = [Uy]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Pf = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Uy.uri = bb + ".bin"), Wy ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(yb) {
        const bb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Wy = this._generateJSON(bb.byteLength, yb, !0),
          Uy = new Blob([bb], {
            type: "application/octet-stream"
          }),
          hy = yb + ".gltf",
          fy = yb + ".bin",
          Zy = new oy;
        if (Zy.files[hy] = Wy, Zy.files[fy] = Uy, this._imageData)
          for (const cb in this._imageData) Zy.files[cb] = this._imageData[cb];
        return Zy
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(yb) {
        const bb = yb % 4;
        return 0 === bb ? bb : 4 - bb
      }
      async generateGLBAsync(yb) {
        this._shouldUseGlb = !0;
        const bb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Wy = this._generateJSON(bb.byteLength),
          Uy = yb + ".glb";
        let hy, fy = Wy.length;
        if ("undefined" !== typeof TextEncoder) {
          hy = (new TextEncoder).encode(Wy), fy = hy.length
        }
        const Zy = this._getPadding(fy),
          cb = this._getPadding(bb.byteLength),
          Py = 28 + fy + Zy + bb.byteLength + cb,
          By = new yh(Py);
        if (By.writeUInt32(1179937895), By.writeUInt32(2), By.writeUInt32(Py), By.writeUInt32(fy + Zy), By.writeUInt32(1313821514), hy) By.writeTypedArray(hy);
        else {
          const yb = "_".charCodeAt(0);
          for (let bb = 0; bb < fy; ++bb) {
            const Uy = Wy.charCodeAt(bb);
            Uy != Wy.codePointAt(bb) ? By.writeUInt8(yb) : By.writeUInt8(Uy)
          }
        }
        for (let oy = 0; oy < Zy; ++oy) By.writeUInt8(32);
        By.writeUInt32(bb.byteLength + cb), By.writeUInt32(5130562), By.writeTypedArray(bb);
        for (let oy = 0; oy < cb; ++oy) By.writeUInt8(0);
        const Ky = new oy;
        return Ky.files[Uy] = new Blob([By.getOutputData()], {
          type: "application/octet-stream"
        }), Ky
      }
      _setNodeTransformation(yb, bb, Wy) {
        if (bb.getPivotPoint().equalsWithEpsilon(HW, nW.e) || hy.Tools.Warn("Pivot points are not supported in the glTF serializer"), !bb.position.equalsWithEpsilon(HW, nW.e)) {
          const hy = Uy.TmpVectors.dU[0].Coy(bb.position);
          Wy && tU(hy), yb.translation = hy.hBy()
        }
        bb.vZ.equalsWithEpsilon(FW, nW.e) || (yb.scale = bb.vZ.hBy());
        const fy = bb.rotationQuaternion?.clone() || Uy.Quaternion.FromEulerAngles(bb.rotation.x, bb.rotation.y, bb.rotation.z);
        fy.equalsWithEpsilon(aU, nW.e) || (Wy && wW(fy), yb.rotation = fy.normalize().hBy())
      }
      _setCameraTransformation(yb, bb, Wy) {
        const hy = Uy.TmpVectors.dU[0],
          fy = Uy.TmpVectors.Quaternion[0],
          Zy = bb.getWorldMatrix();
        if (bb.parent) {
          const yb = bb.parent.getWorldMatrix().invertToRef(Uy.TmpVectors.Matrix[0]);
          Zy.multiplyToRef(yb, Uy.TmpVectors.Matrix[1]).decompose(void 0, fy, hy)
        } else Zy.decompose(void 0, fy, hy);
        hy.equalsWithEpsilon(HW, nW.e) || (Wy && tU(hy), yb.translation = hy.hBy()), Wy && wW(fy), this._babylonScene.useRightHandedSystem || kU(fy), fy.equalsWithEpsilon(aU, nW.e) || (yb.rotation = fy.hBy())
      }
      _listAvailableCameras() {
        for (const yb of this._babylonScene.cameras) {
          const bb = {
            type: yb.mode === UU.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (yb.name && (bb.name = yb.name), "perspective" === bb.type) bb.perspective = {
            aspectRatio: yb.xh().getAspectRatio(yb),
            yfov: yb.fovMode === UU.b.FOVMODE_VERTICAL_FIXED ? yb.fov : yb.fov * yb.xh().getAspectRatio(yb),
            znear: yb.minZ,
            zfar: yb.maxZ
          };
          else if ("orthographic" === bb.type) {
            const Wy = yb.orthoLeft && yb.orthoRight ? .5 * (yb.orthoRight - yb.orthoLeft) : .5 * yb.xh().getRenderWidth(),
              Uy = yb.orthoBottom && yb.orthoTop ? .5 * (yb.orthoTop - yb.orthoBottom) : .5 * yb.xh().getRenderHeight();
            bb.orthographic = {
              xmag: Wy,
              ymag: Uy,
              znear: yb.minZ,
              zfar: yb.maxZ
            }
          }
          this._camerasMap.set(yb, bb)
        }
      }
      _exportAndAssignCameras() {
        const yb = Array.from(this._camerasMap.values());
        for (const bb of yb) {
          const yb = this._nodesCameraMap.get(bb);
          if (void 0 !== yb) {
            this._cameras.push(bb);
            for (const bb of yb) bb.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const yb of this._babylonScene.skeletons) {
          if (yb.bones.length <= 0) continue;
          const bb = {
            joints: []
          };
          this._skinMap.set(yb, bb)
        }
      }
      _exportAndAssignSkeletons(yb) {
        for (const Wy of this._babylonScene.skeletons) {
          if (Wy.bones.length <= 0) continue;
          const fy = this._skinMap.get(Wy);
          if (void 0 == fy) continue;
          const Zy = {};
          let cb = -1;
          for (let yb = 0; yb < Wy.bones.length; ++yb) {
            const bb = Wy.bones[yb],
              Uy = bb.getIndex() ?? yb; - 1 !== Uy && (Zy[Uy] = bb, Uy > cb && (cb = Uy))
          }
          const Py = [];
          for (let Wy = 0; Wy <= cb; ++Wy) {
            const cb = Zy[Wy],
              oy = cb.getTransformNode(),
              By = oy ? this._nodeMap.get(oy) : void 0;
            if (void 0 === By) {
              hy.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            fy.joints.push(By);
            const Ky = cb.getAbsoluteInverseBindMatrix().clone();
            yb.has(oy) && (bb = Ky, uW.invertToRef(Uy.TmpVectors.Matrix[0]).multiplyToRef(bb, bb).multiplyToRef(uW, bb)), Py.push(Ky)
          }
          const oy = this._nodesSkinMap.get(fy);
          if (fy.joints.length > 0 && void 0 !== oy) {
            const yb = new Float32Array(16 * Py.length);
            Py.forEach(((bb, Wy) => {
              yb.set(bb.m, 16 * Wy)
            }));
            const bb = this._bufferManager.createBufferView(yb);
            this._accessors.push(this._bufferManager.createAccessor(bb, "MAT4", 5126, Py.length)), fy.inverseBindMatrices = this._accessors.length - 1, this._skins.push(fy);
            const Wy = this._skins.length - 1;
            for (const Uy of oy) Uy.skin = Wy
          }
        }
        var bb
      }
      async _exportSceneAsync() {
        const yb = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const bb = this._options.metadataSelector(this._babylonScene.metadata);
          bb && (yb.extras = bb)
        }
        const bb = new Array,
          Wy = new Array,
          Uy = new Array,
          hy = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let fy;
        if (hy && !this._options.includeCoordinateSystemConversionNodes)
          for (const oy of this._babylonScene.animationGroups)
            for (const yb of oy.targetedAnimations) {
              const bb = yb.target;
              bb instanceof Ky.d && !bb.parent && (fy ?? (fy = new Set)).add(bb)
            }
        for (const oy of this._babylonScene.rootNodes) {
          const yb = oy.animations,
            Zy = !!yb && yb.length > 0 || fy?.has(oy);
          hy && !this._options.includeCoordinateSystemConversionNodes && rU(oy, this._babylonScene.useRightHandedSystem) && !Zy ? Uy.push(...oy.getChildren()) : this._babylonScene.useRightHandedSystem ? bb.push(oy) : Wy.push(oy)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Zy = new nU(!0, !1);
        yb.nodes.push(...await this._exportNodesAsync(Wy, Zy));
        const cb = new nU(!1, !1);
        yb.nodes.push(...await this._exportNodesAsync(bb, cb));
        const Py = new nU(!1, !0);
        yb.nodes.push(...await this._exportNodesAsync(Uy, Py)), yb.nodes.length && this._scenes.push(yb), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Zy.getNodesSet()), this._babylonScene.animationGroups.length && KU._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Zy.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(yb) {
        return this._nodeMap.get(yb)
      }
      _getAnimationIndex(yb) {
        return this._animationGroupMap.get(yb)
      }
      _getCameraIndex(yb) {
        const bb = this._camerasMap.get(yb);
        if (!bb) return;
        const Wy = this._cameras.indexOf(bb);
        return Wy >= 0 ? Wy : void 0
      }
      _getMaterialIndex(yb) {
        return this._materialMap.get(yb)
      }
      _getRootIndex(yb, bb) {
        switch (yb) {
          case "nodes":
            return this._getNodeIndex(bb);
          case "animations":
            return this._getAnimationIndex(bb);
          case "cameras":
            return this._getCameraIndex(bb);
          case "materials":
            return this._getMaterialIndex(bb);
          case "meshes": {
            const yb = this._getNodeIndex(bb);
            return void 0 === yb ? void 0 : this._nodes[yb]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(bb)?.index;
          case "images": {
            const yb = this._materialExporter.getTextureInfo(bb)?.index;
            if (void 0 === yb) return;
            const Wy = this._textures[yb];
            for (const bb of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const yb = Wy?.extensions?.[bb]?.source;
              if ("number" === typeof yb) return yb
            }
            return Wy?.source
          }
          case "samplers": {
            const yb = this._materialExporter.getTextureInfo(bb)?.index;
            return void 0 === yb ? void 0 : this._textures[yb]?.sampler
          }
          case "skins": {
            const yb = this._skinMap.get(bb),
              Wy = yb ? this._skins.indexOf(yb) : -1;
            return Wy >= 0 ? Wy : void 0
          }
          case "scenes":
            return bb === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(yb, bb, Wy) {
        const Uy = this._nodes[yb];
        if (!Uy) throw new Error(`Cannot write ${bb}: glTF node ${yb} does not exist.`);
        Uy.extensions || (Uy.extensions = {}), Uy.extensions[bb] = Wy
      }
      _shouldExportNode(yb) {
        let bb = this._shouldExportNodeMap.get(yb);
        return void 0 === bb && (bb = this._options.shouldExportNode(yb), this._shouldExportNodeMap.set(yb, bb)), bb
      }
      async _exportNodesAsync(yb, bb) {
        const Wy = new Array;
        this._exportBuffers(yb, bb);
        for (const Uy of yb) await this._exportNodeAsync(Uy, Wy, bb);
        return Wy
      }
      _collectBuffers(yb, bb, Wy, Uy, hy) {
        if (this._shouldExportNode(yb) && yb instanceof ey.b && yb.geometry) {
          const fy = yb.geometry.getVertexBuffers();
          if (fy)
            for (const Uy in fy) {
              if (!jU(Uy)) continue;
              const Zy = fy[Uy];
              hy.setHasVertexColorAlpha(Zy, yb.hasVertexAlpha);
              const cb = Zy._buffer,
                Py = bb.get(cb) || [];
              bb.set(cb, Py), -1 === Py.indexOf(Zy) && Py.push(Zy);
              const oy = Wy.get(Zy) || [];
              Wy.set(Zy, oy), -1 === oy.indexOf(yb) && oy.push(yb)
            }
          const Zy = yb.morphTargetManager;
          if (Zy)
            for (let bb = 0; bb < Zy.numTargets; bb++) {
              const Wy = Zy.getTarget(bb),
                hy = Uy.get(Wy) || [];
              Uy.set(Wy, hy), -1 === hy.indexOf(yb) && hy.push(yb)
            }
        }
        for (const fy of yb.getChildren()) this._collectBuffers(fy, bb, Wy, Uy, hy)
      }
      _exportBuffers(yb, bb) {
        const Wy = new Map,
          Uy = new Map,
          hy = new Map;
        for (const cb of yb) this._collectBuffers(cb, Wy, Uy, hy, bb);
        const fy = Array.from(Wy.keys());
        for (const cb of fy) {
          const yb = cb.getData();
          if (!yb) throw new Error("Buffer data is not available");
          const hy = Wy.get(cb);
          if (!hy) continue;
          const fy = hy[0].byteStride;
          if (hy.some((yb => yb.byteStride !== fy))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Zy = IW(yb).slice();
          for (const bb of hy) {
            const yb = Uy.get(bb),
              {
                byteOffset: Wy,
                byteStride: hy,
                componentCount: fy,
                type: cb,
                count: Py,
                normalized: oy,
                kind: Ky
              } = LW(bb, yb);
            switch (Ky) {
              case By.g.NormalKind:
              case By.g.TangentKind:
                (0, YW.i)(Zy, Wy, hy, fy, cb, Py, oy, (yb => {
                  const bb = Math.sqrt(yb[0] * yb[0] + yb[1] * yb[1] + yb[2] * yb[2]);
                  if (bb > 0) {
                    const Wy = 1 / bb;
                    yb[0] *= Wy, yb[1] *= Wy, yb[2] *= Wy
                  }
                }));
                break;
              case By.g.ColorKind: {
                const bb = yb.filter((yb => yb.material instanceof fU.StandardMaterial || null == yb.material)).length;
                if (0 == bb) break;
                if (bb != yb.length) {
                  vb.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                cb == By.g.UNSIGNED_BYTE && vb.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Uy = new Ey.Color3,
                  Ky = new Ey.e,
                  ey = this._babylonScene.xh().useExactSrgbConversions;
                (0, YW.i)(Zy, Wy, hy, fy, cb, Py, oy, (yb => {
                  3 === yb.length ? (Uy.FPy(yb, 0), Uy.toLinearSpaceToRef(Uy, ey), Uy.toArray(yb, 0)) : (Ky.FPy(yb, 0), Ky.toLinearSpaceToRef(Ky, ey), Ky.toArray(yb, 0))
                }))
              }
            }
          }
          if (bb.convertToRightHanded) {
            for (const yb of hy) {
              const bb = Uy.get(yb),
                {
                  byteOffset: Wy,
                  byteStride: hy,
                  componentCount: fy,
                  type: cb,
                  count: Py,
                  normalized: oy,
                  kind: Ky
                } = LW(yb, bb);
              switch (Ky) {
                case By.g.PositionKind:
                case By.g.NormalKind:
                case By.g.TangentKind:
                  (0, YW.i)(Zy, Wy, hy, fy, cb, Py, oy, (yb => {
                    yb[0] = -yb[0]
                  }))
              }
            }
            bb.convertedToRightHandedBuffers.set(cb, Zy)
          }
          const Py = this._bufferManager.createBufferView(Zy, fy);
          bb.setVertexBufferView(cb, Py);
          const oy = new Map;
          for (const bb of hy) {
            const yb = Uy.get(bb),
              {
                kind: Wy,
                totalVertices: hy
              } = LW(bb, yb);
            switch (Wy) {
              case By.g.MatricesIndicesKind:
              case By.g.MatricesIndicesExtraKind:
                if (bb.type == By.g.FLOAT) {
                  const yb = bb.getFloatData(hy);
                  null !== yb && oy.set(bb, yb)
                }
            }
          }
          0 !== oy.size && vb.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Ky = Array.from(oy.keys());
          for (const Wy of Ky) {
            const yb = oy.get(Wy);
            if (!yb) continue;
            const Uy = yb.some((yb => yb >= 256)),
              hy = new(Uy ? Uint16Array : Uint8Array)(yb.length);
            for (let bb = 0; bb < yb.length; bb++) hy[bb] = yb[bb];
            const fy = this._bufferManager.createBufferView(hy, 4 * (Uy ? 2 : 1));
            bb.setRemappedBufferView(cb, Wy, fy)
          }
        }
        const Zy = Array.from(hy.keys());
        for (const cb of Zy) {
          const yb = hy.get(cb);
          if (!yb) continue;
          const Wy = eU(cb, yb[0], this._bufferManager, this._bufferViews, this._accessors, bb.convertToRightHanded);
          for (const Uy of yb) bb.bindMorphDataToMesh(Uy, Wy)
        }
      }
      async _exportNodeAsync(yb, bb, Wy) {
        let Uy = this._nodeMap.get(yb);
        if (void 0 !== Uy) return void(bb.includes(Uy) || bb.push(Uy));
        const hy = await this._createNodeAsync(yb, Wy);
        if (hy) {
          Uy = this._nodes.length, this._nodes.push(hy), this._nodeMap.set(yb, Uy), Wy.pushExportedNode(yb), bb.push(Uy);
          const fy = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Zy = [];
          this._babylonScene.animationGroups.length || (KU._CreateMorphTargetAnimationFromMorphTargetAnimations(yb, fy, Zy, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Wy.convertToRightHanded, this._options.shouldExportAnimation), yb.animations.length && KU._CreateNodeAnimationFromNodeAnimations(yb, fy, Zy, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Wy.convertToRightHanded, this._options.shouldExportAnimation)), fy.channels.length && fy.samplers.length && this._animations.push(fy), Zy.forEach((yb => {
            yb.channels.length && yb.samplers.length && this._animations.push(yb)
          }))
        }
        const fy = hy ? [] : bb;
        for (const Zy of yb.getChildren()) await this._exportNodeAsync(Zy, fy, Wy);
        hy && fy.length && (hy.children = fy)
      }
      async _createNodeAsync(yb, bb) {
        if (!this._shouldExportNode(yb)) return null;
        const Wy = {};
        if (yb.name && (Wy.name = yb.name), yb.metadata) {
          const bb = this._options.metadataSelector(yb.metadata);
          bb && (Wy.extras = bb)
        }
        if (yb instanceof Ky.d && (this._setNodeTransformation(Wy, yb, bb.convertToRightHanded), yb instanceof ey.b)) {
          const Uy = yb instanceof qb.b ? yb.zKy : yb;
          if (Uy.vJ && Uy.vJ.length > 0 && (Wy.mesh = await this._exportMeshAsync(Uy, bb)), yb.skeleton) {
            const bb = this._skinMap.get(yb.skeleton);
            void 0 !== bb && (void 0 === this._nodesSkinMap.get(bb) && this._nodesSkinMap.set(bb, []), this._nodesSkinMap.get(bb)?.push(Wy))
          }
        }
        if (yb instanceof XW.e) {
          const Uy = this._camerasMap.get(yb);
          if (Uy) {
            void 0 === this._nodesCameraMap.get(Uy) && this._nodesCameraMap.set(Uy, []), this._setCameraTransformation(Wy, yb, bb.convertToRightHanded);
            const hy = yb.parent;
            if (null !== hy && zU(yb, hy)) {
              const yb = this._nodeMap.get(hy);
              if (void 0 !== yb) {
                const bb = this._nodes[yb];
                return NW(Wy, bb), this._nodesCameraMap.get(Uy)?.push(bb), null
              }
            }
            this._nodesCameraMap.get(Uy)?.push(Wy)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Wy, yb, this._nodeMap, bb.convertToRightHanded) ? Wy : (vb.b.Warn(`Not exporting node ${yb.name}`), null)
      }
      _exportIndices(yb, bb, Wy, Uy, hy, Zy, cb, Py, oy) {
        let By = null;
        oy.mode = function(yb) {
          switch (yb) {
            case fy.e.TriangleFillMode:
              return 4;
            case fy.e.TriangleStripDrawMode:
              return 5;
            case fy.e.TriangleFanDrawMode:
              return 6;
            case fy.e.PointListDrawMode:
            case fy.e.PointFillMode:
              return 0;
            case fy.e.LineLoopDrawMode:
              return 2;
            case fy.e.LineListDrawMode:
              return 1;
            case fy.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${yb}`)
        }(Zy);
        const Ky = cb !== fy.e.CounterClockWiseSideOrientation && function(yb) {
          switch (yb) {
            case fy.e.TriangleFillMode:
            case fy.e.TriangleStripDrawMode:
            case fy.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Zy);
        if (Ky) {
          if (Zy === fy.e.TriangleStripDrawMode || Zy === fy.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const cb = bb ? new Uint32Array(Uy) : new Uint16Array(Uy);
          if (yb)
            for (let bb = 0; bb + 2 < Uy; bb += 3) cb[bb] = yb[Wy + bb] + hy, cb[bb + 1] = yb[Wy + bb + 2] + hy, cb[bb + 2] = yb[Wy + bb + 1] + hy;
          else
            for (let yb = 0; yb + 2 < Uy; yb += 3) cb[yb] = yb, cb[yb + 1] = yb + 2, cb[yb + 2] = yb + 1;
          By = cb
        } else if (yb && 0 !== hy) {
          const fy = bb ? new Uint32Array(Uy) : new Uint16Array(Uy);
          for (let bb = 0; bb < Uy; bb++) fy[bb] = yb[Wy + bb] + hy;
          By = fy
        } else yb && (By = function(yb, bb, Wy, Uy) {
          let hy = yb;
          return 0 === bb && Wy === yb.length || (hy = Array.isArray(yb) ? yb.slice(bb, bb + Wy) : yb.subarray(bb, bb + Wy)), hy instanceof Int32Array ? new Uint32Array(hy.buffer, hy.byteOffset, hy.length) : Array.isArray(hy) ? Uy ? new Uint32Array(hy) : new Uint16Array(hy) : hy
        }(yb, Wy, Uy, bb));
        if (By) {
          let fy = Py.getIndicesAccessor(yb, Wy, Uy, hy, Ky);
          if (void 0 === fy) {
            const Zy = this._bufferManager.createBufferView(By),
              cb = bb ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Zy, "SCALAR", cb, Uy, 0)), fy = this._accessors.length - 1, Py.setIndicesAccessor(yb, Wy, Uy, hy, Ky, fy)
          }
          oy.indices = fy
        }
      }
      _exportVertexBuffer(yb, bb, Wy, Uy, hy, fy) {
        const Zy = yb.getKind();
        if (!jU(Zy)) return;
        if (Zy.startsWith("uv") && !this._options.exportUnusedUVs && (!bb || !this._materialNeedsUVsSet.has(bb))) return;
        let cb = hy.getVertexAccessor(yb, Wy, Uy);
        if (void 0 === cb) {
          const bb = hy.convertedToRightHandedBuffers.get(yb._buffer) || yb._buffer.getData(),
            fy = Zy === By.g.PositionKind ? function(yb, bb, Wy, Uy) {
              const {
                byteOffset: hy,
                byteStride: fy,
                type: Zy,
                normalized: cb
              } = bb, Py = bb.getSize(), oy = new Array(Py).fill(1 / 0), By = new Array(Py).fill(-1 / 0);
              return (0, YW.i)(yb, hy + Wy * fy, fy, Py, Zy, Uy * Py, cb, (yb => {
                for (let bb = 0; bb < Py; bb++) oy[bb] = Math.min(oy[bb], yb[bb]), By[bb] = Math.max(By[bb], yb[bb])
              })), {
                min: oy,
                max: By
              }
            }(bb, yb, Wy, Uy) : void 0,
            Py = (Zy === By.g.MatricesIndicesKind || Zy === By.g.MatricesIndicesExtraKind) && yb.type === By.g.FLOAT,
            oy = Py ? By.g.UNSIGNED_BYTE : yb.type,
            Ky = Py ? void 0 : yb.normalized,
            ey = Py ? hy.getRemappedBufferView(yb._buffer, yb) : hy.getVertexBufferView(yb._buffer),
            qb = yb.byteOffset + Wy * yb.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(ey, function(yb, bb) {
            if (yb == By.g.ColorKind) return bb ? "VEC4" : "VEC3";
            switch (yb) {
              case By.g.PositionKind:
              case By.g.NormalKind:
                return "VEC3";
              case By.g.TangentKind:
              case By.g.MatricesIndicesKind:
              case By.g.MatricesIndicesExtraKind:
              case By.g.MatricesWeightsKind:
              case By.g.MatricesWeightsExtraKind:
                return "VEC4";
              case By.g.UVKind:
              case By.g.UV2Kind:
              case By.g.UV3Kind:
              case By.g.UV4Kind:
              case By.g.UV5Kind:
              case By.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${yb}`)
          }(Zy, hy.hasVertexColorAlpha(yb)), oy, Uy, qb, fy, Ky)), cb = this._accessors.length - 1, hy.setVertexAccessor(yb, Wy, Uy, cb)
        }
        fy.attributes[function(yb) {
          switch (yb) {
            case By.g.PositionKind:
              return "POSITION";
            case By.g.NormalKind:
              return "NORMAL";
            case By.g.TangentKind:
              return "TANGENT";
            case By.g.ColorKind:
              return "COLOR_0";
            case By.g.UVKind:
              return "TEXCOORD_0";
            case By.g.UV2Kind:
              return "TEXCOORD_1";
            case By.g.UV3Kind:
              return "TEXCOORD_2";
            case By.g.UV4Kind:
              return "TEXCOORD_3";
            case By.g.UV5Kind:
              return "TEXCOORD_4";
            case By.g.UV6Kind:
              return "TEXCOORD_5";
            case By.g.MatricesIndicesKind:
              return "JOINTS_0";
            case By.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case By.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case By.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${yb}`)
        }(Zy)] = cb
      }
      async _exportMaterialAsync(yb, bb, Wy, Uy) {
        let hy = this._materialMap.get(yb);
        if (void 0 === hy) {
          const Uy = bb && Object.keys(bb).some((yb => yb.startsWith("uv")));
          if ((yb = yb instanceof hU.e ? yb.gcy[Wy.materialIndex] : yb) instanceof Jb) hy = await this._materialExporter.exportPBRMaterialAsync(yb, Uy);
          else if (yb instanceof fU.StandardMaterial) hy = await this._materialExporter.exportStandardMaterialAsync(yb, Uy);
          else {
            if (!(yb instanceof Ab)) return void vb.b.Warn(`Unsupported material '${yb.name}' with type ${yb.getClassName()}`);
            hy = await this._materialExporter.exportOpenPBRMaterialAsync(yb, Uy)
          }
          this._materialMap.set(yb, hy)
        }
        Uy.material = hy
      }
      async _exportMeshAsync(yb, bb) {
        let Wy = bb.getMesh(yb);
        if (void 0 !== Wy) return Wy;
        const Uy = {
          primitives: []
        };
        Wy = this._meshes.length, this._meshes.push(Uy), bb.setMesh(yb, Wy);
        const hy = yb.isUnIndexed ? null : yb.Mqy(),
          Zy = yb.geometry?.getVertexBuffers(),
          cb = bb.getMorphTargetsFromMesh(yb),
          Py = yb instanceof qh.b,
          oy = yb instanceof XU,
          By = yb.vJ;
        if (Zy && By && By.length > 0)
          for (const Ky of By) {
            const Wy = {
                attributes: {}
              },
              By = Ky.Wh() || this._babylonScene.defaultMaterial;
            if (oy) {
              const bb = {
                  name: By.name
                },
                Uy = yb,
                hy = Ey.Color3.White(),
                fy = Uy.material?.alpha ?? 1,
                Zy = Uy.greasedLineMaterial?.color ?? hy;
              (!Zy.equalsWithEpsilon(hy, nW.e) || fy < 1) && (bb.pbrMetallicRoughness = {
                baseColorFactor: [...Zy.hBy(), fy]
              }), this._materials.push(bb), Wy.material = this._materials.length - 1
            } else if (Py) {
              const bb = {
                  name: By.name
                },
                Uy = yb;
              (!Uy.color.equalsWithEpsilon(Ey.Color3.White(), nW.e) || Uy.alpha < 1) && (bb.pbrMetallicRoughness = {
                baseColorFactor: [...Uy.color.hBy(), Uy.alpha]
              }), this._materials.push(bb), Wy.material = this._materials.length - 1
            } else await this._exportMaterialAsync(By, Zy, Ky, Wy);
            const ey = Py || oy ? fy.e.LineListDrawMode : yb.overrideRenderingFillMode ?? By.fillMode;
            let qb = By._getEffectiveOrientation(yb);
            bb.wasAddedByNoopNode && !yb.kWy().useRightHandedSystem && (qb = qb === fy.e.ClockWiseSideOrientation ? fy.e.CounterClockWiseSideOrientation : fy.e.ClockWiseSideOrientation), this._exportIndices(hy, hy ? (0, YW.b)(hy, Ky.indexCount, Ky.indexStart, Ky.verticesStart) : Ky.verticesCount > 65535, hy ? Ky.indexStart : Ky.verticesStart, hy ? Ky.indexCount : Ky.verticesCount, -Ky.verticesStart, ey, qb, bb, Wy);
            for (const yb of Object.values(Zy)) this._exportVertexBuffer(yb, By, Ky.verticesStart, Ky.verticesCount, bb, Wy);
            if (cb) {
              Wy.targets = [];
              for (const yb of cb) Wy.targets.push(yb.attributes)
            }
            Uy.primitives.push(Wy), this._extensionsPostExportMeshPrimitive(Wy)
          }
        if (cb) {
          Uy.weights = [], Uy.extras || (Uy.extras = {}), Uy.extras.targetNames = [];
          for (const yb of cb) Uy.weights.push(yb.influence), Uy.extras.targetNames.push(yb.name)
        }
        return Wy
      }
    }
    uU._ExtensionNames = new Array, uU._ExtensionFactories = {}, uU._ExtensionOrders = {};
    class rh {
      static async GLTFAsync(yb, bb, Wy) {
        Wy && Wy.exportWithoutWaitingForScene || await yb.whenReadyAsync();
        const Uy = new uU(yb, Wy),
          hy = await Uy.generateGLTFAsync(bb.replace(/\.[^/.]+$/, ""));
        return Uy.dispose(), hy
      }
      static async GLBAsync(yb, bb, Wy) {
        Wy && Wy.exportWithoutWaitingForScene || await yb.whenReadyAsync();
        const Uy = new uU(yb, Wy),
          hy = await Uy.generateGLBAsync(bb.replace(/\.[^/.]+$/, ""));
        return Uy.dispose(), hy
      }
    }
    const HU = "EXT_mesh_gpu_instancing";

    function ah(yb, bb) {
      const Wy = new Float32Array(3 * bb);
      for (let Uy = 0; Uy < bb; Uy++) Wy[3 * Uy + 0] = yb[4 * Uy + 0], Wy[3 * Uy + 1] = yb[4 * Uy + 1], Wy[3 * Uy + 2] = yb[4 * Uy + 2];
      return Wy
    }
    class FU {
      constructor(yb) {
        this.name = HU, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(yb, bb, Wy, Uy, hy, fy) {
        return await new Promise((yb => {
          if (bb && Wy instanceof JU.c && Wy.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const yb = Fy.n.Zero(),
              Uy = Fy.e.Identity(),
              Zy = Fy.n.One(),
              cb = Wy.thinInstanceGetWorldMatrices(),
              Py = Fy.j.dU[2],
              oy = Fy.j.Quaternion[1],
              By = Fy.j.dU[3];
            let Ky = !1,
              ey = !1,
              qb = !1;
            const sy = new Float32Array(3 * Wy.ZZy),
              Sy = new Float32Array(4 * Wy.ZZy),
              Ey = new Float32Array(3 * Wy.ZZy);
            let ly = 0;
            for (const bb of cb) bb.decompose(By, oy, Py), hy && (tU(Py), wW(oy)), sy.set(Py.hBy(), 3 * ly), Sy.set(oy.normalize().hBy(), 4 * ly), Ey.set(By.hBy(), 3 * ly), Ky = Ky || !Py.equalsWithEpsilon(yb), ey = ey || !oy.equalsWithEpsilon(Uy), qb = qb || !By.equalsWithEpsilon(Zy), ly++;
            const mb = {
              attributes: {}
            };
            Ky && (mb.attributes.TRANSLATION = this._buildAccessor(sy, "VEC3", Wy.ZZy, fy)), ey && (mb.attributes.ROTATION = this._buildAccessor(Sy, "VEC4", Wy.ZZy, fy)), qb && (mb.attributes.SCALE = this._buildAccessor(Ey, "VEC3", Wy.ZZy, fy));
            let Cy = Wy._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Cy) {
              const yb = Wy.ZZy,
                bb = "VEC3";
              Wy.hasVertexAlpha && Cy.length === 4 * yb ? (this._instanceColorWarned || (vb.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Cy = ah(Cy, yb)) : Cy.length === 4 * yb && (Cy = ah(Cy, yb)), Cy.length === 3 * yb && (mb.attributes._COLOR_0 = this._buildAccessor(Cy, bb, yb, fy))
            }
            bb.extensions = bb.extensions || {}, bb.extensions[HU] = mb
          }
          yb(bb)
        }))
      }
      _buildAccessor(yb, bb, Wy, Uy) {
        const hy = Uy.createBufferView(yb),
          fy = Uy.createAccessor(hy, bb, 5126, Wy);
        return this._exporter._accessors.push(fy), this._exporter._accessors.length - 1
      }
    }
    let pU = !1;

    function LU() {
      pU || (pU = !0, uU.RegisterExtension(HU, (yb => new FU(yb))))
    }
    Wy(38991);
    LU();
    var QU = Wy(40335);

    function jh(yb, bb, Wy, Uy) {
      const hy = yb;
      let fy = null,
        Zy = null,
        cb = null,
        Py = null;
      const oy = {},
        By = bb.find((yb => "POSITION" === yb.dracoName));
      if (!By) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Wy) {
        const yb = By.data.length / By.size;
        Wy = new(yb > 65535 ? Uint32Array : Uint16Array)(yb);
        for (let bb = 0; bb < yb; bb++) Wy[bb] = bb
      }
      try {
        fy = new hy.Encoder, Zy = new hy.MeshBuilder, cb = new hy.Mesh, Zy.AddFacesToMesh(cb, Wy.length / 3, Wy);
        const yb = new Map([
          [Float32Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddFloatAttribute(bb, Wy, Uy, hy, fy)],
          [Uint32Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddUInt32Attribute(bb, Wy, Uy, hy, fy)],
          [Uint16Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddUInt16Attribute(bb, Wy, Uy, hy, fy)],
          [Uint8Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddUInt8Attribute(bb, Wy, Uy, hy, fy)],
          [Int32Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddInt32Attribute(bb, Wy, Uy, hy, fy)],
          [Int16Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddInt16Attribute(bb, Wy, Uy, hy, fy)],
          [Int8Array, (yb, bb, Wy, Uy, hy, fy) => yb.AddInt8Attribute(bb, Wy, Uy, hy, fy)]
        ]);
        for (const Wy of bb) {
          Wy.data instanceof Uint8ClampedArray && (Wy.data = new Uint8Array(Wy.data));
          const bb = yb.get(Wy.data.constructor),
            Py = Wy.data.length / Wy.size;
          oy[Wy.kind] = bb(Zy, cb, hy[Wy.dracoName], Py, Wy.size, Wy.data), Uy.quantizationBits && Uy.quantizationBits[Wy.dracoName] && fy.SetAttributeQuantization(hy[Wy.dracoName], Uy.quantizationBits[Wy.dracoName])
        }
        Uy.method && fy.SetEncodingMethod(hy[Uy.method]), void 0 !== Uy.encodeSpeed && void 0 !== Uy.decodeSpeed && fy.SetSpeedOptions(Uy.encodeSpeed, Uy.decodeSpeed), Py = new hy.DracoInt8Array;
        const By = fy.EncodeMeshToDracoBuffer(cb, Py);
        if (By <= 0) throw new Error("Draco: Failed to encode.");
        const Ky = new Int8Array(By);
        for (let bb = 0; bb < By; bb++) Ky[bb] = Py.GetValue(bb);
        return {
          data: Ky,
          attributeIds: oy
        }
      } finally {
        cb && hy.destroy(cb), Zy && hy.destroy(Zy), fy && hy.destroy(fy), Py && hy.destroy(Py)
      }
    }

    function DU() {
      let yb;
      onmessage = bb => {
        const Wy = bb.data;
        switch (Wy.id) {
          case "init": {
            Wy.url && importScripts(Wy.url);
            const bb = Wy.wasmBinary ? {
              wasmBinary: Wy.wasmBinary
            } : {};
            yb = DracoEncoderModule(bb), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!yb) throw new Error("Draco: Encoder module is not available.");
            yb.then((yb => {
              const bb = jh(yb, Wy.attributes, Wy.indices, Wy.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: bb
              }, bb ? [bb.data.buffer] : void 0)
            })).catch((yb => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: yb.message
              })
            }))
        }
      }
    }
    class th {
      constructor(yb) {
        if (yb.workerPool) return void(this._workerPoolPromise = Promise.resolve(yb.workerPool));
        const bb = yb.wasmBinary,
          Wy = yb.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Uy = Wy && "function" === typeof Worker && "function" === typeof URL,
          hy = Uy || !yb.jsModule,
          fy = yb.wasmUrl && yb.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: hy ? Gb.k.GetBabylonScriptURL(yb.wasmUrl, !0) : "",
            wasmBinaryPromise: bb ? Promise.resolve(bb) : Gb.k.LoadFileAsync(Gb.k.GetBabylonScriptURL(yb.wasmBinaryUrl, !0))
          } : {
            url: hy ? Gb.k.GetBabylonScriptURL(yb.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Uy ? this._workerPoolPromise = fy.wasmBinaryPromise.then((yb => {
          const bb = this._getWorkerContent(),
            Uy = URL.createObjectURL(new Blob([bb], {
              type: "application/javascript"
            }));
          return new QU.c(Wy, (() => async function(yb, bb, Wy) {
            return await new Promise(((Uy, hy) => {
              const fy = bb => {
                  yb.removeEventListener("error", fy), yb.removeEventListener("message", Zy), hy(bb)
                },
                Zy = bb => {
                  "initDone" === bb.data.id && (yb.removeEventListener("error", fy), yb.removeEventListener("message", Zy), Uy(yb))
                };
              if (yb.addEventListener("error", fy), yb.addEventListener("message", Zy), bb) {
                const Uy = bb.slice(0);
                yb.postMessage({
                  id: "init",
                  url: Wy,
                  wasmBinary: Uy
                }, [Uy])
              } else yb.postMessage({
                id: "init",
                url: Wy
              })
            }))
          }(new Worker(Uy), yb, fy.url)))
        })) : this._modulePromise = fy.wasmBinaryPromise.then((async bb => {
          if (!this._isModuleAvailable() && !yb.jsModule) {
            if (!fy.url) throw new Error("Draco codec module is not available");
            await Gb.k.LoadBabylonScriptAsync(fy.url)
          }
          return await this._createModuleAsync(bb, yb.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((yb => {
          yb.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function wU() {
      const yb = yb => !!yb && "object" === typeof yb;
      for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
      return Wy.reduce(((bb, Wy) => {
        const Uy = Object.keys(Wy);
        for (const hy of Uy) {
          const Uy = bb[hy],
            fy = Wy[hy];
          Array.isArray(Uy) && Array.isArray(fy) ? bb[hy] = Uy.concat(fy) : yb(Uy) && yb(fy) ? bb[hy] = wU(Uy, fy) : bb[hy] = fy
        }
        return bb
      }), {})
    }

    function kh(yb) {
      return yb === py.k.PositionKind ? "POSITION" : yb === py.k.NormalKind ? "NORMAL" : yb === py.k.ColorKind ? "COLOR" : yb.startsWith(py.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const NU = {
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
    class zh extends th {
      static get DefaultAvailable() {
        return !!((yb = zh.DefaultConfiguration).wasmUrl && (yb.wasmBinary || yb.wasmBinaryUrl) && "object" === typeof WebAssembly || yb.fallbackUrl);
        var yb
      }
      static get Default() {
        return zh._Default ?? (zh._Default = new zh), zh._Default
      }
      static ResetDefault(yb) {
        zh._Default && (yb || zh._Default.dispose(), zh._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(yb, bb) {
        return {
          module: await (bb || DracoEncoderModule)({
            wasmBinary: yb
          })
        }
      }
      _getWorkerContent() {
        return `${jh}(${DU})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zh.DefaultConfiguration)
      }
      async _encodeAsync(yb, bb, Wy) {
        const Uy = Wy ? wU(NU, Wy) : NU;
        if (this._workerPoolPromise) {
          const Wy = await this._workerPoolPromise;
          return await new Promise(((hy, fy) => {
            Wy.push(((Wy, Zy) => {
              const cb = yb => {
                  Wy.removeEventListener("error", cb), Wy.removeEventListener("message", Py), fy(yb), Zy()
                },
                Py = yb => {
                  "encodeMeshSuccess" === yb.data.id ? (Wy.removeEventListener("error", cb), Wy.removeEventListener("message", Py), hy(yb.data.encodedMeshData), Zy()) : "encodeMeshError" === yb.data.id && (Wy.removeEventListener("error", cb), Wy.removeEventListener("message", Py), fy(new Error(yb.data.errorMessage)), Zy())
                };
              Wy.addEventListener("error", cb), Wy.addEventListener("message", Py);
              const oy = [];
              for (const bb of yb) oy.push(bb.data.buffer);
              bb && oy.push(bb.buffer), Wy.postMessage({
                id: "encodeMesh",
                attributes: yb,
                indices: bb,
                options: Uy
              }, oy)
            }))
          }))
        }
        if (this._modulePromise) {
          return jh((await this._modulePromise).module, yb, bb, Uy)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(yb, bb) {
        if (0 == yb.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        yb instanceof JU.c && yb.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === bb?.method && (vb.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), bb.method = "MESH_SEQUENTIAL_ENCODING");
        const Wy = function(yb) {
            let bb = yb.Mqy(void 0, !0);
            return !bb || bb instanceof Uint32Array || bb instanceof Uint16Array || (bb = ((0, YW.b)(bb, bb.length) ? Uint32Array : Uint16Array).from(bb)), bb
          }(yb),
          Uy = function(yb, bb) {
            const Wy = [];
            for (const Uy of yb.getVerticesDataKinds()) {
              if (bb?.includes(Uy)) {
                if (Uy === py.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const hy = yb.getVertexBuffer(Uy),
                fy = hy.getSize(),
                Zy = (0, YW.u)(hy.getData(), fy, hy.type, hy.byteOffset, hy.byteStride, yb.getTotalVertices(), !0);
              Wy.push({
                kind: Uy,
                dracoName: kh(Uy),
                size: fy,
                data: Zy
              })
            }
            return Wy
          }(yb, bb?.excludedAttributes);
        return await this._encodeAsync(Uy, Wy, bb)
      }
    }
    zh.DefaultConfiguration = {
      wasmUrl: `${Gb.k._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Gb.k._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Gb.k._DefaultCdnUrl}/draco_encoder.js`
    }, zh._Default = null;
    const IU = "KHR_draco_mesh_compression";
    class xh {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(yb) {
        this.name = IU, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === yb.options.meshCompressionMethod && zh.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(yb, bb, Wy) {
        if (!this.enabled) return;
        if (4 !== yb.mode && 5 !== yb.mode) return void vb.b.Warn("Cannot compress primitive with mode " + yb.mode + ".");
        const Uy = [],
          hy = [];
        let fy = null;
        if (void 0 !== yb.indices) {
          const Zy = Wy[yb.indices],
            cb = bb.getBufferView(Zy);
          fy = bb.getData(cb).slice(), Uy.push(cb), hy.push(Zy)
        }
        const Zy = [];
        for (const [By, Ky] of Object.entries(yb.attributes)) {
          const yb = Wy[Ky],
            fy = bb.getBufferView(yb),
            Py = QW(yb.type),
            oy = (0, YW.u)(bb.getData(fy), Py, yb.componentType, yb.byteOffset || 0, fy.byteStride || (0, YW.s)(yb.componentType) * Py, yb.count, !0);
          Zy.push({
            kind: By,
            dracoName: (cb = By, "POSITION" === cb ? "POSITION" : "NORMAL" === cb ? "NORMAL" : cb.startsWith("COLOR") ? "COLOR" : cb.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: QW(yb.type),
            data: oy
          }), Uy.push(fy), hy.push(yb)
        }
        var cb;
        const Py = {
            method: yb.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          oy = zh.Default._encodeAsync(Zy, fy, Py).then((Wy => {
            const fy = {
                bufferView: -1,
                attributes: Wy.attributeIds
              },
              Zy = bb.createBufferView(Wy.data);
            bb.setBufferView(fy, Zy);
            for (const yb of Uy) this._bufferViewsUsed.add(yb);
            for (const yb of hy) this._accessorsUsed.add(yb);
            yb.extensions || (yb.extensions = {}), yb.extensions[IU] = fy
          })).catch((yb => {
            vb.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + yb.message)
          }));
        this._encodePromises.push(oy), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(yb) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((bb => {
          yb.getPropertiesWithBufferView(bb).every((yb => this._accessorsUsed.has(yb))) && yb.removeBufferView(bb)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let AU = !1;

    function dU() {
      AU || (AU = !0, uU.RegisterExtension(IU, (yb => new xh(yb))))
    }
    dU();
    var yf = Wy(40028);
    const bf = "KHR_lights_punctual",
      Wh = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Uh = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      hh = Fy.n.Backward();
    class fh {
      constructor(yb) {
        this.name = bf, this.enabled = !0, this.required = !1, this._exporter = yb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[bf] = this._lights
      }
      async postExportNodeAsync(yb, bb, Wy, Uy, hy) {
        return await new Promise((fy => {
          if (!(Wy instanceof BU.d)) return void fy(bb);
          const Zy = Wy.getTypeID() == BU.d.LIGHTTYPEID_POINTLIGHT ? "point" : Wy.getTypeID() == BU.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Wy.getTypeID() == BU.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Zy || !(Wy instanceof yf.b)) return vb.b.Warn(`${yb}: Light ${Wy.name} is not supported in ${bf}`), void fy(bb);
          if (Wy.falloffType !== BU.d.FALLOFF_GLTF && vb.b.Warn(`${yb}: Light falloff for ${Wy.name} does not match the ${bf} specification!`), !Wy.position.nqy(0, 0, 0)) {
            const yb = Fy.j.dU[0].Coy(Wy.position);
            hy && tU(yb), bb.translation = yb.hBy()
          }
          if ("point" !== Zy) {
            const yb = Wy.direction.normalizeToRef(Fy.j.dU[0]);
            hy && tU(yb);
            const Uy = Fy.e.FromUnitVectorsToRef(hh, yb, Fy.j.Quaternion[0]);
            Fy.e.IsIdentity(Uy) || (bb.rotation = Uy.hBy())
          }
          const cb = {
            type: Zy,
            name: Wy.name,
            color: Wy.diffuse.hBy(),
            intensity: Wy.intensity,
            range: Wy.range
          };
          if (xU(cb, Wh), "spot" === Zy) {
            const yb = Wy;
            cb.spot = {
              innerConeAngle: yb.innerAngle / 2,
              outerConeAngle: yb.angle / 2
            }, xU(cb.spot, Uh)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(cb);
          const Py = {
              light: this._lights.lights.length - 1
            },
            oy = Wy.parent;
          if (oy && zU(Wy, oy)) {
            const yb = Uy.get(oy);
            if (yb) {
              const Wy = this._exporter._nodes[yb];
              return NW(bb, Wy), Wy.extensions || (Wy.extensions = {}), Wy.extensions[bf] = Py, void fy(null)
            }
          }
          bb.extensions || (bb.extensions = {}), bb.extensions[bf] = Py, fy(bb)
        }))
      }
    }
    let Zh = !1;

    function cf() {
      Zh || (Zh = !0, uU.RegisterExtension(bf, (yb => new fh(yb))))
    }
    cf();
    const Ph = "KHR_interactivity";
    class oh {
      constructor(yb) {
        this._exporter = yb, this.name = Ph, this.enabled = !!yb.options.khrInteractivity, this.required = yb.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var yb, bb, Wy;
        const Uy = this._exporter.options.khrInteractivity;
        if (!Uy) return;
        const hy = Uy.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: yb => this._exporter._getNodeIndex(yb),
          getAnimationIndex: yb => this._exporter._getAnimationIndex(yb),
          getCameraIndex: yb => this._exporter._getCameraIndex(yb),
          getMaterialIndex: yb => this._exporter._getMaterialIndex(yb),
          getRootIndex: (yb, bb) => this._exporter._getRootIndex(yb, bb),
          setNodeExtension: (yb, bb, Wy) => this._exporter._setNodeExtension(yb, bb, Wy)
        });
        this._exporter._glTF.extensions[Ph] = hy;
        for (const fy of Uy.additionalExtensionsUsed)(yb = this._exporter._glTF).extensionsUsed || (yb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(fy) && this._exporter._glTF.extensionsUsed.push(fy);
        for (const fy of Uy.additionalExtensionsRequired)(bb = this._exporter._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(fy) && this._exporter._glTF.extensionsUsed.push(fy), (Wy = this._exporter._glTF).extensionsRequired || (Wy.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(fy) && this._exporter._glTF.extensionsRequired.push(fy)
      }
    }
    let Bh = !1;

    function Kh() {
      Bh || (Bh = !0, uU.RegisterExtension(Ph, (yb => new oh(yb)), 200))
    }
    Kh();
    const eh = "EXT_lights_area",
      qf = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      sh = {
        aspect: 1
      },
      Sh = Fy.n.Backward();
    class Eh {
      constructor(yb) {
        this.name = eh, this.enabled = !0, this.required = !1, this._exporter = yb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[eh] = this._lights
      }
      async postExportNodeAsync(yb, bb, Wy, Uy, hy) {
        return await new Promise((fy => {
          if (!(Wy instanceof BU.d)) return void fy(bb);
          const Zy = Wy.getTypeID() == BU.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Zy) return vb.b.Warn(`${yb}: Light ${Wy.name} is not supported in ${eh}`), void fy(bb);
          const cb = Wy;
          if (cb.falloffType !== BU.d.FALLOFF_GLTF && vb.b.Warn(`${yb}: Light falloff for ${Wy.name} does not match the ${eh} specification!`), !cb.position.nqy(0, 0, 0)) {
            const yb = Fy.j.dU[0].Coy(cb.position);
            hy && tU(yb), bb.translation = yb.hBy()
          }
          const Py = Fy.n.Forward();
          hy && tU(Py);
          const oy = Fy.e.FromUnitVectorsToRef(Sh, Py, Fy.j.Quaternion[0]);
          Fy.e.IsIdentity(oy) || (bb.rotation = oy.hBy());
          const By = {
            type: Zy,
            name: cb.name,
            color: cb.diffuse.hBy(),
            intensity: cb.intensity,
            size: cb.height,
            rect: {
              aspect: cb.width / cb.height
            }
          };
          xU(By, qf), By.rect && xU(By.rect, sh), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(By);
          const Ky = {
              light: this._lights.lights.length - 1
            },
            ey = Wy.parent;
          if (ey && zU(cb, ey)) {
            const yb = Uy.get(ey);
            if (yb) {
              const Wy = this._exporter._nodes[yb];
              return NW(bb, Wy), Wy.extensions || (Wy.extensions = {}), Wy.extensions[eh] = Ky, void fy(null)
            }
          }
          bb.extensions || (bb.extensions = {}), bb.extensions[eh] = Ky, fy(bb)
        }))
      }
    }
    let lh = !1;

    function mf() {
      lh || (lh = !0, uU.RegisterExtension(eh, (yb => new Eh(yb))))
    }
    mf();
    const Ch = "KHR_materials_anisotropy";
    class Th {
      constructor(yb) {
        this.name = Ch, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Jb) {
          if (Wy.anisotropy.isEnabled && !Wy.anisotropy.legacy) return Wy.anisotropy.texture && Uy.push(Wy.anisotropy.texture), Uy
        } else if (Wy instanceof Ab && Wy.specularRoughnessAnisotropy > 0) {
          const yb = function(yb) {
            const bb = yb.specularRoughnessAnisotropyTexture,
              Wy = yb.geometryTangentTexture;
            return `${bb&&bb.getInternalTexture()?bb.getInternalTexture().uniqueId:"NoStrength"}_${Wy&&Wy.getInternalTexture()?Wy.getInternalTexture().uniqueId:"NoTangent"}`
          }(Wy);
          if (this._anisoTexturesMap[yb]) Uy.push(this._anisoTexturesMap[yb]);
          else {
            const bb = await async function(yb) {
              const bb = yb.kWy(),
                Wy = yb.specularRoughnessAnisotropyTexture,
                Uy = yb.geometryTangentTexture;
              return Wy || Uy ? await ZW("AnisotropyTexture", oW(Uy ? cU(Uy, 0) : PW(1), Uy ? cU(Uy, 1) : PW(0), Wy ? cU(Wy, 0) : PW(1)), bb) : null
            }(Wy);
            bb && (Uy.push(bb), this._anisoTexturesMap[yb] = bb)
          }
          return Uy
        }
        return []
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          var Uy;
          if (Wy instanceof Jb) {
            if (!Wy.anisotropy.isEnabled || Wy.anisotropy.legacy) return void yb(bb);
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const Uy = this._exporter._materialExporter.getTextureInfo(Wy.anisotropy.texture),
              hy = {
                anisotropyStrength: Wy.anisotropy.intensity,
                anisotropyRotation: Wy.anisotropy.angle,
                anisotropyTexture: Uy ?? void 0
              };
            null !== hy.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[Ch] = hy
          } else if (Wy instanceof Ab && Wy.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            let hy = Wy.specularRoughnessTexture;
            Wy._useRoughnessFromMetallicTextureGreen && (hy = Wy.baseMetalnessTexture);
            const fy = this._anisoTexturesMap[Wy.id];
            if (!hy && !fy) {
              let Uy = Wy.specularRoughness,
                hy = Wy.specularRoughnessAnisotropy;
              if (!Wy._useGltfStyleAnisotropy) {
                const yb = function(yb, bb) {
                  const Wy = yb * yb,
                    Uy = Wy * Math.sqrt(2 / (1 + (1 - bb) * (1 - bb))),
                    hy = (1 - bb) * Uy;
                  return {
                    newBaseRoughness: Math.sqrt(hy),
                    newAnisotropyStrength: Math.min(Math.sqrt((Uy - Wy) / Math.max(1 - Wy, 1e-4)), 1)
                  }
                }(Wy.specularRoughness, Wy.specularRoughnessAnisotropy);
                Uy = yb.newBaseRoughness, hy = yb.newAnisotropyStrength
              }
              bb.pbrMetallicRoughness && (bb.pbrMetallicRoughness.roughnessFactor = Uy);
              const fy = {
                anisotropyStrength: hy,
                anisotropyRotation: Wy.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return bb.extensions[Ch] = fy, yb(bb)
            }
            const Zy = fy ? this._exporter._materialExporter.getTextureInfo(fy) : null,
              cb = {
                anisotropyStrength: Wy.specularRoughnessAnisotropy,
                anisotropyRotation: Wy.geometryTangentAngle,
                anisotropyTexture: Zy || void 0,
                extensions: {}
              };
            Wy._useGltfStyleAnisotropy || (bb.extensions.KHR_materials_openpbr = {}, (Uy = this._exporter._glTF).extensionsUsed || (Uy.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[Ch] = cb
          }
          yb(bb)
        }))
      }
    }
    let Vh = !1;

    function Jh() {
      Vh || (Vh = !0, uU.RegisterExtension(Ch, (yb => new Th(yb))))
    }
    Jh();
    const gf = "KHR_materials_clearcoat";

    function Gh(yb, bb) {
      const Wy = new My.f(bb.name, bb.kWy());
      return Wy._texture = yb, Wy.coordinatesIndex = bb.coordinatesIndex, bb instanceof My.f && (Wy.uOffset = bb.uOffset, Wy.vOffset = bb.vOffset, Wy.uScale = bb.uScale, Wy.vScale = bb.vScale, Wy.wAng = bb.wAng), Wy.wrapU = bb.wrapU, Wy.wrapV = bb.wrapV, Wy
    }
    class Oh {
      constructor(yb) {
        this.name = gf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = yb
      }
      dispose() {
        for (const yb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[yb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const yb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[yb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Jb) {
          if (Wy.clearCoat.isEnabled) return Wy.clearCoat.texture && Uy.push(Wy.clearCoat.texture), !Wy.clearCoat.useRoughnessFromMainTexture && Wy.clearCoat.textureRoughness && Uy.push(Wy.clearCoat.textureRoughness), Wy.clearCoat.bumpTexture && Uy.push(Wy.clearCoat.bumpTexture), Uy
        } else if (Wy instanceof Ab && Wy.coatWeight > 0) {
          let yb = !1;
          if (Wy.coatWeightTexture ? Wy.coatRoughnessTexture ? Wy._useCoatRoughnessFromGreenChannel && Wy.coatWeightTexture.getInternalTexture() === Wy.coatRoughnessTexture.getInternalTexture() ? (Uy.push(Wy.coatWeightTexture), Uy.push(Wy.coatRoughnessTexture)) : yb = !0 : Uy.push(Wy.coatWeightTexture) : Wy.coatRoughnessTexture && (Wy._useCoatRoughnessFromGreenChannel ? Uy.push(Wy.coatRoughnessTexture) : yb = !0), yb) {
            const yb = function(yb) {
              const bb = yb.coatWeightTexture,
                Wy = bb && bb.getInternalTexture() ? bb.getInternalTexture().uniqueId : "NoCoat",
                Uy = yb.coatRoughnessTexture;
              return `${Wy}_${Uy&&Uy.getInternalTexture()?Uy.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Wy);
            if (!this._cachedInternalTexturesMap[yb]) {
              const bb = await async function(yb) {
                const bb = yb.kWy(),
                  Wy = yb.coatWeightTexture,
                  Uy = yb.coatRoughnessTexture;
                return Wy || Uy ? (await ZW("CoatTexture", oW(Wy ? cU(Wy, 0) : PW(1), Uy ? cU(Uy, yb._useCoatRoughnessFromGreenChannel ? 1 : 0) : PW(1)), bb)).getInternalTexture() : null
              }(Wy);
              bb && (this._cachedInternalTexturesMap[yb] = bb)
            }
            this._cachedInternalTexturesMap[yb] && (Wy.coatWeightTexture && (this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId] = Gh(this._cachedInternalTexturesMap[yb], Wy.coatWeightTexture), Uy.push(this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId])), Wy.coatRoughnessTexture && (this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId] = Gh(this._cachedInternalTexturesMap[yb], Wy.coatRoughnessTexture), Uy.push(this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId])))
          }
          return Wy.geometryCoatNormalTexture && Uy.push(Wy.geometryCoatNormalTexture), Uy
        }
        return []
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Jb) {
            if (!Wy.clearCoat.isEnabled) return void yb(bb);
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const Uy = this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.texture);
            let hy;
            hy = Wy.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.textureRoughness), Wy.clearCoat.isTintEnabled && Gb.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Wy.name}`), Wy.clearCoat.remapF0OnInterfaceChange && Gb.k.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Wy.name}`);
            const fy = this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.bumpTexture),
              Zy = {
                clearcoatFactor: Wy.clearCoat.intensity,
                clearcoatTexture: Uy ?? void 0,
                clearcoatRoughnessFactor: Wy.clearCoat.roughness,
                clearcoatRoughnessTexture: hy ?? void 0,
                clearcoatNormalTexture: fy ?? void 0
              };
            null === Zy.clearcoatTexture && null === Zy.clearcoatRoughnessTexture && null === Zy.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[gf] = Zy
          } else if (Wy instanceof Ab) {
            if (0 == Wy.coatWeight) return void yb(bb);
            let Uy, hy, fy, Zy;
            this._wasUsed = !0, bb.extensions = bb.extensions || {}, Wy.coatWeightTexture && (Uy = this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId], hy = this._exporter._materialExporter.getTextureInfo(Uy)), Wy.coatRoughnessTexture && (fy = this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId], Zy = this._exporter._materialExporter.getTextureInfo(fy)), Wy.coatColorTexture && Gb.k.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Wy.name}`);
            const cb = this._exporter._materialExporter.getTextureInfo(Wy.geometryCoatNormalTexture),
              Py = {
                clearcoatFactor: Wy.coatWeight,
                clearcoatTexture: hy ?? void 0,
                clearcoatRoughnessFactor: Wy.coatRoughness,
                clearcoatRoughnessTexture: Zy ?? void 0,
                clearcoatNormalTexture: cb ?? void 0
              };
            null === Py.clearcoatTexture && null === Py.clearcoatRoughnessTexture && null === Py.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[gf] = Py
          }
          yb(bb)
        }))
      }
    }
    let Rh = !1;

    function vf() {
      Rh || (Rh = !0, uU.RegisterExtension(gf, (yb => new Oh(yb))))
    }
    vf();
    const Mh = "KHR_materials_coat";

    function Yh(yb) {
      const bb = yb.coatRoughnessAnisotropyTexture,
        Wy = yb.geometryCoatTangentTexture;
      return `${bb&&bb.getInternalTexture()?bb.getInternalTexture().uniqueId:"NoStrength"}_${Wy&&Wy.getInternalTexture()?Wy.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Xh(yb, bb) {
      const Wy = new My.f(bb.name, bb.kWy());
      return Wy._texture = yb, Wy.coordinatesIndex = bb.coordinatesIndex, bb instanceof My.f && (Wy.uOffset = bb.uOffset, Wy.vOffset = bb.vOffset, Wy.uScale = bb.uScale, Wy.vScale = bb.vScale, Wy.wAng = bb.wAng), Wy.wrapU = bb.wrapU, Wy.wrapV = bb.wrapV, Wy
    }
    class nh {
      constructor(yb) {
        this.name = Mh, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = yb
      }
      dispose() {
        for (const yb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[yb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const yb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[yb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Jb) {
          if (Wy.clearCoat.isEnabled) return Wy.clearCoat.texture && Uy.push(Wy.clearCoat.texture), !Wy.clearCoat.useRoughnessFromMainTexture && Wy.clearCoat.textureRoughness && Uy.push(Wy.clearCoat.textureRoughness), Wy.clearCoat.bumpTexture && Uy.push(Wy.clearCoat.bumpTexture), Wy.clearCoat.tintTexture && Uy.push(Wy.clearCoat.tintTexture), Uy
        } else if (Wy instanceof Ab && Wy.coatWeight > 0) {
          let yb = !1;
          if (Wy.coatWeightTexture ? Wy.coatRoughnessTexture ? Wy._useCoatRoughnessFromGreenChannel && Wy.coatWeightTexture.getInternalTexture() === Wy.coatRoughnessTexture.getInternalTexture() ? (Uy.push(Wy.coatWeightTexture), Uy.push(Wy.coatRoughnessTexture)) : yb = !0 : Uy.push(Wy.coatWeightTexture) : Wy.coatRoughnessTexture && (Wy._useCoatRoughnessFromGreenChannel ? Uy.push(Wy.coatRoughnessTexture) : yb = !0), yb) {
            const yb = function(yb) {
              const bb = yb.coatWeightTexture,
                Wy = bb && bb.getInternalTexture() ? bb.getInternalTexture().uniqueId : "NoCoat",
                Uy = yb.coatRoughnessTexture;
              return `${Wy}_${Uy&&Uy.getInternalTexture()?Uy.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Wy);
            if (!this._cachedInternalTexturesMap[yb]) {
              const bb = await async function(yb) {
                const bb = yb.kWy(),
                  Wy = yb.coatWeightTexture,
                  Uy = yb.coatRoughnessTexture;
                return Wy || Uy ? (await ZW("CoatTexture", oW(Wy ? cU(Wy, 0) : PW(1), Uy ? cU(Uy, yb._useCoatRoughnessFromGreenChannel ? 1 : 0) : PW(1)), bb)).getInternalTexture() : null
              }(Wy);
              bb && (this._cachedInternalTexturesMap[yb] = bb)
            }
            this._cachedInternalTexturesMap[yb] && (Wy.coatWeightTexture && (this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId] = Xh(this._cachedInternalTexturesMap[yb], Wy.coatWeightTexture), Uy.push(this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId])), Wy.coatRoughnessTexture && (this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId] = Xh(this._cachedInternalTexturesMap[yb], Wy.coatRoughnessTexture), Uy.push(this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId])))
          }
          if (Wy.geometryCoatNormalTexture && Uy.push(Wy.geometryCoatNormalTexture), Wy.coatColorTexture && Uy.push(Wy.coatColorTexture), Wy.coatRoughnessAnisotropy > 0) {
            const yb = Yh(Wy);
            if (this._mergedTexturesMap[yb]) Uy.push(this._mergedTexturesMap[yb]);
            else {
              const bb = await async function(yb) {
                const bb = yb.kWy(),
                  Wy = yb.coatRoughnessAnisotropyTexture,
                  Uy = yb.geometryCoatTangentTexture;
                return Wy || Uy ? await ZW("AnisotropyTexture", oW(Uy ? cU(Uy, 0) : PW(1), Uy ? cU(Uy, 1) : PW(0), Wy ? cU(Wy, 0) : PW(1)), bb) : null
              }(Wy);
              bb && (Uy.push(bb), this._mergedTexturesMap[yb] = bb)
            }
            return Uy
          }
          return Uy
        }
        return []
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          var Uy;
          if (Wy instanceof Jb) {
            if (!Wy.clearCoat.isEnabled) return void yb(bb);
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const Uy = this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.texture);
            let hy, fy;
            hy = Wy.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.textureRoughness), Wy.clearCoat.isTintEnabled && (fy = this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.tintTexture));
            const Zy = this._exporter._materialExporter.getTextureInfo(Wy.clearCoat.bumpTexture),
              cb = Wy.clearCoat.indexOfRefraction,
              Py = {
                coatFactor: Wy.clearCoat.intensity,
                coatTexture: Uy ?? void 0,
                coatRoughnessFactor: Wy.clearCoat.roughness,
                coatRoughnessTexture: hy ?? void 0,
                coatNormalTexture: Zy ?? void 0,
                coatColorFactor: Wy.clearCoat.tintColor.hBy(),
                coatColorTexture: fy ?? void 0,
                coatIor: 1.5 !== cb ? cb : void 0
              };
            null === Py.coatTexture && null === Py.coatRoughnessTexture && null === Py.coatRoughnessTexture && null === Py.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[Mh] = Py
          } else if (Wy instanceof Ab) {
            if (0 == Wy.coatWeight) return void yb(bb);
            let hy, fy, Zy, cb;
            this._wasUsed = !0, bb.extensions = bb.extensions || {}, Wy.coatWeightTexture && (hy = this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Wy.coatWeightTexture.uniqueId] : Wy.coatWeightTexture, fy = this._exporter._materialExporter.getTextureInfo(hy)), Wy.coatRoughnessTexture && (Zy = this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Wy.coatRoughnessTexture.uniqueId] : Wy.coatRoughnessTexture, cb = this._exporter._materialExporter.getTextureInfo(Zy));
            const Py = this._exporter._materialExporter.getTextureInfo(Wy.geometryCoatNormalTexture),
              oy = this._exporter._materialExporter.getTextureInfo(Wy.coatColorTexture),
              By = Wy.coatIor,
              Ky = Wy.coatDarkening,
              ey = Wy.coatRoughnessTexture,
              qb = Yh(Wy),
              sy = this._mergedTexturesMap[qb];
            let Sy, Ey = 0,
              ly = 0;
            if (Wy.coatRoughnessAnisotropy > 0) {
              if (ey || sy) {
                const yb = sy ? this._exporter._materialExporter.getTextureInfo(sy) : null;
                Ey = Wy.coatRoughnessAnisotropy, ly = Wy.geometryCoatTangentAngle, Sy = yb || void 0
              } else {
                let yb = Wy.coatRoughness,
                  Uy = Wy.coatRoughnessAnisotropy;
                if (!Wy._useGltfStyleAnisotropy) {
                  const bb = function(yb, bb) {
                    const Wy = yb * yb,
                      Uy = Wy * Math.sqrt(2 / (1 + (1 - bb) * (1 - bb))),
                      hy = (1 - bb) * Uy;
                    return {
                      newBaseRoughness: Math.sqrt(hy),
                      newAnisotropyStrength: Math.min(Math.sqrt((Uy - Wy) / Math.max(1 - Wy, 1e-4)), 1)
                    }
                  }(Wy.coatRoughness, Wy.coatRoughnessAnisotropy);
                  yb = bb.newBaseRoughness, Uy = bb.newAnisotropyStrength
                }
                bb.pbrMetallicRoughness && (bb.pbrMetallicRoughness.roughnessFactor = yb), Ey = Uy, ly = Wy.geometryCoatTangentAngle + .5 * Math.PI, Sy = void 0
              }
              Wy._useGltfStyleAnisotropy || (bb.extensions.KHR_materials_openpbr = {}, (Uy = this._exporter._glTF).extensionsUsed || (Uy.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const mb = {
              coatFactor: Wy.coatWeight,
              coatTexture: fy ?? void 0,
              coatRoughnessFactor: Wy.coatRoughness,
              coatRoughnessTexture: cb ?? void 0,
              coatNormalTexture: Py ?? void 0,
              coatColorFactor: Wy.coatColor.hBy(),
              coatColorTexture: oy ?? void 0,
              coatIor: 1.5 !== By ? By : void 0,
              coatDarkeningFactor: 1 !== Ky ? Ky : void 0,
              coatAnisotropyRotation: ly,
              coatAnisotropyStrength: Ey,
              coatAnisotropyTexture: Sy
            };
            null === mb.coatTexture && null === mb.coatRoughnessTexture && null === mb.coatRoughnessTexture && null === mb.coatAnisotropyTexture && null === mb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[Mh] = mb
          }
          yb(bb)
        }))
      }
    }
    let uh = !1;

    function rf() {
      uh || (uh = !0, uU.RegisterExtension(Mh, (yb => new nh(yb))))
    }
    rf();
    let Hh = (() => {
      var yb, bb, Wy, Uy, hy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, vb, ib, My, Yy, Xy, ny, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, kb, Ny, zb, Iy, xb, Ay, dy, yW, bW, Wb, Ub, hb, fb, Zb, cW, Pb, ob, Bb, Kb, eb, qW, sb, Sb, Eb, lb, mW, Cb;
      let Tb, Vb, Gb, Ob, Rb, vW, iW, Mb, Yb, Xb, nb, ub, rW, Hb, aW, Fb, pb, Lb, Qb, jW, Db, tW, wb, kW, Nb, zW, Ib, xW, Ab, db, yU, bU, WW, UW, hW, fW, ZW, cU, PW, oW, BW, KW, eW, qU, sW, SW, EW, lW, mU, CW, TW, VW, JW, gU, GW, OW, RW, vU, iU, MW, YW, XW, nW, uW, rU, HW, aU, FW, pW = Jb,
        LW = [],
        QW = [],
        jU = [],
        DW = [],
        tU = [],
        wW = [],
        kU = [],
        NW = [],
        zU = [],
        IW = [],
        xU = [],
        AW = [],
        dW = [],
        yh = [],
        bh = [],
        WU = [],
        UU = [],
        hU = [],
        fU = [],
        ZU = [],
        ch = [],
        PU = [],
        oU = [],
        BU = [],
        KU = [],
        eU = [],
        qh = [],
        sU = [],
        SU = [],
        EU = [],
        lU = [],
        mh = [],
        CU = [],
        TU = [],
        VU = [],
        JU = [],
        gh = [],
        GU = [],
        OU = [],
        RU = [],
        vh = [],
        ih = [],
        MU = [],
        YU = [],
        XU = [],
        nU = [],
        uU = [],
        rh = [],
        HU = [],
        ah = [],
        FU = [],
        pU = [],
        LU = [],
        QU = [],
        jh = [],
        DU = [],
        th = [],
        wU = [],
        kh = [],
        NU = [],
        zh = [],
        IU = [],
        xh = [],
        AU = [],
        dU = [],
        yf = [],
        bf = [],
        Wh = [],
        Uh = [],
        hh = [],
        fh = [],
        Zh = [],
        cf = [],
        Ph = [],
        oh = [],
        Bh = [],
        Kh = [],
        eh = [],
        qf = [],
        sh = [],
        Sh = [],
        Eh = [],
        lh = [],
        mf = [],
        Ch = [],
        Th = [],
        Vh = [],
        Jh = [],
        gf = [],
        Gh = [],
        Oh = [],
        Rh = [],
        vf = [],
        Mh = [],
        Yh = [],
        Xh = [],
        nh = [],
        uh = [],
        rf = [],
        Hh = [],
        af = [],
        Fh = [],
        ph = [],
        Lh = [],
        Qh = [],
        jf = [],
        Dh = [],
        tf = [],
        wh = [],
        kf = [],
        Nh = [],
        zf = [],
        Ih = [],
        xf = [],
        Ah = [],
        dh = [],
        yZ = [],
        bZ = [],
        Wf = [],
        Uf = [],
        hf = [],
        ff = [],
        Zf = [],
        cZ = [],
        Pf = [],
        of = [],
        Bf = [],
        Kf = [],
        ef = [],
        qZ = [],
        sf = [],
        Sf = [],
        Ef = [];
      return yb = class extends pW {
        get directIntensity() {
          return (0, Oy.e)(this, bb, "f")
        }
        set directIntensity(yb) {
          (0, Oy.f)(this, bb, yb, "f")
        }
        get emissiveIntensity() {
          return (0, Oy.e)(this, Wy, "f")
        }
        set emissiveIntensity(yb) {
          (0, Oy.f)(this, Wy, yb, "f")
        }
        get environmentIntensity() {
          return (0, Oy.e)(this, Uy, "f")
        }
        set environmentIntensity(yb) {
          (0, Oy.f)(this, Uy, yb, "f")
        }
        get specularIntensity() {
          return (0, Oy.e)(this, hy, "f")
        }
        set specularIntensity(yb) {
          (0, Oy.f)(this, hy, yb, "f")
        }
        get disableBumpMap() {
          return (0, Oy.e)(this, Zy, "f")
        }
        set disableBumpMap(yb) {
          (0, Oy.f)(this, Zy, yb, "f")
        }
        get albedoTexture() {
          return (0, Oy.e)(this, cb, "f")
        }
        set albedoTexture(yb) {
          (0, Oy.f)(this, cb, yb, "f")
        }
        get baseWeightTexture() {
          return (0, Oy.e)(this, Py, "f")
        }
        set baseWeightTexture(yb) {
          (0, Oy.f)(this, Py, yb, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Oy.e)(this, oy, "f")
        }
        set baseDiffuseRoughnessTexture(yb) {
          (0, Oy.f)(this, oy, yb, "f")
        }
        get ambientTexture() {
          return (0, Oy.e)(this, By, "f")
        }
        set ambientTexture(yb) {
          (0, Oy.f)(this, By, yb, "f")
        }
        get ambientTextureStrength() {
          return (0, Oy.e)(this, Ky, "f")
        }
        set ambientTextureStrength(yb) {
          (0, Oy.f)(this, Ky, yb, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Oy.e)(this, ey, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(yb) {
          (0, Oy.f)(this, ey, yb, "f")
        }
        get opacityTexture() {
          return (0, Oy.e)(this, qb, "f")
        }
        set opacityTexture(yb) {
          (0, Oy.f)(this, qb, yb, "f")
        }
        get reflectionTexture() {
          return (0, Oy.e)(this, sy, "f")
        }
        set reflectionTexture(yb) {
          (0, Oy.f)(this, sy, yb, "f")
        }
        get emissiveTexture() {
          return (0, Oy.e)(this, Sy, "f")
        }
        set emissiveTexture(yb) {
          (0, Oy.f)(this, Sy, yb, "f")
        }
        get reflectivityTexture() {
          return (0, Oy.e)(this, Ey, "f")
        }
        set reflectivityTexture(yb) {
          (0, Oy.f)(this, Ey, yb, "f")
        }
        get metallicTexture() {
          return (0, Oy.e)(this, ly, "f")
        }
        set metallicTexture(yb) {
          (0, Oy.f)(this, ly, yb, "f")
        }
        get metallic() {
          return (0, Oy.e)(this, mb, "f")
        }
        set metallic(yb) {
          (0, Oy.f)(this, mb, yb, "f")
        }
        get roughness() {
          return (0, Oy.e)(this, Cy, "f")
        }
        set roughness(yb) {
          (0, Oy.f)(this, Cy, yb, "f")
        }
        get metallicF0Factor() {
          return (0, Oy.e)(this, Ty, "f")
        }
        set metallicF0Factor(yb) {
          (0, Oy.f)(this, Ty, yb, "f")
        }
        get metallicReflectanceColor() {
          return (0, Oy.e)(this, Vy, "f")
        }
        set metallicReflectanceColor(yb) {
          (0, Oy.f)(this, Vy, yb, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Oy.e)(this, Jy, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(yb) {
          (0, Oy.f)(this, Jy, yb, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Oy.e)(this, gb, "f")
        }
        set metallicReflectanceTexture(yb) {
          (0, Oy.f)(this, gb, yb, "f")
        }
        get reflectanceTexture() {
          return (0, Oy.e)(this, Gy, "f")
        }
        set reflectanceTexture(yb) {
          (0, Oy.f)(this, Gy, yb, "f")
        }
        get microSurfaceTexture() {
          return (0, Oy.e)(this, vb, "f")
        }
        set microSurfaceTexture(yb) {
          (0, Oy.f)(this, vb, yb, "f")
        }
        get bumpTexture() {
          return (0, Oy.e)(this, ib, "f")
        }
        set bumpTexture(yb) {
          (0, Oy.f)(this, ib, yb, "f")
        }
        get lightmapTexture() {
          return (0, Oy.e)(this, My, "f")
        }
        set lightmapTexture(yb) {
          (0, Oy.f)(this, My, yb, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(yb) {
          this.subSurface.refractionTexture = yb, yb ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Oy.e)(this, Yy, "f")
        }
        set ambientColor(yb) {
          (0, Oy.f)(this, Yy, yb, "f")
        }
        get albedoColor() {
          return (0, Oy.e)(this, Xy, "f")
        }
        set albedoColor(yb) {
          (0, Oy.f)(this, Xy, yb, "f")
        }
        get baseWeight() {
          return (0, Oy.e)(this, ny, "f")
        }
        set baseWeight(yb) {
          (0, Oy.f)(this, ny, yb, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Oy.e)(this, rb, "f")
        }
        set baseDiffuseRoughness(yb) {
          (0, Oy.f)(this, rb, yb, "f")
        }
        get reflectivityColor() {
          return (0, Oy.e)(this, Hy, "f")
        }
        set reflectivityColor(yb) {
          (0, Oy.f)(this, Hy, yb, "f")
        }
        get reflectionColor() {
          return (0, Oy.e)(this, ab, "f")
        }
        set reflectionColor(yb) {
          (0, Oy.f)(this, ab, yb, "f")
        }
        get emissiveColor() {
          return (0, Oy.e)(this, Fy, "f")
        }
        set emissiveColor(yb) {
          (0, Oy.f)(this, Fy, yb, "f")
        }
        get microSurface() {
          return (0, Oy.e)(this, py, "f")
        }
        set microSurface(yb) {
          (0, Oy.f)(this, py, yb, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(yb) {
          this.subSurface.indexOfRefraction = yb
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(yb) {
          this.subSurface.invertRefractionY = yb
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(yb) {
          this.subSurface.linkRefractionWithTransparency = yb, yb && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Oy.e)(this, Ly, "f")
        }
        set useLightmapAsShadowmap(yb) {
          (0, Oy.f)(this, Ly, yb, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Oy.e)(this, Qy, "f")
        }
        set useAlphaFromAlbedoTexture(yb) {
          (0, Oy.f)(this, Qy, yb, "f")
        }
        get forceAlphaTest() {
          return (0, Oy.e)(this, jb, "f")
        }
        set forceAlphaTest(yb) {
          (0, Oy.f)(this, jb, yb, "f")
        }
        get alphaCutOff() {
          return (0, Oy.e)(this, Dy, "f")
        }
        set alphaCutOff(yb) {
          (0, Oy.f)(this, Dy, yb, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Oy.e)(this, tb, "f")
        }
        set useSpecularOverAlpha(yb) {
          (0, Oy.f)(this, tb, yb, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Oy.e)(this, kb, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(yb) {
          (0, Oy.f)(this, kb, yb, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Oy.e)(this, Ny, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(yb) {
          (0, Oy.f)(this, Ny, yb, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Oy.e)(this, zb, "f")
        }
        set useRoughnessFromMetallicTextureGreen(yb) {
          (0, Oy.f)(this, zb, yb, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Oy.e)(this, Iy, "f")
        }
        set useMetallnessFromMetallicTextureBlue(yb) {
          (0, Oy.f)(this, Iy, yb, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Oy.e)(this, xb, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(yb) {
          (0, Oy.f)(this, xb, yb, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Oy.e)(this, Ay, "f")
        }
        set useAmbientInGrayScale(yb) {
          (0, Oy.f)(this, Ay, yb, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Oy.e)(this, dy, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(yb) {
          (0, Oy.f)(this, dy, yb, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Jb.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(yb) {
          yb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = yb ? Jb.LIGHTFALLOFF_PHYSICAL : Jb.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Jb.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(yb) {
          yb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = yb ? Jb.LIGHTFALLOFF_GLTF : Jb.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Oy.e)(this, yW, "f")
        }
        set useRadianceOverAlpha(yb) {
          (0, Oy.f)(this, yW, yb, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Oy.e)(this, bW, "f")
        }
        set useObjectSpaceNormalMap(yb) {
          (0, Oy.f)(this, bW, yb, "f")
        }
        get useParallax() {
          return (0, Oy.e)(this, Wb, "f")
        }
        set useParallax(yb) {
          (0, Oy.f)(this, Wb, yb, "f")
        }
        get useParallaxOcclusion() {
          return (0, Oy.e)(this, Ub, "f")
        }
        set useParallaxOcclusion(yb) {
          (0, Oy.f)(this, Ub, yb, "f")
        }
        get parallaxScaleBias() {
          return (0, Oy.e)(this, hb, "f")
        }
        set parallaxScaleBias(yb) {
          (0, Oy.f)(this, hb, yb, "f")
        }
        get disableLighting() {
          return (0, Oy.e)(this, fb, "f")
        }
        set disableLighting(yb) {
          (0, Oy.f)(this, fb, yb, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Oy.e)(this, Zb, "f")
        }
        set forceIrradianceInFragment(yb) {
          (0, Oy.f)(this, Zb, yb, "f")
        }
        get maxSimultaneousLights() {
          return (0, Oy.e)(this, cW, "f")
        }
        set maxSimultaneousLights(yb) {
          (0, Oy.f)(this, cW, yb, "f")
        }
        get invertNormalMapX() {
          return (0, Oy.e)(this, Pb, "f")
        }
        set invertNormalMapX(yb) {
          (0, Oy.f)(this, Pb, yb, "f")
        }
        get invertNormalMapY() {
          return (0, Oy.e)(this, ob, "f")
        }
        set invertNormalMapY(yb) {
          (0, Oy.f)(this, ob, yb, "f")
        }
        get twoSidedLighting() {
          return (0, Oy.e)(this, Bb, "f")
        }
        set twoSidedLighting(yb) {
          (0, Oy.f)(this, Bb, yb, "f")
        }
        get useAlphaFresnel() {
          return (0, Oy.e)(this, Kb, "f")
        }
        set useAlphaFresnel(yb) {
          (0, Oy.f)(this, Kb, yb, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Oy.e)(this, eb, "f")
        }
        set useLinearAlphaFresnel(yb) {
          (0, Oy.f)(this, eb, yb, "f")
        }
        get environmentBRDFTexture() {
          return (0, Oy.e)(this, qW, "f")
        }
        set environmentBRDFTexture(yb) {
          (0, Oy.f)(this, qW, yb, "f")
        }
        get forceNormalForward() {
          return (0, Oy.e)(this, sb, "f")
        }
        set forceNormalForward(yb) {
          (0, Oy.f)(this, sb, yb, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Oy.e)(this, Sb, "f")
        }
        set enableSpecularAntiAliasing(yb) {
          (0, Oy.f)(this, Sb, yb, "f")
        }
        get useHorizonOcclusion() {
          return (0, Oy.e)(this, Eb, "f")
        }
        set useHorizonOcclusion(yb) {
          (0, Oy.f)(this, Eb, yb, "f")
        }
        get useRadianceOcclusion() {
          return (0, Oy.e)(this, lb, "f")
        }
        set useRadianceOcclusion(yb) {
          (0, Oy.f)(this, lb, yb, "f")
        }
        get unlit() {
          return (0, Oy.e)(this, mW, "f")
        }
        set unlit(yb) {
          (0, Oy.f)(this, mW, yb, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Oy.e)(this, Cb, "f")
        }
        set applyDecalMapAfterDetailMap(yb) {
          (0, Oy.f)(this, Cb, yb, "f")
        }
        constructor(fy, Ry) {
          super(fy, Ry, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), bb.set(this, ((0, Oy.l)(this, LW), (0, Oy.l)(this, QW, 1))), Wy.set(this, ((0, Oy.l)(this, jU), (0, Oy.l)(this, DW, 1))), Uy.set(this, ((0, Oy.l)(this, tU), (0, Oy.l)(this, wW, 1))), hy.set(this, ((0, Oy.l)(this, kU), (0, Oy.l)(this, NW, 1))), Zy.set(this, ((0, Oy.l)(this, zU), (0, Oy.l)(this, IW, !1))), cb.set(this, ((0, Oy.l)(this, xU), (0, Oy.l)(this, AW, void 0))), Py.set(this, ((0, Oy.l)(this, dW), (0, Oy.l)(this, yh, void 0))), oy.set(this, ((0, Oy.l)(this, bh), (0, Oy.l)(this, WU, void 0))), By.set(this, ((0, Oy.l)(this, UU), (0, Oy.l)(this, hU, void 0))), Ky.set(this, ((0, Oy.l)(this, fU), (0, Oy.l)(this, ZU, 1))), ey.set(this, ((0, Oy.l)(this, ch), (0, Oy.l)(this, PU, yb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), qb.set(this, ((0, Oy.l)(this, oU), (0, Oy.l)(this, BU, void 0))), sy.set(this, ((0, Oy.l)(this, KU), (0, Oy.l)(this, eU, void 0))), Sy.set(this, ((0, Oy.l)(this, qh), (0, Oy.l)(this, sU, void 0))), Ey.set(this, ((0, Oy.l)(this, SU), (0, Oy.l)(this, EU, void 0))), ly.set(this, ((0, Oy.l)(this, lU), (0, Oy.l)(this, mh, void 0))), mb.set(this, ((0, Oy.l)(this, CU), (0, Oy.l)(this, TU, void 0))), Cy.set(this, ((0, Oy.l)(this, VU), (0, Oy.l)(this, JU, void 0))), Ty.set(this, ((0, Oy.l)(this, gh), (0, Oy.l)(this, GU, 1))), Vy.set(this, ((0, Oy.l)(this, OU), (0, Oy.l)(this, RU, wy.d.White()))), Jy.set(this, ((0, Oy.l)(this, vh), (0, Oy.l)(this, ih, !1))), gb.set(this, ((0, Oy.l)(this, MU), (0, Oy.l)(this, YU, void 0))), Gy.set(this, ((0, Oy.l)(this, XU), (0, Oy.l)(this, nU, void 0))), vb.set(this, ((0, Oy.l)(this, uU), (0, Oy.l)(this, rh, void 0))), ib.set(this, ((0, Oy.l)(this, HU), (0, Oy.l)(this, ah, void 0))), My.set(this, ((0, Oy.l)(this, FU), (0, Oy.l)(this, pU, void 0))), Yy.set(this, ((0, Oy.l)(this, LU), (0, Oy.l)(this, QU, new wy.d(0, 0, 0)))), Xy.set(this, ((0, Oy.l)(this, jh), (0, Oy.l)(this, DU, new wy.d(1, 1, 1)))), ny.set(this, ((0, Oy.l)(this, th), (0, Oy.l)(this, wU, 1))), rb.set(this, ((0, Oy.l)(this, kh), (0, Oy.l)(this, NU, void 0))), Hy.set(this, ((0, Oy.l)(this, zh), (0, Oy.l)(this, IU, new wy.d(1, 1, 1)))), ab.set(this, ((0, Oy.l)(this, xh), (0, Oy.l)(this, AU, new wy.d(1, 1, 1)))), Fy.set(this, ((0, Oy.l)(this, dU), (0, Oy.l)(this, yf, new wy.d(0, 0, 0)))), py.set(this, ((0, Oy.l)(this, bf), (0, Oy.l)(this, Wh, 1))), Ly.set(this, ((0, Oy.l)(this, Uh), (0, Oy.l)(this, hh, !1))), Qy.set(this, ((0, Oy.l)(this, fh), (0, Oy.l)(this, Zh, !1))), jb.set(this, ((0, Oy.l)(this, cf), (0, Oy.l)(this, Ph, !1))), Dy.set(this, ((0, Oy.l)(this, oh), (0, Oy.l)(this, Bh, .4))), tb.set(this, ((0, Oy.l)(this, Kh), (0, Oy.l)(this, eh, !0))), kb.set(this, ((0, Oy.l)(this, qf), (0, Oy.l)(this, sh, !1))), Ny.set(this, ((0, Oy.l)(this, Sh), (0, Oy.l)(this, Eh, !0))), zb.set(this, ((0, Oy.l)(this, lh), (0, Oy.l)(this, mf, !1))), Iy.set(this, ((0, Oy.l)(this, Ch), (0, Oy.l)(this, Th, !1))), xb.set(this, ((0, Oy.l)(this, Vh), (0, Oy.l)(this, Jh, !1))), Ay.set(this, ((0, Oy.l)(this, gf), (0, Oy.l)(this, Gh, !1))), dy.set(this, ((0, Oy.l)(this, Oh), (0, Oy.l)(this, Rh, !1))), yW.set(this, ((0, Oy.l)(this, vf), (0, Oy.l)(this, Mh, !0))), bW.set(this, ((0, Oy.l)(this, Yh), (0, Oy.l)(this, Xh, !1))), Wb.set(this, ((0, Oy.l)(this, nh), (0, Oy.l)(this, uh, !1))), Ub.set(this, ((0, Oy.l)(this, rf), (0, Oy.l)(this, Hh, !1))), hb.set(this, ((0, Oy.l)(this, af), (0, Oy.l)(this, Fh, .05))), fb.set(this, ((0, Oy.l)(this, ph), (0, Oy.l)(this, Lh, !1))), Zb.set(this, ((0, Oy.l)(this, Qh), (0, Oy.l)(this, jf, !1))), cW.set(this, ((0, Oy.l)(this, Dh), (0, Oy.l)(this, tf, 4))), Pb.set(this, ((0, Oy.l)(this, wh), (0, Oy.l)(this, kf, !1))), ob.set(this, ((0, Oy.l)(this, Nh), (0, Oy.l)(this, zf, !1))), Bb.set(this, ((0, Oy.l)(this, Ih), (0, Oy.l)(this, xf, !1))), Kb.set(this, ((0, Oy.l)(this, Ah), (0, Oy.l)(this, dh, !1))), eb.set(this, ((0, Oy.l)(this, yZ), (0, Oy.l)(this, bZ, !1))), qW.set(this, ((0, Oy.l)(this, Wf), (0, Oy.l)(this, Uf, null))), sb.set(this, ((0, Oy.l)(this, hf), (0, Oy.l)(this, ff, !1))), Sb.set(this, ((0, Oy.l)(this, Zf), (0, Oy.l)(this, cZ, !1))), Eb.set(this, ((0, Oy.l)(this, Pf), (0, Oy.l)(this, of, !0))), lb.set(this, ((0, Oy.l)(this, Bf), (0, Oy.l)(this, Kf, !0))), mW.set(this, ((0, Oy.l)(this, ef), (0, Oy.l)(this, qZ, !1))), Cb.set(this, ((0, Oy.l)(this, sf), (0, Oy.l)(this, Sf, !1))), (0, Oy.l)(this, Ef), this._environmentBRDFTexture = uy(this.kWy())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(bb) {
          let Wy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const hy = gW.c.Clone((() => new yb(bb, this.kWy())), this, {
            cloneTexturesOnlyOnce: Wy
          });
          return hy.id = bb, hy.name = bb, this.stencil.copyTo(hy.stencil), this._clonePlugins(hy, Uy), hy
        }
        serialize() {
          const yb = super.serialize();
          return yb.customType = "BABYLON.PBRMaterial", yb
        }
        static Parse(bb, Wy, Uy) {
          const hy = gW.c.Parse((() => new yb(bb.name, Wy)), bb, Wy, Uy);
          return bb.stencil && hy.stencil.parse(bb.stencil, Wy, Uy), fy.e._ParsePlugins(bb, hy, Wy, Uy), bb.clearCoat && hy.clearCoat.parse(bb.clearCoat, Wy, Uy), bb.anisotropy && hy.anisotropy.parse(bb.anisotropy, Wy, Uy), bb.brdf && hy.brdf.parse(bb.brdf, Wy, Uy), bb.sheen && hy.sheen.parse(bb.sheen, Wy, Uy), bb.subSurface && hy.subSurface.parse(bb.subSurface, Wy, Uy), bb.iridescence && hy.iridescence.parse(bb.iridescence, Wy, Uy), hy
        }
      }, bb = new WeakMap, Wy = new WeakMap, Uy = new WeakMap, hy = new WeakMap, Zy = new WeakMap, cb = new WeakMap, Py = new WeakMap, oy = new WeakMap, By = new WeakMap, Ky = new WeakMap, ey = new WeakMap, qb = new WeakMap, sy = new WeakMap, Sy = new WeakMap, Ey = new WeakMap, ly = new WeakMap, mb = new WeakMap, Cy = new WeakMap, Ty = new WeakMap, Vy = new WeakMap, Jy = new WeakMap, gb = new WeakMap, Gy = new WeakMap, vb = new WeakMap, ib = new WeakMap, My = new WeakMap, Yy = new WeakMap, Xy = new WeakMap, ny = new WeakMap, rb = new WeakMap, Hy = new WeakMap, ab = new WeakMap, Fy = new WeakMap, py = new WeakMap, Ly = new WeakMap, Qy = new WeakMap, jb = new WeakMap, Dy = new WeakMap, tb = new WeakMap, kb = new WeakMap, Ny = new WeakMap, zb = new WeakMap, Iy = new WeakMap, xb = new WeakMap, Ay = new WeakMap, dy = new WeakMap, yW = new WeakMap, bW = new WeakMap, Wb = new WeakMap, Ub = new WeakMap, hb = new WeakMap, fb = new WeakMap, Zb = new WeakMap, cW = new WeakMap, Pb = new WeakMap, ob = new WeakMap, Bb = new WeakMap, Kb = new WeakMap, eb = new WeakMap, qW = new WeakMap, sb = new WeakMap, Sb = new WeakMap, Eb = new WeakMap, lb = new WeakMap, mW = new WeakMap, Cb = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(pW[Symbol.metadata] ?? null) : void 0;
        Tb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], vW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], iW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Mb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Yb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], ub = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], rW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Lb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, Ry.q)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], wb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], zW = [(0, Ry.M)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty", null)], Ib = [(0, Ry.q)("ambient"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, Ry.q)("albedo"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, Ry.T)("baseWeight"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], db = [(0, Ry.T)("baseDiffuseRoughness"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], yU = [(0, Ry.q)("reflectivity"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], bU = [(0, Ry.q)("reflection"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], WW = [(0, Ry.q)("emissive"), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], ZW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], cU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], PW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], EW = [(0, Ry.T)()], lW = [(0, Ry.T)()], mU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], gU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsLightsDirty")], GW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsLightsDirty")], RW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], vU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], iU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], FW = [(0, Ry.T)(), (0, Ry.h)("_markAllSubMeshesAsMiscDirty")], (0, Oy.j)(yb, null, Tb, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "directIntensity" in yb,
            get: yb => yb.directIntensity,
            set: (yb, bb) => {
              yb.directIntensity = bb
            }
          },
          metadata: bb
        }, QW, jU), (0, Oy.j)(yb, null, Vb, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "emissiveIntensity" in yb,
            get: yb => yb.emissiveIntensity,
            set: (yb, bb) => {
              yb.emissiveIntensity = bb
            }
          },
          metadata: bb
        }, DW, tU), (0, Oy.j)(yb, null, Gb, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "environmentIntensity" in yb,
            get: yb => yb.environmentIntensity,
            set: (yb, bb) => {
              yb.environmentIntensity = bb
            }
          },
          metadata: bb
        }, wW, kU), (0, Oy.j)(yb, null, Ob, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: yb => "specularIntensity" in yb,
            get: yb => yb.specularIntensity,
            set: (yb, bb) => {
              yb.specularIntensity = bb
            }
          },
          metadata: bb
        }, NW, zU), (0, Oy.j)(yb, null, Rb, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: yb => "disableBumpMap" in yb,
            get: yb => yb.disableBumpMap,
            set: (yb, bb) => {
              yb.disableBumpMap = bb
            }
          },
          metadata: bb
        }, IW, xU), (0, Oy.j)(yb, null, vW, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "albedoTexture" in yb,
            get: yb => yb.albedoTexture,
            set: (yb, bb) => {
              yb.albedoTexture = bb
            }
          },
          metadata: bb
        }, AW, dW), (0, Oy.j)(yb, null, iW, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "baseWeightTexture" in yb,
            get: yb => yb.baseWeightTexture,
            set: (yb, bb) => {
              yb.baseWeightTexture = bb
            }
          },
          metadata: bb
        }, yh, bh), (0, Oy.j)(yb, null, Mb, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "baseDiffuseRoughnessTexture" in yb,
            get: yb => yb.baseDiffuseRoughnessTexture,
            set: (yb, bb) => {
              yb.baseDiffuseRoughnessTexture = bb
            }
          },
          metadata: bb
        }, WU, UU), (0, Oy.j)(yb, null, Yb, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "ambientTexture" in yb,
            get: yb => yb.ambientTexture,
            set: (yb, bb) => {
              yb.ambientTexture = bb
            }
          },
          metadata: bb
        }, hU, fU), (0, Oy.j)(yb, null, Xb, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: yb => "ambientTextureStrength" in yb,
            get: yb => yb.ambientTextureStrength,
            set: (yb, bb) => {
              yb.ambientTextureStrength = bb
            }
          },
          metadata: bb
        }, ZU, ch), (0, Oy.j)(yb, null, nb, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: yb => "ambientTextureImpactOnAnalyticalLights" in yb,
            get: yb => yb.ambientTextureImpactOnAnalyticalLights,
            set: (yb, bb) => {
              yb.ambientTextureImpactOnAnalyticalLights = bb
            }
          },
          metadata: bb
        }, PU, oU), (0, Oy.j)(yb, null, ub, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "opacityTexture" in yb,
            get: yb => yb.opacityTexture,
            set: (yb, bb) => {
              yb.opacityTexture = bb
            }
          },
          metadata: bb
        }, BU, KU), (0, Oy.j)(yb, null, rW, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "reflectionTexture" in yb,
            get: yb => yb.reflectionTexture,
            set: (yb, bb) => {
              yb.reflectionTexture = bb
            }
          },
          metadata: bb
        }, eU, qh), (0, Oy.j)(yb, null, Hb, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "emissiveTexture" in yb,
            get: yb => yb.emissiveTexture,
            set: (yb, bb) => {
              yb.emissiveTexture = bb
            }
          },
          metadata: bb
        }, sU, SU), (0, Oy.j)(yb, null, aW, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "reflectivityTexture" in yb,
            get: yb => yb.reflectivityTexture,
            set: (yb, bb) => {
              yb.reflectivityTexture = bb
            }
          },
          metadata: bb
        }, EU, lU), (0, Oy.j)(yb, null, Fb, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "metallicTexture" in yb,
            get: yb => yb.metallicTexture,
            set: (yb, bb) => {
              yb.metallicTexture = bb
            }
          },
          metadata: bb
        }, mh, CU), (0, Oy.j)(yb, null, pb, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: yb => "metallic" in yb,
            get: yb => yb.metallic,
            set: (yb, bb) => {
              yb.metallic = bb
            }
          },
          metadata: bb
        }, TU, VU), (0, Oy.j)(yb, null, Lb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "roughness" in yb,
            get: yb => yb.roughness,
            set: (yb, bb) => {
              yb.roughness = bb
            }
          },
          metadata: bb
        }, JU, gh), (0, Oy.j)(yb, null, Qb, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: yb => "metallicF0Factor" in yb,
            get: yb => yb.metallicF0Factor,
            set: (yb, bb) => {
              yb.metallicF0Factor = bb
            }
          },
          metadata: bb
        }, GU, OU), (0, Oy.j)(yb, null, jW, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "metallicReflectanceColor" in yb,
            get: yb => yb.metallicReflectanceColor,
            set: (yb, bb) => {
              yb.metallicReflectanceColor = bb
            }
          },
          metadata: bb
        }, RU, vh), (0, Oy.j)(yb, null, Db, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "useOnlyMetallicFromMetallicReflectanceTexture" in yb,
            get: yb => yb.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (yb, bb) => {
              yb.useOnlyMetallicFromMetallicReflectanceTexture = bb
            }
          },
          metadata: bb
        }, ih, MU), (0, Oy.j)(yb, null, tW, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "metallicReflectanceTexture" in yb,
            get: yb => yb.metallicReflectanceTexture,
            set: (yb, bb) => {
              yb.metallicReflectanceTexture = bb
            }
          },
          metadata: bb
        }, YU, XU), (0, Oy.j)(yb, null, wb, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "reflectanceTexture" in yb,
            get: yb => yb.reflectanceTexture,
            set: (yb, bb) => {
              yb.reflectanceTexture = bb
            }
          },
          metadata: bb
        }, nU, uU), (0, Oy.j)(yb, null, kW, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "microSurfaceTexture" in yb,
            get: yb => yb.microSurfaceTexture,
            set: (yb, bb) => {
              yb.microSurfaceTexture = bb
            }
          },
          metadata: bb
        }, rh, HU), (0, Oy.j)(yb, null, Nb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "bumpTexture" in yb,
            get: yb => yb.bumpTexture,
            set: (yb, bb) => {
              yb.bumpTexture = bb
            }
          },
          metadata: bb
        }, ah, FU), (0, Oy.j)(yb, null, zW, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "lightmapTexture" in yb,
            get: yb => yb.lightmapTexture,
            set: (yb, bb) => {
              yb.lightmapTexture = bb
            }
          },
          metadata: bb
        }, pU, LU), (0, Oy.j)(yb, null, Ib, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "ambientColor" in yb,
            get: yb => yb.ambientColor,
            set: (yb, bb) => {
              yb.ambientColor = bb
            }
          },
          metadata: bb
        }, QU, jh), (0, Oy.j)(yb, null, xW, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "albedoColor" in yb,
            get: yb => yb.albedoColor,
            set: (yb, bb) => {
              yb.albedoColor = bb
            }
          },
          metadata: bb
        }, DU, th), (0, Oy.j)(yb, null, Ab, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: yb => "baseWeight" in yb,
            get: yb => yb.baseWeight,
            set: (yb, bb) => {
              yb.baseWeight = bb
            }
          },
          metadata: bb
        }, wU, kh), (0, Oy.j)(yb, null, db, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: yb => "baseDiffuseRoughness" in yb,
            get: yb => yb.baseDiffuseRoughness,
            set: (yb, bb) => {
              yb.baseDiffuseRoughness = bb
            }
          },
          metadata: bb
        }, NU, zh), (0, Oy.j)(yb, null, yU, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "reflectivityColor" in yb,
            get: yb => yb.reflectivityColor,
            set: (yb, bb) => {
              yb.reflectivityColor = bb
            }
          },
          metadata: bb
        }, IU, xh), (0, Oy.j)(yb, null, bU, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "reflectionColor" in yb,
            get: yb => yb.reflectionColor,
            set: (yb, bb) => {
              yb.reflectionColor = bb
            }
          },
          metadata: bb
        }, AU, dU), (0, Oy.j)(yb, null, WW, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: yb => "emissiveColor" in yb,
            get: yb => yb.emissiveColor,
            set: (yb, bb) => {
              yb.emissiveColor = bb
            }
          },
          metadata: bb
        }, yf, bf), (0, Oy.j)(yb, null, UW, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: yb => "microSurface" in yb,
            get: yb => yb.microSurface,
            set: (yb, bb) => {
              yb.microSurface = bb
            }
          },
          metadata: bb
        }, Wh, Uh), (0, Oy.j)(yb, null, hW, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: yb => "useLightmapAsShadowmap" in yb,
            get: yb => yb.useLightmapAsShadowmap,
            set: (yb, bb) => {
              yb.useLightmapAsShadowmap = bb
            }
          },
          metadata: bb
        }, hh, fh), (0, Oy.j)(yb, null, fW, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAlphaFromAlbedoTexture" in yb,
            get: yb => yb.useAlphaFromAlbedoTexture,
            set: (yb, bb) => {
              yb.useAlphaFromAlbedoTexture = bb
            }
          },
          metadata: bb
        }, Zh, cf), (0, Oy.j)(yb, null, ZW, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: yb => "forceAlphaTest" in yb,
            get: yb => yb.forceAlphaTest,
            set: (yb, bb) => {
              yb.forceAlphaTest = bb
            }
          },
          metadata: bb
        }, Ph, oh), (0, Oy.j)(yb, null, cU, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: yb => "alphaCutOff" in yb,
            get: yb => yb.alphaCutOff,
            set: (yb, bb) => {
              yb.alphaCutOff = bb
            }
          },
          metadata: bb
        }, Bh, Kh), (0, Oy.j)(yb, null, PW, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "useSpecularOverAlpha" in yb,
            get: yb => yb.useSpecularOverAlpha,
            set: (yb, bb) => {
              yb.useSpecularOverAlpha = bb
            }
          },
          metadata: bb
        }, eh, qf), (0, Oy.j)(yb, null, oW, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "useMicroSurfaceFromReflectivityMapAlpha" in yb,
            get: yb => yb.useMicroSurfaceFromReflectivityMapAlpha,
            set: (yb, bb) => {
              yb.useMicroSurfaceFromReflectivityMapAlpha = bb
            }
          },
          metadata: bb
        }, sh, Sh), (0, Oy.j)(yb, null, BW, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRoughnessFromMetallicTextureAlpha" in yb,
            get: yb => yb.useRoughnessFromMetallicTextureAlpha,
            set: (yb, bb) => {
              yb.useRoughnessFromMetallicTextureAlpha = bb
            }
          },
          metadata: bb
        }, Eh, lh), (0, Oy.j)(yb, null, KW, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRoughnessFromMetallicTextureGreen" in yb,
            get: yb => yb.useRoughnessFromMetallicTextureGreen,
            set: (yb, bb) => {
              yb.useRoughnessFromMetallicTextureGreen = bb
            }
          },
          metadata: bb
        }, mf, Ch), (0, Oy.j)(yb, null, eW, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: yb => "useMetallnessFromMetallicTextureBlue" in yb,
            get: yb => yb.useMetallnessFromMetallicTextureBlue,
            set: (yb, bb) => {
              yb.useMetallnessFromMetallicTextureBlue = bb
            }
          },
          metadata: bb
        }, Th, Vh), (0, Oy.j)(yb, null, qU, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAmbientOcclusionFromMetallicTextureRed" in yb,
            get: yb => yb.useAmbientOcclusionFromMetallicTextureRed,
            set: (yb, bb) => {
              yb.useAmbientOcclusionFromMetallicTextureRed = bb
            }
          },
          metadata: bb
        }, Jh, gf), (0, Oy.j)(yb, null, sW, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAmbientInGrayScale" in yb,
            get: yb => yb.useAmbientInGrayScale,
            set: (yb, bb) => {
              yb.useAmbientInGrayScale = bb
            }
          },
          metadata: bb
        }, Gh, Oh), (0, Oy.j)(yb, null, SW, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAutoMicroSurfaceFromReflectivityMap" in yb,
            get: yb => yb.useAutoMicroSurfaceFromReflectivityMap,
            set: (yb, bb) => {
              yb.useAutoMicroSurfaceFromReflectivityMap = bb
            }
          },
          metadata: bb
        }, Rh, vf), (0, Oy.j)(yb, null, EW, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: yb => "usePhysicalLightFalloff" in yb,
            get: yb => yb.usePhysicalLightFalloff
          },
          metadata: bb
        }, null, LW), (0, Oy.j)(yb, null, lW, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: yb => "useGLTFLightFalloff" in yb,
            get: yb => yb.useGLTFLightFalloff
          },
          metadata: bb
        }, null, LW), (0, Oy.j)(yb, null, mU, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRadianceOverAlpha" in yb,
            get: yb => yb.useRadianceOverAlpha,
            set: (yb, bb) => {
              yb.useRadianceOverAlpha = bb
            }
          },
          metadata: bb
        }, Mh, Yh), (0, Oy.j)(yb, null, CW, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: yb => "useObjectSpaceNormalMap" in yb,
            get: yb => yb.useObjectSpaceNormalMap,
            set: (yb, bb) => {
              yb.useObjectSpaceNormalMap = bb
            }
          },
          metadata: bb
        }, Xh, nh), (0, Oy.j)(yb, null, TW, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: yb => "useParallax" in yb,
            get: yb => yb.useParallax,
            set: (yb, bb) => {
              yb.useParallax = bb
            }
          },
          metadata: bb
        }, uh, rf), (0, Oy.j)(yb, null, VW, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: yb => "useParallaxOcclusion" in yb,
            get: yb => yb.useParallaxOcclusion,
            set: (yb, bb) => {
              yb.useParallaxOcclusion = bb
            }
          },
          metadata: bb
        }, Hh, af), (0, Oy.j)(yb, null, JW, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: yb => "parallaxScaleBias" in yb,
            get: yb => yb.parallaxScaleBias,
            set: (yb, bb) => {
              yb.parallaxScaleBias = bb
            }
          },
          metadata: bb
        }, Fh, ph), (0, Oy.j)(yb, null, gU, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: yb => "disableLighting" in yb,
            get: yb => yb.disableLighting,
            set: (yb, bb) => {
              yb.disableLighting = bb
            }
          },
          metadata: bb
        }, Lh, Qh), (0, Oy.j)(yb, null, GW, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: yb => "forceIrradianceInFragment" in yb,
            get: yb => yb.forceIrradianceInFragment,
            set: (yb, bb) => {
              yb.forceIrradianceInFragment = bb
            }
          },
          metadata: bb
        }, jf, Dh), (0, Oy.j)(yb, null, OW, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: yb => "maxSimultaneousLights" in yb,
            get: yb => yb.maxSimultaneousLights,
            set: (yb, bb) => {
              yb.maxSimultaneousLights = bb
            }
          },
          metadata: bb
        }, tf, wh), (0, Oy.j)(yb, null, RW, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: yb => "invertNormalMapX" in yb,
            get: yb => yb.invertNormalMapX,
            set: (yb, bb) => {
              yb.invertNormalMapX = bb
            }
          },
          metadata: bb
        }, kf, Nh), (0, Oy.j)(yb, null, vU, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: yb => "invertNormalMapY" in yb,
            get: yb => yb.invertNormalMapY,
            set: (yb, bb) => {
              yb.invertNormalMapY = bb
            }
          },
          metadata: bb
        }, zf, Ih), (0, Oy.j)(yb, null, iU, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: yb => "twoSidedLighting" in yb,
            get: yb => yb.twoSidedLighting,
            set: (yb, bb) => {
              yb.twoSidedLighting = bb
            }
          },
          metadata: bb
        }, xf, Ah), (0, Oy.j)(yb, null, MW, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: yb => "useAlphaFresnel" in yb,
            get: yb => yb.useAlphaFresnel,
            set: (yb, bb) => {
              yb.useAlphaFresnel = bb
            }
          },
          metadata: bb
        }, dh, yZ), (0, Oy.j)(yb, null, YW, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: yb => "useLinearAlphaFresnel" in yb,
            get: yb => yb.useLinearAlphaFresnel,
            set: (yb, bb) => {
              yb.useLinearAlphaFresnel = bb
            }
          },
          metadata: bb
        }, bZ, Wf), (0, Oy.j)(yb, null, XW, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: yb => "environmentBRDFTexture" in yb,
            get: yb => yb.environmentBRDFTexture,
            set: (yb, bb) => {
              yb.environmentBRDFTexture = bb
            }
          },
          metadata: bb
        }, Uf, hf), (0, Oy.j)(yb, null, nW, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: yb => "forceNormalForward" in yb,
            get: yb => yb.forceNormalForward,
            set: (yb, bb) => {
              yb.forceNormalForward = bb
            }
          },
          metadata: bb
        }, ff, Zf), (0, Oy.j)(yb, null, uW, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: yb => "enableSpecularAntiAliasing" in yb,
            get: yb => yb.enableSpecularAntiAliasing,
            set: (yb, bb) => {
              yb.enableSpecularAntiAliasing = bb
            }
          },
          metadata: bb
        }, cZ, Pf), (0, Oy.j)(yb, null, rU, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: yb => "useHorizonOcclusion" in yb,
            get: yb => yb.useHorizonOcclusion,
            set: (yb, bb) => {
              yb.useHorizonOcclusion = bb
            }
          },
          metadata: bb
        }, of, Bf), (0, Oy.j)(yb, null, HW, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: yb => "useRadianceOcclusion" in yb,
            get: yb => yb.useRadianceOcclusion,
            set: (yb, bb) => {
              yb.useRadianceOcclusion = bb
            }
          },
          metadata: bb
        }, Kf, ef), (0, Oy.j)(yb, null, aU, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: yb => "unlit" in yb,
            get: yb => yb.unlit,
            set: (yb, bb) => {
              yb.unlit = bb
            }
          },
          metadata: bb
        }, qZ, sf), (0, Oy.j)(yb, null, FW, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: yb => "applyDecalMapAfterDetailMap" in yb,
            get: yb => yb.applyDecalMapAfterDetailMap,
            set: (yb, bb) => {
              yb.applyDecalMapAfterDetailMap = bb
            }
          },
          metadata: bb
        }, Sf, Ef), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb.PBRMATERIAL_OPAQUE = Jb.PBRMATERIAL_OPAQUE, yb.PBRMATERIAL_ALPHATEST = Jb.PBRMATERIAL_ALPHATEST, yb.PBRMATERIAL_ALPHABLEND = Jb.PBRMATERIAL_ALPHABLEND, yb.PBRMATERIAL_ALPHATESTANDBLEND = Jb.PBRMATERIAL_ALPHATESTANDBLEND, yb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Jb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, yb
    })();
    const af = "KHR_materials_diffuse_transmission";

    function Fh(yb, bb) {
      const Wy = bb.subSurface;
      let Uy = null;
      return Wy.translucencyIntensityTexture ? Uy = Wy.translucencyIntensityTexture : Wy.thicknessTexture && Wy.useMaskFromThicknessTexture && (Uy = Wy.thicknessTexture), Uy && !Wy.useGltfStyleTextures ? (vb.b.Warn(`${yb}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${bb.name}`, 1), null) : Uy
    }
    class ph {
      constructor(yb) {
        this.name = af, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
          const bb = Fh(yb, Wy);
          return bb && Uy.push(bb), Wy.subSurface.translucencyColorTexture && Uy.push(Wy.subSurface.translucencyColorTexture), Uy
        }
        return Uy
      }
      _isExtensionEnabled(yb) {
        if (yb.unlit) return !1;
        const bb = yb.subSurface;
        return !!bb.isTranslucencyEnabled && (!yb.unlit && !bb.useAlbedoToTintTranslucency && bb.useGltfStyleTextures && 1 === bb.volumeIndexOfRefraction && 0 === bb.minimumThickness && 0 === bb.maximumThickness)
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((Uy => {
          if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            const Uy = Wy.subSurface,
              hy = Fh(yb, Wy),
              fy = 0 == Uy.translucencyIntensity ? void 0 : Uy.translucencyIntensity,
              Zy = this._exporter._materialExporter.getTextureInfo(hy) ?? void 0,
              cb = !Uy.translucencyColor || Uy.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Uy.translucencyColor.hBy(),
              Py = this._exporter._materialExporter.getTextureInfo(Uy.translucencyColorTexture) ?? void 0,
              oy = {
                diffuseTransmissionFactor: fy,
                diffuseTransmissionTexture: Zy,
                diffuseTransmissionColorFactor: cb,
                diffuseTransmissionColorTexture: Py
              };
            (Zy || Py) && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions = bb.extensions || {}, bb.extensions[af] = oy
          }
          Uy(bb)
        }))
      }
    }
    let Lh = !1;

    function Qh() {
      Lh || (Lh = !0, uU.RegisterExtension(af, (yb => new ph(yb))))
    }
    Qh();
    const jf = "KHR_materials_dispersion";
    class Dh {
      constructor() {
        this.name = jf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(yb) {
        if (yb.unlit) return !1;
        const bb = yb.subSurface;
        return !(!bb.isRefractionEnabled && !bb.isDispersionEnabled)
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            const yb = {
              dispersion: Wy.subSurface.dispersion
            };
            bb.extensions = bb.extensions || {}, bb.extensions[jf] = yb
          }
          yb(bb)
        }))
      }
    }
    let tf = !1;

    function wh() {
      tf || (tf = !0, uU.RegisterExtension(jf, (() => new Dh)))
    }
    wh();
    const kf = "KHR_materials_emissive_strength";
    class Nh {
      constructor() {
        this.name = kf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(yb, bb, Wy) {
        return await new Promise((yb => {
          if (!(Wy instanceof Hh)) return yb(bb);
          const Uy = Wy.emissiveColor.scale(Wy.emissiveIntensity),
            hy = Math.max(...Uy.hBy());
          if (hy > 1) {
            bb.emissiveFactor = Uy.scale(1 / hy).hBy(), this._wasUsed = !0;
            const yb = {
              emissiveStrength: hy
            };
            bb.extensions || (bb.extensions = {}), bb.extensions[kf] = yb
          } else bb.emissiveFactor = Uy.hBy();
          return yb(bb)
        }))
      }
    }
    let zf = !1;

    function Ih() {
      zf || (zf = !0, uU.RegisterExtension(kf, (() => new Nh)))
    }
    Ih();
    const xf = "KHR_materials_ior";
    class Ah {
      constructor() {
        this.name = xf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(yb) {
        return !yb.unlit && (yb instanceof Ab ? 1.5 != yb.specularIor : yb instanceof Hh && (void 0 != yb.indexOfRefraction && 1.5 != yb.indexOfRefraction))
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            const yb = {
              ior: Wy.indexOfRefraction
            };
            bb.extensions = bb.extensions || {}, bb.extensions[xf] = yb
          } else if (Wy instanceof Ab && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            const yb = {
              ior: Wy.specularIor
            };
            bb.extensions = bb.extensions || {}, bb.extensions[xf] = yb
          }
          yb(bb)
        }))
      }
    }
    let dh = !1;

    function yZ() {
      dh || (dh = !0, uU.RegisterExtension(xf, (() => new Ah)))
    }
    yZ();
    const bZ = "KHR_materials_iridescence";
    class Wf {
      constructor(yb) {
        this.name = bZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Jb) {
          if (Wy.iridescence.isEnabled) return Wy.iridescence.texture && Uy.push(Wy.iridescence.texture), Wy.iridescence.thicknessTexture && Wy.iridescence.thicknessTexture !== Wy.iridescence.texture && Uy.push(Wy.iridescence.thicknessTexture), Uy
        } else if (Wy instanceof Ab && Wy.thinFilmWeight > 0) return Wy.thinFilmWeightTexture && Uy.push(Wy.thinFilmWeightTexture), Wy.thinFilmThicknessTexture && Wy.thinFilmThicknessTexture !== Wy.thinFilmWeightTexture && Uy.push(Wy.thinFilmThicknessTexture), Uy;
        return []
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Jb) {
            if (!Wy.iridescence.isEnabled) return void yb(bb);
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const Uy = this._exporter._materialExporter.getTextureInfo(Wy.iridescence.texture),
              hy = this._exporter._materialExporter.getTextureInfo(Wy.iridescence.thicknessTexture),
              fy = {
                iridescenceFactor: Wy.iridescence.intensity,
                iridescenceIor: Wy.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Wy.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Wy.iridescence.maximumThickness,
                iridescenceTexture: Uy ?? void 0,
                iridescenceThicknessTexture: hy ?? void 0
              };
            null === fy.iridescenceTexture && null === fy.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[bZ] = fy
          } else if (Wy instanceof Ab) {
            if (Wy.thinFilmWeight <= 0) return void yb(bb);
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const Uy = this._exporter._materialExporter.getTextureInfo(Wy.thinFilmWeightTexture),
              hy = this._exporter._materialExporter.getTextureInfo(Wy.thinFilmThicknessTexture),
              fy = {
                iridescenceFactor: Wy.thinFilmWeight,
                iridescenceIor: Wy.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Wy.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Wy.thinFilmThickness,
                iridescenceTexture: Uy ?? void 0,
                iridescenceThicknessTexture: hy ?? void 0
              };
            null === fy.iridescenceTexture && null === fy.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[bZ] = fy
          }
          yb(bb)
        }))
      }
    }
    let Uf = !1;

    function hf() {
      Uf || (Uf = !0, uU.RegisterExtension(bZ, (yb => new Wf(yb))))
    }
    hf();
    const ff = "KHR_materials_sheen";
    class Zf {
      constructor(yb) {
        this.name = ff, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        return Wy instanceof Hh && Wy.sheen.isEnabled && Wy.sheen.texture ? [Wy.sheen.texture] : []
      }
      async postExportMaterialAsync(yb, bb, Wy) {
        return await new Promise((yb => {
          if (Wy instanceof Hh) {
            if (!Wy.sheen.isEnabled) return void yb(bb);
            this._wasUsed = !0, null == bb.extensions && (bb.extensions = {});
            const Uy = {
              sheenColorFactor: Wy.sheen.color.hBy(),
              sheenRoughnessFactor: Wy.sheen.roughness ?? 0
            };
            null === Uy.sheenColorTexture && null === Uy.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Wy), Wy.sheen.texture && (Uy.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Wy.sheen.texture) ?? void 0), Wy.sheen.textureRoughness && !Wy.sheen.useRoughnessFromMainTexture ? Uy.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Wy.sheen.textureRoughness) ?? void 0 : Wy.sheen.texture && Wy.sheen.useRoughnessFromMainTexture && (Uy.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Wy.sheen.texture) ?? void 0), bb.extensions[ff] = Uy
          }
          yb(bb)
        }))
      }
    }
    let cZ = !1;

    function Pf() {
      cZ || (cZ = !0, uU.RegisterExtension(ff, (yb => new Zf(yb))))
    }
    Pf();
    const of = "KHR_materials_fuzz";

    function Bf(yb, bb) {
      const Wy = new My.f(bb.name, bb.kWy());
      return Wy._texture = yb, Wy.coordinatesIndex = bb.coordinatesIndex, bb instanceof My.f && (Wy.uOffset = bb.uOffset, Wy.vOffset = bb.vOffset, Wy.uScale = bb.uScale, Wy.vScale = bb.vScale, Wy.wAng = bb.wAng), Wy.wrapU = bb.wrapU, Wy.wrapV = bb.wrapV, Wy
    }
    class Kf {
      constructor(yb) {
        this.name = of, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = yb
      }
      dispose() {
        for (const yb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[yb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const yb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[yb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        if (Wy instanceof Ab) {
          const yb = [];
          if (Wy.fuzzWeight > 0) {
            Wy.fuzzWeightTexture && yb.push(Wy.fuzzWeightTexture);
            let bb = !1;
            if (Wy.fuzzRoughnessTexture && (Wy._useFuzzRoughnessFromTextureAlpha ? yb.push(Wy.fuzzRoughnessTexture) : bb = !0), Wy.fuzzColorTexture && !bb && yb.push(Wy.fuzzColorTexture), bb) {
              const bb = function(yb) {
                const bb = yb.fuzzColorTexture,
                  Wy = bb && bb.getInternalTexture() ? bb.getInternalTexture().uniqueId : "NoFuzzColor",
                  Uy = yb.fuzzRoughnessTexture;
                return `FuzzColor_${Wy}_FuzzRoughness_${Uy&&Uy.getInternalTexture()?Uy.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Wy);
              if (!this._cachedInternalTexturesMap[bb]) {
                const yb = await async function(yb) {
                  const bb = yb.kWy(),
                    Wy = yb.fuzzColorTexture,
                    Uy = yb.fuzzRoughnessTexture;
                  return Wy || Uy ? (await ZW("FuzzTexture", oW(Wy ? cU(Wy, 0) : PW(1), Wy ? cU(Wy, 1) : PW(1), Wy ? cU(Wy, 2) : PW(1), Uy ? cU(Uy, yb._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : PW(1)), bb)).getInternalTexture() : null
                }(Wy);
                yb && (this._cachedInternalTexturesMap[bb] = yb)
              }
              this._cachedInternalTexturesMap[bb] && (Wy.fuzzColorTexture && (this._mergedTexturesMap[Wy.fuzzColorTexture.uniqueId] = Bf(this._cachedInternalTexturesMap[bb], Wy.fuzzColorTexture), yb.push(this._mergedTexturesMap[Wy.fuzzColorTexture.uniqueId])), Wy.fuzzRoughnessTexture && (this._mergedTexturesMap[Wy.fuzzRoughnessTexture.uniqueId] = Bf(this._cachedInternalTexturesMap[bb], Wy.fuzzRoughnessTexture), yb.push(this._mergedTexturesMap[Wy.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return yb
        }
        return []
      }
      async postExportMaterialAsync(yb, bb, Wy) {
        return await new Promise((yb => {
          if (Wy instanceof Ab) {
            if (0 == Wy.fuzzWeight) return void yb(bb);
            this._wasUsed = !0, null == bb.extensions && (bb.extensions = {});
            const Uy = {
              fuzzFactor: Wy.fuzzWeight,
              fuzzColorFactor: Wy.fuzzColor.hBy(),
              fuzzRoughnessFactor: Wy.fuzzRoughness
            };
            let hy, fy;
            Wy.fuzzWeightTexture && (Uy.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Wy.fuzzWeightTexture) ?? void 0), Wy.fuzzColorTexture && (hy = this._mergedTexturesMap[Wy.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Wy.fuzzColorTexture.uniqueId] : Wy.fuzzColorTexture, Uy.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(hy) ?? void 0), Wy.fuzzRoughnessTexture && (fy = this._mergedTexturesMap[Wy.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Wy.fuzzRoughnessTexture.uniqueId] : Wy.fuzzRoughnessTexture, Uy.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(fy) ?? void 0), null === Uy.fuzzColorTexture && null === Uy.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[of] = Uy
          }
          yb(bb)
        }))
      }
    }
    let ef = !1;

    function qZ() {
      ef || (ef = !0, uU.RegisterExtension(of, (yb => new Kf(yb))))
    }
    qZ();
    const sf = "KHR_materials_specular";
    class Sf {
      constructor(yb) {
        this.name = sf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        return Wy instanceof Hh && this._isExtensionEnabled(Wy) ? (Wy.metallicReflectanceTexture && Uy.push(Wy.metallicReflectanceTexture), Wy.reflectanceTexture && Uy.push(Wy.reflectanceTexture), Uy) : Uy
      }
      _isExtensionEnabled(yb) {
        return !yb.unlit && (void 0 != yb.metallicF0Factor && 1 != yb.metallicF0Factor || void 0 != yb.metallicReflectanceColor && !yb.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(yb))
      }
      _hasTexturesExtension(yb) {
        return null != yb.metallicReflectanceTexture || null != yb.reflectanceTexture
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          var Uy;
          if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0, bb.extensions = bb.extensions || {};
            const yb = this._exporter._materialExporter.getTextureInfo(Wy.metallicReflectanceTexture) ?? void 0,
              Uy = this._exporter._materialExporter.getTextureInfo(Wy.reflectanceTexture) ?? void 0,
              hy = {
                specularFactor: 1 == Wy.metallicF0Factor ? void 0 : Wy.metallicF0Factor,
                specularTexture: yb,
                specularColorFactor: Wy.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Wy.metallicReflectanceColor.hBy(),
                specularColorTexture: Uy
              };
            this._hasTexturesExtension(Wy) && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[sf] = hy
          } else if (Wy instanceof Ab) {
            bb.extensions = bb.extensions || {};
            const hy = this._exporter._materialExporter.getTextureInfo(Wy.specularWeightTexture) ?? void 0,
              fy = this._exporter._materialExporter.getTextureInfo(Wy.specularColorTexture) ?? void 0,
              Zy = 1 == Wy.specularWeight ? void 0 : Wy.specularWeight,
              cb = Wy.specularColor.equalsFloats(1, 1, 1) ? void 0 : Wy.specularColor.hBy();
            if (!fy && !hy && void 0 === Zy && void 0 === cb) return yb(bb);
            this._wasUsed = !0;
            const Py = {
                specularEdgeColorEnabled: !0
              },
              oy = {
                specularFactor: Zy,
                specularTexture: hy,
                specularColorFactor: cb,
                specularColorTexture: fy,
                extensions: {}
              };
            oy.extensions.EXT_materials_specular_edge_color = Py, (Uy = this._exporter._glTF).extensionsUsed || (Uy.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (hy || fy) && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[sf] = oy
          }
          yb(bb)
        }))
      }
    }
    let Ef = !1;

    function lf() {
      Ef || (Ef = !0, uU.RegisterExtension(sf, (yb => new Sf(yb))))
    }
    lf();
    const mZ = "KHR_materials_transmission";
    class Cf {
      constructor(yb) {
        this.name = mZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Hh) {
          if (this._isExtensionEnabled(Wy)) return Wy.subSurface.refractionIntensityTexture && Wy.subSurface.useGltfStyleTextures && Uy.push(Wy.subSurface.refractionIntensityTexture), Uy
        } else Wy instanceof Ab && (Wy.transmissionWeight > 0 && Wy.transmissionWeightTexture && (Uy.push(Wy.transmissionWeightTexture), Wy.transmissionColorTexture && Uy.push(Wy.transmissionColorTexture)), Wy.subsurfaceWeight > 0 && Wy.subsurfaceWeightTexture && Uy.push(Wy.subsurfaceWeightTexture));
        return Uy
      }
      _isExtensionEnabled(yb) {
        if (yb instanceof Ab && !yb.unlit) return yb.transmissionWeight > 0 || yb.subsurfaceWeight > 0;
        if (yb instanceof Hh && !yb.unlit) {
          const bb = yb.subSurface;
          return bb.isRefractionEnabled && void 0 != bb.refractionIntensity && 0 != bb.refractionIntensity || null != bb.refractionIntensityTexture && bb.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(yb, bb, Wy) {
        if (!this._isExtensionEnabled(Wy)) return bb;
        if (Wy instanceof Hh) {
          this._wasUsed = !0;
          const Uy = Wy.subSurface,
            hy = {
              transmissionFactor: 0 === Uy.refractionIntensity ? void 0 : Uy.refractionIntensity
            };
          if (Uy.refractionIntensityTexture)
            if (Uy.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Wy);
              const yb = this._exporter._materialExporter.getTextureInfo(Uy.refractionIntensityTexture);
              yb && (hy.transmissionTexture = yb)
            } else vb.b.Warn(`${yb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          bb.extensions || (bb.extensions = {}), bb.extensions[mZ] = hy
        } else if (Wy instanceof Ab) {
          this._wasUsed = !0;
          const yb = {
            transmissionFactor: (1 - Wy.transmissionWeight) * Wy.subsurfaceWeight + Wy.transmissionWeight
          };
          if (Wy.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Wy);
            const bb = this._exporter._materialExporter.getTextureInfo(Wy.transmissionWeightTexture);
            bb && (yb.transmissionTexture = bb)
          } else if (Wy.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Wy);
            const bb = this._exporter._materialExporter.getTextureInfo(Wy.subsurfaceWeightTexture);
            bb && (yb.transmissionTexture = bb)
          }
          if (0 == Wy.transmissionDepth && (!Wy.transmissionColor.equals(wy.d.White()) || Wy.transmissionColorTexture) && bb.pbrMetallicRoughness && (bb.pbrMetallicRoughness.baseColorFactor || (bb.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), bb.pbrMetallicRoughness.baseColorFactor[0] *= Wy.transmissionColor.r, bb.pbrMetallicRoughness.baseColorFactor[1] *= Wy.transmissionColor.g, bb.pbrMetallicRoughness.baseColorFactor[2] *= Wy.transmissionColor.b, Wy.transmissionColorTexture && !bb.pbrMetallicRoughness.baseColorTexture)) {
            const yb = this._exporter._materialExporter.getTextureInfo(Wy.transmissionColorTexture);
            yb && (bb.pbrMetallicRoughness.baseColorTexture = yb, this._exporter._materialNeedsUVsSet.add(Wy))
          }
          bb.extensions || (bb.extensions = {}), bb.extensions[mZ] = yb
        }
        return bb
      }
    }
    let Tf = !1;

    function Vf() {
      Tf || (Tf = !0, uU.RegisterExtension(mZ, (yb => new Cf(yb))))
    }
    Vf();
    var Jf = Wy(38752);
    const gZ = "KHR_materials_unlit";
    class Gf {
      constructor() {
        this.name = gZ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          let Uy = !1;
          Wy instanceof Hh ? Uy = Wy.unlit : Wy instanceof Jf.f && (Uy = Wy.disableLighting), Uy && (this._wasUsed = !0, null == bb.extensions && (bb.extensions = {}), bb.extensions[gZ] = {}), yb(bb)
        }))
      }
    }
    let Of = !1;

    function Rf() {
      Of || (Of = !0, uU.RegisterExtension(gZ, (() => new Gf)))
    }
    Rf();
    const vZ = "KHR_materials_volume";
    class iZ {
      constructor(yb) {
        this.name = vZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Hh) {
          if (this._isExtensionEnabled(Wy)) return Wy.subSurface.thicknessTexture && Uy.push(Wy.subSurface.thicknessTexture), Uy
        } else Wy instanceof Ab && (Wy.transmissionWeight > 0 || Wy.subsurfaceWeight > 0) && Wy.geometryThicknessTexture && Uy.push(Wy.geometryThicknessTexture);
        return Uy
      }
      _isExtensionEnabled(yb) {
        if (yb.unlit) return !1;
        const bb = yb.subSurface;
        return !(!bb.isRefractionEnabled && !bb.isTranslucencyEnabled) && (void 0 != bb.maximumThickness && 0 != bb.maximumThickness || void 0 != bb.tintColorAtDistance && bb.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != bb.tintColor && bb.tintColor != wy.d.White() || this._hasTexturesExtension(yb))
      }
      _hasTexturesExtension(yb) {
        return null != yb.subSurface.thicknessTexture
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Hh && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            const yb = Wy.subSurface,
              Uy = {
                thicknessFactor: 0 == yb.maximumThickness ? void 0 : yb.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(yb.thicknessTexture) ?? void 0,
                attenuationDistance: yb.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : yb.tintColorAtDistance,
                attenuationColor: yb.tintColor.equalsFloats(1, 1, 1) ? void 0 : yb.tintColor.hBy()
              };
            this._hasTexturesExtension(Wy) && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions = bb.extensions || {}, bb.extensions[vZ] = Uy
          } else if (Wy instanceof Ab) {
            const yb = Wy.transmissionWeight > 0 && !Wy.geometryThinWalled,
              Uy = Wy.subsurfaceWeight > 0 && !Wy.geometryThinWalled;
            if (yb || Uy) {
              this._wasUsed = !0;
              const hy = Wy.geometryThickness,
                fy = this._exporter._materialExporter.getTextureInfo(Wy.geometryThicknessTexture) ?? void 0;
              let Zy;
              fy && this._exporter._materialNeedsUVsSet.add(Wy);
              const cb = wy.d.White().hBy();
              if (yb && Wy.transmissionDepth > 0) {
                const yb = 1 / Wy.transmissionDepth;
                let bb = new Fy.n(-Math.log(Wy.transmissionColor.r) * yb, -Math.log(Wy.transmissionColor.g) * yb, -Math.log(Wy.transmissionColor.b) * yb);
                const Uy = new Fy.n(Wy.transmissionScatter.r * yb, Wy.transmissionScatter.g * yb, Wy.transmissionScatter.b * yb),
                  hy = bb.subtract(Uy),
                  fy = Math.min(hy.x, hy.y, hy.z);
                fy < 0 && (hy.x = hy.x - fy, hy.y = hy.y - fy, hy.z = hy.z - fy), bb = hy.add(Uy);
                Zy = 1 / Math.max(bb.x, bb.y, bb.z), cb[0] = Math.exp(-bb.x * Zy), cb[1] = Math.exp(-bb.y * Zy), cb[2] = Math.exp(-bb.z * Zy)
              } else Zy = Number.MAX_VALUE, cb[0] = 1, cb[1] = 1, cb[2] = 1;
              let Py = 1;
              const oy = wy.d.White().hBy();
              if (Uy) {
                const yb = Wy.subsurfaceRadius,
                  bb = Wy.subsurfaceRadiusScale,
                  Uy = new Fy.n(bb.r, bb.g, bb.b).multiplyByFloats(yb, yb, yb),
                  hy = new Fy.n(1 / Math.max(Uy.x, 1e-6), 1 / Math.max(Uy.y, 1e-6), 1 / Math.max(Uy.z, 1e-6));
                Py = 1 / Math.max(hy.x, hy.y, hy.z), oy[0] = Math.exp(-hy.x * Py), oy[1] = Math.exp(-hy.y * Py), oy[2] = Math.exp(-hy.z * Py)
              }
              const By = (1 - Wy.transmissionWeight) * Wy.subsurfaceWeight,
                Ky = By + Wy.transmissionWeight,
                ey = 1 / Math.max(Ky, 1e-6),
                qb = Wy.transmissionWeight * ey,
                sy = By * ey,
                Sy = cb.map(((yb, bb) => yb * qb + oy[bb] * sy)),
                Ey = {
                  thicknessFactor: hy,
                  thicknessTexture: fy,
                  attenuationDistance: Zy * qb + Py * sy,
                  attenuationColor: Sy
                };
              bb.extensions = bb.extensions || {}, bb.extensions[vZ] = Ey
            }
          }
          yb(bb)
        }))
      }
    }
    let Mf = !1;

    function Yf() {
      Mf || (Mf = !0, uU.RegisterExtension(vZ, (yb => new iZ(yb))))
    }
    Yf();
    const Xf = "KHR_materials_volume_scatter";
    class nf {
      constructor(yb) {
        this.name = Xf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        return Wy instanceof Ab && (Wy.transmissionWeight > 0 && Wy.transmissionScatterTexture && Uy.push(Wy.transmissionScatterTexture), Wy.subsurfaceWeight > 0 && Wy.subsurfaceColorTexture && Uy.push(Wy.subsurfaceColorTexture)), Uy
      }
      _isExtensionEnabled(yb) {
        if (yb.unlit) return !1;
        const bb = yb.transmissionWeight > 0 && !yb.geometryThinWalled && yb.transmissionDepth > 0 && !yb.transmissionScatter.equals(wy.d.Black()),
          Wy = yb.subsurfaceWeight > 0 && !yb.geometryThinWalled;
        return !(!bb && !Wy)
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          if (Wy instanceof Ab && this._isExtensionEnabled(Wy)) {
            this._wasUsed = !0;
            let yb = Fy.n.Zero(),
              Uy = 0;
            if (Wy.transmissionWeight > 0) {
              yb = function(yb) {
                const bb = new Fy.n(Math.sqrt(1 - yb.x), Math.sqrt(1 - yb.y), Math.sqrt(1 - yb.z)),
                  Wy = new Fy.n(1, 1, 1),
                  Uy = Wy.subtract(bb),
                  hy = Wy.subtract(new Fy.n(.139, .139, .139).multiplyInPlace(bb)),
                  fy = Wy.add(new Fy.n(1.17, 1.17, 1.17).multiplyInPlace(bb));
                return Uy.multiplyInPlace(hy).divideInPlace(fy)
              }(new Fy.n(Wy.transmissionScatter.r, Wy.transmissionScatter.g, Wy.transmissionScatter.b)), Uy = Wy.transmissionScatterAnisotropy
            }
            const hy = Fy.n.Zero();
            let fy = 0;
            Wy.subsurfaceWeight > 0 && (hy.set(Wy.subsurfaceColor.r, Wy.subsurfaceColor.g, Wy.subsurfaceColor.b), fy = Wy.subsurfaceScatterAnisotropy);
            const Zy = (1 - Wy.transmissionWeight) * Wy.subsurfaceWeight,
              cb = Zy + Wy.transmissionWeight,
              Py = 1 / Math.max(cb, 1e-6),
              oy = Wy.transmissionWeight * Py,
              By = Zy * Py,
              Ky = {
                multiscatterColorFactor: yb.multiplyByFloats(oy, oy, oy).addInPlace(hy.multiplyByFloats(By, By, By)).hBy(),
                scatterAnisotropy: Uy * oy + fy * By
              };
            if (Wy.subsurfaceWeight > 0 && Wy.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Wy);
              const yb = this._exporter._materialExporter.getTextureInfo(Wy.subsurfaceColorTexture);
              yb && (Ky.multiscatterColorTexture = yb)
            } else if (Wy.transmissionWeight > 0 && Wy.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Wy);
              const yb = this._exporter._materialExporter.getTextureInfo(Wy.transmissionScatterTexture);
              yb && (Ky.multiscatterColorTexture = yb)
            }
            bb.extensions = bb.extensions || {}, bb.extensions[Xf] = Ky
          }
          yb(bb)
        }))
      }
    }
    let uf = !1;

    function rZ() {
      uf || (uf = !0, uU.RegisterExtension(Xf, (yb => new nf(yb)), 101))
    }
    rZ();
    const Hf = "KHR_materials_diffuse_roughness";
    class aZ {
      constructor(yb) {
        this.name = Hf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(yb, bb, Wy) {
        const Uy = [];
        if (Wy instanceof Jb) {
          if (Wy._baseDiffuseRoughness) return Wy._baseDiffuseRoughnessTexture && Uy.push(Wy._baseDiffuseRoughnessTexture), Uy
        } else if (Wy instanceof Ab && Wy.baseDiffuseRoughness) return Wy.baseDiffuseRoughnessTexture && Uy.push(Wy.baseDiffuseRoughnessTexture), Uy;
        return []
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          let Uy = null,
            hy = null;
          if (Wy instanceof Jb ? (Uy = Wy._baseDiffuseRoughness, hy = Wy._baseDiffuseRoughnessTexture) : Wy instanceof Ab && (Uy = Wy.baseDiffuseRoughness, hy = Wy.baseDiffuseRoughnessTexture), !Uy) return void yb(bb);
          this._wasUsed = !0, bb.extensions = bb.extensions || {};
          const fy = {
            diffuseRoughnessFactor: Uy,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(hy) ?? void 0
          };
          null !== fy.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Wy), bb.extensions[Hf] = fy, yb(bb)
        }))
      }
    }
    let Ff = !1;

    function pf() {
      Ff || (Ff = !0, uU.RegisterExtension(Hf, (yb => new aZ(yb))))
    }
    pf();
    const Lf = "KHR_materials_openpbr";
    class Qf {
      constructor() {
        this.name = Lf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(yb, bb, Wy) {
        return new Promise((yb => {
          Wy instanceof Ab && (this._wasUsed = !0, bb.extensions = bb.extensions || {}, bb.extensions[Lf] = {}), yb(bb)
        }))
      }
    }
    let jZ = !1;

    function Df() {
      jZ || (jZ = !0, uU.RegisterExtension(Lf, (() => new Qf)))
    }
    Df();
    const tZ = "KHR_texture_transform";
    class wf {
      constructor() {
        this.name = tZ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(yb, bb, Wy) {
        if (Wy.kWy() || Gb.k.Warn(`${yb}: "scene" is not defined for Babylon texture ${Wy.name}!`), (0 !== Wy.uAng || 0 !== Wy.vAng) && (Gb.k.Warn(`${yb}: Texture ${Wy.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Wy.uRotationCenter || 0 !== Wy.vRotationCenter)) return;
        const Uy = {};
        let hy = !1;
        if (0 === Wy.uOffset && 0 === Wy.vOffset || (Uy.offset = [Wy.uOffset, Wy.vOffset], hy = !0), 1 === Wy.uScale && 1 === Wy.vScale || (Uy.scale = [Wy.uScale, Wy.vScale], hy = !0), 0 !== Wy.wAng) {
          if (0 !== Wy.uRotationCenter || 0 !== Wy.vRotationCenter) {
            if (Wy.homogeneousRotationInUVTransform && Wy.uScale !== Wy.vScale) return void Gb.k.Warn(`${yb}: Texture ${Wy.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${tZ}.`);
            Gb.k.Warn(`${yb}: Texture ${Wy.name} with non-origin rotation center will be exported using an adjusted offset with ${tZ}.`), Uy.offset = function(yb) {
              const {
                uOffset: bb,
                vOffset: Wy,
                uRotationCenter: Uy,
                vRotationCenter: hy,
                uScale: fy,
                vScale: Zy,
                wAng: cb
              } = yb, Py = Math.cos(cb), oy = Math.sin(cb), By = Uy * fy, Ky = hy * Zy;
              return [bb + (By * (1 - Py) + Ky * oy), Wy + (Ky * (1 - Py) - By * oy)]
            }(Wy)
          }
          Uy.rotation = -Wy.wAng, hy = !0
        }
        0 !== Wy.coordinatesIndex && (Uy.texCoord = Wy.coordinatesIndex, hy = !0), hy && (this._wasUsed = !0, bb.extensions || (bb.extensions = {}), bb.extensions[tZ] = Uy)
      }
    }
    let kZ = !1;

    function Nf() {
      kZ || (kZ = !0, uU.RegisterExtension(tZ, (() => new wf)))
    }
    Nf();
    var zZ = Wy(38511);
    const If = "KHR_texture_basisu";
    class xZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(yb) {
        this.name = If, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      postExportTexture(yb, bb) {
        const Wy = this._exporter._textures[bb.index],
          Uy = Wy.source;
        if (void 0 === Uy) return;
        const hy = this._exporter._images[Uy];
        "image/ktx2" === (hy.mimeType || (0, zZ.m)(hy.uri)) && (Wy.source = void 0, Wy.extensions || (Wy.extensions = {}), Wy.extensions[If] = {
          source: Uy
        }, this._wasUsed = !0)
      }
    }
    let Af = !1;

    function df() {
      Af || (Af = !0, uU.RegisterExtension(If, (yb => new xZ(yb))))
    }
    df();
    const yc = "EXT_texture_webp";
    class bc {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(yb) {
        this.name = yc, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      postExportTexture(yb, bb) {
        const Wy = this._exporter._textures[bb.index],
          Uy = Wy.source;
        if (void 0 === Uy) return;
        const hy = this._exporter._images[Uy];
        "image/webp" === (hy.mimeType || (0, zZ.m)(hy.uri)) && (Wy.source = void 0, Wy.extensions || (Wy.extensions = {}), Wy.extensions[yc] = {
          source: Uy
        }, this._wasUsed = !0)
      }
    }
    let WZ = !1;

    function UZ() {
      WZ || (WZ = !0, uU.RegisterExtension(yc, (yb => new bc(yb))))
    }
    UZ();
    const hZ = "EXT_texture_avif";
    class fZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(yb) {
        this.name = hZ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = yb
      }
      dispose() {}
      postExportTexture(yb, bb) {
        const Wy = this._exporter._textures[bb.index],
          Uy = Wy.source;
        if (void 0 === Uy) return;
        const hy = this._exporter._images[Uy];
        "image/avif" === (hy.mimeType || (0, zZ.m)(hy.uri)) && (Wy.source = void 0, Wy.extensions || (Wy.extensions = {}), Wy.extensions[hZ] = {
          source: Uy
        }, this._wasUsed = !0)
      }
    }
    let ZZ = !1;

    function cc() {
      ZZ || (ZZ = !0, uU.RegisterExtension(hZ, (yb => new fZ(yb))))
    }
    cc();
    class PZ {
      static CreateSTL(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          fy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Py = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const oy = function(yb, bb, Wy) {
            const hy = [3 * yb[Wy], 3 * yb[Wy + 1], 3 * yb[Wy + 2]],
              fy = [new Uy.dU(bb[hy[0]], bb[hy[0] + 2], bb[hy[0] + 1]), new Uy.dU(bb[hy[1]], bb[hy[1] + 2], bb[hy[1] + 1]), new Uy.dU(bb[hy[2]], bb[hy[2] + 2], bb[hy[2] + 1])],
              Zy = fy[0].subtract(fy[1]),
              cb = fy[2].subtract(fy[1]);
            return {
              v: fy,
              n: Uy.dU.Cross(cb, Zy).normalize()
            }
          },
          Ky = function(yb, bb, Wy, Uy) {
            return bb = ey(yb, bb, Wy.x, Uy), bb = ey(yb, bb, Wy.y, Uy), ey(yb, bb, Wy.z, Uy)
          },
          ey = function(yb, bb, Wy, Uy) {
            return yb.setFloat32(bb, Wy, Uy), bb + 4
          },
          sy = function(yb) {
            if (cb) {
              let bb = yb;
              yb instanceof qb.b && (bb = yb.zKy);
              const Wy = bb.getVerticesData(By.g.PositionKind, !0, !0);
              if (!Wy) return [];
              const hy = Uy.dU.Zero();
              let fy;
              for (fy = 0; fy < Wy.length; fy += 3) Uy.dU.TransformCoordinatesFromFloatsToRef(Wy[fy], Wy[fy + 1], Wy[fy + 2], yb.computeWorldMatrix(!0), hy).toArray(Wy, fy);
              return Wy
            }
            return yb.getVerticesData(By.g.PositionKind) || []
          };
        cb && (Zy = !0);
        let Sy = "",
          Ey = 0,
          ly = 0;
        if (hy) {
          for (let Wy = 0; Wy < yb.length; Wy++) {
            const bb = yb[Wy].Mqy();
            Ey += bb ? bb.length / 3 : 0
          }
          const bb = new ArrayBuffer(84 + 50 * Ey);
          Sy = new DataView(bb), ly += 80, Sy.setUint32(ly, Ey, fy), ly += 4
        } else Py || (Sy = "solid stlmesh\r\n");
        for (let Uy = 0; Uy < yb.length; Uy++) {
          const bb = yb[Uy];
          !hy && Py && (Sy += "solid " + bb.name + "\r\n"), !Zy && bb instanceof oU.b && bb.bakeCurrentTransformIntoVertices();
          const Wy = sy(bb),
            cb = bb.Mqy() || [];
          for (let yb = 0; yb < cb.length; yb += 3) {
            const bb = oy(cb, Wy, yb);
            hy ? (ly = Ky(Sy, ly, bb.n, fy), ly = Ky(Sy, ly, bb.v[0], fy), ly = Ky(Sy, ly, bb.v[1], fy), ly = Ky(Sy, ly, bb.v[2], fy), ly += 2) : (Sy += "\tfacet normal " + bb.n.x + " " + bb.n.y + " " + bb.n.z + "\r\n", Sy += "\t\touter loop\r\n", Sy += "\t\t\tvertex " + bb.v[0].x + " " + bb.v[0].y + " " + bb.v[0].z + "\r\n", Sy += "\t\t\tvertex " + bb.v[1].x + " " + bb.v[1].y + " " + bb.v[1].z + "\r\n", Sy += "\t\t\tvertex " + bb.v[2].x + " " + bb.v[2].y + " " + bb.v[2].z + "\r\n", Sy += "\t\tendloop\r\n", Sy += "\tendfacet\r\n")
          }!hy && Py && (Sy += "endsolid " + name + "\r\n")
        }
        if (hy || Py || (Sy += "endsolid stlmesh"), bb) {
          const yb = document.createElement("a"),
            bb = new Blob([Sy], {
              type: "application/octet-stream"
            });
          yb.href = window.URL.createObjectURL(bb), yb.download = Wy + ".stl", yb.click()
        }
        return Sy
      }
    }

    function oZ(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const hy = [];
      for (let fy = 0; fy < yb.length / Wy; fy++) {
        const Zy = yb[fy * Wy] * (Uy ? -1 : 1),
          cb = yb[fy * Wy + 1],
          Py = yb[fy * Wy + 2];
        hy.push(`(${Zy.toPrecision(bb.precision)}, ${cb.toPrecision(bb.precision)}, ${Py.toPrecision(bb.precision)})`)
      }
      return hy.join(", ")
    }

    function BZ(yb, bb) {
      const Wy = [];
      for (let Uy = 0; Uy < yb.length / 2; Uy++) {
        const hy = yb[2 * Uy],
          fy = yb[2 * Uy + 1];
        Wy.push(`(${hy.toPrecision(bb.precision)}, ${(1-fy).toPrecision(bb.precision)})`)
      }
      return Wy.join(", ")
    }

    function KZ(yb, bb, Wy, Uy) {
      const hy = yb.getVerticesData(By.g.PositionKind),
        fy = yb.getVerticesData(By.g.NormalKind);
      if (hy && fy) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Wy}"\n\t\tint[] faceVertexCounts = [${function(yb){const bb=yb.Mqy()?.length?yb.getTotalIndices():yb.getTotalVertices();return Array(bb/3).fill(3).join(", ")}(yb)}]\n\t\tint[] faceVertexIndices = [${function(yb){const bb=yb.Mqy(),Wy=bb?.length??yb.getTotalVertices(),Uy=[];if(null!==bb)for(let hy=0;hy<Wy;hy++)Uy.push(bb[hy]);else for(let hy=0;hy<Wy;hy++)Uy.push(hy);return Uy.join(", ")}(yb)}]\n\t\tnormal3f[] normals = [${oZ(fy,bb,void 0,Uy)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${oZ(hy,bb,void 0,Uy)}]\n        ${function(yb,bb){let Wy="";for(let hy=0;hy<4;hy++){const Uy=hy>0?hy:"",fy=yb.getVerticesData(By.g.UVKind+(Uy?Uy+1:""));fy&&(Wy+=`\n\t\ttexCoord2f[] primvars:st${Uy} = [${BZ(fy,bb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Uy=yb.getVerticesData(By.g.ColorKind);return Uy&&(Wy+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        oZ(Uy, bb, Uy.length / yb.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Wy}(yb,bb)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function eZ(yb, bb, Wy, Uy) {
      return `\n        def "Geometry"\n        {\n        ${KZ(yb,bb,Wy,Uy)}\n        }\n        `
    }

    function qc(yb) {
      let bb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return bb += yb, fflate.strToU8(bb)
    }

    function sZ(yb) {
      const bb = yb.m;
      return `( ${SZ(bb,0)}, ${SZ(bb,4)}, ${SZ(bb,8)}, ${SZ(bb,12)} )`
    }

    function SZ(yb, bb) {
      return `(${yb[bb+0]}, ${yb[bb+1]}, ${yb[bb+2]}, ${yb[bb+3]})`
    }

    function EZ(yb, bb) {
      const Wy = "Object_" + yb.uniqueId,
        Uy = sZ(bb);
      return `def Xform "${Wy}" (\n\tprepend references = @./geometries/Geometry_${yb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Uy}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${yb.material.uniqueId}>\n}\n\n`
    }

    function lZ(yb) {
      switch (yb) {
        case gb.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case gb.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case gb.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function mc(yb) {
      return `(${yb.x}, ${yb.y})`
    }

    function CZ(yb) {
      return `(${yb.r}, ${yb.g}, ${yb.b})`
    }

    function TZ(yb) {
      return "image/jpeg" === yb || "image/png" === yb
    }

    function VZ(yb, bb, Wy, hy, fy, Zy) {
      const cb = yb.getInternalTexture().uniqueId + "_" + yb.invertY,
        oy = yb.mimeType || (0, Py.b)(yb.getInternalTexture()?.url ?? ""),
        By = TZ(oy) ? oy : "image/png",
        Ky = "image/jpeg" === By ? "jpg" : "png";
      fy[cb] = {
        texture: yb,
        mimeType: By,
        ext: Ky
      };
      const ey = yb.coordinatesIndex > 0 ? "st" + yb.coordinatesIndex : "st",
        qb = new Uy.Vector2(yb.uScale, yb.vScale),
        sy = new Uy.Vector2(yb.uOffset, yb.vOffset),
        Sy = yb.wAng,
        Ey = Math.sin(Sy),
        ly = Math.cos(Sy);
      return sy.y = 1 - sy.y - qb.y, sy.x += Ey * qb.x, sy.y += (1 - ly) * qb.y, `\n    def Shader "PrimvarReader_${Wy}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${ey}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Wy}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${bb.uniqueId}/PrimvarReader_${Wy}.outputs:result>\n        float inputs:rotation = ${(Sy*(180/Math.PI)).toFixed(Zy.precision)}\n        float2 inputs:scale = ${mc(qb)}\n        float2 inputs:translation = ${mc(sy)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${yb.uniqueId}_${Wy}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${cb}.${Ky}@\n        float2 inputs:st.connect = </Root/Materials/Material_${bb.uniqueId}/Transform2d_${Wy}.outputs:result>\n        ${hy?"float4 inputs:scale = "+function(yb){return`(${yb.r}, ${yb.g}, ${yb.b}, 1.0)`}(hy):""}\n        token inputs:sourceColorSpace = "${yb.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${lZ(yb.wrapU)}"\n        token inputs:wrapT = "${lZ(yb.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${bb.needAlphaBlending()||bb.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function JZ(yb, bb, Wy) {
      const Uy = "\t\t\t",
        hy = [],
        fy = [],
        {
          diffuseMap: Zy,
          diffuse: cb,
          alphaCutOff: Py,
          emissiveMap: oy,
          emissive: By,
          normalMap: Ky,
          roughnessMap: ey,
          roughnessChannel: qb,
          roughness: sy,
          metalnessMap: Sy,
          metalnessChannel: ly,
          metalness: mb,
          aoMap: Cy,
          aoMapChannel: Ty,
          aoMapIntensity: Vy,
          alphaMap: Jy,
          ior: gb,
          clearCoatEnabled: Gy,
          clearCoat: Oy,
          clearCoatMap: Ry,
          clearCoatRoughness: vb,
          clearCoatRoughnessMap: ib
        } = function(yb) {
          const bb = {
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
          return yb instanceof fU.StandardMaterial ? {
            ...bb,
            diffuseMap: yb.diffuseTexture,
            diffuse: yb.diffuseColor,
            alphaCutOff: yb.alphaCutOff,
            emissiveMap: yb.emissiveTexture,
            emissive: yb.emissiveColor,
            roughness: 1,
            alphaMap: yb.opacityTexture
          } : yb instanceof Jb ? {
            ...bb,
            diffuseMap: yb._albedoTexture,
            diffuse: yb._albedoColor,
            alphaCutOff: yb._alphaCutOff,
            emissiveMap: yb._emissiveTexture,
            emissive: yb._emissiveColor,
            normalMap: yb._bumpTexture,
            roughnessMap: yb._metallicTexture,
            roughnessChannel: yb._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: yb._roughness ?? 1,
            metalnessMap: yb._metallicTexture,
            metalnessChannel: yb._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: yb._metallic ?? 0,
            aoMap: yb._ambientTexture,
            aoMapChannel: yb._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: yb._ambientTextureStrength,
            alphaMap: yb._opacityTexture,
            ior: yb.subSurface.indexOfRefraction,
            clearCoatEnabled: yb.clearCoat.isEnabled,
            clearCoat: yb.clearCoat.intensity,
            clearCoatMap: yb.clearCoat.texture,
            clearCoatRoughness: yb.clearCoat.roughness,
            clearCoatRoughnessMap: yb.clearCoat.useRoughnessFromMainTexture ? yb.clearCoat.texture : yb.clearCoat.textureRoughness
          } : bb
        }(yb);
      return null !== Zy ? (hy.push(`${Uy}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Zy.uniqueId}_diffuse.outputs:rgb>`), yb.needAlphaBlending() ? hy.push(`${Uy}float inputs:opacity.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Zy.uniqueId}_diffuse.outputs:a>`) : yb.needAlphaTesting() && (hy.push(`${Uy}float inputs:opacity.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Zy.uniqueId}_diffuse.outputs:a>`), hy.push(`${Uy}float inputs:opacityThreshold = ${Py}`)), fy.push(VZ(Zy, yb, "diffuse", cb, bb, Wy))) : hy.push(`${Uy}color3f inputs:diffuseColor = ${CZ(cb||Ey.Color3.White())}`), null !== oy ? (hy.push(`${Uy}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${oy.uniqueId}_emissive.outputs:rgb>`), fy.push(VZ(oy, yb, "emissive", By, bb, Wy))) : By && By.toLuminance() > 0 && hy.push(`${Uy}color3f inputs:emissiveColor = ${CZ(By)}`), null !== Ky && (hy.push(`${Uy}normal3f inputs:normal.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Ky.uniqueId}_normal.outputs:rgb>`), fy.push(VZ(Ky, yb, "normal", null, bb, Wy))), null !== Cy && (hy.push(`${Uy}float inputs:occlusion.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Cy.uniqueId}_occlusion.outputs:${Ty}>`), fy.push(VZ(Cy, yb, "occlusion", new Ey.Color3(Vy, Vy, Vy), bb, Wy))), null !== ey ? (hy.push(`${Uy}float inputs:roughness.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${ey.uniqueId}_roughness.outputs:${qb}>`), fy.push(VZ(ey, yb, "roughness", new Ey.Color3(sy, sy, sy), bb, Wy))) : hy.push(`${Uy}float inputs:roughness = ${sy}`), null !== Sy ? (hy.push(`${Uy}float inputs:metallic.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Sy.uniqueId}_metallic.outputs:${ly}>`), fy.push(VZ(Sy, yb, "metallic", new Ey.Color3(mb, mb, mb), bb, Wy))) : hy.push(`${Uy}float inputs:metallic = ${mb}`), null !== Jy ? (hy.push(`${Uy}float inputs:opacity.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Jy.uniqueId}_opacity.outputs:r>`), hy.push(`${Uy}float inputs:opacityThreshold = 0.0001`), fy.push(VZ(Jy, yb, "opacity", null, bb, Wy))) : hy.push(`${Uy}float inputs:opacity = ${yb.alpha}`), Gy && (null !== Ry ? (hy.push(`${Uy}float inputs:clearcoat.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${Ry.uniqueId}_clearcoat.outputs:r>`), fy.push(VZ(Ry, yb, "clearcoat", new Ey.Color3(Oy, Oy, Oy), bb, Wy))) : hy.push(`${Uy}float inputs:clearcoat = ${Oy}`), null !== ib ? (hy.push(`${Uy}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${yb.uniqueId}/Texture_${ib.uniqueId}_clearcoatRoughness.outputs:g>`), fy.push(VZ(ib, yb, "clearcoatRoughness", new Ey.Color3(vb, vb, vb), bb, Wy))) : hy.push(`${Uy}float inputs:clearcoatRoughness = ${vb}`)), hy.push(`${Uy}float inputs:ior = ${gb}`), `\n\tdef Material "Material_${yb.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${hy.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${yb.uniqueId}/PreviewSurface.outputs:surface>\n\n${fy.join("\n")}\n\n\t}\n`
    }

    function gc(yb) {
      yb.computeWorldMatrix(!0);
      const bb = yb.getWorldMatrix().clone(),
        Wy = yb.kWy().useRightHandedSystem;
      let Uy = yb.material?._getEffectiveOrientation(yb) ?? yb.sideOrientation,
        Zy = !Wy,
        cb = yb.parent;
      for (; cb;) {
        if (rU(cb, Wy) && null === cb.parent) {
          Wy || (bb.multiplyToRef(cb.getWorldMatrix().invert(), bb), Uy = Uy === fy.e.ClockWiseSideOrientation ? fy.e.CounterClockWiseSideOrientation : fy.e.ClockWiseSideOrientation), Zy = !1;
          break
        }
        cb = cb.parent
      }
      return bb.determinant() < 0 && hy.Tools.Warn(`Mesh ${yb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: bb,
        windingOrder: Uy === fy.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Zy
      }
    }
    async function GZ(yb, bb, Wy) {
      const fy = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...bb
      };
      "undefined" === typeof fflate && await hy.Tools.LoadScriptAsync(fy.fflateUrl);
      const Zy = {};
      Zy[fy.modelFileName] = null;
      let cb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      cb += function(yb) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===yb.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${yb.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${yb.planeAnchoringAlignment}"`:""}\n            `
      }(fy);
      const Py = {};
      for (const Uy of yb.meshes) {
        if (0 === Uy.getTotalVertices()) continue;
        const yb = Uy,
          bb = yb.geometry,
          oy = yb.material;
        if (!oy || !bb || Wy && !Wy(yb)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(oy.getClassName())) {
          const Wy = "geometries/Geometry_" + bb.uniqueId + ".usda",
            {
              matrix: Uy,
              windingOrder: hy,
              convertToRightHanded: By
            } = gc(yb);
          if (!(Wy in Zy)) {
            const yb = eZ(bb, fy, hy, By);
            Zy[Wy] = qc(yb)
          }
          oy.uniqueId in Py || (Py[oy.uniqueId] = oy), cb += EZ(yb, Uy)
        } else hy.Tools.Warn("USDZExportAsync does not support this material type: " + oy.getClassName())
      }
      yb.activeCamera && fy.exportCamera && (cb += function(yb, bb) {
        const Wy = "Camera_" + yb.uniqueId,
          hy = sZ(Uy.Matrix.RotationY(Math.PI).multiply(yb.getWorldMatrix()));
        if (yb.mode === gb.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${Wy}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${hy}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${yb.minZ.toPrecision(bb.precision)}, ${yb.maxZ.toPrecision(bb.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(yb.orthoLeft||1)+Math.abs(yb.orthoRight||1))).toPrecision(bb.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(yb.orthoTop||1)+Math.abs(yb.orthoBottom||1))).toPrecision(bb.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Uy = yb.xh().getAspectRatio(yb),
            fy = bb.cameraSensorWidth || 35;
          return `def Camera "${Wy}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${hy}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${yb.minZ.toPrecision(bb.precision)}, ${yb.maxZ.toPrecision(bb.precision)})\n\t\t\tfloat focalLength = ${(fy/(2*Math.tan(.5*yb.fov))).toPrecision(bb.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(fy*Uy).toPrecision(bb.precision)}\n\t\t\tfloat verticalAperture = ${(fy/Uy).toPrecision(bb.precision)}            \n\t\t}\n\t\n\t`
        }
      }(yb.activeCamera, fy)), cb += "\n            }\n        }";
      const oy = {};
      cb += function(yb, bb, Wy) {
        const Uy = [];
        for (const hy in yb) {
          const fy = yb[hy];
          Uy.push(JZ(fy, bb, Wy))
        }
        return `\n    def "Materials"\n{\n${Uy.join("")}\n}\n\n`
      }(Py, oy, fy), cb += "\n    }", Zy[fy.modelFileName] = fflate.strToU8(cb);
      for (const Uy in oy) {
        const {
          texture: yb,
          ext: bb,
          mimeType: Wy
        } = oy[Uy], hy = await lW(yb);
        if (hy && TZ(hy.mimeType) && hy.mimeType === Wy) Zy[`textures/Texture_${Uy}.${bb}`] = new Uint8Array(hy.data);
        else {
          const hy = yb.getSize(),
            fy = await (0, Ty.h)(yb),
            cb = await Gy.DumpTools.DumpDataAsync(hy.width, hy.height, fy, Wy, void 0, !1, !0);
          Zy[`textures/Texture_${Uy}.${bb}`] = new Uint8Array(cb).slice()
        }
      }
      let By = 0;
      for (const Uy in Zy) {
        const yb = Zy[Uy];
        if (!yb) continue;
        By += 34 + Uy.length;
        const bb = 63 & By;
        if (4 !== bb) {
          const Wy = new Uint8Array(64 - bb);
          Zy[Uy] = [yb, {
            extra: {
              12345: Wy
            }
          }]
        }
        By = yb.length
      }
      return fflate.zipSync(Zy, {
        level: 0
      })
    }
    var OZ = Wy(39682);
    class RZ {
      static Export(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (!yb || 0 === yb.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Uy = bb;
        bb && 0 !== bb.length || (Uy = yb.animations.map((yb => yb.name)));
        let hy = null;
        for (const oy of Uy) {
          const bb = yb.getAnimationRange(oy);
          bb && (hy = hy ? new OZ.c("animation-range", Math.min(hy.from, bb.from), Math.max(hy.to, bb.to)) : bb)
        }
        if (!hy && (yb.animations.length > 0 && (hy = yb.getAnimationRange(yb.animations[0].name)), !hy)) throw new Error("No animation range found in skeleton");
        const fy = Wy || 1 / (yb.animations[0]?.framePerSecond || 30),
          Zy = this._BuildBoneHierarchy(yb, Uy);
        let cb = 0;
        for (const oy of Zy) oy.positionKeys.length > 0 && (cb = Math.max(cb, oy.positionKeys.length)), oy.rotationKeys.length > 0 && (cb = Math.max(cb, oy.rotationKeys.length));
        0 === cb && (cb = Math.floor((hy.to - hy.from) / fy) + 1);
        let Py = "";
        return Py += "HIERARCHY\n", Py += this._ExportHierarchy(Zy, 0), Py += "MOTION\n", Py += `Frames: ${cb}\n`, Py += `Frame Time: ${fy.toFixed(6)}\n`, Py += this._ExportMotionData(Zy, cb, 0, Uy), Py
      }
      static _BuildBoneHierarchy(yb, bb) {
        const Wy = new Map,
          Uy = [];
        for (const hy of yb.bones) {
          const yb = {
            bone: hy,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Wy.set(hy, yb)
        }
        for (const hy of yb.bones) {
          const yb = Wy.get(hy);
          if (hy.animations.length > 0)
            for (const Wy of hy.animations) bb.includes(Wy.name) && ("position" === Wy.targetProperty ? (yb.hasPositionChannels = !0, yb.positionKeys.push(...Wy.getKeys())) : "rotationQuaternion" === Wy.targetProperty && (yb.hasRotationChannels = !0, yb.rotationKeys.push(...Wy.getKeys())));
          if (hy.getParent()) {
            const bb = Wy.get(hy.getParent());
            bb && bb.children.push(yb)
          } else Uy.push(yb)
        }
        return Uy
      }
      static _ExportHierarchy(yb, bb) {
        let Wy = "";
        const Uy = "    ".repeat(bb);
        for (const hy of yb) {
          const yb = hy.bone;
          if (this._IsEndSite(hy)) {
            Wy += `${Uy}End Site\n`, Wy += `${Uy}{\n`;
            const bb = this._GetBoneOffset(yb);
            Wy += `${Uy}    OFFSET ${bb.x.toFixed(6)} ${bb.y.toFixed(6)} ${bb.z.toFixed(6)}\n`, Wy += `${Uy}}\n`
          } else {
            Wy += `${0===bb?"ROOT":`${Uy}JOINT`} ${yb.name}\n`, Wy += `${Uy}{\n`;
            const fy = this._GetBoneOffset(yb);
            Wy += `${Uy}    OFFSET ${fy.x.toFixed(6)} ${fy.y.toFixed(6)} ${fy.z.toFixed(6)}\n`;
            const Zy = [];
            hy.hasPositionChannels && Zy.push("Xposition", "Yposition", "Zposition"), hy.hasRotationChannels && Zy.push("Zrotation", "Xrotation", "Yrotation"), Zy.length > 0 && (Wy += `${Uy}    CHANNELS ${Zy.length} ${Zy.join(" ")}\n`), hy.children.length > 0 && (Wy += this._ExportHierarchy(hy.children, bb + 1)), Wy += `${Uy}}\n`
          }
        }
        return Wy
      }
      static _IsEndSite(yb) {
        return 0 === yb.children.length
      }
      static _GetBoneOffset(yb) {
        try {
          if (!yb.getParent()) return yb.getRestMatrix().getTranslation();
          return yb.getLocalMatrix().getTranslation()
        } catch (bb) {
          return Uy.dU.Zero()
        }
      }
      static _ExportMotionData(yb, bb, Wy, Uy) {
        let hy = "";
        for (let fy = 0; fy < bb; fy++) {
          const bb = [];
          this._CollectFrameValues(yb, fy + Wy, bb, Uy), hy += bb.map((yb => yb.toFixed(6))).join(" ") + "\n"
        }
        return hy
      }
      static _CollectFrameValues(yb, bb, Wy, Uy) {
        for (const hy of yb)
          if (!this._IsEndSite(hy)) {
            if (hy.hasPositionChannels) {
              const yb = this._GetPositionAtFrameIndex(hy.positionKeys, bb);
              Wy.push(yb.x, yb.y, yb.z)
            }
            if (hy.hasRotationChannels) {
              const yb = this._GetRotationAtFrameIndex(hy.rotationKeys, bb),
                Uy = this._QuaternionToEuler(yb);
              Wy.push(Uy.z, Uy.x, Uy.y)
            }
            hy.children.length > 0 && this._CollectFrameValues(hy.children, bb, Wy, Uy)
          }
      }
      static _GetPositionAtFrameIndex(yb, bb) {
        if (0 === yb.length) return Uy.dU.Zero();
        return yb[Math.max(0, Math.min(bb, yb.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(yb, bb) {
        if (0 === yb.length) return Uy.Quaternion.Identity();
        return yb[Math.max(0, Math.min(bb, yb.length - 1))].value.clone()
      }
      static _QuaternionToEuler(yb) {
        const bb = new Uy.Matrix;
        yb.toRotationMatrix(bb);
        const Wy = bb.m;
        let fy, Zy, cb;
        const Py = Math.sqrt(Wy[0] * Wy[0] + Wy[1] * Wy[1]);
        return Py > nW.e ? (fy = Math.atan2(Wy[6], Wy[10]), Zy = Math.atan2(-Wy[2], Py), cb = Math.atan2(Wy[1], Wy[0])) : (fy = Math.atan2(-Wy[9], Wy[5]), Zy = Math.atan2(-Wy[2], Py), cb = 0), new Uy.dU(hy.Tools.ToDegrees(fy), hy.Tools.ToDegrees(Zy), hy.Tools.ToDegrees(cb))
      }
    }

    function vc(yb) {
      return "string" === typeof yb?.name
    }
    const ic = Symbol("__xml:meta$__"),
      MZ = Symbol("__xml:name$__");

    function YZ(yb, bb) {
      Object.prototype.hasOwnProperty.call(yb.metadata, ic) || (yb.metadata[ic] = []), yb.metadata[ic].push(bb)
    }

    function XZ(yb) {
      return (bb, Wy) => {
        bb[MZ] = yb
      }
    }

    function nZ() {
      return (yb, bb) => YZ(bb, {
        kind: "none",
        prop: String(bb.name),
        ignore: !0
      })
    }

    function uZ(yb) {
      return (bb, Wy) => YZ(Wy, {
        kind: "attr",
        prop: String(Wy.name),
        ...yb
      })
    }

    function rc(yb) {
      return (bb, Wy) => YZ(Wy, {
        kind: "elem",
        prop: String(Wy.name),
        ...yb
      })
    }

    function HZ(yb) {
      const bb = "function" === typeof yb ? yb : yb?.constructor,
        Wy = bb?.[Symbol.metadata];
      if (!Wy) return [];
      const Uy = [];
      let hy = Wy;
      for (; hy;) Object.prototype.hasOwnProperty.call(hy, ic) && Uy.push(...hy[ic]), hy = Object.getPrototypeOf(hy);
      return Uy
    }

    function ac(yb) {
      const bb = yb?.constructor?.[MZ];
      return bb || void 0
    }

    function FZ(yb) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(yb)
    }

    function pZ(yb) {
      if (vc(yb)) return yb;
      const bb = (yb ?? "").trim();
      if (!bb) return {
        name: ""
      };
      const Wy = bb.indexOf(":");
      if (-1 === Wy) return {
        name: bb
      };
      if (-1 !== bb.indexOf(":", Wy + 1)) return {
        name: bb
      };
      const Uy = bb.slice(0, Wy),
        hy = bb.slice(Wy + 1);
      return FZ(Uy) && FZ(hy) ? {
        ns: Uy,
        name: hy
      } : {
        name: bb
      }
    }

    function LZ(yb, bb) {
      return bb ? `${bb}:${yb}` : yb
    }
    const QZ = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      jc = Object.freeze({
        number: QZ
      });

    function DZ(yb) {
      const bb = yb?.eps ?? QZ.eps;
      return {
        eps: bb,
        maxDecimalsCap: yb?.maxDecimalsCap ?? QZ.maxDecimalsCap,
        trimTrailingZeros: yb?.trimTrailingZeros ?? QZ.trimTrailingZeros,
        fixedDecimals: yb?.fixedDecimals,
        allowScientific: yb?.allowScientific ?? QZ.allowScientific,
        snapNearZero: yb?.snapNearZero ?? QZ.snapNearZero,
        zeroThreshold: yb?.zeroThreshold ?? bb,
        perAttributeEps: yb?.perAttributeEps
      }
    }

    function tc(yb) {
      return {
        number: DZ(yb?.number)
      }
    }
    class wZ {
      constructor(yb) {
        if (this.o = yb, this._o = yb.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(yb) {
        if (!Number.isFinite(yb)) throw new Error(`Cannot format non-finite number: ${yb}`);
        const bb = this._o,
          Wy = this._clampInt(bb.maxDecimalsCap ?? 15, 0, 20),
          Uy = bb.trimTrailingZeros ?? !0,
          hy = bb.snapNearZero ?? !0,
          fy = bb.zeroThreshold ?? bb.eps,
          Zy = 1 / bb.eps;
        let cb, Py = Math.round(yb * Zy) / Zy;
        if (Object.is(Py, -0) && (Py = 0), hy && Math.abs(Py) <= fy && (Py = 0), cb = void 0 !== bb.fixedDecimals ? this._clampInt(bb.fixedDecimals, 0, Wy) : this._clampInt(Math.ceil(-Math.log10(bb.eps)), 0, Wy), bb.allowScientific, 0 === cb) return String(Math.trunc(Py));
        let oy = Py.toFixed(cb);
        if (Uy && void 0 === bb.fixedDecimals && (oy = oy.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(oy)) throw new Error(`Scientific notation not allowed in XML output: ${oy}`);
        return oy
      }
      _clampInt(yb, bb, Wy) {
        return Number.isFinite(yb) ? (yb = Math.trunc(yb), Math.max(bb, Math.min(Wy, yb))) : bb
      }
    }

    function kc(yb) {
      return yb instanceof Date
    }

    function NZ(yb) {
      return "string" === typeof yb
    }

    function zc(yb) {
      return "string" === typeof yb || "number" === typeof yb || "boolean" === typeof yb || "bigint" === typeof yb || kc(yb)
    }

    function IZ(yb) {
      return "number" === typeof yb || "boolean" === typeof yb || "bigint" === typeof yb || kc(yb)
    }
    class xc {
      constructor(yb, bb) {
        this._ns = new Map, this._prefixCount = 0, this._builder = yb, this._format = tc(bb), this._nFmt = new wZ(this._format)
      }
      withNamespace() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        for (const Uy of bb) this._assignNamespace(Uy);
        return this
      }
      serialize(yb, bb) {
        if (!(bb = bb ?? ac(yb))) throw new Error("can not find name for given object");
        const Wy = pZ(bb);
        Wy.ns && this._assignNamespace(Wy.ns, "xmlns"), this._gatherNamespaces(yb, new WeakSet);
        const Uy = this._builder.ele(null, Wy.name);
        for (const [hy, fy] of Array.from(this._ns.entries())) Uy.att("xmlns", fy, hy);
        this._writeObjectContent(Uy, yb, (new WeakSet).add(yb)), this._builder.end()
      }
      _writeObject(yb, bb, Wy) {
        if (Wy.has(bb)) return;
        if (Wy.add(bb), Array.isArray(bb)) {
          for (const Uy of bb) IZ(Uy) || (NZ(Uy) ? this._builder.text(Uy) : this._writeObject(yb, Uy, Wy));
          return
        }
        const Uy = ac(bb);
        if (!Uy) return;
        const hy = pZ(Uy),
          fy = this._getPrefix(hy),
          Zy = LZ(hy.name, fy);
        yb.ele(null, Zy), this._writeObjectContent(yb, bb, Wy), this._builder.end()
      }
      _getPrefix(yb) {
        if (yb.ns) {
          const bb = this._ns.get(yb.ns.toLowerCase());
          if ("xmlns" !== bb) return bb
        }
      }
      _writeObjectContent(yb, bb, Wy) {
        const Uy = HZ(bb) ?? [],
          hy = new Map;
        for (const Zy of Uy) {
          const yb = hy.get(Zy.prop) ?? [];
          yb.push(Zy), hy.set(Zy.prop, yb)
        }
        const fy = Object.keys(bb).sort(((yb, bb) => {
          const Wy = (hy.get(yb) ?? []).some((yb => "attr" === yb.kind));
          return Wy === (hy.get(bb) ?? []).some((yb => "attr" === yb.kind)) ? 0 : Wy ? -1 : 1
        }));
        for (const Zy of fy) {
          const Uy = bb[Zy];
          if (null === Uy || void 0 === Uy) continue;
          const fy = hy.get(Zy);
          if (fy) {
            if (fy.some((yb => !0 === yb.ignore || "none" === yb.kind))) continue;
            for (const bb of fy) {
              const Wy = bb.name ?? bb.prop.toLowerCase();
              if (Wy) switch (bb.kind) {
                case "attr": {
                  let hy = null;
                  if ("number" === typeof Uy && this._nFmt && (hy = this._nFmt.toString(Uy)), bb.formatter) {
                    hy = new bb.formatter(this._format).toString(Uy)
                  }
                  if (hy = hy ?? Uy.toString(), hy) {
                    const bb = pZ(Wy),
                      Uy = this._getPrefix(bb),
                      fy = LZ(bb.name, Uy);
                    yb.att(null, fy, hy)
                  }
                  break
                }
              }
            }
          } else IZ(Uy) || (NZ(Uy) ? this._builder.text(Uy) : this._writeObject(yb, Uy, Wy))
        }
      }
      _gatherNamespaces(yb, bb) {
        if (bb.has(yb)) return;
        if (bb.add(yb), Array.isArray(yb)) {
          for (const Wy of yb) zc(Wy) || this._gatherNamespaces(Wy, bb);
          return
        }
        const Wy = ac(yb);
        Wy && this._assignNamespace(Wy);
        const Uy = HZ(yb) ?? [],
          hy = new Map;
        for (const Zy of Uy) {
          const yb = hy.get(Zy.prop) ?? [];
          yb.push(Zy), hy.set(Zy.prop, yb)
        }
        const fy = [];
        for (const Zy of Object.keys(yb)) {
          const bb = yb[Zy];
          if (null === bb || void 0 === bb) continue;
          const Wy = hy.get(Zy);
          if (Wy) {
            if (Wy.some((yb => !0 === yb.ignore || "none" === yb.kind))) continue;
            for (const yb of Wy) yb.name && this._assignNamespace(yb.name)
          }
          fy.push(bb)
        }
        for (const Zy of fy) zc(Zy) || this._gatherNamespaces(Zy, bb)
      }
      _assignNamespace(yb, bb) {
        const Wy = pZ(yb);
        if (Wy?.ns) {
          const yb = Wy.ns.toLowerCase();
          this._ns.get(yb) || this._ns.set(yb, bb ?? this._buildNsPrefix(yb))
        } else if ("xmlns" === bb) {
          const yb = Wy.name.toLowerCase();
          this._ns.get(yb) || this._ns.set(yb, bb ?? this._buildNsPrefix(yb))
        }
      }
      _buildNsPrefix(yb) {
        let bb, Wy = !1;
        do {
          bb = "ns" + this._prefixCount++;
          for (const yb of Array.from(this._ns.values()))
            if (yb === bb) {
              Wy = !0;
              break
            }
        } while (Wy);
        return bb
      }
    }
    class AZ {}
    var dZ;
    AZ.OpenTag = "<", AZ.CloseTag = ">", AZ.Slash = "/", AZ.Question = "?", AZ.Quote = '"', AZ.Equal = "=", AZ.Space = " ", AZ.Semicolon = ":", AZ.Dec = "<?xml", AZ.Xml = "xml", AZ.Xmlns = "xmlns", AZ.Xsi = "xsi", AZ.VersionKeyword = "version", AZ.EncodingKeyword = "encoding", AZ.StandaloneKeyword = "standalone",
      function(yb) {
        yb[yb.Declaration = 0] = "Declaration", yb[yb.Tag = 1] = "Tag", yb[yb.Attribute = 2] = "Attribute", yb[yb.Text = 3] = "Text"
      }(dZ || (dZ = {}));
    class yP {
      constructor(yb) {
        this._ctxStack = [], this._d = 0, this._w = yb
      }
      dec(yb, bb, Wy) {
        return this._w.write(AZ.Dec), this._writeAttStr(AZ.VersionKeyword, yb), bb && this._writeAttStr(AZ.EncodingKeyword, bb), void 0 !== Wy && this._writeAttStr(AZ.StandaloneKeyword, Wy ? "yes" : "no"), this._w.write(AZ.Question, AZ.CloseTag), this
      }
      att(yb, bb, Wy) {
        const Uy = this._peekContext();
        if (!Uy) throw new Error("att() without open element");
        if (Uy.closed) throw new Error(`att() after start tag closed for <${Uy.name}>`);
        if (this._isXmlnsDecl(yb, bb)) {
          if (bb === AZ.Xmlns) Uy.defaultNs = Wy, this._registerNamespace(Uy, "", Wy), this._writeAttStr(AZ.Xmlns, Wy);
          else if (yb) this._registerNamespace(Uy, bb, Wy), this._writeAttStr(`${yb}:${bb}`, Wy);
          else {
            const yb = bb.slice(6);
            this._registerNamespace(Uy, yb, Wy), this._writeAttStr(bb, Wy)
          }
          return Uy.lastToken = dZ.Attribute, this
        }
        let hy = bb;
        if (yb) {
          hy = `${this._ensurePrefixDeclared(Uy,yb)}:${bb}`
        }
        return Uy.lastToken = dZ.Attribute, this._writeAttStr(hy, Wy), this
      }
      ele(yb, bb) {
        const Wy = this._peekContext();
        Wy && this._closeOpenTagIfNeeded(Wy);
        let Uy = bb;
        if (yb) {
          Uy = `${this._lookupPrefix(yb)??yb}:${bb}`
        }
        return this._pushContext(Uy, ++this._d), this._w.write(AZ.OpenTag, Uy), this
      }
      text(yb) {
        const bb = this._peekContext();
        if (!bb) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(bb), bb.lastToken = dZ.Text, this._w.write(this._escText(yb)), this
      }
      end() {
        const yb = this._popContext();
        return yb && (this._d--, yb.closed ? this._w.write(AZ.OpenTag, AZ.Slash, yb.name, AZ.CloseTag) : this._w.write(AZ.Slash, AZ.CloseTag)), this
      }
      _pushContext(yb, bb) {
        const Wy = new yP.Context(yb, bb);
        return this._ctxStack.push(Wy), Wy
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
      _writeAttStr(yb, bb) {
        this._w.write(AZ.Space, yb, AZ.Equal, AZ.Quote, this._escAttr(bb), AZ.Quote)
      }
      _lookupPrefix(yb) {
        let bb = this._ctxStack.length - 1;
        if (bb >= 0)
          do {
            const Wy = this._ctxStack[bb--],
              Uy = Wy.ns2prefix?.get(yb);
            if (Uy) return Uy
          } while (bb >= 0)
      }
      _escText(yb) {
        return yb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(yb) {
        return this._escText(yb).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(yb, bb) {
        if (yb) return yb === AZ.Xmlns;
        const Wy = bb.length,
          Uy = AZ.Xmlns.length;
        return Wy >= Uy && (bb.startsWith(AZ.Xmlns) && (bb.length == Uy || bb[Uy] == AZ.Semicolon))
      }
      _registerNamespace(yb, bb, Wy) {
        if (bb === AZ.Xml || bb === AZ.Xmlns) throw new Error(`reserved prefix '${bb}'`);
        const Uy = yb.prefix2ns.get(bb);
        if (Uy && Uy !== Wy) throw new Error(`prefix '${bb}' already bound to a different namespace`);
        yb.ns2prefix.get(Wy) || yb.ns2prefix.set(Wy, bb), yb.prefix2ns.set(bb, Wy)
      }
      _allocPrefix(yb) {
        let bb = 1;
        for (;;) {
          const Wy = "ns" + bb++;
          if (!yb.prefix2ns.has(Wy)) return Wy
        }
      }
      _ensurePrefixDeclared(yb, bb) {
        const Wy = this._lookupPrefix(bb);
        if (Wy) return Wy;
        if (yb.closed) throw new Error(`can not declare namespace after start tag closed for <${yb.name}>`);
        const Uy = this._allocPrefix(yb);
        return this._writeAttStr(`${AZ.Xmlns}:${Uy}`, bb), this._registerNamespace(yb, Uy, bb), Uy
      }
      _closeOpenTagIfNeeded(yb) {
        yb.closed || (this._w.write(AZ.CloseTag), yb.closed = !0)
      }
    }
    yP.Context = class {
      constructor(yb, bb) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = yb, this.depth = bb
      }
    };
    class bP {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        if (0 === bb.length) return this;
        const Uy = bb.join("");
        return this._chunks.push(Uy), this.count += Uy.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Wc {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = yb, this._opts = bb, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        if (0 === bb.length) return this;
        const Uy = bb.join("");
        if (0 === Uy.length) return this;
        this._pending += Uy, this._pendingChars += Uy.length;
        const hy = this._opts.flushChars ?? 65536;
        return this._pendingChars >= hy && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const yb = this._encoder.encode(this._pending);
        return this._sink.push(yb), this.count += yb.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Uc = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      hc = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var fc, Zc;
    ! function(yb) {
      yb.micron = "micron", yb.millimeter = "millimeter", yb.centimeter = "centimeter", yb.inch = "inch", yb.foot = "foot", yb.meter = "meter"
    }(fc || (fc = {})),
    function(yb) {
      yb.model = "model", yb.solidsupport = "solidsupport", yb.support = "support", yb.surface = "surface", yb.other = "other"
    }(Zc || (Zc = {}));
    const cP = "http://schemas.openxmlformats.org/package/2006/content-types",
      Pc = "http://schemas.openxmlformats.org/package/2006/relationships";
    var oc;
    ! function(yb) {
      yb.Relationships = "application/vnd.openxmlformats-package.relationships+xml", yb.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", yb.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", yb.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", yb.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", yb.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", yb.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", yb.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", yb.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", yb.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", yb.Png = "image/png", yb.Jpeg = "image/jpeg", yb.Tiff = "image/tiff", yb.Xml = "application/xml"
    }(oc || (oc = {}));
    const Bc = "_rels/",
      Kc = "3D/",
      ec = "3dmodel.model",
      qP = ".rels",
      sc = "[Content_Types].xml";
    class Sc {
      static IsKnown(yb) {
        return Sc.Known.has(yb)
      }
      static IsThreeDimModel(yb) {
        return yb === Sc.ThreeDimModel
      }
    }
    Sc.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Sc.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Sc.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Sc.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Sc.Known = new Set([Sc.ThreeDimModel, Sc.Thumbnail, Sc.PrintTicket, Sc.MustPreserve]);
    let Ec = (() => {
        let yb, bb, Wy = [XZ({
            ns: cP,
            name: "Types"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfContentTypes"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      lc = (() => {
        let yb, bb, Wy, Uy, hy = [XZ({
            ns: cP,
            name: "Default"
          })],
          fy = [],
          Zy = [],
          cb = [],
          Py = [],
          oy = [];
        bb = class {
          constructor(yb, bb) {
            this.ext = (0, Oy.l)(this, Zy, void 0), this.ct = ((0, Oy.l)(this, cb), (0, Oy.l)(this, Py, void 0)), (0, Oy.l)(this, oy), this.ext = yb, this.ct = bb
          }
        };
        return (0, Oy.p)(bb, "ThreeMfContentType"), (() => {
          const By = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: {
              ns: cP,
              name: "Extension"
            }
          })], Uy = [uZ({
            name: {
              ns: cP,
              name: "ContentType"
            }
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: yb => "ext" in yb,
              get: yb => yb.ext,
              set: (yb, bb) => {
                yb.ext = bb
              }
            },
            metadata: By
          }, Zy, cb), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: yb => "ct" in yb,
              get: yb => yb.ct,
              set: (yb, bb) => {
                yb.ct = bb
              }
            },
            metadata: By
          }, Py, oy), (0, Oy.j)(null, yb = {
            value: bb
          }, hy, {
            kind: "class",
            name: bb.name,
            metadata: By
          }, null, fy), bb = yb.value, By && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: By
          }), (0, Oy.l)(bb, fy)
        })(), bb
      })(),
      mP = (() => {
        let yb, bb, Wy = [XZ({
            ns: Pc,
            name: "Relationships"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfRelationships"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      Cc = (() => {
        let yb, bb, Wy, Uy, hy, fy = [XZ({
            ns: Pc,
            name: "Relationship"
          })],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        bb = class {
          constructor(yb, bb, Wy) {
            this.id = (0, Oy.l)(this, cb, void 0), this.type = ((0, Oy.l)(this, Py), (0, Oy.l)(this, oy, void 0)), this.target = ((0, Oy.l)(this, By), (0, Oy.l)(this, Ky, void 0)), (0, Oy.l)(this, ey), this.id = yb, this.type = bb, this.target = Wy
          }
        };
        return (0, Oy.p)(bb, "ThreeMfRelationship"), (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "Id"
          })], Uy = [uZ({
            name: "Type"
          })], hy = [uZ({
            name: "Target"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: yb => "id" in yb,
              get: yb => yb.id,
              set: (yb, bb) => {
                yb.id = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: yb => "type" in yb,
              get: yb => yb.type,
              set: (yb, bb) => {
                yb.type = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: yb => "target" in yb,
              get: yb => yb.target,
              set: (yb, bb) => {
                yb.target = bb
              }
            },
            metadata: qb
          }, Ky, ey), (0, Oy.j)(null, yb = {
            value: bb
          }, fy, {
            kind: "class",
            name: bb.name,
            metadata: qb
          }, null, Zy), bb = yb.value, qb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          }), (0, Oy.l)(bb, Zy)
        })(), bb
      })();
    class Tc {
      constructor(yb, bb, Wy) {
        this.contentTypes = yb, this.relationships = bb, this.model = Wy
      }
    }
    class Vc {
      static Zero() {
        return new Vc([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(yb) {
        this.values = yb
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Jc {
      constructor(yb) {
        this.o = yb, this._f = new wZ(yb)
      }
      toString(yb) {
        return yb.values.map((yb => this._f.toString(yb))).join(" ")
      }
    }
    let gP = (() => {
        let yb, bb, Wy, Uy, hy, fy = [XZ({
            ns: Uc,
            name: "model"
          })],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        bb = class {
          constructor() {
            this.unit = (0, Oy.l)(this, cb, fc.millimeter), this.requiredextensions = ((0, Oy.l)(this, Py), (0, Oy.l)(this, oy, void 0)), this.recommendedextensions = ((0, Oy.l)(this, By), (0, Oy.l)(this, Ky, void 0)), this.metadata = (0, Oy.l)(this, ey)
          }
        };
        return (0, Oy.p)(bb, "ThreeMfModel"), (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "unit"
          })], Uy = [uZ({
            name: "requiredextensions"
          })], hy = [uZ({
            name: "recommendedextensions"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: yb => "unit" in yb,
              get: yb => yb.unit,
              set: (yb, bb) => {
                yb.unit = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: yb => "requiredextensions" in yb,
              get: yb => yb.requiredextensions,
              set: (yb, bb) => {
                yb.requiredextensions = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: yb => "recommendedextensions" in yb,
              get: yb => yb.recommendedextensions,
              set: (yb, bb) => {
                yb.recommendedextensions = bb
              }
            },
            metadata: qb
          }, Ky, ey), (0, Oy.j)(null, yb = {
            value: bb
          }, fy, {
            kind: "class",
            name: bb.name,
            metadata: qb
          }, null, Zy), bb = yb.value, qb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          })
        })(), bb.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Oy.l)(bb, Zy), bb
      })(),
      Gc = (() => {
        let yb, bb, Wy, Uy, hy, fy = [XZ({
            ns: Uc,
            name: "meta"
          })],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        bb = class {
          constructor(yb, bb, Wy, Uy) {
            this.name = (0, Oy.l)(this, cb, void 0), this.preserve = ((0, Oy.l)(this, Py), (0, Oy.l)(this, oy, void 0)), this.type = ((0, Oy.l)(this, By), (0, Oy.l)(this, Ky, void 0)), this.value = (0, Oy.l)(this, ey), this.name = yb, this.value = bb, this.preserve = Wy, this.type = Uy
          }
        };
        return (0, Oy.p)(bb, "ThreeMfMeta"), (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "name"
          })], Uy = [uZ({
            name: "preserve"
          })], hy = [uZ({
            name: "type"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: yb => "name" in yb,
              get: yb => yb.name,
              set: (yb, bb) => {
                yb.name = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: yb => "preserve" in yb,
              get: yb => yb.preserve,
              set: (yb, bb) => {
                yb.preserve = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: yb => "type" in yb,
              get: yb => yb.type,
              set: (yb, bb) => {
                yb.type = bb
              }
            },
            metadata: qb
          }, Ky, ey), (0, Oy.j)(null, yb = {
            value: bb
          }, fy, {
            kind: "class",
            name: bb.name,
            metadata: qb
          }, null, Zy), bb = yb.value, qb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          }), (0, Oy.l)(bb, Zy)
        })(), bb
      })(),
      Oc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "metadatagroup"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfMetadataGroup"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      Rc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "resources"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfResources"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      vP = (() => {
        let yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy = [XZ({
            ns: Uc,
            name: "object"
          })],
          By = [],
          Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [],
          ly = [],
          mb = [],
          Cy = [],
          Ty = [],
          Vy = [],
          Jy = [],
          gb = [],
          Gy = [];
        bb = class {
          constructor(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zc.model;
            this.id = (0, Oy.l)(this, Ky, void 0), this.type = ((0, Oy.l)(this, ey), (0, Oy.l)(this, qb, void 0)), this.thumbnail = ((0, Oy.l)(this, sy), (0, Oy.l)(this, Sy, void 0)), this.partnumber = ((0, Oy.l)(this, Ey), (0, Oy.l)(this, ly, void 0)), this.name = ((0, Oy.l)(this, mb), (0, Oy.l)(this, Cy, void 0)), this.pid = ((0, Oy.l)(this, Ty), (0, Oy.l)(this, Vy, void 0)), this.pindex = ((0, Oy.l)(this, Jy), (0, Oy.l)(this, gb, void 0)), this.metadatagroup = (0, Oy.l)(this, Gy), this.id = yb, this.type = bb
          }
        };
        return (0, Oy.p)(bb, "ThreeMfObject"), (() => {
          const Ry = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "id"
          })], Uy = [uZ({
            name: "type"
          })], hy = [uZ({
            name: "thumbnail"
          })], fy = [uZ({
            name: "partnumber"
          })], Zy = [uZ({
            name: "name"
          })], cb = [uZ({
            name: "pid"
          })], Py = [uZ({
            name: "pindex"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: yb => "id" in yb,
              get: yb => yb.id,
              set: (yb, bb) => {
                yb.id = bb
              }
            },
            metadata: Ry
          }, Ky, ey), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: yb => "type" in yb,
              get: yb => yb.type,
              set: (yb, bb) => {
                yb.type = bb
              }
            },
            metadata: Ry
          }, qb, sy), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: yb => "thumbnail" in yb,
              get: yb => yb.thumbnail,
              set: (yb, bb) => {
                yb.thumbnail = bb
              }
            },
            metadata: Ry
          }, Sy, Ey), (0, Oy.j)(null, null, fy, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: yb => "partnumber" in yb,
              get: yb => yb.partnumber,
              set: (yb, bb) => {
                yb.partnumber = bb
              }
            },
            metadata: Ry
          }, ly, mb), (0, Oy.j)(null, null, Zy, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: yb => "name" in yb,
              get: yb => yb.name,
              set: (yb, bb) => {
                yb.name = bb
              }
            },
            metadata: Ry
          }, Cy, Ty), (0, Oy.j)(null, null, cb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: yb => "pid" in yb,
              get: yb => yb.pid,
              set: (yb, bb) => {
                yb.pid = bb
              }
            },
            metadata: Ry
          }, Vy, Jy), (0, Oy.j)(null, null, Py, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: yb => "pindex" in yb,
              get: yb => yb.pindex,
              set: (yb, bb) => {
                yb.pindex = bb
              }
            },
            metadata: Ry
          }, gb, Gy), (0, Oy.j)(null, yb = {
            value: bb
          }, oy, {
            kind: "class",
            name: bb.name,
            metadata: Ry
          }, null, By), bb = yb.value, Ry && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ry
          }), (0, Oy.l)(bb, By)
        })(), bb
      })(),
      iP = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "mesh"
          })],
          Uy = [];
        bb = class {
          constructor(yb, bb) {
            this.vertices = yb ?? new Mc, this.triangles = bb ?? new Xc
          }
        };
        return (0, Oy.p)(bb, "ThreeMfMesh"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      Mc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "vertices"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfVertices"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      Yc = (() => {
        let yb, bb, Wy, Uy, hy, fy = [XZ({
            ns: Uc,
            name: "vertex"
          })],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        bb = class {
          constructor() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Oy.l)(this, cb, void 0), this.y = ((0, Oy.l)(this, Py), (0, Oy.l)(this, oy, void 0)), this.z = ((0, Oy.l)(this, By), (0, Oy.l)(this, Ky, void 0)), (0, Oy.l)(this, ey), this.x = yb, this.y = bb, this.z = Wy
          }
        };
        return (0, Oy.p)(bb, "ThreeMfVertex"), (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "x"
          })], Uy = [uZ({
            name: "y"
          })], hy = [uZ({
            name: "z"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: yb => "x" in yb,
              get: yb => yb.x,
              set: (yb, bb) => {
                yb.x = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: yb => "y" in yb,
              get: yb => yb.y,
              set: (yb, bb) => {
                yb.y = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: yb => "z" in yb,
              get: yb => yb.z,
              set: (yb, bb) => {
                yb.z = bb
              }
            },
            metadata: qb
          }, Ky, ey), (0, Oy.j)(null, yb = {
            value: bb
          }, fy, {
            kind: "class",
            name: bb.name,
            metadata: qb
          }, null, Zy), bb = yb.value, qb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          }), (0, Oy.l)(bb, Zy)
        })(), bb
      })(),
      Xc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "triangles"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfTriangles"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      nc = (() => {
        let yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy = [XZ({
            ns: Uc,
            name: "triangle"
          })],
          By = [],
          Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [],
          ly = [],
          mb = [],
          Cy = [],
          Ty = [],
          Vy = [],
          Jy = [],
          gb = [],
          Gy = [];
        bb = class {
          constructor(yb, bb, Wy) {
            this.v1 = (0, Oy.l)(this, Ky, void 0), this.v2 = ((0, Oy.l)(this, ey), (0, Oy.l)(this, qb, void 0)), this.v3 = ((0, Oy.l)(this, sy), (0, Oy.l)(this, Sy, void 0)), this.p1 = ((0, Oy.l)(this, Ey), (0, Oy.l)(this, ly, void 0)), this.p2 = ((0, Oy.l)(this, mb), (0, Oy.l)(this, Cy, void 0)), this.p3 = ((0, Oy.l)(this, Ty), (0, Oy.l)(this, Vy, void 0)), this.pid = ((0, Oy.l)(this, Jy), (0, Oy.l)(this, gb, void 0)), (0, Oy.l)(this, Gy), this.v1 = yb, this.v2 = bb, this.v3 = Wy
          }
        };
        return (0, Oy.p)(bb, "ThreeMfTriangle"), (() => {
          const Ry = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "v1"
          })], Uy = [uZ({
            name: "v2"
          })], hy = [uZ({
            name: "v3"
          })], fy = [uZ({
            name: "p1"
          })], Zy = [uZ({
            name: "p2"
          })], cb = [uZ({
            name: "p3"
          })], Py = [uZ({
            name: "pid"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: yb => "v1" in yb,
              get: yb => yb.v1,
              set: (yb, bb) => {
                yb.v1 = bb
              }
            },
            metadata: Ry
          }, Ky, ey), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: yb => "v2" in yb,
              get: yb => yb.v2,
              set: (yb, bb) => {
                yb.v2 = bb
              }
            },
            metadata: Ry
          }, qb, sy), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: yb => "v3" in yb,
              get: yb => yb.v3,
              set: (yb, bb) => {
                yb.v3 = bb
              }
            },
            metadata: Ry
          }, Sy, Ey), (0, Oy.j)(null, null, fy, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: yb => "p1" in yb,
              get: yb => yb.p1,
              set: (yb, bb) => {
                yb.p1 = bb
              }
            },
            metadata: Ry
          }, ly, mb), (0, Oy.j)(null, null, Zy, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: yb => "p2" in yb,
              get: yb => yb.p2,
              set: (yb, bb) => {
                yb.p2 = bb
              }
            },
            metadata: Ry
          }, Cy, Ty), (0, Oy.j)(null, null, cb, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: yb => "p3" in yb,
              get: yb => yb.p3,
              set: (yb, bb) => {
                yb.p3 = bb
              }
            },
            metadata: Ry
          }, Vy, Jy), (0, Oy.j)(null, null, Py, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: yb => "pid" in yb,
              get: yb => yb.pid,
              set: (yb, bb) => {
                yb.pid = bb
              }
            },
            metadata: Ry
          }, gb, Gy), (0, Oy.j)(null, yb = {
            value: bb
          }, oy, {
            kind: "class",
            name: bb.name,
            metadata: Ry
          }, null, By), bb = yb.value, Ry && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ry
          }), (0, Oy.l)(bb, By)
        })(), bb
      })(),
      uc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "components"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfComponents"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      rP = (() => {
        let yb, bb, Wy, Uy, hy = [XZ({
            ns: Uc,
            name: "component"
          })],
          fy = [],
          Zy = [],
          cb = [],
          Py = [],
          oy = [];
        bb = class {
          constructor(yb, bb) {
            this.objectid = (0, Oy.l)(this, Zy, void 0), this.transform = ((0, Oy.l)(this, cb), (0, Oy.l)(this, Py, void 0)), (0, Oy.l)(this, oy), this.objectid = yb, this.transform = bb
          }
        };
        return (0, Oy.p)(bb, "ThreeMfComponent"), (() => {
          const By = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "objectid"
          })], Uy = [uZ({
            name: "transform",
            formatter: Jc
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: yb => "objectid" in yb,
              get: yb => yb.objectid,
              set: (yb, bb) => {
                yb.objectid = bb
              }
            },
            metadata: By
          }, Zy, cb), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: yb => "transform" in yb,
              get: yb => yb.transform,
              set: (yb, bb) => {
                yb.transform = bb
              }
            },
            metadata: By
          }, Py, oy), (0, Oy.j)(null, yb = {
            value: bb
          }, hy, {
            kind: "class",
            name: bb.name,
            metadata: By
          }, null, fy), bb = yb.value, By && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: By
          }), (0, Oy.l)(bb, fy)
        })(), bb
      })(),
      Hc = (() => {
        let yb, bb, Wy, Uy = [XZ({
            ns: Uc,
            name: "basematerials"
          })],
          hy = [],
          fy = [],
          Zy = [];
        bb = class {
          constructor(yb) {
            this.id = (0, Oy.l)(this, fy, void 0), this.base = ((0, Oy.l)(this, Zy), []), this.id = yb
          }
        };
        return (0, Oy.p)(bb, "ThreeMfBaseMaterials"), (() => {
          const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "id"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: yb => "id" in yb,
              get: yb => yb.id,
              set: (yb, bb) => {
                yb.id = bb
              }
            },
            metadata: cb
          }, fy, Zy), (0, Oy.j)(null, yb = {
            value: bb
          }, Uy, {
            kind: "class",
            name: bb.name,
            metadata: cb
          }, null, hy), bb = yb.value, cb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cb
          }), (0, Oy.l)(bb, hy)
        })(), bb
      })(),
      aP = (() => {
        let yb, bb, Wy, Uy, hy = [XZ({
            ns: Uc,
            name: "base"
          })],
          fy = [],
          Zy = [],
          cb = [],
          Py = [],
          oy = [];
        bb = class {
          constructor(yb, bb) {
            this.name = (0, Oy.l)(this, Zy, void 0), this.displaycolor = ((0, Oy.l)(this, cb), (0, Oy.l)(this, Py, void 0)), (0, Oy.l)(this, oy), this.name = yb, this.displaycolor = bb
          }
        };
        return (0, Oy.p)(bb, "ThreeMfBase"), (() => {
          const By = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "name"
          })], Uy = [uZ({
            name: "displaycolor"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: yb => "name" in yb,
              get: yb => yb.name,
              set: (yb, bb) => {
                yb.name = bb
              }
            },
            metadata: By
          }, Zy, cb), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: yb => "displaycolor" in yb,
              get: yb => yb.displaycolor,
              set: (yb, bb) => {
                yb.displaycolor = bb
              }
            },
            metadata: By
          }, Py, oy), (0, Oy.j)(null, yb = {
            value: bb
          }, hy, {
            kind: "class",
            name: bb.name,
            metadata: By
          }, null, fy), bb = yb.value, By && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: By
          }), (0, Oy.l)(bb, fy)
        })(), bb
      })(),
      Fc = (() => {
        let yb, bb, Wy = [XZ({
            ns: Uc,
            name: "build"
          })],
          Uy = [];
        bb = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Oy.p)(bb, "ThreeMfBuild"), (() => {
          const hy = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Oy.j)(null, yb = {
            value: bb
          }, Wy, {
            kind: "class",
            name: bb.name,
            metadata: hy
          }, null, Uy), bb = yb.value, hy && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hy
          }), (0, Oy.l)(bb, Uy)
        })(), bb
      })(),
      pc = (() => {
        let yb, bb, Wy, Uy, hy, fy = [XZ({
            ns: Uc,
            name: "item"
          })],
          Zy = [],
          cb = [],
          Py = [],
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        bb = class {
          constructor(yb, bb, Wy) {
            this.objectid = (0, Oy.l)(this, cb, void 0), this.transform = ((0, Oy.l)(this, Py), (0, Oy.l)(this, oy, void 0)), this.partnumber = ((0, Oy.l)(this, By), (0, Oy.l)(this, Ky, void 0)), this.metadatagroup = (0, Oy.l)(this, ey), this.objectid = yb, this.transform = bb, this.partnumber = Wy
          }
        };
        return (0, Oy.p)(bb, "ThreeMfItem"), (() => {
          const qb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Wy = [uZ({
            name: "objectid"
          })], Uy = [uZ({
            name: "transform",
            formatter: Jc
          })], hy = [uZ({
            name: "partnumber"
          })], (0, Oy.j)(null, null, Wy, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: yb => "objectid" in yb,
              get: yb => yb.objectid,
              set: (yb, bb) => {
                yb.objectid = bb
              }
            },
            metadata: qb
          }, cb, Py), (0, Oy.j)(null, null, Uy, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: yb => "transform" in yb,
              get: yb => yb.transform,
              set: (yb, bb) => {
                yb.transform = bb
              }
            },
            metadata: qb
          }, oy, By), (0, Oy.j)(null, null, hy, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: yb => "partnumber" in yb,
              get: yb => yb.partnumber,
              set: (yb, bb) => {
                yb.partnumber = bb
              }
            },
            metadata: qb
          }, Ky, ey), (0, Oy.j)(null, yb = {
            value: bb
          }, fy, {
            kind: "class",
            name: bb.name,
            metadata: qb
          }, null, Zy), bb = yb.value, qb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qb
          }), (0, Oy.l)(bb, Zy)
        })(), bb
      })();
    class Lc {
      constructor(yb, bb) {
        this._object = new vP(yb, bb)
      }
      withName(yb) {
        return this._object.name = yb, this
      }
      withThumbnail(yb) {
        return this._object.thumbnail = yb, this
      }
      withProperty(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = yb, this._object.id = bb, this
      }
      build() {
        return this._object
      }
      reset(yb, bb) {
        this._object = new vP(yb, bb)
      }
    }
    class Qc extends Lc {
      constructor(yb) {
        super(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zc.model), this._object.content = new uc
      }
      withComponent(yb, bb) {
        return this._object.content.component.push(new rP(yb, bb)), this
      }
    }
    class jP extends Lc {
      constructor(yb) {
        super(yb, Zc.model)
      }
      withPostProcessHandlers(yb, bb) {
        return this._vh = yb, this._th = bb, this
      }
      withData(yb) {
        return this._object.content = this._buildMesh(yb), this
      }
      withMaterial(yb, bb) {
        return this._object.pid = yb, this._object.pindex = bb, this
      }
      _buildMesh(yb) {
        const bb = this._buildVertices(yb.positions),
          Wy = this._buildTriangle(yb.indices);
        return new iP(bb, Wy)
      }
      _buildVertices(yb) {
        const bb = new Mc;
        if (yb)
          for (let Wy = 0; Wy < yb.length;) {
            const Uy = yb[Wy++],
              hy = yb[Wy++],
              fy = yb[Wy++];
            let Zy = new Yc(Uy, hy, fy);
            this._vh && (Zy = this._vh(Zy)), bb.vertex.push(Zy)
          }
        return bb
      }
      _buildTriangle(yb) {
        const bb = new Xc;
        if (yb)
          for (let Wy = 0; Wy < yb.length;) {
            const Uy = yb[Wy++],
              hy = yb[Wy++],
              fy = yb[Wy++];
            let Zy = new nc(Uy, hy, fy);
            this._th && (Zy = this._th(Zy)), bb.triangle.push(Zy)
          }
        return bb
      }
    }
    class Dc {
      constructor(yb) {
        this._m = new Hc(yb)
      }
      withColor(yb, bb) {
        this._m.base = this._m.base ?? [];
        let Wy = this._m.base.find((bb => bb.name.toLowerCase() === yb.toLowerCase()));
        return Wy ? (Wy.displaycolor = this._rgbaToHex(bb), this) : (Wy = new aP(yb, this._rgbaToHex(bb)), this._m.base.push(Wy), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(yb) {
        const bb = yb => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(yb, 1 / 2.2)))),
          Wy = bb(yb.r).toString(16).padStart(2, "0").toUpperCase(),
          Uy = bb(yb.g).toString(16).padStart(2, "0").toUpperCase(),
          hy = bb(yb.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof yb.a) {
          return `#${Wy}${Uy}${hy}${Math.round(Math.min(255,Math.max(0,255*yb.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Wy}${Uy}${hy}`
      }
    }
    class tP {
      constructor() {
        this._model = new gP, this._objects = new Map
      }
      withMetaData(yb, bb, Wy, Uy) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Gc(yb, bb, Wy, Uy)), this
      }
      withMaterial(yb) {
        return yb instanceof Dc && (yb = yb.build()), yb && (this._model.resources = this._model.resources ?? new Rc, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(yb)), this
      }
      withMesh(yb) {
        return yb instanceof jP && (yb = yb.build()), this._model.resources = this._model.resources ?? new Rc, this._model.resources.object.push(yb), this
      }
      withComponents(yb) {
        return yb instanceof Qc && (yb = yb.build()), this._model.resources = this._model.resources ?? new Rc, this._model.resources.object.push(yb), this
      }
      withBuild(yb, bb, Wy) {
        return this._model.build = this._model.build ?? new Fc, this._model.build.item?.push(new pc(yb, bb, Wy)), this
      }
      withUnit(yb) {
        return this._model.unit = yb, this
      }
      reset() {
        return this._model = new gP, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    tP.KnownMetaSet = new Set(gP.KnownMeta.map((yb => yb.toLowerCase())));
    class wc {
      withContentType(yb) {
        this._cts || (this._cts = new Ec);
        const bb = this._cts.items;
        return bb.some((bb => bb.ext === yb.ext && bb.ct === yb.ct)) || bb.push(yb), this
      }
      withRelationship(yb) {
        this._rs || (this._rs = new mP);
        const bb = this._rs.items;
        return bb.some((bb => bb.id === yb.id)) || bb.push(yb), this.withContentType(new lc("rels", oc.Relationships)), this
      }
      withModel(yb) {
        return yb instanceof tP && (yb = yb.build()), this._m = yb, this.withContentType(new lc("model", oc.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const yb = `${Kc}${ec}`;
        if (!this._rs) {
          const bb = `/${yb}`;
          this.withRelationship(new Cc("rel0", Sc.ThreeDimModel, bb))
        }
        return new Tc(this._cts, this._rs, this._m)
      }
    }
    class kP {
      constructor(yb) {
        this._o = yb
      }
      get options() {
        return this._o
      }
      async serializeAsync(yb) {
        const bb = await this.ensureZipLibReadyAsync();
        if (!bb) return;
        const Wy = bb.Zip,
          Uy = bb.ZipDeflate;
        if (!Wy || !Uy) throw new Error("fflate Zip / ZipDeflate not available");
        const hy = function(yb, bb, Wy) {
          const hy = new Uy(bb, {
            level: 6
          });
          yb.add(hy);
          const fy = function(yb) {
              return {
                push: (bb, Wy) => yb.push(bb, Wy)
              }
            }(hy),
            Zy = new Wc(fy),
            cb = new yP(Zy).dec("1.0", "UTF-8");
          new xc(cb).serialize(Wy), Zy.finish()
        };
        for (var fy = arguments.length, Zy = new Array(fy > 1 ? fy - 1 : 0), cb = 1; cb < fy; cb++) Zy[cb - 1] = arguments[cb];
        const Py = this.toDocument(...Zy);
        if (!Py) return;
        const oy = new Wy(yb);
        hy(oy, sc, Py.contentTypes), hy(oy, `${Bc}${qP}`, Py.relationships), hy(oy, `${Kc}${ec}`, Py.model), oy.end()
      }
      toDocument() {
        const yb = (new tP).withUnit(this._o?.unit ?? fc.millimeter);
        if (this.options.metadata)
          for (const hy in this.options.metadata) yb.withMetaData(hy, this.options.metadata[hy]);
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        return (new wc).withModel(this.toModel(yb, ...Wy)).build()
      }
    }
    class Nc {
      static async SerializeToMemoryAsync(yb) {
        const bb = new Array;
        let Wy = 0;
        for (var Uy = arguments.length, hy = new Array(Uy > 1 ? Uy - 1 : 0), fy = 1; fy < Uy; fy++) hy[fy - 1] = arguments[fy];
        if (await yb.serializeAsync((function(yb, Uy, hy) {
            bb.push(Uy), Wy += Uy.length
          }), ...hy), !Wy) return;
        const Zy = new Uint8Array(Wy);
        let cb = 0;
        for (const Py of bb) Zy.set(Py, cb), cb += Py.length;
        return Zy
      }
    }
    class zP {}
    zP.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Ic {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = yb, this._to = bb, this._step = Wy, this._i = yb
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const yb = this._i;
        return this._i += this._step, yb
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class xP extends kP {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...xP.DefaultOptions,
          ...yb
        })
      }
      toModel(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        Wy = Wy.filter((yb => yb instanceof oU.b || yb instanceof qb.b));
        const hy = new Ic,
          fy = yb,
          Zy = new Map,
          cb = this.options.exportInstances ? [] : null;
        for (let Py = 0; Py < Wy.length; Py++) {
          const yb = Wy[Py];
          if (yb instanceof qb.b) {
            cb?.push(yb);
            continue
          }
          const bb = yb.name || `mesh${Py}`,
            Uy = yb.getWorldMatrix(),
            oy = this._handleBabylonTo3mfMatrixTransformToRef(Uy, Vc.Zero()),
            By = yb.vJ;
          if (void 0 === By) continue;
          const Ky = 1 == By.length;
          for (let Wy = 0; Wy < By.length; Wy++) {
            const Uy = By[Wy],
              cb = this._extractSubMesh(yb, Uy);
            if (cb) {
              const yb = Ky ? `${bb}` : `${bb}_${Wy}`,
                Py = new jP(hy.next()).withData(cb).withName(yb).build();
              fy.withMesh(Py), fy.withBuild(Py.id, oy), Zy.set(Uy, Py)
            }
          }
        }
        if (cb && cb.length) {
          const yb = this._groupBy(cb, (yb => yb.zKy));
          for (const [bb, Wy] of Array.from(yb.entries()))
            if (Wy && Wy.length)
              for (let yb = 0; yb < Wy.length; yb++) {
                const Uy = Wy[yb].getWorldMatrix(),
                  hy = bb.vJ;
                for (let yb = 0; yb < hy.length; yb++) {
                  const bb = hy[yb],
                    Wy = Zy.get(bb);
                  Wy && fy.withBuild(Wy.id, this._handleBabylonTo3mfMatrixTransformToRef(Uy, Vc.Zero()))
                }
              }
        }
        return fy.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const yb = globalThis;
          return yb.fflate || await hy.Tools.LoadScriptAsync(zP.FFLATEUrl), yb.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(yb, bb) {
        const Wy = yb.Mqy();
        if (!Wy) return;
        const Uy = yb.getVerticesData(xP._PositionKind);
        if (!Uy) return;
        if (0 == bb.indexStart && bb.indexCount == Wy.length) return {
          positions: Uy,
          indices: Wy
        };
        const hy = bb.indexStart,
          fy = new Map,
          Zy = [],
          cb = new Uint32Array(bb.indexCount);
        for (let Py = 0; Py < bb.indexCount; Py++) {
          const yb = Wy[hy + Py];
          let bb = fy.get(yb);
          if (void 0 === bb) {
            bb = fy.size, fy.set(yb, bb);
            const Wy = 3 * yb;
            Zy.push(Uy[Wy], Uy[Wy + 1], Uy[Wy + 2])
          }
          cb[Py] = bb
        }
        return {
          positions: new Float32Array(Zy),
          indices: cb
        }
      }
      _groupBy(yb, bb) {
        const Wy = new Map;
        for (const Uy of yb) {
          const yb = bb(Uy),
            hy = Wy.get(yb);
          hy ? hy.push(Uy) : Wy.set(yb, [Uy])
        }
        return Wy
      }
      _handleBabylonTo3mfMatrixTransformToRef(yb, bb) {
        const Wy = yb.multiplyToRef(xP._R_BJS_TO_3MF, Fy.c.Zero()).m;
        return bb.values = [Wy[0], Wy[1], Wy[2], Wy[4], Wy[5], Wy[6], Wy[8], Wy[9], Wy[10], Wy[12], Wy[13], Wy[14]], bb
      }
    }
    xP.DefaultOptions = {
      unit: fc.meter,
      exportInstances: !1
    }, xP._PositionKind = "position", xP._R_BJS_TO_3MF = Fy.c.RotationX(Math.PI / 2).multiply(Fy.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);