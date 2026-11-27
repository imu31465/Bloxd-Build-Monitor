export const id = 308;
export const ids = [308];
export const modules = {
  54130: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => hr,
      f: () => Ir,
      j: () => jr,
      l: () => Er
    });
    var Zr = Qr(38679),
      Wr = Qr(40284),
      ar = Qr(40276);

    function jr(rr, Sr, Qr, Zr) {
      const Wr = ar.s;
      Sr.fill(0), rr.gravity.toArray(Sr, Wr.gravity), rr.colorDead.toArray(Sr, Wr.colorDead), Qr[Wr.ramp] = rr.useRampGradients ? 1 : 0;
      const jr = rr.getColorGradients(),
        Ir = mr(rr, jr, "colour", Zr);
      Qr[Wr.colorCount] = Ir;
      for (let ar = 0; ar < Ir; ar++) {
        var fr;
        const rr = jr[Nr(jr, ar)];
        Sr[Wr.colorPositions + ar] = rr.gradient, rr.color1.toArray(Sr, Wr.color1 + 4 * ar), (null !== (fr = rr.color2) && void 0 !== fr ? fr : rr.color1).toArray(Sr, Wr.color2 + 4 * ar)
      }
      const Er = rr.getVelocityGradients(),
        pr = mr(rr, Er, "Lh", Zr);
      Qr[Wr.velocityCount] = pr;
      for (let ar = 0; ar < pr; ar++) Yr(Sr, Wr.Lh + 4 * ar, Er[Nr(Er, ar)]);
      const xr = rr.useRampGradients ? rr.getColorRemapGradients() : null,
        Ur = mr(rr, xr, "colour remap", Zr);
      Qr[Wr.remapCount] = Ur;
      for (let ar = 0; ar < Ur; ar++) Yr(Sr, Wr.remap + 4 * ar, xr[Nr(xr, ar)])
    }

    function Ir() {
      return {
        key: [],
        texels: new Uint8Array(4 * ar.m)
      }
    }
    const fr = [];

    function Er(rr, Sr) {
      return pr(rr, fr), !zr(fr, Sr.key) && (Sr.key.length = 0, Sr.key.push(...fr), Sr.key.length > 0 && function(rr, Sr) {
        for (let Qr = 0; Qr < ar.m; Qr++) Wr.j.GetCurrentGradient(Qr / ar.m, rr, ((rr, Sr, Qr) => {
          Zr.Color3.LerpToRef(rr.color, Sr.color, Qr, xr)
        })), Sr[4 * Qr] = 255 * xr.r, Sr[4 * Qr + 1] = 255 * xr.g, Sr[4 * Qr + 2] = 255 * xr.b, Sr[4 * Qr + 3] = 255
      }(rr.getRampGradients(), Sr.texels), !0)
    }

    function pr(rr, Sr) {
      Sr.length = 0;
      const Qr = rr.useRampGradients ? rr.getRampGradients() : null;
      if (null !== Qr && void 0 !== Qr && Qr.length) {
        Sr.push(Qr.length);
        for (const rr of Qr) Sr.push(rr.gradient, rr.color.r, rr.color.g, rr.color.b)
      }
    }
    const xr = new Zr.Color3;

    function mr(rr, Sr, Qr, Zr) {
      return Sr ? Sr.length > ar.b ? (Zr(`particleStops:${Qr}`, `GPU particles use the first 2 and last ${ar.b-2} of more than ${ar.b} ${Qr} gradient stops (${rr.name})`), ar.b) : Sr.length : 0
    }

    function Nr(rr, Sr) {
      return Sr < 2 || rr.length <= ar.b ? Sr : rr.length - ar.b + Sr
    }
    const Ur = new Float32Array(ar.p),
      tr = new Uint32Array(Ur.buffer);

    function hr(rr, Sr, Qr) {
      return jr(rr, Ur, tr, Qr), Sr && zr(tr, Sr) ? null : tr.slice()
    }

    function zr(rr, Sr) {
      if (rr.length !== Sr.length) return !1;
      for (let Qr = 0; Qr < rr.length; Qr++)
        if (rr[Qr] !== Sr[Qr]) return !1;
      return !0
    }

    function Yr(rr, Sr, Qr) {
      var Zr;
      rr[Sr] = Qr.gradient, rr[Sr + 1] = Qr.factor1, rr[Sr + 2] = null !== (Zr = Qr.factor2) && void 0 !== Zr ? Zr : Qr.factor1
    }
  },
  43027: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      const Zr = Sr * Sr * 4,
        Wr = rr[0].layers,
        ar = Wr * (rr.length - 1) + rr[rr.length - 1].layers,
        jr = new Uint8Array(ar * Zr);
      rr.forEach(((Sr, Qr) => {
        const ar = Qr + 1 < rr.length ? Math.min(Sr.layers, Wr) : Sr.layers;
        jr.set(new Uint8Array(Sr.pixels.buffer, Sr.pixels.byteOffset, ar * Zr), Qr * Wr * Zr)
      }));
      const Ir = Math.max(1, Math.min(ar, Qr || ar));
      if (Ir === ar) return [{
        pixels: jr,
        layers: ar
      }];
      const fr = [];
      for (let Er = 0; Er < ar; Er += Ir) {
        const rr = Math.min(ar, Er + Ir);
        fr.push({
          pixels: jr.slice(Er * Zr, rr * Zr),
          layers: rr - Er
        })
      }
      return fr
    }
    Qr.d(Sr, {
      b: () => Zr,
      f: () => ar
    });
    const Wr = new WeakMap;

    function ar(rr, Sr, Qr) {
      var Zr, ar;
      const jr = null !== (Zr = Wr.get(rr)) && void 0 !== Zr ? Zr : new Map;
      Wr.set(rr, jr);
      const Ir = null !== (ar = jr.get(Sr[0])) && void 0 !== ar ? ar : [];
      jr.set(Sr[0], Ir);
      const fr = Ir.find((rr => rr.urls.length === Sr.length && rr.urls.every(((rr, Qr) => rr === Sr[Qr]))));
      if (fr) return fr.built;
      const Er = {
        urls: [...Sr],
        built: Qr()
      };
      return Ir.push(Er), Er.built.catch((() => {
        Ir.splice(Ir.indexOf(Er), 1)
      })), Er.built
    }
  },
  54128: (rr, Sr, Qr) => {
    function Zr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Sr = new Set;
      return (Qr, Zr) => {
        Sr.has(Qr) || (Sr.add(Qr), console.warn(rr + Zr))
      }
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  54171: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      createLiteRendererAsync: () => Cf,
      liteBabylonBackend: () => kr,
      setPipelineFailureHook: () => IS
    });
    var Zr = Qr(38679),
      Wr = Qr(39021),
      ar = Qr(39402),
      jr = Qr(38747),
      Ir = Qr(39412);
    class fr extends Ir.b {
      constructor() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        super(...Sr), this.color = new Zr.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Sr[0].eC().getUniqueId(),
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
          needAlphaBlendingForMesh: rr => rr.visibility < 1 || rr.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Er = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      pr = rr => 1 << Er.indexOf(rr),
      xr = pr("VERTEXCOLOR"),
      mr = pr("INSTANCES"),
      Nr = pr("THIN_INSTANCES"),
      Ur = pr("INSTANCESCOLOR"),
      tr = pr("FOG"),
      hr = pr("LITE_FRONT_LAYER");

    function zr(rr, Sr, Qr, Zr) {
      let Wr = 0;
      return rr.isVerticesDataPresent("color") && (Wr |= xr), "none" !== Sr && (Wr |= mr), "thin" === Sr && (Wr |= Nr, rr.isVerticesDataPresent("instanceColor") && (Wr |= Ur)), Zr.fogEnabled && rr.applyFog && 0 !== Zr.fogMode && (Wr |= tr), Qr >= 1 && (Wr |= hr), Wr
    }

    function Yr(rr, Sr) {
      rr.updateColor4("color", Sr.color, Sr.alpha)
    }
    var nr = Qr(39345),
      er = Qr(38831),
      Kr = Qr(38762),
      yr = Qr(38702),
      Br = Qr(39332),
      Tr = Qr(39342),
      vr = Qr(38736),
      Or = Qr(38745),
      Lr = Qr(38754);
    const lr = yr.d.GLSL;
    class Xr {
      constructor(rr, Sr) {
        this.name = rr, this.Dt = Sr, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.lC = {
          addOnce: rr => {
            this.disposers.push(rr)
          }
        }, this.uniqueId = Sr.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      eC() {
        return this.Dt
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
      needAlphaBlendingForMesh(rr) {
        return (0, vr.O)(this.model, rr.visibility, rr.hasVertexAlpha)
      }
      needAlphaTestingForMesh(rr) {
        return (0, vr.S)(this.model, rr.visibility, rr.hasVertexAlpha)
      }
      dispose() {
        (0, er.m)(this);
        for (const rr of this.disposers.splice(0)) rr()
      }
      get model() {
        return (0, vr.Y)(this)
      }
    }
    const Pr = new WeakSet;

    function Hr(rr) {
      return Pr.has(rr)
    }

    function qr(rr) {
      Pr.add(rr)
    }
    const Rr = {
      create: (rr, Sr) => ((0, Kr.p)(rr, new Xr(rr.name, Sr)), Or.d.defines()),
      write: () => {},
      addFeature: (rr, Sr) => {
        const Qr = rr.mirror;
        Sr.feature === Tr.e && Sr.state.dirLightCount > 0 && (rr.disableLighting = !0, (0, vr.W)(rr)), "BLOXD_LIGHTING" in Sr.defines && (0, er.j)(Qr), Sr.feature === Br.j && ((0, nr.i)(Sr.state, lr), function(rr, Sr) {
          const Qr = rr.eC().MU();
          setTimeout((() => {
            Qr.atlasArrays(Sr.sources).then((Qr => {
              (0, nr.c)(rr, Sr, Qr.map((rr => ({
                atlas: rr,
                layers: rr.layers
              }))), Qr[0].layerWidth, lr)
            })).catch((rr => {
              console.error("Failed to build the atlas's texture arrays", rr)
            }))
          }))
        }(Qr, Sr.state))
      },
      texture: (rr, Sr, Qr) => {
        let {
          data: Zr,
          sets: Wr
        } = Qr;
        var ar;
        (qr(rr), Zr) && (rr.uvSet = null !== (ar = null === Wr || void 0 === Wr ? void 0 : Wr.coordinatesIndex) && void 0 !== ar ? ar : 0, (0, Kr.$)(rr.matrix, null !== Wr && void 0 !== Wr ? Wr : {}))
      },
      cube: qr,
      canvas: (rr, Sr, Qr) => {
        let {
          width: Zr,
          height: Wr,
          mipmaps: ar,
          samplingMode: jr = Lr.g.trilinear,
          hasAlpha: Ir = !1,
          wrap: fr = Lr.c.clamp
        } = Qr;
        const Er = rr.MU().createCanvas(Zr, Wr),
          pr = new Lr.i("2d", {
            kind: "canvas",
            width: Zr,
            height: Wr,
            canvas: Er
          }, {
            samplingMode: jr,
            wrapU: fr,
            wrapV: fr,
            noMipmap: !ar,
            invertY: !0
          });
        return pr.hasAlpha = Ir, qr(pr), pr
      }
    };
    var gr = Qr(38845),
      Cr = Qr(38595);
    class Mr {
      constructor(rr, Sr, Qr) {
        this.engine = rr, this.clearColor = Sr, this.ambientColor = Qr, this.onBeforeRenderObservable = new Cr.d, this.onBeforeCameraRenderObservable = new Cr.d, this.onAfterRenderObservable = new Cr.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.pT = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      MU() {
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
      addPendingData(rr) {
        this.pending.push(rr)
      }
      removePendingData(rr) {
        const Sr = this.pending.indexOf(rr); - 1 !== Sr && this.pending.splice(Sr, 1)
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

    function Gr() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const kr = {
      EZr: Gr,
      Iar: (rr, Sr) => {
        const Qr = new Mr(rr.engine, Zr.d.FromArray(Sr.clearColor), Zr.Color3.FromArray(Sr.ambientColor));
        (0, jr.d)(Rr, Qr), rr.Dt = Qr,
          function(rr, Sr) {
            const Qr = Object.assign((0, gr.d)(rr, "camera"), {
              layerMask: 268435455
            });
            rr.model.nodes.setWorldSource(Qr.row, rr.model.view.worldMatrix), rr.camera = Sr.activeCamera = Qr
          }(rr, Qr), (0, Wr.g)(rr, ((rr, Sr, Qr) => (0, ar.j)(rr, Sr, Qr, Ir.b)))
      },
      uWr: () => {},
      setBabylonFog: () => {},
      xar: Gr,
      Yar: () => {},
      linesFromArrays: (rr, Sr, Qr) => (0, ar.j)(rr, Sr, Qr, fr),
      dt: () => {},
      har: Gr
    };
    var Ar = Qr(54233),
      Vr = Qr(54241),
      ir = Qr(54253);
    class wr {
      constructor(rr) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const Sr = new Promise((rr => {
          this.refused = rr
        }));
        this.deviceLost = Promise.race([rr, Sr]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(rr) {
        (function(rr) {
          const {
            name: Sr,
            message: Qr
          } = null !== rr && void 0 !== rr ? rr : {};
          return "InvalidStateError" === Sr && "string" === typeof Qr && Qr.startsWith("GPUDevice.")
        })(rr) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: rr.message,
          framesRefused: !0
        }))
      }
    }
    var cr = Qr(43027),
      Fr = Qr(40293);

    function or(rr) {
      return Math.max(4, 4 * Math.ceil(rr / 4))
    }

    function br(rr, Sr, Qr, Zr) {
      const Wr = rr.createBuffer({
        label: Zr,
        size: or(Sr.byteLength),
        usage: Qr,
        mappedAtCreation: !0
      });
      return new Uint8Array(Wr.getMappedRange(), 0, Sr.byteLength).set(new Uint8Array(Sr.buffer, Sr.byteOffset, Sr.byteLength)), Wr.unmap(), Wr
    }

    function Jr(rr, Sr) {
      return Math.floor(Math.log2(Math.max(rr, Sr))) + 1
    }

    function Dr(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = rr.createTexture({
          label: ar,
          size: {
            width: Qr,
            height: Zr,
            depthOrArrayLayers: Wr
          },
          format: "rgba8unorm",
          mipLevelCount: Jr(Qr, Zr),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Ir = (Sr, Qr, Zr, ar) => {
          rr.queue.writeTexture({
            texture: jr,
            mipLevel: Qr
          }, Sr, {
            bytesPerRow: 4 * Zr,
            rowsPerImage: ar
          }, {
            width: Zr,
            height: ar,
            depthOrArrayLayers: Wr
          })
        };
      Ir(Sr, 0, Qr, Zr);
      let fr = 1;
      for (const Er of function*(rr, Sr, Qr, Zr) {
          let Wr = rr,
            ar = Sr,
            jr = Qr;
          for (; ar > 1 || jr > 1;) {
            const rr = Math.max(1, ar >> 1),
              Sr = Math.max(1, jr >> 1),
              Qr = new Uint8Array(rr * Sr * Zr * 4),
              Ir = 4 * ar;
            let fr = 0;
            for (let Er = 0; Er < Zr; Er++) {
              const Zr = Er * Ir * jr;
              for (let Er = 0; Er < Sr; Er++) {
                const Sr = Zr + Math.min(2 * Er, jr - 1) * Ir,
                  pr = Zr + Math.min(2 * Er + 1, jr - 1) * Ir;
                for (let Zr = 0; Zr < rr; Zr++) {
                  const rr = 4 * Math.min(2 * Zr, ar - 1),
                    jr = 4 * Math.min(2 * Zr + 1, ar - 1);
                  for (let Zr = 0; Zr < 4; Zr++) Qr[fr++] = Wr[Sr + rr + Zr] + Wr[Sr + jr + Zr] + Wr[pr + rr + Zr] + Wr[pr + jr + Zr] + 2 >> 2
                }
              }
            }
            yield {
              data: Qr,
              width: rr,
              height: Sr
            }, Wr = Qr, ar = rr, jr = Sr
          }
        }(Sr, Qr, Zr, Wr)) Ir(Er.data, fr++, Er.width, Er.height);
      return jr
    }
    const dr = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function sr(rr) {
      if (rr.startsWith("data:")) {
        const Sr = rr.search(/[;,]/);
        return `data:${Sr>5?rr.slice(5,Sr):""} URL of ${rr.length} characters`
      }
      return rr.length > 80 ? `${rr.slice(0,80)}...` : rr
    }
    async function ur(rr) {
      const Sr = await fetch(rr);
      if (!Sr.ok) throw new Error(`${sr(rr)}: ${Sr.status} ${Sr.statusText}`);
      return createImageBitmap(await Sr.blob(), dr)
    }
    async function rS(rr) {
      const Sr = await ur(rr),
        Qr = new OffscreenCanvas(Sr.width, Sr.height),
        Zr = Qr.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Zr) throw new Error("No 2D context to decode an image");
      Zr.drawImage(Sr, 0, 0);
      const {
        data: Wr
      } = Zr.getImageData(0, 0, Sr.width, Sr.height);
      return Sr.close(), {
        pixels: new Uint8Array(Wr.buffer, Wr.byteOffset, Wr.byteLength),
        width: Qr.width,
        height: Qr.height
      }
    }

    function SS(rr, Sr) {
      return (0, cr.f)(rr, Sr.urls, (async () => {
        const Qr = await Promise.all(Sr.urls.map((async (rr, Qr) => {
            var Zr, Wr, ar, jr, Ir;
            return null !== (jr = null !== (Wr = null === (ar = Sr.pixels) || void 0 === ar ? void 0 : ar[Qr]) && void 0 !== Wr ? Wr : null, Ir = Sr.layerWidth, Zr = null !== jr && void 0 !== jr && jr.byteLength && Ir && jr.byteLength % (Ir * Ir * 4) === 0 ? {
              pixels: jr,
              layerWidth: Ir,
              layers: jr.byteLength / (Ir * Ir * 4)
            } : null) && void 0 !== Zr ? Zr : await async function(rr) {
              const {
                pixels: Sr,
                width: Qr
              } = await rS(rr);
              return {
                pixels: Sr,
                layerWidth: Qr,
                layers: Sr.byteLength / (Qr * Qr * 4)
              }
            }(rr)
          }))),
          Zr = Qr[0].layerWidth;
        return (0, cr.b)(Qr, Zr, rr.limits.maxTextureArrayLayers).map(((Qr, Wr) => {
          let {
            pixels: ar,
            layers: jr
          } = Qr;
          return {
            texture: Dr(rr, ar, Zr, Zr, jr, `atlas-${Wr}-${sr(Sr.urls[0])}`),
            layerWidth: Zr,
            layers: jr
          }
        }))
      }))
    }
    const QS = new Map([
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
      ZS = new Map([
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

    function WS(rr) {
      for (const Sr of (0, Fr.h)(rr))
        if (!ZS.has((0, Fr.g)(Sr))) return !1;
      return !0
    }

    function aS(rr) {
      const Sr = ZS.get(rr);
      if (!Sr) return null;
      const [Qr, Zr, Wr] = Sr;
      return {
        srcFactor: QS.get(Qr),
        dstFactor: QS.get(Zr),
        operation: Wr
      }
    }
    let jS = null;

    function IS(rr) {
      jS = rr
    }
    const fS = new WeakSet;

    function ES(rr) {
      return fS.has(rr)
    }

    function pS(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      var ar;
      ES(rr) || (null === (ar = jS) || void 0 === ar || ar(Sr, Qr, Zr, Wr))
    }
    class xS {
      constructor(rr) {
        this.resources = rr, this.matrixKey = {
          sx: 0
        }, this.attributesKey = {
          sx: 0
        }, this.inputs = Object.create(null);
        for (let Sr = 0; Sr < 4; Sr++) this.inputs[`world${Sr}`] = new US(this.matrixKey, 16 * Sr, 64, 4)
      }
      release() {
        this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(rr, Sr) {
        this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, rr, !0), Sr && this.resources.vertexBufferCreated(this.attributesKey, Sr, !0)
      }
    }
    class mS extends xS {
      constructor(rr, Sr, Qr) {
        super(rr), this.mesh = Sr, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Zr = this.inputs;
        let Wr = 0;
        for (const {
            size: jr
          }
          of Qr) Wr += jr;
        for (const {
            name: jr,
            offset: Ir,
            size: fr,
            type: Er
          }
          of Qr) Zr[jr] = new US(this.attributesKey, 4 * Ir, 4 * Wr, fr, !0, Er);
        this.rowStride = Wr, rr.K9.set(Sr, this);
        const ar = Sr.isVerticesDataPresent;
        Sr.isVerticesDataPresent = (rr, Qr) => rr in Zr || ar.call(Sr, rr, Qr)
      }
      attach(rr, Sr) {
        this.matrices = rr, this.attributes = Sr, this.bind(rr, Sr), this.mirror(rr, rr.length, rr.length / 16)
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      zrr(rr) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, rr ? 64 * rr : void 0)
      }
      Yrr() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(rr, Sr) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * rr, 16 * Sr)
      }
      attributeRows(rr, Sr) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, rr * this.rowStride, Sr * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(rr, Sr, Qr) {
        const Zr = this.mesh._thinInstanceDataStorage;
        Zr.matrixData = rr, Zr.matrixBufferSize = Sr, Zr.worldMatrices = null, Zr.instancesCount = Qr
      }
    }
    class NS extends xS {
      constructor(rr, Sr, Qr) {
        var Zr, Wr, ar, jr;
        super(rr), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.interleavedKinds) && void 0 !== Zr ? Zr : null, this.offsets = null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.interleavedOffsets) && void 0 !== Wr ? Wr : [], this.rowStride = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.interleavedRowStride) && void 0 !== ar ? ar : 0, null === (jr = this.layout) || void 0 === jr || jr.forEach(((rr, Sr) => {
          this.inputs[rr] = new US(this.attributesKey, 4 * this.offsets[Sr], 4 * this.rowStride, Qr.strides[rr])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), rr.batchUploads.set(Sr, this), Sr.lC.addOnce((() => {
          this.release()
        }))
      }
      rebind() {
        this.bind(this.matrices, this.attributes)
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(rr) {
        const Sr = this.packedBatch;
        return Sr.renderSelf ? 0 === rr ? this.packedSource : Sr.instances[rr - 1] : Sr.instances[rr]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(rr, Sr, Qr, Zr) {
        const Wr = (Sr.renderSelf ? 1 : 0) + Sr.rows.length;
        if (this.frame = Zr, this.count = Wr, this.packedSource = rr, this.packedBatch = Sr, 0 === Wr) return;
        if (rr.getWorldMatrix(), 16 * Wr > this.matrices.length) {
          let rr = this.matrices.length / 16;
          for (; rr < Wr;) rr *= 2;
          this.matrices = new Float32Array(16 * rr), this.attributes &&= new Float32Array(rr * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let ar = 0;
        Sr.renderSelf && this.packRow(ar++, rr, Sr.row, Qr);
        for (let jr = 0; jr < Sr.rows.length; jr++) this.packRow(ar++, Sr.instances[jr], Sr.rows[jr], Qr);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Wr), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Wr * this.rowStride)
      }
      packRow(rr, Sr, Qr, Zr) {
        const Wr = this.matrices;
        if (Qr < 0) Wr.set(Sr.getWorldMatrix().m, 16 * rr);
        else
          for (let Er = 0; Er < 16; Er++) Wr[16 * rr + Er] = Zr[16 * Qr + Er];
        const ar = this.attributes;
        if (!ar) return;
        const jr = Sr.pG,
          Ir = this.layout;
        for (let Er = 0; Er < Ir.length; Er++) {
          var fr;
          const Sr = null !== (fr = jr[Ir[Er]]) && void 0 !== fr ? fr : 0,
            Qr = rr * this.rowStride + this.offsets[Er];
          Sr.toArray ? Sr.toArray(ar, Qr) : Sr.copyToArray ? Sr.copyToArray(ar, Qr) : ar[Qr] = Sr
        }
      }
    }
    class US {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = rr, this.byteOffset = Sr, this.byteStride = Qr, this.size = Zr, this.instanced = Wr, this.type = ar, this.normalized = jr
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
    const tS = "CANVAS_ALPHA_ONE",
      hS = `override ${tS}: bool = false;`,
      zS = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function YS(rr, Sr, Qr) {
      var Zr;
      let Wr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ar = null !== (Zr = Sr._colorFormat) && void 0 !== Zr ? Zr : "bgra8unorm",
        jr = Wr ? 15 : 0;
      return Qr ? {
        ...rr,
        targets: [{
          format: ar,
          blend: {
            color: Qr,
            alpha: zS
          },
          writeMask: jr
        }]
      } : {
        ...rr,
        constants: {
          ...rr.constants,
          [tS]: 1
        },
        targets: [{
          format: ar,
          writeMask: jr
        }]
      }
    }

    function nS(rr, Sr) {
      rr._renderables.push(Sr)
    }

    function eS(rr) {
      return rr._device
    }

    function KS(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = rr._frameGraph) || void 0 === Qr ? void 0 : Qr._tasks) && void 0 !== Sr ? Sr : []
    }

    function yS(rr) {
      return rr._currentEncoder
    }

    function BS(rr) {
      return rr.createBindGroupLayout({
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
    const TS = "greater-equal",
      vS = 2e5,
      OS = 1e5,
      LS = new WeakMap;

    function lS(rr, Sr) {
      let Qr = LS.get(rr);
      if (!Qr) {
        Qr = {
          module: rr.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, LS.set(rr, Qr)
      }
      const Zr = `${Sr._colorFormat}|${Sr._depthStencilFormat}|${Sr._sampleCount}`;
      let Wr = Qr.pipelines.get(Zr);
      if (!Wr) {
        var ar;
        const {
          module: jr
        } = Qr;
        Wr = rr.createRenderPipeline({
          label: `placeholder ${Zr}`,
          layout: rr.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: jr,
            entryPoint: "v"
          },
          fragment: {
            module: jr,
            entryPoint: "f",
            targets: [{
              format: null !== (ar = Sr._colorFormat) && void 0 !== ar ? ar : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Sr._depthStencilFormat ? {
            format: Sr._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Sr._sampleCount
          }
        }), Qr.pipelines.set(Zr, Wr)
      }
      return Wr
    }

    function XS(rr, Sr, Qr) {
      const Zr = Sr.eye,
        Wr = Sr.viewMatrix;
      rr[0] = Zr[0] + Wr[2] * Qr, rr[1] = Zr[1] + Wr[6] * Qr, rr[2] = Zr[2] + Wr[10] * Qr
    }
    var PS = Qr(39460),
      HS = Qr(54128),
      qS = Qr(38715);
    const RS = Math.PI,
      gS = RS / 1.95,
      CS = [5e-4 / 94, 125e-7, 5e-4 / 18],
      MS = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((rr => {
        let [Sr, Qr] = rr;
        return .434 * RS * Math.pow(2 * RS / Sr, 2) * Qr
      }));

    function GS(rr, Sr, Qr) {
      const {
        up: Zr,
        mieDirectionalG: Wr
      } = rr, ar = 1 - VS(1 - Math.exp(Sr[1] / 45e4), 0, 1), jr = rr.rayleigh - (1 - ar), Ir = Math.hypot(Sr[0], Sr[1], Sr[2]), fr = Ir > 0 ? 1 / Ir : 0, Er = Qr.sunDir;
      for (let Nr = 0; Nr < 3; Nr++) Er[Nr] = Sr[Nr] * fr;
      const pr = Er[0] * Zr[0] + Er[1] * Zr[1] + Er[2] * Zr[2],
        xr = 1e3 * Math.max(0, 1 - Math.exp(-(gS - Math.acos(VS(pr, -1, 1))) / 1.5));
      Qr.sunE = xr;
      const mr = .2 * rr.turbidity * 1e-17 * rr.mieCoefficient;
      for (let Nr = 0; Nr < 3; Nr++) {
        const rr = CS[Nr] * jr,
          Sr = MS[Nr] * mr,
          Zr = xr / (rr + Sr);
        Qr.inScatterR[Nr] = rr * Zr, Qr.inScatterM[Nr] = Sr * Zr, Qr.extinctionBeta[Nr] = 8400 * rr + 1250 * Sr
      }
      return Qr.sunsetMix = VS(Math.pow(1 - pr, 5), 0, 1), Qr.sunDiscE = 19e3 * xr, Qr.mieScale = (1 - Wr * Wr) / (4 * RS), Qr.mieBase = 1 + Wr * Wr, Qr.mieSlope = 2 * Wr, Qr
    }
    const kS = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const AS = 1 / function(rr) {
      const {
        A: Sr,
        B: Qr,
        C: Zr,
        D: Wr,
        E: ar,
        F: jr
      } = kS;
      return (rr * (Sr * rr + Zr * Qr) + Wr * ar) / (rr * (Sr * rr + Qr) + Wr * jr) - ar / jr
    }(1e3);

    function VS(rr, Sr, Qr) {
      return Math.min(Math.max(rr, Sr), Qr)
    }
    const iS = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function wS(rr, Sr) {
      const Qr = new Map(Sr),
        Zr = [],
        Wr = [],
        ar = () => 0 === Wr.length || Wr[Wr.length - 1].active;
      let jr = null;
      const Ir = () => {
        const rr = [...Qr].filter((rr => {
            let [, Sr] = rr;
            return !0 !== Sr
          })),
          Sr = rr.map((rr => {
            let [Sr] = rr;
            return Sr
          })).join("|");
        jr = rr.length ? new RegExp(`\\b(${Sr})\\b`, "g") : null
      };
      Ir();
      for (const fr of rr.split("\n")) {
        const rr = iS.exec(fr);
        if (!rr) {
          ar() && Zr.push(jr ? cS(fr, jr, Qr) : fr);
          continue
        }
        const Sr = rr[1],
          Er = rr[2].trim();
        if ("ifdef" === Sr || "ifndef" === Sr || "if" === Sr) {
          const rr = ar(),
            Zr = "if" === Sr ? FS(Er, Qr) : Qr.has(Er) === ("ifdef" === Sr);
          Wr.push({
            active: rr && Zr,
            parentActive: rr,
            taken: Zr
          })
        } else if ("elif" === Sr || "else" === Sr) {
          const rr = Wr[Wr.length - 1];
          if (!rr) throw new Error(`#${Sr} without #if`);
          const Zr = !rr.taken && ("else" === Sr || FS(Er, Qr));
          rr.active = rr.parentActive && Zr, rr.taken = rr.taken || Zr
        } else if ("endif" === Sr) {
          if (!Wr.pop()) throw new Error("#endif without #if")
        } else if (ar()) {
          const [rr, ...Zr] = Er.split(/\s+/);
          "undef" === Sr ? Qr.delete(rr) : Qr.set(rr, !Zr.length || Zr.join(" ")), Ir()
        }
      }
      if (Wr.length) throw new Error("Unterminated #if");
      return Zr.join("\n")
    }

    function cS(rr, Sr, Qr) {
      return rr.replace(Sr, (rr => {
        const Sr = Qr.get(rr);
        return "string" === typeof Sr ? Sr : rr
      }))
    }

    function FS(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = rr.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Qr ? Qr : [];
      let Wr = 0;
      const ar = () => Zr[Wr],
        jr = () => Zr[Wr++],
        Ir = rr => {
          const Qr = /^\d/.test(rr) ? rr : Sr.get(rr);
          return "string" === typeof Qr ? parseInt(Qr) : Number.NaN
        },
        fr = () => {
          const rr = jr();
          if ("!" === rr) return !fr();
          if ("(" === rr) {
            const rr = pr();
            return jr(), rr
          }
          if ("defined" === rr) {
            const rr = "(" === ar();
            rr && jr();
            const Qr = jr();
            return rr && jr(), Sr.has(Qr)
          }
          const Qr = ar();
          if ("==" === Qr || "!=" === Qr || ">" === Qr || "<" === Qr || ">=" === Qr || "<=" === Qr) {
            jr();
            const Sr = Ir(rr),
              Zr = Ir(jr());
            if (Number.isNaN(Sr) || Number.isNaN(Zr)) return !1;
            switch (Qr) {
              case "==":
                return Sr === Zr;
              case "!=":
                return Sr !== Zr;
              case ">":
                return Sr > Zr;
              case "<":
                return Sr < Zr;
              case ">=":
                return Sr >= Zr;
              default:
                return Sr <= Zr
            }
          }
          return Sr.has(rr)
        },
        Er = () => {
          let rr = fr();
          for (;
            "&&" === ar();) {
            jr();
            const Sr = fr();
            rr = rr && Sr
          }
          return rr
        },
        pr = () => {
          let rr = Er();
          for (;
            "||" === ar();) {
            jr();
            const Sr = Er();
            rr = rr || Sr
          }
          return rr
        },
        xr = pr();
      if (Wr !== Zr.length) throw new Error(`Cannot evaluate #if ${rr}`);
      return xr
    }
    var oS = Qr(38813),
      bS = Qr(38921),
      JS = Qr(38930),
      DS = Qr(42673),
      dS = Qr(40336);
    const sS = 32,
      uS = [10, 3, 10],
      rQ = [21, 7, 21],
      SQ = rQ[0] * rQ[1] * rQ[2],
      QQ = 0,
      ZQ = 1,
      WQ = 2,
      aQ = 3,
      jQ = 64,
      IQ = 512,
      fQ = 4 * SQ,
      EQ = 1536,
      pQ = fQ + SQ * EQ,
      xQ = 1073741824,
      mQ = pQ + 1;

    function NQ(rr, Sr) {
      const Qr = rr % Sr;
      return Qr < 0 ? Qr + Sr : Qr
    }

    function UQ(rr, Sr, Qr) {
      return Zr = NQ(rr, rQ[0]), Wr = NQ(Sr, rQ[1]), ar = NQ(Qr, rQ[2]), Zr + rQ[0] * (Wr + rQ[1] * ar);
      var Zr, Wr, ar
    }

    function tQ(rr, Sr, Qr) {
      return rr + 8 * (Sr + 8 * Qr)
    }

    function hQ(rr, Sr, Qr) {
      return rr + 4 * (Sr + 4 * Qr)
    }
    const zQ = 65535,
      YQ = 0,
      nQ = 1,
      eQ = 2,
      KQ = 3;

    function yQ(rr) {
      return Math.ceil(rr * rr / 32)
    }
    const BQ = 8192,
      TQ = 1 << 18,
      vQ = 65536,
      OQ = 294912,
      LQ = 128,
      lQ = 4096,
      XQ = 16,
      PQ = 16385,
      HQ = 81921,
      qQ = 147457,
      RQ = 4194304;
    const gQ = [0, 0, 0],
      CQ = [0, 0, 0];

    function MQ(rr, Sr, Qr, Zr) {
      ! function(rr, Sr, Qr) {
        const [Zr, Wr, ar] = [rr[0], rr[1], rr[2]];
        let jr, Ir, fr;
        Math.abs(Wr) < .99 ? (jr = ar, Ir = 0, fr = -Zr) : (jr = -Wr, Ir = Zr, fr = 0);
        const Er = Math.hypot(jr, Ir, fr);
        Sr[0] = jr / Er, Sr[1] = Ir / Er, Sr[2] = fr / Er, Qr[0] = Wr * Sr[2] - ar * Sr[1], Qr[1] = ar * Sr[0] - Zr * Sr[2], Qr[2] = Zr * Sr[1] - Wr * Sr[0]
      }(Zr, gQ, CQ);
      const Wr = 1 / 32;
      for (const [ar, jr] of [
          [0, gQ],
          [4, CQ]
        ]) {
        for (let Qr = 0; Qr < 3; Qr++) rr[Sr + ar + Qr] = jr[Qr] * Wr;
        rr[Sr + ar + 3] = -(jr[0] * Qr[0] + jr[1] * Qr[1] + jr[2] * Qr[2]) * Wr
      }
    }
    class GQ {
      constructor() {
        this.words = new Uint32Array(qQ), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Yx(rr, Sr) {
        this.parts = 0, this.refs = 0, this.view = rr, this.viewAt = Sr;
        const Qr = rr[Sr + 1] * rr[Sr + 6] - rr[Sr + 2] * rr[Sr + 5],
          Zr = rr[Sr + 2] * rr[Sr + 4] - rr[Sr] * rr[Sr + 6],
          Wr = rr[Sr] * rr[Sr + 5] - rr[Sr + 1] * rr[Sr + 4],
          ar = Math.hypot(Qr, Zr, Wr) || 1;
        this.light[0] = Qr / ar, this.light[1] = Zr / ar, this.light[2] = Wr / ar
      }
      add(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= lQ || ! function(rr, Sr, Qr) {
            const Zr = rr[Sr],
              Wr = rr[Sr + 1],
              ar = rr[Sr + 2],
              jr = rr[Sr + 3],
              Ir = rr[Sr + 4],
              fr = rr[Sr + 5],
              Er = rr[Sr + 6],
              pr = rr[Sr + 7],
              xr = rr[Sr + 8],
              mr = rr[Sr + 9],
              Nr = rr[Sr + 10],
              Ur = rr[Sr + 11],
              tr = rr[Sr + 12],
              hr = rr[Sr + 13],
              zr = rr[Sr + 14],
              Yr = rr[Sr + 15],
              nr = Zr * fr - Wr * Ir,
              er = Zr * Er - ar * Ir,
              Kr = Zr * pr - jr * Ir,
              yr = Wr * Er - ar * fr,
              Br = Wr * pr - jr * fr,
              Tr = ar * pr - jr * Er,
              vr = xr * hr - mr * tr,
              Or = xr * zr - Nr * tr,
              Lr = xr * Yr - Ur * tr,
              lr = mr * zr - Nr * hr,
              Xr = mr * Yr - Ur * hr,
              Pr = Nr * Yr - Ur * zr,
              Hr = nr * Pr - er * Xr + Kr * lr + yr * Lr - Br * Or + Tr * vr;
            if (!(Math.abs(Hr) > 1e-12)) return !1;
            const qr = 1 / Hr;
            return Qr[0] = (fr * Pr - Er * Xr + pr * lr) * qr, Qr[1] = (ar * Xr - Wr * Pr - jr * lr) * qr, Qr[2] = (hr * Tr - zr * Br + Yr * yr) * qr, Qr[3] = (Nr * Br - mr * Tr - Ur * yr) * qr, Qr[4] = (Er * Lr - Ir * Pr - pr * Or) * qr, Qr[5] = (Zr * Pr - ar * Lr + jr * Or) * qr, Qr[6] = (zr * Kr - tr * Tr - Yr * er) * qr, Qr[7] = (xr * Tr - Nr * Kr + Ur * er) * qr, Qr[8] = (Ir * Xr - fr * Lr + pr * vr) * qr, Qr[9] = (Wr * Lr - Zr * Xr - jr * vr) * qr, Qr[10] = (tr * Br - hr * Kr + Yr * nr) * qr, Qr[11] = (mr * Kr - xr * Br - Ur * nr) * qr, Qr[12] = (fr * Or - Ir * lr - Er * vr) * qr, Qr[13] = (Zr * lr - Wr * Or + ar * vr) * qr, Qr[14] = (hr * er - tr * yr - zr * nr) * qr, Qr[15] = (xr * yr - mr * er + Nr * nr) * qr, !0
          }(Sr, Qr, this.inverse)) return;
        const {
          view: Zr,
          viewAt: Wr
        } = this, ar = Qr;
        let jr = 1 / 0,
          Ir = 1 / 0,
          fr = -1 / 0,
          Er = -1 / 0,
          pr = -1 / 0;
        const [xr, mr, Nr] = this.light;
        for (let Kr = 0; Kr < 8; Kr++) {
          const Qr = 1 & Kr ? rr.hi[0] : rr.lo[0],
            Ur = 2 & Kr ? rr.hi[1] : rr.lo[1],
            tr = 4 & Kr ? rr.hi[2] : rr.lo[2],
            hr = Qr * Sr[ar] + Ur * Sr[ar + 4] + tr * Sr[ar + 8] + Sr[ar + 12],
            zr = Qr * Sr[ar + 1] + Ur * Sr[ar + 5] + tr * Sr[ar + 9] + Sr[ar + 13],
            Yr = Qr * Sr[ar + 2] + Ur * Sr[ar + 6] + tr * Sr[ar + 10] + Sr[ar + 14],
            nr = Zr[Wr] * hr + Zr[Wr + 1] * zr + Zr[Wr + 2] * Yr + Zr[Wr + 3],
            er = Zr[Wr + 4] * hr + Zr[Wr + 5] * zr + Zr[Wr + 6] * Yr + Zr[Wr + 7];
          jr = Math.min(jr, nr), Ir = Math.min(Ir, er), fr = Math.max(fr, nr), Er = Math.max(Er, er), pr = Math.max(pr, xr * hr + mr * zr + Nr * Yr)
        }
        if (fr < -1 || Er < -1 || jr >= 1 || Ir >= 1) return;
        const Ur = this.parts++,
          tr = this.rects;
        tr[4 * Ur] = kQ(jr), tr[4 * Ur + 1] = kQ(Ir), tr[4 * Ur + 2] = kQ(fr), tr[4 * Ur + 3] = kQ(Er);
        const hr = this.inverse,
          {
            cell: zr,
            dims: Yr,
            lo: nr
          } = rr,
          er = HQ + Ur * XQ;
        for (let Kr = 0; Kr < 3; Kr++) this.floats[er + 4 * Kr] = hr[Kr] / zr, this.floats[er + 4 * Kr + 1] = hr[4 + Kr] / zr, this.floats[er + 4 * Kr + 2] = hr[8 + Kr] / zr, this.floats[er + 4 * Kr + 3] = (hr[12 + Kr] - nr[Kr]) / zr;
        this.words[er + 12] = rr.at, this.floats[er + 13] = pr + .001 * (1 + Math.abs(pr)), this.words[er + 14] = Yr[0] | Yr[1] << 8 | Yr[2] << 16
      }
      finish() {
        const rr = LQ,
          {
            counts: Sr,
            rects: Qr,
            words: Zr
          } = this;
        Sr.fill(0);
        let Wr = 0,
          ar = 0;
        for (; ar < this.parts; ar++) {
          const Zr = 4 * ar,
            jr = (Qr[Zr + 2] - Qr[Zr] + 1) * (Qr[Zr + 3] - Qr[Zr + 1] + 1);
          if (Wr + jr > 65536) break;
          Wr += jr;
          for (let Wr = Qr[Zr + 1]; Wr <= Qr[Zr + 3]; Wr++)
            for (let ar = Qr[Zr]; ar <= Qr[Zr + 2]; ar++) Sr[Wr * rr + ar]++
        }
        let jr = 0;
        for (let fr = 0; fr < 16384; fr++) Zr[fr] = jr, jr += Sr[fr], Sr[fr] = Zr[fr];
        Zr[16384] = jr;
        for (let fr = 0; fr < ar; fr++) {
          const Wr = 4 * fr;
          for (let ar = Qr[Wr + 1]; ar <= Qr[Wr + 3]; ar++)
            for (let jr = Qr[Wr]; jr <= Qr[Wr + 2]; jr++) Zr[PQ + Sr[ar * rr + jr]++] = fr
        }
        const Ir = this.floats;
        for (let fr = 0; fr < 16384; fr++) {
          const rr = PQ + Zr[fr],
            Sr = rr + Math.min(Zr[fr + 1] - Zr[fr], 64);
          for (let Qr = rr + 1; Qr < Sr; Qr++) {
            const Sr = Zr[Qr],
              Wr = Ir[81934 + Sr * XQ];
            let ar = Qr - 1;
            for (; ar >= rr && Ir[81934 + Zr[ar] * XQ] < Wr; ar--) Zr[ar + 1] = Zr[ar];
            Zr[ar + 1] = Sr
          }
        }
        this.refs = Wr
      }
    }

    function kQ(rr) {
      return Math.min(127, Math.max(0, Math.floor((.5 * rr + .5) * LQ)))
    }

    function AQ(rr, Sr, Qr, Zr, Wr) {
      for (let ar = 0; ar < 4; ar++)
        for (let jr = 0; jr < 4; jr++) Wr[4 * ar + jr] = rr[Sr + 4 * ar] * Qr[Zr + jr] + rr[Sr + 4 * ar + 1] * Qr[Zr + 4 + jr] + rr[Sr + 4 * ar + 2] * Qr[Zr + 8 + jr] + rr[Sr + 4 * ar + 3] * Qr[Zr + 12 + jr]
    }

    function VQ(rr, Sr, Qr, Zr, Wr) {
      const ar = rr[0] - Sr,
        jr = rr[1] - Qr,
        Ir = rr[2] - Zr,
        fr = rr[3] - Sr,
        Er = rr[4] - Qr,
        pr = rr[5] - Zr,
        xr = rr[6] - Sr,
        mr = rr[7] - Qr,
        Nr = rr[8] - Zr;
      if (Math.min(ar, fr, xr) > Wr || Math.max(ar, fr, xr) < -Wr) return !1;
      if (Math.min(jr, Er, mr) > Wr || Math.max(jr, Er, mr) < -Wr) return !1;
      if (Math.min(Ir, pr, Nr) > Wr || Math.max(Ir, pr, Nr) < -Wr) return !1;
      const Ur = fr - ar,
        tr = Er - jr,
        hr = pr - Ir,
        zr = xr - fr,
        Yr = mr - Er,
        nr = Nr - pr,
        er = tr * nr - hr * Yr,
        Kr = hr * zr - Ur * nr,
        yr = Ur * Yr - tr * zr;
      if (Math.abs(er * ar + Kr * jr + yr * Ir) > Wr * (Math.abs(er) + Math.abs(Kr) + Math.abs(yr))) return !1;
      const Br = [Ur, tr, hr, zr, Yr, nr, ar - xr, jr - mr, Ir - Nr];
      for (let Tr = 0; Tr < 3; Tr++) {
        const rr = Br[3 * Tr],
          Sr = Br[3 * Tr + 1],
          Qr = Br[3 * Tr + 2];
        for (let Zr = 0; Zr < 3; Zr++) {
          const Ur = 0 === Zr ? 0 : 1 === Zr ? Qr : -Sr,
            tr = 0 === Zr ? -Qr : 1 === Zr ? 0 : rr,
            hr = 0 === Zr ? Sr : 1 === Zr ? -rr : 0,
            zr = Ur * ar + tr * jr + hr * Ir,
            Yr = Ur * fr + tr * Er + hr * pr,
            nr = Ur * xr + tr * mr + hr * Nr,
            er = Wr * (Math.abs(Ur) + Math.abs(tr) + Math.abs(hr));
          if (Math.min(zr, Yr, nr) > er || Math.max(zr, Yr, nr) < -er) return !1
        }
      }
      return !0
    }
    const iQ = new Float32Array(1);
    new Uint32Array(iQ.buffer);
    var wQ = Qr(40340);

    function cQ(rr) {
      const [Sr, Qr, Zr] = wQ.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${rr.group}) @binding(${rr.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Sr-1}, ${Qr-1}, ${Zr-1});\n}\n`
    }

    function FQ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Wr, ar, jr] = rQ, [Ir, fr, Er] = uS, pr = Math.log2(sS), xr = Zr ? "var<private> bloxdSpCrossed: bool;\n" : "", mr = Zr ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${rr.group}) @binding(${rr.ZN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${rr.group}) @binding(${rr.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Qr?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${xr}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${nQ}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${eQ}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Qr?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${KQ}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Wr}, ${ar}, ${jr});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Wr} * (s.y + ${ar} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Ir}, ${fr}, ${Er}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${pr}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${aQ}u) {\n\t\treturn named && state == ${WQ}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${fQ}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${pQ}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Sr?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Sr?`\t\tif (exits && step > 0 && step % ${JQ} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${pr}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${QQ}u || kind == ${ZQ}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${WQ}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${fQ}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${mr}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const oQ = {
      group: 0,
      uniform: 0,
      ZN: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function bQ() {
      const rr = oQ;
      return `${cQ(rr)}${FQ(rr,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${wQ.d}>,\n}\n@group(${rr.group}) @binding(${rr.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${rr.group}) @binding(${rr.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${wQ.m})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${wQ.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${wQ.h}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const JQ = 2;
    const DQ = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function dQ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Zr = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Sr.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Wr = "trace" === Qr || "lit" === Qr,
        ar = "maskEdge" === Qr ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        jr = Wr ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Sr.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Sr.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Qr?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${ar};\n`;
      return `${Zr}${rr.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Wr?function(){const[rr,Sr,Qr]=wQ.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${rr}.0, ${Sr}.0, ${Qr}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${jr}}\n`:""}${rr.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Sr.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Sr.renderOffset});\n}\n`:""}`
    }
    const sQ = "bloxdSpOwnTexture";

    function uQ(rr) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${rr.texture}) - 1u)))`
    }
    const rZ = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${PS.i.map((rr=>{let[Sr,Qr]=rr;return`\tbloxdSpOut.${Sr} = (bloxdSpWord & ${Qr}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function SZ(rr) {
      return `bloxdSpFlags(${rr})`
    }
    const QZ = `${DS.i}.eyePosition`;

    function ZZ(rr, Sr, Qr, Zr, Wr) {
      const ar = rr.indexOf(Sr);
      if (ar < 0 || rr.indexOf(Sr, ar + 1) >= 0) throw new Error(`Lite's ${Wr} program changed at the shader pack ${Zr} hook: ${ar<0?"no":"more than one"} anchor (lite/${Wr}ShaderPack.ts)`);
      return rr.slice(0, ar) + Qr + rr.slice(ar + Sr.length)
    }

    function WZ(rr) {
      return rr.sunShadow || rr.airShadow
    }

    function aZ(rr, Sr) {
      return Sr && WZ(rr)
    }
    const jZ = {
      group: DS.d,
      ...DS.n
    };

    function IZ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!WZ(rr)) return "";
      if (Sr) {
        const Sr = jZ,
          Wr = "trace" === Qr || "lit" === Qr;
        let ar = "";
        rr.sunShadow && (ar = Wr ? `${FQ(Sr,!0,"lit"===Qr)}${Zr=Sr,`@group(${Zr.group}) @binding(${Zr.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Zr.group}) @binding(${Zr.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(rr, Sr, Qr) {
          const Zr = `@group(${rr}) @binding(${Sr}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Qr ? `${Zr}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${DQ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((rr=>`\t{\n\t\tlet o = vec2i(${rr});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Zr
        }(Sr.group, DS.p, "maskEdge" === Qr));
        const jr = {
          shadowDirection: `${DS.i}.shadowDirection`,
          renderOffset: `${DS.i}.renderOffset`,
          eyePosition: `${DS.i}.eyePosition`
        };
        return `${cQ(Sr)}${ar}${function(rr){const[Sr,Qr,Zr]=wQ.r;return`@group(${rr.group}) @binding(${rr.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${rr.group}) @binding(${rr.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Sr}.0, ${Qr}.0, ${Zr}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Sr)}${dQ(rr,jr,Qr)}`
      }
      var Zr;
      return `${rr.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${rr.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function fZ(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Sr) return "";
      const ar = (jr = "fragmentInputs.vPositionW", Ir = rr.sunShadow ? {
        normal: Qr,
        flags: Zr
      } : null, `\n\tbloxdSpShadowPosition = ${jr};\n${Ir?`\tbloxdSpShadowNormal = normalize(${Ir.normal});\n\tbloxdSpShadowEmissive = (${Ir.flags} & ${PS.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Ir.flags} & ${PS.j}u) != 0u;\n`:""}`);
      var jr, Ir;
      return rr.sunShadow && ("mask" === Wr || "maskEdge" === Wr) ? `${ar}${fr="fragmentInputs.position",Er="maskEdge"===Wr,`\n\tbloxdSpShadowPixel = vec2i(${fr}.xy);\n${Er?`\tbloxdSpShadowZ = ${fr}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${fr}.z), dpdy(${fr}.z));\n`:""}`}` : ar;
      var fr, Er
    }
    const EZ = "bloxdSpTextureRotation",
      pZ = "bloxdSpTextureLayers",
      xZ = `@group(${DS.d}) @binding(${DS.q}) var<storage, read> ${pZ}: array<u32>;\n`;

    function mZ(rr) {
      return `\tvertexOutputs.vPackTexture = ${pZ}[min(u32(${rr}), arrayLength(&${pZ}) - 1u)];\n`
    }

    function NZ(rr) {
      return void 0 !== rr.uv
    }

    function UZ(rr) {
      if (!rr) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (NZ(rr)) return function(rr) {
        const {
          texture: Sr,
          cells: Qr,
          layers: Zr
        } = rr, Wr = `textureDimensions(${Sr}, bloxdSpLevel)`, ar = Qr ? `max(vec2u(vec2f(${Wr}) / ${Qr}), vec2u(1u))` : Wr, jr = Qr ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ar};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Qr}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Qr}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Sr}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Wr} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ar};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Sr}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Ir;
        if (Qr)
          if (1 === Zr.length) Ir = `\treturn bloxdSpOwnTexel(${Zr[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const rr = Zr.length - 1;
            Ir = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Zr[rr]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Sr = rr - 1; Sr >= 0; Sr--) Ir += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Zr[Sr]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Ir += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Ir = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${rr.id?`var<private> ${sQ}: u32;\n`:""}${jr}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${uQ(rr)};\n\treturn ${ar};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${rr.id?sQ:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${uQ(rr)};\n${Ir}}\n`
      }(rr);
      const Sr = rr,
        Qr = rr => {
          const Qr = rr > 0 ? `bloxdSpLayer - ${Sr.layers*rr}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${rr}, ${Sr.sampler}, bloxdSpTurned, ${Qr}, round(bloxdSpMipLevel));`
        };
      let Zr = "";
      for (let ar = 0; ar < Sr.count - 1; ar++) Zr += `\tif (bloxdSpLayer < ${Sr.layers*(ar+1)}u) {\n\t\t${Qr(ar)}\n\t}\n`;
      const Wr = Sr.frame ? `${Sr.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${EZ}: u32;\n${xZ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${EZ} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${EZ} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${EZ} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Wr}${Zr}\t${Qr(Sr.count-1)}\n}\n`
    }

    function tZ(rr, Sr, Qr) {
      return !!rr.surface && "bloxdDefaultSurface" !== rr.surface && function(rr, Sr) {
        return "liquid" === Sr || !rr
      }(Sr, Qr)
    }

    function hZ(rr, Sr) {
      return rr.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Sr.vertexLocalPosition}, ${SZ(Sr.vertexFlags)});\n\t\tlet bloxdSpVertex = ${rr.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function zZ(rr, Sr, Qr, Zr, Wr) {
      if (!rr.surface) return "";
      const ar = (rr, Sr) => `\n\tlet bloxdSpTexelUV = ${rr};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Sr}) - 1u));`;
      let jr = "",
        Ir = "0u, 0u, vec2f(0.0), 0.0";
      const fr = Zr && NZ(Zr) ? Zr : null,
        Er = Zr && !NZ(Zr) ? Zr : null;
      if (fr) {
        jr = `${fr.id?`\n\tlet bloxdSpTexture = ${fr.id};\n\t${sQ} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${fr.uv};${ar(function(rr,Sr){var Qr;return`${null!==(Qr=rr.levelUv)&&void 0!==Qr?Qr:rr.cells?`${Sr} / ${rr.cells}`:Sr} * vec2f(textureDimensions(${rr.texture}))`}(fr,"bloxdSpUv"),fr.texture)}`, Ir = (fr.id ? `${sQ}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Er && (jr = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${EZ} = bloxdSpTexture >> 16u;${ar(`fragmentInputs.vMainUV1 * ${(0,oS.tb)(Er.width)}`,"textureAtlas0")}`, Ir = `bloxdSpTexture & 0xffffu, ${EZ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const pr = Wr.overlayColour,
        xr = pr ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        mr = "bloxdDefaultSurface" !== rr.surface || pr ? `\n\tbaseColor = vec4f(${xr}, baseColor.a);` : "",
        Nr = tZ(rr, Sr, Qr) ? `\n\t${Wr.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${jr}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Wr.alpha}, ${Wr.enchantTier}, ${Wr.enchantColour}, ${Wr.enchantSpeed}, ${null!==pr&&void 0!==pr?pr:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Wr.normal}, ${Wr.localPosition}, ${SZ(Wr.flags)}, ${Ir});\n\tlet bloxdSpSurface = ${rr.surface}(bloxdSpSurfaceIn);${mr}${Nr}\n`
    }
    const YZ = "bloxdSpLightIn";

    function nZ(rr, Sr, Qr, Zr) {
      if (!rr.light) return "";
      const {
        lambert: Wr,
        diffuse: ar,
        emissive: jr,
        ambient: Ir,
        fogColour: fr,
        fogAlpha: Er,
        normal: pr,
        glow: xr
      } = Zr, mr = [`${oS.m}.rgb`, `${oS.m}.w`, "uniforms.uAmbientLightColour", "uniforms.uSkyLightColour", oS.j], Nr = ["vec3f(0.0)", "1.0", "vec3f(1.0)", "vec3f(1.0)", "vec3f(0.0)"];

      function Ur(rr, Sr) {
        return null === xr ? rr : `mix(${rr}, ${Sr}, ${xr})`
      }
      const tr = (Sr ? mr.map(((rr, Sr) => Ur(rr, Nr[Sr]))) : Nr).join(", "),
        hr = Qr ? Ur(Wr, "0.0") : "0.0";
      return `\tvar ${YZ} = BloxdLightIn(vec3f(0.0), ${hr}, ${ar}, ${Ur(jr,"vec3f(1.0)")}, ${Ir}, ${tr}, ${fr}, ${Er}, fragmentInputs.vPositionW, ${pr}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${YZ}.litColour = bloxdLitColour(bloxdSpSurface, ${YZ});\n`
    }

    function eZ(rr) {
      return rr.light ? `\n\t{\n\t\tlet bloxdSpLight = ${rr.light}(bloxdSpSurface, ${YZ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const KZ = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      yZ = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      BZ = "\treturn color;\n}",
      TZ = {
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
        overlayColour: null,
        glow: null
      };
    const vZ = Object.freeze({});

    function OZ(rr) {
      var Sr;
      return !(null === (Sr = (0, dS.f)(rr)) || void 0 === Sr || !Sr.sceneDepth)
    }

    function LZ(rr) {
      const Sr = (0, dS.f)(rr);
      return !!Sr && tZ(Sr.hooks, Sr.strict, Sr.program)
    }

    function lZ(rr, Sr, Qr, Zr) {
      return ZZ(rr, Sr, Qr, Zr, "terrain")
    }

    function XZ(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const ar = function(rr) {
          return (0, dS.e)(rr.packVariant, rr.liquid ? "liquid" : "terrain")
        }(rr),
        {
          hooks: jr
        } = ar,
        Ir = aZ(ar, Zr),
        fr = "edge" === Wr ? "maskEdge" : "plain" === Wr ? "mask" : "trace",
        Er = hZ(jr, TZ);
      Er && (Sr = lZ(Sr, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Er}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const pr = "atlas" === rr.texture ? {
          count: rr.atlasCount,
          layers: rr.atlasLayers,
          width: rr.l_,
          sampler: "atlasSampler",
          frame: rr.animated ? Qr : null
        } : null,
        xr = `${ar.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${fZ(ar,Ir,TZ.normal,TZ.flags,fr)}${zZ(jr,ar.strict,ar.program,pr,TZ)}`;
      xr && (Sr = lZ(Sr, KZ, `${KZ.slice(0,-1)}${xr}`, "surface"));
      const mr = eZ(jr);
      return mr && (Sr = lZ(Sr, yZ, `${nZ(jr,rr.lighting,rr.dirLightCount>0,TZ)}${yZ}`, "light input"), Sr = lZ(Sr, BZ, `${mr.slice(1)}${BZ}`, "light")), `${(0,DS.x)()}${ar.sceneDepth?`@group(${DS.d}) @binding(${DS.m}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${QZ};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${IZ(ar,Ir,fr)}${UZ(pr)}${rZ}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${ar.code}${Sr}`
    }
    const PZ = yr.d.WGSL;

    function HZ(rr) {
      return void 0 !== rr.packVariant
    }
    const qZ = {
        Oar: 0,
        Lar: 4,
        Xar: 8,
        Par: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      RZ = qZ.aoLevels + 4,
      gZ = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      CZ = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      MZ = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      GZ = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      kZ = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      AZ = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      VZ = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      iZ = 0,
      wZ = 3,
      cZ = 4,
      FZ = 5,
      oZ = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${bS.e}, ${bS.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${bS.e}, ${bS.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      bZ = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((rr=>JS.d>>rr&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const JZ = {
      lx: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: rr => `animDataPerTex[${rr}]`
    };

    function DZ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JZ;
      return `\n\tlet atlasIdxIn = ${rr};\n\tlet animTick = ${Qr.lx};\n\tlet animTickStride = ${Qr.stride};\n\tlet numAnimTextures = ${Qr.count};\n\t${(0,Br.f)(yr.d.WGSL,Qr.perTexture)}\n\t${Sr}animLayer;\n`
    }

    function dZ(rr) {
      const Sr = (Sr, Qr) => {
        const Zr = Sr > 0 ? `fragmentInputs.texAtlasIndex - ${rr.atlasLayers.toFixed(1)} * ${Sr.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Qr?"textureSampleLevel":"textureSample"}(textureAtlas${Sr}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Zr}))${Qr?", atlasLod":""})`
      };
      if (1 === rr.atlasCount) return `baseColor = ${Sr(0,!1)};`;
      let Qr = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,oS.tb)(rr.l_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Zr = 0; Zr < rr.atlasCount; Zr++) {
        const Wr = rr.atlasLayers * (Zr + 1) - .5;
        Qr += `${Zr>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,oS.tb)(Wr)}) {\n\t\tbaseColor = ${Sr(Zr,!0)};\n\t}`
      }
      return Qr
    }

    function sZ(rr) {
      return `terrain-${rr.texture}${"atlas"===rr.texture?rr.atlasCount:""}${rr.animated?"-anim":""}${rr.alphaTest?"-test":""}${rr.lighting?"-lit":""}-dir${rr.dirLightCount}${rr.packed?"-packed":""}${HZ(rr)?`-sp${rr.packVariant}`:""}${rr.liquid?"-liquid":""}${rr.resting?"-rest":""}`
    }

    function uZ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Zr = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Qr = "none" !== rr.texture,
          Zr = "atlas" === rr.texture,
          Wr = rr.dirLightCount > 0,
          ar = HZ(rr);
        if (rr.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${rr.dirLightCount}`);
        let jr = 1,
          Ir = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Zr) {
          rr.animated && (Ir += `@group(2) @binding(${jr++}) var<storage, read> animDataPerTex: array<f32>;\n`), Ir += `@group(2) @binding(${jr++}) var atlasSampler: sampler;\n`;
          for (let Sr = 0; Sr < rr.atlasCount; Sr++) Ir += `@group(2) @binding(${jr++}) var textureAtlas${Sr}: texture_2d_array<f32>;\n`
        } else "single" === rr.texture && (Ir += `@group(2) @binding(${jr++}) var diffuseSamplerSampler: sampler;\n`, Ir += `@group(2) @binding(${jr++}) var diffuseSampler: texture_2d<f32>;\n`);
        const fr = function(rr) {
            const Sr = VZ,
              Qr = "none" !== rr.texture,
              Zr = "atlas" === rr.texture,
              Wr = HZ(rr);
            return rr.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Qr?"uv: vec2f,":""}\n\t${Zr?"texAtlasIndices: f32,":""}\n\t${rr.lighting?"aPackedLightLevels: f32,":""}\n\t${Wr?"blockFlagWords: vec2u,":""}\n}\n${oZ}\n${bZ}\n${"single"===rr.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Qr?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===rr.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Zr?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${rr.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Wr?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Sr.position}) position: vec3f,\n\t@location(${Sr.normal}) normal: vec4f,\n\t@location(${Sr.color}) color: vec4f,\n\t${Qr?`@location(${Sr.uv}) uv: vec2f,`:""}\n\t${rr.lighting?`@location(${Sr.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Wr?`@location(${Sr.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(rr),
          Er = `\n${GZ}\n${CZ}\n${MZ}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Ir}\n${hS}\n${fr.declarations}\nstruct Varyings {\n\t${"none"===Sr?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${rr.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Wr?"@location(5) vTerrainLambert: f32,":""}\n\t${Qr?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Zr?"@location(7) texAtlasIndex: f32,":""}\n\t${rr.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${ar?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${ar&&Zr?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${rr.resting?"":(0,oS.s)(PZ)}\n${AZ}\n\n@vertex\nfn mainVertex(${fr.parameter}) -> Varyings {\n\t${fr.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${ar?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${PS.e.placed}u;`:""}\n\t${ar&&Zr?mZ("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${rr.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Qr?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Zr?function(rr){return rr?DZ("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(rr.animated):""}\n\t${"single"===rr.texture&&rr.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,oS.fb)(PZ)}\n\t${(0,oS.L)(PZ,rr.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${rr.resting?"":kZ}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Zr?dZ(rr):""}\n\t${"single"===rr.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Qr?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${rr.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Wr?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${tS}));\n\t${HZ(rr)?(0,oS.nb)(yr.d.WGSL):(0,oS.X)(PZ)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          pr = new Set;
        rr.lighting && pr.add("BLOXD_LIGHTING");
        Wr && pr.add("BLOXD_TERRAIN_DIRECTIONAL");
        return wS(Er, new Map([...pr].map((rr => [rr, !0]))))
      }(rr, Qr);
      if (!HZ(rr)) return Zr;
      const Wr = XZ(rr, Zr, DZ, Sr, Qr);
      return "none" === Qr ? Wr : `${Wr}${function(rr){const Sr="none"!==rr.texture&&rr.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${rr.resting?"":kZ}\n\t${rr.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Sr&&"atlas"===rr.texture?dZ(rr):""}\n\t${Sr&&"single"===rr.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Sr?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${PS.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(rr)}`
    }
    const rW = new Map([
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

    function SW(rr, Sr) {
      const Qr = new Map;
      let Zr = 0;
      const Wr = [],
        ar = [],
        jr = [];
      for (const Er of Sr) {
        var Ir, fr;
        const Sr = null !== (Ir = Er.type.trim().split(/\s+/).pop()) && void 0 !== Ir ? Ir : Er.type,
          pr = rW.get(Sr);
        if (!pr) throw new Error(`Lite: no uniform layout for ${Er.name}: ${Er.type}`);
        const xr = null !== (fr = Er.arraySize) && void 0 !== fr ? fr : 0,
          mr = xr ? 4 : pr.align;
        Zr = Math.ceil(Zr / mr) * mr;
        const Nr = xr ? 4 * Math.ceil(pr.floats / 4) : pr.floats;
        if (Qr.set(Er.name, {
            offset: Zr,
            floats: pr.floats,
            arraySize: xr,
            stride: Nr
          }), xr && pr.floats <= 2) {
          const Sr = `${rr}_${jr.length}_strided`;
          ar.push(`struct ${Sr} {\n\t@size(16) el: ${pr.wgsl},\n}`), jr.push(Er.name), Wr.push(`\t@align(16) ${Er.name}: array<${Sr}, ${xr}>,`)
        } else xr ? Wr.push(`\t@align(16) ${Er.name}: array<${pr.wgsl}, ${xr}>,`) : Wr.push(`\t${Er.name}: ${pr.wgsl},`);
        Zr += xr ? Nr * xr : pr.floats
      }
      return {
        slots: Qr,
        floats: Math.max(4, 4 * Math.ceil(Zr / 4)),
        wgsl: `${ar.join("\n")}\nstruct ${rr} {\n${Wr.join("\n")}\n}\n`,
        stridedArrays: jr
      }
    }
    const QW = [{
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
      ZW = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      WW = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function aW(rr, Sr) {
      return `#if defined(${rr}) && ${rr}DIRECTUV == 0\nvarying v${Sr}UV: vec2f;\n#endif`
    }

    function jW(rr, Sr, Qr) {
      return `#if defined(${rr}) && ${rr}DIRECTUV == 0\nif (uniforms.v${Sr}Infos.x==0.)\n{vertexOutputs.v${Sr}UV= (uniforms.${Qr}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Sr}UV= (uniforms.${Qr}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function IW(rr, Sr, Qr) {
      return `#ifdef ${rr}\n#if ${rr}DIRECTUV == 1\n#define v${Sr}UV vMainUV1\n#elif ${rr}DIRECTUV == 2\n#define v${Sr}UV vMainUV2\n#else\nvarying v${Sr}UV: vec2f;\n#endif\nvar ${Qr}SamplerSampler: sampler;\nvar ${Qr}Sampler: texture_2d<f32>;\n#endif`
    }
    const fW = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      EW = 256,
      pW = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      xW = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      mW = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      NW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      UW = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      tW = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      hW = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      zW = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${xW}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${aW("OPACITY","Opacity")}\n${aW("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${hW}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${mW}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${jW("OPACITY","Opacity","opacity")}\n${jW("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${NW}\n#define CUSTOM_VERTEX_MAIN_END\n${UW}\n}\n`;
    const YW = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${IW("OPACITY","Opacity","opacity")}\n${IW("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${hW}\n${tW}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((rr,Sr)=>function(rr){const Sr=`
    frame.lights[LITE_LIGHT$ {
        rr
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      rr
    }\
    nvar diffuse$ {
      rr
    }: vec4f = $ {
      Sr
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      rr
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Sr
    }.vLightData, diffuse$ {
      rr
    }.rgb, $ {
      Sr
    }.vLightSpecular.rgb, diffuse$ {
      rr
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Sr))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, nW = /^([gimus]+)!/, eW = new Set;

    function KW(rr) {
      eW.has(rr) || (eW.add(rr), console.warn(`Lite: no place for plugin code at ${rr} in the standard shader: it is left out`))
    }

    function yW(rr, Sr) {
      let Qr = rr;
      const Zr = new Map;
      for (const [ar, jr] of Sr) {
        var Wr;
        Zr.set(ar, `${null!==(Wr=Zr.get(ar))&&void 0!==Wr?Wr:""}${jr}\n`)
      }
      for (const [ar, jr] of Zr) {
        if (!ar.startsWith("!")) {
          const rr = `#define ${ar}`;
          if (!Qr.includes(rr)) {
            KW(ar);
            continue
          }
          Qr = Qr.replace(rr, (() => `\n${jr}\n${rr}`));
          continue
        }
        let rr = ar.substring(1),
          Sr = "g";
        if (rr.startsWith("!")) Sr = "", rr = rr.substring(1);
        else {
          const Qr = nW.exec(rr);
          Qr && (Sr = Qr[1], rr = rr.substring(Sr.length + 1))
        }
        const Zr = new RegExp(rr, Sr.includes("g") ? Sr : `${Sr}g`);
        let Wr = Zr.exec(Qr);
        for (Wr || KW(ar); Wr;) {
          const rr = Wr,
            Sr = jr.replace(/\$(\d+)/g, ((Sr, Qr) => Number(Qr) < rr.length ? rr[Number(Qr)] : ""));
          Qr = Qr.substring(0, rr.index) + Sr + Qr.substring(rr.index + rr[0].length), Zr.lastIndex = rr.index + Sr.length, Wr = Zr.exec(Qr)
        }
      }
      return Qr
    }
    const BW = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      TW = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      vW = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function OW(rr) {
      const Sr = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Qr = rr.replace(BW, ((rr, Qr, Zr, Wr, ar, jr) => ("attribute" === Qr ? Sr.attributes.push({
        name: ar,
        type: jr
      }) : void 0 === Qr ? Sr.varyings.push({
        name: ar,
        type: jr,
        interpolation: lW(jr, Zr, Wr)
      }) : Sr.uniforms.push({
        name: ar,
        type: LW(jr)
      }), "")));
      return Qr = Qr.replace(TW, ((rr, Qr) => (Sr.samplers.add(Qr), ""))), Qr = Qr.replace(vW, ((rr, Qr, Zr) => (Sr.textures.push({
        name: Qr,
        type: Zr
      }), ""))), Sr.body = Qr, Sr
    }

    function LW(rr) {
      const Sr = rr.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Qr = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Sr);
      if (!Qr) throw new Error(`Lite: unsupported uniform type ${rr}`);
      return Qr
    }

    function lW(rr, Sr, Qr) {
      return void 0 === Sr && void 0 === Qr ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(rr.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Sr ? "@interpolate(flat) " : `@interpolate(${null!==Sr&&void 0!==Sr?Sr:"perspective"}, ${null!==Qr&&void 0!==Qr?Qr:"center"}) `
    }

    function XW(rr) {
      return RW({
        defines: rr.defines,
        vertex: yW(zW, rr.vertexCode),
        fragment: yW(YW, rr.fragmentCode),
        members: [...QW, ...rr.defines.has("OPACITY") ? ZW : [], ...rr.defines.has("EMISSIVE") ? WW : [], ...rr.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function PW(rr) {
      const Sr = rr.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Sr === rr) throw new Error("Lite: fragment main has no return");
      return Sr
    }
    const HW = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${xW}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${mW}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${NW}\n${UW}\n}\n`,
      qW = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${tW}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function RW(rr) {
      const Sr = rr.defines,
        Qr = OW(wS(rr.vertex, Sr)),
        Zr = OW(wS(rr.fragment, Sr)),
        Wr = new Map;
      for (const nr of [...Qr.varyings, ...Zr.varyings]) Wr.has(nr.name) || Wr.set(nr.name, nr);
      const ar = [...Wr.values()].map(((rr, Sr) => `\t@location(${Sr}) ${rr.interpolation}${rr.name}: ${rr.type},`)),
        jr = [...rr.members];
      for (const nr of [...Qr.uniforms, ...Zr.uniforms]) jr.some((rr => rr.name === nr.name)) || jr.push(nr);
      const Ir = SW(rr.structName, jr),
        fr = [],
        Er = [];
      let pr = 1;
      const xr = new Set;
      for (const nr of [...Qr.textures, ...Zr.textures]) {
        if (xr.has(nr.name)) continue;
        xr.add(nr.name);
        const rr = `${nr.name}Sampler`,
          Sr = pr++,
          Qr = pr++,
          Zr = nr.type.startsWith("texture_2d_array") ? "2d-array" : nr.type.startsWith("texture_cube") ? "cube" : "2d";
        fr.push({
          name: nr.name,
          binding: Sr,
          samplerBinding: Qr,
          dimension: Zr
        }), Er.push(`@group(2) @binding(${Sr}) var ${nr.name}: ${nr.type};`), Er.push(`@group(2) @binding(${Qr}) var ${rr}: sampler;`)
      }
      for (const nr of [...Qr.samplers, ...Zr.samplers])
        if (!xr.has(nr.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${nr} has no texture`);
      const mr = [GZ, pW, Ir.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${rr.structName};`, ...Er].join("\n"),
        Nr = Qr.attributes,
        Ur = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Qr.attributes.map(((rr, Sr) => `\t@location(${Sr}) ${rr.name}: ${rr.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        tr = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ar, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        hr = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Zr.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...ar, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", hS, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${tS}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        zr = rr => {
          for (const Sr of Ir.stridedArrays) rr = rr.replace(new RegExp(`\\b${Sr}\\s*\\[(.*?)\\]`, "g"), `${Sr}[$1].el`);
          return rr
        };
      return {
        vertex: `${mr}\n${Ur}\n${tr}\n${zr(Qr.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${mr}\n${hr}\n${PW((Yr=zr(Zr.body),Yr.includes("fragmentInputs.position")?Yr.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Yr))}`,
        attributes: Nr,
        material: Ir,
        textures: fr
      };
      var Yr
    }
    const gW = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      CW = rr => ({
        name: rr,
        type: "vec3"
      }),
      MW = rr => ({
        name: rr,
        type: "float"
      }),
      GW = SW("EarthSkyUniforms", [CW("viewFrom"), MW("exposureScale"), CW("zenithOffset"), MW("fogOn"), CW("up"), MW("ditherOn"), CW("sun"), MW("turbidity"), CW("tint"), MW("rayleigh"), CW("sunDir"), MW("mieStrength"), CW("inScatterR"), MW("mieFocus"), CW("inScatterM"), MW("sunE"), CW("extinctionBeta"), MW("sunsetMix"), MW("mieScale"), MW("mieBase"), MW("mieSlope"), MW("sunDiscE"), MW("exposure")]),
      kW = `${GZ}\n${pW}\n${GW.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      AW = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${gW.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      VW = `\n${hS}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(kS).map((rr=>{let[Sr,Qr]=rr;return`const TONE_${Sr}: f32 = ${Qr};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${AS};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${tS}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var iW = Qr(38555);
    const wW = new iW.kU,
      cW = new iW.kU,
      FW = new iW.Quaternion,
      oW = new Float64Array(3),
      bW = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      JW = new Float64Array(16);

    function DW(rr, Sr, Qr) {
      const Zr = Qr.worldMatrix;
      var Wr;
      rr.updateFloat3("viewFrom", Zr[12], Zr[13], Zr[14]), rr.updateFloatsFrom("zenithOffset", Sr.cameraOffset, 0, 3), rr.updateFloatsFrom("up", Sr.up, 0, 3), Sr.luminance > 0 && (rr.updateFloat("exposure", Sr.luminance), rr.updateFloat("exposureScale", (Wr = Sr.luminance, Math.log2(2 / Math.pow(Wr, 4))))), rr.updateFloat("turbidity", Sr.turbidity), rr.updateFloat("rayleigh", Sr.rayleigh), rr.updateFloat("mieStrength", Sr.mieCoefficient), rr.updateFloat("mieFocus", Sr.mieDirectionalG), rr.updateFloatsFrom("tint", Sr.tint, 0, 3), rr.updateFloat("fogOn", Sr.fog && Qr.fogEnabled && 0 !== Qr.fogMode ? 1 : 0), rr.updateFloat("ditherOn", Sr.dithering ? 1 : 0);
      const ar = Sr.sunPosition;
      if (wW.set(ar[0], ar[1], ar[2]), !Sr.useSunPosition) {
        const rr = Math.PI * (Sr.inclination - .5),
          Qr = 2 * Math.PI * (Sr.azimuth - .5);
        wW.set(Sr.distance * Math.cos(Qr) * Math.cos(rr), Sr.distance * Math.sin(-rr), Sr.distance * Math.sin(Qr) * Math.cos(rr)), iW.Quaternion.FromUnitVectorsToRef(iW.kU.UpReadOnly, cW.set(Sr.up[0], Sr.up[1], Sr.up[2]), FW), wW.rotateByQuaternionToRef(FW, wW)
      }
      rr.updateVector3("sun", wW), oW[0] = wW.x, oW[1] = wW.y, oW[2] = wW.z;
      const jr = GS(Sr, oW, bW);
      rr.updateFloatsFrom("sunDir", jr.sunDir, 0, 3), rr.updateFloat("sunE", jr.sunE), rr.updateFloatsFrom("inScatterR", jr.inScatterR, 0, 3), rr.updateFloatsFrom("inScatterM", jr.inScatterM, 0, 3), rr.updateFloatsFrom("extinctionBeta", jr.extinctionBeta, 0, 3), rr.updateFloat("sunsetMix", jr.sunsetMix), rr.updateFloat("sunDiscE", jr.sunDiscE), rr.updateFloat("mieScale", jr.mieScale), rr.updateFloat("mieBase", jr.mieBase), rr.updateFloat("mieSlope", jr.mieSlope)
    }

    function dW(rr, Sr) {
      const Qr = JW;
      Qr[0] = Sr.far, Qr[5] = Sr.far, Qr[10] = Sr.far, Qr[15] = 1;
      const Zr = rr.infiniteDistance;
      for (let Wr = 0; Wr < 3; Wr++) Qr[12 + Wr] = rr.position[Wr] + (Zr ? Sr.worldMatrix[12 + Wr] : 0);
      return JW
    }
    class sW {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(rr, Sr, Qr, Zr, Wr) {
        Qr !== this.pipeline && (rr.setPipeline(Qr), this.pipeline = Qr), rr.setBindGroup(1, Zr, [Wr]);
        const ar = Sr.material.bindGroup;
        ar !== this.materialGroup && (rr.setBindGroup(2, ar), this.materialGroup = ar);
        const jr = Sr.program.packGroup;
        jr && jr !== this.packGroup && (rr.setBindGroup(DS.d, jr), this.packGroup = jr);
        const {
          vertexBuffers: Ir,
          vertexOffsets: fr
        } = this;
        for (let Er = 0; Er < Sr.vertexBuffers.length; Er++) Ir[Er] === Sr.vertexBuffers[Er] && fr[Er] === Sr.vertexOffsets[Er] || (rr.setVertexBuffer(Er, Sr.vertexBuffers[Er], Sr.vertexOffsets[Er]), Ir[Er] = Sr.vertexBuffers[Er], fr[Er] = Sr.vertexOffsets[Er]);
        Sr.indexBuffer && Sr.indexBuffer !== this.indexBuffer && (rr.setIndexBuffer(Sr.indexBuffer, Sr.indexFormat), this.indexBuffer = Sr.indexBuffer)
      }
    }
    class uW {
      constructor(rr, Sr, Qr, Zr) {
        this.modelMeshes = rr, this.Qrr = Sr, this.maker = Qr, this.warnOnce = Zr, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (rr, Sr) => {
          (Sr < -1 || Sr > 1) && this.warnOnce(`group:${Sr}`, `rendering group ${Sr} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(rr) {
        this.collectGroup(rr, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(rr, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(rr, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Qrr.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(ra), this.transparentDraws.sort(Sa)
      }
      collectGroup(rr, Sr, Qr, Zr, Wr) {
        const ar = this.modelMeshes.group(Sr),
          jr = this.Qrr.group(Sr),
          Ir = 0 === Sr ? null === jr || void 0 === jr ? void 0 : jr.opaque : void 0;
        this.collectList(rr, null === ar || void 0 === ar ? void 0 : ar.opaque, Ir || null === jr || void 0 === jr ? void 0 : jr.opaque, Sr, !1, Qr, Wr), Ir && (this.Qrr.drawn += this.maker.bundleDraws(rr, Ir, Sr)), this.collectList(rr, null === ar || void 0 === ar ? void 0 : ar.alphaTest, void 0, Sr, !1, Qr, Wr), this.collectList(rr, null === ar || void 0 === ar ? void 0 : ar.transparent, null === jr || void 0 === jr ? void 0 : jr.transparent, Sr, !0, Zr, Wr)
      }
      collectList(rr, Sr, Qr, Zr, Wr, ar, jr) {
        var Ir;
        const fr = ar.length;
        Sr && this.maker.pushDraws(rr, Sr.units, Sr.units.length, Zr, Wr, ar, Sr.rows), Qr && (this.Qrr.drawn += this.maker.pushDraws(rr, Qr, Qr.length, Zr, Wr, ar));
        const Er = Wr ? null === (Ir = this.modelMeshes.group(Zr)) || void 0 === Ir ? void 0 : Ir.text : void 0;
        Er && this.maker.pushDraws(rr, Er.units, Er.units.length, Zr, !0, ar, Er.rows), jr && Qa(ar, fr)
      }
    }

    function ra(rr, Sr) {
      return rr.program.id - Sr.program.id || rr.material.owner.uniqueId - Sr.material.owner.uniqueId
    }

    function Sa(rr, Sr) {
      return rr.material.owner.uniqueId - Sr.material.owner.uniqueId
    }

    function Qa(rr, Sr) {
      for (let Qr = Sr + 1; Qr < rr.length; Qr++) {
        const Zr = rr[Qr];
        let Wr = Qr - 1;
        for (; Wr >= Sr && Sa(rr[Wr], Zr) > 0; Wr--) rr[Wr + 1] = rr[Wr];
        rr[Wr + 1] = Zr
      }
    }
    const Za = {};

    function Wa(rr) {
      return rr.hasThinInstances ? "thin" : rr.Har || rr._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function aa(rr, Sr, Qr) {
      return rr ? (Qr._needUVs = !0, rr.optimizeUVAllocation && (0, Lr.F)(rr.matrix) ? (Qr[`${Sr}DIRECTUV`] = rr.uvSet + 1, Qr[`MAINUV${rr.uvSet+1}`] = !0) : Qr[`${Sr}DIRECTUV`] = 0, !0) : (Qr[`${Sr}DIRECTUV`] = 0, !1)
    }

    function ja(rr) {
      const Sr = new Map;
      for (const Qr in rr) {
        if (95 === Qr.charCodeAt(0)) continue;
        const Zr = rr[Qr],
          Wr = typeof Zr;
        "number" === Wr || "string" === Wr ? Sr.set(Qr, String(Zr)) : Zr && "function" !== Wr && Sr.set(Qr, !0)
      }
      return Sr
    }

    function Ia(rr) {
      const Sr = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Qr
        }
        of rr.features)
        for (const rr in Qr) Sr[rr] = Qr[rr];
      return Sr
    }

    function fa(rr) {
      const Sr = rr.parts.geometry;
      return null !== Sr && void 0 !== Sr && Sr.live ? Sr : null
    }

    function Ea(rr) {
      var Sr;
      return null !== (Sr = fa(rr)) && void 0 !== Sr ? Sr : Za
    }
    class pa {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = rr, this.warnOnce = Sr, this.programWithModel = Qr, this.packFailed = Zr, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(rr, Sr, Qr, Zr, Wr) {
        const ar = Sr.owner;
        let jr = this.drawStates.get(Sr);
        if (!jr) {
          const rr = Sr.parts.materials[Sr.range];
          if (!rr) return this.warnOnce("model", `${Qr.name} on ${ar.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          jr = {
            defines: Ia(rr),
            model: rr,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Wr,
            groupId: Zr,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Sr, jr)
        }
        if (this.programCurrent(jr, Sr, Wr, Zr)) return jr.program;
        const {
          model: Ir
        } = jr, fr = Ea(Sr), Er = this.instanceLayout(ar, Wr), pr = this.definesBits(ar);
        if (!this.prepareModelDefines(rr, ar, Ir, jr.defines, Zr, Wr)) return null;
        jr.instancing = Wr, jr.groupId = Zr, jr.modelVersion = Ir.version, jr.geometry = fr, jr.instanceLayout = Er, jr.definesBits = pr;
        const xr = function(rr) {
          let Sr = "";
          for (const [Qr, Zr] of rr) Sr += !0 === Zr ? `${Qr};` : `${Qr}=${Zr};`;
          return Sr
        }(ja(jr.defines));
        return xr === jr.definesKey && jr.packVariant === this.modelPackVariant && jr.program && !this.packFailed(jr.program) || (jr.definesKey = xr, jr.packVariant = this.modelPackVariant, jr.program = this.programWithModel(Ir, jr.defines, xr)), jr.program
      }
      programCurrent(rr, Sr, Qr, Zr) {
        return null !== rr.program && !this.packFailed(rr.program) && rr.instancing === Qr && rr.groupId === Zr && this.definesHold(rr, Sr, Qr)
      }
      definesHold(rr, Sr, Qr) {
        return rr.modelVersion === rr.model.version && rr.geometry === Ea(Sr) && rr.instanceLayout === this.instanceLayout(Sr.owner, Qr) && rr.definesBits === this.definesBits(Sr.owner) && rr.packVariant === this.modelPackVariant
      }
      modelPackKind(rr) {
        var Sr;
        return 0 === this.modelPackVariant ? null : null !== (Sr = (0, vr.v)(rr, Tr.e.name)) && void 0 !== Sr && Sr.active ? "placed" : rr.item ? "item" : rr.lifeform ? "lifeform" : rr.box ? "box" : null
      }
      instanceLayout(rr, Sr) {
        var Qr, Zr, Wr;
        return "thin" === Sr ? null !== (Wr = this.resources.K9.get(rr)) && void 0 !== Wr ? Wr : null : "instanced" === Sr && null !== (Qr = null === (Zr = rr._userInstancedBuffersStorage) || void 0 === Zr ? void 0 : Zr.interleavedKinds) && void 0 !== Qr ? Qr : null
      }
      definesBits(rr) {
        const Sr = this.view;
        return (rr.visibility < 1 ? 1 : 0) | (rr.hasVertexAlpha ? 2 : 0) | (rr.applyFog ? 4 : 0) | (rr.useVertexColors ? 8 : 0) | (rr.nonUniformScaling ? 16 : 0) | (Sr.fogEnabled && 0 !== Sr.fogMode ? 32 : 0) | (Sr.lightsEnabled ? 64 : 0) | Sr.lightCount << 7
      }
      prepareLightDefines(rr, Sr, Qr) {
        let Zr = 0;
        if (this.view.lightsEnabled && !Sr) {
          const Sr = Math.min(Qr, 4);
          for (; Zr < this.view.lightCount && (rr[`LIGHT${Zr}`] = !0, rr[`LITE_LIGHT${Zr}_SLOT`] = Zr, Zr++, rr._needNormals = !0, Zr !== Sr););
        }
        for (let Wr = Zr; Wr < 4; Wr++) rr[`LIGHT${Wr}`] = !1, rr[`LITE_LIGHT${Wr}_SLOT`] = void 0
      }
      prepareModelDefines(rr, Sr, Qr, Zr, Wr, ar) {
        const {
          features: jr
        } = Qr;
        Zr._needNormals = !1, Zr._needUVs = !1;
        const Ir = this.view;
        this.prepareLightDefines(Zr, Qr.disableLighting, Qr.maxSimultaneousLights), Zr.MAINUV1 = !1, Zr.MAINUV2 = !1;
        const fr = Qr.diffuseTexture;
        fr ? (Zr._needUVs = !0, Zr.DIFFUSE = !0, fr.optimizeUVAllocation && (0, Lr.F)(fr.matrix) ? (Zr.DIFFUSEDIRECTUV = fr.uvSet + 1, Zr[`MAINUV${fr.uvSet+1}`] = !0) : Zr.DIFFUSEDIRECTUV = 0, fr.uvSet > 1 && this.warnOnce(`uvset:${Qr.name}`, `${Qr.name} samples UV set ${fr.uvSet+1}, which is not supported`)) : (Zr.DIFFUSE = !1, Zr.DIFFUSEDIRECTUV = 0);
        const Er = Qr.opacityTexture,
          pr = Qr.emissiveTexture;
        Zr.OPACITY = aa(Er, "OPACITY", Zr), Zr.OPACITYRGB = null !== Er && Er.getAlphaFromRGB, Zr.EMISSIVE = aa(pr, "EMISSIVE", Zr), (Er && Er.uvSet > 1 || pr && pr.uvSet > 1) && this.warnOnce(`uvset:${Qr.name}`, `${Qr.name} samples a UV set past 2, which is not supported`);
        const xr = Qr.reflectionTexture,
          mr = null !== xr;
        if (mr) {
          if (!this.resources.boundTexture(xr)) return !1;
          Zr._needNormals = !0
        }
        Zr.REFLECTION = mr, Zr.REFLECTIONMAP_3D = mr, Zr.REFLECTIONMAP_SKYBOX = mr, Zr.REFLECTIONMAP_OPPOSITEZ = mr && (rr.useRightHandedSystem ? !xr.invertZ : xr.invertZ), Zr.ROUGHNESS = mr && Qr.roughness > 0, Zr.REFLECTIONOVERALPHA = mr && Qr.useReflectionOverAlpha, Zr.LITE_REFLECTION_LUMINANCE = mr && "cube" === xr.source.kind && xr.source.luminance, (Sr.skeleton || Sr.morphTargetManager) && this.warnOnce(`skin:${Sr.name}`, `${Sr.name} has bones or morph targets, which are not supported`), Zr.FOG = Qr.fogEnabled && Sr.applyFog && Ir.fogEnabled && 0 !== Ir.fogMode, Zr.NONUNIFORMSCALING = Sr.nonUniformScaling;
        const {
          visibility: Nr,
          hasVertexAlpha: Ur
        } = Sr;
        Zr.ALPHATEST = (0, vr.S)(Qr, Nr, Ur), Zr.ALPHAFROMDIFFUSE = (0, vr.db)(Qr), Zr.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Qr.transparencyMode, Zr.ALPHABLEND = null === Qr.transparencyMode || (0, vr.O)(Qr, Nr, Ur), Zr.PREMULTIPLYALPHA = 7 === Qr.alphaMode || 8 === Qr.alphaMode, Zr.EMISSIVEASILLUMINATION = Qr.useEmissiveAsIllumination, Zr.LINKEMISSIVEWITHDIFFUSE = Qr.linkEmissiveWithDiffuse, Zr.TWOSIDEDLIGHTING = !Qr.backFaceCulling && Qr.twoSidedLighting, Zr.INSTANCES = "none" !== ar, Zr.THIN_INSTANCES = "thin" === ar, Zr.LITE_FRONT_LAYER = Wr >= 1;
        for (const {
            feature: Br,
            state: Tr,
            active: vr
          }
          of jr) {
          var tr, hr;
          if (vr) null === (tr = (hr = (0, qS.h)(Br)).prepareDefinesBeforeAttributes) || void 0 === tr || tr.call(hr, Tr, Zr, rr, Sr)
        }
        this.modelPackKind(Qr) && (Zr._needNormals = !0), Zr.NORMAL = Zr._needNormals && Sr.isVerticesDataPresent("normal"), Zr.UV1 = Zr._needUVs && Sr.isVerticesDataPresent("uv"), Zr.UV2 = Zr._needUVs && Sr.isVerticesDataPresent("uv2");
        const zr = Sr.useVertexColors && Sr.isVerticesDataPresent("color");
        Zr.VERTEXCOLOR = zr, Zr.VERTEXALPHA = Sr.hasVertexAlpha && zr, Zr.INSTANCESCOLOR = "none" !== ar && Sr.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Br,
            state: Tr,
            active: vr
          }
          of jr) {
          var Yr, nr;
          if (vr) null === (Yr = (nr = (0, qS.h)(Br)).prepareDefines) || void 0 === Yr || Yr.call(nr, Tr, Zr, rr, Sr, Qr)
        }
        const er = rr.MU();
        for (const {
            feature: Br,
            state: Tr,
            active: vr
          }
          of jr) {
          var Kr, yr;
          if (vr && !1 === (null === (Kr = (yr = (0, qS.h)(Br)).isReadyForSubMesh) || void 0 === Kr ? void 0 : Kr.call(yr, Tr, Zr, rr, er))) return !1
        }
        return !0
      }
    }

    function xa(rr, Sr, Qr) {
      return rr.codeVersion !== Sr.version && function(rr, Sr) {
        const Qr = [],
          Zr = [];
        for (const {
            feature: mr,
            state: Nr,
            active: Ur
          }
          of Sr.features) {
          var Wr, ar, jr, Ir;
          if (Ur) ma(null === (Wr = (ar = (0, qS.h)(mr)).getCustomCode) || void 0 === Wr ? void 0 : Wr.call(ar, Nr, "vertex", yr.d.WGSL), Qr), ma(null === (jr = (Ir = (0, qS.h)(mr)).getCustomCode) || void 0 === jr ? void 0 : jr.call(Ir, Nr, "fragment", yr.d.WGSL), Zr)
        }
        const fr = [];
        for (const {
            feature: mr,
            state: Nr
          }
          of Sr.features) {
          var Er, pr;
          const rr = null === (Er = (pr = (0, qS.h)(mr)).getUniforms) || void 0 === Er ? void 0 : Er.call(pr, Nr, yr.d.WGSL);
          for (const Sr of null !== (xr = null === rr || void 0 === rr ? void 0 : rr.ubo) && void 0 !== xr ? xr : []) {
            var xr;
            Sr.size && Sr.type && fr.push({
              name: Sr.name,
              type: Sr.type,
              arraySize: Sr.arraySize
            })
          }
        }
        rr.vertexCode = Qr, rr.fragmentCode = Zr, rr.pluginUniforms = fr, rr.codeKey = JSON.stringify([Qr, Zr, fr]), rr.codeVersion = Sr.version
      }(rr, Sr), `${Qr}#${rr.codeKey}`
    }

    function ma(rr, Sr) {
      if (rr)
        for (const Qr in rr) rr[Qr] && Sr.push([Qr, rr[Qr]])
    }
    const Na = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Ua {
      constructor(rr) {
        this.warnOnce = rr, this.states = new Map
      }
      renderState(rr, Sr, Qr, Zr) {
        var Wr;
        let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          jr = null !== (Wr = rr.sideOrientation) && void 0 !== Wr ? Wr : Sr.sideOrientation;
        Sr._getWorldMatrixDeterminant() < 0 && (jr = 0 === jr ? 1 : 0);
        const Ir = "triangle-list" === ar,
          fr = Qr ? rr.alphaMode : 0,
          Er = (!Qr || (0 === fr || rr.forceDepthWrite)) && !rr.disableDepthWrite,
          pr = Ir && rr.backFaceCulling ? rr.cullBackFaces ? "back" : "front" : "none",
          xr = Ir && 0 !== jr ? "ccw" : "cw",
          mr = rr.depthFunction,
          Nr = Ir ? rr.zOffset : 0,
          Ur = Ir ? rr.zOffsetUnits : 0,
          tr = !rr.disableColorWrite;
        return Zr && Zr.alphaMode === fr && Zr.depthWrite === Er && Zr.depthFunction === mr && Zr.cullMode === pr && Zr.frontFace === xr && Zr.zOffset === Nr && Zr.zOffsetUnits === Ur && Zr.colourWrite === tr && Zr.topology === ar ? Zr : this.stateFor(fr, Er, mr, pr, xr, Nr, Ur, tr, ar)
      }
      stateFor(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = `${rr}|${Sr}|${Qr}|${Zr}|${Wr}|${ar}|${jr}|${Ir}|${fr}`;
        let pr = this.states.get(Er);
        if (!pr) {
          var xr;
          const mr = rr ? aS(rr) : null;
          rr && !mr && this.warnOnce(`alpha:${rr}`, `alpha mode ${rr} is not supported`), pr = {
            key: Er,
            alphaMode: rr,
            depthFunction: Qr,
            zOffset: ar,
            zOffsetUnits: jr,
            topology: fr,
            blend: mr,
            depthWrite: Sr,
            depthCompare: Qr && null !== (xr = Na.get(Qr)) && void 0 !== xr ? xr : null,
            cullMode: Zr,
            frontFace: Wr,
            depthBias: -jr,
            depthBiasSlopeScale: -ar,
            colourWrite: Ir
          }, this.states.set(Er, pr)
        }
        return pr
      }
    }
    var ta = Qr(38842);

    function ha(rr) {
      if (!rr.frozen) return -1;
      let Sr = rr.version;
      for (const {
          feature: Qr,
          state: Zr,
          active: Wr
        }
        of rr.features) {
        if (!Wr || !Qr.bind) continue;
        const rr = (0, qS.h)(Qr).uniformsVersion;
        if (!rr) return -1;
        Sr += rr(Zr)
      }
      return Sr
    }
    class za {
      constructor(rr, Sr, Qr) {
        this.slots = rr, this.data = Sr, this.textures = Qr, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(rr, Sr) {
        this.write4(rr, Sr, 0, 0, 0, 1)
      }
      updateFloat2(rr, Sr, Qr) {
        this.write4(rr, Sr, Qr, 0, 0, 2)
      }
      updateFloat3(rr, Sr, Qr, Zr) {
        this.write4(rr, Sr, Qr, Zr, 0, 3)
      }
      updateFloat4(rr, Sr, Qr, Zr, Wr) {
        this.write4(rr, Sr, Qr, Zr, Wr, 4)
      }
      updateVector3(rr, Sr) {
        this.write4(rr, Sr.x, Sr.y, Sr.z, 0, 3)
      }
      updateVector4(rr, Sr) {
        this.write4(rr, Sr.x, Sr.y, Sr.z, Sr.w, 4)
      }
      updateColor3(rr, Sr) {
        this.write4(rr, Sr.r, Sr.g, Sr.b, 0, 3)
      }
      updateColor4(rr, Sr, Qr) {
        this.write4(rr, Sr.r, Sr.g, Sr.b, Qr, 4)
      }
      updateFloatsFrom(rr, Sr, Qr, Zr) {
        const Wr = this.slots.get(rr);
        if (!Wr) return;
        const ar = this.data,
          jr = Wr.offset;
        for (let Ir = 0; Ir < Zr; Ir++) ar[jr + Ir] = Sr[Qr + Ir]
      }
      updateFloat3TimesFloats(rr, Sr, Qr, Zr) {
        const Wr = this.slots.get(rr);
        if (!Wr) return;
        const ar = this.data,
          jr = Wr.offset;
        ar[jr] = Sr[Qr] * Zr[0], ar[jr + 1] = Sr[Qr + 1] * Zr[1], ar[jr + 2] = Sr[Qr + 2] * Zr[2]
      }
      hrr(rr, Sr) {
        const Qr = this.slots.get(rr);
        Qr && this.data.set(Sr.m, Qr.offset)
      }
      updateMatrixFloats(rr, Sr) {
        const Qr = this.slots.get(rr);
        Qr && this.data.set(Sr, Qr.offset)
      }
      updateFloatArray(rr, Sr) {
        const Qr = this.slots.get(rr);
        if (!Qr) return;
        if (!Qr.arraySize || Qr.stride === Qr.floats) return void this.data.set(Sr, Qr.offset);
        const Zr = Math.min(Sr.length, Qr.floats * Qr.arraySize);
        for (let Wr = 0; Wr < Zr; Wr++) this.data[Qr.offset + Math.floor(Wr / Qr.floats) * Qr.stride + Wr % Qr.floats] = Sr[Wr]
      }
      updateArray(rr, Sr) {
        this.updateFloatArray(rr, Sr)
      }
      setTexture(rr, Sr) {
        this.textures.set(rr, Sr), this.expected.delete(rr)
      }
      expectTexture(rr) {
        this.textures.set(rr, null), this.expected.add(rr)
      }
      write4(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this.slots.get(rr);
        if (!jr) return;
        const Ir = this.data,
          fr = jr.offset;
        Ir[fr] = Sr, ar > 1 && (Ir[fr + 1] = Qr), ar > 2 && (Ir[fr + 2] = Zr), ar > 3 && (Ir[fr + 3] = Wr)
      }
    }

    function Ya(rr, Sr) {
      const Qr = fW,
        Zr = ta.g,
        Wr = rr.lights,
        ar = Math.min(rr.lightCount, 8);
      for (let jr = 0; jr < ar; jr++) {
        const rr = Qr.lights + jr * Qr.lightStride,
          ar = jr * ta.c;
        Sr[rr] = Wr[ar + Zr.vector], Sr[rr + 1] = Wr[ar + Zr.vector + 1], Sr[rr + 2] = Wr[ar + Zr.vector + 2], Sr[rr + 3] = Wr[ar + Zr.kind] === ta.f.directional ? 1 : 0, Sr[rr + 4] = Wr[ar + Zr.diffuse], Sr[rr + 5] = Wr[ar + Zr.diffuse + 1], Sr[rr + 6] = Wr[ar + Zr.diffuse + 2], Sr[rr + 7] = Wr[ar + Zr.range], Sr[rr + 8] = Wr[ar + Zr.specular], Sr[rr + 9] = Wr[ar + Zr.specular + 1], Sr[rr + 10] = Wr[ar + Zr.specular + 2], Sr[rr + 11] = Wr[ar + Zr.range]
      }
      Sr[Qr.fogInfos] = rr.fogMode, Sr[Qr.fogInfos + 1] = rr.fogStart, Sr[Qr.fogInfos + 2] = rr.fogEnd, Sr[Qr.fogInfos + 3] = rr.fogDensity, Sr[Qr.fogColour] = rr.fogColour[0], Sr[Qr.fogColour + 1] = rr.fogColour[1], Sr[Qr.fogColour + 2] = rr.fogColour[2], Sr[Qr.outputHeight] = rr.renderHeight, Sr[Qr.animTick] = rr.animTick, Sr[Qr.timeMs] = rr.timeMs
    }
    class na {
      constructor(rr) {
        this.instancesOf = rr
      }
      refreshModelUniforms(rr, Sr, Qr, Zr) {
        const Wr = ha(Qr);
        if (Wr >= 0 && Wr === Sr.heldVersion && Sr.textures.get("diffuseSampler") === Qr.diffuseTexture && Sr.textures.get("reflectionCubeSampler") === Qr.reflectionTexture && Sr.textures.get("opacitySampler") === Qr.opacityTexture && Sr.textures.get("emissiveSampler") === Qr.emissiveTexture) return !0;
        if (Wr < 0)
          for (const ar of this.instancesOf(Qr)) ar.heldVersion = -1;
        return this.writeModelUniforms(rr, Sr, Qr, Zr), Sr.heldVersion = Wr, !1
      }
      writeModelUniforms(rr, Sr, Qr, Zr) {
        const {
          ubo: Wr
        } = Sr, ar = Qr.diffuseTexture, jr = Qr.diffuseColor;
        Wr.updateFloat4("vDiffuseColor", jr[0], jr[1], jr[2], Qr.alpha), ar && (Wr.updateFloat2("vDiffuseInfos", ar.uvSet, ar.level), Wr.updateMatrixFloats("diffuseMatrix", ar.matrix)), Wr.updateFloat("alphaCutOff", Qr.alphaCutOff), Wr.updateFloatsFrom("vEmissiveColor", Qr.emissiveColor, 0, 3), Wr.updateFloat3TimesFloats("vAmbientColor", Zr.ambientColour, 0, Qr.ambientColor);
        const Ir = Qr.specularColor;
        Wr.updateFloat4("vSpecularColor", Ir[0], Ir[1], Ir[2], Qr.specularPower), Wr.setTexture("diffuseSampler", ar);
        const fr = Qr.opacityTexture;
        fr && (Wr.updateFloat2("vOpacityInfos", fr.uvSet, fr.level), Wr.updateMatrixFloats("opacityMatrix", fr.matrix)), Wr.setTexture("opacitySampler", fr);
        const Er = Qr.emissiveTexture;
        Er && (Wr.updateFloat2("vEmissiveInfos", Er.uvSet, Er.level), Wr.updateMatrixFloats("emissiveMatrix", Er.matrix)), Wr.setTexture("emissiveSampler", Er);
        const pr = Qr.reflectionTexture;
        pr && Wr.updateMatrixFloats("reflectionMatrix", pr.matrix), Wr.updateFloat2("vReflectionInfos", pr ? pr.level * rr.iblIntensity : 0, Qr.roughness), Wr.setTexture("reflectionCubeSampler", pr);
        const xr = rr.MU();
        for (const {
            feature: Ur,
            state: tr,
            active: hr
          }
          of Qr.features) {
          var mr, Nr;
          if (hr) null === (mr = (Nr = (0, qS.h)(Ur)).bind) || void 0 === mr || mr.call(Nr, tr, Wr, rr, xr)
        }
      }
    }

    function ea(rr) {
      const Sr = rr.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Sr) ? "u32" : /i32|^vec\di$/.test(Sr) ? "i32" : "f32"
    }

    function Ka(rr, Sr) {
      const Qr = rr.getSize(),
        Zr = ea(Sr),
        Wr = rr => 4 === Qr ? `${rr}x4` : 2 === Qr ? `${rr}x2` : null;
      if ("f32" === Zr) {
        if (5126 === rr.type) return 1 === Qr ? "float32" : Qr >= 2 && Qr <= 4 ? `float32x${Qr}` : null;
        if (!rr.normalized) return null;
        switch (rr.type) {
          case 5121:
            return Wr("unorm8");
          case 5120:
            return Wr("snorm8");
          case 5123:
            return Wr("unorm16");
          case 5122:
            return Wr("snorm16")
        }
        return null
      }
      const ar = "u32" === Zr ? "uint" : "sint";
      switch (rr.type) {
        case 5125:
        case 5124:
          return 1 === Qr ? `${ar}32` : Qr <= 4 ? `${ar}32x${Qr}` : null;
        case 5121:
        case 5120:
          return Wr(`${ar}8`);
        case 5123:
        case 5122:
          return Wr(`${ar}16`)
      }
      return null
    }

    function ya(rr) {
      var Sr;
      const Qr = /(8|16|32)(?:x(\d))?$/.exec(rr);
      return Qr ? Number(Qr[1]) / 8 * Number(null !== (Sr = Qr[2]) && void 0 !== Sr ? Sr : 1) : 4
    }
    class Ba {
      constructor(rr, Sr, Qr) {
        this.resources = rr, this.limits = Sr, this.warnOnce = Qr, this.layouts = new Map
      }
      resolveInputs(rr, Sr, Qr, Zr) {
        const Wr = [],
          ar = Qr.program.attributes,
          jr = [];
        for (let pr = 0; pr < ar.length; pr++) {
          const Qr = ar[pr],
            Ir = Qr.optional ? null : this.resources.vertexInput(rr, Qr.name, Zr);
          if (!Ir) {
            const rr = ea(Qr.type),
              Sr = "u32" === rr ? "uint32x4" : "i32" === rr ? "sint32x4" : "float32x4";
            jr.push(null);
            const Zr = Wr.find((rr => null === rr.data));
            Zr ? Zr.attributes.push({
              shaderLocation: pr,
              offset: 0,
              format: Sr
            }) : Wr.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: pr,
                offset: 0,
                format: Sr
              }]
            });
            continue
          }
          const fr = Ir.getBuffer();
          jr.push(Ir);
          const Er = Ka(Ir, Qr.type);
          if (!Er) return this.warnOnce(`format:${Sr}:${Qr.name}`, `${Sr}'s ${Qr.name} (type ${Ir.type}, size ${Ir.getSize()}) has no WebGPU vertex format`), null;
          const xr = Ir.getIsInstanced() ? "instance" : "vertex",
            mr = Ir.byteStride,
            Nr = ya(Er),
            Ur = Wr.find((rr => rr.data === fr && rr.stride === mr && rr.step === xr && Ir.byteOffset >= rr.base && Ir.byteOffset - rr.base + Nr <= mr));
          Ur ? Ur.attributes.push({
            shaderLocation: pr,
            offset: Ir.byteOffset - Ur.base,
            format: Er
          }) : Wr.push({
            data: fr,
            base: Ir.byteOffset,
            stride: mr,
            step: xr,
            attributes: [{
              shaderLocation: pr,
              offset: 0,
              format: Er
            }]
          })
        }
        if (Wr.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Sr}`, `${Sr} needs ${Wr.length} vertex buffers`), null;
        let Ir = "";
        for (const pr of Wr) {
          Ir += `${pr.stride}${"instance"===pr.step?"i":"v"}`;
          for (const rr of pr.attributes) Ir += `,${rr.shaderLocation}:${rr.offset}:${rr.format}`;
          Ir += ";"
        }
        let fr = this.layouts.get(Ir);
        fr || (fr = {
          key: Ir,
          buffers: Wr.map((rr => ({
            arrayStride: rr.stride,
            stepMode: rr.step,
            attributes: rr.attributes
          }))),
          instanceEnds: Wr.map((rr => {
            let Sr = -1;
            if ("instance" === rr.step)
              for (const Qr of rr.attributes) Sr = Math.max(Sr, Qr.offset + ya(Qr.format));
            return Sr
          }))
        }, this.layouts.set(Ir, fr));
        const Er = Wr.map((rr => rr.base));
        return {
          program: Qr,
          sources: jr,
          layout: fr,
          slotData: Wr.map((rr => rr.data)),
          arr: Er,
          buffers: [],
          offsets: Er,
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

    function Ta(rr, Sr, Qr, Zr) {
      const Wr = Sr.program.program.attributes;
      for (let ar = 0; ar < Wr.length; ar++) {
        if ((Wr[ar].optional ? null : Qr.vertexInput(rr, Wr[ar].name, Zr)) !== Sr.sources[ar]) return !1
      }
      return !0
    }
    const va = 64;
    class Oa {
      constructor(rr, Sr, Qr, Zr) {
        this.device = rr, this.layout = Sr, this.frameBuffer = Qr, this.label = Zr, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(rr) {
        if (rr * va <= this.data.length) return !1;
        let Sr = 2 * this.data.length;
        for (; rr * va > Sr;) Sr *= 2;
        const Qr = new Float32Array(Sr);
        return Qr.set(this.data), this.data = Qr, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wr = this.data,
          ar = rr * va;
        let jr = Wr[ar + 16] !== Qr;
        for (let Ir = 0; Ir < 16 && !jr; Ir++) jr = Wr[ar + Ir] !== Sr[Zr + Ir];
        if (jr) {
          for (let rr = 0; rr < 16; rr++) Wr[ar + rr] = Sr[Zr + rr];
          Wr[ar + 16] = Qr
        }
        return jr
      }
      upload(rr, Sr) {
        this.device.queue.writeBuffer(this.buffer, rr * EW, this.data, rr * va, (Sr - rr) * va)
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

    function La(rr) {
      return rr.gpu[Lr.e.lite] ??= rr.materials.map(((Sr, Qr) => ({
        parts: rr,
        range: Qr,
        owner: rr.owner
      })))
    }

    function la(rr) {
      var Sr, Qr, Zr;
      return null !== (Sr = null !== (Qr = null === (Zr = rr.parts.materials[rr.range]) || void 0 === Zr ? void 0 : Zr.mirror) && void 0 !== Qr ? Qr : rr.owner.material) && void 0 !== Sr ? Sr : null
    }
    const Xa = ["opaque", "alphaTest", "transparent", "text"];

    function Pa(rr) {
      for (const Sr of Xa) rr[Sr].units.length = 0, rr[Sr].rows.length = 0
    }
    class Ha {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, HS.c)("Lite: ")
      }
      attach(rr, Sr) {
        this.model = rr, this.mirror = Sr
      }
      get worlds() {
        return this.model.nodes.qx
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(rr) {
        return this.groups.get(rr)
      }
      forEachGroup(rr) {
        this.groups.forEach(rr)
      }
      forEachSelected(rr) {
        for (const [Sr, Qr] of this.groups)
          for (const Zr of Xa)
            for (const Wr of Qr[Zr].units) rr(Wr.owner, "text" === Zr ? "transparent" : Zr, Sr)
      }
      select(rr, Sr) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(Pa);
        const {
          model: Qr,
          mirror: Zr
        } = this;
        if (!Qr || !Zr || !rr) return;
        this.rows.length < Qr.nodes.sx && (this.rows = new Int32Array(Qr.nodes.sx));
        const Wr = this.rows,
          ar = Qr.meshes;
        for (let Ir = 0; Ir < ar.looseCount; Ir++) {
          const rr = ar.loose[Ir],
            Qr = Zr.nodes[rr];
          Qr && !Qr.isBlocked && Qr.isEnabled() && !Qr.Tx.hasAZeroComponent && ar.selects(rr, Sr.frustum) && (this.activate(Qr, rr), this.selectedCount++)
        }
        const jr = ar.selectTextPlanes(Sr.frustum, Wr);
        for (let Ir = 0; Ir < jr; Ir++) {
          const Sr = Wr[Ir],
            ar = Zr.nodes[Sr],
            jr = Qr.meshes.parts[Sr];
          if (!ar.isVisible || !(ar.visibility > 0) || 0 === (ar.layerMask & rr.layerMask) || !jr) continue;
          const fr = this.groupOf(Qr.meshes.layer[Sr]).text;
          for (const rr of La(jr)) fr.units.push(rr), fr.rows.push(Sr);
          this.selectedCount++
        }
      }
      instanceBatch(rr) {
        const Sr = this.batchOf(rr);
        return Sr.dispatched || (Sr.dispatched = Sr.renderSelf = !0, Sr.row = this.rowOf(rr)), Sr
      }
      rowOf(rr) {
        return rr.row
      }
      activate(rr, Sr) {
        if (!rr.gC) {
          const Qr = rr;
          if (Qr.Har) {
            const rr = this.batchOf(Qr);
            rr.dispatched = !0, rr.renderSelf = !0, rr.row = Sr
          }
          return void this.dispatch(Qr, Sr, Sr)
        }
        const Qr = rr,
          Zr = Qr.Rar;
        if (Zr._getWorldMatrixDeterminant() >= 0 !== Qr._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Zr.name}`, `A mirrored InstancedMesh of ${Zr.name} is not drawn yet`);
        const Wr = this.batchOf(Zr);
        Wr.instances.push(Qr), Wr.rows.push(Sr), Wr.dispatched || (Wr.dispatched = !0, this.dispatch(Zr, Sr, this.rowOf(Zr)))
      }
      batchOf(rr) {
        let Sr = this.batches.get(rr);
        return Sr || (Sr = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(rr, Sr)), Sr.frame !== this.frame && (Sr.frame = this.frame, Sr.dispatched = !1, Sr.renderSelf = !1, Sr.instances.length = 0, Sr.rows.length = 0), Sr
      }
      dispatch(rr, Sr, Qr) {
        const {
          layer: Zr,
          parts: Wr
        } = this.model.meshes;
        if (!Wr[Sr]) return;
        const ar = this.groupOf(Zr[Sr]),
          jr = rr;
        for (const Ir of La(Wr[Sr])) {
          const rr = la(Ir);
          if (!rr) continue;
          const Sr = rr.needAlphaBlendingForMesh(jr) ? ar.transparent : rr.needAlphaTestingForMesh(jr) ? ar.alphaTest : ar.opaque;
          Sr.units.push(Ir), Sr.rows.push(Qr)
        }
      }
      groupOf(rr) {
        let Sr = this.groups.get(rr);
        return Sr || (Sr = {
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
        }, this.groups.set(rr, Sr)), Sr
      }
    }

    function qa(rr) {
      rr.opaque.length = 0, rr.transparent.length = 0
    }
    class Ra {
      constructor() {
        this.wI = new Map, this.enabled = [], this.groups = new Map, this.sp = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(rr) {
        if (this.wI.has(rr)) return;
        const Sr = {
          mesh: rr,
          observer: rr.onEffectiveEnabledStateChangedObservable.add((rr => {
            this.VK(Sr, rr)
          })),
          index: -1,
          steady: null
        };
        this.wI.set(rr, Sr), this.VK(Sr, rr.isEnabled())
      }
      remove(rr) {
        const Sr = this.wI.get(rr);
        Sr && (Sr.observer.remove(!0), this.VK(Sr, !1), this.wI.delete(rr))
      }
      dropSteady() {
        for (const rr of this.wI.values()) rr.steady = null
      }
      base(rr) {
        return this.wI.get(rr)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          wI: this.wI.size
        }
      }
      forEachSelected(rr) {
        for (const [Sr, Qr] of this.groups) {
          for (const Zr of Qr.opaque) rr(Zr.owner, "opaque", Sr);
          for (const Zr of Qr.transparent) rr(Zr.owner, "transparent", Sr)
        }
        for (const Sr of this.sp) rr(Sr.mesh, "opaque", 0)
      }
      group(rr) {
        return this.groups.get(rr)
      }
      forEachGroup(rr) {
        this.groups.forEach(rr)
      }
      select(rr, Sr) {
        if (this.drawn = 0, this.selected = 0, this.sp.length = 0, this.groups.forEach(qa), !rr) return;
        const Qr = this.enabled;
        for (let Zr = 0; Zr < Qr.length; Zr++) {
          const Wr = Qr[Zr];
          if (Wr.steady && Sr(Wr, rr)) {
            this.selected++, this.sp.push(Wr);
            continue
          }
          const ar = Wr.mesh;
          if (ar.isBlocked || ar.Tx.hasAZeroComponent) continue;
          if (!ar.isVisible || ar.visibility <= 0 || 0 === (ar.layerMask & rr.layerMask)) continue;
          if (ar.Har) {
            this.warned.has(ar.name) || (this.warned.add(ar.name), console.warn(`Lite: thin instance base ${ar.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: jr
          } = ar;
          if (!jr) continue;
          ar.computeWorldMatrix(), this.selected++;
          const Ir = this.listsFor(ar.renderingGroupId);
          for (const rr of La(jr)) {
            const Sr = la(rr);
            Sr && (Sr.needAlphaBlendingForMesh(ar) ? Ir.transparent.push(rr) : Ir.opaque.push(rr))
          }
        }
      }
      VK(rr, Sr) {
        if (Sr === rr.index >= 0) return;
        rr.steady = null;
        const Qr = this.enabled;
        if (Sr) rr.index = Qr.length, Qr.push(rr);
        else {
          const Sr = Qr.pop();
          Sr !== rr && (Qr[rr.index] = Sr, Sr.index = rr.index), rr.index = -1
        }
      }
      listsFor(rr) {
        let Sr = this.groups.get(rr);
        return Sr || (Sr = {
          opaque: [],
          transparent: []
        }, this.groups.set(rr, Sr)), Sr
      }
    }
    var ga = Qr(41275);
    class Ca {
      constructor() {
        this.bundle = null, this.stale = !0, this.wI = new Set
      }
    }
    class Ma {
      constructor(rr, Sr, Qr) {
        this.device = rr, this.slots = Sr, this.host = Qr, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Ca, this.jR = new Ca, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new sW, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = rr => {
          rr.seen !== this.frame && (rr.draw && (rr.draw = null, this.args[5 * rr.slot + 1] = 0, this.argsDirty = !0, this.jR.stale ||= rr.jR), this.frame - rr.seen > 120 && (this.records.delete(rr.unit), this.freeSlots.push(rr.slot), rr.recorded && (this.bundleOf(rr).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(rr) {
          var Sr, Qr;
          let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Sr = null === (Qr = globalThis.navigator) || void 0 === Qr ? void 0 : Qr.userAgent) && void 0 !== Sr ? Sr : "";
          const Wr = rr.adapterInfo;
          return "intel" === (null === Wr || void 0 === Wr ? void 0 : Wr.vendor) && "gen-12lp" === Wr.architecture && Zr.includes("Windows")
        }(rr), (0, ga.B)(this.direct)
      }
      lB() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ga.B)(this.directThisFrame)
      }
      add(rr, Sr, Qr, Zr) {
        let Wr = this.records.get(rr);
        return Wr || (Wr = this.createRecord(rr), this.records.set(rr, Wr)), Wr.recorded && ka(Wr, Sr) || (this.bundleOf(Wr).stale = !0), this.place(Wr, Sr, Qr, Zr), Wr
      }
      bundleOf(rr) {
        return rr.jR ? this.jR : this.main
      }
      addAgain(rr, Sr, Qr, Zr) {
        rr.recorded || (this.bundleOf(rr).stale = !0), this.place(rr, Sr, Qr, Zr)
      }
      place(rr, Sr, Qr, Zr) {
        rr.seen = this.frame, rr.jR && null === rr.draw && (this.jR.stale = !0), rr.draw = Sr, this.drawn++, Qr && this.slots.write(rr.slot, Qr, Zr) && (this.slotsFrom = Math.min(this.slotsFrom, rr.slot), this.slotsTo = Math.max(this.slotsTo, rr.slot));
        const Wr = this.args,
          ar = 5 * rr.slot;
        Wr[ar] === Sr.count && Wr[ar + 1] === Sr.instances && Wr[ar + 2] === Sr.first || (Wr[ar] = Sr.count, Wr[ar + 1] = Sr.instances, Wr[ar + 2] = Sr.first, this.argsDirty = !0, this.jR.stale ||= rr.jR)
      }
      Bx() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(rr) {
        for (const Sr of this.records.values()) Sr.draw && Sr.seen === this.frame && !Sr.jR && rr(Sr.draw, this.slots.data, Sr.slot * EW / 4)
      }
      resourceDestroyed(rr) {
        this.main.stale ||= this.main.wI.has(rr), this.jR.stale ||= this.jR.wI.has(rr)
      }
      execute(rr, Sr, Qr) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(rr, Sr, Qr, "direct"), this.drawn;
        const Zr = this.host.sceneGroup(Sr);
        if (!Zr) return this.main.bundle = null, this.jR.bundle = null, this.recordedSceneGroup = null, this.encode(rr, Sr, Qr, "direct"), this.drawn;
        this.recordedTarget === Qr && this.recordedSceneGroup === Zr || (this.recordedTarget = Qr, this.recordedSceneGroup = Zr, this.main.stale = !0, this.jR.stale = !0);
        const Wr = this.main,
          ar = this.jR;
        let jr = !1;
        !Wr.stale && Wr.bundle || (Wr.bundle = this.record(Sr, Qr, Zr, "indirect"), jr = !0);
        const Ir = (0, ga.i)();
        return (ar.stale || this.rangedEpoch !== Ir) && (this.rangedEpoch = Ir, ar.bundle = this.drawsRanged() ? this.record(Sr, Qr, Zr, "jR") : this.noRangedBundle(), jr = !0), jr && (this.bundles = ar.bundle ? [Wr.bundle, ar.bundle] : [Wr.bundle]), rr.executeBundles(this.bundles), rr.setBindGroup(0, Zr), this.drawn
      }
      record(rr, Sr, Qr, Zr) {
        const Wr = this.device.createRenderBundleEncoder({
          label: "jR" === Zr ? "thin-bases-ranged" : "thin-bases",
          colorFormats: rr._colorFormat ? [rr._colorFormat] : [],
          depthStencilFormat: rr._depthStencilFormat,
          sampleCount: rr._sampleCount
        });
        return Wr.setBindGroup(0, Qr), this.encode(Wr, rr, Sr, Zr), Wr.finish()
      }
      noRangedBundle() {
        for (const rr of this.records.values()) rr.jR && (rr.recorded = !1);
        return this.jR.wI.clear(), this.jR.stale = !1, null
      }
      drawsRanged() {
        for (const rr of this.records.values())
          if (rr.jR && rr.draw) return !0;
        return !1
      }
      encode(rr, Sr, Qr, Zr) {
        const Wr = [];
        for (const fr of this.records.values()) "direct" !== Zr && fr.jR !== ("jR" === Zr) || (fr.recorded = !1, fr.draw && Wr.push(fr));
        Wr.sort(Aa);
        const ar = "direct" === Zr ? null : "jR" === Zr ? this.jR : this.main;
        null === ar || void 0 === ar || ar.wI.clear(), this.binder.reset();
        let jr = !1;
        for (const fr of Wr) {
          var Ir;
          const Wr = fr.draw,
            Er = this.host.pipelineFor(Wr, Sr, Qr);
          if (!Er) {
            this.host.pipelineCompiling(Wr, Qr) ? jr = !0 : ar && this.keep(fr, Wr, ar.wI);
            continue
          }
          let pr;
          if (fr.jR && "indirect" !== Zr) {
            const rr = fr.unit.owner;
            pr = "direct" === Zr && (0, ga.q)(rr) || (0, ga.k)(rr) || void 0
          }
          if (ar && this.keep(fr, Wr, ar.wI), 0 === (null === (Ir = pr) || void 0 === Ir ? void 0 : Ir.count)) continue;
          this.binder.bind(rr, Wr, Er, this.slots.bindGroup, fr.slot * EW);
          const xr = 5 * fr.slot;
          if ("indirect" === Zr) {
            Wr.indexBuffer ? rr.drawIndexedIndirect(this.argsBuffer, 4 * xr) : rr.drawIndirect(this.argsBuffer, 4 * xr);
            continue
          }
          const mr = this.args;
          pr ? Ga(rr, null !== Wr.indexBuffer, mr, xr, pr) : Wr.indexBuffer ? rr.drawIndexed(mr[xr], mr[xr + 1], mr[xr + 2], 0, 0) : rr.draw(mr[xr], mr[xr + 1], mr[xr + 2], 0)
        }
        ar && (ar.stale = jr)
      }
      keep(rr, Sr, Qr) {
        rr.recorded = !0, rr.pipelineKey = Sr.pipelineKey, rr.materialGroup = Sr.material.bindGroup, rr.vertexBuffers.length = 0, rr.vertexBuffers.push(...Sr.vertexBuffers), rr.vertexOffsets = Sr.vertexOffsets, rr.indexBuffer = Sr.indexBuffer, rr.indexFormat = Sr.indexFormat;
        for (const Zr of Sr.vertexBuffers) Qr.add(Zr);
        Sr.indexBuffer && Qr.add(Sr.indexBuffer), Qr.add(Sr.material.buffer);
        for (const Zr of Sr.material.bound) Zr && Qr.add(Zr)
      }
      createRecord(rr) {
        let Sr = this.freeSlots.pop();
        return void 0 === Sr && (Sr = this.slotCount++, this.grow()), {
          unit: rr,
          slot: Sr,
          jR: void 0 !== (0, ga.k)(rr.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.jR.stale = !0), 5 * this.slotCount > this.args.length) {
          const rr = new Uint32Array(2 * this.args.length);
          rr.set(this.args), this.args = rr, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Ga(rr, Sr, Qr, Zr, Wr) {
      const ar = Qr[Zr + 1],
        jr = Wr.data;
      for (let Ir = 0; Ir < Wr.count; Ir++) {
        const Wr = Math.min(jr[2 * Ir], ar),
          fr = Math.min(jr[2 * Ir + 1], ar - Wr);
        0 !== fr && (Sr ? rr.drawIndexed(Qr[Zr], fr, Qr[Zr + 2], 0, Wr) : rr.draw(Qr[Zr], fr, Qr[Zr + 2], Wr))
      }
    }

    function ka(rr, Sr) {
      if (rr.pipelineKey !== Sr.pipelineKey || rr.materialGroup !== Sr.material.bindGroup || rr.indexBuffer !== Sr.indexBuffer || rr.indexFormat !== Sr.indexFormat || rr.vertexOffsets !== Sr.vertexOffsets || rr.vertexBuffers.length !== Sr.vertexBuffers.length) return !1;
      for (let Qr = 0; Qr < rr.vertexBuffers.length; Qr++)
        if (rr.vertexBuffers[Qr] !== Sr.vertexBuffers[Qr]) return !1;
      return !0
    }

    function Aa(rr, Sr) {
      return ra(rr.draw, Sr.draw)
    }
    const Va = new WeakMap,
      ia = {
        depth: !1,
        sunShadow: !1
      };

    function wa(rr, Sr) {
      let Qr = Va.get(rr);
      Qr || (Qr = new Map, Va.set(rr, Qr));
      const Zr = `${Sr.depth?"-depth":""}${Sr.sunShadow?"-shadow":""}${Sr.shadowMask?"-mask":""}`;
      let Wr = Qr.get(Zr);
      if (!Wr) {
        const ar = [{
          binding: DS.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: DS.h
          }
        }, {
          binding: DS.q,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Sr.depth && ar.push({
          binding: DS.m,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Sr.sunShadow && ar.push(... function() {
          const rr = GPUShaderStage.FRAGMENT,
            Sr = DS.n;
          return [{
            binding: Sr.uniform,
            visibility: rr,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Sr.ZN,
            visibility: rr,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Sr.special,
            visibility: rr,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Sr.volume,
            visibility: rr,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Sr.sampler,
            visibility: rr,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Sr.entities,
            visibility: rr,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Sr.entityGrids,
            visibility: rr,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Sr.shadowMask && ar.push({
          binding: DS.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Wr = rr.createBindGroupLayout({
          label: `${Sr.depth?"terrain-":""}shader-pack-inputs${Zr}`,
          entries: ar
        }), Qr.set(Zr, Wr)
      }
      return Wr
    }

    function ca(rr) {
      return wa(rr, ia)
    }

    function Fa(rr, Sr) {
      if (!Sr) return !1;
      const Qr = (0, dS.f)(rr);
      return !!Qr && aZ(Qr, Sr)
    }

    function oa(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!HZ(Sr)) return [];
      return [wa(rr, {
        depth: OZ(Sr.packVariant),
        sunShadow: Fa(Sr.packVariant, Qr),
        shadowMask: Zr
      })]
    }
    class ba {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = rr, this.sunShadow = Qr, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(DS.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = rr.createBuffer({
          label: "shader-pack-inputs",
          size: DS.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Zr = (0, DS.u)(Sr);
        this.textures = rr.createBuffer({
          label: "shader-pack-textures",
          size: Zr.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), rr.queue.writeBuffer(this.textures, 0, Zr), this.bindGroup = rr.createBindGroup({
          label: "shader-pack-inputs",
          layout: ca(rr),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: DS.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: DS.q,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(rr, Sr, Qr) {
        (0, DS.B)(this.data, {
          seconds: rr.seconds(),
          lit: Qr,
          renderOffset: rr.renderOffset(),
          crr: rr.crr(),
          eyePosition: Sr,
          shadowDirection: rr.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Zr = Sr ? this.sunShadow : null;
        if ((Sr || Qr) && !Zr) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!rr && !Zr) return this.bindGroup;
        (rr && rr !== this.depthView || Qr && Qr !== this.maskView) && (this.depthView = null !== rr && void 0 !== rr ? rr : this.depthView, this.maskView = null !== Qr && void 0 !== Qr ? Qr : this.maskView, this.groups.clear());
        const Wr = (rr ? 1 : 0) | (Zr ? 2 : 0) | (Qr ? 4 : 0);
        let ar = this.groups.get(Wr);
        if (!ar) {
          const Sr = this.entries();
          rr && Sr.push({
            binding: DS.m,
            resource: rr
          }), Zr && Sr.push(...Zr.entries()), Qr && Sr.push({
            binding: DS.p,
            resource: Qr
          }), ar = this.device.createBindGroup({
            label: `${rr||Qr?"terrain-":""}shader-pack-inputs${rr?"-depth":""}${Zr?"-shadow":""}${Qr?"-mask":""}`,
            layout: wa(this.device, {
              depth: !!rr,
              sunShadow: !!Zr,
              shadowMask: !!Qr
            }),
            entries: Sr
          }), this.groups.set(Wr, ar)
        }
        return ar
      }
      bind(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        rr.setBindGroup(DS.d, this.bindGroupFor(Sr, Qr, Zr))
      }
    }

    function Ja(rr, Sr, Qr) {
      if (rr.gpuVersion === Sr.gpuBuffersVersion) return !0;
      let Zr;
      do {
        if (Zr = Sr.gpuBuffersVersion, !Da(rr, Sr, Qr)) return !1
      } while (Sr.gpuBuffersVersion !== Zr);
      return rr.gpuVersion = Zr, rr.fitInstances = 0, !0
    }

    function Da(rr, Sr, Qr) {
      let Zr = null;
      for (let ar = 0; ar < rr.slotData.length; ar++) {
        var Wr;
        const jr = rr.slotData[ar],
          Ir = jr ? Sr.gpuBuffer(jr) : Qr;
        if (!Ir) return !1;
        jr && rr.layout.instanceEnds[ar] < 0 && Sr.cover(jr, Number.POSITIVE_INFINITY), rr.buffers[ar] = Ir;
        const fr = rr.arr[ar] + (jr ? Sr.gpuOffset(jr) : 0);
        fr !== (null !== (Wr = Zr) && void 0 !== Wr ? Wr : rr.offsets)[ar] && (Zr ??= rr.offsets.slice(), Zr[ar] = fr), rr.ends[ar] = jr ? Sr.gpuEnd(jr) : Ir.size
      }
      return Zr && (rr.offsets = Zr), !0
    }

    function da(rr, Sr, Qr, Zr) {
      if (Sr <= rr.fitInstances) return null;
      const {
        layout: Wr,
        ends: ar,
        offsets: jr,
        slotData: Ir,
        arr: fr
      } = rr;
      let Er = !1;
      for (let pr = 0; pr < Wr.buffers.length; pr++) {
        const rr = Wr.instanceEnds[pr];
        if (rr < 0) continue;
        const Zr = (Sr - 1) * Wr.buffers[pr].arrayStride + rr;
        if (ar[pr] - jr[pr] < Zr) return {
          index: pr,
          needed: Zr
        };
        const xr = Ir[pr];
        xr && Qr.cover(xr, fr[pr] + Zr) && (Er = !0)
      }
      return Er && Ja(rr, Qr, Zr), rr.fitInstances = Sr, null
    }
    var sa = Qr(39324),
      ua = Qr(39348);
    const rj = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      Sj = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Qj = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Zj = `((vertexInputs.aPackedLightLevels >> 16u) | ${PS.e.placed}u)`,
      Wj = "u32(vertexInputs.aShaderPackItem.x)",
      aj = `${PS.e.lifeform}u`;

    function jj(rr) {
      return "item" === rr.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Ij = "bloxdSpEnchant",
      fj = "floor(finalWorld[3].xyz)";

    function Ej(rr, Sr, Qr) {
      return "placed" === Sr.kind && rr.reads[Qr].includes("bloxdFragmentBlockPosition")
    }

    function pj(rr, Sr) {
      let [Qr, Zr] = rr;
      return Qr === Sr.point && Zr === Sr.code
    }

    function xj(rr, Sr) {
      var Qr;
      return null === (Qr = rr.find((rr => rr[Sr]))) || void 0 === Qr ? void 0 : Qr[Sr]
    }

    function mj(rr, Sr) {
      const Qr = xj(rr, "texture"),
        Zr = xj(rr, "enchantTier"),
        Wr = xj(rr, "glow"),
        ar = xj(rr, "overlay"),
        jr = ar ? Sr.filter((rr => pj(rr, ar))).length : 0;
      return ar && 1 === jr ? {
        texture: Qr,
        overlay: ar,
        enchantTier: Zr,
        glow: Wr
      } : {
        texture: Qr,
        enchantTier: Zr,
        glow: Wr
      }
    }

    function Nj(rr) {
      if ("item" === rr.kind) {
        return {
          vertexFlags: `(${Wj} & 0xffffu)`,
          varying: "vPackItem",
          value: Wj,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return rr.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Zj,
        varying: "vPackFlags",
        value: Zj,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Uj(rr) {
      return "lifeform" === rr.kind ? aj : "0u"
    }

    function tj(rr) {
      return !!rr.BLOXD_PLUGIN_ENCHANTMENT
    }

    function hj(rr, Sr) {
      const {
        enchantTier: Qr
      } = Sr;
      return Qr && tj(Sr.defines) && "lifeform" === Sr.kind && yj(rr, "enchantTier") ? Qr : null
    }

    function zj(rr, Sr) {
      return tj(Sr.defines) && yj(rr, "enchantSpeed")
    }

    function Yj(rr) {
      const {
        overlay: Sr,
        defines: Qr
      } = rr;
      if (!Sr || !Qr.DIFFUSE) return null;
      const Zr = Qr.VERTEXCOLOR || Qr.INSTANCESCOLOR && Qr.INSTANCES;
      return `vec4f(${Sr.colour}.rgb * uniforms.vDiffuseInfos.y${Zr?" * fragmentInputs.vColor.rgb":""}, ${Sr.colour}.a)`
    }
    const nj = "fragmentInputs.vPackTexture";

    function ej(rr) {
      const {
        atlas: Sr,
        defines: Qr,
        texture: Zr
      } = rr;
      if (Sr || !Qr.DIFFUSE) return null;
      if (Zr) return {
        texture: "diffuseSampler",
        ...Zr
      };
      const Wr = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Qr.DIFFUSEDIRECTUV?"vMainUV1":2===Qr.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== rr.kind) return Wr;
      if (!Qr.BLOXD_PLUGIN_ANIMATED) return {
        ...Wr,
        id: nj
      };
      const ar = yr.d.WGSL,
        jr = (0, yr.zb)(ar, "uAnimStatesNum"),
        Ir = (0, yr.ib)(ar, (0, sa.e)(ar), jr),
        fr = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${jr})`,
        layers: [Ir],
        uv: `vec2f(${fr}.x, ${fr}.y * ${jr} - ${Ir})`,
        levelUv: fr,
        id: nj
      }
    }

    function Kj(rr, Sr) {
      return "box" === Sr.kind && !!rr.hooks.surface && null !== ej(Sr)
    }

    function yj(rr, Sr) {
      return rr.reads.fragment.includes(Sr)
    }

    function Bj(rr) {
      return !!rr.BLOXD_LIGHTING && !rr.BLOXD_UNLIT
    }

    function Tj(rr, Sr, Qr, Zr) {
      const Wr = rr.filter((rr => {
        let [Qr, Zr] = rr;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Qr && Zr === Sr
      }));
      if (1 !== Wr.length) throw new Error(`A model program for shader packs has ${0===Wr.length?"no":"more than one"} ${Zr} code before fog (lite/modelShaderPack.ts)`);
      return rr.map((rr => rr === Wr[0] ? [rr[0], Qr] : rr))
    }

    function vj(rr, Sr, Qr, Zr) {
      const {
        hooks: Wr
      } = rr, {
        kind: ar,
        defines: jr
      } = Sr, Ir = [...Qr];
      var fr;
      Sr.atlas && Wr.surface && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", mZ("atlasIdxIn")]), "item" === ar && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", (0, yr.f)(yr.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Kj(rr, Sr) && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", (0, yr.f)(yr.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (fr = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${pZ}[min(u32(${fr}) - 1u, arrayLength(&${pZ}) - 1u)], ${fr} > 0.5);\n`)]);
      const Er = Nj(Sr);
      Er && (Wr.surface || Wr.light) && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Er.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Er.varying} = ${Er.value};`]);
      let pr = Zr;
      if (Ej(rr, Sr, "fragment") && (Ir.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${fj});`]), pr = [...pr, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), yj(rr, "localPosition") && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${jj(Sr)};`]), tj(jr) && Wr.surface) {
        zj(rr, Sr) && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Qr = hj(rr, Sr);
        Qr && Ir.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Qr});`]);
        const Zr = (0, yr.tb)(yr.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        pr = [...Tj(pr, (0, ua.l)(yr.d.WGSL), Zr, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, ua.e)(Ij)]]
      }
      const {
        overlay: xr
      } = Sr;
      xr && Yj(Sr) && Wr.surface && (pr = pr.filter((rr => !pj(rr, xr))));
      const mr = Wr.light ? function(rr) {
        return "placed" === rr.kind ? {
          name: "terrain",
          engine: (0, oS.X)(yr.d.WGSL),
          pack: (0, oS.nb)(yr.d.WGSL)
        } : rr.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, oS.N)(yr.d.WGSL),
          pack: (0, oS.jb)(yr.d.WGSL)
        } : null
      }(Sr) : null;
      if (mr && (pr = Tj(pr, mr.engine, mr.pack, `${mr.name} light`), "placed" !== ar && Bj(jr))) {
        const rr = jr.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, yr.zb)(yr.d.WGSL, "uEntityLightLevels") : (0, yr.Hb)(yr.d.WGSL, "aLightLevels");
        Ir.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${oS.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, oS.lb)(yr.d.WGSL, rr)])
      }
      return {
        vertexCode: Ir,
        fragmentCode: pr
      }
    }

    function Oj(rr, Sr, Qr, Zr) {
      return ZZ(rr, Sr, Qr, Zr, "model")
    }
    const Lj = "\t@builtin(position) position: vec4f,\n";

    function lj(rr, Sr) {
      const Qr = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(rr)[0];
      return `${Qr}${Sr}${rr.slice(Qr.length)}`
    }

    function Xj(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Wr
      } = Sr, ar = aZ(Sr, Zr), {
        kind: jr,
        defines: Ir
      } = Qr, fr = function(rr, Sr) {
        var Qr, Zr, Wr, ar;
        const {
          defines: jr
        } = Sr, Ir = Nj(Sr), fr = !!jr.FOG, Er = tj(jr), pr = null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.enchantTier) && void 0 !== Qr ? Qr : hj(rr, Sr) ? "fragmentInputs.vPackEnchantTier" : "0u", xr = "lifeform" === Sr.kind && !jr.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Zr = null === Ir || void 0 === Ir ? void 0 : Ir.vertexFlags) && void 0 !== Zr ? Zr : Uj(Sr),
          vertexLocalPosition: jj(Sr),
          flags: null !== (Wr = null === Ir || void 0 === Ir ? void 0 : Ir.flags) && void 0 !== Wr ? Wr : Uj(Sr),
          normal: "normalW",
          alpha: xr ? "alpha * baseColor.a" : "alpha",
          alphaOut: xr ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: fr ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: fr ? "1.0 - fog" : "0.0",
          enchantTier: pr,
          enchantColour: Er ? `${Ij}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: zj(rr, Sr) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: yj(rr, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Yj(Sr),
          glow: null !== (ar = Sr.glow) && void 0 !== ar ? ar : null
        }
      }(Sr, Qr), Er = rr.textures.filter((rr => /^textureAtlas\d+$/.test(rr.name))).length, pr = Qr.atlas && Er > 0 ? {
        count: Er,
        layers: Qr.atlas.layers,
        width: Qr.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: rr.material.slots.has("uAnimDataPerTex") ? (Sr, Qr) => DZ(Sr, Qr, function(rr) {
          const Sr = rr.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            lx: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: rr => `uniforms.uAnimDataPerTex[${rr}]${Sr}`
          }
        }(rr)) : null
      } : null, xr = "placed" === jr ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", mr = null !== pr && void 0 !== pr ? pr : ej(Qr), Nr = function(rr, Qr) {
        let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,DS.x)()}${IZ(Sr,Qr)}${Zr}${UZ(rr)}${rZ}${xr}${Sr.code}`
      };
      let {
        vertex: Ur,
        fragment: tr
      } = rr;
      const hr = hZ(Wr, fr);
      if (hr) {
        const rr = Ej(Sr, Qr, "vertex") ? `\tbloxdSpCell = ${fj};\n` : "";
        Ur = Oj(Ur, rj, `${rr}${hr.slice(1)}${rj}`, "vertex")
      }
      const zr = `${fZ(Sr,ar,function(rr,Sr){return Sr.TWOSIDEDLIGHTING?rr:`select(-(${rr}), ${rr}, fragmentInputs.frontFacing)`}(fr.normal,Ir),fr.flags)}${zZ(Wr,Sr.strict,Sr.program,mr,fr)}`;
      zr && (tr = Oj(tr, Sj, `${zr.slice(1)}${Sj}`, "surface")), ar && Sr.sunShadow && !Ir.TWOSIDEDLIGHTING && (tr = Oj(tr, Lj, `${Lj}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Yr = eZ(Wr);
      if (Yr) {
        const rr = nZ(Wr, Bj(Ir), !0, fr);
        tr = Oj(tr, Qj, `${rr}${Yr.slice(1)}${Qj}`, "light")
      }
      const nr = Kj(Sr, Qr) ? xZ : "";
      return {
        ...rr,
        vertex: lj(Ur, Nr(pr, !1, nr)),
        fragment: lj(tr, Nr(mr, ar))
      }
    }
    const Pj = {
      name: "earthSky",
      uniqueId: -1
    };
    class Hj {
      constructor(rr, Sr) {
        this.resources = rr, this.epoch = Sr, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const rr of this.instances.values()) rr.released = !0, this.resources.destroyBuffer(rr.buffer);
        this.instances.clear()
      }
    }

    function qj(rr) {
      return rr.failed && null !== rr.packGroup
    }
    class Rj {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ra,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ha;
        this.device = rr, this.resources = Sr, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Qrr = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new sW, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new na((rr => this.modelSlot(rr).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, HS.c)("Lite: "), this.renderStates = new Ua(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (rr, Sr) => this.keepSteady(rr, Sr), this.lists = void 0, this.slotCount = 0, this.Qrr = Zr, this.modelMeshes = Wr, this.lists = new uW(Wr, Zr, this, this.warnOnce), this.drawDefines = new pa(Sr, this.warnOnce, ((rr, Sr, Qr) => this.programWithModel(rr, Sr, Qr)), qj), this.vertexLayouts = new Ba(Sr, rr.limits, this.warnOnce), this.sceneLayout = BS(rr), this.frameLayout = rr.createBindGroupLayout({
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
        }), this.frameBuffer = rr.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Oa(rr, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = rr.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Ma(rr, new Oa(rr, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (rr, Sr, Qr) => this.pipelineFor(rr, Sr, Qr),
          pipelineCompiling: (rr, Sr) => !rr.program.failed && !1 !== this.pipelines.get(`${rr.pipelineKey}|${Sr}`),
          sceneGroup: rr => {
            const Sr = Qr(rr);
            return Sr || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Sr
          }
        }), Sr.onDestroy = rr => {
          this.thinBundle.resourceDestroyed(rr)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wr = {
          order: rr,
          isTransparent: Sr,
          _direct: !Sr,
          bind: (rr, Sr) => this.createBinding(Wr, Sr, Qr, Zr)
        };
        return Wr
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(rr, Sr, Qr) {
        var Zr;
        let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Sr, this.drawDefines.view = Sr, this.thinBundle.lB(), this.writeFrameUniforms();
        const ar = null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.defineFor("model")) && void 0 !== Zr ? Zr : 0;
        this.drawDefines.modelPackVariant = ar, Wr && 0 !== ar && (this.packInputs ??= new ba(this.device, Wr.textureLayers(), this.sunShadow), this.packInputs.write(Wr, Sr.eye, Wr.ct())), this.lists.clear(), this.slotCount = 0;
        const jr = rr.activeCamera;
        this.Qrr.select(jr, this.keepSteadyBase), this.modelMeshes.select(jr, Sr), Qr && this.pushEarthSky(Qr), this.lists.collect(rr), this.thinBundle.Bx(), this.uploadMeshSlots()
      }
      pushDraws(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Ir = ar.length;
        for (let fr = 0; fr < Qr; fr++) {
          const Qr = Sr[fr];
          let Ir = this.retainedDraw(rr, Qr, Zr, Wr);
          if (void 0 === Ir && (Ir = this.drawFor(rr, Qr, Zr, Wr), this.retain(Qr, Ir)), Ir) {
            const rr = Qr.owner,
              Sr = jr ? jr[fr] : -1;
            Ir.slotOffset = Sr < 0 ? this.writeMeshSlot(rr.getWorldMatrix().m, rr.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Sr], 16 * Sr), ar.push(Ir)
          }
        }
        return ar.length - Ir
      }
      bundleDraws(rr, Sr, Qr) {
        let Zr = 0;
        for (const Wr of Sr) {
          let Sr = this.retainedDraw(rr, Wr, Qr, !1);
          const ar = void 0 !== Sr;
          if (void 0 === Sr && (Sr = this.drawFor(rr, Wr, Qr, !1), this.retain(Wr, Sr)), Sr) {
            const rr = Wr.owner,
              Qr = this.thinBundle.add(Wr, Sr, rr.getWorldMatrix().m, rr.visibility);
            ar && this.steadyFrom(Wr, Sr, Qr), Zr++
          }
        }
        return Zr
      }
      steadyFrom(rr, Sr, Qr) {
        const Zr = rr.owner,
          Wr = this.Qrr.base(Zr),
          ar = Zr.material,
          {
            drawState: jr,
            instance: Ir
          } = Sr.inputs.retained;
        if (!Wr || !ar || 1 !== rr.parts.materials.length || la(rr) !== ar) return;
        const fr = Wr.steady ??= {
          unit: rr,
          material: ar,
          visibility: 1,
          draw: Sr,
          record: Qr,
          drawState: jr,
          instance: Ir,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        fr.unit = rr, fr.material = ar, fr.visibility = Zr.visibility, fr.draw = Sr, fr.record = Qr, fr.drawState = jr, fr.instance = Ir, fr.bindGroup = Ir.bindGroup, fr.gpuVersion = this.resources.gpuBuffersVersion, fr.fitInstances = Sr.inputs.fitInstances, fr.worldFlag = Zr.getWorldMatrix().updateFlag, fr.handedFrame = this.frame
      }
      keepSteady(rr, Sr) {
        const Qr = rr.steady;
        if (Qr.handedFrame !== this.frame - 1 || (this.frame + Qr.phase) % 8 === 0) return !1;
        const Zr = rr.mesh,
          {
            unit: Wr,
            draw: ar,
            instance: jr,
            drawState: Ir
          } = Qr,
          fr = Zr.forcedInstanceCount || Zr.frr;
        if (!Zr.isVisible || Zr.Har || Zr.visibility !== Qr.visibility || 0 === (Zr.layerMask & Sr.layerMask) || Zr.material !== Qr.material || 0 !== Zr.renderingGroupId || Zr.hasVertexAlpha || !this.drawDefines.definesHold(Ir, Wr, Ir.instancing) || Qr.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(ar.inputs, Wr, Ir.instancing, ar.program) || ar.program.failed || jr.released || fr <= 0 || fr > Qr.fitInstances) return !1;
        if (jr.frame !== this.frame && this.bindMaterial(jr, this.modelUniforms.refreshModelUniforms(Zr.eC(), jr, jr.model, this.view)), !jr.bindable || jr.bindGroup !== Qr.bindGroup) return !1;
        const Er = Zr.computeWorldMatrix(),
          pr = Er.updateFlag !== Qr.worldFlag;
        return Qr.worldFlag = Er.updateFlag, ar.instances = fr, this.thinBundle.addAgain(Qr.record, ar, pr ? Er.m : null, Qr.visibility), Qr.handedFrame = this.frame, this.Qrr.drawn++, !0
      }
      retainedDraw(rr, Sr, Qr, Zr) {
        const Wr = this.inputs.get(Sr),
          ar = null === Wr || void 0 === Wr ? void 0 : Wr.retained;
        if (!Wr || !ar) return;
        const {
          drawState: jr,
          program: Ir,
          instance: fr,
          instancing: Er
        } = ar, pr = Sr.owner;
        if (Wa(pr) !== Er) return;
        const xr = this.instanceCount(pr, Er);
        if (xr <= 0) return null;
        if (fr.released || Ir.failed || jr.program !== Ir || !this.drawDefines.programCurrent(jr, Sr, Er, Qr) || !this.inputsStamped(Wr, Sr, Er, Ir) || pr.isUnIndexed !== ar.unIndexed || this.indexKey(Sr) !== ar.indexData) return;
        if (ar.indexBuffer && ar.gpuVersion !== this.resources.gpuBuffersVersion) {
          const rr = this.resources.gpuBuffer(ar.indexData);
          if (!rr) return;
          ar.indexBuffer = rr, ar.gpuVersion = this.resources.gpuBuffersVersion
        }
        let mr = !1;
        if (fr.frame !== this.frame && (mr = this.modelUniforms.refreshModelUniforms(rr, fr, fr.model, this.view)), !this.bindMaterial(fr, mr) || !this.withGpuBuffers(Wr) || !this.instanceBuffersFit(pr.name, Wr, xr)) return null;
        const Nr = this.makeDraw(Ir, Wr, this.renderStates.renderState(jr.model, pr, Zr, Wr.state), fr, xr);
        return this.setRange(Nr, Sr, ar.indexBuffer, ar.indexData), Nr
      }
      retain(rr, Sr) {
        const Qr = this.drawDefines.drawStates.get(rr);
        if (!Sr || !Qr || Qr.program !== Sr.program) {
          const Sr = this.inputs.get(rr);
          return void(Sr && (Sr.retained = null))
        }
        const Zr = rr.owner,
          Wr = Qr.instancing,
          ar = this.indexKey(rr),
          jr = Sr.inputs.retained;
        jr ? (jr.drawState = Qr, jr.instancing = Wr, jr.program = Sr.program, jr.instance = Sr.material, jr.indexData = ar, jr.unIndexed = Zr.isUnIndexed, jr.indexBuffer = Sr.indexBuffer, jr.gpuVersion = this.resources.gpuBuffersVersion) : Sr.inputs.retained = {
          drawState: Qr,
          instancing: Wr,
          program: Sr.program,
          instance: Sr.material,
          indexData: ar,
          unIndexed: Zr.isUnIndexed,
          indexBuffer: Sr.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(rr, Sr, Qr, Zr) {
        const Wr = Sr.owner,
          ar = la(Sr);
        if (!ar) return null;
        const jr = ar.getClassName();
        let Ir = null;
        if (function(rr) {
            return "LinesMesh" === rr.getClassName()
          }(Wr)) {
          if (! function(rr) {
              return "ShaderMaterial" === rr.getClassName() && "color" === rr.shaderPath
            }(ar)) return this.warnOnce(`lines:${jr}`, `A LinesMesh with a ${jr} is not drawn yet (${ar.name})`), null;
          Ir = Wr
        } else if ("StandardMaterial" !== jr && "LiteMaterial" !== jr) return this.warnOnce(`class:${jr}`, `${jr} is not drawn yet (${ar.name})`), null;
        const fr = Wa(Wr),
          Er = this.instanceCount(Wr, fr);
        if (Er <= 0) return null;
        const pr = Ir ? this.lineProgramFor(Wr, Qr, fr) : this.drawDefines.programFor(rr, Sr, ar, Qr, fr);
        if (!pr || pr.failed) return null;
        const xr = Ir ? null : this.drawDefines.drawStates.get(Sr).model,
          mr = xr ? this.modelInstance(xr, pr) : this.materialInstance(Wr, pr);
        let Nr = !1;
        if (mr.frame !== this.frame && (Ir ? Yr(mr.ubo, Ir) : Nr = this.modelUniforms.refreshModelUniforms(rr, mr, mr.model, this.view)), !this.bindMaterial(mr, Nr)) return null;
        const Ur = this.meshInputs(Sr, pr, fr);
        if (!Ur || !this.instanceBuffersFit(Wr.name, Ur, Er)) return null;
        const tr = this.indexKey(Sr);
        let hr = null;
        if (tr && !Wr.isUnIndexed && (hr = this.resources.gpuBuffer(tr), !hr)) return null;
        const zr = this.renderStates.renderState(null !== xr && void 0 !== xr ? xr : ar, Wr, Zr, Ur.state, Ir ? "line-list" : "triangle-list"),
          nr = this.makeDraw(pr, Ur, zr, mr, Er);
        return this.setRange(nr, Sr, hr, tr), nr
      }
      indexKey(rr) {
        const Sr = fa(rr);
        return Sr ? this.resources.modelIndex(Sr) : null
      }
      setRange(rr, Sr, Qr, Zr) {
        Qr && (rr.indexBuffer = Qr, rr.indexFormat = this.resources.indexFormat(Zr));
        const Wr = 4 * Sr.range + (Qr ? 0 : 2);
        rr.unit = Sr, rr.first = Sr.parts.yh[Wr], rr.count = Sr.parts.yh[Wr + 1]
      }
      makeDraw(rr, Sr, Qr, Zr, Wr) {
        Sr.state !== Qr && (Sr.state = Qr, Sr.pipelineKey = `${rr.id}|${Sr.layout.key}|${Qr.key}`, Sr.pipeline = null);
        const ar = Sr.draw ??= {
          program: rr,
          inputs: Sr,
          pipelineKey: "",
          layout: Sr.layout,
          state: Qr,
          material: Zr,
          slotOffset: 0,
          vertexBuffers: Sr.buffers,
          vertexOffsets: Sr.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Wr,
          unit: null
        };
        return ar.program = rr, ar.pipelineKey = Sr.pipelineKey, ar.state = Qr, ar.material = Zr, ar.vertexOffsets = Sr.offsets, ar.indexBuffer = null, ar.instances = Wr, ar
      }
      instanceCount(rr, Sr) {
        switch (Sr) {
          case "thin":
            return rr.forcedInstanceCount || rr.frr;
          case "instanced":
            return this.prepareInstances(rr);
          case "none":
            return 1
        }
      }
      prepareInstances(rr) {
        const Sr = function(rr, Sr) {
          const Qr = Sr._userInstancedBuffersStorage,
            Zr = rr.batchUploads.get(Sr);
          if (Zr) {
            var Wr;
            if (Zr.layout === (null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.interleavedKinds) && void 0 !== Wr ? Wr : null)) return Zr;
            Zr.release()
          }
          return new NS(rr, Sr, Qr)
        }(this.resources, rr);
        return Sr.frame !== this.frame && Sr.pack(rr, this.modelMeshes.instanceBatch(rr), this.modelMeshes.worlds, this.frame), Sr.count
      }
      programWithModel(rr, Sr, Qr) {
        const Zr = this.modelSlot(rr),
          Wr = xa(Zr, rr, Qr),
          ar = this.drawDefines.modelPackKind(rr),
          jr = ar ? function(rr, Sr, Qr, Zr) {
            const Wr = (0, vr.v)(rr, Br.j.name),
              ar = [];
            for (const {
                feature: fr,
                state: Er,
                active: pr
              }
              of rr.features) {
              var jr, Ir;
              const rr = pr ? null === (jr = (Ir = (0, qS.h)(fr)).zU) || void 0 === jr ? void 0 : jr.call(Ir, Er) : void 0;
              rr && ar.push(rr)
            }
            return {
              kind: Sr,
              atlas: null !== Wr && void 0 !== Wr && Wr.active ? (0, Br.d)(Wr.state) : null,
              defines: Qr,
              ...mj(ar, Zr)
            }
          }(rr, ar, Sr, Zr.fragmentCode) : null;
        if (jr && function(rr) {
            const Sr = rr.defines;
            return (null === rr.atlas || !!Sr.DIFFUSE && 1 === Sr.DIFFUSEDIRECTUV) && !!Sr.NORMAL && !Sr.REFLECTION && !Sr.EMISSIVEASILLUMINATION && !Sr.LINKEMISSIVEWITHDIFFUSE
          }(jr)) {
          const Qr = this.modelPackProgram(rr, Sr, `${Wr}#${ar}#sp${this.drawDefines.modelPackVariant}`, Zr, jr);
          if (Qr && !Qr.failed) return Qr
        }
        const Ir = this.programs.get(Wr);
        if (Ir || this.unbuildable.has(Wr)) return null !== Ir && void 0 !== Ir ? Ir : null;
        let fr;
        try {
          fr = XW({
            defines: ja(Sr),
            vertexCode: Zr.vertexCode,
            fragmentCode: Zr.fragmentCode,
            pluginUniforms: Zr.pluginUniforms
          })
        } catch (Er) {
          return this.unbuildable.add(Wr), this.warnOnce(`build:${Wr}`, `could not build a program for ${rr.name}: ${String(Er)}`), null
        }
        return this.createProgram(Wr, fr, "standard")
      }
      modelPackProgram(rr, Sr, Qr, Zr, Wr) {
        const ar = this.programs.get(Qr);
        if (ar || this.unbuildable.has(Qr)) return null !== ar && void 0 !== ar ? ar : null;
        const jr = this.drawDefines.modelPackVariant;
        let Ir;
        try {
          const rr = function(rr) {
              return (0, dS.e)(rr, "model")
            }(jr),
            Qr = vj(rr, Wr, Zr.vertexCode, Zr.fragmentCode);
          Ir = Xj(XW({
            defines: ja(Sr),
            ...Qr,
            pluginUniforms: Zr.pluginUniforms
          }), rr, Wr, !!this.sunShadow)
        } catch (pr) {
          return this.unbuildable.add(Qr), this.warnOnce(`build:${Qr}`, `could not build a shader pack program for ${rr.name}, which draws without the pack: ${String(pr)}`), null
        }
        const fr = Fa(jr, !!this.sunShadow),
          Er = {
            group: this.packInputs.bindGroupFor(null, fr),
            layout: wa(this.device, {
              depth: !1,
              sunShadow: fr
            })
          };
        return this.createProgram(Qr, Ir, function(rr) {
          return `standard-sp${rr}`
        }(jr), Er)
      }
      lineProgramFor(rr, Sr, Qr) {
        const Zr = zr(rr, Qr, Sr, this.view);
        let Wr = this.linePrograms.get(Zr);
        var ar;
        return Wr || (Wr = this.createProgram(`lines#${Zr}`, (ar = function(rr) {
          const Sr = new Map;
          for (let Qr = 0; Qr < Er.length; Qr++) rr & 1 << Qr && Sr.set(Er[Qr], !0);
          return Sr
        }(Zr), RW({
          defines: ar,
          vertex: HW,
          fragment: qW,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Zr, Wr)), Wr
      }
      createProgram(rr, Sr, Qr) {
        var Zr;
        let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ar = this.nextProgramId++,
          jr = `${Qr}-${ar}`,
          Ir = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          fr = [{
            binding: 0,
            visibility: Ir,
            buffer: {
              type: "uniform"
            }
          }];
        for (const xr of Sr.textures) fr.push({
          binding: xr.binding,
          visibility: Ir,
          texture: {
            viewDimension: xr.dimension
          }
        }), fr.push({
          binding: xr.samplerBinding,
          visibility: Ir,
          sampler: {}
        });
        const Er = this.device.createBindGroupLayout({
            label: jr,
            entries: fr
          }),
          pr = {
            key: rr,
            id: ar,
            kind: Qr,
            program: Sr,
            vertex: this.device.createShaderModule({
              label: `${jr}-vertex`,
              code: Sr.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${jr}-fragment`,
              code: Sr.fragment
            }),
            materialLayout: Er,
            pipelineLayout: this.device.createPipelineLayout({
              label: jr,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Er, ...Wr ? [Wr.layout] : []]
            }),
            packGroup: null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.group) && void 0 !== Zr ? Zr : null,
            failed: !1
          };
        return this.programs.set(rr, pr), pr
      }
      writeFrameUniforms() {
        const rr = this.frameUniforms;
        Ya(this.view, rr), this.device.queue.writeBuffer(this.frameBuffer, 0, rr)
      }
      materialInstance(rr, Sr) {
        let Qr = this.materials.get(rr);
        if (!Qr) {
          const Sr = new Map;
          this.materials.set(rr, Sr);
          const {
            resources: Zr,
            materials: Wr
          } = this;
          rr.lC.addOnce((() => {
            for (const rr of Sr.values()) rr.released = !0, Zr.destroyBuffer(rr.buffer);
            Wr.delete(rr)
          })), Qr = Sr
        }
        let Zr = Qr.get(Sr.key);
        return Zr || (Zr = this.newMaterialInstance(rr, null, Sr), Qr.set(Sr.key, Zr)), Zr
      }
      modelInstance(rr, Sr) {
        const Qr = this.modelSlot(rr);
        let Zr = Qr.instances.get(Sr.key);
        return Zr || (Zr = this.newMaterialInstance(rr, rr, Sr), Qr.instances.set(Sr.key, Zr)), Zr
      }
      modelSlot(rr) {
        var Sr;
        let Qr = rr.gpu[Lr.e.lite];
        return (null === (Sr = Qr) || void 0 === Sr ? void 0 : Sr.epoch) !== this.resources.epoch && (Qr = new Hj(this.resources, this.resources.epoch), rr.gpu[Lr.e.lite] = Qr), Qr
      }
      newMaterialInstance(rr, Sr, Qr) {
        const Zr = Qr.program.material.floats,
          Wr = new Float32Array(Zr),
          ar = new Map;
        return {
          owner: rr,
          model: Sr,
          program: Qr,
          data: Wr,
          uploaded: new Float32Array(Zr).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${rr.name}-uniforms`,
            size: Math.max(16, 4 * Zr),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: ar,
          ubo: new za(Qr.program.material.slots, Wr, ar),
          bindGroup: null,
          bound: new Array(2 * Qr.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(rr) {
        var Sr;
        const Qr = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: kW + AW,
            fragment: kW + VW,
            attributes: [],
            material: GW,
            textures: []
          }, "earthSky"),
          Zr = this.earthSkyUniforms ??= this.newMaterialInstance(Pj, null, Qr);
        this.earthSkyFrom !== rr && (this.earthSkyFrom = rr, Zr.data.fill(0)), DW(Zr.ubo, rr, this.view);
        const Wr = this.vertexInputs(Qr, Pj, "earthSky", Qr, null);
        if (Qr.failed || !Wr || !this.bindMaterial(Zr, !1)) return;
        const ar = null !== (Sr = Wr.state) && void 0 !== Sr ? Sr : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          jr = this.makeDraw(Qr, Wr, ar, Zr, 1);
        jr.count = gW.length;
        const Ir = dW(rr, this.view);
        jr.slotOffset = this.writeMeshSlot(Ir, 1), this.lists.skyDraws.push(jr)
      }
      uploadIfChanged(rr) {
        const {
          data: Sr,
          uploaded: Qr
        } = rr;
        for (let Zr = 0; Zr < Sr.length; Zr++)
          if (Sr[Zr] !== Qr[Zr]) return Qr.set(Sr), void this.device.queue.writeBuffer(rr.buffer, 0, Sr)
      }
      bindMaterial(rr, Sr) {
        return rr.frame !== this.frame && (rr.frame = this.frame, Sr || this.uploadIfChanged(rr), rr.bindable = this.bindTextures(rr)), rr.bindable
      }
      bindTextures(rr) {
        const {
          program: Sr,
          bound: Qr
        } = rr, Zr = Sr.program.textures;
        let Wr = !rr.bindGroup,
          ar = !0;
        for (let jr = 0; jr < Zr.length; jr++) {
          const Sr = rr.textures.get(Zr[jr].name),
            Ir = Sr ? this.resources.boundTexture(Sr) : null;
          Ir ? Qr[2 * jr] === Ir.view && Qr[2 * jr + 1] === Ir.sampler || (Qr[2 * jr] = Ir.view, Qr[2 * jr + 1] = Ir.sampler, Wr = !0) : (Sr || rr.ubo.expected.has(Zr[jr].name) || this.warnOnce(`texture:${rr.owner.name}:${Zr[jr].name}`, `${rr.owner.name} has no ${Zr[jr].name}`), ar = !1)
        }
        if (!ar) return Wr && (rr.bindGroup = null), !1;
        if (Wr) {
          const Wr = [{
            binding: 0,
            resource: {
              buffer: rr.buffer
            }
          }];
          for (let rr = 0; rr < Zr.length; rr++) Wr.push({
            binding: Zr[rr].binding,
            resource: Qr[2 * rr]
          }), Wr.push({
            binding: Zr[rr].samplerBinding,
            resource: Qr[2 * rr + 1]
          });
          rr.bindGroup = this.device.createBindGroup({
            label: `${rr.owner.name}-material`,
            layout: Sr.materialLayout,
            entries: Wr
          })
        }
        return !0
      }
      writeMeshSlot(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, rr, Sr, Qr), this.slotCount++ * EW
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(rr, Sr, Qr, Zr, Wr) {
        let ar = this.inputs.get(rr);
        if (!ar || ar.program !== Zr || !Ta(Sr, ar, this.resources, Wr)) {
          var jr;
          if (ar = null !== (jr = this.vertexLayouts.resolveInputs(Sr, Qr, Zr, Wr)) && void 0 !== jr ? jr : void 0, !ar) return null;
          this.inputs.set(rr, ar)
        }
        return this.withGpuBuffers(ar)
      }
      meshInputs(rr, Sr, Qr) {
        const Zr = this.inputs.get(rr);
        if (Zr && this.inputsStamped(Zr, rr, Qr, Sr)) return this.withGpuBuffers(Zr);
        const Wr = rr.owner,
          ar = fa(rr),
          jr = this.vertexInputs(rr, Wr, Wr.name, Sr, ar);
        return jr && (jr.geometry = Ea(rr), jr.instanceLayout = this.drawDefines.instanceLayout(Wr, Qr)), jr
      }
      inputsStamped(rr, Sr, Qr, Zr) {
        return function(rr, Sr, Qr, Zr) {
          return rr.program === Qr && rr.geometry === Ea(Sr) && rr.instanceLayout === Zr
        }(rr, Sr, Zr, this.drawDefines.instanceLayout(Sr.owner, Qr))
      }
      withGpuBuffers(rr) {
        return Ja(rr, this.resources, this.zeroBuffer) ? rr : null
      }
      instanceBuffersFit(rr, Sr, Qr) {
        const Zr = da(Sr, Qr, this.resources, this.zeroBuffer);
        if (Zr) {
          const Wr = Sr.ends[Zr.index] - Sr.offsets[Zr.index] + Sr.arr[Zr.index];
          return this.warnOnce(`overrun:${rr}`, `${rr} draws ${Qr} instances from a ${Wr}-byte buffer (${Zr.needed} needed)`), !1
        }
        return !0
      }
      createBinding(rr, Sr, Qr, Zr) {
        const Wr = `${Sr._colorFormat}|${Sr._depthStencilFormat}|${Sr._depthCompare}|${Sr._sampleCount}`,
          ar = lS(this.device, Sr);
        if (rr === this.skyLastRenderable) {
          let Qr = null;
          return {
            renderable: rr,
            pipeline: ar,
            draw: rr => Qr ? this.drawSky(rr, Sr, Wr, Qr) : 0,
            update: rr => {
              Qr = rr
            }
          }
        }
        return {
          renderable: rr,
          pipeline: ar,
          draw: rr => (Zr ? Zr.execute(rr, Sr, Wr) : 0) + this.drawList(rr, Sr, Wr, Qr)
        }
      }
      drawSky(rr, Sr, Qr, Zr) {
        const Wr = this.lists.skyDraws,
          ar = Wr.length > 0;
        if (ar) {
          var jr;
          const Qr = (null !== (jr = Sr._depthCompare) && void 0 !== jr ? jr : TS).startsWith("greater") ? 0 : 1;
          rr.setViewport(0, 0, Zr.targetWidth, Zr.targetHeight, Qr, Qr)
        }
        const Ir = this.drawList(rr, Sr, Qr, Wr);
        return ar && rr.setViewport(0, 0, Zr.targetWidth, Zr.targetHeight, 0, 1), Ir
      }
      drawList(rr, Sr, Qr, Zr) {
        let Wr = 0;
        const ar = this.binder;
        ar.reset();
        for (const jr of Zr) {
          const Zr = this.pipelineFor(jr, Sr, Qr);
          Zr && (ar.bind(rr, jr, Zr, this.meshSlots.bindGroup, jr.slotOffset), jr.indexBuffer ? rr.drawIndexed(jr.count, jr.instances, jr.first, 0, 0) : rr.draw(jr.count, jr.instances, jr.first, 0), Wr++)
        }
        return Wr
      }
      pipelineFor(rr, Sr, Qr) {
        var Zr, Wr;
        if (rr.program.failed) return null;
        const ar = rr.inputs;
        if (ar.pipeline && ar.pipelineTarget === Qr) return ar.pipeline;
        const jr = `${rr.pipelineKey}|${Qr}`,
          Ir = this.pipelines.get(jr);
        if (void 0 !== Ir) return Ir && (ar.pipeline = Ir, ar.pipelineTarget = Qr), Ir || null;
        this.pipelines.set(jr, null);
        const {
          program: fr,
          layout: Er,
          state: pr
        } = rr, xr = {
          label: `standard-${fr.id}`,
          layout: fr.pipelineLayout,
          vertex: {
            module: fr.vertex,
            entryPoint: "main",
            buffers: Er.buffers
          },
          fragment: YS({
            module: fr.fragment,
            entryPoint: "main"
          }, Sr, pr.blend, pr.colourWrite),
          depthStencil: Sr._depthStencilFormat ? {
            format: Sr._depthStencilFormat,
            depthCompare: null !== (Zr = null !== (Wr = pr.depthCompare) && void 0 !== Wr ? Wr : Sr._depthCompare) && void 0 !== Zr ? Zr : TS,
            depthWriteEnabled: pr.depthWrite,
            depthBias: pr.depthBias,
            depthBiasSlopeScale: pr.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Sr._sampleCount
          },
          primitive: {
            topology: pr.topology,
            frontFace: pr.frontFace,
            cullMode: pr.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(xr).then((rr => {
          this.compiling--, this.pipelines.set(jr, rr)
        }), (rr => {
          this.compiling--, this.reportFailure(fr, jr, rr)
        })), null
      }
      forEachSunShadowCaster(rr) {
        const Sr = this.caster,
          Qr = (Qr, Zr, Wr) => {
            const ar = Qr.unit && function(rr) {
              const Sr = rr.material.model;
              return null !== Sr && (Sr.lifeform || Sr.item) && Sr.castsSunShadow && "triangle-list" === rr.state.topology
            }(Qr) ? fa(Qr.unit) : null;
            if (!ar) return;
            const jr = Qr.unit.owner;
            switch (Sr.geometry = ar, Sr.skip = jr.noSunShadowVertices, Sr.indexed = null !== Qr.indexBuffer, Sr.first = Qr.first, Sr.count = Qr.count, Sr.qx = Zr, Sr.worldAt = Wr, Sr.instances = null, Sr.instanceCount = 1, Sr.thin = !1, Wa(jr)) {
              case "thin": {
                const rr = jr._thinInstanceDataStorage.matrixData;
                if (!rr) return;
                Sr.instances = rr, Sr.instanceCount = Math.min(Qr.instances, rr.length / 16), Sr.thin = !0;
                break
              }
              case "instanced": {
                const rr = this.resources.batchUploads.get(jr);
                if (!rr || rr.frame !== this.frame || !this.writeBatchCasters(rr)) return;
                break
              }
            }
            rr(Sr)
          };
        for (const Zr of this.lists.opaqueDraws) Qr(Zr, this.meshSlots.data, Zr.slotOffset / 4);
        this.thinBundle.forEachDrawn(Qr)
      }
      writeBatchCasters(rr) {
        const {
          caster: Sr
        } = this, Qr = rr.packedMatrices, Zr = rr.count;
        Sr.instances = Qr, Sr.instanceCount = Zr;
        let Wr = -1;
        for (let ar = 0; ar < Zr; ar++) {
          const Sr = gj(rr.packedRowMesh(ar));
          Sr && Wr < 0 ? (this.casterWorlds.length < 16 * Zr && (this.casterWorlds = new Float32Array(Qr.length)), this.casterWorlds.set(Qr.subarray(0, 16 * ar)), Wr = ar) : !Sr && Wr >= 0 && (this.casterWorlds.set(Qr.subarray(16 * ar, 16 * ar + 16), 16 * Wr), Wr++)
        }
        return Wr >= 0 && (Sr.instances = this.casterWorlds, Sr.instanceCount = Wr), Sr.instanceCount > 0
      }
      async reportFailure(rr, Sr, Qr) {
        const Zr = [];
        let Wr = !0;
        for (const [ar, jr] of [
            ["vertex", rr.vertex],
            ["fragment", rr.fragment]
          ]) {
          const rr = await jr.getCompilationInfo();
          for (const Sr of rr.messages) Wr &&= "error" !== Sr.type, Zr.push(`${ar}:${Sr.lineNum}:${Sr.linePos} ${Sr.type}: ${Sr.message}`)
        }
        if (Wr && !rr.packGroup) return this.pipelines.set(Sr, !1), console.error(`Lite: pipeline ${Sr} failed`, Qr), void pS(this.device, "mesh", rr.kind, Qr);
        rr.failed || (rr.failed = !0, console.error(`Lite: program ${rr.id} failed`, Qr, Zr.join("\n"), {
          program: rr.program,
          key: rr.key
        }), pS(this.device, "mesh", rr.kind, Qr, Wr ? null : Zr[0]))
      }
    }

    function gj(rr) {
      var Sr, Qr;
      const Zr = null === (Sr = rr.pG) || void 0 === Sr || null === (Qr = Sr.aShaderPackItem) || void 0 === Qr ? void 0 : Qr.x;
      return void 0 !== Zr && 0 !== (Zr & PS.j)
    }
    var Cj = Qr(54211),
      Mj = Qr(54220),
      Gj = Qr(54228),
      kj = Qr(54178);
    const Aj = [0, 3, 1, 4, 2, 5];

    function Vj(rr, Sr, Qr, Zr, Wr) {
      const ar = Qr[0].width;
      try {
        return Wr ? function(rr, Sr, Qr) {
          const Zr = (0, kj.d)(rr, Qr, Qr, 6);
          for (let Wr = 0; Wr < 6; Wr++)(0, kj.e)(rr, Zr, Wr, Sr[Aj[Wr]], {
            invertY: !1
          });
          return Zr.texture
        }(rr, Qr, ar) : function(rr, Sr, Qr, Zr) {
          const Wr = rr.createTexture({
            label: "sink-cube",
            size: {
              width: Qr,
              height: Qr,
              depthOrArrayLayers: 6
            },
            format: Zr,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let ar = 0; ar < 6; ar++) rr.queue.copyExternalImageToTexture({
            source: Sr[Aj[ar]]
          }, {
            texture: Wr,
            origin: {
              x: 0,
              y: 0,
              z: ar
            }
          }, {
            width: Qr,
            height: Qr
          });
          return Wr
        }(Sr, Qr, ar, 1 === Zr ? "r8unorm" : "rgba8unorm")
      } finally {
        ij(Qr)
      }
    }

    function ij(rr) {
      for (const Sr of null !== rr && void 0 !== rr ? rr : []) null === Sr || void 0 === Sr || Sr.close()
    }
    async function wj(rr) {
      const Sr = [],
        Qr = [];
      if (await Promise.all(rr.map(((rr, Zr) => (Sr[Zr] = null, rr.then((rr => {
          Sr[Zr] = rr
        }), (rr => {
          Qr.push(rr)
        })))))), Qr.length > 0) throw ij(Sr), Qr[0];
      return Sr
    }
    class cj {
      constructor(rr) {
        this.sx = rr, this.starts = [], this.lengths = [], this.used = 0, rr > 0 && (this.starts.push(0), this.lengths.push(rr))
      }
      allocate(rr) {
        const {
          starts: Sr,
          lengths: Qr
        } = this;
        for (let Zr = 0; Zr < Sr.length; Zr++) {
          if (Qr[Zr] < rr) continue;
          const Wr = Sr[Zr];
          return Qr[Zr] === rr ? (Sr.splice(Zr, 1), Qr.splice(Zr, 1)) : (Sr[Zr] += rr, Qr[Zr] -= rr), this.used += rr, Wr
        }
        return -1
      }
      free(rr, Sr) {
        this.used -= Sr;
        const Qr = Math.min(rr + Sr, this.sx);
        Qr > rr && this.release(rr, Qr - rr)
      }
      grow(rr) {
        const Sr = this.sx;
        this.sx = rr, this.release(Sr, rr - Sr)
      }
      truncate(rr) {
        const {
          starts: Sr,
          lengths: Qr
        } = this;
        for (let Zr = Sr.length - 1; Zr >= 0 && Sr[Zr] + Qr[Zr] > rr; Zr--) Sr[Zr] >= rr ? (Sr.splice(Zr, 1), Qr.splice(Zr, 1)) : Qr[Zr] = rr - Sr[Zr];
        this.sx = rr
      }
      release(rr, Sr) {
        const {
          starts: Qr,
          lengths: Zr
        } = this;
        let Wr = 0,
          ar = Qr.length;
        for (; Wr < ar;) {
          const Sr = Wr + ar >> 1;
          Qr[Sr] < rr ? Wr = Sr + 1 : ar = Sr
        }
        const jr = Wr,
          Ir = jr > 0 && Qr[jr - 1] + Zr[jr - 1] === rr,
          fr = jr < Qr.length && rr + Sr === Qr[jr];
        Ir && fr ? (Zr[jr - 1] += Sr + Zr[jr], Qr.splice(jr, 1), Zr.splice(jr, 1)) : Ir ? Zr[jr - 1] += Sr : fr ? (Qr[jr] = rr, Zr[jr] += Sr) : (Qr.splice(jr, 0, rr), Zr.splice(jr, 0, Sr))
      }
    }
    const Fj = 256;
    class oj {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = rr, this.onReplaced = Sr, this.mergeGap = Qr, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.yh = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Wr = Math.max(Fj, Math.ceil(Zr / Fj) * Fj);
        this.bytes = new Uint8Array(Wr), this.words = new Uint32Array(this.bytes.buffer), this.yh = new cj(Wr / Fj)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(rr) {
        return Math.max(1, Math.ceil(rr / Fj)) * Fj
      }
      allocate(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr;
        const Zr = oj.slotBytes(rr),
          Wr = Zr / Fj;
        let ar = this.yh.allocate(Wr);
        ar < 0 && (this.grow(this.yh.sx + Wr), ar = this.yh.allocate(Wr));
        const jr = ar * Fj;
        return this.growTo(jr + Math.max(Qr, Zr)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, jr, jr + Zr), Sr && this.bytes.set(new Uint8Array(Sr.buffer, Sr.byteOffset, Math.min(Sr.byteLength, Zr)), jr), this.markDirty(jr, jr + Zr), jr
      }
      growTo(rr) {
        const Sr = Math.ceil(rr / Fj);
        Sr > this.yh.sx && this.grow(Sr)
      }
      free(rr, Sr) {
        this.freed.push(rr, Sr)
      }
      write(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Zr <= 0) return;
        Zr <= 1024 && 0 === (3 & (rr | Qr | Zr)) ? this.copyWords(rr >> 2, Sr.buffer, Qr >> 2, Zr >> 2) : this.bytes.set(new Uint8Array(Sr.buffer, Qr, Zr), rr);
        let ar = rr + Zr;
        if (Wr) {
          const Sr = rr + 4 * Math.ceil(Zr / 4);
          this.bytes.fill(0, ar, Sr), ar = Sr
        }
        this.markDirty(rr, ar)
      }
      copyWords(rr, Sr, Qr, Zr) {
        let Wr = this.sourceWords.get(Sr);
        Wr || (Wr = new Uint32Array(Sr, 0, Sr.byteLength >> 2), this.sourceWords.set(Sr, Wr));
        const ar = this.words;
        for (let jr = 0; jr < Zr; jr++) ar[rr + jr] = Wr[Qr + jr]
      }
      move(rr, Sr, Qr) {
        this.bytes.copyWithin(Sr, rr, rr + Qr), this.markDirty(Sr, Sr + Qr)
      }
      flush() {
        for (const Sr of this.retired) this.onReplaced(Sr), Sr.destroy();
        this.retired.length = 0;
        const rr = this.dirtyStarts.length;
        if (rr > 0) {
          const {
            dirtyStarts: Sr,
            dirtyEnds: Qr,
            order: Zr
          } = this;
          Zr.length = rr;
          for (let Ir = 0; Ir < rr; Ir++) Zr[Ir] = Ir;
          rr > 1 && Zr.sort(((rr, Qr) => Sr[rr] - Sr[Qr]));
          const Wr = this.mergeGap;
          let ar = Sr[Zr[0]],
            jr = Qr[Zr[0]];
          for (let Ir = 1; Ir < rr; Ir++) {
            const rr = Zr[Ir];
            Sr[rr] - jr <= Wr ? jr = Math.max(jr, Qr[rr]) : (this.send(ar, jr), ar = Sr[rr], jr = Qr[rr])
          }
          this.send(ar, jr), Sr.length = 0, Qr.length = 0
        }
        this.holding = !1
      }
      Bx() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const rr = this.freed;
        for (let Sr = 0; Sr < rr.length; Sr += 2) this.yh.free(rr[Sr] / Fj, rr[Sr + 1] / Fj);
        rr.length = 0
      }
      send(rr, Sr) {
        this.device.queue.writeBuffer(this.gpu, rr, this.bytes.buffer, rr, Sr - rr);
        for (const Qr of this.replaced) {
          const Zr = Math.min(Sr, Qr.size);
          Zr > rr && this.device.queue.writeBuffer(Qr, rr, this.bytes.buffer, rr, Zr - rr)
        }
      }
      markDirty(rr, Sr) {
        rr &= -4, Sr = Sr + 3 & -4, this.holding ? (this.dirtyStarts.push(rr), this.dirtyEnds.push(Sr)) : this.send(rr, Sr)
      }
      grow(rr) {
        const Sr = this.yh.sx,
          Qr = Math.max(2 * Sr, rr),
          Zr = new Uint8Array(Qr * Fj);
        Zr.set(this.bytes);
        const Wr = this.gpu;
        this.gpu = this.createGpu(Zr.byteLength), this.bytes = Zr, this.words = new Uint32Array(Zr.buffer), this.yh.grow(Qr), Wr && (this.replaced.push(Wr), this.onReplaced(Wr)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Sr * Fj)
      }
      createGpu(rr) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: rr,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function bj(rr) {
      return Array.isArray(rr) ? new Float32Array(rr) : rr
    }

    function Jj(rr, Sr, Qr, Zr, Wr) {
      const ar = or(Wr),
        jr = Math.min(Wr, Zr.byteLength);
      if (ar === jr && Zr.byteOffset % 4 === 0) return void rr.queue.writeBuffer(Sr, Qr, Zr.buffer, Zr.byteOffset, ar);
      const Ir = new Uint8Array(ar);
      Ir.set(new Uint8Array(Zr.buffer, Zr.byteOffset, jr)), rr.queue.writeBuffer(Sr, Qr, Ir)
    }

    function Dj(rr, Sr, Qr) {
      const Zr = "linear",
        Wr = "nearest";
      let ar = Wr,
        jr = Wr,
        Ir = "nearest",
        fr = !Sr;
      switch (rr) {
        case 11:
          ar = Zr, jr = Zr;
          break;
        case 3:
          ar = Zr, jr = Zr, Ir = Sr ? "linear" : "nearest";
          break;
        case 8:
          Ir = Sr ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          jr = Zr;
          break;
        case 6:
          jr = Zr, Ir = Sr ? "linear" : "nearest";
          break;
        case 7:
          jr = Zr, fr = !0;
          break;
        case 9:
          ar = Zr;
          break;
        case 10:
          ar = Zr, Ir = Sr ? "linear" : "nearest";
          break;
        case 2:
          ar = Zr, jr = Zr, Qr > 1 ? (Ir = "linear", fr = !1) : fr = !0;
          break;
        case 12:
          ar = Zr, fr = !0;
          break;
        default:
          fr = !0
      }
      return Qr > 1 && !fr ? {
        magFilter: Zr,
        minFilter: Zr,
        mipmapFilter: "linear",
        maxAnisotropy: Qr
      } : {
        magFilter: ar,
        minFilter: jr,
        mipmapFilter: Ir,
        ...fr ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function dj(rr) {
      return 0 === rr ? "clamp-to-edge" : 2 === rr ? "mirror-repeat" : "repeat"
    }
    class sj {
      constructor(rr, Sr) {
        let {
          vertexArena: Qr = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = rr, this.device = Sr, this.buffers = new WeakMap, this.K9 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, this.rebindWaiters = [], this.epoch = 0, this.liveUploads = new Set, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Qr ? this.createArena() : null
      }
      createArena() {
        return new oj(this.device, (rr => {
          var Sr;
          null === (Sr = this.onDestroy) || void 0 === Sr || Sr.call(this, rr), this.gpuBuffersVersion++
        }))
      }
      rebind(rr, Sr) {
        this.engine = rr, this.device = Sr, this.epoch++, this.buffers = new WeakMap, this.textures.clear(), this.samplers.clear(), this.atlasBindings = new WeakMap, this.atlasRebuilds = new WeakSet, this.arena &&= this.createArena(), this.pending = 0, this.gpuBuffersVersion++;
        for (const Qr of this.liveUploads) Qr.rebind();
        for (const Qr of this.rebindWaiters.splice(0)) Qr()
      }
      flushUploads() {
        var rr;
        null === (rr = this.arena) || void 0 === rr || rr.flush()
      }
      endUploadFrame() {
        var rr;
        null === (rr = this.arena) || void 0 === rr || rr.Bx()
      }
      vertexBufferCreated(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Qr ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(rr);
        const Wr = bj(Sr);
        rr.sx = Wr.byteLength, this.buffers.set(rr, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Qr && null !== this.arena,
          pending: Wr,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Zr
        })
      }
      vertexBufferUpdated(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        const Wr = this.buffers.get(rr);
        if (!Wr) return;
        const ar = bj(Sr),
          jr = void 0 === Zr ? ar.byteLength : Math.min(Zr, ar.byteLength);
        this.update(Wr, ar, Qr, jr)
      }
      vertexBufferFloatsUpdated(rr, Sr, Qr, Zr) {
        const Wr = this.buffers.get(rr);
        if (!Wr) return;
        const ar = Qr * Float32Array.BYTES_PER_ELEMENT,
          jr = (Zr - Qr) * Float32Array.BYTES_PER_ELEMENT;
        Wr.slot >= 0 && jr > 0 && ar + jr <= Wr.size ? this.writeSlot(Wr, ar, Sr, Sr.byteOffset + ar, jr, !1) : Wr.gpu && jr > 0 && ar + jr <= Wr.gpu.size ? this.device.queue.writeBuffer(Wr.gpu, ar, Sr.buffer, Sr.byteOffset + ar, jr) : this.update(Wr, Sr.subarray(Qr, Zr), ar, jr)
      }
      indexBufferCreated(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(rr);
        const Zr = function(rr) {
          if (rr instanceof Uint16Array || rr instanceof Uint32Array) return rr;
          for (let Sr = 0; Sr < rr.length; Sr++)
            if (rr[Sr] >= 65535) return new Uint32Array(rr);
          return new Uint16Array(rr)
        }(Sr);
        rr.is32Bits = 4 === Zr.BYTES_PER_ELEMENT, rr.sx = Zr.byteLength, this.buffers.set(rr, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Zr,
          ownsPending: Zr !== Sr,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Qr
        })
      }
      bufferDeleted(rr) {
        const Sr = this.buffers.get(rr);
        null !== Sr && void 0 !== Sr && Sr.gpu ? (this.destroyBuffer(Sr.gpu), this.gpuBuffersVersion++) : Sr && Sr.slot >= 0 && (this.arena.free(Sr.slot, Sr.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(rr)
      }
      update(rr, Sr, Qr, Zr) {
        if (rr.slot >= 0) this.updateSlot(rr, Sr, Qr, Zr);
        else if (rr.gpu) {
          if (Qr + or(Zr) > rr.gpu.size) {
            const Sr = this.device.createBuffer({
                label: rr.label,
                size: or(Math.max(2 * rr.gpu.size, Qr + Zr)),
                usage: rr.usage | GPUBufferUsage.COPY_SRC
              }),
              Wr = this.device.createCommandEncoder();
            Wr.copyBufferToBuffer(rr.gpu, 0, Sr, 0, rr.gpu.size), this.device.queue.submit([Wr.finish()]), this.destroyBuffer(rr.gpu), this.gpuBuffersVersion++, rr.gpu = Sr
          }
          Jj(this.device, rr.gpu, Qr, Sr, Zr)
        } else {
          const ar = new Uint8Array(Sr.buffer, Sr.byteOffset, Zr),
            jr = rr.pending;
          if (jr && rr.ownsPending && Qr + Zr <= jr.byteLength) new Uint8Array(jr.buffer, jr.byteOffset, jr.byteLength).set(ar, Qr);
          else if (jr && 0 === Qr && Zr === jr.byteLength && Sr.byteLength === Zr) rr.pending = Sr, rr.ownsPending = !1;
          else {
            var Wr;
            const Sr = new Uint8Array(Math.max(null !== (Wr = null === jr || void 0 === jr ? void 0 : jr.byteLength) && void 0 !== Wr ? Wr : 0, Qr + Zr));
            jr && Sr.set(new Uint8Array(jr.buffer, jr.byteOffset, jr.byteLength)), Sr.set(ar, Qr), rr.pending = Sr, rr.ownsPending = !0
          }
        }
      }
      updateSlot(rr, Sr, Qr, Zr) {
        const Wr = this.arena;
        Qr + or(Zr) > rr.size && (rr.size = or(Math.max(2 * rr.size, Qr + Zr)), Wr.growTo(rr.slot + rr.size), this.gpuBuffersVersion++), 0 === Zr ? this.writeSlot(rr, Qr, rI, 0, 4, !1) : this.writeSlot(rr, Qr, Sr, Sr.byteOffset, Zr, !0)
      }
      writeSlot(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Sr + (ar ? or(Wr) : Wr);
        jr > rr.slotBytes && this.moveSlot(rr, jr), this.arena.write(rr.slot + Sr, Qr, Zr, Wr, ar)
      }
      moveSlot(rr, Sr) {
        const Qr = this.arena,
          Zr = oj.slotBytes(Math.max(Sr, Math.min(2 * rr.slotBytes, rr.size))),
          Wr = Qr.allocate(Zr, null, rr.size);
        Qr.move(rr.slot, Wr, rr.slotBytes), Qr.free(rr.slot, rr.slotBytes), rr.slot = Wr, rr.slotBytes = Zr, this.gpuBuffersVersion++
      }
      cover(rr, Sr) {
        const Qr = this.buffers.get(rr);
        if (!Qr || Qr.slot < 0) return !1;
        const Zr = Math.min(Sr, Qr.size);
        return !(Zr <= Qr.slotBytes) && (this.moveSlot(Qr, Zr), !0)
      }
      destroyBuffer(rr) {
        var Sr;
        null === (Sr = this.onDestroy) || void 0 === Sr || Sr.call(this, rr), rr.destroy()
      }
      gpuBuffer(rr) {
        const Sr = this.buffers.get(rr);
        if (!Sr) return null;
        if (Sr.slot >= 0) return this.arena.buffer;
        if (Sr.arena && Sr.pending) {
          const rr = Sr.pending,
            Qr = this.arena;
          return Sr.size = or(rr.byteLength), Sr.slotBytes = oj.slotBytes(function(rr) {
            const Sr = new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength);
            let Qr = Sr.length;
            if (rr.byteOffset % 4 === 0) {
              for (; Qr % 4 !== 0 && 0 === Sr[Qr - 1];) Qr--;
              if (Qr % 4 === 0) {
                const Sr = new Uint32Array(rr.buffer, rr.byteOffset, Qr / 4);
                let Zr = Sr.length;
                for (; Zr > 0 && 0 === Sr[Zr - 1];) Zr--;
                Qr = 4 * Zr
              }
            }
            for (; Qr > 0 && 0 === Sr[Qr - 1];) Qr--;
            return Qr
          }(rr)), Sr.slot = Qr.allocate(Sr.slotBytes, rr, Sr.size), Sr.pending = null, Qr.buffer
        }
        if (!Sr.gpu && Sr.pending) {
          const rr = Sr.pending;
          Sr.gpu = this.device.createBuffer({
            label: Sr.label,
            size: or(rr.byteLength),
            usage: Sr.usage
          }), Jj(this.device, Sr.gpu, 0, rr, rr.byteLength), Sr.pending = null
        }
        return Sr.gpu
      }
      gpuOffset(rr) {
        var Sr, Qr;
        const Zr = null !== (Sr = null === (Qr = this.buffers.get(rr)) || void 0 === Qr ? void 0 : Qr.slot) && void 0 !== Sr ? Sr : -1;
        return Zr < 0 ? 0 : Zr
      }
      gpuEnd(rr) {
        var Sr, Qr;
        const Zr = this.buffers.get(rr);
        return Zr ? Zr.slot >= 0 ? Zr.slot + Zr.size : null !== (Sr = null === (Qr = Zr.gpu) || void 0 === Qr ? void 0 : Qr.size) && void 0 !== Sr ? Sr : 0 : 0
      }
      vertexInput(rr, Sr, Qr) {
        var Zr, Wr, ar, jr;
        return null !== (Zr = null !== (Wr = Qr && this.modelInput(Qr, Sr)) && void 0 !== Wr ? Wr : null === (ar = null !== (jr = this.K9.get(rr)) && void 0 !== jr ? jr : this.batchUploads.get(rr)) || void 0 === ar ? void 0 : ar.inputs[Sr]) && void 0 !== Zr ? Zr : null
      }
      modelInput(rr, Sr) {
        const Qr = this.geometrySlot(rr);
        let Zr = Qr.inputs.get(Sr);
        if (void 0 === Zr) {
          const Wr = rr.vertexAttributes.find((rr => rr.kind === Sr));
          Zr = Wr ? new US(this.modelKey(Qr, Wr.data, !1), Wr.offset, Wr.stride, Wr.components, !1, Wr.glType, Wr.isNormalized) : null, Qr.inputs.set(Sr, Zr)
        }
        return Zr
      }
      modelIndex(rr) {
        return rr.indexData && this.modelKey(this.geometrySlot(rr), rr.indexData, !0)
      }
      geometrySlot(rr) {
        var Sr;
        let Qr = rr.gpu[Lr.e.lite];
        if ((null === (Sr = Qr) || void 0 === Sr ? void 0 : Sr.epoch) !== this.epoch) {
          const Sr = new Map,
            Zr = () => {
              for (const rr of Sr.values()) this.bufferDeleted(rr)
            },
            Wr = rr => {
              const Qr = Sr.get(rr);
              Qr && this.vertexBufferUpdated(Qr, rr)
            };
          Qr = {
            keys: Sr,
            inputs: new Map,
            release: Zr,
            updated: Wr,
            epoch: this.epoch
          }, rr.gpu[Lr.e.lite] = Qr
        }
        return Qr
      }
      modelKey(rr, Sr, Qr) {
        let Zr = rr.keys.get(Sr);
        if (!Zr) {
          if (Qr) {
            const rr = {
              sx: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(rr, Sr, "model-indices"), Zr = rr
          } else Zr = {
            sx: 0
          }, this.vertexBufferCreated(Zr, Sr, !1, "model-vertices");
          rr.keys.set(Sr, Zr)
        }
        return Zr
      }
      indexFormat(rr) {
        return rr.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(rr, Sr) {
        --rr.refs > 0 || (this.releaseTexture(rr), ij(rr.images), null !== Sr && this.textures.delete(Sr))
      }
      load(rr, Sr) {
        const {
          epoch: Qr
        } = this, Zr = Sr.decoded = async function(rr) {
          if ("cube" === rr.kind) return async function(rr) {
            if (6 !== rr.length) throw new Error(`${rr.length} files where six faces were expected`);
            const Sr = await wj(rr.map((rr => ur(rr)))),
              Qr = Sr[0].width;
            return wj(Sr.map((async rr => {
              if (rr.width === Qr && rr.height === Qr) return rr;
              try {
                return await createImageBitmap(rr, {
                  ...dr,
                  resizeWidth: Qr,
                  resizeHeight: Qr
                })
              } finally {
                rr.close()
              }
            })))
          }(rr.files);
          if ("data" === rr.kind && rr.data) return [await createImageBitmap(new Blob([rr.data]), dr)];
          return [await ur(uj(rr))]
        }(rr.source).then((rr => {
          0 === Sr.refs || Qr !== this.epoch ? ij(rr) : Sr.images = rr
        }));
        this.track(Sr, uj(rr.source), Zr, (() => {
          Sr.wanted && !Sr.failed && Sr.refs > 0 && this.upload(rr, Sr)
        }))
      }
      canvasUpdated(rr, Sr, Qr) {
        const {
          state: Zr
        } = this.textureSlot(rr);
        Zr.dynamicSource = {
          invertY: Sr,
          premultiplied: Qr
        }, Zr.dynamic && this.pushDynamic(rr.source, Zr)
      }
      async atlasArrays(rr) {
        const {
          device: Sr,
          epoch: Qr
        } = this;
        let Zr;
        try {
          Zr = await SS(Sr, rr)
        } catch (ar) {
          if (Qr === this.epoch) {
            if (!ES(Sr)) throw ar;
            await new Promise((rr => {
              this.rebindWaiters.push(rr)
            }))
          }
          return this.atlasArrays(rr)
        }
        if (Zr.forEach(((Sr, Qr) => {
            this.atlasSources.has(Sr) || this.atlasSources.set(Sr, {
              sources: rr,
              index: Qr,
              stride: Zr[0].layers
            })
          })), Qr !== this.epoch) return Zr;
        const Wr = (0, Cj.d)(this.engine, {
          magFilter: "nearest",
          minFilter: "nearest",
          mipmapFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat"
        });
        for (const jr of Zr) this.atlasBindings.has(jr) || this.atlasBindings.set(jr, {
          view: jr.texture.createView({
            dimension: "2d-array"
          }),
          sampler: Wr
        });
        return Zr
      }
      boundTexture(rr) {
        const Sr = this.atlasBindings.get(rr);
        if (Sr) return Sr;
        const Qr = this.atlasSources.get(rr);
        if (Qr) return this.rebuildAtlas(rr, Qr), null;
        const Zr = rr;
        if (Zr.released) return null;
        const Wr = this.textureSlot(Zr, !0),
          {
            state: ar
          } = Wr;
        if (!ar.view && (ar.wanted = !0, ar.loading || ar.failed || this.upload(Zr, ar), !ar.view)) return null;
        const jr = this.chosenSampler(Zr, Wr),
          Ir = Wr.bound;
        return Ir && Ir.view === ar.view && Ir.sampler === jr ? Ir : (Wr.bound = {
          view: ar.view,
          sampler: jr
        }, Wr.bound)
      }
      rebuildAtlas(rr, Sr) {
        let {
          sources: Qr,
          index: Zr,
          stride: Wr
        } = Sr;
        if (this.atlasRebuilds.has(rr)) return;
        this.atlasRebuilds.add(rr);
        const {
          epoch: ar
        } = this;
        this.atlasArrays(Qr).then((Sr => {
          Sr[0].layers === Wr && Sr[Zr] ? ar === this.epoch && this.atlasBindings.set(rr, this.atlasBindings.get(Sr[Zr])) : console.error(`Lite: the new device splits the atlas ${sr(Qr.urls[0])} into other arrays than its materials read`)
        }), (rr => {
          console.error(`Lite: could not build the atlas ${sr(Qr.urls[0])} again on a new device`, rr)
        }))
      }
      textureLoaded(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = this.heldSlot(rr)) || void 0 === Qr ? void 0 : Qr.state.decoded) && void 0 !== Sr ? Sr : null
      }
      textureFailed(rr) {
        var Sr;
        return !0 === (null === (Sr = this.heldSlot(rr)) || void 0 === Sr ? void 0 : Sr.state.failed)
      }
      heldSlot(rr) {
        const Sr = rr.gpu[Lr.e.lite];
        return (null === Sr || void 0 === Sr ? void 0 : Sr.epoch) === this.epoch ? Sr : void 0
      }
      chosenSampler(rr, Sr) {
        const {
          samplingMode: Qr,
          wrapU: Zr,
          wrapV: Wr
        } = rr.sampler, ar = Sr.state.hasMips, jr = function(rr, Sr) {
          const {
            bilinear: Qr,
            trilinear: Zr
          } = Lr.g;
          return !Sr && rr !== Qr || 11 !== rr && rr !== Zr && rr !== Qr ? 1 : 4
        }(Qr, ar), Ir = Sr.sampler;
        if (Ir && Ir.samplingMode === Qr && Ir.hasMips === ar && Ir.anisotropy === jr && Ir.wrapU === Zr && Ir.wrapV === Wr) return Ir.sampler;
        const fr = this.samplerFor(Qr, ar, jr, Zr, Wr);
        return Sr.sampler = {
          samplingMode: Qr,
          hasMips: ar,
          anisotropy: jr,
          wrapU: Zr,
          wrapV: Wr,
          sampler: fr
        }, fr
      }
      releaseTexture(rr) {
        var Sr, Qr;
        rr.view && (null === (Qr = this.onDestroy) || void 0 === Qr || Qr.call(this, rr.view));
        null === (Sr = rr.destroy) || void 0 === Sr || Sr.call(rr)
      }
      textureSlot(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = rr.gpu[Lr.e.lite];
        if ((null === Qr || void 0 === Qr ? void 0 : Qr.epoch) === this.epoch) return Qr;
        const Zr = function(rr) {
          let {
            source: Sr,
            sampler: Qr
          } = rr;
          return "canvas" === Sr.kind ? null : `${Sr.kind}|${uj(Sr)}|${Qr.noMipmap}|${Qr.samplingMode}|${Qr.invertY}`
        }(rr);
        let Wr = null === Zr ? void 0 : this.textures.get(Zr);
        var ar;
        Wr || (Wr = {
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
          dynamicSource: null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.state.dynamicSource) && void 0 !== ar ? ar : null
        }, null !== Zr && (this.textures.set(Zr, Wr), this.load(rr, Wr), Sr && !Qr && this.firstBindDecodes++));
        Wr.refs++;
        const jr = Wr,
          {
            epoch: Ir
          } = this,
          fr = {
            state: Wr,
            bound: null,
            sampler: null,
            release: () => {
              Ir === this.epoch && this.releaseSlot(jr, Zr)
            },
            epoch: Ir
          };
        return rr.gpu[Lr.e.lite] = fr, fr
      }
      samplerFor(rr, Sr, Qr, Zr, Wr) {
        const ar = `${rr}|${Sr}|${Qr}|${Zr}|${Wr}`;
        let jr = this.samplers.get(ar);
        if (!jr) {
          const Ir = {
            ...Dj(rr, Sr, Qr),
            addressModeU: dj(Zr),
            addressModeV: dj(Wr)
          };
          jr = (0, Cj.d)(this.engine, Ir), this.samplers.set(ar, jr)
        }
        return jr
      }
      upload(rr, Sr) {
        const {
          source: Qr,
          sampler: Zr
        } = rr;
        Sr.hasMips = !Zr.noMipmap, "canvas" === Qr.kind ? this.createDynamic(Qr, Sr) : "cube" === Qr.kind ? this.uploadCube(Sr, Qr.luminance) : this.uploadImage(Sr, !0 === Zr.invertY, Qr.url)
      }
      uploadImage(rr, Sr, Qr) {
        const [Zr] = rr.images;
        rr.images = null;
        const {
          epoch: Wr
        } = this, ar = (0, Mj.b)(this.engine, Zr, {
          mipMaps: rr.hasMips,
          invertY: Sr,
          srgb: !1
        }).then((Sr => {
          Zr.close(), 0 !== rr.refs && Wr === this.epoch ? (rr.view = Sr.view, rr.destroy = Sr.texture.destroy.bind(Sr.texture)) : Sr.texture.destroy()
        }));
        this.track(rr, Qr, ar)
      }
      track(rr, Sr, Qr, Zr) {
        const {
          epoch: Wr
        } = this;
        rr.loading = !0, this.pending++, Qr.catch((Qr => {
          Wr === this.epoch && (rr.failed = !0, console.warn(`Lite: could not load texture ${sr(Sr)}`, Qr))
        })).finally((() => {
          Wr === this.epoch && (rr.loading = !1, this.pending--, null === Zr || void 0 === Zr || Zr())
        }))
      }
      uploadCube(rr, Sr) {
        const Qr = rr.images;
        rr.images = null;
        const Zr = Vj(this.engine, this.device, Qr, (0, Lr.s)(Sr), rr.hasMips);
        rr.view = Zr.createView({
          dimension: "cube"
        }), rr.destroy = () => {
          Zr.destroy()
        }
      }
      createDynamic(rr, Sr) {
        const {
          canvas: Qr
        } = rr, Zr = (0, Gj.c)(this.engine, Math.max(1, Qr.width), Math.max(1, Qr.height), {
          mipMaps: Sr.hasMips,
          srgb: !1
        });
        Sr.dynamic = Zr, Sr.view = Zr.view, Sr.destroy = () => {
          Zr.texture.destroy()
        }, this.pushDynamic(rr, Sr)
      }
      pushDynamic(rr, Sr) {
        const Qr = Sr.dynamicSource,
          Zr = Sr.dynamic,
          {
            canvas: Wr
          } = rr;
        if (Qr && Zr && 0 !== Wr.width && 0 !== Wr.height) return Wr.width !== Zr.width || Wr.height !== Zr.height ? (this.releaseTexture(Sr), Sr.dynamic = null, Sr.view = null, void this.createDynamic(rr, Sr)) : void(0, Gj.d)(this.engine, Zr, Wr, {
          invertY: Qr.invertY,
          premultiplyAlpha: Qr.premultiplied
        })
      }
    }

    function uj(rr) {
      return "cube" === rr.kind ? rr.rootUrl : "canvas" === rr.kind ? "canvas" : rr.url
    }
    const rI = new Uint8Array(4);
    var SI = Qr(40327);

    function QI(rr) {
      const Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      rr._colorAttachment.storeOp = rr._targetSignature._sampleCount > 1 ? Sr : "store";
      const Qr = rr._renderPassDescriptor.depthStencilAttachment;
      Qr && (Qr.depthStoreOp = Sr, Qr.stencilStoreOp && (Qr.stencilStoreOp = Sr))
    }
    var ZI = Qr(39264),
      WI = Qr(38795),
      aI = Qr(38869),
      jI = Qr(41284);
    const II = new Float64Array([1, 1, 1]),
      fI = new Float64Array([0, 1, 0]),
      EI = new Float64Array(4),
      pI = new Float32Array(16),
      xI = new Float64Array(3),
      mI = new Float64Array(4);

    function NI(rr, Sr, Qr) {
      rr.fov = Sr.fov, rr.near = Sr.near, rr.far = Sr.far, rr.renderWidth = Qr.renderWidth, rr.renderHeight = Qr.renderHeight, (0, aI.p)(Sr.holderRotation, 0, EI, 0), (0, aI.c)(II, 0, EI, 0, Sr.holderPosition, 0, pI);
      const Zr = Sr.S_;
      xI[0] = Zr[0], xI[1] = Zr[1], xI[2] = Zr[2] + 1;
      const Wr = rr.viewMatrix;
      (0, aI.k)(Zr, xI, fI, Wr), (0, aI.i)(Wr, 0, Wr), (0, aI.l)(Wr, pI, 0, Wr), (0, aI.i)(Wr, 0, Wr);
      const ar = rr.worldMatrix;
      (0, aI.i)(Wr, 0, ar), rr.eye[0] = ar[12], rr.eye[1] = ar[13], rr.eye[2] = ar[14], mI[0] = rr.fov, mI[1] = rr.renderWidth / rr.renderHeight, mI[2] = rr.near, mI[3] = rr.far, (0, aI.m)(mI, rr.projectionMatrix), (0, aI.l)(Wr, rr.projectionMatrix, 0, rr.viewProjectionMatrix), (0, jI.e)(rr.viewProjectionMatrix, rr.frustum)
    }

    function UI(rr, Sr) {
      let Qr = rr.frustumPlanes;
      Qr || (Qr = rr.frustumPlanes = Array.from({
        length: 6
      }, (() => new ZI.d(0, 0, 0, 0))));
      for (let Zr = 0; Zr < 6; Zr++) {
        const rr = Qr[Zr].normal;
        rr._x = Sr[4 * Zr], rr._y = Sr[4 * Zr + 1], rr._z = Sr[4 * Zr + 2], rr._isDirty = !0, Qr[Zr].d = Sr[4 * Zr + 3]
      }
    }

    function tI(rr, Sr) {
      const Qr = Sr.clearColor;
      rr.clearColour[0] = Qr.r, rr.clearColour[1] = Qr.g, rr.clearColour[2] = Qr.b, rr.clearColour[3] = Qr.a;
      const Zr = Sr.ambientColor;
      rr.ambientColour[0] = Zr.r, rr.ambientColour[1] = Zr.g, rr.ambientColour[2] = Zr.b, rr.animationRatio = Sr.animationRatio, rr.frameId = Sr.frameId, rr.version++
    }

    function hI(rr) {
      const Sr = rr.model.view;
      return Sr.animTick = (0, WI.f)(), Sr.timeMs = performance.now(), tI(Sr, rr.Dt), rr.model.update(Sr.frameId), Sr
    }

    function zI(rr) {
      const Sr = rr.Dt,
        {
          view: Qr,
          r_: Zr
        } = rr.model;
      return NI(Qr, Zr, Sr.MU()), Sr.onBeforeRenderObservable.notifyObservers(Sr), UI(Sr, Qr.frustum), Sr.onBeforeCameraRenderObservable.notifyObservers(Sr.activeCamera), hI(rr)
    }
    var YI = Qr(38833),
      nI = Qr(38947),
      eI = Qr(39319);

    function KI(rr) {
      var Sr, Qr;
      const Zr = (0, vr.Y)(rr);
      if (!Zr || Zr.diffuseTexture && (0, eI.i)(rr)) return null;
      const Wr = null === (Sr = (0, vr.v)(Zr, Br.j.name)) || void 0 === Sr ? void 0 : Sr.state,
        ar = null === (Qr = (0, vr.v)(Zr, sa.c.name)) || void 0 === Qr ? void 0 : Qr.state,
        jr = new Float32Array(16);
      return function(rr, Sr, Qr, Zr) {
        var Wr, ar;
        const jr = gZ;
        Zr.set(rr.diffuseColor, jr.diffuse), Zr[jr.diffuse + 3] = rr.alpha, Zr.set(rr.ambientColor, jr.ambientAndCutoff), Zr[jr.ambientAndCutoff + 3] = rr.alphaCutOff, Zr.set(rr.emissiveColor, jr.emissiveAndLevel), Zr[jr.emissiveAndLevel + 3] = null !== (Wr = null === (ar = rr.diffuseTexture) || void 0 === ar ? void 0 : ar.level) && void 0 !== Wr ? Wr : 1, null !== Sr && void 0 !== Sr && Sr.animDataPerTex ? (Zr[jr.anim + 1] = WI.b, Zr[jr.anim + 2] = Sr.animDataPerTex.length / 3 - 1) : Qr && (Zr[jr.anim + 1] = Qr.numAnimStates, Zr[jr.anim + 2] = Qr.ticksPerAnimState)
      }(Zr, Wr, ar, jr), {
        model: Zr,
        atlas: Wr,
        texture: Wr ? "atlas" : Zr.diffuseTexture ? "single" : "none",
        animated: Wr ? !!Wr.animDataPerTex : !!ar,
        liquid: (0, eI.l)(rr),
        customRenderMat: (0, eI.i)(rr),
        uniformData: jr
      }
    }
    var yI = Qr(3973);
    class BI {
      constructor(rr) {
        this.units = rr, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var rr;
        this.buffer.destroy(), null === (rr = this.twin) || void 0 === rr || rr.destroy()
      }
    }
    class TI {
      constructor(rr, Sr) {
        this.arena = rr, this.yh = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.yh = new cj(Sr);
        const Qr = new BI(Sr);
        Qr.buffer = this.createBuffer(Qr, !1), this.backings.push(Qr), this.refresh()
      }
      get sx() {
        return this.yh.sx
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
        let rr = 0;
        for (const Sr of this.backings) rr += Sr.units * (this.arena.unitBytes + (Sr.twin ? this.arena.twinUnitBytes : 0));
        return rr
      }
      holds(rr) {
        return rr.start + rr.length <= this.usable
      }
      lost(rr) {
        return this.dropped || rr.start + rr.length > this.sx
      }
      write(rr, Sr) {
        const {
          device: Qr,
          unitBytes: Zr
        } = this.arena;
        for (const Wr of this.backings) {
          const ar = (Wr.units - rr.start) * Zr;
          ar > 0 && Qr.queue.writeBuffer(Wr.buffer, rr.start * Zr, Sr, 0, Math.min(Sr.byteLength, ar))
        }
      }
      writeLight(rr, Sr) {
        const {
          device: Qr,
          twinUnitBytes: Zr,
          verticesPerUnit: Wr
        } = this.arena, {
          light: ar,
          count: jr
        } = this.arena.twinLight(Sr, Math.min(Sr.length, rr.length * Wr));
        for (const Ir of this.backings) {
          Ir.twin || (Ir.twin = this.createBuffer(Ir, !0));
          const Sr = (Ir.units - rr.start) * Wr;
          Sr > 0 && Qr.queue.writeBuffer(Ir.twin, rr.start * Zr, ar, 0, Math.min(jr, Sr))
        }
      }
      grow(rr) {
        this.arena.assertNotDrawing();
        const {
          device: Sr,
          unitBytes: Qr,
          label: Zr
        } = this.arena, Wr = this.backings[this.backings.length - 1], ar = new BI(rr), jr = Sr.createCommandEncoder({
          label: `${Zr}-grow`
        });
        ar.buffer = this.createBuffer(ar, !1), jr.copyBufferToBuffer(Wr.buffer, 0, ar.buffer, 0, Wr.units * Qr), Wr.twin && (ar.twin = this.createBuffer(ar, !0), jr.copyBufferToBuffer(Wr.twin, 0, ar.twin, 0, Wr.units * this.arena.twinUnitBytes)), Sr.queue.submit([jr.finish()]), this.backings.push(ar), this.yh.grow(rr)
      }
      retire() {
        this.dropped = !0, this.refresh()
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const rr of this.backings) rr.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(rr, Sr) {
        const {
          device: Qr,
          unitBytes: Zr,
          twinUnitBytes: Wr,
          usage: ar,
          label: jr
        } = this.arena;
        Qr.pushErrorScope("out-of-memory");
        const Ir = Qr.createBuffer({
          label: Sr ? `${jr}-light` : jr,
          size: rr.units * (Sr ? Wr : Zr),
          usage: (Sr ? this.arena.twinUsage : ar) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Qr.popErrorScope().then((Qr => {
          this.arena.awaitingVerdict--, this.settle(rr, Sr, !Qr, !0)
        }), (Qr => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${jr} buffer, taken as failed: ${String(Qr)}`), this.settle(rr, Sr, !1, !1)
        })), Ir
      }
      settle(rr, Sr, Qr, Zr) {
        const Wr = this.backings.indexOf(rr);
        if (!(this.dropped || Wr < 0)) {
          if (!Qr) {
            if (Zr && this.arena.ranOutOfMemory(rr.units, rr.units * (Sr ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Wr) return void this.drop();
            for (const rr of this.backings.splice(Wr)) rr.destroy();
            return this.yh.truncate(this.backings[Wr - 1].units), this.growable = !1, void this.promote()
          }
          Sr ? rr.twinReady = !0 : (rr.bufferReady = !0, this.arena.allocatedBuffer(rr.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: rr
        } = this;
        let Sr = 0;
        for (; Sr + 1 < rr.length && rr[Sr].ready && rr[Sr + 1].ready;) Sr++;
        for (const Qr of rr.splice(0, Sr)) Qr.destroy();
        this.refresh()
      }
      refresh() {
        const rr = this.backings[0];
        this.buffer = rr.buffer, this.twin = rr.twinReady ? rr.twin : null, this.usable = !this.dropped && rr.bufferReady ? rr.units : 0
      }
    }
    class vI {
      constructor(rr, Sr, Qr, Zr) {
        let {
          verticesPerUnit: Wr = 1,
          twinUsage: ar = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = rr, this.unitBytes = Sr, this.usage = Qr, this.label = Zr, this.pages = [], this.yx = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, HS.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Sr % 4 !== 0) throw new Error(`${Zr}: ${Sr}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Wr, this.twinUsage = ar, this.twinValueBytes = Wr > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Wr
      }
      twinLight(rr, Sr) {
        if (4 === this.twinValueBytes) return this.widened.length < Sr && (this.widened = new Float32Array(Math.max(Sr, 2 * this.widened.length))), this.widened.set(rr.subarray(0, Sr)), {
          light: this.widened,
          count: Sr
        };
        const Qr = Sr % this.verticesPerUnit;
        if (0 === Qr) return {
          light: rr,
          count: Sr
        };
        const Zr = Sr - Qr + this.verticesPerUnit;
        return this.padded.length < Zr && (this.padded = new Uint16Array(Math.max(Zr, 2 * this.padded.length))), this.padded.set(rr.subarray(0, Sr)), this.padded.fill(0, Sr, Zr), {
          light: this.padded,
          count: Zr
        }
      }
      allocate(rr) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), rr > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Wr of this.pages) {
          const Sr = Wr.yh.allocate(rr);
          if (Sr >= 0) return {
            page: Wr,
            start: Sr,
            length: rr
          }
        }
        const Sr = this.pages[this.pages.length - 1];
        if (null !== Sr && void 0 !== Sr && Sr.canGrow) {
          const Qr = Math.min(this.ceiling, Math.max(2 * Sr.sx, Sr.sx + rr));
          if (Qr - Sr.sx >= rr) return Sr.grow(Qr), {
            page: Sr,
            start: Sr.yh.allocate(rr),
            length: rr
          }
        }
        Sr && Sr !== this.pages[0] && 0 === Sr.yh.used && Sr.drop();
        const Qr = Math.floor(1048576 / this.unitBytes),
          Zr = new TI(this, Math.max(rr, Math.min(this.ceiling, Qr)));
        return this.pages.push(Zr), {
          page: Zr,
          start: Zr.yh.allocate(rr),
          length: rr
        }
      }
      free(rr) {
        this.assertNotDrawing();
        const {
          page: Sr
        } = rr;
        Sr.yh.free(rr.start, rr.length), 0 === Sr.yh.used && Sr !== this.pages[0] && Sr !== this.pages[this.pages.length - 1] && Sr.drop()
      }
      retire() {
        for (const rr of this.pages) rr.retire()
      }
      remove(rr) {
        const Sr = this.pages.indexOf(rr);
        Sr >= 0 && this.pages.splice(Sr, 1)
      }
      ranOutOfMemory(rr, Sr) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Sr}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, rr), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, rr) / 2));
        const Qr = performance.now();
        Qr >= this.shortageUntil && (this.forgetFailedAt = Qr + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Qr + 1e3)
      }
      allocatedBuffer(rr) {
        rr >= this.failed && (this.failed = 1 / 0);
        const Sr = Math.min(2 * rr, Math.floor((rr + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Sr))
      }
      stats() {
        let rr = 0,
          Sr = 0,
          Qr = 0,
          Zr = 0;
        for (const Wr of this.pages) rr += Wr.sx, Sr += Wr.yh.used, Qr += Wr.hasTwin ? Wr.sx * this.twinUnitBytes : 0, Zr += Wr.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: rr * this.unitBytes,
          usedBytes: Sr * this.unitBytes,
          twinBytes: Qr,
          allocatedBytes: Zr
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: rr,
          maxStorageBufferBindingSize: Sr
        } = this.device.limits;
        let Qr = Math.floor(Math.min(67108864, rr) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Qr = Math.min(Qr, Math.floor(Sr / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Qr = Math.min(Qr, Math.floor(Sr / this.twinUnitBytes))), Qr
      }
    }
    const OI = 16383;

    function LI(rr, Sr, Qr, Zr, Wr) {
      let ar = 0;
      for (let jr = Qr; jr < Zr; jr += OI) rr.drawIndexed(6 * Math.min(OI, Zr - jr), 1, 0, Sr + 4 * jr, Wr), ar++;
      return ar
    }
    class lI {
      constructor(rr, Sr) {
        this.recordsGroup = Sr, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Qr = bS.f.strideWithoutAtlas;
        this.vertexArena = new vI(rr, Qr, GPUBufferUsage.VERTEX, `terrain-vertices-${Qr}`), this.quadArena = new vI(rr, nI.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Zr = (0, JS.f)(new Uint16Array(98298), OI);
        this.quadPattern = rr.createBuffer({
          label: "terrain-quad-pattern",
          size: Zr.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), rr.queue.writeBuffer(this.quadPattern, 0, Zr)
      }
      retire() {
        this.vertexArena.retire(), this.quadArena.retire()
      }
      set(rr, Sr) {
        const Qr = Sr.packedVertices,
          Zr = Qr ? this.quadArena.allocate(rr.faceCount) : this.vertexArena.allocate(rr.vertexCount);
        if (!Zr) return !1;
        rr.vertices = Zr;
        const Wr = Qr ? new Uint8Array(Qr.buffer, Qr.byteOffset, Qr.byteLength) : new Uint8Array(Sr.vertices);
        return Zr.page.write(Zr, Wr), !0
      }
      setLight(rr, Sr) {
        const {
          vertices: Qr
        } = rr;
        Qr && 0 !== Sr.length && Qr.page.live && (Sr.length < rr.vertexCount ? Qr.page.arena.warnOnce("shortLight", `a part's ${Sr.length} light values are fewer than its ${rr.vertexCount} vertices, so its light is left as it was`) : (Qr.page.writeLight(Qr, Sr), rr.lit = !0))
      }
      lightFullSky(rr, Sr) {
        this.fullSky.length < Sr && (this.fullSky = new Uint16Array(Math.max(Sr, 4096)).fill(yI.l));
        for (const Qr of rr) {
          const rr = Qr.vertices;
          rr.page.live && (rr.page.writeLight(rr, this.fullSky), Qr.lit = !0)
        }
      }
      backed(rr) {
        const {
          vertices: Sr
        } = rr;
        return !!Sr && Sr.page.holds(Sr)
      }
      lost(rr) {
        const {
          vertices: Sr
        } = rr;
        return !!Sr && Sr.page.lost(Sr)
      }
      release(rr) {
        rr.vertices && rr.vertices.page.arena.free(rr.vertices), rr.vertices = null, rr.lit = !1
      }
      setDrawing(rr) {
        this.forgetBound()
      }
      draw(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Sr.faceCount;
        const ar = Sr.vertices,
          jr = ar.page,
          Ir = Qr ? jr.twin : null;
        if (!jr.holds(ar) || Qr && !Ir) return 0;
        const {
          verticesPerUnit: fr
        } = jr.arena;
        let Er = ar.start * fr;
        this.boundPattern || (rr.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const pr = Zr + Wr;
        if (fr > 1) return jr.buffer === this.boundRecords && Ir === this.boundRecordsLight || (rr.setBindGroup(1, this.recordsGroup(jr.buffer, Ir)), this.boundRecords = jr.buffer, this.boundRecordsLight = Ir), LI(rr, Er, Zr, pr, Sr.slot);
        jr.buffer !== this.boundVertices && (rr.setVertexBuffer(0, jr.buffer), this.boundVertices = jr.buffer), Ir && Ir !== this.boundLight && (rr.setVertexBuffer(1, Ir), this.boundLight = Ir);
        const xr = Sr.faceCount;
        return pr <= xr ? LI(rr, Er, Zr, pr, Sr.slot) : LI(rr, Er, Zr, xr, Sr.slot) + LI(rr, Er, Math.max(Zr, xr) - xr, pr - xr, Sr.slot)
      }
      get buffersAwaitingVerdict() {
        let rr = 0;
        for (const Sr of this.arenas()) rr += Sr.awaitingVerdict;
        return rr
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class XI {
      constructor(rr, Sr, Qr, Zr) {
        this.device = rr, this.splitBefore = Sr, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = rr.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Wr = rr.createShaderModule({
          label: "scene-depth-copy",
          code: (ar = Qr._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ar?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var ar;
        rr.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Wr,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Wr,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((rr => {
          this.pipeline = rr, this.building = !1
        }), (rr => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", rr)
        })), Qr._executeWithTransmission = () => this.execute(Qr, Zr)
      }
      get compiling() {
        return this.building
      }
      setWanted(rr) {
        this.wanted = rr
      }
      setPlanes(rr, Sr) {
        rr === this.near && Sr === this.far || (this.near = rr, this.far = Sr, this.unproject[0] = rr / (Sr - rr), this.unproject[1] = Sr * rr / (Sr - rr), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.copy) || void 0 === Sr ? void 0 : Sr.view) && void 0 !== rr ? rr : null
      }
      execute(rr, Sr) {
        var Qr;
        null === (Qr = this.retired) || void 0 === Qr || Qr.destroy(), this.retired = null;
        const Zr = yS(Sr),
          Wr = rr._transparentBindings,
          ar = this.wanted && this.pipeline ? this.splitIndex(Wr) : -1,
          jr = rr._colorAttachment,
          Ir = jr.resolveTarget;
        ar >= 0 && (jr.resolveTarget = void 0, QI(rr, !0));
        let fr = Zr.beginRenderPass(rr._renderPassDescriptor);
        fr.setBindGroup(0, rr._sceneBG);
        let Er = this.drawList(fr, Sr, rr._opaqueBindings, 0, rr._opaqueBindings.length);
        if (Er += this.drawList(fr, Sr, rr._directBindings, 0, rr._directBindings.length), Er += this.drawList(fr, Sr, Wr, 0, ar >= 0 ? ar : Wr.length), fr.end(), ar < 0) return Er;
        QI(rr);
        const pr = rr._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: xr,
            stencilLoadOp: mr
          } = pr,
          Nr = jr.loadOp;
        jr.resolveTarget = Ir;
        try {
          this.copyDepth(Zr, rr), jr.loadOp = "load", pr.depthLoadOp = "load", mr && (pr.stencilLoadOp = "load"), fr = Zr.beginRenderPass(rr._renderPassDescriptor), fr.setBindGroup(0, rr._sceneBG), Er += this.drawList(fr, Sr, Wr, ar, Wr.length), fr.end()
        } finally {
          jr.loadOp = Nr, pr.depthLoadOp = xr, pr.stencilLoadOp = mr
        }
        return Er
      }
      splitIndex(rr) {
        for (let Sr = 0; Sr < rr.length; Sr++)
          if (rr[Sr].renderable === this.splitBefore) return Sr;
        return -1
      }
      drawList(rr, Sr, Qr, Zr, Wr) {
        let ar = null,
          jr = 0;
        for (let Ir = Zr; Ir < Wr; Ir++) {
          const Zr = Qr[Ir],
            Wr = Zr.renderable.mesh;
          Wr && !1 === Wr.visible || (Zr.pipeline !== ar && (rr.setPipeline(Zr.pipeline), ar = Zr.pipeline), jr += Zr.draw(rr, Sr))
        }
        return jr
      }
      copyDepth(rr, Sr) {
        var Qr, Zr;
        const Wr = (null !== (Qr = Sr._config.depth) && void 0 !== Qr ? Qr : Sr._config.rt)._depthTexture,
          ar = (null === (Zr = this.copy) || void 0 === Zr ? void 0 : Zr.source) === Wr ? this.copy : this.remakeCopy(Wr),
          jr = rr.beginRenderPass(ar.pass);
        jr.setPipeline(this.pipeline), jr.setBindGroup(0, ar.bindGroup), jr.draw(3), jr.end()
      }
      remakeCopy(rr) {
        var Sr, Qr;
        this.retired = null !== (Sr = null === (Qr = this.copy) || void 0 === Qr ? void 0 : Qr.texture) && void 0 !== Sr ? Sr : null;
        const Zr = this.device.createTexture({
            label: "scene-depth",
            size: [rr.width, rr.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Wr = Zr.createView(),
          ar = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: rr.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          jr = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Wr,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: rr,
          texture: Zr,
          view: Wr,
          bindGroup: ar,
          pass: jr
        }, this.copy
      }
    }
    const PI = "rgba8unorm";

    function HI(rr) {
      return rr ? 15 : 1
    }
    class qI {
      constructor(rr, Sr, Qr, Zr) {
        this.device = rr, this.terrain = Zr, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Sr._targetSignature._sampleCount > 1, this.cameraBuffer = rr.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = rr.createBindGroupLayout({
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
        const Wr = rr.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = rr.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Wr,
          entries: []
        });
        const ar = rr.createShaderModule({
          label: "sun-shadow-mask",
          code: (jr = this.edge, `${(0,DS.x)()}${IZ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${jr?DQ:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${HI(jr)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${jr?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var jr;
        rr.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: rr.createPipelineLayout({
            bindGroupLayouts: [this.layout, Wr, Wr, wa(rr, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: ar,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: ar,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((rr => {
          this.pipeline = rr, this.building = !1
        }), (rr => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", rr)
        }));
        const Ir = Sr._executeWithTransmission;
        Sr._executeWithTransmission = rr => this.execute(Sr, Qr, (() => Ir ? Ir(rr) : function(rr, Sr) {
          const Qr = yS(Sr).beginRenderPass(rr._renderPassDescriptor);
          Qr.setBindGroup(0, rr._sceneBG);
          let Zr = RI(Qr, Sr, rr._opaqueBindings);
          return Zr += RI(Qr, Sr, rr._directBindings), Zr += RI(Qr, Sr, rr._transparentBindings), Qr.end(), Zr
        }(Sr, Qr)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.targets) || void 0 === Sr ? void 0 : Sr.maskView) && void 0 !== rr ? rr : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(rr) {
        ! function(rr, Sr) {
          const Qr = rr.worldMatrix,
            Zr = rr.projectionMatrix,
            Wr = 1 / Zr[0],
            ar = 1 / Zr[5],
            jr = rr.far * rr.near / (rr.far - rr.near);
          Sr[0] = rr.eye[0], Sr[1] = rr.eye[1], Sr[2] = rr.eye[2], Sr[3] = 2 ** -23 / jr, Sr[4] = Qr[0] * Wr, Sr[5] = Qr[1] * Wr, Sr[6] = Qr[2] * Wr, Sr[7] = jr, Sr[8] = Qr[4] * ar, Sr[9] = Qr[5] * ar, Sr[10] = Qr[6] * ar, Sr[11] = rr.near / (rr.far - rr.near), Sr[12] = Qr[8], Sr[13] = Qr[9], Sr[14] = Qr[10], Sr[15] = 0
        }(rr, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(rr, Sr, Qr) {
        if (this.retire(), !this.terrain.readsMask) return Qr();
        const Zr = this.targetsFor(rr),
          Wr = yS(Sr),
          ar = rr._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Zr.prepass.depthStencilAttachment.view = ar.view);
        const jr = this.terrain.drawPrepass(Wr, Zr.prepass, rr._sceneBG);
        if (0 === jr) return Qr();
        if (this.trace(Wr, Zr), this.edge) return jr + 1 + Qr();
        const {
          depthLoadOp: Ir,
          stencilLoadOp: fr
        } = ar;
        ar.depthLoadOp = "load", fr && (ar.stencilLoadOp = "load");
        try {
          return jr + 1 + Qr()
        } finally {
          ar.depthLoadOp = Ir, ar.stencilLoadOp = fr
        }
      }
      trace(rr, Sr) {
        const Qr = this.terrain.sunShadowGroup(),
          Zr = rr.beginRenderPass(Sr.trace);
        this.pipeline && Qr && (Zr.setPipeline(this.pipeline), Zr.setBindGroup(0, Sr.bindGroup), Zr.setBindGroup(1, this.empty), Zr.setBindGroup(2, this.empty), Zr.setBindGroup(3, Qr), Zr.draw(3)), Zr.end()
      }
      retire() {
        const rr = this.retired;
        var Sr;
        rr && (rr.mask.destroy(), rr.normals.destroy(), null === (Sr = rr.depth) || void 0 === Sr || Sr.destroy(), this.retired = null)
      }
      targetsFor(rr) {
        var Sr, Qr;
        const Zr = (null !== (Sr = rr._config.depth) && void 0 !== Sr ? Sr : rr._config.rt)._depthTexture;
        return (null === (Qr = this.targets) || void 0 === Qr ? void 0 : Qr.source) === Zr ? this.targets : this.remake(rr, Zr)
      }
      remake(rr, Sr) {
        var Qr;
        this.retired = this.targets;
        const Zr = [Sr.width, Sr.height],
          Wr = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Zr,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ar = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Zr,
            format: PI,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          jr = null !== (Qr = rr._targetSignature._depthStencilFormat) && void 0 !== Qr ? Qr : Sr.format,
          Ir = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Zr,
            format: jr,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          fr = rr._renderPassDescriptor.depthStencilAttachment,
          Er = jr.includes("stencil"),
          pr = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: ar.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Ir ? Ir.createView() : fr.view,
              depthClearValue: fr.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Er ? {
                stencilClearValue: fr.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          xr = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Ir && void 0 !== Ir ? Ir : Sr).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: ar.createView()
            }]
          }),
          mr = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Wr.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [HI(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Sr,
          mask: Wr,
          maskView: Wr.createView(),
          normals: ar,
          depth: Ir,
          bindGroup: xr,
          prepass: pr,
          trace: mr
        }, this.targets
      }
    }

    function RI(rr, Sr, Qr) {
      let Zr = null,
        Wr = 0;
      for (const ar of Qr) {
        const Qr = ar.renderable.mesh;
        Qr && !1 === Qr.visible || (ar.pipeline !== Zr && (rr.setPipeline(ar.pipeline), Zr = ar.pipeline), Wr += ar.draw(rr, Sr))
      }
      return Wr
    }
    const gI = 6e4,
      CI = {
        status: "ok"
      },
      MI = {
        status: "skipped"
      };
    async function GI(rr, Sr) {
      const {
        isCancelled: Qr
      } = rr;
      if (Qr()) return {
        status: "Rr"
      };
      const {
        target: Zr
      } = Sr;
      if (!Zr) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Wr = [],
        ar = Promise.all(Array.from(new Set(rr.materials), (async Qr => {
          Wr.push(await async function(rr, Sr, Qr, Zr) {
            const Wr = {
              lighting: rr.lighting,
              dirLightCount: Math.min(rr.dirLightCount, 4),
              zU: rr.runtime
            };
            try {
              const ar = Sr.material(Zr);
              return ar && HZ(Sr.programKey(ar, !1, Wr)) ? (await ar.ready, rr.isCancelled() ? CI : ar.bindGroupLayout ? await async function(rr, Sr, Qr, Zr) {
                const {
                  device: Wr
                } = rr;
                let ar, jr;
                Wr.pushErrorScope("validation");
                try {
                  ar = rr.pipelineBuild(Sr, Qr, Zr)
                } finally {
                  jr = Wr.popErrorScope().catch((() => null))
                }
                const [Ir, fr] = await Promise.all([jr, ar.built.then((() => null), (rr => null !== rr && void 0 !== rr ? rr : new Error("pipeline failed")))]);
                if (!Ir && !fr) return CI;
                const Er = await kI(ar.module),
                  pr = Er.length > 0 ? Er.map((rr => `${ar.name} ${rr.lineNum}:${rr.linePos}: ${rr.message}`)).join("\n") : `${ar.name}: ${AI(null!==fr&&void 0!==fr?fr:Ir)}`;
                return {
                  status: "failed",
                  material: Sr.model.name,
                  message: pr
                }
              }(Sr, ar, Sr.programKey(ar, "none" !== ar.texture, Wr), Qr): (console.warn(`Shader pack: skipped the compile check for "${Zr.name}", whose textures failed to load`), MI)) : CI
            } catch (ar) {
              return {
                status: "failed",
                material: Zr.name,
                message: AI(ar)
              }
            }
          }(rr, Sr, Zr, Qr))
        }))),
        jr = function(rr, Sr) {
          let Qr, Zr, Wr = !1;
          const ar = new Promise((ar => {
            var jr;
            Qr = setTimeout((() => {
              ar("timeout")
            }), null !== (jr = Sr.timeoutMs) && void 0 !== jr ? jr : gI), Zr = setInterval((() => {
              Sr.isCancelled() && ar("Rr")
            }), 50), rr.lost.then((() => {
              Wr = !0, ar("lost")
            }))
          }));
          return {
            signal: ar,
            lost: () => Wr,
            dispose: () => {
              clearTimeout(Qr), clearInterval(Zr)
            }
          }
        }(Sr.device, rr);
      let Ir;
      try {
        Ir = await Promise.race([ar.then((() => "done")), jr.signal])
      } finally {
        jr.dispose()
      }
      if ("Rr" === Ir || Qr()) return {
        status: "Rr"
      };
      const fr = Wr.find((rr => "failed" === rr.status));
      return fr && "lost" !== Ir && !jr.lost() && await new Promise((rr => {
        setTimeout(rr, 0)
      })), "lost" === Ir || jr.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : fr ? {
        status: "failed",
        failure: {
          material: fr.material,
          message: fr.message
        }
      } : "timeout" === Ir ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Er=rr.timeoutMs)&&void 0!==Er?Er:gI)/1e3} s`), {
        status: "skipped"
      }) : Wr.some((rr => "skipped" === rr.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Er
    }
    async function kI(rr) {
      if (!rr) return [];
      try {
        return (await rr.getCompilationInfo()).messages.filter((rr => "error" === rr.type))
      } catch {
        return []
      }
    }

    function AI(rr) {
      var Sr;
      return null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.message) && void 0 !== Sr ? Sr : String(rr)
    }

    function VI(rr, Sr, Qr, Zr, Wr) {
      HZ(Sr) ? kI(Zr).then((Sr => {
        const [Zr] = Sr;
        pS(rr, "terrain", Qr, Wr, Zr ? `${Zr.lineNum}:${Zr.linePos} error: ${Zr.message}` : null)
      })) : pS(rr, "terrain", Qr, Wr)
    }
    var iI = Qr(38956),
      wI = Qr(38972),
      cI = Qr(38979),
      FI = Qr(3959);

    function oI(rr, Sr, Qr, Zr, Wr) {
      const ar = Math.hypot(Qr[0], Qr[1], Qr[2]);
      if (!(ar > 0)) return;
      const jr = [Qr[0] / ar, Qr[1] / ar, Qr[2] / ar],
        Ir = [Math.floor(Sr[0]), Math.floor(Sr[1]), Math.floor(Sr[2])],
        fr = [0, 0, 0],
        Er = [1 / 0, 1 / 0, 1 / 0],
        pr = [1 / 0, 1 / 0, 1 / 0];
      for (let Nr = 0; Nr < 3; Nr++) jr[Nr] > 0 ? (fr[Nr] = 1, Er[Nr] = (Ir[Nr] + 1 - Sr[Nr]) / jr[Nr], pr[Nr] = 1 / jr[Nr]) : jr[Nr] < 0 && (fr[Nr] = -1, Er[Nr] = (Ir[Nr] - Sr[Nr]) / jr[Nr], pr[Nr] = -1 / jr[Nr]);
      const {
        hx: xr
      } = rr;
      let mr = rr.sF(Ir[0], Ir[1], Ir[2]);
      for (;;) {
        const Sr = Er[0] < Er[1] ? Er[0] < Er[2] ? 0 : 2 : Er[1] < Er[2] ? 1 : 2;
        if (Er[Sr] > Zr) return;
        const Qr = fr[Sr] > 0 ? Ir[Sr] + 1 : Ir[Sr];
        Ir[Sr] += fr[Sr], Er[Sr] += pr[Sr];
        const ar = rr.sF(Ir[0], Ir[1], Ir[2]),
          jr = ar !== mr && !(rr.opaque[mr] && rr.opaque[ar]);
        if (jr) {
          const Zr = [Ir[0], Ir[1], Ir[2]];
          Zr[Sr] = Qr;
          const ar = Math.floor(Zr[0] / xr),
            jr = Math.floor(Zr[1] / xr),
            fr = Math.floor(Zr[2] / xr);
          !rr.isDrawn(ar, jr, fr) && rr.hasParts(ar, jr, fr) && Wr.add(`${ar},${jr},${fr}`)
        }
        if (jr && rr.occluders[ar]) return;
        mr = ar
      }
    }

    function bI(rr, Sr) {
      return rr.group - Sr.group || rr.nearest - Sr.nearest
    }
    class JI {
      constructor(rr, Sr) {
        this.device = rr, this.kY = Sr, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var rr;
        const Sr = null !== (rr = this.free.pop()) && void 0 !== rr ? rr : this.next++;
        if (8 * Sr >= this.data.length) {
          const rr = new Float32Array(2 * this.data.length);
          rr.set(this.data), this.data = rr, this.words = new Uint32Array(rr.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.kY()
        }
        return Sr
      }
      release(rr) {
        this.free.push(rr)
      }
      set(rr, Sr, Qr, Zr, Wr) {
        const ar = 8 * rr + iZ;
        this.data[ar] = Sr, this.data[ar + 1] = Qr, this.data[ar + 2] = Zr, this.setVisibility(rr, Wr)
      }
      setVisibility(rr, Sr) {
        this.data[8 * rr + wZ] = Sr, this.markDirty(rr, rr)
      }
      setFaces(rr, Sr, Qr) {
        const Zr = 8 * rr;
        this.words[Zr + cZ] = Sr, this.words[Zr + FZ] = Qr, this.markDirty(rr, rr)
      }
      markDirty(rr, Sr) {
        this.dirtyMin = Math.min(this.dirtyMin, rr), this.dirtyMax = Math.max(this.dirtyMax, Sr)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const DI = VZ,
      dI = !0;
    const sI = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: DI.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      uI = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class rf {
      constructor(rr) {
        this.device = rr, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(RZ), this.dirLightUniforms = this.frameUniforms.subarray(qZ.dirLights, qZ.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, HS.c)(), this.faceGroups = !0, this.visibilityGraph = dI, this.visCull = dI, this.visCheck = !1, this.visCullMinDistance = cI.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Wf, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.zU = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new lI(rr, ((rr, Sr) => this.recordsGroup(rr, Sr))), this.slots = new JI(rr, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = BS(rr), this.frameLayout = rr.createBindGroupLayout({
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
        }), this.frameBuffer = rr.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = rr.createSampler({
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
          bind: (rr, Sr) => this.createBinding(this.opaqueRenderable, Sr, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (rr, Sr) => this.createBinding(this.transparentRenderable, Sr, !0)
        }
      }
      retire() {
        this.geometry.retire()
      }
      installSceneDepth(rr, Sr) {
        this.sceneDepth = new XI(this.device, this.transparentRenderable, rr, Sr)
      }
      createFrameBindGroup() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== rr && void 0 !== rr ? rr : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Sr && void 0 !== Sr ? Sr : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(rr, Sr) {
        const Qr = null !== Sr && void 0 !== Sr ? Sr : rr;
        let Zr = this.recordsGroups.get(Qr);
        return Zr || (Zr = this.createFrameBindGroup(rr, Sr), this.recordsGroups.set(Qr, Zr)), Zr
      }
      setChunkMesh(rr, Sr, Qr) {
        var Zr;
        let Wr = this.chunks.get(rr);
        Wr ? this.geometry.release(Wr) : (Wr = {
          mesh: rr,
          slot: this.slots.allocate(),
          origin: [Qr[0], Qr[1], Qr[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: rr.visibility,
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
        }, this.chunks.set(rr, Wr), this.writeSlot(Wr)), Wr.material = rr.material ? this.materialFor(rr.material) : null, Wr.packed = !!Sr.packedVertices, Wr.vertexCount = (0, nI.f)(Sr), Wr.faceCount = Wr.vertexCount / 4;
        const ar = null !== (Zr = Sr.faceGroups) && void 0 !== Zr ? Zr : null;
        if (Wr.faceGroups = ar, ar) {
          const rr = iI.n;
          Wr.planePX = ar[rr], Wr.planeNX = ar[rr + 1], Wr.planePY = ar[rr + 2], Wr.planeNY = ar[rr + 3], Wr.planePZ = ar[rr + 4], Wr.planeNZ = ar[rr + 5]
        }
        this.drawWhole(Wr), 0 !== Wr.faceCount && (this.geometry.set(Wr, Sr) ? (Wr.packed && this.slots.setFaces(Wr.slot, Wr.vertices.start + Wr.faceCount, Wr.faceCount), Sr.eU && this.setChunkMeshLight(rr, Sr.eU)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Wr.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(rr, Sr) {
        const Qr = this.chunks.get(rr);
        Qr && this.geometry.setLight(Qr, Sr)
      }
      drawStats() {
        let rr = this.transparent.length;
        for (const Sr of this.opaqueBatches) rr += Sr.meshes.length;
        return {
          drawn: rr,
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
      removeChunkMesh(rr) {
        const Sr = this.chunks.get(rr);
        Sr && (this.geometry.release(Sr), this.slots.release(Sr.slot), this.chunks.delete(rr))
      }
      remeshLost(rr, Sr) {
        this.geometry.release(Sr), Sr.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Sr.lostRemeshes++);
        const Qr = rr.qx,
          [Zr, Wr, ar] = Qr.MZr(Sr.origin[0], Sr.origin[1], Sr.origin[2]),
          jr = Qr.vt.Ot(Zr, Wr, ar);
        jr && (jr.Bt = !0, jr.lt = !0, Qr.Tt(jr, !1))
      }
      chooseFaceRanges(rr, Sr, Qr) {
        const Zr = this.faceRanges;
        rr.faceMask = Qr, rr.rangeCount = (0, wI.h)(Sr, Qr, Zr), rr.first0 = Zr[0], rr.count0 = Zr[1], rr.first1 = Zr[2], rr.count1 = Zr[3]
      }
      drawWhole(rr) {
        rr.faceMask = -1, rr.faceEpoch = -1, rr.rangeCount = 1, rr.first0 = 0, rr.count0 = rr.faceCount
      }
      writeSlot(rr) {
        const [Sr, Qr, Zr] = this.originOffset;
        this.slots.set(rr.slot, rr.origin[0] - Sr, rr.origin[1] - Qr, rr.origin[2] - Zr, rr.visibility)
      }
      materialFor(rr) {
        const Sr = this.materials.get(rr);
        if (Sr) return Sr;
        const Qr = KI(rr);
        if (!Qr) return this.warnOnce(`material:${rr.name}`, `Lite terrain cannot draw material "${rr.name}"; its chunks are skipped.`), null;
        const {
          model: Zr,
          atlas: Wr,
          texture: ar,
          animated: jr,
          uniformData: Ir
        } = Qr, fr = {
          id: this.materials.size,
          model: Zr,
          texture: ar,
          animated: jr,
          uniformData: Ir,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${rr.name}`,
            size: Ir.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Qr.liquid,
          customRenderMat: Qr.customRenderMat,
          atlasCount: 0,
          l_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(rr, fr), this.device.queue.writeBuffer(fr.uniformBuffer, 0, Ir), fr.ready = this.createMaterialBindGroup(fr, Wr).catch((Sr => {
          console.error(`Lite terrain failed to load the textures of material "${rr.name}"`, Sr)
        })), fr
      }
      materialLayout(rr) {
        const Sr = function(rr) {
            const Sr = ["uniforms"];
            if ("atlas" === rr.texture) {
              rr.animated && Sr.push("animData"), Sr.push("sampler");
              for (let Qr = 0; Qr < rr.atlasCount; Qr++) Sr.push("textureArray")
            } else "single" === rr.texture && Sr.push("sampler", "texture");
            return Sr
          }(rr),
          Qr = Sr.join(",");
        let Zr = this.materialLayouts.get(Qr);
        if (!Zr) {
          const rr = GPUShaderStage.FRAGMENT;
          Zr = this.device.createBindGroupLayout({
            label: `terrain-material-${Qr}`,
            entries: Sr.map(((Sr, Qr) => {
              switch (Sr) {
                case "uniforms":
                  return {
                    binding: Qr, visibility: GPUShaderStage.VERTEX | rr, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Qr, visibility: GPUShaderStage.VERTEX | rr, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Qr, visibility: rr, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Qr, visibility: rr, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Qr, visibility: rr, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Qr, Zr)
        }
        return Zr
      }
      async createMaterialBindGroup(rr, Sr) {
        const Qr = [{
          buffer: rr.uniformBuffer
        }];
        if (Sr) {
          const Zr = await SS(this.device, Sr.sources);
          rr.atlasCount = Zr.length, rr.l_ = Zr[0].layerWidth, rr.atlasLayers = Zr[0].layers, Sr.animDataPerTex && Qr.push({
            buffer: br(this.device, Float32Array.from(Sr.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Qr.push(this.sampler);
          for (const rr of Zr) Qr.push(rr.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === rr.texture) {
          const {
            url: Sr
          } = rr.model.diffuseTexture.source, {
            pixels: Zr,
            width: Wr,
            height: ar
          } = await rS(Sr);
          Qr.push(this.sampler), Qr.push(Dr(this.device, Zr, Wr, ar, 1, `terrain-${Sr}`).createView({
            dimension: "2d"
          }))
        }
        const Zr = this.materialLayout(this.programKey(rr, !1));
        rr.bindGroupLayout = Zr, rr.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${rr.model.name}`,
          layout: Zr,
          entries: Qr.map(((rr, Sr) => ({
            binding: Sr,
            resource: rr
          })))
        })
      }
      programKey(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Zr = Qr ? Qr.lighting : this.lighting,
          Wr = Qr ? Qr.zU : this.zU,
          ar = {
            texture: rr.texture,
            atlasCount: rr.atlasCount,
            l_: rr.l_,
            atlasLayers: rr.atlasLayers,
            animated: rr.animated,
            alphaTest: rr.model.transparencyMode === vr.s.alphaTest,
            lighting: Zr,
            dirLightCount: Qr ? Qr.dirLightCount : this.dirLightCount,
            packed: Sr
          };
        if (!Wr) return ar;
        const jr = this.shaderPackFields(rr, Wr),
          Ir = "atlas" === rr.texture && rr.model.transparencyMode === vr.s.opaque && LZ(jr.packVariant);
        return {
          ...ar,
          ...jr,
          alphaTest: ar.alphaTest || Ir
        }
      }
      shaderPackFields(rr, Sr) {
        const Qr = this.packVariant(rr, Sr);
        return void 0 === Qr ? vZ : {
          packVariant: Qr,
          liquid: rr.liquid
        }
      }
      packVariant(rr, Sr) {
        return rr.customRenderMat ? void 0 : function(rr, Sr) {
          const Qr = rr ? rr.defineFor(Sr ? "liquid" : "terrain") : 0;
          return 0 === Qr ? void 0 : Qr
        }(Sr, rr.liquid)
      }
      isBlended(rr) {
        return rr.model.transparencyMode === vr.s.alphaBlend
      }
      shaderModule(rr, Sr) {
        let Qr = this.modules.get(rr);
        return Qr || (Qr = this.device.createShaderModule({
          label: Sr,
          code: rr
        }), this.modules.set(rr, Qr)), Qr
      }
      pipelineFor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!rr.bindGroupLayout) return null;
        if (!Zr) return this.pipelineOf(rr, Sr, Qr);
        const Wr = this.pipelineIdNow(rr, Sr, !0, Qr),
          ar = this.pipelines.get(Wr);
        if (ar) return ar;
        const jr = this.pipelineOf(rr, Sr, Qr);
        return jr && void 0 === ar && this.startPipeline(Wr, rr, {
          ...this.programKey(rr, Sr),
          resting: Zr
        }, Qr), jr
      }
      pipelineOf(rr, Sr, Qr) {
        const Zr = this.pipelineIdNow(rr, Sr, !1, Qr),
          Wr = this.pipelines.get(Zr);
        return void 0 !== Wr ? Wr : (this.startPipeline(Zr, rr, this.programKey(rr, Sr), Qr), null)
      }
      pipelineIdNow(rr, Sr, Qr, Zr) {
        const {
          lighting: Wr,
          dirLightCount: ar
        } = this, {
          transparencyMode: jr,
          backFaceCulling: Ir
        } = rr.model, fr = this.packVariant(rr, this.zU), Er = (Sr ? 2 : 0) + (Qr ? 1 : 0), pr = rr.pipelineIds[Er];
        if (null !== pr && pr.lighting === Wr && pr.dirLightCount === ar && pr.packVariant === fr && pr.transparencyMode === jr && pr.cull === Ir && pr.atlasCount === rr.atlasCount && pr.l_ === rr.l_ && pr.atlasLayers === rr.atlasLayers && pr.colorFormat === Zr._colorFormat && pr.depthStencilFormat === Zr._depthStencilFormat && pr.sampleCount === Zr._sampleCount) return pr.id;
        const xr = this.programKey(rr, Sr),
          mr = this.pipelineId(rr, Qr ? {
            ...xr,
            resting: Qr
          } : xr, Zr);
        return rr.pipelineIds[Er] = {
          id: mr,
          lighting: Wr,
          dirLightCount: ar,
          packVariant: fr,
          transparencyMode: jr,
          cull: Ir,
          atlasCount: rr.atlasCount,
          l_: rr.l_,
          atlasLayers: rr.atlasLayers,
          colorFormat: Zr._colorFormat,
          depthStencilFormat: Zr._depthStencilFormat,
          sampleCount: Zr._sampleCount
        }, mr
      }
      pipelineId(rr, Sr, Qr) {
        return Sf(Sr, this.isBlended(rr), rr.model.backFaceCulling, Qr)
      }
      pipelineBuild(rr, Sr, Qr) {
        var Zr;
        const Wr = this.pipelineId(rr, Sr, Qr);
        return null !== (Zr = this.builds.get(Wr)) && void 0 !== Zr ? Zr : this.startPipeline(Wr, rr, Sr, Qr)
      }
      startPipeline(rr, Sr, Qr, Zr) {
        var Wr;
        this.pipelines.set(rr, null);
        const ar = sZ(Qr),
          jr = this.isBlended(Sr),
          Ir = this.shadowMask && Zr._depthStencilFormat ? function(rr, Sr, Qr, Zr) {
            if (void 0 === rr.packVariant || rr.liquid || Sr) return "none";
            const Wr = (0, dS.f)(rr.packVariant);
            return null === Wr || void 0 === Wr || !Wr.sunShadow || !aZ(Wr, Qr) || Wr.discards || rr.alphaTest && LZ(rr.packVariant) ? "none" : Zr ? "edge" : "plain"
          }(Qr, jr, !!this.sunShadow, Zr._sampleCount > 1) : "none";
        let fr;
        try {
          fr = uZ(Qr, !!this.sunShadow, Ir)
        } catch (hr) {
          if (!HZ(Qr)) throw hr;
          return this.failedPackBuild(rr, Qr, ar, hr)
        }
        const Er = this.shaderModule(fr, ar),
          pr = [];
        Qr.packed || (pr.push(function(rr, Sr) {
          const Qr = [{
            shaderLocation: DI.position,
            offset: bS.f.jW,
            format: "float32x3"
          }, {
            shaderLocation: DI.normal,
            offset: bS.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: DI.color,
            offset: bS.f.colorOffset,
            format: "unorm8x4"
          }];
          return rr && Qr.push({
            shaderLocation: DI.uv,
            offset: bS.f.uvOffset,
            format: "float32x2"
          }), Sr && Qr.push({
            shaderLocation: DI.blockFlagWords,
            offset: bS.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: bS.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Qr
          }
        }("none" !== Qr.texture, HZ(Qr))), Qr.lighting && pr.push(sI));
        const xr = Sr.model.backFaceCulling,
          mr = {
            label: ar,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Sr.bindGroupLayout, ...oa(this.device, Qr, !!this.sunShadow, "none" !== Ir)]
            }),
            vertex: {
              module: Er,
              entryPoint: "mainVertex",
              buffers: pr
            },
            fragment: YS({
              module: Er,
              entryPoint: "mainFragment"
            }, Zr, jr ? uI : null),
            depthStencil: Zr._depthStencilFormat ? {
              format: Zr._depthStencilFormat,
              depthCompare: null !== (Wr = Zr._depthCompare) && void 0 !== Wr ? Wr : TS,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Zr._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: xr ? "back" : "none"
            }
          },
          Nr = Qr.resting ? 0 : 1;
        this.compiling += Nr;
        const Ur = "none" === Ir ? this.device.createRenderPipelineAsync(mr) : this.startMaskPipelines(Er, mr, "edge" === Ir);
        Ur.then((Sr => {
          this.compiling -= Nr, this.pipelines.set(rr, Sr)
        }), (rr => {
          this.compiling -= Nr, console.error(`Lite terrain pipeline ${ar} failed`, rr), VI(this.device, Qr, ar, Er, rr)
        }));
        const tr = {
          name: ar,
          module: Er,
          built: Ur
        };
        return this.builds.set(rr, tr), tr
      }
      startMaskPipelines(rr, Sr, Qr) {
        const Zr = Sr.depthStencil,
          Wr = this.device.createRenderPipelineAsync(Qr ? Sr : {
            ...Sr,
            depthStencil: {
              ...Zr,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          ar = this.device.createRenderPipelineAsync({
            ...Sr,
            label: `${Sr.label}-prepass`,
            fragment: {
              module: rr,
              entryPoint: "prepassFragment",
              targets: [{
                format: PI
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Wr, ar]).then((rr => {
          let [Sr, Qr] = rr;
          return this.prepassOf.set(Sr, Qr), this.maskPipelines++, Sr
        }))
      }
      failedPackBuild(rr, Sr, Qr, Zr) {
        console.error(`Lite terrain pipeline ${Qr} failed`, Zr), VI(this.device, Sr, Qr, null, Zr);
        const Wr = Promise.reject(Zr);
        Wr.catch((() => {}));
        const ar = {
          name: Qr,
          module: null,
          built: Wr
        };
        return this.builds.set(rr, ar), ar
      }
      checkShaderPack(rr) {
        return GI(rr, {
          device: this.device,
          target: this.target,
          material: rr => this.materialFor(rr),
          programKey: (rr, Sr, Qr) => this.programKey(rr, Sr, Qr),
          pipelineBuild: (rr, Sr, Qr) => this.pipelineBuild(rr, Sr, Qr)
        })
      }
      createBinding(rr, Sr, Qr) {
        return this.target = Sr, {
          renderable: rr,
          pipeline: lS(this.device, Sr),
          draw: rr => {
            this.geometry.setDrawing(!0);
            try {
              return Qr ? this.drawTransparent(rr, Sr) : this.drawOpaque(rr, Sr)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(rr, Sr) {
        var Qr, Zr, Wr, ar;
        const {
          gm: jr
        } = rr;
        this.lighting = rr.ct;
        const Ir = (0, YI.p)(Sr);
        this.dirLightCount = Math.min(Ir, 4), this.zU = null !== (Qr = jr.zU) && void 0 !== Qr ? Qr : null, Ir > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(rr, Sr), this.animateMaterials(Sr.animTick);
        const fr = jr.um,
          Er = fr[0] !== this.originOffset[0] || fr[1] !== this.originOffset[1] || fr[2] !== this.originOffset[2];
        Er && (this.originOffset[0] = fr[0], this.originOffset[1] = fr[1], this.originOffset[2] = fr[2]);
        const pr = Sr.eye;
        this.eye[0] = pr[0], this.eye[1] = pr[1], this.eye[2] = pr[2], this.writeShaderPackInputs();
        const xr = Sr.projectionMatrix,
          mr = 0 === xr[15];
        let Nr = 0;
        (Er || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Ur
        } = this;
        XS(this.transparentRenderable._worldCenter, Sr, OS), this.resetBatches(mr), this.transparent.length = 0, this.unlit.length = 0;
        const tr = jr.qx.zx,
          hr = tr / 2 * Math.sqrt(3);
        let zr = 0;
        const Yr = !!this.zU && OZ(this.zU.defineFor("liquid"));
        let nr = !1;
        const er = null !== (Zr = null === (Wr = jr.qB) || void 0 === Wr ? void 0 : Wr.visibility) && void 0 !== Zr ? Zr : null,
          Kr = this.visCull && mr && 0 === this.compiling && null !== er && jr.qx.PWr[0] >= this.visCullMinDistance ? this.target : null,
          yr = this.visPassable,
          Br = this.visCandidates,
          Tr = this.visCandidateBatches;
        yr.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let vr = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Or = 0;
        const Lr = (rr, Qr) => {
          if (!Qr) return this.transparent.push(rr), void(Or += 2 * rr.faceCount);
          if (null !== rr.faceGroups && Qr.faceCull) {
            if (0 === Nr && (Nr = (0, wI.c)(xr, Sr.renderWidth, Sr.renderHeight), Nr !== this.faceFocalPx && (this.faceFocalPx = Nr, Ur = ++this.faceEpoch)), rr.faceEpoch !== Ur) {
              rr.faceEpoch = Ur;
              const Sr = Math.sqrt(rr.distance) + hr,
                Qr = (0, wI.e)(rr.planePX, rr.planeNX, rr.planePY, rr.planeNY, rr.planePZ, rr.planeNZ, this.eye[0] - (rr.origin[0] - this.originOffset[0]), this.eye[1] - (rr.origin[1] - this.originOffset[1]), this.eye[2] - (rr.origin[2] - this.originOffset[2]), (0, wI.d)(Sr, Nr));
              Qr !== rr.faceMask && this.chooseFaceRanges(rr, rr.faceGroups, Qr)
            }
            if (0 === rr.rangeCount) return
          } else - 1 !== rr.faceMask && this.drawWhole(rr);
          Qr.meshes.push(rr), Or += 2 * ((rr.rangeCount > 0 ? rr.count0 : 0) + (rr.rangeCount > 1 ? rr.count1 : 0))
        };
        for (const Xr of this.chunks.values()) {
          Er && this.writeSlot(Xr);
          const rr = Xr.mesh.visibility;
          rr !== Xr.visibility && (Xr.visibility = rr, this.slots.setVisibility(Xr.slot, rr));
          const {
            material: Qr
          } = Xr;
          this.geometry.lost(Xr) && performance.now() >= Xr.lostRetryAt && this.remeshLost(jr, Xr);
          const Zr = !(null === Qr || void 0 === Qr || !Qr.bindGroup) && this.geometry.backed(Xr),
            Wr = Zr && this.lighting && !Xr.vertices.page.twin;
          if (Kr && (Number.isNaN(Xr.key) && (Xr.ci = Math.floor(Xr.origin[0] / tr), Xr.cj = Math.floor(Xr.origin[1] / tr), Xr.ck = Math.floor(Xr.origin[2] / tr), Xr.key = (0, FI.g)(Xr.ci, Xr.cj, Xr.ck)), (!Zr || rr < 1 || Wr || !this.batchDraws(Qr, Xr.packed, Kr)) && this.visSeeThrough(Xr, Kr) && yr.add(Xr.key)), !Zr) continue;
          Wr || (Xr.lostRemeshes = 0);
          const ar = Xr.origin[0] - this.originOffset[0],
            Ir = Xr.origin[1] - this.originOffset[1],
            fr = Xr.origin[2] - this.originOffset[2];
          if (!(0, jI.b)(Sr.frustum, ar, Ir, fr, tr)) continue;
          const pr = ar + tr / 2 - this.eye[0],
            xr = Ir + tr / 2 - this.eye[1],
            Nr = fr + tr / 2 - this.eye[2];
          if (Xr.distance = pr * pr + xr * xr + Nr * Nr, this.lighting && !Xr.lit && (zr = Math.max(zr, Xr.vertexCount), this.unlit.push(Xr)), Wr) continue;
          const Ur = this.isBlended(Qr) ? null : this.batchFor(Qr, Xr.packed, Xr.vertices.page, 1 === rr, mr);
          Kr ? (Br[vr] = Xr, Tr[vr++] = Ur) : Lr(Xr, Ur)
        }
        const lr = Kr ? this.sweepVisibility(rr, Sr, er) : null;
        null === (ar = (0, ga.t)(jr)) || void 0 === ar || ar.update(Sr.frustum, this.originOffset, tr, lr);
        for (let Xr = 0; Xr < vr; Xr++) {
          const rr = Br[Xr];
          !lr || lr.isDrawn(rr.ci, rr.cj, rr.ck) ? Lr(rr, Tr[Xr]) : (this.visCulledParts++, this.visCulledTriangles += 2 * rr.faceCount)
        }
        for (const Xr of this.transparent) nr ||= Yr && Xr.material.liquid && !Xr.material.customRenderMat;
        this.submittedTriangles = Or, lr && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(rr, Sr, lr)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(nr) : nr && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && zr > 0 && this.geometry.lightFullSky(this.unlit, zr);
        for (const Xr of this.opaqueBatches) this.chunkSorter.sort(Xr.meshes, 1) || Xr.meshes.sort(Qf);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(Zf)
      }
      sweepVisibility(rr, Sr, Qr) {
        const {
          qx: Zr
        } = rr.gm, Wr = Zr.zx, ar = this.visPassable, jr = this.eye[0] + this.originOffset[0], Ir = this.eye[1] + this.originOffset[1], fr = this.eye[2] + this.originOffset[2];
        if (!Qr.eyeClear(jr, Ir, fr, Sr.near, Sr.projectionMatrix, Zr)) return null;
        const [Er, pr] = Zr.PWr, xr = Qr.update(jr, Ir, fr, Wr, Er, pr, ar);
        return this.visSweeps = Qr.sweeps, xr ? Qr : null
      }
      visSeeThrough(rr, Sr) {
        const {
          material: Qr
        } = rr;
        return (!Qr || !this.isBlended(Qr)) && (rr.mesh.visibility < 1 || !(null !== Qr && void 0 !== Qr && Qr.bindGroup) || rr.faceCount > 0 && (!this.geometry.backed(rr) || this.lighting && !rr.vertices.page.twin) || !this.batchDraws(Qr, rr.packed, Sr))
      }
      batchDraws(rr, Sr, Qr) {
        var Zr;
        const Wr = Sr ? 2 : 0;
        if (rr === this.visDrawsMaterial && function(rr, Sr) {
            return 0 !== (rr & 1 << Sr)
          }(this.visDrawsBits, Wr)) return 0 !== (this.visDrawsBits & 2 << Wr);
        let ar = null !== (Zr = this.visBatchDraws.get(rr)) && void 0 !== Zr ? Zr : 0;
        if (!(ar & 1 << Wr)) {
          ar |= 1 << Wr | (!!rr.bindGroupLayout && this.canDraw(rr, Sr) && !!this.pipelines.get(this.pipelineIdNow(rr, Sr, !1, Qr)) ? 2 << Wr : 0), this.visBatchDraws.set(rr, ar)
        }
        return this.visDrawsMaterial = rr, this.visDrawsBits = ar, 0 !== (ar & 2 << Wr)
      }
      runVisCheck(rr, Sr, Qr) {
        const {
          gm: Zr
        } = rr, {
          qx: Wr
        } = Zr, ar = Wr.zx, jr = new Set;
        for (const Nr of this.chunks.values()) jr.add(Nr.key);
        const Ir = iW.Matrix.FromArray(Sr.viewProjectionMatrix).invert(),
          [fr, Er, pr] = this.originOffset,
          xr = new iW.kU,
          mr = function(rr, Sr, Qr, Zr) {
            const Wr = new Set;
            for (let ar = 0; ar < 27; ar++)
              for (let jr = 0; jr < 48; jr++) {
                const Ir = Qr((jr + .5) / 48 * 2 - 1, (ar + .5) / 27 * 2 - 1);
                oI(rr, Sr, [Ir[0] - Sr[0], Ir[1] - Sr[1], Ir[2] - Sr[2]], Zr, Wr)
              }
            return Wr
          }({
            sF: (rr, Sr, Qr) => Wr.sF(rr, Sr, Qr),
            occluders: Qr.occluders,
            opaque: Qr.opaque,
            hx: ar,
            isDrawn: (rr, Sr, Zr) => Qr.isDrawn(rr, Sr, Zr),
            hasParts: (rr, Sr, Qr) => jr.has((0, FI.g)(rr, Sr, Qr))
          }, [this.eye[0] + fr, this.eye[1] + Er, this.eye[2] + pr], ((rr, Sr) => (iW.kU.TransformCoordinatesFromFloatsToRef(rr, Sr, .5, Ir, xr), [xr.x + fr, xr.y + Er, xr.z + pr])), (Wr.PWr[0] + 1) * ar);
        this.visViolations = mr.size;
        for (const Nr of mr) this.warnOnce(`vis:${Nr}`, `Lite terrain cave culling skipped chunk ${Nr}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var rr;
        null !== (rr = this.zU) && void 0 !== rr && rr.isRunning() && (this.shaderPackInputs ??= new ba(this.device, this.zU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.zU, this.eye, this.lighting))
      }
      bindShaderPackInputs(rr, Sr, Qr) {
        var Zr, Wr, ar, jr;
        let Ir = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fr = this.packVariant(Sr, Qr);
        if (void 0 === fr) return;
        this.shaderPackInputs || (this.shaderPackInputs = new ba(this.device, Qr.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Qr, this.eye, this.lighting));
        const Er = OZ(fr) ? null !== (Zr = null === (Wr = this.sceneDepth) || void 0 === Wr ? void 0 : Wr.view) && void 0 !== Zr ? Zr : this.standIn() : null,
          pr = Ir ? null !== (ar = null === (jr = this.shadowMask) || void 0 === jr ? void 0 : jr.view) && void 0 !== ar ? ar : this.standIn() : null;
        this.shaderPackInputs.bind(rr, Er, Fa(fr, !!this.sunShadow), pr)
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
        var rr, Sr;
        return null !== (rr = null === (Sr = this.shaderPackInputs) || void 0 === Sr ? void 0 : Sr.bindGroupFor(null, !0)) && void 0 !== rr ? rr : null
      }
      resetBatches(rr) {
        const Sr = this.opaqueBatches;
        let Qr = 0;
        for (const Zr of Sr) Zr.meshes.length > 0 && (Zr.meshes.length = 0, Zr.faceCull = this.batchFaceCull(Zr.material, rr), Sr[Qr++] = Zr);
        Sr.length = Qr
      }
      orderBatches() {
        const rr = this.opaqueBatches;
        for (let Sr = 0; Sr < rr.length; Sr++) {
          const Qr = rr[Sr];
          Qr.group = Sr;
          for (let Zr = 0; Zr < Sr; Zr++) {
            const Sr = rr[Zr];
            if (Sr.material === Qr.material && Sr.packed === Qr.packed) {
              Qr.group = Sr.group;
              break
            }
          }
          Qr.nearest = Qr.meshes.length > 0 ? Qr.meshes[0].distance : 1 / 0
        }
        rr.sort(bI)
      }
      batchFor(rr, Sr, Qr, Zr, Wr) {
        for (const jr of this.opaqueBatches)
          if (jr.material === rr && jr.packed === Sr && jr.page === Qr && jr.resting === Zr) return jr;
        const ar = {
          material: rr,
          packed: Sr,
          page: Qr,
          resting: Zr,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(rr, Wr)
        };
        return this.opaqueBatches.push(ar), ar
      }
      batchFaceCull(rr, Sr) {
        return !(!Sr || !(0, iI.s)(rr.model)) && (!this.zU || ! function(rr) {
          var Sr;
          return !(null === (Sr = (0, dS.f)(rr)) || void 0 === Sr || !Sr.movesVertices)
        }(this.packVariant(rr, this.zU)))
      }
      writeFrameUniforms(rr, Sr) {
        const Qr = this.frameUniforms,
          Zr = qZ;
        if ((0, YI.r)(rr, Qr), Qr[Zr.fogInfos] = Sr.fogEnabled ? Sr.fogMode : 0, Qr[Zr.fogInfos + 1] = Sr.fogStart, Qr[Zr.fogInfos + 2] = Sr.fogEnd, Qr[Zr.fogInfos + 3] = Sr.fogDensity, Qr.set(Sr.fogColour, Zr.fogColour), Qr[Zr.outputHeight] = Sr.renderHeight, Qr.set(Sr.ambientColour, Zr.sceneAmbient), (0, YI.o)(Sr, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Sr = (0, nI.h)(rr.jt, rr.qU, rr.RU);
          for (let rr = 0; rr < 4; rr++) Qr[Zr.aoLevels + rr] = Sr[rr] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Qr)
      }
      animateMaterials(rr) {
        const Sr = gZ.anim;
        for (const Qr of this.materials.values()) Qr.animated && (Qr.uniformData[Sr] = rr, this.device.queue.writeBuffer(Qr.uniformBuffer, 4 * Sr, Qr.uniformData, Sr, 1))
      }
      canDraw(rr, Sr) {
        return !("atlas" === rr.texture && !Sr) || (this.warnOnce(`stride:${rr.id}`, `Lite terrain: material "${rr.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(rr, Sr) {
        let Qr = 0;
        rr.setBindGroup(1, this.frameBindGroup);
        for (const Zr of this.opaqueBatches) {
          if (!Zr.meshes.length || !this.canDraw(Zr.material, Zr.packed)) continue;
          const Wr = this.pipelineFor(Zr.material, Zr.packed, Sr, Zr.resting);
          Wr && (rr.setPipeline(Wr), rr.setBindGroup(2, Zr.material.bindGroup), this.zU && this.bindShaderPackInputs(rr, Zr.material, this.zU, this.prepassOf.has(Wr)), Qr += this.drawBatch(rr, Zr))
        }
        return Qr
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(rr, Sr, Qr) {
        const Zr = this.target,
          Wr = this.zU;
        if (!Zr || !Wr || 0 === this.maskPipelines) return 0;
        let ar = 0,
          jr = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Ir of this.opaqueBatches) {
            if (!Ir.meshes.length || !this.canDraw(Ir.material, Ir.packed)) continue;
            const fr = this.pipelineFor(Ir.material, Ir.packed, Zr, Ir.resting),
              Er = fr && this.prepassOf.get(fr);
            Er && (jr || (jr = rr.beginRenderPass(Sr), jr.setBindGroup(0, Qr), jr.setBindGroup(1, this.frameBindGroup)), jr.setPipeline(Er), jr.setBindGroup(2, Ir.material.bindGroup), this.bindShaderPackInputs(jr, Ir.material, Wr, !0), ar += this.drawBatch(jr, Ir))
          }
        } finally {
          var Ir;
          null === (Ir = jr) || void 0 === Ir || Ir.end(), this.geometry.setDrawing(!1)
        }
        return ar
      }
      drawBatch(rr, Sr) {
        let Qr = 0;
        for (const Zr of Sr.meshes) {
          const {
            rangeCount: Sr
          } = Zr;
          Sr > 0 && (Qr += this.geometry.draw(rr, Zr, this.lighting, Zr.first0, Zr.count0), Sr > 1 && (Qr += this.geometry.draw(rr, Zr, this.lighting, Zr.first1, Zr.count1)))
        }
        return Qr
      }
      drawTransparent(rr, Sr) {
        let Qr = 0,
          Zr = null,
          Wr = null;
        rr.setBindGroup(1, this.frameBindGroup);
        for (const ar of this.transparent) {
          const jr = ar.material;
          if (!this.canDraw(jr, ar.packed)) continue;
          const Ir = this.pipelineFor(jr, ar.packed, Sr);
          Ir && (Ir !== Zr && (rr.setPipeline(Ir), Zr = Ir, this.zU && this.bindShaderPackInputs(rr, jr, this.zU)), jr !== Wr && (rr.setBindGroup(2, jr.bindGroup), Wr = jr), Qr += this.geometry.draw(rr, ar, this.lighting))
        }
        return Qr
      }
    }

    function Sf(rr, Sr, Qr, Zr) {
      return `${sZ(rr)}|${rr.atlasLayers}|${rr.l_}|${Sr}|${Qr}|${Zr._colorFormat}|${Zr._depthStencilFormat}|${Zr._sampleCount}`
    }

    function Qf(rr, Sr) {
      return rr.distance - Sr.distance
    }

    function Zf(rr, Sr) {
      return Sr.distance - rr.distance
    }
    class Wf {
      constructor() {
        this.left = []
      }
      sort(rr, Sr) {
        for (let Qr = 0; Qr < rr.length; Qr++) {
          const Sr = rr[Qr].distance;
          if (Sr - Sr !== 0) return !1
        }
        return this.sortRange(rr, 0, rr.length, Sr), !0
      }
      sortRange(rr, Sr, Qr, Zr) {
        if (Qr - Sr <= 16) {
          for (let Wr = Sr + 1; Wr < Qr; Wr++) {
            const Qr = rr[Wr],
              ar = Zr * Qr.distance;
            let jr = Wr - 1;
            for (; jr >= Sr && Zr * rr[jr].distance > ar; jr--) rr[jr + 1] = rr[jr];
            rr[jr + 1] = Qr
          }
          return
        }
        const Wr = Sr + Qr >>> 1;
        if (this.sortRange(rr, Sr, Wr, Zr), this.sortRange(rr, Wr, Qr, Zr), Zr * rr[Wr - 1].distance <= Zr * rr[Wr].distance) return;
        const {
          left: ar
        } = this, jr = Wr - Sr;
        for (let pr = 0; pr < jr; pr++) ar[pr] = rr[Sr + pr];
        let Ir = 0,
          fr = Wr,
          Er = Sr;
        for (; Ir < jr && fr < Qr;) rr[Er++] = Zr * rr[fr].distance < Zr * ar[Ir].distance ? rr[fr++] : ar[Ir++];
        for (; Ir < jr;) rr[Er++] = ar[Ir++]
      }
    }
    const af = Math.ceil(102);

    function jf(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Sr;
      const ar = Math.min(Sr, Qr),
        jr = new Uint32Array(yQ(Zr));
      for (let Ir = 0; Ir < Zr; Ir++) {
        const Sr = Math.floor(Ir * ar / Zr),
          Qr = Math.max(Sr + 1, Math.floor((Ir + 1) * ar / Zr));
        for (let fr = 0; fr < Zr; fr++) {
          const Er = Math.floor(fr * ar / Zr),
            pr = Math.max(Er + 1, Math.floor((fr + 1) * ar / Zr));
          let xr = 0;
          for (let Zr = Sr; Zr < Qr; Zr++)
            for (let Sr = Er; Sr < pr; Sr++) rr[Zr * Wr + Sr] >= af && xr++;
          if (2 * xr >= (Qr - Sr) * (pr - Er)) {
            const rr = fr + Zr * Ir;
            jr[rr >>> 5] |= 1 << (31 & rr)
          }
        }
      }
      return jr
    }

    function If(rr) {
      return Math.max(1, Math.min(16, rr))
    }
    class ff {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = rr, this.loadTexture = Sr, this.warn = Qr, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(rr, Sr) {
        return (rr.HV !== this.builtVersion || this.blockCaster.length !== Sr) && (this.build(rr, Sr), !0)
      }
      build(rr, Sr) {
        this.builtVersion = rr.HV;
        const Qr = new Uint16Array(Sr),
          Zr = new Map;
        for (let Wr = 1; Wr < Sr; Wr++) {
          const Sr = this.classify(rr, Wr, Zr);
          if (null === Sr || Sr === zQ) {
            Qr[Wr] = null === Sr ? 0 : zQ;
            continue
          }
          let ar = this.byKey.get(Sr.key);
          void 0 === ar && (ar = this.allocate(Sr), this.byKey.set(Sr.key, ar)), Qr[Wr] = ar
        }
        this.blockCaster = Qr, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(rr, Sr) {
        const Qr = rr.I6[Sr];
        if ("function" !== typeof Qr) return Qr;
        try {
          return Qr()
        } catch (Zr) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Sr}: ${Zr instanceof Error?Zr.message:String(Zr)}`), null
        }
      }
      classify(rr, Sr, Qr) {
        const Zr = this.option(rr, Sr);
        if ("none" === Zr) return null;
        if (Zr && Zr.planes.length > 0) {
          const rr = Zr.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(rr)}`,
            planes: rr
          }
        }
        if (rr.PN[Sr]) return null;
        const Wr = rr.qN[Sr] ? rr.RV(Sr) : null;
        if (Wr && Wr.length >= 6) {
          const rr = function(rr) {
            const Sr = new Uint32Array(16);
            for (let Qr = 0; Qr + 6 <= rr.length; Qr += 6) {
              const Zr = [0, 1, 2].map((Sr => Math.max(0, Math.ceil(8 * rr[Qr + Sr] - .5)))),
                Wr = [0, 1, 2].map((Sr => Math.min(7, Math.floor(8 * rr[Qr + Sr + 3] - .5))));
              for (let rr = Zr[2]; rr <= Wr[2]; rr++)
                for (let Qr = Zr[1]; Qr <= Wr[1]; Qr++)
                  for (let ar = Zr[0]; ar <= Wr[0]; ar++) {
                    const Zr = ar + 8 * (Qr + 8 * rr);
                    Sr[Zr >>> 5] |= 1 << (31 & Zr)
                  }
            }
            return Sr
          }(Wr);
          return function(rr) {
            return rr.every((rr => 4294967295 === rr))
          }(rr) ? zQ : rr.every((rr => 0 === rr)) ? null : {
            kind: "shape",
            key: `shape:${rr.join(",")}`,
            mask: rr
          }
        }
        if (rr.dL[Sr] || !rr.ft[Sr]) return null;
        const ar = [0, 1, 2, 3, 4, 5].map((Zr => {
          const Wr = rr.Et[6 * Sr + Zr];
          let ar = Qr.get(Wr);
          return void 0 === ar && (ar = function(rr) {
            if (!rr || rr.Kt) return null;
            const {
              L_: Sr,
              l_: Qr,
              v_: Zr
            } = rr;
            if (!Sr || !Qr || !(Qr > 0) || void 0 === Zr || !(Zr >= 0)) return null;
            const Wr = Sr[0],
              ar = Qr * Qr * 4;
            if (!Wr || Wr.byteLength < ar) return null;
            const jr = Math.floor(Wr.byteLength / ar),
              Ir = Sr[Math.floor(Zr / jr)];
            if (!Ir) return null;
            const fr = new Uint8Array(Ir.buffer, Ir.byteOffset, Ir.byteLength),
              Er = Zr % jr * ar;
            if (Er + ar > fr.length) return null;
            const pr = new Uint8Array(Qr * Qr);
            let xr = !1;
            for (let mr = 0; mr < pr.length; mr++) pr[mr] = fr[Er + 4 * mr + 3], xr ||= pr[mr] < af;
            return xr ? {
              alpha: pr,
              width: Qr
            } : null
          }(rr.et(Wr)), Qr.set(Wr, ar)), ar
        }));
        if (ar.every((rr => null === rr))) return zQ;
        const jr = If(Math.max(...ar.map((rr => {
            var Sr;
            return null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.width) && void 0 !== Sr ? Sr : 1
          })))),
          Ir = new Uint32Array(yQ(jr)).fill(4294967295),
          fr = ar.map((rr => null === rr ? Ir : jf(rr.alpha, rr.width, rr.width, jr)));
        return {
          kind: "cutout",
          key: `cutout:${jr}:${fr.map((rr=>rr.join(","))).join("|")}`,
          size: jr,
          faces: fr
        }
      }
      allocate(rr) {
        if (this.nextCaster >= BQ) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Sr = this.nextCaster++;
        if (this.writeCaster(Sr, YQ, 0, 0, 0), "shape" === rr.kind) {
          const Qr = this.allocateMask(rr.mask.length);
          Qr >= 0 && (this.sink(Qr, rr.mask), this.writeCaster(Sr, nQ, Qr, 0, 8))
        } else if ("cutout" === rr.kind) {
          const Qr = yQ(rr.size),
            Zr = this.allocateMask(6 * Qr);
          if (Zr >= 0) {
            const Wr = new Uint32Array(6 * Qr);
            rr.faces.forEach(((rr, Sr) => {
              Wr.set(rr, Sr * Qr)
            })), this.sink(Zr, Wr), this.writeCaster(Sr, KQ, Zr, 0, rr.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Sr, rr.planes).finally((() => {
          this.planesLoading--
        })));
        return Sr
      }
      async loadPlanes(rr, Sr) {
        const Qr = await Promise.all(Sr.map((rr => this.texture(rr.texture))));
        if (Qr.some((rr => null === rr))) return;
        const Zr = Qr,
          Wr = If(Math.max(...Zr.map((rr => Math.min(rr.width, rr.height))))),
          ar = yQ(Wr),
          jr = this.allocateMask(Sr.length * (4 + ar));
        if (jr < 0) return;
        const Ir = new Uint32Array(Sr.length * (4 + ar)),
          fr = 4 * Sr.length;
        Sr.forEach(((rr, Sr) => {
          const Qr = jr + fr + Sr * ar;
          Ir.set(function(rr, Sr) {
            const [Qr, Zr] = rr.tangent, Wr = Math.hypot(Qr, Zr) || 1, ar = Qr / Wr, jr = Zr / Wr, Ir = rr.centre[0] * jr - rr.centre[1] * ar, fr = new Uint32Array(4);
            return new Float32Array(fr.buffer, 0, 3).set([ar, jr, Ir]), fr[3] = Sr, fr
          }(rr, Qr), 4 * Sr), Ir.set(jf(Zr[Sr].alpha, Zr[Sr].width, Zr[Sr].height, Wr), fr + Sr * ar)
        })), this.sink(jr, Ir), this.writeCaster(rr, eQ, jr, Sr.length, Wr)
      }
      texture(rr) {
        let Sr = this.textures.get(rr);
        return Sr || (Sr = this.loadTexture(rr).catch((Sr => (this.warn(`Sun shadows: no mask for ${rr}: ${Sr instanceof Error?Sr.message:String(Sr)}`), null))), this.textures.set(rr, Sr)), Sr
      }
      allocateMask(rr) {
        if (this.nextMaskWord + rr > TQ) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Sr = 32768 + this.nextMaskWord;
        return this.nextMaskWord += rr, Sr
      }
      writeCaster(rr, Sr, Qr, Zr, Wr) {
        this.sink(0 + 4 * rr, Uint32Array.of(Sr, Qr, Zr, Wr))
      }
      warnOnce(rr) {
        this.warned.has(rr) || (this.warned.add(rr), this.warn(rr))
      }
    }
    var Ef = Qr(3936);

    function pf(rr) {
      return !rr.Bt && !rr.LO && !rr.dU
    }

    function xf() {
      return {
        bricks: new Uint32Array(EQ),
        cells: new Uint16Array(32768),
        special: new Uint8Array(IQ)
      }
    }
    class mf {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = rr, this.writeVoxels = Sr, this.writePool = Qr, this.warn = Zr, this.eyeChunk = null, this.slotChunk = new Array(SQ).fill(null), this.slotVersion = new Float64Array(SQ).fill(-1), this.slotPool = new Array(SQ).fill(null), this.starved = new Uint8Array(SQ), this.queue = [], this.queued = new Uint8Array(SQ), this.queueSorted = !0, this.freePool = new Uint32Array(vQ), this.freeCount = vQ, this.casterTable = null, this.warnedPool = !1, this.scratch = xf(), this.victimScratch = xf(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * SQ), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Wr = 0; Wr < vQ; Wr++) this.freePool[Wr] = 65535 - Wr
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return vQ - this.freeCount
      }
      chunkAdded(rr) {
        if (null === this.eyeChunk || !this.inRadius(rr.i, rr.j, rr.k)) return;
        const Sr = UQ(rr.i, rr.j, rr.k);
        this.slotChunk[Sr] = rr, this.slotVersion[Sr] = -1, this.enqueue(Sr)
      }
      update(rr, Sr, Qr) {
        const Zr = this.casters.blockCaster;
        if (Zr !== this.casterTable) {
          this.casterTable = Zr;
          for (let rr = 0; rr < SQ; rr++) this.slotVersion[rr] = -1, this.slotChunk[rr] && this.enqueue(rr)
        }
        const Wr = Math.floor(rr[0] / 32),
          ar = Math.floor(rr[1] / 32),
          jr = Math.floor(rr[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Wr || this.eyeChunk[1] !== ar || this.eyeChunk[2] !== jr) && (this.eyeChunk = [Wr, ar, jr], this.follow(Sr), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Ir = 0; Ir < SQ; Ir++) {
          const rr = this.slotChunk[Ir];
          rr && (rr.Dv || rr.rt !== this.slotVersion[Ir]) && this.enqueue(Ir)
        }
        this.drain(Qr), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(rr, Sr) {
        this.records.set(Sr, 4 * rr), this.windowTopStale = !0, this.writeVoxels(4 * rr, Sr)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const rr = this.records;
        let Sr = -1 / 0;
        for (let Zr = 0; Zr < rr.length; Zr += 4) {
          const Qr = 255 & rr[Zr + 3];
          Qr !== WQ && Qr !== aQ || !this.inRadius(rr[Zr], rr[Zr + 1], rr[Zr + 2]) || (Sr = Math.max(Sr, rr[Zr + 1] * sS + (rr[Zr + 3] >>> 8)))
        }
        const Qr = Sr === -1 / 0 ? 1 : Sr + xQ;
        Qr !== this.windowTop[0] && (this.windowTop[0] = Qr, this.writeVoxels(pQ, this.windowTop))
      }
      follow(rr) {
        const Sr = this.eyeChunk,
          [Qr, Zr, Wr] = uS;
        for (let jr = -Wr; jr <= Wr; jr++)
          for (let Wr = -Zr; Wr <= Zr; Wr++)
            for (let Zr = -Qr; Zr <= Qr; Zr++) {
              var ar;
              const Qr = Sr[0] + Zr,
                Ir = Sr[1] + Wr,
                fr = Sr[2] + jr,
                Er = UQ(Qr, Ir, fr),
                pr = this.slotChunk[Er];
              if (pr && !pr.Dv && pr.i === Qr && pr.j === Ir && pr.k === fr) continue;
              const xr = null !== (ar = rr(Qr, Ir, fr)) && void 0 !== ar ? ar : null;
              pr && (pr.i !== Qr || pr.j !== Ir || pr.k !== fr) && this.slotPool[Er] && (this.release(Er), this.record.fill(0), this.writeRecord(Er, this.record)), this.slotChunk[Er] = xr, this.slotVersion[Er] = -1, (xr || pr) && this.enqueue(Er)
            }
      }
      requeueStarved() {
        for (let rr = 0; rr < SQ; rr++) this.starved[rr] && this.slotChunk[rr] && this.enqueue(rr)
      }
      enqueue(rr) {
        this.queued[rr] || (this.queued[rr] = 1, this.queue.push(rr), this.queueSorted = !1)
      }
      drain(rr) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const rr = new Map;
          for (const Sr of this.queue) rr.set(Sr, this.slotDistance(Sr));
          this.queue.sort(((Sr, Qr) => rr.get(Qr) - rr.get(Sr))), this.queueSorted = !0
        }
        const Sr = performance.now();
        let Qr = 0;
        const Zr = [];
        for (; this.queue.length > 0 && (0 === Qr || performance.now() - Sr < rr);) {
          const rr = this.queue.pop(),
            Sr = this.slotChunk[rr];
          !Sr || Sr.Dv || pf(Sr) ? (this.queued[rr] = 0, this.encodeSlot(rr), Qr++) : Zr.push(rr)
        }
        for (let Wr = Zr.length - 1; Wr >= 0; Wr--) this.queue.push(Zr[Wr])
      }
      slotDistance(rr) {
        const Sr = this.slotChunk[rr],
          Qr = this.eyeChunk;
        return Sr ? Math.max(Math.abs(Sr.i - Qr[0]), Math.abs(Sr.j - Qr[1]), Math.abs(Sr.k - Qr[2])) : 0
      }
      inRadius(rr, Sr, Qr) {
        const Zr = this.eyeChunk,
          [Wr, ar, jr] = uS;
        return Math.abs(rr - Zr[0]) <= Wr && Math.abs(Sr - Zr[1]) <= ar && Math.abs(Qr - Zr[2]) <= jr
      }
      release(rr) {
        const Sr = this.slotPool[rr];
        if (Sr) {
          for (let rr = Sr.length - 1; rr >= 0; rr--) this.freePool[this.freeCount++] = Sr[rr];
          this.slotPool[rr] = null
        }
      }
      encodeSlot(rr) {
        var Sr, Qr, Zr, Wr, ar;
        let jr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Ir = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const fr = null !== (Sr = null === (Qr = this.slotPool[rr]) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0;
        this.release(rr), this.starved[rr] = 0;
        const Er = this.slotChunk[rr],
          pr = this.record;
        if (!Er || Er.Dv || !Er.ZN) return this.slotChunk[rr] = null, this.slotVersion[rr] = -1, pr.fill(0), this.writeRecord(rr, pr), void(fr > 0 && this.requeueStarved());
        this.slotVersion[rr] = Er.rt;
        const xr = this.encodeBricks(Er, rr, jr, Ir);
        pr[0] = Er.i, pr[1] = Er.j, pr[2] = Er.k, pr[3] = xr, this.writeRecord(rr, pr), null === (Zr = this.encoded) || void 0 === Zr || Zr.call(this, Er), Ir && (null !== (Wr = null === (ar = this.slotPool[rr]) || void 0 === ar ? void 0 : ar.length) && void 0 !== Wr ? Wr : 0) < fr && this.requeueStarved()
      }
      encodeBricks(rr, Sr, Qr, Zr) {
        if (rr.yU) return ZQ;
        const Wr = this.casters.blockCaster,
          {
            data: ar,
            stride: jr,
            offset: Ir
          } = rr.ZN,
          [fr, Er, pr] = jr,
          xr = sS,
          {
            bricks: mr,
            cells: Nr,
            special: Ur
          } = Qr;
        mr.fill(0), Ur.fill(0);
        let tr = 0,
          hr = 0,
          zr = 0;
        for (let Yr = 0; Yr < xr; Yr++) {
          const Sr = Yr >> 2,
            Qr = 3 & Yr,
            Zr = rr.DN[Yr],
            jr = Zr === Ef.h ? -1 : Zr < Wr.length ? Wr[Zr] : 0;
          if (0 !== jr)
            for (let rr = 0; rr < xr; rr++) {
              const Zr = rr >> 2,
                nr = 3 & rr;
              let er = Ir + rr * fr + Yr * Er;
              for (let rr = 0; rr < xr; rr++, er += pr) {
                let Ir = jr;
                if (Ir < 0) {
                  const rr = ar[er];
                  if (Ir = rr < Wr.length ? Wr[rr] : 0, 0 === Ir) continue
                }
                const fr = tQ(Zr, Sr, rr >> 2),
                  Er = hQ(nr, Qr, 3 & rr);
                mr[3 * fr + (Er >>> 5)] |= 1 << (31 & Er), Nr[fr * jQ + Er] = Ir, tr++, zr = Yr, Ir === zQ ? hr++ : Ur[fr] = 1
              }
            }
        }
        return 0 === tr ? ZQ : 32768 === hr ? WQ | zr << 8 : (this.writePoolEntries(Sr, Qr, Zr), this.writeVoxels(fQ + Sr * EQ, mr), aQ | zr << 8)
      }
      writePoolEntries(rr, Sr, Qr) {
        const {
          bricks: Zr,
          cells: Wr,
          special: ar
        } = Sr, jr = this.entry;
        let Ir = 0;
        for (let pr = 0; pr < IQ; pr++) Ir += ar[pr];
        if (0 === Ir) return;
        Qr && this.freeCount < Ir && this.evictBeyond(rr, Ir);
        const fr = new Uint32Array(Qr ? Math.min(Ir, this.freeCount) : 0);
        let Er = 0;
        for (let pr = 0; pr < IQ; pr++) {
          if (!ar[pr]) continue;
          const Qr = 3 * pr;
          if (Er === fr.length) {
            this.dropSpecials(Sr, pr), this.starved[rr] = 1;
            continue
          }
          const Ir = this.freePool[--this.freeCount];
          fr[Er++] = Ir;
          for (let rr = 0; rr < jQ; rr++) {
            const Sr = Zr[Qr + (rr >>> 5)] >>> (31 & rr) & 1 ? Wr[pr * jQ + rr] : 0;
            1 & rr ? jr[rr >> 1] |= Sr << 16 : jr[rr >> 1] = Sr
          }
          Zr[Qr + 2] = Ir + 1, this.writePool(OQ + 32 * Ir, jr)
        }
        fr.length > 0 && (this.slotPool[rr] = fr)
      }
      evictBeyond(rr, Sr) {
        const Qr = this.slotDistance(rr),
          Zr = [];
        for (let Wr = 0; Wr < SQ; Wr++) Wr !== rr && this.slotPool[Wr] && this.slotDistance(Wr) > Qr && Zr.push(Wr);
        Zr.sort(((rr, Sr) => this.slotDistance(Sr) - this.slotDistance(rr)));
        for (const Wr of Zr) {
          if (this.freeCount >= Sr) return;
          const rr = this.slotChunk[Wr];
          rr && !rr.Dv && rr.ZN && (rr.rt === this.slotVersion[Wr] || pf(rr)) && this.encodeSlot(Wr, this.victimScratch, !1)
        }
      }
      dropSpecials(rr, Sr) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Qr = 3 * Sr;
        for (let Zr = 0; Zr < jQ; Zr++) rr.cells[Sr * jQ + Zr] !== zQ && (rr.bricks[Qr + (Zr >>> 5)] &= ~(1 << (31 & Zr)))
      }
    }
    var Nf = Qr(38879);
    class Uf {
      constructor(rr) {
        this.device = rr, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new GQ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.qx = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = rr.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = rr.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(rr, Sr, Qr) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Zr
        } = this;
        Zr.Yx(rr, Sr), Qr.forEachSunShadowCaster((rr => {
          this.add(rr)
        })), Zr.finish();
        const Wr = 0 === Zr.parts;
        if (Wr && this.uploadedEmpty) return;
        this.uploadedEmpty = Wr;
        const {
          queue: ar
        } = this.device, {
          words: jr
        } = Zr;
        ar.writeBuffer(this.frameBuffer, 0, jr, 0, 16385), Zr.refs > 0 && ar.writeBuffer(this.frameBuffer, 65540, jr, PQ, Zr.refs), Wr || ar.writeBuffer(this.frameBuffer, 327684, jr, HQ, Zr.parts * XQ)
      }
      add(rr) {
        const Sr = this.gridFor(rr);
        if (!Sr) return;
        const {
          frame: Qr
        } = this, {
          qx: Zr,
          worldAt: Wr,
          instances: ar,
          instanceCount: jr,
          thin: Ir
        } = rr;
        if (ar)
          for (let fr = 0; fr < jr; fr++) Ir ? (AQ(ar, 16 * fr, Zr, Wr, this.qx), Qr.add(Sr, this.qx)) : Qr.add(Sr, ar, 16 * fr);
        else Qr.add(Sr, Zr, Wr)
      }
      gridFor(rr) {
        let {
          geometry: Sr,
          indexed: Qr,
          first: Zr,
          count: Wr,
          skip: ar
        } = rr, jr = this.grids.get(Sr);
        jr || (jr = new Map, this.grids.set(Sr, jr));
        const Ir = `${Qr?Zr:-1-Zr}:${Wr}:${null!==ar&&void 0!==ar?ar:""}`;
        let fr = jr.get(Ir);
        if (void 0 !== fr || this.gridsFull) return fr;
        const Er = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Er + 2;
        else if (Er > this.bakeDeadline) return;
        return fr = this.bake(Sr, Qr, Zr, Wr, ar), void 0 !== fr && jr.set(Ir, fr), fr
      }
      bake(rr, Sr, Qr, Zr, Wr) {
        const ar = rr.vertexAttributes.find((rr => "position" === rr.kind)),
          jr = ar ? function(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const ar = rr => Sr ? Sr[Qr + rr] : Qr + rr,
              jr = rr => null !== Wr && [0, 1, 2].some((Sr => {
                const Qr = ar(rr + Sr);
                return Qr >= Wr[0] && Qr < Wr[1]
              })),
              Ir = [1 / 0, 1 / 0, 1 / 0],
              fr = [-1 / 0, -1 / 0, -1 / 0];
            for (let Yr = 0; Yr + 2 < Zr; Yr += 3)
              if (!jr(Yr))
                for (let Sr = 0; Sr < 3; Sr++) {
                  const Qr = ar(Yr + Sr);
                  for (let Sr = 0; Sr < 3; Sr++) Ir[Sr] = Math.min(Ir[Sr], rr[3 * Qr + Sr]), fr[Sr] = Math.max(fr[Sr], rr[3 * Qr + Sr])
                }
            const Er = Math.max(fr[0] - Ir[0], fr[1] - Ir[1], fr[2] - Ir[2]);
            if (!(Er > 0)) return null;
            const pr = Er / 64,
              xr = [0, 0, 0],
              mr = [0, 0, 0],
              Nr = [0, 0, 0];
            for (let Yr = 0; Yr < 3; Yr++) xr[Yr] = Math.min(65, Math.ceil((fr[Yr] - Ir[Yr]) / pr) + 1), mr[Yr] = Ir[Yr] - pr / 2, Nr[Yr] = mr[Yr] + xr[Yr] * pr;
            const Ur = new Uint32Array(Math.ceil(xr[0] * xr[1] * xr[2] / 32)),
              tr = new Float64Array(9),
              hr = [0, 0, 0],
              zr = [0, 0, 0];
            for (let Yr = 0; Yr + 2 < Zr; Yr += 3)
              if (!jr(Yr)) {
                for (let Sr = 0; Sr < 3; Sr++) {
                  const Qr = ar(Yr + Sr);
                  for (let Zr = 0; Zr < 3; Zr++) tr[3 * Sr + Zr] = rr[3 * Qr + Zr]
                }
                for (let rr = 0; rr < 3; rr++) {
                  const Sr = Math.min(tr[rr], tr[3 + rr], tr[6 + rr]),
                    Qr = Math.max(tr[rr], tr[3 + rr], tr[6 + rr]);
                  hr[rr] = Math.max(0, Math.floor((Sr - mr[rr]) / pr - 1e-6)), zr[rr] = Math.min(xr[rr] - 1, Math.floor((Qr - mr[rr]) / pr + 1e-6))
                }
                for (let rr = hr[2]; rr <= zr[2]; rr++)
                  for (let Sr = hr[1]; Sr <= zr[1]; Sr++)
                    for (let Qr = hr[0]; Qr <= zr[0]; Qr++)
                      if (VQ(tr, mr[0] + (Qr + .5) * pr, mr[1] + (Sr + .5) * pr, mr[2] + (rr + .5) * pr, pr / 2)) {
                        const Zr = Qr + xr[0] * (Sr + xr[1] * rr);
                        Ur[Zr >>> 5] |= 1 << (31 & Zr)
                      }
              } return {
              words: Ur,
              lo: mr,
              hi: Nr,
              cell: pr,
              dims: xr
            }
          }((0, Nf.g)(ar, rr.vertexCount), Sr ? rr.indexData : null, Qr, Zr, Wr) : null;
        if (!jr) return null;
        const {
          words: Ir,
          ...fr
        } = jr;
        if (this.gridTop + Ir.length > RQ) return void(this.gridsFull = !0);
        const Er = this.gridTop;
        return this.gridTop += Ir.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Er, Ir), {
          ...fr,
          at: Er
        }
      }
    }
    const tf = Math.cos(1 * Math.PI / 180);

    function hf(rr, Sr) {
      return rr[0] * Sr[0] + rr[1] * Sr[1] + rr[2] * Sr[2] < tf
    }
    async function zf(rr) {
      const {
        pixels: Sr,
        width: Qr,
        height: Zr
      } = await rS(rr), Wr = new Uint8Array(Qr * Zr);
      for (let ar = 0; ar < Wr.length; ar++) Wr[ar] = Sr[4 * ar + 3];
      return {
        width: Qr,
        height: Zr,
        alpha: Wr
      }
    }
    class Yf {
      constructor(rr, Sr) {
        this.device = rr, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(wQ.p), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.stopWindow = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = rr.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = rr.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * mQ,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = rr.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Qr, Zr, Wr] = wQ.r;
        this.volume = rr.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Qr,
            height: Zr,
            depthOrArrayLayers: Wr
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = rr.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = rr.createBuffer({
          label: "sun-shadow-volume-work",
          size: wQ.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Sr ? new Uf(rr) : null, this.entityStandIn = Sr ? null : rr.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      dispose() {
        var rr;
        null === (rr = this.stopWindow) || void 0 === rr || rr.call(this)
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var rr, Sr;
        const Qr = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Qr.push("Lite sun shadow volume pipeline compiling");
        const Zr = null !== (rr = null === (Sr = this.casters) || void 0 === Sr ? void 0 : Sr.planesLoading) && void 0 !== rr ? rr : 0;
        return Zr > 0 && Qr.push(`${Zr} Lite sun shadow plane casters loading their textures`), Qr
      }
      entries() {
        var rr, Sr, Qr, Zr;
        const Wr = DS.n;
        return [{
          binding: Wr.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Wr.ZN,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Wr.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Wr.volume,
          resource: this.volumeView
        }, {
          binding: Wr.sampler,
          resource: this.volumeSampler
        }, {
          binding: Wr.entities,
          resource: {
            buffer: null !== (rr = null === (Sr = this.entities) || void 0 === Sr ? void 0 : Sr.frameBuffer) && void 0 !== rr ? rr : this.entityStandIn
          }
        }, {
          binding: Wr.entityGrids,
          resource: {
            buffer: null !== (Qr = null === (Zr = this.entities) || void 0 === Zr ? void 0 : Zr.gridBuffer) && void 0 !== Qr ? Qr : this.entityStandIn
          }
        }]
      }
      prepare(rr, Sr, Qr) {
        var Zr;
        this.entitiesThisFrame = !1;
        const Wr = null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.sunShadowReach()) && void 0 !== Zr ? Zr : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Qr || !Wr.sunShadow && !Wr.airShadow) return void(this.volumeHolds = null);
        if (rr.qx.zx !== sS) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${rr.qx.zx}; everything is lit.`)));
        const ar = this.start(rr);
        this.casters.update(rr.Ex, rr.Ex.qN.length);
        const jr = rr.um;
        for (let mr = 0; mr < 3; mr++) this.eye[mr] = Sr[mr] + jr[mr];
        const Ir = (0, wQ.y)(this.eye);
        this.staleNear = Ir;
        const fr = rr.qx.vt;
        ar.update(this.eye, ((rr, Sr, Qr) => fr.Ot(rr, Sr, Qr)), 1);
        const Er = (0, wQ.t)(Qr.crr()),
          pr = ar.eyeChunk,
          xr = this.uniformInts;
        for (let mr = 0; mr < 3; mr++) xr[mr] = pr[mr], xr[4 + mr] = Ir[mr];
        this.entitiesThisFrame = null !== this.entities && Wr.sunShadow, this.entitiesThisFrame && MQ(this.uniformFloats, 8, Sr, Er), null !== this.volumeHolds && (this.castersWritten || hf(Er, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Ir, Er, pr)
      }
      markStale(rr) {
        const Sr = this.staleNear,
          Qr = sS,
          Zr = [rr.i * Qr, rr.j * Qr, rr.k * Qr];
        for (let ar = 0; ar < 3; ar++)
          if (Zr[ar] + Qr <= Sr[ar] - Qr || Zr[ar] >= Sr[ar] + wQ.r[ar] + Qr) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Wr = this.stale;
        for (let ar = 0; ar < Wr.length; ar += 4)
          if (Wr[ar] === rr.i && Wr[ar + 1] === rr.j && Wr[ar + 2] === rr.k) return void(Wr[ar + 3] = this.swept);
        if (16 === Wr.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Wr.push(rr.i, rr.j, rr.k, this.swept)
      }
      writeStale() {
        const rr = this.swept,
          Sr = this.stale;
        this.staleAll && rr - this.staleAllSwept >= wQ.j && (this.staleAll = !1, Sr.length = 0);
        let Qr = 0;
        for (let Wr = 0; Wr < Sr.length; Wr += 4)
          if (rr - Sr[Wr + 3] < wQ.j) {
            for (let rr = 0; rr < 4; rr++) Sr[Qr + rr] = Sr[Wr + rr];
            Qr += 4
          } Sr.length = Qr;
        const Zr = this.uniformInts;
        Zr[3] = this.staleAll ? 5 : Qr / 4;
        for (let Wr = 0; Wr < 4; Wr++)
          for (let rr = 0; rr < 3; rr++) Zr[16 + 4 * Wr + rr] = 4 * Wr < Qr ? Sr[4 * Wr + rr] * sS : 0
      }
      writeUniform() {
        const rr = this.uniformInts;
        let Sr = this.uniformWritten;
        if (Sr) {
          let Qr = !0;
          for (let Zr = 0; Zr < rr.length && Qr; Zr++) Qr = rr[Zr] === Sr[Zr];
          if (Qr) return
        }
        Sr ??= this.uniformWritten = new Int32Array(rr.length), Sr.set(rr), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(rr) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, rr)
      }
      computeVolume(rr, Sr, Qr) {
        const Zr = this.buildVolumePass();
        if (!Zr) return void(this.volumeHolds = null);
        const Wr = (0, wQ.x)(this.volumeHolds, rr);
        this.volumeHolds = rr;
        const ar = 1 === Wr.length && Wr[0].size.every(((rr, Sr) => rr === wQ.r[Sr])),
          jr = this.sweptChunk,
          Ir = this.sweptLight,
          fr = Sr[0] !== Ir[0] || Sr[1] !== Ir[1] || Sr[2] !== Ir[2],
          Er = Qr[0] !== jr[0] || Qr[1] !== jr[1] || Qr[2] !== jr[2],
          pr = fr && hf(Sr, Ir);
        if ((ar || this.written || Er || pr) && (this.fastLeft = wQ.j), ar || this.written || fr || Er) {
          this.written = !1;
          for (let rr = 0; rr < 3; rr++) jr[rr] = Qr[rr], Ir[rr] = Sr[rr];
          this.sweepLeft = ar ? 0 : wQ.j
        }
        if (ar ? this.swept += wQ.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Wr.push(...(0, wQ.C)(rr, this.slice)), this.slice = (this.slice + 1) % wQ.j, this.swept++), 0 === Wr.length) return;
        const xr = (0, wQ.E)(this.workData, Sr, Wr);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const mr = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Nr = mr.beginComputePass({
            label: "sun-shadow-volume"
          });
        Nr.setPipeline(Zr.pipeline), Nr.setBindGroup(oQ.group, Zr.bindGroup), Nr.dispatchWorkgroups(Math.ceil(xr / wQ.m)), Nr.end(), this.device.queue.submit([mr.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const rr = oQ,
          Sr = GPUShaderStage.COMPUTE,
          Qr = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: rr.uniform,
              visibility: Sr,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: rr.ZN,
              visibility: Sr,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: rr.special,
              visibility: Sr,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: rr.work,
              visibility: Sr,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: rr.volume,
              visibility: Sr,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Zr = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Qr,
            entries: [{
              binding: rr.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: rr.ZN,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: rr.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: rr.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: rr.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Qr]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: bQ()
            }),
            entryPoint: "main"
          }
        }).then((rr => {
          this.volumePass = {
            pipeline: rr,
            bindGroup: Zr
          }
        }), (rr => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(rr)}`)
        })), null
      }
      start(rr) {
        if (this.window) return this.window;
        const Sr = (rr, Sr) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * rr, Sr)
        };
        this.casters = new ff(((rr, Qr) => {
          this.castersWritten = !0, Sr(rr, Qr)
        }), zf);
        const Qr = new mf(this.casters, ((rr, Sr) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * rr, Sr)
        }), Sr);
        Qr.encoded = rr => {
          this.markStale(rr)
        };
        const Zr = rr => {
          Qr.chunkAdded(rr)
        };
        return rr.qx.on("chunkAdded", Zr), this.stopWindow = () => {
          rr.qx.removeListener("chunkAdded", Zr)
        }, this.window = Qr, Qr
      }
    }
    var nf = Qr(40274),
      ef = Qr(40276);
    const Kf = 0,
      yf = 3,
      Bf = 4,
      Tf = 5;

    function vf(rr, Sr, Qr, Zr) {
      rr.drawOffset(Sr, Zr + Kf), Sr[Zr + yf] = rr.drawTime(), Qr[Zr + Bf] = rr.ring.drawStart(), Qr[Zr + Tf] = rr.ring.drawCount()
    }
    const Of = `\n${GZ}\n\nconst MAX_STOPS = ${ef.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${ef.b/4}>,\n\tcolor1: array<vec4f, ${ef.b}>,\n\tcolor2: array<vec4f, ${ef.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${ef.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${ef.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var Lf = Qr(54130);
    class lf {
      constructor(rr, Sr, Qr, Zr) {
        this.device = rr, this.system = Sr, this.frameIndex = Qr, this.bindings = Zr, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Lf.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (rr, Sr) => {
          this.device.queue.writeBuffer(this.ring, rr * ef.f * 4, this.system.ring.records, rr * ef.f, (Sr - rr) * ef.f)
        };
        const {
          name: Wr
        } = Sr;
        this.ring = rr.createBuffer({
          label: `particles-${Wr}`,
          size: Sr.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = rr.createBuffer({
          label: `particles-uniforms-${Wr}`,
          size: 4 * ef.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(rr) {
        const Sr = (0, Lf.d)(this.system, this.uniformBits, rr);
        Sr && (this.uniformBits = Sr, this.device.queue.writeBuffer(this.uniforms, 0, Sr))
      }
      bind() {
        const {
          system: rr
        } = this, Sr = this.texture;
        (0, Lf.l)(rr, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${rr.name}`,
          size: [ef.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * ef.m
        }, [ef.m, 1]));
        const Qr = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Sr.view && this.boundSampler === Sr.sampler && this.boundRamp === Qr || (this.boundView = Sr.view, this.boundSampler = Sr.sampler, this.boundRamp = Qr, this.bindGroup = this.device.createBindGroup({
          label: `particles-${rr.name}`,
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
            resource: Sr.sampler
          }, {
            binding: 3,
            resource: Sr.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Qr
          }]
        }))
      }
      destroy() {
        var rr;
        this.ring.destroy(), this.uniforms.destroy(), null === (rr = this.ramp) || void 0 === rr || rr.destroy()
      }
    }
    class Xf {
      constructor(rr, Sr) {
        this.device = rr, this.resources = Sr, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, HS.c)(), this.build(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (rr, Sr) => (this.bindTarget(Sr), {
            renderable: this.renderable,
            pipeline: lS(this.device, Sr),
            draw: rr => Sr === this.preparedTarget ? this.draw(rr) : 0
          })
        }
      }
      rebind(rr) {
        this.device = rr, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
        for (const [Sr, Qr] of this.systems) {
          const Zr = new lf(rr, Sr, Qr.frameIndex, this.bindings),
            Wr = Sr.ring.drawCount();
          Wr > 0 && Zr.upload(0, Wr), this.systems.set(Sr, Zr)
        }
      }
      build() {
        const {
          device: rr
        } = this, Sr = rr.createBindGroupLayout({
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
        this.frameLayout = rr.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = rr.createPipelineLayout({
          bindGroupLayouts: [BS(rr), Sr, this.frameLayout]
        }), this.module = rr.createShaderModule({
          label: "particles",
          code: Of
        });
        const Qr = rr.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        rr.queue.writeTexture({
          texture: Qr
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Sr,
          rampSampler: rr.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Qr.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
      }
      get Gar() {
        return this.systems.size
      }
      reset() {
        for (const rr of this.systems.keys()) rr.reset()
      }
      describePendingWork() {
        return (0, nf.d)(this.systems.keys(), "Lite")
      }
      QG(rr, Sr) {
        const Qr = new nf.c(rr, Sr, this);
        return this.systems.set(Qr, new lf(this.device, Qr, this.allocateFrameIndex(), this.bindings)), Qr
      }
      Prr(rr, Sr) {
        for (const Qr of this.systems.keys()) Qr.Prr(rr, Sr)
      }
      canDraw(rr) {
        const Sr = this.systems.get(rr),
          Qr = rr.texture ? this.resources.boundTexture(rr.texture) : null;
        if (!Sr || !Qr || !this.targetPipelines) return !1;
        if (Sr.texture = Qr, Sr.pipelines.length = 0, !WS(rr.blendMode)) return this.warnOnce(`blend:${rr.blendMode}`, `particle blend mode ${rr.blendMode} is not drawn (${rr.name})`), !0;
        const Zr = (0, Fr.h)(rr.blendMode);
        for (const Wr of Zr) {
          const rr = this.pipelineFor(Wr);
          if (!1 === rr) return Sr.pipelines.length = 0, !0;
          rr && Sr.pipelines.push(rr)
        }
        return Sr.pipelines.length === Zr.length
      }
      disposeStopped(rr) {
        rr.dispose()
      }
      remove(rr) {
        const Sr = this.systems.get(rr);
        Sr && (this.systems.delete(rr), Sr.destroy(), this.freeFrameIndices.push(Sr.frameIndex))
      }
      prepare(rr) {
        const Sr = rr.animationRatio || 1;
        XS(this.renderable._worldCenter, rr, vS), this.preparedTarget = this.target, this.draws.length = 0;
        let Qr = 0;
        for (const Zr of this.systems.values()) {
          const rr = Zr.system;
          if (!rr.animateIfActive(Sr)) continue;
          if (rr.ring.takeUploads(Zr.upload), !rr.hasLiveParticles() || 0 === Zr.pipelines.length) continue;
          Zr.writeUniforms(this.warnOnce), Zr.bind();
          const Wr = 64 * Zr.frameIndex;
          Zr.count = rr.ring.drawCount(), vf(rr, this.frameData, this.frameBits, Wr), Qr = Math.max(Qr, Wr + 64), this.draws.push(Zr)
        }
        Qr > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Qr)
      }
      draw(rr) {
        let Sr = 0,
          Qr = null;
        for (const Zr of this.draws) {
          rr.setBindGroup(1, Zr.bindGroup), rr.setBindGroup(2, this.frameBindGroup, [256 * Zr.frameIndex]);
          for (const Wr of Zr.pipelines) Wr !== Qr && (rr.setPipeline(Wr), Qr = Wr), rr.draw(4, Zr.count), Sr++
        }
        return Sr
      }
      bindTarget(rr) {
        this.target = rr;
        const Sr = `${rr._colorFormat}|${rr._depthStencilFormat}|${rr._depthCompare}|${rr._sampleCount}`;
        let Qr = this.pipelines.get(Sr);
        Qr || (Qr = new Map, this.pipelines.set(Sr, Qr)), this.targetPipelines = Qr
      }
      pipelineFor(rr) {
        var Sr;
        const Qr = this.targetPipelines,
          Zr = Qr.get(rr);
        if (void 0 !== Zr) return Zr;
        Qr.set(rr, null);
        const Wr = this.target,
          ar = rr === Fr.d,
          jr = null !== (Sr = Wr._depthCompare) && void 0 !== Sr ? Sr : TS,
          {
            device: Ir
          } = this;
        return Ir.createRenderPipelineAsync({
          label: `particles-${rr}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: YS({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: ar ? 1 : 0
            }
          }, Wr, aS((0, Fr.g)(rr))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Wr._depthStencilFormat ? {
            format: Wr._depthStencilFormat,
            depthCompare: jr,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Wr._sampleCount
          }
        }).then((Sr => {
          Qr.set(rr, Sr)
        }), (Sr => {
          Qr.set(rr, !1), console.error("Lite particle pipeline failed", Sr), pS(Ir, "particles", `blend-${rr}`, Sr)
        })), null
      }
      allocateFrameIndex() {
        const rr = this.freeFrameIndices.pop();
        if (void 0 !== rr) return rr;
        const Sr = this.nextFrameIndex++;
        if (64 * (Sr + 1) > this.frameData.length) {
          const rr = new Float32Array(2 * this.frameData.length);
          rr.set(this.frameData), this.frameData = rr, this.frameBits = new Uint32Array(rr.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Sr
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
    class Pf {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.lite = rr, this.canvas = Sr, this.info = Qr, this.resources = Wr, this.JZr = !1, this.needPOTTextures = !1, this.W9 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Sr.width, this.renderHeight = Sr.height, this.caps = {
          maxTextureSize: Zr.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Zr.maxTextureArrayLayers
        }
      }
      getCaps() {
        return this.caps
      }
      detach() {
        this.lite = null
      }
      rebind(rr) {
        this.lite = rr, (0, Ar.p)(rr, this.renderWidth, this.renderHeight)
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
      setSize(rr, Sr) {
        if (this.renderWidth === rr && this.renderHeight === Sr) return !1;
        const Qr = this.renderWidth,
          Zr = this.renderHeight;
        this.renderWidth = rr, this.renderHeight = Sr;
        const Wr = this.lite;
        if (null === Wr) return !0;
        try {
          (0, Ar.p)(Wr, rr, Sr)
        } catch (ar) {
          if (ar instanceof DOMException && "InvalidStateError" === ar.name) {
            this.renderWidth = Qr, this.renderHeight = Zr;
            try {
              (0, Ar.p)(Wr, Qr, Zr)
            } catch {
              this.canvas.width = Qr, this.canvas.height = Zr
            }
            return console.warn("WebGPU could not allocate render targets for resize", rr, Sr, ar.message), !1
          }
          throw ar
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
      lB() {
        const rr = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : rr - this.lastFrameTime, this.lastFrameTime = rr
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(rr, Sr) {
        const Qr = document.createElement("canvas");
        return Qr.width = rr, Qr.height = Sr, Qr
      }
      K9(rr, Sr) {
        var Qr;
        return null !== (Qr = this.resources.K9.get(rr)) && void 0 !== Qr ? Qr : new mS(this.resources, rr, Sr)
      }
      atlasArrays(rr) {
        return this.resources.atlasArrays(rr)
      }
    }
    class Hf {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(rr) {
        this.fov = rr.fov, this.nearPlane = rr.near, this.farPlane = rr.far;
        const Sr = rr.worldMatrix;
        for (let Qr = 0; Qr < 16; Qr++)
          if (this.worldMatrix[Qr] !== Sr[Qr]) return this.worldMatrix.set(Sr), void this.worldMatrixVersion++
      }
    }
    class qf {
      constructor(rr, Sr, Qr, Zr) {
        this.canvas = Sr, this.options = Qr, this.vQr = void 0, this.backendName = "WebGPU (Lite)", this.Qrr = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Hf, this.lastFrameTime = 0, this.engine = void 0, this.Dt = void 0, this.sceneTask = void 0, this.device = void 0, this.liteTerrain = void 0, this.meshes = void 0, this.sunShadow = void 0, this.refusals = void 0, this.halted = !1, this.Ox = null, this.firstTerrain = null, this.trialFrames = 0, this.install(rr);
        const {
          resources: Wr,
          meshes: ar
        } = rr;
        this.resources = Wr, this.particles = rr.particles, this.vQr = new Pf(rr.engine, Sr, Zr, rr.device.limits, Wr), (0, Lr.B)({
          wI: rr => {
            Hr(rr) && Wr.textureSlot(rr)
          },
          loaded: rr => Hr(rr) ? Wr.textureLoaded(rr) : null,
          canvasUpdated: (rr, Sr, Qr) => {
            Hr(rr) && Wr.canvasUpdated(rr, Sr, Qr)
          }
        }), this.Qrr = ar.Qrr, this.modelMeshes = ar.modelMeshes
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
      install(rr) {
        this.engine = rr.engine, this.Dt = rr.Dt, this.sceneTask = rr.sceneTask, this.device = rr.device, this.liteTerrain = rr.terrain, this.meshes = rr.meshes, this.sunShadow = rr.sunShadow;
        const Sr = new wr(rr.device.lost);
        this.refusals = Sr, Sr.deviceLost.then((() => {
          var Sr;
          Sr = rr.device, fS.add(Sr)
        })), rr.Dt.camera = this.camera
      }
      async rebuild() {
        var rr, Sr, Qr, Zr, Wr;
        const ar = await Mf();
        this.halted = !0, this.liteTerrain.retire(), null === (rr = this.sunShadow) || void 0 === rr || rr.dispose(), this.vQr.detach();
        try {
          (0, Vr.e)(this.engine)
        } catch (pr) {
          console.warn("Lite: disposing the lost device's engine threw", pr)
        }
        const jr = {
            width: this.vQr.renderWidth,
            height: this.vQr.renderHeight
          },
          Ir = await Gf(this.canvas, this.options, jr, ar),
          fr = eS(Ir),
          Er = kf(fr);
        try {
          this.resources.rebind(Ir, fr), this.particles.rebind(fr), this.Qrr.dropSteady();
          const rr = {
              resources: this.resources,
              particles: this.particles,
              Qrr: this.Qrr,
              modelMeshes: this.modelMeshes
            },
            Sr = await Af(Ir, fr, this.options, rr),
            Qr = Er();
          if (null !== Qr) throw new Error(`WebGPU device lost while Lite was rebuilding (${Qr.reason}): ${Qr.message}`);
          const {
            r: Zr,
            g: Wr,
            b: ar
          } = this.Dt.clearColor;
          this.install(Sr), this.setClearColour(Zr, Wr, ar), this.vQr.rebind(Ir)
        } catch (pr) {
          throw fr.destroy(), pr
        }
        return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (Sr = this.Ox) || void 0 === Sr || Sr.resize(), null === (Qr = this.Ox) || void 0 === Qr || null === (Zr = Qr.gm) || void 0 === Zr || null === (Wr = Zr.qB) || void 0 === Wr || Wr.remeshForRendererRebuild(), {
          terrainDrawn: this.whenTerrainDrawn()
        }
      }
      whenTerrainDrawn() {
        return new Promise(((rr, Sr) => {
          this.firstTerrain = {
            drawn: rr,
            failed: Sr
          }
        }))
      }
      get castsEntitySunShadows() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.sunShadow) || void 0 === Sr ? void 0 : Sr.tracesEntities) && void 0 !== rr && rr
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(rr) {
        this.Ox = rr, this.modelMeshes.attach(rr.model, rr.sceneMirror);
        const Sr = rr.Dt;
        this.setClearColour(Sr.clearColor.r, Sr.clearColor.g, Sr.clearColor.b), Sr.draw = () => {
          this.drawFrame(rr, Sr)
        }
      }
      get yx() {
        return !this.refusals.lost && !this.halted
      }
      render(rr) {
        if (this.yx) {
          try {
            this.vQr.lB(), rr.Dt.render()
          } catch (Sr) {
            throw this.refusals.frameFailed(Sr), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(Sr), this.firstTerrain = null), Sr
          }
          this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var rr, Sr, Qr, Zr;
        const Wr = [...this.particles.describePendingWork(), ...null !== (rr = null === (Sr = this.sunShadow) || void 0 === Sr ? void 0 : Sr.describePendingWork()) && void 0 !== rr ? rr : []],
          ar = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Qr = this.terrain.sceneDepth) && void 0 !== Qr && Qr.compiling ? 1 : 0) + (null !== (Zr = this.terrain.shadowMask) && void 0 !== Zr && Zr.compiling ? 1 : 0);
        ar > 0 && Wr.push(`${ar} Lite pipelines compiling`);
        const jr = this.terrain.buffersAwaitingVerdict;
        jr > 0 && Wr.push(`${jr} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Ir = this.resources.texturesLoading;
        return Ir > 0 && Wr.push(`${Ir} Lite textures loading`), Wr
      }
      prepareTexture(rr) {
        return null !== this.resources.boundTexture(rr) || this.resources.textureFailed(rr)
      }
      drawFrame(rr, Sr) {
        var Qr, Zr, Wr, ar, jr, Ir;
        const fr = zI(rr);
        this.camera.copyFromView(fr), this.setClearColour(fr.clearColour[0], fr.clearColour[1], fr.clearColour[2]), null === (Qr = this.sunShadow) || void 0 === Qr || Qr.prepare(rr.gm, fr.eye, null !== (Zr = rr.gm.zU) && void 0 !== Zr ? Zr : null), this.terrain.prepare(rr, fr), null === (Wr = this.terrain.sceneDepth) || void 0 === Wr || Wr.setPlanes(fr.near, fr.far), null === (ar = this.terrain.shadowMask) || void 0 === ar || ar.prepare(fr), QI(this.sceneTask), this.meshes.prepare(Sr, fr, rr.model.earthSky, null !== (jr = rr.gm.zU) && void 0 !== jr ? jr : null), this.particles.prepare(fr);
        const Er = performance.now();
        this.resources.flushUploads(), null === (Ir = this.sunShadow) || void 0 === Ir || Ir.traceEntities(this.meshes);
        try {
          (0, Ar.l)(this.engine, this.lastFrameTime > 0 ? Er - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Er, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Er), this.firstTerrain = null)
      }
      setClearColour(rr, Sr, Qr) {
        const Zr = this.Dt.clearColor;
        Zr.r = rr, Zr.g = Sr, Zr.b = Qr, Zr.a = 1
      }
    }

    function Rf(rr) {
      const Sr = {};
      for (const Qr in rr.limits) {
        const Zr = rr.limits[Qr];
        "number" === typeof Zr && (Sr[Qr] = Zr)
      }
      return Sr
    }
    const gf = "WebGPU device lost while Lite was starting";
    async function Cf(rr, Sr) {
      const Qr = await Mf(),
        Zr = Qr.info,
        Wr = {
          vendor: (null === Zr || void 0 === Zr ? void 0 : Zr.vendor) || "unknown vendor",
          renderer: (null === Zr || void 0 === Zr ? void 0 : Zr.architecture) || "unknown renderer",
          version: (null === Zr || void 0 === Zr ? void 0 : Zr.description) || "unknown version"
        };
      rr.style.background = "black";
      const ar = await Gf(rr, Sr, Sr.bufferSize, Qr),
        jr = eS(ar),
        Ir = kf(jr);
      try {
        const Qr = new qf(await Af(ar, jr, Sr, null), rr, Sr, Wr),
          Zr = Ir();
        if (null !== Zr) {
          const {
            reason: rr,
            message: Sr
          } = Zr;
          throw Object.assign(new Error(`${gf} (${rr}): ${Sr}`), {
            fallbackReason: gf
          })
        }
        return Qr
      } catch (fr) {
        throw jr.destroy(), null === Ir() ? fr : (0, SI.f)(fr, "device")
      }
    }
    async function Mf() {
      const rr = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!rr) throw (0, SI.f)(new Error("No WebGPU adapter"), "no_adapter");
      return rr
    }
    async function Gf(rr, Sr, Qr, Zr) {
      let Wr;
      try {
        Wr = await (0, Ar.f)(rr, {
          msaaSamples: Sr.aZr ? 4 : 1,
          requiredLimits: Rf(Zr),
          alphaMode: "premultiplied"
        })
      } catch (jr) {
        throw (0, SI.f)(jr, "#47" === (null === (ar = jr) || void 0 === ar ? void 0 : ar.message) ? "no_adapter" : "device")
      }
      var ar;
      return null !== Qr && (0, Ar.p)(Wr, Qr.width, Qr.height), Wr
    }

    function kf(rr) {
      let Sr = null;
      return rr.lost.then((rr => {
        Sr = rr, console.error(`WebGPU device lost (${rr.reason}): ${rr.message}`)
      })), () => Sr
    }
    async function Af(rr, Sr, Qr, Zr) {
      var Wr, ar;
      let {
        sceneDepth: jr,
        sunShadow: Ir
      } = Qr;
      const fr = (0, ir.b)(rr),
        Er = null !== (Wr = null === Zr || void 0 === Zr ? void 0 : Zr.resources) && void 0 !== Wr ? Wr : new sj(rr, Sr),
        pr = new rf(Sr),
        xr = new Rj(Sr, Er, (rr => function(rr, Sr) {
          for (const Zr of KS(rr)) {
            var Qr;
            if (Zr._targetSignature === Sr) return null !== (Qr = Zr._sceneBG) && void 0 !== Qr ? Qr : null
          }
          return null
        }(fr, rr)), null === Zr || void 0 === Zr ? void 0 : Zr.Qrr, null === Zr || void 0 === Zr ? void 0 : Zr.modelMeshes),
        mr = null !== (ar = null === Zr || void 0 === Zr ? void 0 : Zr.particles) && void 0 !== ar ? ar : new Xf(Sr, Er);
      for (const tr of function(rr, Sr, Qr) {
          return [Sr.opaqueRenderable, rr.opaqueRenderable, rr.skyLastRenderable, Qr.renderable, Sr.transparentRenderable, rr.transparentRenderable, rr.frontRenderable]
        }(xr, pr, mr)) nS(fr, tr);
      const Nr = function(rr) {
        for (const Sr of KS(rr))
          if ("Dt" === Sr.name) return Sr;
        throw new Error("Lite: the scene has no render task named scene")
      }(fr);
      jr && pr.installSceneDepth(Nr, rr);
      const Ur = Ir ? new Yf(Sr, Ir.entities) : null;
      return pr.sunShadow = Ur, Ur && null !== Ir && void 0 !== Ir && Ir.entities && (pr.shadowMask = new qI(Sr, Nr, rr, pr)), xr.sunShadow = Ur, await (0, ir.e)(fr), {
        engine: rr,
        Dt: fr,
        sceneTask: Nr,
        device: Sr,
        terrain: pr,
        meshes: xr,
        sunShadow: Ur,
        resources: Er,
        particles: mr
      }
    }
  },
  42673: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => Ur,
      b: () => Wr,
      d: () => Zr,
      h: () => mr,
      i: () => pr,
      k: () => hr,
      m: () => ar,
      n: () => Ir,
      p: () => fr,
      q: () => jr,
      u: () => tr,
      x: () => Nr
    });
    const Zr = 3,
      Wr = 0,
      ar = 1,
      jr = 2,
      Ir = {
        uniform: 3,
        ZN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fr = 10,
      Er = "BloxdPackInputs",
      pr = "bloxdPackInputs",
      xr = [{
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
      mr = 80;

    function Nr() {
      const rr = xr.map((rr => {
        let {
          name: Sr,
          type: Qr
        } = rr;
        return `    ${Sr}: ${Qr},\n`
      })).join("");
      return `struct ${Er} {\n${rr}}\n@group(${Zr}) @binding(${Wr}) var<uniform> ${pr}: ${Er};\n`
    }

    function Ur(rr, Sr) {
      const Qr = new DataView(rr, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, mr),
        [Zr, Wr, ar, jr, Ir, fr] = xr;
      Qr.setFloat32(Zr.offset, Sr.seconds, !0), Qr.setUint32(Wr.offset, Sr.lit ? 1 : 0, !0);
      for (let Er = 0; Er < 3; Er++) Qr.setInt32(ar.offset + 4 * Er, Sr.renderOffset[Er], !0), Qr.setFloat32(jr.offset + 4 * Er, Sr.crr[Er], !0), Qr.setFloat32(Ir.offset + 4 * Er, Sr.eyePosition[Er], !0), Qr.setFloat32(fr.offset + 4 * Er, Sr.shadowDirection[Er], !0)
    }

    function tr(rr) {
      const Sr = new Uint32Array(Math.max(1, rr.length));
      return rr.forEach(((rr, Qr) => {
        let {
          id: Zr,
          rotation: Wr
        } = rr;
        Sr[Qr] = 65535 & Zr | (3 & Wr) << 16
      })), Sr
    }
    const hr = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);