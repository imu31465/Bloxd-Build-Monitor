export const id = 235;
export const ids = [235, 241];
export const modules = {
  42109: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(42025),
      op = cp(40195);
    let Ip = !1;

    function Sp() {
      Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((pp => {
              this._texture._sphericalPolynomial = pp, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(pp) {
          this._texture && (this._texture._sphericalPolynomial = pp)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37479: (pp, ip, cp) => {
    cp.d(ip, {
      Color3: () => Op.d,
      b: () => Op.h
    });
    var Op = cp(37487);
    (0, Op.i)()
  },
  37985: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(37989);
    class op {
      static GetPlanes(pp) {
        const ip = [];
        for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
        return op.GetPlanesToRef(pp, ip), ip
      }
      static GetNearPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
      }
      static GetFarPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
      }
      static GetLeftPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
      }
      static GetRightPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
      }
      static GetTopPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
      }
      static GetBottomPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
      }
      static GetPlanesToRef(pp, ip) {
        op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
      }
      static IsPointInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; cp++)
          if (ip[cp].dotCoordinate(pp) < 0) return !1;
        return !0
      }
    }
  },
  37989: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp, op) {
        this.normal = new Op.o(pp, ip, cp), this.d = op
      }
      BOp() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let pp = this.normal.getHashCode();
        return pp = 397 * pp ^ this.d, pp
      }
      normalize() {
        const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ip = 0;
        return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
      }
      transform(pp) {
        const ip = op._TmpMatrix;
        pp.invertToRef(ip);
        const cp = ip.m,
          Op = this.normal.x,
          Ip = this.normal.y,
          Sp = this.normal.z,
          xp = this.d,
          Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
          Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
          Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
          Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
        return new op(Lp, Yp, Dp, Ap)
      }
      dotCoordinate(pp) {
        return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
      }
      copyFromPoints(pp, ip, cp) {
        const Op = ip.x - pp.x,
          op = ip.y - pp.y,
          Ip = ip.z - pp.z,
          Sp = cp.x - pp.x,
          xp = cp.y - pp.y,
          Lp = cp.z - pp.z,
          Yp = op * Lp - Ip * xp,
          Dp = Ip * Sp - Op * Lp,
          Ap = Op * xp - op * Sp,
          Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
        let Wp;
        return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
      }
      isFrontFacingTo(pp, ip) {
        return Op.o.Dot(this.normal, pp) <= ip
      }
      signedDistanceTo(pp) {
        return Op.o.Dot(pp, this.normal) + this.d
      }
      static FromArray(pp) {
        return new op(pp[0], pp[1], pp[2], pp[3])
      }
      static FromPoints(pp, ip, cp) {
        const Op = new op(0, 0, 0, 0);
        return Op.copyFromPoints(pp, ip, cp), Op
      }
      static FromPositionAndNormal(pp, ip) {
        const cp = new op(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(pp, ip, cp)
      }
      static FromPositionAndNormalToRef(pp, ip, cp) {
        return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
      }
      static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
        const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
        return Op.o.Dot(cp, ip) + op
      }
    }
    op._TmpMatrix = Op.b.Identity()
  },
  37313: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Matrix: () => Op.b,
      Quaternion: () => Op.f,
      RegisterMathVector: () => Op.h,
      TmpVectors: () => Op.i,
      Vector2: () => Op.l,
      Zy: () => Op.o,
      Vector4: () => Op.q
    });
    var Op = cp(37320);
    (0, Op.h)()
  },
  38313: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip, cp, Op) {
        this.x = pp, this.y = ip, this.width = cp, this.height = Op
      }
      toGlobal(pp, ip) {
        return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
      }
      toGlobalToRef(pp, ip, cp) {
        return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
      }
      clone() {
        return new Op(this.x, this.y, this.width, this.height)
      }
    }
  },
  42025: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp
    });
    var Op = cp(37320),
      op = cp(37356),
      Ip = cp(40190),
      Sp = cp(37324),
      xp = cp(37487);
    class Lp {
      constructor(pp, ip, cp, Op) {
        this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
      }
    }
    class Yp {
      static _NearestPow2Floor(pp) {
        return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(pp) {
        if (!pp.isCube) return null;
        pp.Gl()?.gy().flushFramebuffer();
        const ip = pp.getSize().width,
          cp = pp._sphericalPolynomialTargetSize,
          Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
          op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
          Ip = Op > 0 && Op < ip && op,
          Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
          xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
          Lp = pp.readPixels(0, Sp, void 0, !1),
          Yp = pp.readPixels(1, Sp, void 0, !1);
        let Dp, Ap;
        pp.isRenderTarget ? (Dp = pp.readPixels(3, Sp, void 0, !1), Ap = pp.readPixels(2, Sp, void 0, !1)) : (Dp = pp.readPixels(2, Sp, void 0, !1), Ap = pp.readPixels(3, Sp, void 0, !1));
        const Pp = pp.readPixels(4, Sp, void 0, !1),
          Wp = pp.readPixels(5, Sp, void 0, !1),
          yp = pp.gammaSpace,
          Up = Op > 0 && Op < ip && !Ip;
        return new Promise((pp => {
          Promise.all([Yp, Lp, Dp, Ap, Pp, Wp]).then((cp => {
            let [op, Ip, Sp, Lp, Yp, Dp] = cp, Ap = xp;
            if (Up) {
              const pp = 4;
              op = this._DownsampleFace(op, ip, Op, pp), Ip = this._DownsampleFace(Ip, ip, Op, pp), Sp = this._DownsampleFace(Sp, ip, Op, pp), Lp = this._DownsampleFace(Lp, ip, Op, pp), Yp = this._DownsampleFace(Yp, ip, Op, pp), Dp = this._DownsampleFace(Dp, ip, Op, pp), Ap = Op
            }
            const Pp = {
              size: Ap,
              right: Ip,
              left: op,
              up: Sp,
              down: Lp,
              front: Yp,
              back: Dp,
              format: 5,
              type: op instanceof Float32Array ? 1 : 0,
              gammaSpace: yp
            };
            pp(this.ConvertCubeMapToSphericalPolynomial(Pp))
          }))
        }))
      }
      static _AreaElement(pp, ip) {
        return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
      }
      static _DownsampleFace(pp, ip, cp, Op) {
        const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
          Ip = cp * cp * Op,
          Sp = new Float32Array(Ip),
          xp = ip / cp,
          Lp = 1 / (xp * xp);
        for (let Dp = 0; Dp < cp; Dp++) {
          const pp = Math.floor(Dp * xp),
            Ip = Math.floor((Dp + 1) * xp);
          for (let Yp = 0; Yp < cp; Yp++) {
            const Ap = Math.floor(Yp * xp),
              Pp = Math.floor((Yp + 1) * xp),
              Wp = (Dp * cp + Yp) * Op;
            for (let cp = 0; cp < Op; cp++) {
              let xp = 0;
              for (let Sp = pp; Sp < Ip; Sp++)
                for (let pp = Ap; pp < Pp; pp++) xp += op[(Sp * ip + pp) * Op + cp];
              Sp[Wp + cp] = xp * Lp
            }
          }
        }
        if (pp instanceof Float32Array) return Sp;
        const Yp = new(0, pp.constructor)(Ip);
        for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
        return Yp
      }
      static ConvertCubeMapToSphericalPolynomial(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
        if (cp > 0 && pp.size > cp) {
          const ip = 5 === pp.format ? 4 : 3,
            Op = ["right", "left", "up", "down", "front", "back"],
            op = {};
          for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
          pp = {
            ...pp,
            ...op,
            size: cp
          }
        }
        const Op = new Ip.c;
        let Lp = 0;
        const Yp = 2 / pp.size,
          Dp = Yp,
          Ap = .5 * Yp,
          Pp = Ap - 1;
        for (let Ip = 0; Ip < 6; Ip++) {
          const ip = this._FileFaces[Ip],
            cp = pp[ip.name];
          let Wp = Pp;
          const yp = 5 === pp.format ? 4 : 3;
          for (let Ip = 0; Ip < pp.size; Ip++) {
            let Up = Pp;
            for (let Dp = 0; Dp < pp.size; Dp++) {
              const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
              Pp.normalize();
              const wp = this._AreaElement(Up - Ap, Wp - Ap) - this._AreaElement(Up - Ap, Wp + Ap) - this._AreaElement(Up + Ap, Wp - Ap) + this._AreaElement(Up + Ap, Wp + Ap);
              let vp = cp[Ip * pp.size * yp + Dp * yp + 0],
                tp = cp[Ip * pp.size * yp + Dp * yp + 1],
                Hp = cp[Ip * pp.size * yp + Dp * yp + 2];
              isNaN(vp) && (vp = 0), isNaN(tp) && (tp = 0), isNaN(Hp) && (Hp = 0), 0 === pp.type && (vp /= 255, tp /= 255, Hp /= 255), pp.gammaSpace && (vp = Math.pow((0, op.Clamp)(vp), Sp.g), tp = Math.pow((0, op.Clamp)(tp), Sp.g), Hp = Math.pow((0, op.Clamp)(Hp), Sp.g));
              const dp = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const pp = Math.max(vp, tp, Hp);
                if (pp > dp) {
                  const ip = dp / pp;
                  vp *= ip, tp *= ip, Hp *= ip
                }
              } else vp = (0, op.Clamp)(vp, 0, dp), tp = (0, op.Clamp)(tp, 0, dp), Hp = (0, op.Clamp)(Hp, 0, dp);
              const ep = new xp.d(vp, tp, Hp);
              Op.addLight(Pp, ep, wp), Lp += wp, Up += Yp
            }
            Wp += Dp
          }
        }
        const Wp = 6 * (4 * Math.PI) / 6 / Lp;
        return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
      }
    }
    Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, -1)), new Lp("front", new Op.o(0, 0, 1), new Op.o(1, 0, 0), new Op.o(0, -1, 0)), new Lp("back", new Op.o(0, 0, -1), new Op.o(-1, 0, 0), new Op.o(0, -1, 0))], Yp.MAX_HDRI_VALUE = 4096, Yp.PRESERVE_CLAMPED_COLORS = !1
  },
  41798: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op.g,
      d: () => Op.p
    });
    var Op = cp(40257);
    (0, Op.u)()
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  42071: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(42060),
      op = cp(42080);
    class Ip {
      static ExpandRGBDTexture(pp) {
        const ip = pp._texture;
        if (!ip || !pp.isRGBD) return;
        const op = ip.gy(),
          Ip = op.getCaps(),
          Sp = ip.isReady;
        let xp = !1;
        Ip.textureHalfFloatRender && Ip.textureHalfFloatLinearFiltering ? (xp = !0, ip.type = 2) : Ip.textureFloatRender && Ip.textureFloatLinearFiltering && (xp = !0, ip.type = 1), xp && (ip.isReady = !1, ip._isRGBD = !1, ip.invertY = !1);
        const Lp = async () => {
          const Ip = op.isWebGPU,
            Sp = Ip ? 1 : 0;
          ip.isReady = !1, Ip ? await cp.e(347).then((() => cp(61482))) : await cp.e(329).then((() => cp(61491)));
          const xp = new Op.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, op, !1, void 0, ip.type, void 0, null, !1, void 0, Sp);
          xp.externalTextureSamplerBinding = !0;
          const Lp = op.createRenderTargetTexture(ip.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ip.samplingMode,
            type: ip.type,
            format: 5
          });
          xp.onEffectCreatedObservable.addOnce((cp => {
            cp.executeWhenCompiled((() => {
              xp.onApply = pp => {
                pp._bindTexture("textureSampler", ip), pp.setFloat2("scale", 1, 1)
              }, pp.Gl()?.postProcessManager.directRender([xp], Lp, !0), op.restoreDefaultFramebuffer(), op._releaseTexture(ip), xp && xp.dispose(), Lp._swapAndDie(ip), ip.isReady = !0
            }))
          }))
        };
        xp && (Sp ? Lp() : pp.onLoadObservable.addOnce(Lp))
      }
      static async EncodeTextureToRGBD(pp, ip) {
        let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ip.gy().isWebGPU ? await cp.e(348).then((() => cp(61509))) : await cp.e(330).then((() => cp(61507))), await (0, op.c)("rgbdEncode", pp, ip, Op, 1, 5)
      }
    }
  },
  61368: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AsyncLoop: () => Op.c,
      RegisterTools: () => Op.g,
      Tools: () => Op.i,
      className: () => Op.l
    });
    var Op = cp(40304);
    (0, Op.g)()
  },
  42123: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    class Op {
      constructor(pp) {
        this._pendingActions = new Array, this._workerInfos = pp.map((pp => ({
          workerPromise: Promise.resolve(pp),
          idle: !0
        })))
      }
      dispose() {
        for (const pp of this._workerInfos) pp.workerPromise.then((pp => {
          pp.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(pp) {
        this._executeOnIdleWorker(pp) || this._pendingActions.push(pp)
      }
      _executeOnIdleWorker(pp) {
        for (const ip of this._workerInfos)
          if (ip.idle) return this._execute(ip, pp), !0;
        return !1
      }
      _execute(pp, ip) {
        pp.idle = !1, pp.workerPromise.then((cp => {
          ip(cp, (() => {
            const ip = this._pendingActions.shift();
            ip ? this._execute(pp, ip) : pp.idle = !0
          }))
        }))
      }
    }
    class op extends Op {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.DefaultOptions;
        super([]), this._maxWorkers = pp, this._createWorkerAsync = ip, this._options = cp
      }
      push(pp) {
        if (!this._executeOnIdleWorker(pp))
          if (this._workerInfos.length < this._maxWorkers) {
            const ip = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ip), this._execute(ip, pp)
          } else this._pendingActions.push(pp)
      }
      _execute(pp, ip) {
        pp.timeoutId && (clearTimeout(pp.timeoutId), delete pp.timeoutId), super._execute(pp, ((cp, Op) => {
          ip(cp, (() => {
            Op(), pp.idle && (pp.timeoutId = setTimeout((() => {
              pp.workerPromise.then((pp => {
                pp.terminate()
              }));
              const ip = this._workerInfos.indexOf(pp); - 1 !== ip && this._workerInfos.splice(ip, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    op.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61397: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AbstractThreeMfSerializer: () => sx,
      BVHExporter: () => ES,
      ContentTypeFileName: () => tx,
      DefaultXmlSerializerFormatOptions: () => GS,
      DefaultXmlSerializerNumberOptions: () => gS,
      EXT_lights_area: () => Ho,
      EXT_mesh_gpu_instancing: () => hO,
      EXT_texture_avif: () => YS,
      EXT_texture_webp: () => IS,
      GLTF2Export: () => TO,
      GLTFData: () => Yp,
      GetXmlFieldMeta: () => bS,
      GetXmlName: () => hS,
      IsQualifiedName: () => XS,
      KHR_draco_mesh_compression: () => po,
      KHR_interactivity: () => Po,
      KHR_lights_punctual: () => Lo,
      KHR_materials_anisotropy: () => ko,
      KHR_materials_clearcoat: () => Co,
      KHR_materials_coat: () => No,
      KHR_materials_diffuse_roughness: () => hI,
      KHR_materials_diffuse_transmission: () => no,
      KHR_materials_dispersion: () => ro,
      KHR_materials_emissive_strength: () => Ko,
      KHR_materials_fuzz: () => UI,
      KHR_materials_ior: () => cI,
      KHR_materials_iridescence: () => SI,
      KHR_materials_openpbr: () => gI,
      KHR_materials_sheen: () => DI,
      KHR_materials_specular: () => HI,
      KHR_materials_transmission: () => jI,
      KHR_materials_unlit: () => MI,
      KHR_materials_volume: () => lI,
      KHR_materials_volume_scatter: () => NI,
      KHR_texture_basisu: () => iS,
      KHR_texture_transform: () => zI,
      Known3mfRelationshipTypes: () => Hx,
      KnownI3mfContentType: () => Wx,
      Matrix3d: () => mx,
      MatrixFormatter: () => Rx,
      ModelFileName: () => wx,
      NumberFormatter: () => zS,
      OBJExport: () => Sp,
      Object3dDirName: () => Ux,
      OpenXmlContentTypesNamespace: () => Ax,
      OpenXmlRelationshipsNamespace: () => Px,
      RegisterEXT_lights_area: () => uo,
      RegisterEXT_mesh_gpu_instancing: () => nO,
      RegisterEXT_texture_avif: () => AS,
      RegisterEXT_texture_webp: () => xS,
      RegisterKHR_draco_mesh_compression: () => co,
      RegisterKHR_interactivity: () => yo,
      RegisterKHR_lights_punctual: () => Do,
      RegisterKHR_materials_anisotropy: () => Ro,
      RegisterKHR_materials_clearcoat: () => Xo,
      RegisterKHR_materials_coat: () => fo,
      RegisterKHR_materials_diffuse_roughness: () => nI,
      RegisterKHR_materials_diffuse_transmission: () => go,
      RegisterKHR_materials_dispersion: () => zo,
      RegisterKHR_materials_emissive_strength: () => pI,
      RegisterKHR_materials_fuzz: () => vI,
      RegisterKHR_materials_ior: () => oI,
      RegisterKHR_materials_iridescence: () => LI,
      RegisterKHR_materials_openpbr: () => rI,
      RegisterKHR_materials_sheen: () => PI,
      RegisterKHR_materials_specular: () => eI,
      RegisterKHR_materials_transmission: () => mI,
      RegisterKHR_materials_unlit: () => EI,
      RegisterKHR_materials_volume: () => JI,
      RegisterKHR_materials_volume_scatter: () => fI,
      RegisterKHR_texture_basisu: () => OS,
      RegisterKHR_texture_transform: () => KI,
      RelationshipDirName: () => yx,
      RelationshipFileName: () => vx,
      ResolveFormatOptions: () => ZS,
      ResolveNumberOptions: () => rS,
      STLExport: () => PS,
      ST_ObjectType: () => Dx,
      ST_Unit: () => Yx,
      StringXmlWriter: () => Ix,
      ThreeDimModelNamespace: () => xx,
      ThreeMf: () => Kx,
      ThreeMfBase: () => hx,
      ThreeMfBaseMaterials: () => bx,
      ThreeMfBuild: () => ax,
      ThreeMfComponent: () => fx,
      ThreeMfComponents: () => Tx,
      ThreeMfComponentsBuilder: () => gx,
      ThreeMfContentType: () => ex,
      ThreeMfContentTypes: () => dx,
      ThreeMfDocument: () => kx,
      ThreeMfDocumentBuilder: () => zx,
      ThreeMfItem: () => nx,
      ThreeMfMaterialBuilder: () => rx,
      ThreeMfMesh: () => lx,
      ThreeMfMeshBuilder: () => Gx,
      ThreeMfMeta: () => Mx,
      ThreeMfMetadataGroup: () => Cx,
      ThreeMfModel: () => qx,
      ThreeMfModelBuilder: () => Zx,
      ThreeMfObject: () => Xx,
      ThreeMfObjectBuilder: () => Fx,
      ThreeMfRelationship: () => jx,
      ThreeMfRelationships: () => ux,
      ThreeMfResources: () => Ex,
      ThreeMfSerializer: () => iL,
      ThreeMfSerializerGlobalConfiguration: () => Vx,
      ThreeMfTriangle: () => Nx,
      ThreeMfTriangles: () => Bx,
      ThreeMfVertex: () => Jx,
      ThreeMfVertices: () => Qx,
      ToQualifiedString: () => FS,
      TokenType: () => Ox,
      TriangleSetsNamespace: () => Lx,
      USDZExportAsync: () => MS,
      Utf8XmlWriterToBytes: () => Sx,
      XmlAttr: () => TS,
      XmlBuilder: () => ox,
      XmlElem: () => fS,
      XmlIgnore: () => NS,
      XmlName: () => BS,
      XmlNameToParts: () => nS,
      XmlSerializer: () => ix,
      _ConvertToGLTFPBRMetallicRoughness: () => Mc,
      _SolveMetallic: () => qc,
      __IGLTFExporterExtension: () => xp
    });
    var Op = cp(37313),
      op = cp(61368),
      Ip = cp(40476);
    class Sp {
      static OBJ(pp, ip, cp, Sp) {
        const xp = [];
        let Lp = 1,
          Yp = 1;
        ip && (cp || (cp = "mat"), xp.push("mtllib " + cp + ".mtl"));
        for (let Dp = 0; Dp < pp.length; Dp++) {
          const cp = pp[Dp],
            Ap = cp.name || `mesh${Dp}}`;
          xp.push(`o ${Ap}`);
          let Pp = null;
          if (Sp) {
            const pp = cp.computeWorldMatrix(!0);
            Pp = new Op.Matrix, pp.invertToRef(Pp), cp.bakeTransformIntoVertices(pp)
          }
          if (ip) {
            const pp = cp.material;
            pp && xp.push("usemtl " + pp.id)
          }
          const Wp = cp.geometry;
          if (!Wp) {
            op.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const yp = Wp.getVerticesData("position"),
            Up = Wp.getVerticesData("normal"),
            wp = Wp.getVerticesData("uv"),
            vp = Wp.NOp();
          let tp = 0,
            Hp = 0;
          if (!yp || !vp) {
            op.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const dp = pp[0].Gl().useRightHandedSystem ? 1 : -1;
          for (let pp = 0; pp < yp.length; pp += 3) xp.push("v " + yp[pp] * dp + " " + yp[pp + 1] + " " + yp[pp + 2]), tp++;
          if (null != Up)
            for (let pp = 0; pp < Up.length; pp += 3) xp.push("vn " + Up[pp] * dp + " " + Up[pp + 1] + " " + Up[pp + 2]);
          if (null != wp)
            for (let pp = 0; pp < wp.length; pp += 2) xp.push("vt " + wp[pp] + " " + wp[pp + 1]), Hp++;
          const ep = ["", "", ""],
            jp = (cp.material || cp.Gl().defaultMaterial)._getEffectiveOrientation(cp),
            [kp, mp] = jp === Ip.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let pp = 0; pp < vp.length; pp += 3) {
            const ip = [String(vp[pp] + Lp), String(vp[pp + kp] + Lp), String(vp[pp + mp] + Lp)],
              cp = [String(vp[pp] + Yp), String(vp[pp + kp] + Yp), String(vp[pp + mp] + Yp)],
              Op = ip,
              op = null != wp ? cp : ep,
              Ip = null != Up ? ip : ep;
            xp.push("f " + Op[0] + "/" + op[0] + "/" + Ip[0] + " " + Op[1] + "/" + op[1] + "/" + Ip[1] + " " + Op[2] + "/" + op[2] + "/" + Ip[2])
          }
          Sp && Pp && cp.bakeTransformIntoVertices(Pp), Lp += tp, Yp += Hp
        }
        return xp.join("\n")
      }
      static MTL(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const cp = [],
          Op = pp.material;
        cp.push("newmtl " + ip), cp.push("  Ns " + Op.specularPower.toFixed(4)), cp.push("  Ni 1.5000"), cp.push("  d " + Op.alpha.toFixed(4)), cp.push("  Tr 0.0000"), cp.push("  Tf 1.0000 1.0000 1.0000"), cp.push("  illum 2"), cp.push("  Ka " + Op.ambientColor.r.toFixed(4) + " " + Op.ambientColor.g.toFixed(4) + " " + Op.ambientColor.b.toFixed(4)), cp.push("  Kd " + Op.diffuseColor.r.toFixed(4) + " " + Op.diffuseColor.g.toFixed(4) + " " + Op.diffuseColor.b.toFixed(4)), cp.push("  Ks " + Op.specularColor.r.toFixed(4) + " " + Op.specularColor.g.toFixed(4) + " " + Op.specularColor.b.toFixed(4)), cp.push("  Ke " + Op.emissiveColor.r.toFixed(4) + " " + Op.emissiveColor.g.toFixed(4) + " " + Op.emissiveColor.b.toFixed(4));
        Op.ambientTexture && cp.push("  map_Ka " + Op.ambientTexture.name), Op.diffuseTexture && cp.push("  map_Kd " + Op.diffuseTexture.name), Op.specularTexture && cp.push("  map_Ks " + Op.specularTexture.name), Op.bumpTexture && cp.push("  map_bump -imfchan z " + Op.bumpTexture.name), Op.opacityTexture && cp.push("  map_d " + Op.opacityTexture.name);
        return cp.join("\n")
      }
    }
    var xp = 0,
      Lp = cp(41798);
    class Yp {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const pp in this.files) {
          const ip = this.files[pp],
            cp = new Blob([ip], {
              type: (0, Lp.b)(pp)
            });
          op.Tools.Download(cp, pp)
        }
      }
    }
    var Dp = cp(41378),
      Ap = cp(41325),
      Pp = cp(41884),
      Wp = cp(41333),
      yp = cp(40024),
      Up = cp(37345),
      wp = cp(37479),
      vp = cp(37356);
    const tp = vp.HighestCommonFactor,
      Hp = {
        ...vp,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: tp
      };
    var dp = cp(42080),
      ep = cp(41353),
      jp = cp(41843),
      kp = cp(41851),
      mp = cp(42102);
    (0, mp.RegisterDumpTools)();
    var Rp = cp(40203),
      qp = cp(40210),
      Mp = cp(38905),
      Cp = cp(40314),
      Ep = cp(40654),
      Xp = cp(42071);
    let lp = 0;
    const Qp = (pp, ip, cp, Op) => {
        if (!pp[cp]) {
          const op = pp.useDelayedTextureLoading;
          pp.useDelayedTextureLoading = !1;
          const Ip = pp._blockEntityCollection;
          pp._blockEntityCollection = !1;
          const Sp = Ep.d.CreateFromBase64String(ip, Op + lp++, pp, !0, !1, Ep.d.BILINEAR_SAMPLINGMODE);
          pp._blockEntityCollection = Ip;
          const xp = pp.gy().getLoadedTexturesCache(),
            Lp = xp.indexOf(Sp.getInternalTexture()); - 1 !== Lp && xp.splice(Lp, 1), Sp.isRGBD = !0, Sp.wrapU = Ep.d.CLAMP_ADDRESSMODE, Sp.wrapV = Ep.d.CLAMP_ADDRESSMODE, pp[cp] = Sp, pp.useDelayedTextureLoading = op, Xp.b.ExpandRGBDTexture(Sp);
          const Yp = pp.gy().Fy.add((() => {
            Sp.isRGBD = !0;
            const ip = pp.onBeforeRenderObservable.add((() => {
              Sp.isReady() && (pp.onBeforeRenderObservable.remove(ip), Xp.b.ExpandRGBDTexture(Sp))
            }))
          }));
          pp.Kl.add((() => {
            pp.gy().Fy.remove(Yp)
          }))
        }
        return pp[cp]
      },
      Jp = pp => Qp(pp, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Bp = pp => Qp(pp, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Np = pp => Qp(pp, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Tp = cp(40296),
      fp = cp(37320),
      bp = cp(40342),
      hp = cp(40472),
      ap = cp(40538);
    class np extends hp.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Fp = (() => {
      var pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp;
      let Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp = ap.b,
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [];
      return pp = class extends Hp {
        get useEnergyConservation() {
          return (0, Rp.e)(this, ip, "f")
        }
        set useEnergyConservation(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Rp.e)(this, cp, "f")
        }
        set useSmithVisibilityHeightCorrelated(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get useSphericalHarmonics() {
          return (0, Rp.e)(this, Op, "f")
        }
        set useSphericalHarmonics(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Rp.e)(this, op, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(pp) {
          (0, Rp.f)(this, op, pp, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Rp.e)(this, Ip, "f")
        }
        set mixIblRadianceWithIrradiance(pp) {
          (0, Rp.f)(this, Ip, pp, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Rp.e)(this, Sp, "f")
        }
        set useLegacySpecularEnergyConservation(pp) {
          (0, Rp.f)(this, Sp, pp, "f")
        }
        get baseDiffuseModel() {
          return (0, Rp.e)(this, xp, "f")
        }
        set baseDiffuseModel(pp) {
          (0, Rp.f)(this, xp, pp, "f")
        }
        get dielectricSpecularModel() {
          return (0, Rp.e)(this, Lp, "f")
        }
        set dielectricSpecularModel(pp) {
          (0, Rp.f)(this, Lp, pp, "f")
        }
        get conductorSpecularModel() {
          return (0, Rp.e)(this, Yp, "f")
        }
        set conductorSpecularModel(pp) {
          (0, Rp.f)(this, Yp, pp, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Dp) {
          let Ap = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Dp, "PBRBRDF", 90, new np, Ap), this._useEnergyConservation = pp.DEFAULT_USE_ENERGY_CONSERVATION, ip.set(this, (0, Rp.l)(this, dp, pp.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Rp.l)(this, ep), pp.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), cp.set(this, (0, Rp.l)(this, jp, pp.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Rp.l)(this, kp), pp.DEFAULT_USE_SPHERICAL_HARMONICS), Op.set(this, (0, Rp.l)(this, mp, pp.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Rp.l)(this, Mp), pp.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), op.set(this, (0, Rp.l)(this, Cp, pp.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Rp.l)(this, Ep), pp.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Ip.set(this, (0, Rp.l)(this, Xp, pp.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Rp.l)(this, lp), pp.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Sp.set(this, (0, Rp.l)(this, Qp, pp.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Rp.l)(this, Jp), pp.DEFAULT_DIFFUSE_MODEL), xp.set(this, (0, Rp.l)(this, Bp, pp.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Rp.l)(this, Np), pp.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Lp.set(this, (0, Rp.l)(this, Tp, pp.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Rp.l)(this, fp), pp.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Yp.set(this, (0, Rp.l)(this, bp, pp.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Rp.l)(this, hp), this._internalMarkAllSubMeshesAsMiscDirty = Dp._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(pp) {
          pp.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, pp.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, pp.SPHERICAL_HARMONICS = this._useSphericalHarmonics, pp.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, pp.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, pp.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, pp.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, pp.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, pp.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, xp = new WeakMap, Lp = new WeakMap, Yp = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hp[Symbol.metadata] ?? null) : void 0;
        Dp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Ap = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Pp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Wp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], yp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Up = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], wp = [(0, qp.K)("baseDiffuseModel"), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], vp = [(0, qp.K)("dielectricSpecularModel"), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], tp = [(0, qp.K)("conductorSpecularModel"), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], (0, Rp.j)(pp, null, Dp, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: pp => "useEnergyConservation" in pp,
            get: pp => pp.useEnergyConservation,
            set: (pp, ip) => {
              pp.useEnergyConservation = ip
            }
          },
          metadata: ip
        }, dp, ep), (0, Rp.j)(pp, null, Ap, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: pp => "useSmithVisibilityHeightCorrelated" in pp,
            get: pp => pp.useSmithVisibilityHeightCorrelated,
            set: (pp, ip) => {
              pp.useSmithVisibilityHeightCorrelated = ip
            }
          },
          metadata: ip
        }, jp, kp), (0, Rp.j)(pp, null, Pp, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: pp => "useSphericalHarmonics" in pp,
            get: pp => pp.useSphericalHarmonics,
            set: (pp, ip) => {
              pp.useSphericalHarmonics = ip
            }
          },
          metadata: ip
        }, mp, Mp), (0, Rp.j)(pp, null, Wp, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: pp => "useSpecularGlossinessInputEnergyConservation" in pp,
            get: pp => pp.useSpecularGlossinessInputEnergyConservation,
            set: (pp, ip) => {
              pp.useSpecularGlossinessInputEnergyConservation = ip
            }
          },
          metadata: ip
        }, Cp, Ep), (0, Rp.j)(pp, null, yp, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: pp => "mixIblRadianceWithIrradiance" in pp,
            get: pp => pp.mixIblRadianceWithIrradiance,
            set: (pp, ip) => {
              pp.mixIblRadianceWithIrradiance = ip
            }
          },
          metadata: ip
        }, Xp, lp), (0, Rp.j)(pp, null, Up, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: pp => "useLegacySpecularEnergyConservation" in pp,
            get: pp => pp.useLegacySpecularEnergyConservation,
            set: (pp, ip) => {
              pp.useLegacySpecularEnergyConservation = ip
            }
          },
          metadata: ip
        }, Qp, Jp), (0, Rp.j)(pp, null, wp, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: pp => "baseDiffuseModel" in pp,
            get: pp => pp.baseDiffuseModel,
            set: (pp, ip) => {
              pp.baseDiffuseModel = ip
            }
          },
          metadata: ip
        }, Bp, Np), (0, Rp.j)(pp, null, vp, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: pp => "dielectricSpecularModel" in pp,
            get: pp => pp.dielectricSpecularModel,
            set: (pp, ip) => {
              pp.dielectricSpecularModel = ip
            }
          },
          metadata: ip
        }, Tp, fp), (0, Rp.j)(pp, null, tp, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: pp => "conductorSpecularModel" in pp,
            get: pp => pp.conductorSpecularModel,
            set: (pp, ip) => {
              pp.conductorSpecularModel = ip
            }
          },
          metadata: ip
        }, bp, hp), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp.DEFAULT_USE_ENERGY_CONSERVATION = !0, pp.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, pp.DEFAULT_USE_SPHERICAL_HARMONICS = !0, pp.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, pp.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, pp.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, pp.DEFAULT_DIFFUSE_MODEL = 0, pp.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, pp.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, pp
    })();
    var gp = cp(40465),
      Gp = cp(37487),
      rp = cp(40467),
      Zp = cp(40318),
      zp = cp(40523),
      sp = cp(40519),
      Kp = cp(40530),
      Vp = cp(40512);
    class ii extends hp.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let ci = (() => {
      var pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp;
      let Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp = ap.b,
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [],
        np = [],
        Fp = [],
        gp = [],
        rp = [],
        Zp = [],
        zp = [],
        Kp = [],
        ci = [],
        Oi = [],
        oi = [],
        Ii = [],
        Si = [],
        xi = [],
        Li = [],
        Yi = [];
      return pp = class extends mp {
        get isEnabled() {
          return (0, Rp.e)(this, ip, "f")
        }
        set isEnabled(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get indexOfRefraction() {
          return (0, Rp.e)(this, cp, "f")
        }
        set indexOfRefraction(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get texture() {
          return (0, Rp.e)(this, Op, "f")
        }
        set texture(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Rp.e)(this, op, "f")
        }
        set useRoughnessFromMainTexture(pp) {
          (0, Rp.f)(this, op, pp, "f")
        }
        get textureRoughness() {
          return (0, Rp.e)(this, Ip, "f")
        }
        set textureRoughness(pp) {
          (0, Rp.f)(this, Ip, pp, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Rp.e)(this, Sp, "f")
        }
        set remapF0OnInterfaceChange(pp) {
          (0, Rp.f)(this, Sp, pp, "f")
        }
        get bumpTexture() {
          return (0, Rp.e)(this, xp, "f")
        }
        set bumpTexture(pp) {
          (0, Rp.f)(this, xp, pp, "f")
        }
        get isTintEnabled() {
          return (0, Rp.e)(this, Lp, "f")
        }
        set isTintEnabled(pp) {
          (0, Rp.f)(this, Lp, pp, "f")
        }
        get tintTexture() {
          return (0, Rp.e)(this, Yp, "f")
        }
        set tintTexture(pp) {
          (0, Rp.f)(this, Yp, pp, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Dp) {
          let Ap = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Dp, "PBRClearCoat", 100, new ii, Ap), this._isEnabled = !1, ip.set(this, (0, Rp.l)(this, Mp, !1)), this.intensity = ((0, Rp.l)(this, Cp), (0, Rp.l)(this, Ep, 1)), this.roughness = ((0, Rp.l)(this, Xp), (0, Rp.l)(this, lp, 0)), this._indexOfRefraction = ((0, Rp.l)(this, Qp), pp._DefaultIndexOfRefraction), cp.set(this, (0, Rp.l)(this, Jp, pp._DefaultIndexOfRefraction)), this._texture = ((0, Rp.l)(this, Bp), null), Op.set(this, (0, Rp.l)(this, Np, null)), this._useRoughnessFromMainTexture = ((0, Rp.l)(this, Tp), !0), op.set(this, (0, Rp.l)(this, fp, !0)), this._textureRoughness = ((0, Rp.l)(this, bp), null), Ip.set(this, (0, Rp.l)(this, hp, null)), this._remapF0OnInterfaceChange = ((0, Rp.l)(this, np), !0), Sp.set(this, (0, Rp.l)(this, Fp, !0)), this._bumpTexture = ((0, Rp.l)(this, gp), null), xp.set(this, (0, Rp.l)(this, rp, null)), this._isTintEnabled = ((0, Rp.l)(this, Zp), !1), Lp.set(this, (0, Rp.l)(this, zp, !1)), this.tintColor = ((0, Rp.l)(this, Kp), (0, Rp.l)(this, ci, Gp.d.White())), this.tintColorAtDistance = ((0, Rp.l)(this, Oi), (0, Rp.l)(this, oi, 1)), this.tintThickness = ((0, Rp.l)(this, Ii), (0, Rp.l)(this, Si, 1)), this._tintTexture = ((0, Rp.l)(this, xi), null), Yp.set(this, (0, Rp.l)(this, Li, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Rp.l)(this, Yi), this._internalMarkAllSubMeshesAsTexturesDirty = Dp._dirtyCallbacks[1]
        }
        isReadyForSubMesh(pp, ip, cp) {
          if (!this._isEnabled) return !0;
          const Op = this._material._disableBumpMap;
          if (pp._areTexturesDirty && ip.texturesEnabled) {
            if (this._texture && sp.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && sp.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (cp.getCaps().standardDerivatives && this._bumpTexture && sp.c.ClearCoatBumpTextureEnabled && !Op && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && sp.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ip, cp) {
          this._isEnabled ? (ip.CLEARCOAT = !0, ip.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ip.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, ip._areTexturesDirty && cp.texturesEnabled && (this._texture && sp.c.ClearCoatTextureEnabled ? (0, Vp.eb)(this._texture, ip, "CLEARCOAT_TEXTURE") : ip.CLEARCOAT_TEXTURE = !1, this._textureRoughness && sp.c.ClearCoatTextureEnabled ? (0, Vp.eb)(this._textureRoughness, ip, "CLEARCOAT_TEXTURE_ROUGHNESS") : ip.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && sp.c.ClearCoatBumpTextureEnabled ? (0, Vp.eb)(this._bumpTexture, ip, "CLEARCOAT_BUMP") : ip.CLEARCOAT_BUMP = !1, ip.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === pp._DefaultIndexOfRefraction, this._isTintEnabled ? (ip.CLEARCOAT_TINT = !0, this._tintTexture && sp.c.ClearCoatTintTextureEnabled ? ((0, Vp.eb)(this._tintTexture, ip, "CLEARCOAT_TINT_TEXTURE"), ip.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : ip.CLEARCOAT_TINT_TEXTURE = !1) : (ip.CLEARCOAT_TINT = !1, ip.CLEARCOAT_TINT_TEXTURE = !1))) : (ip.CLEARCOAT = !1, ip.CLEARCOAT_TEXTURE = !1, ip.CLEARCOAT_TEXTURE_ROUGHNESS = !1, ip.CLEARCOAT_BUMP = !1, ip.CLEARCOAT_TINT = !1, ip.CLEARCOAT_TINT_TEXTURE = !1, ip.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ip.CLEARCOAT_DEFAULTIOR = !1, ip.CLEARCOAT_TEXTUREDIRECTUV = 0, ip.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, ip.CLEARCOAT_BUMPDIRECTUV = 0, ip.CLEARCOAT_REMAP_F0 = !1, ip.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, ip.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(pp, ip, cp, Op) {
          if (!this._isEnabled) return;
          const op = Op.materialDefines,
            Ip = this._material.isFrozen,
            Sp = this._material._disableBumpMap,
            xp = this._material._invertNormalMapX,
            Lp = this._material._invertNormalMapY;
          if (!pp.useUbo || !Ip || !pp.isSync) {
            (this._texture || this._textureRoughness) && sp.c.ClearCoatTextureEnabled && (pp.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Vp.A)(this._texture, pp, "clearCoat"), this._textureRoughness && !op.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Vp.A)(this._textureRoughness, pp, "clearCoatRoughness")), this._bumpTexture && cp.getCaps().standardDerivatives && sp.c.ClearCoatTextureEnabled && !Sp && (pp.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Vp.A)(this._bumpTexture, pp, "clearCoatBump"), ip._mirroredCameraPosition ? pp.updateFloat2("vClearCoatTangentSpaceParams", xp ? 1 : -1, Lp ? 1 : -1) : pp.updateFloat2("vClearCoatTangentSpaceParams", xp ? -1 : 1, Lp ? -1 : 1)), this._tintTexture && sp.c.ClearCoatTintTextureEnabled && (pp.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Vp.A)(this._tintTexture, pp, "clearCoatTint")), pp.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Op = 1 - this._indexOfRefraction,
              Ip = 1 + this._indexOfRefraction,
              Yp = Math.pow(-Op / Ip, 2),
              Dp = 1 / this._indexOfRefraction;
            pp.updateFloat4("vClearCoatRefractionParams", Yp, Dp, Op, Ip), this._isTintEnabled && (pp.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), pp.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          ip.texturesEnabled && (this._texture && sp.c.ClearCoatTextureEnabled && pp.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !op.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && sp.c.ClearCoatTextureEnabled && pp.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && cp.getCaps().standardDerivatives && sp.c.ClearCoatBumpTextureEnabled && !Sp && pp.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && sp.c.ClearCoatTintTextureEnabled && pp.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(pp) {
          return this._texture === pp || (this._textureRoughness === pp || (this._bumpTexture === pp || this._tintTexture === pp))
        }
        getActiveTextures(pp) {
          this._texture && pp.push(this._texture), this._textureRoughness && pp.push(this._textureRoughness), this._bumpTexture && pp.push(this._bumpTexture), this._tintTexture && pp.push(this._tintTexture)
        }
        getAnimatables(pp) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && pp.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && pp.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && pp.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && pp.push(this._tintTexture)
        }
        dispose(pp) {
          pp && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(pp, ip, cp) {
          return pp.CLEARCOAT_BUMP && ip.addFallback(cp++, "CLEARCOAT_BUMP"), pp.CLEARCOAT_TINT && ip.addFallback(cp++, "CLEARCOAT_TINT"), pp.CLEARCOAT && ip.addFallback(cp++, "CLEARCOAT"), cp
        }
        getSamplers(pp) {
          pp.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, xp = new WeakMap, Lp = new WeakMap, Yp = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(mp[Symbol.metadata] ?? null) : void 0;
        Dp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ap = [(0, qp.K)()], Pp = [(0, qp.K)()], Wp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], yp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], vp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], tp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Hp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], dp = [(0, qp.n)()], ep = [(0, qp.K)()], jp = [(0, qp.K)()], kp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], (0, Rp.j)(pp, null, Dp, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: ip
        }, Mp, Cp), (0, Rp.j)(pp, null, Wp, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: pp => "indexOfRefraction" in pp,
            get: pp => pp.indexOfRefraction,
            set: (pp, ip) => {
              pp.indexOfRefraction = ip
            }
          },
          metadata: ip
        }, Jp, Bp), (0, Rp.j)(pp, null, yp, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: pp => "texture" in pp,
            get: pp => pp.texture,
            set: (pp, ip) => {
              pp.texture = ip
            }
          },
          metadata: ip
        }, Np, Tp), (0, Rp.j)(pp, null, Up, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRoughnessFromMainTexture" in pp,
            get: pp => pp.useRoughnessFromMainTexture,
            set: (pp, ip) => {
              pp.useRoughnessFromMainTexture = ip
            }
          },
          metadata: ip
        }, fp, bp), (0, Rp.j)(pp, null, wp, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "textureRoughness" in pp,
            get: pp => pp.textureRoughness,
            set: (pp, ip) => {
              pp.textureRoughness = ip
            }
          },
          metadata: ip
        }, hp, np), (0, Rp.j)(pp, null, vp, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: pp => "remapF0OnInterfaceChange" in pp,
            get: pp => pp.remapF0OnInterfaceChange,
            set: (pp, ip) => {
              pp.remapF0OnInterfaceChange = ip
            }
          },
          metadata: ip
        }, Fp, gp), (0, Rp.j)(pp, null, tp, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "bumpTexture" in pp,
            get: pp => pp.bumpTexture,
            set: (pp, ip) => {
              pp.bumpTexture = ip
            }
          },
          metadata: ip
        }, rp, Zp), (0, Rp.j)(pp, null, Hp, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isTintEnabled" in pp,
            get: pp => pp.isTintEnabled,
            set: (pp, ip) => {
              pp.isTintEnabled = ip
            }
          },
          metadata: ip
        }, zp, Kp), (0, Rp.j)(pp, null, kp, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintTexture" in pp,
            get: pp => pp.tintTexture,
            set: (pp, ip) => {
              pp.tintTexture = ip
            }
          },
          metadata: ip
        }, Li, Yi), (0, Rp.j)(null, null, Ap, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensity" in pp,
            get: pp => pp.intensity,
            set: (pp, ip) => {
              pp.intensity = ip
            }
          },
          metadata: ip
        }, Ep, Xp), (0, Rp.j)(null, null, Pp, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "roughness" in pp,
            get: pp => pp.roughness,
            set: (pp, ip) => {
              pp.roughness = ip
            }
          },
          metadata: ip
        }, lp, Qp), (0, Rp.j)(null, null, dp, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintColor" in pp,
            get: pp => pp.tintColor,
            set: (pp, ip) => {
              pp.tintColor = ip
            }
          },
          metadata: ip
        }, ci, Oi), (0, Rp.j)(null, null, ep, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintColorAtDistance" in pp,
            get: pp => pp.tintColorAtDistance,
            set: (pp, ip) => {
              pp.tintColorAtDistance = ip
            }
          },
          metadata: ip
        }, oi, Ii), (0, Rp.j)(null, null, jp, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintThickness" in pp,
            get: pp => pp.tintThickness,
            set: (pp, ip) => {
              pp.tintThickness = ip
            }
          },
          metadata: ip
        }, Si, xi), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp._DefaultIndexOfRefraction = 1.5, pp
    })();
    class Oi extends hp.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let oi = (() => {
      var pp, ip, cp, Op;
      let op, Ip, Sp, xp, Lp, Yp, Dp, Ap = ap.b,
        Pp = [],
        Wp = [],
        yp = [],
        Up = [],
        wp = [],
        vp = [],
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Mp = [];
      return pp = class extends Ap {
        get isEnabled() {
          return (0, Rp.e)(this, ip, "f")
        }
        set isEnabled(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get texture() {
          return (0, Rp.e)(this, cp, "f")
        }
        set texture(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get thicknessTexture() {
          return (0, Rp.e)(this, Op, "f")
        }
        set thicknessTexture(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(op) {
          let Ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(op, "PBRIridescence", 110, new Oi, Ip), this._isEnabled = !1, ip.set(this, (0, Rp.l)(this, Pp, !1)), this.intensity = ((0, Rp.l)(this, Wp), (0, Rp.l)(this, yp, 1)), this.minimumThickness = ((0, Rp.l)(this, Up), (0, Rp.l)(this, wp, pp._DefaultMinimumThickness)), this.maximumThickness = ((0, Rp.l)(this, vp), (0, Rp.l)(this, tp, pp._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Rp.l)(this, Hp), (0, Rp.l)(this, dp, pp._DefaultIndexOfRefraction)), this._texture = ((0, Rp.l)(this, ep), null), cp.set(this, (0, Rp.l)(this, jp, null)), this._thicknessTexture = ((0, Rp.l)(this, kp), null), Op.set(this, (0, Rp.l)(this, mp, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Rp.l)(this, Mp), this._internalMarkAllSubMeshesAsTexturesDirty = op._dirtyCallbacks[1]
        }
        isReadyForSubMesh(pp, ip) {
          if (!this._isEnabled) return !0;
          if (pp._areTexturesDirty && ip.texturesEnabled) {
            if (this._texture && sp.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && sp.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(pp, ip) {
          this._isEnabled ? (pp.IRIDESCENCE = !0, pp._areTexturesDirty && ip.texturesEnabled && (this._texture && sp.c.IridescenceTextureEnabled ? (0, Vp.eb)(this._texture, pp, "IRIDESCENCE_TEXTURE") : pp.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && sp.c.IridescenceTextureEnabled ? (0, Vp.eb)(this._thicknessTexture, pp, "IRIDESCENCE_THICKNESS_TEXTURE") : pp.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (pp.IRIDESCENCE = !1, pp.IRIDESCENCE_TEXTURE = !1, pp.IRIDESCENCE_THICKNESS_TEXTURE = !1, pp.IRIDESCENCE_TEXTUREDIRECTUV = 0, pp.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(pp, ip) {
          if (!this._isEnabled) return;
          const cp = this._material.isFrozen;
          pp.useUbo && cp && pp.isSync || ((this._texture || this._thicknessTexture) && sp.c.IridescenceTextureEnabled && (pp.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Vp.A)(this._texture, pp, "iridescence"), this._thicknessTexture && (0, Vp.A)(this._thicknessTexture, pp, "iridescenceThickness")), pp.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), ip.texturesEnabled && (this._texture && sp.c.IridescenceTextureEnabled && pp.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && sp.c.IridescenceTextureEnabled && pp.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(pp) {
          return this._texture === pp || this._thicknessTexture === pp
        }
        getActiveTextures(pp) {
          this._texture && pp.push(this._texture), this._thicknessTexture && pp.push(this._thicknessTexture)
        }
        getAnimatables(pp) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && pp.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && pp.push(this._thicknessTexture)
        }
        dispose(pp) {
          pp && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(pp, ip, cp) {
          return pp.IRIDESCENCE && ip.addFallback(cp++, "IRIDESCENCE"), cp
        }
        getSamplers(pp) {
          pp.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ap[Symbol.metadata] ?? null) : void 0;
        op = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, qp.K)()], Sp = [(0, qp.K)()], xp = [(0, qp.K)()], Lp = [(0, qp.K)()], Yp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Dp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], (0, Rp.j)(pp, null, op, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: ip
        }, Pp, Wp), (0, Rp.j)(pp, null, Yp, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: pp => "texture" in pp,
            get: pp => pp.texture,
            set: (pp, ip) => {
              pp.texture = ip
            }
          },
          metadata: ip
        }, jp, kp), (0, Rp.j)(pp, null, Dp, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "thicknessTexture" in pp,
            get: pp => pp.thicknessTexture,
            set: (pp, ip) => {
              pp.thicknessTexture = ip
            }
          },
          metadata: ip
        }, mp, Mp), (0, Rp.j)(null, null, Ip, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensity" in pp,
            get: pp => pp.intensity,
            set: (pp, ip) => {
              pp.intensity = ip
            }
          },
          metadata: ip
        }, yp, Up), (0, Rp.j)(null, null, Sp, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: pp => "minimumThickness" in pp,
            get: pp => pp.minimumThickness,
            set: (pp, ip) => {
              pp.minimumThickness = ip
            }
          },
          metadata: ip
        }, wp, vp), (0, Rp.j)(null, null, xp, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: pp => "maximumThickness" in pp,
            get: pp => pp.maximumThickness,
            set: (pp, ip) => {
              pp.maximumThickness = ip
            }
          },
          metadata: ip
        }, tp, Hp), (0, Rp.j)(null, null, Lp, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: pp => "indexOfRefraction" in pp,
            get: pp => pp.indexOfRefraction,
            set: (pp, ip) => {
              pp.indexOfRefraction = ip
            }
          },
          metadata: ip
        }, dp, ep), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp._DefaultMinimumThickness = 100, pp._DefaultMaximumThickness = 400, pp._DefaultIndexOfRefraction = 1.3, pp
    })();
    class Ii extends hp.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Si = (() => {
      var pp, ip, cp, Op;
      let op, Ip, Sp, xp, Lp, Yp = ap.b,
        Dp = [],
        Ap = [],
        Pp = [],
        Wp = [],
        yp = [],
        Up = [],
        wp = [],
        vp = [],
        tp = [],
        Hp = [];
      return pp = class extends Yp {
        get isEnabled() {
          return (0, Rp.e)(this, ip, "f")
        }
        set isEnabled(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        set angle(pp) {
          this.direction.x = Math.cos(pp), this.direction.y = Math.sin(pp)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Rp.e)(this, cp, "f")
        }
        set texture(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get legacy() {
          return (0, Rp.e)(this, Op, "f")
        }
        set legacy(pp) {
          (0, Rp.f)(this, Op, pp, "f")
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
        constructor(pp) {
          let op = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pp, "PBRAnisotropic", 110, new Ii, op), this._isEnabled = !1, ip.set(this, (0, Rp.l)(this, Dp, !1)), this.intensity = ((0, Rp.l)(this, Ap), (0, Rp.l)(this, Pp, 1)), this.direction = ((0, Rp.l)(this, Wp), (0, Rp.l)(this, yp, new fp.l(1, 0))), this._texture = ((0, Rp.l)(this, Up), null), cp.set(this, (0, Rp.l)(this, wp, null)), this._legacy = ((0, Rp.l)(this, vp), !1), Op.set(this, (0, Rp.l)(this, tp, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Rp.l)(this, Hp), this._internalMarkAllSubMeshesAsTexturesDirty = pp._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = pp._dirtyCallbacks[16]
        }
        isReadyForSubMesh(pp, ip) {
          return !this._isEnabled || !(pp._areTexturesDirty && ip.texturesEnabled && this._texture && sp.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(pp, ip, cp) {
          this._isEnabled ? (pp.ANISOTROPIC = this._isEnabled, this._isEnabled && !cp.isVerticesDataPresent(bp.j.TangentKind) && (pp._needUVs = !0, pp.MAINUV1 = !0), pp._areTexturesDirty && ip.texturesEnabled && (this._texture && sp.c.AnisotropicTextureEnabled ? (0, Vp.eb)(this._texture, pp, "ANISOTROPIC_TEXTURE") : pp.ANISOTROPIC_TEXTURE = !1), pp._areMiscDirty && (pp.ANISOTROPIC_LEGACY = this._legacy)) : (pp.ANISOTROPIC = !1, pp.ANISOTROPIC_TEXTURE = !1, pp.ANISOTROPIC_TEXTUREDIRECTUV = 0, pp.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(pp, ip) {
          if (!this._isEnabled) return;
          const cp = this._material.isFrozen;
          pp.useUbo && cp && pp.isSync || (this._texture && sp.c.AnisotropicTextureEnabled && (pp.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Vp.A)(this._texture, pp, "anisotropy")), pp.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), ip.texturesEnabled && this._texture && sp.c.AnisotropicTextureEnabled && pp.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(pp) {
          return this._texture === pp
        }
        getActiveTextures(pp) {
          this._texture && pp.push(this._texture)
        }
        getAnimatables(pp) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && pp.push(this._texture)
        }
        dispose(pp) {
          pp && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(pp, ip, cp) {
          return pp.ANISOTROPIC && ip.addFallback(cp++, "ANISOTROPIC"), cp
        }
        getSamplers(pp) {
          pp.push("anisotropySampler")
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
        parse(pp, ip, cp) {
          super.parse(pp, ip, cp), void 0 === pp.legacy && (this.legacy = !0)
        }
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yp[Symbol.metadata] ?? null) : void 0;
        op = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, qp.K)()], Sp = [(0, qp.F)()], xp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Lp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], (0, Rp.j)(pp, null, op, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: ip
        }, Dp, Ap), (0, Rp.j)(pp, null, xp, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: pp => "texture" in pp,
            get: pp => pp.texture,
            set: (pp, ip) => {
              pp.texture = ip
            }
          },
          metadata: ip
        }, wp, vp), (0, Rp.j)(pp, null, Lp, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: pp => "legacy" in pp,
            get: pp => pp.legacy,
            set: (pp, ip) => {
              pp.legacy = ip
            }
          },
          metadata: ip
        }, tp, Hp), (0, Rp.j)(null, null, Ip, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensity" in pp,
            get: pp => pp.intensity,
            set: (pp, ip) => {
              pp.intensity = ip
            }
          },
          metadata: ip
        }, Pp, Wp), (0, Rp.j)(null, null, Sp, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: pp => "direction" in pp,
            get: pp => pp.direction,
            set: (pp, ip) => {
              pp.direction = ip
            }
          },
          metadata: ip
        }, yp, Up), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp
    })();
    class xi extends hp.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Li = (() => {
      var pp, ip, cp, Op, op, Ip, Sp, xp;
      let Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = ap.b,
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [];
      return pp = class extends vp {
        get isEnabled() {
          return (0, Rp.e)(this, ip, "f")
        }
        set isEnabled(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Rp.e)(this, cp, "f")
        }
        set linkSheenWithAlbedo(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get texture() {
          return (0, Rp.e)(this, Op, "f")
        }
        set texture(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Rp.e)(this, op, "f")
        }
        set useRoughnessFromMainTexture(pp) {
          (0, Rp.f)(this, op, pp, "f")
        }
        get roughness() {
          return (0, Rp.e)(this, Ip, "f")
        }
        set roughness(pp) {
          (0, Rp.f)(this, Ip, pp, "f")
        }
        get textureRoughness() {
          return (0, Rp.e)(this, Sp, "f")
        }
        set textureRoughness(pp) {
          (0, Rp.f)(this, Sp, pp, "f")
        }
        get albedoScaling() {
          return (0, Rp.e)(this, xp, "f")
        }
        set albedoScaling(pp) {
          (0, Rp.f)(this, xp, pp, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pp) {
          let Lp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pp, "Sheen", 120, new xi, Lp), this._isEnabled = !1, ip.set(this, (0, Rp.l)(this, tp, !1)), this._linkSheenWithAlbedo = ((0, Rp.l)(this, Hp), !1), cp.set(this, (0, Rp.l)(this, dp, !1)), this.intensity = ((0, Rp.l)(this, ep), (0, Rp.l)(this, jp, 1)), this.color = ((0, Rp.l)(this, kp), (0, Rp.l)(this, mp, Gp.d.White())), this._texture = ((0, Rp.l)(this, Mp), null), Op.set(this, (0, Rp.l)(this, Cp, null)), this._useRoughnessFromMainTexture = ((0, Rp.l)(this, Ep), !0), op.set(this, (0, Rp.l)(this, Xp, !0)), this._roughness = ((0, Rp.l)(this, lp), null), Ip.set(this, (0, Rp.l)(this, Qp, null)), this._textureRoughness = ((0, Rp.l)(this, Jp), null), Sp.set(this, (0, Rp.l)(this, Bp, null)), this._albedoScaling = ((0, Rp.l)(this, Np), !1), xp.set(this, (0, Rp.l)(this, Tp, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Rp.l)(this, fp), this._internalMarkAllSubMeshesAsTexturesDirty = pp._dirtyCallbacks[1]
        }
        isReadyForSubMesh(pp, ip) {
          if (!this._isEnabled) return !0;
          if (pp._areTexturesDirty && ip.texturesEnabled) {
            if (this._texture && sp.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && sp.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(pp, ip) {
          this._isEnabled ? (pp.SHEEN = !0, pp.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, pp.SHEEN_ROUGHNESS = null !== this._roughness, pp.SHEEN_ALBEDOSCALING = this._albedoScaling, pp.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, pp._areTexturesDirty && ip.texturesEnabled && (this._texture && sp.c.SheenTextureEnabled ? ((0, Vp.eb)(this._texture, pp, "SHEEN_TEXTURE"), pp.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : pp.SHEEN_TEXTURE = !1, this._textureRoughness && sp.c.SheenTextureEnabled ? (0, Vp.eb)(this._textureRoughness, pp, "SHEEN_TEXTURE_ROUGHNESS") : pp.SHEEN_TEXTURE_ROUGHNESS = !1)) : (pp.SHEEN = !1, pp.SHEEN_TEXTURE = !1, pp.SHEEN_TEXTURE_ROUGHNESS = !1, pp.SHEEN_LINKWITHALBEDO = !1, pp.SHEEN_ROUGHNESS = !1, pp.SHEEN_ALBEDOSCALING = !1, pp.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, pp.SHEEN_GAMMATEXTURE = !1, pp.SHEEN_TEXTUREDIRECTUV = 0, pp.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(pp, ip, cp, Op) {
          if (!this._isEnabled) return;
          const op = Op.materialDefines,
            Ip = this._material.isFrozen;
          pp.useUbo && Ip && pp.isSync || ((this._texture || this._textureRoughness) && sp.c.SheenTextureEnabled && (pp.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Vp.A)(this._texture, pp, "sheen"), this._textureRoughness && !op.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Vp.A)(this._textureRoughness, pp, "sheenRoughness")), pp.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && pp.updateFloat("vSheenRoughness", this._roughness)), ip.texturesEnabled && (this._texture && sp.c.SheenTextureEnabled && pp.setTexture("sheenSampler", this._texture), this._textureRoughness && !op.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && sp.c.SheenTextureEnabled && pp.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(pp) {
          return this._texture === pp || this._textureRoughness === pp
        }
        getActiveTextures(pp) {
          this._texture && pp.push(this._texture), this._textureRoughness && pp.push(this._textureRoughness)
        }
        getAnimatables(pp) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && pp.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && pp.push(this._textureRoughness)
        }
        dispose(pp) {
          pp && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(pp, ip, cp) {
          return pp.SHEEN && ip.addFallback(cp++, "SHEEN"), cp
        }
        getSamplers(pp) {
          pp.push("sheenSampler", "sheenRoughnessSampler")
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
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, xp = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(vp[Symbol.metadata] ?? null) : void 0;
        Lp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Yp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Dp = [(0, qp.K)()], Ap = [(0, qp.n)()], Pp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Wp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], yp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], (0, Rp.j)(pp, null, Lp, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: ip
        }, tp, Hp), (0, Rp.j)(pp, null, Yp, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: pp => "linkSheenWithAlbedo" in pp,
            get: pp => pp.linkSheenWithAlbedo,
            set: (pp, ip) => {
              pp.linkSheenWithAlbedo = ip
            }
          },
          metadata: ip
        }, dp, ep), (0, Rp.j)(pp, null, Pp, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: pp => "texture" in pp,
            get: pp => pp.texture,
            set: (pp, ip) => {
              pp.texture = ip
            }
          },
          metadata: ip
        }, Cp, Ep), (0, Rp.j)(pp, null, Wp, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRoughnessFromMainTexture" in pp,
            get: pp => pp.useRoughnessFromMainTexture,
            set: (pp, ip) => {
              pp.useRoughnessFromMainTexture = ip
            }
          },
          metadata: ip
        }, Xp, lp), (0, Rp.j)(pp, null, yp, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "roughness" in pp,
            get: pp => pp.roughness,
            set: (pp, ip) => {
              pp.roughness = ip
            }
          },
          metadata: ip
        }, Qp, Jp), (0, Rp.j)(pp, null, Up, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "textureRoughness" in pp,
            get: pp => pp.textureRoughness,
            set: (pp, ip) => {
              pp.textureRoughness = ip
            }
          },
          metadata: ip
        }, Bp, Np), (0, Rp.j)(pp, null, wp, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: pp => "albedoScaling" in pp,
            get: pp => pp.albedoScaling,
            set: (pp, ip) => {
              pp.albedoScaling = ip
            }
          },
          metadata: ip
        }, Tp, fp), (0, Rp.j)(null, null, Dp, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensity" in pp,
            get: pp => pp.intensity,
            set: (pp, ip) => {
              pp.intensity = ip
            }
          },
          metadata: ip
        }, jp, kp), (0, Rp.j)(null, null, Ap, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: pp => "color" in pp,
            get: pp => pp.color,
            set: (pp, ip) => {
              pp.color = ip
            }
          },
          metadata: ip
        }, mp, Mp), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp
    })();
    class Yi extends hp.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Di = (() => {
      var pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp;
      let vp, tp, Hp, dp, ep, jp, kp, mp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, bp, hp, np, Fp, gp, rp, Zp, zp, Kp, ii, ci, Oi, oi = ap.b,
        Ii = [],
        Si = [],
        xi = [],
        Li = [],
        Di = [],
        Ai = [],
        Pi = [],
        Wi = [],
        yi = [],
        Ui = [],
        wi = [],
        vi = [],
        ti = [],
        Hi = [],
        di = [],
        ei = [],
        ui = [],
        ji = [],
        ki = [],
        mi = [],
        Ri = [],
        qi = [],
        Mi = [],
        Ci = [],
        Ei = [],
        Xi = [],
        li = [],
        Qi = [],
        Ji = [],
        Bi = [],
        Ni = [],
        Ti = [],
        fi = [],
        bi = [],
        ai = [],
        ni = [],
        Fi = [],
        gi = [],
        Gi = [],
        ri = [],
        Zi = [],
        zi = [],
        si = [],
        Ki = [],
        Vi = [],
        pc = [],
        ic = [],
        cc = [],
        Oc = [],
        oc = [],
        Ic = [],
        Sc = [],
        xc = [],
        Lc = [],
        Yc = [],
        Dc = [],
        Ac = [],
        Pc = [],
        Wc = [],
        yc = [];
      return pp = class extends oi {
        get isRefractionEnabled() {
          return (0, Rp.e)(this, ip, "f")
        }
        set isRefractionEnabled(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Rp.e)(this, cp, "f")
        }
        set isTranslucencyEnabled(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get isDispersionEnabled() {
          return (0, Rp.e)(this, Op, "f")
        }
        set isDispersionEnabled(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        get isScatteringEnabled() {
          return (0, Rp.e)(this, op, "f")
        }
        set isScatteringEnabled(pp) {
          (0, Rp.f)(this, op, pp, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(pp) {
          this._scene.enableSubSurfaceForPrePass() && pp && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(pp))
        }
        get useAlbedoToTintRefraction() {
          return (0, Rp.e)(this, Ip, "f")
        }
        set useAlbedoToTintRefraction(pp) {
          (0, Rp.f)(this, Ip, pp, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Rp.e)(this, Sp, "f")
        }
        set useAlbedoToTintTranslucency(pp) {
          (0, Rp.f)(this, Sp, pp, "f")
        }
        get thicknessTexture() {
          return (0, Rp.e)(this, xp, "f")
        }
        set thicknessTexture(pp) {
          (0, Rp.f)(this, xp, pp, "f")
        }
        get refractionTexture() {
          return (0, Rp.e)(this, Lp, "f")
        }
        set refractionTexture(pp) {
          (0, Rp.f)(this, Lp, pp, "f")
        }
        get indexOfRefraction() {
          return (0, Rp.e)(this, Yp, "f")
        }
        set indexOfRefraction(pp) {
          (0, Rp.f)(this, Yp, pp, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(pp) {
          const ip = pp >= 1 ? pp : -1;
          this._volumeIndexOfRefraction !== ip && (this._volumeIndexOfRefraction = ip, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Rp.e)(this, Dp, "f")
        }
        set invertRefractionY(pp) {
          (0, Rp.f)(this, Dp, pp, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Rp.e)(this, Ap, "f")
        }
        set linkRefractionWithTransparency(pp) {
          (0, Rp.f)(this, Ap, pp, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Rp.e)(this, Pp, "f")
        }
        set useMaskFromThicknessTexture(pp) {
          (0, Rp.f)(this, Pp, pp, "f")
        }
        get refractionIntensityTexture() {
          return (0, Rp.e)(this, Wp, "f")
        }
        set refractionIntensityTexture(pp) {
          (0, Rp.f)(this, Wp, pp, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Rp.e)(this, yp, "f")
        }
        set translucencyIntensityTexture(pp) {
          (0, Rp.f)(this, yp, pp, "f")
        }
        get translucencyColorTexture() {
          return (0, Rp.e)(this, Up, "f")
        }
        set translucencyColorTexture(pp) {
          (0, Rp.f)(this, Up, pp, "f")
        }
        get useGltfStyleTextures() {
          return (0, Rp.e)(this, wp, "f")
        }
        set useGltfStyleTextures(pp) {
          (0, Rp.f)(this, wp, pp, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(pp) {
          this.legacyTranslucency = pp
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
        constructor(vp) {
          let tp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vp, "PBRSubSurface", 130, new Yi, tp), this._isRefractionEnabled = !1, ip.set(this, (0, Rp.l)(this, Ii, !1)), this._isTranslucencyEnabled = ((0, Rp.l)(this, Si), !1), cp.set(this, (0, Rp.l)(this, xi, !1)), this._isDispersionEnabled = ((0, Rp.l)(this, Li), !1), Op.set(this, (0, Rp.l)(this, Di, !1)), this._isScatteringEnabled = ((0, Rp.l)(this, Ai), !1), op.set(this, (0, Rp.l)(this, Pi, !1)), this._scatteringDiffusionProfileIndex = ((0, Rp.l)(this, Wi), (0, Rp.l)(this, yi, 0)), this.refractionIntensity = ((0, Rp.l)(this, Ui), (0, Rp.l)(this, wi, 1)), this.translucencyIntensity = ((0, Rp.l)(this, vi), (0, Rp.l)(this, ti, 1)), this._useAlbedoToTintRefraction = ((0, Rp.l)(this, Hi), !1), Ip.set(this, (0, Rp.l)(this, di, !1)), this._useAlbedoToTintTranslucency = ((0, Rp.l)(this, ei), !1), Sp.set(this, (0, Rp.l)(this, ui, !1)), this._thicknessTexture = ((0, Rp.l)(this, ji), null), xp.set(this, (0, Rp.l)(this, ki, null)), this._refractionTexture = ((0, Rp.l)(this, mi), null), Lp.set(this, (0, Rp.l)(this, Ri, null)), this._indexOfRefraction = ((0, Rp.l)(this, qi), 1.5), Yp.set(this, (0, Rp.l)(this, Mi, 1.5)), this._volumeIndexOfRefraction = ((0, Rp.l)(this, Ci), (0, Rp.l)(this, Ei, -1)), this._invertRefractionY = ((0, Rp.l)(this, Xi), !1), Dp.set(this, (0, Rp.l)(this, li, !1)), this._linkRefractionWithTransparency = ((0, Rp.l)(this, Qi), !1), Ap.set(this, (0, Rp.l)(this, Ji, !1)), this.minimumThickness = ((0, Rp.l)(this, Bi), (0, Rp.l)(this, Ni, 0)), this.maximumThickness = ((0, Rp.l)(this, Ti), (0, Rp.l)(this, fi, 1)), this.useThicknessAsDepth = ((0, Rp.l)(this, bi), (0, Rp.l)(this, ai, !1)), this.tintColor = ((0, Rp.l)(this, ni), (0, Rp.l)(this, Fi, Gp.d.White())), this.tintColorAtDistance = ((0, Rp.l)(this, gi), (0, Rp.l)(this, Gi, 1)), this.dispersion = ((0, Rp.l)(this, ri), (0, Rp.l)(this, Zi, 0)), this.diffusionDistance = ((0, Rp.l)(this, zi), (0, Rp.l)(this, si, Gp.d.White())), this._useMaskFromThicknessTexture = ((0, Rp.l)(this, Ki), !1), Pp.set(this, (0, Rp.l)(this, Vi, !1)), this._refractionIntensityTexture = ((0, Rp.l)(this, pc), null), Wp.set(this, (0, Rp.l)(this, ic, null)), this._translucencyIntensityTexture = ((0, Rp.l)(this, cc), null), yp.set(this, (0, Rp.l)(this, Oc, null)), this.translucencyColor = ((0, Rp.l)(this, oc), (0, Rp.l)(this, Ic, null)), this._translucencyColorTexture = ((0, Rp.l)(this, Sc), null), Up.set(this, (0, Rp.l)(this, xc, null)), this._useGltfStyleTextures = ((0, Rp.l)(this, Lc), !0), wp.set(this, (0, Rp.l)(this, Yc, !0)), this.applyAlbedoAfterSubSurface = ((0, Rp.l)(this, Dc), (0, Rp.l)(this, Ac, pp.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Rp.l)(this, Pc), (0, Rp.l)(this, Wc, pp.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Rp.l)(this, yc), this._scene = vp.Gl(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = vp._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = vp._dirtyCallbacks[32]
        }
        isReadyForSubMesh(pp, ip) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (pp._areTexturesDirty && ip.texturesEnabled) {
            if (this._thicknessTexture && sp.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && sp.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && sp.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && sp.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const pp = this._getRefractionTexture(ip);
            if (pp && sp.c.RefractionTextureEnabled && !pp.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(pp, ip) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return pp.SUBSURFACE = !1, pp.SS_DISPERSION = !1, pp.SS_TRANSLUCENCY = !1, pp.SS_SCATTERING = !1, pp.SS_REFRACTION = !1, pp.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, pp.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, pp.SS_THICKNESSANDMASK_TEXTURE = !1, pp.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, pp.SS_HAS_THICKNESS = !1, pp.SS_REFRACTIONINTENSITY_TEXTURE = !1, pp.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, pp.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, pp.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, pp.SS_REFRACTIONMAP_3D = !1, pp.SS_REFRACTIONMAP_OPPOSITEZ = !1, pp.SS_LODINREFRACTIONALPHA = !1, pp.SS_GAMMAREFRACTION = !1, pp.SS_RGBDREFRACTION = !1, pp.SS_LINEARSPECULARREFRACTION = !1, pp.SS_LINKREFRACTIONTOTRANSPARENCY = !1, pp.SS_ALBEDOFORREFRACTIONTINT = !1, pp.SS_ALBEDOFORTRANSLUCENCYTINT = !1, pp.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, pp.SS_USE_THICKNESS_AS_DEPTH = !1, pp.SS_USE_GLTF_TEXTURES = !1, pp.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, pp.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, pp.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(pp.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (pp._areTexturesDirty) {
            if (pp.SUBSURFACE = !0, pp.SS_DISPERSION = this._isDispersionEnabled, pp.SS_TRANSLUCENCY = this._isTranslucencyEnabled, pp.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, pp.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, pp.SS_SCATTERING = this._isScatteringEnabled, pp.SS_THICKNESSANDMASK_TEXTURE = !1, pp.SS_REFRACTIONINTENSITY_TEXTURE = !1, pp.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, pp.SS_HAS_THICKNESS = !1, pp.SS_USE_GLTF_TEXTURES = !1, pp.SS_REFRACTION = !1, pp.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, pp.SS_REFRACTIONMAP_3D = !1, pp.SS_GAMMAREFRACTION = !1, pp.SS_RGBDREFRACTION = !1, pp.SS_LINEARSPECULARREFRACTION = !1, pp.SS_REFRACTIONMAP_OPPOSITEZ = !1, pp.SS_LODINREFRACTIONALPHA = !1, pp.SS_LINKREFRACTIONTOTRANSPARENCY = !1, pp.SS_ALBEDOFORREFRACTIONTINT = !1, pp.SS_ALBEDOFORTRANSLUCENCYTINT = !1, pp.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, pp.SS_USE_THICKNESS_AS_DEPTH = !1, pp.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, pp.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, pp._areTexturesDirty && ip.texturesEnabled && (this._thicknessTexture && sp.c.ThicknessTextureEnabled && (0, Vp.eb)(this._thicknessTexture, pp, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && sp.c.RefractionIntensityTextureEnabled && (0, Vp.eb)(this._refractionIntensityTexture, pp, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && sp.c.TranslucencyIntensityTextureEnabled && (0, Vp.eb)(this._translucencyIntensityTexture, pp, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && sp.c.TranslucencyColorTextureEnabled && ((0, Vp.eb)(this._translucencyColorTexture, pp, "SS_TRANSLUCENCYCOLOR_TEXTURE"), pp.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), pp.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, pp.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, pp.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, pp.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && ip.texturesEnabled) {
              const cp = this._getRefractionTexture(ip);
              cp && sp.c.RefractionTextureEnabled && (pp.SS_REFRACTION = !0, pp.SS_REFRACTIONMAP_3D = cp.isCube, pp.SS_GAMMAREFRACTION = cp.gammaSpace, pp.SS_RGBDREFRACTION = cp.isRGBD, pp.SS_LINEARSPECULARREFRACTION = cp.linearSpecularLOD, pp.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && cp.isCube ? !cp.invertZ : cp.invertZ, pp.SS_LODINREFRACTIONALPHA = cp.lodLevelInAlpha, pp.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, pp.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, pp.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = cp.isCube && cp.boundingBoxSize, pp.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (pp.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(pp, ip, cp, Op) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) pp.updateFloat2("vThicknessParam", 0, 0);
            else {
              Op.getRenderingMesh().getWorldMatrix().decompose(fp.i.Zy[0]);
              const ip = Math.max(Math.abs(fp.i.Zy[0].x), Math.abs(fp.i.Zy[0].y), Math.abs(fp.i.Zy[0].z));
              pp.updateFloat2("vThicknessParam", this.minimumThickness * ip, (this.maximumThickness - this.minimumThickness) * ip)
            }
        }
        bindForSubMesh(pp, ip, cp, Op) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const op = Op.materialDefines,
            Ip = this._material.isFrozen,
            Sp = this._material.realTimeFiltering,
            xp = op.LODBASEDMICROSFURACE,
            Lp = this._getRefractionTexture(ip);
          if (!pp.useUbo || !Ip || !pp.isSync) {
            if (this._thicknessTexture && sp.c.ThicknessTextureEnabled && (pp.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Vp.A)(this._thicknessTexture, pp, "thickness")), this._refractionIntensityTexture && sp.c.RefractionIntensityTextureEnabled && op.SS_REFRACTIONINTENSITY_TEXTURE && (pp.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Vp.A)(this._refractionIntensityTexture, pp, "refractionIntensity")), this._translucencyColorTexture && sp.c.TranslucencyColorTextureEnabled && op.SS_TRANSLUCENCYCOLOR_TEXTURE && (pp.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Vp.A)(this._translucencyColorTexture, pp, "translucencyColor")), this._translucencyIntensityTexture && sp.c.TranslucencyIntensityTextureEnabled && op.SS_TRANSLUCENCYINTENSITY_TEXTURE && (pp.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Vp.A)(this._translucencyIntensityTexture, pp, "translucencyIntensity")), Lp && sp.c.RefractionTextureEnabled) {
              pp.I3("refractionMatrix", Lp.getRefractionTextureMatrix());
              let ip = 1;
              Lp.isCube || Lp.depth && (ip = Lp.depth);
              const cp = Lp.getSize().width,
                Op = this.volumeIndexOfRefraction;
              if (pp.updateFloat4("vRefractionInfos", Lp.level, 1 / Op, ip, this._invertRefractionY ? -1 : 1), pp.updateFloat4("vRefractionMicrosurfaceInfos", cp, Lp.lodGenerationScale, Lp.lodGenerationOffset, 1 / this.indexOfRefraction), Sp && pp.updateFloat2("vRefractionFilteringInfo", cp, Math.log2(cp)), Lp.boundingBoxSize) {
                const ip = Lp;
                pp.updateVector3("vRefractionPosition", ip.boundingBoxPosition), pp.updateVector3("vRefractionSize", ip.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && pp.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), pp.updateColor3("vDiffusionDistance", this.diffusionDistance), pp.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), pp.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), pp.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), pp.updateFloat("dispersion", this.dispersion)
          }
          ip.texturesEnabled && (this._thicknessTexture && sp.c.ThicknessTextureEnabled && pp.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && sp.c.RefractionIntensityTextureEnabled && op.SS_REFRACTIONINTENSITY_TEXTURE && pp.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && sp.c.TranslucencyIntensityTextureEnabled && op.SS_TRANSLUCENCYINTENSITY_TEXTURE && pp.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && sp.c.TranslucencyColorTextureEnabled && op.SS_TRANSLUCENCYCOLOR_TEXTURE && pp.setTexture("translucencyColorSampler", this._translucencyColorTexture), Lp && sp.c.RefractionTextureEnabled && (xp ? pp.setTexture("refractionSampler", Lp) : (pp.setTexture("refractionSampler", Lp._lodTextureMid || Lp), pp.setTexture("refractionSamplerLow", Lp._lodTextureLow || Lp), pp.setTexture("refractionSamplerHigh", Lp._lodTextureHigh || Lp))))
        }
        _getRefractionTexture(pp) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? pp.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(pp) {
          sp.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && pp.push(this._refractionTexture)
        }
        hasTexture(pp) {
          return this._thicknessTexture === pp || (this._refractionTexture === pp || (this._refractionIntensityTexture === pp || (this._translucencyIntensityTexture === pp || this._translucencyColorTexture === pp)))
        }
        hasRenderTargetTextures() {
          return !!(sp.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(pp) {
          this._thicknessTexture && pp.push(this._thicknessTexture), this._refractionTexture && pp.push(this._refractionTexture), this._refractionIntensityTexture && pp.push(this._refractionIntensityTexture), this._translucencyColorTexture && pp.push(this._translucencyColorTexture), this._translucencyIntensityTexture && pp.push(this._translucencyIntensityTexture)
        }
        getAnimatables(pp) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && pp.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && pp.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && pp.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && pp.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && pp.push(this._translucencyIntensityTexture)
        }
        dispose(pp) {
          pp && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(pp, ip, cp) {
          return pp.SS_SCATTERING && ip.addFallback(cp++, "SS_SCATTERING"), pp.SS_TRANSLUCENCY && ip.addFallback(cp++, "SS_TRANSLUCENCY"), cp
        }
        getSamplers(pp) {
          pp.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, xp = new WeakMap, Lp = new WeakMap, Yp = new WeakMap, Dp = new WeakMap, Ap = new WeakMap, Pp = new WeakMap, Wp = new WeakMap, yp = new WeakMap, Up = new WeakMap, wp = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(oi[Symbol.metadata] ?? null) : void 0;
        vp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], tp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Hp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], dp = [(0, qp.K)(), (0, qp.e)("_markScenePrePassDirty")], ep = [(0, qp.K)()], jp = [(0, qp.K)()], kp = [(0, qp.K)()], mp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Mp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Cp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ep = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Xp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], lp = [(0, qp.K)()], Qp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Jp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Bp = [(0, qp.K)()], Np = [(0, qp.K)()], Tp = [(0, qp.K)()], bp = [(0, qp.n)()], hp = [(0, qp.K)()], np = [(0, qp.K)()], Fp = [(0, qp.n)()], gp = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], rp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Zp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], zp = [(0, qp.n)()], Kp = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ii = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, qp.K)()], Oi = [(0, qp.K)()], (0, Rp.j)(pp, null, vp, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isRefractionEnabled" in pp,
            get: pp => pp.isRefractionEnabled,
            set: (pp, ip) => {
              pp.isRefractionEnabled = ip
            }
          },
          metadata: ip
        }, Ii, Si), (0, Rp.j)(pp, null, tp, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isTranslucencyEnabled" in pp,
            get: pp => pp.isTranslucencyEnabled,
            set: (pp, ip) => {
              pp.isTranslucencyEnabled = ip
            }
          },
          metadata: ip
        }, xi, Li), (0, Rp.j)(pp, null, Hp, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isDispersionEnabled" in pp,
            get: pp => pp.isDispersionEnabled,
            set: (pp, ip) => {
              pp.isDispersionEnabled = ip
            }
          },
          metadata: ip
        }, Di, Ai), (0, Rp.j)(pp, null, dp, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isScatteringEnabled" in pp,
            get: pp => pp.isScatteringEnabled,
            set: (pp, ip) => {
              pp.isScatteringEnabled = ip
            }
          },
          metadata: ip
        }, Pi, Wi), (0, Rp.j)(pp, null, mp, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAlbedoToTintRefraction" in pp,
            get: pp => pp.useAlbedoToTintRefraction,
            set: (pp, ip) => {
              pp.useAlbedoToTintRefraction = ip
            }
          },
          metadata: ip
        }, di, ei), (0, Rp.j)(pp, null, Mp, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAlbedoToTintTranslucency" in pp,
            get: pp => pp.useAlbedoToTintTranslucency,
            set: (pp, ip) => {
              pp.useAlbedoToTintTranslucency = ip
            }
          },
          metadata: ip
        }, ui, ji), (0, Rp.j)(pp, null, Cp, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "thicknessTexture" in pp,
            get: pp => pp.thicknessTexture,
            set: (pp, ip) => {
              pp.thicknessTexture = ip
            }
          },
          metadata: ip
        }, ki, mi), (0, Rp.j)(pp, null, Ep, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "refractionTexture" in pp,
            get: pp => pp.refractionTexture,
            set: (pp, ip) => {
              pp.refractionTexture = ip
            }
          },
          metadata: ip
        }, Ri, qi), (0, Rp.j)(pp, null, Xp, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: pp => "indexOfRefraction" in pp,
            get: pp => pp.indexOfRefraction,
            set: (pp, ip) => {
              pp.indexOfRefraction = ip
            }
          },
          metadata: ip
        }, Mi, Ci), (0, Rp.j)(pp, null, Qp, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: pp => "invertRefractionY" in pp,
            get: pp => pp.invertRefractionY,
            set: (pp, ip) => {
              pp.invertRefractionY = ip
            }
          },
          metadata: ip
        }, li, Qi), (0, Rp.j)(pp, null, Jp, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: pp => "linkRefractionWithTransparency" in pp,
            get: pp => pp.linkRefractionWithTransparency,
            set: (pp, ip) => {
              pp.linkRefractionWithTransparency = ip
            }
          },
          metadata: ip
        }, Ji, Bi), (0, Rp.j)(pp, null, gp, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "useMaskFromThicknessTexture" in pp,
            get: pp => pp.useMaskFromThicknessTexture,
            set: (pp, ip) => {
              pp.useMaskFromThicknessTexture = ip
            }
          },
          metadata: ip
        }, Vi, pc), (0, Rp.j)(pp, null, rp, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "refractionIntensityTexture" in pp,
            get: pp => pp.refractionIntensityTexture,
            set: (pp, ip) => {
              pp.refractionIntensityTexture = ip
            }
          },
          metadata: ip
        }, ic, cc), (0, Rp.j)(pp, null, Zp, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "translucencyIntensityTexture" in pp,
            get: pp => pp.translucencyIntensityTexture,
            set: (pp, ip) => {
              pp.translucencyIntensityTexture = ip
            }
          },
          metadata: ip
        }, Oc, oc), (0, Rp.j)(pp, null, Kp, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "translucencyColorTexture" in pp,
            get: pp => pp.translucencyColorTexture,
            set: (pp, ip) => {
              pp.translucencyColorTexture = ip
            }
          },
          metadata: ip
        }, xc, Lc), (0, Rp.j)(pp, null, ii, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: pp => "useGltfStyleTextures" in pp,
            get: pp => pp.useGltfStyleTextures,
            set: (pp, ip) => {
              pp.useGltfStyleTextures = ip
            }
          },
          metadata: ip
        }, Yc, Dc), (0, Rp.j)(null, null, ep, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: pp => "_scatteringDiffusionProfileIndex" in pp,
            get: pp => pp._scatteringDiffusionProfileIndex,
            set: (pp, ip) => {
              pp._scatteringDiffusionProfileIndex = ip
            }
          },
          metadata: ip
        }, yi, Ui), (0, Rp.j)(null, null, jp, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "refractionIntensity" in pp,
            get: pp => pp.refractionIntensity,
            set: (pp, ip) => {
              pp.refractionIntensity = ip
            }
          },
          metadata: ip
        }, wi, vi), (0, Rp.j)(null, null, kp, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "translucencyIntensity" in pp,
            get: pp => pp.translucencyIntensity,
            set: (pp, ip) => {
              pp.translucencyIntensity = ip
            }
          },
          metadata: ip
        }, ti, Hi), (0, Rp.j)(null, null, lp, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: pp => "_volumeIndexOfRefraction" in pp,
            get: pp => pp._volumeIndexOfRefraction,
            set: (pp, ip) => {
              pp._volumeIndexOfRefraction = ip
            }
          },
          metadata: ip
        }, Ei, Xi), (0, Rp.j)(null, null, Bp, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: pp => "minimumThickness" in pp,
            get: pp => pp.minimumThickness,
            set: (pp, ip) => {
              pp.minimumThickness = ip
            }
          },
          metadata: ip
        }, Ni, Ti), (0, Rp.j)(null, null, Np, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: pp => "maximumThickness" in pp,
            get: pp => pp.maximumThickness,
            set: (pp, ip) => {
              pp.maximumThickness = ip
            }
          },
          metadata: ip
        }, fi, bi), (0, Rp.j)(null, null, Tp, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: pp => "useThicknessAsDepth" in pp,
            get: pp => pp.useThicknessAsDepth,
            set: (pp, ip) => {
              pp.useThicknessAsDepth = ip
            }
          },
          metadata: ip
        }, ai, ni), (0, Rp.j)(null, null, bp, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintColor" in pp,
            get: pp => pp.tintColor,
            set: (pp, ip) => {
              pp.tintColor = ip
            }
          },
          metadata: ip
        }, Fi, gi), (0, Rp.j)(null, null, hp, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: pp => "tintColorAtDistance" in pp,
            get: pp => pp.tintColorAtDistance,
            set: (pp, ip) => {
              pp.tintColorAtDistance = ip
            }
          },
          metadata: ip
        }, Gi, ri), (0, Rp.j)(null, null, np, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: pp => "dispersion" in pp,
            get: pp => pp.dispersion,
            set: (pp, ip) => {
              pp.dispersion = ip
            }
          },
          metadata: ip
        }, Zi, zi), (0, Rp.j)(null, null, Fp, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: pp => "diffusionDistance" in pp,
            get: pp => pp.diffusionDistance,
            set: (pp, ip) => {
              pp.diffusionDistance = ip
            }
          },
          metadata: ip
        }, si, Ki), (0, Rp.j)(null, null, zp, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "translucencyColor" in pp,
            get: pp => pp.translucencyColor,
            set: (pp, ip) => {
              pp.translucencyColor = ip
            }
          },
          metadata: ip
        }, Ic, Sc), (0, Rp.j)(null, null, ci, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: pp => "applyAlbedoAfterSubSurface" in pp,
            get: pp => pp.applyAlbedoAfterSubSurface,
            set: (pp, ip) => {
              pp.applyAlbedoAfterSubSurface = ip
            }
          },
          metadata: ip
        }, Ac, Pc), (0, Rp.j)(null, null, Oi, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: pp => "legacyTranslucency" in pp,
            get: pp => pp.legacyTranslucency,
            set: (pp, ip) => {
              pp.legacyTranslucency = ip
            }
          },
          metadata: ip
        }, Wc, yc), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, pp.DEFAULT_LEGACY_TRANSLUCENCY = !1, pp
    })();
    var Ai = cp(40533),
      Pi = cp(40516),
      Wi = cp(40544),
      yi = cp(40546),
      Ui = cp(40550),
      wi = cp(40554),
      vi = cp(40556),
      ti = cp(40562),
      Hi = cp(40096);
    const di = {
      effect: null,
      subMesh: null
    };
    class ei extends((0, vi.c)((0, wi.c)(hp.c))) {}
    class ui extends((0, rp.h)(ei)) {
      constructor(pp) {
        super(pp), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class ji extends((0, ti.b)(zp.e)) {}
    let ki = (() => {
      var pp, ip;
      let Op, op = ji,
        Sp = [],
        xp = [];
      return pp = class extends op {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(pp) {
          this._realTimeFiltering = pp, this.ocp(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(pp) {
          this._realTimeFilteringQuality = pp, this.ocp(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Rp.e)(this, ip, "f")
        }
        set debugMode(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        constructor(cp, Op) {
          super(cp, Op, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || pp.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new fp.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = pp.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Gp.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Gp.d(0, 0, 0), this._albedoColor = new Gp.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Gp.d(1, 1, 1), this._reflectionColor = new Gp.d(1, 1, 1), this._emissiveColor = new Gp.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = pp.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Cp.g(16), this._globalAmbientColor = new Gp.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ip.set(this, (0, Rp.l)(this, Sp, 0)), this.debugLimit = ((0, Rp.l)(this, xp), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Fp(this), this.clearCoat = new ci(this), this.iridescence = new oi(this), this.anisotropy = new Si(this), this.sheen = new Li(this), this.subSurface = new Di(this), this.detailMap = new Ai.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), sp.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Jp(this.Gl()), this.prePassConfiguration = new gp.c
        }
        get hasRenderTargetTextures() {
          return !!(sp.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === pp.PBRMATERIAL_OPAQUE || this._transparencyMode === pp.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === pp.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== pp.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(pp, ip, cp) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Op = ip._drawWrapper;
          if (Op.effect && this.isFrozen && Op._wasPreviouslyReady && Op._wasPreviouslyUsingInstances === cp) return !0;
          ip.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ip.materialDefines = new ui(this._eventInfo.defineNames));
          const op = ip.materialDefines;
          if (this._isReadyForSubMesh(ip)) return !0;
          const Ip = this.Gl(),
            Sp = Ip.gy();
          if (op._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Ip.texturesEnabled)) {
            if (this._albedoTexture && sp.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && sp.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && sp.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && sp.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && sp.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const pp = this._getReflectionTexture();
            if (pp && sp.c.ReflectionTextureEnabled) {
              if (!pp.isReadyOrNotBlocking()) return !1;
              if (pp.irradianceTexture) {
                if (!pp.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!pp.sphericalPolynomial && pp.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && sp.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && sp.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (sp.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Sp.getCaps().standardDerivatives && this._bumpTexture && sp.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && sp.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = op, this._eventInfo.subMesh = ip, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (op._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (op.AREALIGHTUSED || op.CLUSTLIGHT_BATCH)
            for (let Ap = 0; Ap < pp.lightSources.length; Ap++)
              if (!pp.lightSources[Ap]._isReady()) return !1;
          if (Sp.getCaps().standardDerivatives || pp.isVerticesDataPresent(bp.j.NormalKind) || (pp.createNormals(!0), Mp.e.Warn("PBRMaterial: Normals have been created for the mesh: " + pp.name)), !(0, Vp.c)(Ip, pp, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const xp = ip.effect,
            Lp = op._areLightsDisposed,
            Yp = this._prepareEffect(pp, ip.getRenderingMesh(), op, this.onCompiled, this.onError, cp, null);
          let Dp = !1;
          if (Yp)
            if (this._onEffectCreatedObservable && (di.effect = Yp, di.subMesh = ip, this._onEffectCreatedObservable.notifyObservers(di)), this.allowShaderHotSwapping && xp && !Yp.isReady()) {
              if (op.markAsUnprocessed(), Dp = this.isFrozen, Lp) return op._areLightsDisposed = !0, !1
            } else Ip.resetCachedMaterial(), ip.setEffect(Yp, op, this._materialContext);
          return !(!ip.effect || !ip.effect.isReady()) && (op._renderId = Ip.getRenderId(), Op._wasPreviouslyReady = !Dp, Op._wasPreviouslyUsingInstances = !!cp, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(ip, cp, Op) {
          let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(ip, cp, Op, Sp, xp), !Op.isDirty) return null;
          Op.markAsProcessed();
          const Lp = this.Gl().gy(),
            Yp = new Kp.c;
          let Dp = 0;
          Op.USESPHERICALINVERTEX && Yp.addFallback(Dp++, "USESPHERICALINVERTEX"), Op.FOG && Yp.addFallback(Dp, "FOG"), Op.SPECULARAA && Yp.addFallback(Dp, "SPECULARAA"), Op.POINTSIZE && Yp.addFallback(Dp, "POINTSIZE"), Op.LOGARITHMICDEPTH && Yp.addFallback(Dp, "LOGARITHMICDEPTH"), Op.PARALLAX && Yp.addFallback(Dp, "PARALLAX"), Op.PARALLAX_RHS && Yp.addFallback(Dp, "PARALLAX_RHS"), Op.PARALLAXOCCLUSION && Yp.addFallback(Dp++, "PARALLAXOCCLUSION"), Op.ENVIRONMENTBRDF && Yp.addFallback(Dp++, "ENVIRONMENTBRDF"), Op.TANGENT && Yp.addFallback(Dp++, "TANGENT"), Op.BUMP && Yp.addFallback(Dp++, "BUMP"), Dp = (0, Vp.E)(Op, Yp, this._maxSimultaneousLights, Dp), Op.SPECULARTERM && Yp.addFallback(Dp++, "SPECULARTERM"), Op.USESPHERICALFROMREFLECTIONMAP && Yp.addFallback(Dp++, "USESPHERICALFROMREFLECTIONMAP"), Op.USEIRRADIANCEMAP && Yp.addFallback(Dp++, "USEIRRADIANCEMAP"), Op.LIGHTMAP && Yp.addFallback(Dp++, "LIGHTMAP"), Op.NORMAL && Yp.addFallback(Dp++, "NORMAL"), Op.AMBIENT && Yp.addFallback(Dp++, "AMBIENT"), Op.EMISSIVE && Yp.addFallback(Dp++, "EMISSIVE"), Op.VERTEXCOLOR && Yp.addFallback(Dp++, "VERTEXCOLOR"), Op.MORPHTARGETS && Yp.addFallback(Dp++, "MORPHTARGETS"), Op.MULTIVIEW && Yp.addFallback(0, "MULTIVIEW");
          const Ap = [bp.j.PositionKind];
          Op.NORMAL && Ap.push(bp.j.NormalKind), Op.TANGENT && Ap.push(bp.j.TangentKind);
          for (let pp = 1; pp <= 6; ++pp) Op["UV" + pp] && Ap.push(`uv${1===pp?"":pp}`);
          Op.VERTEXCOLOR && Ap.push(bp.j.ColorKind), (0, Vp.K)(Ap, ip, Op, Yp), (0, Vp.L)(Ap, Op), (0, Vp.P)(Ap, ip, Op), (0, Vp.G)(Ap, ip, Op);
          let Pp = "pbr";
          const Wp = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            yp = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Vp.ub)(Wp, yp, !0);
          const Up = ["Material", "Scene", "Mesh"],
            wp = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Op.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Yp, this._eventInfo.fallbackRank = Dp, this._eventInfo.defines = Op, this._eventInfo.uniforms = Wp, this._eventInfo.attributes = Ap, this._eventInfo.samplers = yp, this._eventInfo.uniformBuffersNames = Up, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ip, this._eventInfo.indexParameters = wp, this._callbackPluginEventGeneric(128, this._eventInfo), Ui.e.AddUniformsAndSamplers(Wp, yp), gp.c.AddUniforms(Wp), gp.c.AddSamplers(yp), (0, Pi.c)(Wp), this._useVertexPulling) {
            const pp = cp?.geometry;
            pp && (this._vertexPullingMetadata = (0, Wi.i)(pp), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
              Wp.push(`vp_${ip}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Zp.c && (Zp.c.PrepareUniforms(Wp, Op), Zp.c.PrepareSamplers(yp, Op)), (0, Vp.xb)({
            uniformsNames: Wp,
            uniformBuffersNames: Up,
            samplers: yp,
            defines: Op,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const vp = {};
          this.customShaderNameResolve && (Pp = this.customShaderNameResolve(Pp, Wp, Up, yp, Op, Ap, vp));
          const tp = Op.toString(),
            Hp = Lp.createEffect(Pp, {
              attributes: Ap,
              uniformsNames: Wp,
              uniformBuffersNames: Up,
              samplers: yp,
              defines: tp,
              fallbacks: Yp,
              onCompiled: op,
              onError: Ip,
              indexParameters: wp,
              processFinalCode: vp.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Op.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: pp._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Lp);
          return this._eventInfo.customCode = void 0, Hp
        }
        _prepareDefines(ip, cp, Op) {
          let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Sp = cp.hasThinInstances,
            xp = this.Gl(),
            Lp = xp.gy();
          (0, Vp.ab)(xp, ip, Op, !0, this._maxSimultaneousLights, this._disableLighting), Op._needNormals = !0, (0, Vp.ib)(xp, Op);
          const Yp = this.needAlphaBlendingForMesh(ip) && this.Gl().useOrderIndependentTransparency;
          if ((0, Vp.nb)(xp, Op, this.canRenderToMRT && !Yp), (0, Vp.lb)(xp, Op, Yp), Ui.e.PrepareDefines(Lp.currentRenderPassId, ip, Op), Op.METALLICWORKFLOW = this.isMetallicWorkflow(), Op._areTexturesDirty) {
            Op._needUVs = !1;
            for (let pp = 1; pp <= 6; ++pp) Op["MAINUV" + pp] = !1;
            if (xp.texturesEnabled) {
              Op.ALBEDODIRECTUV = 0, Op.BASE_WEIGHTDIRECTUV = 0, Op.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Op.AMBIENTDIRECTUV = 0, Op.OPACITYDIRECTUV = 0, Op.EMISSIVEDIRECTUV = 0, Op.REFLECTIVITYDIRECTUV = 0, Op.MICROSURFACEMAPDIRECTUV = 0, Op.METALLIC_REFLECTANCEDIRECTUV = 0, Op.REFLECTANCEDIRECTUV = 0, Op.BUMPDIRECTUV = 0, Op.LIGHTMAPDIRECTUV = 0, Lp.getCaps().textureLOD && (Op.LODBASEDMICROSFURACE = !0), this._albedoTexture && sp.c.DiffuseTextureEnabled ? ((0, Vp.eb)(this._albedoTexture, Op, "ALBEDO"), Op.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Op.ALBEDO = !1, this._baseWeightTexture && sp.c.BaseWeightTextureEnabled ? (0, Vp.eb)(this._baseWeightTexture, Op, "BASE_WEIGHT") : Op.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && sp.c.BaseDiffuseRoughnessTextureEnabled ? (0, Vp.eb)(this._baseDiffuseRoughnessTexture, Op, "BASE_DIFFUSE_ROUGHNESS") : Op.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && sp.c.AmbientTextureEnabled ? ((0, Vp.eb)(this._ambientTexture, Op, "AMBIENT"), Op.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Op.AMBIENT = !1, this._opacityTexture && sp.c.OpacityTextureEnabled ? ((0, Vp.eb)(this._opacityTexture, Op, "OPACITY"), Op.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Op.OPACITY = !1;
              const pp = this._getReflectionTexture(),
                ip = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Lp.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Vp.Y)(xp, pp, Op, this.realTimeFiltering, this.realTimeFilteringQuality, !ip), this._lightmapTexture && sp.c.LightmapTextureEnabled ? ((0, Vp.eb)(this._lightmapTexture, Op, "LIGHTMAP"), Op.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Op.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Op.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Op.LIGHTMAP = !1, this._emissiveTexture && sp.c.EmissiveTextureEnabled ? ((0, Vp.eb)(this._emissiveTexture, Op, "EMISSIVE"), Op.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Op.EMISSIVE = !1, sp.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Vp.eb)(this._metallicTexture, Op, "REFLECTIVITY"), Op.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Op.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Op.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Op.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Op.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Vp.eb)(this._reflectivityTexture, Op, "REFLECTIVITY"), Op.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Op.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Op.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Op.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Op.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Vp.eb)(this._metallicReflectanceTexture, Op, "METALLIC_REFLECTANCE"), Op.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Op.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Vp.eb)(this._reflectanceTexture, Op, "REFLECTANCE"), Op.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Op.REFLECTANCE = !1) : (Op.METALLIC_REFLECTANCE = !1, Op.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Vp.eb)(this._microSurfaceTexture, Op, "MICROSURFACEMAP") : Op.MICROSURFACEMAP = !1) : (Op.REFLECTIVITY = !1, Op.MICROSURFACEMAP = !1), Lp.getCaps().standardDerivatives && this._bumpTexture && sp.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, Vp.eb)(this._bumpTexture, Op, "BUMP"), this._useParallax && this._albedoTexture && sp.c.DiffuseTextureEnabled ? (Op.PARALLAX = !0, Op.PARALLAX_RHS = xp.useRightHandedSystem, Op.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Op.PARALLAX = !1, Op.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Op.BUMP = !1, Op.PARALLAX = !1, Op.PARALLAX_RHS = !1, Op.PARALLAXOCCLUSION = !1, Op.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && sp.c.ReflectionTextureEnabled ? (Op.ENVIRONMENTBRDF = !0, Op.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Op.ENVIRONMENTBRDF = !1, Op.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Op.ALPHAFROMALBEDO = !0 : Op.ALPHAFROMALBEDO = !1
            }
            Op.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === pp.LIGHTFALLOFF_STANDARD ? (Op.USEPHYSICALLIGHTFALLOFF = !1, Op.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === pp.LIGHTFALLOFF_GLTF ? (Op.USEPHYSICALLIGHTFALLOFF = !1, Op.USEGLTFLIGHTFALLOFF = !0) : (Op.USEPHYSICALLIGHTFALLOFF = !0, Op.USEGLTFLIGHTFALLOFF = !1), Op.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Op.TWOSIDEDLIGHTING = !0 : Op.TWOSIDEDLIGHTING = !1, Op.MIRRORED = !!xp._mirroredCameraPosition, Op.SPECULARAA = Lp.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Op._areTexturesDirty || Op._areMiscDirty) && (Op.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Op.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Op.ALPHABLEND = this.needAlphaBlendingForMesh(ip), Op.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Op.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Op._areTexturesDirty && (Op.TEXTURE_REPETITION_MODE = Lp.version > 1 || Lp.isWebGPU ? this.textureRepetitionMode : 0), Op._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Op), Op.FORCENORMALFORWARD = this._forceNormalForward, Op.RADIANCEOCCLUSION = this._useRadianceOcclusion, Op.HORIZONOCCLUSION = this._useHorizonOcclusion, Op._areMiscDirty && ((0, Vp.hb)(ip, xp, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ip), Op, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cp, this._isVertexOutputInvariant), Op.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ip.isVerticesDataPresent(bp.j.NormalKind), Op.DEBUGMODE = this._debugMode), (0, Vp.X)(xp, Lp, this, Op, !!op, Ip, Sp), this._eventInfo.defines = Op, this._eventInfo.mesh = ip, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Vp.T)(ip, Op, !0, !0, !0, this._transparencyMode !== pp.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(pp, ip, cp) {
          const Op = {
            clipPlane: !1,
            useInstances: !1,
            ...cp
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const cp = new ui(this._eventInfo.defineNames),
              op = this._prepareEffect(pp, pp, cp, void 0, void 0, Op.useInstances, Op.clipPlane);
            this._onEffectCreatedObservable && (di.effect = op, di.subMesh = null, this._onEffectCreatedObservable.notifyObservers(di)), op.isReady() ? ip && ip(this) : op.onCompileObservable.add((() => {
              ip && ip(this)
            }))
          })()
        }
        buildUniformLayout() {
          const pp = this._uniformBuffer;
          pp.addUniform("vAlbedoInfos", 2), pp.addUniform("vBaseWeightInfos", 2), pp.addUniform("vBaseDiffuseRoughnessInfos", 2), pp.addUniform("vAmbientInfos", 4), pp.addUniform("vOpacityInfos", 2), pp.addUniform("vEmissiveInfos", 2), pp.addUniform("vLightmapInfos", 2), pp.addUniform("vReflectivityInfos", 3), pp.addUniform("vMicroSurfaceSamplerInfos", 2), pp.addUniform("vBumpInfos", 3), pp.addUniform("albedoMatrix", 16), pp.addUniform("baseWeightMatrix", 16), pp.addUniform("baseDiffuseRoughnessMatrix", 16), pp.addUniform("ambientMatrix", 16), pp.addUniform("opacityMatrix", 16), pp.addUniform("emissiveMatrix", 16), pp.addUniform("lightmapMatrix", 16), pp.addUniform("reflectivityMatrix", 16), pp.addUniform("microSurfaceSamplerMatrix", 16), pp.addUniform("bumpMatrix", 16), pp.addUniform("vTangentSpaceParams", 2), pp.addUniform("vAlbedoColor", 4), pp.addUniform("baseWeight", 1), pp.addUniform("baseDiffuseRoughness", 1), pp.addUniform("vLightingIntensity", 4), pp.addUniform("pointSize", 1), pp.addUniform("vReflectivityColor", 4), pp.addUniform("vEmissiveColor", 3), pp.addUniform("vAmbientColor", 3), pp.addUniform("vDebugMode", 2), pp.addUniform("vMetallicReflectanceFactors", 4), pp.addUniform("vMetallicReflectanceInfos", 2), pp.addUniform("metallicReflectanceMatrix", 16), pp.addUniform("vReflectanceInfos", 2), pp.addUniform("reflectanceMatrix", 16), pp.addUniform("cameraInfo", 4), pp.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Vp.qb)(pp, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(pp, ip, cp) {
          const Op = this.Gl(),
            op = cp.materialDefines;
          if (!op) return;
          const Ip = cp.effect;
          if (!Ip) return;
          this._activeEffect = Ip, ip.getMeshUniformBuffer().bindToEffect(Ip, "Mesh"), ip.transferToEffect(pp);
          const Sp = Op.gy();
          this._uniformBuffer.bindToEffect(Ip, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Op, ip, pp, this.isFrozen), Ui.e.Bind(Sp.currentRenderPassId, this._activeEffect, ip, pp, this);
          const xp = Op.activeCamera;
          xp ? this._uniformBuffer.updateFloat4("cameraInfo", xp.minZ, xp.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Lp = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Lp[0], Lp[1], Lp[2], Lp[3]), this._eventInfo.subMesh = cp, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), op.OBJECTSPACE_NORMALMAP && (pp.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Yp = this._mustRebind(Op, Ip, cp, ip.visibility),
            Dp = Sp._features.needToAlwaysBindUniformBuffers;
          (0, Vp.g)(ip, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Wi.e)(this._activeEffect, this._vertexPullingMetadata);
          let Ap = null;
          const Pp = this._uniformBuffer;
          if (Yp) {
            if (this.bindViewProjection(Ip), Ap = this._getReflectionTexture(), !Pp.useUbo || !this.isFrozen || !Pp.isSync || cp._drawWrapper._forceRebindOnNextCall) {
              if (Op.texturesEnabled && (this._albedoTexture && sp.c.DiffuseTextureEnabled && (Pp.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Vp.A)(this._albedoTexture, Pp, "albedo")), this._baseWeightTexture && sp.c.BaseWeightTextureEnabled && (Pp.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Vp.A)(this._baseWeightTexture, Pp, "baseWeight")), this._baseDiffuseRoughnessTexture && sp.c.BaseDiffuseRoughnessTextureEnabled && (Pp.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Vp.A)(this._baseDiffuseRoughnessTexture, Pp, "baseDiffuseRoughness")), this._ambientTexture && sp.c.AmbientTextureEnabled && (Pp.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Vp.A)(this._ambientTexture, Pp, "ambient")), this._opacityTexture && sp.c.OpacityTextureEnabled && (Pp.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Vp.A)(this._opacityTexture, Pp, "opacity")), this._emissiveTexture && sp.c.EmissiveTextureEnabled && (Pp.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Vp.A)(this._emissiveTexture, Pp, "emissive")), this._lightmapTexture && sp.c.LightmapTextureEnabled && (Pp.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Vp.A)(this._lightmapTexture, Pp, "lightmap")), sp.c.SpecularTextureEnabled && (this._metallicTexture ? (Pp.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Vp.A)(this._metallicTexture, Pp, "reflectivity")) : this._reflectivityTexture && (Pp.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Vp.A)(this._reflectivityTexture, Pp, "reflectivity")), this._metallicReflectanceTexture && (Pp.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Vp.A)(this._metallicReflectanceTexture, Pp, "metallicReflectance")), this._reflectanceTexture && op.REFLECTANCE && (Pp.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Vp.A)(this._reflectanceTexture, Pp, "reflectance")), this._microSurfaceTexture && (Pp.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Vp.A)(this._microSurfaceTexture, Pp, "microSurfaceSampler"))), this._bumpTexture && Sp.getCaps().standardDerivatives && sp.c.BumpTextureEnabled && !this._disableBumpMap && (Pp.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Vp.A)(this._bumpTexture, Pp, "bump"), Op._mirroredCameraPosition ? Pp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Pp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Vp.k)(Op, op, Pp, this._reflectionColor, Ap, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Pp.updateFloat("pointSize", this.pointSize), op.METALLICWORKFLOW) {
                Gp.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Gp.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const pp = this.subSurface?._indexOfRefraction ?? 1.5,
                  ip = 1;
                Gp.j.Color4[0].b = pp;
                const cp = Math.pow((pp - ip) / (pp + ip), 2);
                Gp.j.Color4[0].a = cp, Pp.updateDirectColor4("vReflectivityColor", Gp.j.Color4[0]), Pp.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Pp.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Pp.updateColor3("vEmissiveColor", sp.c.EmissiveTextureEnabled ? this._emissiveColor : Gp.d.BlackReadOnly), !op.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Pp.updateColor4("vAlbedoColor", this._albedoColor, 1) : Pp.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Pp.updateFloat("baseWeight", this._baseWeight), Pp.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Op.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Pp.updateVector4("vLightingIntensity", this._lightingInfos), Op.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Pp.updateColor3("vAmbientColor", this._globalAmbientColor), Pp.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Op.texturesEnabled && (this._albedoTexture && sp.c.DiffuseTextureEnabled && Pp.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && sp.c.BaseWeightTextureEnabled && Pp.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && sp.c.BaseDiffuseRoughnessTextureEnabled && Pp.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && sp.c.AmbientTextureEnabled && Pp.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && sp.c.OpacityTextureEnabled && Pp.setTexture("opacitySampler", this._opacityTexture), (0, Vp.m)(Op, op, Pp, Ap, this.realTimeFiltering), op.ENVIRONMENTBRDF && Pp.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && sp.c.EmissiveTextureEnabled && Pp.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && sp.c.LightmapTextureEnabled && Pp.setTexture("lightmapSampler", this._lightmapTexture), sp.c.SpecularTextureEnabled && (this._metallicTexture ? Pp.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Pp.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Pp.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && op.REFLECTANCE && Pp.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Pp.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Sp.getCaps().standardDerivatives && sp.c.BumpTextureEnabled && !this._disableBumpMap && Pp.setTexture("bumpSampler", this._bumpTexture)), this.Gl().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ip) && this.Gl().depthPeelingRenderer.bind(Ip), this._eventInfo.subMesh = cp, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Pi.g)(this._activeEffect, this, Op), this.bindEyePosition(Ip)
          } else Dp && (this._needToBindSceneUbo = !0);
          !Yp && this.isFrozen && !Dp || !Op.lightsEnabled || this._disableLighting || (0, Vp.p)(Op, ip, this._activeEffect, op, this._maxSimultaneousLights), !Yp && this.isFrozen || ((Op.fogEnabled && ip.applyFog && Op.fogMode !== Tp.f.FOGMODE_NONE || Ap || this.subSurface.refractionTexture || ip.receiveShadows || op.PREPASS || op.CLUSTLIGHT_BATCH) && this.bindView(Ip), (0, Vp.i)(Op, ip, this._activeEffect, !0), op.NUM_MORPH_INFLUENCERS && (0, Vp.v)(ip, this._activeEffect), op.BAKED_VERTEX_ANIMATION_TEXTURE && ip.bakedVertexAnimationManager?.bind(Ip, op.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Vp.r)(op, this._activeEffect, Op)), this._afterBind(ip, this._activeEffect, cp), Pp.update()
        }
        getAnimatables() {
          const pp = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && pp.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && pp.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && pp.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && pp.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && pp.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && pp.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && pp.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? pp.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && pp.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && pp.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && pp.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && pp.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && pp.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && pp.push(this._microSurfaceTexture), pp
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Gl().environmentTexture
        }
        getActiveTextures() {
          const pp = super.getActiveTextures();
          return this._albedoTexture && pp.push(this._albedoTexture), this._baseWeightTexture && pp.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && pp.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && pp.push(this._ambientTexture), this._opacityTexture && pp.push(this._opacityTexture), this._reflectionTexture && pp.push(this._reflectionTexture), this._emissiveTexture && pp.push(this._emissiveTexture), this._reflectivityTexture && pp.push(this._reflectivityTexture), this._metallicTexture && pp.push(this._metallicTexture), this._metallicReflectanceTexture && pp.push(this._metallicReflectanceTexture), this._reflectanceTexture && pp.push(this._reflectanceTexture), this._microSurfaceTexture && pp.push(this._microSurfaceTexture), this._bumpTexture && pp.push(this._bumpTexture), this._lightmapTexture && pp.push(this._lightmapTexture), pp
        }
        hasTexture(pp) {
          return !!super.hasTexture(pp) || (this._albedoTexture === pp || (this._baseWeightTexture === pp || (this._baseDiffuseRoughnessTexture === pp || (this._ambientTexture === pp || (this._opacityTexture === pp || (this._reflectionTexture === pp || (this._emissiveTexture === pp || (this._reflectivityTexture === pp || (this._metallicTexture === pp || (this._metallicReflectanceTexture === pp || (this._reflectanceTexture === pp || (this._microSurfaceTexture === pp || (this._bumpTexture === pp || this._lightmapTexture === pp)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const pp = this.Gl().enableSubSurfaceForPrePass();
          return pp && (pp.enabled = !0), !0
        }
        dispose(pp, ip) {
          this._breakShaderLoadedCheck = !0, ip && (this._environmentBRDFTexture && this.Gl().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(pp, ip)
        }
      }, ip = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(op[Symbol.metadata] ?? null) : void 0;
        Op = [(0, qp.e)("_markAllSubMeshesAsMiscDirty")], (0, Rp.j)(pp, null, Op, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "debugMode" in pp,
            get: pp => pp.debugMode,
            set: (pp, ip) => {
              pp.debugMode = ip
            }
          },
          metadata: ip
        }, Sp, xp), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp.PBRMATERIAL_OPAQUE = Ip.b.MATERIAL_OPAQUE, pp.PBRMATERIAL_ALPHATEST = Ip.b.MATERIAL_ALPHATEST, pp.PBRMATERIAL_ALPHABLEND = Ip.b.MATERIAL_ALPHABLEND, pp.PBRMATERIAL_ALPHATESTANDBLEND = Ip.b.MATERIAL_ALPHATESTANDBLEND, pp.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, pp.LIGHTFALLOFF_PHYSICAL = 0, pp.LIGHTFALLOFF_GLTF = 1, pp.LIGHTFALLOFF_STANDARD = 2, pp.ForceGLSL = !1, pp._ShaderLoader = new yi.c((() => [Promise.all([cp.e(322), cp.e(333)]).then((() => cp(61624))), Promise.all([cp.e(327), cp.e(323), cp.e(384), cp.e(336), cp.e(383)]).then((() => cp(61644)))]), (() => [Promise.all([cp.e(341), cp.e(343), cp.e(350)]).then((() => cp(61736))), Promise.all([cp.e(341), cp.e(344), cp.e(387), cp.e(354), cp.e(386)]).then((() => cp(61756)))])), pp
    })();
    Object.getOwnPropertyDescriptor(ki.prototype, "decalMap") || Object.defineProperty(ki.prototype, "decalMap", (0, Hi.h)("PBRBaseMaterial", "decalMap")), (0, cp(42109).d)();
    var mi = cp(40233);
    var Ri = cp(40304),
      qi = cp(42087),
      Mi = cp(40033),
      Ci = cp(40050),
      Ei = cp(40151);
    let Xi = !1;
    const li = new Gp.h,
      Qi = new Gp.h;
    class Ji extends qi.e {
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
      set wrapU(pp) {
        if (this._textures)
          for (let ip = 0; ip < this._textures.length; ip++) this._textures[ip].wrapU = pp
      }
      set wrapV(pp) {
        if (this._textures)
          for (let ip = 0; ip < this._textures.length; ip++) this._textures[ip].wrapV = pp
      }
      constructor(pp, ip, cp, Op, op, Ip) {
        const Sp = !(!op || !op.generateMipMaps) && op.generateMipMaps,
          xp = !(!op || !op.generateDepthTexture) && op.generateDepthTexture,
          Lp = op && op.depthTextureFormat ? op.depthTextureFormat : 15,
          Yp = !op || void 0 === op.doNotChangeAspectRatio || op.doNotChangeAspectRatio,
          Dp = !(!op || !op.drawOnlyOnFirstAttachmentByDefault) && op.drawOnlyOnFirstAttachmentByDefault;
        if (super(pp, ip, Op, Sp, Yp, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Xi || (Xi = !0, Ci.ThinEngine.prototype.restoreSingleAttachment = function() {
            const pp = this._gl;
            this.bindAttachments([pp.BACK])
          }, Ci.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const pp = this._gl;
            this.bindAttachments([pp.COLOR_ATTACHMENT0])
          }, Ci.ThinEngine.prototype.buildTextureLayout = function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const cp = this._gl,
              Op = [];
            if (ip) Op.push(cp.BACK);
            else
              for (let op = 0; op < pp.length; op++) pp[op] ? Op.push(cp["COLOR_ATTACHMENT" + op]) : Op.push(cp.NONE);
            return Op
          }, Ci.ThinEngine.prototype.bindAttachments = function(pp) {
            const ip = this._gl,
              cp = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, cp)
              for (let Op = 0; Op < pp.length; Op++) pp[Op] !== ip.NONE && cp[Op] && (0, Ei.i)(cp[Op].format) && (this._integerMRTAttachmentsMask |= 1 << Op);
            ip.drawBuffers(pp)
          }, Ci.ThinEngine.prototype.clearAttachments = function(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Sp = this._currentRenderTarget?.textures;
            let xp = !1;
            if (cp && pp && Sp)
              for (let Lp = 0; Lp < ip.length; Lp++) {
                const pp = Sp[Lp];
                if (ip[Lp] !== this._gl.NONE && pp && (0, Ei.i)(pp.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  xp = !0;
                  break
                }
              }
            if (!xp || !pp || !Sp) return this.bindAttachments(ip), void this.clear(pp, cp, Op, op, Ip);
            this.bindAttachments(ip), this._applyColorWriteState();
            for (let Lp = 0; Lp < ip.length; Lp++) {
              const cp = Sp[Lp];
              if (ip[Lp] !== this._gl.NONE && cp) {
                let ip = pp;
                if ((0, Ei.i)(cp.format)) {
                  const Op = (0, Ei.k)(cp.type);
                  ip = Op ? li : Qi;
                  const op = Op ? 255 : 1;
                  ip.r = Math.round(pp.r * op), ip.g = Math.round(pp.g * op), ip.b = Math.round(pp.b * op), ip.a = Math.round(pp.a * op)
                }
                this._clearColorAttachment(Lp, ip, cp.format, cp.type)
              }
            }
            if (Op || op) {
              const pp = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Op, op, Ip)
              } finally {
                this._integerMRTAttachmentsMask = pp
              }
            }
          }, Ci.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cp = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, pp.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(pp), ip || this.generateMipMapsMultiFramebuffer(pp), cp && (pp._MSAAFramebuffer && this._bindUnboundFramebuffer(pp._framebuffer), cp()), this._bindUnboundFramebuffer(null)
          }, Ci.ThinEngine.prototype.createMultipleRenderTarget = function(pp, ip) {
            let cp, Op = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              op = !1,
              Ip = !0,
              Sp = !1,
              xp = !1,
              Lp = 1,
              Yp = 1,
              Dp = [],
              Ap = [],
              Pp = [],
              Wp = [],
              yp = [],
              Up = [],
              wp = [],
              vp = [],
              tp = [],
              Hp = !1;
            const dp = this._createHardwareRenderTargetWrapper(!0, !1, pp);
            void 0 !== ip && (op = void 0 !== ip.generateMipMaps && ip.generateMipMaps, Ip = void 0 === ip.generateDepthBuffer || ip.generateDepthBuffer, Sp = void 0 !== ip.generateStencilBuffer && ip.generateStencilBuffer, xp = void 0 !== ip.generateDepthTexture && ip.generateDepthTexture, Lp = ip.dxp ?? 1, Yp = ip.samples ?? Yp, Dp = ip.types || Dp, Ap = ip.samplingModes || Ap, Pp = ip.useSRGBBuffers || Pp, Wp = ip.formats || Wp, yp = ip.targetTypes || yp, Up = ip.faceIndex || Up, wp = ip.layerIndex || wp, vp = ip.layerCounts || vp, tp = ip.labels || tp, Hp = ip.dontCreateTextures ?? !1, this.eU > 1 && (13 === ip.depthTextureFormat || 17 === ip.depthTextureFormat || 16 === ip.depthTextureFormat || 14 === ip.depthTextureFormat || 18 === ip.depthTextureFormat) && (cp = ip.depthTextureFormat)), void 0 === cp && (cp = Sp ? 13 : 14);
            const ep = this._gl,
              jp = this._currentFramebuffer,
              kp = ep.createFramebuffer();
            this._bindUnboundFramebuffer(kp);
            const mp = pp.width ?? pp,
              Rp = pp.height ?? pp,
              qp = [],
              Cp = [],
              Ep = this.eU > 1 && (13 === cp || 17 === cp || 18 === cp);
            dp.label = ip?.label ?? "MultiRenderTargetWrapper", dp._framebuffer = kp, dp._generateDepthBuffer = xp || Ip, dp._generateStencilBuffer = xp ? Ep : Sp, dp._depthStencilBuffer = this._setupFramebufferDepthAttachments(dp._generateStencilBuffer, dp._generateDepthBuffer, mp, Rp, 1, cp), dp._attachments = Cp;
            for (let Xp = 0; Xp < Lp; Xp++) {
              let pp = Ap[Xp] || 3,
                ip = Dp[Xp] || 0,
                cp = Pp[Xp] || !1;
              const Op = Wp[Xp] || 5,
                Ip = yp[Xp] || 3553,
                Sp = vp[Xp] ?? 1;
              (1 !== ip || this._caps.textureFloatLinearFiltering) && (2 !== ip || this._caps.textureHalfFloatLinearFiltering) || (pp = 1);
              const xp = this._getSamplingParameters(pp, op);
              1 !== ip || this._caps.textureFloat || (ip = 0, Mp.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), cp = cp && this._caps.supportSRGBBuffers && (this.eU > 1 || this.isWebGPU);
              const Lp = this.eU > 1,
                Yp = ep[Lp ? "COLOR_ATTACHMENT" + Xp : "COLOR_ATTACHMENT" + Xp + "_WEBGL"];
              if (Cp.push(Yp), -1 === Ip || Hp) continue;
              const Up = new Mi.b(this, 6);
              qp[Xp] = Up, ep.activeTexture(ep["TEXTURE" + Xp]), ep.bindTexture(Ip, Up._hardwareTexture.underlyingResource), ep.texParameteri(Ip, ep.TEXTURE_MAG_FILTER, xp.mag), ep.texParameteri(Ip, ep.TEXTURE_MIN_FILTER, xp.min), ep.texParameteri(Ip, ep.TEXTURE_WRAP_S, ep.CLAMP_TO_EDGE), ep.texParameteri(Ip, ep.TEXTURE_WRAP_T, ep.CLAMP_TO_EDGE);
              const wp = this._getRGBABufferInternalSizedFormat(ip, Op, cp),
                jp = this._getInternalFormat(Op),
                kp = this._getWebGLTextureType(ip);
              if (!Lp || 35866 !== Ip && 32879 !== Ip)
                if (34067 === Ip) {
                  for (let pp = 0; pp < 6; pp++) ep.texImage2D(ep.TEXTURE_CUBE_MAP_POSITIVE_X + pp, 0, wp, mp, Rp, 0, jp, kp, null);
                  Up.isCube = !0
                } else ep.texImage2D(ep.TEXTURE_2D, 0, wp, mp, Rp, 0, jp, kp, null);
              else 35866 === Ip ? Up.is2DArray = !0 : Up.is3D = !0, Up.baseDepth = Up.depth = Sp, ep.texImage3D(Ip, 0, wp, mp, Rp, Sp, 0, jp, kp, null);
              op && ep.generateMipmap(Ip), this._bindTextureDirectly(Ip, null), Up.baseWidth = mp, Up.baseHeight = Rp, Up.width = mp, Up.height = Rp, Up.isReady = !0, Up.samples = 1, Up.generateMipMaps = op, Up.samplingMode = pp, Up.type = ip, Up._useSRGBBuffer = cp, Up.format = Op, Up.label = tp[Xp] ?? dp.label + "-Texture" + Xp, this._internalTexturesCache.push(Up)
            }
            if (xp && this._caps.depthTextureExtension && !Hp) {
              const pp = new Mi.b(this, 14);
              let ip = 5,
                Op = ep.DEPTH_COMPONENT16,
                Ip = ep.DEPTH_COMPONENT,
                Sp = ep.UNSIGNED_SHORT,
                xp = ep.DEPTH_ATTACHMENT;
              this.eU < 2 ? Op = ep.DEPTH_COMPONENT : 14 === cp ? (ip = 1, Sp = ep.FLOAT, Op = ep.DEPTH_COMPONENT32F) : 18 === cp ? (ip = 0, Sp = ep.FLOAT_32_UNSIGNED_INT_24_8_REV, Op = ep.DEPTH32F_STENCIL8, Ip = ep.DEPTH_STENCIL, xp = ep.DEPTH_STENCIL_ATTACHMENT) : 16 === cp ? (ip = 0, Sp = ep.UNSIGNED_INT, Op = ep.DEPTH_COMPONENT24, xp = ep.DEPTH_ATTACHMENT) : 13 !== cp && 17 !== cp || (ip = 12, Sp = ep.UNSIGNED_INT_24_8, Op = ep.DEPTH24_STENCIL8, Ip = ep.DEPTH_STENCIL, xp = ep.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(ep.TEXTURE_2D, pp, !0), ep.texParameteri(ep.TEXTURE_2D, ep.TEXTURE_MAG_FILTER, ep.NEAREST), ep.texParameteri(ep.TEXTURE_2D, ep.TEXTURE_MIN_FILTER, ep.NEAREST), ep.texParameteri(ep.TEXTURE_2D, ep.TEXTURE_WRAP_S, ep.CLAMP_TO_EDGE), ep.texParameteri(ep.TEXTURE_2D, ep.TEXTURE_WRAP_T, ep.CLAMP_TO_EDGE), ep.texImage2D(ep.TEXTURE_2D, 0, Op, mp, Rp, 0, Ip, Sp, null), ep.framebufferTexture2D(ep.FRAMEBUFFER, xp, ep.TEXTURE_2D, pp._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(ep.TEXTURE_2D, null), dp._depthStencilTexture = pp, dp._depthStencilTextureWithStencil = Ep, pp.baseWidth = mp, pp.baseHeight = Rp, pp.width = mp, pp.height = Rp, pp.isReady = !0, pp.samples = 1, pp.generateMipMaps = op, pp.samplingMode = 1, pp.format = cp, pp.type = ip, pp.label = dp.label + "-DepthStencil", qp[Lp] = pp, this._internalTexturesCache.push(pp)
            }
            if (dp.setTextures(qp), Op && ep.drawBuffers(Cp), this._bindUnboundFramebuffer(jp), dp.setLayerAndFaceIndices(wp, Up), this.resetTextureCache(), Hp) {
              if (Yp > 1) {
                const pp = ep.createFramebuffer();
                if (!pp) throw new Error("Unable to create multi sampled framebuffer");
                dp._samples = Yp, dp._MSAAFramebuffer = pp, Lp > 0 && Op && (this._bindUnboundFramebuffer(pp), ep.drawBuffers(Cp), this._bindUnboundFramebuffer(jp))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(dp, Yp, Op);
            return dp
          }, Ci.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(pp, ip) {
            let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.eU < 2 || !pp) return 1;
            if (pp.samples === ip) return ip;
            const Op = this._gl;
            ip = Math.min(ip, this.getCaps().maxMSAASamples), pp._depthStencilBuffer && (Op.deleteRenderbuffer(pp._depthStencilBuffer), pp._depthStencilBuffer = null), pp._MSAAFramebuffer && (Op.deleteFramebuffer(pp._MSAAFramebuffer), pp._MSAAFramebuffer = null);
            const op = pp._attachments.length;
            for (let Sp = 0; Sp < op; Sp++) {
              const ip = pp.textures[Sp]._hardwareTexture;
              ip?.releaseMSAARenderBuffers()
            }
            if (ip > 1 && "function" === typeof Op.renderbufferStorageMultisample) {
              const Ip = Op.createFramebuffer();
              if (!Ip) throw new Error("Unable to create multi sampled framebuffer");
              pp._MSAAFramebuffer = Ip, this._bindUnboundFramebuffer(Ip);
              const Sp = [];
              for (let cp = 0; cp < op; cp++) {
                const op = pp.textures[cp],
                  Ip = op._hardwareTexture,
                  xp = Op[this.eU > 1 ? "COLOR_ATTACHMENT" + cp : "COLOR_ATTACHMENT" + cp + "_WEBGL"],
                  Lp = this._createRenderBuffer(op.width, op.height, ip, -1, this._getRGBABufferInternalSizedFormat(op.type, op.format, op._useSRGBBuffer), xp);
                if (!Lp) throw new Error("Unable to create multi sampled framebuffer");
                Ip.addMSAARenderBuffer(Lp), op.samples = ip, Sp.push(xp)
              }
              cp && Op.drawBuffers(Sp)
            } else this._bindUnboundFramebuffer(pp._framebuffer);
            const Ip = pp._depthStencilTexture ? pp._depthStencilTexture.format : void 0;
            return pp._depthStencilBuffer = this._setupFramebufferDepthAttachments(pp._generateStencilBuffer, pp._generateDepthBuffer, pp.width, pp.height, ip, Ip), this._bindUnboundFramebuffer(null), pp._samples = ip, ip
          }, Ci.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(pp) {
            const ip = pp,
              cp = this._gl;
            if (ip.isMulti)
              for (let Op = 0; Op < ip._attachments.length; Op++) {
                const pp = ip.textures[Op];
                !pp?.generateMipMaps || pp?.isCube || pp?.is3D || (this._bindTextureDirectly(cp.TEXTURE_2D, pp, !0), cp.generateMipmap(cp.TEXTURE_2D), this._bindTextureDirectly(cp.TEXTURE_2D, null))
              }
          }, Ci.ThinEngine.prototype.resolveMultiFramebuffer = function(pp) {
            const ip = pp,
              cp = this._gl;
            if (!ip._MSAAFramebuffer || !ip.isMulti) return;
            let Op = ip.resolveMSAAColors ? cp.COLOR_BUFFER_BIT : 0;
            Op |= ip._generateDepthBuffer && ip.resolveMSAADepth ? cp.DEPTH_BUFFER_BIT : 0, Op |= ip._generateStencilBuffer && ip.resolveMSAAStencil ? cp.STENCIL_BUFFER_BIT : 0;
            const op = ip._attachments,
              Ip = op.length;
            cp.bindFramebuffer(cp.READ_FRAMEBUFFER, ip._MSAAFramebuffer), cp.bindFramebuffer(cp.DRAW_FRAMEBUFFER, ip._framebuffer);
            for (let Sp = 0; Sp < Ip; Sp++) {
              const pp = ip.textures[Sp];
              for (let ip = 0; ip < Ip; ip++) op[ip] = cp.NONE;
              op[Sp] = cp[this.eU > 1 ? "COLOR_ATTACHMENT" + Sp : "COLOR_ATTACHMENT" + Sp + "_WEBGL"], cp.readBuffer(op[Sp]), cp.drawBuffers(op), cp.blitFramebuffer(0, 0, pp.width, pp.height, 0, 0, pp.width, pp.height, Op, cp.NEAREST)
            }
            for (let Sp = 0; Sp < Ip; Sp++) op[Sp] = cp[this.eU > 1 ? "COLOR_ATTACHMENT" + Sp : "COLOR_ATTACHMENT" + Sp + "_WEBGL"];
            cp.drawBuffers(op), cp.bindFramebuffer(this._gl.FRAMEBUFFER, ip._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Ip;
        const Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [],
          vp = [],
          tp = [];
        this._initTypes(cp, Ap, Pp, Wp, yp, Up, wp, vp, tp, op);
        const Hp = !op || void 0 === op.generateDepthBuffer || op.generateDepthBuffer,
          dp = !(!op || void 0 === op.generateStencilBuffer) && op.generateStencilBuffer,
          ep = op && op.samples ? op.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Pp,
          generateMipMaps: Sp,
          generateDepthBuffer: Hp,
          generateStencilBuffer: dp,
          generateDepthTexture: xp,
          depthTextureFormat: Lp,
          types: Ap,
          dxp: cp,
          useSRGBBuffers: Wp,
          samples: ep,
          formats: yp,
          targetTypes: Up,
          faceIndex: wp,
          layerIndex: vp,
          layerCounts: tp,
          labels: Ip,
          label: pp
        }, this._count = cp, this._drawOnlyOnFirstAttachmentByDefault = Dp, cp > 0 && (this._createInternalTextures(), this._createTextures(Ip))
      }
      _initTypes(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        for (let Dp = 0; Dp < pp; Dp++) Yp && Yp.types && void 0 !== Yp.types[Dp] ? ip.push(Yp.types[Dp]) : ip.push(Yp && Yp.defaultType ? Yp.defaultType : 0), Yp && Yp.samplingModes && void 0 !== Yp.samplingModes[Dp] ? cp.push(Yp.samplingModes[Dp]) : cp.push(Ep.d.BILINEAR_SAMPLINGMODE), Yp && Yp.useSRGBBuffers && void 0 !== Yp.useSRGBBuffers[Dp] ? Op.push(Yp.useSRGBBuffers[Dp]) : Op.push(!1), Yp && Yp.formats && void 0 !== Yp.formats[Dp] ? op.push(Yp.formats[Dp]) : op.push(5), Yp && Yp.targetTypes && void 0 !== Yp.targetTypes[Dp] ? Ip.push(Yp.targetTypes[Dp]) : Ip.push(3553), Yp && Yp.faceIndex && void 0 !== Yp.faceIndex[Dp] ? Sp.push(Yp.faceIndex[Dp]) : Sp.push(0), Yp && Yp.layerIndex && void 0 !== Yp.layerIndex[Dp] ? xp.push(Yp.layerIndex[Dp]) : xp.push(0), Yp && Yp.layerCounts && void 0 !== Yp.layerCounts[Dp] ? Lp.push(Yp.layerCounts[Dp]) : Lp.push(1)
      }
      _createInternaTextureIndexMapping() {
        const pp = {},
          ip = [];
        if (!this._renderTarget) return ip;
        const cp = this._renderTarget.textures;
        for (let Op = 0; Op < cp.length; Op++) {
          const op = cp[Op];
          if (!op) continue;
          const Ip = pp[op.uniqueId];
          void 0 !== Ip ? ip[Op] = Ip : pp[op.uniqueId] = Op
        }
        return ip
      }
      _rebuild() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || pp) return;
        const Op = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), ip && (this._releaseTextures(), this._createTextures(cp));
        const op = this._renderTarget.textures;
        for (let Ip = 0; Ip < op.length; Ip++) {
          const pp = this._textures[Ip];
          void 0 !== Op[Ip] && this._renderTarget.setTexture(op[Op[Ip]], Ip), pp._texture = op[Ip], pp._texture && (pp._noMipmap = !pp._texture.useMipMaps, pp._useSRGBBuffer = pp._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let pp = 0; pp < this._textures.length; pp++) this._textures[pp]._texture = null, this._textures[pp].dispose()
      }
      _createTextures(pp) {
        const ip = this._renderTarget.textures;
        this._textures = [];
        for (let cp = 0; cp < ip.length; cp++) {
          const Op = new Ep.d(null, this.Gl());
          pp?.[cp] && (Op.name = pp[cp]), Op._texture = ip[cp], Op._texture && (Op._noMipmap = !Op._texture.useMipMaps, Op._useSRGBBuffer = Op._texture._useSRGBBuffer), this._textures.push(Op)
        }
      }
      setInternalTexture(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === ip && (this._texture = pp), this.renderTarget.setTexture(pp, ip, cp), this.textures[ip] || (this.textures[ip] = new Ep.d(null, this.Gl()), this.textures[ip].name = this._textureNames?.[ip] ?? this.textures[ip].name), this.textures[ip]._texture = pp, this.textures[ip]._noMipmap = !pp.useMipMaps, this.textures[ip]._useSRGBBuffer = pp._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[ip] = pp.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[ip] = pp.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[ip] = pp._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[ip])) {
          let cp;
          cp = pp.is2DArray ? 35866 : pp.isCube ? 34067 : pp.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[ip] = cp
        }
      }
      setLayerAndFaceIndex(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[pp] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[pp] = ip), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[pp] = cp), this.renderTarget.setLayerAndFaceIndex(pp, ip, cp))
      }
      setLayerAndFaceIndices(pp, ip) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = pp, this._multiRenderTargetOptions.faceIndex = ip, this.renderTarget.setLayerAndFaceIndices(pp, ip))
      }
      get samples() {
        return this._samples
      }
      set samples(pp) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(pp) : this._samples = pp
      }
      resize(pp) {
        this._processSizeParameter(pp), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(pp, ip, cp) {
        this._multiRenderTargetOptions.dxp = pp, this._count = pp;
        const Op = [],
          op = [],
          Ip = [],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [];
        this._textureNames = cp, this._initTypes(pp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, ip), this._multiRenderTargetOptions.types = Op, this._multiRenderTargetOptions.samplingModes = op, this._multiRenderTargetOptions.useSRGBBuffers = Ip, this._multiRenderTargetOptions.formats = Sp, this._multiRenderTargetOptions.targetTypes = xp, this._multiRenderTargetOptions.faceIndex = Lp, this._multiRenderTargetOptions.layerIndex = Yp, this._multiRenderTargetOptions.layerCounts = Dp, this._multiRenderTargetOptions.labels = cp, this._rebuild(!1, !0, cp)
      }
      _unbindFrameBuffer(pp, ip) {
        this._renderTarget && pp.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ip)
        }))
      }
      dispose() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), pp ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const pp = this._renderTarget?.textures;
        if (pp) {
          for (let ip = pp.length - 1; ip >= 0; ip--) this._textures[ip]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Bi = cp(40368);
    class Ni {
      constructor(pp) {
        this.name = Bi.e.NAME_GEOMETRYBUFFERRENDERER, this.pw = pp
      }
      register() {
        this.pw._gatherRenderTargetsStage.registerStep(Bi.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(pp) {
        this.pw._geometryBufferRenderer && pp.push(this.pw._geometryBufferRenderer.getGBuffer())
      }
    }
    let Ti = !1;
    var fi;
    ! function(pp) {
      pp[pp.Small = 0] = "Small", pp[pp.Medium = 1] = "Medium", pp[pp.Large = 2] = "Large", pp[pp.ExtraLarge = 3] = "ExtraLarge"
    }(fi || (fi = {}));
    const bi = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      ai = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class ni {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(pp) {
        if (pp && this._enableMeshBlendTag && !this._scene.gy().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = pp
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(pp) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = pp, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(pp, ip) {
        pp === ni.POSITION_TEXTURE_TYPE ? (this._positionIndex = ip, this._enablePosition = !0) : pp === ni.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = ip, this._enableVelocity = !0) : pp === ni.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = ip, this._enableVelocityLinear = !0) : pp === ni.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = ip, this._enableReflectivity = !0) : pp === ni.DEPTH_TEXTURE_TYPE ? (this._depthIndex = ip, this._enableDepth = !0) : pp === ni.NORMAL_TEXTURE_TYPE ? (this._normalIndex = ip, this._enableNormal = !0) : pp === ni.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = ip, this._enableScreenspaceDepth = !0) : pp === ni.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = ip, this._enableIrradiance = !0) : pp === ni.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = ip, this._enableObjectId = !0) : pp === ni.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = ip, this._enableMeshBlendTag = !0)
      }
      _setAttachments(pp) {
        this._attachmentsFromPrePass = pp
      }
      _linkInternalTexture(pp) {
        this._multiRenderTarget.setInternalTexture(pp, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(pp) {
        this._multiRenderTarget.renderList = pp
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(pp) {
        switch (pp) {
          case ni.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case ni.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case ni.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case ni.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case ni.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case ni.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case ni.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case ni.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case ni.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case ni.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(pp) {
        this._enableDepth = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(pp) {
        this._enableNormal = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(pp) {
        this._enablePosition = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(pp) {
        this._enableVelocity = pp, pp || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = pp
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(pp) {
        this._enableVelocityLinear = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(pp) {
        this._enableReflectivity = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(pp) {
        this._enableScreenspaceDepth = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(pp) {
        this._enableIrradiance = pp, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(pp) {
        if (pp && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (pp && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (pp && !this._enableObjectId && !this._linkedWithPrePass) {
          const pp = this._scene.gy(),
            ip = Math.min(pp.getCaps().maxDrawBuffers ?? 1, 8),
            cp = this._assignRenderTargetIndices()[0] + 1;
          if (pp.getCaps().drawBuffersExtension && cp > ip) throw new Error(`GeometryBufferRenderer: ${cp} color attachments were requested, but this engine supports at most ${ip}`)
        }
        this._enableObjectId = pp, pp || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(pp) {
        if (this._enableMeshBlendTag !== pp) {
          if (pp) {
            const pp = this._scene.gy();
            if (! function(pp) {
                return "NATIVE" !== pp.shaderPlatformName && (pp.isWebGPU || 2 === pp.eU)
              }(pp)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !pp.isWebGPU && !pp.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const ip = Math.min(pp.getCaps().maxDrawBuffers ?? 1, 8),
                cp = this._assignRenderTargetIndices()[0] + 1;
              if (pp.getCaps().drawBuffersExtension && cp > ip) throw new Error(`GeometryBufferRenderer: ${cp} color attachments were requested, but this engine supports at most ${ip}`)
            }
          }
          this._enableMeshBlendTag = pp, pp || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get pw() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        var op;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Gp.h(0, 0, 0, 0), this._clearDepthColor = new Gp.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = pp, this._ratioOrDimensions = ip, this._useUbo = pp.gy().supportsUniformBuffers, this._depthFormat = cp, this._textureTypesAndFormats = Op || {}, this._initShaderSourceAsync(), op = ni, Ti || (Ti = !0, Object.defineProperty(Tp.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(pp) {
            pp && pp.isSupported && (this._geometryBufferRenderer = pp)
          },
          enumerable: !0,
          configurable: !0
        }), Tp.f.prototype.enableGeometryBufferRenderer = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            cp = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new op(this, pp, ip, cp), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Tp.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, op._SceneComponentInitialization = pp => {
          let ip = pp._getComponent(Bi.e.NAME_GEOMETRYBUFFERRENDERER);
          ip || (ip = new Ni(pp), pp.uOp(ip))
        }), ni._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.gy().isWebGPU && !ni.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cp.e(342).then((() => cp(61907))), Promise.all([cp.e(341), cp.e(353)]).then((() => cp(61916)))])) : await Promise.all([cp.e(325).then((() => cp(61920))), cp.e(324).then((() => cp(61925)))]), this._shadersLoaded = !0
      }
      isReady(pp, ip) {
        if (!this._shadersLoaded) return !1;
        const cp = pp.Ky();
        if (cp && cp.disableDepthWrite) return !1;
        if (function(pp) {
            return pp._isGaussianSplatting || "GaussianSplattingMesh" === (ip = pp.getClassName()) || "GaussianSplattingStream" === ip;
            var ip
          }(pp.getMesh())) return !1;
        const Op = [],
          op = [bp.j.PositionKind],
          Ip = pp.getMesh();
        Ip.isVerticesDataPresent(bp.j.NormalKind) && (Op.push("#define HAS_NORMAL_ATTRIBUTE"), op.push(bp.j.NormalKind));
        let Sp = !1,
          xp = !1;
        if (cp) {
          let pp = !1;
          if (cp.needAlphaTestingForMesh(Ip) && cp.getAlphaTestTexture() && (Op.push("#define ALPHATEST"), Op.push(`#define ALPHATEST_UV${cp.getAlphaTestTexture().coordinatesIndex+1}`), pp = !0), (cp.bumpTexture || cp.normalTexture || cp.geometryNormalTexture) && sp.c.BumpTextureEnabled) {
            const ip = cp.bumpTexture || cp.normalTexture || cp.geometryNormalTexture;
            Op.push("#define BUMP"), Op.push(`#define BUMP_UV${ip.coordinatesIndex+1}`), pp = !0
          }
          if (this._enableReflectivity) {
            let ip = !1;
            if ("PBRMetallicRoughnessMaterial" === cp.getClassName()) cp.metallicRoughnessTexture && (Op.push("#define ORMTEXTURE"), Op.push(`#define REFLECTIVITY_UV${cp.metallicRoughnessTexture.coordinatesIndex+1}`), Op.push("#define METALLICWORKFLOW"), pp = !0, ip = !0), null != cp.metallic && (Op.push("#define METALLIC"), Op.push("#define METALLICWORKFLOW"), ip = !0), null != cp.roughness && (Op.push("#define ROUGHNESS"), Op.push("#define METALLICWORKFLOW"), ip = !0), ip && (cp.baseTexture && (Op.push("#define ALBEDOTEXTURE"), Op.push(`#define ALBEDO_UV${cp.baseTexture.coordinatesIndex+1}`), cp.baseTexture.gammaSpace && Op.push("#define GAMMAALBEDO"), pp = !0), cp.baseColor && Op.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === cp.getClassName()) cp.specularGlossinessTexture ? (Op.push("#define SPECULARGLOSSINESSTEXTURE"), Op.push(`#define REFLECTIVITY_UV${cp.specularGlossinessTexture.coordinatesIndex+1}`), pp = !0, cp.specularGlossinessTexture.gammaSpace && Op.push("#define GAMMAREFLECTIVITYTEXTURE")) : cp.specularColor && Op.push("#define REFLECTIVITYCOLOR"), null != cp.glossiness && Op.push("#define GLOSSINESS");
            else if ("PBRMaterial" === cp.getClassName()) cp.metallicTexture && (Op.push("#define ORMTEXTURE"), Op.push(`#define REFLECTIVITY_UV${cp.metallicTexture.coordinatesIndex+1}`), Op.push("#define METALLICWORKFLOW"), pp = !0, ip = !0), null != cp.metallic && (Op.push("#define METALLIC"), Op.push("#define METALLICWORKFLOW"), ip = !0), null != cp.roughness && (Op.push("#define ROUGHNESS"), Op.push("#define METALLICWORKFLOW"), ip = !0), ip ? (cp.albedoTexture && (Op.push("#define ALBEDOTEXTURE"), Op.push(`#define ALBEDO_UV${cp.albedoTexture.coordinatesIndex+1}`), cp.albedoTexture.gammaSpace && Op.push("#define GAMMAALBEDO"), pp = !0), cp.albedoColor && Op.push("#define ALBEDOCOLOR")) : (cp.reflectivityTexture ? (Op.push("#define SPECULARGLOSSINESSTEXTURE"), Op.push(`#define REFLECTIVITY_UV${cp.reflectivityTexture.coordinatesIndex+1}`), cp.reflectivityTexture.gammaSpace && Op.push("#define GAMMAREFLECTIVITYTEXTURE"), pp = !0) : cp.reflectivityColor && Op.push("#define REFLECTIVITYCOLOR"), null != cp.microSurface && Op.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === cp.getClassName()) cp.specularTexture && (Op.push("#define REFLECTIVITYTEXTURE"), Op.push(`#define REFLECTIVITY_UV${cp.specularTexture.coordinatesIndex+1}`), cp.specularTexture.gammaSpace && Op.push("#define GAMMAREFLECTIVITYTEXTURE"), pp = !0), cp.specularColor && Op.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === cp.getClassName()) {
              const ip = cp;
              Op.push("#define METALLIC"), Op.push("#define ROUGHNESS"), ip._useRoughnessFromMetallicTextureGreen && ip.baseMetalnessTexture ? (Op.push("#define ORMTEXTURE"), Op.push(`#define REFLECTIVITY_UV${ip.baseMetalnessTexture.coordinatesIndex+1}`), pp = !0) : ip.baseMetalnessTexture ? (Op.push("#define METALLIC_TEXTURE"), Op.push(`#define METALLIC_UV${ip.baseMetalnessTexture.coordinatesIndex+1}`), pp = !0) : ip.specularRoughnessTexture && (Op.push("#define ROUGHNESS_TEXTURE"), Op.push(`#define ROUGHNESS_UV${ip.specularRoughnessTexture.coordinatesIndex+1}`), pp = !0), ip.baseColorTexture && (Op.push("#define ALBEDOTEXTURE"), Op.push(`#define ALBEDO_UV${ip.baseColorTexture.coordinatesIndex+1}`), ip.baseColorTexture.gammaSpace && Op.push("#define GAMMAALBEDO"), pp = !0), ip.baseColor && Op.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Op.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === cp.getClassName())) {
            const ip = cp;
            ip.subsurfaceWeight > 0 && ip.subsurfaceWeightTexture && (Op.push("#define SUBSURFACE_WEIGHT"), Op.push(`#define SUBSURFACEWEIGHT_UV${ip.subsurfaceWeightTexture.coordinatesIndex+1}`), pp = !0), ip.transmissionWeight > 0 && ip.transmissionWeightTexture && (Op.push("#define TRANSMISSION_WEIGHT"), Op.push(`#define TRANSMISSIONWEIGHT_UV${ip.transmissionWeightTexture.coordinatesIndex+1}`), pp = !0)
          }
          pp && (Op.push("#define NEED_UV"), Ip.isVerticesDataPresent(bp.j.UVKind) && (op.push(bp.j.UVKind), Op.push("#define UV1"), Sp = !0), Ip.isVerticesDataPresent(bp.j.UV2Kind) && (op.push(bp.j.UV2Kind), Op.push("#define UV2"), xp = !0))
        }
        if (this._enableDepth && (Op.push("#define DEPTH"), Op.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Op.push("#define NORMAL"), Op.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Op.push("#define POSITION"), Op.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Op.push("#define VELOCITY"), Op.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Ip) && Op.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Op.push("#define VELOCITY_LINEAR"), Op.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Ip) && Op.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Op.push("#define REFLECTIVITY"), Op.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Op.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Op.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Op.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Op.push("#define IRRADIANCE");
          const pp = this._scene;
          if (pp.environmentTexture) {
            const ip = {};
            let op = !1,
              Ip = 0;
            "OpenPBRMaterial" !== cp.getClassName() && "StandardMaterial" !== cp.getClassName() && "PBRMetallicRoughnessMaterial" !== cp.getClassName() && "PBRSpecularGlossinessMaterial" !== cp.getClassName() && "PBRMaterial" !== cp.getClassName() || (op = !!cp.realtimeFiltering, Ip = cp.realtimeFilteringQuality || 0), (0, Vp.Y)(pp, pp.environmentTexture, ip, op, Ip, !0);
            for (const pp in ip) ip[pp] && Op.push("#define " + pp);
            ip.USEIRRADIANCEMAP || Op.push("#define SPHERICAL_HARMONICS");
            const Sp = pp.postProcessRenderPipelineManager.supportedPipelines.find((pp => "IBLShadowsRenderPipeline" === pp.getClassName()));
            if (Sp) {
              const pp = Sp;
              pp._getAccumulatedTexture() && (Op.push("#define IBL_SHADOW_TEXTURE"), pp.coloredShadows && Op.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Op.push("#define OBJECT_ID"), Op.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Op.push("#define MESH_BLEND_TAG"), Op.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Op.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Op.push("#define ENCODE_NORMAL"), Ip.useBones && Ip.computeBonesUsingShaders && Ip.skeleton ? (op.push(bp.j.MatricesIndicesKind), op.push(bp.j.MatricesWeightsKind), Ip.numBoneInfluencers > 4 && (op.push(bp.j.MatricesIndicesExtraKind), op.push(bp.j.MatricesWeightsExtraKind)), Op.push("#define NUM_BONE_INFLUENCERS " + Ip.numBoneInfluencers), Op.push("#define BONETEXTURE " + Ip.skeleton.isUsingTextureForMatrices), Op.push("#define BonesPerMesh " + (Ip.skeleton.bones.length + 1))) : (Op.push("#define NUM_BONE_INFLUENCERS 0"), Op.push("#define BONETEXTURE false"), Op.push("#define BonesPerMesh 0"));
        const Lp = Ip.morphTargetManager ? (0, Vp.Q)(Ip.morphTargetManager, Op, op, Ip, !0, !0, !1, Sp, xp, !1) : 0;
        ip && (Op.push("#define INSTANCES"), (0, Vp.Ab)(op, this._enableVelocity || this._enableVelocityLinear), pp.getRenderingMesh().hasThinInstances && Op.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Op.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Op.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Pi.k)(cp, this._scene, Op);
        const Yp = this._scene.gy(),
          Dp = pp._getDrawWrapper(void 0, !0),
          Ap = Dp.defines,
          Pp = Op.join("\n");
        return Ap !== Pp && Dp.setEffect(Yp.createEffect("geometry", {
          attributes: op,
          uniformsNames: ai,
          samplers: bi,
          defines: Pp,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Lp
          },
          shaderLanguage: this.shaderLanguage
        }, Yp), Pp), Dp.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(pp) {
        if (this._enableObjectId && 1 !== pp) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== pp) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = pp
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.gy().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.pw.gy()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.pw.gy().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const pp = [],
          ip = [];
        let cp = 0;
        return this._enableDepth && (this._depthIndex = cp, cp++, pp.push("gBuffer_Depth"), ip.push(this._textureTypesAndFormats[ni.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = cp, cp++, pp.push("gBuffer_Normal"), ip.push(this._textureTypesAndFormats[ni.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = cp, cp++, pp.push("gBuffer_Position"), ip.push(this._textureTypesAndFormats[ni.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = cp, cp++, pp.push("gBuffer_Velocity"), ip.push(this._textureTypesAndFormats[ni.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = cp, cp++, pp.push("gBuffer_VelocityLinear"), ip.push(this._textureTypesAndFormats[ni.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = cp, cp++, pp.push("gBuffer_Reflectivity"), ip.push(this._textureTypesAndFormats[ni.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = cp, cp++, pp.push("gBuffer_ScreenspaceDepth"), ip.push(this._textureTypesAndFormats[ni.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = cp, cp++, pp.push("gBuffer_Irradiance"), ip.push(this._textureTypesAndFormats[ni.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = cp, cp++, pp.push("gBuffer_ObjectId"), ip.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = cp, cp++, pp.push("gBuffer_MeshBlendTag"), ip.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [cp, pp, ip]
      }
      _createRenderTargets() {
        const pp = this._scene.gy(),
          [ip, cp, Op] = this._assignRenderTargetIndices(),
          op = Math.min(pp.getCaps().maxDrawBuffers ?? 1, 8);
        if (pp.getCaps().drawBuffersExtension && ip > op) throw new Error(`GeometryBufferRenderer: ${ip} color attachments were requested, but this engine supports at most ${op}`);
        let Sp = 0;
        pp._caps.textureFloat && pp._caps.textureFloatLinearFiltering ? Sp = 1 : pp._caps.textureHalfFloat && pp._caps.textureHalfFloatLinearFiltering && (Sp = 2);
        const xp = this._getRenderTargetDimensions(),
          Lp = [],
          Yp = [],
          Dp = [];
        for (const Ip of Op) Ip ? (Lp.push(Ip.textureType), Yp.push(Ip.textureFormat), Dp.push(Ip.samplingMode ?? 2)) : (Lp.push(Sp), Yp.push(5), Dp.push(2));
        if (this._normalsAreUnsigned = 11 === Lp[ni.NORMAL_TEXTURE_TYPE] || 13 === Lp[ni.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Ji("gBuffer", xp, ip, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Lp,
            formats: Yp,
            samplingModes: Dp,
            depthTextureFormat: this._depthFormat
          }, cp.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Ep.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Ep.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Ap = [!0],
          Pp = [!1],
          Wp = [!0];
        for (let Ip = 1; Ip < ip; ++Ip) Ap.push(!0), Wp.push(!1), Pp.push(!0);
        const yp = pp.buildTextureLayout(Ap),
          Up = pp.buildTextureLayout(Pp),
          wp = pp.buildTextureLayout(Wp);
        this._multiRenderTarget.onClearObservable.add((pp => {
          const ip = this.useSpecificClearForDepthTexture ? Up : yp;
          pp.clearAttachments(this._clearColor, ip, !0, !0, !0), this.useSpecificClearForDepthTexture && pp.clearAttachments(this._clearDepthColor, wp, !0, !1, !1), pp.bindAttachments(yp)
        })), this._resizeObserver = pp.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const vp = pp => {
          const ip = pp.getRenderingMesh(),
            cp = pp.getEffectiveMesh(),
            Op = this._scene,
            op = Op.gy(),
            Sp = pp.Ky();
          if (!Sp) return;
          if (cp._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[cp.uniqueId] && (this._previousTransformationMatrices[cp.uniqueId] = {
              WP: fp.b.Identity(),
              viewProjection: Op.getTransformMatrix()
            }, ip.skeleton)) {
            const pp = ip.skeleton.getTransformMatrices(ip);
            this._previousBonesTransformationMatrices[ip.uniqueId] = this._copyBonesTransformationMatrices(pp, new Float32Array(pp.length))
          }
          const xp = ip._getInstancesRenderList(pp._id, !!pp.getReplacementMesh());
          if (xp.mustReturn) return;
          const Lp = op.getCaps().instancedArrays && (null !== xp.visibleInstances[pp._id] || ip.hasThinInstances),
            Yp = cp.getWorldMatrix();
          if (this.isReady(pp, Lp)) {
            const Dp = pp._getDrawWrapper();
            if (!Dp) return;
            const Ap = Dp.effect;
            let Pp;
            op.enableEffect(Dp), Lp || ip._bind(pp, Ap, Sp.fillMode), this._useUbo ? ((0, Vp.y)(Ap, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Ap.setMatrix("viewProjection", Op.getTransformMatrix()), Ap.setMatrix("view", Op.getViewMatrix()), this._scene.bindEyePosition(Ap, "vEyePosition"));
            if (ip._instanceDataStorage.isFrozen || !Sp.backFaceCulling && null === Sp.sideOrientation) Pp = ip._effectiveSideOrientation;
            else {
              const pp = cp._getWorldMatrixDeterminant();
              Pp = Sp._getEffectiveOrientation(ip), pp < 0 && (Pp = Pp === Ip.b.ClockWiseSideOrientation ? Ip.b.CounterClockWiseSideOrientation : Ip.b.ClockWiseSideOrientation)
            }
            if (Sp._preBind(Dp, Pp), Sp.needAlphaTestingForMesh(cp)) {
              const pp = Sp.getAlphaTestTexture();
              pp && (Ap.setTexture("diffuseSampler", pp), Ap.setMatrix("diffuseMatrix", pp.getTextureMatrix()), Ap.setFloat("alphaCutOff", Sp.alphaCutOff ?? .4))
            }
            if ((Sp.bumpTexture || Sp.normalTexture || Sp.geometryNormalTexture) && Op.gy().getCaps().standardDerivatives && sp.c.BumpTextureEnabled) {
              const pp = Sp.bumpTexture || Sp.normalTexture || Sp.geometryNormalTexture;
              Ap.setFloat3("vBumpInfos", pp.coordinatesIndex, 1 / pp.level, Sp.parallaxScaleBias), Ap.setMatrix("bumpMatrix", pp.getTextureMatrix()), Ap.setTexture("bumpSampler", pp), Ap.setFloat2("vTangentSpaceParams", Sp.invertNormalMapX ? -1 : 1, Sp.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Sp.getClassName()) null !== Sp.metallicRoughnessTexture && (Ap.setTexture("reflectivitySampler", Sp.metallicRoughnessTexture), Ap.setMatrix("reflectivityMatrix", Sp.metallicRoughnessTexture.getTextureMatrix())), null !== Sp.metallic && Ap.setFloat("metallic", Sp.metallic), null !== Sp.roughness && Ap.setFloat("glossiness", 1 - Sp.roughness), null !== Sp.baseTexture && (Ap.setTexture("albedoSampler", Sp.baseTexture), Ap.setMatrix("albedoMatrix", Sp.baseTexture.getTextureMatrix())), null !== Sp.baseColor && Ap.setColor3("albedoColor", Sp.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Sp.getClassName()) null !== Sp.specularGlossinessTexture ? (Ap.setTexture("reflectivitySampler", Sp.specularGlossinessTexture), Ap.setMatrix("reflectivityMatrix", Sp.specularGlossinessTexture.getTextureMatrix())) : null !== Sp.specularColor && Ap.setColor3("reflectivityColor", Sp.specularColor), null !== Sp.glossiness && Ap.setFloat("glossiness", Sp.glossiness);
            else if ("PBRMaterial" === Sp.getClassName()) null !== Sp.metallicTexture && (Ap.setTexture("reflectivitySampler", Sp.metallicTexture), Ap.setMatrix("reflectivityMatrix", Sp.metallicTexture.getTextureMatrix())), null !== Sp.metallic && Ap.setFloat("metallic", Sp.metallic), null !== Sp.roughness && Ap.setFloat("glossiness", 1 - Sp.roughness), null !== Sp.roughness || null !== Sp.metallic || null !== Sp.metallicTexture ? (null !== Sp.albedoTexture && (Ap.setTexture("albedoSampler", Sp.albedoTexture), Ap.setMatrix("albedoMatrix", Sp.albedoTexture.getTextureMatrix())), null !== Sp.albedoColor && Ap.setColor3("albedoColor", Sp.albedoColor)) : (null !== Sp.reflectivityTexture ? (Ap.setTexture("reflectivitySampler", Sp.reflectivityTexture), Ap.setMatrix("reflectivityMatrix", Sp.reflectivityTexture.getTextureMatrix())) : null !== Sp.reflectivityColor && Ap.setColor3("reflectivityColor", Sp.reflectivityColor), null !== Sp.microSurface && Ap.setFloat("glossiness", Sp.microSurface));
            else if ("StandardMaterial" === Sp.getClassName()) null !== Sp.specularTexture && (Ap.setTexture("reflectivitySampler", Sp.specularTexture), Ap.setMatrix("reflectivityMatrix", Sp.specularTexture.getTextureMatrix())), null !== Sp.specularColor && Ap.setColor3("reflectivityColor", Sp.specularColor);
            else if ("OpenPBRMaterial" === Sp.getClassName()) {
              const pp = Sp;
              pp._useRoughnessFromMetallicTextureGreen && pp.baseMetalnessTexture ? (Ap.setTexture("reflectivitySampler", pp.baseMetalnessTexture), Ap.setMatrix("reflectivityMatrix", pp.baseMetalnessTexture.getTextureMatrix())) : pp.baseMetalnessTexture ? (Ap.setTexture("metallicSampler", pp.baseMetalnessTexture), Ap.setMatrix("metallicMatrix", pp.baseMetalnessTexture.getTextureMatrix())) : pp.specularRoughnessTexture && (Ap.setTexture("roughnessSampler", pp.specularRoughnessTexture), Ap.setMatrix("roughnessMatrix", pp.specularRoughnessTexture.getTextureMatrix())), Ap.setFloat("metallic", pp.baseMetalness), Ap.setFloat("glossiness", 1 - pp.specularRoughness), null !== pp.baseColorTexture && (Ap.setTexture("albedoSampler", pp.baseColorTexture), Ap.setMatrix("albedoMatrix", pp.baseColorTexture.getTextureMatrix())), null !== pp.baseColor && Ap.setColor3("albedoColor", pp.baseColor)
            }
            if (this._enableIrradiance && Op.environmentTexture) {
              const pp = Op.environmentTexture,
                ip = Op.postProcessRenderPipelineManager.supportedPipelines.find((pp => "IBLShadowsRenderPipeline" === pp.getClassName()));
              if (ip) {
                const pp = ip._getAccumulatedTexture();
                pp && (Ap.setTexture("iblShadowSampler", pp), Ap.setFloat2("shadowTextureSize", pp.getSize().width, pp.getSize().height))
              }
              if (Ap.setMatrix("reflectionMatrix", pp.getReflectionTextureMatrix()), Ap.setFloat2("vReflectionInfos", pp.level * Op.iblIntensity, 0), Ap.setTexture("reflectionSampler", pp), pp.irradianceTexture && (Ap.setTexture("irradianceSampler", pp.irradianceTexture), pp.irradianceTexture._dominantDirection && Ap.setVector3("vReflectionDominantDirection", pp.irradianceTexture._dominantDirection)), pp.sphericalPolynomial) {
                const ip = pp.sphericalPolynomial;
                if (ip.preScaledHarmonics) {
                  const pp = ip.preScaledHarmonics;
                  Ap.setVector3("vSphericalL00", pp.l00), Ap.setVector3("vSphericalL1_1", pp.l1_1), Ap.setVector3("vSphericalL10", pp.l10), Ap.setVector3("vSphericalL11", pp.l11), Ap.setVector3("vSphericalL2_2", pp.l2_2), Ap.setVector3("vSphericalL2_1", pp.l2_1), Ap.setVector3("vSphericalL20", pp.l20), Ap.setVector3("vSphericalL21", pp.l21), Ap.setVector3("vSphericalL22", pp.l22)
                } else Ap.setFloat3("vSphericalX", ip.x.x, ip.x.y, ip.x.z), Ap.setFloat3("vSphericalY", ip.y.x, ip.y.y, ip.y.z), Ap.setFloat3("vSphericalZ", ip.z.x, ip.z.y, ip.z.z), Ap.setFloat3("vSphericalXX_ZZ", ip.xx.x - ip.zz.x, ip.xx.y - ip.zz.y, ip.xx.z - ip.zz.z), Ap.setFloat3("vSphericalYY_ZZ", ip.yy.x - ip.zz.x, ip.yy.y - ip.zz.y, ip.yy.z - ip.zz.z), Ap.setFloat3("vSphericalZZ", ip.zz.x, ip.zz.y, ip.zz.z), Ap.setFloat3("vSphericalXY", ip.xy.x, ip.xy.y, ip.xy.z), Ap.setFloat3("vSphericalYZ", ip.yz.x, ip.yz.y, ip.yz.z), Ap.setFloat3("vSphericalZX", ip.zx.x, ip.zx.y, ip.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Sp.getClassName()) {
                const pp = Sp;
                Ap.setFloat("vSubsurfaceWeight", pp.subsurfaceWeight), pp.subsurfaceWeightTexture && (Ap.setTexture("subsurfaceWeightSampler", pp.subsurfaceWeightTexture), Ap.setMatrix("subsurfaceWeightMatrix", pp.subsurfaceWeightTexture.getTextureMatrix())), Ap.setFloat("vTransmissionWeight", pp.transmissionWeight), pp.transmissionWeightTexture && (Ap.setTexture("transmissionWeightSampler", pp.transmissionWeightTexture), Ap.setMatrix("transmissionWeightMatrix", pp.transmissionWeightTexture.getTextureMatrix())), Ap.setFloat("vTransmissionScatterAnisotropy", pp.transmissionScatterAnisotropy), Ap.setFloat("vSubsurfaceScatterAnisotropy", pp.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Pi.g)(Ap, Sp, this._scene), ip.useBones && ip.computeBonesUsingShaders && ip.skeleton) {
              const pp = ip.skeleton;
              if (pp.isUsingTextureForMatrices && Ap.getUniformIndex("boneTextureInfo") > -1) {
                const cp = pp.getTransformMatrixTexture(ip);
                Ap.setTexture("boneSampler", cp), Ap.setFloat2("boneTextureInfo", pp._textureWidth, pp._textureHeight)
              } else Ap.setMatrices("mBones", ip.skeleton.getTransformMatrices(ip));
              (this._enableVelocity || this._enableVelocityLinear) && Ap.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[ip.uniqueId])
            }
            if ((0, Vp.v)(ip, Ap), ip.morphTargetManager && ip.morphTargetManager.isUsingTextureForTargets && ip.morphTargetManager._bind(Ap), (this._enableVelocity || this._enableVelocityLinear) && (Ap.setMatrix("previousWorld", this._previousTransformationMatrices[cp.uniqueId].WP), Ap.setMatrix("previousViewProjection", this._previousTransformationMatrices[cp.uniqueId].viewProjection)), this._enableObjectId) {
              let pp = ip.uniqueId;
              if (this.objectIdProvider) pp = (0, Ui.h)(ip, this.objectIdProvider);
              else if (pp > 16777215) throw new Error(`Invalid geometry object ID ${pp} for mesh "${ip.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Ap.setFloat("objectId", pp)
            }
            if (this._enableMeshBlendTag) {
              const pp = this.meshBlendTagProvider ? (0, Ui.g)(ip, this.meshBlendTagProvider) : ip.meshBlendingTag;
              Ap.setInt("meshBlendTag", pp)
            }
            Lp && ip.hasThinInstances && Ap.setMatrix("world", Yp), ip._processRendering(cp, pp, Ap, Sp.fillMode, xp, Lp, ((pp, ip) => {
              pp || Ap.setMatrix("world", ip)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[cp.uniqueId].WP = Yp.clone(), this._previousTransformationMatrices[cp.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), ip.skeleton && this._copyBonesTransformationMatrices(ip.skeleton.getTransformMatrices(ip), this._previousBonesTransformationMatrices[cp.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (ip, cp, Op) => {
          if ((Op || 0 === cp) && ip.Am)
            for (let op = 0; op < ip.Am.length; ++op) {
              const cp = ip.Am[op],
                Op = cp.Ky(),
                Ip = cp.getRenderingMesh();
              if (!Op) continue;
              const Sp = Ip._getInstancesRenderList(cp._id, !!cp.getReplacementMesh()),
                xp = pp.getCaps().instancedArrays && (null !== Sp.visibleInstances[cp._id] || Ip.hasThinInstances);
              if (!this.isReady(cp, xp)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (ip, cp, Op, op) => {
          let Ip;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.gy().bindAttachments(this._attachmentsFromPrePass)
          }
          if (op.length) {
            for (pp.setColorWrite(!1), Ip = 0; Ip < op.length; Ip++) vp(op.data[Ip]);
            pp.setColorWrite(!0)
          }
          for (Ip = 0; Ip < ip.length; Ip++) vp(ip.data[Ip]);
          for (pp.setDepthWrite(!1), Ip = 0; Ip < cp.length; Ip++) vp(cp.data[Ip]);
          if (this.renderTransparentMeshes)
            for (Ip = 0; Ip < Op.length; Ip++) vp(Op.data[Ip]);
          pp.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const pp = this._scene.gy();
        return {
          width: Math.max(1, Math.floor(pp.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(pp.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(pp, ip) {
        for (let cp = 0; cp < pp.length; cp++) ip[cp] = pp[cp];
        return ip
      }
    }
    ni.ForceGLSL = !1, ni.DEPTH_TEXTURE_TYPE = 0, ni.NORMAL_TEXTURE_TYPE = 1, ni.POSITION_TEXTURE_TYPE = 2, ni.VELOCITY_TEXTURE_TYPE = 3, ni.REFLECTIVITY_TEXTURE_TYPE = 4, ni.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, ni.VELOCITY_LINEAR_TEXTURE_TYPE = 6, ni.IRRADIANCE_TEXTURE_TYPE = 7, ni.OBJECT_ID_TEXTURE_TYPE = 8, ni.MESH_BLEND_TAG_TEXTURE_TYPE = 9, ni._SceneComponentInitialization = pp => {
      throw (0, Hi.o)("GeometryBufferRendererSceneComponent")
    };
    var Fi = cp(37368);
    const gi = {
      effect: null,
      subMesh: null
    };

    function Gi(pp) {
      if ("number" === typeof pp) return 1;
      if (pp instanceof fp.l) return 2;
      if (pp instanceof fp.o || pp instanceof Gp.d) return 3;
      if (pp instanceof fp.q || pp instanceof Gp.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class ri {
      populateVectorFromLinkedProperties(pp) {
        const ip = Gi(pp);
        for (const cp in this.linkedProperties) {
          const pp = this.linkedProperties[cp],
            Op = pp.numComponents;
          if (ip < Op || pp.targetUniformComponentOffset > ip - Op) return void(1 == Op ? Mp.e.Error(`Float property ${pp.name} has an offset that is too large.`) : Mp.e.Error(`Vector${Op} property ${pp.name} won't fit in Vector${ip} or has an offset that is too large.`));
          "number" === typeof pp.value ? ri._tmpArray[pp.targetUniformComponentOffset] = pp.value : pp.value.toArray(ri._tmpArray, pp.targetUniformComponentOffset)
        }
        pp.vcp(ri._tmpArray)
      }
      constructor(pp, ip) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = pp, this.numComponents = ip
      }
    }
    ri._tmpArray = [0, 0, 0, 0];
    class Zi {
      constructor(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Ip = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = pp, this.targetUniformName = cp, this.defaultValue = ip, this.value = ip, this.targetUniformComponentNum = Op, this.targetUniformComponentOffset = op, this.requiredDefine = Ip
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Gi(this.defaultValue)
      }
    }
    class zi {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(pp, ip, cp) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = pp, this.samplerPrefix = ip, this.textureDefine = cp
      }
    }
    class si extends((0, vi.c)((0, wi.c)(hp.c))) {}
    class Ki extends(function(pp) {
      return class extends pp {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(si)) {}
    class Vi extends((0, rp.h)(Ki)) {
      constructor(pp) {
        super(pp), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class pc extends((0, ti.b)(zp.e)) {}
    let ic = (() => {
        var pp, ip, Op, op, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Xp, lp, Qp, Jp, Tp, hp, ap, np, Fp, rp, zp, ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, wi, vi, ti, Hi, di, ei, ui, ji, ki, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, Fi, Gi, si, Ki, ic, cc, Oc, oc, Ic, Sc, xc, Lc, Yc, Dc, Ac, Pc, Wc, yc, Uc, wc, vc, tc, Hc, dc, ec, uc, jc, kc, mc, Rc, qc, Mc, Cc, Ec, Xc;
        let lc, Qc, Jc, Bc, Nc, Tc, fc, bc, hc, ac, nc, Fc, gc, Gc, rc, Zc, zc, sc, Kc, Vc, pO, iO, cO, OO, oO, IO, SO, xO, LO, YO, DO, AO, PO, WO, yO, UO, wO, vO, tO, HO, dO, eO, uO, jO, kO, mO, RO, qO, MO, CO, EO, XO, lO, QO, JO, BO, NO, TO, fO, bO, hO, aO, nO, FO, gO, GO, rO, ZO, zO, sO, KO, VO, po, io, co, Oo, oo, Io, So, xo, Lo, Yo, Do, Ao, Po, Wo, yo, Uo, wo, vo, to, Ho, eo, uo, jo, ko, mo, Ro, qo, Mo, Co, Eo, Xo, Qo, Jo, Bo = pc,
          No = [],
          To = [],
          fo = [],
          bo = [],
          ho = [],
          ao = [],
          no = [],
          Fo = [],
          go = [],
          Go = [],
          ro = [],
          Zo = [],
          zo = [],
          so = [],
          Ko = [],
          Vo = [],
          pI = [],
          iI = [],
          cI = [],
          OI = [],
          oI = [],
          II = [],
          SI = [],
          xI = [],
          LI = [],
          YI = [],
          DI = [],
          AI = [],
          PI = [],
          WI = [],
          yI = [],
          UI = [],
          wI = [],
          vI = [],
          tI = [],
          HI = [],
          dI = [],
          eI = [],
          uI = [],
          jI = [],
          kI = [],
          mI = [],
          RI = [],
          qI = [],
          MI = [],
          CI = [],
          EI = [],
          XI = [],
          lI = [],
          QI = [],
          JI = [],
          BI = [],
          NI = [],
          TI = [],
          fI = [],
          bI = [],
          hI = [],
          aI = [],
          nI = [],
          FI = [],
          gI = [],
          GI = [],
          rI = [],
          ZI = [],
          zI = [],
          sI = [],
          KI = [],
          VI = [],
          pS = [],
          iS = [],
          cS = [],
          OS = [],
          oS = [],
          IS = [],
          SS = [],
          xS = [],
          LS = [],
          YS = [],
          DS = [],
          AS = [],
          PS = [],
          WS = [],
          yS = [],
          US = [],
          wS = [],
          vS = [],
          tS = [],
          HS = [],
          dS = [],
          eS = [],
          uS = [],
          jS = [],
          kS = [],
          mS = [],
          RS = [],
          qS = [],
          MS = [],
          CS = [],
          ES = [],
          XS = [],
          lS = [],
          QS = [],
          JS = [],
          BS = [],
          NS = [],
          TS = [],
          fS = [],
          bS = [],
          hS = [],
          aS = [],
          nS = [],
          FS = [],
          gS = [],
          GS = [],
          rS = [],
          ZS = [],
          zS = [],
          sS = [],
          KS = [],
          VS = [],
          px = [],
          ix = [],
          cx = [],
          Ox = [],
          ox = [],
          Ix = [],
          Sx = [],
          xx = [],
          Lx = [],
          Yx = [],
          Dx = [],
          Ax = [],
          Px = [],
          Wx = [],
          yx = [],
          Ux = [],
          wx = [],
          vx = [],
          tx = [],
          Hx = [],
          dx = [],
          ex = [],
          ux = [],
          jx = [],
          kx = [],
          mx = [],
          Rx = [],
          qx = [],
          Mx = [],
          Cx = [],
          Ex = [],
          Xx = [],
          lx = [],
          Qx = [],
          Jx = [],
          Bx = [],
          Nx = [],
          Tx = [],
          fx = [],
          bx = [],
          hx = [],
          ax = [],
          nx = [],
          Fx = [],
          gx = [],
          Gx = [],
          rx = [],
          Zx = [],
          zx = [],
          sx = [],
          Kx = [],
          Vx = [],
          pL = [],
          iL = [],
          cL = [],
          OL = [],
          oL = [],
          IL = [],
          SL = [],
          xL = [],
          LL = [],
          YL = [],
          DL = [],
          AL = [],
          PL = [],
          WL = [],
          yL = [],
          UL = [],
          wL = [],
          vL = [],
          tL = [],
          HL = [],
          dL = [],
          eL = [],
          uL = [],
          jL = [],
          kL = [],
          mL = [],
          RL = [],
          qL = [],
          ML = [],
          CL = [],
          EL = [],
          XL = [],
          lL = [];
        return pp = class extends Bo {
          get baseWeight() {
            return (0, Rp.e)(this, ip, "f")
          }
          set baseWeight(pp) {
            (0, Rp.f)(this, ip, pp, "f")
          }
          get baseWeightTexture() {
            return (0, Rp.e)(this, Op, "f")
          }
          set baseWeightTexture(pp) {
            (0, Rp.f)(this, Op, pp, "f")
          }
          get baseColor() {
            return (0, Rp.e)(this, op, "f")
          }
          set baseColor(pp) {
            (0, Rp.f)(this, op, pp, "f")
          }
          get baseColorTexture() {
            return (0, Rp.e)(this, Sp, "f")
          }
          set baseColorTexture(pp) {
            (0, Rp.f)(this, Sp, pp, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Rp.e)(this, xp, "f")
          }
          set baseDiffuseRoughness(pp) {
            (0, Rp.f)(this, xp, pp, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Rp.e)(this, Lp, "f")
          }
          set baseDiffuseRoughnessTexture(pp) {
            (0, Rp.f)(this, Lp, pp, "f")
          }
          get baseMetalness() {
            return (0, Rp.e)(this, Yp, "f")
          }
          set baseMetalness(pp) {
            (0, Rp.f)(this, Yp, pp, "f")
          }
          get baseMetalnessTexture() {
            return (0, Rp.e)(this, Dp, "f")
          }
          set baseMetalnessTexture(pp) {
            (0, Rp.f)(this, Dp, pp, "f")
          }
          get specularWeight() {
            return (0, Rp.e)(this, Ap, "f")
          }
          set specularWeight(pp) {
            (0, Rp.f)(this, Ap, pp, "f")
          }
          get specularWeightTexture() {
            return (0, Rp.e)(this, Pp, "f")
          }
          set specularWeightTexture(pp) {
            (0, Rp.f)(this, Pp, pp, "f")
          }
          get specularColor() {
            return (0, Rp.e)(this, Wp, "f")
          }
          set specularColor(pp) {
            (0, Rp.f)(this, Wp, pp, "f")
          }
          get specularColorTexture() {
            return (0, Rp.e)(this, yp, "f")
          }
          set specularColorTexture(pp) {
            (0, Rp.f)(this, yp, pp, "f")
          }
          get specularRoughness() {
            return (0, Rp.e)(this, Up, "f")
          }
          set specularRoughness(pp) {
            (0, Rp.f)(this, Up, pp, "f")
          }
          get specularRoughnessTexture() {
            return (0, Rp.e)(this, wp, "f")
          }
          set specularRoughnessTexture(pp) {
            (0, Rp.f)(this, wp, pp, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Rp.e)(this, vp, "f")
          }
          set specularRoughnessAnisotropy(pp) {
            (0, Rp.f)(this, vp, pp, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Rp.e)(this, tp, "f")
          }
          set specularRoughnessAnisotropyTexture(pp) {
            (0, Rp.f)(this, tp, pp, "f")
          }
          get specularIor() {
            return (0, Rp.e)(this, Hp, "f")
          }
          set specularIor(pp) {
            (0, Rp.f)(this, Hp, pp, "f")
          }
          get transmissionWeight() {
            return (0, Rp.e)(this, dp, "f")
          }
          set transmissionWeight(pp) {
            (0, Rp.f)(this, dp, pp, "f")
          }
          get transmissionWeightTexture() {
            return (0, Rp.e)(this, ep, "f")
          }
          set transmissionWeightTexture(pp) {
            (0, Rp.f)(this, ep, pp, "f")
          }
          get transmissionColor() {
            return (0, Rp.e)(this, jp, "f")
          }
          set transmissionColor(pp) {
            (0, Rp.f)(this, jp, pp, "f")
          }
          get transmissionColorTexture() {
            return (0, Rp.e)(this, kp, "f")
          }
          set transmissionColorTexture(pp) {
            (0, Rp.f)(this, kp, pp, "f")
          }
          get transmissionDepth() {
            return (0, Rp.e)(this, mp, "f")
          }
          set transmissionDepth(pp) {
            (0, Rp.f)(this, mp, pp, "f")
          }
          get transmissionDepthTexture() {
            return (0, Rp.e)(this, Xp, "f")
          }
          set transmissionDepthTexture(pp) {
            (0, Rp.f)(this, Xp, pp, "f")
          }
          get transmissionScatter() {
            return (0, Rp.e)(this, lp, "f")
          }
          set transmissionScatter(pp) {
            (0, Rp.f)(this, lp, pp, "f")
          }
          get transmissionScatterTexture() {
            return (0, Rp.e)(this, Qp, "f")
          }
          set transmissionScatterTexture(pp) {
            (0, Rp.f)(this, Qp, pp, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Rp.e)(this, Jp, "f")
          }
          set transmissionScatterAnisotropy(pp) {
            (0, Rp.f)(this, Jp, pp, "f")
          }
          get transmissionDispersionScale() {
            return (0, Rp.e)(this, Tp, "f")
          }
          set transmissionDispersionScale(pp) {
            (0, Rp.f)(this, Tp, pp, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Rp.e)(this, hp, "f")
          }
          set transmissionDispersionScaleTexture(pp) {
            (0, Rp.f)(this, hp, pp, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Rp.e)(this, ap, "f")
          }
          set transmissionDispersionAbbeNumber(pp) {
            (0, Rp.f)(this, ap, pp, "f")
          }
          get subsurfaceWeight() {
            return (0, Rp.e)(this, np, "f")
          }
          set subsurfaceWeight(pp) {
            (0, Rp.f)(this, np, pp, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Rp.e)(this, Fp, "f")
          }
          set subsurfaceWeightTexture(pp) {
            (0, Rp.f)(this, Fp, pp, "f")
          }
          get subsurfaceColor() {
            return (0, Rp.e)(this, rp, "f")
          }
          set subsurfaceColor(pp) {
            (0, Rp.f)(this, rp, pp, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Rp.e)(this, zp, "f")
          }
          set subsurfaceColorTexture(pp) {
            (0, Rp.f)(this, zp, pp, "f")
          }
          get subsurfaceRadius() {
            return (0, Rp.e)(this, ii, "f")
          }
          set subsurfaceRadius(pp) {
            (0, Rp.f)(this, ii, pp, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Rp.e)(this, ci, "f")
          }
          set subsurfaceRadiusScale(pp) {
            (0, Rp.f)(this, ci, pp, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Rp.e)(this, Oi, "f")
          }
          set subsurfaceRadiusScaleTexture(pp) {
            (0, Rp.f)(this, Oi, pp, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Rp.e)(this, oi, "f")
          }
          set subsurfaceScatterAnisotropy(pp) {
            (0, Rp.f)(this, oi, pp, "f")
          }
          get coatWeight() {
            return (0, Rp.e)(this, Ii, "f")
          }
          set coatWeight(pp) {
            (0, Rp.f)(this, Ii, pp, "f")
          }
          get coatWeightTexture() {
            return (0, Rp.e)(this, Si, "f")
          }
          set coatWeightTexture(pp) {
            (0, Rp.f)(this, Si, pp, "f")
          }
          get coatColor() {
            return (0, Rp.e)(this, xi, "f")
          }
          set coatColor(pp) {
            (0, Rp.f)(this, xi, pp, "f")
          }
          get coatColorTexture() {
            return (0, Rp.e)(this, Li, "f")
          }
          set coatColorTexture(pp) {
            (0, Rp.f)(this, Li, pp, "f")
          }
          get coatRoughness() {
            return (0, Rp.e)(this, Yi, "f")
          }
          set coatRoughness(pp) {
            (0, Rp.f)(this, Yi, pp, "f")
          }
          get coatRoughnessTexture() {
            return (0, Rp.e)(this, Di, "f")
          }
          set coatRoughnessTexture(pp) {
            (0, Rp.f)(this, Di, pp, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Rp.e)(this, Ai, "f")
          }
          set coatRoughnessAnisotropy(pp) {
            (0, Rp.f)(this, Ai, pp, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Rp.e)(this, wi, "f")
          }
          set coatRoughnessAnisotropyTexture(pp) {
            (0, Rp.f)(this, wi, pp, "f")
          }
          get coatIor() {
            return (0, Rp.e)(this, vi, "f")
          }
          set coatIor(pp) {
            (0, Rp.f)(this, vi, pp, "f")
          }
          get coatDarkening() {
            return (0, Rp.e)(this, ti, "f")
          }
          set coatDarkening(pp) {
            (0, Rp.f)(this, ti, pp, "f")
          }
          get coatDarkeningTexture() {
            return (0, Rp.e)(this, Hi, "f")
          }
          set coatDarkeningTexture(pp) {
            (0, Rp.f)(this, Hi, pp, "f")
          }
          get fuzzWeight() {
            return (0, Rp.e)(this, di, "f")
          }
          set fuzzWeight(pp) {
            (0, Rp.f)(this, di, pp, "f")
          }
          get fuzzWeightTexture() {
            return (0, Rp.e)(this, ei, "f")
          }
          set fuzzWeightTexture(pp) {
            (0, Rp.f)(this, ei, pp, "f")
          }
          get fuzzColor() {
            return (0, Rp.e)(this, ui, "f")
          }
          set fuzzColor(pp) {
            (0, Rp.f)(this, ui, pp, "f")
          }
          get fuzzColorTexture() {
            return (0, Rp.e)(this, ji, "f")
          }
          set fuzzColorTexture(pp) {
            (0, Rp.f)(this, ji, pp, "f")
          }
          get fuzzRoughness() {
            return (0, Rp.e)(this, ki, "f")
          }
          set fuzzRoughness(pp) {
            (0, Rp.f)(this, ki, pp, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Rp.e)(this, qi, "f")
          }
          set fuzzRoughnessTexture(pp) {
            (0, Rp.f)(this, qi, pp, "f")
          }
          get geometryThinWalled() {
            return (0, Rp.e)(this, Mi, "f")
          }
          set geometryThinWalled(pp) {
            (0, Rp.f)(this, Mi, pp, "f")
          }
          get geometryNormalTexture() {
            return (0, Rp.e)(this, Ci, "f")
          }
          set geometryNormalTexture(pp) {
            (0, Rp.f)(this, Ci, pp, "f")
          }
          get geometryTangent() {
            return (0, Rp.e)(this, Ei, "f")
          }
          set geometryTangent(pp) {
            (0, Rp.f)(this, Ei, pp, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(pp) {
            this.geometryTangent = new fp.l(Math.cos(pp), Math.sin(pp))
          }
          get geometryTangentTexture() {
            return (0, Rp.e)(this, Xi, "f")
          }
          set geometryTangentTexture(pp) {
            (0, Rp.f)(this, Xi, pp, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Rp.e)(this, li, "f")
          }
          set geometryCoatNormalTexture(pp) {
            (0, Rp.f)(this, li, pp, "f")
          }
          get geometryCoatTangent() {
            return (0, Rp.e)(this, Qi, "f")
          }
          set geometryCoatTangent(pp) {
            (0, Rp.f)(this, Qi, pp, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(pp) {
            this.geometryCoatTangent = new fp.l(Math.cos(pp), Math.sin(pp))
          }
          get geometryCoatTangentTexture() {
            return (0, Rp.e)(this, Ji, "f")
          }
          set geometryCoatTangentTexture(pp) {
            (0, Rp.f)(this, Ji, pp, "f")
          }
          get geometryOpacity() {
            return (0, Rp.e)(this, Bi, "f")
          }
          set geometryOpacity(pp) {
            (0, Rp.f)(this, Bi, pp, "f")
          }
          get geometryOpacityTexture() {
            return (0, Rp.e)(this, Ni, "f")
          }
          set geometryOpacityTexture(pp) {
            (0, Rp.f)(this, Ni, pp, "f")
          }
          get geometryThickness() {
            return (0, Rp.e)(this, Ti, "f")
          }
          set geometryThickness(pp) {
            (0, Rp.f)(this, Ti, pp, "f")
          }
          get geometryThicknessTexture() {
            return (0, Rp.e)(this, fi, "f")
          }
          set geometryThicknessTexture(pp) {
            (0, Rp.f)(this, fi, pp, "f")
          }
          get emissionLuminance() {
            return (0, Rp.e)(this, bi, "f")
          }
          set emissionLuminance(pp) {
            (0, Rp.f)(this, bi, pp, "f")
          }
          get emissionColor() {
            return (0, Rp.e)(this, ai, "f")
          }
          set emissionColor(pp) {
            (0, Rp.f)(this, ai, pp, "f")
          }
          get emissionColorTexture() {
            return (0, Rp.e)(this, Fi, "f")
          }
          set emissionColorTexture(pp) {
            (0, Rp.f)(this, Fi, pp, "f")
          }
          get thinFilmWeight() {
            return (0, Rp.e)(this, Gi, "f")
          }
          set thinFilmWeight(pp) {
            (0, Rp.f)(this, Gi, pp, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Rp.e)(this, si, "f")
          }
          set thinFilmWeightTexture(pp) {
            (0, Rp.f)(this, si, pp, "f")
          }
          get thinFilmThickness() {
            return (0, Rp.e)(this, Ki, "f")
          }
          set thinFilmThickness(pp) {
            (0, Rp.f)(this, Ki, pp, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Rp.e)(this, ic, "f")
          }
          set thinFilmThicknessMin(pp) {
            (0, Rp.f)(this, ic, pp, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Rp.e)(this, cc, "f")
          }
          set thinFilmThicknessTexture(pp) {
            (0, Rp.f)(this, cc, pp, "f")
          }
          get thinFilmIor() {
            return (0, Rp.e)(this, Oc, "f")
          }
          set thinFilmIor(pp) {
            (0, Rp.f)(this, Oc, pp, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Rp.e)(this, oc, "f")
          }
          set ambientOcclusionTexture(pp) {
            (0, Rp.f)(this, oc, pp, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(pp) {
            this._sssQuality !== pp && (this._sssQuality = pp, this.ocp(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(pp) {
            this._sssIrradianceTexture !== pp && (this._sssIrradianceTexture = pp, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(pp) {
            this._sssDepthTexture !== pp && (this._sssDepthTexture = pp, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Rp.e)(this, Ic, "f")
          }
          set directIntensity(pp) {
            (0, Rp.f)(this, Ic, pp, "f")
          }
          get environmentIntensity() {
            return (0, Rp.e)(this, Sc, "f")
          }
          set environmentIntensity(pp) {
            (0, Rp.f)(this, Sc, pp, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Rp.e)(this, xc, "f")
          }
          set useSpecularWeightFromTextureAlpha(pp) {
            (0, Rp.f)(this, xc, pp, "f")
          }
          get forceAlphaTest() {
            return (0, Rp.e)(this, Lc, "f")
          }
          set forceAlphaTest(pp) {
            (0, Rp.f)(this, Lc, pp, "f")
          }
          get alphaCutOff() {
            return (0, Rp.e)(this, Yc, "f")
          }
          set alphaCutOff(pp) {
            (0, Rp.f)(this, Yc, pp, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Rp.e)(this, Dc, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(pp) {
            (0, Rp.f)(this, Dc, pp, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Rp.e)(this, Ac, "f")
          }
          set useAmbientInGrayScale(pp) {
            (0, Rp.f)(this, Ac, pp, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Gp.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Ip.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(pp) {
            pp !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = pp ? Ip.b.LIGHTFALLOFF_PHYSICAL : Ip.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Ip.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(pp) {
            pp !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = pp ? Ip.b.LIGHTFALLOFF_GLTF : Ip.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Rp.e)(this, Pc, "f")
          }
          set useObjectSpaceNormalMap(pp) {
            (0, Rp.f)(this, Pc, pp, "f")
          }
          get useParallax() {
            return (0, Rp.e)(this, Wc, "f")
          }
          set useParallax(pp) {
            (0, Rp.f)(this, Wc, pp, "f")
          }
          get useParallaxOcclusion() {
            return (0, Rp.e)(this, yc, "f")
          }
          set useParallaxOcclusion(pp) {
            (0, Rp.f)(this, yc, pp, "f")
          }
          get parallaxScaleBias() {
            return (0, Rp.e)(this, Uc, "f")
          }
          set parallaxScaleBias(pp) {
            (0, Rp.f)(this, Uc, pp, "f")
          }
          get disableLighting() {
            return (0, Rp.e)(this, wc, "f")
          }
          set disableLighting(pp) {
            (0, Rp.f)(this, wc, pp, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Rp.e)(this, vc, "f")
          }
          set forceIrradianceInFragment(pp) {
            (0, Rp.f)(this, vc, pp, "f")
          }
          get maxSimultaneousLights() {
            return (0, Rp.e)(this, tc, "f")
          }
          set maxSimultaneousLights(pp) {
            (0, Rp.f)(this, tc, pp, "f")
          }
          get invertNormalMapX() {
            return (0, Rp.e)(this, Hc, "f")
          }
          set invertNormalMapX(pp) {
            (0, Rp.f)(this, Hc, pp, "f")
          }
          get invertNormalMapY() {
            return (0, Rp.e)(this, dc, "f")
          }
          set invertNormalMapY(pp) {
            (0, Rp.f)(this, dc, pp, "f")
          }
          get twoSidedLighting() {
            return (0, Rp.e)(this, ec, "f")
          }
          set twoSidedLighting(pp) {
            (0, Rp.f)(this, ec, pp, "f")
          }
          get useAlphaFresnel() {
            return (0, Rp.e)(this, uc, "f")
          }
          set useAlphaFresnel(pp) {
            (0, Rp.f)(this, uc, pp, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Rp.e)(this, jc, "f")
          }
          set useLinearAlphaFresnel(pp) {
            (0, Rp.f)(this, jc, pp, "f")
          }
          get environmentBRDFTexture() {
            return (0, Rp.e)(this, kc, "f")
          }
          set environmentBRDFTexture(pp) {
            (0, Rp.f)(this, kc, pp, "f")
          }
          get forceNormalForward() {
            return (0, Rp.e)(this, mc, "f")
          }
          set forceNormalForward(pp) {
            (0, Rp.f)(this, mc, pp, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Rp.e)(this, Rc, "f")
          }
          set enableSpecularAntiAliasing(pp) {
            (0, Rp.f)(this, Rc, pp, "f")
          }
          get useHorizonOcclusion() {
            return (0, Rp.e)(this, qc, "f")
          }
          set useHorizonOcclusion(pp) {
            (0, Rp.f)(this, qc, pp, "f")
          }
          get useRadianceOcclusion() {
            return (0, Rp.e)(this, Mc, "f")
          }
          set useRadianceOcclusion(pp) {
            (0, Rp.f)(this, Mc, pp, "f")
          }
          get unlit() {
            return (0, Rp.e)(this, Cc, "f")
          }
          set unlit(pp) {
            (0, Rp.f)(this, Cc, pp, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Rp.e)(this, Ec, "f")
          }
          set applyDecalMapAfterDetailMap(pp) {
            (0, Rp.f)(this, Ec, pp, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(pp) {
            this._backgroundRefractionTexture = pp, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(pp) {
            this._refractionHighQualityBlur !== pp && (this._refractionHighQualityBlur = pp, this.ocp(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(pp) {
            this._realTimeFiltering = pp, this.ocp(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(pp) {
            this._realTimeFilteringQuality = pp, this.ocp(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(pp) {
            this._fuzzSampleNumber = pp, this.ocp(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Rp.e)(this, Xc, "f")
          }
          set debugMode(pp) {
            (0, Rp.f)(this, Xc, pp, "f")
          }
          constructor(cp, qp) {
            super(cp, qp, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || pp.ForceGLSL), ip.set(this, ((0, Rp.l)(this, No), (0, Rp.l)(this, To, void 0))), this._baseWeight = ((0, Rp.l)(this, fo), new Zi("base_weight", 1, "vBaseWeight", 1)), Op.set(this, (0, Rp.l)(this, bo, void 0)), this._baseWeightTexture = ((0, Rp.l)(this, ho), new zi("base_weight", "baseWeight", "BASE_WEIGHT")), op.set(this, (0, Rp.l)(this, ao, void 0)), this._baseColor = ((0, Rp.l)(this, no), new Zi("base_color", Gp.d.White(), "vBaseColor", 4)), Sp.set(this, (0, Rp.l)(this, Fo, void 0)), this._baseColorTexture = ((0, Rp.l)(this, go), new zi("base_color", "baseColor", "BASE_COLOR")), xp.set(this, (0, Rp.l)(this, Go, void 0)), this._baseDiffuseRoughness = ((0, Rp.l)(this, ro), new Zi("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Lp.set(this, (0, Rp.l)(this, Zo, void 0)), this._baseDiffuseRoughnessTexture = ((0, Rp.l)(this, zo), new zi("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Yp.set(this, (0, Rp.l)(this, so, void 0)), this._baseMetalness = ((0, Rp.l)(this, Ko), new Zi("base_metalness", 0, "vReflectanceInfo", 4, 0)), Dp.set(this, (0, Rp.l)(this, Vo, void 0)), this._baseMetalnessTexture = ((0, Rp.l)(this, pI), new zi("base_metalness", "baseMetalness", "BASE_METALNESS")), Ap.set(this, (0, Rp.l)(this, iI, void 0)), this._specularWeight = ((0, Rp.l)(this, cI), new Zi("specular_weight", 1, "vReflectanceInfo", 4, 3)), Pp.set(this, (0, Rp.l)(this, OI, void 0)), this._specularWeightTexture = ((0, Rp.l)(this, oI), new zi("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Wp.set(this, (0, Rp.l)(this, II, void 0)), this._specularColor = ((0, Rp.l)(this, SI), new Zi("specular_color", Gp.d.White(), "vSpecularColor", 4)), yp.set(this, (0, Rp.l)(this, xI, void 0)), this._specularColorTexture = ((0, Rp.l)(this, LI), new zi("specular_color", "specularColor", "SPECULAR_COLOR")), Up.set(this, (0, Rp.l)(this, YI, void 0)), this._specularRoughness = ((0, Rp.l)(this, DI), new Zi("specular_roughness", .3, "vReflectanceInfo", 4, 1)), wp.set(this, (0, Rp.l)(this, AI, void 0)), this._specularRoughnessTexture = ((0, Rp.l)(this, PI), new zi("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), vp.set(this, (0, Rp.l)(this, WI, void 0)), this._specularRoughnessAnisotropy = ((0, Rp.l)(this, yI), new Zi("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), tp.set(this, (0, Rp.l)(this, UI, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Rp.l)(this, wI), new zi("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Hp.set(this, (0, Rp.l)(this, vI, void 0)), this._specularIor = ((0, Rp.l)(this, tI), new Zi("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), dp.set(this, (0, Rp.l)(this, HI, void 0)), this._transmissionWeight = ((0, Rp.l)(this, dI), new Zi("transmission_weight", 0, "vTransmissionWeight", 1)), ep.set(this, (0, Rp.l)(this, eI, void 0)), this._transmissionWeightTexture = ((0, Rp.l)(this, uI), new zi("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), jp.set(this, (0, Rp.l)(this, jI, void 0)), this._transmissionColor = ((0, Rp.l)(this, kI), new Zi("transmission_color", Gp.d.White(), "vTransmissionColor", 3, 0)), kp.set(this, (0, Rp.l)(this, mI, void 0)), this._transmissionColorTexture = ((0, Rp.l)(this, RI), new zi("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), mp.set(this, (0, Rp.l)(this, qI, void 0)), this._transmissionDepth = ((0, Rp.l)(this, MI), new Zi("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Xp.set(this, (0, Rp.l)(this, CI, void 0)), this._transmissionDepthTexture = ((0, Rp.l)(this, EI), new zi("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), lp.set(this, (0, Rp.l)(this, XI, void 0)), this._transmissionScatter = ((0, Rp.l)(this, lI), new Zi("transmission_scatter", Gp.d.Black(), "vTransmissionScatter", 3, 0)), Qp.set(this, (0, Rp.l)(this, QI, void 0)), this._transmissionScatterTexture = ((0, Rp.l)(this, JI), new zi("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Jp.set(this, (0, Rp.l)(this, BI, void 0)), this._transmissionScatterAnisotropy = ((0, Rp.l)(this, NI), new Zi("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Tp.set(this, (0, Rp.l)(this, TI, void 0)), this._transmissionDispersionScale = ((0, Rp.l)(this, fI), new Zi("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), hp.set(this, (0, Rp.l)(this, bI, void 0)), this._transmissionDispersionScaleTexture = ((0, Rp.l)(this, hI), new zi("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), ap.set(this, (0, Rp.l)(this, aI, void 0)), this._transmissionDispersionAbbeNumber = ((0, Rp.l)(this, nI), new Zi("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), np.set(this, (0, Rp.l)(this, FI, void 0)), this._subsurfaceWeight = ((0, Rp.l)(this, gI), new Zi("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Fp.set(this, (0, Rp.l)(this, GI, void 0)), this._subsurfaceWeightTexture = ((0, Rp.l)(this, rI), new zi("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), rp.set(this, (0, Rp.l)(this, ZI, void 0)), this._subsurfaceColor = ((0, Rp.l)(this, zI), new Zi("subsurface_color", new Gp.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), zp.set(this, (0, Rp.l)(this, sI, void 0)), this._subsurfaceColorTexture = ((0, Rp.l)(this, KI), new zi("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), ii.set(this, (0, Rp.l)(this, VI, void 0)), this._subsurfaceRadius = ((0, Rp.l)(this, pS), new Zi("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), ci.set(this, (0, Rp.l)(this, iS, void 0)), this._subsurfaceRadiusScale = ((0, Rp.l)(this, cS), new Zi("subsurface_radius_scale", new Gp.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), Oi.set(this, (0, Rp.l)(this, OS, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Rp.l)(this, oS), new zi("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), oi.set(this, (0, Rp.l)(this, IS, void 0)), this._subsurfaceScatterAnisotropy = ((0, Rp.l)(this, SS), new Zi("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Ii.set(this, (0, Rp.l)(this, xS, void 0)), this._coatWeight = ((0, Rp.l)(this, LS), new Zi("coat_weight", 0, "vCoatWeight", 1, 0)), Si.set(this, (0, Rp.l)(this, YS, void 0)), this._coatWeightTexture = ((0, Rp.l)(this, DS), new zi("coat_weight", "coatWeight", "COAT_WEIGHT")), xi.set(this, (0, Rp.l)(this, AS, void 0)), this._coatColor = ((0, Rp.l)(this, PS), new Zi("coat_color", Gp.d.White(), "vCoatColor", 3, 0)), Li.set(this, (0, Rp.l)(this, WS, void 0)), this._coatColorTexture = ((0, Rp.l)(this, yS), new zi("coat_color", "coatColor", "COAT_COLOR")), Yi.set(this, (0, Rp.l)(this, US, void 0)), this._coatRoughness = ((0, Rp.l)(this, wS), new Zi("coat_roughness", 0, "vCoatRoughness", 1, 0)), Di.set(this, (0, Rp.l)(this, vS, void 0)), this._coatRoughnessTexture = ((0, Rp.l)(this, tS), new zi("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Ai.set(this, (0, Rp.l)(this, HS, void 0)), this._coatRoughnessAnisotropy = ((0, Rp.l)(this, dS), new Zi("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), wi.set(this, (0, Rp.l)(this, eS, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Rp.l)(this, uS), new zi("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), vi.set(this, (0, Rp.l)(this, jS, void 0)), this._coatIor = ((0, Rp.l)(this, kS), new Zi("coat_ior", 1.5, "vCoatIor", 1, 0)), ti.set(this, (0, Rp.l)(this, mS, void 0)), this._coatDarkening = ((0, Rp.l)(this, RS), new Zi("coat_darkening", 1, "vCoatDarkening", 1, 0)), Hi.set(this, (0, Rp.l)(this, qS, void 0)), this._coatDarkeningTexture = ((0, Rp.l)(this, MS), new zi("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, di.set(this, (0, Rp.l)(this, CS, void 0)), this._fuzzWeight = ((0, Rp.l)(this, ES), new Zi("fuzz_weight", 0, "vFuzzWeight", 1, 0)), ei.set(this, (0, Rp.l)(this, XS, void 0)), this._fuzzWeightTexture = ((0, Rp.l)(this, lS), new zi("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), ui.set(this, (0, Rp.l)(this, QS, void 0)), this._fuzzColor = ((0, Rp.l)(this, JS), new Zi("fuzz_color", Gp.d.White(), "vFuzzColor", 3, 0)), ji.set(this, (0, Rp.l)(this, BS, void 0)), this._fuzzColorTexture = ((0, Rp.l)(this, NS), new zi("fuzz_color", "fuzzColor", "FUZZ_COLOR")), ki.set(this, (0, Rp.l)(this, TS, void 0)), this._fuzzRoughness = ((0, Rp.l)(this, fS), new Zi("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), qi.set(this, (0, Rp.l)(this, bS, void 0)), this._fuzzRoughnessTexture = ((0, Rp.l)(this, hS), new zi("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Mi.set(this, (0, Rp.l)(this, aS, void 0)), this._geometryThinWalled = ((0, Rp.l)(this, nS), new Zi("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Ci.set(this, (0, Rp.l)(this, FS, void 0)), this._geometryNormalTexture = ((0, Rp.l)(this, gS), new zi("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Ei.set(this, (0, Rp.l)(this, GS, void 0)), this._geometryTangent = ((0, Rp.l)(this, rS), new Zi("geometry_tangent", new fp.l(1, 0), "vSpecularAnisotropy", 3, 0)), Xi.set(this, (0, Rp.l)(this, ZS, void 0)), this._geometryTangentTexture = ((0, Rp.l)(this, zS), new zi("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), li.set(this, (0, Rp.l)(this, sS, void 0)), this._geometryCoatNormalTexture = ((0, Rp.l)(this, KS), new zi("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Qi.set(this, (0, Rp.l)(this, VS, void 0)), this._geometryCoatTangent = ((0, Rp.l)(this, px), new Zi("geometry_coat_tangent", new fp.l(1, 0), "vGeometryCoatTangent", 2, 0)), Ji.set(this, (0, Rp.l)(this, ix, void 0)), this._geometryCoatTangentTexture = ((0, Rp.l)(this, cx), new zi("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Bi.set(this, (0, Rp.l)(this, Ox, void 0)), this._geometryOpacity = ((0, Rp.l)(this, ox), new Zi("geometry_opacity", 1, "vBaseColor", 4, 3)), Ni.set(this, (0, Rp.l)(this, Ix, void 0)), this._geometryOpacityTexture = ((0, Rp.l)(this, Sx), new zi("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Ti.set(this, (0, Rp.l)(this, xx, void 0)), this._geometryThickness = ((0, Rp.l)(this, Lx), new Zi("geometry_thickness", 0, "vGeometryThickness", 1, 0)), fi.set(this, (0, Rp.l)(this, Yx, void 0)), this._geometryThicknessTexture = ((0, Rp.l)(this, Dx), new zi("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), bi.set(this, (0, Rp.l)(this, Ax, void 0)), this._emissionLuminance = ((0, Rp.l)(this, Px), new Zi("emission_luminance", 1, "vLightingIntensity", 4, 1)), ai.set(this, (0, Rp.l)(this, Wx, void 0)), this._emissionColor = ((0, Rp.l)(this, yx), new Zi("emission_color", Gp.d.Black(), "vEmissionColor", 3)), Fi.set(this, (0, Rp.l)(this, Ux, void 0)), this._emissionColorTexture = ((0, Rp.l)(this, wx), new zi("emission_color", "emissionColor", "EMISSION_COLOR")), Gi.set(this, (0, Rp.l)(this, vx, void 0)), this._thinFilmWeight = ((0, Rp.l)(this, tx), new Zi("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), si.set(this, (0, Rp.l)(this, Hx, void 0)), this._thinFilmWeightTexture = ((0, Rp.l)(this, dx), new zi("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Ki.set(this, (0, Rp.l)(this, ex, void 0)), this._thinFilmThickness = ((0, Rp.l)(this, ux), new Zi("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), ic.set(this, (0, Rp.l)(this, jx, void 0)), this._thinFilmThicknessMin = ((0, Rp.l)(this, kx), new Zi("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), cc.set(this, (0, Rp.l)(this, mx, void 0)), this._thinFilmThicknessTexture = ((0, Rp.l)(this, Rx), new zi("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Oc.set(this, (0, Rp.l)(this, qx, void 0)), this._thinFilmIor = ((0, Rp.l)(this, Mx), new Zi("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), oc.set(this, (0, Rp.l)(this, Cx, void 0)), this._ambientOcclusionTexture = ((0, Rp.l)(this, Ex), new zi("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = pp.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, Ic.set(this, (0, Rp.l)(this, Xx, 1)), Sc.set(this, ((0, Rp.l)(this, lx), (0, Rp.l)(this, Qx, 1))), xc.set(this, ((0, Rp.l)(this, Jx), (0, Rp.l)(this, Bx, !1))), Lc.set(this, ((0, Rp.l)(this, Nx), (0, Rp.l)(this, Tx, !1))), Yc.set(this, ((0, Rp.l)(this, fx), (0, Rp.l)(this, bx, .4))), Dc.set(this, ((0, Rp.l)(this, hx), (0, Rp.l)(this, ax, !1))), Ac.set(this, ((0, Rp.l)(this, nx), (0, Rp.l)(this, Fx, !1))), Pc.set(this, ((0, Rp.l)(this, gx), (0, Rp.l)(this, Gx, !1))), Wc.set(this, ((0, Rp.l)(this, rx), (0, Rp.l)(this, Zx, !1))), yc.set(this, ((0, Rp.l)(this, zx), (0, Rp.l)(this, sx, !1))), Uc.set(this, ((0, Rp.l)(this, Kx), (0, Rp.l)(this, Vx, .05))), wc.set(this, ((0, Rp.l)(this, pL), (0, Rp.l)(this, iL, !1))), vc.set(this, ((0, Rp.l)(this, cL), (0, Rp.l)(this, OL, !1))), tc.set(this, ((0, Rp.l)(this, oL), (0, Rp.l)(this, IL, 4))), Hc.set(this, ((0, Rp.l)(this, SL), (0, Rp.l)(this, xL, !1))), dc.set(this, ((0, Rp.l)(this, LL), (0, Rp.l)(this, YL, !1))), ec.set(this, ((0, Rp.l)(this, DL), (0, Rp.l)(this, AL, !1))), uc.set(this, ((0, Rp.l)(this, PL), (0, Rp.l)(this, WL, !1))), jc.set(this, ((0, Rp.l)(this, yL), (0, Rp.l)(this, UL, !1))), kc.set(this, ((0, Rp.l)(this, wL), (0, Rp.l)(this, vL, null))), mc.set(this, ((0, Rp.l)(this, tL), (0, Rp.l)(this, HL, !1))), Rc.set(this, ((0, Rp.l)(this, dL), (0, Rp.l)(this, eL, !1))), qc.set(this, ((0, Rp.l)(this, uL), (0, Rp.l)(this, jL, !0))), Mc.set(this, ((0, Rp.l)(this, kL), (0, Rp.l)(this, mL, !0))), Cc.set(this, ((0, Rp.l)(this, RL), (0, Rp.l)(this, qL, !1))), Ec.set(this, ((0, Rp.l)(this, ML), (0, Rp.l)(this, CL, !1))), this._lightingInfos = ((0, Rp.l)(this, EL), new fp.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Ip.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Cp.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Xc.set(this, (0, Rp.l)(this, XL, 0)), this.debugLimit = ((0, Rp.l)(this, lL), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Ip.b.MATERIAL_OPAQUE, this.Gl() && !this.Gl()?.gy().isWebGPU && this.Gl().gy().eU < 2 && Mp.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), pp._noiseTextures[this.Gl().uniqueId] || (pp._noiseTextures[this.Gl().uniqueId] = new Ep.d(Ri.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Gl(), !1, !0, 1), this.Gl().Kl.addOnce((() => {
              pp._noiseTextures[this.Gl().uniqueId]?.dispose(), delete pp._noiseTextures[this.Gl().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), sp.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), sp.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Np(this.Gl()), this._environmentFuzzBRDFTexture = Bp(this.Gl()), this.prePassConfiguration = new gp.c, this._propertyList = {};
            for (const pp of Object.getOwnPropertyNames(this)) {
              const ip = this[pp];
              ip instanceof Zi && (this._propertyList[pp] = ip)
            }
            Object.keys(this._propertyList).forEach((pp => {
              const ip = this._propertyList[pp];
              let cp = this._uniformsList[ip.targetUniformName];
              cp ? cp.numComponents !== ip.targetUniformComponentNum ? Mp.e.Error(`Uniform ${ip.targetUniformName} already exists of size ${cp.numComponents}, but trying to set it to ${ip.targetUniformComponentNum}.`) : cp.requiredDefine !== ip.requiredDefine && (cp.requiredDefine = void 0) : (cp = new ri(ip.targetUniformName, ip.targetUniformComponentNum), cp.requiredDefine = ip.requiredDefine, this._uniformsList[ip.targetUniformName] = cp), "" === cp.firstLinkedKey && (cp.firstLinkedKey = ip.name), cp.linkedProperties[ip.name] = ip
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const pp of Object.getOwnPropertyNames(this)) {
              const ip = this[pp];
              ip instanceof zi && (this._samplersList[pp] = ip)
            }
            for (const pp in this._samplersList) {
              const ip = this._samplersList[pp].textureDefine;
              this._samplerDefines[ip] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[ip + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[ip + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(sp.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(sp.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(pp) {
            this._transparencyMode !== pp && (this._transparencyMode = pp, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Ip.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(pp) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(pp)
          }
          clone(ip) {
            let cp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const op = mi.c.Clone((() => new pp(ip, this.Gl())), this, {
              cloneTexturesOnlyOnce: cp
            });
            return op.id = ip, op.name = ip, this.stencil.copyTo(op.stencil), this._clonePlugins(op, Op), op
          }
          serialize() {
            const pp = super.serialize();
            return pp.customType = "BABYLON.OpenPBRMaterial", pp
          }
          static Parse(ip, cp, Op) {
            const op = mi.c.Parse((() => new pp(ip.name, cp)), ip, cp, Op);
            return ip.stencil && op.stencil.parse(ip.stencil, cp, Op), Ip.b._ParsePlugins(ip, op, cp, Op), op
          }
          forceCompilation(pp, ip, cp) {
            const Op = {
              clipPlane: !1,
              useInstances: !1,
              ...cp
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const cp = new Vi({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                op = this._prepareEffect(pp, pp, cp, void 0, void 0, Op.useInstances, Op.clipPlane);
              this._onEffectCreatedObservable && (gi.effect = op, gi.subMesh = null, this._onEffectCreatedObservable.notifyObservers(gi)), op.isReady() ? ip && ip(this) : op.onCompileObservable.add((() => {
                ip && ip(this)
              }))
            })()
          }
          isReadyForSubMesh(ip, cp, Op) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const op = cp._drawWrapper;
            if (op.effect && this.isFrozen && op._wasPreviouslyReady && op._wasPreviouslyUsingInstances === Op) return !0;
            cp.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cp.materialDefines = new Vi({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Ip = cp.materialDefines;
            if (this._isReadyForSubMesh(cp)) return !0;
            const Sp = this.Gl(),
              xp = Sp.gy();
            if (Ip._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Sp.texturesEnabled)) {
              for (const pp in this._samplersList) {
                const ip = this._samplersList[pp];
                if (ip.value && !ip.value.isReadyOrNotBlocking()) return !1
              }
              const ip = this._getRadianceTexture();
              if (ip && sp.c.ReflectionTextureEnabled) {
                if (!ip.isReadyOrNotBlocking()) return !1;
                if (ip.irradianceTexture) {
                  if (!ip.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!ip.sphericalPolynomial && ip.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && sp.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && sp.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && sp.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (pp._noiseTextures[Sp.uniqueId] && !pp._noiseTextures[Sp.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ip, this._eventInfo.subMesh = cp, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Ip._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Ip.AREALIGHTUSED)
              for (let pp = 0; pp < ip.lightSources.length; pp++)
                if (!ip.lightSources[pp]._isReady()) return !1;
            if (xp.getCaps().standardDerivatives || ip.isVerticesDataPresent(bp.j.NormalKind) || (ip.createNormals(!0), Mp.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + ip.name)), !(0, Vp.c)(Sp, ip, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Lp = cp.effect,
              Yp = Ip._areLightsDisposed,
              Dp = this._prepareEffect(ip, cp.getRenderingMesh(), Ip, this.onCompiled, this.onError, Op, null);
            let Ap = !1;
            if (Dp)
              if (this._onEffectCreatedObservable && (gi.effect = Dp, gi.subMesh = cp, this._onEffectCreatedObservable.notifyObservers(gi)), this.allowShaderHotSwapping && Lp && !Dp.isReady()) {
                if (Ip.markAsUnprocessed(), Ap = this.isFrozen, Yp) return Ip._areLightsDisposed = !0, !1
              } else Sp.resetCachedMaterial(), cp.setEffect(Dp, Ip, this._materialContext);
            return !(!cp.effect || !cp.effect.isReady()) && (Ip._renderId = Sp.getRenderId(), op._wasPreviouslyReady = !Ap, op._wasPreviouslyUsingInstances = !!Op, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const pp = this._uniformBuffer;
            pp.addUniform("vTangentSpaceParams", 2), pp.addUniform("vLightingIntensity", 4), pp.addUniform("pointSize", 1), pp.addUniform("vDebugMode", 2), pp.addUniform("renderTargetSize", 2), pp.addUniform("cameraInfo", 4), pp.addUniform("vTextureRepetitionHexTilingParams", 4), pp.addUniform("backgroundRefractionMatrix", 16), pp.addUniform("vBackgroundRefractionInfos", 3), (0, Vp.qb)(pp, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((ip => {
              pp.addUniform(ip.name, ip.numComponents)
            })), Object.values(this._samplersList).forEach((ip => {
              pp.addUniform(ip.samplerInfoName, 2), pp.addUniform(ip.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(pp, ip, cp, Op) {
            if (0 === this.geometryThickness) pp.updateFloat("vGeometryThickness", 0);
            else {
              Op.getRenderingMesh().getWorldMatrix().decompose(fp.i.Zy[0]);
              const ip = Math.max(Math.abs(fp.i.Zy[0].x), Math.abs(fp.i.Zy[0].y), Math.abs(fp.i.Zy[0].z));
              pp.updateFloat("vGeometryThickness", this.geometryThickness * ip)
            }
          }
          bindForSubMesh(ip, cp, Op) {
            const op = this.Gl(),
              Ip = Op.materialDefines;
            if (!Ip) return;
            const Sp = Op.effect;
            if (!Sp) return;
            this._activeEffect = Sp, cp.getMeshUniformBuffer().bindToEffect(Sp, "Mesh"), cp.transferToEffect(ip);
            const xp = op.gy();
            this._uniformBuffer.bindToEffect(Sp, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, op, cp, ip, this.isFrozen), Ui.e.Bind(xp.currentRenderPassId, this._activeEffect, cp, ip, this);
            const Lp = op.activeCamera;
            Lp ? this._uniformBuffer.updateFloat4("cameraInfo", Lp.minZ, Lp.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Yp = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Yp[0], Yp[1], Yp[2], Yp[3]), this._eventInfo.subMesh = Op, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Ip.OBJECTSPACE_NORMALMAP && (ip.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Dp = this._mustRebind(op, Sp, Op, cp.visibility),
              Ap = xp._features.needToAlwaysBindUniformBuffers;
            (0, Vp.g)(cp, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Wi.e)(this._activeEffect, this._vertexPullingMetadata);
            const Pp = this._uniformBuffer;
            if (Dp) {
              this.bindViewProjection(Sp);
              const ip = this._getRadianceTexture();
              if (!Pp.useUbo || !this.isFrozen || !Pp.isSync || Op._drawWrapper._forceRebindOnNextCall) {
                if (op.texturesEnabled) {
                  for (const pp in this._samplersList) {
                    const ip = this._samplersList[pp];
                    ip.value && (Pp.updateFloat2(ip.samplerInfoName, ip.value.coordinatesIndex, ip.value.level), (0, Vp.A)(ip.value, Pp, ip.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (op._mirroredCameraPosition ? Pp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Pp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Vp.k)(op, Ip, Pp, Gp.d.White(), ip, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Pp.updateFloat("pointSize", this.pointSize);
                const pp = this._uniformsArray;
                for (let ip = 0, cp = pp.length; ip < cp; ip++) {
                  const cp = pp[ip];
                  (void 0 === cp.requiredDefine || Ip[cp.requiredDefine]) && (4 === cp.numComponents ? (cp.populateVectorFromLinkedProperties(fp.i.Vector4[0]), Pp.updateVector4(cp.name, fp.i.Vector4[0])) : 3 === cp.numComponents ? (cp.populateVectorFromLinkedProperties(fp.i.Zy[0]), Pp.updateVector3(cp.name, fp.i.Zy[0])) : 2 === cp.numComponents ? (cp.populateVectorFromLinkedProperties(fp.i.Vector2[0]), Pp.updateFloat2(cp.name, fp.i.Vector2[0].x, fp.i.Vector2[0].y)) : 1 === cp.numComponents && Pp.updateFloat(cp.name, cp.linkedProperties[cp.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * op.environmentIntensity, this._lightingInfos.w = 1, Pp.updateVector4("vLightingIntensity", this._lightingInfos), Pp.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (op.texturesEnabled) {
                for (const pp in this._samplersList) {
                  const ip = this._samplersList[pp];
                  ip.value && Pp.setTexture(ip.samplerName, ip.value)
                }
                if ((0, Vp.m)(op, Ip, Pp, ip, this.realTimeFiltering), Ip.ENVIRONMENTBRDF && Pp.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Ip.FUZZENVIRONMENTBRDF && Pp.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Ip.REFRACTED_BACKGROUND && (Pp.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Pp.I3("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), fp.i.Zy[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Pp.updateVector3("vBackgroundRefractionInfos", fp.i.Zy[1])), (Ip.ANISOTROPIC || Ip.FUZZ || Ip.REFRACTED_BACKGROUND || Ip.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Pp.setTexture("blueNoiseSampler", pp._noiseTextures[this.Gl().uniqueId]), Ip.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const pp = this.sssIrradianceTexture.getSize().width,
                    ip = this.sssIrradianceTexture.getSize().height;
                  Pp.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Pp.setTexture("sceneDepthSampler", this.sssDepthTexture), Pp.updateFloat2("renderTargetSize", pp, ip)
                }
              }
              this.Gl().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cp) && this.Gl().depthPeelingRenderer.bind(Sp), this._eventInfo.subMesh = Op, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Pi.g)(this._activeEffect, this, op), this.bindEyePosition(Sp)
            } else Ap && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, op, op.gy(), Op), !Dp && this.isFrozen && !Ap || !op.lightsEnabled || this._disableLighting || (0, Vp.p)(op, cp, this._activeEffect, Ip, this._maxSimultaneousLights), !Dp && this.isFrozen || (this.bindView(Sp), (0, Vp.i)(op, cp, this._activeEffect, !0), Ip.NUM_MORPH_INFLUENCERS && (0, Vp.v)(cp, this._activeEffect), Ip.BAKED_VERTEX_ANIMATION_TEXTURE && cp.bakedVertexAnimationManager?.bind(Sp, Ip.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Vp.r)(Ip, this._activeEffect, op)), this._afterBind(cp, this._activeEffect, Op), Pp.update()
          }
          getAnimatables() {
            const pp = super.getAnimatables();
            for (const ip in this._samplersList) {
              const cp = this._samplersList[ip];
              cp.value && cp.value.animations && cp.value.animations.length > 0 && pp.push(cp.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && pp.push(this._radianceTexture), pp
          }
          getActiveTextures() {
            const pp = super.getActiveTextures();
            for (const ip in this._samplersList) {
              const cp = this._samplersList[ip];
              cp.value && pp.push(cp.value)
            }
            return this._radianceTexture && pp.push(this._radianceTexture), pp
          }
          hasTexture(pp) {
            if (super.hasTexture(pp)) return !0;
            for (const ip in this._samplersList) {
              if (this._samplersList[ip].value === pp) return !0
            }
            return this._radianceTexture === pp
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(pp, ip) {
            if (this._breakShaderLoadedCheck = !0, ip) {
              this._environmentBRDFTexture && this.Gl().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Gl().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const pp in this._samplersList) {
                const ip = this._samplersList[pp];
                ip.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(pp, ip)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Gl().environmentTexture
          }
          _prepareEffect(ip, cp, Op) {
            let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(ip, cp, Op, Sp, xp), !Op.isDirty) return null;
            Op.markAsProcessed();
            const Lp = this.Gl().gy(),
              Yp = new Kp.c;
            let Dp = 0;
            Op.USESPHERICALINVERTEX && Yp.addFallback(Dp++, "USESPHERICALINVERTEX"), Op.FOG && Yp.addFallback(Dp, "FOG"), Op.SPECULARAA && Yp.addFallback(Dp, "SPECULARAA"), Op.POINTSIZE && Yp.addFallback(Dp, "POINTSIZE"), Op.LOGARITHMICDEPTH && Yp.addFallback(Dp, "LOGARITHMICDEPTH"), Op.PARALLAX && Yp.addFallback(Dp, "PARALLAX"), Op.PARALLAX_RHS && Yp.addFallback(Dp, "PARALLAX_RHS"), Op.PARALLAXOCCLUSION && Yp.addFallback(Dp++, "PARALLAXOCCLUSION"), Op.ENVIRONMENTBRDF && Yp.addFallback(Dp++, "ENVIRONMENTBRDF"), Op.TANGENT && Yp.addFallback(Dp++, "TANGENT"), Dp = (0, Vp.E)(Op, Yp, this._maxSimultaneousLights, Dp), Op.SPECULARTERM && Yp.addFallback(Dp++, "SPECULARTERM"), Op.USESPHERICALFROMREFLECTIONMAP && Yp.addFallback(Dp++, "USESPHERICALFROMREFLECTIONMAP"), Op.USEIRRADIANCEMAP && Yp.addFallback(Dp++, "USEIRRADIANCEMAP"), Op.NORMAL && Yp.addFallback(Dp++, "NORMAL"), Op.VERTEXCOLOR && Yp.addFallback(Dp++, "VERTEXCOLOR"), Op.MORPHTARGETS && Yp.addFallback(Dp++, "MORPHTARGETS"), Op.MULTIVIEW && Yp.addFallback(0, "MULTIVIEW");
            const Ap = [bp.j.PositionKind];
            Op.NORMAL && Ap.push(bp.j.NormalKind), Op.TANGENT && Ap.push(bp.j.TangentKind);
            for (let pp = 1; pp <= 6; ++pp) Op["UV" + pp] && Ap.push(`uv${1===pp?"":pp}`);
            Op.VERTEXCOLOR && Ap.push(bp.j.ColorKind), (0, Vp.K)(Ap, ip, Op, Yp), (0, Vp.L)(Ap, Op), (0, Vp.P)(Ap, ip, Op), (0, Vp.G)(Ap, ip, Op);
            let Pp = "openpbr";
            const Wp = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const pp in this._uniformsList) Wp.push(pp);
            const yp = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Op.FUZZENVIRONMENTBRDF && yp.push("environmentFuzzBrdfSampler"), Op.REFRACTED_BACKGROUND && yp.push("backgroundRefractionSampler"), (Op.ANISOTROPIC || Op.FUZZ || Op.REFRACTED_BACKGROUND || Op.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && yp.push("blueNoiseSampler"), Op.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (yp.push("sceneIrradianceSampler"), yp.push("sceneDepthSampler"));
            for (const pp in this._samplersList) {
              const ip = this._samplersList[pp];
              yp.push(ip.samplerName), Wp.push(ip.samplerInfoName), Wp.push(ip.samplerMatrixName)
            }(0, Vp.ub)(Wp, yp, !0);
            const Up = ["Material", "Scene", "Mesh"],
              wp = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Op.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Yp, this._eventInfo.fallbackRank = Dp, this._eventInfo.defines = Op, this._eventInfo.uniforms = Wp, this._eventInfo.attributes = Ap, this._eventInfo.samplers = yp, this._eventInfo.uniformBuffersNames = Up, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ip, this._eventInfo.indexParameters = wp, this._callbackPluginEventGeneric(128, this._eventInfo), Ui.e.AddUniformsAndSamplers(Wp, yp), gp.c.AddUniforms(Wp), gp.c.AddSamplers(yp), (0, Pi.c)(Wp), this._useVertexPulling) {
              const pp = cp?.geometry;
              pp && (this._vertexPullingMetadata = (0, Wi.i)(pp), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
                Wp.push(`vp_${ip}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Zp.c && (Zp.c.PrepareUniforms(Wp, Op), Zp.c.PrepareSamplers(yp, Op)), (0, Vp.xb)({
              uniformsNames: Wp,
              uniformBuffersNames: Up,
              samplers: yp,
              defines: Op,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const vp = {};
            this.customShaderNameResolve && (Pp = this.customShaderNameResolve(Pp, Wp, Up, yp, Op, Ap, vp));
            const tp = Op.toString(),
              Hp = Lp.createEffect(Pp, {
                attributes: Ap,
                uniformsNames: Wp,
                uniformBuffersNames: Up,
                samplers: yp,
                defines: tp,
                fallbacks: Yp,
                onCompiled: op,
                onError: Ip,
                indexParameters: wp,
                processFinalCode: vp.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Op.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: pp._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Lp);
            return this._eventInfo.customCode = void 0, Hp
          }
          _prepareDefines(ip, cp, Op) {
            let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Sp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const xp = cp.hasThinInstances,
              Lp = this.Gl(),
              Yp = Lp.gy();
            (0, Vp.ab)(Lp, ip, Op, !0, this._maxSimultaneousLights, this._disableLighting), Op._needNormals = !0, (0, Vp.ib)(Lp, Op);
            const Dp = this.needAlphaBlendingForMesh(ip) && this.Gl().useOrderIndependentTransparency;
            if ((0, Vp.nb)(Lp, Op, this.canRenderToMRT && !Dp), (0, Vp.lb)(Lp, Op, Dp), Ui.e.PrepareDefines(Yp.currentRenderPassId, ip, Op), Op._areTexturesDirty) {
              Op._needUVs = !1;
              for (let pp = 1; pp <= 6; ++pp) Op["MAINUV" + pp] = !1;
              if (Lp.texturesEnabled) {
                for (const cp in this._samplersList) {
                  const pp = this._samplersList[cp];
                  pp.value ? ((0, Vp.eb)(pp.value, Op, pp.textureDefine), Op[pp.textureDefine + "_GAMMA"] = pp.value.gammaSpace) : Op[pp.textureDefine] = !1
                }
                const pp = this._getRadianceTexture(),
                  ip = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Yp.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Vp.Y)(Lp, pp, Op, this.realTimeFiltering, this.realTimeFilteringQuality, !ip), this._baseMetalnessTexture && (Op.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Op.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Op.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Op.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Op.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Op.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Op.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Op.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Op.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Op.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Op.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Op.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && sp.c.DiffuseTextureEnabled ? (Op.PARALLAX = !0, Op.PARALLAX_RHS = Lp.useRightHandedSystem, Op.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Op.PARALLAX = !1, Op.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Op.PARALLAX = !1, Op.PARALLAX_RHS = !1, Op.PARALLAXOCCLUSION = !1, Op.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && sp.c.ReflectionTextureEnabled ? (Op.ENVIRONMENTBRDF = !0, Op.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Op.ENVIRONMENTBRDF = !1, Op.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Op.FUZZENVIRONMENTBRDF = !0 : Op.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Op.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && sp.c.RefractionTextureEnabled, Op.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Op.REFRACTED_LIGHTS = !0;
                  const pp = this._getRadianceTexture();
                  pp ? (Op.REFRACTED_ENVIRONMENT = sp.c.RefractionTextureEnabled, Op.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Gl().useRightHandedSystem ? !pp.invertZ : pp.invertZ, Op.REFRACTED_ENVIRONMENT_LOCAL_CUBE = pp.isCube && pp.boundingBoxSize) : Op.REFRACTED_ENVIRONMENT = !1
                } else Op.REFRACTED_BACKGROUND = !1, Op.REFRACTED_LIGHTS = !1, Op.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Op.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Op.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Ip.b.LIGHTFALLOFF_STANDARD ? (Op.USEPHYSICALLIGHTFALLOFF = !1, Op.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Ip.b.LIGHTFALLOFF_GLTF ? (Op.USEPHYSICALLIGHTFALLOFF = !1, Op.USEGLTFLIGHTFALLOFF = !0) : (Op.USEPHYSICALLIGHTFALLOFF = !0, Op.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Op.TWOSIDEDLIGHTING = !0 : Op.TWOSIDEDLIGHTING = !1, Op.MIRRORED = !!Lp._mirroredCameraPosition, Op.SPECULARAA = Yp.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Op._areTexturesDirty || Op._areMiscDirty) && (Op.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Op.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Op.ALPHABLEND = this.needAlphaBlendingForMesh(ip)), Op._areTexturesDirty && (Op.TEXTURE_REPETITION_MODE = Yp.version > 1 || Yp.isWebGPU ? this.textureRepetitionMode : 0), Op._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Op), Op.FORCENORMALFORWARD = this._forceNormalForward, Op.RADIANCEOCCLUSION = this._useRadianceOcclusion, Op.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && pp._noiseTextures[Lp.uniqueId] && sp.c.ReflectionTextureEnabled ? (Op.ANISOTROPIC = !0, ip.isVerticesDataPresent(bp.j.TangentKind) || (Op._needUVs = !0, Op.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Op.USE_GLTF_STYLE_ANISOTROPY = !0), Op.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Op.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Op.ANISOTROPIC = !1, Op.USE_GLTF_STYLE_ANISOTROPY = !1, Op.ANISOTROPIC_BASE = !1, Op.ANISOTROPIC_COAT = !1), Op.THIN_FILM = this.thinFilmWeight > 0, Op.IRIDESCENCE = this.thinFilmWeight > 0, Op.DISPERSION = this.transmissionDispersionScale > 0, Op.SCATTERING = this.hasScattering;
            if (Op.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Op.TRANSMISSION_SLAB = this.transmissionWeight > 0, Op.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Op.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Op.PREPASS && (Op.SUBSURFACE_SLAB || Op.TRANSMISSION_SLAB_VOLUME)) {
              let pp = !1;
              if (!this.sssIrradianceTexture && Lp.geometryBufferRenderer) {
                const ip = Lp.geometryBufferRenderer.getTextureIndex(ni.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Lp.geometryBufferRenderer.getGBuffer().textures[ip], pp = !0
              }
              if (!this.sssDepthTexture && Lp.geometryBufferRenderer) {
                const ip = Lp.geometryBufferRenderer.getTextureIndex(ni.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Lp.geometryBufferRenderer.getGBuffer().textures[ip], pp = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Op.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, pp && (Op.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Op.FUZZ = this.fuzzWeight > 0 && sp.c.ReflectionTextureEnabled, Op.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Op.FUZZ ? (ip.isVerticesDataPresent(bp.j.TangentKind) || (Op._needUVs = !0, Op.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Bp(this.Gl()), Op.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Op.FUZZENVIRONMENTBRDF = !1, Op.FUZZ_IBL_SAMPLES = 0), Op._areMiscDirty && ((0, Vp.hb)(ip, Lp, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ip), Op, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cp, this._isVertexOutputInvariant), Op.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ip.isVerticesDataPresent(bp.j.NormalKind), Op.DEBUGMODE = this._debugMode), (0, Vp.X)(Lp, Yp, this, Op, !!op, Sp, xp), this._eventInfo.defines = Op, this._eventInfo.mesh = ip, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Vp.T)(ip, Op, !0, !0, !0, this._transparencyMode !== Ip.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, ip = new WeakMap, Op = new WeakMap, op = new WeakMap, Sp = new WeakMap, xp = new WeakMap, Lp = new WeakMap, Yp = new WeakMap, Dp = new WeakMap, Ap = new WeakMap, Pp = new WeakMap, Wp = new WeakMap, yp = new WeakMap, Up = new WeakMap, wp = new WeakMap, vp = new WeakMap, tp = new WeakMap, Hp = new WeakMap, dp = new WeakMap, ep = new WeakMap, jp = new WeakMap, kp = new WeakMap, mp = new WeakMap, Xp = new WeakMap, lp = new WeakMap, Qp = new WeakMap, Jp = new WeakMap, Tp = new WeakMap, hp = new WeakMap, ap = new WeakMap, np = new WeakMap, Fp = new WeakMap, rp = new WeakMap, zp = new WeakMap, ii = new WeakMap, ci = new WeakMap, Oi = new WeakMap, oi = new WeakMap, Ii = new WeakMap, Si = new WeakMap, xi = new WeakMap, Li = new WeakMap, Yi = new WeakMap, Di = new WeakMap, Ai = new WeakMap, wi = new WeakMap, vi = new WeakMap, ti = new WeakMap, Hi = new WeakMap, di = new WeakMap, ei = new WeakMap, ui = new WeakMap, ji = new WeakMap, ki = new WeakMap, qi = new WeakMap, Mi = new WeakMap, Ci = new WeakMap, Ei = new WeakMap, Xi = new WeakMap, li = new WeakMap, Qi = new WeakMap, Ji = new WeakMap, Bi = new WeakMap, Ni = new WeakMap, Ti = new WeakMap, fi = new WeakMap, bi = new WeakMap, ai = new WeakMap, Fi = new WeakMap, Gi = new WeakMap, si = new WeakMap, Ki = new WeakMap, ic = new WeakMap, cc = new WeakMap, Oc = new WeakMap, oc = new WeakMap, Ic = new WeakMap, Sc = new WeakMap, xc = new WeakMap, Lc = new WeakMap, Yc = new WeakMap, Dc = new WeakMap, Ac = new WeakMap, Pc = new WeakMap, Wc = new WeakMap, yc = new WeakMap, Uc = new WeakMap, wc = new WeakMap, vc = new WeakMap, tc = new WeakMap, Hc = new WeakMap, dc = new WeakMap, ec = new WeakMap, uc = new WeakMap, jc = new WeakMap, kc = new WeakMap, mc = new WeakMap, Rc = new WeakMap, qc = new WeakMap, Mc = new WeakMap, Cc = new WeakMap, Ec = new WeakMap, Xc = new WeakMap, (() => {
          const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bo[Symbol.metadata] ?? null) : void 0;
          lc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], fc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], bc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], nc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], sc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], cO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], OO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], oO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], WO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], tO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], HO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], RO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], qO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], MO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], QO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], JO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], NO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], FO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], GO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], sO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], po = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], io = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], co = [(0, qp.b)("_markAllSubMeshesAsTexturesDirty")], Oo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], oo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Io = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], So = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], xo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Lo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Yo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Do = [(0, qp.K)()], Ao = [(0, qp.K)()], Po = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Wo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], yo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Uo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], wo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsLightsDirty")], vo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], to = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsLightsDirty")], Ho = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], eo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], uo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], jo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ko = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], mo = [(0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ro = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], qo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Mo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Co = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Eo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Xo = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], Qo = [(0, qp.e)("_markAllSubMeshesAsMiscDirty")], Jo = [(0, qp.K)()], (0, Rp.j)(pp, null, lc, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseWeight" in pp,
              get: pp => pp.baseWeight,
              set: (pp, ip) => {
                pp.baseWeight = ip
              }
            },
            metadata: ip
          }, To, fo), (0, Rp.j)(pp, null, Qc, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseWeightTexture" in pp,
              get: pp => pp.baseWeightTexture,
              set: (pp, ip) => {
                pp.baseWeightTexture = ip
              }
            },
            metadata: ip
          }, bo, ho), (0, Rp.j)(pp, null, Jc, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseColor" in pp,
              get: pp => pp.baseColor,
              set: (pp, ip) => {
                pp.baseColor = ip
              }
            },
            metadata: ip
          }, ao, no), (0, Rp.j)(pp, null, Bc, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseColorTexture" in pp,
              get: pp => pp.baseColorTexture,
              set: (pp, ip) => {
                pp.baseColorTexture = ip
              }
            },
            metadata: ip
          }, Fo, go), (0, Rp.j)(pp, null, Nc, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseDiffuseRoughness" in pp,
              get: pp => pp.baseDiffuseRoughness,
              set: (pp, ip) => {
                pp.baseDiffuseRoughness = ip
              }
            },
            metadata: ip
          }, Go, ro), (0, Rp.j)(pp, null, Tc, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseDiffuseRoughnessTexture" in pp,
              get: pp => pp.baseDiffuseRoughnessTexture,
              set: (pp, ip) => {
                pp.baseDiffuseRoughnessTexture = ip
              }
            },
            metadata: ip
          }, Zo, zo), (0, Rp.j)(pp, null, fc, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseMetalness" in pp,
              get: pp => pp.baseMetalness,
              set: (pp, ip) => {
                pp.baseMetalness = ip
              }
            },
            metadata: ip
          }, so, Ko), (0, Rp.j)(pp, null, bc, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "baseMetalnessTexture" in pp,
              get: pp => pp.baseMetalnessTexture,
              set: (pp, ip) => {
                pp.baseMetalnessTexture = ip
              }
            },
            metadata: ip
          }, Vo, pI), (0, Rp.j)(pp, null, hc, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularWeight" in pp,
              get: pp => pp.specularWeight,
              set: (pp, ip) => {
                pp.specularWeight = ip
              }
            },
            metadata: ip
          }, iI, cI), (0, Rp.j)(pp, null, ac, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularWeightTexture" in pp,
              get: pp => pp.specularWeightTexture,
              set: (pp, ip) => {
                pp.specularWeightTexture = ip
              }
            },
            metadata: ip
          }, OI, oI), (0, Rp.j)(pp, null, nc, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularColor" in pp,
              get: pp => pp.specularColor,
              set: (pp, ip) => {
                pp.specularColor = ip
              }
            },
            metadata: ip
          }, II, SI), (0, Rp.j)(pp, null, Fc, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularColorTexture" in pp,
              get: pp => pp.specularColorTexture,
              set: (pp, ip) => {
                pp.specularColorTexture = ip
              }
            },
            metadata: ip
          }, xI, LI), (0, Rp.j)(pp, null, gc, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularRoughness" in pp,
              get: pp => pp.specularRoughness,
              set: (pp, ip) => {
                pp.specularRoughness = ip
              }
            },
            metadata: ip
          }, YI, DI), (0, Rp.j)(pp, null, Gc, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularRoughnessTexture" in pp,
              get: pp => pp.specularRoughnessTexture,
              set: (pp, ip) => {
                pp.specularRoughnessTexture = ip
              }
            },
            metadata: ip
          }, AI, PI), (0, Rp.j)(pp, null, rc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularRoughnessAnisotropy" in pp,
              get: pp => pp.specularRoughnessAnisotropy,
              set: (pp, ip) => {
                pp.specularRoughnessAnisotropy = ip
              }
            },
            metadata: ip
          }, WI, yI), (0, Rp.j)(pp, null, Zc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularRoughnessAnisotropyTexture" in pp,
              get: pp => pp.specularRoughnessAnisotropyTexture,
              set: (pp, ip) => {
                pp.specularRoughnessAnisotropyTexture = ip
              }
            },
            metadata: ip
          }, UI, wI), (0, Rp.j)(pp, null, zc, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularIor" in pp,
              get: pp => pp.specularIor,
              set: (pp, ip) => {
                pp.specularIor = ip
              }
            },
            metadata: ip
          }, vI, tI), (0, Rp.j)(pp, null, sc, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionWeight" in pp,
              get: pp => pp.transmissionWeight,
              set: (pp, ip) => {
                pp.transmissionWeight = ip
              }
            },
            metadata: ip
          }, HI, dI), (0, Rp.j)(pp, null, Kc, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionWeightTexture" in pp,
              get: pp => pp.transmissionWeightTexture,
              set: (pp, ip) => {
                pp.transmissionWeightTexture = ip
              }
            },
            metadata: ip
          }, eI, uI), (0, Rp.j)(pp, null, Vc, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionColor" in pp,
              get: pp => pp.transmissionColor,
              set: (pp, ip) => {
                pp.transmissionColor = ip
              }
            },
            metadata: ip
          }, jI, kI), (0, Rp.j)(pp, null, pO, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionColorTexture" in pp,
              get: pp => pp.transmissionColorTexture,
              set: (pp, ip) => {
                pp.transmissionColorTexture = ip
              }
            },
            metadata: ip
          }, mI, RI), (0, Rp.j)(pp, null, iO, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionDepth" in pp,
              get: pp => pp.transmissionDepth,
              set: (pp, ip) => {
                pp.transmissionDepth = ip
              }
            },
            metadata: ip
          }, qI, MI), (0, Rp.j)(pp, null, cO, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionDepthTexture" in pp,
              get: pp => pp.transmissionDepthTexture,
              set: (pp, ip) => {
                pp.transmissionDepthTexture = ip
              }
            },
            metadata: ip
          }, CI, EI), (0, Rp.j)(pp, null, OO, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionScatter" in pp,
              get: pp => pp.transmissionScatter,
              set: (pp, ip) => {
                pp.transmissionScatter = ip
              }
            },
            metadata: ip
          }, XI, lI), (0, Rp.j)(pp, null, oO, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionScatterTexture" in pp,
              get: pp => pp.transmissionScatterTexture,
              set: (pp, ip) => {
                pp.transmissionScatterTexture = ip
              }
            },
            metadata: ip
          }, QI, JI), (0, Rp.j)(pp, null, IO, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionScatterAnisotropy" in pp,
              get: pp => pp.transmissionScatterAnisotropy,
              set: (pp, ip) => {
                pp.transmissionScatterAnisotropy = ip
              }
            },
            metadata: ip
          }, BI, NI), (0, Rp.j)(pp, null, SO, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionDispersionScale" in pp,
              get: pp => pp.transmissionDispersionScale,
              set: (pp, ip) => {
                pp.transmissionDispersionScale = ip
              }
            },
            metadata: ip
          }, TI, fI), (0, Rp.j)(pp, null, xO, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionDispersionScaleTexture" in pp,
              get: pp => pp.transmissionDispersionScaleTexture,
              set: (pp, ip) => {
                pp.transmissionDispersionScaleTexture = ip
              }
            },
            metadata: ip
          }, bI, hI), (0, Rp.j)(pp, null, LO, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: pp => "transmissionDispersionAbbeNumber" in pp,
              get: pp => pp.transmissionDispersionAbbeNumber,
              set: (pp, ip) => {
                pp.transmissionDispersionAbbeNumber = ip
              }
            },
            metadata: ip
          }, aI, nI), (0, Rp.j)(pp, null, YO, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceWeight" in pp,
              get: pp => pp.subsurfaceWeight,
              set: (pp, ip) => {
                pp.subsurfaceWeight = ip
              }
            },
            metadata: ip
          }, FI, gI), (0, Rp.j)(pp, null, DO, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceWeightTexture" in pp,
              get: pp => pp.subsurfaceWeightTexture,
              set: (pp, ip) => {
                pp.subsurfaceWeightTexture = ip
              }
            },
            metadata: ip
          }, GI, rI), (0, Rp.j)(pp, null, AO, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceColor" in pp,
              get: pp => pp.subsurfaceColor,
              set: (pp, ip) => {
                pp.subsurfaceColor = ip
              }
            },
            metadata: ip
          }, ZI, zI), (0, Rp.j)(pp, null, PO, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceColorTexture" in pp,
              get: pp => pp.subsurfaceColorTexture,
              set: (pp, ip) => {
                pp.subsurfaceColorTexture = ip
              }
            },
            metadata: ip
          }, sI, KI), (0, Rp.j)(pp, null, WO, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceRadius" in pp,
              get: pp => pp.subsurfaceRadius,
              set: (pp, ip) => {
                pp.subsurfaceRadius = ip
              }
            },
            metadata: ip
          }, VI, pS), (0, Rp.j)(pp, null, yO, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceRadiusScale" in pp,
              get: pp => pp.subsurfaceRadiusScale,
              set: (pp, ip) => {
                pp.subsurfaceRadiusScale = ip
              }
            },
            metadata: ip
          }, iS, cS), (0, Rp.j)(pp, null, UO, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceRadiusScaleTexture" in pp,
              get: pp => pp.subsurfaceRadiusScaleTexture,
              set: (pp, ip) => {
                pp.subsurfaceRadiusScaleTexture = ip
              }
            },
            metadata: ip
          }, OS, oS), (0, Rp.j)(pp, null, wO, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: pp => "subsurfaceScatterAnisotropy" in pp,
              get: pp => pp.subsurfaceScatterAnisotropy,
              set: (pp, ip) => {
                pp.subsurfaceScatterAnisotropy = ip
              }
            },
            metadata: ip
          }, IS, SS), (0, Rp.j)(pp, null, vO, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatWeight" in pp,
              get: pp => pp.coatWeight,
              set: (pp, ip) => {
                pp.coatWeight = ip
              }
            },
            metadata: ip
          }, xS, LS), (0, Rp.j)(pp, null, tO, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatWeightTexture" in pp,
              get: pp => pp.coatWeightTexture,
              set: (pp, ip) => {
                pp.coatWeightTexture = ip
              }
            },
            metadata: ip
          }, YS, DS), (0, Rp.j)(pp, null, HO, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatColor" in pp,
              get: pp => pp.coatColor,
              set: (pp, ip) => {
                pp.coatColor = ip
              }
            },
            metadata: ip
          }, AS, PS), (0, Rp.j)(pp, null, dO, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatColorTexture" in pp,
              get: pp => pp.coatColorTexture,
              set: (pp, ip) => {
                pp.coatColorTexture = ip
              }
            },
            metadata: ip
          }, WS, yS), (0, Rp.j)(pp, null, eO, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatRoughness" in pp,
              get: pp => pp.coatRoughness,
              set: (pp, ip) => {
                pp.coatRoughness = ip
              }
            },
            metadata: ip
          }, US, wS), (0, Rp.j)(pp, null, uO, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatRoughnessTexture" in pp,
              get: pp => pp.coatRoughnessTexture,
              set: (pp, ip) => {
                pp.coatRoughnessTexture = ip
              }
            },
            metadata: ip
          }, vS, tS), (0, Rp.j)(pp, null, jO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatRoughnessAnisotropy" in pp,
              get: pp => pp.coatRoughnessAnisotropy,
              set: (pp, ip) => {
                pp.coatRoughnessAnisotropy = ip
              }
            },
            metadata: ip
          }, HS, dS), (0, Rp.j)(pp, null, kO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatRoughnessAnisotropyTexture" in pp,
              get: pp => pp.coatRoughnessAnisotropyTexture,
              set: (pp, ip) => {
                pp.coatRoughnessAnisotropyTexture = ip
              }
            },
            metadata: ip
          }, eS, uS), (0, Rp.j)(pp, null, mO, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatIor" in pp,
              get: pp => pp.coatIor,
              set: (pp, ip) => {
                pp.coatIor = ip
              }
            },
            metadata: ip
          }, jS, kS), (0, Rp.j)(pp, null, RO, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatDarkening" in pp,
              get: pp => pp.coatDarkening,
              set: (pp, ip) => {
                pp.coatDarkening = ip
              }
            },
            metadata: ip
          }, mS, RS), (0, Rp.j)(pp, null, qO, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "coatDarkeningTexture" in pp,
              get: pp => pp.coatDarkeningTexture,
              set: (pp, ip) => {
                pp.coatDarkeningTexture = ip
              }
            },
            metadata: ip
          }, qS, MS), (0, Rp.j)(pp, null, MO, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzWeight" in pp,
              get: pp => pp.fuzzWeight,
              set: (pp, ip) => {
                pp.fuzzWeight = ip
              }
            },
            metadata: ip
          }, CS, ES), (0, Rp.j)(pp, null, CO, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzWeightTexture" in pp,
              get: pp => pp.fuzzWeightTexture,
              set: (pp, ip) => {
                pp.fuzzWeightTexture = ip
              }
            },
            metadata: ip
          }, XS, lS), (0, Rp.j)(pp, null, EO, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzColor" in pp,
              get: pp => pp.fuzzColor,
              set: (pp, ip) => {
                pp.fuzzColor = ip
              }
            },
            metadata: ip
          }, QS, JS), (0, Rp.j)(pp, null, XO, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzColorTexture" in pp,
              get: pp => pp.fuzzColorTexture,
              set: (pp, ip) => {
                pp.fuzzColorTexture = ip
              }
            },
            metadata: ip
          }, BS, NS), (0, Rp.j)(pp, null, lO, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzRoughness" in pp,
              get: pp => pp.fuzzRoughness,
              set: (pp, ip) => {
                pp.fuzzRoughness = ip
              }
            },
            metadata: ip
          }, TS, fS), (0, Rp.j)(pp, null, QO, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "fuzzRoughnessTexture" in pp,
              get: pp => pp.fuzzRoughnessTexture,
              set: (pp, ip) => {
                pp.fuzzRoughnessTexture = ip
              }
            },
            metadata: ip
          }, bS, hS), (0, Rp.j)(pp, null, JO, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryThinWalled" in pp,
              get: pp => pp.geometryThinWalled,
              set: (pp, ip) => {
                pp.geometryThinWalled = ip
              }
            },
            metadata: ip
          }, aS, nS), (0, Rp.j)(pp, null, BO, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryNormalTexture" in pp,
              get: pp => pp.geometryNormalTexture,
              set: (pp, ip) => {
                pp.geometryNormalTexture = ip
              }
            },
            metadata: ip
          }, FS, gS), (0, Rp.j)(pp, null, NO, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryTangent" in pp,
              get: pp => pp.geometryTangent,
              set: (pp, ip) => {
                pp.geometryTangent = ip
              }
            },
            metadata: ip
          }, GS, rS), (0, Rp.j)(pp, null, TO, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryTangentTexture" in pp,
              get: pp => pp.geometryTangentTexture,
              set: (pp, ip) => {
                pp.geometryTangentTexture = ip
              }
            },
            metadata: ip
          }, ZS, zS), (0, Rp.j)(pp, null, fO, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryCoatNormalTexture" in pp,
              get: pp => pp.geometryCoatNormalTexture,
              set: (pp, ip) => {
                pp.geometryCoatNormalTexture = ip
              }
            },
            metadata: ip
          }, sS, KS), (0, Rp.j)(pp, null, bO, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryCoatTangent" in pp,
              get: pp => pp.geometryCoatTangent,
              set: (pp, ip) => {
                pp.geometryCoatTangent = ip
              }
            },
            metadata: ip
          }, VS, px), (0, Rp.j)(pp, null, hO, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryCoatTangentTexture" in pp,
              get: pp => pp.geometryCoatTangentTexture,
              set: (pp, ip) => {
                pp.geometryCoatTangentTexture = ip
              }
            },
            metadata: ip
          }, ix, cx), (0, Rp.j)(pp, null, aO, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryOpacity" in pp,
              get: pp => pp.geometryOpacity,
              set: (pp, ip) => {
                pp.geometryOpacity = ip
              }
            },
            metadata: ip
          }, Ox, ox), (0, Rp.j)(pp, null, nO, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryOpacityTexture" in pp,
              get: pp => pp.geometryOpacityTexture,
              set: (pp, ip) => {
                pp.geometryOpacityTexture = ip
              }
            },
            metadata: ip
          }, Ix, Sx), (0, Rp.j)(pp, null, FO, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryThickness" in pp,
              get: pp => pp.geometryThickness,
              set: (pp, ip) => {
                pp.geometryThickness = ip
              }
            },
            metadata: ip
          }, xx, Lx), (0, Rp.j)(pp, null, gO, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "geometryThicknessTexture" in pp,
              get: pp => pp.geometryThicknessTexture,
              set: (pp, ip) => {
                pp.geometryThicknessTexture = ip
              }
            },
            metadata: ip
          }, Yx, Dx), (0, Rp.j)(pp, null, GO, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissionLuminance" in pp,
              get: pp => pp.emissionLuminance,
              set: (pp, ip) => {
                pp.emissionLuminance = ip
              }
            },
            metadata: ip
          }, Ax, Px), (0, Rp.j)(pp, null, rO, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissionColor" in pp,
              get: pp => pp.emissionColor,
              set: (pp, ip) => {
                pp.emissionColor = ip
              }
            },
            metadata: ip
          }, Wx, yx), (0, Rp.j)(pp, null, ZO, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissionColorTexture" in pp,
              get: pp => pp.emissionColorTexture,
              set: (pp, ip) => {
                pp.emissionColorTexture = ip
              }
            },
            metadata: ip
          }, Ux, wx), (0, Rp.j)(pp, null, zO, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmWeight" in pp,
              get: pp => pp.thinFilmWeight,
              set: (pp, ip) => {
                pp.thinFilmWeight = ip
              }
            },
            metadata: ip
          }, vx, tx), (0, Rp.j)(pp, null, sO, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmWeightTexture" in pp,
              get: pp => pp.thinFilmWeightTexture,
              set: (pp, ip) => {
                pp.thinFilmWeightTexture = ip
              }
            },
            metadata: ip
          }, Hx, dx), (0, Rp.j)(pp, null, KO, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmThickness" in pp,
              get: pp => pp.thinFilmThickness,
              set: (pp, ip) => {
                pp.thinFilmThickness = ip
              }
            },
            metadata: ip
          }, ex, ux), (0, Rp.j)(pp, null, VO, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmThicknessMin" in pp,
              get: pp => pp.thinFilmThicknessMin,
              set: (pp, ip) => {
                pp.thinFilmThicknessMin = ip
              }
            },
            metadata: ip
          }, jx, kx), (0, Rp.j)(pp, null, po, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmThicknessTexture" in pp,
              get: pp => pp.thinFilmThicknessTexture,
              set: (pp, ip) => {
                pp.thinFilmThicknessTexture = ip
              }
            },
            metadata: ip
          }, mx, Rx), (0, Rp.j)(pp, null, io, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: pp => "thinFilmIor" in pp,
              get: pp => pp.thinFilmIor,
              set: (pp, ip) => {
                pp.thinFilmIor = ip
              }
            },
            metadata: ip
          }, qx, Mx), (0, Rp.j)(pp, null, co, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "ambientOcclusionTexture" in pp,
              get: pp => pp.ambientOcclusionTexture,
              set: (pp, ip) => {
                pp.ambientOcclusionTexture = ip
              }
            },
            metadata: ip
          }, Cx, Ex), (0, Rp.j)(pp, null, Oo, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: pp => "directIntensity" in pp,
              get: pp => pp.directIntensity,
              set: (pp, ip) => {
                pp.directIntensity = ip
              }
            },
            metadata: ip
          }, Xx, lx), (0, Rp.j)(pp, null, oo, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: pp => "environmentIntensity" in pp,
              get: pp => pp.environmentIntensity,
              set: (pp, ip) => {
                pp.environmentIntensity = ip
              }
            },
            metadata: ip
          }, Qx, Jx), (0, Rp.j)(pp, null, Io, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "useSpecularWeightFromTextureAlpha" in pp,
              get: pp => pp.useSpecularWeightFromTextureAlpha,
              set: (pp, ip) => {
                pp.useSpecularWeightFromTextureAlpha = ip
              }
            },
            metadata: ip
          }, Bx, Nx), (0, Rp.j)(pp, null, So, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: pp => "forceAlphaTest" in pp,
              get: pp => pp.forceAlphaTest,
              set: (pp, ip) => {
                pp.forceAlphaTest = ip
              }
            },
            metadata: ip
          }, Tx, fx), (0, Rp.j)(pp, null, xo, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: pp => "alphaCutOff" in pp,
              get: pp => pp.alphaCutOff,
              set: (pp, ip) => {
                pp.alphaCutOff = ip
              }
            },
            metadata: ip
          }, bx, hx), (0, Rp.j)(pp, null, Lo, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: pp => "useAmbientOcclusionFromMetallicTextureRed" in pp,
              get: pp => pp.useAmbientOcclusionFromMetallicTextureRed,
              set: (pp, ip) => {
                pp.useAmbientOcclusionFromMetallicTextureRed = ip
              }
            },
            metadata: ip
          }, ax, nx), (0, Rp.j)(pp, null, Yo, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "useAmbientInGrayScale" in pp,
              get: pp => pp.useAmbientInGrayScale,
              set: (pp, ip) => {
                pp.useAmbientInGrayScale = ip
              }
            },
            metadata: ip
          }, Fx, gx), (0, Rp.j)(pp, null, Do, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: pp => "usePhysicalLightFalloff" in pp,
              get: pp => pp.usePhysicalLightFalloff
            },
            metadata: ip
          }, null, No), (0, Rp.j)(pp, null, Ao, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: pp => "useGLTFLightFalloff" in pp,
              get: pp => pp.useGLTFLightFalloff
            },
            metadata: ip
          }, null, No), (0, Rp.j)(pp, null, Po, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "useObjectSpaceNormalMap" in pp,
              get: pp => pp.useObjectSpaceNormalMap,
              set: (pp, ip) => {
                pp.useObjectSpaceNormalMap = ip
              }
            },
            metadata: ip
          }, Gx, rx), (0, Rp.j)(pp, null, Wo, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: pp => "useParallax" in pp,
              get: pp => pp.useParallax,
              set: (pp, ip) => {
                pp.useParallax = ip
              }
            },
            metadata: ip
          }, Zx, zx), (0, Rp.j)(pp, null, yo, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: pp => "useParallaxOcclusion" in pp,
              get: pp => pp.useParallaxOcclusion,
              set: (pp, ip) => {
                pp.useParallaxOcclusion = ip
              }
            },
            metadata: ip
          }, sx, Kx), (0, Rp.j)(pp, null, Uo, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: pp => "parallaxScaleBias" in pp,
              get: pp => pp.parallaxScaleBias,
              set: (pp, ip) => {
                pp.parallaxScaleBias = ip
              }
            },
            metadata: ip
          }, Vx, pL), (0, Rp.j)(pp, null, wo, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "disableLighting" in pp,
              get: pp => pp.disableLighting,
              set: (pp, ip) => {
                pp.disableLighting = ip
              }
            },
            metadata: ip
          }, iL, cL), (0, Rp.j)(pp, null, vo, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: pp => "forceIrradianceInFragment" in pp,
              get: pp => pp.forceIrradianceInFragment,
              set: (pp, ip) => {
                pp.forceIrradianceInFragment = ip
              }
            },
            metadata: ip
          }, OL, oL), (0, Rp.j)(pp, null, to, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: pp => "maxSimultaneousLights" in pp,
              get: pp => pp.maxSimultaneousLights,
              set: (pp, ip) => {
                pp.maxSimultaneousLights = ip
              }
            },
            metadata: ip
          }, IL, SL), (0, Rp.j)(pp, null, Ho, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: pp => "invertNormalMapX" in pp,
              get: pp => pp.invertNormalMapX,
              set: (pp, ip) => {
                pp.invertNormalMapX = ip
              }
            },
            metadata: ip
          }, xL, LL), (0, Rp.j)(pp, null, eo, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: pp => "invertNormalMapY" in pp,
              get: pp => pp.invertNormalMapY,
              set: (pp, ip) => {
                pp.invertNormalMapY = ip
              }
            },
            metadata: ip
          }, YL, DL), (0, Rp.j)(pp, null, uo, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "twoSidedLighting" in pp,
              get: pp => pp.twoSidedLighting,
              set: (pp, ip) => {
                pp.twoSidedLighting = ip
              }
            },
            metadata: ip
          }, AL, PL), (0, Rp.j)(pp, null, jo, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: pp => "useAlphaFresnel" in pp,
              get: pp => pp.useAlphaFresnel,
              set: (pp, ip) => {
                pp.useAlphaFresnel = ip
              }
            },
            metadata: ip
          }, WL, yL), (0, Rp.j)(pp, null, ko, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: pp => "useLinearAlphaFresnel" in pp,
              get: pp => pp.useLinearAlphaFresnel,
              set: (pp, ip) => {
                pp.useLinearAlphaFresnel = ip
              }
            },
            metadata: ip
          }, UL, wL), (0, Rp.j)(pp, null, mo, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "environmentBRDFTexture" in pp,
              get: pp => pp.environmentBRDFTexture,
              set: (pp, ip) => {
                pp.environmentBRDFTexture = ip
              }
            },
            metadata: ip
          }, vL, tL), (0, Rp.j)(pp, null, Ro, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: pp => "forceNormalForward" in pp,
              get: pp => pp.forceNormalForward,
              set: (pp, ip) => {
                pp.forceNormalForward = ip
              }
            },
            metadata: ip
          }, HL, dL), (0, Rp.j)(pp, null, qo, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: pp => "enableSpecularAntiAliasing" in pp,
              get: pp => pp.enableSpecularAntiAliasing,
              set: (pp, ip) => {
                pp.enableSpecularAntiAliasing = ip
              }
            },
            metadata: ip
          }, eL, uL), (0, Rp.j)(pp, null, Mo, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: pp => "useHorizonOcclusion" in pp,
              get: pp => pp.useHorizonOcclusion,
              set: (pp, ip) => {
                pp.useHorizonOcclusion = ip
              }
            },
            metadata: ip
          }, jL, kL), (0, Rp.j)(pp, null, Co, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: pp => "useRadianceOcclusion" in pp,
              get: pp => pp.useRadianceOcclusion,
              set: (pp, ip) => {
                pp.useRadianceOcclusion = ip
              }
            },
            metadata: ip
          }, mL, RL), (0, Rp.j)(pp, null, Eo, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: pp => "unlit" in pp,
              get: pp => pp.unlit,
              set: (pp, ip) => {
                pp.unlit = ip
              }
            },
            metadata: ip
          }, qL, ML), (0, Rp.j)(pp, null, Xo, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "applyDecalMapAfterDetailMap" in pp,
              get: pp => pp.applyDecalMapAfterDetailMap,
              set: (pp, ip) => {
                pp.applyDecalMapAfterDetailMap = ip
              }
            },
            metadata: ip
          }, CL, EL), (0, Rp.j)(pp, null, Qo, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "debugMode" in pp,
              get: pp => pp.debugMode,
              set: (pp, ip) => {
                pp.debugMode = ip
              }
            },
            metadata: ip
          }, XL, lL), (0, Rp.j)(pp, null, Jo, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: pp => "transparencyMode" in pp,
              get: pp => pp.transparencyMode
            },
            metadata: ip
          }, null, No), ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ip
          })
        })(), pp.SSS_QUALITY_LOW = 0, pp.SSS_QUALITY_MEDIUM = 1, pp.SSS_QUALITY_HIGH = 2, pp._noiseTextures = {}, pp.ForceGLSL = !1, pp._ShaderLoader = new yi.c((() => [Promise.all([cp.e(322), cp.e(385)]).then((() => cp(61831))), Promise.all([cp.e(327), cp.e(323), cp.e(384), cp.e(389)]).then((() => cp(61838)))]), (() => [Promise.all([cp.e(341), cp.e(343), cp.e(388)]).then((() => cp(61871))), Promise.all([cp.e(341), cp.e(344), cp.e(387), cp.e(390)]).then((() => cp(61881)))])), pp
      })(),
      cc = !1;
    cc || (cc = !0, (0, Zp.g)(), (0, Fi.g)("BABYLON.OpenPBRMaterial", ic));
    var Oc = cp(37349);
    class oc {
      constructor(pp) {
        this.name = Bi.e.NAME_PROCEDURALTEXTURE, this.pw = pp
      }
      register() {
        this.pw._beforeClearStage.registerStep(Bi.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.pw.proceduralTexturesEnabled) {
          Ri.i.StartPerformanceCounter("Procedural textures", this.pw.proceduralTextures.length > 0);
          for (let pp = 0; pp < this.pw.proceduralTextures.length; pp++) {
            const ip = this.pw.proceduralTextures[pp];
            ip._shouldRender() && ip.render()
          }
          Ri.i.EndPerformanceCounter("Procedural textures", this.pw.proceduralTextures.length > 0)
        }
      }
    }
    var Ic = cp(40509);
    let Sc = (() => {
      var pp;
      let ip, Op, op, Sp, xp, Lp = Ep.d,
        Yp = [],
        Dp = [],
        Ap = [],
        Pp = [],
        Wp = [],
        yp = [],
        wp = [],
        vp = [],
        tp = [];
      return pp = class extends Lp {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(pp, ip, cp, Op) {
          let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Op, !Ip), this.isEnabled = ((0, Rp.l)(this, Yp), (0, Rp.l)(this, Dp, !0)), this.autoClear = ((0, Rp.l)(this, Ap), (0, Rp.l)(this, Pp, !0)), this.onGenerated = (0, Rp.l)(this, Wp), this.onGeneratedObservable = new Oc.d, this.onBeforeGenerationObservable = new Oc.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Rp.l)(this, yp, void 0), this._drawWrapper = (0, Rp.l)(this, wp), this._textures = {}, this._size = (0, Rp.l)(this, vp, void 0), this._textureType = (0, Rp.l)(this, tp), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === op || op instanceof Ep.d ? (this._options = {}, this._fallbackTexture = op) : (this._options = op, this._fallbackTexture = op.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Lp = (Op = this.Gl() || Up.e.LastCreatedScene)._getComponent(Bi.e.NAME_PROCEDURALTEXTURE);
          Lp || (Lp = new oc(Op), Op.uOp(Lp)), this._options.skipSceneRegistration || Op.proceduralTextures.push(this), this._fullEngine = Op.gy(), this.name = pp, this.isRenderTarget = !0, this._size = ip, this._textureType = xp, this._generateMipMaps = Ip, this._drawWrapper = new Ic.e(this._fullEngine), this.setFragment(cp);
          const Hp = this._createRtWrapper(Sp, ip, Ip, xp);
          this._texture = Hp.texture;
          const dp = [];
          dp.push(1, 1), dp.push(-1, 1), dp.push(-1, -1), dp.push(1, -1), this._vertexBuffers[bp.j.PositionKind] = new bp.j(this._fullEngine, dp, bp.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(pp, ip, cp, Op) {
          return pp ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(ip, {
            generateMipMaps: cp,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Op,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(ip, {
            generateMipMaps: cp,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Op,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(pp) {
          this._drawWrapper.effect = pp
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((pp => {
            this._contentData = this.readPixels(0, 0, pp), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const pp = this._fullEngine,
            ip = [];
          ip.push(0), ip.push(1), ip.push(2), ip.push(0), ip.push(2), ip.push(3), this._indexBuffer = pp.createIndexBuffer(ip)
        }
        _rebuild() {
          const pp = this._vertexBuffers[bp.j.PositionKind];
          pp && pp._rebuild(), this._createIndexBuffer(), this.refreshRate === qi.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = qi.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(pp) {
          if (this.isReady()) return void pp(this);
          const ip = this.getEffect();
          ip && ip.executeWhenCompiled((() => {
            pp(this)
          }))
        }
        isReady() {
          const pp = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const ip = this._getDefines();
          if (this._drawWrapper.effect && ip === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Op = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== ip && (this._cachedDefines = ip, this._drawWrapper.effect = pp.createEffect(Op, [bp.j.PositionKind], this._uniforms, this._samplers, ip, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([cp.e(393).then((() => cp(61942))), this._options.extraInitializationsAsync()]) : await Promise.all([cp.e(394).then((() => cp(61949))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await cp.e(393).then((() => cp(61942))) : await cp.e(394).then((() => cp(61949)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(pp) {
          this._fragment = pp
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(pp) {
          this._refreshRate = pp, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(pp, ip) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const cp = this._texture.isCube;
          this._rtWrapper.dispose();
          const Op = this._createRtWrapper(cp, pp, ip, this._textureType);
          this._texture = Op.texture, this._size = pp, this._generateMipMaps = ip
        }
        _checkUniform(pp) {
          -1 === this._uniforms.indexOf(pp) && this._uniforms.push(pp)
        }
        setTexture(pp, ip) {
          return -1 === this._samplers.indexOf(pp) && this._samplers.push(pp), this._textures[pp] = ip, this
        }
        setFloat(pp, ip) {
          return this._checkUniform(pp), this._floats[pp] = ip, this
        }
        setInt(pp, ip) {
          return this._checkUniform(pp), this._ints[pp] = ip, this
        }
        setFloats(pp, ip) {
          return this._checkUniform(pp), this._floatsArrays[pp] = ip, this
        }
        setColor3(pp, ip) {
          return this._checkUniform(pp), this._colors3[pp] = ip, this
        }
        setColor4(pp, ip) {
          return this._checkUniform(pp), this._colors4[pp] = ip, this
        }
        setVector2(pp, ip) {
          return this._checkUniform(pp), this._vectors2[pp] = ip, this
        }
        setVector3(pp, ip) {
          return this._checkUniform(pp), this._vectors3[pp] = ip, this
        }
        setVector4(pp, ip) {
          return this._checkUniform(pp), this._vectors4[pp] = ip, this
        }
        setMatrix(pp, ip) {
          return this._checkUniform(pp), this._matrices[pp] = ip, this
        }
        render(pp) {
          const ip = this.Gl();
          if (!ip) return;
          const cp = this._fullEngine;
          if (cp.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), cp.setState(!1), !this.nodeMaterialSource) {
            for (const pp in this._textures) this._drawWrapper.effect.setTexture(pp, this._textures[pp]);
            for (const pp in this._ints) this._drawWrapper.effect.setInt(pp, this._ints[pp]);
            for (const pp in this._floats) this._drawWrapper.effect.setFloat(pp, this._floats[pp]);
            for (const pp in this._floatsArrays) this._drawWrapper.effect.setArray(pp, this._floatsArrays[pp]);
            for (const pp in this._colors3) this._drawWrapper.effect.setColor3(pp, this._colors3[pp]);
            for (const pp in this._colors4) {
              const ip = this._colors4[pp];
              this._drawWrapper.effect.setFloat4(pp, ip.r, ip.g, ip.b, ip.a)
            }
            for (const pp in this._vectors2) this._drawWrapper.effect.setVector2(pp, this._vectors2[pp]);
            for (const pp in this._vectors3) this._drawWrapper.effect.setVector3(pp, this._vectors3[pp]);
            for (const pp in this._vectors4) this._drawWrapper.effect.setVector4(pp, this._vectors4[pp]);
            for (const pp in this._matrices) this._drawWrapper.effect.setMatrix(pp, this._matrices[pp])
          }
          if (!this._texture || !this._rtWrapper) return;
          cp._enableGPUDebugMarkers && cp._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Op = cp.currentViewport;
          if (this.isCube)
            for (let op = 0; op < 6; op++) cp.bindFramebuffer(this._rtWrapper, op, void 0, void 0, !0), cp.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", op), this.autoClear && cp.clear(ip.clearColor, !0, !1, !1), cp.drawElementsType(Ip.b.TriangleFillMode, 0, 6), cp.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let pp = 1;
            this._rtWrapper.is3D ? pp = this._rtWrapper.depth : this._rtWrapper.is2DArray && (pp = this._rtWrapper.layers);
            for (let Op = 0; Op < pp; Op++) {
              if (cp.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Op), cp.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== pp ? Op / (pp - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Op);
                for (const pp in this._textures) this._drawWrapper.effect.setTexture(pp, this._textures[pp])
              }
              this.autoClear && cp.clear(ip.clearColor, !0, !1, !1), cp.drawElementsType(Ip.b.TriangleFillMode, 0, 6), cp.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Op && cp.setViewport(Op), this.isCube && cp.generateMipMapsForCubemap(this._texture, !0), cp._enableGPUDebugMarkers && cp._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const ip = this.getSize(),
            cp = new pp(this.name, ip.width, this._fragment, this.Gl(), this._fallbackTexture, this._generateMipMaps);
          return cp.hasAlpha = this.hasAlpha, cp.level = this.level, cp.coordinatesMode = this.coordinatesMode, cp
        }
        dispose() {
          const pp = this.Gl();
          if (!pp) return;
          const ip = pp.proceduralTextures.indexOf(this);
          ip >= 0 && pp.proceduralTextures.splice(ip, 1);
          const cp = this._vertexBuffers[bp.j.PositionKind];
          cp && (cp.dispose(), this._vertexBuffers[bp.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const cp = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, qp.K)()], Op = [(0, qp.K)()], op = [(0, qp.K)()], Sp = [(0, qp.K)()], xp = [(0, qp.K)()], (0, Rp.j)(pp, null, xp, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: pp => "refreshRate" in pp,
            get: pp => pp.refreshRate
          },
          metadata: cp
        }, null, Yp), (0, Rp.j)(null, null, ip, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: cp
        }, Dp, Ap), (0, Rp.j)(null, null, Op, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: pp => "autoClear" in pp,
            get: pp => pp.autoClear,
            set: (pp, ip) => {
              pp.autoClear = ip
            }
          },
          metadata: cp
        }, Pp, Wp), (0, Rp.j)(null, null, op, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: pp => "_generateMipMaps" in pp,
            get: pp => pp._generateMipMaps,
            set: (pp, ip) => {
              pp._generateMipMaps = ip
            }
          },
          metadata: cp
        }, yp, wp), (0, Rp.j)(null, null, Sp, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: pp => "_size" in pp,
            get: pp => pp._size,
            set: (pp, ip) => {
              pp._size = ip
            }
          },
          metadata: cp
        }, vp, tp), cp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cp
        })
      })(), pp
    })();

    function xc(pp) {
      return "texture" in pp
    }

    function Lc(pp) {
      return "value" in pp
    }
    async function Yc(pp, ip, Op) {
      const op = [ip.red, ip.green, ip.blue, ip.alpha],
        Ip = [],
        Sp = [];
      for (let cp = 0; cp < 4; cp++) {
        const pp = op[cp];
        if (pp)
          if (xc(pp)) {
            if (pp.sourceChannel < 0 || pp.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let ip = Ip.indexOf(pp.texture); - 1 === ip && (ip = Ip.length, Ip.push(pp.texture)), Sp[cp] = ip
          } else {
            if (!Lc(pp)) throw new Error("Invalid channel input configuration");
            if (pp.value < 0 || pp.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Sp[cp] = -1
          }
        else Sp[cp] = -1
      }
      let xp = ip.outputSize;
      if (!xp && Ip.length > 0) {
        let pp = 0;
        for (const ip of Ip) {
          const cp = ip.getSize(),
            Op = Math.max(cp.width, cp.height);
          Op > pp && (pp = Op, xp = cp.width === cp.height ? pp : cp)
        }
      }
      xp = xp || 512;
      const Lp = [],
        Yp = new Set;
      for (let cp = 0; cp < 4; cp++) {
        const pp = op[cp],
          ip = ["RED", "GREEN", "BLUE", "ALPHA"][cp];
        if (pp && xc(pp)) {
          Lp.push(`${ip}_FROM_TEXTURE`);
          const pp = Sp[cp];
          Yp.add(pp)
        }
      }
      Yp.forEach((pp => {
        Lp.push(`USE_TEXTURE${pp}`)
      }));
      const Dp = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Op.gy().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Op.gy().isWebGPU ? await Promise.all([cp.e(391).then((() => cp(61931)))]) : await Promise.all([cp.e(392).then((() => cp(61935)))])
          },
          skipSceneRegistration: !0
        },
        Ap = new Sc(pp, xp, "textureMerger", Op, Dp);
      Ap.refreshRate = -1, Ap.defines = Lp.length > 0 ? "#define " + Lp.join("\n#define ") + "\n" : "";
      for (let cp = 0; cp < Ip.length; cp++) Pp = Ip[cp], (Wp = Ap).uOffset = Pp.uOffset, Wp.vOffset = Pp.vOffset, Wp.uScale = Pp.uScale, Wp.vScale = Pp.vScale, Wp.uAng = Pp.uAng, Wp.vAng = Pp.vAng, Wp.wAng = Pp.wAng, Wp.uRotationCenter = Pp.uRotationCenter, Wp.vRotationCenter = Pp.vRotationCenter, Ap.setTexture(`inputTexture${cp}`, Ip[cp]);
      var Pp, Wp;
      for (let cp = 0; cp < 4; cp++) {
        const pp = op[cp],
          ip = ["red", "green", "blue", "alpha"][cp];
        if (pp && xc(pp)) {
          const Op = Sp[cp];
          Ap.setInt(`${ip}TextureIndex`, Op), Ap.setInt(`${ip}SourceChannel`, pp.sourceChannel)
        } else {
          let Op;
          Op = pp && Lc(pp) ? pp.value : 3 === cp ? 1 : 0, Ap.setFloat(`${ip}ConstantValue`, Op)
        }
      }
      return await new Promise(((pp, ip) => {
        Ap.executeWhenReady((() => {
          try {
            Ap.render(), pp(Ap)
          } catch (cp) {
            ip(cp instanceof Error ? cp : new Error(String(cp)))
          }
        }))
      }))
    }

    function Dc(pp, ip) {
      return {
        texture: pp,
        sourceChannel: ip
      }
    }

    function Ac(pp) {
      return {
        value: pp
      }
    }

    function Pc(pp, ip, cp, Op) {
      return {
        red: pp,
        green: ip,
        blue: cp,
        alpha: Op
      }
    }
    var Wc = cp(40028),
      yc = cp(40140),
      Uc = cp(37338),
      wc = cp(40188),
      vc = cp(40127);
    class tc {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Hc extends Wc.b {
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
        return !!this._options?.enableMultiview || this.eU > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tc;
        super(null), void 0 === pp.deterministicLockstep && (pp.deterministicLockstep = !1), void 0 !== pp.timeStep && (this._timeStep = pp.timeStep), void 0 === pp.lockstepMaxSteps && (pp.lockstepMaxSteps = 4), this._options = pp, Uc.e.SetMatrixPrecision(!!pp.useHighPrecisionMatrix), this._caps = {
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
        }, pp.enableMultiview && (this._caps.multiview = {
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
        }, pp.renderingCanvas && (this._renderingCanvas = pp.renderingCanvas), Mp.e.Log(`Babylon.js v${Wc.b.Version} - Null engine`);
        const ip = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (ip.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (ip.Blob = function() {})
      }
      createVertexBuffer(pp) {
        const ip = new yc.c;
        return ip.references = 1, ip
      }
      createIndexBuffer(pp) {
        const ip = new yc.c;
        return ip.references = 1, ip
      }
      clear(pp, ip, cp) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(pp, ip, cp) {
        this._cachedViewport = pp
      }
      createUniformBuffer(pp) {
        const ip = new yc.c;
        return ip.references = 1, ip.TA = pp instanceof Array ? pp.length * Float32Array.BYTES_PER_ELEMENT : pp.byteLength, ip
      }
      createDynamicUniformBuffer(pp) {
        return this.createUniformBuffer(pp)
      }
      updateUniformBuffer(pp, ip, cp, Op) {}
      bindUniformBufferBase(pp, ip, cp) {}
      bindUniformBlock(pp, ip, cp) {}
      createShaderProgram(pp, ip, cp, Op, op) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(pp, ip) {
        return []
      }
      getAttributes(pp, ip) {
        return []
      }
      bindSamplers(pp) {
        this._currentEffect = null
      }
      enableEffect(pp) {
        pp = null !== pp && (0, vc.e)(pp) ? pp.effect : pp, this._currentEffect = pp, pp && (pp.onBind && pp.onBind(pp), pp._onBindObservable && pp._onBindObservable.notifyObservers(pp))
      }
      setStateCullFaceType(pp, ip) {}
      setState(pp) {}
      setIntArray(pp, ip) {
        return !0
      }
      setIntArray2(pp, ip) {
        return !0
      }
      setIntArray3(pp, ip) {
        return !0
      }
      setIntArray4(pp, ip) {
        return !0
      }
      setFloatArray(pp, ip) {
        return !0
      }
      setFloatArray2(pp, ip) {
        return !0
      }
      setFloatArray3(pp, ip) {
        return !0
      }
      setFloatArray4(pp, ip) {
        return !0
      }
      setArray(pp, ip) {
        return !0
      }
      setArray2(pp, ip) {
        return !0
      }
      setArray3(pp, ip) {
        return !0
      }
      setArray4(pp, ip) {
        return !0
      }
      setMatrices(pp, ip) {
        return !0
      }
      setMatrix3x3(pp, ip) {
        return !0
      }
      setMatrix2x2(pp, ip) {
        return !0
      }
      setFloat(pp, ip) {
        return !0
      }
      setFloat2(pp, ip, cp) {
        return !0
      }
      setFloat3(pp, ip, cp, Op) {
        return !0
      }
      setBool(pp, ip) {
        return !0
      }
      setFloat4(pp, ip, cp, Op, op) {
        return !0
      }
      setAlphaMode(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[cp] !== pp && (this.alphaState.setAlphaBlend(0 !== pp, 0), ip || this.setDepthWrite(0 === pp), this._alphaMode[cp] = pp)
      }
      bindBuffers(pp, ip, cp) {}
      wipeCaches(pp) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, pp && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(pp, ip, cp, Op) {}
      drawElementsType(pp, ip, cp, Op) {}
      drawArraysType(pp, ip, cp, Op) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(pp) {}
      createTexture(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Sp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          xp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Lp = new Mi.b(this, 1),
          Yp = String(pp);
        return Lp.url = Yp, Lp.generateMipMaps = !ip, Lp.samplingMode = op, Lp.invertY = cp, Lp.baseWidth = this._options.textureSize, Lp.baseHeight = this._options.textureSize, Lp.width = this._options.textureSize, Lp.height = this._options.textureSize, xp && (Lp.format = xp), Sp && (Lp._buffer = Sp), Lp.isReady = !0, Ip && setTimeout((() => {
          Ip(Lp)
        })), this._internalTexturesCache.push(Lp), Lp
      }
      _createHardwareRenderTargetWrapper(pp, ip, cp) {
        const Op = new wc.d(pp, ip, cp, this);
        return this._renderTargetWrapperCache.push(Op), Op
      }
      createRenderTargetTexture(pp, ip) {
        const cp = this._createHardwareRenderTargetWrapper(!1, !1, pp),
          Op = {};
        void 0 !== ip && "object" === typeof ip ? (Op.generateMipMaps = ip.generateMipMaps, Op.generateDepthBuffer = void 0 === ip.generateDepthBuffer || ip.generateDepthBuffer, Op.generateStencilBuffer = Op.generateDepthBuffer && ip.generateStencilBuffer, Op.type = void 0 === ip.type ? 0 : ip.type, Op.samplingMode = void 0 === ip.samplingMode ? 3 : ip.samplingMode) : (Op.generateMipMaps = ip, Op.generateDepthBuffer = !0, Op.generateStencilBuffer = !1, Op.type = 0, Op.samplingMode = 3);
        const op = new Mi.b(this, 5);
        cp.setTexture(op);
        const Ip = pp.width || pp,
          Sp = pp.height || pp;
        return cp._generateDepthBuffer = Op.generateDepthBuffer, cp._generateStencilBuffer = !!Op.generateStencilBuffer, op.baseWidth = Ip, op.baseHeight = Sp, op.width = Ip, op.height = Sp, op.isReady = !0, op.samples = 1, op.generateMipMaps = !!Op.generateMipMaps, op.samplingMode = Op.samplingMode, op.type = Op.type, this._internalTexturesCache.push(op), cp
      }
      createMultiviewRenderTargetTexture(pp, ip) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const cp = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: pp,
            height: ip
          }),
          Op = new Mi.b(this, 5, !0);
        return Op.baseWidth = pp, Op.baseHeight = ip, Op.width = pp, Op.height = ip, Op.isMultiview = !0, Op.isReady = !0, Op.format = 5, Op.samples = 1, cp.setTextures(Op), cp
      }
      bindMultiviewFramebuffer(pp) {
        this.bindFramebuffer(pp, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(pp, ip) {
        const cp = this._createHardwareRenderTargetWrapper(!1, !0, pp),
          Op = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...ip
          };
        Op.generateStencilBuffer = Op.generateDepthBuffer && Op.generateStencilBuffer, (1 !== Op.type || this._caps.textureFloatLinearFiltering) && (2 !== Op.type || this._caps.textureHalfFloatLinearFiltering) || (Op.samplingMode = 1), cp._generateDepthBuffer = Op.generateDepthBuffer, cp._generateStencilBuffer = !!Op.generateStencilBuffer;
        const op = new Mi.b(this, 5);
        return op.baseWidth = pp, op.baseHeight = pp, op.width = pp, op.height = pp, op.isReady = !0, op.isCube = !0, op.samples = 1, op.generateMipMaps = !!Op.generateMipMaps, op.samplingMode = Op.samplingMode, op.type = Op.type, this._internalTexturesCache.push(op), cp
      }
      updateTextureSamplingMode(pp, ip) {
        ip.samplingMode = pp
      }
      createRawTexture(pp, ip, cp, Op, op, Ip, Sp) {
        let xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Yp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Dp = new Mi.b(this, 3);
        return Dp.baseWidth = ip, Dp.baseHeight = cp, Dp.width = ip, Dp.height = cp, Dp.format = Op, Dp.generateMipMaps = op, Dp.samplingMode = Sp, Dp.invertY = Ip, Dp._compression = xp, Dp.type = Lp, Dp._useSRGBBuffer = Yp, this._doNotHandleContextLost || (Dp._bufferView = pp), Dp
      }
      updateRawTexture(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        pp && (pp._bufferView = ip, pp.format = cp, pp.invertY = Op, pp._compression = op, pp.type = Ip, pp._useSRGBBuffer = Sp)
      }
      bindFramebuffer(pp, ip, cp, Op, op) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = pp, this._currentFramebuffer = null, this._cachedViewport && !op && this.setViewport(this._cachedViewport, cp, Op)
      }
      unBindFramebuffer(pp) {
        let ip = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, ip && ip(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(pp) {
        const ip = new yc.c;
        return ip.references = 1, ip.TA = 1, ip
      }
      updateDynamicTexture(pp, ip, cp) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(pp) {}
      updateDynamicIndexBuffer(pp, ip) {}
      updateDynamicVertexBuffer(pp, ip, cp, Op) {}
      _bindTextureDirectly(pp, ip) {
        return this._boundTexturesCache[this._activeChannel] !== ip && (this._boundTexturesCache[this._activeChannel] = ip, !0)
      }
      _bindTexture(pp, ip) {
        pp < 0 || this._bindTextureDirectly(0, ip)
      }
      _deleteBuffer(pp) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(pp) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(pp, ip, cp, Op, op) {}
      _uploadDataToTextureDirectly(pp, ip) {}
      _uploadArrayBufferViewToTexture(pp, ip) {}
      _uploadImageToTexture(pp, ip) {}
    }
    cp(40248), cp(40278), cp(40245);
    async function dc(pp) {
      const ip = pp.getInternalTexture();
      if (!ip || 1 !== ip.source) return null;
      if (ip.invertY) {
        const ip = pp.Gl()?.gy();
        if (!(ip instanceof Hc)) return null
      }
      const cp = ip._buffer;
      let Op, Ip = pp.mimeType;
      try {
        cp ? ArrayBuffer.isView(cp) ? Op = cp.buffer.slice(cp.byteOffset, cp.byteOffset + cp.byteLength) : cp instanceof ArrayBuffer ? Op = cp : cp instanceof Blob ? (Op = await cp.arrayBuffer(), Ip = cp.type || Ip) : "string" === typeof cp ? (Op = await op.Tools.LoadFileAsync(cp), Ip = (0, Lp.b)(cp) || Ip) : "undefined" !== typeof HTMLImageElement && cp instanceof HTMLImageElement && (Op = await op.Tools.LoadFileAsync(cp.src), Ip = (0, Lp.b)(cp.src) || Ip) : (Op = await op.Tools.LoadFileAsync(ip.url), Ip = (0, Lp.b)(ip.url) || Ip)
      } catch {
        return null
      }
      if (Op && !Ip && ip.url) {
        const pp = ip.url.match(/^data:([^;,]+)/);
        Ip = pp ? pp[1] : (0, Lp.b)(ip.url)
      }
      return Op && Ip ? {
        data: Op,
        mimeType: Ip
      } : null
    }
    const ec = 1e-6,
      uc = new wp.Color3(.04, .04, .04),
      jc = 1024,
      kc = wp.Color3.White(),
      mc = wp.Color3.BlackReadOnly;

    function Rc(pp) {
      switch (pp) {
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

    function qc(pp, ip, cp) {
      if (ip < uc.r) return 0;
      const Op = uc.r,
        op = pp * cp / (1 - uc.r) + ip - 2 * uc.r,
        Ip = op * op - 4 * Op * (uc.r - ip);
      return Hp.Clamp((-op + Math.sqrt(Ip)) / (2 * Op), 0, 1)
    }

    function Mc(pp) {
      const ip = pp.diffuseColor.toLinearSpace(pp.Gl().gy().useExactSrgbConversions).scale(.5),
        cp = pp.alpha,
        Op = function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fp.l(0, 1),
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fp.l(0, .1),
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fp.l(0, .1),
            op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fp.l(1300, .1);
          return function(pp, ip, cp, Op, op) {
            return (1 - pp) * (1 - pp) * (1 - pp) * ip + 3 * (1 - pp) * (1 - pp) * pp * cp + 3 * (1 - pp) * pp * pp * Op + pp * pp * pp * op
          }(Math.pow(pp / op.x, .333333), ip.y, cp.y, Op.y, op.y)
        }(Hp.Clamp(pp.specularPower, 0, jc));
      return {
        baseColorFactor: [ip.r, ip.g, ip.b, cp],
        metallicFactor: 0,
        roughnessFactor: Op
      }
    }

    function Cc(pp, ip) {
      ip.needAlphaBlending() ? pp.alphaMode = "BLEND" : ip.needAlphaTesting() && (pp.alphaMode = "MASK", pp.alphaCutoff = ip.alphaCutOff)
    }

    function Ec(pp, ip, cp) {
      const Op = new Uint8Array(pp * ip * 4);
      for (let op = 0; op < Op.length; op += 4) Op[op] = Op[op + 1] = Op[op + 2] = Op[op + 3] = 255;
      return jp.b.CreateRGBATexture(Op, pp, ip, cp)
    }

    function Xc(pp) {
      if (pp instanceof Uint8Array) {
        const ip = pp.length,
          cp = new Float32Array(pp.length);
        for (let Op = 0; Op < ip; ++Op) cp[Op] = pp[Op] / 255;
        return cp
      }
      if (pp instanceof Float32Array) return pp;
      throw new Error("Unsupported pixel format!")
    }
    class lc {
      constructor(pp) {
        this._exporter = pp, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(pp) {
        return pp ? this._textureMap.get(pp.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(pp, ip) {
        const cp = Mc(pp),
          Op = {
            name: pp.name
          };
        if (null == pp.backFaceCulling || pp.backFaceCulling || (pp.twoSidedLighting || op.Tools.Warn(pp.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Op.doubleSided = !0), ip) {
          const ip = [],
            op = pp.diffuseTexture;
          op && ip.push(this.exportTextureAsync(op).then((pp => {
            pp && (cp.baseColorTexture = pp)
          })));
          const Ip = pp.bumpTexture;
          Ip && ip.push(this.exportTextureAsync(Ip).then((pp => {
            pp && (Op.normalTexture = pp, 1 !== Ip.level && (Op.normalTexture.scale = Ip.level))
          })));
          const Sp = pp.emissiveTexture;
          Sp && (Op.emissiveFactor = [1, 1, 1], ip.push(this.exportTextureAsync(Sp).then((pp => {
            pp && (Op.emissiveTexture = pp)
          }))));
          const xp = pp.ambientTexture;
          xp && ip.push(this.exportTextureAsync(xp).then((pp => {
            if (pp) {
              const ip = {
                index: pp.index
              };
              Op.occlusionTexture = ip
            }
          }))), ip.length > 0 && (this._exporter._materialNeedsUVsSet.add(pp), await Promise.all(ip))
        }(pp.alpha < 1 || pp.opacityTexture) && (pp.alphaMode === kp.d.ALPHA_COMBINE ? Op.alphaMode = "BLEND" : op.Tools.Warn(pp.name + ": glTF 2.0 does not support alpha mode: " + pp.alphaMode.toString())), pp.emissiveColor && !pp.emissiveColor.equalsWithEpsilon(mc, ec) && (Op.emissiveFactor = pp.emissiveColor.BOp()), Op.pbrMetallicRoughness = cp, Cc(Op, pp), await this._finishMaterialAsync(Op, pp);
        const Ip = this._exporter._materials;
        return Ip.push(Op), Ip.length - 1
      }
      async _finishMaterialAsync(pp, ip) {
        const cp = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", pp, ip),
          Op = [];
        for (const op of cp) Op.push(this.exportTextureAsync(op));
        await Promise.all(Op), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", pp, ip)
      }
      _resizeTexturesToSameDimensions(pp, ip, cp) {
        const Op = pp ? pp.getSize() : {
            width: 0,
            height: 0
          },
          op = ip ? ip.getSize() : {
            width: 0,
            height: 0
          };
        let Ip, Sp;
        return Op.width < op.width ? (Ip = pp && pp instanceof ep.d ? dp.h.CreateResizedCopy(pp, op.width, op.height, !0) : Ec(op.width, op.height, cp), Sp = ip) : Op.width > op.width ? (Sp = ip && ip instanceof ep.d ? dp.h.CreateResizedCopy(ip, Op.width, Op.height, !0) : Ec(Op.width, Op.height, cp), Ip = pp) : (Ip = pp, Sp = ip), {
          texture1: Ip,
          texture2: Sp
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(pp, ip, cp) {
        const Op = new Array;
        if (!pp && !ip) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const op = pp ? pp.Gl() : ip ? ip.Gl() : null;
        if (op) {
          const Ip = this._resizeTexturesToSameDimensions(pp, ip, op),
            Sp = Ip.texture1?.getSize();
          let xp, Lp;
          const Yp = Sp.width,
            Dp = Sp.height,
            Ap = await Ip.texture1.readPixels(),
            Pp = await Ip.texture2.readPixels();
          if (!Ap) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (xp = Xc(Ap), !Pp) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Lp = Xc(Pp);
          const Wp = Lp.byteLength,
            yp = new Uint8Array(Wp),
            Up = new Uint8Array(Wp),
            vp = 4,
            tp = new wp.Color3(0, 0, 0);
          let Hp = 0,
            dp = 0;
          for (let pp = 0; pp < Dp; ++pp)
            for (let ip = 0; ip < Yp; ++ip) {
              const Op = (Yp * pp + ip) * vp,
                Sp = {
                  diffuseColor: new wp.Color3(xp[Op], xp[Op + 1], xp[Op + 2]).toLinearSpace(op.gy().useExactSrgbConversions).multiply(cp.diffuseColor),
                  specularColor: new wp.Color3(Lp[Op], Lp[Op + 1], Lp[Op + 2]).toLinearSpace(op.gy().useExactSrgbConversions).multiply(cp.specularColor),
                  glossiness: Lp[Op + 3] * cp.glossiness
                },
                Dp = this._convertSpecularGlossinessToMetallicRoughness(Sp);
              tp.r = Math.max(tp.r, Dp.baseColor.r), tp.g = Math.max(tp.g, Dp.baseColor.g), tp.b = Math.max(tp.b, Dp.baseColor.b), Hp = Math.max(Hp, Dp.metallic), dp = Math.max(dp, Dp.roughness), Up[Op] = 255 * Dp.baseColor.r, Up[Op + 1] = 255 * Dp.baseColor.g, Up[Op + 2] = 255 * Dp.baseColor.b, Up[Op + 3] = Ip.texture1.hasAlpha ? 255 * xp[Op + 3] : 255, yp[Op] = 0, yp[Op + 1] = 255 * Dp.roughness, yp[Op + 2] = 255 * Dp.metallic, yp[Op + 3] = 255
            }
          const ep = {
            baseColor: tp,
            metallic: Hp,
            roughness: dp
          };
          let jp = !1,
            kp = !1;
          for (let pp = 0; pp < Dp; ++pp)
            for (let ip = 0; ip < Yp; ++ip) {
              const cp = (Yp * pp + ip) * vp;
              Up[cp] /= ep.baseColor.r > ec ? ep.baseColor.r : 1, Up[cp + 1] /= ep.baseColor.g > ec ? ep.baseColor.g : 1, Up[cp + 2] /= ep.baseColor.b > ec ? ep.baseColor.b : 1;
              const Op = wp.Color3.FromInts(Up[cp], Up[cp + 1], Up[cp + 2]).toGammaSpace(op.gy().useExactSrgbConversions);
              Up[cp] = 255 * Op.r, Up[cp + 1] = 255 * Op.g, Up[cp + 2] = 255 * Op.b, Op.equalsWithEpsilon(kc, ec) || (kp = !0), yp[cp + 1] /= ep.roughness > ec ? ep.roughness : 1, yp[cp + 2] /= ep.metallic > ec ? ep.metallic : 1;
              wp.Color3.FromInts(255, yp[cp + 1], yp[cp + 2]).equalsWithEpsilon(kc, ec) || (jp = !0)
            }
          return jp && Op.push((0, mp.EncodeImageAsync)(yp, Yp, Dp).then((pp => {
            ep.metallicRoughnessTextureData = pp
          }))), kp && Op.push((0, mp.EncodeImageAsync)(Up, Yp, Dp).then((pp => {
            ep.baseColorTextureData = pp
          }))), await Promise.all(Op).then((() => ep))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(pp) {
        const ip = this._getPerceivedBrightness(pp.diffuseColor),
          cp = this._getPerceivedBrightness(pp.specularColor),
          Op = 1 - this._getMaxComponent(pp.specularColor),
          op = qc(ip, cp, Op),
          Ip = pp.diffuseColor.scale(Op / (1 - uc.r) / Math.max(1 - op, ec)),
          Sp = pp.specularColor.subtract(uc.scale(1 - op)).scale(1 / Math.max(op, ec));
        let xp = wp.Color3.Lerp(Ip, Sp, op * op);
        xp = xp.clampToRef(0, 1, xp);
        return {
          baseColor: xp,
          metallic: op,
          roughness: 1 - pp.glossiness
        }
      }
      _getPerceivedBrightness(pp) {
        return Math.sqrt(.299 * pp.r * pp.r + .587 * pp.g * pp.g + .114 * pp.b * pp.b)
      }
      _getMaxComponent(pp) {
        return Math.max(pp.r, Math.max(pp.g, pp.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = [],
          Dp = {
            baseColor: pp,
            metallic: ip,
            roughness: cp
          };
        if (Lp)
          if (Sp instanceof ic) {
            if (Sp.geometryOpacityTexture) {
              const pp = Op && Op.getInternalTexture() ? Op.getInternalTexture().uniqueId : 0,
                ip = Sp.geometryOpacityTexture && Sp.geometryOpacityTexture.getInternalTexture() ? Sp.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                cp = Number(`${pp}${ip}`),
                op = this._textureMap.get(cp);
              op ? xp.baseColorTexture = op : Yp.push(Yc("baseColorOpacityTexture", Pc(Op ? Dc(Op, 0) : Ac(1), Op ? Dc(Op, 1) : Ac(1), Op ? Dc(Op, 2) : Ac(1), Dc(Sp.geometryOpacityTexture, 0)), Sp.Gl()).then((async pp => {
                const ip = await this.exportTextureAsync(pp, cp);
                ip && (xp.baseColorTexture = ip)
              })))
            } else Op && Yp.push(this.exportTextureAsync(Op).then((pp => {
              pp && (xp.baseColorTexture = pp)
            })));
            if (Sp._useMetallicFromMetallicTextureBlue && op) Yp.push(this.exportTextureAsync(op).then((pp => {
              pp && (xp.metallicRoughnessTexture = pp)
            })));
            else if (Ip || op) {
              const pp = op && op.getInternalTexture() ? op.getInternalTexture().uniqueId : 0,
                ip = Ip && Ip.getInternalTexture() ? Ip.getInternalTexture().uniqueId : 0,
                cp = Number(`${pp}${ip}`),
                Op = this._textureMap.get(cp);
              Op ? xp.metallicRoughnessTexture = Op : Yp.push(Yc("MetalRoughTexture", Pc(Sp.ambientOcclusionTexture ? Dc(Sp.ambientOcclusionTexture, 0) : Ac(1), Ip ? Dc(Ip, 0) : Ac(1), op ? Dc(op, 0) : Ac(1)), Sp.Gl()).then((async pp => {
                const ip = await this.exportTextureAsync(pp, cp);
                ip && (xp.metallicRoughnessTexture = ip)
              })))
            }
          } else Op && Yp.push(this.exportTextureAsync(Op).then((pp => {
            pp && (xp.baseColorTexture = pp)
          }))), op && Yp.push(this.exportTextureAsync(op).then((pp => {
            pp && (xp.metallicRoughnessTexture = pp)
          })));
        return Yp.length > 0 && (this._exporter._materialNeedsUVsSet.add(Sp), await Promise.all(Yp)), Dp
      }
      _getTextureSampler(pp) {
        const ip = {};
        if (!pp || !(pp instanceof ep.d)) return ip;
        const cp = this._getGLTFTextureWrapMode(pp.wrapU);
        10497 !== cp && (ip.wrapS = cp);
        const Op = this._getGLTFTextureWrapMode(pp.wrapV);
        switch (10497 !== Op && (ip.wrapT = Op), pp.samplingMode) {
          case ep.d.LINEAR_LINEAR:
            ip.magFilter = 9729, ip.minFilter = 9729;
            break;
          case ep.d.LINEAR_NEAREST:
            ip.magFilter = 9729, ip.minFilter = 9728;
            break;
          case ep.d.NEAREST_LINEAR:
            ip.magFilter = 9728, ip.minFilter = 9729;
            break;
          case ep.d.NEAREST_LINEAR_MIPLINEAR:
            ip.magFilter = 9728, ip.minFilter = 9987;
            break;
          case ep.d.NEAREST_NEAREST:
            ip.magFilter = 9728, ip.minFilter = 9728;
            break;
          case ep.d.NEAREST_LINEAR_MIPNEAREST:
            ip.magFilter = 9728, ip.minFilter = 9985;
            break;
          case ep.d.LINEAR_NEAREST_MIPNEAREST:
            ip.magFilter = 9729, ip.minFilter = 9984;
            break;
          case ep.d.LINEAR_NEAREST_MIPLINEAR:
            ip.magFilter = 9729, ip.minFilter = 9986;
            break;
          case ep.d.NEAREST_NEAREST_MIPLINEAR:
            ip.magFilter = 9728, ip.minFilter = 9986;
            break;
          case ep.d.LINEAR_LINEAR_MIPLINEAR:
            ip.magFilter = 9729, ip.minFilter = 9987;
            break;
          case ep.d.LINEAR_LINEAR_MIPNEAREST:
            ip.magFilter = 9729, ip.minFilter = 9985;
            break;
          case ep.d.NEAREST_NEAREST_MIPNEAREST:
            ip.magFilter = 9728, ip.minFilter = 9984
        }
        return ip
      }
      _getGLTFTextureWrapMode(pp) {
        switch (pp) {
          case ep.d.WRAP_ADDRESSMODE:
            return 10497;
          case ep.d.CLAMP_ADDRESSMODE:
            return 33071;
          case ep.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return op.Tools.Error(`Unsupported Texture Wrap Mode ${pp}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(pp, ip, cp) {
        const Op = {
            diffuseColor: pp._albedoColor,
            specularColor: pp._reflectivityColor,
            glossiness: pp._microSurface
          },
          op = pp._albedoTexture,
          Ip = pp._reflectivityTexture,
          Sp = pp._useMicroSurfaceFromReflectivityMapAlpha;
        if (Ip && !Sp) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((op || Ip) && cp) {
          this._exporter._materialNeedsUVsSet.add(pp);
          const cp = this._exportTextureSampler(op || Ip),
            Sp = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(op, Ip, Op),
            xp = this._exporter._textures;
          if (Sp.baseColorTextureData) {
            const pp = await this._exportImageAsync(`baseColor${xp.length}`, Sp.baseColorTextureData);
            ip.baseColorTexture = this._exportTextureInfo(pp, cp, op?.coordinatesIndex)
          }
          if (Sp.metallicRoughnessTextureData) {
            const pp = await this._exportImageAsync(`metallicRoughness${xp.length}`, Sp.metallicRoughnessTextureData);
            ip.metallicRoughnessTexture = this._exportTextureInfo(pp, cp, Ip?.coordinatesIndex)
          }
          return Sp
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Op)
      }
      async exportPBRMaterialAsync(pp, ip) {
        const cp = {},
          Op = {
            name: pp.name
          },
          op = pp.isMetallicWorkflow();
        if (op) {
          const ip = pp._albedoColor,
            Op = pp.alpha;
          ip && (cp.baseColorFactor = [ip.r, ip.g, ip.b, Op])
        }
        const Ip = op ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(pp._albedoColor, pp._metallic, pp._roughness, pp._albedoTexture, pp._metallicTexture, pp._metallicTexture, pp, cp, ip) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(pp, cp, ip);
        await this._setMetallicRoughnessPbrMaterialAsync(Ip, pp, Op, cp, ip), await this._finishMaterialAsync(Op, pp);
        const Sp = this._exporter._materials;
        return Sp.push(Op), Sp.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(pp, ip, cp, Op, Ip) {
        if (Cc(cp, ip), pp.baseColor.equalsWithEpsilon(kc, ec) && Hp.WithinEpsilon(ip.alpha, 1, ec) || (Op.baseColorFactor = [pp.baseColor.r, pp.baseColor.g, pp.baseColor.b, ip.alpha]), null != pp.metallic && 1 !== pp.metallic && (Op.metallicFactor = pp.metallic), null != pp.roughness && 1 !== pp.roughness && (Op.roughnessFactor = pp.roughness), null == ip.backFaceCulling || ip.backFaceCulling || (ip._twoSidedLighting || op.Tools.Warn(ip.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), cp.doubleSided = !0), Ip) {
          const pp = [],
            op = ip instanceof ki ? ip._bumpTexture : ip.geometryNormalTexture;
          op && pp.push(this.exportTextureAsync(op).then((pp => {
            pp && (cp.normalTexture = pp, 1 !== op.level && (cp.normalTexture.scale = op.level))
          })));
          const Ip = ip instanceof ki ? ip._ambientTexture : ip.ambientOcclusionTexture;
          Ip && pp.push(new Promise((async pp => {
            if (ip instanceof ic && Op.metallicRoughnessTexture) {
              const ip = this._exportTextureSampler(Ip),
                cp = this._exporter._textures[Op.metallicRoughnessTexture.index].source,
                op = this._exportTextureInfo(cp, ip, Ip.coordinatesIndex);
              return this._textureMap.set(Ip.uniqueId, op), this._exporter._extensionsPostExportTextures("exporter", op, Ip), pp(op)
            }
            return pp(await this.exportTextureAsync(Ip))
          })).then((async pp => {
            if (pp) {
              const Op = {
                index: pp.index,
                texCoord: pp.texCoord,
                extensions: pp.extensions
              };
              cp.occlusionTexture = Op, Op.strength = ip instanceof ki ? ip._ambientTextureStrength : ip.ambientOcclusionTexture.level
            }
          })));
          const Sp = ip instanceof ki ? ip._emissiveTexture : ip.emissionColorTexture;
          Sp && pp.push(this.exportTextureAsync(Sp).then((pp => {
            pp && (cp.emissiveTexture = pp)
          }))), pp.length > 0 && (this._exporter._materialNeedsUVsSet.add(ip), await Promise.all(pp))
        }
        const Sp = ip instanceof ki ? ip._emissiveColor : ip.emissionColor;
        Sp.equalsWithEpsilon(mc, ec) || (cp.emissiveFactor = Sp.BOp()), cp.pbrMetallicRoughness = Op
      }
      async exportOpenPBRMaterialAsync(pp, ip) {
        const cp = {},
          Op = {
            name: pp.name
          },
          op = pp.baseColor,
          Ip = pp.geometryOpacity;
        op && (cp.baseColorFactor = [op.r, op.g, op.b, Ip]);
        const Sp = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(pp.baseColor, pp.baseMetalness, pp.specularRoughness, pp.baseColorTexture, pp.baseMetalnessTexture, pp.specularRoughnessTexture, pp, cp, ip);
        await this._setMetallicRoughnessPbrMaterialAsync(Sp, pp, Op, cp, ip), await this._finishMaterialAsync(Op, pp);
        const xp = this._exporter._materials;
        return xp.push(Op), xp.length - 1
      }
      async exportTextureAsync(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = this._textureMap.get(ip ?? pp.uniqueId);
        if (cp) return cp;
        const Op = this._exportTextureSampler(pp),
          op = await this._exportTextureImageAsync(pp);
        return cp = this._exportTextureInfo(op, Op, pp.coordinatesIndex), this._textureMap.set(ip ?? pp.uniqueId, cp), this._exporter._extensionsPostExportTextures("exporter", cp, pp), cp
      }
      async _exportTextureImageAsync(pp) {
        const ip = pp.mimeType ?? "none",
          cp = this._internalTextureToImage,
          Op = pp.getInternalTexture().uniqueId;
        cp[Op] = cp[Op] || {};
        let Ip = cp[Op][ip];
        return void 0 === Ip && (Ip = (async () => {
          const cp = await dc(pp);
          if (cp && Rc(cp.mimeType) && ("none" === ip || cp.mimeType === ip)) return await this._exportImageAsync(pp.name, new Blob([cp.data], {
            type: cp.mimeType
          }));
          let Op = "image/png";
          "none" !== ip && (Rc(ip) ? Op = ip : (Op = "image/png", op.Tools.Warn(`Unsupported media type: ${ip}. Exporting texture as PNG.`)));
          const Ip = pp.getSize(),
            Sp = await (0, dp.d)(pp),
            xp = await (0, mp.EncodeImageAsync)(Sp, Ip.width, Ip.height, Op);
          return await this._exportImageAsync(pp.name, xp)
        })(), cp[Op][ip] = Ip), await Ip
      }
      async _exportImageAsync(pp, ip) {
        const cp = this._exporter._images;
        let Op;
        if (this._exporter._shouldUseGlb) {
          Op = {
            name: pp,
            mimeType: ip.type,
            bufferView: void 0
          };
          const cp = await ip.arrayBuffer(),
            op = this._exporter._bufferManager.createBufferView(new Uint8Array(cp));
          this._exporter._bufferManager.setBufferView(Op, op)
        } else {
          const Ip = pp.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Sp = function(pp) {
              switch (pp) {
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
            }(ip.type);
          let xp = Ip + Sp;
          cp.some((pp => pp.uri === xp)) && (xp = `${Ip}_${op.Tools.RandomId()}${Sp}`), Op = {
            name: pp,
            uri: xp
          }, this._exporter._imageData[xp] = ip
        }
        return cp.push(Op), cp.length - 1
      }
      _exportTextureInfo(pp, ip, cp) {
        const Op = this._exporter._textures;
        let op = Op.findIndex((cp => cp.sampler == ip && cp.source === pp)); - 1 === op && (op = Op.length, Op.push({
          source: pp,
          sampler: ip
        }));
        const Ip = {
          index: op
        };
        return cp && (Ip.texCoord = cp), Ip
      }
      _exportTextureSampler(pp) {
        const ip = this._getTextureSampler(pp),
          cp = this._exporter._samplers,
          Op = cp.findIndex((pp => pp.minFilter === ip.minFilter && pp.magFilter === ip.magFilter && pp.wrapS === ip.wrapS && pp.wrapT === ip.wrapT));
        return -1 !== Op ? Op : (cp.push(ip), cp.length - 1)
      }
    }
    var Qc = cp(40273),
      Jc = cp(40409);
    (0, Jc.e)();
    var Bc = cp(37324);
    const Nc = Op.Matrix.Compose(new Op.Zy(-1, 1, 1), Op.Quaternion.Identity(), Op.Zy.Zero());

    function Tc(pp, ip) {
      if (!(pp instanceof Ap.b)) return !1;
      if (ip) {
        if (!pp.getWorldMatrix().equalsWithEpsilon(Op.Matrix.IdentityReadOnly, Bc.b)) return !1
      } else {
        if (!pp.getWorldMatrix().multiplyToRef(Nc, Op.TmpVectors.Matrix[0]).equalsWithEpsilon(Op.Matrix.IdentityReadOnly, Bc.b)) return !1
      }
      return !(pp instanceof Pp.e && pp.geometry)
    }
    const fc = Op.Zy.ZeroReadOnly,
      bc = Op.Quaternion.Identity(),
      hc = Op.Zy.OneReadOnly,
      ac = new Op.Zy(-1, 1, 1);

    function nc(pp, ip) {
      const {
        byteOffset: cp,
        byteStride: Op,
        type: op,
        normalized: Ip
      } = pp, Sp = pp.getSize(), xp = ip.reduce(((pp, ip) => ip.getTotalVertices() > pp ? ip.getTotalVertices() : pp), -Number.MAX_VALUE);
      return {
        byteOffset: cp,
        byteStride: Op,
        componentCount: Sp,
        type: op,
        count: xp * Sp,
        normalized: Ip,
        totalVertices: xp,
        kind: pp.getKind()
      }
    }

    function Fc(pp) {
      switch (pp) {
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

    function gc(pp) {
      switch (pp) {
        case Dp.f.PositionKind:
        case Dp.f.NormalKind:
        case Dp.f.TangentKind:
        case Dp.f.ColorKind:
        case Dp.f.MatricesIndicesKind:
        case Dp.f.MatricesIndicesExtraKind:
        case Dp.f.MatricesWeightsKind:
        case Dp.f.MatricesWeightsExtraKind:
        case Dp.f.UVKind:
        case Dp.f.UV2Kind:
        case Dp.f.UV3Kind:
        case Dp.f.UV4Kind:
        case Dp.f.UV5Kind:
        case Dp.f.UV6Kind:
          return !0
      }
      return !1
    }

    function Gc(pp) {
      const ip = Math.sqrt(pp.x * pp.x + pp.y * pp.y + pp.z * pp.z);
      ip > 0 && (pp.x /= ip, pp.y /= ip, pp.z /= ip)
    }

    function rc(pp) {
      return pp.x *= -1, pp
    }

    function Zc(pp) {
      if (pp.x * pp.x + pp.y * pp.y > .5) {
        const ip = Math.abs(pp.x),
          cp = Math.abs(pp.y);
        if (ip > cp) {
          const cp = Math.sign(pp.x);
          pp.x = ip, pp.y *= -cp, pp.z *= -cp, pp.w *= cp
        } else {
          const ip = Math.sign(pp.y);
          pp.x *= -ip, pp.y = cp, pp.z *= ip, pp.w *= -ip
        }
      } else {
        const ip = Math.abs(pp.z),
          cp = Math.abs(pp.w);
        if (ip > cp) {
          const cp = Math.sign(pp.z);
          pp.x *= -cp, pp.y *= cp, pp.z = ip, pp.w *= -cp
        } else {
          const ip = Math.sign(pp.w);
          pp.x *= ip, pp.y *= -ip, pp.z *= -ip, pp.w = cp
        }
      }
      return pp
    }

    function zc(pp) {
      pp.i5(-pp.z, pp.w, pp.x, -pp.y)
    }

    function sc(pp, ip) {
      const cp = Op.Zy.FromArrayToRef(ip.translation || [0, 0, 0], 0, Op.TmpVectors.Zy[0]),
        op = Op.Quaternion.FromArrayToRef(ip.rotation || [0, 0, 0, 1], 0, Op.TmpVectors.Quaternion[0]),
        Ip = Op.Matrix.ComposeToRef(hc, op, cp, Op.TmpVectors.Matrix[0]),
        Sp = Op.Zy.FromArrayToRef(pp.translation || [0, 0, 0], 0, Op.TmpVectors.Zy[2]),
        xp = Op.Quaternion.FromArrayToRef(pp.rotation || [0, 0, 0, 1], 0, Op.TmpVectors.Quaternion[1]),
        Lp = Op.Matrix.ComposeToRef(hc, xp, Sp, Op.TmpVectors.Matrix[1]);
      Ip.multiplyToRef(Lp, Lp), Lp.decompose(void 0, op, cp), cp.equalsWithEpsilon(fc, Bc.b) ? delete ip.translation : ip.translation = cp.BOp(), op.equalsWithEpsilon(bc, Bc.b) ? delete ip.rotation : ip.rotation = op.BOp(), ip.scale && delete ip.scale
    }

    function Kc(pp, ip) {
      if (!(ip instanceof Ap.b)) return !1;
      if (!(1 === ip.getChildren().length && 0 === pp.getChildren().length && pp.parent === ip)) return !1;
      const cp = pp.Gl(),
        Op = pp instanceof Jc.f && !cp.useRightHandedSystem ? ac : hc;
      return !!ip.ei.equalsWithEpsilon(Op, Bc.b) || (Mp.e.Warn(`Cannot collapse node ${pp.name} into parent node ${ip.name} with modified scaling.`), !1)
    }

    function Vc(pp) {
      if (pp instanceof Array) {
        const ip = new Float32Array(pp);
        return new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength)
      }
      return ArrayBuffer.isView(pp) ? new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength) : new Uint8Array(pp)
    }

    function pO(pp, ip) {
      for (const [cp, Op] of Object.entries(pp)) {
        const op = ip[cp];
        (Array.isArray(Op) && Array.isArray(op) && iO(Op, op) || Op === op) && delete pp[cp]
      }
      return pp
    }

    function iO(pp, ip) {
      return pp.length === ip.length && pp.every(((pp, cp) => pp === ip[cp]))
    }
    const cO = new Map([
      [Int8Array, (pp, ip, cp) => pp.setInt8(ip, cp)],
      [Uint8Array, (pp, ip, cp) => pp.setUint8(ip, cp)],
      [Uint8ClampedArray, (pp, ip, cp) => pp.setUint8(ip, cp)],
      [Int16Array, (pp, ip, cp) => pp.setInt16(ip, cp, !0)],
      [Uint16Array, (pp, ip, cp) => pp.setUint16(ip, cp, !0)],
      [Int32Array, (pp, ip, cp) => pp.setInt32(ip, cp, !0)],
      [Uint32Array, (pp, ip, cp) => pp.setUint32(ip, cp, !0)],
      [Float32Array, (pp, ip, cp) => pp.setFloat32(ip, cp, !0)],
      [Float64Array, (pp, ip, cp) => pp.setFloat64(ip, cp, !0)]
    ]);
    class OO {
      writeTypedArray(pp) {
        this._checkGrowBuffer(pp.byteLength);
        const ip = cO.get(pp.constructor);
        for (let cp = 0; cp < pp.length; cp++) ip(this._dataView, this._byteOffset, pp[cp]), this._byteOffset += pp.BYTES_PER_ELEMENT
      }
      constructor(pp) {
        this._data = new Uint8Array(pp), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(pp) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, pp), this._byteOffset++
      }
      writeInt8(pp) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, pp), this._byteOffset++
      }
      writeInt16(pp) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, pp, !0), this._byteOffset += 2
      }
      writeUInt16(pp) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, pp, !0), this._byteOffset += 2
      }
      writeInt32(pp) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, pp, !0), this._byteOffset += 4
      }
      writeUInt32(pp) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, pp, !0), this._byteOffset += 4
      }
      writeFloat32(pp) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, pp, !0), this._byteOffset += 4
      }
      writeFloat64(pp) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, pp, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(pp) {
        const ip = this.byteOffset + pp;
        if (ip > this._data.byteLength) {
          const pp = new Uint8Array(2 * ip);
          pp.set(this._data), this._data = pp, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function oO(pp) {
      return pp % 4 === 0 ? 4 : pp % 2 === 0 ? 2 : 1
    }
    class IO {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(pp) {
        let ip = 0;
        this._bufferViewToData.forEach((pp => {
          ip += pp.byteLength
        }));
        const cp = new OO(ip),
          Op = Array.from(this._bufferViewToData.keys()).sort(((pp, ip) => oO(ip.byteLength) - oO(pp.byteLength)));
        for (const op of Op) {
          op.byteOffset = cp.byteOffset, pp.push(op);
          const ip = pp.length - 1,
            Op = this.getPropertiesWithBufferView(op);
          for (const pp of Op) pp.bufferView = ip;
          cp.writeTypedArray(this._bufferViewToData.get(op)), this._bufferViewToData.delete(op)
        }
        return cp.getOutputData()
      }
      createBufferView(pp, ip) {
        const cp = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: pp.byteLength,
          byteStride: ip
        };
        return this._bufferViewToData.set(cp, pp), cp
      }
      createAccessor(pp, ip, cp, Op, op, Ip, Sp) {
        this._verifyBufferView(pp);
        const xp = {
          bufferView: void 0,
          componentType: cp,
          count: Op,
          type: ip,
          min: Ip?.min,
          max: Ip?.max,
          normalized: Sp,
          byteOffset: op
        };
        return this.setBufferView(xp, pp), this._accessorToBufferView.set(xp, pp), xp
      }
      setBufferView(pp, ip) {
        this._verifyBufferView(ip);
        this.getPropertiesWithBufferView(ip).push(pp)
      }
      removeBufferView(pp) {
        const ip = this.getPropertiesWithBufferView(pp);
        for (const cp of ip) void 0 !== cp.bufferView && delete cp.bufferView;
        this._bufferViewToData.delete(pp), this._bufferViewToProperties.delete(pp), this._accessorToBufferView.forEach(((ip, cp) => {
          ip === pp && (void 0 !== cp.byteOffset && delete cp.byteOffset, this._accessorToBufferView.delete(cp))
        }))
      }
      getBufferView(pp) {
        const ip = this._accessorToBufferView.get(pp);
        return this._verifyBufferView(ip), ip
      }
      getPropertiesWithBufferView(pp) {
        return this._verifyBufferView(pp), this._bufferViewToProperties.set(pp, this._bufferViewToProperties.get(pp) ?? []), this._bufferViewToProperties.get(pp)
      }
      getData(pp) {
        return this._verifyBufferView(pp), this._bufferViewToData.get(pp)
      }
      _verifyBufferView(pp) {
        if (void 0 === pp || !this._bufferViewToData.has(pp)) throw new Error(`BufferView ${pp} not found in BufferManager.`)
      }
    }
    var SO = cp(40411);
    (0, SO.e)();
    var xO = cp(40621);
    (0, xO.c)();
    var LO = cp(40459),
      YO = cp(41315);
    (0, YO.h)();
    let DO = (() => {
      var pp;
      let ip, cp, Op = [],
        op = [],
        Ip = [],
        Sp = [];
      return pp = class {
        get influence() {
          return this._influence
        }
        set influence(pp) {
          if (this._influence === pp) return;
          const ip = this._influence;
          this._influence = pp, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === ip || 0 === pp)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(pp) {
          this._animationPropertiesOverride = pp
        }
        constructor(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            xp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = pp, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Oc.d, this._onDataLayoutChanged = new Oc.d, this.id = (0, Rp.l)(this, Op, void 0), this.morphTargetManager = ((0, Rp.l)(this, op), (0, Rp.l)(this, Ip, null)), this._animationPropertiesOverride = ((0, Rp.l)(this, Sp), null), this.id = pp, this.morphTargetManager = xp, this._scene = cp || Up.e.LastCreatedScene, this.influence = ip, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        uxp(pp) {
          const ip = this.hasPositions;
          this._positions = pp, ip !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(pp) {
          const ip = this.hasNormals;
          this._normals = pp, ip !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(pp) {
          const ip = this.hasTangents;
          this._tangents = pp, ip !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(pp) {
          const ip = this.hasUVs;
          this._uvs = pp, ip !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(pp) {
          const ip = this.hasUV2s;
          this._uv2s = pp, ip !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(pp) {
          const ip = this.hasColors;
          this._colors = pp, ip !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const ip = mi.c.Clone((() => new pp(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return ip._positions = this._positions, ip._normals = this._normals, ip._tangents = this._tangents, ip._uvs = this._uvs, ip._uv2s = this._uv2s, ip._colors = this._colors, ip
        }
        serialize() {
          const pp = {};
          return pp.name = this.name, pp.influence = this.influence, null != this.id && (pp.id = this.id), pp.uniqueId = this.uniqueId, pp.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (pp.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (pp.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (pp.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (pp.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (pp.colors = Array.prototype.slice.call(this.getColors())), mi.c.AppendSerializedAnimations(this, pp), pp
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(ip, cp) {
          let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const op = new pp(ip.name, ip.influence, cp, Op);
          if (op.uxp(ip.positions), null != ip.id && (op.id = ip.id), ip.normals && op.setNormals(ip.normals), ip.tangents && op.setTangents(ip.tangents), ip.uvs && op.setUVs(ip.uvs), ip.uv2s && op.setUV2s(ip.uv2s), ip.colors && op.setColors(ip.colors), ip.animations) {
            for (let pp = 0; pp < ip.animations.length; pp++) {
              const cp = ip.animations[pp],
                Op = (0, Fi.d)("BABYLON.Animation");
              Op && op.animations.push(Op.Parse(cp))
            }
            ip.autoAnimate && cp && cp.beginAnimation(op, ip.autoAnimateFrom, ip.autoAnimateTo, ip.autoAnimateLoop, ip.autoAnimateSpeed || 1)
          }
          return op
        }
        static FromMesh(ip, cp, Op) {
          cp || (cp = ip.name);
          const op = new pp(cp, Op, ip.Gl(), ip.morphTargetManager);
          return op.uxp(ip.getVerticesData(bp.j.PositionKind)), ip.isVerticesDataPresent(bp.j.NormalKind) && op.setNormals(ip.getVerticesData(bp.j.NormalKind)), ip.isVerticesDataPresent(bp.j.TangentKind) && op.setTangents(ip.getVerticesData(bp.j.TangentKind)), ip.isVerticesDataPresent(bp.j.UVKind) && op.setUVs(ip.getVerticesData(bp.j.UVKind)), ip.isVerticesDataPresent(bp.j.UV2Kind) && op.setUV2s(ip.getVerticesData(bp.j.UV2Kind)), ip.isVerticesDataPresent(bp.j.ColorKind) && op.setColors(ip.getVerticesData(bp.j.ColorKind)), op
        }
      }, (() => {
        const xp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, qp.K)()], cp = [(0, qp.K)()], (0, Rp.j)(null, null, ip, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: pp => "id" in pp,
            get: pp => pp.id,
            set: (pp, ip) => {
              pp.id = ip
            }
          },
          metadata: xp
        }, Op, op), (0, Rp.j)(null, null, cp, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: pp => "morphTargetManager" in pp,
            get: pp => pp.morphTargetManager,
            set: (pp, ip) => {
              pp.morphTargetManager = ip
            }
          },
          metadata: xp
        }, Ip, Sp), xp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xp
        })
      })(), pp
    })();
    var AO, PO = cp(41383),
      WO = cp(40451);
    ! function(pp) {
      pp[pp.INTANGENT = 0] = "INTANGENT", pp[pp.OUTTANGENT = 1] = "OUTTANGENT"
    }(AO || (AO = {}));
    class yO {
      static _IsTransformable(pp) {
        return pp && (pp instanceof Ap.b || pp instanceof SO.d || pp instanceof WO.d)
      }
      static _CreateNodeAnimation(pp, ip, cp, Op, Ip) {
        if (this._IsTransformable(pp)) {
          const Sp = [],
            xp = [],
            Lp = ip.getKeys(),
            Yp = yO._CalculateMinMaxKeyFrames(Lp),
            Dp = yO._DeduceInterpolation(Lp, cp, Op),
            Ap = Dp.interpolationType,
            Pp = Dp.shouldBakeAnimation;
          if (Pp ? yO._CreateBakedAnimation(pp, ip, cp, Yp.min, Yp.max, ip.framePerSecond, Ip, Sp, xp, Yp, Op) : "LINEAR" === Ap || "STEP" === Ap ? yO._CreateLinearOrStepAnimation(pp, ip, cp, Sp, xp, Op) : "CUBICSPLINE" === Ap ? yO._CreateCubicSplineAnimation(pp, ip, cp, Sp, xp, Op) : yO._CreateBakedAnimation(pp, ip, cp, Yp.min, Yp.max, ip.framePerSecond, Ip, Sp, xp, Yp, Op), Sp.length && xp.length) {
            return {
              inputs: Sp,
              outputs: xp,
              samplerInterpolation: Ap,
              inputsMin: Pp ? Yp.min : op.Tools.FloatRound(Yp.min / ip.framePerSecond),
              inputsMax: Pp ? Yp.max : op.Tools.FloatRound(Yp.max / ip.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(pp) {
        let ip = null,
          cp = "VEC3",
          Op = !1;
        const Ip = pp.targetProperty.split(".");
        switch (Ip[0]) {
          case "ei":
            ip = "scale";
            break;
          case "position":
            ip = "translation";
            break;
          case "rotation":
            cp = "VEC4", ip = "rotation";
            break;
          case "rotationQuaternion":
            cp = "VEC4", Op = !0, ip = "rotation";
            break;
          case "influence":
            cp = "SCALAR", ip = "weights";
            break;
          default:
            op.Tools.Error(`Unsupported animatable property ${Ip[0]}`)
        }
        return ip ? {
          animationChannelTargetPath: ip,
          dataAccessorType: cp,
          useQuaternion: Op
        } : (op.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        let Ap;
        if (yO._IsTransformable(pp) && pp.animations)
          for (const Pp of pp.animations) {
            if (Dp && !Dp(Pp)) continue;
            const op = yO._DeduceAnimationInfo(Pp);
            op && (Ap = {
              name: Pp.name,
              samplers: [],
              channels: []
            }, yO._AddAnimation(`${Pp.name}`, Pp.hasRunningRuntimeAnimations ? ip : Ap, pp, Pp, op.dataAccessorType, op.animationChannelTargetPath, Op, Ip, Sp, xp, op.useQuaternion, Lp, Yp), Ap.samplers.length && Ap.channels.length && cp.push(Ap))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        let Ap;
        if (pp instanceof PO.c) {
          const op = pp.morphTargetManager;
          if (op)
            for (let Pp = 0; Pp < op.numTargets; ++Pp) {
              const Wp = op.getTarget(Pp);
              for (const yp of Wp.animations) {
                if (Dp && !Dp(yp)) continue;
                const Wp = new YO.e(`${yp.name}`, "influence", yp.framePerSecond, yp.dataType, yp.Yo, yp.enableBlending),
                  Up = [],
                  wp = yp.getKeys();
                for (let pp = 0; pp < wp.length; ++pp) {
                  const ip = wp[pp];
                  for (let pp = 0; pp < op.numTargets; ++pp) pp == Pp ? Up.push(ip) : Up.push({
                    frame: ip.frame,
                    value: 0
                  })
                }
                Wp.setKeys(Up, !0);
                const vp = yO._DeduceAnimationInfo(Wp);
                vp && (Ap = {
                  name: Wp.name,
                  samplers: [],
                  channels: []
                }, yO._AddAnimation(yp.name, yp.hasRunningRuntimeAnimations ? ip : Ap, pp, Wp, vp.dataAccessorType, vp.animationChannelTargetPath, Op, Ip, Sp, xp, vp.useQuaternion, Lp, Yp, op.numTargets), Ap.samplers.length && Ap.channels.length && cp.push(Ap))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        let Dp;
        if (pp.animationGroups) {
          const Ap = pp.animationGroups;
          for (const Pp of Ap) {
            const Ap = new Map,
              Wp = new Map,
              yp = new Set,
              Up = Pp.to - Pp.from;
            Dp = {
              name: Pp.name,
              channels: [],
              samplers: []
            };
            for (let ip = 0; ip < Pp.targetedAnimations.length; ++ip) {
              const Yp = Pp.targetedAnimations[ip],
                Up = Yp.target,
                wp = Yp.animation;
              if (Lp && !Lp(wp)) continue;
              const vp = xp.has(Up);
              if (this._IsTransformable(Up) || 1 === Up.length && this._IsTransformable(Up[0])) {
                const pp = yO._DeduceAnimationInfo(Yp.animation);
                if (pp) {
                  const ip = this._IsTransformable(Up) ? Up : this._IsTransformable(Up[0]) ? Up[0] : null;
                  ip && yO._AddAnimation(`${wp.name}`, Dp, ip, wp, pp.dataAccessorType, pp.animationChannelTargetPath, cp, Op, op, Ip, pp.useQuaternion, Sp, vp)
                }
              } else if (Up instanceof DO || 1 === Up.length && Up[0] instanceof DO) {
                if (yO._DeduceAnimationInfo(Yp.animation)) {
                  const ip = Up instanceof DO ? Up : Up[0];
                  if (ip) {
                    const cp = pp.morphTargetManagers.find((pp => {
                      for (let cp = 0; cp < pp.numTargets; ++cp)
                        if (pp.getTarget(cp) === ip) return !0;
                      return !1
                    }));
                    if (cp) {
                      const Op = pp.meshes.find((pp => pp.morphTargetManager === cp));
                      Op && (Ap.has(Op) || Ap.set(Op, new Map), Ap.get(Op)?.set(ip, wp), yp.add(Op), Wp.set(Op, wp))
                    }
                  }
                }
              }
            }
            yp.forEach((pp => {
              const ip = pp.morphTargetManager;
              let xp = null;
              const Lp = [],
                Yp = Wp.get(pp).getKeys(),
                yp = Yp.length;
              for (let cp = 0; cp < yp; ++cp)
                for (let Op = 0; Op < ip.numTargets; ++Op) {
                  const op = ip.getTarget(Op),
                    Ip = Ap.get(pp);
                  if (Ip) {
                    const ip = Ip.get(op);
                    ip ? (xp || (xp = new YO.e(`${Pp.name}_${pp.name}_MorphWeightAnimation`, "influence", ip.framePerSecond, YO.e.ANIMATIONTYPE_FLOAT, ip.Yo, ip.enableBlending)), Lp.push(ip.getKeys()[cp])) : Lp.push({
                      frame: Pp.from + Up / yp * cp,
                      value: op.influence,
                      inTangent: Yp[0].inTangent ? 0 : void 0,
                      outTangent: Yp[0].outTangent ? 0 : void 0
                    })
                  }
                }
              xp.setKeys(Lp, !0);
              const wp = yO._DeduceAnimationInfo(xp);
              wp && yO._AddAnimation(`${Pp.name}_${pp.name}_MorphWeightAnimation`, Dp, pp, xp, wp.dataAccessorType, wp.animationChannelTargetPath, cp, Op, op, Ip, wp.useQuaternion, Sp, !1, ip?.numTargets)
            })), Dp.channels.length && Dp.samplers.length && (Yp?.set(Pp, ip.length), ip.push(Dp))
          }
        }
      }
      static _AddAnimation(pp, ip, cp, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp) {
        const Up = yO._CreateNodeAnimation(cp, op, Sp, Ap, Pp);
        let wp, vp, tp, Hp, dp, ep;
        if (Up) {
          if (yp) {
            let pp, ip = 0;
            const cp = [];
            for (; Up.inputs.length > 0;) pp = Up.inputs.shift(), ip % yp == 0 && cp.push(pp), ip++;
            Up.inputs = cp
          }
          const pp = xp.get(cp),
            op = new Float32Array(Up.inputs);
          wp = Lp.createBufferView(op), vp = Lp.createAccessor(wp, "SCALAR", 5126, Up.inputs.length, void 0, {
            min: [Up.inputsMin],
            max: [Up.inputsMax]
          }), Dp.push(vp), tp = Dp.length - 1;
          const Yp = new Op.Quaternion,
            Ap = new Op.Zy,
            Pp = new Op.Zy,
            jp = cp instanceof SO.d,
            kp = Fc(Ip),
            mp = new Float32Array(Up.outputs.length * kp);
          Up.outputs.forEach((function(pp, ip) {
            let cp = pp;
            switch (Sp) {
              case "translation":
                Wp && (Op.Zy.FromArrayToRef(pp, 0, Pp), rc(Pp), Pp.toArray(cp));
                break;
              case "rotation":
                4 === pp.length ? Op.Quaternion.FromArrayToRef(pp, 0, Yp) : (cp = new Array(4), Op.Zy.FromArrayToRef(pp, 0, Ap), Op.Quaternion.FromEulerVectorToRef(Ap, Yp)), Wp && (Zc(Yp), jp && zc(Yp)), Yp.toArray(cp)
            }
            mp.set(cp, ip * kp)
          })), wp = Lp.createBufferView(mp), vp = Lp.createAccessor(wp, Ip, 5126, Up.outputs.length), Dp.push(vp), Hp = Dp.length - 1, dp = {
            interpolation: Up.samplerInterpolation,
            input: tp,
            output: Hp
          }, ip.samplers.push(dp), ep = {
            sampler: ip.samplers.length - 1,
            target: {
              node: pp,
              path: Sp
            }
          }, ip.channels.push(ep)
        }
      }
      static _CreateBakedAnimation(pp, ip, cp, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp) {
        let Wp;
        const yp = Op.Quaternion.Identity();
        let Up, wp, vp, tp, Hp, dp = null,
          ep = null;
        Ap.min = op.Tools.FloatRound(Ip / xp);
        const jp = ip.getKeys();
        for (let Op = 0, kp = jp.length; Op < kp; ++Op) {
          if (wp = jp[Op], Op + 1 < kp)
            if (vp = jp[Op + 1], wp.value.equals && wp.value.equals(vp.value) || wp.value === vp.value) {
              if (0 !== Op) continue;
              Hp = wp.frame
            } else Hp = vp.frame;
          else {
            if (tp = jp[Op - 1], wp.value.equals && wp.value.equals(tp.value) || wp.value === tp.value) continue;
            Hp = Sp
          }
          if (Hp)
            for (let Op = wp.frame; Op <= Hp; Op += Lp) {
              if (Up = op.Tools.FloatRound(Op / xp), Up === dp) continue;
              dp = Up, ep = Up;
              const Ip = {
                key: 0,
                repeatCount: 0,
                Yo: ip.Yo
              };
              Wp = ip._interpolate(Op, Ip), yO._SetInterpolatedValue(pp, Wp, Up, ip, cp, yp, Yp, Dp, Pp)
            }
        }
        ep && (Ap.max = ep)
      }
      static _ConvertFactorToVector3OrQuaternion(pp, ip, cp, Ip, Sp) {
        const xp = yO._GetBasePositionRotationOrScale(ip, Ip, Sp),
          Lp = cp.targetProperty.split("."),
          Yp = Lp ? Lp[1] : "",
          Dp = Sp ? Op.Quaternion.FromArray(xp).normalize() : Op.Zy.FromArray(xp);
        switch (Yp) {
          case "x":
          case "y":
          case "z":
            Dp[Yp] = pp;
            break;
          case "w":
            Dp.w = pp;
            break;
          default:
            op.Tools.Error(`glTFAnimation: Unsupported component name "${Yp}"!`)
        }
        return Dp
      }
      static _SetInterpolatedValue(pp, ip, cp, op, Ip, Sp, xp, Lp, Yp) {
        let Dp;
        xp.push(cp), "weights" !== Ip ? (op.dataType === YO.e.ANIMATIONTYPE_FLOAT && (ip = this._ConvertFactorToVector3OrQuaternion(ip, pp, op, Ip, Yp)), "rotation" === Ip ? (Yp ? Sp = ip : (Dp = ip, Op.Quaternion.RotationYawPitchRollToRef(Dp.y, Dp.x, Dp.z, Sp)), Lp.push(Sp.BOp())) : (Dp = ip, Lp.push(Dp.BOp()))) : Lp.push([ip])
      }
      static _CreateLinearOrStepAnimation(pp, ip, cp, Op, op, Ip) {
        for (const Sp of ip.getKeys()) Op.push(Sp.frame / ip.framePerSecond), yO._AddKeyframeValue(Sp, ip, op, cp, pp, Ip)
      }
      static _CreateCubicSplineAnimation(pp, ip, cp, Op, op, Ip) {
        ip.getKeys().forEach((function(Sp) {
          Op.push(Sp.frame / ip.framePerSecond), yO._AddSplineTangent(AO.INTANGENT, op, cp, "CUBICSPLINE", Sp, Ip), yO._AddKeyframeValue(Sp, ip, op, cp, pp, Ip), yO._AddSplineTangent(AO.OUTTANGENT, op, cp, "CUBICSPLINE", Sp, Ip)
        }))
      }
      static _GetBasePositionRotationOrScale(pp, ip, cp) {
        let op;
        if ("rotation" === ip)
          if (cp) {
            op = (pp.rotationQuaternion ?? Op.Quaternion.Identity()).BOp()
          } else {
            op = (pp.rotation ?? Op.Zy.Zero()).BOp()
          }
        else if ("translation" === ip) {
          op = (pp.position ?? Op.Zy.Zero()).BOp()
        } else {
          op = (pp.ei ?? Op.Zy.One()).BOp()
        }
        return op
      }
      static _AddKeyframeValue(pp, ip, cp, Ip, Sp, xp) {
        let Lp;
        const Yp = ip.dataType;
        if (Yp === YO.e.ANIMATIONTYPE_VECTOR3) {
          let ip = pp.value.BOp();
          if ("rotation" === Ip) {
            const pp = Op.Zy.FromArray(ip);
            ip = Op.Quaternion.RotationYawPitchRoll(pp.y, pp.x, pp.z).BOp()
          }
          cp.push(ip)
        } else if (Yp === YO.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Ip) cp.push([pp.value]);
          else if (Lp = this._ConvertFactorToVector3OrQuaternion(pp.value, Sp, ip, Ip, xp), Lp) {
            if ("rotation" === Ip) {
              const pp = xp ? Lp : Op.Quaternion.RotationYawPitchRoll(Lp.y, Lp.x, Lp.z).normalize();
              cp.push(pp.BOp())
            }
            cp.push(Lp.BOp())
          }
        } else Yp === YO.e.ANIMATIONTYPE_QUATERNION ? cp.push(pp.value.normalize().BOp()) : op.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(pp, ip, cp) {
        let Op, op, Ip = !1;
        if ("rotation" === ip && !cp) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Sp = 0, xp = pp.length; Sp < xp; ++Sp)
          if (op = pp[Sp], op.inTangent || op.outTangent)
            if (Op) {
              if ("CUBICSPLINE" !== Op) {
                Op = "LINEAR", Ip = !0;
                break
              }
            } else Op = "CUBICSPLINE";
        else if (Op) {
          if ("CUBICSPLINE" === Op || op.interpolation && 1 === op.interpolation && "STEP" !== Op) {
            Op = "LINEAR", Ip = !0;
            break
          }
        } else Op = op.interpolation && 1 === op.interpolation ? "STEP" : "LINEAR";
        return Op || (Op = "LINEAR"), {
          interpolationType: Op,
          shouldBakeAnimation: Ip
        }
      }
      static _AddSplineTangent(pp, ip, cp, op, Ip, Sp) {
        let xp;
        const Lp = pp === AO.INTANGENT ? Ip.inTangent : Ip.outTangent;
        if ("CUBICSPLINE" === op) {
          if ("rotation" === cp)
            if (Lp)
              if (Sp) xp = Lp.BOp();
              else {
                const pp = Lp;
                xp = Op.Quaternion.RotationYawPitchRoll(pp.y, pp.x, pp.z).BOp()
              }
          else xp = [0, 0, 0, 0];
          else xp = "weights" === cp ? Lp ? [Lp] : [0] : Lp ? Lp.BOp() : [0, 0, 0];
          ip.push(xp)
        }
      }
      static _CalculateMinMaxKeyFrames(pp) {
        let ip = 1 / 0,
          cp = -1 / 0;
        return pp.forEach((function(pp) {
          ip = Math.min(ip, pp.frame), cp = Math.max(cp, pp.frame)
        })), {
          min: ip,
          max: cp
        }
      }
    }

    function UO(pp, ip, cp, Ip, Sp, xp) {
      const Lp = {
          attributes: {},
          influence: pp.influence,
          name: pp.name
        },
        Yp = ip.geometry;
      if (!Yp) return op.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Lp;
      const Ap = xp ? -1 : 1,
        Pp = Op.Zy.Zero();
      let Wp, yp;
      if (pp.hasPositions) {
        const Ip = pp.getPositions(),
          xp = Yp.getVerticesData(Dp.f.PositionKind);
        if (xp) {
          const pp = new Float32Array(xp.length),
            ip = [1 / 0, 1 / 0, 1 / 0],
            op = [-1 / 0, -1 / 0, -1 / 0];
          yp = xp.length / 3, Wp = 0;
          for (let cp = Wp; cp < yp; ++cp) {
            const Sp = Op.Zy.FromArray(xp, 3 * cp);
            Op.Zy.FromArray(Ip, 3 * cp).subtractToRef(Sp, Pp), Pp.x *= Ap, ip[0] = Math.min(ip[0], Pp.x), op[0] = Math.max(op[0], Pp.x), ip[1] = Math.min(ip[1], Pp.y), op[1] = Math.max(op[1], Pp.y), ip[2] = Math.min(ip[2], Pp.z), op[2] = Math.max(op[2], Pp.z), pp[3 * cp] = Pp.x, pp[3 * cp + 1] = Pp.y, pp[3 * cp + 2] = Pp.z
          }
          const Yp = cp.createBufferView(pp, 12),
            Dp = cp.createAccessor(Yp, "VEC3", 5126, Ip.length / 3, 0, {
              min: ip,
              max: op
            });
          Sp.push(Dp), Lp.attributes.POSITION = Sp.length - 1
        } else op.Tools.Warn(`Morph target positions for mesh ${ip.name} were not exported. Mesh does not have position vertex data`)
      }
      if (pp.hasNormals) {
        const Ip = pp.getNormals(),
          xp = Yp.getVerticesData(Dp.f.NormalKind);
        if (xp) {
          const pp = new Float32Array(xp.length);
          yp = xp.length / 3, Wp = 0;
          for (let cp = Wp; cp < yp; ++cp) {
            const ip = Op.Zy.FromArray(xp, 3 * cp).normalize();
            Op.Zy.FromArray(Ip, 3 * cp).normalize().subtractToRef(ip, Pp), pp[3 * cp] = Pp.x * Ap, pp[3 * cp + 1] = Pp.y, pp[3 * cp + 2] = Pp.z
          }
          const ip = cp.createBufferView(pp, 12),
            op = cp.createAccessor(ip, "VEC3", 5126, Ip.length / 3, 0);
          Sp.push(op), Lp.attributes.NORMAL = Sp.length - 1
        } else op.Tools.Warn(`Morph target normals for mesh ${ip.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (pp.hasTangents) {
        const Ip = pp.getTangents(),
          xp = Yp.getVerticesData(Dp.f.TangentKind);
        if (xp) {
          yp = xp.length / 4;
          const pp = new Float32Array(3 * yp);
          Wp = 0;
          for (let cp = Wp; cp < yp; ++cp) {
            const ip = Op.Zy.FromArray(xp, 4 * cp);
            Gc(ip);
            const op = Op.Zy.FromArray(Ip, 3 * cp);
            Gc(op), op.subtractToRef(ip, Pp), pp[3 * cp] = Pp.x * Ap, pp[3 * cp + 1] = Pp.y, pp[3 * cp + 2] = Pp.z
          }
          const ip = cp.createBufferView(pp, 12),
            op = cp.createAccessor(ip, "VEC3", 5126, yp, 0);
          Sp.push(op), Lp.attributes.TANGENT = Sp.length - 1
        } else op.Tools.Warn(`Morph target tangents for mesh ${ip.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (pp.hasColors) {
        const Ip = pp.getColors(),
          xp = Yp.getVerticesData(Dp.f.ColorKind),
          Ap = Yp.getVertexBuffer(Dp.f.ColorKind);
        if (xp && Ap) {
          const pp = Ap.getSize();
          yp = xp.length / pp;
          const ip = new Float32Array(yp * pp);
          Wp = 0;
          for (let cp = Wp; cp < yp; ++cp)
            if (3 === pp) {
              const op = Op.Zy.FromArray(xp, cp * pp);
              Op.Zy.FromArray(Ip, cp * pp).subtractToRef(op, Pp), ip[3 * cp] = Pp.x, ip[3 * cp + 1] = Pp.y, ip[3 * cp + 2] = Pp.z
            } else if (4 === pp) {
            const op = new Op.Vector4,
              Sp = Op.Vector4.FromArray(xp, cp * pp);
            Op.Vector4.FromArray(Ip, cp * pp).subtractToRef(Sp, op), ip[4 * cp] = op.x, ip[4 * cp + 1] = op.y, ip[4 * cp + 2] = op.z, ip[4 * cp + 3] = op.w
          } else op.Tools.Warn(`Unsupported number of components for color attribute: ${pp}`);
          const Yp = cp.createBufferView(ip, 4 * pp),
            Dp = cp.createAccessor(Yp, 3 === pp ? "VEC3" : "VEC4", 5126, yp, 0);
          Sp.push(Dp), Lp.attributes.COLOR_0 = Sp.length - 1
        } else op.Tools.Warn(`Morph target colors for mesh ${ip.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Lp
    }
    var wO = cp(41826);
    class vO {}
    vO.DEFAULT_COLOR = Gp.d.White(), vO.DEFAULT_WIDTH_ATTENUATED = 1, vO.DEFAULT_WIDTH = .1;
    var tO = cp(41309);
    class HO {
      constructor(pp) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = pp
      }
      moveTo(pp, ip) {
        this._currentPath = new tO.k(pp, ip), this._tempPaths.push(this._currentPath)
      }
      lineTo(pp, ip) {
        this._currentPath.addLineTo(pp, ip)
      }
      quadraticCurveTo(pp, ip, cp, Op) {
        this._currentPath.addQuadraticCurveTo(pp, ip, cp, Op, this._resolution)
      }
      bezierCurveTo(pp, ip, cp, Op, op, Ip) {
        this._currentPath.addBezierCurveTo(pp, ip, cp, Op, op, Ip, this._resolution)
      }
      extractHoles() {
        for (const pp of this._tempPaths) pp.area() > 0 ? this._holes.push(pp) : this._paths.push(pp);
        if (!this._paths.length && this._holes.length) {
          const pp = this._holes;
          this._holes = this._paths, this._paths = pp
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

    function dO(pp, ip, cp, Op, op, Ip) {
      const Sp = Ip.glyphs[pp] || Ip.glyphs["?"];
      if (!Sp) return null;
      const xp = new HO(op);
      if (Sp.o) {
        const pp = Sp.o.split(" ");
        for (let op = 0, Ip = pp.length; op < Ip;) {
          switch (pp[op++]) {
            case "m": {
              const Ip = parseInt(pp[op++]) * ip + cp,
                Sp = parseInt(pp[op++]) * ip + Op;
              xp.moveTo(Ip, Sp);
              break
            }
            case "l": {
              const Ip = parseInt(pp[op++]) * ip + cp,
                Sp = parseInt(pp[op++]) * ip + Op;
              xp.lineTo(Ip, Sp);
              break
            }
            case "q": {
              const Ip = parseInt(pp[op++]) * ip + cp,
                Sp = parseInt(pp[op++]) * ip + Op,
                Lp = parseInt(pp[op++]) * ip + cp,
                Yp = parseInt(pp[op++]) * ip + Op;
              xp.quadraticCurveTo(Lp, Yp, Ip, Sp);
              break
            }
            case "b": {
              const Ip = parseInt(pp[op++]) * ip + cp,
                Sp = parseInt(pp[op++]) * ip + Op,
                Lp = parseInt(pp[op++]) * ip + cp,
                Yp = parseInt(pp[op++]) * ip + Op,
                Dp = parseInt(pp[op++]) * ip + cp,
                Ap = parseInt(pp[op++]) * ip + Op;
              xp.bezierCurveTo(Lp, Yp, Dp, Ap, Ip, Sp);
              break
            }
          }
        }
      }
      return xp.extractHoles(), {
        offsetX: Sp.ha * ip,
        shapePath: xp
      }
    }

    function eO(pp, ip, cp, Op) {
      const op = Array.from(pp),
        Ip = ip / Op.resolution,
        Sp = (Op.boundingBox.yMax - Op.boundingBox.yMin + Op.underlineThickness) * Ip,
        xp = [];
      let Lp = 0,
        Yp = 0;
      for (let Dp = 0; Dp < op.length; Dp++) {
        const pp = op[Dp];
        if ("\n" === pp) Lp = 0, Yp -= Sp;
        else {
          const ip = dO(pp, Ip, Lp, Yp, cp, Op);
          ip && (Lp += ip.offsetX, xp.push(ip.shapePath))
        }
      }
      return xp
    }
    class uO {
      static ConvertPoints(pp, ip) {
        if (pp.length && Array.isArray(pp) && "number" === typeof pp[0]) return [pp];
        if (pp.length && Array.isArray(pp[0]) && "number" === typeof pp[0][0]) return pp;
        if (pp.length && !Array.isArray(pp[0]) && pp[0] instanceof fp.o) {
          const ip = [];
          for (let cp = 0; cp < pp.length; cp++) {
            const Op = pp[cp];
            ip.push(Op.x, Op.y, Op.z)
          }
          return [ip]
        }
        if (pp.length > 0 && Array.isArray(pp[0]) && pp[0].length > 0 && pp[0][0] instanceof fp.o) {
          const ip = [],
            cp = pp;
          for (const pp of cp) ip.push(pp.flatMap((pp => [pp.x, pp.y, pp.z])));
          return ip
        }
        if (pp instanceof Float32Array) {
          if (ip?.floatArrayStride) {
            const cp = [],
              Op = 3 * ip.floatArrayStride;
            for (let ip = 0; ip < pp.length; ip += Op) {
              const op = new Array(Op);
              for (let cp = 0; cp < Op; cp++) op[cp] = pp[ip + cp];
              cp.push(op)
            }
            return cp
          }
          return [Array.from(pp)]
        }
        if (pp.length && pp[0] instanceof Float32Array) {
          const ip = [];
          for (const cp of pp) ip.push(Array.from(cp));
          return ip
        }
        return []
      }
      static OmitZeroLengthPredicate(pp, ip, cp) {
        const Op = [];
        return ip.subtract(pp).lengthSquared() > 0 && Op.push([pp, ip]), cp.subtract(ip).lengthSquared() > 0 && Op.push([ip, cp]), pp.subtract(cp).lengthSquared() > 0 && Op.push([cp, pp]), 0 === Op.length ? null : Op
      }
      static OmitDuplicatesPredicate(pp, ip, cp, Op) {
        const op = [];
        return uO._SearchInPoints(pp, ip, Op) || op.push([pp, ip]), uO._SearchInPoints(ip, cp, Op) || op.push([ip, cp]), uO._SearchInPoints(cp, pp, Op) || op.push([cp, pp]), 0 === op.length ? null : op
      }
      static _SearchInPoints(pp, ip, cp) {
        for (const Op of cp)
          for (let cp = 0; cp < Op.length; cp++)
            if (Op[cp]?.equals(pp) && (Op[cp + 1]?.equals(ip) || Op[cp - 1]?.equals(ip))) return !0;
        return !1
      }
      static MeshesToLines(pp, ip) {
        const cp = [];
        for (let Op = 0; Op < pp.length; Op++) {
          const op = pp[Op],
            Ip = op.getVerticesData(bp.j.PositionKind),
            Sp = op.NOp();
          if (Ip && Sp)
            for (let pp = 0, xp = 0; pp < Sp.length; pp++) {
              const Lp = 3 * Sp[xp++],
                Yp = 3 * Sp[xp++],
                Dp = 3 * Sp[xp++],
                Ap = new fp.o(Ip[Lp], Ip[Lp + 1], Ip[Lp + 2]),
                Pp = new fp.o(Ip[Yp], Ip[Yp + 1], Ip[Yp + 2]),
                Wp = new fp.o(Ip[Dp], Ip[Dp + 1], Ip[Dp + 2]);
              if (ip) {
                const xp = ip(Ap, Pp, Wp, cp, pp, Lp, op, Op, Ip, Sp);
                if (xp)
                  for (const pp of xp) cp.push(pp)
              } else cp.push([Ap, Pp], [Pp, Wp], [Wp, Ap])
            }
        }
        return cp
      }
      static ToVector3Array(pp) {
        if (Array.isArray(pp[0])) {
          const ip = [],
            cp = pp;
          for (const pp of cp) {
            const cp = [];
            for (let ip = 0; ip < pp.length; ip += 3) cp.push(new fp.o(pp[ip], pp[ip + 1], pp[ip + 2]));
            ip.push(cp)
          }
          return ip
        }
        const ip = pp,
          cp = [];
        for (let Op = 0; Op < ip.length; Op += 3) cp.push(new fp.o(ip[Op], ip[Op + 1], ip[Op + 2]));
        return cp
      }
      static ToNumberArray(pp) {
        return pp.flatMap((pp => [pp.x, pp.y, pp.z]))
      }
      static GetPointsCountInfo(pp) {
        const ip = new Array(pp.length);
        let cp = 0;
        for (let Op = pp.length; Op--;) ip[Op] = pp[Op].length / 3, cp += ip[Op];
        return {
          total: cp,
          counts: ip
        }
      }
      static GetLineLength(pp) {
        if (0 === pp.length) return 0;
        let ip;
        ip = "number" === typeof pp[0] ? uO.ToVector3Array(pp) : pp;
        const cp = fp.i.Zy[0];
        let Op = 0;
        for (let op = 0; op < ip.length - 1; op++) {
          const pp = ip[op];
          Op += ip[op + 1].subtractToRef(pp, cp).length()
        }
        return Op
      }
      static GetLineLengthArray(pp, ip) {
        const cp = ip ? new Float32Array(ip, 0, pp.length / 3) : new Float32Array(pp.length / 3);
        let Op = 0;
        for (let op = 0, Ip = pp.length / 3 - 1; op < Ip; op++) {
          let ip = pp[3 * op + 0],
            Ip = pp[3 * op + 1],
            Sp = pp[3 * op + 2];
          ip -= pp[3 * op + 3], Ip -= pp[3 * op + 4], Sp -= pp[3 * op + 5];
          Op += Math.sqrt(ip * ip + Ip * Ip + Sp * Sp), cp[op + 1] = Op
        }
        return cp
      }
      static SegmentizeSegmentByCount(pp, ip, cp) {
        const Op = [],
          op = ip.subtract(pp),
          Ip = fp.i.Zy[0];
        Ip.E_(cp);
        const Sp = fp.i.Zy[1];
        op.divideToRef(Ip, Sp);
        let xp = pp.clone();
        Op.push(xp);
        for (let Lp = 0; Lp < cp; Lp++) xp = xp.clone(), Op.push(xp.addInPlace(Sp));
        return Op
      }
      static SegmentizeLineBySegmentLength(pp, ip) {
        const cp = pp[0] instanceof fp.o ? uO.GetLineSegments(pp) : "number" === typeof pp[0] ? uO.GetLineSegments(uO.ToVector3Array(pp)) : pp,
          Op = [];
        for (const op of cp)
          if (op.length > ip) {
            const pp = uO.SegmentizeSegmentByCount(op.point1, op.point2, Math.ceil(op.length / ip));
            for (const ip of pp) Op.push(ip)
          } else Op.push(op.point1), Op.push(op.point2);
        return Op
      }
      static SegmentizeLineBySegmentCount(pp, ip) {
        const cp = "number" === typeof pp[0] ? uO.ToVector3Array(pp) : pp,
          Op = uO.GetLineLength(cp) / ip;
        return uO.SegmentizeLineBySegmentLength(cp, Op)
      }
      static GetLineSegments(pp) {
        const ip = [];
        for (let cp = 0; cp < pp.length - 1; cp++) {
          const Op = pp[cp],
            op = pp[cp + 1],
            Ip = op.subtract(Op).length();
          ip.push({
            point1: Op,
            point2: op,
            length: Ip
          })
        }
        return ip
      }
      static GetMinMaxSegmentLength(pp) {
        const ip = uO.GetLineSegments(pp).sort((pp => pp.length));
        return {
          min: ip[0].length,
          max: ip[ip.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const op = ip * cp;
        let Ip = 0,
          Sp = 0;
        const xp = pp.length;
        for (let Yp = 0; Yp < xp; Yp++) {
          if (op <= Ip + pp[Yp].length) {
            Sp = Yp;
            break
          }
          Ip += pp[Yp].length
        }
        const Lp = (op - Ip) / pp[Sp].length;
        return pp[Sp].point2.subtractToRef(pp[Sp].point1, fp.i.Zy[0]), fp.i.Zy[0].scaleToRef(Lp, fp.i.Zy[1]), Op || fp.i.Zy[1].addInPlace(pp[Sp].point1), fp.i.Zy[1].clone()
      }
      static GetCircleLinePoints(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / ip;
        const Ip = [];
        for (let Sp = 0; Sp <= ip; Sp++) Ip.push(new fp.o(Math.cos(Sp * op) * pp, Math.sin(Sp * op) * Op, cp));
        return Ip
      }
      static GetBezierLinePoints(pp, ip, cp, Op) {
        return tO.h.CreateQuadraticBezier(pp, ip, cp, Op).getPoints().flatMap((pp => [pp.x, pp.y, pp.z]))
      }
      static GetArrowCap(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [pp.clone(), pp.add(ip.multiplyByFloats(cp, cp, cp))],
          widths: [Op, op, Ip, Sp]
        }
      }
      static GetPointsFromText(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Sp = [],
          xp = eO(pp, ip, cp, Op);
        for (const Lp of xp) {
          for (const pp of Lp.paths) {
            const ip = [],
              cp = pp.getPoints();
            for (const pp of cp) ip.push(pp.x, pp.y, op);
            Sp.push(ip)
          }
          if (Ip)
            for (const pp of Lp.holes) {
              const ip = [],
                cp = pp.getPoints();
              for (const pp of cp) ip.push(pp.x, pp.y, op);
              Sp.push(ip)
            }
        }
        return Sp
      }
      static Color3toRGBAUint8(pp) {
        const ip = new Uint8Array(4 * pp.length);
        for (let cp = 0, Op = 0; cp < pp.length; cp++) ip[Op++] = 255 * pp[cp].r, ip[Op++] = 255 * pp[cp].g, ip[Op++] = 255 * pp[cp].b, ip[Op++] = 255;
        return ip
      }
      static CreateColorsTexture(pp, ip, cp, Op) {
        const op = Op.gy().getCaps().maxTextureSize ?? 1,
          Ip = ip.length > op ? op : ip.length,
          Sp = Math.ceil(ip.length / op);
        Sp > 1 && (ip = [...ip, ...Array(Ip * Sp - ip.length).fill(ip[0])]);
        const xp = uO.Color3toRGBAUint8(ip),
          Lp = new jp.b(xp, Ip, Sp, Wc.b.TEXTUREFORMAT_RGBA, Op, !1, !0, cp);
        return Lp.name = pp, Lp
      }
      static PrepareEmptyColorsTexture(pp) {
        if (!vO.EmptyColorsTexture) {
          const ip = new Uint8Array(4);
          vO.EmptyColorsTexture = new jp.b(ip, 1, 1, Wc.b.TEXTUREFORMAT_RGBA, pp, !1, !1, jp.b.NEAREST_NEAREST), vO.EmptyColorsTexture.name = "grlEmptyColorsTexture", vO.EmptyColorsTexture.Kl.addOnce((() => {
            vO.EmptyColorsTexture = null
          }))
        }
        return vO.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        vO.EmptyColorsTexture?.dispose(), vO.EmptyColorsTexture = null
      }
      static BooleanToNumber(pp) {
        return pp ? 1 : 0
      }
    }
    class jO extends hp.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class kO extends ap.b {
      isCompatible(pp) {
        return !0
      }
      constructor(pp, ip, cp) {
        cp = cp || {
          color: vO.DEFAULT_COLOR
        };
        const Op = new jO;
        Op.GREASED_LINE_HAS_COLOR = !!cp.color && !cp.useColors, Op.GREASED_LINE_SIZE_ATTENUATION = cp.sizeAttenuation ?? !1, Op.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === cp.colorDistributionType, Op.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (ip ?? pp.Gl()).useRightHandedSystem, Op.GREASED_LINE_CAMERA_FACING = cp.cameraFacing ?? !0, super(pp, kO.GREASED_LINE_MATERIAL_NAME, 200, Op, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = cp?.forceGLSL || kO.ForceGLSL, this._scene = ip ?? pp.Gl(), this._engine = this._scene.gy(), this._cameraFacing = cp.cameraFacing ?? !0, this.visibility = cp.visibility ?? 1, this.useDash = cp.useDash ?? !1, this.dashRatio = cp.dashRatio ?? .5, this.dashOffset = cp.dashOffset ?? 0, this.width = cp.width ? cp.width : cp.sizeAttenuation ? vO.DEFAULT_WIDTH_ATTENUATED : vO.DEFAULT_WIDTH, this._sizeAttenuation = cp.sizeAttenuation ?? !1, this.colorMode = cp.colorMode ?? 0, this._color = cp.color ?? null, this.useColors = cp.useColors ?? !1, this._colorsDistributionType = cp.colorDistributionType ?? 0, this.colorsSampling = cp.colorsSampling ?? jp.b.NEAREST_NEAREST, this._colors = cp.colors ?? null, this.dashCount = cp.dashCount ?? 1, this.resolution = cp.resolution ?? new fp.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), cp.colorsTexture ? this.colorsTexture = cp.colorsTexture : this._colors ? this.colorsTexture = uO.CreateColorsTexture(`${pp.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? vO.DEFAULT_COLOR, uO.PrepareEmptyColorsTexture(this._scene)), this._engine.Kl.add((() => {
          uO.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(pp) {
        pp.push("grl_offsets"), pp.push("grl_widths"), pp.push("grl_colorPointers"), pp.push("grl_counters"), this._cameraFacing ? (pp.push("grl_previousAndSide"), pp.push("grl_nextAndCounters")) : pp.push("grl_slopes")
      }
      getSamplers(pp) {
        pp.push("grl_colors")
      }
      getActiveTextures(pp) {
        this.colorsTexture && pp.push(this.colorsTexture)
      }
      getUniforms() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ip = [{
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
        return this._cameraFacing && ip.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === pp && ip.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: ip,
          vertex: this._cameraFacing && this._isGLSL(pp) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(pp) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(pp) {
        if (this._cameraFacing) {
          pp.I3("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || pp.I3("viewProjection", this._scene.getTransformMatrix());
          const ip = fp.i.Vector4[0];
          ip.x = this._aspect, ip.y = this._resolution.x, ip.z = this._resolution.y, ip.w = this.width, pp.updateVector4("grl_aspect_resolution_lineWidth", ip)
        }
        const ip = fp.i.Vector4[0];
        ip.x = uO.BooleanToNumber(this.useDash), ip.y = this._dashArray, ip.z = this.dashOffset, ip.w = this.dashRatio, pp.updateVector4("grl_dashOptions", ip);
        const cp = fp.i.Vector4[1];
        cp.x = this.colorMode, cp.y = this.visibility, cp.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, cp.w = uO.BooleanToNumber(this.useColors), pp.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", cp), this._color && pp.updateColor3("grl_singleColor", this._color);
        const Op = this.colorsTexture ?? vO.EmptyColorsTexture;
        pp.setTexture("grl_colors", Op), pp.updateFloat2("grl_textureSize", Op?.getSize().width ?? 1, Op?.getSize().height ?? 1)
      }
      prepareDefines(pp, ip, cp) {
        pp.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, pp.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, pp.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, pp.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = ip.useRightHandedSystem, pp.GREASED_LINE_CAMERA_FACING = this._cameraFacing, pp.GREASED_LINE_USE_OFFSETS = !!cp.offsets
      }
      getClassName() {
        return kO.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(ip) ? function(pp, ip) {
          if ("vertex" === pp) {
            const pp = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return ip && (pp["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), pp
          }
          return "fragment" === pp ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(pp, this._cameraFacing) : function(pp, ip) {
          if ("vertex" === pp) {
            const pp = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return ip && (pp["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), pp
          }
          return "fragment" === pp ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(pp, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(pp) {
        this.setColors(pp)
      }
      setColors(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this._colors?.length ?? 0;
        if (this._colors = pp, null !== pp && 0 !== pp.length) {
          if (!ip || cp)
            if (this.colorsTexture && Op === pp.length && !cp) {
              const ip = uO.Color3toRGBAUint8(pp);
              this.colorsTexture.update(ip)
            } else this.colorsTexture?.dispose(), this.colorsTexture = uO.CreateColorsTexture(`${this._material.name}-colors-texture`, pp, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(pp) {
        this._dashCount = pp, this._dashArray = 1 / pp
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(pp) {
        this._sizeAttenuation = pp, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(pp) {
        this.setColor(pp)
      }
      setColor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== pp || null !== this._color && null === pp ? (this._color = pp, ip || this.markAllDefinesAsDirty()) : this._color = pp
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(pp) {
        this._colorsDistributionType = pp, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(pp) {
        this._aspect = pp.x / pp.y, this._resolution = pp
      }
      serialize() {
        const pp = super.serialize(),
          ip = {
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
        return this._colors && (ip.colors = this._colors), this._color && (ip.color = this._color), pp.greasedLineMaterialOptions = ip, pp
      }
      parse(pp, ip, cp) {
        super.parse(pp, ip, cp);
        const Op = pp.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Op.color && this.setColor(Op.color, !0), Op.colorDistributionType && (this.colorsDistributionType = Op.colorDistributionType), Op.colors && (this.colors = Op.colors), Op.colorsSampling && (this.colorsSampling = Op.colorsSampling), Op.colorMode && (this.colorMode = Op.colorMode), Op.useColors && (this.useColors = Op.useColors), Op.visibility && (this.visibility = Op.visibility), Op.useDash && (this.useDash = Op.useDash), Op.dashCount && (this.dashCount = Op.dashCount), Op.dashRatio && (this.dashRatio = Op.dashRatio), Op.dashOffset && (this.dashOffset = Op.dashOffset), Op.width && (this.width = Op.width), Op.sizeAttenuation && (this.sizeAttenuation = Op.sizeAttenuation), Op.resolution && (this.resolution = Op.resolution), this.colors ? this.colorsTexture = uO.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, ip) : uO.PrepareEmptyColorsTexture(ip), this.markAllDefinesAsDirty()
      }
      copyTo(pp) {
        const ip = pp;
        ip.colorsTexture?.dispose(), this._colors && (ip.colorsTexture = uO.CreateColorsTexture(`${ip._material.name}-colors-texture`, this._colors, ip.colorsSampling, this._scene)), ip.setColor(this.color, !0), ip.colorsDistributionType = this.colorsDistributionType, ip.colorsSampling = this.colorsSampling, ip.colorMode = this.colorMode, ip.useColors = this.useColors, ip.visibility = this.visibility, ip.useDash = this.useDash, ip.dashCount = this.dashCount, ip.dashRatio = this.dashRatio, ip.dashOffset = this.dashOffset, ip.width = this.width, ip.sizeAttenuation = this.sizeAttenuation, ip.resolution = this.resolution, ip.markAllDefinesAsDirty()
      }
      _isGLSL(pp) {
        return 0 === pp || this._forceGLSL
      }
    }
    kO.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", kO.ForceGLSL = !1;
    var mO = cp(40577),
      RO = cp(40589),
      qO = cp(38900),
      MO = cp(40647),
      CO = cp(40042);
    class EO extends MO.q {
      constructor(pp, ip, Op) {
        const op = ip.gy(),
          Ip = op.isWebGPU && !(Op.forceGLSL || EO.ForceGLSL),
          Sp = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        ip.useRightHandedSystem && Sp.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const xp = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Op.cameraFacing ? (Sp.push("GREASED_LINE_CAMERA_FACING"), xp.push("grl_previousAndSide", "grl_nextAndCounters")) : (xp.push("grl_slopes"), xp.push("grl_counters"));
        const Lp = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Ip || Lp.push("world", "viewProjection", "view", "projection"), super(pp, ip, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Ip ? ["Scene", "Mesh"] : void 0,
            attributes: xp,
            uniforms: Lp,
            samplers: Ip ? [] : ["grlColors"],
            defines: Sp,
            extraInitializationsAsync: async () => {
              Ip ? await Promise.all([cp.e(339).then((() => cp(61955))), cp.e(395).then((() => cp(61964)))]) : await Promise.all([cp.e(332).then((() => cp(61972))), cp.e(396).then((() => cp(61978)))])
            },
            shaderLanguage: Ip ? 1 : 0
          }), this._color = Gp.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Op = Op || {
            color: vO.DEFAULT_COLOR
          }, this.visibility = Op.visibility ?? 1, this.useDash = Op.useDash ?? !1, this.dashRatio = Op.dashRatio ?? .5, this.dashOffset = Op.dashOffset ?? 0, this.dashCount = Op.dashCount ?? 1, this.width = Op.width ? Op.width : Op.sizeAttenuation && Op.cameraFacing ? vO.DEFAULT_WIDTH_ATTENUATED : vO.DEFAULT_WIDTH, this.sizeAttenuation = Op.sizeAttenuation ?? !1, this.color = Op.color ?? Gp.d.White(), this.useColors = Op.useColors ?? !1, this.colorsDistributionType = Op.colorDistributionType ?? 0, this.colorsSampling = Op.colorsSampling ?? jp.b.NEAREST_NEAREST, this.colorMode = Op.colorMode ?? 0, this._colors = Op.colors ?? null, this._cameraFacing = Op.cameraFacing ?? !0, this.resolution = Op.resolution ?? new fp.l(op.getRenderWidth(), op.getRenderHeight()), Op.colorsTexture ? this.colorsTexture = Op.colorsTexture : this._colors ? this.colorsTexture = uO.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, ip) : (this._color = this._color ?? vO.DEFAULT_COLOR, this.colorsTexture = uO.PrepareEmptyColorsTexture(ip)), Ip) {
          const pp = new CO.c;
          pp.setParameters(), pp.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", pp)
        }
        op.Kl.add((() => {
          uO.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== vO.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new fp.l(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(pp) {
        this.setColors(pp)
      }
      setColors(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = this._colors?.length ?? 0;
        if (this._colors = pp, null !== pp && 0 !== pp.length) {
          if (!ip || cp)
            if (this._colorsTexture && Op === pp.length && !cp) {
              const ip = uO.Color3toRGBAUint8(pp);
              this._colorsTexture.update(ip)
            } else this._colorsTexture && this._colorsTexture !== vO.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = uO.CreateColorsTexture(`${this.name}-colors-texture`, pp, this.colorsSampling, this.Gl())
        } else {
          this._colorsTexture && this._colorsTexture !== vO.EmptyColorsTexture && this._colorsTexture.dispose();
          const pp = this.Gl();
          pp && (this.colorsTexture = uO.PrepareEmptyColorsTexture(pp))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(pp) {
        this._colorsTexture = pp, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(pp) {
        this._width = pp, this.setFloat("grlWidth", pp)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(pp) {
        this._useColors = pp, this.setFloat("grlUseColors", uO.BooleanToNumber(pp))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(pp) {
        this._colorsSampling = pp
      }
      get visibility() {
        return this._visibility
      }
      set visibility(pp) {
        this._visibility = pp, this.setFloat("grlVisibility", pp)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(pp) {
        this._useDash = pp, this.setFloat("grlUseDash", uO.BooleanToNumber(pp))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(pp) {
        this._dashOffset = pp, this.setFloat("grlDashOffset", pp)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(pp) {
        this._dashRatio = pp, this.setFloat("grlDashRatio", pp)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(pp) {
        this._dashCount = pp, this._dashArray = 1 / pp, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(pp) {
        this._sizeAttenuation = pp, this.setFloat("grlSizeAttenuation", uO.BooleanToNumber(pp))
      }
      get color() {
        return this._color
      }
      set color(pp) {
        this.setColor(pp)
      }
      setColor(pp) {
        pp = pp ?? vO.DEFAULT_COLOR, this._color = pp, this.setColor3("grlColor", pp)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(pp) {
        this._colorsDistributionType = pp, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(pp) {
        this._colorMode = pp, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(pp) {
        this._resolution = pp, this.setVector2("grlResolution", pp), this.setFloat("grlAspect", pp.x / pp.y)
      }
      serialize() {
        const pp = super.serialize(),
          ip = {
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
        return this._colors && (ip.colors = this._colors), pp.greasedLineMaterialOptions = ip, pp
      }
      parse(pp, ip, cp) {
        const Op = pp.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Op.color && (this.color = Op.color), Op.colorDistributionType && (this.colorsDistributionType = Op.colorDistributionType), Op.colorsSampling && (this.colorsSampling = Op.colorsSampling), Op.colorMode && (this.colorMode = Op.colorMode), Op.useColors && (this.useColors = Op.useColors), Op.visibility && (this.visibility = Op.visibility), Op.useDash && (this.useDash = Op.useDash), Op.dashCount && (this.dashCount = Op.dashCount), Op.dashRatio && (this.dashRatio = Op.dashRatio), Op.dashOffset && (this.dashOffset = Op.dashOffset), Op.width && (this.width = Op.width), Op.sizeAttenuation && (this.sizeAttenuation = Op.sizeAttenuation), Op.resolution && (this.resolution = Op.resolution), Op.colors ? this.colorsTexture = uO.CreateColorsTexture(`${this.name}-colors-texture`, Op.colors, this.colorsSampling, this.Gl()) : this.colorsTexture = uO.PrepareEmptyColorsTexture(ip), this._cameraFacing = Op.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var XO, lO, QO;
    EO.ForceGLSL = !1,
      function(pp) {
        pp[pp.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", pp[pp.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(XO || (XO = {})),
      function(pp) {
        pp[pp.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", pp[pp.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", pp[pp.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(lO || (lO = {})),
      function(pp) {
        pp[pp.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", pp[pp.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", pp[pp.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", pp[pp.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", pp[pp.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(QO || (QO = {}));
    class JO extends mO.d {
      constructor(pp, ip, cp) {
        super(pp, ip, null, null, !1, !1), this.name = pp, this._options = cp, this._lazy = !1, this._updatable = !1, this._engine = ip.gy(), this._lazy = cp.lazy ?? !1, this._updatable = cp.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = cp.colorPointers ?? [], this._widths = cp.widths ?? new Array(cp.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(pp) {
        let ip = 0;
        for (const Op of this._points) ip += Op.length;
        const cp = ip / 3 * 2 - this._widths.length;
        for (let Op = 0; Op < cp; Op++) this._widths.push(pp)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.sy && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(pp, ip) {
        for (const cp of pp) this._points.push(cp);
        this._lazy || this.setPoints(this._points, ip)
      }
      dispose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(pp, ip)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(pp) {
        this._uvs = pp instanceof Float32Array ? pp : new Float32Array(pp), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(pp) {
        this.material instanceof EO && this.material.setDefine("GREASED_LINE_USE_OFFSETS", pp?.length > 0), this._offsets = pp, this._offsetsBuffer ? this._offsetsBuffer.update(pp) : this._createOffsetsBuffer(pp)
      }
      get widths() {
        return this._widths
      }
      set widths(pp) {
        this._widths = pp, this._lazy || this._widthsBuffer && this._widthsBuffer.update(pp)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(pp) {
        this._colorPointers = pp, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(pp)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof EO) return this.material;
        const pp = this.material?.pluginManager?.getPlugin(kO.GREASED_LINE_MATERIAL_NAME);
        return pp || void 0
      }
      get points() {
        const pp = [];
        return qO.e.DeepCopy(this._points, pp), pp
      }
      setPoints(pp, ip) {
        this._points = uO.ConvertPoints(pp, ip?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), ip?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, ip)
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
      serialize(pp) {
        super.serialize(pp), pp.type = this.getClassName(), pp.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new RO.d;
        return ip.positions = this._vertexPositions, ip.indices = this._indices, ip.uvs = this._uvs, pp && (ip.normals = [], RO.d.ComputeNormals(this._vertexPositions, this._indices, ip.normals)), ip.applyToMesh(this, this._options.updatable), ip
      }
      _createOffsetsBuffer(pp) {
        const ip = this._scene.gy(),
          cp = new bp.b(ip, pp, this._updatable, 3);
        this.setVerticesBuffer(cp.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = cp
      }
    }
    class BO {
      constructor(pp, ip) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = pp, this.wasAddedByNoopNode = ip
      }
      getIndicesAccessor(pp, ip, cp, Op, op) {
        return this._indicesAccessorMap.get(pp)?.get(ip)?.get(cp)?.get(Op)?.get(op)
      }
      setIndicesAccessor(pp, ip, cp, Op, op, Ip) {
        let Sp = this._indicesAccessorMap.get(pp);
        Sp || (Sp = new Map, this._indicesAccessorMap.set(pp, Sp));
        let xp = Sp.get(ip);
        xp || (xp = new Map, Sp.set(ip, xp));
        let Lp = xp.get(cp);
        Lp || (Lp = new Map, xp.set(cp, Lp));
        let Yp = Lp.get(Op);
        Yp || (Yp = new Map, Lp.set(Op, Yp)), Yp.set(op, Ip)
      }
      pushExportedNode(pp) {
        this._exportedNodes.has(pp) || this._exportedNodes.add(pp)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(pp) {
        return this._vertexBufferViewMap.get(pp)
      }
      setVertexBufferView(pp, ip) {
        this._vertexBufferViewMap.set(pp, ip)
      }
      setRemappedBufferView(pp, ip, cp) {
        this._remappedBufferView.set(pp, new Map), this._remappedBufferView.get(pp).set(ip, cp)
      }
      getRemappedBufferView(pp, ip) {
        return this._remappedBufferView.get(pp)?.get(ip)
      }
      getVertexAccessor(pp, ip, cp) {
        return this._vertexAccessorMap.get(pp)?.get(ip)?.get(cp)
      }
      setVertexAccessor(pp, ip, cp, Op) {
        let op = this._vertexAccessorMap.get(pp);
        op || (op = new Map, this._vertexAccessorMap.set(pp, op));
        let Ip = op.get(ip);
        Ip || (Ip = new Map, op.set(ip, Ip)), Ip.set(cp, Op)
      }
      hasVertexColorAlpha(pp) {
        return this._vertexMapColorAlpha.get(pp) || !1
      }
      setHasVertexColorAlpha(pp, ip) {
        return this._vertexMapColorAlpha.set(pp, ip)
      }
      getMesh(pp) {
        return this._meshMap.get(pp)
      }
      setMesh(pp, ip) {
        this._meshMap.set(pp, ip)
      }
      bindMorphDataToMesh(pp, ip) {
        const cp = this._meshMorphTargetMap.get(pp) || [];
        this._meshMorphTargetMap.set(pp, cp), -1 === cp.indexOf(ip) && cp.push(ip)
      }
      getMorphTargetsFromMesh(pp) {
        return this._meshMorphTargetMap.get(pp)
      }
    }
    class NO {
      _ApplyExtension(pp, ip, cp, Op) {
        if (cp >= ip.length) return Promise.resolve(pp);
        const op = Op(ip[cp], pp);
        return op ? op.then((async pp => pp ? await this._ApplyExtension(pp, ip, cp + 1, Op) : null)) : this._ApplyExtension(pp, ip, cp + 1, Op)
      }
      _ApplyExtensions(pp, ip) {
        const cp = [];
        for (const Op of NO._ExtensionNames) cp.push(this._extensions[Op]);
        return this._ApplyExtension(pp, cp, 0, ip)
      }
      _extensionsPostExportNodeAsync(pp, ip, cp, Op, op) {
        return this._ApplyExtensions(ip, ((ip, Ip) => ip.postExportNodeAsync && ip.postExportNodeAsync(pp, Ip, cp, Op, op, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(pp, ip, cp) {
        return this._ApplyExtensions(ip, ((ip, Op) => ip.postExportMaterialAsync && ip.postExportMaterialAsync(pp, Op, cp)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        return await Promise.all(NO._ExtensionNames.map((async op => {
          const Ip = this._extensions[op];
          if (Ip.postExportMaterialAdditionalTexturesAsync) {
            const op = await Ip.postExportMaterialAdditionalTexturesAsync(pp, ip, cp);
            Op.push(...op)
          }
        }))), Op
      }
      _extensionsPostExportTextures(pp, ip, cp) {
        for (const Op of NO._ExtensionNames) {
          const op = this._extensions[Op];
          op.postExportTexture && op.postExportTexture(pp, ip, cp)
        }
      }
      _extensionsPostExportMeshPrimitive(pp) {
        for (const ip of NO._ExtensionNames) {
          const cp = this._extensions[ip];
          cp.postExportMeshPrimitive && cp.postExportMeshPrimitive(pp, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const pp of NO._ExtensionNames) {
          const ip = this._extensions[pp];
          ip.preGenerateBinaryAsync && await ip.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(pp) {
        for (const ip of NO._ExtensionNames) {
          const cp = this._extensions[ip];
          cp.enabled && pp(cp)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((pp => {
          var ip, cp, Op;
          pp.wasUsed && ((ip = this._glTF).extensionsUsed || (ip.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(pp.name) && this._glTF.extensionsUsed.push(pp.name), pp.required && ((cp = this._glTF).extensionsRequired || (cp.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(pp.name) && this._glTF.extensionsRequired.push(pp.name)), (Op = this._glTF).extensions || (Op.extensions = {}), pp.onExporting && pp.onExporting())
        }))
      }
      _loadExtensions() {
        for (const pp of NO._ExtensionNames) {
          const ip = NO._ExtensionFactories[pp](this);
          this._extensions[pp] = ip
        }
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up.e.LastCreatedScene,
          ip = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${yp.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new lc(this), this._extensions = {}, this._bufferManager = new IO, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !pp) throw new Error("No scene available to export");
        this._babylonScene = pp, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: pp => pp?.sE?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...ip
        }, this._loadExtensions()
      }
      dispose() {
        for (const pp in this._extensions) {
          this._extensions[pp].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        NO.UnregisterExtension(pp) && op.Tools.Warn(`Extension with the name ${pp} already exists`), NO._ExtensionFactories[pp] = ip;
        const Op = cp ?? 0;
        NO._ExtensionOrders[pp] = Op;
        let Ip = NO._ExtensionNames.length;
        for (let op = 0; op < NO._ExtensionNames.length; op++) {
          const pp = NO._ExtensionNames[op];
          if (Op < NO._ExtensionOrders[pp]) {
            Ip = op;
            break
          }
        }
        NO._ExtensionNames.splice(Ip, 0, pp)
      }
      static UnregisterExtension(pp) {
        if (!NO._ExtensionFactories[pp]) return !1;
        delete NO._ExtensionFactories[pp], delete NO._ExtensionOrders[pp];
        const ip = NO._ExtensionNames.indexOf(pp);
        return -1 !== ip && NO._ExtensionNames.splice(ip, 1), !0
      }
      _generateJSON(pp, ip, cp) {
        const Op = {
          byteLength: pp
        };
        return Op.byteLength && (this._glTF.buffers = [Op]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.pw = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Op.uri = ip + ".bin"), cp ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(pp) {
        const ip = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cp = this._generateJSON(ip.byteLength, pp, !0),
          Op = new Blob([ip], {
            type: "application/octet-stream"
          }),
          op = pp + ".gltf",
          Ip = pp + ".bin",
          Sp = new Yp;
        if (Sp.files[op] = cp, Sp.files[Ip] = Op, this._imageData)
          for (const xp in this._imageData) Sp.files[xp] = this._imageData[xp];
        return Sp
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(pp) {
        const ip = pp % 4;
        return 0 === ip ? ip : 4 - ip
      }
      async generateGLBAsync(pp) {
        this._shouldUseGlb = !0;
        const ip = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cp = this._generateJSON(ip.byteLength),
          Op = pp + ".glb";
        let op, Ip = cp.length;
        if ("undefined" !== typeof TextEncoder) {
          op = (new TextEncoder).encode(cp), Ip = op.length
        }
        const Sp = this._getPadding(Ip),
          xp = this._getPadding(ip.byteLength),
          Lp = 28 + Ip + Sp + ip.byteLength + xp,
          Dp = new OO(Lp);
        if (Dp.writeUInt32(1179937895), Dp.writeUInt32(2), Dp.writeUInt32(Lp), Dp.writeUInt32(Ip + Sp), Dp.writeUInt32(1313821514), op) Dp.writeTypedArray(op);
        else {
          const pp = "_".charCodeAt(0);
          for (let ip = 0; ip < Ip; ++ip) {
            const Op = cp.charCodeAt(ip);
            Op != cp.codePointAt(ip) ? Dp.writeUInt8(pp) : Dp.writeUInt8(Op)
          }
        }
        for (let Yp = 0; Yp < Sp; ++Yp) Dp.writeUInt8(32);
        Dp.writeUInt32(ip.byteLength + xp), Dp.writeUInt32(5130562), Dp.writeTypedArray(ip);
        for (let Yp = 0; Yp < xp; ++Yp) Dp.writeUInt8(0);
        const Ap = new Yp;
        return Ap.files[Op] = new Blob([Dp.getOutputData()], {
          type: "application/octet-stream"
        }), Ap
      }
      _setNodeTransformation(pp, ip, cp) {
        if (ip.getPivotPoint().equalsWithEpsilon(fc, Bc.b) || op.Tools.Warn("Pivot points are not supported in the glTF serializer"), !ip.position.equalsWithEpsilon(fc, Bc.b)) {
          const op = Op.TmpVectors.Zy[0].rM(ip.position);
          cp && rc(op), pp.translation = op.BOp()
        }
        ip.ei.equalsWithEpsilon(hc, Bc.b) || (pp.scale = ip.ei.BOp());
        const Ip = ip.rotationQuaternion?.clone() || Op.Quaternion.FromEulerAngles(ip.rotation.x, ip.rotation.y, ip.rotation.z);
        Ip.equalsWithEpsilon(bc, Bc.b) || (cp && Zc(Ip), pp.rotation = Ip.normalize().BOp())
      }
      _setCameraTransformation(pp, ip, cp) {
        const op = Op.TmpVectors.Zy[0],
          Ip = Op.TmpVectors.Quaternion[0],
          Sp = ip.getWorldMatrix();
        if (ip.parent) {
          const pp = ip.parent.getWorldMatrix().invertToRef(Op.TmpVectors.Matrix[0]);
          Sp.multiplyToRef(pp, Op.TmpVectors.Matrix[1]).decompose(void 0, Ip, op)
        } else Sp.decompose(void 0, Ip, op);
        op.equalsWithEpsilon(fc, Bc.b) || (cp && rc(op), pp.translation = op.BOp()), cp && Zc(Ip), this._babylonScene.useRightHandedSystem || zc(Ip), Ip.equalsWithEpsilon(bc, Bc.b) || (pp.rotation = Ip.BOp())
      }
      _listAvailableCameras() {
        for (const pp of this._babylonScene.cameras) {
          const ip = {
            type: pp.mode === SO.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (pp.name && (ip.name = pp.name), "perspective" === ip.type) ip.perspective = {
            aspectRatio: pp.gy().getAspectRatio(pp),
            yfov: pp.fovMode === SO.d.FOVMODE_VERTICAL_FIXED ? pp.fov : pp.fov * pp.gy().getAspectRatio(pp),
            znear: pp.minZ,
            zfar: pp.maxZ
          };
          else if ("orthographic" === ip.type) {
            const cp = pp.orthoLeft && pp.orthoRight ? .5 * (pp.orthoRight - pp.orthoLeft) : .5 * pp.gy().getRenderWidth(),
              Op = pp.orthoBottom && pp.orthoTop ? .5 * (pp.orthoTop - pp.orthoBottom) : .5 * pp.gy().getRenderHeight();
            ip.orthographic = {
              xmag: cp,
              ymag: Op,
              znear: pp.minZ,
              zfar: pp.maxZ
            }
          }
          this._camerasMap.set(pp, ip)
        }
      }
      _exportAndAssignCameras() {
        const pp = Array.from(this._camerasMap.values());
        for (const ip of pp) {
          const pp = this._nodesCameraMap.get(ip);
          if (void 0 !== pp) {
            this._cameras.push(ip);
            for (const ip of pp) ip.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const pp of this._babylonScene.skeletons) {
          if (pp.bones.length <= 0) continue;
          const ip = {
            joints: []
          };
          this._skinMap.set(pp, ip)
        }
      }
      _exportAndAssignSkeletons(pp) {
        for (const cp of this._babylonScene.skeletons) {
          if (cp.bones.length <= 0) continue;
          const Ip = this._skinMap.get(cp);
          if (void 0 == Ip) continue;
          const Sp = {};
          let xp = -1;
          for (let pp = 0; pp < cp.bones.length; ++pp) {
            const ip = cp.bones[pp],
              Op = ip.getIndex() ?? pp; - 1 !== Op && (Sp[Op] = ip, Op > xp && (xp = Op))
          }
          const Lp = [];
          for (let cp = 0; cp <= xp; ++cp) {
            const xp = Sp[cp],
              Yp = xp.getTransformNode(),
              Dp = Yp ? this._nodeMap.get(Yp) : void 0;
            if (void 0 === Dp) {
              op.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Ip.joints.push(Dp);
            const Ap = xp.getAbsoluteInverseBindMatrix().clone();
            pp.has(Yp) && (ip = Ap, Nc.invertToRef(Op.TmpVectors.Matrix[0]).multiplyToRef(ip, ip).multiplyToRef(Nc, ip)), Lp.push(Ap)
          }
          const Yp = this._nodesSkinMap.get(Ip);
          if (Ip.joints.length > 0 && void 0 !== Yp) {
            const pp = new Float32Array(16 * Lp.length);
            Lp.forEach(((ip, cp) => {
              pp.set(ip.m, 16 * cp)
            }));
            const ip = this._bufferManager.createBufferView(pp);
            this._accessors.push(this._bufferManager.createAccessor(ip, "MAT4", 5126, Lp.length)), Ip.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Ip);
            const cp = this._skins.length - 1;
            for (const Op of Yp) Op.skin = cp
          }
        }
        var ip
      }
      async _exportSceneAsync() {
        const pp = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const ip = this._options.metadataSelector(this._babylonScene.metadata);
          ip && (pp.extras = ip)
        }
        const ip = new Array,
          cp = new Array,
          Op = new Array,
          op = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Ip;
        if (op && !this._options.includeCoordinateSystemConversionNodes)
          for (const Yp of this._babylonScene.animationGroups)
            for (const pp of Yp.targetedAnimations) {
              const ip = pp.target;
              ip instanceof Ap.b && !ip.parent && (Ip ?? (Ip = new Set)).add(ip)
            }
        for (const Yp of this._babylonScene.rootNodes) {
          const pp = Yp.animations,
            Sp = !!pp && pp.length > 0 || Ip?.has(Yp);
          op && !this._options.includeCoordinateSystemConversionNodes && Tc(Yp, this._babylonScene.useRightHandedSystem) && !Sp ? Op.push(...Yp.getChildren()) : this._babylonScene.useRightHandedSystem ? ip.push(Yp) : cp.push(Yp)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Sp = new BO(!0, !1);
        pp.nodes.push(...await this._exportNodesAsync(cp, Sp));
        const xp = new BO(!1, !1);
        pp.nodes.push(...await this._exportNodesAsync(ip, xp));
        const Lp = new BO(!1, !0);
        pp.nodes.push(...await this._exportNodesAsync(Op, Lp)), pp.nodes.length && this._scenes.push(pp), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Sp.getNodesSet()), this._babylonScene.animationGroups.length && yO._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Sp.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(pp) {
        return this._nodeMap.get(pp)
      }
      _getAnimationIndex(pp) {
        return this._animationGroupMap.get(pp)
      }
      _getCameraIndex(pp) {
        const ip = this._camerasMap.get(pp);
        if (!ip) return;
        const cp = this._cameras.indexOf(ip);
        return cp >= 0 ? cp : void 0
      }
      _getMaterialIndex(pp) {
        return this._materialMap.get(pp)
      }
      _getRootIndex(pp, ip) {
        switch (pp) {
          case "nodes":
            return this._getNodeIndex(ip);
          case "animations":
            return this._getAnimationIndex(ip);
          case "cameras":
            return this._getCameraIndex(ip);
          case "materials":
            return this._getMaterialIndex(ip);
          case "meshes": {
            const pp = this._getNodeIndex(ip);
            return void 0 === pp ? void 0 : this._nodes[pp]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(ip)?.index;
          case "images": {
            const pp = this._materialExporter.getTextureInfo(ip)?.index;
            if (void 0 === pp) return;
            const cp = this._textures[pp];
            for (const ip of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const pp = cp?.extensions?.[ip]?.source;
              if ("number" === typeof pp) return pp
            }
            return cp?.source
          }
          case "samplers": {
            const pp = this._materialExporter.getTextureInfo(ip)?.index;
            return void 0 === pp ? void 0 : this._textures[pp]?.sampler
          }
          case "skins": {
            const pp = this._skinMap.get(ip),
              cp = pp ? this._skins.indexOf(pp) : -1;
            return cp >= 0 ? cp : void 0
          }
          case "scenes":
            return ip === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(pp, ip, cp) {
        const Op = this._nodes[pp];
        if (!Op) throw new Error(`Cannot write ${ip}: glTF node ${pp} does not exist.`);
        Op.extensions || (Op.extensions = {}), Op.extensions[ip] = cp
      }
      _shouldExportNode(pp) {
        let ip = this._shouldExportNodeMap.get(pp);
        return void 0 === ip && (ip = this._options.shouldExportNode(pp), this._shouldExportNodeMap.set(pp, ip)), ip
      }
      async _exportNodesAsync(pp, ip) {
        const cp = new Array;
        this._exportBuffers(pp, ip);
        for (const Op of pp) await this._exportNodeAsync(Op, cp, ip);
        return cp
      }
      _collectBuffers(pp, ip, cp, Op, op) {
        if (this._shouldExportNode(pp) && pp instanceof Pp.e && pp.geometry) {
          const Ip = pp.geometry.getVertexBuffers();
          if (Ip)
            for (const Op in Ip) {
              if (!gc(Op)) continue;
              const Sp = Ip[Op];
              op.setHasVertexColorAlpha(Sp, pp.hasVertexAlpha);
              const xp = Sp._buffer,
                Lp = ip.get(xp) || [];
              ip.set(xp, Lp), -1 === Lp.indexOf(Sp) && Lp.push(Sp);
              const Yp = cp.get(Sp) || [];
              cp.set(Sp, Yp), -1 === Yp.indexOf(pp) && Yp.push(pp)
            }
          const Sp = pp.morphTargetManager;
          if (Sp)
            for (let ip = 0; ip < Sp.numTargets; ip++) {
              const cp = Sp.getTarget(ip),
                op = Op.get(cp) || [];
              Op.set(cp, op), -1 === op.indexOf(pp) && op.push(pp)
            }
        }
        for (const Ip of pp.getChildren()) this._collectBuffers(Ip, ip, cp, Op, op)
      }
      _exportBuffers(pp, ip) {
        const cp = new Map,
          Op = new Map,
          op = new Map;
        for (const xp of pp) this._collectBuffers(xp, cp, Op, op, ip);
        const Ip = Array.from(cp.keys());
        for (const xp of Ip) {
          const pp = xp.getData();
          if (!pp) throw new Error("Buffer data is not available");
          const op = cp.get(xp);
          if (!op) continue;
          const Ip = op[0].byteStride;
          if (op.some((pp => pp.byteStride !== Ip))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Sp = Vc(pp).slice();
          for (const ip of op) {
            const pp = Op.get(ip),
              {
                byteOffset: cp,
                byteStride: op,
                componentCount: Ip,
                type: xp,
                count: Lp,
                normalized: Yp,
                kind: Ap
              } = nc(ip, pp);
            switch (Ap) {
              case Dp.f.NormalKind:
              case Dp.f.TangentKind:
                (0, Qc.f)(Sp, cp, op, Ip, xp, Lp, Yp, (pp => {
                  const ip = Math.sqrt(pp[0] * pp[0] + pp[1] * pp[1] + pp[2] * pp[2]);
                  if (ip > 0) {
                    const cp = 1 / ip;
                    pp[0] *= cp, pp[1] *= cp, pp[2] *= cp
                  }
                }));
                break;
              case Dp.f.ColorKind: {
                const ip = pp.filter((pp => pp.material instanceof LO.StandardMaterial || null == pp.material)).length;
                if (0 == ip) break;
                if (ip != pp.length) {
                  Mp.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                xp == Dp.f.UNSIGNED_BYTE && Mp.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Op = new wp.Color3,
                  Ap = new wp.b,
                  Pp = this._babylonScene.gy().useExactSrgbConversions;
                (0, Qc.f)(Sp, cp, op, Ip, xp, Lp, Yp, (pp => {
                  3 === pp.length ? (Op.vcp(pp, 0), Op.toLinearSpaceToRef(Op, Pp), Op.toArray(pp, 0)) : (Ap.vcp(pp, 0), Ap.toLinearSpaceToRef(Ap, Pp), Ap.toArray(pp, 0))
                }))
              }
            }
          }
          if (ip.convertToRightHanded) {
            for (const pp of op) {
              const ip = Op.get(pp),
                {
                  byteOffset: cp,
                  byteStride: op,
                  componentCount: Ip,
                  type: xp,
                  count: Lp,
                  normalized: Yp,
                  kind: Ap
                } = nc(pp, ip);
              switch (Ap) {
                case Dp.f.PositionKind:
                case Dp.f.NormalKind:
                case Dp.f.TangentKind:
                  (0, Qc.f)(Sp, cp, op, Ip, xp, Lp, Yp, (pp => {
                    pp[0] = -pp[0]
                  }))
              }
            }
            ip.convertedToRightHandedBuffers.set(xp, Sp)
          }
          const Lp = this._bufferManager.createBufferView(Sp, Ip);
          ip.setVertexBufferView(xp, Lp);
          const Yp = new Map;
          for (const ip of op) {
            const pp = Op.get(ip),
              {
                kind: cp,
                totalVertices: op
              } = nc(ip, pp);
            switch (cp) {
              case Dp.f.MatricesIndicesKind:
              case Dp.f.MatricesIndicesExtraKind:
                if (ip.type == Dp.f.FLOAT) {
                  const pp = ip.getFloatData(op);
                  null !== pp && Yp.set(ip, pp)
                }
            }
          }
          0 !== Yp.size && Mp.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Ap = Array.from(Yp.keys());
          for (const cp of Ap) {
            const pp = Yp.get(cp);
            if (!pp) continue;
            const Op = pp.some((pp => pp >= 256)),
              op = new(Op ? Uint16Array : Uint8Array)(pp.length);
            for (let ip = 0; ip < pp.length; ip++) op[ip] = pp[ip];
            const Ip = this._bufferManager.createBufferView(op, 4 * (Op ? 2 : 1));
            ip.setRemappedBufferView(xp, cp, Ip)
          }
        }
        const Sp = Array.from(op.keys());
        for (const xp of Sp) {
          const pp = op.get(xp);
          if (!pp) continue;
          const cp = UO(xp, pp[0], this._bufferManager, this._bufferViews, this._accessors, ip.convertToRightHanded);
          for (const Op of pp) ip.bindMorphDataToMesh(Op, cp)
        }
      }
      async _exportNodeAsync(pp, ip, cp) {
        let Op = this._nodeMap.get(pp);
        if (void 0 !== Op) return void(ip.includes(Op) || ip.push(Op));
        const op = await this._createNodeAsync(pp, cp);
        if (op) {
          Op = this._nodes.length, this._nodes.push(op), this._nodeMap.set(pp, Op), cp.pushExportedNode(pp), ip.push(Op);
          const Ip = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Sp = [];
          this._babylonScene.animationGroups.length || (yO._CreateMorphTargetAnimationFromMorphTargetAnimations(pp, Ip, Sp, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cp.convertToRightHanded, this._options.shouldExportAnimation), pp.animations.length && yO._CreateNodeAnimationFromNodeAnimations(pp, Ip, Sp, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cp.convertToRightHanded, this._options.shouldExportAnimation)), Ip.channels.length && Ip.samplers.length && this._animations.push(Ip), Sp.forEach((pp => {
            pp.channels.length && pp.samplers.length && this._animations.push(pp)
          }))
        }
        const Ip = op ? [] : ip;
        for (const Sp of pp.getChildren()) await this._exportNodeAsync(Sp, Ip, cp);
        op && Ip.length && (op.children = Ip)
      }
      async _createNodeAsync(pp, ip) {
        if (!this._shouldExportNode(pp)) return null;
        const cp = {};
        if (pp.name && (cp.name = pp.name), pp.metadata) {
          const ip = this._options.metadataSelector(pp.metadata);
          ip && (cp.extras = ip)
        }
        if (pp instanceof Ap.b && (this._setNodeTransformation(cp, pp, ip.convertToRightHanded), pp instanceof Pp.e)) {
          const Op = pp instanceof Wp.c ? pp.aop : pp;
          if (Op.Am && Op.Am.length > 0 && (cp.mesh = await this._exportMeshAsync(Op, ip)), pp.skeleton) {
            const ip = this._skinMap.get(pp.skeleton);
            void 0 !== ip && (void 0 === this._nodesSkinMap.get(ip) && this._nodesSkinMap.set(ip, []), this._nodesSkinMap.get(ip)?.push(cp))
          }
        }
        if (pp instanceof Jc.f) {
          const Op = this._camerasMap.get(pp);
          if (Op) {
            void 0 === this._nodesCameraMap.get(Op) && this._nodesCameraMap.set(Op, []), this._setCameraTransformation(cp, pp, ip.convertToRightHanded);
            const op = pp.parent;
            if (null !== op && Kc(pp, op)) {
              const pp = this._nodeMap.get(op);
              if (void 0 !== pp) {
                const ip = this._nodes[pp];
                return sc(cp, ip), this._nodesCameraMap.get(Op)?.push(ip), null
              }
            }
            this._nodesCameraMap.get(Op)?.push(cp)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", cp, pp, this._nodeMap, ip.convertToRightHanded) ? cp : (Mp.e.Warn(`Not exporting node ${pp.name}`), null)
      }
      _exportIndices(pp, ip, cp, Op, op, Sp, xp, Lp, Yp) {
        let Dp = null;
        Yp.mode = function(pp) {
          switch (pp) {
            case Ip.b.TriangleFillMode:
              return 4;
            case Ip.b.TriangleStripDrawMode:
              return 5;
            case Ip.b.TriangleFanDrawMode:
              return 6;
            case Ip.b.PointListDrawMode:
            case Ip.b.PointFillMode:
              return 0;
            case Ip.b.LineLoopDrawMode:
              return 2;
            case Ip.b.LineListDrawMode:
              return 1;
            case Ip.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${pp}`)
        }(Sp);
        const Ap = xp !== Ip.b.CounterClockWiseSideOrientation && function(pp) {
          switch (pp) {
            case Ip.b.TriangleFillMode:
            case Ip.b.TriangleStripDrawMode:
            case Ip.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Sp);
        if (Ap) {
          if (Sp === Ip.b.TriangleStripDrawMode || Sp === Ip.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const xp = ip ? new Uint32Array(Op) : new Uint16Array(Op);
          if (pp)
            for (let ip = 0; ip + 2 < Op; ip += 3) xp[ip] = pp[cp + ip] + op, xp[ip + 1] = pp[cp + ip + 2] + op, xp[ip + 2] = pp[cp + ip + 1] + op;
          else
            for (let pp = 0; pp + 2 < Op; pp += 3) xp[pp] = pp, xp[pp + 1] = pp + 2, xp[pp + 2] = pp + 1;
          Dp = xp
        } else if (pp && 0 !== op) {
          const Ip = ip ? new Uint32Array(Op) : new Uint16Array(Op);
          for (let ip = 0; ip < Op; ip++) Ip[ip] = pp[cp + ip] + op;
          Dp = Ip
        } else pp && (Dp = function(pp, ip, cp, Op) {
          let op = pp;
          return 0 === ip && cp === pp.length || (op = Array.isArray(pp) ? pp.slice(ip, ip + cp) : pp.subarray(ip, ip + cp)), op instanceof Int32Array ? new Uint32Array(op.buffer, op.byteOffset, op.length) : Array.isArray(op) ? Op ? new Uint32Array(op) : new Uint16Array(op) : op
        }(pp, cp, Op, ip));
        if (Dp) {
          let Ip = Lp.getIndicesAccessor(pp, cp, Op, op, Ap);
          if (void 0 === Ip) {
            const Sp = this._bufferManager.createBufferView(Dp),
              xp = ip ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Sp, "SCALAR", xp, Op, 0)), Ip = this._accessors.length - 1, Lp.setIndicesAccessor(pp, cp, Op, op, Ap, Ip)
          }
          Yp.indices = Ip
        }
      }
      _exportVertexBuffer(pp, ip, cp, Op, op, Ip) {
        const Sp = pp.getKind();
        if (!gc(Sp)) return;
        if (Sp.startsWith("uv") && !this._options.exportUnusedUVs && (!ip || !this._materialNeedsUVsSet.has(ip))) return;
        let xp = op.getVertexAccessor(pp, cp, Op);
        if (void 0 === xp) {
          const ip = op.convertedToRightHandedBuffers.get(pp._buffer) || pp._buffer.getData(),
            Ip = Sp === Dp.f.PositionKind ? function(pp, ip, cp, Op) {
              const {
                byteOffset: op,
                byteStride: Ip,
                type: Sp,
                normalized: xp
              } = ip, Lp = ip.getSize(), Yp = new Array(Lp).fill(1 / 0), Dp = new Array(Lp).fill(-1 / 0);
              return (0, Qc.f)(pp, op + cp * Ip, Ip, Lp, Sp, Op * Lp, xp, (pp => {
                for (let ip = 0; ip < Lp; ip++) Yp[ip] = Math.min(Yp[ip], pp[ip]), Dp[ip] = Math.max(Dp[ip], pp[ip])
              })), {
                min: Yp,
                max: Dp
              }
            }(ip, pp, cp, Op) : void 0,
            Lp = (Sp === Dp.f.MatricesIndicesKind || Sp === Dp.f.MatricesIndicesExtraKind) && pp.type === Dp.f.FLOAT,
            Yp = Lp ? Dp.f.UNSIGNED_BYTE : pp.type,
            Ap = Lp ? void 0 : pp.normalized,
            Pp = Lp ? op.getRemappedBufferView(pp._buffer, pp) : op.getVertexBufferView(pp._buffer),
            Wp = pp.byteOffset + cp * pp.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Pp, function(pp, ip) {
            if (pp == Dp.f.ColorKind) return ip ? "VEC4" : "VEC3";
            switch (pp) {
              case Dp.f.PositionKind:
              case Dp.f.NormalKind:
                return "VEC3";
              case Dp.f.TangentKind:
              case Dp.f.MatricesIndicesKind:
              case Dp.f.MatricesIndicesExtraKind:
              case Dp.f.MatricesWeightsKind:
              case Dp.f.MatricesWeightsExtraKind:
                return "VEC4";
              case Dp.f.UVKind:
              case Dp.f.UV2Kind:
              case Dp.f.UV3Kind:
              case Dp.f.UV4Kind:
              case Dp.f.UV5Kind:
              case Dp.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${pp}`)
          }(Sp, op.hasVertexColorAlpha(pp)), Yp, Op, Wp, Ip, Ap)), xp = this._accessors.length - 1, op.setVertexAccessor(pp, cp, Op, xp)
        }
        Ip.attributes[function(pp) {
          switch (pp) {
            case Dp.f.PositionKind:
              return "POSITION";
            case Dp.f.NormalKind:
              return "NORMAL";
            case Dp.f.TangentKind:
              return "TANGENT";
            case Dp.f.ColorKind:
              return "COLOR_0";
            case Dp.f.UVKind:
              return "TEXCOORD_0";
            case Dp.f.UV2Kind:
              return "TEXCOORD_1";
            case Dp.f.UV3Kind:
              return "TEXCOORD_2";
            case Dp.f.UV4Kind:
              return "TEXCOORD_3";
            case Dp.f.UV5Kind:
              return "TEXCOORD_4";
            case Dp.f.UV6Kind:
              return "TEXCOORD_5";
            case Dp.f.MatricesIndicesKind:
              return "JOINTS_0";
            case Dp.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Dp.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Dp.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${pp}`)
        }(Sp)] = xp
      }
      async _exportMaterialAsync(pp, ip, cp, Op) {
        let op = this._materialMap.get(pp);
        if (void 0 === op) {
          const Op = ip && Object.keys(ip).some((pp => pp.startsWith("uv")));
          if ((pp = pp instanceof xO.b ? pp.u9[cp.materialIndex] : pp) instanceof ki) op = await this._materialExporter.exportPBRMaterialAsync(pp, Op);
          else if (pp instanceof LO.StandardMaterial) op = await this._materialExporter.exportStandardMaterialAsync(pp, Op);
          else {
            if (!(pp instanceof ic)) return void Mp.e.Warn(`Unsupported material '${pp.name}' with type ${pp.getClassName()}`);
            op = await this._materialExporter.exportOpenPBRMaterialAsync(pp, Op)
          }
          this._materialMap.set(pp, op)
        }
        Op.material = op
      }
      async _exportMeshAsync(pp, ip) {
        let cp = ip.getMesh(pp);
        if (void 0 !== cp) return cp;
        const Op = {
          primitives: []
        };
        cp = this._meshes.length, this._meshes.push(Op), ip.setMesh(pp, cp);
        const op = pp.isUnIndexed ? null : pp.NOp(),
          Sp = pp.geometry?.getVertexBuffers(),
          xp = ip.getMorphTargetsFromMesh(pp),
          Lp = pp instanceof wO.b,
          Yp = pp instanceof JO,
          Dp = pp.Am;
        if (Sp && Dp && Dp.length > 0)
          for (const Ap of Dp) {
            const cp = {
                attributes: {}
              },
              Dp = Ap.Ky() || this._babylonScene.defaultMaterial;
            if (Yp) {
              const ip = {
                  name: Dp.name
                },
                Op = pp,
                op = wp.Color3.White(),
                Ip = Op.material?.alpha ?? 1,
                Sp = Op.greasedLineMaterial?.color ?? op;
              (!Sp.equalsWithEpsilon(op, Bc.b) || Ip < 1) && (ip.pbrMetallicRoughness = {
                baseColorFactor: [...Sp.BOp(), Ip]
              }), this._materials.push(ip), cp.material = this._materials.length - 1
            } else if (Lp) {
              const ip = {
                  name: Dp.name
                },
                Op = pp;
              (!Op.color.equalsWithEpsilon(wp.Color3.White(), Bc.b) || Op.alpha < 1) && (ip.pbrMetallicRoughness = {
                baseColorFactor: [...Op.color.BOp(), Op.alpha]
              }), this._materials.push(ip), cp.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Dp, Sp, Ap, cp);
            const Pp = Lp || Yp ? Ip.b.LineListDrawMode : pp.overrideRenderingFillMode ?? Dp.fillMode;
            let Wp = Dp._getEffectiveOrientation(pp);
            ip.wasAddedByNoopNode && !pp.Gl().useRightHandedSystem && (Wp = Wp === Ip.b.ClockWiseSideOrientation ? Ip.b.CounterClockWiseSideOrientation : Ip.b.ClockWiseSideOrientation), this._exportIndices(op, op ? (0, Qc.d)(op, Ap.indexCount, Ap.indexStart, Ap.verticesStart) : Ap.verticesCount > 65535, op ? Ap.indexStart : Ap.verticesStart, op ? Ap.indexCount : Ap.verticesCount, -Ap.verticesStart, Pp, Wp, ip, cp);
            for (const pp of Object.values(Sp)) this._exportVertexBuffer(pp, Dp, Ap.verticesStart, Ap.verticesCount, ip, cp);
            if (xp) {
              cp.targets = [];
              for (const pp of xp) cp.targets.push(pp.attributes)
            }
            Op.primitives.push(cp), this._extensionsPostExportMeshPrimitive(cp)
          }
        if (xp) {
          Op.weights = [], Op.extras || (Op.extras = {}), Op.extras.targetNames = [];
          for (const pp of xp) Op.weights.push(pp.influence), Op.extras.targetNames.push(pp.name)
        }
        return cp
      }
    }
    NO._ExtensionNames = new Array, NO._ExtensionFactories = {}, NO._ExtensionOrders = {};
    class TO {
      static async GLTFAsync(pp, ip, cp) {
        cp && cp.exportWithoutWaitingForScene || await pp.whenReadyAsync();
        const Op = new NO(pp, cp),
          op = await Op.generateGLTFAsync(ip.replace(/\.[^/.]+$/, ""));
        return Op.dispose(), op
      }
      static async GLBAsync(pp, ip, cp) {
        cp && cp.exportWithoutWaitingForScene || await pp.whenReadyAsync();
        const Op = new NO(pp, cp),
          op = await Op.generateGLBAsync(ip.replace(/\.[^/.]+$/, ""));
        return Op.dispose(), op
      }
    }
    const fO = "EXT_mesh_gpu_instancing";

    function bO(pp, ip) {
      const cp = new Float32Array(3 * ip);
      for (let Op = 0; Op < ip; Op++) cp[3 * Op + 0] = pp[4 * Op + 0], cp[3 * Op + 1] = pp[4 * Op + 1], cp[3 * Op + 2] = pp[4 * Op + 2];
      return cp
    }
    class hO {
      constructor(pp) {
        this.name = fO, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(pp, ip, cp, Op, op, Ip) {
        return await new Promise((pp => {
          if (ip && cp instanceof mO.d && cp.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const pp = fp.o.Zero(),
              Op = fp.f.Identity(),
              Sp = fp.o.One(),
              xp = cp.thinInstanceGetWorldMatrices(),
              Lp = fp.i.Zy[2],
              Yp = fp.i.Quaternion[1],
              Dp = fp.i.Zy[3];
            let Ap = !1,
              Pp = !1,
              Wp = !1;
            const yp = new Float32Array(3 * cp.f_),
              Up = new Float32Array(4 * cp.f_),
              wp = new Float32Array(3 * cp.f_);
            let vp = 0;
            for (const ip of xp) ip.decompose(Dp, Yp, Lp), op && (rc(Lp), Zc(Yp)), yp.set(Lp.BOp(), 3 * vp), Up.set(Yp.normalize().BOp(), 4 * vp), wp.set(Dp.BOp(), 3 * vp), Ap = Ap || !Lp.equalsWithEpsilon(pp), Pp = Pp || !Yp.equalsWithEpsilon(Op), Wp = Wp || !Dp.equalsWithEpsilon(Sp), vp++;
            const tp = {
              attributes: {}
            };
            Ap && (tp.attributes.TRANSLATION = this._buildAccessor(yp, "VEC3", cp.f_, Ip)), Pp && (tp.attributes.ROTATION = this._buildAccessor(Up, "VEC4", cp.f_, Ip)), Wp && (tp.attributes.SCALE = this._buildAccessor(wp, "VEC3", cp.f_, Ip));
            let Hp = cp._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Hp) {
              const pp = cp.f_,
                ip = "VEC3";
              cp.hasVertexAlpha && Hp.length === 4 * pp ? (this._instanceColorWarned || (Mp.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Hp = bO(Hp, pp)) : Hp.length === 4 * pp && (Hp = bO(Hp, pp)), Hp.length === 3 * pp && (tp.attributes._COLOR_0 = this._buildAccessor(Hp, ip, pp, Ip))
            }
            ip.extensions = ip.extensions || {}, ip.extensions[fO] = tp
          }
          pp(ip)
        }))
      }
      _buildAccessor(pp, ip, cp, Op) {
        const op = Op.createBufferView(pp),
          Ip = Op.createAccessor(op, ip, 5126, cp);
        return this._exporter._accessors.push(Ip), this._exporter._accessors.length - 1
      }
    }
    let aO = !1;

    function nO() {
      aO || (aO = !0, NO.RegisterExtension(fO, (pp => new hO(pp))))
    }
    cp(40663);
    nO();
    var FO = cp(42123);

    function gO(pp, ip, cp, Op) {
      const op = pp;
      let Ip = null,
        Sp = null,
        xp = null,
        Lp = null;
      const Yp = {},
        Dp = ip.find((pp => "POSITION" === pp.dracoName));
      if (!Dp) throw new Error("Draco: Missing position attribute for encoding.");
      if (!cp) {
        const pp = Dp.data.length / Dp.size;
        cp = new(pp > 65535 ? Uint32Array : Uint16Array)(pp);
        for (let ip = 0; ip < pp; ip++) cp[ip] = ip
      }
      try {
        Ip = new op.Encoder, Sp = new op.MeshBuilder, xp = new op.Mesh, Sp.AddFacesToMesh(xp, cp.length / 3, cp);
        const pp = new Map([
          [Float32Array, (pp, ip, cp, Op, op, Ip) => pp.AddFloatAttribute(ip, cp, Op, op, Ip)],
          [Uint32Array, (pp, ip, cp, Op, op, Ip) => pp.AddUInt32Attribute(ip, cp, Op, op, Ip)],
          [Uint16Array, (pp, ip, cp, Op, op, Ip) => pp.AddUInt16Attribute(ip, cp, Op, op, Ip)],
          [Uint8Array, (pp, ip, cp, Op, op, Ip) => pp.AddUInt8Attribute(ip, cp, Op, op, Ip)],
          [Int32Array, (pp, ip, cp, Op, op, Ip) => pp.AddInt32Attribute(ip, cp, Op, op, Ip)],
          [Int16Array, (pp, ip, cp, Op, op, Ip) => pp.AddInt16Attribute(ip, cp, Op, op, Ip)],
          [Int8Array, (pp, ip, cp, Op, op, Ip) => pp.AddInt8Attribute(ip, cp, Op, op, Ip)]
        ]);
        for (const cp of ip) {
          cp.data instanceof Uint8ClampedArray && (cp.data = new Uint8Array(cp.data));
          const ip = pp.get(cp.data.constructor),
            Lp = cp.data.length / cp.size;
          Yp[cp.kind] = ip(Sp, xp, op[cp.dracoName], Lp, cp.size, cp.data), Op.quantizationBits && Op.quantizationBits[cp.dracoName] && Ip.SetAttributeQuantization(op[cp.dracoName], Op.quantizationBits[cp.dracoName])
        }
        Op.method && Ip.SetEncodingMethod(op[Op.method]), void 0 !== Op.encodeSpeed && void 0 !== Op.decodeSpeed && Ip.SetSpeedOptions(Op.encodeSpeed, Op.decodeSpeed), Lp = new op.DracoInt8Array;
        const Dp = Ip.EncodeMeshToDracoBuffer(xp, Lp);
        if (Dp <= 0) throw new Error("Draco: Failed to encode.");
        const Ap = new Int8Array(Dp);
        for (let ip = 0; ip < Dp; ip++) Ap[ip] = Lp.GetValue(ip);
        return {
          data: Ap,
          attributeIds: Yp
        }
      } finally {
        xp && op.destroy(xp), Sp && op.destroy(Sp), Ip && op.destroy(Ip), Lp && op.destroy(Lp)
      }
    }

    function GO() {
      let pp;
      onmessage = ip => {
        const cp = ip.data;
        switch (cp.id) {
          case "init": {
            cp.url && importScripts(cp.url);
            const ip = cp.wasmBinary ? {
              wasmBinary: cp.wasmBinary
            } : {};
            pp = DracoEncoderModule(ip), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!pp) throw new Error("Draco: Encoder module is not available.");
            pp.then((pp => {
              const ip = gO(pp, cp.attributes, cp.indices, cp.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: ip
              }, ip ? [ip.data.buffer] : void 0)
            })).catch((pp => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: pp.message
              })
            }))
        }
      }
    }
    class rO {
      constructor(pp) {
        if (pp.workerPool) return void(this._workerPoolPromise = Promise.resolve(pp.workerPool));
        const ip = pp.wasmBinary,
          cp = pp.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Op = cp && "function" === typeof Worker && "function" === typeof URL,
          op = Op || !pp.jsModule,
          Ip = pp.wasmUrl && pp.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: op ? Ri.i.GetBabylonScriptURL(pp.wasmUrl, !0) : "",
            wasmBinaryPromise: ip ? Promise.resolve(ip) : Ri.i.LoadFileAsync(Ri.i.GetBabylonScriptURL(pp.wasmBinaryUrl, !0))
          } : {
            url: op ? Ri.i.GetBabylonScriptURL(pp.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Op ? this._workerPoolPromise = Ip.wasmBinaryPromise.then((pp => {
          const ip = this._getWorkerContent(),
            Op = URL.createObjectURL(new Blob([ip], {
              type: "application/javascript"
            }));
          return new FO.e(cp, (() => async function(pp, ip, cp) {
            return await new Promise(((Op, op) => {
              const Ip = ip => {
                  pp.removeEventListener("error", Ip), pp.removeEventListener("message", Sp), op(ip)
                },
                Sp = ip => {
                  "initDone" === ip.data.id && (pp.removeEventListener("error", Ip), pp.removeEventListener("message", Sp), Op(pp))
                };
              if (pp.addEventListener("error", Ip), pp.addEventListener("message", Sp), ip) {
                const Op = ip.slice(0);
                pp.postMessage({
                  id: "init",
                  url: cp,
                  wasmBinary: Op
                }, [Op])
              } else pp.postMessage({
                id: "init",
                url: cp
              })
            }))
          }(new Worker(Op), pp, Ip.url)))
        })) : this._modulePromise = Ip.wasmBinaryPromise.then((async ip => {
          if (!this._isModuleAvailable() && !pp.jsModule) {
            if (!Ip.url) throw new Error("Draco codec module is not available");
            await Ri.i.LoadBabylonScriptAsync(Ip.url)
          }
          return await this._createModuleAsync(ip, pp.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((pp => {
          pp.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function ZO() {
      const pp = pp => !!pp && "object" === typeof pp;
      for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
      return cp.reduce(((ip, cp) => {
        const Op = Object.keys(cp);
        for (const op of Op) {
          const Op = ip[op],
            Ip = cp[op];
          Array.isArray(Op) && Array.isArray(Ip) ? ip[op] = Op.concat(Ip) : pp(Op) && pp(Ip) ? ip[op] = ZO(Op, Ip) : ip[op] = Ip
        }
        return ip
      }), {})
    }

    function zO(pp) {
      return pp === bp.j.PositionKind ? "POSITION" : pp === bp.j.NormalKind ? "NORMAL" : pp === bp.j.ColorKind ? "COLOR" : pp.startsWith(bp.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const sO = {
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
    class KO extends rO {
      static get DefaultAvailable() {
        return !!((pp = KO.DefaultConfiguration).wasmUrl && (pp.wasmBinary || pp.wasmBinaryUrl) && "object" === typeof WebAssembly || pp.fallbackUrl);
        var pp
      }
      static get Default() {
        return KO._Default ?? (KO._Default = new KO), KO._Default
      }
      static ResetDefault(pp) {
        KO._Default && (pp || KO._Default.dispose(), KO._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(pp, ip) {
        return {
          module: await (ip || DracoEncoderModule)({
            wasmBinary: pp
          })
        }
      }
      _getWorkerContent() {
        return `${gO}(${GO})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KO.DefaultConfiguration)
      }
      async _encodeAsync(pp, ip, cp) {
        const Op = cp ? ZO(sO, cp) : sO;
        if (this._workerPoolPromise) {
          const cp = await this._workerPoolPromise;
          return await new Promise(((op, Ip) => {
            cp.push(((cp, Sp) => {
              const xp = pp => {
                  cp.removeEventListener("error", xp), cp.removeEventListener("message", Lp), Ip(pp), Sp()
                },
                Lp = pp => {
                  "encodeMeshSuccess" === pp.data.id ? (cp.removeEventListener("error", xp), cp.removeEventListener("message", Lp), op(pp.data.encodedMeshData), Sp()) : "encodeMeshError" === pp.data.id && (cp.removeEventListener("error", xp), cp.removeEventListener("message", Lp), Ip(new Error(pp.data.errorMessage)), Sp())
                };
              cp.addEventListener("error", xp), cp.addEventListener("message", Lp);
              const Yp = [];
              for (const ip of pp) Yp.push(ip.data.buffer);
              ip && Yp.push(ip.buffer), cp.postMessage({
                id: "encodeMesh",
                attributes: pp,
                indices: ip,
                options: Op
              }, Yp)
            }))
          }))
        }
        if (this._modulePromise) {
          return gO((await this._modulePromise).module, pp, ip, Op)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(pp, ip) {
        if (0 == pp.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        pp instanceof mO.d && pp.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === ip?.method && (Mp.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), ip.method = "MESH_SEQUENTIAL_ENCODING");
        const cp = function(pp) {
            let ip = pp.NOp(void 0, !0);
            return !ip || ip instanceof Uint32Array || ip instanceof Uint16Array || (ip = ((0, Qc.d)(ip, ip.length) ? Uint32Array : Uint16Array).from(ip)), ip
          }(pp),
          Op = function(pp, ip) {
            const cp = [];
            for (const Op of pp.getVerticesDataKinds()) {
              if (ip?.includes(Op)) {
                if (Op === bp.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const op = pp.getVertexBuffer(Op),
                Ip = op.getSize(),
                Sp = (0, Qc.s)(op.getData(), Ip, op.type, op.byteOffset, op.byteStride, pp.getTotalVertices(), !0);
              cp.push({
                kind: Op,
                dracoName: zO(Op),
                size: Ip,
                data: Sp
              })
            }
            return cp
          }(pp, ip?.excludedAttributes);
        return await this._encodeAsync(Op, cp, ip)
      }
    }
    KO.DefaultConfiguration = {
      wasmUrl: `${Ri.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Ri.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Ri.i._DefaultCdnUrl}/draco_encoder.js`
    }, KO._Default = null;
    const VO = "KHR_draco_mesh_compression";
    class po {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(pp) {
        this.name = VO, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === pp.options.meshCompressionMethod && KO.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(pp, ip, cp) {
        if (!this.enabled) return;
        if (4 !== pp.mode && 5 !== pp.mode) return void Mp.e.Warn("Cannot compress primitive with mode " + pp.mode + ".");
        const Op = [],
          op = [];
        let Ip = null;
        if (void 0 !== pp.indices) {
          const Sp = cp[pp.indices],
            xp = ip.getBufferView(Sp);
          Ip = ip.getData(xp).slice(), Op.push(xp), op.push(Sp)
        }
        const Sp = [];
        for (const [Dp, Ap] of Object.entries(pp.attributes)) {
          const pp = cp[Ap],
            Ip = ip.getBufferView(pp),
            Lp = Fc(pp.type),
            Yp = (0, Qc.s)(ip.getData(Ip), Lp, pp.componentType, pp.byteOffset || 0, Ip.byteStride || (0, Qc.p)(pp.componentType) * Lp, pp.count, !0);
          Sp.push({
            kind: Dp,
            dracoName: (xp = Dp, "POSITION" === xp ? "POSITION" : "NORMAL" === xp ? "NORMAL" : xp.startsWith("COLOR") ? "COLOR" : xp.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Fc(pp.type),
            data: Yp
          }), Op.push(Ip), op.push(pp)
        }
        var xp;
        const Lp = {
            method: pp.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Yp = KO.Default._encodeAsync(Sp, Ip, Lp).then((cp => {
            const Ip = {
                bufferView: -1,
                attributes: cp.attributeIds
              },
              Sp = ip.createBufferView(cp.data);
            ip.setBufferView(Ip, Sp);
            for (const pp of Op) this._bufferViewsUsed.add(pp);
            for (const pp of op) this._accessorsUsed.add(pp);
            pp.extensions || (pp.extensions = {}), pp.extensions[VO] = Ip
          })).catch((pp => {
            Mp.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + pp.message)
          }));
        this._encodePromises.push(Yp), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(pp) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((ip => {
          pp.getPropertiesWithBufferView(ip).every((pp => this._accessorsUsed.has(pp))) && pp.removeBufferView(ip)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let io = !1;

    function co() {
      io || (io = !0, NO.RegisterExtension(VO, (pp => new po(pp))))
    }
    co();
    var Oo = cp(41823);
    const oo = "KHR_lights_punctual",
      Io = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      So = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      xo = fp.o.Backward();
    class Lo {
      constructor(pp) {
        this.name = oo, this.enabled = !0, this.required = !1, this._exporter = pp
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[oo] = this._lights
      }
      async postExportNodeAsync(pp, ip, cp, Op, op) {
        return await new Promise((Ip => {
          if (!(cp instanceof WO.d)) return void Ip(ip);
          const Sp = cp.getTypeID() == WO.d.LIGHTTYPEID_POINTLIGHT ? "point" : cp.getTypeID() == WO.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : cp.getTypeID() == WO.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Sp || !(cp instanceof Oo.d)) return Mp.e.Warn(`${pp}: Light ${cp.name} is not supported in ${oo}`), void Ip(ip);
          if (cp.falloffType !== WO.d.FALLOFF_GLTF && Mp.e.Warn(`${pp}: Light falloff for ${cp.name} does not match the ${oo} specification!`), !cp.position.jxp(0, 0, 0)) {
            const pp = fp.i.Zy[0].rM(cp.position);
            op && rc(pp), ip.translation = pp.BOp()
          }
          if ("point" !== Sp) {
            const pp = cp.direction.normalizeToRef(fp.i.Zy[0]);
            op && rc(pp);
            const Op = fp.f.FromUnitVectorsToRef(xo, pp, fp.i.Quaternion[0]);
            fp.f.IsIdentity(Op) || (ip.rotation = Op.BOp())
          }
          const xp = {
            type: Sp,
            name: cp.name,
            color: cp.diffuse.BOp(),
            intensity: cp.intensity,
            range: cp.range
          };
          if (pO(xp, Io), "spot" === Sp) {
            const pp = cp;
            xp.spot = {
              innerConeAngle: pp.innerAngle / 2,
              outerConeAngle: pp.angle / 2
            }, pO(xp.spot, So)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(xp);
          const Lp = {
              light: this._lights.lights.length - 1
            },
            Yp = cp.parent;
          if (Yp && Kc(cp, Yp)) {
            const pp = Op.get(Yp);
            if (pp) {
              const cp = this._exporter._nodes[pp];
              return sc(ip, cp), cp.extensions || (cp.extensions = {}), cp.extensions[oo] = Lp, void Ip(null)
            }
          }
          ip.extensions || (ip.extensions = {}), ip.extensions[oo] = Lp, Ip(ip)
        }))
      }
    }
    let Yo = !1;

    function Do() {
      Yo || (Yo = !0, NO.RegisterExtension(oo, (pp => new Lo(pp))))
    }
    Do();
    const Ao = "KHR_interactivity";
    class Po {
      constructor(pp) {
        this._exporter = pp, this.name = Ao, this.enabled = !!pp.options.khrInteractivity, this.required = pp.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var pp, ip, cp;
        const Op = this._exporter.options.khrInteractivity;
        if (!Op) return;
        const op = Op.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: pp => this._exporter._getNodeIndex(pp),
          getAnimationIndex: pp => this._exporter._getAnimationIndex(pp),
          getCameraIndex: pp => this._exporter._getCameraIndex(pp),
          getMaterialIndex: pp => this._exporter._getMaterialIndex(pp),
          getRootIndex: (pp, ip) => this._exporter._getRootIndex(pp, ip),
          setNodeExtension: (pp, ip, cp) => this._exporter._setNodeExtension(pp, ip, cp)
        });
        this._exporter._glTF.extensions[Ao] = op;
        for (const Ip of Op.additionalExtensionsUsed)(pp = this._exporter._glTF).extensionsUsed || (pp.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Ip) && this._exporter._glTF.extensionsUsed.push(Ip);
        for (const Ip of Op.additionalExtensionsRequired)(ip = this._exporter._glTF).extensionsUsed || (ip.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Ip) && this._exporter._glTF.extensionsUsed.push(Ip), (cp = this._exporter._glTF).extensionsRequired || (cp.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Ip) && this._exporter._glTF.extensionsRequired.push(Ip)
      }
    }
    let Wo = !1;

    function yo() {
      Wo || (Wo = !0, NO.RegisterExtension(Ao, (pp => new Po(pp)), 200))
    }
    yo();
    const Uo = "EXT_lights_area",
      wo = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      vo = {
        aspect: 1
      },
      to = fp.o.Backward();
    class Ho {
      constructor(pp) {
        this.name = Uo, this.enabled = !0, this.required = !1, this._exporter = pp
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Uo] = this._lights
      }
      async postExportNodeAsync(pp, ip, cp, Op, op) {
        return await new Promise((Ip => {
          if (!(cp instanceof WO.d)) return void Ip(ip);
          const Sp = cp.getTypeID() == WO.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Sp) return Mp.e.Warn(`${pp}: Light ${cp.name} is not supported in ${Uo}`), void Ip(ip);
          const xp = cp;
          if (xp.falloffType !== WO.d.FALLOFF_GLTF && Mp.e.Warn(`${pp}: Light falloff for ${cp.name} does not match the ${Uo} specification!`), !xp.position.jxp(0, 0, 0)) {
            const pp = fp.i.Zy[0].rM(xp.position);
            op && rc(pp), ip.translation = pp.BOp()
          }
          const Lp = fp.o.Forward();
          op && rc(Lp);
          const Yp = fp.f.FromUnitVectorsToRef(to, Lp, fp.i.Quaternion[0]);
          fp.f.IsIdentity(Yp) || (ip.rotation = Yp.BOp());
          const Dp = {
            type: Sp,
            name: xp.name,
            color: xp.diffuse.BOp(),
            intensity: xp.intensity,
            size: xp.height,
            rect: {
              aspect: xp.width / xp.height
            }
          };
          pO(Dp, wo), Dp.rect && pO(Dp.rect, vo), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Dp);
          const Ap = {
              light: this._lights.lights.length - 1
            },
            Pp = cp.parent;
          if (Pp && Kc(xp, Pp)) {
            const pp = Op.get(Pp);
            if (pp) {
              const cp = this._exporter._nodes[pp];
              return sc(ip, cp), cp.extensions || (cp.extensions = {}), cp.extensions[Uo] = Ap, void Ip(null)
            }
          }
          ip.extensions || (ip.extensions = {}), ip.extensions[Uo] = Ap, Ip(ip)
        }))
      }
    }
    let eo = !1;

    function uo() {
      eo || (eo = !0, NO.RegisterExtension(Uo, (pp => new Ho(pp))))
    }
    uo();
    const jo = "KHR_materials_anisotropy";
    class ko {
      constructor(pp) {
        this.name = jo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof ki) {
          if (cp.anisotropy.isEnabled && !cp.anisotropy.legacy) return cp.anisotropy.texture && Op.push(cp.anisotropy.texture), Op
        } else if (cp instanceof ic && cp.specularRoughnessAnisotropy > 0) {
          const pp = function(pp) {
            const ip = pp.specularRoughnessAnisotropyTexture,
              cp = pp.geometryTangentTexture;
            return `${ip&&ip.getInternalTexture()?ip.getInternalTexture().uniqueId:"NoStrength"}_${cp&&cp.getInternalTexture()?cp.getInternalTexture().uniqueId:"NoTangent"}`
          }(cp);
          if (this._anisoTexturesMap[pp]) Op.push(this._anisoTexturesMap[pp]);
          else {
            const ip = await async function(pp) {
              const ip = pp.Gl(),
                cp = pp.specularRoughnessAnisotropyTexture,
                Op = pp.geometryTangentTexture;
              return cp || Op ? await Yc("AnisotropyTexture", Pc(Op ? Dc(Op, 0) : Ac(1), Op ? Dc(Op, 1) : Ac(0), cp ? Dc(cp, 0) : Ac(1)), ip) : null
            }(cp);
            ip && (Op.push(ip), this._anisoTexturesMap[pp] = ip)
          }
          return Op
        }
        return []
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          var Op;
          if (cp instanceof ki) {
            if (!cp.anisotropy.isEnabled || cp.anisotropy.legacy) return void pp(ip);
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const Op = this._exporter._materialExporter.getTextureInfo(cp.anisotropy.texture),
              op = {
                anisotropyStrength: cp.anisotropy.intensity,
                anisotropyRotation: cp.anisotropy.angle,
                anisotropyTexture: Op ?? void 0
              };
            null !== op.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[jo] = op
          } else if (cp instanceof ic && cp.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            let op = cp.specularRoughnessTexture;
            cp._useRoughnessFromMetallicTextureGreen && (op = cp.baseMetalnessTexture);
            const Ip = this._anisoTexturesMap[cp.id];
            if (!op && !Ip) {
              let Op = cp.specularRoughness,
                op = cp.specularRoughnessAnisotropy;
              if (!cp._useGltfStyleAnisotropy) {
                const pp = function(pp, ip) {
                  const cp = pp * pp,
                    Op = cp * Math.sqrt(2 / (1 + (1 - ip) * (1 - ip))),
                    op = (1 - ip) * Op;
                  return {
                    newBaseRoughness: Math.sqrt(op),
                    newAnisotropyStrength: Math.min(Math.sqrt((Op - cp) / Math.max(1 - cp, 1e-4)), 1)
                  }
                }(cp.specularRoughness, cp.specularRoughnessAnisotropy);
                Op = pp.newBaseRoughness, op = pp.newAnisotropyStrength
              }
              ip.pbrMetallicRoughness && (ip.pbrMetallicRoughness.roughnessFactor = Op);
              const Ip = {
                anisotropyStrength: op,
                anisotropyRotation: cp.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return ip.extensions[jo] = Ip, pp(ip)
            }
            const Sp = Ip ? this._exporter._materialExporter.getTextureInfo(Ip) : null,
              xp = {
                anisotropyStrength: cp.specularRoughnessAnisotropy,
                anisotropyRotation: cp.geometryTangentAngle,
                anisotropyTexture: Sp || void 0,
                extensions: {}
              };
            cp._useGltfStyleAnisotropy || (ip.extensions.KHR_materials_openpbr = {}, (Op = this._exporter._glTF).extensionsUsed || (Op.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[jo] = xp
          }
          pp(ip)
        }))
      }
    }
    let mo = !1;

    function Ro() {
      mo || (mo = !0, NO.RegisterExtension(jo, (pp => new ko(pp))))
    }
    Ro();
    const qo = "KHR_materials_clearcoat";

    function Mo(pp, ip) {
      const cp = new Ep.d(ip.name, ip.Gl());
      return cp._texture = pp, cp.coordinatesIndex = ip.coordinatesIndex, ip instanceof Ep.d && (cp.uOffset = ip.uOffset, cp.vOffset = ip.vOffset, cp.uScale = ip.uScale, cp.vScale = ip.vScale, cp.wAng = ip.wAng), cp.wrapU = ip.wrapU, cp.wrapV = ip.wrapV, cp
    }
    class Co {
      constructor(pp) {
        this.name = qo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = pp
      }
      dispose() {
        for (const pp of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[pp].dispose()
        }
        this._mergedTexturesMap = {};
        for (const pp of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[pp].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof ki) {
          if (cp.clearCoat.isEnabled) return cp.clearCoat.texture && Op.push(cp.clearCoat.texture), !cp.clearCoat.useRoughnessFromMainTexture && cp.clearCoat.textureRoughness && Op.push(cp.clearCoat.textureRoughness), cp.clearCoat.bumpTexture && Op.push(cp.clearCoat.bumpTexture), Op
        } else if (cp instanceof ic && cp.coatWeight > 0) {
          let pp = !1;
          if (cp.coatWeightTexture ? cp.coatRoughnessTexture ? cp._useCoatRoughnessFromGreenChannel && cp.coatWeightTexture.getInternalTexture() === cp.coatRoughnessTexture.getInternalTexture() ? (Op.push(cp.coatWeightTexture), Op.push(cp.coatRoughnessTexture)) : pp = !0 : Op.push(cp.coatWeightTexture) : cp.coatRoughnessTexture && (cp._useCoatRoughnessFromGreenChannel ? Op.push(cp.coatRoughnessTexture) : pp = !0), pp) {
            const pp = function(pp) {
              const ip = pp.coatWeightTexture,
                cp = ip && ip.getInternalTexture() ? ip.getInternalTexture().uniqueId : "NoCoat",
                Op = pp.coatRoughnessTexture;
              return `${cp}_${Op&&Op.getInternalTexture()?Op.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cp);
            if (!this._cachedInternalTexturesMap[pp]) {
              const ip = await async function(pp) {
                const ip = pp.Gl(),
                  cp = pp.coatWeightTexture,
                  Op = pp.coatRoughnessTexture;
                return cp || Op ? (await Yc("CoatTexture", Pc(cp ? Dc(cp, 0) : Ac(1), Op ? Dc(Op, pp._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ac(1)), ip)).getInternalTexture() : null
              }(cp);
              ip && (this._cachedInternalTexturesMap[pp] = ip)
            }
            this._cachedInternalTexturesMap[pp] && (cp.coatWeightTexture && (this._mergedTexturesMap[cp.coatWeightTexture.uniqueId] = Mo(this._cachedInternalTexturesMap[pp], cp.coatWeightTexture), Op.push(this._mergedTexturesMap[cp.coatWeightTexture.uniqueId])), cp.coatRoughnessTexture && (this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId] = Mo(this._cachedInternalTexturesMap[pp], cp.coatRoughnessTexture), Op.push(this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId])))
          }
          return cp.geometryCoatNormalTexture && Op.push(cp.geometryCoatNormalTexture), Op
        }
        return []
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof ki) {
            if (!cp.clearCoat.isEnabled) return void pp(ip);
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const Op = this._exporter._materialExporter.getTextureInfo(cp.clearCoat.texture);
            let op;
            op = cp.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cp.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cp.clearCoat.textureRoughness), cp.clearCoat.isTintEnabled && Ri.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cp.name}`), cp.clearCoat.remapF0OnInterfaceChange && Ri.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${cp.name}`);
            const Ip = this._exporter._materialExporter.getTextureInfo(cp.clearCoat.bumpTexture),
              Sp = {
                clearcoatFactor: cp.clearCoat.intensity,
                clearcoatTexture: Op ?? void 0,
                clearcoatRoughnessFactor: cp.clearCoat.roughness,
                clearcoatRoughnessTexture: op ?? void 0,
                clearcoatNormalTexture: Ip ?? void 0
              };
            null === Sp.clearcoatTexture && null === Sp.clearcoatRoughnessTexture && null === Sp.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[qo] = Sp
          } else if (cp instanceof ic) {
            if (0 == cp.coatWeight) return void pp(ip);
            let Op, op, Ip, Sp;
            this._wasUsed = !0, ip.extensions = ip.extensions || {}, cp.coatWeightTexture && (Op = this._mergedTexturesMap[cp.coatWeightTexture.uniqueId], op = this._exporter._materialExporter.getTextureInfo(Op)), cp.coatRoughnessTexture && (Ip = this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId], Sp = this._exporter._materialExporter.getTextureInfo(Ip)), cp.coatColorTexture && Ri.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cp.name}`);
            const xp = this._exporter._materialExporter.getTextureInfo(cp.geometryCoatNormalTexture),
              Lp = {
                clearcoatFactor: cp.coatWeight,
                clearcoatTexture: op ?? void 0,
                clearcoatRoughnessFactor: cp.coatRoughness,
                clearcoatRoughnessTexture: Sp ?? void 0,
                clearcoatNormalTexture: xp ?? void 0
              };
            null === Lp.clearcoatTexture && null === Lp.clearcoatRoughnessTexture && null === Lp.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[qo] = Lp
          }
          pp(ip)
        }))
      }
    }
    let Eo = !1;

    function Xo() {
      Eo || (Eo = !0, NO.RegisterExtension(qo, (pp => new Co(pp))))
    }
    Xo();
    const Qo = "KHR_materials_coat";

    function Jo(pp) {
      const ip = pp.coatRoughnessAnisotropyTexture,
        cp = pp.geometryCoatTangentTexture;
      return `${ip&&ip.getInternalTexture()?ip.getInternalTexture().uniqueId:"NoStrength"}_${cp&&cp.getInternalTexture()?cp.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Bo(pp, ip) {
      const cp = new Ep.d(ip.name, ip.Gl());
      return cp._texture = pp, cp.coordinatesIndex = ip.coordinatesIndex, ip instanceof Ep.d && (cp.uOffset = ip.uOffset, cp.vOffset = ip.vOffset, cp.uScale = ip.uScale, cp.vScale = ip.vScale, cp.wAng = ip.wAng), cp.wrapU = ip.wrapU, cp.wrapV = ip.wrapV, cp
    }
    class No {
      constructor(pp) {
        this.name = Qo, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = pp
      }
      dispose() {
        for (const pp of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[pp].dispose()
        }
        this._mergedTexturesMap = {};
        for (const pp of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[pp].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof ki) {
          if (cp.clearCoat.isEnabled) return cp.clearCoat.texture && Op.push(cp.clearCoat.texture), !cp.clearCoat.useRoughnessFromMainTexture && cp.clearCoat.textureRoughness && Op.push(cp.clearCoat.textureRoughness), cp.clearCoat.bumpTexture && Op.push(cp.clearCoat.bumpTexture), cp.clearCoat.tintTexture && Op.push(cp.clearCoat.tintTexture), Op
        } else if (cp instanceof ic && cp.coatWeight > 0) {
          let pp = !1;
          if (cp.coatWeightTexture ? cp.coatRoughnessTexture ? cp._useCoatRoughnessFromGreenChannel && cp.coatWeightTexture.getInternalTexture() === cp.coatRoughnessTexture.getInternalTexture() ? (Op.push(cp.coatWeightTexture), Op.push(cp.coatRoughnessTexture)) : pp = !0 : Op.push(cp.coatWeightTexture) : cp.coatRoughnessTexture && (cp._useCoatRoughnessFromGreenChannel ? Op.push(cp.coatRoughnessTexture) : pp = !0), pp) {
            const pp = function(pp) {
              const ip = pp.coatWeightTexture,
                cp = ip && ip.getInternalTexture() ? ip.getInternalTexture().uniqueId : "NoCoat",
                Op = pp.coatRoughnessTexture;
              return `${cp}_${Op&&Op.getInternalTexture()?Op.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cp);
            if (!this._cachedInternalTexturesMap[pp]) {
              const ip = await async function(pp) {
                const ip = pp.Gl(),
                  cp = pp.coatWeightTexture,
                  Op = pp.coatRoughnessTexture;
                return cp || Op ? (await Yc("CoatTexture", Pc(cp ? Dc(cp, 0) : Ac(1), Op ? Dc(Op, pp._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ac(1)), ip)).getInternalTexture() : null
              }(cp);
              ip && (this._cachedInternalTexturesMap[pp] = ip)
            }
            this._cachedInternalTexturesMap[pp] && (cp.coatWeightTexture && (this._mergedTexturesMap[cp.coatWeightTexture.uniqueId] = Bo(this._cachedInternalTexturesMap[pp], cp.coatWeightTexture), Op.push(this._mergedTexturesMap[cp.coatWeightTexture.uniqueId])), cp.coatRoughnessTexture && (this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId] = Bo(this._cachedInternalTexturesMap[pp], cp.coatRoughnessTexture), Op.push(this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId])))
          }
          if (cp.geometryCoatNormalTexture && Op.push(cp.geometryCoatNormalTexture), cp.coatColorTexture && Op.push(cp.coatColorTexture), cp.coatRoughnessAnisotropy > 0) {
            const pp = Jo(cp);
            if (this._mergedTexturesMap[pp]) Op.push(this._mergedTexturesMap[pp]);
            else {
              const ip = await async function(pp) {
                const ip = pp.Gl(),
                  cp = pp.coatRoughnessAnisotropyTexture,
                  Op = pp.geometryCoatTangentTexture;
                return cp || Op ? await Yc("AnisotropyTexture", Pc(Op ? Dc(Op, 0) : Ac(1), Op ? Dc(Op, 1) : Ac(0), cp ? Dc(cp, 0) : Ac(1)), ip) : null
              }(cp);
              ip && (Op.push(ip), this._mergedTexturesMap[pp] = ip)
            }
            return Op
          }
          return Op
        }
        return []
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          var Op;
          if (cp instanceof ki) {
            if (!cp.clearCoat.isEnabled) return void pp(ip);
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const Op = this._exporter._materialExporter.getTextureInfo(cp.clearCoat.texture);
            let op, Ip;
            op = cp.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cp.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cp.clearCoat.textureRoughness), cp.clearCoat.isTintEnabled && (Ip = this._exporter._materialExporter.getTextureInfo(cp.clearCoat.tintTexture));
            const Sp = this._exporter._materialExporter.getTextureInfo(cp.clearCoat.bumpTexture),
              xp = cp.clearCoat.indexOfRefraction,
              Lp = {
                coatFactor: cp.clearCoat.intensity,
                coatTexture: Op ?? void 0,
                coatRoughnessFactor: cp.clearCoat.roughness,
                coatRoughnessTexture: op ?? void 0,
                coatNormalTexture: Sp ?? void 0,
                coatColorFactor: cp.clearCoat.tintColor.BOp(),
                coatColorTexture: Ip ?? void 0,
                coatIor: 1.5 !== xp ? xp : void 0
              };
            null === Lp.coatTexture && null === Lp.coatRoughnessTexture && null === Lp.coatRoughnessTexture && null === Lp.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[Qo] = Lp
          } else if (cp instanceof ic) {
            if (0 == cp.coatWeight) return void pp(ip);
            let op, Ip, Sp, xp;
            this._wasUsed = !0, ip.extensions = ip.extensions || {}, cp.coatWeightTexture && (op = this._mergedTexturesMap[cp.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[cp.coatWeightTexture.uniqueId] : cp.coatWeightTexture, Ip = this._exporter._materialExporter.getTextureInfo(op)), cp.coatRoughnessTexture && (Sp = this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cp.coatRoughnessTexture.uniqueId] : cp.coatRoughnessTexture, xp = this._exporter._materialExporter.getTextureInfo(Sp));
            const Lp = this._exporter._materialExporter.getTextureInfo(cp.geometryCoatNormalTexture),
              Yp = this._exporter._materialExporter.getTextureInfo(cp.coatColorTexture),
              Dp = cp.coatIor,
              Ap = cp.coatDarkening,
              Pp = cp.coatRoughnessTexture,
              Wp = Jo(cp),
              yp = this._mergedTexturesMap[Wp];
            let Up, wp = 0,
              vp = 0;
            if (cp.coatRoughnessAnisotropy > 0) {
              if (Pp || yp) {
                const pp = yp ? this._exporter._materialExporter.getTextureInfo(yp) : null;
                wp = cp.coatRoughnessAnisotropy, vp = cp.geometryCoatTangentAngle, Up = pp || void 0
              } else {
                let pp = cp.coatRoughness,
                  Op = cp.coatRoughnessAnisotropy;
                if (!cp._useGltfStyleAnisotropy) {
                  const ip = function(pp, ip) {
                    const cp = pp * pp,
                      Op = cp * Math.sqrt(2 / (1 + (1 - ip) * (1 - ip))),
                      op = (1 - ip) * Op;
                    return {
                      newBaseRoughness: Math.sqrt(op),
                      newAnisotropyStrength: Math.min(Math.sqrt((Op - cp) / Math.max(1 - cp, 1e-4)), 1)
                    }
                  }(cp.coatRoughness, cp.coatRoughnessAnisotropy);
                  pp = ip.newBaseRoughness, Op = ip.newAnisotropyStrength
                }
                ip.pbrMetallicRoughness && (ip.pbrMetallicRoughness.roughnessFactor = pp), wp = Op, vp = cp.geometryCoatTangentAngle + .5 * Math.PI, Up = void 0
              }
              cp._useGltfStyleAnisotropy || (ip.extensions.KHR_materials_openpbr = {}, (Op = this._exporter._glTF).extensionsUsed || (Op.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const tp = {
              coatFactor: cp.coatWeight,
              coatTexture: Ip ?? void 0,
              coatRoughnessFactor: cp.coatRoughness,
              coatRoughnessTexture: xp ?? void 0,
              coatNormalTexture: Lp ?? void 0,
              coatColorFactor: cp.coatColor.BOp(),
              coatColorTexture: Yp ?? void 0,
              coatIor: 1.5 !== Dp ? Dp : void 0,
              coatDarkeningFactor: 1 !== Ap ? Ap : void 0,
              coatAnisotropyRotation: vp,
              coatAnisotropyStrength: wp,
              coatAnisotropyTexture: Up
            };
            null === tp.coatTexture && null === tp.coatRoughnessTexture && null === tp.coatRoughnessTexture && null === tp.coatAnisotropyTexture && null === tp.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[Qo] = tp
          }
          pp(ip)
        }))
      }
    }
    let To = !1;

    function fo() {
      To || (To = !0, NO.RegisterExtension(Qo, (pp => new No(pp))))
    }
    fo();
    let bo = (() => {
      var pp, ip, cp, Op, op, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Mp, Cp, Ep, Xp, lp, Qp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, rp, Zp, zp, sp, Kp, Vp, ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di, ei;
      let ui, ji, Ri, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, ni, Fi, gi, Gi, ri, Zi, zi, si, Ki, Vi, pc, ic, cc, Oc, oc, Ic, Sc, xc, Lc, Yc, Dc, Ac, Pc, Wc, yc, Uc, wc, vc, tc, Hc, dc, ec, uc, jc, kc, mc, Rc, qc, Mc, Cc, Ec, Xc, lc, Qc, Jc, Bc, Nc, Tc, fc, bc, hc, ac = ki,
        nc = [],
        Fc = [],
        gc = [],
        Gc = [],
        rc = [],
        Zc = [],
        zc = [],
        sc = [],
        Kc = [],
        Vc = [],
        pO = [],
        iO = [],
        cO = [],
        OO = [],
        oO = [],
        IO = [],
        SO = [],
        xO = [],
        LO = [],
        YO = [],
        DO = [],
        AO = [],
        PO = [],
        WO = [],
        yO = [],
        UO = [],
        wO = [],
        vO = [],
        tO = [],
        HO = [],
        dO = [],
        eO = [],
        uO = [],
        jO = [],
        kO = [],
        mO = [],
        RO = [],
        qO = [],
        MO = [],
        CO = [],
        EO = [],
        XO = [],
        lO = [],
        QO = [],
        JO = [],
        BO = [],
        NO = [],
        TO = [],
        fO = [],
        bO = [],
        hO = [],
        aO = [],
        nO = [],
        FO = [],
        gO = [],
        GO = [],
        rO = [],
        ZO = [],
        zO = [],
        sO = [],
        KO = [],
        VO = [],
        po = [],
        io = [],
        co = [],
        Oo = [],
        oo = [],
        Io = [],
        So = [],
        xo = [],
        Lo = [],
        Yo = [],
        Do = [],
        Ao = [],
        Po = [],
        Wo = [],
        yo = [],
        Uo = [],
        wo = [],
        vo = [],
        to = [],
        Ho = [],
        eo = [],
        uo = [],
        jo = [],
        ko = [],
        mo = [],
        Ro = [],
        qo = [],
        Mo = [],
        Co = [],
        Eo = [],
        Xo = [],
        Qo = [],
        Jo = [],
        Bo = [],
        No = [],
        To = [],
        fo = [],
        bo = [],
        ho = [],
        ao = [],
        no = [],
        Fo = [],
        go = [],
        Go = [],
        ro = [],
        Zo = [],
        zo = [],
        so = [],
        Ko = [],
        Vo = [],
        pI = [],
        iI = [],
        cI = [],
        OI = [],
        oI = [],
        II = [],
        SI = [],
        xI = [],
        LI = [],
        YI = [],
        DI = [],
        AI = [],
        PI = [],
        WI = [],
        yI = [],
        UI = [],
        wI = [],
        vI = [],
        tI = [],
        HI = [],
        dI = [];
      return pp = class extends ac {
        get directIntensity() {
          return (0, Rp.e)(this, ip, "f")
        }
        set directIntensity(pp) {
          (0, Rp.f)(this, ip, pp, "f")
        }
        get emissiveIntensity() {
          return (0, Rp.e)(this, cp, "f")
        }
        set emissiveIntensity(pp) {
          (0, Rp.f)(this, cp, pp, "f")
        }
        get environmentIntensity() {
          return (0, Rp.e)(this, Op, "f")
        }
        set environmentIntensity(pp) {
          (0, Rp.f)(this, Op, pp, "f")
        }
        get specularIntensity() {
          return (0, Rp.e)(this, op, "f")
        }
        set specularIntensity(pp) {
          (0, Rp.f)(this, op, pp, "f")
        }
        get disableBumpMap() {
          return (0, Rp.e)(this, Sp, "f")
        }
        set disableBumpMap(pp) {
          (0, Rp.f)(this, Sp, pp, "f")
        }
        get albedoTexture() {
          return (0, Rp.e)(this, xp, "f")
        }
        set albedoTexture(pp) {
          (0, Rp.f)(this, xp, pp, "f")
        }
        get baseWeightTexture() {
          return (0, Rp.e)(this, Lp, "f")
        }
        set baseWeightTexture(pp) {
          (0, Rp.f)(this, Lp, pp, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Rp.e)(this, Yp, "f")
        }
        set baseDiffuseRoughnessTexture(pp) {
          (0, Rp.f)(this, Yp, pp, "f")
        }
        get ambientTexture() {
          return (0, Rp.e)(this, Dp, "f")
        }
        set ambientTexture(pp) {
          (0, Rp.f)(this, Dp, pp, "f")
        }
        get ambientTextureStrength() {
          return (0, Rp.e)(this, Ap, "f")
        }
        set ambientTextureStrength(pp) {
          (0, Rp.f)(this, Ap, pp, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Rp.e)(this, Pp, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(pp) {
          (0, Rp.f)(this, Pp, pp, "f")
        }
        get opacityTexture() {
          return (0, Rp.e)(this, Wp, "f")
        }
        set opacityTexture(pp) {
          (0, Rp.f)(this, Wp, pp, "f")
        }
        get reflectionTexture() {
          return (0, Rp.e)(this, yp, "f")
        }
        set reflectionTexture(pp) {
          (0, Rp.f)(this, yp, pp, "f")
        }
        get emissiveTexture() {
          return (0, Rp.e)(this, Up, "f")
        }
        set emissiveTexture(pp) {
          (0, Rp.f)(this, Up, pp, "f")
        }
        get reflectivityTexture() {
          return (0, Rp.e)(this, wp, "f")
        }
        set reflectivityTexture(pp) {
          (0, Rp.f)(this, wp, pp, "f")
        }
        get metallicTexture() {
          return (0, Rp.e)(this, vp, "f")
        }
        set metallicTexture(pp) {
          (0, Rp.f)(this, vp, pp, "f")
        }
        get metallic() {
          return (0, Rp.e)(this, tp, "f")
        }
        set metallic(pp) {
          (0, Rp.f)(this, tp, pp, "f")
        }
        get roughness() {
          return (0, Rp.e)(this, Hp, "f")
        }
        set roughness(pp) {
          (0, Rp.f)(this, Hp, pp, "f")
        }
        get metallicF0Factor() {
          return (0, Rp.e)(this, dp, "f")
        }
        set metallicF0Factor(pp) {
          (0, Rp.f)(this, dp, pp, "f")
        }
        get metallicReflectanceColor() {
          return (0, Rp.e)(this, ep, "f")
        }
        set metallicReflectanceColor(pp) {
          (0, Rp.f)(this, ep, pp, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Rp.e)(this, jp, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(pp) {
          (0, Rp.f)(this, jp, pp, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Rp.e)(this, kp, "f")
        }
        set metallicReflectanceTexture(pp) {
          (0, Rp.f)(this, kp, pp, "f")
        }
        get reflectanceTexture() {
          return (0, Rp.e)(this, mp, "f")
        }
        set reflectanceTexture(pp) {
          (0, Rp.f)(this, mp, pp, "f")
        }
        get microSurfaceTexture() {
          return (0, Rp.e)(this, Mp, "f")
        }
        set microSurfaceTexture(pp) {
          (0, Rp.f)(this, Mp, pp, "f")
        }
        get bumpTexture() {
          return (0, Rp.e)(this, Cp, "f")
        }
        set bumpTexture(pp) {
          (0, Rp.f)(this, Cp, pp, "f")
        }
        get lightmapTexture() {
          return (0, Rp.e)(this, Ep, "f")
        }
        set lightmapTexture(pp) {
          (0, Rp.f)(this, Ep, pp, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(pp) {
          this.subSurface.refractionTexture = pp, pp ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Rp.e)(this, Xp, "f")
        }
        set ambientColor(pp) {
          (0, Rp.f)(this, Xp, pp, "f")
        }
        get albedoColor() {
          return (0, Rp.e)(this, lp, "f")
        }
        set albedoColor(pp) {
          (0, Rp.f)(this, lp, pp, "f")
        }
        get baseWeight() {
          return (0, Rp.e)(this, Qp, "f")
        }
        set baseWeight(pp) {
          (0, Rp.f)(this, Qp, pp, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Rp.e)(this, Bp, "f")
        }
        set baseDiffuseRoughness(pp) {
          (0, Rp.f)(this, Bp, pp, "f")
        }
        get reflectivityColor() {
          return (0, Rp.e)(this, Np, "f")
        }
        set reflectivityColor(pp) {
          (0, Rp.f)(this, Np, pp, "f")
        }
        get reflectionColor() {
          return (0, Rp.e)(this, Tp, "f")
        }
        set reflectionColor(pp) {
          (0, Rp.f)(this, Tp, pp, "f")
        }
        get emissiveColor() {
          return (0, Rp.e)(this, fp, "f")
        }
        set emissiveColor(pp) {
          (0, Rp.f)(this, fp, pp, "f")
        }
        get microSurface() {
          return (0, Rp.e)(this, bp, "f")
        }
        set microSurface(pp) {
          (0, Rp.f)(this, bp, pp, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(pp) {
          this.subSurface.indexOfRefraction = pp
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(pp) {
          this.subSurface.invertRefractionY = pp
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(pp) {
          this.subSurface.linkRefractionWithTransparency = pp, pp && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Rp.e)(this, hp, "f")
        }
        set useLightmapAsShadowmap(pp) {
          (0, Rp.f)(this, hp, pp, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Rp.e)(this, ap, "f")
        }
        set useAlphaFromAlbedoTexture(pp) {
          (0, Rp.f)(this, ap, pp, "f")
        }
        get forceAlphaTest() {
          return (0, Rp.e)(this, np, "f")
        }
        set forceAlphaTest(pp) {
          (0, Rp.f)(this, np, pp, "f")
        }
        get alphaCutOff() {
          return (0, Rp.e)(this, Fp, "f")
        }
        set alphaCutOff(pp) {
          (0, Rp.f)(this, Fp, pp, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Rp.e)(this, gp, "f")
        }
        set useSpecularOverAlpha(pp) {
          (0, Rp.f)(this, gp, pp, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Rp.e)(this, rp, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(pp) {
          (0, Rp.f)(this, rp, pp, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Rp.e)(this, Zp, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(pp) {
          (0, Rp.f)(this, Zp, pp, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Rp.e)(this, zp, "f")
        }
        set useRoughnessFromMetallicTextureGreen(pp) {
          (0, Rp.f)(this, zp, pp, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Rp.e)(this, sp, "f")
        }
        set useMetallnessFromMetallicTextureBlue(pp) {
          (0, Rp.f)(this, sp, pp, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Rp.e)(this, Kp, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(pp) {
          (0, Rp.f)(this, Kp, pp, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Rp.e)(this, Vp, "f")
        }
        set useAmbientInGrayScale(pp) {
          (0, Rp.f)(this, Vp, pp, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Rp.e)(this, ii, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(pp) {
          (0, Rp.f)(this, ii, pp, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === ki.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(pp) {
          pp !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = pp ? ki.LIGHTFALLOFF_PHYSICAL : ki.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === ki.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(pp) {
          pp !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = pp ? ki.LIGHTFALLOFF_GLTF : ki.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Rp.e)(this, ci, "f")
        }
        set useRadianceOverAlpha(pp) {
          (0, Rp.f)(this, ci, pp, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Rp.e)(this, Oi, "f")
        }
        set useObjectSpaceNormalMap(pp) {
          (0, Rp.f)(this, Oi, pp, "f")
        }
        get useParallax() {
          return (0, Rp.e)(this, oi, "f")
        }
        set useParallax(pp) {
          (0, Rp.f)(this, oi, pp, "f")
        }
        get useParallaxOcclusion() {
          return (0, Rp.e)(this, Ii, "f")
        }
        set useParallaxOcclusion(pp) {
          (0, Rp.f)(this, Ii, pp, "f")
        }
        get parallaxScaleBias() {
          return (0, Rp.e)(this, Si, "f")
        }
        set parallaxScaleBias(pp) {
          (0, Rp.f)(this, Si, pp, "f")
        }
        get disableLighting() {
          return (0, Rp.e)(this, xi, "f")
        }
        set disableLighting(pp) {
          (0, Rp.f)(this, xi, pp, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Rp.e)(this, Li, "f")
        }
        set forceIrradianceInFragment(pp) {
          (0, Rp.f)(this, Li, pp, "f")
        }
        get maxSimultaneousLights() {
          return (0, Rp.e)(this, Yi, "f")
        }
        set maxSimultaneousLights(pp) {
          (0, Rp.f)(this, Yi, pp, "f")
        }
        get invertNormalMapX() {
          return (0, Rp.e)(this, Di, "f")
        }
        set invertNormalMapX(pp) {
          (0, Rp.f)(this, Di, pp, "f")
        }
        get invertNormalMapY() {
          return (0, Rp.e)(this, Ai, "f")
        }
        set invertNormalMapY(pp) {
          (0, Rp.f)(this, Ai, pp, "f")
        }
        get twoSidedLighting() {
          return (0, Rp.e)(this, Pi, "f")
        }
        set twoSidedLighting(pp) {
          (0, Rp.f)(this, Pi, pp, "f")
        }
        get useAlphaFresnel() {
          return (0, Rp.e)(this, Wi, "f")
        }
        set useAlphaFresnel(pp) {
          (0, Rp.f)(this, Wi, pp, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Rp.e)(this, yi, "f")
        }
        set useLinearAlphaFresnel(pp) {
          (0, Rp.f)(this, yi, pp, "f")
        }
        get environmentBRDFTexture() {
          return (0, Rp.e)(this, Ui, "f")
        }
        set environmentBRDFTexture(pp) {
          (0, Rp.f)(this, Ui, pp, "f")
        }
        get forceNormalForward() {
          return (0, Rp.e)(this, wi, "f")
        }
        set forceNormalForward(pp) {
          (0, Rp.f)(this, wi, pp, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Rp.e)(this, vi, "f")
        }
        set enableSpecularAntiAliasing(pp) {
          (0, Rp.f)(this, vi, pp, "f")
        }
        get useHorizonOcclusion() {
          return (0, Rp.e)(this, ti, "f")
        }
        set useHorizonOcclusion(pp) {
          (0, Rp.f)(this, ti, pp, "f")
        }
        get useRadianceOcclusion() {
          return (0, Rp.e)(this, Hi, "f")
        }
        set useRadianceOcclusion(pp) {
          (0, Rp.f)(this, Hi, pp, "f")
        }
        get unlit() {
          return (0, Rp.e)(this, di, "f")
        }
        set unlit(pp) {
          (0, Rp.f)(this, di, pp, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Rp.e)(this, ei, "f")
        }
        set applyDecalMapAfterDetailMap(pp) {
          (0, Rp.f)(this, ei, pp, "f")
        }
        constructor(Ip, qp) {
          super(Ip, qp, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ip.set(this, ((0, Rp.l)(this, nc), (0, Rp.l)(this, Fc, 1))), cp.set(this, ((0, Rp.l)(this, gc), (0, Rp.l)(this, Gc, 1))), Op.set(this, ((0, Rp.l)(this, rc), (0, Rp.l)(this, Zc, 1))), op.set(this, ((0, Rp.l)(this, zc), (0, Rp.l)(this, sc, 1))), Sp.set(this, ((0, Rp.l)(this, Kc), (0, Rp.l)(this, Vc, !1))), xp.set(this, ((0, Rp.l)(this, pO), (0, Rp.l)(this, iO, void 0))), Lp.set(this, ((0, Rp.l)(this, cO), (0, Rp.l)(this, OO, void 0))), Yp.set(this, ((0, Rp.l)(this, oO), (0, Rp.l)(this, IO, void 0))), Dp.set(this, ((0, Rp.l)(this, SO), (0, Rp.l)(this, xO, void 0))), Ap.set(this, ((0, Rp.l)(this, LO), (0, Rp.l)(this, YO, 1))), Pp.set(this, ((0, Rp.l)(this, DO), (0, Rp.l)(this, AO, pp.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Wp.set(this, ((0, Rp.l)(this, PO), (0, Rp.l)(this, WO, void 0))), yp.set(this, ((0, Rp.l)(this, yO), (0, Rp.l)(this, UO, void 0))), Up.set(this, ((0, Rp.l)(this, wO), (0, Rp.l)(this, vO, void 0))), wp.set(this, ((0, Rp.l)(this, tO), (0, Rp.l)(this, HO, void 0))), vp.set(this, ((0, Rp.l)(this, dO), (0, Rp.l)(this, eO, void 0))), tp.set(this, ((0, Rp.l)(this, uO), (0, Rp.l)(this, jO, void 0))), Hp.set(this, ((0, Rp.l)(this, kO), (0, Rp.l)(this, mO, void 0))), dp.set(this, ((0, Rp.l)(this, RO), (0, Rp.l)(this, qO, 1))), ep.set(this, ((0, Rp.l)(this, MO), (0, Rp.l)(this, CO, Gp.d.White()))), jp.set(this, ((0, Rp.l)(this, EO), (0, Rp.l)(this, XO, !1))), kp.set(this, ((0, Rp.l)(this, lO), (0, Rp.l)(this, QO, void 0))), mp.set(this, ((0, Rp.l)(this, JO), (0, Rp.l)(this, BO, void 0))), Mp.set(this, ((0, Rp.l)(this, NO), (0, Rp.l)(this, TO, void 0))), Cp.set(this, ((0, Rp.l)(this, fO), (0, Rp.l)(this, bO, void 0))), Ep.set(this, ((0, Rp.l)(this, hO), (0, Rp.l)(this, aO, void 0))), Xp.set(this, ((0, Rp.l)(this, nO), (0, Rp.l)(this, FO, new Gp.d(0, 0, 0)))), lp.set(this, ((0, Rp.l)(this, gO), (0, Rp.l)(this, GO, new Gp.d(1, 1, 1)))), Qp.set(this, ((0, Rp.l)(this, rO), (0, Rp.l)(this, ZO, 1))), Bp.set(this, ((0, Rp.l)(this, zO), (0, Rp.l)(this, sO, void 0))), Np.set(this, ((0, Rp.l)(this, KO), (0, Rp.l)(this, VO, new Gp.d(1, 1, 1)))), Tp.set(this, ((0, Rp.l)(this, po), (0, Rp.l)(this, io, new Gp.d(1, 1, 1)))), fp.set(this, ((0, Rp.l)(this, co), (0, Rp.l)(this, Oo, new Gp.d(0, 0, 0)))), bp.set(this, ((0, Rp.l)(this, oo), (0, Rp.l)(this, Io, 1))), hp.set(this, ((0, Rp.l)(this, So), (0, Rp.l)(this, xo, !1))), ap.set(this, ((0, Rp.l)(this, Lo), (0, Rp.l)(this, Yo, !1))), np.set(this, ((0, Rp.l)(this, Do), (0, Rp.l)(this, Ao, !1))), Fp.set(this, ((0, Rp.l)(this, Po), (0, Rp.l)(this, Wo, .4))), gp.set(this, ((0, Rp.l)(this, yo), (0, Rp.l)(this, Uo, !0))), rp.set(this, ((0, Rp.l)(this, wo), (0, Rp.l)(this, vo, !1))), Zp.set(this, ((0, Rp.l)(this, to), (0, Rp.l)(this, Ho, !0))), zp.set(this, ((0, Rp.l)(this, eo), (0, Rp.l)(this, uo, !1))), sp.set(this, ((0, Rp.l)(this, jo), (0, Rp.l)(this, ko, !1))), Kp.set(this, ((0, Rp.l)(this, mo), (0, Rp.l)(this, Ro, !1))), Vp.set(this, ((0, Rp.l)(this, qo), (0, Rp.l)(this, Mo, !1))), ii.set(this, ((0, Rp.l)(this, Co), (0, Rp.l)(this, Eo, !1))), ci.set(this, ((0, Rp.l)(this, Xo), (0, Rp.l)(this, Qo, !0))), Oi.set(this, ((0, Rp.l)(this, Jo), (0, Rp.l)(this, Bo, !1))), oi.set(this, ((0, Rp.l)(this, No), (0, Rp.l)(this, To, !1))), Ii.set(this, ((0, Rp.l)(this, fo), (0, Rp.l)(this, bo, !1))), Si.set(this, ((0, Rp.l)(this, ho), (0, Rp.l)(this, ao, .05))), xi.set(this, ((0, Rp.l)(this, no), (0, Rp.l)(this, Fo, !1))), Li.set(this, ((0, Rp.l)(this, go), (0, Rp.l)(this, Go, !1))), Yi.set(this, ((0, Rp.l)(this, ro), (0, Rp.l)(this, Zo, 4))), Di.set(this, ((0, Rp.l)(this, zo), (0, Rp.l)(this, so, !1))), Ai.set(this, ((0, Rp.l)(this, Ko), (0, Rp.l)(this, Vo, !1))), Pi.set(this, ((0, Rp.l)(this, pI), (0, Rp.l)(this, iI, !1))), Wi.set(this, ((0, Rp.l)(this, cI), (0, Rp.l)(this, OI, !1))), yi.set(this, ((0, Rp.l)(this, oI), (0, Rp.l)(this, II, !1))), Ui.set(this, ((0, Rp.l)(this, SI), (0, Rp.l)(this, xI, null))), wi.set(this, ((0, Rp.l)(this, LI), (0, Rp.l)(this, YI, !1))), vi.set(this, ((0, Rp.l)(this, DI), (0, Rp.l)(this, AI, !1))), ti.set(this, ((0, Rp.l)(this, PI), (0, Rp.l)(this, WI, !0))), Hi.set(this, ((0, Rp.l)(this, yI), (0, Rp.l)(this, UI, !0))), di.set(this, ((0, Rp.l)(this, wI), (0, Rp.l)(this, vI, !1))), ei.set(this, ((0, Rp.l)(this, tI), (0, Rp.l)(this, HI, !1))), (0, Rp.l)(this, dI), this._environmentBRDFTexture = Jp(this.Gl())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(ip) {
          let cp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const op = mi.c.Clone((() => new pp(ip, this.Gl())), this, {
            cloneTexturesOnlyOnce: cp
          });
          return op.id = ip, op.name = ip, this.stencil.copyTo(op.stencil), this._clonePlugins(op, Op), op
        }
        serialize() {
          const pp = super.serialize();
          return pp.customType = "BABYLON.PBRMaterial", pp
        }
        static Parse(ip, cp, Op) {
          const op = mi.c.Parse((() => new pp(ip.name, cp)), ip, cp, Op);
          return ip.stencil && op.stencil.parse(ip.stencil, cp, Op), Ip.b._ParsePlugins(ip, op, cp, Op), ip.clearCoat && op.clearCoat.parse(ip.clearCoat, cp, Op), ip.anisotropy && op.anisotropy.parse(ip.anisotropy, cp, Op), ip.brdf && op.brdf.parse(ip.brdf, cp, Op), ip.sheen && op.sheen.parse(ip.sheen, cp, Op), ip.subSurface && op.subSurface.parse(ip.subSurface, cp, Op), ip.iridescence && op.iridescence.parse(ip.iridescence, cp, Op), op
        }
      }, ip = new WeakMap, cp = new WeakMap, Op = new WeakMap, op = new WeakMap, Sp = new WeakMap, xp = new WeakMap, Lp = new WeakMap, Yp = new WeakMap, Dp = new WeakMap, Ap = new WeakMap, Pp = new WeakMap, Wp = new WeakMap, yp = new WeakMap, Up = new WeakMap, wp = new WeakMap, vp = new WeakMap, tp = new WeakMap, Hp = new WeakMap, dp = new WeakMap, ep = new WeakMap, jp = new WeakMap, kp = new WeakMap, mp = new WeakMap, Mp = new WeakMap, Cp = new WeakMap, Ep = new WeakMap, Xp = new WeakMap, lp = new WeakMap, Qp = new WeakMap, Bp = new WeakMap, Np = new WeakMap, Tp = new WeakMap, fp = new WeakMap, bp = new WeakMap, hp = new WeakMap, ap = new WeakMap, np = new WeakMap, Fp = new WeakMap, gp = new WeakMap, rp = new WeakMap, Zp = new WeakMap, zp = new WeakMap, sp = new WeakMap, Kp = new WeakMap, Vp = new WeakMap, ii = new WeakMap, ci = new WeakMap, Oi = new WeakMap, oi = new WeakMap, Ii = new WeakMap, Si = new WeakMap, xi = new WeakMap, Li = new WeakMap, Yi = new WeakMap, Di = new WeakMap, Ai = new WeakMap, Pi = new WeakMap, Wi = new WeakMap, yi = new WeakMap, Ui = new WeakMap, wi = new WeakMap, vi = new WeakMap, ti = new WeakMap, Hi = new WeakMap, di = new WeakMap, ei = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(ac[Symbol.metadata] ?? null) : void 0;
        ui = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ri = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Mi = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ei = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], li = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ji = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ni = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ni = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Fi = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], gi = [(0, qp.n)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], si = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ki = [(0, qp.C)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty", null)], Vi = [(0, qp.n)("ambient"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, qp.n)("albedo"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, qp.K)("baseWeight"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], cc = [(0, qp.K)("baseDiffuseRoughness"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, qp.n)("reflectivity"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, qp.n)("reflection"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, qp.n)("emissive"), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], xc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Yc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Dc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ac = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], yc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Uc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], wc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], vc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, qp.K)()], dc = [(0, qp.K)()], ec = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsLightsDirty")], qc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsLightsDirty")], Cc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Xc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], fc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsTexturesDirty")], bc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], hc = [(0, qp.K)(), (0, qp.e)("_markAllSubMeshesAsMiscDirty")], (0, Rp.j)(pp, null, ui, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "directIntensity" in pp,
            get: pp => pp.directIntensity,
            set: (pp, ip) => {
              pp.directIntensity = ip
            }
          },
          metadata: ip
        }, Fc, gc), (0, Rp.j)(pp, null, ji, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "emissiveIntensity" in pp,
            get: pp => pp.emissiveIntensity,
            set: (pp, ip) => {
              pp.emissiveIntensity = ip
            }
          },
          metadata: ip
        }, Gc, rc), (0, Rp.j)(pp, null, Ri, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "environmentIntensity" in pp,
            get: pp => pp.environmentIntensity,
            set: (pp, ip) => {
              pp.environmentIntensity = ip
            }
          },
          metadata: ip
        }, Zc, zc), (0, Rp.j)(pp, null, qi, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "specularIntensity" in pp,
            get: pp => pp.specularIntensity,
            set: (pp, ip) => {
              pp.specularIntensity = ip
            }
          },
          metadata: ip
        }, sc, Kc), (0, Rp.j)(pp, null, Mi, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: pp => "disableBumpMap" in pp,
            get: pp => pp.disableBumpMap,
            set: (pp, ip) => {
              pp.disableBumpMap = ip
            }
          },
          metadata: ip
        }, Vc, pO), (0, Rp.j)(pp, null, Ci, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "albedoTexture" in pp,
            get: pp => pp.albedoTexture,
            set: (pp, ip) => {
              pp.albedoTexture = ip
            }
          },
          metadata: ip
        }, iO, cO), (0, Rp.j)(pp, null, Ei, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "baseWeightTexture" in pp,
            get: pp => pp.baseWeightTexture,
            set: (pp, ip) => {
              pp.baseWeightTexture = ip
            }
          },
          metadata: ip
        }, OO, oO), (0, Rp.j)(pp, null, Xi, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "baseDiffuseRoughnessTexture" in pp,
            get: pp => pp.baseDiffuseRoughnessTexture,
            set: (pp, ip) => {
              pp.baseDiffuseRoughnessTexture = ip
            }
          },
          metadata: ip
        }, IO, SO), (0, Rp.j)(pp, null, li, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "ambientTexture" in pp,
            get: pp => pp.ambientTexture,
            set: (pp, ip) => {
              pp.ambientTexture = ip
            }
          },
          metadata: ip
        }, xO, LO), (0, Rp.j)(pp, null, Qi, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: pp => "ambientTextureStrength" in pp,
            get: pp => pp.ambientTextureStrength,
            set: (pp, ip) => {
              pp.ambientTextureStrength = ip
            }
          },
          metadata: ip
        }, YO, DO), (0, Rp.j)(pp, null, Ji, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: pp => "ambientTextureImpactOnAnalyticalLights" in pp,
            get: pp => pp.ambientTextureImpactOnAnalyticalLights,
            set: (pp, ip) => {
              pp.ambientTextureImpactOnAnalyticalLights = ip
            }
          },
          metadata: ip
        }, AO, PO), (0, Rp.j)(pp, null, Bi, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "opacityTexture" in pp,
            get: pp => pp.opacityTexture,
            set: (pp, ip) => {
              pp.opacityTexture = ip
            }
          },
          metadata: ip
        }, WO, yO), (0, Rp.j)(pp, null, Ni, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "reflectionTexture" in pp,
            get: pp => pp.reflectionTexture,
            set: (pp, ip) => {
              pp.reflectionTexture = ip
            }
          },
          metadata: ip
        }, UO, wO), (0, Rp.j)(pp, null, Ti, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "emissiveTexture" in pp,
            get: pp => pp.emissiveTexture,
            set: (pp, ip) => {
              pp.emissiveTexture = ip
            }
          },
          metadata: ip
        }, vO, tO), (0, Rp.j)(pp, null, fi, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "reflectivityTexture" in pp,
            get: pp => pp.reflectivityTexture,
            set: (pp, ip) => {
              pp.reflectivityTexture = ip
            }
          },
          metadata: ip
        }, HO, dO), (0, Rp.j)(pp, null, bi, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "metallicTexture" in pp,
            get: pp => pp.metallicTexture,
            set: (pp, ip) => {
              pp.metallicTexture = ip
            }
          },
          metadata: ip
        }, eO, uO), (0, Rp.j)(pp, null, ai, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: pp => "metallic" in pp,
            get: pp => pp.metallic,
            set: (pp, ip) => {
              pp.metallic = ip
            }
          },
          metadata: ip
        }, jO, kO), (0, Rp.j)(pp, null, ni, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "roughness" in pp,
            get: pp => pp.roughness,
            set: (pp, ip) => {
              pp.roughness = ip
            }
          },
          metadata: ip
        }, mO, RO), (0, Rp.j)(pp, null, Fi, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: pp => "metallicF0Factor" in pp,
            get: pp => pp.metallicF0Factor,
            set: (pp, ip) => {
              pp.metallicF0Factor = ip
            }
          },
          metadata: ip
        }, qO, MO), (0, Rp.j)(pp, null, gi, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "metallicReflectanceColor" in pp,
            get: pp => pp.metallicReflectanceColor,
            set: (pp, ip) => {
              pp.metallicReflectanceColor = ip
            }
          },
          metadata: ip
        }, CO, EO), (0, Rp.j)(pp, null, Gi, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "useOnlyMetallicFromMetallicReflectanceTexture" in pp,
            get: pp => pp.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (pp, ip) => {
              pp.useOnlyMetallicFromMetallicReflectanceTexture = ip
            }
          },
          metadata: ip
        }, XO, lO), (0, Rp.j)(pp, null, ri, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "metallicReflectanceTexture" in pp,
            get: pp => pp.metallicReflectanceTexture,
            set: (pp, ip) => {
              pp.metallicReflectanceTexture = ip
            }
          },
          metadata: ip
        }, QO, JO), (0, Rp.j)(pp, null, Zi, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "reflectanceTexture" in pp,
            get: pp => pp.reflectanceTexture,
            set: (pp, ip) => {
              pp.reflectanceTexture = ip
            }
          },
          metadata: ip
        }, BO, NO), (0, Rp.j)(pp, null, zi, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "microSurfaceTexture" in pp,
            get: pp => pp.microSurfaceTexture,
            set: (pp, ip) => {
              pp.microSurfaceTexture = ip
            }
          },
          metadata: ip
        }, TO, fO), (0, Rp.j)(pp, null, si, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "bumpTexture" in pp,
            get: pp => pp.bumpTexture,
            set: (pp, ip) => {
              pp.bumpTexture = ip
            }
          },
          metadata: ip
        }, bO, hO), (0, Rp.j)(pp, null, Ki, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "lightmapTexture" in pp,
            get: pp => pp.lightmapTexture,
            set: (pp, ip) => {
              pp.lightmapTexture = ip
            }
          },
          metadata: ip
        }, aO, nO), (0, Rp.j)(pp, null, Vi, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "ambientColor" in pp,
            get: pp => pp.ambientColor,
            set: (pp, ip) => {
              pp.ambientColor = ip
            }
          },
          metadata: ip
        }, FO, gO), (0, Rp.j)(pp, null, pc, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "albedoColor" in pp,
            get: pp => pp.albedoColor,
            set: (pp, ip) => {
              pp.albedoColor = ip
            }
          },
          metadata: ip
        }, GO, rO), (0, Rp.j)(pp, null, ic, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: pp => "baseWeight" in pp,
            get: pp => pp.baseWeight,
            set: (pp, ip) => {
              pp.baseWeight = ip
            }
          },
          metadata: ip
        }, ZO, zO), (0, Rp.j)(pp, null, cc, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: pp => "baseDiffuseRoughness" in pp,
            get: pp => pp.baseDiffuseRoughness,
            set: (pp, ip) => {
              pp.baseDiffuseRoughness = ip
            }
          },
          metadata: ip
        }, sO, KO), (0, Rp.j)(pp, null, Oc, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "reflectivityColor" in pp,
            get: pp => pp.reflectivityColor,
            set: (pp, ip) => {
              pp.reflectivityColor = ip
            }
          },
          metadata: ip
        }, VO, po), (0, Rp.j)(pp, null, oc, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "reflectionColor" in pp,
            get: pp => pp.reflectionColor,
            set: (pp, ip) => {
              pp.reflectionColor = ip
            }
          },
          metadata: ip
        }, io, co), (0, Rp.j)(pp, null, Ic, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: pp => "emissiveColor" in pp,
            get: pp => pp.emissiveColor,
            set: (pp, ip) => {
              pp.emissiveColor = ip
            }
          },
          metadata: ip
        }, Oo, oo), (0, Rp.j)(pp, null, Sc, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: pp => "microSurface" in pp,
            get: pp => pp.microSurface,
            set: (pp, ip) => {
              pp.microSurface = ip
            }
          },
          metadata: ip
        }, Io, So), (0, Rp.j)(pp, null, xc, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: pp => "useLightmapAsShadowmap" in pp,
            get: pp => pp.useLightmapAsShadowmap,
            set: (pp, ip) => {
              pp.useLightmapAsShadowmap = ip
            }
          },
          metadata: ip
        }, xo, Lo), (0, Rp.j)(pp, null, Lc, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAlphaFromAlbedoTexture" in pp,
            get: pp => pp.useAlphaFromAlbedoTexture,
            set: (pp, ip) => {
              pp.useAlphaFromAlbedoTexture = ip
            }
          },
          metadata: ip
        }, Yo, Do), (0, Rp.j)(pp, null, Yc, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: pp => "forceAlphaTest" in pp,
            get: pp => pp.forceAlphaTest,
            set: (pp, ip) => {
              pp.forceAlphaTest = ip
            }
          },
          metadata: ip
        }, Ao, Po), (0, Rp.j)(pp, null, Dc, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: pp => "alphaCutOff" in pp,
            get: pp => pp.alphaCutOff,
            set: (pp, ip) => {
              pp.alphaCutOff = ip
            }
          },
          metadata: ip
        }, Wo, yo), (0, Rp.j)(pp, null, Ac, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "useSpecularOverAlpha" in pp,
            get: pp => pp.useSpecularOverAlpha,
            set: (pp, ip) => {
              pp.useSpecularOverAlpha = ip
            }
          },
          metadata: ip
        }, Uo, wo), (0, Rp.j)(pp, null, Pc, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "useMicroSurfaceFromReflectivityMapAlpha" in pp,
            get: pp => pp.useMicroSurfaceFromReflectivityMapAlpha,
            set: (pp, ip) => {
              pp.useMicroSurfaceFromReflectivityMapAlpha = ip
            }
          },
          metadata: ip
        }, vo, to), (0, Rp.j)(pp, null, Wc, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRoughnessFromMetallicTextureAlpha" in pp,
            get: pp => pp.useRoughnessFromMetallicTextureAlpha,
            set: (pp, ip) => {
              pp.useRoughnessFromMetallicTextureAlpha = ip
            }
          },
          metadata: ip
        }, Ho, eo), (0, Rp.j)(pp, null, yc, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRoughnessFromMetallicTextureGreen" in pp,
            get: pp => pp.useRoughnessFromMetallicTextureGreen,
            set: (pp, ip) => {
              pp.useRoughnessFromMetallicTextureGreen = ip
            }
          },
          metadata: ip
        }, uo, jo), (0, Rp.j)(pp, null, Uc, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: pp => "useMetallnessFromMetallicTextureBlue" in pp,
            get: pp => pp.useMetallnessFromMetallicTextureBlue,
            set: (pp, ip) => {
              pp.useMetallnessFromMetallicTextureBlue = ip
            }
          },
          metadata: ip
        }, ko, mo), (0, Rp.j)(pp, null, wc, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAmbientOcclusionFromMetallicTextureRed" in pp,
            get: pp => pp.useAmbientOcclusionFromMetallicTextureRed,
            set: (pp, ip) => {
              pp.useAmbientOcclusionFromMetallicTextureRed = ip
            }
          },
          metadata: ip
        }, Ro, qo), (0, Rp.j)(pp, null, vc, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAmbientInGrayScale" in pp,
            get: pp => pp.useAmbientInGrayScale,
            set: (pp, ip) => {
              pp.useAmbientInGrayScale = ip
            }
          },
          metadata: ip
        }, Mo, Co), (0, Rp.j)(pp, null, tc, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAutoMicroSurfaceFromReflectivityMap" in pp,
            get: pp => pp.useAutoMicroSurfaceFromReflectivityMap,
            set: (pp, ip) => {
              pp.useAutoMicroSurfaceFromReflectivityMap = ip
            }
          },
          metadata: ip
        }, Eo, Xo), (0, Rp.j)(pp, null, Hc, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: pp => "usePhysicalLightFalloff" in pp,
            get: pp => pp.usePhysicalLightFalloff
          },
          metadata: ip
        }, null, nc), (0, Rp.j)(pp, null, dc, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: pp => "useGLTFLightFalloff" in pp,
            get: pp => pp.useGLTFLightFalloff
          },
          metadata: ip
        }, null, nc), (0, Rp.j)(pp, null, ec, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRadianceOverAlpha" in pp,
            get: pp => pp.useRadianceOverAlpha,
            set: (pp, ip) => {
              pp.useRadianceOverAlpha = ip
            }
          },
          metadata: ip
        }, Qo, Jo), (0, Rp.j)(pp, null, uc, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: pp => "useObjectSpaceNormalMap" in pp,
            get: pp => pp.useObjectSpaceNormalMap,
            set: (pp, ip) => {
              pp.useObjectSpaceNormalMap = ip
            }
          },
          metadata: ip
        }, Bo, No), (0, Rp.j)(pp, null, jc, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: pp => "useParallax" in pp,
            get: pp => pp.useParallax,
            set: (pp, ip) => {
              pp.useParallax = ip
            }
          },
          metadata: ip
        }, To, fo), (0, Rp.j)(pp, null, kc, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: pp => "useParallaxOcclusion" in pp,
            get: pp => pp.useParallaxOcclusion,
            set: (pp, ip) => {
              pp.useParallaxOcclusion = ip
            }
          },
          metadata: ip
        }, bo, ho), (0, Rp.j)(pp, null, mc, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: pp => "parallaxScaleBias" in pp,
            get: pp => pp.parallaxScaleBias,
            set: (pp, ip) => {
              pp.parallaxScaleBias = ip
            }
          },
          metadata: ip
        }, ao, no), (0, Rp.j)(pp, null, Rc, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: pp => "disableLighting" in pp,
            get: pp => pp.disableLighting,
            set: (pp, ip) => {
              pp.disableLighting = ip
            }
          },
          metadata: ip
        }, Fo, go), (0, Rp.j)(pp, null, qc, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: pp => "forceIrradianceInFragment" in pp,
            get: pp => pp.forceIrradianceInFragment,
            set: (pp, ip) => {
              pp.forceIrradianceInFragment = ip
            }
          },
          metadata: ip
        }, Go, ro), (0, Rp.j)(pp, null, Mc, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: pp => "maxSimultaneousLights" in pp,
            get: pp => pp.maxSimultaneousLights,
            set: (pp, ip) => {
              pp.maxSimultaneousLights = ip
            }
          },
          metadata: ip
        }, Zo, zo), (0, Rp.j)(pp, null, Cc, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: pp => "invertNormalMapX" in pp,
            get: pp => pp.invertNormalMapX,
            set: (pp, ip) => {
              pp.invertNormalMapX = ip
            }
          },
          metadata: ip
        }, so, Ko), (0, Rp.j)(pp, null, Ec, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: pp => "invertNormalMapY" in pp,
            get: pp => pp.invertNormalMapY,
            set: (pp, ip) => {
              pp.invertNormalMapY = ip
            }
          },
          metadata: ip
        }, Vo, pI), (0, Rp.j)(pp, null, Xc, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: pp => "twoSidedLighting" in pp,
            get: pp => pp.twoSidedLighting,
            set: (pp, ip) => {
              pp.twoSidedLighting = ip
            }
          },
          metadata: ip
        }, iI, cI), (0, Rp.j)(pp, null, lc, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: pp => "useAlphaFresnel" in pp,
            get: pp => pp.useAlphaFresnel,
            set: (pp, ip) => {
              pp.useAlphaFresnel = ip
            }
          },
          metadata: ip
        }, OI, oI), (0, Rp.j)(pp, null, Qc, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: pp => "useLinearAlphaFresnel" in pp,
            get: pp => pp.useLinearAlphaFresnel,
            set: (pp, ip) => {
              pp.useLinearAlphaFresnel = ip
            }
          },
          metadata: ip
        }, II, SI), (0, Rp.j)(pp, null, Jc, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: pp => "environmentBRDFTexture" in pp,
            get: pp => pp.environmentBRDFTexture,
            set: (pp, ip) => {
              pp.environmentBRDFTexture = ip
            }
          },
          metadata: ip
        }, xI, LI), (0, Rp.j)(pp, null, Bc, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: pp => "forceNormalForward" in pp,
            get: pp => pp.forceNormalForward,
            set: (pp, ip) => {
              pp.forceNormalForward = ip
            }
          },
          metadata: ip
        }, YI, DI), (0, Rp.j)(pp, null, Nc, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: pp => "enableSpecularAntiAliasing" in pp,
            get: pp => pp.enableSpecularAntiAliasing,
            set: (pp, ip) => {
              pp.enableSpecularAntiAliasing = ip
            }
          },
          metadata: ip
        }, AI, PI), (0, Rp.j)(pp, null, Tc, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: pp => "useHorizonOcclusion" in pp,
            get: pp => pp.useHorizonOcclusion,
            set: (pp, ip) => {
              pp.useHorizonOcclusion = ip
            }
          },
          metadata: ip
        }, WI, yI), (0, Rp.j)(pp, null, fc, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: pp => "useRadianceOcclusion" in pp,
            get: pp => pp.useRadianceOcclusion,
            set: (pp, ip) => {
              pp.useRadianceOcclusion = ip
            }
          },
          metadata: ip
        }, UI, wI), (0, Rp.j)(pp, null, bc, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: pp => "unlit" in pp,
            get: pp => pp.unlit,
            set: (pp, ip) => {
              pp.unlit = ip
            }
          },
          metadata: ip
        }, vI, tI), (0, Rp.j)(pp, null, hc, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: pp => "applyDecalMapAfterDetailMap" in pp,
            get: pp => pp.applyDecalMapAfterDetailMap,
            set: (pp, ip) => {
              pp.applyDecalMapAfterDetailMap = ip
            }
          },
          metadata: ip
        }, HI, dI), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp.PBRMATERIAL_OPAQUE = ki.PBRMATERIAL_OPAQUE, pp.PBRMATERIAL_ALPHATEST = ki.PBRMATERIAL_ALPHATEST, pp.PBRMATERIAL_ALPHABLEND = ki.PBRMATERIAL_ALPHABLEND, pp.PBRMATERIAL_ALPHATESTANDBLEND = ki.PBRMATERIAL_ALPHATESTANDBLEND, pp.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = ki.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, pp
    })();
    const ho = "KHR_materials_diffuse_transmission";

    function ao(pp, ip) {
      const cp = ip.subSurface;
      let Op = null;
      return cp.translucencyIntensityTexture ? Op = cp.translucencyIntensityTexture : cp.thicknessTexture && cp.useMaskFromThicknessTexture && (Op = cp.thicknessTexture), Op && !cp.useGltfStyleTextures ? (Mp.e.Warn(`${pp}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${ip.name}`, 1), null) : Op
    }
    class no {
      constructor(pp) {
        this.name = ho, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof bo && this._isExtensionEnabled(cp)) {
          const ip = ao(pp, cp);
          return ip && Op.push(ip), cp.subSurface.translucencyColorTexture && Op.push(cp.subSurface.translucencyColorTexture), Op
        }
        return Op
      }
      _isExtensionEnabled(pp) {
        if (pp.unlit) return !1;
        const ip = pp.subSurface;
        return !!ip.isTranslucencyEnabled && (!pp.unlit && !ip.useAlbedoToTintTranslucency && ip.useGltfStyleTextures && 1 === ip.volumeIndexOfRefraction && 0 === ip.minimumThickness && 0 === ip.maximumThickness)
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((Op => {
          if (cp instanceof bo && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            const Op = cp.subSurface,
              op = ao(pp, cp),
              Ip = 0 == Op.translucencyIntensity ? void 0 : Op.translucencyIntensity,
              Sp = this._exporter._materialExporter.getTextureInfo(op) ?? void 0,
              xp = !Op.translucencyColor || Op.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Op.translucencyColor.BOp(),
              Lp = this._exporter._materialExporter.getTextureInfo(Op.translucencyColorTexture) ?? void 0,
              Yp = {
                diffuseTransmissionFactor: Ip,
                diffuseTransmissionTexture: Sp,
                diffuseTransmissionColorFactor: xp,
                diffuseTransmissionColorTexture: Lp
              };
            (Sp || Lp) && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions = ip.extensions || {}, ip.extensions[ho] = Yp
          }
          Op(ip)
        }))
      }
    }
    let Fo = !1;

    function go() {
      Fo || (Fo = !0, NO.RegisterExtension(ho, (pp => new no(pp))))
    }
    go();
    const Go = "KHR_materials_dispersion";
    class ro {
      constructor() {
        this.name = Go, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(pp) {
        if (pp.unlit) return !1;
        const ip = pp.subSurface;
        return !(!ip.isRefractionEnabled && !ip.isDispersionEnabled)
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof bo && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            const pp = {
              dispersion: cp.subSurface.dispersion
            };
            ip.extensions = ip.extensions || {}, ip.extensions[Go] = pp
          }
          pp(ip)
        }))
      }
    }
    let Zo = !1;

    function zo() {
      Zo || (Zo = !0, NO.RegisterExtension(Go, (() => new ro)))
    }
    zo();
    const so = "KHR_materials_emissive_strength";
    class Ko {
      constructor() {
        this.name = so, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(pp, ip, cp) {
        return await new Promise((pp => {
          if (!(cp instanceof bo)) return pp(ip);
          const Op = cp.emissiveColor.scale(cp.emissiveIntensity),
            op = Math.max(...Op.BOp());
          if (op > 1) {
            ip.emissiveFactor = Op.scale(1 / op).BOp(), this._wasUsed = !0;
            const pp = {
              emissiveStrength: op
            };
            ip.extensions || (ip.extensions = {}), ip.extensions[so] = pp
          } else ip.emissiveFactor = Op.BOp();
          return pp(ip)
        }))
      }
    }
    let Vo = !1;

    function pI() {
      Vo || (Vo = !0, NO.RegisterExtension(so, (() => new Ko)))
    }
    pI();
    const iI = "KHR_materials_ior";
    class cI {
      constructor() {
        this.name = iI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(pp) {
        return !pp.unlit && (pp instanceof ic ? 1.5 != pp.specularIor : pp instanceof bo && (void 0 != pp.indexOfRefraction && 1.5 != pp.indexOfRefraction))
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof bo && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            const pp = {
              ior: cp.indexOfRefraction
            };
            ip.extensions = ip.extensions || {}, ip.extensions[iI] = pp
          } else if (cp instanceof ic && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            const pp = {
              ior: cp.specularIor
            };
            ip.extensions = ip.extensions || {}, ip.extensions[iI] = pp
          }
          pp(ip)
        }))
      }
    }
    let OI = !1;

    function oI() {
      OI || (OI = !0, NO.RegisterExtension(iI, (() => new cI)))
    }
    oI();
    const II = "KHR_materials_iridescence";
    class SI {
      constructor(pp) {
        this.name = II, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof ki) {
          if (cp.iridescence.isEnabled) return cp.iridescence.texture && Op.push(cp.iridescence.texture), cp.iridescence.thicknessTexture && cp.iridescence.thicknessTexture !== cp.iridescence.texture && Op.push(cp.iridescence.thicknessTexture), Op
        } else if (cp instanceof ic && cp.thinFilmWeight > 0) return cp.thinFilmWeightTexture && Op.push(cp.thinFilmWeightTexture), cp.thinFilmThicknessTexture && cp.thinFilmThicknessTexture !== cp.thinFilmWeightTexture && Op.push(cp.thinFilmThicknessTexture), Op;
        return []
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof ki) {
            if (!cp.iridescence.isEnabled) return void pp(ip);
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const Op = this._exporter._materialExporter.getTextureInfo(cp.iridescence.texture),
              op = this._exporter._materialExporter.getTextureInfo(cp.iridescence.thicknessTexture),
              Ip = {
                iridescenceFactor: cp.iridescence.intensity,
                iridescenceIor: cp.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: cp.iridescence.minimumThickness,
                iridescenceThicknessMaximum: cp.iridescence.maximumThickness,
                iridescenceTexture: Op ?? void 0,
                iridescenceThicknessTexture: op ?? void 0
              };
            null === Ip.iridescenceTexture && null === Ip.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[II] = Ip
          } else if (cp instanceof ic) {
            if (cp.thinFilmWeight <= 0) return void pp(ip);
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const Op = this._exporter._materialExporter.getTextureInfo(cp.thinFilmWeightTexture),
              op = this._exporter._materialExporter.getTextureInfo(cp.thinFilmThicknessTexture),
              Ip = {
                iridescenceFactor: cp.thinFilmWeight,
                iridescenceIor: cp.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * cp.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * cp.thinFilmThickness,
                iridescenceTexture: Op ?? void 0,
                iridescenceThicknessTexture: op ?? void 0
              };
            null === Ip.iridescenceTexture && null === Ip.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[II] = Ip
          }
          pp(ip)
        }))
      }
    }
    let xI = !1;

    function LI() {
      xI || (xI = !0, NO.RegisterExtension(II, (pp => new SI(pp))))
    }
    LI();
    const YI = "KHR_materials_sheen";
    class DI {
      constructor(pp) {
        this.name = YI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        return cp instanceof bo && cp.sheen.isEnabled && cp.sheen.texture ? [cp.sheen.texture] : []
      }
      async postExportMaterialAsync(pp, ip, cp) {
        return await new Promise((pp => {
          if (cp instanceof bo) {
            if (!cp.sheen.isEnabled) return void pp(ip);
            this._wasUsed = !0, null == ip.extensions && (ip.extensions = {});
            const Op = {
              sheenColorFactor: cp.sheen.color.BOp(),
              sheenRoughnessFactor: cp.sheen.roughness ?? 0
            };
            null === Op.sheenColorTexture && null === Op.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cp), cp.sheen.texture && (Op.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(cp.sheen.texture) ?? void 0), cp.sheen.textureRoughness && !cp.sheen.useRoughnessFromMainTexture ? Op.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cp.sheen.textureRoughness) ?? void 0 : cp.sheen.texture && cp.sheen.useRoughnessFromMainTexture && (Op.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cp.sheen.texture) ?? void 0), ip.extensions[YI] = Op
          }
          pp(ip)
        }))
      }
    }
    let AI = !1;

    function PI() {
      AI || (AI = !0, NO.RegisterExtension(YI, (pp => new DI(pp))))
    }
    PI();
    const WI = "KHR_materials_fuzz";

    function yI(pp, ip) {
      const cp = new Ep.d(ip.name, ip.Gl());
      return cp._texture = pp, cp.coordinatesIndex = ip.coordinatesIndex, ip instanceof Ep.d && (cp.uOffset = ip.uOffset, cp.vOffset = ip.vOffset, cp.uScale = ip.uScale, cp.vScale = ip.vScale, cp.wAng = ip.wAng), cp.wrapU = ip.wrapU, cp.wrapV = ip.wrapV, cp
    }
    class UI {
      constructor(pp) {
        this.name = WI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = pp
      }
      dispose() {
        for (const pp of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[pp].dispose()
        }
        this._mergedTexturesMap = {};
        for (const pp of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[pp].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        if (cp instanceof ic) {
          const pp = [];
          if (cp.fuzzWeight > 0) {
            cp.fuzzWeightTexture && pp.push(cp.fuzzWeightTexture);
            let ip = !1;
            if (cp.fuzzRoughnessTexture && (cp._useFuzzRoughnessFromTextureAlpha ? pp.push(cp.fuzzRoughnessTexture) : ip = !0), cp.fuzzColorTexture && !ip && pp.push(cp.fuzzColorTexture), ip) {
              const ip = function(pp) {
                const ip = pp.fuzzColorTexture,
                  cp = ip && ip.getInternalTexture() ? ip.getInternalTexture().uniqueId : "NoFuzzColor",
                  Op = pp.fuzzRoughnessTexture;
                return `FuzzColor_${cp}_FuzzRoughness_${Op&&Op.getInternalTexture()?Op.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(cp);
              if (!this._cachedInternalTexturesMap[ip]) {
                const pp = await async function(pp) {
                  const ip = pp.Gl(),
                    cp = pp.fuzzColorTexture,
                    Op = pp.fuzzRoughnessTexture;
                  return cp || Op ? (await Yc("FuzzTexture", Pc(cp ? Dc(cp, 0) : Ac(1), cp ? Dc(cp, 1) : Ac(1), cp ? Dc(cp, 2) : Ac(1), Op ? Dc(Op, pp._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Ac(1)), ip)).getInternalTexture() : null
                }(cp);
                pp && (this._cachedInternalTexturesMap[ip] = pp)
              }
              this._cachedInternalTexturesMap[ip] && (cp.fuzzColorTexture && (this._mergedTexturesMap[cp.fuzzColorTexture.uniqueId] = yI(this._cachedInternalTexturesMap[ip], cp.fuzzColorTexture), pp.push(this._mergedTexturesMap[cp.fuzzColorTexture.uniqueId])), cp.fuzzRoughnessTexture && (this._mergedTexturesMap[cp.fuzzRoughnessTexture.uniqueId] = yI(this._cachedInternalTexturesMap[ip], cp.fuzzRoughnessTexture), pp.push(this._mergedTexturesMap[cp.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return pp
        }
        return []
      }
      async postExportMaterialAsync(pp, ip, cp) {
        return await new Promise((pp => {
          if (cp instanceof ic) {
            if (0 == cp.fuzzWeight) return void pp(ip);
            this._wasUsed = !0, null == ip.extensions && (ip.extensions = {});
            const Op = {
              fuzzFactor: cp.fuzzWeight,
              fuzzColorFactor: cp.fuzzColor.BOp(),
              fuzzRoughnessFactor: cp.fuzzRoughness
            };
            let op, Ip;
            cp.fuzzWeightTexture && (Op.fuzzTexture = this._exporter._materialExporter.getTextureInfo(cp.fuzzWeightTexture) ?? void 0), cp.fuzzColorTexture && (op = this._mergedTexturesMap[cp.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[cp.fuzzColorTexture.uniqueId] : cp.fuzzColorTexture, Op.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(op) ?? void 0), cp.fuzzRoughnessTexture && (Ip = this._mergedTexturesMap[cp.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cp.fuzzRoughnessTexture.uniqueId] : cp.fuzzRoughnessTexture, Op.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Ip) ?? void 0), null === Op.fuzzColorTexture && null === Op.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[WI] = Op
          }
          pp(ip)
        }))
      }
    }
    let wI = !1;

    function vI() {
      wI || (wI = !0, NO.RegisterExtension(WI, (pp => new UI(pp))))
    }
    vI();
    const tI = "KHR_materials_specular";
    class HI {
      constructor(pp) {
        this.name = tI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        return cp instanceof bo && this._isExtensionEnabled(cp) ? (cp.metallicReflectanceTexture && Op.push(cp.metallicReflectanceTexture), cp.reflectanceTexture && Op.push(cp.reflectanceTexture), Op) : Op
      }
      _isExtensionEnabled(pp) {
        return !pp.unlit && (void 0 != pp.metallicF0Factor && 1 != pp.metallicF0Factor || void 0 != pp.metallicReflectanceColor && !pp.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(pp))
      }
      _hasTexturesExtension(pp) {
        return null != pp.metallicReflectanceTexture || null != pp.reflectanceTexture
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          var Op;
          if (cp instanceof bo && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0, ip.extensions = ip.extensions || {};
            const pp = this._exporter._materialExporter.getTextureInfo(cp.metallicReflectanceTexture) ?? void 0,
              Op = this._exporter._materialExporter.getTextureInfo(cp.reflectanceTexture) ?? void 0,
              op = {
                specularFactor: 1 == cp.metallicF0Factor ? void 0 : cp.metallicF0Factor,
                specularTexture: pp,
                specularColorFactor: cp.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : cp.metallicReflectanceColor.BOp(),
                specularColorTexture: Op
              };
            this._hasTexturesExtension(cp) && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[tI] = op
          } else if (cp instanceof ic) {
            ip.extensions = ip.extensions || {};
            const op = this._exporter._materialExporter.getTextureInfo(cp.specularWeightTexture) ?? void 0,
              Ip = this._exporter._materialExporter.getTextureInfo(cp.specularColorTexture) ?? void 0,
              Sp = 1 == cp.specularWeight ? void 0 : cp.specularWeight,
              xp = cp.specularColor.equalsFloats(1, 1, 1) ? void 0 : cp.specularColor.BOp();
            if (!Ip && !op && void 0 === Sp && void 0 === xp) return pp(ip);
            this._wasUsed = !0;
            const Lp = {
                specularEdgeColorEnabled: !0
              },
              Yp = {
                specularFactor: Sp,
                specularTexture: op,
                specularColorFactor: xp,
                specularColorTexture: Ip,
                extensions: {}
              };
            Yp.extensions.EXT_materials_specular_edge_color = Lp, (Op = this._exporter._glTF).extensionsUsed || (Op.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (op || Ip) && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[tI] = Yp
          }
          pp(ip)
        }))
      }
    }
    let dI = !1;

    function eI() {
      dI || (dI = !0, NO.RegisterExtension(tI, (pp => new HI(pp))))
    }
    eI();
    const uI = "KHR_materials_transmission";
    class jI {
      constructor(pp) {
        this.name = uI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof bo) {
          if (this._isExtensionEnabled(cp)) return cp.subSurface.refractionIntensityTexture && cp.subSurface.useGltfStyleTextures && Op.push(cp.subSurface.refractionIntensityTexture), Op
        } else cp instanceof ic && (cp.transmissionWeight > 0 && cp.transmissionWeightTexture && (Op.push(cp.transmissionWeightTexture), cp.transmissionColorTexture && Op.push(cp.transmissionColorTexture)), cp.subsurfaceWeight > 0 && cp.subsurfaceWeightTexture && Op.push(cp.subsurfaceWeightTexture));
        return Op
      }
      _isExtensionEnabled(pp) {
        if (pp instanceof ic && !pp.unlit) return pp.transmissionWeight > 0 || pp.subsurfaceWeight > 0;
        if (pp instanceof bo && !pp.unlit) {
          const ip = pp.subSurface;
          return ip.isRefractionEnabled && void 0 != ip.refractionIntensity && 0 != ip.refractionIntensity || null != ip.refractionIntensityTexture && ip.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(pp, ip, cp) {
        if (!this._isExtensionEnabled(cp)) return ip;
        if (cp instanceof bo) {
          this._wasUsed = !0;
          const Op = cp.subSurface,
            op = {
              transmissionFactor: 0 === Op.refractionIntensity ? void 0 : Op.refractionIntensity
            };
          if (Op.refractionIntensityTexture)
            if (Op.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(cp);
              const pp = this._exporter._materialExporter.getTextureInfo(Op.refractionIntensityTexture);
              pp && (op.transmissionTexture = pp)
            } else Mp.e.Warn(`${pp}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          ip.extensions || (ip.extensions = {}), ip.extensions[uI] = op
        } else if (cp instanceof ic) {
          this._wasUsed = !0;
          const pp = {
            transmissionFactor: (1 - cp.transmissionWeight) * cp.subsurfaceWeight + cp.transmissionWeight
          };
          if (cp.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cp);
            const ip = this._exporter._materialExporter.getTextureInfo(cp.transmissionWeightTexture);
            ip && (pp.transmissionTexture = ip)
          } else if (cp.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cp);
            const ip = this._exporter._materialExporter.getTextureInfo(cp.subsurfaceWeightTexture);
            ip && (pp.transmissionTexture = ip)
          }
          if (0 == cp.transmissionDepth && (!cp.transmissionColor.equals(Gp.d.White()) || cp.transmissionColorTexture) && ip.pbrMetallicRoughness && (ip.pbrMetallicRoughness.baseColorFactor || (ip.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ip.pbrMetallicRoughness.baseColorFactor[0] *= cp.transmissionColor.r, ip.pbrMetallicRoughness.baseColorFactor[1] *= cp.transmissionColor.g, ip.pbrMetallicRoughness.baseColorFactor[2] *= cp.transmissionColor.b, cp.transmissionColorTexture && !ip.pbrMetallicRoughness.baseColorTexture)) {
            const pp = this._exporter._materialExporter.getTextureInfo(cp.transmissionColorTexture);
            pp && (ip.pbrMetallicRoughness.baseColorTexture = pp, this._exporter._materialNeedsUVsSet.add(cp))
          }
          ip.extensions || (ip.extensions = {}), ip.extensions[uI] = pp
        }
        return ip
      }
    }
    let kI = !1;

    function mI() {
      kI || (kI = !0, NO.RegisterExtension(uI, (pp => new jI(pp))))
    }
    mI();
    var RI = cp(40463);
    const qI = "KHR_materials_unlit";
    class MI {
      constructor() {
        this.name = qI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          let Op = !1;
          cp instanceof bo ? Op = cp.unlit : cp instanceof RI.f && (Op = cp.disableLighting), Op && (this._wasUsed = !0, null == ip.extensions && (ip.extensions = {}), ip.extensions[qI] = {}), pp(ip)
        }))
      }
    }
    let CI = !1;

    function EI() {
      CI || (CI = !0, NO.RegisterExtension(qI, (() => new MI)))
    }
    EI();
    const XI = "KHR_materials_volume";
    class lI {
      constructor(pp) {
        this.name = XI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof bo) {
          if (this._isExtensionEnabled(cp)) return cp.subSurface.thicknessTexture && Op.push(cp.subSurface.thicknessTexture), Op
        } else cp instanceof ic && (cp.transmissionWeight > 0 || cp.subsurfaceWeight > 0) && cp.geometryThicknessTexture && Op.push(cp.geometryThicknessTexture);
        return Op
      }
      _isExtensionEnabled(pp) {
        if (pp.unlit) return !1;
        const ip = pp.subSurface;
        return !(!ip.isRefractionEnabled && !ip.isTranslucencyEnabled) && (void 0 != ip.maximumThickness && 0 != ip.maximumThickness || void 0 != ip.tintColorAtDistance && ip.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ip.tintColor && ip.tintColor != Gp.d.White() || this._hasTexturesExtension(pp))
      }
      _hasTexturesExtension(pp) {
        return null != pp.subSurface.thicknessTexture
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof bo && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            const pp = cp.subSurface,
              Op = {
                thicknessFactor: 0 == pp.maximumThickness ? void 0 : pp.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(pp.thicknessTexture) ?? void 0,
                attenuationDistance: pp.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : pp.tintColorAtDistance,
                attenuationColor: pp.tintColor.equalsFloats(1, 1, 1) ? void 0 : pp.tintColor.BOp()
              };
            this._hasTexturesExtension(cp) && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions = ip.extensions || {}, ip.extensions[XI] = Op
          } else if (cp instanceof ic) {
            const pp = cp.transmissionWeight > 0 && !cp.geometryThinWalled,
              Op = cp.subsurfaceWeight > 0 && !cp.geometryThinWalled;
            if (pp || Op) {
              this._wasUsed = !0;
              const op = cp.geometryThickness,
                Ip = this._exporter._materialExporter.getTextureInfo(cp.geometryThicknessTexture) ?? void 0;
              let Sp;
              Ip && this._exporter._materialNeedsUVsSet.add(cp);
              const xp = Gp.d.White().BOp();
              if (pp && cp.transmissionDepth > 0) {
                const pp = 1 / cp.transmissionDepth;
                let ip = new fp.o(-Math.log(cp.transmissionColor.r) * pp, -Math.log(cp.transmissionColor.g) * pp, -Math.log(cp.transmissionColor.b) * pp);
                const Op = new fp.o(cp.transmissionScatter.r * pp, cp.transmissionScatter.g * pp, cp.transmissionScatter.b * pp),
                  op = ip.subtract(Op),
                  Ip = Math.min(op.x, op.y, op.z);
                Ip < 0 && (op.x = op.x - Ip, op.y = op.y - Ip, op.z = op.z - Ip), ip = op.add(Op);
                Sp = 1 / Math.max(ip.x, ip.y, ip.z), xp[0] = Math.exp(-ip.x * Sp), xp[1] = Math.exp(-ip.y * Sp), xp[2] = Math.exp(-ip.z * Sp)
              } else Sp = Number.MAX_VALUE, xp[0] = 1, xp[1] = 1, xp[2] = 1;
              let Lp = 1;
              const Yp = Gp.d.White().BOp();
              if (Op) {
                const pp = cp.subsurfaceRadius,
                  ip = cp.subsurfaceRadiusScale,
                  Op = new fp.o(ip.r, ip.g, ip.b).multiplyByFloats(pp, pp, pp),
                  op = new fp.o(1 / Math.max(Op.x, 1e-6), 1 / Math.max(Op.y, 1e-6), 1 / Math.max(Op.z, 1e-6));
                Lp = 1 / Math.max(op.x, op.y, op.z), Yp[0] = Math.exp(-op.x * Lp), Yp[1] = Math.exp(-op.y * Lp), Yp[2] = Math.exp(-op.z * Lp)
              }
              const Dp = (1 - cp.transmissionWeight) * cp.subsurfaceWeight,
                Ap = Dp + cp.transmissionWeight,
                Pp = 1 / Math.max(Ap, 1e-6),
                Wp = cp.transmissionWeight * Pp,
                yp = Dp * Pp,
                Up = xp.map(((pp, ip) => pp * Wp + Yp[ip] * yp)),
                wp = {
                  thicknessFactor: op,
                  thicknessTexture: Ip,
                  attenuationDistance: Sp * Wp + Lp * yp,
                  attenuationColor: Up
                };
              ip.extensions = ip.extensions || {}, ip.extensions[XI] = wp
            }
          }
          pp(ip)
        }))
      }
    }
    let QI = !1;

    function JI() {
      QI || (QI = !0, NO.RegisterExtension(XI, (pp => new lI(pp))))
    }
    JI();
    const BI = "KHR_materials_volume_scatter";
    class NI {
      constructor(pp) {
        this.name = BI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        return cp instanceof ic && (cp.transmissionWeight > 0 && cp.transmissionScatterTexture && Op.push(cp.transmissionScatterTexture), cp.subsurfaceWeight > 0 && cp.subsurfaceColorTexture && Op.push(cp.subsurfaceColorTexture)), Op
      }
      _isExtensionEnabled(pp) {
        if (pp.unlit) return !1;
        const ip = pp.transmissionWeight > 0 && !pp.geometryThinWalled && pp.transmissionDepth > 0 && !pp.transmissionScatter.equals(Gp.d.Black()),
          cp = pp.subsurfaceWeight > 0 && !pp.geometryThinWalled;
        return !(!ip && !cp)
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          if (cp instanceof ic && this._isExtensionEnabled(cp)) {
            this._wasUsed = !0;
            let pp = fp.o.Zero(),
              Op = 0;
            if (cp.transmissionWeight > 0) {
              pp = function(pp) {
                const ip = new fp.o(Math.sqrt(1 - pp.x), Math.sqrt(1 - pp.y), Math.sqrt(1 - pp.z)),
                  cp = new fp.o(1, 1, 1),
                  Op = cp.subtract(ip),
                  op = cp.subtract(new fp.o(.139, .139, .139).multiplyInPlace(ip)),
                  Ip = cp.add(new fp.o(1.17, 1.17, 1.17).multiplyInPlace(ip));
                return Op.multiplyInPlace(op).divideInPlace(Ip)
              }(new fp.o(cp.transmissionScatter.r, cp.transmissionScatter.g, cp.transmissionScatter.b)), Op = cp.transmissionScatterAnisotropy
            }
            const op = fp.o.Zero();
            let Ip = 0;
            cp.subsurfaceWeight > 0 && (op.set(cp.subsurfaceColor.r, cp.subsurfaceColor.g, cp.subsurfaceColor.b), Ip = cp.subsurfaceScatterAnisotropy);
            const Sp = (1 - cp.transmissionWeight) * cp.subsurfaceWeight,
              xp = Sp + cp.transmissionWeight,
              Lp = 1 / Math.max(xp, 1e-6),
              Yp = cp.transmissionWeight * Lp,
              Dp = Sp * Lp,
              Ap = {
                multiscatterColorFactor: pp.multiplyByFloats(Yp, Yp, Yp).addInPlace(op.multiplyByFloats(Dp, Dp, Dp)).BOp(),
                scatterAnisotropy: Op * Yp + Ip * Dp
              };
            if (cp.subsurfaceWeight > 0 && cp.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(cp);
              const pp = this._exporter._materialExporter.getTextureInfo(cp.subsurfaceColorTexture);
              pp && (Ap.multiscatterColorTexture = pp)
            } else if (cp.transmissionWeight > 0 && cp.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(cp);
              const pp = this._exporter._materialExporter.getTextureInfo(cp.transmissionScatterTexture);
              pp && (Ap.multiscatterColorTexture = pp)
            }
            ip.extensions = ip.extensions || {}, ip.extensions[BI] = Ap
          }
          pp(ip)
        }))
      }
    }
    let TI = !1;

    function fI() {
      TI || (TI = !0, NO.RegisterExtension(BI, (pp => new NI(pp)), 101))
    }
    fI();
    const bI = "KHR_materials_diffuse_roughness";
    class hI {
      constructor(pp) {
        this.name = bI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(pp, ip, cp) {
        const Op = [];
        if (cp instanceof ki) {
          if (cp._baseDiffuseRoughness) return cp._baseDiffuseRoughnessTexture && Op.push(cp._baseDiffuseRoughnessTexture), Op
        } else if (cp instanceof ic && cp.baseDiffuseRoughness) return cp.baseDiffuseRoughnessTexture && Op.push(cp.baseDiffuseRoughnessTexture), Op;
        return []
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          let Op = null,
            op = null;
          if (cp instanceof ki ? (Op = cp._baseDiffuseRoughness, op = cp._baseDiffuseRoughnessTexture) : cp instanceof ic && (Op = cp.baseDiffuseRoughness, op = cp.baseDiffuseRoughnessTexture), !Op) return void pp(ip);
          this._wasUsed = !0, ip.extensions = ip.extensions || {};
          const Ip = {
            diffuseRoughnessFactor: Op,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(op) ?? void 0
          };
          null !== Ip.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(cp), ip.extensions[bI] = Ip, pp(ip)
        }))
      }
    }
    let aI = !1;

    function nI() {
      aI || (aI = !0, NO.RegisterExtension(bI, (pp => new hI(pp))))
    }
    nI();
    const FI = "KHR_materials_openpbr";
    class gI {
      constructor() {
        this.name = FI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(pp, ip, cp) {
        return new Promise((pp => {
          cp instanceof ic && (this._wasUsed = !0, ip.extensions = ip.extensions || {}, ip.extensions[FI] = {}), pp(ip)
        }))
      }
    }
    let GI = !1;

    function rI() {
      GI || (GI = !0, NO.RegisterExtension(FI, (() => new gI)))
    }
    rI();
    const ZI = "KHR_texture_transform";
    class zI {
      constructor() {
        this.name = ZI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(pp, ip, cp) {
        if (cp.Gl() || Ri.i.Warn(`${pp}: "scene" is not defined for Babylon texture ${cp.name}!`), (0 !== cp.uAng || 0 !== cp.vAng) && (Ri.i.Warn(`${pp}: Texture ${cp.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== cp.uRotationCenter || 0 !== cp.vRotationCenter)) return;
        const Op = {};
        let op = !1;
        if (0 === cp.uOffset && 0 === cp.vOffset || (Op.offset = [cp.uOffset, cp.vOffset], op = !0), 1 === cp.uScale && 1 === cp.vScale || (Op.scale = [cp.uScale, cp.vScale], op = !0), 0 !== cp.wAng) {
          if (0 !== cp.uRotationCenter || 0 !== cp.vRotationCenter) {
            if (cp.homogeneousRotationInUVTransform && cp.uScale !== cp.vScale) return void Ri.i.Warn(`${pp}: Texture ${cp.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${ZI}.`);
            Ri.i.Warn(`${pp}: Texture ${cp.name} with non-origin rotation center will be exported using an adjusted offset with ${ZI}.`), Op.offset = function(pp) {
              const {
                uOffset: ip,
                vOffset: cp,
                uRotationCenter: Op,
                vRotationCenter: op,
                uScale: Ip,
                vScale: Sp,
                wAng: xp
              } = pp, Lp = Math.cos(xp), Yp = Math.sin(xp), Dp = Op * Ip, Ap = op * Sp;
              return [ip + (Dp * (1 - Lp) + Ap * Yp), cp + (Ap * (1 - Lp) - Dp * Yp)]
            }(cp)
          }
          Op.rotation = -cp.wAng, op = !0
        }
        0 !== cp.coordinatesIndex && (Op.texCoord = cp.coordinatesIndex, op = !0), op && (this._wasUsed = !0, ip.extensions || (ip.extensions = {}), ip.extensions[ZI] = Op)
      }
    }
    let sI = !1;

    function KI() {
      sI || (sI = !0, NO.RegisterExtension(ZI, (() => new zI)))
    }
    KI();
    var VI = cp(40257);
    const pS = "KHR_texture_basisu";
    class iS {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(pp) {
        this.name = pS, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      postExportTexture(pp, ip) {
        const cp = this._exporter._textures[ip.index],
          Op = cp.source;
        if (void 0 === Op) return;
        const op = this._exporter._images[Op];
        "image/ktx2" === (op.mimeType || (0, VI.g)(op.uri)) && (cp.source = void 0, cp.extensions || (cp.extensions = {}), cp.extensions[pS] = {
          source: Op
        }, this._wasUsed = !0)
      }
    }
    let cS = !1;

    function OS() {
      cS || (cS = !0, NO.RegisterExtension(pS, (pp => new iS(pp))))
    }
    OS();
    const oS = "EXT_texture_webp";
    class IS {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(pp) {
        this.name = oS, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      postExportTexture(pp, ip) {
        const cp = this._exporter._textures[ip.index],
          Op = cp.source;
        if (void 0 === Op) return;
        const op = this._exporter._images[Op];
        "image/webp" === (op.mimeType || (0, VI.g)(op.uri)) && (cp.source = void 0, cp.extensions || (cp.extensions = {}), cp.extensions[oS] = {
          source: Op
        }, this._wasUsed = !0)
      }
    }
    let SS = !1;

    function xS() {
      SS || (SS = !0, NO.RegisterExtension(oS, (pp => new IS(pp))))
    }
    xS();
    const LS = "EXT_texture_avif";
    class YS {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(pp) {
        this.name = LS, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = pp
      }
      dispose() {}
      postExportTexture(pp, ip) {
        const cp = this._exporter._textures[ip.index],
          Op = cp.source;
        if (void 0 === Op) return;
        const op = this._exporter._images[Op];
        "image/avif" === (op.mimeType || (0, VI.g)(op.uri)) && (cp.source = void 0, cp.extensions || (cp.extensions = {}), cp.extensions[LS] = {
          source: Op
        }, this._wasUsed = !0)
      }
    }
    let DS = !1;

    function AS() {
      DS || (DS = !0, NO.RegisterExtension(LS, (pp => new YS(pp))))
    }
    AS();
    class PS {
      static CreateSTL(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Yp = function(pp, ip, cp) {
            const op = [3 * pp[cp], 3 * pp[cp + 1], 3 * pp[cp + 2]],
              Ip = [new Op.Zy(ip[op[0]], ip[op[0] + 2], ip[op[0] + 1]), new Op.Zy(ip[op[1]], ip[op[1] + 2], ip[op[1] + 1]), new Op.Zy(ip[op[2]], ip[op[2] + 2], ip[op[2] + 1])],
              Sp = Ip[0].subtract(Ip[1]),
              xp = Ip[2].subtract(Ip[1]);
            return {
              v: Ip,
              n: Op.Zy.Cross(xp, Sp).normalize()
            }
          },
          Ap = function(pp, ip, cp, Op) {
            return ip = Pp(pp, ip, cp.x, Op), ip = Pp(pp, ip, cp.y, Op), Pp(pp, ip, cp.z, Op)
          },
          Pp = function(pp, ip, cp, Op) {
            return pp.setFloat32(ip, cp, Op), ip + 4
          },
          yp = function(pp) {
            if (xp) {
              let ip = pp;
              pp instanceof Wp.c && (ip = pp.aop);
              const cp = ip.getVerticesData(Dp.f.PositionKind, !0, !0);
              if (!cp) return [];
              const op = Op.Zy.Zero();
              let Ip;
              for (Ip = 0; Ip < cp.length; Ip += 3) Op.Zy.TransformCoordinatesFromFloatsToRef(cp[Ip], cp[Ip + 1], cp[Ip + 2], pp.computeWorldMatrix(!0), op).toArray(cp, Ip);
              return cp
            }
            return pp.getVerticesData(Dp.f.PositionKind) || []
          };
        xp && (Sp = !0);
        let Up = "",
          wp = 0,
          vp = 0;
        if (op) {
          for (let cp = 0; cp < pp.length; cp++) {
            const ip = pp[cp].NOp();
            wp += ip ? ip.length / 3 : 0
          }
          const ip = new ArrayBuffer(84 + 50 * wp);
          Up = new DataView(ip), vp += 80, Up.setUint32(vp, wp, Ip), vp += 4
        } else Lp || (Up = "solid stlmesh\r\n");
        for (let Op = 0; Op < pp.length; Op++) {
          const ip = pp[Op];
          !op && Lp && (Up += "solid " + ip.name + "\r\n"), !Sp && ip instanceof PO.c && ip.bakeCurrentTransformIntoVertices();
          const cp = yp(ip),
            xp = ip.NOp() || [];
          for (let pp = 0; pp < xp.length; pp += 3) {
            const ip = Yp(xp, cp, pp);
            op ? (vp = Ap(Up, vp, ip.n, Ip), vp = Ap(Up, vp, ip.v[0], Ip), vp = Ap(Up, vp, ip.v[1], Ip), vp = Ap(Up, vp, ip.v[2], Ip), vp += 2) : (Up += "\tfacet normal " + ip.n.x + " " + ip.n.y + " " + ip.n.z + "\r\n", Up += "\t\touter loop\r\n", Up += "\t\t\tvertex " + ip.v[0].x + " " + ip.v[0].y + " " + ip.v[0].z + "\r\n", Up += "\t\t\tvertex " + ip.v[1].x + " " + ip.v[1].y + " " + ip.v[1].z + "\r\n", Up += "\t\t\tvertex " + ip.v[2].x + " " + ip.v[2].y + " " + ip.v[2].z + "\r\n", Up += "\t\tendloop\r\n", Up += "\tendfacet\r\n")
          }!op && Lp && (Up += "endsolid " + name + "\r\n")
        }
        if (op || Lp || (Up += "endsolid stlmesh"), ip) {
          const pp = document.createElement("a"),
            ip = new Blob([Up], {
              type: "application/octet-stream"
            });
          pp.href = window.URL.createObjectURL(ip), pp.download = cp + ".stl", pp.click()
        }
        return Up
      }
    }

    function WS(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const op = [];
      for (let Ip = 0; Ip < pp.length / cp; Ip++) {
        const Sp = pp[Ip * cp] * (Op ? -1 : 1),
          xp = pp[Ip * cp + 1],
          Lp = pp[Ip * cp + 2];
        op.push(`(${Sp.toPrecision(ip.precision)}, ${xp.toPrecision(ip.precision)}, ${Lp.toPrecision(ip.precision)})`)
      }
      return op.join(", ")
    }

    function yS(pp, ip) {
      const cp = [];
      for (let Op = 0; Op < pp.length / 2; Op++) {
        const op = pp[2 * Op],
          Ip = pp[2 * Op + 1];
        cp.push(`(${op.toPrecision(ip.precision)}, ${(1-Ip).toPrecision(ip.precision)})`)
      }
      return cp.join(", ")
    }

    function US(pp, ip, cp, Op) {
      const op = pp.getVerticesData(Dp.f.PositionKind),
        Ip = pp.getVerticesData(Dp.f.NormalKind);
      if (op && Ip) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${cp}"\n\t\tint[] faceVertexCounts = [${function(pp){const ip=pp.NOp()?.length?pp.getTotalIndices():pp.getTotalVertices();return Array(ip/3).fill(3).join(", ")}(pp)}]\n\t\tint[] faceVertexIndices = [${function(pp){const ip=pp.NOp(),cp=ip?.length??pp.getTotalVertices(),Op=[];if(null!==ip)for(let op=0;op<cp;op++)Op.push(ip[op]);else for(let op=0;op<cp;op++)Op.push(op);return Op.join(", ")}(pp)}]\n\t\tnormal3f[] normals = [${WS(Ip,ip,void 0,Op)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${WS(op,ip,void 0,Op)}]\n        ${function(pp,ip){let cp="";for(let op=0;op<4;op++){const Op=op>0?op:"",Ip=pp.getVerticesData(Dp.f.UVKind+(Op?Op+1:""));Ip&&(cp+=`\n\t\ttexCoord2f[] primvars:st${Op} = [${yS(Ip,ip)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Op=pp.getVerticesData(Dp.f.ColorKind);return Op&&(cp+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        WS(Op, ip, Op.length / pp.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),cp}(pp,ip)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function wS(pp, ip, cp, Op) {
      return `\n        def "Geometry"\n        {\n        ${US(pp,ip,cp,Op)}\n        }\n        `
    }

    function vS(pp) {
      let ip = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return ip += pp, fflate.strToU8(ip)
    }

    function tS(pp) {
      const ip = pp.m;
      return `( ${HS(ip,0)}, ${HS(ip,4)}, ${HS(ip,8)}, ${HS(ip,12)} )`
    }

    function HS(pp, ip) {
      return `(${pp[ip+0]}, ${pp[ip+1]}, ${pp[ip+2]}, ${pp[ip+3]})`
    }

    function dS(pp, ip) {
      const cp = "Object_" + pp.uniqueId,
        Op = tS(ip);
      return `def Xform "${cp}" (\n\tprepend references = @./geometries/Geometry_${pp.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Op}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${pp.material.uniqueId}>\n}\n\n`
    }

    function eS(pp) {
      switch (pp) {
        case kp.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case kp.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case kp.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function uS(pp) {
      return `(${pp.x}, ${pp.y})`
    }

    function jS(pp) {
      return `(${pp.r}, ${pp.g}, ${pp.b})`
    }

    function kS(pp) {
      return "image/jpeg" === pp || "image/png" === pp
    }

    function mS(pp, ip, cp, op, Ip, Sp) {
      const xp = pp.getInternalTexture().uniqueId + "_" + pp.invertY,
        Yp = pp.mimeType || (0, Lp.b)(pp.getInternalTexture()?.url ?? ""),
        Dp = kS(Yp) ? Yp : "image/png",
        Ap = "image/jpeg" === Dp ? "jpg" : "png";
      Ip[xp] = {
        texture: pp,
        mimeType: Dp,
        ext: Ap
      };
      const Pp = pp.coordinatesIndex > 0 ? "st" + pp.coordinatesIndex : "st",
        Wp = new Op.Vector2(pp.uScale, pp.vScale),
        yp = new Op.Vector2(pp.uOffset, pp.vOffset),
        Up = pp.wAng,
        wp = Math.sin(Up),
        vp = Math.cos(Up);
      return yp.y = 1 - yp.y - Wp.y, yp.x += wp * Wp.x, yp.y += (1 - vp) * Wp.y, `\n    def Shader "PrimvarReader_${cp}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Pp}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${cp}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${ip.uniqueId}/PrimvarReader_${cp}.outputs:result>\n        float inputs:rotation = ${(Up*(180/Math.PI)).toFixed(Sp.precision)}\n        float2 inputs:scale = ${uS(Wp)}\n        float2 inputs:translation = ${uS(yp)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${pp.uniqueId}_${cp}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${xp}.${Ap}@\n        float2 inputs:st.connect = </Root/Materials/Material_${ip.uniqueId}/Transform2d_${cp}.outputs:result>\n        ${op?"float4 inputs:scale = "+function(pp){return`(${pp.r}, ${pp.g}, ${pp.b}, 1.0)`}(op):""}\n        token inputs:sourceColorSpace = "${pp.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${eS(pp.wrapU)}"\n        token inputs:wrapT = "${eS(pp.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${ip.needAlphaBlending()||ip.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function RS(pp, ip, cp) {
      const Op = "\t\t\t",
        op = [],
        Ip = [],
        {
          diffuseMap: Sp,
          diffuse: xp,
          alphaCutOff: Lp,
          emissiveMap: Yp,
          emissive: Dp,
          normalMap: Ap,
          roughnessMap: Pp,
          roughnessChannel: Wp,
          roughness: yp,
          metalnessMap: Up,
          metalnessChannel: vp,
          metalness: tp,
          aoMap: Hp,
          aoMapChannel: dp,
          aoMapIntensity: ep,
          alphaMap: jp,
          ior: kp,
          clearCoatEnabled: mp,
          clearCoat: Rp,
          clearCoatMap: qp,
          clearCoatRoughness: Mp,
          clearCoatRoughnessMap: Cp
        } = function(pp) {
          const ip = {
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
          return pp instanceof LO.StandardMaterial ? {
            ...ip,
            diffuseMap: pp.diffuseTexture,
            diffuse: pp.diffuseColor,
            alphaCutOff: pp.alphaCutOff,
            emissiveMap: pp.emissiveTexture,
            emissive: pp.emissiveColor,
            roughness: 1,
            alphaMap: pp.opacityTexture
          } : pp instanceof ki ? {
            ...ip,
            diffuseMap: pp._albedoTexture,
            diffuse: pp._albedoColor,
            alphaCutOff: pp._alphaCutOff,
            emissiveMap: pp._emissiveTexture,
            emissive: pp._emissiveColor,
            normalMap: pp._bumpTexture,
            roughnessMap: pp._metallicTexture,
            roughnessChannel: pp._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: pp._roughness ?? 1,
            metalnessMap: pp._metallicTexture,
            metalnessChannel: pp._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: pp._metallic ?? 0,
            aoMap: pp._ambientTexture,
            aoMapChannel: pp._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: pp._ambientTextureStrength,
            alphaMap: pp._opacityTexture,
            ior: pp.subSurface.indexOfRefraction,
            clearCoatEnabled: pp.clearCoat.isEnabled,
            clearCoat: pp.clearCoat.intensity,
            clearCoatMap: pp.clearCoat.texture,
            clearCoatRoughness: pp.clearCoat.roughness,
            clearCoatRoughnessMap: pp.clearCoat.useRoughnessFromMainTexture ? pp.clearCoat.texture : pp.clearCoat.textureRoughness
          } : ip
        }(pp);
      return null !== Sp ? (op.push(`${Op}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Sp.uniqueId}_diffuse.outputs:rgb>`), pp.needAlphaBlending() ? op.push(`${Op}float inputs:opacity.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Sp.uniqueId}_diffuse.outputs:a>`) : pp.needAlphaTesting() && (op.push(`${Op}float inputs:opacity.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Sp.uniqueId}_diffuse.outputs:a>`), op.push(`${Op}float inputs:opacityThreshold = ${Lp}`)), Ip.push(mS(Sp, pp, "diffuse", xp, ip, cp))) : op.push(`${Op}color3f inputs:diffuseColor = ${jS(xp||wp.Color3.White())}`), null !== Yp ? (op.push(`${Op}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Yp.uniqueId}_emissive.outputs:rgb>`), Ip.push(mS(Yp, pp, "emissive", Dp, ip, cp))) : Dp && Dp.toLuminance() > 0 && op.push(`${Op}color3f inputs:emissiveColor = ${jS(Dp)}`), null !== Ap && (op.push(`${Op}normal3f inputs:normal.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Ap.uniqueId}_normal.outputs:rgb>`), Ip.push(mS(Ap, pp, "normal", null, ip, cp))), null !== Hp && (op.push(`${Op}float inputs:occlusion.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Hp.uniqueId}_occlusion.outputs:${dp}>`), Ip.push(mS(Hp, pp, "occlusion", new wp.Color3(ep, ep, ep), ip, cp))), null !== Pp ? (op.push(`${Op}float inputs:roughness.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Pp.uniqueId}_roughness.outputs:${Wp}>`), Ip.push(mS(Pp, pp, "roughness", new wp.Color3(yp, yp, yp), ip, cp))) : op.push(`${Op}float inputs:roughness = ${yp}`), null !== Up ? (op.push(`${Op}float inputs:metallic.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Up.uniqueId}_metallic.outputs:${vp}>`), Ip.push(mS(Up, pp, "metallic", new wp.Color3(tp, tp, tp), ip, cp))) : op.push(`${Op}float inputs:metallic = ${tp}`), null !== jp ? (op.push(`${Op}float inputs:opacity.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${jp.uniqueId}_opacity.outputs:r>`), op.push(`${Op}float inputs:opacityThreshold = 0.0001`), Ip.push(mS(jp, pp, "opacity", null, ip, cp))) : op.push(`${Op}float inputs:opacity = ${pp.alpha}`), mp && (null !== qp ? (op.push(`${Op}float inputs:clearcoat.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${qp.uniqueId}_clearcoat.outputs:r>`), Ip.push(mS(qp, pp, "clearcoat", new wp.Color3(Rp, Rp, Rp), ip, cp))) : op.push(`${Op}float inputs:clearcoat = ${Rp}`), null !== Cp ? (op.push(`${Op}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${pp.uniqueId}/Texture_${Cp.uniqueId}_clearcoatRoughness.outputs:g>`), Ip.push(mS(Cp, pp, "clearcoatRoughness", new wp.Color3(Mp, Mp, Mp), ip, cp))) : op.push(`${Op}float inputs:clearcoatRoughness = ${Mp}`)), op.push(`${Op}float inputs:ior = ${kp}`), `\n\tdef Material "Material_${pp.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${op.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${pp.uniqueId}/PreviewSurface.outputs:surface>\n\n${Ip.join("\n")}\n\n\t}\n`
    }

    function qS(pp) {
      pp.computeWorldMatrix(!0);
      const ip = pp.getWorldMatrix().clone(),
        cp = pp.Gl().useRightHandedSystem;
      let Op = pp.material?._getEffectiveOrientation(pp) ?? pp.sideOrientation,
        Sp = !cp,
        xp = pp.parent;
      for (; xp;) {
        if (Tc(xp, cp) && null === xp.parent) {
          cp || (ip.multiplyToRef(xp.getWorldMatrix().invert(), ip), Op = Op === Ip.b.ClockWiseSideOrientation ? Ip.b.CounterClockWiseSideOrientation : Ip.b.ClockWiseSideOrientation), Sp = !1;
          break
        }
        xp = xp.parent
      }
      return ip.determinant() < 0 && op.Tools.Warn(`Mesh ${pp.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: ip,
        windingOrder: Op === Ip.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Sp
      }
    }
    async function MS(pp, ip, cp) {
      const Ip = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...ip
      };
      "undefined" === typeof fflate && await op.Tools.LoadScriptAsync(Ip.fflateUrl);
      const Sp = {};
      Sp[Ip.modelFileName] = null;
      let xp = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      xp += function(pp) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===pp.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${pp.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${pp.planeAnchoringAlignment}"`:""}\n            `
      }(Ip);
      const Lp = {};
      for (const Op of pp.meshes) {
        if (0 === Op.getTotalVertices()) continue;
        const pp = Op,
          ip = pp.geometry,
          Yp = pp.material;
        if (!Yp || !ip || cp && !cp(pp)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Yp.getClassName())) {
          const cp = "geometries/Geometry_" + ip.uniqueId + ".usda",
            {
              matrix: Op,
              windingOrder: op,
              convertToRightHanded: Dp
            } = qS(pp);
          if (!(cp in Sp)) {
            const pp = wS(ip, Ip, op, Dp);
            Sp[cp] = vS(pp)
          }
          Yp.uniqueId in Lp || (Lp[Yp.uniqueId] = Yp), xp += dS(pp, Op)
        } else op.Tools.Warn("USDZExportAsync does not support this material type: " + Yp.getClassName())
      }
      pp.activeCamera && Ip.exportCamera && (xp += function(pp, ip) {
        const cp = "Camera_" + pp.uniqueId,
          op = tS(Op.Matrix.RotationY(Math.PI).multiply(pp.getWorldMatrix()));
        if (pp.mode === kp.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${cp}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${op}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${pp.minZ.toPrecision(ip.precision)}, ${pp.maxZ.toPrecision(ip.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(pp.orthoLeft||1)+Math.abs(pp.orthoRight||1))).toPrecision(ip.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(pp.orthoTop||1)+Math.abs(pp.orthoBottom||1))).toPrecision(ip.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Op = pp.gy().getAspectRatio(pp),
            Ip = ip.cameraSensorWidth || 35;
          return `def Camera "${cp}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${op}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${pp.minZ.toPrecision(ip.precision)}, ${pp.maxZ.toPrecision(ip.precision)})\n\t\t\tfloat focalLength = ${(Ip/(2*Math.tan(.5*pp.fov))).toPrecision(ip.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Ip*Op).toPrecision(ip.precision)}\n\t\t\tfloat verticalAperture = ${(Ip/Op).toPrecision(ip.precision)}            \n\t\t}\n\t\n\t`
        }
      }(pp.activeCamera, Ip)), xp += "\n            }\n        }";
      const Yp = {};
      xp += function(pp, ip, cp) {
        const Op = [];
        for (const op in pp) {
          const Ip = pp[op];
          Op.push(RS(Ip, ip, cp))
        }
        return `\n    def "Materials"\n{\n${Op.join("")}\n}\n\n`
      }(Lp, Yp, Ip), xp += "\n    }", Sp[Ip.modelFileName] = fflate.strToU8(xp);
      for (const Op in Yp) {
        const {
          texture: pp,
          ext: ip,
          mimeType: cp
        } = Yp[Op], op = await dc(pp);
        if (op && kS(op.mimeType) && op.mimeType === cp) Sp[`textures/Texture_${Op}.${ip}`] = new Uint8Array(op.data);
        else {
          const op = pp.getSize(),
            Ip = await (0, dp.d)(pp),
            xp = await mp.DumpTools.DumpDataAsync(op.width, op.height, Ip, cp, void 0, !1, !0);
          Sp[`textures/Texture_${Op}.${ip}`] = new Uint8Array(xp).slice()
        }
      }
      let Dp = 0;
      for (const Op in Sp) {
        const pp = Sp[Op];
        if (!pp) continue;
        Dp += 34 + Op.length;
        const ip = 63 & Dp;
        if (4 !== ip) {
          const cp = new Uint8Array(64 - ip);
          Sp[Op] = [pp, {
            extra: {
              12345: cp
            }
          }]
        }
        Dp = pp.length
      }
      return fflate.zipSync(Sp, {
        level: 0
      })
    }
    var CS = cp(41320);
    class ES {
      static Export(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (!pp || 0 === pp.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Op = ip;
        ip && 0 !== ip.length || (Op = pp.animations.map((pp => pp.name)));
        let op = null;
        for (const Yp of Op) {
          const ip = pp.getAnimationRange(Yp);
          ip && (op = op ? new CS.d("animation-range", Math.min(op.from, ip.from), Math.max(op.to, ip.to)) : ip)
        }
        if (!op && (pp.animations.length > 0 && (op = pp.getAnimationRange(pp.animations[0].name)), !op)) throw new Error("No animation range found in skeleton");
        const Ip = cp || 1 / (pp.animations[0]?.framePerSecond || 30),
          Sp = this._BuildBoneHierarchy(pp, Op);
        let xp = 0;
        for (const Yp of Sp) Yp.positionKeys.length > 0 && (xp = Math.max(xp, Yp.positionKeys.length)), Yp.rotationKeys.length > 0 && (xp = Math.max(xp, Yp.rotationKeys.length));
        0 === xp && (xp = Math.floor((op.to - op.from) / Ip) + 1);
        let Lp = "";
        return Lp += "HIERARCHY\n", Lp += this._ExportHierarchy(Sp, 0), Lp += "MOTION\n", Lp += `Frames: ${xp}\n`, Lp += `Frame Time: ${Ip.toFixed(6)}\n`, Lp += this._ExportMotionData(Sp, xp, 0, Op), Lp
      }
      static _BuildBoneHierarchy(pp, ip) {
        const cp = new Map,
          Op = [];
        for (const op of pp.bones) {
          const pp = {
            bone: op,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          cp.set(op, pp)
        }
        for (const op of pp.bones) {
          const pp = cp.get(op);
          if (op.animations.length > 0)
            for (const cp of op.animations) ip.includes(cp.name) && ("position" === cp.targetProperty ? (pp.hasPositionChannels = !0, pp.positionKeys.push(...cp.getKeys())) : "rotationQuaternion" === cp.targetProperty && (pp.hasRotationChannels = !0, pp.rotationKeys.push(...cp.getKeys())));
          if (op.getParent()) {
            const ip = cp.get(op.getParent());
            ip && ip.children.push(pp)
          } else Op.push(pp)
        }
        return Op
      }
      static _ExportHierarchy(pp, ip) {
        let cp = "";
        const Op = "    ".repeat(ip);
        for (const op of pp) {
          const pp = op.bone;
          if (this._IsEndSite(op)) {
            cp += `${Op}End Site\n`, cp += `${Op}{\n`;
            const ip = this._GetBoneOffset(pp);
            cp += `${Op}    OFFSET ${ip.x.toFixed(6)} ${ip.y.toFixed(6)} ${ip.z.toFixed(6)}\n`, cp += `${Op}}\n`
          } else {
            cp += `${0===ip?"ROOT":`${Op}JOINT`} ${pp.name}\n`, cp += `${Op}{\n`;
            const Ip = this._GetBoneOffset(pp);
            cp += `${Op}    OFFSET ${Ip.x.toFixed(6)} ${Ip.y.toFixed(6)} ${Ip.z.toFixed(6)}\n`;
            const Sp = [];
            op.hasPositionChannels && Sp.push("Xposition", "Yposition", "Zposition"), op.hasRotationChannels && Sp.push("Zrotation", "Xrotation", "Yrotation"), Sp.length > 0 && (cp += `${Op}    CHANNELS ${Sp.length} ${Sp.join(" ")}\n`), op.children.length > 0 && (cp += this._ExportHierarchy(op.children, ip + 1)), cp += `${Op}}\n`
          }
        }
        return cp
      }
      static _IsEndSite(pp) {
        return 0 === pp.children.length
      }
      static _GetBoneOffset(pp) {
        try {
          if (!pp.getParent()) return pp.getRestMatrix().getTranslation();
          return pp.getLocalMatrix().getTranslation()
        } catch (ip) {
          return Op.Zy.Zero()
        }
      }
      static _ExportMotionData(pp, ip, cp, Op) {
        let op = "";
        for (let Ip = 0; Ip < ip; Ip++) {
          const ip = [];
          this._CollectFrameValues(pp, Ip + cp, ip, Op), op += ip.map((pp => pp.toFixed(6))).join(" ") + "\n"
        }
        return op
      }
      static _CollectFrameValues(pp, ip, cp, Op) {
        for (const op of pp)
          if (!this._IsEndSite(op)) {
            if (op.hasPositionChannels) {
              const pp = this._GetPositionAtFrameIndex(op.positionKeys, ip);
              cp.push(pp.x, pp.y, pp.z)
            }
            if (op.hasRotationChannels) {
              const pp = this._GetRotationAtFrameIndex(op.rotationKeys, ip),
                Op = this._QuaternionToEuler(pp);
              cp.push(Op.z, Op.x, Op.y)
            }
            op.children.length > 0 && this._CollectFrameValues(op.children, ip, cp, Op)
          }
      }
      static _GetPositionAtFrameIndex(pp, ip) {
        if (0 === pp.length) return Op.Zy.Zero();
        return pp[Math.max(0, Math.min(ip, pp.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(pp, ip) {
        if (0 === pp.length) return Op.Quaternion.Identity();
        return pp[Math.max(0, Math.min(ip, pp.length - 1))].value.clone()
      }
      static _QuaternionToEuler(pp) {
        const ip = new Op.Matrix;
        pp.toRotationMatrix(ip);
        const cp = ip.m;
        let Ip, Sp, xp;
        const Lp = Math.sqrt(cp[0] * cp[0] + cp[1] * cp[1]);
        return Lp > Bc.b ? (Ip = Math.atan2(cp[6], cp[10]), Sp = Math.atan2(-cp[2], Lp), xp = Math.atan2(cp[1], cp[0])) : (Ip = Math.atan2(-cp[9], cp[5]), Sp = Math.atan2(-cp[2], Lp), xp = 0), new Op.Zy(op.Tools.ToDegrees(Ip), op.Tools.ToDegrees(Sp), op.Tools.ToDegrees(xp))
      }
    }

    function XS(pp) {
      return "string" === typeof pp?.name
    }
    const lS = Symbol("__xml:meta$__"),
      QS = Symbol("__xml:name$__");

    function JS(pp, ip) {
      Object.prototype.hasOwnProperty.call(pp.metadata, lS) || (pp.metadata[lS] = []), pp.metadata[lS].push(ip)
    }

    function BS(pp) {
      return (ip, cp) => {
        ip[QS] = pp
      }
    }

    function NS() {
      return (pp, ip) => JS(ip, {
        kind: "none",
        prop: String(ip.name),
        ignore: !0
      })
    }

    function TS(pp) {
      return (ip, cp) => JS(cp, {
        kind: "attr",
        prop: String(cp.name),
        ...pp
      })
    }

    function fS(pp) {
      return (ip, cp) => JS(cp, {
        kind: "elem",
        prop: String(cp.name),
        ...pp
      })
    }

    function bS(pp) {
      const ip = "function" === typeof pp ? pp : pp?.constructor,
        cp = ip?.[Symbol.metadata];
      if (!cp) return [];
      const Op = [];
      let op = cp;
      for (; op;) Object.prototype.hasOwnProperty.call(op, lS) && Op.push(...op[lS]), op = Object.getPrototypeOf(op);
      return Op
    }

    function hS(pp) {
      const ip = pp?.constructor?.[QS];
      return ip || void 0
    }

    function aS(pp) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(pp)
    }

    function nS(pp) {
      if (XS(pp)) return pp;
      const ip = (pp ?? "").trim();
      if (!ip) return {
        name: ""
      };
      const cp = ip.indexOf(":");
      if (-1 === cp) return {
        name: ip
      };
      if (-1 !== ip.indexOf(":", cp + 1)) return {
        name: ip
      };
      const Op = ip.slice(0, cp),
        op = ip.slice(cp + 1);
      return aS(Op) && aS(op) ? {
        ns: Op,
        name: op
      } : {
        name: ip
      }
    }

    function FS(pp, ip) {
      return ip ? `${ip}:${pp}` : pp
    }
    const gS = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      GS = Object.freeze({
        number: gS
      });

    function rS(pp) {
      const ip = pp?.eps ?? gS.eps;
      return {
        eps: ip,
        maxDecimalsCap: pp?.maxDecimalsCap ?? gS.maxDecimalsCap,
        trimTrailingZeros: pp?.trimTrailingZeros ?? gS.trimTrailingZeros,
        fixedDecimals: pp?.fixedDecimals,
        allowScientific: pp?.allowScientific ?? gS.allowScientific,
        snapNearZero: pp?.snapNearZero ?? gS.snapNearZero,
        zeroThreshold: pp?.zeroThreshold ?? ip,
        perAttributeEps: pp?.perAttributeEps
      }
    }

    function ZS(pp) {
      return {
        number: rS(pp?.number)
      }
    }
    class zS {
      constructor(pp) {
        if (this.o = pp, this._o = pp.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(pp) {
        if (!Number.isFinite(pp)) throw new Error(`Cannot format non-finite number: ${pp}`);
        const ip = this._o,
          cp = this._clampInt(ip.maxDecimalsCap ?? 15, 0, 20),
          Op = ip.trimTrailingZeros ?? !0,
          op = ip.snapNearZero ?? !0,
          Ip = ip.zeroThreshold ?? ip.eps,
          Sp = 1 / ip.eps;
        let xp, Lp = Math.round(pp * Sp) / Sp;
        if (Object.is(Lp, -0) && (Lp = 0), op && Math.abs(Lp) <= Ip && (Lp = 0), xp = void 0 !== ip.fixedDecimals ? this._clampInt(ip.fixedDecimals, 0, cp) : this._clampInt(Math.ceil(-Math.log10(ip.eps)), 0, cp), ip.allowScientific, 0 === xp) return String(Math.trunc(Lp));
        let Yp = Lp.toFixed(xp);
        if (Op && void 0 === ip.fixedDecimals && (Yp = Yp.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Yp)) throw new Error(`Scientific notation not allowed in XML output: ${Yp}`);
        return Yp
      }
      _clampInt(pp, ip, cp) {
        return Number.isFinite(pp) ? (pp = Math.trunc(pp), Math.max(ip, Math.min(cp, pp))) : ip
      }
    }

    function sS(pp) {
      return pp instanceof Date
    }

    function KS(pp) {
      return "string" === typeof pp
    }

    function VS(pp) {
      return "string" === typeof pp || "number" === typeof pp || "boolean" === typeof pp || "bigint" === typeof pp || sS(pp)
    }

    function px(pp) {
      return "number" === typeof pp || "boolean" === typeof pp || "bigint" === typeof pp || sS(pp)
    }
    class ix {
      constructor(pp, ip) {
        this._ns = new Map, this._prefixCount = 0, this._builder = pp, this._format = ZS(ip), this._nFmt = new zS(this._format)
      }
      withNamespace() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        for (const Op of ip) this._assignNamespace(Op);
        return this
      }
      serialize(pp, ip) {
        if (!(ip = ip ?? hS(pp))) throw new Error("can not find name for given object");
        const cp = nS(ip);
        cp.ns && this._assignNamespace(cp.ns, "xmlns"), this._gatherNamespaces(pp, new WeakSet);
        const Op = this._builder.ele(null, cp.name);
        for (const [op, Ip] of Array.from(this._ns.entries())) Op.att("xmlns", Ip, op);
        this._writeObjectContent(Op, pp, (new WeakSet).add(pp)), this._builder.end()
      }
      _writeObject(pp, ip, cp) {
        if (cp.has(ip)) return;
        if (cp.add(ip), Array.isArray(ip)) {
          for (const Op of ip) px(Op) || (KS(Op) ? this._builder.text(Op) : this._writeObject(pp, Op, cp));
          return
        }
        const Op = hS(ip);
        if (!Op) return;
        const op = nS(Op),
          Ip = this._getPrefix(op),
          Sp = FS(op.name, Ip);
        pp.ele(null, Sp), this._writeObjectContent(pp, ip, cp), this._builder.end()
      }
      _getPrefix(pp) {
        if (pp.ns) {
          const ip = this._ns.get(pp.ns.toLowerCase());
          if ("xmlns" !== ip) return ip
        }
      }
      _writeObjectContent(pp, ip, cp) {
        const Op = bS(ip) ?? [],
          op = new Map;
        for (const Sp of Op) {
          const pp = op.get(Sp.prop) ?? [];
          pp.push(Sp), op.set(Sp.prop, pp)
        }
        const Ip = Object.keys(ip).sort(((pp, ip) => {
          const cp = (op.get(pp) ?? []).some((pp => "attr" === pp.kind));
          return cp === (op.get(ip) ?? []).some((pp => "attr" === pp.kind)) ? 0 : cp ? -1 : 1
        }));
        for (const Sp of Ip) {
          const Op = ip[Sp];
          if (null === Op || void 0 === Op) continue;
          const Ip = op.get(Sp);
          if (Ip) {
            if (Ip.some((pp => !0 === pp.ignore || "none" === pp.kind))) continue;
            for (const ip of Ip) {
              const cp = ip.name ?? ip.prop.toLowerCase();
              if (cp) switch (ip.kind) {
                case "attr": {
                  let op = null;
                  if ("number" === typeof Op && this._nFmt && (op = this._nFmt.toString(Op)), ip.formatter) {
                    op = new ip.formatter(this._format).toString(Op)
                  }
                  if (op = op ?? Op.toString(), op) {
                    const ip = nS(cp),
                      Op = this._getPrefix(ip),
                      Ip = FS(ip.name, Op);
                    pp.att(null, Ip, op)
                  }
                  break
                }
              }
            }
          } else px(Op) || (KS(Op) ? this._builder.text(Op) : this._writeObject(pp, Op, cp))
        }
      }
      _gatherNamespaces(pp, ip) {
        if (ip.has(pp)) return;
        if (ip.add(pp), Array.isArray(pp)) {
          for (const cp of pp) VS(cp) || this._gatherNamespaces(cp, ip);
          return
        }
        const cp = hS(pp);
        cp && this._assignNamespace(cp);
        const Op = bS(pp) ?? [],
          op = new Map;
        for (const Sp of Op) {
          const pp = op.get(Sp.prop) ?? [];
          pp.push(Sp), op.set(Sp.prop, pp)
        }
        const Ip = [];
        for (const Sp of Object.keys(pp)) {
          const ip = pp[Sp];
          if (null === ip || void 0 === ip) continue;
          const cp = op.get(Sp);
          if (cp) {
            if (cp.some((pp => !0 === pp.ignore || "none" === pp.kind))) continue;
            for (const pp of cp) pp.name && this._assignNamespace(pp.name)
          }
          Ip.push(ip)
        }
        for (const Sp of Ip) VS(Sp) || this._gatherNamespaces(Sp, ip)
      }
      _assignNamespace(pp, ip) {
        const cp = nS(pp);
        if (cp?.ns) {
          const pp = cp.ns.toLowerCase();
          this._ns.get(pp) || this._ns.set(pp, ip ?? this._buildNsPrefix(pp))
        } else if ("xmlns" === ip) {
          const pp = cp.name.toLowerCase();
          this._ns.get(pp) || this._ns.set(pp, ip ?? this._buildNsPrefix(pp))
        }
      }
      _buildNsPrefix(pp) {
        let ip, cp = !1;
        do {
          ip = "ns" + this._prefixCount++;
          for (const pp of Array.from(this._ns.values()))
            if (pp === ip) {
              cp = !0;
              break
            }
        } while (cp);
        return ip
      }
    }
    class cx {}
    var Ox;
    cx.OpenTag = "<", cx.CloseTag = ">", cx.Slash = "/", cx.Question = "?", cx.Quote = '"', cx.Equal = "=", cx.Space = " ", cx.Semicolon = ":", cx.Dec = "<?xml", cx.Xml = "xml", cx.Xmlns = "xmlns", cx.Xsi = "xsi", cx.VersionKeyword = "version", cx.EncodingKeyword = "encoding", cx.StandaloneKeyword = "standalone",
      function(pp) {
        pp[pp.Declaration = 0] = "Declaration", pp[pp.Tag = 1] = "Tag", pp[pp.Attribute = 2] = "Attribute", pp[pp.Text = 3] = "Text"
      }(Ox || (Ox = {}));
    class ox {
      constructor(pp) {
        this._ctxStack = [], this._d = 0, this._w = pp
      }
      dec(pp, ip, cp) {
        return this._w.write(cx.Dec), this._writeAttStr(cx.VersionKeyword, pp), ip && this._writeAttStr(cx.EncodingKeyword, ip), void 0 !== cp && this._writeAttStr(cx.StandaloneKeyword, cp ? "yes" : "no"), this._w.write(cx.Question, cx.CloseTag), this
      }
      att(pp, ip, cp) {
        const Op = this._peekContext();
        if (!Op) throw new Error("att() without open element");
        if (Op.closed) throw new Error(`att() after start tag closed for <${Op.name}>`);
        if (this._isXmlnsDecl(pp, ip)) {
          if (ip === cx.Xmlns) Op.defaultNs = cp, this._registerNamespace(Op, "", cp), this._writeAttStr(cx.Xmlns, cp);
          else if (pp) this._registerNamespace(Op, ip, cp), this._writeAttStr(`${pp}:${ip}`, cp);
          else {
            const pp = ip.slice(6);
            this._registerNamespace(Op, pp, cp), this._writeAttStr(ip, cp)
          }
          return Op.lastToken = Ox.Attribute, this
        }
        let op = ip;
        if (pp) {
          op = `${this._ensurePrefixDeclared(Op,pp)}:${ip}`
        }
        return Op.lastToken = Ox.Attribute, this._writeAttStr(op, cp), this
      }
      ele(pp, ip) {
        const cp = this._peekContext();
        cp && this._closeOpenTagIfNeeded(cp);
        let Op = ip;
        if (pp) {
          Op = `${this._lookupPrefix(pp)??pp}:${ip}`
        }
        return this._pushContext(Op, ++this._d), this._w.write(cx.OpenTag, Op), this
      }
      text(pp) {
        const ip = this._peekContext();
        if (!ip) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(ip), ip.lastToken = Ox.Text, this._w.write(this._escText(pp)), this
      }
      end() {
        const pp = this._popContext();
        return pp && (this._d--, pp.closed ? this._w.write(cx.OpenTag, cx.Slash, pp.name, cx.CloseTag) : this._w.write(cx.Slash, cx.CloseTag)), this
      }
      _pushContext(pp, ip) {
        const cp = new ox.Context(pp, ip);
        return this._ctxStack.push(cp), cp
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
      _writeAttStr(pp, ip) {
        this._w.write(cx.Space, pp, cx.Equal, cx.Quote, this._escAttr(ip), cx.Quote)
      }
      _lookupPrefix(pp) {
        let ip = this._ctxStack.length - 1;
        if (ip >= 0)
          do {
            const cp = this._ctxStack[ip--],
              Op = cp.ns2prefix?.get(pp);
            if (Op) return Op
          } while (ip >= 0)
      }
      _escText(pp) {
        return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(pp) {
        return this._escText(pp).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(pp, ip) {
        if (pp) return pp === cx.Xmlns;
        const cp = ip.length,
          Op = cx.Xmlns.length;
        return cp >= Op && (ip.startsWith(cx.Xmlns) && (ip.length == Op || ip[Op] == cx.Semicolon))
      }
      _registerNamespace(pp, ip, cp) {
        if (ip === cx.Xml || ip === cx.Xmlns) throw new Error(`reserved prefix '${ip}'`);
        const Op = pp.prefix2ns.get(ip);
        if (Op && Op !== cp) throw new Error(`prefix '${ip}' already bound to a different namespace`);
        pp.ns2prefix.get(cp) || pp.ns2prefix.set(cp, ip), pp.prefix2ns.set(ip, cp)
      }
      _allocPrefix(pp) {
        let ip = 1;
        for (;;) {
          const cp = "ns" + ip++;
          if (!pp.prefix2ns.has(cp)) return cp
        }
      }
      _ensurePrefixDeclared(pp, ip) {
        const cp = this._lookupPrefix(ip);
        if (cp) return cp;
        if (pp.closed) throw new Error(`can not declare namespace after start tag closed for <${pp.name}>`);
        const Op = this._allocPrefix(pp);
        return this._writeAttStr(`${cx.Xmlns}:${Op}`, ip), this._registerNamespace(pp, Op, ip), Op
      }
      _closeOpenTagIfNeeded(pp) {
        pp.closed || (this._w.write(cx.CloseTag), pp.closed = !0)
      }
    }
    ox.Context = class {
      constructor(pp, ip) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = pp, this.depth = ip
      }
    };
    class Ix {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        if (0 === ip.length) return this;
        const Op = ip.join("");
        return this._chunks.push(Op), this.count += Op.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Sx {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = pp, this._opts = ip, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        if (0 === ip.length) return this;
        const Op = ip.join("");
        if (0 === Op.length) return this;
        this._pending += Op, this._pendingChars += Op.length;
        const op = this._opts.flushChars ?? 65536;
        return this._pendingChars >= op && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const pp = this._encoder.encode(this._pending);
        return this._sink.push(pp), this.count += pp.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const xx = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Lx = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Yx, Dx;
    ! function(pp) {
      pp.micron = "micron", pp.millimeter = "millimeter", pp.centimeter = "centimeter", pp.inch = "inch", pp.foot = "foot", pp.meter = "meter"
    }(Yx || (Yx = {})),
    function(pp) {
      pp.model = "model", pp.solidsupport = "solidsupport", pp.support = "support", pp.surface = "surface", pp.other = "other"
    }(Dx || (Dx = {}));
    const Ax = "http://schemas.openxmlformats.org/package/2006/content-types",
      Px = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Wx;
    ! function(pp) {
      pp.Relationships = "application/vnd.openxmlformats-package.relationships+xml", pp.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", pp.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", pp.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", pp.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", pp.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", pp.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", pp.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", pp.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", pp.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", pp.Png = "image/png", pp.Jpeg = "image/jpeg", pp.Tiff = "image/tiff", pp.Xml = "application/xml"
    }(Wx || (Wx = {}));
    const yx = "_rels/",
      Ux = "3D/",
      wx = "3dmodel.model",
      vx = ".rels",
      tx = "[Content_Types].xml";
    class Hx {
      static IsKnown(pp) {
        return Hx.Known.has(pp)
      }
      static IsThreeDimModel(pp) {
        return pp === Hx.ThreeDimModel
      }
    }
    Hx.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Hx.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Hx.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Hx.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Hx.Known = new Set([Hx.ThreeDimModel, Hx.Thumbnail, Hx.PrintTicket, Hx.MustPreserve]);
    let dx = (() => {
        let pp, ip, cp = [BS({
            ns: Ax,
            name: "Types"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfContentTypes"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      ex = (() => {
        let pp, ip, cp, Op, op = [BS({
            ns: Ax,
            name: "Default"
          })],
          Ip = [],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [];
        ip = class {
          constructor(pp, ip) {
            this.ext = (0, Rp.l)(this, Sp, void 0), this.ct = ((0, Rp.l)(this, xp), (0, Rp.l)(this, Lp, void 0)), (0, Rp.l)(this, Yp), this.ext = pp, this.ct = ip
          }
        };
        return (0, Rp.m)(ip, "ThreeMfContentType"), (() => {
          const Dp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: {
              ns: Ax,
              name: "Extension"
            }
          })], Op = [TS({
            name: {
              ns: Ax,
              name: "ContentType"
            }
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: pp => "ext" in pp,
              get: pp => pp.ext,
              set: (pp, ip) => {
                pp.ext = ip
              }
            },
            metadata: Dp
          }, Sp, xp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: pp => "ct" in pp,
              get: pp => pp.ct,
              set: (pp, ip) => {
                pp.ct = ip
              }
            },
            metadata: Dp
          }, Lp, Yp), (0, Rp.j)(null, pp = {
            value: ip
          }, op, {
            kind: "class",
            name: ip.name,
            metadata: Dp
          }, null, Ip), ip = pp.value, Dp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dp
          }), (0, Rp.l)(ip, Ip)
        })(), ip
      })(),
      ux = (() => {
        let pp, ip, cp = [BS({
            ns: Px,
            name: "Relationships"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfRelationships"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      jx = (() => {
        let pp, ip, cp, Op, op, Ip = [BS({
            ns: Px,
            name: "Relationship"
          })],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        ip = class {
          constructor(pp, ip, cp) {
            this.id = (0, Rp.l)(this, xp, void 0), this.type = ((0, Rp.l)(this, Lp), (0, Rp.l)(this, Yp, void 0)), this.target = ((0, Rp.l)(this, Dp), (0, Rp.l)(this, Ap, void 0)), (0, Rp.l)(this, Pp), this.id = pp, this.type = ip, this.target = cp
          }
        };
        return (0, Rp.m)(ip, "ThreeMfRelationship"), (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "Id"
          })], Op = [TS({
            name: "Type"
          })], op = [TS({
            name: "Target"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: pp => "id" in pp,
              get: pp => pp.id,
              set: (pp, ip) => {
                pp.id = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: pp => "type" in pp,
              get: pp => pp.type,
              set: (pp, ip) => {
                pp.type = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: pp => "target" in pp,
              get: pp => pp.target,
              set: (pp, ip) => {
                pp.target = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), (0, Rp.j)(null, pp = {
            value: ip
          }, Ip, {
            kind: "class",
            name: ip.name,
            metadata: Wp
          }, null, Sp), ip = pp.value, Wp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          }), (0, Rp.l)(ip, Sp)
        })(), ip
      })();
    class kx {
      constructor(pp, ip, cp) {
        this.contentTypes = pp, this.relationships = ip, this.model = cp
      }
    }
    class mx {
      static Zero() {
        return new mx([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(pp) {
        this.values = pp
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Rx {
      constructor(pp) {
        this.o = pp, this._f = new zS(pp)
      }
      toString(pp) {
        return pp.values.map((pp => this._f.toString(pp))).join(" ")
      }
    }
    let qx = (() => {
        let pp, ip, cp, Op, op, Ip = [BS({
            ns: xx,
            name: "model"
          })],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        ip = class {
          constructor() {
            this.unit = (0, Rp.l)(this, xp, Yx.millimeter), this.requiredextensions = ((0, Rp.l)(this, Lp), (0, Rp.l)(this, Yp, void 0)), this.recommendedextensions = ((0, Rp.l)(this, Dp), (0, Rp.l)(this, Ap, void 0)), this.metadata = (0, Rp.l)(this, Pp)
          }
        };
        return (0, Rp.m)(ip, "ThreeMfModel"), (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "unit"
          })], Op = [TS({
            name: "requiredextensions"
          })], op = [TS({
            name: "recommendedextensions"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: pp => "unit" in pp,
              get: pp => pp.unit,
              set: (pp, ip) => {
                pp.unit = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: pp => "requiredextensions" in pp,
              get: pp => pp.requiredextensions,
              set: (pp, ip) => {
                pp.requiredextensions = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: pp => "recommendedextensions" in pp,
              get: pp => pp.recommendedextensions,
              set: (pp, ip) => {
                pp.recommendedextensions = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), (0, Rp.j)(null, pp = {
            value: ip
          }, Ip, {
            kind: "class",
            name: ip.name,
            metadata: Wp
          }, null, Sp), ip = pp.value, Wp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          })
        })(), ip.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Rp.l)(ip, Sp), ip
      })(),
      Mx = (() => {
        let pp, ip, cp, Op, op, Ip = [BS({
            ns: xx,
            name: "meta"
          })],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        ip = class {
          constructor(pp, ip, cp, Op) {
            this.name = (0, Rp.l)(this, xp, void 0), this.preserve = ((0, Rp.l)(this, Lp), (0, Rp.l)(this, Yp, void 0)), this.type = ((0, Rp.l)(this, Dp), (0, Rp.l)(this, Ap, void 0)), this.value = (0, Rp.l)(this, Pp), this.name = pp, this.value = ip, this.preserve = cp, this.type = Op
          }
        };
        return (0, Rp.m)(ip, "ThreeMfMeta"), (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "name"
          })], Op = [TS({
            name: "preserve"
          })], op = [TS({
            name: "type"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: pp => "name" in pp,
              get: pp => pp.name,
              set: (pp, ip) => {
                pp.name = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: pp => "preserve" in pp,
              get: pp => pp.preserve,
              set: (pp, ip) => {
                pp.preserve = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: pp => "type" in pp,
              get: pp => pp.type,
              set: (pp, ip) => {
                pp.type = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), (0, Rp.j)(null, pp = {
            value: ip
          }, Ip, {
            kind: "class",
            name: ip.name,
            metadata: Wp
          }, null, Sp), ip = pp.value, Wp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          }), (0, Rp.l)(ip, Sp)
        })(), ip
      })(),
      Cx = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "metadatagroup"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfMetadataGroup"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      Ex = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "resources"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfResources"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      Xx = (() => {
        let pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp = [BS({
            ns: xx,
            name: "object"
          })],
          Dp = [],
          Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [],
          vp = [],
          tp = [],
          Hp = [],
          dp = [],
          ep = [],
          jp = [],
          kp = [],
          mp = [];
        ip = class {
          constructor(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dx.model;
            this.id = (0, Rp.l)(this, Ap, void 0), this.type = ((0, Rp.l)(this, Pp), (0, Rp.l)(this, Wp, void 0)), this.thumbnail = ((0, Rp.l)(this, yp), (0, Rp.l)(this, Up, void 0)), this.partnumber = ((0, Rp.l)(this, wp), (0, Rp.l)(this, vp, void 0)), this.name = ((0, Rp.l)(this, tp), (0, Rp.l)(this, Hp, void 0)), this.pid = ((0, Rp.l)(this, dp), (0, Rp.l)(this, ep, void 0)), this.pindex = ((0, Rp.l)(this, jp), (0, Rp.l)(this, kp, void 0)), this.metadatagroup = (0, Rp.l)(this, mp), this.id = pp, this.type = ip
          }
        };
        return (0, Rp.m)(ip, "ThreeMfObject"), (() => {
          const qp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "id"
          })], Op = [TS({
            name: "type"
          })], op = [TS({
            name: "thumbnail"
          })], Ip = [TS({
            name: "partnumber"
          })], Sp = [TS({
            name: "name"
          })], xp = [TS({
            name: "pid"
          })], Lp = [TS({
            name: "pindex"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: pp => "id" in pp,
              get: pp => pp.id,
              set: (pp, ip) => {
                pp.id = ip
              }
            },
            metadata: qp
          }, Ap, Pp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: pp => "type" in pp,
              get: pp => pp.type,
              set: (pp, ip) => {
                pp.type = ip
              }
            },
            metadata: qp
          }, Wp, yp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: pp => "thumbnail" in pp,
              get: pp => pp.thumbnail,
              set: (pp, ip) => {
                pp.thumbnail = ip
              }
            },
            metadata: qp
          }, Up, wp), (0, Rp.j)(null, null, Ip, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: pp => "partnumber" in pp,
              get: pp => pp.partnumber,
              set: (pp, ip) => {
                pp.partnumber = ip
              }
            },
            metadata: qp
          }, vp, tp), (0, Rp.j)(null, null, Sp, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: pp => "name" in pp,
              get: pp => pp.name,
              set: (pp, ip) => {
                pp.name = ip
              }
            },
            metadata: qp
          }, Hp, dp), (0, Rp.j)(null, null, xp, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: pp => "pid" in pp,
              get: pp => pp.pid,
              set: (pp, ip) => {
                pp.pid = ip
              }
            },
            metadata: qp
          }, ep, jp), (0, Rp.j)(null, null, Lp, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: pp => "pindex" in pp,
              get: pp => pp.pindex,
              set: (pp, ip) => {
                pp.pindex = ip
              }
            },
            metadata: qp
          }, kp, mp), (0, Rp.j)(null, pp = {
            value: ip
          }, Yp, {
            kind: "class",
            name: ip.name,
            metadata: qp
          }, null, Dp), ip = pp.value, qp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qp
          }), (0, Rp.l)(ip, Dp)
        })(), ip
      })(),
      lx = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "mesh"
          })],
          Op = [];
        ip = class {
          constructor(pp, ip) {
            this.vertices = pp ?? new Qx, this.triangles = ip ?? new Bx
          }
        };
        return (0, Rp.m)(ip, "ThreeMfMesh"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      Qx = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "vertices"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfVertices"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      Jx = (() => {
        let pp, ip, cp, Op, op, Ip = [BS({
            ns: xx,
            name: "vertex"
          })],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        ip = class {
          constructor() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Rp.l)(this, xp, void 0), this.y = ((0, Rp.l)(this, Lp), (0, Rp.l)(this, Yp, void 0)), this.z = ((0, Rp.l)(this, Dp), (0, Rp.l)(this, Ap, void 0)), (0, Rp.l)(this, Pp), this.x = pp, this.y = ip, this.z = cp
          }
        };
        return (0, Rp.m)(ip, "ThreeMfVertex"), (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "x"
          })], Op = [TS({
            name: "y"
          })], op = [TS({
            name: "z"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: pp => "x" in pp,
              get: pp => pp.x,
              set: (pp, ip) => {
                pp.x = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: pp => "y" in pp,
              get: pp => pp.y,
              set: (pp, ip) => {
                pp.y = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: pp => "z" in pp,
              get: pp => pp.z,
              set: (pp, ip) => {
                pp.z = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), (0, Rp.j)(null, pp = {
            value: ip
          }, Ip, {
            kind: "class",
            name: ip.name,
            metadata: Wp
          }, null, Sp), ip = pp.value, Wp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          }), (0, Rp.l)(ip, Sp)
        })(), ip
      })(),
      Bx = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "triangles"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfTriangles"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      Nx = (() => {
        let pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp = [BS({
            ns: xx,
            name: "triangle"
          })],
          Dp = [],
          Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [],
          vp = [],
          tp = [],
          Hp = [],
          dp = [],
          ep = [],
          jp = [],
          kp = [],
          mp = [];
        ip = class {
          constructor(pp, ip, cp) {
            this.v1 = (0, Rp.l)(this, Ap, void 0), this.v2 = ((0, Rp.l)(this, Pp), (0, Rp.l)(this, Wp, void 0)), this.v3 = ((0, Rp.l)(this, yp), (0, Rp.l)(this, Up, void 0)), this.p1 = ((0, Rp.l)(this, wp), (0, Rp.l)(this, vp, void 0)), this.p2 = ((0, Rp.l)(this, tp), (0, Rp.l)(this, Hp, void 0)), this.p3 = ((0, Rp.l)(this, dp), (0, Rp.l)(this, ep, void 0)), this.pid = ((0, Rp.l)(this, jp), (0, Rp.l)(this, kp, void 0)), (0, Rp.l)(this, mp), this.v1 = pp, this.v2 = ip, this.v3 = cp
          }
        };
        return (0, Rp.m)(ip, "ThreeMfTriangle"), (() => {
          const qp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "v1"
          })], Op = [TS({
            name: "v2"
          })], op = [TS({
            name: "v3"
          })], Ip = [TS({
            name: "p1"
          })], Sp = [TS({
            name: "p2"
          })], xp = [TS({
            name: "p3"
          })], Lp = [TS({
            name: "pid"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: pp => "v1" in pp,
              get: pp => pp.v1,
              set: (pp, ip) => {
                pp.v1 = ip
              }
            },
            metadata: qp
          }, Ap, Pp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: pp => "v2" in pp,
              get: pp => pp.v2,
              set: (pp, ip) => {
                pp.v2 = ip
              }
            },
            metadata: qp
          }, Wp, yp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: pp => "v3" in pp,
              get: pp => pp.v3,
              set: (pp, ip) => {
                pp.v3 = ip
              }
            },
            metadata: qp
          }, Up, wp), (0, Rp.j)(null, null, Ip, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: pp => "p1" in pp,
              get: pp => pp.p1,
              set: (pp, ip) => {
                pp.p1 = ip
              }
            },
            metadata: qp
          }, vp, tp), (0, Rp.j)(null, null, Sp, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: pp => "p2" in pp,
              get: pp => pp.p2,
              set: (pp, ip) => {
                pp.p2 = ip
              }
            },
            metadata: qp
          }, Hp, dp), (0, Rp.j)(null, null, xp, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: pp => "p3" in pp,
              get: pp => pp.p3,
              set: (pp, ip) => {
                pp.p3 = ip
              }
            },
            metadata: qp
          }, ep, jp), (0, Rp.j)(null, null, Lp, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: pp => "pid" in pp,
              get: pp => pp.pid,
              set: (pp, ip) => {
                pp.pid = ip
              }
            },
            metadata: qp
          }, kp, mp), (0, Rp.j)(null, pp = {
            value: ip
          }, Yp, {
            kind: "class",
            name: ip.name,
            metadata: qp
          }, null, Dp), ip = pp.value, qp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qp
          }), (0, Rp.l)(ip, Dp)
        })(), ip
      })(),
      Tx = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "components"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfComponents"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      fx = (() => {
        let pp, ip, cp, Op, op = [BS({
            ns: xx,
            name: "component"
          })],
          Ip = [],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [];
        ip = class {
          constructor(pp, ip) {
            this.objectid = (0, Rp.l)(this, Sp, void 0), this.transform = ((0, Rp.l)(this, xp), (0, Rp.l)(this, Lp, void 0)), (0, Rp.l)(this, Yp), this.objectid = pp, this.transform = ip
          }
        };
        return (0, Rp.m)(ip, "ThreeMfComponent"), (() => {
          const Dp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "objectid"
          })], Op = [TS({
            name: "transform",
            formatter: Rx
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: pp => "objectid" in pp,
              get: pp => pp.objectid,
              set: (pp, ip) => {
                pp.objectid = ip
              }
            },
            metadata: Dp
          }, Sp, xp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: pp => "transform" in pp,
              get: pp => pp.transform,
              set: (pp, ip) => {
                pp.transform = ip
              }
            },
            metadata: Dp
          }, Lp, Yp), (0, Rp.j)(null, pp = {
            value: ip
          }, op, {
            kind: "class",
            name: ip.name,
            metadata: Dp
          }, null, Ip), ip = pp.value, Dp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dp
          }), (0, Rp.l)(ip, Ip)
        })(), ip
      })(),
      bx = (() => {
        let pp, ip, cp, Op = [BS({
            ns: xx,
            name: "basematerials"
          })],
          op = [],
          Ip = [],
          Sp = [];
        ip = class {
          constructor(pp) {
            this.id = (0, Rp.l)(this, Ip, void 0), this.base = ((0, Rp.l)(this, Sp), []), this.id = pp
          }
        };
        return (0, Rp.m)(ip, "ThreeMfBaseMaterials"), (() => {
          const xp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "id"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: pp => "id" in pp,
              get: pp => pp.id,
              set: (pp, ip) => {
                pp.id = ip
              }
            },
            metadata: xp
          }, Ip, Sp), (0, Rp.j)(null, pp = {
            value: ip
          }, Op, {
            kind: "class",
            name: ip.name,
            metadata: xp
          }, null, op), ip = pp.value, xp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xp
          }), (0, Rp.l)(ip, op)
        })(), ip
      })(),
      hx = (() => {
        let pp, ip, cp, Op, op = [BS({
            ns: xx,
            name: "base"
          })],
          Ip = [],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [];
        ip = class {
          constructor(pp, ip) {
            this.name = (0, Rp.l)(this, Sp, void 0), this.displaycolor = ((0, Rp.l)(this, xp), (0, Rp.l)(this, Lp, void 0)), (0, Rp.l)(this, Yp), this.name = pp, this.displaycolor = ip
          }
        };
        return (0, Rp.m)(ip, "ThreeMfBase"), (() => {
          const Dp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "name"
          })], Op = [TS({
            name: "displaycolor"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: pp => "name" in pp,
              get: pp => pp.name,
              set: (pp, ip) => {
                pp.name = ip
              }
            },
            metadata: Dp
          }, Sp, xp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: pp => "displaycolor" in pp,
              get: pp => pp.displaycolor,
              set: (pp, ip) => {
                pp.displaycolor = ip
              }
            },
            metadata: Dp
          }, Lp, Yp), (0, Rp.j)(null, pp = {
            value: ip
          }, op, {
            kind: "class",
            name: ip.name,
            metadata: Dp
          }, null, Ip), ip = pp.value, Dp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dp
          }), (0, Rp.l)(ip, Ip)
        })(), ip
      })(),
      ax = (() => {
        let pp, ip, cp = [BS({
            ns: xx,
            name: "build"
          })],
          Op = [];
        ip = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Rp.m)(ip, "ThreeMfBuild"), (() => {
          const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Rp.j)(null, pp = {
            value: ip
          }, cp, {
            kind: "class",
            name: ip.name,
            metadata: op
          }, null, Op), ip = pp.value, op && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: op
          }), (0, Rp.l)(ip, Op)
        })(), ip
      })(),
      nx = (() => {
        let pp, ip, cp, Op, op, Ip = [BS({
            ns: xx,
            name: "item"
          })],
          Sp = [],
          xp = [],
          Lp = [],
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        ip = class {
          constructor(pp, ip, cp) {
            this.objectid = (0, Rp.l)(this, xp, void 0), this.transform = ((0, Rp.l)(this, Lp), (0, Rp.l)(this, Yp, void 0)), this.partnumber = ((0, Rp.l)(this, Dp), (0, Rp.l)(this, Ap, void 0)), this.metadatagroup = (0, Rp.l)(this, Pp), this.objectid = pp, this.transform = ip, this.partnumber = cp
          }
        };
        return (0, Rp.m)(ip, "ThreeMfItem"), (() => {
          const Wp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cp = [TS({
            name: "objectid"
          })], Op = [TS({
            name: "transform",
            formatter: Rx
          })], op = [TS({
            name: "partnumber"
          })], (0, Rp.j)(null, null, cp, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: pp => "objectid" in pp,
              get: pp => pp.objectid,
              set: (pp, ip) => {
                pp.objectid = ip
              }
            },
            metadata: Wp
          }, xp, Lp), (0, Rp.j)(null, null, Op, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: pp => "transform" in pp,
              get: pp => pp.transform,
              set: (pp, ip) => {
                pp.transform = ip
              }
            },
            metadata: Wp
          }, Yp, Dp), (0, Rp.j)(null, null, op, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: pp => "partnumber" in pp,
              get: pp => pp.partnumber,
              set: (pp, ip) => {
                pp.partnumber = ip
              }
            },
            metadata: Wp
          }, Ap, Pp), (0, Rp.j)(null, pp = {
            value: ip
          }, Ip, {
            kind: "class",
            name: ip.name,
            metadata: Wp
          }, null, Sp), ip = pp.value, Wp && Object.defineProperty(ip, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wp
          }), (0, Rp.l)(ip, Sp)
        })(), ip
      })();
    class Fx {
      constructor(pp, ip) {
        this._object = new Xx(pp, ip)
      }
      withName(pp) {
        return this._object.name = pp, this
      }
      withThumbnail(pp) {
        return this._object.thumbnail = pp, this
      }
      withProperty(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = pp, this._object.id = ip, this
      }
      build() {
        return this._object
      }
      reset(pp, ip) {
        this._object = new Xx(pp, ip)
      }
    }
    class gx extends Fx {
      constructor(pp) {
        super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dx.model), this._object.content = new Tx
      }
      withComponent(pp, ip) {
        return this._object.content.component.push(new fx(pp, ip)), this
      }
    }
    class Gx extends Fx {
      constructor(pp) {
        super(pp, Dx.model)
      }
      withPostProcessHandlers(pp, ip) {
        return this._vh = pp, this._th = ip, this
      }
      withData(pp) {
        return this._object.content = this._buildMesh(pp), this
      }
      withMaterial(pp, ip) {
        return this._object.pid = pp, this._object.pindex = ip, this
      }
      _buildMesh(pp) {
        const ip = this._buildVertices(pp.positions),
          cp = this._buildTriangle(pp.indices);
        return new lx(ip, cp)
      }
      _buildVertices(pp) {
        const ip = new Qx;
        if (pp)
          for (let cp = 0; cp < pp.length;) {
            const Op = pp[cp++],
              op = pp[cp++],
              Ip = pp[cp++];
            let Sp = new Jx(Op, op, Ip);
            this._vh && (Sp = this._vh(Sp)), ip.vertex.push(Sp)
          }
        return ip
      }
      _buildTriangle(pp) {
        const ip = new Bx;
        if (pp)
          for (let cp = 0; cp < pp.length;) {
            const Op = pp[cp++],
              op = pp[cp++],
              Ip = pp[cp++];
            let Sp = new Nx(Op, op, Ip);
            this._th && (Sp = this._th(Sp)), ip.triangle.push(Sp)
          }
        return ip
      }
    }
    class rx {
      constructor(pp) {
        this._m = new bx(pp)
      }
      withColor(pp, ip) {
        this._m.base = this._m.base ?? [];
        let cp = this._m.base.find((ip => ip.name.toLowerCase() === pp.toLowerCase()));
        return cp ? (cp.displaycolor = this._rgbaToHex(ip), this) : (cp = new hx(pp, this._rgbaToHex(ip)), this._m.base.push(cp), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(pp) {
        const ip = pp => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(pp, 1 / 2.2)))),
          cp = ip(pp.r).toString(16).padStart(2, "0").toUpperCase(),
          Op = ip(pp.g).toString(16).padStart(2, "0").toUpperCase(),
          op = ip(pp.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof pp.a) {
          return `#${cp}${Op}${op}${Math.round(Math.min(255,Math.max(0,255*pp.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${cp}${Op}${op}`
      }
    }
    class Zx {
      constructor() {
        this._model = new qx, this._objects = new Map
      }
      withMetaData(pp, ip, cp, Op) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Mx(pp, ip, cp, Op)), this
      }
      withMaterial(pp) {
        return pp instanceof rx && (pp = pp.build()), pp && (this._model.resources = this._model.resources ?? new Ex, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(pp)), this
      }
      withMesh(pp) {
        return pp instanceof Gx && (pp = pp.build()), this._model.resources = this._model.resources ?? new Ex, this._model.resources.object.push(pp), this
      }
      withComponents(pp) {
        return pp instanceof gx && (pp = pp.build()), this._model.resources = this._model.resources ?? new Ex, this._model.resources.object.push(pp), this
      }
      withBuild(pp, ip, cp) {
        return this._model.build = this._model.build ?? new ax, this._model.build.item?.push(new nx(pp, ip, cp)), this
      }
      withUnit(pp) {
        return this._model.unit = pp, this
      }
      reset() {
        return this._model = new qx, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Zx.KnownMetaSet = new Set(qx.KnownMeta.map((pp => pp.toLowerCase())));
    class zx {
      withContentType(pp) {
        this._cts || (this._cts = new dx);
        const ip = this._cts.items;
        return ip.some((ip => ip.ext === pp.ext && ip.ct === pp.ct)) || ip.push(pp), this
      }
      withRelationship(pp) {
        this._rs || (this._rs = new ux);
        const ip = this._rs.items;
        return ip.some((ip => ip.id === pp.id)) || ip.push(pp), this.withContentType(new ex("rels", Wx.Relationships)), this
      }
      withModel(pp) {
        return pp instanceof Zx && (pp = pp.build()), this._m = pp, this.withContentType(new ex("model", Wx.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const pp = `${Ux}${wx}`;
        if (!this._rs) {
          const ip = `/${pp}`;
          this.withRelationship(new jx("rel0", Hx.ThreeDimModel, ip))
        }
        return new kx(this._cts, this._rs, this._m)
      }
    }
    class sx {
      constructor(pp) {
        this._o = pp
      }
      get options() {
        return this._o
      }
      async serializeAsync(pp) {
        const ip = await this.ensureZipLibReadyAsync();
        if (!ip) return;
        const cp = ip.Zip,
          Op = ip.ZipDeflate;
        if (!cp || !Op) throw new Error("fflate Zip / ZipDeflate not available");
        const op = function(pp, ip, cp) {
          const op = new Op(ip, {
            level: 6
          });
          pp.add(op);
          const Ip = function(pp) {
              return {
                push: (ip, cp) => pp.push(ip, cp)
              }
            }(op),
            Sp = new Sx(Ip),
            xp = new ox(Sp).dec("1.0", "UTF-8");
          new ix(xp).serialize(cp), Sp.finish()
        };
        for (var Ip = arguments.length, Sp = new Array(Ip > 1 ? Ip - 1 : 0), xp = 1; xp < Ip; xp++) Sp[xp - 1] = arguments[xp];
        const Lp = this.toDocument(...Sp);
        if (!Lp) return;
        const Yp = new cp(pp);
        op(Yp, tx, Lp.contentTypes), op(Yp, `${yx}${vx}`, Lp.relationships), op(Yp, `${Ux}${wx}`, Lp.model), Yp.end()
      }
      toDocument() {
        const pp = (new Zx).withUnit(this._o?.unit ?? Yx.millimeter);
        if (this.options.metadata)
          for (const op in this.options.metadata) pp.withMetaData(op, this.options.metadata[op]);
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return (new zx).withModel(this.toModel(pp, ...cp)).build()
      }
    }
    class Kx {
      static async SerializeToMemoryAsync(pp) {
        const ip = new Array;
        let cp = 0;
        for (var Op = arguments.length, op = new Array(Op > 1 ? Op - 1 : 0), Ip = 1; Ip < Op; Ip++) op[Ip - 1] = arguments[Ip];
        if (await pp.serializeAsync((function(pp, Op, op) {
            ip.push(Op), cp += Op.length
          }), ...op), !cp) return;
        const Sp = new Uint8Array(cp);
        let xp = 0;
        for (const Lp of ip) Sp.set(Lp, xp), xp += Lp.length;
        return Sp
      }
    }
    class Vx {}
    Vx.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class pL {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = pp, this._to = ip, this._step = cp, this._i = pp
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const pp = this._i;
        return this._i += this._step, pp
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class iL extends sx {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...iL.DefaultOptions,
          ...pp
        })
      }
      toModel(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        cp = cp.filter((pp => pp instanceof PO.c || pp instanceof Wp.c));
        const op = new pL,
          Ip = pp,
          Sp = new Map,
          xp = this.options.exportInstances ? [] : null;
        for (let Lp = 0; Lp < cp.length; Lp++) {
          const pp = cp[Lp];
          if (pp instanceof Wp.c) {
            xp?.push(pp);
            continue
          }
          const ip = pp.name || `mesh${Lp}`,
            Op = pp.getWorldMatrix(),
            Yp = this._handleBabylonTo3mfMatrixTransformToRef(Op, mx.Zero()),
            Dp = pp.Am;
          if (void 0 === Dp) continue;
          const Ap = 1 == Dp.length;
          for (let cp = 0; cp < Dp.length; cp++) {
            const Op = Dp[cp],
              xp = this._extractSubMesh(pp, Op);
            if (xp) {
              const pp = Ap ? `${ip}` : `${ip}_${cp}`,
                Lp = new Gx(op.next()).withData(xp).withName(pp).build();
              Ip.withMesh(Lp), Ip.withBuild(Lp.id, Yp), Sp.set(Op, Lp)
            }
          }
        }
        if (xp && xp.length) {
          const pp = this._groupBy(xp, (pp => pp.aop));
          for (const [ip, cp] of Array.from(pp.entries()))
            if (cp && cp.length)
              for (let pp = 0; pp < cp.length; pp++) {
                const Op = cp[pp].getWorldMatrix(),
                  op = ip.Am;
                for (let pp = 0; pp < op.length; pp++) {
                  const ip = op[pp],
                    cp = Sp.get(ip);
                  cp && Ip.withBuild(cp.id, this._handleBabylonTo3mfMatrixTransformToRef(Op, mx.Zero()))
                }
              }
        }
        return Ip.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const pp = globalThis;
          return pp.fflate || await op.Tools.LoadScriptAsync(Vx.FFLATEUrl), pp.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(pp, ip) {
        const cp = pp.NOp();
        if (!cp) return;
        const Op = pp.getVerticesData(iL._PositionKind);
        if (!Op) return;
        if (0 == ip.indexStart && ip.indexCount == cp.length) return {
          positions: Op,
          indices: cp
        };
        const op = ip.indexStart,
          Ip = new Map,
          Sp = [],
          xp = new Uint32Array(ip.indexCount);
        for (let Lp = 0; Lp < ip.indexCount; Lp++) {
          const pp = cp[op + Lp];
          let ip = Ip.get(pp);
          if (void 0 === ip) {
            ip = Ip.size, Ip.set(pp, ip);
            const cp = 3 * pp;
            Sp.push(Op[cp], Op[cp + 1], Op[cp + 2])
          }
          xp[Lp] = ip
        }
        return {
          positions: new Float32Array(Sp),
          indices: xp
        }
      }
      _groupBy(pp, ip) {
        const cp = new Map;
        for (const Op of pp) {
          const pp = ip(Op),
            op = cp.get(pp);
          op ? op.push(Op) : cp.set(pp, [Op])
        }
        return cp
      }
      _handleBabylonTo3mfMatrixTransformToRef(pp, ip) {
        const cp = pp.multiplyToRef(iL._R_BJS_TO_3MF, fp.b.Zero()).m;
        return ip.values = [cp[0], cp[1], cp[2], cp[4], cp[5], cp[6], cp[8], cp[9], cp[10], cp[12], cp[13], cp[14]], ip
      }
    }
    iL.DefaultOptions = {
      unit: Yx.meter,
      exportInstances: !1
    }, iL._PositionKind = "position", iL._R_BJS_TO_3MF = fp.b.RotationX(Math.PI / 2).multiply(fp.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);