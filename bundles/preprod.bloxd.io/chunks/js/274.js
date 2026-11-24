export const id = 274;
export const ids = [274];
export const modules = {
  41864: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp,
      e: () => xp,
      i: () => Sp,
      m: () => Yp
    });
    var Op = cp(37479),
      op = cp(38942),
      Ip = cp(38938);

    function Sp(pp, ip, cp, Op) {
      const op = Ip.o;
      ip.fill(0), pp.gravity.toArray(ip, op.gravity), pp.colorDead.toArray(ip, op.colorDead), cp[op.ramp] = pp.useRampGradients ? 1 : 0;
      const Sp = pp.getColorGradients(),
        xp = Pp(pp, Sp, "colour", Op);
      cp[op.colorCount] = xp;
      for (let Ip = 0; Ip < xp; Ip++) {
        var Lp;
        const pp = Sp[Wp(Sp, Ip)];
        ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
      }
      const Yp = pp.getVelocityGradients(),
        Dp = Pp(pp, Yp, "tw", Op);
      cp[op.velocityCount] = Dp;
      for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
      const Ap = pp.useRampGradients ? pp.getColorRemapGradients() : null,
        yp = Pp(pp, Ap, "colour remap", Op);
      cp[op.remapCount] = yp;
      for (let Ip = 0; Ip < yp; Ip++) tp(ip, op.remap + 4 * Ip, Ap[Wp(Ap, Ip)])
    }

    function xp() {
      return {
        key: [],
        texels: new Uint8Array(4 * Ip.k)
      }
    }
    const Lp = [];

    function Yp(pp, ip) {
      return Dp(pp, Lp), !vp(Lp, ip.key) && (ip.key.length = 0, ip.key.push(...Lp), ip.key.length > 0 && function(pp, ip) {
        for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
          Op.Color3.LerpToRef(pp.color, ip.color, cp, Ap)
        })), ip[4 * cp] = 255 * Ap.r, ip[4 * cp + 1] = 255 * Ap.g, ip[4 * cp + 2] = 255 * Ap.b, ip[4 * cp + 3] = 255
      }(pp.getRampGradients(), ip.texels), !0)
    }

    function Dp(pp, ip) {
      ip.length = 0;
      const cp = pp.useRampGradients ? pp.getRampGradients() : null;
      if (null !== cp && void 0 !== cp && cp.length) {
        ip.push(cp.length);
        for (const pp of cp) ip.push(pp.gradient, pp.color.r, pp.color.g, pp.color.b)
      }
    }
    const Ap = new Op.Color3;

    function Pp(pp, ip, cp, Op) {
      return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
    }

    function Wp(pp, ip) {
      return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
    }
    const yp = new Float32Array(Ip.m),
      Up = new Uint32Array(yp.buffer);

    function wp(pp, ip, cp) {
      return Sp(pp, yp, Up, cp), ip && vp(Up, ip) ? null : Up.slice()
    }

    function vp(pp, ip) {
      if (pp.length !== ip.length) return !1;
      for (let cp = 0; cp < pp.length; cp++)
        if (pp[cp] !== ip[cp]) return !1;
      return !0
    }

    function tp(pp, ip, cp) {
      var Op;
      pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
    }
  },
  41375: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      const Op = ip * ip * 4,
        op = pp[0].layers,
        Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
        Sp = new Uint8Array(Ip * Op);
      pp.forEach(((ip, cp) => {
        const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
        Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
      }));
      const xp = Math.max(1, Math.min(Ip, cp || Ip));
      if (xp === Ip) return [{
        pixels: Sp,
        layers: Ip
      }];
      const Lp = [];
      for (let Yp = 0; Yp < Ip; Yp += xp) {
        const pp = Math.min(Ip, Yp + xp);
        Lp.push({
          pixels: Sp.slice(Yp * Op, pp * Op),
          layers: pp - Yp
        })
      }
      return Lp
    }
    cp.d(ip, {
      d: () => Op,
      h: () => Ip
    });
    const op = new WeakMap;

    function Ip(pp, ip, cp) {
      var Op, Ip;
      const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
      op.set(pp, Sp);
      const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
      Sp.set(ip[0], xp);
      const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
      if (Lp) return Lp.built;
      const Yp = {
        urls: [...ip],
        built: cp()
      };
      return xp.push(Yp), Yp.built.catch((() => {
        xp.splice(xp.indexOf(Yp), 1)
      })), Yp.built
    }
  },
  41860: (pp, ip, cp) => {
    function Op() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ip = new Set;
      return (cp, Op) => {
        ip.has(cp) || (ip.add(cp), console.warn(pp + Op))
      }
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  41890: (pp, ip, cp) => {
    cp.d(ip, {
      createLiteRendererAsync: () => bL,
      liteBabylonBackend: () => bp,
      setPipelineFailureHook: () => Yi
    });
    var Op = cp(37479),
      op = cp(37815),
      Ip = cp(38118),
      Sp = cp(37445),
      xp = cp(38126);
    class Lp extends xp.c {
      constructor() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        super(...ip), this.color = new Op.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: ip[0].Gl().getUniqueId(),
          shaderPath: "color",
          fillMode: 4,
          sideOrientation: null,
          alphaMode: 2,
          forceDepthWrite: !1,
          disableDepthWrite: !1,
          backFaceCulling: !0,
          cullBackFaces: !0,
          depthFunction: 0,
          zOffset: 0,
          zOffsetUnits: 0,
          disableColorWrite: !1,
          getClassName: () => "ShaderMaterial",
          needAlphaBlendingForMesh: pp => pp.visibility < 1 || pp.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Yp = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Dp = pp => 1 << Yp.indexOf(pp),
      Ap = Dp("VERTEXCOLOR"),
      Pp = Dp("INSTANCES"),
      Wp = Dp("THIN_INSTANCES"),
      yp = Dp("INSTANCESCOLOR"),
      Up = Dp("FOG"),
      wp = Dp("LITE_FRONT_LAYER");

    function vp(pp, ip, cp, Op) {
      let op = 0;
      return pp.isVerticesDataPresent("color") && (op |= Ap), "none" !== ip && (op |= Pp), "thin" === ip && (op |= Wp, pp.isVerticesDataPresent("instanceColor") && (op |= yp)), Op.fogEnabled && pp.applyFog && 0 !== Op.fogMode && (op |= Up), cp >= 1 && (op |= wp), op
    }

    function tp(pp, ip) {
      pp.updateColor4("color", ip.color, ip.alpha)
    }
    var Hp = cp(38069),
      dp = cp(37655),
      ep = cp(37519),
      jp = cp(37421),
      kp = cp(38055),
      mp = cp(38064),
      Rp = cp(37436),
      qp = cp(37438),
      Mp = cp(37448);
    const Cp = jp.b.GLSL;
    class Ep {
      constructor(pp, ip) {
        this.name = pp, this.pw = ip, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Kl = {
          addOnce: pp => {
            this.disposers.push(pp)
          }
        }, this.uniqueId = ip.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      Gl() {
        return this.pw
      }
      getClassName() {
        return "LiteMaterial"
      }
      freeze() {
        this.checkReadyOnlyOnce = !0
      }
      unfreeze() {
        this.checkReadyOnlyOnce = !1
      }
      markDirty() {}
      get fillMode() {
        return this.model.fillMode
      }
      needAlphaBlendingForMesh(pp) {
        return (0, Rp.P)(this.model, pp.visibility, pp.hasVertexAlpha)
      }
      needAlphaTestingForMesh(pp) {
        return (0, Rp.T)(this.model, pp.visibility, pp.hasVertexAlpha)
      }
      dispose() {
        (0, dp.i)(this);
        for (const pp of this.disposers.splice(0)) pp()
      }
      get model() {
        return (0, Rp.$)(this)
      }
    }
    const Xp = new WeakSet;

    function lp(pp) {
      return Xp.has(pp)
    }

    function Qp(pp) {
      Xp.add(pp)
    }
    const Jp = {
      create: (pp, ip) => ((0, ep.p)(pp, new Ep(pp.name, ip)), qp.d.defines()),
      write: () => {},
      addFeature: (pp, ip) => {
        const cp = pp.mirror;
        ip.feature === mp.g && ip.state.dirLightCount > 0 && (pp.disableLighting = !0, (0, Rp.Y)(pp)), "BLOXD_LIGHTING" in ip.defines && (0, dp.g)(cp), ip.feature === kp.f && ((0, Hp.n)(ip.state, Cp), function(pp, ip) {
          const cp = pp.Gl().gy();
          setTimeout((() => {
            cp.atlasArrays(ip.sources).then((cp => {
              (0, Hp.b)(pp, ip, cp.map((pp => ({
                atlas: pp,
                layers: pp.layers
              }))), cp[0].layerWidth, Cp)
            })).catch((pp => {
              console.error("Failed to build the atlas's texture arrays", pp)
            }))
          }))
        }(cp, ip.state))
      },
      texture: (pp, ip, cp) => {
        let {
          data: Op,
          sets: op
        } = cp;
        var Ip;
        (Qp(pp), Op) && (pp.uvSet = null !== (Ip = null === op || void 0 === op ? void 0 : op.coordinatesIndex) && void 0 !== Ip ? Ip : 0, (0, ep.$)(pp.matrix, null !== op && void 0 !== op ? op : {}))
      },
      cube: Qp,
      canvas: (pp, ip, cp) => {
        let {
          width: Op,
          height: op,
          mipmaps: Ip,
          samplingMode: Sp = Mp.g.trilinear,
          hasAlpha: xp = !1,
          wrap: Lp = Mp.b.clamp
        } = cp;
        const Yp = pp.gy().createCanvas(Op, op),
          Dp = new Mp.k("2d", {
            kind: "canvas",
            width: Op,
            height: op,
            canvas: Yp
          }, {
            samplingMode: Sp,
            wrapU: Lp,
            wrapV: Lp,
            noMipmap: !Ip,
            invertY: !0
          });
        return Dp.hasAlpha = xp, Qp(Dp), Dp
      }
    };
    var Bp = cp(37667),
      Np = cp(37349);
    class Tp {
      constructor(pp, ip, cp) {
        this.engine = pp, this.clearColor = ip, this.ambientColor = cp, this.onBeforeRenderObservable = new Np.d, this.onBeforeCameraRenderObservable = new Np.d, this.onAfterRenderObservable = new Np.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.Wm = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      gy() {
        return this.engine
      }
      getUniqueId() {
        return ++this.lastId
      }
      getFrameId() {
        return this.frameId
      }
      getAnimationRatio() {
        return this.animationRatio
      }
      addPendingData(pp) {
        this.pending.push(pp)
      }
      removePendingData(pp) {
        const ip = this.pending.indexOf(pp); - 1 !== ip && this.pending.splice(ip, 1)
      }
      getWaitingItemsCount() {
        return this.pending.length
      }
      isReady() {
        return 0 === this.pending.length
      }
      getActiveMeshes() {
        return []
      }
      render() {
        this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
      }
    }

    function fp() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const bp = {
      Zcp: fp,
      jop: (pp, ip) => {
        const cp = new Tp(pp.engine, Op.b.FromArray(ip.clearColor), Op.Color3.FromArray(ip.ambientColor));
        (0, Sp.e)(Jp, cp), pp.pw = cp,
          function(pp, ip) {
            const cp = Object.assign((0, Bp.j)(pp, "camera"), {
              layerMask: 268435455
            });
            pp.model.nodes.setWorldSource(cp.row, pp.model.view.worldMatrix), pp.camera = ip.activeCamera = cp
          }(pp, cp), (0, op.i)(pp, ((pp, ip, cp) => (0, Ip.e)(pp, ip, cp, xp.c)))
      },
      wop: () => {},
      setBabylonFog: () => {},
      Rop: fp,
      Xop: () => {},
      linesFromArrays: (pp, ip, cp) => (0, Ip.e)(pp, ip, cp, Lp),
      iw: () => {},
      Eop: fp
    };
    var hp = cp(41948),
      ap = cp(41955),
      np = cp(41968);
    class Fp {
      constructor(pp) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const ip = new Promise((pp => {
          this.refused = pp
        }));
        this.deviceLost = Promise.race([pp, ip]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(pp) {
        (function(pp) {
          const {
            name: ip,
            message: cp
          } = null !== pp && void 0 !== pp ? pp : {};
          return "InvalidStateError" === ip && "string" === typeof cp && cp.startsWith("GPUDevice.")
        })(pp) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: pp.message,
          framesRefused: !0
        }))
      }
    }
    var gp = cp(41375),
      Gp = cp(38949);

    function rp(pp) {
      return Math.max(4, 4 * Math.ceil(pp / 4))
    }

    function Zp(pp, ip, cp, Op) {
      const op = pp.createBuffer({
        label: Op,
        size: rp(ip.byteLength),
        usage: cp,
        mappedAtCreation: !0
      });
      return new Uint8Array(op.getMappedRange(), 0, ip.byteLength).set(new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength)), op.unmap(), op
    }

    function zp(pp, ip) {
      return Math.floor(Math.log2(Math.max(pp, ip))) + 1
    }

    function sp(pp, ip, cp, Op, op, Ip) {
      const Sp = pp.createTexture({
          label: Ip,
          size: {
            width: cp,
            height: Op,
            depthOrArrayLayers: op
          },
          format: "rgba8unorm",
          mipLevelCount: zp(cp, Op),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        xp = (ip, cp, Op, Ip) => {
          pp.queue.writeTexture({
            texture: Sp,
            mipLevel: cp
          }, ip, {
            bytesPerRow: 4 * Op,
            rowsPerImage: Ip
          }, {
            width: Op,
            height: Ip,
            depthOrArrayLayers: op
          })
        };
      xp(ip, 0, cp, Op);
      let Lp = 1;
      for (const Yp of function*(pp, ip, cp, Op) {
          let op = pp,
            Ip = ip,
            Sp = cp;
          for (; Ip > 1 || Sp > 1;) {
            const pp = Math.max(1, Ip >> 1),
              ip = Math.max(1, Sp >> 1),
              cp = new Uint8Array(pp * ip * Op * 4),
              xp = 4 * Ip;
            let Lp = 0;
            for (let Yp = 0; Yp < Op; Yp++) {
              const Op = Yp * xp * Sp;
              for (let Yp = 0; Yp < ip; Yp++) {
                const ip = Op + Math.min(2 * Yp, Sp - 1) * xp,
                  Dp = Op + Math.min(2 * Yp + 1, Sp - 1) * xp;
                for (let Op = 0; Op < pp; Op++) {
                  const pp = 4 * Math.min(2 * Op, Ip - 1),
                    Sp = 4 * Math.min(2 * Op + 1, Ip - 1);
                  for (let Op = 0; Op < 4; Op++) cp[Lp++] = op[ip + pp + Op] + op[ip + Sp + Op] + op[Dp + pp + Op] + op[Dp + Sp + Op] + 2 >> 2
                }
              }
            }
            yield {
              data: cp,
              width: pp,
              height: ip
            }, op = cp, Ip = pp, Sp = ip
          }
        }(ip, cp, Op, op)) xp(Yp.data, Lp++, Yp.width, Yp.height);
      return Sp
    }
    const Kp = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Vp(pp) {
      if (pp.startsWith("data:")) {
        const ip = pp.search(/[;,]/);
        return `data:${ip>5?pp.slice(5,ip):""} URL of ${pp.length} characters`
      }
      return pp.length > 80 ? `${pp.slice(0,80)}...` : pp
    }
    async function ii(pp) {
      const ip = await fetch(pp);
      if (!ip.ok) throw new Error(`${Vp(pp)}: ${ip.status} ${ip.statusText}`);
      return createImageBitmap(await ip.blob(), Kp)
    }
    async function ci(pp) {
      const ip = await ii(pp),
        cp = new OffscreenCanvas(ip.width, ip.height),
        Op = cp.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Op) throw new Error("No 2D context to decode an image");
      Op.drawImage(ip, 0, 0);
      const {
        data: op
      } = Op.getImageData(0, 0, ip.width, ip.height);
      return ip.close(), {
        pixels: new Uint8Array(op.buffer, op.byteOffset, op.byteLength),
        width: cp.width,
        height: cp.height
      }
    }

    function Oi(pp, ip) {
      return (0, gp.h)(pp, ip.urls, (async () => {
        const cp = await Promise.all(ip.urls.map((async (pp, cp) => {
            var Op, op, Ip, Sp, xp;
            return null !== (Sp = null !== (op = null === (Ip = ip.pixels) || void 0 === Ip ? void 0 : Ip[cp]) && void 0 !== op ? op : null, xp = ip.layerWidth, Op = null !== Sp && void 0 !== Sp && Sp.byteLength && xp && Sp.byteLength % (xp * xp * 4) === 0 ? {
              pixels: Sp,
              layerWidth: xp,
              layers: Sp.byteLength / (xp * xp * 4)
            } : null) && void 0 !== Op ? Op : await async function(pp) {
              const {
                pixels: ip,
                width: cp
              } = await ci(pp);
              return {
                pixels: ip,
                layerWidth: cp,
                layers: ip.byteLength / (cp * cp * 4)
              }
            }(pp)
          }))),
          Op = cp[0].layerWidth;
        return (0, gp.d)(cp, Op, pp.limits.maxTextureArrayLayers).map(((cp, op) => {
          let {
            pixels: Ip,
            layers: Sp
          } = cp;
          return {
            texture: sp(pp, Ip, Op, Op, Sp, `atlas-${op}-${Vp(ip.urls[0])}`),
            layerWidth: Op,
            layers: Sp
          }
        }))
      }))
    }
    const oi = new Map([
        [0, "zero"],
        [1, "one"],
        [768, "src"],
        [769, "one-minus-src"],
        [770, "src-alpha"],
        [771, "one-minus-src-alpha"],
        [772, "dst-alpha"],
        [773, "one-minus-dst-alpha"],
        [774, "dst"],
        [775, "one-minus-dst"],
        [776, "src-alpha-saturated"]
      ]),
      Ii = new Map([
        [1, [770, 1, "add"]],
        [2, [770, 771, "add"]],
        [3, [0, 769, "add"]],
        [4, [774, 0, "add"]],
        [5, [770, 769, "add"]],
        [6, [1, 1, "add"]],
        [7, [1, 771, "add"]],
        [8, [1, 771, "add"]],
        [10, [1, 769, "add"]],
        [11, [1, 1, "add"]],
        [14, [1, 771, "add"]],
        [15, [1, 1, "add"]],
        [17, [770, 771, "add"]],
        [18, [1, 1, "min"]],
        [19, [1, 1, "max"]]
      ]);

    function Si(pp) {
      for (const ip of (0, Gp.o)(pp))
        if (!Ii.has((0, Gp.l)(ip))) return !1;
      return !0
    }

    function xi(pp) {
      const ip = Ii.get(pp);
      if (!ip) return null;
      const [cp, Op, op] = ip;
      return {
        srcFactor: oi.get(cp),
        dstFactor: oi.get(Op),
        operation: op
      }
    }
    let Li = null;

    function Yi(pp) {
      Li = pp
    }
    const Di = new WeakSet;

    function Ai(pp) {
      return Di.has(pp)
    }

    function Pi(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var Ip;
      Ai(pp) || (null === (Ip = Li) || void 0 === Ip || Ip(ip, cp, Op, op))
    }
    class Wi {
      constructor(pp) {
        this.resources = pp, this.matrixKey = {
          TA: 0
        }, this.attributesKey = {
          TA: 0
        }, this.inputs = Object.create(null);
        for (let ip = 0; ip < 4; ip++) this.inputs[`world${ip}`] = new wi(this.matrixKey, 16 * ip, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(pp, ip) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, pp, !0), ip && this.resources.vertexBufferCreated(this.attributesKey, ip, !0)
      }
    }
    class yi extends Wi {
      constructor(pp, ip, cp) {
        super(pp), this.mesh = ip, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Op = this.inputs;
        let op = 0;
        for (const {
            size: Sp
          }
          of cp) op += Sp;
        for (const {
            name: Sp,
            offset: xp,
            size: Lp,
            type: Yp
          }
          of cp) Op[Sp] = new wi(this.attributesKey, 4 * xp, 4 * op, Lp, !0, Yp);
        this.rowStride = op, pp.S_.set(ip, this);
        const Ip = ip.isVerticesDataPresent;
        ip.isVerticesDataPresent = (pp, cp) => pp in Op || Ip.call(ip, pp, cp)
      }
      attach(pp, ip) {
        this.matrices = pp, this.attributes = ip, this.bind(pp, ip), this.mirror(pp, pp.length, pp.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      U3(pp) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, pp ? 64 * pp : void 0)
      }
      B3() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(pp, ip) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * pp, 16 * ip)
      }
      attributeRows(pp, ip) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, pp * this.rowStride, ip * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(pp, ip, cp) {
        const Op = this.mesh._thinInstanceDataStorage;
        Op.matrixData = pp, Op.matrixBufferSize = ip, Op.worldMatrices = null, Op.instancesCount = cp
      }
    }
    class Ui extends Wi {
      constructor(pp, ip, cp) {
        var Op, op, Ip, Sp;
        super(pp), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.interleavedKinds) && void 0 !== Op ? Op : null, this.offsets = null !== (op = null === cp || void 0 === cp ? void 0 : cp.interleavedOffsets) && void 0 !== op ? op : [], this.rowStride = null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.interleavedRowStride) && void 0 !== Ip ? Ip : 0, null === (Sp = this.layout) || void 0 === Sp || Sp.forEach(((pp, ip) => {
          this.inputs[pp] = new wi(this.attributesKey, 4 * this.offsets[ip], 4 * this.rowStride, cp.strides[pp])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), pp.batchUploads.set(ip, this), ip.Kl.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(pp) {
        const ip = this.packedBatch;
        return ip.renderSelf ? 0 === pp ? this.packedSource : ip.instances[pp - 1] : ip.instances[pp]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(pp, ip, cp, Op) {
        const op = (ip.renderSelf ? 1 : 0) + ip.rows.length;
        if (this.frame = Op, this.count = op, this.packedSource = pp, this.packedBatch = ip, 0 === op) return;
        if (pp.getWorldMatrix(), 16 * op > this.matrices.length) {
          let pp = this.matrices.length / 16;
          for (; pp < op;) pp *= 2;
          this.matrices = new Float32Array(16 * pp), this.attributes &&= new Float32Array(pp * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Ip = 0;
        ip.renderSelf && this.packRow(Ip++, pp, ip.row, cp);
        for (let Sp = 0; Sp < ip.rows.length; Sp++) this.packRow(Ip++, ip.instances[Sp], ip.rows[Sp], cp);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * op), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, op * this.rowStride)
      }
      packRow(pp, ip, cp, Op) {
        const op = this.matrices;
        if (cp < 0) op.set(ip.getWorldMatrix().m, 16 * pp);
        else
          for (let Yp = 0; Yp < 16; Yp++) op[16 * pp + Yp] = Op[16 * cp + Yp];
        const Ip = this.attributes;
        if (!Ip) return;
        const Sp = ip.MJ,
          xp = this.layout;
        for (let Yp = 0; Yp < xp.length; Yp++) {
          var Lp;
          const ip = null !== (Lp = Sp[xp[Yp]]) && void 0 !== Lp ? Lp : 0,
            cp = pp * this.rowStride + this.offsets[Yp];
          ip.toArray ? ip.toArray(Ip, cp) : ip.copyToArray ? ip.copyToArray(Ip, cp) : Ip[cp] = ip
        }
      }
    }
    class wi {
      constructor(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = pp, this.byteOffset = ip, this.byteStride = cp, this.size = Op, this.instanced = op, this.type = Ip, this.normalized = Sp
      }
      getBuffer() {
        return this.key
      }
      getSize() {
        return this.size
      }
      getIsInstanced() {
        return this.instanced
      }
    }
    const vi = "CANVAS_ALPHA_ONE",
      ti = `override ${vi}: bool = false;`,
      Hi = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function di(pp, ip, cp) {
      var Op;
      let op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Ip = null !== (Op = ip._colorFormat) && void 0 !== Op ? Op : "bgra8unorm",
        Sp = op ? 15 : 0;
      return cp ? {
        ...pp,
        targets: [{
          format: Ip,
          blend: {
            color: cp,
            alpha: Hi
          },
          writeMask: Sp
        }]
      } : {
        ...pp,
        constants: {
          ...pp.constants,
          [vi]: 1
        },
        targets: [{
          format: Ip,
          writeMask: Sp
        }]
      }
    }

    function ei(pp, ip) {
      pp._renderables.push(ip)
    }

    function ui(pp) {
      return pp._device
    }

    function ji(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = pp._frameGraph) || void 0 === cp ? void 0 : cp._tasks) && void 0 !== ip ? ip : []
    }

    function ki(pp) {
      return pp._currentEncoder
    }

    function mi(pp) {
      return pp.createBindGroupLayout({
        label: "lite-scene-equivalent",
        entries: [{
          binding: 0,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      })
    }
    const Ri = "greater-equal",
      qi = 2e5,
      Mi = 1e5,
      Ci = new WeakMap;

    function Ei(pp, ip) {
      let cp = Ci.get(pp);
      if (!cp) {
        cp = {
          module: pp.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, Ci.set(pp, cp)
      }
      const Op = `${ip._colorFormat}|${ip._depthStencilFormat}|${ip._sampleCount}`;
      let op = cp.pipelines.get(Op);
      if (!op) {
        var Ip;
        const {
          module: Sp
        } = cp;
        op = pp.createRenderPipeline({
          label: `placeholder ${Op}`,
          layout: pp.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Sp,
            entryPoint: "v"
          },
          fragment: {
            module: Sp,
            entryPoint: "f",
            targets: [{
              format: null !== (Ip = ip._colorFormat) && void 0 !== Ip ? Ip : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: ip._depthStencilFormat ? {
            format: ip._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: ip._sampleCount
          }
        }), cp.pipelines.set(Op, op)
      }
      return op
    }

    function Xi(pp, ip, cp) {
      const Op = ip.eye,
        op = ip.viewMatrix;
      pp[0] = Op[0] + op[2] * cp, pp[1] = Op[1] + op[6] * cp, pp[2] = Op[2] + op[10] * cp
    }
    var li = cp(38178),
      Qi = cp(41860),
      Ji = cp(37433);
    const Bi = Math.PI,
      Ni = Bi / 1.95,
      Ti = [5e-4 / 94, 125e-7, 5e-4 / 18],
      fi = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((pp => {
        let [ip, cp] = pp;
        return .434 * Bi * Math.pow(2 * Bi / ip, 2) * cp
      }));

    function bi(pp, ip, cp) {
      const {
        up: Op,
        mieDirectionalG: op
      } = pp, Ip = 1 - Fi(1 - Math.exp(ip[1] / 45e4), 0, 1), Sp = pp.rayleigh - (1 - Ip), xp = Math.hypot(ip[0], ip[1], ip[2]), Lp = xp > 0 ? 1 / xp : 0, Yp = cp.sunDir;
      for (let Wp = 0; Wp < 3; Wp++) Yp[Wp] = ip[Wp] * Lp;
      const Dp = Yp[0] * Op[0] + Yp[1] * Op[1] + Yp[2] * Op[2],
        Ap = 1e3 * Math.max(0, 1 - Math.exp(-(Ni - Math.acos(Fi(Dp, -1, 1))) / 1.5));
      cp.sunE = Ap;
      const Pp = .2 * pp.turbidity * 1e-17 * pp.mieCoefficient;
      for (let Wp = 0; Wp < 3; Wp++) {
        const pp = Ti[Wp] * Sp,
          ip = fi[Wp] * Pp,
          Op = Ap / (pp + ip);
        cp.inScatterR[Wp] = pp * Op, cp.inScatterM[Wp] = ip * Op, cp.extinctionBeta[Wp] = 8400 * pp + 1250 * ip
      }
      return cp.sunsetMix = Fi(Math.pow(1 - Dp, 5), 0, 1), cp.sunDiscE = 19e3 * Ap, cp.mieScale = (1 - op * op) / (4 * Bi), cp.mieBase = 1 + op * op, cp.mieSlope = 2 * op, cp
    }
    const ai = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const ni = 1 / function(pp) {
      const {
        A: ip,
        B: cp,
        C: Op,
        D: op,
        E: Ip,
        F: Sp
      } = ai;
      return (pp * (ip * pp + Op * cp) + op * Ip) / (pp * (ip * pp + cp) + op * Sp) - Ip / Sp
    }(1e3);

    function Fi(pp, ip, cp) {
      return Math.min(Math.max(pp, ip), cp)
    }
    const gi = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Gi(pp, ip) {
      const cp = new Map(ip),
        Op = [],
        op = [],
        Ip = () => 0 === op.length || op[op.length - 1].active;
      let Sp = null;
      const xp = () => {
        const pp = [...cp].filter((pp => {
            let [, ip] = pp;
            return !0 !== ip
          })),
          ip = pp.map((pp => {
            let [ip] = pp;
            return ip
          })).join("|");
        Sp = pp.length ? new RegExp(`\\b(${ip})\\b`, "g") : null
      };
      xp();
      for (const Lp of pp.split("\n")) {
        const pp = gi.exec(Lp);
        if (!pp) {
          Ip() && Op.push(Sp ? ri(Lp, Sp, cp) : Lp);
          continue
        }
        const ip = pp[1],
          Yp = pp[2].trim();
        if ("ifdef" === ip || "ifndef" === ip || "if" === ip) {
          const pp = Ip(),
            Op = "if" === ip ? Zi(Yp, cp) : cp.has(Yp) === ("ifdef" === ip);
          op.push({
            active: pp && Op,
            parentActive: pp,
            taken: Op
          })
        } else if ("elif" === ip || "else" === ip) {
          const pp = op[op.length - 1];
          if (!pp) throw new Error(`#${ip} without #if`);
          const Op = !pp.taken && ("else" === ip || Zi(Yp, cp));
          pp.active = pp.parentActive && Op, pp.taken = pp.taken || Op
        } else if ("endif" === ip) {
          if (!op.pop()) throw new Error("#endif without #if")
        } else if (Ip()) {
          const [pp, ...Op] = Yp.split(/\s+/);
          "undef" === ip ? cp.delete(pp) : cp.set(pp, !Op.length || Op.join(" ")), xp()
        }
      }
      if (op.length) throw new Error("Unterminated #if");
      return Op.join("\n")
    }

    function ri(pp, ip, cp) {
      return pp.replace(ip, (pp => {
        const ip = cp.get(pp);
        return "string" === typeof ip ? ip : pp
      }))
    }

    function Zi(pp, ip) {
      var cp;
      const Op = null !== (cp = pp.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== cp ? cp : [];
      let op = 0;
      const Ip = () => Op[op],
        Sp = () => Op[op++],
        xp = pp => {
          const cp = /^\d/.test(pp) ? pp : ip.get(pp);
          return "string" === typeof cp ? parseInt(cp) : Number.NaN
        },
        Lp = () => {
          const pp = Sp();
          if ("!" === pp) return !Lp();
          if ("(" === pp) {
            const pp = Dp();
            return Sp(), pp
          }
          if ("defined" === pp) {
            const pp = "(" === Ip();
            pp && Sp();
            const cp = Sp();
            return pp && Sp(), ip.has(cp)
          }
          const cp = Ip();
          if ("==" === cp || "!=" === cp || ">" === cp || "<" === cp || ">=" === cp || "<=" === cp) {
            Sp();
            const ip = xp(pp),
              Op = xp(Sp());
            if (Number.isNaN(ip) || Number.isNaN(Op)) return !1;
            switch (cp) {
              case "==":
                return ip === Op;
              case "!=":
                return ip !== Op;
              case ">":
                return ip > Op;
              case "<":
                return ip < Op;
              case ">=":
                return ip >= Op;
              default:
                return ip <= Op
            }
          }
          return ip.has(pp)
        },
        Yp = () => {
          let pp = Lp();
          for (;
            "&&" === Ip();) {
            Sp();
            const ip = Lp();
            pp = pp && ip
          }
          return pp
        },
        Dp = () => {
          let pp = Yp();
          for (;
            "||" === Ip();) {
            Sp();
            const ip = Yp();
            pp = pp || ip
          }
          return pp
        },
        Ap = Dp();
      if (op !== Op.length) throw new Error(`Cannot evaluate #if ${pp}`);
      return Ap
    }
    var zi = cp(37429),
      si = cp(37745),
      Ki = cp(37747),
      Vi = cp(40892),
      pc = cp(38982);
    const ic = 32,
      cc = [10, 3, 10],
      Oc = [21, 7, 21],
      oc = Oc[0] * Oc[1] * Oc[2],
      Ic = 0,
      Sc = 1,
      xc = 2,
      Lc = 3,
      Yc = 64,
      Dc = 512,
      Ac = 4 * oc,
      Pc = 1536,
      Wc = Ac + oc * Pc,
      yc = 1073741824,
      Uc = Wc + 1;

    function wc(pp, ip) {
      const cp = pp % ip;
      return cp < 0 ? cp + ip : cp
    }

    function vc(pp, ip, cp) {
      return Op = wc(pp, Oc[0]), op = wc(ip, Oc[1]), Ip = wc(cp, Oc[2]), Op + Oc[0] * (op + Oc[1] * Ip);
      var Op, op, Ip
    }

    function tc(pp, ip, cp) {
      return pp + 8 * (ip + 8 * cp)
    }

    function Hc(pp, ip, cp) {
      return pp + 4 * (ip + 4 * cp)
    }
    const dc = 65535,
      ec = 0,
      uc = 1,
      jc = 2,
      kc = 3;

    function mc(pp) {
      return Math.ceil(pp * pp / 32)
    }
    const Rc = 8192,
      qc = 1 << 18,
      Mc = 65536,
      Cc = 294912,
      Ec = 128,
      Xc = 4096,
      lc = 16,
      Qc = 16385,
      Jc = 81921,
      Bc = 147457,
      Nc = 4194304;
    const Tc = [0, 0, 0],
      fc = [0, 0, 0];

    function bc(pp, ip, cp, Op) {
      ! function(pp, ip, cp) {
        const [Op, op, Ip] = [pp[0], pp[1], pp[2]];
        let Sp, xp, Lp;
        Math.abs(op) < .99 ? (Sp = Ip, xp = 0, Lp = -Op) : (Sp = -op, xp = Op, Lp = 0);
        const Yp = Math.hypot(Sp, xp, Lp);
        ip[0] = Sp / Yp, ip[1] = xp / Yp, ip[2] = Lp / Yp, cp[0] = op * ip[2] - Ip * ip[1], cp[1] = Ip * ip[0] - Op * ip[2], cp[2] = Op * ip[1] - op * ip[0]
      }(Op, Tc, fc);
      const op = 1 / 32;
      for (const [Ip, Sp] of [
          [0, Tc],
          [4, fc]
        ]) {
        for (let cp = 0; cp < 3; cp++) pp[ip + Ip + cp] = Sp[cp] * op;
        pp[ip + Ip + 3] = -(Sp[0] * cp[0] + Sp[1] * cp[1] + Sp[2] * cp[2]) * op
      }
    }
    class hc {
      constructor() {
        this.words = new Uint32Array(Bc), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      mW(pp, ip) {
        this.parts = 0, this.refs = 0, this.view = pp, this.viewAt = ip;
        const cp = pp[ip + 1] * pp[ip + 6] - pp[ip + 2] * pp[ip + 5],
          Op = pp[ip + 2] * pp[ip + 4] - pp[ip] * pp[ip + 6],
          op = pp[ip] * pp[ip + 5] - pp[ip + 1] * pp[ip + 4],
          Ip = Math.hypot(cp, Op, op) || 1;
        this.light[0] = cp / Ip, this.light[1] = Op / Ip, this.light[2] = op / Ip
      }
      add(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= Xc || ! function(pp, ip, cp) {
            const Op = pp[ip],
              op = pp[ip + 1],
              Ip = pp[ip + 2],
              Sp = pp[ip + 3],
              xp = pp[ip + 4],
              Lp = pp[ip + 5],
              Yp = pp[ip + 6],
              Dp = pp[ip + 7],
              Ap = pp[ip + 8],
              Pp = pp[ip + 9],
              Wp = pp[ip + 10],
              yp = pp[ip + 11],
              Up = pp[ip + 12],
              wp = pp[ip + 13],
              vp = pp[ip + 14],
              tp = pp[ip + 15],
              Hp = Op * Lp - op * xp,
              dp = Op * Yp - Ip * xp,
              ep = Op * Dp - Sp * xp,
              jp = op * Yp - Ip * Lp,
              kp = op * Dp - Sp * Lp,
              mp = Ip * Dp - Sp * Yp,
              Rp = Ap * wp - Pp * Up,
              qp = Ap * vp - Wp * Up,
              Mp = Ap * tp - yp * Up,
              Cp = Pp * vp - Wp * wp,
              Ep = Pp * tp - yp * wp,
              Xp = Wp * tp - yp * vp,
              lp = Hp * Xp - dp * Ep + ep * Cp + jp * Mp - kp * qp + mp * Rp;
            if (!(Math.abs(lp) > 1e-12)) return !1;
            const Qp = 1 / lp;
            return cp[0] = (Lp * Xp - Yp * Ep + Dp * Cp) * Qp, cp[1] = (Ip * Ep - op * Xp - Sp * Cp) * Qp, cp[2] = (wp * mp - vp * kp + tp * jp) * Qp, cp[3] = (Wp * kp - Pp * mp - yp * jp) * Qp, cp[4] = (Yp * Mp - xp * Xp - Dp * qp) * Qp, cp[5] = (Op * Xp - Ip * Mp + Sp * qp) * Qp, cp[6] = (vp * ep - Up * mp - tp * dp) * Qp, cp[7] = (Ap * mp - Wp * ep + yp * dp) * Qp, cp[8] = (xp * Ep - Lp * Mp + Dp * Rp) * Qp, cp[9] = (op * Mp - Op * Ep - Sp * Rp) * Qp, cp[10] = (Up * kp - wp * ep + tp * Hp) * Qp, cp[11] = (Pp * ep - Ap * kp - yp * Hp) * Qp, cp[12] = (Lp * qp - xp * Cp - Yp * Rp) * Qp, cp[13] = (Op * Cp - op * qp + Ip * Rp) * Qp, cp[14] = (wp * dp - Up * jp - vp * Hp) * Qp, cp[15] = (Ap * jp - Pp * dp + Wp * Hp) * Qp, !0
          }(ip, cp, this.inverse)) return;
        const {
          view: Op,
          viewAt: op
        } = this, Ip = cp;
        let Sp = 1 / 0,
          xp = 1 / 0,
          Lp = -1 / 0,
          Yp = -1 / 0,
          Dp = -1 / 0;
        const [Ap, Pp, Wp] = this.light;
        for (let ep = 0; ep < 8; ep++) {
          const cp = 1 & ep ? pp.hi[0] : pp.lo[0],
            yp = 2 & ep ? pp.hi[1] : pp.lo[1],
            Up = 4 & ep ? pp.hi[2] : pp.lo[2],
            wp = cp * ip[Ip] + yp * ip[Ip + 4] + Up * ip[Ip + 8] + ip[Ip + 12],
            vp = cp * ip[Ip + 1] + yp * ip[Ip + 5] + Up * ip[Ip + 9] + ip[Ip + 13],
            tp = cp * ip[Ip + 2] + yp * ip[Ip + 6] + Up * ip[Ip + 10] + ip[Ip + 14],
            Hp = Op[op] * wp + Op[op + 1] * vp + Op[op + 2] * tp + Op[op + 3],
            dp = Op[op + 4] * wp + Op[op + 5] * vp + Op[op + 6] * tp + Op[op + 7];
          Sp = Math.min(Sp, Hp), xp = Math.min(xp, dp), Lp = Math.max(Lp, Hp), Yp = Math.max(Yp, dp), Dp = Math.max(Dp, Ap * wp + Pp * vp + Wp * tp)
        }
        if (Lp < -1 || Yp < -1 || Sp >= 1 || xp >= 1) return;
        const yp = this.parts++,
          Up = this.rects;
        Up[4 * yp] = ac(Sp), Up[4 * yp + 1] = ac(xp), Up[4 * yp + 2] = ac(Lp), Up[4 * yp + 3] = ac(Yp);
        const wp = this.inverse,
          {
            cell: vp,
            dims: tp,
            lo: Hp
          } = pp,
          dp = Jc + yp * lc;
        for (let ep = 0; ep < 3; ep++) this.floats[dp + 4 * ep] = wp[ep] / vp, this.floats[dp + 4 * ep + 1] = wp[4 + ep] / vp, this.floats[dp + 4 * ep + 2] = wp[8 + ep] / vp, this.floats[dp + 4 * ep + 3] = (wp[12 + ep] - Hp[ep]) / vp;
        this.words[dp + 12] = pp.at, this.floats[dp + 13] = Dp + .001 * (1 + Math.abs(Dp)), this.words[dp + 14] = tp[0] | tp[1] << 8 | tp[2] << 16
      }
      finish() {
        const pp = Ec,
          {
            counts: ip,
            rects: cp,
            words: Op
          } = this;
        ip.fill(0);
        let op = 0,
          Ip = 0;
        for (; Ip < this.parts; Ip++) {
          const Op = 4 * Ip,
            Sp = (cp[Op + 2] - cp[Op] + 1) * (cp[Op + 3] - cp[Op + 1] + 1);
          if (op + Sp > 65536) break;
          op += Sp;
          for (let op = cp[Op + 1]; op <= cp[Op + 3]; op++)
            for (let Ip = cp[Op]; Ip <= cp[Op + 2]; Ip++) ip[op * pp + Ip]++
        }
        let Sp = 0;
        for (let Lp = 0; Lp < 16384; Lp++) Op[Lp] = Sp, Sp += ip[Lp], ip[Lp] = Op[Lp];
        Op[16384] = Sp;
        for (let Lp = 0; Lp < Ip; Lp++) {
          const op = 4 * Lp;
          for (let Ip = cp[op + 1]; Ip <= cp[op + 3]; Ip++)
            for (let Sp = cp[op]; Sp <= cp[op + 2]; Sp++) Op[Qc + ip[Ip * pp + Sp]++] = Lp
        }
        const xp = this.floats;
        for (let Lp = 0; Lp < 16384; Lp++) {
          const pp = Qc + Op[Lp],
            ip = pp + Math.min(Op[Lp + 1] - Op[Lp], 64);
          for (let cp = pp + 1; cp < ip; cp++) {
            const ip = Op[cp],
              op = xp[81934 + ip * lc];
            let Ip = cp - 1;
            for (; Ip >= pp && xp[81934 + Op[Ip] * lc] < op; Ip--) Op[Ip + 1] = Op[Ip];
            Op[Ip + 1] = ip
          }
        }
        this.refs = op
      }
    }

    function ac(pp) {
      return Math.min(127, Math.max(0, Math.floor((.5 * pp + .5) * Ec)))
    }

    function nc(pp, ip, cp, Op, op) {
      for (let Ip = 0; Ip < 4; Ip++)
        for (let Sp = 0; Sp < 4; Sp++) op[4 * Ip + Sp] = pp[ip + 4 * Ip] * cp[Op + Sp] + pp[ip + 4 * Ip + 1] * cp[Op + 4 + Sp] + pp[ip + 4 * Ip + 2] * cp[Op + 8 + Sp] + pp[ip + 4 * Ip + 3] * cp[Op + 12 + Sp]
    }

    function Fc(pp, ip, cp, Op, op) {
      const Ip = pp[0] - ip,
        Sp = pp[1] - cp,
        xp = pp[2] - Op,
        Lp = pp[3] - ip,
        Yp = pp[4] - cp,
        Dp = pp[5] - Op,
        Ap = pp[6] - ip,
        Pp = pp[7] - cp,
        Wp = pp[8] - Op;
      if (Math.min(Ip, Lp, Ap) > op || Math.max(Ip, Lp, Ap) < -op) return !1;
      if (Math.min(Sp, Yp, Pp) > op || Math.max(Sp, Yp, Pp) < -op) return !1;
      if (Math.min(xp, Dp, Wp) > op || Math.max(xp, Dp, Wp) < -op) return !1;
      const yp = Lp - Ip,
        Up = Yp - Sp,
        wp = Dp - xp,
        vp = Ap - Lp,
        tp = Pp - Yp,
        Hp = Wp - Dp,
        dp = Up * Hp - wp * tp,
        ep = wp * vp - yp * Hp,
        jp = yp * tp - Up * vp;
      if (Math.abs(dp * Ip + ep * Sp + jp * xp) > op * (Math.abs(dp) + Math.abs(ep) + Math.abs(jp))) return !1;
      const kp = [yp, Up, wp, vp, tp, Hp, Ip - Ap, Sp - Pp, xp - Wp];
      for (let mp = 0; mp < 3; mp++) {
        const pp = kp[3 * mp],
          ip = kp[3 * mp + 1],
          cp = kp[3 * mp + 2];
        for (let Op = 0; Op < 3; Op++) {
          const yp = 0 === Op ? 0 : 1 === Op ? cp : -ip,
            Up = 0 === Op ? -cp : 1 === Op ? 0 : pp,
            wp = 0 === Op ? ip : 1 === Op ? -pp : 0,
            vp = yp * Ip + Up * Sp + wp * xp,
            tp = yp * Lp + Up * Yp + wp * Dp,
            Hp = yp * Ap + Up * Pp + wp * Wp,
            dp = op * (Math.abs(yp) + Math.abs(Up) + Math.abs(wp));
          if (Math.min(vp, tp, Hp) > dp || Math.max(vp, tp, Hp) < -dp) return !1
        }
      }
      return !0
    }
    const gc = new Float32Array(1);
    new Uint32Array(gc.buffer);
    var Gc = cp(38991);

    function rc(pp) {
      const [ip, cp, Op] = Gc.n;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${pp.group}) @binding(${pp.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${ip-1}, ${cp-1}, ${Op-1});\n}\n`
    }

    function Zc(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [op, Ip, Sp] = Oc, [xp, Lp, Yp] = cc, Dp = Math.log2(ic), Ap = Op ? "var<private> bloxdSpCrossed: bool;\n" : "", Pp = Op ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${pp.group}) @binding(${pp.hP}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${pp.group}) @binding(${pp.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${cp?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Ap}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${uc}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${jc}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${cp?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${kc}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${op}, ${Ip}, ${Sp});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${op} * (s.y + ${Ip} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${xp}, ${Lp}, ${Yp}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Dp}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Lc}u) {\n\t\treturn named && state == ${xc}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${Ac}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Wc}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${ip?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${ip?`\t\tif (exits && step > 0 && step % ${Kc} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Dp}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Ic}u || kind == ${Sc}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${xc}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${Ac}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Pp}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const zc = {
      group: 0,
      uniform: 0,
      hP: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function sc() {
      const pp = zc;
      return `${rc(pp)}${Zc(pp,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Gc.b}>,\n}\n@group(${pp.group}) @binding(${pp.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${pp.group}) @binding(${pp.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Gc.i})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Gc.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Gc.c}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Kc = 2;
    const Vc = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function pO(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Op = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ip.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        op = "trace" === cp || "lit" === cp,
        Ip = "maskEdge" === cp ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Sp = op ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ip.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${ip.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===cp?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Ip};\n`;
      return `${Op}${pp.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${op?function(){const[pp,ip,cp]=Gc.n;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${pp}.0, ${ip}.0, ${cp}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Sp}}\n`:""}${pp.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${ip.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${ip.renderOffset});\n}\n`:""}`
    }
    const iO = "bloxdSpOwnTexture";

    function cO(pp) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${pp.texture}) - 1u)))`
    }
    const OO = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${li.f.map((pp=>{let[ip,cp]=pp;return`\tbloxdSpOut.${ip} = (bloxdSpWord & ${cp}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function oO(pp) {
      return `bloxdSpFlags(${pp})`
    }
    const IO = `${Vi.l}.eyePosition`;

    function SO(pp, ip, cp, Op, op) {
      const Ip = pp.indexOf(ip);
      if (Ip < 0 || pp.indexOf(ip, Ip + 1) >= 0) throw new Error(`Lite's ${op} program changed at the shader pack ${Op} hook: ${Ip<0?"no":"more than one"} anchor (lite/${op}ShaderPack.ts)`);
      return pp.slice(0, Ip) + cp + pp.slice(Ip + ip.length)
    }

    function xO(pp) {
      return pp.sunShadow || pp.airShadow
    }

    function LO(pp, ip) {
      return ip && xO(pp)
    }
    const YO = {
      group: Vi.g,
      ...Vi.r
    };

    function DO(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!xO(pp)) return "";
      if (ip) {
        const ip = YO,
          op = "trace" === cp || "lit" === cp;
        let Ip = "";
        pp.sunShadow && (Ip = op ? `${Zc(ip,!0,"lit"===cp)}${Op=ip,`@group(${Op.group}) @binding(${Op.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Op.group}) @binding(${Op.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(pp, ip, cp) {
          const Op = `@group(${pp}) @binding(${ip}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return cp ? `${Op}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Vc}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((pp=>`\t{\n\t\tlet o = vec2i(${pp});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Op
        }(ip.group, Vi.t, "maskEdge" === cp));
        const Sp = {
          shadowDirection: `${Vi.l}.shadowDirection`,
          renderOffset: `${Vi.l}.renderOffset`,
          eyePosition: `${Vi.l}.eyePosition`
        };
        return `${rc(ip)}${Ip}${function(pp){const[ip,cp,Op]=Gc.n;return`@group(${pp.group}) @binding(${pp.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${pp.group}) @binding(${pp.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ip}.0, ${cp}.0, ${Op}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(ip)}${pO(pp,Sp,cp)}`
      }
      var Op;
      return `${pp.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${pp.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function AO(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!ip) return "";
      const Ip = (Sp = "fragmentInputs.vPositionW", xp = pp.sunShadow ? {
        normal: cp,
        flags: Op
      } : null, `\n\tbloxdSpShadowPosition = ${Sp};\n${xp?`\tbloxdSpShadowNormal = normalize(${xp.normal});\n\tbloxdSpShadowEmissive = (${xp.flags} & ${li.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${xp.flags} & ${li.h}u) != 0u;\n`:""}`);
      var Sp, xp;
      return pp.sunShadow && ("mask" === op || "maskEdge" === op) ? `${Ip}${Lp="fragmentInputs.position",Yp="maskEdge"===op,`\n\tbloxdSpShadowPixel = vec2i(${Lp}.xy);\n${Yp?`\tbloxdSpShadowZ = ${Lp}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Lp}.z), dpdy(${Lp}.z));\n`:""}`}` : Ip;
      var Lp, Yp
    }
    const PO = "bloxdSpTextureRotation",
      WO = "bloxdSpTextureLayers",
      yO = `@group(${Vi.g}) @binding(${Vi.x}) var<storage, read> ${WO}: array<u32>;\n`;

    function UO(pp) {
      return `\tvertexOutputs.vPackTexture = ${WO}[min(u32(${pp}), arrayLength(&${WO}) - 1u)];\n`
    }

    function wO(pp) {
      return void 0 !== pp.uv
    }

    function vO(pp) {
      if (!pp) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (wO(pp)) return function(pp) {
        const {
          texture: ip,
          cells: cp,
          layers: Op
        } = pp, op = `textureDimensions(${ip}, bloxdSpLevel)`, Ip = cp ? `max(vec2u(vec2f(${op}) / ${cp}), vec2u(1u))` : op, Sp = cp ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Ip};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${cp}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${cp}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${ip}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${op} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Ip};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${ip}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let xp;
        if (cp)
          if (1 === Op.length) xp = `\treturn bloxdSpOwnTexel(${Op[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const pp = Op.length - 1;
            xp = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Op[pp]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let ip = pp - 1; ip >= 0; ip--) xp += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Op[ip]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            xp += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else xp = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${pp.id?`var<private> ${iO}: u32;\n`:""}${Sp}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${cO(pp)};\n\treturn ${Ip};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${pp.id?iO:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${cO(pp)};\n${xp}}\n`
      }(pp);
      const ip = pp,
        cp = pp => {
          const cp = pp > 0 ? `bloxdSpLayer - ${ip.layers*pp}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${pp}, ${ip.sampler}, bloxdSpTurned, ${cp}, round(bloxdSpMipLevel));`
        };
      let Op = "";
      for (let Ip = 0; Ip < ip.count - 1; Ip++) Op += `\tif (bloxdSpLayer < ${ip.layers*(Ip+1)}u) {\n\t\t${cp(Ip)}\n\t}\n`;
      const op = ip.frame ? `${ip.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${PO}: u32;\n${yO}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${PO} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${PO} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${PO} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${op}${Op}\t${cp(ip.count-1)}\n}\n`
    }

    function tO(pp, ip, cp) {
      return !!pp.surface && "bloxdDefaultSurface" !== pp.surface && function(pp, ip) {
        return "liquid" === ip || !pp
      }(ip, cp)
    }

    function HO(pp, ip) {
      return pp.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ip.vertexLocalPosition}, ${oO(ip.vertexFlags)});\n\t\tlet bloxdSpVertex = ${pp.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function dO(pp, ip, cp, Op, op) {
      if (!pp.surface) return "";
      const Ip = (pp, ip) => `\n\tlet bloxdSpTexelUV = ${pp};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${ip}) - 1u));`;
      let Sp = "",
        xp = "0u, 0u, vec2f(0.0), 0.0";
      const Lp = Op && wO(Op) ? Op : null,
        Yp = Op && !wO(Op) ? Op : null;
      if (Lp) {
        Sp = `${Lp.id?`\n\tlet bloxdSpTexture = ${Lp.id};\n\t${iO} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Lp.uv};${Ip(function(pp,ip){var cp;return`${null!==(cp=pp.levelUv)&&void 0!==cp?cp:pp.cells?`${ip} / ${pp.cells}`:ip} * vec2f(textureDimensions(${pp.texture}))`}(Lp,"bloxdSpUv"),Lp.texture)}`, xp = (Lp.id ? `${iO}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Yp && (Sp = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${PO} = bloxdSpTexture >> 16u;${Ip(`fragmentInputs.vMainUV1 * ${(0,zi.hb)(Yp.width)}`,"textureAtlas0")}`, xp = `bloxdSpTexture & 0xffffu, ${PO}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Dp = op.overlayColour,
        Ap = Dp ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Pp = "bloxdDefaultSurface" !== pp.surface || Dp ? `\n\tbaseColor = vec4f(${Ap}, baseColor.a);` : "",
        Wp = tO(pp, ip, cp) ? `\n\t${op.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Sp}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${op.alpha}, ${op.enchantTier}, ${op.enchantColour}, ${op.enchantSpeed}, ${null!==Dp&&void 0!==Dp?Dp:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${op.normal}, ${op.localPosition}, ${oO(op.flags)}, ${xp});\n\tlet bloxdSpSurface = ${pp.surface}(bloxdSpSurfaceIn);${Pp}${Wp}\n`
    }
    const eO = "bloxdSpLightIn";

    function uO(pp, ip, cp, Op) {
      if (!pp.light) return "";
      const op = ip ? `${zi.l}.rgb, ${zi.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${zi.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Ip,
          diffuse: Sp,
          emissive: xp,
          ambient: Lp,
          fogColour: Yp,
          fogAlpha: Dp,
          normal: Ap
        } = Op;
      return `\tvar ${eO} = BloxdLightIn(vec3f(0.0), ${cp?Ip:"0.0"}, ${Sp}, ${xp}, ${Lp}, ${op}, ${Yp}, ${Dp}, fragmentInputs.vPositionW, ${Ap}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${eO}.litColour = bloxdLitColour(bloxdSpSurface, ${eO});\n`
    }

    function jO(pp) {
      return pp.light ? `\n\t{\n\t\tlet bloxdSpLight = ${pp.light}(bloxdSpSurface, ${eO});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const kO = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      mO = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      RO = "\treturn color;\n}",
      qO = {
        vertexFlags: "vertexOutputs.vBlockFlags",
        vertexLocalPosition: "vec3f(0.0)",
        flags: "fragmentInputs.vBlockFlags",
        normal: "normalize(fragmentInputs.vNormalW)",
        alpha: "alpha",
        alphaOut: "alpha",
        lambert: "fragmentInputs.vTerrainLambert",
        diffuse: "material.vDiffuseColor.rgb",
        emissive: "material.emissiveAndLevel.xyz",
        ambient: "ambient",
        fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
        fogAlpha: "1.0 - fog",
        enchantTier: "0u",
        enchantColour: "vec4f(0.0)",
        enchantSpeed: "0.0",
        localPosition: "vec3f(0.0)",
        overlayColour: null
      };
    const MO = Object.freeze({});

    function CO(pp) {
      var ip;
      return !(null === (ip = (0, pc.g)(pp)) || void 0 === ip || !ip.sceneDepth)
    }

    function EO(pp) {
      const ip = (0, pc.g)(pp);
      return !!ip && tO(ip.hooks, ip.strict, ip.program)
    }

    function XO(pp, ip, cp, Op) {
      return SO(pp, ip, cp, Op, "terrain")
    }

    function lO(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Ip = function(pp) {
          return (0, pc.d)(pp.packVariant, pp.liquid ? "liquid" : "terrain")
        }(pp),
        {
          hooks: Sp
        } = Ip,
        xp = LO(Ip, Op),
        Lp = "edge" === op ? "maskEdge" : "plain" === op ? "mask" : "trace",
        Yp = HO(Sp, qO);
      Yp && (ip = XO(ip, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Yp}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Dp = "atlas" === pp.texture ? {
          count: pp.atlasCount,
          layers: pp.atlasLayers,
          width: pp.M6,
          sampler: "atlasSampler",
          frame: pp.animated ? cp : null
        } : null,
        Ap = `${Ip.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${AO(Ip,xp,qO.normal,qO.flags,Lp)}${dO(Sp,Ip.strict,Ip.program,Dp,qO)}`;
      Ap && (ip = XO(ip, kO, `${kO.slice(0,-1)}${Ap}`, "surface"));
      const Pp = jO(Sp);
      return Pp && (ip = XO(ip, mO, `${uO(Sp,pp.lighting,pp.dirLightCount>0,qO)}${mO}`, "light input"), ip = XO(ip, RO, `${Pp.slice(1)}${RO}`, "light")), `${(0,Vi.C)()}${Ip.sceneDepth?`@group(${Vi.g}) @binding(${Vi.o}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${IO};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${DO(Ip,xp,Lp)}${vO(Dp)}${OO}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Ip.code}${ip}`
    }
    const QO = jp.b.WGSL;

    function JO(pp) {
      return void 0 !== pp.packVariant
    }
    const BO = {
        lop: 0,
        Qop: 4,
        Jop: 8,
        Bop: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      NO = BO.aoLevels + 4,
      TO = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      fO = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      bO = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      hO = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      aO = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      nO = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      FO = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      gO = 0,
      GO = 3,
      rO = 4,
      ZO = 5,
      zO = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${si.b}, ${si.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${si.b}, ${si.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      sO = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((pp=>Ki.e>>pp&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const KO = {
      LP: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: pp => `animDataPerTex[${pp}]`
    };

    function VO(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KO;
      return `\n\tlet atlasIdxIn = ${pp};\n\tlet animTick = ${cp.LP};\n\tlet animTickStride = ${cp.stride};\n\tlet numAnimTextures = ${cp.count};\n\t${(0,kp.d)(jp.b.WGSL,cp.perTexture)}\n\t${ip}animLayer;\n`
    }

    function po(pp) {
      const ip = (ip, cp) => {
        const Op = ip > 0 ? `fragmentInputs.texAtlasIndex - ${pp.atlasLayers.toFixed(1)} * ${ip.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${cp?"textureSampleLevel":"textureSample"}(textureAtlas${ip}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Op}))${cp?", atlasLod":""})`
      };
      if (1 === pp.atlasCount) return `baseColor = ${ip(0,!1)};`;
      let cp = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,zi.hb)(pp.M6)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Op = 0; Op < pp.atlasCount; Op++) {
        const op = pp.atlasLayers * (Op + 1) - .5;
        cp += `${Op>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,zi.hb)(op)}) {\n\t\tbaseColor = ${ip(Op,!0)};\n\t}`
      }
      return cp
    }

    function io(pp) {
      return `terrain-${pp.texture}${"atlas"===pp.texture?pp.atlasCount:""}${pp.animated?"-anim":""}${pp.alphaTest?"-test":""}${pp.lighting?"-lit":""}-dir${pp.dirLightCount}${pp.packed?"-packed":""}${JO(pp)?`-sp${pp.packVariant}`:""}${pp.liquid?"-liquid":""}${pp.resting?"-rest":""}`
    }

    function co(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Op = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const cp = "none" !== pp.texture,
          Op = "atlas" === pp.texture,
          op = pp.dirLightCount > 0,
          Ip = JO(pp);
        if (pp.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${pp.dirLightCount}`);
        let Sp = 1,
          xp = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Op) {
          pp.animated && (xp += `@group(2) @binding(${Sp++}) var<storage, read> animDataPerTex: array<f32>;\n`), xp += `@group(2) @binding(${Sp++}) var atlasSampler: sampler;\n`;
          for (let ip = 0; ip < pp.atlasCount; ip++) xp += `@group(2) @binding(${Sp++}) var textureAtlas${ip}: texture_2d_array<f32>;\n`
        } else "single" === pp.texture && (xp += `@group(2) @binding(${Sp++}) var diffuseSamplerSampler: sampler;\n`, xp += `@group(2) @binding(${Sp++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Lp = function(pp) {
            const ip = FO,
              cp = "none" !== pp.texture,
              Op = "atlas" === pp.texture,
              op = JO(pp);
            return pp.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${cp?"uv: vec2f,":""}\n\t${Op?"texAtlasIndices: f32,":""}\n\t${pp.lighting?"aPackedLightLevels: f32,":""}\n\t${op?"blockFlagWords: vec2u,":""}\n}\n${zO}\n${sO}\n${"single"===pp.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${cp?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===pp.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Op?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${pp.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${op?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${ip.position}) position: vec3f,\n\t@location(${ip.normal}) normal: vec4f,\n\t@location(${ip.color}) color: vec4f,\n\t${cp?`@location(${ip.uv}) uv: vec2f,`:""}\n\t${pp.lighting?`@location(${ip.packedLight}) aPackedLightLevels: f32,`:""}\n\t${op?`@location(${ip.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(pp),
          Yp = `\n${hO}\n${fO}\n${bO}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${xp}\n${ti}\n${Lp.declarations}\nstruct Varyings {\n\t${"none"===ip?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${pp.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${op?"@location(5) vTerrainLambert: f32,":""}\n\t${cp?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Op?"@location(7) texAtlasIndex: f32,":""}\n\t${pp.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Ip?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Ip&&Op?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${pp.resting?"":(0,zi.q)(QO)}\n${nO}\n\n@vertex\nfn mainVertex(${Lp.parameter}) -> Varyings {\n\t${Lp.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Ip?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${li.d.placed}u;`:""}\n\t${Ip&&Op?UO("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${pp.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${cp?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Op?function(pp){return pp?VO("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(pp.animated):""}\n\t${"single"===pp.texture&&pp.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,zi.V)(QO)}\n\t${(0,zi.A)(QO,pp.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${pp.resting?"":aO}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Op?po(pp):""}\n\t${"single"===pp.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${cp?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${pp.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${op?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${vi}));\n\t${JO(pp)?(0,zi.fb)(jp.b.WGSL):(0,zi.P)(QO)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Dp = new Set;
        pp.lighting && Dp.add("BLOXD_LIGHTING");
        op && Dp.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Gi(Yp, new Map([...Dp].map((pp => [pp, !0]))))
      }(pp, cp);
      if (!JO(pp)) return Op;
      const op = lO(pp, Op, VO, ip, cp);
      return "none" === cp ? op : `${op}${function(pp){const ip="none"!==pp.texture&&pp.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${pp.resting?"":aO}\n\t${pp.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ip&&"atlas"===pp.texture?po(pp):""}\n\t${ip&&"single"===pp.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ip?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${li.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(pp)}`
    }
    const Oo = new Map([
      ["float", {
        wgsl: "f32",
        align: 1,
        floats: 1
      }],
      ["vec2", {
        wgsl: "vec2f",
        align: 2,
        floats: 2
      }],
      ["vec3", {
        wgsl: "vec3f",
        align: 4,
        floats: 3
      }],
      ["vec4", {
        wgsl: "vec4f",
        align: 4,
        floats: 4
      }],
      ["mat4", {
        wgsl: "mat4x4f",
        align: 4,
        floats: 16
      }]
    ]);

    function oo(pp, ip) {
      const cp = new Map;
      let Op = 0;
      const op = [],
        Ip = [],
        Sp = [];
      for (const Yp of ip) {
        var xp, Lp;
        const ip = null !== (xp = Yp.type.trim().split(/\s+/).pop()) && void 0 !== xp ? xp : Yp.type,
          Dp = Oo.get(ip);
        if (!Dp) throw new Error(`Lite: no uniform layout for ${Yp.name}: ${Yp.type}`);
        const Ap = null !== (Lp = Yp.arraySize) && void 0 !== Lp ? Lp : 0,
          Pp = Ap ? 4 : Dp.align;
        Op = Math.ceil(Op / Pp) * Pp;
        const Wp = Ap ? 4 * Math.ceil(Dp.floats / 4) : Dp.floats;
        if (cp.set(Yp.name, {
            offset: Op,
            floats: Dp.floats,
            arraySize: Ap,
            stride: Wp
          }), Ap && Dp.floats <= 2) {
          const ip = `${pp}_${Sp.length}_strided`;
          Ip.push(`struct ${ip} {\n\t@size(16) el: ${Dp.wgsl},\n}`), Sp.push(Yp.name), op.push(`\t@align(16) ${Yp.name}: array<${ip}, ${Ap}>,`)
        } else Ap ? op.push(`\t@align(16) ${Yp.name}: array<${Dp.wgsl}, ${Ap}>,`) : op.push(`\t${Yp.name}: ${Dp.wgsl},`);
        Op += Ap ? Wp * Ap : Dp.floats
      }
      return {
        slots: cp,
        floats: Math.max(4, 4 * Math.ceil(Op / 4)),
        wgsl: `${Ip.join("\n")}\nstruct ${pp} {\n${op.join("\n")}\n}\n`,
        stridedArrays: Sp
      }
    }
    const Io = [{
        name: "vDiffuseColor",
        type: "vec4"
      }, {
        name: "vDiffuseInfos",
        type: "vec2"
      }, {
        name: "alphaCutOff",
        type: "float"
      }, {
        name: "vEmissiveColor",
        type: "vec3"
      }, {
        name: "vAmbientColor",
        type: "vec3"
      }, {
        name: "vSpecularColor",
        type: "vec4"
      }, {
        name: "diffuseMatrix",
        type: "mat4"
      }, {
        name: "vReflectionInfos",
        type: "vec2"
      }, {
        name: "reflectionMatrix",
        type: "mat4"
      }],
      So = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      xo = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function Lo(pp, ip) {
      return `#if defined(${pp}) && ${pp}DIRECTUV == 0\nvarying v${ip}UV: vec2f;\n#endif`
    }

    function Yo(pp, ip, cp) {
      return `#if defined(${pp}) && ${pp}DIRECTUV == 0\nif (uniforms.v${ip}Infos.x==0.)\n{vertexOutputs.v${ip}UV= (uniforms.${cp}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ip}UV= (uniforms.${cp}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function Do(pp, ip, cp) {
      return `#ifdef ${pp}\n#if ${pp}DIRECTUV == 1\n#define v${ip}UV vMainUV1\n#elif ${pp}DIRECTUV == 2\n#define v${ip}UV vMainUV2\n#else\nvarying v${ip}UV: vec2f;\n#endif\nvar ${cp}SamplerSampler: sampler;\nvar ${cp}Sampler: texture_2d<f32>;\n#endif`
    }
    const Ao = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      Po = 256,
      Wo = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      yo = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      Uo = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      wo = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      vo = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      to = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      Ho = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      eo = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${yo}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${Lo("OPACITY","Opacity")}\n${Lo("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${Ho}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${Uo}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${Yo("OPACITY","Opacity","opacity")}\n${Yo("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${wo}\n#define CUSTOM_VERTEX_MAIN_END\n${vo}\n}\n`;
    const uo = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${Do("OPACITY","Opacity","opacity")}\n${Do("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${Ho}\n${to}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((pp,ip)=>function(pp){const ip=`
    frame.lights[LITE_LIGHT$ {
        pp
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      pp
    }\
    nvar diffuse$ {
      pp
    }: vec4f = $ {
      ip
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      pp
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      ip
    }.vLightData, diffuse$ {
      pp
    }.rgb, $ {
      ip
    }.vLightSpecular.rgb, diffuse$ {
      pp
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(ip))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, jo = /^([gimus]+)!/, ko = new Set;

    function mo(pp) {
      ko.has(pp) || (ko.add(pp), console.warn(`Lite: no place for plugin code at ${pp} in the standard shader: it is left out`))
    }

    function Ro(pp, ip) {
      let cp = pp;
      const Op = new Map;
      for (const [Ip, Sp] of ip) {
        var op;
        Op.set(Ip, `${null!==(op=Op.get(Ip))&&void 0!==op?op:""}${Sp}\n`)
      }
      for (const [Ip, Sp] of Op) {
        if (!Ip.startsWith("!")) {
          const pp = `#define ${Ip}`;
          if (!cp.includes(pp)) {
            mo(Ip);
            continue
          }
          cp = cp.replace(pp, (() => `\n${Sp}\n${pp}`));
          continue
        }
        let pp = Ip.substring(1),
          ip = "g";
        if (pp.startsWith("!")) ip = "", pp = pp.substring(1);
        else {
          const cp = jo.exec(pp);
          cp && (ip = cp[1], pp = pp.substring(ip.length + 1))
        }
        const Op = new RegExp(pp, ip.includes("g") ? ip : `${ip}g`);
        let op = Op.exec(cp);
        for (op || mo(Ip); op;) {
          const pp = op,
            ip = Sp.replace(/\$(\d+)/g, ((ip, cp) => Number(cp) < pp.length ? pp[Number(cp)] : ""));
          cp = cp.substring(0, pp.index) + ip + cp.substring(pp.index + pp[0].length), Op.lastIndex = pp.index + ip.length, op = Op.exec(cp)
        }
      }
      return cp
    }
    const qo = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Mo = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      Co = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Eo(pp) {
      const ip = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let cp = pp.replace(qo, ((pp, cp, Op, op, Ip, Sp) => ("attribute" === cp ? ip.attributes.push({
        name: Ip,
        type: Sp
      }) : void 0 === cp ? ip.varyings.push({
        name: Ip,
        type: Sp,
        interpolation: Qo(Sp, Op, op)
      }) : ip.uniforms.push({
        name: Ip,
        type: Xo(Sp)
      }), "")));
      return cp = cp.replace(Mo, ((pp, cp) => (ip.samplers.add(cp), ""))), cp = cp.replace(Co, ((pp, cp, Op) => (ip.textures.push({
        name: cp,
        type: Op
      }), ""))), ip.body = cp, ip
    }

    function Xo(pp) {
      const ip = pp.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        cp = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(ip);
      if (!cp) throw new Error(`Lite: unsupported uniform type ${pp}`);
      return cp
    }

    function Qo(pp, ip, cp) {
      return void 0 === ip && void 0 === cp ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(pp.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ip ? "@interpolate(flat) " : `@interpolate(${null!==ip&&void 0!==ip?ip:"perspective"}, ${null!==cp&&void 0!==cp?cp:"center"}) `
    }

    function Jo(pp) {
      return fo({
        defines: pp.defines,
        vertex: Ro(eo, pp.vertexCode),
        fragment: Ro(uo, pp.fragmentCode),
        members: [...Io, ...pp.defines.has("OPACITY") ? So : [], ...pp.defines.has("EMISSIVE") ? xo : [], ...pp.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function Bo(pp) {
      const ip = pp.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (ip === pp) throw new Error("Lite: fragment main has no return");
      return ip
    }
    const No = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${yo}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${Uo}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${wo}\n${vo}\n}\n`,
      To = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${to}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function fo(pp) {
      const ip = pp.defines,
        cp = Eo(Gi(pp.vertex, ip)),
        Op = Eo(Gi(pp.fragment, ip)),
        op = new Map;
      for (const Hp of [...cp.varyings, ...Op.varyings]) op.has(Hp.name) || op.set(Hp.name, Hp);
      const Ip = [...op.values()].map(((pp, ip) => `\t@location(${ip}) ${pp.interpolation}${pp.name}: ${pp.type},`)),
        Sp = [...pp.members];
      for (const Hp of [...cp.uniforms, ...Op.uniforms]) Sp.some((pp => pp.name === Hp.name)) || Sp.push(Hp);
      const xp = oo(pp.structName, Sp),
        Lp = [],
        Yp = [];
      let Dp = 1;
      const Ap = new Set;
      for (const Hp of [...cp.textures, ...Op.textures]) {
        if (Ap.has(Hp.name)) continue;
        Ap.add(Hp.name);
        const pp = `${Hp.name}Sampler`,
          ip = Dp++,
          cp = Dp++,
          Op = Hp.type.startsWith("texture_2d_array") ? "2d-array" : Hp.type.startsWith("texture_cube") ? "cube" : "2d";
        Lp.push({
          name: Hp.name,
          binding: ip,
          samplerBinding: cp,
          dimension: Op
        }), Yp.push(`@group(2) @binding(${ip}) var ${Hp.name}: ${Hp.type};`), Yp.push(`@group(2) @binding(${cp}) var ${pp}: sampler;`)
      }
      for (const Hp of [...cp.samplers, ...Op.samplers])
        if (!Ap.has(Hp.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Hp} has no texture`);
      const Pp = [hO, Wo, xp.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${pp.structName};`, ...Yp].join("\n"),
        Wp = cp.attributes,
        yp = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...cp.attributes.map(((pp, ip) => `\t@location(${ip}) ${pp.name}: ${pp.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Up = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Ip, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        wp = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Op.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Ip, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", ti, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${vi}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        vp = pp => {
          for (const ip of xp.stridedArrays) pp = pp.replace(new RegExp(`\\b${ip}\\s*\\[(.*?)\\]`, "g"), `${ip}[$1].el`);
          return pp
        };
      return {
        vertex: `${Pp}\n${yp}\n${Up}\n${vp(cp.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Pp}\n${wp}\n${Bo((tp=vp(Op.body),tp.includes("fragmentInputs.position")?tp.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):tp))}`,
        attributes: Wp,
        material: xp,
        textures: Lp
      };
      var tp
    }
    const bo = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      ho = pp => ({
        name: pp,
        type: "vec3"
      }),
      ao = pp => ({
        name: pp,
        type: "float"
      }),
      no = oo("EarthSkyUniforms", [ho("viewFrom"), ao("exposureScale"), ho("zenithOffset"), ao("fogOn"), ho("up"), ao("ditherOn"), ho("sun"), ao("turbidity"), ho("tint"), ao("rayleigh"), ho("sunDir"), ao("mieStrength"), ho("inScatterR"), ao("mieFocus"), ho("inScatterM"), ao("sunE"), ho("extinctionBeta"), ao("sunsetMix"), ao("mieScale"), ao("mieBase"), ao("mieSlope"), ao("sunDiscE"), ao("exposure")]),
      Fo = `${hO}\n${Wo}\n${no.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      go = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${bo.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Go = `\n${ti}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ai).map((pp=>{let[ip,cp]=pp;return`const TONE_${ip}: f32 = ${cp};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${ni};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${vi}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var ro = cp(37313);
    const Zo = new ro.Zy,
      zo = new ro.Zy,
      so = new ro.Quaternion,
      Ko = new Float64Array(3),
      Vo = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      pI = new Float64Array(16);

    function iI(pp, ip, cp) {
      const Op = cp.worldMatrix;
      var op;
      pp.updateFloat3("viewFrom", Op[12], Op[13], Op[14]), pp.updateFloatsFrom("zenithOffset", ip.cameraOffset, 0, 3), pp.updateFloatsFrom("up", ip.up, 0, 3), ip.luminance > 0 && (pp.updateFloat("exposure", ip.luminance), pp.updateFloat("exposureScale", (op = ip.luminance, Math.log2(2 / Math.pow(op, 4))))), pp.updateFloat("turbidity", ip.turbidity), pp.updateFloat("rayleigh", ip.rayleigh), pp.updateFloat("mieStrength", ip.mieCoefficient), pp.updateFloat("mieFocus", ip.mieDirectionalG), pp.updateFloatsFrom("tint", ip.tint, 0, 3), pp.updateFloat("fogOn", ip.fog && cp.fogEnabled && 0 !== cp.fogMode ? 1 : 0), pp.updateFloat("ditherOn", ip.dithering ? 1 : 0);
      const Ip = ip.sunPosition;
      if (Zo.set(Ip[0], Ip[1], Ip[2]), !ip.useSunPosition) {
        const pp = Math.PI * (ip.inclination - .5),
          cp = 2 * Math.PI * (ip.azimuth - .5);
        Zo.set(ip.distance * Math.cos(cp) * Math.cos(pp), ip.distance * Math.sin(-pp), ip.distance * Math.sin(cp) * Math.cos(pp)), ro.Quaternion.FromUnitVectorsToRef(ro.Zy.UpReadOnly, zo.set(ip.up[0], ip.up[1], ip.up[2]), so), Zo.rotateByQuaternionToRef(so, Zo)
      }
      pp.updateVector3("sun", Zo), Ko[0] = Zo.x, Ko[1] = Zo.y, Ko[2] = Zo.z;
      const Sp = bi(ip, Ko, Vo);
      pp.updateFloatsFrom("sunDir", Sp.sunDir, 0, 3), pp.updateFloat("sunE", Sp.sunE), pp.updateFloatsFrom("inScatterR", Sp.inScatterR, 0, 3), pp.updateFloatsFrom("inScatterM", Sp.inScatterM, 0, 3), pp.updateFloatsFrom("extinctionBeta", Sp.extinctionBeta, 0, 3), pp.updateFloat("sunsetMix", Sp.sunsetMix), pp.updateFloat("sunDiscE", Sp.sunDiscE), pp.updateFloat("mieScale", Sp.mieScale), pp.updateFloat("mieBase", Sp.mieBase), pp.updateFloat("mieSlope", Sp.mieSlope)
    }

    function cI(pp, ip) {
      const cp = pI;
      cp[0] = ip.far, cp[5] = ip.far, cp[10] = ip.far, cp[15] = 1;
      const Op = pp.infiniteDistance;
      for (let op = 0; op < 3; op++) cp[12 + op] = pp.position[op] + (Op ? ip.worldMatrix[12 + op] : 0);
      return pI
    }
    class OI {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(pp, ip, cp, Op, op) {
        cp !== this.pipeline && (pp.setPipeline(cp), this.pipeline = cp), pp.setBindGroup(1, Op, [op]);
        const Ip = ip.material.bindGroup;
        Ip !== this.materialGroup && (pp.setBindGroup(2, Ip), this.materialGroup = Ip);
        const Sp = ip.program.packGroup;
        Sp && Sp !== this.packGroup && (pp.setBindGroup(Vi.g, Sp), this.packGroup = Sp);
        const {
          vertexBuffers: xp,
          vertexOffsets: Lp
        } = this;
        for (let Yp = 0; Yp < ip.vertexBuffers.length; Yp++) xp[Yp] === ip.vertexBuffers[Yp] && Lp[Yp] === ip.vertexOffsets[Yp] || (pp.setVertexBuffer(Yp, ip.vertexBuffers[Yp], ip.vertexOffsets[Yp]), xp[Yp] = ip.vertexBuffers[Yp], Lp[Yp] = ip.vertexOffsets[Yp]);
        ip.indexBuffer && ip.indexBuffer !== this.indexBuffer && (pp.setIndexBuffer(ip.indexBuffer, ip.indexFormat), this.indexBuffer = ip.indexBuffer)
      }
    }
    class oI {
      constructor(pp, ip, cp, Op) {
        this.modelMeshes = pp, this.l_ = ip, this.maker = cp, this.warnOnce = Op, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (pp, ip) => {
          (ip < -1 || ip > 1) && this.warnOnce(`group:${ip}`, `rendering group ${ip} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(pp) {
        this.collectGroup(pp, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(pp, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(pp, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.l_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(II), this.transparentDraws.sort(SI)
      }
      collectGroup(pp, ip, cp, Op, op) {
        const Ip = this.modelMeshes.group(ip),
          Sp = this.l_.group(ip),
          xp = 0 === ip ? null === Sp || void 0 === Sp ? void 0 : Sp.opaque : void 0;
        this.collectList(pp, null === Ip || void 0 === Ip ? void 0 : Ip.opaque, xp || null === Sp || void 0 === Sp ? void 0 : Sp.opaque, ip, !1, cp, op), xp && (this.l_.drawn += this.maker.bundleDraws(pp, xp, ip)), this.collectList(pp, null === Ip || void 0 === Ip ? void 0 : Ip.alphaTest, void 0, ip, !1, cp, op), this.collectList(pp, null === Ip || void 0 === Ip ? void 0 : Ip.transparent, null === Sp || void 0 === Sp ? void 0 : Sp.transparent, ip, !0, Op, op)
      }
      collectList(pp, ip, cp, Op, op, Ip, Sp) {
        var xp;
        const Lp = Ip.length;
        ip && this.maker.pushDraws(pp, ip.units, ip.units.length, Op, op, Ip, ip.rows), cp && (this.l_.drawn += this.maker.pushDraws(pp, cp, cp.length, Op, op, Ip));
        const Yp = op ? null === (xp = this.modelMeshes.group(Op)) || void 0 === xp ? void 0 : xp.text : void 0;
        Yp && this.maker.pushDraws(pp, Yp.units, Yp.units.length, Op, !0, Ip, Yp.rows), Sp && xI(Ip, Lp)
      }
    }

    function II(pp, ip) {
      return pp.program.id - ip.program.id || pp.material.owner.uniqueId - ip.material.owner.uniqueId
    }

    function SI(pp, ip) {
      return pp.material.owner.uniqueId - ip.material.owner.uniqueId
    }

    function xI(pp, ip) {
      for (let cp = ip + 1; cp < pp.length; cp++) {
        const Op = pp[cp];
        let op = cp - 1;
        for (; op >= ip && SI(pp[op], Op) > 0; op--) pp[op + 1] = pp[op];
        pp[op + 1] = Op
      }
    }
    const LI = {};

    function YI(pp) {
      return pp.hasThinInstances ? "thin" : pp.fop || pp._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function DI(pp, ip, cp) {
      return pp ? (cp._needUVs = !0, pp.optimizeUVAllocation && (0, Mp.H)(pp.matrix) ? (cp[`${ip}DIRECTUV`] = pp.uvSet + 1, cp[`MAINUV${pp.uvSet+1}`] = !0) : cp[`${ip}DIRECTUV`] = 0, !0) : (cp[`${ip}DIRECTUV`] = 0, !1)
    }

    function AI(pp) {
      const ip = new Map;
      for (const cp in pp) {
        if (95 === cp.charCodeAt(0)) continue;
        const Op = pp[cp],
          op = typeof Op;
        "number" === op || "string" === op ? ip.set(cp, String(Op)) : Op && "function" !== op && ip.set(cp, !0)
      }
      return ip
    }

    function PI(pp) {
      const ip = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: cp
        }
        of pp.features)
        for (const pp in cp) ip[pp] = cp[pp];
      return ip
    }

    function WI(pp) {
      const ip = pp.parts.geometry;
      return null !== ip && void 0 !== ip && ip.live ? ip : null
    }

    function yI(pp) {
      var ip;
      return null !== (ip = WI(pp)) && void 0 !== ip ? ip : LI
    }
    class UI {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = pp, this.warnOnce = ip, this.programWithModel = cp, this.packFailed = Op, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(pp, ip, cp, Op, op) {
        const Ip = ip.owner;
        let Sp = this.drawStates.get(ip);
        if (!Sp) {
          const pp = ip.parts.materials[ip.range];
          if (!pp) return this.warnOnce("model", `${cp.name} on ${Ip.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Sp = {
            defines: PI(pp),
            model: pp,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: op,
            groupId: Op,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(ip, Sp)
        }
        if (this.programCurrent(Sp, ip, op, Op)) return Sp.program;
        const {
          model: xp
        } = Sp, Lp = yI(ip), Yp = this.instanceLayout(Ip, op), Dp = this.definesBits(Ip);
        if (!this.prepareModelDefines(pp, Ip, xp, Sp.defines, Op, op)) return null;
        Sp.instancing = op, Sp.groupId = Op, Sp.modelVersion = xp.version, Sp.geometry = Lp, Sp.instanceLayout = Yp, Sp.definesBits = Dp;
        const Ap = function(pp) {
          let ip = "";
          for (const [cp, Op] of pp) ip += !0 === Op ? `${cp};` : `${cp}=${Op};`;
          return ip
        }(AI(Sp.defines));
        return Ap === Sp.definesKey && Sp.packVariant === this.modelPackVariant && Sp.program && !this.packFailed(Sp.program) || (Sp.definesKey = Ap, Sp.packVariant = this.modelPackVariant, Sp.program = this.programWithModel(xp, Sp.defines, Ap)), Sp.program
      }
      programCurrent(pp, ip, cp, Op) {
        return null !== pp.program && !this.packFailed(pp.program) && pp.instancing === cp && pp.groupId === Op && this.definesHold(pp, ip, cp)
      }
      definesHold(pp, ip, cp) {
        return pp.modelVersion === pp.model.version && pp.geometry === yI(ip) && pp.instanceLayout === this.instanceLayout(ip.owner, cp) && pp.definesBits === this.definesBits(ip.owner) && pp.packVariant === this.modelPackVariant
      }
      modelPackKind(pp) {
        var ip;
        return 0 === this.modelPackVariant ? null : null !== (ip = (0, Rp.s)(pp, mp.g.name)) && void 0 !== ip && ip.active ? "placed" : pp.item ? "item" : pp.lifeform ? "lifeform" : pp.box ? "box" : null
      }
      instanceLayout(pp, ip) {
        var cp, Op, op;
        return "thin" === ip ? null !== (op = this.resources.S_.get(pp)) && void 0 !== op ? op : null : "instanced" === ip && null !== (cp = null === (Op = pp._userInstancedBuffersStorage) || void 0 === Op ? void 0 : Op.interleavedKinds) && void 0 !== cp ? cp : null
      }
      definesBits(pp) {
        const ip = this.view;
        return (pp.visibility < 1 ? 1 : 0) | (pp.hasVertexAlpha ? 2 : 0) | (pp.applyFog ? 4 : 0) | (pp.useVertexColors ? 8 : 0) | (pp.nonUniformScaling ? 16 : 0) | (ip.fogEnabled && 0 !== ip.fogMode ? 32 : 0) | (ip.lightsEnabled ? 64 : 0) | ip.lightCount << 7
      }
      prepareLightDefines(pp, ip, cp) {
        let Op = 0;
        if (this.view.lightsEnabled && !ip) {
          const ip = Math.min(cp, 4);
          for (; Op < this.view.lightCount && (pp[`LIGHT${Op}`] = !0, pp[`LITE_LIGHT${Op}_SLOT`] = Op, Op++, pp._needNormals = !0, Op !== ip););
        }
        for (let op = Op; op < 4; op++) pp[`LIGHT${op}`] = !1, pp[`LITE_LIGHT${op}_SLOT`] = void 0
      }
      prepareModelDefines(pp, ip, cp, Op, op, Ip) {
        const {
          features: Sp
        } = cp;
        Op._needNormals = !1, Op._needUVs = !1;
        const xp = this.view;
        this.prepareLightDefines(Op, cp.disableLighting, cp.maxSimultaneousLights), Op.MAINUV1 = !1, Op.MAINUV2 = !1;
        const Lp = cp.diffuseTexture;
        Lp ? (Op._needUVs = !0, Op.DIFFUSE = !0, Lp.optimizeUVAllocation && (0, Mp.H)(Lp.matrix) ? (Op.DIFFUSEDIRECTUV = Lp.uvSet + 1, Op[`MAINUV${Lp.uvSet+1}`] = !0) : Op.DIFFUSEDIRECTUV = 0, Lp.uvSet > 1 && this.warnOnce(`uvset:${cp.name}`, `${cp.name} samples UV set ${Lp.uvSet+1}, which is not supported`)) : (Op.DIFFUSE = !1, Op.DIFFUSEDIRECTUV = 0);
        const Yp = cp.opacityTexture,
          Dp = cp.emissiveTexture;
        Op.OPACITY = DI(Yp, "OPACITY", Op), Op.OPACITYRGB = null !== Yp && Yp.getAlphaFromRGB, Op.EMISSIVE = DI(Dp, "EMISSIVE", Op), (Yp && Yp.uvSet > 1 || Dp && Dp.uvSet > 1) && this.warnOnce(`uvset:${cp.name}`, `${cp.name} samples a UV set past 2, which is not supported`);
        const Ap = cp.reflectionTexture,
          Pp = null !== Ap;
        if (Pp) {
          if (!this.resources.boundTexture(Ap)) return !1;
          Op._needNormals = !0
        }
        Op.REFLECTION = Pp, Op.REFLECTIONMAP_3D = Pp, Op.REFLECTIONMAP_SKYBOX = Pp, Op.REFLECTIONMAP_OPPOSITEZ = Pp && (pp.useRightHandedSystem ? !Ap.invertZ : Ap.invertZ), Op.ROUGHNESS = Pp && cp.roughness > 0, Op.REFLECTIONOVERALPHA = Pp && cp.useReflectionOverAlpha, Op.LITE_REFLECTION_LUMINANCE = Pp && "cube" === Ap.source.kind && Ap.source.luminance, (ip.skeleton || ip.morphTargetManager) && this.warnOnce(`skin:${ip.name}`, `${ip.name} has bones or morph targets, which are not supported`), Op.FOG = cp.fogEnabled && ip.applyFog && xp.fogEnabled && 0 !== xp.fogMode, Op.NONUNIFORMSCALING = ip.nonUniformScaling;
        const {
          visibility: Wp,
          hasVertexAlpha: yp
        } = ip;
        Op.ALPHATEST = (0, Rp.T)(cp, Wp, yp), Op.ALPHAFROMDIFFUSE = (0, Rp.lb)(cp), Op.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== cp.transparencyMode, Op.ALPHABLEND = null === cp.transparencyMode || (0, Rp.P)(cp, Wp, yp), Op.PREMULTIPLYALPHA = 7 === cp.alphaMode || 8 === cp.alphaMode, Op.EMISSIVEASILLUMINATION = cp.useEmissiveAsIllumination, Op.LINKEMISSIVEWITHDIFFUSE = cp.linkEmissiveWithDiffuse, Op.TWOSIDEDLIGHTING = !cp.backFaceCulling && cp.twoSidedLighting, Op.INSTANCES = "none" !== Ip, Op.THIN_INSTANCES = "thin" === Ip, Op.LITE_FRONT_LAYER = op >= 1;
        for (const {
            feature: kp,
            state: mp,
            active: Rp
          }
          of Sp) {
          var Up, wp;
          if (Rp) null === (Up = (wp = (0, Ji.l)(kp)).prepareDefinesBeforeAttributes) || void 0 === Up || Up.call(wp, mp, Op, pp, ip)
        }
        this.modelPackKind(cp) && (Op._needNormals = !0), Op.NORMAL = Op._needNormals && ip.isVerticesDataPresent("normal"), Op.UV1 = Op._needUVs && ip.isVerticesDataPresent("uv"), Op.UV2 = Op._needUVs && ip.isVerticesDataPresent("uv2");
        const vp = ip.useVertexColors && ip.isVerticesDataPresent("color");
        Op.VERTEXCOLOR = vp, Op.VERTEXALPHA = ip.hasVertexAlpha && vp, Op.INSTANCESCOLOR = "none" !== Ip && ip.isVerticesDataPresent("instanceColor");
        for (const {
            feature: kp,
            state: mp,
            active: Rp
          }
          of Sp) {
          var tp, Hp;
          if (Rp) null === (tp = (Hp = (0, Ji.l)(kp)).prepareDefines) || void 0 === tp || tp.call(Hp, mp, Op, pp, ip, cp)
        }
        const dp = pp.gy();
        for (const {
            feature: kp,
            state: mp,
            active: Rp
          }
          of Sp) {
          var ep, jp;
          if (Rp && !1 === (null === (ep = (jp = (0, Ji.l)(kp)).isReadyForSubMesh) || void 0 === ep ? void 0 : ep.call(jp, mp, Op, pp, dp))) return !1
        }
        return !0
      }
    }

    function wI(pp, ip, cp) {
      return pp.codeVersion !== ip.version && function(pp, ip) {
        const cp = [],
          Op = [];
        for (const {
            feature: Pp,
            state: Wp,
            active: yp
          }
          of ip.features) {
          var op, Ip, Sp, xp;
          if (yp) vI(null === (op = (Ip = (0, Ji.l)(Pp)).getCustomCode) || void 0 === op ? void 0 : op.call(Ip, Wp, "vertex", jp.b.WGSL), cp), vI(null === (Sp = (xp = (0, Ji.l)(Pp)).getCustomCode) || void 0 === Sp ? void 0 : Sp.call(xp, Wp, "fragment", jp.b.WGSL), Op)
        }
        const Lp = [];
        for (const {
            feature: Pp,
            state: Wp
          }
          of ip.features) {
          var Yp, Dp;
          const pp = null === (Yp = (Dp = (0, Ji.l)(Pp)).getUniforms) || void 0 === Yp ? void 0 : Yp.call(Dp, Wp, jp.b.WGSL);
          for (const ip of null !== (Ap = null === pp || void 0 === pp ? void 0 : pp.ubo) && void 0 !== Ap ? Ap : []) {
            var Ap;
            ip.size && ip.type && Lp.push({
              name: ip.name,
              type: ip.type,
              arraySize: ip.arraySize
            })
          }
        }
        pp.vertexCode = cp, pp.fragmentCode = Op, pp.pluginUniforms = Lp, pp.codeKey = JSON.stringify([cp, Op, Lp]), pp.codeVersion = ip.version
      }(pp, ip), `${cp}#${pp.codeKey}`
    }

    function vI(pp, ip) {
      if (pp)
        for (const cp in pp) pp[cp] && ip.push([cp, pp[cp]])
    }
    const tI = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class HI {
      constructor(pp) {
        this.warnOnce = pp, this.states = new Map
      }
      renderState(pp, ip, cp, Op) {
        var op;
        let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Sp = null !== (op = pp.sideOrientation) && void 0 !== op ? op : ip.sideOrientation;
        ip._getWorldMatrixDeterminant() < 0 && (Sp = 0 === Sp ? 1 : 0);
        const xp = "triangle-list" === Ip,
          Lp = cp ? pp.alphaMode : 0,
          Yp = (!cp || (0 === Lp || pp.forceDepthWrite)) && !pp.disableDepthWrite,
          Dp = xp && pp.backFaceCulling ? pp.cullBackFaces ? "back" : "front" : "none",
          Ap = xp && 0 !== Sp ? "ccw" : "cw",
          Pp = pp.depthFunction,
          Wp = xp ? pp.zOffset : 0,
          yp = xp ? pp.zOffsetUnits : 0,
          Up = !pp.disableColorWrite;
        return Op && Op.alphaMode === Lp && Op.depthWrite === Yp && Op.depthFunction === Pp && Op.cullMode === Dp && Op.frontFace === Ap && Op.zOffset === Wp && Op.zOffsetUnits === yp && Op.colourWrite === Up && Op.topology === Ip ? Op : this.stateFor(Lp, Yp, Pp, Dp, Ap, Wp, yp, Up, Ip)
      }
      stateFor(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        const Yp = `${pp}|${ip}|${cp}|${Op}|${op}|${Ip}|${Sp}|${xp}|${Lp}`;
        let Dp = this.states.get(Yp);
        if (!Dp) {
          var Ap;
          const Pp = pp ? xi(pp) : null;
          pp && !Pp && this.warnOnce(`alpha:${pp}`, `alpha mode ${pp} is not supported`), Dp = {
            key: Yp,
            alphaMode: pp,
            depthFunction: cp,
            zOffset: Ip,
            zOffsetUnits: Sp,
            topology: Lp,
            blend: Pp,
            depthWrite: ip,
            depthCompare: cp && null !== (Ap = tI.get(cp)) && void 0 !== Ap ? Ap : null,
            cullMode: Op,
            frontFace: op,
            depthBias: -Sp,
            depthBiasSlopeScale: -Ip,
            colourWrite: xp
          }, this.states.set(Yp, Dp)
        }
        return Dp
      }
    }
    var dI = cp(37660);

    function eI(pp) {
      if (!pp.frozen) return -1;
      let ip = pp.version;
      for (const {
          feature: cp,
          state: Op,
          active: op
        }
        of pp.features) {
        if (!op || !cp.bind) continue;
        const pp = (0, Ji.l)(cp).uniformsVersion;
        if (!pp) return -1;
        ip += pp(Op)
      }
      return ip
    }
    class uI {
      constructor(pp, ip, cp) {
        this.slots = pp, this.data = ip, this.textures = cp, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(pp, ip) {
        this.write4(pp, ip, 0, 0, 0, 1)
      }
      updateFloat2(pp, ip, cp) {
        this.write4(pp, ip, cp, 0, 0, 2)
      }
      updateFloat3(pp, ip, cp, Op) {
        this.write4(pp, ip, cp, Op, 0, 3)
      }
      updateFloat4(pp, ip, cp, Op, op) {
        this.write4(pp, ip, cp, Op, op, 4)
      }
      updateVector3(pp, ip) {
        this.write4(pp, ip.x, ip.y, ip.z, 0, 3)
      }
      updateVector4(pp, ip) {
        this.write4(pp, ip.x, ip.y, ip.z, ip.w, 4)
      }
      updateColor3(pp, ip) {
        this.write4(pp, ip.r, ip.g, ip.b, 0, 3)
      }
      updateColor4(pp, ip, cp) {
        this.write4(pp, ip.r, ip.g, ip.b, cp, 4)
      }
      updateFloatsFrom(pp, ip, cp, Op) {
        const op = this.slots.get(pp);
        if (!op) return;
        const Ip = this.data,
          Sp = op.offset;
        for (let xp = 0; xp < Op; xp++) Ip[Sp + xp] = ip[cp + xp]
      }
      updateFloat3TimesFloats(pp, ip, cp, Op) {
        const op = this.slots.get(pp);
        if (!op) return;
        const Ip = this.data,
          Sp = op.offset;
        Ip[Sp] = ip[cp] * Op[0], Ip[Sp + 1] = ip[cp + 1] * Op[1], Ip[Sp + 2] = ip[cp + 2] * Op[2]
      }
      I3(pp, ip) {
        const cp = this.slots.get(pp);
        cp && this.data.set(ip.m, cp.offset)
      }
      updateMatrixFloats(pp, ip) {
        const cp = this.slots.get(pp);
        cp && this.data.set(ip, cp.offset)
      }
      updateFloatArray(pp, ip) {
        const cp = this.slots.get(pp);
        if (!cp) return;
        if (!cp.arraySize || cp.stride === cp.floats) return void this.data.set(ip, cp.offset);
        const Op = Math.min(ip.length, cp.floats * cp.arraySize);
        for (let op = 0; op < Op; op++) this.data[cp.offset + Math.floor(op / cp.floats) * cp.stride + op % cp.floats] = ip[op]
      }
      updateArray(pp, ip) {
        this.updateFloatArray(pp, ip)
      }
      setTexture(pp, ip) {
        this.textures.set(pp, ip), this.expected.delete(pp)
      }
      expectTexture(pp) {
        this.textures.set(pp, null), this.expected.add(pp)
      }
      write4(pp, ip, cp, Op, op, Ip) {
        const Sp = this.slots.get(pp);
        if (!Sp) return;
        const xp = this.data,
          Lp = Sp.offset;
        xp[Lp] = ip, Ip > 1 && (xp[Lp + 1] = cp), Ip > 2 && (xp[Lp + 2] = Op), Ip > 3 && (xp[Lp + 3] = op)
      }
    }

    function jI(pp, ip) {
      const cp = Ao,
        Op = dI.h,
        op = pp.lights,
        Ip = Math.min(pp.lightCount, 8);
      for (let Sp = 0; Sp < Ip; Sp++) {
        const pp = cp.lights + Sp * cp.lightStride,
          Ip = Sp * dI.c;
        ip[pp] = op[Ip + Op.vector], ip[pp + 1] = op[Ip + Op.vector + 1], ip[pp + 2] = op[Ip + Op.vector + 2], ip[pp + 3] = op[Ip + Op.kind] === dI.f.directional ? 1 : 0, ip[pp + 4] = op[Ip + Op.diffuse], ip[pp + 5] = op[Ip + Op.diffuse + 1], ip[pp + 6] = op[Ip + Op.diffuse + 2], ip[pp + 7] = op[Ip + Op.range], ip[pp + 8] = op[Ip + Op.specular], ip[pp + 9] = op[Ip + Op.specular + 1], ip[pp + 10] = op[Ip + Op.specular + 2], ip[pp + 11] = op[Ip + Op.range]
      }
      ip[cp.fogInfos] = pp.fogMode, ip[cp.fogInfos + 1] = pp.fogStart, ip[cp.fogInfos + 2] = pp.fogEnd, ip[cp.fogInfos + 3] = pp.fogDensity, ip[cp.fogColour] = pp.fogColour[0], ip[cp.fogColour + 1] = pp.fogColour[1], ip[cp.fogColour + 2] = pp.fogColour[2], ip[cp.outputHeight] = pp.renderHeight, ip[cp.animTick] = pp.animTick, ip[cp.timeMs] = pp.timeMs
    }
    class kI {
      constructor(pp) {
        this.instancesOf = pp
      }
      refreshModelUniforms(pp, ip, cp, Op) {
        const op = eI(cp);
        if (op >= 0 && op === ip.heldVersion && ip.textures.get("diffuseSampler") === cp.diffuseTexture && ip.textures.get("reflectionCubeSampler") === cp.reflectionTexture && ip.textures.get("opacitySampler") === cp.opacityTexture && ip.textures.get("emissiveSampler") === cp.emissiveTexture) return !0;
        if (op < 0)
          for (const Ip of this.instancesOf(cp)) Ip.heldVersion = -1;
        return this.writeModelUniforms(pp, ip, cp, Op), ip.heldVersion = op, !1
      }
      writeModelUniforms(pp, ip, cp, Op) {
        const {
          ubo: op
        } = ip, Ip = cp.diffuseTexture, Sp = cp.diffuseColor;
        op.updateFloat4("vDiffuseColor", Sp[0], Sp[1], Sp[2], cp.alpha), Ip && (op.updateFloat2("vDiffuseInfos", Ip.uvSet, Ip.level), op.updateMatrixFloats("diffuseMatrix", Ip.matrix)), op.updateFloat("alphaCutOff", cp.alphaCutOff), op.updateFloatsFrom("vEmissiveColor", cp.emissiveColor, 0, 3), op.updateFloat3TimesFloats("vAmbientColor", Op.ambientColour, 0, cp.ambientColor);
        const xp = cp.specularColor;
        op.updateFloat4("vSpecularColor", xp[0], xp[1], xp[2], cp.specularPower), op.setTexture("diffuseSampler", Ip);
        const Lp = cp.opacityTexture;
        Lp && (op.updateFloat2("vOpacityInfos", Lp.uvSet, Lp.level), op.updateMatrixFloats("opacityMatrix", Lp.matrix)), op.setTexture("opacitySampler", Lp);
        const Yp = cp.emissiveTexture;
        Yp && (op.updateFloat2("vEmissiveInfos", Yp.uvSet, Yp.level), op.updateMatrixFloats("emissiveMatrix", Yp.matrix)), op.setTexture("emissiveSampler", Yp);
        const Dp = cp.reflectionTexture;
        Dp && op.updateMatrixFloats("reflectionMatrix", Dp.matrix), op.updateFloat2("vReflectionInfos", Dp ? Dp.level * pp.iblIntensity : 0, cp.roughness), op.setTexture("reflectionCubeSampler", Dp);
        const Ap = pp.gy();
        for (const {
            feature: yp,
            state: Up,
            active: wp
          }
          of cp.features) {
          var Pp, Wp;
          if (wp) null === (Pp = (Wp = (0, Ji.l)(yp)).bind) || void 0 === Pp || Pp.call(Wp, Up, op, pp, Ap)
        }
      }
    }

    function mI(pp) {
      const ip = pp.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(ip) ? "u32" : /i32|^vec\di$/.test(ip) ? "i32" : "f32"
    }

    function RI(pp, ip) {
      const cp = pp.getSize(),
        Op = mI(ip),
        op = pp => 4 === cp ? `${pp}x4` : 2 === cp ? `${pp}x2` : null;
      if ("f32" === Op) {
        if (5126 === pp.type) return 1 === cp ? "float32" : cp >= 2 && cp <= 4 ? `float32x${cp}` : null;
        if (!pp.normalized) return null;
        switch (pp.type) {
          case 5121:
            return op("unorm8");
          case 5120:
            return op("snorm8");
          case 5123:
            return op("unorm16");
          case 5122:
            return op("snorm16")
        }
        return null
      }
      const Ip = "u32" === Op ? "uint" : "sint";
      switch (pp.type) {
        case 5125:
        case 5124:
          return 1 === cp ? `${Ip}32` : cp <= 4 ? `${Ip}32x${cp}` : null;
        case 5121:
        case 5120:
          return op(`${Ip}8`);
        case 5123:
        case 5122:
          return op(`${Ip}16`)
      }
      return null
    }

    function qI(pp) {
      var ip;
      const cp = /(8|16|32)(?:x(\d))?$/.exec(pp);
      return cp ? Number(cp[1]) / 8 * Number(null !== (ip = cp[2]) && void 0 !== ip ? ip : 1) : 4
    }
    class MI {
      constructor(pp, ip, cp) {
        this.resources = pp, this.limits = ip, this.warnOnce = cp, this.layouts = new Map
      }
      resolveInputs(pp, ip, cp, Op) {
        const op = [],
          Ip = cp.program.attributes,
          Sp = [];
        for (let Dp = 0; Dp < Ip.length; Dp++) {
          const cp = Ip[Dp],
            xp = cp.optional ? null : this.resources.vertexInput(pp, cp.name, Op);
          if (!xp) {
            const pp = mI(cp.type),
              ip = "u32" === pp ? "uint32x4" : "i32" === pp ? "sint32x4" : "float32x4";
            Sp.push(null);
            const Op = op.find((pp => null === pp.data));
            Op ? Op.attributes.push({
              shaderLocation: Dp,
              offset: 0,
              format: ip
            }) : op.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Dp,
                offset: 0,
                format: ip
              }]
            });
            continue
          }
          const Lp = xp.getBuffer();
          Sp.push(xp);
          const Yp = RI(xp, cp.type);
          if (!Yp) return this.warnOnce(`format:${ip}:${cp.name}`, `${ip}'s ${cp.name} (type ${xp.type}, size ${xp.getSize()}) has no WebGPU vertex format`), null;
          const Ap = xp.getIsInstanced() ? "instance" : "vertex",
            Pp = xp.byteStride,
            Wp = qI(Yp),
            yp = op.find((pp => pp.data === Lp && pp.stride === Pp && pp.step === Ap && xp.byteOffset >= pp.base && xp.byteOffset - pp.base + Wp <= Pp));
          yp ? yp.attributes.push({
            shaderLocation: Dp,
            offset: xp.byteOffset - yp.base,
            format: Yp
          }) : op.push({
            data: Lp,
            base: xp.byteOffset,
            stride: Pp,
            step: Ap,
            attributes: [{
              shaderLocation: Dp,
              offset: 0,
              format: Yp
            }]
          })
        }
        if (op.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ip}`, `${ip} needs ${op.length} vertex buffers`), null;
        let xp = "";
        for (const Dp of op) {
          xp += `${Dp.stride}${"instance"===Dp.step?"i":"v"}`;
          for (const pp of Dp.attributes) xp += `,${pp.shaderLocation}:${pp.offset}:${pp.format}`;
          xp += ";"
        }
        let Lp = this.layouts.get(xp);
        Lp || (Lp = {
          key: xp,
          buffers: op.map((pp => ({
            arrayStride: pp.stride,
            stepMode: pp.step,
            attributes: pp.attributes
          }))),
          instanceEnds: op.map((pp => {
            let ip = -1;
            if ("instance" === pp.step)
              for (const cp of pp.attributes) ip = Math.max(ip, cp.offset + qI(cp.format));
            return ip
          }))
        }, this.layouts.set(xp, Lp));
        const Yp = op.map((pp => pp.base));
        return {
          program: cp,
          sources: Sp,
          layout: Lp,
          slotData: op.map((pp => pp.data)),
          B_: Yp,
          buffers: [],
          offsets: Yp,
          ends: [],
          state: null,
          pipelineKey: "",
          pipeline: null,
          pipelineTarget: "",
          geometry: null,
          instanceLayout: null,
          draw: null,
          retained: null,
          gpuVersion: -1,
          fitInstances: 0
        }
      }
    }

    function CI(pp, ip, cp, Op) {
      const op = ip.program.program.attributes;
      for (let Ip = 0; Ip < op.length; Ip++) {
        if ((op[Ip].optional ? null : cp.vertexInput(pp, op[Ip].name, Op)) !== ip.sources[Ip]) return !1
      }
      return !0
    }
    const EI = 64;
    class XI {
      constructor(pp, ip, cp, Op) {
        this.device = pp, this.layout = ip, this.frameBuffer = cp, this.label = Op, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(pp) {
        if (pp * EI <= this.data.length) return !1;
        let ip = 2 * this.data.length;
        for (; pp * EI > ip;) ip *= 2;
        const cp = new Float32Array(ip);
        return cp.set(this.data), this.data = cp, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const op = this.data,
          Ip = pp * EI;
        let Sp = op[Ip + 16] !== cp;
        for (let xp = 0; xp < 16 && !Sp; xp++) Sp = op[Ip + xp] !== ip[Op + xp];
        if (Sp) {
          for (let pp = 0; pp < 16; pp++) op[Ip + pp] = ip[Op + pp];
          op[Ip + 16] = cp
        }
        return Sp
      }
      upload(pp, ip) {
        this.device.queue.writeBuffer(this.buffer, pp * Po, this.data, pp * EI, (ip - pp) * EI)
      }
      createBuffer() {
        return this.device.createBuffer({
          label: this.label,
          size: this.data.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createBindGroup() {
        return this.device.createBindGroup({
          label: this.label,
          layout: this.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.buffer,
              size: 80
            }
          }]
        })
      }
    }

    function lI(pp) {
      return pp.gpu[Mp.c.lite] ??= pp.materials.map(((ip, cp) => ({
        parts: pp,
        range: cp,
        owner: pp.owner
      })))
    }

    function QI(pp) {
      var ip, cp, Op;
      return null !== (ip = null !== (cp = null === (Op = pp.parts.materials[pp.range]) || void 0 === Op ? void 0 : Op.mirror) && void 0 !== cp ? cp : pp.owner.material) && void 0 !== ip ? ip : null
    }
    const JI = ["opaque", "alphaTest", "transparent", "text"];

    function BI(pp) {
      for (const ip of JI) pp[ip].units.length = 0, pp[ip].rows.length = 0
    }
    class NI {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Qi.c)("Lite: ")
      }
      attach(pp, ip) {
        this.model = pp, this.mirror = ip
      }
      get worlds() {
        return this.model.nodes.WP
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(pp) {
        return this.groups.get(pp)
      }
      forEachGroup(pp) {
        this.groups.forEach(pp)
      }
      forEachSelected(pp) {
        for (const [ip, cp] of this.groups)
          for (const Op of JI)
            for (const op of cp[Op].units) pp(op.owner, "text" === Op ? "transparent" : Op, ip)
      }
      select(pp, ip) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(BI);
        const {
          model: cp,
          mirror: Op
        } = this;
        if (!cp || !Op || !pp) return;
        this.rows.length < cp.nodes.TA && (this.rows = new Int32Array(cp.nodes.TA));
        const op = this.rows,
          Ip = cp.meshes;
        for (let xp = 0; xp < Ip.looseCount; xp++) {
          const pp = Ip.loose[xp],
            cp = Op.nodes[pp];
          cp && !cp.isBlocked && cp.isEnabled() && !cp.ei.hasAZeroComponent && Ip.selects(pp, ip.frustum) && (this.activate(cp, pp), this.selectedCount++)
        }
        const Sp = Ip.selectTextPlanes(ip.frustum, op);
        for (let xp = 0; xp < Sp; xp++) {
          const ip = op[xp],
            Ip = Op.nodes[ip],
            Sp = cp.meshes.parts[ip];
          if (!Ip.isVisible || !(Ip.visibility > 0) || 0 === (Ip.layerMask & pp.layerMask) || !Sp) continue;
          const Lp = this.groupOf(cp.meshes.layer[ip]).text;
          for (const pp of lI(Sp)) Lp.units.push(pp), Lp.rows.push(ip);
          this.selectedCount++
        }
      }
      instanceBatch(pp) {
        const ip = this.batchOf(pp);
        return ip.dispatched || (ip.dispatched = ip.renderSelf = !0, ip.row = this.rowOf(pp)), ip
      }
      rowOf(pp) {
        return pp.row
      }
      activate(pp, ip) {
        if (!pp.Vl) {
          const cp = pp;
          if (cp.fop) {
            const pp = this.batchOf(cp);
            pp.dispatched = !0, pp.renderSelf = !0, pp.row = ip
          }
          return void this.dispatch(cp, ip, ip)
        }
        const cp = pp,
          Op = cp.aop;
        if (Op._getWorldMatrixDeterminant() >= 0 !== cp._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Op.name}`, `A mirrored InstancedMesh of ${Op.name} is not drawn yet`);
        const op = this.batchOf(Op);
        op.instances.push(cp), op.rows.push(ip), op.dispatched || (op.dispatched = !0, this.dispatch(Op, ip, this.rowOf(Op)))
      }
      batchOf(pp) {
        let ip = this.batches.get(pp);
        return ip || (ip = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(pp, ip)), ip.frame !== this.frame && (ip.frame = this.frame, ip.dispatched = !1, ip.renderSelf = !1, ip.instances.length = 0, ip.rows.length = 0), ip
      }
      dispatch(pp, ip, cp) {
        const {
          layer: Op,
          parts: op
        } = this.model.meshes;
        if (!op[ip]) return;
        const Ip = this.groupOf(Op[ip]),
          Sp = pp;
        for (const xp of lI(op[ip])) {
          const pp = QI(xp);
          if (!pp) continue;
          const ip = pp.needAlphaBlendingForMesh(Sp) ? Ip.transparent : pp.needAlphaTestingForMesh(Sp) ? Ip.alphaTest : Ip.opaque;
          ip.units.push(xp), ip.rows.push(cp)
        }
      }
      groupOf(pp) {
        let ip = this.groups.get(pp);
        return ip || (ip = {
          opaque: {
            units: [],
            rows: []
          },
          alphaTest: {
            units: [],
            rows: []
          },
          transparent: {
            units: [],
            rows: []
          },
          text: {
            units: [],
            rows: []
          }
        }, this.groups.set(pp, ip)), ip
      }
    }

    function TI(pp) {
      pp.opaque.length = 0, pp.transparent.length = 0
    }
    class fI {
      constructor() {
        this.sx = new Map, this.enabled = [], this.groups = new Map, this.aW = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(pp) {
        if (this.sx.has(pp)) return;
        const ip = {
          mesh: pp,
          observer: pp.onEffectiveEnabledStateChangedObservable.add((pp => {
            this.eC(ip, pp)
          })),
          index: -1,
          steady: null
        };
        this.sx.set(pp, ip), this.eC(ip, pp.isEnabled())
      }
      remove(pp) {
        const ip = this.sx.get(pp);
        ip && (ip.observer.remove(!0), this.eC(ip, !1), this.sx.delete(pp))
      }
      dropSteady() {
        for (const pp of this.sx.values()) pp.steady = null
      }
      base(pp) {
        return this.sx.get(pp)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          sx: this.sx.size
        }
      }
      forEachSelected(pp) {
        for (const [ip, cp] of this.groups) {
          for (const Op of cp.opaque) pp(Op.owner, "opaque", ip);
          for (const Op of cp.transparent) pp(Op.owner, "transparent", ip)
        }
        for (const ip of this.aW) pp(ip.mesh, "opaque", 0)
      }
      group(pp) {
        return this.groups.get(pp)
      }
      forEachGroup(pp) {
        this.groups.forEach(pp)
      }
      select(pp, ip) {
        if (this.drawn = 0, this.selected = 0, this.aW.length = 0, this.groups.forEach(TI), !pp) return;
        const cp = this.enabled;
        for (let Op = 0; Op < cp.length; Op++) {
          const op = cp[Op];
          if (op.steady && ip(op, pp)) {
            this.selected++, this.aW.push(op);
            continue
          }
          const Ip = op.mesh;
          if (Ip.isBlocked || Ip.ei.hasAZeroComponent) continue;
          if (!Ip.isVisible || Ip.visibility <= 0 || 0 === (Ip.layerMask & pp.layerMask)) continue;
          if (Ip.fop) {
            this.warned.has(Ip.name) || (this.warned.add(Ip.name), console.warn(`Lite: thin instance base ${Ip.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Sp
          } = Ip;
          if (!Sp) continue;
          Ip.computeWorldMatrix(), this.selected++;
          const xp = this.listsFor(Ip.renderingGroupId);
          for (const pp of lI(Sp)) {
            const ip = QI(pp);
            ip && (ip.needAlphaBlendingForMesh(Ip) ? xp.transparent.push(pp) : xp.opaque.push(pp))
          }
        }
      }
      eC(pp, ip) {
        if (ip === pp.index >= 0) return;
        pp.steady = null;
        const cp = this.enabled;
        if (ip) pp.index = cp.length, cp.push(pp);
        else {
          const ip = cp.pop();
          ip !== pp && (cp[pp.index] = ip, ip.index = pp.index), pp.index = -1
        }
      }
      listsFor(pp) {
        let ip = this.groups.get(pp);
        return ip || (ip = {
          opaque: [],
          transparent: []
        }, this.groups.set(pp, ip)), ip
      }
    }
    var bI = cp(39787);
    class hI {
      constructor() {
        this.bundle = null, this.stale = !0, this.sx = new Set
      }
    }
    class aI {
      constructor(pp, ip, cp) {
        this.device = pp, this.slots = ip, this.host = cp, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new hI, this.kE = new hI, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new OI, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = pp => {
          pp.seen !== this.frame && (pp.draw && (pp.draw = null, this.args[5 * pp.slot + 1] = 0, this.argsDirty = !0, this.kE.stale ||= pp.kE), this.frame - pp.seen > 120 && (this.records.delete(pp.unit), this.freeSlots.push(pp.slot), pp.recorded && (this.bundleOf(pp).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(pp) {
          var ip, cp;
          let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ip = null === (cp = globalThis.navigator) || void 0 === cp ? void 0 : cp.userAgent) && void 0 !== ip ? ip : "";
          const op = pp.adapterInfo;
          return "intel" === (null === op || void 0 === op ? void 0 : op.vendor) && "gen-12lp" === op.architecture && Op.includes("Windows")
        }(pp), (0, bI.H)(this.direct)
      }
      Hk() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, bI.H)(this.directThisFrame)
      }
      add(pp, ip, cp, Op) {
        let op = this.records.get(pp);
        return op || (op = this.createRecord(pp), this.records.set(pp, op)), op.recorded && FI(op, ip) || (this.bundleOf(op).stale = !0), this.place(op, ip, cp, Op), op
      }
      bundleOf(pp) {
        return pp.kE ? this.kE : this.main
      }
      addAgain(pp, ip, cp, Op) {
        pp.recorded || (this.bundleOf(pp).stale = !0), this.place(pp, ip, cp, Op)
      }
      place(pp, ip, cp, Op) {
        pp.seen = this.frame, pp.kE && null === pp.draw && (this.kE.stale = !0), pp.draw = ip, this.drawn++, cp && this.slots.write(pp.slot, cp, Op) && (this.slotsFrom = Math.min(this.slotsFrom, pp.slot), this.slotsTo = Math.max(this.slotsTo, pp.slot));
        const op = this.args,
          Ip = 5 * pp.slot;
        op[Ip] === ip.count && op[Ip + 1] === ip.instances && op[Ip + 2] === ip.first || (op[Ip] = ip.count, op[Ip + 1] = ip.instances, op[Ip + 2] = ip.first, this.argsDirty = !0, this.kE.stale ||= pp.kE)
      }
      Rk() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(pp) {
        for (const ip of this.records.values()) ip.draw && ip.seen === this.frame && !ip.kE && pp(ip.draw, this.slots.data, ip.slot * Po / 4)
      }
      resourceDestroyed(pp) {
        this.main.stale ||= this.main.sx.has(pp), this.kE.stale ||= this.kE.sx.has(pp)
      }
      execute(pp, ip, cp) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(pp, ip, cp, "direct"), this.drawn;
        const Op = this.host.sceneGroup(ip);
        if (!Op) return this.main.bundle = null, this.kE.bundle = null, this.recordedSceneGroup = null, this.encode(pp, ip, cp, "direct"), this.drawn;
        this.recordedTarget === cp && this.recordedSceneGroup === Op || (this.recordedTarget = cp, this.recordedSceneGroup = Op, this.main.stale = !0, this.kE.stale = !0);
        const op = this.main,
          Ip = this.kE;
        let Sp = !1;
        !op.stale && op.bundle || (op.bundle = this.record(ip, cp, Op, "indirect"), Sp = !0);
        const xp = (0, bI.i)();
        return (Ip.stale || this.rangedEpoch !== xp) && (this.rangedEpoch = xp, Ip.bundle = this.drawsRanged() ? this.record(ip, cp, Op, "kE") : this.noRangedBundle(), Sp = !0), Sp && (this.bundles = Ip.bundle ? [op.bundle, Ip.bundle] : [op.bundle]), pp.executeBundles(this.bundles), pp.setBindGroup(0, Op), this.drawn
      }
      record(pp, ip, cp, Op) {
        const op = this.device.createRenderBundleEncoder({
          label: "kE" === Op ? "thin-bases-ranged" : "thin-bases",
          colorFormats: pp._colorFormat ? [pp._colorFormat] : [],
          depthStencilFormat: pp._depthStencilFormat,
          sampleCount: pp._sampleCount
        });
        return op.setBindGroup(0, cp), this.encode(op, pp, ip, Op), op.finish()
      }
      noRangedBundle() {
        for (const pp of this.records.values()) pp.kE && (pp.recorded = !1);
        return this.kE.sx.clear(), this.kE.stale = !1, null
      }
      drawsRanged() {
        for (const pp of this.records.values())
          if (pp.kE && pp.draw) return !0;
        return !1
      }
      encode(pp, ip, cp, Op) {
        const op = [];
        for (const Lp of this.records.values()) "direct" !== Op && Lp.kE !== ("kE" === Op) || (Lp.recorded = !1, Lp.draw && op.push(Lp));
        op.sort(gI);
        const Ip = "direct" === Op ? null : "kE" === Op ? this.kE : this.main;
        null === Ip || void 0 === Ip || Ip.sx.clear(), this.binder.reset();
        let Sp = !1;
        for (const Lp of op) {
          var xp;
          const op = Lp.draw,
            Yp = this.host.pipelineFor(op, ip, cp);
          if (!Yp) {
            this.host.pipelineCompiling(op, cp) ? Sp = !0 : Ip && this.keep(Lp, op, Ip.sx);
            continue
          }
          let Dp;
          if (Lp.kE && "indirect" !== Op) {
            const pp = Lp.unit.owner;
            Dp = "direct" === Op && (0, bI.t)(pp) || (0, bI.m)(pp) || void 0
          }
          if (Ip && this.keep(Lp, op, Ip.sx), 0 === (null === (xp = Dp) || void 0 === xp ? void 0 : xp.count)) continue;
          this.binder.bind(pp, op, Yp, this.slots.bindGroup, Lp.slot * Po);
          const Ap = 5 * Lp.slot;
          if ("indirect" === Op) {
            op.indexBuffer ? pp.drawIndexedIndirect(this.argsBuffer, 4 * Ap) : pp.drawIndirect(this.argsBuffer, 4 * Ap);
            continue
          }
          const Pp = this.args;
          Dp ? nI(pp, null !== op.indexBuffer, Pp, Ap, Dp) : op.indexBuffer ? pp.drawIndexed(Pp[Ap], Pp[Ap + 1], Pp[Ap + 2], 0, 0) : pp.draw(Pp[Ap], Pp[Ap + 1], Pp[Ap + 2], 0)
        }
        Ip && (Ip.stale = Sp)
      }
      keep(pp, ip, cp) {
        pp.recorded = !0, pp.pipelineKey = ip.pipelineKey, pp.materialGroup = ip.material.bindGroup, pp.vertexBuffers.length = 0, pp.vertexBuffers.push(...ip.vertexBuffers), pp.vertexOffsets = ip.vertexOffsets, pp.indexBuffer = ip.indexBuffer, pp.indexFormat = ip.indexFormat;
        for (const Op of ip.vertexBuffers) cp.add(Op);
        ip.indexBuffer && cp.add(ip.indexBuffer), cp.add(ip.material.buffer);
        for (const Op of ip.material.bound) Op && cp.add(Op)
      }
      createRecord(pp) {
        let ip = this.freeSlots.pop();
        return void 0 === ip && (ip = this.slotCount++, this.grow()), {
          unit: pp,
          slot: ip,
          kE: void 0 !== (0, bI.m)(pp.owner),
          seen: -1,
          draw: null,
          recorded: !1,
          pipelineKey: "",
          materialGroup: null,
          vertexBuffers: [],
          vertexOffsets: [],
          indexBuffer: null,
          indexFormat: "uint16"
        }
      }
      grow() {
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.kE.stale = !0), 5 * this.slotCount > this.args.length) {
          const pp = new Uint32Array(2 * this.args.length);
          pp.set(this.args), this.args = pp, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
        }
      }
      createArgsBuffer() {
        return this.device.createBuffer({
          label: "thin-bases-args",
          size: this.args.byteLength,
          usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST
        })
      }
    }

    function nI(pp, ip, cp, Op, op) {
      const Ip = cp[Op + 1],
        Sp = op.data;
      for (let xp = 0; xp < op.count; xp++) {
        const op = Math.min(Sp[2 * xp], Ip),
          Lp = Math.min(Sp[2 * xp + 1], Ip - op);
        0 !== Lp && (ip ? pp.drawIndexed(cp[Op], Lp, cp[Op + 2], 0, op) : pp.draw(cp[Op], Lp, cp[Op + 2], op))
      }
    }

    function FI(pp, ip) {
      if (pp.pipelineKey !== ip.pipelineKey || pp.materialGroup !== ip.material.bindGroup || pp.indexBuffer !== ip.indexBuffer || pp.indexFormat !== ip.indexFormat || pp.vertexOffsets !== ip.vertexOffsets || pp.vertexBuffers.length !== ip.vertexBuffers.length) return !1;
      for (let cp = 0; cp < pp.vertexBuffers.length; cp++)
        if (pp.vertexBuffers[cp] !== ip.vertexBuffers[cp]) return !1;
      return !0
    }

    function gI(pp, ip) {
      return II(pp.draw, ip.draw)
    }
    const GI = new WeakMap,
      rI = {
        depth: !1,
        sunShadow: !1
      };

    function ZI(pp, ip) {
      let cp = GI.get(pp);
      cp || (cp = new Map, GI.set(pp, cp));
      const Op = `${ip.depth?"-depth":""}${ip.sunShadow?"-shadow":""}${ip.shadowMask?"-mask":""}`;
      let op = cp.get(Op);
      if (!op) {
        const Ip = [{
          binding: Vi.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Vi.h
          }
        }, {
          binding: Vi.x,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        ip.depth && Ip.push({
          binding: Vi.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), ip.sunShadow && Ip.push(... function() {
          const pp = GPUShaderStage.FRAGMENT,
            ip = Vi.r;
          return [{
            binding: ip.uniform,
            visibility: pp,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: ip.hP,
            visibility: pp,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ip.special,
            visibility: pp,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ip.volume,
            visibility: pp,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: ip.sampler,
            visibility: pp,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: ip.entities,
            visibility: pp,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ip.entityGrids,
            visibility: pp,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), ip.shadowMask && Ip.push({
          binding: Vi.t,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), op = pp.createBindGroupLayout({
          label: `${ip.depth?"terrain-":""}shader-pack-inputs${Op}`,
          entries: Ip
        }), cp.set(Op, op)
      }
      return op
    }

    function zI(pp) {
      return ZI(pp, rI)
    }

    function sI(pp, ip) {
      if (!ip) return !1;
      const cp = (0, pc.g)(pp);
      return !!cp && LO(cp, ip)
    }

    function KI(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!JO(ip)) return [];
      return [ZI(pp, {
        depth: CO(ip.packVariant),
        sunShadow: sI(ip.packVariant, cp),
        shadowMask: Op
      })]
    }
    class VI {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = pp, this.sunShadow = cp, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Vi.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = pp.createBuffer({
          label: "shader-pack-inputs",
          size: Vi.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Op = (0, Vi.A)(ip);
        this.textures = pp.createBuffer({
          label: "shader-pack-textures",
          size: Op.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), pp.queue.writeBuffer(this.textures, 0, Op), this.bindGroup = pp.createBindGroup({
          label: "shader-pack-inputs",
          layout: zI(pp),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Vi.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Vi.x,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(pp, ip, cp) {
        (0, Vi.E)(this.data, {
          seconds: pp.seconds(),
          lit: cp,
          renderOffset: pp.renderOffset(),
          opp: pp.opp(),
          eyePosition: ip,
          shadowDirection: pp.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Op = ip ? this.sunShadow : null;
        if ((ip || cp) && !Op) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!pp && !Op) return this.bindGroup;
        (pp && pp !== this.depthView || cp && cp !== this.maskView) && (this.depthView = null !== pp && void 0 !== pp ? pp : this.depthView, this.maskView = null !== cp && void 0 !== cp ? cp : this.maskView, this.groups.clear());
        const op = (pp ? 1 : 0) | (Op ? 2 : 0) | (cp ? 4 : 0);
        let Ip = this.groups.get(op);
        if (!Ip) {
          const ip = this.entries();
          pp && ip.push({
            binding: Vi.o,
            resource: pp
          }), Op && ip.push(...Op.entries()), cp && ip.push({
            binding: Vi.t,
            resource: cp
          }), Ip = this.device.createBindGroup({
            label: `${pp||cp?"terrain-":""}shader-pack-inputs${pp?"-depth":""}${Op?"-shadow":""}${cp?"-mask":""}`,
            layout: ZI(this.device, {
              depth: !!pp,
              sunShadow: !!Op,
              shadowMask: !!cp
            }),
            entries: ip
          }), this.groups.set(op, Ip)
        }
        return Ip
      }
      bind(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        pp.setBindGroup(Vi.g, this.bindGroupFor(ip, cp, Op))
      }
    }

    function pS(pp, ip, cp) {
      if (pp.gpuVersion === ip.gpuBuffersVersion) return !0;
      let Op;
      do {
        if (Op = ip.gpuBuffersVersion, !iS(pp, ip, cp)) return !1
      } while (ip.gpuBuffersVersion !== Op);
      return pp.gpuVersion = Op, pp.fitInstances = 0, !0
    }

    function iS(pp, ip, cp) {
      let Op = null;
      for (let Ip = 0; Ip < pp.slotData.length; Ip++) {
        var op;
        const Sp = pp.slotData[Ip],
          xp = Sp ? ip.gpuBuffer(Sp) : cp;
        if (!xp) return !1;
        Sp && pp.layout.instanceEnds[Ip] < 0 && ip.cover(Sp, Number.POSITIVE_INFINITY), pp.buffers[Ip] = xp;
        const Lp = pp.B_[Ip] + (Sp ? ip.gpuOffset(Sp) : 0);
        Lp !== (null !== (op = Op) && void 0 !== op ? op : pp.offsets)[Ip] && (Op ??= pp.offsets.slice(), Op[Ip] = Lp), pp.ends[Ip] = Sp ? ip.gpuEnd(Sp) : xp.size
      }
      return Op && (pp.offsets = Op), !0
    }

    function cS(pp, ip, cp, Op) {
      if (ip <= pp.fitInstances) return null;
      const {
        layout: op,
        ends: Ip,
        offsets: Sp,
        slotData: xp,
        B_: Lp
      } = pp;
      let Yp = !1;
      for (let Dp = 0; Dp < op.buffers.length; Dp++) {
        const pp = op.instanceEnds[Dp];
        if (pp < 0) continue;
        const Op = (ip - 1) * op.buffers[Dp].arrayStride + pp;
        if (Ip[Dp] - Sp[Dp] < Op) return {
          index: Dp,
          needed: Op
        };
        const Ap = xp[Dp];
        Ap && cp.cover(Ap, Lp[Dp] + Op) && (Yp = !0)
      }
      return Yp && pS(pp, cp, Op), pp.fitInstances = ip, null
    }
    var OS = cp(38045),
      oS = cp(38071);
    const IS = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      SS = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      xS = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      LS = `((vertexInputs.aPackedLightLevels >> 16u) | ${li.d.placed}u)`,
      YS = "u32(vertexInputs.aShaderPackItem.x)",
      DS = `${li.d.lifeform}u`;

    function AS(pp) {
      return "item" === pp.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const PS = "bloxdSpEnchant",
      WS = "floor(finalWorld[3].xyz)";

    function yS(pp, ip, cp) {
      return "placed" === ip.kind && pp.reads[cp].includes("bloxdFragmentBlockPosition")
    }

    function US(pp, ip) {
      let [cp, Op] = pp;
      return cp === ip.point && Op === ip.code
    }

    function wS(pp, ip) {
      var cp, Op, op;
      const Ip = null === (cp = pp.find((pp => pp.texture))) || void 0 === cp ? void 0 : cp.texture,
        Sp = null === (Op = pp.find((pp => pp.enchantTier))) || void 0 === Op ? void 0 : Op.enchantTier,
        xp = null === (op = pp.find((pp => pp.overlay))) || void 0 === op ? void 0 : op.overlay,
        Lp = xp ? ip.filter((pp => US(pp, xp))).length : 0;
      return xp && 1 === Lp ? {
        texture: Ip,
        overlay: xp,
        enchantTier: Sp
      } : {
        texture: Ip,
        enchantTier: Sp
      }
    }

    function vS(pp) {
      if ("item" === pp.kind) {
        return {
          vertexFlags: `(${YS} & 0xffffu)`,
          varying: "vPackItem",
          value: YS,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return pp.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: LS,
        varying: "vPackFlags",
        value: LS,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function tS(pp) {
      return "lifeform" === pp.kind ? DS : "0u"
    }

    function HS(pp) {
      return !!pp.BLOXD_PLUGIN_ENCHANTMENT
    }

    function dS(pp, ip) {
      const {
        enchantTier: cp
      } = ip;
      return cp && HS(ip.defines) && "lifeform" === ip.kind && RS(pp, "enchantTier") ? cp : null
    }

    function eS(pp, ip) {
      return HS(ip.defines) && RS(pp, "enchantSpeed")
    }

    function uS(pp) {
      const {
        overlay: ip,
        defines: cp
      } = pp;
      if (!ip || !cp.DIFFUSE) return null;
      const Op = cp.VERTEXCOLOR || cp.INSTANCESCOLOR && cp.INSTANCES;
      return `vec4f(${ip.colour}.rgb * uniforms.vDiffuseInfos.y${Op?" * fragmentInputs.vColor.rgb":""}, ${ip.colour}.a)`
    }
    const jS = "fragmentInputs.vPackTexture";

    function kS(pp) {
      const {
        atlas: ip,
        defines: cp,
        texture: Op
      } = pp;
      if (ip || !cp.DIFFUSE) return null;
      if (Op) return {
        texture: "diffuseSampler",
        ...Op
      };
      const op = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===cp.DIFFUSEDIRECTUV?"vMainUV1":2===cp.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== pp.kind) return op;
      if (!cp.BLOXD_PLUGIN_ANIMATED) return {
        ...op,
        id: jS
      };
      const Ip = jp.b.WGSL,
        Sp = (0, jp.sb)(Ip, "uAnimStatesNum"),
        xp = (0, jp.$)(Ip, (0, OS.g)(Ip), Sp),
        Lp = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Sp})`,
        layers: [xp],
        uv: `vec2f(${Lp}.x, ${Lp}.y * ${Sp} - ${xp})`,
        levelUv: Lp,
        id: jS
      }
    }

    function mS(pp, ip) {
      return "box" === ip.kind && !!pp.hooks.surface && null !== kS(ip)
    }

    function RS(pp, ip) {
      return pp.reads.fragment.includes(ip)
    }

    function qS(pp) {
      return !!pp.BLOXD_LIGHTING && !pp.BLOXD_UNLIT
    }

    function MS(pp, ip, cp, Op) {
      const op = pp.filter((pp => {
        let [cp, Op] = pp;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === cp && Op === ip
      }));
      if (1 !== op.length) throw new Error(`A model program for shader packs has ${0===op.length?"no":"more than one"} ${Op} code before fog (lite/modelShaderPack.ts)`);
      return pp.map((pp => pp === op[0] ? [pp[0], cp] : pp))
    }

    function CS(pp, ip, cp, Op) {
      const {
        hooks: op
      } = pp, {
        kind: Ip,
        defines: Sp
      } = ip, xp = [...cp];
      var Lp;
      ip.atlas && op.surface && xp.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", UO("atlasIdxIn")]), "item" === Ip && xp.push(["CUSTOM_VERTEX_DEFINITIONS", (0, jp.d)(jp.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), mS(pp, ip) && xp.push(["CUSTOM_VERTEX_DEFINITIONS", (0, jp.d)(jp.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Lp = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${WO}[min(u32(${Lp}) - 1u, arrayLength(&${WO}) - 1u)], ${Lp} > 0.5);\n`)]);
      const Yp = vS(ip);
      Yp && (op.surface || op.light) && xp.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Yp.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Yp.varying} = ${Yp.value};`]);
      let Dp = Op;
      if (yS(pp, ip, "fragment") && (xp.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${WS});`]), Dp = [...Dp, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), RS(pp, "localPosition") && xp.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${AS(ip)};`]), HS(Sp) && op.surface) {
        eS(pp, ip) && xp.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const cp = dS(pp, ip);
        cp && xp.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${cp});`]);
        const Op = (0, jp.ib)(jp.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Dp = [...MS(Dp, (0, oS.m)(jp.b.WGSL), Op, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, oS.e)(PS)]]
      }
      const {
        overlay: Ap
      } = ip;
      Ap && uS(ip) && op.surface && (Dp = Dp.filter((pp => !US(pp, Ap))));
      const Pp = op.light ? function(pp) {
        return "placed" === pp.kind ? {
          name: "terrain",
          engine: (0, zi.P)(jp.b.WGSL),
          pack: (0, zi.fb)(jp.b.WGSL)
        } : pp.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, zi.E)(jp.b.WGSL),
          pack: (0, zi._)(jp.b.WGSL)
        } : null
      }(ip) : null;
      if (Pp && (Dp = MS(Dp, Pp.engine, Pp.pack, `${Pp.name} light`), "placed" !== Ip && qS(Sp))) {
        const pp = Sp.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, jp.sb)(jp.b.WGSL, "uEntityLightLevels") : (0, jp.zb)(jp.b.WGSL, "aLightLevels");
        xp.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${zi.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, zi.cb)(jp.b.WGSL, pp)])
      }
      return {
        vertexCode: xp,
        fragmentCode: Dp
      }
    }

    function ES(pp, ip, cp, Op) {
      return SO(pp, ip, cp, Op, "model")
    }
    const XS = "\t@builtin(position) position: vec4f,\n";

    function lS(pp, ip) {
      const cp = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(pp)[0];
      return `${cp}${ip}${pp.slice(cp.length)}`
    }

    function QS(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: op
      } = ip, Ip = LO(ip, Op), {
        kind: Sp,
        defines: xp
      } = cp, Lp = function(pp, ip) {
        var cp, Op, op;
        const {
          defines: Ip
        } = ip, Sp = vS(ip), xp = !!Ip.FOG, Lp = HS(Ip), Yp = null !== (cp = null === Sp || void 0 === Sp ? void 0 : Sp.enchantTier) && void 0 !== cp ? cp : dS(pp, ip) ? "fragmentInputs.vPackEnchantTier" : "0u", Dp = "lifeform" === ip.kind && !Ip.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.vertexFlags) && void 0 !== Op ? Op : tS(ip),
          vertexLocalPosition: AS(ip),
          flags: null !== (op = null === Sp || void 0 === Sp ? void 0 : Sp.flags) && void 0 !== op ? op : tS(ip),
          normal: "normalW",
          alpha: Dp ? "alpha * baseColor.a" : "alpha",
          alphaOut: Dp ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: xp ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: xp ? "1.0 - fog" : "0.0",
          enchantTier: Yp,
          enchantColour: Lp ? `${PS}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: eS(pp, ip) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: RS(pp, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: uS(ip)
        }
      }(ip, cp), Yp = pp.textures.filter((pp => /^textureAtlas\d+$/.test(pp.name))).length, Dp = cp.atlas && Yp > 0 ? {
        count: Yp,
        layers: cp.atlas.layers,
        width: cp.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: pp.material.slots.has("uAnimDataPerTex") ? (ip, cp) => VO(ip, cp, function(pp) {
          const ip = pp.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            LP: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: pp => `uniforms.uAnimDataPerTex[${pp}]${ip}`
          }
        }(pp)) : null
      } : null, Ap = "placed" === Sp ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Pp = null !== Dp && void 0 !== Dp ? Dp : kS(cp), Wp = function(pp, cp) {
        let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Vi.C)()}${DO(ip,cp)}${Op}${vO(pp)}${OO}${Ap}${ip.code}`
      };
      let {
        vertex: yp,
        fragment: Up
      } = pp;
      const wp = HO(op, Lp);
      if (wp) {
        const pp = yS(ip, cp, "vertex") ? `\tbloxdSpCell = ${WS};\n` : "";
        yp = ES(yp, IS, `${pp}${wp.slice(1)}${IS}`, "vertex")
      }
      const vp = `${AO(ip,Ip,function(pp,ip){return ip.TWOSIDEDLIGHTING?pp:`select(-(${pp}), ${pp}, fragmentInputs.frontFacing)`}(Lp.normal,xp),Lp.flags)}${dO(op,ip.strict,ip.program,Pp,Lp)}`;
      vp && (Up = ES(Up, SS, `${vp.slice(1)}${SS}`, "surface")), Ip && ip.sunShadow && !xp.TWOSIDEDLIGHTING && (Up = ES(Up, XS, `${XS}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const tp = jO(op);
      if (tp) {
        const pp = uO(op, qS(xp), !0, Lp);
        Up = ES(Up, xS, `${pp}${tp.slice(1)}${xS}`, "light")
      }
      const Hp = mS(ip, cp) ? yO : "";
      return {
        ...pp,
        vertex: lS(yp, Wp(Dp, !1, Hp)),
        fragment: lS(Up, Wp(Pp, Ip))
      }
    }
    const JS = {
      name: "earthSky",
      uniqueId: -1
    };
    class BS {
      constructor(pp, ip) {
        this.resources = pp, this.epoch = ip, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const pp of this.instances.values()) pp.released = !0, this.resources.destroyBuffer(pp.buffer);
        this.instances.clear()
      }
    }

    function NS(pp) {
      return pp.failed && null !== pp.packGroup
    }
    class TS {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fI,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new NI;
        this.device = pp, this.resources = ip, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.l_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new OI, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new kI((pp => this.modelSlot(pp).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Qi.c)("Lite: "), this.renderStates = new HI(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (pp, ip) => this.keepSteady(pp, ip), this.lists = void 0, this.slotCount = 0, this.l_ = Op, this.modelMeshes = op, this.lists = new oI(op, Op, this, this.warnOnce), this.drawDefines = new UI(ip, this.warnOnce, ((pp, ip, cp) => this.programWithModel(pp, ip, cp)), NS), this.vertexLayouts = new MI(ip, pp.limits, this.warnOnce), this.sceneLayout = mi(pp), this.frameLayout = pp.createBindGroupLayout({
          label: "meshes-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0,
              minBindingSize: 80
            }
          }]
        }), this.frameBuffer = pp.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new XI(pp, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = pp.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new aI(pp, new XI(pp, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (pp, ip, cp) => this.pipelineFor(pp, ip, cp),
          pipelineCompiling: (pp, ip) => !pp.program.failed && !1 !== this.pipelines.get(`${pp.pipelineKey}|${ip}`),
          sceneGroup: pp => {
            const ip = cp(pp);
            return ip || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), ip
          }
        }), ip.onDestroy = pp => {
          this.thinBundle.resourceDestroyed(pp)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const op = {
          order: pp,
          isTransparent: ip,
          _direct: !ip,
          bind: (pp, ip) => this.createBinding(op, ip, cp, Op)
        };
        return op
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(pp, ip, cp) {
        var Op;
        let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = ip, this.drawDefines.view = ip, this.thinBundle.Hk(), this.writeFrameUniforms();
        const Ip = null !== (Op = null === op || void 0 === op ? void 0 : op.defineFor("model")) && void 0 !== Op ? Op : 0;
        this.drawDefines.modelPackVariant = Ip, op && 0 !== Ip && (this.packInputs ??= new VI(this.device, op.textureLayers(), this.sunShadow), this.packInputs.write(op, ip.eye, op.ZU())), this.lists.clear(), this.slotCount = 0;
        const Sp = pp.activeCamera;
        this.l_.select(Sp, this.keepSteadyBase), this.modelMeshes.select(Sp, ip), cp && this.pushEarthSky(cp), this.lists.collect(pp), this.thinBundle.Rk(), this.uploadMeshSlots()
      }
      pushDraws(pp, ip, cp, Op, op, Ip) {
        let Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const xp = Ip.length;
        for (let Lp = 0; Lp < cp; Lp++) {
          const cp = ip[Lp];
          let xp = this.retainedDraw(pp, cp, Op, op);
          if (void 0 === xp && (xp = this.drawFor(pp, cp, Op, op), this.retain(cp, xp)), xp) {
            const pp = cp.owner,
              ip = Sp ? Sp[Lp] : -1;
            xp.slotOffset = ip < 0 ? this.writeMeshSlot(pp.getWorldMatrix().m, pp.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[ip], 16 * ip), Ip.push(xp)
          }
        }
        return Ip.length - xp
      }
      bundleDraws(pp, ip, cp) {
        let Op = 0;
        for (const op of ip) {
          let ip = this.retainedDraw(pp, op, cp, !1);
          const Ip = void 0 !== ip;
          if (void 0 === ip && (ip = this.drawFor(pp, op, cp, !1), this.retain(op, ip)), ip) {
            const pp = op.owner,
              cp = this.thinBundle.add(op, ip, pp.getWorldMatrix().m, pp.visibility);
            Ip && this.steadyFrom(op, ip, cp), Op++
          }
        }
        return Op
      }
      steadyFrom(pp, ip, cp) {
        const Op = pp.owner,
          op = this.l_.base(Op),
          Ip = Op.material,
          {
            drawState: Sp,
            instance: xp
          } = ip.inputs.retained;
        if (!op || !Ip || 1 !== pp.parts.materials.length || QI(pp) !== Ip) return;
        const Lp = op.steady ??= {
          unit: pp,
          material: Ip,
          visibility: 1,
          draw: ip,
          record: cp,
          drawState: Sp,
          instance: xp,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Lp.unit = pp, Lp.material = Ip, Lp.visibility = Op.visibility, Lp.draw = ip, Lp.record = cp, Lp.drawState = Sp, Lp.instance = xp, Lp.bindGroup = xp.bindGroup, Lp.gpuVersion = this.resources.gpuBuffersVersion, Lp.fitInstances = ip.inputs.fitInstances, Lp.worldFlag = Op.getWorldMatrix().updateFlag, Lp.handedFrame = this.frame
      }
      keepSteady(pp, ip) {
        const cp = pp.steady;
        if (cp.handedFrame !== this.frame - 1 || (this.frame + cp.phase) % 8 === 0) return !1;
        const Op = pp.mesh,
          {
            unit: op,
            draw: Ip,
            instance: Sp,
            drawState: xp
          } = cp,
          Lp = Op.forcedInstanceCount || Op.f_;
        if (!Op.isVisible || Op.fop || Op.visibility !== cp.visibility || 0 === (Op.layerMask & ip.layerMask) || Op.material !== cp.material || 0 !== Op.renderingGroupId || Op.hasVertexAlpha || !this.drawDefines.definesHold(xp, op, xp.instancing) || cp.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Ip.inputs, op, xp.instancing, Ip.program) || Ip.program.failed || Sp.released || Lp <= 0 || Lp > cp.fitInstances) return !1;
        if (Sp.frame !== this.frame && this.bindMaterial(Sp, this.modelUniforms.refreshModelUniforms(Op.Gl(), Sp, Sp.model, this.view)), !Sp.bindable || Sp.bindGroup !== cp.bindGroup) return !1;
        const Yp = Op.computeWorldMatrix(),
          Dp = Yp.updateFlag !== cp.worldFlag;
        return cp.worldFlag = Yp.updateFlag, Ip.instances = Lp, this.thinBundle.addAgain(cp.record, Ip, Dp ? Yp.m : null, cp.visibility), cp.handedFrame = this.frame, this.l_.drawn++, !0
      }
      retainedDraw(pp, ip, cp, Op) {
        const op = this.inputs.get(ip),
          Ip = null === op || void 0 === op ? void 0 : op.retained;
        if (!op || !Ip) return;
        const {
          drawState: Sp,
          program: xp,
          instance: Lp,
          instancing: Yp
        } = Ip, Dp = ip.owner;
        if (YI(Dp) !== Yp) return;
        const Ap = this.instanceCount(Dp, Yp);
        if (Ap <= 0) return null;
        if (Lp.released || xp.failed || Sp.program !== xp || !this.drawDefines.programCurrent(Sp, ip, Yp, cp) || !this.inputsStamped(op, ip, Yp, xp) || Dp.isUnIndexed !== Ip.unIndexed || this.indexKey(ip) !== Ip.indexData) return;
        if (Ip.indexBuffer && Ip.gpuVersion !== this.resources.gpuBuffersVersion) {
          const pp = this.resources.gpuBuffer(Ip.indexData);
          if (!pp) return;
          Ip.indexBuffer = pp, Ip.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Pp = !1;
        if (Lp.frame !== this.frame && (Pp = this.modelUniforms.refreshModelUniforms(pp, Lp, Lp.model, this.view)), !this.bindMaterial(Lp, Pp) || !this.withGpuBuffers(op) || !this.instanceBuffersFit(Dp.name, op, Ap)) return null;
        const Wp = this.makeDraw(xp, op, this.renderStates.renderState(Sp.model, Dp, Op, op.state), Lp, Ap);
        return this.setRange(Wp, ip, Ip.indexBuffer, Ip.indexData), Wp
      }
      retain(pp, ip) {
        const cp = this.drawDefines.drawStates.get(pp);
        if (!ip || !cp || cp.program !== ip.program) {
          const ip = this.inputs.get(pp);
          return void(ip && (ip.retained = null))
        }
        const Op = pp.owner,
          op = cp.instancing,
          Ip = this.indexKey(pp),
          Sp = ip.inputs.retained;
        Sp ? (Sp.drawState = cp, Sp.instancing = op, Sp.program = ip.program, Sp.instance = ip.material, Sp.indexData = Ip, Sp.unIndexed = Op.isUnIndexed, Sp.indexBuffer = ip.indexBuffer, Sp.gpuVersion = this.resources.gpuBuffersVersion) : ip.inputs.retained = {
          drawState: cp,
          instancing: op,
          program: ip.program,
          instance: ip.material,
          indexData: Ip,
          unIndexed: Op.isUnIndexed,
          indexBuffer: ip.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(pp, ip, cp, Op) {
        const op = ip.owner,
          Ip = QI(ip);
        if (!Ip) return null;
        const Sp = Ip.getClassName();
        let xp = null;
        if (function(pp) {
            return "LinesMesh" === pp.getClassName()
          }(op)) {
          if (! function(pp) {
              return "ShaderMaterial" === pp.getClassName() && "color" === pp.shaderPath
            }(Ip)) return this.warnOnce(`lines:${Sp}`, `A LinesMesh with a ${Sp} is not drawn yet (${Ip.name})`), null;
          xp = op
        } else if ("StandardMaterial" !== Sp && "LiteMaterial" !== Sp) return this.warnOnce(`class:${Sp}`, `${Sp} is not drawn yet (${Ip.name})`), null;
        const Lp = YI(op),
          Yp = this.instanceCount(op, Lp);
        if (Yp <= 0) return null;
        const Dp = xp ? this.lineProgramFor(op, cp, Lp) : this.drawDefines.programFor(pp, ip, Ip, cp, Lp);
        if (!Dp || Dp.failed) return null;
        const Ap = xp ? null : this.drawDefines.drawStates.get(ip).model,
          Pp = Ap ? this.modelInstance(Ap, Dp) : this.materialInstance(op, Dp);
        let Wp = !1;
        if (Pp.frame !== this.frame && (xp ? tp(Pp.ubo, xp) : Wp = this.modelUniforms.refreshModelUniforms(pp, Pp, Pp.model, this.view)), !this.bindMaterial(Pp, Wp)) return null;
        const yp = this.meshInputs(ip, Dp, Lp);
        if (!yp || !this.instanceBuffersFit(op.name, yp, Yp)) return null;
        const Up = this.indexKey(ip);
        let wp = null;
        if (Up && !op.isUnIndexed && (wp = this.resources.gpuBuffer(Up), !wp)) return null;
        const vp = this.renderStates.renderState(null !== Ap && void 0 !== Ap ? Ap : Ip, op, Op, yp.state, xp ? "line-list" : "triangle-list"),
          Hp = this.makeDraw(Dp, yp, vp, Pp, Yp);
        return this.setRange(Hp, ip, wp, Up), Hp
      }
      indexKey(pp) {
        const ip = WI(pp);
        return ip ? this.resources.modelIndex(ip) : null
      }
      setRange(pp, ip, cp, Op) {
        cp && (pp.indexBuffer = cp, pp.indexFormat = this.resources.indexFormat(Op));
        const op = 4 * ip.range + (cp ? 0 : 2);
        pp.unit = ip, pp.first = ip.parts.By[op], pp.count = ip.parts.By[op + 1]
      }
      makeDraw(pp, ip, cp, Op, op) {
        ip.state !== cp && (ip.state = cp, ip.pipelineKey = `${pp.id}|${ip.layout.key}|${cp.key}`, ip.pipeline = null);
        const Ip = ip.draw ??= {
          program: pp,
          inputs: ip,
          pipelineKey: "",
          layout: ip.layout,
          state: cp,
          material: Op,
          slotOffset: 0,
          vertexBuffers: ip.buffers,
          vertexOffsets: ip.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: op,
          unit: null
        };
        return Ip.program = pp, Ip.pipelineKey = ip.pipelineKey, Ip.state = cp, Ip.material = Op, Ip.vertexOffsets = ip.offsets, Ip.indexBuffer = null, Ip.instances = op, Ip
      }
      instanceCount(pp, ip) {
        switch (ip) {
          case "thin":
            return pp.forcedInstanceCount || pp.f_;
          case "instanced":
            return this.prepareInstances(pp);
          case "none":
            return 1
        }
      }
      prepareInstances(pp) {
        const ip = function(pp, ip) {
          const cp = ip._userInstancedBuffersStorage,
            Op = pp.batchUploads.get(ip);
          if (Op) {
            var op;
            if (Op.layout === (null !== (op = null === cp || void 0 === cp ? void 0 : cp.interleavedKinds) && void 0 !== op ? op : null)) return Op;
            Op.release()
          }
          return new Ui(pp, ip, cp)
        }(this.resources, pp);
        return ip.frame !== this.frame && ip.pack(pp, this.modelMeshes.instanceBatch(pp), this.modelMeshes.worlds, this.frame), ip.count
      }
      programWithModel(pp, ip, cp) {
        const Op = this.modelSlot(pp),
          op = wI(Op, pp, cp),
          Ip = this.drawDefines.modelPackKind(pp),
          Sp = Ip ? function(pp, ip, cp, Op) {
            const op = (0, Rp.s)(pp, kp.f.name),
              Ip = [];
            for (const {
                feature: Lp,
                state: Yp,
                active: Dp
              }
              of pp.features) {
              var Sp, xp;
              const pp = Dp ? null === (Sp = (xp = (0, Ji.l)(Lp)).Dy) || void 0 === Sp ? void 0 : Sp.call(xp, Yp) : void 0;
              pp && Ip.push(pp)
            }
            return {
              kind: ip,
              atlas: null !== op && void 0 !== op && op.active ? (0, kp.c)(op.state) : null,
              defines: cp,
              ...wS(Ip, Op)
            }
          }(pp, Ip, ip, Op.fragmentCode) : null;
        if (Sp && function(pp) {
            const ip = pp.defines;
            return (null === pp.atlas || !!ip.DIFFUSE && 1 === ip.DIFFUSEDIRECTUV) && !!ip.NORMAL && !ip.REFLECTION && !ip.EMISSIVEASILLUMINATION && !ip.LINKEMISSIVEWITHDIFFUSE
          }(Sp)) {
          const cp = this.modelPackProgram(pp, ip, `${op}#${Ip}#sp${this.drawDefines.modelPackVariant}`, Op, Sp);
          if (cp && !cp.failed) return cp
        }
        const xp = this.programs.get(op);
        if (xp || this.unbuildable.has(op)) return null !== xp && void 0 !== xp ? xp : null;
        let Lp;
        try {
          Lp = Jo({
            defines: AI(ip),
            vertexCode: Op.vertexCode,
            fragmentCode: Op.fragmentCode,
            pluginUniforms: Op.pluginUniforms
          })
        } catch (Yp) {
          return this.unbuildable.add(op), this.warnOnce(`build:${op}`, `could not build a program for ${pp.name}: ${String(Yp)}`), null
        }
        return this.createProgram(op, Lp, "standard")
      }
      modelPackProgram(pp, ip, cp, Op, op) {
        const Ip = this.programs.get(cp);
        if (Ip || this.unbuildable.has(cp)) return null !== Ip && void 0 !== Ip ? Ip : null;
        const Sp = this.drawDefines.modelPackVariant;
        let xp;
        try {
          const pp = function(pp) {
              return (0, pc.d)(pp, "model")
            }(Sp),
            cp = CS(pp, op, Op.vertexCode, Op.fragmentCode);
          xp = QS(Jo({
            defines: AI(ip),
            ...cp,
            pluginUniforms: Op.pluginUniforms
          }), pp, op, !!this.sunShadow)
        } catch (Dp) {
          return this.unbuildable.add(cp), this.warnOnce(`build:${cp}`, `could not build a shader pack program for ${pp.name}, which draws without the pack: ${String(Dp)}`), null
        }
        const Lp = sI(Sp, !!this.sunShadow),
          Yp = {
            group: this.packInputs.bindGroupFor(null, Lp),
            layout: ZI(this.device, {
              depth: !1,
              sunShadow: Lp
            })
          };
        return this.createProgram(cp, xp, function(pp) {
          return `standard-sp${pp}`
        }(Sp), Yp)
      }
      lineProgramFor(pp, ip, cp) {
        const Op = vp(pp, cp, ip, this.view);
        let op = this.linePrograms.get(Op);
        var Ip;
        return op || (op = this.createProgram(`lines#${Op}`, (Ip = function(pp) {
          const ip = new Map;
          for (let cp = 0; cp < Yp.length; cp++) pp & 1 << cp && ip.set(Yp[cp], !0);
          return ip
        }(Op), fo({
          defines: Ip,
          vertex: No,
          fragment: To,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Op, op)), op
      }
      createProgram(pp, ip, cp) {
        var Op;
        let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ip = this.nextProgramId++,
          Sp = `${cp}-${Ip}`,
          xp = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Lp = [{
            binding: 0,
            visibility: xp,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Ap of ip.textures) Lp.push({
          binding: Ap.binding,
          visibility: xp,
          texture: {
            viewDimension: Ap.dimension
          }
        }), Lp.push({
          binding: Ap.samplerBinding,
          visibility: xp,
          sampler: {}
        });
        const Yp = this.device.createBindGroupLayout({
            label: Sp,
            entries: Lp
          }),
          Dp = {
            key: pp,
            id: Ip,
            kind: cp,
            program: ip,
            vertex: this.device.createShaderModule({
              label: `${Sp}-vertex`,
              code: ip.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Sp}-fragment`,
              code: ip.fragment
            }),
            materialLayout: Yp,
            pipelineLayout: this.device.createPipelineLayout({
              label: Sp,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Yp, ...op ? [op.layout] : []]
            }),
            packGroup: null !== (Op = null === op || void 0 === op ? void 0 : op.group) && void 0 !== Op ? Op : null,
            failed: !1
          };
        return this.programs.set(pp, Dp), Dp
      }
      writeFrameUniforms() {
        const pp = this.frameUniforms;
        jI(this.view, pp), this.device.queue.writeBuffer(this.frameBuffer, 0, pp)
      }
      materialInstance(pp, ip) {
        let cp = this.materials.get(pp);
        if (!cp) {
          const ip = new Map;
          this.materials.set(pp, ip);
          const {
            resources: Op,
            materials: op
          } = this;
          pp.Kl.addOnce((() => {
            for (const pp of ip.values()) pp.released = !0, Op.destroyBuffer(pp.buffer);
            op.delete(pp)
          })), cp = ip
        }
        let Op = cp.get(ip.key);
        return Op || (Op = this.newMaterialInstance(pp, null, ip), cp.set(ip.key, Op)), Op
      }
      modelInstance(pp, ip) {
        const cp = this.modelSlot(pp);
        let Op = cp.instances.get(ip.key);
        return Op || (Op = this.newMaterialInstance(pp, pp, ip), cp.instances.set(ip.key, Op)), Op
      }
      modelSlot(pp) {
        var ip;
        let cp = pp.gpu[Mp.c.lite];
        return (null === (ip = cp) || void 0 === ip ? void 0 : ip.epoch) !== this.resources.epoch && (cp = new BS(this.resources, this.resources.epoch), pp.gpu[Mp.c.lite] = cp), cp
      }
      newMaterialInstance(pp, ip, cp) {
        const Op = cp.program.material.floats,
          op = new Float32Array(Op),
          Ip = new Map;
        return {
          owner: pp,
          model: ip,
          program: cp,
          data: op,
          uploaded: new Float32Array(Op).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${pp.name}-uniforms`,
            size: Math.max(16, 4 * Op),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Ip,
          ubo: new uI(cp.program.material.slots, op, Ip),
          bindGroup: null,
          bound: new Array(2 * cp.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(pp) {
        var ip;
        const cp = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Fo + go,
            fragment: Fo + Go,
            attributes: [],
            material: no,
            textures: []
          }, "earthSky"),
          Op = this.earthSkyUniforms ??= this.newMaterialInstance(JS, null, cp);
        this.earthSkyFrom !== pp && (this.earthSkyFrom = pp, Op.data.fill(0)), iI(Op.ubo, pp, this.view);
        const op = this.vertexInputs(cp, JS, "earthSky", cp, null);
        if (cp.failed || !op || !this.bindMaterial(Op, !1)) return;
        const Ip = null !== (ip = op.state) && void 0 !== ip ? ip : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Sp = this.makeDraw(cp, op, Ip, Op, 1);
        Sp.count = bo.length;
        const xp = cI(pp, this.view);
        Sp.slotOffset = this.writeMeshSlot(xp, 1), this.lists.skyDraws.push(Sp)
      }
      uploadIfChanged(pp) {
        const {
          data: ip,
          uploaded: cp
        } = pp;
        for (let Op = 0; Op < ip.length; Op++)
          if (ip[Op] !== cp[Op]) return cp.set(ip), void this.device.queue.writeBuffer(pp.buffer, 0, ip)
      }
      bindMaterial(pp, ip) {
        return pp.frame !== this.frame && (pp.frame = this.frame, ip || this.uploadIfChanged(pp), pp.bindable = this.bindTextures(pp)), pp.bindable
      }
      bindTextures(pp) {
        const {
          program: ip,
          bound: cp
        } = pp, Op = ip.program.textures;
        let op = !pp.bindGroup,
          Ip = !0;
        for (let Sp = 0; Sp < Op.length; Sp++) {
          const ip = pp.textures.get(Op[Sp].name),
            xp = ip ? this.resources.boundTexture(ip) : null;
          xp ? cp[2 * Sp] === xp.view && cp[2 * Sp + 1] === xp.sampler || (cp[2 * Sp] = xp.view, cp[2 * Sp + 1] = xp.sampler, op = !0) : (ip || pp.ubo.expected.has(Op[Sp].name) || this.warnOnce(`texture:${pp.owner.name}:${Op[Sp].name}`, `${pp.owner.name} has no ${Op[Sp].name}`), Ip = !1)
        }
        if (!Ip) return op && (pp.bindGroup = null), !1;
        if (op) {
          const op = [{
            binding: 0,
            resource: {
              buffer: pp.buffer
            }
          }];
          for (let pp = 0; pp < Op.length; pp++) op.push({
            binding: Op[pp].binding,
            resource: cp[2 * pp]
          }), op.push({
            binding: Op[pp].samplerBinding,
            resource: cp[2 * pp + 1]
          });
          pp.bindGroup = this.device.createBindGroup({
            label: `${pp.owner.name}-material`,
            layout: ip.materialLayout,
            entries: op
          })
        }
        return !0
      }
      writeMeshSlot(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, pp, ip, cp), this.slotCount++ * Po
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(pp, ip, cp, Op, op) {
        let Ip = this.inputs.get(pp);
        if (!Ip || Ip.program !== Op || !CI(ip, Ip, this.resources, op)) {
          var Sp;
          if (Ip = null !== (Sp = this.vertexLayouts.resolveInputs(ip, cp, Op, op)) && void 0 !== Sp ? Sp : void 0, !Ip) return null;
          this.inputs.set(pp, Ip)
        }
        return this.withGpuBuffers(Ip)
      }
      meshInputs(pp, ip, cp) {
        const Op = this.inputs.get(pp);
        if (Op && this.inputsStamped(Op, pp, cp, ip)) return this.withGpuBuffers(Op);
        const op = pp.owner,
          Ip = WI(pp),
          Sp = this.vertexInputs(pp, op, op.name, ip, Ip);
        return Sp && (Sp.geometry = yI(pp), Sp.instanceLayout = this.drawDefines.instanceLayout(op, cp)), Sp
      }
      inputsStamped(pp, ip, cp, Op) {
        return function(pp, ip, cp, Op) {
          return pp.program === cp && pp.geometry === yI(ip) && pp.instanceLayout === Op
        }(pp, ip, Op, this.drawDefines.instanceLayout(ip.owner, cp))
      }
      withGpuBuffers(pp) {
        return pS(pp, this.resources, this.zeroBuffer) ? pp : null
      }
      instanceBuffersFit(pp, ip, cp) {
        const Op = cS(ip, cp, this.resources, this.zeroBuffer);
        if (Op) {
          const op = ip.ends[Op.index] - ip.offsets[Op.index] + ip.B_[Op.index];
          return this.warnOnce(`overrun:${pp}`, `${pp} draws ${cp} instances from a ${op}-byte buffer (${Op.needed} needed)`), !1
        }
        return !0
      }
      createBinding(pp, ip, cp, Op) {
        const op = `${ip._colorFormat}|${ip._depthStencilFormat}|${ip._depthCompare}|${ip._sampleCount}`,
          Ip = Ei(this.device, ip);
        if (pp === this.skyLastRenderable) {
          let cp = null;
          return {
            renderable: pp,
            pipeline: Ip,
            draw: pp => cp ? this.drawSky(pp, ip, op, cp) : 0,
            update: pp => {
              cp = pp
            }
          }
        }
        return {
          renderable: pp,
          pipeline: Ip,
          draw: pp => (Op ? Op.execute(pp, ip, op) : 0) + this.drawList(pp, ip, op, cp)
        }
      }
      drawSky(pp, ip, cp, Op) {
        const op = this.lists.skyDraws,
          Ip = op.length > 0;
        if (Ip) {
          var Sp;
          const cp = (null !== (Sp = ip._depthCompare) && void 0 !== Sp ? Sp : Ri).startsWith("greater") ? 0 : 1;
          pp.setViewport(0, 0, Op.targetWidth, Op.targetHeight, cp, cp)
        }
        const xp = this.drawList(pp, ip, cp, op);
        return Ip && pp.setViewport(0, 0, Op.targetWidth, Op.targetHeight, 0, 1), xp
      }
      drawList(pp, ip, cp, Op) {
        let op = 0;
        const Ip = this.binder;
        Ip.reset();
        for (const Sp of Op) {
          const Op = this.pipelineFor(Sp, ip, cp);
          Op && (Ip.bind(pp, Sp, Op, this.meshSlots.bindGroup, Sp.slotOffset), Sp.indexBuffer ? pp.drawIndexed(Sp.count, Sp.instances, Sp.first, 0, 0) : pp.draw(Sp.count, Sp.instances, Sp.first, 0), op++)
        }
        return op
      }
      pipelineFor(pp, ip, cp) {
        var Op, op;
        if (pp.program.failed) return null;
        const Ip = pp.inputs;
        if (Ip.pipeline && Ip.pipelineTarget === cp) return Ip.pipeline;
        const Sp = `${pp.pipelineKey}|${cp}`,
          xp = this.pipelines.get(Sp);
        if (void 0 !== xp) return xp && (Ip.pipeline = xp, Ip.pipelineTarget = cp), xp || null;
        this.pipelines.set(Sp, null);
        const {
          program: Lp,
          layout: Yp,
          state: Dp
        } = pp, Ap = {
          label: `standard-${Lp.id}`,
          layout: Lp.pipelineLayout,
          vertex: {
            module: Lp.vertex,
            entryPoint: "main",
            buffers: Yp.buffers
          },
          fragment: di({
            module: Lp.fragment,
            entryPoint: "main"
          }, ip, Dp.blend, Dp.colourWrite),
          depthStencil: ip._depthStencilFormat ? {
            format: ip._depthStencilFormat,
            depthCompare: null !== (Op = null !== (op = Dp.depthCompare) && void 0 !== op ? op : ip._depthCompare) && void 0 !== Op ? Op : Ri,
            depthWriteEnabled: Dp.depthWrite,
            depthBias: Dp.depthBias,
            depthBiasSlopeScale: Dp.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: ip._sampleCount
          },
          primitive: {
            topology: Dp.topology,
            frontFace: Dp.frontFace,
            cullMode: Dp.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Ap).then((pp => {
          this.compiling--, this.pipelines.set(Sp, pp)
        }), (pp => {
          this.compiling--, this.reportFailure(Lp, Sp, pp)
        })), null
      }
      forEachSunShadowCaster(pp) {
        const ip = this.caster,
          cp = (cp, Op, op) => {
            const Ip = cp.unit && function(pp) {
              const ip = pp.material.model;
              return null !== ip && (ip.lifeform || ip.item) && ip.castsSunShadow && "triangle-list" === pp.state.topology
            }(cp) ? WI(cp.unit) : null;
            if (!Ip) return;
            const Sp = cp.unit.owner;
            switch (ip.geometry = Ip, ip.skip = Sp.noSunShadowVertices, ip.indexed = null !== cp.indexBuffer, ip.first = cp.first, ip.count = cp.count, ip.WP = Op, ip.worldAt = op, ip.instances = null, ip.instanceCount = 1, ip.thin = !1, YI(Sp)) {
              case "thin": {
                const pp = Sp._thinInstanceDataStorage.matrixData;
                if (!pp) return;
                ip.instances = pp, ip.instanceCount = Math.min(cp.instances, pp.length / 16), ip.thin = !0;
                break
              }
              case "instanced": {
                const pp = this.resources.batchUploads.get(Sp);
                if (!pp || pp.frame !== this.frame || !this.writeBatchCasters(pp)) return;
                break
              }
            }
            pp(ip)
          };
        for (const Op of this.lists.opaqueDraws) cp(Op, this.meshSlots.data, Op.slotOffset / 4);
        this.thinBundle.forEachDrawn(cp)
      }
      writeBatchCasters(pp) {
        const {
          caster: ip
        } = this, cp = pp.packedMatrices, Op = pp.count;
        ip.instances = cp, ip.instanceCount = Op;
        let op = -1;
        for (let Ip = 0; Ip < Op; Ip++) {
          const ip = fS(pp.packedRowMesh(Ip));
          ip && op < 0 ? (this.casterWorlds.length < 16 * Op && (this.casterWorlds = new Float32Array(cp.length)), this.casterWorlds.set(cp.subarray(0, 16 * Ip)), op = Ip) : !ip && op >= 0 && (this.casterWorlds.set(cp.subarray(16 * Ip, 16 * Ip + 16), 16 * op), op++)
        }
        return op >= 0 && (ip.instances = this.casterWorlds, ip.instanceCount = op), ip.instanceCount > 0
      }
      async reportFailure(pp, ip, cp) {
        const Op = [];
        let op = !0;
        for (const [Ip, Sp] of [
            ["vertex", pp.vertex],
            ["fragment", pp.fragment]
          ]) {
          const pp = await Sp.getCompilationInfo();
          for (const ip of pp.messages) op &&= "error" !== ip.type, Op.push(`${Ip}:${ip.lineNum}:${ip.linePos} ${ip.type}: ${ip.message}`)
        }
        if (op && !pp.packGroup) return this.pipelines.set(ip, !1), console.error(`Lite: pipeline ${ip} failed`, cp), void Pi(this.device, "mesh", pp.kind, cp);
        pp.failed || (pp.failed = !0, console.error(`Lite: program ${pp.id} failed`, cp, Op.join("\n"), {
          program: pp.program,
          key: pp.key
        }), Pi(this.device, "mesh", pp.kind, cp, op ? null : Op[0]))
      }
    }

    function fS(pp) {
      var ip, cp;
      const Op = null === (ip = pp.MJ) || void 0 === ip || null === (cp = ip.aShaderPackItem) || void 0 === cp ? void 0 : cp.x;
      return void 0 !== Op && 0 !== (Op & li.h)
    }
    var bS = cp(41933),
      hS = cp(41937),
      aS = cp(41944),
      nS = cp(41898);
    const FS = [0, 3, 1, 4, 2, 5];

    function gS(pp, ip, cp, Op, op) {
      const Ip = cp[0].width;
      try {
        return op ? function(pp, ip, cp) {
          const Op = (0, nS.d)(pp, cp, cp, 6);
          for (let op = 0; op < 6; op++)(0, nS.g)(pp, Op, op, ip[FS[op]], {
            invertY: !1
          });
          return Op.texture
        }(pp, cp, Ip) : function(pp, ip, cp, Op) {
          const op = pp.createTexture({
            label: "sink-cube",
            size: {
              width: cp,
              height: cp,
              depthOrArrayLayers: 6
            },
            format: Op,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Ip = 0; Ip < 6; Ip++) pp.queue.copyExternalImageToTexture({
            source: ip[FS[Ip]]
          }, {
            texture: op,
            origin: {
              x: 0,
              y: 0,
              z: Ip
            }
          }, {
            width: cp,
            height: cp
          });
          return op
        }(ip, cp, Ip, 1 === Op ? "r8unorm" : "rgba8unorm")
      } finally {
        GS(cp)
      }
    }

    function GS(pp) {
      for (const ip of null !== pp && void 0 !== pp ? pp : []) null === ip || void 0 === ip || ip.close()
    }
    async function rS(pp) {
      const ip = [],
        cp = [];
      if (await Promise.all(pp.map(((pp, Op) => (ip[Op] = null, pp.then((pp => {
          ip[Op] = pp
        }), (pp => {
          cp.push(pp)
        })))))), cp.length > 0) throw GS(ip), cp[0];
      return ip
    }
    class ZS {
      constructor(pp) {
        this.TA = pp, this.starts = [], this.lengths = [], this.used = 0, pp > 0 && (this.starts.push(0), this.lengths.push(pp))
      }
      allocate(pp) {
        const {
          starts: ip,
          lengths: cp
        } = this;
        for (let Op = 0; Op < ip.length; Op++) {
          if (cp[Op] < pp) continue;
          const op = ip[Op];
          return cp[Op] === pp ? (ip.splice(Op, 1), cp.splice(Op, 1)) : (ip[Op] += pp, cp[Op] -= pp), this.used += pp, op
        }
        return -1
      }
      free(pp, ip) {
        this.used -= ip;
        const cp = Math.min(pp + ip, this.TA);
        cp > pp && this.release(pp, cp - pp)
      }
      grow(pp) {
        const ip = this.TA;
        this.TA = pp, this.release(ip, pp - ip)
      }
      truncate(pp) {
        const {
          starts: ip,
          lengths: cp
        } = this;
        for (let Op = ip.length - 1; Op >= 0 && ip[Op] + cp[Op] > pp; Op--) ip[Op] >= pp ? (ip.splice(Op, 1), cp.splice(Op, 1)) : cp[Op] = pp - ip[Op];
        this.TA = pp
      }
      release(pp, ip) {
        const {
          starts: cp,
          lengths: Op
        } = this;
        let op = 0,
          Ip = cp.length;
        for (; op < Ip;) {
          const ip = op + Ip >> 1;
          cp[ip] < pp ? op = ip + 1 : Ip = ip
        }
        const Sp = op,
          xp = Sp > 0 && cp[Sp - 1] + Op[Sp - 1] === pp,
          Lp = Sp < cp.length && pp + ip === cp[Sp];
        xp && Lp ? (Op[Sp - 1] += ip + Op[Sp], cp.splice(Sp, 1), Op.splice(Sp, 1)) : xp ? Op[Sp - 1] += ip : Lp ? (cp[Sp] = pp, Op[Sp] += ip) : (cp.splice(Sp, 0, pp), Op.splice(Sp, 0, ip))
      }
    }
    const zS = 256;
    class sS {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = pp, this.onReplaced = ip, this.mergeGap = cp, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.By = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const op = Math.max(zS, Math.ceil(Op / zS) * zS);
        this.bytes = new Uint8Array(op), this.words = new Uint32Array(this.bytes.buffer), this.By = new ZS(op / zS)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(pp) {
        return Math.max(1, Math.ceil(pp / zS)) * zS
      }
      allocate(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp;
        const Op = sS.slotBytes(pp),
          op = Op / zS;
        let Ip = this.By.allocate(op);
        Ip < 0 && (this.grow(this.By.TA + op), Ip = this.By.allocate(op));
        const Sp = Ip * zS;
        return this.growTo(Sp + Math.max(cp, Op)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Sp, Sp + Op), ip && this.bytes.set(new Uint8Array(ip.buffer, ip.byteOffset, Math.min(ip.byteLength, Op)), Sp), this.markDirty(Sp, Sp + Op), Sp
      }
      growTo(pp) {
        const ip = Math.ceil(pp / zS);
        ip > this.By.TA && this.grow(ip)
      }
      free(pp, ip) {
        this.freed.push(pp, ip)
      }
      write(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Op <= 0) return;
        Op <= 1024 && 0 === (3 & (pp | cp | Op)) ? this.copyWords(pp >> 2, ip.buffer, cp >> 2, Op >> 2) : this.bytes.set(new Uint8Array(ip.buffer, cp, Op), pp);
        let Ip = pp + Op;
        if (op) {
          const ip = pp + 4 * Math.ceil(Op / 4);
          this.bytes.fill(0, Ip, ip), Ip = ip
        }
        this.markDirty(pp, Ip)
      }
      copyWords(pp, ip, cp, Op) {
        let op = this.sourceWords.get(ip);
        op || (op = new Uint32Array(ip, 0, ip.byteLength >> 2), this.sourceWords.set(ip, op));
        const Ip = this.words;
        for (let Sp = 0; Sp < Op; Sp++) Ip[pp + Sp] = op[cp + Sp]
      }
      move(pp, ip, cp) {
        this.bytes.copyWithin(ip, pp, pp + cp), this.markDirty(ip, ip + cp)
      }
      flush() {
        for (const ip of this.retired) this.onReplaced(ip), ip.destroy();
        this.retired.length = 0;
        const pp = this.dirtyStarts.length;
        if (pp > 0) {
          const {
            dirtyStarts: ip,
            dirtyEnds: cp,
            order: Op
          } = this;
          Op.length = pp;
          for (let xp = 0; xp < pp; xp++) Op[xp] = xp;
          pp > 1 && Op.sort(((pp, cp) => ip[pp] - ip[cp]));
          const op = this.mergeGap;
          let Ip = ip[Op[0]],
            Sp = cp[Op[0]];
          for (let xp = 1; xp < pp; xp++) {
            const pp = Op[xp];
            ip[pp] - Sp <= op ? Sp = Math.max(Sp, cp[pp]) : (this.send(Ip, Sp), Ip = ip[pp], Sp = cp[pp])
          }
          this.send(Ip, Sp), ip.length = 0, cp.length = 0
        }
        this.holding = !1
      }
      Rk() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const pp = this.freed;
        for (let ip = 0; ip < pp.length; ip += 2) this.By.free(pp[ip] / zS, pp[ip + 1] / zS);
        pp.length = 0
      }
      send(pp, ip) {
        this.device.queue.writeBuffer(this.gpu, pp, this.bytes.buffer, pp, ip - pp);
        for (const cp of this.replaced) {
          const Op = Math.min(ip, cp.size);
          Op > pp && this.device.queue.writeBuffer(cp, pp, this.bytes.buffer, pp, Op - pp)
        }
      }
      markDirty(pp, ip) {
        pp &= -4, ip = ip + 3 & -4, this.holding ? (this.dirtyStarts.push(pp), this.dirtyEnds.push(ip)) : this.send(pp, ip)
      }
      grow(pp) {
        const ip = this.By.TA,
          cp = Math.max(2 * ip, pp),
          Op = new Uint8Array(cp * zS);
        Op.set(this.bytes);
        const op = this.gpu;
        this.gpu = this.createGpu(Op.byteLength), this.bytes = Op, this.words = new Uint32Array(Op.buffer), this.By.grow(cp), op && (this.replaced.push(op), this.onReplaced(op)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ip * zS)
      }
      createGpu(pp) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: pp,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function KS(pp) {
      return Array.isArray(pp) ? new Float32Array(pp) : pp
    }

    function VS(pp, ip, cp, Op, op) {
      const Ip = rp(op),
        Sp = Math.min(op, Op.byteLength);
      if (Ip === Sp && Op.byteOffset % 4 === 0) return void pp.queue.writeBuffer(ip, cp, Op.buffer, Op.byteOffset, Ip);
      const xp = new Uint8Array(Ip);
      xp.set(new Uint8Array(Op.buffer, Op.byteOffset, Sp)), pp.queue.writeBuffer(ip, cp, xp)
    }

    function px(pp, ip, cp) {
      const Op = "linear",
        op = "nearest";
      let Ip = op,
        Sp = op,
        xp = "nearest",
        Lp = !ip;
      switch (pp) {
        case 11:
          Ip = Op, Sp = Op;
          break;
        case 3:
          Ip = Op, Sp = Op, xp = ip ? "linear" : "nearest";
          break;
        case 8:
          xp = ip ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Sp = Op;
          break;
        case 6:
          Sp = Op, xp = ip ? "linear" : "nearest";
          break;
        case 7:
          Sp = Op, Lp = !0;
          break;
        case 9:
          Ip = Op;
          break;
        case 10:
          Ip = Op, xp = ip ? "linear" : "nearest";
          break;
        case 2:
          Ip = Op, Sp = Op, cp > 1 ? (xp = "linear", Lp = !1) : Lp = !0;
          break;
        case 12:
          Ip = Op, Lp = !0;
          break;
        default:
          Lp = !0
      }
      return cp > 1 && !Lp ? {
        magFilter: Op,
        minFilter: Op,
        mipmapFilter: "linear",
        maxAnisotropy: cp
      } : {
        magFilter: Ip,
        minFilter: Sp,
        mipmapFilter: xp,
        ...Lp ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function ix(pp) {
      return 0 === pp ? "clamp-to-edge" : 2 === pp ? "mirror-repeat" : "repeat"
    }
    class cx {
      constructor(pp, ip) {
        let {
          vertexArena: cp = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = pp, this.device = ip, this.buffers = new WeakMap, this.S_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = cp ? this.createArena() : null
      }
      createArena() {
        return new sS(this.device, (pp => {
          var ip;
          null === (ip = this.onDestroy) || void 0 === ip || ip.call(this, pp), this.gpuBuffersVersion++
        }))
      }
      rebind(pp, ip) {
        this.engine = pp, this.device = ip, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const cp of this.liveUploads) cp.rebind();
        for (const cp of this.rebindWaiters.splice(0)) cp()
      }
      flushUploads() {
        var pp;
        null === (pp = this.arena) || void 0 === pp || pp.flush()
      }
      endUploadFrame() {
        var pp;
        null === (pp = this.arena) || void 0 === pp || pp.Rk()
      }
      vertexBufferCreated(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cp ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(pp);
        const op = KS(ip);
        pp.TA = op.byteLength, this.buffers.set(pp, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: cp && null !== this.arena,
          pending: op,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Op
        })
      }
      vertexBufferUpdated(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        const op = this.buffers.get(pp);
        if (!op) return;
        const Ip = KS(ip),
          Sp = void 0 === Op ? Ip.byteLength : Math.min(Op, Ip.byteLength);
        this.update(op, Ip, cp, Sp)
      }
      vertexBufferFloatsUpdated(pp, ip, cp, Op) {
        const op = this.buffers.get(pp);
        if (!op) return;
        const Ip = cp * Float32Array.BYTES_PER_ELEMENT,
          Sp = (Op - cp) * Float32Array.BYTES_PER_ELEMENT;
        op.slot >= 0 && Sp > 0 && Ip + Sp <= op.size ? this.writeSlot(op, Ip, ip, ip.byteOffset + Ip, Sp, !1) : op.gpu && Sp > 0 && Ip + Sp <= op.gpu.size ? this.device.queue.writeBuffer(op.gpu, Ip, ip.buffer, ip.byteOffset + Ip, Sp) : this.update(op, ip.subarray(cp, Op), Ip, Sp)
      }
      indexBufferCreated(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(pp);
        const Op = function(pp) {
          if (pp instanceof Uint16Array || pp instanceof Uint32Array) return pp;
          for (let ip = 0; ip < pp.length; ip++)
            if (pp[ip] >= 65535) return new Uint32Array(pp);
          return new Uint16Array(pp)
        }(ip);
        pp.is32Bits = 4 === Op.BYTES_PER_ELEMENT, pp.TA = Op.byteLength, this.buffers.set(pp, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Op,
          ownsPending: Op !== ip,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: cp
        })
      }
      bufferDeleted(pp) {
        const ip = this.buffers.get(pp);
        null !== ip && void 0 !== ip && ip.gpu ? (this.destroyBuffer(ip.gpu), this.gpuBuffersVersion++) : ip && ip.slot >= 0 && (this.arena.free(ip.slot, ip.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(pp)
      }
      update(pp, ip, cp, Op) {
        if (pp.slot >= 0) this.updateSlot(pp, ip, cp, Op);
        else if (pp.gpu) {
          if (cp + rp(Op) > pp.gpu.size) {
            const ip = this.device.createBuffer({
                label: pp.label,
                size: rp(Math.max(2 * pp.gpu.size, cp + Op)),
                usage: pp.usage | GPUBufferUsage.COPY_SRC
              }),
              op = this.device.createCommandEncoder();
            op.copyBufferToBuffer(pp.gpu, 0, ip, 0, pp.gpu.size), this.device.queue.submit([op.finish()]), this.destroyBuffer(pp.gpu), this.gpuBuffersVersion++, pp.gpu = ip
          }
          VS(this.device, pp.gpu, cp, ip, Op)
        } else {
          const Ip = new Uint8Array(ip.buffer, ip.byteOffset, Op),
            Sp = pp.pending;
          if (Sp && pp.ownsPending && cp + Op <= Sp.byteLength) new Uint8Array(Sp.buffer, Sp.byteOffset, Sp.byteLength).set(Ip, cp);
          else if (Sp && 0 === cp && Op === Sp.byteLength && ip.byteLength === Op) pp.pending = ip, pp.ownsPending = !1;
          else {
            var op;
            const ip = new Uint8Array(Math.max(null !== (op = null === Sp || void 0 === Sp ? void 0 : Sp.byteLength) && void 0 !== op ? op : 0, cp + Op));
            Sp && ip.set(new Uint8Array(Sp.buffer, Sp.byteOffset, Sp.byteLength)), ip.set(Ip, cp), pp.pending = ip, pp.ownsPending = !0
          }
        }
      }
      updateSlot(pp, ip, cp, Op) {
        const op = this.arena;
        cp + rp(Op) > pp.size && (pp.size = rp(Math.max(2 * pp.size, cp + Op)), op.growTo(pp.slot + pp.size), this.gpuBuffersVersion++), 0 === Op ? this.writeSlot(pp, cp, ox, 0, 4, !1) : this.writeSlot(pp, cp, ip, ip.byteOffset, Op, !0)
      }
      writeSlot(pp, ip, cp, Op, op, Ip) {
        const Sp = ip + (Ip ? rp(op) : op);
        Sp > pp.slotBytes && this.moveSlot(pp, Sp), this.arena.write(pp.slot + ip, cp, Op, op, Ip)
      }
      moveSlot(pp, ip) {
        const cp = this.arena,
          Op = sS.slotBytes(Math.max(ip, Math.min(2 * pp.slotBytes, pp.size))),
          op = cp.allocate(Op, null, pp.size);
        cp.move(pp.slot, op, pp.slotBytes), cp.free(pp.slot, pp.slotBytes), pp.slot = op, pp.slotBytes = Op, this.gpuBuffersVersion++
      }
      cover(pp, ip) {
        const cp = this.buffers.get(pp);
        if (!cp || cp.slot < 0) return !1;
        const Op = Math.min(ip, cp.size);
        return !(Op <= cp.slotBytes) && (this.moveSlot(cp, Op), !0)
      }
      destroyBuffer(pp) {
        var ip;
        null === (ip = this.onDestroy) || void 0 === ip || ip.call(this, pp), pp.destroy()
      }
      gpuBuffer(pp) {
        const ip = this.buffers.get(pp);
        if (!ip) return null;
        if (ip.slot >= 0) return this.arena.buffer;
        if (ip.arena && ip.pending) {
          const pp = ip.pending,
            cp = this.arena;
          return ip.size = rp(pp.byteLength), ip.slotBytes = sS.slotBytes(function(pp) {
            const ip = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength);
            let cp = ip.length;
            if (pp.byteOffset % 4 === 0) {
              for (; cp % 4 !== 0 && 0 === ip[cp - 1];) cp--;
              if (cp % 4 === 0) {
                const ip = new Uint32Array(pp.buffer, pp.byteOffset, cp / 4);
                let Op = ip.length;
                for (; Op > 0 && 0 === ip[Op - 1];) Op--;
                cp = 4 * Op
              }
            }
            for (; cp > 0 && 0 === ip[cp - 1];) cp--;
            return cp
          }(pp)), ip.slot = cp.allocate(ip.slotBytes, pp, ip.size), ip.pending = null, cp.buffer
        }
        if (!ip.gpu && ip.pending) {
          const pp = ip.pending;
          ip.gpu = this.device.createBuffer({
            label: ip.label,
            size: rp(pp.byteLength),
            usage: ip.usage
          }), VS(this.device, ip.gpu, 0, pp, pp.byteLength), ip.pending = null
        }
        return ip.gpu
      }
      gpuOffset(pp) {
        var ip, cp;
        const Op = null !== (ip = null === (cp = this.buffers.get(pp)) || void 0 === cp ? void 0 : cp.slot) && void 0 !== ip ? ip : -1;
        return Op < 0 ? 0 : Op
      }
      gpuEnd(pp) {
        var ip, cp;
        const Op = this.buffers.get(pp);
        return Op ? Op.slot >= 0 ? Op.slot + Op.size : null !== (ip = null === (cp = Op.gpu) || void 0 === cp ? void 0 : cp.size) && void 0 !== ip ? ip : 0 : 0
      }
      vertexInput(pp, ip, cp) {
        var Op, op, Ip, Sp;
        return null !== (Op = null !== (op = cp && this.modelInput(cp, ip)) && void 0 !== op ? op : null === (Ip = null !== (Sp = this.S_.get(pp)) && void 0 !== Sp ? Sp : this.batchUploads.get(pp)) || void 0 === Ip ? void 0 : Ip.inputs[ip]) && void 0 !== Op ? Op : null
      }
      modelInput(pp, ip) {
        const cp = this.geometrySlot(pp);
        let Op = cp.inputs.get(ip);
        if (void 0 === Op) {
          const op = pp.vertexAttributes.find((pp => pp.kind === ip));
          Op = op ? new wi(this.modelKey(cp, op.data, !1), op.offset, op.stride, op.components, !1, op.glType, op.isNormalized) : null, cp.inputs.set(ip, Op)
        }
        return Op
      }
      modelIndex(pp) {
        return pp.indexData && this.modelKey(this.geometrySlot(pp), pp.indexData, !0)
      }
      geometrySlot(pp) {
        var ip;
        let cp = pp.gpu[Mp.c.lite];
        if ((null === (ip = cp) || void 0 === ip ? void 0 : ip.epoch) !== this.epoch) {
          const ip = new Map,
            Op = () => {
              for (const pp of ip.values()) this.bufferDeleted(pp)
            },
            op = pp => {
              const cp = ip.get(pp);
              cp && this.vertexBufferUpdated(cp, pp)
            };
          cp = {
            keys: ip,
            inputs: new Map,
            release: Op,
            updated: op,
            epoch: this.epoch
          }, pp.gpu[Mp.c.lite] = cp
        }
        return cp
      }
      modelKey(pp, ip, cp) {
        let Op = pp.keys.get(ip);
        if (!Op) {
          if (cp) {
            const pp = {
              TA: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(pp, ip, "model-indices"), Op = pp
          } else Op = {
            TA: 0
          }, this.vertexBufferCreated(Op, ip, !1, "model-vertices");
          pp.keys.set(ip, Op)
        }
        return Op
      }
      indexFormat(pp) {
        return pp.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(pp, ip) {
        --pp.refs > 0 || (this.releaseTexture(pp), GS(pp.images), null !== ip && this.textures.delete(ip))
      }
      load(pp, ip) {
        const {
          epoch: cp
        } = this, Op = ip.decoded = async function(pp) {
          if ("cube" === pp.kind) return async function(pp) {
            if (6 !== pp.length) throw new Error(`${pp.length} files where six faces were expected`);
            const ip = await rS(pp.map((pp => ii(pp)))),
              cp = ip[0].width;
            return rS(ip.map((async pp => {
              if (pp.width === cp && pp.height === cp) return pp;
              try {
                return await createImageBitmap(pp, {
                  ...Kp,
                  resizeWidth: cp,
                  resizeHeight: cp
                })
              } finally {
                pp.close()
              }
            })))
          }(pp.files);
          if ("data" === pp.kind && pp.data) return [await createImageBitmap(new Blob([pp.data]), Kp)];
          return [await ii(Ox(pp))]
        }(pp.source).then((pp => {
          0 === ip.refs || cp !== this.epoch ? GS(pp) : ip.images = pp
        }));
        this.track(ip, Ox(pp.source), Op, (() => {
          ip.wanted && !ip.failed && ip.refs > 0 && this.upload(pp, ip)
        }))
      }
      canvasUpdated(pp, ip, cp) {
        const {
          state: Op
        } = this.textureSlot(pp);
        Op.dynamicSource = {
          invertY: ip,
          premultiplied: cp
        }, Op.dynamic && this.pushDynamic(pp.source, Op)
      }
      async atlasArrays(pp) {
        const {
          device: ip,
          epoch: cp
        } = this;
        let Op;
        try {
          Op = await Oi(ip, pp)
        } catch (Ip) {
          if (cp === this.epoch) {
            if (!Ai(ip)) throw Ip;
            await new Promise((pp => {
              this.rebindWaiters.push(pp)
            }))
          }
          return this.atlasArrays(pp)
        }
        if (Op.forEach(((ip, cp) => {
            this.atlasSources.has(ip) || this.atlasSources.set(ip, {
              sources: pp,
              index: cp,
              stride: Op[0].layers
            })
          })), cp !== this.epoch) return Op;
        const op = (0, bS.c)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const Sp of Op) this.atlasBindings.has(Sp) || this.atlasBindings.set(Sp, {
          view: Sp.texture.createView({
            dimension: "2d-array"
          }),
          sampler: op
        });
        return Op
      }
      boundTexture(pp) {
        const ip = this.atlasBindings.get(pp);
        if (ip) return ip;
        const cp = this.atlasSources.get(pp);
        if (cp) return this.rebuildAtlas(pp, cp), null;
        const Op = pp;
        if (Op.released) return null;
        const op = this.textureSlot(Op, !0),
          {
            state: Ip
          } = op;
        if (!Ip.view && (Ip.wanted = !0, Ip.loading || Ip.failed || this.upload(Op, Ip), !Ip.view)) return null;
        const Sp = this.chosenSampler(Op, op),
          xp = op.bound;
        return xp && xp.view === Ip.view && xp.sampler === Sp ? xp : (op.bound = {
          view: Ip.view,
          sampler: Sp
        }, op.bound)
      }
      rebuildAtlas(pp, ip) {
        let {
          sources: cp,
          index: Op,
          stride: op
        } = ip;
        if (this.atlasRebuilds.has(pp)) return;
        this.atlasRebuilds.add(pp);
        const {
          epoch: Ip
        } = this;
        this.atlasArrays(cp).then((ip => {
          ip[0].layers === op && ip[Op] ? Ip === this.epoch && this.atlasBindings.set(pp, this.atlasBindings.get(ip[Op])) : console.error(`Lite: the new device splits the atlas ${Vp(cp.urls[0])} into other arrays than its materials read`)
        }), (pp => {
          console.error(`Lite: could not build the atlas ${Vp(cp.urls[0])} again on a new device`, pp)
        }))
      }
      textureLoaded(pp) {
        var ip, cp;
        return null !== (ip = null === (cp = this.heldSlot(pp)) || void 0 === cp ? void 0 : cp.state.decoded) && void 0 !== ip ? ip : null
      }
      textureFailed(pp) {
        var ip;
        return !0 === (null === (ip = this.heldSlot(pp)) || void 0 === ip ? void 0 : ip.state.failed)
      }
      heldSlot(pp) {
        const ip = pp.gpu[Mp.c.lite];
        return (null === ip || void 0 === ip ? void 0 : ip.epoch) === this.epoch ? ip : void 0
      }
      chosenSampler(pp, ip) {
        const {
          samplingMode: cp,
          wrapU: Op,
          wrapV: op
        } = pp.sampler, Ip = ip.state.hasMips, Sp = function(pp, ip) {
          const {
            bilinear: cp,
            trilinear: Op
          } = Mp.g;
          return !ip && pp !== cp || 11 !== pp && pp !== Op && pp !== cp ? 1 : 4
        }(cp, Ip), xp = ip.sampler;
        if (xp && xp.samplingMode === cp && xp.hasMips === Ip && xp.anisotropy === Sp && xp.wrapU === Op && xp.wrapV === op) return xp.sampler;
        const Lp = this.samplerFor(cp, Ip, Sp, Op, op);
        return ip.sampler = {
          samplingMode: cp,
          hasMips: Ip,
          anisotropy: Sp,
          wrapU: Op,
          wrapV: op,
          sampler: Lp
        }, Lp
      }
      releaseTexture(pp) {
        var ip, cp;
        pp.view && (null === (cp = this.onDestroy) || void 0 === cp || cp.call(this, pp.view));
        null === (ip = pp.destroy) || void 0 === ip || ip.call(pp)
      }
      textureSlot(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = pp.gpu[Mp.c.lite];
        if ((null === cp || void 0 === cp ? void 0 : cp.epoch) === this.epoch) return cp;
        const Op = function(pp) {
          let {
            source: ip,
            sampler: cp
          } = pp;
          return "canvas" === ip.kind ? null : `${ip.kind}|${Ox(ip)}|${cp.noMipmap}|${cp.samplingMode}|${cp.invertY}`
        }(pp);
        let op = null === Op ? void 0 : this.textures.get(Op);
        var Ip;
        op || (op = {
          refs: 0,
          view: null,
          destroy: null,
          loading: !1,
          decoded: null,
          failed: !1,
          wanted: !1,
          hasMips: !1,
          images: null,
          dynamic: null,
          dynamicSource: null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.state.dynamicSource) && void 0 !== Ip ? Ip : null
        }, null !== Op && (this.textures.set(Op, op), this.load(pp, op), ip && !cp && this.firstBindDecodes++));
        op.refs++;
        const Sp = op,
          {
            epoch: xp
          } = this,
          Lp = {
            state: op,
            bound: null,
            sampler: null,
            release: () => {
              xp === this.epoch && this.releaseSlot(Sp, Op)
            },
            epoch: xp
          };
        return pp.gpu[Mp.c.lite] = Lp, Lp
      }
      samplerFor(pp, ip, cp, Op, op) {
        const Ip = `${pp}|${ip}|${cp}|${Op}|${op}`;
        let Sp = this.samplers.get(Ip);
        if (!Sp) {
          const xp = {
            ...px(pp, ip, cp),
            addressModeU: ix(Op),
            addressModeV: ix(op)
          };
          Sp = (0, bS.c)(this.engine, xp), this.samplers.set(Ip, Sp)
        }
        return Sp
      }
      upload(pp, ip) {
        const {
          source: cp,
          sampler: Op
        } = pp;
        ip.hasMips = !Op.noMipmap, "canvas" === cp.kind ? this.createDynamic(cp, ip) : "cube" === cp.kind ? this.uploadCube(ip, cp.luminance) : this.uploadImage(ip, !0 === Op.invertY, cp.url)
      }
      uploadImage(pp, ip, cp) {
        const [Op] = pp.images;
        pp.images = null;
        const {
          epoch: op
        } = this, Ip = (0, hS.e)(this.engine, Op, {
          mipMaps: pp.hasMips,
          invertY: ip,
          srgb: !1
        }).then((ip => {
          Op.close(), 0 !== pp.refs && op === this.epoch ? (pp.view = ip.view, pp.destroy = ip.texture.destroy.bind(ip.texture)) : ip.texture.destroy()
        }));
        this.track(pp, cp, Ip)
      }
      track(pp, ip, cp, Op) {
        const {
          epoch: op
        } = this;
        pp.loading = !0, this.pending++, cp.catch((cp => {
          op === this.epoch && (pp.failed = !0, console.warn(`Lite: could not load texture ${Vp(ip)}`, cp))
        })).finally((() => {
          op === this.epoch && (pp.loading = !1, this.pending--, null === Op || void 0 === Op || Op())
        }))
      }
      uploadCube(pp, ip) {
        const cp = pp.images;
        pp.images = null;
        const Op = gS(this.engine, this.device, cp, (0, Mp.w)(ip), pp.hasMips);
        pp.view = Op.createView({
          dimension: "cube"
        }), pp.destroy = () => {
          Op.destroy()
        }
      }
      createDynamic(pp, ip) {
        const {
          canvas: cp
        } = pp, Op = (0, aS.c)(this.engine, Math.max(1, cp.width), Math.max(1, cp.height), {
          mipMaps: ip.hasMips,
          srgb: !1
        });
        ip.dynamic = Op, ip.view = Op.view, ip.destroy = () => {
          Op.texture.destroy()
        }, this.pushDynamic(pp, ip)
      }
      pushDynamic(pp, ip) {
        const cp = ip.dynamicSource,
          Op = ip.dynamic,
          {
            canvas: op
          } = pp;
        if (cp && Op && 0 !== op.width && 0 !== op.height) return op.width !== Op.width || op.height !== Op.height ? (this.releaseTexture(ip), ip.dynamic = null, ip.view = null, void this.createDynamic(pp, ip)) : void(0, aS.f)(this.engine, Op, op, {
          invertY: cp.invertY,
          premultiplyAlpha: cp.premultiplied
        })
      }
    }

    function Ox(pp) {
      return "cube" === pp.kind ? pp.rootUrl : "canvas" === pp.kind ? "canvas" : pp.url
    }
    const ox = new Uint8Array(4);
    var Ix = cp(38979);

    function Sx(pp) {
      const ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      pp._colorAttachment.storeOp = pp._targetSignature._sampleCount > 1 ? ip : "store";
      const cp = pp._renderPassDescriptor.depthStencilAttachment;
      cp && (cp.depthStoreOp = ip, cp.stencilStoreOp && (cp.stencilStoreOp = ip))
    }
    var xx = cp(37989),
      Lx = cp(38051),
      Yx = cp(37693),
      Dx = cp(39789);
    const Ax = new Float64Array([1, 1, 1]),
      Px = new Float64Array([0, 1, 0]),
      Wx = new Float64Array(4),
      yx = new Float32Array(16),
      Ux = new Float64Array(3),
      wx = new Float64Array(4);

    function vx(pp, ip, cp) {
      pp.fov = ip.fov, pp.near = ip.near, pp.far = ip.far, pp.renderWidth = cp.renderWidth, pp.renderHeight = cp.renderHeight, (0, Yx.s)(ip.holderRotation, 0, Wx, 0), (0, Yx.d)(Ax, 0, Wx, 0, ip.holderPosition, 0, yx);
      const Op = ip.tV;
      Ux[0] = Op[0], Ux[1] = Op[1], Ux[2] = Op[2] + 1;
      const op = pp.viewMatrix;
      (0, Yx.k)(Op, Ux, Px, op), (0, Yx.j)(op, 0, op), (0, Yx.m)(op, yx, 0, op), (0, Yx.j)(op, 0, op);
      const Ip = pp.worldMatrix;
      (0, Yx.j)(op, 0, Ip), pp.eye[0] = Ip[12], pp.eye[1] = Ip[13], pp.eye[2] = Ip[14], wx[0] = pp.fov, wx[1] = pp.renderWidth / pp.renderHeight, wx[2] = pp.near, wx[3] = pp.far, (0, Yx.q)(wx, pp.projectionMatrix), (0, Yx.m)(op, pp.projectionMatrix, 0, pp.viewProjectionMatrix), (0, Dx.d)(pp.viewProjectionMatrix, pp.frustum)
    }

    function tx(pp, ip) {
      let cp = pp.frustumPlanes;
      cp || (cp = pp.frustumPlanes = Array.from({
        length: 6
      }, (() => new xx.e(0, 0, 0, 0))));
      for (let Op = 0; Op < 6; Op++) {
        const pp = cp[Op].normal;
        pp._x = ip[4 * Op], pp._y = ip[4 * Op + 1], pp._z = ip[4 * Op + 2], pp._isDirty = !0, cp[Op].d = ip[4 * Op + 3]
      }
    }

    function Hx(pp, ip) {
      const cp = ip.clearColor;
      pp.clearColour[0] = cp.r, pp.clearColour[1] = cp.g, pp.clearColour[2] = cp.b, pp.clearColour[3] = cp.a;
      const Op = ip.ambientColor;
      pp.ambientColour[0] = Op.r, pp.ambientColour[1] = Op.g, pp.ambientColour[2] = Op.b, pp.animationRatio = ip.animationRatio, pp.frameId = ip.frameId, pp.version++
    }

    function dx(pp) {
      const ip = pp.model.view;
      return ip.animTick = (0, Lx.h)(), ip.timeMs = performance.now(), Hx(ip, pp.pw), pp.model.update(ip.frameId), ip
    }

    function ex(pp) {
      const ip = pp.pw,
        {
          view: cp,
          wV: Op
        } = pp.model;
      return vx(cp, Op, ip.gy()), ip.onBeforeRenderObservable.notifyObservers(ip), tx(ip, cp.frustum), ip.onBeforeCameraRenderObservable.notifyObservers(ip.activeCamera), dx(pp)
    }
    var ux = cp(37658),
      jx = cp(37765),
      kx = cp(38041);

    function mx(pp) {
      var ip, cp;
      const Op = (0, Rp.$)(pp);
      if (!Op || Op.diffuseTexture && (0, kx.j)(pp)) return null;
      const op = null === (ip = (0, Rp.s)(Op, kp.f.name)) || void 0 === ip ? void 0 : ip.state,
        Ip = null === (cp = (0, Rp.s)(Op, OS.d.name)) || void 0 === cp ? void 0 : cp.state,
        Sp = new Float32Array(16);
      return function(pp, ip, cp, Op) {
        var op, Ip;
        const Sp = TO;
        Op.set(pp.diffuseColor, Sp.diffuse), Op[Sp.diffuse + 3] = pp.alpha, Op.set(pp.ambientColor, Sp.ambientAndCutoff), Op[Sp.ambientAndCutoff + 3] = pp.alphaCutOff, Op.set(pp.emissiveColor, Sp.emissiveAndLevel), Op[Sp.emissiveAndLevel + 3] = null !== (op = null === (Ip = pp.diffuseTexture) || void 0 === Ip ? void 0 : Ip.level) && void 0 !== op ? op : 1, null !== ip && void 0 !== ip && ip.animDataPerTex ? (Op[Sp.anim + 1] = Lx.e, Op[Sp.anim + 2] = ip.animDataPerTex.length / 3 - 1) : cp && (Op[Sp.anim + 1] = cp.numAnimStates, Op[Sp.anim + 2] = cp.ticksPerAnimState)
      }(Op, op, Ip, Sp), {
        model: Op,
        atlas: op,
        texture: op ? "atlas" : Op.diffuseTexture ? "single" : "none",
        animated: op ? !!op.animDataPerTex : !!Ip,
        liquid: (0, kx.m)(pp),
        customRenderMat: (0, kx.j)(pp),
        uniformData: Sp
      }
    }
    var Rx = cp(2957);
    class qx {
      constructor(pp) {
        this.units = pp, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var pp;
        this.buffer.destroy(), null === (pp = this.twin) || void 0 === pp || pp.destroy()
      }
    }
    class Mx {
      constructor(pp, ip) {
        this.arena = pp, this.By = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.By = new ZS(ip);
        const cp = new qx(ip);
        cp.buffer = this.createBuffer(cp, !1), this.backings.push(cp), this.refresh()
      }
      get TA() {
        return this.By.TA
      }
      get canGrow() {
        return this.growable && !this.dropped
      }
      get live() {
        return !this.dropped
      }
      get hasTwin() {
        return null !== this.backings[this.backings.length - 1].twin
      }
      get allocatedBytes() {
        let pp = 0;
        for (const ip of this.backings) pp += ip.units * (this.arena.unitBytes + (ip.twin ? this.arena.twinUnitBytes : 0));
        return pp
      }
      holds(pp) {
        return pp.start + pp.length <= this.usable
      }
      lost(pp) {
        return this.dropped || pp.start + pp.length > this.TA
      }
      write(pp, ip) {
        const {
          device: cp,
          unitBytes: Op
        } = this.arena;
        for (const op of this.backings) {
          const Ip = (op.units - pp.start) * Op;
          Ip > 0 && cp.queue.writeBuffer(op.buffer, pp.start * Op, ip, 0, Math.min(ip.byteLength, Ip))
        }
      }
      writeLight(pp, ip) {
        const {
          device: cp,
          twinUnitBytes: Op,
          verticesPerUnit: op
        } = this.arena, {
          light: Ip,
          count: Sp
        } = this.arena.twinLight(ip, Math.min(ip.length, pp.length * op));
        for (const xp of this.backings) {
          xp.twin || (xp.twin = this.createBuffer(xp, !0));
          const ip = (xp.units - pp.start) * op;
          ip > 0 && cp.queue.writeBuffer(xp.twin, pp.start * Op, Ip, 0, Math.min(Sp, ip))
        }
      }
      grow(pp) {
        this.arena.assertNotDrawing();
        const {
          device: ip,
          unitBytes: cp,
          label: Op
        } = this.arena, op = this.backings[this.backings.length - 1], Ip = new qx(pp), Sp = ip.createCommandEncoder({
          label: `${Op}-grow`
        });
        Ip.buffer = this.createBuffer(Ip, !1), Sp.copyBufferToBuffer(op.buffer, 0, Ip.buffer, 0, op.units * cp), op.twin && (Ip.twin = this.createBuffer(Ip, !0), Sp.copyBufferToBuffer(op.twin, 0, Ip.twin, 0, op.units * this.arena.twinUnitBytes)), ip.queue.submit([Sp.finish()]), this.backings.push(Ip), this.By.grow(pp)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const pp of this.backings) pp.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(pp, ip) {
        const {
          device: cp,
          unitBytes: Op,
          twinUnitBytes: op,
          usage: Ip,
          label: Sp
        } = this.arena;
        cp.pushErrorScope("out-of-memory");
        const xp = cp.createBuffer({
          label: ip ? `${Sp}-light` : Sp,
          size: pp.units * (ip ? op : Op),
          usage: (ip ? this.arena.twinUsage : Ip) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, cp.popErrorScope().then((cp => {
          this.arena.awaitingVerdict--, this.settle(pp, ip, !cp, !0)
        }), (cp => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Sp} buffer, taken as failed: ${String(cp)}`), this.settle(pp, ip, !1, !1)
        })), xp
      }
      settle(pp, ip, cp, Op) {
        const op = this.backings.indexOf(pp);
        if (!(this.dropped || op < 0)) {
          if (!cp) {
            if (Op && this.arena.ranOutOfMemory(pp.units, pp.units * (ip ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === op) return void this.drop();
            for (const pp of this.backings.splice(op)) pp.destroy();
            return this.By.truncate(this.backings[op - 1].units), this.growable = !1, void this.promote()
          }
          ip ? pp.twinReady = !0 : (pp.bufferReady = !0, this.arena.allocatedBuffer(pp.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: pp
        } = this;
        let ip = 0;
        for (; ip + 1 < pp.length && pp[ip].ready && pp[ip + 1].ready;) ip++;
        for (const cp of pp.splice(0, ip)) cp.destroy();
        this.refresh()
      }
      refresh() {
        const pp = this.backings[0];
        this.buffer = pp.buffer, this.twin = pp.twinReady ? pp.twin : null, this.usable = !this.dropped && pp.bufferReady ? pp.units : 0
      }
    }
    class Cx {
      constructor(pp, ip, cp, Op) {
        let {
          verticesPerUnit: op = 1,
          twinUsage: Ip = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = pp, this.unitBytes = ip, this.usage = cp, this.label = Op, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Qi.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), ip % 4 !== 0) throw new Error(`${Op}: ${ip}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = op, this.twinUsage = Ip, this.twinValueBytes = op > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * op
      }
      twinLight(pp, ip) {
        if (4 === this.twinValueBytes) return this.widened.length < ip && (this.widened = new Float32Array(Math.max(ip, 2 * this.widened.length))), this.widened.set(pp.subarray(0, ip)), {
          light: this.widened,
          count: ip
        };
        const cp = ip % this.verticesPerUnit;
        if (0 === cp) return {
          light: pp,
          count: ip
        };
        const Op = ip - cp + this.verticesPerUnit;
        return this.padded.length < Op && (this.padded = new Uint16Array(Math.max(Op, 2 * this.padded.length))), this.padded.set(pp.subarray(0, ip)), this.padded.fill(0, ip, Op), {
          light: this.padded,
          count: Op
        }
      }
      allocate(pp) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), pp > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const op of this.pages) {
          const ip = op.By.allocate(pp);
          if (ip >= 0) return {
            page: op,
            start: ip,
            length: pp
          }
        }
        const ip = this.pages[this.pages.length - 1];
        if (null !== ip && void 0 !== ip && ip.canGrow) {
          const cp = Math.min(this.ceiling, Math.max(2 * ip.TA, ip.TA + pp));
          if (cp - ip.TA >= pp) return ip.grow(cp), {
            page: ip,
            start: ip.By.allocate(pp),
            length: pp
          }
        }
        ip && ip !== this.pages[0] && 0 === ip.By.used && ip.drop();
        const cp = Math.floor(1048576 / this.unitBytes),
          Op = new Mx(this, Math.max(pp, Math.min(this.ceiling, cp)));
        return this.pages.push(Op), {
          page: Op,
          start: Op.By.allocate(pp),
          length: pp
        }
      }
      free(pp) {
        this.assertNotDrawing();
        const {
          page: ip
        } = pp;
        ip.By.free(pp.start, pp.length), 0 === ip.By.used && ip !== this.pages[0] && ip !== this.pages[this.pages.length - 1] && ip.drop()
      }
      retire() {
        for (const pp of this.pages) pp.retire()
      }
      remove(pp) {
        const ip = this.pages.indexOf(pp);
        ip >= 0 && this.pages.splice(ip, 1)
      }
      ranOutOfMemory(pp, ip) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${ip}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, pp), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, pp) / 2));
        const cp = performance.now();
        cp >= this.shortageUntil && (this.forgetFailedAt = cp + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = cp + 1e3)
      }
      allocatedBuffer(pp) {
        pp >= this.failed && (this.failed = 1 / 0);
        const ip = Math.min(2 * pp, Math.floor((pp + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, ip))
      }
      stats() {
        let pp = 0,
          ip = 0,
          cp = 0,
          Op = 0;
        for (const op of this.pages) pp += op.TA, ip += op.By.used, cp += op.hasTwin ? op.TA * this.twinUnitBytes : 0, Op += op.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: pp * this.unitBytes,
          usedBytes: ip * this.unitBytes,
          twinBytes: cp,
          allocatedBytes: Op
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: pp,
          maxStorageBufferBindingSize: ip
        } = this.device.limits;
        let cp = Math.floor(Math.min(67108864, pp) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (cp = Math.min(cp, Math.floor(ip / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (cp = Math.min(cp, Math.floor(ip / this.twinUnitBytes))), cp
      }
    }
    const Ex = 16383;

    function Xx(pp, ip, cp, Op, op) {
      let Ip = 0;
      for (let Sp = cp; Sp < Op; Sp += Ex) pp.drawIndexed(6 * Math.min(Ex, Op - Sp), 1, 0, ip + 4 * Sp, op), Ip++;
      return Ip
    }
    class lx {
      constructor(pp, ip) {
        this.recordsGroup = ip, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const cp = si.d.strideWithoutAtlas;
        this.vertexArena = new Cx(pp, cp, GPUBufferUsage.VERTEX, `terrain-vertices-${cp}`), this.quadArena = new Cx(pp, jx.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Op = (0, Ki.f)(new Uint16Array(98298), Ex);
        this.quadPattern = pp.createBuffer({
          label: "terrain-quad-pattern",
          size: Op.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), pp.queue.writeBuffer(this.quadPattern, 0, Op)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(pp, ip) {
        const cp = ip.packedVertices,
          Op = cp ? this.quadArena.allocate(pp.faceCount) : this.vertexArena.allocate(pp.vertexCount);
        if (!Op) return !1;
        pp.vertices = Op;
        const op = cp ? new Uint8Array(cp.buffer, cp.byteOffset, cp.byteLength) : new Uint8Array(ip.vertices);
        return Op.page.write(Op, op), !0
      }
      setLight(pp, ip) {
        const {
          vertices: cp
        } = pp;
        cp && 0 !== ip.length && cp.page.live && (ip.length < pp.vertexCount ? cp.page.arena.warnOnce("shortLight", `a part's ${ip.length} light values are fewer than its ${pp.vertexCount} vertices, so its light is left as it was`) : (cp.page.writeLight(cp, ip), pp.lit = !0))
      }
      lightFullSky(pp, ip) {
        this.fullSky.length < ip && (this.fullSky = new Uint16Array(Math.max(ip, 4096)).fill(Rx.i));
        for (const cp of pp) {
          const pp = cp.vertices;
          pp.page.live && (pp.page.writeLight(pp, this.fullSky), cp.lit = !0)
        }
      }
      backed(pp) {
        const {
          vertices: ip
        } = pp;
        return !!ip && ip.page.holds(ip)
      }
      lost(pp) {
        const {
          vertices: ip
        } = pp;
        return !!ip && ip.page.lost(ip)
      }
      release(pp) {
        pp.vertices && pp.vertices.page.arena.free(pp.vertices), pp.vertices = null, pp.lit = !1
      }
      setDrawing(pp) {
        this.forgetBound()
      }
      draw(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ip.faceCount;
        const Ip = ip.vertices,
          Sp = Ip.page,
          xp = cp ? Sp.twin : null;
        if (!Sp.holds(Ip) || cp && !xp) return 0;
        const {
          verticesPerUnit: Lp
        } = Sp.arena;
        let Yp = Ip.start * Lp;
        this.boundPattern || (pp.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Dp = Op + op;
        if (Lp > 1) return Sp.buffer === this.boundRecords && xp === this.boundRecordsLight || (pp.setBindGroup(1, this.recordsGroup(Sp.buffer, xp)), this.boundRecords = Sp.buffer, this.boundRecordsLight = xp), Xx(pp, Yp, Op, Dp, ip.slot);
        Sp.buffer !== this.boundVertices && (pp.setVertexBuffer(0, Sp.buffer), this.boundVertices = Sp.buffer), xp && xp !== this.boundLight && (pp.setVertexBuffer(1, xp), this.boundLight = xp);
        const Ap = ip.faceCount;
        return Dp <= Ap ? Xx(pp, Yp, Op, Dp, ip.slot) : Xx(pp, Yp, Op, Ap, ip.slot) + Xx(pp, Yp, Math.max(Op, Ap) - Ap, Dp - Ap, ip.slot)
      }
      get buffersAwaitingVerdict() {
        let pp = 0;
        for (const ip of this.arenas()) pp += ip.awaitingVerdict;
        return pp
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Qx {
      constructor(pp, ip, cp, Op) {
        this.device = pp, this.splitBefore = ip, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = pp.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const op = pp.createShaderModule({
          label: "scene-depth-copy",
          code: (Ip = cp._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Ip?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Ip;
        pp.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: op,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: op,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((pp => {
          this.pipeline = pp, this.building = !1
        }), (pp => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", pp)
        })), cp._executeWithTransmission = () => this.execute(cp, Op)
      }
      get compiling() {
        return this.building
      }
      setWanted(pp) {
        this.wanted = pp
      }
      setPlanes(pp, ip) {
        pp === this.near && ip === this.far || (this.near = pp, this.far = ip, this.unproject[0] = pp / (ip - pp), this.unproject[1] = ip * pp / (ip - pp), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var pp, ip;
        return null !== (pp = null === (ip = this.copy) || void 0 === ip ? void 0 : ip.view) && void 0 !== pp ? pp : null
      }
      execute(pp, ip) {
        var cp;
        null === (cp = this.retired) || void 0 === cp || cp.destroy(), this.retired = null;
        const Op = ki(ip),
          op = pp._transparentBindings,
          Ip = this.wanted && this.pipeline ? this.splitIndex(op) : -1,
          Sp = pp._colorAttachment,
          xp = Sp.resolveTarget;
        Ip >= 0 && (Sp.resolveTarget = void 0, Sx(pp, !0));
        let Lp = Op.beginRenderPass(pp._renderPassDescriptor);
        Lp.setBindGroup(0, pp._sceneBG);
        let Yp = this.drawList(Lp, ip, pp._opaqueBindings, 0, pp._opaqueBindings.length);
        if (Yp += this.drawList(Lp, ip, pp._directBindings, 0, pp._directBindings.length), Yp += this.drawList(Lp, ip, op, 0, Ip >= 0 ? Ip : op.length), Lp.end(), Ip < 0) return Yp;
        Sx(pp);
        const Dp = pp._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Ap,
            stencilLoadOp: Pp
          } = Dp,
          Wp = Sp.loadOp;
        Sp.resolveTarget = xp;
        try {
          this.copyDepth(Op, pp), Sp.loadOp = "load", Dp.depthLoadOp = "load", Pp && (Dp.stencilLoadOp = "load"), Lp = Op.beginRenderPass(pp._renderPassDescriptor), Lp.setBindGroup(0, pp._sceneBG), Yp += this.drawList(Lp, ip, op, Ip, op.length), Lp.end()
        } finally {
          Sp.loadOp = Wp, Dp.depthLoadOp = Ap, Dp.stencilLoadOp = Pp
        }
        return Yp
      }
      splitIndex(pp) {
        for (let ip = 0; ip < pp.length; ip++)
          if (pp[ip].renderable === this.splitBefore) return ip;
        return -1
      }
      drawList(pp, ip, cp, Op, op) {
        let Ip = null,
          Sp = 0;
        for (let xp = Op; xp < op; xp++) {
          const Op = cp[xp],
            op = Op.renderable.mesh;
          op && !1 === op.visible || (Op.pipeline !== Ip && (pp.setPipeline(Op.pipeline), Ip = Op.pipeline), Sp += Op.draw(pp, ip))
        }
        return Sp
      }
      copyDepth(pp, ip) {
        var cp, Op;
        const op = (null !== (cp = ip._config.depth) && void 0 !== cp ? cp : ip._config.rt)._depthTexture,
          Ip = (null === (Op = this.copy) || void 0 === Op ? void 0 : Op.source) === op ? this.copy : this.remakeCopy(op),
          Sp = pp.beginRenderPass(Ip.pass);
        Sp.setPipeline(this.pipeline), Sp.setBindGroup(0, Ip.bindGroup), Sp.draw(3), Sp.end()
      }
      remakeCopy(pp) {
        var ip, cp;
        this.retired = null !== (ip = null === (cp = this.copy) || void 0 === cp ? void 0 : cp.texture) && void 0 !== ip ? ip : null;
        const Op = this.device.createTexture({
            label: "scene-depth",
            size: [pp.width, pp.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          op = Op.createView(),
          Ip = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: pp.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Sp = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: op,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: pp,
          texture: Op,
          view: op,
          bindGroup: Ip,
          pass: Sp
        }, this.copy
      }
    }
    const Jx = "rgba8unorm";

    function Bx(pp) {
      return pp ? 15 : 1
    }
    class Nx {
      constructor(pp, ip, cp, Op) {
        this.device = pp, this.terrain = Op, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ip._targetSignature._sampleCount > 1, this.cameraBuffer = pp.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = pp.createBindGroupLayout({
          label: "sun-shadow-mask",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "unfilterable-float"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        const op = pp.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = pp.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: op,
          entries: []
        });
        const Ip = pp.createShaderModule({
          label: "sun-shadow-mask",
          code: (Sp = this.edge, `${(0,Vi.C)()}${DO({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Sp?Vc:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Bx(Sp)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Sp?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Sp;
        pp.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: pp.createPipelineLayout({
            bindGroupLayouts: [this.layout, op, op, ZI(pp, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Ip,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Ip,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((pp => {
          this.pipeline = pp, this.building = !1
        }), (pp => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", pp)
        }));
        const xp = ip._executeWithTransmission;
        ip._executeWithTransmission = pp => this.execute(ip, cp, (() => xp ? xp(pp) : function(pp, ip) {
          const cp = ki(ip).beginRenderPass(pp._renderPassDescriptor);
          cp.setBindGroup(0, pp._sceneBG);
          let Op = Tx(cp, ip, pp._opaqueBindings);
          return Op += Tx(cp, ip, pp._directBindings), Op += Tx(cp, ip, pp._transparentBindings), cp.end(), Op
        }(ip, cp)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var pp, ip;
        return null !== (pp = null === (ip = this.targets) || void 0 === ip ? void 0 : ip.maskView) && void 0 !== pp ? pp : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(pp) {
        ! function(pp, ip) {
          const cp = pp.worldMatrix,
            Op = pp.projectionMatrix,
            op = 1 / Op[0],
            Ip = 1 / Op[5],
            Sp = pp.far * pp.near / (pp.far - pp.near);
          ip[0] = pp.eye[0], ip[1] = pp.eye[1], ip[2] = pp.eye[2], ip[3] = 2 ** -23 / Sp, ip[4] = cp[0] * op, ip[5] = cp[1] * op, ip[6] = cp[2] * op, ip[7] = Sp, ip[8] = cp[4] * Ip, ip[9] = cp[5] * Ip, ip[10] = cp[6] * Ip, ip[11] = pp.near / (pp.far - pp.near), ip[12] = cp[8], ip[13] = cp[9], ip[14] = cp[10], ip[15] = 0
        }(pp, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(pp, ip, cp) {
        if (this.retire(), !this.terrain.readsMask) return cp();
        const Op = this.targetsFor(pp),
          op = ki(ip),
          Ip = pp._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Op.prepass.depthStencilAttachment.view = Ip.view);
        const Sp = this.terrain.drawPrepass(op, Op.prepass, pp._sceneBG);
        if (0 === Sp) return cp();
        if (this.trace(op, Op), this.edge) return Sp + 1 + cp();
        const {
          depthLoadOp: xp,
          stencilLoadOp: Lp
        } = Ip;
        Ip.depthLoadOp = "load", Lp && (Ip.stencilLoadOp = "load");
        try {
          return Sp + 1 + cp()
        } finally {
          Ip.depthLoadOp = xp, Ip.stencilLoadOp = Lp
        }
      }
      trace(pp, ip) {
        const cp = this.terrain.sunShadowGroup(),
          Op = pp.beginRenderPass(ip.trace);
        this.pipeline && cp && (Op.setPipeline(this.pipeline), Op.setBindGroup(0, ip.bindGroup), Op.setBindGroup(1, this.empty), Op.setBindGroup(2, this.empty), Op.setBindGroup(3, cp), Op.draw(3)), Op.end()
      }
      retire() {
        const pp = this.retired;
        var ip;
        pp && (pp.mask.destroy(), pp.normals.destroy(), null === (ip = pp.depth) || void 0 === ip || ip.destroy(), this.retired = null)
      }
      targetsFor(pp) {
        var ip, cp;
        const Op = (null !== (ip = pp._config.depth) && void 0 !== ip ? ip : pp._config.rt)._depthTexture;
        return (null === (cp = this.targets) || void 0 === cp ? void 0 : cp.source) === Op ? this.targets : this.remake(pp, Op)
      }
      remake(pp, ip) {
        var cp;
        this.retired = this.targets;
        const Op = [ip.width, ip.height],
          op = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Op,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ip = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Op,
            format: Jx,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Sp = null !== (cp = pp._targetSignature._depthStencilFormat) && void 0 !== cp ? cp : ip.format,
          xp = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Op,
            format: Sp,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Lp = pp._renderPassDescriptor.depthStencilAttachment,
          Yp = Sp.includes("stencil"),
          Dp = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Ip.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: xp ? xp.createView() : Lp.view,
              depthClearValue: Lp.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Yp ? {
                stencilClearValue: Lp.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Ap = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== xp && void 0 !== xp ? xp : ip).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Ip.createView()
            }]
          }),
          Pp = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: op.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Bx(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: ip,
          mask: op,
          maskView: op.createView(),
          normals: Ip,
          depth: xp,
          bindGroup: Ap,
          prepass: Dp,
          trace: Pp
        }, this.targets
      }
    }

    function Tx(pp, ip, cp) {
      let Op = null,
        op = 0;
      for (const Ip of cp) {
        const cp = Ip.renderable.mesh;
        cp && !1 === cp.visible || (Ip.pipeline !== Op && (pp.setPipeline(Ip.pipeline), Op = Ip.pipeline), op += Ip.draw(pp, ip))
      }
      return op
    }
    const fx = 6e4,
      bx = {
        status: "ok"
      },
      hx = {
        status: "skipped"
      };
    async function ax(pp, ip) {
      const {
        isCancelled: cp
      } = pp;
      if (cp()) return {
        status: "OO"
      };
      const {
        target: Op
      } = ip;
      if (!Op) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const op = [],
        Ip = Promise.all(Array.from(new Set(pp.materials), (async cp => {
          op.push(await async function(pp, ip, cp, Op) {
            const op = {
              lighting: pp.lighting,
              dirLightCount: Math.min(pp.dirLightCount, 4),
              Dy: pp.runtime
            };
            try {
              const Ip = ip.material(Op);
              return Ip && JO(ip.programKey(Ip, !1, op)) ? (await Ip.ready, pp.isCancelled() ? bx : Ip.bindGroupLayout ? await async function(pp, ip, cp, Op) {
                const {
                  device: op
                } = pp;
                let Ip, Sp;
                op.pushErrorScope("validation");
                try {
                  Ip = pp.pipelineBuild(ip, cp, Op)
                } finally {
                  Sp = op.popErrorScope().catch((() => null))
                }
                const [xp, Lp] = await Promise.all([Sp, Ip.built.then((() => null), (pp => null !== pp && void 0 !== pp ? pp : new Error("pipeline failed")))]);
                if (!xp && !Lp) return bx;
                const Yp = await nx(Ip.module),
                  Dp = Yp.length > 0 ? Yp.map((pp => `${Ip.name} ${pp.lineNum}:${pp.linePos}: ${pp.message}`)).join("\n") : `${Ip.name}: ${Fx(null!==Lp&&void 0!==Lp?Lp:xp)}`;
                return {
                  status: "failed",
                  material: ip.model.name,
                  message: Dp
                }
              }(ip, Ip, ip.programKey(Ip, "none" !== Ip.texture, op), cp): (console.warn(`Shader pack: skipped the compile check for "${Op.name}", whose textures failed to load`), hx)) : bx
            } catch (Ip) {
              return {
                status: "failed",
                material: Op.name,
                message: Fx(Ip)
              }
            }
          }(pp, ip, Op, cp))
        }))),
        Sp = function(pp, ip) {
          let cp, Op, op = !1;
          const Ip = new Promise((Ip => {
            var Sp;
            cp = setTimeout((() => {
              Ip("timeout")
            }), null !== (Sp = ip.timeoutMs) && void 0 !== Sp ? Sp : fx), Op = setInterval((() => {
              ip.isCancelled() && Ip("OO")
            }), 50), pp.lost.then((() => {
              op = !0, Ip("lost")
            }))
          }));
          return {
            signal: Ip,
            lost: () => op,
            dispose: () => {
              clearTimeout(cp), clearInterval(Op)
            }
          }
        }(ip.device, pp);
      let xp;
      try {
        xp = await Promise.race([Ip.then((() => "done")), Sp.signal])
      } finally {
        Sp.dispose()
      }
      if ("OO" === xp || cp()) return {
        status: "OO"
      };
      const Lp = op.find((pp => "failed" === pp.status));
      return Lp && "lost" !== xp && !Sp.lost() && await new Promise((pp => {
        setTimeout(pp, 0)
      })), "lost" === xp || Sp.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Lp ? {
        status: "failed",
        failure: {
          material: Lp.material,
          message: Lp.message
        }
      } : "timeout" === xp ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Yp=pp.timeoutMs)&&void 0!==Yp?Yp:fx)/1e3} s`), {
        status: "skipped"
      }) : op.some((pp => "skipped" === pp.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Yp
    }
    async function nx(pp) {
      if (!pp) return [];
      try {
        return (await pp.getCompilationInfo()).messages.filter((pp => "error" === pp.type))
      } catch {
        return []
      }
    }

    function Fx(pp) {
      var ip;
      return null !== (ip = null === pp || void 0 === pp ? void 0 : pp.message) && void 0 !== ip ? ip : String(pp)
    }

    function gx(pp, ip, cp, Op, op) {
      JO(ip) ? nx(Op).then((ip => {
        const [Op] = ip;
        Pi(pp, "terrain", cp, op, Op ? `${Op.lineNum}:${Op.linePos} error: ${Op.message}` : null)
      })) : Pi(pp, "terrain", cp, op)
    }
    var Gx = cp(37767),
      rx = cp(37772),
      Zx = cp(37784),
      zx = cp(2949);

    function sx(pp, ip, cp, Op, op) {
      const Ip = Math.hypot(cp[0], cp[1], cp[2]);
      if (!(Ip > 0)) return;
      const Sp = [cp[0] / Ip, cp[1] / Ip, cp[2] / Ip],
        xp = [Math.floor(ip[0]), Math.floor(ip[1]), Math.floor(ip[2])],
        Lp = [0, 0, 0],
        Yp = [1 / 0, 1 / 0, 1 / 0],
        Dp = [1 / 0, 1 / 0, 1 / 0];
      for (let Wp = 0; Wp < 3; Wp++) Sp[Wp] > 0 ? (Lp[Wp] = 1, Yp[Wp] = (xp[Wp] + 1 - ip[Wp]) / Sp[Wp], Dp[Wp] = 1 / Sp[Wp]) : Sp[Wp] < 0 && (Lp[Wp] = -1, Yp[Wp] = (xp[Wp] - ip[Wp]) / Sp[Wp], Dp[Wp] = -1 / Sp[Wp]);
      const {
        Qy: Ap
      } = pp;
      let Pp = pp.wG(xp[0], xp[1], xp[2]);
      for (;;) {
        const ip = Yp[0] < Yp[1] ? Yp[0] < Yp[2] ? 0 : 2 : Yp[1] < Yp[2] ? 1 : 2;
        if (Yp[ip] > Op) return;
        const cp = Lp[ip] > 0 ? xp[ip] + 1 : xp[ip];
        xp[ip] += Lp[ip], Yp[ip] += Dp[ip];
        const Ip = pp.wG(xp[0], xp[1], xp[2]),
          Sp = Ip !== Pp && !(pp.opaque[Pp] && pp.opaque[Ip]);
        if (Sp) {
          const Op = [xp[0], xp[1], xp[2]];
          Op[ip] = cp;
          const Ip = Math.floor(Op[0] / Ap),
            Sp = Math.floor(Op[1] / Ap),
            Lp = Math.floor(Op[2] / Ap);
          !pp.isDrawn(Ip, Sp, Lp) && pp.hasParts(Ip, Sp, Lp) && op.add(`${Ip},${Sp},${Lp}`)
        }
        if (Sp && pp.occluders[Ip]) return;
        Pp = Ip
      }
    }

    function Kx(pp, ip) {
      return pp.group - ip.group || pp.nearest - ip.nearest
    }
    class Vx {
      constructor(pp, ip) {
        this.device = pp, this.mH = ip, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var pp;
        const ip = null !== (pp = this.free.pop()) && void 0 !== pp ? pp : this.next++;
        if (8 * ip >= this.data.length) {
          const pp = new Float32Array(2 * this.data.length);
          pp.set(this.data), this.data = pp, this.words = new Uint32Array(pp.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.mH()
        }
        return ip
      }
      release(pp) {
        this.free.push(pp)
      }
      set(pp, ip, cp, Op, op) {
        const Ip = 8 * pp + gO;
        this.data[Ip] = ip, this.data[Ip + 1] = cp, this.data[Ip + 2] = Op, this.setVisibility(pp, op)
      }
      setVisibility(pp, ip) {
        this.data[8 * pp + GO] = ip, this.markDirty(pp, pp)
      }
      setFaces(pp, ip, cp) {
        const Op = 8 * pp;
        this.words[Op + rO] = ip, this.words[Op + ZO] = cp, this.markDirty(pp, pp)
      }
      markDirty(pp, ip) {
        this.dirtyMin = Math.min(this.dirtyMin, pp), this.dirtyMax = Math.max(this.dirtyMax, ip)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const pL = FO,
      iL = !0;
    const cL = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: pL.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      OL = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class oL {
      constructor(pp) {
        this.device = pp, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(NO), this.dirLightUniforms = this.frameUniforms.subarray(BO.dirLights, BO.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Qi.c)(), this.faceGroups = !0, this.visibilityGraph = iL, this.visCull = iL, this.visCheck = !1, this.visCullMinDistance = Zx.i, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new LL, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.Dy = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new lx(pp, ((pp, ip) => this.recordsGroup(pp, ip))), this.slots = new Vx(pp, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = mi(pp), this.frameLayout = pp.createBindGroupLayout({
          label: "terrain-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }), this.frameBuffer = pp.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = pp.createSampler({
          label: "terrain",
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        }), this.opaqueRenderable = {
          order: 100,
          isTransparent: !1,
          _direct: !0,
          bind: (pp, ip) => this.createBinding(this.opaqueRenderable, ip, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (pp, ip) => this.createBinding(this.transparentRenderable, ip, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(pp, ip) {
        this.sceneDepth = new Qx(this.device, this.transparentRenderable, pp, ip)
      }
      createFrameBindGroup() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.device.createBindGroup({
          label: "terrain-frame",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.slots.buffer
            }
          }, {
            binding: 2,
            resource: {
              buffer: null !== pp && void 0 !== pp ? pp : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== ip && void 0 !== ip ? ip : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(pp, ip) {
        const cp = null !== ip && void 0 !== ip ? ip : pp;
        let Op = this.recordsGroups.get(cp);
        return Op || (Op = this.createFrameBindGroup(pp, ip), this.recordsGroups.set(cp, Op)), Op
      }
      setChunkMesh(pp, ip, cp) {
        var Op;
        let op = this.chunks.get(pp);
        op ? this.geometry.release(op) : (op = {
          mesh: pp,
          slot: this.slots.allocate(),
          origin: [cp[0], cp[1], cp[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: pp.visibility,
          distance: 0,
          faceGroups: null,
          planePX: 0,
          planeNX: 0,
          planePY: 0,
          planeNY: 0,
          planePZ: 0,
          planeNZ: 0,
          faceMask: -1,
          faceEpoch: -1,
          rangeCount: 1,
          first0: 0,
          count0: 0,
          first1: 0,
          count1: 0,
          ci: NaN,
          cj: NaN,
          ck: NaN,
          key: NaN
        }, this.chunks.set(pp, op), this.writeSlot(op)), op.material = pp.material ? this.materialFor(pp.material) : null, op.packed = !!ip.packedVertices, op.vertexCount = (0, jx.f)(ip), op.faceCount = op.vertexCount / 4;
        const Ip = null !== (Op = ip.faceGroups) && void 0 !== Op ? Op : null;
        if (op.faceGroups = Ip, Ip) {
          const pp = Gx.n;
          op.planePX = Ip[pp], op.planeNX = Ip[pp + 1], op.planePY = Ip[pp + 2], op.planeNY = Ip[pp + 3], op.planePZ = Ip[pp + 4], op.planeNZ = Ip[pp + 5]
        }
        this.drawWhole(op), 0 !== op.faceCount && (this.geometry.set(op, ip) ? (op.packed && this.slots.setFaces(op.slot, op.vertices.start + op.faceCount, op.faceCount), ip.ty && this.setChunkMeshLight(pp, ip.ty)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${op.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(pp, ip) {
        const cp = this.chunks.get(pp);
        cp && this.geometry.setLight(cp, ip)
      }
      drawStats() {
        let pp = this.transparent.length;
        for (const ip of this.opaqueBatches) pp += ip.meshes.length;
        return {
          drawn: pp,
          loaded: this.chunks.size,
          triangles: this.submittedTriangles,
          visCulled: this.visCulledParts,
          visCulledTriangles: this.visCulledTriangles,
          visViolations: this.visViolations,
          visSweeps: this.visSweeps,
          visPassable: this.visPassable.size
        }
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      get buffersAwaitingVerdict() {
        return this.geometry.buffersAwaitingVerdict
      }
      removeChunkMesh(pp) {
        const ip = this.chunks.get(pp);
        ip && (this.geometry.release(ip), this.slots.release(ip.slot), this.chunks.delete(pp))
      }
      remeshLost(pp, ip) {
        this.geometry.release(ip), ip.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** ip.lostRemeshes++);
        const cp = pp.WP,
          [Op, op, Ip] = cp.jOp(ip.origin[0], ip.origin[1], ip.origin[2]),
          Sp = cp.XU.lU(Op, op, Ip);
        Sp && (Sp.CU = !0, Sp.JU = !0, cp.EU(Sp, !1))
      }
      chooseFaceRanges(pp, ip, cp) {
        const Op = this.faceRanges;
        pp.faceMask = cp, pp.rangeCount = (0, rx.m)(ip, cp, Op), pp.first0 = Op[0], pp.count0 = Op[1], pp.first1 = Op[2], pp.count1 = Op[3]
      }
      drawWhole(pp) {
        pp.faceMask = -1, pp.faceEpoch = -1, pp.rangeCount = 1, pp.first0 = 0, pp.count0 = pp.faceCount
      }
      writeSlot(pp) {
        const [ip, cp, Op] = this.originOffset;
        this.slots.set(pp.slot, pp.origin[0] - ip, pp.origin[1] - cp, pp.origin[2] - Op, pp.visibility)
      }
      materialFor(pp) {
        const ip = this.materials.get(pp);
        if (ip) return ip;
        const cp = mx(pp);
        if (!cp) return this.warnOnce(`material:${pp.name}`, `Lite terrain cannot draw material "${pp.name}"; its chunks are skipped.`), null;
        const {
          model: Op,
          atlas: op,
          texture: Ip,
          animated: Sp,
          uniformData: xp
        } = cp, Lp = {
          id: this.materials.size,
          model: Op,
          texture: Ip,
          animated: Sp,
          uniformData: xp,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${pp.name}`,
            size: xp.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: cp.liquid,
          customRenderMat: cp.customRenderMat,
          atlasCount: 0,
          M6: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(pp, Lp), this.device.queue.writeBuffer(Lp.uniformBuffer, 0, xp), Lp.ready = this.createMaterialBindGroup(Lp, op).catch((ip => {
          console.error(`Lite terrain failed to load the textures of material "${pp.name}"`, ip)
        })), Lp
      }
      materialLayout(pp) {
        const ip = function(pp) {
            const ip = ["uniforms"];
            if ("atlas" === pp.texture) {
              pp.animated && ip.push("animData"), ip.push("sampler");
              for (let cp = 0; cp < pp.atlasCount; cp++) ip.push("textureArray")
            } else "single" === pp.texture && ip.push("sampler", "texture");
            return ip
          }(pp),
          cp = ip.join(",");
        let Op = this.materialLayouts.get(cp);
        if (!Op) {
          const pp = GPUShaderStage.FRAGMENT;
          Op = this.device.createBindGroupLayout({
            label: `terrain-material-${cp}`,
            entries: ip.map(((ip, cp) => {
              switch (ip) {
                case "uniforms":
                  return {
                    binding: cp, visibility: GPUShaderStage.VERTEX | pp, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: cp, visibility: GPUShaderStage.VERTEX | pp, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: cp, visibility: pp, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: cp, visibility: pp, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: cp, visibility: pp, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(cp, Op)
        }
        return Op
      }
      async createMaterialBindGroup(pp, ip) {
        const cp = [{
          buffer: pp.uniformBuffer
        }];
        if (ip) {
          const Op = await Oi(this.device, ip.sources);
          pp.atlasCount = Op.length, pp.M6 = Op[0].layerWidth, pp.atlasLayers = Op[0].layers, ip.animDataPerTex && cp.push({
            buffer: Zp(this.device, Float32Array.from(ip.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), cp.push(this.sampler);
          for (const pp of Op) cp.push(pp.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === pp.texture) {
          const {
            url: ip
          } = pp.model.diffuseTexture.source, {
            pixels: Op,
            width: op,
            height: Ip
          } = await ci(ip);
          cp.push(this.sampler), cp.push(sp(this.device, Op, op, Ip, 1, `terrain-${ip}`).createView({
            dimension: "2d"
          }))
        }
        const Op = this.materialLayout(this.programKey(pp, !1));
        pp.bindGroupLayout = Op, pp.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${pp.model.name}`,
          layout: Op,
          entries: cp.map(((pp, ip) => ({
            binding: ip,
            resource: pp
          })))
        })
      }
      programKey(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Op = cp ? cp.lighting : this.lighting,
          op = cp ? cp.Dy : this.Dy,
          Ip = {
            texture: pp.texture,
            atlasCount: pp.atlasCount,
            M6: pp.M6,
            atlasLayers: pp.atlasLayers,
            animated: pp.animated,
            alphaTest: pp.model.transparencyMode === Rp.k.alphaTest,
            lighting: Op,
            dirLightCount: cp ? cp.dirLightCount : this.dirLightCount,
            packed: ip
          };
        if (!op) return Ip;
        const Sp = this.shaderPackFields(pp, op),
          xp = "atlas" === pp.texture && pp.model.transparencyMode === Rp.k.opaque && EO(Sp.packVariant);
        return {
          ...Ip,
          ...Sp,
          alphaTest: Ip.alphaTest || xp
        }
      }
      shaderPackFields(pp, ip) {
        const cp = this.packVariant(pp, ip);
        return void 0 === cp ? MO : {
          packVariant: cp,
          liquid: pp.liquid
        }
      }
      packVariant(pp, ip) {
        return pp.customRenderMat ? void 0 : function(pp, ip) {
          const cp = pp ? pp.defineFor(ip ? "liquid" : "terrain") : 0;
          return 0 === cp ? void 0 : cp
        }(ip, pp.liquid)
      }
      isBlended(pp) {
        return pp.model.transparencyMode === Rp.k.alphaBlend
      }
      shaderModule(pp, ip) {
        let cp = this.modules.get(pp);
        return cp || (cp = this.device.createShaderModule({
          label: ip,
          code: pp
        }), this.modules.set(pp, cp)), cp
      }
      pipelineFor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!pp.bindGroupLayout) return null;
        if (!Op) return this.pipelineOf(pp, ip, cp);
        const op = this.pipelineIdNow(pp, ip, !0, cp),
          Ip = this.pipelines.get(op);
        if (Ip) return Ip;
        const Sp = this.pipelineOf(pp, ip, cp);
        return Sp && void 0 === Ip && this.startPipeline(op, pp, {
          ...this.programKey(pp, ip),
          resting: Op
        }, cp), Sp
      }
      pipelineOf(pp, ip, cp) {
        const Op = this.pipelineIdNow(pp, ip, !1, cp),
          op = this.pipelines.get(Op);
        return void 0 !== op ? op : (this.startPipeline(Op, pp, this.programKey(pp, ip), cp), null)
      }
      pipelineIdNow(pp, ip, cp, Op) {
        const {
          lighting: op,
          dirLightCount: Ip
        } = this, {
          transparencyMode: Sp,
          backFaceCulling: xp
        } = pp.model, Lp = this.packVariant(pp, this.Dy), Yp = (ip ? 2 : 0) + (cp ? 1 : 0), Dp = pp.pipelineIds[Yp];
        if (null !== Dp && Dp.lighting === op && Dp.dirLightCount === Ip && Dp.packVariant === Lp && Dp.transparencyMode === Sp && Dp.cull === xp && Dp.atlasCount === pp.atlasCount && Dp.M6 === pp.M6 && Dp.atlasLayers === pp.atlasLayers && Dp.colorFormat === Op._colorFormat && Dp.depthStencilFormat === Op._depthStencilFormat && Dp.sampleCount === Op._sampleCount) return Dp.id;
        const Ap = this.programKey(pp, ip),
          Pp = this.pipelineId(pp, cp ? {
            ...Ap,
            resting: cp
          } : Ap, Op);
        return pp.pipelineIds[Yp] = {
          id: Pp,
          lighting: op,
          dirLightCount: Ip,
          packVariant: Lp,
          transparencyMode: Sp,
          cull: xp,
          atlasCount: pp.atlasCount,
          M6: pp.M6,
          atlasLayers: pp.atlasLayers,
          colorFormat: Op._colorFormat,
          depthStencilFormat: Op._depthStencilFormat,
          sampleCount: Op._sampleCount
        }, Pp
      }
      pipelineId(pp, ip, cp) {
        return IL(ip, this.isBlended(pp), pp.model.backFaceCulling, cp)
      }
      pipelineBuild(pp, ip, cp) {
        var Op;
        const op = this.pipelineId(pp, ip, cp);
        return null !== (Op = this.builds.get(op)) && void 0 !== Op ? Op : this.startPipeline(op, pp, ip, cp)
      }
      startPipeline(pp, ip, cp, Op) {
        var op;
        this.pipelines.set(pp, null);
        const Ip = io(cp),
          Sp = this.isBlended(ip),
          xp = this.shadowMask && Op._depthStencilFormat ? function(pp, ip, cp, Op) {
            if (void 0 === pp.packVariant || pp.liquid || ip) return "none";
            const op = (0, pc.g)(pp.packVariant);
            return null === op || void 0 === op || !op.sunShadow || !LO(op, cp) || op.discards || pp.alphaTest && EO(pp.packVariant) ? "none" : Op ? "edge" : "plain"
          }(cp, Sp, !!this.sunShadow, Op._sampleCount > 1) : "none";
        let Lp;
        try {
          Lp = co(cp, !!this.sunShadow, xp)
        } catch (wp) {
          if (!JO(cp)) throw wp;
          return this.failedPackBuild(pp, cp, Ip, wp)
        }
        const Yp = this.shaderModule(Lp, Ip),
          Dp = [];
        cp.packed || (Dp.push(function(pp, ip) {
          const cp = [{
            shaderLocation: pL.position,
            offset: si.d.nc,
            format: "float32x3"
          }, {
            shaderLocation: pL.normal,
            offset: si.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: pL.color,
            offset: si.d.colorOffset,
            format: "unorm8x4"
          }];
          return pp && cp.push({
            shaderLocation: pL.uv,
            offset: si.d.uvOffset,
            format: "float32x2"
          }), ip && cp.push({
            shaderLocation: pL.blockFlagWords,
            offset: si.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: si.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: cp
          }
        }("none" !== cp.texture, JO(cp))), cp.lighting && Dp.push(cL));
        const Ap = ip.model.backFaceCulling,
          Pp = {
            label: Ip,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, ip.bindGroupLayout, ...KI(this.device, cp, !!this.sunShadow, "none" !== xp)]
            }),
            vertex: {
              module: Yp,
              entryPoint: "mainVertex",
              buffers: Dp
            },
            fragment: di({
              module: Yp,
              entryPoint: "mainFragment"
            }, Op, Sp ? OL : null),
            depthStencil: Op._depthStencilFormat ? {
              format: Op._depthStencilFormat,
              depthCompare: null !== (op = Op._depthCompare) && void 0 !== op ? op : Ri,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Op._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Ap ? "back" : "none"
            }
          },
          Wp = cp.resting ? 0 : 1;
        this.compiling += Wp;
        const yp = "none" === xp ? this.device.createRenderPipelineAsync(Pp) : this.startMaskPipelines(Yp, Pp, "edge" === xp);
        yp.then((ip => {
          this.compiling -= Wp, this.pipelines.set(pp, ip)
        }), (pp => {
          this.compiling -= Wp, console.error(`Lite terrain pipeline ${Ip} failed`, pp), gx(this.device, cp, Ip, Yp, pp)
        }));
        const Up = {
          name: Ip,
          module: Yp,
          built: yp
        };
        return this.builds.set(pp, Up), Up
      }
      startMaskPipelines(pp, ip, cp) {
        const Op = ip.depthStencil,
          op = this.device.createRenderPipelineAsync(cp ? ip : {
            ...ip,
            depthStencil: {
              ...Op,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Ip = this.device.createRenderPipelineAsync({
            ...ip,
            label: `${ip.label}-prepass`,
            fragment: {
              module: pp,
              entryPoint: "prepassFragment",
              targets: [{
                format: Jx
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([op, Ip]).then((pp => {
          let [ip, cp] = pp;
          return this.prepassOf.set(ip, cp), this.maskPipelines++, ip
        }))
      }
      failedPackBuild(pp, ip, cp, Op) {
        console.error(`Lite terrain pipeline ${cp} failed`, Op), gx(this.device, ip, cp, null, Op);
        const op = Promise.reject(Op);
        op.catch((() => {}));
        const Ip = {
          name: cp,
          module: null,
          built: op
        };
        return this.builds.set(pp, Ip), Ip
      }
      checkShaderPack(pp) {
        return ax(pp, {
          device: this.device,
          target: this.target,
          material: pp => this.materialFor(pp),
          programKey: (pp, ip, cp) => this.programKey(pp, ip, cp),
          pipelineBuild: (pp, ip, cp) => this.pipelineBuild(pp, ip, cp)
        })
      }
      createBinding(pp, ip, cp) {
        return this.target = ip, {
          renderable: pp,
          pipeline: Ei(this.device, ip),
          draw: pp => {
            this.geometry.setDrawing(!0);
            try {
              return cp ? this.drawTransparent(pp, ip) : this.drawOpaque(pp, ip)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(pp, ip) {
        var cp, Op, op, Ip;
        const {
          HP: Sp
        } = pp;
        this.lighting = pp.ZU;
        const xp = (0, ux.u)(ip);
        this.dirLightCount = Math.min(xp, 4), this.Dy = null !== (cp = Sp.Dy) && void 0 !== cp ? cp : null, xp > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(pp, ip), this.animateMaterials(ip.animTick);
        const Lp = Sp.BP,
          Yp = Lp[0] !== this.originOffset[0] || Lp[1] !== this.originOffset[1] || Lp[2] !== this.originOffset[2];
        Yp && (this.originOffset[0] = Lp[0], this.originOffset[1] = Lp[1], this.originOffset[2] = Lp[2]);
        const Dp = ip.eye;
        this.eye[0] = Dp[0], this.eye[1] = Dp[1], this.eye[2] = Dp[2], this.writeShaderPackInputs();
        const Ap = ip.projectionMatrix,
          Pp = 0 === Ap[15];
        let Wp = 0;
        (Yp || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: yp
        } = this;
        Xi(this.transparentRenderable._worldCenter, ip, Mi), this.resetBatches(Pp), this.transparent.length = 0, this.unlit.length = 0;
        const Up = Sp.WP.epp,
          wp = Up / 2 * Math.sqrt(3);
        let vp = 0;
        const tp = !!this.Dy && CO(this.Dy.defineFor("liquid"));
        let Hp = !1;
        const dp = null !== (Op = null === (op = Sp.Zk) || void 0 === op ? void 0 : op.visibility) && void 0 !== Op ? Op : null,
          ep = this.visCull && Pp && 0 === this.compiling && null !== dp && Sp.WP.FOp[0] >= this.visCullMinDistance ? this.target : null,
          jp = this.visPassable,
          kp = this.visCandidates,
          mp = this.visCandidateBatches;
        jp.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Rp = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let qp = 0;
        const Mp = (pp, cp) => {
          if (!cp) return this.transparent.push(pp), void(qp += 2 * pp.faceCount);
          if (null !== pp.faceGroups && cp.faceCull) {
            if (0 === Wp && (Wp = (0, rx.c)(Ap, ip.renderWidth, ip.renderHeight), Wp !== this.faceFocalPx && (this.faceFocalPx = Wp, yp = ++this.faceEpoch)), pp.faceEpoch !== yp) {
              pp.faceEpoch = yp;
              const ip = Math.sqrt(pp.distance) + wp,
                cp = (0, rx.g)(pp.planePX, pp.planeNX, pp.planePY, pp.planeNY, pp.planePZ, pp.planeNZ, this.eye[0] - (pp.origin[0] - this.originOffset[0]), this.eye[1] - (pp.origin[1] - this.originOffset[1]), this.eye[2] - (pp.origin[2] - this.originOffset[2]), (0, rx.d)(ip, Wp));
              cp !== pp.faceMask && this.chooseFaceRanges(pp, pp.faceGroups, cp)
            }
            if (0 === pp.rangeCount) return
          } else - 1 !== pp.faceMask && this.drawWhole(pp);
          cp.meshes.push(pp), qp += 2 * ((pp.rangeCount > 0 ? pp.count0 : 0) + (pp.rangeCount > 1 ? pp.count1 : 0))
        };
        for (const Ep of this.chunks.values()) {
          Yp && this.writeSlot(Ep);
          const pp = Ep.mesh.visibility;
          pp !== Ep.visibility && (Ep.visibility = pp, this.slots.setVisibility(Ep.slot, pp));
          const {
            material: cp
          } = Ep;
          this.geometry.lost(Ep) && performance.now() >= Ep.lostRetryAt && this.remeshLost(Sp, Ep);
          const Op = !(null === cp || void 0 === cp || !cp.bindGroup) && this.geometry.backed(Ep),
            op = Op && this.lighting && !Ep.vertices.page.twin;
          if (ep && (Number.isNaN(Ep.key) && (Ep.ci = Math.floor(Ep.origin[0] / Up), Ep.cj = Math.floor(Ep.origin[1] / Up), Ep.ck = Math.floor(Ep.origin[2] / Up), Ep.key = (0, zx.j)(Ep.ci, Ep.cj, Ep.ck)), (!Op || pp < 1 || op || !this.batchDraws(cp, Ep.packed, ep)) && this.visSeeThrough(Ep, ep) && jp.add(Ep.key)), !Op) continue;
          op || (Ep.lostRemeshes = 0);
          const Ip = Ep.origin[0] - this.originOffset[0],
            xp = Ep.origin[1] - this.originOffset[1],
            Lp = Ep.origin[2] - this.originOffset[2];
          if (!(0, Dx.b)(ip.frustum, Ip, xp, Lp, Up)) continue;
          const Dp = Ip + Up / 2 - this.eye[0],
            Ap = xp + Up / 2 - this.eye[1],
            Wp = Lp + Up / 2 - this.eye[2];
          if (Ep.distance = Dp * Dp + Ap * Ap + Wp * Wp, this.lighting && !Ep.lit && (vp = Math.max(vp, Ep.vertexCount), this.unlit.push(Ep)), op) continue;
          const yp = this.isBlended(cp) ? null : this.batchFor(cp, Ep.packed, Ep.vertices.page, 1 === pp, Pp);
          ep ? (kp[Rp] = Ep, mp[Rp++] = yp) : Mp(Ep, yp)
        }
        const Cp = ep ? this.sweepVisibility(pp, ip, dp) : null;
        null === (Ip = (0, bI.v)(Sp)) || void 0 === Ip || Ip.update(ip.frustum, this.originOffset, Up, Cp);
        for (let Ep = 0; Ep < Rp; Ep++) {
          const pp = kp[Ep];
          !Cp || Cp.isDrawn(pp.ci, pp.cj, pp.ck) ? Mp(pp, mp[Ep]) : (this.visCulledParts++, this.visCulledTriangles += 2 * pp.faceCount)
        }
        for (const Ep of this.transparent) Hp ||= tp && Ep.material.liquid && !Ep.material.customRenderMat;
        this.submittedTriangles = qp, Cp && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(pp, ip, Cp)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Hp) : Hp && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && vp > 0 && this.geometry.lightFullSky(this.unlit, vp);
        for (const Ep of this.opaqueBatches) this.chunkSorter.sort(Ep.meshes, 1) || Ep.meshes.sort(SL);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(xL)
      }
      sweepVisibility(pp, ip, cp) {
        const {
          WP: Op
        } = pp.HP, op = Op.epp, Ip = this.visPassable, Sp = this.eye[0] + this.originOffset[0], xp = this.eye[1] + this.originOffset[1], Lp = this.eye[2] + this.originOffset[2];
        if (!cp.eyeClear(Sp, xp, Lp, ip.near, ip.projectionMatrix, Op)) return null;
        const [Yp, Dp] = Op.FOp, Ap = cp.update(Sp, xp, Lp, op, Yp, Dp, Ip);
        return this.visSweeps = cp.sweeps, Ap ? cp : null
      }
      visSeeThrough(pp, ip) {
        const {
          material: cp
        } = pp;
        return (!cp || !this.isBlended(cp)) && (pp.mesh.visibility < 1 || !(null !== cp && void 0 !== cp && cp.bindGroup) || pp.faceCount > 0 && (!this.geometry.backed(pp) || this.lighting && !pp.vertices.page.twin) || !this.batchDraws(cp, pp.packed, ip))
      }
      batchDraws(pp, ip, cp) {
        var Op;
        const op = ip ? 2 : 0;
        if (pp === this.visDrawsMaterial && function(pp, ip) {
            return 0 !== (pp & 1 << ip)
          }(this.visDrawsBits, op)) return 0 !== (this.visDrawsBits & 2 << op);
        let Ip = null !== (Op = this.visBatchDraws.get(pp)) && void 0 !== Op ? Op : 0;
        if (!(Ip & 1 << op)) {
          Ip |= 1 << op | (!!pp.bindGroupLayout && this.canDraw(pp, ip) && !!this.pipelines.get(this.pipelineIdNow(pp, ip, !1, cp)) ? 2 << op : 0), this.visBatchDraws.set(pp, Ip)
        }
        return this.visDrawsMaterial = pp, this.visDrawsBits = Ip, 0 !== (Ip & 2 << op)
      }
      runVisCheck(pp, ip, cp) {
        const {
          HP: Op
        } = pp, {
          WP: op
        } = Op, Ip = op.epp, Sp = new Set;
        for (const Wp of this.chunks.values()) Sp.add(Wp.key);
        const xp = ro.Matrix.FromArray(ip.viewProjectionMatrix).invert(),
          [Lp, Yp, Dp] = this.originOffset,
          Ap = new ro.Zy,
          Pp = function(pp, ip, cp, Op) {
            const op = new Set;
            for (let Ip = 0; Ip < 27; Ip++)
              for (let Sp = 0; Sp < 48; Sp++) {
                const xp = cp((Sp + .5) / 48 * 2 - 1, (Ip + .5) / 27 * 2 - 1);
                sx(pp, ip, [xp[0] - ip[0], xp[1] - ip[1], xp[2] - ip[2]], Op, op)
              }
            return op
          }({
            wG: (pp, ip, cp) => op.wG(pp, ip, cp),
            occluders: cp.occluders,
            opaque: cp.opaque,
            Qy: Ip,
            isDrawn: (pp, ip, Op) => cp.isDrawn(pp, ip, Op),
            hasParts: (pp, ip, cp) => Sp.has((0, zx.j)(pp, ip, cp))
          }, [this.eye[0] + Lp, this.eye[1] + Yp, this.eye[2] + Dp], ((pp, ip) => (ro.Zy.TransformCoordinatesFromFloatsToRef(pp, ip, .5, xp, Ap), [Ap.x + Lp, Ap.y + Yp, Ap.z + Dp])), (op.FOp[0] + 1) * Ip);
        this.visViolations = Pp.size;
        for (const Wp of Pp) this.warnOnce(`vis:${Wp}`, `Lite terrain cave culling skipped chunk ${Wp}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var pp;
        null !== (pp = this.Dy) && void 0 !== pp && pp.isRunning() && (this.shaderPackInputs ??= new VI(this.device, this.Dy.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Dy, this.eye, this.lighting))
      }
      bindShaderPackInputs(pp, ip, cp) {
        var Op, op, Ip, Sp;
        let xp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Lp = this.packVariant(ip, cp);
        if (void 0 === Lp) return;
        this.shaderPackInputs || (this.shaderPackInputs = new VI(this.device, cp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(cp, this.eye, this.lighting));
        const Yp = CO(Lp) ? null !== (Op = null === (op = this.sceneDepth) || void 0 === op ? void 0 : op.view) && void 0 !== Op ? Op : this.standIn() : null,
          Dp = xp ? null !== (Ip = null === (Sp = this.shadowMask) || void 0 === Sp ? void 0 : Sp.view) && void 0 !== Ip ? Ip : this.standIn() : null;
        this.shaderPackInputs.bind(pp, Yp, sI(Lp, !!this.sunShadow), Dp)
      }
      standIn() {
        return this.depthStandIn ??= this.device.createTexture({
          label: "scene-depth-stand-in",
          size: [1, 1],
          format: "r32float",
          usage: GPUTextureUsage.TEXTURE_BINDING
        }).createView()
      }
      sunShadowGroup() {
        var pp, ip;
        return null !== (pp = null === (ip = this.shaderPackInputs) || void 0 === ip ? void 0 : ip.bindGroupFor(null, !0)) && void 0 !== pp ? pp : null
      }
      resetBatches(pp) {
        const ip = this.opaqueBatches;
        let cp = 0;
        for (const Op of ip) Op.meshes.length > 0 && (Op.meshes.length = 0, Op.faceCull = this.batchFaceCull(Op.material, pp), ip[cp++] = Op);
        ip.length = cp
      }
      orderBatches() {
        const pp = this.opaqueBatches;
        for (let ip = 0; ip < pp.length; ip++) {
          const cp = pp[ip];
          cp.group = ip;
          for (let Op = 0; Op < ip; Op++) {
            const ip = pp[Op];
            if (ip.material === cp.material && ip.packed === cp.packed) {
              cp.group = ip.group;
              break
            }
          }
          cp.nearest = cp.meshes.length > 0 ? cp.meshes[0].distance : 1 / 0
        }
        pp.sort(Kx)
      }
      batchFor(pp, ip, cp, Op, op) {
        for (const Sp of this.opaqueBatches)
          if (Sp.material === pp && Sp.packed === ip && Sp.page === cp && Sp.resting === Op) return Sp;
        const Ip = {
          material: pp,
          packed: ip,
          page: cp,
          resting: Op,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(pp, op)
        };
        return this.opaqueBatches.push(Ip), Ip
      }
      batchFaceCull(pp, ip) {
        return !(!ip || !(0, Gx.v)(pp.model)) && (!this.Dy || ! function(pp) {
          var ip;
          return !(null === (ip = (0, pc.g)(pp)) || void 0 === ip || !ip.movesVertices)
        }(this.packVariant(pp, this.Dy)))
      }
      writeFrameUniforms(pp, ip) {
        const cp = this.frameUniforms,
          Op = BO;
        if ((0, ux.v)(pp, cp), cp[Op.fogInfos] = ip.fogEnabled ? ip.fogMode : 0, cp[Op.fogInfos + 1] = ip.fogStart, cp[Op.fogInfos + 2] = ip.fogEnd, cp[Op.fogInfos + 3] = ip.fogDensity, cp.set(ip.fogColour, Op.fogColour), cp[Op.outputHeight] = ip.renderHeight, cp.set(ip.ambientColour, Op.sceneAmbient), (0, ux.t)(ip, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const ip = (0, jx.h)(pp.UU, pp.Ty, pp.hy);
          for (let pp = 0; pp < 4; pp++) cp[Op.aoLevels + pp] = ip[pp] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, cp)
      }
      animateMaterials(pp) {
        const ip = TO.anim;
        for (const cp of this.materials.values()) cp.animated && (cp.uniformData[ip] = pp, this.device.queue.writeBuffer(cp.uniformBuffer, 4 * ip, cp.uniformData, ip, 1))
      }
      canDraw(pp, ip) {
        return !("atlas" === pp.texture && !ip) || (this.warnOnce(`stride:${pp.id}`, `Lite terrain: material "${pp.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(pp, ip) {
        let cp = 0;
        pp.setBindGroup(1, this.frameBindGroup);
        for (const Op of this.opaqueBatches) {
          if (!Op.meshes.length || !this.canDraw(Op.material, Op.packed)) continue;
          const op = this.pipelineFor(Op.material, Op.packed, ip, Op.resting);
          op && (pp.setPipeline(op), pp.setBindGroup(2, Op.material.bindGroup), this.Dy && this.bindShaderPackInputs(pp, Op.material, this.Dy, this.prepassOf.has(op)), cp += this.drawBatch(pp, Op))
        }
        return cp
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(pp, ip, cp) {
        const Op = this.target,
          op = this.Dy;
        if (!Op || !op || 0 === this.maskPipelines) return 0;
        let Ip = 0,
          Sp = null;
        this.geometry.setDrawing(!0);
        try {
          for (const xp of this.opaqueBatches) {
            if (!xp.meshes.length || !this.canDraw(xp.material, xp.packed)) continue;
            const Lp = this.pipelineFor(xp.material, xp.packed, Op, xp.resting),
              Yp = Lp && this.prepassOf.get(Lp);
            Yp && (Sp || (Sp = pp.beginRenderPass(ip), Sp.setBindGroup(0, cp), Sp.setBindGroup(1, this.frameBindGroup)), Sp.setPipeline(Yp), Sp.setBindGroup(2, xp.material.bindGroup), this.bindShaderPackInputs(Sp, xp.material, op, !0), Ip += this.drawBatch(Sp, xp))
          }
        } finally {
          var xp;
          null === (xp = Sp) || void 0 === xp || xp.end(), this.geometry.setDrawing(!1)
        }
        return Ip
      }
      drawBatch(pp, ip) {
        let cp = 0;
        for (const Op of ip.meshes) {
          const {
            rangeCount: ip
          } = Op;
          ip > 0 && (cp += this.geometry.draw(pp, Op, this.lighting, Op.first0, Op.count0), ip > 1 && (cp += this.geometry.draw(pp, Op, this.lighting, Op.first1, Op.count1)))
        }
        return cp
      }
      drawTransparent(pp, ip) {
        let cp = 0,
          Op = null,
          op = null;
        pp.setBindGroup(1, this.frameBindGroup);
        for (const Ip of this.transparent) {
          const Sp = Ip.material;
          if (!this.canDraw(Sp, Ip.packed)) continue;
          const xp = this.pipelineFor(Sp, Ip.packed, ip);
          xp && (xp !== Op && (pp.setPipeline(xp), Op = xp, this.Dy && this.bindShaderPackInputs(pp, Sp, this.Dy)), Sp !== op && (pp.setBindGroup(2, Sp.bindGroup), op = Sp), cp += this.geometry.draw(pp, Ip, this.lighting))
        }
        return cp
      }
    }

    function IL(pp, ip, cp, Op) {
      return `${io(pp)}|${pp.atlasLayers}|${pp.M6}|${ip}|${cp}|${Op._colorFormat}|${Op._depthStencilFormat}|${Op._sampleCount}`
    }

    function SL(pp, ip) {
      return pp.distance - ip.distance
    }

    function xL(pp, ip) {
      return ip.distance - pp.distance
    }
    class LL {
      constructor() {
        this.left = []
      }
      sort(pp, ip) {
        for (let cp = 0; cp < pp.length; cp++) {
          const ip = pp[cp].distance;
          if (ip - ip !== 0) return !1
        }
        return this.sortRange(pp, 0, pp.length, ip), !0
      }
      sortRange(pp, ip, cp, Op) {
        if (cp - ip <= 16) {
          for (let op = ip + 1; op < cp; op++) {
            const cp = pp[op],
              Ip = Op * cp.distance;
            let Sp = op - 1;
            for (; Sp >= ip && Op * pp[Sp].distance > Ip; Sp--) pp[Sp + 1] = pp[Sp];
            pp[Sp + 1] = cp
          }
          return
        }
        const op = ip + cp >>> 1;
        if (this.sortRange(pp, ip, op, Op), this.sortRange(pp, op, cp, Op), Op * pp[op - 1].distance <= Op * pp[op].distance) return;
        const {
          left: Ip
        } = this, Sp = op - ip;
        for (let Dp = 0; Dp < Sp; Dp++) Ip[Dp] = pp[ip + Dp];
        let xp = 0,
          Lp = op,
          Yp = ip;
        for (; xp < Sp && Lp < cp;) pp[Yp++] = Op * pp[Lp].distance < Op * Ip[xp].distance ? pp[Lp++] : Ip[xp++];
        for (; xp < Sp;) pp[Yp++] = Ip[xp++]
      }
    }
    const YL = Math.ceil(102);

    function DL(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ip;
      const Ip = Math.min(ip, cp),
        Sp = new Uint32Array(mc(Op));
      for (let xp = 0; xp < Op; xp++) {
        const ip = Math.floor(xp * Ip / Op),
          cp = Math.max(ip + 1, Math.floor((xp + 1) * Ip / Op));
        for (let Lp = 0; Lp < Op; Lp++) {
          const Yp = Math.floor(Lp * Ip / Op),
            Dp = Math.max(Yp + 1, Math.floor((Lp + 1) * Ip / Op));
          let Ap = 0;
          for (let Op = ip; Op < cp; Op++)
            for (let ip = Yp; ip < Dp; ip++) pp[Op * op + ip] >= YL && Ap++;
          if (2 * Ap >= (cp - ip) * (Dp - Yp)) {
            const pp = Lp + Op * xp;
            Sp[pp >>> 5] |= 1 << (31 & pp)
          }
        }
      }
      return Sp
    }

    function AL(pp) {
      return Math.max(1, Math.min(16, pp))
    }
    class PL {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = pp, this.loadTexture = ip, this.warn = cp, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(pp, ip) {
        return (pp.jT !== this.builtVersion || this.blockCaster.length !== ip) && (this.build(pp, ip), !0)
      }
      build(pp, ip) {
        this.builtVersion = pp.jT;
        const cp = new Uint16Array(ip),
          Op = new Map;
        for (let op = 1; op < ip; op++) {
          const ip = this.classify(pp, op, Op);
          if (null === ip || ip === dc) {
            cp[op] = null === ip ? 0 : dc;
            continue
          }
          let Ip = this.byKey.get(ip.key);
          void 0 === Ip && (Ip = this.allocate(ip), this.byKey.set(ip.key, Ip)), cp[op] = Ip
        }
        this.blockCaster = cp, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(pp, ip) {
        const cp = pp.W8[ip];
        if ("function" !== typeof cp) return cp;
        try {
          return cp()
        } catch (Op) {
          return this.warnOnce(`Sun shadows: no caster option for block ${ip}: ${Op instanceof Error?Op.message:String(Op)}`), null
        }
      }
      classify(pp, ip, cp) {
        const Op = this.option(pp, ip);
        if ("none" === Op) return null;
        if (Op && Op.planes.length > 0) {
          const pp = Op.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(pp)}`,
            planes: pp
          }
        }
        if (pp.vW[ip]) return null;
        const op = pp.HW[ip] ? pp.XT(ip) : null;
        if (op && op.length >= 6) {
          const pp = function(pp) {
            const ip = new Uint32Array(16);
            for (let cp = 0; cp + 6 <= pp.length; cp += 6) {
              const Op = [0, 1, 2].map((ip => Math.max(0, Math.ceil(8 * pp[cp + ip] - .5)))),
                op = [0, 1, 2].map((ip => Math.min(7, Math.floor(8 * pp[cp + ip + 3] - .5))));
              for (let pp = Op[2]; pp <= op[2]; pp++)
                for (let cp = Op[1]; cp <= op[1]; cp++)
                  for (let Ip = Op[0]; Ip <= op[0]; Ip++) {
                    const Op = Ip + 8 * (cp + 8 * pp);
                    ip[Op >>> 5] |= 1 << (31 & Op)
                  }
            }
            return ip
          }(op);
          return function(pp) {
            return pp.every((pp => 4294967295 === pp))
          }(pp) ? dc : pp.every((pp => 0 === pp)) ? null : {
            kind: "shape",
            key: `shape:${pp.join(",")}`,
            mask: pp
          }
        }
        if (pp.Yq[ip] || !pp.wU[ip]) return null;
        const Ip = [0, 1, 2, 3, 4, 5].map((Op => {
          const op = pp.vU[6 * ip + Op];
          let Ip = cp.get(op);
          return void 0 === Ip && (Ip = function(pp) {
            if (!pp || pp.qU) return null;
            const {
              R6: ip,
              M6: cp,
              w6: Op
            } = pp;
            if (!ip || !cp || !(cp > 0) || void 0 === Op || !(Op >= 0)) return null;
            const op = ip[0],
              Ip = cp * cp * 4;
            if (!op || op.byteLength < Ip) return null;
            const Sp = Math.floor(op.byteLength / Ip),
              xp = ip[Math.floor(Op / Sp)];
            if (!xp) return null;
            const Lp = new Uint8Array(xp.buffer, xp.byteOffset, xp.byteLength),
              Yp = Op % Sp * Ip;
            if (Yp + Ip > Lp.length) return null;
            const Dp = new Uint8Array(cp * cp);
            let Ap = !1;
            for (let Pp = 0; Pp < Dp.length; Pp++) Dp[Pp] = Lp[Yp + 4 * Pp + 3], Ap ||= Dp[Pp] < YL;
            return Ap ? {
              alpha: Dp,
              width: cp
            } : null
          }(pp.RU(op)), cp.set(op, Ip)), Ip
        }));
        if (Ip.every((pp => null === pp))) return dc;
        const Sp = AL(Math.max(...Ip.map((pp => {
            var ip;
            return null !== (ip = null === pp || void 0 === pp ? void 0 : pp.width) && void 0 !== ip ? ip : 1
          })))),
          xp = new Uint32Array(mc(Sp)).fill(4294967295),
          Lp = Ip.map((pp => null === pp ? xp : DL(pp.alpha, pp.width, pp.width, Sp)));
        return {
          kind: "cutout",
          key: `cutout:${Sp}:${Lp.map((pp=>pp.join(","))).join("|")}`,
          size: Sp,
          faces: Lp
        }
      }
      allocate(pp) {
        if (this.nextCaster >= Rc) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const ip = this.nextCaster++;
        if (this.writeCaster(ip, ec, 0, 0, 0), "shape" === pp.kind) {
          const cp = this.allocateMask(pp.mask.length);
          cp >= 0 && (this.sink(cp, pp.mask), this.writeCaster(ip, uc, cp, 0, 8))
        } else if ("cutout" === pp.kind) {
          const cp = mc(pp.size),
            Op = this.allocateMask(6 * cp);
          if (Op >= 0) {
            const op = new Uint32Array(6 * cp);
            pp.faces.forEach(((pp, ip) => {
              op.set(pp, ip * cp)
            })), this.sink(Op, op), this.writeCaster(ip, kc, Op, 0, pp.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(ip, pp.planes).finally((() => {
          this.planesLoading--
        })));
        return ip
      }
      async loadPlanes(pp, ip) {
        const cp = await Promise.all(ip.map((pp => this.texture(pp.texture))));
        if (cp.some((pp => null === pp))) return;
        const Op = cp,
          op = AL(Math.max(...Op.map((pp => Math.min(pp.width, pp.height))))),
          Ip = mc(op),
          Sp = this.allocateMask(ip.length * (4 + Ip));
        if (Sp < 0) return;
        const xp = new Uint32Array(ip.length * (4 + Ip)),
          Lp = 4 * ip.length;
        ip.forEach(((pp, ip) => {
          const cp = Sp + Lp + ip * Ip;
          xp.set(function(pp, ip) {
            const [cp, Op] = pp.tangent, op = Math.hypot(cp, Op) || 1, Ip = cp / op, Sp = Op / op, xp = pp.centre[0] * Sp - pp.centre[1] * Ip, Lp = new Uint32Array(4);
            return new Float32Array(Lp.buffer, 0, 3).set([Ip, Sp, xp]), Lp[3] = ip, Lp
          }(pp, cp), 4 * ip), xp.set(DL(Op[ip].alpha, Op[ip].width, Op[ip].height, op), Lp + ip * Ip)
        })), this.sink(Sp, xp), this.writeCaster(pp, jc, Sp, ip.length, op)
      }
      texture(pp) {
        let ip = this.textures.get(pp);
        return ip || (ip = this.loadTexture(pp).catch((ip => (this.warn(`Sun shadows: no mask for ${pp}: ${ip instanceof Error?ip.message:String(ip)}`), null))), this.textures.set(pp, ip)), ip
      }
      allocateMask(pp) {
        if (this.nextMaskWord + pp > qc) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const ip = 32768 + this.nextMaskWord;
        return this.nextMaskWord += pp, ip
      }
      writeCaster(pp, ip, cp, Op, op) {
        this.sink(0 + 4 * pp, Uint32Array.of(ip, cp, Op, op))
      }
      warnOnce(pp) {
        this.warned.has(pp) || (this.warned.add(pp), this.warn(pp))
      }
    }
    var WL = cp(2929);

    function yL(pp) {
      return !pp.CU && !pp.jR && !pp.SU
    }

    function UL() {
      return {
        bricks: new Uint32Array(Pc),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Dc)
      }
    }
    class wL {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = pp, this.writeVoxels = ip, this.writePool = cp, this.warn = Op, this.eyeChunk = null, this.slotChunk = new Array(oc).fill(null), this.slotVersion = new Float64Array(oc).fill(-1), this.slotPool = new Array(oc).fill(null), this.starved = new Uint8Array(oc), this.queue = [], this.queued = new Uint8Array(oc), this.queueSorted = !0, this.freePool = new Uint32Array(Mc), this.freeCount = Mc, this.casterTable = null, this.warnedPool = !1, this.scratch = UL(), this.victimScratch = UL(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * oc), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let op = 0; op < Mc; op++) this.freePool[op] = 65535 - op
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Mc - this.freeCount
      }
      chunkAdded(pp) {
        if (null === this.eyeChunk || !this.inRadius(pp.i, pp.j, pp.k)) return;
        const ip = vc(pp.i, pp.j, pp.k);
        this.slotChunk[ip] = pp, this.slotVersion[ip] = -1, this.enqueue(ip)
      }
      update(pp, ip, cp) {
        const Op = this.casters.blockCaster;
        if (Op !== this.casterTable) {
          this.casterTable = Op;
          for (let pp = 0; pp < oc; pp++) this.slotVersion[pp] = -1, this.slotChunk[pp] && this.enqueue(pp)
        }
        const op = Math.floor(pp[0] / 32),
          Ip = Math.floor(pp[1] / 32),
          Sp = Math.floor(pp[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== op || this.eyeChunk[1] !== Ip || this.eyeChunk[2] !== Sp) && (this.eyeChunk = [op, Ip, Sp], this.follow(ip), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let xp = 0; xp < oc; xp++) {
          const pp = this.slotChunk[xp];
          pp && (pp.uR || pp.YU !== this.slotVersion[xp]) && this.enqueue(xp)
        }
        this.drain(cp), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(pp, ip) {
        this.records.set(ip, 4 * pp), this.windowTopStale = !0, this.writeVoxels(4 * pp, ip)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const pp = this.records;
        let ip = -1 / 0;
        for (let Op = 0; Op < pp.length; Op += 4) {
          const cp = 255 & pp[Op + 3];
          cp !== xc && cp !== Lc || !this.inRadius(pp[Op], pp[Op + 1], pp[Op + 2]) || (ip = Math.max(ip, pp[Op + 1] * ic + (pp[Op + 3] >>> 8)))
        }
        const cp = ip === -1 / 0 ? 1 : ip + yc;
        cp !== this.windowTop[0] && (this.windowTop[0] = cp, this.writeVoxels(Wc, this.windowTop))
      }
      follow(pp) {
        const ip = this.eyeChunk,
          [cp, Op, op] = cc;
        for (let Sp = -op; Sp <= op; Sp++)
          for (let op = -Op; op <= Op; op++)
            for (let Op = -cp; Op <= cp; Op++) {
              var Ip;
              const cp = ip[0] + Op,
                xp = ip[1] + op,
                Lp = ip[2] + Sp,
                Yp = vc(cp, xp, Lp),
                Dp = this.slotChunk[Yp];
              if (Dp && !Dp.uR && Dp.i === cp && Dp.j === xp && Dp.k === Lp) continue;
              const Ap = null !== (Ip = pp(cp, xp, Lp)) && void 0 !== Ip ? Ip : null;
              Dp && (Dp.i !== cp || Dp.j !== xp || Dp.k !== Lp) && this.slotPool[Yp] && (this.release(Yp), this.record.fill(0), this.writeRecord(Yp, this.record)), this.slotChunk[Yp] = Ap, this.slotVersion[Yp] = -1, (Ap || Dp) && this.enqueue(Yp)
            }
      }
      requeueStarved() {
        for (let pp = 0; pp < oc; pp++) this.starved[pp] && this.slotChunk[pp] && this.enqueue(pp)
      }
      enqueue(pp) {
        this.queued[pp] || (this.queued[pp] = 1, this.queue.push(pp), this.queueSorted = !1)
      }
      drain(pp) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const pp = new Map;
          for (const ip of this.queue) pp.set(ip, this.slotDistance(ip));
          this.queue.sort(((ip, cp) => pp.get(cp) - pp.get(ip))), this.queueSorted = !0
        }
        const ip = performance.now();
        let cp = 0;
        const Op = [];
        for (; this.queue.length > 0 && (0 === cp || performance.now() - ip < pp);) {
          const pp = this.queue.pop(),
            ip = this.slotChunk[pp];
          !ip || ip.uR || yL(ip) ? (this.queued[pp] = 0, this.encodeSlot(pp), cp++) : Op.push(pp)
        }
        for (let op = Op.length - 1; op >= 0; op--) this.queue.push(Op[op])
      }
      slotDistance(pp) {
        const ip = this.slotChunk[pp],
          cp = this.eyeChunk;
        return ip ? Math.max(Math.abs(ip.i - cp[0]), Math.abs(ip.j - cp[1]), Math.abs(ip.k - cp[2])) : 0
      }
      inRadius(pp, ip, cp) {
        const Op = this.eyeChunk,
          [op, Ip, Sp] = cc;
        return Math.abs(pp - Op[0]) <= op && Math.abs(ip - Op[1]) <= Ip && Math.abs(cp - Op[2]) <= Sp
      }
      release(pp) {
        const ip = this.slotPool[pp];
        if (ip) {
          for (let pp = ip.length - 1; pp >= 0; pp--) this.freePool[this.freeCount++] = ip[pp];
          this.slotPool[pp] = null
        }
      }
      encodeSlot(pp) {
        var ip, cp, Op, op, Ip;
        let Sp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          xp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Lp = null !== (ip = null === (cp = this.slotPool[pp]) || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0;
        this.release(pp), this.starved[pp] = 0;
        const Yp = this.slotChunk[pp],
          Dp = this.record;
        if (!Yp || Yp.uR || !Yp.hP) return this.slotChunk[pp] = null, this.slotVersion[pp] = -1, Dp.fill(0), this.writeRecord(pp, Dp), void(Lp > 0 && this.requeueStarved());
        this.slotVersion[pp] = Yp.YU;
        const Ap = this.encodeBricks(Yp, pp, Sp, xp);
        Dp[0] = Yp.i, Dp[1] = Yp.j, Dp[2] = Yp.k, Dp[3] = Ap, this.writeRecord(pp, Dp), null === (Op = this.encoded) || void 0 === Op || Op.call(this, Yp), xp && (null !== (op = null === (Ip = this.slotPool[pp]) || void 0 === Ip ? void 0 : Ip.length) && void 0 !== op ? op : 0) < Lp && this.requeueStarved()
      }
      encodeBricks(pp, ip, cp, Op) {
        if (pp.ey) return Sc;
        const op = this.casters.blockCaster,
          {
            data: Ip,
            stride: Sp,
            offset: xp
          } = pp.hP,
          [Lp, Yp, Dp] = Sp,
          Ap = ic,
          {
            bricks: Pp,
            cells: Wp,
            special: yp
          } = cp;
        Pp.fill(0), yp.fill(0);
        let Up = 0,
          wp = 0,
          vp = 0;
        for (let tp = 0; tp < Ap; tp++) {
          const ip = tp >> 2,
            cp = 3 & tp,
            Op = pp.TW[tp],
            Sp = Op === WL.h ? -1 : Op < op.length ? op[Op] : 0;
          if (0 !== Sp)
            for (let pp = 0; pp < Ap; pp++) {
              const Op = pp >> 2,
                Hp = 3 & pp;
              let dp = xp + pp * Lp + tp * Yp;
              for (let pp = 0; pp < Ap; pp++, dp += Dp) {
                let xp = Sp;
                if (xp < 0) {
                  const pp = Ip[dp];
                  if (xp = pp < op.length ? op[pp] : 0, 0 === xp) continue
                }
                const Lp = tc(Op, ip, pp >> 2),
                  Yp = Hc(Hp, cp, 3 & pp);
                Pp[3 * Lp + (Yp >>> 5)] |= 1 << (31 & Yp), Wp[Lp * Yc + Yp] = xp, Up++, vp = tp, xp === dc ? wp++ : yp[Lp] = 1
              }
            }
        }
        return 0 === Up ? Sc : 32768 === wp ? xc | vp << 8 : (this.writePoolEntries(ip, cp, Op), this.writeVoxels(Ac + ip * Pc, Pp), Lc | vp << 8)
      }
      writePoolEntries(pp, ip, cp) {
        const {
          bricks: Op,
          cells: op,
          special: Ip
        } = ip, Sp = this.entry;
        let xp = 0;
        for (let Dp = 0; Dp < Dc; Dp++) xp += Ip[Dp];
        if (0 === xp) return;
        cp && this.freeCount < xp && this.evictBeyond(pp, xp);
        const Lp = new Uint32Array(cp ? Math.min(xp, this.freeCount) : 0);
        let Yp = 0;
        for (let Dp = 0; Dp < Dc; Dp++) {
          if (!Ip[Dp]) continue;
          const cp = 3 * Dp;
          if (Yp === Lp.length) {
            this.dropSpecials(ip, Dp), this.starved[pp] = 1;
            continue
          }
          const xp = this.freePool[--this.freeCount];
          Lp[Yp++] = xp;
          for (let pp = 0; pp < Yc; pp++) {
            const ip = Op[cp + (pp >>> 5)] >>> (31 & pp) & 1 ? op[Dp * Yc + pp] : 0;
            1 & pp ? Sp[pp >> 1] |= ip << 16 : Sp[pp >> 1] = ip
          }
          Op[cp + 2] = xp + 1, this.writePool(Cc + 32 * xp, Sp)
        }
        Lp.length > 0 && (this.slotPool[pp] = Lp)
      }
      evictBeyond(pp, ip) {
        const cp = this.slotDistance(pp),
          Op = [];
        for (let op = 0; op < oc; op++) op !== pp && this.slotPool[op] && this.slotDistance(op) > cp && Op.push(op);
        Op.sort(((pp, ip) => this.slotDistance(ip) - this.slotDistance(pp)));
        for (const op of Op) {
          if (this.freeCount >= ip) return;
          const pp = this.slotChunk[op];
          pp && !pp.uR && pp.hP && (pp.YU === this.slotVersion[op] || yL(pp)) && this.encodeSlot(op, this.victimScratch, !1)
        }
      }
      dropSpecials(pp, ip) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const cp = 3 * ip;
        for (let Op = 0; Op < Yc; Op++) pp.cells[ip * Yc + Op] !== dc && (pp.bricks[cp + (Op >>> 5)] &= ~(1 << (31 & Op)))
      }
    }
    var vL = cp(37698);
    class tL {
      constructor(pp) {
        this.device = pp, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new hc, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.WP = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = pp.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = pp.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(pp, ip, cp) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Op
        } = this;
        Op.mW(pp, ip), cp.forEachSunShadowCaster((pp => {
          this.add(pp)
        })), Op.finish();
        const op = 0 === Op.parts;
        if (op && this.uploadedEmpty) return;
        this.uploadedEmpty = op;
        const {
          queue: Ip
        } = this.device, {
          words: Sp
        } = Op;
        Ip.writeBuffer(this.frameBuffer, 0, Sp, 0, 16385), Op.refs > 0 && Ip.writeBuffer(this.frameBuffer, 65540, Sp, Qc, Op.refs), op || Ip.writeBuffer(this.frameBuffer, 327684, Sp, Jc, Op.parts * lc)
      }
      add(pp) {
        const ip = this.gridFor(pp);
        if (!ip) return;
        const {
          frame: cp
        } = this, {
          WP: Op,
          worldAt: op,
          instances: Ip,
          instanceCount: Sp,
          thin: xp
        } = pp;
        if (Ip)
          for (let Lp = 0; Lp < Sp; Lp++) xp ? (nc(Ip, 16 * Lp, Op, op, this.WP), cp.add(ip, this.WP)) : cp.add(ip, Ip, 16 * Lp);
        else cp.add(ip, Op, op)
      }
      gridFor(pp) {
        let {
          geometry: ip,
          indexed: cp,
          first: Op,
          count: op,
          skip: Ip
        } = pp, Sp = this.grids.get(ip);
        Sp || (Sp = new Map, this.grids.set(ip, Sp));
        const xp = `${cp?Op:-1-Op}:${op}:${null!==Ip&&void 0!==Ip?Ip:""}`;
        let Lp = Sp.get(xp);
        if (void 0 !== Lp || this.gridsFull) return Lp;
        const Yp = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Yp + 2;
        else if (Yp > this.bakeDeadline) return;
        return Lp = this.bake(ip, cp, Op, op, Ip), void 0 !== Lp && Sp.set(xp, Lp), Lp
      }
      bake(pp, ip, cp, Op, op) {
        const Ip = pp.vertexAttributes.find((pp => "position" === pp.kind)),
          Sp = Ip ? function(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Ip = pp => ip ? ip[cp + pp] : cp + pp,
              Sp = pp => null !== op && [0, 1, 2].some((ip => {
                const cp = Ip(pp + ip);
                return cp >= op[0] && cp < op[1]
              })),
              xp = [1 / 0, 1 / 0, 1 / 0],
              Lp = [-1 / 0, -1 / 0, -1 / 0];
            for (let tp = 0; tp + 2 < Op; tp += 3)
              if (!Sp(tp))
                for (let ip = 0; ip < 3; ip++) {
                  const cp = Ip(tp + ip);
                  for (let ip = 0; ip < 3; ip++) xp[ip] = Math.min(xp[ip], pp[3 * cp + ip]), Lp[ip] = Math.max(Lp[ip], pp[3 * cp + ip])
                }
            const Yp = Math.max(Lp[0] - xp[0], Lp[1] - xp[1], Lp[2] - xp[2]);
            if (!(Yp > 0)) return null;
            const Dp = Yp / 64,
              Ap = [0, 0, 0],
              Pp = [0, 0, 0],
              Wp = [0, 0, 0];
            for (let tp = 0; tp < 3; tp++) Ap[tp] = Math.min(65, Math.ceil((Lp[tp] - xp[tp]) / Dp) + 1), Pp[tp] = xp[tp] - Dp / 2, Wp[tp] = Pp[tp] + Ap[tp] * Dp;
            const yp = new Uint32Array(Math.ceil(Ap[0] * Ap[1] * Ap[2] / 32)),
              Up = new Float64Array(9),
              wp = [0, 0, 0],
              vp = [0, 0, 0];
            for (let tp = 0; tp + 2 < Op; tp += 3)
              if (!Sp(tp)) {
                for (let ip = 0; ip < 3; ip++) {
                  const cp = Ip(tp + ip);
                  for (let Op = 0; Op < 3; Op++) Up[3 * ip + Op] = pp[3 * cp + Op]
                }
                for (let pp = 0; pp < 3; pp++) {
                  const ip = Math.min(Up[pp], Up[3 + pp], Up[6 + pp]),
                    cp = Math.max(Up[pp], Up[3 + pp], Up[6 + pp]);
                  wp[pp] = Math.max(0, Math.floor((ip - Pp[pp]) / Dp - 1e-6)), vp[pp] = Math.min(Ap[pp] - 1, Math.floor((cp - Pp[pp]) / Dp + 1e-6))
                }
                for (let pp = wp[2]; pp <= vp[2]; pp++)
                  for (let ip = wp[1]; ip <= vp[1]; ip++)
                    for (let cp = wp[0]; cp <= vp[0]; cp++)
                      if (Fc(Up, Pp[0] + (cp + .5) * Dp, Pp[1] + (ip + .5) * Dp, Pp[2] + (pp + .5) * Dp, Dp / 2)) {
                        const Op = cp + Ap[0] * (ip + Ap[1] * pp);
                        yp[Op >>> 5] |= 1 << (31 & Op)
                      }
              } return {
              words: yp,
              lo: Pp,
              hi: Wp,
              cell: Dp,
              dims: Ap
            }
          }((0, vL.g)(Ip, pp.vertexCount), ip ? pp.indexData : null, cp, Op, op) : null;
        if (!Sp) return null;
        const {
          words: xp,
          ...Lp
        } = Sp;
        if (this.gridTop + xp.length > Nc) return void(this.gridsFull = !0);
        const Yp = this.gridTop;
        return this.gridTop += xp.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Yp, xp), {
          ...Lp,
          at: Yp
        }
      }
    }
    const HL = Math.cos(1 * Math.PI / 180);

    function dL(pp, ip) {
      return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2] < HL
    }
    async function eL(pp) {
      const {
        pixels: ip,
        width: cp,
        height: Op
      } = await ci(pp), op = new Uint8Array(cp * Op);
      for (let Ip = 0; Ip < op.length; Ip++) op[Ip] = ip[4 * Ip + 3];
      return {
        width: cp,
        height: Op,
        alpha: op
      }
    }
    class uL {
      constructor(pp, ip) {
        this.device = pp, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Gc.j), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = pp.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = pp.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Uc,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = pp.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [cp, Op, op] = Gc.n;
        this.volume = pp.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: cp,
            height: Op,
            depthOrArrayLayers: op
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = pp.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = pp.createBuffer({
          label: "sun-shadow-volume-work",
          size: Gc.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = ip ? new tL(pp) : null, this.entityStandIn = ip ? null : pp.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var pp;
        null === (pp = this.stopWindow) || void 0 === pp || pp.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var pp, ip;
        const cp = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || cp.push("Lite sun shadow volume pipeline compiling");
        const Op = null !== (pp = null === (ip = this.casters) || void 0 === ip ? void 0 : ip.planesLoading) && void 0 !== pp ? pp : 0;
        return Op > 0 && cp.push(`${Op} Lite sun shadow plane casters loading their textures`), cp
      }
      entries() {
        var pp, ip, cp, Op;
        const op = Vi.r;
        return [{
          binding: op.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: op.hP,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: op.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: op.volume,
          resource: this.volumeView
        }, {
          binding: op.sampler,
          resource: this.volumeSampler
        }, {
          binding: op.entities,
          resource: {
            buffer: null !== (pp = null === (ip = this.entities) || void 0 === ip ? void 0 : ip.frameBuffer) && void 0 !== pp ? pp : this.entityStandIn
          }
        }, {
          binding: op.entityGrids,
          resource: {
            buffer: null !== (cp = null === (Op = this.entities) || void 0 === Op ? void 0 : Op.gridBuffer) && void 0 !== cp ? cp : this.entityStandIn
          }
        }]
      }
      prepare(pp, ip, cp) {
        var Op;
        this.entitiesThisFrame = !1;
        const op = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.sunShadowReach()) && void 0 !== Op ? Op : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!cp || !op.sunShadow && !op.airShadow) return void(this.volumeHolds = null);
        if (pp.WP.epp !== ic) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${pp.WP.epp}; everything is lit.`)));
        const Ip = this.start(pp);
        this.casters.update(pp.UW, pp.UW.HW.length);
        const Sp = pp.BP;
        for (let Pp = 0; Pp < 3; Pp++) this.eye[Pp] = ip[Pp] + Sp[Pp];
        const xp = (0, Gc.t)(this.eye);
        this.staleNear = xp;
        const Lp = pp.WP.XU;
        Ip.update(this.eye, ((pp, ip, cp) => Lp.lU(pp, ip, cp)), 1);
        const Yp = (0, Gc.o)(cp.opp()),
          Dp = Ip.eyeChunk,
          Ap = this.uniformInts;
        for (let Pp = 0; Pp < 3; Pp++) Ap[Pp] = Dp[Pp], Ap[4 + Pp] = xp[Pp];
        this.entitiesThisFrame = null !== this.entities && op.sunShadow, this.entitiesThisFrame && bc(this.uniformFloats, 8, ip, Yp), null !== this.volumeHolds && (this.castersWritten || dL(Yp, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(xp, Yp, Dp)
      }
      markStale(pp) {
        const ip = this.staleNear,
          cp = ic,
          Op = [pp.i * cp, pp.j * cp, pp.k * cp];
        for (let Ip = 0; Ip < 3; Ip++)
          if (Op[Ip] + cp <= ip[Ip] - cp || Op[Ip] >= ip[Ip] + Gc.n[Ip] + cp) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const op = this.stale;
        for (let Ip = 0; Ip < op.length; Ip += 4)
          if (op[Ip] === pp.i && op[Ip + 1] === pp.j && op[Ip + 2] === pp.k) return void(op[Ip + 3] = this.swept);
        if (16 === op.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        op.push(pp.i, pp.j, pp.k, this.swept)
      }
      writeStale() {
        const pp = this.swept,
          ip = this.stale;
        this.staleAll && pp - this.staleAllSwept >= Gc.f && (this.staleAll = !1, ip.length = 0);
        let cp = 0;
        for (let op = 0; op < ip.length; op += 4)
          if (pp - ip[op + 3] < Gc.f) {
            for (let pp = 0; pp < 4; pp++) ip[cp + pp] = ip[op + pp];
            cp += 4
          } ip.length = cp;
        const Op = this.uniformInts;
        Op[3] = this.staleAll ? 5 : cp / 4;
        for (let op = 0; op < 4; op++)
          for (let pp = 0; pp < 3; pp++) Op[16 + 4 * op + pp] = 4 * op < cp ? ip[4 * op + pp] * ic : 0
      }
      writeUniform() {
        const pp = this.uniformInts;
        let ip = this.uniformWritten;
        if (ip) {
          let cp = !0;
          for (let Op = 0; Op < pp.length && cp; Op++) cp = pp[Op] === ip[Op];
          if (cp) return
        }
        ip ??= this.uniformWritten = new Int32Array(pp.length), ip.set(pp), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(pp) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, pp)
      }
      computeVolume(pp, ip, cp) {
        const Op = this.buildVolumePass();
        if (!Op) return void(this.volumeHolds = null);
        const op = (0, Gc.r)(this.volumeHolds, pp);
        this.volumeHolds = pp;
        const Ip = 1 === op.length && op[0].size.every(((pp, ip) => pp === Gc.n[ip])),
          Sp = this.sweptChunk,
          xp = this.sweptLight,
          Lp = ip[0] !== xp[0] || ip[1] !== xp[1] || ip[2] !== xp[2],
          Yp = cp[0] !== Sp[0] || cp[1] !== Sp[1] || cp[2] !== Sp[2],
          Dp = Lp && dL(ip, xp);
        if ((Ip || this.written || Yp || Dp) && (this.fastLeft = Gc.f), Ip || this.written || Lp || Yp) {
          this.written = !1;
          for (let pp = 0; pp < 3; pp++) Sp[pp] = cp[pp], xp[pp] = ip[pp];
          this.sweepLeft = Ip ? 0 : Gc.f
        }
        if (Ip ? this.swept += Gc.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, op.push(...(0, Gc.u)(pp, this.slice)), this.slice = (this.slice + 1) % Gc.f, this.swept++), 0 === op.length) return;
        const Ap = (0, Gc.v)(this.workData, ip, op);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Pp = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Wp = Pp.beginComputePass({
            label: "sun-shadow-volume"
          });
        Wp.setPipeline(Op.pipeline), Wp.setBindGroup(zc.group, Op.bindGroup), Wp.dispatchWorkgroups(Math.ceil(Ap / Gc.i)), Wp.end(), this.device.queue.submit([Pp.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const pp = zc,
          ip = GPUShaderStage.COMPUTE,
          cp = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: pp.uniform,
              visibility: ip,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: pp.hP,
              visibility: ip,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: pp.special,
              visibility: ip,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: pp.work,
              visibility: ip,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: pp.volume,
              visibility: ip,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Op = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: cp,
            entries: [{
              binding: pp.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: pp.hP,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: pp.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: pp.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: pp.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [cp]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: sc()
            }),
            entryPoint: "main"
          }
        }).then((pp => {
          this.volumePass = {
            pipeline: pp,
            bindGroup: Op
          }
        }), (pp => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(pp)}`)
        })), null
      }
      start(pp) {
        if (this.window) return this.window;
        const ip = (pp, ip) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * pp, ip)
        };
        this.casters = new PL(((pp, cp) => {
          this.castersWritten = !0, ip(pp, cp)
        }), eL);
        const cp = new wL(this.casters, ((pp, ip) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * pp, ip)
        }), ip);
        cp.encoded = pp => {
          this.markStale(pp)
        };
        const Op = pp => {
          cp.chunkAdded(pp)
        };
        return pp.WP.on("chunkAdded", Op), this.stopWindow = () => {
          pp.WP.removeListener("chunkAdded", Op)
        }, this.window = cp, cp
      }
    }
    var jL = cp(38930),
      kL = cp(38938);
    const mL = 0,
      RL = 3,
      qL = 4,
      ML = 5;

    function CL(pp, ip, cp, Op) {
      pp.drawOffset(ip, Op + mL), ip[Op + RL] = pp.drawTime(), cp[Op + qL] = pp.ring.drawStart(), cp[Op + ML] = pp.ring.drawCount()
    }
    const EL = `\n${hO}\n\nconst MAX_STOPS = ${kL.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${kL.d/4}>,\n\tcolor1: array<vec4f, ${kL.d}>,\n\tcolor2: array<vec4f, ${kL.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${kL.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${kL.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var XL = cp(41864);
    class lL {
      constructor(pp, ip, cp, Op) {
        this.device = pp, this.system = ip, this.frameIndex = cp, this.bindings = Op, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, XL.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (pp, ip) => {
          this.device.queue.writeBuffer(this.ring, pp * kL.e * 4, this.system.ring.records, pp * kL.e, (ip - pp) * kL.e)
        };
        const {
          name: op
        } = ip;
        this.ring = pp.createBuffer({
          label: `particles-${op}`,
          size: ip.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = pp.createBuffer({
          label: `particles-uniforms-${op}`,
          size: 4 * kL.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(pp) {
        const ip = (0, XL.d)(this.system, this.uniformBits, pp);
        ip && (this.uniformBits = ip, this.device.queue.writeBuffer(this.uniforms, 0, ip))
      }
      bind() {
        const {
          system: pp
        } = this, ip = this.texture;
        (0, XL.m)(pp, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${pp.name}`,
          size: [kL.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * kL.k
        }, [kL.k, 1]));
        const cp = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === ip.view && this.boundSampler === ip.sampler && this.boundRamp === cp || (this.boundView = ip.view, this.boundSampler = ip.sampler, this.boundRamp = cp, this.bindGroup = this.device.createBindGroup({
          label: `particles-${pp.name}`,
          layout: this.bindings.layout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.uniforms
            }
          }, {
            binding: 1,
            resource: {
              buffer: this.ring
            }
          }, {
            binding: 2,
            resource: ip.sampler
          }, {
            binding: 3,
            resource: ip.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: cp
          }]
        }))
      }
      destroy() {
        var pp;
        this.ring.destroy(), this.uniforms.destroy(), null === (pp = this.ramp) || void 0 === pp || pp.destroy()
      }
    }
    class QL {
      constructor(pp, ip) {
        this.device = pp, this.resources = ip, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Qi.c)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (pp, ip) => (this.bindTarget(ip), {
            renderable: this.renderable,
            pipeline: Ei(this.device, ip),
            draw: pp => ip === this.preparedTarget ? this.draw(pp) : 0
          })
        }
      }
      rebind(pp) {
        this.device = pp, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [ip, cp] of this.systems) {
          const Op = new lL(pp, ip, cp.frameIndex, this.bindings),
            op = ip.ring.drawCount();
          op > 0 && Op.upload(0, op), this.systems.set(ip, Op)
        }
      }
      build() {
        const {
          device: pp
        } = this, ip = pp.createBindGroupLayout({
          label: "particles-system",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: 1,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 3,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }, {
            binding: 4,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: 5,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {
              sampleType: "float"
            }
          }]
        });
        this.frameLayout = pp.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = pp.createPipelineLayout({
          bindGroupLayouts: [mi(pp), ip, this.frameLayout]
        }), this.module = pp.createShaderModule({
          label: "particles",
          code: EL
        });
        const cp = pp.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        pp.queue.writeTexture({
          texture: cp
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: ip,
          rampSampler: pp.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: cp.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get gop() {
        return this.systems.size
      }
      reset() {
        for (const pp of this.systems.keys()) pp.reset()
      }
      describePendingWork() {
        return (0, jL.d)(this.systems.keys(), "Lite")
      }
      eJ(pp, ip) {
        const cp = new jL.c(pp, ip, this);
        return this.systems.set(cp, new lL(this.device, cp, this.allocateFrameIndex(), this.bindings)), cp
      }
      K9(pp, ip) {
        for (const cp of this.systems.keys()) cp.K9(pp, ip)
      }
      canDraw(pp) {
        const ip = this.systems.get(pp),
          cp = pp.texture ? this.resources.boundTexture(pp.texture) : null;
        if (!ip || !cp || !this.targetPipelines) return !1;
        if (ip.texture = cp, ip.pipelines.length = 0, !Si(pp.blendMode)) return this.warnOnce(`blend:${pp.blendMode}`, `particle blend mode ${pp.blendMode} is not drawn (${pp.name})`), !0;
        const Op = (0, Gp.o)(pp.blendMode);
        for (const op of Op) {
          const pp = this.pipelineFor(op);
          if (!1 === pp) return ip.pipelines.length = 0, !0;
          pp && ip.pipelines.push(pp)
        }
        return ip.pipelines.length === Op.length
      }
      disposeStopped(pp) {
        pp.dispose()
      }
      remove(pp) {
        const ip = this.systems.get(pp);
        ip && (this.systems.delete(pp), ip.destroy(), this.freeFrameIndices.push(ip.frameIndex))
      }
      prepare(pp) {
        const ip = pp.animationRatio || 1;
        Xi(this.renderable._worldCenter, pp, qi), this.preparedTarget = this.target, this.draws.length = 0;
        let cp = 0;
        for (const Op of this.systems.values()) {
          const pp = Op.system;
          if (!pp.animateIfActive(ip)) continue;
          if (pp.ring.takeUploads(Op.upload), !pp.hasLiveParticles() || 0 === Op.pipelines.length) continue;
          Op.writeUniforms(this.warnOnce), Op.bind();
          const op = 64 * Op.frameIndex;
          Op.count = pp.ring.drawCount(), CL(pp, this.frameData, this.frameBits, op), cp = Math.max(cp, op + 64), this.draws.push(Op)
        }
        cp > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, cp)
      }
      draw(pp) {
        let ip = 0,
          cp = null;
        for (const Op of this.draws) {
          pp.setBindGroup(1, Op.bindGroup), pp.setBindGroup(2, this.frameBindGroup, [256 * Op.frameIndex]);
          for (const op of Op.pipelines) op !== cp && (pp.setPipeline(op), cp = op), pp.draw(4, Op.count), ip++
        }
        return ip
      }
      bindTarget(pp) {
        this.target = pp;
        const ip = `${pp._colorFormat}|${pp._depthStencilFormat}|${pp._depthCompare}|${pp._sampleCount}`;
        let cp = this.pipelines.get(ip);
        cp || (cp = new Map, this.pipelines.set(ip, cp)), this.targetPipelines = cp
      }
      pipelineFor(pp) {
        var ip;
        const cp = this.targetPipelines,
          Op = cp.get(pp);
        if (void 0 !== Op) return Op;
        cp.set(pp, null);
        const op = this.target,
          Ip = pp === Gp.d,
          Sp = null !== (ip = op._depthCompare) && void 0 !== ip ? ip : Ri,
          {
            device: xp
          } = this;
        return xp.createRenderPipelineAsync({
          label: `particles-${pp}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: di({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Ip ? 1 : 0
            }
          }, op, xi((0, Gp.l)(pp))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: op._depthStencilFormat ? {
            format: op._depthStencilFormat,
            depthCompare: Sp,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: op._sampleCount
          }
        }).then((ip => {
          cp.set(pp, ip)
        }), (ip => {
          cp.set(pp, !1), console.error("Lite particle pipeline failed", ip), Pi(xp, "particles", `blend-${pp}`, ip)
        })), null
      }
      allocateFrameIndex() {
        const pp = this.freeFrameIndices.pop();
        if (void 0 !== pp) return pp;
        const ip = this.nextFrameIndex++;
        if (64 * (ip + 1) > this.frameData.length) {
          const pp = new Float32Array(2 * this.frameData.length);
          pp.set(this.frameData), this.frameData = pp, this.frameBits = new Uint32Array(pp.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return ip
      }
      createFrameBuffer() {
        return this.device.createBuffer({
          label: "particles-frames",
          size: this.frameData.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      createFrameBindGroup() {
        return this.device.createBindGroup({
          label: "particles-frames",
          layout: this.frameLayout,
          entries: [{
            binding: 0,
            resource: {
              buffer: this.frameBuffer,
              size: 32
            }
          }]
        })
      }
    }
    class JL {
      constructor(pp, ip, cp, Op, op) {
        this.lite = pp, this.canvas = ip, this.info = cp, this.resources = op, this.lOp = !1, this.needPOTTextures = !1, this.p_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ip.width, this.renderHeight = ip.height, this.caps = {
          maxTextureSize: Op.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Op.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(pp) {
        this.lite = pp, (0, hp.o)(pp, this.renderWidth, this.renderHeight)
      }
      getRenderWidth() {
        return this.renderWidth
      }
      getRenderHeight() {
        return this.renderHeight
      }
      getHardwareScalingLevel() {
        return 1
      }
      setSize(pp, ip) {
        if (this.renderWidth === pp && this.renderHeight === ip) return !1;
        const cp = this.renderWidth,
          Op = this.renderHeight;
        this.renderWidth = pp, this.renderHeight = ip;
        const op = this.lite;
        if (null === op) return !0;
        try {
          (0, hp.o)(op, pp, ip)
        } catch (Ip) {
          if (Ip instanceof DOMException && "InvalidStateError" === Ip.name) {
            this.renderWidth = cp, this.renderHeight = Op;
            try {
              (0, hp.o)(op, cp, Op)
            } catch {
              this.canvas.width = cp, this.canvas.height = Op
            }
            return console.warn("WebGPU could not allocate render targets for resize", pp, ip, Ip.message), !1
          }
          throw Ip
        }
        return !0
      }
      resize() {}
      getRenderingCanvas() {
        return this.canvas
      }
      getInfo() {
        return this.info
      }
      Hk() {
        const pp = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : pp - this.lastFrameTime, this.lastFrameTime = pp
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(pp, ip) {
        const cp = document.createElement("canvas");
        return cp.width = pp, cp.height = ip, cp
      }
      S_(pp, ip) {
        var cp;
        return null !== (cp = this.resources.S_.get(pp)) && void 0 !== cp ? cp : new yi(this.resources, pp, ip)
      }
      atlasArrays(pp) {
        return this.resources.atlasArrays(pp)
      }
    }
    class BL {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(pp) {
        this.fov = pp.fov, this.nearPlane = pp.near, this.farPlane = pp.far;
        const ip = pp.worldMatrix;
        for (let cp = 0; cp < 16; cp++)
          if (this.worldMatrix[cp] !== ip[cp]) return this.worldMatrix.set(ip), void this.worldMatrixVersion++
      }
    }
    class NL {
      constructor(pp, ip, cp, Op) {
        this.canvas = ip, this.options = cp, this.xcp = void 0, this.backendName = "WebGPU (Lite)", this.l_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new BL, this.lastFrameTime = 0, this.engine = void 0, this.pw = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.WU = null, this.firstTerrain = null, this.trialFrames = 0, this.install(pp);
        const {
          resources: op,
          meshes: Ip
        } = pp;
        this.resources = op, this.particles = pp.particles, this.xcp = new JL(pp.engine, ip, Op, pp.device.limits, op), (0, Mp.G)({
          sx: pp => {
            lp(pp) && op.textureSlot(pp)
          },
          loaded: pp => lp(pp) ? op.textureLoaded(pp) : null,
          canvasUpdated: (pp, ip, cp) => {
            lp(pp) && op.canvasUpdated(pp, ip, cp)
          }
        }), this.l_ = Ip.l_, this.modelMeshes = Ip.modelMeshes
      }
      get gpuDevice() {
        return this.device
      }
      get deviceLost() {
        return this.refusals.deviceLost
      }
      get terrain() {
        return this.liteTerrain
      }
      install(pp) {
        this.engine = pp.engine, this.pw = pp.pw, this.sceneTask = pp.sceneTask, this.device = pp.device, this.liteTerrain = pp.terrain, this.meshes = pp.meshes, this.sunShadow = pp.sunShadow;
        const ip = new Fp(pp.device.lost);
        this.refusals = ip, ip.deviceLost.then((() => {
          var ip;
          ip = pp.device, Di.add(ip)
        })), pp.pw.camera = this.camera
      }
      async rebuild() {
        var pp, ip, cp, Op, op;
        const Ip = await hL();
        this.halted = !0, this.liteTerrain.retire(), null === (pp = this.sunShadow) || void 0 === pp || pp.dispose(), this.xcp.detach();
        try {
          (0, ap.b)(this.engine)
        } catch (Dp) {
          console.warn("Lite: disposing the lost device's engine threw", Dp)
        }
        const Sp = {
            width: this.xcp.renderWidth,
            height: this.xcp.renderHeight
          },
          xp = await aL(this.canvas, this.options, Sp, Ip),
          Lp = ui(xp),
          Yp = nL(Lp);
        try {
          this.resources.rebind(xp, Lp), this.particles.rebind(Lp), this.l_.dropSteady();
          const pp = {
              resources: this.resources,
              particles: this.particles,
              l_: this.l_,
              modelMeshes: this.modelMeshes
            },
            ip = await FL(xp, Lp, this.options, pp),
            cp = Yp();
          if (null !== cp) throw new Error(`WebGPU device lost while Lite was rebuilding (${cp.reason}): ${cp.message}`);
          const {
            r: Op,
            g: op,
            b: Ip
          } = this.pw.clearColor;
          this.install(ip), this.setClearColour(Op, op, Ip), this.xcp.rebind(xp)
        } catch (Dp) {
          throw Lp.destroy(), Dp
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (ip = this.WU) || void 0 === ip || ip.resize(), null === (cp = this.WU) || void 0 === cp || null === (Op = cp.HP) || void 0 === Op || null === (op = Op.Zk) || void 0 === op || op.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((pp, ip) => {
          this.firstTerrain = {
            drawn: pp,
            failed: ip
          }
        }))
      }
      get castsEntitySunShadows() {
        var pp, ip;
        return null !== (pp = null === (ip = this.sunShadow) || void 0 === ip ? void 0 : ip.tracesEntities) && void 0 !== pp && pp
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(pp) {
        this.WU = pp, this.modelMeshes.attach(pp.model, pp.sceneMirror);
        const ip = pp.pw;
        this.setClearColour(ip.clearColor.r, ip.clearColor.g, ip.clearColor.b), ip.draw = () => {
          this.drawFrame(pp, ip)
        }
      }
      render(pp) {
        if (!this.refusals.lost && !this.halted) {
          try {
            this.xcp.Hk(), pp.pw.render()
          } catch (ip) {
            throw this.refusals.frameFailed(ip), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(ip), this.firstTerrain = null), ip
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var pp, ip, cp, Op;
        const op = [...this.particles.describePendingWork(), ...null !== (pp = null === (ip = this.sunShadow) || void 0 === ip ? void 0 : ip.describePendingWork()) && void 0 !== pp ? pp : []],
          Ip = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (cp = this.terrain.sceneDepth) && void 0 !== cp && cp.compiling ? 1 : 0) + (null !== (Op = this.terrain.shadowMask) && void 0 !== Op && Op.compiling ? 1 : 0);
        Ip > 0 && op.push(`${Ip} Lite pipelines compiling`);
        const Sp = this.terrain.buffersAwaitingVerdict;
        Sp > 0 && op.push(`${Sp} Lite terrain buffers awaiting their out-of-memory verdict`);
        const xp = this.resources.texturesLoading;
        return xp > 0 && op.push(`${xp} Lite textures loading`), op
      }
      prepareTexture(pp) {
        return null !== this.resources.boundTexture(pp) || this.resources.textureFailed(pp)
      }
      drawFrame(pp, ip) {
        var cp, Op, op, Ip, Sp, xp;
        const Lp = ex(pp);
        this.camera.copyFromView(Lp), this.setClearColour(Lp.clearColour[0], Lp.clearColour[1], Lp.clearColour[2]), null === (cp = this.sunShadow) || void 0 === cp || cp.prepare(pp.HP, Lp.eye, null !== (Op = pp.HP.Dy) && void 0 !== Op ? Op : null), this.terrain.prepare(pp, Lp), null === (op = this.terrain.sceneDepth) || void 0 === op || op.setPlanes(Lp.near, Lp.far), null === (Ip = this.terrain.shadowMask) || void 0 === Ip || Ip.prepare(Lp), Sx(this.sceneTask), this.meshes.prepare(ip, Lp, pp.model.earthSky, null !== (Sp = pp.HP.Dy) && void 0 !== Sp ? Sp : null), this.particles.prepare(Lp);
        const Yp = performance.now();
        this.resources.flushUploads(), null === (xp = this.sunShadow) || void 0 === xp || xp.traceEntities(this.meshes);
        try {
          (0, hp.l)(this.engine, this.lastFrameTime > 0 ? Yp - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Yp, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Yp), this.firstTerrain = null)
      }
      setClearColour(pp, ip, cp) {
        const Op = this.pw.clearColor;
        Op.r = pp, Op.g = ip, Op.b = cp, Op.a = 1
      }
    }

    function TL(pp) {
      const ip = {};
      for (const cp in pp.limits) {
        const Op = pp.limits[cp];
        "number" === typeof Op && (ip[cp] = Op)
      }
      return ip
    }
    const fL = "WebGPU device lost while Lite was starting";
    async function bL(pp, ip) {
      const cp = await hL(),
        Op = cp.info,
        op = {
          vendor: (null === Op || void 0 === Op ? void 0 : Op.vendor) || "unknown vendor",
          renderer: (null === Op || void 0 === Op ? void 0 : Op.architecture) || "unknown renderer",
          version: (null === Op || void 0 === Op ? void 0 : Op.description) || "unknown version"
        };
      pp.style.background = "black";
      const Ip = await aL(pp, ip, ip.bufferSize, cp),
        Sp = ui(Ip),
        xp = nL(Sp);
      try {
        const cp = new NL(await FL(Ip, Sp, ip, null), pp, ip, op),
          Op = xp();
        if (null !== Op) {
          const {
            reason: pp,
            message: ip
          } = Op;
          throw Object.assign(new Error(`${fL} (${pp}): ${ip}`), {
            fallbackReason: fL
          })
        }
        return cp
      } catch (Lp) {
        throw Sp.destroy(), null === xp() ? Lp : (0, Ix.e)(Lp, "device")
      }
    }
    async function hL() {
      const pp = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!pp) throw (0, Ix.e)(new Error("No WebGPU adapter"), "no_adapter");
      return pp
    }
    async function aL(pp, ip, cp, Op) {
      let op;
      try {
        op = await (0, hp.e)(pp, {
          msaaSamples: ip.Fcp ? 4 : 1,
          requiredLimits: TL(Op),
          alphaMode: "premultiplied"
        })
      } catch (Sp) {
        throw (0, Ix.e)(Sp, "#47" === (null === (Ip = Sp) || void 0 === Ip ? void 0 : Ip.message) ? "no_adapter" : "device")
      }
      var Ip;
      return null !== cp && (0, hp.o)(op, cp.width, cp.height), op
    }

    function nL(pp) {
      let ip = null;
      return pp.lost.then((pp => {
        ip = pp, console.error(`WebGPU device lost (${pp.reason}): ${pp.message}`)
      })), () => ip
    }
    async function FL(pp, ip, cp, Op) {
      var op, Ip;
      let {
        sceneDepth: Sp,
        sunShadow: xp
      } = cp;
      const Lp = (0, np.d)(pp),
        Yp = null !== (op = null === Op || void 0 === Op ? void 0 : Op.resources) && void 0 !== op ? op : new cx(pp, ip),
        Dp = new oL(ip),
        Ap = new TS(ip, Yp, (pp => function(pp, ip) {
          for (const Op of ji(pp)) {
            var cp;
            if (Op._targetSignature === ip) return null !== (cp = Op._sceneBG) && void 0 !== cp ? cp : null
          }
          return null
        }(Lp, pp)), null === Op || void 0 === Op ? void 0 : Op.l_, null === Op || void 0 === Op ? void 0 : Op.modelMeshes),
        Pp = null !== (Ip = null === Op || void 0 === Op ? void 0 : Op.particles) && void 0 !== Ip ? Ip : new QL(ip, Yp);
      for (const Up of function(pp, ip, cp) {
          return [ip.opaqueRenderable, pp.opaqueRenderable, pp.skyLastRenderable, cp.renderable, ip.transparentRenderable, pp.transparentRenderable, pp.frontRenderable]
        }(Ap, Dp, Pp)) ei(Lp, Up);
      const Wp = function(pp) {
        for (const ip of ji(pp))
          if ("pw" === ip.name) return ip;
        throw new Error("Lite: the scene has no render task named scene")
      }(Lp);
      Sp && Dp.installSceneDepth(Wp, pp);
      const yp = xp ? new uL(ip, xp.entities) : null;
      return Dp.sunShadow = yp, yp && null !== xp && void 0 !== xp && xp.entities && (Dp.shadowMask = new Nx(ip, Wp, pp, Dp)), Ap.sunShadow = yp, await (0, np.e)(Lp), {
        engine: pp,
        pw: Lp,
        sceneTask: Wp,
        device: ip,
        terrain: Dp,
        meshes: Ap,
        sunShadow: yp,
        resources: Yp,
        particles: Pp
      }
    }
  },
  40892: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Up,
      C: () => Wp,
      E: () => yp,
      c: () => op,
      g: () => Op,
      h: () => Pp,
      l: () => Dp,
      m: () => wp,
      o: () => Ip,
      r: () => xp,
      t: () => Lp,
      x: () => Sp
    });
    const Op = 3,
      op = 0,
      Ip = 1,
      Sp = 2,
      xp = {
        uniform: 3,
        hP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Lp = 10,
      Yp = "BloxdPackInputs",
      Dp = "bloxdPackInputs",
      Ap = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      Pp = 80;

    function Wp() {
      const pp = Ap.map((pp => {
        let {
          name: ip,
          type: cp
        } = pp;
        return `    ${ip}: ${cp},\n`
      })).join("");
      return `struct ${Yp} {\n${pp}}\n@group(${Op}) @binding(${op}) var<uniform> ${Dp}: ${Yp};\n`
    }

    function yp(pp, ip) {
      const cp = new DataView(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pp),
        [Op, op, Ip, Sp, xp, Lp] = Ap;
      cp.setFloat32(Op.offset, ip.seconds, !0), cp.setUint32(op.offset, ip.lit ? 1 : 0, !0);
      for (let Yp = 0; Yp < 3; Yp++) cp.setInt32(Ip.offset + 4 * Yp, ip.renderOffset[Yp], !0), cp.setFloat32(Sp.offset + 4 * Yp, ip.opp[Yp], !0), cp.setFloat32(xp.offset + 4 * Yp, ip.eyePosition[Yp], !0), cp.setFloat32(Lp.offset + 4 * Yp, ip.shadowDirection[Yp], !0)
    }

    function Up(pp) {
      const ip = new Uint32Array(Math.max(1, pp.length));
      return pp.forEach(((pp, cp) => {
        let {
          id: Op,
          rotation: op
        } = pp;
        ip[cp] = 65535 & Op | (3 & op) << 16
      })), ip
    }
    const wp = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);