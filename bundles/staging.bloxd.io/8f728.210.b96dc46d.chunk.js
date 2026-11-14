export const id = 210;
export const ids = [210, 214];
export const modules = {
  39778: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(39709),
      Ic = nc(38033);
    let rB = !1;

    function uc() {
      rB || (rB = !0, Ic.b.prototype._sphericalPolynomialTargetSize = 0, Ic.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ic.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Vc.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((cB => {
              this._texture._sphericalPolynomial = cB, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(cB) {
          this._texture && (this._texture._sphericalPolynomial = cB)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  35808: (cB, Bc, nc) => {
    nc.d(Bc, {
      Color3: () => Vc.e,
      c: () => Vc.g
    });
    var Vc = nc(35815);
    (0, Vc.i)()
  },
  36327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(36329);
    class Ic {
      static GetPlanes(cB) {
        const Bc = [];
        for (let nc = 0; nc < 6; nc++) Bc.push(new Vc.d(0, 0, 0, 0));
        return Ic.GetPlanesToRef(cB, Bc), Bc
      }
      static GetNearPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[2], Bc.normal.y = nc[7] + nc[6], Bc.normal.z = nc[11] + nc[10], Bc.d = nc[15] + nc[14], Bc.normalize()
      }
      static GetFarPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[2], Bc.normal.y = nc[7] - nc[6], Bc.normal.z = nc[11] - nc[10], Bc.d = nc[15] - nc[14], Bc.normalize()
      }
      static GetLeftPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[0], Bc.normal.y = nc[7] + nc[4], Bc.normal.z = nc[11] + nc[8], Bc.d = nc[15] + nc[12], Bc.normalize()
      }
      static GetRightPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[0], Bc.normal.y = nc[7] - nc[4], Bc.normal.z = nc[11] - nc[8], Bc.d = nc[15] - nc[12], Bc.normalize()
      }
      static GetTopPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[1], Bc.normal.y = nc[7] - nc[5], Bc.normal.z = nc[11] - nc[9], Bc.d = nc[15] - nc[13], Bc.normalize()
      }
      static GetBottomPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[1], Bc.normal.y = nc[7] + nc[5], Bc.normal.z = nc[11] + nc[9], Bc.d = nc[15] + nc[13], Bc.normalize()
      }
      static GetPlanesToRef(cB, Bc) {
        Ic.GetNearPlaneToRef(cB, Bc[0]), Ic.GetFarPlaneToRef(cB, Bc[1]), Ic.GetLeftPlaneToRef(cB, Bc[2]), Ic.GetRightPlaneToRef(cB, Bc[3]), Ic.GetTopPlaneToRef(cB, Bc[4]), Ic.GetBottomPlaneToRef(cB, Bc[5])
      }
      static IsPointInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; nc++)
          if (Bc[nc].dotCoordinate(cB) < 0) return !1;
        return !0
      }
    }
  },
  36329: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc, Ic) {
        this.normal = new Vc.p(cB, Bc, nc), this.d = Ic
      }
      KPc() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ic(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let cB = this.normal.getHashCode();
        return cB = 397 * cB ^ this.d, cB
      }
      normalize() {
        const cB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Bc = 0;
        return 0 !== cB && (Bc = 1 / cB), this.normal.x *= Bc, this.normal.y *= Bc, this.normal.z *= Bc, this.d *= Bc, this
      }
      transform(cB) {
        const Bc = Ic._TmpMatrix;
        cB.invertToRef(Bc);
        const nc = Bc.m,
          Vc = this.normal.x,
          rB = this.normal.y,
          uc = this.normal.z,
          sc = this.d,
          Mc = Vc * nc[0] + rB * nc[1] + uc * nc[2] + sc * nc[3],
          Pc = Vc * nc[4] + rB * nc[5] + uc * nc[6] + sc * nc[7],
          qB = Vc * nc[8] + rB * nc[9] + uc * nc[10] + sc * nc[11],
          Oc = Vc * nc[12] + rB * nc[13] + uc * nc[14] + sc * nc[15];
        return new Ic(Mc, Pc, qB, Oc)
      }
      dotCoordinate(cB) {
        return this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z + this.d
      }
      copyFromPoints(cB, Bc, nc) {
        const Vc = Bc.x - cB.x,
          Ic = Bc.y - cB.y,
          rB = Bc.z - cB.z,
          uc = nc.x - cB.x,
          sc = nc.y - cB.y,
          Mc = nc.z - cB.z,
          Pc = Ic * Mc - rB * sc,
          qB = rB * uc - Vc * Mc,
          Oc = Vc * sc - Ic * uc,
          Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
        let fc;
        return fc = 0 !== Tc ? 1 / Tc : 0, this.normal.x = Pc * fc, this.normal.y = qB * fc, this.normal.z = Oc * fc, this.d = -(this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z), this
      }
      isFrontFacingTo(cB, Bc) {
        return Vc.p.Dot(this.normal, cB) <= Bc
      }
      signedDistanceTo(cB) {
        return Vc.p.Dot(cB, this.normal) + this.d
      }
      static FromArray(cB) {
        return new Ic(cB[0], cB[1], cB[2], cB[3])
      }
      static FromPoints(cB, Bc, nc) {
        const Vc = new Ic(0, 0, 0, 0);
        return Vc.copyFromPoints(cB, Bc, nc), Vc
      }
      static FromPositionAndNormal(cB, Bc) {
        const nc = new Ic(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(cB, Bc, nc)
      }
      static FromPositionAndNormalToRef(cB, Bc, nc) {
        return nc.normal.qqc(Bc), nc.normal.normalize(), nc.d = -cB.dot(nc.normal), nc
      }
      static SignedDistanceToPlaneFromPositionAndNormal(cB, Bc, nc) {
        const Ic = -(Bc.x * cB.x + Bc.y * cB.y + Bc.z * cB.z);
        return Vc.p.Dot(nc, Bc) + Ic
      }
    }
    Ic._TmpMatrix = Vc.d.Identity()
  },
  35753: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Matrix: () => Vc.d,
      Quaternion: () => Vc.f,
      RegisterMathVector: () => Vc.h,
      TmpVectors: () => Vc.i,
      Vector2: () => Vc.m,
      KV: () => Vc.p,
      Vector4: () => Vc.t
    });
    var Vc = nc(35756);
    (0, Vc.h)()
  },
  36675: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc, Vc) {
        this.x = cB, this.y = Bc, this.width = nc, this.height = Vc
      }
      toGlobal(cB, Bc) {
        return new Vc(this.x * cB, this.y * Bc, this.width * cB, this.height * Bc)
      }
      toGlobalToRef(cB, Bc, nc) {
        return nc.x = this.x * cB, nc.y = this.y * Bc, nc.width = this.width * cB, nc.height = this.height * Bc, this
      }
      clone() {
        return new Vc(this.x, this.y, this.width, this.height)
      }
    }
  },
  39709: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(35756),
      Ic = nc(35785),
      rB = nc(38029),
      uc = nc(35759),
      sc = nc(35815);
    class Mc {
      constructor(cB, Bc, nc, Vc) {
        this.name = cB, this.worldAxisForNormal = Bc, this.worldAxisForFileX = nc, this.worldAxisForFileY = Vc
      }
    }
    class Pc {
      static _NearestPow2Floor(cB) {
        return cB <= 1 ? 1 : 1 << Math.floor(Math.log2(cB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(cB) {
        if (!cB.isCube) return null;
        cB.knc()?.RV().flushFramebuffer();
        const Bc = cB.getSize().width,
          nc = cB._sphericalPolynomialTargetSize,
          Vc = nc > 0 ? this._NearestPow2Floor(nc) : 0,
          Ic = !cB.noMipmap && !0 === cB._texture?.generateMipMaps,
          rB = Vc > 0 && Vc < Bc && Ic,
          uc = rB ? Math.max(0, Math.round(Math.log2(Bc / Vc))) : 0,
          sc = rB ? Math.max(1, Math.floor(Bc / Math.pow(2, uc))) : Bc,
          Mc = cB.readPixels(0, uc, void 0, !1),
          Pc = cB.readPixels(1, uc, void 0, !1);
        let qB, Oc;
        cB.isRenderTarget ? (qB = cB.readPixels(3, uc, void 0, !1), Oc = cB.readPixels(2, uc, void 0, !1)) : (qB = cB.readPixels(2, uc, void 0, !1), Oc = cB.readPixels(3, uc, void 0, !1));
        const Tc = cB.readPixels(4, uc, void 0, !1),
          fc = cB.readPixels(5, uc, void 0, !1),
          mB = cB.gammaSpace,
          ec = Vc > 0 && Vc < Bc && !rB;
        return new Promise((cB => {
          Promise.all([Pc, Mc, qB, Oc, Tc, fc]).then((nc => {
            let [Ic, rB, uc, Mc, Pc, qB] = nc, Oc = sc;
            if (ec) {
              const cB = 4;
              Ic = this._DownsampleFace(Ic, Bc, Vc, cB), rB = this._DownsampleFace(rB, Bc, Vc, cB), uc = this._DownsampleFace(uc, Bc, Vc, cB), Mc = this._DownsampleFace(Mc, Bc, Vc, cB), Pc = this._DownsampleFace(Pc, Bc, Vc, cB), qB = this._DownsampleFace(qB, Bc, Vc, cB), Oc = Vc
            }
            const Tc = {
              size: Oc,
              right: rB,
              left: Ic,
              up: uc,
              down: Mc,
              front: Pc,
              back: qB,
              format: 5,
              type: Ic instanceof Float32Array ? 1 : 0,
              gammaSpace: mB
            };
            cB(this.ConvertCubeMapToSphericalPolynomial(Tc))
          }))
        }))
      }
      static _AreaElement(cB, Bc) {
        return Math.atan2(cB * Bc, Math.sqrt(cB * cB + Bc * Bc + 1))
      }
      static _DownsampleFace(cB, Bc, nc, Vc) {
        const Ic = cB instanceof Float32Array ? cB : Float32Array.from(cB),
          rB = nc * nc * Vc,
          uc = new Float32Array(rB),
          sc = Bc / nc,
          Mc = 1 / (sc * sc);
        for (let qB = 0; qB < nc; qB++) {
          const cB = Math.floor(qB * sc),
            rB = Math.floor((qB + 1) * sc);
          for (let Pc = 0; Pc < nc; Pc++) {
            const Oc = Math.floor(Pc * sc),
              Tc = Math.floor((Pc + 1) * sc),
              fc = (qB * nc + Pc) * Vc;
            for (let nc = 0; nc < Vc; nc++) {
              let sc = 0;
              for (let uc = cB; uc < rB; uc++)
                for (let cB = Oc; cB < Tc; cB++) sc += Ic[(uc * Bc + cB) * Vc + nc];
              uc[fc + nc] = sc * Mc
            }
          }
        }
        if (cB instanceof Float32Array) return uc;
        const Pc = new(0, cB.constructor)(rB);
        for (let qB = 0; qB < rB; qB++) Pc[qB] = uc[qB] + .5 | 0;
        return Pc
      }
      static ConvertCubeMapToSphericalPolynomial(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const nc = Bc > 0 ? this._NearestPow2Floor(Bc) : 0;
        if (nc > 0 && cB.size > nc) {
          const Bc = 5 === cB.format ? 4 : 3,
            Vc = ["right", "left", "up", "down", "front", "back"],
            Ic = {};
          for (const rB of Vc) Ic[rB] = this._DownsampleFace(cB[rB], cB.size, nc, Bc);
          cB = {
            ...cB,
            ...Ic,
            size: nc
          }
        }
        const Vc = new rB.c;
        let Mc = 0;
        const Pc = 2 / cB.size,
          qB = Pc,
          Oc = .5 * Pc,
          Tc = Oc - 1;
        for (let rB = 0; rB < 6; rB++) {
          const Bc = this._FileFaces[rB],
            nc = cB[Bc.name];
          let fc = Tc;
          const mB = 5 === cB.format ? 4 : 3;
          for (let rB = 0; rB < cB.size; rB++) {
            let ec = Tc;
            for (let qB = 0; qB < cB.size; qB++) {
              const Tc = Bc.worldAxisForFileX.scale(ec).add(Bc.worldAxisForFileY.scale(fc)).add(Bc.worldAxisForNormal);
              Tc.normalize();
              const tB = this._AreaElement(ec - Oc, fc - Oc) - this._AreaElement(ec - Oc, fc + Oc) - this._AreaElement(ec + Oc, fc - Oc) + this._AreaElement(ec + Oc, fc + Oc);
              let Sc = nc[rB * cB.size * mB + qB * mB + 0],
                yB = nc[rB * cB.size * mB + qB * mB + 1],
                zB = nc[rB * cB.size * mB + qB * mB + 2];
              isNaN(Sc) && (Sc = 0), isNaN(yB) && (yB = 0), isNaN(zB) && (zB = 0), 0 === cB.type && (Sc /= 255, yB /= 255, zB /= 255), cB.gammaSpace && (Sc = Math.pow((0, Ic.Clamp)(Sc), uc.k), yB = Math.pow((0, Ic.Clamp)(yB), uc.k), zB = Math.pow((0, Ic.Clamp)(zB), uc.k));
              const pc = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const cB = Math.max(Sc, yB, zB);
                if (cB > pc) {
                  const Bc = pc / cB;
                  Sc *= Bc, yB *= Bc, zB *= Bc
                }
              } else Sc = (0, Ic.Clamp)(Sc, 0, pc), yB = (0, Ic.Clamp)(yB, 0, pc), zB = (0, Ic.Clamp)(zB, 0, pc);
              const hc = new sc.e(Sc, yB, zB);
              Vc.addLight(Tc, hc, tB), Mc += tB, ec += Pc
            }
            fc += qB
          }
        }
        const fc = 6 * (4 * Math.PI) / 6 / Mc;
        return Vc.scaleInPlace(fc), Vc.convertIncidentRadianceToIrradiance(), Vc.convertIrradianceToLambertianRadiance(), rB.g.FromHarmonics(Vc)
      }
    }
    Pc._FileFaces = [new Mc("right", new Vc.p(1, 0, 0), new Vc.p(0, 0, -1), new Vc.p(0, -1, 0)), new Mc("left", new Vc.p(-1, 0, 0), new Vc.p(0, 0, 1), new Vc.p(0, -1, 0)), new Mc("up", new Vc.p(0, 1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, 1)), new Mc("down", new Vc.p(0, -1, 0), new Vc.p(1, 0, 0), new Vc.p(0, 0, -1)), new Mc("front", new Vc.p(0, 0, 1), new Vc.p(1, 0, 0), new Vc.p(0, -1, 0)), new Mc("back", new Vc.p(0, 0, -1), new Vc.p(-1, 0, 0), new Vc.p(0, -1, 0))], Pc.MAX_HDRI_VALUE = 4096, Pc.PRESERVE_CLAMPED_COLORS = !1
  },
  39500: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.h,
      h: () => Vc.p
    });
    var Vc = nc(38090);
    (0, Vc.t)()
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  39741: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB
    });
    var Vc = nc(39733),
      Ic = nc(39745);
    class rB {
      static ExpandRGBDTexture(cB) {
        const Bc = cB._texture;
        if (!Bc || !cB.isRGBD) return;
        const Ic = Bc.RV(),
          rB = Ic.getCaps(),
          uc = Bc.isReady;
        let sc = !1;
        rB.textureHalfFloatRender && rB.textureHalfFloatLinearFiltering ? (sc = !0, Bc.type = 2) : rB.textureFloatRender && rB.textureFloatLinearFiltering && (sc = !0, Bc.type = 1), sc && (Bc.isReady = !1, Bc._isRGBD = !1, Bc.invertY = !1);
        const Mc = async () => {
          const rB = Ic.isWebGPU,
            uc = rB ? 1 : 0;
          Bc.isReady = !1, rB ? await nc.e(317).then((() => nc(59297))) : await nc.e(299).then((() => nc(59306)));
          const sc = new Vc.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ic, !1, void 0, Bc.type, void 0, null, !1, void 0, uc);
          sc.externalTextureSamplerBinding = !0;
          const Mc = Ic.createRenderTargetTexture(Bc.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Bc.samplingMode,
            type: Bc.type,
            format: 5
          });
          sc.onEffectCreatedObservable.addOnce((nc => {
            nc.executeWhenCompiled((() => {
              sc.onApply = cB => {
                cB._bindTexture("textureSampler", Bc), cB.setFloat2("scale", 1, 1)
              }, cB.knc()?.postProcessManager.directRender([sc], Mc, !0), Ic.restoreDefaultFramebuffer(), Ic._releaseTexture(Bc), sc && sc.dispose(), Mc._swapAndDie(Bc), Bc.isReady = !0
            }))
          }))
        };
        sc && (uc ? Mc() : cB.onLoadObservable.addOnce(Mc))
      }
      static async EncodeTextureToRGBD(cB, Bc) {
        let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Bc.RV().isWebGPU ? await nc.e(318).then((() => nc(59324))) : await nc.e(300).then((() => nc(59316))), await (0, Ic.d)("rgbdEncode", cB, Bc, Vc, 1, 5)
      }
    }
  },
  59077: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AsyncLoop: () => Vc.c,
      RegisterTools: () => Vc.e,
      Tools: () => Vc.g,
      className: () => Vc.k
    });
    var Vc = nc(38146);
    (0, Vc.e)()
  },
  39789: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    class Vc {
      constructor(cB) {
        this._pendingActions = new Array, this._workerInfos = cB.map((cB => ({
          workerPromise: Promise.resolve(cB),
          idle: !0
        })))
      }
      dispose() {
        for (const cB of this._workerInfos) cB.workerPromise.then((cB => {
          cB.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(cB) {
        this._executeOnIdleWorker(cB) || this._pendingActions.push(cB)
      }
      _executeOnIdleWorker(cB) {
        for (const Bc of this._workerInfos)
          if (Bc.idle) return this._execute(Bc, cB), !0;
        return !1
      }
      _execute(cB, Bc) {
        cB.idle = !1, cB.workerPromise.then((nc => {
          Bc(nc, (() => {
            const Bc = this._pendingActions.shift();
            Bc ? this._execute(cB, Bc) : cB.idle = !0
          }))
        }))
      }
    }
    class Ic extends Vc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.DefaultOptions;
        super([]), this._maxWorkers = cB, this._createWorkerAsync = Bc, this._options = nc
      }
      push(cB) {
        if (!this._executeOnIdleWorker(cB))
          if (this._workerInfos.length < this._maxWorkers) {
            const Bc = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Bc), this._execute(Bc, cB)
          } else this._pendingActions.push(cB)
      }
      _execute(cB, Bc) {
        cB.timeoutId && (clearTimeout(cB.timeoutId), delete cB.timeoutId), super._execute(cB, ((nc, Vc) => {
          Bc(nc, (() => {
            Vc(), cB.idle && (cB.timeoutId = setTimeout((() => {
              cB.workerPromise.then((cB => {
                cB.terminate()
              }));
              const Bc = this._workerInfos.indexOf(cB); - 1 !== Bc && this._workerInfos.splice(Bc, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ic.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  59103: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AbstractThreeMfSerializer: () => Rs,
      BVHExporter: () => gs,
      ContentTypeFileName: () => mM,
      DefaultXmlSerializerFormatOptions: () => Hu,
      DefaultXmlSerializerNumberOptions: () => Xu,
      EXT_lights_area: () => SI,
      EXT_mesh_gpu_instancing: () => wV,
      EXT_texture_avif: () => rs,
      EXT_texture_webp: () => Bu,
      GLTF2Export: () => EV,
      GLTFData: () => Pc,
      GetXmlFieldMeta: () => Eu,
      GetXmlName: () => ou,
      IsQualifiedName: () => Uu,
      KHR_draco_mesh_compression: () => AV,
      KHR_interactivity: () => qr,
      KHR_lights_punctual: () => uI,
      KHR_materials_anisotropy: () => hI,
      KHR_materials_clearcoat: () => gr,
      KHR_materials_coat: () => vr,
      KHR_materials_diffuse_roughness: () => or,
      KHR_materials_diffuse_transmission: () => wI,
      KHR_materials_dispersion: () => FI,
      KHR_materials_emissive_strength: () => ir,
      KHR_materials_fuzz: () => Or,
      KHR_materials_ior: () => AI,
      KHR_materials_iridescence: () => nr,
      KHR_materials_openpbr: () => Xr,
      KHR_materials_sheen: () => ur,
      KHR_materials_specular: () => er,
      KHR_materials_transmission: () => zu,
      KHR_materials_unlit: () => Yr,
      KHR_materials_volume: () => bu,
      KHR_materials_volume_scatter: () => vu,
      KHR_texture_basisu: () => dr,
      KHR_texture_transform: () => ju,
      Known3mfRelationshipTypes: () => es,
      KnownI3mfContentType: () => Ps,
      Matrix3d: () => hs,
      MatrixFormatter: () => aM,
      ModelFileName: () => Ts,
      NumberFormatter: () => jsc,
      OBJExport: () => uc,
      Object3dDirName: () => Os,
      OpenXmlContentTypesNamespace: () => ss,
      OpenXmlRelationshipsNamespace: () => Ms,
      RegisterEXT_lights_area: () => zr,
      RegisterEXT_mesh_gpu_instancing: () => XV,
      RegisterEXT_texture_avif: () => su,
      RegisterEXT_texture_webp: () => Vu,
      RegisterKHR_draco_mesh_compression: () => cr,
      RegisterKHR_interactivity: () => TI,
      RegisterKHR_lights_punctual: () => MI,
      RegisterKHR_materials_anisotropy: () => lI,
      RegisterKHR_materials_clearcoat: () => br,
      RegisterKHR_materials_coat: () => NI,
      RegisterKHR_materials_diffuse_roughness: () => wr,
      RegisterKHR_materials_diffuse_transmission: () => XI,
      RegisterKHR_materials_dispersion: () => jr,
      RegisterKHR_materials_emissive_strength: () => xr,
      RegisterKHR_materials_fuzz: () => fr,
      RegisterKHR_materials_ior: () => cu,
      RegisterKHR_materials_iridescence: () => Ir,
      RegisterKHR_materials_openpbr: () => Fr,
      RegisterKHR_materials_sheen: () => Mr,
      RegisterKHR_materials_specular: () => Sr,
      RegisterKHR_materials_transmission: () => hr,
      RegisterKHR_materials_unlit: () => gu,
      RegisterKHR_materials_volume: () => Qr,
      RegisterKHR_materials_volume_scatter: () => Nr,
      RegisterKHR_texture_basisu: () => Gr,
      RegisterKHR_texture_transform: () => iu,
      RelationshipDirName: () => qM,
      RelationshipFileName: () => fs,
      ResolveFormatOptions: () => Ju,
      ResolveNumberOptions: () => Fu,
      STLExport: () => Mu,
      ST_ObjectType: () => us,
      ST_Unit: () => rM,
      StringXmlWriter: () => Bs,
      ThreeDimModelNamespace: () => Vs,
      ThreeMf: () => iM,
      ThreeMfBase: () => os,
      ThreeMfBaseMaterials: () => Es,
      ThreeMfBuild: () => Ws,
      ThreeMfComponent: () => Ns,
      ThreeMfComponents: () => Ds,
      ThreeMfComponentsBuilder: () => Xs,
      ThreeMfContentType: () => Ss,
      ThreeMfContentTypes: () => tM,
      ThreeMfDocument: () => ps,
      ThreeMfDocumentBuilder: () => jM,
      ThreeMfItem: () => ws,
      ThreeMfMaterialBuilder: () => Fs,
      ThreeMfMesh: () => bM,
      ThreeMfMeshBuilder: () => Hs,
      ThreeMfMeta: () => Ys,
      ThreeMfMetadataGroup: () => Ls,
      ThreeMfModel: () => ls,
      ThreeMfModelBuilder: () => Jsc,
      ThreeMfObject: () => Us,
      ThreeMfObjectBuilder: () => kM,
      ThreeMfRelationship: () => zM,
      ThreeMfRelationships: () => yM,
      ThreeMfResources: () => gM,
      ThreeMfSerializer: () => ds,
      ThreeMfSerializerGlobalConfiguration: () => Ks,
      ThreeMfTriangle: () => vM,
      ThreeMfTriangles: () => Cs,
      ThreeMfVertex: () => Qs,
      ThreeMfVertices: () => Zs,
      ToQualifiedString: () => ks,
      TokenType: () => Gu,
      TriangleSetsNamespace: () => Is,
      USDZExportAsync: () => Yu,
      Utf8XmlWriterToBytes: () => ns,
      XmlAttr: () => Du,
      XmlBuilder: () => cM,
      XmlElem: () => Nu,
      XmlIgnore: () => vs,
      XmlName: () => Cu,
      XmlNameToParts: () => wu,
      XmlSerializer: () => du,
      _ConvertToGLTFPBRMetallicRoughness: () => gV,
      _SolveMetallic: () => Ln,
      __IGLTFExporterExtension: () => sc
    });
    var Vc = nc(35753),
      Ic = nc(59077),
      rB = nc(38326);
    class uc {
      static OBJ(cB, Bc, nc, uc) {
        const sc = [];
        let Mc = 1,
          Pc = 1;
        Bc && (nc || (nc = "mat"), sc.push("mtllib " + nc + ".mtl"));
        for (let qB = 0; qB < cB.length; qB++) {
          const nc = cB[qB],
            Oc = nc.name || `mesh${qB}}`;
          sc.push(`o ${Oc}`);
          let Tc = null;
          if (uc) {
            const cB = nc.computeWorldMatrix(!0);
            Tc = new Vc.Matrix, cB.invertToRef(Tc), nc.bakeTransformIntoVertices(cB)
          }
          if (Bc) {
            const cB = nc.material;
            cB && sc.push("usemtl " + cB.id)
          }
          const fc = nc.geometry;
          if (!fc) {
            Ic.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const mB = fc.getVerticesData("position"),
            ec = fc.getVerticesData("normal"),
            tB = fc.getVerticesData("uv"),
            Sc = fc.Tfc();
          let yB = 0,
            zB = 0;
          if (!mB || !Sc) {
            Ic.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const pc = cB[0].knc().useRightHandedSystem ? 1 : -1;
          for (let cB = 0; cB < mB.length; cB += 3) sc.push("v " + mB[cB] * pc + " " + mB[cB + 1] + " " + mB[cB + 2]), yB++;
          if (null != ec)
            for (let cB = 0; cB < ec.length; cB += 3) sc.push("vn " + ec[cB] * pc + " " + ec[cB + 1] + " " + ec[cB + 2]);
          if (null != tB)
            for (let cB = 0; cB < tB.length; cB += 2) sc.push("vt " + tB[cB] + " " + tB[cB + 1]), zB++;
          const hc = ["", "", ""],
            aB = (nc.material || nc.knc().defaultMaterial)._getEffectiveOrientation(nc),
            [lc, Yc] = aB === rB.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let cB = 0; cB < Sc.length; cB += 3) {
            const Bc = [String(Sc[cB] + Mc), String(Sc[cB + lc] + Mc), String(Sc[cB + Yc] + Mc)],
              nc = [String(Sc[cB] + Pc), String(Sc[cB + lc] + Pc), String(Sc[cB + Yc] + Pc)],
              Vc = Bc,
              Ic = null != tB ? nc : hc,
              rB = null != ec ? Bc : hc;
            sc.push("f " + Vc[0] + "/" + Ic[0] + "/" + rB[0] + " " + Vc[1] + "/" + Ic[1] + "/" + rB[1] + " " + Vc[2] + "/" + Ic[2] + "/" + rB[2])
          }
          uc && Tc && nc.bakeTransformIntoVertices(Tc), Mc += yB, Pc += zB
        }
        return sc.join("\n")
      }
      static MTL(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const nc = [],
          Vc = cB.material;
        nc.push("newmtl " + Bc), nc.push("  Ns " + Vc.specularPower.toFixed(4)), nc.push("  Ni 1.5000"), nc.push("  d " + Vc.alpha.toFixed(4)), nc.push("  Tr 0.0000"), nc.push("  Tf 1.0000 1.0000 1.0000"), nc.push("  illum 2"), nc.push("  Ka " + Vc.ambientColor.r.toFixed(4) + " " + Vc.ambientColor.g.toFixed(4) + " " + Vc.ambientColor.b.toFixed(4)), nc.push("  Kd " + Vc.diffuseColor.r.toFixed(4) + " " + Vc.diffuseColor.g.toFixed(4) + " " + Vc.diffuseColor.b.toFixed(4)), nc.push("  Ks " + Vc.specularColor.r.toFixed(4) + " " + Vc.specularColor.g.toFixed(4) + " " + Vc.specularColor.b.toFixed(4)), nc.push("  Ke " + Vc.emissiveColor.r.toFixed(4) + " " + Vc.emissiveColor.g.toFixed(4) + " " + Vc.emissiveColor.b.toFixed(4));
        Vc.ambientTexture && nc.push("  map_Ka " + Vc.ambientTexture.name), Vc.diffuseTexture && nc.push("  map_Kd " + Vc.diffuseTexture.name), Vc.specularTexture && nc.push("  map_Ks " + Vc.specularTexture.name), Vc.bumpTexture && nc.push("  map_bump -imfchan z " + Vc.bumpTexture.name), Vc.opacityTexture && nc.push("  map_d " + Vc.opacityTexture.name);
        return nc.join("\n")
      }
    }
    var sc = 0,
      Mc = nc(39500);
    class Pc {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const cB in this.files) {
          const Bc = this.files[cB],
            nc = new Blob([Bc], {
              type: (0, Mc.d)(cB)
            });
          Ic.Tools.Download(nc, cB)
        }
      }
    }
    var qB = nc(39232),
      Oc = nc(39192),
      Tc = nc(39580),
      fc = nc(39201),
      mB = nc(37884),
      ec = nc(35780),
      tB = nc(35808),
      Sc = nc(35785);
    const yB = Sc.HighestCommonFactor,
      zB = {
        ...Sc,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: yB
      };
    var pc = nc(39745),
      hc = nc(39218),
      aB = nc(39550),
      lc = nc(39555),
      Yc = nc(39770);
    (0, Yc.RegisterDumpTools)();
    var Lc = nc(38035),
      gB = nc(38043),
      Uc = nc(37191),
      bB = nc(38158),
      Zc = nc(38493),
      Qc = nc(39741);
    let Cc = 0;
    const vB = (cB, Bc, nc, Vc) => {
        if (!cB[nc]) {
          const Ic = cB.useDelayedTextureLoading;
          cB.useDelayedTextureLoading = !1;
          const rB = cB._blockEntityCollection;
          cB._blockEntityCollection = !1;
          const uc = Zc.e.CreateFromBase64String(Bc, Vc + Cc++, cB, !0, !1, Zc.e.BILINEAR_SAMPLINGMODE);
          cB._blockEntityCollection = rB;
          const sc = cB.RV().getLoadedTexturesCache(),
            Mc = sc.indexOf(uc.getInternalTexture()); - 1 !== Mc && sc.splice(Mc, 1), uc.isRGBD = !0, uc.wrapU = Zc.e.CLAMP_ADDRESSMODE, uc.wrapV = Zc.e.CLAMP_ADDRESSMODE, cB[nc] = uc, cB.useDelayedTextureLoading = Ic, Qc.e.ExpandRGBDTexture(uc);
          const Pc = cB.RV().onContextRestoredObservable.add((() => {
            uc.isRGBD = !0;
            const Bc = cB.onBeforeRenderObservable.add((() => {
              uc.isReady() && (cB.onBeforeRenderObservable.remove(Bc), Qc.e.ExpandRGBDTexture(uc))
            }))
          }));
          cB.XBc.add((() => {
            cB.RV().onContextRestoredObservable.remove(Pc)
          }))
        }
        return cB[nc]
      },
      Dc = cB => vB(cB, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Nc = cB => vB(cB, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Ec = cB => vB(cB, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var oc = nc(38141),
      Wc = nc(35756),
      wc = nc(38194),
      kB = nc(38317),
      Xc = nc(38379);
    class Hc extends kB.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Fc = (() => {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc;
      let qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB = Xc.c,
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [];
      return cB = class extends zB {
        get useEnergyConservation() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set useEnergyConservation(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Lc.c)(this, nc, "f")
        }
        set useSmithVisibilityHeightCorrelated(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get useSphericalHarmonics() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set useSphericalHarmonics(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Lc.c)(this, Ic, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(cB) {
          (0, Lc.f)(this, Ic, cB, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Lc.c)(this, rB, "f")
        }
        set mixIblRadianceWithIrradiance(cB) {
          (0, Lc.f)(this, rB, cB, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Lc.c)(this, uc, "f")
        }
        set useLegacySpecularEnergyConservation(cB) {
          (0, Lc.f)(this, uc, cB, "f")
        }
        get baseDiffuseModel() {
          return (0, Lc.c)(this, sc, "f")
        }
        set baseDiffuseModel(cB) {
          (0, Lc.f)(this, sc, cB, "f")
        }
        get dielectricSpecularModel() {
          return (0, Lc.c)(this, Mc, "f")
        }
        set dielectricSpecularModel(cB) {
          (0, Lc.f)(this, Mc, cB, "f")
        }
        get conductorSpecularModel() {
          return (0, Lc.c)(this, Pc, "f")
        }
        set conductorSpecularModel(cB) {
          (0, Lc.f)(this, Pc, cB, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qB) {
          let Oc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qB, "PBRBRDF", 90, new Hc, Oc), this._useEnergyConservation = cB.DEFAULT_USE_ENERGY_CONSERVATION, Bc.set(this, (0, Lc.k)(this, pc, cB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Lc.k)(this, hc), cB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), nc.set(this, (0, Lc.k)(this, aB, cB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Lc.k)(this, lc), cB.DEFAULT_USE_SPHERICAL_HARMONICS), Vc.set(this, (0, Lc.k)(this, Yc, cB.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Lc.k)(this, Uc), cB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Ic.set(this, (0, Lc.k)(this, bB, cB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Lc.k)(this, Zc), cB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), rB.set(this, (0, Lc.k)(this, Qc, cB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Lc.k)(this, Cc), cB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), uc.set(this, (0, Lc.k)(this, vB, cB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Lc.k)(this, Dc), cB.DEFAULT_DIFFUSE_MODEL), sc.set(this, (0, Lc.k)(this, Nc, cB.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Lc.k)(this, Ec), cB.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Mc.set(this, (0, Lc.k)(this, oc, cB.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Lc.k)(this, Wc), cB.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Pc.set(this, (0, Lc.k)(this, wc, cB.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Lc.k)(this, kB), this._internalMarkAllSubMeshesAsMiscDirty = qB._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(cB) {
          cB.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, cB.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, cB.SPHERICAL_HARMONICS = this._useSphericalHarmonics, cB.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, cB.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, cB.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, cB.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, cB.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, cB.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, rB = new WeakMap, uc = new WeakMap, sc = new WeakMap, Mc = new WeakMap, Pc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(zB[Symbol.metadata] ?? null) : void 0;
        qB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], Oc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], Tc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], fc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], mB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], ec = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], tB = [(0, gB.M)("baseDiffuseModel"), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], Sc = [(0, gB.M)("dielectricSpecularModel"), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], yB = [(0, gB.M)("conductorSpecularModel"), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], (0, Lc.g)(cB, null, qB, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: cB => "useEnergyConservation" in cB,
            get: cB => cB.useEnergyConservation,
            set: (cB, Bc) => {
              cB.useEnergyConservation = Bc
            }
          },
          metadata: Bc
        }, pc, hc), (0, Lc.g)(cB, null, Oc, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: cB => "useSmithVisibilityHeightCorrelated" in cB,
            get: cB => cB.useSmithVisibilityHeightCorrelated,
            set: (cB, Bc) => {
              cB.useSmithVisibilityHeightCorrelated = Bc
            }
          },
          metadata: Bc
        }, aB, lc), (0, Lc.g)(cB, null, Tc, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: cB => "useSphericalHarmonics" in cB,
            get: cB => cB.useSphericalHarmonics,
            set: (cB, Bc) => {
              cB.useSphericalHarmonics = Bc
            }
          },
          metadata: Bc
        }, Yc, Uc), (0, Lc.g)(cB, null, fc, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: cB => "useSpecularGlossinessInputEnergyConservation" in cB,
            get: cB => cB.useSpecularGlossinessInputEnergyConservation,
            set: (cB, Bc) => {
              cB.useSpecularGlossinessInputEnergyConservation = Bc
            }
          },
          metadata: Bc
        }, bB, Zc), (0, Lc.g)(cB, null, mB, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: cB => "mixIblRadianceWithIrradiance" in cB,
            get: cB => cB.mixIblRadianceWithIrradiance,
            set: (cB, Bc) => {
              cB.mixIblRadianceWithIrradiance = Bc
            }
          },
          metadata: Bc
        }, Qc, Cc), (0, Lc.g)(cB, null, ec, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: cB => "useLegacySpecularEnergyConservation" in cB,
            get: cB => cB.useLegacySpecularEnergyConservation,
            set: (cB, Bc) => {
              cB.useLegacySpecularEnergyConservation = Bc
            }
          },
          metadata: Bc
        }, vB, Dc), (0, Lc.g)(cB, null, tB, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: cB => "baseDiffuseModel" in cB,
            get: cB => cB.baseDiffuseModel,
            set: (cB, Bc) => {
              cB.baseDiffuseModel = Bc
            }
          },
          metadata: Bc
        }, Nc, Ec), (0, Lc.g)(cB, null, Sc, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: cB => "dielectricSpecularModel" in cB,
            get: cB => cB.dielectricSpecularModel,
            set: (cB, Bc) => {
              cB.dielectricSpecularModel = Bc
            }
          },
          metadata: Bc
        }, oc, Wc), (0, Lc.g)(cB, null, yB, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: cB => "conductorSpecularModel" in cB,
            get: cB => cB.conductorSpecularModel,
            set: (cB, Bc) => {
              cB.conductorSpecularModel = Bc
            }
          },
          metadata: Bc
        }, wc, kB), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB.DEFAULT_USE_ENERGY_CONSERVATION = !0, cB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, cB.DEFAULT_USE_SPHERICAL_HARMONICS = !0, cB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, cB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, cB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, cB.DEFAULT_DIFFUSE_MODEL = 0, cB.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, cB.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, cB
    })();
    var Jc = nc(38306),
      jB = nc(35815),
      Rc = nc(38310),
      iB = nc(38162),
      Kc = nc(38370),
      xB = nc(38364),
      dc = nc(38374),
      Ac = nc(38358);
    class Gc extends kB.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let cn = (() => {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc;
      let qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc = Xc.c,
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [],
        wc = [],
        kB = [],
        Hc = [],
        Fc = [],
        Jc = [],
        Rc = [],
        iB = [],
        Kc = [],
        dc = [],
        cn = [],
        BB = [],
        nB = [],
        VB = [],
        IB = [],
        rn = [],
        uB = [],
        sB = [];
      return cB = class extends Yc {
        get isEnabled() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set isEnabled(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get indexOfRefraction() {
          return (0, Lc.c)(this, nc, "f")
        }
        set indexOfRefraction(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get texture() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set texture(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Lc.c)(this, Ic, "f")
        }
        set useRoughnessFromMainTexture(cB) {
          (0, Lc.f)(this, Ic, cB, "f")
        }
        get textureRoughness() {
          return (0, Lc.c)(this, rB, "f")
        }
        set textureRoughness(cB) {
          (0, Lc.f)(this, rB, cB, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Lc.c)(this, uc, "f")
        }
        set remapF0OnInterfaceChange(cB) {
          (0, Lc.f)(this, uc, cB, "f")
        }
        get bumpTexture() {
          return (0, Lc.c)(this, sc, "f")
        }
        set bumpTexture(cB) {
          (0, Lc.f)(this, sc, cB, "f")
        }
        get isTintEnabled() {
          return (0, Lc.c)(this, Mc, "f")
        }
        set isTintEnabled(cB) {
          (0, Lc.f)(this, Mc, cB, "f")
        }
        get tintTexture() {
          return (0, Lc.c)(this, Pc, "f")
        }
        set tintTexture(cB) {
          (0, Lc.f)(this, Pc, cB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qB) {
          let Oc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qB, "PBRClearCoat", 100, new Gc, Oc), this._isEnabled = !1, Bc.set(this, (0, Lc.k)(this, Uc, !1)), this.intensity = ((0, Lc.k)(this, bB), (0, Lc.k)(this, Zc, 1)), this.roughness = ((0, Lc.k)(this, Qc), (0, Lc.k)(this, Cc, 0)), this._indexOfRefraction = ((0, Lc.k)(this, vB), cB._DefaultIndexOfRefraction), nc.set(this, (0, Lc.k)(this, Dc, cB._DefaultIndexOfRefraction)), this._texture = ((0, Lc.k)(this, Nc), null), Vc.set(this, (0, Lc.k)(this, Ec, null)), this._useRoughnessFromMainTexture = ((0, Lc.k)(this, oc), !0), Ic.set(this, (0, Lc.k)(this, Wc, !0)), this._textureRoughness = ((0, Lc.k)(this, wc), null), rB.set(this, (0, Lc.k)(this, kB, null)), this._remapF0OnInterfaceChange = ((0, Lc.k)(this, Hc), !0), uc.set(this, (0, Lc.k)(this, Fc, !0)), this._bumpTexture = ((0, Lc.k)(this, Jc), null), sc.set(this, (0, Lc.k)(this, Rc, null)), this._isTintEnabled = ((0, Lc.k)(this, iB), !1), Mc.set(this, (0, Lc.k)(this, Kc, !1)), this.tintColor = ((0, Lc.k)(this, dc), (0, Lc.k)(this, cn, jB.e.White())), this.tintColorAtDistance = ((0, Lc.k)(this, BB), (0, Lc.k)(this, nB, 1)), this.tintThickness = ((0, Lc.k)(this, VB), (0, Lc.k)(this, IB, 1)), this._tintTexture = ((0, Lc.k)(this, rn), null), Pc.set(this, (0, Lc.k)(this, uB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Lc.k)(this, sB), this._internalMarkAllSubMeshesAsTexturesDirty = qB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(cB, Bc, nc) {
          if (!this._isEnabled) return !0;
          const Vc = this._material._disableBumpMap;
          if (cB._areTexturesDirty && Bc.texturesEnabled) {
            if (this._texture && xB.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && xB.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (nc.getCaps().standardDerivatives && this._bumpTexture && xB.c.ClearCoatBumpTextureEnabled && !Vc && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && xB.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Bc, nc) {
          this._isEnabled ? (Bc.CLEARCOAT = !0, Bc.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Bc.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Bc._areTexturesDirty && nc.texturesEnabled && (this._texture && xB.c.ClearCoatTextureEnabled ? (0, Ac.$)(this._texture, Bc, "CLEARCOAT_TEXTURE") : Bc.CLEARCOAT_TEXTURE = !1, this._textureRoughness && xB.c.ClearCoatTextureEnabled ? (0, Ac.$)(this._textureRoughness, Bc, "CLEARCOAT_TEXTURE_ROUGHNESS") : Bc.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && xB.c.ClearCoatBumpTextureEnabled ? (0, Ac.$)(this._bumpTexture, Bc, "CLEARCOAT_BUMP") : Bc.CLEARCOAT_BUMP = !1, Bc.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === cB._DefaultIndexOfRefraction, this._isTintEnabled ? (Bc.CLEARCOAT_TINT = !0, this._tintTexture && xB.c.ClearCoatTintTextureEnabled ? ((0, Ac.$)(this._tintTexture, Bc, "CLEARCOAT_TINT_TEXTURE"), Bc.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Bc.CLEARCOAT_TINT_TEXTURE = !1) : (Bc.CLEARCOAT_TINT = !1, Bc.CLEARCOAT_TINT_TEXTURE = !1))) : (Bc.CLEARCOAT = !1, Bc.CLEARCOAT_TEXTURE = !1, Bc.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Bc.CLEARCOAT_BUMP = !1, Bc.CLEARCOAT_TINT = !1, Bc.CLEARCOAT_TINT_TEXTURE = !1, Bc.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Bc.CLEARCOAT_DEFAULTIOR = !1, Bc.CLEARCOAT_TEXTUREDIRECTUV = 0, Bc.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Bc.CLEARCOAT_BUMPDIRECTUV = 0, Bc.CLEARCOAT_REMAP_F0 = !1, Bc.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Bc.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(cB, Bc, nc, Vc) {
          if (!this._isEnabled) return;
          const Ic = Vc.materialDefines,
            rB = this._material.isFrozen,
            uc = this._material._disableBumpMap,
            sc = this._material._invertNormalMapX,
            Mc = this._material._invertNormalMapY;
          if (!cB.useUbo || !rB || !cB.isSync) {
            (this._texture || this._textureRoughness) && xB.c.ClearCoatTextureEnabled && (cB.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ac.B)(this._texture, cB, "clearCoat"), this._textureRoughness && !Ic.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ac.B)(this._textureRoughness, cB, "clearCoatRoughness")), this._bumpTexture && nc.getCaps().standardDerivatives && xB.c.ClearCoatTextureEnabled && !uc && (cB.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Ac.B)(this._bumpTexture, cB, "clearCoatBump"), Bc._mirroredCameraPosition ? cB.updateFloat2("vClearCoatTangentSpaceParams", sc ? 1 : -1, Mc ? 1 : -1) : cB.updateFloat2("vClearCoatTangentSpaceParams", sc ? -1 : 1, Mc ? -1 : 1)), this._tintTexture && xB.c.ClearCoatTintTextureEnabled && (cB.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Ac.B)(this._tintTexture, cB, "clearCoatTint")), cB.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Vc = 1 - this._indexOfRefraction,
              rB = 1 + this._indexOfRefraction,
              Pc = Math.pow(-Vc / rB, 2),
              qB = 1 / this._indexOfRefraction;
            cB.updateFloat4("vClearCoatRefractionParams", Pc, qB, Vc, rB), this._isTintEnabled && (cB.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), cB.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Bc.texturesEnabled && (this._texture && xB.c.ClearCoatTextureEnabled && cB.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Ic.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && xB.c.ClearCoatTextureEnabled && cB.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && nc.getCaps().standardDerivatives && xB.c.ClearCoatBumpTextureEnabled && !uc && cB.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && xB.c.ClearCoatTintTextureEnabled && cB.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(cB) {
          return this._texture === cB || (this._textureRoughness === cB || (this._bumpTexture === cB || this._tintTexture === cB))
        }
        getActiveTextures(cB) {
          this._texture && cB.push(this._texture), this._textureRoughness && cB.push(this._textureRoughness), this._bumpTexture && cB.push(this._bumpTexture), this._tintTexture && cB.push(this._tintTexture)
        }
        getAnimatables(cB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && cB.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && cB.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && cB.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && cB.push(this._tintTexture)
        }
        dispose(cB) {
          cB && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(cB, Bc, nc) {
          return cB.CLEARCOAT_BUMP && Bc.addFallback(nc++, "CLEARCOAT_BUMP"), cB.CLEARCOAT_TINT && Bc.addFallback(nc++, "CLEARCOAT_TINT"), cB.CLEARCOAT && Bc.addFallback(nc++, "CLEARCOAT"), nc
        }
        getSamplers(cB) {
          cB.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, rB = new WeakMap, uc = new WeakMap, sc = new WeakMap, Mc = new WeakMap, Pc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yc[Symbol.metadata] ?? null) : void 0;
        qB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, gB.M)()], Tc = [(0, gB.M)()], fc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, gB.o)()], hc = [(0, gB.M)()], aB = [(0, gB.M)()], lc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], (0, Lc.g)(cB, null, qB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: Bc
        }, Uc, bB), (0, Lc.g)(cB, null, fc, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: cB => "indexOfRefraction" in cB,
            get: cB => cB.indexOfRefraction,
            set: (cB, Bc) => {
              cB.indexOfRefraction = Bc
            }
          },
          metadata: Bc
        }, Dc, Nc), (0, Lc.g)(cB, null, mB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: cB => "texture" in cB,
            get: cB => cB.texture,
            set: (cB, Bc) => {
              cB.texture = Bc
            }
          },
          metadata: Bc
        }, Ec, oc), (0, Lc.g)(cB, null, ec, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRoughnessFromMainTexture" in cB,
            get: cB => cB.useRoughnessFromMainTexture,
            set: (cB, Bc) => {
              cB.useRoughnessFromMainTexture = Bc
            }
          },
          metadata: Bc
        }, Wc, wc), (0, Lc.g)(cB, null, tB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "textureRoughness" in cB,
            get: cB => cB.textureRoughness,
            set: (cB, Bc) => {
              cB.textureRoughness = Bc
            }
          },
          metadata: Bc
        }, kB, Hc), (0, Lc.g)(cB, null, Sc, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: cB => "remapF0OnInterfaceChange" in cB,
            get: cB => cB.remapF0OnInterfaceChange,
            set: (cB, Bc) => {
              cB.remapF0OnInterfaceChange = Bc
            }
          },
          metadata: Bc
        }, Fc, Jc), (0, Lc.g)(cB, null, yB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "bumpTexture" in cB,
            get: cB => cB.bumpTexture,
            set: (cB, Bc) => {
              cB.bumpTexture = Bc
            }
          },
          metadata: Bc
        }, Rc, iB), (0, Lc.g)(cB, null, zB, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isTintEnabled" in cB,
            get: cB => cB.isTintEnabled,
            set: (cB, Bc) => {
              cB.isTintEnabled = Bc
            }
          },
          metadata: Bc
        }, Kc, dc), (0, Lc.g)(cB, null, lc, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintTexture" in cB,
            get: cB => cB.tintTexture,
            set: (cB, Bc) => {
              cB.tintTexture = Bc
            }
          },
          metadata: Bc
        }, uB, sB), (0, Lc.g)(null, null, Oc, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensity" in cB,
            get: cB => cB.intensity,
            set: (cB, Bc) => {
              cB.intensity = Bc
            }
          },
          metadata: Bc
        }, Zc, Qc), (0, Lc.g)(null, null, Tc, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "roughness" in cB,
            get: cB => cB.roughness,
            set: (cB, Bc) => {
              cB.roughness = Bc
            }
          },
          metadata: Bc
        }, Cc, vB), (0, Lc.g)(null, null, pc, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintColor" in cB,
            get: cB => cB.tintColor,
            set: (cB, Bc) => {
              cB.tintColor = Bc
            }
          },
          metadata: Bc
        }, cn, BB), (0, Lc.g)(null, null, hc, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintColorAtDistance" in cB,
            get: cB => cB.tintColorAtDistance,
            set: (cB, Bc) => {
              cB.tintColorAtDistance = Bc
            }
          },
          metadata: Bc
        }, nB, VB), (0, Lc.g)(null, null, aB, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintThickness" in cB,
            get: cB => cB.tintThickness,
            set: (cB, Bc) => {
              cB.tintThickness = Bc
            }
          },
          metadata: Bc
        }, IB, rn), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB._DefaultIndexOfRefraction = 1.5, cB
    })();
    class BB extends kB.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let nB = (() => {
      var cB, Bc, nc, Vc;
      let Ic, rB, uc, sc, Mc, Pc, qB, Oc = Xc.c,
        Tc = [],
        fc = [],
        mB = [],
        ec = [],
        tB = [],
        Sc = [],
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Uc = [];
      return cB = class extends Oc {
        get isEnabled() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set isEnabled(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get texture() {
          return (0, Lc.c)(this, nc, "f")
        }
        set texture(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get thicknessTexture() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set thicknessTexture(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Ic) {
          let rB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ic, "PBRIridescence", 110, new BB, rB), this._isEnabled = !1, Bc.set(this, (0, Lc.k)(this, Tc, !1)), this.intensity = ((0, Lc.k)(this, fc), (0, Lc.k)(this, mB, 1)), this.minimumThickness = ((0, Lc.k)(this, ec), (0, Lc.k)(this, tB, cB._DefaultMinimumThickness)), this.maximumThickness = ((0, Lc.k)(this, Sc), (0, Lc.k)(this, yB, cB._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Lc.k)(this, zB), (0, Lc.k)(this, pc, cB._DefaultIndexOfRefraction)), this._texture = ((0, Lc.k)(this, hc), null), nc.set(this, (0, Lc.k)(this, aB, null)), this._thicknessTexture = ((0, Lc.k)(this, lc), null), Vc.set(this, (0, Lc.k)(this, Yc, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Lc.k)(this, Uc), this._internalMarkAllSubMeshesAsTexturesDirty = Ic._dirtyCallbacks[1]
        }
        isReadyForSubMesh(cB, Bc) {
          if (!this._isEnabled) return !0;
          if (cB._areTexturesDirty && Bc.texturesEnabled) {
            if (this._texture && xB.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && xB.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(cB, Bc) {
          this._isEnabled ? (cB.IRIDESCENCE = !0, cB._areTexturesDirty && Bc.texturesEnabled && (this._texture && xB.c.IridescenceTextureEnabled ? (0, Ac.$)(this._texture, cB, "IRIDESCENCE_TEXTURE") : cB.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && xB.c.IridescenceTextureEnabled ? (0, Ac.$)(this._thicknessTexture, cB, "IRIDESCENCE_THICKNESS_TEXTURE") : cB.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (cB.IRIDESCENCE = !1, cB.IRIDESCENCE_TEXTURE = !1, cB.IRIDESCENCE_THICKNESS_TEXTURE = !1, cB.IRIDESCENCE_TEXTUREDIRECTUV = 0, cB.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(cB, Bc) {
          if (!this._isEnabled) return;
          const nc = this._material.isFrozen;
          cB.useUbo && nc && cB.isSync || ((this._texture || this._thicknessTexture) && xB.c.IridescenceTextureEnabled && (cB.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Ac.B)(this._texture, cB, "iridescence"), this._thicknessTexture && (0, Ac.B)(this._thicknessTexture, cB, "iridescenceThickness")), cB.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Bc.texturesEnabled && (this._texture && xB.c.IridescenceTextureEnabled && cB.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && xB.c.IridescenceTextureEnabled && cB.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(cB) {
          return this._texture === cB || this._thicknessTexture === cB
        }
        getActiveTextures(cB) {
          this._texture && cB.push(this._texture), this._thicknessTexture && cB.push(this._thicknessTexture)
        }
        getAnimatables(cB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && cB.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && cB.push(this._thicknessTexture)
        }
        dispose(cB) {
          cB && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(cB, Bc, nc) {
          return cB.IRIDESCENCE && Bc.addFallback(nc++, "IRIDESCENCE"), nc
        }
        getSamplers(cB) {
          cB.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oc[Symbol.metadata] ?? null) : void 0;
        Ic = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, gB.M)()], uc = [(0, gB.M)()], sc = [(0, gB.M)()], Mc = [(0, gB.M)()], Pc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], (0, Lc.g)(cB, null, Ic, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: Bc
        }, Tc, fc), (0, Lc.g)(cB, null, Pc, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: cB => "texture" in cB,
            get: cB => cB.texture,
            set: (cB, Bc) => {
              cB.texture = Bc
            }
          },
          metadata: Bc
        }, aB, lc), (0, Lc.g)(cB, null, qB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "thicknessTexture" in cB,
            get: cB => cB.thicknessTexture,
            set: (cB, Bc) => {
              cB.thicknessTexture = Bc
            }
          },
          metadata: Bc
        }, Yc, Uc), (0, Lc.g)(null, null, rB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensity" in cB,
            get: cB => cB.intensity,
            set: (cB, Bc) => {
              cB.intensity = Bc
            }
          },
          metadata: Bc
        }, mB, ec), (0, Lc.g)(null, null, uc, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: cB => "minimumThickness" in cB,
            get: cB => cB.minimumThickness,
            set: (cB, Bc) => {
              cB.minimumThickness = Bc
            }
          },
          metadata: Bc
        }, tB, Sc), (0, Lc.g)(null, null, sc, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: cB => "maximumThickness" in cB,
            get: cB => cB.maximumThickness,
            set: (cB, Bc) => {
              cB.maximumThickness = Bc
            }
          },
          metadata: Bc
        }, yB, zB), (0, Lc.g)(null, null, Mc, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: cB => "indexOfRefraction" in cB,
            get: cB => cB.indexOfRefraction,
            set: (cB, Bc) => {
              cB.indexOfRefraction = Bc
            }
          },
          metadata: Bc
        }, pc, hc), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB._DefaultMinimumThickness = 100, cB._DefaultMaximumThickness = 400, cB._DefaultIndexOfRefraction = 1.3, cB
    })();
    class VB extends kB.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let IB = (() => {
      var cB, Bc, nc, Vc;
      let Ic, rB, uc, sc, Mc, Pc = Xc.c,
        qB = [],
        Oc = [],
        Tc = [],
        fc = [],
        mB = [],
        ec = [],
        tB = [],
        Sc = [],
        yB = [],
        zB = [];
      return cB = class extends Pc {
        get isEnabled() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set isEnabled(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        set angle(cB) {
          this.direction.x = Math.cos(cB), this.direction.y = Math.sin(cB)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Lc.c)(this, nc, "f")
        }
        set texture(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get legacy() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set legacy(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
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
        constructor(cB) {
          let Ic = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(cB, "PBRAnisotropic", 110, new VB, Ic), this._isEnabled = !1, Bc.set(this, (0, Lc.k)(this, qB, !1)), this.intensity = ((0, Lc.k)(this, Oc), (0, Lc.k)(this, Tc, 1)), this.direction = ((0, Lc.k)(this, fc), (0, Lc.k)(this, mB, new Wc.m(1, 0))), this._texture = ((0, Lc.k)(this, ec), null), nc.set(this, (0, Lc.k)(this, tB, null)), this._legacy = ((0, Lc.k)(this, Sc), !1), Vc.set(this, (0, Lc.k)(this, yB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Lc.k)(this, zB), this._internalMarkAllSubMeshesAsTexturesDirty = cB._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = cB._dirtyCallbacks[16]
        }
        isReadyForSubMesh(cB, Bc) {
          return !this._isEnabled || !(cB._areTexturesDirty && Bc.texturesEnabled && this._texture && xB.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(cB, Bc, nc) {
          this._isEnabled ? (cB.ANISOTROPIC = this._isEnabled, this._isEnabled && !nc.isVerticesDataPresent(wc.i.TangentKind) && (cB._needUVs = !0, cB.MAINUV1 = !0), cB._areTexturesDirty && Bc.texturesEnabled && (this._texture && xB.c.AnisotropicTextureEnabled ? (0, Ac.$)(this._texture, cB, "ANISOTROPIC_TEXTURE") : cB.ANISOTROPIC_TEXTURE = !1), cB._areMiscDirty && (cB.ANISOTROPIC_LEGACY = this._legacy)) : (cB.ANISOTROPIC = !1, cB.ANISOTROPIC_TEXTURE = !1, cB.ANISOTROPIC_TEXTUREDIRECTUV = 0, cB.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(cB, Bc) {
          if (!this._isEnabled) return;
          const nc = this._material.isFrozen;
          cB.useUbo && nc && cB.isSync || (this._texture && xB.c.AnisotropicTextureEnabled && (cB.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Ac.B)(this._texture, cB, "anisotropy")), cB.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Bc.texturesEnabled && this._texture && xB.c.AnisotropicTextureEnabled && cB.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(cB) {
          return this._texture === cB
        }
        getActiveTextures(cB) {
          this._texture && cB.push(this._texture)
        }
        getAnimatables(cB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && cB.push(this._texture)
        }
        dispose(cB) {
          cB && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(cB, Bc, nc) {
          return cB.ANISOTROPIC && Bc.addFallback(nc++, "ANISOTROPIC"), nc
        }
        getSamplers(cB) {
          cB.push("anisotropySampler")
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
        parse(cB, Bc, nc) {
          super.parse(cB, Bc, nc), void 0 === cB.legacy && (this.legacy = !0)
        }
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pc[Symbol.metadata] ?? null) : void 0;
        Ic = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, gB.M)()], uc = [(0, gB.J)()], sc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], (0, Lc.g)(cB, null, Ic, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: Bc
        }, qB, Oc), (0, Lc.g)(cB, null, sc, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: cB => "texture" in cB,
            get: cB => cB.texture,
            set: (cB, Bc) => {
              cB.texture = Bc
            }
          },
          metadata: Bc
        }, tB, Sc), (0, Lc.g)(cB, null, Mc, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: cB => "legacy" in cB,
            get: cB => cB.legacy,
            set: (cB, Bc) => {
              cB.legacy = Bc
            }
          },
          metadata: Bc
        }, yB, zB), (0, Lc.g)(null, null, rB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensity" in cB,
            get: cB => cB.intensity,
            set: (cB, Bc) => {
              cB.intensity = Bc
            }
          },
          metadata: Bc
        }, Tc, fc), (0, Lc.g)(null, null, uc, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: cB => "direction" in cB,
            get: cB => cB.direction,
            set: (cB, Bc) => {
              cB.direction = Bc
            }
          },
          metadata: Bc
        }, mB, ec), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB
    })();
    class rn extends kB.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let uB = (() => {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc;
      let Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc = Xc.c,
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Uc = [],
        bB = [],
        Zc = [],
        Qc = [],
        Cc = [],
        vB = [],
        Dc = [],
        Nc = [],
        Ec = [],
        oc = [],
        Wc = [];
      return cB = class extends Sc {
        get isEnabled() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set isEnabled(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Lc.c)(this, nc, "f")
        }
        set linkSheenWithAlbedo(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get texture() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set texture(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Lc.c)(this, Ic, "f")
        }
        set useRoughnessFromMainTexture(cB) {
          (0, Lc.f)(this, Ic, cB, "f")
        }
        get roughness() {
          return (0, Lc.c)(this, rB, "f")
        }
        set roughness(cB) {
          (0, Lc.f)(this, rB, cB, "f")
        }
        get textureRoughness() {
          return (0, Lc.c)(this, uc, "f")
        }
        set textureRoughness(cB) {
          (0, Lc.f)(this, uc, cB, "f")
        }
        get albedoScaling() {
          return (0, Lc.c)(this, sc, "f")
        }
        set albedoScaling(cB) {
          (0, Lc.f)(this, sc, cB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(cB) {
          let Mc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(cB, "Sheen", 120, new rn, Mc), this._isEnabled = !1, Bc.set(this, (0, Lc.k)(this, yB, !1)), this._linkSheenWithAlbedo = ((0, Lc.k)(this, zB), !1), nc.set(this, (0, Lc.k)(this, pc, !1)), this.intensity = ((0, Lc.k)(this, hc), (0, Lc.k)(this, aB, 1)), this.color = ((0, Lc.k)(this, lc), (0, Lc.k)(this, Yc, jB.e.White())), this._texture = ((0, Lc.k)(this, Uc), null), Vc.set(this, (0, Lc.k)(this, bB, null)), this._useRoughnessFromMainTexture = ((0, Lc.k)(this, Zc), !0), Ic.set(this, (0, Lc.k)(this, Qc, !0)), this._roughness = ((0, Lc.k)(this, Cc), null), rB.set(this, (0, Lc.k)(this, vB, null)), this._textureRoughness = ((0, Lc.k)(this, Dc), null), uc.set(this, (0, Lc.k)(this, Nc, null)), this._albedoScaling = ((0, Lc.k)(this, Ec), !1), sc.set(this, (0, Lc.k)(this, oc, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Lc.k)(this, Wc), this._internalMarkAllSubMeshesAsTexturesDirty = cB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(cB, Bc) {
          if (!this._isEnabled) return !0;
          if (cB._areTexturesDirty && Bc.texturesEnabled) {
            if (this._texture && xB.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && xB.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(cB, Bc) {
          this._isEnabled ? (cB.SHEEN = !0, cB.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, cB.SHEEN_ROUGHNESS = null !== this._roughness, cB.SHEEN_ALBEDOSCALING = this._albedoScaling, cB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, cB._areTexturesDirty && Bc.texturesEnabled && (this._texture && xB.c.SheenTextureEnabled ? ((0, Ac.$)(this._texture, cB, "SHEEN_TEXTURE"), cB.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : cB.SHEEN_TEXTURE = !1, this._textureRoughness && xB.c.SheenTextureEnabled ? (0, Ac.$)(this._textureRoughness, cB, "SHEEN_TEXTURE_ROUGHNESS") : cB.SHEEN_TEXTURE_ROUGHNESS = !1)) : (cB.SHEEN = !1, cB.SHEEN_TEXTURE = !1, cB.SHEEN_TEXTURE_ROUGHNESS = !1, cB.SHEEN_LINKWITHALBEDO = !1, cB.SHEEN_ROUGHNESS = !1, cB.SHEEN_ALBEDOSCALING = !1, cB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, cB.SHEEN_GAMMATEXTURE = !1, cB.SHEEN_TEXTUREDIRECTUV = 0, cB.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(cB, Bc, nc, Vc) {
          if (!this._isEnabled) return;
          const Ic = Vc.materialDefines,
            rB = this._material.isFrozen;
          cB.useUbo && rB && cB.isSync || ((this._texture || this._textureRoughness) && xB.c.SheenTextureEnabled && (cB.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ac.B)(this._texture, cB, "sheen"), this._textureRoughness && !Ic.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ac.B)(this._textureRoughness, cB, "sheenRoughness")), cB.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && cB.updateFloat("vSheenRoughness", this._roughness)), Bc.texturesEnabled && (this._texture && xB.c.SheenTextureEnabled && cB.setTexture("sheenSampler", this._texture), this._textureRoughness && !Ic.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && xB.c.SheenTextureEnabled && cB.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(cB) {
          return this._texture === cB || this._textureRoughness === cB
        }
        getActiveTextures(cB) {
          this._texture && cB.push(this._texture), this._textureRoughness && cB.push(this._textureRoughness)
        }
        getAnimatables(cB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && cB.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && cB.push(this._textureRoughness)
        }
        dispose(cB) {
          cB && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(cB, Bc, nc) {
          return cB.SHEEN && Bc.addFallback(nc++, "SHEEN"), nc
        }
        getSamplers(cB) {
          cB.push("sheenSampler", "sheenRoughnessSampler")
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
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, rB = new WeakMap, uc = new WeakMap, sc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sc[Symbol.metadata] ?? null) : void 0;
        Mc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, gB.M)()], Oc = [(0, gB.o)()], Tc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], fc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], (0, Lc.g)(cB, null, Mc, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: Bc
        }, yB, zB), (0, Lc.g)(cB, null, Pc, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: cB => "linkSheenWithAlbedo" in cB,
            get: cB => cB.linkSheenWithAlbedo,
            set: (cB, Bc) => {
              cB.linkSheenWithAlbedo = Bc
            }
          },
          metadata: Bc
        }, pc, hc), (0, Lc.g)(cB, null, Tc, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: cB => "texture" in cB,
            get: cB => cB.texture,
            set: (cB, Bc) => {
              cB.texture = Bc
            }
          },
          metadata: Bc
        }, bB, Zc), (0, Lc.g)(cB, null, fc, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRoughnessFromMainTexture" in cB,
            get: cB => cB.useRoughnessFromMainTexture,
            set: (cB, Bc) => {
              cB.useRoughnessFromMainTexture = Bc
            }
          },
          metadata: Bc
        }, Qc, Cc), (0, Lc.g)(cB, null, mB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "roughness" in cB,
            get: cB => cB.roughness,
            set: (cB, Bc) => {
              cB.roughness = Bc
            }
          },
          metadata: Bc
        }, vB, Dc), (0, Lc.g)(cB, null, ec, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "textureRoughness" in cB,
            get: cB => cB.textureRoughness,
            set: (cB, Bc) => {
              cB.textureRoughness = Bc
            }
          },
          metadata: Bc
        }, Nc, Ec), (0, Lc.g)(cB, null, tB, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: cB => "albedoScaling" in cB,
            get: cB => cB.albedoScaling,
            set: (cB, Bc) => {
              cB.albedoScaling = Bc
            }
          },
          metadata: Bc
        }, oc, Wc), (0, Lc.g)(null, null, qB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "intensity" in cB,
            get: cB => cB.intensity,
            set: (cB, Bc) => {
              cB.intensity = Bc
            }
          },
          metadata: Bc
        }, aB, lc), (0, Lc.g)(null, null, Oc, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: cB => "color" in cB,
            get: cB => cB.color,
            set: (cB, Bc) => {
              cB.color = Bc
            }
          },
          metadata: Bc
        }, Yc, Uc), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB
    })();
    class sB extends kB.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let MB = (() => {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB;
      let Sc, yB, zB, pc, hc, aB, lc, Yc, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, wc, kB, Hc, Fc, Jc, Rc, iB, Kc, dc, Gc, cn, BB, nB = Xc.c,
        VB = [],
        IB = [],
        rn = [],
        uB = [],
        MB = [],
        PB = [],
        qn = [],
        OB = [],
        TB = [],
        fB = [],
        mn = [],
        eB = [],
        tn = [],
        SB = [],
        yn = [],
        zn = [],
        pB = [],
        hB = [],
        an = [],
        lB = [],
        YB = [],
        LB = [],
        gn = [],
        UB = [],
        bn = [],
        ZB = [],
        QB = [],
        CB = [],
        vn = [],
        DB = [],
        NB = [],
        EB = [],
        oB = [],
        WB = [],
        wB = [],
        kn = [],
        XB = [],
        HB = [],
        FB = [],
        JB = [],
        jn = [],
        RB = [],
        KB = [],
        xn = [],
        dB = [],
        AB = [],
        GB = [],
        cV = [],
        Bn = [],
        nn = [],
        Vn = [],
        In = [],
        rV = [],
        un = [],
        sn = [],
        Mn = [],
        Pn = [],
        qV = [],
        On = [],
        Tn = [];
      return cB = class extends nB {
        get isRefractionEnabled() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set isRefractionEnabled(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Lc.c)(this, nc, "f")
        }
        set isTranslucencyEnabled(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get isDispersionEnabled() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set isDispersionEnabled(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        get isScatteringEnabled() {
          return (0, Lc.c)(this, Ic, "f")
        }
        set isScatteringEnabled(cB) {
          (0, Lc.f)(this, Ic, cB, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(cB) {
          this._scene.enableSubSurfaceForPrePass() && cB && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(cB))
        }
        get useAlbedoToTintRefraction() {
          return (0, Lc.c)(this, rB, "f")
        }
        set useAlbedoToTintRefraction(cB) {
          (0, Lc.f)(this, rB, cB, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Lc.c)(this, uc, "f")
        }
        set useAlbedoToTintTranslucency(cB) {
          (0, Lc.f)(this, uc, cB, "f")
        }
        get thicknessTexture() {
          return (0, Lc.c)(this, sc, "f")
        }
        set thicknessTexture(cB) {
          (0, Lc.f)(this, sc, cB, "f")
        }
        get refractionTexture() {
          return (0, Lc.c)(this, Mc, "f")
        }
        set refractionTexture(cB) {
          (0, Lc.f)(this, Mc, cB, "f")
        }
        get indexOfRefraction() {
          return (0, Lc.c)(this, Pc, "f")
        }
        set indexOfRefraction(cB) {
          (0, Lc.f)(this, Pc, cB, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(cB) {
          const Bc = cB >= 1 ? cB : -1;
          this._volumeIndexOfRefraction !== Bc && (this._volumeIndexOfRefraction = Bc, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Lc.c)(this, qB, "f")
        }
        set invertRefractionY(cB) {
          (0, Lc.f)(this, qB, cB, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Lc.c)(this, Oc, "f")
        }
        set linkRefractionWithTransparency(cB) {
          (0, Lc.f)(this, Oc, cB, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Lc.c)(this, Tc, "f")
        }
        set useMaskFromThicknessTexture(cB) {
          (0, Lc.f)(this, Tc, cB, "f")
        }
        get refractionIntensityTexture() {
          return (0, Lc.c)(this, fc, "f")
        }
        set refractionIntensityTexture(cB) {
          (0, Lc.f)(this, fc, cB, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Lc.c)(this, mB, "f")
        }
        set translucencyIntensityTexture(cB) {
          (0, Lc.f)(this, mB, cB, "f")
        }
        get translucencyColorTexture() {
          return (0, Lc.c)(this, ec, "f")
        }
        set translucencyColorTexture(cB) {
          (0, Lc.f)(this, ec, cB, "f")
        }
        get useGltfStyleTextures() {
          return (0, Lc.c)(this, tB, "f")
        }
        set useGltfStyleTextures(cB) {
          (0, Lc.f)(this, tB, cB, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(cB) {
          this.legacyTranslucency = cB
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
        constructor(Sc) {
          let yB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Sc, "PBRSubSurface", 130, new sB, yB), this._isRefractionEnabled = !1, Bc.set(this, (0, Lc.k)(this, VB, !1)), this._isTranslucencyEnabled = ((0, Lc.k)(this, IB), !1), nc.set(this, (0, Lc.k)(this, rn, !1)), this._isDispersionEnabled = ((0, Lc.k)(this, uB), !1), Vc.set(this, (0, Lc.k)(this, MB, !1)), this._isScatteringEnabled = ((0, Lc.k)(this, PB), !1), Ic.set(this, (0, Lc.k)(this, qn, !1)), this._scatteringDiffusionProfileIndex = ((0, Lc.k)(this, OB), (0, Lc.k)(this, TB, 0)), this.refractionIntensity = ((0, Lc.k)(this, fB), (0, Lc.k)(this, mn, 1)), this.translucencyIntensity = ((0, Lc.k)(this, eB), (0, Lc.k)(this, tn, 1)), this._useAlbedoToTintRefraction = ((0, Lc.k)(this, SB), !1), rB.set(this, (0, Lc.k)(this, yn, !1)), this._useAlbedoToTintTranslucency = ((0, Lc.k)(this, zn), !1), uc.set(this, (0, Lc.k)(this, pB, !1)), this._thicknessTexture = ((0, Lc.k)(this, hB), null), sc.set(this, (0, Lc.k)(this, an, null)), this._refractionTexture = ((0, Lc.k)(this, lB), null), Mc.set(this, (0, Lc.k)(this, YB, null)), this._indexOfRefraction = ((0, Lc.k)(this, LB), 1.5), Pc.set(this, (0, Lc.k)(this, gn, 1.5)), this._volumeIndexOfRefraction = ((0, Lc.k)(this, UB), (0, Lc.k)(this, bn, -1)), this._invertRefractionY = ((0, Lc.k)(this, ZB), !1), qB.set(this, (0, Lc.k)(this, QB, !1)), this._linkRefractionWithTransparency = ((0, Lc.k)(this, CB), !1), Oc.set(this, (0, Lc.k)(this, vn, !1)), this.minimumThickness = ((0, Lc.k)(this, DB), (0, Lc.k)(this, NB, 0)), this.maximumThickness = ((0, Lc.k)(this, EB), (0, Lc.k)(this, oB, 1)), this.useThicknessAsDepth = ((0, Lc.k)(this, WB), (0, Lc.k)(this, wB, !1)), this.tintColor = ((0, Lc.k)(this, kn), (0, Lc.k)(this, XB, jB.e.White())), this.tintColorAtDistance = ((0, Lc.k)(this, HB), (0, Lc.k)(this, FB, 1)), this.dispersion = ((0, Lc.k)(this, JB), (0, Lc.k)(this, jn, 0)), this.diffusionDistance = ((0, Lc.k)(this, RB), (0, Lc.k)(this, KB, jB.e.White())), this._useMaskFromThicknessTexture = ((0, Lc.k)(this, xn), !1), Tc.set(this, (0, Lc.k)(this, dB, !1)), this._refractionIntensityTexture = ((0, Lc.k)(this, AB), null), fc.set(this, (0, Lc.k)(this, GB, null)), this._translucencyIntensityTexture = ((0, Lc.k)(this, cV), null), mB.set(this, (0, Lc.k)(this, Bn, null)), this.translucencyColor = ((0, Lc.k)(this, nn), (0, Lc.k)(this, Vn, null)), this._translucencyColorTexture = ((0, Lc.k)(this, In), null), ec.set(this, (0, Lc.k)(this, rV, null)), this._useGltfStyleTextures = ((0, Lc.k)(this, un), !0), tB.set(this, (0, Lc.k)(this, sn, !0)), this.applyAlbedoAfterSubSurface = ((0, Lc.k)(this, Mn), (0, Lc.k)(this, Pn, cB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Lc.k)(this, qV), (0, Lc.k)(this, On, cB.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Lc.k)(this, Tn), this._scene = Sc.knc(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Sc._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Sc._dirtyCallbacks[32]
        }
        isReadyForSubMesh(cB, Bc) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (cB._areTexturesDirty && Bc.texturesEnabled) {
            if (this._thicknessTexture && xB.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && xB.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && xB.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && xB.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const cB = this._getRefractionTexture(Bc);
            if (cB && xB.c.RefractionTextureEnabled && !cB.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(cB, Bc) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return cB.SUBSURFACE = !1, cB.SS_DISPERSION = !1, cB.SS_TRANSLUCENCY = !1, cB.SS_SCATTERING = !1, cB.SS_REFRACTION = !1, cB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, cB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, cB.SS_THICKNESSANDMASK_TEXTURE = !1, cB.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, cB.SS_HAS_THICKNESS = !1, cB.SS_REFRACTIONINTENSITY_TEXTURE = !1, cB.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, cB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, cB.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, cB.SS_REFRACTIONMAP_3D = !1, cB.SS_REFRACTIONMAP_OPPOSITEZ = !1, cB.SS_LODINREFRACTIONALPHA = !1, cB.SS_GAMMAREFRACTION = !1, cB.SS_RGBDREFRACTION = !1, cB.SS_LINEARSPECULARREFRACTION = !1, cB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, cB.SS_ALBEDOFORREFRACTIONTINT = !1, cB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, cB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, cB.SS_USE_THICKNESS_AS_DEPTH = !1, cB.SS_USE_GLTF_TEXTURES = !1, cB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, cB.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, cB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(cB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (cB._areTexturesDirty) {
            if (cB.SUBSURFACE = !0, cB.SS_DISPERSION = this._isDispersionEnabled, cB.SS_TRANSLUCENCY = this._isTranslucencyEnabled, cB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, cB.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, cB.SS_SCATTERING = this._isScatteringEnabled, cB.SS_THICKNESSANDMASK_TEXTURE = !1, cB.SS_REFRACTIONINTENSITY_TEXTURE = !1, cB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, cB.SS_HAS_THICKNESS = !1, cB.SS_USE_GLTF_TEXTURES = !1, cB.SS_REFRACTION = !1, cB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, cB.SS_REFRACTIONMAP_3D = !1, cB.SS_GAMMAREFRACTION = !1, cB.SS_RGBDREFRACTION = !1, cB.SS_LINEARSPECULARREFRACTION = !1, cB.SS_REFRACTIONMAP_OPPOSITEZ = !1, cB.SS_LODINREFRACTIONALPHA = !1, cB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, cB.SS_ALBEDOFORREFRACTIONTINT = !1, cB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, cB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, cB.SS_USE_THICKNESS_AS_DEPTH = !1, cB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, cB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, cB._areTexturesDirty && Bc.texturesEnabled && (this._thicknessTexture && xB.c.ThicknessTextureEnabled && (0, Ac.$)(this._thicknessTexture, cB, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && xB.c.RefractionIntensityTextureEnabled && (0, Ac.$)(this._refractionIntensityTexture, cB, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && xB.c.TranslucencyIntensityTextureEnabled && (0, Ac.$)(this._translucencyIntensityTexture, cB, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && xB.c.TranslucencyColorTextureEnabled && ((0, Ac.$)(this._translucencyColorTexture, cB, "SS_TRANSLUCENCYCOLOR_TEXTURE"), cB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), cB.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, cB.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, cB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, cB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Bc.texturesEnabled) {
              const nc = this._getRefractionTexture(Bc);
              nc && xB.c.RefractionTextureEnabled && (cB.SS_REFRACTION = !0, cB.SS_REFRACTIONMAP_3D = nc.isCube, cB.SS_GAMMAREFRACTION = nc.gammaSpace, cB.SS_RGBDREFRACTION = nc.isRGBD, cB.SS_LINEARSPECULARREFRACTION = nc.linearSpecularLOD, cB.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && nc.isCube ? !nc.invertZ : nc.invertZ, cB.SS_LODINREFRACTIONALPHA = nc.lodLevelInAlpha, cB.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, cB.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, cB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = nc.isCube && nc.boundingBoxSize, cB.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (cB.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(cB, Bc, nc, Vc) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) cB.updateFloat2("vThicknessParam", 0, 0);
            else {
              Vc.getRenderingMesh().getWorldMatrix().decompose(Wc.i.KV[0]);
              const Bc = Math.max(Math.abs(Wc.i.KV[0].x), Math.abs(Wc.i.KV[0].y), Math.abs(Wc.i.KV[0].z));
              cB.updateFloat2("vThicknessParam", this.minimumThickness * Bc, (this.maximumThickness - this.minimumThickness) * Bc)
            }
        }
        bindForSubMesh(cB, Bc, nc, Vc) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Ic = Vc.materialDefines,
            rB = this._material.isFrozen,
            uc = this._material.realTimeFiltering,
            sc = Ic.LODBASEDMICROSFURACE,
            Mc = this._getRefractionTexture(Bc);
          if (!cB.useUbo || !rB || !cB.isSync) {
            if (this._thicknessTexture && xB.c.ThicknessTextureEnabled && (cB.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Ac.B)(this._thicknessTexture, cB, "thickness")), this._refractionIntensityTexture && xB.c.RefractionIntensityTextureEnabled && Ic.SS_REFRACTIONINTENSITY_TEXTURE && (cB.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Ac.B)(this._refractionIntensityTexture, cB, "refractionIntensity")), this._translucencyColorTexture && xB.c.TranslucencyColorTextureEnabled && Ic.SS_TRANSLUCENCYCOLOR_TEXTURE && (cB.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Ac.B)(this._translucencyColorTexture, cB, "translucencyColor")), this._translucencyIntensityTexture && xB.c.TranslucencyIntensityTextureEnabled && Ic.SS_TRANSLUCENCYINTENSITY_TEXTURE && (cB.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Ac.B)(this._translucencyIntensityTexture, cB, "translucencyIntensity")), Mc && xB.c.RefractionTextureEnabled) {
              cB.Buc("refractionMatrix", Mc.getRefractionTextureMatrix());
              let Bc = 1;
              Mc.isCube || Mc.depth && (Bc = Mc.depth);
              const nc = Mc.getSize().width,
                Vc = this.volumeIndexOfRefraction;
              if (cB.updateFloat4("vRefractionInfos", Mc.level, 1 / Vc, Bc, this._invertRefractionY ? -1 : 1), cB.updateFloat4("vRefractionMicrosurfaceInfos", nc, Mc.lodGenerationScale, Mc.lodGenerationOffset, 1 / this.indexOfRefraction), uc && cB.updateFloat2("vRefractionFilteringInfo", nc, Math.log2(nc)), Mc.boundingBoxSize) {
                const Bc = Mc;
                cB.updateVector3("vRefractionPosition", Bc.boundingBoxPosition), cB.updateVector3("vRefractionSize", Bc.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && cB.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), cB.updateColor3("vDiffusionDistance", this.diffusionDistance), cB.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), cB.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), cB.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), cB.updateFloat("dispersion", this.dispersion)
          }
          Bc.texturesEnabled && (this._thicknessTexture && xB.c.ThicknessTextureEnabled && cB.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && xB.c.RefractionIntensityTextureEnabled && Ic.SS_REFRACTIONINTENSITY_TEXTURE && cB.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && xB.c.TranslucencyIntensityTextureEnabled && Ic.SS_TRANSLUCENCYINTENSITY_TEXTURE && cB.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && xB.c.TranslucencyColorTextureEnabled && Ic.SS_TRANSLUCENCYCOLOR_TEXTURE && cB.setTexture("translucencyColorSampler", this._translucencyColorTexture), Mc && xB.c.RefractionTextureEnabled && (sc ? cB.setTexture("refractionSampler", Mc) : (cB.setTexture("refractionSampler", Mc._lodTextureMid || Mc), cB.setTexture("refractionSamplerLow", Mc._lodTextureLow || Mc), cB.setTexture("refractionSamplerHigh", Mc._lodTextureHigh || Mc))))
        }
        _getRefractionTexture(cB) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? cB.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(cB) {
          xB.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && cB.push(this._refractionTexture)
        }
        hasTexture(cB) {
          return this._thicknessTexture === cB || (this._refractionTexture === cB || (this._refractionIntensityTexture === cB || (this._translucencyIntensityTexture === cB || this._translucencyColorTexture === cB)))
        }
        hasRenderTargetTextures() {
          return !!(xB.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(cB) {
          this._thicknessTexture && cB.push(this._thicknessTexture), this._refractionTexture && cB.push(this._refractionTexture), this._refractionIntensityTexture && cB.push(this._refractionIntensityTexture), this._translucencyColorTexture && cB.push(this._translucencyColorTexture), this._translucencyIntensityTexture && cB.push(this._translucencyIntensityTexture)
        }
        getAnimatables(cB) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && cB.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && cB.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && cB.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && cB.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && cB.push(this._translucencyIntensityTexture)
        }
        dispose(cB) {
          cB && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(cB, Bc, nc) {
          return cB.SS_SCATTERING && Bc.addFallback(nc++, "SS_SCATTERING"), cB.SS_TRANSLUCENCY && Bc.addFallback(nc++, "SS_TRANSLUCENCY"), nc
        }
        getSamplers(cB) {
          cB.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, rB = new WeakMap, uc = new WeakMap, sc = new WeakMap, Mc = new WeakMap, Pc = new WeakMap, qB = new WeakMap, Oc = new WeakMap, Tc = new WeakMap, fc = new WeakMap, mB = new WeakMap, ec = new WeakMap, tB = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(nB[Symbol.metadata] ?? null) : void 0;
        Sc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, gB.M)(), (0, gB.d)("_markScenePrePassDirty")], hc = [(0, gB.M)()], aB = [(0, gB.M)()], lc = [(0, gB.M)()], Yc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Uc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, gB.M)()], vB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, gB.M)()], Ec = [(0, gB.M)()], oc = [(0, gB.M)()], wc = [(0, gB.o)()], kB = [(0, gB.M)()], Hc = [(0, gB.M)()], Fc = [(0, gB.o)()], Jc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, gB.o)()], dc = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], cn = [(0, gB.M)()], BB = [(0, gB.M)()], (0, Lc.g)(cB, null, Sc, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isRefractionEnabled" in cB,
            get: cB => cB.isRefractionEnabled,
            set: (cB, Bc) => {
              cB.isRefractionEnabled = Bc
            }
          },
          metadata: Bc
        }, VB, IB), (0, Lc.g)(cB, null, yB, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isTranslucencyEnabled" in cB,
            get: cB => cB.isTranslucencyEnabled,
            set: (cB, Bc) => {
              cB.isTranslucencyEnabled = Bc
            }
          },
          metadata: Bc
        }, rn, uB), (0, Lc.g)(cB, null, zB, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isDispersionEnabled" in cB,
            get: cB => cB.isDispersionEnabled,
            set: (cB, Bc) => {
              cB.isDispersionEnabled = Bc
            }
          },
          metadata: Bc
        }, MB, PB), (0, Lc.g)(cB, null, pc, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isScatteringEnabled" in cB,
            get: cB => cB.isScatteringEnabled,
            set: (cB, Bc) => {
              cB.isScatteringEnabled = Bc
            }
          },
          metadata: Bc
        }, qn, OB), (0, Lc.g)(cB, null, Yc, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAlbedoToTintRefraction" in cB,
            get: cB => cB.useAlbedoToTintRefraction,
            set: (cB, Bc) => {
              cB.useAlbedoToTintRefraction = Bc
            }
          },
          metadata: Bc
        }, yn, zn), (0, Lc.g)(cB, null, Uc, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAlbedoToTintTranslucency" in cB,
            get: cB => cB.useAlbedoToTintTranslucency,
            set: (cB, Bc) => {
              cB.useAlbedoToTintTranslucency = Bc
            }
          },
          metadata: Bc
        }, pB, hB), (0, Lc.g)(cB, null, bB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "thicknessTexture" in cB,
            get: cB => cB.thicknessTexture,
            set: (cB, Bc) => {
              cB.thicknessTexture = Bc
            }
          },
          metadata: Bc
        }, an, lB), (0, Lc.g)(cB, null, Zc, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "refractionTexture" in cB,
            get: cB => cB.refractionTexture,
            set: (cB, Bc) => {
              cB.refractionTexture = Bc
            }
          },
          metadata: Bc
        }, YB, LB), (0, Lc.g)(cB, null, Qc, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: cB => "indexOfRefraction" in cB,
            get: cB => cB.indexOfRefraction,
            set: (cB, Bc) => {
              cB.indexOfRefraction = Bc
            }
          },
          metadata: Bc
        }, gn, UB), (0, Lc.g)(cB, null, vB, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: cB => "invertRefractionY" in cB,
            get: cB => cB.invertRefractionY,
            set: (cB, Bc) => {
              cB.invertRefractionY = Bc
            }
          },
          metadata: Bc
        }, QB, CB), (0, Lc.g)(cB, null, Dc, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: cB => "linkRefractionWithTransparency" in cB,
            get: cB => cB.linkRefractionWithTransparency,
            set: (cB, Bc) => {
              cB.linkRefractionWithTransparency = Bc
            }
          },
          metadata: Bc
        }, vn, DB), (0, Lc.g)(cB, null, Jc, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "useMaskFromThicknessTexture" in cB,
            get: cB => cB.useMaskFromThicknessTexture,
            set: (cB, Bc) => {
              cB.useMaskFromThicknessTexture = Bc
            }
          },
          metadata: Bc
        }, dB, AB), (0, Lc.g)(cB, null, Rc, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "refractionIntensityTexture" in cB,
            get: cB => cB.refractionIntensityTexture,
            set: (cB, Bc) => {
              cB.refractionIntensityTexture = Bc
            }
          },
          metadata: Bc
        }, GB, cV), (0, Lc.g)(cB, null, iB, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "translucencyIntensityTexture" in cB,
            get: cB => cB.translucencyIntensityTexture,
            set: (cB, Bc) => {
              cB.translucencyIntensityTexture = Bc
            }
          },
          metadata: Bc
        }, Bn, nn), (0, Lc.g)(cB, null, dc, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "translucencyColorTexture" in cB,
            get: cB => cB.translucencyColorTexture,
            set: (cB, Bc) => {
              cB.translucencyColorTexture = Bc
            }
          },
          metadata: Bc
        }, rV, un), (0, Lc.g)(cB, null, Gc, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: cB => "useGltfStyleTextures" in cB,
            get: cB => cB.useGltfStyleTextures,
            set: (cB, Bc) => {
              cB.useGltfStyleTextures = Bc
            }
          },
          metadata: Bc
        }, sn, Mn), (0, Lc.g)(null, null, hc, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: cB => "_scatteringDiffusionProfileIndex" in cB,
            get: cB => cB._scatteringDiffusionProfileIndex,
            set: (cB, Bc) => {
              cB._scatteringDiffusionProfileIndex = Bc
            }
          },
          metadata: Bc
        }, TB, fB), (0, Lc.g)(null, null, aB, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "refractionIntensity" in cB,
            get: cB => cB.refractionIntensity,
            set: (cB, Bc) => {
              cB.refractionIntensity = Bc
            }
          },
          metadata: Bc
        }, mn, eB), (0, Lc.g)(null, null, lc, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "translucencyIntensity" in cB,
            get: cB => cB.translucencyIntensity,
            set: (cB, Bc) => {
              cB.translucencyIntensity = Bc
            }
          },
          metadata: Bc
        }, tn, SB), (0, Lc.g)(null, null, Cc, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: cB => "_volumeIndexOfRefraction" in cB,
            get: cB => cB._volumeIndexOfRefraction,
            set: (cB, Bc) => {
              cB._volumeIndexOfRefraction = Bc
            }
          },
          metadata: Bc
        }, bn, ZB), (0, Lc.g)(null, null, Nc, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: cB => "minimumThickness" in cB,
            get: cB => cB.minimumThickness,
            set: (cB, Bc) => {
              cB.minimumThickness = Bc
            }
          },
          metadata: Bc
        }, NB, EB), (0, Lc.g)(null, null, Ec, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: cB => "maximumThickness" in cB,
            get: cB => cB.maximumThickness,
            set: (cB, Bc) => {
              cB.maximumThickness = Bc
            }
          },
          metadata: Bc
        }, oB, WB), (0, Lc.g)(null, null, oc, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: cB => "useThicknessAsDepth" in cB,
            get: cB => cB.useThicknessAsDepth,
            set: (cB, Bc) => {
              cB.useThicknessAsDepth = Bc
            }
          },
          metadata: Bc
        }, wB, kn), (0, Lc.g)(null, null, wc, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintColor" in cB,
            get: cB => cB.tintColor,
            set: (cB, Bc) => {
              cB.tintColor = Bc
            }
          },
          metadata: Bc
        }, XB, HB), (0, Lc.g)(null, null, kB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: cB => "tintColorAtDistance" in cB,
            get: cB => cB.tintColorAtDistance,
            set: (cB, Bc) => {
              cB.tintColorAtDistance = Bc
            }
          },
          metadata: Bc
        }, FB, JB), (0, Lc.g)(null, null, Hc, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: cB => "dispersion" in cB,
            get: cB => cB.dispersion,
            set: (cB, Bc) => {
              cB.dispersion = Bc
            }
          },
          metadata: Bc
        }, jn, RB), (0, Lc.g)(null, null, Fc, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: cB => "diffusionDistance" in cB,
            get: cB => cB.diffusionDistance,
            set: (cB, Bc) => {
              cB.diffusionDistance = Bc
            }
          },
          metadata: Bc
        }, KB, xn), (0, Lc.g)(null, null, Kc, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "translucencyColor" in cB,
            get: cB => cB.translucencyColor,
            set: (cB, Bc) => {
              cB.translucencyColor = Bc
            }
          },
          metadata: Bc
        }, Vn, In), (0, Lc.g)(null, null, cn, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: cB => "applyAlbedoAfterSubSurface" in cB,
            get: cB => cB.applyAlbedoAfterSubSurface,
            set: (cB, Bc) => {
              cB.applyAlbedoAfterSubSurface = Bc
            }
          },
          metadata: Bc
        }, Pn, qV), (0, Lc.g)(null, null, BB, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: cB => "legacyTranslucency" in cB,
            get: cB => cB.legacyTranslucency,
            set: (cB, Bc) => {
              cB.legacyTranslucency = Bc
            }
          },
          metadata: Bc
        }, On, Tn), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, cB.DEFAULT_LEGACY_TRANSLUCENCY = !1, cB
    })();
    var PB = nc(38377),
      qn = nc(38362),
      OB = nc(38383),
      TB = nc(38391),
      fB = nc(38400),
      mn = nc(38402),
      eB = nc(38406),
      tn = nc(38410),
      SB = nc(37953);
    const yn = {
      effect: null,
      subMesh: null
    };
    class zn extends((0, eB.d)((0, mn.d)(kB.e))) {}
    class pB extends((0, Rc.g)(zn)) {
      constructor(cB) {
        super(cB), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class hB extends((0, tn.e)(Kc.c)) {}
    let an = (() => {
      var cB, Bc;
      let Vc, Ic = hB,
        uc = [],
        sc = [];
      return cB = class extends Ic {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(cB) {
          this._realTimeFiltering = cB, this.SMc(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(cB) {
          this._realTimeFilteringQuality = cB, this.SMc(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set debugMode(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        constructor(nc, Vc) {
          super(nc, Vc, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || cB.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Wc.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = cB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = jB.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new jB.e(0, 0, 0), this._albedoColor = new jB.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new jB.e(1, 1, 1), this._reflectionColor = new jB.e(1, 1, 1), this._emissiveColor = new jB.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = cB.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bB.e(16), this._globalAmbientColor = new jB.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Bc.set(this, (0, Lc.k)(this, uc, 0)), this.debugLimit = ((0, Lc.k)(this, sc), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Fc(this), this.clearCoat = new cn(this), this.iridescence = new nB(this), this.anisotropy = new IB(this), this.sheen = new uB(this), this.subSurface = new MB(this), this.detailMap = new PB.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), xB.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Dc(this.knc()), this.prePassConfiguration = new Jc.e
        }
        get hasRenderTargetTextures() {
          return !!(xB.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === cB.PBRMATERIAL_OPAQUE || this._transparencyMode === cB.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === cB.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== cB.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(cB, Bc, nc) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Vc = Bc._drawWrapper;
          if (Vc.effect && this.isFrozen && Vc._wasPreviouslyReady && Vc._wasPreviouslyUsingInstances === nc) return !0;
          Bc.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Bc.materialDefines = new pB(this._eventInfo.defineNames));
          const Ic = Bc.materialDefines;
          if (this._isReadyForSubMesh(Bc)) return !0;
          const rB = this.knc(),
            uc = rB.RV();
          if (Ic._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, rB.texturesEnabled)) {
            if (this._albedoTexture && xB.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && xB.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && xB.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && xB.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && xB.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const cB = this._getReflectionTexture();
            if (cB && xB.c.ReflectionTextureEnabled) {
              if (!cB.isReadyOrNotBlocking()) return !1;
              if (cB.irradianceTexture) {
                if (!cB.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!cB.sphericalPolynomial && cB.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && xB.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && xB.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (xB.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (uc.getCaps().standardDerivatives && this._bumpTexture && xB.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && xB.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ic, this._eventInfo.subMesh = Bc, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Ic._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Ic.AREALIGHTUSED || Ic.CLUSTLIGHT_BATCH)
            for (let Oc = 0; Oc < cB.lightSources.length; Oc++)
              if (!cB.lightSources[Oc]._isReady()) return !1;
          if (uc.getCaps().standardDerivatives || cB.isVerticesDataPresent(wc.i.NormalKind) || (cB.createNormals(!0), Uc.c.Warn("PBRMaterial: Normals have been created for the mesh: " + cB.name)), !(0, Ac.e)(rB, cB, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const sc = Bc.effect,
            Mc = Ic._areLightsDisposed,
            Pc = this._prepareEffect(cB, Bc.getRenderingMesh(), Ic, this.onCompiled, this.onError, nc, null);
          let qB = !1;
          if (Pc)
            if (this._onEffectCreatedObservable && (yn.effect = Pc, yn.subMesh = Bc, this._onEffectCreatedObservable.notifyObservers(yn)), this.allowShaderHotSwapping && sc && !Pc.isReady()) {
              if (Ic.markAsUnprocessed(), qB = this.isFrozen, Mc) return Ic._areLightsDisposed = !0, !1
            } else rB.resetCachedMaterial(), Bc.setEffect(Pc, Ic, this._materialContext);
          return !(!Bc.effect || !Bc.effect.isReady()) && (Ic._renderId = rB.getRenderId(), Vc._wasPreviouslyReady = !qB, Vc._wasPreviouslyUsingInstances = !!nc, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Bc, nc, Vc) {
          let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Bc, nc, Vc, uc, sc), !Vc.isDirty) return null;
          Vc.markAsProcessed();
          const Mc = this.knc().RV(),
            Pc = new dc.e;
          let qB = 0;
          Vc.USESPHERICALINVERTEX && Pc.addFallback(qB++, "USESPHERICALINVERTEX"), Vc.FOG && Pc.addFallback(qB, "FOG"), Vc.SPECULARAA && Pc.addFallback(qB, "SPECULARAA"), Vc.POINTSIZE && Pc.addFallback(qB, "POINTSIZE"), Vc.LOGARITHMICDEPTH && Pc.addFallback(qB, "LOGARITHMICDEPTH"), Vc.PARALLAX && Pc.addFallback(qB, "PARALLAX"), Vc.PARALLAX_RHS && Pc.addFallback(qB, "PARALLAX_RHS"), Vc.PARALLAXOCCLUSION && Pc.addFallback(qB++, "PARALLAXOCCLUSION"), Vc.ENVIRONMENTBRDF && Pc.addFallback(qB++, "ENVIRONMENTBRDF"), Vc.TANGENT && Pc.addFallback(qB++, "TANGENT"), Vc.BUMP && Pc.addFallback(qB++, "BUMP"), qB = (0, Ac.F)(Vc, Pc, this._maxSimultaneousLights, qB), Vc.SPECULARTERM && Pc.addFallback(qB++, "SPECULARTERM"), Vc.USESPHERICALFROMREFLECTIONMAP && Pc.addFallback(qB++, "USESPHERICALFROMREFLECTIONMAP"), Vc.USEIRRADIANCEMAP && Pc.addFallback(qB++, "USEIRRADIANCEMAP"), Vc.LIGHTMAP && Pc.addFallback(qB++, "LIGHTMAP"), Vc.NORMAL && Pc.addFallback(qB++, "NORMAL"), Vc.AMBIENT && Pc.addFallback(qB++, "AMBIENT"), Vc.EMISSIVE && Pc.addFallback(qB++, "EMISSIVE"), Vc.VERTEXCOLOR && Pc.addFallback(qB++, "VERTEXCOLOR"), Vc.MORPHTARGETS && Pc.addFallback(qB++, "MORPHTARGETS"), Vc.MULTIVIEW && Pc.addFallback(0, "MULTIVIEW");
          const Oc = [wc.i.PositionKind];
          Vc.NORMAL && Oc.push(wc.i.NormalKind), Vc.TANGENT && Oc.push(wc.i.TangentKind);
          for (let cB = 1; cB <= 6; ++cB) Vc["UV" + cB] && Oc.push(`uv${1===cB?"":cB}`);
          Vc.VERTEXCOLOR && Oc.push(wc.i.ColorKind), (0, Ac.K)(Oc, Bc, Vc, Pc), (0, Ac.M)(Oc, Vc), (0, Ac.O)(Oc, Bc, Vc), (0, Ac.G)(Oc, Bc, Vc);
          let Tc = "pbr";
          const fc = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            mB = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Ac.ob)(fc, mB, !0);
          const ec = ["Material", "Scene", "Mesh"],
            tB = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Vc.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Pc, this._eventInfo.fallbackRank = qB, this._eventInfo.defines = Vc, this._eventInfo.uniforms = fc, this._eventInfo.attributes = Oc, this._eventInfo.samplers = mB, this._eventInfo.uniformBuffersNames = ec, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Bc, this._eventInfo.indexParameters = tB, this._callbackPluginEventGeneric(128, this._eventInfo), fB.b.AddUniformsAndSamplers(fc, mB), Jc.e.AddUniforms(fc), Jc.e.AddSamplers(mB), (0, qn.b)(fc), this._useVertexPulling) {
            const cB = nc?.geometry;
            cB && (this._vertexPullingMetadata = (0, OB.h)(cB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((cB, Bc) => {
              fc.push(`vp_${Bc}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          iB.c && (iB.c.PrepareUniforms(fc, Vc), iB.c.PrepareSamplers(mB, Vc)), (0, Ac.rb)({
            uniformsNames: fc,
            uniformBuffersNames: ec,
            samplers: mB,
            defines: Vc,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Sc = {};
          this.customShaderNameResolve && (Tc = this.customShaderNameResolve(Tc, fc, ec, mB, Vc, Oc, Sc));
          const yB = Vc.toString(),
            zB = Mc.createEffect(Tc, {
              attributes: Oc,
              uniformsNames: fc,
              uniformBuffersNames: ec,
              samplers: mB,
              defines: yB,
              fallbacks: Pc,
              onCompiled: Ic,
              onError: rB,
              indexParameters: tB,
              processFinalCode: Sc.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Vc.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: cB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Mc);
          return this._eventInfo.customCode = void 0, zB
        }
        _prepareDefines(Bc, nc, Vc) {
          let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const uc = nc.hasThinInstances,
            sc = this.knc(),
            Mc = sc.RV();
          (0, Ac.Z)(sc, Bc, Vc, !0, this._maxSimultaneousLights, this._disableLighting), Vc._needNormals = !0, (0, Ac.gb)(sc, Vc);
          const Pc = this.needAlphaBlendingForMesh(Bc) && this.knc().useOrderIndependentTransparency;
          if ((0, Ac.lb)(sc, Vc, this.canRenderToMRT && !Pc), (0, Ac.kb)(sc, Vc, Pc), fB.b.PrepareDefines(Mc.currentRenderPassId, Bc, Vc), Vc.METALLICWORKFLOW = this.isMetallicWorkflow(), Vc._areTexturesDirty) {
            Vc._needUVs = !1;
            for (let cB = 1; cB <= 6; ++cB) Vc["MAINUV" + cB] = !1;
            if (sc.texturesEnabled) {
              Vc.ALBEDODIRECTUV = 0, Vc.BASE_WEIGHTDIRECTUV = 0, Vc.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Vc.AMBIENTDIRECTUV = 0, Vc.OPACITYDIRECTUV = 0, Vc.EMISSIVEDIRECTUV = 0, Vc.REFLECTIVITYDIRECTUV = 0, Vc.MICROSURFACEMAPDIRECTUV = 0, Vc.METALLIC_REFLECTANCEDIRECTUV = 0, Vc.REFLECTANCEDIRECTUV = 0, Vc.BUMPDIRECTUV = 0, Vc.LIGHTMAPDIRECTUV = 0, Mc.getCaps().textureLOD && (Vc.LODBASEDMICROSFURACE = !0), this._albedoTexture && xB.c.DiffuseTextureEnabled ? ((0, Ac.$)(this._albedoTexture, Vc, "ALBEDO"), Vc.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Vc.ALBEDO = !1, this._baseWeightTexture && xB.c.BaseWeightTextureEnabled ? (0, Ac.$)(this._baseWeightTexture, Vc, "BASE_WEIGHT") : Vc.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && xB.c.BaseDiffuseRoughnessTextureEnabled ? (0, Ac.$)(this._baseDiffuseRoughnessTexture, Vc, "BASE_DIFFUSE_ROUGHNESS") : Vc.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && xB.c.AmbientTextureEnabled ? ((0, Ac.$)(this._ambientTexture, Vc, "AMBIENT"), Vc.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Vc.AMBIENT = !1, this._opacityTexture && xB.c.OpacityTextureEnabled ? ((0, Ac.$)(this._opacityTexture, Vc, "OPACITY"), Vc.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Vc.OPACITY = !1;
              const cB = this._getReflectionTexture(),
                Bc = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Mc.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Ac.Y)(sc, cB, Vc, this.realTimeFiltering, this.realTimeFilteringQuality, !Bc), this._lightmapTexture && xB.c.LightmapTextureEnabled ? ((0, Ac.$)(this._lightmapTexture, Vc, "LIGHTMAP"), Vc.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Vc.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Vc.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Vc.LIGHTMAP = !1, this._emissiveTexture && xB.c.EmissiveTextureEnabled ? ((0, Ac.$)(this._emissiveTexture, Vc, "EMISSIVE"), Vc.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Vc.EMISSIVE = !1, xB.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Ac.$)(this._metallicTexture, Vc, "REFLECTIVITY"), Vc.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Vc.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Vc.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Vc.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Vc.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Ac.$)(this._reflectivityTexture, Vc, "REFLECTIVITY"), Vc.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Vc.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Vc.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Vc.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Vc.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Ac.$)(this._metallicReflectanceTexture, Vc, "METALLIC_REFLECTANCE"), Vc.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Vc.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Ac.$)(this._reflectanceTexture, Vc, "REFLECTANCE"), Vc.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Vc.REFLECTANCE = !1) : (Vc.METALLIC_REFLECTANCE = !1, Vc.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Ac.$)(this._microSurfaceTexture, Vc, "MICROSURFACEMAP") : Vc.MICROSURFACEMAP = !1) : (Vc.REFLECTIVITY = !1, Vc.MICROSURFACEMAP = !1), Mc.getCaps().standardDerivatives && this._bumpTexture && xB.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, Ac.$)(this._bumpTexture, Vc, "BUMP"), this._useParallax && this._albedoTexture && xB.c.DiffuseTextureEnabled ? (Vc.PARALLAX = !0, Vc.PARALLAX_RHS = sc.useRightHandedSystem, Vc.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Vc.PARALLAX = !1, Vc.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Vc.BUMP = !1, Vc.PARALLAX = !1, Vc.PARALLAX_RHS = !1, Vc.PARALLAXOCCLUSION = !1, Vc.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && xB.c.ReflectionTextureEnabled ? (Vc.ENVIRONMENTBRDF = !0, Vc.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Vc.ENVIRONMENTBRDF = !1, Vc.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Vc.ALPHAFROMALBEDO = !0 : Vc.ALPHAFROMALBEDO = !1
            }
            Vc.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === cB.LIGHTFALLOFF_STANDARD ? (Vc.USEPHYSICALLIGHTFALLOFF = !1, Vc.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === cB.LIGHTFALLOFF_GLTF ? (Vc.USEPHYSICALLIGHTFALLOFF = !1, Vc.USEGLTFLIGHTFALLOFF = !0) : (Vc.USEPHYSICALLIGHTFALLOFF = !0, Vc.USEGLTFLIGHTFALLOFF = !1), Vc.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Vc.TWOSIDEDLIGHTING = !0 : Vc.TWOSIDEDLIGHTING = !1, Vc.MIRRORED = !!sc._mirroredCameraPosition, Vc.SPECULARAA = Mc.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Vc._areTexturesDirty || Vc._areMiscDirty) && (Vc.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Vc.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Vc.ALPHABLEND = this.needAlphaBlendingForMesh(Bc), Vc.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Vc.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Vc._areTexturesDirty && (Vc.TEXTURE_REPETITION_MODE = Mc.version > 1 || Mc.isWebGPU ? this.textureRepetitionMode : 0), Vc._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Vc), Vc.FORCENORMALFORWARD = this._forceNormalForward, Vc.RADIANCEOCCLUSION = this._useRadianceOcclusion, Vc.HORIZONOCCLUSION = this._useHorizonOcclusion, Vc._areMiscDirty && ((0, Ac.cb)(Bc, sc, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Bc), Vc, this._applyDecalMapAfterDetailMap, this._useVertexPulling, nc, this._isVertexOutputInvariant), Vc.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Bc.isVerticesDataPresent(wc.i.NormalKind), Vc.DEBUGMODE = this._debugMode), (0, Ac.X)(sc, Mc, this, Vc, !!Ic, rB, uc), this._eventInfo.defines = Vc, this._eventInfo.mesh = Bc, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ac.W)(Bc, Vc, !0, !0, !0, this._transparencyMode !== cB.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(cB, Bc, nc) {
          const Vc = {
            clipPlane: !1,
            useInstances: !1,
            ...nc
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const nc = new pB(this._eventInfo.defineNames),
              Ic = this._prepareEffect(cB, cB, nc, void 0, void 0, Vc.useInstances, Vc.clipPlane);
            this._onEffectCreatedObservable && (yn.effect = Ic, yn.subMesh = null, this._onEffectCreatedObservable.notifyObservers(yn)), Ic.isReady() ? Bc && Bc(this) : Ic.onCompileObservable.add((() => {
              Bc && Bc(this)
            }))
          })()
        }
        buildUniformLayout() {
          const cB = this._uniformBuffer;
          cB.addUniform("vAlbedoInfos", 2), cB.addUniform("vBaseWeightInfos", 2), cB.addUniform("vBaseDiffuseRoughnessInfos", 2), cB.addUniform("vAmbientInfos", 4), cB.addUniform("vOpacityInfos", 2), cB.addUniform("vEmissiveInfos", 2), cB.addUniform("vLightmapInfos", 2), cB.addUniform("vReflectivityInfos", 3), cB.addUniform("vMicroSurfaceSamplerInfos", 2), cB.addUniform("vBumpInfos", 3), cB.addUniform("albedoMatrix", 16), cB.addUniform("baseWeightMatrix", 16), cB.addUniform("baseDiffuseRoughnessMatrix", 16), cB.addUniform("ambientMatrix", 16), cB.addUniform("opacityMatrix", 16), cB.addUniform("emissiveMatrix", 16), cB.addUniform("lightmapMatrix", 16), cB.addUniform("reflectivityMatrix", 16), cB.addUniform("microSurfaceSamplerMatrix", 16), cB.addUniform("bumpMatrix", 16), cB.addUniform("vTangentSpaceParams", 2), cB.addUniform("vAlbedoColor", 4), cB.addUniform("baseWeight", 1), cB.addUniform("baseDiffuseRoughness", 1), cB.addUniform("vLightingIntensity", 4), cB.addUniform("pointSize", 1), cB.addUniform("vReflectivityColor", 4), cB.addUniform("vEmissiveColor", 3), cB.addUniform("vAmbientColor", 3), cB.addUniform("vDebugMode", 2), cB.addUniform("vMetallicReflectanceFactors", 4), cB.addUniform("vMetallicReflectanceInfos", 2), cB.addUniform("metallicReflectanceMatrix", 16), cB.addUniform("vReflectanceInfos", 2), cB.addUniform("reflectanceMatrix", 16), cB.addUniform("cameraInfo", 4), cB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Ac.mb)(cB, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(cB, Bc, nc) {
          const Vc = this.knc(),
            Ic = nc.materialDefines;
          if (!Ic) return;
          const rB = nc.effect;
          if (!rB) return;
          this._activeEffect = rB, Bc.getMeshUniformBuffer().bindToEffect(rB, "Mesh"), Bc.transferToEffect(cB);
          const uc = Vc.RV();
          this._uniformBuffer.bindToEffect(rB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Vc, Bc, cB, this.isFrozen), fB.b.Bind(uc.currentRenderPassId, this._activeEffect, Bc, cB, this);
          const sc = Vc.activeCamera;
          sc ? this._uniformBuffer.updateFloat4("cameraInfo", sc.minZ, sc.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Mc = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Mc[0], Mc[1], Mc[2], Mc[3]), this._eventInfo.subMesh = nc, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Ic.OBJECTSPACE_NORMALMAP && (cB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Pc = this._mustRebind(Vc, rB, nc, Bc.visibility),
            qB = uc._features.needToAlwaysBindUniformBuffers;
          (0, Ac.i)(Bc, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, OB.e)(this._activeEffect, this._vertexPullingMetadata);
          let Oc = null;
          const Tc = this._uniformBuffer;
          if (Pc) {
            if (this.bindViewProjection(rB), Oc = this._getReflectionTexture(), !Tc.useUbo || !this.isFrozen || !Tc.isSync || nc._drawWrapper._forceRebindOnNextCall) {
              if (Vc.texturesEnabled && (this._albedoTexture && xB.c.DiffuseTextureEnabled && (Tc.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Ac.B)(this._albedoTexture, Tc, "albedo")), this._baseWeightTexture && xB.c.BaseWeightTextureEnabled && (Tc.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Ac.B)(this._baseWeightTexture, Tc, "baseWeight")), this._baseDiffuseRoughnessTexture && xB.c.BaseDiffuseRoughnessTextureEnabled && (Tc.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Ac.B)(this._baseDiffuseRoughnessTexture, Tc, "baseDiffuseRoughness")), this._ambientTexture && xB.c.AmbientTextureEnabled && (Tc.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Ac.B)(this._ambientTexture, Tc, "ambient")), this._opacityTexture && xB.c.OpacityTextureEnabled && (Tc.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Ac.B)(this._opacityTexture, Tc, "opacity")), this._emissiveTexture && xB.c.EmissiveTextureEnabled && (Tc.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Ac.B)(this._emissiveTexture, Tc, "emissive")), this._lightmapTexture && xB.c.LightmapTextureEnabled && (Tc.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Ac.B)(this._lightmapTexture, Tc, "lightmap")), xB.c.SpecularTextureEnabled && (this._metallicTexture ? (Tc.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Ac.B)(this._metallicTexture, Tc, "reflectivity")) : this._reflectivityTexture && (Tc.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Ac.B)(this._reflectivityTexture, Tc, "reflectivity")), this._metallicReflectanceTexture && (Tc.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Ac.B)(this._metallicReflectanceTexture, Tc, "metallicReflectance")), this._reflectanceTexture && Ic.REFLECTANCE && (Tc.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Ac.B)(this._reflectanceTexture, Tc, "reflectance")), this._microSurfaceTexture && (Tc.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Ac.B)(this._microSurfaceTexture, Tc, "microSurfaceSampler"))), this._bumpTexture && uc.getCaps().standardDerivatives && xB.c.BumpTextureEnabled && !this._disableBumpMap && (Tc.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Ac.B)(this._bumpTexture, Tc, "bump"), Vc._mirroredCameraPosition ? Tc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Tc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ac.n)(Vc, Ic, Tc, this._reflectionColor, Oc, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Tc.updateFloat("pointSize", this.pointSize), Ic.METALLICWORKFLOW) {
                jB.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, jB.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const cB = this.subSurface?._indexOfRefraction ?? 1.5,
                  Bc = 1;
                jB.m.Color4[0].b = cB;
                const nc = Math.pow((cB - Bc) / (cB + Bc), 2);
                jB.m.Color4[0].a = nc, Tc.updateDirectColor4("vReflectivityColor", jB.m.Color4[0]), Tc.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Tc.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Tc.updateColor3("vEmissiveColor", xB.c.EmissiveTextureEnabled ? this._emissiveColor : jB.e.BlackReadOnly), !Ic.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Tc.updateColor4("vAlbedoColor", this._albedoColor, 1) : Tc.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Tc.updateFloat("baseWeight", this._baseWeight), Tc.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Vc.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Tc.updateVector4("vLightingIntensity", this._lightingInfos), Vc.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Tc.updateColor3("vAmbientColor", this._globalAmbientColor), Tc.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Vc.texturesEnabled && (this._albedoTexture && xB.c.DiffuseTextureEnabled && Tc.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && xB.c.BaseWeightTextureEnabled && Tc.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && xB.c.BaseDiffuseRoughnessTextureEnabled && Tc.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && xB.c.AmbientTextureEnabled && Tc.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && xB.c.OpacityTextureEnabled && Tc.setTexture("opacitySampler", this._opacityTexture), (0, Ac.q)(Vc, Ic, Tc, Oc, this.realTimeFiltering), Ic.ENVIRONMENTBRDF && Tc.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && xB.c.EmissiveTextureEnabled && Tc.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && xB.c.LightmapTextureEnabled && Tc.setTexture("lightmapSampler", this._lightmapTexture), xB.c.SpecularTextureEnabled && (this._metallicTexture ? Tc.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Tc.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Tc.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Ic.REFLECTANCE && Tc.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Tc.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && uc.getCaps().standardDerivatives && xB.c.BumpTextureEnabled && !this._disableBumpMap && Tc.setTexture("bumpSampler", this._bumpTexture)), this.knc().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Bc) && this.knc().depthPeelingRenderer.bind(rB), this._eventInfo.subMesh = nc, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, qn.d)(this._activeEffect, this, Vc), this.bindEyePosition(rB)
          } else qB && (this._needToBindSceneUbo = !0);
          !Pc && this.isFrozen && !qB || !Vc.lightsEnabled || this._disableLighting || (0, Ac.r)(Vc, Bc, this._activeEffect, Ic, this._maxSimultaneousLights), !Pc && this.isFrozen || ((Vc.fogEnabled && Bc.applyFog && Vc.fogMode !== oc.h.FOGMODE_NONE || Oc || this.subSurface.refractionTexture || Bc.receiveShadows || Ic.PREPASS || Ic.CLUSTLIGHT_BATCH) && this.bindView(rB), (0, Ac.j)(Vc, Bc, this._activeEffect, !0), Ic.NUM_MORPH_INFLUENCERS && (0, Ac.w)(Bc, this._activeEffect), Ic.BAKED_VERTEX_ANIMATION_TEXTURE && Bc.bakedVertexAnimationManager?.bind(rB, Ic.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ac.s)(Ic, this._activeEffect, Vc)), this._afterBind(Bc, this._activeEffect, nc), Tc.update()
        }
        getAnimatables() {
          const cB = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && cB.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && cB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && cB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && cB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && cB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && cB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && cB.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? cB.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && cB.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && cB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && cB.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && cB.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && cB.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && cB.push(this._microSurfaceTexture), cB
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.knc().environmentTexture
        }
        getActiveTextures() {
          const cB = super.getActiveTextures();
          return this._albedoTexture && cB.push(this._albedoTexture), this._baseWeightTexture && cB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && cB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && cB.push(this._ambientTexture), this._opacityTexture && cB.push(this._opacityTexture), this._reflectionTexture && cB.push(this._reflectionTexture), this._emissiveTexture && cB.push(this._emissiveTexture), this._reflectivityTexture && cB.push(this._reflectivityTexture), this._metallicTexture && cB.push(this._metallicTexture), this._metallicReflectanceTexture && cB.push(this._metallicReflectanceTexture), this._reflectanceTexture && cB.push(this._reflectanceTexture), this._microSurfaceTexture && cB.push(this._microSurfaceTexture), this._bumpTexture && cB.push(this._bumpTexture), this._lightmapTexture && cB.push(this._lightmapTexture), cB
        }
        hasTexture(cB) {
          return !!super.hasTexture(cB) || (this._albedoTexture === cB || (this._baseWeightTexture === cB || (this._baseDiffuseRoughnessTexture === cB || (this._ambientTexture === cB || (this._opacityTexture === cB || (this._reflectionTexture === cB || (this._emissiveTexture === cB || (this._reflectivityTexture === cB || (this._metallicTexture === cB || (this._metallicReflectanceTexture === cB || (this._reflectanceTexture === cB || (this._microSurfaceTexture === cB || (this._bumpTexture === cB || this._lightmapTexture === cB)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const cB = this.knc().enableSubSurfaceForPrePass();
          return cB && (cB.enabled = !0), !0
        }
        dispose(cB, Bc) {
          this._breakShaderLoadedCheck = !0, Bc && (this._environmentBRDFTexture && this.knc().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(cB, Bc)
        }
      }, Bc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ic[Symbol.metadata] ?? null) : void 0;
        Vc = [(0, gB.d)("_markAllSubMeshesAsMiscDirty")], (0, Lc.g)(cB, null, Vc, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: cB => "debugMode" in cB,
            get: cB => cB.debugMode,
            set: (cB, Bc) => {
              cB.debugMode = Bc
            }
          },
          metadata: Bc
        }, uc, sc), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB.PBRMATERIAL_OPAQUE = rB.c.MATERIAL_OPAQUE, cB.PBRMATERIAL_ALPHATEST = rB.c.MATERIAL_ALPHATEST, cB.PBRMATERIAL_ALPHABLEND = rB.c.MATERIAL_ALPHABLEND, cB.PBRMATERIAL_ALPHATESTANDBLEND = rB.c.MATERIAL_ALPHATESTANDBLEND, cB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, cB.LIGHTFALLOFF_PHYSICAL = 0, cB.LIGHTFALLOFF_GLTF = 1, cB.LIGHTFALLOFF_STANDARD = 2, cB.ForceGLSL = !1, cB._ShaderLoader = new TB.e((() => [Promise.all([nc.e(292), nc.e(303)]).then((() => nc(59430))), Promise.all([nc.e(297), nc.e(293), nc.e(357), nc.e(306), nc.e(356)]).then((() => nc(59445)))]), (() => [Promise.all([nc.e(311), nc.e(313), nc.e(320)]).then((() => nc(59521))), Promise.all([nc.e(311), nc.e(314), nc.e(360), nc.e(324), nc.e(359)]).then((() => nc(59547)))])), cB
    })();
    Object.getOwnPropertyDescriptor(an.prototype, "decalMap") || Object.defineProperty(an.prototype, "decalMap", (0, SB.e)("PBRBaseMaterial", "decalMap")), (0, nc(39778).e)();
    var lB = nc(38068);
    var YB = nc(38146),
      LB = nc(39754),
      gn = nc(37895),
      UB = nc(37911),
      bn = nc(38e3);
    let ZB = !1;
    const QB = new jB.g,
      CB = new jB.g;
    class vn extends LB.e {
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
      set wrapU(cB) {
        if (this._textures)
          for (let Bc = 0; Bc < this._textures.length; Bc++) this._textures[Bc].wrapU = cB
      }
      set wrapV(cB) {
        if (this._textures)
          for (let Bc = 0; Bc < this._textures.length; Bc++) this._textures[Bc].wrapV = cB
      }
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        const uc = !(!Ic || !Ic.generateMipMaps) && Ic.generateMipMaps,
          sc = !(!Ic || !Ic.generateDepthTexture) && Ic.generateDepthTexture,
          Mc = Ic && Ic.depthTextureFormat ? Ic.depthTextureFormat : 15,
          Pc = !Ic || void 0 === Ic.doNotChangeAspectRatio || Ic.doNotChangeAspectRatio,
          qB = !(!Ic || !Ic.drawOnlyOnFirstAttachmentByDefault) && Ic.drawOnlyOnFirstAttachmentByDefault;
        if (super(cB, Bc, Vc, uc, Pc, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), ZB || (ZB = !0, UB.ThinEngine.prototype.restoreSingleAttachment = function() {
            const cB = this._gl;
            this.bindAttachments([cB.BACK])
          }, UB.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const cB = this._gl;
            this.bindAttachments([cB.COLOR_ATTACHMENT0])
          }, UB.ThinEngine.prototype.buildTextureLayout = function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const nc = this._gl,
              Vc = [];
            if (Bc) Vc.push(nc.BACK);
            else
              for (let Ic = 0; Ic < cB.length; Ic++) cB[Ic] ? Vc.push(nc["COLOR_ATTACHMENT" + Ic]) : Vc.push(nc.NONE);
            return Vc
          }, UB.ThinEngine.prototype.bindAttachments = function(cB) {
            const Bc = this._gl,
              nc = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, nc)
              for (let Vc = 0; Vc < cB.length; Vc++) cB[Vc] !== Bc.NONE && nc[Vc] && (0, bn.j)(nc[Vc].format) && (this._integerMRTAttachmentsMask |= 1 << Vc);
            Bc.drawBuffers(cB)
          }, UB.ThinEngine.prototype.clearAttachments = function(cB, Bc, nc, Vc) {
            let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const uc = this._currentRenderTarget?.textures;
            let sc = !1;
            if (nc && cB && uc)
              for (let Mc = 0; Mc < Bc.length; Mc++) {
                const cB = uc[Mc];
                if (Bc[Mc] !== this._gl.NONE && cB && (0, bn.j)(cB.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  sc = !0;
                  break
                }
              }
            if (!sc || !cB || !uc) return this.bindAttachments(Bc), void this.clear(cB, nc, Vc, Ic, rB);
            this.bindAttachments(Bc), this._applyColorWriteState();
            for (let Mc = 0; Mc < Bc.length; Mc++) {
              const nc = uc[Mc];
              if (Bc[Mc] !== this._gl.NONE && nc) {
                let Bc = cB;
                if ((0, bn.j)(nc.format)) {
                  const Vc = (0, bn.n)(nc.type);
                  Bc = Vc ? QB : CB;
                  const Ic = Vc ? 255 : 1;
                  Bc.r = Math.round(cB.r * Ic), Bc.g = Math.round(cB.g * Ic), Bc.b = Math.round(cB.b * Ic), Bc.a = Math.round(cB.a * Ic)
                }
                this._clearColorAttachment(Mc, Bc, nc.format, nc.type)
              }
            }
            if (Vc || Ic) {
              const cB = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Vc, Ic, rB)
              } finally {
                this._integerMRTAttachmentsMask = cB
              }
            }
          }, UB.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              nc = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, cB.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(cB), Bc || this.generateMipMapsMultiFramebuffer(cB), nc && (cB._MSAAFramebuffer && this._bindUnboundFramebuffer(cB._framebuffer), nc()), this._bindUnboundFramebuffer(null)
          }, UB.ThinEngine.prototype.createMultipleRenderTarget = function(cB, Bc) {
            let nc, Vc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ic = !1,
              rB = !0,
              uc = !1,
              sc = !1,
              Mc = 1,
              Pc = 1,
              qB = [],
              Oc = [],
              Tc = [],
              fc = [],
              mB = [],
              ec = [],
              tB = [],
              Sc = [],
              yB = [],
              zB = !1;
            const pc = this._createHardwareRenderTargetWrapper(!0, !1, cB);
            void 0 !== Bc && (Ic = void 0 !== Bc.generateMipMaps && Bc.generateMipMaps, rB = void 0 === Bc.generateDepthBuffer || Bc.generateDepthBuffer, uc = void 0 !== Bc.generateStencilBuffer && Bc.generateStencilBuffer, sc = void 0 !== Bc.generateDepthTexture && Bc.generateDepthTexture, Mc = Bc.ffc ?? 1, Pc = Bc.samples ?? Pc, qB = Bc.types || qB, Oc = Bc.samplingModes || Oc, Tc = Bc.useSRGBBuffers || Tc, fc = Bc.formats || fc, mB = Bc.targetTypes || mB, ec = Bc.faceIndex || ec, tB = Bc.layerIndex || tB, Sc = Bc.layerCounts || Sc, yB = Bc.labels || yB, zB = Bc.dontCreateTextures ?? !1, this.Tv > 1 && (13 === Bc.depthTextureFormat || 17 === Bc.depthTextureFormat || 16 === Bc.depthTextureFormat || 14 === Bc.depthTextureFormat || 18 === Bc.depthTextureFormat) && (nc = Bc.depthTextureFormat)), void 0 === nc && (nc = uc ? 13 : 14);
            const hc = this._gl,
              aB = this._currentFramebuffer,
              lc = hc.createFramebuffer();
            this._bindUnboundFramebuffer(lc);
            const Yc = cB.width ?? cB,
              Lc = cB.height ?? cB,
              gB = [],
              bB = [],
              Zc = this.Tv > 1 && (13 === nc || 17 === nc || 18 === nc);
            pc.label = Bc?.label ?? "MultiRenderTargetWrapper", pc._framebuffer = lc, pc._generateDepthBuffer = sc || rB, pc._generateStencilBuffer = sc ? Zc : uc, pc._depthStencilBuffer = this._setupFramebufferDepthAttachments(pc._generateStencilBuffer, pc._generateDepthBuffer, Yc, Lc, 1, nc), pc._attachments = bB;
            for (let Qc = 0; Qc < Mc; Qc++) {
              let cB = Oc[Qc] || 3,
                Bc = qB[Qc] || 0,
                nc = Tc[Qc] || !1;
              const Vc = fc[Qc] || 5,
                rB = mB[Qc] || 3553,
                uc = Sc[Qc] ?? 1;
              (1 !== Bc || this._caps.textureFloatLinearFiltering) && (2 !== Bc || this._caps.textureHalfFloatLinearFiltering) || (cB = 1);
              const sc = this._getSamplingParameters(cB, Ic);
              1 !== Bc || this._caps.textureFloat || (Bc = 0, Uc.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), nc = nc && this._caps.supportSRGBBuffers && (this.Tv > 1 || this.isWebGPU);
              const Mc = this.Tv > 1,
                Pc = hc[Mc ? "COLOR_ATTACHMENT" + Qc : "COLOR_ATTACHMENT" + Qc + "_WEBGL"];
              if (bB.push(Pc), -1 === rB || zB) continue;
              const ec = new gn.e(this, 6);
              gB[Qc] = ec, hc.activeTexture(hc["TEXTURE" + Qc]), hc.bindTexture(rB, ec._hardwareTexture.underlyingResource), hc.texParameteri(rB, hc.TEXTURE_MAG_FILTER, sc.mag), hc.texParameteri(rB, hc.TEXTURE_MIN_FILTER, sc.min), hc.texParameteri(rB, hc.TEXTURE_WRAP_S, hc.CLAMP_TO_EDGE), hc.texParameteri(rB, hc.TEXTURE_WRAP_T, hc.CLAMP_TO_EDGE);
              const tB = this._getRGBABufferInternalSizedFormat(Bc, Vc, nc),
                aB = this._getInternalFormat(Vc),
                lc = this._getWebGLTextureType(Bc);
              if (!Mc || 35866 !== rB && 32879 !== rB)
                if (34067 === rB) {
                  for (let cB = 0; cB < 6; cB++) hc.texImage2D(hc.TEXTURE_CUBE_MAP_POSITIVE_X + cB, 0, tB, Yc, Lc, 0, aB, lc, null);
                  ec.isCube = !0
                } else hc.texImage2D(hc.TEXTURE_2D, 0, tB, Yc, Lc, 0, aB, lc, null);
              else 35866 === rB ? ec.is2DArray = !0 : ec.is3D = !0, ec.baseDepth = ec.depth = uc, hc.texImage3D(rB, 0, tB, Yc, Lc, uc, 0, aB, lc, null);
              Ic && hc.generateMipmap(rB), this._bindTextureDirectly(rB, null), ec.baseWidth = Yc, ec.baseHeight = Lc, ec.width = Yc, ec.height = Lc, ec.isReady = !0, ec.samples = 1, ec.generateMipMaps = Ic, ec.samplingMode = cB, ec.type = Bc, ec._useSRGBBuffer = nc, ec.format = Vc, ec.label = yB[Qc] ?? pc.label + "-Texture" + Qc, this._internalTexturesCache.push(ec)
            }
            if (sc && this._caps.depthTextureExtension && !zB) {
              const cB = new gn.e(this, 14);
              let Bc = 5,
                Vc = hc.DEPTH_COMPONENT16,
                rB = hc.DEPTH_COMPONENT,
                uc = hc.UNSIGNED_SHORT,
                sc = hc.DEPTH_ATTACHMENT;
              this.Tv < 2 ? Vc = hc.DEPTH_COMPONENT : 14 === nc ? (Bc = 1, uc = hc.FLOAT, Vc = hc.DEPTH_COMPONENT32F) : 18 === nc ? (Bc = 0, uc = hc.FLOAT_32_UNSIGNED_INT_24_8_REV, Vc = hc.DEPTH32F_STENCIL8, rB = hc.DEPTH_STENCIL, sc = hc.DEPTH_STENCIL_ATTACHMENT) : 16 === nc ? (Bc = 0, uc = hc.UNSIGNED_INT, Vc = hc.DEPTH_COMPONENT24, sc = hc.DEPTH_ATTACHMENT) : 13 !== nc && 17 !== nc || (Bc = 12, uc = hc.UNSIGNED_INT_24_8, Vc = hc.DEPTH24_STENCIL8, rB = hc.DEPTH_STENCIL, sc = hc.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(hc.TEXTURE_2D, cB, !0), hc.texParameteri(hc.TEXTURE_2D, hc.TEXTURE_MAG_FILTER, hc.NEAREST), hc.texParameteri(hc.TEXTURE_2D, hc.TEXTURE_MIN_FILTER, hc.NEAREST), hc.texParameteri(hc.TEXTURE_2D, hc.TEXTURE_WRAP_S, hc.CLAMP_TO_EDGE), hc.texParameteri(hc.TEXTURE_2D, hc.TEXTURE_WRAP_T, hc.CLAMP_TO_EDGE), hc.texImage2D(hc.TEXTURE_2D, 0, Vc, Yc, Lc, 0, rB, uc, null), hc.framebufferTexture2D(hc.FRAMEBUFFER, sc, hc.TEXTURE_2D, cB._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(hc.TEXTURE_2D, null), pc._depthStencilTexture = cB, pc._depthStencilTextureWithStencil = Zc, cB.baseWidth = Yc, cB.baseHeight = Lc, cB.width = Yc, cB.height = Lc, cB.isReady = !0, cB.samples = 1, cB.generateMipMaps = Ic, cB.samplingMode = 1, cB.format = nc, cB.type = Bc, cB.label = pc.label + "-DepthStencil", gB[Mc] = cB, this._internalTexturesCache.push(cB)
            }
            if (pc.setTextures(gB), Vc && hc.drawBuffers(bB), this._bindUnboundFramebuffer(aB), pc.setLayerAndFaceIndices(tB, ec), this.resetTextureCache(), zB) {
              if (Pc > 1) {
                const cB = hc.createFramebuffer();
                if (!cB) throw new Error("Unable to create multi sampled framebuffer");
                pc._samples = Pc, pc._MSAAFramebuffer = cB, Mc > 0 && Vc && (this._bindUnboundFramebuffer(cB), hc.drawBuffers(bB), this._bindUnboundFramebuffer(aB))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(pc, Pc, Vc);
            return pc
          }, UB.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(cB, Bc) {
            let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Tv < 2 || !cB) return 1;
            if (cB.samples === Bc) return Bc;
            const Vc = this._gl;
            Bc = Math.min(Bc, this.getCaps().maxMSAASamples), cB._depthStencilBuffer && (Vc.deleteRenderbuffer(cB._depthStencilBuffer), cB._depthStencilBuffer = null), cB._MSAAFramebuffer && (Vc.deleteFramebuffer(cB._MSAAFramebuffer), cB._MSAAFramebuffer = null);
            const Ic = cB._attachments.length;
            for (let uc = 0; uc < Ic; uc++) {
              const Bc = cB.textures[uc]._hardwareTexture;
              Bc?.releaseMSAARenderBuffers()
            }
            if (Bc > 1 && "function" === typeof Vc.renderbufferStorageMultisample) {
              const rB = Vc.createFramebuffer();
              if (!rB) throw new Error("Unable to create multi sampled framebuffer");
              cB._MSAAFramebuffer = rB, this._bindUnboundFramebuffer(rB);
              const uc = [];
              for (let nc = 0; nc < Ic; nc++) {
                const Ic = cB.textures[nc],
                  rB = Ic._hardwareTexture,
                  sc = Vc[this.Tv > 1 ? "COLOR_ATTACHMENT" + nc : "COLOR_ATTACHMENT" + nc + "_WEBGL"],
                  Mc = this._createRenderBuffer(Ic.width, Ic.height, Bc, -1, this._getRGBABufferInternalSizedFormat(Ic.type, Ic.format, Ic._useSRGBBuffer), sc);
                if (!Mc) throw new Error("Unable to create multi sampled framebuffer");
                rB.addMSAARenderBuffer(Mc), Ic.samples = Bc, uc.push(sc)
              }
              nc && Vc.drawBuffers(uc)
            } else this._bindUnboundFramebuffer(cB._framebuffer);
            const rB = cB._depthStencilTexture ? cB._depthStencilTexture.format : void 0;
            return cB._depthStencilBuffer = this._setupFramebufferDepthAttachments(cB._generateStencilBuffer, cB._generateDepthBuffer, cB.width, cB.height, Bc, rB), this._bindUnboundFramebuffer(null), cB._samples = Bc, Bc
          }, UB.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(cB) {
            const Bc = cB,
              nc = this._gl;
            if (Bc.isMulti)
              for (let Vc = 0; Vc < Bc._attachments.length; Vc++) {
                const cB = Bc.textures[Vc];
                !cB?.generateMipMaps || cB?.isCube || cB?.is3D || (this._bindTextureDirectly(nc.TEXTURE_2D, cB, !0), nc.generateMipmap(nc.TEXTURE_2D), this._bindTextureDirectly(nc.TEXTURE_2D, null))
              }
          }, UB.ThinEngine.prototype.resolveMultiFramebuffer = function(cB) {
            const Bc = cB,
              nc = this._gl;
            if (!Bc._MSAAFramebuffer || !Bc.isMulti) return;
            let Vc = Bc.resolveMSAAColors ? nc.COLOR_BUFFER_BIT : 0;
            Vc |= Bc._generateDepthBuffer && Bc.resolveMSAADepth ? nc.DEPTH_BUFFER_BIT : 0, Vc |= Bc._generateStencilBuffer && Bc.resolveMSAAStencil ? nc.STENCIL_BUFFER_BIT : 0;
            const Ic = Bc._attachments,
              rB = Ic.length;
            nc.bindFramebuffer(nc.READ_FRAMEBUFFER, Bc._MSAAFramebuffer), nc.bindFramebuffer(nc.DRAW_FRAMEBUFFER, Bc._framebuffer);
            for (let uc = 0; uc < rB; uc++) {
              const cB = Bc.textures[uc];
              for (let Bc = 0; Bc < rB; Bc++) Ic[Bc] = nc.NONE;
              Ic[uc] = nc[this.Tv > 1 ? "COLOR_ATTACHMENT" + uc : "COLOR_ATTACHMENT" + uc + "_WEBGL"], nc.readBuffer(Ic[uc]), nc.drawBuffers(Ic), nc.blitFramebuffer(0, 0, cB.width, cB.height, 0, 0, cB.width, cB.height, Vc, nc.NEAREST)
            }
            for (let uc = 0; uc < rB; uc++) Ic[uc] = nc[this.Tv > 1 ? "COLOR_ATTACHMENT" + uc : "COLOR_ATTACHMENT" + uc + "_WEBGL"];
            nc.drawBuffers(Ic), nc.bindFramebuffer(this._gl.FRAMEBUFFER, Bc._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = rB;
        const Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [],
          Sc = [],
          yB = [];
        this._initTypes(nc, Oc, Tc, fc, mB, ec, tB, Sc, yB, Ic);
        const zB = !Ic || void 0 === Ic.generateDepthBuffer || Ic.generateDepthBuffer,
          pc = !(!Ic || void 0 === Ic.generateStencilBuffer) && Ic.generateStencilBuffer,
          hc = Ic && Ic.samples ? Ic.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Tc,
          generateMipMaps: uc,
          generateDepthBuffer: zB,
          generateStencilBuffer: pc,
          generateDepthTexture: sc,
          depthTextureFormat: Mc,
          types: Oc,
          ffc: nc,
          useSRGBBuffers: fc,
          samples: hc,
          formats: mB,
          targetTypes: ec,
          faceIndex: tB,
          layerIndex: Sc,
          layerCounts: yB,
          labels: rB,
          label: cB
        }, this._count = nc, this._drawOnlyOnFirstAttachmentByDefault = qB, nc > 0 && (this._createInternalTextures(), this._createTextures(rB))
      }
      _initTypes(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        for (let qB = 0; qB < cB; qB++) Pc && Pc.types && void 0 !== Pc.types[qB] ? Bc.push(Pc.types[qB]) : Bc.push(Pc && Pc.defaultType ? Pc.defaultType : 0), Pc && Pc.samplingModes && void 0 !== Pc.samplingModes[qB] ? nc.push(Pc.samplingModes[qB]) : nc.push(Zc.e.BILINEAR_SAMPLINGMODE), Pc && Pc.useSRGBBuffers && void 0 !== Pc.useSRGBBuffers[qB] ? Vc.push(Pc.useSRGBBuffers[qB]) : Vc.push(!1), Pc && Pc.formats && void 0 !== Pc.formats[qB] ? Ic.push(Pc.formats[qB]) : Ic.push(5), Pc && Pc.targetTypes && void 0 !== Pc.targetTypes[qB] ? rB.push(Pc.targetTypes[qB]) : rB.push(3553), Pc && Pc.faceIndex && void 0 !== Pc.faceIndex[qB] ? uc.push(Pc.faceIndex[qB]) : uc.push(0), Pc && Pc.layerIndex && void 0 !== Pc.layerIndex[qB] ? sc.push(Pc.layerIndex[qB]) : sc.push(0), Pc && Pc.layerCounts && void 0 !== Pc.layerCounts[qB] ? Mc.push(Pc.layerCounts[qB]) : Mc.push(1)
      }
      _createInternaTextureIndexMapping() {
        const cB = {},
          Bc = [];
        if (!this._renderTarget) return Bc;
        const nc = this._renderTarget.textures;
        for (let Vc = 0; Vc < nc.length; Vc++) {
          const Ic = nc[Vc];
          if (!Ic) continue;
          const rB = cB[Ic.uniqueId];
          void 0 !== rB ? Bc[Vc] = rB : cB[Ic.uniqueId] = Vc
        }
        return Bc
      }
      _rebuild() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || cB) return;
        const Vc = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Bc && (this._releaseTextures(), this._createTextures(nc));
        const Ic = this._renderTarget.textures;
        for (let rB = 0; rB < Ic.length; rB++) {
          const cB = this._textures[rB];
          void 0 !== Vc[rB] && this._renderTarget.setTexture(Ic[Vc[rB]], rB), cB._texture = Ic[rB], cB._texture && (cB._noMipmap = !cB._texture.useMipMaps, cB._useSRGBBuffer = cB._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let cB = 0; cB < this._textures.length; cB++) this._textures[cB]._texture = null, this._textures[cB].dispose()
      }
      _createTextures(cB) {
        const Bc = this._renderTarget.textures;
        this._textures = [];
        for (let nc = 0; nc < Bc.length; nc++) {
          const Vc = new Zc.e(null, this.knc());
          cB?.[nc] && (Vc.name = cB[nc]), Vc._texture = Bc[nc], Vc._texture && (Vc._noMipmap = !Vc._texture.useMipMaps, Vc._useSRGBBuffer = Vc._texture._useSRGBBuffer), this._textures.push(Vc)
        }
      }
      setInternalTexture(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Bc && (this._texture = cB), this.renderTarget.setTexture(cB, Bc, nc), this.textures[Bc] || (this.textures[Bc] = new Zc.e(null, this.knc()), this.textures[Bc].name = this._textureNames?.[Bc] ?? this.textures[Bc].name), this.textures[Bc]._texture = cB, this.textures[Bc]._noMipmap = !cB.useMipMaps, this.textures[Bc]._useSRGBBuffer = cB._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Bc] = cB.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Bc] = cB.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Bc] = cB._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Bc])) {
          let nc;
          nc = cB.is2DArray ? 35866 : cB.isCube ? 34067 : cB.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Bc] = nc
        }
      }
      setLayerAndFaceIndex(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[cB] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[cB] = Bc), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[cB] = nc), this.renderTarget.setLayerAndFaceIndex(cB, Bc, nc))
      }
      setLayerAndFaceIndices(cB, Bc) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = cB, this._multiRenderTargetOptions.faceIndex = Bc, this.renderTarget.setLayerAndFaceIndices(cB, Bc))
      }
      get samples() {
        return this._samples
      }
      set samples(cB) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(cB) : this._samples = cB
      }
      resize(cB) {
        this._processSizeParameter(cB), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(cB, Bc, nc) {
        this._multiRenderTargetOptions.ffc = cB, this._count = cB;
        const Vc = [],
          Ic = [],
          rB = [],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [];
        this._textureNames = nc, this._initTypes(cB, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Bc), this._multiRenderTargetOptions.types = Vc, this._multiRenderTargetOptions.samplingModes = Ic, this._multiRenderTargetOptions.useSRGBBuffers = rB, this._multiRenderTargetOptions.formats = uc, this._multiRenderTargetOptions.targetTypes = sc, this._multiRenderTargetOptions.faceIndex = Mc, this._multiRenderTargetOptions.layerIndex = Pc, this._multiRenderTargetOptions.layerCounts = qB, this._multiRenderTargetOptions.labels = nc, this._rebuild(!1, !0, nc)
      }
      _unbindFrameBuffer(cB, Bc) {
        this._renderTarget && cB.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Bc)
        }))
      }
      dispose() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), cB ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const cB = this._renderTarget?.textures;
        if (cB) {
          for (let Bc = cB.length - 1; Bc >= 0; Bc--) this._textures[Bc]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var DB = nc(38214);
    class NB {
      constructor(cB) {
        this.name = DB.d.NAME_GEOMETRYBUFFERRENDERER, this.Ir = cB
      }
      register() {
        this.Ir._gatherRenderTargetsStage.registerStep(DB.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(cB) {
        this.Ir._geometryBufferRenderer && cB.push(this.Ir._geometryBufferRenderer.getGBuffer())
      }
    }
    let EB = !1;
    var oB;
    ! function(cB) {
      cB[cB.Small = 0] = "Small", cB[cB.Medium = 1] = "Medium", cB[cB.Large = 2] = "Large", cB[cB.ExtraLarge = 3] = "ExtraLarge"
    }(oB || (oB = {}));
    const WB = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      wB = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class kn {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(cB) {
        if (cB && this._enableMeshBlendTag && !this._scene.RV().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = cB
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(cB) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = cB, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(cB, Bc) {
        cB === kn.POSITION_TEXTURE_TYPE ? (this._positionIndex = Bc, this._enablePosition = !0) : cB === kn.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Bc, this._enableVelocity = !0) : cB === kn.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Bc, this._enableVelocityLinear = !0) : cB === kn.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Bc, this._enableReflectivity = !0) : cB === kn.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Bc, this._enableDepth = !0) : cB === kn.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Bc, this._enableNormal = !0) : cB === kn.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Bc, this._enableScreenspaceDepth = !0) : cB === kn.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Bc, this._enableIrradiance = !0) : cB === kn.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Bc, this._enableObjectId = !0) : cB === kn.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Bc, this._enableMeshBlendTag = !0)
      }
      _setAttachments(cB) {
        this._attachmentsFromPrePass = cB
      }
      _linkInternalTexture(cB) {
        this._multiRenderTarget.setInternalTexture(cB, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(cB) {
        this._multiRenderTarget.renderList = cB
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(cB) {
        switch (cB) {
          case kn.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case kn.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case kn.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case kn.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case kn.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case kn.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case kn.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case kn.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case kn.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case kn.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(cB) {
        this._enableDepth = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(cB) {
        this._enableNormal = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(cB) {
        this._enablePosition = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(cB) {
        this._enableVelocity = cB, cB || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = cB
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(cB) {
        this._enableVelocityLinear = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(cB) {
        this._enableReflectivity = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(cB) {
        this._enableScreenspaceDepth = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(cB) {
        this._enableIrradiance = cB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(cB) {
        if (cB && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (cB && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (cB && !this._enableObjectId && !this._linkedWithPrePass) {
          const cB = this._scene.RV(),
            Bc = Math.min(cB.getCaps().maxDrawBuffers ?? 1, 8),
            nc = this._assignRenderTargetIndices()[0] + 1;
          if (cB.getCaps().drawBuffersExtension && nc > Bc) throw new Error(`GeometryBufferRenderer: ${nc} color attachments were requested, but this engine supports at most ${Bc}`)
        }
        this._enableObjectId = cB, cB || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(cB) {
        if (this._enableMeshBlendTag !== cB) {
          if (cB) {
            const cB = this._scene.RV();
            if (! function(cB) {
                return "NATIVE" !== cB.shaderPlatformName && (cB.isWebGPU || 2 === cB.Tv)
              }(cB)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !cB.isWebGPU && !cB.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Bc = Math.min(cB.getCaps().maxDrawBuffers ?? 1, 8),
                nc = this._assignRenderTargetIndices()[0] + 1;
              if (cB.getCaps().drawBuffersExtension && nc > Bc) throw new Error(`GeometryBufferRenderer: ${nc} color attachments were requested, but this engine supports at most ${Bc}`)
            }
          }
          this._enableMeshBlendTag = cB, cB || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Ir() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        var Ic;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new jB.g(0, 0, 0, 0), this._clearDepthColor = new jB.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = cB, this._ratioOrDimensions = Bc, this._useUbo = cB.RV().supportsUniformBuffers, this._depthFormat = nc, this._textureTypesAndFormats = Vc || {}, this._initShaderSourceAsync(), Ic = kn, EB || (EB = !0, Object.defineProperty(oc.h.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(cB) {
            cB && cB.isSupported && (this._geometryBufferRenderer = cB)
          },
          enumerable: !0,
          configurable: !0
        }), oc.h.prototype.enableGeometryBufferRenderer = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            nc = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Ic(this, cB, Bc, nc), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, oc.h.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Ic._SceneComponentInitialization = cB => {
          let Bc = cB._getComponent(DB.d.NAME_GEOMETRYBUFFERRENDERER);
          Bc || (Bc = new NB(cB), cB.bqc(Bc))
        }), kn._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.RV().isWebGPU && !kn.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([nc.e(312).then((() => nc(59722))), Promise.all([nc.e(311), nc.e(323)]).then((() => nc(59729)))])) : await Promise.all([nc.e(295).then((() => nc(59737))), nc.e(294).then((() => nc(59744)))]), this._shadersLoaded = !0
      }
      isReady(cB, Bc) {
        if (!this._shadersLoaded) return !1;
        const nc = cB.AV();
        if (nc && nc.disableDepthWrite) return !1;
        if (function(cB) {
            return cB._isGaussianSplatting || "GaussianSplattingMesh" === (Bc = cB.getClassName()) || "GaussianSplattingStream" === Bc;
            var Bc
          }(cB.getMesh())) return !1;
        const Vc = [],
          Ic = [wc.i.PositionKind],
          rB = cB.getMesh();
        rB.isVerticesDataPresent(wc.i.NormalKind) && (Vc.push("#define HAS_NORMAL_ATTRIBUTE"), Ic.push(wc.i.NormalKind));
        let uc = !1,
          sc = !1;
        if (nc) {
          let cB = !1;
          if (nc.needAlphaTestingForMesh(rB) && nc.getAlphaTestTexture() && (Vc.push("#define ALPHATEST"), Vc.push(`#define ALPHATEST_UV${nc.getAlphaTestTexture().coordinatesIndex+1}`), cB = !0), (nc.bumpTexture || nc.normalTexture || nc.geometryNormalTexture) && xB.c.BumpTextureEnabled) {
            const Bc = nc.bumpTexture || nc.normalTexture || nc.geometryNormalTexture;
            Vc.push("#define BUMP"), Vc.push(`#define BUMP_UV${Bc.coordinatesIndex+1}`), cB = !0
          }
          if (this._enableReflectivity) {
            let Bc = !1;
            if ("PBRMetallicRoughnessMaterial" === nc.getClassName()) nc.metallicRoughnessTexture && (Vc.push("#define ORMTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${nc.metallicRoughnessTexture.coordinatesIndex+1}`), Vc.push("#define METALLICWORKFLOW"), cB = !0, Bc = !0), null != nc.metallic && (Vc.push("#define METALLIC"), Vc.push("#define METALLICWORKFLOW"), Bc = !0), null != nc.roughness && (Vc.push("#define ROUGHNESS"), Vc.push("#define METALLICWORKFLOW"), Bc = !0), Bc && (nc.baseTexture && (Vc.push("#define ALBEDOTEXTURE"), Vc.push(`#define ALBEDO_UV${nc.baseTexture.coordinatesIndex+1}`), nc.baseTexture.gammaSpace && Vc.push("#define GAMMAALBEDO"), cB = !0), nc.baseColor && Vc.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === nc.getClassName()) nc.specularGlossinessTexture ? (Vc.push("#define SPECULARGLOSSINESSTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${nc.specularGlossinessTexture.coordinatesIndex+1}`), cB = !0, nc.specularGlossinessTexture.gammaSpace && Vc.push("#define GAMMAREFLECTIVITYTEXTURE")) : nc.specularColor && Vc.push("#define REFLECTIVITYCOLOR"), null != nc.glossiness && Vc.push("#define GLOSSINESS");
            else if ("PBRMaterial" === nc.getClassName()) nc.metallicTexture && (Vc.push("#define ORMTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${nc.metallicTexture.coordinatesIndex+1}`), Vc.push("#define METALLICWORKFLOW"), cB = !0, Bc = !0), null != nc.metallic && (Vc.push("#define METALLIC"), Vc.push("#define METALLICWORKFLOW"), Bc = !0), null != nc.roughness && (Vc.push("#define ROUGHNESS"), Vc.push("#define METALLICWORKFLOW"), Bc = !0), Bc ? (nc.albedoTexture && (Vc.push("#define ALBEDOTEXTURE"), Vc.push(`#define ALBEDO_UV${nc.albedoTexture.coordinatesIndex+1}`), nc.albedoTexture.gammaSpace && Vc.push("#define GAMMAALBEDO"), cB = !0), nc.albedoColor && Vc.push("#define ALBEDOCOLOR")) : (nc.reflectivityTexture ? (Vc.push("#define SPECULARGLOSSINESSTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${nc.reflectivityTexture.coordinatesIndex+1}`), nc.reflectivityTexture.gammaSpace && Vc.push("#define GAMMAREFLECTIVITYTEXTURE"), cB = !0) : nc.reflectivityColor && Vc.push("#define REFLECTIVITYCOLOR"), null != nc.microSurface && Vc.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === nc.getClassName()) nc.specularTexture && (Vc.push("#define REFLECTIVITYTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${nc.specularTexture.coordinatesIndex+1}`), nc.specularTexture.gammaSpace && Vc.push("#define GAMMAREFLECTIVITYTEXTURE"), cB = !0), nc.specularColor && Vc.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === nc.getClassName()) {
              const Bc = nc;
              Vc.push("#define METALLIC"), Vc.push("#define ROUGHNESS"), Bc._useRoughnessFromMetallicTextureGreen && Bc.baseMetalnessTexture ? (Vc.push("#define ORMTEXTURE"), Vc.push(`#define REFLECTIVITY_UV${Bc.baseMetalnessTexture.coordinatesIndex+1}`), cB = !0) : Bc.baseMetalnessTexture ? (Vc.push("#define METALLIC_TEXTURE"), Vc.push(`#define METALLIC_UV${Bc.baseMetalnessTexture.coordinatesIndex+1}`), cB = !0) : Bc.specularRoughnessTexture && (Vc.push("#define ROUGHNESS_TEXTURE"), Vc.push(`#define ROUGHNESS_UV${Bc.specularRoughnessTexture.coordinatesIndex+1}`), cB = !0), Bc.baseColorTexture && (Vc.push("#define ALBEDOTEXTURE"), Vc.push(`#define ALBEDO_UV${Bc.baseColorTexture.coordinatesIndex+1}`), Bc.baseColorTexture.gammaSpace && Vc.push("#define GAMMAALBEDO"), cB = !0), Bc.baseColor && Vc.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Vc.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === nc.getClassName())) {
            const Bc = nc;
            Bc.subsurfaceWeight > 0 && Bc.subsurfaceWeightTexture && (Vc.push("#define SUBSURFACE_WEIGHT"), Vc.push(`#define SUBSURFACEWEIGHT_UV${Bc.subsurfaceWeightTexture.coordinatesIndex+1}`), cB = !0), Bc.transmissionWeight > 0 && Bc.transmissionWeightTexture && (Vc.push("#define TRANSMISSION_WEIGHT"), Vc.push(`#define TRANSMISSIONWEIGHT_UV${Bc.transmissionWeightTexture.coordinatesIndex+1}`), cB = !0)
          }
          cB && (Vc.push("#define NEED_UV"), rB.isVerticesDataPresent(wc.i.UVKind) && (Ic.push(wc.i.UVKind), Vc.push("#define UV1"), uc = !0), rB.isVerticesDataPresent(wc.i.UV2Kind) && (Ic.push(wc.i.UV2Kind), Vc.push("#define UV2"), sc = !0))
        }
        if (this._enableDepth && (Vc.push("#define DEPTH"), Vc.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Vc.push("#define NORMAL"), Vc.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Vc.push("#define POSITION"), Vc.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Vc.push("#define VELOCITY"), Vc.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(rB) && Vc.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Vc.push("#define VELOCITY_LINEAR"), Vc.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(rB) && Vc.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Vc.push("#define REFLECTIVITY"), Vc.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Vc.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Vc.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Vc.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Vc.push("#define IRRADIANCE");
          const cB = this._scene;
          if (cB.environmentTexture) {
            const Bc = {};
            let Ic = !1,
              rB = 0;
            "OpenPBRMaterial" !== nc.getClassName() && "StandardMaterial" !== nc.getClassName() && "PBRMetallicRoughnessMaterial" !== nc.getClassName() && "PBRSpecularGlossinessMaterial" !== nc.getClassName() && "PBRMaterial" !== nc.getClassName() || (Ic = !!nc.realtimeFiltering, rB = nc.realtimeFilteringQuality || 0), (0, Ac.Y)(cB, cB.environmentTexture, Bc, Ic, rB, !0);
            for (const cB in Bc) Bc[cB] && Vc.push("#define " + cB);
            Bc.USEIRRADIANCEMAP || Vc.push("#define SPHERICAL_HARMONICS");
            const uc = cB.postProcessRenderPipelineManager.supportedPipelines.find((cB => "IBLShadowsRenderPipeline" === cB.getClassName()));
            if (uc) {
              const cB = uc;
              cB._getAccumulatedTexture() && (Vc.push("#define IBL_SHADOW_TEXTURE"), cB.coloredShadows && Vc.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Vc.push("#define OBJECT_ID"), Vc.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Vc.push("#define MESH_BLEND_TAG"), Vc.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Vc.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Vc.push("#define ENCODE_NORMAL"), rB.useBones && rB.computeBonesUsingShaders && rB.skeleton ? (Ic.push(wc.i.MatricesIndicesKind), Ic.push(wc.i.MatricesWeightsKind), rB.numBoneInfluencers > 4 && (Ic.push(wc.i.MatricesIndicesExtraKind), Ic.push(wc.i.MatricesWeightsExtraKind)), Vc.push("#define NUM_BONE_INFLUENCERS " + rB.numBoneInfluencers), Vc.push("#define BONETEXTURE " + rB.skeleton.isUsingTextureForMatrices), Vc.push("#define BonesPerMesh " + (rB.skeleton.bones.length + 1))) : (Vc.push("#define NUM_BONE_INFLUENCERS 0"), Vc.push("#define BONETEXTURE false"), Vc.push("#define BonesPerMesh 0"));
        const Mc = rB.morphTargetManager ? (0, Ac.S)(rB.morphTargetManager, Vc, Ic, rB, !0, !0, !1, uc, sc, !1) : 0;
        Bc && (Vc.push("#define INSTANCES"), (0, Ac.vb)(Ic, this._enableVelocity || this._enableVelocityLinear), cB.getRenderingMesh().hasThinInstances && Vc.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Vc.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Vc.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, qn.i)(nc, this._scene, Vc);
        const Pc = this._scene.RV(),
          qB = cB._getDrawWrapper(void 0, !0),
          Oc = qB.defines,
          Tc = Vc.join("\n");
        return Oc !== Tc && qB.setEffect(Pc.createEffect("geometry", {
          attributes: Ic,
          uniformsNames: wB,
          samplers: WB,
          defines: Tc,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Mc
          },
          shaderLanguage: this.shaderLanguage
        }, Pc), Tc), qB.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(cB) {
        if (this._enableObjectId && 1 !== cB) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== cB) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = cB
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.RV().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Ir.RV()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Ir.RV().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const cB = [],
          Bc = [];
        let nc = 0;
        return this._enableDepth && (this._depthIndex = nc, nc++, cB.push("gBuffer_Depth"), Bc.push(this._textureTypesAndFormats[kn.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = nc, nc++, cB.push("gBuffer_Normal"), Bc.push(this._textureTypesAndFormats[kn.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = nc, nc++, cB.push("gBuffer_Position"), Bc.push(this._textureTypesAndFormats[kn.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = nc, nc++, cB.push("gBuffer_Velocity"), Bc.push(this._textureTypesAndFormats[kn.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = nc, nc++, cB.push("gBuffer_VelocityLinear"), Bc.push(this._textureTypesAndFormats[kn.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = nc, nc++, cB.push("gBuffer_Reflectivity"), Bc.push(this._textureTypesAndFormats[kn.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = nc, nc++, cB.push("gBuffer_ScreenspaceDepth"), Bc.push(this._textureTypesAndFormats[kn.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = nc, nc++, cB.push("gBuffer_Irradiance"), Bc.push(this._textureTypesAndFormats[kn.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = nc, nc++, cB.push("gBuffer_ObjectId"), Bc.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = nc, nc++, cB.push("gBuffer_MeshBlendTag"), Bc.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [nc, cB, Bc]
      }
      _createRenderTargets() {
        const cB = this._scene.RV(),
          [Bc, nc, Vc] = this._assignRenderTargetIndices(),
          Ic = Math.min(cB.getCaps().maxDrawBuffers ?? 1, 8);
        if (cB.getCaps().drawBuffersExtension && Bc > Ic) throw new Error(`GeometryBufferRenderer: ${Bc} color attachments were requested, but this engine supports at most ${Ic}`);
        let uc = 0;
        cB._caps.textureFloat && cB._caps.textureFloatLinearFiltering ? uc = 1 : cB._caps.textureHalfFloat && cB._caps.textureHalfFloatLinearFiltering && (uc = 2);
        const sc = this._getRenderTargetDimensions(),
          Mc = [],
          Pc = [],
          qB = [];
        for (const rB of Vc) rB ? (Mc.push(rB.textureType), Pc.push(rB.textureFormat), qB.push(rB.samplingMode ?? 2)) : (Mc.push(uc), Pc.push(5), qB.push(2));
        if (this._normalsAreUnsigned = 11 === Mc[kn.NORMAL_TEXTURE_TYPE] || 13 === Mc[kn.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new vn("gBuffer", sc, Bc, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Mc,
            formats: Pc,
            samplingModes: qB,
            depthTextureFormat: this._depthFormat
          }, nc.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Zc.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Zc.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Oc = [!0],
          Tc = [!1],
          fc = [!0];
        for (let rB = 1; rB < Bc; ++rB) Oc.push(!0), fc.push(!1), Tc.push(!0);
        const mB = cB.buildTextureLayout(Oc),
          ec = cB.buildTextureLayout(Tc),
          tB = cB.buildTextureLayout(fc);
        this._multiRenderTarget.onClearObservable.add((cB => {
          const Bc = this.useSpecificClearForDepthTexture ? ec : mB;
          cB.clearAttachments(this._clearColor, Bc, !0, !0, !0), this.useSpecificClearForDepthTexture && cB.clearAttachments(this._clearDepthColor, tB, !0, !1, !1), cB.bindAttachments(mB)
        })), this._resizeObserver = cB.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Sc = cB => {
          const Bc = cB.getRenderingMesh(),
            nc = cB.getEffectiveMesh(),
            Vc = this._scene,
            Ic = Vc.RV(),
            uc = cB.AV();
          if (!uc) return;
          if (nc._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[nc.uniqueId] && (this._previousTransformationMatrices[nc.uniqueId] = {
              rn: Wc.d.Identity(),
              viewProjection: Vc.getTransformMatrix()
            }, Bc.skeleton)) {
            const cB = Bc.skeleton.getTransformMatrices(Bc);
            this._previousBonesTransformationMatrices[Bc.uniqueId] = this._copyBonesTransformationMatrices(cB, new Float32Array(cB.length))
          }
          const sc = Bc._getInstancesRenderList(cB._id, !!cB.getReplacementMesh());
          if (sc.mustReturn) return;
          const Mc = Ic.getCaps().instancedArrays && (null !== sc.visibleInstances[cB._id] || Bc.hasThinInstances),
            Pc = nc.getWorldMatrix();
          if (this.isReady(cB, Mc)) {
            const qB = cB._getDrawWrapper();
            if (!qB) return;
            const Oc = qB.effect;
            let Tc;
            Ic.enableEffect(qB), Mc || Bc._bind(cB, Oc, uc.fillMode), this._useUbo ? ((0, Ac.y)(Oc, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Oc.setMatrix("viewProjection", Vc.getTransformMatrix()), Oc.setMatrix("view", Vc.getViewMatrix()), this._scene.bindEyePosition(Oc, "vEyePosition"));
            if (Bc._instanceDataStorage.isFrozen || !uc.backFaceCulling && null === uc.sideOrientation) Tc = Bc._effectiveSideOrientation;
            else {
              const cB = nc._getWorldMatrixDeterminant();
              Tc = uc._getEffectiveOrientation(Bc), cB < 0 && (Tc = Tc === rB.c.ClockWiseSideOrientation ? rB.c.CounterClockWiseSideOrientation : rB.c.ClockWiseSideOrientation)
            }
            if (uc._preBind(qB, Tc), uc.needAlphaTestingForMesh(nc)) {
              const cB = uc.getAlphaTestTexture();
              cB && (Oc.setTexture("diffuseSampler", cB), Oc.setMatrix("diffuseMatrix", cB.getTextureMatrix()), Oc.setFloat("alphaCutOff", uc.alphaCutOff ?? .4))
            }
            if ((uc.bumpTexture || uc.normalTexture || uc.geometryNormalTexture) && Vc.RV().getCaps().standardDerivatives && xB.c.BumpTextureEnabled) {
              const cB = uc.bumpTexture || uc.normalTexture || uc.geometryNormalTexture;
              Oc.setFloat3("vBumpInfos", cB.coordinatesIndex, 1 / cB.level, uc.parallaxScaleBias), Oc.setMatrix("bumpMatrix", cB.getTextureMatrix()), Oc.setTexture("bumpSampler", cB), Oc.setFloat2("vTangentSpaceParams", uc.invertNormalMapX ? -1 : 1, uc.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === uc.getClassName()) null !== uc.metallicRoughnessTexture && (Oc.setTexture("reflectivitySampler", uc.metallicRoughnessTexture), Oc.setMatrix("reflectivityMatrix", uc.metallicRoughnessTexture.getTextureMatrix())), null !== uc.metallic && Oc.setFloat("metallic", uc.metallic), null !== uc.roughness && Oc.setFloat("glossiness", 1 - uc.roughness), null !== uc.baseTexture && (Oc.setTexture("albedoSampler", uc.baseTexture), Oc.setMatrix("albedoMatrix", uc.baseTexture.getTextureMatrix())), null !== uc.baseColor && Oc.setColor3("albedoColor", uc.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === uc.getClassName()) null !== uc.specularGlossinessTexture ? (Oc.setTexture("reflectivitySampler", uc.specularGlossinessTexture), Oc.setMatrix("reflectivityMatrix", uc.specularGlossinessTexture.getTextureMatrix())) : null !== uc.specularColor && Oc.setColor3("reflectivityColor", uc.specularColor), null !== uc.glossiness && Oc.setFloat("glossiness", uc.glossiness);
            else if ("PBRMaterial" === uc.getClassName()) null !== uc.metallicTexture && (Oc.setTexture("reflectivitySampler", uc.metallicTexture), Oc.setMatrix("reflectivityMatrix", uc.metallicTexture.getTextureMatrix())), null !== uc.metallic && Oc.setFloat("metallic", uc.metallic), null !== uc.roughness && Oc.setFloat("glossiness", 1 - uc.roughness), null !== uc.roughness || null !== uc.metallic || null !== uc.metallicTexture ? (null !== uc.albedoTexture && (Oc.setTexture("albedoSampler", uc.albedoTexture), Oc.setMatrix("albedoMatrix", uc.albedoTexture.getTextureMatrix())), null !== uc.albedoColor && Oc.setColor3("albedoColor", uc.albedoColor)) : (null !== uc.reflectivityTexture ? (Oc.setTexture("reflectivitySampler", uc.reflectivityTexture), Oc.setMatrix("reflectivityMatrix", uc.reflectivityTexture.getTextureMatrix())) : null !== uc.reflectivityColor && Oc.setColor3("reflectivityColor", uc.reflectivityColor), null !== uc.microSurface && Oc.setFloat("glossiness", uc.microSurface));
            else if ("StandardMaterial" === uc.getClassName()) null !== uc.specularTexture && (Oc.setTexture("reflectivitySampler", uc.specularTexture), Oc.setMatrix("reflectivityMatrix", uc.specularTexture.getTextureMatrix())), null !== uc.specularColor && Oc.setColor3("reflectivityColor", uc.specularColor);
            else if ("OpenPBRMaterial" === uc.getClassName()) {
              const cB = uc;
              cB._useRoughnessFromMetallicTextureGreen && cB.baseMetalnessTexture ? (Oc.setTexture("reflectivitySampler", cB.baseMetalnessTexture), Oc.setMatrix("reflectivityMatrix", cB.baseMetalnessTexture.getTextureMatrix())) : cB.baseMetalnessTexture ? (Oc.setTexture("metallicSampler", cB.baseMetalnessTexture), Oc.setMatrix("metallicMatrix", cB.baseMetalnessTexture.getTextureMatrix())) : cB.specularRoughnessTexture && (Oc.setTexture("roughnessSampler", cB.specularRoughnessTexture), Oc.setMatrix("roughnessMatrix", cB.specularRoughnessTexture.getTextureMatrix())), Oc.setFloat("metallic", cB.baseMetalness), Oc.setFloat("glossiness", 1 - cB.specularRoughness), null !== cB.baseColorTexture && (Oc.setTexture("albedoSampler", cB.baseColorTexture), Oc.setMatrix("albedoMatrix", cB.baseColorTexture.getTextureMatrix())), null !== cB.baseColor && Oc.setColor3("albedoColor", cB.baseColor)
            }
            if (this._enableIrradiance && Vc.environmentTexture) {
              const cB = Vc.environmentTexture,
                Bc = Vc.postProcessRenderPipelineManager.supportedPipelines.find((cB => "IBLShadowsRenderPipeline" === cB.getClassName()));
              if (Bc) {
                const cB = Bc._getAccumulatedTexture();
                cB && (Oc.setTexture("iblShadowSampler", cB), Oc.setFloat2("shadowTextureSize", cB.getSize().width, cB.getSize().height))
              }
              if (Oc.setMatrix("reflectionMatrix", cB.getReflectionTextureMatrix()), Oc.setFloat2("vReflectionInfos", cB.level * Vc.iblIntensity, 0), Oc.setTexture("reflectionSampler", cB), cB.irradianceTexture && (Oc.setTexture("irradianceSampler", cB.irradianceTexture), cB.irradianceTexture._dominantDirection && Oc.setVector3("vReflectionDominantDirection", cB.irradianceTexture._dominantDirection)), cB.sphericalPolynomial) {
                const Bc = cB.sphericalPolynomial;
                if (Bc.preScaledHarmonics) {
                  const cB = Bc.preScaledHarmonics;
                  Oc.setVector3("vSphericalL00", cB.l00), Oc.setVector3("vSphericalL1_1", cB.l1_1), Oc.setVector3("vSphericalL10", cB.l10), Oc.setVector3("vSphericalL11", cB.l11), Oc.setVector3("vSphericalL2_2", cB.l2_2), Oc.setVector3("vSphericalL2_1", cB.l2_1), Oc.setVector3("vSphericalL20", cB.l20), Oc.setVector3("vSphericalL21", cB.l21), Oc.setVector3("vSphericalL22", cB.l22)
                } else Oc.setFloat3("vSphericalX", Bc.x.x, Bc.x.y, Bc.x.z), Oc.setFloat3("vSphericalY", Bc.y.x, Bc.y.y, Bc.y.z), Oc.setFloat3("vSphericalZ", Bc.z.x, Bc.z.y, Bc.z.z), Oc.setFloat3("vSphericalXX_ZZ", Bc.xx.x - Bc.zz.x, Bc.xx.y - Bc.zz.y, Bc.xx.z - Bc.zz.z), Oc.setFloat3("vSphericalYY_ZZ", Bc.yy.x - Bc.zz.x, Bc.yy.y - Bc.zz.y, Bc.yy.z - Bc.zz.z), Oc.setFloat3("vSphericalZZ", Bc.zz.x, Bc.zz.y, Bc.zz.z), Oc.setFloat3("vSphericalXY", Bc.xy.x, Bc.xy.y, Bc.xy.z), Oc.setFloat3("vSphericalYZ", Bc.yz.x, Bc.yz.y, Bc.yz.z), Oc.setFloat3("vSphericalZX", Bc.zx.x, Bc.zx.y, Bc.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === uc.getClassName()) {
                const cB = uc;
                Oc.setFloat("vSubsurfaceWeight", cB.subsurfaceWeight), cB.subsurfaceWeightTexture && (Oc.setTexture("subsurfaceWeightSampler", cB.subsurfaceWeightTexture), Oc.setMatrix("subsurfaceWeightMatrix", cB.subsurfaceWeightTexture.getTextureMatrix())), Oc.setFloat("vTransmissionWeight", cB.transmissionWeight), cB.transmissionWeightTexture && (Oc.setTexture("transmissionWeightSampler", cB.transmissionWeightTexture), Oc.setMatrix("transmissionWeightMatrix", cB.transmissionWeightTexture.getTextureMatrix())), Oc.setFloat("vTransmissionScatterAnisotropy", cB.transmissionScatterAnisotropy), Oc.setFloat("vSubsurfaceScatterAnisotropy", cB.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, qn.d)(Oc, uc, this._scene), Bc.useBones && Bc.computeBonesUsingShaders && Bc.skeleton) {
              const cB = Bc.skeleton;
              if (cB.isUsingTextureForMatrices && Oc.getUniformIndex("boneTextureInfo") > -1) {
                const nc = cB.getTransformMatrixTexture(Bc);
                Oc.setTexture("boneSampler", nc), Oc.setFloat2("boneTextureInfo", cB._textureWidth, cB._textureHeight)
              } else Oc.setMatrices("mBones", Bc.skeleton.getTransformMatrices(Bc));
              (this._enableVelocity || this._enableVelocityLinear) && Oc.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Bc.uniqueId])
            }
            if ((0, Ac.w)(Bc, Oc), Bc.morphTargetManager && Bc.morphTargetManager.isUsingTextureForTargets && Bc.morphTargetManager._bind(Oc), (this._enableVelocity || this._enableVelocityLinear) && (Oc.setMatrix("previousWorld", this._previousTransformationMatrices[nc.uniqueId].rn), Oc.setMatrix("previousViewProjection", this._previousTransformationMatrices[nc.uniqueId].viewProjection)), this._enableObjectId) {
              let cB = Bc.uniqueId;
              if (this.objectIdProvider) cB = (0, fB.h)(Bc, this.objectIdProvider);
              else if (cB > 16777215) throw new Error(`Invalid geometry object ID ${cB} for mesh "${Bc.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Oc.setFloat("objectId", cB)
            }
            if (this._enableMeshBlendTag) {
              const cB = this.meshBlendTagProvider ? (0, fB.f)(Bc, this.meshBlendTagProvider) : Bc.meshBlendingTag;
              Oc.setInt("meshBlendTag", cB)
            }
            Mc && Bc.hasThinInstances && Oc.setMatrix("world", Pc), Bc._processRendering(nc, cB, Oc, uc.fillMode, sc, Mc, ((cB, Bc) => {
              cB || Oc.setMatrix("world", Bc)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[nc.uniqueId].rn = Pc.clone(), this._previousTransformationMatrices[nc.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Bc.skeleton && this._copyBonesTransformationMatrices(Bc.skeleton.getTransformMatrices(Bc), this._previousBonesTransformationMatrices[nc.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Bc, nc, Vc) => {
          if ((Vc || 0 === nc) && Bc.rD)
            for (let Ic = 0; Ic < Bc.rD.length; ++Ic) {
              const nc = Bc.rD[Ic],
                Vc = nc.AV(),
                rB = nc.getRenderingMesh();
              if (!Vc) continue;
              const uc = rB._getInstancesRenderList(nc._id, !!nc.getReplacementMesh()),
                sc = cB.getCaps().instancedArrays && (null !== uc.visibleInstances[nc._id] || rB.hasThinInstances);
              if (!this.isReady(nc, sc)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Bc, nc, Vc, Ic) => {
          let rB;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.RV().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Ic.length) {
            for (cB.setColorWrite(!1), rB = 0; rB < Ic.length; rB++) Sc(Ic.data[rB]);
            cB.setColorWrite(!0)
          }
          for (rB = 0; rB < Bc.length; rB++) Sc(Bc.data[rB]);
          for (cB.setDepthWrite(!1), rB = 0; rB < nc.length; rB++) Sc(nc.data[rB]);
          if (this.renderTransparentMeshes)
            for (rB = 0; rB < Vc.length; rB++) Sc(Vc.data[rB]);
          cB.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const cB = this._scene.RV();
        return {
          width: Math.max(1, Math.floor(cB.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(cB.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(cB, Bc) {
        for (let nc = 0; nc < cB.length; nc++) Bc[nc] = cB[nc];
        return Bc
      }
    }
    kn.ForceGLSL = !1, kn.DEPTH_TEXTURE_TYPE = 0, kn.NORMAL_TEXTURE_TYPE = 1, kn.POSITION_TEXTURE_TYPE = 2, kn.VELOCITY_TEXTURE_TYPE = 3, kn.REFLECTIVITY_TEXTURE_TYPE = 4, kn.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, kn.VELOCITY_LINEAR_TEXTURE_TYPE = 6, kn.IRRADIANCE_TEXTURE_TYPE = 7, kn.OBJECT_ID_TEXTURE_TYPE = 8, kn.MESH_BLEND_TAG_TEXTURE_TYPE = 9, kn._SceneComponentInitialization = cB => {
      throw (0, SB.k)("GeometryBufferRendererSceneComponent")
    };
    var XB = nc(35799);
    const HB = {
      effect: null,
      subMesh: null
    };

    function FB(cB) {
      if ("number" === typeof cB) return 1;
      if (cB instanceof Wc.m) return 2;
      if (cB instanceof Wc.p || cB instanceof jB.e) return 3;
      if (cB instanceof Wc.t || cB instanceof jB.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class JB {
      populateVectorFromLinkedProperties(cB) {
        const Bc = FB(cB);
        for (const nc in this.linkedProperties) {
          const cB = this.linkedProperties[nc],
            Vc = cB.numComponents;
          if (Bc < Vc || cB.targetUniformComponentOffset > Bc - Vc) return void(1 == Vc ? Uc.c.Error(`Float property ${cB.name} has an offset that is too large.`) : Uc.c.Error(`Vector${Vc} property ${cB.name} won't fit in Vector${Bc} or has an offset that is too large.`));
          "number" === typeof cB.value ? JB._tmpArray[cB.targetUniformComponentOffset] = cB.value : cB.value.toArray(JB._tmpArray, cB.targetUniformComponentOffset)
        }
        cB.QMc(JB._tmpArray)
      }
      constructor(cB, Bc) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = cB, this.numComponents = Bc
      }
    }
    JB._tmpArray = [0, 0, 0, 0];
    class jn {
      constructor(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = cB, this.targetUniformName = nc, this.defaultValue = Bc, this.value = Bc, this.targetUniformComponentNum = Vc, this.targetUniformComponentOffset = Ic, this.requiredDefine = rB
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : FB(this.defaultValue)
      }
    }
    class RB {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(cB, Bc, nc) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = cB, this.samplerPrefix = Bc, this.textureDefine = nc
      }
    }
    class KB extends((0, eB.d)((0, mn.d)(kB.e))) {}
    class xn extends(function(cB) {
      return class extends cB {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(KB)) {}
    class dB extends((0, Rc.g)(xn)) {
      constructor(cB) {
        super(cB), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class AB extends((0, tn.e)(Kc.c)) {}
    let GB = (() => {
        var cB, Bc, Vc, Ic, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Qc, Cc, vB, Dc, oc, kB, Xc, Hc, Fc, Rc, Kc, Gc, cn, BB, nB, VB, IB, rn, uB, sB, MB, PB, mn, eB, tn, SB, yn, zn, pB, hB, an, LB, gn, UB, bn, ZB, QB, CB, vn, DB, NB, EB, oB, WB, wB, XB, FB, KB, xn, GB, cV, Bn, nn, Vn, In, rV, un, sn, Mn, Pn, qV, On, Tn, fn, mV, en, tV, Sn, yV, zV, pn, hn, aV, lnc, Yn, Ln, gV, Un, bV, Zn;
        let Qn, Cn, vV, Dn, Nn, En, onc, Wn, wn, kV, Xn, Hn, Fn, Jn, jV, Rn, iV, Kn, xV, dn, An, Gn, cI, BV, nV, VV, IV, rI, uV, sV, MV, PV, qI, OV, TV, fV, mI, eV, tI, SV, yI, zI, pV, hV, aI, lV, YV, LV, gI, UV, bI, ZV, QV, CV, vI, DV, NV, EV, oV, WV, wV, kI, XV, HV, FV, JV, jI, RV, iI, KV, xI, dV, AV, GV, cr, BI, nI, VI, II, rr, uI, sI, MI, PI, qr, OI, TI, fI, mr, eI, tr, SI, yr, zr, pI, hI, ar, lI, YI, LI, gr, UI, br, ZI, QI, CI = AB,
          vr = [],
          DI = [],
          NI = [],
          EI = [],
          oI = [],
          WI = [],
          wI = [],
          kr = [],
          XI = [],
          HI = [],
          FI = [],
          JI = [],
          jr = [],
          RI = [],
          ir = [],
          KI = [],
          xr = [],
          dI = [],
          AI = [],
          GI = [],
          cu = [],
          Br = [],
          nr = [],
          Vr = [],
          Ir = [],
          ru = [],
          ur = [],
          sr = [],
          Mr = [],
          Pr = [],
          qu = [],
          Or = [],
          Tr = [],
          fr = [],
          mu = [],
          er = [],
          tu = [],
          Sr = [],
          yu = [],
          zu = [],
          pr = [],
          hr = [],
          au = [],
          lr = [],
          Yr = [],
          Lr = [],
          gu = [],
          Ur = [],
          bu = [],
          Zr = [],
          Qr = [],
          Cr = [],
          vu = [],
          Dr = [],
          Nr = [],
          Er = [],
          or = [],
          Wr = [],
          wr = [],
          ku = [],
          Xr = [],
          Hr = [],
          Fr = [],
          Jr = [],
          ju = [],
          Rr = [],
          iu = [],
          Kr = [],
          xu = [],
          dr = [],
          Ar = [],
          Gr = [],
          cs = [],
          Bu = [],
          nu = [],
          Vu = [],
          Iu = [],
          rs = [],
          uu = [],
          su = [],
          Mu = [],
          Pu = [],
          qs = [],
          Ou = [],
          Tu = [],
          fu = [],
          ms = [],
          eu = [],
          ts = [],
          Su = [],
          ys = [],
          zs = [],
          pu = [],
          hu = [],
          as = [],
          lu = [],
          Yu = [],
          Lu = [],
          gs = [],
          Uu = [],
          bs = [],
          Zu = [],
          Qu = [],
          Cu = [],
          vs = [],
          Du = [],
          Nu = [],
          Eu = [],
          ou = [],
          Wu = [],
          wu = [],
          ks = [],
          Xu = [],
          Hu = [],
          Fu = [],
          Ju = [],
          jsc = [],
          Ru = [],
          is = [],
          Ku = [],
          xs = [],
          du = [],
          Au = [],
          Gu = [],
          cM = [],
          Bs = [],
          ns = [],
          Vs = [],
          Is = [],
          rM = [],
          us = [],
          ss = [],
          Ms = [],
          Ps = [],
          qM = [],
          Os = [],
          Ts = [],
          fs = [],
          mM = [],
          es = [],
          tM = [],
          Ss = [],
          yM = [],
          zM = [],
          ps = [],
          hs = [],
          aM = [],
          ls = [],
          Ys = [],
          Ls = [],
          gM = [],
          Us = [],
          bM = [],
          Zs = [],
          Qs = [],
          Cs = [],
          vM = [],
          Ds = [],
          Ns = [],
          Es = [],
          os = [],
          Ws = [],
          ws = [],
          kM = [],
          Xs = [],
          Hs = [],
          Fs = [],
          Jsc = [],
          jM = [],
          Rs = [],
          iM = [],
          Ks = [],
          xM = [],
          ds = [],
          As = [],
          Gs = [],
          cP = [],
          BM = [],
          nM = [],
          VM = [],
          IM = [],
          rP = [],
          uM = [],
          sM = [],
          MM = [],
          PM = [],
          qP = [],
          OM = [],
          TM = [],
          fM = [],
          mP = [],
          eM = [],
          tP = [],
          SM = [],
          yP = [],
          zP = [],
          pM = [],
          hM = [],
          aP = [],
          lM = [],
          YM = [],
          LM = [],
          gP = [],
          UM = [],
          bP = [];
        return cB = class extends CI {
          get baseWeight() {
            return (0, Lc.c)(this, Bc, "f")
          }
          set baseWeight(cB) {
            (0, Lc.f)(this, Bc, cB, "f")
          }
          get baseWeightTexture() {
            return (0, Lc.c)(this, Vc, "f")
          }
          set baseWeightTexture(cB) {
            (0, Lc.f)(this, Vc, cB, "f")
          }
          get baseColor() {
            return (0, Lc.c)(this, Ic, "f")
          }
          set baseColor(cB) {
            (0, Lc.f)(this, Ic, cB, "f")
          }
          get baseColorTexture() {
            return (0, Lc.c)(this, uc, "f")
          }
          set baseColorTexture(cB) {
            (0, Lc.f)(this, uc, cB, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Lc.c)(this, sc, "f")
          }
          set baseDiffuseRoughness(cB) {
            (0, Lc.f)(this, sc, cB, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Lc.c)(this, Mc, "f")
          }
          set baseDiffuseRoughnessTexture(cB) {
            (0, Lc.f)(this, Mc, cB, "f")
          }
          get baseMetalness() {
            return (0, Lc.c)(this, Pc, "f")
          }
          set baseMetalness(cB) {
            (0, Lc.f)(this, Pc, cB, "f")
          }
          get baseMetalnessTexture() {
            return (0, Lc.c)(this, qB, "f")
          }
          set baseMetalnessTexture(cB) {
            (0, Lc.f)(this, qB, cB, "f")
          }
          get specularWeight() {
            return (0, Lc.c)(this, Oc, "f")
          }
          set specularWeight(cB) {
            (0, Lc.f)(this, Oc, cB, "f")
          }
          get specularWeightTexture() {
            return (0, Lc.c)(this, Tc, "f")
          }
          set specularWeightTexture(cB) {
            (0, Lc.f)(this, Tc, cB, "f")
          }
          get specularColor() {
            return (0, Lc.c)(this, fc, "f")
          }
          set specularColor(cB) {
            (0, Lc.f)(this, fc, cB, "f")
          }
          get specularColorTexture() {
            return (0, Lc.c)(this, mB, "f")
          }
          set specularColorTexture(cB) {
            (0, Lc.f)(this, mB, cB, "f")
          }
          get specularRoughness() {
            return (0, Lc.c)(this, ec, "f")
          }
          set specularRoughness(cB) {
            (0, Lc.f)(this, ec, cB, "f")
          }
          get specularRoughnessTexture() {
            return (0, Lc.c)(this, tB, "f")
          }
          set specularRoughnessTexture(cB) {
            (0, Lc.f)(this, tB, cB, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Lc.c)(this, Sc, "f")
          }
          set specularRoughnessAnisotropy(cB) {
            (0, Lc.f)(this, Sc, cB, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Lc.c)(this, yB, "f")
          }
          set specularRoughnessAnisotropyTexture(cB) {
            (0, Lc.f)(this, yB, cB, "f")
          }
          get specularIor() {
            return (0, Lc.c)(this, zB, "f")
          }
          set specularIor(cB) {
            (0, Lc.f)(this, zB, cB, "f")
          }
          get transmissionWeight() {
            return (0, Lc.c)(this, pc, "f")
          }
          set transmissionWeight(cB) {
            (0, Lc.f)(this, pc, cB, "f")
          }
          get transmissionWeightTexture() {
            return (0, Lc.c)(this, hc, "f")
          }
          set transmissionWeightTexture(cB) {
            (0, Lc.f)(this, hc, cB, "f")
          }
          get transmissionColor() {
            return (0, Lc.c)(this, aB, "f")
          }
          set transmissionColor(cB) {
            (0, Lc.f)(this, aB, cB, "f")
          }
          get transmissionColorTexture() {
            return (0, Lc.c)(this, lc, "f")
          }
          set transmissionColorTexture(cB) {
            (0, Lc.f)(this, lc, cB, "f")
          }
          get transmissionDepth() {
            return (0, Lc.c)(this, Yc, "f")
          }
          set transmissionDepth(cB) {
            (0, Lc.f)(this, Yc, cB, "f")
          }
          get transmissionDepthTexture() {
            return (0, Lc.c)(this, Qc, "f")
          }
          set transmissionDepthTexture(cB) {
            (0, Lc.f)(this, Qc, cB, "f")
          }
          get transmissionScatter() {
            return (0, Lc.c)(this, Cc, "f")
          }
          set transmissionScatter(cB) {
            (0, Lc.f)(this, Cc, cB, "f")
          }
          get transmissionScatterTexture() {
            return (0, Lc.c)(this, vB, "f")
          }
          set transmissionScatterTexture(cB) {
            (0, Lc.f)(this, vB, cB, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Lc.c)(this, Dc, "f")
          }
          set transmissionScatterAnisotropy(cB) {
            (0, Lc.f)(this, Dc, cB, "f")
          }
          get transmissionDispersionScale() {
            return (0, Lc.c)(this, oc, "f")
          }
          set transmissionDispersionScale(cB) {
            (0, Lc.f)(this, oc, cB, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Lc.c)(this, kB, "f")
          }
          set transmissionDispersionScaleTexture(cB) {
            (0, Lc.f)(this, kB, cB, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Lc.c)(this, Xc, "f")
          }
          set transmissionDispersionAbbeNumber(cB) {
            (0, Lc.f)(this, Xc, cB, "f")
          }
          get subsurfaceWeight() {
            return (0, Lc.c)(this, Hc, "f")
          }
          set subsurfaceWeight(cB) {
            (0, Lc.f)(this, Hc, cB, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Lc.c)(this, Fc, "f")
          }
          set subsurfaceWeightTexture(cB) {
            (0, Lc.f)(this, Fc, cB, "f")
          }
          get subsurfaceColor() {
            return (0, Lc.c)(this, Rc, "f")
          }
          set subsurfaceColor(cB) {
            (0, Lc.f)(this, Rc, cB, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Lc.c)(this, Kc, "f")
          }
          set subsurfaceColorTexture(cB) {
            (0, Lc.f)(this, Kc, cB, "f")
          }
          get subsurfaceRadius() {
            return (0, Lc.c)(this, Gc, "f")
          }
          set subsurfaceRadius(cB) {
            (0, Lc.f)(this, Gc, cB, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Lc.c)(this, cn, "f")
          }
          set subsurfaceRadiusScale(cB) {
            (0, Lc.f)(this, cn, cB, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Lc.c)(this, BB, "f")
          }
          set subsurfaceRadiusScaleTexture(cB) {
            (0, Lc.f)(this, BB, cB, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Lc.c)(this, nB, "f")
          }
          set subsurfaceScatterAnisotropy(cB) {
            (0, Lc.f)(this, nB, cB, "f")
          }
          get coatWeight() {
            return (0, Lc.c)(this, VB, "f")
          }
          set coatWeight(cB) {
            (0, Lc.f)(this, VB, cB, "f")
          }
          get coatWeightTexture() {
            return (0, Lc.c)(this, IB, "f")
          }
          set coatWeightTexture(cB) {
            (0, Lc.f)(this, IB, cB, "f")
          }
          get coatColor() {
            return (0, Lc.c)(this, rn, "f")
          }
          set coatColor(cB) {
            (0, Lc.f)(this, rn, cB, "f")
          }
          get coatColorTexture() {
            return (0, Lc.c)(this, uB, "f")
          }
          set coatColorTexture(cB) {
            (0, Lc.f)(this, uB, cB, "f")
          }
          get coatRoughness() {
            return (0, Lc.c)(this, sB, "f")
          }
          set coatRoughness(cB) {
            (0, Lc.f)(this, sB, cB, "f")
          }
          get coatRoughnessTexture() {
            return (0, Lc.c)(this, MB, "f")
          }
          set coatRoughnessTexture(cB) {
            (0, Lc.f)(this, MB, cB, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Lc.c)(this, PB, "f")
          }
          set coatRoughnessAnisotropy(cB) {
            (0, Lc.f)(this, PB, cB, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Lc.c)(this, mn, "f")
          }
          set coatRoughnessAnisotropyTexture(cB) {
            (0, Lc.f)(this, mn, cB, "f")
          }
          get coatIor() {
            return (0, Lc.c)(this, eB, "f")
          }
          set coatIor(cB) {
            (0, Lc.f)(this, eB, cB, "f")
          }
          get coatDarkening() {
            return (0, Lc.c)(this, tn, "f")
          }
          set coatDarkening(cB) {
            (0, Lc.f)(this, tn, cB, "f")
          }
          get coatDarkeningTexture() {
            return (0, Lc.c)(this, SB, "f")
          }
          set coatDarkeningTexture(cB) {
            (0, Lc.f)(this, SB, cB, "f")
          }
          get fuzzWeight() {
            return (0, Lc.c)(this, yn, "f")
          }
          set fuzzWeight(cB) {
            (0, Lc.f)(this, yn, cB, "f")
          }
          get fuzzWeightTexture() {
            return (0, Lc.c)(this, zn, "f")
          }
          set fuzzWeightTexture(cB) {
            (0, Lc.f)(this, zn, cB, "f")
          }
          get fuzzColor() {
            return (0, Lc.c)(this, pB, "f")
          }
          set fuzzColor(cB) {
            (0, Lc.f)(this, pB, cB, "f")
          }
          get fuzzColorTexture() {
            return (0, Lc.c)(this, hB, "f")
          }
          set fuzzColorTexture(cB) {
            (0, Lc.f)(this, hB, cB, "f")
          }
          get fuzzRoughness() {
            return (0, Lc.c)(this, an, "f")
          }
          set fuzzRoughness(cB) {
            (0, Lc.f)(this, an, cB, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Lc.c)(this, LB, "f")
          }
          set fuzzRoughnessTexture(cB) {
            (0, Lc.f)(this, LB, cB, "f")
          }
          get geometryThinWalled() {
            return (0, Lc.c)(this, gn, "f")
          }
          set geometryThinWalled(cB) {
            (0, Lc.f)(this, gn, cB, "f")
          }
          get geometryNormalTexture() {
            return (0, Lc.c)(this, UB, "f")
          }
          set geometryNormalTexture(cB) {
            (0, Lc.f)(this, UB, cB, "f")
          }
          get geometryTangent() {
            return (0, Lc.c)(this, bn, "f")
          }
          set geometryTangent(cB) {
            (0, Lc.f)(this, bn, cB, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(cB) {
            this.geometryTangent = new Wc.m(Math.cos(cB), Math.sin(cB))
          }
          get geometryTangentTexture() {
            return (0, Lc.c)(this, ZB, "f")
          }
          set geometryTangentTexture(cB) {
            (0, Lc.f)(this, ZB, cB, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Lc.c)(this, QB, "f")
          }
          set geometryCoatNormalTexture(cB) {
            (0, Lc.f)(this, QB, cB, "f")
          }
          get geometryCoatTangent() {
            return (0, Lc.c)(this, CB, "f")
          }
          set geometryCoatTangent(cB) {
            (0, Lc.f)(this, CB, cB, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(cB) {
            this.geometryCoatTangent = new Wc.m(Math.cos(cB), Math.sin(cB))
          }
          get geometryCoatTangentTexture() {
            return (0, Lc.c)(this, vn, "f")
          }
          set geometryCoatTangentTexture(cB) {
            (0, Lc.f)(this, vn, cB, "f")
          }
          get geometryOpacity() {
            return (0, Lc.c)(this, DB, "f")
          }
          set geometryOpacity(cB) {
            (0, Lc.f)(this, DB, cB, "f")
          }
          get geometryOpacityTexture() {
            return (0, Lc.c)(this, NB, "f")
          }
          set geometryOpacityTexture(cB) {
            (0, Lc.f)(this, NB, cB, "f")
          }
          get geometryThickness() {
            return (0, Lc.c)(this, EB, "f")
          }
          set geometryThickness(cB) {
            (0, Lc.f)(this, EB, cB, "f")
          }
          get geometryThicknessTexture() {
            return (0, Lc.c)(this, oB, "f")
          }
          set geometryThicknessTexture(cB) {
            (0, Lc.f)(this, oB, cB, "f")
          }
          get emissionLuminance() {
            return (0, Lc.c)(this, WB, "f")
          }
          set emissionLuminance(cB) {
            (0, Lc.f)(this, WB, cB, "f")
          }
          get emissionColor() {
            return (0, Lc.c)(this, wB, "f")
          }
          set emissionColor(cB) {
            (0, Lc.f)(this, wB, cB, "f")
          }
          get emissionColorTexture() {
            return (0, Lc.c)(this, XB, "f")
          }
          set emissionColorTexture(cB) {
            (0, Lc.f)(this, XB, cB, "f")
          }
          get thinFilmWeight() {
            return (0, Lc.c)(this, FB, "f")
          }
          set thinFilmWeight(cB) {
            (0, Lc.f)(this, FB, cB, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Lc.c)(this, KB, "f")
          }
          set thinFilmWeightTexture(cB) {
            (0, Lc.f)(this, KB, cB, "f")
          }
          get thinFilmThickness() {
            return (0, Lc.c)(this, xn, "f")
          }
          set thinFilmThickness(cB) {
            (0, Lc.f)(this, xn, cB, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Lc.c)(this, GB, "f")
          }
          set thinFilmThicknessMin(cB) {
            (0, Lc.f)(this, GB, cB, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Lc.c)(this, cV, "f")
          }
          set thinFilmThicknessTexture(cB) {
            (0, Lc.f)(this, cV, cB, "f")
          }
          get thinFilmIor() {
            return (0, Lc.c)(this, Bn, "f")
          }
          set thinFilmIor(cB) {
            (0, Lc.f)(this, Bn, cB, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Lc.c)(this, nn, "f")
          }
          set ambientOcclusionTexture(cB) {
            (0, Lc.f)(this, nn, cB, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(cB) {
            this._sssQuality !== cB && (this._sssQuality = cB, this.SMc(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(cB) {
            this._sssIrradianceTexture !== cB && (this._sssIrradianceTexture = cB, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(cB) {
            this._sssDepthTexture !== cB && (this._sssDepthTexture = cB, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Lc.c)(this, Vn, "f")
          }
          set directIntensity(cB) {
            (0, Lc.f)(this, Vn, cB, "f")
          }
          get environmentIntensity() {
            return (0, Lc.c)(this, In, "f")
          }
          set environmentIntensity(cB) {
            (0, Lc.f)(this, In, cB, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Lc.c)(this, rV, "f")
          }
          set useSpecularWeightFromTextureAlpha(cB) {
            (0, Lc.f)(this, rV, cB, "f")
          }
          get forceAlphaTest() {
            return (0, Lc.c)(this, un, "f")
          }
          set forceAlphaTest(cB) {
            (0, Lc.f)(this, un, cB, "f")
          }
          get alphaCutOff() {
            return (0, Lc.c)(this, sn, "f")
          }
          set alphaCutOff(cB) {
            (0, Lc.f)(this, sn, cB, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Lc.c)(this, Mn, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(cB) {
            (0, Lc.f)(this, Mn, cB, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Lc.c)(this, Pn, "f")
          }
          set useAmbientInGrayScale(cB) {
            (0, Lc.f)(this, Pn, cB, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(jB.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === rB.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(cB) {
            cB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = cB ? rB.c.LIGHTFALLOFF_PHYSICAL : rB.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === rB.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(cB) {
            cB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = cB ? rB.c.LIGHTFALLOFF_GLTF : rB.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Lc.c)(this, qV, "f")
          }
          set useObjectSpaceNormalMap(cB) {
            (0, Lc.f)(this, qV, cB, "f")
          }
          get useParallax() {
            return (0, Lc.c)(this, On, "f")
          }
          set useParallax(cB) {
            (0, Lc.f)(this, On, cB, "f")
          }
          get useParallaxOcclusion() {
            return (0, Lc.c)(this, Tn, "f")
          }
          set useParallaxOcclusion(cB) {
            (0, Lc.f)(this, Tn, cB, "f")
          }
          get parallaxScaleBias() {
            return (0, Lc.c)(this, fn, "f")
          }
          set parallaxScaleBias(cB) {
            (0, Lc.f)(this, fn, cB, "f")
          }
          get disableLighting() {
            return (0, Lc.c)(this, mV, "f")
          }
          set disableLighting(cB) {
            (0, Lc.f)(this, mV, cB, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Lc.c)(this, en, "f")
          }
          set forceIrradianceInFragment(cB) {
            (0, Lc.f)(this, en, cB, "f")
          }
          get maxSimultaneousLights() {
            return (0, Lc.c)(this, tV, "f")
          }
          set maxSimultaneousLights(cB) {
            (0, Lc.f)(this, tV, cB, "f")
          }
          get invertNormalMapX() {
            return (0, Lc.c)(this, Sn, "f")
          }
          set invertNormalMapX(cB) {
            (0, Lc.f)(this, Sn, cB, "f")
          }
          get invertNormalMapY() {
            return (0, Lc.c)(this, yV, "f")
          }
          set invertNormalMapY(cB) {
            (0, Lc.f)(this, yV, cB, "f")
          }
          get twoSidedLighting() {
            return (0, Lc.c)(this, zV, "f")
          }
          set twoSidedLighting(cB) {
            (0, Lc.f)(this, zV, cB, "f")
          }
          get useAlphaFresnel() {
            return (0, Lc.c)(this, pn, "f")
          }
          set useAlphaFresnel(cB) {
            (0, Lc.f)(this, pn, cB, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Lc.c)(this, hn, "f")
          }
          set useLinearAlphaFresnel(cB) {
            (0, Lc.f)(this, hn, cB, "f")
          }
          get environmentBRDFTexture() {
            return (0, Lc.c)(this, aV, "f")
          }
          set environmentBRDFTexture(cB) {
            (0, Lc.f)(this, aV, cB, "f")
          }
          get forceNormalForward() {
            return (0, Lc.c)(this, lnc, "f")
          }
          set forceNormalForward(cB) {
            (0, Lc.f)(this, lnc, cB, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Lc.c)(this, Yn, "f")
          }
          set enableSpecularAntiAliasing(cB) {
            (0, Lc.f)(this, Yn, cB, "f")
          }
          get useHorizonOcclusion() {
            return (0, Lc.c)(this, Ln, "f")
          }
          set useHorizonOcclusion(cB) {
            (0, Lc.f)(this, Ln, cB, "f")
          }
          get useRadianceOcclusion() {
            return (0, Lc.c)(this, gV, "f")
          }
          set useRadianceOcclusion(cB) {
            (0, Lc.f)(this, gV, cB, "f")
          }
          get unlit() {
            return (0, Lc.c)(this, Un, "f")
          }
          set unlit(cB) {
            (0, Lc.f)(this, Un, cB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Lc.c)(this, bV, "f")
          }
          set applyDecalMapAfterDetailMap(cB) {
            (0, Lc.f)(this, bV, cB, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(cB) {
            this._backgroundRefractionTexture = cB, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(cB) {
            this._refractionHighQualityBlur !== cB && (this._refractionHighQualityBlur = cB, this.SMc(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(cB) {
            this._realTimeFiltering = cB, this.SMc(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(cB) {
            this._realTimeFilteringQuality = cB, this.SMc(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(cB) {
            this._fuzzSampleNumber = cB, this.SMc(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Lc.c)(this, Zn, "f")
          }
          set debugMode(cB) {
            (0, Lc.f)(this, Zn, cB, "f")
          }
          constructor(nc, gB) {
            super(nc, gB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || cB.ForceGLSL), Bc.set(this, ((0, Lc.k)(this, vr), (0, Lc.k)(this, DI, void 0))), this._baseWeight = ((0, Lc.k)(this, NI), new jn("base_weight", 1, "vBaseWeight", 1)), Vc.set(this, (0, Lc.k)(this, EI, void 0)), this._baseWeightTexture = ((0, Lc.k)(this, oI), new RB("base_weight", "baseWeight", "BASE_WEIGHT")), Ic.set(this, (0, Lc.k)(this, WI, void 0)), this._baseColor = ((0, Lc.k)(this, wI), new jn("base_color", jB.e.White(), "vBaseColor", 4)), uc.set(this, (0, Lc.k)(this, kr, void 0)), this._baseColorTexture = ((0, Lc.k)(this, XI), new RB("base_color", "baseColor", "BASE_COLOR")), sc.set(this, (0, Lc.k)(this, HI, void 0)), this._baseDiffuseRoughness = ((0, Lc.k)(this, FI), new jn("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Mc.set(this, (0, Lc.k)(this, JI, void 0)), this._baseDiffuseRoughnessTexture = ((0, Lc.k)(this, jr), new RB("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Pc.set(this, (0, Lc.k)(this, RI, void 0)), this._baseMetalness = ((0, Lc.k)(this, ir), new jn("base_metalness", 0, "vReflectanceInfo", 4, 0)), qB.set(this, (0, Lc.k)(this, KI, void 0)), this._baseMetalnessTexture = ((0, Lc.k)(this, xr), new RB("base_metalness", "baseMetalness", "BASE_METALNESS")), Oc.set(this, (0, Lc.k)(this, dI, void 0)), this._specularWeight = ((0, Lc.k)(this, AI), new jn("specular_weight", 1, "vReflectanceInfo", 4, 3)), Tc.set(this, (0, Lc.k)(this, GI, void 0)), this._specularWeightTexture = ((0, Lc.k)(this, cu), new RB("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), fc.set(this, (0, Lc.k)(this, Br, void 0)), this._specularColor = ((0, Lc.k)(this, nr), new jn("specular_color", jB.e.White(), "vSpecularColor", 4)), mB.set(this, (0, Lc.k)(this, Vr, void 0)), this._specularColorTexture = ((0, Lc.k)(this, Ir), new RB("specular_color", "specularColor", "SPECULAR_COLOR")), ec.set(this, (0, Lc.k)(this, ru, void 0)), this._specularRoughness = ((0, Lc.k)(this, ur), new jn("specular_roughness", .3, "vReflectanceInfo", 4, 1)), tB.set(this, (0, Lc.k)(this, sr, void 0)), this._specularRoughnessTexture = ((0, Lc.k)(this, Mr), new RB("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Sc.set(this, (0, Lc.k)(this, Pr, void 0)), this._specularRoughnessAnisotropy = ((0, Lc.k)(this, qu), new jn("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), yB.set(this, (0, Lc.k)(this, Or, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Lc.k)(this, Tr), new RB("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), zB.set(this, (0, Lc.k)(this, fr, void 0)), this._specularIor = ((0, Lc.k)(this, mu), new jn("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), pc.set(this, (0, Lc.k)(this, er, void 0)), this._transmissionWeight = ((0, Lc.k)(this, tu), new jn("transmission_weight", 0, "vTransmissionWeight", 1)), hc.set(this, (0, Lc.k)(this, Sr, void 0)), this._transmissionWeightTexture = ((0, Lc.k)(this, yu), new RB("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), aB.set(this, (0, Lc.k)(this, zu, void 0)), this._transmissionColor = ((0, Lc.k)(this, pr), new jn("transmission_color", jB.e.White(), "vTransmissionColor", 3, 0)), lc.set(this, (0, Lc.k)(this, hr, void 0)), this._transmissionColorTexture = ((0, Lc.k)(this, au), new RB("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Yc.set(this, (0, Lc.k)(this, lr, void 0)), this._transmissionDepth = ((0, Lc.k)(this, Yr), new jn("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Qc.set(this, (0, Lc.k)(this, Lr, void 0)), this._transmissionDepthTexture = ((0, Lc.k)(this, gu), new RB("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Cc.set(this, (0, Lc.k)(this, Ur, void 0)), this._transmissionScatter = ((0, Lc.k)(this, bu), new jn("transmission_scatter", jB.e.Black(), "vTransmissionScatter", 3, 0)), vB.set(this, (0, Lc.k)(this, Zr, void 0)), this._transmissionScatterTexture = ((0, Lc.k)(this, Qr), new RB("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Dc.set(this, (0, Lc.k)(this, Cr, void 0)), this._transmissionScatterAnisotropy = ((0, Lc.k)(this, vu), new jn("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), oc.set(this, (0, Lc.k)(this, Dr, void 0)), this._transmissionDispersionScale = ((0, Lc.k)(this, Nr), new jn("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), kB.set(this, (0, Lc.k)(this, Er, void 0)), this._transmissionDispersionScaleTexture = ((0, Lc.k)(this, or), new RB("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Xc.set(this, (0, Lc.k)(this, Wr, void 0)), this._transmissionDispersionAbbeNumber = ((0, Lc.k)(this, wr), new jn("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Hc.set(this, (0, Lc.k)(this, ku, void 0)), this._subsurfaceWeight = ((0, Lc.k)(this, Xr), new jn("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Fc.set(this, (0, Lc.k)(this, Hr, void 0)), this._subsurfaceWeightTexture = ((0, Lc.k)(this, Fr), new RB("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Rc.set(this, (0, Lc.k)(this, Jr, void 0)), this._subsurfaceColor = ((0, Lc.k)(this, ju), new jn("subsurface_color", new jB.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Kc.set(this, (0, Lc.k)(this, Rr, void 0)), this._subsurfaceColorTexture = ((0, Lc.k)(this, iu), new RB("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Gc.set(this, (0, Lc.k)(this, Kr, void 0)), this._subsurfaceRadius = ((0, Lc.k)(this, xu), new jn("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), cn.set(this, (0, Lc.k)(this, dr, void 0)), this._subsurfaceRadiusScale = ((0, Lc.k)(this, Ar), new jn("subsurface_radius_scale", new jB.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), BB.set(this, (0, Lc.k)(this, Gr, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Lc.k)(this, cs), new RB("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), nB.set(this, (0, Lc.k)(this, Bu, void 0)), this._subsurfaceScatterAnisotropy = ((0, Lc.k)(this, nu), new jn("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), VB.set(this, (0, Lc.k)(this, Vu, void 0)), this._coatWeight = ((0, Lc.k)(this, Iu), new jn("coat_weight", 0, "vCoatWeight", 1, 0)), IB.set(this, (0, Lc.k)(this, rs, void 0)), this._coatWeightTexture = ((0, Lc.k)(this, uu), new RB("coat_weight", "coatWeight", "COAT_WEIGHT")), rn.set(this, (0, Lc.k)(this, su, void 0)), this._coatColor = ((0, Lc.k)(this, Mu), new jn("coat_color", jB.e.White(), "vCoatColor", 3, 0)), uB.set(this, (0, Lc.k)(this, Pu, void 0)), this._coatColorTexture = ((0, Lc.k)(this, qs), new RB("coat_color", "coatColor", "COAT_COLOR")), sB.set(this, (0, Lc.k)(this, Ou, void 0)), this._coatRoughness = ((0, Lc.k)(this, Tu), new jn("coat_roughness", 0, "vCoatRoughness", 1, 0)), MB.set(this, (0, Lc.k)(this, fu, void 0)), this._coatRoughnessTexture = ((0, Lc.k)(this, ms), new RB("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), PB.set(this, (0, Lc.k)(this, eu, void 0)), this._coatRoughnessAnisotropy = ((0, Lc.k)(this, ts), new jn("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), mn.set(this, (0, Lc.k)(this, Su, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Lc.k)(this, ys), new RB("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), eB.set(this, (0, Lc.k)(this, zs, void 0)), this._coatIor = ((0, Lc.k)(this, pu), new jn("coat_ior", 1.5, "vCoatIor", 1, 0)), tn.set(this, (0, Lc.k)(this, hu, void 0)), this._coatDarkening = ((0, Lc.k)(this, as), new jn("coat_darkening", 1, "vCoatDarkening", 1, 0)), SB.set(this, (0, Lc.k)(this, lu, void 0)), this._coatDarkeningTexture = ((0, Lc.k)(this, Yu), new RB("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, yn.set(this, (0, Lc.k)(this, Lu, void 0)), this._fuzzWeight = ((0, Lc.k)(this, gs), new jn("fuzz_weight", 0, "vFuzzWeight", 1, 0)), zn.set(this, (0, Lc.k)(this, Uu, void 0)), this._fuzzWeightTexture = ((0, Lc.k)(this, bs), new RB("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), pB.set(this, (0, Lc.k)(this, Zu, void 0)), this._fuzzColor = ((0, Lc.k)(this, Qu), new jn("fuzz_color", jB.e.White(), "vFuzzColor", 3, 0)), hB.set(this, (0, Lc.k)(this, Cu, void 0)), this._fuzzColorTexture = ((0, Lc.k)(this, vs), new RB("fuzz_color", "fuzzColor", "FUZZ_COLOR")), an.set(this, (0, Lc.k)(this, Du, void 0)), this._fuzzRoughness = ((0, Lc.k)(this, Nu), new jn("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), LB.set(this, (0, Lc.k)(this, Eu, void 0)), this._fuzzRoughnessTexture = ((0, Lc.k)(this, ou), new RB("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), gn.set(this, (0, Lc.k)(this, Wu, void 0)), this._geometryThinWalled = ((0, Lc.k)(this, wu), new jn("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), UB.set(this, (0, Lc.k)(this, ks, void 0)), this._geometryNormalTexture = ((0, Lc.k)(this, Xu), new RB("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), bn.set(this, (0, Lc.k)(this, Hu, void 0)), this._geometryTangent = ((0, Lc.k)(this, Fu), new jn("geometry_tangent", new Wc.m(1, 0), "vSpecularAnisotropy", 3, 0)), ZB.set(this, (0, Lc.k)(this, Ju, void 0)), this._geometryTangentTexture = ((0, Lc.k)(this, jsc), new RB("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), QB.set(this, (0, Lc.k)(this, Ru, void 0)), this._geometryCoatNormalTexture = ((0, Lc.k)(this, is), new RB("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), CB.set(this, (0, Lc.k)(this, Ku, void 0)), this._geometryCoatTangent = ((0, Lc.k)(this, xs), new jn("geometry_coat_tangent", new Wc.m(1, 0), "vGeometryCoatTangent", 2, 0)), vn.set(this, (0, Lc.k)(this, du, void 0)), this._geometryCoatTangentTexture = ((0, Lc.k)(this, Au), new RB("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), DB.set(this, (0, Lc.k)(this, Gu, void 0)), this._geometryOpacity = ((0, Lc.k)(this, cM), new jn("geometry_opacity", 1, "vBaseColor", 4, 3)), NB.set(this, (0, Lc.k)(this, Bs, void 0)), this._geometryOpacityTexture = ((0, Lc.k)(this, ns), new RB("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), EB.set(this, (0, Lc.k)(this, Vs, void 0)), this._geometryThickness = ((0, Lc.k)(this, Is), new jn("geometry_thickness", 0, "vGeometryThickness", 1, 0)), oB.set(this, (0, Lc.k)(this, rM, void 0)), this._geometryThicknessTexture = ((0, Lc.k)(this, us), new RB("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), WB.set(this, (0, Lc.k)(this, ss, void 0)), this._emissionLuminance = ((0, Lc.k)(this, Ms), new jn("emission_luminance", 1, "vLightingIntensity", 4, 1)), wB.set(this, (0, Lc.k)(this, Ps, void 0)), this._emissionColor = ((0, Lc.k)(this, qM), new jn("emission_color", jB.e.Black(), "vEmissionColor", 3)), XB.set(this, (0, Lc.k)(this, Os, void 0)), this._emissionColorTexture = ((0, Lc.k)(this, Ts), new RB("emission_color", "emissionColor", "EMISSION_COLOR")), FB.set(this, (0, Lc.k)(this, fs, void 0)), this._thinFilmWeight = ((0, Lc.k)(this, mM), new jn("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), KB.set(this, (0, Lc.k)(this, es, void 0)), this._thinFilmWeightTexture = ((0, Lc.k)(this, tM), new RB("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), xn.set(this, (0, Lc.k)(this, Ss, void 0)), this._thinFilmThickness = ((0, Lc.k)(this, yM), new jn("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), GB.set(this, (0, Lc.k)(this, zM, void 0)), this._thinFilmThicknessMin = ((0, Lc.k)(this, ps), new jn("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), cV.set(this, (0, Lc.k)(this, hs, void 0)), this._thinFilmThicknessTexture = ((0, Lc.k)(this, aM), new RB("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Bn.set(this, (0, Lc.k)(this, ls, void 0)), this._thinFilmIor = ((0, Lc.k)(this, Ys), new jn("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), nn.set(this, (0, Lc.k)(this, Ls, void 0)), this._ambientOcclusionTexture = ((0, Lc.k)(this, gM), new RB("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = cB.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, Vn.set(this, (0, Lc.k)(this, Us, 1)), In.set(this, ((0, Lc.k)(this, bM), (0, Lc.k)(this, Zs, 1))), rV.set(this, ((0, Lc.k)(this, Qs), (0, Lc.k)(this, Cs, !1))), un.set(this, ((0, Lc.k)(this, vM), (0, Lc.k)(this, Ds, !1))), sn.set(this, ((0, Lc.k)(this, Ns), (0, Lc.k)(this, Es, .4))), Mn.set(this, ((0, Lc.k)(this, os), (0, Lc.k)(this, Ws, !1))), Pn.set(this, ((0, Lc.k)(this, ws), (0, Lc.k)(this, kM, !1))), qV.set(this, ((0, Lc.k)(this, Xs), (0, Lc.k)(this, Hs, !1))), On.set(this, ((0, Lc.k)(this, Fs), (0, Lc.k)(this, Jsc, !1))), Tn.set(this, ((0, Lc.k)(this, jM), (0, Lc.k)(this, Rs, !1))), fn.set(this, ((0, Lc.k)(this, iM), (0, Lc.k)(this, Ks, .05))), mV.set(this, ((0, Lc.k)(this, xM), (0, Lc.k)(this, ds, !1))), en.set(this, ((0, Lc.k)(this, As), (0, Lc.k)(this, Gs, !1))), tV.set(this, ((0, Lc.k)(this, cP), (0, Lc.k)(this, BM, 4))), Sn.set(this, ((0, Lc.k)(this, nM), (0, Lc.k)(this, VM, !1))), yV.set(this, ((0, Lc.k)(this, IM), (0, Lc.k)(this, rP, !1))), zV.set(this, ((0, Lc.k)(this, uM), (0, Lc.k)(this, sM, !1))), pn.set(this, ((0, Lc.k)(this, MM), (0, Lc.k)(this, PM, !1))), hn.set(this, ((0, Lc.k)(this, qP), (0, Lc.k)(this, OM, !1))), aV.set(this, ((0, Lc.k)(this, TM), (0, Lc.k)(this, fM, null))), lnc.set(this, ((0, Lc.k)(this, mP), (0, Lc.k)(this, eM, !1))), Yn.set(this, ((0, Lc.k)(this, tP), (0, Lc.k)(this, SM, !1))), Ln.set(this, ((0, Lc.k)(this, yP), (0, Lc.k)(this, zP, !0))), gV.set(this, ((0, Lc.k)(this, pM), (0, Lc.k)(this, hM, !0))), Un.set(this, ((0, Lc.k)(this, aP), (0, Lc.k)(this, lM, !1))), bV.set(this, ((0, Lc.k)(this, YM), (0, Lc.k)(this, LM, !1))), this._lightingInfos = ((0, Lc.k)(this, gP), new Wc.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = rB.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new bB.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Zn.set(this, (0, Lc.k)(this, UM, 0)), this.debugLimit = ((0, Lc.k)(this, bP), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = rB.c.MATERIAL_OPAQUE, this.knc() && !this.knc()?.RV().isWebGPU && this.knc().RV().Tv < 2 && Uc.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), cB._noiseTextures[this.knc().uniqueId] || (cB._noiseTextures[this.knc().uniqueId] = new Zc.e(YB.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.knc(), !1, !0, 1), this.knc().XBc.addOnce((() => {
              cB._noiseTextures[this.knc().uniqueId]?.dispose(), delete cB._noiseTextures[this.knc().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), xB.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), xB.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Ec(this.knc()), this._environmentFuzzBRDFTexture = Nc(this.knc()), this.prePassConfiguration = new Jc.e, this._propertyList = {};
            for (const cB of Object.getOwnPropertyNames(this)) {
              const Bc = this[cB];
              Bc instanceof jn && (this._propertyList[cB] = Bc)
            }
            Object.keys(this._propertyList).forEach((cB => {
              const Bc = this._propertyList[cB];
              let nc = this._uniformsList[Bc.targetUniformName];
              nc ? nc.numComponents !== Bc.targetUniformComponentNum ? Uc.c.Error(`Uniform ${Bc.targetUniformName} already exists of size ${nc.numComponents}, but trying to set it to ${Bc.targetUniformComponentNum}.`) : nc.requiredDefine !== Bc.requiredDefine && (nc.requiredDefine = void 0) : (nc = new JB(Bc.targetUniformName, Bc.targetUniformComponentNum), nc.requiredDefine = Bc.requiredDefine, this._uniformsList[Bc.targetUniformName] = nc), "" === nc.firstLinkedKey && (nc.firstLinkedKey = Bc.name), nc.linkedProperties[Bc.name] = Bc
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const cB of Object.getOwnPropertyNames(this)) {
              const Bc = this[cB];
              Bc instanceof RB && (this._samplersList[cB] = Bc)
            }
            for (const cB in this._samplersList) {
              const Bc = this._samplersList[cB].textureDefine;
              this._samplerDefines[Bc] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Bc + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Bc + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(xB.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(xB.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(cB) {
            this._transparencyMode !== cB && (this._transparencyMode = cB, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== rB.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(cB) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(cB)
          }
          clone(Bc) {
            let nc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ic = lB.e.Clone((() => new cB(Bc, this.knc())), this, {
              cloneTexturesOnlyOnce: nc
            });
            return Ic.id = Bc, Ic.name = Bc, this.stencil.copyTo(Ic.stencil), this._clonePlugins(Ic, Vc), Ic
          }
          serialize() {
            const cB = super.serialize();
            return cB.customType = "BABYLON.OpenPBRMaterial", cB
          }
          static Parse(Bc, nc, Vc) {
            const Ic = lB.e.Parse((() => new cB(Bc.name, nc)), Bc, nc, Vc);
            return Bc.stencil && Ic.stencil.parse(Bc.stencil, nc, Vc), rB.c._ParsePlugins(Bc, Ic, nc, Vc), Ic
          }
          forceCompilation(cB, Bc, nc) {
            const Vc = {
              clipPlane: !1,
              useInstances: !1,
              ...nc
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const nc = new dB({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Ic = this._prepareEffect(cB, cB, nc, void 0, void 0, Vc.useInstances, Vc.clipPlane);
              this._onEffectCreatedObservable && (HB.effect = Ic, HB.subMesh = null, this._onEffectCreatedObservable.notifyObservers(HB)), Ic.isReady() ? Bc && Bc(this) : Ic.onCompileObservable.add((() => {
                Bc && Bc(this)
              }))
            })()
          }
          isReadyForSubMesh(Bc, nc, Vc) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ic = nc._drawWrapper;
            if (Ic.effect && this.isFrozen && Ic._wasPreviouslyReady && Ic._wasPreviouslyUsingInstances === Vc) return !0;
            nc.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), nc.materialDefines = new dB({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const rB = nc.materialDefines;
            if (this._isReadyForSubMesh(nc)) return !0;
            const uc = this.knc(),
              sc = uc.RV();
            if (rB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, uc.texturesEnabled)) {
              for (const cB in this._samplersList) {
                const Bc = this._samplersList[cB];
                if (Bc.value && !Bc.value.isReadyOrNotBlocking()) return !1
              }
              const Bc = this._getRadianceTexture();
              if (Bc && xB.c.ReflectionTextureEnabled) {
                if (!Bc.isReadyOrNotBlocking()) return !1;
                if (Bc.irradianceTexture) {
                  if (!Bc.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Bc.sphericalPolynomial && Bc.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && xB.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && xB.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && xB.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (cB._noiseTextures[uc.uniqueId] && !cB._noiseTextures[uc.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = rB, this._eventInfo.subMesh = nc, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (rB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (rB.AREALIGHTUSED)
              for (let cB = 0; cB < Bc.lightSources.length; cB++)
                if (!Bc.lightSources[cB]._isReady()) return !1;
            if (sc.getCaps().standardDerivatives || Bc.isVerticesDataPresent(wc.i.NormalKind) || (Bc.createNormals(!0), Uc.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Bc.name)), !(0, Ac.e)(uc, Bc, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Mc = nc.effect,
              Pc = rB._areLightsDisposed,
              qB = this._prepareEffect(Bc, nc.getRenderingMesh(), rB, this.onCompiled, this.onError, Vc, null);
            let Oc = !1;
            if (qB)
              if (this._onEffectCreatedObservable && (HB.effect = qB, HB.subMesh = nc, this._onEffectCreatedObservable.notifyObservers(HB)), this.allowShaderHotSwapping && Mc && !qB.isReady()) {
                if (rB.markAsUnprocessed(), Oc = this.isFrozen, Pc) return rB._areLightsDisposed = !0, !1
              } else uc.resetCachedMaterial(), nc.setEffect(qB, rB, this._materialContext);
            return !(!nc.effect || !nc.effect.isReady()) && (rB._renderId = uc.getRenderId(), Ic._wasPreviouslyReady = !Oc, Ic._wasPreviouslyUsingInstances = !!Vc, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const cB = this._uniformBuffer;
            cB.addUniform("vTangentSpaceParams", 2), cB.addUniform("vLightingIntensity", 4), cB.addUniform("pointSize", 1), cB.addUniform("vDebugMode", 2), cB.addUniform("renderTargetSize", 2), cB.addUniform("cameraInfo", 4), cB.addUniform("vTextureRepetitionHexTilingParams", 4), cB.addUniform("backgroundRefractionMatrix", 16), cB.addUniform("vBackgroundRefractionInfos", 3), (0, Ac.mb)(cB, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Bc => {
              cB.addUniform(Bc.name, Bc.numComponents)
            })), Object.values(this._samplersList).forEach((Bc => {
              cB.addUniform(Bc.samplerInfoName, 2), cB.addUniform(Bc.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(cB, Bc, nc, Vc) {
            if (0 === this.geometryThickness) cB.updateFloat("vGeometryThickness", 0);
            else {
              Vc.getRenderingMesh().getWorldMatrix().decompose(Wc.i.KV[0]);
              const Bc = Math.max(Math.abs(Wc.i.KV[0].x), Math.abs(Wc.i.KV[0].y), Math.abs(Wc.i.KV[0].z));
              cB.updateFloat("vGeometryThickness", this.geometryThickness * Bc)
            }
          }
          bindForSubMesh(Bc, nc, Vc) {
            const Ic = this.knc(),
              rB = Vc.materialDefines;
            if (!rB) return;
            const uc = Vc.effect;
            if (!uc) return;
            this._activeEffect = uc, nc.getMeshUniformBuffer().bindToEffect(uc, "Mesh"), nc.transferToEffect(Bc);
            const sc = Ic.RV();
            this._uniformBuffer.bindToEffect(uc, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ic, nc, Bc, this.isFrozen), fB.b.Bind(sc.currentRenderPassId, this._activeEffect, nc, Bc, this);
            const Mc = Ic.activeCamera;
            Mc ? this._uniformBuffer.updateFloat4("cameraInfo", Mc.minZ, Mc.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Pc = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Pc[0], Pc[1], Pc[2], Pc[3]), this._eventInfo.subMesh = Vc, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), rB.OBJECTSPACE_NORMALMAP && (Bc.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const qB = this._mustRebind(Ic, uc, Vc, nc.visibility),
              Oc = sc._features.needToAlwaysBindUniformBuffers;
            (0, Ac.i)(nc, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, OB.e)(this._activeEffect, this._vertexPullingMetadata);
            const Tc = this._uniformBuffer;
            if (qB) {
              this.bindViewProjection(uc);
              const Bc = this._getRadianceTexture();
              if (!Tc.useUbo || !this.isFrozen || !Tc.isSync || Vc._drawWrapper._forceRebindOnNextCall) {
                if (Ic.texturesEnabled) {
                  for (const cB in this._samplersList) {
                    const Bc = this._samplersList[cB];
                    Bc.value && (Tc.updateFloat2(Bc.samplerInfoName, Bc.value.coordinatesIndex, Bc.value.level), (0, Ac.B)(Bc.value, Tc, Bc.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Ic._mirroredCameraPosition ? Tc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Tc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ac.n)(Ic, rB, Tc, jB.e.White(), Bc, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Tc.updateFloat("pointSize", this.pointSize);
                const cB = this._uniformsArray;
                for (let Bc = 0, nc = cB.length; Bc < nc; Bc++) {
                  const nc = cB[Bc];
                  (void 0 === nc.requiredDefine || rB[nc.requiredDefine]) && (4 === nc.numComponents ? (nc.populateVectorFromLinkedProperties(Wc.i.Vector4[0]), Tc.updateVector4(nc.name, Wc.i.Vector4[0])) : 3 === nc.numComponents ? (nc.populateVectorFromLinkedProperties(Wc.i.KV[0]), Tc.updateVector3(nc.name, Wc.i.KV[0])) : 2 === nc.numComponents ? (nc.populateVectorFromLinkedProperties(Wc.i.Vector2[0]), Tc.updateFloat2(nc.name, Wc.i.Vector2[0].x, Wc.i.Vector2[0].y)) : 1 === nc.numComponents && Tc.updateFloat(nc.name, nc.linkedProperties[nc.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Ic.environmentIntensity, this._lightingInfos.w = 1, Tc.updateVector4("vLightingIntensity", this._lightingInfos), Tc.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Ic.texturesEnabled) {
                for (const cB in this._samplersList) {
                  const Bc = this._samplersList[cB];
                  Bc.value && Tc.setTexture(Bc.samplerName, Bc.value)
                }
                if ((0, Ac.q)(Ic, rB, Tc, Bc, this.realTimeFiltering), rB.ENVIRONMENTBRDF && Tc.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), rB.FUZZENVIRONMENTBRDF && Tc.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), rB.REFRACTED_BACKGROUND && (Tc.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Tc.Buc("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Wc.i.KV[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Tc.updateVector3("vBackgroundRefractionInfos", Wc.i.KV[1])), (rB.ANISOTROPIC || rB.FUZZ || rB.REFRACTED_BACKGROUND || rB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Tc.setTexture("blueNoiseSampler", cB._noiseTextures[this.knc().uniqueId]), rB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const cB = this.sssIrradianceTexture.getSize().width,
                    Bc = this.sssIrradianceTexture.getSize().height;
                  Tc.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Tc.setTexture("sceneDepthSampler", this.sssDepthTexture), Tc.updateFloat2("renderTargetSize", cB, Bc)
                }
              }
              this.knc().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(nc) && this.knc().depthPeelingRenderer.bind(uc), this._eventInfo.subMesh = Vc, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, qn.d)(this._activeEffect, this, Ic), this.bindEyePosition(uc)
            } else Oc && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Ic, Ic.RV(), Vc), !qB && this.isFrozen && !Oc || !Ic.lightsEnabled || this._disableLighting || (0, Ac.r)(Ic, nc, this._activeEffect, rB, this._maxSimultaneousLights), !qB && this.isFrozen || (this.bindView(uc), (0, Ac.j)(Ic, nc, this._activeEffect, !0), rB.NUM_MORPH_INFLUENCERS && (0, Ac.w)(nc, this._activeEffect), rB.BAKED_VERTEX_ANIMATION_TEXTURE && nc.bakedVertexAnimationManager?.bind(uc, rB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ac.s)(rB, this._activeEffect, Ic)), this._afterBind(nc, this._activeEffect, Vc), Tc.update()
          }
          getAnimatables() {
            const cB = super.getAnimatables();
            for (const Bc in this._samplersList) {
              const nc = this._samplersList[Bc];
              nc.value && nc.value.animations && nc.value.animations.length > 0 && cB.push(nc.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && cB.push(this._radianceTexture), cB
          }
          getActiveTextures() {
            const cB = super.getActiveTextures();
            for (const Bc in this._samplersList) {
              const nc = this._samplersList[Bc];
              nc.value && cB.push(nc.value)
            }
            return this._radianceTexture && cB.push(this._radianceTexture), cB
          }
          hasTexture(cB) {
            if (super.hasTexture(cB)) return !0;
            for (const Bc in this._samplersList) {
              if (this._samplersList[Bc].value === cB) return !0
            }
            return this._radianceTexture === cB
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(cB, Bc) {
            if (this._breakShaderLoadedCheck = !0, Bc) {
              this._environmentBRDFTexture && this.knc().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.knc().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const cB in this._samplersList) {
                const Bc = this._samplersList[cB];
                Bc.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(cB, Bc)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.knc().environmentTexture
          }
          _prepareEffect(Bc, nc, Vc) {
            let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              uc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Bc, nc, Vc, uc, sc), !Vc.isDirty) return null;
            Vc.markAsProcessed();
            const Mc = this.knc().RV(),
              Pc = new dc.e;
            let qB = 0;
            Vc.USESPHERICALINVERTEX && Pc.addFallback(qB++, "USESPHERICALINVERTEX"), Vc.FOG && Pc.addFallback(qB, "FOG"), Vc.SPECULARAA && Pc.addFallback(qB, "SPECULARAA"), Vc.POINTSIZE && Pc.addFallback(qB, "POINTSIZE"), Vc.LOGARITHMICDEPTH && Pc.addFallback(qB, "LOGARITHMICDEPTH"), Vc.PARALLAX && Pc.addFallback(qB, "PARALLAX"), Vc.PARALLAX_RHS && Pc.addFallback(qB, "PARALLAX_RHS"), Vc.PARALLAXOCCLUSION && Pc.addFallback(qB++, "PARALLAXOCCLUSION"), Vc.ENVIRONMENTBRDF && Pc.addFallback(qB++, "ENVIRONMENTBRDF"), Vc.TANGENT && Pc.addFallback(qB++, "TANGENT"), qB = (0, Ac.F)(Vc, Pc, this._maxSimultaneousLights, qB), Vc.SPECULARTERM && Pc.addFallback(qB++, "SPECULARTERM"), Vc.USESPHERICALFROMREFLECTIONMAP && Pc.addFallback(qB++, "USESPHERICALFROMREFLECTIONMAP"), Vc.USEIRRADIANCEMAP && Pc.addFallback(qB++, "USEIRRADIANCEMAP"), Vc.NORMAL && Pc.addFallback(qB++, "NORMAL"), Vc.VERTEXCOLOR && Pc.addFallback(qB++, "VERTEXCOLOR"), Vc.MORPHTARGETS && Pc.addFallback(qB++, "MORPHTARGETS"), Vc.MULTIVIEW && Pc.addFallback(0, "MULTIVIEW");
            const Oc = [wc.i.PositionKind];
            Vc.NORMAL && Oc.push(wc.i.NormalKind), Vc.TANGENT && Oc.push(wc.i.TangentKind);
            for (let cB = 1; cB <= 6; ++cB) Vc["UV" + cB] && Oc.push(`uv${1===cB?"":cB}`);
            Vc.VERTEXCOLOR && Oc.push(wc.i.ColorKind), (0, Ac.K)(Oc, Bc, Vc, Pc), (0, Ac.M)(Oc, Vc), (0, Ac.O)(Oc, Bc, Vc), (0, Ac.G)(Oc, Bc, Vc);
            let Tc = "openpbr";
            const fc = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const cB in this._uniformsList) fc.push(cB);
            const mB = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Vc.FUZZENVIRONMENTBRDF && mB.push("environmentFuzzBrdfSampler"), Vc.REFRACTED_BACKGROUND && mB.push("backgroundRefractionSampler"), (Vc.ANISOTROPIC || Vc.FUZZ || Vc.REFRACTED_BACKGROUND || Vc.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && mB.push("blueNoiseSampler"), Vc.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (mB.push("sceneIrradianceSampler"), mB.push("sceneDepthSampler"));
            for (const cB in this._samplersList) {
              const Bc = this._samplersList[cB];
              mB.push(Bc.samplerName), fc.push(Bc.samplerInfoName), fc.push(Bc.samplerMatrixName)
            }(0, Ac.ob)(fc, mB, !0);
            const ec = ["Material", "Scene", "Mesh"],
              tB = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Vc.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Pc, this._eventInfo.fallbackRank = qB, this._eventInfo.defines = Vc, this._eventInfo.uniforms = fc, this._eventInfo.attributes = Oc, this._eventInfo.samplers = mB, this._eventInfo.uniformBuffersNames = ec, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Bc, this._eventInfo.indexParameters = tB, this._callbackPluginEventGeneric(128, this._eventInfo), fB.b.AddUniformsAndSamplers(fc, mB), Jc.e.AddUniforms(fc), Jc.e.AddSamplers(mB), (0, qn.b)(fc), this._useVertexPulling) {
              const cB = nc?.geometry;
              cB && (this._vertexPullingMetadata = (0, OB.h)(cB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((cB, Bc) => {
                fc.push(`vp_${Bc}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            iB.c && (iB.c.PrepareUniforms(fc, Vc), iB.c.PrepareSamplers(mB, Vc)), (0, Ac.rb)({
              uniformsNames: fc,
              uniformBuffersNames: ec,
              samplers: mB,
              defines: Vc,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Sc = {};
            this.customShaderNameResolve && (Tc = this.customShaderNameResolve(Tc, fc, ec, mB, Vc, Oc, Sc));
            const yB = Vc.toString(),
              zB = Mc.createEffect(Tc, {
                attributes: Oc,
                uniformsNames: fc,
                uniformBuffersNames: ec,
                samplers: mB,
                defines: yB,
                fallbacks: Pc,
                onCompiled: Ic,
                onError: rB,
                indexParameters: tB,
                processFinalCode: Sc.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Vc.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: cB._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Mc);
            return this._eventInfo.customCode = void 0, zB
          }
          _prepareDefines(Bc, nc, Vc) {
            let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              uc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const sc = nc.hasThinInstances,
              Mc = this.knc(),
              Pc = Mc.RV();
            (0, Ac.Z)(Mc, Bc, Vc, !0, this._maxSimultaneousLights, this._disableLighting), Vc._needNormals = !0, (0, Ac.gb)(Mc, Vc);
            const qB = this.needAlphaBlendingForMesh(Bc) && this.knc().useOrderIndependentTransparency;
            if ((0, Ac.lb)(Mc, Vc, this.canRenderToMRT && !qB), (0, Ac.kb)(Mc, Vc, qB), fB.b.PrepareDefines(Pc.currentRenderPassId, Bc, Vc), Vc._areTexturesDirty) {
              Vc._needUVs = !1;
              for (let cB = 1; cB <= 6; ++cB) Vc["MAINUV" + cB] = !1;
              if (Mc.texturesEnabled) {
                for (const nc in this._samplersList) {
                  const cB = this._samplersList[nc];
                  cB.value ? ((0, Ac.$)(cB.value, Vc, cB.textureDefine), Vc[cB.textureDefine + "_GAMMA"] = cB.value.gammaSpace) : Vc[cB.textureDefine] = !1
                }
                const cB = this._getRadianceTexture(),
                  Bc = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Pc.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Ac.Y)(Mc, cB, Vc, this.realTimeFiltering, this.realTimeFilteringQuality, !Bc), this._baseMetalnessTexture && (Vc.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Vc.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Vc.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Vc.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Vc.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Vc.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Vc.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Vc.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Vc.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Vc.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Vc.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Vc.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && xB.c.DiffuseTextureEnabled ? (Vc.PARALLAX = !0, Vc.PARALLAX_RHS = Mc.useRightHandedSystem, Vc.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Vc.PARALLAX = !1, Vc.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Vc.PARALLAX = !1, Vc.PARALLAX_RHS = !1, Vc.PARALLAXOCCLUSION = !1, Vc.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && xB.c.ReflectionTextureEnabled ? (Vc.ENVIRONMENTBRDF = !0, Vc.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Vc.ENVIRONMENTBRDF = !1, Vc.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Vc.FUZZENVIRONMENTBRDF = !0 : Vc.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Vc.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && xB.c.RefractionTextureEnabled, Vc.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Vc.REFRACTED_LIGHTS = !0;
                  const cB = this._getRadianceTexture();
                  cB ? (Vc.REFRACTED_ENVIRONMENT = xB.c.RefractionTextureEnabled, Vc.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.knc().useRightHandedSystem ? !cB.invertZ : cB.invertZ, Vc.REFRACTED_ENVIRONMENT_LOCAL_CUBE = cB.isCube && cB.boundingBoxSize) : Vc.REFRACTED_ENVIRONMENT = !1
                } else Vc.REFRACTED_BACKGROUND = !1, Vc.REFRACTED_LIGHTS = !1, Vc.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Vc.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Vc.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === rB.c.LIGHTFALLOFF_STANDARD ? (Vc.USEPHYSICALLIGHTFALLOFF = !1, Vc.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === rB.c.LIGHTFALLOFF_GLTF ? (Vc.USEPHYSICALLIGHTFALLOFF = !1, Vc.USEGLTFLIGHTFALLOFF = !0) : (Vc.USEPHYSICALLIGHTFALLOFF = !0, Vc.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Vc.TWOSIDEDLIGHTING = !0 : Vc.TWOSIDEDLIGHTING = !1, Vc.MIRRORED = !!Mc._mirroredCameraPosition, Vc.SPECULARAA = Pc.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Vc._areTexturesDirty || Vc._areMiscDirty) && (Vc.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Vc.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Vc.ALPHABLEND = this.needAlphaBlendingForMesh(Bc)), Vc._areTexturesDirty && (Vc.TEXTURE_REPETITION_MODE = Pc.version > 1 || Pc.isWebGPU ? this.textureRepetitionMode : 0), Vc._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Vc), Vc.FORCENORMALFORWARD = this._forceNormalForward, Vc.RADIANCEOCCLUSION = this._useRadianceOcclusion, Vc.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && cB._noiseTextures[Mc.uniqueId] && xB.c.ReflectionTextureEnabled ? (Vc.ANISOTROPIC = !0, Bc.isVerticesDataPresent(wc.i.TangentKind) || (Vc._needUVs = !0, Vc.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Vc.USE_GLTF_STYLE_ANISOTROPY = !0), Vc.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Vc.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Vc.ANISOTROPIC = !1, Vc.USE_GLTF_STYLE_ANISOTROPY = !1, Vc.ANISOTROPIC_BASE = !1, Vc.ANISOTROPIC_COAT = !1), Vc.THIN_FILM = this.thinFilmWeight > 0, Vc.IRIDESCENCE = this.thinFilmWeight > 0, Vc.DISPERSION = this.transmissionDispersionScale > 0, Vc.SCATTERING = this.hasScattering;
            if (Vc.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Vc.TRANSMISSION_SLAB = this.transmissionWeight > 0, Vc.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Vc.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Vc.PREPASS && (Vc.SUBSURFACE_SLAB || Vc.TRANSMISSION_SLAB_VOLUME)) {
              let cB = !1;
              if (!this.sssIrradianceTexture && Mc.geometryBufferRenderer) {
                const Bc = Mc.geometryBufferRenderer.getTextureIndex(kn.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Mc.geometryBufferRenderer.getGBuffer().textures[Bc], cB = !0
              }
              if (!this.sssDepthTexture && Mc.geometryBufferRenderer) {
                const Bc = Mc.geometryBufferRenderer.getTextureIndex(kn.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Mc.geometryBufferRenderer.getGBuffer().textures[Bc], cB = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Vc.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, cB && (Vc.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Vc.FUZZ = this.fuzzWeight > 0 && xB.c.ReflectionTextureEnabled, Vc.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Vc.FUZZ ? (Bc.isVerticesDataPresent(wc.i.TangentKind) || (Vc._needUVs = !0, Vc.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Nc(this.knc()), Vc.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Vc.FUZZENVIRONMENTBRDF = !1, Vc.FUZZ_IBL_SAMPLES = 0), Vc._areMiscDirty && ((0, Ac.cb)(Bc, Mc, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Bc), Vc, this._applyDecalMapAfterDetailMap, this._useVertexPulling, nc, this._isVertexOutputInvariant), Vc.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Bc.isVerticesDataPresent(wc.i.NormalKind), Vc.DEBUGMODE = this._debugMode), (0, Ac.X)(Mc, Pc, this, Vc, !!Ic, uc, sc), this._eventInfo.defines = Vc, this._eventInfo.mesh = Bc, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ac.W)(Bc, Vc, !0, !0, !0, this._transparencyMode !== rB.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Bc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, uc = new WeakMap, sc = new WeakMap, Mc = new WeakMap, Pc = new WeakMap, qB = new WeakMap, Oc = new WeakMap, Tc = new WeakMap, fc = new WeakMap, mB = new WeakMap, ec = new WeakMap, tB = new WeakMap, Sc = new WeakMap, yB = new WeakMap, zB = new WeakMap, pc = new WeakMap, hc = new WeakMap, aB = new WeakMap, lc = new WeakMap, Yc = new WeakMap, Qc = new WeakMap, Cc = new WeakMap, vB = new WeakMap, Dc = new WeakMap, oc = new WeakMap, kB = new WeakMap, Xc = new WeakMap, Hc = new WeakMap, Fc = new WeakMap, Rc = new WeakMap, Kc = new WeakMap, Gc = new WeakMap, cn = new WeakMap, BB = new WeakMap, nB = new WeakMap, VB = new WeakMap, IB = new WeakMap, rn = new WeakMap, uB = new WeakMap, sB = new WeakMap, MB = new WeakMap, PB = new WeakMap, mn = new WeakMap, eB = new WeakMap, tn = new WeakMap, SB = new WeakMap, yn = new WeakMap, zn = new WeakMap, pB = new WeakMap, hB = new WeakMap, an = new WeakMap, LB = new WeakMap, gn = new WeakMap, UB = new WeakMap, bn = new WeakMap, ZB = new WeakMap, QB = new WeakMap, CB = new WeakMap, vn = new WeakMap, DB = new WeakMap, NB = new WeakMap, EB = new WeakMap, oB = new WeakMap, WB = new WeakMap, wB = new WeakMap, XB = new WeakMap, FB = new WeakMap, KB = new WeakMap, xn = new WeakMap, GB = new WeakMap, cV = new WeakMap, Bn = new WeakMap, nn = new WeakMap, Vn = new WeakMap, In = new WeakMap, rV = new WeakMap, un = new WeakMap, sn = new WeakMap, Mn = new WeakMap, Pn = new WeakMap, qV = new WeakMap, On = new WeakMap, Tn = new WeakMap, fn = new WeakMap, mV = new WeakMap, en = new WeakMap, tV = new WeakMap, Sn = new WeakMap, yV = new WeakMap, zV = new WeakMap, pn = new WeakMap, hn = new WeakMap, aV = new WeakMap, lnc = new WeakMap, Yn = new WeakMap, Ln = new WeakMap, gV = new WeakMap, Un = new WeakMap, bV = new WeakMap, Zn = new WeakMap, (() => {
          const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(CI[Symbol.metadata] ?? null) : void 0;
          Qn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Cn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], vV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Dn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Nn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], En = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], onc = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Wn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], wn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Xn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Hn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Fn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Jn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], jV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Rn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], iV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Kn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], xV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], dn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], An = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], Gn = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], cI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], BV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], nV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], VV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], IV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], uV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], sV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], MV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], PV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], qI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], OV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], TV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], fV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], eV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], SV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], yI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], pV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], hV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], lV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], YV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], LV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], gI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], UV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], ZV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], QV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], CV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], vI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], DV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], NV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], oV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], WV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], wV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], XV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], HV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], FV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], JV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], jI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], RV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], KV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], dV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], AV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], GV = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], cr = [(0, gB.c)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], II = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], rr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], uI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, gB.M)()], PI = [(0, gB.M)()], qr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], TI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], mr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsLightsDirty")], eI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsLightsDirty")], SI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], yr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], zr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], hI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], ar = [(0, gB.d)("_markAllSubMeshesAsTexturesDirty")], lI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], gr = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], br = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], ZI = [(0, gB.d)("_markAllSubMeshesAsMiscDirty")], QI = [(0, gB.M)()], (0, Lc.g)(cB, null, Qn, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseWeight" in cB,
              get: cB => cB.baseWeight,
              set: (cB, Bc) => {
                cB.baseWeight = Bc
              }
            },
            metadata: Bc
          }, DI, NI), (0, Lc.g)(cB, null, Cn, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseWeightTexture" in cB,
              get: cB => cB.baseWeightTexture,
              set: (cB, Bc) => {
                cB.baseWeightTexture = Bc
              }
            },
            metadata: Bc
          }, EI, oI), (0, Lc.g)(cB, null, vV, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseColor" in cB,
              get: cB => cB.baseColor,
              set: (cB, Bc) => {
                cB.baseColor = Bc
              }
            },
            metadata: Bc
          }, WI, wI), (0, Lc.g)(cB, null, Dn, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseColorTexture" in cB,
              get: cB => cB.baseColorTexture,
              set: (cB, Bc) => {
                cB.baseColorTexture = Bc
              }
            },
            metadata: Bc
          }, kr, XI), (0, Lc.g)(cB, null, Nn, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseDiffuseRoughness" in cB,
              get: cB => cB.baseDiffuseRoughness,
              set: (cB, Bc) => {
                cB.baseDiffuseRoughness = Bc
              }
            },
            metadata: Bc
          }, HI, FI), (0, Lc.g)(cB, null, En, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseDiffuseRoughnessTexture" in cB,
              get: cB => cB.baseDiffuseRoughnessTexture,
              set: (cB, Bc) => {
                cB.baseDiffuseRoughnessTexture = Bc
              }
            },
            metadata: Bc
          }, JI, jr), (0, Lc.g)(cB, null, onc, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseMetalness" in cB,
              get: cB => cB.baseMetalness,
              set: (cB, Bc) => {
                cB.baseMetalness = Bc
              }
            },
            metadata: Bc
          }, RI, ir), (0, Lc.g)(cB, null, Wn, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "baseMetalnessTexture" in cB,
              get: cB => cB.baseMetalnessTexture,
              set: (cB, Bc) => {
                cB.baseMetalnessTexture = Bc
              }
            },
            metadata: Bc
          }, KI, xr), (0, Lc.g)(cB, null, wn, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularWeight" in cB,
              get: cB => cB.specularWeight,
              set: (cB, Bc) => {
                cB.specularWeight = Bc
              }
            },
            metadata: Bc
          }, dI, AI), (0, Lc.g)(cB, null, kV, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularWeightTexture" in cB,
              get: cB => cB.specularWeightTexture,
              set: (cB, Bc) => {
                cB.specularWeightTexture = Bc
              }
            },
            metadata: Bc
          }, GI, cu), (0, Lc.g)(cB, null, Xn, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularColor" in cB,
              get: cB => cB.specularColor,
              set: (cB, Bc) => {
                cB.specularColor = Bc
              }
            },
            metadata: Bc
          }, Br, nr), (0, Lc.g)(cB, null, Hn, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularColorTexture" in cB,
              get: cB => cB.specularColorTexture,
              set: (cB, Bc) => {
                cB.specularColorTexture = Bc
              }
            },
            metadata: Bc
          }, Vr, Ir), (0, Lc.g)(cB, null, Fn, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularRoughness" in cB,
              get: cB => cB.specularRoughness,
              set: (cB, Bc) => {
                cB.specularRoughness = Bc
              }
            },
            metadata: Bc
          }, ru, ur), (0, Lc.g)(cB, null, Jn, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularRoughnessTexture" in cB,
              get: cB => cB.specularRoughnessTexture,
              set: (cB, Bc) => {
                cB.specularRoughnessTexture = Bc
              }
            },
            metadata: Bc
          }, sr, Mr), (0, Lc.g)(cB, null, jV, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularRoughnessAnisotropy" in cB,
              get: cB => cB.specularRoughnessAnisotropy,
              set: (cB, Bc) => {
                cB.specularRoughnessAnisotropy = Bc
              }
            },
            metadata: Bc
          }, Pr, qu), (0, Lc.g)(cB, null, Rn, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularRoughnessAnisotropyTexture" in cB,
              get: cB => cB.specularRoughnessAnisotropyTexture,
              set: (cB, Bc) => {
                cB.specularRoughnessAnisotropyTexture = Bc
              }
            },
            metadata: Bc
          }, Or, Tr), (0, Lc.g)(cB, null, iV, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularIor" in cB,
              get: cB => cB.specularIor,
              set: (cB, Bc) => {
                cB.specularIor = Bc
              }
            },
            metadata: Bc
          }, fr, mu), (0, Lc.g)(cB, null, Kn, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionWeight" in cB,
              get: cB => cB.transmissionWeight,
              set: (cB, Bc) => {
                cB.transmissionWeight = Bc
              }
            },
            metadata: Bc
          }, er, tu), (0, Lc.g)(cB, null, xV, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionWeightTexture" in cB,
              get: cB => cB.transmissionWeightTexture,
              set: (cB, Bc) => {
                cB.transmissionWeightTexture = Bc
              }
            },
            metadata: Bc
          }, Sr, yu), (0, Lc.g)(cB, null, dn, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionColor" in cB,
              get: cB => cB.transmissionColor,
              set: (cB, Bc) => {
                cB.transmissionColor = Bc
              }
            },
            metadata: Bc
          }, zu, pr), (0, Lc.g)(cB, null, An, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionColorTexture" in cB,
              get: cB => cB.transmissionColorTexture,
              set: (cB, Bc) => {
                cB.transmissionColorTexture = Bc
              }
            },
            metadata: Bc
          }, hr, au), (0, Lc.g)(cB, null, Gn, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionDepth" in cB,
              get: cB => cB.transmissionDepth,
              set: (cB, Bc) => {
                cB.transmissionDepth = Bc
              }
            },
            metadata: Bc
          }, lr, Yr), (0, Lc.g)(cB, null, cI, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionDepthTexture" in cB,
              get: cB => cB.transmissionDepthTexture,
              set: (cB, Bc) => {
                cB.transmissionDepthTexture = Bc
              }
            },
            metadata: Bc
          }, Lr, gu), (0, Lc.g)(cB, null, BV, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionScatter" in cB,
              get: cB => cB.transmissionScatter,
              set: (cB, Bc) => {
                cB.transmissionScatter = Bc
              }
            },
            metadata: Bc
          }, Ur, bu), (0, Lc.g)(cB, null, nV, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionScatterTexture" in cB,
              get: cB => cB.transmissionScatterTexture,
              set: (cB, Bc) => {
                cB.transmissionScatterTexture = Bc
              }
            },
            metadata: Bc
          }, Zr, Qr), (0, Lc.g)(cB, null, VV, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionScatterAnisotropy" in cB,
              get: cB => cB.transmissionScatterAnisotropy,
              set: (cB, Bc) => {
                cB.transmissionScatterAnisotropy = Bc
              }
            },
            metadata: Bc
          }, Cr, vu), (0, Lc.g)(cB, null, IV, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionDispersionScale" in cB,
              get: cB => cB.transmissionDispersionScale,
              set: (cB, Bc) => {
                cB.transmissionDispersionScale = Bc
              }
            },
            metadata: Bc
          }, Dr, Nr), (0, Lc.g)(cB, null, rI, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionDispersionScaleTexture" in cB,
              get: cB => cB.transmissionDispersionScaleTexture,
              set: (cB, Bc) => {
                cB.transmissionDispersionScaleTexture = Bc
              }
            },
            metadata: Bc
          }, Er, or), (0, Lc.g)(cB, null, uV, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: cB => "transmissionDispersionAbbeNumber" in cB,
              get: cB => cB.transmissionDispersionAbbeNumber,
              set: (cB, Bc) => {
                cB.transmissionDispersionAbbeNumber = Bc
              }
            },
            metadata: Bc
          }, Wr, wr), (0, Lc.g)(cB, null, sV, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceWeight" in cB,
              get: cB => cB.subsurfaceWeight,
              set: (cB, Bc) => {
                cB.subsurfaceWeight = Bc
              }
            },
            metadata: Bc
          }, ku, Xr), (0, Lc.g)(cB, null, MV, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceWeightTexture" in cB,
              get: cB => cB.subsurfaceWeightTexture,
              set: (cB, Bc) => {
                cB.subsurfaceWeightTexture = Bc
              }
            },
            metadata: Bc
          }, Hr, Fr), (0, Lc.g)(cB, null, PV, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceColor" in cB,
              get: cB => cB.subsurfaceColor,
              set: (cB, Bc) => {
                cB.subsurfaceColor = Bc
              }
            },
            metadata: Bc
          }, Jr, ju), (0, Lc.g)(cB, null, qI, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceColorTexture" in cB,
              get: cB => cB.subsurfaceColorTexture,
              set: (cB, Bc) => {
                cB.subsurfaceColorTexture = Bc
              }
            },
            metadata: Bc
          }, Rr, iu), (0, Lc.g)(cB, null, OV, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceRadius" in cB,
              get: cB => cB.subsurfaceRadius,
              set: (cB, Bc) => {
                cB.subsurfaceRadius = Bc
              }
            },
            metadata: Bc
          }, Kr, xu), (0, Lc.g)(cB, null, TV, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceRadiusScale" in cB,
              get: cB => cB.subsurfaceRadiusScale,
              set: (cB, Bc) => {
                cB.subsurfaceRadiusScale = Bc
              }
            },
            metadata: Bc
          }, dr, Ar), (0, Lc.g)(cB, null, fV, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceRadiusScaleTexture" in cB,
              get: cB => cB.subsurfaceRadiusScaleTexture,
              set: (cB, Bc) => {
                cB.subsurfaceRadiusScaleTexture = Bc
              }
            },
            metadata: Bc
          }, Gr, cs), (0, Lc.g)(cB, null, mI, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: cB => "subsurfaceScatterAnisotropy" in cB,
              get: cB => cB.subsurfaceScatterAnisotropy,
              set: (cB, Bc) => {
                cB.subsurfaceScatterAnisotropy = Bc
              }
            },
            metadata: Bc
          }, Bu, nu), (0, Lc.g)(cB, null, eV, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatWeight" in cB,
              get: cB => cB.coatWeight,
              set: (cB, Bc) => {
                cB.coatWeight = Bc
              }
            },
            metadata: Bc
          }, Vu, Iu), (0, Lc.g)(cB, null, tI, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatWeightTexture" in cB,
              get: cB => cB.coatWeightTexture,
              set: (cB, Bc) => {
                cB.coatWeightTexture = Bc
              }
            },
            metadata: Bc
          }, rs, uu), (0, Lc.g)(cB, null, SV, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatColor" in cB,
              get: cB => cB.coatColor,
              set: (cB, Bc) => {
                cB.coatColor = Bc
              }
            },
            metadata: Bc
          }, su, Mu), (0, Lc.g)(cB, null, yI, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatColorTexture" in cB,
              get: cB => cB.coatColorTexture,
              set: (cB, Bc) => {
                cB.coatColorTexture = Bc
              }
            },
            metadata: Bc
          }, Pu, qs), (0, Lc.g)(cB, null, zI, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatRoughness" in cB,
              get: cB => cB.coatRoughness,
              set: (cB, Bc) => {
                cB.coatRoughness = Bc
              }
            },
            metadata: Bc
          }, Ou, Tu), (0, Lc.g)(cB, null, pV, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatRoughnessTexture" in cB,
              get: cB => cB.coatRoughnessTexture,
              set: (cB, Bc) => {
                cB.coatRoughnessTexture = Bc
              }
            },
            metadata: Bc
          }, fu, ms), (0, Lc.g)(cB, null, hV, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatRoughnessAnisotropy" in cB,
              get: cB => cB.coatRoughnessAnisotropy,
              set: (cB, Bc) => {
                cB.coatRoughnessAnisotropy = Bc
              }
            },
            metadata: Bc
          }, eu, ts), (0, Lc.g)(cB, null, aI, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatRoughnessAnisotropyTexture" in cB,
              get: cB => cB.coatRoughnessAnisotropyTexture,
              set: (cB, Bc) => {
                cB.coatRoughnessAnisotropyTexture = Bc
              }
            },
            metadata: Bc
          }, Su, ys), (0, Lc.g)(cB, null, lV, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatIor" in cB,
              get: cB => cB.coatIor,
              set: (cB, Bc) => {
                cB.coatIor = Bc
              }
            },
            metadata: Bc
          }, zs, pu), (0, Lc.g)(cB, null, YV, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatDarkening" in cB,
              get: cB => cB.coatDarkening,
              set: (cB, Bc) => {
                cB.coatDarkening = Bc
              }
            },
            metadata: Bc
          }, hu, as), (0, Lc.g)(cB, null, LV, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "coatDarkeningTexture" in cB,
              get: cB => cB.coatDarkeningTexture,
              set: (cB, Bc) => {
                cB.coatDarkeningTexture = Bc
              }
            },
            metadata: Bc
          }, lu, Yu), (0, Lc.g)(cB, null, gI, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzWeight" in cB,
              get: cB => cB.fuzzWeight,
              set: (cB, Bc) => {
                cB.fuzzWeight = Bc
              }
            },
            metadata: Bc
          }, Lu, gs), (0, Lc.g)(cB, null, UV, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzWeightTexture" in cB,
              get: cB => cB.fuzzWeightTexture,
              set: (cB, Bc) => {
                cB.fuzzWeightTexture = Bc
              }
            },
            metadata: Bc
          }, Uu, bs), (0, Lc.g)(cB, null, bI, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzColor" in cB,
              get: cB => cB.fuzzColor,
              set: (cB, Bc) => {
                cB.fuzzColor = Bc
              }
            },
            metadata: Bc
          }, Zu, Qu), (0, Lc.g)(cB, null, ZV, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzColorTexture" in cB,
              get: cB => cB.fuzzColorTexture,
              set: (cB, Bc) => {
                cB.fuzzColorTexture = Bc
              }
            },
            metadata: Bc
          }, Cu, vs), (0, Lc.g)(cB, null, QV, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzRoughness" in cB,
              get: cB => cB.fuzzRoughness,
              set: (cB, Bc) => {
                cB.fuzzRoughness = Bc
              }
            },
            metadata: Bc
          }, Du, Nu), (0, Lc.g)(cB, null, CV, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "fuzzRoughnessTexture" in cB,
              get: cB => cB.fuzzRoughnessTexture,
              set: (cB, Bc) => {
                cB.fuzzRoughnessTexture = Bc
              }
            },
            metadata: Bc
          }, Eu, ou), (0, Lc.g)(cB, null, vI, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryThinWalled" in cB,
              get: cB => cB.geometryThinWalled,
              set: (cB, Bc) => {
                cB.geometryThinWalled = Bc
              }
            },
            metadata: Bc
          }, Wu, wu), (0, Lc.g)(cB, null, DV, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryNormalTexture" in cB,
              get: cB => cB.geometryNormalTexture,
              set: (cB, Bc) => {
                cB.geometryNormalTexture = Bc
              }
            },
            metadata: Bc
          }, ks, Xu), (0, Lc.g)(cB, null, NV, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryTangent" in cB,
              get: cB => cB.geometryTangent,
              set: (cB, Bc) => {
                cB.geometryTangent = Bc
              }
            },
            metadata: Bc
          }, Hu, Fu), (0, Lc.g)(cB, null, EV, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryTangentTexture" in cB,
              get: cB => cB.geometryTangentTexture,
              set: (cB, Bc) => {
                cB.geometryTangentTexture = Bc
              }
            },
            metadata: Bc
          }, Ju, jsc), (0, Lc.g)(cB, null, oV, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryCoatNormalTexture" in cB,
              get: cB => cB.geometryCoatNormalTexture,
              set: (cB, Bc) => {
                cB.geometryCoatNormalTexture = Bc
              }
            },
            metadata: Bc
          }, Ru, is), (0, Lc.g)(cB, null, WV, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryCoatTangent" in cB,
              get: cB => cB.geometryCoatTangent,
              set: (cB, Bc) => {
                cB.geometryCoatTangent = Bc
              }
            },
            metadata: Bc
          }, Ku, xs), (0, Lc.g)(cB, null, wV, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryCoatTangentTexture" in cB,
              get: cB => cB.geometryCoatTangentTexture,
              set: (cB, Bc) => {
                cB.geometryCoatTangentTexture = Bc
              }
            },
            metadata: Bc
          }, du, Au), (0, Lc.g)(cB, null, kI, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryOpacity" in cB,
              get: cB => cB.geometryOpacity,
              set: (cB, Bc) => {
                cB.geometryOpacity = Bc
              }
            },
            metadata: Bc
          }, Gu, cM), (0, Lc.g)(cB, null, XV, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryOpacityTexture" in cB,
              get: cB => cB.geometryOpacityTexture,
              set: (cB, Bc) => {
                cB.geometryOpacityTexture = Bc
              }
            },
            metadata: Bc
          }, Bs, ns), (0, Lc.g)(cB, null, HV, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryThickness" in cB,
              get: cB => cB.geometryThickness,
              set: (cB, Bc) => {
                cB.geometryThickness = Bc
              }
            },
            metadata: Bc
          }, Vs, Is), (0, Lc.g)(cB, null, FV, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "geometryThicknessTexture" in cB,
              get: cB => cB.geometryThicknessTexture,
              set: (cB, Bc) => {
                cB.geometryThicknessTexture = Bc
              }
            },
            metadata: Bc
          }, rM, us), (0, Lc.g)(cB, null, JV, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissionLuminance" in cB,
              get: cB => cB.emissionLuminance,
              set: (cB, Bc) => {
                cB.emissionLuminance = Bc
              }
            },
            metadata: Bc
          }, ss, Ms), (0, Lc.g)(cB, null, jI, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissionColor" in cB,
              get: cB => cB.emissionColor,
              set: (cB, Bc) => {
                cB.emissionColor = Bc
              }
            },
            metadata: Bc
          }, Ps, qM), (0, Lc.g)(cB, null, RV, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissionColorTexture" in cB,
              get: cB => cB.emissionColorTexture,
              set: (cB, Bc) => {
                cB.emissionColorTexture = Bc
              }
            },
            metadata: Bc
          }, Os, Ts), (0, Lc.g)(cB, null, iI, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmWeight" in cB,
              get: cB => cB.thinFilmWeight,
              set: (cB, Bc) => {
                cB.thinFilmWeight = Bc
              }
            },
            metadata: Bc
          }, fs, mM), (0, Lc.g)(cB, null, KV, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmWeightTexture" in cB,
              get: cB => cB.thinFilmWeightTexture,
              set: (cB, Bc) => {
                cB.thinFilmWeightTexture = Bc
              }
            },
            metadata: Bc
          }, es, tM), (0, Lc.g)(cB, null, xI, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmThickness" in cB,
              get: cB => cB.thinFilmThickness,
              set: (cB, Bc) => {
                cB.thinFilmThickness = Bc
              }
            },
            metadata: Bc
          }, Ss, yM), (0, Lc.g)(cB, null, dV, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmThicknessMin" in cB,
              get: cB => cB.thinFilmThicknessMin,
              set: (cB, Bc) => {
                cB.thinFilmThicknessMin = Bc
              }
            },
            metadata: Bc
          }, zM, ps), (0, Lc.g)(cB, null, AV, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmThicknessTexture" in cB,
              get: cB => cB.thinFilmThicknessTexture,
              set: (cB, Bc) => {
                cB.thinFilmThicknessTexture = Bc
              }
            },
            metadata: Bc
          }, hs, aM), (0, Lc.g)(cB, null, GV, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: cB => "thinFilmIor" in cB,
              get: cB => cB.thinFilmIor,
              set: (cB, Bc) => {
                cB.thinFilmIor = Bc
              }
            },
            metadata: Bc
          }, ls, Ys), (0, Lc.g)(cB, null, cr, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "ambientOcclusionTexture" in cB,
              get: cB => cB.ambientOcclusionTexture,
              set: (cB, Bc) => {
                cB.ambientOcclusionTexture = Bc
              }
            },
            metadata: Bc
          }, Ls, gM), (0, Lc.g)(cB, null, BI, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: cB => "directIntensity" in cB,
              get: cB => cB.directIntensity,
              set: (cB, Bc) => {
                cB.directIntensity = Bc
              }
            },
            metadata: Bc
          }, Us, bM), (0, Lc.g)(cB, null, nI, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: cB => "environmentIntensity" in cB,
              get: cB => cB.environmentIntensity,
              set: (cB, Bc) => {
                cB.environmentIntensity = Bc
              }
            },
            metadata: Bc
          }, Zs, Qs), (0, Lc.g)(cB, null, VI, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "useSpecularWeightFromTextureAlpha" in cB,
              get: cB => cB.useSpecularWeightFromTextureAlpha,
              set: (cB, Bc) => {
                cB.useSpecularWeightFromTextureAlpha = Bc
              }
            },
            metadata: Bc
          }, Cs, vM), (0, Lc.g)(cB, null, II, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: cB => "forceAlphaTest" in cB,
              get: cB => cB.forceAlphaTest,
              set: (cB, Bc) => {
                cB.forceAlphaTest = Bc
              }
            },
            metadata: Bc
          }, Ds, Ns), (0, Lc.g)(cB, null, rr, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: cB => "alphaCutOff" in cB,
              get: cB => cB.alphaCutOff,
              set: (cB, Bc) => {
                cB.alphaCutOff = Bc
              }
            },
            metadata: Bc
          }, Es, os), (0, Lc.g)(cB, null, uI, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: cB => "useAmbientOcclusionFromMetallicTextureRed" in cB,
              get: cB => cB.useAmbientOcclusionFromMetallicTextureRed,
              set: (cB, Bc) => {
                cB.useAmbientOcclusionFromMetallicTextureRed = Bc
              }
            },
            metadata: Bc
          }, Ws, ws), (0, Lc.g)(cB, null, sI, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: cB => "useAmbientInGrayScale" in cB,
              get: cB => cB.useAmbientInGrayScale,
              set: (cB, Bc) => {
                cB.useAmbientInGrayScale = Bc
              }
            },
            metadata: Bc
          }, kM, Xs), (0, Lc.g)(cB, null, MI, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: cB => "usePhysicalLightFalloff" in cB,
              get: cB => cB.usePhysicalLightFalloff
            },
            metadata: Bc
          }, null, vr), (0, Lc.g)(cB, null, PI, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: cB => "useGLTFLightFalloff" in cB,
              get: cB => cB.useGLTFLightFalloff
            },
            metadata: Bc
          }, null, vr), (0, Lc.g)(cB, null, qr, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "useObjectSpaceNormalMap" in cB,
              get: cB => cB.useObjectSpaceNormalMap,
              set: (cB, Bc) => {
                cB.useObjectSpaceNormalMap = Bc
              }
            },
            metadata: Bc
          }, Hs, Fs), (0, Lc.g)(cB, null, OI, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: cB => "useParallax" in cB,
              get: cB => cB.useParallax,
              set: (cB, Bc) => {
                cB.useParallax = Bc
              }
            },
            metadata: Bc
          }, Jsc, jM), (0, Lc.g)(cB, null, TI, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: cB => "useParallaxOcclusion" in cB,
              get: cB => cB.useParallaxOcclusion,
              set: (cB, Bc) => {
                cB.useParallaxOcclusion = Bc
              }
            },
            metadata: Bc
          }, Rs, iM), (0, Lc.g)(cB, null, fI, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: cB => "parallaxScaleBias" in cB,
              get: cB => cB.parallaxScaleBias,
              set: (cB, Bc) => {
                cB.parallaxScaleBias = Bc
              }
            },
            metadata: Bc
          }, Ks, xM), (0, Lc.g)(cB, null, mr, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "disableLighting" in cB,
              get: cB => cB.disableLighting,
              set: (cB, Bc) => {
                cB.disableLighting = Bc
              }
            },
            metadata: Bc
          }, ds, As), (0, Lc.g)(cB, null, eI, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: cB => "forceIrradianceInFragment" in cB,
              get: cB => cB.forceIrradianceInFragment,
              set: (cB, Bc) => {
                cB.forceIrradianceInFragment = Bc
              }
            },
            metadata: Bc
          }, Gs, cP), (0, Lc.g)(cB, null, tr, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: cB => "maxSimultaneousLights" in cB,
              get: cB => cB.maxSimultaneousLights,
              set: (cB, Bc) => {
                cB.maxSimultaneousLights = Bc
              }
            },
            metadata: Bc
          }, BM, nM), (0, Lc.g)(cB, null, SI, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: cB => "invertNormalMapX" in cB,
              get: cB => cB.invertNormalMapX,
              set: (cB, Bc) => {
                cB.invertNormalMapX = Bc
              }
            },
            metadata: Bc
          }, VM, IM), (0, Lc.g)(cB, null, yr, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: cB => "invertNormalMapY" in cB,
              get: cB => cB.invertNormalMapY,
              set: (cB, Bc) => {
                cB.invertNormalMapY = Bc
              }
            },
            metadata: Bc
          }, rP, uM), (0, Lc.g)(cB, null, zr, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "twoSidedLighting" in cB,
              get: cB => cB.twoSidedLighting,
              set: (cB, Bc) => {
                cB.twoSidedLighting = Bc
              }
            },
            metadata: Bc
          }, sM, MM), (0, Lc.g)(cB, null, pI, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: cB => "useAlphaFresnel" in cB,
              get: cB => cB.useAlphaFresnel,
              set: (cB, Bc) => {
                cB.useAlphaFresnel = Bc
              }
            },
            metadata: Bc
          }, PM, qP), (0, Lc.g)(cB, null, hI, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: cB => "useLinearAlphaFresnel" in cB,
              get: cB => cB.useLinearAlphaFresnel,
              set: (cB, Bc) => {
                cB.useLinearAlphaFresnel = Bc
              }
            },
            metadata: Bc
          }, OM, TM), (0, Lc.g)(cB, null, ar, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "environmentBRDFTexture" in cB,
              get: cB => cB.environmentBRDFTexture,
              set: (cB, Bc) => {
                cB.environmentBRDFTexture = Bc
              }
            },
            metadata: Bc
          }, fM, mP), (0, Lc.g)(cB, null, lI, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: cB => "forceNormalForward" in cB,
              get: cB => cB.forceNormalForward,
              set: (cB, Bc) => {
                cB.forceNormalForward = Bc
              }
            },
            metadata: Bc
          }, eM, tP), (0, Lc.g)(cB, null, YI, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: cB => "enableSpecularAntiAliasing" in cB,
              get: cB => cB.enableSpecularAntiAliasing,
              set: (cB, Bc) => {
                cB.enableSpecularAntiAliasing = Bc
              }
            },
            metadata: Bc
          }, SM, yP), (0, Lc.g)(cB, null, LI, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: cB => "useHorizonOcclusion" in cB,
              get: cB => cB.useHorizonOcclusion,
              set: (cB, Bc) => {
                cB.useHorizonOcclusion = Bc
              }
            },
            metadata: Bc
          }, zP, pM), (0, Lc.g)(cB, null, gr, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: cB => "useRadianceOcclusion" in cB,
              get: cB => cB.useRadianceOcclusion,
              set: (cB, Bc) => {
                cB.useRadianceOcclusion = Bc
              }
            },
            metadata: Bc
          }, hM, aP), (0, Lc.g)(cB, null, UI, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: cB => "unlit" in cB,
              get: cB => cB.unlit,
              set: (cB, Bc) => {
                cB.unlit = Bc
              }
            },
            metadata: Bc
          }, lM, YM), (0, Lc.g)(cB, null, br, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "applyDecalMapAfterDetailMap" in cB,
              get: cB => cB.applyDecalMapAfterDetailMap,
              set: (cB, Bc) => {
                cB.applyDecalMapAfterDetailMap = Bc
              }
            },
            metadata: Bc
          }, LM, gP), (0, Lc.g)(cB, null, ZI, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "debugMode" in cB,
              get: cB => cB.debugMode,
              set: (cB, Bc) => {
                cB.debugMode = Bc
              }
            },
            metadata: Bc
          }, UM, bP), (0, Lc.g)(cB, null, QI, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: cB => "transparencyMode" in cB,
              get: cB => cB.transparencyMode
            },
            metadata: Bc
          }, null, vr), Bc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bc
          })
        })(), cB.SSS_QUALITY_LOW = 0, cB.SSS_QUALITY_MEDIUM = 1, cB.SSS_QUALITY_HIGH = 2, cB._noiseTextures = {}, cB.ForceGLSL = !1, cB._ShaderLoader = new TB.e((() => [Promise.all([nc.e(292), nc.e(358)]).then((() => nc(59628))), Promise.all([nc.e(297), nc.e(293), nc.e(357), nc.e(362)]).then((() => nc(59638)))]), (() => [Promise.all([nc.e(311), nc.e(313), nc.e(361)]).then((() => nc(59675))), Promise.all([nc.e(311), nc.e(314), nc.e(360), nc.e(363)]).then((() => nc(59683)))])), cB
      })(),
      cV = !1;
    cV || (cV = !0, (0, iB.d)(), (0, XB.d)("BABYLON.OpenPBRMaterial", GB));
    var Bn = nc(35783);
    class nn {
      constructor(cB) {
        this.name = DB.d.NAME_PROCEDURALTEXTURE, this.Ir = cB
      }
      register() {
        this.Ir._beforeClearStage.registerStep(DB.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Ir.proceduralTexturesEnabled) {
          YB.g.StartPerformanceCounter("Procedural textures", this.Ir.proceduralTextures.length > 0);
          for (let cB = 0; cB < this.Ir.proceduralTextures.length; cB++) {
            const Bc = this.Ir.proceduralTextures[cB];
            Bc._shouldRender() && Bc.render()
          }
          YB.g.EndPerformanceCounter("Procedural textures", this.Ir.proceduralTextures.length > 0)
        }
      }
    }
    var Vn = nc(38356);
    let In = (() => {
      var cB;
      let Bc, Vc, Ic, uc, sc, Mc = Zc.e,
        Pc = [],
        qB = [],
        Oc = [],
        Tc = [],
        fc = [],
        mB = [],
        tB = [],
        Sc = [],
        yB = [];
      return cB = class extends Mc {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(cB, Bc, nc, Vc) {
          let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Vc, !rB), this.isEnabled = ((0, Lc.k)(this, Pc), (0, Lc.k)(this, qB, !0)), this.autoClear = ((0, Lc.k)(this, Oc), (0, Lc.k)(this, Tc, !0)), this.onGenerated = (0, Lc.k)(this, fc), this.onGeneratedObservable = new Bn.c, this.onBeforeGenerationObservable = new Bn.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Lc.k)(this, mB, void 0), this._drawWrapper = (0, Lc.k)(this, tB), this._textures = {}, this._size = (0, Lc.k)(this, Sc, void 0), this._textureType = (0, Lc.k)(this, yB), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Ic || Ic instanceof Zc.e ? (this._options = {}, this._fallbackTexture = Ic) : (this._options = Ic, this._fallbackTexture = Ic.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Mc = (Vc = this.knc() || ec.d.LastCreatedScene)._getComponent(DB.d.NAME_PROCEDURALTEXTURE);
          Mc || (Mc = new nn(Vc), Vc.bqc(Mc)), this._options.skipSceneRegistration || Vc.proceduralTextures.push(this), this._fullEngine = Vc.RV(), this.name = cB, this.isRenderTarget = !0, this._size = Bc, this._textureType = sc, this._generateMipMaps = rB, this._drawWrapper = new Vn.e(this._fullEngine), this.setFragment(nc);
          const zB = this._createRtWrapper(uc, Bc, rB, sc);
          this._texture = zB.texture;
          const pc = [];
          pc.push(1, 1), pc.push(-1, 1), pc.push(-1, -1), pc.push(1, -1), this._vertexBuffers[wc.i.PositionKind] = new wc.i(this._fullEngine, pc, wc.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(cB, Bc, nc, Vc) {
          return cB ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Bc, {
            generateMipMaps: nc,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Vc,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Bc, {
            generateMipMaps: nc,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Vc,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(cB) {
          this._drawWrapper.effect = cB
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((cB => {
            this._contentData = this.readPixels(0, 0, cB), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const cB = this._fullEngine,
            Bc = [];
          Bc.push(0), Bc.push(1), Bc.push(2), Bc.push(0), Bc.push(2), Bc.push(3), this._indexBuffer = cB.createIndexBuffer(Bc)
        }
        _rebuild() {
          const cB = this._vertexBuffers[wc.i.PositionKind];
          cB && cB._rebuild(), this._createIndexBuffer(), this.refreshRate === LB.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = LB.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(cB) {
          if (this.isReady()) return void cB(this);
          const Bc = this.getEffect();
          Bc && Bc.executeWhenCompiled((() => {
            cB(this)
          }))
        }
        isReady() {
          const cB = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Bc = this._getDefines();
          if (this._drawWrapper.effect && Bc === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Vc = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Bc && (this._cachedDefines = Bc, this._drawWrapper.effect = cB.createEffect(Vc, [wc.i.PositionKind], this._uniforms, this._samplers, Bc, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([nc.e(366).then((() => nc(59764))), this._options.extraInitializationsAsync()]) : await Promise.all([nc.e(367).then((() => nc(59766))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await nc.e(366).then((() => nc(59764))) : await nc.e(367).then((() => nc(59766)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(cB) {
          this._fragment = cB
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(cB) {
          this._refreshRate = cB, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(cB, Bc) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const nc = this._texture.isCube;
          this._rtWrapper.dispose();
          const Vc = this._createRtWrapper(nc, cB, Bc, this._textureType);
          this._texture = Vc.texture, this._size = cB, this._generateMipMaps = Bc
        }
        _checkUniform(cB) {
          -1 === this._uniforms.indexOf(cB) && this._uniforms.push(cB)
        }
        setTexture(cB, Bc) {
          return -1 === this._samplers.indexOf(cB) && this._samplers.push(cB), this._textures[cB] = Bc, this
        }
        setFloat(cB, Bc) {
          return this._checkUniform(cB), this._floats[cB] = Bc, this
        }
        setInt(cB, Bc) {
          return this._checkUniform(cB), this._ints[cB] = Bc, this
        }
        setFloats(cB, Bc) {
          return this._checkUniform(cB), this._floatsArrays[cB] = Bc, this
        }
        setColor3(cB, Bc) {
          return this._checkUniform(cB), this._colors3[cB] = Bc, this
        }
        setColor4(cB, Bc) {
          return this._checkUniform(cB), this._colors4[cB] = Bc, this
        }
        setVector2(cB, Bc) {
          return this._checkUniform(cB), this._vectors2[cB] = Bc, this
        }
        setVector3(cB, Bc) {
          return this._checkUniform(cB), this._vectors3[cB] = Bc, this
        }
        setVector4(cB, Bc) {
          return this._checkUniform(cB), this._vectors4[cB] = Bc, this
        }
        setMatrix(cB, Bc) {
          return this._checkUniform(cB), this._matrices[cB] = Bc, this
        }
        render(cB) {
          const Bc = this.knc();
          if (!Bc) return;
          const nc = this._fullEngine;
          if (nc.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), nc.setState(!1), !this.nodeMaterialSource) {
            for (const cB in this._textures) this._drawWrapper.effect.setTexture(cB, this._textures[cB]);
            for (const cB in this._ints) this._drawWrapper.effect.setInt(cB, this._ints[cB]);
            for (const cB in this._floats) this._drawWrapper.effect.setFloat(cB, this._floats[cB]);
            for (const cB in this._floatsArrays) this._drawWrapper.effect.setArray(cB, this._floatsArrays[cB]);
            for (const cB in this._colors3) this._drawWrapper.effect.setColor3(cB, this._colors3[cB]);
            for (const cB in this._colors4) {
              const Bc = this._colors4[cB];
              this._drawWrapper.effect.setFloat4(cB, Bc.r, Bc.g, Bc.b, Bc.a)
            }
            for (const cB in this._vectors2) this._drawWrapper.effect.setVector2(cB, this._vectors2[cB]);
            for (const cB in this._vectors3) this._drawWrapper.effect.setVector3(cB, this._vectors3[cB]);
            for (const cB in this._vectors4) this._drawWrapper.effect.setVector4(cB, this._vectors4[cB]);
            for (const cB in this._matrices) this._drawWrapper.effect.setMatrix(cB, this._matrices[cB])
          }
          if (!this._texture || !this._rtWrapper) return;
          nc._enableGPUDebugMarkers && nc._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Vc = nc.currentViewport;
          if (this.isCube)
            for (let Ic = 0; Ic < 6; Ic++) nc.bindFramebuffer(this._rtWrapper, Ic, void 0, void 0, !0), nc.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Ic), this.autoClear && nc.clear(Bc.clearColor, !0, !1, !1), nc.drawElementsType(rB.c.TriangleFillMode, 0, 6), nc.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let cB = 1;
            this._rtWrapper.is3D ? cB = this._rtWrapper.depth : this._rtWrapper.is2DArray && (cB = this._rtWrapper.layers);
            for (let Vc = 0; Vc < cB; Vc++) {
              if (nc.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Vc), nc.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== cB ? Vc / (cB - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Vc);
                for (const cB in this._textures) this._drawWrapper.effect.setTexture(cB, this._textures[cB])
              }
              this.autoClear && nc.clear(Bc.clearColor, !0, !1, !1), nc.drawElementsType(rB.c.TriangleFillMode, 0, 6), nc.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Vc && nc.setViewport(Vc), this.isCube && nc.generateMipMapsForCubemap(this._texture, !0), nc._enableGPUDebugMarkers && nc._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Bc = this.getSize(),
            nc = new cB(this.name, Bc.width, this._fragment, this.knc(), this._fallbackTexture, this._generateMipMaps);
          return nc.hasAlpha = this.hasAlpha, nc.level = this.level, nc.coordinatesMode = this.coordinatesMode, nc
        }
        dispose() {
          const cB = this.knc();
          if (!cB) return;
          const Bc = cB.proceduralTextures.indexOf(this);
          Bc >= 0 && cB.proceduralTextures.splice(Bc, 1);
          const nc = this._vertexBuffers[wc.i.PositionKind];
          nc && (nc.dispose(), this._vertexBuffers[wc.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const nc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mc[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, gB.M)()], Vc = [(0, gB.M)()], Ic = [(0, gB.M)()], uc = [(0, gB.M)()], sc = [(0, gB.M)()], (0, Lc.g)(cB, null, sc, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: cB => "refreshRate" in cB,
            get: cB => cB.refreshRate
          },
          metadata: nc
        }, null, Pc), (0, Lc.g)(null, null, Bc, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: nc
        }, qB, Oc), (0, Lc.g)(null, null, Vc, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: cB => "autoClear" in cB,
            get: cB => cB.autoClear,
            set: (cB, Bc) => {
              cB.autoClear = Bc
            }
          },
          metadata: nc
        }, Tc, fc), (0, Lc.g)(null, null, Ic, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: cB => "_generateMipMaps" in cB,
            get: cB => cB._generateMipMaps,
            set: (cB, Bc) => {
              cB._generateMipMaps = Bc
            }
          },
          metadata: nc
        }, mB, tB), (0, Lc.g)(null, null, uc, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: cB => "_size" in cB,
            get: cB => cB._size,
            set: (cB, Bc) => {
              cB._size = Bc
            }
          },
          metadata: nc
        }, Sc, yB), nc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nc
        })
      })(), cB
    })();

    function rV(cB) {
      return "texture" in cB
    }

    function un(cB) {
      return "value" in cB
    }
    async function sn(cB, Bc, Vc) {
      const Ic = [Bc.red, Bc.green, Bc.blue, Bc.alpha],
        rB = [],
        uc = [];
      for (let nc = 0; nc < 4; nc++) {
        const cB = Ic[nc];
        if (cB)
          if (rV(cB)) {
            if (cB.sourceChannel < 0 || cB.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Bc = rB.indexOf(cB.texture); - 1 === Bc && (Bc = rB.length, rB.push(cB.texture)), uc[nc] = Bc
          } else {
            if (!un(cB)) throw new Error("Invalid channel input configuration");
            if (cB.value < 0 || cB.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            uc[nc] = -1
          }
        else uc[nc] = -1
      }
      let sc = Bc.outputSize;
      if (!sc && rB.length > 0) {
        let cB = 0;
        for (const Bc of rB) {
          const nc = Bc.getSize(),
            Vc = Math.max(nc.width, nc.height);
          Vc > cB && (cB = Vc, sc = nc.width === nc.height ? cB : nc)
        }
      }
      sc = sc || 512;
      const Mc = [],
        Pc = new Set;
      for (let nc = 0; nc < 4; nc++) {
        const cB = Ic[nc],
          Bc = ["RED", "GREEN", "BLUE", "ALPHA"][nc];
        if (cB && rV(cB)) {
          Mc.push(`${Bc}_FROM_TEXTURE`);
          const cB = uc[nc];
          Pc.add(cB)
        }
      }
      Pc.forEach((cB => {
        Mc.push(`USE_TEXTURE${cB}`)
      }));
      const qB = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Vc.RV().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Vc.RV().isWebGPU ? await Promise.all([nc.e(364).then((() => nc(59753)))]) : await Promise.all([nc.e(365).then((() => nc(59759)))])
          },
          skipSceneRegistration: !0
        },
        Oc = new In(cB, sc, "textureMerger", Vc, qB);
      Oc.refreshRate = -1, Oc.defines = Mc.length > 0 ? "#define " + Mc.join("\n#define ") + "\n" : "";
      for (let nc = 0; nc < rB.length; nc++) Tc = rB[nc], (fc = Oc).uOffset = Tc.uOffset, fc.vOffset = Tc.vOffset, fc.uScale = Tc.uScale, fc.vScale = Tc.vScale, fc.uAng = Tc.uAng, fc.vAng = Tc.vAng, fc.wAng = Tc.wAng, fc.uRotationCenter = Tc.uRotationCenter, fc.vRotationCenter = Tc.vRotationCenter, Oc.setTexture(`inputTexture${nc}`, rB[nc]);
      var Tc, fc;
      for (let nc = 0; nc < 4; nc++) {
        const cB = Ic[nc],
          Bc = ["red", "green", "blue", "alpha"][nc];
        if (cB && rV(cB)) {
          const Vc = uc[nc];
          Oc.setInt(`${Bc}TextureIndex`, Vc), Oc.setInt(`${Bc}SourceChannel`, cB.sourceChannel)
        } else {
          let Vc;
          Vc = cB && un(cB) ? cB.value : 3 === nc ? 1 : 0, Oc.setFloat(`${Bc}ConstantValue`, Vc)
        }
      }
      return await new Promise(((cB, Bc) => {
        Oc.executeWhenReady((() => {
          try {
            Oc.render(), cB(Oc)
          } catch (nc) {
            Bc(nc instanceof Error ? nc : new Error(String(nc)))
          }
        }))
      }))
    }

    function Mn(cB, Bc) {
      return {
        texture: cB,
        sourceChannel: Bc
      }
    }

    function Pn(cB) {
      return {
        value: cB
      }
    }

    function qV(cB, Bc, nc, Vc) {
      return {
        red: cB,
        green: Bc,
        blue: nc,
        alpha: Vc
      }
    }
    var On = nc(37887),
      Tn = nc(37985),
      fn = nc(35774),
      mV = nc(38025),
      en = nc(37981);
    class tV {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Sn extends On.d {
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
        return !!this._options?.enableMultiview || this.Tv > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tV;
        super(null), void 0 === cB.deterministicLockstep && (cB.deterministicLockstep = !1), void 0 !== cB.timeStep && (this._timeStep = cB.timeStep), void 0 === cB.lockstepMaxSteps && (cB.lockstepMaxSteps = 4), this._options = cB, fn.d.SetMatrixPrecision(!!cB.useHighPrecisionMatrix), this._caps = {
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
        }, cB.enableMultiview && (this._caps.multiview = {
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
        }, cB.renderingCanvas && (this._renderingCanvas = cB.renderingCanvas), Uc.c.Log(`Babylon.js v${On.d.Version} - Null engine`);
        const Bc = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Bc.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Bc.Blob = function() {})
      }
      createVertexBuffer(cB) {
        const Bc = new Tn.e;
        return Bc.references = 1, Bc
      }
      createIndexBuffer(cB) {
        const Bc = new Tn.e;
        return Bc.references = 1, Bc
      }
      clear(cB, Bc, nc) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(cB, Bc, nc) {
        this._cachedViewport = cB
      }
      createUniformBuffer(cB) {
        const Bc = new Tn.e;
        return Bc.references = 1, Bc.Qc = cB instanceof Array ? cB.length * Float32Array.BYTES_PER_ELEMENT : cB.byteLength, Bc
      }
      createDynamicUniformBuffer(cB) {
        return this.createUniformBuffer(cB)
      }
      updateUniformBuffer(cB, Bc, nc, Vc) {}
      bindUniformBufferBase(cB, Bc, nc) {}
      bindUniformBlock(cB, Bc, nc) {}
      createShaderProgram(cB, Bc, nc, Vc, Ic) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(cB, Bc) {
        return []
      }
      getAttributes(cB, Bc) {
        return []
      }
      bindSamplers(cB) {
        this._currentEffect = null
      }
      enableEffect(cB) {
        cB = null !== cB && (0, en.e)(cB) ? cB.effect : cB, this._currentEffect = cB, cB && (cB.onBind && cB.onBind(cB), cB._onBindObservable && cB._onBindObservable.notifyObservers(cB))
      }
      setStateCullFaceType(cB, Bc) {}
      setState(cB) {}
      setIntArray(cB, Bc) {
        return !0
      }
      setIntArray2(cB, Bc) {
        return !0
      }
      setIntArray3(cB, Bc) {
        return !0
      }
      setIntArray4(cB, Bc) {
        return !0
      }
      setFloatArray(cB, Bc) {
        return !0
      }
      setFloatArray2(cB, Bc) {
        return !0
      }
      setFloatArray3(cB, Bc) {
        return !0
      }
      setFloatArray4(cB, Bc) {
        return !0
      }
      setArray(cB, Bc) {
        return !0
      }
      setArray2(cB, Bc) {
        return !0
      }
      setArray3(cB, Bc) {
        return !0
      }
      setArray4(cB, Bc) {
        return !0
      }
      setMatrices(cB, Bc) {
        return !0
      }
      setMatrix3x3(cB, Bc) {
        return !0
      }
      setMatrix2x2(cB, Bc) {
        return !0
      }
      setFloat(cB, Bc) {
        return !0
      }
      setFloat2(cB, Bc, nc) {
        return !0
      }
      setFloat3(cB, Bc, nc, Vc) {
        return !0
      }
      setBool(cB, Bc) {
        return !0
      }
      setFloat4(cB, Bc, nc, Vc, Ic) {
        return !0
      }
      setAlphaMode(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[nc] !== cB && (this.alphaState.setAlphaBlend(0 !== cB, 0), Bc || this.setDepthWrite(0 === cB), this._alphaMode[nc] = cB)
      }
      bindBuffers(cB, Bc, nc) {}
      wipeCaches(cB) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, cB && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(cB, Bc, nc, Vc) {}
      drawElementsType(cB, Bc, nc, Vc) {}
      drawArraysType(cB, Bc, nc, Vc) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(cB) {}
      createTexture(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          uc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          sc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Mc = new gn.e(this, 1),
          Pc = String(cB);
        return Mc.url = Pc, Mc.generateMipMaps = !Bc, Mc.samplingMode = Ic, Mc.invertY = nc, Mc.baseWidth = this._options.textureSize, Mc.baseHeight = this._options.textureSize, Mc.width = this._options.textureSize, Mc.height = this._options.textureSize, sc && (Mc.format = sc), uc && (Mc._buffer = uc), Mc.isReady = !0, rB && setTimeout((() => {
          rB(Mc)
        })), this._internalTexturesCache.push(Mc), Mc
      }
      _createHardwareRenderTargetWrapper(cB, Bc, nc) {
        const Vc = new mV.d(cB, Bc, nc, this);
        return this._renderTargetWrapperCache.push(Vc), Vc
      }
      createRenderTargetTexture(cB, Bc) {
        const nc = this._createHardwareRenderTargetWrapper(!1, !1, cB),
          Vc = {};
        void 0 !== Bc && "object" === typeof Bc ? (Vc.generateMipMaps = Bc.generateMipMaps, Vc.generateDepthBuffer = void 0 === Bc.generateDepthBuffer || Bc.generateDepthBuffer, Vc.generateStencilBuffer = Vc.generateDepthBuffer && Bc.generateStencilBuffer, Vc.type = void 0 === Bc.type ? 0 : Bc.type, Vc.samplingMode = void 0 === Bc.samplingMode ? 3 : Bc.samplingMode) : (Vc.generateMipMaps = Bc, Vc.generateDepthBuffer = !0, Vc.generateStencilBuffer = !1, Vc.type = 0, Vc.samplingMode = 3);
        const Ic = new gn.e(this, 5);
        nc.setTexture(Ic);
        const rB = cB.width || cB,
          uc = cB.height || cB;
        return nc._generateDepthBuffer = Vc.generateDepthBuffer, nc._generateStencilBuffer = !!Vc.generateStencilBuffer, Ic.baseWidth = rB, Ic.baseHeight = uc, Ic.width = rB, Ic.height = uc, Ic.isReady = !0, Ic.samples = 1, Ic.generateMipMaps = !!Vc.generateMipMaps, Ic.samplingMode = Vc.samplingMode, Ic.type = Vc.type, this._internalTexturesCache.push(Ic), nc
      }
      createMultiviewRenderTargetTexture(cB, Bc) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const nc = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: cB,
            height: Bc
          }),
          Vc = new gn.e(this, 5, !0);
        return Vc.baseWidth = cB, Vc.baseHeight = Bc, Vc.width = cB, Vc.height = Bc, Vc.isMultiview = !0, Vc.isReady = !0, Vc.format = 5, Vc.samples = 1, nc.setTextures(Vc), nc
      }
      bindMultiviewFramebuffer(cB) {
        this.bindFramebuffer(cB, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(cB, Bc) {
        const nc = this._createHardwareRenderTargetWrapper(!1, !0, cB),
          Vc = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Bc
          };
        Vc.generateStencilBuffer = Vc.generateDepthBuffer && Vc.generateStencilBuffer, (1 !== Vc.type || this._caps.textureFloatLinearFiltering) && (2 !== Vc.type || this._caps.textureHalfFloatLinearFiltering) || (Vc.samplingMode = 1), nc._generateDepthBuffer = Vc.generateDepthBuffer, nc._generateStencilBuffer = !!Vc.generateStencilBuffer;
        const Ic = new gn.e(this, 5);
        return Ic.baseWidth = cB, Ic.baseHeight = cB, Ic.width = cB, Ic.height = cB, Ic.isReady = !0, Ic.isCube = !0, Ic.samples = 1, Ic.generateMipMaps = !!Vc.generateMipMaps, Ic.samplingMode = Vc.samplingMode, Ic.type = Vc.type, this._internalTexturesCache.push(Ic), nc
      }
      updateTextureSamplingMode(cB, Bc) {
        Bc.samplingMode = cB
      }
      createRawTexture(cB, Bc, nc, Vc, Ic, rB, uc) {
        let sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Mc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Pc = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const qB = new gn.e(this, 3);
        return qB.baseWidth = Bc, qB.baseHeight = nc, qB.width = Bc, qB.height = nc, qB.format = Vc, qB.generateMipMaps = Ic, qB.samplingMode = uc, qB.invertY = rB, qB._compression = sc, qB.type = Mc, qB._useSRGBBuffer = Pc, this._doNotHandleContextLost || (qB._bufferView = cB), qB
      }
      updateRawTexture(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        cB && (cB._bufferView = Bc, cB.format = nc, cB.invertY = Vc, cB._compression = Ic, cB.type = rB, cB._useSRGBBuffer = uc)
      }
      bindFramebuffer(cB, Bc, nc, Vc, Ic) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = cB, this._currentFramebuffer = null, this._cachedViewport && !Ic && this.setViewport(this._cachedViewport, nc, Vc)
      }
      unBindFramebuffer(cB) {
        let Bc = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Bc && Bc(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(cB) {
        const Bc = new Tn.e;
        return Bc.references = 1, Bc.Qc = 1, Bc
      }
      updateDynamicTexture(cB, Bc, nc) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(cB) {}
      updateDynamicIndexBuffer(cB, Bc) {}
      updateDynamicVertexBuffer(cB, Bc, nc, Vc) {}
      _bindTextureDirectly(cB, Bc) {
        return this._boundTexturesCache[this._activeChannel] !== Bc && (this._boundTexturesCache[this._activeChannel] = Bc, !0)
      }
      _bindTexture(cB, Bc) {
        cB < 0 || this._bindTextureDirectly(0, Bc)
      }
      _deleteBuffer(cB) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(cB) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(cB, Bc, nc, Vc, Ic) {}
      _uploadDataToTextureDirectly(cB, Bc) {}
      _uploadArrayBufferViewToTexture(cB, Bc) {}
      _uploadImageToTexture(cB, Bc) {}
    }
    nc(38087), nc(38126), nc(38084);
    async function yV(cB) {
      const Bc = cB.getInternalTexture();
      if (!Bc || 1 !== Bc.source) return null;
      if (Bc.invertY) {
        const Bc = cB.knc()?.RV();
        if (!(Bc instanceof Sn)) return null
      }
      const nc = Bc._buffer;
      let Vc, rB = cB.mimeType;
      try {
        nc ? ArrayBuffer.isView(nc) ? Vc = nc.buffer.slice(nc.byteOffset, nc.byteOffset + nc.byteLength) : nc instanceof ArrayBuffer ? Vc = nc : nc instanceof Blob ? (Vc = await nc.arrayBuffer(), rB = nc.type || rB) : "string" === typeof nc ? (Vc = await Ic.Tools.LoadFileAsync(nc), rB = (0, Mc.d)(nc) || rB) : "undefined" !== typeof HTMLImageElement && nc instanceof HTMLImageElement && (Vc = await Ic.Tools.LoadFileAsync(nc.src), rB = (0, Mc.d)(nc.src) || rB) : (Vc = await Ic.Tools.LoadFileAsync(Bc.url), rB = (0, Mc.d)(Bc.url) || rB)
      } catch {
        return null
      }
      if (Vc && !rB && Bc.url) {
        const cB = Bc.url.match(/^data:([^;,]+)/);
        rB = cB ? cB[1] : (0, Mc.d)(Bc.url)
      }
      return Vc && rB ? {
        data: Vc,
        mimeType: rB
      } : null
    }
    const zV = 1e-6,
      pn = new tB.Color3(.04, .04, .04),
      hn = 1024,
      aV = tB.Color3.White(),
      lnc = tB.Color3.BlackReadOnly;

    function Yn(cB) {
      switch (cB) {
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

    function Ln(cB, Bc, nc) {
      if (Bc < pn.r) return 0;
      const Vc = pn.r,
        Ic = cB * nc / (1 - pn.r) + Bc - 2 * pn.r,
        rB = Ic * Ic - 4 * Vc * (pn.r - Bc);
      return zB.Clamp((-Ic + Math.sqrt(rB)) / (2 * Vc), 0, 1)
    }

    function gV(cB) {
      const Bc = cB.diffuseColor.toLinearSpace(cB.knc().RV().useExactSrgbConversions).scale(.5),
        nc = cB.alpha,
        Vc = function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wc.m(0, 1),
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wc.m(0, .1),
            Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wc.m(0, .1),
            Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wc.m(1300, .1);
          return function(cB, Bc, nc, Vc, Ic) {
            return (1 - cB) * (1 - cB) * (1 - cB) * Bc + 3 * (1 - cB) * (1 - cB) * cB * nc + 3 * (1 - cB) * cB * cB * Vc + cB * cB * cB * Ic
          }(Math.pow(cB / Ic.x, .333333), Bc.y, nc.y, Vc.y, Ic.y)
        }(zB.Clamp(cB.specularPower, 0, hn));
      return {
        baseColorFactor: [Bc.r, Bc.g, Bc.b, nc],
        metallicFactor: 0,
        roughnessFactor: Vc
      }
    }

    function Un(cB, Bc) {
      Bc.needAlphaBlending() ? cB.alphaMode = "BLEND" : Bc.needAlphaTesting() && (cB.alphaMode = "MASK", cB.alphaCutoff = Bc.alphaCutOff)
    }

    function bV(cB, Bc, nc) {
      const Vc = new Uint8Array(cB * Bc * 4);
      for (let Ic = 0; Ic < Vc.length; Ic += 4) Vc[Ic] = Vc[Ic + 1] = Vc[Ic + 2] = Vc[Ic + 3] = 255;
      return aB.c.CreateRGBATexture(Vc, cB, Bc, nc)
    }

    function Zn(cB) {
      if (cB instanceof Uint8Array) {
        const Bc = cB.length,
          nc = new Float32Array(cB.length);
        for (let Vc = 0; Vc < Bc; ++Vc) nc[Vc] = cB[Vc] / 255;
        return nc
      }
      if (cB instanceof Float32Array) return cB;
      throw new Error("Unsupported pixel format!")
    }
    class Qn {
      constructor(cB) {
        this._exporter = cB, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(cB) {
        return cB ? this._textureMap.get(cB.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(cB, Bc) {
        const nc = gV(cB),
          Vc = {
            name: cB.name
          };
        if (null == cB.backFaceCulling || cB.backFaceCulling || (cB.twoSidedLighting || Ic.Tools.Warn(cB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Vc.doubleSided = !0), Bc) {
          const Bc = [],
            Ic = cB.diffuseTexture;
          Ic && Bc.push(this.exportTextureAsync(Ic).then((cB => {
            cB && (nc.baseColorTexture = cB)
          })));
          const rB = cB.bumpTexture;
          rB && Bc.push(this.exportTextureAsync(rB).then((cB => {
            cB && (Vc.normalTexture = cB, 1 !== rB.level && (Vc.normalTexture.scale = rB.level))
          })));
          const uc = cB.emissiveTexture;
          uc && (Vc.emissiveFactor = [1, 1, 1], Bc.push(this.exportTextureAsync(uc).then((cB => {
            cB && (Vc.emissiveTexture = cB)
          }))));
          const sc = cB.ambientTexture;
          sc && Bc.push(this.exportTextureAsync(sc).then((cB => {
            if (cB) {
              const Bc = {
                index: cB.index
              };
              Vc.occlusionTexture = Bc
            }
          }))), Bc.length > 0 && (this._exporter._materialNeedsUVsSet.add(cB), await Promise.all(Bc))
        }(cB.alpha < 1 || cB.opacityTexture) && (cB.alphaMode === lc.e.ALPHA_COMBINE ? Vc.alphaMode = "BLEND" : Ic.Tools.Warn(cB.name + ": glTF 2.0 does not support alpha mode: " + cB.alphaMode.toString())), cB.emissiveColor && !cB.emissiveColor.equalsWithEpsilon(lnc, zV) && (Vc.emissiveFactor = cB.emissiveColor.KPc()), Vc.pbrMetallicRoughness = nc, Un(Vc, cB), await this._finishMaterialAsync(Vc, cB);
        const rB = this._exporter._materials;
        return rB.push(Vc), rB.length - 1
      }
      async _finishMaterialAsync(cB, Bc) {
        const nc = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", cB, Bc),
          Vc = [];
        for (const Ic of nc) Vc.push(this.exportTextureAsync(Ic));
        await Promise.all(Vc), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", cB, Bc)
      }
      _resizeTexturesToSameDimensions(cB, Bc, nc) {
        const Vc = cB ? cB.getSize() : {
            width: 0,
            height: 0
          },
          Ic = Bc ? Bc.getSize() : {
            width: 0,
            height: 0
          };
        let rB, uc;
        return Vc.width < Ic.width ? (rB = cB && cB instanceof hc.b ? pc.j.CreateResizedCopy(cB, Ic.width, Ic.height, !0) : bV(Ic.width, Ic.height, nc), uc = Bc) : Vc.width > Ic.width ? (uc = Bc && Bc instanceof hc.b ? pc.j.CreateResizedCopy(Bc, Vc.width, Vc.height, !0) : bV(Vc.width, Vc.height, nc), rB = cB) : (rB = cB, uc = Bc), {
          texture1: rB,
          texture2: uc
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(cB, Bc, nc) {
        const Vc = new Array;
        if (!cB && !Bc) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Ic = cB ? cB.knc() : Bc ? Bc.knc() : null;
        if (Ic) {
          const rB = this._resizeTexturesToSameDimensions(cB, Bc, Ic),
            uc = rB.texture1?.getSize();
          let sc, Mc;
          const Pc = uc.width,
            qB = uc.height,
            Oc = await rB.texture1.readPixels(),
            Tc = await rB.texture2.readPixels();
          if (!Oc) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (sc = Zn(Oc), !Tc) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Mc = Zn(Tc);
          const fc = Mc.byteLength,
            mB = new Uint8Array(fc),
            ec = new Uint8Array(fc),
            Sc = 4,
            yB = new tB.Color3(0, 0, 0);
          let zB = 0,
            pc = 0;
          for (let cB = 0; cB < qB; ++cB)
            for (let Bc = 0; Bc < Pc; ++Bc) {
              const Vc = (Pc * cB + Bc) * Sc,
                uc = {
                  diffuseColor: new tB.Color3(sc[Vc], sc[Vc + 1], sc[Vc + 2]).toLinearSpace(Ic.RV().useExactSrgbConversions).multiply(nc.diffuseColor),
                  specularColor: new tB.Color3(Mc[Vc], Mc[Vc + 1], Mc[Vc + 2]).toLinearSpace(Ic.RV().useExactSrgbConversions).multiply(nc.specularColor),
                  glossiness: Mc[Vc + 3] * nc.glossiness
                },
                qB = this._convertSpecularGlossinessToMetallicRoughness(uc);
              yB.r = Math.max(yB.r, qB.baseColor.r), yB.g = Math.max(yB.g, qB.baseColor.g), yB.b = Math.max(yB.b, qB.baseColor.b), zB = Math.max(zB, qB.metallic), pc = Math.max(pc, qB.roughness), ec[Vc] = 255 * qB.baseColor.r, ec[Vc + 1] = 255 * qB.baseColor.g, ec[Vc + 2] = 255 * qB.baseColor.b, ec[Vc + 3] = rB.texture1.hasAlpha ? 255 * sc[Vc + 3] : 255, mB[Vc] = 0, mB[Vc + 1] = 255 * qB.roughness, mB[Vc + 2] = 255 * qB.metallic, mB[Vc + 3] = 255
            }
          const hc = {
            baseColor: yB,
            metallic: zB,
            roughness: pc
          };
          let aB = !1,
            lc = !1;
          for (let cB = 0; cB < qB; ++cB)
            for (let Bc = 0; Bc < Pc; ++Bc) {
              const nc = (Pc * cB + Bc) * Sc;
              ec[nc] /= hc.baseColor.r > zV ? hc.baseColor.r : 1, ec[nc + 1] /= hc.baseColor.g > zV ? hc.baseColor.g : 1, ec[nc + 2] /= hc.baseColor.b > zV ? hc.baseColor.b : 1;
              const Vc = tB.Color3.FromInts(ec[nc], ec[nc + 1], ec[nc + 2]).toGammaSpace(Ic.RV().useExactSrgbConversions);
              ec[nc] = 255 * Vc.r, ec[nc + 1] = 255 * Vc.g, ec[nc + 2] = 255 * Vc.b, Vc.equalsWithEpsilon(aV, zV) || (lc = !0), mB[nc + 1] /= hc.roughness > zV ? hc.roughness : 1, mB[nc + 2] /= hc.metallic > zV ? hc.metallic : 1;
              tB.Color3.FromInts(255, mB[nc + 1], mB[nc + 2]).equalsWithEpsilon(aV, zV) || (aB = !0)
            }
          return aB && Vc.push((0, Yc.EncodeImageAsync)(mB, Pc, qB).then((cB => {
            hc.metallicRoughnessTextureData = cB
          }))), lc && Vc.push((0, Yc.EncodeImageAsync)(ec, Pc, qB).then((cB => {
            hc.baseColorTextureData = cB
          }))), await Promise.all(Vc).then((() => hc))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(cB) {
        const Bc = this._getPerceivedBrightness(cB.diffuseColor),
          nc = this._getPerceivedBrightness(cB.specularColor),
          Vc = 1 - this._getMaxComponent(cB.specularColor),
          Ic = Ln(Bc, nc, Vc),
          rB = cB.diffuseColor.scale(Vc / (1 - pn.r) / Math.max(1 - Ic, zV)),
          uc = cB.specularColor.subtract(pn.scale(1 - Ic)).scale(1 / Math.max(Ic, zV));
        let sc = tB.Color3.Lerp(rB, uc, Ic * Ic);
        sc = sc.clampToRef(0, 1, sc);
        return {
          baseColor: sc,
          metallic: Ic,
          roughness: 1 - cB.glossiness
        }
      }
      _getPerceivedBrightness(cB) {
        return Math.sqrt(.299 * cB.r * cB.r + .587 * cB.g * cB.g + .114 * cB.b * cB.b)
      }
      _getMaxComponent(cB) {
        return Math.max(cB.r, Math.max(cB.g, cB.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = [],
          qB = {
            baseColor: cB,
            metallic: Bc,
            roughness: nc
          };
        if (Mc)
          if (uc instanceof GB) {
            if (uc.geometryOpacityTexture) {
              const cB = Vc && Vc.getInternalTexture() ? Vc.getInternalTexture().uniqueId : 0,
                Bc = uc.geometryOpacityTexture && uc.geometryOpacityTexture.getInternalTexture() ? uc.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                nc = Number(`${cB}${Bc}`),
                Ic = this._textureMap.get(nc);
              Ic ? sc.baseColorTexture = Ic : Pc.push(sn("baseColorOpacityTexture", qV(Vc ? Mn(Vc, 0) : Pn(1), Vc ? Mn(Vc, 1) : Pn(1), Vc ? Mn(Vc, 2) : Pn(1), Mn(uc.geometryOpacityTexture, 0)), uc.knc()).then((async cB => {
                const Bc = await this.exportTextureAsync(cB, nc);
                Bc && (sc.baseColorTexture = Bc)
              })))
            } else Vc && Pc.push(this.exportTextureAsync(Vc).then((cB => {
              cB && (sc.baseColorTexture = cB)
            })));
            if (uc._useMetallicFromMetallicTextureBlue && Ic) Pc.push(this.exportTextureAsync(Ic).then((cB => {
              cB && (sc.metallicRoughnessTexture = cB)
            })));
            else if (rB || Ic) {
              const cB = Ic && Ic.getInternalTexture() ? Ic.getInternalTexture().uniqueId : 0,
                Bc = rB && rB.getInternalTexture() ? rB.getInternalTexture().uniqueId : 0,
                nc = Number(`${cB}${Bc}`),
                Vc = this._textureMap.get(nc);
              Vc ? sc.metallicRoughnessTexture = Vc : Pc.push(sn("MetalRoughTexture", qV(uc.ambientOcclusionTexture ? Mn(uc.ambientOcclusionTexture, 0) : Pn(1), rB ? Mn(rB, 0) : Pn(1), Ic ? Mn(Ic, 0) : Pn(1)), uc.knc()).then((async cB => {
                const Bc = await this.exportTextureAsync(cB, nc);
                Bc && (sc.metallicRoughnessTexture = Bc)
              })))
            }
          } else Vc && Pc.push(this.exportTextureAsync(Vc).then((cB => {
            cB && (sc.baseColorTexture = cB)
          }))), Ic && Pc.push(this.exportTextureAsync(Ic).then((cB => {
            cB && (sc.metallicRoughnessTexture = cB)
          })));
        return Pc.length > 0 && (this._exporter._materialNeedsUVsSet.add(uc), await Promise.all(Pc)), qB
      }
      _getTextureSampler(cB) {
        const Bc = {};
        if (!cB || !(cB instanceof hc.b)) return Bc;
        const nc = this._getGLTFTextureWrapMode(cB.wrapU);
        10497 !== nc && (Bc.wrapS = nc);
        const Vc = this._getGLTFTextureWrapMode(cB.wrapV);
        switch (10497 !== Vc && (Bc.wrapT = Vc), cB.samplingMode) {
          case hc.b.LINEAR_LINEAR:
            Bc.magFilter = 9729, Bc.minFilter = 9729;
            break;
          case hc.b.LINEAR_NEAREST:
            Bc.magFilter = 9729, Bc.minFilter = 9728;
            break;
          case hc.b.NEAREST_LINEAR:
            Bc.magFilter = 9728, Bc.minFilter = 9729;
            break;
          case hc.b.NEAREST_LINEAR_MIPLINEAR:
            Bc.magFilter = 9728, Bc.minFilter = 9987;
            break;
          case hc.b.NEAREST_NEAREST:
            Bc.magFilter = 9728, Bc.minFilter = 9728;
            break;
          case hc.b.NEAREST_LINEAR_MIPNEAREST:
            Bc.magFilter = 9728, Bc.minFilter = 9985;
            break;
          case hc.b.LINEAR_NEAREST_MIPNEAREST:
            Bc.magFilter = 9729, Bc.minFilter = 9984;
            break;
          case hc.b.LINEAR_NEAREST_MIPLINEAR:
            Bc.magFilter = 9729, Bc.minFilter = 9986;
            break;
          case hc.b.NEAREST_NEAREST_MIPLINEAR:
            Bc.magFilter = 9728, Bc.minFilter = 9986;
            break;
          case hc.b.LINEAR_LINEAR_MIPLINEAR:
            Bc.magFilter = 9729, Bc.minFilter = 9987;
            break;
          case hc.b.LINEAR_LINEAR_MIPNEAREST:
            Bc.magFilter = 9729, Bc.minFilter = 9985;
            break;
          case hc.b.NEAREST_NEAREST_MIPNEAREST:
            Bc.magFilter = 9728, Bc.minFilter = 9984
        }
        return Bc
      }
      _getGLTFTextureWrapMode(cB) {
        switch (cB) {
          case hc.b.WRAP_ADDRESSMODE:
            return 10497;
          case hc.b.CLAMP_ADDRESSMODE:
            return 33071;
          case hc.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Ic.Tools.Error(`Unsupported Texture Wrap Mode ${cB}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(cB, Bc, nc) {
        const Vc = {
            diffuseColor: cB._albedoColor,
            specularColor: cB._reflectivityColor,
            glossiness: cB._microSurface
          },
          Ic = cB._albedoTexture,
          rB = cB._reflectivityTexture,
          uc = cB._useMicroSurfaceFromReflectivityMapAlpha;
        if (rB && !uc) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Ic || rB) && nc) {
          this._exporter._materialNeedsUVsSet.add(cB);
          const nc = this._exportTextureSampler(Ic || rB),
            uc = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Ic, rB, Vc),
            sc = this._exporter._textures;
          if (uc.baseColorTextureData) {
            const cB = await this._exportImageAsync(`baseColor${sc.length}`, uc.baseColorTextureData);
            Bc.baseColorTexture = this._exportTextureInfo(cB, nc, Ic?.coordinatesIndex)
          }
          if (uc.metallicRoughnessTextureData) {
            const cB = await this._exportImageAsync(`metallicRoughness${sc.length}`, uc.metallicRoughnessTextureData);
            Bc.metallicRoughnessTexture = this._exportTextureInfo(cB, nc, rB?.coordinatesIndex)
          }
          return uc
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Vc)
      }
      async exportPBRMaterialAsync(cB, Bc) {
        const nc = {},
          Vc = {
            name: cB.name
          },
          Ic = cB.isMetallicWorkflow();
        if (Ic) {
          const Bc = cB._albedoColor,
            Vc = cB.alpha;
          Bc && (nc.baseColorFactor = [Bc.r, Bc.g, Bc.b, Vc])
        }
        const rB = Ic ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(cB._albedoColor, cB._metallic, cB._roughness, cB._albedoTexture, cB._metallicTexture, cB._metallicTexture, cB, nc, Bc) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(cB, nc, Bc);
        await this._setMetallicRoughnessPbrMaterialAsync(rB, cB, Vc, nc, Bc), await this._finishMaterialAsync(Vc, cB);
        const uc = this._exporter._materials;
        return uc.push(Vc), uc.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(cB, Bc, nc, Vc, rB) {
        if (Un(nc, Bc), cB.baseColor.equalsWithEpsilon(aV, zV) && zB.WithinEpsilon(Bc.alpha, 1, zV) || (Vc.baseColorFactor = [cB.baseColor.r, cB.baseColor.g, cB.baseColor.b, Bc.alpha]), null != cB.metallic && 1 !== cB.metallic && (Vc.metallicFactor = cB.metallic), null != cB.roughness && 1 !== cB.roughness && (Vc.roughnessFactor = cB.roughness), null == Bc.backFaceCulling || Bc.backFaceCulling || (Bc._twoSidedLighting || Ic.Tools.Warn(Bc.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), nc.doubleSided = !0), rB) {
          const cB = [],
            Ic = Bc instanceof an ? Bc._bumpTexture : Bc.geometryNormalTexture;
          Ic && cB.push(this.exportTextureAsync(Ic).then((cB => {
            cB && (nc.normalTexture = cB, 1 !== Ic.level && (nc.normalTexture.scale = Ic.level))
          })));
          const rB = Bc instanceof an ? Bc._ambientTexture : Bc.ambientOcclusionTexture;
          rB && cB.push(new Promise((async cB => {
            if (Bc instanceof GB && Vc.metallicRoughnessTexture) {
              const Bc = this._exportTextureSampler(rB),
                nc = this._exporter._textures[Vc.metallicRoughnessTexture.index].source,
                Ic = this._exportTextureInfo(nc, Bc, rB.coordinatesIndex);
              return this._textureMap.set(rB.uniqueId, Ic), this._exporter._extensionsPostExportTextures("exporter", Ic, rB), cB(Ic)
            }
            return cB(await this.exportTextureAsync(rB))
          })).then((async cB => {
            if (cB) {
              const Vc = {
                index: cB.index,
                texCoord: cB.texCoord,
                extensions: cB.extensions
              };
              nc.occlusionTexture = Vc, Vc.strength = Bc instanceof an ? Bc._ambientTextureStrength : Bc.ambientOcclusionTexture.level
            }
          })));
          const uc = Bc instanceof an ? Bc._emissiveTexture : Bc.emissionColorTexture;
          uc && cB.push(this.exportTextureAsync(uc).then((cB => {
            cB && (nc.emissiveTexture = cB)
          }))), cB.length > 0 && (this._exporter._materialNeedsUVsSet.add(Bc), await Promise.all(cB))
        }
        const uc = Bc instanceof an ? Bc._emissiveColor : Bc.emissionColor;
        uc.equalsWithEpsilon(lnc, zV) || (nc.emissiveFactor = uc.KPc()), nc.pbrMetallicRoughness = Vc
      }
      async exportOpenPBRMaterialAsync(cB, Bc) {
        const nc = {},
          Vc = {
            name: cB.name
          },
          Ic = cB.baseColor,
          rB = cB.geometryOpacity;
        Ic && (nc.baseColorFactor = [Ic.r, Ic.g, Ic.b, rB]);
        const uc = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(cB.baseColor, cB.baseMetalness, cB.specularRoughness, cB.baseColorTexture, cB.baseMetalnessTexture, cB.specularRoughnessTexture, cB, nc, Bc);
        await this._setMetallicRoughnessPbrMaterialAsync(uc, cB, Vc, nc, Bc), await this._finishMaterialAsync(Vc, cB);
        const sc = this._exporter._materials;
        return sc.push(Vc), sc.length - 1
      }
      async exportTextureAsync(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = this._textureMap.get(Bc ?? cB.uniqueId);
        if (nc) return nc;
        const Vc = this._exportTextureSampler(cB),
          Ic = await this._exportTextureImageAsync(cB);
        return nc = this._exportTextureInfo(Ic, Vc, cB.coordinatesIndex), this._textureMap.set(Bc ?? cB.uniqueId, nc), this._exporter._extensionsPostExportTextures("exporter", nc, cB), nc
      }
      async _exportTextureImageAsync(cB) {
        const Bc = cB.mimeType ?? "none",
          nc = this._internalTextureToImage,
          Vc = cB.getInternalTexture().uniqueId;
        nc[Vc] = nc[Vc] || {};
        let rB = nc[Vc][Bc];
        return void 0 === rB && (rB = (async () => {
          const nc = await yV(cB);
          if (nc && Yn(nc.mimeType) && ("none" === Bc || nc.mimeType === Bc)) return await this._exportImageAsync(cB.name, new Blob([nc.data], {
            type: nc.mimeType
          }));
          let Vc = "image/png";
          "none" !== Bc && (Yn(Bc) ? Vc = Bc : (Vc = "image/png", Ic.Tools.Warn(`Unsupported media type: ${Bc}. Exporting texture as PNG.`)));
          const rB = cB.getSize(),
            uc = await (0, pc.g)(cB),
            sc = await (0, Yc.EncodeImageAsync)(uc, rB.width, rB.height, Vc);
          return await this._exportImageAsync(cB.name, sc)
        })(), nc[Vc][Bc] = rB), await rB
      }
      async _exportImageAsync(cB, Bc) {
        const nc = this._exporter._images;
        let Vc;
        if (this._exporter._shouldUseGlb) {
          Vc = {
            name: cB,
            mimeType: Bc.type,
            bufferView: void 0
          };
          const nc = await Bc.arrayBuffer(),
            Ic = this._exporter._bufferManager.createBufferView(new Uint8Array(nc));
          this._exporter._bufferManager.setBufferView(Vc, Ic)
        } else {
          const rB = cB.replace(/\.\/|\/|\.\\|\\/g, "_"),
            uc = function(cB) {
              switch (cB) {
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
            }(Bc.type);
          let sc = rB + uc;
          nc.some((cB => cB.uri === sc)) && (sc = `${rB}_${Ic.Tools.RandomId()}${uc}`), Vc = {
            name: cB,
            uri: sc
          }, this._exporter._imageData[sc] = Bc
        }
        return nc.push(Vc), nc.length - 1
      }
      _exportTextureInfo(cB, Bc, nc) {
        const Vc = this._exporter._textures;
        let Ic = Vc.findIndex((nc => nc.sampler == Bc && nc.source === cB)); - 1 === Ic && (Ic = Vc.length, Vc.push({
          source: cB,
          sampler: Bc
        }));
        const rB = {
          index: Ic
        };
        return nc && (rB.texCoord = nc), rB
      }
      _exportTextureSampler(cB) {
        const Bc = this._getTextureSampler(cB),
          nc = this._exporter._samplers,
          Vc = nc.findIndex((cB => cB.minFilter === Bc.minFilter && cB.magFilter === Bc.magFilter && cB.wrapS === Bc.wrapS && cB.wrapT === Bc.wrapT));
        return -1 !== Vc ? Vc : (nc.push(Bc), nc.length - 1)
      }
    }
    var Cn = nc(38116),
      vV = nc(38242);
    (0, vV.e)();
    var Dn = nc(35759);
    const Nn = Vc.Matrix.Compose(new Vc.KV(-1, 1, 1), Vc.Quaternion.Identity(), Vc.KV.Zero());

    function En(cB, Bc) {
      if (!(cB instanceof Oc.d)) return !1;
      if (Bc) {
        if (!cB.getWorldMatrix().equalsWithEpsilon(Vc.Matrix.IdentityReadOnly, Dn.c)) return !1
      } else {
        if (!cB.getWorldMatrix().multiplyToRef(Nn, Vc.TmpVectors.Matrix[0]).equalsWithEpsilon(Vc.Matrix.IdentityReadOnly, Dn.c)) return !1
      }
      return !(cB instanceof Tc.d && cB.geometry)
    }
    const onc = Vc.KV.ZeroReadOnly,
      Wn = Vc.Quaternion.Identity(),
      wn = Vc.KV.OneReadOnly,
      kV = new Vc.KV(-1, 1, 1);

    function Xn(cB, Bc) {
      const {
        byteOffset: nc,
        byteStride: Vc,
        type: Ic,
        normalized: rB
      } = cB, uc = cB.getSize(), sc = Bc.reduce(((cB, Bc) => Bc.getTotalVertices() > cB ? Bc.getTotalVertices() : cB), -Number.MAX_VALUE);
      return {
        byteOffset: nc,
        byteStride: Vc,
        componentCount: uc,
        type: Ic,
        count: sc * uc,
        normalized: rB,
        totalVertices: sc,
        kind: cB.getKind()
      }
    }

    function Hn(cB) {
      switch (cB) {
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

    function Fn(cB) {
      switch (cB) {
        case qB.g.PositionKind:
        case qB.g.NormalKind:
        case qB.g.TangentKind:
        case qB.g.ColorKind:
        case qB.g.MatricesIndicesKind:
        case qB.g.MatricesIndicesExtraKind:
        case qB.g.MatricesWeightsKind:
        case qB.g.MatricesWeightsExtraKind:
        case qB.g.UVKind:
        case qB.g.UV2Kind:
        case qB.g.UV3Kind:
        case qB.g.UV4Kind:
        case qB.g.UV5Kind:
        case qB.g.UV6Kind:
          return !0
      }
      return !1
    }

    function Jn(cB) {
      const Bc = Math.sqrt(cB.x * cB.x + cB.y * cB.y + cB.z * cB.z);
      Bc > 0 && (cB.x /= Bc, cB.y /= Bc, cB.z /= Bc)
    }

    function jV(cB) {
      return cB.x *= -1, cB
    }

    function Rn(cB) {
      if (cB.x * cB.x + cB.y * cB.y > .5) {
        const Bc = Math.abs(cB.x),
          nc = Math.abs(cB.y);
        if (Bc > nc) {
          const nc = Math.sign(cB.x);
          cB.x = Bc, cB.y *= -nc, cB.z *= -nc, cB.w *= nc
        } else {
          const Bc = Math.sign(cB.y);
          cB.x *= -Bc, cB.y = nc, cB.z *= Bc, cB.w *= -Bc
        }
      } else {
        const Bc = Math.abs(cB.z),
          nc = Math.abs(cB.w);
        if (Bc > nc) {
          const nc = Math.sign(cB.z);
          cB.x *= -nc, cB.y *= nc, cB.z = Bc, cB.w *= -nc
        } else {
          const Bc = Math.sign(cB.w);
          cB.x *= Bc, cB.y *= -Bc, cB.z *= -Bc, cB.w = nc
        }
      }
      return cB
    }

    function iV(cB) {
      cB.puc(-cB.z, cB.w, cB.x, -cB.y)
    }

    function Kn(cB, Bc) {
      const nc = Vc.KV.FromArrayToRef(Bc.translation || [0, 0, 0], 0, Vc.TmpVectors.KV[0]),
        Ic = Vc.Quaternion.FromArrayToRef(Bc.rotation || [0, 0, 0, 1], 0, Vc.TmpVectors.Quaternion[0]),
        rB = Vc.Matrix.ComposeToRef(wn, Ic, nc, Vc.TmpVectors.Matrix[0]),
        uc = Vc.KV.FromArrayToRef(cB.translation || [0, 0, 0], 0, Vc.TmpVectors.KV[2]),
        sc = Vc.Quaternion.FromArrayToRef(cB.rotation || [0, 0, 0, 1], 0, Vc.TmpVectors.Quaternion[1]),
        Mc = Vc.Matrix.ComposeToRef(wn, sc, uc, Vc.TmpVectors.Matrix[1]);
      rB.multiplyToRef(Mc, Mc), Mc.decompose(void 0, Ic, nc), nc.equalsWithEpsilon(onc, Dn.c) ? delete Bc.translation : Bc.translation = nc.KPc(), Ic.equalsWithEpsilon(Wn, Dn.c) ? delete Bc.rotation : Bc.rotation = Ic.KPc(), Bc.scale && delete Bc.scale
    }

    function xV(cB, Bc) {
      if (!(Bc instanceof Oc.d)) return !1;
      if (!(1 === Bc.getChildren().length && 0 === cB.getChildren().length && cB.parent === Bc)) return !1;
      const nc = cB.knc(),
        Vc = cB instanceof vV.h && !nc.useRightHandedSystem ? kV : wn;
      return !!Bc.Su.equalsWithEpsilon(Vc, Dn.c) || (Uc.c.Warn(`Cannot collapse node ${cB.name} into parent node ${Bc.name} with modified scaling.`), !1)
    }

    function dn(cB) {
      if (cB instanceof Array) {
        const Bc = new Float32Array(cB);
        return new Uint8Array(Bc.buffer, Bc.byteOffset, Bc.byteLength)
      }
      return ArrayBuffer.isView(cB) ? new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength) : new Uint8Array(cB)
    }

    function An(cB, Bc) {
      for (const [nc, Vc] of Object.entries(cB)) {
        const Ic = Bc[nc];
        (Array.isArray(Vc) && Array.isArray(Ic) && Gn(Vc, Ic) || Vc === Ic) && delete cB[nc]
      }
      return cB
    }

    function Gn(cB, Bc) {
      return cB.length === Bc.length && cB.every(((cB, nc) => cB === Bc[nc]))
    }
    const cI = new Map([
      [Int8Array, (cB, Bc, nc) => cB.setInt8(Bc, nc)],
      [Uint8Array, (cB, Bc, nc) => cB.setUint8(Bc, nc)],
      [Uint8ClampedArray, (cB, Bc, nc) => cB.setUint8(Bc, nc)],
      [Int16Array, (cB, Bc, nc) => cB.setInt16(Bc, nc, !0)],
      [Uint16Array, (cB, Bc, nc) => cB.setUint16(Bc, nc, !0)],
      [Int32Array, (cB, Bc, nc) => cB.setInt32(Bc, nc, !0)],
      [Uint32Array, (cB, Bc, nc) => cB.setUint32(Bc, nc, !0)],
      [Float32Array, (cB, Bc, nc) => cB.setFloat32(Bc, nc, !0)],
      [Float64Array, (cB, Bc, nc) => cB.setFloat64(Bc, nc, !0)]
    ]);
    class BV {
      writeTypedArray(cB) {
        this._checkGrowBuffer(cB.byteLength);
        const Bc = cI.get(cB.constructor);
        for (let nc = 0; nc < cB.length; nc++) Bc(this._dataView, this._byteOffset, cB[nc]), this._byteOffset += cB.BYTES_PER_ELEMENT
      }
      constructor(cB) {
        this._data = new Uint8Array(cB), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(cB) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, cB), this._byteOffset++
      }
      writeInt8(cB) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, cB), this._byteOffset++
      }
      writeInt16(cB) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, cB, !0), this._byteOffset += 2
      }
      writeUInt16(cB) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, cB, !0), this._byteOffset += 2
      }
      writeInt32(cB) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, cB, !0), this._byteOffset += 4
      }
      writeUInt32(cB) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, cB, !0), this._byteOffset += 4
      }
      writeFloat32(cB) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, cB, !0), this._byteOffset += 4
      }
      writeFloat64(cB) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, cB, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(cB) {
        const Bc = this.byteOffset + cB;
        if (Bc > this._data.byteLength) {
          const cB = new Uint8Array(2 * Bc);
          cB.set(this._data), this._data = cB, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function nV(cB) {
      return cB % 4 === 0 ? 4 : cB % 2 === 0 ? 2 : 1
    }
    class VV {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(cB) {
        let Bc = 0;
        this._bufferViewToData.forEach((cB => {
          Bc += cB.byteLength
        }));
        const nc = new BV(Bc),
          Vc = Array.from(this._bufferViewToData.keys()).sort(((cB, Bc) => nV(Bc.byteLength) - nV(cB.byteLength)));
        for (const Ic of Vc) {
          Ic.byteOffset = nc.byteOffset, cB.push(Ic);
          const Bc = cB.length - 1,
            Vc = this.getPropertiesWithBufferView(Ic);
          for (const cB of Vc) cB.bufferView = Bc;
          nc.writeTypedArray(this._bufferViewToData.get(Ic)), this._bufferViewToData.delete(Ic)
        }
        return nc.getOutputData()
      }
      createBufferView(cB, Bc) {
        const nc = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: cB.byteLength,
          byteStride: Bc
        };
        return this._bufferViewToData.set(nc, cB), nc
      }
      createAccessor(cB, Bc, nc, Vc, Ic, rB, uc) {
        this._verifyBufferView(cB);
        const sc = {
          bufferView: void 0,
          componentType: nc,
          count: Vc,
          type: Bc,
          min: rB?.min,
          max: rB?.max,
          normalized: uc,
          byteOffset: Ic
        };
        return this.setBufferView(sc, cB), this._accessorToBufferView.set(sc, cB), sc
      }
      setBufferView(cB, Bc) {
        this._verifyBufferView(Bc);
        this.getPropertiesWithBufferView(Bc).push(cB)
      }
      removeBufferView(cB) {
        const Bc = this.getPropertiesWithBufferView(cB);
        for (const nc of Bc) void 0 !== nc.bufferView && delete nc.bufferView;
        this._bufferViewToData.delete(cB), this._bufferViewToProperties.delete(cB), this._accessorToBufferView.forEach(((Bc, nc) => {
          Bc === cB && (void 0 !== nc.byteOffset && delete nc.byteOffset, this._accessorToBufferView.delete(nc))
        }))
      }
      getBufferView(cB) {
        const Bc = this._accessorToBufferView.get(cB);
        return this._verifyBufferView(Bc), Bc
      }
      getPropertiesWithBufferView(cB) {
        return this._verifyBufferView(cB), this._bufferViewToProperties.set(cB, this._bufferViewToProperties.get(cB) ?? []), this._bufferViewToProperties.get(cB)
      }
      getData(cB) {
        return this._verifyBufferView(cB), this._bufferViewToData.get(cB)
      }
      _verifyBufferView(cB) {
        if (void 0 === cB || !this._bufferViewToData.has(cB)) throw new Error(`BufferView ${cB} not found in BufferManager.`)
      }
    }
    var IV = nc(38251);
    (0, IV.h)();
    var rI = nc(38461);
    (0, rI.g)();
    var uV = nc(38294),
      sV = nc(39187);
    (0, sV.h)();
    let MV = (() => {
      var cB;
      let Bc, nc, Vc = [],
        Ic = [],
        rB = [],
        uc = [];
      return cB = class {
        get influence() {
          return this._influence
        }
        set influence(cB) {
          if (this._influence === cB) return;
          const Bc = this._influence;
          this._influence = cB, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Bc || 0 === cB)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(cB) {
          this._animationPropertiesOverride = cB
        }
        constructor(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            sc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = cB, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Bn.c, this._onDataLayoutChanged = new Bn.c, this.id = (0, Lc.k)(this, Vc, void 0), this.morphTargetManager = ((0, Lc.k)(this, Ic), (0, Lc.k)(this, rB, null)), this._animationPropertiesOverride = ((0, Lc.k)(this, uc), null), this.id = cB, this.morphTargetManager = sc, this._scene = nc || ec.d.LastCreatedScene, this.influence = Bc, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        mmc(cB) {
          const Bc = this.hasPositions;
          this._positions = cB, Bc !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(cB) {
          const Bc = this.hasNormals;
          this._normals = cB, Bc !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(cB) {
          const Bc = this.hasTangents;
          this._tangents = cB, Bc !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(cB) {
          const Bc = this.hasUVs;
          this._uvs = cB, Bc !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(cB) {
          const Bc = this.hasUV2s;
          this._uv2s = cB, Bc !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(cB) {
          const Bc = this.hasColors;
          this._colors = cB, Bc !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Bc = lB.e.Clone((() => new cB(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Bc._positions = this._positions, Bc._normals = this._normals, Bc._tangents = this._tangents, Bc._uvs = this._uvs, Bc._uv2s = this._uv2s, Bc._colors = this._colors, Bc
        }
        serialize() {
          const cB = {};
          return cB.name = this.name, cB.influence = this.influence, null != this.id && (cB.id = this.id), cB.uniqueId = this.uniqueId, cB.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (cB.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (cB.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (cB.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (cB.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (cB.colors = Array.prototype.slice.call(this.getColors())), lB.e.AppendSerializedAnimations(this, cB), cB
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Bc, nc) {
          let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Ic = new cB(Bc.name, Bc.influence, nc, Vc);
          if (Ic.mmc(Bc.positions), null != Bc.id && (Ic.id = Bc.id), Bc.normals && Ic.setNormals(Bc.normals), Bc.tangents && Ic.setTangents(Bc.tangents), Bc.uvs && Ic.setUVs(Bc.uvs), Bc.uv2s && Ic.setUV2s(Bc.uv2s), Bc.colors && Ic.setColors(Bc.colors), Bc.animations) {
            for (let cB = 0; cB < Bc.animations.length; cB++) {
              const nc = Bc.animations[cB],
                Vc = (0, XB.b)("BABYLON.Animation");
              Vc && Ic.animations.push(Vc.Parse(nc))
            }
            Bc.autoAnimate && nc && nc.beginAnimation(Ic, Bc.autoAnimateFrom, Bc.autoAnimateTo, Bc.autoAnimateLoop, Bc.autoAnimateSpeed || 1)
          }
          return Ic
        }
        static FromMesh(Bc, nc, Vc) {
          nc || (nc = Bc.name);
          const Ic = new cB(nc, Vc, Bc.knc(), Bc.morphTargetManager);
          return Ic.mmc(Bc.getVerticesData(wc.i.PositionKind)), Bc.isVerticesDataPresent(wc.i.NormalKind) && Ic.setNormals(Bc.getVerticesData(wc.i.NormalKind)), Bc.isVerticesDataPresent(wc.i.TangentKind) && Ic.setTangents(Bc.getVerticesData(wc.i.TangentKind)), Bc.isVerticesDataPresent(wc.i.UVKind) && Ic.setUVs(Bc.getVerticesData(wc.i.UVKind)), Bc.isVerticesDataPresent(wc.i.UV2Kind) && Ic.setUV2s(Bc.getVerticesData(wc.i.UV2Kind)), Bc.isVerticesDataPresent(wc.i.ColorKind) && Ic.setColors(Bc.getVerticesData(wc.i.ColorKind)), Ic
        }
      }, (() => {
        const sc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Bc = [(0, gB.M)()], nc = [(0, gB.M)()], (0, Lc.g)(null, null, Bc, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: cB => "id" in cB,
            get: cB => cB.id,
            set: (cB, Bc) => {
              cB.id = Bc
            }
          },
          metadata: sc
        }, Vc, Ic), (0, Lc.g)(null, null, nc, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: cB => "morphTargetManager" in cB,
            get: cB => cB.morphTargetManager,
            set: (cB, Bc) => {
              cB.morphTargetManager = Bc
            }
          },
          metadata: sc
        }, rB, uc), sc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sc
        })
      })(), cB
    })();
    var PV, qI = nc(39241),
      OV = nc(38291);
    ! function(cB) {
      cB[cB.INTANGENT = 0] = "INTANGENT", cB[cB.OUTTANGENT = 1] = "OUTTANGENT"
    }(PV || (PV = {}));
    class TV {
      static _IsTransformable(cB) {
        return cB && (cB instanceof Oc.d || cB instanceof IV.e || cB instanceof OV.b)
      }
      static _CreateNodeAnimation(cB, Bc, nc, Vc, rB) {
        if (this._IsTransformable(cB)) {
          const uc = [],
            sc = [],
            Mc = Bc.getKeys(),
            Pc = TV._CalculateMinMaxKeyFrames(Mc),
            qB = TV._DeduceInterpolation(Mc, nc, Vc),
            Oc = qB.interpolationType,
            Tc = qB.shouldBakeAnimation;
          if (Tc ? TV._CreateBakedAnimation(cB, Bc, nc, Pc.min, Pc.max, Bc.framePerSecond, rB, uc, sc, Pc, Vc) : "LINEAR" === Oc || "STEP" === Oc ? TV._CreateLinearOrStepAnimation(cB, Bc, nc, uc, sc, Vc) : "CUBICSPLINE" === Oc ? TV._CreateCubicSplineAnimation(cB, Bc, nc, uc, sc, Vc) : TV._CreateBakedAnimation(cB, Bc, nc, Pc.min, Pc.max, Bc.framePerSecond, rB, uc, sc, Pc, Vc), uc.length && sc.length) {
            return {
              inputs: uc,
              outputs: sc,
              samplerInterpolation: Oc,
              inputsMin: Tc ? Pc.min : Ic.Tools.FloatRound(Pc.min / Bc.framePerSecond),
              inputsMax: Tc ? Pc.max : Ic.Tools.FloatRound(Pc.max / Bc.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(cB) {
        let Bc = null,
          nc = "VEC3",
          Vc = !1;
        const rB = cB.targetProperty.split(".");
        switch (rB[0]) {
          case "Su":
            Bc = "scale";
            break;
          case "position":
            Bc = "translation";
            break;
          case "rotation":
            nc = "VEC4", Bc = "rotation";
            break;
          case "rotationQuaternion":
            nc = "VEC4", Vc = !0, Bc = "rotation";
            break;
          case "influence":
            nc = "SCALAR", Bc = "weights";
            break;
          default:
            Ic.Tools.Error(`Unsupported animatable property ${rB[0]}`)
        }
        return Bc ? {
          animationChannelTargetPath: Bc,
          dataAccessorType: nc,
          useQuaternion: Vc
        } : (Ic.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        let Oc;
        if (TV._IsTransformable(cB) && cB.animations)
          for (const Tc of cB.animations) {
            if (qB && !qB(Tc)) continue;
            const Ic = TV._DeduceAnimationInfo(Tc);
            Ic && (Oc = {
              name: Tc.name,
              samplers: [],
              channels: []
            }, TV._AddAnimation(`${Tc.name}`, Tc.hasRunningRuntimeAnimations ? Bc : Oc, cB, Tc, Ic.dataAccessorType, Ic.animationChannelTargetPath, Vc, rB, uc, sc, Ic.useQuaternion, Mc, Pc), Oc.samplers.length && Oc.channels.length && nc.push(Oc))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
        let Oc;
        if (cB instanceof qI.d) {
          const Ic = cB.morphTargetManager;
          if (Ic)
            for (let Tc = 0; Tc < Ic.numTargets; ++Tc) {
              const fc = Ic.getTarget(Tc);
              for (const mB of fc.animations) {
                if (qB && !qB(mB)) continue;
                const fc = new sV.d(`${mB.name}`, "influence", mB.framePerSecond, mB.dataType, mB.B_, mB.enableBlending),
                  ec = [],
                  tB = mB.getKeys();
                for (let cB = 0; cB < tB.length; ++cB) {
                  const Bc = tB[cB];
                  for (let cB = 0; cB < Ic.numTargets; ++cB) cB == Tc ? ec.push(Bc) : ec.push({
                    frame: Bc.frame,
                    value: 0
                  })
                }
                fc.setKeys(ec, !0);
                const Sc = TV._DeduceAnimationInfo(fc);
                Sc && (Oc = {
                  name: fc.name,
                  samplers: [],
                  channels: []
                }, TV._AddAnimation(mB.name, mB.hasRunningRuntimeAnimations ? Bc : Oc, cB, fc, Sc.dataAccessorType, Sc.animationChannelTargetPath, Vc, rB, uc, sc, Sc.useQuaternion, Mc, Pc, Ic.numTargets), Oc.samplers.length && Oc.channels.length && nc.push(Oc))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        let qB;
        if (cB.animationGroups) {
          const Oc = cB.animationGroups;
          for (const Tc of Oc) {
            const Oc = new Map,
              fc = new Map,
              mB = new Set,
              ec = Tc.to - Tc.from;
            qB = {
              name: Tc.name,
              channels: [],
              samplers: []
            };
            for (let Bc = 0; Bc < Tc.targetedAnimations.length; ++Bc) {
              const Pc = Tc.targetedAnimations[Bc],
                ec = Pc.target,
                tB = Pc.animation;
              if (Mc && !Mc(tB)) continue;
              const Sc = sc.has(ec);
              if (this._IsTransformable(ec) || 1 === ec.length && this._IsTransformable(ec[0])) {
                const cB = TV._DeduceAnimationInfo(Pc.animation);
                if (cB) {
                  const Bc = this._IsTransformable(ec) ? ec : this._IsTransformable(ec[0]) ? ec[0] : null;
                  Bc && TV._AddAnimation(`${tB.name}`, qB, Bc, tB, cB.dataAccessorType, cB.animationChannelTargetPath, nc, Vc, Ic, rB, cB.useQuaternion, uc, Sc)
                }
              } else if (ec instanceof MV || 1 === ec.length && ec[0] instanceof MV) {
                if (TV._DeduceAnimationInfo(Pc.animation)) {
                  const Bc = ec instanceof MV ? ec : ec[0];
                  if (Bc) {
                    const nc = cB.morphTargetManagers.find((cB => {
                      for (let nc = 0; nc < cB.numTargets; ++nc)
                        if (cB.getTarget(nc) === Bc) return !0;
                      return !1
                    }));
                    if (nc) {
                      const Vc = cB.meshes.find((cB => cB.morphTargetManager === nc));
                      Vc && (Oc.has(Vc) || Oc.set(Vc, new Map), Oc.get(Vc)?.set(Bc, tB), mB.add(Vc), fc.set(Vc, tB))
                    }
                  }
                }
              }
            }
            mB.forEach((cB => {
              const Bc = cB.morphTargetManager;
              let sc = null;
              const Mc = [],
                Pc = fc.get(cB).getKeys(),
                mB = Pc.length;
              for (let nc = 0; nc < mB; ++nc)
                for (let Vc = 0; Vc < Bc.numTargets; ++Vc) {
                  const Ic = Bc.getTarget(Vc),
                    rB = Oc.get(cB);
                  if (rB) {
                    const Bc = rB.get(Ic);
                    Bc ? (sc || (sc = new sV.d(`${Tc.name}_${cB.name}_MorphWeightAnimation`, "influence", Bc.framePerSecond, sV.d.ANIMATIONTYPE_FLOAT, Bc.B_, Bc.enableBlending)), Mc.push(Bc.getKeys()[nc])) : Mc.push({
                      frame: Tc.from + ec / mB * nc,
                      value: Ic.influence,
                      inTangent: Pc[0].inTangent ? 0 : void 0,
                      outTangent: Pc[0].outTangent ? 0 : void 0
                    })
                  }
                }
              sc.setKeys(Mc, !0);
              const tB = TV._DeduceAnimationInfo(sc);
              tB && TV._AddAnimation(`${Tc.name}_${cB.name}_MorphWeightAnimation`, qB, cB, sc, tB.dataAccessorType, tB.animationChannelTargetPath, nc, Vc, Ic, rB, tB.useQuaternion, uc, !1, Bc?.numTargets)
            })), qB.channels.length && qB.samplers.length && (Pc?.set(Tc, Bc.length), Bc.push(qB))
          }
        }
      }
      static _AddAnimation(cB, Bc, nc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB) {
        const ec = TV._CreateNodeAnimation(nc, Ic, uc, Oc, Tc);
        let tB, Sc, yB, zB, pc, hc;
        if (ec) {
          if (mB) {
            let cB, Bc = 0;
            const nc = [];
            for (; ec.inputs.length > 0;) cB = ec.inputs.shift(), Bc % mB == 0 && nc.push(cB), Bc++;
            ec.inputs = nc
          }
          const cB = sc.get(nc),
            Ic = new Float32Array(ec.inputs);
          tB = Mc.createBufferView(Ic), Sc = Mc.createAccessor(tB, "SCALAR", 5126, ec.inputs.length, void 0, {
            min: [ec.inputsMin],
            max: [ec.inputsMax]
          }), qB.push(Sc), yB = qB.length - 1;
          const Pc = new Vc.Quaternion,
            Oc = new Vc.KV,
            Tc = new Vc.KV,
            aB = nc instanceof IV.e,
            lc = Hn(rB),
            Yc = new Float32Array(ec.outputs.length * lc);
          ec.outputs.forEach((function(cB, Bc) {
            let nc = cB;
            switch (uc) {
              case "translation":
                fc && (Vc.KV.FromArrayToRef(cB, 0, Tc), jV(Tc), Tc.toArray(nc));
                break;
              case "rotation":
                4 === cB.length ? Vc.Quaternion.FromArrayToRef(cB, 0, Pc) : (nc = new Array(4), Vc.KV.FromArrayToRef(cB, 0, Oc), Vc.Quaternion.FromEulerVectorToRef(Oc, Pc)), fc && (Rn(Pc), aB && iV(Pc)), Pc.toArray(nc)
            }
            Yc.set(nc, Bc * lc)
          })), tB = Mc.createBufferView(Yc), Sc = Mc.createAccessor(tB, rB, 5126, ec.outputs.length), qB.push(Sc), zB = qB.length - 1, pc = {
            interpolation: ec.samplerInterpolation,
            input: yB,
            output: zB
          }, Bc.samplers.push(pc), hc = {
            sampler: Bc.samplers.length - 1,
            target: {
              node: cB,
              path: uc
            }
          }, Bc.channels.push(hc)
        }
      }
      static _CreateBakedAnimation(cB, Bc, nc, rB, uc, sc, Mc, Pc, qB, Oc, Tc) {
        let fc;
        const mB = Vc.Quaternion.Identity();
        let ec, tB, Sc, yB, zB, pc = null,
          hc = null;
        Oc.min = Ic.Tools.FloatRound(rB / sc);
        const aB = Bc.getKeys();
        for (let Vc = 0, lc = aB.length; Vc < lc; ++Vc) {
          if (tB = aB[Vc], Vc + 1 < lc)
            if (Sc = aB[Vc + 1], tB.value.equals && tB.value.equals(Sc.value) || tB.value === Sc.value) {
              if (0 !== Vc) continue;
              zB = tB.frame
            } else zB = Sc.frame;
          else {
            if (yB = aB[Vc - 1], tB.value.equals && tB.value.equals(yB.value) || tB.value === yB.value) continue;
            zB = uc
          }
          if (zB)
            for (let Vc = tB.frame; Vc <= zB; Vc += Mc) {
              if (ec = Ic.Tools.FloatRound(Vc / sc), ec === pc) continue;
              pc = ec, hc = ec;
              const rB = {
                key: 0,
                repeatCount: 0,
                B_: Bc.B_
              };
              fc = Bc._interpolate(Vc, rB), TV._SetInterpolatedValue(cB, fc, ec, Bc, nc, mB, Pc, qB, Tc)
            }
        }
        hc && (Oc.max = hc)
      }
      static _ConvertFactorToVector3OrQuaternion(cB, Bc, nc, rB, uc) {
        const sc = TV._GetBasePositionRotationOrScale(Bc, rB, uc),
          Mc = nc.targetProperty.split("."),
          Pc = Mc ? Mc[1] : "",
          qB = uc ? Vc.Quaternion.FromArray(sc).normalize() : Vc.KV.FromArray(sc);
        switch (Pc) {
          case "x":
          case "y":
          case "z":
            qB[Pc] = cB;
            break;
          case "w":
            qB.w = cB;
            break;
          default:
            Ic.Tools.Error(`glTFAnimation: Unsupported component name "${Pc}"!`)
        }
        return qB
      }
      static _SetInterpolatedValue(cB, Bc, nc, Ic, rB, uc, sc, Mc, Pc) {
        let qB;
        sc.push(nc), "weights" !== rB ? (Ic.dataType === sV.d.ANIMATIONTYPE_FLOAT && (Bc = this._ConvertFactorToVector3OrQuaternion(Bc, cB, Ic, rB, Pc)), "rotation" === rB ? (Pc ? uc = Bc : (qB = Bc, Vc.Quaternion.RotationYawPitchRollToRef(qB.y, qB.x, qB.z, uc)), Mc.push(uc.KPc())) : (qB = Bc, Mc.push(qB.KPc()))) : Mc.push([Bc])
      }
      static _CreateLinearOrStepAnimation(cB, Bc, nc, Vc, Ic, rB) {
        for (const uc of Bc.getKeys()) Vc.push(uc.frame / Bc.framePerSecond), TV._AddKeyframeValue(uc, Bc, Ic, nc, cB, rB)
      }
      static _CreateCubicSplineAnimation(cB, Bc, nc, Vc, Ic, rB) {
        Bc.getKeys().forEach((function(uc) {
          Vc.push(uc.frame / Bc.framePerSecond), TV._AddSplineTangent(PV.INTANGENT, Ic, nc, "CUBICSPLINE", uc, rB), TV._AddKeyframeValue(uc, Bc, Ic, nc, cB, rB), TV._AddSplineTangent(PV.OUTTANGENT, Ic, nc, "CUBICSPLINE", uc, rB)
        }))
      }
      static _GetBasePositionRotationOrScale(cB, Bc, nc) {
        let Ic;
        if ("rotation" === Bc)
          if (nc) {
            Ic = (cB.rotationQuaternion ?? Vc.Quaternion.Identity()).KPc()
          } else {
            Ic = (cB.rotation ?? Vc.KV.Zero()).KPc()
          }
        else if ("translation" === Bc) {
          Ic = (cB.position ?? Vc.KV.Zero()).KPc()
        } else {
          Ic = (cB.Su ?? Vc.KV.One()).KPc()
        }
        return Ic
      }
      static _AddKeyframeValue(cB, Bc, nc, rB, uc, sc) {
        let Mc;
        const Pc = Bc.dataType;
        if (Pc === sV.d.ANIMATIONTYPE_VECTOR3) {
          let Bc = cB.value.KPc();
          if ("rotation" === rB) {
            const cB = Vc.KV.FromArray(Bc);
            Bc = Vc.Quaternion.RotationYawPitchRoll(cB.y, cB.x, cB.z).KPc()
          }
          nc.push(Bc)
        } else if (Pc === sV.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === rB) nc.push([cB.value]);
          else if (Mc = this._ConvertFactorToVector3OrQuaternion(cB.value, uc, Bc, rB, sc), Mc) {
            if ("rotation" === rB) {
              const cB = sc ? Mc : Vc.Quaternion.RotationYawPitchRoll(Mc.y, Mc.x, Mc.z).normalize();
              nc.push(cB.KPc())
            }
            nc.push(Mc.KPc())
          }
        } else Pc === sV.d.ANIMATIONTYPE_QUATERNION ? nc.push(cB.value.normalize().KPc()) : Ic.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(cB, Bc, nc) {
        let Vc, Ic, rB = !1;
        if ("rotation" === Bc && !nc) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let uc = 0, sc = cB.length; uc < sc; ++uc)
          if (Ic = cB[uc], Ic.inTangent || Ic.outTangent)
            if (Vc) {
              if ("CUBICSPLINE" !== Vc) {
                Vc = "LINEAR", rB = !0;
                break
              }
            } else Vc = "CUBICSPLINE";
        else if (Vc) {
          if ("CUBICSPLINE" === Vc || Ic.interpolation && 1 === Ic.interpolation && "STEP" !== Vc) {
            Vc = "LINEAR", rB = !0;
            break
          }
        } else Vc = Ic.interpolation && 1 === Ic.interpolation ? "STEP" : "LINEAR";
        return Vc || (Vc = "LINEAR"), {
          interpolationType: Vc,
          shouldBakeAnimation: rB
        }
      }
      static _AddSplineTangent(cB, Bc, nc, Ic, rB, uc) {
        let sc;
        const Mc = cB === PV.INTANGENT ? rB.inTangent : rB.outTangent;
        if ("CUBICSPLINE" === Ic) {
          if ("rotation" === nc)
            if (Mc)
              if (uc) sc = Mc.KPc();
              else {
                const cB = Mc;
                sc = Vc.Quaternion.RotationYawPitchRoll(cB.y, cB.x, cB.z).KPc()
              }
          else sc = [0, 0, 0, 0];
          else sc = "weights" === nc ? Mc ? [Mc] : [0] : Mc ? Mc.KPc() : [0, 0, 0];
          Bc.push(sc)
        }
      }
      static _CalculateMinMaxKeyFrames(cB) {
        let Bc = 1 / 0,
          nc = -1 / 0;
        return cB.forEach((function(cB) {
          Bc = Math.min(Bc, cB.frame), nc = Math.max(nc, cB.frame)
        })), {
          min: Bc,
          max: nc
        }
      }
    }

    function fV(cB, Bc, nc, rB, uc, sc) {
      const Mc = {
          attributes: {},
          influence: cB.influence,
          name: cB.name
        },
        Pc = Bc.geometry;
      if (!Pc) return Ic.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Mc;
      const Oc = sc ? -1 : 1,
        Tc = Vc.KV.Zero();
      let fc, mB;
      if (cB.hasPositions) {
        const rB = cB.getPositions(),
          sc = Pc.getVerticesData(qB.g.PositionKind);
        if (sc) {
          const cB = new Float32Array(sc.length),
            Bc = [1 / 0, 1 / 0, 1 / 0],
            Ic = [-1 / 0, -1 / 0, -1 / 0];
          mB = sc.length / 3, fc = 0;
          for (let nc = fc; nc < mB; ++nc) {
            const uc = Vc.KV.FromArray(sc, 3 * nc);
            Vc.KV.FromArray(rB, 3 * nc).subtractToRef(uc, Tc), Tc.x *= Oc, Bc[0] = Math.min(Bc[0], Tc.x), Ic[0] = Math.max(Ic[0], Tc.x), Bc[1] = Math.min(Bc[1], Tc.y), Ic[1] = Math.max(Ic[1], Tc.y), Bc[2] = Math.min(Bc[2], Tc.z), Ic[2] = Math.max(Ic[2], Tc.z), cB[3 * nc] = Tc.x, cB[3 * nc + 1] = Tc.y, cB[3 * nc + 2] = Tc.z
          }
          const Pc = nc.createBufferView(cB, 12),
            qB = nc.createAccessor(Pc, "VEC3", 5126, rB.length / 3, 0, {
              min: Bc,
              max: Ic
            });
          uc.push(qB), Mc.attributes.POSITION = uc.length - 1
        } else Ic.Tools.Warn(`Morph target positions for mesh ${Bc.name} were not exported. Mesh does not have position vertex data`)
      }
      if (cB.hasNormals) {
        const rB = cB.getNormals(),
          sc = Pc.getVerticesData(qB.g.NormalKind);
        if (sc) {
          const cB = new Float32Array(sc.length);
          mB = sc.length / 3, fc = 0;
          for (let nc = fc; nc < mB; ++nc) {
            const Bc = Vc.KV.FromArray(sc, 3 * nc).normalize();
            Vc.KV.FromArray(rB, 3 * nc).normalize().subtractToRef(Bc, Tc), cB[3 * nc] = Tc.x * Oc, cB[3 * nc + 1] = Tc.y, cB[3 * nc + 2] = Tc.z
          }
          const Bc = nc.createBufferView(cB, 12),
            Ic = nc.createAccessor(Bc, "VEC3", 5126, rB.length / 3, 0);
          uc.push(Ic), Mc.attributes.NORMAL = uc.length - 1
        } else Ic.Tools.Warn(`Morph target normals for mesh ${Bc.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (cB.hasTangents) {
        const rB = cB.getTangents(),
          sc = Pc.getVerticesData(qB.g.TangentKind);
        if (sc) {
          mB = sc.length / 4;
          const cB = new Float32Array(3 * mB);
          fc = 0;
          for (let nc = fc; nc < mB; ++nc) {
            const Bc = Vc.KV.FromArray(sc, 4 * nc);
            Jn(Bc);
            const Ic = Vc.KV.FromArray(rB, 3 * nc);
            Jn(Ic), Ic.subtractToRef(Bc, Tc), cB[3 * nc] = Tc.x * Oc, cB[3 * nc + 1] = Tc.y, cB[3 * nc + 2] = Tc.z
          }
          const Bc = nc.createBufferView(cB, 12),
            Ic = nc.createAccessor(Bc, "VEC3", 5126, mB, 0);
          uc.push(Ic), Mc.attributes.TANGENT = uc.length - 1
        } else Ic.Tools.Warn(`Morph target tangents for mesh ${Bc.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (cB.hasColors) {
        const rB = cB.getColors(),
          sc = Pc.getVerticesData(qB.g.ColorKind),
          Oc = Pc.getVertexBuffer(qB.g.ColorKind);
        if (sc && Oc) {
          const cB = Oc.getSize();
          mB = sc.length / cB;
          const Bc = new Float32Array(mB * cB);
          fc = 0;
          for (let nc = fc; nc < mB; ++nc)
            if (3 === cB) {
              const Ic = Vc.KV.FromArray(sc, nc * cB);
              Vc.KV.FromArray(rB, nc * cB).subtractToRef(Ic, Tc), Bc[3 * nc] = Tc.x, Bc[3 * nc + 1] = Tc.y, Bc[3 * nc + 2] = Tc.z
            } else if (4 === cB) {
            const Ic = new Vc.Vector4,
              uc = Vc.Vector4.FromArray(sc, nc * cB);
            Vc.Vector4.FromArray(rB, nc * cB).subtractToRef(uc, Ic), Bc[4 * nc] = Ic.x, Bc[4 * nc + 1] = Ic.y, Bc[4 * nc + 2] = Ic.z, Bc[4 * nc + 3] = Ic.w
          } else Ic.Tools.Warn(`Unsupported number of components for color attribute: ${cB}`);
          const Pc = nc.createBufferView(Bc, 4 * cB),
            qB = nc.createAccessor(Pc, 3 === cB ? "VEC3" : "VEC4", 5126, mB, 0);
          uc.push(qB), Mc.attributes.COLOR_0 = uc.length - 1
        } else Ic.Tools.Warn(`Morph target colors for mesh ${Bc.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Mc
    }
    var mI = nc(39535);
    class eV {}
    eV.DEFAULT_COLOR = jB.e.White(), eV.DEFAULT_WIDTH_ATTENUATED = 1, eV.DEFAULT_WIDTH = .1;
    var tI = nc(39179);
    class SV {
      constructor(cB) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = cB
      }
      moveTo(cB, Bc) {
        this._currentPath = new tI.e(cB, Bc), this._tempPaths.push(this._currentPath)
      }
      lineTo(cB, Bc) {
        this._currentPath.addLineTo(cB, Bc)
      }
      quadraticCurveTo(cB, Bc, nc, Vc) {
        this._currentPath.addQuadraticCurveTo(cB, Bc, nc, Vc, this._resolution)
      }
      bezierCurveTo(cB, Bc, nc, Vc, Ic, rB) {
        this._currentPath.addBezierCurveTo(cB, Bc, nc, Vc, Ic, rB, this._resolution)
      }
      extractHoles() {
        for (const cB of this._tempPaths) cB.area() > 0 ? this._holes.push(cB) : this._paths.push(cB);
        if (!this._paths.length && this._holes.length) {
          const cB = this._holes;
          this._holes = this._paths, this._paths = cB
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

    function yI(cB, Bc, nc, Vc, Ic, rB) {
      const uc = rB.glyphs[cB] || rB.glyphs["?"];
      if (!uc) return null;
      const sc = new SV(Ic);
      if (uc.o) {
        const cB = uc.o.split(" ");
        for (let Ic = 0, rB = cB.length; Ic < rB;) {
          switch (cB[Ic++]) {
            case "m": {
              const rB = parseInt(cB[Ic++]) * Bc + nc,
                uc = parseInt(cB[Ic++]) * Bc + Vc;
              sc.moveTo(rB, uc);
              break
            }
            case "l": {
              const rB = parseInt(cB[Ic++]) * Bc + nc,
                uc = parseInt(cB[Ic++]) * Bc + Vc;
              sc.lineTo(rB, uc);
              break
            }
            case "q": {
              const rB = parseInt(cB[Ic++]) * Bc + nc,
                uc = parseInt(cB[Ic++]) * Bc + Vc,
                Mc = parseInt(cB[Ic++]) * Bc + nc,
                Pc = parseInt(cB[Ic++]) * Bc + Vc;
              sc.quadraticCurveTo(Mc, Pc, rB, uc);
              break
            }
            case "b": {
              const rB = parseInt(cB[Ic++]) * Bc + nc,
                uc = parseInt(cB[Ic++]) * Bc + Vc,
                Mc = parseInt(cB[Ic++]) * Bc + nc,
                Pc = parseInt(cB[Ic++]) * Bc + Vc,
                qB = parseInt(cB[Ic++]) * Bc + nc,
                Oc = parseInt(cB[Ic++]) * Bc + Vc;
              sc.bezierCurveTo(Mc, Pc, qB, Oc, rB, uc);
              break
            }
          }
        }
      }
      return sc.extractHoles(), {
        offsetX: uc.ha * Bc,
        shapePath: sc
      }
    }

    function zI(cB, Bc, nc, Vc) {
      const Ic = Array.from(cB),
        rB = Bc / Vc.resolution,
        uc = (Vc.boundingBox.yMax - Vc.boundingBox.yMin + Vc.underlineThickness) * rB,
        sc = [];
      let Mc = 0,
        Pc = 0;
      for (let qB = 0; qB < Ic.length; qB++) {
        const cB = Ic[qB];
        if ("\n" === cB) Mc = 0, Pc -= uc;
        else {
          const Bc = yI(cB, rB, Mc, Pc, nc, Vc);
          Bc && (Mc += Bc.offsetX, sc.push(Bc.shapePath))
        }
      }
      return sc
    }
    class pV {
      static ConvertPoints(cB, Bc) {
        if (cB.length && Array.isArray(cB) && "number" === typeof cB[0]) return [cB];
        if (cB.length && Array.isArray(cB[0]) && "number" === typeof cB[0][0]) return cB;
        if (cB.length && !Array.isArray(cB[0]) && cB[0] instanceof Wc.p) {
          const Bc = [];
          for (let nc = 0; nc < cB.length; nc++) {
            const Vc = cB[nc];
            Bc.push(Vc.x, Vc.y, Vc.z)
          }
          return [Bc]
        }
        if (cB.length > 0 && Array.isArray(cB[0]) && cB[0].length > 0 && cB[0][0] instanceof Wc.p) {
          const Bc = [],
            nc = cB;
          for (const cB of nc) Bc.push(cB.flatMap((cB => [cB.x, cB.y, cB.z])));
          return Bc
        }
        if (cB instanceof Float32Array) {
          if (Bc?.floatArrayStride) {
            const nc = [],
              Vc = 3 * Bc.floatArrayStride;
            for (let Bc = 0; Bc < cB.length; Bc += Vc) {
              const Ic = new Array(Vc);
              for (let nc = 0; nc < Vc; nc++) Ic[nc] = cB[Bc + nc];
              nc.push(Ic)
            }
            return nc
          }
          return [Array.from(cB)]
        }
        if (cB.length && cB[0] instanceof Float32Array) {
          const Bc = [];
          for (const nc of cB) Bc.push(Array.from(nc));
          return Bc
        }
        return []
      }
      static OmitZeroLengthPredicate(cB, Bc, nc) {
        const Vc = [];
        return Bc.subtract(cB).lengthSquared() > 0 && Vc.push([cB, Bc]), nc.subtract(Bc).lengthSquared() > 0 && Vc.push([Bc, nc]), cB.subtract(nc).lengthSquared() > 0 && Vc.push([nc, cB]), 0 === Vc.length ? null : Vc
      }
      static OmitDuplicatesPredicate(cB, Bc, nc, Vc) {
        const Ic = [];
        return pV._SearchInPoints(cB, Bc, Vc) || Ic.push([cB, Bc]), pV._SearchInPoints(Bc, nc, Vc) || Ic.push([Bc, nc]), pV._SearchInPoints(nc, cB, Vc) || Ic.push([nc, cB]), 0 === Ic.length ? null : Ic
      }
      static _SearchInPoints(cB, Bc, nc) {
        for (const Vc of nc)
          for (let nc = 0; nc < Vc.length; nc++)
            if (Vc[nc]?.equals(cB) && (Vc[nc + 1]?.equals(Bc) || Vc[nc - 1]?.equals(Bc))) return !0;
        return !1
      }
      static MeshesToLines(cB, Bc) {
        const nc = [];
        for (let Vc = 0; Vc < cB.length; Vc++) {
          const Ic = cB[Vc],
            rB = Ic.getVerticesData(wc.i.PositionKind),
            uc = Ic.Tfc();
          if (rB && uc)
            for (let cB = 0, sc = 0; cB < uc.length; cB++) {
              const Mc = 3 * uc[sc++],
                Pc = 3 * uc[sc++],
                qB = 3 * uc[sc++],
                Oc = new Wc.p(rB[Mc], rB[Mc + 1], rB[Mc + 2]),
                Tc = new Wc.p(rB[Pc], rB[Pc + 1], rB[Pc + 2]),
                fc = new Wc.p(rB[qB], rB[qB + 1], rB[qB + 2]);
              if (Bc) {
                const sc = Bc(Oc, Tc, fc, nc, cB, Mc, Ic, Vc, rB, uc);
                if (sc)
                  for (const cB of sc) nc.push(cB)
              } else nc.push([Oc, Tc], [Tc, fc], [fc, Oc])
            }
        }
        return nc
      }
      static ToVector3Array(cB) {
        if (Array.isArray(cB[0])) {
          const Bc = [],
            nc = cB;
          for (const cB of nc) {
            const nc = [];
            for (let Bc = 0; Bc < cB.length; Bc += 3) nc.push(new Wc.p(cB[Bc], cB[Bc + 1], cB[Bc + 2]));
            Bc.push(nc)
          }
          return Bc
        }
        const Bc = cB,
          nc = [];
        for (let Vc = 0; Vc < Bc.length; Vc += 3) nc.push(new Wc.p(Bc[Vc], Bc[Vc + 1], Bc[Vc + 2]));
        return nc
      }
      static ToNumberArray(cB) {
        return cB.flatMap((cB => [cB.x, cB.y, cB.z]))
      }
      static GetPointsCountInfo(cB) {
        const Bc = new Array(cB.length);
        let nc = 0;
        for (let Vc = cB.length; Vc--;) Bc[Vc] = cB[Vc].length / 3, nc += Bc[Vc];
        return {
          total: nc,
          counts: Bc
        }
      }
      static GetLineLength(cB) {
        if (0 === cB.length) return 0;
        let Bc;
        Bc = "number" === typeof cB[0] ? pV.ToVector3Array(cB) : cB;
        const nc = Wc.i.KV[0];
        let Vc = 0;
        for (let Ic = 0; Ic < Bc.length - 1; Ic++) {
          const cB = Bc[Ic];
          Vc += Bc[Ic + 1].subtractToRef(cB, nc).length()
        }
        return Vc
      }
      static GetLineLengthArray(cB, Bc) {
        const nc = Bc ? new Float32Array(Bc, 0, cB.length / 3) : new Float32Array(cB.length / 3);
        let Vc = 0;
        for (let Ic = 0, rB = cB.length / 3 - 1; Ic < rB; Ic++) {
          let Bc = cB[3 * Ic + 0],
            rB = cB[3 * Ic + 1],
            uc = cB[3 * Ic + 2];
          Bc -= cB[3 * Ic + 3], rB -= cB[3 * Ic + 4], uc -= cB[3 * Ic + 5];
          Vc += Math.sqrt(Bc * Bc + rB * rB + uc * uc), nc[Ic + 1] = Vc
        }
        return nc
      }
      static SegmentizeSegmentByCount(cB, Bc, nc) {
        const Vc = [],
          Ic = Bc.subtract(cB),
          rB = Wc.i.KV[0];
        rB.orc(nc);
        const uc = Wc.i.KV[1];
        Ic.divideToRef(rB, uc);
        let sc = cB.clone();
        Vc.push(sc);
        for (let Mc = 0; Mc < nc; Mc++) sc = sc.clone(), Vc.push(sc.addInPlace(uc));
        return Vc
      }
      static SegmentizeLineBySegmentLength(cB, Bc) {
        const nc = cB[0] instanceof Wc.p ? pV.GetLineSegments(cB) : "number" === typeof cB[0] ? pV.GetLineSegments(pV.ToVector3Array(cB)) : cB,
          Vc = [];
        for (const Ic of nc)
          if (Ic.length > Bc) {
            const cB = pV.SegmentizeSegmentByCount(Ic.point1, Ic.point2, Math.ceil(Ic.length / Bc));
            for (const Bc of cB) Vc.push(Bc)
          } else Vc.push(Ic.point1), Vc.push(Ic.point2);
        return Vc
      }
      static SegmentizeLineBySegmentCount(cB, Bc) {
        const nc = "number" === typeof cB[0] ? pV.ToVector3Array(cB) : cB,
          Vc = pV.GetLineLength(nc) / Bc;
        return pV.SegmentizeLineBySegmentLength(nc, Vc)
      }
      static GetLineSegments(cB) {
        const Bc = [];
        for (let nc = 0; nc < cB.length - 1; nc++) {
          const Vc = cB[nc],
            Ic = cB[nc + 1],
            rB = Ic.subtract(Vc).length();
          Bc.push({
            point1: Vc,
            point2: Ic,
            length: rB
          })
        }
        return Bc
      }
      static GetMinMaxSegmentLength(cB) {
        const Bc = pV.GetLineSegments(cB).sort((cB => cB.length));
        return {
          min: Bc[0].length,
          max: Bc[Bc.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ic = Bc * nc;
        let rB = 0,
          uc = 0;
        const sc = cB.length;
        for (let Pc = 0; Pc < sc; Pc++) {
          if (Ic <= rB + cB[Pc].length) {
            uc = Pc;
            break
          }
          rB += cB[Pc].length
        }
        const Mc = (Ic - rB) / cB[uc].length;
        return cB[uc].point2.subtractToRef(cB[uc].point1, Wc.i.KV[0]), Wc.i.KV[0].scaleToRef(Mc, Wc.i.KV[1]), Vc || Wc.i.KV[1].addInPlace(cB[uc].point1), Wc.i.KV[1].clone()
      }
      static GetCircleLinePoints(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Bc;
        const rB = [];
        for (let uc = 0; uc <= Bc; uc++) rB.push(new Wc.p(Math.cos(uc * Ic) * cB, Math.sin(uc * Ic) * Vc, nc));
        return rB
      }
      static GetBezierLinePoints(cB, Bc, nc, Vc) {
        return tI.c.CreateQuadraticBezier(cB, Bc, nc, Vc).getPoints().flatMap((cB => [cB.x, cB.y, cB.z]))
      }
      static GetArrowCap(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [cB.clone(), cB.add(Bc.multiplyByFloats(nc, nc, nc))],
          widths: [Vc, Ic, rB, uc]
        }
      }
      static GetPointsFromText(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          rB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const uc = [],
          sc = zI(cB, Bc, nc, Vc);
        for (const Mc of sc) {
          for (const cB of Mc.paths) {
            const Bc = [],
              nc = cB.getPoints();
            for (const cB of nc) Bc.push(cB.x, cB.y, Ic);
            uc.push(Bc)
          }
          if (rB)
            for (const cB of Mc.holes) {
              const Bc = [],
                nc = cB.getPoints();
              for (const cB of nc) Bc.push(cB.x, cB.y, Ic);
              uc.push(Bc)
            }
        }
        return uc
      }
      static Color3toRGBAUint8(cB) {
        const Bc = new Uint8Array(4 * cB.length);
        for (let nc = 0, Vc = 0; nc < cB.length; nc++) Bc[Vc++] = 255 * cB[nc].r, Bc[Vc++] = 255 * cB[nc].g, Bc[Vc++] = 255 * cB[nc].b, Bc[Vc++] = 255;
        return Bc
      }
      static CreateColorsTexture(cB, Bc, nc, Vc) {
        const Ic = Vc.RV().getCaps().maxTextureSize ?? 1,
          rB = Bc.length > Ic ? Ic : Bc.length,
          uc = Math.ceil(Bc.length / Ic);
        uc > 1 && (Bc = [...Bc, ...Array(rB * uc - Bc.length).fill(Bc[0])]);
        const sc = pV.Color3toRGBAUint8(Bc),
          Mc = new aB.c(sc, rB, uc, On.d.TEXTUREFORMAT_RGBA, Vc, !1, !0, nc);
        return Mc.name = cB, Mc
      }
      static PrepareEmptyColorsTexture(cB) {
        if (!eV.EmptyColorsTexture) {
          const Bc = new Uint8Array(4);
          eV.EmptyColorsTexture = new aB.c(Bc, 1, 1, On.d.TEXTUREFORMAT_RGBA, cB, !1, !1, aB.c.NEAREST_NEAREST), eV.EmptyColorsTexture.name = "grlEmptyColorsTexture", eV.EmptyColorsTexture.XBc.addOnce((() => {
            eV.EmptyColorsTexture = null
          }))
        }
        return eV.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        eV.EmptyColorsTexture?.dispose(), eV.EmptyColorsTexture = null
      }
      static BooleanToNumber(cB) {
        return cB ? 1 : 0
      }
    }
    class hV extends kB.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class aI extends Xc.c {
      isCompatible(cB) {
        return !0
      }
      constructor(cB, Bc, nc) {
        nc = nc || {
          color: eV.DEFAULT_COLOR
        };
        const Vc = new hV;
        Vc.GREASED_LINE_HAS_COLOR = !!nc.color && !nc.useColors, Vc.GREASED_LINE_SIZE_ATTENUATION = nc.sizeAttenuation ?? !1, Vc.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === nc.colorDistributionType, Vc.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Bc ?? cB.knc()).useRightHandedSystem, Vc.GREASED_LINE_CAMERA_FACING = nc.cameraFacing ?? !0, super(cB, aI.GREASED_LINE_MATERIAL_NAME, 200, Vc, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = nc?.forceGLSL || aI.ForceGLSL, this._scene = Bc ?? cB.knc(), this._engine = this._scene.RV(), this._cameraFacing = nc.cameraFacing ?? !0, this.visibility = nc.visibility ?? 1, this.useDash = nc.useDash ?? !1, this.dashRatio = nc.dashRatio ?? .5, this.dashOffset = nc.dashOffset ?? 0, this.width = nc.width ? nc.width : nc.sizeAttenuation ? eV.DEFAULT_WIDTH_ATTENUATED : eV.DEFAULT_WIDTH, this._sizeAttenuation = nc.sizeAttenuation ?? !1, this.colorMode = nc.colorMode ?? 0, this._color = nc.color ?? null, this.useColors = nc.useColors ?? !1, this._colorsDistributionType = nc.colorDistributionType ?? 0, this.colorsSampling = nc.colorsSampling ?? aB.c.NEAREST_NEAREST, this._colors = nc.colors ?? null, this.dashCount = nc.dashCount ?? 1, this.resolution = nc.resolution ?? new Wc.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), nc.colorsTexture ? this.colorsTexture = nc.colorsTexture : this._colors ? this.colorsTexture = pV.CreateColorsTexture(`${cB.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? eV.DEFAULT_COLOR, pV.PrepareEmptyColorsTexture(this._scene)), this._engine.XBc.add((() => {
          pV.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(cB) {
        cB.push("grl_offsets"), cB.push("grl_widths"), cB.push("grl_colorPointers"), cB.push("grl_counters"), this._cameraFacing ? (cB.push("grl_previousAndSide"), cB.push("grl_nextAndCounters")) : cB.push("grl_slopes")
      }
      getSamplers(cB) {
        cB.push("grl_colors")
      }
      getActiveTextures(cB) {
        this.colorsTexture && cB.push(this.colorsTexture)
      }
      getUniforms() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Bc = [{
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
        return this._cameraFacing && Bc.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === cB && Bc.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Bc,
          vertex: this._cameraFacing && this._isGLSL(cB) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(cB) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(cB) {
        if (this._cameraFacing) {
          cB.Buc("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || cB.Buc("viewProjection", this._scene.getTransformMatrix());
          const Bc = Wc.i.Vector4[0];
          Bc.x = this._aspect, Bc.y = this._resolution.x, Bc.z = this._resolution.y, Bc.w = this.width, cB.updateVector4("grl_aspect_resolution_lineWidth", Bc)
        }
        const Bc = Wc.i.Vector4[0];
        Bc.x = pV.BooleanToNumber(this.useDash), Bc.y = this._dashArray, Bc.z = this.dashOffset, Bc.w = this.dashRatio, cB.updateVector4("grl_dashOptions", Bc);
        const nc = Wc.i.Vector4[1];
        nc.x = this.colorMode, nc.y = this.visibility, nc.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, nc.w = pV.BooleanToNumber(this.useColors), cB.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", nc), this._color && cB.updateColor3("grl_singleColor", this._color);
        const Vc = this.colorsTexture ?? eV.EmptyColorsTexture;
        cB.setTexture("grl_colors", Vc), cB.updateFloat2("grl_textureSize", Vc?.getSize().width ?? 1, Vc?.getSize().height ?? 1)
      }
      prepareDefines(cB, Bc, nc) {
        cB.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, cB.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, cB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, cB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Bc.useRightHandedSystem, cB.GREASED_LINE_CAMERA_FACING = this._cameraFacing, cB.GREASED_LINE_USE_OFFSETS = !!nc.offsets
      }
      getClassName() {
        return aI.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Bc) ? function(cB, Bc) {
          if ("vertex" === cB) {
            const cB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Bc && (cB["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), cB
          }
          return "fragment" === cB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(cB, this._cameraFacing) : function(cB, Bc) {
          if ("vertex" === cB) {
            const cB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Bc && (cB["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), cB
          }
          return "fragment" === cB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(cB, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(cB) {
        this.setColors(cB)
      }
      setColors(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this._colors?.length ?? 0;
        if (this._colors = cB, null !== cB && 0 !== cB.length) {
          if (!Bc || nc)
            if (this.colorsTexture && Vc === cB.length && !nc) {
              const Bc = pV.Color3toRGBAUint8(cB);
              this.colorsTexture.update(Bc)
            } else this.colorsTexture?.dispose(), this.colorsTexture = pV.CreateColorsTexture(`${this._material.name}-colors-texture`, cB, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(cB) {
        this._dashCount = cB, this._dashArray = 1 / cB
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(cB) {
        this._sizeAttenuation = cB, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(cB) {
        this.setColor(cB)
      }
      setColor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== cB || null !== this._color && null === cB ? (this._color = cB, Bc || this.markAllDefinesAsDirty()) : this._color = cB
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(cB) {
        this._colorsDistributionType = cB, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(cB) {
        this._aspect = cB.x / cB.y, this._resolution = cB
      }
      serialize() {
        const cB = super.serialize(),
          Bc = {
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
        return this._colors && (Bc.colors = this._colors), this._color && (Bc.color = this._color), cB.greasedLineMaterialOptions = Bc, cB
      }
      parse(cB, Bc, nc) {
        super.parse(cB, Bc, nc);
        const Vc = cB.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Vc.color && this.setColor(Vc.color, !0), Vc.colorDistributionType && (this.colorsDistributionType = Vc.colorDistributionType), Vc.colors && (this.colors = Vc.colors), Vc.colorsSampling && (this.colorsSampling = Vc.colorsSampling), Vc.colorMode && (this.colorMode = Vc.colorMode), Vc.useColors && (this.useColors = Vc.useColors), Vc.visibility && (this.visibility = Vc.visibility), Vc.useDash && (this.useDash = Vc.useDash), Vc.dashCount && (this.dashCount = Vc.dashCount), Vc.dashRatio && (this.dashRatio = Vc.dashRatio), Vc.dashOffset && (this.dashOffset = Vc.dashOffset), Vc.width && (this.width = Vc.width), Vc.sizeAttenuation && (this.sizeAttenuation = Vc.sizeAttenuation), Vc.resolution && (this.resolution = Vc.resolution), this.colors ? this.colorsTexture = pV.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Bc) : pV.PrepareEmptyColorsTexture(Bc), this.markAllDefinesAsDirty()
      }
      copyTo(cB) {
        const Bc = cB;
        Bc.colorsTexture?.dispose(), this._colors && (Bc.colorsTexture = pV.CreateColorsTexture(`${Bc._material.name}-colors-texture`, this._colors, Bc.colorsSampling, this._scene)), Bc.setColor(this.color, !0), Bc.colorsDistributionType = this.colorsDistributionType, Bc.colorsSampling = this.colorsSampling, Bc.colorMode = this.colorMode, Bc.useColors = this.useColors, Bc.visibility = this.visibility, Bc.useDash = this.useDash, Bc.dashCount = this.dashCount, Bc.dashRatio = this.dashRatio, Bc.dashOffset = this.dashOffset, Bc.width = this.width, Bc.sizeAttenuation = this.sizeAttenuation, Bc.resolution = this.resolution, Bc.markAllDefinesAsDirty()
      }
      _isGLSL(cB) {
        return 0 === cB || this._forceGLSL
      }
    }
    aI.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", aI.ForceGLSL = !1;
    var lV = nc(38425),
      YV = nc(38430),
      LV = nc(37185),
      gI = nc(38485),
      UV = nc(37903);
    class bI extends gI.t {
      constructor(cB, Bc, Vc) {
        const Ic = Bc.RV(),
          rB = Ic.isWebGPU && !(Vc.forceGLSL || bI.ForceGLSL),
          uc = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Bc.useRightHandedSystem && uc.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const sc = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Vc.cameraFacing ? (uc.push("GREASED_LINE_CAMERA_FACING"), sc.push("grl_previousAndSide", "grl_nextAndCounters")) : (sc.push("grl_slopes"), sc.push("grl_counters"));
        const Mc = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (rB || Mc.push("world", "viewProjection", "view", "projection"), super(cB, Bc, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: rB ? ["Scene", "Mesh"] : void 0,
            attributes: sc,
            uniforms: Mc,
            samplers: rB ? [] : ["grlColors"],
            defines: uc,
            extraInitializationsAsync: async () => {
              rB ? await Promise.all([nc.e(309).then((() => nc(59774))), nc.e(368).then((() => nc(59782)))]) : await Promise.all([nc.e(302).then((() => nc(59786))), nc.e(369).then((() => nc(59789)))])
            },
            shaderLanguage: rB ? 1 : 0
          }), this._color = jB.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Vc = Vc || {
            color: eV.DEFAULT_COLOR
          }, this.visibility = Vc.visibility ?? 1, this.useDash = Vc.useDash ?? !1, this.dashRatio = Vc.dashRatio ?? .5, this.dashOffset = Vc.dashOffset ?? 0, this.dashCount = Vc.dashCount ?? 1, this.width = Vc.width ? Vc.width : Vc.sizeAttenuation && Vc.cameraFacing ? eV.DEFAULT_WIDTH_ATTENUATED : eV.DEFAULT_WIDTH, this.sizeAttenuation = Vc.sizeAttenuation ?? !1, this.color = Vc.color ?? jB.e.White(), this.useColors = Vc.useColors ?? !1, this.colorsDistributionType = Vc.colorDistributionType ?? 0, this.colorsSampling = Vc.colorsSampling ?? aB.c.NEAREST_NEAREST, this.colorMode = Vc.colorMode ?? 0, this._colors = Vc.colors ?? null, this._cameraFacing = Vc.cameraFacing ?? !0, this.resolution = Vc.resolution ?? new Wc.m(Ic.getRenderWidth(), Ic.getRenderHeight()), Vc.colorsTexture ? this.colorsTexture = Vc.colorsTexture : this._colors ? this.colorsTexture = pV.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Bc) : (this._color = this._color ?? eV.DEFAULT_COLOR, this.colorsTexture = pV.PrepareEmptyColorsTexture(Bc)), rB) {
          const cB = new UV.c;
          cB.setParameters(), cB.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", cB)
        }
        Ic.XBc.add((() => {
          pV.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== eV.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Wc.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(cB) {
        this.setColors(cB)
      }
      setColors(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = this._colors?.length ?? 0;
        if (this._colors = cB, null !== cB && 0 !== cB.length) {
          if (!Bc || nc)
            if (this._colorsTexture && Vc === cB.length && !nc) {
              const Bc = pV.Color3toRGBAUint8(cB);
              this._colorsTexture.update(Bc)
            } else this._colorsTexture && this._colorsTexture !== eV.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = pV.CreateColorsTexture(`${this.name}-colors-texture`, cB, this.colorsSampling, this.knc())
        } else {
          this._colorsTexture && this._colorsTexture !== eV.EmptyColorsTexture && this._colorsTexture.dispose();
          const cB = this.knc();
          cB && (this.colorsTexture = pV.PrepareEmptyColorsTexture(cB))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(cB) {
        this._colorsTexture = cB, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(cB) {
        this._width = cB, this.setFloat("grlWidth", cB)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(cB) {
        this._useColors = cB, this.setFloat("grlUseColors", pV.BooleanToNumber(cB))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(cB) {
        this._colorsSampling = cB
      }
      get visibility() {
        return this._visibility
      }
      set visibility(cB) {
        this._visibility = cB, this.setFloat("grlVisibility", cB)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(cB) {
        this._useDash = cB, this.setFloat("grlUseDash", pV.BooleanToNumber(cB))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(cB) {
        this._dashOffset = cB, this.setFloat("grlDashOffset", cB)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(cB) {
        this._dashRatio = cB, this.setFloat("grlDashRatio", cB)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(cB) {
        this._dashCount = cB, this._dashArray = 1 / cB, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(cB) {
        this._sizeAttenuation = cB, this.setFloat("grlSizeAttenuation", pV.BooleanToNumber(cB))
      }
      get color() {
        return this._color
      }
      set color(cB) {
        this.setColor(cB)
      }
      setColor(cB) {
        cB = cB ?? eV.DEFAULT_COLOR, this._color = cB, this.setColor3("grlColor", cB)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(cB) {
        this._colorsDistributionType = cB, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(cB) {
        this._colorMode = cB, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(cB) {
        this._resolution = cB, this.setVector2("grlResolution", cB), this.setFloat("grlAspect", cB.x / cB.y)
      }
      serialize() {
        const cB = super.serialize(),
          Bc = {
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
        return this._colors && (Bc.colors = this._colors), cB.greasedLineMaterialOptions = Bc, cB
      }
      parse(cB, Bc, nc) {
        const Vc = cB.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Vc.color && (this.color = Vc.color), Vc.colorDistributionType && (this.colorsDistributionType = Vc.colorDistributionType), Vc.colorsSampling && (this.colorsSampling = Vc.colorsSampling), Vc.colorMode && (this.colorMode = Vc.colorMode), Vc.useColors && (this.useColors = Vc.useColors), Vc.visibility && (this.visibility = Vc.visibility), Vc.useDash && (this.useDash = Vc.useDash), Vc.dashCount && (this.dashCount = Vc.dashCount), Vc.dashRatio && (this.dashRatio = Vc.dashRatio), Vc.dashOffset && (this.dashOffset = Vc.dashOffset), Vc.width && (this.width = Vc.width), Vc.sizeAttenuation && (this.sizeAttenuation = Vc.sizeAttenuation), Vc.resolution && (this.resolution = Vc.resolution), Vc.colors ? this.colorsTexture = pV.CreateColorsTexture(`${this.name}-colors-texture`, Vc.colors, this.colorsSampling, this.knc()) : this.colorsTexture = pV.PrepareEmptyColorsTexture(Bc), this._cameraFacing = Vc.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var ZV, QV, CV;
    bI.ForceGLSL = !1,
      function(cB) {
        cB[cB.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", cB[cB.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(ZV || (ZV = {})),
      function(cB) {
        cB[cB.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", cB[cB.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", cB[cB.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(QV || (QV = {})),
      function(cB) {
        cB[cB.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", cB[cB.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", cB[cB.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", cB[cB.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", cB[cB.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(CV || (CV = {}));
    class vI extends lV.b {
      constructor(cB, Bc, nc) {
        super(cB, Bc, null, null, !1, !1), this.name = cB, this._options = nc, this._lazy = !1, this._updatable = !1, this._engine = Bc.RV(), this._lazy = nc.lazy ?? !1, this._updatable = nc.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = nc.colorPointers ?? [], this._widths = nc.widths ?? new Array(nc.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(cB) {
        let Bc = 0;
        for (const Vc of this._points) Bc += Vc.length;
        const nc = Bc / 3 * 2 - this._widths.length;
        for (let Vc = 0; Vc < nc; Vc++) this._widths.push(cB)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.dV && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(cB, Bc) {
        for (const nc of cB) this._points.push(nc);
        this._lazy || this.setPoints(this._points, Bc)
      }
      dispose(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(cB, Bc)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(cB) {
        this._uvs = cB instanceof Float32Array ? cB : new Float32Array(cB), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(cB) {
        this.material instanceof bI && this.material.setDefine("GREASED_LINE_USE_OFFSETS", cB?.length > 0), this._offsets = cB, this._offsetsBuffer ? this._offsetsBuffer.update(cB) : this._createOffsetsBuffer(cB)
      }
      get widths() {
        return this._widths
      }
      set widths(cB) {
        this._widths = cB, this._lazy || this._widthsBuffer && this._widthsBuffer.update(cB)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(cB) {
        this._colorPointers = cB, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(cB)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof bI) return this.material;
        const cB = this.material?.pluginManager?.getPlugin(aI.GREASED_LINE_MATERIAL_NAME);
        return cB || void 0
      }
      get points() {
        const cB = [];
        return LV.b.DeepCopy(this._points, cB), cB
      }
      setPoints(cB, Bc) {
        this._points = pV.ConvertPoints(cB, Bc?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Bc?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Bc)
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
      serialize(cB) {
        super.serialize(cB), cB.type = this.getClassName(), cB.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new YV.b;
        return Bc.positions = this._vertexPositions, Bc.indices = this._indices, Bc.uvs = this._uvs, cB && (Bc.normals = [], YV.b.ComputeNormals(this._vertexPositions, this._indices, Bc.normals)), Bc.applyToMesh(this, this._options.updatable), Bc
      }
      _createOffsetsBuffer(cB) {
        const Bc = this._scene.RV(),
          nc = new wc.b(Bc, cB, this._updatable, 3);
        this.setVerticesBuffer(nc.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = nc
      }
    }
    class DV {
      constructor(cB, Bc) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = cB, this.wasAddedByNoopNode = Bc
      }
      getIndicesAccessor(cB, Bc, nc, Vc, Ic) {
        return this._indicesAccessorMap.get(cB)?.get(Bc)?.get(nc)?.get(Vc)?.get(Ic)
      }
      setIndicesAccessor(cB, Bc, nc, Vc, Ic, rB) {
        let uc = this._indicesAccessorMap.get(cB);
        uc || (uc = new Map, this._indicesAccessorMap.set(cB, uc));
        let sc = uc.get(Bc);
        sc || (sc = new Map, uc.set(Bc, sc));
        let Mc = sc.get(nc);
        Mc || (Mc = new Map, sc.set(nc, Mc));
        let Pc = Mc.get(Vc);
        Pc || (Pc = new Map, Mc.set(Vc, Pc)), Pc.set(Ic, rB)
      }
      pushExportedNode(cB) {
        this._exportedNodes.has(cB) || this._exportedNodes.add(cB)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(cB) {
        return this._vertexBufferViewMap.get(cB)
      }
      setVertexBufferView(cB, Bc) {
        this._vertexBufferViewMap.set(cB, Bc)
      }
      setRemappedBufferView(cB, Bc, nc) {
        this._remappedBufferView.set(cB, new Map), this._remappedBufferView.get(cB).set(Bc, nc)
      }
      getRemappedBufferView(cB, Bc) {
        return this._remappedBufferView.get(cB)?.get(Bc)
      }
      getVertexAccessor(cB, Bc, nc) {
        return this._vertexAccessorMap.get(cB)?.get(Bc)?.get(nc)
      }
      setVertexAccessor(cB, Bc, nc, Vc) {
        let Ic = this._vertexAccessorMap.get(cB);
        Ic || (Ic = new Map, this._vertexAccessorMap.set(cB, Ic));
        let rB = Ic.get(Bc);
        rB || (rB = new Map, Ic.set(Bc, rB)), rB.set(nc, Vc)
      }
      hasVertexColorAlpha(cB) {
        return this._vertexMapColorAlpha.get(cB) || !1
      }
      setHasVertexColorAlpha(cB, Bc) {
        return this._vertexMapColorAlpha.set(cB, Bc)
      }
      getMesh(cB) {
        return this._meshMap.get(cB)
      }
      setMesh(cB, Bc) {
        this._meshMap.set(cB, Bc)
      }
      bindMorphDataToMesh(cB, Bc) {
        const nc = this._meshMorphTargetMap.get(cB) || [];
        this._meshMorphTargetMap.set(cB, nc), -1 === nc.indexOf(Bc) && nc.push(Bc)
      }
      getMorphTargetsFromMesh(cB) {
        return this._meshMorphTargetMap.get(cB)
      }
    }
    class NV {
      _ApplyExtension(cB, Bc, nc, Vc) {
        if (nc >= Bc.length) return Promise.resolve(cB);
        const Ic = Vc(Bc[nc], cB);
        return Ic ? Ic.then((async cB => cB ? await this._ApplyExtension(cB, Bc, nc + 1, Vc) : null)) : this._ApplyExtension(cB, Bc, nc + 1, Vc)
      }
      _ApplyExtensions(cB, Bc) {
        const nc = [];
        for (const Vc of NV._ExtensionNames) nc.push(this._extensions[Vc]);
        return this._ApplyExtension(cB, nc, 0, Bc)
      }
      _extensionsPostExportNodeAsync(cB, Bc, nc, Vc, Ic) {
        return this._ApplyExtensions(Bc, ((Bc, rB) => Bc.postExportNodeAsync && Bc.postExportNodeAsync(cB, rB, nc, Vc, Ic, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(cB, Bc, nc) {
        return this._ApplyExtensions(Bc, ((Bc, Vc) => Bc.postExportMaterialAsync && Bc.postExportMaterialAsync(cB, Vc, nc)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        return await Promise.all(NV._ExtensionNames.map((async Ic => {
          const rB = this._extensions[Ic];
          if (rB.postExportMaterialAdditionalTexturesAsync) {
            const Ic = await rB.postExportMaterialAdditionalTexturesAsync(cB, Bc, nc);
            Vc.push(...Ic)
          }
        }))), Vc
      }
      _extensionsPostExportTextures(cB, Bc, nc) {
        for (const Vc of NV._ExtensionNames) {
          const Ic = this._extensions[Vc];
          Ic.postExportTexture && Ic.postExportTexture(cB, Bc, nc)
        }
      }
      _extensionsPostExportMeshPrimitive(cB) {
        for (const Bc of NV._ExtensionNames) {
          const nc = this._extensions[Bc];
          nc.postExportMeshPrimitive && nc.postExportMeshPrimitive(cB, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const cB of NV._ExtensionNames) {
          const Bc = this._extensions[cB];
          Bc.preGenerateBinaryAsync && await Bc.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(cB) {
        for (const Bc of NV._ExtensionNames) {
          const nc = this._extensions[Bc];
          nc.enabled && cB(nc)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((cB => {
          var Bc, nc, Vc;
          cB.wasUsed && ((Bc = this._glTF).extensionsUsed || (Bc.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(cB.name) && this._glTF.extensionsUsed.push(cB.name), cB.required && ((nc = this._glTF).extensionsRequired || (nc.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(cB.name) && this._glTF.extensionsRequired.push(cB.name)), (Vc = this._glTF).extensions || (Vc.extensions = {}), cB.onExporting && cB.onExporting())
        }))
      }
      _loadExtensions() {
        for (const cB of NV._ExtensionNames) {
          const Bc = NV._ExtensionFactories[cB](this);
          this._extensions[cB] = Bc
        }
      }
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec.d.LastCreatedScene,
          Bc = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${mB.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Qn(this), this._extensions = {}, this._bufferManager = new VV, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !cB) throw new Error("No scene available to export");
        this._babylonScene = cB, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: cB => cB?.vqc?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Bc
        }, this._loadExtensions()
      }
      dispose() {
        for (const cB in this._extensions) {
          this._extensions[cB].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        NV.UnregisterExtension(cB) && Ic.Tools.Warn(`Extension with the name ${cB} already exists`), NV._ExtensionFactories[cB] = Bc;
        const Vc = nc ?? 0;
        NV._ExtensionOrders[cB] = Vc;
        let rB = NV._ExtensionNames.length;
        for (let Ic = 0; Ic < NV._ExtensionNames.length; Ic++) {
          const cB = NV._ExtensionNames[Ic];
          if (Vc < NV._ExtensionOrders[cB]) {
            rB = Ic;
            break
          }
        }
        NV._ExtensionNames.splice(rB, 0, cB)
      }
      static UnregisterExtension(cB) {
        if (!NV._ExtensionFactories[cB]) return !1;
        delete NV._ExtensionFactories[cB], delete NV._ExtensionOrders[cB];
        const Bc = NV._ExtensionNames.indexOf(cB);
        return -1 !== Bc && NV._ExtensionNames.splice(Bc, 1), !0
      }
      _generateJSON(cB, Bc, nc) {
        const Vc = {
          byteLength: cB
        };
        return Vc.byteLength && (this._glTF.buffers = [Vc]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Ir = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Vc.uri = Bc + ".bin"), nc ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(cB) {
        const Bc = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const nc = this._generateJSON(Bc.byteLength, cB, !0),
          Vc = new Blob([Bc], {
            type: "application/octet-stream"
          }),
          Ic = cB + ".gltf",
          rB = cB + ".bin",
          uc = new Pc;
        if (uc.files[Ic] = nc, uc.files[rB] = Vc, this._imageData)
          for (const sc in this._imageData) uc.files[sc] = this._imageData[sc];
        return uc
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(cB) {
        const Bc = cB % 4;
        return 0 === Bc ? Bc : 4 - Bc
      }
      async generateGLBAsync(cB) {
        this._shouldUseGlb = !0;
        const Bc = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const nc = this._generateJSON(Bc.byteLength),
          Vc = cB + ".glb";
        let Ic, rB = nc.length;
        if ("undefined" !== typeof TextEncoder) {
          Ic = (new TextEncoder).encode(nc), rB = Ic.length
        }
        const uc = this._getPadding(rB),
          sc = this._getPadding(Bc.byteLength),
          Mc = 28 + rB + uc + Bc.byteLength + sc,
          qB = new BV(Mc);
        if (qB.writeUInt32(1179937895), qB.writeUInt32(2), qB.writeUInt32(Mc), qB.writeUInt32(rB + uc), qB.writeUInt32(1313821514), Ic) qB.writeTypedArray(Ic);
        else {
          const cB = "_".charCodeAt(0);
          for (let Bc = 0; Bc < rB; ++Bc) {
            const Vc = nc.charCodeAt(Bc);
            Vc != nc.codePointAt(Bc) ? qB.writeUInt8(cB) : qB.writeUInt8(Vc)
          }
        }
        for (let Pc = 0; Pc < uc; ++Pc) qB.writeUInt8(32);
        qB.writeUInt32(Bc.byteLength + sc), qB.writeUInt32(5130562), qB.writeTypedArray(Bc);
        for (let Pc = 0; Pc < sc; ++Pc) qB.writeUInt8(0);
        const Oc = new Pc;
        return Oc.files[Vc] = new Blob([qB.getOutputData()], {
          type: "application/octet-stream"
        }), Oc
      }
      _setNodeTransformation(cB, Bc, nc) {
        if (Bc.getPivotPoint().equalsWithEpsilon(onc, Dn.c) || Ic.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Bc.position.equalsWithEpsilon(onc, Dn.c)) {
          const Ic = Vc.TmpVectors.KV[0].qqc(Bc.position);
          nc && jV(Ic), cB.translation = Ic.KPc()
        }
        Bc.Su.equalsWithEpsilon(wn, Dn.c) || (cB.scale = Bc.Su.KPc());
        const rB = Bc.rotationQuaternion?.clone() || Vc.Quaternion.FromEulerAngles(Bc.rotation.x, Bc.rotation.y, Bc.rotation.z);
        rB.equalsWithEpsilon(Wn, Dn.c) || (nc && Rn(rB), cB.rotation = rB.normalize().KPc())
      }
      _setCameraTransformation(cB, Bc, nc) {
        const Ic = Vc.TmpVectors.KV[0],
          rB = Vc.TmpVectors.Quaternion[0],
          uc = Bc.getWorldMatrix();
        if (Bc.parent) {
          const cB = Bc.parent.getWorldMatrix().invertToRef(Vc.TmpVectors.Matrix[0]);
          uc.multiplyToRef(cB, Vc.TmpVectors.Matrix[1]).decompose(void 0, rB, Ic)
        } else uc.decompose(void 0, rB, Ic);
        Ic.equalsWithEpsilon(onc, Dn.c) || (nc && jV(Ic), cB.translation = Ic.KPc()), nc && Rn(rB), this._babylonScene.useRightHandedSystem || iV(rB), rB.equalsWithEpsilon(Wn, Dn.c) || (cB.rotation = rB.KPc())
      }
      _listAvailableCameras() {
        for (const cB of this._babylonScene.cameras) {
          const Bc = {
            type: cB.mode === IV.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (cB.name && (Bc.name = cB.name), "perspective" === Bc.type) Bc.perspective = {
            aspectRatio: cB.RV().getAspectRatio(cB),
            yfov: cB.fovMode === IV.e.FOVMODE_VERTICAL_FIXED ? cB.fov : cB.fov * cB.RV().getAspectRatio(cB),
            znear: cB.minZ,
            zfar: cB.maxZ
          };
          else if ("orthographic" === Bc.type) {
            const nc = cB.orthoLeft && cB.orthoRight ? .5 * (cB.orthoRight - cB.orthoLeft) : .5 * cB.RV().getRenderWidth(),
              Vc = cB.orthoBottom && cB.orthoTop ? .5 * (cB.orthoTop - cB.orthoBottom) : .5 * cB.RV().getRenderHeight();
            Bc.orthographic = {
              xmag: nc,
              ymag: Vc,
              znear: cB.minZ,
              zfar: cB.maxZ
            }
          }
          this._camerasMap.set(cB, Bc)
        }
      }
      _exportAndAssignCameras() {
        const cB = Array.from(this._camerasMap.values());
        for (const Bc of cB) {
          const cB = this._nodesCameraMap.get(Bc);
          if (void 0 !== cB) {
            this._cameras.push(Bc);
            for (const Bc of cB) Bc.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const cB of this._babylonScene.skeletons) {
          if (cB.bones.length <= 0) continue;
          const Bc = {
            joints: []
          };
          this._skinMap.set(cB, Bc)
        }
      }
      _exportAndAssignSkeletons(cB) {
        for (const nc of this._babylonScene.skeletons) {
          if (nc.bones.length <= 0) continue;
          const rB = this._skinMap.get(nc);
          if (void 0 == rB) continue;
          const uc = {};
          let sc = -1;
          for (let cB = 0; cB < nc.bones.length; ++cB) {
            const Bc = nc.bones[cB],
              Vc = Bc.getIndex() ?? cB; - 1 !== Vc && (uc[Vc] = Bc, Vc > sc && (sc = Vc))
          }
          const Mc = [];
          for (let nc = 0; nc <= sc; ++nc) {
            const sc = uc[nc],
              Pc = sc.getTransformNode(),
              qB = Pc ? this._nodeMap.get(Pc) : void 0;
            if (void 0 === qB) {
              Ic.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            rB.joints.push(qB);
            const Oc = sc.getAbsoluteInverseBindMatrix().clone();
            cB.has(Pc) && (Bc = Oc, Nn.invertToRef(Vc.TmpVectors.Matrix[0]).multiplyToRef(Bc, Bc).multiplyToRef(Nn, Bc)), Mc.push(Oc)
          }
          const Pc = this._nodesSkinMap.get(rB);
          if (rB.joints.length > 0 && void 0 !== Pc) {
            const cB = new Float32Array(16 * Mc.length);
            Mc.forEach(((Bc, nc) => {
              cB.set(Bc.m, 16 * nc)
            }));
            const Bc = this._bufferManager.createBufferView(cB);
            this._accessors.push(this._bufferManager.createAccessor(Bc, "MAT4", 5126, Mc.length)), rB.inverseBindMatrices = this._accessors.length - 1, this._skins.push(rB);
            const nc = this._skins.length - 1;
            for (const Vc of Pc) Vc.skin = nc
          }
        }
        var Bc
      }
      async _exportSceneAsync() {
        const cB = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Bc = this._options.metadataSelector(this._babylonScene.metadata);
          Bc && (cB.extras = Bc)
        }
        const Bc = new Array,
          nc = new Array,
          Vc = new Array,
          Ic = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let rB;
        if (Ic && !this._options.includeCoordinateSystemConversionNodes)
          for (const Pc of this._babylonScene.animationGroups)
            for (const cB of Pc.targetedAnimations) {
              const Bc = cB.target;
              Bc instanceof Oc.d && !Bc.parent && (rB ?? (rB = new Set)).add(Bc)
            }
        for (const Pc of this._babylonScene.rootNodes) {
          const cB = Pc.animations,
            uc = !!cB && cB.length > 0 || rB?.has(Pc);
          Ic && !this._options.includeCoordinateSystemConversionNodes && En(Pc, this._babylonScene.useRightHandedSystem) && !uc ? Vc.push(...Pc.getChildren()) : this._babylonScene.useRightHandedSystem ? Bc.push(Pc) : nc.push(Pc)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const uc = new DV(!0, !1);
        cB.nodes.push(...await this._exportNodesAsync(nc, uc));
        const sc = new DV(!1, !1);
        cB.nodes.push(...await this._exportNodesAsync(Bc, sc));
        const Mc = new DV(!1, !0);
        cB.nodes.push(...await this._exportNodesAsync(Vc, Mc)), cB.nodes.length && this._scenes.push(cB), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(uc.getNodesSet()), this._babylonScene.animationGroups.length && TV._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, uc.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(cB) {
        return this._nodeMap.get(cB)
      }
      _getAnimationIndex(cB) {
        return this._animationGroupMap.get(cB)
      }
      _getCameraIndex(cB) {
        const Bc = this._camerasMap.get(cB);
        if (!Bc) return;
        const nc = this._cameras.indexOf(Bc);
        return nc >= 0 ? nc : void 0
      }
      _getMaterialIndex(cB) {
        return this._materialMap.get(cB)
      }
      _getRootIndex(cB, Bc) {
        switch (cB) {
          case "nodes":
            return this._getNodeIndex(Bc);
          case "animations":
            return this._getAnimationIndex(Bc);
          case "cameras":
            return this._getCameraIndex(Bc);
          case "materials":
            return this._getMaterialIndex(Bc);
          case "meshes": {
            const cB = this._getNodeIndex(Bc);
            return void 0 === cB ? void 0 : this._nodes[cB]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Bc)?.index;
          case "images": {
            const cB = this._materialExporter.getTextureInfo(Bc)?.index;
            if (void 0 === cB) return;
            const nc = this._textures[cB];
            for (const Bc of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const cB = nc?.extensions?.[Bc]?.source;
              if ("number" === typeof cB) return cB
            }
            return nc?.source
          }
          case "samplers": {
            const cB = this._materialExporter.getTextureInfo(Bc)?.index;
            return void 0 === cB ? void 0 : this._textures[cB]?.sampler
          }
          case "skins": {
            const cB = this._skinMap.get(Bc),
              nc = cB ? this._skins.indexOf(cB) : -1;
            return nc >= 0 ? nc : void 0
          }
          case "scenes":
            return Bc === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(cB, Bc, nc) {
        const Vc = this._nodes[cB];
        if (!Vc) throw new Error(`Cannot write ${Bc}: glTF node ${cB} does not exist.`);
        Vc.extensions || (Vc.extensions = {}), Vc.extensions[Bc] = nc
      }
      _shouldExportNode(cB) {
        let Bc = this._shouldExportNodeMap.get(cB);
        return void 0 === Bc && (Bc = this._options.shouldExportNode(cB), this._shouldExportNodeMap.set(cB, Bc)), Bc
      }
      async _exportNodesAsync(cB, Bc) {
        const nc = new Array;
        this._exportBuffers(cB, Bc);
        for (const Vc of cB) await this._exportNodeAsync(Vc, nc, Bc);
        return nc
      }
      _collectBuffers(cB, Bc, nc, Vc, Ic) {
        if (this._shouldExportNode(cB) && cB instanceof Tc.d && cB.geometry) {
          const rB = cB.geometry.getVertexBuffers();
          if (rB)
            for (const Vc in rB) {
              if (!Fn(Vc)) continue;
              const uc = rB[Vc];
              Ic.setHasVertexColorAlpha(uc, cB.hasVertexAlpha);
              const sc = uc._buffer,
                Mc = Bc.get(sc) || [];
              Bc.set(sc, Mc), -1 === Mc.indexOf(uc) && Mc.push(uc);
              const Pc = nc.get(uc) || [];
              nc.set(uc, Pc), -1 === Pc.indexOf(cB) && Pc.push(cB)
            }
          const uc = cB.morphTargetManager;
          if (uc)
            for (let Bc = 0; Bc < uc.numTargets; Bc++) {
              const nc = uc.getTarget(Bc),
                Ic = Vc.get(nc) || [];
              Vc.set(nc, Ic), -1 === Ic.indexOf(cB) && Ic.push(cB)
            }
        }
        for (const rB of cB.getChildren()) this._collectBuffers(rB, Bc, nc, Vc, Ic)
      }
      _exportBuffers(cB, Bc) {
        const nc = new Map,
          Vc = new Map,
          Ic = new Map;
        for (const sc of cB) this._collectBuffers(sc, nc, Vc, Ic, Bc);
        const rB = Array.from(nc.keys());
        for (const sc of rB) {
          const cB = sc.getData();
          if (!cB) throw new Error("Buffer data is not available");
          const Ic = nc.get(sc);
          if (!Ic) continue;
          const rB = Ic[0].byteStride;
          if (Ic.some((cB => cB.byteStride !== rB))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const uc = dn(cB).slice();
          for (const Bc of Ic) {
            const cB = Vc.get(Bc),
              {
                byteOffset: nc,
                byteStride: Ic,
                componentCount: rB,
                type: sc,
                count: Mc,
                normalized: Pc,
                kind: Oc
              } = Xn(Bc, cB);
            switch (Oc) {
              case qB.g.NormalKind:
              case qB.g.TangentKind:
                (0, Cn.j)(uc, nc, Ic, rB, sc, Mc, Pc, (cB => {
                  const Bc = Math.sqrt(cB[0] * cB[0] + cB[1] * cB[1] + cB[2] * cB[2]);
                  if (Bc > 0) {
                    const nc = 1 / Bc;
                    cB[0] *= nc, cB[1] *= nc, cB[2] *= nc
                  }
                }));
                break;
              case qB.g.ColorKind: {
                const Bc = cB.filter((cB => cB.material instanceof uV.StandardMaterial || null == cB.material)).length;
                if (0 == Bc) break;
                if (Bc != cB.length) {
                  Uc.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                sc == qB.g.UNSIGNED_BYTE && Uc.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Vc = new tB.Color3,
                  Oc = new tB.c,
                  Tc = this._babylonScene.RV().useExactSrgbConversions;
                (0, Cn.j)(uc, nc, Ic, rB, sc, Mc, Pc, (cB => {
                  3 === cB.length ? (Vc.QMc(cB, 0), Vc.toLinearSpaceToRef(Vc, Tc), Vc.toArray(cB, 0)) : (Oc.QMc(cB, 0), Oc.toLinearSpaceToRef(Oc, Tc), Oc.toArray(cB, 0))
                }))
              }
            }
          }
          if (Bc.convertToRightHanded) {
            for (const cB of Ic) {
              const Bc = Vc.get(cB),
                {
                  byteOffset: nc,
                  byteStride: Ic,
                  componentCount: rB,
                  type: sc,
                  count: Mc,
                  normalized: Pc,
                  kind: Oc
                } = Xn(cB, Bc);
              switch (Oc) {
                case qB.g.PositionKind:
                case qB.g.NormalKind:
                case qB.g.TangentKind:
                  (0, Cn.j)(uc, nc, Ic, rB, sc, Mc, Pc, (cB => {
                    cB[0] = -cB[0]
                  }))
              }
            }
            Bc.convertedToRightHandedBuffers.set(sc, uc)
          }
          const Mc = this._bufferManager.createBufferView(uc, rB);
          Bc.setVertexBufferView(sc, Mc);
          const Pc = new Map;
          for (const Bc of Ic) {
            const cB = Vc.get(Bc),
              {
                kind: nc,
                totalVertices: Ic
              } = Xn(Bc, cB);
            switch (nc) {
              case qB.g.MatricesIndicesKind:
              case qB.g.MatricesIndicesExtraKind:
                if (Bc.type == qB.g.FLOAT) {
                  const cB = Bc.getFloatData(Ic);
                  null !== cB && Pc.set(Bc, cB)
                }
            }
          }
          0 !== Pc.size && Uc.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Oc = Array.from(Pc.keys());
          for (const nc of Oc) {
            const cB = Pc.get(nc);
            if (!cB) continue;
            const Vc = cB.some((cB => cB >= 256)),
              Ic = new(Vc ? Uint16Array : Uint8Array)(cB.length);
            for (let Bc = 0; Bc < cB.length; Bc++) Ic[Bc] = cB[Bc];
            const rB = this._bufferManager.createBufferView(Ic, 4 * (Vc ? 2 : 1));
            Bc.setRemappedBufferView(sc, nc, rB)
          }
        }
        const uc = Array.from(Ic.keys());
        for (const sc of uc) {
          const cB = Ic.get(sc);
          if (!cB) continue;
          const nc = fV(sc, cB[0], this._bufferManager, this._bufferViews, this._accessors, Bc.convertToRightHanded);
          for (const Vc of cB) Bc.bindMorphDataToMesh(Vc, nc)
        }
      }
      async _exportNodeAsync(cB, Bc, nc) {
        let Vc = this._nodeMap.get(cB);
        if (void 0 !== Vc) return void(Bc.includes(Vc) || Bc.push(Vc));
        const Ic = await this._createNodeAsync(cB, nc);
        if (Ic) {
          Vc = this._nodes.length, this._nodes.push(Ic), this._nodeMap.set(cB, Vc), nc.pushExportedNode(cB), Bc.push(Vc);
          const rB = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            uc = [];
          this._babylonScene.animationGroups.length || (TV._CreateMorphTargetAnimationFromMorphTargetAnimations(cB, rB, uc, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, nc.convertToRightHanded, this._options.shouldExportAnimation), cB.animations.length && TV._CreateNodeAnimationFromNodeAnimations(cB, rB, uc, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, nc.convertToRightHanded, this._options.shouldExportAnimation)), rB.channels.length && rB.samplers.length && this._animations.push(rB), uc.forEach((cB => {
            cB.channels.length && cB.samplers.length && this._animations.push(cB)
          }))
        }
        const rB = Ic ? [] : Bc;
        for (const uc of cB.getChildren()) await this._exportNodeAsync(uc, rB, nc);
        Ic && rB.length && (Ic.children = rB)
      }
      async _createNodeAsync(cB, Bc) {
        if (!this._shouldExportNode(cB)) return null;
        const nc = {};
        if (cB.name && (nc.name = cB.name), cB.metadata) {
          const Bc = this._options.metadataSelector(cB.metadata);
          Bc && (nc.extras = Bc)
        }
        if (cB instanceof Oc.d && (this._setNodeTransformation(nc, cB, Bc.convertToRightHanded), cB instanceof Tc.d)) {
          const Vc = cB instanceof fc.c ? cB.wqc : cB;
          if (Vc.rD && Vc.rD.length > 0 && (nc.mesh = await this._exportMeshAsync(Vc, Bc)), cB.skeleton) {
            const Bc = this._skinMap.get(cB.skeleton);
            void 0 !== Bc && (void 0 === this._nodesSkinMap.get(Bc) && this._nodesSkinMap.set(Bc, []), this._nodesSkinMap.get(Bc)?.push(nc))
          }
        }
        if (cB instanceof vV.h) {
          const Vc = this._camerasMap.get(cB);
          if (Vc) {
            void 0 === this._nodesCameraMap.get(Vc) && this._nodesCameraMap.set(Vc, []), this._setCameraTransformation(nc, cB, Bc.convertToRightHanded);
            const Ic = cB.parent;
            if (null !== Ic && xV(cB, Ic)) {
              const cB = this._nodeMap.get(Ic);
              if (void 0 !== cB) {
                const Bc = this._nodes[cB];
                return Kn(nc, Bc), this._nodesCameraMap.get(Vc)?.push(Bc), null
              }
            }
            this._nodesCameraMap.get(Vc)?.push(nc)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", nc, cB, this._nodeMap, Bc.convertToRightHanded) ? nc : (Uc.c.Warn(`Not exporting node ${cB.name}`), null)
      }
      _exportIndices(cB, Bc, nc, Vc, Ic, uc, sc, Mc, Pc) {
        let qB = null;
        Pc.mode = function(cB) {
          switch (cB) {
            case rB.c.TriangleFillMode:
              return 4;
            case rB.c.TriangleStripDrawMode:
              return 5;
            case rB.c.TriangleFanDrawMode:
              return 6;
            case rB.c.PointListDrawMode:
            case rB.c.PointFillMode:
              return 0;
            case rB.c.LineLoopDrawMode:
              return 2;
            case rB.c.LineListDrawMode:
              return 1;
            case rB.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${cB}`)
        }(uc);
        const Oc = sc !== rB.c.CounterClockWiseSideOrientation && function(cB) {
          switch (cB) {
            case rB.c.TriangleFillMode:
            case rB.c.TriangleStripDrawMode:
            case rB.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(uc);
        if (Oc) {
          if (uc === rB.c.TriangleStripDrawMode || uc === rB.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const sc = Bc ? new Uint32Array(Vc) : new Uint16Array(Vc);
          if (cB)
            for (let Bc = 0; Bc + 2 < Vc; Bc += 3) sc[Bc] = cB[nc + Bc] + Ic, sc[Bc + 1] = cB[nc + Bc + 2] + Ic, sc[Bc + 2] = cB[nc + Bc + 1] + Ic;
          else
            for (let cB = 0; cB + 2 < Vc; cB += 3) sc[cB] = cB, sc[cB + 1] = cB + 2, sc[cB + 2] = cB + 1;
          qB = sc
        } else if (cB && 0 !== Ic) {
          const rB = Bc ? new Uint32Array(Vc) : new Uint16Array(Vc);
          for (let Bc = 0; Bc < Vc; Bc++) rB[Bc] = cB[nc + Bc] + Ic;
          qB = rB
        } else cB && (qB = function(cB, Bc, nc, Vc) {
          let Ic = cB;
          return 0 === Bc && nc === cB.length || (Ic = Array.isArray(cB) ? cB.slice(Bc, Bc + nc) : cB.subarray(Bc, Bc + nc)), Ic instanceof Int32Array ? new Uint32Array(Ic.buffer, Ic.byteOffset, Ic.length) : Array.isArray(Ic) ? Vc ? new Uint32Array(Ic) : new Uint16Array(Ic) : Ic
        }(cB, nc, Vc, Bc));
        if (qB) {
          let rB = Mc.getIndicesAccessor(cB, nc, Vc, Ic, Oc);
          if (void 0 === rB) {
            const uc = this._bufferManager.createBufferView(qB),
              sc = Bc ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(uc, "SCALAR", sc, Vc, 0)), rB = this._accessors.length - 1, Mc.setIndicesAccessor(cB, nc, Vc, Ic, Oc, rB)
          }
          Pc.indices = rB
        }
      }
      _exportVertexBuffer(cB, Bc, nc, Vc, Ic, rB) {
        const uc = cB.getKind();
        if (!Fn(uc)) return;
        if (uc.startsWith("uv") && !this._options.exportUnusedUVs && (!Bc || !this._materialNeedsUVsSet.has(Bc))) return;
        let sc = Ic.getVertexAccessor(cB, nc, Vc);
        if (void 0 === sc) {
          const Bc = Ic.convertedToRightHandedBuffers.get(cB._buffer) || cB._buffer.getData(),
            rB = uc === qB.g.PositionKind ? function(cB, Bc, nc, Vc) {
              const {
                byteOffset: Ic,
                byteStride: rB,
                type: uc,
                normalized: sc
              } = Bc, Mc = Bc.getSize(), Pc = new Array(Mc).fill(1 / 0), qB = new Array(Mc).fill(-1 / 0);
              return (0, Cn.j)(cB, Ic + nc * rB, rB, Mc, uc, Vc * Mc, sc, (cB => {
                for (let Bc = 0; Bc < Mc; Bc++) Pc[Bc] = Math.min(Pc[Bc], cB[Bc]), qB[Bc] = Math.max(qB[Bc], cB[Bc])
              })), {
                min: Pc,
                max: qB
              }
            }(Bc, cB, nc, Vc) : void 0,
            Mc = (uc === qB.g.MatricesIndicesKind || uc === qB.g.MatricesIndicesExtraKind) && cB.type === qB.g.FLOAT,
            Pc = Mc ? qB.g.UNSIGNED_BYTE : cB.type,
            Oc = Mc ? void 0 : cB.normalized,
            Tc = Mc ? Ic.getRemappedBufferView(cB._buffer, cB) : Ic.getVertexBufferView(cB._buffer),
            fc = cB.byteOffset + nc * cB.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Tc, function(cB, Bc) {
            if (cB == qB.g.ColorKind) return Bc ? "VEC4" : "VEC3";
            switch (cB) {
              case qB.g.PositionKind:
              case qB.g.NormalKind:
                return "VEC3";
              case qB.g.TangentKind:
              case qB.g.MatricesIndicesKind:
              case qB.g.MatricesIndicesExtraKind:
              case qB.g.MatricesWeightsKind:
              case qB.g.MatricesWeightsExtraKind:
                return "VEC4";
              case qB.g.UVKind:
              case qB.g.UV2Kind:
              case qB.g.UV3Kind:
              case qB.g.UV4Kind:
              case qB.g.UV5Kind:
              case qB.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${cB}`)
          }(uc, Ic.hasVertexColorAlpha(cB)), Pc, Vc, fc, rB, Oc)), sc = this._accessors.length - 1, Ic.setVertexAccessor(cB, nc, Vc, sc)
        }
        rB.attributes[function(cB) {
          switch (cB) {
            case qB.g.PositionKind:
              return "POSITION";
            case qB.g.NormalKind:
              return "NORMAL";
            case qB.g.TangentKind:
              return "TANGENT";
            case qB.g.ColorKind:
              return "COLOR_0";
            case qB.g.UVKind:
              return "TEXCOORD_0";
            case qB.g.UV2Kind:
              return "TEXCOORD_1";
            case qB.g.UV3Kind:
              return "TEXCOORD_2";
            case qB.g.UV4Kind:
              return "TEXCOORD_3";
            case qB.g.UV5Kind:
              return "TEXCOORD_4";
            case qB.g.UV6Kind:
              return "TEXCOORD_5";
            case qB.g.MatricesIndicesKind:
              return "JOINTS_0";
            case qB.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case qB.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case qB.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${cB}`)
        }(uc)] = sc
      }
      async _exportMaterialAsync(cB, Bc, nc, Vc) {
        let Ic = this._materialMap.get(cB);
        if (void 0 === Ic) {
          const Vc = Bc && Object.keys(Bc).some((cB => cB.startsWith("uv")));
          if ((cB = cB instanceof rI.d ? cB.msc[nc.materialIndex] : cB) instanceof an) Ic = await this._materialExporter.exportPBRMaterialAsync(cB, Vc);
          else if (cB instanceof uV.StandardMaterial) Ic = await this._materialExporter.exportStandardMaterialAsync(cB, Vc);
          else {
            if (!(cB instanceof GB)) return void Uc.c.Warn(`Unsupported material '${cB.name}' with type ${cB.getClassName()}`);
            Ic = await this._materialExporter.exportOpenPBRMaterialAsync(cB, Vc)
          }
          this._materialMap.set(cB, Ic)
        }
        Vc.material = Ic
      }
      async _exportMeshAsync(cB, Bc) {
        let nc = Bc.getMesh(cB);
        if (void 0 !== nc) return nc;
        const Vc = {
          primitives: []
        };
        nc = this._meshes.length, this._meshes.push(Vc), Bc.setMesh(cB, nc);
        const Ic = cB.isUnIndexed ? null : cB.Tfc(),
          uc = cB.geometry?.getVertexBuffers(),
          sc = Bc.getMorphTargetsFromMesh(cB),
          Mc = cB instanceof mI.c,
          Pc = cB instanceof vI,
          qB = cB.rD;
        if (uc && qB && qB.length > 0)
          for (const Oc of qB) {
            const nc = {
                attributes: {}
              },
              qB = Oc.AV() || this._babylonScene.defaultMaterial;
            if (Pc) {
              const Bc = {
                  name: qB.name
                },
                Vc = cB,
                Ic = tB.Color3.White(),
                rB = Vc.material?.alpha ?? 1,
                uc = Vc.greasedLineMaterial?.color ?? Ic;
              (!uc.equalsWithEpsilon(Ic, Dn.c) || rB < 1) && (Bc.pbrMetallicRoughness = {
                baseColorFactor: [...uc.KPc(), rB]
              }), this._materials.push(Bc), nc.material = this._materials.length - 1
            } else if (Mc) {
              const Bc = {
                  name: qB.name
                },
                Vc = cB;
              (!Vc.color.equalsWithEpsilon(tB.Color3.White(), Dn.c) || Vc.alpha < 1) && (Bc.pbrMetallicRoughness = {
                baseColorFactor: [...Vc.color.KPc(), Vc.alpha]
              }), this._materials.push(Bc), nc.material = this._materials.length - 1
            } else await this._exportMaterialAsync(qB, uc, Oc, nc);
            const Tc = Mc || Pc ? rB.c.LineListDrawMode : cB.overrideRenderingFillMode ?? qB.fillMode;
            let fc = qB._getEffectiveOrientation(cB);
            Bc.wasAddedByNoopNode && !cB.knc().useRightHandedSystem && (fc = fc === rB.c.ClockWiseSideOrientation ? rB.c.CounterClockWiseSideOrientation : rB.c.ClockWiseSideOrientation), this._exportIndices(Ic, Ic ? (0, Cn.d)(Ic, Oc.indexCount, Oc.indexStart, Oc.verticesStart) : Oc.verticesCount > 65535, Ic ? Oc.indexStart : Oc.verticesStart, Ic ? Oc.indexCount : Oc.verticesCount, -Oc.verticesStart, Tc, fc, Bc, nc);
            for (const cB of Object.values(uc)) this._exportVertexBuffer(cB, qB, Oc.verticesStart, Oc.verticesCount, Bc, nc);
            if (sc) {
              nc.targets = [];
              for (const cB of sc) nc.targets.push(cB.attributes)
            }
            Vc.primitives.push(nc), this._extensionsPostExportMeshPrimitive(nc)
          }
        if (sc) {
          Vc.weights = [], Vc.extras || (Vc.extras = {}), Vc.extras.targetNames = [];
          for (const cB of sc) Vc.weights.push(cB.influence), Vc.extras.targetNames.push(cB.name)
        }
        return nc
      }
    }
    NV._ExtensionNames = new Array, NV._ExtensionFactories = {}, NV._ExtensionOrders = {};
    class EV {
      static async GLTFAsync(cB, Bc, nc) {
        nc && nc.exportWithoutWaitingForScene || await cB.whenReadyAsync();
        const Vc = new NV(cB, nc),
          Ic = await Vc.generateGLTFAsync(Bc.replace(/\.[^/.]+$/, ""));
        return Vc.dispose(), Ic
      }
      static async GLBAsync(cB, Bc, nc) {
        nc && nc.exportWithoutWaitingForScene || await cB.whenReadyAsync();
        const Vc = new NV(cB, nc),
          Ic = await Vc.generateGLBAsync(Bc.replace(/\.[^/.]+$/, ""));
        return Vc.dispose(), Ic
      }
    }
    const oV = "EXT_mesh_gpu_instancing";

    function WV(cB, Bc) {
      const nc = new Float32Array(3 * Bc);
      for (let Vc = 0; Vc < Bc; Vc++) nc[3 * Vc + 0] = cB[4 * Vc + 0], nc[3 * Vc + 1] = cB[4 * Vc + 1], nc[3 * Vc + 2] = cB[4 * Vc + 2];
      return nc
    }
    class wV {
      constructor(cB) {
        this.name = oV, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(cB, Bc, nc, Vc, Ic, rB) {
        return await new Promise((cB => {
          if (Bc && nc instanceof lV.b && nc.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const cB = Wc.p.Zero(),
              Vc = Wc.f.Identity(),
              uc = Wc.p.One(),
              sc = nc.thinInstanceGetWorldMatrices(),
              Mc = Wc.i.KV[2],
              Pc = Wc.i.Quaternion[1],
              qB = Wc.i.KV[3];
            let Oc = !1,
              Tc = !1,
              fc = !1;
            const mB = new Float32Array(3 * nc.Jrc),
              ec = new Float32Array(4 * nc.Jrc),
              tB = new Float32Array(3 * nc.Jrc);
            let Sc = 0;
            for (const Bc of sc) Bc.decompose(qB, Pc, Mc), Ic && (jV(Mc), Rn(Pc)), mB.set(Mc.KPc(), 3 * Sc), ec.set(Pc.normalize().KPc(), 4 * Sc), tB.set(qB.KPc(), 3 * Sc), Oc = Oc || !Mc.equalsWithEpsilon(cB), Tc = Tc || !Pc.equalsWithEpsilon(Vc), fc = fc || !qB.equalsWithEpsilon(uc), Sc++;
            const yB = {
              attributes: {}
            };
            Oc && (yB.attributes.TRANSLATION = this._buildAccessor(mB, "VEC3", nc.Jrc, rB)), Tc && (yB.attributes.ROTATION = this._buildAccessor(ec, "VEC4", nc.Jrc, rB)), fc && (yB.attributes.SCALE = this._buildAccessor(tB, "VEC3", nc.Jrc, rB));
            let zB = nc._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (zB) {
              const cB = nc.Jrc,
                Bc = "VEC3";
              nc.hasVertexAlpha && zB.length === 4 * cB ? (this._instanceColorWarned || (Uc.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), zB = WV(zB, cB)) : zB.length === 4 * cB && (zB = WV(zB, cB)), zB.length === 3 * cB && (yB.attributes._COLOR_0 = this._buildAccessor(zB, Bc, cB, rB))
            }
            Bc.extensions = Bc.extensions || {}, Bc.extensions[oV] = yB
          }
          cB(Bc)
        }))
      }
      _buildAccessor(cB, Bc, nc, Vc) {
        const Ic = Vc.createBufferView(cB),
          rB = Vc.createAccessor(Ic, Bc, 5126, nc);
        return this._exporter._accessors.push(rB), this._exporter._accessors.length - 1
      }
    }
    let kI = !1;

    function XV() {
      kI || (kI = !0, NV.RegisterExtension(oV, (cB => new wV(cB))))
    }
    nc(38497);
    XV();
    var HV = nc(39789);

    function FV(cB, Bc, nc, Vc) {
      const Ic = cB;
      let rB = null,
        uc = null,
        sc = null,
        Mc = null;
      const Pc = {},
        qB = Bc.find((cB => "POSITION" === cB.dracoName));
      if (!qB) throw new Error("Draco: Missing position attribute for encoding.");
      if (!nc) {
        const cB = qB.data.length / qB.size;
        nc = new(cB > 65535 ? Uint32Array : Uint16Array)(cB);
        for (let Bc = 0; Bc < cB; Bc++) nc[Bc] = Bc
      }
      try {
        rB = new Ic.Encoder, uc = new Ic.MeshBuilder, sc = new Ic.Mesh, uc.AddFacesToMesh(sc, nc.length / 3, nc);
        const cB = new Map([
          [Float32Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddFloatAttribute(Bc, nc, Vc, Ic, rB)],
          [Uint32Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddUInt32Attribute(Bc, nc, Vc, Ic, rB)],
          [Uint16Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddUInt16Attribute(Bc, nc, Vc, Ic, rB)],
          [Uint8Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddUInt8Attribute(Bc, nc, Vc, Ic, rB)],
          [Int32Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddInt32Attribute(Bc, nc, Vc, Ic, rB)],
          [Int16Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddInt16Attribute(Bc, nc, Vc, Ic, rB)],
          [Int8Array, (cB, Bc, nc, Vc, Ic, rB) => cB.AddInt8Attribute(Bc, nc, Vc, Ic, rB)]
        ]);
        for (const nc of Bc) {
          nc.data instanceof Uint8ClampedArray && (nc.data = new Uint8Array(nc.data));
          const Bc = cB.get(nc.data.constructor),
            Mc = nc.data.length / nc.size;
          Pc[nc.kind] = Bc(uc, sc, Ic[nc.dracoName], Mc, nc.size, nc.data), Vc.quantizationBits && Vc.quantizationBits[nc.dracoName] && rB.SetAttributeQuantization(Ic[nc.dracoName], Vc.quantizationBits[nc.dracoName])
        }
        Vc.method && rB.SetEncodingMethod(Ic[Vc.method]), void 0 !== Vc.encodeSpeed && void 0 !== Vc.decodeSpeed && rB.SetSpeedOptions(Vc.encodeSpeed, Vc.decodeSpeed), Mc = new Ic.DracoInt8Array;
        const qB = rB.EncodeMeshToDracoBuffer(sc, Mc);
        if (qB <= 0) throw new Error("Draco: Failed to encode.");
        const Oc = new Int8Array(qB);
        for (let Bc = 0; Bc < qB; Bc++) Oc[Bc] = Mc.GetValue(Bc);
        return {
          data: Oc,
          attributeIds: Pc
        }
      } finally {
        sc && Ic.destroy(sc), uc && Ic.destroy(uc), rB && Ic.destroy(rB), Mc && Ic.destroy(Mc)
      }
    }

    function JV() {
      let cB;
      onmessage = Bc => {
        const nc = Bc.data;
        switch (nc.id) {
          case "init": {
            nc.url && importScripts(nc.url);
            const Bc = nc.wasmBinary ? {
              wasmBinary: nc.wasmBinary
            } : {};
            cB = DracoEncoderModule(Bc), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!cB) throw new Error("Draco: Encoder module is not available.");
            cB.then((cB => {
              const Bc = FV(cB, nc.attributes, nc.indices, nc.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Bc
              }, Bc ? [Bc.data.buffer] : void 0)
            })).catch((cB => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: cB.message
              })
            }))
        }
      }
    }
    class jI {
      constructor(cB) {
        if (cB.workerPool) return void(this._workerPoolPromise = Promise.resolve(cB.workerPool));
        const Bc = cB.wasmBinary,
          nc = cB.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Vc = nc && "function" === typeof Worker && "function" === typeof URL,
          Ic = Vc || !cB.jsModule,
          rB = cB.wasmUrl && cB.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Ic ? YB.g.GetBabylonScriptURL(cB.wasmUrl, !0) : "",
            wasmBinaryPromise: Bc ? Promise.resolve(Bc) : YB.g.LoadFileAsync(YB.g.GetBabylonScriptURL(cB.wasmBinaryUrl, !0))
          } : {
            url: Ic ? YB.g.GetBabylonScriptURL(cB.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Vc ? this._workerPoolPromise = rB.wasmBinaryPromise.then((cB => {
          const Bc = this._getWorkerContent(),
            Vc = URL.createObjectURL(new Blob([Bc], {
              type: "application/javascript"
            }));
          return new HV.c(nc, (() => async function(cB, Bc, nc) {
            return await new Promise(((Vc, Ic) => {
              const rB = Bc => {
                  cB.removeEventListener("error", rB), cB.removeEventListener("message", uc), Ic(Bc)
                },
                uc = Bc => {
                  "initDone" === Bc.data.id && (cB.removeEventListener("error", rB), cB.removeEventListener("message", uc), Vc(cB))
                };
              if (cB.addEventListener("error", rB), cB.addEventListener("message", uc), Bc) {
                const Vc = Bc.slice(0);
                cB.postMessage({
                  id: "init",
                  url: nc,
                  wasmBinary: Vc
                }, [Vc])
              } else cB.postMessage({
                id: "init",
                url: nc
              })
            }))
          }(new Worker(Vc), cB, rB.url)))
        })) : this._modulePromise = rB.wasmBinaryPromise.then((async Bc => {
          if (!this._isModuleAvailable() && !cB.jsModule) {
            if (!rB.url) throw new Error("Draco codec module is not available");
            await YB.g.LoadBabylonScriptAsync(rB.url)
          }
          return await this._createModuleAsync(Bc, cB.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((cB => {
          cB.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function RV() {
      const cB = cB => !!cB && "object" === typeof cB;
      for (var Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
      return nc.reduce(((Bc, nc) => {
        const Vc = Object.keys(nc);
        for (const Ic of Vc) {
          const Vc = Bc[Ic],
            rB = nc[Ic];
          Array.isArray(Vc) && Array.isArray(rB) ? Bc[Ic] = Vc.concat(rB) : cB(Vc) && cB(rB) ? Bc[Ic] = RV(Vc, rB) : Bc[Ic] = rB
        }
        return Bc
      }), {})
    }

    function iI(cB) {
      return cB === wc.i.PositionKind ? "POSITION" : cB === wc.i.NormalKind ? "NORMAL" : cB === wc.i.ColorKind ? "COLOR" : cB.startsWith(wc.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const KV = {
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
    class xI extends jI {
      static get DefaultAvailable() {
        return !!((cB = xI.DefaultConfiguration).wasmUrl && (cB.wasmBinary || cB.wasmBinaryUrl) && "object" === typeof WebAssembly || cB.fallbackUrl);
        var cB
      }
      static get Default() {
        return xI._Default ?? (xI._Default = new xI), xI._Default
      }
      static ResetDefault(cB) {
        xI._Default && (cB || xI._Default.dispose(), xI._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(cB, Bc) {
        return {
          module: await (Bc || DracoEncoderModule)({
            wasmBinary: cB
          })
        }
      }
      _getWorkerContent() {
        return `${FV}(${JV})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xI.DefaultConfiguration)
      }
      async _encodeAsync(cB, Bc, nc) {
        const Vc = nc ? RV(KV, nc) : KV;
        if (this._workerPoolPromise) {
          const nc = await this._workerPoolPromise;
          return await new Promise(((Ic, rB) => {
            nc.push(((nc, uc) => {
              const sc = cB => {
                  nc.removeEventListener("error", sc), nc.removeEventListener("message", Mc), rB(cB), uc()
                },
                Mc = cB => {
                  "encodeMeshSuccess" === cB.data.id ? (nc.removeEventListener("error", sc), nc.removeEventListener("message", Mc), Ic(cB.data.encodedMeshData), uc()) : "encodeMeshError" === cB.data.id && (nc.removeEventListener("error", sc), nc.removeEventListener("message", Mc), rB(new Error(cB.data.errorMessage)), uc())
                };
              nc.addEventListener("error", sc), nc.addEventListener("message", Mc);
              const Pc = [];
              for (const Bc of cB) Pc.push(Bc.data.buffer);
              Bc && Pc.push(Bc.buffer), nc.postMessage({
                id: "encodeMesh",
                attributes: cB,
                indices: Bc,
                options: Vc
              }, Pc)
            }))
          }))
        }
        if (this._modulePromise) {
          return FV((await this._modulePromise).module, cB, Bc, Vc)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(cB, Bc) {
        if (0 == cB.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        cB instanceof lV.b && cB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Bc?.method && (Uc.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Bc.method = "MESH_SEQUENTIAL_ENCODING");
        const nc = function(cB) {
            let Bc = cB.Tfc(void 0, !0);
            return !Bc || Bc instanceof Uint32Array || Bc instanceof Uint16Array || (Bc = ((0, Cn.d)(Bc, Bc.length) ? Uint32Array : Uint16Array).from(Bc)), Bc
          }(cB),
          Vc = function(cB, Bc) {
            const nc = [];
            for (const Vc of cB.getVerticesDataKinds()) {
              if (Bc?.includes(Vc)) {
                if (Vc === wc.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Ic = cB.getVertexBuffer(Vc),
                rB = Ic.getSize(),
                uc = (0, Cn.s)(Ic.getData(), rB, Ic.type, Ic.byteOffset, Ic.byteStride, cB.getTotalVertices(), !0);
              nc.push({
                kind: Vc,
                dracoName: iI(Vc),
                size: rB,
                data: uc
              })
            }
            return nc
          }(cB, Bc?.excludedAttributes);
        return await this._encodeAsync(Vc, nc, Bc)
      }
    }
    xI.DefaultConfiguration = {
      wasmUrl: `${YB.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${YB.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${YB.g._DefaultCdnUrl}/draco_encoder.js`
    }, xI._Default = null;
    const dV = "KHR_draco_mesh_compression";
    class AV {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(cB) {
        this.name = dV, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === cB.options.meshCompressionMethod && xI.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(cB, Bc, nc) {
        if (!this.enabled) return;
        if (4 !== cB.mode && 5 !== cB.mode) return void Uc.c.Warn("Cannot compress primitive with mode " + cB.mode + ".");
        const Vc = [],
          Ic = [];
        let rB = null;
        if (void 0 !== cB.indices) {
          const uc = nc[cB.indices],
            sc = Bc.getBufferView(uc);
          rB = Bc.getData(sc).slice(), Vc.push(sc), Ic.push(uc)
        }
        const uc = [];
        for (const [qB, Oc] of Object.entries(cB.attributes)) {
          const cB = nc[Oc],
            rB = Bc.getBufferView(cB),
            Mc = Hn(cB.type),
            Pc = (0, Cn.s)(Bc.getData(rB), Mc, cB.componentType, cB.byteOffset || 0, rB.byteStride || (0, Cn.q)(cB.componentType) * Mc, cB.count, !0);
          uc.push({
            kind: qB,
            dracoName: (sc = qB, "POSITION" === sc ? "POSITION" : "NORMAL" === sc ? "NORMAL" : sc.startsWith("COLOR") ? "COLOR" : sc.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Hn(cB.type),
            data: Pc
          }), Vc.push(rB), Ic.push(cB)
        }
        var sc;
        const Mc = {
            method: cB.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Pc = xI.Default._encodeAsync(uc, rB, Mc).then((nc => {
            const rB = {
                bufferView: -1,
                attributes: nc.attributeIds
              },
              uc = Bc.createBufferView(nc.data);
            Bc.setBufferView(rB, uc);
            for (const cB of Vc) this._bufferViewsUsed.add(cB);
            for (const cB of Ic) this._accessorsUsed.add(cB);
            cB.extensions || (cB.extensions = {}), cB.extensions[dV] = rB
          })).catch((cB => {
            Uc.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + cB.message)
          }));
        this._encodePromises.push(Pc), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(cB) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Bc => {
          cB.getPropertiesWithBufferView(Bc).every((cB => this._accessorsUsed.has(cB))) && cB.removeBufferView(Bc)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let GV = !1;

    function cr() {
      GV || (GV = !0, NV.RegisterExtension(dV, (cB => new AV(cB))))
    }
    cr();
    var BI = nc(39527);
    const nI = "KHR_lights_punctual",
      VI = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      II = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      rr = Wc.p.Backward();
    class uI {
      constructor(cB) {
        this.name = nI, this.enabled = !0, this.required = !1, this._exporter = cB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[nI] = this._lights
      }
      async postExportNodeAsync(cB, Bc, nc, Vc, Ic) {
        return await new Promise((rB => {
          if (!(nc instanceof OV.b)) return void rB(Bc);
          const uc = nc.getTypeID() == OV.b.LIGHTTYPEID_POINTLIGHT ? "point" : nc.getTypeID() == OV.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : nc.getTypeID() == OV.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!uc || !(nc instanceof BI.c)) return Uc.c.Warn(`${cB}: Light ${nc.name} is not supported in ${nI}`), void rB(Bc);
          if (nc.falloffType !== OV.b.FALLOFF_GLTF && Uc.c.Warn(`${cB}: Light falloff for ${nc.name} does not match the ${nI} specification!`), !nc.position.efc(0, 0, 0)) {
            const cB = Wc.i.KV[0].qqc(nc.position);
            Ic && jV(cB), Bc.translation = cB.KPc()
          }
          if ("point" !== uc) {
            const cB = nc.direction.normalizeToRef(Wc.i.KV[0]);
            Ic && jV(cB);
            const Vc = Wc.f.FromUnitVectorsToRef(rr, cB, Wc.i.Quaternion[0]);
            Wc.f.IsIdentity(Vc) || (Bc.rotation = Vc.KPc())
          }
          const sc = {
            type: uc,
            name: nc.name,
            color: nc.diffuse.KPc(),
            intensity: nc.intensity,
            range: nc.range
          };
          if (An(sc, VI), "spot" === uc) {
            const cB = nc;
            sc.spot = {
              innerConeAngle: cB.innerAngle / 2,
              outerConeAngle: cB.angle / 2
            }, An(sc.spot, II)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(sc);
          const Mc = {
              light: this._lights.lights.length - 1
            },
            Pc = nc.parent;
          if (Pc && xV(nc, Pc)) {
            const cB = Vc.get(Pc);
            if (cB) {
              const nc = this._exporter._nodes[cB];
              return Kn(Bc, nc), nc.extensions || (nc.extensions = {}), nc.extensions[nI] = Mc, void rB(null)
            }
          }
          Bc.extensions || (Bc.extensions = {}), Bc.extensions[nI] = Mc, rB(Bc)
        }))
      }
    }
    let sI = !1;

    function MI() {
      sI || (sI = !0, NV.RegisterExtension(nI, (cB => new uI(cB))))
    }
    MI();
    const PI = "KHR_interactivity";
    class qr {
      constructor(cB) {
        this._exporter = cB, this.name = PI, this.enabled = !!cB.options.khrInteractivity, this.required = cB.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var cB, Bc, nc;
        const Vc = this._exporter.options.khrInteractivity;
        if (!Vc) return;
        const Ic = Vc.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: cB => this._exporter._getNodeIndex(cB),
          getAnimationIndex: cB => this._exporter._getAnimationIndex(cB),
          getCameraIndex: cB => this._exporter._getCameraIndex(cB),
          getMaterialIndex: cB => this._exporter._getMaterialIndex(cB),
          getRootIndex: (cB, Bc) => this._exporter._getRootIndex(cB, Bc),
          setNodeExtension: (cB, Bc, nc) => this._exporter._setNodeExtension(cB, Bc, nc)
        });
        this._exporter._glTF.extensions[PI] = Ic;
        for (const rB of Vc.additionalExtensionsUsed)(cB = this._exporter._glTF).extensionsUsed || (cB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(rB) && this._exporter._glTF.extensionsUsed.push(rB);
        for (const rB of Vc.additionalExtensionsRequired)(Bc = this._exporter._glTF).extensionsUsed || (Bc.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(rB) && this._exporter._glTF.extensionsUsed.push(rB), (nc = this._exporter._glTF).extensionsRequired || (nc.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(rB) && this._exporter._glTF.extensionsRequired.push(rB)
      }
    }
    let OI = !1;

    function TI() {
      OI || (OI = !0, NV.RegisterExtension(PI, (cB => new qr(cB)), 200))
    }
    TI();
    const fI = "EXT_lights_area",
      mr = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      eI = {
        aspect: 1
      },
      tr = Wc.p.Backward();
    class SI {
      constructor(cB) {
        this.name = fI, this.enabled = !0, this.required = !1, this._exporter = cB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[fI] = this._lights
      }
      async postExportNodeAsync(cB, Bc, nc, Vc, Ic) {
        return await new Promise((rB => {
          if (!(nc instanceof OV.b)) return void rB(Bc);
          const uc = nc.getTypeID() == OV.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!uc) return Uc.c.Warn(`${cB}: Light ${nc.name} is not supported in ${fI}`), void rB(Bc);
          const sc = nc;
          if (sc.falloffType !== OV.b.FALLOFF_GLTF && Uc.c.Warn(`${cB}: Light falloff for ${nc.name} does not match the ${fI} specification!`), !sc.position.efc(0, 0, 0)) {
            const cB = Wc.i.KV[0].qqc(sc.position);
            Ic && jV(cB), Bc.translation = cB.KPc()
          }
          const Mc = Wc.p.Forward();
          Ic && jV(Mc);
          const Pc = Wc.f.FromUnitVectorsToRef(tr, Mc, Wc.i.Quaternion[0]);
          Wc.f.IsIdentity(Pc) || (Bc.rotation = Pc.KPc());
          const qB = {
            type: uc,
            name: sc.name,
            color: sc.diffuse.KPc(),
            intensity: sc.intensity,
            size: sc.height,
            rect: {
              aspect: sc.width / sc.height
            }
          };
          An(qB, mr), qB.rect && An(qB.rect, eI), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(qB);
          const Oc = {
              light: this._lights.lights.length - 1
            },
            Tc = nc.parent;
          if (Tc && xV(sc, Tc)) {
            const cB = Vc.get(Tc);
            if (cB) {
              const nc = this._exporter._nodes[cB];
              return Kn(Bc, nc), nc.extensions || (nc.extensions = {}), nc.extensions[fI] = Oc, void rB(null)
            }
          }
          Bc.extensions || (Bc.extensions = {}), Bc.extensions[fI] = Oc, rB(Bc)
        }))
      }
    }
    let yr = !1;

    function zr() {
      yr || (yr = !0, NV.RegisterExtension(fI, (cB => new SI(cB))))
    }
    zr();
    const pI = "KHR_materials_anisotropy";
    class hI {
      constructor(cB) {
        this.name = pI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof an) {
          if (nc.anisotropy.isEnabled && !nc.anisotropy.legacy) return nc.anisotropy.texture && Vc.push(nc.anisotropy.texture), Vc
        } else if (nc instanceof GB && nc.specularRoughnessAnisotropy > 0) {
          const cB = function(cB) {
            const Bc = cB.specularRoughnessAnisotropyTexture,
              nc = cB.geometryTangentTexture;
            return `${Bc&&Bc.getInternalTexture()?Bc.getInternalTexture().uniqueId:"NoStrength"}_${nc&&nc.getInternalTexture()?nc.getInternalTexture().uniqueId:"NoTangent"}`
          }(nc);
          if (this._anisoTexturesMap[cB]) Vc.push(this._anisoTexturesMap[cB]);
          else {
            const Bc = await async function(cB) {
              const Bc = cB.knc(),
                nc = cB.specularRoughnessAnisotropyTexture,
                Vc = cB.geometryTangentTexture;
              return nc || Vc ? await sn("AnisotropyTexture", qV(Vc ? Mn(Vc, 0) : Pn(1), Vc ? Mn(Vc, 1) : Pn(0), nc ? Mn(nc, 0) : Pn(1)), Bc) : null
            }(nc);
            Bc && (Vc.push(Bc), this._anisoTexturesMap[cB] = Bc)
          }
          return Vc
        }
        return []
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          var Vc;
          if (nc instanceof an) {
            if (!nc.anisotropy.isEnabled || nc.anisotropy.legacy) return void cB(Bc);
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const Vc = this._exporter._materialExporter.getTextureInfo(nc.anisotropy.texture),
              Ic = {
                anisotropyStrength: nc.anisotropy.intensity,
                anisotropyRotation: nc.anisotropy.angle,
                anisotropyTexture: Vc ?? void 0
              };
            null !== Ic.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[pI] = Ic
          } else if (nc instanceof GB && nc.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            let Ic = nc.specularRoughnessTexture;
            nc._useRoughnessFromMetallicTextureGreen && (Ic = nc.baseMetalnessTexture);
            const rB = this._anisoTexturesMap[nc.id];
            if (!Ic && !rB) {
              let Vc = nc.specularRoughness,
                Ic = nc.specularRoughnessAnisotropy;
              if (!nc._useGltfStyleAnisotropy) {
                const cB = function(cB, Bc) {
                  const nc = cB * cB,
                    Vc = nc * Math.sqrt(2 / (1 + (1 - Bc) * (1 - Bc))),
                    Ic = (1 - Bc) * Vc;
                  return {
                    newBaseRoughness: Math.sqrt(Ic),
                    newAnisotropyStrength: Math.min(Math.sqrt((Vc - nc) / Math.max(1 - nc, 1e-4)), 1)
                  }
                }(nc.specularRoughness, nc.specularRoughnessAnisotropy);
                Vc = cB.newBaseRoughness, Ic = cB.newAnisotropyStrength
              }
              Bc.pbrMetallicRoughness && (Bc.pbrMetallicRoughness.roughnessFactor = Vc);
              const rB = {
                anisotropyStrength: Ic,
                anisotropyRotation: nc.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Bc.extensions[pI] = rB, cB(Bc)
            }
            const uc = rB ? this._exporter._materialExporter.getTextureInfo(rB) : null,
              sc = {
                anisotropyStrength: nc.specularRoughnessAnisotropy,
                anisotropyRotation: nc.geometryTangentAngle,
                anisotropyTexture: uc || void 0,
                extensions: {}
              };
            nc._useGltfStyleAnisotropy || (Bc.extensions.KHR_materials_openpbr = {}, (Vc = this._exporter._glTF).extensionsUsed || (Vc.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[pI] = sc
          }
          cB(Bc)
        }))
      }
    }
    let ar = !1;

    function lI() {
      ar || (ar = !0, NV.RegisterExtension(pI, (cB => new hI(cB))))
    }
    lI();
    const YI = "KHR_materials_clearcoat";

    function LI(cB, Bc) {
      const nc = new Zc.e(Bc.name, Bc.knc());
      return nc._texture = cB, nc.coordinatesIndex = Bc.coordinatesIndex, Bc instanceof Zc.e && (nc.uOffset = Bc.uOffset, nc.vOffset = Bc.vOffset, nc.uScale = Bc.uScale, nc.vScale = Bc.vScale, nc.wAng = Bc.wAng), nc.wrapU = Bc.wrapU, nc.wrapV = Bc.wrapV, nc
    }
    class gr {
      constructor(cB) {
        this.name = YI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = cB
      }
      dispose() {
        for (const cB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[cB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const cB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[cB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof an) {
          if (nc.clearCoat.isEnabled) return nc.clearCoat.texture && Vc.push(nc.clearCoat.texture), !nc.clearCoat.useRoughnessFromMainTexture && nc.clearCoat.textureRoughness && Vc.push(nc.clearCoat.textureRoughness), nc.clearCoat.bumpTexture && Vc.push(nc.clearCoat.bumpTexture), Vc
        } else if (nc instanceof GB && nc.coatWeight > 0) {
          let cB = !1;
          if (nc.coatWeightTexture ? nc.coatRoughnessTexture ? nc._useCoatRoughnessFromGreenChannel && nc.coatWeightTexture.getInternalTexture() === nc.coatRoughnessTexture.getInternalTexture() ? (Vc.push(nc.coatWeightTexture), Vc.push(nc.coatRoughnessTexture)) : cB = !0 : Vc.push(nc.coatWeightTexture) : nc.coatRoughnessTexture && (nc._useCoatRoughnessFromGreenChannel ? Vc.push(nc.coatRoughnessTexture) : cB = !0), cB) {
            const cB = function(cB) {
              const Bc = cB.coatWeightTexture,
                nc = Bc && Bc.getInternalTexture() ? Bc.getInternalTexture().uniqueId : "NoCoat",
                Vc = cB.coatRoughnessTexture;
              return `${nc}_${Vc&&Vc.getInternalTexture()?Vc.getInternalTexture().uniqueId:"NoRoughness"}`
            }(nc);
            if (!this._cachedInternalTexturesMap[cB]) {
              const Bc = await async function(cB) {
                const Bc = cB.knc(),
                  nc = cB.coatWeightTexture,
                  Vc = cB.coatRoughnessTexture;
                return nc || Vc ? (await sn("CoatTexture", qV(nc ? Mn(nc, 0) : Pn(1), Vc ? Mn(Vc, cB._useCoatRoughnessFromGreenChannel ? 1 : 0) : Pn(1)), Bc)).getInternalTexture() : null
              }(nc);
              Bc && (this._cachedInternalTexturesMap[cB] = Bc)
            }
            this._cachedInternalTexturesMap[cB] && (nc.coatWeightTexture && (this._mergedTexturesMap[nc.coatWeightTexture.uniqueId] = LI(this._cachedInternalTexturesMap[cB], nc.coatWeightTexture), Vc.push(this._mergedTexturesMap[nc.coatWeightTexture.uniqueId])), nc.coatRoughnessTexture && (this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId] = LI(this._cachedInternalTexturesMap[cB], nc.coatRoughnessTexture), Vc.push(this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId])))
          }
          return nc.geometryCoatNormalTexture && Vc.push(nc.geometryCoatNormalTexture), Vc
        }
        return []
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof an) {
            if (!nc.clearCoat.isEnabled) return void cB(Bc);
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const Vc = this._exporter._materialExporter.getTextureInfo(nc.clearCoat.texture);
            let Ic;
            Ic = nc.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(nc.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(nc.clearCoat.textureRoughness), nc.clearCoat.isTintEnabled && YB.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${nc.name}`), nc.clearCoat.remapF0OnInterfaceChange && YB.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${nc.name}`);
            const rB = this._exporter._materialExporter.getTextureInfo(nc.clearCoat.bumpTexture),
              uc = {
                clearcoatFactor: nc.clearCoat.intensity,
                clearcoatTexture: Vc ?? void 0,
                clearcoatRoughnessFactor: nc.clearCoat.roughness,
                clearcoatRoughnessTexture: Ic ?? void 0,
                clearcoatNormalTexture: rB ?? void 0
              };
            null === uc.clearcoatTexture && null === uc.clearcoatRoughnessTexture && null === uc.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[YI] = uc
          } else if (nc instanceof GB) {
            if (0 == nc.coatWeight) return void cB(Bc);
            let Vc, Ic, rB, uc;
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {}, nc.coatWeightTexture && (Vc = this._mergedTexturesMap[nc.coatWeightTexture.uniqueId], Ic = this._exporter._materialExporter.getTextureInfo(Vc)), nc.coatRoughnessTexture && (rB = this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId], uc = this._exporter._materialExporter.getTextureInfo(rB)), nc.coatColorTexture && YB.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${nc.name}`);
            const sc = this._exporter._materialExporter.getTextureInfo(nc.geometryCoatNormalTexture),
              Mc = {
                clearcoatFactor: nc.coatWeight,
                clearcoatTexture: Ic ?? void 0,
                clearcoatRoughnessFactor: nc.coatRoughness,
                clearcoatRoughnessTexture: uc ?? void 0,
                clearcoatNormalTexture: sc ?? void 0
              };
            null === Mc.clearcoatTexture && null === Mc.clearcoatRoughnessTexture && null === Mc.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[YI] = Mc
          }
          cB(Bc)
        }))
      }
    }
    let UI = !1;

    function br() {
      UI || (UI = !0, NV.RegisterExtension(YI, (cB => new gr(cB))))
    }
    br();
    const ZI = "KHR_materials_coat";

    function QI(cB) {
      const Bc = cB.coatRoughnessAnisotropyTexture,
        nc = cB.geometryCoatTangentTexture;
      return `${Bc&&Bc.getInternalTexture()?Bc.getInternalTexture().uniqueId:"NoStrength"}_${nc&&nc.getInternalTexture()?nc.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function CI(cB, Bc) {
      const nc = new Zc.e(Bc.name, Bc.knc());
      return nc._texture = cB, nc.coordinatesIndex = Bc.coordinatesIndex, Bc instanceof Zc.e && (nc.uOffset = Bc.uOffset, nc.vOffset = Bc.vOffset, nc.uScale = Bc.uScale, nc.vScale = Bc.vScale, nc.wAng = Bc.wAng), nc.wrapU = Bc.wrapU, nc.wrapV = Bc.wrapV, nc
    }
    class vr {
      constructor(cB) {
        this.name = ZI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = cB
      }
      dispose() {
        for (const cB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[cB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const cB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[cB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof an) {
          if (nc.clearCoat.isEnabled) return nc.clearCoat.texture && Vc.push(nc.clearCoat.texture), !nc.clearCoat.useRoughnessFromMainTexture && nc.clearCoat.textureRoughness && Vc.push(nc.clearCoat.textureRoughness), nc.clearCoat.bumpTexture && Vc.push(nc.clearCoat.bumpTexture), nc.clearCoat.tintTexture && Vc.push(nc.clearCoat.tintTexture), Vc
        } else if (nc instanceof GB && nc.coatWeight > 0) {
          let cB = !1;
          if (nc.coatWeightTexture ? nc.coatRoughnessTexture ? nc._useCoatRoughnessFromGreenChannel && nc.coatWeightTexture.getInternalTexture() === nc.coatRoughnessTexture.getInternalTexture() ? (Vc.push(nc.coatWeightTexture), Vc.push(nc.coatRoughnessTexture)) : cB = !0 : Vc.push(nc.coatWeightTexture) : nc.coatRoughnessTexture && (nc._useCoatRoughnessFromGreenChannel ? Vc.push(nc.coatRoughnessTexture) : cB = !0), cB) {
            const cB = function(cB) {
              const Bc = cB.coatWeightTexture,
                nc = Bc && Bc.getInternalTexture() ? Bc.getInternalTexture().uniqueId : "NoCoat",
                Vc = cB.coatRoughnessTexture;
              return `${nc}_${Vc&&Vc.getInternalTexture()?Vc.getInternalTexture().uniqueId:"NoRoughness"}`
            }(nc);
            if (!this._cachedInternalTexturesMap[cB]) {
              const Bc = await async function(cB) {
                const Bc = cB.knc(),
                  nc = cB.coatWeightTexture,
                  Vc = cB.coatRoughnessTexture;
                return nc || Vc ? (await sn("CoatTexture", qV(nc ? Mn(nc, 0) : Pn(1), Vc ? Mn(Vc, cB._useCoatRoughnessFromGreenChannel ? 1 : 0) : Pn(1)), Bc)).getInternalTexture() : null
              }(nc);
              Bc && (this._cachedInternalTexturesMap[cB] = Bc)
            }
            this._cachedInternalTexturesMap[cB] && (nc.coatWeightTexture && (this._mergedTexturesMap[nc.coatWeightTexture.uniqueId] = CI(this._cachedInternalTexturesMap[cB], nc.coatWeightTexture), Vc.push(this._mergedTexturesMap[nc.coatWeightTexture.uniqueId])), nc.coatRoughnessTexture && (this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId] = CI(this._cachedInternalTexturesMap[cB], nc.coatRoughnessTexture), Vc.push(this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId])))
          }
          if (nc.geometryCoatNormalTexture && Vc.push(nc.geometryCoatNormalTexture), nc.coatColorTexture && Vc.push(nc.coatColorTexture), nc.coatRoughnessAnisotropy > 0) {
            const cB = QI(nc);
            if (this._mergedTexturesMap[cB]) Vc.push(this._mergedTexturesMap[cB]);
            else {
              const Bc = await async function(cB) {
                const Bc = cB.knc(),
                  nc = cB.coatRoughnessAnisotropyTexture,
                  Vc = cB.geometryCoatTangentTexture;
                return nc || Vc ? await sn("AnisotropyTexture", qV(Vc ? Mn(Vc, 0) : Pn(1), Vc ? Mn(Vc, 1) : Pn(0), nc ? Mn(nc, 0) : Pn(1)), Bc) : null
              }(nc);
              Bc && (Vc.push(Bc), this._mergedTexturesMap[cB] = Bc)
            }
            return Vc
          }
          return Vc
        }
        return []
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          var Vc;
          if (nc instanceof an) {
            if (!nc.clearCoat.isEnabled) return void cB(Bc);
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const Vc = this._exporter._materialExporter.getTextureInfo(nc.clearCoat.texture);
            let Ic, rB;
            Ic = nc.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(nc.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(nc.clearCoat.textureRoughness), nc.clearCoat.isTintEnabled && (rB = this._exporter._materialExporter.getTextureInfo(nc.clearCoat.tintTexture));
            const uc = this._exporter._materialExporter.getTextureInfo(nc.clearCoat.bumpTexture),
              sc = nc.clearCoat.indexOfRefraction,
              Mc = {
                coatFactor: nc.clearCoat.intensity,
                coatTexture: Vc ?? void 0,
                coatRoughnessFactor: nc.clearCoat.roughness,
                coatRoughnessTexture: Ic ?? void 0,
                coatNormalTexture: uc ?? void 0,
                coatColorFactor: nc.clearCoat.tintColor.KPc(),
                coatColorTexture: rB ?? void 0,
                coatIor: 1.5 !== sc ? sc : void 0
              };
            null === Mc.coatTexture && null === Mc.coatRoughnessTexture && null === Mc.coatRoughnessTexture && null === Mc.coatColorTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[ZI] = Mc
          } else if (nc instanceof GB) {
            if (0 == nc.coatWeight) return void cB(Bc);
            let Ic, rB, uc, sc;
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {}, nc.coatWeightTexture && (Ic = this._mergedTexturesMap[nc.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[nc.coatWeightTexture.uniqueId] : nc.coatWeightTexture, rB = this._exporter._materialExporter.getTextureInfo(Ic)), nc.coatRoughnessTexture && (uc = this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[nc.coatRoughnessTexture.uniqueId] : nc.coatRoughnessTexture, sc = this._exporter._materialExporter.getTextureInfo(uc));
            const Mc = this._exporter._materialExporter.getTextureInfo(nc.geometryCoatNormalTexture),
              Pc = this._exporter._materialExporter.getTextureInfo(nc.coatColorTexture),
              qB = nc.coatIor,
              Oc = nc.coatDarkening,
              Tc = nc.coatRoughnessTexture,
              fc = QI(nc),
              mB = this._mergedTexturesMap[fc];
            let ec, tB = 0,
              Sc = 0;
            if (nc.coatRoughnessAnisotropy > 0) {
              if (Tc || mB) {
                const cB = mB ? this._exporter._materialExporter.getTextureInfo(mB) : null;
                tB = nc.coatRoughnessAnisotropy, Sc = nc.geometryCoatTangentAngle, ec = cB || void 0
              } else {
                let cB = nc.coatRoughness,
                  Vc = nc.coatRoughnessAnisotropy;
                if (!nc._useGltfStyleAnisotropy) {
                  const Bc = function(cB, Bc) {
                    const nc = cB * cB,
                      Vc = nc * Math.sqrt(2 / (1 + (1 - Bc) * (1 - Bc))),
                      Ic = (1 - Bc) * Vc;
                    return {
                      newBaseRoughness: Math.sqrt(Ic),
                      newAnisotropyStrength: Math.min(Math.sqrt((Vc - nc) / Math.max(1 - nc, 1e-4)), 1)
                    }
                  }(nc.coatRoughness, nc.coatRoughnessAnisotropy);
                  cB = Bc.newBaseRoughness, Vc = Bc.newAnisotropyStrength
                }
                Bc.pbrMetallicRoughness && (Bc.pbrMetallicRoughness.roughnessFactor = cB), tB = Vc, Sc = nc.geometryCoatTangentAngle + .5 * Math.PI, ec = void 0
              }
              nc._useGltfStyleAnisotropy || (Bc.extensions.KHR_materials_openpbr = {}, (Vc = this._exporter._glTF).extensionsUsed || (Vc.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const yB = {
              coatFactor: nc.coatWeight,
              coatTexture: rB ?? void 0,
              coatRoughnessFactor: nc.coatRoughness,
              coatRoughnessTexture: sc ?? void 0,
              coatNormalTexture: Mc ?? void 0,
              coatColorFactor: nc.coatColor.KPc(),
              coatColorTexture: Pc ?? void 0,
              coatIor: 1.5 !== qB ? qB : void 0,
              coatDarkeningFactor: 1 !== Oc ? Oc : void 0,
              coatAnisotropyRotation: Sc,
              coatAnisotropyStrength: tB,
              coatAnisotropyTexture: ec
            };
            null === yB.coatTexture && null === yB.coatRoughnessTexture && null === yB.coatRoughnessTexture && null === yB.coatAnisotropyTexture && null === yB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[ZI] = yB
          }
          cB(Bc)
        }))
      }
    }
    let DI = !1;

    function NI() {
      DI || (DI = !0, NV.RegisterExtension(ZI, (cB => new vr(cB))))
    }
    NI();
    let EI = (() => {
      var cB, Bc, nc, Vc, Ic, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Uc, bB, Zc, Qc, Cc, vB, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, Rc, iB, Kc, xB, dc, Ac, Gc, cn, BB, nB, VB, IB, rn, uB, sB, MB, PB, qn, OB, TB, fB, mn, eB, tn, SB, yn, zn;
      let pB, hB, YB, LB, gn, UB, bn, ZB, QB, CB, vn, DB, NB, EB, oB, WB, wB, kn, XB, HB, FB, JB, jn, RB, KB, xn, dB, AB, GB, cV, Bn, nn, Vn, In, rV, un, sn, Mn, Pn, qV, On, Tn, fn, mV, en, tV, Sn, yV, zV, pn, hn, aV, lnc, Yn, Ln, gV, Un, bV, Zn, Qn, Cn, vV, Dn, Nn, En, onc, Wn, wn, kV = an,
        Xn = [],
        Hn = [],
        Fn = [],
        Jn = [],
        jV = [],
        Rn = [],
        iV = [],
        Kn = [],
        xV = [],
        dn = [],
        An = [],
        Gn = [],
        cI = [],
        BV = [],
        nV = [],
        VV = [],
        IV = [],
        rI = [],
        uV = [],
        sV = [],
        MV = [],
        PV = [],
        qI = [],
        OV = [],
        TV = [],
        fV = [],
        mI = [],
        eV = [],
        tI = [],
        SV = [],
        yI = [],
        zI = [],
        pV = [],
        hV = [],
        aI = [],
        lV = [],
        YV = [],
        LV = [],
        gI = [],
        UV = [],
        bI = [],
        ZV = [],
        QV = [],
        CV = [],
        vI = [],
        DV = [],
        NV = [],
        EV = [],
        oV = [],
        WV = [],
        wV = [],
        kI = [],
        XV = [],
        HV = [],
        FV = [],
        JV = [],
        jI = [],
        RV = [],
        iI = [],
        KV = [],
        xI = [],
        dV = [],
        AV = [],
        GV = [],
        cr = [],
        BI = [],
        nI = [],
        VI = [],
        II = [],
        rr = [],
        uI = [],
        sI = [],
        MI = [],
        PI = [],
        qr = [],
        OI = [],
        TI = [],
        fI = [],
        mr = [],
        eI = [],
        tr = [],
        SI = [],
        yr = [],
        zr = [],
        pI = [],
        hI = [],
        ar = [],
        lI = [],
        YI = [],
        LI = [],
        gr = [],
        UI = [],
        br = [],
        ZI = [],
        QI = [],
        CI = [],
        vr = [],
        DI = [],
        NI = [],
        EI = [],
        oI = [],
        WI = [],
        wI = [],
        kr = [],
        XI = [],
        HI = [],
        FI = [],
        JI = [],
        jr = [],
        RI = [],
        ir = [],
        KI = [],
        xr = [],
        dI = [],
        AI = [],
        GI = [],
        cu = [],
        Br = [],
        nr = [],
        Vr = [],
        Ir = [],
        ru = [],
        ur = [],
        sr = [],
        Mr = [],
        Pr = [],
        qu = [],
        Or = [],
        Tr = [],
        fr = [],
        mu = [],
        er = [],
        tu = [];
      return cB = class extends kV {
        get directIntensity() {
          return (0, Lc.c)(this, Bc, "f")
        }
        set directIntensity(cB) {
          (0, Lc.f)(this, Bc, cB, "f")
        }
        get emissiveIntensity() {
          return (0, Lc.c)(this, nc, "f")
        }
        set emissiveIntensity(cB) {
          (0, Lc.f)(this, nc, cB, "f")
        }
        get environmentIntensity() {
          return (0, Lc.c)(this, Vc, "f")
        }
        set environmentIntensity(cB) {
          (0, Lc.f)(this, Vc, cB, "f")
        }
        get specularIntensity() {
          return (0, Lc.c)(this, Ic, "f")
        }
        set specularIntensity(cB) {
          (0, Lc.f)(this, Ic, cB, "f")
        }
        get disableBumpMap() {
          return (0, Lc.c)(this, uc, "f")
        }
        set disableBumpMap(cB) {
          (0, Lc.f)(this, uc, cB, "f")
        }
        get albedoTexture() {
          return (0, Lc.c)(this, sc, "f")
        }
        set albedoTexture(cB) {
          (0, Lc.f)(this, sc, cB, "f")
        }
        get baseWeightTexture() {
          return (0, Lc.c)(this, Mc, "f")
        }
        set baseWeightTexture(cB) {
          (0, Lc.f)(this, Mc, cB, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Lc.c)(this, Pc, "f")
        }
        set baseDiffuseRoughnessTexture(cB) {
          (0, Lc.f)(this, Pc, cB, "f")
        }
        get ambientTexture() {
          return (0, Lc.c)(this, qB, "f")
        }
        set ambientTexture(cB) {
          (0, Lc.f)(this, qB, cB, "f")
        }
        get ambientTextureStrength() {
          return (0, Lc.c)(this, Oc, "f")
        }
        set ambientTextureStrength(cB) {
          (0, Lc.f)(this, Oc, cB, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Lc.c)(this, Tc, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(cB) {
          (0, Lc.f)(this, Tc, cB, "f")
        }
        get opacityTexture() {
          return (0, Lc.c)(this, fc, "f")
        }
        set opacityTexture(cB) {
          (0, Lc.f)(this, fc, cB, "f")
        }
        get reflectionTexture() {
          return (0, Lc.c)(this, mB, "f")
        }
        set reflectionTexture(cB) {
          (0, Lc.f)(this, mB, cB, "f")
        }
        get emissiveTexture() {
          return (0, Lc.c)(this, ec, "f")
        }
        set emissiveTexture(cB) {
          (0, Lc.f)(this, ec, cB, "f")
        }
        get reflectivityTexture() {
          return (0, Lc.c)(this, tB, "f")
        }
        set reflectivityTexture(cB) {
          (0, Lc.f)(this, tB, cB, "f")
        }
        get metallicTexture() {
          return (0, Lc.c)(this, Sc, "f")
        }
        set metallicTexture(cB) {
          (0, Lc.f)(this, Sc, cB, "f")
        }
        get metallic() {
          return (0, Lc.c)(this, yB, "f")
        }
        set metallic(cB) {
          (0, Lc.f)(this, yB, cB, "f")
        }
        get roughness() {
          return (0, Lc.c)(this, zB, "f")
        }
        set roughness(cB) {
          (0, Lc.f)(this, zB, cB, "f")
        }
        get metallicF0Factor() {
          return (0, Lc.c)(this, pc, "f")
        }
        set metallicF0Factor(cB) {
          (0, Lc.f)(this, pc, cB, "f")
        }
        get metallicReflectanceColor() {
          return (0, Lc.c)(this, hc, "f")
        }
        set metallicReflectanceColor(cB) {
          (0, Lc.f)(this, hc, cB, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Lc.c)(this, aB, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(cB) {
          (0, Lc.f)(this, aB, cB, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Lc.c)(this, lc, "f")
        }
        set metallicReflectanceTexture(cB) {
          (0, Lc.f)(this, lc, cB, "f")
        }
        get reflectanceTexture() {
          return (0, Lc.c)(this, Yc, "f")
        }
        set reflectanceTexture(cB) {
          (0, Lc.f)(this, Yc, cB, "f")
        }
        get microSurfaceTexture() {
          return (0, Lc.c)(this, Uc, "f")
        }
        set microSurfaceTexture(cB) {
          (0, Lc.f)(this, Uc, cB, "f")
        }
        get bumpTexture() {
          return (0, Lc.c)(this, bB, "f")
        }
        set bumpTexture(cB) {
          (0, Lc.f)(this, bB, cB, "f")
        }
        get lightmapTexture() {
          return (0, Lc.c)(this, Zc, "f")
        }
        set lightmapTexture(cB) {
          (0, Lc.f)(this, Zc, cB, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(cB) {
          this.subSurface.refractionTexture = cB, cB ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Lc.c)(this, Qc, "f")
        }
        set ambientColor(cB) {
          (0, Lc.f)(this, Qc, cB, "f")
        }
        get albedoColor() {
          return (0, Lc.c)(this, Cc, "f")
        }
        set albedoColor(cB) {
          (0, Lc.f)(this, Cc, cB, "f")
        }
        get baseWeight() {
          return (0, Lc.c)(this, vB, "f")
        }
        set baseWeight(cB) {
          (0, Lc.f)(this, vB, cB, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Lc.c)(this, Nc, "f")
        }
        set baseDiffuseRoughness(cB) {
          (0, Lc.f)(this, Nc, cB, "f")
        }
        get reflectivityColor() {
          return (0, Lc.c)(this, Ec, "f")
        }
        set reflectivityColor(cB) {
          (0, Lc.f)(this, Ec, cB, "f")
        }
        get reflectionColor() {
          return (0, Lc.c)(this, oc, "f")
        }
        set reflectionColor(cB) {
          (0, Lc.f)(this, oc, cB, "f")
        }
        get emissiveColor() {
          return (0, Lc.c)(this, Wc, "f")
        }
        set emissiveColor(cB) {
          (0, Lc.f)(this, Wc, cB, "f")
        }
        get microSurface() {
          return (0, Lc.c)(this, wc, "f")
        }
        set microSurface(cB) {
          (0, Lc.f)(this, wc, cB, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(cB) {
          this.subSurface.indexOfRefraction = cB
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(cB) {
          this.subSurface.invertRefractionY = cB
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(cB) {
          this.subSurface.linkRefractionWithTransparency = cB, cB && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Lc.c)(this, kB, "f")
        }
        set useLightmapAsShadowmap(cB) {
          (0, Lc.f)(this, kB, cB, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Lc.c)(this, Xc, "f")
        }
        set useAlphaFromAlbedoTexture(cB) {
          (0, Lc.f)(this, Xc, cB, "f")
        }
        get forceAlphaTest() {
          return (0, Lc.c)(this, Hc, "f")
        }
        set forceAlphaTest(cB) {
          (0, Lc.f)(this, Hc, cB, "f")
        }
        get alphaCutOff() {
          return (0, Lc.c)(this, Fc, "f")
        }
        set alphaCutOff(cB) {
          (0, Lc.f)(this, Fc, cB, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Lc.c)(this, Jc, "f")
        }
        set useSpecularOverAlpha(cB) {
          (0, Lc.f)(this, Jc, cB, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Lc.c)(this, Rc, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(cB) {
          (0, Lc.f)(this, Rc, cB, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Lc.c)(this, iB, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(cB) {
          (0, Lc.f)(this, iB, cB, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Lc.c)(this, Kc, "f")
        }
        set useRoughnessFromMetallicTextureGreen(cB) {
          (0, Lc.f)(this, Kc, cB, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Lc.c)(this, xB, "f")
        }
        set useMetallnessFromMetallicTextureBlue(cB) {
          (0, Lc.f)(this, xB, cB, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Lc.c)(this, dc, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(cB) {
          (0, Lc.f)(this, dc, cB, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Lc.c)(this, Ac, "f")
        }
        set useAmbientInGrayScale(cB) {
          (0, Lc.f)(this, Ac, cB, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Lc.c)(this, Gc, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(cB) {
          (0, Lc.f)(this, Gc, cB, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === an.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(cB) {
          cB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = cB ? an.LIGHTFALLOFF_PHYSICAL : an.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === an.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(cB) {
          cB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = cB ? an.LIGHTFALLOFF_GLTF : an.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Lc.c)(this, cn, "f")
        }
        set useRadianceOverAlpha(cB) {
          (0, Lc.f)(this, cn, cB, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Lc.c)(this, BB, "f")
        }
        set useObjectSpaceNormalMap(cB) {
          (0, Lc.f)(this, BB, cB, "f")
        }
        get useParallax() {
          return (0, Lc.c)(this, nB, "f")
        }
        set useParallax(cB) {
          (0, Lc.f)(this, nB, cB, "f")
        }
        get useParallaxOcclusion() {
          return (0, Lc.c)(this, VB, "f")
        }
        set useParallaxOcclusion(cB) {
          (0, Lc.f)(this, VB, cB, "f")
        }
        get parallaxScaleBias() {
          return (0, Lc.c)(this, IB, "f")
        }
        set parallaxScaleBias(cB) {
          (0, Lc.f)(this, IB, cB, "f")
        }
        get disableLighting() {
          return (0, Lc.c)(this, rn, "f")
        }
        set disableLighting(cB) {
          (0, Lc.f)(this, rn, cB, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Lc.c)(this, uB, "f")
        }
        set forceIrradianceInFragment(cB) {
          (0, Lc.f)(this, uB, cB, "f")
        }
        get maxSimultaneousLights() {
          return (0, Lc.c)(this, sB, "f")
        }
        set maxSimultaneousLights(cB) {
          (0, Lc.f)(this, sB, cB, "f")
        }
        get invertNormalMapX() {
          return (0, Lc.c)(this, MB, "f")
        }
        set invertNormalMapX(cB) {
          (0, Lc.f)(this, MB, cB, "f")
        }
        get invertNormalMapY() {
          return (0, Lc.c)(this, PB, "f")
        }
        set invertNormalMapY(cB) {
          (0, Lc.f)(this, PB, cB, "f")
        }
        get twoSidedLighting() {
          return (0, Lc.c)(this, qn, "f")
        }
        set twoSidedLighting(cB) {
          (0, Lc.f)(this, qn, cB, "f")
        }
        get useAlphaFresnel() {
          return (0, Lc.c)(this, OB, "f")
        }
        set useAlphaFresnel(cB) {
          (0, Lc.f)(this, OB, cB, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Lc.c)(this, TB, "f")
        }
        set useLinearAlphaFresnel(cB) {
          (0, Lc.f)(this, TB, cB, "f")
        }
        get environmentBRDFTexture() {
          return (0, Lc.c)(this, fB, "f")
        }
        set environmentBRDFTexture(cB) {
          (0, Lc.f)(this, fB, cB, "f")
        }
        get forceNormalForward() {
          return (0, Lc.c)(this, mn, "f")
        }
        set forceNormalForward(cB) {
          (0, Lc.f)(this, mn, cB, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Lc.c)(this, eB, "f")
        }
        set enableSpecularAntiAliasing(cB) {
          (0, Lc.f)(this, eB, cB, "f")
        }
        get useHorizonOcclusion() {
          return (0, Lc.c)(this, tn, "f")
        }
        set useHorizonOcclusion(cB) {
          (0, Lc.f)(this, tn, cB, "f")
        }
        get useRadianceOcclusion() {
          return (0, Lc.c)(this, SB, "f")
        }
        set useRadianceOcclusion(cB) {
          (0, Lc.f)(this, SB, cB, "f")
        }
        get unlit() {
          return (0, Lc.c)(this, yn, "f")
        }
        set unlit(cB) {
          (0, Lc.f)(this, yn, cB, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Lc.c)(this, zn, "f")
        }
        set applyDecalMapAfterDetailMap(cB) {
          (0, Lc.f)(this, zn, cB, "f")
        }
        constructor(rB, gB) {
          super(rB, gB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Bc.set(this, ((0, Lc.k)(this, Xn), (0, Lc.k)(this, Hn, 1))), nc.set(this, ((0, Lc.k)(this, Fn), (0, Lc.k)(this, Jn, 1))), Vc.set(this, ((0, Lc.k)(this, jV), (0, Lc.k)(this, Rn, 1))), Ic.set(this, ((0, Lc.k)(this, iV), (0, Lc.k)(this, Kn, 1))), uc.set(this, ((0, Lc.k)(this, xV), (0, Lc.k)(this, dn, !1))), sc.set(this, ((0, Lc.k)(this, An), (0, Lc.k)(this, Gn, void 0))), Mc.set(this, ((0, Lc.k)(this, cI), (0, Lc.k)(this, BV, void 0))), Pc.set(this, ((0, Lc.k)(this, nV), (0, Lc.k)(this, VV, void 0))), qB.set(this, ((0, Lc.k)(this, IV), (0, Lc.k)(this, rI, void 0))), Oc.set(this, ((0, Lc.k)(this, uV), (0, Lc.k)(this, sV, 1))), Tc.set(this, ((0, Lc.k)(this, MV), (0, Lc.k)(this, PV, cB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), fc.set(this, ((0, Lc.k)(this, qI), (0, Lc.k)(this, OV, void 0))), mB.set(this, ((0, Lc.k)(this, TV), (0, Lc.k)(this, fV, void 0))), ec.set(this, ((0, Lc.k)(this, mI), (0, Lc.k)(this, eV, void 0))), tB.set(this, ((0, Lc.k)(this, tI), (0, Lc.k)(this, SV, void 0))), Sc.set(this, ((0, Lc.k)(this, yI), (0, Lc.k)(this, zI, void 0))), yB.set(this, ((0, Lc.k)(this, pV), (0, Lc.k)(this, hV, void 0))), zB.set(this, ((0, Lc.k)(this, aI), (0, Lc.k)(this, lV, void 0))), pc.set(this, ((0, Lc.k)(this, YV), (0, Lc.k)(this, LV, 1))), hc.set(this, ((0, Lc.k)(this, gI), (0, Lc.k)(this, UV, jB.e.White()))), aB.set(this, ((0, Lc.k)(this, bI), (0, Lc.k)(this, ZV, !1))), lc.set(this, ((0, Lc.k)(this, QV), (0, Lc.k)(this, CV, void 0))), Yc.set(this, ((0, Lc.k)(this, vI), (0, Lc.k)(this, DV, void 0))), Uc.set(this, ((0, Lc.k)(this, NV), (0, Lc.k)(this, EV, void 0))), bB.set(this, ((0, Lc.k)(this, oV), (0, Lc.k)(this, WV, void 0))), Zc.set(this, ((0, Lc.k)(this, wV), (0, Lc.k)(this, kI, void 0))), Qc.set(this, ((0, Lc.k)(this, XV), (0, Lc.k)(this, HV, new jB.e(0, 0, 0)))), Cc.set(this, ((0, Lc.k)(this, FV), (0, Lc.k)(this, JV, new jB.e(1, 1, 1)))), vB.set(this, ((0, Lc.k)(this, jI), (0, Lc.k)(this, RV, 1))), Nc.set(this, ((0, Lc.k)(this, iI), (0, Lc.k)(this, KV, void 0))), Ec.set(this, ((0, Lc.k)(this, xI), (0, Lc.k)(this, dV, new jB.e(1, 1, 1)))), oc.set(this, ((0, Lc.k)(this, AV), (0, Lc.k)(this, GV, new jB.e(1, 1, 1)))), Wc.set(this, ((0, Lc.k)(this, cr), (0, Lc.k)(this, BI, new jB.e(0, 0, 0)))), wc.set(this, ((0, Lc.k)(this, nI), (0, Lc.k)(this, VI, 1))), kB.set(this, ((0, Lc.k)(this, II), (0, Lc.k)(this, rr, !1))), Xc.set(this, ((0, Lc.k)(this, uI), (0, Lc.k)(this, sI, !1))), Hc.set(this, ((0, Lc.k)(this, MI), (0, Lc.k)(this, PI, !1))), Fc.set(this, ((0, Lc.k)(this, qr), (0, Lc.k)(this, OI, .4))), Jc.set(this, ((0, Lc.k)(this, TI), (0, Lc.k)(this, fI, !0))), Rc.set(this, ((0, Lc.k)(this, mr), (0, Lc.k)(this, eI, !1))), iB.set(this, ((0, Lc.k)(this, tr), (0, Lc.k)(this, SI, !0))), Kc.set(this, ((0, Lc.k)(this, yr), (0, Lc.k)(this, zr, !1))), xB.set(this, ((0, Lc.k)(this, pI), (0, Lc.k)(this, hI, !1))), dc.set(this, ((0, Lc.k)(this, ar), (0, Lc.k)(this, lI, !1))), Ac.set(this, ((0, Lc.k)(this, YI), (0, Lc.k)(this, LI, !1))), Gc.set(this, ((0, Lc.k)(this, gr), (0, Lc.k)(this, UI, !1))), cn.set(this, ((0, Lc.k)(this, br), (0, Lc.k)(this, ZI, !0))), BB.set(this, ((0, Lc.k)(this, QI), (0, Lc.k)(this, CI, !1))), nB.set(this, ((0, Lc.k)(this, vr), (0, Lc.k)(this, DI, !1))), VB.set(this, ((0, Lc.k)(this, NI), (0, Lc.k)(this, EI, !1))), IB.set(this, ((0, Lc.k)(this, oI), (0, Lc.k)(this, WI, .05))), rn.set(this, ((0, Lc.k)(this, wI), (0, Lc.k)(this, kr, !1))), uB.set(this, ((0, Lc.k)(this, XI), (0, Lc.k)(this, HI, !1))), sB.set(this, ((0, Lc.k)(this, FI), (0, Lc.k)(this, JI, 4))), MB.set(this, ((0, Lc.k)(this, jr), (0, Lc.k)(this, RI, !1))), PB.set(this, ((0, Lc.k)(this, ir), (0, Lc.k)(this, KI, !1))), qn.set(this, ((0, Lc.k)(this, xr), (0, Lc.k)(this, dI, !1))), OB.set(this, ((0, Lc.k)(this, AI), (0, Lc.k)(this, GI, !1))), TB.set(this, ((0, Lc.k)(this, cu), (0, Lc.k)(this, Br, !1))), fB.set(this, ((0, Lc.k)(this, nr), (0, Lc.k)(this, Vr, null))), mn.set(this, ((0, Lc.k)(this, Ir), (0, Lc.k)(this, ru, !1))), eB.set(this, ((0, Lc.k)(this, ur), (0, Lc.k)(this, sr, !1))), tn.set(this, ((0, Lc.k)(this, Mr), (0, Lc.k)(this, Pr, !0))), SB.set(this, ((0, Lc.k)(this, qu), (0, Lc.k)(this, Or, !0))), yn.set(this, ((0, Lc.k)(this, Tr), (0, Lc.k)(this, fr, !1))), zn.set(this, ((0, Lc.k)(this, mu), (0, Lc.k)(this, er, !1))), (0, Lc.k)(this, tu), this._environmentBRDFTexture = Dc(this.knc())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Bc) {
          let nc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ic = lB.e.Clone((() => new cB(Bc, this.knc())), this, {
            cloneTexturesOnlyOnce: nc
          });
          return Ic.id = Bc, Ic.name = Bc, this.stencil.copyTo(Ic.stencil), this._clonePlugins(Ic, Vc), Ic
        }
        serialize() {
          const cB = super.serialize();
          return cB.customType = "BABYLON.PBRMaterial", cB
        }
        static Parse(Bc, nc, Vc) {
          const Ic = lB.e.Parse((() => new cB(Bc.name, nc)), Bc, nc, Vc);
          return Bc.stencil && Ic.stencil.parse(Bc.stencil, nc, Vc), rB.c._ParsePlugins(Bc, Ic, nc, Vc), Bc.clearCoat && Ic.clearCoat.parse(Bc.clearCoat, nc, Vc), Bc.anisotropy && Ic.anisotropy.parse(Bc.anisotropy, nc, Vc), Bc.brdf && Ic.brdf.parse(Bc.brdf, nc, Vc), Bc.sheen && Ic.sheen.parse(Bc.sheen, nc, Vc), Bc.subSurface && Ic.subSurface.parse(Bc.subSurface, nc, Vc), Bc.iridescence && Ic.iridescence.parse(Bc.iridescence, nc, Vc), Ic
        }
      }, Bc = new WeakMap, nc = new WeakMap, Vc = new WeakMap, Ic = new WeakMap, uc = new WeakMap, sc = new WeakMap, Mc = new WeakMap, Pc = new WeakMap, qB = new WeakMap, Oc = new WeakMap, Tc = new WeakMap, fc = new WeakMap, mB = new WeakMap, ec = new WeakMap, tB = new WeakMap, Sc = new WeakMap, yB = new WeakMap, zB = new WeakMap, pc = new WeakMap, hc = new WeakMap, aB = new WeakMap, lc = new WeakMap, Yc = new WeakMap, Uc = new WeakMap, bB = new WeakMap, Zc = new WeakMap, Qc = new WeakMap, Cc = new WeakMap, vB = new WeakMap, Nc = new WeakMap, Ec = new WeakMap, oc = new WeakMap, Wc = new WeakMap, wc = new WeakMap, kB = new WeakMap, Xc = new WeakMap, Hc = new WeakMap, Fc = new WeakMap, Jc = new WeakMap, Rc = new WeakMap, iB = new WeakMap, Kc = new WeakMap, xB = new WeakMap, dc = new WeakMap, Ac = new WeakMap, Gc = new WeakMap, cn = new WeakMap, BB = new WeakMap, nB = new WeakMap, VB = new WeakMap, IB = new WeakMap, rn = new WeakMap, uB = new WeakMap, sB = new WeakMap, MB = new WeakMap, PB = new WeakMap, qn = new WeakMap, OB = new WeakMap, TB = new WeakMap, fB = new WeakMap, mn = new WeakMap, eB = new WeakMap, tn = new WeakMap, SB = new WeakMap, yn = new WeakMap, zn = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(kV[Symbol.metadata] ?? null) : void 0;
        pB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], hB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], YB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], gn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], bn = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], QB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], vn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], NB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], EB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], wB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], kn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], XB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, gB.o)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], jn = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], xn = [(0, gB.F)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty", null)], dB = [(0, gB.o)("ambient"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], AB = [(0, gB.o)("albedo"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, gB.M)("baseWeight"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], cV = [(0, gB.M)("baseDiffuseRoughness"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Bn = [(0, gB.o)("reflectivity"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], nn = [(0, gB.o)("reflection"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Vn = [(0, gB.o)("emissive"), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], In = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], rV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], un = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], sn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Mn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], qV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], On = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Tn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], fn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], mV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], en = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Sn = [(0, gB.M)()], yV = [(0, gB.M)()], zV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], pn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], hn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], aV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], lnc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Yn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsLightsDirty")], Ln = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], gV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsLightsDirty")], Un = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Zn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Qn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Cn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], vV = [(0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Dn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Nn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], En = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], onc = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsTexturesDirty")], Wn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], wn = [(0, gB.M)(), (0, gB.d)("_markAllSubMeshesAsMiscDirty")], (0, Lc.g)(cB, null, pB, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "directIntensity" in cB,
            get: cB => cB.directIntensity,
            set: (cB, Bc) => {
              cB.directIntensity = Bc
            }
          },
          metadata: Bc
        }, Hn, Fn), (0, Lc.g)(cB, null, hB, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "emissiveIntensity" in cB,
            get: cB => cB.emissiveIntensity,
            set: (cB, Bc) => {
              cB.emissiveIntensity = Bc
            }
          },
          metadata: Bc
        }, Jn, jV), (0, Lc.g)(cB, null, YB, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "environmentIntensity" in cB,
            get: cB => cB.environmentIntensity,
            set: (cB, Bc) => {
              cB.environmentIntensity = Bc
            }
          },
          metadata: Bc
        }, Rn, iV), (0, Lc.g)(cB, null, LB, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: cB => "specularIntensity" in cB,
            get: cB => cB.specularIntensity,
            set: (cB, Bc) => {
              cB.specularIntensity = Bc
            }
          },
          metadata: Bc
        }, Kn, xV), (0, Lc.g)(cB, null, gn, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: cB => "disableBumpMap" in cB,
            get: cB => cB.disableBumpMap,
            set: (cB, Bc) => {
              cB.disableBumpMap = Bc
            }
          },
          metadata: Bc
        }, dn, An), (0, Lc.g)(cB, null, UB, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "albedoTexture" in cB,
            get: cB => cB.albedoTexture,
            set: (cB, Bc) => {
              cB.albedoTexture = Bc
            }
          },
          metadata: Bc
        }, Gn, cI), (0, Lc.g)(cB, null, bn, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "baseWeightTexture" in cB,
            get: cB => cB.baseWeightTexture,
            set: (cB, Bc) => {
              cB.baseWeightTexture = Bc
            }
          },
          metadata: Bc
        }, BV, nV), (0, Lc.g)(cB, null, ZB, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "baseDiffuseRoughnessTexture" in cB,
            get: cB => cB.baseDiffuseRoughnessTexture,
            set: (cB, Bc) => {
              cB.baseDiffuseRoughnessTexture = Bc
            }
          },
          metadata: Bc
        }, VV, IV), (0, Lc.g)(cB, null, QB, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "ambientTexture" in cB,
            get: cB => cB.ambientTexture,
            set: (cB, Bc) => {
              cB.ambientTexture = Bc
            }
          },
          metadata: Bc
        }, rI, uV), (0, Lc.g)(cB, null, CB, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: cB => "ambientTextureStrength" in cB,
            get: cB => cB.ambientTextureStrength,
            set: (cB, Bc) => {
              cB.ambientTextureStrength = Bc
            }
          },
          metadata: Bc
        }, sV, MV), (0, Lc.g)(cB, null, vn, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: cB => "ambientTextureImpactOnAnalyticalLights" in cB,
            get: cB => cB.ambientTextureImpactOnAnalyticalLights,
            set: (cB, Bc) => {
              cB.ambientTextureImpactOnAnalyticalLights = Bc
            }
          },
          metadata: Bc
        }, PV, qI), (0, Lc.g)(cB, null, DB, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "opacityTexture" in cB,
            get: cB => cB.opacityTexture,
            set: (cB, Bc) => {
              cB.opacityTexture = Bc
            }
          },
          metadata: Bc
        }, OV, TV), (0, Lc.g)(cB, null, NB, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "reflectionTexture" in cB,
            get: cB => cB.reflectionTexture,
            set: (cB, Bc) => {
              cB.reflectionTexture = Bc
            }
          },
          metadata: Bc
        }, fV, mI), (0, Lc.g)(cB, null, EB, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "emissiveTexture" in cB,
            get: cB => cB.emissiveTexture,
            set: (cB, Bc) => {
              cB.emissiveTexture = Bc
            }
          },
          metadata: Bc
        }, eV, tI), (0, Lc.g)(cB, null, oB, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "reflectivityTexture" in cB,
            get: cB => cB.reflectivityTexture,
            set: (cB, Bc) => {
              cB.reflectivityTexture = Bc
            }
          },
          metadata: Bc
        }, SV, yI), (0, Lc.g)(cB, null, WB, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "metallicTexture" in cB,
            get: cB => cB.metallicTexture,
            set: (cB, Bc) => {
              cB.metallicTexture = Bc
            }
          },
          metadata: Bc
        }, zI, pV), (0, Lc.g)(cB, null, wB, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: cB => "metallic" in cB,
            get: cB => cB.metallic,
            set: (cB, Bc) => {
              cB.metallic = Bc
            }
          },
          metadata: Bc
        }, hV, aI), (0, Lc.g)(cB, null, kn, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "roughness" in cB,
            get: cB => cB.roughness,
            set: (cB, Bc) => {
              cB.roughness = Bc
            }
          },
          metadata: Bc
        }, lV, YV), (0, Lc.g)(cB, null, XB, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: cB => "metallicF0Factor" in cB,
            get: cB => cB.metallicF0Factor,
            set: (cB, Bc) => {
              cB.metallicF0Factor = Bc
            }
          },
          metadata: Bc
        }, LV, gI), (0, Lc.g)(cB, null, HB, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "metallicReflectanceColor" in cB,
            get: cB => cB.metallicReflectanceColor,
            set: (cB, Bc) => {
              cB.metallicReflectanceColor = Bc
            }
          },
          metadata: Bc
        }, UV, bI), (0, Lc.g)(cB, null, FB, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "useOnlyMetallicFromMetallicReflectanceTexture" in cB,
            get: cB => cB.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (cB, Bc) => {
              cB.useOnlyMetallicFromMetallicReflectanceTexture = Bc
            }
          },
          metadata: Bc
        }, ZV, QV), (0, Lc.g)(cB, null, JB, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "metallicReflectanceTexture" in cB,
            get: cB => cB.metallicReflectanceTexture,
            set: (cB, Bc) => {
              cB.metallicReflectanceTexture = Bc
            }
          },
          metadata: Bc
        }, CV, vI), (0, Lc.g)(cB, null, jn, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "reflectanceTexture" in cB,
            get: cB => cB.reflectanceTexture,
            set: (cB, Bc) => {
              cB.reflectanceTexture = Bc
            }
          },
          metadata: Bc
        }, DV, NV), (0, Lc.g)(cB, null, RB, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "microSurfaceTexture" in cB,
            get: cB => cB.microSurfaceTexture,
            set: (cB, Bc) => {
              cB.microSurfaceTexture = Bc
            }
          },
          metadata: Bc
        }, EV, oV), (0, Lc.g)(cB, null, KB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "bumpTexture" in cB,
            get: cB => cB.bumpTexture,
            set: (cB, Bc) => {
              cB.bumpTexture = Bc
            }
          },
          metadata: Bc
        }, WV, wV), (0, Lc.g)(cB, null, xn, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "lightmapTexture" in cB,
            get: cB => cB.lightmapTexture,
            set: (cB, Bc) => {
              cB.lightmapTexture = Bc
            }
          },
          metadata: Bc
        }, kI, XV), (0, Lc.g)(cB, null, dB, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "ambientColor" in cB,
            get: cB => cB.ambientColor,
            set: (cB, Bc) => {
              cB.ambientColor = Bc
            }
          },
          metadata: Bc
        }, HV, FV), (0, Lc.g)(cB, null, AB, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "albedoColor" in cB,
            get: cB => cB.albedoColor,
            set: (cB, Bc) => {
              cB.albedoColor = Bc
            }
          },
          metadata: Bc
        }, JV, jI), (0, Lc.g)(cB, null, GB, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: cB => "baseWeight" in cB,
            get: cB => cB.baseWeight,
            set: (cB, Bc) => {
              cB.baseWeight = Bc
            }
          },
          metadata: Bc
        }, RV, iI), (0, Lc.g)(cB, null, cV, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: cB => "baseDiffuseRoughness" in cB,
            get: cB => cB.baseDiffuseRoughness,
            set: (cB, Bc) => {
              cB.baseDiffuseRoughness = Bc
            }
          },
          metadata: Bc
        }, KV, xI), (0, Lc.g)(cB, null, Bn, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "reflectivityColor" in cB,
            get: cB => cB.reflectivityColor,
            set: (cB, Bc) => {
              cB.reflectivityColor = Bc
            }
          },
          metadata: Bc
        }, dV, AV), (0, Lc.g)(cB, null, nn, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "reflectionColor" in cB,
            get: cB => cB.reflectionColor,
            set: (cB, Bc) => {
              cB.reflectionColor = Bc
            }
          },
          metadata: Bc
        }, GV, cr), (0, Lc.g)(cB, null, Vn, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: cB => "emissiveColor" in cB,
            get: cB => cB.emissiveColor,
            set: (cB, Bc) => {
              cB.emissiveColor = Bc
            }
          },
          metadata: Bc
        }, BI, nI), (0, Lc.g)(cB, null, In, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: cB => "microSurface" in cB,
            get: cB => cB.microSurface,
            set: (cB, Bc) => {
              cB.microSurface = Bc
            }
          },
          metadata: Bc
        }, VI, II), (0, Lc.g)(cB, null, rV, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: cB => "useLightmapAsShadowmap" in cB,
            get: cB => cB.useLightmapAsShadowmap,
            set: (cB, Bc) => {
              cB.useLightmapAsShadowmap = Bc
            }
          },
          metadata: Bc
        }, rr, uI), (0, Lc.g)(cB, null, un, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAlphaFromAlbedoTexture" in cB,
            get: cB => cB.useAlphaFromAlbedoTexture,
            set: (cB, Bc) => {
              cB.useAlphaFromAlbedoTexture = Bc
            }
          },
          metadata: Bc
        }, sI, MI), (0, Lc.g)(cB, null, sn, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: cB => "forceAlphaTest" in cB,
            get: cB => cB.forceAlphaTest,
            set: (cB, Bc) => {
              cB.forceAlphaTest = Bc
            }
          },
          metadata: Bc
        }, PI, qr), (0, Lc.g)(cB, null, Mn, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: cB => "alphaCutOff" in cB,
            get: cB => cB.alphaCutOff,
            set: (cB, Bc) => {
              cB.alphaCutOff = Bc
            }
          },
          metadata: Bc
        }, OI, TI), (0, Lc.g)(cB, null, Pn, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "useSpecularOverAlpha" in cB,
            get: cB => cB.useSpecularOverAlpha,
            set: (cB, Bc) => {
              cB.useSpecularOverAlpha = Bc
            }
          },
          metadata: Bc
        }, fI, mr), (0, Lc.g)(cB, null, qV, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "useMicroSurfaceFromReflectivityMapAlpha" in cB,
            get: cB => cB.useMicroSurfaceFromReflectivityMapAlpha,
            set: (cB, Bc) => {
              cB.useMicroSurfaceFromReflectivityMapAlpha = Bc
            }
          },
          metadata: Bc
        }, eI, tr), (0, Lc.g)(cB, null, On, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRoughnessFromMetallicTextureAlpha" in cB,
            get: cB => cB.useRoughnessFromMetallicTextureAlpha,
            set: (cB, Bc) => {
              cB.useRoughnessFromMetallicTextureAlpha = Bc
            }
          },
          metadata: Bc
        }, SI, yr), (0, Lc.g)(cB, null, Tn, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRoughnessFromMetallicTextureGreen" in cB,
            get: cB => cB.useRoughnessFromMetallicTextureGreen,
            set: (cB, Bc) => {
              cB.useRoughnessFromMetallicTextureGreen = Bc
            }
          },
          metadata: Bc
        }, zr, pI), (0, Lc.g)(cB, null, fn, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: cB => "useMetallnessFromMetallicTextureBlue" in cB,
            get: cB => cB.useMetallnessFromMetallicTextureBlue,
            set: (cB, Bc) => {
              cB.useMetallnessFromMetallicTextureBlue = Bc
            }
          },
          metadata: Bc
        }, hI, ar), (0, Lc.g)(cB, null, mV, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAmbientOcclusionFromMetallicTextureRed" in cB,
            get: cB => cB.useAmbientOcclusionFromMetallicTextureRed,
            set: (cB, Bc) => {
              cB.useAmbientOcclusionFromMetallicTextureRed = Bc
            }
          },
          metadata: Bc
        }, lI, YI), (0, Lc.g)(cB, null, en, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAmbientInGrayScale" in cB,
            get: cB => cB.useAmbientInGrayScale,
            set: (cB, Bc) => {
              cB.useAmbientInGrayScale = Bc
            }
          },
          metadata: Bc
        }, LI, gr), (0, Lc.g)(cB, null, tV, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAutoMicroSurfaceFromReflectivityMap" in cB,
            get: cB => cB.useAutoMicroSurfaceFromReflectivityMap,
            set: (cB, Bc) => {
              cB.useAutoMicroSurfaceFromReflectivityMap = Bc
            }
          },
          metadata: Bc
        }, UI, br), (0, Lc.g)(cB, null, Sn, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: cB => "usePhysicalLightFalloff" in cB,
            get: cB => cB.usePhysicalLightFalloff
          },
          metadata: Bc
        }, null, Xn), (0, Lc.g)(cB, null, yV, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: cB => "useGLTFLightFalloff" in cB,
            get: cB => cB.useGLTFLightFalloff
          },
          metadata: Bc
        }, null, Xn), (0, Lc.g)(cB, null, zV, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRadianceOverAlpha" in cB,
            get: cB => cB.useRadianceOverAlpha,
            set: (cB, Bc) => {
              cB.useRadianceOverAlpha = Bc
            }
          },
          metadata: Bc
        }, ZI, QI), (0, Lc.g)(cB, null, pn, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: cB => "useObjectSpaceNormalMap" in cB,
            get: cB => cB.useObjectSpaceNormalMap,
            set: (cB, Bc) => {
              cB.useObjectSpaceNormalMap = Bc
            }
          },
          metadata: Bc
        }, CI, vr), (0, Lc.g)(cB, null, hn, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: cB => "useParallax" in cB,
            get: cB => cB.useParallax,
            set: (cB, Bc) => {
              cB.useParallax = Bc
            }
          },
          metadata: Bc
        }, DI, NI), (0, Lc.g)(cB, null, aV, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: cB => "useParallaxOcclusion" in cB,
            get: cB => cB.useParallaxOcclusion,
            set: (cB, Bc) => {
              cB.useParallaxOcclusion = Bc
            }
          },
          metadata: Bc
        }, EI, oI), (0, Lc.g)(cB, null, lnc, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: cB => "parallaxScaleBias" in cB,
            get: cB => cB.parallaxScaleBias,
            set: (cB, Bc) => {
              cB.parallaxScaleBias = Bc
            }
          },
          metadata: Bc
        }, WI, wI), (0, Lc.g)(cB, null, Yn, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: cB => "disableLighting" in cB,
            get: cB => cB.disableLighting,
            set: (cB, Bc) => {
              cB.disableLighting = Bc
            }
          },
          metadata: Bc
        }, kr, XI), (0, Lc.g)(cB, null, Ln, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: cB => "forceIrradianceInFragment" in cB,
            get: cB => cB.forceIrradianceInFragment,
            set: (cB, Bc) => {
              cB.forceIrradianceInFragment = Bc
            }
          },
          metadata: Bc
        }, HI, FI), (0, Lc.g)(cB, null, gV, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: cB => "maxSimultaneousLights" in cB,
            get: cB => cB.maxSimultaneousLights,
            set: (cB, Bc) => {
              cB.maxSimultaneousLights = Bc
            }
          },
          metadata: Bc
        }, JI, jr), (0, Lc.g)(cB, null, Un, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: cB => "invertNormalMapX" in cB,
            get: cB => cB.invertNormalMapX,
            set: (cB, Bc) => {
              cB.invertNormalMapX = Bc
            }
          },
          metadata: Bc
        }, RI, ir), (0, Lc.g)(cB, null, bV, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: cB => "invertNormalMapY" in cB,
            get: cB => cB.invertNormalMapY,
            set: (cB, Bc) => {
              cB.invertNormalMapY = Bc
            }
          },
          metadata: Bc
        }, KI, xr), (0, Lc.g)(cB, null, Zn, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: cB => "twoSidedLighting" in cB,
            get: cB => cB.twoSidedLighting,
            set: (cB, Bc) => {
              cB.twoSidedLighting = Bc
            }
          },
          metadata: Bc
        }, dI, AI), (0, Lc.g)(cB, null, Qn, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: cB => "useAlphaFresnel" in cB,
            get: cB => cB.useAlphaFresnel,
            set: (cB, Bc) => {
              cB.useAlphaFresnel = Bc
            }
          },
          metadata: Bc
        }, GI, cu), (0, Lc.g)(cB, null, Cn, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: cB => "useLinearAlphaFresnel" in cB,
            get: cB => cB.useLinearAlphaFresnel,
            set: (cB, Bc) => {
              cB.useLinearAlphaFresnel = Bc
            }
          },
          metadata: Bc
        }, Br, nr), (0, Lc.g)(cB, null, vV, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: cB => "environmentBRDFTexture" in cB,
            get: cB => cB.environmentBRDFTexture,
            set: (cB, Bc) => {
              cB.environmentBRDFTexture = Bc
            }
          },
          metadata: Bc
        }, Vr, Ir), (0, Lc.g)(cB, null, Dn, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: cB => "forceNormalForward" in cB,
            get: cB => cB.forceNormalForward,
            set: (cB, Bc) => {
              cB.forceNormalForward = Bc
            }
          },
          metadata: Bc
        }, ru, ur), (0, Lc.g)(cB, null, Nn, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: cB => "enableSpecularAntiAliasing" in cB,
            get: cB => cB.enableSpecularAntiAliasing,
            set: (cB, Bc) => {
              cB.enableSpecularAntiAliasing = Bc
            }
          },
          metadata: Bc
        }, sr, Mr), (0, Lc.g)(cB, null, En, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: cB => "useHorizonOcclusion" in cB,
            get: cB => cB.useHorizonOcclusion,
            set: (cB, Bc) => {
              cB.useHorizonOcclusion = Bc
            }
          },
          metadata: Bc
        }, Pr, qu), (0, Lc.g)(cB, null, onc, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: cB => "useRadianceOcclusion" in cB,
            get: cB => cB.useRadianceOcclusion,
            set: (cB, Bc) => {
              cB.useRadianceOcclusion = Bc
            }
          },
          metadata: Bc
        }, Or, Tr), (0, Lc.g)(cB, null, Wn, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: cB => "unlit" in cB,
            get: cB => cB.unlit,
            set: (cB, Bc) => {
              cB.unlit = Bc
            }
          },
          metadata: Bc
        }, fr, mu), (0, Lc.g)(cB, null, wn, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: cB => "applyDecalMapAfterDetailMap" in cB,
            get: cB => cB.applyDecalMapAfterDetailMap,
            set: (cB, Bc) => {
              cB.applyDecalMapAfterDetailMap = Bc
            }
          },
          metadata: Bc
        }, er, tu), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB.PBRMATERIAL_OPAQUE = an.PBRMATERIAL_OPAQUE, cB.PBRMATERIAL_ALPHATEST = an.PBRMATERIAL_ALPHATEST, cB.PBRMATERIAL_ALPHABLEND = an.PBRMATERIAL_ALPHABLEND, cB.PBRMATERIAL_ALPHATESTANDBLEND = an.PBRMATERIAL_ALPHATESTANDBLEND, cB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = an.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, cB
    })();
    const oI = "KHR_materials_diffuse_transmission";

    function WI(cB, Bc) {
      const nc = Bc.subSurface;
      let Vc = null;
      return nc.translucencyIntensityTexture ? Vc = nc.translucencyIntensityTexture : nc.thicknessTexture && nc.useMaskFromThicknessTexture && (Vc = nc.thicknessTexture), Vc && !nc.useGltfStyleTextures ? (Uc.c.Warn(`${cB}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Bc.name}`, 1), null) : Vc
    }
    class wI {
      constructor(cB) {
        this.name = oI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof EI && this._isExtensionEnabled(nc)) {
          const Bc = WI(cB, nc);
          return Bc && Vc.push(Bc), nc.subSurface.translucencyColorTexture && Vc.push(nc.subSurface.translucencyColorTexture), Vc
        }
        return Vc
      }
      _isExtensionEnabled(cB) {
        if (cB.unlit) return !1;
        const Bc = cB.subSurface;
        return !!Bc.isTranslucencyEnabled && (!cB.unlit && !Bc.useAlbedoToTintTranslucency && Bc.useGltfStyleTextures && 1 === Bc.volumeIndexOfRefraction && 0 === Bc.minimumThickness && 0 === Bc.maximumThickness)
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((Vc => {
          if (nc instanceof EI && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            const Vc = nc.subSurface,
              Ic = WI(cB, nc),
              rB = 0 == Vc.translucencyIntensity ? void 0 : Vc.translucencyIntensity,
              uc = this._exporter._materialExporter.getTextureInfo(Ic) ?? void 0,
              sc = !Vc.translucencyColor || Vc.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Vc.translucencyColor.KPc(),
              Mc = this._exporter._materialExporter.getTextureInfo(Vc.translucencyColorTexture) ?? void 0,
              Pc = {
                diffuseTransmissionFactor: rB,
                diffuseTransmissionTexture: uc,
                diffuseTransmissionColorFactor: sc,
                diffuseTransmissionColorTexture: Mc
              };
            (uc || Mc) && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions = Bc.extensions || {}, Bc.extensions[oI] = Pc
          }
          Vc(Bc)
        }))
      }
    }
    let kr = !1;

    function XI() {
      kr || (kr = !0, NV.RegisterExtension(oI, (cB => new wI(cB))))
    }
    XI();
    const HI = "KHR_materials_dispersion";
    class FI {
      constructor() {
        this.name = HI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(cB) {
        if (cB.unlit) return !1;
        const Bc = cB.subSurface;
        return !(!Bc.isRefractionEnabled && !Bc.isDispersionEnabled)
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof EI && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            const cB = {
              dispersion: nc.subSurface.dispersion
            };
            Bc.extensions = Bc.extensions || {}, Bc.extensions[HI] = cB
          }
          cB(Bc)
        }))
      }
    }
    let JI = !1;

    function jr() {
      JI || (JI = !0, NV.RegisterExtension(HI, (() => new FI)))
    }
    jr();
    const RI = "KHR_materials_emissive_strength";
    class ir {
      constructor() {
        this.name = RI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(cB, Bc, nc) {
        return await new Promise((cB => {
          if (!(nc instanceof EI)) return cB(Bc);
          const Vc = nc.emissiveColor.scale(nc.emissiveIntensity),
            Ic = Math.max(...Vc.KPc());
          if (Ic > 1) {
            Bc.emissiveFactor = Vc.scale(1 / Ic).KPc(), this._wasUsed = !0;
            const cB = {
              emissiveStrength: Ic
            };
            Bc.extensions || (Bc.extensions = {}), Bc.extensions[RI] = cB
          } else Bc.emissiveFactor = Vc.KPc();
          return cB(Bc)
        }))
      }
    }
    let KI = !1;

    function xr() {
      KI || (KI = !0, NV.RegisterExtension(RI, (() => new ir)))
    }
    xr();
    const dI = "KHR_materials_ior";
    class AI {
      constructor() {
        this.name = dI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(cB) {
        return !cB.unlit && (cB instanceof GB ? 1.5 != cB.specularIor : cB instanceof EI && (void 0 != cB.indexOfRefraction && 1.5 != cB.indexOfRefraction))
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof EI && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            const cB = {
              ior: nc.indexOfRefraction
            };
            Bc.extensions = Bc.extensions || {}, Bc.extensions[dI] = cB
          } else if (nc instanceof GB && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            const cB = {
              ior: nc.specularIor
            };
            Bc.extensions = Bc.extensions || {}, Bc.extensions[dI] = cB
          }
          cB(Bc)
        }))
      }
    }
    let GI = !1;

    function cu() {
      GI || (GI = !0, NV.RegisterExtension(dI, (() => new AI)))
    }
    cu();
    const Br = "KHR_materials_iridescence";
    class nr {
      constructor(cB) {
        this.name = Br, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof an) {
          if (nc.iridescence.isEnabled) return nc.iridescence.texture && Vc.push(nc.iridescence.texture), nc.iridescence.thicknessTexture && nc.iridescence.thicknessTexture !== nc.iridescence.texture && Vc.push(nc.iridescence.thicknessTexture), Vc
        } else if (nc instanceof GB && nc.thinFilmWeight > 0) return nc.thinFilmWeightTexture && Vc.push(nc.thinFilmWeightTexture), nc.thinFilmThicknessTexture && nc.thinFilmThicknessTexture !== nc.thinFilmWeightTexture && Vc.push(nc.thinFilmThicknessTexture), Vc;
        return []
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof an) {
            if (!nc.iridescence.isEnabled) return void cB(Bc);
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const Vc = this._exporter._materialExporter.getTextureInfo(nc.iridescence.texture),
              Ic = this._exporter._materialExporter.getTextureInfo(nc.iridescence.thicknessTexture),
              rB = {
                iridescenceFactor: nc.iridescence.intensity,
                iridescenceIor: nc.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: nc.iridescence.minimumThickness,
                iridescenceThicknessMaximum: nc.iridescence.maximumThickness,
                iridescenceTexture: Vc ?? void 0,
                iridescenceThicknessTexture: Ic ?? void 0
              };
            null === rB.iridescenceTexture && null === rB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[Br] = rB
          } else if (nc instanceof GB) {
            if (nc.thinFilmWeight <= 0) return void cB(Bc);
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const Vc = this._exporter._materialExporter.getTextureInfo(nc.thinFilmWeightTexture),
              Ic = this._exporter._materialExporter.getTextureInfo(nc.thinFilmThicknessTexture),
              rB = {
                iridescenceFactor: nc.thinFilmWeight,
                iridescenceIor: nc.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * nc.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * nc.thinFilmThickness,
                iridescenceTexture: Vc ?? void 0,
                iridescenceThicknessTexture: Ic ?? void 0
              };
            null === rB.iridescenceTexture && null === rB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[Br] = rB
          }
          cB(Bc)
        }))
      }
    }
    let Vr = !1;

    function Ir() {
      Vr || (Vr = !0, NV.RegisterExtension(Br, (cB => new nr(cB))))
    }
    Ir();
    const ru = "KHR_materials_sheen";
    class ur {
      constructor(cB) {
        this.name = ru, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        return nc instanceof EI && nc.sheen.isEnabled && nc.sheen.texture ? [nc.sheen.texture] : []
      }
      async postExportMaterialAsync(cB, Bc, nc) {
        return await new Promise((cB => {
          if (nc instanceof EI) {
            if (!nc.sheen.isEnabled) return void cB(Bc);
            this._wasUsed = !0, null == Bc.extensions && (Bc.extensions = {});
            const Vc = {
              sheenColorFactor: nc.sheen.color.KPc(),
              sheenRoughnessFactor: nc.sheen.roughness ?? 0
            };
            null === Vc.sheenColorTexture && null === Vc.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(nc), nc.sheen.texture && (Vc.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(nc.sheen.texture) ?? void 0), nc.sheen.textureRoughness && !nc.sheen.useRoughnessFromMainTexture ? Vc.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(nc.sheen.textureRoughness) ?? void 0 : nc.sheen.texture && nc.sheen.useRoughnessFromMainTexture && (Vc.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(nc.sheen.texture) ?? void 0), Bc.extensions[ru] = Vc
          }
          cB(Bc)
        }))
      }
    }
    let sr = !1;

    function Mr() {
      sr || (sr = !0, NV.RegisterExtension(ru, (cB => new ur(cB))))
    }
    Mr();
    const Pr = "KHR_materials_fuzz";

    function qu(cB, Bc) {
      const nc = new Zc.e(Bc.name, Bc.knc());
      return nc._texture = cB, nc.coordinatesIndex = Bc.coordinatesIndex, Bc instanceof Zc.e && (nc.uOffset = Bc.uOffset, nc.vOffset = Bc.vOffset, nc.uScale = Bc.uScale, nc.vScale = Bc.vScale, nc.wAng = Bc.wAng), nc.wrapU = Bc.wrapU, nc.wrapV = Bc.wrapV, nc
    }
    class Or {
      constructor(cB) {
        this.name = Pr, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = cB
      }
      dispose() {
        for (const cB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[cB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const cB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[cB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        if (nc instanceof GB) {
          const cB = [];
          if (nc.fuzzWeight > 0) {
            nc.fuzzWeightTexture && cB.push(nc.fuzzWeightTexture);
            let Bc = !1;
            if (nc.fuzzRoughnessTexture && (nc._useFuzzRoughnessFromTextureAlpha ? cB.push(nc.fuzzRoughnessTexture) : Bc = !0), nc.fuzzColorTexture && !Bc && cB.push(nc.fuzzColorTexture), Bc) {
              const Bc = function(cB) {
                const Bc = cB.fuzzColorTexture,
                  nc = Bc && Bc.getInternalTexture() ? Bc.getInternalTexture().uniqueId : "NoFuzzColor",
                  Vc = cB.fuzzRoughnessTexture;
                return `FuzzColor_${nc}_FuzzRoughness_${Vc&&Vc.getInternalTexture()?Vc.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(nc);
              if (!this._cachedInternalTexturesMap[Bc]) {
                const cB = await async function(cB) {
                  const Bc = cB.knc(),
                    nc = cB.fuzzColorTexture,
                    Vc = cB.fuzzRoughnessTexture;
                  return nc || Vc ? (await sn("FuzzTexture", qV(nc ? Mn(nc, 0) : Pn(1), nc ? Mn(nc, 1) : Pn(1), nc ? Mn(nc, 2) : Pn(1), Vc ? Mn(Vc, cB._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Pn(1)), Bc)).getInternalTexture() : null
                }(nc);
                cB && (this._cachedInternalTexturesMap[Bc] = cB)
              }
              this._cachedInternalTexturesMap[Bc] && (nc.fuzzColorTexture && (this._mergedTexturesMap[nc.fuzzColorTexture.uniqueId] = qu(this._cachedInternalTexturesMap[Bc], nc.fuzzColorTexture), cB.push(this._mergedTexturesMap[nc.fuzzColorTexture.uniqueId])), nc.fuzzRoughnessTexture && (this._mergedTexturesMap[nc.fuzzRoughnessTexture.uniqueId] = qu(this._cachedInternalTexturesMap[Bc], nc.fuzzRoughnessTexture), cB.push(this._mergedTexturesMap[nc.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return cB
        }
        return []
      }
      async postExportMaterialAsync(cB, Bc, nc) {
        return await new Promise((cB => {
          if (nc instanceof GB) {
            if (0 == nc.fuzzWeight) return void cB(Bc);
            this._wasUsed = !0, null == Bc.extensions && (Bc.extensions = {});
            const Vc = {
              fuzzFactor: nc.fuzzWeight,
              fuzzColorFactor: nc.fuzzColor.KPc(),
              fuzzRoughnessFactor: nc.fuzzRoughness
            };
            let Ic, rB;
            nc.fuzzWeightTexture && (Vc.fuzzTexture = this._exporter._materialExporter.getTextureInfo(nc.fuzzWeightTexture) ?? void 0), nc.fuzzColorTexture && (Ic = this._mergedTexturesMap[nc.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[nc.fuzzColorTexture.uniqueId] : nc.fuzzColorTexture, Vc.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Ic) ?? void 0), nc.fuzzRoughnessTexture && (rB = this._mergedTexturesMap[nc.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[nc.fuzzRoughnessTexture.uniqueId] : nc.fuzzRoughnessTexture, Vc.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(rB) ?? void 0), null === Vc.fuzzColorTexture && null === Vc.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[Pr] = Vc
          }
          cB(Bc)
        }))
      }
    }
    let Tr = !1;

    function fr() {
      Tr || (Tr = !0, NV.RegisterExtension(Pr, (cB => new Or(cB))))
    }
    fr();
    const mu = "KHR_materials_specular";
    class er {
      constructor(cB) {
        this.name = mu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        return nc instanceof EI && this._isExtensionEnabled(nc) ? (nc.metallicReflectanceTexture && Vc.push(nc.metallicReflectanceTexture), nc.reflectanceTexture && Vc.push(nc.reflectanceTexture), Vc) : Vc
      }
      _isExtensionEnabled(cB) {
        return !cB.unlit && (void 0 != cB.metallicF0Factor && 1 != cB.metallicF0Factor || void 0 != cB.metallicReflectanceColor && !cB.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(cB))
      }
      _hasTexturesExtension(cB) {
        return null != cB.metallicReflectanceTexture || null != cB.reflectanceTexture
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          var Vc;
          if (nc instanceof EI && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
            const cB = this._exporter._materialExporter.getTextureInfo(nc.metallicReflectanceTexture) ?? void 0,
              Vc = this._exporter._materialExporter.getTextureInfo(nc.reflectanceTexture) ?? void 0,
              Ic = {
                specularFactor: 1 == nc.metallicF0Factor ? void 0 : nc.metallicF0Factor,
                specularTexture: cB,
                specularColorFactor: nc.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : nc.metallicReflectanceColor.KPc(),
                specularColorTexture: Vc
              };
            this._hasTexturesExtension(nc) && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[mu] = Ic
          } else if (nc instanceof GB) {
            Bc.extensions = Bc.extensions || {};
            const Ic = this._exporter._materialExporter.getTextureInfo(nc.specularWeightTexture) ?? void 0,
              rB = this._exporter._materialExporter.getTextureInfo(nc.specularColorTexture) ?? void 0,
              uc = 1 == nc.specularWeight ? void 0 : nc.specularWeight,
              sc = nc.specularColor.equalsFloats(1, 1, 1) ? void 0 : nc.specularColor.KPc();
            if (!rB && !Ic && void 0 === uc && void 0 === sc) return cB(Bc);
            this._wasUsed = !0;
            const Mc = {
                specularEdgeColorEnabled: !0
              },
              Pc = {
                specularFactor: uc,
                specularTexture: Ic,
                specularColorFactor: sc,
                specularColorTexture: rB,
                extensions: {}
              };
            Pc.extensions.EXT_materials_specular_edge_color = Mc, (Vc = this._exporter._glTF).extensionsUsed || (Vc.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Ic || rB) && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[mu] = Pc
          }
          cB(Bc)
        }))
      }
    }
    let tu = !1;

    function Sr() {
      tu || (tu = !0, NV.RegisterExtension(mu, (cB => new er(cB))))
    }
    Sr();
    const yu = "KHR_materials_transmission";
    class zu {
      constructor(cB) {
        this.name = yu, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof EI) {
          if (this._isExtensionEnabled(nc)) return nc.subSurface.refractionIntensityTexture && nc.subSurface.useGltfStyleTextures && Vc.push(nc.subSurface.refractionIntensityTexture), Vc
        } else nc instanceof GB && (nc.transmissionWeight > 0 && nc.transmissionWeightTexture && (Vc.push(nc.transmissionWeightTexture), nc.transmissionColorTexture && Vc.push(nc.transmissionColorTexture)), nc.subsurfaceWeight > 0 && nc.subsurfaceWeightTexture && Vc.push(nc.subsurfaceWeightTexture));
        return Vc
      }
      _isExtensionEnabled(cB) {
        if (cB instanceof GB && !cB.unlit) return cB.transmissionWeight > 0 || cB.subsurfaceWeight > 0;
        if (cB instanceof EI && !cB.unlit) {
          const Bc = cB.subSurface;
          return Bc.isRefractionEnabled && void 0 != Bc.refractionIntensity && 0 != Bc.refractionIntensity || null != Bc.refractionIntensityTexture && Bc.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(cB, Bc, nc) {
        if (!this._isExtensionEnabled(nc)) return Bc;
        if (nc instanceof EI) {
          this._wasUsed = !0;
          const Vc = nc.subSurface,
            Ic = {
              transmissionFactor: 0 === Vc.refractionIntensity ? void 0 : Vc.refractionIntensity
            };
          if (Vc.refractionIntensityTexture)
            if (Vc.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(nc);
              const cB = this._exporter._materialExporter.getTextureInfo(Vc.refractionIntensityTexture);
              cB && (Ic.transmissionTexture = cB)
            } else Uc.c.Warn(`${cB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Bc.extensions || (Bc.extensions = {}), Bc.extensions[yu] = Ic
        } else if (nc instanceof GB) {
          this._wasUsed = !0;
          const cB = {
            transmissionFactor: (1 - nc.transmissionWeight) * nc.subsurfaceWeight + nc.transmissionWeight
          };
          if (nc.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(nc);
            const Bc = this._exporter._materialExporter.getTextureInfo(nc.transmissionWeightTexture);
            Bc && (cB.transmissionTexture = Bc)
          } else if (nc.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(nc);
            const Bc = this._exporter._materialExporter.getTextureInfo(nc.subsurfaceWeightTexture);
            Bc && (cB.transmissionTexture = Bc)
          }
          if (0 == nc.transmissionDepth && (!nc.transmissionColor.equals(jB.e.White()) || nc.transmissionColorTexture) && Bc.pbrMetallicRoughness && (Bc.pbrMetallicRoughness.baseColorFactor || (Bc.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Bc.pbrMetallicRoughness.baseColorFactor[0] *= nc.transmissionColor.r, Bc.pbrMetallicRoughness.baseColorFactor[1] *= nc.transmissionColor.g, Bc.pbrMetallicRoughness.baseColorFactor[2] *= nc.transmissionColor.b, nc.transmissionColorTexture && !Bc.pbrMetallicRoughness.baseColorTexture)) {
            const cB = this._exporter._materialExporter.getTextureInfo(nc.transmissionColorTexture);
            cB && (Bc.pbrMetallicRoughness.baseColorTexture = cB, this._exporter._materialNeedsUVsSet.add(nc))
          }
          Bc.extensions || (Bc.extensions = {}), Bc.extensions[yu] = cB
        }
        return Bc
      }
    }
    let pr = !1;

    function hr() {
      pr || (pr = !0, NV.RegisterExtension(yu, (cB => new zu(cB))))
    }
    hr();
    var au = nc(38302);
    const lr = "KHR_materials_unlit";
    class Yr {
      constructor() {
        this.name = lr, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          let Vc = !1;
          nc instanceof EI ? Vc = nc.unlit : nc instanceof au.f && (Vc = nc.disableLighting), Vc && (this._wasUsed = !0, null == Bc.extensions && (Bc.extensions = {}), Bc.extensions[lr] = {}), cB(Bc)
        }))
      }
    }
    let Lr = !1;

    function gu() {
      Lr || (Lr = !0, NV.RegisterExtension(lr, (() => new Yr)))
    }
    gu();
    const Ur = "KHR_materials_volume";
    class bu {
      constructor(cB) {
        this.name = Ur, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof EI) {
          if (this._isExtensionEnabled(nc)) return nc.subSurface.thicknessTexture && Vc.push(nc.subSurface.thicknessTexture), Vc
        } else nc instanceof GB && (nc.transmissionWeight > 0 || nc.subsurfaceWeight > 0) && nc.geometryThicknessTexture && Vc.push(nc.geometryThicknessTexture);
        return Vc
      }
      _isExtensionEnabled(cB) {
        if (cB.unlit) return !1;
        const Bc = cB.subSurface;
        return !(!Bc.isRefractionEnabled && !Bc.isTranslucencyEnabled) && (void 0 != Bc.maximumThickness && 0 != Bc.maximumThickness || void 0 != Bc.tintColorAtDistance && Bc.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Bc.tintColor && Bc.tintColor != jB.e.White() || this._hasTexturesExtension(cB))
      }
      _hasTexturesExtension(cB) {
        return null != cB.subSurface.thicknessTexture
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof EI && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            const cB = nc.subSurface,
              Vc = {
                thicknessFactor: 0 == cB.maximumThickness ? void 0 : cB.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(cB.thicknessTexture) ?? void 0,
                attenuationDistance: cB.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : cB.tintColorAtDistance,
                attenuationColor: cB.tintColor.equalsFloats(1, 1, 1) ? void 0 : cB.tintColor.KPc()
              };
            this._hasTexturesExtension(nc) && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions = Bc.extensions || {}, Bc.extensions[Ur] = Vc
          } else if (nc instanceof GB) {
            const cB = nc.transmissionWeight > 0 && !nc.geometryThinWalled,
              Vc = nc.subsurfaceWeight > 0 && !nc.geometryThinWalled;
            if (cB || Vc) {
              this._wasUsed = !0;
              const Ic = nc.geometryThickness,
                rB = this._exporter._materialExporter.getTextureInfo(nc.geometryThicknessTexture) ?? void 0;
              let uc;
              rB && this._exporter._materialNeedsUVsSet.add(nc);
              const sc = jB.e.White().KPc();
              if (cB && nc.transmissionDepth > 0) {
                const cB = 1 / nc.transmissionDepth;
                let Bc = new Wc.p(-Math.log(nc.transmissionColor.r) * cB, -Math.log(nc.transmissionColor.g) * cB, -Math.log(nc.transmissionColor.b) * cB);
                const Vc = new Wc.p(nc.transmissionScatter.r * cB, nc.transmissionScatter.g * cB, nc.transmissionScatter.b * cB),
                  Ic = Bc.subtract(Vc),
                  rB = Math.min(Ic.x, Ic.y, Ic.z);
                rB < 0 && (Ic.x = Ic.x - rB, Ic.y = Ic.y - rB, Ic.z = Ic.z - rB), Bc = Ic.add(Vc);
                uc = 1 / Math.max(Bc.x, Bc.y, Bc.z), sc[0] = Math.exp(-Bc.x * uc), sc[1] = Math.exp(-Bc.y * uc), sc[2] = Math.exp(-Bc.z * uc)
              } else uc = Number.MAX_VALUE, sc[0] = 1, sc[1] = 1, sc[2] = 1;
              let Mc = 1;
              const Pc = jB.e.White().KPc();
              if (Vc) {
                const cB = nc.subsurfaceRadius,
                  Bc = nc.subsurfaceRadiusScale,
                  Vc = new Wc.p(Bc.r, Bc.g, Bc.b).multiplyByFloats(cB, cB, cB),
                  Ic = new Wc.p(1 / Math.max(Vc.x, 1e-6), 1 / Math.max(Vc.y, 1e-6), 1 / Math.max(Vc.z, 1e-6));
                Mc = 1 / Math.max(Ic.x, Ic.y, Ic.z), Pc[0] = Math.exp(-Ic.x * Mc), Pc[1] = Math.exp(-Ic.y * Mc), Pc[2] = Math.exp(-Ic.z * Mc)
              }
              const qB = (1 - nc.transmissionWeight) * nc.subsurfaceWeight,
                Oc = qB + nc.transmissionWeight,
                Tc = 1 / Math.max(Oc, 1e-6),
                fc = nc.transmissionWeight * Tc,
                mB = qB * Tc,
                ec = sc.map(((cB, Bc) => cB * fc + Pc[Bc] * mB)),
                tB = {
                  thicknessFactor: Ic,
                  thicknessTexture: rB,
                  attenuationDistance: uc * fc + Mc * mB,
                  attenuationColor: ec
                };
              Bc.extensions = Bc.extensions || {}, Bc.extensions[Ur] = tB
            }
          }
          cB(Bc)
        }))
      }
    }
    let Zr = !1;

    function Qr() {
      Zr || (Zr = !0, NV.RegisterExtension(Ur, (cB => new bu(cB))))
    }
    Qr();
    const Cr = "KHR_materials_volume_scatter";
    class vu {
      constructor(cB) {
        this.name = Cr, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        return nc instanceof GB && (nc.transmissionWeight > 0 && nc.transmissionScatterTexture && Vc.push(nc.transmissionScatterTexture), nc.subsurfaceWeight > 0 && nc.subsurfaceColorTexture && Vc.push(nc.subsurfaceColorTexture)), Vc
      }
      _isExtensionEnabled(cB) {
        if (cB.unlit) return !1;
        const Bc = cB.transmissionWeight > 0 && !cB.geometryThinWalled && cB.transmissionDepth > 0 && !cB.transmissionScatter.equals(jB.e.Black()),
          nc = cB.subsurfaceWeight > 0 && !cB.geometryThinWalled;
        return !(!Bc && !nc)
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          if (nc instanceof GB && this._isExtensionEnabled(nc)) {
            this._wasUsed = !0;
            let cB = Wc.p.Zero(),
              Vc = 0;
            if (nc.transmissionWeight > 0) {
              cB = function(cB) {
                const Bc = new Wc.p(Math.sqrt(1 - cB.x), Math.sqrt(1 - cB.y), Math.sqrt(1 - cB.z)),
                  nc = new Wc.p(1, 1, 1),
                  Vc = nc.subtract(Bc),
                  Ic = nc.subtract(new Wc.p(.139, .139, .139).multiplyInPlace(Bc)),
                  rB = nc.add(new Wc.p(1.17, 1.17, 1.17).multiplyInPlace(Bc));
                return Vc.multiplyInPlace(Ic).divideInPlace(rB)
              }(new Wc.p(nc.transmissionScatter.r, nc.transmissionScatter.g, nc.transmissionScatter.b)), Vc = nc.transmissionScatterAnisotropy
            }
            const Ic = Wc.p.Zero();
            let rB = 0;
            nc.subsurfaceWeight > 0 && (Ic.set(nc.subsurfaceColor.r, nc.subsurfaceColor.g, nc.subsurfaceColor.b), rB = nc.subsurfaceScatterAnisotropy);
            const uc = (1 - nc.transmissionWeight) * nc.subsurfaceWeight,
              sc = uc + nc.transmissionWeight,
              Mc = 1 / Math.max(sc, 1e-6),
              Pc = nc.transmissionWeight * Mc,
              qB = uc * Mc,
              Oc = {
                multiscatterColorFactor: cB.multiplyByFloats(Pc, Pc, Pc).addInPlace(Ic.multiplyByFloats(qB, qB, qB)).KPc(),
                scatterAnisotropy: Vc * Pc + rB * qB
              };
            if (nc.subsurfaceWeight > 0 && nc.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(nc);
              const cB = this._exporter._materialExporter.getTextureInfo(nc.subsurfaceColorTexture);
              cB && (Oc.multiscatterColorTexture = cB)
            } else if (nc.transmissionWeight > 0 && nc.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(nc);
              const cB = this._exporter._materialExporter.getTextureInfo(nc.transmissionScatterTexture);
              cB && (Oc.multiscatterColorTexture = cB)
            }
            Bc.extensions = Bc.extensions || {}, Bc.extensions[Cr] = Oc
          }
          cB(Bc)
        }))
      }
    }
    let Dr = !1;

    function Nr() {
      Dr || (Dr = !0, NV.RegisterExtension(Cr, (cB => new vu(cB)), 101))
    }
    Nr();
    const Er = "KHR_materials_diffuse_roughness";
    class or {
      constructor(cB) {
        this.name = Er, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(cB, Bc, nc) {
        const Vc = [];
        if (nc instanceof an) {
          if (nc._baseDiffuseRoughness) return nc._baseDiffuseRoughnessTexture && Vc.push(nc._baseDiffuseRoughnessTexture), Vc
        } else if (nc instanceof GB && nc.baseDiffuseRoughness) return nc.baseDiffuseRoughnessTexture && Vc.push(nc.baseDiffuseRoughnessTexture), Vc;
        return []
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          let Vc = null,
            Ic = null;
          if (nc instanceof an ? (Vc = nc._baseDiffuseRoughness, Ic = nc._baseDiffuseRoughnessTexture) : nc instanceof GB && (Vc = nc.baseDiffuseRoughness, Ic = nc.baseDiffuseRoughnessTexture), !Vc) return void cB(Bc);
          this._wasUsed = !0, Bc.extensions = Bc.extensions || {};
          const rB = {
            diffuseRoughnessFactor: Vc,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Ic) ?? void 0
          };
          null !== rB.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(nc), Bc.extensions[Er] = rB, cB(Bc)
        }))
      }
    }
    let Wr = !1;

    function wr() {
      Wr || (Wr = !0, NV.RegisterExtension(Er, (cB => new or(cB))))
    }
    wr();
    const ku = "KHR_materials_openpbr";
    class Xr {
      constructor() {
        this.name = ku, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(cB, Bc, nc) {
        return new Promise((cB => {
          nc instanceof GB && (this._wasUsed = !0, Bc.extensions = Bc.extensions || {}, Bc.extensions[ku] = {}), cB(Bc)
        }))
      }
    }
    let Hr = !1;

    function Fr() {
      Hr || (Hr = !0, NV.RegisterExtension(ku, (() => new Xr)))
    }
    Fr();
    const Jr = "KHR_texture_transform";
    class ju {
      constructor() {
        this.name = Jr, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(cB, Bc, nc) {
        if (nc.knc() || YB.g.Warn(`${cB}: "scene" is not defined for Babylon texture ${nc.name}!`), (0 !== nc.uAng || 0 !== nc.vAng) && (YB.g.Warn(`${cB}: Texture ${nc.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== nc.uRotationCenter || 0 !== nc.vRotationCenter)) return;
        const Vc = {};
        let Ic = !1;
        if (0 === nc.uOffset && 0 === nc.vOffset || (Vc.offset = [nc.uOffset, nc.vOffset], Ic = !0), 1 === nc.uScale && 1 === nc.vScale || (Vc.scale = [nc.uScale, nc.vScale], Ic = !0), 0 !== nc.wAng) {
          if (0 !== nc.uRotationCenter || 0 !== nc.vRotationCenter) {
            if (nc.homogeneousRotationInUVTransform && nc.uScale !== nc.vScale) return void YB.g.Warn(`${cB}: Texture ${nc.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Jr}.`);
            YB.g.Warn(`${cB}: Texture ${nc.name} with non-origin rotation center will be exported using an adjusted offset with ${Jr}.`), Vc.offset = function(cB) {
              const {
                uOffset: Bc,
                vOffset: nc,
                uRotationCenter: Vc,
                vRotationCenter: Ic,
                uScale: rB,
                vScale: uc,
                wAng: sc
              } = cB, Mc = Math.cos(sc), Pc = Math.sin(sc), qB = Vc * rB, Oc = Ic * uc;
              return [Bc + (qB * (1 - Mc) + Oc * Pc), nc + (Oc * (1 - Mc) - qB * Pc)]
            }(nc)
          }
          Vc.rotation = -nc.wAng, Ic = !0
        }
        0 !== nc.coordinatesIndex && (Vc.texCoord = nc.coordinatesIndex, Ic = !0), Ic && (this._wasUsed = !0, Bc.extensions || (Bc.extensions = {}), Bc.extensions[Jr] = Vc)
      }
    }
    let Rr = !1;

    function iu() {
      Rr || (Rr = !0, NV.RegisterExtension(Jr, (() => new ju)))
    }
    iu();
    var Kr = nc(38090);
    const xu = "KHR_texture_basisu";
    class dr {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(cB) {
        this.name = xu, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      postExportTexture(cB, Bc) {
        const nc = this._exporter._textures[Bc.index],
          Vc = nc.source;
        if (void 0 === Vc) return;
        const Ic = this._exporter._images[Vc];
        "image/ktx2" === (Ic.mimeType || (0, Kr.h)(Ic.uri)) && (nc.source = void 0, nc.extensions || (nc.extensions = {}), nc.extensions[xu] = {
          source: Vc
        }, this._wasUsed = !0)
      }
    }
    let Ar = !1;

    function Gr() {
      Ar || (Ar = !0, NV.RegisterExtension(xu, (cB => new dr(cB))))
    }
    Gr();
    const cs = "EXT_texture_webp";
    class Bu {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(cB) {
        this.name = cs, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      postExportTexture(cB, Bc) {
        const nc = this._exporter._textures[Bc.index],
          Vc = nc.source;
        if (void 0 === Vc) return;
        const Ic = this._exporter._images[Vc];
        "image/webp" === (Ic.mimeType || (0, Kr.h)(Ic.uri)) && (nc.source = void 0, nc.extensions || (nc.extensions = {}), nc.extensions[cs] = {
          source: Vc
        }, this._wasUsed = !0)
      }
    }
    let nu = !1;

    function Vu() {
      nu || (nu = !0, NV.RegisterExtension(cs, (cB => new Bu(cB))))
    }
    Vu();
    const Iu = "EXT_texture_avif";
    class rs {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(cB) {
        this.name = Iu, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = cB
      }
      dispose() {}
      postExportTexture(cB, Bc) {
        const nc = this._exporter._textures[Bc.index],
          Vc = nc.source;
        if (void 0 === Vc) return;
        const Ic = this._exporter._images[Vc];
        "image/avif" === (Ic.mimeType || (0, Kr.h)(Ic.uri)) && (nc.source = void 0, nc.extensions || (nc.extensions = {}), nc.extensions[Iu] = {
          source: Vc
        }, this._wasUsed = !0)
      }
    }
    let uu = !1;

    function su() {
      uu || (uu = !0, NV.RegisterExtension(Iu, (cB => new rs(cB))))
    }
    su();
    class Mu {
      static CreateSTL(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Ic = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Mc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Pc = function(cB, Bc, nc) {
            const Ic = [3 * cB[nc], 3 * cB[nc + 1], 3 * cB[nc + 2]],
              rB = [new Vc.KV(Bc[Ic[0]], Bc[Ic[0] + 2], Bc[Ic[0] + 1]), new Vc.KV(Bc[Ic[1]], Bc[Ic[1] + 2], Bc[Ic[1] + 1]), new Vc.KV(Bc[Ic[2]], Bc[Ic[2] + 2], Bc[Ic[2] + 1])],
              uc = rB[0].subtract(rB[1]),
              sc = rB[2].subtract(rB[1]);
            return {
              v: rB,
              n: Vc.KV.Cross(sc, uc).normalize()
            }
          },
          Oc = function(cB, Bc, nc, Vc) {
            return Bc = Tc(cB, Bc, nc.x, Vc), Bc = Tc(cB, Bc, nc.y, Vc), Tc(cB, Bc, nc.z, Vc)
          },
          Tc = function(cB, Bc, nc, Vc) {
            return cB.setFloat32(Bc, nc, Vc), Bc + 4
          },
          mB = function(cB) {
            if (sc) {
              let Bc = cB;
              cB instanceof fc.c && (Bc = cB.wqc);
              const nc = Bc.getVerticesData(qB.g.PositionKind, !0, !0);
              if (!nc) return [];
              const Ic = Vc.KV.Zero();
              let rB;
              for (rB = 0; rB < nc.length; rB += 3) Vc.KV.TransformCoordinatesFromFloatsToRef(nc[rB], nc[rB + 1], nc[rB + 2], cB.computeWorldMatrix(!0), Ic).toArray(nc, rB);
              return nc
            }
            return cB.getVerticesData(qB.g.PositionKind) || []
          };
        sc && (uc = !0);
        let ec = "",
          tB = 0,
          Sc = 0;
        if (Ic) {
          for (let nc = 0; nc < cB.length; nc++) {
            const Bc = cB[nc].Tfc();
            tB += Bc ? Bc.length / 3 : 0
          }
          const Bc = new ArrayBuffer(84 + 50 * tB);
          ec = new DataView(Bc), Sc += 80, ec.setUint32(Sc, tB, rB), Sc += 4
        } else Mc || (ec = "solid stlmesh\r\n");
        for (let Vc = 0; Vc < cB.length; Vc++) {
          const Bc = cB[Vc];
          !Ic && Mc && (ec += "solid " + Bc.name + "\r\n"), !uc && Bc instanceof qI.d && Bc.bakeCurrentTransformIntoVertices();
          const nc = mB(Bc),
            sc = Bc.Tfc() || [];
          for (let cB = 0; cB < sc.length; cB += 3) {
            const Bc = Pc(sc, nc, cB);
            Ic ? (Sc = Oc(ec, Sc, Bc.n, rB), Sc = Oc(ec, Sc, Bc.v[0], rB), Sc = Oc(ec, Sc, Bc.v[1], rB), Sc = Oc(ec, Sc, Bc.v[2], rB), Sc += 2) : (ec += "\tfacet normal " + Bc.n.x + " " + Bc.n.y + " " + Bc.n.z + "\r\n", ec += "\t\touter loop\r\n", ec += "\t\t\tvertex " + Bc.v[0].x + " " + Bc.v[0].y + " " + Bc.v[0].z + "\r\n", ec += "\t\t\tvertex " + Bc.v[1].x + " " + Bc.v[1].y + " " + Bc.v[1].z + "\r\n", ec += "\t\t\tvertex " + Bc.v[2].x + " " + Bc.v[2].y + " " + Bc.v[2].z + "\r\n", ec += "\t\tendloop\r\n", ec += "\tendfacet\r\n")
          }!Ic && Mc && (ec += "endsolid " + name + "\r\n")
        }
        if (Ic || Mc || (ec += "endsolid stlmesh"), Bc) {
          const cB = document.createElement("a"),
            Bc = new Blob([ec], {
              type: "application/octet-stream"
            });
          cB.href = window.URL.createObjectURL(Bc), cB.download = nc + ".stl", cB.click()
        }
        return ec
      }
    }

    function Pu(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ic = [];
      for (let rB = 0; rB < cB.length / nc; rB++) {
        const uc = cB[rB * nc] * (Vc ? -1 : 1),
          sc = cB[rB * nc + 1],
          Mc = cB[rB * nc + 2];
        Ic.push(`(${uc.toPrecision(Bc.precision)}, ${sc.toPrecision(Bc.precision)}, ${Mc.toPrecision(Bc.precision)})`)
      }
      return Ic.join(", ")
    }

    function qs(cB, Bc) {
      const nc = [];
      for (let Vc = 0; Vc < cB.length / 2; Vc++) {
        const Ic = cB[2 * Vc],
          rB = cB[2 * Vc + 1];
        nc.push(`(${Ic.toPrecision(Bc.precision)}, ${(1-rB).toPrecision(Bc.precision)})`)
      }
      return nc.join(", ")
    }

    function Ou(cB, Bc, nc, Vc) {
      const Ic = cB.getVerticesData(qB.g.PositionKind),
        rB = cB.getVerticesData(qB.g.NormalKind);
      if (Ic && rB) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${nc}"\n\t\tint[] faceVertexCounts = [${function(cB){const Bc=cB.Tfc()?.length?cB.getTotalIndices():cB.getTotalVertices();return Array(Bc/3).fill(3).join(", ")}(cB)}]\n\t\tint[] faceVertexIndices = [${function(cB){const Bc=cB.Tfc(),nc=Bc?.length??cB.getTotalVertices(),Vc=[];if(null!==Bc)for(let Ic=0;Ic<nc;Ic++)Vc.push(Bc[Ic]);else for(let Ic=0;Ic<nc;Ic++)Vc.push(Ic);return Vc.join(", ")}(cB)}]\n\t\tnormal3f[] normals = [${Pu(rB,Bc,void 0,Vc)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Pu(Ic,Bc,void 0,Vc)}]\n        ${function(cB,Bc){let nc="";for(let Ic=0;Ic<4;Ic++){const Vc=Ic>0?Ic:"",rB=cB.getVerticesData(qB.g.UVKind+(Vc?Vc+1:""));rB&&(nc+=`\n\t\ttexCoord2f[] primvars:st${Vc} = [${qs(rB,Bc)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Vc=cB.getVerticesData(qB.g.ColorKind);return Vc&&(nc+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Pu(Vc, Bc, Vc.length / cB.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),nc}(cB,Bc)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Tu(cB, Bc, nc, Vc) {
      return `\n        def "Geometry"\n        {\n        ${Ou(cB,Bc,nc,Vc)}\n        }\n        `
    }

    function fu(cB) {
      let Bc = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Bc += cB, fflate.strToU8(Bc)
    }

    function ms(cB) {
      const Bc = cB.m;
      return `( ${eu(Bc,0)}, ${eu(Bc,4)}, ${eu(Bc,8)}, ${eu(Bc,12)} )`
    }

    function eu(cB, Bc) {
      return `(${cB[Bc+0]}, ${cB[Bc+1]}, ${cB[Bc+2]}, ${cB[Bc+3]})`
    }

    function ts(cB, Bc) {
      const nc = "Object_" + cB.uniqueId,
        Vc = ms(Bc);
      return `def Xform "${nc}" (\n\tprepend references = @./geometries/Geometry_${cB.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Vc}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${cB.material.uniqueId}>\n}\n\n`
    }

    function Su(cB) {
      switch (cB) {
        case lc.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case lc.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case lc.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function ys(cB) {
      return `(${cB.x}, ${cB.y})`
    }

    function zs(cB) {
      return `(${cB.r}, ${cB.g}, ${cB.b})`
    }

    function pu(cB) {
      return "image/jpeg" === cB || "image/png" === cB
    }

    function hu(cB, Bc, nc, Ic, rB, uc) {
      const sc = cB.getInternalTexture().uniqueId + "_" + cB.invertY,
        Pc = cB.mimeType || (0, Mc.d)(cB.getInternalTexture()?.url ?? ""),
        qB = pu(Pc) ? Pc : "image/png",
        Oc = "image/jpeg" === qB ? "jpg" : "png";
      rB[sc] = {
        texture: cB,
        mimeType: qB,
        ext: Oc
      };
      const Tc = cB.coordinatesIndex > 0 ? "st" + cB.coordinatesIndex : "st",
        fc = new Vc.Vector2(cB.uScale, cB.vScale),
        mB = new Vc.Vector2(cB.uOffset, cB.vOffset),
        ec = cB.wAng,
        tB = Math.sin(ec),
        Sc = Math.cos(ec);
      return mB.y = 1 - mB.y - fc.y, mB.x += tB * fc.x, mB.y += (1 - Sc) * fc.y, `\n    def Shader "PrimvarReader_${nc}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Tc}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${nc}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Bc.uniqueId}/PrimvarReader_${nc}.outputs:result>\n        float inputs:rotation = ${(ec*(180/Math.PI)).toFixed(uc.precision)}\n        float2 inputs:scale = ${ys(fc)}\n        float2 inputs:translation = ${ys(mB)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${cB.uniqueId}_${nc}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${sc}.${Oc}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Bc.uniqueId}/Transform2d_${nc}.outputs:result>\n        ${Ic?"float4 inputs:scale = "+function(cB){return`(${cB.r}, ${cB.g}, ${cB.b}, 1.0)`}(Ic):""}\n        token inputs:sourceColorSpace = "${cB.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Su(cB.wrapU)}"\n        token inputs:wrapT = "${Su(cB.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Bc.needAlphaBlending()||Bc.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function as(cB, Bc, nc) {
      const Vc = "\t\t\t",
        Ic = [],
        rB = [],
        {
          diffuseMap: uc,
          diffuse: sc,
          alphaCutOff: Mc,
          emissiveMap: Pc,
          emissive: qB,
          normalMap: Oc,
          roughnessMap: Tc,
          roughnessChannel: fc,
          roughness: mB,
          metalnessMap: ec,
          metalnessChannel: Sc,
          metalness: yB,
          aoMap: zB,
          aoMapChannel: pc,
          aoMapIntensity: hc,
          alphaMap: aB,
          ior: lc,
          clearCoatEnabled: Yc,
          clearCoat: Lc,
          clearCoatMap: gB,
          clearCoatRoughness: Uc,
          clearCoatRoughnessMap: bB
        } = function(cB) {
          const Bc = {
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
          return cB instanceof uV.StandardMaterial ? {
            ...Bc,
            diffuseMap: cB.diffuseTexture,
            diffuse: cB.diffuseColor,
            alphaCutOff: cB.alphaCutOff,
            emissiveMap: cB.emissiveTexture,
            emissive: cB.emissiveColor,
            roughness: 1,
            alphaMap: cB.opacityTexture
          } : cB instanceof an ? {
            ...Bc,
            diffuseMap: cB._albedoTexture,
            diffuse: cB._albedoColor,
            alphaCutOff: cB._alphaCutOff,
            emissiveMap: cB._emissiveTexture,
            emissive: cB._emissiveColor,
            normalMap: cB._bumpTexture,
            roughnessMap: cB._metallicTexture,
            roughnessChannel: cB._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: cB._roughness ?? 1,
            metalnessMap: cB._metallicTexture,
            metalnessChannel: cB._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: cB._metallic ?? 0,
            aoMap: cB._ambientTexture,
            aoMapChannel: cB._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: cB._ambientTextureStrength,
            alphaMap: cB._opacityTexture,
            ior: cB.subSurface.indexOfRefraction,
            clearCoatEnabled: cB.clearCoat.isEnabled,
            clearCoat: cB.clearCoat.intensity,
            clearCoatMap: cB.clearCoat.texture,
            clearCoatRoughness: cB.clearCoat.roughness,
            clearCoatRoughnessMap: cB.clearCoat.useRoughnessFromMainTexture ? cB.clearCoat.texture : cB.clearCoat.textureRoughness
          } : Bc
        }(cB);
      return null !== uc ? (Ic.push(`${Vc}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${uc.uniqueId}_diffuse.outputs:rgb>`), cB.needAlphaBlending() ? Ic.push(`${Vc}float inputs:opacity.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${uc.uniqueId}_diffuse.outputs:a>`) : cB.needAlphaTesting() && (Ic.push(`${Vc}float inputs:opacity.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${uc.uniqueId}_diffuse.outputs:a>`), Ic.push(`${Vc}float inputs:opacityThreshold = ${Mc}`)), rB.push(hu(uc, cB, "diffuse", sc, Bc, nc))) : Ic.push(`${Vc}color3f inputs:diffuseColor = ${zs(sc||tB.Color3.White())}`), null !== Pc ? (Ic.push(`${Vc}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${Pc.uniqueId}_emissive.outputs:rgb>`), rB.push(hu(Pc, cB, "emissive", qB, Bc, nc))) : qB && qB.toLuminance() > 0 && Ic.push(`${Vc}color3f inputs:emissiveColor = ${zs(qB)}`), null !== Oc && (Ic.push(`${Vc}normal3f inputs:normal.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${Oc.uniqueId}_normal.outputs:rgb>`), rB.push(hu(Oc, cB, "normal", null, Bc, nc))), null !== zB && (Ic.push(`${Vc}float inputs:occlusion.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${zB.uniqueId}_occlusion.outputs:${pc}>`), rB.push(hu(zB, cB, "occlusion", new tB.Color3(hc, hc, hc), Bc, nc))), null !== Tc ? (Ic.push(`${Vc}float inputs:roughness.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${Tc.uniqueId}_roughness.outputs:${fc}>`), rB.push(hu(Tc, cB, "roughness", new tB.Color3(mB, mB, mB), Bc, nc))) : Ic.push(`${Vc}float inputs:roughness = ${mB}`), null !== ec ? (Ic.push(`${Vc}float inputs:metallic.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${ec.uniqueId}_metallic.outputs:${Sc}>`), rB.push(hu(ec, cB, "metallic", new tB.Color3(yB, yB, yB), Bc, nc))) : Ic.push(`${Vc}float inputs:metallic = ${yB}`), null !== aB ? (Ic.push(`${Vc}float inputs:opacity.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${aB.uniqueId}_opacity.outputs:r>`), Ic.push(`${Vc}float inputs:opacityThreshold = 0.0001`), rB.push(hu(aB, cB, "opacity", null, Bc, nc))) : Ic.push(`${Vc}float inputs:opacity = ${cB.alpha}`), Yc && (null !== gB ? (Ic.push(`${Vc}float inputs:clearcoat.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${gB.uniqueId}_clearcoat.outputs:r>`), rB.push(hu(gB, cB, "clearcoat", new tB.Color3(Lc, Lc, Lc), Bc, nc))) : Ic.push(`${Vc}float inputs:clearcoat = ${Lc}`), null !== bB ? (Ic.push(`${Vc}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${cB.uniqueId}/Texture_${bB.uniqueId}_clearcoatRoughness.outputs:g>`), rB.push(hu(bB, cB, "clearcoatRoughness", new tB.Color3(Uc, Uc, Uc), Bc, nc))) : Ic.push(`${Vc}float inputs:clearcoatRoughness = ${Uc}`)), Ic.push(`${Vc}float inputs:ior = ${lc}`), `\n\tdef Material "Material_${cB.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Ic.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${cB.uniqueId}/PreviewSurface.outputs:surface>\n\n${rB.join("\n")}\n\n\t}\n`
    }

    function lu(cB) {
      cB.computeWorldMatrix(!0);
      const Bc = cB.getWorldMatrix().clone(),
        nc = cB.knc().useRightHandedSystem;
      let Vc = cB.material?._getEffectiveOrientation(cB) ?? cB.sideOrientation,
        uc = !nc,
        sc = cB.parent;
      for (; sc;) {
        if (En(sc, nc) && null === sc.parent) {
          nc || (Bc.multiplyToRef(sc.getWorldMatrix().invert(), Bc), Vc = Vc === rB.c.ClockWiseSideOrientation ? rB.c.CounterClockWiseSideOrientation : rB.c.ClockWiseSideOrientation), uc = !1;
          break
        }
        sc = sc.parent
      }
      return Bc.determinant() < 0 && Ic.Tools.Warn(`Mesh ${cB.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Bc,
        windingOrder: Vc === rB.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: uc
      }
    }
    async function Yu(cB, Bc, nc) {
      const rB = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Bc
      };
      "undefined" === typeof fflate && await Ic.Tools.LoadScriptAsync(rB.fflateUrl);
      const uc = {};
      uc[rB.modelFileName] = null;
      let sc = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      sc += function(cB) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===cB.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${cB.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${cB.planeAnchoringAlignment}"`:""}\n            `
      }(rB);
      const Mc = {};
      for (const Vc of cB.meshes) {
        if (0 === Vc.getTotalVertices()) continue;
        const cB = Vc,
          Bc = cB.geometry,
          Pc = cB.material;
        if (!Pc || !Bc || nc && !nc(cB)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Pc.getClassName())) {
          const nc = "geometries/Geometry_" + Bc.uniqueId + ".usda",
            {
              matrix: Vc,
              windingOrder: Ic,
              convertToRightHanded: qB
            } = lu(cB);
          if (!(nc in uc)) {
            const cB = Tu(Bc, rB, Ic, qB);
            uc[nc] = fu(cB)
          }
          Pc.uniqueId in Mc || (Mc[Pc.uniqueId] = Pc), sc += ts(cB, Vc)
        } else Ic.Tools.Warn("USDZExportAsync does not support this material type: " + Pc.getClassName())
      }
      cB.activeCamera && rB.exportCamera && (sc += function(cB, Bc) {
        const nc = "Camera_" + cB.uniqueId,
          Ic = ms(Vc.Matrix.RotationY(Math.PI).multiply(cB.getWorldMatrix()));
        if (cB.mode === lc.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${nc}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ic}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${cB.minZ.toPrecision(Bc.precision)}, ${cB.maxZ.toPrecision(Bc.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(cB.orthoLeft||1)+Math.abs(cB.orthoRight||1))).toPrecision(Bc.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(cB.orthoTop||1)+Math.abs(cB.orthoBottom||1))).toPrecision(Bc.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Vc = cB.RV().getAspectRatio(cB),
            rB = Bc.cameraSensorWidth || 35;
          return `def Camera "${nc}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ic}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${cB.minZ.toPrecision(Bc.precision)}, ${cB.maxZ.toPrecision(Bc.precision)})\n\t\t\tfloat focalLength = ${(rB/(2*Math.tan(.5*cB.fov))).toPrecision(Bc.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(rB*Vc).toPrecision(Bc.precision)}\n\t\t\tfloat verticalAperture = ${(rB/Vc).toPrecision(Bc.precision)}            \n\t\t}\n\t\n\t`
        }
      }(cB.activeCamera, rB)), sc += "\n            }\n        }";
      const Pc = {};
      sc += function(cB, Bc, nc) {
        const Vc = [];
        for (const Ic in cB) {
          const rB = cB[Ic];
          Vc.push(as(rB, Bc, nc))
        }
        return `\n    def "Materials"\n{\n${Vc.join("")}\n}\n\n`
      }(Mc, Pc, rB), sc += "\n    }", uc[rB.modelFileName] = fflate.strToU8(sc);
      for (const Vc in Pc) {
        const {
          texture: cB,
          ext: Bc,
          mimeType: nc
        } = Pc[Vc], Ic = await yV(cB);
        if (Ic && pu(Ic.mimeType) && Ic.mimeType === nc) uc[`textures/Texture_${Vc}.${Bc}`] = new Uint8Array(Ic.data);
        else {
          const Ic = cB.getSize(),
            rB = await (0, pc.g)(cB),
            sc = await Yc.DumpTools.DumpDataAsync(Ic.width, Ic.height, rB, nc, void 0, !1, !0);
          uc[`textures/Texture_${Vc}.${Bc}`] = new Uint8Array(sc).slice()
        }
      }
      let qB = 0;
      for (const Vc in uc) {
        const cB = uc[Vc];
        if (!cB) continue;
        qB += 34 + Vc.length;
        const Bc = 63 & qB;
        if (4 !== Bc) {
          const nc = new Uint8Array(64 - Bc);
          uc[Vc] = [cB, {
            extra: {
              12345: nc
            }
          }]
        }
        qB = cB.length
      }
      return fflate.zipSync(uc, {
        level: 0
      })
    }
    var Lu = nc(39190);
    class gs {
      static Export(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (!cB || 0 === cB.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Vc = Bc;
        Bc && 0 !== Bc.length || (Vc = cB.animations.map((cB => cB.name)));
        let Ic = null;
        for (const Pc of Vc) {
          const Bc = cB.getAnimationRange(Pc);
          Bc && (Ic = Ic ? new Lu.b("animation-range", Math.min(Ic.from, Bc.from), Math.max(Ic.to, Bc.to)) : Bc)
        }
        if (!Ic && (cB.animations.length > 0 && (Ic = cB.getAnimationRange(cB.animations[0].name)), !Ic)) throw new Error("No animation range found in skeleton");
        const rB = nc || 1 / (cB.animations[0]?.framePerSecond || 30),
          uc = this._BuildBoneHierarchy(cB, Vc);
        let sc = 0;
        for (const Pc of uc) Pc.positionKeys.length > 0 && (sc = Math.max(sc, Pc.positionKeys.length)), Pc.rotationKeys.length > 0 && (sc = Math.max(sc, Pc.rotationKeys.length));
        0 === sc && (sc = Math.floor((Ic.to - Ic.from) / rB) + 1);
        let Mc = "";
        return Mc += "HIERARCHY\n", Mc += this._ExportHierarchy(uc, 0), Mc += "MOTION\n", Mc += `Frames: ${sc}\n`, Mc += `Frame Time: ${rB.toFixed(6)}\n`, Mc += this._ExportMotionData(uc, sc, 0, Vc), Mc
      }
      static _BuildBoneHierarchy(cB, Bc) {
        const nc = new Map,
          Vc = [];
        for (const Ic of cB.bones) {
          const cB = {
            bone: Ic,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          nc.set(Ic, cB)
        }
        for (const Ic of cB.bones) {
          const cB = nc.get(Ic);
          if (Ic.animations.length > 0)
            for (const nc of Ic.animations) Bc.includes(nc.name) && ("position" === nc.targetProperty ? (cB.hasPositionChannels = !0, cB.positionKeys.push(...nc.getKeys())) : "rotationQuaternion" === nc.targetProperty && (cB.hasRotationChannels = !0, cB.rotationKeys.push(...nc.getKeys())));
          if (Ic.getParent()) {
            const Bc = nc.get(Ic.getParent());
            Bc && Bc.children.push(cB)
          } else Vc.push(cB)
        }
        return Vc
      }
      static _ExportHierarchy(cB, Bc) {
        let nc = "";
        const Vc = "    ".repeat(Bc);
        for (const Ic of cB) {
          const cB = Ic.bone;
          if (this._IsEndSite(Ic)) {
            nc += `${Vc}End Site\n`, nc += `${Vc}{\n`;
            const Bc = this._GetBoneOffset(cB);
            nc += `${Vc}    OFFSET ${Bc.x.toFixed(6)} ${Bc.y.toFixed(6)} ${Bc.z.toFixed(6)}\n`, nc += `${Vc}}\n`
          } else {
            nc += `${0===Bc?"ROOT":`${Vc}JOINT`} ${cB.name}\n`, nc += `${Vc}{\n`;
            const rB = this._GetBoneOffset(cB);
            nc += `${Vc}    OFFSET ${rB.x.toFixed(6)} ${rB.y.toFixed(6)} ${rB.z.toFixed(6)}\n`;
            const uc = [];
            Ic.hasPositionChannels && uc.push("Xposition", "Yposition", "Zposition"), Ic.hasRotationChannels && uc.push("Zrotation", "Xrotation", "Yrotation"), uc.length > 0 && (nc += `${Vc}    CHANNELS ${uc.length} ${uc.join(" ")}\n`), Ic.children.length > 0 && (nc += this._ExportHierarchy(Ic.children, Bc + 1)), nc += `${Vc}}\n`
          }
        }
        return nc
      }
      static _IsEndSite(cB) {
        return 0 === cB.children.length
      }
      static _GetBoneOffset(cB) {
        try {
          if (!cB.getParent()) return cB.getRestMatrix().getTranslation();
          return cB.getLocalMatrix().getTranslation()
        } catch (Bc) {
          return Vc.KV.Zero()
        }
      }
      static _ExportMotionData(cB, Bc, nc, Vc) {
        let Ic = "";
        for (let rB = 0; rB < Bc; rB++) {
          const Bc = [];
          this._CollectFrameValues(cB, rB + nc, Bc, Vc), Ic += Bc.map((cB => cB.toFixed(6))).join(" ") + "\n"
        }
        return Ic
      }
      static _CollectFrameValues(cB, Bc, nc, Vc) {
        for (const Ic of cB)
          if (!this._IsEndSite(Ic)) {
            if (Ic.hasPositionChannels) {
              const cB = this._GetPositionAtFrameIndex(Ic.positionKeys, Bc);
              nc.push(cB.x, cB.y, cB.z)
            }
            if (Ic.hasRotationChannels) {
              const cB = this._GetRotationAtFrameIndex(Ic.rotationKeys, Bc),
                Vc = this._QuaternionToEuler(cB);
              nc.push(Vc.z, Vc.x, Vc.y)
            }
            Ic.children.length > 0 && this._CollectFrameValues(Ic.children, Bc, nc, Vc)
          }
      }
      static _GetPositionAtFrameIndex(cB, Bc) {
        if (0 === cB.length) return Vc.KV.Zero();
        return cB[Math.max(0, Math.min(Bc, cB.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(cB, Bc) {
        if (0 === cB.length) return Vc.Quaternion.Identity();
        return cB[Math.max(0, Math.min(Bc, cB.length - 1))].value.clone()
      }
      static _QuaternionToEuler(cB) {
        const Bc = new Vc.Matrix;
        cB.toRotationMatrix(Bc);
        const nc = Bc.m;
        let rB, uc, sc;
        const Mc = Math.sqrt(nc[0] * nc[0] + nc[1] * nc[1]);
        return Mc > Dn.c ? (rB = Math.atan2(nc[6], nc[10]), uc = Math.atan2(-nc[2], Mc), sc = Math.atan2(nc[1], nc[0])) : (rB = Math.atan2(-nc[9], nc[5]), uc = Math.atan2(-nc[2], Mc), sc = 0), new Vc.KV(Ic.Tools.ToDegrees(rB), Ic.Tools.ToDegrees(uc), Ic.Tools.ToDegrees(sc))
      }
    }

    function Uu(cB) {
      return "string" === typeof cB?.name
    }
    const bs = Symbol("__xml:meta$__"),
      Zu = Symbol("__xml:name$__");

    function Qu(cB, Bc) {
      Object.prototype.hasOwnProperty.call(cB.metadata, bs) || (cB.metadata[bs] = []), cB.metadata[bs].push(Bc)
    }

    function Cu(cB) {
      return (Bc, nc) => {
        Bc[Zu] = cB
      }
    }

    function vs() {
      return (cB, Bc) => Qu(Bc, {
        kind: "none",
        prop: String(Bc.name),
        ignore: !0
      })
    }

    function Du(cB) {
      return (Bc, nc) => Qu(nc, {
        kind: "attr",
        prop: String(nc.name),
        ...cB
      })
    }

    function Nu(cB) {
      return (Bc, nc) => Qu(nc, {
        kind: "elem",
        prop: String(nc.name),
        ...cB
      })
    }

    function Eu(cB) {
      const Bc = "function" === typeof cB ? cB : cB?.constructor,
        nc = Bc?.[Symbol.metadata];
      if (!nc) return [];
      const Vc = [];
      let Ic = nc;
      for (; Ic;) Object.prototype.hasOwnProperty.call(Ic, bs) && Vc.push(...Ic[bs]), Ic = Object.getPrototypeOf(Ic);
      return Vc
    }

    function ou(cB) {
      const Bc = cB?.constructor?.[Zu];
      return Bc || void 0
    }

    function Wu(cB) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(cB)
    }

    function wu(cB) {
      if (Uu(cB)) return cB;
      const Bc = (cB ?? "").trim();
      if (!Bc) return {
        name: ""
      };
      const nc = Bc.indexOf(":");
      if (-1 === nc) return {
        name: Bc
      };
      if (-1 !== Bc.indexOf(":", nc + 1)) return {
        name: Bc
      };
      const Vc = Bc.slice(0, nc),
        Ic = Bc.slice(nc + 1);
      return Wu(Vc) && Wu(Ic) ? {
        ns: Vc,
        name: Ic
      } : {
        name: Bc
      }
    }

    function ks(cB, Bc) {
      return Bc ? `${Bc}:${cB}` : cB
    }
    const Xu = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Hu = Object.freeze({
        number: Xu
      });

    function Fu(cB) {
      const Bc = cB?.eps ?? Xu.eps;
      return {
        eps: Bc,
        maxDecimalsCap: cB?.maxDecimalsCap ?? Xu.maxDecimalsCap,
        trimTrailingZeros: cB?.trimTrailingZeros ?? Xu.trimTrailingZeros,
        fixedDecimals: cB?.fixedDecimals,
        allowScientific: cB?.allowScientific ?? Xu.allowScientific,
        snapNearZero: cB?.snapNearZero ?? Xu.snapNearZero,
        zeroThreshold: cB?.zeroThreshold ?? Bc,
        perAttributeEps: cB?.perAttributeEps
      }
    }

    function Ju(cB) {
      return {
        number: Fu(cB?.number)
      }
    }
    class jsc {
      constructor(cB) {
        if (this.o = cB, this._o = cB.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(cB) {
        if (!Number.isFinite(cB)) throw new Error(`Cannot format non-finite number: ${cB}`);
        const Bc = this._o,
          nc = this._clampInt(Bc.maxDecimalsCap ?? 15, 0, 20),
          Vc = Bc.trimTrailingZeros ?? !0,
          Ic = Bc.snapNearZero ?? !0,
          rB = Bc.zeroThreshold ?? Bc.eps,
          uc = 1 / Bc.eps;
        let sc, Mc = Math.round(cB * uc) / uc;
        if (Object.is(Mc, -0) && (Mc = 0), Ic && Math.abs(Mc) <= rB && (Mc = 0), sc = void 0 !== Bc.fixedDecimals ? this._clampInt(Bc.fixedDecimals, 0, nc) : this._clampInt(Math.ceil(-Math.log10(Bc.eps)), 0, nc), Bc.allowScientific, 0 === sc) return String(Math.trunc(Mc));
        let Pc = Mc.toFixed(sc);
        if (Vc && void 0 === Bc.fixedDecimals && (Pc = Pc.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Pc)) throw new Error(`Scientific notation not allowed in XML output: ${Pc}`);
        return Pc
      }
      _clampInt(cB, Bc, nc) {
        return Number.isFinite(cB) ? (cB = Math.trunc(cB), Math.max(Bc, Math.min(nc, cB))) : Bc
      }
    }

    function Ru(cB) {
      return cB instanceof Date
    }

    function is(cB) {
      return "string" === typeof cB
    }

    function Ku(cB) {
      return "string" === typeof cB || "number" === typeof cB || "boolean" === typeof cB || "bigint" === typeof cB || Ru(cB)
    }

    function xs(cB) {
      return "number" === typeof cB || "boolean" === typeof cB || "bigint" === typeof cB || Ru(cB)
    }
    class du {
      constructor(cB, Bc) {
        this._ns = new Map, this._prefixCount = 0, this._builder = cB, this._format = Ju(Bc), this._nFmt = new jsc(this._format)
      }
      withNamespace() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        for (const Vc of Bc) this._assignNamespace(Vc);
        return this
      }
      serialize(cB, Bc) {
        if (!(Bc = Bc ?? ou(cB))) throw new Error("can not find name for given object");
        const nc = wu(Bc);
        nc.ns && this._assignNamespace(nc.ns, "xmlns"), this._gatherNamespaces(cB, new WeakSet);
        const Vc = this._builder.ele(null, nc.name);
        for (const [Ic, rB] of Array.from(this._ns.entries())) Vc.att("xmlns", rB, Ic);
        this._writeObjectContent(Vc, cB, (new WeakSet).add(cB)), this._builder.end()
      }
      _writeObject(cB, Bc, nc) {
        if (nc.has(Bc)) return;
        if (nc.add(Bc), Array.isArray(Bc)) {
          for (const Vc of Bc) xs(Vc) || (is(Vc) ? this._builder.text(Vc) : this._writeObject(cB, Vc, nc));
          return
        }
        const Vc = ou(Bc);
        if (!Vc) return;
        const Ic = wu(Vc),
          rB = this._getPrefix(Ic),
          uc = ks(Ic.name, rB);
        cB.ele(null, uc), this._writeObjectContent(cB, Bc, nc), this._builder.end()
      }
      _getPrefix(cB) {
        if (cB.ns) {
          const Bc = this._ns.get(cB.ns.toLowerCase());
          if ("xmlns" !== Bc) return Bc
        }
      }
      _writeObjectContent(cB, Bc, nc) {
        const Vc = Eu(Bc) ?? [],
          Ic = new Map;
        for (const uc of Vc) {
          const cB = Ic.get(uc.prop) ?? [];
          cB.push(uc), Ic.set(uc.prop, cB)
        }
        const rB = Object.keys(Bc).sort(((cB, Bc) => {
          const nc = (Ic.get(cB) ?? []).some((cB => "attr" === cB.kind));
          return nc === (Ic.get(Bc) ?? []).some((cB => "attr" === cB.kind)) ? 0 : nc ? -1 : 1
        }));
        for (const uc of rB) {
          const Vc = Bc[uc];
          if (null === Vc || void 0 === Vc) continue;
          const rB = Ic.get(uc);
          if (rB) {
            if (rB.some((cB => !0 === cB.ignore || "none" === cB.kind))) continue;
            for (const Bc of rB) {
              const nc = Bc.name ?? Bc.prop.toLowerCase();
              if (nc) switch (Bc.kind) {
                case "attr": {
                  let Ic = null;
                  if ("number" === typeof Vc && this._nFmt && (Ic = this._nFmt.toString(Vc)), Bc.formatter) {
                    Ic = new Bc.formatter(this._format).toString(Vc)
                  }
                  if (Ic = Ic ?? Vc.toString(), Ic) {
                    const Bc = wu(nc),
                      Vc = this._getPrefix(Bc),
                      rB = ks(Bc.name, Vc);
                    cB.att(null, rB, Ic)
                  }
                  break
                }
              }
            }
          } else xs(Vc) || (is(Vc) ? this._builder.text(Vc) : this._writeObject(cB, Vc, nc))
        }
      }
      _gatherNamespaces(cB, Bc) {
        if (Bc.has(cB)) return;
        if (Bc.add(cB), Array.isArray(cB)) {
          for (const nc of cB) Ku(nc) || this._gatherNamespaces(nc, Bc);
          return
        }
        const nc = ou(cB);
        nc && this._assignNamespace(nc);
        const Vc = Eu(cB) ?? [],
          Ic = new Map;
        for (const uc of Vc) {
          const cB = Ic.get(uc.prop) ?? [];
          cB.push(uc), Ic.set(uc.prop, cB)
        }
        const rB = [];
        for (const uc of Object.keys(cB)) {
          const Bc = cB[uc];
          if (null === Bc || void 0 === Bc) continue;
          const nc = Ic.get(uc);
          if (nc) {
            if (nc.some((cB => !0 === cB.ignore || "none" === cB.kind))) continue;
            for (const cB of nc) cB.name && this._assignNamespace(cB.name)
          }
          rB.push(Bc)
        }
        for (const uc of rB) Ku(uc) || this._gatherNamespaces(uc, Bc)
      }
      _assignNamespace(cB, Bc) {
        const nc = wu(cB);
        if (nc?.ns) {
          const cB = nc.ns.toLowerCase();
          this._ns.get(cB) || this._ns.set(cB, Bc ?? this._buildNsPrefix(cB))
        } else if ("xmlns" === Bc) {
          const cB = nc.name.toLowerCase();
          this._ns.get(cB) || this._ns.set(cB, Bc ?? this._buildNsPrefix(cB))
        }
      }
      _buildNsPrefix(cB) {
        let Bc, nc = !1;
        do {
          Bc = "ns" + this._prefixCount++;
          for (const cB of Array.from(this._ns.values()))
            if (cB === Bc) {
              nc = !0;
              break
            }
        } while (nc);
        return Bc
      }
    }
    class Au {}
    var Gu;
    Au.OpenTag = "<", Au.CloseTag = ">", Au.Slash = "/", Au.Question = "?", Au.Quote = '"', Au.Equal = "=", Au.Space = " ", Au.Semicolon = ":", Au.Dec = "<?xml", Au.Xml = "xml", Au.Xmlns = "xmlns", Au.Xsi = "xsi", Au.VersionKeyword = "version", Au.EncodingKeyword = "encoding", Au.StandaloneKeyword = "standalone",
      function(cB) {
        cB[cB.Declaration = 0] = "Declaration", cB[cB.Tag = 1] = "Tag", cB[cB.Attribute = 2] = "Attribute", cB[cB.Text = 3] = "Text"
      }(Gu || (Gu = {}));
    class cM {
      constructor(cB) {
        this._ctxStack = [], this._d = 0, this._w = cB
      }
      dec(cB, Bc, nc) {
        return this._w.write(Au.Dec), this._writeAttStr(Au.VersionKeyword, cB), Bc && this._writeAttStr(Au.EncodingKeyword, Bc), void 0 !== nc && this._writeAttStr(Au.StandaloneKeyword, nc ? "yes" : "no"), this._w.write(Au.Question, Au.CloseTag), this
      }
      att(cB, Bc, nc) {
        const Vc = this._peekContext();
        if (!Vc) throw new Error("att() without open element");
        if (Vc.closed) throw new Error(`att() after start tag closed for <${Vc.name}>`);
        if (this._isXmlnsDecl(cB, Bc)) {
          if (Bc === Au.Xmlns) Vc.defaultNs = nc, this._registerNamespace(Vc, "", nc), this._writeAttStr(Au.Xmlns, nc);
          else if (cB) this._registerNamespace(Vc, Bc, nc), this._writeAttStr(`${cB}:${Bc}`, nc);
          else {
            const cB = Bc.slice(6);
            this._registerNamespace(Vc, cB, nc), this._writeAttStr(Bc, nc)
          }
          return Vc.lastToken = Gu.Attribute, this
        }
        let Ic = Bc;
        if (cB) {
          Ic = `${this._ensurePrefixDeclared(Vc,cB)}:${Bc}`
        }
        return Vc.lastToken = Gu.Attribute, this._writeAttStr(Ic, nc), this
      }
      ele(cB, Bc) {
        const nc = this._peekContext();
        nc && this._closeOpenTagIfNeeded(nc);
        let Vc = Bc;
        if (cB) {
          Vc = `${this._lookupPrefix(cB)??cB}:${Bc}`
        }
        return this._pushContext(Vc, ++this._d), this._w.write(Au.OpenTag, Vc), this
      }
      text(cB) {
        const Bc = this._peekContext();
        if (!Bc) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Bc), Bc.lastToken = Gu.Text, this._w.write(this._escText(cB)), this
      }
      end() {
        const cB = this._popContext();
        return cB && (this._d--, cB.closed ? this._w.write(Au.OpenTag, Au.Slash, cB.name, Au.CloseTag) : this._w.write(Au.Slash, Au.CloseTag)), this
      }
      _pushContext(cB, Bc) {
        const nc = new cM.Context(cB, Bc);
        return this._ctxStack.push(nc), nc
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
      _writeAttStr(cB, Bc) {
        this._w.write(Au.Space, cB, Au.Equal, Au.Quote, this._escAttr(Bc), Au.Quote)
      }
      _lookupPrefix(cB) {
        let Bc = this._ctxStack.length - 1;
        if (Bc >= 0)
          do {
            const nc = this._ctxStack[Bc--],
              Vc = nc.ns2prefix?.get(cB);
            if (Vc) return Vc
          } while (Bc >= 0)
      }
      _escText(cB) {
        return cB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(cB) {
        return this._escText(cB).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(cB, Bc) {
        if (cB) return cB === Au.Xmlns;
        const nc = Bc.length,
          Vc = Au.Xmlns.length;
        return nc >= Vc && (Bc.startsWith(Au.Xmlns) && (Bc.length == Vc || Bc[Vc] == Au.Semicolon))
      }
      _registerNamespace(cB, Bc, nc) {
        if (Bc === Au.Xml || Bc === Au.Xmlns) throw new Error(`reserved prefix '${Bc}'`);
        const Vc = cB.prefix2ns.get(Bc);
        if (Vc && Vc !== nc) throw new Error(`prefix '${Bc}' already bound to a different namespace`);
        cB.ns2prefix.get(nc) || cB.ns2prefix.set(nc, Bc), cB.prefix2ns.set(Bc, nc)
      }
      _allocPrefix(cB) {
        let Bc = 1;
        for (;;) {
          const nc = "ns" + Bc++;
          if (!cB.prefix2ns.has(nc)) return nc
        }
      }
      _ensurePrefixDeclared(cB, Bc) {
        const nc = this._lookupPrefix(Bc);
        if (nc) return nc;
        if (cB.closed) throw new Error(`can not declare namespace after start tag closed for <${cB.name}>`);
        const Vc = this._allocPrefix(cB);
        return this._writeAttStr(`${Au.Xmlns}:${Vc}`, Bc), this._registerNamespace(cB, Vc, Bc), Vc
      }
      _closeOpenTagIfNeeded(cB) {
        cB.closed || (this._w.write(Au.CloseTag), cB.closed = !0)
      }
    }
    cM.Context = class {
      constructor(cB, Bc) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = cB, this.depth = Bc
      }
    };
    class Bs {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        if (0 === Bc.length) return this;
        const Vc = Bc.join("");
        return this._chunks.push(Vc), this.count += Vc.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class ns {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = cB, this._opts = Bc, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        if (0 === Bc.length) return this;
        const Vc = Bc.join("");
        if (0 === Vc.length) return this;
        this._pending += Vc, this._pendingChars += Vc.length;
        const Ic = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Ic && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const cB = this._encoder.encode(this._pending);
        return this._sink.push(cB), this.count += cB.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Vs = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Is = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var rM, us;
    ! function(cB) {
      cB.micron = "micron", cB.millimeter = "millimeter", cB.centimeter = "centimeter", cB.inch = "inch", cB.foot = "foot", cB.meter = "meter"
    }(rM || (rM = {})),
    function(cB) {
      cB.model = "model", cB.solidsupport = "solidsupport", cB.support = "support", cB.surface = "surface", cB.other = "other"
    }(us || (us = {}));
    const ss = "http://schemas.openxmlformats.org/package/2006/content-types",
      Ms = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Ps;
    ! function(cB) {
      cB.Relationships = "application/vnd.openxmlformats-package.relationships+xml", cB.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", cB.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", cB.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", cB.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", cB.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", cB.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", cB.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", cB.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", cB.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", cB.Png = "image/png", cB.Jpeg = "image/jpeg", cB.Tiff = "image/tiff", cB.Xml = "application/xml"
    }(Ps || (Ps = {}));
    const qM = "_rels/",
      Os = "3D/",
      Ts = "3dmodel.model",
      fs = ".rels",
      mM = "[Content_Types].xml";
    class es {
      static IsKnown(cB) {
        return es.Known.has(cB)
      }
      static IsThreeDimModel(cB) {
        return cB === es.ThreeDimModel
      }
    }
    es.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", es.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", es.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", es.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", es.Known = new Set([es.ThreeDimModel, es.Thumbnail, es.PrintTicket, es.MustPreserve]);
    let tM = (() => {
        let cB, Bc, nc = [Cu({
            ns: ss,
            name: "Types"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfContentTypes"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      Ss = (() => {
        let cB, Bc, nc, Vc, Ic = [Cu({
            ns: ss,
            name: "Default"
          })],
          rB = [],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [];
        Bc = class {
          constructor(cB, Bc) {
            this.ext = (0, Lc.k)(this, uc, void 0), this.ct = ((0, Lc.k)(this, sc), (0, Lc.k)(this, Mc, void 0)), (0, Lc.k)(this, Pc), this.ext = cB, this.ct = Bc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfContentType"), (() => {
          const qB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: {
              ns: ss,
              name: "Extension"
            }
          })], Vc = [Du({
            name: {
              ns: ss,
              name: "ContentType"
            }
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: cB => "ext" in cB,
              get: cB => cB.ext,
              set: (cB, Bc) => {
                cB.ext = Bc
              }
            },
            metadata: qB
          }, uc, sc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: cB => "ct" in cB,
              get: cB => cB.ct,
              set: (cB, Bc) => {
                cB.ct = Bc
              }
            },
            metadata: qB
          }, Mc, Pc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Ic, {
            kind: "class",
            name: Bc.name,
            metadata: qB
          }, null, rB), Bc = cB.value, qB && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qB
          }), (0, Lc.k)(Bc, rB)
        })(), Bc
      })(),
      yM = (() => {
        let cB, Bc, nc = [Cu({
            ns: Ms,
            name: "Relationships"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfRelationships"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      zM = (() => {
        let cB, Bc, nc, Vc, Ic, rB = [Cu({
            ns: Ms,
            name: "Relationship"
          })],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        Bc = class {
          constructor(cB, Bc, nc) {
            this.id = (0, Lc.k)(this, sc, void 0), this.type = ((0, Lc.k)(this, Mc), (0, Lc.k)(this, Pc, void 0)), this.target = ((0, Lc.k)(this, qB), (0, Lc.k)(this, Oc, void 0)), (0, Lc.k)(this, Tc), this.id = cB, this.type = Bc, this.target = nc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfRelationship"), (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "Id"
          })], Vc = [Du({
            name: "Type"
          })], Ic = [Du({
            name: "Target"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: cB => "id" in cB,
              get: cB => cB.id,
              set: (cB, Bc) => {
                cB.id = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: cB => "type" in cB,
              get: cB => cB.type,
              set: (cB, Bc) => {
                cB.type = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: cB => "target" in cB,
              get: cB => cB.target,
              set: (cB, Bc) => {
                cB.target = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), (0, Lc.g)(null, cB = {
            value: Bc
          }, rB, {
            kind: "class",
            name: Bc.name,
            metadata: fc
          }, null, uc), Bc = cB.value, fc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          }), (0, Lc.k)(Bc, uc)
        })(), Bc
      })();
    class ps {
      constructor(cB, Bc, nc) {
        this.contentTypes = cB, this.relationships = Bc, this.model = nc
      }
    }
    class hs {
      static Zero() {
        return new hs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(cB) {
        this.values = cB
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class aM {
      constructor(cB) {
        this.o = cB, this._f = new jsc(cB)
      }
      toString(cB) {
        return cB.values.map((cB => this._f.toString(cB))).join(" ")
      }
    }
    let ls = (() => {
        let cB, Bc, nc, Vc, Ic, rB = [Cu({
            ns: Vs,
            name: "model"
          })],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        Bc = class {
          constructor() {
            this.unit = (0, Lc.k)(this, sc, rM.millimeter), this.requiredextensions = ((0, Lc.k)(this, Mc), (0, Lc.k)(this, Pc, void 0)), this.recommendedextensions = ((0, Lc.k)(this, qB), (0, Lc.k)(this, Oc, void 0)), this.metadata = (0, Lc.k)(this, Tc)
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfModel"), (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "unit"
          })], Vc = [Du({
            name: "requiredextensions"
          })], Ic = [Du({
            name: "recommendedextensions"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: cB => "unit" in cB,
              get: cB => cB.unit,
              set: (cB, Bc) => {
                cB.unit = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: cB => "requiredextensions" in cB,
              get: cB => cB.requiredextensions,
              set: (cB, Bc) => {
                cB.requiredextensions = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: cB => "recommendedextensions" in cB,
              get: cB => cB.recommendedextensions,
              set: (cB, Bc) => {
                cB.recommendedextensions = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), (0, Lc.g)(null, cB = {
            value: Bc
          }, rB, {
            kind: "class",
            name: Bc.name,
            metadata: fc
          }, null, uc), Bc = cB.value, fc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          })
        })(), Bc.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Lc.k)(Bc, uc), Bc
      })(),
      Ys = (() => {
        let cB, Bc, nc, Vc, Ic, rB = [Cu({
            ns: Vs,
            name: "meta"
          })],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        Bc = class {
          constructor(cB, Bc, nc, Vc) {
            this.name = (0, Lc.k)(this, sc, void 0), this.preserve = ((0, Lc.k)(this, Mc), (0, Lc.k)(this, Pc, void 0)), this.type = ((0, Lc.k)(this, qB), (0, Lc.k)(this, Oc, void 0)), this.value = (0, Lc.k)(this, Tc), this.name = cB, this.value = Bc, this.preserve = nc, this.type = Vc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfMeta"), (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "name"
          })], Vc = [Du({
            name: "preserve"
          })], Ic = [Du({
            name: "type"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: cB => "name" in cB,
              get: cB => cB.name,
              set: (cB, Bc) => {
                cB.name = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: cB => "preserve" in cB,
              get: cB => cB.preserve,
              set: (cB, Bc) => {
                cB.preserve = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: cB => "type" in cB,
              get: cB => cB.type,
              set: (cB, Bc) => {
                cB.type = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), (0, Lc.g)(null, cB = {
            value: Bc
          }, rB, {
            kind: "class",
            name: Bc.name,
            metadata: fc
          }, null, uc), Bc = cB.value, fc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          }), (0, Lc.k)(Bc, uc)
        })(), Bc
      })(),
      Ls = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "metadatagroup"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfMetadataGroup"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      gM = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "resources"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfResources"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      Us = (() => {
        let cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc = [Cu({
            ns: Vs,
            name: "object"
          })],
          qB = [],
          Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [],
          Sc = [],
          yB = [],
          zB = [],
          pc = [],
          hc = [],
          aB = [],
          lc = [],
          Yc = [];
        Bc = class {
          constructor(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : us.model;
            this.id = (0, Lc.k)(this, Oc, void 0), this.type = ((0, Lc.k)(this, Tc), (0, Lc.k)(this, fc, void 0)), this.thumbnail = ((0, Lc.k)(this, mB), (0, Lc.k)(this, ec, void 0)), this.partnumber = ((0, Lc.k)(this, tB), (0, Lc.k)(this, Sc, void 0)), this.name = ((0, Lc.k)(this, yB), (0, Lc.k)(this, zB, void 0)), this.pid = ((0, Lc.k)(this, pc), (0, Lc.k)(this, hc, void 0)), this.pindex = ((0, Lc.k)(this, aB), (0, Lc.k)(this, lc, void 0)), this.metadatagroup = (0, Lc.k)(this, Yc), this.id = cB, this.type = Bc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfObject"), (() => {
          const gB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "id"
          })], Vc = [Du({
            name: "type"
          })], Ic = [Du({
            name: "thumbnail"
          })], rB = [Du({
            name: "partnumber"
          })], uc = [Du({
            name: "name"
          })], sc = [Du({
            name: "pid"
          })], Mc = [Du({
            name: "pindex"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: cB => "id" in cB,
              get: cB => cB.id,
              set: (cB, Bc) => {
                cB.id = Bc
              }
            },
            metadata: gB
          }, Oc, Tc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: cB => "type" in cB,
              get: cB => cB.type,
              set: (cB, Bc) => {
                cB.type = Bc
              }
            },
            metadata: gB
          }, fc, mB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: cB => "thumbnail" in cB,
              get: cB => cB.thumbnail,
              set: (cB, Bc) => {
                cB.thumbnail = Bc
              }
            },
            metadata: gB
          }, ec, tB), (0, Lc.g)(null, null, rB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: cB => "partnumber" in cB,
              get: cB => cB.partnumber,
              set: (cB, Bc) => {
                cB.partnumber = Bc
              }
            },
            metadata: gB
          }, Sc, yB), (0, Lc.g)(null, null, uc, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: cB => "name" in cB,
              get: cB => cB.name,
              set: (cB, Bc) => {
                cB.name = Bc
              }
            },
            metadata: gB
          }, zB, pc), (0, Lc.g)(null, null, sc, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: cB => "pid" in cB,
              get: cB => cB.pid,
              set: (cB, Bc) => {
                cB.pid = Bc
              }
            },
            metadata: gB
          }, hc, aB), (0, Lc.g)(null, null, Mc, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: cB => "pindex" in cB,
              get: cB => cB.pindex,
              set: (cB, Bc) => {
                cB.pindex = Bc
              }
            },
            metadata: gB
          }, lc, Yc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Pc, {
            kind: "class",
            name: Bc.name,
            metadata: gB
          }, null, qB), Bc = cB.value, gB && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gB
          }), (0, Lc.k)(Bc, qB)
        })(), Bc
      })(),
      bM = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "mesh"
          })],
          Vc = [];
        Bc = class {
          constructor(cB, Bc) {
            this.vertices = cB ?? new Zs, this.triangles = Bc ?? new Cs
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfMesh"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      Zs = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "vertices"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfVertices"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      Qs = (() => {
        let cB, Bc, nc, Vc, Ic, rB = [Cu({
            ns: Vs,
            name: "vertex"
          })],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        Bc = class {
          constructor() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Lc.k)(this, sc, void 0), this.y = ((0, Lc.k)(this, Mc), (0, Lc.k)(this, Pc, void 0)), this.z = ((0, Lc.k)(this, qB), (0, Lc.k)(this, Oc, void 0)), (0, Lc.k)(this, Tc), this.x = cB, this.y = Bc, this.z = nc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfVertex"), (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "x"
          })], Vc = [Du({
            name: "y"
          })], Ic = [Du({
            name: "z"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: cB => "x" in cB,
              get: cB => cB.x,
              set: (cB, Bc) => {
                cB.x = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: cB => "y" in cB,
              get: cB => cB.y,
              set: (cB, Bc) => {
                cB.y = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: cB => "z" in cB,
              get: cB => cB.z,
              set: (cB, Bc) => {
                cB.z = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), (0, Lc.g)(null, cB = {
            value: Bc
          }, rB, {
            kind: "class",
            name: Bc.name,
            metadata: fc
          }, null, uc), Bc = cB.value, fc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          }), (0, Lc.k)(Bc, uc)
        })(), Bc
      })(),
      Cs = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "triangles"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfTriangles"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      vM = (() => {
        let cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc = [Cu({
            ns: Vs,
            name: "triangle"
          })],
          qB = [],
          Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [],
          Sc = [],
          yB = [],
          zB = [],
          pc = [],
          hc = [],
          aB = [],
          lc = [],
          Yc = [];
        Bc = class {
          constructor(cB, Bc, nc) {
            this.v1 = (0, Lc.k)(this, Oc, void 0), this.v2 = ((0, Lc.k)(this, Tc), (0, Lc.k)(this, fc, void 0)), this.v3 = ((0, Lc.k)(this, mB), (0, Lc.k)(this, ec, void 0)), this.p1 = ((0, Lc.k)(this, tB), (0, Lc.k)(this, Sc, void 0)), this.p2 = ((0, Lc.k)(this, yB), (0, Lc.k)(this, zB, void 0)), this.p3 = ((0, Lc.k)(this, pc), (0, Lc.k)(this, hc, void 0)), this.pid = ((0, Lc.k)(this, aB), (0, Lc.k)(this, lc, void 0)), (0, Lc.k)(this, Yc), this.v1 = cB, this.v2 = Bc, this.v3 = nc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfTriangle"), (() => {
          const gB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "v1"
          })], Vc = [Du({
            name: "v2"
          })], Ic = [Du({
            name: "v3"
          })], rB = [Du({
            name: "p1"
          })], uc = [Du({
            name: "p2"
          })], sc = [Du({
            name: "p3"
          })], Mc = [Du({
            name: "pid"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: cB => "v1" in cB,
              get: cB => cB.v1,
              set: (cB, Bc) => {
                cB.v1 = Bc
              }
            },
            metadata: gB
          }, Oc, Tc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: cB => "v2" in cB,
              get: cB => cB.v2,
              set: (cB, Bc) => {
                cB.v2 = Bc
              }
            },
            metadata: gB
          }, fc, mB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: cB => "v3" in cB,
              get: cB => cB.v3,
              set: (cB, Bc) => {
                cB.v3 = Bc
              }
            },
            metadata: gB
          }, ec, tB), (0, Lc.g)(null, null, rB, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: cB => "p1" in cB,
              get: cB => cB.p1,
              set: (cB, Bc) => {
                cB.p1 = Bc
              }
            },
            metadata: gB
          }, Sc, yB), (0, Lc.g)(null, null, uc, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: cB => "p2" in cB,
              get: cB => cB.p2,
              set: (cB, Bc) => {
                cB.p2 = Bc
              }
            },
            metadata: gB
          }, zB, pc), (0, Lc.g)(null, null, sc, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: cB => "p3" in cB,
              get: cB => cB.p3,
              set: (cB, Bc) => {
                cB.p3 = Bc
              }
            },
            metadata: gB
          }, hc, aB), (0, Lc.g)(null, null, Mc, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: cB => "pid" in cB,
              get: cB => cB.pid,
              set: (cB, Bc) => {
                cB.pid = Bc
              }
            },
            metadata: gB
          }, lc, Yc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Pc, {
            kind: "class",
            name: Bc.name,
            metadata: gB
          }, null, qB), Bc = cB.value, gB && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gB
          }), (0, Lc.k)(Bc, qB)
        })(), Bc
      })(),
      Ds = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "components"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfComponents"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      Ns = (() => {
        let cB, Bc, nc, Vc, Ic = [Cu({
            ns: Vs,
            name: "component"
          })],
          rB = [],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [];
        Bc = class {
          constructor(cB, Bc) {
            this.objectid = (0, Lc.k)(this, uc, void 0), this.transform = ((0, Lc.k)(this, sc), (0, Lc.k)(this, Mc, void 0)), (0, Lc.k)(this, Pc), this.objectid = cB, this.transform = Bc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfComponent"), (() => {
          const qB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "objectid"
          })], Vc = [Du({
            name: "transform",
            formatter: aM
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: cB => "objectid" in cB,
              get: cB => cB.objectid,
              set: (cB, Bc) => {
                cB.objectid = Bc
              }
            },
            metadata: qB
          }, uc, sc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: cB => "transform" in cB,
              get: cB => cB.transform,
              set: (cB, Bc) => {
                cB.transform = Bc
              }
            },
            metadata: qB
          }, Mc, Pc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Ic, {
            kind: "class",
            name: Bc.name,
            metadata: qB
          }, null, rB), Bc = cB.value, qB && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qB
          }), (0, Lc.k)(Bc, rB)
        })(), Bc
      })(),
      Es = (() => {
        let cB, Bc, nc, Vc = [Cu({
            ns: Vs,
            name: "basematerials"
          })],
          Ic = [],
          rB = [],
          uc = [];
        Bc = class {
          constructor(cB) {
            this.id = (0, Lc.k)(this, rB, void 0), this.base = ((0, Lc.k)(this, uc), []), this.id = cB
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfBaseMaterials"), (() => {
          const sc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "id"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: cB => "id" in cB,
              get: cB => cB.id,
              set: (cB, Bc) => {
                cB.id = Bc
              }
            },
            metadata: sc
          }, rB, uc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Vc, {
            kind: "class",
            name: Bc.name,
            metadata: sc
          }, null, Ic), Bc = cB.value, sc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sc
          }), (0, Lc.k)(Bc, Ic)
        })(), Bc
      })(),
      os = (() => {
        let cB, Bc, nc, Vc, Ic = [Cu({
            ns: Vs,
            name: "base"
          })],
          rB = [],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [];
        Bc = class {
          constructor(cB, Bc) {
            this.name = (0, Lc.k)(this, uc, void 0), this.displaycolor = ((0, Lc.k)(this, sc), (0, Lc.k)(this, Mc, void 0)), (0, Lc.k)(this, Pc), this.name = cB, this.displaycolor = Bc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfBase"), (() => {
          const qB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "name"
          })], Vc = [Du({
            name: "displaycolor"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: cB => "name" in cB,
              get: cB => cB.name,
              set: (cB, Bc) => {
                cB.name = Bc
              }
            },
            metadata: qB
          }, uc, sc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: cB => "displaycolor" in cB,
              get: cB => cB.displaycolor,
              set: (cB, Bc) => {
                cB.displaycolor = Bc
              }
            },
            metadata: qB
          }, Mc, Pc), (0, Lc.g)(null, cB = {
            value: Bc
          }, Ic, {
            kind: "class",
            name: Bc.name,
            metadata: qB
          }, null, rB), Bc = cB.value, qB && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qB
          }), (0, Lc.k)(Bc, rB)
        })(), Bc
      })(),
      Ws = (() => {
        let cB, Bc, nc = [Cu({
            ns: Vs,
            name: "build"
          })],
          Vc = [];
        Bc = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfBuild"), (() => {
          const Ic = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Lc.g)(null, cB = {
            value: Bc
          }, nc, {
            kind: "class",
            name: Bc.name,
            metadata: Ic
          }, null, Vc), Bc = cB.value, Ic && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ic
          }), (0, Lc.k)(Bc, Vc)
        })(), Bc
      })(),
      ws = (() => {
        let cB, Bc, nc, Vc, Ic, rB = [Cu({
            ns: Vs,
            name: "item"
          })],
          uc = [],
          sc = [],
          Mc = [],
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        Bc = class {
          constructor(cB, Bc, nc) {
            this.objectid = (0, Lc.k)(this, sc, void 0), this.transform = ((0, Lc.k)(this, Mc), (0, Lc.k)(this, Pc, void 0)), this.partnumber = ((0, Lc.k)(this, qB), (0, Lc.k)(this, Oc, void 0)), this.metadatagroup = (0, Lc.k)(this, Tc), this.objectid = cB, this.transform = Bc, this.partnumber = nc
          }
        };
        return (0, Lc.n)(Bc, "ThreeMfItem"), (() => {
          const fc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          nc = [Du({
            name: "objectid"
          })], Vc = [Du({
            name: "transform",
            formatter: aM
          })], Ic = [Du({
            name: "partnumber"
          })], (0, Lc.g)(null, null, nc, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: cB => "objectid" in cB,
              get: cB => cB.objectid,
              set: (cB, Bc) => {
                cB.objectid = Bc
              }
            },
            metadata: fc
          }, sc, Mc), (0, Lc.g)(null, null, Vc, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: cB => "transform" in cB,
              get: cB => cB.transform,
              set: (cB, Bc) => {
                cB.transform = Bc
              }
            },
            metadata: fc
          }, Pc, qB), (0, Lc.g)(null, null, Ic, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: cB => "partnumber" in cB,
              get: cB => cB.partnumber,
              set: (cB, Bc) => {
                cB.partnumber = Bc
              }
            },
            metadata: fc
          }, Oc, Tc), (0, Lc.g)(null, cB = {
            value: Bc
          }, rB, {
            kind: "class",
            name: Bc.name,
            metadata: fc
          }, null, uc), Bc = cB.value, fc && Object.defineProperty(Bc, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fc
          }), (0, Lc.k)(Bc, uc)
        })(), Bc
      })();
    class kM {
      constructor(cB, Bc) {
        this._object = new Us(cB, Bc)
      }
      withName(cB) {
        return this._object.name = cB, this
      }
      withThumbnail(cB) {
        return this._object.thumbnail = cB, this
      }
      withProperty(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = cB, this._object.id = Bc, this
      }
      build() {
        return this._object
      }
      reset(cB, Bc) {
        this._object = new Us(cB, Bc)
      }
    }
    class Xs extends kM {
      constructor(cB) {
        super(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : us.model), this._object.content = new Ds
      }
      withComponent(cB, Bc) {
        return this._object.content.component.push(new Ns(cB, Bc)), this
      }
    }
    class Hs extends kM {
      constructor(cB) {
        super(cB, us.model)
      }
      withPostProcessHandlers(cB, Bc) {
        return this._vh = cB, this._th = Bc, this
      }
      withData(cB) {
        return this._object.content = this._buildMesh(cB), this
      }
      withMaterial(cB, Bc) {
        return this._object.pid = cB, this._object.pindex = Bc, this
      }
      _buildMesh(cB) {
        const Bc = this._buildVertices(cB.positions),
          nc = this._buildTriangle(cB.indices);
        return new bM(Bc, nc)
      }
      _buildVertices(cB) {
        const Bc = new Zs;
        if (cB)
          for (let nc = 0; nc < cB.length;) {
            const Vc = cB[nc++],
              Ic = cB[nc++],
              rB = cB[nc++];
            let uc = new Qs(Vc, Ic, rB);
            this._vh && (uc = this._vh(uc)), Bc.vertex.push(uc)
          }
        return Bc
      }
      _buildTriangle(cB) {
        const Bc = new Cs;
        if (cB)
          for (let nc = 0; nc < cB.length;) {
            const Vc = cB[nc++],
              Ic = cB[nc++],
              rB = cB[nc++];
            let uc = new vM(Vc, Ic, rB);
            this._th && (uc = this._th(uc)), Bc.triangle.push(uc)
          }
        return Bc
      }
    }
    class Fs {
      constructor(cB) {
        this._m = new Es(cB)
      }
      withColor(cB, Bc) {
        this._m.base = this._m.base ?? [];
        let nc = this._m.base.find((Bc => Bc.name.toLowerCase() === cB.toLowerCase()));
        return nc ? (nc.displaycolor = this._rgbaToHex(Bc), this) : (nc = new os(cB, this._rgbaToHex(Bc)), this._m.base.push(nc), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(cB) {
        const Bc = cB => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(cB, 1 / 2.2)))),
          nc = Bc(cB.r).toString(16).padStart(2, "0").toUpperCase(),
          Vc = Bc(cB.g).toString(16).padStart(2, "0").toUpperCase(),
          Ic = Bc(cB.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof cB.a) {
          return `#${nc}${Vc}${Ic}${Math.round(Math.min(255,Math.max(0,255*cB.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${nc}${Vc}${Ic}`
      }
    }
    class Jsc {
      constructor() {
        this._model = new ls, this._objects = new Map
      }
      withMetaData(cB, Bc, nc, Vc) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Ys(cB, Bc, nc, Vc)), this
      }
      withMaterial(cB) {
        return cB instanceof Fs && (cB = cB.build()), cB && (this._model.resources = this._model.resources ?? new gM, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(cB)), this
      }
      withMesh(cB) {
        return cB instanceof Hs && (cB = cB.build()), this._model.resources = this._model.resources ?? new gM, this._model.resources.object.push(cB), this
      }
      withComponents(cB) {
        return cB instanceof Xs && (cB = cB.build()), this._model.resources = this._model.resources ?? new gM, this._model.resources.object.push(cB), this
      }
      withBuild(cB, Bc, nc) {
        return this._model.build = this._model.build ?? new Ws, this._model.build.item?.push(new ws(cB, Bc, nc)), this
      }
      withUnit(cB) {
        return this._model.unit = cB, this
      }
      reset() {
        return this._model = new ls, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Jsc.KnownMetaSet = new Set(ls.KnownMeta.map((cB => cB.toLowerCase())));
    class jM {
      withContentType(cB) {
        this._cts || (this._cts = new tM);
        const Bc = this._cts.items;
        return Bc.some((Bc => Bc.ext === cB.ext && Bc.ct === cB.ct)) || Bc.push(cB), this
      }
      withRelationship(cB) {
        this._rs || (this._rs = new yM);
        const Bc = this._rs.items;
        return Bc.some((Bc => Bc.id === cB.id)) || Bc.push(cB), this.withContentType(new Ss("rels", Ps.Relationships)), this
      }
      withModel(cB) {
        return cB instanceof Jsc && (cB = cB.build()), this._m = cB, this.withContentType(new Ss("model", Ps.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const cB = `${Os}${Ts}`;
        if (!this._rs) {
          const Bc = `/${cB}`;
          this.withRelationship(new zM("rel0", es.ThreeDimModel, Bc))
        }
        return new ps(this._cts, this._rs, this._m)
      }
    }
    class Rs {
      constructor(cB) {
        this._o = cB
      }
      get options() {
        return this._o
      }
      async serializeAsync(cB) {
        const Bc = await this.ensureZipLibReadyAsync();
        if (!Bc) return;
        const nc = Bc.Zip,
          Vc = Bc.ZipDeflate;
        if (!nc || !Vc) throw new Error("fflate Zip / ZipDeflate not available");
        const Ic = function(cB, Bc, nc) {
          const Ic = new Vc(Bc, {
            level: 6
          });
          cB.add(Ic);
          const rB = function(cB) {
              return {
                push: (Bc, nc) => cB.push(Bc, nc)
              }
            }(Ic),
            uc = new ns(rB),
            sc = new cM(uc).dec("1.0", "UTF-8");
          new du(sc).serialize(nc), uc.finish()
        };
        for (var rB = arguments.length, uc = new Array(rB > 1 ? rB - 1 : 0), sc = 1; sc < rB; sc++) uc[sc - 1] = arguments[sc];
        const Mc = this.toDocument(...uc);
        if (!Mc) return;
        const Pc = new nc(cB);
        Ic(Pc, mM, Mc.contentTypes), Ic(Pc, `${qM}${fs}`, Mc.relationships), Ic(Pc, `${Os}${Ts}`, Mc.model), Pc.end()
      }
      toDocument() {
        const cB = (new Jsc).withUnit(this._o?.unit ?? rM.millimeter);
        if (this.options.metadata)
          for (const Ic in this.options.metadata) cB.withMetaData(Ic, this.options.metadata[Ic]);
        for (var Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
        return (new jM).withModel(this.toModel(cB, ...nc)).build()
      }
    }
    class iM {
      static async SerializeToMemoryAsync(cB) {
        const Bc = new Array;
        let nc = 0;
        for (var Vc = arguments.length, Ic = new Array(Vc > 1 ? Vc - 1 : 0), rB = 1; rB < Vc; rB++) Ic[rB - 1] = arguments[rB];
        if (await cB.serializeAsync((function(cB, Vc, Ic) {
            Bc.push(Vc), nc += Vc.length
          }), ...Ic), !nc) return;
        const uc = new Uint8Array(nc);
        let sc = 0;
        for (const Mc of Bc) uc.set(Mc, sc), sc += Mc.length;
        return uc
      }
    }
    class Ks {}
    Ks.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class xM {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = cB, this._to = Bc, this._step = nc, this._i = cB
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const cB = this._i;
        return this._i += this._step, cB
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class ds extends Rs {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...ds.DefaultOptions,
          ...cB
        })
      }
      toModel(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        nc = nc.filter((cB => cB instanceof qI.d || cB instanceof fc.c));
        const Ic = new xM,
          rB = cB,
          uc = new Map,
          sc = this.options.exportInstances ? [] : null;
        for (let Mc = 0; Mc < nc.length; Mc++) {
          const cB = nc[Mc];
          if (cB instanceof fc.c) {
            sc?.push(cB);
            continue
          }
          const Bc = cB.name || `mesh${Mc}`,
            Vc = cB.getWorldMatrix(),
            Pc = this._handleBabylonTo3mfMatrixTransformToRef(Vc, hs.Zero()),
            qB = cB.rD;
          if (void 0 === qB) continue;
          const Oc = 1 == qB.length;
          for (let nc = 0; nc < qB.length; nc++) {
            const Vc = qB[nc],
              sc = this._extractSubMesh(cB, Vc);
            if (sc) {
              const cB = Oc ? `${Bc}` : `${Bc}_${nc}`,
                Mc = new Hs(Ic.next()).withData(sc).withName(cB).build();
              rB.withMesh(Mc), rB.withBuild(Mc.id, Pc), uc.set(Vc, Mc)
            }
          }
        }
        if (sc && sc.length) {
          const cB = this._groupBy(sc, (cB => cB.wqc));
          for (const [Bc, nc] of Array.from(cB.entries()))
            if (nc && nc.length)
              for (let cB = 0; cB < nc.length; cB++) {
                const Vc = nc[cB].getWorldMatrix(),
                  Ic = Bc.rD;
                for (let cB = 0; cB < Ic.length; cB++) {
                  const Bc = Ic[cB],
                    nc = uc.get(Bc);
                  nc && rB.withBuild(nc.id, this._handleBabylonTo3mfMatrixTransformToRef(Vc, hs.Zero()))
                }
              }
        }
        return rB.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const cB = globalThis;
          return cB.fflate || await Ic.Tools.LoadScriptAsync(Ks.FFLATEUrl), cB.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(cB, Bc) {
        const nc = cB.Tfc();
        if (!nc) return;
        const Vc = cB.getVerticesData(ds._PositionKind);
        if (!Vc) return;
        if (0 == Bc.indexStart && Bc.indexCount == nc.length) return {
          positions: Vc,
          indices: nc
        };
        const Ic = Bc.indexStart,
          rB = new Map,
          uc = [],
          sc = new Uint32Array(Bc.indexCount);
        for (let Mc = 0; Mc < Bc.indexCount; Mc++) {
          const cB = nc[Ic + Mc];
          let Bc = rB.get(cB);
          if (void 0 === Bc) {
            Bc = rB.size, rB.set(cB, Bc);
            const nc = 3 * cB;
            uc.push(Vc[nc], Vc[nc + 1], Vc[nc + 2])
          }
          sc[Mc] = Bc
        }
        return {
          positions: new Float32Array(uc),
          indices: sc
        }
      }
      _groupBy(cB, Bc) {
        const nc = new Map;
        for (const Vc of cB) {
          const cB = Bc(Vc),
            Ic = nc.get(cB);
          Ic ? Ic.push(Vc) : nc.set(cB, [Vc])
        }
        return nc
      }
      _handleBabylonTo3mfMatrixTransformToRef(cB, Bc) {
        const nc = cB.multiplyToRef(ds._R_BJS_TO_3MF, Wc.d.Zero()).m;
        return Bc.values = [nc[0], nc[1], nc[2], nc[4], nc[5], nc[6], nc[8], nc[9], nc[10], nc[12], nc[13], nc[14]], Bc
      }
    }
    ds.DefaultOptions = {
      unit: rM.meter,
      exportInstances: !1
    }, ds._PositionKind = "position", ds._R_BJS_TO_3MF = Wc.d.RotationX(Math.PI / 2).multiply(Wc.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);